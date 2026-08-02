import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const outputDir = resolve("output", "concepts");
await mkdir(outputDir, { recursive: true });

const html = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; width: 1080px; height: 1350px; overflow: hidden; }
    body {
      background: #f7f4ec;
      color: #17241e;
      font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
    }
    main {
      position: relative;
      width: 1080px;
      height: 1350px;
      padding: 0 56px 56px;
    }
    .header {
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #31483e;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: .16em;
    }
    .header-logo {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
    .visual {
      position: relative;
      width: 968px;
      height: 900px;
      overflow: hidden;
      background: #d7d4cb;
    }
    .photo {
      position: absolute;
      left: 0;
      top: 0;
      width: 1460px;
      height: 1460px;
      object-fit: cover;
      filter: contrast(1.18) saturate(.88);
    }
    .visual::after {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(17, 30, 24, .05), rgba(17, 30, 24, .20)),
        rgba(26, 39, 33, .04);
      pointer-events: none;
    }
    .story {
      position: absolute;
      z-index: 2;
      left: 80px;
      right: 80px;
      top: 50%;
      transform: translateY(-44%);
      text-align: center;
      color: #fff;
    }
    .kicker {
      margin: 0 0 26px;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: .13em;
      text-shadow: 0 2px 18px rgba(10, 20, 15, .35);
    }
    h1 {
      margin: 0;
      font-size: 76px;
      line-height: 1.28;
      letter-spacing: .02em;
      text-shadow: 0 4px 24px rgba(10, 20, 15, .50);
    }
    .product {
      margin-top: 28px;
      font-size: 23px;
      font-weight: 600;
      letter-spacing: .06em;
      text-shadow: 0 2px 16px rgba(10, 20, 15, .45);
    }
    .footer {
      height: 174px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding-bottom: 16px;
      color: #3d5147;
    }
    .footer-mark {
      font-family: Montserrat, Arial, sans-serif;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: .18em;
    }
    .concept {
      font-size: 20px;
      font-weight: 600;
      letter-spacing: .10em;
    }
  </style>
</head>
<body>
  <main>
    <header class="header">
      <div class="header-label">LIFT / KITCHEN 01</div>
      <img class="header-logo" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">
    </header>
    <section class="visual">
      <img class="photo" src="../../assets/products/sakuraku-exhaust-cover/affiliate-usage.webp" alt="SAKuRAKu 排気口カバー">
      <div class="story">
        <p class="kicker">もっと早く知りたかった、暮らしの道具</p>
        <h1>新築のときに、<br>知りたかった。</h1>
        <div class="product">SAKuRAKu 排気口カバー</div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-mark">LIFT / 30 SEC</div>
      <div class="concept">毎日を30秒ラクにする。</div>
    </footer>
  </main>
</body>
</html>`;

const htmlPath = resolve(outputDir, "exhaust-cover-editorial.html");
const pngPath = resolve(outputDir, "exhaust-cover-editorial.png");
await writeFile(htmlPath, html, "utf8");

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1
});

try {
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((image) => image.decode()));
  });
  await page.screenshot({ path: pngPath, fullPage: false });
} finally {
  await browser.close();
}

console.log(`Rendered ${pngPath}`);
