# Data Spec v0.2

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

`acquisitionType` は次のいずれかを必須とします。

- `normal_purchase`: 通常購入
- `gifted`: 商品提供
- `special_coupon`: アフィリエイター向け特別クーポン
- `sponsored`: 投稿依頼・報酬付き施策
- `event`: 楽天または広告主主催イベント

`normal_purchase` 以外はPR表示が必要な商品として扱います。通常購入か不明な場合は生成を止め、確認へ回します。

