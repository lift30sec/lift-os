import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { products } from "../src/content/products.ts";
import { renderCarousel } from "../src/render/carousel.ts";
import {
  requiresPrDisclosure,
  scoreTotal,
  validateProduct
} from "../src/schema/product.ts";

for (const product of products) {
  const errors = validateProduct(product);
  if (errors.length) {
    throw new Error(`${product.id} is invalid:\n${errors.join("\n")}`);
  }

  const target = resolve("output", product.id);
  const pages = renderCarousel(product);
  await mkdir(target, { recursive: true });

  for (const page of pages) {
    await writeFile(resolve(target, page.filename), page.html, "utf8");
  }

  await writeFile(
    resolve(target, "manifest.json"),
    JSON.stringify(
      {
        productId: product.id,
        contentRevision: 1,
        templateVersion: "editorial-carousel-v2",
        templateApprovedOn: "2026-07-31",
        score: scoreTotal(product.score),
        prDisclosureRequired: requiresPrDisclosure(product),
        imageSource: product.productImage,
        editorialCover: product.editorialCover
          ? {
              prototypeOnly: product.editorialCover.prototypeOnly,
              assetApprovedForEditing:
                product.editorialCover.assetApprovedForEditing
            }
          : null,
        pages: pages.map((page) => page.filename)
      },
      null,
      2
    ),
    "utf8"
  );

  await writeFile(
    resolve(target, "channel-copy.json"),
    JSON.stringify(
      {
        rakutenRoom: product.content.room,
        instagram: product.content.instagramCaption,
        threads: product.content.threads,
        prDisclosureRequired: requiresPrDisclosure(product)
      },
      null,
      2
    ),
    "utf8"
  );

  console.log(`Rendered ${pages.length} pages to ${target}`);
}
