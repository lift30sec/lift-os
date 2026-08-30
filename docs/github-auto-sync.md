# LIFT GitHub同期

状態: 準備済み。通常Windowsユーザーによる登録と実送信の確認は未完了。

2026-08-30検証: 2本のPowerShellスクリプトは構文解析を通過。Windows PowerShellの `-File` によるCheckOnly試験は実行ポリシーで拒否されたため、実動作は未検証。ポリシー変更・回避・タスク登録は行っていない。通常ユーザー環境で `Get-ExecutionPolicy -List` の確認が必要。初回依頼は送信済み4328134の確認だけで、新しい変更は送信しない。

## 初回登録

通常のPowerShellで `scripts/install-lift-sync.ps1` を実行する。ASAHIBM\houki 以外での登録は拒否する。管理者権限・パスワード保存・実行ポリシーの変更は行わない。会社のポリシーで拒否されたら回避せず管理者へ確認する。

インストーラーはワーカーをユーザーのLocalAppDataへコピーし、Windowsタスク `LIFT-Approved-GitHub-Sync` を登録する。既存タスクやワーカーは上書きしない。Codex側から通常ユーザーとして直接起動しない。ワーカー更新もユーザーによる再確認が必要。

## 日常運用

公開後に差分と送信範囲の全コミットを確認し、公開承認の範囲だけをコミットする。`output/git-sync/request.json` に schema=1、approved=true、repository=`https://github.com/lift30sec/lift-os.git`、branch=`main`、commit=承認済み40桁SHA、baseCommit=最後に送信確認した40桁SHA、reason=承認根拠を保存する。送信開始後に次の依頼で上書きせず、statusを確認する。

これは人間の承認を暗号的に検証する仕組みではない。依頼ファイルを作る運用側がユーザーの公開・同期承認とコミット範囲を確認する。単にHEADが進んだという理由で依頼を出してはいけない。

5分ごととログイン時に確認。PC停止中・ログアウト中は動かない。ネットワーク障害は次回再試行、認証失効は対応が必要。status.jsonのstate=syncedと対象commit一致を確認して完了とする。needs_attentionなら理由を確認する。過去の別commitの成功や登録成功だけで同期済みにしない。

## 制限

送信先とmainは固定。指定SHAのみを通常pushし、後から追加したコミット、未追跡・未コミットのファイルは送らない。commitには祖先も含むのでbaseCommitからの全差分を審査する。リモートmainがbaseCommitと異なる場合は停止する。強制送信・自動merge・自動commit・SNS再投稿は行わない。Gitフックは実行しない。資格情報は通常ユーザーのGit Credential Managerを利用し、トークンを依頼ファイルへ保存しない。

制限されたCodex実行環境の認証エラーを再ログインで解決しようとしない。本処理はユーザーが明示承認し通常Windows環境に登録する限定送信ワーカーであり、汎用コマンドの実行口にしない。

停止: Windowsのタスクスケジューラで `LIFT-Approved-GitHub-Sync` を無効化。削除してもリポジトリやSNS投稿は消えない。

参考: https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/new-scheduledtasktrigger 、 https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/new-scheduledtaskprincipal
