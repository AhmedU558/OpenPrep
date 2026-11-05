import json

items_s3_b17_part1 = [
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
        "Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) is characterized by impaired phosphate excretion, hypocalcemia, decreased active 1,25-dihydroxyvitamin D synthesis (due to loss of renal 1-alpha-hydroxylase), and secondary hyperparathyroidism. (1) PATHOPHYSIOLOGY OF PHOSPHATE RETENTION: As GFR declines below 30-40 mL/min, urinary phosphate excretion reaches maximal capacity despite elevated Fibroblast Growth Factor-23 (FGF-23) and PTH, leading to frank hyperphosphatemia. Extracellular phosphate binds serum calcium, forming insoluble calcium-phosphate nanocrystals that deposit within arterial medial layers (Mönckeberg medial calcific sclerosis) and cardiac valves, dramatically accelerating cardiovascular mortality. (2) PHOSPHATE BINDER SELECTION (KDIGO GUIDELINES): KDIGO guidelines recommend maintaining serum phosphate toward normal and EXPLICITLY RECOMMEND RESTRICTING THE USE OF CALCIUM-BASED PHOSPHATE BINDERS (such as calcium carbonate or calcium acetate). In patients with pre-existing coronary artery disease, vascular calcification, or normal/high-normal serum calcium, calcium-based binders provide an excessive exogenous calcium load, promoting coronary and systemic vascular calcification and increasing cardiovascular events. (3) SEVELAMER CARBONATE: A non-absorbable, non-calcium-based polymer that binds phosphate anions in the gastrointestinal tract via ion exchange, safely eliminating phosphate in feces without increasing serum calcium or total body calcium balance. It is the preferred phosphate binder for hyperphosphatemic CKD patients with known cardiovascular disease or calcification."
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
  }
]
