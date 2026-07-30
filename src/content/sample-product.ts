import type { ProductRecord } from "../schema/product.ts";

export const sampleProduct: ProductRecord = {
  id: "lift-002",
  name: "SAKuRAKu 排気口カバー 奥行伸縮",
  category: "キッチン",
  status: "adopted",
  experienceLevel: "owner",
  problem: "調理中の油や食材が排気口へ入り、掃除しにくい内部が汚れる。",
  strengths: [
    "排気口の内部を汚れる前に守れる",
    "調理中に食材を落とすストレスが減った",
    "上部をラックとして使える"
  ],
  drawbacks: [
    "滑り止めゴムがずれ、定期的に元の位置へ戻す必要がある",
    "購入前にコンロの幅と高さを確認する必要がある",
    "カバー本体は定期的に拭く必要がある"
  ],
  insight: "排気口は、掃除する場所ではなく、汚れる前に守る場所だった。",
  score: { ease: 30, value: 20, quality: 19, usability: 14, shareability: 15 },
  sourceUrls: [
    "https://item.rakuten.co.jp/kurashi-zakka/srn-403-413/",
    "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1255876&item_id=10002372"
  ],
  productImage: {
    path: "../../assets/products/sakuraku-exhaust-cover/affiliate-main.webp",
    sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1255876&item_id=10002372",
    affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/5626ae6e.60c293db.5626ae7b.f2fb36cc/",
    provider: "rakuten_affiliate",
    usage: "affiliate_asset",
    retrievedOn: "2026-07-30",
    fit: "contain",
    allowCrop: false,
    allowOverlay: false
  },
  content: {
    coverTitle: "新築のときから\n使えばよかった。",
    productLabel: "SAKuRAKu 排気口カバー",
    problem: "一度入り込んだ油や食材は、奥まできれいに掃除するのが難しい。新築から約3年たって、その厄介さに気づきました。",
    change: "カバーを付けてからは、汚れを中へ入れない運用に変わりました。掃除を楽にするより、掃除が必要な状態を作らない商品です。",
    insight: "排気口は、掃除する場所ではなく、汚れる前に守る場所だった。",
    cta: "実際に使って感じた注意点も含め、楽天ROOMにまとめています。"
  }
};
