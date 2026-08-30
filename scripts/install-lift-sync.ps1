$ErrorActionPreference = 'Stop'
$identity = [Security.Principal.WindowsIdentity]::GetCurrent().Name
if ($identity -ne 'ASAHIBM\houki') { throw 'Run this installer from your normal Windows PowerShell as ASAHIBM\houki, not from the Codex sandbox.' }
$taskName = 'LIFT-Approved-GitHub-Sync'
$target = Join-Path ([Environment]::GetFolderPath('LocalApplicationData')) 'LIFT-GitHub-Sync'
$workerSource = Join-Path $PSScriptRoot 'lift-sync-worker.ps1'
$workerTarget = Join-Path $target 'worker.ps1'
if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) { throw 'LIFT sync task already exists. Inspect it before updating; nothing overwritten.' }
if (Test-Path -LiteralPath $workerTarget) { throw 'A worker already exists. Inspect it before updating; nothing overwritten.' }
$null = New-Item -ItemType Directory -Path $target -Force
Copy-Item -LiteralPath $workerSource -Destination $workerTarget
$shell = Join-Path $env:SystemRoot 'System32/WindowsPowerShell/v1.0/powershell.exe'
$action = New-ScheduledTaskAction -Execute $shell -Argument ('-NoProfile -NonInteractive -WindowStyle Hidden -File "' + $workerTarget + '"')
$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) -RepetitionInterval (New-TimeSpan -Minutes 5)
$logon = New-ScheduledTaskTrigger -AtLogOn -User $identity
$principal = New-ScheduledTaskPrincipal -UserId $identity -LogonType Interactive -RunLevel Limited
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -MultipleInstances IgnoreNew -ExecutionTimeLimit (New-TimeSpan -Minutes 3) -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries
$null = Register-ScheduledTask -TaskName $taskName -Action $action -Trigger @($trigger,$logon) -Principal $principal -Settings $settings -Description 'Push only an explicitly approved LIFT commit to lift30sec/lift-os main. No commit, force push, or SNS publication.'
Start-ScheduledTask -TaskName $taskName
Write-Output 'LIFT sync registered. It checks approved requests every 5 minutes while you are logged in. Registration is not yet proof of successful GitHub synchronization.'
Write-Output 'Status: C:\Users\houki\Documents\Codex\2026-08-23\lift-daily-operations\lift-os-publish-038c\output\git-sync\status.json'
