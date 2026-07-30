# Data Spec v0.1

## Record model

Each product record separates origin, factual confidence, experience, and generated copy.

Required fields:

| Field | Meaning |
| --- | --- |
| `id` | Stable internal identifier |
| `name` | Exact product name |
| `category` | Controlled category |
| `status` | candidate, testing, adopted, classic, held, rejected |
| `experienceLevel` | owner, family, researched |
| `problem` | Recurring frustration solved |
| `strengths` | Owner-verified benefits |
| `drawbacks` | Owner-verified drawbacks |
| `insight` | One reusable editorial observation |
| `score` | LIFT Score breakdown |
| `sourceUrls` | Product and supporting sources |
| `content` | Approved channel-ready content |

## LIFT Score

- ease: 0–30
- value: 0–20
- quality: 0–20
- usability: 0–15
- shareability: 0–15

The total is calculated, never typed independently. A score is an internal judgment, not an objective product rating.

## Dates

Store `startedUsingOn` when known. Do not manually store “usage period”; derive it at read time.

## Provenance

Every material claim should carry one of these origins:

- `owner_experience`
- `family_experience`
- `official_source`
- `merchant_source`
- `third_party_source`
- `estimate`

Research-dependent facts and estimates require a source URL or explicit assumptions.

## Notion mapping

Notion field names may remain Japanese for usability, while the normalized TypeScript model uses stable English keys. The connector mapping will be isolated from the domain model so that Notion columns can change without rewriting the renderer.

