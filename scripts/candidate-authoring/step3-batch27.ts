import { CandidateSpec } from './types';

export const step3Batch27: CandidateSpec[] = [
  {
    "code": "op-c-s3-0651",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension and Fourth-Line Spironolactone Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents for a scheduled follow-up of longstanding hypertension. He is currently prescribed lisinopril 40 mg daily, amlodipine 10 mg daily, and chlorthalidone 25 mg daily. Adherence is confirmed through pharmacy refill logs and a pill count. He adheres to a DASH diet with dietary sodium restricted to less than 2,000 mg/day. He denies alcohol consumption, tobacco use, snoring, daytime somnolence, or the use of over-the-counter NSAIDs, decongestants, or herbal supplements. Home blood pressure monitoring logs over the past 4 weeks demonstrate an average automated oscillometric reading of 156/96 mm Hg. On physical examination, body mass index is 27 kg/m2, blood pressure is 154/94 mm Hg in the right arm and 152/96 mm Hg in the left arm, and heart rate is 72/min and regular. Funduscopic examination reveals mild arteriolar narrowing without papilledema. Cardiopulmonary examination is unremarkable, and there are no abdominal bruits. Laboratory evaluation reveals: serum sodium 140 mEq/L, serum potassium 4.4 mEq/L, serum bicarbonate 25 mEq/L, blood urea nitrogen 16 mg/dL, and serum creatinine 1.0 mg/dL (estimated GFR 88 mL/min/1.73 m2). Urinalysis is negative for protein. An echocardiogram shows mild concentric left ventricular hypertrophy. Renal artery duplex ultrasound is normal. According to current AHA/ACC clinical practice guidelines for resistant hypertension, which of the following is the most appropriate next step in pharmacological management?",
    "choices": [
      [
        "Add oral spironolactone 25 mg once daily, with repeat monitoring of serum potassium and creatinine in 2 to 4 weeks",
        "This patient meets the diagnostic criteria for RESISTANT HYPERTENSION: blood pressure that remains above goal (>= 130/80 mm Hg) despite the concurrent use of THREE ANTIHYPERTENSIVE DRUG CLASSES at optimal/maximal doses, one of which is a DIURETIC (here, an ACE inhibitor, calcium channel blocker, and thiazide-like diuretic). Secondary causes (renovascular disease, obstructive sleep apnea, drug-induced hypertension) and pseudoresistance (medication non-adherence, white-coat effect) have been systematically excluded. The landmark PATHWAY-2 randomized trial established that the MOST EFFECTIVE FOURTH-LINE THERAPEUTIC ADDITION in resistant hypertension is a MINERALOCORTICOID RECEPTOR ANTAGONIST (MRA), specifically LOW-DOSE SPIRONOLACTONE (25 to 50 mg daily). Spironolactone suppresses unrecognized aldosterone-mediated sodium retention and intravascular volume expansion, which is the predominant pathophysiologic driver in resistant hypertension. Because spironolactone causes potassium retention, serum potassium and renal function must be re-evaluated within 2 to 4 weeks, especially when combined with an ACE inhibitor or ARB. If spironolactone is contraindicated or not tolerated (e.g., gynecomastia), eplerenone or amiloride is an alternative."
      ],
      [
        "Add oral doxazosin 4 mg once daily",
        "In the landmark double-blind randomized crossover PATHWAY-2 trial, spironolactone was compared directly against active fourth-line comparators: doxazosin (alpha-1 blocker), bisoprolol (beta-blocker), and placebo in resistant hypertension. Spironolactone was significantly superior to both doxazosin and bisoprolol in lowering systolic blood pressure, proving that occult aldosterone-mediated sodium retention is the primary driver of resistant hypertension."
      ],
      [
        "Add oral bisoprolol 5 mg once daily",
        "Bisoprolol was evaluated as an active comparator in the PATHWAY-2 trial; while superior to placebo, bisoprolol achieved significantly less blood pressure reduction than spironolactone and is not preferred as fourth-line therapy unless a compelling cardiac indication (e.g., angina, HFrEF, prior MI) is present."
      ],
      [
        "Refer the patient for immediate catheter-based bilateral renal sympathetic denervation",
        "Renal denervation is an emerging adjunct therapy for selected patients, but guidelines mandate that guideline-directed medical therapy\u2014including fourth-line MRA therapy\u2014must be fully optimized before considering invasive endovascular procedures."
      ],
      [
        "Switch chlorthalidone to oral furosemide 20 mg twice daily to augment distal nephron natriuresis",
        "In patients with preserved renal function (eGFR > 30 mL/min/1.73 m2), long-acting thiazide-like diuretics such as chlorthalidone or indapamide provide superior 24-hour ambulatory blood pressure reduction compared to short-acting loop diuretics."
      ]
    ],
    "shortestValidSolution": "Confirmed resistant hypertension on ACEi + CCB + thiazide with K+ 4.4 and eGFR 88 = Add low-dose spironolactone (PATHWAY-2).",
    "necessaryInference": "Identify resistant hypertension (uncontrolled on 3 full-dose classes including a diuretic) and select spironolactone as the guideline-proven fourth-line agent.",
    "strongestDistractor": "Add oral doxazosin 4 mg once daily",
    "distractorExclusion": "The PATHWAY-2 trial evaluated spironolactone directly against active comparators doxazosin and bisoprolol; spironolactone was significantly superior to both in reducing blood pressure.",
    "citation": "Williams B, MacDonald TM, Morant S, et al. Spironolactone versus placebo, bisoprolol, and doxazosin to determine the optimal treatment for drug-resistant hypertension (PATHWAY-2): a randomised, double-blind, crossover trial. Lancet. 2015;386(10011):2059-2068. PMID: 26414968.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 chronic ambulatory hypertension item testing definition of resistant hypertension, exclusion of secondary causes, and selection of spironolactone as fourth-line therapy.",
      "distractorExclusionNotes": "Doxazosin and bisoprolol were proven inferior to spironolactone in the PATHWAY-2 trial; loop diuretics are inferior to thiazide-like diuretics when eGFR is preserved.",
      "verdict": "PASS",
      "citationFormatNotes": "Original trial retrieved and claim-verified (PMID: 26414968; mechanisms study PMID: 29655877)."
    }
  },
  {
    "code": "op-c-s3-0652",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Diabetic Kidney Disease and Non-Steroidal MRA Finerenone",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman with a 14-year history of type 2 diabetes mellitus and hypertension presents for routine chronic disease follow-up. Her current medications include metformin 1,000 mg twice daily, empagliflozin 10 mg daily, losartan 100 mg daily, and atorvastatin 40 mg daily. She feels well and reports no edema, dyspnea, or dizziness. Her blood pressure is 128/78 mm Hg, heart rate is 70/min, and physical examination is notable only for mild bilateral distal sensory neuropathy with intact peripheral pulses and no peripheral edema. Laboratory studies reveal: glycated hemoglobin (HbA1c) 7.2%, serum sodium 139 mEq/L, serum potassium 4.3 mEq/L, serum bicarbonate 24 mEq/L, blood urea nitrogen 22 mg/dL, and serum creatinine 1.5 mg/dL (estimated GFR 42 mL/min/1.73 m2, down from 48 mL/min/1.73 m2 twelve months ago). Spot urine albumin-to-creatinine ratio (UACR) is 480 mg/g (confirmed on two consecutive morning samples over the past 3 months). According to current KDIGO and ADA clinical practice guidelines, which of the following is the most appropriate pharmacotherapeutic intervention to slow the progression of diabetic kidney disease and reduce cardiovascular risk?",
    "choices": [
      [
        "Initiate finerenone 20 mg once daily orally, while monitoring serum potassium at 4 weeks",
        "This patient has DIABETIC KIDNEY DISEASE (DKD) with persistent clinically significant albuminuria (UACR > 300 mg/g; stage A3 severely increased albuminuria) and moderately reduced estimated GFR (stage G3b CKD) despite optimal first-line foundational therapy with an ACE inhibitor/ARB (losartan at maximal dose) and an SGLT2 inhibitor (empagliflozin). The landmark FIDELIO-DKD and FIGARO-DKD trials established FINERENONE\u2014a novel, potent, selective NON-STEROIDAL MINERALOCORTICOID RECEPTOR ANTAGONIST (nsMRA)\u2014as a critical disease-modifying therapy in patients with type 2 diabetes and CKD. Unlike steroidal MRAs (spironolactone, eplerenone), finerenone exerts balanced kidney and cardiac mineralocorticoid receptor blockade with minimal hemodynamic blood pressure effects and a lower incidence of severe hyperkalemia. Finerenone significantly reduces the composite renal endpoint (sustained decline in eGFR >= 57%, kidney failure, or renal death) and major adverse cardiovascular events (cardiovascular death, non-fatal MI, stroke, HF hospitalization). Per KDIGO and ADA guidelines, finerenone is recommended for patients with T2D, eGFR >= 25 mL/min/1.73 m2, normal potassium (< 4.8-5.0 mEq/L), and persistent albuminuria (UACR >= 30 mg/g) despite maximal tolerated RAS inhibition and SGLT2 inhibition."
      ],
      [
        "Increase losartan to 150 mg daily to achieve maximal intraglomerular efferent arteriolar vasodilation",
        "Losartan 100 mg daily is the maximal FDA-approved and guideline-recommended dose for renal protection; escalating beyond this does not confer additional benefit and increases adverse events without clinical trial support."
      ],
      [
        "Add lisinopril 10 mg daily to combine dual renin-angiotensin system blockade",
        "Dual RAS blockade combining an ACE inhibitor and an ARB (or direct renin inhibitor) is strongly contraindicated (proven by the ONTARGET, VA NEPHRON-D, and ALTITUDE trials) due to significantly increased rates of acute kidney injury, hyperkalemia, and syncope without slowing CKD progression."
      ],
      [
        "Initiate oral patiromer 8.4 g daily as monotherapy to facilitate renal potassium excretion",
        "Potassium binders like patiromer are indicated to treat or prevent hyperkalemia during RAS/MRA therapy; they have no intrinsic nephroprotective or anti-albuminuric properties when given as monotherapy."
      ],
      [
        "Switch losartan to diltiazem 180 mg extended-release daily to avoid hyperkalemia risk",
        "Discontinuing RAS inhibition removes essential intraglomerular hemodynamic protection and accelerates diabetic glomerulosclerosis; non-dihydropyridine CCBs are not substitutes for foundational RAS inhibition in albuminuric DKD."
      ]
    ],
    "shortestValidSolution": "Persistent albuminuria (UACR 480 mg/g) in T2D despite max ARB + SGLT2i with K+ 4.3 = Initiate finerenone (FIDELIO-DKD).",
    "necessaryInference": "Apply KDIGO 2023 guidelines for DKD: add non-steroidal MRA finerenone for persistent albuminuria on maximal ARB and SGLT2i.",
    "strongestDistractor": "Add lisinopril 10 mg daily to combine dual renin-angiotensin system blockade",
    "distractorExclusion": "Dual ACEi + ARB blockade is strictly contraindicated due to increased AKI, hyperkalemia, and mortality without renal benefit (VA NEPHRON-D).",
    "citation": "Bakris GL, Agarwal R, Anker SD, et al. Effect of finerenone on chronic kidney disease outcomes in type 2 diabetes. N Engl J Med. 2020;383(23):2219-2229. PMID: 33260412.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/endocrinology chronic disease management testing modern KDIGO/ADA guidelines for non-steroidal MRA finerenone in diabetic kidney disease.",
      "distractorExclusionNotes": "Dual ACEi/ARB is dangerous and contraindicated; escalating losartan past 100 mg has no evidence; potassium binders do not provide intrinsic disease-modifying benefits.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0653",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "First-Line Pharmacological Management of Painful Diabetic Peripheral Neuropathy",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 12-year history of type 2 diabetes mellitus presents with a 7-month history of progressive burning discomfort, lancinating pains, and pins-and-needles sensations in both feet. The symptoms are most severe at night, preventing him from falling asleep, and he reports that even the touch of light bedsheets against his toes produces an unpleasant burning sensation. His current medications are metformin 1,000 mg twice daily, glipizide 10 mg daily, atorvastatin 20 mg daily, and lisinopril 20 mg daily. He has no history of renal disease, glaucoma, hepatic dysfunction, or substance use disorder. Examination reveals normal cranial nerves and 5/5 motor strength throughout both lower extremities. Sensation to pinprick and light touch is symmetrically reduced in a stocking distribution extending to the mid-shins, with prominent allodynia over the dorsum of both feet. Achilles tendon reflexes are absent bilaterally. Dorsalis pedis and posterior tibial pulses are 2+ bilaterally. Laboratory evaluation shows HbA1c 8.4%, serum creatinine 0.9 mg/dL, and normal liver enzymes. Which of the following represents the most appropriate initial pharmacological therapy for this patient's painful neuropathic symptoms?",
    "choices": [
      [
        "Duloxetine 30 mg orally once daily, titrating to 60 mg daily as tolerated",
        "This patient presents with classic PAINFUL DIABETIC PERIPHERAL NEUROPATHY (DPN), characterized by symmetric distal sensory loss, diminished ankle reflexes, nocturnal burning dysesthesias, and MECHANICAL ALLODYNIA (pain provoked by innocuous stimuli like bedsheets). American Academy of Neurology (AAN) and American Diabetes Association (ADA) guidelines designate two primary drug classes with strong evidence as FIRST-LINE PHARMACOTHERAPY for painful DPN: (1) SEROTONIN-NOREPINEPHRINE REUPTAKE INHIBITORS (SNRIs), specifically DULOXETINE (FDA-approved, starting at 30 mg daily and titrating to 60 mg daily); and (2) GABAPENTINOIDS / ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (PREGABALIN or GABAPENTIN). SNRIs facilitate descending inhibitory pain pathways by blocking the reuptake of norepinephrine and serotonin in the dorsal horn of the spinal cord. In patients without hepatic dysfunction or uncontrolled narrow-angle glaucoma, duloxetine provides rapid and substantial pain reduction with a favorable tolerability profile."
      ],
      [
        "Oxycodone controlled-release 10 mg orally every 12 hours",
        "Opioids are not recommended as first- or second-line agents for chronic neuropathic pain due to significant risks of tolerance, dependence, hyperalgesia, overdose, and lack of long-term efficacy."
      ],
      [
        "Meloxicam 15 mg orally once daily",
        "Non-steroidal anti-inflammatory drugs (NSAIDs) act peripherally on inflammatory prostaglandins and are completely ineffective for centralized neuropathic pain states; they also carry substantial gastrointestinal and nephrotoxic risks in diabetic patients."
      ],
      [
        "Topical 0.075% capsaicin cream applied to feet four times daily as monotherapy",
        "Low-concentration over-the-counter capsaicin cream requires frequent applications (3-4 times daily), causes severe initial burning erythema, has poor patient compliance, and is inferior to systemic first-line agents like duloxetine or pregabalin."
      ],
      [
        "Amitriptyline 75 mg orally nightly at bedtime as initial starting dose",
        "While tricyclic antidepressants have neuropathic efficacy, initiating amitriptyline at 75 mg carries high risks of severe anticholinergic toxicity (urinary retention, acute confusion, dry mouth), orthostatic hypotension, and cardiac arrhythmias; if used, TCAs should start at low doses (10-25 mg) and are often avoided in elderly patients."
      ]
    ],
    "shortestValidSolution": "Nocturnal burning feet, stocking sensory loss, allodynia in T2D = First-line SNRI duloxetine (or gabapentinoid).",
    "necessaryInference": "Recognize painful DPN and select guideline-directed first-line therapy (duloxetine SNRI or pregabalin) over opioids, NSAIDs, or high-dose TCAs.",
    "strongestDistractor": "Amitriptyline 75 mg orally nightly at bedtime as initial starting dose",
    "distractorExclusion": "Amitriptyline starting dose of 75 mg is dangerously high in older adults and carries severe anticholinergic and cardiac risks; duloxetine is FDA-approved first-line.",
    "citation": "Price R, Smith D, Franklin G, et al. Oral and topical treatment of painful diabetic neuropathy: practice guideline update summary: report of the AAN Guideline Subcommittee. Neurology. 2022;98(1):31-43. PMID: 34965987.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 ambulatory neurology/internal medicine item evaluating first-line pharmacotherapy for painful diabetic neuropathy according to current AAN guidelines.",
      "distractorExclusionNotes": "Opioids and NSAIDs are inappropriate for neuropathic pain; capsaicin low-potency cream has poor efficacy; starting amitriptyline at 75 mg causes acute toxicity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0654",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Peripheral Artery Disease and Supervised Exercise Therapy with Cilostazol",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman presents with bilateral lower extremity aching and cramping in her calves that consistently develops after walking approximately 1.5 blocks. The pain forces her to stop and rest, resolving completely within 4 to 5 minutes of standing still. She has no pain at rest, no night waking due to foot pain, and no history of skin ulceration. Her medical history includes coronary artery disease status post percutaneous coronary intervention 5 years ago, hypertension, and hyperlipidemia. She quit smoking 2 years ago (35 pack-year history). Her medications are aspirin 81 mg daily, atorvastatin 80 mg daily, and ramipril 10 mg daily. Physical examination reveals normal femoral pulses, but bilateral popliteal, dorsalis pedis, and posterior tibial pulses are diminished (1+). The feet are warm and well-perfused without skin breakdown, cyanosis, or trophic changes. Rest resting blood pressure is 126/78 mm Hg. Resting ankle-brachial index (ABI) is 0.64 in the right leg and 0.68 in the left leg. Transthoracic echocardiogram obtained 6 months ago showed a normal left ventricular ejection fraction of 60% without wall motion abnormalities. In addition to continuing her current antiplatelet and high-intensity statin therapy, which of the following is the most appropriate initial management for her claudication?",
    "choices": [
      [
        "Enrollment in a supervised exercise therapy (SET) program and initiation of oral cilostazol 100 mg twice daily",
        "This patient has symptomatic PERIPHERAL ARTERY DISEASE (PAD) presenting with classic intermittent claudication (Fontaine stage II / Rutherford category 1-3) confirmed by an abnormal ANKLE-BRACHIAL INDEX (ABI <= 0.90; values 0.41-0.69 indicate moderate arterial disease). She is already receiving foundational secondary cardiovascular prevention: an antiplatelet agent (aspirin), high-intensity statin (atorvastatin 80 mg), and an ACE inhibitor (ramipril). According to ACC/AHA guidelines, the FIRST-LINE INITIAL TREATMENT FOR INTERMITTENT CLAUDICATION is a SUPERVISED EXERCISE THERAPY (SET) PROGRAM. SET involves intermittent walking to moderate claudication pain for 30 to 45 minutes, at least 3 times weekly for a minimum of 12 weeks, which stimulates collateral circulation, improves skeletal muscle oxidative metabolism, and substantially increases pain-free and maximal walking distances (often doubling walking capacity). Concomitant initiation of CILOSTAZOL\u2014a phosphodiesterase-3 inhibitor that promotes arterial vasodilatation and inhibits platelet aggregation\u2014is the only pharmacotherapy proven to improve walking distance and functional status in claudication. Cilostazol is contraindicated in heart failure of any severity (PDE3 inhibitors increase mortality in CHF), but this patient has a normal LVEF of 60%."
      ],
      [
        "Referral for immediate endovascular balloon angioplasty and stenting of the superficial femoral arteries",
        "Revascularization (endovascular or surgical) is reserved for patients with chronic limb-threatening ischemia (rest pain, gangrene, non-healing ulcers) or those with lifestyle-limiting claudication who have failed a full trial of guideline-directed medical therapy and supervised exercise."
      ],
      [
        "Initiation of oral pentoxifylline 400 mg three times daily to alter erythrocyte flexibility",
        "Pentoxifylline is not recommended by current ACC/AHA guidelines because extensive randomized trials have demonstrated that its clinical efficacy in improving walking distance is marginal and not significantly superior to placebo."
      ],
      [
        "Addition of therapeutic oral anticoagulation with warfarin (target INR 2.0-3.0) to single antiplatelet therapy",
        "Full-dose therapeutic anticoagulation with warfarin does not improve walking distance or reduce cardiovascular events in stable claudication and significantly increases major bleeding risks."
      ],
      [
        "Prescription for strict bed rest and avoidance of weight-bearing physical activity to prevent ischemic tissue breakdown",
        "Inactivity leads to rapid deconditioning, worsens collateral blood vessel development, and accelerates functional decline; walking exercise is actively therapeutic."
      ]
    ],
    "shortestValidSolution": "Intermittent claudication, ABI 0.64-0.68, preserved LVEF = Supervised exercise therapy + cilostazol.",
    "necessaryInference": "Apply ACC/AHA PAD guidelines: first-line management for claudication is supervised exercise therapy plus cilostazol (in patients without heart failure).",
    "strongestDistractor": "Referral for immediate endovascular balloon angioplasty and stenting of the superficial femoral arteries",
    "distractorExclusion": "Invasive revascularization is indicated only after failure of guideline-directed medical therapy and exercise, or for limb-threatening rest ischemia.",
    "citation": "Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC guideline on the management of patients with lower extremity peripheral artery disease. J Am Coll Cardiol. 2017;69(11):e71-e126. PMID: 27851992.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 vascular medicine item testing management of intermittent claudication with supervised exercise, cilostazol mechanism and CHF contraindication check, and thresholds for revascularization.",
      "distractorExclusionNotes": "Immediate angioplasty is premature; pentoxifylline is ineffective; warfarin increases major bleeding; bed rest is counter-therapeutic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0655",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Preserved Ejection Fraction and SGLT2 Inhibitor Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman presents to the ambulatory clinic with a 4-month history of worsening shortness of breath on exertion and mild lower extremity swelling. She now experiences dyspnea when walking across a level parking lot or performing light housework (NYHA functional class III). Her medical history includes hypertension for 20 years, obesity (BMI 34 kg/m2), and permanent atrial fibrillation rate-controlled with metoprolol succinate. Her current medications are metoprolol succinate 50 mg daily, oral furosemide 40 mg daily, amlodipine 5 mg daily, and apixaban 5 mg twice daily. Vital signs reveal blood pressure 134/78 mm Hg, heart rate 74/min (irregularly irregular), respiratory rate 18/min, and oxygen saturation 96% on room air. Physical examination reveals an elevated jugular venous pressure of 9 cm H2O, bibasilar fine end-inspiratory crackles, a normal S1/S2 with an audible S4 gallop, and 1+ bilateral pitting pretibial edema. Serum B-type natriuretic peptide (BNP) is 380 pg/mL (normal < 100 pg/mL), serum creatinine is 1.1 mg/dL, and serum potassium is 4.2 mEq/L. Transthoracic echocardiogram demonstrates a left ventricular ejection fraction (LVEF) of 62%, concentric left ventricular hypertrophy (LV mass index 118 g/m2), severe left atrial enlargement, and an elevated mitral E/e' ratio of 16 (normal < 9), with no primary valvular pathology. According to current ACC/AHA/HFSA heart failure guidelines, which of the following is the most appropriate next step in pharmacological therapy to reduce cardiovascular death and heart failure hospitalizations?",
    "choices": [
      [
        "Initiate oral empagliflozin 10 mg once daily (or dapagliflozin 10 mg once daily)",
        "This patient exhibits the quintessential features of HEART FAILURE WITH PRESERVED EJECTION FRACTION (HFpEF): symptoms and signs of clinical heart failure (dyspnea NYHA class III, elevated JVP, crackles, edema), elevated natriuretic peptides (BNP 380 pg/mL), documented LVEF >= 50% (here 62%), and objective structural/diastolic abnormalities (concentric LVH, left atrial dilatation, elevated filling pressures with E/e' > 14). Historically, pharmacotherapy for HFpEF was restricted to loop diuretics for congestion relief. However, the landmark EMPEROR-Preserved (empagliflozin) and DELIVER (dapagliflozin) randomized controlled trials demonstrated that SODIUM-GLUCOSE COTRANSPORTER 2 (SGLT2) INHIBITORS significantly reduce the composite primary endpoint of CARDIOVASCULAR DEATH AND HEART FAILURE HOSPITALIZATION in patients with HFpEF, regardless of the presence or absence of type 2 diabetes mellitus. ACC/AHA/HFSA guidelines now award SGLT2 inhibitors a Class 1 (or strong Class 2a) recommendation as foundational disease-modifying therapy across the entire spectrum of LVEF, including HFpEF."
      ],
      [
        "Initiate oral digoxin 0.125 mg once daily to enhance myocardial inotropy",
        "Digoxin has no role in HFpEF and failed to reduce mortality in heart failure trials (DIG trial); in diastolic dysfunction, increasing contractility does not improve impaired ventricular relaxation."
      ],
      [
        "Initiate oral diltiazem 120 mg extended-release daily to replace metoprolol succinate",
        "Non-dihydropyridine calcium channel blockers have not been demonstrated to reduce mortality or hospitalization in HFpEF, and abrupt switching of rate-control beta-blockers in AF carries risk of destabilization."
      ],
      [
        "Initiate oral isosorbide dinitrate 20 mg three times daily plus hydralazine 37.5 mg three times daily",
        "Nitrate-hydralazine combination therapy has demonstrated mortality benefit only in Black patients with heart failure with REDUCED ejection fraction (HFrEF; A-HeFT trial); routine nitrates in HFpEF are associated with decreased activity levels and no clinical benefit (NEAT-HFpEF trial)."
      ],
      [
        "Double the dose of metoprolol succinate to 100 mg daily to achieve a target resting heart rate below 50/min",
        "Beta-blocker titration in HFpEF has not been shown to reduce mortality or hospitalizations, and excessive bradycardia can reduce cardiac output in patients dependent on heart rate to maintain perfusion."
      ]
    ],
    "shortestValidSolution": "Documented HFpEF (LVEF 62%, E/e' 16, BNP 380) with congestion = Add SGLT2 inhibitor (empagliflozin/dapagliflozin).",
    "necessaryInference": "Recognize HFpEF and apply current ACC/AHA guidelines: SGLT2 inhibitors are the first class with proven trial evidence reducing CV death/HF hospitalizations.",
    "strongestDistractor": "Initiate oral isosorbide dinitrate 20 mg three times daily plus hydralazine 37.5 mg three times daily",
    "distractorExclusion": "Hydralazine-isosorbide is indicated for HFrEF (LVEF <= 40%), not HFpEF; nitrates were proven ineffective in HFpEF in the NEAT-HFpEF trial.",
    "citation": "Anker SD, Butler J, Filippatos G, et al. Empagliflozin in heart failure with a preserved ejection fraction. N Engl J Med. 2021;385(16):1451-1461. PMID: 34449189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology guideline item testing modern medical therapy for HFpEF based on EMPEROR-Preserved and DELIVER trials establishing SGLT2 inhibitors as foundational.",
      "distractorExclusionNotes": "Digoxin, nitrates, and CCBs do not reduce clinical events in HFpEF; empirical beta-blocker escalation risks severe chronotropic incompetence.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0656",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Stable Angina Refractory to Beta-Blockers and Ranolazine Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 63-year-old man presents to the cardiology clinic for evaluation of persistent exertional chest discomfort. He has established coronary artery disease and underwent percutaneous coronary intervention with a drug-eluting stent to the proximal left anterior descending artery 3 years ago. Over the past 3 months, he notes predictable substernal chest pressure that occurs when walking uphill or carrying groceries, resolving within 3 minutes of resting. He has no chest pain at rest, no orthopnea, and no syncope. His medications include aspirin 81 mg daily, atorvastatin 80 mg daily, and metoprolol succinate 100 mg daily. On physical examination, blood pressure is 116/72 mm Hg, and heart rate is 54/min and regular. Cardiopulmonary examination is normal without murmurs or gallops. Baseline ECG demonstrates normal sinus rhythm at 52/min, with PR interval 180 ms, QRS 88 ms, and QTc 410 ms, with no acute ischemic ST-segment shifts. An exercise treadmill stress test demonstrates 1.2 mm horizontal ST depression in leads V4-V6 at 6 METs, reproducing his typical chest pressure. Coronary angiography reveals a patent LAD stent with moderate non-obstructive tandem lesions (50-60%) in the distal circumflex and right coronary artery. Which of the following is the most appropriate pharmacological agent to add to his antianginal regimen?",
    "choices": [
      [
        "Oral ranolazine 500 mg twice daily",
        "This patient suffers from REFRACTORY CHRONIC STABLE ANGINA despite optimal first-line beta-blocker therapy (metoprolol succinate 100 mg daily with a resting heart rate of 54/min and blood pressure 116/72 mm Hg). Guidelines emphasize that beta-blocker titration is limited once resting heart rate is <= 55-60/min. Adding a non-dihydropyridine calcium channel blocker (diltiazem or verapamil) is CONTRAINDICATED because combining them with a beta-blocker in the presence of existing baseline bradycardia (HR 54/min) risks profound sinus arrest and high-grade atrioventricular block. Adding a dihydropyridine CCB (amlodipine) or long-acting nitrate is limited by his borderline-low blood pressure (116/72 mm Hg). RANOLAZINE is a second-line antianginal agent that selectively INHIBITS THE LATE INWARD SODIUM CURRENT (late INa) in ischemic cardiomyocytes. This reduces intracellular sodium accumulation, which prevents reverse mode sodium-calcium exchange (NCX), diminishes diastolic calcium overload, reduces left ventricular diastolic wall tension, and improves intramyocardial capillary perfusion. Crucially, RANOLAZINE DOES NOT ALTER HEART RATE OR BLOOD PRESSURE, making it the ideal agent for patients already at their hemodynamic limits of bradycardia and normotension. (Baseline QTc should be monitored as ranolazine causes mild QT prolongation)."
      ],
      [
        "Oral diltiazem extended-release 180 mg once daily",
        "Diltiazem acts on the SA and AV nodes; co-administration with metoprolol in a patient with a baseline resting heart rate of 54/min carries a high risk of symptomatic sinus bradycardia, sinus pause, and complete heart block."
      ],
      [
        "Increase metoprolol succinate to 200 mg once daily",
        "Escalating the beta-blocker dose when the patient already has a resting heart rate of 54/min will induce severe symptomatic bradycardia without providing substantial additional antianginal benefit."
      ],
      [
        "Oral isosorbide mononitrate 60 mg once daily",
        "Long-acting nitrates cause systemic venous vasodilatation and preload reduction, which would produce symptomatic hypotension and potential reflex tachycardia in a patient with baseline blood pressure 116/72 mm Hg."
      ],
      [
        "Oral sildenafil 50 mg three times daily",
        "PDE-5 inhibitors are indicated for erectile dysfunction and pulmonary arterial hypertension; they are not approved for angina and can trigger severe coronary steal and hypotension."
      ]
    ],
    "shortestValidSolution": "Persistent angina on beta-blocker with HR 54 and BP 116/72 = Add ranolazine (no effect on HR or BP).",
    "necessaryInference": "Identify ranolazine's unique late-sodium current inhibition mechanism providing antianginal relief without lowering heart rate or blood pressure.",
    "strongestDistractor": "Oral diltiazem extended-release 180 mg once daily",
    "distractorExclusion": "Diltiazem combined with metoprolol when HR is already 54/min causes severe bradycardia and AV block.",
    "citation": "Chaitman BR, Pepine CJ, Parker JO, et al. Effects of ranolazine with atenolol, amlodipine, or diltiazem on exercise tolerance and angina frequency in patients with severe chronic angina: the CARISA randomized trial. JAMA. 2004;291(3):309-316. PMID: 14734593.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology therapeutics item testing pharmacotherapy of refractory stable angina when hemodynamics (HR 54, BP 116/72) preclude further beta-blockade, CCBs, or nitrates.",
      "distractorExclusionNotes": "Diltiazem causes dangerous bradycardia/AV block with beta-blockers; increasing metoprolol is precluded by bradycardia; nitrates cause hypotension.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0657",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Asthma-COPD Overlap Syndrome and Inhaled Triple Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man presents with progressive exertional dyspnea and a chronic morning cough productive of scant clear sputum. He has a 36 pack-year smoking history and a childhood history of recurrent wheezing and eczema that subsided in his late teens. Over the past 6 months, he has had two acute episodes of nocturnal coughing and chest tightness requiring urgent care visits. He is currently using a salmeterol dry-powder inhaler (50 mcg twice daily) that a friend recommended, along with an over-the-counter albuterol inhaler as needed. Physical examination reveals an end-expiratory polyphonic wheeze throughout both lung fields. Pre-bronchodilator spirometry demonstrates an FEV1 of 1.74 L (52% of predicted), FVC of 3.10 L, and an FEV1/FVC ratio of 0.56. Following administration of 400 mcg of inhaled albuterol, repeat spirometry shows an FEV1 of 2.06 L (an increase of 320 mL and 18%), while the post-bronchodilator FEV1/FVC ratio remains 0.61. Complete blood count reveals a total white blood cell count of 7,200/microL with 6.8% eosinophils (absolute eosinophil count 490 cells/microL). Which of the following is the most appropriate long-term management strategy for this patient?",
    "choices": [
      [
        "Discontinue salmeterol monotherapy and initiate a single-inhaler triple therapy regimen containing an inhaled corticosteroid, long-acting beta-2 agonist, and long-acting muscarinic antagonist (ICS + LABA + LAMA)",
        "This patient exhibits features of both ASTHMA and CHRONIC OBSTRUCTIVE PULMONARY DISEASE (COPD), commonly designated as ASTHMA-COPD OVERLAP (ACO). Characteristics supporting COPD include significant tobacco exposure (36 pack-years), chronic productive cough, and FIXED AIRFLOW LIMITATION (post-bronchodilator FEV1/FVC < 0.70). Characteristics supporting asthma include childhood atopy/eczema, prominent symptom variability with nocturnal awakenings, MARKED BRONCHODILATOR REVERSIBILITY (FEV1 increase > 12% and > 200 mL; here 320 mL and 18%), and PERIPHERAL EOSINOPHILIA (> 300 cells/microL). In any patient with suspected or confirmed asthma features, LABA MONOTHERAPY IS STRICTLY CONTRAINDICATED because long-acting beta-agonists without concurrent inhaled corticosteroids (ICS) fail to control airway inflammation and are associated with a significantly increased risk of severe asthma exacerbations, status asthmaticus, and asthma-related death (FDA Black Box Warning). Per GINA and GOLD guidelines, patients with ACO and elevated blood eosinophils require an ICS-CONTAINING REGIMEN. Furthermore, for patients with fixed airflow obstruction, frequent exacerbations, and dyspnea, TRIPLE THERAPY (ICS + LABA + LAMA; e.g., fluticasone furoate / umeclidinium / vilanterol) provides maximal lung function improvement, reduces acute exacerbations, and decreases all-cause mortality (IMPACT and ETHOS trials)."
      ],
      [
        "Continue salmeterol monotherapy and add oral theophylline 200 mg twice daily",
        "Continuing LABA monotherapy without an ICS is dangerous and contraindicated in patients with asthma or asthma-COPD overlap; theophylline is a narrow-therapeutic-index third-line agent with substantial toxicity risks."
      ],
      [
        "Switch salmeterol to tiotropium bromide (LAMA) monotherapy 18 mcg once daily",
        "While LAMA monotherapy is appropriate for pure COPD with low eosinophils, in patients with asthma features or overlap, withholding ICS leads to unsuppressed eosinophilic airway inflammation and increased exacerbation risk."
      ],
      [
        "Initiate maintenance oral prednisone 20 mg daily with inhaled albuterol PRN",
        "Chronic systemic corticosteroid therapy causes severe metabolic, skeletal, and cardiovascular morbidity; maintenance asthma/COPD care relies on inhaled formulations, with oral steroids reserved strictly for brief acute exacerbations."
      ],
      [
        "Initiate roflumilast 500 mcg orally once daily as monotherapy",
        "Roflumilast (a phosphodiesterase-4 inhibitor) is an oral adjunct specifically indicated for severe COPD with chronic bronchitis and FEV1 < 50% with frequent exacerbations on triple therapy; it has no role as monotherapy and does not replace inhaled ICS/bronchodilators."
      ]
    ],
    "shortestValidSolution": "Asthma features (childhood atopy, 320 mL bronchodilator reversibility, eosinophils 490) + COPD (FEV1/FVC 0.61) on LABA monotherapy = Stop LABA alone, start ICS + LABA + LAMA.",
    "necessaryInference": "Recognize Asthma-COPD Overlap, identify that LABA monotherapy is contraindicated in any asthma component, and choose ICS + LABA + LAMA.",
    "strongestDistractor": "Switch salmeterol to tiotropium bromide (LAMA) monotherapy 18 mcg once daily",
    "distractorExclusion": "LAMA monotherapy omits ICS, leaving eosinophilic airway inflammation uncontrolled in patients with asthma features/reversibility.",
    "citation": "Lipson DA, Barnhart F, Brealey N, et al. Once-daily single-inhaler triple versus dual therapy in patients with COPD. N Engl J Med. 2018;378(18):1671-1680. PMID: 29668352.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 pulmonology chronic care item evaluating Asthma-COPD Overlap, the life-threatening hazard of LABA monotherapy in asthma, and indications for inhaled triple therapy.",
      "distractorExclusionNotes": "Salmeterol monotherapy is black-box contraindicated without ICS; LAMA monotherapy lacks ICS for eosinophilic asthma overlap; oral steroids carry systemic toxicity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0658",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Systematic Diagnostic and Empirical Algorithm for Chronic Cough",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old woman presents to the clinic with a 10-week history of a persistent, non-productive cough. She reports that the cough is frequently accompanied by a sensation of liquid dripping down the back of her throat and an urge to clear her throat continuously, particularly when supine in bed. She has had no fever, chills, hemoptysis, shortness of breath, heartburn, or weight loss. She is a lifelong non-smoker and works as an accountant. Her only medication is multivitamin daily; she has never taken an ACE inhibitor. Vital signs are normal. Physical examination shows clear conjunctivae, mildly boggy nasal turbinates with pale mucosa, and prominent lymphoid hyperplasia ('cobblestoning') along the posterior pharyngeal wall. Pulmonary auscultation reveals clear breath sounds bilaterally without wheezes, crackles, or rhonchi. A posteroanterior and lateral chest radiograph is completely normal. According to the American College of Chest Physicians (ACCP) evidence-based clinical practice guidelines for chronic cough, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate an empirical trial of a first-generation oral antihistamine-decongestant combination (or intranasal corticosteroid) for upper airway cough syndrome (UACS)",
        "CHRONIC COUGH is defined as a cough lasting > 8 weeks. In an immunocompetent non-smoker with a normal chest radiograph who is not taking an ACE inhibitor, the 'pathogenic triad' accounting for over 90% of cases comprises: (1) UPPER AIRWAY COUGH SYNDROME (UACS, formerly post-nasal drip); (2) ASTHMA / COUGH-VARIANT ASTHMA; and (3) GASTROESOPHAGEAL REFLUX DISEASE (GERD). The ACCP algorithmic approach mandates a sequential, step-wise empirical treatment trial before invasive testing. UACS is the most common single cause. Features here\u2014throat tickling, frequent throat clearing, nocturnal exacerbation, and pharyngeal 'cobblestoning'\u2014strongly suggest UACS. Guidelines recommend an INITIAL EMPIRICAL TRIAL of a first-generation oral antihistamine/decongestant (e.g., brompheniramine/pseudoephedrine) or intranasal corticosteroid for 2 to 4 weeks. If the cough resolves, the diagnosis is confirmed. If cough persists, subsequent steps involve spirometry/methacholine challenge for cough-variant asthma, followed by high-dose empiric PPI therapy for GERD, and induced sputum for non-asthmatic eosinophilic bronchitis."
      ],
      [
        "Perform flexible fiberoptic bronchoscopy with bronchoalveolar lavage to evaluate for occult airway pathology",
        "Bronchoscopy has a diagnostic yield of less than 1% in non-smoking patients with a normal chest radiograph and is invasive, costly, and inappropriate before completing empirical trials."
      ],
      [
        "Order a 24-hour ambulatory esophageal dual-probe pH-impedance monitoring study",
        "While GERD is a major cause of chronic cough, ambulatory pH monitoring is reserved for patients who fail empiric lifestyle modifications and proton pump inhibitor therapy, not as an initial test."
      ],
      [
        "Prescribe a 14-day course of oral azithromycin for suspected macrolide-responsive chronic bronchitis",
        "Empirical antibiotic therapy is unindicated in non-smoking immunocompetent patients with normal chest radiography and no purulent sputum, promoting antibiotic resistance."
      ],
      [
        "Order a high-resolution non-contrast computed tomography (HRCT) scan of the chest",
        "HRCT is indicated when clinical 'red flags' exist (hemoptysis, unexplained weight loss, abnormal physical exam) or after failure of sequential empirical therapies for UACS, asthma, GERD, and NAEB."
      ]
    ],
    "shortestValidSolution": "Normal CXR, non-smoker, no ACEi, postnasal drip, pharyngeal cobbles = Empiric antihistamine-decongestant for UACS.",
    "necessaryInference": "Apply ACCP chronic cough algorithm: step 1 in non-smokers with normal CXR and post-nasal symptoms is empiric treatment for UACS.",
    "strongestDistractor": "Order a high-resolution non-contrast computed tomography (HRCT) scan of the chest",
    "distractorExclusion": "Advanced thoracic imaging is inappropriate when the chest radiograph is normal and common causes (UACS, asthma, GERD) have not been sequentially managed.",
    "citation": "Irwin RS, French CL, Chang AB, Altman KW. Classification of cough as a symptom in adults and management algorithms: CHEST Guideline and Expert Panel Report. Chest. 2018;153(1):196-209. PMID: 29080708.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 ambulatory pulmonology/internal medicine item assessing the ACCP stepwise algorithm for chronic cough in adults.",
      "distractorExclusionNotes": "Bronchoscopy and HRCT are low-yield invasive/radiation procedures; antibiotics are unwarranted; pH monitoring is reserved for refractory suspected GERD.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0659",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Severe Osteoporosis and Anabolic-First Sequential Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman is evaluated in the clinic 6 weeks following an episode of acute mid-back pain that occurred while lifting a light grocery bag. Thoracolumbar spine radiographs obtained at that time revealed a new 35% anterior wedge compression fracture of the T11 vertebral body. She has had no prior fractures and has never received pharmacotherapy for bone health. Her medical history is significant only for mild hypertension managed with hydrochlorothiazide 12.5 mg daily. Dual-energy X-ray absorptiometry (DXA) demonstrates a bone mineral density T-score of -3.8 at the lumbar spine (L1-L4), -3.1 at the femoral neck, and -3.2 at the total hip. Laboratory evaluation shows serum calcium 9.4 mg/dL, serum phosphorus 3.2 mg/dL, 25-hydroxyvitamin D 36 ng/mL, serum creatinine 0.8 mg/dL (eGFR 78 mL/min/1.73 m2), intact parathyroid hormone 38 pg/mL, and normal serum protein electrophoresis. She has no personal history of breast cancer, hypercalcemia, skeletal radiation therapy, or Paget disease of bone. According to current American Association of Clinical Endocrinologists (AACE) guidelines, which of the following is the most appropriate initial pharmacological strategy?",
    "choices": [
      [
        "Initiate a subcutaneous bone anabolic agent (teriparatide or romosozumab) for 12 to 24 months, followed by an antiresorptive agent (such as zoledronic acid or alendronate)",
        "This patient has 'VERY HIGH RISK' or SEVERE OSTEOPOROSIS defined by: (1) a recent fragility fracture (T11 vertebral compression fracture) and (2) a baseline bone mineral density T-score <= -3.0 (here -3.8 at the lumbar spine). Landmark trials (VERO trial comparing teriparatide to risedronate; ARCH trial comparing romosozumab to alendronate) demonstrated that in patients at very high fracture risk, ANABOLIC-FIRST SEQUENTIAL THERAPY produces substantially faster, larger increases in bone mineral density and significantly superior reduction in new vertebral and clinical fractures compared to starting with an antiresorptive agent. Recombinant human parathyroid hormone (TERIPARATIDE) stimulates osteoblastic new bone formation over 24 months, while the sclerostin inhibitor ROMOSOZUMAB provides dual bone-building and antiresorptive action over 12 months. Crucially, when an anabolic course concludes, AN ANTIRESORPTIVE AGENT (e.g., zoledronic acid or alendronate) MUST BE IMMEDIATELY SEQUENCED to lock in bone mineral density gains and prevent rapid bone loss."
      ],
      [
        "Initiate oral alendronate 70 mg once weekly as indefinite lifelong monotherapy",
        "In patients at very high fracture risk, starting with an antiresorptive is inferior to anabolic-first therapy; moreover, bisphosphonates should not be administered indefinitely due to risks of atypical femoral fractures and osteonecrosis of the jaw, requiring a drug holiday after 3 to 5 years."
      ],
      [
        "Initiate oral raloxifene 60 mg once daily as first-line monotherapy",
        "Raloxifene (a selective estrogen receptor modulator) reduces vertebral fractures only, does not reduce non-vertebral or hip fractures, and is significantly less potent than bisphosphonates or anabolic agents."
      ],
      [
        "Prescribe calcium carbonate 1,200 mg daily and cholecalciferol 2,000 IU daily as sole initial management",
        "Calcium and vitamin D supplementation are essential nutritional adjuncts but are entirely insufficient as monotherapy to prevent recurrent fractures in severe established osteoporosis."
      ],
      [
        "Initiate subcutaneous denosumab 60 mg every 6 months with instructions to discontinue after 2 years without further medications",
        "Discontinuing denosumab without immediate transition to a bisphosphonate triggers a severe rebound acceleration of bone resorption, rapid bone loss, and a surge in multiple new vertebral fractures."
      ]
    ],
    "shortestValidSolution": "Very high fracture risk (T-score -3.8 + acute vertebral fracture) = Anabolic-first (teriparatide/romosozumab) followed by antiresorptive.",
    "necessaryInference": "Apply modern AACE osteoporosis guidelines: patients at very high risk (T-score < -3.0 with fragility fracture) benefit most from anabolic-first sequential therapy.",
    "strongestDistractor": "Initiate oral alendronate 70 mg once weekly as indefinite lifelong monotherapy",
    "distractorExclusion": "Starting antiresorptive first produces slower and smaller fracture reduction than anabolic agents in very high-risk patients (VERO/ARCH trials).",
    "citation": "Camacho PM, Petak SM, Binkley N, et al. American Association of Clinical Endocrinologists/American College of Endocrinology clinical practice guidelines for the diagnosis and treatment of postmenopausal osteoporosis - 2020 update. Endocr Pract. 2020;26(Suppl 1):1-46. PMID: 32427503.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/geriatrics item testing updated clinical practice guidelines for very-high-risk osteoporosis requiring anabolic-first sequential therapy.",
      "distractorExclusionNotes": "Alendronate monotherapy is inferior in very high risk; raloxifene lacks hip fracture efficacy; denosumab abrupt cessation triggers rebound vertebral fractures.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0660",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Gout Treat-to-Target Allopurinol Titration with Flare Prophylaxis",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents to the clinic 4 weeks after recovering from his third acute gout flare in the past 12 months. He has palpable, firm, non-tender subcutaneous nodules over the extensor surface of his right elbow and first metatarsophalangeal joint. Arthrocentesis performed during his prior acute attack revealed monosodium urate crystals with negative synovial fluid cultures. His past medical history includes hypertension and stage 3a chronic kidney disease. Current medications are amlodipine 10 mg daily and losartan 50 mg daily. Physical examination reveals normal vital signs and visible subcutaneous tophi over the olecranon bursa without erythema or warmth. Laboratory evaluation shows serum urate 9.2 mg/dL (target < 5.0-6.0 mg/dL), serum creatinine 1.4 mg/dL (eGFR 56 mL/min/1.73 m2), and normal hepatic function. Testing for the HLA-B*5801 allele is negative. In accordance with American College of Rheumatology (ACR) guidelines, which of the following is the most appropriate management plan for initiating urate-lowering therapy?",
    "choices": [
      [
        "Start allopurinol at 100 mg daily, titrate upward every 2 to 5 weeks beyond 300 mg daily until serum urate is < 5.0 mg/dL, and co-prescribe low-dose oral colchicine 0.6 mg daily for at least 6 months",
        "According to the 2020 ACR Guideline for the Management of Gout, indications for URATE-LOWERING THERAPY (ULT) include: (1) >= 1 subcutaneous tophi; (2) radiographic damage attributable to gout; or (3) frequent flares (>= 2/year). ALLOPURINOL is the strongly recommended first-line ULT for all patients, including those with CKD. In CKD stage >= 3, allopurinol should be started at a LOW DOSE (<= 100 mg/day, or 50 mg in severe CKD) to minimize hypersensitivity risk and flare frequency, but then SYSTEMATICALLY TITRATED UPWARD every 2 to 5 weeks guided by serum urate monitoring. The historical practice of capping allopurinol at 300 mg/day in CKD is outdated; doses can be titrated safely above 300 mg/day to achieve the TARGET SERUM URATE (< 5.0 mg/dL in patients with tophi to promote crystal dissolution). Concomitant ANTI-INFLAMMATORY FLARE PROPHYLAXIS with low-dose colchicine (0.6 mg once daily or every other day adjusted for renal function) or low-dose NSAIDs is strongly recommended for AT LEAST 3 TO 6 MONTHS to prevent mobilization flares during the initiation period."
      ],
      [
        "Initiate allopurinol at 300 mg daily as a fixed dose, without anti-inflammatory flare prophylaxis",
        "Starting allopurinol at 300 mg daily in CKD increases the risk of severe cutaneous adverse reactions (SCAR) and precipitates acute mobilization flares; omitting flare prophylaxis leads to frequent painful flares and high medication discontinuation rates."
      ],
      [
        "Initiate oral probenecid 500 mg twice daily as the preferred first-line uricosuric agent",
        "Probenecid is a second-line agent that requires intact renal function (ineffective when eGFR < 30-50 mL/min/1.73 m2) and is contraindicated in patients with a history of nephrolithiasis or elevated urinary urate excretion."
      ],
      [
        "Withhold all urate-lowering pharmacotherapy until the patient has remained completely flare-free for at least 12 consecutive months",
        "Withholding ULT in a patient with tophi and recurrent flares permits progressive crystal deposition, permanent joint destruction, and worsening renal parenchymal injury."
      ],
      [
        "Initiate allopurinol 100 mg daily with the goal of maintaining serum urate between 6.5 and 7.5 mg/dL",
        "Serum urate must be lowered below its physiologic saturation threshold (< 6.8 mg/dL), and specifically below 5.0-6.0 mg/dL (and < 5.0 mg/dL for tophaceous gout), to dissolve monosodium urate crystals."
      ]
    ],
    "shortestValidSolution": "Tophaceous gout + CKD 3a = Start allopurinol 100 mg, titrate to target urate < 5.0 mg/dL, plus 6 months colchicine prophylaxis.",
    "necessaryInference": "Apply ACR treat-to-target gout guidelines: start allopurinol low, titrate to target <5 mg/dL with concurrent colchicine flare prophylaxis.",
    "strongestDistractor": "Initiate allopurinol at 300 mg daily as a fixed dose, without anti-inflammatory flare prophylaxis",
    "distractorExclusion": "Starting at 300 mg without titration in CKD risks toxicity; omitting flare prophylaxis triggers painful mobilization attacks and non-adherence.",
    "citation": "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology guideline for the management of gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32391934.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology treat-to-target item evaluating allopurinol initiation dosing in CKD, upward titration beyond 300 mg, serum urate targets for tophi, and mandatory flare prophylaxis.",
      "distractorExclusionNotes": "Fixed 300 mg starting dose without prophylaxis is unsafe; probenecid is inferior in CKD; withholding ULT causes joint destruction; target urate 6.5-7.5 is above saturation threshold.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0661",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Medication Overuse Headache and Preventive CGRP/Topiramate Initiation",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old woman presents to the clinic with persistent headaches occurring nearly every day for the past 4 months. She has a 15-year history of episodic migraines that typically presented as unilateral, throbbing, moderate-to-severe headaches with nausea and photophobia, responding well to oral sumatriptan. However, over the past year, her headache frequency increased, and she began taking over-the-counter ibuprofen (600-800 mg) and sumatriptan (50-100 mg) on a daily or near-daily basis. Her headache diary over the last 30 days reveals 24 headache days and 20 days of acute abortive medication consumption (12 days of sumatriptan and 16 days of ibuprofen). The current headaches present upon waking as a dull, diffuse, bilateral pressure that she treats immediately with sumatriptan or ibuprofen, experiencing partial relief for 4 to 6 hours before the dull ache recurs. Physical and neurological examinations are completely normal. Funduscopic examination shows sharp disc margins. Brain MRI with gadolinium is normal. Which of the following is the most appropriate management strategy for this patient?",
    "choices": [
      [
        "Structured discontinuation/taper of acute rescue analgesics (triptans and NSAIDs) combined with immediate initiation of evidence-based migraine preventive therapy (such as a CGRP antagonist or topiramate)",
        "This patient meets International Headache Society (ICHD-3) criteria for MEDICATION OVERUSE HEADACHE (MOH), also known as rebound headache: (1) Headache occurring on >= 15 days/month in a patient with a pre-existing primary headache disorder; and (2) Regular overuse of acute headache medications for > 3 months (defined as >= 10 days/month for triptans, opioids, or combination analgesics; or >= 15 days/month for simple NSAIDs/acetaminophen). The clinical pattern\u2014dull, holocephalic morning headache waking the patient that temporarily eases with abortives only to return\u2014is classic. Definitive management requires TWO SIMULTANEOUS INTERVENTIONS: (1) STRUCTURED WITHDRAWAL/RESTRICTION OF THE OVERUSED ACUTE AGENTS (restricting acute abortives to < 2 days per week or <= 10 days per month) to break the receptor sensitization cycle; and (2) CONCURRENT INITIATION OF EFFECTIVE PREVENTIVE THERAPY. Preventive options include CALCITONIN GENE-RELATED PEPTIDE (CGRP) MONOCLONAL ANTIBODIES (e.g., erenumab, fremanezumab), TOPIRAMATE, or BETA-BLOCKERS. Providing bridge therapy (such as a brief oral prednisone taper or occipital nerve block) can mitigate acute withdrawal headache symptoms."
      ],
      [
        "Escalate sumatriptan to subcutaneous sumatriptan 6 mg injections daily whenever headaches recur",
        "Escalating acute triptan therapy reinforces central trigeminovascular sensitization, worsening medication overuse headache frequency and duration."
      ],
      [
        "Initiate oral oxycodone/acetaminophen 5/325 mg twice daily as needed for acute abortive rescue",
        "Opioids carry the highest liability for medication overuse headache, dependence, and chronification; their use in primary headache disorders is strongly discouraged."
      ],
      [
        "Advise the patient to stop all medications completely and withhold preventive therapy until she is drug-free for 3 months",
        "Delaying preventive therapy during acute analgesic withdrawal results in severe, intractable rebound migraines and high rates of patient failure; initiating prevention concurrently improves successful withdrawal."
      ],
      [
        "Refer the patient for surgical bilateral extracranial nerve decompression",
        "Surgical nerve decompression is an unvalidated, non-guideline-recommended invasive intervention without evidence of efficacy in medication overuse headache."
      ]
    ],
    "shortestValidSolution": "Headache > 15 days/mo + triptans/NSAIDs > 15 days/mo = Medication overuse headache: detox acute abortives + start preventive therapy.",
    "necessaryInference": "Diagnose medication overuse headache (ICHD-3) and apply consensus management: withdraw overused abortives while initiating effective migraine prophylaxis.",
    "strongestDistractor": "Advise the patient to stop all medications completely and withhold preventive therapy until she is drug-free for 3 months",
    "distractorExclusion": "Recent randomized trials demonstrate that initiating preventive therapy immediately at the start of withdrawal significantly improves outcomes compared to waiting.",
    "citation": "Diener HC, Dodick D, Evers S, et al. Pathophysiology, prevention, and treatment of medication overuse headache. Lancet Neurol. 2019;18(9):891-902. PMID: 31178301.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 neurology/ambulatory medicine item evaluating medication overuse headache diagnostic thresholds and modern concurrent withdrawal/prevention initiation strategy.",
      "distractorExclusionNotes": "Escalating triptans or introducing opioids worsens central sensitization; withholding prevention leads to unbearable rebound; surgery is unsupported.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0662",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Benign Prostatic Hyperplasia Combination Therapy to Prevent Clinical Progression",
    "provisionalDifficulty": 4,
    "stem": "A 70-year-old man presents to the clinic with severe lower urinary tract symptoms (LUTS) that have progressively worsened over the past 9 months. He reports hesitancy, a weak and interrupted urinary stream, sensation of incomplete emptying, and having to urinate every 1 to 2 hours during the day. He also wakes 3 to 4 times per night to void (nocturia). He denies dysuria, hematuria, fever, or urethral discharge. His International Prostate Symptom Score (IPSS) is 24 (severe symptoms; scale 0-35). On physical examination, his abdomen is soft without suprapubic distension. Digital rectal examination demonstrates a smooth, non-tender, symmetrically enlarged prostate without induration, nodules, or asymmetry. Laboratory evaluation reveals a normal urinalysis with no leukocytes or hematuria, serum creatinine 1.0 mg/dL, and serum prostate-specific antigen (PSA) of 2.6 ng/mL. Transabdominal ultrasound demonstrates a post-void residual (PVR) volume of 160 mL and an estimated prostate volume of 48 mL (normal < 25-30 mL). Uroflowmetry reveals a maximum urinary flow rate (Qmax) of 9.2 mL/s. According to American Urological Association (AUA) clinical guidelines, which of the following is the most appropriate long-term pharmacological strategy to reduce his risk of acute urinary retention and the need for future prostate surgery?",
    "choices": [
      [
        "Initiate combination therapy with an alpha-1-adrenergic antagonist (tamsulosin 0.4 mg daily) and a 5-alpha-reductase inhibitor (finasteride 5 mg daily)",
        "This patient has SEVERE BENIGN PROSTATIC HYPERPLASIA (BPH) with lower urinary tract symptoms (IPSS 24) and objective evidence of PROSTATE ENLARGEMENT (prostate volume 48 mL [> 30 mL], PSA 2.6 ng/mL [> 1.5 ng/mL], and elevated post-void residual 160 mL). The landmark MTOPS (Medical Therapy of Prostatic Symptoms) and CombAT trials demonstrated that in men with moderate-to-severe symptoms and clinical evidence of prostatic enlargement (prostate volume > 30-40 mL or PSA > 1.5 ng/mL), COMBINATION MEDICAL THERAPY with an ALPHA-1-ADRENERGIC ANTAGONIST (tamsulosin) and a 5-ALPHA-REDUCTASE INHIBITOR (5-ARI; finasteride or dutasteride) is significantly superior to either monotherapy. The alpha-1 blocker relaxes smooth muscle in the prostatic stroma and bladder neck, providing RAPID SYMPTOM RELIEF within days to weeks. The 5-ARI inhibits conversion of testosterone to dihydrotestosterone (DHT), inducing epithelial atrophy and shrinking prostate volume by 20-30% over 6 to 12 months. Crucially, ONLY 5-ARIs (alone or in combination) ALTER THE NATURAL HISTORY OF BPH by HALVING THE LONG-TERM RISKS OF ACUTE URINARY RETENTION AND BPH-RELATED INVASIVE SURGERY. (Note: 5-ARIs reduce serum PSA by approximately 50%; PSA values must be doubled when screening for prostate cancer after 6 months of therapy)."
      ],
      [
        "Initiate tamsulosin 0.4 mg daily as monotherapy",
        "Alpha-1 blocker monotherapy provides prompt symptom relief but DOES NOT halt prostate growth, does not shrink prostate volume, and DOES NOT reduce the long-term risk of acute urinary retention or surgical intervention."
      ],
      [
        "Initiate finasteride 5 mg daily as monotherapy",
        "While 5-ARIs reduce long-term surgical risk, they require 6 to 12 months of therapy to achieve clinical reduction in prostate volume and are ineffective for providing rapid relief of severe acute symptoms (IPSS 24)."
      ],
      [
        "Initiate dietary supplementation with saw palmetto (Serenoa repens) extract 320 mg daily",
        "Rigorous randomized double-blind placebo-controlled trials have demonstrated that saw palmetto extract is no more effective than placebo in improving urinary symptoms, flow rate, or prostate size."
      ],
      [
        "Refer the patient for immediate open simple suprapubic prostatectomy",
        "Invasive surgical intervention is premature; surgery is indicated for refractory acute urinary retention, recurrent gross hematuria, recurrent UTIs, bladder calculi, or failure of optimal medical therapy."
      ]
    ],
    "shortestValidSolution": "Severe LUTS (IPSS 24) + enlarged prostate (48 mL, PSA 2.6) = Combination alpha-1 blocker (tamsulosin) + 5-ARI (finasteride).",
    "necessaryInference": "Apply AUA / MTOPS guidelines: men with severe LUTS and enlarged prostate (>30 mL / PSA >1.5) require combination alpha-blocker + 5-ARI to prevent urinary retention/surgery.",
    "strongestDistractor": "Initiate tamsulosin 0.4 mg daily as monotherapy",
    "distractorExclusion": "Alpha-blocker monotherapy improves flow rate but does not reduce the long-term risks of urinary retention or need for surgery.",
    "citation": "McConnell JD, Roehrborn CG, Bautista OM, et al. The long-term effect of doxazosin, finasteride, and combination therapy on the clinical progression of benign prostatic hyperplasia. N Engl J Med. 2003;349(25):2387-2398. PMID: 14681504.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 urology/ambulatory internal medicine item testing indications for combination BPH medical therapy (alpha-blocker + 5-ARI) based on MTOPS and CombAT trials.",
      "distractorExclusionNotes": "Alpha-blocker monotherapy fails to prevent retention/surgery; 5-ARI monotherapy is slow to relieve severe symptoms; saw palmetto lacks efficacy; surgery is premature.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0663",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Phosphodiesterase-5 Inhibitor and Nitrate Contraindication Protocol",
    "provisionalDifficulty": 4,
    "stem": "A 61-year-old man presents to the emergency department with acute substernal chest pressure radiating to his left shoulder that began 45 minutes ago while walking his dog. He has a history of type 2 diabetes mellitus, hypertension, and hyperlipidemia. On arrival, he appears diaphoretic and anxious. Vital signs are: blood pressure 138/82 mm Hg, heart rate 84/min, respiratory rate 18/min, and oxygen saturation 98% on ambient air. Physical examination reveals clear lungs and normal heart sounds without murmurs or gallops. Baseline 12-lead ECG shows 1.5 mm of horizontal ST-segment depression in leads V4-V6. When questioned about his medication history, he states he takes metformin 1,000 mg twice daily, atorvastatin 40 mg daily, and amlodipine 5 mg daily. On direct questioning regarding sexual health, he reports taking an oral dose of tadalafil 20 mg approximately 18 hours ago for erectile dysfunction. Which of the following is the most appropriate management regarding nitrate administration for his acute coronary syndrome?",
    "choices": [
      [
        "Withhold all short-acting and long-acting nitrates for a minimum of 48 hours following tadalafil ingestion, managing his ischemic pain with intravenous morphine or beta-blockers and proceeding to urgent coronary angiography",
        "The concurrent use of PHOSPHODIESTERASE-5 (PDE-5) INHIBITORS (sildenafil, vardenafil, avanafil, tadalafil) and ORGANIC NITRATES (sublingual nitroglycerin, isosorbide dinitrate, isosorbide mononitrate, nitroprusside) is an ABSOLUTE CONTRAINDICATION. PDE-5 inhibitors prevent the enzymatic degradation of cyclic guanosine monophosphate (cGMP) in vascular smooth muscle cells, while nitrates stimulate guanylyl cyclase to increase cGMP synthesis. Co-administration results in synergistic cGMP accumulation, inducing uncontrolled, profound systemic vasodilation, refractory hypotension, severe coronary hypoperfusion, and fatal myocardial infarction. ACC/AHA guidelines establish strict waiting periods before nitrates can be safely considered: AT LEAST 24 HOURS after sildenafil or vardenafil, and AT LEAST 48 HOURS after TADALAFIL (due to tadalafil's significantly longer elimination half-life of 17.5 hours). In patients who develop acute coronary syndrome within this exclusion window, nitrates must be strictly withheld; anti-ischemic therapy should rely on beta-blockers, non-dihydropyridine CCBs, opioids, and immediate heparinization and coronary catheterization."
      ],
      [
        "Administer sublingual nitroglycerin 0.4 mg immediately with close blood pressure monitoring, as 18 hours is sufficient for tadalafil clearance",
        "Tadalafil has a half-life of ~17.5 hours and remains biologically active for over 36 to 48 hours; administering nitroglycerin at 18 hours risks life-threatening cardiovascular collapse."
      ],
      [
        "Administer intravenous nitroglycerin infusion with a lower starting rate of 5 mcg/min",
        "Lowering the starting infusion rate does not eliminate the catastrophic pharmacodynamic synergy between nitrates and residual PDE-5 inhibition; all nitrates are absolutely contraindicated."
      ],
      [
        "Administer a test dose of oral isosorbide dinitrate 10 mg under continuous telemetry monitoring",
        "Test doses of long-acting oral nitrates are equally dangerous, carry unpredictable pharmacokinetics, and are contraindicated within 48 hours of tadalafil."
      ],
      [
        "Administer intravenous phenylephrine infusion concurrently with sublingual nitroglycerin to prevent anticipated hypotension",
        "Prophylactically infusing an alpha-1 agonist to permit nitrate administration is clinically reckless, increases afterload and myocardial oxygen demand, and worsens acute myocardial ischemia."
      ]
    ],
    "shortestValidSolution": "Tadalafil ingested 18 hours ago = Strictly withhold nitrates for at least 48 hours (sildenafil 24h, tadalafil 48h).",
    "necessaryInference": "Recall ACC/AHA guideline cutoff for tadalafil: absolute contraindication to nitrates within 48 hours due to profound synergistic cGMP-mediated hypotension.",
    "strongestDistractor": "Administer sublingual nitroglycerin 0.4 mg immediately with close blood pressure monitoring, as 18 hours is sufficient for tadalafil clearance",
    "distractorExclusion": "18 hours is within tadalafil's active therapeutic window (requires 48h, compared to 24h for sildenafil); nitrate administration risks fatal shock.",
    "citation": "Kloner RA. Pharmacology and drug interaction aspects of the PDE5 inhibitors: focus on alpha-blockers, nitrates, and other antihypertensives. J Sex Med. 2005;2(3):319-331. PMID: 16422830.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency/cardiology pharmacology item evaluating the absolute contraindication window for nitrates following tadalafil (48 hours) versus sildenafil (24 hours).",
      "distractorExclusionNotes": "Administering sublingual or IV nitrates at 18 hours post-tadalafil causes refractory shock; phenylephrine co-administration increases cardiac afterload and infarct size.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0664",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Chronic Hepatitis B Antiviral Indications and Preferred Nucleos(t)ide Analogs",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old Asian man presents for evaluation of chronic hepatitis B virus (HBV) infection, diagnosed 5 years ago during routine blood donation. He is asymptomatic and takes no medications. Physical examination reveals normal vital signs, no jaundice, no palmar erythema or spider angiomas, and no hepatosplenomegaly. Laboratory studies demonstrate: alanine aminotransferase (ALT) 94 U/L (normal <= 35 U/L; elevated at > 2.5x upper limit of normal), aspartate aminotransferase (AST) 76 U/L, total bilirubin 0.8 mg/dL, alkaline phosphatase 72 U/L, serum albumin 4.2 g/dL, platelet count 240,000/microL, and international normalized ratio (INR) 1.0. Serologic testing confirms: hepatitis B surface antigen (HBsAg) positive, hepatitis B e-antigen (HBeAg) positive, and antibody to HBeAg (anti-HBe) negative. Quantitative serum HBV DNA is 185,000 IU/mL. Abdominal ultrasound shows a normal liver parenchyma without nodularity, splenomegaly, or ascites. Transient elastography (FibroScan) indicates a liver stiffness of 8.8 kPa, consistent with stage F2-F3 moderate-to-severe hepatic fibrosis. In accordance with American Association for the Study of Liver Diseases (AASLD) guidelines, which of the following is the most appropriate management?",
    "choices": [
      [
        "Initiate antiviral therapy with oral entecavir 0.5 mg daily (or tenofovir alafenamide 25 mg daily)",
        "This patient has CHRONIC IMMUNE-ACTIVE HEPATITIS B INFECTION, defined by: (1) HBsAg positive for > 6 months; (2) elevated serum HBV DNA > 20,000 IU/mL in HBeAg-positive disease (here 185,000 IU/mL); (3) persistently elevated ALT >= 2 times the upper limit of normal (here 94 U/L); and (4) non-invasive evidence of significant hepatic fibrosis (elastography 8.8 kPa, F2-F3). Per AASLD guidelines, ANTIVIRAL THERAPY IS STRONGLY INDICATED to suppress viral replication, halt progression to cirrhosis, and reduce the incidence of hepatocellular carcinoma. The FIRST-LINE PREFERRED NUCLEOS(T)IDE ANALOGS are ENTECAVIR (0.5 mg daily for treatment-naive patients) or TENOFOVIR (tenofovir alafenamide [TAF] or tenofovir disoproxil fumarate [TDF]). These agents possess high antiviral potency and a HIGH GENETIC BARRIER TO RESISTANCE, maintaining < 1-2% resistance rates at 5 years. (In contrast, older agents like lamivudine have a > 70% 5-year resistance rate and are obsolete). TAF is particularly preferred in patients at risk for renal dysfunction or bone mineral density loss."
      ],
      [
        "Initiate oral lamivudine 100 mg daily as cost-effective first-line monotherapy",
        "Lamivudine has a very low genetic barrier to resistance, resulting in YMDD mutation-mediated drug resistance in over 70% of patients within 5 years; it is no longer recommended as first-line therapy."
      ],
      [
        "Defer antiviral therapy and monitor ALT and HBV DNA every 12 months, as the patient is currently asymptomatic",
        "Deferring treatment in a patient with HBV DNA > 20,000 IU/mL, ALT > 2x ULN, and stage F2-F3 fibrosis risks rapid progression to decompensated cirrhosis and hepatocellular carcinoma."
      ],
      [
        "Administer a 12-week course of ledipasvir and sofosbuvir orally",
        "Ledipasvir/sofosbuvir is a direct-acting antiviral combination specifically approved for hepatitis C virus (HCV) genotype 1; it has no antiviral activity against hepatitis B virus."
      ],
      [
        "Initiate oral ribavirin monotherapy 600 mg twice daily for 24 weeks",
        "Ribavirin monotherapy is completely ineffective for hepatitis B virus suppression and causes hemolytic anemia."
      ]
    ],
    "shortestValidSolution": "HBeAg(+), HBV DNA 185,000 IU/mL, ALT > 2x ULN, F2-F3 fibrosis = Initiate first-line entecavir or tenofovir.",
    "necessaryInference": "Apply AASLD guidelines: immune-active HBV (DNA >20k, ALT >2x ULN, significant fibrosis) requires first-line high-barrier nucleoside analogs (entecavir/tenofovir).",
    "strongestDistractor": "Initiate oral lamivudine 100 mg daily as cost-effective first-line monotherapy",
    "distractorExclusion": "Lamivudine is obsolete due to >70% 5-year viral resistance (YMDD mutation); entecavir and tenofovir have superior resistance profiles.",
    "citation": "Terrault NA, Lok ASF, McMahon BJ, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology. 2018;67(4):1560-1599. PMID: 29405329.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 gastroenterology/hepatology chronic disease item evaluating antiviral therapy indications for chronic hepatitis B and selection of preferred high-barrier nucleos(t)ide analogs.",
      "distractorExclusionNotes": "Lamivudine has catastrophic resistance rates; observation is dangerous given F2-F3 fibrosis and high viral load; ledipasvir/sofosbuvir is for HCV; ribavirin is ineffective.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0665",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Metabolic Steatohepatitis (MASH) and Resmetirom Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with obesity (body mass index 33.5 kg/m2), type 2 diabetes mellitus, and dyslipidemia presents for evaluation of persistent transaminitis. He drinks no alcohol and takes metformin 1,000 mg twice daily and atorvastatin 20 mg daily. Over the past 12 months, his ALT has ranged between 65 and 82 U/L and AST between 48 and 62 U/L. Viral hepatitis serologies (HAV, HBV, HCV), iron studies, ceruloplasmin, and autoimmune markers (ANA, ASMA, anti-LKM1) are negative. Liver ultrasound shows diffuse hepatic steatosis. A non-targeted percutaneous liver biopsy confirms metabolic dysfunction-associated steatohepatitis (MASH / NASH) with moderate lobular inflammation, hepatocellular ballooning, and stage F2 (perisinusoidal and periportal) fibrosis without cirrhosis. In addition to recommending structured lifestyle intervention aimed at achieving >= 7-10% total body weight loss, which of the following is the most appropriate next step in medical therapy according to recent AASLD guidance and clinical trial evidence?",
    "choices": [
      [
        "Initiate resmetirom 80 mg once daily orally (or consider a GLP-1 receptor agonist if diabetic management requires intensification)",
        "This patient has biopsy-proven METABOLIC DYSFUNCTION-ASSOCIATED STEATOHEPATITIS (MASH, formerly NASH) with moderate STAGE F2 FIBROSIS. The primary therapeutic goal in non-cirrhotic MASH with significant fibrosis (stages F2-F3) is to resolve steatohepatitis and reverse or halt fibrosis progression. Foundational therapy is structured lifestyle modification: achieving >= 7% to 10% total body weight loss leads to histological resolution of steatohepatitis and fibrosis regression in > 80% of patients. In 2024, the FDA approved RESMETIROM\u2014a liver-directed, selective THYROID HORMONE RECEPTOR-BETA (THR-beta) AGONIST\u2014specifically for non-cirrhotic MASH with moderate-to-advanced fibrosis (stages F2-F3). In the pivotal MAESTRO-NASH trial, resmetirom achieved both MASH resolution and >= 1 stage improvement in liver fibrosis without worsening of fibrosis compared to placebo. Concurrently, GLP-1 RECEPTOR AGONISTS (e.g., semaglutide) and dual GIP/GLP-1 agonists (tirzepatide) provide substantial weight loss, glycemic control, and resolution of steatohepatitis, making them highly effective guideline-supported options in patients with comorbid type 2 diabetes."
      ],
      [
        "Initiate ursodeoxycholic acid 15 mg/kg daily as the primary hepatoprotective agent",
        "Ursodeoxycholic acid has been thoroughly evaluated in multiple randomized controlled trials and failed to improve hepatic histology, ballooning, or fibrosis in MASH; it is not recommended."
      ],
      [
        "Initiate long-term high-dose oral prednisone 40 mg daily to suppress lobular inflammation",
        "Corticosteroids have no efficacy in MASH, accelerate glycemic decompensation, cause severe weight gain, and worsen insulin resistance and metabolic dysfunction."
      ],
      [
        "Discontinue atorvastatin immediately to avoid worsening hepatotoxicity in steatohepatitis",
        "Statins are safe and indicated in patients with MASH to reduce their primary cause of mortality (atherosclerotic cardiovascular disease); discontinuing statins is unnecessary and harmful."
      ],
      [
        "Initiate daily therapeutic phlebotomy to achieve a target serum ferritin below 20 ng/mL",
        "Phlebotomy is indicated for hereditary hemochromatosis with iron overload; it provides no therapeutic benefit in metabolic steatohepatitis with normal iron stores."
      ]
    ],
    "shortestValidSolution": "Biopsy-proven MASH with F2 fibrosis = Lifestyle (>=7-10% weight loss) + resmetirom (THR-beta agonist) or GLP-1 RA.",
    "necessaryInference": "Identify guideline-approved medical therapy for MASH with F2-F3 fibrosis: resmetirom (MAESTRO-NASH) and GLP-1 agonists.",
    "strongestDistractor": "Initiate ursodeoxycholic acid 15 mg/kg daily as the primary hepatoprotective agent",
    "distractorExclusion": "Ursodeoxycholic acid failed in clinical trials to improve histology or fibrosis in MASH and is not guideline-supported.",
    "citation": "Harrison SA, Bedossa P, Guy CD, et al. A randomized, controlled trial of the thyroid hormone receptor-beta agonist resmetirom in NASH with fibrosis. N Engl J Med. 2024;390(6):497-509. PMID: 38324483.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hepatology/endocrinology cutting-edge chronic disease item evaluating modern management of MASH with F2 fibrosis, including lifestyle weight thresholds and resmetirom.",
      "distractorExclusionNotes": "Ursodeoxycholic acid is ineffective; corticosteroids worsen metabolic syndrome; stopping statins increases cardiovascular mortality; phlebotomy has no role without hemochromatosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0666",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Adult ADHD Pharmacotherapy Selection in Pre-Existing Cardiovascular Risk",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man presents with chronic inattention, disorganization, missed work deadlines, and impulsivity that have persisted since childhood and severely impaired his occupational functioning. Standardized adult ADHD rating scales confirm attention-deficit/hyperactivity disorder (ADHD), combined presentation. His medical history is significant for stage 2 hypertension, paroxysmal supraventricular tachycardia status post adenosine cardioversion 2 years ago, and coronary artery disease with a 50% non-flow-limiting stenosis of the right coronary artery. His current medications are metoprolol tartrate 50 mg twice daily and rosuvastatin 10 mg daily. Physical examination reveals a blood pressure of 142/90 mm Hg and a resting heart rate of 82/min. Baseline ECG demonstrates normal sinus rhythm with occasional premature atrial complexes and normal PR, QRS, and QTc intervals. Given his significant underlying cardiovascular risk and history of cardiac arrhythmia, which of the following is the most appropriate initial pharmacological choice for his ADHD?",
    "choices": [
      [
        "Initiate oral atomoxetine 40 mg daily, titrating to 80 mg daily as tolerated",
        "While psychostimulants (methylphenidate and amphetamine derivatives) are the most effective first-line agents for adult ADHD in healthy populations, they are sympathomimetic agents that increase central and peripheral norepinephrine and dopamine release. Stimulants produce dose-dependent increases in heart rate and systolic/diastolic blood pressure, and carry FDA warnings regarding sudden cardiac death, myocardial infarction, and stroke in patients with pre-existing structural cardiac disease, serious arrhythmias, or coronary artery disease. In adults with SIGNIFICANT UNDERLYING CARDIOVASCULAR DISEASE (uncontrolled hypertension, history of supraventricular tachycardia, CAD), NON-STIMULANT MEDICATIONS are preferred initial agents. ATOMOXETINE is a selective norepinephrine reuptake inhibitor (SNRI) with proven efficacy in adult ADHD that has NO ABUSE POTENTIAL and a significantly lower risk of precipitating acute tachyarrhythmias or hypertensive crisis compared to psychostimulants. (Viloxazine and alpha-2 agonists like clonidine or guanfacine extended-release are alternative non-stimulant choices)."
      ],
      [
        "Initiate dextroamphetamine/amphetamine mixed salts extended-release 20 mg once daily",
        "Mixed amphetamine salts have potent peripheral sympathomimetic effects that increase myocardial oxygen demand, elevate blood pressure, and can trigger recurrent supraventricular tachycardia in susceptible patients with CAD."
      ],
      [
        "Initiate immediate-release methylphenidate 20 mg three times daily with meals",
        "Immediate-release stimulants cause sharp plasma peak spikes that provoke acute hemodynamic swings, tachycardia, and palpitations, making them inappropriate in cardiac disease."
      ],
      [
        "Initiate oral modafinil 200 mg daily as a preferred non-cardiotoxic ADHD therapy",
        "Modafinil is FDA-approved for narcolepsy, obstructive sleep apnea, and shift work disorder; it is not approved for ADHD, has inconsistent evidence in adults, and also possesses sympathomimetic activity."
      ],
      [
        "Initiate haloperidol 1 mg twice daily to control impulsivity and motor restlessness",
        "Typical antipsychotics have no therapeutic benefit for core ADHD cognitive/inattentive symptoms, carry severe extrapyramidal and tardive dyskinesia risks, and cause QTc prolongation."
      ]
    ],
    "shortestValidSolution": "Adult ADHD with CAD and paroxysmal SVT = Prefer non-stimulant atomoxetine over sympathomimetic stimulants.",
    "necessaryInference": "Select non-stimulant atomoxetine over central nervous system stimulants when serious underlying arrhythmia and CAD are present.",
    "strongestDistractor": "Initiate dextroamphetamine/amphetamine mixed salts extended-release 20 mg once daily",
    "distractorExclusion": "Amphetamines have marked sympathomimetic hemodynamic effects that exacerbate CAD ischemia and trigger supraventricular arrhythmias.",
    "citation": "Cortese S, Adamo N, Del Giovane C, et al. Comparative efficacy and tolerability of medications for attention-deficit hyperactivity disorder in children, adolescents, and adults: a systematic review and network meta-analysis. Lancet Psychiatry. 2018;5(9):727-738. PMID: 30097390.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 psychiatry/cardiology ambulatory item evaluating non-stimulant pharmacotherapy selection for adult ADHD in the presence of serious cardiovascular comorbidity.",
      "distractorExclusionNotes": "Amphetamines and methylphenidate provoke tachyarrhythmias and myocardial ischemia; modafinil is off-label and sympathomimetic; haloperidol is inappropriate and dyskinetic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0667",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Smoking Cessation in Psychiatric Co-Morbidity and EAGLES Trial",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old woman presents to the clinic expressing a strong desire to quit smoking cigarettes. She has smoked 1 pack per day for 25 years (25 pack-years) and has made four prior unsuccessful quit attempts using nicotine patches and nicotine gum, relapsing each time within 2 weeks due to intense cravings. Her medical history is significant for major depressive disorder that has been in full clinical remission for the past 2 years on maintenance sertraline 100 mg daily. She expresses concern that smoking cessation aids might destabilize her psychiatric condition or cause severe depression. Physical examination is normal. Vital signs are: blood pressure 124/76 mm Hg, heart rate 72/min, and BMI 26 kg/m2. According to clinical practice guidelines for smoking cessation in patients with stable psychiatric co-morbidity, which of the following is the most appropriate first-line pharmacological recommendation for this patient?",
    "choices": [
      [
        "Initiate oral varenicline (0.5 mg daily for 3 days, then 0.5 mg twice daily for 4 days, then 1 mg twice daily) starting 1 to 2 weeks before her target quit date, continuing for a 12-week course",
        "VARENICLINE is a PARTIAL AGONIST AT THE ALPHA-4-BETA-2 NEURONAL NICOTINIC ACETYLCHOLINE RECEPTOR. By partially stimulating the receptor, it provides low-level dopamine release to alleviate withdrawal symptoms and cravings, while competitively blocking nicotine from binding, preventing the rewarding dopamine spike if a cigarette is smoked. Head-to-head clinical trials demonstrate that VARENICLINE HAS THE HIGHEST MONOTHERAPY EFFICACY for smoking cessation, significantly outperforming bupropion, single-agent nicotine replacement therapy (NRT), and placebo. Crucially, the landmark EAGLES trial (Evaluating Adverse Events in a Global Smoking Cessation Study; > 8,000 patients including > 4,000 with stable psychiatric disorders) demonstrated that VARENICLINE DOES NOT SIGNIFICANTLY INCREASE NEUROPSYCHIATRIC ADVERSE EVENTS (suicidality, depression, psychosis, aggression) compared to bupropion, nicotine patch, or placebo. This evidence prompted the FDA to remove the historical Black Box Warning from varenicline. Varenicline is recommended first-line for patients with stable psychiatric conditions seeking to quit."
      ],
      [
        "Prescribe oral bupropion sustained-release 150 mg daily, as varenicline remains contraindicated in patients with any history of major depressive disorder",
        "Varenicline is not contraindicated in patients with a history of depression; the EAGLES trial established that varenicline is safe in stable psychiatric disease and provides superior cessation rates compared to bupropion."
      ],
      [
        "Recommend switching exclusively to electronic nicotine delivery systems (e-cigarettes) as the safest long-term alternative",
        "E-cigarettes are not FDA-approved smoking cessation medications, maintain systemic nicotine addiction, and carry risks of long-term pulmonary and cardiovascular toxicities."
      ],
      [
        "Instruct her to avoid all pharmacotherapies and rely solely on willpower ('cold turkey'), given her depression history",
        "Unassisted cessation ('cold turkey') has a 1-year success rate of less than 3-5%; withholding evidence-based pharmacotherapy is ineffective and inappropriate."
      ],
      [
        "Prescribe oral clonidine 0.1 mg twice daily as the preferred first-line psychiatric smoking cessation agent",
        "Clonidine is a second- or third-line off-label option with substantial adverse effects (sedation, hypotension, dry mouth) and markedly inferior efficacy compared to varenicline or combination NRT."
      ]
    ],
    "shortestValidSolution": "Smoker wanting to quit, past failed NRT, stable depression history = Varenicline (highest efficacy, proven psychiatric safety in EAGLES).",
    "necessaryInference": "Apply EAGLES trial findings: varenicline is the most effective smoking cessation monotherapy and is safe in stable psychiatric disorders without increased neuropsychiatric risk.",
    "strongestDistractor": "Prescribe oral bupropion sustained-release 150 mg daily, as varenicline remains contraindicated in patients with any history of major depressive disorder",
    "distractorExclusion": "The historical FDA black box warning on varenicline was removed based on EAGLES; varenicline is more effective than bupropion and safe in stable depression.",
    "citation": "Anthenelli RM, Benowitz NL, West R, et al. Neuropsychiatric safety and efficacy of varenicline, bupropion, and nicotine patch in smokers with and without psychiatric disorders (EAGLES): a double-blind, randomised, placebo-controlled clinical trial. Lancet. 2016;387(10037):2507-2520. PMID: 27116918.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 preventive/psychiatry ambulatory item testing first-line smoking cessation pharmacotherapy and debunking outdated contraindications based on the EAGLES trial.",
      "distractorExclusionNotes": "Bupropion is inferior to varenicline and varenicline is not contraindicated; e-cigarettes are unapproved; cold turkey has 3% success; clonidine is poorly tolerated.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0668",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Obesity Pharmacotherapy Indications, Efficacy, and Contraindications",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old woman presents to the preventive medicine clinic seeking assistance with weight loss. Over the past 5 years, despite multiple structured commercial diets and daily 45-minute walking regimens supervised by a registered dietitian, her weight has steadily increased. She reports chronic bilateral knee pain attributable to osteoarthritis. Her current medications are lisinopril 10 mg daily for hypertension and acetaminophen 1,000 mg as needed for knee pain. Physical examination shows a height of 165 cm (5 ft 5 in) and weight of 101 kg (222 lb), yielding a body mass index (BMI) of 37.1 kg/m2. Her blood pressure is 132/80 mm Hg, heart rate is 76/min, and cardiopulmonary exam is normal. Laboratory evaluation reveals fasting plasma glucose 112 mg/dL, HbA1c 5.9% (prediabetes), normal thyroid-stimulating hormone, normal serum creatinine, and normal liver enzymes. In reviewing her family history, her mother had osteoporosis and her father had primary open-angle glaucoma; she denies any family history of thyroid carcinoma or endocrine tumors. According to current clinical practice guidelines for the comprehensive medical management of obesity, which of the following is the most appropriate next step in pharmacological management?",
    "choices": [
      [
        "Initiate subcutaneous semaglutide 0.24 mg once weekly, systematically escalating every 4 weeks to a target maintenance dose of 2.4 mg weekly",
        "PHARMACOTHERAPY FOR OBESITY is indicated as an adjunct to lifestyle modification for adults with: (1) BMI >= 30 kg/m2; or (2) BMI >= 27 kg/m2 in the presence of at least one weight-related comorbidity (e.g., hypertension, dyslipidemia, prediabetes, osteoarthritis, obstructive sleep apnea). This patient has Class II obesity (BMI 37.1 kg/m2), prediabetes, hypertension, and degenerative joint disease. SEMAGLUTIDE 2.4 MG SUBCUTANEOUSLY ONCE WEEKLY is a GLP-1 receptor agonist FDA-approved for chronic weight management. In the landmark STEP-1 clinical trial, semaglutide 2.4 mg produced an average weight loss of approximately 15% of total body weight at 68 weeks, significantly exceeding lifestyle modification alone and earlier obesity medications. Furthermore, the SELECT trial demonstrated that semaglutide 2.4 mg reduces major adverse cardiovascular events (cardiovascular death, non-fatal MI, stroke) by 20% in overweight/obese patients with established cardiovascular disease. GLP-1 receptor agonists are CONTRAINDICATED in patients with a personal or family history of MEDULLARY THYROID CARCINOMA (MTC) or MULTIPLE ENDOCRINE NEOPLASIA TYPE 2 (MEN 2), and in those with prior pancreatitis, neither of which is present in this patient."
      ],
      [
        "Initiate oral orlistat 120 mg three times daily with meals",
        "Orlistat (an intestinal lipase inhibitor) produces modest weight loss (~5%), but causes high rates of troublesome gastrointestinal side effects (steatorrhea, oily spotting, fecal urgency) and requires fat-soluble vitamin repletion, resulting in very high long-term discontinuation rates."
      ],
      [
        "Prescribe phentermine 37.5 mg orally daily as long-term indefinite monotherapy",
        "Phentermine is an amphetamine-related sympathomimetic amine approved only for short-term use (up to 12 weeks); it carries risks of tolerance, insomnia, tachycardia, and blood pressure elevation, and is not guideline-recommended for indefinite monotherapy."
      ],
      [
        "Withhold pharmacotherapy and refer for immediate laparoscopic Roux-en-Y gastric bypass",
        "While bariatric surgery is an option for BMI >= 35 with comorbidities, highly effective medical therapy (semaglutide, tirzepatide) should be discussed and offered, allowing the patient to trial modern incretin pharmacotherapy prior to invasive surgery."
      ],
      [
        "Initiate oral levothyroxine 50 mcg daily to accelerate resting basal metabolic rate",
        "Administering exogenous thyroid hormone to euthyroid patients to induce weight loss is dangerous, causing iatrogenic thyrotoxicosis, tachyarrhythmias, osteoporosis, and muscle wasting."
      ]
    ],
    "shortestValidSolution": "BMI 37.1, prediabetes, hypertension, no MTC/MEN2 history = Initiate semaglutide 2.4 mg weekly (STEP/SELECT trials).",
    "necessaryInference": "Apply modern obesity guidelines: GLP-1 agonist semaglutide 2.4 mg weekly provides ~15% weight loss, reverses prediabetes, and has proven CV benefit.",
    "strongestDistractor": "Initiate oral orlistat 120 mg three times daily with meals",
    "distractorExclusion": "Orlistat produces modest weight loss (~5%) with severe GI intolerance; semaglutide produces triple the weight loss (~15%) and superior metabolic improvements.",
    "citation": "Wilding JPH, Batterham RL, Calanna S, et al. Once-weekly semaglutide in adults with overweight or obesity. N Engl J Med. 2021;384(11):989-1002. PMID: 33567185.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/preventive medicine item evaluating indications, dosing escalation, efficacy benchmarks, and safety screening for GLP-1 receptor agonist obesity therapy.",
      "distractorExclusionNotes": "Orlistat has poor efficacy and intolerable GI side effects; phentermine monotherapy is short-term only; levothyroxine in euthyroid patients causes thyrotoxicosis; surgery is not mandatory upfront.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0669",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "CDC Guidelines for Compassionate and Safe Chronic Opioid Tapering",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents to establish primary care. For the past 6 years, he has taken oral oxycodone controlled-release 40 mg twice daily and oral oxycodone immediate-release 10 mg three times daily as needed for chronic axial low back pain following a lumbar laminectomy. Calculating his daily baseline, he consumes an average of 110 Morphine Milligram Equivalents (MME) per day. Over the past 2 years, his functional status has declined; he spends most of the day recumbent, cannot perform household chores, and reports that his pain score remains an 8 out of 10 despite medication. Review of the state prescription drug monitoring program (PDMP) shows consistent fills from a single deceased provider without concurrent benzodiazepines. Urine drug screening is positive for oxycodone and negative for illicit substances. Physical examination reveals normal lower extremity motor strength and reflexes with diffuse non-dermatomal tenderness. Vital signs are normal. The patient is anxious that his medications will be abruptly stopped. In accordance with the updated 2022 CDC Clinical Practice Guideline for Prescribing Opioids for Pain, which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Collaborate with the patient on a individualized, gradual outpatient opioid taper (reducing the total daily dose by approximately 5% to 10% per month) while optimizing multimodal non-opioid pharmacotherapy and physical therapy",
        "The updated 2022 CDC Clinical Practice Guideline explicitly warns that ABRUPT OPIOID CESSATION OR RAPID TAPERING CAN CAUSE SEVERE HARM, including acute withdrawal crisis, uncontrolled rebound pain, psychological distress, illicit substance substitution, and suicidal ideation/death. Clinicians should NOT abruptly discontinue or rapidly taper opioids in patients receiving chronic high-dose therapy (> 50-90 MME/day). Instead, when opioid risks exceed benefits (declining function, persistent severe pain despite high doses, opioid-induced hyperalgesia), the guideline recommends an INDIVIDUALIZED, PATIENT-CENTERED, SLOW TAPER. For patients on long-term opioids (> 1 year), tapering schedules reducing the total daily dose by NO MORE THAN 10% PER MONTH (or even 5% per month) are better tolerated and allow neuroadaptation. Tapers should be integrated with MULTIMODAL NON-OPIOID ANALGESIA (NSAIDs, SNRIs, gabapentinoids, topical therapies), cognitive behavioral therapy, and active physical therapy. Naloxone should be co-prescribed."
      ],
      [
        "Abruptly discontinue all oxycodone prescriptions today and provide a 7-day prescription for oral clonidine to manage withdrawal",
        "Abrupt opioid discontinuation causes intolerable physiologic withdrawal, severe pain exacerbation, psychiatric crisis, and significantly elevated risks of illicit fentanyl overdose and suicide."
      ],
      [
        "Implement a rapid inpatient detox protocol tapering his opioid dose to zero over 5 to 7 days",
        "Ultra-rapid or 1-week detox protocols have a near-100% relapse rate for chronic non-cancer pain, strip tolerance, and dramatically spike overdose mortality if the patient relapses."
      ],
      [
        "Increase his oxycodone controlled-release to 60 mg twice daily to overcome opioid tolerance and achieve analgesia",
        "Dose escalation above 90-100 MME/day increases overdose mortality without improving long-term chronic pain or physical functioning, and exacerbates opioid-induced hyperalgesia."
      ],
      [
        "Immediately transition the patient to long-acting transdermal fentanyl 50 mcg/hr patch",
        "Fentanyl patches carry high pharmacokinetic variability and erratic absorption, increasing respiratory depression risks, and do not address the clinical goal of tapering high-risk therapy."
      ]
    ],
    "shortestValidSolution": "Chronic high-dose opioid (>90 MME) with poor function = Slow, compassionate individualized taper (5-10% per month) + multimodal non-opioid therapy.",
    "necessaryInference": "Apply 2022 CDC Opioid Guidelines: avoid rapid/abrupt deprescribing; use slow, gradual tapers (<=10%/month) to avoid withdrawal and overdose crisis.",
    "strongestDistractor": "Abruptly discontinue all oxycodone prescriptions today and provide a 7-day prescription for oral clonidine to manage withdrawal",
    "distractorExclusion": "Abrupt deprescribing is dangerous and explicitly condemned by the CDC due to high risks of suicide, illicit drug transition, and severe withdrawal.",
    "citation": "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. CDC Clinical Practice Guideline for Prescribing Opioids for Pain - United States, 2022. MMWR Recomm Rep. 2022;71(3):1-95. PMID: 36327391.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 ambulatory pain management/medical ethics item assessing modern CDC guidelines on avoiding abrupt opioid cessation and conducting safe, gradual tapering.",
      "distractorExclusionNotes": "Abrupt cessation or 1-week detox triggers withdrawal crisis and overdose death; dose escalation above 100 MME worsens hyperalgesia; fentanyl patch adds overdose risk.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0670",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Fibromyalgia Multimodal Management and Pharmacotherapy",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old woman presents to the clinic with widespread body pain and profound fatigue that has persisted for 18 months. She describes a deep, aching muscular pain affecting her neck, upper back, lower back, bilateral hips, and shoulders. She awakens feeling unrefreshed despite sleeping 8 to 9 hours nightly, and experiences difficulty concentrating at work ('fibro fog'). She has tried over-the-counter naproxen, ibuprofen, and acetaminophen without any pain relief. Physical examination reveals tenderness to digital palpation over multiple muscle groups and tendon insertions across all four body quadrants, without joint swelling, synovial thickening, erythema, or muscle weakness. Neurological examination is normal. Laboratory investigations reveal: complete blood count, erythrocyte sedimentation rate (ESR), C-reactive protein (CRP), thyroid-stimulating hormone (TSH), creatine kinase (CK), and 25-hydroxyvitamin D are all within normal limits. Antinuclear antibody (ANA) and rheumatoid factor (RF) are negative. Which of the following represents the most effective evidence-based management strategy for this patient?",
    "choices": [
      [
        "Initiation of a structured low-impact aerobic exercise program (e.g., walking, aquatic therapy) combined with an FDA-approved central neuromodulator such as duloxetine, milnacipran, or pregabalin",
        "This patient meets American College of Rheumatology (ACR) criteria for FIBROMYALGIA, characterized by generalized chronic widespread musculoskeletal pain (>= 3 months across >= 4 body regions), unrefreshing sleep, cognitive dysfunction, fatigue, and normal inflammatory/serologic markers (ESR, CRP, ANA). Fibromyalgia is a CENTRALIZED PAIN SENSITIVITY SYNDROME (nociplastic pain) driven by augmented central pain amplification and deficient descending inhibitory pain modulation. Management is MULTIMODAL, combining NON-PHARMACOLOGICAL and PHARMACOLOGICAL interventions. The SINGLE MOST EFFECTIVE NON-PHARMACOLOGICAL THERAPY IS REGULAR, GRADUATED LOW-IMPACT AEROBIC EXERCISE (walking, water aerobics, cycling), which improves pain, sleep quality, and physical function. Pharmacotherapy targets central pain pathways: FDA-approved medications include SEROTONIN-NOREPINEPHRINE REUPTAKE INHIBITORS (SNRIs: DULOXETINE and MILNACIPRAN, which augment descending inhibitory noradrenergic pathways) and ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (PREGABALIN, which decreases excitatory glutamate and substance P release). Tricyclic antidepressants (amitriptyline) are also effective off-label. OPIOIDS AND NSAIDS ARE INEFFECTIVE AND STRONGLY DISCOURAGED."
      ],
      [
        "Prescription for oral tramadol 50 mg three times daily as needed for pain",
        "Opioids have no proven efficacy in fibromyalgia, impair endogenous descending pain inhibitory mechanisms, promote opioid-induced hyperalgesia, and risk dependence."
      ],
      [
        "Escalation of NSAID therapy to celecoxib 200 mg twice daily",
        "Fibromyalgia is a non-inflammatory central sensitization pain disorder; peripheral NSAIDs (including COX-2 inhibitors) do not penetrate central sensitization mechanisms and cause gastrointestinal and renal toxicity without efficacy."
      ],
      [
        "Prescription for strict bed rest and avoidance of physical exertion to allow muscle recovery",
        "Inactivity and prolonged rest worsen central sensitization, lead to severe deconditioning, and significantly amplify pain and stiffness in fibromyalgia."
      ],
      [
        "Initiation of oral prednisone 20 mg daily with a 4-week taper",
        "Systemic corticosteroids have zero efficacy in fibromyalgia because there is no underlying systemic inflammatory or autoimmune pathology; steroid exposure causes harmful metabolic and bone loss."
      ]
    ],
    "shortestValidSolution": "Fibromyalgia (chronic widespread pain, fatigue, normal labs) = Low-impact aerobic exercise + duloxetine/pregabalin; avoid opioids and NSAIDs.",
    "necessaryInference": "Diagnose fibromyalgia (nociplastic pain) and select guideline-directed treatment (aerobic exercise + SNRI/pregabalin) while actively avoiding opioids and steroids.",
    "strongestDistractor": "Prescription for oral tramadol 50 mg three times daily as needed for pain",
    "distractorExclusion": "Opioids fail to treat central pain amplification, trigger hyperalgesia and addiction, and are discouraged by ACR and EULAR guidelines.",
    "citation": "Macfarlane GJ, Kronisch C, Dean LE, et al. EULAR revised recommendations for the management of fibromyalgia. Ann Rheum Dis. 2017;76(2):318-328. PMID: 27377812.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology/ambulatory internal medicine item testing evidence-based multimodal management of fibromyalgia, contrasting central neuromodulators with ineffective opioids/NSAIDs.",
      "distractorExclusionNotes": "Opioids cause hyperalgesia; NSAIDs are ineffective in non-inflammatory centralized pain; rest worsens deconditioning; systemic steroids have no role.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0671",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Venous Insufficiency and Compression Safety Screening",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents with chronic heaviness, dull aching, and progressive swelling in both lower extremities that worsens toward the end of the day and improves when he elevates his legs in bed. His past medical history includes type 2 diabetes mellitus, hypertension, and a 40 pack-year smoking history. On physical examination, body mass index is 31 kg/m2. Examination of both lower legs reveals prominent varicose veins, 2+ pitting pretibial edema extending to the mid-calf, and brownish-bronze skin hyperpigmentation (hemosiderin deposition) around the medial malleoli with subcutaneous induration (lipodermatosclerosis). There are no active skin ulcers. Popliteal and dorsalis pedis pulses are diminished. Prior to prescribing graduated knee-high compression stockings (20-30 mm Hg), which of the following diagnostic evaluations is mandatory to perform?",
    "choices": [
      [
        "Measurement of the resting ankle-brachial index (ABI) to rule out severe concurrent peripheral artery disease",
        "This patient exhibits advanced CHRONIC VENOUS INSUFFICIENCY (CVI; CEAP Clinical Class C4a/C4b), characterized by varicose veins, dependent pitting edema, venous stasis dermatitis with hemosiderin tattooing, and lipodermatosclerosis. GRADUATED COMPRESSION THERAPY (20 to 30 mm Hg or 30 to 40 mm Hg at the ankle) is the cornerstone of conservative CVI management; it reduces venous hypertension, enhances calf muscle pump function, diminishes edema, and prevents ulceration. However, before applying external sustained compression stockings, CLINICIANS MUST OBJECTIVELY EXCLUDE SIGNIFICANT PERIPHERAL ARTERY DISEASE (PAD) BY MEASURING THE ANKLE-BRACHIAL INDEX (ABI). Applying high compression stockings to an extremity with severe arterial insufficiency (ABI < 0.5 to 0.6) compromises microvascular arterial perfusion, precipitating ischemic necrosis, gangrene, and limb loss. An ABI > 0.8 is generally required for full-strength compression stockings (30-40 mm Hg); modified lower-strength compression (20-30 mm Hg) can be cautiously applied if the ABI is between 0.6 and 0.8 under close monitoring, but compression is STRICTLY CONTRAINDICATED IF ABI IS < 0.5-0.6."
      ],
      [
        "Serum quantitative D-dimer assay to rule out acute deep venous thrombosis",
        "D-dimer has high sensitivity but poor specificity and is elevated in older age, diabetes, and inflammation; bilateral chronic swelling for months does not warrant routine D-dimer testing."
      ],
      [
        "Biopsy of the hyperpigmented medial malleolar skin to exclude malignant melanoma",
        "Hemosiderin hyperpigmentation is a classic, benign hallmark of erythrocyte extravasation in chronic venous hypertension; invasive skin biopsy is unnecessary and risks creating a non-healing venous ulcer."
      ],
      [
        "Empiric 14-day course of oral cephalexin for bilateral lower extremity cellulitis",
        "Venous stasis dermatitis is frequently misdiagnosed as bilateral cellulitis ('pseudocellulitis'); bilateral erythema with stasis changes without fever or leukocytosis is inflammatory, not bacterial, and antibiotics are inappropriate."
      ],
      [
        "Immediate surgical ligation and stripping of the bilateral greater saphenous veins",
        "Conservative therapy with compression stockings, leg elevation, and exercise must be trialed for at least 3 months prior to considering endovascular thermal ablation or surgical stripping."
      ]
    ],
    "shortestValidSolution": "Chronic venous insufficiency needing compression stockings = Measure ABI first to rule out severe PAD (compression contraindicated if ABI < 0.6).",
    "necessaryInference": "Recognize the critical clinical safety requirement: check resting ABI before prescribing compression stockings to prevent ischemic limb necrosis.",
    "strongestDistractor": "Empiric 14-day course of oral cephalexin for bilateral lower extremity cellulitis",
    "distractorExclusion": "Bilateral stasis dermatitis is non-infectious; misdiagnosing pseudocellulitis as cellulitis is a common error leading to unnecessary antibiotics.",
    "citation": "O'Donnell TF Jr, Passman MA, Marston WA, et al. Management of venous leg ulcers: clinical practice guidelines of the Society for Vascular Surgery and the American Venous Forum. J Vasc Surg. 2014;60(2 Suppl):3S-59S. PMID: 24974070.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 vascular/ambulatory medicine item evaluating chronic venous insufficiency management and the mandatory prerequisite of ABI testing before compression therapy.",
      "distractorExclusionNotes": "Prescribing compression without ABI risks gangrene in smokers/diabetics; pseudocellulitis does not require antibiotics; biopsy causes chronic ulcers; surgery is premature.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0672",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Restless Legs Syndrome Ferritin Repletion and Alpha-2-Delta Ligands",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old woman presents with sleep disturbance that has worsened over the past 5 months. She reports an irresistible urge to move her legs in the evening and when lying down to sleep. She describes an uncomfortable 'creepy-crawly, deep aching' sensation in both calves that is temporarily relieved by getting out of bed, pacing, or stretching, but returns immediately once she lies down. Her symptoms make it impossible to fall asleep until 3:00 AM, leading to daytime somnolence and impaired work productivity. She denies numbness, weakness, or joint pain. Her past medical history is notable for menorrhagia. She takes no medications. Physical and neurological examinations are entirely normal. Laboratory evaluation demonstrates: hemoglobin 11.8 g/dL, mean corpuscular volume (MCV) 82 fL, serum iron 42 mcg/dL, total iron-binding capacity (TIBC) 410 mcg/dL, serum ferritin 28 ng/mL, and serum creatinine 0.8 mg/dL. Based on updated American Academy of Sleep Medicine (AASM) and International Restless Legs Syndrome Study Group (IRLSSG) guidelines, which of the following is the most appropriate initial management approach?",
    "choices": [
      [
        "Oral iron supplementation (ferrous sulfate with vitamin C) to achieve a target serum ferritin > 75 ng/mL, along with initiating an alpha-2-delta calcium channel ligand (gabapentin enacarbil or pregabalin)",
        "This patient meets the clinical diagnostic criteria for RESTLESS LEGS SYNDROME (RLS, Willis-Ekbom disease): (1) An urge to move the legs, usually accompanied by uncomfortable sensations; (2) Symptoms begin or worsen during periods of rest or inactivity; (3) Symptoms are partially or totally relieved by movement (walking, stretching); and (4) Symptoms occur exclusively or are worse in the evening or night. Central nervous system iron deficiency in the substantia nigra impairs dopaminergic neurotransmission, playing a pivotal role in RLS pathophysiology. Guidelines mandate checking SERUM FERRITIN in all RLS patients: IRON SUPPLEMENTATION IS INDICATED IF SERUM FERRITIN IS <= 75 NG/ML (or transferrin saturation < 20%), even in the absence of systemic anemia. Target ferritin is > 75 to 100 ng/mL. Furthermore, while dopamine agonists (pramipexole, ropinirole) were historically first-line, updated AASM guidelines now designate ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (GABAPENTIN ENACARBIL, PREGABALIN, GABAPENTIN) as PREFERRED FIRST-LINE MEDICAL THERAPY. Dopamine agonists carry a high risk of AUGMENTATION (a paradoxical iatrogenic worsening of RLS with earlier daytime symptom onset, spread to upper limbs, and increased intensity), which occurs in up to 50-70% of patients over 5 to 10 years."
      ],
      [
        "Initiate oral pramipexole 0.125 mg taken 2 hours before bedtime as the primary first-line monotherapy without iron supplementation",
        "Starting dopamine agonists as first-line monotherapy without repleting iron (ferritin 28 ng/mL) is outdated and carries a high risk of drug-induced augmentation, worsening the disease long-term."
      ],
      [
        "Initiate oral zolpidem 10 mg at bedtime to treat insomnia",
        "Sedative-hypnotics like zolpidem treat secondary insomnia but do not address the sensory-motor urges or neurochemical pathophysiology of restless legs syndrome."
      ],
      [
        "Prescribe oral carbidopa/levodopa 25/100 mg nightly as needed for leg discomfort",
        "Levodopa has an extremely high rate of severe rapid augmentation (up to 70% within 1 year); it is not recommended for daily chronic RLS management."
      ],
      [
        "Advise the patient to avoid all exercise and restrict fluid intake after 6:00 PM",
        "Moderate daytime physical exercise is beneficial for RLS; avoiding exercise worsens motor restlessness and sleep quality."
      ]
    ],
    "shortestValidSolution": "RLS with ferritin 28 ng/mL = Oral iron to target ferritin > 75 ng/mL + alpha-2-delta ligand (gabapentin/pregabalin) to avoid augmentation.",
    "necessaryInference": "Apply updated RLS guidelines: replete iron when ferritin < 75 ng/mL; prefer alpha-2-delta ligands over dopamine agonists to avoid augmentation.",
    "strongestDistractor": "Initiate oral pramipexole 0.125 mg taken 2 hours before bedtime as the primary first-line monotherapy without iron supplementation",
    "distractorExclusion": "Dopamine agonists have been demoted due to high rates of severe augmentation; omitting iron repletion when ferritin is 28 ng/mL neglects the underlying cause.",
    "citation": "Silber MH, Buchfuhrer MJ, Earley CJ, et al. The management of restless legs syndrome: an updated algorithm. Mayo Clin Proc. 2021;96(7):1921-1937. PMID: 34218868.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 sleep medicine/neurology item testing modern RLS guidelines regarding ferritin threshold (<75 ng/mL) for iron repletion and the paradigm shift from dopamine agonists to alpha-2-delta ligands.",
      "distractorExclusionNotes": "Pramipexole causes severe augmentation; zolpidem fails to treat sensory urges; levodopa causes rapid augmentation; avoiding exercise is counterproductive.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0673",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Aldosteronism Diagnostic Confirmation and Subtype Differentiation",
    "provisionalDifficulty": 5,
    "stem": "A 43-year-old man presents with persistent hypertension. He takes amlodipine 10 mg daily and hydralazine 50 mg three times daily. His blood pressure is 158/98 mm Hg. Laboratory evaluation shows serum potassium 3.1 mEq/L, serum sodium 143 mEq/L, and serum creatinine 0.9 mg/dL. He was transitioned off potassium-wasting diuretics and beta-blockers, and hypokalemia was fully repleted. A morning screening test reveals: plasma aldosterone concentration (PAC) 32 ng/dL (normal 3-16 ng/dL) and plasma renin activity (PRA) 0.4 ng/mL/h, yielding an aldosterone-to-renin ratio (ARR) of 80 (positive cutoff > 20-30). Confirmatory high-sodium oral salt-loading testing demonstrates a 24-hour urine aldosterone excretion of 24 mcg/24h (normal < 12 mcg/24h), confirming autonomous primary aldosteronism. High-resolution thin-section computed tomography (CT) of the adrenal glands demonstrates a well-circumscribed 1.3-cm hypoattenuating nodule in the left adrenal gland and a normal right adrenal gland. The patient expresses a strong desire for curative surgical management. Which of the following is the most appropriate next step prior to proceeding with unilateral laparoscopic adrenalectomy?",
    "choices": [
      [
        "Perform bilateral adrenal vein sampling (AVS) with ACTH stimulation to differentiate unilateral aldosterone-producing adenoma from bilateral adrenal hyperplasia",
        "PRIMARY ALDOSTERONISM (PA, Conn syndrome) is a leading cause of secondary hypertension. After demonstrating an elevated ARR (> 20-30 with PAC > 15 ng/dL) and confirming autonomous aldosterone production with a suppression test (oral sodium loading, IV saline infusion, or fludrocortisone suppression), SUBTYPE DIFFERENTIATION IS CRITICAL before considering curative surgical intervention. Primary aldosteronism is caused by either UNILATERAL ALDOSTERONE-PRODUCING ADENOMA (APA, ~35-40%, cured by laparoscopic adrenalectomy) or BILATERAL IDIOPATHIC ADRENAL HYPERPLASIA (IHA, ~60%, managed medically with mineralocorticoid receptor antagonists). Cross-sectional imaging (CT or MRI) is inherently unreliable for subtype classification because: (1) non-functional adrenal incidentalomas are common with advancing age (> 10% in older adults), meaning an imaged nodule may be a non-functioning bystander while the contralateral micro-nodule secretes aldosterone; and (2) APA can be microscopic and invisible on CT. Therefore, Endocrine Society guidelines designate BILATERAL ADRENAL VEIN SAMPLING (AVS) as the GOLD STANDARD to confirm lateralization of aldosterone hypersecretion before laparoscopic adrenalectomy. (Exception: patients < 35 years old with marked hypokalemia and a solitary large unilateral adenoma > 1 cm may proceed directly to surgery)."
      ],
      [
        "Proceed directly to left laparoscopic adrenalectomy based on the definitive CT finding",
        "Proceeding directly to surgery based on CT alone results in inappropriate adrenalectomy in 20-30% of patients who actually have bilateral adrenal hyperplasia or a non-functioning incidentaloma with contralateral hypersecretion."
      ],
      [
        "Perform fine-needle aspiration (FNA) biopsy of the 1.3-cm left adrenal nodule",
        "Adrenal FNA cannot distinguish a benign aldosterone-producing adenoma from a non-functioning cortical adenoma or normal cortex; it risks adrenal hematoma, hypertensive crisis if pheochromocytoma is present, and tumor tract seeding."
      ],
      [
        "Initiate lifelong amiloride 10 mg daily without further diagnostic testing",
        "In patients who are surgical candidates seeking cure, subtype differentiation with AVS is indicated; medical therapy is reserved for bilateral hyperplasia or non-surgical candidates."
      ],
      [
        "Obtain a 24-hour urine collection for fractionated metanephrines and catecholamines",
        "The patient has biochemically proven autonomous hyperaldosteronism (high PAC/PRA ratio and unsuppressed urinary aldosterone); pheochromocytoma is not the underlying cause of this documented primary aldosteronism."
      ]
    ],
    "shortestValidSolution": "Confirmed primary aldosteronism + candidate for curative surgery = Bilateral adrenal vein sampling (AVS) before adrenalectomy.",
    "necessaryInference": "Apply Endocrine Society guidelines: CT is unreliable for functional lateralization; bilateral AVS is mandatory to confirm unilateral source prior to surgery.",
    "strongestDistractor": "Proceed directly to left laparoscopic adrenalectomy based on the definitive CT finding",
    "distractorExclusion": "Adrenal CT incorrectly lateralizes in up to 30% of cases due to non-functioning incidentalomas; AVS is the gold standard.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The management of primary aldosteronism: case detection, diagnosis, and treatment: an Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/hypertension subspecialty item evaluating primary aldosteronism subtype evaluation and the mandatory role of adrenal vein sampling prior to surgery.",
      "distractorExclusionNotes": "Direct surgery based on CT leads to erroneous adrenal removal; FNA cannot differentiate functioning adenoma; amiloride monotherapy forfeits surgical cure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0674",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Primary Biliary Cholangitis First-Line Ursodeoxycholic Acid Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 51-year-old woman presents to the clinic with persistent generalized pruritus that is most intense on the palms and soles and worse at night. She also reports progressive daytime fatigue for the past 6 months. She has no abdominal pain, dark urine, acholic stools, or history of alcohol use. Her medical history includes Hashimoto thyroiditis treated with levothyroxine. On physical examination, skin examination reveals excoriations across both arms and legs, along with subtle yellowish planar xanthomas on her inner eyelids (xanthelasma). There is no jaundice, scleral icterus, spider angiomas, or ascites. Laboratory studies demonstrate: serum alkaline phosphatase 410 U/L (normal 30-120 U/L), gamma-glutamyl transferase (GGT) 185 U/L (normal < 40 U/L), ALT 58 U/L, AST 52 U/L, total bilirubin 0.9 mg/dL, and serum albumin 4.1 g/dL. Serum antimitochondrial antibody (AMA) titer is strongly positive at 1:320 (normal < 1:20). Total cholesterol is 280 mg/dL with HDL 78 mg/dL. Right upper quadrant abdominal ultrasound reveals normal liver echotexture, no intrahepatic or extrahepatic biliary ductal dilatation, and no gallstones. In accordance with AASLD and EASL clinical practice guidelines, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate oral ursodeoxycholic acid (UDCA) at a weight-based dose of 13 to 15 mg/kg/day, monitoring liver biochemical tests every 3 to 6 months",
        "This patient presents with classic PRIMARY BILIARY CHOLANGITIS (PBC, formerly primary biliary cirrhosis), an autoimmune cholestatic liver disease characterized by T-lymphocyte-mediated progressive destruction of small intrahepatic interlobular bile ducts. Per AASLD and EASL guidelines, the diagnosis of PBC is established when AT LEAST TWO OF THREE CRITERIA are met: (1) Biochemical evidence of cholestasis (predominantly elevated alkaline phosphatase and GGT); (2) Presence of circulating ANTIMITOCHONDRIAL ANTIBODIES (AMA titer >= 1:40; present in > 95% of patients); and (3) Histopathologic evidence of non-suppurative destructive cholangitis on liver biopsy. Because the patient meets criteria 1 and 2, and extrahepatic biliary obstruction is excluded by normal ultrasound, LIVER BIOPSY IS NOT REQUIRED for diagnosis. The FIRST-LINE DISEASE-MODIFYING THERAPY IS URSODEOXYCHOLIC ACID (UDCA) at a weight-based dose of 13 TO 15 MG/KG/DAY. UDCA replaces hydrophobic, cytotoxic endogenous bile salts with hydrophilic, cytoprotective ursodiol, stimulates biliary bicarbonate secretion ('bicarbonate umbrella'), and inhibits cholangiocyte apoptosis. High-quality trial data prove that UDCA slows histological disease progression, improves transplant-free survival, and delays the need for liver transplantation."
      ],
      [
        "Perform a percutaneous core liver biopsy prior to initiating any pharmacotherapy",
        "Liver biopsy is not necessary to establish the diagnosis of PBC when both chronic cholestatic liver enzymes and positive high-titer AMA (>= 1:40) are present, and would delay effective therapy."
      ],
      [
        "Perform endoscopic retrograde cholangiopancreatography (ERCP) to evaluate for ductal strictures",
        "ERCP is invasive and indicated for large-duct biliary disease such as primary sclerosing cholangitis (PSC); PBC affects microscopic interlobular ducts that are not visualized on ERCP."
      ],
      [
        "Initiate high-dose oral prednisone 40 mg daily to suppress autoimmune cholangitis",
        "Systemic corticosteroids are ineffective in halting PBC disease progression, cause accelerated severe osteoporosis in postmenopausal women with chronic cholestasis, and are contraindicated."
      ],
      [
        "Initiate oral cholestyramine 4 g three times daily as sole primary disease-modifying therapy",
        "Cholestyramine is a bile acid sequestrant that alleviates pruritus symptoms by binding intestinal bile salts, but it has zero disease-modifying effect and does not slow PBC liver disease progression."
      ]
    ],
    "shortestValidSolution": "Cholestasis (high Alk Phos) + AMA(+) 1:320 = Primary biliary cholangitis: start weight-based UDCA (13-15 mg/kg/day).",
    "necessaryInference": "Diagnose PBC non-invasively (cholestasis + AMA) and prescribe first-line disease-modifying therapy: weight-based UDCA.",
    "strongestDistractor": "Perform a percutaneous core liver biopsy prior to initiating any pharmacotherapy",
    "distractorExclusion": "Liver biopsy is unnecessary when biochemical cholestasis and high-titer AMA are present (AASLD criteria).",
    "citation": "Lindor KD, Bowlus CL, Boyer J, Levy C, Mayo M. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69(1):394-419. PMID: 30070375.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 gastroenterology/hepatology chronic disease item evaluating non-invasive diagnostic criteria for PBC and evidence-based weight-based UDCA therapy.",
      "distractorExclusionNotes": "Biopsy is unnecessary when AMA is positive; ERCP cannot evaluate microscopic small duct disease; corticosteroids worsen osteopenia without benefit; cholestyramine is symptom-relief only.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0675",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "HLA-B*5801 Genetic Screening and Pharmacogenomics Prior to Allopurinol",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man of Han Chinese ancestry presents to the rheumatology clinic for management of recurrent polyarticular gout. Over the past 2 years, he has suffered four acute flares involving his right great toe, left midfoot, and right knee, confirmed by synovial fluid polarized microscopy demonstrating intracellular negatively birefringent needle-shaped crystals. His past medical history includes stage 3b chronic kidney disease (baseline serum creatinine 1.8 mg/dL, estimated GFR 38 mL/min/1.73 m2) and hypertension. His current medications are amlodipine 5 mg daily and losartan 50 mg daily. On examination, he has palpable subcutaneous tophi on the helix of his right ear and overlying the right olecranon. Laboratory evaluation reveals serum urate 9.6 mg/dL. He has had no previous exposure to allopurinol or febuxostat. In accordance with American College of Rheumatology (ACR) guidelines and the Clinical Pharmacogenetics Implementation Consortium (CPIC), which of the following actions is mandatory prior to initiating allopurinol therapy in this patient?",
    "choices": [
      [
        "Perform pharmacogenetic testing for the HLA-B*5801 allele; if positive, allopurinol is contraindicated and an alternative agent (such as febuxostat) should be selected",
        "ALLOPURINOL is the first-line urate-lowering therapy for gout, but it carries a severe, life-threatening risk of ALLOPURINOL HYPERSENSITIVITY SYNDROME (AHS) / SEVERE CUTANEOUS ADVERSE REACTIONS (SCAR), including STEVENS-JOHNSON SYNDROME (SJS) and TOXIC EPIDERMAL NECROLYSIS (TEN), which carry mortality rates up to 25-30%. The development of AHS/SCAR is extraordinarily strongly associated with the HLA-B*5801 ALLELE (odds ratio > 500 in Southeast Asians). Per ACR and CPIC guidelines, PHARMACOGENETIC TESTING FOR HLA-B*5801 IS CONDITIONALLY RECOMMENDED PRIOR TO INITIATING ALLOPURINOL in patients of SUBPOPULATIONS WITH HIGH ALLELE PREVALENCE: individuals of SOUTHEAST ASIAN DESCENT (Han Chinese, Korean, Thai; allele frequency 6-8%) and AFRICAN AMERICAN PATIENTS (allele frequency ~4%). Furthermore, concurrent CHRONIC KIDNEY DISEASE is a major synergistic risk factor for allopurinol-induced SCAR. If the patient tests POSITIVE for HLA-B*5801, ALLOPURINOL IS STRICTLY CONTRAINDICATED; FEBUXOSTAT (a non-purine xanthine oxidase inhibitor) is the recommended alternative agent."
      ],
      [
        "Perform pharmacogenetic testing for the HLA-B*5701 allele; if negative, allopurinol may be safely initiated at standard doses",
        "HLA-B*5701 testing is mandatory prior to initiating ABACAVIR in HIV-infected patients to prevent severe abacavir hypersensitivity reaction; it has no relationship to allopurinol."
      ],
      [
        "Initiate allopurinol 300 mg daily immediately without genetic testing, as CKD stage 3b accelerates allopurinol hepatic clearance",
        "CKD impairs clearance of the active metabolite oxypurinol, increasing\u2014not decreasing\u2014hypersensitivity risk; starting allopurinol at 300 mg without HLA testing in a Han Chinese patient with CKD is dangerous."
      ],
      [
        "Perform pharmacogenetic testing for the CYP2C19*2 loss-of-function allele prior to allopurinol prescription",
        "CYP2C19 testing is used to evaluate clopidogrel responsiveness; allopurinol is metabolized by xanthine oxidase and aldehyde oxidase, not CYP2C19."
      ],
      [
        "Perform glucose-6-phosphate dehydrogenase (G6PD) deficiency screening before allopurinol therapy",
        "G6PD screening is mandatory prior to rasburicase or pegloticase (recombinant uricases that generate hydrogen peroxide and cause methemoglobinemia/hemolysis in G6PD deficiency), but is not required for allopurinol."
      ]
    ],
    "shortestValidSolution": "Han Chinese + CKD + tophaceous gout = Test HLA-B*5801 before allopurinol to prevent fatal SJS/TEN (use febuxostat if positive).",
    "necessaryInference": "Apply ACR/CPIC pharmacogenetic guidelines: test HLA-B*5801 in Han Chinese/Southeast Asian and African American patients prior to allopurinol.",
    "strongestDistractor": "Perform pharmacogenetic testing for the HLA-B*5701 allele; if negative, allopurinol may be safely initiated at standard doses",
    "distractorExclusion": "HLA-B*5701 is tested prior to abacavir (HIV); allopurinol hypersensitivity is linked specifically to HLA-B*5801.",
    "citation": "Hershfield MS, Callaghan JT, Tassaneeyakul W, et al. Clinical Pharmacogenetics Implementation Consortium guidelines for human leukocyte antigen-B genotype and allopurinol dosing. Clin Pharmacol Ther. 2013;93(2):153-158. PMID: 23232882.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology/pharmacogenomics item testing mandatory pre-treatment HLA-B*5801 screening for allopurinol in high-risk populations (Han Chinese, CKD) to prevent SJS/TEN.",
      "distractorExclusionNotes": "HLA-B*5701 is for abacavir; G6PD screening is for rasburicase/pegloticase; CYP2C19 is for clopidogrel; starting allopurinol 300 mg in CKD without testing is dangerous.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
