# Initial Step 3 audit

Audit date: 2026-10-30. Scope: repository plus read-only loopback `localhost:5432/openprep`; **no production database, hosted app, or deployment was accessed**. Machine evidence: [initial-inventory.json](initial-inventory.json).

## Verified inventory

| Measure | Actual |
|---|---:|
| Stored questions | 1,028 |
| Historical PUBLISHED rows | 1,017 |
| Stored REVIEW rows | 11 |
| Existing Step 3 | 10 |
| Existing Step 1 / Step 2 CK | 547 / 471 |
| Authored prior candidates never imported | 4, according to repository reports |

The study database has three migrations and lacks the rights columns required by current source. Therefore 1,017 is a **raw historical status count**, not a verified current-source delivery count. Current gated availability cannot be established without the unapplied rights migration. This task will not migrate this existing database. Tests and candidate imports use a new disposable loopback database with all current migrations.

Existing Step 3 questions cover specificity, average-risk colorectal screening, informed refusal, NNT, diabetic lipid therapy, minor STI confidentiality, lead-time bias, emergency hyperkalemia, AAA screening and medication-associated delirium. None has a topic. Their claims and legal qualifications need review; they are preserved, not corrected or copied into new questions. Step 1/2 overlap is screened across **all 1,028** payloads, not only the ten Step 3 rows.

## Existing architecture and compatibility

Next.js server actions call shared Prisma services. Exam, subject, system and subject-scoped topic are already reusable across exams. QuestionContent supports SINGLE with four/five options, individual rationales, Markdown explanation, objective, takeaways, references and provenance. A sidecar specification will retain subtopic, physician task, setting, evidence limitations and blueprint mapping; no schema change is necessary.

The admin importer validates a whole batch, uses a transaction and supports `createOnly=true`: identical retries skip, conflicting codes abort. New records default to DRAFT and UNVERIFIED rights. `setStatus` and content-rights services independently gate publication/delivery/export. The general admin editor is not immutable version storage; saved attempts/study references require a new code for changes. ExportQuestions intentionally omits export-unapproved content, so it cannot audit this new withheld bank. Administrative stored-row read-back will compare canonical payloads without granting export permission.

Tutor/timed session transitions, scoring, random selection, navigation, bookmarks, notes, incorrect pools, review, analytics, flashcards and study planning already share this model. Rights predicates constrain question selection and saved-content delivery. No new UI or CCS simulator is needed. Existing clinical review is procedural rather than a distinct clinician-approval column; no such approval will be invented.

## Gaps and controls

Existing subject counts are uneven (for example Medicine161, Ethics17, Biostatistics63), and 396 items use General Principles. Existing difficulty counts are 51/281/572/122/2 for levels1–5. These counts include other exam tracks and are not Step3 coverage. Ten isolated Step3 demos do not cover independent longitudinal management, broad emergencies, pediatrics, obstetrics, surgery, evidence appraisal or patient safety.

The weighted target follows the newly researched official specifications in [the blueprint](USMLE_STEP_3_BLUEPRINT.md). Primary-system categories sum to1,000; pediatrics, surgery, emergency/critical care, ambulatory care, prevention and nutrition are cross-cutting tags, avoiding double counting.

Duplicate screening reuses normalized exact/trigram and synonym-aware TF-IDF candidate retrieval, adds repeated objectives/concepts and vignette checks, and records unresolved semantic findings for review. Similarity is a screening aid, not proof of distinctness or medical validity. Numerical claims, ambiguous keys, broad/unsupported references and dated guidelines require qualified review.

Before work, all existing study-table hashes and repository dirty-file hashes were captured privately under ignored `.release/step3/`. No private user rows are copied into deliverables or the disposable database. Existing Phase4 edits remain outside this task. No production/staging access, deployment, publication, Git mutation, license change or repository-setting change is authorized.
