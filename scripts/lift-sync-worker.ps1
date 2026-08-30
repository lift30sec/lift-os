param([switch]$CheckOnly)
$ErrorActionPreference = 'Stop'
$repo = 'C:/Users/houki/Documents/Codex/2026-08-23/lift-daily-operations/lift-os-publish-038c'
$git = 'C:/Users/houki/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/git/cmd/git.exe'
$execPath = 'C:/Users/houki/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/git/mingw64/bin'
$remote = 'https://github.com/lift30sec/lift-os.git'
$queue = Join-Path $repo 'output/git-sync'
$requestPath = Join-Path $queue 'request.json'
$statusPath = Join-Path $queue 'status.json'
$sha = $null
$env:GIT_TERMINAL_PROMPT = '0'
$env:GCM_INTERACTIVE = 'Never'
function Invoke-LiftGit([string[]]$Arguments) {
    $savedPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        $result = & $git "--exec-path=$execPath" -c "safe.directory=$repo" -c 'core.hooksPath=NUL' -c 'credential.helper=' -c 'credential.helper=manager' -c 'credential.interactive=false' -c 'http.sslVerify=true' -c 'push.followTags=false' -c 'push.recurseSubmodules=no' -C $repo @Arguments 2>&1
        $code = $LASTEXITCODE
    } finally { $ErrorActionPreference = $savedPreference }
    if ($code -ne 0) { throw ('Git operation failed: ' + ($result -join "`n")) }
    return ($result -join "`n").Trim()
}
function Write-LiftStatus([string]$State, [string]$Message) {
    $record = @{state=$State; commit=$sha; message=$Message; checkedAt=[DateTimeOffset]::Now.ToString('o')}
    $temp = Join-Path $queue ('status-' + [guid]::NewGuid().ToString('N') + '.tmp')
    $record | ConvertTo-Json | Set-Content -LiteralPath $temp -Encoding UTF8
    Move-Item -LiteralPath $temp -Destination $statusPath -Force
}
try {
    if (!(Test-Path -LiteralPath $requestPath)) { exit 0 }
    $request = Get-Content -LiteralPath $requestPath -Raw | ConvertFrom-Json
    $sha = [string]$request.commit
    $base = [string]$request.baseCommit
    if ($request.schema -ne 1 -or $request.approved -ne $true -or $sha -cnotmatch '^[a-f0-9]{40}$' -or $base -cnotmatch '^[a-f0-9]{40}$') { throw 'Invalid approval request.' }
    if ($request.repository -ne $remote -or $request.branch -ne 'main') { throw 'Unexpected destination.' }
    if (!(Test-Path -LiteralPath $git)) { throw 'Bundled Git is missing.' }
    if ((Invoke-LiftGit -Arguments @('remote','get-url','--push','origin')) -ne $remote) { throw 'Repository destination changed.' }
    if ((Invoke-LiftGit -Arguments @('rev-parse',"$sha^{commit}")) -ne $sha) { throw 'Approved commit is missing.' }
    $null = Invoke-LiftGit -Arguments @('merge-base','--is-ancestor',$base,$sha)
    $null = Invoke-LiftGit -Arguments @('merge-base','--is-ancestor',$sha,'refs/heads/main')
    if ($CheckOnly) { Write-Output "Request valid: $sha (no network or push performed)"; exit 0 }
    if (Test-Path -LiteralPath $statusPath) {
        $previous = Get-Content -LiteralPath $statusPath -Raw | ConvertFrom-Json
        if ($previous.state -eq 'synced' -and $previous.commit -eq $sha) { exit 0 }
    }
    $line = Invoke-LiftGit -Arguments @('ls-remote','--exit-code',$remote,'refs/heads/main')
    $remoteSha = ($line -split '\s+')[0]
    if ($remoteSha -eq $sha) { Write-LiftStatus 'synced' 'Approved commit is already on main.'; exit 0 }
    if ($remoteSha -ne $base) { throw 'Remote main changed. Review and refresh the approval request; no force push.' }
    $null = Invoke-LiftGit -Arguments @('push','--porcelain',$remote,"${sha}:refs/heads/main")
    $verified = Invoke-LiftGit -Arguments @('ls-remote','--exit-code',$remote,'refs/heads/main')
    if (($verified -split '\s+')[0] -ne $sha) { throw 'Remote verification did not match the approved commit.' }
    Write-LiftStatus 'synced' 'Approved commit verified on remote main.'
} catch {
    if (Test-Path -LiteralPath $queue) { Write-LiftStatus 'needs_attention' $_.Exception.Message }
    Write-Error $_.Exception.Message
    exit 1
}
