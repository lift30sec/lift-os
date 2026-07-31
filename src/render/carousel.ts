import type { ProductRecord } from "../schema/product.ts";
import { escapeHtml, pageShell, brandMark } from "../templates/page.ts";

export interface RenderedPage {
  filename: string;
  html: string;
}

function editorialImage(
  product: ProductRecord,
  className: string,
  placement: "cover" | "supporting" = "cover"
): string {
  const cover = product.editorialCover;
  if (!cover) return "";

  const objectPosition = escapeHtml(cover.objectPosition ?? "center");
  const zoom = cover.zoom ?? 1;
  const imageStyle =
    placement === "supporting"
      ? "object-position:center;transform:scale(1.12)"
      : cover.sizing === "square"
      ? `width:${Math.round(968 * zoom)}px;height:${Math.round(968 * zoom)}px;object-position:${objectPosition}`
      : `object-position:${objectPosition};transform:scale(${zoom})`;
  const contrast = cover.contrast ?? 1;
  const saturation = cover.saturation ?? 1;

  return `<img class="${className}" src="${escapeHtml(cover.imagePath)}" alt="${escapeHtml(
    cover.imageAlt
  )}" style="${imageStyle};filter:contrast(${contrast}) saturate(${saturation})">`;
}

function editorialHeader(product: ProductRecord, pageNumber: string): string {
  const series = escapeHtml(product.content.coverSeries ?? product.category);
  return `<header class="editorial-subheader">
    <div class="editorial-header__label">LIFT / ${series} ${pageNumber}</div>
    <img class="editorial-header__logo" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">
  </header>`;
}

function renderCompliantCover(
  product: ProductRecord,
  title: string,
  label: string
): string {
  const cover = product.editorialCover!;
  const contextPath = escapeHtml(cover.contextImagePath!);
  const contextAlt = escapeHtml(cover.contextImageAlt ?? "");
  const affiliateImage = product.productImage
    ? `<img class="compliant-product__image" src="${escapeHtml(
        product.productImage.path
      )}" alt="${label}">`
    : "";
  const kicker = escapeHtml(product.content.coverKicker ?? "");
  const series = escapeHtml(product.content.coverSeries ?? product.category);
  const sequence = escapeHtml(product.content.coverSequence ?? "01");

  return `<main class="page compliant-cover">
    <section class="compliant-context">
      <img class="compliant-context__image" src="${contextPath}" alt="${contextAlt}">
      <div class="compliant-context__shade"></div>
      <header class="compliant-header">
        <div class="compliant-header__label">LIFT / ${series} ${sequence}</div>
        <img class="compliant-header__logo" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">
      </header>
      <div class="compliant-context__copy">
        ${kicker ? `<p>${kicker}</p>` : ""}
        <h1>${title}</h1>
      </div>
    </section>
    <section class="compliant-product">
      <div class="compliant-product__copy">
        <div>実際に使ってよかったもの</div>
        <h2>${label}</h2>
        <p>使って分かったことを、正直にまとめます。</p>
      </div>
      <figure>${affiliateImage}</figure>
    </section>
    <footer class="compliant-footer"><span>LIFT / 30 SEC</span><span>毎日を30秒ラクにする。</span></footer>
  </main>`;
}

function renderCover(product: ProductRecord, title: string, label: string): string {
  const cover = product.editorialCover;
  if (!cover) {
    const image = product.productImage
      ? `<img class="product-image" src="${escapeHtml(product.productImage.path)}" alt="${label}">`
      : "";
    return `<main class="page cover">${brandMark}<div class="eyebrow">LIFT 01</div><h1>${title}</h1><figure class="product-figure">${image}<figcaption class="label">${label}</figcaption></figure><div class="swipe">SWIPE →</div></main>`;
  }
  if (
    cover.contextImagePath &&
    cover.separateAffiliateImage &&
    product.productImage
  ) {
    return renderCompliantCover(product, title, label);
  }

  const series = escapeHtml(product.content.coverSeries ?? product.category);
  const sequence = escapeHtml(product.content.coverSequence ?? "01");
  const kicker = escapeHtml(product.content.coverKicker ?? "");

  return `<main class="page editorial-cover">
    <header class="editorial-header">
      <div class="editorial-header__label">LIFT / ${series} ${sequence}</div>
      <img class="editorial-header__logo" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">
    </header>
    <section class="editorial-visual">
      ${editorialImage(product, "editorial-visual__image")}
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
    ? `<section class="editorial-drawback"><h3>惜しい点</h3><ul>${drawbacks}</ul></section>`
    : "";
  const editorialPages = Boolean(product.editorialCover);
  const pages = [
    renderCover(product, title, label),
    editorialPages
      ? `<main class="page editorial-page">
          ${editorialHeader(product, "02")}
          <section class="editorial-copy">
            <div class="editorial-copy__eyebrow">困りごと</div>
            <h2>${problemTitle}</h2>
            <p>${problem}</p>
          </section>
          <figure class="editorial-strip">${editorialImage(product, "editorial-strip__image", "supporting")}</figure>
          <footer class="editorial-page-footer"><span>02 / 06</span><span>${label}</span></footer>
        </main>`
      : `<main class="page">${brandMark}<div class="eyebrow">困りごと</div><section class="text-block"><h2>${problemTitle}</h2><p class="body">${problem}</p></section></main>`,
    editorialPages
      ? `<main class="page editorial-page">
          ${editorialHeader(product, "03")}
          <section class="editorial-copy">
            <div class="editorial-copy__eyebrow">変わったこと</div>
            <h2>${changeTitle}</h2>
            <p>${change}</p>
          </section>
          <figure class="editorial-strip editorial-strip--change">${editorialImage(product, "editorial-strip__image", "supporting")}</figure>
          <footer class="editorial-page-footer"><span>03 / 06</span><span>${label}</span></footer>
        </main>`
      : `<main class="page">${brandMark}<div class="eyebrow">変わったこと</div><section class="text-block"><h2>${changeTitle}</h2><p class="body">${change}</p></section></main>`,
    editorialPages
      ? `<main class="page editorial-page">
          ${editorialHeader(product, "04")}
          <section class="editorial-review">
            <div class="editorial-copy__eyebrow">正直レビュー</div>
            <section class="editorial-strengths"><h2>使って分かった、<br>良かった点。</h2><ul>${strengths}</ul></section>
            ${drawbackPanel}
          </section>
          <footer class="editorial-page-footer"><span>04 / 06</span><span>${label}</span></footer>
        </main>`
      : `<main class="page">${brandMark}<div class="eyebrow">正直レビュー</div><div class="review-grid"><section class="panel panel--strength"><h3>良かった点</h3><ul>${strengths}</ul></section>${drawbackPanel}</div></main>`,
    editorialPages
      ? `<main class="page editorial-page editorial-insight">
          ${editorialHeader(product, "05")}
          <section class="editorial-insight__visual">
            ${editorialImage(product, "editorial-insight__image", "supporting")}
            <div class="editorial-insight__copy"><div>LIFT INSIGHT</div><blockquote>${insight}</blockquote></div>
          </section>
          <footer class="editorial-page-footer"><span>05 / 06</span><span>${label}</span></footer>
        </main>`
      : `<main class="page">${brandMark}<div class="eyebrow">LIFT Insight</div><blockquote class="quote">${insight}</blockquote></main>`,
    editorialPages
      ? `<main class="page editorial-page editorial-cta">
          ${editorialHeader(product, "06")}
          <section class="editorial-cta__body">
            <div class="editorial-cta__brand">毎日を30秒<br>ラクにする。</div>
            <p>${cta}</p>
            <div class="editorial-cta__link">商品はプロフィールの楽天ROOMから</div>
          </section>
          <figure class="editorial-cta__strip">${editorialImage(product, "editorial-strip__image", "supporting")}</figure>
          <footer class="editorial-page-footer"><span>06 / 06</span><span>LIFT / 30 SEC</span></footer>
        </main>`
      : `<main class="page">${brandMark}<div class="eyebrow">LIFT</div><section class="cta-block"><div class="cta">毎日を30秒ラクにする。</div><p class="body">${cta}</p><div class="link-hint">プロフィールのリンクから</div></section></main>`
  ];

  return pages.map((content, index) => ({
    filename: `${String(index + 1).padStart(2, "0")}.html`,
    html: pageShell(content)
  }));
}
