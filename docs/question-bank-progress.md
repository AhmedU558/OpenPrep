# Question bank progress — 2026-10-29

## 1,000-question expansion: completed local milestone

The existing PostgreSQL database grew from **232 to 1,028 stored questions**. **1,017 are available in the question browser and practice engine**; 11 stored expansion versions are in REVIEW. The original 232 questions/options and 15 tracked account/study tables have unchanged SHA-256 preservation digests.

| Expansion outcome | Actual count |
|---|---:|
| Authored specifications | 800 |
| New records imported and matched on read-back | 796 |
| New records available for practice | 785 |
| Quarantined/flagged specifications | 15 |
| Of those: never inserted | 4 |
| Of those: stored immutably in REVIEW | 11 |
| Unresolved structural rejections at final gate | 0 |
| Persisted-content mismatches | 0 |

The available increment of 785 exceeds the required 768. Quarantined items do not count toward that usable increment. The 15 holds comprise 7 repetitive objectives, 1 ambiguous infusion starting condition, 5 disputed cognitive ratings, and 2 related hemorrhage-priority questions held pending an independent decision about sufficient distinctness. Four repetitive drafts were withheld before insertion; later findings on stored new versions changed availability status only. Nothing was deleted or overwritten. One short option rationale was corrected during preflight before its import; it is not an unresolved rejection.

| Batch | Generated | New records stored | Available at final check | Quarantined |
|---|---:|---:|---:|---:|
| 09: foundational science | 100 | 100 | 99 | 1 |
| 10: immunology/genetics/microbiology | 100 | 98 | 98 | 2 |
| 11: antimicrobial mechanisms/virology/parasites | 100 | 98 | 98 | 2 |
| 12: neurology/psychiatry/geriatrics/medicine | 100 | 100 | 98 | 2 |
| 13: clinical diagnosis/labs/management | 100 | 100 | 100 | 0 |
| 14: pediatrics/obstetrics/surgery | 100 | 100 | 99 | 1 |
| 15: specialties/behavioral medicine | 100 | 100 | 99 | 1 |
| 16: biostatistics/pharmacology | 100 | 100 | 94 | 6 |

Drafting was split by domain; every database import and subsequent read-back ran sequentially through the existing create-only admin service. Batch numbers identify stable source groups rather than commit order. All eight final retries created 0 records and reported 0 content mismatches. Reports retain the first import counts, latest source-object hash, coverage and quality dispositions. The four missing codes in the final comparison are intentionally uninserted quarantine drafts, not failed persistence assertions.

### Coverage and difficulty

The authored expansion contains 400 Step 1 and 400 Step 2 CK specifications. Actual stored bank totals are 547 Step 1, 471 Step 2 CK and 10 preserved Step 3 questions. Coverage across all 17 existing subjects, systems, topic titles, difficulty values and objective texts is recorded in `content/bank/expansion/reports/audit-after.json`; the initial audit is preserved separately. No new subject or exam category was required.

The [cognitive-demand rubric](question-difficulty-rubric.md) was defined before authoring. Every new specification includes its tag and concrete rationale, validated against its numeric level. Available expansion items comprise 50 level 1, 279 level 2, 337 level 3 and 119 level 4 questions. Both proposed level 5 items were held after AI critique found the cognitive demand overstated. These are provisional author ratings, not measured difficulty or psychometric calibration. The original 232 ratings were preserved.

### Evidence and actual checks

- `content/bank/expansion/reports/final-verification.json`: actual 800 authored/796 stored/785 available counts, full-field equality, source hashes, quality notes for every specification and 8 passing live read-only practice/search eligibility probes across exam/difficulty combinations.
- `content/bank/expansion/reports/preservation.json`: all 232 original questions/options and 15 user/study tables match the pre-expansion baseline. Existing users, sessions, attempts, responses, bookmarks and other tracked learning records are unchanged.
- `docs/question-bank-content-quality.md`: explicit unsupported-claim/reference limitations, ambiguity/rating/repetition queue, and qualified-review priorities. 396 items use broad book-level references without completed exact chapter/claim mapping. More specific resources also need full key/distractor review and current US applicability checks.
- Vitest **103/103 passed**; Playwright **23/23 passed** on the separate test database, including difficulty/topic-filtered expansion practice, scoring, rationales, notes and marks. TypeScript, ESLint, legacy regression and webpack production build passed. Mobile coverage is browser emulation, not physical-device testing.

The test setup initially required a Node JSON import-attribute fix. A pre-existing analytics helper also incorrectly selected only one correct option for select-all items; it now supplies the complete key. The production build used the previously working `npx next build --webpack` path. One standalone typecheck raced with generated-file replacement during a concurrent build; the final check ran after the completed build. No paid model API, new dependency, migration, live reset, account creation, service restart or public deployment was needed.

All new content remains **AI-authored and medically unreviewed**. Independent AI critique and arithmetic recomputation are documented separately from medical approval. No expert review, verified medical accuracy, clinical readiness, calibrated exam scores or exhaustive semantic-deduplication guarantee is claimed. The 32 legacy demos still lack topic/reference metadata; they were preserved rather than rewritten.

## Original 200-question milestone history

These remaining sections preserve the original 200-question run. Their counts and earlier test results are historical; the current expansion status is above.

### Original database result

The actual existing development PostgreSQL database contains **232 questions**, up from **32**. **200** new original questions were imported in eight transactions of 25, then made available for local practice through the existing admin status service. **0 rejected**, **0 quarantined** in the completed content batches. All 200 are AI-authored and medically unreviewed; none is represented as expert reviewed.

`content/bank/reports/database-verification.json` records a full field-by-field comparison of all 200 persisted content records and 800 options with the authored specifications. There were no mismatches or lexical/structural validation errors. Database count and read-back, rather than generated JSON count, establish persistence.

| Batch | Coverage | Before | New | After |
|---|---|---:|---:|---:|
| 01 | Anatomy 15, Physiology 10 | 32 | 25 | 57 |
| 02 | Physiology 10, Biochemistry 15 | 57 | 25 | 82 |
| 03 | Pathology 25 | 82 | 25 | 107 |
| 04 | Pharmacology 20, Microbiology 5 | 107 | 25 | 132 |
| 05 | Microbiology 10, Immunology 10, Genetics 5 | 132 | 25 | 157 |
| 06 | Genetics 5, Ethics 10, Biostatistics 10 | 157 | 25 | 182 |
| 07 | Medicine 25 | 182 | 25 | 207 |
| 08 | Medicine 5, Surgery 10, Pediatrics 5, Obstetrics 5 | 207 | 25 | 232 |

All eight batches were subsequently retried against the same live database. Each retry created **0**, updated **0**, skipped **25**, and read back **25** available records. Total remained **232**. `reports/batch-NN.json` retains `firstImport` in addition to the latest retry result and source hash. Coverage entries record the topic and objective for each stable code.

## Preservation

Before import, `scripts/bank-baseline.ts` saved counts and SHA-256 digests without copying personal row contents into reports. A post-import/retry comparison found **no changes** to the 32 original question records and their options, or to 15 tracked user/study tables. The baseline included 3 users, 2 account records, 3 authentication sessions, 2 practice sessions, 13 session items, 4 responses, and 1 bookmark; other tracked learning tables were empty. See `reports/preservation.json` and `baseline.json`.

Taxonomy and audit records were intentionally added. One new subject, `Physiology`, was needed; existing exam tracks and all 12 systems were reused. Subject-scoped topics were created by the existing importer. No database reset, migration, reseed, account creation, role change, or service restart was performed on the development database/app.

The workspace has no `.git` repository, so there is no Git diff/commit/PR. Changes are local files. No public publication or deployment occurred.

## Integration changes

- Reused the existing admin importer with an opt-in create-only mode. Exact retries preserve option IDs; a conflicting existing code fails atomically. Existing general admin upsert semantics remain documented separately.
- Added an offline authored-specification materializer, stricter structural/answer/metadata validation, approved taxonomy, normalized exact and lexical near-duplicate screening, reports, and resumable CLI imports.
- Added topic IDs to the common filters, topic facets to the question browser, and a topic select to Create Test. Existing subject/system/pool filters still apply.
- Added AI/unreviewed badges before answering in the browser and exam screen, in addition to existing explanation provenance. The admin editor reminds reviewers that PUBLISHED is availability, not medical approval.
- Expanded the explanation selection area so distractor rationales can be clipped to the notebook or used for selection-based flashcards.
- Added tests for all 200 authored records, subject totals, balanced answer positions, invalid keys/metadata, duplicates, import rollback/idempotency, original record preservation, role boundaries, topic/search/practice selection, both scoring modes, rationale/reference rendering, notes/bookmarks, history, analytics and ownership.

## Verification results

| Check | Actual result |
|---|---|
| Live content count and full-field read-back | 232 total; 200/200 new records; 800 options; 0 mismatches |
| Live create-only retry | All 8 batches: 0 created, 25 skipped each |
| Original data preservation | No digest differences in original questions/options or 15 tracked tables |
| Vitest | 96/96 passed, including 21 added tests |
| TypeScript | Passed |
| ESLint | Passed |
| Default Turbopack build | Failed twice: CSS worker exited before local connection; once sandboxed and once elevated |
| Built-in webpack production build | Passed: `npx next build --webpack` |
| Browser regression | **22/22 passed** in the final full run: desktop Edge and Pixel 7 emulation |
| Legacy regression | `node legacy/test.js`: passed (`ok`) |
| Existing app at port 3100 | Development server with hot reload; `/login` returned HTTP 200 |

Vitest/Playwright ran on the separate configured `openprep_test` database. Browser tests use the actual application on port 3200 and import the first authored batch through the real service. They do not fabricate attempts in the development database. Checks on the live development database are read-only after the authorized imports. No physical mobile-device validation was performed; mobile browser coverage uses Pixel 7 emulation in installed Edge.

Browser run 1: 21 passed, 1 failed because the new test searched for exact `op26-0001` while the exam label is `ID op26-0001`. Run 2: 21 passed, 1 failed because a pre-existing test expected one correct marker for a randomly selected select-all question that correctly had three. Both assertions were corrected; **run 3 passed all 22 tests**. The new test also explicitly clips a distractor rationale to the notebook. TypeScript and ESLint were rerun after the final changes and passed.

## Content limitations and next work

All 200 are SINGLE questions with four choices, an objective/takeaway, a main mechanistic explanation, and a rationale for every option. The distribution matches the request exactly using the existing subject names. Difficulty is provisionally 3 throughout. This is a first educational bank, not evidence of professional-platform equivalence.

**Qualified medical review is outstanding.** Book-level further-reading references are present, but complete claim-by-claim verification against current medical sources and precise chapter mapping have not been completed. Some referenced editions are old. Lexical duplicate checks do not replace semantic review. No images, additional thousands of items, psychometric calibration, or score predictions were added. The [content policy](question-content-policy.md) specifies review/provenance rules, [import guide](question-import-format.md) explains safe growth, and [roadmap](question-bank-roadmap.md) covers 1,000, 5,000 and larger banks.
