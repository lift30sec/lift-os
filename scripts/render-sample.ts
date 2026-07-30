import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { sampleProduct } from "../src/content/sample-product.ts";
import { renderCarousel } from "../src/render/carousel.ts";
import { scoreTotal, validateProduct } from "../src/schema/product.ts";

const errors = validateProduct(sampleProduct);
if (errors.length) {
  throw new Error(`Sample product is invalid:\n${errors.join("\n")}`);
}

const target = resolve("output", "sample");
await mkdir(target, { recursive: true });

for (const page of renderCarousel(sampleProduct)) {
  await writeFile(resolve(target, page.filename), page.html, "utf8");
}

await writeFile(
  resolve(target, "manifest.json"),
  JSON.stringify(
    {
      productId: sampleProduct.id,
      score: scoreTotal(sampleProduct.score),
      pages: renderCarousel(sampleProduct).map((page) => page.filename)
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Rendered ${renderCarousel(sampleProduct).length} pages to ${target}`);
