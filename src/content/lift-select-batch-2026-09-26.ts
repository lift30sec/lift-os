import type { ProductRecord } from "../schema/product.ts";

type Seed = {
  id: string; slug: string; name: string; category: string; series: string;
  itemUrl: string; imageAlt: string; problemTitle: string; problem: string;
  title: string; change: string; strengths: string[]; drawbacks: string[];
  insight: string; keyword: string;
};

const makeSelect = (s: Seed): ProductRecord => ({
  id: s.id,
  name: s.name,
  category: s.category,
  status: "adopted",
  experienceLevel: "researched",
  editorialTrack: "select",
  acquisitionType: "normal_purchase",
  problem: s.problem,
  strengths: s.strengths,
  drawbacks: s.drawbacks,
  insight: s.insight,
  score: { ease: 25, value: 17, quality: 18, usability: 13, shareability: 13 },
  sourceUrls: [s.itemUrl, "https://ranking.rakuten.co.jp/monthly/" + (s.category === "美容" ? "100939" : s.category === "キッチン" ? "558944" : "100938") + "/"],
  productImage: {
    path: `../../assets/products/${s.slug}/affiliate-product.jpg`,
    sourcePageUrl: s.itemUrl,
    affiliateLinkUrl: s.itemUrl,
    provider: "rakuten_affiliate",
    usage: "affiliate_asset",
    retrievedOn: "2026-09-26",
    fit: "contain",
    allowCrop: false,
    allowOverlay: false
  },
  editorialCover: {
    imagePath: `../../assets/products/${s.slug}/editorial-background.png`,
    imageAlt: s.imageAlt,
    contextImagePath: `../../assets/products/${s.slug}/editorial-background.png`,
    contextImageAlt: s.imageAlt,
    separateAffiliateImage: true,
    objectPosition: "center center",
    sizing: "square",
    zoom: 1,
    contrast: 1.03,
    saturation: 0.9,
    coverBrightness: 1.04,
    coverTone: "morning",
    assetApprovedForEditing: true,
    prototypeOnly: false
  },
  content: {
    coverKicker: "LIFT Select",
    coverSeries: s.series,
    coverSequence: s.id.slice(-2),
    coverTitle: s.title,
    productLabel: s.name,
    problemTitle: s.problemTitle,
    problem: s.problem,
    changeTitle: s.title,
    change: s.change,
    insight: s.insight,
    cta: "商品の詳細は、プロフィールの楽天ROOMから確認できます。",
    roomSearchKeyword: s.keyword,
    room: `${s.change}\n\n惜しい点は、${s.drawbacks[0]}。`,
    instagramCaption: `${s.title.replace("\n", "")}\n\n${s.change}\n\n惜しい点は、${s.drawbacks[0]}。\n\n商品はプロフィールの楽天ROOMで「${s.keyword}」と検索できます。\n\n#LIFTSelect #${s.keyword.replace(/\s/g, "")} #${s.series === "BEAUTY" ? "美容" : s.series === "KITCHEN" ? "キッチン用品" : "健康習慣"}`,
    threads: `${s.title.replace("\n", "")} ${s.change} 惜しい点は、${s.drawbacks[0]}。`
  }
});

export const liftSelectBatch20260926 = [
  makeSelect({ id: "lift-065", slug: "attenir-cleanse-oil-350", name: "アテニア スキンクリア クレンズ オイル 350mL", category: "美容", series: "BEAUTY", itemUrl: "https://item.rakuten.co.jp/attenir/166013/", imageAlt: "朝の光が入る清潔な洗面台", problemTitle: "クレンジング後の洗顔が、ひと手間。", problem: "毎日のメイク落としは、洗う工程が増えるほど続けにくくなります。", title: "濡れた手でも使えて、\nダブル洗顔不要。", change: "濡れた手でも使え、ダブル洗顔と乳化が不要な大容量クレンジングオイル。4種類の香りから選べます。", strengths: ["濡れた手でも使える", "ダブル洗顔・乳化が不要", "約4か月分の350mL"], drawbacks: ["香りの好みが分かれやすい"], insight: "落とすケアは、工程が少ないほど毎日に組み込みやすい。", keyword: "アテニア" }),
  makeSelect({ id: "lift-066", slug: "la-roche-posay-tone-up-uv", name: "ラ ロッシュ ポゼ トーンアップUV", category: "美容", series: "BEAUTY", itemUrl: "https://item.rakuten.co.jp/larocheposay/l00332ropenkit/", imageAlt: "明るい窓辺の洗面台", problemTitle: "日焼け止めと下地を、別々に塗る。", problem: "朝のベースメイクは、役割ごとにアイテムが増えると手間も増えます。", title: "UV対策と化粧下地を、\n一本に。", change: "SPF50+のUV対策と化粧下地をまとめた一本。肌の見え方に合わせて4タイプから選べます。", strengths: ["SPF50+", "化粧下地を兼ねる", "4タイプから選べる"], drawbacks: ["色味と仕上がりは肌質との相性確認が必要"], insight: "朝の支度は、役割を兼ねる一本で短くできる。", keyword: "ラロッシュ" }),
  makeSelect({ id: "lift-067", slug: "shu-uemura-ultime8", name: "シュウ ウエムラ アルティム8∞", category: "美容", series: "BEAUTY", itemUrl: "https://item.rakuten.co.jp/shuuemura/shu30001jp/", imageAlt: "落ち着いた色合いの洗面台", problemTitle: "しっかり落としたい。でも乾燥も気になる。", problem: "クレンジングは、洗浄力と洗い上がりの両方が選ぶ基準になります。", title: "メイクを落として、\nしっとり洗い上げる。", change: "メイク落ちと保湿感の両立を目指したクレンジングオイル。ダブル洗顔不要で、朝の洗顔にも使えます。", strengths: ["ダブル洗顔不要", "朝の洗顔にも使える", "複数サイズから選べる"], drawbacks: ["毎日使うクレンジングとしては価格が高め"], insight: "毎日使うものは、仕上がりと価格の両方で続けやすさを決める。", keyword: "アルティム8" }),
  makeSelect({ id: "lift-068", slug: "sakuraku-l-kitchen-mat", name: "sakuraku L型キッチンマット", category: "キッチン", series: "KITCHEN", itemUrl: "https://item.rakuten.co.jp/kurashi-zakka/ktn-101/", imageAlt: "木目の床がある明るいキッチン", problemTitle: "キッチンの隙間へ、汚れが入り込む。", problem: "床だけでなく、シンク下と床の境目まで汚れると掃除に手間がかかります。", title: "L字で隙間まで、\nまとめて守る。", change: "床面から立ち上げるL字形状で、キッチンの隙間まで覆う透明PVCマット。汚れは拭いて手入れできます。", strengths: ["L字で隙間を覆う", "透明で床になじむ", "水拭き・水洗いに対応"], drawbacks: ["引き出し下に約1.5cm以上の隙間が必要"], insight: "床の掃除は、汚れが入り込む境目を先にふさぐとラクになる。", keyword: "キッチンマット" }),
  makeSelect({ id: "lift-069", slug: "ooble-vacuum-rice-stock", name: "OoBLE 真空米びつ", category: "キッチン", series: "KITCHEN", itemUrl: "https://item.rakuten.co.jp/ooble/ricestocker/", imageAlt: "整った明るいパントリー", problemTitle: "大袋のお米は、開封後の保存が気になる。", problem: "まとめ買いしたお米は、保管場所と密閉の両方を考える必要があります。", title: "10kgのお米を、\n真空保存。", change: "約10kgのお米をまとめて入れられる自動真空保存容器。コーヒー豆や乾麺などの保存にも使えます。", strengths: ["約10kgを保存できる", "自動で真空状態を保つ", "乾物やペットフードにも使える"], drawbacks: ["本体が大きく、設置場所と価格の確認が必要"], insight: "大容量保存は、密閉性能だけでなく置き場所まで決めて選ぶ。", keyword: "OoBLE" }),
  makeSelect({ id: "lift-070", slug: "iwaki-pack-range-7", name: "iwaki パック＆レンジ 7点セット", category: "キッチン", series: "KITCHEN", itemUrl: "https://item.rakuten.co.jp/rcmdki/nf-pc-prn7/", imageAlt: "保存容器が整った明るい冷蔵庫", problemTitle: "保存容器のまま、食卓へ出しにくい。", problem: "作り置きは、保存・温め・盛り付けのたびに容器を替えると洗い物が増えます。", title: "保存して、温めて、\nそのまま食卓へ。", change: "耐熱ガラスの保存容器7点セット。ふたを外せばオーブンで使え、容器は食洗機にも対応します。", strengths: ["電子レンジとオーブンに対応", "ガラス容器は食洗機対応", "中身が見やすい"], drawbacks: ["ガラス製なので重さがあり、落下には注意が必要"], insight: "保存容器は、移し替えを減らせると洗い物も減る。", keyword: "iwaki" }),
  makeSelect({ id: "lift-071", slug: "otsuka-equelle-3", name: "大塚製薬 エクエル パウチ 3袋", category: "健康", series: "HEALTH", itemUrl: "https://item.rakuten.co.jp/shimin2/4987035545613-3a-m/", imageAlt: "落ち着いた朝のダイニングテーブル", problemTitle: "毎日続けるサプリは、買い足しが増える。", problem: "継続する食品は、切らさないための管理も負担になります。", title: "90日分を、\nまとめて管理。", change: "大豆由来の成分を配合したエクエルの3袋セット。1袋30日分の目安で、約90日分をまとめて用意できます。", strengths: ["約90日分の3袋セット", "1日の目安量が明確", "日本製"], drawbacks: ["1日4粒が目安で、継続費用も確認が必要"], insight: "習慣にする食品は、飲み方と買い足す周期まで決めると続けやすい。", keyword: "エクエル 3袋" }),
  makeSelect({ id: "lift-072", slug: "vitas-wpc-protein", name: "VITAS ホエイプロテイン100", category: "健康", series: "HEALTH", itemUrl: "https://item.rakuten.co.jp/toyomarket/vitas006/", imageAlt: "運動後のグラスが置かれたテーブル", problemTitle: "プロテインは、味に飽きると続かない。", problem: "毎日飲むものは、栄養成分だけでなく味の選択肢も大切です。", title: "果実系からカフェラテまで、\n好みで選ぶ。", change: "複数のフレーバーから選べる国内製造のWPCプロテイン。1食あたり21g以上のたんぱく質を含む設計です。", strengths: ["味の選択肢が多い", "1食あたりたんぱく質21g以上", "国内製造"], drawbacks: ["フレーバーにより容量が700gと1kgで異なる"], insight: "続ける食品は、袋の大きさより毎日飲める味で選ぶ。", keyword: "VITAS" }),
  makeSelect({ id: "lift-073", slug: "lypo-c-28", name: "Lypo-C ビタミンC 28包", category: "健康", series: "HEALTH", itemUrl: "https://item.rakuten.co.jp/lypoc/lypo-c28/", imageAlt: "朝の光が入る清潔なテーブル", problemTitle: "毎日の量を、計るのが面倒。", problem: "継続するサプリは、準備や計量が必要だと手間になります。", title: "1包ずつで、\n量を迷わない。", change: "1包にビタミンCを1,000mg含む液状サプリメント。28包の個包装で、毎回の量を決めやすい形です。", strengths: ["1包ずつの個包装", "1包あたりビタミンC1,000mg", "国内製造"], drawbacks: ["独特の味があり、1包あたりの価格も高め"], insight: "毎日続けるものは、量を迷わない形が手間を減らす。", keyword: "Lypo-C" })
];
