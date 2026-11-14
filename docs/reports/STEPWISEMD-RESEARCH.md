# StepwiseMD Platform Research & Inventory Report

**Date:** November 2026  
**Document Status:** Complete (Phase 1 Deliverable)  
**Target Platform:** StepwiseMD (`https://stepwisemd.net/`, `https://app.stepwisemed.app/login`)  
**Methodology:** Passive CDP/Playwright inspection of public web endpoints, DOM accessibility tree analysis, script and client-bundle inspection. No private APIs, authentication boundaries, payment gates, or DRM protections were bypassed.

---

## 1. Executive Summary

StepwiseMD is a commercial medical examination preparation platform primarily catering to international medical graduates (IMGs) and medical students worldwide. While its marketing and core product are heavily anchored around **USMLE Step 1** and **USMLE Step 2 CK** (including shelf/clerkship **CMS Forms** and **NBME-style** self-assessments), it offers multi-exam subscription packages that span 10+ licensing examinations across North America, the UK, South Asia, Australasia, and the Middle East.

### Key Metrics Observed (Public Claims):
- **Question Inventory:** 100,000+ questions claimed across 300+ question banks.
- **Licensing Exams Covered:** 10+ major regional and international medical licensing pathways.
- **Platform Architecture:** Client-side Single Page Application (SPA) with a dedicated Service Worker (`/sw.js`) supporting Progressive Web App (PWA) installation and offline study across Desktop, iOS, and Android.
- **Commercial Model:** Single subscription tier unlocking all question banks:
  - 6 Months: ~$28 / Rs. 7,000
  - 12 Months: ~$48 / Rs. 12,000
  - 24 Months: ~$80 / Rs. 20,000
- **Activation Flow:** Semi-automated / WhatsApp-assisted concierge onboarding (`+44 7916 685975`, `@MedictoMD`).

---

## 2. Supported Examinations

From verified public route analysis (`/exams/`, `/usmle-step-1/`, `/usmle-step-2-ck/`, `/cms-forms/`, `/nbme-practice/`), StepwiseMD categorizes its question banks into the following specific examinations:

| # | Examination | Jurisdiction / Target Audience | Stated Scope & Focus |
|---|---|---|---|
| 1 | **USMLE Step 1** | United States (FSMB / NBME) | Pre-clinical sciences, organ systems, pathology, pharmacology, biostatistics, foundational clinical reasoning. |
| 2 | **USMLE Step 2 CK** | United States (FSMB / NBME) | Clinical science mastery, diagnosis, next step in management, inpatient/outpatient management. |
| 3 | **CMS Forms** | United States (NBME) | Clinical Mastery Series subject exams aligned with clinical clerkships (Medicine, Surgery, Ob/Gyn, Peds, Psych, Neuro, Family Medicine). |
| 4 | **NBME Self-Assessments** | United States (NBME) | Comprehensive Basic Science / Clinical Science benchmark exams simulating test-day timing and scoring. |
| 5 | **PLAB & UKMLA** | United Kingdom (GMC) | Professional and Linguistic Assessments Board / UK Medical Licensing Assessment for GMC registration. |
| 6 | **AMC** | Australia (AMC / AHPRA) | Australian Medical Council MCQ examination for international medical graduates. |
| 7 | **MCCQE Part I** | Canada (MCC) | Medical Council of Canada Qualifying Examination for Canadian licensing. |
| 8 | **FCPS Part 1** | Pakistan (CPSP) | College of Physicians and Surgeons Pakistan fellowship entrance examination. |
| 9 | **NLE** | Multiple / National | National Licensing Examination for national medical council practice permits. |
| 10 | **NEET PG** | India (NBE / NMC) | National Eligibility cum Entrance Test for postgraduate medical courses (features negative marking). |
| 11 | **MRCP (UK)** | United Kingdom (Royal Colleges) | Membership of the Royal Colleges of Physicians (Part 1 / Part 2 Written). |
| 12 | **MRCEM** | United Kingdom (RCEM) | Membership of the Royal College of Emergency Medicine (Primary / Intermediate). |
| 13 | **SMLE** | Saudi Arabia (SCFHS) | Saudi Medical Licensing Examination. |
| 14 | **HAAD & DHA** | UAE (Abu Dhabi / Dubai) | Health Authority Abu Dhabi / Dubai Health Authority general practitioner / specialist licensing. |
| 15 | **DoH (Abu Dhabi)** | UAE (DoH) | Department of Health Abu Dhabi medical practitioner licensing. |
| 16 | **UHS MBBS** | Pakistan (UHS) | University of Health Sciences undergraduate MBBS professional examinations. |

---

## 3. Question Bank Organization & Taxonomy

StepwiseMD organizes medical content across four hierarchical tiers:

```
Exam Level (e.g., USMLE Step 1, PLAB, AMC, NEET PG)
  └── Subject Level (e.g., Medicine, Pharmacology, Surgery, Pathology)
        └── Organ System Level (e.g., Cardiovascular, Respiratory, Renal)
              └── Topic & Subtopic Level (e.g., Valvular Heart Disease, Antiarrhythmics)
```

### Observed Subjects:
- Foundational: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Immunology, Genetics, Medical Ethics, Biostatistics & Epidemiology.
- Clinical: Internal Medicine, General Surgery, Pediatrics, Obstetrics & Gynecology, Neurology, Psychiatry, Emergency Medicine, Dermatology, Radiology, Preventive Medicine.

### Observed Organ Systems:
- Cardiovascular System
- Respiratory System
- Gastrointestinal System & Nutrition
- Renal, Urinary System & Electrolytes
- Musculoskeletal System, Skin & Subcutaneous Tissue
- Endocrine & Metabolic System
- Nervous System & Special Senses
- Hematology & Oncology
- Reproductive Systems & Pregnancy
- Behavioral Health & Psychiatry
- General Principles & Multisystem Disorders

---

## 4. Practice Modes & Assessment Features

Public platform specifications and user workflow indicators demonstrate the following study modes:

1. **Tutor Mode (Immediate Feedback):**
   - Question stem displayed with options.
   - Immediate reveal of correct answer upon selection or submission.
   - Full rationale, distractor breakdowns, and learning objectives shown inline.
   - Ideal for untimed, knowledge-acquisition study sessions.

2. **Timed Examination Mode (Prometric-Style Interface):**
   - Emulates formal computer-based testing environments (e.g., Prometric NBME interface).
   - Standard block timing: typically 60 to 90 seconds per question (e.g., 40 questions in 60 minutes).
   - Pausable or strict countdown timer with warnings.
   - Explanations withheld until the block is submitted.

3. **Multi-Block Practice Exams:**
   - Multi-block sessions (up to 7–8 blocks) simulating a full-day examination.
   - Configurable break bank (e.g., 45–60 minutes shared across the exam day).

4. **Review & Targeting Modes:**
   - **Unused:** Only questions never attempted by the learner.
   - **Incorrect:** Questions answered incorrectly on previous attempts.
   - **Marked / Flagged:** Questions bookmarked for targeted revision.
   - **All Questions:** Unrestricted practice pool.

---

## 5. Question Presentation & In-Exam Tooling

StepwiseMD emulates the standard USMLE / Prometric test interface:

- **Interactive Question Stem:** Rich text formatting, lab tables, clinical images, and ECG/histology figures.
- **Highlighting & Strikethrough:**
  - Highlighting text in the vignette to emphasize key clinical findings.
  - Strikethrough of ruled-out answer choices.
- **Reference Tools:**
  - Standard laboratory values reference table (SI and conventional units).
  - On-screen basic calculation tool.
- **Item Flagging:** "Mark" checkbox to return to uncertain questions via the Block Navigator.
- **Question Navigator:** Overview matrix showing Unanswered, Answered, and Flagged items.

---

## 6. Explanations & Learning Support

- **Correct Option Rationale:** In-depth biological or clinical explanation of why the correct option is superior.
- **Distractor Rationales:** Specific explanation for why every other distractor choice is incorrect, flawed, or suboptimal.
- **High-Yield Takeaway / Learning Objective:** 1–2 sentence summary of the core medical concept tested.
- **AI Study Assistant:** Interactive prompt queries ("Why is C wrong?", "Explain the pathophysiology", "Clinical takeaway") providing real-time clarifications.

---

## 7. Analytics & Study Planning

- **Subject & System Performance Matrix:** Percentile and percentage accuracy across every organ system and medical specialty.
- **Score Predictor:** Statistical calibration estimating readiness and predicted exam performance.
- **Weak-Area Identification:** Automated flagging of high-yield topics where the user's accuracy falls below baseline benchmarks.
- **Study Planner:** Calendar schedule mapping daily question quotas and review sessions against the user's target exam date.

---

## 8. Technical Architecture & Device Support

- **Web Frontend:** Single Page Application (SPA) with responsive design for desktop, tablet, and mobile browsers.
- **Progressive Web App (PWA):** Equipped with `/sw.js` service worker, manifest, and offline caching for uninterrupted study during connectivity drops.
- **Cloud Delivery & CDN:** Cloudflare edge delivery (`beacon.min.js`, edge caching).

---

## 9. Verified Observations vs. Assumptions

| Feature / Attribute | Status | Source Evidence |
|---|---|---|
| Supported Exams (16 listed) | **Verified** | Public routes `/exams/`, `/usmle-step-1/`, `/cms-forms/` |
| Subscription Pricing & Plans | **Verified** | Public route `/pricing/#plans` |
| Prometric-Style UI & Timer | **Verified** | Marketing copy, screenshots, app login portal |
| PWA Service Worker | **Verified** | `navigator.serviceWorker.register('/sw.js')` in app login DOM |
| 100,000+ Questions Count | **Marketing Claim** | Unverified independently; public site marketing headline |
| Concierge WhatsApp Activation | **Verified** | WhatsApp links (`wa.me/447916685975`) throughout registration forms |
| Internal Database Schema | **Unavailable** | Not accessed; proprietary backend |

---

## 10. Conclusion & Strategic Guidance for OpenPrep

To provide a viable, comprehensive, and superior open-source alternative to StepwiseMD, OpenPrep must:
1. **Broaden its Exam Taxonomy:** Expand beyond USMLE Step 1/2/3 to support international licensing tracks (PLAB/UKMLA, AMC, MCCQE, FCPS, NLE, NEET PG, MRCP, MRCEM, SMLE, HAAD/DHA, UHS MBBS).
2. **Author High-Yield Original Questions:** Expand the question bank with independent, high-yield clinical vignettes adhering to rigorous 5-choice single-answer formats with granular distractor rationales and real citations.
3. **Preserve Integrity & Provenance:** Maintain strict distinction between unreviewed AI-authored content and qualified medical review, without copying proprietary material.
4. **Enhance Study & Exam Modes:** Offer seamless switching between Tutor mode, Timed mode, and Review pools (Incorrect, Marked, Unused).
