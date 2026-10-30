# Question bank authoring and import

## Expansion batches (100-item workflow)

The next collection lives in `content/bank/expansion/batch-09.ts` through `batch-16.ts`, using stable `op26x-XXXX` codes. Each exports up to 100 `ExpansionSpec` records. Every specification adds a tested-concept identifier, cognitive-demand tag, concrete difficulty rationale, evidence support/limitations, semantic comparison note, and declared concerns around the existing question content. Read [the difficulty rubric](question-difficulty-rubric.md) before assigning levels. The original 25-item files and their code numbering remain unchanged.

```powershell
npm run bank:expand -- 10           # validate/report; no database mutation
npm run bank:expand -- 10 --import  # accepted subset only, then local practice availability
```

Run imports sequentially. The existing create-only admin service remains the only content-writing path. A100-item authored batch may yield a smaller accepted transaction: malformed rows are rejected; uncertainty/repetition/difficulty concerns are quarantined. Identical records are skipped without replacing options. Already-stored new collection items later flagged by review are moved to REVIEW, preserving their content and IDs; previously held REVIEW items are not silently republished. The original 232-question collection is outside this status-change namespace.

**Exit code1 can mean some rows were withheld while the accepted subset was successfully committed.** Read `expansion/reports/batch-NN.json` before retrying. Generated, eligible, rejected, quarantined, newly imported, skipped, accepted-record read-back, all stored records, stored REVIEW records, and practice-available counts are separate. `firstImport` retains the original commit result. Full content is compared after every import; file/object hashes identify the specification version and do not certify medical accuracy.

The lexical gate uses normalized exact/trigram matches. A local synonym-aware TF-IDF screen retrieves meaning-related candidates using objectives, keys and stems; candidate scores at or above0.42 require a documented comparison in `semantic-decisions.json`. Exact objective duplication and explicit concerns remain blocking. These are AI-assisted editorial screens, not medical validation or an exhaustive semantic guarantee. Document why apparently related questions test different decisions; do not lower the threshold to meet a count target.

```powershell
npx tsx scripts/bank-baseline.ts --verify --baseline=content/bank/expansion/baseline.json --exclude-prefix=op26x-
npx tsx scripts/audit-bank.ts --after
npx tsx scripts/report-expansion.ts
```

The expansion baseline covers all 232 existing questions/options and the 15 tracked user/study tables. The original milestone's baseline remains intact. The audit reports actual database counts by exam, subject, system, topic, difficulty and objective. The final report checks source-to-database equality and emits per-item quality evidence; it exits nonzero if the total is below 1,000, fewer than 768 new items are practice available, or persisted content differs. It can run during authoring as an explicitly incomplete status report.

The remaining sections describe the original 25-item workflow, which still works.

The existing JSON contract remains documented in `docs/content-format.md`. The admin editor and importer use `src/lib/validation/content.ts`. No database reset, migration, or reseeding is required for this collection.

## Offline authoring

1. Add `content/bank/batch-NN.ts`, following an existing batch. Define **25 distinct authored specifications** with subject, organ system, topic, stem, options/rationales, explanation, objective and factual references. The first option in each specification is the intended correct answer. Check that answer medically before materializing.
2. Call `authorBatch(N, specs)`. It emits `op26-XXXX` codes and rotates options deterministically, carrying the key with the option. For a new collection use a new code namespace rather than renumbering existing questions.
3. Review `content/bank/taxonomy.json`. This is the approved-name allowlist; the live exam must already exist. An admin import may create approved missing subjects/systems and subject-scoped topics. Physiology was the only new subject needed for this milestone; all 12 organ systems and exam tracks were reused.

```powershell
npm run bank:batch -- 1
```

This validates against the live bank, writes standard admin-compatible JSON to `content/bank/generated/batch-01.json`, and writes an error/coverage report. It does **not** change the database. Local PostgreSQL and the normal `.env` configuration are required; no AI provider is required. Do not run this command while another bank import is active: cross-code lexical preflight is a single-runner check, not a database uniqueness constraint.

## Import and resume

```powershell
npm run bank:batch -- 1 --import
# Optional initial local-practice availability, as used for this milestone:
npm run bank:batch -- 1 --import --local-practice
```

The script selects an existing ADMIN actor from the local database. It does not create users, elevate roles, read a password, or call a login endpoint. It reuses `importQuestions(actor, rows, false, true)` in the existing admin service, with its server role check, taxonomy handling, transaction and audit logging. The fourth argument selects **create-only** behavior:

- New codes create DRAFT questions with options in a single batch transaction.
- Identical existing content is skipped, preserving question and option IDs, status, timestamps and attempts.
- A matching code with different content fails and rolls back the entire batch. It never becomes an implicit update.
- The existing admin UI import retains its documented upsert behavior. **Use the batch CLI for safe retries**, not the general importer, if you want create-only semantics.

`--local-practice` transitions new DRAFT items to PUBLISHED through `setStatus`, while retaining all unreviewed labels. It checks the app URL is local; it is not a deployment command or a medical review. It does not reactivate archived or review-blocked items on retries. Import commit and availability transitions are separate, so interruption between them is safe to resume; the database is authoritative.

Every run reads back the expected stable codes and verifies option counts and answer-key integrity. Reports contain timestamps, source digest, coverage/objectives, before/after counts, imported/skipped counts, persisted and available counts, errors, and the preserved first-import result. `batch-NN-error.json` records runtime failures, including failures after import; inspect the database before retry. Structural or duplicate errors quarantine the entire batch without importing it. This quarantine is a report/file state, not a new question status. Fix the specifications and repeat the same command.

## JSON fields

Use the existing fields `code`, `exam`, `subject`, `system`, `topic`, `type`, `difficulty`, `stem`, `options[{text,correct,explanation}]`, `explanation`, `objective`, `keyPoints`, `references[{label,url}]`, `source`, `license`, `attribution`. Availability is managed separately by the existing status workflow. Provenance is retained in source/attribution and the checked-in author specifications; there is no hidden expert-review flag.

The stricter bank validator requires SINGLE, 4–5 nonidentical options and exactly one key; full rationale and metadata; approved names; and a maximum of 25 items per batch. The generic legacy importer remains compatible with existing two-option/multiple-answer records.

## Verification

```powershell
npm run bank:preserve
npm run bank:verify
npm test
npm run typecheck
npm run lint
npm run build
# If the local Turbopack CSS worker fails, Next also supports:
npx next build --webpack
npm run test:e2e
```

`bank:preserve` compares the original question/option and user/study table hashes with `content/bank/baseline.json`. It is a milestone integrity check, not a backup or a permanent assertion after normal learner activity. Vitest and Playwright use the separate `_test` database; do not run them concurrently because both reset that database. Never run `db:reset` or `db:seed` against the live bank to populate these batches: the old seed updates existing demo options.

## Phase 2 rights enforcement

Imports remain unverified regardless of CC metadata or demo flags. Existing local-practice flags cannot bypass setStatus rights checks: importing a batch does not authorize publication. Review actual evidence in admin, record the permitted delivery/export scopes, then use the existing publication workflow. Create-only retries preserve approved unchanged versions; changed content needs new review, and sources with attempts or study references require a new code. Bank verification/report commands that use exportQuestions see only export-authorized content; withheld output is not proof that stored questions were deleted. Generated authoring JSON remains a local candidate: use the source-content preflight before any public distribution. See [CONTENT_RIGHTS_ENFORCEMENT](CONTENT_RIGHTS_ENFORCEMENT.md).
