# Automation Spec v0.3

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

## 処理フロー

```text
Notionの商品データ
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

`editorial-carousel-v2` の全6ページは2026-07-31にブランドオーナー承認済み。画像素材の利用許諾は別の承認として扱い、テンプレート承認だけで公開可能にはしない。

## 自動処理

- 商品データの正規化と検証
- 媒体別の下書き生成
- 広告表示の有無と位置の検証
- HTML/CSSによる決定的な描画
- ファイル名とmanifestの生成
- 承認済みデータのNotionへの書き戻し
- 公式データ源がある場合の分析データ取り込み

## 画像取得

楽天市場の商品画像は、商品URLを楽天アフィリエイトのリンク作成画面へ渡し、同画面で正式に提供された画像だけを取得する。画像ファイル、出典ページ、取得日、対応するアフィリエイトリンクを一組で保存する。

通常の商品ページ、検索結果、SNS投稿から画像を転載しない。取得した商品画像は切り抜かず、文字や装飾を重ねず、HTML/CSS側の独立した画像領域へ `contain` で表示する。

楽天アフィリエイト公式ガイドライン（2026-07-31確認）では、リンク作成ページからダウンロードした画像はサイズ変更と画像周辺の加工だけが認められている。画像への文字・装飾の直接挿入と、画像の一部を切り取る利用は禁止。現在の編集型表紙はレイアウト承認済みだが、公式提供画像をそのまま背景化する公開方法には使わない。

ショップ側の設定で「商品画像は利用できません」と表示された場合は取得を中止する。同一型番の別ショップで正式画像が提供されていれば、リンク先もそのショップへ変更して画像とリンクを一組で保存する。色や型番が購入品と一致しない場合は自動採用せず、確認へ回す。

## 外部サービス側で確認する項目

- 楽天ROOMの投稿ルールと利用可能な公式連携
- Instagram/Threads APIの利用条件と公開権限
- Notion連携がLIFT OSページへ持つ権限
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
