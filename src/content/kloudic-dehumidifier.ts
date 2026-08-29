import type { ProductRecord } from "../schema/product.ts";

export const kloudicDehumidifier: ProductRecord = {
  id: "lift-043",
  name: "KLOUDIC 小型除湿機 1000ml",
  category: "家電",
  status: "adopted",
  experienceLevel: "owner",
  editorialTrack: "classic",
  acquisitionType: "normal_purchase",
  problem: "湿気は見えにくく、除湿できているか分かりにくかった。",
  strengths: ["しっかり水がたまる", "除湿した水の量を目で確認できる", "1000mlの水タンク"],
  drawbacks: [],
  insight: "見えない湿気も、たまった水なら実感できる。",
  score: { ease: 28, value: 18, quality: 17, usability: 15, shareability: 14 },
  sourceUrls: ["https://item.rakuten.co.jp/gaoye/mame-cs01-rms-1/?variantId=MK-CS01-JP-01-14"],
  productImage: {
    path: "../../assets/products/kloudic-dehumidifier/official-product.jpg",
    sourcePageUrl: "https://item.rakuten.co.jp/gaoye/mame-cs01-rms-1/?variantId=MK-CS01-JP-01-14",
    provider: "rakuten_item_page", usage: "official_product_asset", retrievedOn: "2026-08-29",
    fit: "contain", allowCrop: false, allowOverlay: false
  },
  editorialCover: {
    imagePath: "../../assets/products/kloudic-dehumidifier/generated-dry-room-context-v1.png",
    imageAlt: "明るく乾いた印象の洗面所と透明な水の入った容器",
    contextImagePath: "../../assets/products/kloudic-dehumidifier/generated-dry-room-context-v1.png",
    contextImageAlt: "除湿後の水量を目で確認する暮らしの場面", separateAffiliateImage: true,
    objectPosition: "center center", zoom: 1, contrast: 1.01, saturation: 0.88, coverBrightness: 1.04,
    coverTone: "morning", assetApprovedForEditing: true, prototypeOnly: false
  },
  content: {
    coverKicker: "湿気を、水で確認", coverSeries: "HOME", coverSequence: "43",
    coverTitle: "見えない湿気が、\n水の量で分かった。",
    productLabel: "KLOUDIC 小型除湿機",
    problemTitle: "湿気は見えないから、\n取れているか分からない。",
    problem: "部屋の湿気が気になっても、空気だけでは除湿できているか判断しにくい。対策の効果を実感しづらい状態でした。",
    changeTitle: "タンクに水がたまり、\n除湿量が見える。",
    change: "使うとしっかり水がたまり、取れた水の量を目で確認できます。除湿できていることが分かりやすくなりました。",
    insight: "見えない湿気も、\nたまった水なら実感できる。",
    cta: "購入品と、使い方を楽天ROOMにまとめています。", roomSearchKeyword: "除湿機",
    room: "KLOUDICの小型除湿機です。除湿能力に満足しており、タンクにたまった水の量を目で確認できるのが便利。見えない湿気も、どれだけ取れたか分かります。今のところ、特に惜しい点はありません。",
    instagramCaption: "見えない湿気も、たまった水なら分かりました。\n\nKLOUDICの小型除湿機を使うと、タンクにしっかり水がたまります。除湿した水の量を目で確認でき、対策できていることを実感しやすいのが便利です。\n\n今のところ、特に惜しい点はありません。\n\n商品はプロフィールの楽天ROOMで「除湿機」と検索できます。\n\n#除湿機 #湿気対策 #洗面所 #家電 #買ってよかった",
    threads: "見えない湿気も、たまった水なら分かる。\n\nKLOUDICの小型除湿機は、タンクにしっかり水がたまり、除湿した量を目で確認できます。今のところ、特に惜しい点はありません。"
  }
};
