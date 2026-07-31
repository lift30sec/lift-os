# Design Spec v1.0

Status: approved on 2026-07-30

## Editorial cover v1.0

Approved on 2026-07-31.

- Canvas: 1080 × 1350 px
- Horizontal outer margin: 56 px
- Header: 220 px
- Header logo: 120 × 120 px, vertically centered
- Header label and logo share one vertical center line
- Photo area: 968 × 900 px
- Headline is placed directly over the photo; no text card
- Footer: 174 px, with its labels aligned toward the bottom
- Product photos may use crop, contrast adjustment, and an overlay only when
  the asset license permits editing
- Unconfirmed assets are marked `prototypeOnly` and must not be published
- Preserve the source image aspect ratio for landscape and square assets
- Set crop position and zoom per product; crop embedded promotional text out
  where possible without hiding the product interaction

### Initial three cover references

- `lift-001`: Show one frozen-rice container in use. Do not imply that the
  product can only be purchased as a six-piece set
- `lift-002`: Show installation over the exhaust vent. For publication, prefer
  a source photo with stronger separation between the white cover and its
  background
- `lift-003`: Show the box-opening action. The message is not cutting
  performance; it is no longer having to search for an opening tool

The three cover compositions were approved by the brand owner on 2026-07-31.
The publication covers use generated context backgrounds plus separate Rakuten
affiliate-provided product images. The earlier manufacturer-site prototypes
remain blocked and are not referenced by the renderer.

The product-specific generated backgrounds and the final headline hierarchy
were approved by the brand owner on 2026-07-31. These covers are the baseline
for future LIFT product introductions.

## Editorial carousel body v2 proposal

- Pages 2 and 3 pair a compact text block with a supporting photo strip
- Page 4 uses ruled benefit rows and keeps only experience-specific drawbacks
- Page 5 returns to a full photographic field for the core insight
- Page 6 combines the brand promise, ROOM direction, and a supporting photo strip
- The label, logo, margins, page counter, and product label remain fixed across
  all six pages

## Compliant editorial cover proposal

The publication-safe cover separates three roles:

- A generated context image provides atmosphere and accepts headline overlays
- The affiliate-provided product image appears in its own fixed region without
  cropping, overlays, or direct modification
- HTML text identifies the owned product and communicates the LIFT insight

The first implementation is `lift-002`. Its generated kitchen background does
not depict or imitate the SAKuRAKu product.

### Full-bleed context variant

Revised on 2026-07-31 from the owner's rough composition:

- Context image occupies the top 920 px of the 1080 × 1350 canvas
- Category label and white LIFT mark sit inside the photograph
- Headline uses the photograph's darker negative space
- Product identification and the untouched affiliate image sit in a separate
  cream information area
- The lower section remains visually quiet so the cover reads as editorial
  content rather than a retail banner

### Full-canvas context variant

Proposed on 2026-07-31 from the owner's second rough composition:

- Generated context photography fills the complete 1080 × 1350 canvas
- Product identification and the untouched affiliate image float over a
  controlled bottom gradient rather than a separate cream section
- The LIFT mark is rendered in HTML/CSS at 132 × 132 px instead of enlarging
  the raster logo. This keeps `LIFT` and `30 sec` sharp in PNG output
- Header, headline, product block, and footer use one continuous photographic
  field
- The emotional headline is the only large white text. Product identification
  uses dark green text over a soft, borderless ivory light field so it remains
  secondary
- The light field must dissolve into the context photograph. Do not use a
  rectangular or rounded product-information card
- The affiliate image box is fixed at 224 × 224 px and uses `object-fit:
  contain`; source images keep their original aspect ratio
- Text embedded in an affiliate-provided source image is not removed or
  cropped. A cleaner source image is preferred when the affiliate tool offers
  one
- Products share the composition system, not the same context photograph.
  Marna uses a meal-preparation context, SAKuRAKu uses a kitchen context, and
  MIDORI uses an entryway or parcel-receiving context

## キャンバス

- Instagram縦型: 1080 × 1350 px
- グリッド: 8 px
- 背景: `#F8F8F6`
- 文字: `#111111`
- 補助文字: `#666666`
- アクセント: `#D8D2C6`
- 安全余白: 左右80 px、上下96 px

余白は要素のまとまりを分けるために使います。本文から離れた下端へ定型文を置かず、商品名、補助文、リンク案内は関連する要素の直後へ配置します。

## ロゴ

承認済みの透過PNG `assets/brand/lift-logo-transparent.png` を使います。右上へ152 × 152 pxで配置し、縦横比を維持します。ロゴを再生成しません。

## 商品画像

- 個人撮影画像は必須にしない
- 楽天市場の商品は楽天アフィリエイトのリンク作成画面から取得した画像だけを使う
- 通常の商品ページ画像を転載しない
- `object-fit: contain` で全体を表示する
- 切り抜き、変形、画像上への文字・装飾の重ね置きをしない
- 文章、背景、装飾は商品画像の外側へ配置する
- 画像ごとに提供元、取得日、対応するアフィリエイトリンクを保存する

この制約は表現の自由度を下げますが、実物と異なる生成画像や権利不明の転載画像を避けられます。

## 6ページ構成

1. 表紙: 感情的なフック、商品名、公式提供画像
2. 困りごと
3. 生活の変化
4. 良かった点と惜しい点
5. LIFT Insight
6. CTA

## 文字組み

- 表紙見出し: 68 px、行間1.24、字間0.01em
- 本文見出し: 46 px、行間1.35、字間0.01em
- 本文: 30 px、行間1.75
- Insight / CTA: 50 px、行間1.45〜1.48

見出し内部を詰めすぎず、本文と下部ラベルの間に意味のない大きな空白を作りません。フッターの定型文は原則として使いません。
