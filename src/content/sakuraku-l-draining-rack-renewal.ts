import type { ProductRecord } from "../schema/product.ts";

const disclosure = "実使用ではなく、公式情報と購入者レビューを調査して選定しています。";

export const sakurakuLDrainingRackRenewal: ProductRecord = {
  id: "lift-032",
  name: "SAKuRAKu 水切りラック L型（リニューアル品）",
  category: "キッチン・水切り",
  status: "adopted",
  experienceLevel: "researched",
  editorialTrack: "select",
  acquisitionType: "normal_purchase",
  problem: "水筒や皿を平らに置くと乾かす面積を取り、シンク周りが埋まりやすい。",
  strengths: [
    "L型部分へ水筒や皿を斜めに立てて乾かせる",
    "伸縮式で、使わないときは折りたたんで寄せられる",
    "18-8ステンレス仕様を含む8タイプから選べる"
  ],
  drawbacks: [],
  insight: "乾かす物を立てると、シンク上の面積を使い切らずに済む。",
  score: { ease: 27, value: 16, quality: 18, usability: 13, shareability: 12 },
  sourceUrls: [
    "https://item.rakuten.co.jp/kurashi-zakka/jin-603/",
    "https://review.rakuten.co.jp/item/1/255876_10002471/1.1/"
  ],
  productImage: {
    path: "../../assets/products/sakuraku-l-draining-rack-renewal/affiliate-product-400.jpg",
    sourcePageUrl: "https://item.rakuten.co.jp/kurashi-zakka/jin-603/",
    affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/5626ae6e.60c293db.5626ae7b.f2fb36cc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkurashi-zakka%2Fjin-603%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiI0MDB4NDAwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjAsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D",
    provider: "rakuten_affiliate",
    usage: "affiliate_asset",
    retrievedOn: "2026-08-23",
    fit: "contain",
    allowCrop: false,
    allowOverlay: false
  },
  editorialCover: {
    imagePath: "../../assets/products/sakuraku-l-draining-rack-renewal/generated-clean-sink-context-v1.png",
    imageAlt: "朝の光が入る、洗い物の置き場を空けたキッチンシンク",
    contextImagePath: "../../assets/products/sakuraku-l-draining-rack-renewal/generated-clean-sink-context-v1.png",
    contextImageAlt: "水筒と皿を乾かす前の、すっきりしたシンク周り",
    separateAffiliateImage: true,
    objectPosition: "center center",
    zoom: 1,
    contrast: 1.01,
    saturation: 0.85,
    coverBrightness: 1.03,
    coverTone: "morning",
    assetApprovedForEditing: true,
    prototypeOnly: false
  },
  content: {
    coverKicker: "乾かす場所を、立体に",
    coverSeries: "KITCHEN",
    coverSequence: "32",
    coverTitle: "立てて乾かすと、\nシンク上が広くなる。",
    productLabel: "SAKuRAKu 水切りラック L型",
    problemTitle: "平置きすると、\n乾かす場所が埋まる。",
    problem: "水筒や皿を横に並べると、少量でもシンク上の面積を使います。洗い物が増えるほど、置き場所が足りなくなりがちです。",
    changeTitle: "L型へ立てて、\n乾かす面積を小さく。",
    change: "L型部分へ水筒や皿を斜めに立てられる設計。伸縮式で、使わないときは折りたたんで寄せられます。",
    insight: "乾かす物を立てると、\nシンク上を使い切らずに済む。",
    cta: "公式仕様と購入者レビューから、便利な点と惜しい点を楽天ROOMにまとめています。",
    roomSearchKeyword: "水切り",
    room: `${disclosure}\n\n水筒や皿をL型部分へ斜めに立てられる、リニューアル後のSAKuRAKu水切りラック。伸縮式で、使わないときは折りたたんで寄せられます。商品ページはレギュラー・ワイド、ステンレス・3色の計8タイプを掲載しています。`,
    instagramCaption: `${disclosure}\n\n水筒や皿を平らに並べると、少量でもシンク上が埋まりがち。\n\nこの水切りラックは、L型部分へ水筒や皿を斜めに立てられる設計です。伸縮式で、使わないときは折りたたんで寄せられます。\n\nプロフィールの楽天ROOMで「水切り」と検索できます。\n\n#水切りラック #キッチン収納 #シンク上収納 #時短家事 #LIFTSelect`,
    threads: `${disclosure}\n\n水筒や皿をL型部分へ斜めに立てられるSAKuRAKuの水切りラック。伸縮式で、使わないときは折りたたんで寄せられます。`,
    researchDisclosure: disclosure
  }
};
