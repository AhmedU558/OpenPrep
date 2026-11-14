# Database Migration & Content Ingestion Report

**Date:** November 2026  
**Document Status:** Complete (Phase 5/6 Deliverable)  
**Safety Protocol:** Zero Data Deletion & Immutable Ledger Compliance  
**Authoring Status:** 1,095 Original Multi-Exam Questions Generated & Validated (Batches intl-01 through intl-15)

---

## 1. Executive Summary

This report documents the schema expansion, taxonomy migration, and batch ingestion methodology designed to scale OpenPrep from 1,028 questions (USMLE Step 1/2/3 only) to a globally comprehensive medical licensing platform encompassing 14 medical examinations.

### Strict Safety & Preservation Guarantees:
1. **Preservation of Existing Data:** Zero rows in `question`, `user`, `session`, `test_session`, `session_item`, `response`, `bookmark`, `note`, `card`, `study_plan`, or `audit_log` were deleted or overwritten. All 4,028 existing database questions remain intact.
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

### 3.1 Initial Core Batches (`intl-01` to `intl-03`)
- **Batch intl-01 (`content/bank/international/batch-intl-01.ts`):** 15 items (`intl-0001` - `intl-0015`). Exams: Step 1, Step 2 CK, PLAB / UKMLA, AMC, MCCQE.
- **Batch intl-02 (`content/bank/international/batch-intl-02.ts`):** 15 items (`intl-0016` - `intl-0030`). Exams: FCPS, NLE, NEET PG, MRCP, MRCEM, SMLE, HAAD / DHA, UHS MBBS.
- **Batch intl-03 (`content/bank/international/batch-intl-03.ts`):** 15 items (`intl-0031` - `intl-0045`). Exams: Comprehensive 14-exam rotation across high-acuity clinical scenarios.

### 3.2 350-Question Mega Expansion Batches (`intl-04` to `intl-07`)
- **Batch intl-04 (`content/bank/international/batch-intl-04.ts`):** 90 items (`intl-0046` - `intl-0135`). Focus: Cardiovascular, Pulmonary, Critical Care, Arrhythmias, Heart Failure, Shock, Asthma/COPD, Thromboembolism.
- **Batch intl-05 (`content/bank/international/batch-intl-05.ts`):** 90 items (`intl-0136` - `intl-0225`). Focus: Gastroenterology, Hepatology, Acute Abdomen, Nephrology, AKI, Glomerulonephritis, Electrolyte Disorders.
- **Batch intl-06 (`content/bank/international/batch-intl-06.ts`):** 85 items (`intl-0226` - `intl-0310`). Focus: Endocrinology (DKA, Thyroid storm, Adrenal crisis), Hematology (Transfusion reactions, Coagulopathies, Leukemias), Neurology (Stroke, Status Epilepticus).
- **Batch intl-07 (`content/bank/international/batch-intl-07.ts`):** 85 items (`intl-0311` - `intl-0395`). Focus: Neuromuscular Disorders (Myasthenia, Guillain-Barré), Rheumatology (SLE, Vasculitides), Obstetric Emergencies (Pre-eclampsia, PPH), Resuscitation (Anaphylaxis, Toxins, Cardiac Arrest).

### 3.3 Second 350-Question Mega Expansion Batches (`intl-08` to `intl-11`)
- **Batch intl-08 (`content/bank/international/batch-intl-08.ts`):** 90 items (`intl-0396` - `intl-0485`). Focus: Sepsis/Septic Shock (Surviving Sepsis, TLR4, Norepinephrine), CAP/Atypical Pneumonia (CURB-65, Strep pneumoniae), Infective Endocarditis (Duke criteria, TEE, S. viridans), CNS Infections (Meningitis, LP, Ceftriaxone/Dexamethasone), Tuberculosis (Cord factor, RIPE, GeneXpert), HIV/AIDS (CD4 thresholds, PJP, Toxoplasmosis, ART).
- **Batch intl-09 (`content/bank/international/batch-intl-09.ts`):** 90 items (`intl-0486` - `intl-0575`). Focus: Pyelonephritis/UTI (P-fimbriae, WBC casts, Ceftriaxone), Pediatric Airway Obstruction (Croup, Epiglottitis, Dexamethasone, Stepple sign), Pediatric Gastroenteritis (SGLT1, WHO ORS, Isotonic fluid bolus), Pediatric Exanthems/Vasculitis (Kawasaki, IVIG/Aspirin, HSP, Measles), Congenital Heart Defects (Tetralogy of Fallot, VSD, TGA, PGE1), Neonatal Jaundice (UGT1A1, Phototherapy nomograms, Kernicterus).
- **Batch intl-10 (`content/bank/international/batch-intl-10.ts`):** 85 items (`intl-0576` - `intl-0660`). Focus: Pediatric Hip Pathology (Septic arthritis, Kocher criteria, SCFE, Perthes), Acute Appendicitis & Diverticulitis (Visceral/somatic pain, McBurney, CT/US, Laparoscopic appendicectomy), Mechanical Bowel Obstruction (Closed loop, Gastrografin, Volvulus), Acute Biliary Tract (Triangle of Calot, Charcot triad, ERCP, Early cholecystectomy), Acute Aortic Syndromes (Stanford A vs B, Anti-impulse esmolol, Ruptured AAA).
- **Batch intl-11 (`content/bank/international/batch-intl-11.ts`):** 85 items (`intl-0661` - `intl-0745`). Focus: Major Trauma & ATLS Survey (Tension pneumothorax decompression, 1:1:1 MTP, TXA, FAST), Thermal Burns (Jackson zones, Parkland formula, Inhalation injury, Escharotomy), Major Depressive Disorder (SSRI neurobiology, Suicide safety, ECT), Psychotic Disorders & NMS (D2 antagonism, Lead-pipe rigidity, Dantrolene, Clozapine ANC), Panic & PTSD (Amygdala hyperactivity, CBT, SSRI, Prazosin), SJS/TEN & Blistering Diseases (Granulysin, SCORTEN, Desmoglein autoantibodies), Acute Poisoning (Organophosphates/Atropine, Acetaminophen/NAC, Toxidromes).

### 3.4 Third 350-Question Mega Expansion Batches (`intl-12` to `intl-15`)
- **Batch intl-12 (`content/bank/international/batch-intl-12.ts`):** 90 items (`intl-0746` - `intl-0835`). Focus: Gout & Pseudogout/CPPD (polarizing microscopy, colchicine vs NSAID, urate-lowering), Systemic Sclerosis & Raynaud (anticentromere vs anti-Scl70, renal crisis ACEi), Sjögren Syndrome & Inflammatory Myopathies (anti-Ro/La, CD8 vs CD4 endomysial/perimysial, dermatomyositis malignancy screen), Multiple Sclerosis (oligoclonal bands, Dawson fingers, methylprednisolone, DMT), Parkinson Disease & Tremors (Lewy bodies, alpha-synuclein, levodopa/carbidopa, propranolol).
- **Batch intl-13 (`content/bank/international/batch-intl-13.ts`):** 90 items (`intl-0836` - `intl-0925`). Focus: Amyotrophic Lateral Sclerosis (combined UMN/LMN, riluzole, non-invasive ventilation), Normal Pressure Hydrocephalus (triad, high-volume tap, ventriculoperitoneal shunt), Alzheimer & Vascular Dementia (amyloid-beta, tau tangles, cholinesterase inhibitors, memantine), Metabolic Bone Disease (osteoporosis DEXA, T-scores, bisphosphonates, Paget osteoclast mosaic bone), Renal Tubular Acidosis (Type 1 distal, Type 2 proximal, Type 4 hypoaldosteronism, urinary AG), SIADH & Diabetes Insipidus (euvolemic hyponatremia, fluid restriction, desmopressin challenge).
- **Batch intl-14 (`content/bank/international/batch-intl-14.ts`):** 85 items (`intl-0926` - `intl-1010`). Focus: Nephrolithiasis (calcium oxalate, struvite staghorn, stone size thresholds, tamsulosin, ureteroscopy), Renovascular Hypertension (fibromuscular dysplasia vs atherosclerosis, renal artery stenosis Doppler, ACEi caution), Multiple Myeloma & MGUS (CRAB criteria, Rouleaux, serum free light chains, bortezomib), Hodgkin & Non-Hodgkin Lymphoma (Reed-Sternberg CD15/CD30, ABVD, excisional biopsy), Myeloproliferative Neoplasms (JAK2 V617F, polycythemia vera phlebotomy, essential thrombocythemia hydroxyurea), Metabolic Liver Disease (Wilson ATP7B, Kayser-Fleischer, penicillamine, Hemochromatosis HFE C282Y phlebotomy).
- **Batch intl-15 (`content/bank/international/batch-intl-15.ts`):** 85 items (`intl-1011` - `intl-1095`). Focus: Celiac Disease (anti-tTG IgA, duodenal intraepithelial lymphocytosis, villous atrophy, gluten-free diet), Mesenteric Ischemia (pain out of proportion, SMA embolus, CT angiography, revascularization), Endocrine Hypertension (primary aldosteronism ARR ratio, adrenal vein sampling, spironolactone, pheochromocytoma alpha-before-beta blockade), Multiple Endocrine Neoplasia (MEN 1 menin vs MEN 2 RET, prophylactic thyroidectomy), Tropical & Vector-Borne Infections (P. falciparum PfEMP-1, artesunate, Dengue NS1 hemoconcentration), Enteric Fever (Salmonella Typhi, rose spots, XDR ceftriaxone/azithromycin, terminal ileal perforation), Spirochetal Infections (Treponema pallidum darkfield, benzathine penicillin G, neurosyphilis, Lyme erythema migrans), Ectopic Pregnancy (beta-hCG discriminatory zone, transvaginal US, methotrexate vs salpingectomy, anti-D), Gynecologic Oncology (HPV 16/18 E6/E7, Pap smear, colposcopy, LEEP, FIGO staging).

**Total Expansion Inventory:** **1,095 high-yield clinical items** across 15 modular batch suites (5,475 options with distinct rationales).

---

## 4. Ingestion & Quality Control Metrics

| Audit Parameter | Verification Requirement | Observed Result | Status |
|---|---|---|---|
| **Code Uniqueness** | Zero duplicate codes across the entire question bank | 1,095 unique codes (`intl-0001`..`intl-1095`) | **PASSED** |
| **Option Structure** | Exactly 5 distinct choices per item | 1,095/1,095 questions have exactly 5 options | **PASSED** |
| **Correct Answer Integrity** | Exactly 1 correct answer per question | 1,095/1,095 questions have single correct option | **PASSED** |
| **Stem Depth** | Vignette length >= 100 characters | All 1,095 questions >= 100 characters | **PASSED** |
| **Explanation Depth** | Main explanation >= 180 characters | All 1,095 questions >= 180 characters | **PASSED** |
| **Distractor Rationales** | Every choice rationale >= 35 characters | 5,475/5,475 option rationales >= 35 characters | **PASSED** |
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
