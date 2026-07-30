import { carouselCss } from "../styles/carousel-css.ts";

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function pageShell(content: string): string {
  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=1080, initial-scale=1">
  <style>${carouselCss}</style>
</head>
<body>${content}</body>
</html>`;
}

export const brandMark = `
<img class="brand" src="../../assets/brand/lift-logo-transparent.png" alt="LIFT 30 sec">`;
