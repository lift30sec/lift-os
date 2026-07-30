import type { ProductRecord } from "../schema/product.ts";
import { escapeHtml, pageShell, brandMark } from "../templates/page.ts";

export interface RenderedPage {
  filename: string;
  html: string;
}

export function renderCarousel(product: ProductRecord): RenderedPage[] {
  const title = escapeHtml(product.content.coverTitle);
  const label = escapeHtml(product.content.productLabel);
  const problemTitle = escapeHtml(product.content.problemTitle);
  const problem = escapeHtml(product.content.problem);
  const changeTitle = escapeHtml(product.content.changeTitle);
  const change = escapeHtml(product.content.change);
  const insight = escapeHtml(product.content.insight);
  const cta = escapeHtml(product.content.cta);
  const strengths = product.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const drawbacks = product.drawbacks.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const image = product.productImage
    ? `<img class="product-image" src="${escapeHtml(product.productImage.path)}" alt="${label}">`
    : "";

  const pages = [
    `<main class="page cover">${brandMark}<div class="eyebrow">LIFT 01</div><h1>${title}</h1><figure class="product-figure">${image}<figcaption class="label">${label}</figcaption></figure></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">困りごと</div><section class="text-block"><h2>${problemTitle}</h2><p class="body">${problem}</p></section></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">変わったこと</div><section class="text-block"><h2>${changeTitle}</h2><p class="body">${change}</p></section></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">正直レビュー</div><div class="list"><section class="panel"><h3>良かった点</h3><ul>${strengths}</ul></section><section class="panel"><h3>惜しい点</h3><ul>${drawbacks}</ul></section></div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT Insight</div><blockquote class="quote">${insight}</blockquote></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT</div><section class="cta-block"><div class="cta">毎日を30秒ラクにする。</div><p class="body">${cta}</p><div class="link-hint">プロフィールのリンクから</div></section></main>`
  ];

  return pages.map((content, index) => ({
    filename: `${String(index + 1).padStart(2, "0")}.html`,
    html: pageShell(content)
  }));
}
