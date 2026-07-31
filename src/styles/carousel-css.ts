import { tokens } from "./tokens.ts";

export const carouselCss = `
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  width: ${tokens.canvas.width}px;
  height: ${tokens.canvas.height}px;
  overflow: hidden;
  background: ${tokens.color.background};
  color: ${tokens.color.text};
  font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif;
}
.page {
  position: relative;
  isolation: isolate;
  width: ${tokens.canvas.width}px;
  height: ${tokens.canvas.height}px;
  padding: ${tokens.spacing.safeY}px ${tokens.spacing.safeX}px;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, rgba(255,255,255,.32), transparent 42%),
    ${tokens.color.background};
}
.page::before {
  content: "";
  position: absolute;
  z-index: -2;
  width: 700px;
  height: 980px;
  right: -280px;
  bottom: -390px;
  border-radius: 52% 48% 0 0;
  background: ${tokens.color.path};
  transform: rotate(10deg);
}
.page::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 760px;
  height: 760px;
  right: -360px;
  bottom: -335px;
  border: 2px solid ${tokens.color.pathLine};
  border-radius: 50%;
  opacity: .62;
}
.brand {
  position: absolute;
  top: 96px;
  right: 80px;
  width: 152px;
  height: 152px;
  object-fit: contain;
}
.product-image {
  width: 424px;
  height: 424px;
  object-fit: contain;
  object-position: center;
  background: #fff;
}
.eyebrow { color: ${tokens.color.secondary}; font-size: 24px; font-weight: 600; }
h1 {
  margin: 104px 0 0;
  max-width: 760px;
  font-size: 68px;
  line-height: 1.24;
  letter-spacing: 0.01em;
  white-space: pre-line;
}
h2 {
  margin: 0 0 32px;
  max-width: 840px;
  font-size: 46px;
  line-height: 1.35;
  letter-spacing: 0.01em;
  white-space: pre-line;
}
.body { margin: 0; max-width: 840px; font-size: 30px; line-height: 1.75; }
.text-block { margin-top: 176px; }
.product-figure {
  position: relative;
  width: 424px;
  margin: 56px 0 0 auto;
}
.product-figure::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -24px 24px 24px -24px;
  background: rgba(255,255,255,.55);
  border: 1px solid rgba(167,184,167,.55);
}
.label {
  margin-top: 20px;
  color: ${tokens.color.secondary};
  font-size: 24px;
  line-height: 1.5;
}
.review-grid {
  display: grid;
  grid-template-columns: 1.35fr .85fr;
  gap: 40px;
  margin-top: 144px;
  align-items: start;
}
.review-grid--single { grid-template-columns: minmax(0, 720px); }
.panel {
  min-height: 400px;
  padding: 48px;
  border-top: 8px solid ${tokens.color.accent};
  background: rgba(255,255,255,.9);
}
.panel--drawback {
  margin-top: 96px;
  min-height: 304px;
  border-top-color: ${tokens.color.pathLine};
}
.panel h3 { margin: 0 0 24px; font-size: 30px; }
.panel li { margin: 0 0 16px; font-size: 25px; line-height: 1.45; }
.quote {
  margin: 280px 0 0;
  width: 840px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.48;
  letter-spacing: 0.01em;
  white-space: pre-line;
  overflow-wrap: anywhere;
}
.cta-block { margin-top: 280px; }
.cta {
  max-width: 840px;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.45;
  letter-spacing: 0.01em;
}
.cta-block .body { margin-top: 48px; }
.link-hint {
  margin-top: 24px;
  color: ${tokens.color.secondary};
  font-size: 24px;
}
.swipe {
  position: absolute;
  left: 80px;
  bottom: 88px;
  color: ${tokens.color.secondary};
  font-size: 19px;
  font-weight: 600;
  letter-spacing: .16em;
}

.editorial-cover {
  padding: 0 56px 56px;
  background: #f7f4ec;
}
.editorial-cover::before,
.editorial-cover::after { display: none; }
.editorial-header {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.editorial-header__label {
  color: #31483e;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .16em;
}
.editorial-header__logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
}
.editorial-visual {
  position: relative;
  width: 968px;
  height: 900px;
  overflow: hidden;
  background: #d7d4cb;
}
.editorial-visual__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}
.editorial-visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(17, 30, 24, .05), rgba(17, 30, 24, .20)),
    rgba(26, 39, 33, .04);
}
.editorial-story {
  position: absolute;
  z-index: 2;
  left: 80px;
  right: 80px;
  top: 50%;
  transform: translateY(-44%);
  text-align: center;
  color: #fff;
}
.editorial-story__kicker {
  margin: 0 0 26px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: .13em;
  text-shadow: 0 2px 18px rgba(10, 20, 15, .35);
}
.editorial-story h1 {
  margin: 0;
  max-width: none;
  font-size: 76px;
  line-height: 1.28;
  letter-spacing: .02em;
  text-shadow: 0 4px 24px rgba(10, 20, 15, .50);
}
.editorial-story__product {
  margin-top: 28px;
  font-size: 23px;
  font-weight: 600;
  letter-spacing: .06em;
  text-shadow: 0 2px 16px rgba(10, 20, 15, .45);
}
.editorial-footer {
  height: 174px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 16px;
  color: #3d5147;
}
.editorial-footer__mark {
  font-family: Montserrat, Arial, sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: .18em;
}
.editorial-footer__concept {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: .10em;
}

.editorial-page {
  padding: 0 56px 40px;
  background: #f7f4ec;
}
.editorial-page::before,
.editorial-page::after { display: none; }
.editorial-subheader {
  flex: 0 0 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.editorial-copy {
  flex: 0 0 548px;
  padding: 42px 24px 34px;
}
.editorial-copy__eyebrow {
  margin-bottom: 32px;
  color: #607267;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .18em;
}
.editorial-copy h2 {
  margin: 0 0 34px;
  max-width: 800px;
  font-size: 54px;
  line-height: 1.34;
}
.editorial-copy p {
  margin: 0;
  max-width: 850px;
  font-size: 26px;
  line-height: 1.72;
}
.editorial-strip {
  position: relative;
  flex: 0 0 470px;
  margin: 0;
  overflow: hidden;
  background: #d7d4cb;
}
.editorial-strip::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(22, 34, 28, .02), rgba(22, 34, 28, .12));
}
.editorial-strip__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}
.editorial-strip--change .editorial-strip__image {
  transform-origin: center 68%;
}
.editorial-page-footer {
  flex: 1 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #31483e;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: .10em;
}
.editorial-review {
  flex: 1 1 auto;
  padding: 38px 24px 20px;
}
.editorial-strengths h2 {
  margin: 0 0 40px;
  font-size: 54px;
  line-height: 1.34;
}
.editorial-strengths ul,
.editorial-drawback ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.editorial-strengths li {
  padding: 21px 0;
  border-top: 1px solid #aeb9b0;
  font-size: 28px;
  line-height: 1.5;
}
.editorial-drawback {
  margin-top: 36px;
  padding: 26px 30px;
  background: #e4e1d8;
}
.editorial-drawback h3 {
  margin: 0 0 12px;
  color: #607267;
  font-size: 19px;
  letter-spacing: .14em;
}
.editorial-drawback li {
  font-size: 24px;
  line-height: 1.55;
}
.editorial-insight__visual {
  position: relative;
  flex: 0 0 1000px;
  overflow: hidden;
  background: #59645d;
}
.editorial-insight__visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(23, 35, 29, .48);
}
.editorial-insight__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}
.editorial-insight__copy {
  position: absolute;
  z-index: 2;
  left: 72px;
  right: 72px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}
.editorial-insight__copy > div {
  margin-bottom: 34px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .18em;
}
.editorial-insight__copy blockquote {
  margin: 0;
  font-size: 54px;
  font-weight: 700;
  line-height: 1.48;
  white-space: pre-line;
}
.editorial-cta__body {
  flex: 0 0 690px;
  padding: 92px 24px 0;
}
.editorial-cta__brand {
  color: #31483e;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.3;
}
.editorial-cta__body p {
  margin: 54px 0 0;
  max-width: 820px;
  font-size: 27px;
  line-height: 1.75;
}
.editorial-cta__link {
  display: inline-block;
  margin-top: 42px;
  padding-bottom: 10px;
  border-bottom: 2px solid #31483e;
  color: #31483e;
  font-size: 22px;
  font-weight: 700;
}
.editorial-cta__strip {
  position: relative;
  flex: 0 0 280px;
  margin: 0;
  overflow: hidden;
  background: #d7d4cb;
}
.editorial-cta__strip::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(23, 35, 29, .12);
}

.compliant-cover {
  display: block;
  padding: 0;
  background: #f7f4ec;
}
.compliant-cover::before,
.compliant-cover::after { display: none; }
.compliant-header {
  position: absolute;
  z-index: 3;
  top: 38px;
  left: 64px;
  right: 64px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.compliant-header__label {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .16em;
  text-shadow: 0 2px 14px rgba(0, 0, 0, .36);
}
.compliant-header__logo {
  width: 132px;
  height: 132px;
  border: 2px solid rgba(255, 255, 255, .96);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Montserrat, Arial, sans-serif;
  text-shadow: 0 2px 12px rgba(0, 0, 0, .32);
}
.compliant-logo__arrow {
  margin: -4px 0 2px;
  font-size: 27px;
  font-weight: 400;
  line-height: 1;
}
.compliant-logo__word {
  margin-left: .22em;
  font-size: 23px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: .22em;
}
.compliant-logo__time {
  margin-top: 5px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .04em;
}
.compliant-context {
  position: relative;
  width: 1080px;
  height: 1350px;
  overflow: hidden;
  background: #243029;
}
.compliant-context__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 58%;
}
.compliant-context__shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(14, 22, 18, .16), rgba(14, 22, 18, .10) 36%, rgba(14, 22, 18, .28) 62%, rgba(14, 22, 18, .82) 100%),
    linear-gradient(90deg, rgba(14, 22, 18, .24), rgba(14, 22, 18, .04) 72%);
}
.compliant-context__copy {
  position: absolute;
  left: 112px;
  right: 112px;
  top: 410px;
  transform: none;
  color: #fff;
}
.compliant-context__copy p {
  margin: 0 0 28px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .14em;
}
.compliant-context__copy h1 {
  margin: 0;
  max-width: 760px;
  font-size: 70px;
  line-height: 1.3;
  text-shadow: 0 4px 24px rgba(0, 0, 0, .36);
}
.compliant-product {
  position: absolute;
  z-index: 3;
  left: 72px;
  right: 72px;
  bottom: 102px;
  height: 286px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 236px;
  gap: 56px;
  align-items: center;
  padding: 0;
}
.compliant-product::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: -38px -72px -28px;
  background:
    radial-gradient(
      ellipse at 42% 54%,
      rgba(247, 244, 236, .90) 0%,
      rgba(247, 244, 236, .76) 38%,
      rgba(247, 244, 236, .34) 68%,
      rgba(247, 244, 236, 0) 100%
    );
  filter: blur(18px);
}
.compliant-product__copy > div {
  margin-bottom: 14px;
  color: #52675c;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: .12em;
}
.compliant-product__copy h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.4;
  color: #1f3329;
  text-shadow: none;
}
.compliant-product__copy p {
  margin: 16px 0 0;
  color: #40564a;
  font-size: 20px;
}
.compliant-product figure {
  margin: 0;
  width: 236px;
  height: 236px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(0, 0, 0, .24);
}
.compliant-product__image {
  display: block;
  width: 236px;
  height: 236px;
  object-fit: contain;
}
.compliant-footer {
  position: absolute;
  left: 64px;
  right: 64px;
  bottom: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, .92);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: .1em;
}
`;
