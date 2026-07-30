export type ExperienceLevel = "owner" | "family" | "researched";
export type ProductStatus =
  | "candidate"
  | "testing"
  | "adopted"
  | "classic"
  | "held"
  | "rejected";

export interface LiftScore {
  ease: number;
  value: number;
  quality: number;
  usability: number;
  shareability: number;
}

export interface ProductContent {
  coverTitle: string;
  productLabel: string;
  problem: string;
  change: string;
  insight: string;
  cta: string;
  room: string;
  instagramCaption: string;
  threads: string;
}

export interface ProductImage {
  path: string;
  sourcePageUrl: string;
  affiliateLinkUrl: string;
  provider: "rakuten_affiliate";
  usage: "affiliate_asset";
  retrievedOn: string;
  fit: "contain";
  allowCrop: false;
  allowOverlay: false;
}

export interface ProductRecord {
  id: string;
  name: string;
  category: string;
  status: ProductStatus;
  experienceLevel: ExperienceLevel;
  problem: string;
  strengths: string[];
  drawbacks: string[];
  insight: string;
  score: LiftScore;
  sourceUrls: string[];
  startedUsingOn?: string;
  productImage?: ProductImage;
  content: ProductContent;
}

export function scoreTotal(score: LiftScore): number {
  return Object.values(score).reduce((total, value) => total + value, 0);
}

export function validateProduct(product: ProductRecord): string[] {
  const errors: string[] = [];
  const scoreLimits: Record<keyof LiftScore, number> = {
    ease: 30,
    value: 20,
    quality: 20,
    usability: 15,
    shareability: 15
  };

  for (const [key, maximum] of Object.entries(scoreLimits) as [
    keyof LiftScore,
    number
  ][]) {
    const value = product.score[key];
    if (!Number.isInteger(value) || value < 0 || value > maximum) {
      errors.push(`score.${key} must be an integer from 0 to ${maximum}`);
    }
  }

  if (!product.drawbacks.length) errors.push("at least one drawback is required");
  if (!product.sourceUrls.length) errors.push("at least one source URL is required");
  if (!product.content.coverTitle.trim()) errors.push("cover title is required");
  if (!product.content.room.trim()) errors.push("ROOM copy is required");
  if (!product.content.instagramCaption.trim()) {
    errors.push("Instagram caption is required");
  }
  if (!product.content.threads.trim()) errors.push("Threads copy is required");
  if (!product.insight.trim()) errors.push("insight is required");
  if (product.productImage) {
    if (!product.productImage.affiliateLinkUrl.trim()) {
      errors.push("product image requires its affiliate link");
    }
    if (product.productImage.allowCrop || product.productImage.allowOverlay) {
      errors.push("affiliate product images cannot be cropped or overlaid");
    }
  }

  return errors;
}
