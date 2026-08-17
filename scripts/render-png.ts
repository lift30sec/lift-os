import { readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const outputDir = resolve("output");
const requestedProducts = new Set(process.argv.slice(2));
const productDirs = (await readdir(outputDir, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && /^lift-\d+$/.test(entry.name))
  .filter((entry) => !requestedProducts.size || requestedProducts.has(entry.name))
  .map((entry) => entry.name)
  .sort();

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1080, height: 1350 },
  deviceScaleFactor: 1
});

try {
  for (const productDir of productDirs) {
    const sourceDir = resolve(outputDir, productDir);
    const pages = (await readdir(sourceDir))
      .filter((name) => name.endsWith(".html"))
      .sort();

    for (const filename of pages) {
      const htmlPath = resolve(sourceDir, filename);
      await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map((image) => image.decode()));
        await new Promise<void>((done) =>
          requestAnimationFrame(() => requestAnimationFrame(() => done()))
        );
        window.scrollTo(0, 0);
      });
      await page.screenshot({
        path: resolve(sourceDir, filename.replace(/\.html$/, ".png")),
        fullPage: false
      });
    }
  }
} finally {
  await browser.close();
}

console.log(`Rendered PNG files for ${productDirs.length} products`);
