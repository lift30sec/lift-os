# LIFT OS

LIFT OS is the operating system for **LIFT — 毎日を30秒ラクにする。**

It turns honest product experience into reusable, channel-specific content while preserving a clear distinction between verified facts, owner experience, assumptions, and estimates.

## Mission

Help people make fewer disappointing purchases by introducing products that reduce small, recurring frustrations in everyday life.

## Principles

- Recommend only products the brand owner genuinely considers worthwhile.
- Explain the problem solved before listing product features.
- Record both strengths and drawbacks.
- Never present an unpurchased product as personally tested.
- Prefer prevention and time saved over exaggerated claims.
- Keep human approval for brand judgment and publishing.
- Automate repetitive transformation, rendering, and record keeping.

## Sources of truth

Notion is the product knowledge source of truth. This repository is the source of truth for specifications, content rules, rendering code, and automation.

## Architecture

```text
Notion / approved input
        |
        v
normalized product data
        |
        v
content generation + validation
        |
        v
HTML/CSS rendering (1080 x 1350)
        |
        v
PNG assets + channel copy
        |
        +--> Instagram
        +--> Threads
        +--> Rakuten ROOM
        +--> note (future)
```

## Initial scope

Version 0.1 provides:

- versioned brand, design, data, content, and automation specifications;
- a TypeScript data model with runtime validation;
- an HTML/CSS Instagram carousel renderer;
- sample content for the first validated product;
- deterministic local validation and rendering commands.

Publishing remains approval-gated. Automated posting is not enabled until platform rules, available APIs, credentials, and account permissions are verified.

## Development

Requirements: Node.js 24 or newer.

```bash
npm install
npm run check
npm run render:sample
```

Generated pages are written to `output/sample/` as HTML. PNG export is the next renderer milestone; HTML output is intentionally usable and testable before adding a browser dependency.

For a dependency-free smoke test on Node.js 24:

```bash
npm run validate
```
