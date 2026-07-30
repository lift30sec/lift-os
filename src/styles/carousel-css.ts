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
  width: 400px;
  height: 400px;
  margin-top: 56px;
  object-fit: contain;
  object-position: center;
  align-self: flex-end;
  background: #fff;
}
.eyebrow { color: ${tokens.color.secondary}; font-size: 24px; font-weight: 600; }
h1 { margin: 104px 0 24px; max-width: 720px; font-size: 76px; line-height: 1.15; white-space: pre-line; }
h2 { margin: 120px 0 32px; max-width: 840px; font-size: 48px; line-height: 1.25; }
.body { max-width: 840px; font-size: 32px; line-height: 1.6; }
.label { margin-top: auto; color: ${tokens.color.secondary}; font-size: 28px; }
.list { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 64px; }
.panel { padding: 40px; border-top: 8px solid ${tokens.color.accent}; background: #fff; }
.panel h3 { margin: 0 0 24px; font-size: 30px; }
.panel li { margin: 0 0 16px; font-size: 25px; line-height: 1.45; }
.quote { margin: auto 0; max-width: 880px; font-size: 56px; font-weight: 700; line-height: 1.4; }
.cta { margin: auto 0; max-width: 840px; font-size: 52px; font-weight: 700; line-height: 1.4; }
.footer { margin-top: auto; color: ${tokens.color.secondary}; font-size: 24px; }
`;
