import type { ProductRecord } from "../schema/product.ts";

export const sampleProduct: ProductRecord = {
  id: "lift-001",
  name: "マーナ 極 冷凍ごはん容器 小 6個セット",
  category: "キッチン",
  status: "adopted",
  experienceLevel: "owner",
  problem: "冷凍ご飯に使うラップの消費と、温めたご飯の仕上がりが気になる。",
  strengths: [
    "ラップをほとんど使わなくて済む",
    "ご飯がふっくら温まりやすい",
    "重ねて保存しやすい"
  ],
  drawbacks: [
    "本体・フタ・すのこの3パーツがある",
    "食洗機では、すのこを小物ケースに入れた方が安心"
  ],
  insight: "ラップを使うのが当たり前だと思っていた。",
  score: {
    ease: 30,
    value: 18,
    quality: 20,
    usability: 14,
    shareability: 15
  },
  sourceUrls: [
    "https://item.rakuten.co.jp/kaguzaku/mn-k748-4set/?variantId=mn-k748-4set-100-6s"
  ],
  content: {
    coverTitle: "ラップを使うのが\n当たり前だった。",
    productLabel: "マーナ 極 冷凍ごはん容器",
    problem: "冷凍ご飯のたびに、ラップを切る・包む・捨てる。その小さな手間が続いていました。",
    change: "容器へ入れてフタをするだけ。ラップの消費が減り、重ねて冷凍しやすくなりました。",
    insight: "便利だったのは、容器そのものより「ラップを使わない仕組み」でした。",
    cta: "実際に使ったものを、楽天ROOMへまとめています。"
  }
};
