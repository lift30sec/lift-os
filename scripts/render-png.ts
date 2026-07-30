import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const sourceDir = resolve("output", "sample");
const pages = (await readdir(sourceDir))
  .filter((name) => name.endsWith(".html"))
  .sort();

if (!pages.length) {
  throw new Error("No HTML pages found. Run npm run render:sample first.");
}

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1
});

try {
  for (const filename of pages) {
    const htmlPath = resolve(sourceDir, filename);
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.images].map((image) => image.decode()));
      await new Promise<void>((done) =>
        requestAnimationFrame(() => requestAnimationFrame(() => done()))
      );
    });
    await page.screenshot({
      path: resolve(sourceDir, filename.replace(/\.html$/, ".png")),
      fullPage: false
    });
  }
} finally {
  await browser.close();
}

console.log(`Rendered ${pages.length} PNG files to ${sourceDir}`);

