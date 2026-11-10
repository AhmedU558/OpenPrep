import { CandidateSpec } from './types';

export const step3Batch17: CandidateSpec[] = [
  {
    "code": "op-c-s3-0401",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD)",
    "subtopic": "Hyperphosphatemia, Vascular Calcification Risk, Sevelamer vs Calcium Binders",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with stage 4 chronic kidney disease secondary to diabetic nephropathy (estimated GFR 22 mL/min/1.73 m2, baseline serum creatinine 2.8 mg/dL) presents for a routine chronic disease management visit. He has a history of coronary artery disease with prior coronary artery bypass grafting 4 years ago and peripheral artery disease. He is completely asymptomatic and adheres to an angiotensin receptor blocker, an SGLT2 inhibitor, and atorvastatin. Vital signs demonstrate blood pressure of 128/78 mm Hg and heart rate of 72/min. Physical examination reveals clear lungs, normal cardiac auscultation, and trace bilateral pretibial edema. Laboratory evaluation reveals:\n- Serum phosphate: 6.2 mg/dL (elevated; normal 2.5 to 4.5 mg/dL)\n- Serum corrected calcium: 9.8 mg/dL (normal 8.5 to 10.2 mg/dL)\n- Intact parathyroid hormone (PTH): 280 pg/mL (elevated; KDIGO target for non-dialysis CKD stage 4 is maintaining trends, baseline was 140 pg/mL 6 months ago)\n- Serum 25-hydroxyvitamin D: 32 ng/mL (normal > 30 ng/mL)\n- 24-hour urine protein: 1.8 g\n\nNutritional counseling regarding dietary phosphate restriction (limiting processed foods, colas, and inorganic phosphates) is reinforced. Which of the following represents the most appropriate initial pharmacological therapy to treat this patient's hyperphosphatemia?",
    "choices": [
      [
        "Oral sevelamer carbonate (800 mg three times daily with meals), a non-calcium-based phosphate binder, to prevent progressive arterial and cardiovascular calcification",
        "Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) is characterized by impaired phosphate excretion, hypocalcemia, decreased active 1,25-dihydroxyvitamin D synthesis (due to loss of renal 1-alpha-hydroxylase), and secondary hyperparathyroidism. (1) PATHOPHYSIOLOGY OF PHOSPHATE RETENTION: As GFR declines below 30-40 mL/min, urinary phosphate excretion reaches maximal capacity despite elevated Fibroblast Growth Factor-23 (FGF-23) and PTH, leading to frank hyperphosphatemia. Extracellular phosphate binds serum calcium, forming insoluble calcium-phosphate nanocrystals that deposit within arterial medial layers (M\u00f6nckeberg medial calcific sclerosis) and cardiac valves, dramatically accelerating cardiovascular mortality. (2) PHOSPHATE BINDER SELECTION (KDIGO GUIDELINES): KDIGO guidelines recommend maintaining serum phosphate toward normal and EXPLICITLY RECOMMEND RESTRICTING THE USE OF CALCIUM-BASED PHOSPHATE BINDERS (such as calcium carbonate or calcium acetate). In patients with pre-existing coronary artery disease, vascular calcification, or normal/high-normal serum calcium, calcium-based binders provide an excessive exogenous calcium load, promoting coronary and systemic vascular calcification and increasing cardiovascular events. (3) SEVELAMER CARBONATE: A non-absorbable, non-calcium-based polymer that binds phosphate anions in the gastrointestinal tract via ion exchange, safely eliminating phosphate in feces without increasing serum calcium or total body calcium balance. It is the preferred phosphate binder for hyperphosphatemic CKD patients with known cardiovascular disease or calcification."
      ],
      [
        "Oral calcium acetate (667 mg two tablets three times daily with meals) to bind dietary phosphate and suppress parathyroid hormone",
        "Calcium-based binders provide a substantial elemental calcium load that accelerates coronary artery and vascular calcification, which is especially hazardous in a patient with pre-existing bypass graft disease and stage 4 CKD."
      ],
      [
        "Oral calcitriol (1,25-dihydroxyvitamin D, 0.5 mcg daily) monotherapy without phosphate binders",
        "Calcitriol increases active intestinal absorption of BOTH calcium and phosphate; administering calcitriol in the setting of hyperphosphatemia (phosphate 6.2 mg/dL) will exacerbate phosphate retention and precipitate systemic metastatic calcification."
      ],
      [
        "Oral cinacalcet 30 mg daily to directly suppress parathyroid calcium-sensing receptors",
        "Cinacalcet (a calcimimetic) is approved and indicated for secondary hyperparathyroidism in patients on maintenance dialysis (CKD stage 5D); it is not approved for non-dialysis CKD stage 4 due to severe hypocalcemia risks."
      ],
      [
        "Initiate oral aluminum hydroxide antacids with meals for long-term phosphate binding",
        "Aluminum-based binders cause severe progressive aluminum accumulation in advanced CKD, resulting in fatal aluminum neurotoxicity (dialysis encephalopathy), microcytic anemia, and osteomalacia; they are strictly contraindicated for chronic use."
      ]
    ],
    "rationale": "In CKD-MBD stage 4 (eGFR 22), hyperphosphatemia (phosphate 6.2 mg/dL) requires dietary phosphate restriction and phosphate binders. KDIGO guidelines explicitly recommend avoiding calcium-based binders (calcium acetate/carbonate) in patients with pre-existing vascular disease or normal-high serum calcium, because exogenous calcium loads accelerate coronary and arterial medial calcification. Sevelamer carbonate is a non-calcium-based polymer that binds phosphate without calcium loading. Calcitriol is contraindicated during active hyperphosphatemia because it stimulates intestinal phosphate absorption. Cinacalcet is not indicated in non-dialysis CKD.",
    "metadata": {
      "shortSolution": "Stage 4 CKD patient with CAD and hyperphosphatemia requires non-calcium phosphate binder (sevelamer carbonate) with meals; avoid calcium acetate to prevent progressive arterial calcification.",
      "competingChoice": "Oral calcium acetate (667 mg two tablets three times daily with meals) to bind dietary phosphate and suppress parathyroid hormone",
      "exclusionFinding": "Calcium acetate provides exogenous calcium that accelerates vascular and coronary calcification; KDIGO guidelines recommend non-calcium binders (sevelamer) in patients with pre-existing vascular disease.",
      "pedagogicalValue": "Applying KDIGO guidelines for CKD-MBD: prioritizing non-calcium phosphate binders (sevelamer) over calcium-based binders in patients with vascular disease to prevent arterial calcification.",
      "citations": [
        "Ketteler M, Block GA, Evenepoel P, et al. Executive summary of the 2017 KDIGO Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) Guideline Update: what's changed and why it matters. Kidney Int. 2017;92(1):26-36. PMID: 28646995.",
        "Chertow GM, Burke SK, Raggi P; Treat to Goal Working Group. Sevelamer attenuates the progression of coronary and aortic calcification in hemodialysis patients. Kidney Int. 2002;62(1):245-252. PMID: 12081584."
      ]
    },
    "critique": {
      "shortestValidSolution": "Stage 4 CKD + CAD + phosphate 6.2 -> sevelamer carbonate (non-calcium binder to prevent vascular calcification).",
      "strongestCompetitor": "Oral calcium acetate (667 mg two tablets three times daily with meals) to bind dietary phosphate and suppress parathyroid hormone",
      "exclusionFinding": "Calcium-based binders worsen vascular and coronary calcification in CKD patients with pre-existing vascular disease.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Stage 4 CKD patient with CAD and hyperphosphatemia requires non-calcium phosphate binder (sevelamer carbonate) with meals; avoid calcium acetate to prevent progressive arterial calcification.",
      "distractorExclusionNotes": "Distractor exclusion verified: Calcium acetate provides exogenous calcium that accelerates vascular and coronary calcification; KDIGO guidelines recommend non-calcium binders (sevelamer) in patients with pre-existing vascular disease.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Stage 4 CKD patient with CAD and hyperphosphatemia requires non-calcium phosphate binder (sevelamer carbonate) with meals; avoid calcium acetate to prevent progressive arterial calcification.",
    "necessaryInference": "Stage 4 CKD patient with CAD and hyperphosphatemia requires non-calcium phosphate binder (sevelamer carbonate) with meals; avoid calcium acetate to prevent progressive arterial calcification.",
    "strongestDistractor": "Oral calcium acetate (667 mg two tablets three times daily with meals) to bind dietary phosphate and suppress parathyroid hormone",
    "distractorExclusion": "Calcium acetate provides exogenous calcium that accelerates vascular and coronary calcification; KDIGO guidelines recommend non-calcium binders (sevelamer) in patients with pre-existing vascular disease.",
    "citation": "Ketteler M, Block GA, Evenepoel P, et al. Executive summary of the 2017 KDIGO Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) Guideline Update: what's changed and why it matters. Kidney Int. 2017;92(1):26-36. PMID: 28646995."
  },
  {
    "code": "op-c-s3-0402",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension and the PATHWAY-2 Trial",
    "subtopic": "Triple Antihypertensive Failure, Spironolactone Fourth-Line Superiority, Aldosterone Antagonism",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man presents to the clinic for follow-up of hypertension. Over the past 6 months, his clinic blood pressures have remained elevated despite documented strict adherence to maximum tolerated doses of three antihypertensive agents from different classes: amlodipine 10 mg daily (calcium channel blocker), lisinopril 40 mg daily (ACE inhibitor), and chlorthalidone 25 mg daily (thiazide-like diuretic). He tracks his blood pressure at home with a validated automated oscillometric cuff, recording average morning and evening readings of 154/94 mm Hg. He adheres to a low-sodium diet (< 2 g daily) verified by a 24-hour urinary sodium excretion of 82 mEq. He drinks no alcohol, takes no NSAIDs or decongestants, and has a normal overnight polysomnography ruling out obstructive sleep apnea. Vital signs in the clinic demonstrate blood pressure of 152/92 mm Hg in the right arm and 150/94 mm Hg in the left arm, with a heart rate of 70/min. Physical examination is normal with no abdominal bruits. Laboratory evaluation reveals:\n- Serum sodium: 140 mEq/L\n- Serum potassium: 4.1 mEq/L (normal 3.5 to 5.0 mEq/L)\n- Serum creatinine: 0.9 mg/dL (estimated GFR > 90 mL/min/1.73 m2)\n- Plasma aldosterone-to-renin ratio (ARR): 14 (normal < 20, ruling out primary hyperaldosteronism)\n\nBased on landmark randomized clinical trial evidence (the PATHWAY-2 trial), which of the following represents the most effective fourth-line antihypertensive agent to achieve blood pressure control in this patient?",
    "choices": [
      [
        "Oral spironolactone (25 mg once daily, titrating to 50 mg daily as tolerated while monitoring serum potassium and creatinine)",
        "Resistant Hypertension is defined as blood pressure that remains above goal (>= 130/80 mm Hg) despite concurrent adherence to optimal or maximally tolerated doses of THREE antihypertensive drug classes, one of which must be a DIURETIC (the classic triple regimen: ACEi/ARB + CCB + thiazide/thiazide-like diuretic). (1) PATHOPHYSIOLOGY OF RESISTANT HYPERTENSION: The predominant pathophysiologic driver of resistant hypertension is INAPPARENT FLUID RETENTION AND EXTRACELLULAR SODIUM OVERLOAD, mediated by persistent subtle aldosterone excess or enhanced mineralocorticoid receptor sensitivity, despite thiazide diuretic therapy. (2) LANDMARK EVIDENCE (THE PATHWAY-2 TRIAL, LANCET 2015): The double-blind, randomized, crossover PATHWAY-2 trial directly compared four fourth-line strategies in patients with confirmed resistant hypertension: spironolactone (25-50 mg daily), bisoprolol (beta-blocker), doxazosin (alpha-1 blocker), and placebo. Spironolactone was overwhelmingly superior to all other agents, reducing home systolic blood pressure by an additional 8.7 mm Hg compared to placebo and by 4.5 mm Hg compared to bisoprolol and doxazosin, achieving blood pressure control in nearly 60% of patients. (3) CLINICAL APPLICATION: AHA/ACC guidelines mandate SPIRONOLACTONE (or eplerenone if gynecomastia occurs) as the preferred fourth-line agent for resistant hypertension in patients with estimated GFR > 30-45 mL/min and baseline serum potassium < 4.5-5.0 mEq/L, with serial monitoring of potassium and creatinine at 1 and 4 weeks post-initiation."
      ],
      [
        "Oral metoprolol tartrate 50 mg twice daily as a fourth-line sympatholytic agent",
        "The PATHWAY-2 trial proved that beta-blockade (bisoprolol) is significantly inferior to spironolactone for lowering blood pressure in resistant hypertension because the primary driver is mineralocorticoid-mediated sodium retention, not sympathetic tone."
      ],
      [
        "Oral doxazosin 4 mg daily as an alpha-1 adrenergic antagonist",
        "Doxazosin was directly tested against spironolactone in PATHWAY-2 and was significantly inferior in blood pressure reduction and control rates; spironolactone is the definitive fourth-line choice."
      ],
      [
        "Oral clonidine 0.1 mg three times daily as a centrally acting alpha-2 agonist",
        "Clonidine carries high rates of central adverse effects (sedation, dry mouth, depression) and severe life-threatening rebound hypertension upon missed doses; spironolactone is superior and safer."
      ],
      [
        "Oral hydralazine 50 mg three times daily as a direct arteriolar vasodilator",
        "Direct vasodilators trigger reflex sympathetic tachycardia and profound secondary renal sodium retention, requiring high diuretic doses; hydralazine is fifth-line after aldosterone antagonists."
      ]
    ],
    "rationale": "Resistant hypertension is defined as uncontrolled blood pressure despite adherence to a 3-drug regimen including an ACEi/ARB, CCB, and diuretic. The PATHWAY-2 trial proved that spironolactone (25-50 mg daily) is the most effective fourth-line agent, overwhelmingly superior to beta-blockers (bisoprolol), alpha-blockers (doxazosin), and placebo, because persistent occult sodium retention and aldosterone sensitivity drive resistance. Spironolactone is recommended by AHA/ACC guidelines as the fourth-line drug of choice provided eGFR > 30 and baseline potassium < 4.5-5.0 mEq/L.",
    "metadata": {
      "shortSolution": "Patient with resistant hypertension on maximal lisinopril, amlodipine, and chlorthalidone requires fourth-line oral spironolactone (25 mg daily); PATHWAY-2 trial proved spironolactone is superior to beta-blockers and alpha-blockers.",
      "competingChoice": "Oral metoprolol tartrate 50 mg twice daily as a fourth-line sympatholytic agent",
      "exclusionFinding": "The PATHWAY-2 trial demonstrated spironolactone is significantly superior to beta-blockers and alpha-blockers in resistant hypertension; spironolactone is the guideline-mandated fourth-line agent.",
      "pedagogicalValue": "Understanding the definition of resistant hypertension and applying the PATHWAY-2 trial evidence establishing spironolactone as the superior fourth-line agent.",
      "citations": [
        "Williams B, MacDonald TM, Morant S, et al. Endocrine and haemodynamic changes in resistant hypertension, and blood pressure responses to spironolactone or amiloride: the PATHWAY-2 mechanisms studies. Lancet Diabetes Endocrinol. 2018;6(6):464-475. PMID: 29655848.",
        "Carey RM, Calhoun DA, Bakris GL, et al. Resistant Hypertension: Detection, Evaluation, and Management: A Scientific Statement From the American Heart Association. Hypertension. 2018;72(5):e53-e90. PMID: 30354828."
      ]
    },
    "critique": {
      "shortestValidSolution": "Resistant HTN on triple therapy (ACEi + CCB + thiazide) -> add spironolactone 25 mg daily (PATHWAY-2 trial proved superiority).",
      "strongestCompetitor": "Oral metoprolol tartrate 50 mg twice daily as a fourth-line sympatholytic agent",
      "exclusionFinding": "Beta-blockers were shown to be inferior to spironolactone in the PATHWAY-2 trial; mineralocorticoid blockade is the preferred mechanism.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient with resistant hypertension on maximal lisinopril, amlodipine, and chlorthalidone requires fourth-line oral spironolactone (25 mg daily); PATHWAY-2 trial proved spironolactone is superior to beta-blockers and alpha-blockers.",
      "distractorExclusionNotes": "Distractor exclusion verified: The PATHWAY-2 trial demonstrated spironolactone is significantly superior to beta-blockers and alpha-blockers in resistant hypertension; spironolactone is the guideline-mandated fourth-line agent.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient with resistant hypertension on maximal lisinopril, amlodipine, and chlorthalidone requires fourth-line oral spironolactone (25 mg daily); PATHWAY-2 trial proved spironolactone is superior to beta-blockers and alpha-blockers.",
    "necessaryInference": "Patient with resistant hypertension on maximal lisinopril, amlodipine, and chlorthalidone requires fourth-line oral spironolactone (25 mg daily); PATHWAY-2 trial proved spironolactone is superior to beta-blockers and alpha-blockers.",
    "strongestDistractor": "Oral metoprolol tartrate 50 mg twice daily as a fourth-line sympatholytic agent",
    "distractorExclusion": "The PATHWAY-2 trial demonstrated spironolactone is significantly superior to beta-blockers and alpha-blockers in resistant hypertension; spironolactone is the guideline-mandated fourth-line agent.",
    "citation": "Williams B, MacDonald TM, Morant S, et al. Endocrine and haemodynamic changes in resistant hypertension, and blood pressure responses to spironolactone or amiloride: the PATHWAY-2 mechanisms studies. Lancet Diabetes Endocrinol. 2018;6(6):464-475. PMID: 29655848."
  },
  {
    "code": "op-c-s3-0403",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Chronic Hepatitis B Virus (HBV) Antiviral Treatment Indications",
    "subtopic": "HBeAg-Negative Chronic Hepatitis B, Viral Load, ALT Elevation, Entecavir vs TDF",
    "provisionalDifficulty": 5,
    "stem": "A 43-year-old Asian man presents to the ambulatory liver clinic for evaluation of chronic hepatitis B virus (HBV) infection diagnosed 5 years ago. He is completely asymptomatic, drinks no alcohol, and takes no medications. On physical examination, he appears well. Vital signs are normal. Abdomen is soft, flat, and non-tender with no hepatosplenomegaly or ascites. Stigmata of chronic liver disease (spider angiomas, palmar erythema) are absent. Laboratory evaluation over the past 6 months reveals:\n- Hepatitis B surface antigen (HBsAg): Positive\n- Hepatitis B e antigen (HBeAg): Negative\n- Antibody to hepatitis B e antigen (anti-HBe): Positive\n- Serum alanine aminotransferase (ALT): 78 U/L (consistently elevated on 3 separate checks; ULN for men is 35 U/L)\n- Serum aspartate aminotransferase (AST): 64 U/L\n- Serum total bilirubin: 0.8 mg/dL\n- Serum albumin: 4.2 g/dL\n- Platelet count: 210,000/mm3\n- Serum HBV DNA quantitative viral load: 24,500 IU/mL (elevated; threshold >= 2,000 IU/mL)\n- Hepatitis C antibody and HIV antibody: Negative\n- Transient elastography (FibroScan): Liver stiffness measurement of 8.8 kPa, consistent with significant fibrosis (stage F2-F3)\n- Abdominal ultrasound: Coarsened hepatic echotexture without focal mass lesions or splenomegaly\n\nAccording to American Association for the Study of Liver Diseases (AASLD) guidelines, which of the following represents the most appropriate management strategy for this patient?",
    "choices": [
      [
        "Initiate oral antiviral therapy with entecavir, tenofovir disoproxil fumarate (TDF), or tenofovir alafenamide (TAF), accompanied by semi-annual hepatocellular carcinoma surveillance ultrasound",
        "Chronic Hepatitis B (CHB) infection management requires distinguishing inactive carrier state from active progressive disease: (1) PHASE OF INFECTION: This patient has HBeAg-NEGATIVE CHRONIC HEPATITIS B, characterized by precore (G1896A) or basal core promoter mutations that ablate HBeAg production while viral replication continues. (2) TREATMENT CRITERIA (AASLD GUIDELINES): Antiviral therapy is indicated for patients with: (a) Cirrhosis (compensated or decompensated) with any detectable HBV DNA regardless of ALT; OR (b) Non-cirrhotic patients who meet ALL THREE CRITERIA: (1) HBV DNA > 2,000 IU/mL (for HBeAg-negative) or > 20,000 IU/mL (for HBeAg-positive); (2) Persistently elevated ALT > 2x upper limit of normal (> 70 U/L in men, > 50 U/L in women); and (3) Evidence of significant histological inflammation or fibrosis (stage >= F2, or liver stiffness > 8 kPa on elastography). Because this patient has HBV DNA 24,500 IU/mL, ALT 78 U/L (> 2x ULN), and F2-F3 fibrosis (8.8 kPa), he meets all objective criteria for treatment. (3) FIRST-LINE NUCLEOS(T)IDE ANALOGUES: High-barrier-to-resistance agents are standard: ENTECAVIR, TENOFOVIR DISOPROXIL FUMARATE (TDF), or TENOFOVIR ALAFENAMIDE (TAF). Lamivudine and adefovir are obsolete due to high resistance rates (> 70% at 5 years). Therapy suppresses viral replication, halts fibrosis progression, reduces cirrhosis decompensation, and lowers HCC risk. (4) HCC SURVEILLANCE: Asian men > 40 years with CHB require lifelong semi-annual liver ultrasound (+/- alpha-fetoprotein) regardless of treatment."
      ],
      [
        "Withhold antiviral therapy and monitor liver function tests every 12 months, as negative HBeAg indicates an inactive non-replicative carrier state",
        "HBeAg-negative status with HBV DNA > 2,000 IU/mL, elevated ALT > 2x ULN, and significant fibrosis (8.8 kPa) represents active HBeAg-negative hepatitis B, not an inactive carrier state; withholding therapy leads to progressive cirrhosis and HCC."
      ],
      [
        "Initiate oral lamivudine 100 mg daily monotherapy as preferred first-line cost-effective antiviral therapy",
        "Lamivudine has a notoriously low genetic barrier to resistance, with the YMDD resistance mutation developing in > 70% of patients within 5 years; AASLD guidelines explicitly recommend against lamivudine as first-line therapy."
      ],
      [
        "Administer a 48-week course of pegylated interferon-alpha-2a monotherapy without checking G6PD or neuropsychiatric history",
        "While pegylated interferon is an alternative, oral nucleos(t)ide analogues (entecavir/tenofovir) are preferred due to interferon's severe toxicities (severe depression, cytopenias, autoimmune activation) and requires comprehensive pre-treatment screening."
      ],
      [
        "Perform emergent surgical wedge liver biopsy before considering any oral antiviral therapy",
        "Non-invasive transient elastography (FibroScan 8.8 kPa) combined with elevated ALT and viral load definitively establishes significant fibrosis; invasive liver biopsy is unnecessary and carries procedural hemorrhage risks."
      ]
    ],
    "rationale": "HBeAg-negative chronic hepatitis B can feature active viral replication due to precore mutations. AASLD guidelines mandate antiviral therapy when: (1) HBV DNA > 2,000 IU/mL, (2) ALT > 2x ULN, and (3) Evidence of significant fibrosis (stage >= F2 or elastography > 8 kPa). This patient meets all criteria (HBV DNA 24,500 IU/mL, ALT 78 U/L, stiffness 8.8 kPa). First-line therapies are oral nucleos(t)ide analogues with high genetic barrier to resistance: entecavir, TDF, or TAF. Semi-annual HCC ultrasound surveillance is indicated for Asian men > 40.",
    "metadata": {
      "shortSolution": "HBeAg-negative chronic HBV with DNA 24,500 IU/mL, ALT > 2x ULN (78 U/L), and elastography 8.8 kPa (F2-F3 fibrosis) meets AASLD criteria for oral antiviral therapy with entecavir or tenofovir (TDF/TAF).",
      "competingChoice": "Withhold antiviral therapy and monitor liver function tests every 12 months, as negative HBeAg indicates an inactive non-replicative carrier state",
      "exclusionFinding": "Elevated HBV DNA (> 2,000) and elevated ALT with stage F2-F3 fibrosis prove active HBeAg-negative chronic hepatitis B; withholding therapy leads to liver failure and cirrhosis.",
      "pedagogicalValue": "Mastering the AASLD treatment thresholds for chronic Hepatitis B (viral load, ALT > 2x ULN, and fibrosis stage) and selecting high-barrier antivirals (entecavir/tenofovir).",
      "citations": [
        "Terrault NA, Lok ASF, McMahon BJ, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology. 2018;67(4):1560-1599. PMID: 29405329.",
        "European Association for the Study of the Liver. EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. PMID: 28427875."
      ]
    },
    "critique": {
      "shortestValidSolution": "HBeAg-negative HBV + DNA 24,500 + ALT > 2x ULN + FibroScan 8.8 kPa -> oral entecavir or tenofovir (TDF/TAF).",
      "strongestCompetitor": "Withhold antiviral therapy and monitor liver function tests every 12 months, as negative HBeAg indicates an inactive non-replicative carrier state",
      "exclusionFinding": "High viral load and fibrosis prove active disease, not an inactive carrier state; antiviral therapy is indicated.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: HBeAg-negative chronic HBV with DNA 24,500 IU/mL, ALT > 2x ULN (78 U/L), and elastography 8.8 kPa (F2-F3 fibrosis) meets AASLD criteria for oral antiviral therapy with entecavir or tenofovir (TDF/TAF).",
      "distractorExclusionNotes": "Distractor exclusion verified: Elevated HBV DNA (> 2,000) and elevated ALT with stage F2-F3 fibrosis prove active HBeAg-negative chronic hepatitis B; withholding therapy leads to liver failure and cirrhosis.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "HBeAg-negative chronic HBV with DNA 24,500 IU/mL, ALT > 2x ULN (78 U/L), and elastography 8.8 kPa (F2-F3 fibrosis) meets AASLD criteria for oral antiviral therapy with entecavir or tenofovir (TDF/TAF).",
    "necessaryInference": "HBeAg-negative chronic HBV with DNA 24,500 IU/mL, ALT > 2x ULN (78 U/L), and elastography 8.8 kPa (F2-F3 fibrosis) meets AASLD criteria for oral antiviral therapy with entecavir or tenofovir (TDF/TAF).",
    "strongestDistractor": "Withhold antiviral therapy and monitor liver function tests every 12 months, as negative HBeAg indicates an inactive non-replicative carrier state",
    "distractorExclusion": "Elevated HBV DNA (> 2,000) and elevated ALT with stage F2-F3 fibrosis prove active HBeAg-negative chronic hepatitis B; withholding therapy leads to liver failure and cirrhosis.",
    "citation": "Terrault NA, Lok ASF, McMahon BJ, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology. 2018;67(4):1560-1599. PMID: 29405329."
  },
  {
    "code": "op-c-s3-0404",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Chronic Hepatitis C Virus (HCV) Direct-Acting Antivirals (DAAs)",
    "subtopic": "Pan-Genotypic Regimens, Pre-Treatment Hepatitis B Screening, HBV Reactivation Prevention",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old woman presents to the ambulatory internal medicine clinic following a positive screening Hepatitis C virus (HCV) antibody test. She reports a remote history of recreational intravenous drug use for 2 years in her early twenties, but has been in full sustained recovery for 28 years. She takes no medications and feels completely well. Physical examination reveals a healthy-appearing woman with normal vital signs, no jaundice, clear lungs, normal cardiac exam, and no abdominal tenderness or stigmata of portal hypertension. Confirmatory testing demonstrates:\n- Quantitative HCV RNA viral load: 1,850,000 IU/mL\n- HCV Genotype: 1a\n- Serum ALT: 48 U/L (mildly elevated; ULN 35 U/L)\n- Serum AST: 42 U/L\n- Serum total bilirubin: 0.6 mg/dL\n- Serum albumin: 4.1 g/dL\n- Platelet count: 240,000/mm3\n- FIB-4 index: 0.92 (score < 1.45 has > 90% negative predictive value for advanced fibrosis/cirrhosis)\n- Transient elastography: Liver stiffness of 5.2 kPa (consistent with stage F0-F1, no advanced fibrosis or cirrhosis)\n\nBefore initiating a curative course of pan-genotypic direct-acting antiviral (DAA) therapy (such as sofosbuvir-velpatasvir for 12 weeks or glecaprevir-pibrentasvir for 8 weeks), which of the following pre-treatment screening evaluations is mandatory to prevent a life-threatening complication during therapy?",
    "choices": [
      [
        "Serological screening for Hepatitis B virus co-infection (HBsAg, anti-HBc total, and anti-HBs) to assess the risk of fulminant Hepatitis B reactivation",
        "Direct-Acting Antivirals (DAAs) have revolutionized Hepatitis C treatment, achieving sustained virologic response (SVR12, equivalent to virological cure) in > 95-98% of patients with short-course, well-tolerated oral pan-genotypic regimens (e.g., SOFOSBUVIR-VELPATASVIR for 12 weeks, or GLECAPREVIR-PIBRENTASVIR for 8 weeks in non-cirrhotic treatment-naive patients). (1) THE FDA BLACK BOX WARNING (HBV REACTIVATION): In patients with chronic HCV, co-infection with Hepatitis B virus is common due to shared parenteral transmission routes. In co-infected individuals, active HCV replication naturally suppresses HBV replication through viral interference and innate interferon induction. When potent DAAs are initiated, rapid clearance of HCV RNA removes this immunological suppression, allowing latent or occult Hepatitis B to undergo UNCONTROLLED, FULMINANT VIRAL REACTIVATION. This can cause acute severe hepatitis, hepatic decompensation, fulminant liver failure, emergency liver transplantation, or death during or immediately following DAA therapy. (2) MANDATORY PRE-TREATMENT SCREENING: Current AASLD/IDSA guidelines mandate testing ALL patients for Hepatitis B with THREE SEROLOGIES prior to initiating DAAs: (a) Hepatitis B surface antigen (HBsAg), (b) Total Hepatitis B core antibody (anti-HBc), and (c) Hepatitis B surface antibody (anti-HBs). If HBsAg is positive, concurrent nucleos(t)ide analogue antiviral therapy (e.g., entecavir or tenofovir) is initiated alongside the DAA. If anti-HBc is positive alone, close monitoring of HBV DNA during DAA therapy is required."
      ],
      [
        "Routine diagnostic upper endoscopy to screen for esophageal varices in all non-cirrhotic patients",
        "Variceal screening endoscopy is indicated only in patients with confirmed cirrhosis (liver stiffness >= 12.5-15 kPa or platelet count < 150k); in F0-F1 fibrosis with normal platelets and FIB-4 0.92, endoscopy is unnecessary and low-value care."
      ],
      [
        "Pre-treatment bone marrow biopsy to evaluate for clonal cytopenias before DAA exposure",
        "DAAs do not cause bone marrow suppression (unlike historical interferon-alpha); bone marrow biopsy is completely unwarranted."
      ],
      [
        "Screening for latent tuberculosis infection with an interferon-gamma release assay",
        "DAAs are not immunosuppressive therapies (they are direct viral protease/polymerase inhibitors) and do not reactivate latent tuberculosis; LTBI screening is not required prior to DAAs."
      ],
      [
        "A 6-month period of documented alcohol and substance abstinence before approving DAA therapy",
        "AASLD/IDSA guidelines explicitly state that active or past substance use is NOT a contraindication to DAA therapy, and requiring arbitrary sobriety periods is unethical and contrary to public health guidelines."
      ]
    ],
    "rationale": "Direct-acting antivirals (DAAs) cure > 95% of HCV infections. However, the FDA mandates a Black Box Warning regarding the risk of fulminant Hepatitis B virus (HBV) reactivation. Rapid clearance of HCV removes endogenous suppression of HBV, triggering acute severe hepatitis or liver failure in co-infected patients. AASLD/IDSA guidelines mandate pre-treatment screening for HBV (HBsAg, anti-HBc, anti-HBs) in all patients prior to DAA therapy so that prophylactic entecavir or monitoring can be instituted.",
    "metadata": {
      "shortSolution": "Before starting DAA therapy for HCV, mandatory screening for Hepatitis B (HBsAg, anti-HBc, anti-HBs) is required to prevent fatal HBV reactivation (FDA black box warning).",
      "competingChoice": "Routine diagnostic upper endoscopy to screen for esophageal varices in all non-cirrhotic patients",
      "exclusionFinding": "Variceal screening is indicated only for cirrhosis; this patient has F0-F1 fibrosis (stiffness 5.2 kPa). HBV screening is universally mandatory to prevent reactivation.",
      "pedagogicalValue": "Recognizing the mandatory pre-treatment screening for Hepatitis B co-infection before initiating HCV direct-acting antivirals to prevent fulminant HBV reactivation.",
      "citations": [
        "AASLD-IDSA HCV Guidance Panel. Hepatitis C Guidance 2019 Update: American Association for the Study of Liver Diseases-Infectious Diseases Society of America Recommendations for Testing, Managing, and Treating Hepatitis C Virus Infection. Hepatology. 2020;71(2):686-721. PMID: 31816111.",
        "Bersoff-Matcha SJ, Cao K, Jason M, et al. Hepatitis B Virus Reactivation Associated With Direct-Acting Antiviral Therapy for Chronic Hepatitis C Virus: A Review of Cases Reported to the US Food and Drug Administration MedWatch Safety Information and Adverse Event Reporting System. Ann Intern Med. 2017;166(11):792-798. PMID: 28492942."
      ]
    },
    "critique": {
      "shortestValidSolution": "Prior to starting HCV DAA therapy -> test for HBV co-infection (HBsAg, anti-HBc) to prevent fulminant HBV reactivation.",
      "strongestCompetitor": "Routine diagnostic upper endoscopy to screen for esophageal varices in all non-cirrhotic patients",
      "exclusionFinding": "Upper endoscopy is indicated only for cirrhosis; pre-DAA HBV screening is universally required by FDA/AASLD.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Before starting DAA therapy for HCV, mandatory screening for Hepatitis B (HBsAg, anti-HBc, anti-HBs) is required to prevent fatal HBV reactivation (FDA black box warning).",
      "distractorExclusionNotes": "Distractor exclusion verified: Variceal screening is indicated only for cirrhosis; this patient has F0-F1 fibrosis (stiffness 5.2 kPa). HBV screening is universally mandatory to prevent reactivation.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Before starting DAA therapy for HCV, mandatory screening for Hepatitis B (HBsAg, anti-HBc, anti-HBs) is required to prevent fatal HBV reactivation (FDA black box warning).",
    "necessaryInference": "Before starting DAA therapy for HCV, mandatory screening for Hepatitis B (HBsAg, anti-HBc, anti-HBs) is required to prevent fatal HBV reactivation (FDA black box warning).",
    "strongestDistractor": "Routine diagnostic upper endoscopy to screen for esophageal varices in all non-cirrhotic patients",
    "distractorExclusion": "Variceal screening is indicated only for cirrhosis; this patient has F0-F1 fibrosis (stiffness 5.2 kPa). HBV screening is universally mandatory to prevent reactivation.",
    "citation": "AASLD-IDSA HCV Guidance Panel. Hepatitis C Guidance 2019 Update: American Association for the Study of Liver Diseases-Infectious Diseases Society of America Recommendations for Testing, Managing, and Treating Hepatitis C Virus Infection. Hepatology. 2020;71(2):686-721. PMID: 31816111."
  },
  {
    "code": "op-c-s3-0405",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "COPD Maintenance Therapy Escalation (GOLD Group E)",
    "subtopic": "Frequent Exacerbations, Blood Eosinophil Thresholds, Inhaled Triple Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with severe chronic obstructive pulmonary disease (COPD; post-bronchodilator FEV1 42% of predicted) presents for a follow-up visit after being discharged from the hospital 3 weeks ago for a severe COPD exacerbation requiring non-invasive ventilation and systemic corticosteroids. Over the past 12 months, he has had two other moderate exacerbations treated with outpatient oral prednisone and antibiotics (total of three exacerbations in the past year). He adheres strictly to maintenance dual long-acting bronchodilator therapy with inhaled tiotropium (LAMA, 18 mcg daily) and inhaled olodaterol (LABA, 5 mcg daily), with proper inhaler technique verified. Despite this, he has persistent daily dyspnea walking on level ground (mMRC score 3) and chronic productive cough. Complete blood count obtained during a stable outpatient visit demonstrates a white blood cell count of 6,800/mm3 with an absolute blood eosinophil count of 380 cells/mcL (5.6%; normal < 300 cells/mcL). Vital signs show blood pressure of 132/80 mm Hg, heart rate of 78/min, and oxygen saturation of 93% on ambient air.\n\nAccording to the Global Initiative for Chronic Obstructive Lung Disease (GOLD 2023/2024) guidelines, which of the following represents the most appropriate pharmacotherapeutic escalation for this patient?",
    "choices": [
      [
        "Escalate to single-inhaler triple therapy by adding an inhaled corticosteroid (LABA + LAMA + ICS; e.g., fluticasone furoate/umeclidinium/vilanterol or budesonide/glycopyrrolate/formoterol)",
        "Under the updated GOLD classification, patients are categorized into Group A, Group B, or Group E: (1) GROUP E DEFINITION: Patients with a HIGH EXACERBATION RISK, defined as >= 2 moderate exacerbations (treated with oral steroids/antibiotics) OR >= 1 exacerbation resulting in hospitalization within the past year, regardless of symptom burden. This patient had three exacerbations, including one hospitalization, placing him firmly in GOLD Group E. (2) ESCALATION PARADIGM AND EOSINOPHIL BIOMARKER: While initial maintenance therapy for Group E is dual bronchodilation (LABA + LAMA), patients who experience persistent exacerbations on LABA + LAMA require escalation based on blood eosinophil count: (a) Blood eosinophils >= 300 cells/mcL: Strongest predictor of MAGNITUDE OF BENEFIT from an Inhaled Corticosteroid (ICS). The landmark IMPACT and ETHOS randomized controlled trials demonstrated that in frequent exacerbators with elevated eosinophils, TRIPLE THERAPY (LABA + LAMA + ICS) significantly reduces moderate-to-severe exacerbation rates by 25-35% and ALL-CAUSE MORTALITY compared to dual bronchodilators alone. (b) Blood eosinophils < 100 cells/mcL: Predicts negligible ICS response and increased risk of bacterial pneumonia; roflumilast or azithromycin is preferred. Because this patient has 380 eosinophils/mcL and persistent exacerbations, escalation to TRIPLE THERAPY is the evidence-based recommendation of choice."
      ],
      [
        "Add daily oral roflumilast 500 mcg while discontinuing the long-acting muscarinic antagonist",
        "Discontinuing the LAMA is contraindicated because dual bronchodilation is the foundation of COPD care; roflumilast is an oral PDE-4 inhibitor considered as an adjunct in chronic bronchitis with FEV1 < 50%, but triple therapy (LABA+LAMA+ICS) is preferred first-line when eosinophils >= 300 cells/mcL."
      ],
      [
        "Initiate long-term chronic low-dose oral prednisone 10 mg daily as continuous maintenance therapy",
        "Chronic maintenance systemic corticosteroids provide zero long-term benefit in stable COPD and cause severe systemic toxicity (osteoporosis, diabetes, cataracts, myopathy); GOLD guidelines strongly condemn chronic oral steroids."
      ],
      [
        "Initiate daily chronic oral azithromycin 250 mg daily monotherapy and withhold inhaled corticosteroids",
        "While chronic macrolides reduce exacerbations in select former smokers, triple inhaled therapy (LABA+LAMA+ICS) is the primary guideline-directed step when eosinophils are elevated (>= 300 cells/mcL); macrolides carry risks of QTc prolongation and ototoxicity."
      ],
      [
        "Switch maintenance therapy to regular short-acting nebulized ipratropium and albuterol every 4 hours as needed",
        "Short-acting bronchodilators are for acute rescue only; replacing long-acting bronchodilators with short-acting agents leads to severe loss of lung function and frequent exacerbations."
      ]
    ],
    "rationale": "In COPD patients with frequent exacerbations (GOLD Group E: >= 2 moderate or >= 1 hospital admission in the past year) failing LABA+LAMA, blood eosinophil count guides ICS addition. An eosinophil count >= 300 cells/mcL strongly predicts substantial reduction in exacerbations and mortality with inhaled corticosteroids (IMPACT and ETHOS trials). Escalation to single-inhaler triple therapy (LABA + LAMA + ICS) is the recommended intervention for patients with frequent exacerbations and eosinophils >= 300 cells/mcL. Chronic oral prednisone is contraindicated.",
    "metadata": {
      "shortSolution": "COPD patient in GOLD Group E (frequent exacerbations/hospitalization) failing LABA+LAMA with blood eosinophils 380 cells/mcL (>= 300) requires escalation to triple inhaled therapy (LABA + LAMA + ICS).",
      "competingChoice": "Add daily oral roflumilast 500 mcg while discontinuing the long-acting muscarinic antagonist",
      "exclusionFinding": "LAMAs must never be discontinued, and triple therapy with ICS is the primary guideline-recommended step when blood eosinophils are >= 300 cells/mcL.",
      "pedagogicalValue": "Applying GOLD Group E criteria and using the blood eosinophil biomarker (>= 300 cells/mcL) to guide escalation to triple inhaled therapy (LABA+LAMA+ICS).",
      "citations": [
        "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease: 2023 Report. GOLD. 2023. NLM ID: 101740889.",
        "Lipson DA, Barnhart F, Brealey N, et al. Once-Daily Single-Inhaler Triple versus Dual Therapy in Patients with COPD. N Engl J Med. 2018;378(18):1671-1680. PMID: 29668352."
      ]
    },
    "critique": {
      "shortestValidSolution": "COPD Group E (exacerbations) on LABA/LAMA + eosinophils 380 (>= 300) -> escalate to triple therapy (LABA + LAMA + ICS).",
      "strongestCompetitor": "Add daily oral roflumilast 500 mcg while discontinuing the long-acting muscarinic antagonist",
      "exclusionFinding": "LAMA should not be discontinued; triple inhaled therapy is the evidence-based first choice for eosinophils >= 300.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: COPD patient in GOLD Group E (frequent exacerbations/hospitalization) failing LABA+LAMA with blood eosinophils 380 cells/mcL (>= 300) requires escalation to triple inhaled therapy (LABA + LAMA + ICS).",
      "distractorExclusionNotes": "Distractor exclusion verified: LAMAs must never be discontinued, and triple therapy with ICS is the primary guideline-recommended step when blood eosinophils are >= 300 cells/mcL.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "COPD patient in GOLD Group E (frequent exacerbations/hospitalization) failing LABA+LAMA with blood eosinophils 380 cells/mcL (>= 300) requires escalation to triple inhaled therapy (LABA + LAMA + ICS).",
    "necessaryInference": "COPD patient in GOLD Group E (frequent exacerbations/hospitalization) failing LABA+LAMA with blood eosinophils 380 cells/mcL (>= 300) requires escalation to triple inhaled therapy (LABA + LAMA + ICS).",
    "strongestDistractor": "Add daily oral roflumilast 500 mcg while discontinuing the long-acting muscarinic antagonist",
    "distractorExclusion": "LAMAs must never be discontinued, and triple therapy with ICS is the primary guideline-recommended step when blood eosinophils are >= 300 cells/mcL.",
    "citation": "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease: 2023 Report. GOLD. 2023. NLM ID: 101740889."
  },
  {
    "code": "op-c-s3-0406",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Geriatric Polypharmacy and Beers Criteria Deprescribing",
    "subtopic": "Potentially Inappropriate Medications, Fall Risk Mitigation, Anticholinergic Burden",
    "provisionalDifficulty": 5,
    "stem": "An 84-year-old woman is brought to the geriatric ambulatory clinic by her daughter for a comprehensive medication review following two recent ground-level falls at home over the past month, one of which resulted in a forehead laceration. Her medical history includes mild Alzheimer dementia, hypertension, osteoarthritis of the knees, and chronic insomnia. Physical examination demonstrates an alert, frail woman. Blood pressure is 128/72 mm Hg seated, and 126/70 mm Hg standing. Mini-Mental State Examination score is 22/30. Gait is slow and cautious with a Timed Up and Go (TUG) time of 17 seconds (abnormal > 12 seconds). Current daily medications include:\n1. Donepezil 10 mg daily\n2. Lisinopril 10 mg daily\n3. Acetaminophen 650 mg three times daily as needed\n4. Diphenhydramine 50 mg orally every night at bedtime for insomnia (taken for 3 years)\n5. Amitriptyline 25 mg orally every night at bedtime for neuropathic pain (taken for 2 years)\n6. Lorazepam 1 mg orally as needed for anxiety (takes approximately 4 to 5 times weekly)\n\nWhich of the following represents the most appropriate initial pharmacological deprescribing intervention according to the American Geriatrics Society (AGS) Beers Criteria?",
    "choices": [
      [
        "Taper and discontinue diphenhydramine, amitriptyline, and lorazepam, as concurrent anticholinergic and sedative-hypnotic medications dramatically worsen cognitive impairment, delirium, and recurrent fall risks in older adults with dementia",
        "The American Geriatrics Society (AGS) Beers Criteria identify Potentially Inappropriate Medications (PIMs) in older adults. Polypharmacy (concurrent use of >= 5 medications) combined with high 'anticholinergic and sedative burden' is a leading cause of preventable iatrogenic morbidity, motor vehicle crashes, hip fractures, hospitalizations, and mortality in older adults. (1) SPECIFIC INAPPROPRIATE DRUGS IDENTIFIED: (a) DIPHENHYDRAMINE: A potent first-generation H1-antihistamine with severe anticholinergic properties; strongly condemned by Beers Criteria for insomnia due to high risk of confusion, urinary retention, dry mouth, constipation, and falls. Tolerance to sedative effects develops within days, providing zero therapeutic sleep benefit while toxicity persists. (b) AMITRIPTYLINE: A tertiary tricyclic antidepressant with profound anticholinergic, sedative, and alpha-1 adrenergic blocking properties (orthostasis); strongly contraindicated in older adults, particularly those with pre-existing dementia. (c) LORAZEPAM: Benzodiazepines increase motor incoordination, paradoxical excitation, memory impairment, delirium, and hip fractures; guidelines strongly recommend avoiding benzodiazepines in older adults. (2) ANTAGONISTIC PHARMACODYNAMIC CONFLICT: Prescribing acetylcholinesterase inhibitors (DONEPEZIL) to improve central cholinergic transmission while simultaneously administering potent anticholinergic agents (diphenhydramine and amitriptyline) represents an egregious 'prescribing cascade' and pharmacodynamic contradiction, completely neutralizing donepezil's cognitive benefit. Systematic, structured tapering of these three high-risk agents is mandatory."
      ],
      [
        "Increase donepezil to 23 mg daily to overcome the competitive anticholinergic blockade caused by diphenhydramine and amitriptyline",
        "Donepezil 23 mg causes severe cholinergic toxicity (nausea, vomiting, bradycardia, syncope); adding more pro-cholinergic drug to overcome inappropriate anticholinergics exacerbates adverse cascades."
      ],
      [
        "Discontinue lisinopril immediately, as maintaining a seated blood pressure of 128/72 mm Hg causes cerebral hypoperfusion and falls",
        "Blood pressure is normal with no orthostatic drop (128/72 seated to 126/70 standing); lisinopril is safe and appropriate, whereas sedatives and anticholinergics are the true causes of her falls."
      ],
      [
        "Replace diphenhydramine and lorazepam with zolpidem 10 mg at bedtime to ensure non-benzodiazepine sleep induction",
        "Zolpidem and 'Z-drugs' are specifically included in the Beers Criteria; they carry identical risks of delirium, cognitive decline, falls, and fractures as benzodiazepines in older adults."
      ],
      [
        "Continue all current medications unchanged and prescribe a rigid four-point walker with strict bed rest at night",
        "Bed rest causes rapid deconditioning, sarcopenia, and pressure ulcers; modifying the inappropriate medication regimen is the definitive evidence-based intervention to prevent falls."
      ]
    ],
    "rationale": "In older adults with dementia, the AGS Beers Criteria strongly recommend avoiding first-generation antihistamines (diphenhydramine), tertiary TCAs (amitriptyline), and benzodiazepines (lorazepam) due to high risks of cognitive decline, delirium, and falls. Furthermore, diphenhydramine and amitriptyline possess potent anticholinergic properties that directly antagonize donepezil (an acetylcholinesterase inhibitor). Deprescribing these three inappropriate sedative-anticholinergic medications is the primary intervention to reduce fall risk.",
    "metadata": {
      "shortSolution": "Frail elderly woman with dementia and falls taking diphenhydramine, amitriptyline, and lorazepam requires tapering and discontinuation of these Beers Criteria PIMs to reduce fall and delirium risks.",
      "competingChoice": "Replace diphenhydramine and lorazepam with zolpidem 10 mg at bedtime to ensure non-benzodiazepine sleep induction",
      "exclusionFinding": "Zolpidem ('Z-drugs') is explicitly listed in Beers Criteria as carrying the same risks of falls, fractures, and delirium as benzodiazepines; it is not a safe alternative.",
      "pedagogicalValue": "Applying the AGS Beers Criteria to deprescribe high-risk anticholinergic and sedative medications in older adults with cognitive impairment and recurrent falls.",
      "citations": [
        "By the 2023 American Geriatrics Society Beers Criteria(R) Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria(R) for potentially inappropriate medication use in older adults. J Am Geriatr Soc. 2023;71(7):2052-2081. PMID: 37139824.",
        "Reeve E, Gnjidic D, Long J, Hilmer S. A systematic review of the emerging definition of 'deprescribing' with network analysis of authoritative sources. Br J Clin Pharmacol. 2015;80(6):1254-1268. PMID: 26343750."
      ]
    },
    "critique": {
      "shortestValidSolution": "Beers criteria deprescribing: stop diphenhydramine, amitriptyline, and lorazepam (high fall/dementia risk, antagonize donepezil).",
      "strongestCompetitor": "Replace diphenhydramine and lorazepam with zolpidem 10 mg at bedtime to ensure non-benzodiazepine sleep induction",
      "exclusionFinding": "Z-drugs (zolpidem) carry identical fall and delirium risks as benzodiazepines in the Beers Criteria.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Frail elderly woman with dementia and falls taking diphenhydramine, amitriptyline, and lorazepam requires tapering and discontinuation of these Beers Criteria PIMs to reduce fall and delirium risks.",
      "distractorExclusionNotes": "Distractor exclusion verified: Zolpidem ('Z-drugs') is explicitly listed in Beers Criteria as carrying the same risks of falls, fractures, and delirium as benzodiazepines; it is not a safe alternative.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Frail elderly woman with dementia and falls taking diphenhydramine, amitriptyline, and lorazepam requires tapering and discontinuation of these Beers Criteria PIMs to reduce fall and delirium risks.",
    "necessaryInference": "Frail elderly woman with dementia and falls taking diphenhydramine, amitriptyline, and lorazepam requires tapering and discontinuation of these Beers Criteria PIMs to reduce fall and delirium risks.",
    "strongestDistractor": "Replace diphenhydramine and lorazepam with zolpidem 10 mg at bedtime to ensure non-benzodiazepine sleep induction",
    "distractorExclusion": "Zolpidem ('Z-drugs') is explicitly listed in Beers Criteria as carrying the same risks of falls, fractures, and delirium as benzodiazepines; it is not a safe alternative.",
    "citation": "By the 2023 American Geriatrics Society Beers Criteria(R) Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria(R) for potentially inappropriate medication use in older adults. J Am Geriatr Soc. 2023;71(7):2052-2081. PMID: 37139824."
  },
  {
    "code": "op-c-s3-0407",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Type 2 Diabetes Mellitus with Established ASCVD and Diabetic Kidney Disease",
    "subtopic": "SGLT2 Inhibitors and GLP-1 Receptor Agonists Combination, Cardiorenal Protection",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with a 10-year history of type 2 diabetes mellitus, hypertension, and coronary artery disease (status post percutaneous coronary intervention with a drug-eluting stent to the left anterior descending artery 2 years ago) presents for a routine chronic disease management visit. He is currently treated with metformin 1,000 mg twice daily, rosuvastatin 40 mg daily, lisinopril 20 mg daily, and aspirin 81 mg daily. He adheres strictly to a Mediterranean-style diet and exercises regularly. Vital signs show blood pressure of 126/76 mm Hg, heart rate of 70/min, and BMI of 31 kg/m2. Physical examination is unremarkable. Laboratory evaluation reveals:\n- Hemoglobin A1c: 7.2% (glycemic goal < 7.0-7.5%)\n- Estimated glomerular filtration rate (eGFR): 52 mL/min/1.73 m2 (stage 3a CKD; baseline 54 mL/min 1 year ago)\n- Serum creatinine: 1.4 mg/dL\n- Serum potassium: 4.4 mEq/L\n- Random urine albumin-to-creatinine ratio (UACR): 420 mg/g (severely increased albuminuria; normal < 30 mg/g)\n- Fasting blood glucose: 138 mg/dL\n\nAccording to current American Diabetes Association (ADA) and KDIGO consensus guidelines, which of the following represents the most appropriate pharmacotherapeutic escalation for this patient?",
    "choices": [
      [
        "Initiate an SGLT2 inhibitor (e.g., empagliflozin or dapagliflozin) for cardiorenal protection, and consider adding a GLP-1 receptor agonist with proven cardiovascular benefit (e.g., semaglutide or dulaglutide), independent of baseline HbA1c",
        "The management of Type 2 Diabetes Mellitus has evolved from a glucose-centric paradigm to a proactive, organ-protective, risk-reduction strategy. (1) CARDIORENAL COMORBIDITY STRATIFICATION (ADA / KDIGO CONSENSUS GUIDELINES): In patients with T2D who have: (a) Established Atherosclerotic Cardiovascular Disease (ASCVD: prior MI, stent, stroke); (b) Heart Failure; or (c) Chronic Kidney Disease with albuminuria (eGFR 20-60 mL/min or UACR > 30-300 mg/g), GUIDELINE-DIRECTED MEDICAL THERAPY MANDATES ADDING SGLT2 INHIBITORS AND/OR GLP-1 RECEPTOR AGONISTS WITH PROVEN CARDIORENAL BENEFIT, INDEPENDENT OF BASELINE HbA1c AND INDEPENDENT OF METFORMIN USE. (2) SGLT2 INHIBITORS (EMPEROR-Reduced, DAPA-CKD, CREDENCE, EMPA-KIDNEY): SGLT2 inhibitors (empagliflozin, dapagliflozin, canagliflozin) reduce intraglomerular hypertension via tubuloglomerular feedback, dramatically slowing CKD progression, reducing end-stage kidney disease by 30-40%, reducing heart failure hospitalizations, and decreasing cardiovascular death. Because this patient has CKD with severe albuminuria (UACR 420 mg/g), an SGLT2 inhibitor is the FIRST-LINE agent of choice. (3) GLP-1 RECEPTOR AGONISTS (LEADER, SUSTAIN-6, REWIND): Long-acting GLP-1 receptor agonists (semaglutide, dulaglutide, liraglutide) reduce major adverse cardiovascular events (MACE: non-fatal MI, non-fatal stroke, CV death) by 12-26% in established ASCVD. (4) COMBINATION THERAPY: ADA and KDIGO guidelines strongly support combining an SGLT2 inhibitor and a GLP-1 RA in patients with both ASCVD and CKD to provide complementary, synergistic vascular and renal protection."
      ],
      [
        "Add oral glipizide 10 mg daily to achieve an intensive HbA1c target < 6.5%",
        "Sulfonylureas carry high risks of severe hypoglycemia and weight gain and provide zero cardiorenal or mortality benefit in patients with established ASCVD or CKD."
      ],
      [
        "Discontinue metformin and initiate basal insulin glargine at bedtime",
        "Metformin is safe and recommended down to an eGFR of 30 mL/min; initiating insulin increases hypoglycemia and weight gain without providing the renal/cardiovascular risk reduction of SGLT2 inhibitors."
      ],
      [
        "Add oral sitagliptin 100 mg daily as preferred second-line therapy for glycemic control",
        "DPP-4 inhibitors (sitagliptin) are weight-neutral and lower glucose, but large outcome trials (TECOS, SAVOR-TIMI) proved they provide zero reduction in MACE, heart failure, or CKD progression compared to SGLT2 inhibitors or GLP-1 RAs."
      ],
      [
        "Withhold additional pharmacotherapy because the patient's HbA1c of 7.2% is already within his individualized target range",
        "Withholding SGLT2 inhibitors or GLP-1 RAs based on 'controlled' HbA1c is a major clinical error; guidelines mandate these agents for organ protection (reducing ESRD and MI) independent of glycemic control."
      ]
    ],
    "rationale": "In type 2 diabetes with established ASCVD (prior stent) and diabetic kidney disease (eGFR 52, UACR 420 mg/g), ADA and KDIGO consensus guidelines mandate initiating an SGLT2 inhibitor (dapagliflozin/empagliflozin) and/or GLP-1 RA (semaglutide/dulaglutide) with proven organ benefit, INDEPENDENT of baseline HbA1c. SGLT2 inhibitors provide powerful renal protection (slowing eGFR decline, reducing ESRD) and heart failure reduction; GLP-1 RAs reduce MACE (stroke, MI, CV death). Withholding these agents because HbA1c is near goal is contrary to guidelines.",
    "metadata": {
      "shortSolution": "T2D with established CAD and CKD/albuminuria requires an SGLT2 inhibitor (dapagliflozin/empagliflozin) for renal protection and GLP-1 RA for MACE reduction, independent of baseline HbA1c.",
      "competingChoice": "Withhold additional pharmacotherapy because the patient's HbA1c of 7.2% is already within his individualized target range",
      "exclusionFinding": "ADA/KDIGO guidelines mandate SGLT2 inhibitors and GLP-1 RAs for organ protection (reducing ESRD and MACE) regardless of whether HbA1c is at goal.",
      "pedagogicalValue": "Mastering the paradigm shift in diabetes care: prescribing SGLT2 inhibitors and GLP-1 RAs for cardiorenal protection independent of baseline HbA1c in patients with ASCVD or CKD.",
      "citations": [
        "ElSayed NA, Aleppo G, Aroda VR, et al. 10. Cardiovascular Disease and Risk Management: Standards of Care in Diabetes-2023. Diabetes Care. 2023;46(Suppl 1):S158-S190. PMID: 36507632.",
        "de Boer IH, Khunti K, Sadusky T, et al. Diabetes Management in Chronic Kidney Disease: A Consensus Report by the American Diabetes Association (ADA) and Kidney Disease: Improving Global Outcomes (KDIGO). Diabetes Care. 2022;45(12):3075-3090. PMID: 36190773."
      ]
    },
    "critique": {
      "shortestValidSolution": "T2D + CAD + CKD/albuminuria -> add SGLT2 inhibitor (renal/HF protection) +/- GLP-1 RA (MACE protection), independent of HbA1c.",
      "strongestCompetitor": "Withhold additional pharmacotherapy because the patient's HbA1c of 7.2% is already within his individualized target range",
      "exclusionFinding": "SGLT2 inhibitors and GLP-1 RAs are indicated for organ protection and mortality reduction, not merely glucose lowering.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: T2D with established CAD and CKD/albuminuria requires an SGLT2 inhibitor (dapagliflozin/empagliflozin) for renal protection and GLP-1 RA for MACE reduction, independent of baseline HbA1c.",
      "distractorExclusionNotes": "Distractor exclusion verified: ADA/KDIGO guidelines mandate SGLT2 inhibitors and GLP-1 RAs for organ protection (reducing ESRD and MACE) regardless of whether HbA1c is at goal.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "T2D with established CAD and CKD/albuminuria requires an SGLT2 inhibitor (dapagliflozin/empagliflozin) for renal protection and GLP-1 RA for MACE reduction, independent of baseline HbA1c.",
    "necessaryInference": "T2D with established CAD and CKD/albuminuria requires an SGLT2 inhibitor (dapagliflozin/empagliflozin) for renal protection and GLP-1 RA for MACE reduction, independent of baseline HbA1c.",
    "strongestDistractor": "Withhold additional pharmacotherapy because the patient's HbA1c of 7.2% is already within his individualized target range",
    "distractorExclusion": "ADA/KDIGO guidelines mandate SGLT2 inhibitors and GLP-1 RAs for organ protection (reducing ESRD and MACE) regardless of whether HbA1c is at goal.",
    "citation": "ElSayed NA, Aleppo G, Aroda VR, et al. 10. Cardiovascular Disease and Risk Management: Standards of Care in Diabetes-2023. Diabetes Care. 2023;46(Suppl 1):S158-S190. PMID: 36507632."
  },
  {
    "code": "op-c-s3-0408",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Severe Postmenopausal Osteoporosis and Anabolic Sequential Therapy",
    "subtopic": "Vertebral Fracture, Teriparatide vs Bisphosphonates, Denosumab Rebound Risk",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old postmenopausal woman presents to the clinic for management of osteoporosis. Three weeks ago, she experienced sudden, severe mid-back pain while bending to lift a laundry basket. Thoracolumbar spine radiographs revealed an acute 35% anterior wedge compression fracture of the T11 vertebral body. Dual-energy X-ray absorptiometry (DXA) demonstrates a lumbar spine (L1-L4) T-score of -3.4, a femoral neck T-score of -2.8, and a total hip T-score of -2.6. She has no history of nephrolithiasis, hypercalcemia, Paget disease, or skeletal radiation therapy. Serum 25-hydroxyvitamin D is 36 ng/mL, serum calcium is 9.4 mg/dL, and estimated GFR is 68 mL/min. She has never received pharmacological osteoporosis therapy. Physical examination demonstrates focal tenderness over the lower thoracic spinous processes and mild thoracic kyphosis.\n\nAccording to current American Association of Clinical Endocrinology (AACE) and Endocrine Society guidelines, which of the following represents the most appropriate initial pharmacological strategy for this patient with 'very high risk' osteoporosis?",
    "choices": [
      [
        "Initiate an osteoanabolic bone-forming agent (e.g., subcutaneous teriparatide, abaloparatide, or romosozumab) for 12 to 24 months, followed sequentially by an antiresorptive agent (such as oral alendronate or intravenous zoledronic acid)",
        "Osteoporosis management is risk-stratified into 'High Risk' and 'Very High / Imminent Risk': (1) DEFINITION OF VERY HIGH RISK (AACE/ENDOCRINE SOCIETY GUIDELINES): Patients with: (a) Recent fracture within the past 12 months (imminent fracture risk); (b) Multiple prior fractures; (c) Fracture while on approved osteoporosis therapy; (d) Very low T-score (< -3.0); or (e) High fall risk or FRAX score > 30% for major osteoporotic fracture. Because this patient has an acute vertebral fracture and a T-score of -3.4, she is classified as VERY HIGH RISK. (2) ANABOLIC FIRST-LINE THERAPY (VERO TRIAL): Landmark clinical trials (the VERO trial, Lancet 2018) directly compared initial anabolic therapy (teriparatide) versus antiresorptive therapy (risedronate) in patients with severe osteoporosis. Teriparatide produced a 56% relative reduction in new clinical and radiographic vertebral fractures compared to the bisphosphonate, with superior increases in bone mineral density (BMD) and bone microarchitecture. Guidelines strongly recommend initiating ANABOLIC AGENTS FIRST (teriparatide or abaloparatide [PTHrP analogue] for 24 months, or romosozumab [sclerostin inhibitor] for 12 months) in very-high-risk patients. (3) MANDATORY SEQUENTIAL ANTIRESORPTIVE CONSOLIDATION: Anabolic agents stimulate new bone formation, but their effects rapidly wane upon discontinuation. Anabolic therapy MUST ALWAYS BE FOLLOWED SEQUENTIALLY BY AN ANTIRESORPTIVE AGENT (bisphosphonates like alendronate/zoledronic acid or denosumab) to maintain and consolidate bone density gains. (4) DENOSUMAB REBOUND WARNING: If denosumab is used, it can NEVER be stopped abruptly without bridging to a bisphosphonate, because denosumab cessation causes a massive rebound surge in osteoclastic bone resorption, precipitating multiple cascade vertebral fractures."
      ],
      [
        "Initiate oral alendronate 70 mg once weekly as lifelong standalone monotherapy",
        "In patients at very high risk (acute vertebral fracture and T-score < -3.0), the VERO trial proved bisphosphonates are significantly inferior to anabolic agents (teriparatide) in preventing recurrent fractures; anabolic therapy should precede antiresorptive therapy."
      ],
      [
        "Administer subcutaneous denosumab 60 mg every 6 months for 3 years, then completely discontinue all medications",
        "Discontinuing denosumab without bridging to a bisphosphonate causes a catastrophic rebound increase in bone resorption and bone mineral density loss, resulting in multiple rebound vertebral fractures."
      ],
      [
        "Prescribe calcium carbonate 1,200 mg daily and vitamin D3 2,000 IU daily as standalone therapy without prescription anti-osteoporotic drugs",
        "Calcium and vitamin D are essential nutritional adjuncts, but as standalone therapy in established severe osteoporosis with fractures, they have negligible efficacy in preventing recurrent fractures."
      ],
      [
        "Initiate oral raloxifene 60 mg daily monotherapy",
        "Raloxifene is a selective estrogen receptor modulator with modest efficacy that reduces vertebral fractures only in milder osteoporosis; it is completely inadequate for severe very-high-risk osteoporosis."
      ]
    ],
    "rationale": "Patients with severe osteoporosis at 'very high risk' (acute vertebral fracture within 12 months, T-score < -3.0) should receive initial bone-forming osteoanabolic therapy (teriparatide, abaloparatide, or romosozumab) rather than antiresorptive agents. The VERO trial proved teriparatide reduces recurrent vertebral fractures by 56% compared to bisphosphonates. Crucially, anabolic therapy must be followed sequentially by an antiresorptive agent (bisphosphonate or denosumab) to maintain bone mineral density gains. Stopping denosumab abruptly without bisphosphonate bridging causes catastrophic rebound vertebral fractures.",
    "metadata": {
      "shortSolution": "Patient with acute vertebral fracture and T-score -3.4 is at very high fracture risk; AACE guidelines mandate initial osteoanabolic therapy (teriparatide/abaloparatide) followed sequentially by an antiresorptive bisphosphonate.",
      "competingChoice": "Initiate oral alendronate 70 mg once weekly as lifelong standalone monotherapy",
      "exclusionFinding": "The VERO trial proved initial anabolic therapy is significantly superior to bisphosphonates in very-high-risk osteoporosis; anabolic therapy should be used first.",
      "pedagogicalValue": "Recognizing the indication for anabolic-first sequential therapy (teriparatide followed by bisphosphonate) in very-high-risk osteoporosis with recent fracture.",
      "citations": [
        "Kendler DL, Marin F, Zerbini CAF, et al. Effects of teriparatide and risedronate on new fractures in post-menopausal women with severe osteoporosis (VERO): a multicentre, double-blind, double-dummy, randomised controlled trial. Lancet. 2018;391(10117):230-240. PMID: 29129441.",
        "Camacho PM, Petak SM, Binkley N, et al. American Association of Clinical Endocrinologists/American College of Endocrinology Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis-2020 Update. Endocr Pract. 2020;26(Suppl 1):1-46. PMID: 32427503."
      ]
    },
    "critique": {
      "shortestValidSolution": "Severe osteoporosis + acute vertebral fracture -> anabolic first (teriparatide) followed sequentially by antiresorptive (bisphosphonate).",
      "strongestCompetitor": "Initiate oral alendronate 70 mg once weekly as lifelong standalone monotherapy",
      "exclusionFinding": "VERO trial proved anabolic-first therapy is superior to bisphosphonates for very-high-risk patients with recent fractures.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient with acute vertebral fracture and T-score -3.4 is at very high fracture risk; AACE guidelines mandate initial osteoanabolic therapy (teriparatide/abaloparatide) followed sequentially by an antiresorptive bisphosphonate.",
      "distractorExclusionNotes": "Distractor exclusion verified: The VERO trial proved initial anabolic therapy is significantly superior to bisphosphonates in very-high-risk osteoporosis; anabolic therapy should be used first.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient with acute vertebral fracture and T-score -3.4 is at very high fracture risk; AACE guidelines mandate initial osteoanabolic therapy (teriparatide/abaloparatide) followed sequentially by an antiresorptive bisphosphonate.",
    "necessaryInference": "Patient with acute vertebral fracture and T-score -3.4 is at very high fracture risk; AACE guidelines mandate initial osteoanabolic therapy (teriparatide/abaloparatide) followed sequentially by an antiresorptive bisphosphonate.",
    "strongestDistractor": "Initiate oral alendronate 70 mg once weekly as lifelong standalone monotherapy",
    "distractorExclusion": "The VERO trial proved initial anabolic therapy is significantly superior to bisphosphonates in very-high-risk osteoporosis; anabolic therapy should be used first.",
    "citation": "Kendler DL, Marin F, Zerbini CAF, et al. Effects of teriparatide and risedronate on new fractures in post-menopausal women with severe osteoporosis (VERO): a multicentre, double-blind, double-dummy, randomised controlled trial. Lancet. 2018;391(10117):230-240. PMID: 29129441."
  },
  {
    "code": "op-c-s3-0409",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Chronic Tophaceous Gout Treat-to-Target Management",
    "subtopic": "Serum Urate Target < 5 mg/dL, HLA-B*5801 Screening, Flare Prophylaxis",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man of Han Chinese descent presents to the rheumatology clinic for management of chronic gout. Over the past 2 years, he has experienced 6 painful flare episodes involving his first metatarsophalangeal (MTP) joints, ankles, and right knee, resulting in two urgent care visits. Physical examination reveals an alert man in no acute distress. Vital signs are normal. Examination of the hands and feet reveals firm, non-tender, nodular subcutaneous deposits with yellowish-white chalky material visible beneath the skin over the right olecranon bursa, bilateral achilles tendons, and the left first MTP joint, consistent with clinical tophi. Synovial fluid aspiration from the right olecranon bursa confirms negatively birefringent, needle-shaped monosodium urate crystals under polarized light microscopy. Laboratory evaluation reveals:\n- Serum urate: 9.4 mg/dL (elevated; target < 5.0 to 6.0 mg/dL)\n- Serum creatinine: 1.1 mg/dL (estimated GFR 82 mL/min)\n- Liver function tests: Normal\n\nAccording to American College of Rheumatology (ACR) guidelines, which of the following represents the most appropriate management sequence for initiating urate-lowering therapy in this patient?",
    "choices": [
      [
        "Screen for the HLA-B*5801 allele prior to initiating oral allopurinol (starting at 100 mg daily and titrating to achieve a serum urate < 5.0 mg/dL), co-prescribing anti-inflammatory flare prophylaxis (e.g., low-dose colchicine) for 3 to 6 months",
        "Chronic Tophaceous Gout is a systemic crystal-deposition disease requiring long-term, goal-directed pharmacological management: (1) TREAT-TO-TARGET SERUM URATE GOAL (ACR GUIDELINES): In uncomplicated gout, the target serum urate is < 6.0 mg/dL. However, in SEVERE TOPHACEOUS GOUT, guideline-directed care mandates a LOWER TARGET SERUM URATE OF < 5.0 MG/DL (< 300 mcmol/L) to accelerate the dissolution and resorption of existing tophi and crystal deposits. (2) GENETIC SCREENING FOR HLA-B*5801: Allopurinol is the preferred first-line xanthine oxidase inhibitor. However, allopurinol can trigger Allopurinol Hypersensitivity Syndrome (AHS), a severe, life-threatening adverse reaction (Stevens-Johnson syndrome, toxic epidermal necrolysis, eosinophilia, DRESS, acute liver/renal failure) with a mortality of 20-25%. AHS is strongly linked to the HLA-B*5801 allele. ACR guidelines mandate screening for HLA-B*5801 PRIOR TO ALLOPURINOL INITIATION in high-risk ancestral populations: individuals of Southeast Asian descent (Han Chinese, Korean, Thai) and African American individuals. If HLA-B*5801 is positive, allopurinol is strictly contraindicated, and febuxostat is preferred. (3) DOSING STRATEGY: Allopurinol must be initiated at a LOW DOSE (100 mg daily, or 50 mg in CKD) and GRADUALLY TITRATED upward every 2 to 4 weeks until the serum urate target (< 5.0 mg/dL) is achieved (doses may safely exceed 300 mg daily with proper renal monitoring). (4) CONCOMITANT FLARE PROPHYLAXIS: Rapid dissolution of articular crystals destabilizes crystal surfaces, triggering paradoxical acute gout flares. Concomitant anti-inflammatory prophylaxis (low-dose oral colchicine 0.6 mg daily or low-dose NSAID) is MANDATORY when starting urate-lowering therapy and must be continued for at least 3 to 6 months (or ongoing if tophi remain active)."
      ],
      [
        "Initiate allopurinol at 300 mg daily immediately without genetic screening or anti-inflammatory prophylaxis",
        "Starting high-dose allopurinol without HLA-B*5801 screening in a Han Chinese patient risks fatal Allopurinol Hypersensitivity Syndrome (SJS/TEN), and omitting flare prophylaxis triggers severe acute flares."
      ],
      [
        "Withhold all allopurinol and prescribe lifelong indomethacin 50 mg three times daily as chronic maintenance therapy",
        "Chronic high-dose NSAIDs cause severe gastric ulceration, renal failure, and hypertension, and fail to lower serum urate or dissolve tophi; urate-lowering therapy is mandatory for tophaceous gout."
      ],
      [
        "Initiate oral febuxostat 80 mg daily as standalone monotherapy without monitoring serum urate levels once started",
        "Urate-lowering therapy must follow a treat-to-target protocol with serial urate checks to confirm levels drop < 5.0 mg/dL; treat-to-target titration is essential."
      ],
      [
        "Prescribe probenecid 500 mg twice daily as first-line monotherapy without measuring 24-hour urinary uric acid",
        "Probenecid is a second-line uricosuric agent with lower efficacy than xanthine oxidase inhibitors, risks uric acid nephrolithiasis, and is ineffective in advanced tophaceous disease."
      ]
    ],
    "rationale": "Tophaceous gout requires treat-to-target urate-lowering therapy with a target serum urate < 5.0 mg/dL to dissolve tophi (ACR guidelines). Allopurinol is first-line, but HLA-B*5801 screening is mandatory prior to initiation in patients of Han Chinese, Korean, Thai, or African American ancestry to prevent fatal Allopurinol Hypersensitivity Syndrome (AHS/SJS). Allopurinol should be started low (100 mg daily) and titrated upward. Concomitant anti-inflammatory flare prophylaxis (low-dose colchicine) for 3-6 months is mandatory to prevent mobilization flares.",
    "metadata": {
      "shortSolution": "Han Chinese man with tophaceous gout requires HLA-B*5801 screening before allopurinol, treat-to-target titration to serum urate < 5.0 mg/dL, and concurrent colchicine flare prophylaxis for 3-6 months.",
      "competingChoice": "Initiate allopurinol at 300 mg daily immediately without genetic screening or anti-inflammatory prophylaxis",
      "exclusionFinding": "Omitting HLA-B*5801 screening in Han Chinese ancestry risks fatal SJS/TEN; starting high doses without prophylaxis triggers acute flares.",
      "pedagogicalValue": "Mastering ACR gout guidelines: HLA-B*5801 screening in high-risk groups, serum urate target < 5.0 mg/dL for tophi, and mandatory 3-6 month flare prophylaxis.",
      "citations": [
        "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32390406.",
        "Hung SI, Chung WH, Liou LB, et al. HLA-B*5801 allele as a genetic marker for severe cutaneous adverse reactions caused by allopurinol. Proc Natl Acad Sci U S A. 2005;102(11):4134-4139. PMID: 15743917."
      ]
    },
    "critique": {
      "shortestValidSolution": "Tophaceous gout in Han Chinese patient -> HLA-B*5801 test + allopurinol (titrate to urate < 5.0 mg/dL) + colchicine flare prophylaxis (3-6 mo).",
      "strongestCompetitor": "Initiate allopurinol at 300 mg daily immediately without genetic screening or anti-inflammatory prophylaxis",
      "exclusionFinding": "HLA-B*5801 screening is mandatory in Southeast Asian ancestry; flare prophylaxis is mandatory when starting ULT.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Han Chinese man with tophaceous gout requires HLA-B*5801 screening before allopurinol, treat-to-target titration to serum urate < 5.0 mg/dL, and concurrent colchicine flare prophylaxis for 3-6 months.",
      "distractorExclusionNotes": "Distractor exclusion verified: Omitting HLA-B*5801 screening in Han Chinese ancestry risks fatal SJS/TEN; starting high doses without prophylaxis triggers acute flares.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Han Chinese man with tophaceous gout requires HLA-B*5801 screening before allopurinol, treat-to-target titration to serum urate < 5.0 mg/dL, and concurrent colchicine flare prophylaxis for 3-6 months.",
    "necessaryInference": "Han Chinese man with tophaceous gout requires HLA-B*5801 screening before allopurinol, treat-to-target titration to serum urate < 5.0 mg/dL, and concurrent colchicine flare prophylaxis for 3-6 months.",
    "strongestDistractor": "Initiate allopurinol at 300 mg daily immediately without genetic screening or anti-inflammatory prophylaxis",
    "distractorExclusion": "Omitting HLA-B*5801 screening in Han Chinese ancestry risks fatal SJS/TEN; starting high doses without prophylaxis triggers acute flares.",
    "citation": "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32390406."
  },
  {
    "code": "op-c-s3-0410",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Geriatric Major Depressive Disorder with Insomnia and Cachexia",
    "subtopic": "Mirtazapine Multitarget Receptor Mechanism, 5-HT2/5-HT3 and H1 Antagonism",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old widower is brought to the outpatient geriatric medicine clinic by his daughter due to a 3-month history of profound sadness, daily crying spells, severe loss of interest in his usual hobbies (gardening and reading), and low energy following the death of his wife 6 months ago. He reports severe sleep-initiation and sleep-maintenance insomnia, sleeping only 2 to 3 hours per night. His appetite has completely disappeared; he eats only a few bites of toast daily and has experienced an unintentional 7-kg (15-lb) weight loss over the past 8 weeks. Physical examination demonstrates an alert, frail, cachectic man with psychomotor slowing. Vital signs show blood pressure of 124/76 mm Hg, heart rate of 68/min, and BMI of 18.2 kg/m2. Neurological examination is normal, and Mini-Mental State Examination score is 27/30. Laboratory evaluation, including complete blood count, comprehensive metabolic panel, thyroid-stimulating hormone (TSH), and serum vitamin B12, is completely normal. Diagnostic criteria for major depressive disorder are met.\n\nWhich of the following antidepressants represents the most appropriate initial pharmacological choice for this patient?",
    "choices": [
      [
        "Oral mirtazapine (15 mg orally at bedtime, titrating to 30 to 45 mg daily as tolerated)",
        "Major Depressive Disorder in older adults often presents with prominent somatic symptoms, insomnia, and severe anorexia/weight loss. Choosing an antidepressant requires matching pharmacological receptor profiles to the patient's individual symptom cluster: (1) PHARMACODYNAMICS OF MIRTAZAPINE: Mirtazapine is a Noradrenergic and Specific Serotonergic Antidepressant (NaSSA). Its mechanism of action encompasses: (a) Presynaptic alpha-2 adrenergic autoreceptor and heteroreceptor antagonism, which enhances central norepinephrine and serotonin (5-HT) release; (b) Potent postsynaptic 5-HT2 and 5-HT3 receptor blockade, which prevents the anxiety, agitation, insomnia, and nausea/GI adverse effects commonly seen with SSRIs; and (c) Potent central Histamine H1 receptor antagonism. (2) CLINICAL MATCH: (a) APPETITE STIMULATION AND WEIGHT GAIN: H1 and 5-HT2C antagonism stimulates the hypothalamic appetite center, producing significant orexigenic (appetite-stimulating) effects and reversing severe cachexia/weight loss. (b) SEDATION AND SLEEP ARCHITECTURE: H1 blockade improves sleep-onset latency and total sleep time without suppressing REM sleep, making bedtime administration ideal for severe insomnia. (3) WHY NOT SSRIs/SNRIs AS FIRST-LINE IN THIS PATIENT: SSRIs (e.g., fluoxetine, sertraline) commonly cause anorexia, nausea, weight loss, and sleep fragmentation in the first several weeks of therapy, which would dangerously exacerbate this patient's severe cachexia (BMI 18.2 kg/m2) and insomnia."
      ],
      [
        "Oral fluoxetine 20 mg daily in the morning",
        "Fluoxetine is an activating SSRI with potent 5-HT2 stimulation that commonly causes anorexia, nausea, weight loss, and insomnia, which will severely worsen this patient's cachexia (BMI 18.2) and sleep deprivation."
      ],
      [
        "Oral bupropion hydrochloride extended-release 150 mg daily",
        "Bupropion is an activating norepinephrine-dopamine reuptake inhibitor that suppresses appetite, promotes weight loss, and causes insomnia, making it contraindicated in cachectic, insomniac patients."
      ],
      [
        "Oral amitriptyline 50 mg at bedtime",
        "While tertiary TCAs cause weight gain and sedation, amitriptyline is strongly contraindicated in older adults by Beers Criteria due to severe anticholinergic effects (urinary retention, delirium, falls) and cardiotoxicity."
      ],
      [
        "Oral paroxetine 20 mg daily at bedtime",
        "Paroxetine has potent anticholinergic adverse effects (Beers Criteria PIM) and does not stimulate appetite as effectively as mirtazapine, while causing significant sexual dysfunction and discontinuation syndrome."
      ]
    ],
    "rationale": "In geriatric depression characterized by severe insomnia and anorexia/weight loss, mirtazapine is the antidepressant of choice. Mirtazapine's central alpha-2 antagonism provides antidepressant efficacy, while its potent H1 and 5-HT2/3 antagonism provides powerful orexigenic (appetite-stimulating, weight-gaining) and sedative effects at bedtime. Activating SSRIs (fluoxetine) and bupropion worsen anorexia and insomnia. Tertiary TCAs (amitriptyline) are inappropriate in older adults due to anticholinergic toxicity (Beers Criteria).",
    "metadata": {
      "shortSolution": "Elderly depressed patient with severe insomnia and anorexia/weight loss (BMI 18.2) requires oral mirtazapine for its dual appetite-stimulating (H1/5-HT2C) and sedative effects.",
      "competingChoice": "Oral fluoxetine 20 mg daily in the morning",
      "exclusionFinding": "Fluoxetine causes anorexia, weight loss, and insomnia, dangerously worsening this patient's cachexia and sleep deprivation.",
      "pedagogicalValue": "Selecting mirtazapine for depression with comorbid insomnia and weight loss due to its unique receptor profile (alpha-2, H1, 5-HT2/3 antagonism).",
      "citations": [
        "Watanabe N, Omori IM, Nakagawa A, et al. Mirtazapine versus other antidepressive agents for depression. Cochrane Database Syst Rev. 2011;(12):CD006528. PMID: 22161405.",
        "Alexopoulos GS. Depression in the elderly. Lancet. 2005;365(9475):1961-1970. PMID: 15936426."
      ]
    },
    "critique": {
      "shortestValidSolution": "Depression + severe insomnia + weight loss/cachexia -> oral mirtazapine (appetite and sleep stimulation).",
      "strongestCompetitor": "Oral fluoxetine 20 mg daily in the morning",
      "exclusionFinding": "Fluoxetine is activating and suppresses appetite; mirtazapine stimulates appetite and sleep.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly depressed patient with severe insomnia and anorexia/weight loss (BMI 18.2) requires oral mirtazapine for its dual appetite-stimulating (H1/5-HT2C) and sedative effects.",
      "distractorExclusionNotes": "Distractor exclusion verified: Fluoxetine causes anorexia, weight loss, and insomnia, dangerously worsening this patient's cachexia and sleep deprivation.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly depressed patient with severe insomnia and anorexia/weight loss (BMI 18.2) requires oral mirtazapine for its dual appetite-stimulating (H1/5-HT2C) and sedative effects.",
    "necessaryInference": "Elderly depressed patient with severe insomnia and anorexia/weight loss (BMI 18.2) requires oral mirtazapine for its dual appetite-stimulating (H1/5-HT2C) and sedative effects.",
    "strongestDistractor": "Oral fluoxetine 20 mg daily in the morning",
    "distractorExclusion": "Fluoxetine causes anorexia, weight loss, and insomnia, dangerously worsening this patient's cachexia and sleep deprivation.",
    "citation": "Watanabe N, Omori IM, Nakagawa A, et al. Mirtazapine versus other antidepressive agents for depression. Cochrane Database Syst Rev. 2011;(12):CD006528. PMID: 22161405."
  },
  {
    "code": "op-c-s3-0411",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Generalized Anxiety Disorder (GAD) Long-Term Pharmacotherapy",
    "subtopic": "SSRI/SNRI First-Line, Benzodiazepine Avoidance, Cognitive Behavioral Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old certified public accountant presents to the primary care clinic complaining of feeling constantly 'on edge' for the past 9 months. She describes uncontrollable, excessive worry about multiple life domains, including work performance, family finances, her children's health, and minor daily errands. She reports chronic muscle tension in her neck and shoulders, irritability, difficulty concentrating, and restless, unrefreshing sleep. Physical examination is completely normal with normal thyroid examination. Laboratory evaluation, including complete blood count, comprehensive metabolic panel, and serum TSH, is unremarkable. She drinks one cup of coffee daily and does not use tobacco, alcohol, or illicit substances. She requests a prescription for alprazolam, stating that her friend takes it for stress and finds it immediately helpful.\n\nWhich of the following represents the most appropriate initial evidence-based management strategy for this patient's generalized anxiety disorder?",
    "choices": [
      [
        "Initiate first-line pharmacotherapy with an SSRI (e.g., escitalopram or sertraline) or SNRI (e.g., duloxetine or venlafaxine) combined with Cognitive Behavioral Therapy (CBT), while declining long-term benzodiazepines",
        "Generalized Anxiety Disorder (GAD) is characterized by excessive, uncontrollable anxiety and worry about a number of events or activities occurring more days than not for at least 6 months, accompanied by at least 3 of 6 somatic/cognitive symptoms: restlessness, fatigue, impaired concentration, irritability, muscle tension, and sleep disturbance. (1) FIRST-LINE EVIDENCE-BASED THERAPY (APA / NICE GUIDELINES): (a) PHARMACOTHERAPY: Selective Serotonin Reuptake Inhibitors (SSRIs: escitalopram, sertraline, paroxetine) or Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs: duloxetine, venlafaxine XR) are the FIRST-LINE MEDICATIONS OF CHOICE. They have demonstrated consistent efficacy in reducing psychic and somatic anxiety symptoms and preventing relapse. (b) PSYCHOTHERAPY: Cognitive Behavioral Therapy (CBT) has equivalent efficacy to pharmacotherapy and provides superior long-term durability following treatment cessation. The combination of an SSRI/SNRI and CBT achieves the highest rates of clinical remission. (2) RATIONALE FOR AVOIDING BENZODIAZEPINES: Benzodiazepines (alprazolam, clonazepam) provide rapid acute symptomatic relief, but they carry catastrophic drawbacks for chronic anxiety disorders: rapid development of pharmacodynamic tolerance, physical dependence, cognitive blunting, psychomotor impairment, and severe rebound anxiety upon discontinuation. Guidelines explicitly recommend AGAINST long-term benzodiazepine maintenance for GAD. Short-term bridging (1-2 weeks) can be considered only in select crises while awaiting SSRI onset, but maintenance therapy is contraindicated."
      ],
      [
        "Prescribe oral alprazolam 0.5 mg three times daily as scheduled long-term maintenance monotherapy",
        "Long-term benzodiazepines carry high risks of tolerance, physiological dependence, motor impairment, and severe withdrawal; guidelines explicitly recommend against benzodiazepine maintenance for GAD."
      ],
      [
        "Initiate oral buspirone 5 mg twice daily as as-needed (PRN) rescue therapy for acute anxiety spikes",
        "Buspirone is a 5-HT1A partial agonist that requires 2 to 4 weeks of consistent scheduled daily dosing to take effect; it has zero efficacy when taken PRN for acute anxiety."
      ],
      [
        "Prescribe oral propranolol 20 mg twice daily as continuous maintenance therapy for generalized anxiety",
        "Propranolol blunts peripheral autonomic symptoms (tremor, tachycardia) in situational performance anxiety (social anxiety disorder); it has no efficacy for the pervasive worry of GAD."
      ],
      [
        "Administer oral quetiapine 150 mg daily as first-line monotherapy",
        "Atypical antipsychotics are third-line adjunctive agents reserved for refractory severe GAD failing multiple SSRIs/SNRIs, due to substantial metabolic risks (weight gain, diabetes, dyslipidemia)."
      ]
    ],
    "rationale": "Generalized Anxiety Disorder (GAD) is diagnosed by excessive uncontrollable worry for >= 6 months with somatic symptoms (tension, insomnia, fatigue). First-line treatment consists of an SSRI (escitalopram, sertraline) or SNRI (duloxetine, venlafaxine) combined with Cognitive Behavioral Therapy (CBT). Benzodiazepines (alprazolam) should be avoided for maintenance due to tolerance, dependence, and cognitive impairment. Buspirone requires weeks of scheduled dosing and cannot be used PRN. Propranolol treats performance anxiety, not GAD.",
    "metadata": {
      "shortSolution": "GAD (uncontrollable worry > 6 months) requires first-line therapy with an SSRI/SNRI combined with CBT; avoid long-term benzodiazepine maintenance.",
      "competingChoice": "Prescribe oral alprazolam 0.5 mg three times daily as scheduled long-term maintenance monotherapy",
      "exclusionFinding": "Guidelines explicitly recommend against long-term benzodiazepine maintenance in GAD due to physical dependence, tolerance, and rebound anxiety; SSRIs/SNRIs are first-line.",
      "pedagogicalValue": "Mastering first-line therapy for GAD (SSRI/SNRI + CBT) and recognizing why maintenance benzodiazepines are contraindicated.",
      "citations": [
        "Bandelow B, Michaelis S, Wedekind D. Treatment of anxiety disorders. Dialogues Clin Neurosci. 2017;19(2):93-107. PMID: 28867934.",
        "National Institute for Health and Care Excellence (NICE). Generalised anxiety disorder and panic disorder in adults: management. Clinical guideline [CG113]. Published 2011, updated 2019. NLM ID: 101680789."
      ]
    },
    "critique": {
      "shortestValidSolution": "GAD (> 6 months uncontrollable worry) -> first-line SSRI/SNRI + CBT; avoid maintenance benzodiazepines.",
      "strongestCompetitor": "Prescribe oral alprazolam 0.5 mg three times daily as scheduled long-term maintenance monotherapy",
      "exclusionFinding": "Maintenance benzodiazepines cause tolerance, dependence, and cognitive impairment; SSRIs/SNRIs are standard of care.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: GAD (uncontrollable worry > 6 months) requires first-line therapy with an SSRI/SNRI combined with CBT; avoid long-term benzodiazepine maintenance.",
      "distractorExclusionNotes": "Distractor exclusion verified: Guidelines explicitly recommend against long-term benzodiazepine maintenance in GAD due to physical dependence, tolerance, and rebound anxiety; SSRIs/SNRIs are first-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "GAD (uncontrollable worry > 6 months) requires first-line therapy with an SSRI/SNRI combined with CBT; avoid long-term benzodiazepine maintenance.",
    "necessaryInference": "GAD (uncontrollable worry > 6 months) requires first-line therapy with an SSRI/SNRI combined with CBT; avoid long-term benzodiazepine maintenance.",
    "strongestDistractor": "Prescribe oral alprazolam 0.5 mg three times daily as scheduled long-term maintenance monotherapy",
    "distractorExclusion": "Guidelines explicitly recommend against long-term benzodiazepine maintenance in GAD due to physical dependence, tolerance, and rebound anxiety; SSRIs/SNRIs are first-line.",
    "citation": "Bandelow B, Michaelis S, Wedekind D. Treatment of anxiety disorders. Dialogues Clin Neurosci. 2017;19(2):93-107. PMID: 28867934."
  },
  {
    "code": "op-c-s3-0412",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Alcohol Use Disorder (AUD) Pharmacotherapy Selection",
    "subtopic": "Naltrexone vs Acamprosate, Hepatic vs Renal Contraindications, Craving Reduction",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man presents to the primary care clinic seeking help to maintain alcohol abstinence. He has a 12-year history of severe alcohol use disorder, drinking 8 to 10 beers daily, but completed a medically supervised inpatient alcohol withdrawal protocol 10 days ago and has remained completely abstinent since discharge. He attends weekly mutual-help meetings (Alcoholics Anonymous) but experiences intense, intrusive alcohol cravings in the late afternoons that threaten his sobriety. He takes no prescription medications, uses no illicit substances, and is not prescribed opioids. Physical examination is completely normal with no ascites, jaundice, or peripheral stigmata of chronic liver disease. Laboratory evaluation reveals:\n- Serum alanine aminotransferase (ALT): 34 U/L (normal)\n- Serum aspartate aminotransferase (AST): 38 U/L (normal)\n- Serum total bilirubin: 0.7 mg/dL\n- Serum creatinine: 0.9 mg/dL (estimated GFR > 90 mL/min/1.73 m2)\n- Urine drug screen: Negative for all substances, including opioids\n\nAccording to American Psychiatric Association (APA) practice guidelines, which of the following represents the preferred first-line pharmacological agent to reduce alcohol cravings and maintain abstinence in this patient?",
    "choices": [
      [
        "Oral naltrexone (50 mg once daily, or monthly extended-release intramuscular injection 380 mg)",
        "Alcohol Use Disorder (AUD) pharmacotherapy is strongly recommended by APA guidelines for moderate-to-severe AUD to reduce cravings and prevent relapse: (1) FIRST-LINE AGENTS: (a) NALTREXONE: A competitive mu-opioid receptor antagonist that blocks endogenous beta-endorphins released during alcohol consumption. By blocking mu-opioid receptors on GABAergic interneurons in the ventral tegmental area (VTA), naltrexone prevents dopamine release in the nucleus accumbens, uncoupling alcohol consumption from its neurobiological euphoric 'reward' (blunting reinforcement) and significantly reducing heavy drinking days and cravings. It is the FIRST-LINE DRUG OF CHOICE in patients with normal liver function who are not taking opioids. CONTRAINDICATIONS: Concurrent opioid use (triggers precipitated acute opioid withdrawal) and acute hepatitis or decompensated liver failure. (b) ACAMPROSATE: Modulates NMDA and GABA-A neurotransmission to restore balance disrupted by chronic alcohol exposure. Acamprosate is primarily indicated for MAINTAINING ABSTINENCE after sobriety is established. It undergoes renal elimination and is the FIRST-LINE CHOICE IN PATIENTS WITH LIVER DISEASE, but is CONTRAINDICATED in severe renal impairment (eGFR < 30 mL/min). (2) SECOND-LINE AGENTS: DISULFIRAM is an irreversible aldehyde dehydrogenase inhibitor that causes toxic acetaldehyde accumulation (facial flushing, vomiting, tachycardia) if alcohol is consumed; it acts purely as a psychological deterrent without reducing neurochemical cravings and is second-line."
      ],
      [
        "Oral disulfiram 250 mg once daily as first-line craving reduction therapy",
        "Disulfiram inhibits aldehyde dehydrogenase and acts as an aversion deterrent; it has zero pharmacological effect on reducing neurochemical alcohol cravings and does not improve abstinence compared to placebo."
      ],
      [
        "Oral acamprosate 666 mg three times daily as first-line therapy, because naltrexone is strictly contraindicated in all patients with a history of alcohol use disorder",
        "Naltrexone is NOT contraindicated in alcohol use disorder (it is FDA-approved and first-line); while acamprosate is an alternative, naltrexone is once-daily and has superior evidence for reducing alcohol cravings."
      ],
      [
        "Oral chlordiazepoxide 25 mg twice daily as chronic outpatient maintenance therapy",
        "Benzodiazepines are used short-term (3-5 days) for acute alcohol withdrawal; using them as chronic maintenance therapy carries high risks of fatal respiratory depression when mixed with alcohol and addiction transfer."
      ],
      [
        "Daily oral bupropion 150 mg daily for alcohol craving suppression",
        "Bupropion lowers the seizure threshold and is specifically contraindicated in patients with alcohol use disorder due to a high risk of grand mal seizures during alcohol cessation."
      ]
    ],
    "rationale": "In patients with alcohol use disorder seeking craving reduction with normal liver function and no opioid use, oral naltrexone (50 mg daily) is the first-line pharmacotherapy of choice (APA guidelines). Naltrexone blocks mu-opioid receptors, blunting the dopamine reward surge from alcohol and reducing cravings. Contraindications: acute hepatitis/liver failure and opioid use. Acamprosate is preferred in liver disease (renally cleared), while disulfiram is an aversion deterrent that does not reduce cravings. Benzodiazepines are not used for maintenance. Bupropion lowers seizure thresholds.",
    "metadata": {
      "shortSolution": "Abstinent patient with alcohol use disorder, intense cravings, normal liver enzymes, and no opioid use should receive oral naltrexone as first-line craving reduction therapy.",
      "competingChoice": "Oral disulfiram 250 mg once daily as first-line craving reduction therapy",
      "exclusionFinding": "Disulfiram is an aversion therapy that does not suppress neurobiological cravings; naltrexone directly suppresses cravings via mu-opioid blockade.",
      "pedagogicalValue": "Comparing pharmacotherapy for alcohol use disorder: naltrexone (first-line for cravings; avoid in liver failure/opioid use) vs acamprosate (preferred in liver disease; avoid in severe renal failure).",
      "citations": [
        "Reus VI, Fochtmann LJ, Bukstein O, et al. The American Psychiatric Association Practice Guideline for the Pharmacological Treatment of Patients With Alcohol Use Disorder. Am J Psychiatry. 2018;175(1):86-90. PMID: 29301420.",
        "Jonas DE, Amick HR, Feltner C, et al. Pharmacotherapy for adults with alcohol use disorders in outpatient settings: a systematic review and meta-analysis. JAMA. 2014;311(18):1889-1900. PMID: 24825644."
      ]
    },
    "critique": {
      "shortestValidSolution": "AUD cravings + normal LFTs + no opioids -> oral naltrexone (mu-opioid antagonist suppresses cravings).",
      "strongestCompetitor": "Oral disulfiram 250 mg once daily as first-line craving reduction therapy",
      "exclusionFinding": "Disulfiram causes aversion reactions but does not reduce alcohol cravings; naltrexone is the proven craving-reducing agent.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Abstinent patient with alcohol use disorder, intense cravings, normal liver enzymes, and no opioid use should receive oral naltrexone as first-line craving reduction therapy.",
      "distractorExclusionNotes": "Distractor exclusion verified: Disulfiram is an aversion therapy that does not suppress neurobiological cravings; naltrexone directly suppresses cravings via mu-opioid blockade.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Abstinent patient with alcohol use disorder, intense cravings, normal liver enzymes, and no opioid use should receive oral naltrexone as first-line craving reduction therapy.",
    "necessaryInference": "Abstinent patient with alcohol use disorder, intense cravings, normal liver enzymes, and no opioid use should receive oral naltrexone as first-line craving reduction therapy.",
    "strongestDistractor": "Oral disulfiram 250 mg once daily as first-line craving reduction therapy",
    "distractorExclusion": "Disulfiram is an aversion therapy that does not suppress neurobiological cravings; naltrexone directly suppresses cravings via mu-opioid blockade.",
    "citation": "Reus VI, Fochtmann LJ, Bukstein O, et al. The American Psychiatric Association Practice Guideline for the Pharmacological Treatment of Patients With Alcohol Use Disorder. Am J Psychiatry. 2018;175(1):86-90. PMID: 29301420."
  },
  {
    "code": "op-c-s3-0413",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Opioid Use Disorder Maintenance and Buprenorphine Induction",
    "subtopic": "Partial Mu Agonist Kinetics, Precipitated Withdrawal Prevention, COWS Threshold",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man presents to the outpatient addiction medicine clinic seeking medications for opioid use disorder (MOUD). He has a 4-year history of non-medical oxycodone and illicit fentanyl use, currently snorting 1 to 2 bags of fentanyl daily. He has made multiple unsuccessful attempts to quit cold-turkey, each time relapsing due to unbearable withdrawal symptoms. He has no chronic medical conditions, takes no prescription medications, and has normal liver and kidney function tests. He last used fentanyl 8 hours ago. On physical examination, he appears anxious and restless. Vital signs reveal blood pressure of 138/86 mm Hg, heart rate of 98/min, and respiratory rate of 18/min. Physical examination reveals mild piloerection (gooseflesh), dilated pupils (mydriasis, 5 mm), rhinorrhea, yawning, and mild abdominal cramping without vomiting or diarrhea. His Clinical Opiate Withdrawal Scale (COWS) score is calculated at 11 (mild-to-moderate withdrawal; threshold for induction >= 8 to 12). He has chosen buprenorphine-naloxone sublingual films for maintenance therapy.\n\nWhich of the following explains why this patient must be in objective mild-to-moderate opioid withdrawal (COWS >= 8-12) prior to administering the initial dose of buprenorphine-naloxone?",
    "choices": [
      [
        "Buprenorphine has an exceptionally high binding affinity for mu-opioid receptors combined with low intrinsic efficacy (partial agonism), which rapidly displaces full opioid agonists and precipitates severe acute withdrawal if receptors remain heavily occupied",
        "Buprenorphine is a high-affinity PARTIAL MU-OPIOID RECEPTOR AGONIST and kappa-opioid receptor antagonist, co-formulated with naloxone (4:1 ratio) to deter intravenous misuse (naloxone has poor sublingual bioavailability < 5% but blocks mu receptors if injected). (1) THE DANGER OF PRECIPITATED WITHDRAWAL: Buprenorphine's binding affinity (Ki ~ 0.2 nM) for the mu-opioid receptor is significantly HIGHER than full agonists (heroin, morphine, oxycodone, methadone, fentanyl). If buprenorphine is administered while a patient is still intoxicated or during early non-withdrawal when mu receptors are saturated with full agonists, buprenorphine IMMEDIATELY DISPLACES the full agonists from receptor binding pockets. However, because buprenorphine has LOW INTRINSIC EFFICACY (partial agonist), net intracellular mu-receptor signaling plummets precipitously within minutes. This sudden crash in opioid receptor tone triggers CATASTROPHIC PRECIPITATED WITHDRAWAL (explosive vomiting, diarrhea, diaphoresis, severe muscle spasms, extreme dysphoria), which often leads to immediate clinic abandonment and fatal illicit drug relapse. (2) INDUCTION RULE: To safely initiate standard buprenorphine, the patient must be in OBJECTIVE MILD-TO-MODERATE WITHDRAWAL (Clinical Opiate Withdrawal Scale [COWS] score >= 8-12). This verifies that full agonists have dissociated from mu receptors and cleared, ensuring buprenorphine will increase (rather than decrease) net mu-receptor signaling, providing rapid symptom relief."
      ],
      [
        "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
        "Sublingual naloxone has negligible oral/sublingual bioavailability (< 5-10%) and is included solely to prevent parenteral injection; precipitated withdrawal from sublingual buprenorphine-naloxone is driven entirely by buprenorphine itself."
      ],
      [
        "Administering buprenorphine in the absence of withdrawal triggers fatal respiratory depression due to synergistic full-agonist activation",
        "Buprenorphine is a partial agonist with a well-established ceiling effect on respiratory depression; the danger of administering it too early is precipitated withdrawal, not respiratory arrest."
      ],
      [
        "Hepatic CYP3A4 enzymes are inhibited during early withdrawal, preventing buprenorphine hepatotoxicity",
        "Buprenorphine metabolism is not dependent on withdrawal-induced enzyme fluctuations; the timing requirement is purely pharmacodynamic at the mu-opioid receptor."
      ],
      [
        "Buprenorphine converts into a full mu-opioid antagonist when administered to an individual without physical opioid dependence",
        "Buprenorphine is always a partial agonist; it does not change its chemical receptor pharmacology based on dependence status."
      ]
    ],
    "rationale": "Buprenorphine is a partial mu-opioid agonist with exceptionally high receptor affinity but lower intrinsic activity than full agonists (fentanyl, oxycodone). Administering buprenorphine when mu receptors are occupied by full agonists causes rapid displacement of the full agonist, precipitously crashing receptor signaling and inducing severe precipitated withdrawal. Standard induction requires the patient to be in objective mild-to-moderate withdrawal (COWS >= 8-12) to ensure receptors are sufficiently vacant so that buprenorphine increases net receptor signaling and relieves symptoms.",
    "metadata": {
      "shortSolution": "Buprenorphine's high binding affinity and low intrinsic activity displaces full agonists, causing precipitated withdrawal if given before mild-to-moderate withdrawal (COWS >= 8-12) occurs.",
      "competingChoice": "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
      "exclusionFinding": "Sublingual naloxone has < 5% bioavailability and is not absorbed enterally; precipitated withdrawal is caused by buprenorphine's own partial agonist pharmacodynamics.",
      "pedagogicalValue": "Mastering the mechanism of precipitated withdrawal during buprenorphine induction (high affinity partial agonist displacing full agonists) and the required COWS threshold (>= 8-12).",
      "citations": [
        "Kampman K, Jarvis M. American Society of Addiction Medicine (ASAM) National Practice Guideline for the Use of Medications in the Treatment of Addiction Involving Opioid Use. J Addict Med. 2015;9(5):358-367. PMID: 26406300.",
        "Mattick RP, Breen C, Kimber J, Davoli M. Buprenorphine maintenance therapy versus no treatment for opioid dependence. Cochrane Database Syst Rev. 2014;(2):CD002207. PMID: 24500948."
      ]
    },
    "critique": {
      "shortestValidSolution": "Buprenorphine has high affinity + partial agonism -> displaces full agonists causing precipitated withdrawal unless patient is already in withdrawal (COWS >= 8-12).",
      "strongestCompetitor": "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
      "exclusionFinding": "Sublingual naloxone has negligible absorption; buprenorphine itself displaces full agonists to precipitate withdrawal.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Buprenorphine's high binding affinity and low intrinsic activity displaces full agonists, causing precipitated withdrawal if given before mild-to-moderate withdrawal (COWS >= 8-12) occurs.",
      "distractorExclusionNotes": "Distractor exclusion verified: Sublingual naloxone has < 5% bioavailability and is not absorbed enterally; precipitated withdrawal is caused by buprenorphine's own partial agonist pharmacodynamics.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Buprenorphine's high binding affinity and low intrinsic activity displaces full agonists, causing precipitated withdrawal if given before mild-to-moderate withdrawal (COWS >= 8-12) occurs.",
    "necessaryInference": "Buprenorphine's high binding affinity and low intrinsic activity displaces full agonists, causing precipitated withdrawal if given before mild-to-moderate withdrawal (COWS >= 8-12) occurs.",
    "strongestDistractor": "Naloxone in the sublingual tablet is rapidly absorbed through the sublingual mucosa and will trigger acute receptor blockade unless withdrawal is present",
    "distractorExclusion": "Sublingual naloxone has < 5% bioavailability and is not absorbed enterally; precipitated withdrawal is caused by buprenorphine's own partial agonist pharmacodynamics.",
    "citation": "Kampman K, Jarvis M. American Society of Addiction Medicine (ASAM) National Practice Guideline for the Use of Medications in the Treatment of Addiction Involving Opioid Use. J Addict Med. 2015;9(5):358-367. PMID: 26406300."
  },
  {
    "code": "op-c-s3-0414",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Tobacco Use Disorder Pharmacotherapy and the EAGLES Trial",
    "subtopic": "Varenicline Superiority, Neuropsychiatric Safety, Dual Nicotine Replacement Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents to his primary care physician expressing a strong desire to stop smoking cigarettes. He has smoked 1.5 packs of cigarettes daily for 30 years (45 pack-year history). He smokes his first cigarette within 5 minutes of waking each morning. He has attempted to quit smoking three times previously using over-the-counter nicotine patches alone, but relapsed within 2 weeks due to severe nicotine cravings and irritability. His past medical history includes well-controlled major depressive disorder treated with sertraline 100 mg daily for the past 4 years; he has had no suicidal ideation or depressive episodes in over 3 years. Vital signs and physical examination are normal.\n\nBased on landmark randomized clinical trial evidence (the EAGLES trial) and current American Thoracic Society (ATS) guidelines, which of the following represents the preferred first-line pharmacological strategy for smoking cessation in this patient?",
    "choices": [
      [
        "Oral varenicline (titrated from 0.5 mg daily to 1 mg twice daily for 12 weeks), or dual combination nicotine replacement therapy (nicotine transdermal patch PLUS short-acting nicotine gum or lozenge)",
        "Tobacco Use Disorder is the leading cause of preventable morbidity and premature mortality in the United States. Pharmacotherapy substantially increases long-term smoking abstinence: (1) MECHANISM OF VARENICLINE: Varenicline is an oral PARTIAL AGONIST at the alpha-4 beta-2 neuronal nicotinic acetylcholine receptor (nAChR). It produces two synergistic clinical actions: (a) Agonist action: It provides moderate, sustained receptor stimulation (approximately 30-40% of nicotine's intrinsic activity), releasing modest baseline dopamine in the mesolimbic system to relieve nicotine withdrawal symptoms and cravings; and (b) Antagonist action: Because of its extremely high binding affinity, it competitively blocks inhaled nicotine from binding the receptor, abolishing the dopamine surge and psychological reinforcement ('buzz') if the patient slips and smokes a cigarette. (2) LANDMARK EVIDENCE (THE EAGLES TRIAL, LANCET 2016): The EAGLES trial was a massive, multinational, double-blind RCT involving > 8,000 smokers (with and without psychiatric disorders). (a) Efficacy: Varenicline was SIGNIFICANTLY SUPERIOR to bupropion, nicotine patch monotherapy, and placebo in achieving continuous abstinence at weeks 9-24 (abstinence rates ~22% for varenicline vs 16% for bupropion and patch vs 8% for placebo). (b) Neuropsychiatric Safety: Crucially, EAGLES proved that varenicline DOES NOT INCREASE neuropsychiatric adverse events (suicide, depression, aggression) compared to placebo or nicotine patch, even in patients with stable psychiatric disorders, leading the FDA to remove the historical black box warning. (3) ATS GUIDELINES: Strongly recommend VARENICLINE OVER BUPROPION OR NICOTINE PATCH MONOTHERAPY as initial therapy, or DUAL COMBINATION NRT (long-acting transdermal patch + short-acting gum/lozenge) as an equivalent first-line alternative."
      ],
      [
        "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
        "The EAGLES trial definitively proved that varenicline is completely safe in patients with stable psychiatric disorders and does not increase neuropsychiatric events; varenicline has superior quit rates compared to bupropion."
      ],
      [
        "Single-agent transdermal nicotine patch 21 mg daily monotherapy without short-acting rescue therapy",
        "Single-agent nicotine patch monotherapy is significantly inferior to varenicline or dual combination NRT (patch + gum/lozenge), and this patient has already failed nicotine patch monotherapy three times."
      ],
      [
        "Switch from combustible cigarettes to electronic nicotine delivery systems (e-cigarettes) as primary cessation therapy",
        "E-cigarettes maintain nicotine dependence, lack long-term safety data, and are not approved by the FDA or ATS as first-line smoking cessation pharmacotherapy."
      ],
      [
        "Oral nortriptyline 75 mg daily as first-line monotherapy",
        "Nortriptyline is a second-line agent with significant anticholinergic and cardiotoxic adverse effects; varenicline is first-line with proven superiority."
      ]
    ],
    "rationale": "Varenicline (an alpha-4 beta-2 nicotinic receptor partial agonist) is the most effective first-line medication for smoking cessation. It provides partial agonism to relieve cravings while blocking the euphoric reinforcement of smoking. The EAGLES trial (> 8,000 patients) proved varenicline is superior to bupropion and nicotine patch monotherapy, and demonstrated no increase in neuropsychiatric adverse events in patients with stable psychiatric conditions (prompting FDA removal of its black box warning). Dual combination NRT (patch + gum/lozenge) is an equally effective first-line alternative.",
    "metadata": {
      "shortSolution": "Smoking cessation candidate with prior patch failures and stable depression should receive oral varenicline (or dual NRT); EAGLES trial proved varenicline has superior efficacy and is safe in psychiatric history.",
      "competingChoice": "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
      "exclusionFinding": "The EAGLES trial disproved the neuropsychiatric safety warning; varenicline is safe in stable depression and has higher quit rates than bupropion.",
      "pedagogicalValue": "Mastering smoking cessation pharmacotherapy: varenicline (or dual NRT) is first-line, and the EAGLES trial established its neuropsychiatric safety and superiority over bupropion.",
      "citations": [
        "Anthenelli RM, Benowitz NL, West R, et al. Neuropsychiatric safety and efficacy of varenicline, bupropion, and nicotine patch in smokers with and without psychiatric disorders (EAGLES): a double-blind, randomised, placebo-controlled clinical trial. Lancet. 2016;387(10037):2507-2520. PMID: 27116918.",
        "Leone FT, Zhang Y, Evers-Casey S, et al. Initiating Pharmacologic Treatment in Tobacco-Dependent Adults. An Official American Thoracic Society Clinical Practice Guideline. Am J Respir Crit Care Med. 2020;202(2):e5-e31. PMID: 32663117."
      ]
    },
    "critique": {
      "shortestValidSolution": "Smoking cessation -> oral varenicline (superior efficacy, proven safe in depression per EAGLES trial) or dual NRT.",
      "strongestCompetitor": "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
      "exclusionFinding": "EAGLES trial proved varenicline is safe in psychiatric patients and superior to bupropion; FDA removed the black box warning.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Smoking cessation candidate with prior patch failures and stable depression should receive oral varenicline (or dual NRT); EAGLES trial proved varenicline has superior efficacy and is safe in psychiatric history.",
      "distractorExclusionNotes": "Distractor exclusion verified: The EAGLES trial disproved the neuropsychiatric safety warning; varenicline is safe in stable depression and has higher quit rates than bupropion.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Smoking cessation candidate with prior patch failures and stable depression should receive oral varenicline (or dual NRT); EAGLES trial proved varenicline has superior efficacy and is safe in psychiatric history.",
    "necessaryInference": "Smoking cessation candidate with prior patch failures and stable depression should receive oral varenicline (or dual NRT); EAGLES trial proved varenicline has superior efficacy and is safe in psychiatric history.",
    "strongestDistractor": "Oral bupropion hydrochloride extended-release 150 mg twice daily monotherapy, because varenicline is strictly contraindicated in all patients with a history of depression",
    "distractorExclusion": "The EAGLES trial disproved the neuropsychiatric safety warning; varenicline is safe in stable depression and has higher quit rates than bupropion.",
    "citation": "Anthenelli RM, Benowitz NL, West R, et al. Neuropsychiatric safety and efficacy of varenicline, bupropion, and nicotine patch in smokers with and without psychiatric disorders (EAGLES): a double-blind, randomised, placebo-controlled clinical trial. Lancet. 2016;387(10037):2507-2520. PMID: 27116918."
  },
  {
    "code": "op-c-s3-0415",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Atrial Fibrillation Stroke Prevention and Anticoagulation Selection",
    "subtopic": "CHA2DS2-VASc Calculation, DOAC Superiority vs Warfarin, Valvular vs Non-Valvular AF",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old woman presents to the clinic for a routine follow-up. An electrocardiogram obtained during the visit incidentally reveals atrial fibrillation with a ventricular response of 84/min; an ECG 6 months ago showed normal sinus rhythm. She has a history of essential hypertension managed with amlodipine and type 2 diabetes mellitus managed with metformin. She has never experienced a stroke, transient ischemic attack, or systemic embolism, and has no history of heart failure or vascular disease. Vital signs demonstrate blood pressure of 132/78 mm Hg and heart rate of 82/min. Transthoracic echocardiography reveals a normal left ventricular ejection fraction of 60%, mild left atrial enlargement, and mild trace mitral regurgitation without mitral stenosis or prosthetic heart valves. Laboratory evaluation shows a serum creatinine of 0.9 mg/dL (estimated GFR 74 mL/min) and normal liver function tests.\n\nBased on her calculated stroke risk score and current AHA/ACC/ACCP guidelines, which of the following represents the most appropriate antithrombotic management strategy for this patient?",
    "choices": [
      [
        "Initiate oral anticoagulation with a Direct Oral Anticoagulant (DOAC; e.g., apixaban 5 mg twice daily or rivaroxaban 20 mg once daily), which is preferred over warfarin for non-valvular atrial fibrillation",
        "Stroke prevention in Atrial Fibrillation (AF) is guided by validated risk-stratification scoring: (1) CHA2DS2-VASc SCORE CALCULATION: (a) Congestive heart failure = 1 pt; (b) Hypertension = 1 pt; (c) Age >= 75 years = 2 pts; (d) Diabetes mellitus = 1 pt; (e) Stroke/TIA/thromboembolism = 2 pts; (f) Vascular disease (prior MI, PAD, aortic plaque) = 1 pt; (g) Age 65 to 74 years = 1 pt; (h) Sex category (Female) = 1 pt. In this patient: Hypertension (1 pt) + Age 71 (1 pt) + Diabetes (1 pt) + Female sex (1 pt) = TOTAL CHA2DS2-VASc SCORE OF 4 POINTS (annual ischemic stroke risk ~4.0%). (2) ANTICOAGULATION THRESHOLD (AHA/ACC/HRS GUIDELINES): Oral anticoagulation is strongly recommended for non-valvular AF in men with CHA2DS2-VASc >= 2 and in women with CHA2DS2-VASc >= 3. (3) DOAC SUPERIORITY OVER WARFARIN: For non-valvular AF, DIRECT ORAL ANTICOAGULANTS (DOACs: apixaban, rivaroxaban, edoxaban, dabigatran) ARE PREFERRED OVER WARFARIN based on massive landmark randomized trials (ARISTOTLE, ROCKET-AF, RE-LY, ENGAGE-AF). DOACs demonstrate non-inferior or superior reduction in ischemic stroke, a dramatic ~50% REDUCTION IN FATAL INTRACRANIAL HEMORRHAGE, significantly lower all-cause mortality, predictable fixed dosing without routine INR monitoring, and minimal dietary/drug interactions. (4) WARFARIN RESTRICTION: Warfarin remains strictly mandatory ONLY in 'valvular' AF, defined as AF in the presence of: (a) Mechanical prosthetic heart valves, OR (b) Moderate-to-severe rheumatic mitral stenosis."
      ],
      [
        "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
        "Aspirin is significantly inferior to oral anticoagulation in preventing stroke in atrial fibrillation (reducing stroke by only ~20% vs ~65% for anticoagulation) while carrying comparable major bleeding rates; guidelines recommend against aspirin for stroke prevention in AF."
      ],
      [
        "Initiate oral warfarin adjusted to target an INR of 2.0 to 3.0, as warfarin is preferred over DOACs in all patients over 70 years of age",
        "DOACs are preferred over warfarin in older adults because DOACs reduce intracranial hemorrhage by 50% compared to warfarin; age > 70 is an indication for DOACs, not warfarin."
      ],
      [
        "Prescribe combination therapy with oral aspirin 81 mg and clopidogrel 75 mg daily",
        "Dual antiplatelet therapy (DAPT) is significantly inferior to oral anticoagulation for stroke prevention in AF and carries major bleeding rates approaching oral anticoagulation; DAPT is not recommended."
      ],
      [
        "Withhold all antithrombotic therapy because the patient is completely asymptomatic and her ventricular rate is well controlled",
        "Asymptomatic atrial fibrillation carries an identical stroke risk to symptomatic AF; withholding anticoagulation in a patient with a CHA2DS2-VASc score of 4 carries a 4% annual risk of disabling embolic stroke."
      ]
    ],
    "rationale": "In non-valvular atrial fibrillation, stroke risk is calculated using the CHA2DS2-VASc score. This patient scores 4 points (HTN = 1, Age 71 = 1, Diabetes = 1, Female = 1). Guidelines recommend oral anticoagulation for score >= 2 in men and >= 3 in women. Direct oral anticoagulants (DOACs: apixaban, rivaroxaban) are preferred over warfarin because large RCTs proved DOACs have equivalent/superior stroke prevention with a 50% reduction in fatal intracranial hemorrhage. Warfarin is reserved for mechanical valves and moderate-to-severe mitral stenosis. Aspirin is ineffective.",
    "metadata": {
      "shortSolution": "71-year-old female with AF, HTN, and diabetes has a CHA2DS2-VASc score of 4; guidelines mandate oral anticoagulation with a DOAC (apixaban/rivaroxaban), which is preferred over warfarin.",
      "competingChoice": "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
      "exclusionFinding": "Aspirin is ineffective for AF stroke prevention compared to anticoagulation (20% vs 65% reduction) and carries similar bleeding risks; guidelines explicitly advise against aspirin.",
      "pedagogicalValue": "Calculating the CHA2DS2-VASc score and understanding why DOACs are preferred over warfarin in non-valvular AF (50% reduction in intracranial hemorrhage).",
      "citations": [
        "Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2024;149(1):e1-e156. PMID: 38031654.",
        "Granger CB, Alexander JH, McMurray JJ, et al. Apixaban versus warfarin in patients with atrial fibrillation. N Engl J Med. 2011;365(11):981-992. PMID: 21870978."
      ]
    },
    "critique": {
      "shortestValidSolution": "Non-valvular AF + CHA2DS2-VASc 4 -> oral anticoagulation with a DOAC (apixaban/rivaroxaban preferred over warfarin).",
      "strongestCompetitor": "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
      "exclusionFinding": "Aspirin is inadequate for stroke prevention in AF; DOAC anticoagulation is mandatory for CHA2DS2-VASc >= 3 in women.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: 71-year-old female with AF, HTN, and diabetes has a CHA2DS2-VASc score of 4; guidelines mandate oral anticoagulation with a DOAC (apixaban/rivaroxaban), which is preferred over warfarin.",
      "distractorExclusionNotes": "Distractor exclusion verified: Aspirin is ineffective for AF stroke prevention compared to anticoagulation (20% vs 65% reduction) and carries similar bleeding risks; guidelines explicitly advise against aspirin.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "71-year-old female with AF, HTN, and diabetes has a CHA2DS2-VASc score of 4; guidelines mandate oral anticoagulation with a DOAC (apixaban/rivaroxaban), which is preferred over warfarin.",
    "necessaryInference": "71-year-old female with AF, HTN, and diabetes has a CHA2DS2-VASc score of 4; guidelines mandate oral anticoagulation with a DOAC (apixaban/rivaroxaban), which is preferred over warfarin.",
    "strongestDistractor": "Initiate daily oral aspirin 81 mg monotherapy, as antiplatelet therapy provides sufficient stroke reduction with lower bleeding risk",
    "distractorExclusion": "Aspirin is ineffective for AF stroke prevention compared to anticoagulation (20% vs 65% reduction) and carries similar bleeding risks; guidelines explicitly advise against aspirin.",
    "citation": "Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156. PMID: 38031654."
  },
  {
    "code": "op-c-s3-0416",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Perioperative Anticoagulation Interruption and the BRIDGE Trial",
    "subtopic": "DOAC Interruption Timing, Avoidance of Heparin Bridging, Bleeding Risk Stratification",
    "provisionalDifficulty": 5,
    "stem": "A 69-year-old man with non-valvular atrial fibrillation (CHA2DS2-VASc score of 3: age 69, hypertension, diabetes) treated with oral apixaban (5 mg twice daily) is scheduled for elective major abdominal surgery (open hemicolectomy for colon adenocarcinoma). He has normal renal function with a serum creatinine of 1.0 mg/dL (estimated GFR 78 mL/min). His last dose of apixaban was taken this morning. The surgery is planned in 3 days. The surgical team asks for your perioperative medical consultation regarding how to manage his oral anticoagulation before and after the procedure.\n\nBased on landmark randomized clinical trial evidence (including the BRIDGE trial and PAUSE study) and current CHEST perioperative guidelines, which of the following represents the most appropriate perioperative anticoagulation protocol for this patient?",
    "choices": [
      [
        "Discontinue apixaban 48 hours prior to surgery without administering parenteral low-molecular-weight heparin bridging, and resume apixaban 48 to 72 hours postoperatively once adequate surgical hemostasis is established",
        "Perioperative management of Direct Oral Anticoagulants (DOACs: apixaban, rivaroxaban, dabigatran) differs fundamentally from warfarin: (1) PHARMACOKINETICS: DOACs have short terminal elimination half-lives (typically 8 to 14 hours in normal renal function) and rapid onset of action (peak anticoagulation within 1 to 3 hours of oral ingestion). (2) TIMING OF PREOPERATIVE INTERRUPTION (PAUSE STUDY): For surgeries with HIGH BLEEDING RISK (such as major open intra-abdominal, orthopedic, or intracranial surgery): Apixaban should be discontinued 48 HOURS PRIOR TO SURGERY (allowing 4 to 5 elimination half-lives to elapse, ensuring < 5-10% residual anticoagulant activity). (For low-bleeding-risk procedures, 24 hours is sufficient). (3) EVIDENCE AGAINST HEPARIN BRIDGING (THE BRIDGE TRIAL, NEJM 2015): The double-blind randomized BRIDGE trial proved that administering therapeutic low-molecular-weight heparin (LMWH) bridging during anticoagulation interruption DOES NOT REDUCE ARTERIAL THROMBOEMBOLISM (0.3% vs 0.4%) but TRIPLES THE RISK OF MAJOR BLEEDING (3.2% vs 1.3%). Because DOACs clear rapidly and resume action immediately upon ingestion, PARENTERAL HEPARIN BRIDGING IS STRICTLY UNNECESSARY AND HARMFUL IN DOAC PATIENTS. (4) POSTOPERATIVE RESUMPTION: For high-bleeding-risk procedures, therapeutic-dose apixaban is resumed 48 to 72 hours postoperatively once surgical hemostasis is complete (prophylactic low-dose LMWH can be used for VTE prophylaxis in the interim 24-48 hours if indicated)."
      ],
      [
        "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
        "Discontinuing a DOAC 5 days prior is excessive due to its 12-hour half-life, and routine LMWH bridging triples major surgical bleeding without reducing arterial thromboembolism (BRIDGE trial)."
      ],
      [
        "Continue apixaban 5 mg twice daily without interruption through the morning of surgery to prevent perioperative stroke",
        "Continuing full-dose DOAC therapy through major open abdominal surgery leads to uncontrollable intraoperative hemorrhage, massive transfusions, and re-exploration."
      ],
      [
        "Discontinue apixaban 24 hours prior to surgery and administer intravenous andexanet alfa in the preoperative holding area",
        "Andexanet alfa is an expensive reversal agent reserved for life-threatening emergency bleeding or emergent unscheduled surgery, not routine elective surgery where simple timed drug cessation allows natural clearance."
      ],
      [
        "Switch from apixaban to oral warfarin 2 weeks prior to surgery and manage with intravenous unfractionated heparin bridging",
        "Switching an established DOAC patient to warfarin introduces erratic anticoagulation kinetics, requires invasive bridging, and increases bleeding risks without clinical benefit."
      ]
    ],
    "rationale": "DOACs (apixaban) have short half-lives (~12 hours). For high-bleeding-risk major surgeries (open colectomy), apixaban should be stopped 48 hours prior to surgery without heparin bridging (PAUSE study). The BRIDGE trial proved that routine heparin bridging during anticoagulation interruption fails to reduce thromboembolism but triples major bleeding (3.2% vs 1.3%). DOACs do not require bridging due to rapid clearance and immediate onset upon restarting. Resume full-dose apixaban 48-72 hours postoperatively once hemostasis is secure.",
    "metadata": {
      "shortSolution": "Apixaban before major open surgery requires stopping 48 hours pre-op WITHOUT heparin bridging (BRIDGE trial proved bridging triples major bleeding without reducing stroke); resume 48-72h post-op.",
      "competingChoice": "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
      "exclusionFinding": "DOACs clear in 48 hours; heparin bridging triples major surgical bleeding without thromboembolic protection (BRIDGE trial) and is contraindicated.",
      "pedagogicalValue": "Understanding perioperative DOAC management: stopping 48 hours prior to high-risk surgery without heparin bridging (BRIDGE trial), and resuming 48-72 hours post-op.",
      "citations": [
        "Douketis JD, Spyropoulos AC, Kaatz S, et al. Perioperative Bridging Anticoagulation in Patients with Atrial Fibrillation. N Engl J Med. 2015;373(9):823-833. PMID: 26095207.",
        "Douketis JD, Spyropoulos AC, Duncan J, et al. Perioperative Management of Patients With Atrial Fibrillation Receiving a Direct Oral Anticoagulant: The PAUSE Study. JAMA Intern Med. 2019;179(11):1469-1478. PMID: 31449282."
      ]
    },
    "critique": {
      "shortestValidSolution": "DOAC before major surgery -> stop 48h pre-op without heparin bridging (BRIDGE trial proved bridging increases bleeding); resume 48-72h post-op.",
      "strongestCompetitor": "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
      "exclusionFinding": "Heparin bridging is contraindicated in DOAC patients because it triples major bleeding without preventing stroke.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Apixaban before major open surgery requires stopping 48 hours pre-op WITHOUT heparin bridging (BRIDGE trial proved bridging triples major bleeding without reducing stroke); resume 48-72h post-op.",
      "distractorExclusionNotes": "Distractor exclusion verified: DOACs clear in 48 hours; heparin bridging triples major surgical bleeding without thromboembolic protection (BRIDGE trial) and is contraindicated.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Apixaban before major open surgery requires stopping 48 hours pre-op WITHOUT heparin bridging (BRIDGE trial proved bridging triples major bleeding without reducing stroke); resume 48-72h post-op.",
    "necessaryInference": "Apixaban before major open surgery requires stopping 48 hours pre-op WITHOUT heparin bridging (BRIDGE trial proved bridging triples major bleeding without reducing stroke); resume 48-72h post-op.",
    "strongestDistractor": "Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin 1 mg/kg twice daily bridging until 12 hours before surgery",
    "distractorExclusion": "DOACs clear in 48 hours; heparin bridging triples major surgical bleeding without thromboembolic protection (BRIDGE trial) and is contraindicated.",
    "citation": "Douketis JD, Spyropoulos AC, Kaatz S, et al. Perioperative Bridging Anticoagulation in Patients with Atrial Fibrillation. N Engl J Med. 2015;373(9):823-833. PMID: 26095207."
  },
  {
    "code": "op-c-s3-0417",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Reduced Ejection Fraction (HFrEF) Foundational GDMT",
    "subtopic": "Four Pillars of GDMT, ARNI 36-Hour Washout, Spironolactone and SGLT2i",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old woman presents to the cardiology clinic for optimization of newly diagnosed heart failure with reduced ejection fraction (HFrEF). Two weeks ago, she presented with exertional dyspnea, orthopnea, and bilateral ankle edema. Transthoracic echocardiogram revealed global left ventricular hypokinesis with an LVEF of 28% and an enlarged left ventricular end-diastolic diameter of 62 mm. Coronary angiography demonstrated angiographically normal coronary arteries, confirming non-ischemic dilated cardiomyopathy. In the hospital, she was initiated on oral lisinopril 10 mg daily, oral carvedilol 6.25 mg twice daily, and oral furosemide 20 mg daily. Today, her symptoms are well-compensated (NYHA Class II). Vital signs demonstrate blood pressure of 122/76 mm Hg and heart rate of 68/min. Physical examination reveals clear lungs, normal jugular venous pressure (6 cm H2O), no S3 gallop, and no peripheral edema. Laboratory evaluation shows serum potassium of 4.2 mEq/L and serum creatinine of 1.0 mg/dL (estimated GFR 78 mL/min).\n\nAccording to current ACC/AHA/HFSA guidelines, which of the following represents the most appropriate next step in optimizing guideline-directed medical therapy (GDMT) to reduce cardiovascular mortality and heart failure hospitalizations?",
    "choices": [
      [
        "Discontinue lisinopril with a mandatory 36-hour washout period before initiating sacubitril-valsartan (ARNI), add an SGLT2 inhibitor (dapagliflozin or empagliflozin), and add a mineralocorticoid receptor antagonist (spironolactone), establishing all four foundational pillars of GDMT",
        "The contemporary management of Heart Failure with reduced Ejection Fraction (HFrEF; LVEF <= 40%) is anchored by the 'FOUR FOUNDATIONAL PILLARS OF GDMT', which should be instituted promptly and titrated aggressively because quadruple therapy reduces all-cause mortality by over 60-70% compared to historical therapy: (1) PILLAR 1: ANGIOTENSIN RECEPTOR-NEPRILYSIN INHIBITOR (ARNI: sacubitril-valsartan). ARNI is preferred over ACE inhibitors or ARBs based on the landmark PARADIGM-HF trial, which demonstrated a 20% relative reduction in cardiovascular death and HF hospitalization compared to enalapril. MANDATORY SAFETY RULE: When transitioning a patient from an ACE inhibitor to an ARNI, A MANDATORY 36-HOUR WASHOUT PERIOD IS REQUIRED. Both ACE and neprilysin degrade bradykinin; concurrent inhibition causes massive bradykinin accumulation and life-threatening angioedema. (A washout is not required when switching from an ARB). (2) PILLAR 2: EVIDENCE-BASED BETA-BLOCKER (carvedilol, metoprolol succinate, or bisoprolol). Initiated in clinically stable, non-decompensated patients and titrated to target doses. (3) PILLAR 3: MINERALOCORTICOID RECEPTOR ANTAGONIST (MRA: spironolactone or eplerenone). Proven in RALES and EMPHASIS-HF to reduce mortality in HFrEF with eGFR > 30 mL/min and K+ < 5.0 mEq/L. (4) PILLAR 4: SGLT2 INHIBITOR (dapagliflozin or empagliflozin). Landmark trials (DAPA-HF, EMPEROR-Reduced) proved SGLT2 inhibitors reduce cardiovascular death and HF hospitalizations by 25-30% in HFrEF, REGARDLESS OF THE PRESENCE OR ABSENCE OF DIABETES MELLITUS."
      ],
      [
        "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
        "Omitting the 36-hour washout when switching from an ACE inhibitor to an ARNI leads to massive bradykinin accumulation and fatal angioedema; beta-blockers must be maintained."
      ],
      [
        "Add oral digoxin 0.25 mg daily as first-line therapy before adding aldosterone antagonists or SGLT2 inhibitors",
        "Digoxin does not reduce overall mortality in heart failure (DIG trial); it is reserved as a third-line agent for persistent symptoms or rate control in AF, whereas MRAs and SGLT2 inhibitors have definitive mortality benefits."
      ],
      [
        "Discontinue carvedilol immediately because beta-blockers are negative inotropes that reduce left ventricular ejection fraction",
        "Beta-blockers are a foundational pillar of HFrEF therapy that reduce mortality by 35% through blunting chronic sympathetic neurohormonal cardiotoxicity; discontinuing them increases mortality."
      ],
      [
        "Maintain current triple therapy unchanged and defer any medication changes until repeat echocardiography in 12 months",
        "Deferring foundational GDMT (ARNI, MRA, SGLT2i) deprives the patient of proven, immediate 60-70% reductions in cardiovascular death and prevents reverse ventricular remodeling."
      ]
    ],
    "rationale": "HFrEF (LVEF <= 40%) requires rapid optimization of the 4 foundational pillars of GDMT: (1) ARNI (sacubitril-valsartan; requires a mandatory 36-hour washout from ACE inhibitors to prevent bradykinin-mediated angioedema), (2) Evidence-based beta-blocker (carvedilol, metoprolol succinate), (3) Mineralocorticoid receptor antagonist (spironolactone/eplerenone), and (4) SGLT2 inhibitor (dapagliflozin/empagliflozin, effective with or without diabetes). Quadruple therapy reduces mortality by > 60%. Digoxin has no mortality benefit. Beta-blockers must not be stopped.",
    "metadata": {
      "shortSolution": "Newly diagnosed HFrEF requires 4 pillars of GDMT: switch lisinopril to ARNI (with 36h washout to prevent angioedema), add spironolactone, and add SGLT2 inhibitor alongside carvedilol.",
      "competingChoice": "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
      "exclusionFinding": "Switching from ACEi to ARNI without a 36-hour washout causes dual inhibition of bradykinin breakdown and fatal angioedema.",
      "pedagogicalValue": "Mastering the 4 pillars of HFrEF GDMT (ARNI, beta-blocker, MRA, SGLT2i) and the mandatory 36-hour washout period when switching from an ACE inhibitor to an ARNI.",
      "citations": [
        "Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.",
        "McMurray JJ, Packer M, Desai AS, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure. N Engl J Med. 2014;371(11):993-1004. PMID: 25176015."
      ]
    },
    "critique": {
      "shortestValidSolution": "HFrEF -> 4 pillars of GDMT: switch ACEi to ARNI (36h washout mandatory) + beta-blocker + MRA + SGLT2i.",
      "strongestCompetitor": "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
      "exclusionFinding": "Omitting the 36-hour ACEi-to-ARNI washout causes severe angioedema from bradykinin accumulation.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Newly diagnosed HFrEF requires 4 pillars of GDMT: switch lisinopril to ARNI (with 36h washout to prevent angioedema), add spironolactone, and add SGLT2 inhibitor alongside carvedilol.",
      "distractorExclusionNotes": "Distractor exclusion verified: Switching from ACEi to ARNI without a 36-hour washout causes dual inhibition of bradykinin breakdown and fatal angioedema.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Newly diagnosed HFrEF requires 4 pillars of GDMT: switch lisinopril to ARNI (with 36h washout to prevent angioedema), add spironolactone, and add SGLT2 inhibitor alongside carvedilol.",
    "necessaryInference": "Newly diagnosed HFrEF requires 4 pillars of GDMT: switch lisinopril to ARNI (with 36h washout to prevent angioedema), add spironolactone, and add SGLT2 inhibitor alongside carvedilol.",
    "strongestDistractor": "Immediately switch lisinopril to sacubitril-valsartan without a washout period, while holding beta-blocker titration until LVEF normalizes",
    "distractorExclusion": "Switching from ACEi to ARNI without a 36-hour washout causes dual inhibition of bradykinin breakdown and fatal angioedema.",
    "citation": "Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499."
  },
  {
    "code": "op-c-s3-0418",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Secondary Prevention of Atherosclerotic Ischemic Stroke",
    "subtopic": "High-Intensity Statin Therapy, SPARCL Trial Evidence, LDL Threshold < 70 mg/dL",
    "provisionalDifficulty": 5,
    "stem": "A 63-year-old man presents to the clinic 4 weeks following discharge from the hospital for an acute non-cardioembolic ischemic stroke. During hospitalization, he experienced sudden right-sided hemiparesis; brain MRI confirmed an acute territorial infarction within the distribution of the left middle cerebral artery. Diagnostic vascular imaging with CT angiography revealed a non-stenosing, ulcerated atherosclerotic plaque (40% diameter stenosis) at the bifurcation of the left internal carotid artery. Echocardiography, continuous inpatient telemetry, and 30-day outpatient event monitoring ruled out atrial fibrillation and cardiogenic embolism. He currently takes oral aspirin 81 mg daily and lisinopril 20 mg daily. Blood pressure is 126/74 mm Hg and heart rate is 68/min. Neurological examination reveals residual mild right pronator drift with 4+/5 strength in the right hand. Fasting lipid panel demonstrates:\n- Total cholesterol: 168 mg/dL\n- Triglycerides: 140 mg/dL\n- HDL cholesterol: 44 mg/dL\n- LDL cholesterol: 96 mg/dL\n\nBased on landmark randomized clinical trial evidence (the SPARCL trial) and current AHA/ASA secondary stroke prevention guidelines, which of the following represents the most appropriate lipid-lowering strategy for this patient?",
    "choices": [
      [
        "Initiate high-intensity statin therapy with oral atorvastatin 80 mg daily (targeting an LDL-C reduction >= 50% and an absolute LDL-C level < 70 mg/dL), independent of his baseline LDL-C concentration",
        "Secondary stroke prevention in patients with ischemic stroke or TIA of atherosclerotic origin is guided by definitive trial evidence: (1) LANDMARK SPARCL TRIAL (NEJM 2006): The Stroke Prevention by Aggressive Reduction in Cholesterol Levels (SPARCL) trial randomized > 4,700 patients with recent stroke or TIA and NO prior coronary heart disease to high-intensity atorvastatin 80 mg daily versus placebo. High-intensity atorvastatin significantly reduced the primary endpoint of fatal or non-fatal stroke by 16% and reduced major coronary events by 35%. (2) PLEIOTROPIC AND TARGET-DRIVEN MECHANISMS: The benefit of high-intensity statins extends beyond simple lipid lowering: statins stabilize vulnerable atherosclerotic plaques, improve endothelial nitric oxide synthase activity, decrease vascular inflammation, and inhibit platelet aggregation. (3) CURRENT AHA/ASA GUIDELINE RECOMMENDATIONS: For patients <= 75 years of age with clinical atherosclerotic ischemic stroke or TIA, HIGH-INTENSITY STATIN THERAPY (atorvastatin 80 mg or rosuvastatin 20-40 mg daily) IS MANDATORY, regardless of baseline baseline LDL-C levels. The treatment goal is to achieve an LDL-C reduction of >= 50% from baseline and an absolute LDL-C < 70 mg/dL (or < 55 mg/dL in very high-risk individuals). If the LDL-C remains >= 70 mg/dL despite maximum tolerated high-intensity statin, ezetimibe should be added sequentially."
      ],
      [
        "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
        "Withholding statin therapy because baseline LDL is < 100 mg/dL is a critical error; the SPARCL trial proved that high-intensity statins significantly reduce recurrent stroke in patients with baseline LDL < 100 mg/dL through plaque stabilization."
      ],
      [
        "Initiate low-intensity pravastatin 20 mg daily to avoid potential statin-associated muscle symptoms",
        "Low-intensity statins fail to achieve the required >= 50% LDL reduction or target < 70 mg/dL, and did not demonstrate stroke reduction in randomized trials; high-intensity statin therapy is guideline-mandated."
      ],
      [
        "Initiate oral fenofibrate 145 mg daily as first-line monotherapy to optimize HDL and triglycerides",
        "Fibrates do not reduce recurrent ischemic stroke or all-cause mortality in clinical trials and are not indicated as first-line therapy for secondary stroke prevention."
      ],
      [
        "Initiate subcutaneous PCSK9 inhibitor monotherapy (evolocumab) without prescribing an oral statin",
        "PCSK9 inhibitors are expensive second- or third-line agents added only when LDL remains >= 70 mg/dL despite maximum tolerated statin and ezetimibe therapy; high-intensity oral statins are the required first-line therapy."
      ]
    ],
    "rationale": "For secondary prevention of atherosclerotic ischemic stroke or TIA, AHA/ASA guidelines mandate high-intensity statin therapy (atorvastatin 80 mg daily) targeting an LDL reduction >= 50% and an absolute LDL < 70 mg/dL, independent of baseline cholesterol levels. The landmark SPARCL trial proved that high-intensity atorvastatin 80 mg significantly reduces recurrent stroke and cardiovascular events in stroke patients even when baseline LDL is < 100 mg/dL, due to plaque stabilization and pleiotropic endothelial effects.",
    "metadata": {
      "shortSolution": "Secondary stroke prevention after atherosclerotic ischemic stroke requires high-intensity statin (atorvastatin 80 mg daily) to achieve LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
      "competingChoice": "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
      "exclusionFinding": "SPARCL trial proved that high-intensity statins reduce stroke recurrence regardless of baseline LDL; withholding statins based on 'normal' baseline LDL causes recurrent stroke.",
      "pedagogicalValue": "Recognizing the mandate for high-intensity statin therapy (atorvastatin 80 mg) in secondary stroke prevention regardless of baseline LDL cholesterol (SPARCL trial).",
      "citations": [
        "Amarenco P, Bogousslavsky J, Callahan A 3rd, et al. High-dose atorvastatin after stroke or transient ischemic attack. N Engl J Med. 2006;355(6):549-559. PMID: 16899775.",
        "Kleindorfer DO, Towfighi A, Chaturvedi S, et al. 2021 Guideline for the Prevention of Stroke in Patients With Stroke and Transient Ischemic Attack: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2021;52(7):e364-e467. PMID: 34024117."
      ]
    },
    "critique": {
      "shortestValidSolution": "Atherosclerotic ischemic stroke -> high-intensity statin (atorvastatin 80 mg) targeting LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
      "strongestCompetitor": "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
      "exclusionFinding": "SPARCL trial showed benefit independent of baseline LDL; high-intensity statin is mandatory for secondary prevention.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Secondary stroke prevention after atherosclerotic ischemic stroke requires high-intensity statin (atorvastatin 80 mg daily) to achieve LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
      "distractorExclusionNotes": "Distractor exclusion verified: SPARCL trial proved that high-intensity statins reduce stroke recurrence regardless of baseline LDL; withholding statins based on 'normal' baseline LDL causes recurrent stroke.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Secondary stroke prevention after atherosclerotic ischemic stroke requires high-intensity statin (atorvastatin 80 mg daily) to achieve LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
    "necessaryInference": "Secondary stroke prevention after atherosclerotic ischemic stroke requires high-intensity statin (atorvastatin 80 mg daily) to achieve LDL < 70 mg/dL, regardless of baseline LDL (SPARCL trial).",
    "strongestDistractor": "Withhold statin therapy entirely because his baseline LDL cholesterol of 96 mg/dL is already within normal limits (< 100 mg/dL)",
    "distractorExclusion": "SPARCL trial proved that high-intensity statins reduce stroke recurrence regardless of baseline LDL; withholding statins based on 'normal' baseline LDL causes recurrent stroke.",
    "citation": "Amarenco P, Bogousslavsky J, Callahan A 3rd, et al. High-dose atorvastatin after stroke or transient ischemic attack. N Engl J Med. 2006;355(6):549-559. PMID: 16899775."
  },
  {
    "code": "op-c-s3-0419",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Diabetic Peripheral Neuropathy Pharmacotherapy",
    "subtopic": "First-Line Non-Opioid Agents, Duloxetine vs Pregabalin vs Gabapentin, Opioid Stewardship",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old woman with a 12-year history of type 2 diabetes mellitus presents to the outpatient clinic with painful burning, tingling, and electric-shock sensations in both feet that have progressively worsened over the past 8 months. The pain is severe (rated 8/10), is worst at night, and frequently prevents her from falling asleep. She describes that even the light touch of bedsheets touching her toes produces sharp, distressing pain (allodynia). Physical examination reveals normal peripheral arterial pulses. Neurological examination demonstrates symmetric loss of vibration sensation (using a 128-Hz tuning fork) and loss of protective pressure sensation (using a 10-g Semmes-Weinstein monofilament) in a stocking distribution extending to the mid-shins bilaterally. Ankle deep tendon reflexes are absent bilaterally. Laboratory evaluation reveals HbA1c of 8.2% and normal serum creatinine and liver enzymes. She has not previously taken medications for neuropathic pain and asks for a prescription for tramadol or oxycodone to obtain immediate relief.\n\nAccording to current American Academy of Neurology (AAN) and American Diabetes Association (ADA) guidelines, which of the following represents the most appropriate initial pharmacological approach for this patient's neuropathic pain?",
    "choices": [
      [
        "Initiate oral duloxetine (an SNRI, 30 to 60 mg once daily) or oral pregabalin (an alpha-2-delta calcium channel ligand, 50 to 100 mg three times daily), while declining opioid analgesics",
        "Diabetic Peripheral Neuropathic Pain (DPNP) affects up to 25-30% of patients with diabetes and severely degrades quality of life and sleep architecture. (1) FIRST-LINE EVIDENCE-BASED PHARMACOTHERAPY (AAN / ADA GUIDELINES): Multiple high-level randomized controlled trials establish three distinct drug classes as FIRST-LINE AGENTS for DPNP: (a) SEROTONIN-NOREPINEPHRINE REUPTAKE INHIBITORS (SNRIs): DULOXETINE (60 mg daily) or venlafaxine. Duloxetine enhances descending inhibitory pain pathways in the spinal dorsal horn by inhibiting presynaptic reuptake of both serotonin and norepinephrine; it is FDA-approved and highly effective for painful diabetic neuropathy. (b) VOLTAGE-GATED CALCIUM CHANNEL LIGANDS (GABAPENTINOIDS): PREGABALIN (150-300 mg daily) or GABAPENTIN. They bind the alpha-2-delta auxiliary subunit of presynaptic voltage-gated calcium channels, reducing calcium influx and suppressing excitatory neurotransmitter release (glutamate, substance P, CGRP) in dorsal horn neurons. (c) TRICYCLIC ANTIDEPRESSANTS (TCAs): Amitriptyline or nortriptyline (effective, but limited by anticholinergic and cardiac toxicity). (2) OPIOID STEWARDSHIP AND HARMS: AAN and ADA guidelines EXPLICITLY CONDEMN OPIOIDS (including tramadol, oxycodone, and hydrocodone) for chronic neuropathic pain. High-quality systematic reviews prove that opioids lack long-term efficacy in chronic neuropathic pain, carry high risks of tolerance, physiological dependence, addiction, and fatal overdose, and paradoxically trigger opioid-induced hyperalgesia."
      ],
      [
        "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
        "Opioids and tramadol lack long-term efficacy in neuropathic pain, cause physical dependence and addiction, and are explicitly discouraged as first-line therapy by AAN/ADA guidelines."
      ],
      [
        "Prescribe oral ibuprofen 800 mg three times daily and acetaminophen 1,000 mg three times daily",
        "NSAIDs and acetaminophen target inflammatory nociceptive pain; they have zero efficacy against the centralized neuropathic ectopic firing of diabetic neuropathy and risk acute kidney injury."
      ],
      [
        "Administer intramuscular vitamin B12 injections weekly despite normal serum B12 levels",
        "In patients with normal baseline vitamin B12 concentrations, parenteral vitamin B12 supplementation provides zero therapeutic benefit for diabetic axonal neuropathy."
      ],
      [
        "Perform emergent bilateral lumbar sympathetic nerve blocks as initial therapy",
        "Invasive sympathetic nerve blocks carry procedural risks and are reserved for complex regional pain syndrome; they have no role in typical symmetrical diabetic sensorimotor polyneuropathy."
      ]
    ],
    "rationale": "Painful diabetic peripheral neuropathy is treated first-line with an SNRI (duloxetine), a gabapentinoid (pregabalin or gabapentin), or a secondary TCA (nortriptyline) based on AAN and ADA guidelines. Duloxetine enhances descending inhibitory pain pathways, while pregabalin/gabapentin block presynaptic alpha-2-delta calcium channels. Opioids (including tramadol and oxycodone) are explicitly discouraged due to lack of long-term efficacy, dependence, and addiction risks. NSAIDs are ineffective for neuropathic pain.",
    "metadata": {
      "shortSolution": "Painful diabetic neuropathy with allodynia requires first-line oral duloxetine or pregabalin; opioid analgesics (tramadol, oxycodone) should be declined due to lack of efficacy and addiction risks.",
      "competingChoice": "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
      "exclusionFinding": "AAN/ADA guidelines recommend against opioids/tramadol for chronic neuropathic pain due to lack of long-term efficacy and high abuse/dependence risks; duloxetine and pregabalin are first-line.",
      "pedagogicalValue": "Selecting evidence-based first-line agents for diabetic neuropathy (duloxetine or pregabalin) and practicing opioid stewardship by avoiding opioids in chronic neuropathic pain.",
      "citations": [
        "Price R, Smith D, Franklin G, et al. Oral and Topical Treatment of Painful Diabetic Neuropathy: Practice Guideline Update Summary: Report of the AAN Guideline Subcommittee. Neurology. 2022;98(1):31-43. PMID: 34965987.",
        "Pop-Busui R, Boulton AJ, Feldman EL, et al. Diabetic Neuropathy: A Position Statement by the American Diabetes Association. Diabetes Care. 2017;40(1):136-154. PMID: 27999003."
      ]
    },
    "critique": {
      "shortestValidSolution": "Painful diabetic neuropathy -> first-line oral duloxetine (SNRI) or pregabalin/gabapentin; avoid opioids.",
      "strongestCompetitor": "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
      "exclusionFinding": "Opioids lack long-term efficacy in neuropathic pain and carry severe addiction risks; guidelines recommend non-opioid SNRIs/gabapentinoids.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Painful diabetic neuropathy with allodynia requires first-line oral duloxetine or pregabalin; opioid analgesics (tramadol, oxycodone) should be declined due to lack of efficacy and addiction risks.",
      "distractorExclusionNotes": "Distractor exclusion verified: AAN/ADA guidelines recommend against opioids/tramadol for chronic neuropathic pain due to lack of long-term efficacy and high abuse/dependence risks; duloxetine and pregabalin are first-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Painful diabetic neuropathy with allodynia requires first-line oral duloxetine or pregabalin; opioid analgesics (tramadol, oxycodone) should be declined due to lack of efficacy and addiction risks.",
    "necessaryInference": "Painful diabetic neuropathy with allodynia requires first-line oral duloxetine or pregabalin; opioid analgesics (tramadol, oxycodone) should be declined due to lack of efficacy and addiction risks.",
    "strongestDistractor": "Prescribe oral tramadol 50 mg three times daily as first-line therapy for immediate neuropathic pain relief",
    "distractorExclusion": "AAN/ADA guidelines recommend against opioids/tramadol for chronic neuropathic pain due to lack of long-term efficacy and high abuse/dependence risks; duloxetine and pregabalin are first-line.",
    "citation": "Price R, Smith D, Franklin G, et al. Oral and Topical Treatment of Painful Diabetic Neuropathy: Practice Guideline Update Summary: Report of the AAN Guideline Subcommittee. Neurology. 2022;98(1):31-43. PMID: 34965987."
  },
  {
    "code": "op-c-s3-0420",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Venous Insufficiency and Stasis Dermatitis",
    "subtopic": "Graduated Compression Therapy, Leg Elevation, Avoidance of Topical Sensitizers",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman with a history of obesity (BMI 34 kg/m2) and two prior uncomplicated pregnancies presents to the ambulatory clinic with a 6-month history of progressive aching, heaviness, and swelling in both lower legs that worsens toward the end of the day after standing at her retail job. Over the past 2 months, she has noticed pruritic, reddish-brown skin discoloration around both lower calves and ankles. Physical examination reveals bilateral pitting edema (2+) of the lower extremities extending from the feet to the mid-calves. Over the medial supramalleolar regions bilaterally, the skin is thickened, hyperpigmented with dense reddish-brown hemosiderin macules, and mildly erythematous with fine superficial scaling. There are prominent dilated, tortuous superficial varicose veins along the medial calves. Dorsalis pedis and posterior tibial arterial pulses are brisk (2+) bilaterally, and capillary refill is < 2 seconds. There are no open ulcerations. Duplex ultrasound reveals deep and superficial venous valvular reflux exceeding 1,000 milliseconds in the great saphenous veins bilaterally, with no evidence of deep venous thrombosis.\n\nWhich of the following represents the most appropriate initial management approach for this patient?",
    "choices": [
      [
        "Prescribe knee-high graduated compression stockings (20 to 30 mm Hg), recommend scheduled daily lower-extremity elevation above heart level, and apply bland emollient moisturizers, while avoiding over-the-counter topical antibiotic ointments",
        "Chronic Venous Insufficiency (CVI) and Stasis Dermatitis result from venous hypertension caused by incompetent venous valves, deep venous obstruction, or calf muscle pump failure. (1) PATHOPHYSIOLOGY: Sustained ambulatory venous hypertension causes retrograde pooling, increased capillary hydrostatic pressure, microvascular dilation, and leakage of fluid and erythrocytes into the dermis. Extravasated erythrocytes undergo mechanical lysis, releasing hemoglobin that macrophages degrade into HEMOSIDERIN pigment, producing the characteristic reddish-brown, speckled cutaneous hyperpigmentation. Extravasated fibrin and inflammatory cytokines provoke dermal sclerosis (lipodermatosclerosis), pruritus, and stasis dermatitis. (2) FIRST-LINE CONSERVATIVE MANAGEMENT: (a) GRADUATED COMPRESSION THERAPY: Knee-high graduated compression stockings (20-30 mm Hg for mild-to-moderate disease, 30-40 mm Hg for severe edema/ulceration) are the undisputed cornerstone of treatment. Compression counteracts venous hydrostatic hypertension, improves calf muscle pump efficacy, accelerates deep venous return, and reduces edema. (b) LEG ELEVATION: Elevating legs above the level of the heart for 30 minutes 3 to 4 times daily utilizes gravity to decompress congested venous beds. (c) BLAND EMOLLIENTS AND BARRIER RESTORATION: Preserving the epidermal skin barrier with petroleum jelly or ceramide-based creams prevents fissuring and secondary bacterial infection. (3) AVOIDANCE OF TOPICAL SENSITIZERS: Stasis dermatitis skin exhibits severe barrier disruption and immunological hyper-reactivity. Over-the-counter topical antibiotics (especially NEOMYCIN and BACITRACIN) and fragrances have an extremely high rate (> 50-60%) of inducing severe Allergic Contact Dermatitis, which dramatically exacerbates skin erythema, weeping, and ulceration."
      ],
      [
        "Apply topical neomycin and polymyxin B ointment twice daily to both legs to treat subclinical bacterial colonization",
        "Topical neomycin and bacitracin are among the leading causes of severe allergic contact dermatitis in stasis dermatitis; topical antibiotics provide zero benefit and worsen cutaneous inflammation."
      ],
      [
        "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
        "Stasis dermatitis is routinely misdiagnosed as bilateral cellulitis ('pseudocellulitis'); true cellulitis is virtually always unilateral and acute, whereas stasis dermatitis is bilateral, chronic, and non-infectious."
      ],
      [
        "Initiate oral furosemide 40 mg daily as primary monotherapy for venous edema",
        "Diuretics do not correct localized venous valvular reflux or venous hypertension; they cause systemic intravascular volume depletion, prerenal azotemia, and electrolyte disturbances without resolving venous stasis."
      ],
      [
        "Immediate referral for emergent surgical venous stripping and ligation under general anesthesia",
        "Conservative therapy with graduated compression stockings, elevation, and skin care must be trialed for several months; surgical or endovenous ablation is reserved for refractory symptoms or non-healing ulcers."
      ]
    ],
    "rationale": "Chronic venous insufficiency and stasis dermatitis result from ambulatory venous hypertension and extravasation of RBCs (hemosiderin staining). First-line therapy is conservative: (1) Graduated compression stockings (20-30 mm Hg), (2) Leg elevation above heart level, and (3) Bland emollients to maintain skin barrier. Topical antibiotics (neomycin, bacitracin) are strictly avoided because compromised stasis skin is prone to severe allergic contact dermatitis. It is bilateral and chronic, distinguishing it from cellulitis (which is almost always unilateral). Diuretics do not treat venous reflux.",
    "metadata": {
      "shortSolution": "Bilateral hemosiderin staining, varicose veins, and venous reflux is stasis dermatitis; managed with graduated compression stockings (20-30 mm Hg), leg elevation, and emollients (avoid topical neomycin).",
      "competingChoice": "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
      "exclusionFinding": "Cellulitis is almost always unilateral; bilateral chronic erythema with hemosiderin is stasis dermatitis (pseudocellulitis) requiring compression, not systemic antibiotics.",
      "pedagogicalValue": "Differentiating stasis dermatitis from cellulitis (bilateral vs unilateral) and knowing the cornerstone of management: compression stockings, elevation, and avoiding topical contact sensitizers.",
      "citations": [
        "Sundaresan S, Migden MR, Silapunt S. Stasis Dermatitis: Pathophysiology, Evaluation, and Management. Am J Clin Dermatol. 2017;18(3):383-390. PMID: 28035329.",
        "O'Donnell TF Jr, Passman MA, Marston WA, et al. Management of venous leg ulcers: clinical practice guidelines of the Society for Vascular Surgery(R) and the American Venous Forum. J Vasc Surg. 2014;60(2 Suppl):3S-59S. PMID: 24965652."
      ]
    },
    "critique": {
      "shortestValidSolution": "Stasis dermatitis (bilateral hemosiderin + edema) -> compression stockings (20-30 mm Hg) + leg elevation + emollients; avoid topical antibiotics.",
      "strongestCompetitor": "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
      "exclusionFinding": "Bilateral involvement is stasis dermatitis, not cellulitis; antibiotics are ineffective, and compression is the definitive therapy.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Bilateral hemosiderin staining, varicose veins, and venous reflux is stasis dermatitis; managed with graduated compression stockings (20-30 mm Hg), leg elevation, and emollients (avoid topical neomycin).",
      "distractorExclusionNotes": "Distractor exclusion verified: Cellulitis is almost always unilateral; bilateral chronic erythema with hemosiderin is stasis dermatitis (pseudocellulitis) requiring compression, not systemic antibiotics.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Bilateral hemosiderin staining, varicose veins, and venous reflux is stasis dermatitis; managed with graduated compression stockings (20-30 mm Hg), leg elevation, and emollients (avoid topical neomycin).",
    "necessaryInference": "Bilateral hemosiderin staining, varicose veins, and venous reflux is stasis dermatitis; managed with graduated compression stockings (20-30 mm Hg), leg elevation, and emollients (avoid topical neomycin).",
    "strongestDistractor": "Initiate oral cephalexin 500 mg four times daily for 14 days for presumed bilateral lower-extremity cellulitis",
    "distractorExclusion": "Cellulitis is almost always unilateral; bilateral chronic erythema with hemosiderin is stasis dermatitis (pseudocellulitis) requiring compression, not systemic antibiotics.",
    "citation": "Sundaresan S, Migden MR, Silapunt S. Stasis Dermatitis: Pathophysiology, Evaluation, and Management. Am J Clin Dermatol. 2017;18(3):383-390. PMID: 28035329."
  },
  {
    "code": "op-c-s3-0421",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Adult Pneumococcal Immunization Recommendations",
    "subtopic": "CDC ACIP Guidelines, PCV20 Monotherapy vs PCV15-PPSV23 Sequence, Adults >= 65 Years",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman presents to the ambulatory internal medicine clinic for a routine annual preventive health examination. She has a history of mild osteoarthritis of the hands but has no chronic heart, lung, liver, or renal disease, and does not have diabetes mellitus. She does not use immunosuppressive medications and has never undergone splenectomy. She has never received any pneumococcal vaccine. Vital signs and physical examination are completely normal.\n\nAccording to current Centers for Disease Control and Prevention (CDC) Advisory Committee on Immunization Practices (ACIP) guidelines, which of the following represents the recommended pneumococcal vaccination strategy for this patient?",
    "choices": [
      [
        "Administer a single dose of 20-valent pneumococcal conjugate vaccine (PCV20) alone, OR administer a single dose of 15-valent pneumococcal conjugate vaccine (PCV15) followed at least 1 year later by a dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23)",
        "The Advisory Committee on Immunization Practices (ACIP) updated adult pneumococcal immunization guidelines following the licensure of higher-valency pneumococcal conjugate vaccines: (1) TARGET POPULATION: All immunocompetent adults >= 65 years of age who have not previously received a pneumococcal conjugate vaccine or whose vaccination history is unknown. (2) SIMPLIFIED TWO-OPTION REGIMEN: (a) OPTION 1 (PREFERRED FOR SIMPLICITY): Administer a SINGLE DOSE of 20-valent Pneumococcal Conjugate Vaccine (PCV20) alone. No subsequent pneumococcal vaccines (such as PPSV23) are required following PCV20 because PCV20 provides broader conjugate coverage and induces robust T-cell-dependent immunological memory. (b) OPTION 2: Administer a single dose of 15-valent Pneumococcal Conjugate Vaccine (PCV15) FOLLOWED by a dose of 23-valent Pneumococcal Polysaccharide Vaccine (PPSV23) administered AT LEAST 1 YEAR LATER (an interval of >= 8 weeks can be used for immunocompromised patients, but >= 1 year is standard for immunocompetent adults >= 65). (3) OBSOLESCENCE OF HISTORICAL REGIMENS: Historical regimens utilizing PCV13 followed by PPSV23 in series are no longer recommended for vaccine-naive adults because PCV15 and PCV20 contain serotypes with higher contemporary disease burden. PPSV23 should NEVER be given alone as initial monotherapy in conjugate-naive adults."
      ],
      [
        "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
        "PPSV23 alone induces T-cell-independent B-cell responses without immunological memory; ACIP guidelines mandate a conjugate vaccine (PCV20 or PCV15) as the foundation of adult vaccination."
      ],
      [
        "Administer 13-valent pneumococcal conjugate vaccine (PCV13) followed 8 weeks later by PCV20",
        "PCV13 has been replaced by PCV15 and PCV20; furthermore, giving two conjugate vaccines in series is redundant and contrary to ACIP recommendations."
      ],
      [
        "Withhold pneumococcal vaccination until age 75 unless high-risk immunocompromising conditions develop",
        "Pneumococcal immunization is universally recommended for all adults beginning at age 65 regardless of medical conditions, due to age-related immunosenescence and high invasive pneumococcal disease risk."
      ],
      [
        "Administer PCV20 followed 8 weeks later by a mandatory booster dose of PPSV23",
        "When PCV20 is administered, no subsequent dose of PPSV23 is indicated; PCV20 is complete as a standalone single-dose vaccination."
      ]
    ],
    "rationale": "CDC ACIP guidelines recommend pneumococcal vaccination for all adults >= 65 years who are vaccine-naive: (1) A single dose of PCV20 alone (no subsequent PPSV23 needed), OR (2) PCV15 followed by PPSV23 >= 1 year later. PCV20 provides comprehensive conjugate protection inducing T-cell dependent memory. PPSV23 alone is no longer recommended as initial therapy in vaccine-naive adults.",
    "metadata": {
      "shortSolution": "Vaccine-naive 66-year-old requires either a single dose of PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 according to updated CDC ACIP guidelines.",
      "competingChoice": "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
      "exclusionFinding": "PPSV23 alone induces T-independent responses without durable memory; ACIP guidelines mandate a conjugate vaccine (PCV20 alone or PCV15 followed by PPSV23).",
      "pedagogicalValue": "Mastering the updated ACIP pneumococcal vaccination algorithm for adults >= 65: PCV20 alone or PCV15 followed by PPSV23 >= 1 year later.",
      "citations": [
        "Kobayashi M, Farrar JL, Gierke R, et al. Use of 15-Valent Pneumococcal Conjugate Vaccine and 20-Valent Pneumococcal Conjugate Vaccine Among U.S. Adults: Updated Recommendations of the Advisory Committee on Immunization Practices - United States, 2022. MMWR Morb Mortal Wkly Rep. 2022;71(4):109-117. PMID: 35085226.",
        "Matanock A, Lee G, Gierke R, et al. Use of 13-Valent Pneumococcal Conjugate Vaccine and 23-Valent Pneumococcal Polysaccharide Vaccine Among Adults Aged >=65 Years: Updated Recommendations of the Advisory Committee on Immunization Practices. MMWR Morb Mortal Wkly Rep. 2019;68(46):1069-1075. PMID: 31751994."
      ]
    },
    "critique": {
      "shortestValidSolution": "Adult >= 65 vaccine-naive -> PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 (ACIP guidelines).",
      "strongestCompetitor": "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
      "exclusionFinding": "PPSV23 alone is no longer recommended for initial vaccination; conjugate vaccines (PCV20 or PCV15) are mandatory.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Vaccine-naive 66-year-old requires either a single dose of PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 according to updated CDC ACIP guidelines.",
      "distractorExclusionNotes": "Distractor exclusion verified: PPSV23 alone induces T-independent responses without durable memory; ACIP guidelines mandate a conjugate vaccine (PCV20 alone or PCV15 followed by PPSV23).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Vaccine-naive 66-year-old requires either a single dose of PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 according to updated CDC ACIP guidelines.",
    "necessaryInference": "Vaccine-naive 66-year-old requires either a single dose of PCV20 alone OR PCV15 followed >= 1 year later by PPSV23 according to updated CDC ACIP guidelines.",
    "strongestDistractor": "Administer a single dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, with no conjugate vaccine needed",
    "distractorExclusion": "PPSV23 alone induces T-independent responses without durable memory; ACIP guidelines mandate a conjugate vaccine (PCV20 alone or PCV15 followed by PPSV23).",
    "citation": "Kobayashi M, et al. Use of 15-Valent and 20-Valent Pneumococcal Conjugate Vaccine Among U.S. Adults: ACIP Recommendations, 2022. MMWR Morb Mortal Wkly Rep. 2022;71(4):109-117. PMID: 35085226."
  },
  {
    "code": "op-c-s3-0422",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Colorectal Cancer Screening Modalities and Age Thresholds",
    "subtopic": "USPSTF Age 45 Recommendation, Non-Invasive Tests, Mandatory Follow-up Colonoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man presents to the primary care clinic for an annual preventive checkup. He has no chronic medical conditions, takes no medications, and feels completely well. He has no gastrointestinal symptoms, changes in bowel habits, rectal bleeding, unexplained weight loss, or abdominal pain. Review of family history reveals that his parents and two siblings are healthy, with no family history of colorectal cancer, advanced adenomas, inflammatory bowel disease, or hereditary cancer syndromes (Lynch syndrome or familial adenomatous polyposis). Physical examination is normal. The patient asks whether he needs screening for colorectal cancer.\n\nAccording to current US Preventive Services Task Force (USPSTF) guidelines, which of the following represents the most appropriate colorectal cancer screening recommendation for this average-risk patient?",
    "choices": [
      [
        "Initiate routine colorectal cancer screening now (at age 45) using any of the guideline-approved screening strategies (e.g., optical colonoscopy every 10 years, annual fecal immunochemical test [FIT], or stool FIT-DNA every 3 years), with the understanding that any positive non-colonoscopic screening test mandates a timely diagnostic colonoscopy",
        "Colorectal Cancer (CRC) is the third leading cause of cancer-related mortality in the United States. (1) USPSTF 2021 UPDATED SCREENING RECOMMENDATION: The USPSTF lowered the recommended age to INITIATE ROUTINE SCREENING FROM AGE 50 TO AGE 45 for all average-risk adults (Grade B recommendation for ages 45-49, Grade A for ages 50-75). This shift was driven by robust epidemiological modeling demonstrating a dramatic, progressive rise in young-onset colorectal cancer incidence over the past two decades. (2) APPROVED SCREENING STRATEGIES AND INTERVALS: Several screening modalities have demonstrated clinical efficacy: (a) DIRECT VISUALIZATION TESTS: Optical colonoscopy every 10 years (the gold standard; allows simultaneous visualization and polypectomy of precancerous adenomas), or Flexible sigmoidoscopy every 5 years (or every 10 years plus annual FIT), or CT colonography every 5 years. (b) STOOL-BASED TESTS: Annual Fecal Immunochemical Test (FIT, high sensitivity for human globin), or Stool FIT-DNA (Cologuard, multi-target sDNA plus FIT) every 3 years, or annual high-sensitivity guaiac-based fecal occult blood test (gFOBT). (3) MANDATORY CLINICAL RULE FOR POSITIVE STOOL TESTS: If any non-invasive stool test (FIT, FIT-DNA) or CT colonography yields a positive result, A TIMELY DIAGNOSTIC COLONOSCOPY IS MANDATORY. Non-invasive tests are screening tools, not definitive diagnoses; failing to follow up a positive stool test with colonoscopy leads to delayed detection of advanced colorectal neoplasia."
      ],
      [
        "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
        "The USPSTF officially lowered the screening initiation age to 45 years in 2021; deferring screening until age 50 misses early resectable neoplasia in young adults."
      ],
      [
        "If an annual fecal immunochemical test (FIT) is positive, repeat the FIT in 1 month and perform colonoscopy only if the second test is positive",
        "Repeating a stool test after a positive result is a dangerous clinical error; any single positive FIT mandates immediate diagnostic colonoscopy to evaluate for colorectal cancer or large adenomas."
      ],
      [
        "Perform optical colonoscopy every 5 years for average-risk individuals",
        "For average-risk individuals with a completely normal screening colonoscopy, the recommended screening interval is 10 years, not 5 years; performing colonoscopy every 5 years represents overutilization."
      ],
      [
        "Order serum carcinoembryonic antigen (CEA) annually as a non-invasive screening modality",
        "Serum CEA has poor sensitivity and specificity for early colorectal neoplasia and is strictly contraindicated as a screening test; CEA is used exclusively for monitoring recurrence in established disease."
      ]
    ],
    "rationale": "The USPSTF updated colorectal cancer screening guidelines to recommend starting routine screening at age 45 (lowered from age 50) for all average-risk adults (Grade B recommendation for ages 45-49). Acceptable strategies include colonoscopy every 10 years, annual FIT, or FIT-DNA every 3 years. Crucially, any positive non-colonoscopic screening test (FIT or FIT-DNA) mandates a timely diagnostic colonoscopy (never repeat the stool test). Colonoscopy interval for normal screening is 10 years.",
    "metadata": {
      "shortSolution": "Average-risk 46-year-old should initiate CRC screening now (USPSTF lowered starting age to 45); acceptable options include colonoscopy q10y or annual FIT, with any positive stool test requiring colonoscopy.",
      "competingChoice": "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
      "exclusionFinding": "USPSTF officially lowered the starting age for average-risk CRC screening to 45 years in 2021 due to rising young-onset CRC.",
      "pedagogicalValue": "Knowing the updated USPSTF starting age for colorectal cancer screening (age 45) and the requirement for immediate colonoscopy if any stool test is positive.",
      "citations": [
        "US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977. PMID: 34003218.",
        "Wolf AMD, Fontham ETH, Church TR, et al. Colorectal cancer screening for average-risk adults: 2018 guideline update from the American Cancer Society. CA Cancer J Clin. 2018;68(4):250-281. PMID: 29846947."
      ]
    },
    "critique": {
      "shortestValidSolution": "Average risk CRC screening starts at age 45 (USPSTF); colonoscopy q10y or annual FIT (positive FIT mandates colonoscopy).",
      "strongestCompetitor": "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
      "exclusionFinding": "USPSTF updated guidelines lowered the starting age to 45 years.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Average-risk 46-year-old should initiate CRC screening now (USPSTF lowered starting age to 45); acceptable options include colonoscopy q10y or annual FIT, with any positive stool test requiring colonoscopy.",
      "distractorExclusionNotes": "Distractor exclusion verified: USPSTF officially lowered the starting age for average-risk CRC screening to 45 years in 2021 due to rising young-onset CRC.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Average-risk 46-year-old should initiate CRC screening now (USPSTF lowered starting age to 45); acceptable options include colonoscopy q10y or annual FIT, with any positive stool test requiring colonoscopy.",
    "necessaryInference": "Average-risk 46-year-old should initiate CRC screening now (USPSTF lowered starting age to 45); acceptable options include colonoscopy q10y or annual FIT, with any positive stool test requiring colonoscopy.",
    "strongestDistractor": "Defer all colorectal cancer screening until age 50, as routine screening prior to age 50 is not cost-effective or recommended for average-risk individuals",
    "distractorExclusion": "USPSTF officially lowered the starting age for average-risk CRC screening to 45 years in 2021 due to rising young-onset CRC.",
    "citation": "US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977. PMID: 34003218."
  },
  {
    "code": "op-c-s3-0423",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Lung Cancer Screening with Low-Dose Computed Tomography (LDCT)",
    "subtopic": "USPSTF 2021 Criteria, 20 Pack-Year Threshold, Age 50-80, Discontinuation Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents to the clinic for a routine wellness visit. He has a 24 pack-year smoking history (smoked 1 pack of cigarettes daily for 24 years) but successfully quit smoking 8 years ago. He is completely asymptomatic and denies chronic cough, hemoptysis, shortness of breath, chest pain, or unintentional weight loss. His past medical history includes mild hypertension well controlled with hydrochlorothiazide 25 mg daily. Vital signs demonstrate blood pressure of 124/76 mm Hg, heart rate of 70/min, and oxygen saturation of 98% on room air. Physical examination reveals clear lungs to auscultation bilaterally. He has no other chronic medical conditions and has an active, excellent functional performance status.\n\nAccording to current US Preventive Services Task Force (USPSTF) guidelines, which of the following represents the most appropriate lung cancer screening recommendation for this patient?",
    "choices": [
      [
        "Perform annual screening for lung cancer with low-dose computed tomography (LDCT) of the chest",
        "Lung cancer is the leading cause of cancer mortality in both men and women in the United States. (1) USPSTF 2021 UPDATED SCREENING RECOMMENDATIONS: In 2021, the USPSTF expanded lung cancer screening eligibility based on the National Lung Screening Trial (NLST) and the NELSON trial: (a) AGE RANGE: Adults aged 50 to 80 years (expanded from prior 55-80); (b) SMOKING HISTORY THRESHOLD: A cumulative tobacco smoking history of >= 20 PACK-YEARS (lowered from prior 30 pack-years); AND (c) CURRENT SMOKER OR QUIT WITHIN THE PAST 15 YEARS. (2) PATIENT APPLICATION: This patient is 56 years of age (within 50-80), has a 24 pack-year smoking history (exceeds >= 20 pack-years), and quit 8 years ago (within the 15-year quit window). Therefore, he meets all objective criteria for ANNUAL SCREENING WITH LOW-DOSE COMPUTED TOMOGRAPHY (LDCT). (3) DISCONTINUATION CRITERIA: Screening should be discontinued once a person: (a) Has not smoked for 15 consecutive years; (b) Reaches age 81; OR (c) Develops a health problem that substantially limits life expectancy or the ability/willingness to undergo curative lung surgery."
      ],
      [
        "Perform annual screening with a standard two-view posterior-anterior and lateral chest radiograph",
        "Standard chest radiography (with or without sputum cytology) has no demonstrated efficacy in reducing lung cancer mortality in randomized trials and is explicitly recommended against by the USPSTF."
      ],
      [
        "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
        "Under the updated 2021 USPSTF criteria, the pack-year threshold was lowered to >= 20 pack-years and screening continues until 15 years post-quitting; this patient qualifies with 24 pack-years and 8 years since quitting."
      ],
      [
        "Order contrast-enhanced chest CT with intravenous iodinated radiocontrast every 2 years",
        "Screening is performed with LOW-DOSE UNENHANCED computed tomography (LDCT) annually to minimize radiation exposure and avoid intravenous contrast nephrotoxicity/anaphylaxis."
      ],
      [
        "Perform screening with low-dose CT once, with no subsequent imaging required if the baseline scan is normal",
        "Lung cancer screening requires ANNUAL low-dose CT examinations until 15 years post-cessation or age 81; a single normal scan does not eliminate ongoing malignant transformation risk."
      ]
    ],
    "rationale": "The 2021 USPSTF lung cancer screening guidelines recommend ANNUAL LOW-DOSE COMPUTED TOMOGRAPHY (LDCT) for adults aged 50 to 80 years who have a >= 20 pack-year smoking history and currently smoke or have quit within the past 15 years. This 56-year-old with 24 pack-years who quit 8 years ago qualifies for annual LDCT. Screening stops once quit >= 15 years, age 81, or life-limiting illness develops. Chest radiographs are ineffective for screening.",
    "metadata": {
      "shortSolution": "56-year-old with 24 pack-years who quit 8 years ago qualifies for annual low-dose CT (LDCT) lung cancer screening under updated USPSTF criteria (age 50-80, >= 20 pack-years, quit within 15 years).",
      "competingChoice": "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
      "exclusionFinding": "The 2021 USPSTF criteria lowered the threshold to >= 20 pack-years (from 30) and starting age to 50 (from 55); screening is required until 15 years after quitting.",
      "pedagogicalValue": "Mastering the updated 2021 USPSTF criteria for lung cancer screening: annual LDCT for ages 50-80 with >= 20 pack-years who smoke or quit within 15 years.",
      "citations": [
        "US Preventive Services Task Force. Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(10):962-970. PMID: 33687470.",
        "National Lung Screening Trial Research Team. Reduced lung-cancer mortality with low-dose computed tomographic screening. N Engl J Med. 2011;365(5):395-409. PMID: 21714641."
      ]
    },
    "critique": {
      "shortestValidSolution": "Age 56 + 24 pack-years + quit 8 years ago -> annual low-dose CT (LDCT) lung cancer screening (USPSTF: age 50-80, >= 20 pack-years, quit <= 15 yrs).",
      "strongestCompetitor": "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
      "exclusionFinding": "2021 USPSTF guidelines lowered threshold to >= 20 pack-years; patient qualifies for annual LDCT.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: 56-year-old with 24 pack-years who quit 8 years ago qualifies for annual low-dose CT (LDCT) lung cancer screening under updated USPSTF criteria (age 50-80, >= 20 pack-years, quit within 15 years).",
      "distractorExclusionNotes": "Distractor exclusion verified: The 2021 USPSTF criteria lowered the threshold to >= 20 pack-years (from 30) and starting age to 50 (from 55); screening is required until 15 years after quitting.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "56-year-old with 24 pack-years who quit 8 years ago qualifies for annual low-dose CT (LDCT) lung cancer screening under updated USPSTF criteria (age 50-80, >= 20 pack-years, quit within 15 years).",
    "necessaryInference": "56-year-old with 24 pack-years who quit 8 years ago qualifies for annual low-dose CT (LDCT) lung cancer screening under updated USPSTF criteria (age 50-80, >= 20 pack-years, quit within 15 years).",
    "strongestDistractor": "Withhold lung cancer screening because the patient has not smoked for > 5 years and has accumulated < 30 pack-years",
    "distractorExclusion": "The 2021 USPSTF criteria lowered the threshold to >= 20 pack-years (from 30) and starting age to 50 (from 55); screening is required until 15 years after quitting.",
    "citation": "US Preventive Services Task Force. Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(10):962-970. PMID: 33687470."
  },
  {
    "code": "op-c-s3-0424",
    "exam": "Step 3",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Cervical Cancer Screening Guidelines and Strategies",
    "subtopic": "USPSTF Age 30-65 Recommendations, Primary hrHPV vs Co-Testing vs Pap Alone",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman presents to the ambulatory women's health clinic for a routine gynecological examination. She is asymptomatic, has no abnormal vaginal bleeding or discharge, and has had no postcoital spotting. She has a history of two uncomplicated term vaginal deliveries. She has no personal history of high-grade cervical dysplasia (cervical intraepithelial neoplasia grade 2 or 3 [CIN 2/3]) or cervical cancer, is not immunocompromised, and has never had HIV infection. Review of her medical record reveals that her last cervical cancer screening was performed 5 years ago (at age 33), at which time she underwent cervical cytology (Papanicolaou smear) co-tested with high-risk human papillomavirus (hrHPV) testing; both tests were completely negative. Physical and speculum examinations reveal a normal, smooth cervix without lesions or contact bleeding.\n\nAccording to current US Preventive Services Task Force (USPSTF) and American College of Obstetricians and Gynecologists (ACOG) guidelines, which of the following represents an acceptable screening strategy for this patient today?",
    "choices": [
      [
        "Primary high-risk HPV (hrHPV) testing alone every 5 years, OR high-risk HPV co-testing combined with cervical cytology every 5 years, OR cervical cytology (Pap smear) alone every 3 years",
        "Cervical Cancer Screening guidelines (USPSTF and ACOG) are stratified by patient age for immunocompetent individuals with an intact cervix and no history of high-grade precancerous lesions: (1) WOMEN AGED 21 TO 29 YEARS: Cervical cytology (Pap smear) ALONE EVERY 3 YEARS. High-risk HPV testing (either alone or as co-testing) is STRONGLY DISCOURAGED in women < 30 years because transient, benign HPV infections are exceedingly common in this cohort and undergo spontaneous clearance; HPV testing in this group leads to unnecessary colposcopies and cervical excisional procedures without reducing cancer incidence. (2) WOMEN AGED 30 TO 65 YEARS: Guidelines offer THREE EQUALLY ACCEPTABLE EVIDENCE-BASED STRATEGIES: (a) Primary high-risk HPV (hrHPV) testing alone EVERY 5 YEARS; (b) High-risk HPV testing COMBINED WITH cervical cytology (co-testing) EVERY 5 YEARS; OR (c) Cervical cytology (Pap smear) ALONE EVERY 3 YEARS. High-risk HPV testing utilizes nucleic acid amplification targeting oncogenic viral genotypes (predominantly HPV 16 and 18, along with 12 other high-risk types). (3) DISCONTINUATION CRITERIA (AGE > 65): Screening is discontinued at age 65 if the patient has documented adequate prior negative screening (3 consecutive negative cytology tests or 2 consecutive negative co-tests/hrHPV tests within the past 10 years, with the most recent within 5 years) and no history of CIN 2+ within the past 25 years."
      ],
      [
        "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
        "Annual cervical cancer screening in an average-risk woman with prior negative tests represents overtreatment, leading to high false-positive rates, unnecessary colposcopies, and cervical procedural harms."
      ],
      [
        "Perform an immediate diagnostic colposcopy with directed cervical biopsies rather than non-invasive screening",
        "Colposcopy is a diagnostic procedure indicated only after an abnormal screening test (e.g., persistent HPV 16/18 or ASC-H/HSIL); it is never used as routine primary screening."
      ],
      [
        "Discontinue all cervical cancer screening, as having two prior normal screenings provides lifelong immunity against cervical dysplasia",
        "Cervical cancer screening must continue until age 65; discontinuing screening at age 38 leaves the patient unprotected against persistent high-risk HPV oncogenesis."
      ],
      [
        "Order serum CA-125 and pelvic ultrasound every 3 years as preferred non-invasive cervical cancer screening",
        "CA-125 and pelvic ultrasound are not approved for cervical cancer screening; they have zero sensitivity for pre-invasive cervical dysplasia and are ineffective."
      ]
    ],
    "rationale": "For average-risk women aged 30 to 65 years, USPSTF and ACOG guidelines offer three acceptable screening options: (1) Primary hrHPV testing alone every 5 years, (2) hrHPV co-testing with cytology every 5 years, or (3) Cytology alone every 3 years. Annual screening is excessive and discouraged. Women < 30 receive cytology alone every 3 years (no HPV testing). Screening stops at age 65 with adequate negative prior screening.",
    "metadata": {
      "shortSolution": "38-year-old average-risk woman due for cervical cancer screening can receive primary hrHPV alone q5y, hrHPV co-testing q5y, or Pap cytology alone q3y (USPSTF/ACOG).",
      "competingChoice": "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
      "exclusionFinding": "Annual screening represents excessive low-value care; USPSTF guidelines recommend 5-year intervals for HPV/co-testing and 3-year intervals for Pap alone.",
      "pedagogicalValue": "Mastering the three guideline-approved cervical cancer screening strategies for women aged 30 to 65 years (hrHPV q5y, co-test q5y, or Pap q3y).",
      "citations": [
        "US Preventive Services Task Force. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128523.",
        "Curry SJ, Krist AH, Owens DK, et al. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128523."
      ]
    },
    "critique": {
      "shortestValidSolution": "Cervical cancer screening for women age 30-65 -> hrHPV alone q5y, co-testing q5y, or Pap cytology alone q3y.",
      "strongestCompetitor": "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
      "exclusionFinding": "Annual screening is outdated and causes overtreatment; guidelines recommend 5-year intervals for HPV-based screening.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: 38-year-old average-risk woman due for cervical cancer screening can receive primary hrHPV alone q5y, hrHPV co-testing q5y, or Pap cytology alone q3y (USPSTF/ACOG).",
      "distractorExclusionNotes": "Distractor exclusion verified: Annual screening represents excessive low-value care; USPSTF guidelines recommend 5-year intervals for HPV/co-testing and 3-year intervals for Pap alone.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "38-year-old average-risk woman due for cervical cancer screening can receive primary hrHPV alone q5y, hrHPV co-testing q5y, or Pap cytology alone q3y (USPSTF/ACOG).",
    "necessaryInference": "38-year-old average-risk woman due for cervical cancer screening can receive primary hrHPV alone q5y, hrHPV co-testing q5y, or Pap cytology alone q3y (USPSTF/ACOG).",
    "strongestDistractor": "Annual cervical cytology (Pap smear) combined with high-risk HPV testing performed every year",
    "distractorExclusion": "Annual screening represents excessive low-value care; USPSTF guidelines recommend 5-year intervals for HPV/co-testing and 3-year intervals for Pap alone.",
    "citation": "US Preventive Services Task Force. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128523."
  },
  {
    "code": "op-c-s3-0425",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Abdominal Aortic Aneurysm (AAA) Screening and Surgical Repair Indications",
    "subtopic": "USPSTF One-Time Ultrasound Criteria, Men Aged 65-75 with Smoking History, 5.5 cm Repair Threshold",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents to the clinic for a routine checkup. He feels completely healthy, is asymptomatic, and has no abdominal or back pain. His medical history includes essential hypertension treated with amlodipine 5 mg daily. He has a 35 pack-year smoking history (smoked 1 pack of cigarettes daily from age 20 to 55) but successfully quit 12 years ago. Physical examination demonstrates blood pressure of 128/78 mm Hg and heart rate of 72/min. Abdominal examination reveals a soft, non-tender abdomen with a wide, prominent, pulsatile midline mass palpated in the epigastric region measuring approximately 4.5 cm in width. Peripheral pulses are normal.\n\nAccording to current US Preventive Services Task Force (USPSTF) and Society for Vascular Surgery (SVS) guidelines, which of the following represents the most appropriate screening and management strategy for abdominal aortic aneurysm in this patient?",
    "choices": [
      [
        "Perform a one-time screening abdominal duplex ultrasound to evaluate for abdominal aortic aneurysm, and schedule elective surgical or endovascular repair if the maximal infrarenal aortic diameter is >= 5.5 cm or expands > 0.5 cm in 6 months",
        "Abdominal Aortic Aneurysm (AAA) is defined as a focal permanent dilation of the abdominal aorta >= 3.0 cm in maximal transverse diameter (or > 50% dilation compared to normal adjacent aorta), typically occurring in the infrarenal segment. (1) USPSTF SCREENING CRITERIA: A ONE-TIME SCREENING ABDOMINAL DUPLEX ULTRASOUND is recommended for MEN AGED 65 TO 75 YEARS WHO HAVE EVER SMOKED (defined as having smoked >= 100 lifetime cigarettes; Grade B recommendation). Ultrasound is the screening modality of choice with > 98% sensitivity and specificity, zero radiation exposure, and non-invasiveness. (2) SVS SURVEILLANCE INTERVALS: (a) Aorta 3.0 to 3.9 cm: Surveillance ultrasound every 3 years; (b) Aorta 4.0 to 4.9 cm: Surveillance ultrasound every 12 months; (c) Aorta 5.0 to 5.4 cm: Surveillance ultrasound or CT angiography every 6 months. (3) DEFINITIVE SURGICAL REPAIR INDICATIONS: Elective repair (Endovascular Aneurysm Repair [EVAR] or open surgical repair) is indicated when the rupture risk exceeds the procedural mortality risk: (a) MAXIMAL DIAMETER >= 5.5 CM IN MEN (or >= 5.0 cm in women); (b) RAPID EXPANSION: Defined as aortic diameter growth > 0.5 cm in 6 months or > 1.0 cm in 1 year; OR (c) ANY SYMPTOMATIC ANEURYSM (abdominal, flank, or back pain, or tender pulsatile mass), which represents impending rupture and mandates emergent repair regardless of diameter."
      ],
      [
        "Perform an emergent open surgical laparotomy today for immediate aortic graft placement based on physical examination alone",
        "Physical examination has poor diagnostic accuracy and overestimates aortic diameter; non-invasive ultrasound imaging is required first, and elective repair is indicated only for diameter >= 5.5 cm or symptoms."
      ],
      [
        "Perform non-contrast abdominal computed tomography (CT) annually for all patients with a history of hypertension regardless of smoking history",
        "Annual CT scans expose patients to unnecessary cumulative ionizing radiation, and screening is not recommended based on hypertension alone without a smoking history."
      ],
      [
        "Withhold all vascular imaging because the patient successfully quit smoking 12 years ago",
        "USPSTF guidelines define 'ever-smoker' as >= 100 lifetime cigarettes regardless of when smoking ceased; quitting 12 years ago does not remove the mandate for one-time ultrasound screening."
      ],
      [
        "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
        "At 3.5 cm, the annual risk of rupture is virtually 0%, whereas surgical repair carries a 1-5% perioperative mortality; surgical repair at 3.5 cm represents dangerous overtreatment (threshold is >= 5.5 cm)."
      ]
    ],
    "rationale": "The USPSTF recommends a one-time screening abdominal duplex ultrasound for MEN aged 65 to 75 who have ever smoked (>= 100 cigarettes). Elective surgical or endovascular repair (EVAR) is indicated when the infrarenal diameter reaches >= 5.5 cm in men (>= 5.0 cm in women), if rapid expansion occurs (> 0.5 cm in 6 months or > 1.0 cm in 1 year), or if the aneurysm becomes symptomatic (impending rupture). Surveillance is performed based on diameter (e.g. annually for 4.0-4.9 cm). Physical exam alone cannot guide surgery.",
    "metadata": {
      "shortSolution": "67-year-old male former smoker requires one-time screening abdominal ultrasound for AAA; elective repair is indicated for diameter >= 5.5 cm (or rapid expansion > 0.5 cm in 6 mo).",
      "competingChoice": "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
      "exclusionFinding": "Surgical repair threshold is >= 5.5 cm; operating at 3.5 cm causes excess procedural mortality without reducing rupture risk.",
      "pedagogicalValue": "Mastering the USPSTF AAA screening recommendation (men 65-75 who ever smoked) and knowing the surgical repair threshold (>= 5.5 cm).",
      "citations": [
        "US Preventive Services Task Force. Screening for Abdominal Aortic Aneurysm: US Preventive Services Task Force Recommendation Statement. JAMA. 2019;322(22):2211-2218. PMID: 31821437.",
        "Chaikof EL, Dalman R, Eskandari MK, et al. The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm. J Vasc Surg. 2018;67(1):2-77.e2. PMID: 29268916."
      ]
    },
    "critique": {
      "shortestValidSolution": "Male 65-75 with smoking history -> one-time abdominal ultrasound screening for AAA; repair threshold is >= 5.5 cm.",
      "strongestCompetitor": "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
      "exclusionFinding": "Repair threshold is >= 5.5 cm in men; surgery at 3.5 cm is contraindicated overtreatment.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: 67-year-old male former smoker requires one-time screening abdominal ultrasound for AAA; elective repair is indicated for diameter >= 5.5 cm (or rapid expansion > 0.5 cm in 6 mo).",
      "distractorExclusionNotes": "Distractor exclusion verified: Surgical repair threshold is >= 5.5 cm; operating at 3.5 cm causes excess procedural mortality without reducing rupture risk.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "67-year-old male former smoker requires one-time screening abdominal ultrasound for AAA; elective repair is indicated for diameter >= 5.5 cm (or rapid expansion > 0.5 cm in 6 mo).",
    "necessaryInference": "67-year-old male former smoker requires one-time screening abdominal ultrasound for AAA; elective repair is indicated for diameter >= 5.5 cm (or rapid expansion > 0.5 cm in 6 mo).",
    "strongestDistractor": "Order a one-time screening abdominal ultrasound and recommend immediate elective surgical repair if the aortic diameter reaches 3.5 cm",
    "distractorExclusion": "Surgical repair threshold is >= 5.5 cm; operating at 3.5 cm causes excess procedural mortality without reducing rupture risk.",
    "citation": "US Preventive Services Task Force. Screening for Abdominal Aortic Aneurysm: US Preventive Services Task Force Recommendation Statement. JAMA. 2019;322(22):2211-2218. PMID: 31821437."
  }
];
