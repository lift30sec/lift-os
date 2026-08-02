import { access, copyFile, mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { products } from "../src/content/products.ts";
import {
  requiresPrDisclosure,
  validateProduct
} from "../src/schema/product.ts";

const templateVersion = "editorial-carousel-v2";
const templateApprovedOn = "2026-07-31";

for (const product of products) {
  const errors = validateProduct(product);
  if (errors.length) {
    throw new Error(`${product.id} is invalid:\n${errors.join("\n")}`);
  }

  const renderedDirectory = resolve("output", product.id);
  const packageDirectory = resolve("output", "publish", product.id);
  const imageDirectory = resolve(packageDirectory, "instagram");
  await mkdir(imageDirectory, { recursive: true });

  const imageFiles: string[] = [];
  for (let index = 1; index <= 6; index += 1) {
    const filename = `${String(index).padStart(2, "0")}.png`;
    const source = resolve(renderedDirectory, filename);
    await access(source);
    await copyFile(source, resolve(imageDirectory, filename));
    imageFiles.push(`instagram/${filename}`);
  }

  await writeFile(
    resolve(packageDirectory, "instagram-caption.txt"),
    `${product.content.instagramCaption.trim()}\n`,
    "utf8"
  );
  await writeFile(
    resolve(packageDirectory, "threads.txt"),
    `${product.content.threads.trim()}\n`,
    "utf8"
  );
  await writeFile(
    resolve(packageDirectory, "rakuten-room.txt"),
    `${product.content.room.trim()}\n`,
    "utf8"
  );
  await writeFile(
    resolve(packageDirectory, "product-link.txt"),
    `${product.productImage?.affiliateLinkUrl ?? product.sourceUrls[0]}\n`,
    "utf8"
  );

  const packageManifest = {
    productId: product.id,
    productName: product.name,
    templateVersion,
    templateApprovedOn,
    prDisclosureRequired: requiresPrDisclosure(product),
    acquisitionType: product.acquisitionType,
    approvalState: {
      template: "approved",
      content: "awaiting_initial_publication_approval",
      externalPublication: "not_started"
    },
    linkStrategy: {
      publishOrder: ["rakuten_room", "instagram", "threads"],
      instagramFeed: "room_search_keyword",
      instagramStory: "room_post_permalink_link_sticker",
      threads: "room_post_permalink",
      roomPostPermalink: null
    },
    files: {
      instagramImages: imageFiles,
      instagramCaption: "instagram-caption.txt",
      threads: "threads.txt",
      rakutenRoom: "rakuten-room.txt",
      productLink: "product-link.txt"
    }
  };

  await writeFile(
    resolve(packageDirectory, "package.json"),
    JSON.stringify(packageManifest, null, 2),
    "utf8"
  );

  console.log(`Packaged ${product.id} to ${packageDirectory}`);
}
