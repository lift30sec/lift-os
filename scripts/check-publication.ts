import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { products } from "../src/content/products.ts";
import { validateProduct } from "../src/schema/product.ts";

interface PublicationCheck {
  productId: string;
  ready: boolean;
  blockers: string[];
}

const checks: PublicationCheck[] = products.map((product) => {
  const blockers = validateProduct(product);

  if (product.status !== "adopted" && product.status !== "classic") {
    blockers.push(`product status ${product.status} is not publishable`);
  }
  if (!product.editorialCover) {
    blockers.push("editorial cover is required");
  } else {
    if (product.editorialCover.prototypeOnly) {
      blockers.push("editorial cover is marked prototype-only");
    }
    if (!product.editorialCover.assetApprovedForEditing) {
      blockers.push("editorial cover asset is not cleared for editing and publication");
    }
  }
  if (!product.productImage) {
    blockers.push("approved affiliate product image and matching link are required");
  } else if (
    product.productImage.provider === "rakuten_affiliate" &&
    !product.productImage.affiliateLinkUrl?.trim()
  ) {
    blockers.push("Rakuten Affiliate assets require their matching affiliate link");
  } else if (
    product.productImage.provider === "rakuten_item_page" &&
    product.productImage.usage !== "official_product_asset"
  ) {
    blockers.push("Rakuten item-page images must be recorded as official product assets");
  }

  return {
    productId: product.id,
    ready: blockers.length === 0,
    blockers
  };
});

const report = {
  checkedAt: new Date().toISOString(),
  templateVersion: "editorial-carousel-v2",
  templateApprovedOn: "2026-07-31",
  ready: checks.every((check) => check.ready),
  products: checks
};

await mkdir(resolve("output"), { recursive: true });
await writeFile(
  resolve("output", "publication-readiness.json"),
  JSON.stringify(report, null, 2),
  "utf8"
);

for (const check of checks) {
  const state = check.ready ? "READY" : "BLOCKED";
  console.log(`${state} ${check.productId}`);
  for (const blocker of check.blockers) console.log(`  - ${blocker}`);
}

if (!report.ready) process.exitCode = 1;
