import type { ProductRecord } from "../schema/product.ts";

export const sampleProduct: ProductRecord = {
  id: "lift-002",
  name: "SAKuRAKu 排気口カバー 奥行伸縮",
  category: "キッチン",
  status: "adopted",
  experienceLevel: "owner",
  acquisitionType: "normal_purchase",
  problem: "調理中の油や食材が排気口へ入り、掃除しにくい内部が汚れる。",
  strengths: [
    "排気口の内部を汚れる前に守れる",
    "調理中に食材を落とすストレスが減った",
    "上部をラックとして使える"
  ],
  drawbacks: [
    "滑り止めゴムがずれ、定期的に元の位置へ戻す必要がある"
  ],
  insight: "排気口は、掃除する場所ではなく、汚れる前に守る場所だった。",
  score: { ease: 30, value: 20, quality: 19, usability: 14, shareability: 15 },
  sourceUrls: [
    "https://item.rakuten.co.jp/kurashi-zakka/srn-403-413/",
    "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1255876&item_id=10002372"
  ],
  productImage: {
    path: "../../assets/products/sakuraku-exhaust-cover/affiliate-usage.webp",
    sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1255876&item_id=10002372",
    affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/5626ae6e.60c293db.5626ae7b.f2fb36cc/",
    provider: "rakuten_affiliate",
    usage: "affiliate_asset",
    retrievedOn: "2026-07-30",
    fit: "contain",
    allowCrop: false,
    allowOverlay: false
  },
  editorialCover: {
    imagePath: "../../assets/products/sakuraku-exhaust-cover/generated-kitchen-context-v1.png",
    imageAlt: "落ち着いた色調の清潔なキッチン",
    contextImagePath: "../../assets/products/sakuraku-exhaust-cover/generated-kitchen-context-v1.png",
    contextImageAlt: "落ち着いた色調の清潔なキッチン",
    separateAffiliateImage: true,
    objectPosition: "left top",
    sizing: "square",
    zoom: 1.508,
    contrast: 1.18,
    saturation: 0.88,
    coverBrightness: 1.16,
    assetApprovedForEditing: true,
    prototypeOnly: false
  },
  content: {
    coverKicker: "もっと早く知りたかった、暮らしの道具",
    coverSeries: "KITCHEN",
    coverSequence: "01",
    coverTitle: "新築のときに、\n知りたかった。",
    productLabel: "SAKuRAKu 排気口カバー",
    problemTitle: "掃除しにくい場所ほど、\n汚れる前に守る。",
    problem: "一度入り込んだ油や食材は、奥まできれいに掃除するのが難しい。新築から約3年たって、その厄介さに気づきました。",
    changeTitle: "掃除を減らす仕組みに\n変える。",
    change: "カバーを付けてからは、汚れを中へ入れない運用に変わりました。掃除を楽にするより、掃除が必要な状態を作らない商品です。",
    insight: "排気口は、掃除する場所ではなく、\n汚れる前に守る場所だった。",
    cta: "実際に使って感じた注意点も含め、楽天ROOMにまとめています。",
    room: "新築のときから使えばよかったと思った商品です。排気口の中は、一度汚れるときれいにするのが本当に大変。このカバーを付けてからは、汚れを中へ入れない運用に変わりました。滑り止めゴムがずれるので、ときどき元の位置へ戻す必要はあります。それでも「掃除を楽にする」より「掃除が必要な状態を作らない」価値の方が大きいと感じています。",
    instagramCaption: "新築から約3年たって気づきました。\n\n排気口の中は、一度汚れると奥まできれいにするのが難しい場所です。このカバーを付けてからは、掃除を頑張るのではなく、汚れを中へ入れない運用に変わりました。\n\n惜しい点は、滑り止めゴムがずれて、ときどき元の位置へ戻す必要があること。それでも、新築のときから使いたかったと思える商品です。\n\n商品はプロフィールの楽天ROOMから確認できます。\n\n#排気口カバー #キッチン掃除 #家事ラク #暮らしを整える #買ってよかった",
    threads: "新築のときから使えばよかった。\n\n排気口カバーは「掃除を楽にする商品」だと思っていました。でも本当の価値は、掃除しにくい場所を最初から汚さないことでした。\n\n滑り止めゴムがずれるのは惜しい。それでも、もっと早く知りたかった商品です。"
  }
};
