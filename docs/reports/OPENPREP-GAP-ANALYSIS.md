# OpenPrep Architecture Audit & Gap Analysis Report

**Date:** November 2026  
**Document Status:** Complete (Phase 1 Deliverable)  
**Target Repository:** `OpenPrep` (`https://github.com/AhmedU558/OpenPrep`)  
**Production URL:** `https://openprep-ahmedu558.vercel.app/`

---

## 1. Executive Summary

An in-depth audit of the OpenPrep repository was conducted across its schema, core data models, exam execution engine, question authoring/import pipeline, test suites, and client presentation components.

OpenPrep possesses an exceptionally solid engineering foundation:
- Next.js 16 (App Router), React 19, TypeScript 6, and Tailwind CSS 4.
- Prisma 7 with PostgreSQL (Prisma Client with `@prisma/adapter-pg`).
- Better-Auth for authentication, role-based access control (`LEARNER`, `EDITOR`, `ADMIN`), and anonymous/demo users.
- Robust, immutable audit and practice ledger with deterministic content hashing (`QuestionRevision`), three-pillar review gating (`EDITORIAL`, `CLINICAL`, `RIGHTS`), and monotonic event sequencing (`PracticeEvent`, `PracticeAttempt`).
- High-fidelity Prometric-style exam interface equipped with lab values, on-screen calculator, text highlighting, option strike-through, question bookmarking/flagging, and keyboard navigation.

However, when compared to the competitive scope of StepwiseMD, **OpenPrep exhibits substantial coverage gaps in international exam taxonomies and content volume**.

---

## 2. Component-by-Component Architectural Audit

### 2.1 Database Schema & Prisma Models (`prisma/schema.prisma`)
- **Taxonomy Models:**
  - `Exam` (id, slug, name, position)
  - `Subject` (id, name)
  - `System` (id, name)
  - `Topic` (id, name, subjectId)
  - *Observation:* The relational model is clean and normalized. However, the database seed and taxonomy configuration files currently only declare three exams: `"Step 1"`, `"Step 2 CK"`, and `"Step 3"`.
- **Content Models:**
  - `Question`: contains `code`, `type` (`SINGLE`, `MULTIPLE`), `status` (`DRAFT`, `REVIEW`, `PUBLISHED`, `ARCHIVED`), `difficulty` (1..5), foreign keys to Exam/Subject/System/Topic, `stemMd`, `explanationMd`, `objective`, `keyPoints`, `references`, `imageUrl`, `source`, `license`, `rightsStatus`, `rightsAllowDelivery`, and `publishedAt`.
  - `Option`: child relation to `Question` with `position`, `text`, `isCorrect`, and `explanationMd`.
- **Practice & Exam Models:**
  - `TestSession` & `SessionItem`: tracks position, time, selected options, struck options, highlights, locked status, and individual item results.
  - `PracticeExam`: coordinates multi-block sessions with a shared break budget.
  - `Response`: tracks latest per-user question outcome for pool calculations.
  - `Bookmark`, `Note`, `QuestionTag`, `NotebookPage`, `Collection`, `Card` (spaced repetition flashcards), `StudyPlan`, `PlanTask`.
- **Provenance & Review Models:**
  - `QuestionRevision`: deterministic SHA-256 snapshot hashing.
  - `QuestionReview`: tracks editorial, clinical, and rights review decisions (`APPROVED`, `REJECTED`, `REVOKED`).
  - `UserPracticeState`, `PracticeEvent`, `PracticeReset`, `PracticeAttempt`: monotonic event sequencing and safe multi-pass practice resets.

### 2.2 Question Counts & Current Availability
- **Total Questions in Database:** 1,028 questions.
- **Published / Available for Practice:** 1,017 questions.
- **Exam Distribution:**
  - USMLE Step 1: 547 questions (53.2%)
  - USMLE Step 2 CK: 471 questions (45.8%)
  - USMLE Step 3: 10 questions (1.0%)
  - Other International Licensing Exams: **0 questions (0.0%)**
- **Content Origin & Licensing:**
  - 100% original content authored under CC-BY-SA-4.0.
  - Explicitly labeled: `OpenPrep original; AI-authored; medically unreviewed`. No misleading claims of clinical validation.

### 2.3 Importer & Validation Pipeline
- `src/lib/validation/content.ts`: Zod schema validating question codes, stem length (10..20,000 chars), explanation length, option counts (2..10), references URL format, and single-choice correctness.
- `src/lib/question-bank.ts`: Higher editorial gate (`bankQuestionSchema`) requiring:
  - 4 or 5 options.
  - Vignette length >= 100 chars, explanation >= 180 chars.
  - Option rationale >= 35 chars for every single choice.
  - Distinct answer texts.
  - Linked references with valid URLs.
  - Shingles similarity duplicate screen (threshold 0.65).
  - Explicit AI authorship disclaimer.
- `src/lib/admin.ts`: Transactional question import with duplicate prevention and audit logging.

### 2.4 Exam Engine & Presentation
- **Tutor Mode:** Real-time answer check, option-level explanations, key takeaways, and references shown upon submitting each question.
- **Timed Mode:** Prometric-style simulation with 90s/question countdown, warning alerts, and automated block submission.
- **In-Exam Tooling:**
  - USMLE Laboratory Values reference modal (Serum, CSF, Blood, Urine, Hematologic).
  - Built-in 4-function calculator modal.
  - Highlighting within question stem via DOM `<mark>` tag serialization.
  - Strikethrough of ruled-out distractors.
  - Question Navigator showing Answered, Incomplete, and Marked items.
  - Keyboard shortcuts (A–E for choices, Left/Right for navigation, M for mark/flag, Enter for tutor submission).

### 2.5 Analytics & Study Tools
- `src/app/(app)/(main)/performance/page.tsx`: System- and subject-level accuracy charts using Recharts, historical score trends, average response time, and readiness indicators.
- `src/app/(app)/(main)/planner/page.tsx`: Exam countdown planner with daily study quotas and rest days.
- `src/app/(app)/(main)/flashcards/page.tsx`: SM-2 spaced repetition deck generation from questions or highlighted text.
- `src/app/(app)/(main)/notebook/page.tsx`: Hierarchical note organizer with question clipping.

---

## 3. Detailed Gap Analysis Matrix (StepwiseMD vs. OpenPrep)

| Capability / Feature | StepwiseMD Status | OpenPrep Current State | Gap Severity | Action Plan |
|---|---|---|---|---|
| **Multi-Exam Coverage** | 16 exams (USMLE, PLAB, AMC, MCCQE, FCPS, NLE, NEET PG, MRCP, MRCEM, SMLE, HAAD/DHA, UHS MBBS) | 3 exams (Step 1, Step 2 CK, Step 3) | **CRITICAL** | Expand taxonomy in `taxonomy.json` and database seed to support all 13 additional international exams. Author original content batches. |
| **Question Bank Volume** | 100,000+ (claimed) | 1,028 questions | **HIGH** | Produce high-quality, independently authored question batches across target exams with 5-choice format. |
| **CMS Forms / Clerkships** | Dedicated clerkship modules (Medicine, Surgery, Peds, Ob/Gyn) | Embedded in Step 2 CK subjects; no dedicated shelf-practice presets | **MEDIUM** | Add subject/clerkship filter presets to test creation. |
| **Negative Marking** | Standard practice for NEET PG / regionals | Implemented in engine (`negativeMark: 0, 0.25, 0.33, 0.5`) | **NONE** (parity) | Ensure exam presets for NEET PG default to negative marking. |
| **Lab Values Reference** | Emulated Prometric lab sheet | Built-in Comprehensive Lab Values modal | **NONE** (parity) | Parity verified. |
| **Built-in Calculator** | Standard on-screen calculator | Built-in functional calculator modal | **NONE** (parity) | Parity verified. |
| **Highlight & Strike** | Supported | Full support with optimistic UI updates | **NONE** (parity) | Parity verified. |
| **Tutor & Timed Modes** | Supported | Full support with server-verified timers | **NONE** (parity) | Parity verified. |
| **Exam-Specific Analytics** | Broken down by exam category | Global user performance across all exams | **MEDIUM** | Introduce exam filter dropdown in performance dashboard to isolate USMLE vs. PLAB vs. AMC metrics. |
| **PWA & Offline Study** | PWA with service worker (`/sw.js`) | Web responsive; service worker not currently active | **LOW** | Add web app manifest and offline shell fallback. |
| **Medical Provenance & Rights** | Proprietary, unverified sourcing | Enterprise-grade 3-pillar review gate with terminal revocation | **ADVANTAGE (OpenPrep)** | Maintain OpenPrep's superior copyright compliance and provenance tracking. |

---

## 4. Preservation & Safety Audit

- **Existing Data Safety:** All existing 1,028 questions, user accounts, sessions, test attempts, notes, bookmarks, flashcards, and audit logs must remain completely untouched.
- **Transactional Ingestion:** All new content must be imported via `src/lib/admin.ts:importQuestions()` inside PostgreSQL transactions with uniqueness checks on `code` and duplicate stem screening.
- **No Overwriting:** Importer will skip or reject matching codes rather than overwriting existing records.
- **Review Status Transparency:** All newly generated questions must carry `source: 'OpenPrep original; AI-authored; medically unreviewed'` and `license: 'CC-BY-SA-4.0'` to maintain strict medical integrity.

---

## 5. Required Implementation Steps

1. **Taxonomy Expansion:** Update `content/bank/taxonomy.json` to register the new exam categories and ensure database migration/seed updates do not disrupt existing foreign keys.
2. **Original Question Authoring:** Author new, high-yield clinical vignettes adhering to the 15 required fields for each prioritized exam category:
   - USMLE Step 1 & Step 2 CK
   - PLAB / UKMLA (GMC)
   - AMC (Australia)
   - MCCQE (Canada)
   - FCPS (Pakistan)
   - NLE
   - NEET PG (India)
   - MRCP & MRCEM (UK)
   - SMLE (Saudi Arabia)
   - HAAD / DHA (UAE)
   - UHS MBBS
3. **Validation & Batch Ingestion:** Run automated batch validation and import scripts.
4. **Platform UI Enhancements:**
   - Update `CreateTestForm` to easily filter by exam family.
   - Add Exam Category selector / landing card in Question Browser and Dashboard.
   - Enhance Performance Analytics with exam-specific breakdown.
5. **Quality Verification:** Full test suite execution (unit tests, typecheck, lint, build).
