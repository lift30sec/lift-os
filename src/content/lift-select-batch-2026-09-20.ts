import type { ProductRecord } from "../schema/product.ts";

type SelectSeed = {
  id: string;
  slug: string;
  name: string;
  category: string;
  series: string;
  sequence: string;
  itemUrl: string;
  sourcePageUrl: string;
  affiliateLinkUrl: string;
  imageAlt: string;
  problemTitle: string;
  problem: string;
  changeTitle: string;
  change: string;
  strengths: string[];
  drawbacks: string[];
  insight: string;
  roomKeyword: string;
  room: string;
  instagram: string;
  threads: string;
};

const makeSelect = (seed: SelectSeed): ProductRecord => ({
  id: seed.id,
  name: seed.name,
  category: seed.category,
  status: "adopted",
  experienceLevel: "researched",
  editorialTrack: "select",
  acquisitionType: "normal_purchase",
  problem: seed.problem,
  strengths: seed.strengths,
  drawbacks: seed.drawbacks,
  insight: seed.insight,
  score: { ease: 25, value: 17, quality: 18, usability: 13, shareability: 13 },
  sourceUrls: [seed.itemUrl, seed.sourcePageUrl],
  productImage: {
    path: `../../assets/products/${seed.slug}/affiliate-product.jpg`,
    sourcePageUrl: seed.sourcePageUrl,
    affiliateLinkUrl: seed.affiliateLinkUrl,
    provider: "rakuten_affiliate",
    usage: "affiliate_asset",
    retrievedOn: "2026-09-20",
    fit: "contain",
    allowCrop: false,
    allowOverlay: false
  },
  editorialCover: {
    imagePath: `../../assets/products/${seed.slug}/editorial-background.png`,
    imageAlt: seed.imageAlt,
    contextImagePath: `../../assets/products/${seed.slug}/editorial-background.png`,
    contextImageAlt: seed.imageAlt,
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
    coverSeries: seed.series,
    coverSequence: seed.sequence,
    coverTitle: seed.changeTitle,
    productLabel: seed.name,
    problemTitle: seed.problemTitle,
    problem: seed.problem,
    changeTitle: seed.changeTitle,
    change: seed.change,
    insight: seed.insight,
    cta: "商品の詳細は、プロフィールの楽天ROOMから確認できます。",
    roomSearchKeyword: seed.roomKeyword,
    room: seed.room,
    instagramCaption: seed.instagram,
    threads: seed.threads
  }
});

export const yunthVitaminC = makeSelect({
  id: "lift-056", slug: "yunth-vitamin-c", name: "Yunth 生ビタミンC美白美容液", category: "美容", series: "BEAUTY", sequence: "56",
  itemUrl: "https://item.rakuten.co.jp/yunth/10000000/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1409735&item_id=10000000", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3517d.28d83762.57b3517e.496f4013/", imageAlt: "やわらかな朝の光が入る洗面台",
  problemTitle: "美容液は、鮮度も使う量も気になる。", problem: "毎日のケアでは、使う量に迷いにくく、清潔に扱える形が続けやすさにつながります。",
  changeTitle: "清潔な個包装。\n1回分ずつ迷わない。", change: "1mlずつの個包装で、毎回開けて使える生ビタミンC美容液。洗顔後のケアに取り入れやすい設計です。",
  strengths: ["1回分ずつの個包装", "洗顔後に使う先行美容液", "28包入り"], drawbacks: ["個包装なので、毎回袋を開ける手間とごみが出る"], insight: "続けやすさは、成分だけでなく、使う量に迷わない形でも変わる。", roomKeyword: "Yunth",
  room: "1回分ずつ個包装された生ビタミンC美白美容液。使う量に迷いにくく、毎回開けて使えるのが特徴です。個包装のため、袋を開ける手間とごみが出る点は確認しておきたいところ。",
  instagram: "清潔な個包装。1回分ずつ迷わない。\n\nYunthの生ビタミンC美白美容液は、1mlずつの個包装。洗顔後のケアに取り入れやすく、使う量を決めやすい設計です。\n\n個包装なので、毎回袋を開ける手間とごみが出る点は確認しておきたいところ。\n\n商品はプロフィールの楽天ROOMで「Yunth」と検索できます。\n\n#LIFTSelect #美容液 #スキンケア #ビタミンC美容液",
  threads: "清潔な個包装で、1回分ずつ迷わないYunthの生ビタミンC美白美容液。個包装の手間とごみはありますが、毎日のケアを一定にしたい人に合う形です。"
});

export const mytrexHeadSpaPro = makeSelect({
  id: "lift-057", slug: "mytrex-head-spa-pro", name: "MYTREX EMS HEAD SPA PRO", category: "美容", series: "BEAUTY", sequence: "57",
  itemUrl: "https://item.rakuten.co.jp/leapgrow/mt-hs1808b/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1343342&item_id=10000267", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c133.dacfffb6.57b3c134.ba4b6992/", imageAlt: "清潔感のある洗面台とやわらかなタオル",
  problemTitle: "頭皮ケアは、手だけだと続けにくい。", problem: "自宅で頭皮やフェイスラインのケアを続けるなら、準備が少なく手に取りやすい道具が助けになります。",
  changeTitle: "頭皮ケアを、\n自宅の習慣に。", change: "EMS、赤色LED、電動ブラシを備えたヘッドスパ機器。頭皮だけでなく、アタッチメントを替えてフェイスケアにも使えます。",
  strengths: ["EMSと赤色LEDを搭載", "頭皮用とフェイス用のアタッチメント", "防水仕様"], drawbacks: ["機能が多い分、価格は手軽とは言いにくい"], insight: "ケア用品は、効果だけでなく、準備の少なさが継続を左右する。", roomKeyword: "MYTREX",
  room: "頭皮ケアとフェイスケアを1台でまとめたい人向けのMYTREX EMS HEAD SPA PRO。EMS、赤色LED、電動ブラシを備えています。機能が多い分、価格は手軽とは言いにくいので、使いたい部位と頻度を決めて選びたい商品です。",
  instagram: "頭皮ケアを、自宅の習慣に。\n\nMYTREX EMS HEAD SPA PROは、EMSと赤色LEDを備えた電動ヘッドスパ。アタッチメントを替えてフェイスケアにも使えます。\n\n機能が多い分、価格は手軽とは言いにくいので、使いたい部位と頻度を決めて選びたいところ。\n\n商品はプロフィールの楽天ROOMで「MYTREX」と検索できます。\n\n#LIFTSelect #頭皮ケア #ヘッドスパ #美容家電",
  threads: "頭皮と顔のケアを1台にまとめられるMYTREX EMS HEAD SPA PRO。EMS、赤色LED、電動ブラシを搭載。価格は高めなので、使う頻度を想像して選びたい美容家電です。"
});

export const allnaSheetMask = makeSelect({
  id: "lift-058", slug: "allna-sheet-mask", name: "ALLNA ORGANIC シートマスク", category: "美容", series: "BEAUTY", sequence: "58",
  itemUrl: "https://item.rakuten.co.jp/tsurunishi/905b07yxmsklm/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1358413&item_id=10001021", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c143.98d392b3.57b3c144.0331f0cb/", imageAlt: "朝の光が入る静かな洗面台",
  problemTitle: "毎日のパックは、取り出しやすさが大事。", problem: "シートマスクは、準備に手間がかかると続けにくいもの。大容量タイプなら、日常のケアへ組み込みやすくなります。",
  changeTitle: "30枚入りで、\n毎日のケアへ。", change: "朝用と夜用から選べる30枚入りのシートマスク。390mlの美容液を含み、毎日の保湿ケアに取り入れやすい構成です。",
  strengths: ["朝用と夜用から選べる", "30枚入りの大容量", "日本製"], drawbacks: ["大容量パックは、開封後の密閉と保管に気を配る必要がある"], insight: "毎日使うケア用品ほど、取り出して戻すまでの短さが大切。", roomKeyword: "オルナ",
  room: "朝用と夜用から選べるALLNA ORGANICのシートマスク。30枚入りで、日々の保湿ケアへ組み込みやすい大容量タイプです。開封後は乾燥を防ぐため、きちんと密閉して保管したい商品です。",
  instagram: "毎日のパックを、取り出しやすく。\n\nALLNA ORGANICのシートマスクは、朝用と夜用から選べる30枚入り。大容量なので、日々の保湿ケアへ組み込みやすい構成です。\n\n開封後は乾燥を防ぐため、きちんと密閉して保管したいところ。\n\n商品はプロフィールの楽天ROOMで「オルナ」と検索できます。\n\n#LIFTSelect #シートマスク #フェイスパック #保湿ケア",
  threads: "朝用と夜用から選べるALLNA ORGANICのシートマスク。30枚入りで、毎日の保湿ケアに取り入れやすい大容量タイプ。開封後の密閉と保管は丁寧に。"
});

export const caroteTryFree = makeSelect({
  id: "lift-059", slug: "carote-try-free", name: "CAROTE Try Free フライパンセット", category: "キッチン", series: "KITCHEN", sequence: "59",
  itemUrl: "https://item.rakuten.co.jp/cookware-carote/j10566/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1405489&item_id=10000231", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/56cc41b6.f640b47a.56cc41be.4475d03c/", imageAlt: "明るい木の天板がある落ち着いたキッチン",
  problemTitle: "鍋とフライパンで、収納が埋まる。", problem: "取っ手付きの調理器具は重ねにくく、数が増えるほど収納場所を取ります。",
  changeTitle: "取っ手を外して、\n重ねて収納。", change: "着脱式の取っ手で、フライパンと鍋を重ねて収納できるセット。IHとガス火の両方に対応します。",
  strengths: ["取っ手を外して重ねられる", "IHとガス火に対応", "6点と12点から選べる"], drawbacks: ["セット内容とサイズを、手持ちの調理器具と照合して選ぶ必要がある"], insight: "調理器具の収納は、数よりも取っ手の出っ張りで変わる。", roomKeyword: "CAROTE",
  room: "取っ手を外して重ねられるCAROTE Try Freeシリーズ。IHとガス火に対応し、6点と12点から選べます。セット内容が多いほど便利とは限らないので、手持ちの鍋やフライパンと照合して選びたい商品です。",
  instagram: "取っ手を外して、重ねて収納。\n\nCAROTE Try Freeは、着脱式の取っ手を使うフライパン・鍋セット。IHとガス火の両方に対応します。\n\nセット内容は6点と12点。手持ちの調理器具と重ならないか確認して選びたいところ。\n\n商品はプロフィールの楽天ROOMで「CAROTE」と検索できます。\n\n#LIFTSelect #フライパンセット #キッチン収納 #取っ手が取れる",
  threads: "取っ手を外して重ねられるCAROTE Try Free。IHとガス火に対応したフライパン・鍋セットです。点数だけで決めず、手持ちの調理器具と重ならない構成を選びたい。"
});

export const greenpanClickChef = makeSelect({
  id: "lift-060", slug: "greenpan-click-chef", name: "GREENPAN クリックシェフ 8点セット", category: "キッチン", series: "KITCHEN", sequence: "60",
  itemUrl: "https://item.rakuten.co.jp/patie/goods-01039/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1277407&item_id=10107752", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c161.9bdcbb7f.57b3c162.ba5ae2f5/", imageAlt: "明るい木目と白壁の整ったキッチン",
  problemTitle: "収納も素材も、妥協したくない。", problem: "毎日使うフライパンは、収納のしやすさに加えて、コーティングの素材も選ぶ基準になります。",
  changeTitle: "PFAS不使用と、\n省スペースを両立。", change: "PFAS不使用のセラミックコーティングと、着脱式ハンドルを組み合わせた8点セット。重ねて収納できます。",
  strengths: ["PFAS不使用のコーティング", "着脱式ハンドル", "IHとガス火に対応"], drawbacks: ["セラミックコーティングは、強火を避けるなど扱い方の確認が必要"], insight: "毎日使う道具は、収納性と素材の納得感を同時に選ぶ。", roomKeyword: "グリーンパン",
  room: "PFAS不使用のセラミックコーティングと、着脱式ハンドルを組み合わせたGREENPAN クリックシェフ。8点を重ねて収納できます。コーティングを長く使うため、強火を避けるなど説明書どおりの扱いが必要です。",
  instagram: "収納も素材も、妥協したくない。\n\nGREENPAN クリックシェフは、PFAS不使用のセラミックコーティングと着脱式ハンドルを組み合わせた8点セット。IHとガス火に対応します。\n\nコーティングを長く使うため、強火を避けるなど扱い方は確認しておきたいところ。\n\n商品はプロフィールの楽天ROOMで「グリーンパン」と検索できます。\n\n#LIFTSelect #グリーンパン #フライパン #キッチン用品",
  threads: "PFAS不使用のコーティングと、着脱式ハンドルを両立したGREENPAN クリックシェフ。重ねて収納できる8点セットです。長く使うには、強火を避けるなど扱い方の確認も大切。"
});

export const irisMegiPanSet = makeSelect({
  id: "lift-061", slug: "iris-megi-pan-set", name: "アイリスオーヤマ フライパンセット MEGI", category: "キッチン", series: "KITCHEN", sequence: "61",
  itemUrl: "https://item.rakuten.co.jp/e-kitchen/111739/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1255377&item_id=10122887", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/5626b743.462492b6.5626b74e.19dcdf6b/", imageAlt: "光が入るシンプルで整ったキッチン",
  problemTitle: "焼く、煮る、卵焼き。道具が増える。", problem: "料理ごとに道具をそろえると、キッチン収納はすぐいっぱいになります。",
  changeTitle: "必要な形を、\nひとまとめに。", change: "フライパン、鍋、マルチエッグパンなどを組み合わせたセット。取っ手を外して重ねられ、IHとガス火に対応します。",
  strengths: ["マルチエッグパンを含む構成", "取っ手を外して収納できる", "6点・9点・12点から選べる"], drawbacks: ["セットごとに内容が違うため、購入前の内訳確認が必要"], insight: "セット商品は、点数より、自分が使う形が入っているかで選ぶ。", roomKeyword: "MEGI",
  room: "フライパン、鍋、マルチエッグパンなどをまとめたアイリスオーヤマのMEGI。取っ手を外して重ねられ、IHとガス火に対応します。6点・9点・12点で内容が違うため、必要な形が入っているか内訳の確認が必要です。",
  instagram: "必要な形を、ひとまとめに。\n\nアイリスオーヤマのMEGIは、フライパン、鍋、マルチエッグパンなどを組み合わせたセット。取っ手を外して重ねられます。\n\n6点・9点・12点で内容が違うため、必要な形が入っているか内訳は確認しておきたいところ。\n\n商品はプロフィールの楽天ROOMで「MEGI」と検索できます。\n\n#LIFTSelect #アイリスオーヤマ #フライパンセット #キッチン用品",
  threads: "フライパン、鍋、マルチエッグパンなどをまとめたアイリスオーヤマのMEGI。取っ手を外して重ねられます。セットごとに内訳が違うので、点数より必要な形で選びたい。"
});

export const tanpakuOtome = makeSelect({
  id: "lift-062", slug: "tanpaku-otome", name: "タンパクオトメ", category: "健康", series: "HEALTH", sequence: "62",
  itemUrl: "https://item.rakuten.co.jp/kyunan/beauty-protein-tanpakuotome/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1208420&item_id=10020376", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c1dc.e21c4dcc.57b3c1dd.89c89b31/", imageAlt: "朝の光が入る明るいダイニングテーブル",
  problemTitle: "食事だけで、たんぱく質を整えにくい。", problem: "忙しい日は、食事の内容にばらつきが出やすく、必要な栄養を毎回そろえるのは簡単ではありません。",
  changeTitle: "美容成分も、\n一杯にまとめる。", change: "ホエイとソイのWプロテインに、25種の美容成分を組み合わせた女性向けプロテイン。複数の味から選べます。",
  strengths: ["ホエイとソイをW配合", "25種の美容成分", "味の選択肢がある"], drawbacks: ["味や甘さの感じ方には個人差がある"], insight: "続ける食品は、成分表だけでなく、味の相性がいちばん現実的。", roomKeyword: "タンパクオトメ",
  room: "ホエイとソイのWプロテインに、25種の美容成分を組み合わせたタンパクオトメ。複数の味から選べます。続ける食品なので、味や甘さの好みが合うかを少量から確認したい商品です。",
  instagram: "美容成分も、一杯にまとめる。\n\nタンパクオトメは、ホエイとソイのWプロテインに25種の美容成分を組み合わせた女性向けプロテイン。複数の味から選べます。\n\n味や甘さの感じ方には個人差があるため、続けやすい味を選びたいところ。\n\n商品はプロフィールの楽天ROOMで「タンパクオトメ」と検索できます。\n\n#LIFTSelect #プロテイン #タンパクオトメ #栄養補給",
  threads: "ホエイとソイのWプロテインに、25種の美容成分を組み合わせたタンパクオトメ。味の選択肢が多いのも特徴。続ける食品なので、成分だけでなく味の相性も大切です。"
});

export const valxWpc1kg = makeSelect({
  id: "lift-063", slug: "valx-wpc-1kg", name: "VALX ホエイプロテイン WPC 1kg", category: "健康", series: "HEALTH", sequence: "63",
  itemUrl: "https://item.rakuten.co.jp/valx/v004001-cpad/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1380896&item_id=10000262", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c93a.53791813.57b3c93b.4aa4279f/", imageAlt: "水の入ったグラスが置かれた朝のテーブル",
  problemTitle: "毎日のプロテインは、味に飽きやすい。", problem: "継続する食品は、栄養成分だけでなく、飲みやすさと味の選択肢が続けやすさを左右します。",
  changeTitle: "8つの味から、\n続く一袋を選ぶ。", change: "国内生産のWPCホエイプロテイン。チョコレート、ベリー、ヨーグルトなど8種類の味から選べます。",
  strengths: ["8種類の味から選べる", "国内生産", "1kg入り"], drawbacks: ["味によって甘さや飲みやすさの感じ方が変わる"], insight: "大袋を選ぶ前に、毎日飲める味かを考える。", roomKeyword: "VALX",
  room: "8種類の味から選べるVALXのWPCホエイプロテイン1kg。国内生産で、チョコレートやベリー、ヨーグルトなど選択肢があります。大袋なので、毎日飲める味かを考えて選びたい商品です。",
  instagram: "8つの味から、続く一袋を選ぶ。\n\nVALXのWPCホエイプロテインは1kg入り。チョコレート、ベリー、ヨーグルトなど8種類の味から選べます。\n\n味によって甘さや飲みやすさの感じ方が変わるため、大袋を選ぶ前に好みとの相性を考えたいところ。\n\n商品はプロフィールの楽天ROOMで「VALX」と検索できます。\n\n#LIFTSelect #VALX #ホエイプロテイン #プロテイン",
  threads: "8種類の味から選べるVALXのWPCホエイプロテイン1kg。毎日続けるものだから、成分だけでなく味の相性も大切。大袋を選ぶ前に、好みの方向を決めておきたい。"
});

export const grongWpc1kg = makeSelect({
  id: "lift-064", slug: "grong-wpc-1kg", name: "GronG ホエイプロテイン 1kg スタンダード", category: "健康", series: "HEALTH", sequence: "64",
  itemUrl: "https://item.rakuten.co.jp/grong/grong-184/", sourcePageUrl: "https://affiliate.rakuten.co.jp/link/pc/item?type=item&me_id=1384858&item_id=10000152", affiliateLinkUrl: "https://hb.afl.rakuten.co.jp/ichiba/57b3c1e8.2763df9e.57b3c1e9.918f36ce/", imageAlt: "朝日が入る清潔なダイニングテーブル",
  problemTitle: "プロテインだけで、ビタミンは別になる。", problem: "たんぱく質と一緒にほかの栄養も意識すると、サプリや食品が増えて管理が面倒になります。",
  changeTitle: "風味付きには、\n11種のビタミン。", change: "風味付きには11種のビタミンを配合した1kgタイプ。ナチュラルも選べます。",
  strengths: ["風味付きには11種のビタミンを配合", "ナチュラルも選べる", "1kg入り"], drawbacks: ["風味と溶け方の好みには個人差がある"], insight: "続ける栄養補給は、成分の多さより、毎日飲める味と手間で決まる。", roomKeyword: "GronG",
  room: "GronGのホエイプロテイン1kg。風味付きには11種のビタミンを配合し、ナチュラルも選べます。風味や溶け方の好みには個人差があるため、飲み方まで想像して選びたい商品です。",
  instagram: "風味付きには、11種のビタミン。\n\nGronGのホエイプロテインは、風味付きに11種のビタミンを配合した1kgタイプ。ナチュラルも選べます。\n\n風味や溶け方の好みには個人差があるため、普段の飲み方まで想像して選びたいところ。\n\n商品はプロフィールの楽天ROOMで「GronG」と検索できます。\n\n#LIFTSelect #GronG #ホエイプロテイン #栄養補給",
  threads: "GronGのホエイプロテイン1kg。風味付きには11種のビタミンを配合し、ナチュラルも選べます。毎日続けるなら、成分だけでなく味と溶け方の相性も大切。"
});

export const liftSelectBatch20260920 = [
  yunthVitaminC,
  mytrexHeadSpaPro,
  allnaSheetMask,
  caroteTryFree,
  greenpanClickChef,
  irisMegiPanSet,
  tanpakuOtome,
  valxWpc1kg,
  grongWpc1kg
];
