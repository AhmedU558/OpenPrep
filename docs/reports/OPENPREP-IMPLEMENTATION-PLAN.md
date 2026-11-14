# OpenPrep Expansion & Implementation Plan

**Date:** November 2026  
**Document Status:** Pending User Review & Approval (Phase 2 Deliverable)  
**Safety Protocol:** Read-Only Audit & Planning Phase. No production data mutations, schema alterations, or deployments will take place without explicit user approval.

---

## 1. Project Objective & Strategic Vision

The objective of this initiative is to expand OpenPrep from a USMLE-centric question bank (1,028 questions across Step 1, Step 2 CK, Step 3) into an internationally comprehensive, open-source medical exam preparation platform comparable in breadth to StepwiseMD, while adhering to the highest standards of original content authoring, academic referencing, and medical provenance.

---

## 2. Expanded Medical Taxonomy Blueprint

### 2.1 Target Examination Spectrum
We define 14 structured exam categories organized by jurisdiction and curriculum:

| Exam Slug | Display Name | Target System / Specialty | Standard Block & Timing | Scoring Style |
|---|---|---|---|---|
| `step-1` | USMLE Step 1 | Pre-clinical organ systems & basic sciences | 40 Qs / 60 min (90s/Q) | Standard (No negative mark) |
| `step-2-ck` | USMLE Step 2 CK | Clinical sciences & management | 40 Qs / 60 min (90s/Q) | Standard (No negative mark) |
| `step-3` | USMLE Step 3 | Advanced clinical management & ambulatory | 30 Qs / 45 min (90s/Q) | Standard (No negative mark) |
| `plab-ukmla` | PLAB / UKMLA | UK GMC Clinical Practice / Acute Care | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `amc-mcq` | AMC MCQ | Australian Health Care & Clinical Reasoning | 50 Qs / 75 min (90s/Q) | Standard (No negative mark) |
| `mccqe-1` | MCCQE Part I | Canadian Medical Licensing Objectives | 50 Qs / 75 min (90s/Q) | Standard (No negative mark) |
| `fcps-1` | FCPS Part 1 | CPSP Basic Medical & Clinical Sciences | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `nle` | NLE | National Licensing Examination core competencies | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `neet-pg` | NEET PG | Comprehensive Clinical & Pre-clinical (India) | 50 Qs / 50 min (60s/Q) | Negative Marking (−0.25) |
| `mrcp-1` | MRCP (UK) | Internal Medicine specialties & pathophysiology | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `mrcem-pri` | MRCEM Primary | Emergency medicine, resuscitation, acute surgery | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `smle` | SMLE | Saudi Medical Licensing Examination | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `haad-dha` | HAAD / DHA | UAE Health Authority primary care & specialties | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |
| `uhs-mbbs` | UHS MBBS | University of Health Sciences professional exams | 50 Qs / 60 min (72s/Q) | Standard (No negative mark) |

### 2.2 Taxonomy File Update
Update `content/bank/taxonomy.json` with the full list of allowed exams, preserving all existing subjects and systems:
```json
{
  "exams": [
    "Step 1",
    "Step 2 CK",
    "Step 3",
    "PLAB / UKMLA",
    "AMC",
    "MCCQE",
    "FCPS",
    "NLE",
    "NEET PG",
    "MRCP",
    "MRCEM",
    "SMLE",
    "HAAD / DHA",
    "UHS MBBS"
  ],
  "subjects": [
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Immunology", "Genetics", "Ethics", "Biostatistics",
    "Medicine", "Surgery", "Pediatrics", "Obstetrics", "Neurology",
    "Psychiatry", "Geriatrics", "Emergency Medicine"
  ],
  "systems": [
    "Cardiovascular", "Dermatology", "Renal", "Pregnancy", "Respiratory",
    "General Principles", "Gastrointestinal", "Hematology", "Musculoskeletal",
    "Endocrine", "Nervous System", "Behavioral Health"
  ]
}
```

---

## 3. 15-Point Question Specification Standard

Every authored question must satisfy the following 15 criteria without exception:

1. **Original Clinical Vignette:** Realistic patient narrative with age, gender, setting (ED, clinic, ICU), presenting complaints, vitals, focused physical examination, and diagnostic results.
2. **Clear Question Stem:** Focused, unambiguous interrogative sentence (e.g., *"Which of the following is the most appropriate next step in management?"*).
3. **Five Plausible Options (A, B, C, D, E):** Exactly 5 mutually distinct clinical alternatives representing common differential diagnoses or competing interventions.
4. **Single Correct Answer:** Clinically unimpeachable, evidence-supported best choice.
5. **Comprehensive Correct Explanation:** Detailed rationale explaining the physiological, anatomical, microbiological, or clinical mechanism that makes the correct answer optimal.
6. **Granular Distractor Explanations:** Dedicated paragraph for *every single incorrect option* explaining why it is incorrect, contraindicated, or less suitable in this patient presentation.
7. **Subject Classification:** E.g., `Medicine`, `Surgery`, `Pediatrics`, `Obstetrics`, `Pharmacology`.
8. **Organ System Classification:** E.g., `Cardiovascular`, `Respiratory`, `Renal`, `Gastrointestinal`.
9. **Topic & Subtopic:** Granular indexing for curriculum alignment (e.g., `Aortic Stenosis`, `Acute Pancreatitis`).
10. **Calibrated Difficulty:** Numerical score from 1 (fundamental recall) to 5 (complex multi-step clinical reasoning).
11. **Learning Objective / Key Takeaway:** 1–2 sentence high-yield core learning pearl.
12. **Exam Target:** Matched to the specific exam framework and clinical guidelines (e.g., NICE for UKMLA/MRCP, Australian guidelines for AMC, US/AHA/ACC for USMLE).
13. **Verifiable References:** Real, accessible, authoritative citations (NCBI Bookshelf, PubMed, CDC, WHO, Merck Manuals, UpToDate guidelines, NICE guidelines). Zero fabricated citations.
14. **Authorship & Content Provenance:** Explicit labeling: `source: 'OpenPrep original; AI-authored; medically unreviewed'`, `license: 'CC-BY-SA-4.0'`.
15. **Medical Review State:** Logged in the audit ledger as `UNREVIEWED / DRAFT` until qualified clinician sign-off is completed.

---

## 4. Question Production & Batch Ingestion Protocol

### 4.1 Batch Authoring Strategy
Questions will be authored in controlled batches (25 to 50 questions per batch) covering targeted clinical scenarios across all priority exams:
- **Batch 17:** USMLE Step 1 & Step 2 CK high-yield clinical reasoning expansion.
- **Batch 18:** PLAB / UKMLA & MRCP internal medicine and emergency practice.
- **Batch 19:** AMC & MCCQE primary care, ethics, and diagnostic dilemmas.
- **Batch 20:** FCPS, NLE & UHS MBBS basic and clinical medicine modules.
- **Batch 21:** NEET PG clinical scenarios with negative marking calibration.
- **Batch 22:** SMLE & HAAD / DHA regional and emergency management cases.

### 4.2 Quality Assurance & Importer Pipeline
Every question batch will execute through a 5-stage verification gate before database insertion:
1. **Schema Check:** Full validation against `bankQuestionSchema` (Zod).
2. **Lexical Duplication Screen:** Shingles 3-gram similarity test against all existing 1,028 questions (threshold >= 0.65 triggers quarantine).
3. **Reference URL Health Check:** Verifies every citation is HTTPS, well-formed, and non-empty.
4. **Option Count & Rationale Gate:** Rejects any item with < 5 options or missing distractor rationales.
5. **Transactional Database Write:** Executed via `db.$transaction()` ensuring atomic commit or complete rollback with zero orphaned records.

---

## 5. OpenPrep Platform UI & Feature Enhancements

### 5.1 Exam Grouping & Selector in Test Creation (`CreateTestForm`)
- Enhance `CreateTestForm` to organize exams into categorized tabs or collapsible groups:
  - **USMLE Pathways:** Step 1, Step 2 CK, Step 3
  - **UK & Commonwealth:** PLAB / UKMLA, MRCP, MRCEM
  - **Australasia & Canada:** AMC MCQ, MCCQE Part I
  - **South Asia:** FCPS Part 1, NLE, NEET PG, UHS MBBS
  - **Middle East:** SMLE, HAAD / DHA
- Add auto-configured preset for **NEET PG Mode** that sets negative marking to −0.25 automatically.

### 5.2 Question Browser & Library Search (`QuestionBrowser`)
- Allow learners to browse and search questions by Exam category, Subject, System, and Difficulty.
- Add quick-filter chips for newly introduced exam categories.

### 5.3 Exam-Specific Performance Analytics (`PerformancePage`)
- Introduce an Exam filter dropdown on the performance dashboard allowing learners to view accuracy and readiness broken down specifically for their chosen exam target.

---

## 6. Safety, Preservation, and Approval Gates

1. **Zero Data Deletion Policy:** No `DELETE` or `DROP` statements will be executed on any existing user tables, responses, bookmarks, notes, or existing question rows.
2. **Baseline Snapshot:** Verify database baseline before modifying any records.
3. **Pre-Deployment Gate:** Show user the completed question sets, verification logs, and code diffs before making any production changes.
