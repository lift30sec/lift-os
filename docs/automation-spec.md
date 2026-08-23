# Automation Spec v0.3

## コンテキスト予算

日常投稿は `docs/daily-operations-context.md` を入口にする。同文書が指定する順番で必要なファイルだけを読み、過去チャット全文、公開履歴の全件、全商品ファイルを通常実行の入力にしない。定期実行の本文には詳細ルールを重複させず、目的、対象リポジトリ、公開枠、入口文書だけを書く。

通常投稿は低い推論量と短い完了報告を使う。商品特定、根拠の衝突、規約判断、公開障害がある場合だけ調査範囲と推論量を増やす。

## 楽天ROOMの商品同一性

楽天ROOMへの初回投稿は、商品データの `sourceUrls[0]` に保存した楽天市場の商品ページを起点にする。同ページの「ROOMに投稿」リンクから投稿画面を開き、ショップIDと商品IDが一致する商品だけを公開する。

ROOM内検索、他ユーザーの投稿、類似商品の検索結果から「コレ！」しない。商品名と画像が同じでも、販売店が異なる場合は別商品として扱う。投稿後は「楽天市場で見る」のリンク先ショップを確認し、元の商品ページと一致しなければ公開完了にしない。

公開パッケージには `rakuten-item-source.txt` を必ず含める。このURLが投稿時の基準で、アフィリエイトリンクや画像URLから販売店を推測しない。

## 商品リンクの導線

公開順は楽天ROOM、Instagram、Threadsとする。楽天ROOMへ投稿した直後に商品投稿の固定URLを保存し、SNSでは次のように使う。

- Instagramフィードの画像にはリンクを埋め込まない。通常のカルーセル画像自体はクリック先を設定できないため、6枚目に短いROOM検索語を表示する。
- Instagramでは商品ごとのストーリーズも作り、楽天ROOM投稿の固定URLをリンクスタンプへ設定する。消える投稿だけに依存せず、商品カテゴリ別ハイライトにも保存する。
- Threadsでは本文末尾へ `楽天ROOMで見る：<ROOM投稿URL>` を付ける。楽天以外の短縮URLサービスは使わない。
- 将来Webページで画像リンクを使う場合も、楽天アフィリエイトが生成したHTMLと画像を改変しない。LIFTの独自画像を楽天アフィリエイト画像の代用にしない。

通常購入品ではPR表記は任意だが、商品提供、特別クーポン、投稿依頼、イベント参加などがある商品は媒体ごとの広告表示ルールを適用する。

## Candidate confirmation gate

Daily discovery produces no more than three candidates. Before product data,
images, or public posts are created, the system presents all candidates together
and asks whether the owner or family has actually used each product.

- Used by owner or family: classify as a `LIFT Classic` candidate and collect
  the exact product plus first-hand experience.
- Not used but approved after research: classify as `LIFT Select` and apply the
  required research disclosure.
- Rejected or uncertain: record the reason and do not publish.

Pending candidates must not be presented as new candidates again on the next
daily run. Publication always waits for this classification.

For each candidate, search the signed-in Rakuten purchase history by product or
brand name. Use Amazon purchase history only as a secondary lookup when needed.
Do not copy the complete purchase history. Retain only the product name, product
URL, and purchase month. Never retain names, addresses, order numbers, payment
details, or other account data. A matched purchase supports provenance but does
not prove that the product was used; first-hand use still requires confirmation.

## 処理フロー

```text
GitHub内 `src/content` の商品データ
  -> 正規化・検証
  -> 媒体別の下書き生成
  -> オーナー承認
  -> HTML/CSSレンダリング
  -> PNG書き出し
  -> 初回テンプレート承認
  -> 許可された公式インターフェースで公開
  -> 結果を記録
```

## 承認が必要な処理

- 商品の採用・却下
- 本人の体験として公開する文章
- 新しい画像テンプレートの初回使用
- 外部サービスの公開権限を有効にする操作
- ブランドの語り口、LIFT Score、広告表示文の決定・変更
- Instagram、Threads、楽天ROOMへの初回公開

承認済みテンプレートと文体ルールの範囲なら、2回目以降の下書き生成と画像生成は自動化する。公開の完全自動化は、各サービスの公式API、規約、権限を確認してから別途有効にする。

InstagramからThreadsへの同時共有は、スイッチの選択だけでは完了と判定しない。Threads側で新しい投稿URLを取得できた場合だけ成功とする。投稿URLが確認できない場合は重複の有無を調べ、未投稿ならThreadsへ直接公開する。

`editorial-carousel-v2` の全6ページは2026-07-31にブランドオーナー承認済み。画像素材の利用許諾は別の承認として扱い、テンプレート承認だけで公開可能にはしない。

## 自動処理

- 商品データの正規化と検証
- 媒体別の下書き生成
- 広告表示の有無と位置の検証
- HTML/CSSによる決定的な描画
- ファイル名とmanifestの生成
- 承認済みデータの `src/content` への保存
- 公式データ源がある場合の分析データ取り込み

## 画像取得

楽天市場の商品画像は、商品URLを楽天アフィリエイトのリンク作成画面へ渡し、同画面で正式に提供された画像だけを取得する。画像ファイル、出典ページ、取得日、対応するアフィリエイトリンクを一組で保存する。

通常の商品ページ、検索結果、SNS投稿から画像を転載しない。取得した商品画像は切り抜かず、文字や装飾を重ねず、HTML/CSS側の独立した画像領域へ `contain` で表示する。

楽天アフィリエイト公式ガイドライン（2026-07-31確認）では、リンク作成ページからダウンロードした画像はサイズ変更と画像周辺の加工だけが認められている。画像への文字・装飾の直接挿入と、画像の一部を切り取る利用は禁止。現在の編集型表紙はレイアウト承認済みだが、公式提供画像をそのまま背景化する公開方法には使わない。

ショップ側の設定で「商品画像は利用できません」と表示された場合は取得を中止する。同一型番の別ショップで正式画像が提供されていれば、リンク先もそのショップへ変更して画像とリンクを一組で保存する。色や型番が購入品と一致しない場合は自動採用せず、確認へ回す。

## 外部サービス側で確認する項目

- 楽天ROOMの投稿ルールと利用可能な公式連携
- Instagram/Threads APIの利用条件と公開権限
- Notionを追加する場合の同期範囲と権限（20商品運用後に再判断）
- 画像ごとの利用条件
- 各媒体から取得できる分析項目

非公式なブラウザ自動操作はv0.2の公開処理に含めない。

## 公開前ゲート

### 自動発掘と公開

毎朝の候補調査では、楽天ランキング、楽天の商品ページ、メーカー公式情報、公開SNS上の話題を確認する。候補は最大3件とし、次を満たす1件だけを制作へ進める。

- LIFT Score 80点以上
- 公式情報を含む2種類以上の出典
- 楽天ROOMで紹介可能な商品ページが確認できる
- 商品画像の利用条件と出典が保存できる
- 誇大表現、コピー商品、品質懸念がない

未購入商品は必ず `LIFT Select` とする。出典不足、画像利用条件不明、Selectが2件連続する場合は自動公開せず、候補記録だけを残す。

`pnpm run publish:check` は商品ごとに公開可否を検査し、結果を
`output/publication-readiness.json` へ保存する。次のいずれかがあれば公開処理へ渡さない。

- 商品状態が `adopted` または `classic` ではない
- 商品データの必須項目が不足している
- 表紙画像が `prototypeOnly`
- 表紙画像の加工・公開許諾が未確認

## 冪等性

生成物は次の組み合わせで識別する。

```text
商品ID + コンテンツ改訂番号 + テンプレート版 + 媒体
```

同じ承認済み入力を再実行しても、公開記録を重複させない。

## 認証情報

認証情報は環境変数か管理されたシークレットストアへ保存する。Gitにはコミットしない。

## Notionの扱い

v0.3ではNotion連携を実装しない。商品データの原本は `src/content/*.ts` とする。Notionを追加する場合も原本にはせず、GitHubから生成する閲覧・承認用の画面として扱う。双方向同期は競合と二重更新を招くため採用しない。
