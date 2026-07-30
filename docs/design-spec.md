# Design Spec v0.1

## Canvas

- Instagram portrait: 1080 × 1350 px
- Grid: 8 px
- Background: `#F8F8F6`
- Primary text: `#111111`
- Secondary text: `#666666`
- Warm accent: `#D8D2C6`
- Safe area: 80 px horizontal, 96 px vertical

## Typography

- Japanese: `"Noto Sans JP", sans-serif`
- Latin fallback: `Montserrat, sans-serif`
- Cover title: 76 px, 700, line-height 1.15, maximum 2 lines
- Page heading: 48 px, 700, line-height 1.25
- Body: 32 px, 400, line-height 1.6
- Label: 24 px, 600

Font availability must be verified in the rendering environment. The current renderer declares web-safe fallbacks and does not bundle unverified font files.

## Components

- `brand-mark`: text-based mark at the upper right; replaceable by an approved transparent logo asset.
- `eyebrow`: short category or sequence label.
- `headline`: one message per page.
- `product-image`: `contain` fit; never synthesize a look-alike product.
- `insight`: short editorial observation.
- `cta`: non-coercive direction to the profile or saved link.

## Six-page carousel

1. Cover: emotional hook + product name.
2. Problem: recognizable recurring frustration.
3. Change: what changed in the owner’s routine.
4. Review: strengths and one or more drawbacks.
5. Insight: one memorable observation.
6. CTA: brand promise and gentle direction.

## Image policy

Priority:

1. owner-taken image;
2. manufacturer image with confirmed reuse rights;
3. merchant image only when its usage terms permit.

AI-generated look-alike product images are prohibited because small visual differences can mislead.

