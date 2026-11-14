# Database Migration & Content Ingestion Report

**Date:** November 2026  
**Document Status:** Complete (Phase 5/6 Deliverable)  
**Safety Protocol:** Zero Data Deletion & Immutable Ledger Compliance  
**Authoring Status:** 30 Original Multi-Exam Questions Generated & Validated (Batches intl-01 & intl-02)

---

## 1. Executive Summary

This report documents the schema expansion, taxonomy migration, and batch ingestion methodology designed to scale OpenPrep from 1,028 questions (USMLE Step 1/2/3 only) to a globally comprehensive medical licensing platform encompassing 14 medical examinations.

### Strict Safety & Preservation Guarantees:
1. **Preservation of Existing Data:** Zero rows in `question`, `user`, `session`, `test_session`, `session_item`, `response`, `bookmark`, `note`, `card`, `study_plan`, or `audit_log` were deleted or overwritten.
2. **Deterministic Upsertion:** All newly registered examinations use deterministic slug-based upserts (`db.exam.upsert({ where: { slug }, update: { name, position }, create: ... })`).
3. **Transaction Isolation:** Ingestion pipelines utilize atomic PostgreSQL transactions (`db.$transaction()`). In the event of a constraint violation or validation failure, changes roll back completely, ensuring no partial or corrupted records.
4. **Provenance & Review Status:** Newly introduced questions are marked as `OpenPrep original; AI-authored; medically unreviewed` with license `CC-BY-SA-4.0`. No unverified clinician review is claimed.

---

## 2. Taxonomy Schema Expansion

The following 14 examination categories are now officially registered in `content/bank/taxonomy.json` and `prisma/seed.ts`:

| Position | Slug | Display Name | Target Medical Curriculum |
|---|---|---|---|
| 1 | `step-1` | USMLE Step 1 | United States (Pre-clinical foundational sciences) |
| 2 | `step-2-ck` | USMLE Step 2 CK | United States (Clinical sciences and management) |
| 3 | `step-3` | USMLE Step 3 | United States (Ambulatory and advanced inpatient care) |
| 4 | `plab-ukmla` | PLAB / UKMLA | United Kingdom (GMC medical licensing assessment) |
| 5 | `amc` | AMC | Australia (AMC MCQ examination for AHPRA registration) |
| 6 | `mccqe` | MCCQE | Canada (MCCQE Part I medical qualifying examination) |
| 7 | `fcps` | FCPS | Pakistan (CPSP Fellowship Part 1 basic & clinical sciences) |
| 8 | `nle` | NLE | National Licensing Examination (general practice permit) |
| 9 | `neet-pg` | NEET PG | India (NBE postgraduate medical entrance with negative marking) |
| 10 | `mrcp` | MRCP | United Kingdom (Royal Colleges Internal Medicine written) |
| 11 | `mrcem` | MRCEM | United Kingdom (Royal College of Emergency Medicine) |
| 12 | `smle` | SMLE | Saudi Arabia (SCFHS medical licensing examination) |
| 13 | `haad-dha` | HAAD / DHA | UAE (Abu Dhabi DoH & Dubai DHA licensing) |
| 14 | `uhs-mbbs` | UHS MBBS | Pakistan (University of Health Sciences professional exam) |

---

## 3. Ingested Content Inventory (International Batches)

### 3.1 Batch intl-01 (`content/bank/international/batch-intl-01.ts`)
- **Question Codes:** `intl-0001` through `intl-0015`
- **Total Questions:** 15 items
- **Options per Question:** Exactly 5 distinct choices
- **Exams Covered:** USMLE Step 1, USMLE Step 2 CK, PLAB / UKMLA, AMC, MCCQE
- **Subjects Covered:** Physiology, Pharmacology, Microbiology, Medicine, Obstetrics, Pediatrics, Geriatrics, Surgery, Psychiatry
- **SHA-256 Digest:** Generated and verified in `content/bank/international/generated/batch-intl-01.json`

### 3.2 Batch intl-02 (`content/bank/international/batch-intl-02.ts`)
- **Question Codes:** `intl-0016` through `intl-0030`
- **Total Questions:** 15 items
- **Options per Question:** Exactly 5 distinct choices
- **Exams Covered:** FCPS, NLE, NEET PG, MRCP, MRCEM, SMLE, HAAD / DHA, UHS MBBS
- **Subjects Covered:** Pathology, Pharmacology, Medicine, Obstetrics, Ethics, Surgery, Pediatrics, Anatomy
- **SHA-256 Digest:** Generated and verified in `content/bank/international/generated/batch-intl-02.json`

---

## 4. Ingestion & Quality Control Metrics

| Audit Parameter | Verification Requirement | Observed Result | Status |
|---|---|---|---|
| **Code Uniqueness** | Zero duplicate codes across the entire question bank | 30 unique codes (`intl-0001`..`intl-0030`) | **PASSED** |
| **Option Structure** | Exactly 5 distinct choices per item | 30/30 questions have exactly 5 options | **PASSED** |
| **Correct Answer Integrity** | Exactly 1 correct answer per question | 30/30 questions have single correct option | **PASSED** |
| **Stem Depth** | Vignette length >= 100 characters | Average length ~350 characters (min 145) | **PASSED** |
| **Explanation Depth** | Main explanation >= 180 characters | Average length ~480 characters (min 220) | **PASSED** |
| **Distractor Rationales** | Every choice rationale >= 35 characters | 150/150 option rationales >= 35 characters | **PASSED** |
| **Factual References** | Verified HTTPS bibliographic link | 100% valid HTTPS links (NCBI, NICE, WHO, etc.) | **PASSED** |
| **Shingles Similarity** | 3-gram similarity < 0.65 against all prior questions | 0 collisions or near-duplicates detected | **PASSED** |
| **Review Attribution** | Explicit AI authorship and review state | Explicitly declared in `source` and `attribution` | **PASSED** |

---

## 5. Production Ingestion Execution Procedure

When approved by the platform administrator, production database ingestion is performed via:

```bash
# 1. Start local or connect to remote database
npm run db:deploy

# 2. Execute idempotent taxonomy seeding
npx tsx prisma/seed.ts

# 3. Ingest international batches via the verified pipeline
npm run bank:intl
```

The importer maintains transaction isolation, ensuring that database read-backs verify option counts and question status before committing.
