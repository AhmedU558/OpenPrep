# Step3 import report

Snapshot: 2026-10-30T14:56:23.034Z. These results concern a **new disposable loopback database only**; the existing study database was audited read-only, and production was not accessed.

| Batch | Authored | Structural pass | Blocked | Imported and read back |
|---|---:|---:|---:|---:|
| batch-01 | 70 | 70 | 0 | 0 |
| batch-04 | 60 | 60 | 0 | 0 |
| batch-07 | 60 | 60 | 0 | 0 |

Total imported at this snapshot: **0**. Human-approved0; practice-ready0. Pending clinical review: 190. File-only validation never counts as database integration. See per-batch JSON for source digests, findings, first import and latest create/skip counts.

## Commands and safety

Run source validation with `npx tsx scripts/step3-bank.ts`; refresh reports with `npx tsx scripts/step3-report.ts`. Database import requires `--import`, a separately verified disposable loopback `TEST_DATABASE_URL` ending `_test`, and the exact run target recorded privately in `.release/step3/database-target.json`. The target must differ from the existing study database. No hosted URL is accepted. The run-specific wrapper contains credentials privately; do not publish it.

The existing `importQuestions(...,false,true)` performs create-only transactional insertion. Exact retries preserve stored options; a conflicting stable ID aborts the batch. Admin read-back compares canonical content without using rights-filtered exports or granting export rights. New DRAFT records transition only to REVIEW; publication/rights gates remain intact.

Batch withdrawal: `--withdraw-batch batch-NN` archives only this run's matching unapproved, unreferenced candidate records after ownership checks. It never deletes questions, options or unrelated rows. Retrying an archived batch requires an explicit review decision rather than silent reactivation.

No schema changes were needed. Four existing migrations were applied only to the new empty disposable database. No original account, credential, session, attempt, bookmark, note or analytics row was copied into it. The existing study database and preexisting Phase4 changes are protected by before/after hash checks.
