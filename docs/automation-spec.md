# Automation Spec v0.1

## Intended flow

```text
Notion record
  -> normalize and validate
  -> generate channel drafts
  -> owner approval
  -> render HTML/CSS
  -> export assets
  -> owner approval
  -> publish through an allowed interface
  -> record result
```

## Approval gates

Human approval is required for:

- adopting or rejecting a product;
- publishing copy that represents personal experience;
- approving first use of a new visual template;
- enabling any external publishing credential;
- changing brand voice or scoring rules.

## Automated steps

- normalization and validation;
- derivative draft generation;
- deterministic HTML rendering;
- filenames and manifest generation;
- writing approved updates back to Notion;
- analytics import where an official source is available.

## Platform gates requiring verification

- Rakuten ROOM posting rules and supported integrations;
- Instagram/Threads API eligibility and publishing permissions;
- Notion integration access to the LIFT OS pages;
- image reuse rights;
- analytics fields available from each platform.

No undocumented browser automation is part of v0.1.

## Idempotency

Generated work is keyed by:

```text
product id + content revision + template version + channel
```

Running the same approved input twice must not create duplicate publication records.

## Secrets

Credentials belong in environment variables or a managed secret store. They must never be committed to Git.

