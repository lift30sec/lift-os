import type { ProductRecord } from "../schema/product.ts";
import { escapeHtml, pageShell, brandMark } from "../templates/page.ts";

export interface RenderedPage {
  filename: string;
  html: string;
}

function renderCover(product: ProductRecord, title: string, label: string): string {
  const cover = product.editorialCover;
  if (!cover) {
    const image = product.productImage
      ? `<img class="product-image" src="${escapeHtml(product.productImage.path)}" alt="${label}">`
      : "";
    return `<main class="page cover">${brandMark}<div class="eyebrow">LIFT 01</div><h1>${title}</h1><figure class="product-figure">${image}<figcaption class="label">${label}</figcaption></figure><div class="swipe">SWIPE →</div></main>`;
  }

  const series = escapeHtml(product.content.coverSeries ?? product.category);
  const sequence = escapeHtml(product.content.coverSequence ?? "01");
  const kicker = escapeHtml(product.content.coverKicker ?? "");
  const objectPosition = escapeHtml(cover.objectPosition ?? "center");
  const imageSize = Math.round(968 * (cover.zoom ?? 1));
  const contrast = cover.contrast ?? 1;
  const saturation = cover.saturation ?? 1;

  return `<main class="page editorial-cover">
    <header class="editorial-header">
      <div class="editorial-header__label">LIFT / ${series} ${sequence}</div>
      <img class="editorial-header__logo" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">
    </header>
    <section class="editorial-visual">
      <img
        class="editorial-visual__image"
        src="${escapeHtml(cover.imagePath)}"
        alt="${escapeHtml(cover.imageAlt)}"
        style="width:${imageSize}px;height:${imageSize}px;object-position:${objectPosition};filter:contrast(${contrast}) saturate(${saturation})"
      >
      <div class="editorial-story">
        ${kicker ? `<p class="editorial-story__kicker">${kicker}</p>` : ""}
        <h1>${title}</h1>
        <div class="editorial-story__product">${label}</div>
      </div>
    </section>
    <footer class="editorial-footer">
      <div class="editorial-footer__mark">LIFT / 30 SEC</div>
      <div class="editorial-footer__concept">毎日を30秒ラクにする。</div>
    </footer>
  </main>`;
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
  const drawbackPanel = product.drawbacks.length
    ? `<section class="panel panel--drawback"><h3>惜しい点</h3><ul>${drawbacks}</ul></section>`
    : "";
  const reviewClass = product.drawbacks.length ? "review-grid" : "review-grid review-grid--single";
  const pages = [
    renderCover(product, title, label),
    `<main class="page">${brandMark}<div class="eyebrow">困りごと</div><section class="text-block"><h2>${problemTitle}</h2><p class="body">${problem}</p></section></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">変わったこと</div><section class="text-block"><h2>${changeTitle}</h2><p class="body">${change}</p></section></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">正直レビュー</div><div class="${reviewClass}"><section class="panel panel--strength"><h3>良かった点</h3><ul>${strengths}</ul></section>${drawbackPanel}</div></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT Insight</div><blockquote class="quote">${insight}</blockquote></main>`,
    `<main class="page">${brandMark}<div class="eyebrow">LIFT</div><section class="cta-block"><div class="cta">毎日を30秒ラクにする。</div><p class="body">${cta}</p><div class="link-hint">プロフィールのリンクから</div></section></main>`
  ];

  return pages.map((content, index) => ({
    filename: `${String(index + 1).padStart(2, "0")}.html`,
    html: pageShell(content)
  }));
}
