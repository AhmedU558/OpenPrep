import { CandidateSpec } from './types';

export const step3Batch7: CandidateSpec[] = [
  {
    code: 'op-c-s3-0151',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Sacubitril-Valsartan Transition in HFrEF Pharmacodynamics',
    subtopic: 'Dual Peptidase Bradykinin Metabolism and Angioedema Prevention',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 89,
    shortestValidSolution:
      'Synthesize GDMT transitions in HFrEF: Sacubitril (neprilysin inhibitor) combined with valsartan (ARB) is superior to ACE inhibitors for reducing cardiovascular death and hospitalizations. Neprilysin degrades vasoactive natriuretic peptides (BNP, ANP), but also degrades bradykinin and substance P. Because Angiotensin-Converting Enzyme (kininase II) also represents a primary enzymatic clearance pathway for bradykinin, concurrent or overlapping administration of an ACE inhibitor and a neprilysin inhibitor blocks both degradative pathways simultaneously, triggering massive accumulation of bradykinin and life-threatening angioedema. Therefore, a mandatory 36-hour medication-free interval is required when switching from an ACE inhibitor to an ARNI (which is not required when switching from an ARB to an ARNI, as ARBs do not inhibit kinin breakdown). Spironolactone is maintained as an essential mortality-reducing pillar with potassium monitoring.',
    necessaryInference:
      'Integrate dual enzymatic peptidase degradation pathways of bradykinin (ACE and neprilysin) to justify the required 36-hour washout when transitioning from an ACEi to an ARNI, while distinguishing this from an ARB transition and preserving background mineralocorticoid antagonist therapy.',
    strongestDistractor: 'Enforce a 36-hour washout period only if the patient has a prior documented history of allergic hypersensitivity to angiotensin-converting enzyme inhibitors',
    distractorExclusion: 'The hazard of severe angioedema stems from direct biochemical kinin accumulation resulting from dual peptidase inhibition, not an IgE-mediated allergic diathesis; therefore, the 36-hour washout is universally mandatory for all patients on ACE inhibitors regardless of prior tolerability.',
    citation: "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.",
    stem:
      'A 62-year-old man with ischemic cardiomyopathy and heart failure with reduced ejection fraction (HFrEF, left ventricular ejection fraction 28%) presents to the heart failure cardiology clinic for routine optimization. He reports mild shortness of breath when climbing one flight of stairs (NYHA functional class II). His current medications include lisinopril 40 mg daily, metoprolol succinate 100 mg daily, and spironolactone 25 mg daily. His blood pressure is 124/76 mm Hg, heart rate is 64/min, and oxygen saturation is 98% on room air. Physical examination reveals clear lung fields, no jugular venous distension, and trace bilateral pedal edema. Laboratory testing demonstrates: serum potassium 4.6 mEq/L, BUN 22 mg/dL, and serum creatinine 1.1 mg/dL (eGFR 74 mL/min/1.73 m²). The cardiologist decides to replace lisinopril with the neprilysin inhibitor-angiotensin receptor blocker combination (ARNI), sacubitril-valsartan, to provide superior reduction in cardiovascular death and heart failure hospitalizations. Which of the following management plans correctly pairs the pharmacologic transition strategy with its primary physiological rationale?',
    options: [
      {
        text: 'Discontinue lisinopril and enforce a 36-hour medication-free interval prior to the first dose of sacubitril-valsartan, because dual inhibition of neutral endopeptidase and kininase II causes synergistic accumulation of bradykinin and substance P',
        explanation: 'Under ACC/AHA/HFSA guidelines, the Angiotensin Receptor-Neprilysin Inhibitor (ARNI, sacubitril-valsartan) is the preferred first-line renin-angiotensin-aldosterone system inhibitor for patients with HFrEF (LVEF <= 40%), having demonstrated superiority over enalapril/lisinopril in reducing cardiovascular mortality and heart failure hospitalizations (PARADIGM-HF trial). However, there is a fundamental biochemical safety consideration: both Angiotensin-Converting Enzyme (ACE, also known as kininase II) and Neprilysin (neutral endopeptidase, NEP 24.11) represent the two primary enzymatic degradation pathways for circulating vasoactive peptides, specifically bradykinin and substance P. Simultaneous or overlapping pharmacologic inhibition of both enzymes blocks kinin degradation completely, leading to massive, unchecked accumulation of bradykinin. This triggers profound arteriolar vasodilation and increased post-capillary venular permeability, causing life-threatening, asphyxiating airway ANGIOEDEMA. A strict 36-HOUR WASHOUT PERIOD between the last dose of lisinopril and the first dose of sacubitril-valsartan is universally mandatory to allow kininase II activity to recover. Crucially, a washout period is NOT required when switching from an Angiotensin Receptor Blocker (ARB) to an ARNI, because ARBs selectively block the AT1 receptor without inhibiting bradykinin degradation. Spironolactone (a mineralocorticoid receptor antagonist) is an independent pillar of quadruple GDMT and must be continued with serial potassium monitoring.'
      },
      {
        text: 'Enforce a 36-hour washout period only if the patient has a prior documented history of allergic hypersensitivity to angiotensin-converting enzyme inhibitors',
        explanation: 'ACEi- and ARNI-induced angioedema is a non-allergic, non-IgE-mediated phenomenon driven by direct biochemical accumulation of bradykinin; the 36-hour washout is mandatory for every patient transitioning from an ACE inhibitor, regardless of prior tolerance.'
      },
      {
        text: 'Discontinue spironolactone for 14 days prior to initiating sacubitril-valsartan, because neprilysin inhibition impairs distal nephron potassium secretion',
        explanation: 'Neprilysin inhibition actually promotes mild natriuresis without impairing potassium secretion; mineralocorticoid receptor antagonists are continued as essential mortality-reducing GDMT pillars.'
      },
      {
        text: 'Transition immediately from lisinopril to sacubitril-valsartan without a washout interval, because valsartan competitively displaces lisinopril from AT1 receptors',
        explanation: 'Immediate transition without a 36-hour washout leads to overlapping ACE and neprilysin inhibition, precipitating severe life-threatening laryngeal and facial angioedema.'
      },
      {
        text: 'Substitute lisinopril with low-dose valsartan monotherapy for 30 days before initiating sacubitril, to allow hepatic clearance of active kininase inhibitors',
        explanation: 'A 30-day ARB lead-in is completely unnecessary; once 36 hours have elapsed from the last ACE inhibitor dose, sacubitril-valsartan can be safely started directly.'
      }
    ]
  },
  {
    code: 'op-c-s3-0152',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Renal Artery Stenosis and ACE Inhibitor-Induced Acute Kidney Injury',
    subtopic: 'Bilateral Renal Artery Stenosis and Efferent Arteriolar Vasodilation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Renovascular Hypertension (Renal Artery Stenosis - RAS): - ETIOLOGY: Atherosclerosis in older males (> 80%); Fibromuscular dysplasia in young females (< 35). - CLINICAL CLUES: Severe resistant hypertension, recurrent flash pulmonary edema, abdominal epigastric systolic-diastolic bruit, unexplained worsening of renal function. - PHARMACOLOGIC DIAGNOSTIC CHALLENGE: ACUTE DECLINE IN GFR (> 30% INCREASE IN SERUM CREATININE) FOLLOWING INITIATION OF AN ACE INHIBITOR OR ARB. Mechanism: Severe stenotic renal artery relies on ANGIOTENSIN II-MEDIATED EFFERENT ARTERIOLAR CONSTRICTION to maintain glomerular capillary filtration pressure. Blocking AT-II causes efferent arteriolar vasodilation, collapsing intraglomerular pressure and precipitating acute renal failure in bilateral RAS (or solitary kidney RAS). Diagnosis: Renal duplex ultrasound.',
    citation: "Textor SC. Renovascular Hypertension and Ischemic Nephropathy. In: Brenner & Rector's The Kidney, 11th ed. Elsevier; 2020:1367-1402.",
    stem:
      'A 69-year-old man with a 45-pack-year smoking history, peripheral artery disease, and long-standing hypertension presents for follow-up. His blood pressure has remained poorly controlled at 168/104 mm Hg despite compliance with amlodipine 10 mg daily and hydrochlorothiazide 25 mg daily. Auscultation of the abdomen reveals a soft, high-pitched, systolic-diastolic bruit heard loudest in the right upper epigastrium. His baseline serum creatinine is 1.1 mg/dL (eGFR 72 mL/min/1.73 m²), and serum potassium is 4.0 mEq/L. The physician adds lisinopril 20 mg daily to his antihypertensive regimen. Ten days later, routine follow-up laboratory testing reveals that his blood pressure has improved to 132/80 mm Hg, but his serum creatinine has surged to 2.4 mg/dL (eGFR 28 mL/min/1.73 m²) with a serum potassium of 5.3 mEq/L. Which of the following hemodynamic mechanisms is primarily responsible for the acute decline in glomerular filtration rate in this patient?',
    options: [
      {
        text: 'Loss of angiotensin II-mediated efferent arteriolar vasoconstriction resulting in collapse of intraglomerular hydrostatic pressure',
        explanation: 'This patient presents with atherosclerotic RENOVASCULAR HYPERTENSION secondary to severe bilateral renal artery stenosis (RAS) or unilateral stenosis in a functionally solitary kidney (suggested by vascular disease history, smoking, resistant hypertension, abdominal systolic-diastolic bruit, and acute renal decline on ACE inhibitor therapy). In hemodynamically significant renal artery stenosis, severe mechanical luminal narrowing sharply reduces renal plasma perfusion pressure entering the afferent arterioles. To prevent the collapse of glomerular filtration, the kidney activates the renin-angiotensin-aldosterone system, generating high local levels of ANGIOTENSIN II. Angiotensin II selectively binds to AT1 receptors on the EFFERENT ARTERIOLE, producing potent efferent arteriolar vasoconstriction. This elevates post-capillary resistance, boosting intraglomerular hydrostatic capillary pressure and maintaining the GFR. When an ACE INHIBITOR (lisinopril) or ARB is administered, systemic and intrarenal angiotensin II synthesis is blocked, causing immediate EFFERENT ARTERIOLAR DILATION. Without efferent tone, the glomerular filtration pressure plummets, precipitating an acute rise in serum creatinine (> 30% above baseline) and acute kidney injury. Diagnostic confirmation is achieved via renal duplex ultrasonography or CT/MR angiography.'
      },
      {
        text: 'Afferent arteriolar vasoconstriction mediated by acute inhibition of renal prostaglandins',
        explanation: 'Afferent arteriolar vasoconstriction is the mechanism of NSAID-induced acute kidney injury (inhibition of vasodilatory prostaglandins), not ACE inhibitor toxicity.'
      },
      {
        text: 'Direct toxic acute tubular necrosis from drug accumulation in the proximal tubules',
        explanation: 'ACE inhibitors cause hemodynamic/functional prerenal failure due to altered intraglomerular hemodynamics, not direct chemical tubular cell necrosis.'
      },
      {
        text: 'Acute immune-mediated allergic interstitial nephritis with dense eosinophilic infiltration',
        explanation: 'Allergic interstitial nephritis typically presents with fever, maculopapular rash, arthralgias, and sterile pyuria with WBC casts, which are absent here.'
      },
      {
        text: 'Acute rhabdomyolysis resulting from severe drug-induced hypokalemic myopathy',
        explanation: 'The patient developed mild hyperkalemia (5.3 mEq/L), not hypokalemia, and ACE inhibitors do not cause acute rhabdomyolysis.'
      }
    ]
  },
  {
    code: 'op-c-s3-0153',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Resistant Gout Management and Allopurinol Titration Strategy',
    subtopic: 'Target Serum Urate < 6.0 mg/dL and HLA-B*5801 Allele Screening',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Chronic Tophaceous Gout (2020 ACR Guidelines): - SERUM URATE TARGET: Maintain serum urate < 6.0 mg/dL (or < 5.0 mg/dL in severe tophaceous gout) to promote crystal dissolution. - FIRST-LINE URATE-LOWERING THERAPY: ALLOPURINOL (xanthine oxidase inhibitor). - TITRATION PRINCIPLE: START LOW (100 mg/day, or 50 mg in CKD) AND TITRATE UPWARD EVERY 2-4 WEEKS (up to 800 mg/day) until target serum urate < 6.0 is achieved (do not stop at fixed 300 mg dose). - SAFETY PRE-SCREENING: Screen for HLA-B*5801 ALLELE in high-risk ethnic groups (Han Chinese, Korean, Thai, African descent) prior to allopurinol; positive status carries extreme risk of fatal SCAR / DRESS / Stevens-Johnson syndrome. Co-prescribe flare prophylaxis (colchicine or NSAID) for 3-6 months.',
    citation: "FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32391934.",
    stem:
      'A 54-year-old man of Han Chinese descent presents to the rheumatology clinic for management of recurrent, disabling gout. Over the past 18 months, he has suffered five excruciating flares involving his first metatarsophalangeal joints, left ankle, and right knee. Physical examination reveals firm, nodular, yellowish-white chalky deposits with overlying skin thinning across his right olecranon bursa and helix of both ears, consistent with tophi. His current serum urate concentration is 9.8 mg/dL (target < 6.0 mg/dL), and his serum creatinine is 1.2 mg/dL. He is not currently taking any urate-lowering therapy. The rheumatologist plans to initiate allopurinol alongside low-dose oral colchicine for flare prophylaxis. Which of the following is the most appropriate next step prior to prescribing allopurinol for this patient?',
    options: [
      {
        text: 'Screen for the HLA-B*5801 allele to prevent life-threatening severe cutaneous adverse reactions (SCAR)',
        explanation: 'Under the 2020 American College of Rheumatology (ACR) Gout Guidelines, allopurinol is the preferred first-line urate-lowering therapy (ULT) for all patients with gout indications (frequent flares, tophi, or radiographic joint damage), with a goal of titrating the dose until the serum urate is < 6.0 mg/dL (or < 5.0 mg/dL in severe tophaceous disease to accelerate tophus dissolution). However, ALLOPURINOL HYPERSENSITIVITY SYNDROME / SEVERE CUTANEOUS ADVERSE REACTIONS (SCAR)—including Stevens-Johnson syndrome (SJS), toxic epidermal necrolysis (TEN), and Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS)—carries a mortality rate of 20% to 25%. Susceptibility is strongly linked to the HLA-B*5801 ALLELE, which is highly prevalent among individuals of Han Chinese, Korean, Thai, and African descent (prevalence up to 7% to 15%). The ACR guidelines explicitly mandate TESTING FOR THE HLA-B*5801 ALLELE PRIOR TO INITIATING ALLOPURINOL in these high-risk ancestral groups. If positive, allopurinol is strictly contraindicated, and alternative agents (such as febuxostat, with appropriate cardiovascular risk assessment) should be selected. If negative, allopurinol is started at a low dose (100 mg daily) and gradually titrated upward every 2 to 4 weeks until target serum urate is reached.'
      },
      {
        text: 'Initiate allopurinol immediately at a fixed, permanent dose of 300 mg daily without genetic testing',
        explanation: 'Failing to screen for HLA-B*5801 in a Han Chinese patient exposes him to life-threatening SJS/TEN; furthermore, fixed 300 mg dosing frequently fails to achieve target urate levels.'
      },
      {
        text: 'Order a 24-hour urinary uric acid quantification test before choosing a medication',
        explanation: 'Urinary uric acid excretion is reserved for selecting uricosuric agents (probenecid); it is unnecessary prior to starting allopurinol.'
      },
      {
        text: 'Initiate intravenous pegloticase infusion as first-line monotherapy',
        explanation: 'Pegloticase is a recombinant uricase reserved for severe, refractory, destructive tophaceous gout that has failed maximal oral therapies, not treatment-naive patients.'
      },
      {
        text: 'Withhold all urate-lowering medications until the patient has been completely flare-free for 12 months',
        explanation: 'Withholding urate-lowering therapy in a patient with active tophi and five annual flares causes progressive joint destruction and chronic tophaceous gouty arthropathy.'
      }
    ]
  },
  {
    code: 'op-c-s3-0154',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Biologic DMARD Pre-Treatment Infectious Screening Mandates',
    subtopic: 'Latent Tuberculosis and Hepatitis B Screening Prior to Anti-TNF Therapy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Pre-Biologic Screening (ACR Guidelines for Anti-TNF Therapy: Infliximab, Adalimumab, Etanercept): - MANDATORY INFECTIOUS SCREENING PRIOR TO INITIATION: 1. LATENT TUBERCULOSIS INFECTION: Interferon-Gamma Release Assay (IGRA / QuantiFERON) or Tuberculin Skin Test (TST). Mechanism: TNF-alpha is ESSENTIAL FOR MAINTAINING GRANULOMA INTEGRITY. Anti-TNF therapy causes granuloma breakdown, triggering fulminant DISSEMINATED / MILIARY TUBERCULOSIS. (If latent TB is detected, treat with isoniazid/rifamycin for at least 1 month before starting biologic); 2. HEPATITIS B VIRUS: HBsAg and anti-HBc (prevents fatal viral reactivation and acute liver failure).',
    citation: "Fraenkel L, et al. 2021 American College of Rheumatology Guideline for the Treatment of Rheumatoid Arthritis. Arthritis Rheumatol. 2021;73(7):1108-1123. PMID: 34101387.",
    stem:
      'A 46-year-old woman with a 3-year history of seropositive rheumatoid arthritis presents for evaluation of persistent joint pain and morning stiffness. Despite maximal tolerated oral methotrexate (25 mg weekly) and daily folic acid, she continues to experience severe synovial swelling, tenderness, and warmth involving bilateral metacarpophalangeal (MCP) joints, proximal interphalangeal (PIP) joints, and wrists. Physical examination reveals 8 swollen joints and 12 tender joints, with an elevated disease activity score (DAS28 = 5.6). Plain radiographs of the hands demonstrate marginal periarticular erosions at the second and third right MCP joints. The rheumatologist decides to escalate therapy by adding a biologic tumor necrosis factor (TNF) inhibitor, adalimumab. Which of the following pre-treatment screening evaluations is mandatory prior to initiating adalimumab in this patient?',
    options: [
      {
        text: 'Interferon-gamma release assay (or tuberculin skin test) for latent tuberculosis, and serologic testing for hepatitis B surface antigen and core antibody',
        explanation: 'Prior to initiating biologic disease-modifying antirheumatic drugs (bDMARDs)—particularly Tumor Necrosis Factor-alpha (TNF-alpha) inhibitors such as adalimumab, infliximab, and etanercept—strict guidelines from the American College of Rheumatology (ACR) and the CDC mandate COMPREHENSIVE PRE-TREATMENT SCREENING FOR LATENT TUBERCULOSIS AND HEPATITIS B VIRUS: (1) LATENT TUBERCULOSIS: TNF-alpha is a master cytokine fundamentally required for the formation, maintenance, and structural integrity of tuberculous granulomas, sequestering viable Mycobacterium tuberculosis within histiocytic walls. Pharmacologic neutralization of TNF-alpha causes rapid dissolution of granulomas, leading to catastrophic reactivation into disseminated, extrapulmonary, or miliary tuberculosis. Patients must be screened with an Interferon-Gamma Release Assay (IGRA, such as QuantiFERON-TB Gold) or tuberculin skin test (TST); if latent TB is diagnosed, targeted antimicrobial prophylaxis (e.g., rifampin for 4 months or isoniazid plus rifapentine for 3 months) must be initiated, and the biologic delayed for at least 1 month. (2) HEPATITIS B: Anti-TNF therapy can trigger explosive viral replication, fulminant hepatic necrosis, and liver failure in carriers; screening for HBsAg and total anti-HBc is required.'
      },
      {
        text: 'Routine annual bone marrow aspirate and biopsy to exclude occult myelodysplastic syndrome',
        explanation: 'Bone marrow biopsy is an invasive procedure with no indication prior to starting TNF inhibitors.'
      },
      {
        text: 'Routine diagnostic bronchoscopy with bronchoalveolar lavage to assess for subclinical interstitial lung disease',
        explanation: 'Bronchoscopy is an invasive diagnostic procedure indicated only for acute pulmonary infections or unexplained infiltrates, not routine pre-biologic screening.'
      },
      {
        text: 'Serum 1,3-beta-D-glucan assay and cryptococcal antigen screening',
        explanation: 'Serum fungal antigen screening is not recommended prior to anti-TNF therapy in the absence of active clinical signs of invasive fungal infection.'
      },
      {
        text: 'Complete bilateral screening mammography and colonoscopy before every biologic dose',
        explanation: 'Cancer screening follows standard age-appropriate population guidelines; invasive cancer screening before every dose is inappropriate.'
      }
    ]
  },
  {
    code: 'op-c-s3-0155',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Lupus Nephritis Induction Immunosuppressive Protocols',
    subtopic: 'Class III/IV Proliferative Glomerulonephritis and Mycophenolate Mofetil vs Cyclophosphamide',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Lupus Nephritis (KDIGO & ACR Guidelines): - RENAL BIOPSY MANDATORY in SLE with proteinuria >= 0.5 g/day, active urine sediment (RBC casts, hematuria), or rising creatinine. - CLASS III (Focal) & CLASS IV (Diffuse Proliferative - most severe, "wire-loop" lesions, subendothelial immune complexes, low C3/C4). - INDUCTION THERAPY (rapid remission induction to prevent ESRD): INTRAVENOUS PULSE METHYLPREDNISOLONE followed by high-dose oral prednisone COMBINED WITH EITHER: 1. MYCOPHENOLATE MOFETIL (MMF - preferred first-line, equal efficacy with lower gonadal/infertility toxicity); OR 2. INTRAVENOUS CYCLOPHOSPHAMIDE (NIH or Euro-Lupus protocol). Maintenance: MMF or Azathioprine.',
    citation: "Fanouriakis A, et al. 2019 Update of the Joint European League Against Rheumatism and European Renal Association-European Dialysis and Transplant Association (EULAR/ERA-EDTA) recommendations for the management of lupus nephritis. Ann Rheum Dis. 2020;79(6):713-723. PMID: 32220864.",
    stem:
      'A 28-year-old woman with a 2-year history of systemic lupus erythematosus (SLE) well-controlled on hydroxychloroquine presents with progressive facial puffiness, bilateral lower extremity edema, and dark, tea-colored urine over the past 3 weeks. Her blood pressure is 158/98 mm Hg, heart rate is 78/min, and physical examination reveals 3+ dependent pitting edema up to her mid-shins. Laboratory evaluation reveals: serum creatinine 1.8 mg/dL (baseline 0.7 mg/dL 4 months ago), serum albumin 2.4 g/dL, serum complement C3 42 mg/dL (normal 80-160 mg/dL), and C4 6 mg/dL (normal 16-48 mg/dL). Urinalysis demonstrates 3+ protein, 3+ blood, and multiple dysmorphic red blood cells and red blood cell casts per high-power field. A 24-hour urine collection reveals 3.8 g of protein. An urgent ultrasound-guided percutaneous renal biopsy demonstrates Class IV diffuse proliferative lupus nephritis with active cellular crescents and extensive subendothelial immune complex deposits. Which of the following represents the most appropriate initial induction immunosuppressive regimen to halt progressive renal failure and preserve fertility in this patient?',
    options: [
      {
        text: 'High-dose systemic corticosteroids combined with oral mycophenolate mofetil',
        explanation: 'This young woman presents with acute, severe CLASS IV DIFFUSE PROLIFERATIVE LUPUS NEPHRITIS, the most aggressive and common form of renal involvement in SLE. It manifests clinically as a severe nephritic/nephrotic picture with hypertension, active urinary sediment (dysmorphic RBCs and RBC casts), heavy proteinuria, acute renal failure, and profound hypocomplementemia (low C3 and C4 consumed by classical complement activation). Diffuse proliferative nephritis carries a high risk of progressing to end-stage renal disease (ESRD) if not aggressively treated. Current KDIGO and EULAR/ACR guidelines recommend an intensive INDUCTION IMMUNOSUPPRESSIVE REGIMEN consisting of: (1) Intravenous pulse methylprednisolone followed by high-dose oral prednisone, COMBINED WITH (2) Either MYCOPHENOLATE MOFETIL (MMF) OR INTRAVENOUS CYCLOPHOSPHAMIDE. In a young woman of childbearing potential, MYCOPHENOLATE MOFETIL IS THE PREFERRED FIRST-LINE INDUCTION AGENT because randomized clinical trials (ALMS trial) demonstrated equivalent efficacy in inducing renal remission compared to cyclophosphamide, but with significantly LOWER RISKS OF PERMANENT OVARIAN FAILURE (infertility), alopecia, and hemorrhagic cystitis/bladder malignancy. (Hydroxychloroquine should also be continued).'
      },
      {
        text: 'Low-dose oral methotrexate monotherapy with monthly renal function surveillance',
        explanation: 'Methotrexate is completely ineffective for proliferative lupus nephritis and is renally cleared, causing severe toxicity in renal impairment.'
      },
      {
        text: 'Oral hydroxychloroquine dose escalation to 800 mg daily as exclusive therapy',
        explanation: 'While hydroxychloroquine is essential baseline therapy for all SLE patients, it is completely inadequate as monotherapy for active proliferative glomerulonephritis.'
      },
      {
        text: 'Intravenous immunoglobulin (IVIG) infusions every 4 weeks without corticosteroids',
        explanation: 'IVIG has no proven role as primary induction therapy for proliferative lupus nephritis and fails to halt crescentic glomerular destruction.'
      },
      {
        text: 'Outpatient prescription of oral furosemide and lisinopril with repeat urinalysis in 6 months',
        explanation: 'Supportive BP and diuretic therapy without immunosuppression results in irreversible glomerular scarring, glomerulosclerosis, and end-stage renal disease within months.'
      }
    ]
  },
  {
    code: 'op-c-s3-0156',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'General Principles',
    topic: 'Cancer Screening Cessation in Older Adults with Limited Life Expectancy',
    subtopic: 'Ten-Year Life Expectancy Rule and Deprescribing Routine Colonoscopy/Mammography',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Apply Cancer Screening Cessation Guidelines in Older Adults (Choosing Wisely & USPSTF): - GENERAL ONCOLOGY SCREENING PRINCIPLE: Cancer screening (colorectal, breast, prostate, cervical) requires A MINIMUM OF 10 YEARS OF PROJECTED LIFE EXPECTANCY for the population-level mortality benefit of early detection to outweigh the immediate procedural harms (perforation, bleeding, overdiagnosis, false positives). - ACTION IN FRAIL ELDERLY: When an older adult has severe multi-morbidity (e.g., advanced dementia, stage IV COPD, NYHA class IV heart failure) and an estimated life expectancy < 5 to 10 years: CEASE ALL ROUTINE CANCER SCREENING (discontinue screening colonoscopies, mammograms, and PSA testing). Focus on symptom management and quality of life.',
    citation: "Lee SJ, et al. Predicting mortality in older adults: a framework for individualized decision making in cancer screening. JAMA. 2013;310(21):2297-2298. PMID: 24310913.",
    stem:
      'An 83-year-old woman is brought to the geriatric clinic by her daughter for a routine health maintenance visit. The patient has a 12-year history of moderate-to-severe vascular dementia, residing in a memory care assisted living facility where she requires total assistance with dressing, bathing, and transfers. Her medical history includes severe chronic obstructive pulmonary disease (FEV1 32% predicted, on 2 L/min continuous home oxygen), NYHA class III systolic heart failure (ejection fraction 25%), and chronic kidney disease stage 4. A validated 4-year mortality prognostic index (Lee index) predicts an 85% probability of mortality within 4 years. Her last colonoscopy was performed at age 70 and was normal. The daughter mentions that the patient\'s calendar reminder says she is "overdue for her 10-year routine screening colonoscopy and annual screening mammogram," and asks the physician to schedule both procedures today. Which of the following is the most appropriate management recommendation regarding cancer screening in this patient?',
    options: [
      {
        text: 'Discontinue both screening colonoscopy and screening mammography, explaining that the immediate procedural risks outweigh any potential long-term benefit given her overall health status',
        explanation: 'In geriatric medicine and health maintenance, national guidelines from the USPSTF, the American Geriatrics Society (AGS), and the "Choosing Wisely" campaign emphasize that CANCER SCREENING SHOULD BE CEASED IN OLDER ADULTS WITH A PROJECTED LIFE EXPECTANCY OF LESS THAN 10 YEARS. Screening for solid malignancies (such as colorectal and breast cancer) detects asymptomatic early lesions; however, it takes a minimum of 10 to 15 years of lead time for the reduction in cancer-specific mortality to manifest. In frail older adults with severe, life-limiting multi-morbidity (severe vascular dementia, end-stage COPD on continuous oxygen, advanced heart failure, and CKD 4 with a > 85% 4-year mortality risk), the patient will almost certainly die from non-cancer competing causes long before any screen-detected early tumor could become clinically significant. Furthermore, the immediate procedural harms—including bowel preparation complications (severe dehydration, electrolyte collapse, acute kidney injury), colonoscopic perforation (which is significantly elevated in the elderly), anesthesia complications, false-positive mammograms, and unnecessary painful biopsies—far outweigh any theoretical benefit. The clinician should empathetically counsel the daughter on redirecting the clinical focus toward optimizing comfort, function, and dignity.'
      },
      {
        text: 'Order the screening colonoscopy under general anesthesia and schedule bilateral screening mammography',
        explanation: 'Performing invasive screening in an 83-year-old with end-stage COPD and severe dementia violates Choosing Wisely guidelines and exposes her to perforation, renal failure, and mortality.'
      },
      {
        text: 'Substitute annual fecal immunochemical testing (FIT) for the colonoscopy and continue mammograms',
        explanation: 'Stool-based testing is also contraindicated because a positive FIT obligates an invasive colonoscopy workup, which is harmful and inappropriate in this patient.'
      },
      {
        text: 'Perform screening colonoscopy only if her daughter signs a formal institutional waiver releasing the physician from liability',
        explanation: 'Physicians cannot perform inappropriate, harmful medical procedures simply because family members request them, regardless of liability waivers.'
      },
      {
        text: 'Order a total-body screening PET-CT scan as a non-invasive alternative to evaluate for occult cancer',
        explanation: 'Whole-body PET screening has no role in asymptomatic cancer screening and generates high rates of false positives leading to dangerous unnecessary biopsies.'
      }
    ]
  },
  {
    code: 'op-c-s3-0157',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Osteoporosis Secondary Causes Evaluation in Men',
    subtopic: 'Hypogonadism, Multiple Myeloma, and 24-Hour Urine Calcium Workup',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Evaluate Secondary Causes of Osteoporosis in Men: - CLINICAL RULE: Up to 50-60% of men with osteoporosis have an identifiable SECONDARY UNDERLYING CAUSE (in contrast to postmenopausal women where primary age/estrogen deficiency dominates). - COMMON SECONDARY ETIOLOGIES: 1. HYPOGONADISM (testosterone deficiency); 2. GLUCOCORTICOID USE (even low-dose); 3. ALCOHOL EXCESS; 4. MULTIPLE MYELOMA (SPEP/UPEP/free light chains); 5. MALABSORPTION / CELIAC DISEASE (25-OH Vitamin D deficiency); 6. HYPERPARATHYROIDISM; 7. IDIOPATHIC HYPERCALCIURIA. Initial lab panel: CBC, CMP, 25-OH Vitamin D, TSH, Total Testosterone, SPEP/UPEP, and 24-hour urine calcium.',
    citation: "Watts NB, et al. Osteoporosis in men: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2012;97(6):1802-1822. PMID: 22675001.",
    stem:
      'A 62-year-old man presents to the clinic following a low-trauma fracture of his left distal radius (Colles fracture) sustained after tripping over a rug on a flat floor. He has no chronic medical conditions, takes no medications, and does not smoke or drink alcohol. A diagnostic dual-energy X-ray absorptiometry (DEXA) scan reveals a bone mineral density T-score of -2.9 at the lumbar spine (L1-L4) and -2.7 at the left femoral neck, confirming osteoporosis. The patient asks why a healthy man of his age would develop brittle bones. In addition to a basic metabolic panel, serum 25-hydroxyvitamin D, and serum thyroid-stimulating hormone (TSH), which of the following represents the most appropriate initial diagnostic laboratory workup to evaluate for secondary causes of osteoporosis in this male patient?',
    options: [
      {
        text: 'Morning total testosterone level, serum protein electrophoresis (SPEP) with free light chains, and 24-hour urinary calcium excretion',
        explanation: 'While osteoporosis is widely recognized in postmenopausal women (where primary estrogen deficiency accounts for the vast majority of cases), up to 50% to 60% of MEN with osteoporosis have an identifiable, treatable SECONDARY CAUSE. The Endocrine Society clinical practice guidelines recommend that any man presenting with osteoporosis (T-score <= -2.5 or a low-trauma fragility fracture) undergo a systematic laboratory evaluation to screen for underlying secondary etiologies: (1) HYPOGONADISM: Androgen deficiency is one of the most common causes of bone loss in men; a morning total testosterone (and free testosterone if SHBG is altered) must be measured; (2) MULTIPLE MYELOMA: Plasma cell dyscrasias cause extensive osteoclast activation and osteopenia, requiring Serum Protein Electrophoresis (SPEP), serum free light chain assay, or UPEP; (3) CALCIUM EXCRETION DISORDERS: A 24-hour urinary calcium collection identifies idiopathic hypercalciuria (calcium wasting) or calcium malabsorption (< 100 mg/day); and (4) Secondary hyperparathyroidism, celiac disease/malabsorption, and Cushing syndrome. Identifying a secondary cause directly alters therapy (e.g., testosterone replacement for hypogonadism, or thiazide diuretics for hypercalciuria).'
      },
      {
        text: 'Immediate iliac crest bone biopsy with tetracycline double-labeling',
        explanation: 'Bone biopsy is an invasive research tool reserved for rare unexplained metabolic bone disorders like osteomalacia or adynamic bone disease, not initial osteoporosis workup.'
      },
      {
        text: 'Genetic sequencing for COL1A1 and COL1A2 osteogenesis imperfecta mutations',
        explanation: 'Osteogenesis imperfecta typically presents in childhood with blue sclerae, hearing loss, and multiple recurrent fractures; genetic testing is not indicated in late-onset male osteoporosis.'
      },
      {
        text: 'Twenty-four-hour urinary 5-hydroxyindoleacetic acid (5-HIAA) excretion',
        explanation: 'Urinary 5-HIAA screens for neuroendocrine carcinoid tumors; it is completely unrelated to metabolic bone disease.'
      },
      {
        text: 'No laboratory workup is indicated; immediately prescribe oral alendronate and discharge',
        explanation: 'Prescribing bisphosphonates without screening for secondary causes in a male patient overlooks treatable conditions like multiple myeloma or hypogonadism.'
      }
    ]
  },
  {
    code: 'op-c-s3-0158',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'COPD Inhaled Triple Therapy Selection Criteria (GOLD 2024)',
    subtopic: 'Frequent Exacerbations, Blood Eosinophils >= 300 cells/mcL, and Inhaled Corticosteroids',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage COPD Pharmacotherapy (GOLD 2024 Report): - DUAL BRONCHODILATION: Long-acting beta-2 agonist (LABA) + Long-acting muscarinic antagonist (LAMA) is preferred first-line for symptomatic dyspnea. - INDICATION TO ADD INHALED CORTICOSTEROID (ICS - TRIPLE THERAPY: LABA + LAMA + ICS): 1. History of frequent moderate/severe exacerbations (>= 2 moderate exacerbations or >= 1 exacerbation requiring hospital admission in past year); AND 2. PERIPHERAL BLOOD EOSINOPHILS >= 300 CELLS/mcL (or >= 100 with frequent hospitalizations). - CAUTION: Inhaled corticosteroids significantly INCREASE THE RISK OF PNEUMONIA in COPD; avoid if eosinophils < 100 cells/mcL or recurrent bacterial pneumonia.',
    citation: "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease: 2024 Report. goldcopd.org. 2024.",
    stem:
      'A 67-year-old man with severe chronic obstructive pulmonary disease (COPD, post-bronchodilator FEV1 38% predicted) presents for routine follow-up. Over the past 12 months, he has suffered two severe acute exacerbations requiring hospitalization for intravenous corticosteroids and antibiotics, and one moderate outpatient exacerbation. His current maintenance inhaled regimen is combination tiotropium (LAMA) and olodaterol (LABA) via a soft-mist inhaler daily, with an albuterol rescue inhaler as needed. Despite adherence and proper inhaler technique, he complains of daily breathlessness when walking 50 yards and morning cough. He has had no pneumonia episodes. On physical examination, breath sounds are distant bilaterally with prolonged expiration and faint wheezing. Complete blood count demonstrates: white blood cell count 6,800/mm³ with an absolute eosinophil count of 380 cells/mcL (5.6%). Which of the following is the most appropriate next step in the pharmacologic management of this patient?',
    options: [
      {
        text: 'Add an inhaled corticosteroid (escalate to single-inhaler triple therapy: LABA + LAMA + ICS)',
        explanation: 'Under the Global Initiative for Chronic Obstructive Lung Disease (GOLD 2024) guidelines, this patient is classified into Group E (high exacerbation risk: >= 2 exacerbations or >= 1 exacerbation resulting in hospital admission in the preceding year). While dual bronchodilation (LABA + LAMA) is the initial foundation of maintenance therapy, patients who experience recurrent exacerbations despite dual bronchodilation require treatment escalation. The decisive biomarker determining the response to an INHALED CORTICOSTEROID (ICS) is the PERIPHERAL BLOOD EOSINOPHIL COUNT. Extensive randomized clinical trial data (IMPACT and ETHOS trials) demonstrated that in patients with frequent exacerbations and a blood eosinophil count >= 300 cells/mcL (here, 380 cells/mcL), adding an inhaled corticosteroid to form TRIPLE THERAPY (LABA + LAMA + ICS, ideally via a single inhaler) significantly reduces future exacerbation rates and reduces all-cause mortality compared to dual bronchodilation alone. While ICS therapy carries a modest increased risk of bacterial pneumonia, the massive mortality and exacerbation reduction in patients with eosinophils >= 300 cells/mcL strongly favors triple therapy.'
      },
      {
        text: 'Discontinue both tiotropium and olodaterol, and initiate oral roflumilast monotherapy',
        explanation: 'Roflumilast (PDE-4 inhibitor) is an oral add-on therapy, not a standalone substitute for inhaled bronchodilators; stopping bronchodilators causes acute asphyxiation.'
      },
      {
        text: 'Add chronic daily oral prednisone 20 mg maintenance therapy indefinitely',
        explanation: 'Daily chronic systemic corticosteroids in stable COPD cause catastrophic adverse effects (osteoporosis, myopathy, diabetes, cataracts) without mortality benefit and are strictly contraindicated.'
      },
      {
        text: 'Initiate continuous prophylactic oral azithromycin monotherapy and withhold inhaled steroids',
        explanation: 'While azithromycin reduces exacerbations in former smokers, an ICS is the prioritized guideline-directed intervention when blood eosinophils are >= 300 cells/mcL.'
      },
      {
        text: 'Maintain the current LABA/LAMA regimen without changes, as inhaled corticosteroids have zero role in COPD',
        explanation: 'Withholding triple therapy in a patient with two hospitalizations and eosinophils of 380 cells/mcL denies him a proven mortality-reducing treatment.'
      }
    ]
  },
  {
    code: 'op-c-s3-0159',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Non-Steroidal Mineralocorticoid Receptor Antagonists in Diabetic Kidney Disease',
    subtopic: 'Finerenone for Persistent Albuminuria Despite Maximal ACEi/ARB Therapy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Diabetic Kidney Disease (DKD) Progression (ADA & KDIGO 2023 Guidelines): - BASELINE GDMT: 1. Maximally tolerated ACE inhibitor or ARB (titrated to maximum recommended dose); 2. SGLT2 Inhibitor (Dapagliflozin, Empagliflozin, or Canagliflozin) if eGFR >= 20. - ADD-ON FOR PERSISTENT RESIDUAL ALBUMINURIA: FINERENONE (a novel non-steroidal, selective mineralocorticoid receptor antagonist [nsMRA]). Proven in FIDELIO-DKD and FIGARO-DKD trials to SIGNIFICANTLY REDUCE CKD PROGRESSION AND CARDIOVASCULAR EVENTS in T2DM patients with persistent albuminuria (UACR >= 30 mg/g) on max ACEi/ARB. Monitor serum potassium (hyperkalemia risk).',
    citation: "Bakris GL, et al. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes. N Engl J Med. 2020;383(23):2219-2229. PMID: 33095540.",
    stem:
      'A 58-year-old man with a 14-year history of type 2 diabetes mellitus, hypertension, and stage 3 chronic kidney disease visits his nephrologist for management of progressive diabetic nephropathy. His current medications include losartan 100 mg daily (maximum approved dose), dapagliflozin 10 mg daily, metformin 1000 mg twice daily, and atorvastatin 40 mg daily. His blood pressure is 126/78 mm Hg, and his hemoglobin A1c is 7.1%. Laboratory testing reveals: serum creatinine 1.5 mg/dL (estimated GFR 52 mL/min/1.73 m²) and serum potassium 4.4 mEq/L. A spot urine albumin-to-creatinine ratio (UACR) reveals persistent severe albuminuria at 520 mg/g (normal < 30 mg/g), confirmed on three separate occasions over the past 6 months despite maximal losartan and dapagliflozin therapy. Which of the following pharmacologic agents has the strongest clinical trial evidence for slowing chronic kidney disease progression and reducing cardiovascular events when added to this patient\'s current regimen?',
    options: [
      {
        text: 'Oral finerenone daily with serial monitoring of serum potassium',
        explanation: 'This patient with type 2 diabetes has progressive diabetic kidney disease (DKD) characterized by persistent severely increased albuminuria (UACR 520 mg/g) and stage 3a CKD despite receiving maximally tolerated first-line foundational therapies: a maximum-dose ARB (losartan 100 mg) and an SGLT2 inhibitor (dapagliflozin). Under the updated KDIGO (Kidney Disease: Improving Global Outcomes) and American Diabetes Association (ADA) guidelines, FINERENONE is recommended as a proven disease-modifying therapy for patients with type 2 diabetes who have persistent albuminuria (UACR >= 30 mg/g) and eGFR >= 25 mL/min/1.73 m² while on standard-of-care ACEi/ARB and SGLT2i. Finerenone is a novel, non-steroidal, highly selective mineralocorticoid receptor antagonist (nsMRA). In the landmark FIDELIO-DKD and FIGARO-DKD randomized clinical trials, finerenone significantly reduced the primary composite renal outcome (sustained decline in eGFR, progression to end-stage kidney disease, or renal death) and significantly reduced major adverse cardiovascular events by blocking aldosterone-mediated renal inflammation and fibrosis. Because finerenone blocks mineralocorticoid receptors, serum potassium must be monitored closely for hyperkalemia (especially with baseline eGFR < 60 mL/min).'
      },
      {
        text: 'Add lisinopril 20 mg daily to combine dual ACE inhibitor and ARB therapy',
        explanation: 'Dual renin-angiotensin blockade (combining an ACE inhibitor with an ARB) was tested in the ONTARGET and VA NEPHRON-D trials and proven toxic, causing excessive hyperkalemia, acute kidney injury, and death without renal benefit.'
      },
      {
        text: 'Discontinue dapagliflozin and substitute oral sulfonylurea glimepiride',
        explanation: 'Discontinuing an SGLT2 inhibitor removes one of the most potent proven renal- and cardioprotective drug classes in diabetic kidney disease.'
      },
      {
        text: 'Initiate high-dose oral spironolactone 100 mg twice daily',
        explanation: 'High-dose steroidal MRAs like spironolactone cause severe refractory hyperkalemia and gynecomastia in CKD patients; the non-steroidal MRA finerenone has proven renal outcome data with lower hyperkalemia rates.'
      },
      {
        text: 'Prescribe oral sodium bicarbonate tablets targeting a serum bicarbonate of 32 mEq/L',
        explanation: 'Sodium bicarbonate is indicated only for metabolic acidosis with serum bicarbonate < 22 mEq/L; over-alkalinization causes volume expansion and worsening hypertension.'
      }
    ]
  },
  {
    code: 'op-c-s3-0160',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Oral Anticoagulation in End-Stage Renal Disease on Hemodialysis',
    subtopic: 'Warfarin vs Apixaban and Contraindications to Dabigatran/Rivaroxaban',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Anticoagulation in ESRD on Hemodialysis (CrCl < 15 mL/min): - SEVERE RENAL CLEARANCE RESTRICTIONS ON DOACs: 1. DABIGATRAN (80% renal clearance): STRICTLY CONTRAINDICATED in ESRD/dialysis; 2. RIVAROXABAN & EDOXABAN: Avoid due to high renal excretion and bleeding. - SAFE / APPROVED OPTIONS IN HEMODIALYSIS: 1. WARFARIN (INR 2.0-3.0, no renal excretion; risk of calciphylaxis); 2. APIXABAN (only ~27% renal clearance). DOSE: Apixaban 5 mg twice daily; REDUCE TO 2.5 mg twice daily IF patient meets >= 2 of the following criteria: Age >= 80 years, Body weight <= 60 kg, or Serum Creatinine >= 1.5 mg/dL.',
    citation: "Pokorney SD, et al. Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Systematic Review and Meta-Analysis. Circulation. 2022;146(23):1735-1745. PMID: 36345945.",
    stem:
      'A 68-year-old woman with end-stage renal disease (ESRD) secondary to diabetic nephropathy who has been receiving thrice-weekly maintenance hemodialysis for 4 years presents for evaluation of new-onset palpitations and fatigue. A 12-lead electrocardiogram demonstrates atrial fibrillation with a ventricular response of 118/min. Her CHA2DS2-VASc score is 5 (age 68, female sex, diabetes, hypertension, and ESRD). Transthoracic echocardiogram demonstrates a left ventricular ejection fraction of 50% and mild left atrial enlargement. Her dry weight is 68 kg. Rate control is achieved with oral metoprolol succinate. The nephrologist and cardiologist discuss systemic anticoagulation to prevent thromboembolic stroke. Which of the following is the most appropriate oral anticoagulation regimen for this patient on chronic hemodialysis?',
    options: [
      {
        text: 'Oral apixaban 5 mg twice daily (or oral warfarin targeting an INR of 2.0 to 3.0)',
        explanation: 'Managing oral anticoagulation for stroke prevention in patients with atrial fibrillation and end-stage renal disease (ESRD) on maintenance hemodialysis represents a complex clinical challenge. Patients on hemodialysis have concurrent high risks of both thromboembolism and severe uremic platelet dysfunction bleeding. Direct oral anticoagulants (DOACs) differ markedly in their degree of renal elimination: (1) Dabigatran is 80% renally eliminated and is STRICTLY CONTRAINDICATED in ESRD/dialysis due to fatal accumulation; (2) Rivaroxaban (35% renal) and edoxaban (50% renal) are not recommended or carry substantial bleeding warnings in dialysis. (3) APIXABAN has the lowest renal elimination among DOACs (~27% renal clearance). Pharmacokinetic data, large observational registries (Renal-AF), and FDA labeling approve APIXABAN 5 mg twice daily for patients on hemodialysis. The standard dose reduction to 2.5 mg twice daily is applied ONLY if the patient meets at least TWO of the ABC criteria: Age >= 80 years, Body weight <= 60 kg, or Serum Creatinine >= 1.5 mg/dL. Because this patient is 68 years old and weighs 68 kg, she meets only one criterion (creatinine), qualifying for the standard 5 mg twice-daily dose. Alternatively, WARFARIN (monitored to an INR of 2.0 to 3.0) is also an acceptable traditional option in ESRD, though warfarin carries a unique risk of precipitating vascular calcification and fatal calciphylaxis (calcific uremic arteriolopathy).'
      },
      {
        text: 'Oral dabigatran etexilate 150 mg twice daily',
        explanation: 'Dabigatran is 80% cleared by the kidneys; administering it to a hemodialysis patient leads to massive drug accumulation and fatal hemorrhagic arrest.'
      },
      {
        text: 'Oral rivaroxaban 20 mg once daily with the evening meal',
        explanation: 'Full-dose rivaroxaban without dose adjustment in hemodialysis is associated with severe major gastrointestinal and intracranial bleeding.'
      },
      {
        text: 'Daily oral aspirin 325 mg combined with clopidogrel 75 mg as safer alternatives to anticoagulation',
        explanation: 'Dual antiplatelet therapy provides vastly inferior stroke prevention compared to anticoagulants in atrial fibrillation while conferring equivalent major bleeding risk.'
      },
      {
        text: 'Withhold all anticoagulation because hemodialysis is an absolute contraindication to stroke prophylaxis',
        explanation: 'Atrial fibrillation in ESRD confers an exceptionally high stroke hazard (CHA2DS2-VASc = 5); withholding anticoagulation is contraindicated.'
      }
    ]
  },
  {
    code: 'op-c-s3-0161',
    exam: 'Step 3',
    subject: 'Surgery',
    system: 'Gastrointestinal',
    topic: 'Bariatric Surgery Postoperative Micronutrient Deficiencies',
    subtopic: 'Roux-en-Y Bypass Malabsorption of Vitamin B12, Iron, Copper, and Fat-Soluble Vitamins',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Micronutrient Complications of Bariatric Surgery (Roux-en-Y Gastric Bypass - RYGB): - BYPASS ANATOMY: Bypasses the stomach, duodenum, and proximal jejunum. - CLASSIC DEFICIENCIES: 1. VITAMIN B12 (loss of intrinsic factor & gastric acid; leads to megaloblastic anemia & subacute combined degeneration); 2. IRON (bypasses duodenum, primary site of iron absorption; microcytic anemia); 3. CALCIUM & VITAMIN D (bypasses duodenum; requires CALCIUM CITRATE, which does not require acid, unlike calcium carbonate); 4. COPPER (sensory ataxia & myeloneuropathy resembling B12 deficiency + microcytic/macrocytic anemia with neutropenia); 5. THIAMINE (B1). Lifelong multivitamin supplementation is mandatory.',
    citation: "Mechanick JI, et al. Clinical Practice Guidelines for the Perioperative Nutrition, Metabolic, and Nonsurgical Support of Patients Undergoing Bariatric Procedures - 2019 Update. Endocr Pract. 2019;25(12):1346-1359. PMID: 31682518.",
    stem:
      'A 44-year-old woman presents to the clinic reporting progressive numbness and tingling in her feet, unsteadiness when walking in the dark, and fatigue that has worsened over the past 6 months. She underwent an uncomplicated Roux-en-Y gastric bypass (RYGB) 5 years ago for severe obesity, achieving a sustained 110-lb weight reduction. Over the last 2 years, she has not taken her prescribed postoperative nutritional supplements because "she felt completely healthy." On physical examination, the patient is pale. Neurological examination reveals decreased vibratory sensation and impaired proprioception in both lower extremities up to the mid-shins, with a positive Romberg sign and wide-based gait. Patellar reflexes are 3+ bilaterally with positive extensor plantar responses (Babinski signs). Complete blood count demonstrates: hemoglobin 9.2 g/dL, mean corpuscular volume (MCV) 108 fL, white blood cell count 3,200/mm³ with hypersegmented neutrophils, and platelet count 140,000/mm³. Which of the following micronutrient deficiencies is the primary cause of this patient\'s neurological and hematologic manifestations?',
    options: [
      {
        text: 'Vitamin B12 (cobalamin) deficiency secondary to loss of gastric intrinsic factor and duodenal bypass',
        explanation: 'This patient presents with subacute combined degeneration of the spinal cord (loss of posterior column vibration/proprioception, Romberg sign, and lateral corticospinal tract hyperreflexia/Babinski signs) combined with macrocytic megaloblastic anemia (MCV 108 fL, hypersegmented neutrophils, mild pancytopenia) directly resulting from severe, uncorrected VITAMIN B12 (COBALAMIN) DEFICIENCY. Patients who undergo Roux-en-Y gastric bypass (RYGB) are at extraordinarily high lifetime risk for multiple micronutrient deficiencies due to both restrictive and malabsorptive anatomical alterations: (1) Reduced gastric pouch size drastically reduces the production of hydrochloric acid and pepsin (necessary to cleave dietary cobalamin from food proteins) and dramatically reduces INTRINSIC FACTOR secretion by gastric parietal cells (essential for B12 absorption in the terminal ileum); (2) Bypassing the duodenum and proximal jejunum severely impairs absorption of IRON, CALCIUM, and COPPER (copper deficiency can also cause an identical myeloneuropathy and anemia); and (3) Impaired bile acid and pancreatic enzyme mixing reduces absorption of FAT-SOLUBLE VITAMINS (A, D, E, K). Guidelines mandate lifelong postoperative supplementation with high-dose oral or intramuscular vitamin B12, elemental iron, calcium citrate (which does not require gastric acid for absorption, unlike calcium carbonate), vitamin D, and zinc/copper.'
      },
      {
        text: 'Isolated dietary iron deficiency secondary to poor intake of red meat',
        explanation: 'Iron deficiency causes microcytic hypochromic anemia (MCV < 80 fL), not macrocytic megaloblastic anemia with dorsal column spinal cord degeneration.'
      },
      {
        text: 'Vitamin C (ascorbic acid) deficiency resulting in impaired collagen synthesis',
        explanation: 'Scurvy presents with corkscrew hairs, perifollicular hemorrhages, bleeding gums, and subperiosteal hematomas, not dorsal column ataxia.'
      },
      {
        text: 'Niacin (vitamin B3) deficiency resulting in pellagra',
        explanation: 'Pellagra presents with the classic triad of "the 3 Ds": diarrhea, photosensitive dermatitis, and dementia, which are absent here.'
      },
      {
        text: 'Vitamin K deficiency leading to acute central nervous system microvascular hemorrhage',
        explanation: 'Vitamin K deficiency causes prolonged prothrombin time and bleeding/coagulopathy, not megaloblastic macrocytic anemia or subacute combined degeneration.'
      }
    ]
  },
  {
    code: 'op-c-s3-0162',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Hepatocellular Carcinoma Surveillance Protocol in Cirrhosis',
    subtopic: 'Abdominal Ultrasound Every 6 Months and Screening for Esophageal Varices',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Cirrhosis Surveillance Protocols (AASLD Guidelines): - HEPATOCELLULAR CARCINOMA (HCC) SURVEILLANCE: All patients with CIRRHOSIS of any etiology (or chronic Hepatitis B with high-risk features) require SURVEILLANCE ABDOMINAL ULTRASONOGRAPHY WITH OR WITHOUT SERUM ALPHA-FETOPROTEIN (AFP) EVERY 6 MONTHS. Rationale: Detects early, asymptomatic, resectable/transplantable solitary tumors (< 3 cm or Milan criteria). - GASTROESOPHAGEAL VARICES SURVEILLANCE: Screening ESOPHAGOGASTRODUODENOSCOPY (EGD) at time of cirrhosis diagnosis. If small varices: repeat EGD every 1-2 years; if medium/large varices: PRIMARY PROPHYLAXIS WITH NON-SELECTIVE BETA-BLOCKER (NADOLOL, PROPRANOLOL, OR CARVEDILOL) OR ENDOSCOPIC BAND LIGATION.',
    citation: "Marrero JA, et al. Diagnosis, Staging, and Management of Hepatocellular Carcinoma: 2018 Practice Guidance by the American Association for the Study of Liver Diseases. Hepatology. 2018;68(2):723-750. PMID: 29624699.",
    stem:
      'A 56-year-old man with a 15-year history of compensated cirrhosis secondary to chronic hepatitis C infection presents to the hepatology clinic for a routine health maintenance visit. Two years ago, he achieved a sustained virologic response (viral cure) following a 12-week course of direct-acting antiviral therapy with sofosbuvir-velpatasvir. He feels well and reports no abdominal swelling, jaundice, confusion, hematemesis, or melena. On physical examination, the patient is alert and afebrile. Physical examination reveals spider angiomas across his upper chest, palmar erythema, and a firm, nodular, non-tender liver edge palpable 2 cm below the right costal margin. There is no ascites, peripheral edema, or asterixis. Laboratory evaluation demonstrates: total bilirubin 1.1 mg/dL, serum albumin 3.8 g/dL, INR 1.1, AST 32 U/L, ALT 28 U/L, and platelet count 118,000/mm³ (consistent with mild portal hypertension). The patient states: "Since my hepatitis C is completely cured and I feel great, I assume I don\'t need any more liver scans." Which of the following is the most appropriate management plan for hepatocellular carcinoma surveillance in this patient?',
    options: [
      {
        text: 'Continue routine surveillance with abdominal ultrasonography (with or without serum alpha-fetoprotein) every 6 months indefinitely',
        explanation: 'Under the American Association for the Study of Liver Diseases (AASLD) guidelines, ALL PATIENTS WITH ESTABLISHED CIRRHOSIS—regardless of the underlying etiology and regardless of whether the primary insult has been cured or halted—REQUIRE LIFELONG SURVEILLANCE FOR HEPATOCELLULAR CARCINOMA (HCC). While direct-acting antiviral (DAA) therapy successfully eradicates hepatitis C virus and slows fibrosis progression, patients with pre-existing cirrhosis retain substantial, permanent architectural distortion, cellular dysplasia, and genetic alterations that maintain a high residual annual incidence of HCC (> 1.5% to 2% per year). The gold-standard, cost-effective surveillance regimen is ABDOMINAL ULTRASONOGRAPHY WITH OR WITHOUT SERUM ALPHA-FETOPROTEIN (AFP) PERFORMED EVERY 6 MONTHS. Semi-annual screening detects HCC at early, asymptomatic, resectable stages (solitary nodule <= 5 cm or up to 3 nodules <= 3 cm, fulfilling Milan criteria for curative liver transplantation, local thermal radiofrequency ablation, or surgical resection). Discontinuing surveillance because the patient feels healthy or achieved viral cure leads to late, non-curative presentations with portal vein invasion and fatal multi-organ metastasis.'
      },
      {
        text: 'Discontinue all liver imaging surveillance because sustained virologic response eliminates future cancer risk',
        explanation: 'Sustained virologic response reduces, but DOES NOT eliminate, the risk of hepatocellular carcinoma once cirrhosis is established; ongoing surveillance is mandatory.'
      },
      {
        text: 'Perform surveillance with contrast-enhanced triple-phase abdominal CT every 3 months',
        explanation: 'Routine 3-month triple-phase CT exposes the patient to excessive ionizing radiation and nephrotoxic contrast; non-invasive ultrasound every 6 months is the standard of care.'
      },
      {
        text: 'Order surveillance imaging only if serum alpha-fetoprotein levels exceed 400 ng/mL',
        explanation: 'Up to 30% to 40% of early resectable hepatocellular carcinomas do not produce elevated AFP; relying solely on AFP without imaging results in missed curable tumors.'
      },
      {
        text: 'Schedule an annual surveillance percutaneous core liver biopsy to assess for malignant transformation',
        explanation: 'Serial core needle biopsy is an invasive procedure with risks of severe hemoperitoneum and tumor tract seeding; surveillance relies strictly on non-invasive imaging.'
      }
    ]
  },
  {
    code: 'op-c-s3-0163',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Metabolic Dysfunction-Associated Steatohepatitis (MASH) Risk Stratification',
    subtopic: 'FIB-4 Index Calculation and Vibration-Controlled Transient Elastography',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Metabolic Dysfunction-Associated Steatohepatitis (MASH / NAFLD - AASLD 2023 Guidelines): - INITIAL RISK STRATIFICATION IN PRIMARY CARE: Calculate FIB-4 INDEX (uses Age, AST, ALT, and Platelet count). - FIB-4 THRESHOLDS: 1. FIB-4 < 1.3 (< 2.0 in age >= 65): LOW RISK for advanced fibrosis (repeat in 2-3 years, lifestyle modification); 2. FIB-4 1.3 to 2.67: INDETERMINATE RISK; 3. FIB-4 > 2.67: HIGH RISK for advanced fibrosis / cirrhosis. - SECOND-LINE CONFIRMATORY TESTING: For indeterminate or high FIB-4: VIBRATION-CONTROLLED TRANSIENT ELASTOGRAPHY (VCTE / FibroScan) or magnetic resonance elastography (MRE) to measure liver stiffness.',
    citation: "Rinella ME, et al. AASLD Practice Guidance on the clinical assessment and management of nonalcoholic fatty liver disease. Hepatology. 2023;77(5):1797-1835. PMID: 36727674.",
    stem:
      'A 52-year-old man with obesity (BMI 34 kg/m²), type 2 diabetes mellitus, and hyperlipidemia presents for routine follow-up. He consumes no alcohol and has no history of viral hepatitis. Routine laboratory testing reveals mild transaminitis: AST 58 U/L, ALT 72 U/L, total bilirubin 0.8 mg/dL, and platelet count 160,000/mm³. An abdominal ultrasound demonstrates diffuse, marked hepatic steatosis ("bright, echogenic liver") consistent with metabolic dysfunction-associated steatotic liver disease (MASLD / NAFLD). To determine this patient\'s risk of advanced hepatic fibrosis and guide referral to hepatology, the physician calculates the Fibrosis-4 (FIB-4) index using his age, transaminases, and platelet count. The calculated FIB-4 score is 2.85 (high risk > 2.67). Which of the following is the most appropriate next step in the clinical risk stratification of this patient?',
    options: [
      {
        text: 'Refer for vibration-controlled transient elastography (FibroScan) or hepatology consultation to assess liver stiffness',
        explanation: 'Metabolic dysfunction-associated steatotic liver disease (MASLD, formerly NAFLD) affects over 30% of the adult population and is strongly driven by insulin resistance, obesity, and type 2 diabetes. The critical prognostic determinant of all-cause mortality, cardiovascular events, and liver-related complications is THE STAGE OF HEPATIC FIBROSIS (specifically F3 bridging fibrosis or F4 cirrhosis). Under current AASLD guidelines, primary care clinicians should utilize a sequential non-invasive risk stratification algorithm: (1) FIRST-LINE NON-INVASIVE TESTING: Calculate the FIB-4 INDEX (derived from Age, AST, ALT, and Platelet count). A FIB-4 score < 1.3 rules out advanced fibrosis with a > 90% negative predictive value (low-risk group, managed with lifestyle modifications and rechecked in 2-3 years). (2) A FIB-4 SCORE > 2.67 (here, 2.85) indicates HIGH RISK for advanced fibrosis (F3-F4). Patients in the intermediate (1.3-2.67) or high-risk (> 2.67) categories require SECOND-LINE TESTING with VIBRATION-CONTROLLED TRANSIENT ELASTOGRAPHY (VCTE / FibroScan) to physically measure liver stiffness (in kilopascals) and referral to a gastroenterologist or hepatologist for comprehensive fibrosis staging, consideration of pharmacotherapy (such as resmetirom or GLP-1 receptor agonists), and HCC surveillance if cirrhosis is confirmed.'
      },
      {
        text: 'Reassure the patient that ultrasound steatosis is completely benign and re-evaluate liver enzymes in 5 years',
        explanation: 'A FIB-4 score of 2.85 indicates high risk of advanced bridging fibrosis or silent cirrhosis, which carries high mortality if ignored.'
      },
      {
        text: 'Perform an immediate percutaneous wedge liver biopsy in the primary care clinic',
        explanation: 'Liver biopsy is an invasive procedure with bleeding risks, reserved for cases where non-invasive elastography and serologic markers yield conflicting or indeterminate results.'
      },
      {
        text: 'Initiate high-dose oral vitamin E (1600 IU daily) monotherapy without further staging',
        explanation: 'Vitamin E is not recommended in diabetic patients due to lack of efficacy data and potential increased risks of hemorrhagic stroke and all-cause mortality.'
      },
      {
        text: 'Discontinue metformin immediately due to the risk of hepatic failure in steatohepatitis',
        explanation: 'Metformin does not cause liver failure and is safe in chronic liver disease; it should be continued for glycemic control.'
      }
    ]
  },
  {
    code: 'op-c-s3-0164',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Inflammatory Bowel Disease Colorectal Cancer Surveillance Guidelines',
    subtopic: 'Ulcerative Colitis Surveillance Starting at 8 Years vs Immediate in Primary Sclerosing Cholangitis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Colorectal Cancer Surveillance in Inflammatory Bowel Disease (AGA Guidelines): - STANDARD ULCERATIVE COLITIS / CROHN COLITIS: Chronic mucosal inflammation causes dysplasia-carcinoma sequence. SURVEILLANCE COLONOSCOPY BEGINS 8 YEARS AFTER SYMPTOM ONSET (for pancolitis or left-sided colitis involving > 1/3 of colon), REPEATED EVERY 1 TO 2 YEARS. - CRITICAL EXCEPTION: COEXISTING PRIMARY SCLEROSING CHOLANGITIS (PSC): Patients with IBD and concomitant PSC carry an astronomical 5-fold higher risk of colorectal cancer. SURVEILLANCE COLONOSCOPY MUST BEGIN IMMEDIATELY AT THE TIME OF PSC DIAGNOSIS, AND BE REPEATED ANNUALLY FOR LIFE.',
    citation: "Farraye FA, et al. AGA Clinical Practice Update on Surveillance and Management of Colorectal Dysplasia in Patients With Inflammatory Bowel Disease: Commentary. Gastroenterology. 2021;161(5):1687-1694. PMID: 34478740.",
    stem:
      'A 32-year-old man with a 4-year history of well-controlled extensive ulcerative colitis (pancolitis) treated with oral mesalamine presents to the gastroenterology clinic for routine follow-up. He is in clinical remission with 1 to 2 formed bowel movements daily and no rectal bleeding or abdominal pain. Routine laboratory testing reveals an unexpected isolated elevation in alkaline phosphatase at 420 U/L (normal < 120 U/L) with normal AST, ALT, and bilirubin. Magnetic resonance cholangiopancreatography (MRCP) demonstrates multifocal strictures and beading of the intrahepatic and extrahepatic bile ducts, establishing the diagnosis of primary sclerosing cholangitis (PSC). His last screening colonoscopy was performed 4 years ago at the time of his initial colitis diagnosis. The patient asks when he should undergo his next surveillance colonoscopy to screen for colorectal cancer. Which of the following is the most appropriate recommendation for colorectal cancer surveillance in this patient?',
    options: [
      {
        text: 'Perform a surveillance colonoscopy with high-definition chromoendoscopy immediately, and repeat colonoscopy annually thereafter',
        explanation: 'Patients with long-standing inflammatory bowel disease (IBD, both ulcerative colitis and Crohn colitis involving > 1/3 of the colon) have a substantially elevated risk of developing colorectal adenocarcinoma secondary to chronic mucosal inflammation. Under standard American Gastroenterological Association (AGA) guidelines: (1) In typical ulcerative colitis, surveillance colonoscopy begins 8 YEARS AFTER THE ONSET OF SYMPTOMS, repeated every 1 to 2 years. (2) HOWEVER, THERE IS A CRITICAL EXCEPTION: In patients with IBD who are diagnosed with CONCOMITANT PRIMARY SCLEROSING CHOLANGITIS (PSC), the risk of colorectal cancer is exponentially higher (up to a 5-fold increased risk compared to IBD alone, with cancers occurring at younger ages and progressing rapidly). Therefore, guidelines mandate that IN ANY PATIENT WITH IBD AND CONCOMITANT PSC, SURVEILLANCE COLONOSCOPY MUST BEGIN IMMEDIATELY AT THE TIME OF PSC DIAGNOSIS, REGARDLESS OF THE DURATION OF IBD, AND MUST BE REPEATED ANNUALLY (EVERY YEAR) FOR LIFE. High-definition chromoendoscopy with targeted biopsies is the preferred technique.'
      },
      {
        text: 'Wait until the patient has had ulcerative colitis for exactly 8 years (in 4 more years), then initiate surveillance every 2 years',
        explanation: 'Waiting for the standard 8-year mark ignores the catastrophic synergistic risk of PSC-associated colorectal dysplasia, leading to missed invasive carcinomas.'
      },
      {
        text: 'Perform surveillance colonoscopy every 5 years beginning at age 45, following average-risk population guidelines',
        explanation: 'Average-risk screening intervals are completely inadequate for high-risk inflammatory bowel disease with primary sclerosing cholangitis.'
      },
      {
        text: 'Surveillance colonoscopy is not indicated because his ulcerative colitis is currently in complete clinical remission',
        explanation: 'Colorectal cancer in PSC-IBD frequently arises in quiescent, endoscopically mild mucosa, meaning clinical remission provides zero protection against dysplasia.'
      },
      {
        text: 'Substitute annual fecal DNA-FIT testing in place of invasive colonoscopy',
        explanation: 'Non-invasive stool DNA tests have no role in IBD surveillance due to chronic mucosal inflammation generating false positives and inability to detect flat dysplasia.'
      }
    ]
  },
  {
    code: 'op-c-s3-0165',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Resistant Hypertension and Obstructive Sleep Apnea Evaluation',
    subtopic: 'Polysomnography and Continuous Positive Airway Pressure (CPAP) Therapy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Resistant Hypertension and Obstructive Sleep Apnea (AHA Scientific Statement): - RESISTANT HYPERTENSION: Blood pressure that remains above goal (>= 130/80 mm Hg) despite concurrent use of THREE ANTIHYPERTENSIVE CLASSES (including a diuretic, CCB, and ACEi/ARB) at optimal doses, OR BP controlled on >= 4 medications. - MOST COMMON SECONDARY CAUSE: OBSTRUCTIVE SLEEP APNEA (OSA, present in > 65-80% of resistant hypertension). Mechanism: Intermittent nocturnal hypoxemia and hypercapnia trigger massive sympathetic nervous system discharge, endothelin release, and aldosterone stimulation. Diagnosis: In-lab polysomnography (PSG) or home sleep apnea test. TREATMENT: CPAP THERAPY significantly lowers BP.',
    citation: "Carey RM, et al. Resistant Hypertension: Detection, Evaluation, and Management: A Scientific Statement From the American Heart Association. Hypertension. 2018;72(5):e53-e90. PMID: 30354828.",
    stem:
      'A 51-year-old man presents to the clinic for evaluation of treatment-resistant hypertension. Despite verified adherence to a maximum three-drug antihypertensive regimen consisting of amlodipine 10 mg daily, valsartan 320 mg daily, and chlorthalidone 25 mg daily, his blood pressure today is 164/98 mm Hg. The patient is obese with a body mass index of 36 kg/m² and a neck circumference of 44 cm (17.5 inches). His wife reports that he snores loudly, gasps for air during sleep, and frequently stops breathing for brief intervals. The patient complains of unrefreshing sleep, morning headaches, and severe daytime somnolence, scoring 16/24 on the Epworth Sleepiness Scale. Physical examination reveals an enlarged tongue and crowded oropharynx (Mallampati class IV); cardiopulmonary examination is unremarkable. Basic metabolic panel reveals normal electrolytes, BUN, creatinine, and normal plasma aldosterone and renin levels. Which of the following is the most appropriate next diagnostic step to evaluate the primary underlying etiology of this patient\'s resistant hypertension?',
    options: [
      {
        text: 'Overnight in-laboratory polysomnography (or home sleep apnea testing)',
        explanation: 'This obese male patient presents with classic TREATMENT-RESISTANT HYPERTENSION, defined as blood pressure that remains uncontrolled (>= 130/80 mm Hg) despite the concurrent use of three antihypertensive agents of different classes at optimal doses (including a long-acting thiazide-like diuretic, a calcium channel blocker, and an ACEi/ARB). In clinical practice, OBSTRUCTIVE SLEEP APNEA (OSA) IS THE SINGLE MOST COMMON SECONDARY CAUSE OF RESISTANT HYPERTENSION, identified in up to 70% to 85% of resistant hypertension patients. Pathophysiology involves repetitive nocturnal upper airway collapse leading to intermittent hypoxemia, hypercapnia, and frequent micro-arousals. This stimulates intense, sustained sympathetic nervous system activation, endothelial dysfunction, systemic vasoconstriction, and chronic activation of the renin-angiotensin-aldosterone axis that persists throughout daytime hours. Clinical clues include loud snoring, witnessed apneas, morning headaches, daytime fatigue, large neck circumference, and high STOP-BANG scores. The definitive diagnostic gold standard is OVERNIGHT POLYSOMNOGRAPHY (PSG) or Home Sleep Apnea Testing (HSAT). Treatment with Continuous Positive Airway Pressure (CPAP) significantly reduces 24-hour ambulatory blood pressure and reduces cardiovascular risk.'
      },
      {
        text: 'Twenty-four-hour urinary free cortisol excretion to rule out Cushing syndrome',
        explanation: 'While Cushing syndrome causes hypertension, the absence of proximal muscle weakness, purple abdominal striae, or facial plethora makes OSA vastly more probable.'
      },
      {
        text: 'Renal artery duplex ultrasonography to evaluate for renal artery stenosis',
        explanation: 'Renal artery stenosis is an important secondary cause, but the classic habitus, witnessed nocturnal choking apneas, and heavy snoring point overwhelmingly to OSA as the primary etiology.'
      },
      {
        text: 'Plasma fractionated free metanephrines to evaluate for pheochromocytoma',
        explanation: 'Pheochromocytoma presents with the classic paroxysmal triad of episodic headaches, sweating, and tachycardia; it is far rarer (< 0.5%) than obstructive sleep apnea (> 70%).'
      },
      {
        text: 'Add oral spironolactone 25 mg daily and perform no further diagnostic investigations',
        explanation: 'While spironolactone is an effective fourth-line medication for resistant hypertension, failing to diagnose and treat severe obstructive sleep apnea leaves the primary driver untreated.'
      }
    ]
  },
  {
    code: 'op-c-s3-0166',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Chronic Non-Cancer Pain and CDC Opioid Prescribing Safety Protocols',
    subtopic: 'Prescription Drug Monitoring Program (PDMP) and Naloxone Co-Prescribing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Chronic Non-Cancer Pain (CDC Opioid Prescribing Guidelines 2022): - FIRST-LINE: NON-PHARMACOLOGIC THERAPY (physical therapy, CBT, exercise) AND NON-OPIOID PHARMACOTHERAPY (NSAIDs, topical agents, duloxetine, pregabalin). - IF OPIOIDS ARE CONSIDERED: 1. Review state PRESCRIPTION DRUG MONITORING PROGRAM (PDMP) data; 2. Obtain BASELINE URINE DRUG SCREEN (UDS) to screen for illicit substances and undisclosed opioids; 3. Establish a formal WRITTEN PATIENT-PRESCRIBER TREATMENT AGREEMENT; 4. CO-PRESCRIBE NALOXONE if high overdose risk (e.g., MME >= 50/day, concurrent benzodiazepines, history of substance use disorder).',
    citation: "Dowell D, et al. CDC Clinical Practice Guideline for Prescribing Opioids for Pain - United States, 2022. MMWR Recomm Rep. 2022;71(3):1-95. PMID: 36327391.",
    stem:
      'A 48-year-old construction worker presents to an established primary care clinic requesting an escalation of his chronic pain medications. He has a 5-year history of chronic axial lumbar back pain without radiculopathy following a disc herniation. Over the past 6 months, he has been taking oral oxycodone 10 mg four times daily (60 morphine milligram equivalents [MME]/day) prescribed by his former physician, who recently retired. He states that the pain is worsening and that his current dose "does not last through the work day." He has not participated in physical therapy. The patient also takes oral alprazolam 1 mg twice daily for panic attacks. Which of the following represents the most appropriate safety and risk-mitigation protocol required before considering any continuation or modification of opioid therapy for this patient according to CDC guidelines?',
    options: [
      {
        text: 'Query the state Prescription Drug Monitoring Program (PDMP), obtain a baseline urine drug screen, discuss tapering concurrent benzodiazepines, and co-prescribe naloxone',
        explanation: 'The CDC Clinical Practice Guideline for Prescribing Opioids for Pain outlines rigorous risk mitigation and safety protocols for patients receiving chronic opioid therapy: (1) PRESCRIPTION DRUG MONITORING PROGRAM (PDMP): Clinicians must review state PDMP data at baseline and periodically to verify controlled substance history and detect dangerous multi-provider prescribing or overlapping controlled medications; (2) URINE DRUG SCREENING (UDS): Baseline and periodic toxicology screening is mandatory to verify adherence and detect undisclosed controlled substances or illicit opioids (fentanyl, heroin); (3) DANGEROUS DRUG COMBINATIONS: Co-prescribing OPIOIDS AND BENZODIAZEPINES (such as oxycodone and alprazolam) carries a catastrophic 4- to 10-fold increased risk of fatal respiratory arrest; clinicians should formulate a collaborative plan to safely taper and discontinue benzodiazepines; and (4) NALOXONE CO-PRESCRIBING: Naloxone must be co-prescribed whenever patients are at elevated risk for opioid overdose—defined as receiving opioid dosages >= 50 Morphine Milligram Equivalents (MME)/day (patient is on 60 MME/day), concurrent benzodiazepine use, or history of substance use disorder. Non-opioid modalities (physical therapy, NSAIDs, duloxetine) should be prioritized.'
      },
      {
        text: 'Immediately double the oxycodone dosage to 20 mg four times daily and continue alprazolam without checking databases',
        explanation: 'Escalating opioids to 120 MME/day while maintaining benzodiazepines without checking the PDMP violates standard of care and dramatically increases fatal overdose mortality.'
      },
      {
        text: 'Abruptly terminate all oxycodone prescriptions today without a taper and dismiss the patient from the clinic',
        explanation: 'Abrupt cessation of chronic opioids triggers severe acute withdrawal, destabilizes patients, and drives them to seek dangerous illicit street opioids like illicit fentanyl.'
      },
      {
        text: 'Refuse to perform a urine drug screen because testing implies distrust and damages the therapeutic alliance',
        explanation: 'Toxicology screening is an objective, universal patient safety standard endorsed by the CDC, not an indicator of personal mistrust.'
      },
      {
        text: 'Prescribe long-acting methadone without performing an electrocardiogram or reviewing concurrent sedatives',
        explanation: 'Methadone carries severe risks of QTc prolongation, torsades de pointes, and unpredictable accumulation; initiating it without ECG and risk evaluation is hazardous.'
      }
    ]
  },
  {
    code: 'op-c-s3-0167',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'Nervous System',
    topic: 'Dementia with Lewy Bodies and Severe Neuroleptic Sensitivity',
    subtopic: 'Visual Hallucinations, REM Sleep Disorder, and Contraindication to First-Generation Antipsychotics',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Dementia with Lewy Bodies (DLB): - CORE CLINICAL TETRAD: 1. FLUCTUATING COGNITION (marked variations in attention and alertness); 2. RECURRENT DETAILED VISUAL HALLUCINATIONS (well-formed people or animals); 3. REM SLEEP BEHAVIOR DISORDER (acting out dreams during sleep); 4. SPONTANEOUS PARKINSONISM (rigidity, bradykinesia, shuffling gait). - CRITICAL CLINICAL WARNING: SEVERE NEUROLEPTIC SENSITIVITY. Administration of ANTIPSYCHOTICS (especially first-generation like haloperidol, but also high-dose atypicals like risperidone) triggers catastrophic, irreversible parkinsonism, acute catatonia, impaired consciousness, and a 2- to 3-fold increase in mortality. Preferred treatment for psychosis: Cholinesterase inhibitors (DONEPEZIL); if refractory, very low-dose PIMAVANSERIN or QUETIAPINE.',
    citation: "McKeith IG, et al. Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB Consortium. Neurology. 2017;89(1):88-100. PMID: 28592453.",
    stem:
      'A 73-year-old man is brought to the geriatric psychiatry clinic by his wife because of progressive cognitive decline and hallucinations over the past 14 months. His wife describes marked fluctuations in his mental clarity: on some days he is alert, sharp, and can complete the daily crossword puzzle, while on other days he is somnolent, staring into space, and unable to hold a conversation. Over the past 6 months, he has had recurrent, vivid, detailed visual hallucinations of small children and cats playing in his living room, which he describes in calm detail. In addition, his wife reports that for the past 4 years, he has frequently kicked, punched, and shouted loudly during his sleep ("acting out violent nightmares"). On physical examination, the patient is pleasant and cooperative. Neurological examination reveals masked facial expression, mild bilateral cogwheel rigidity in the wrists, and a slow, shuffling gait with decreased arm swing. There is no resting tremor. Brain MRI shows mild generalized cortical atrophy without focal infarcts. Which of the following classes of medications is STRICTLY CONTRAINDICATED in this patient due to the risk of precipitating catastrophic, life-threatening neurological deterioration?',
    options: [
      {
        text: 'First-generation and high-potency antipsychotics (such as haloperidol or fluphenazine)',
        explanation: 'This patient presents with textbook DEMENTIA WITH LEWY BODIES (DLB), the second most common neurodegenerative dementia in older adults. Pathology is characterized by abnormal cytoplasmic aggregates of alpha-synuclein (Lewy bodies) in cortical and subcortical neurons. The formal DLB Consortium diagnostic criteria require progressive cognitive decline plus at least two of the four core clinical features: (1) Fluctuating cognition with pronounced variations in attention and alertness; (2) Recurrent, well-formed, detailed visual hallucinations; (3) REM Sleep Behavior Disorder (loss of normal REM muscle atonia leading to dream-enactment behaviors); and (4) Spontaneous parkinsonism (bradykinesia, rigidity, masked facies). CARDINAL CLINICAL HAZARD: Patients with DLB possess extreme NEUROLEPTIC SENSITIVITY, occurring in over 50% of patients. Administering typical first-generation antipsychotics (like haloperidol) or high-potency second-generation agents (like risperidone) can precipitate catastrophic, irreversible parkinsonism, acute rigidity, catatonia, autonomic collapse, and sudden death. Visual hallucinations in DLB are managed first-line with CHOLINESTERASE INHIBITORS (donepezil or rivastigmine). If antipsychotic therapy is unavoidable for severe distressing psychosis, low-dose quetiapine or pimavanserin (a selective 5-HT2A inverse agonist without dopaminergic blockade) is used with extreme caution.'
      },
      {
        text: 'Cholinesterase inhibitors (such as donepezil or rivastigmine)',
        explanation: 'Cholinesterase inhibitors are the preferred first-line pharmacotherapy for both cognitive decline and visual hallucinations in dementia with Lewy bodies.'
      },
      {
        text: 'Melatonin or low-dose clonazepam for REM sleep behavior disorder',
        explanation: 'Melatonin is the preferred first-line, safe therapy for REM sleep behavior disorder; clonazepam is an effective alternative.'
      },
      {
        text: 'Selective serotonin reuptake inhibitors (such as sertraline)',
        explanation: 'SSRIs are well-tolerated and safe for managing comorbid depression or anxiety in patients with DLB.'
      },
      {
        text: 'Carbidopa-levodopa administered at low doses for severe motor bradykinesia',
        explanation: 'Carbidopa-levodopa can be cautiously utilized to improve motor mobility in DLB, though it must be titrated carefully to avoid worsening hallucinations.'
      }
    ]
  },
  {
    code: 'op-c-s3-0168',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Chronic Kidney Disease Mineral and Bone Disorder (CKD-MBD) Hierarchy',
    subtopic: 'Hyperphosphatemia, Dietary Phosphate Restriction, and Non-Calcium Binders (Sevelamer)',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage CKD-Mineral and Bone Disorder (CKD-MBD in Stage 4/5 CKD): - PATHOPHYSIOLOGY: Declining GFR leads to PHOSPHATE RETENTION -> stimulates FGF-23 and suppresses renal 1-alpha-hydroxylase -> DECREASED 1,25-(OH)2 VITAMIN D (calcitriol) -> HYPOCALCEMIA. Hypocalcemia + hyperphosphatemia + low calcitriol drive SECONDARY HYPERPARATHYROIDISM (elevated PTH). - STEPWISE MANAGEMENT: 1. DIETARY PHOSPHATE RESTRICTION (first-line); 2. INTESTINAL PHOSPHATE BINDERS: Prefer NON-CALCIUM BINDERS (SEVELAMER CARBONATE, LANTHANUM CARBONATE) over calcium acetate/carbonate (calcium-based binders accelerate vascular calcification and cardiovascular mortality); 3. ACTIVE VITAMIN D (Calcitriol) or CALCIMIMETICS (Cinacalcet) for persistent high PTH.',
    citation: "Ketteler M, et al. Executive summary of the 2017 KDIGO Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) Guideline Update: what's changed and why it matters. Kidney Int. 2017;92(1):26-36. PMID: 28646995.",
    stem:
      'A 61-year-old man with stage 4 chronic kidney disease secondary to diabetic nephropathy (estimated GFR 22 mL/min/1.73 m²) presents to the nephrology clinic for management of worsening laboratory abnormalities. His current medications include losartan 50 mg daily, atorvastatin 40 mg daily, and furosemide 40 mg daily. He has no bone pain, fractures, or muscle weakness. His blood pressure is 134/82 mm Hg. Laboratory testing reveals: serum calcium 8.8 mg/dL (normal 8.5-10.5 mg/dL), serum phosphorus 6.4 mg/dL (normal 2.5-4.5 mg/dL), 25-hydroxyvitamin D 34 ng/mL, serum intact parathyroid hormone (iPTH) 240 pg/mL (target for stage 4 CKD approximately 70-110 pg/mL), and serum creatinine 2.8 mg/dL. An abdominal radiograph obtained for unrelated reasons shows prominent, linear calcification outlining the abdominal aorta and iliac vessels. In addition to counseling the patient on strict dietary phosphate restriction, which of the following is the most appropriate next pharmacologic intervention to control his hyperphosphatemia and secondary hyperparathyroidism?',
    options: [
      {
        text: 'Initiate oral sevelamer carbonate with each meal',
        explanation: 'This patient with stage 4 CKD presents with classic CHRONIC KIDNEY DISEASE-MINERAL AND BONE DISORDER (CKD-MBD), manifested by hyperphosphatemia (6.4 mg/dL), normal-low calcium, and secondary hyperparathyroidism (iPTH 240 pg/mL). As GFR declines below 30 mL/min, the kidneys can no longer excrete the daily dietary phosphorus load, resulting in hyperphosphatemia. High phosphorus directly stimulates PTH secretion and binds ionized calcium. In addition, failing nephrons lack 1-alpha-hydroxylase, causing calcitriol (1,25-[OH]2D) deficiency, which prevents intestinal calcium absorption. Unchecked secondary hyperparathyroidism leads to renal osteodystrophy (osteitis fibrosa cystica, bone resorption) and severe metastatic cardiovascular calcification. KDIGO guidelines mandate: (1) Dietary phosphate restriction (limiting processed foods, dark sodas, and dairy); and (2) INTESTINAL PHOSPHATE BINDERS taken with meals. Crucially, in patients with documented vascular calcification (visible aortic calcification on plain film), NON-CALCIUM-BASED PHOSPHATE BINDERS (specifically SEVELAMER CARBONATE or lanthanum carbonate) are strongly preferred over calcium-based binders (such as calcium acetate or calcium carbonate). Calcium-based binders contribute to positive calcium balance and accelerate fatal arterial calcification, whereas sevelamer binds phosphate in the intestinal lumen without absorbing calcium.'
      },
      {
        text: 'Initiate high-dose oral calcium carbonate tablets with each meal',
        explanation: 'Calcium-based phosphate binders promote positive calcium balance, accelerating vascular calcification and cardiovascular mortality in patients with pre-existing aortic calcification.'
      },
      {
        text: 'Administer high-dose ergocalciferol (vitamin D2) 50,000 IU weekly',
        explanation: 'His 25-OH vitamin D level is already normal (34 ng/mL); the issue is failure of renal 1-alpha-hydroxylation, which nutritional vitamin D2 cannot solve.'
      },
      {
        text: 'Perform an immediate total parathyroidectomy with forearm autotransplantation',
        explanation: 'Parathyroidectomy is reserved for tertiary, autonomous hyperparathyroidism with severe refractory hypercalcemia and bone fractures, not early secondary hyperparathyroidism.'
      },
      {
        text: 'Prescribe oral aluminum hydroxide antacids with every meal indefinitely',
        explanation: 'Aluminum-containing binders cause severe aluminum neurotoxicity (dialysis encephalopathy) and osteomalacia, and are strictly contraindicated for long-term use.'
      }
    ]
  },
  {
    code: 'op-c-s3-0169',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Celiac Disease Long-Term Surveillance and Complications',
    subtopic: 'Anti-tTG IgA Monitoring, Nutritional Deficiencies, and Enteropathy-Associated T-Cell Lymphoma',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Long-Term Surveillance in Celiac Disease (ACG Guidelines): - PRIMARY THERAPY: STRICT LIFELONG GLUTEN-FREE DIET (eliminates wheat, barley, rye). - MONITORING RESPONSE & ADHERENCE: SERUM ANTI-TISSUE TRANSGLUTAMINASE (ANTI-tTG) IgA ANTIBODY TITERS at 6 and 12 months, then annually until normalized (reflects dietary compliance and mucosal healing). - SCREENING FOR ASSOCIATED COMPLICATIONS: 1. SCREENING DEXA SCAN for osteoporosis/osteopenia; 2. SCREEN FOR COEXISTING AUTOIMMUNE DISEASES (Hashimoto thyroiditis, Type 1 diabetes); 3. RECURRENT/REFRACTORY SYMPTOMS: Screen for ENTEROPATHY-ASSOCIATED T-CELL LYMPHOMA (EATL) or ulcerative jejunitis via repeat endoscopy/CT enterography.',
    citation: "Rubio-Tapia A, et al. ACG Clinical Guidelines: Diagnosis and Management of Celiac Disease. Am J Gastroenterol. 2023;118(1):59-76. PMID: 36603128.",
    stem:
      'A 34-year-old woman with biopsy-proven celiac disease diagnosed 1 year ago presents to the gastroenterology clinic for her scheduled annual follow-up visit. Following consultation with a specialized registered dietitian, she adopted a strict gluten-free diet, avoiding all wheat, rye, and barley products. She reports complete resolution of her previous chronic diarrhea, abdominal bloating, and fatigue, and her bowel movements are now formed and normal once daily. Her weight has increased by 4 kg. Physical examination reveals a healthy-appearing woman with normal vital signs, a soft non-tender abdomen, and no rashes. Laboratory evaluation reveals: hemoglobin 13.2 g/dL, serum ferritin 45 ng/mL (up from 8 ng/mL at diagnosis), serum 25-hydroxyvitamin D 38 ng/mL, and normal comprehensive metabolic panel. Which of the following is the most appropriate laboratory test to objectively assess ongoing dietary adherence and monitor mucosal recovery in this patient?',
    options: [
      {
        text: 'Serum anti-tissue transglutaminase (anti-tTG) IgA antibody titer',
        explanation: 'Under the American College of Gastroenterology (ACG) Celiac Disease Guidelines, patients with established celiac disease require structured long-term multidisciplinary monitoring. The cornerstone of management is strict lifelong adherence to a gluten-free diet (GFD). The primary, recommended non-invasive laboratory biomarker to objectively evaluate dietary adherence and mucosal response over time is the SERUM ANTI-TISSUE TRANSGLUTAMINASE (ANTI-tTG) IgA ANTIBODY TITER. Following complete gluten exclusion, serum anti-tTG IgA titers decline progressively over several months and typically normalize within 6 to 12 months, correlating closely with histologic healing of the duodenal mucosa. Guidelines recommend checking anti-tTG IgA titers at 6 and 12 months following diagnosis and annually thereafter. A persistently elevated or rising titer indicates ongoing gluten ingestion (most frequently inadvertent contamination in processed foods or cross-contact) or, rarely, refractory celiac disease. Additional long-term health maintenance in celiac disease includes: baseline bone mineral density screening (DEXA) for osteoporosis, periodic nutritional screening (iron, folate, B12, vitamin D), and screening for associated autoimmune conditions (autoimmune thyroiditis and type 1 diabetes).'
      },
      {
        text: 'Routine surveillance esophagogastroduodenoscopy with repeat duodenal biopsies every 12 months',
        explanation: 'Routine annual endoscopic biopsies are not recommended in patients who achieve complete clinical and serologic remission; endoscopy is reserved for refractory or recurrent symptoms.'
      },
      {
        text: 'Repeat human leukocyte antigen testing for HLA-DQ2 and HLA-DQ8 alleles',
        explanation: 'HLA testing is a permanent genetic marker utilized only for initial rule-out; HLA alleles do not change over time and have zero role in monitoring dietary adherence.'
      },
      {
        text: 'Twenty-four-hour stool fecal fat quantification study',
        explanation: 'Fecal fat testing evaluates gross malabsorption and steatorrhea; it is insensitive to mild gluten exposure in a clinically asymptomatic patient.'
      },
      {
        text: 'Serum anti-Saccharomyces cerevisiae antibodies (ASCA) titer',
        explanation: 'ASCA is a serologic marker evaluated in inflammatory bowel disease (Crohn disease); it has no diagnostic or monitoring role in celiac disease.'
      }
    ]
  },
  {
    code: 'op-c-s3-0170',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Peripheral Artery Disease Medical Management and Cilostazol Contraindication',
    subtopic: 'Supervised Exercise Therapy and Absolute Contraindication in Heart Failure',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Peripheral Artery Disease (PAD / Intermittent Claudication - ACC/AHA Guidelines): - FOUNDATIONAL MEDICAL THERAPY: 1. Antiplatelet (Aspirin 81 mg or Clopidogrel 75 mg); 2. High-intensity Statin (Atorvastatin 80 mg); 3. Blood pressure control (ACEi/ARB); 4. Smoking cessation. - FIRST-LINE FUNCTIONAL INTERVENTION: SUPERVISED EXERCISE THERAPY (SET - minimum 30-45 min, 3x/week for 12 weeks). - PHARMACOTHERAPY FOR CLAUDICATION: CILOSTAZOL (phosphodiesterase-3 inhibitor: causes vasodilation and antiplatelet activity, improving walking distance). - ABSOLUTE CONTRAINDICATION TO CILOSTAZOL: HEART FAILURE OF ANY SEVERITY (phosphodiesterase-3 inhibitors like milrinone/cilostazol increase ventricular arrhythmias and mortality in heart failure).',
    citation: "Gerhard-Herman MD, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease: Executive Summary. Circulation. 2017;135(12):e686-e725. PMID: 27840332.",
    stem:
      'A 64-year-old man presents with reproducible, aching pain and cramping in both calves that begins after walking approximately one block on level ground and resolves completely within 5 minutes of standing still. His medical history includes ischemic cardiomyopathy with heart failure with reduced ejection fraction (NYHA class II, left ventricular ejection fraction 32%), hypertension, and a 40-pack-year smoking history. Current medications include carvedilol 25 mg twice daily, lisinopril 20 mg daily, spironolactone 25 mg daily, furosemide 40 mg daily, atorvastatin 80 mg daily, and aspirin 81 mg daily. Physical examination reveals faint, 1+ dorsalis pedis pulses bilaterally with mild hair loss over the lower shins. The resting ankle-brachial index (ABI) is 0.64 in the right leg and 0.68 in the left leg (normal 1.00-1.40). The patient states that his calf pain is severely limiting his daily activities, and asks if there is a medication that can improve his walking distance. Which of the following is the most appropriate management regarding the use of cilostazol in this patient?',
    options: [
      {
        text: 'Cilostazol is strictly contraindicated due to his underlying heart failure, and he should be enrolled in a supervised exercise therapy program',
        explanation: 'This patient has documented symptomatic peripheral artery disease (PAD) with intermittent claudication (ABI 0.64). The management of PAD encompasses two goals: cardiovascular risk reduction (high-intensity statin, antiplatelet, BP control, smoking cessation) and symptom relief. For lifestyle-limiting claudication, the first-line non-pharmacologic treatment is a structured SUPERVISED EXERCISE THERAPY (SET) program (treadmill walking to moderate claudication pain, resting, and resuming for 30-45 minutes, 3 times weekly for 12 weeks), which markedly improves collateral circulation and pain-free walking distance. CILOSTAZOL is an oral phosphodiesterase-3 (PDE-3) inhibitor that promotes intracellular cAMP accumulation, causing vascular smooth muscle vasodilation and inhibiting platelet aggregation, with proven efficacy in extending maximal walking distance in claudication. HOWEVER, CILOSTAZOL CARRIES AN ABSOLUTE FDA BLACK-BOX CONTRAINDICATION: IT IS STRICTLY CONTRAINDICATED IN PATIENTS WITH HEART FAILURE OF ANY DEGREE OR EJECTION FRACTION REDUCTION. PDE-3 inhibitors (classically demonstrated in the PROMISE trial with milrinone) increase intracellular calcium in myocytes, precipitating fatal ventricular arrhythmias and significantly increasing all-cause mortality in heart failure. Therefore, cilostazol cannot be used in this patient; supervised exercise therapy is the primary treatment of choice.'
      },
      {
        text: 'Initiate oral cilostazol 100 mg twice daily before considering exercise therapy',
        explanation: 'Cilostazol carries an absolute FDA black-box contraindication in heart failure due to a proven increase in fatal ventricular arrhythmias and mortality.'
      },
      {
        text: 'Discontinue aspirin and initiate oral pentoxifylline monotherapy',
        explanation: 'Pentoxifylline has marginal, clinically insignificant efficacy in claudication, is not recommended over exercise therapy, and aspirin must be continued for secondary prevention.'
      },
      {
        text: 'Refer for immediate emergency bilateral superficial femoral artery surgical bypass',
        explanation: 'Invasive revascularization is reserved for lifestyle-disabling claudication that fails guideline-directed medical and exercise therapy, or for chronic limb-threatening ischemia (rest pain/ulcers).'
      },
      {
        text: 'Discontinue carvedilol immediately because beta-blockers worsen peripheral artery disease',
        explanation: 'Extensive randomized trials have shown that beta-blockers do not worsen intermittent claudication and are mandatory mortality-reducing GDMT in heart failure with reduced EF.'
      }
    ]
  },
  {
    code: 'op-c-s3-0171',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Atrial Fibrillation Management in Heart Failure with Reduced Ejection Fraction',
    subtopic: 'Early Rhythm Control with Catheter Ablation vs Rate Control (CASTLE-AF Trial)',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Atrial Fibrillation with Heart Failure with Reduced Ejection Fraction (HFrEF): - CLINICAL IMPACT: Loss of atrial "kick" (up to 20-30% of cardiac output) and tachycardia-induced cardiomyopathy severely worsen HFrEF. - RHYTHM VS RATE CONTROL IN HFrEF (CASTLE-AF & EAST-AFNET 4 Trials): CATHETER ABLATION FOR ATRIAL FIBRILLATION (pulmonary vein isolation) significantly REDUCES ALL-CAUSE MORTALITY, HEART FAILURE HOSPITALIZATIONS, AND IMPROVES LVEF compared to medical rate control in patients with symptomatic HFrEF. - PHARMACOLOGIC RHYTHM CONTROL OPTIONS IN HFrEF: Only AMIODARONE or DOFETILIDE are safe (Class IC antiarrhythmics [flecainide, propafenone] and dronedarone are CONTRAINDICATED in structural heart disease / low EF due to proarrhythmia).',
    citation: "Marrouche NF, et al. Catheter Ablation for Atrial Fibrillation with Heart Failure. N Engl J Med. 2018;378(5):417-427. PMID: 29385358.",
    stem:
      'A 61-year-old man with ischemic cardiomyopathy and heart failure with reduced ejection fraction (LVEF 28%) presents to the electrophysiology clinic for evaluation of persistent atrial fibrillation. Despite adherence to guideline-directed medical therapy (sacubitril-valsartan, carvedilol 25 mg twice daily, spironolactone 25 mg daily, empagliflozin 10 mg daily, and apixaban 5 mg twice daily), he experiences persistent dyspnea on exertion and palpitations (NYHA functional class III). His resting heart rate is 78/min on carvedilol, but ambulation causes rapid heart rates up to 135/min. An echocardiogram confirms diffuse left ventricular hypokinesis with an EF of 28% and a moderately dilated left atrium (46 mm). The electrophysiologist discusses rhythm control strategies. Which of the following therapeutic interventions has the strongest clinical trial evidence for improving left ventricular ejection fraction, reducing heart failure hospitalizations, and lowering all-cause mortality in this patient?',
    options: [
      {
        text: 'Radiofrequency catheter ablation with pulmonary vein isolation',
        explanation: 'In patients with concomitant heart failure with reduced ejection fraction (HFrEF) and symptomatic atrial fibrillation, managing the arrhythmia has major prognostic implications. The landmark CASTLE-AF (Catheter Ablation for Atrial Fibrillation with Heart Failure) randomized controlled trial and subsequent trials demonstrated that CATHETER ABLATION (pulmonary vein isolation) is significantly superior to medical rate or rhythm therapy in patients with HFrEF and coexisting AF. Catheter ablation achieved a profound, statistically significant reduction in the composite primary endpoint of ALL-CAUSE MORTALITY AND HOSPITALIZATION FOR WORSENING HEART FAILURE (HR 0.62), while dramatically improving left ventricular ejection fraction (average absolute improvement of +8% to +10%), exercise capacity, and quality of life. Loss of coordinated atrial contraction ("atrial kick") deprives the failing ventricle of up to 25% of end-diastolic filling, while irregular ventricular conduction impairs myocardial mechanics. When antiarrhythmic drugs are considered in HFrEF, only amiodarone and dofetilide are permitted; Class IC drugs (flecainide, propafenone) and dronedarone are strictly contraindicated due to lethal ventricular proarrhythmia.'
      },
      {
        text: 'Initiation of oral flecainide acetate therapy combined with exercise rate control',
        explanation: 'Class IC antiarrhythmics like flecainide are strictly contraindicated in structural heart disease and low ejection fraction due to excessive mortality from ventricular tachycardia (CAST trial).'
      },
      {
        text: 'Atrioventricular node surgical ablation without pacemaker implantation',
        explanation: 'Ablating the AV node without an indwelling permanent pacemaker causes complete asystolic cardiac arrest and immediate death.'
      },
      {
        text: 'Oral dronedarone therapy targeting permanent sinus rhythm restoration',
        explanation: 'Dronedarone is strictly contraindicated in patients with symptomatic heart failure or LVEF <= 35% because the ANDROMEDA trial showed a doubling of all-cause mortality.'
      },
      {
        text: 'Accept chronic atrial fibrillation and increase carvedilol until resting heart rate is below 45/min',
        explanation: 'Excessive bradycardia below 50/min impairs cardiac output and exercise tolerance without restoring the hemodynamic benefits of sinus rhythm.'
      }
    ]
  },
  {
    code: 'op-c-s3-0172',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Restless Legs Syndrome First-Line Pharmacotherapy and Augmentation Risk',
    subtopic: 'Alpha-2-Delta Ligands (Gabapentin) vs Dopamine Agonist Augmentation Phenomenon',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Restless Legs Syndrome (RLS / Willis-Ekbom Disease - AASM Guidelines): - DIAGNOSTIC CRITERIA (URGE): Urge to move legs usually accompanied by unpleasant sensations; Rest worsens symptoms; Getting up / movement relieves symptoms; Evening / night predominance. - INITIAL WORKUP: CHECK SERUM FERRITIN (iron is cofactor for dopamine synthesis in brain; oral iron supplementation indicated if ferritin < 75 ng/mL). - FIRST-LINE PHARMACOTHERAPY: ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (GABAPENTIN ENACARBIL, GABAPENTIN, or PREGABALIN) are NOW PREFERRED over dopamine agonists. - PHARMACOLOGIC WARNING: DOPAMINE AGONISTS (Pramipexole, Ropinirole) cause DRUG-INDUCED AUGMENTATION (paradoxical worsening of symptoms occurring earlier in the day with greater intensity and anatomical spread).',
    citation: "Winkelman JW, et al. Practice guideline summary: Treatment of restless legs syndrome in adults: Report of the Guideline Development, Dissemination, and Implementation Subcommittee of the AAN. Neurology. 2016;87(24):2585-2593. PMID: 27856776.",
    stem:
      'A 42-year-old woman presents to the clinic complaining of an irresistible urge to move her legs that has disrupted her sleep for the past 6 months. She describes an uncomfortable, crawling, "creepy-crawly" sensation deep within both calves that occurs exclusively when she lies down in bed at night or sits relaxing on the couch in the evening. The sensations and urge to move are completely relieved when she gets out of bed and paces around the bedroom, but recur immediately when she lies back down. She has severe difficulty falling asleep and feels exhausted during the day. Her medical history is unremarkable, and she takes no medications. Physical and neurological examinations are completely normal. Complete blood count demonstrates a normal hemoglobin of 13.4 g/dL. Serum ferritin is 110 ng/mL (normal > 75 ng/mL), and renal function is normal. Which of the following is the most appropriate first-line pharmacologic therapy for this patient?',
    options: [
      {
        text: 'Oral gabapentin (or gabapentin enacarbil / pregabalin)',
        explanation: 'This patient presents with classic RESTLESS LEGS SYNDROME (RLS, also known as Willis-Ekbom disease). The diagnosis is strictly clinical, meeting all four diagnostic criteria: (1) An irresistible urge to move the legs, usually accompanied by uncomfortable paresthesias deep in the limbs; (2) Symptoms begin or worsen during periods of rest or inactivity; (3) Symptoms are temporarily relieved by movement (walking, stretching); and (4) Symptoms occur predominantly or exclusively in the evening or at night. The initial workup must always include checking a SERUM FERRITIN level; brain iron deficiency disrupts striatal dopamine synthesis, and oral iron repletion is indicated if ferritin is < 75 ng/mL (ferritin is normal at 110 ng/mL here). Under updated guidelines from the American Academy of Sleep Medicine (AASM) and American Academy of Neurology (AAN), ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (GABAPENTIN, GABAPENTIN ENACARBIL, or PREGABALIN) ARE THE PREFERRED FIRST-LINE PHARMACOTHERAPY for moderate-to-severe chronic RLS. Historically, dopamine agonists (pramipexole, ropinirole) were widely used; however, dopamine agonists are no longer preferred first-line because long-term use triggers DRUG-INDUCED AUGMENTATION in up to 50% to 70% of patients—a severe, paradoxical worsening where symptoms appear earlier in the day, progress more rapidly, and spread to the upper extremities.'
      },
      {
        text: 'Oral pramipexole starting at high doses to rapidly saturate striatal dopamine receptors',
        explanation: 'Dopamine agonists carry a very high risk of drug-induced augmentation (paradoxical symptom worsening) and impulse control disorders, and are no longer first-line.'
      },
      {
        text: 'Oral carbidopa-levodopa administered immediately before bedtime',
        explanation: 'Carbidopa-levodopa carries the highest rate of rapid, severe augmentation (> 70%) among dopaminergic agents and should not be used for daily chronic RLS.'
      },
      {
        text: 'Oral clonazepam as primary monotherapy for restless legs syndrome',
        explanation: 'Benzodiazepines do not reduce the underlying sensory urge or periodic limb movements of RLS and cause daytime grogginess, dependence, and fall risks.'
      },
      {
        text: 'Initiate intravenous iron dextran infusion despite normal serum ferritin levels',
        explanation: 'Intravenous iron is indicated when oral iron fails in patients with low ferritin (< 75-100 ng/mL); her ferritin is normal (110 ng/mL), making IV iron unnecessary.'
      }
    ]
  },
  {
    code: 'op-c-s3-0173',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Topical Ophthalmic Medications and Systemic Cardiovascular Toxicity',
    subtopic: 'Ophthalmic Timolol Nasolacrimal Absorption, Severe Bradycardia, and Punctal Occlusion',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Systemic Adverse Effects of Topical Ophthalmic Drops: - OPHTHALMIC TIMOLOL (non-selective beta-adrenergic antagonist for glaucoma): Drains through the nasolacrimal duct into the highly vascular nasal mucosa, where it undergoes DIRECT SYSTEMIC ABSORPTION BYPASSING FIRST-PASS HEPATIC METABOLISM. - SYSTEMIC ADVERSE EFFECTS: SEVERE SYMPTOMATIC BRADYCARDIA, HEART BLOCK, SYNCOPE, BRONCHOSPASM (in asthma/COPD), and depression. - TECHNIQUE TO PREVENT SYSTEMIC ABSORPTION: PUNCTAL OCCLUSION (applying digital pressure with fingertips over the medial canthus / lacrimal sac for 1 to 2 minutes immediately following eyedrop instillation) or simple eyelid closure.',
    citation: "Zimmerman TJ, et al. Timolol: a new drug for the treatment of glaucoma? Int Ophthalmol Clin. 1980;20(3):147-152. PMID: 7429788.",
    stem:
      'A 74-year-old woman presents to the emergency department reporting recurrent episodes of lightheadedness, profound fatigue, and an episode of near-syncope while walking in her garden this morning. She has a medical history of primary open-angle glaucoma diagnosed 3 weeks ago, for which an ophthalmologist prescribed topical eyedrops. She takes no oral medications and has no history of cardiovascular disease. On physical examination, the patient is alert and pale. Her blood pressure is 108/64 mm Hg, and her heart rate is 36/min and regular. Cardiopulmonary examination reveals marked bradycardia without murmurs, rubs, or lung crackles. A 12-lead electrocardiogram demonstrates sinus bradycardia at 35/min with a PR interval of 190 ms, narrow QRS complexes, and no ischemic ST-segment changes. A review of her eyedrops reveals that she instills one drop of 0.5% timolol ophthalmic solution into both eyes twice daily. Which of the following mechanisms best explains how this topical ophthalmic medication produced this patient\'s severe bradycardia, and what administration technique reduces this complication?',
    options: [
      {
        text: 'Direct absorption into the systemic circulation across the vascular nasal mucosa via the nasolacrimal duct, which can be mitigated by digital punctal occlusion',
        explanation: 'Topical ophthalmic medications are a frequently overlooked cause of severe systemic toxicity in clinical medicine. Ophthalmic timolol is a non-selective beta-adrenergic receptor antagonist widely utilized to lower intraocular pressure in open-angle glaucoma by decreasing aqueous humor production in the ciliary body. When an eyedrop is instilled onto the ocular surface, over 80% of the administered volume drains through the upper and lower lacrimal puncta into the nasolacrimal duct and empties into the inferior meatus of the nose. The nasal mucosa possesses an exceptionally dense capillary bed; topically applied timolol is absorbed directly into the systemic venous circulation, completely bypassing hepatic first-pass metabolism. This produces substantial plasma beta-blocker drug concentrations equivalent to systemic therapeutic doses, triggering severe adverse effects—including PROFOUND BRADYCARDIA, complete heart block, syncope, exacerbation of congestive heart failure, and life-threatening bronchospasm in patients with asthma or COPD. Clinicians must educate patients on the proper administration technique: PUNCTAL OCCLUSION (applying gentle digital pressure with a clean finger over the tear duct at the medial canthus of the eye for 1 to 2 minutes after drop instillation) or simple eyelid closure, which blocks nasolacrimal drainage and reduces systemic drug absorption by up to 60% to 70%.'
      },
      {
        text: 'Corneal endothelial transudation into the optic nerve subarachnoid space, which is prevented by tilting the head backward',
        explanation: 'Topical beta-blockers do not enter the intracranial subarachnoid space via the optic nerve to affect cardiovascular medullary centers.'
      },
      {
        text: 'Systemic absorption across the gastrointestinal tract following swallowing, which is prevented by drinking water after instillation',
        explanation: 'While a small fraction is swallowed, the vast majority of systemic drug entry occurs directly across the nasal mucosa before reaching the esophagus.'
      },
      {
        text: 'Idiosyncratic immune-mediated antibody activation against myocardial beta-1 receptors, which is prevented by antihistamines',
        explanation: 'Timolol toxicity is direct pharmacologic beta-1 receptor blockade from high circulating drug levels, not an autoimmune phenomenon.'
      },
      {
        text: 'Retrograde arterial flow through the ophthalmic artery into the internal carotid artery, which is prevented by cold compresses',
        explanation: 'Topical drops do not flow retrograde against high arterial pressure into the internal carotid circulation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0174',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Low-Risk Pulmonary Embolism Outpatient Management Criteria',
    subtopic: 'Simplified PESI Score = 0 and Direct Oral Anticoagulant Selection',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Low-Risk Pulmonary Embolism (PE Outpatient Eligibility - CHEST & ESC Guidelines): - RISK STRATIFICATION TOOL: SIMPLIFIED PULMONARY EMBOLISM SEVERITY INDEX (sPESI - 1 point each: Age > 80, Cancer, Chronic cardiopulmonary disease, HR >= 110, SBP < 100, SpO2 < 90%). - LOW-RISK CRITERIA (Eligible for OUTPATIENT TREATMENT OR EARLY DISCHARGE < 24 hours): 1. sPESI = 0 (low 30-day mortality < 1%); 2. Hemodynamically stable (normal BP and heart rate); 3. ABSENCE OF RIGHT VENTRICULAR STRAIN on CT or bedside echo (normal RV/LV ratio < 0.9) and normal troponin/BNP; 4. Low bleeding risk and reliable home support. - TREATMENT OF CHOICE: DIRECT ORAL ANTICOAGULANT (APIXABAN OR RIVAROXABAN as monotherapy without need for initial heparin bridging).',
    citation: "Freund Y, et al. Acute Pulmonary Embolism: A Review. JAMA. 2022;328(13):1336-1345. PMID: 36194236.",
    stem:
      'A 46-year-old previously healthy woman presents to the emergency department with a 24-hour history of mild, localized right-sided pleuritic chest pain that worsens on deep inspiration. She has had no shortness of breath at rest, syncope, hemoptysis, or leg swelling. She takes no medications other than an oral combined contraceptive pill. On physical examination, she is alert, comfortable, and in no respiratory distress. Her vital signs are: blood pressure 124/76 mm Hg, heart rate 78/min, respirations 16/min, and oxygen saturation 99% on ambient room air. Physical examination of the heart, lungs, and lower extremities is completely normal. Contrast-enhanced CT pulmonary angiography demonstrates a non-occlusive filling defect in a single subsegmental artery of the right lower lobe, with a normal right ventricular-to-left ventricular diameter ratio of 0.6 (no right ventricular strain) and no pulmonary infarction. Serum troponin I is undetectable (< 0.01 ng/mL), and serum BNP is normal at 28 pg/mL. Her calculated simplified Pulmonary Embolism Severity Index (sPESI) score is 0. The patient lives with her husband, has excellent health literacy, and has immediate access to an outpatient pharmacy and emergency medical care. Which of the following is the most appropriate management plan for this patient?',
    options: [
      {
        text: 'Initiate oral apixaban or rivaroxaban and safely discharge home for outpatient management with close primary care follow-up',
        explanation: 'Traditionally, all patients diagnosed with acute pulmonary embolism (PE) were routinely admitted to the hospital for parenteral anticoagulation. However, contemporary guidelines from the American College of Chest Physicians (CHEST) and the European Society of Cardiology (ESC) endorse SAFE OUTPATIENT MANAGEMENT OR EARLY DISCHARGE (< 24 hours) for carefully selected patients with LOW-RISK ACUTE PULMONARY EMBOLISM. Eligibility requires fulfilling strict risk-stratification criteria: (1) A SIMPLIFIED PULMONARY EMBOLISM SEVERITY INDEX (sPESI) SCORE OF 0 (the sPESI incorporates age > 80, cancer, chronic heart/lung disease, HR >= 110, SBP < 100, and SpO2 < 90%; an sPESI of 0 predicts a 30-day mortality < 1%); (2) Hemodynamic stability with completely normal vital signs; (3) ABSENCE OF RIGHT VENTRICULAR STRAIN on imaging (normal RV/LV ratio < 0.9 on CT or echocardiogram) and normal cardiac biomarkers (negative troponin and BNP); (4) Absence of active bleeding or severe renal/hepatic impairment; and (5) A safe, reliable social environment with good medical adherence and rapid access to care. The first-line anticoagulant regimen for outpatient PE management is a DIRECT ORAL ANTICOAGULANT (DOAC)—specifically oral APIXABAN (10 mg twice daily for 7 days, then 5 mg twice daily) or oral RIVAROXABAN (15 mg twice daily for 21 days, then 20 mg daily)—both of which can be started immediately as monotherapy without requiring parenteral heparin bridging.'
      },
      {
        text: 'Admit to the intensive care unit for continuous intravenous unfractionated heparin infusion for 7 days',
        explanation: 'ICU admission and continuous IV heparin are reserved for massive PE with hemodynamic shock or submassive PE with severe RV strain, which are absent in this low-risk patient.'
      },
      {
        text: 'Administer systemic intravenous thrombolysis with recombinant tissue plasminogen activator (alteplase)',
        explanation: 'Systemic thrombolysis is strictly indicated only for massive PE with sustained hypotension (SBP < 90 mm Hg) and carries catastrophic intracranial hemorrhage risks.'
      },
      {
        text: 'Place an emergency inferior vena cava (IVC) filter in the catheterization suite prior to discharge',
        explanation: 'IVC filters are indicated only when therapeutic anticoagulation is absolutely contraindicated or when recurrent embolism occurs despite therapeutic anticoagulation.'
      },
      {
        text: 'Withhold all anticoagulation because subsegmental pulmonary emboli never cause clinical complications',
        explanation: 'Provoked subsegmental PE in a patient on oral estrogen contraceptives still carries recurrence risks and requires 3 months of therapeutic anticoagulation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0175',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Primary vs Secondary Adrenal Insufficiency Diagnostic Algorithm',
    subtopic: 'High-Dose Cosyntropin Stimulation Test and Baseline Morning ACTH',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Diagnose Adrenal Insufficiency (Endocrine Society Guidelines): - INITIAL SCREENING: Morning (8:00 AM) serum cortisol (< 3 mcg/dL strongly suggestive; > 15-18 mcg/dL excludes). - CONFIRMATORY DIAGNOSTIC GOLD STANDARD: HIGH-DOSE (250 mcg) COSYNTROPIN (SYNTHETIC ACTH 1-24) STIMULATION TEST. Cortisol is measured at 0, 30, and 60 minutes. NORMAL RESPONSE: Peak serum cortisol EXCEEDS 18 mcg/dL. PEAK CORTISOL < 18 mcg/dL CONFIRMS ADRENAL INSUFFICIENCY. - DIFFERENTIATION: - PRIMARY ADRENAL INSUFFICIENCY (Addison disease: adrenal cortex destruction): HIGH plasma ACTH (> 2x upper limit) + LOW aldosterone + HIGH plasma renin; hyperpigmentation and hyperkalemia. - SECONDARY ADRENAL INSUFFICIENCY (Pituitary ACTH deficiency): LOW/INAPPROPRIATELY NORMAL ACTH + NORMAL aldosterone (aldosterone preserved by RAAS); no hyperpigmentation or hyperkalemia.',
    citation: "Bornstein SR, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389. PMID: 26760044.",
    stem:
      'A 36-year-old woman presents to the clinic reporting progressive fatigue, muscle weakness, salt cravings, unintended 14-lb weight loss, and recurrent postural lightheadedness over the past 4 months. Her medical history is notable for Hashimoto thyroiditis treated with levothyroxine. On physical examination, her blood pressure is 96/60 mm Hg supine and drops to 82/50 mm Hg upon standing with a compensatory heart rate increase from 76/min to 104/min. Physical examination of the skin reveals prominent, diffuse hyperpigmentation involving the palmar creases of both hands, the vermilion borders of the lips, the buccal mucosa, and around existing scars. Laboratory evaluation demonstrates: serum sodium 131 mEq/L (normal 135-145 mEq/L), serum potassium 5.4 mEq/L (normal 3.5-5.0 mEq/L), serum glucose 72 mg/dL, and normal thyroid function. An 8:00 AM morning serum cortisol is 2.8 mcg/dL. To definitively confirm the diagnosis and distinguish between primary and secondary adrenal insufficiency, which of the following is the most appropriate next step in diagnostic testing?',
    options: [
      {
        text: 'Perform a high-dose cosyntropin (synthetic ACTH 1-24) stimulation test, and measure baseline plasma ACTH and renin levels',
        explanation: 'This 36-year-old woman presents with classic clinical and biochemical features of PRIMARY ADRENAL INSUFFICIENCY (Addison disease, most commonly autoimmune adrenalitis in the setting of autoimmune polyglandular syndrome type 2, given her preexisting Hashimoto thyroiditis). The destruction of the adrenal cortex eliminates both glucocorticoids (cortisol) and mineralocorticoids (aldosterone). Hallmark features include: fatigue, weight loss, salt craving, postural orthostatic hypotension, hyponatremia, hyperkalemia, and striking MUCOCUTANEOUS HYPERPIGMENTATION (loss of cortisol negative feedback drives massive pituitary POMC production, yielding excess ACTH and melanocyte-stimulating hormone [MSH]). While an 8:00 AM morning serum cortisol < 3 mcg/dL is highly suggestive, Endocrine Society guidelines dictate that the definitive confirmatory gold standard is the HIGH-DOSE (250 mcg) COSYNTROPIN (SYNTHETIC ACTH 1-24) STIMULATION TEST. Cortisol levels are measured at 0, 30, and 60 minutes; a peak cortisol < 18 mcg/dL confirms adrenal insufficiency. Concurrently measuring BASELINE PLASMA ACTH differentiates primary from secondary: in PRIMARY adrenal insufficiency, ACTH is markedly ELEVATED (> 2x normal), and plasma renin activity is high with low aldosterone. In SECONDARY adrenal insufficiency (pituitary failure), ACTH is low or inappropriately normal, and aldosterone/renin are preserved by the renin-angiotensin system.'
      },
      {
        text: 'Perform an overnight high-dose 8-mg dexamethasone suppression test',
        explanation: 'Dexamethasone suppression tests evaluate hypercortisolemia in suspected Cushing syndrome, not hypocortisolemia in adrenal insufficiency.'
      },
      {
        text: 'Order a 24-hour urinary free cortisol excretion study as the gold standard confirmatory test',
        explanation: 'Twenty-four-hour urinary cortisol is used to confirm Cushing syndrome; it lacks sensitivity for adrenal insufficiency because normal basal urinary cortisol excretion is already low.'
      },
      {
        text: 'Perform an immediate metyrapone stimulation test as the initial non-invasive screening tool',
        explanation: 'The metyrapone test blocks 11-beta-hydroxylase and carries a severe risk of precipitating acute, fatal adrenal crisis in an outpatient with baseline low cortisol.'
      },
      {
        text: 'Obtain an unenhanced brain MRI of the sella turcica before performing any biochemical hormonal testing',
        explanation: 'Pituitary MRI is only indicated if biochemical testing demonstrates secondary adrenal insufficiency (low ACTH); hyperpigmentation and hyperkalemia confirm primary adrenal failure.'
      }
    ]
  }
];
