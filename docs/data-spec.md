# Data Spec v0.3

商品レコードでは、使用体験、公式情報、推測、試算を分けます。LIFT Scoreは内部判断であり、客観的な製品評価として公開しません。

商品画像には次の情報を必須とします。

| 項目 | 内容 |
| --- | --- |
| `path` | 保存した画像ファイル |
| `sourcePageUrl` | 画像を取得した楽天アフィリエイト画面 |
| `affiliateLinkUrl` | 画像と一緒に使うアフィリエイトリンク |
| `provider` | `rakuten_affiliate` |
| `retrievedOn` | 取得日 |
| `fit` | `contain` 固定 |
| `allowCrop` | `false` 固定 |
| `allowOverlay` | `false` 固定 |

出典の区分は `owner_experience`、`family_experience`、`official_source`、`merchant_source`、`third_party_source`、`estimate` を使います。調査情報と試算にはURLまたは前提条件を付けます。

使用期間は手入力で更新せず、使い始めた日から計算します。

## 購入・提供区分

`editorialTrack` は次の2種類です。

- `classic`: `experienceLevel` が `owner` または `family` の商品
- `select`: `experienceLevel` が `researched` の商品

`select` には `content.researchDisclosure` を必須とし、InstagramとThreadsの本文へ同じ開示文を含めます。初期値は「公式情報とレビューを調査して選定しました。」です。

`acquisitionType` は次のいずれかを必須とします。

- `normal_purchase`: 通常購入
- `gifted`: 商品提供
- `special_coupon`: アフィリエイター向け特別クーポン
- `sponsored`: 投稿依頼・報酬付き施策
- `event`: 楽天または広告主主催イベント

`normal_purchase` 以外はPR表示が必要な商品として扱います。通常購入か不明な場合は生成を止め、確認へ回します。

## 商品ごとの文章

`problemTitle` と `changeTitle` は商品データに持たせます。テンプレートへ商品固有の文言を埋め込まず、同じレンダラーで複数商品を生成します。

楽天アフィリエイト側で画像利用不可と表示された販売ページは、画像ソースに使いません。同一型番を扱う別ショップの正式提供画像を使う場合、画像、画像取得ページ、対応するアフィリエイトリンクを同じショップへそろえます。
