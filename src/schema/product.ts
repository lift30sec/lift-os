export type ExperienceLevel = "owner" | "family" | "researched";
export type EditorialTrack = "classic" | "select";
export type AcquisitionType =
  | "normal_purchase"
  | "tax_donation"
  | "gifted"
  | "special_coupon"
  | "sponsored"
  | "event";
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
  coverKicker?: string;
  coverSeries?: string;
  coverSequence?: string;
  productLabel: string;
  problemTitle: string;
  problem: string;
  changeTitle: string;
  change: string;
  insight: string;
  cta: string;
  roomSearchKeyword: string;
  room: string;
  instagramCaption: string;
  threads: string;
  researchDisclosure?: string;
}

export interface EditorialCover {
  imagePath: string;
  imageAlt: string;
  contextImagePath?: string;
  contextImageAlt?: string;
  separateAffiliateImage?: boolean;
  objectPosition?: string;
  supportingObjectPosition?: string;
  sizing?: "cover" | "square";
  zoom?: number;
  contrast?: number;
  saturation?: number;
  coverBrightness?: number;
  coverTone?: "default" | "morning";
  assetApprovedForEditing: boolean;
  prototypeOnly: boolean;
}

export interface ProductImage {
  path: string;
  sourcePageUrl: string;
  affiliateLinkUrl?: string;
  provider: "rakuten_affiliate" | "rakuten_item_page";
  usage: "affiliate_asset" | "official_product_asset";
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
  editorialTrack: EditorialTrack;
  acquisitionType: AcquisitionType;
  problem: string;
  strengths: string[];
  drawbacks: string[];
  insight: string;
  score: LiftScore;
  sourceUrls: string[];
  startedUsingOn?: string;
  productImage?: ProductImage;
  editorialCover?: EditorialCover;
  content: ProductContent;
}

export function requiresPrDisclosure(product: ProductRecord): boolean {
  return !["normal_purchase", "tax_donation"].includes(product.acquisitionType);
}

export function scoreTotal(score: LiftScore): number {
  return Object.values(score).reduce((total, value) => total + value, 0);
}

export function validateProduct(product: ProductRecord): string[] {
  const errors: string[] = [];
  const publicCopyFields: Array<[string, string]> = [
    ...product.strengths.map((value, index) => [`strengths[${index}]`, value] as [string, string]),
    ...product.drawbacks.map((value, index) => [`drawbacks[${index}]`, value] as [string, string]),
    ["content.problem", product.content.problem],
    ["content.change", product.content.change],
    ["content.room", product.content.room],
    ["content.instagramCaption", product.content.instagramCaption],
    ["content.threads", product.content.threads]
  ];
  const internalVoicePatterns = [
    /本人が/,
    /本人宅/,
    /本人使用/,
    /購入して使用している/
  ];
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

  if (!product.sourceUrls.length) errors.push("at least one source URL is required");
  if (!product.content.coverTitle.trim()) errors.push("cover title is required");
  if (!product.content.roomSearchKeyword.trim()) {
    errors.push("ROOM search keyword is required");
  }
  if (product.content.roomSearchKeyword.length > 8) {
    errors.push("ROOM search keyword must be 8 characters or fewer");
  }
  if (!product.content.room.trim()) errors.push("ROOM copy is required");
  if (!product.content.instagramCaption.trim()) {
    errors.push("Instagram caption is required");
  }
  if (!product.content.threads.trim()) errors.push("Threads copy is required");
  if (!product.insight.trim()) errors.push("insight is required");
  for (const [field, value] of publicCopyFields) {
    if (internalVoicePatterns.some((pattern) => pattern.test(value))) {
      errors.push(`${field} contains internal verification language`);
    }
  }
  if (product.editorialTrack === "classic" && product.experienceLevel === "researched") {
    errors.push("researched products cannot use the classic editorial track");
  }
  if (product.editorialTrack === "select") {
    if (product.experienceLevel !== "researched") {
      errors.push("select products must use the researched experience level");
    }
    if (!product.content.researchDisclosure?.trim()) {
      errors.push("select products require a research disclosure");
    }
    if (!product.content.instagramCaption.includes(product.content.researchDisclosure ?? "")) {
      errors.push("Instagram copy must include the research disclosure");
    }
    if (!product.content.threads.includes(product.content.researchDisclosure ?? "")) {
      errors.push("Threads copy must include the research disclosure");
    }
  }
  if (product.productImage) {
    if (
      product.productImage.provider === "rakuten_affiliate" &&
      !product.productImage.affiliateLinkUrl?.trim()
    ) {
      errors.push("product image requires its affiliate link");
    }
    if (product.productImage.allowCrop || product.productImage.allowOverlay) {
      errors.push("affiliate product images cannot be cropped or overlaid");
    }
  }
  if (
    product.editorialCover &&
    !product.editorialCover.assetApprovedForEditing &&
    !product.editorialCover.prototypeOnly
  ) {
    errors.push("unapproved editorial cover assets must remain prototype-only");
  }

  return errors;
}
