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
  width: ${tokens.canvas.width}px;
  height: ${tokens.canvas.height}px;
  padding: ${tokens.spacing.safeY}px ${tokens.spacing.safeX}px;
  display: flex;
  flex-direction: column;
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
  width: 424px;
  margin: 56px 0 0 auto;
}
.label {
  margin-top: 20px;
  color: ${tokens.color.secondary};
  font-size: 24px;
  line-height: 1.5;
}
.list { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 168px; }
.panel { padding: 40px; border-top: 8px solid ${tokens.color.accent}; background: #fff; }
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
`;

