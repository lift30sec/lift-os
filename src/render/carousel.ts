import type { ProductRecord } from "../schema/product.ts";
import { escapeHtml, pageShell, brandMark } from "../templates/page.ts";

export interface RenderedPage {
  filename: string;
  html: string;
}

export function renderCarousel(product: ProductRecord): RenderedPage[] {
  const title = escapeHtml(product.content.coverTitle);
  const label = escapeHtml(product.content.productLabel);
  const problem = escapeHtml(product.content.problem);
  const change = escapeHtml(product.content.change);
  const insight = escapeHtml(product.content.insight);
  const cta = escapeHtml(product.content.cta);
  const strengths = product.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const drawbacks = product.drawbacks.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

  const pages = [
    `<main class="page">${brandMark}<div class="eyebrow">LIFT 01</div><h1>${title}</h1><div class="label">${label}</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">困りごと</div><h2>小さな手間が、毎回続く。</h2><p class="body">${problem}</p><div class="footer">毎日を30秒ラクにする。</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">変わったこと</div><h2>手間を減らす仕組みに変える。</h2><p class="body">${change}</p><div class="footer">${label}</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">正直レビュー</div><div class="list"><section class="panel"><h3>良かった点</h3><ul>${strengths}</ul></section><section class="panel"><h3>惜しい点</h3><ul>${drawbacks}</ul></section></div><div class="footer">実際に使った感想</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT Insight</div><blockquote class="quote">${insight}</blockquote><div class="footer">紹介する前に、理解する。</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT</div><div class="cta">毎日を30秒ラクにする。</div><p class="body">${cta}</p><div class="footer">プロフィールのリンクから</div></main>`
  ];

  return pages.map((content, index) => ({
    filename: `${String(index + 1).padStart(2, "0")}.html`,
    html: pageShell(content)
  }));
}
