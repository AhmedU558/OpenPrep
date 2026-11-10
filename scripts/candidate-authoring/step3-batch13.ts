import { CandidateSpec } from './types';

export const step3Batch13: CandidateSpec[] = [
  {
    "code": "op-c-s3-0301",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Diabetic Kidney Disease and Heart Failure Management",
    "subtopic": "SGLT2 Inhibitors, Non-Steroidal MRA, and Managing Transient eGFR Dips",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 12-year history of type 2 diabetes mellitus, hypertension, and ischemic cardiomyopathy (left ventricular ejection fraction 38%) presents to the clinic for follow-up. He is currently asymptomatic, with no dyspnea, orthopnea, or peripheral edema. Medications are: lisinopril 40 mg daily, carvedilol 25 mg twice daily, empagliflozin 10 mg daily (initiated 4 weeks ago), and atorvastatin 40 mg daily. On physical examination, blood pressure is 126/76 mm Hg, heart rate is 68/min, and cardiopulmonary exam is normal without jugular venous distention or rales. Routine follow-up laboratory testing today demonstrates: - Serum creatinine: 1.6 mg/dL (baseline 4 weeks ago prior to empagliflozin was 1.3 mg/dL, corresponding to an eGFR decrease from 58 to 46 mL/min/1.73 m2, a 23% increase in creatinine) - Serum potassium: 4.6 mEq/L - Serum sodium: 138 mEq/L - Blood urea nitrogen: 24 mg/dL - Spot urine albumin-to-creatinine ratio: 420 mg/g (persistent macroalbuminuria). The patient feels well and has no volume depletion. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Continue empagliflozin and lisinopril at current doses and initiate the non-steroidal mineralocorticoid receptor antagonist finerenone",
        "The patient has diabetic kidney disease with persistent macroalbuminuria and heart failure with reduced ejection fraction (HFrEF). Initiating an SGLT2 inhibitor (empagliflozin) characteristically causes a transient, hemodynamic 'eGFR dip' of up to 30% within the first 2 to 4 weeks of therapy. This dip reflects normalization of glomerular hyperfiltration via restoration of tubuloglomerular feedback (increased distal sodium delivery to the macula densa triggers afferent arteriolar constriction), which reduces intraglomerular pressure and provides long-term preservation of renal function and cardiorenal protection. According to ADA and KDIGO guidelines, AN eGFR DROP OF UP TO 30% IS BENIGN AND EXPECTED; SGLT2 INHIBITORS AND ACE INHIBITORS SHOULD BE CONTINUED UNLESS THE eGFR DECLINE EXCEEDS 30% OR SEVERE HYPERKALEMIA/HYPOVOLEMIA OCCURS. Furthermore, in patients with type 2 diabetes and CKD with persistent albuminuria despite maximally tolerated ACEi/ARB and SGLT2 inhibitor therapy, adding FINERENONE (a non-steroidal selective mineralocorticoid receptor antagonist) is guideline-recommended to further reduce CKD progression and cardiovascular events (FIDELIO-DKD and FIGARO-DKD trials)."
      ],
      [
        "Discontinue empagliflozin immediately due to acute drug-induced nephrotoxicity",
        "Stopping empagliflozin because of a 23% hemodynamic eGFR dip deprives the patient of proven long-term cardiovascular and renal survival benefits; dips < 30% are anticipated and reversible."
      ],
      [
        "Discontinue lisinopril and switch to oral hydralazine and isosorbide dinitrate",
        "Discontinuing the ACE inhibitor in the setting of an expected SGLT2i hemodynamic shift removes essential neurohormonal blockade in HFrEF and proteinuria without clinical justification."
      ],
      [
        "Perform an urgent percutaneous renal core needle biopsy to evaluate for interstitial nephritis",
        "A 23% rise in creatinine after starting an SGLT2 inhibitor is a well-established physiological hemodynamic effect; invasive renal biopsy carries bleeding risks without diagnostic necessity."
      ],
      [
        "Administer high-dose intravenous loop diuretics to clear intravascular volume overload",
        "The patient is clinically euvolemic with clear lungs and normal blood pressure; adding diuretics in this setting causes true intravascular volume contraction and pre-renal azotemia."
      ]
    ],
    "shortestValidSolution": "Creatinine rises by 23% after starting empagliflozin + persistent albuminuria on ACEi -> expected SGLT2i hemodynamic dip (< 30%) -> continue empagliflozin/lisinopril + add finerenone.",
    "necessaryInference": "Recognize that a transient eGFR decline of up to 30% after starting an SGLT2 inhibitor represents reversible hemodynamic normalization of intraglomerular pressure, requiring continuation of therapy, and identify finerenone as the fourth pillar for diabetic kidney disease.",
    "strongestDistractor": "Discontinue empagliflozin immediately due to acute drug-induced nephrotoxicity",
    "distractorExclusion": "SGLT2 inhibitors cause a benign physiological eGFR dip < 30% from afferent arteriolar tone restoration; stopping the drug deprives the patient of major cardiorenal mortality benefits.",
    "citation": "de Boer IH, et al. Diabetes Management in Chronic Kidney Disease: A Consensus Report by the American Diabetes Association (ADA) and Kidney Disease: Improving Global Outcomes (KDIGO). Diabetes Care. 2022;45(12):3075-3090. PMID: 36190773.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that a transient eGFR decline of up to 30% after starting an SGLT2 inhibitor represents reversible hemodynamic normalization of intraglomerular pressure, requiring continuation of therapy, and identify finerenone as the fourth pillar for diabetic kidney disease.",
      "distractorExclusionNotes": "Strongest distractor 'Discontinue empagliflozin immediately due to acute drug-induced nephrotoxicity' excluded: SGLT2 inhibitors cause a benign physiological eGFR dip < 30% from afferent arteriolar tone restoration; stopping the drug deprives the patient of major cardiorenal mortality benefi",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0302",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension",
    "subtopic": "Confirmation of True Resistance and Spironolactone as Preferred Fourth-Line Agent (PATHWAY-2)",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the clinic for follow-up of hypertension. At his last three office visits over the past 4 months, his blood pressure has ranged from 154/94 to 162/98 mm Hg despite taking amlodipine 10 mg daily, valsartan 320 mg daily, and chlorthalidone 25 mg daily at maximally tolerated doses. Pharmacy refill records confirm > 95% medication adherence. A 24-hour ambulatory blood pressure monitor (ABPM) demonstrates a mean daytime blood pressure of 152/92 mm Hg and mean nighttime blood pressure of 144/88 mm Hg (non-dipping pattern), ruling out white-coat hypertension. Secondary causes of hypertension\u2014including renal artery stenosis (normal renal duplex), obstructive sleep apnea (negative polysomnography), and Cushing syndrome\u2014have been ruled out. Laboratory testing reveals: - Serum sodium: 139 mEq/L - Serum potassium: 4.3 mEq/L - Serum creatinine: 1.0 mg/dL (eGFR > 60 mL/min/1.73 m2). Which of the following is the most appropriate next pharmacologic step to achieve blood pressure control in this patient?",
    "choices": [
      [
        "Initiate low-dose oral spironolactone (25 to 50 mg daily) with follow-up serum potassium and creatinine monitoring in 2 to 4 weeks",
        "The patient has confirmed TRUE RESISTANT HYPERTENSION, defined as blood pressure that remains above goal (>= 130/80 mm Hg) despite the concurrent use of THREE antihypertensive drug classes at maximally tolerated doses, one of which must be a long-acting thiazide-like diuretic (e.g., CCB + RAS blocker + chlorthalidone), with medication non-adherence and white-coat hypertension excluded. According to AHA/ACC guidelines and the landmark PATHWAY-2 randomized controlled trial, the UNDISPUTED PREFERRED FOURTH-LINE AGENT FOR RESISTANT HYPERTENSION IS A MINERALOCORTICOID RECEPTOR ANTAGONIST (SPIRONOLACTONE 25\u201350 mg daily, or eplerenone). Spironolactone targets occult sodium retention and subclinical mineralocorticoid excess that commonly drives resistant hypertension, demonstrating significant superiority over beta-blockers (bisoprolol) or alpha-blockers (doxazosin). Serum potassium and creatinine must be monitored closely 2 to 4 weeks after initiation."
      ],
      [
        "Initiate oral atenolol 50 mg daily as the preferred fourth-line sympatholytic agent",
        "In the PATHWAY-2 trial, beta-blockers (bisoprolol/atenolol) were statistically significantly inferior to spironolactone in reducing systolic blood pressure in resistant hypertension."
      ],
      [
        "Initiate oral hydralazine 50 mg three times daily combined with oral isosorbide mononitrate",
        "Hydralazine is a fifth- or sixth-line direct vasodilator reserved for patients who cannot tolerate or fail spironolactone; it requires frequent dosing and causes reflex tachycardia and fluid retention."
      ],
      [
        "Switch chlorthalidone to oral hydrochlorothiazide 25 mg daily to enhance distal tubular delivery",
        "Chlorthalidone is significantly more potent, has a much longer half-life (40\u201372 hr), and provides superior 24-hour blood pressure reduction compared to hydrochlorothiazide; switching would worsen control."
      ],
      [
        "Refer for bilateral renal sympathetic denervation without medical adjustment",
        "Renal denervation is an emerging interventional procedure, but guideline-directed medical optimization with fourth-line spironolactone is the established evidence-based standard before invasive devices."
      ]
    ],
    "shortestValidSolution": "True resistant hypertension on CCB + ARB + chlorthalidone with normal potassium (4.3) -> add spironolactone 25 mg daily (PATHWAY-2 trial preferred 4th-line agent).",
    "necessaryInference": "Identify true resistant hypertension and select spironolactone over beta-blockers or alpha-blockers as the evidence-based fourth-line agent proven superior in the PATHWAY-2 trial.",
    "strongestDistractor": "Initiate oral atenolol 50 mg daily as the preferred fourth-line sympatholytic agent",
    "distractorExclusion": "PATHWAY-2 proved that spironolactone is vastly superior to beta-blockers (bisoprolol/atenolol) for reducing blood pressure in resistant hypertension.",
    "citation": "Williams B, et al. Endocrine and Hemodynamic Changes in Resistant Hypertension, and Blood Pressure Responses to Spironolactone or Other Agents: The PATHWAY-2 Study. Lancet Diabetes Endocrinol. 2018;6(6):464-473. PMID: 29655883.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify true resistant hypertension and select spironolactone over beta-blockers or alpha-blockers as the evidence-based fourth-line agent proven superior in the PATHWAY-2 trial.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral atenolol 50 mg daily as the preferred fourth-line sympatholytic ag' excluded: PATHWAY-2 proved that spironolactone is vastly superior to beta-blockers (bisoprolol/atenolol) for reducing blood pressure in resistant hypertension.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0303",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Endocrine",
    "topic": "Glycemic Targets in Frail Elderly Patients",
    "subtopic": "Relaxed HbA1c Goals (7.5-8.5%) and Beers Criteria De-escalation",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old woman is accompanied to the clinic by her daughter for management of type 2 diabetes mellitus. The daughter reports that over the past 2 months, the patient has had two episodes of sudden confusion, diaphoresis, and shakiness at home that resolved after drinking orange juice, as well as a fall in the bathroom without fracture. Her medical history includes moderate Alzheimer dementia, chronic kidney disease stage 3b (eGFR 38 mL/min/1.73 m2), hypertension, and osteoporosis. She requires assistance with instrumental activities of daily living (bathing and meal preparation). Current medications are: glimepiride 4 mg daily, metformin 500 mg daily, amlodipine 5 mg daily, and donepezil 10 mg daily. On physical examination, blood pressure is 128/72 mm Hg without orthostasis, heart rate is 70/min, and BMI is 21 kg/m2. Mini-Mental State Examination score is 18/30. Laboratory evaluation reveals: - Hemoglobin A1c: 6.2% - Serum creatinine: 1.5 mg/dL (baseline) - Fasting blood glucose: 68 mg/dL. Which of the following is the most appropriate management approach for this patient's diabetes?",
    "choices": [
      [
        "Discontinue glimepiride, liberalize the glycemic target to an HbA1c of 7.5% to 8.5%, and maintain lifestyle measures",
        "The patient is a frail older adult with multiple chronic co-morbidities (moderate dementia, CKD stage 3b, osteoporosis) and functional impairment who is experiencing recurrent neuroglycopenic hypoglycemia and falls driven by overtreatment (HbA1c 6.2%). According to the American Diabetes Association (ADA) and American Geriatrics Society (AGS) guidelines, GLYCEMIC TARGETS MUST BE INDIVIDUALIZED: in older adults with complex health status, cognitive impairment, or limited life expectancy, RELAXED HbA1c TARGETS OF 7.5% TO 8.5% (or even avoiding strict targets while preventing symptomatic hyperglycemia) ARE MANDATED to prioritize avoidance of hypoglycemia. Furthermore, GLIMEPIRIDE IS ON THE AGS BEERS CRITERIA as a high-risk medication in older adults: long-acting sulfonylureas have prolonged half-lives in CKD, causing severe, prolonged, and fatal hypoglycemia that precipitates falls, fractures, and vascular events. Discontinuing glimepiride immediately and de-escalating glycemic therapy is the correct evidence-based management."
      ],
      [
        "Increase glimepiride to 6 mg daily and add sliding-scale regular insulin before meals",
        "Increasing sulfonylureas and adding sliding-scale insulin in an 82-year-old with an HbA1c of 6.2% and cognitive impairment is reckless and leads to catastrophic fatal hypoglycemia and head trauma."
      ],
      [
        "Maintain glimepiride at 4 mg daily to keep HbA1c strictly below 6.5% to prevent microvascular disease",
        "Tight glycemic control (< 6.5\u20137.0%) takes decades to show microvascular benefit and provides zero benefit in frail older adults while dramatically increasing fatal hypoglycemia."
      ],
      [
        "Switch glimepiride to subcutaneous exenatide twice daily to promote weight loss",
        "The patient has a low BMI (21 kg/m2), advanced age, and CKD; GLP-1 receptor agonists causing gastrointestinal side effects and weight loss would exacerbate frailty and malnutrition."
      ],
      [
        "Initiate long-acting basal insulin glargine 20 units at bedtime while continuing glimepiride",
        "Adding basal insulin to an overtreating sulfonylurea in an already hypoglycemic patient with an HbA1c of 6.2% causes profound nocturnal hypoglycemia."
      ]
    ],
    "shortestValidSolution": "82-year-old with dementia + falls/hypoglycemia on glimepiride + HbA1c 6.2% -> overtreatment -> discontinue glimepiride (Beers criteria) + liberalize HbA1c target to 7.5-8.5%.",
    "necessaryInference": "Apply geriatric diabetes guidelines: in frail older adults with dementia and CKD, avoid strict glycemic control, target HbA1c 7.5-8.5%, and de-prescribe high-risk sulfonylureas causing hypoglycemia.",
    "strongestDistractor": "Maintain glimepiride at 4 mg daily to keep HbA1c strictly below 6.5% to prevent microvascular disease",
    "distractorExclusion": "Strict control (< 6.5%) in frail elderly patients provides zero microvascular benefit and drastically increases life-threatening hypoglycemia and fall-related deaths.",
    "citation": "American Diabetes Association. 13. Older Adults: Standards of Medical Care in Diabetes\u20142023. Diabetes Care. 2023;46(Suppl 1):S216-S229. PMID: 36507634.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply geriatric diabetes guidelines: in frail older adults with dementia and CKD, avoid strict glycemic control, target HbA1c 7.5-8.5%, and de-prescribe high-risk sulfonylureas causing hypoglycemia.",
      "distractorExclusionNotes": "Strongest distractor 'Maintain glimepiride at 4 mg daily to keep HbA1c strictly below 6.5% to prevent ' excluded: Strict control (< 6.5%) in frail elderly patients provides zero microvascular benefit and drastically increases life-threatening hypoglycemia and fall-related deaths.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0304",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Osteoarthritis in Chronic Kidney Disease",
    "subtopic": "Topical NSAIDs vs Systemic Oral NSAIDs Nephrotoxicity in CKD Stage 3b",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old woman presents to the clinic with chronic bilateral knee pain for the past 3 years that has worsened over the past 6 months. She describes the pain as a deep ache that worsens with prolonged walking and climbing stairs and is accompanied by morning stiffness lasting approximately 15 minutes. Physical examination reveals bony enlargement (osteophytes) and fine crepitus on passive flexion and extension of both knees, with no erythema, warmth, or joint effusion. Weight-bearing radiographs of the knees confirm severe bilateral medial joint space narrowing and subchondral sclerosis consistent with advanced primary knee osteoarthritis. Her medical history includes stage 3b chronic kidney disease (baseline serum creatinine 1.7 mg/dL, eGFR 34 mL/min/1.73 m2), hypertension, and peptic ulcer disease treated with a proton pump inhibitor. Over-the-counter acetaminophen up to 3,000 mg daily has provided minimal pain relief. The patient asks if she can start taking high-dose oral celecoxib or naproxen. Which of the following is the most appropriate next pharmacologic step for managing this patient's knee pain?",
    "choices": [
      [
        "Topical non-steroidal anti-inflammatory drug (topical diclofenac 1% gel)",
        "The patient has symptomatic knee osteoarthritis requiring escalation beyond acetaminophen, but has major contraindications to systemic oral NSAIDs: stage 3b chronic kidney disease (eGFR 34 mL/min/1.73 m2) and a history of peptic ulcer disease. Systemic oral NSAIDs (including COX-2 selective agents like celecoxib) inhibit renal vasodilatory prostaglandins (PGE2, PGI2), constricting afferent arterioles and triggering acute-on-chronic kidney injury, hyperkalemia, sodium/water retention, and gastrointestinal hemorrhage. According to the American College of Rheumatology (ACR) and Osteoarthritis Research Society International (OARSI) guidelines, TOPICAL NSAIDs (TOPICAL DICLOFENAC GEL) ARE STRONGLY RECOMMENDED AS FIRST-LINE PHARMACOTHERAPY FOR KNEE OSTEOARTHRITIS, PARTICULARLY IN OLDER ADULTS WITH RENAL OR GI COMORBIDITIES. Topical application provides equivalent analgesic efficacy to oral NSAIDs while resulting in systemic drug absorption of less than 5% to 10%, virtually eliminating the risk of systemic renal failure, fluid overload, or ulcer bleeding."
      ],
      [
        "Initiate oral celecoxib 200 mg daily because COX-2 inhibitors are completely free of renal side effects",
        "COX-2 is constitutively expressed in renal podocytes and the macula densa; COX-2 inhibitors cause identical renal vasoconstriction, acute kidney injury, and hypertension as non-selective NSAIDs."
      ],
      [
        "Initiate oral naproxen 500 mg twice daily combined with misoprostol",
        "Oral naproxen causes severe renal afferent arteriolar constriction and acute tubular necrosis in patients with baseline eGFR < 60 mL/min; misoprostol does not prevent renal injury."
      ],
      [
        "Initiate daily low-dose oral oxycodone therapy for long-term chronic pain management",
        "Opioids are not recommended for chronic osteoarthritis due to high risks of dependency, overdose, constipation, delirium, falls, and lack of long-term functional improvement."
      ],
      [
        "Administer intra-articular hyaluronic acid injections every 3 months",
        "Current ACR guidelines conditionally recommend against intra-articular hyaluronic acid viscosupplementation because high-quality trials demonstrate no meaningful clinical benefit over placebo."
      ]
    ],
    "shortestValidSolution": "Knee osteoarthritis failing acetaminophen + CKD stage 3b (eGFR 34) -> choose TOPICAL diclofenac gel (systemic absorption < 10%; avoids oral NSAID nephrotoxicity).",
    "necessaryInference": "Select topical NSAIDs over oral NSAIDs in knee osteoarthritis for patients with CKD or peptic ulcer disease, recognizing that topical formulations achieve local analgesia with minimal systemic renal exposure.",
    "strongestDistractor": "Initiate oral celecoxib 200 mg daily because COX-2 inhibitors are completely free of renal side effects",
    "distractorExclusion": "COX-2 selective inhibitors are NOT renal-sparing; COX-2 is active in the kidney and celecoxib triggers acute kidney injury and fluid retention identical to non-selective NSAIDs.",
    "citation": "Kolasinski SL, et al. 2019 American College of Rheumatology/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. Arthritis Rheumatol. 2020;72(2):220-233. PMID: 31908163.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select topical NSAIDs over oral NSAIDs in knee osteoarthritis for patients with CKD or peptic ulcer disease, recognizing that topical formulations achieve local analgesia with minimal systemic renal exposure.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral celecoxib 200 mg daily because COX-2 inhibitors are completely fre' excluded: COX-2 selective inhibitors are NOT renal-sparing; COX-2 is active in the kidney and celecoxib triggers acute kidney injury and fluid retention identical to non-selective NSAIDs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0305",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Cardiovascular",
    "topic": "Atrial Fibrillation with Prior Intracranial Hemorrhage",
    "subtopic": "Timing of Oral Anticoagulation Resumption vs Left Atrial Appendage Occlusion",
    "provisionalDifficulty": 4,
    "stem": "A 73-year-old man presents to the outpatient cardiology clinic for consultation regarding stroke prevention. He has a history of permanent non-valvular atrial fibrillation, hypertension, type 2 diabetes mellitus, and a prior ischemic stroke (CHA2DS2-VASc score: 5). Six weeks ago, while taking oral apixaban 5 mg twice daily, he suffered an acute spontaneous deep hypertensive intracerebral hemorrhage (ICH) in the left putamen. Apixaban was discontinued, and he was managed non-operatively in the neuro-ICU with tight blood pressure control. Over the past 6 weeks, he has achieved excellent neurological recovery with only mild residual right arm pronator drift. Repeat brain MRI performed yesterday reveals complete resolution of the acute hematoma and no cerebral amyloid angiopathy, microbleeds, or underlying vascular malformation. His blood pressure is currently 122/74 mm Hg on lisinopril and amlodipine. The clinical team debates how to balance his severe thromboembolic stroke risk against his risk of recurrent intracranial hemorrhage. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Discuss the risks and benefits of resuming oral anticoagulation with a direct oral anticoagulant (DOAC) after 4 to 8 weeks, or referral for percutaneous left atrial appendage occlusion",
        "Managing anticoagulation in patients with atrial fibrillation following an intracerebral hemorrhage (ICH) represents one of the most challenging dilemmas in clinical medicine. With a CHA2DS2-VASc score of 5, his annual ischemic stroke risk exceeds 7% to 10%, while untreated ischemic strokes carry high mortality. Large observational cohorts and randomized pilot trials (e.g., RESTART, APACHE-AF, SoSTART) demonstrate that RESUMING ORAL ANTICOAGULATION (preferably with a DOAC like apixaban rather than warfarin) after a waiting period of at least 4 to 8 weeks in patients with deep hypertensive ICH (where blood pressure is strictly controlled) significantly reduces ischemic stroke and all-cause mortality without a statistically significant increase in fatal recurrent ICH. Alternatively, in patients at high risk of recurrent bleeding or who decline anticoagulation, PERCUTANEOUS LEFT ATRIAL APPENDAGE OCCLUSION (Watchman device) is an evidence-backed alternative that achieves mechanical exclusion of the primary source of thromboemboli."
      ],
      [
        "Initiate dual antiplatelet therapy with aspirin and clopidogrel indefinitely",
        "Dual antiplatelet therapy confers an intracranial hemorrhage risk virtually identical to oral anticoagulation while providing substantially inferior stroke prevention in atrial fibrillation."
      ],
      [
        "Permanently withhold all antithrombotic therapy and advise that anticoagulation is forever contraindicated",
        "Permanently withholding anticoagulation in a patient with a CHA2DS2-VASc of 5 and resolved deep ICH leaves him at catastrophic risk of fatal thromboembolic stroke; guideline consensus supports shared decision-making regarding resumption."
      ],
      [
        "Immediately resume full-dose intravenous unfractionated heparin bridge therapy today",
        "Heparin bridging confers a high risk of acute intracranial hemorrhage expansion without stroke prevention benefit, and is strictly contraindicated post-ICH."
      ],
      [
        "Initiate high-dose subcutaneous low-molecular-weight heparin as a safer alternative to oral DOACs",
        "LMWH is not superior to DOACs for long-term stroke prevention in atrial fibrillation and increases minor bleeding complications; DOACs have the lowest ICH rates among all anticoagulants."
      ]
    ],
    "shortestValidSolution": "AFib (CHA2DS2-VASc 5) with deep ICH 6 weeks ago, now resolved + BP controlled -> resume DOAC after 4-8 weeks or left atrial appendage occlusion (Watchman).",
    "necessaryInference": "Navigate the post-ICH anticoagulation dilemma: in deep hypertensive ICH with strict BP control, evidence supports shared decision-making for DOAC resumption after 4-8 weeks or percutaneous LAA occlusion over permanent cessation.",
    "strongestDistractor": "Initiate dual antiplatelet therapy with aspirin and clopidogrel indefinitely",
    "distractorExclusion": "DAPT has an intracranial bleeding profile equivalent to oral anticoagulants while providing vastly inferior protection against cardioembolic stroke in AFib.",
    "citation": "Greenberg SM, et al. 2022 Guideline for the Management of Patients with Spontaneous Intracerebral Hemorrhage: A Guideline from the AHA/ASA. Stroke. 2022;53(7):e282-e361. PMID: 35579034.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Navigate the post-ICH anticoagulation dilemma: in deep hypertensive ICH with strict BP control, evidence supports shared decision-making for DOAC resumption after 4-8 weeks or percutaneous LAA occlusion over permanent cessation.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate dual antiplatelet therapy with aspirin and clopidogrel indefinitely' excluded: DAPT has an intracranial bleeding profile equivalent to oral anticoagulants while providing vastly inferior protection against cardioembolic stroke in AFib.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0306",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "COPD Escalation Therapy (GOLD Guidelines)",
    "subtopic": "Inhaled Corticosteroid Thresholds (Blood Eosinophils >= 300) and Triple Inhaler Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man presents to the pulmonary clinic for follow-up of chronic obstructive pulmonary disease (COPD). Despite daily use of an inhaled long-acting beta-2 agonist (LABA) and long-acting muscarinic antagonist (LAMA) combination inhaler (vilanterol/umeclidinium), he continues to experience daily exertional dyspnea when walking 50 yards and chronic productive cough. Over the past 12 months, he has had two moderate acute COPD exacerbations requiring outpatient oral prednisone and antibiotics. He has a 40-pack-year smoking history but quit 3 years ago. Physical examination reveals a barrel chest, prolonged expiratory phase with scattered dry wheezes, and distant heart sounds. Spirometry confirms severe airflow obstruction: post-bronchodilator FEV1 is 44% of predicted, with an FEV1/FVC ratio of 0.52. Complete blood count reveals: - Leukocyte count: 7,200/mm3 - Absolute blood eosinophil count: 380 cells/microL (5.3%) - Hemoglobin: 15.2 g/dL. He has had no episodes of pneumonia in the past 3 years. According to the current Global Initiative for Chronic Obstructive Lung Disease (GOLD) guidelines, which of the following is the most appropriate next step in pharmacotherapy for this patient?",
    "choices": [
      [
        "Escalate to single-inhaler triple therapy by adding an inhaled corticosteroid (ICS + LABA + LAMA)",
        "The patient has severe COPD (GOLD Stage 3, Group E) characterized by frequent exacerbations (>= 2 moderate exacerbations in the prior year) despite dual long-acting bronchodilator therapy (LABA/LAMA). According to the updated Global Initiative for Chronic Obstructive Lung Disease (GOLD) guidelines, ESCALATION TO INHALED CORTICOSTEROID (ICS) TRIPLE THERAPY (ICS + LABA + LAMA) is strongly indicated for patients who continue to experience exacerbations on LABA/LAMA, ESPECIALLY WHEN THE BLOOD EOSINOPHIL COUNT IS >= 300 CELLS/MICROL. Blood eosinophils serve as a validated predictive biomarker: patients with eosinophils >= 300 cells/microL derive the greatest magnitude of exacerbation reduction from the addition of an ICS. Landmark trials (IMPACT and ETHOS) demonstrated that single-inhaler triple therapy significantly reduces moderate-to-severe exacerbations, improves lung function and quality of life, and demonstrates a statistically significant reduction in all-cause mortality compared to LABA/LAMA dual therapy in frequent exacerbators."
      ],
      [
        "Add daily oral roflumilast (PDE-4 inhibitor) while continuing dual LABA/LAMA therapy",
        "Oral roflumilast is indicated for patients with chronic bronchitis and FEV1 < 50% who continue to exacerbate on triple therapy (ICS/LABA/LAMA); in a patient with eosinophils >= 300 cells/microL, an ICS is the prioritized first escalation."
      ],
      [
        "Initiate chronic prophylactic oral azithromycin 250 mg daily as sole escalation",
        "Chronic macrolide prophylaxis is a secondary consideration for former smokers who continue to exacerbate despite optimized inhaler therapy including triple therapy; adding an ICS is the primary guideline-directed step."
      ],
      [
        "Discontinue the long-acting muscarinic antagonist and switch to high-dose oral theophylline",
        "Theophylline is a non-specific phosphodiesterase inhibitor with narrow therapeutic index, severe arrhythmogenic toxicity, and inferior efficacy; it is not recommended in modern GOLD guidelines."
      ],
      [
        "Prescribe daily low-dose oral prednisone maintenance therapy (5 mg daily)",
        "Chronic oral systemic corticosteroids have zero proven benefit for maintenance COPD therapy and cause severe osteoporosis, muscle wasting, diabetes, and adrenal suppression; they are explicitly contraindicated."
      ]
    ],
    "shortestValidSolution": "COPD on LABA/LAMA with >= 2 exacerbations/year + blood eosinophils 380 (>= 300 cells/microL) -> escalate to triple therapy (ICS + LABA + LAMA).",
    "necessaryInference": "Apply the GOLD guidelines biomarker threshold: patients with frequent exacerbations and blood eosinophil count >= 300 cells/microL derive maximum benefit and mortality reduction from escalating to ICS triple therapy.",
    "strongestDistractor": "Add daily oral roflumilast (PDE-4 inhibitor) while continuing dual LABA/LAMA therapy",
    "distractorExclusion": "Roflumilast is reserved for patients failing triple therapy; with eosinophils >= 300, an inhaled corticosteroid is the guideline-directed prioritized escalation.",
    "citation": "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease: 2023 Report. Fontana, WI: GOLD; 2023. https://goldcopd.org/2023-gold-report-2/",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the GOLD guidelines biomarker threshold: patients with frequent exacerbations and blood eosinophil count >= 300 cells/microL derive maximum benefit and mortality reduction from escalating to ICS triple therapy.",
      "distractorExclusionNotes": "Strongest distractor 'Add daily oral roflumilast (PDE-4 inhibitor) while continuing dual LABA/LAMA the' excluded: Roflumilast is reserved for patients failing triple therapy; with eosinophils >= 300, an inhaled corticosteroid is the guideline-directed prioritized escalation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0307",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Severe Osteoporosis Management",
    "subtopic": "Anabolic Bone-Forming Agents First (Teriparatide) Followed by Antiresorptives",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old postmenopausal woman is referred to the bone health clinic for management of osteoporosis. Three weeks ago, she sustained a non-traumatic vertebral compression fracture at L2 after bending over to pick up her laundry basket. She reports a 6-cm loss of height over the past 5 years and chronic thoracolumbar back pain. She has never taken bone-directed pharmacotherapy. Dual-energy X-ray absorptiometry (DEXA) scan reveals: - Lumbar spine T-score: -3.6 - Femoral neck T-score: -3.2 - Total hip T-score: -3.0. Her 10-year probability of major osteoporotic fracture calculated by FRAX is 38%, and her 10-year probability of hip fracture is 18%, placing her in the 'very high fracture risk' category. Serum calcium, 25-hydroxyvitamin D, intact PTH, serum creatinine, and alkaline phosphatase are completely normal. Which of the following is the most appropriate initial pharmacologic therapy for this patient?",
    "choices": [
      [
        "Initiate daily subcutaneous teriparatide (or abaloparatide) for 18 to 24 months, followed by an antiresorptive agent (bisphosphonate)",
        "The patient has SEVERE OSTEOPOROSIS AT VERY HIGH RISK OF FRACTURE, defined by: (1) recent osteoporotic fragility fracture (L2 vertebral compression fracture), (2) extremely low T-score <= -3.0, and (3) very high FRAX scores (major fracture > 30%, hip fracture > 4.5%). According to the updated American Association of Clinical Endocrinologists (AACE) and Endocrine Society guidelines, IN PATIENTS AT VERY HIGH FRACTURE RISK, AN ANABOLIC BONE-FORMING AGENT (teriparatide [PTH analog], abaloparatide [PTHrP analog], or romosozumab [sclerostin inhibitor]) IS STRONGLY RECOMMENDED AS INITIAL FIRST-LINE THERAPY, RATHER THAN AN ANTIRESORPTIVE BISPHOSPHONATE. Anabolic agents stimulate new osteoblastic bone formation, dramatically increasing bone mineral density and reducing vertebral and non-vertebral fracture rates faster and more robustly than antiresorptives (VERDICT trial). CRITICAL SEQUENTIAL PRINCIPLE: Bone gained during anabolic therapy must be consolidated: when the 18\u201324 month anabolic course is completed, the patient MUST IMMEDIATELY TRANSITION TO AN ANTIRESORPTIVE AGENT (such as oral alendronate or IV zoledronic acid) to prevent rapid bone density loss."
      ],
      [
        "Initiate oral alendronate 70 mg weekly as the standard first-line therapy for all osteoporosis categories",
        "While oral bisphosphonates are first-line for moderate risk, guidelines explicitly mandate anabolic bone-forming agents as initial therapy for VERY HIGH-RISK patients (recent fracture, T-score < -3.0)."
      ],
      [
        "Administer intravenous zoledronic acid once yearly and advise that anabolic agents are obsolete",
        "Zoledronic acid is an antiresorptive that suppresses bone remodeling; in very high-risk osteoporosis with active vertebral collapse, head-to-head trials prove that anabolic agents achieve superior fracture reduction."
      ],
      [
        "Prescribe daily oral raloxifene 60 mg monotherapy for selective estrogen receptor modulation",
        "Raloxifene reduces vertebral fractures in milder postmenopausal osteopenia, but is ineffective for hip or non-vertebral fractures and is vastly inadequate for severe osteoporosis with a T-score of -3.6."
      ],
      [
        "Administer continuous daily calcitonin nasal spray to stimulate trabecular bone calcification",
        "Calcitonin has weak efficacy, has been linked to increased malignancy risk in long-term surveillance, and is no longer recommended for chronic osteoporosis management."
      ]
    ],
    "shortestValidSolution": "Recent vertebral compression fracture + T-score -3.6 + FRAX hip risk 18% (very high risk) -> anabolic agent (teriparatide) FIRST for 18-24 months, followed by antiresorptive (bisphosphonate).",
    "necessaryInference": "Apply AACE osteoporosis guidelines: patients at 'very high fracture risk' (recent fracture, T-score < -3.0) should receive an anabolic agent (teriparatide/romosozumab) FIRST before antiresorptives to maximize bone accretion.",
    "strongestDistractor": "Initiate oral alendronate 70 mg weekly as the standard first-line therapy for all osteoporosis categories",
    "distractorExclusion": "Bisphosphonates are standard for moderate risk, but for very high-risk patients with acute fractures and T-scores < -3.0, anabolic-first sequence produces superior fracture risk reduction.",
    "citation": "Camacho PM, et al. American Association of Clinical Endocrinologists/American College of Endocrinology Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis - 2020 Update. Endocr Pract. 2020;26(Suppl 1):1-46. PMID: 32427503.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply AACE osteoporosis guidelines: patients at 'very high fracture risk' (recent fracture, T-score < -3.0) should receive an anabolic agent (teriparatide/romosozumab) FIRST before antiresorptives to maximize bone accretion.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral alendronate 70 mg weekly as the standard first-line therapy for al' excluded: Bisphosphonates are standard for moderate risk, but for very high-risk patients with acute fractures and T-scores < -3.0, anabolic-first sequence produces superior fracture risk re",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0308",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Hepatitis C in Advanced Chronic Kidney Disease",
    "subtopic": "Pan-Genotypic Direct-Acting Antivirals Safe in Severe CKD / Dialysis",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with end-stage renal disease (ESRD) secondary to hypertensive nephrosclerosis who has been maintained on maintenance hemodialysis three times weekly for 4 years is evaluated for hepatitis C virus (HCV) infection. He is asymptomatic. Physical examination reveals a functional left arteriovenous fistula, with no ascites, spider angiomas, or jaundice. Laboratory evaluation reveals: - HCV antibody: positive - HCV RNA quantitative viral load: 1,850,000 IU/mL - HCV genotype: 1a - Serum creatinine: 8.4 mg/dL (eGFR < 15 mL/min/1.73 m2) - Platelet count: 210,000/mm3 - AST: 38 U/L - ALT: 42 U/L - Transient elastography (FibroScan): liver stiffness of 6.2 kPa, consistent with stage F0\u2013F1 fibrosis (absence of cirrhosis). Which of the following is the most appropriate management plan for this patient's hepatitis C infection?",
    "choices": [
      [
        "Initiate treatment with an all-oral, pan-genotypic direct-acting antiviral regimen (glecaprevir/pibrentasvir for 8 weeks or sofosbuvir/velpatasvir for 12 weeks)",
        "Hepatitis C virus (HCV) infection in patients with advanced chronic kidney disease (CKD stage 4 or 5) and end-stage renal disease (ESRD) on maintenance hemodialysis is associated with accelerated liver disease, increased all-cause mortality, and loss of kidney transplant eligibility. Historically, interferon-based therapies carried severe, intolerable toxicity in ESRD. Modern pan-genotypic DIRECT-ACTING ANTIVIRAL (DAA) REGIMENS have revolutionized HCV therapy, achieving sustained virologic response (SVR12, cure) in > 95% to 98% of patients. According to AASLD/IDSA and KDIGO guidelines, patients with severe renal impairment (eGFR < 30 mL/min/1.73 m2, including dialysis) can be safely and effectively treated with: (1) GLECAPREVIR/PIBRENTASVIR (an NS3/4A protease inhibitor + NS5A inhibitor) for 8 weeks in non-cirrhotic treatment-naive patients, which undergoes biliary excretion with negligible renal clearance, or (2) SOFOSBUVIR/VELPATASVIR for 12 weeks (the FDA updated labeling to remove renal contraindications for sofosbuvir-based regimens). Eradication of HCV cures the infection, reduces mortality, and restores eligibility for deceased-donor kidney transplantation."
      ],
      [
        "Withhold antiviral therapy because direct-acting antivirals are absolutely contraindicated in end-stage renal disease",
        "DAAs are safe and highly effective in ESRD on hemodialysis; withholding therapy leaves the patient infected and ineligible for renal transplantation."
      ],
      [
        "Administer pegylated interferon-alpha and ribavirin with dosage reduction for hemodialysis",
        "Interferon and ribavirin regimens are obsolete, cause life-threatening hemolytic anemia and severe neurotoxicity in ESRD, and have been replaced by DAAs."
      ],
      [
        "Defer HCV treatment until after the patient receives a successful kidney transplant",
        "Treating HCV prior to kidney transplantation eliminates the risk of post-transplant fibrosing cholestatic hepatitis, reduces graft loss, and allows the patient to accept HCV-viremic donor kidneys."
      ],
      [
        "Administer daily intravenous silymarin (milk thistle extract) as hepatoprotective monotherapy",
        "Herbal extracts do not eradicate viral replication and have no proven efficacy in preventing HCV progression or achieving sustained virologic response."
      ]
    ],
    "shortestValidSolution": "Hepatitis C in hemodialysis patient (ESRD) without cirrhosis -> all-oral pan-genotypic DAA (glecaprevir/pibrentasvir for 8 weeks or sofosbuvir/velpatasvir for 12 weeks) achieves cure.",
    "necessaryInference": "Apply modern AASLD/KDIGO HCV guidelines: direct-acting antivirals (glecaprevir/pibrentasvir or sofosbuvir-based regimens) are safe and curative in CKD stage 5/dialysis, replacing obsolete interferon.",
    "strongestDistractor": "Withhold antiviral therapy because direct-acting antivirals are absolutely contraindicated in end-stage renal disease",
    "distractorExclusion": "DAAs have FDA and guideline approval for dialysis patients, achieving > 95% cure rates; withholding treatment is medically outdated and harmful.",
    "citation": "AASLD-IDSA. Hepatitis C Guidance 2019 Update: American Association for the Study of Liver Diseases-Infectious Diseases Society of America Recommendations for Testing, Managing, and Treating Hepatitis C Virus Infection. Hepatology. 2020;71(2):686-721. PMID: 31816111.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply modern AASLD/KDIGO HCV guidelines: direct-acting antivirals (glecaprevir/pibrentasvir or sofosbuvir-based regimens) are safe and curative in CKD stage 5/dialysis, replacing obsolete interferon.",
      "distractorExclusionNotes": "Strongest distractor 'Withhold antiviral therapy because direct-acting antivirals are absolutely contr' excluded: DAAs have FDA and guideline approval for dialysis patients, achieving > 95% cure rates; withholding treatment is medically outdated and harmful.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0309",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Chronic Gout Management During an Acute Flare",
    "subtopic": "Continuity of Urate-Lowering Therapy and Treat-to-Target Strategy",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents to the clinic with acute, severe pain, swelling, and redness in his right first metatarsophalangeal (MTP) joint that woke him from sleep 18 hours ago. He has a history of recurrent gouty arthritis, hypertension, and stage 2 chronic kidney disease (eGFR 72 mL/min/1.73 m2). He has been taking allopurinol 200 mg daily for the past 6 months, but his last serum urate level 3 months ago was 7.4 mg/dL. He takes amlodipine for hypertension. On physical examination, the right first MTP joint is warm, exquisitely tender to the touch, and erythematous with periarticular swelling, without skin breakdown or tophi. Synovial fluid aspiration from the joint confirms intracellular needle-shaped, negatively birefringent crystals under polarized light microscopy, with no bacteria on Gram stain. The patient asks if he should immediately stop taking his allopurinol until the acute attack subsides. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Continue allopurinol at the current dose, treat the acute flare with low-dose colchicine or an oral corticosteroid, and titrate allopurinol upward once the flare resolves to achieve a serum urate < 6.0 mg/dL",
        "The management of an acute gout flare in a patient already taking urate-lowering therapy (ULT, such as allopurinol) requires adherence to two fundamental principles established by the American College of Rheumatology (ACR) Gout Guidelines: (1) CONTINUING ULT DURING AN ACUTE FLARE: In patients who experience an acute gout flare while taking allopurinol, ALLOPURINOL SHOULD BE UNINTERRUPTED AND CONTINUED WITHOUT INTERRUPTION. Discontinuing allopurinol causes sudden fluctuations in serum urate levels, which triggers rapid dissolution of articular monosodium urate crystal surfaces, prolonging the duration and severity of the acute inflammatory flare. (2) TREATMENT OF THE ACUTE FLARE: Initiate anti-inflammatory therapy promptly (low-dose colchicine, oral prednisone, or an NSAID). (3) TREAT-TO-TARGET TITRATION: Once the acute flare has fully resolved, the dose of allopurinol must be titrated upward (e.g., to 300 mg daily or higher) to achieve the guideline-directed target serum urate level of < 6.0 mg/dL (or < 5.0 mg/dL in tophaceous disease) to dissolve existing crystal stores and prevent future flares."
      ],
      [
        "Discontinue allopurinol immediately and resume it only after the patient has been symptom-free for 6 months",
        "Stopping allopurinol during an acute attack triggers dramatic urate shifts that destabilize articular microcrystals, worsening and prolonging the inflammatory flare."
      ],
      [
        "Double the allopurinol dose to 400 mg daily today to rapidly lower serum urate during the attack",
        "Acutely increasing allopurinol during an active flare also causes rapid serum urate swings that exacerbate articular inflammation; dose increases should occur after the acute flare resolves."
      ],
      [
        "Discontinue allopurinol permanently and switch to lifelong oral indomethacin monotherapy",
        "NSAIDs treat acute flares but do not lower systemic urate; lifelong NSAID monotherapy leads to chronic kidney injury, peptic ulcers, and uncontrolled tophaceous destruction."
      ],
      [
        "Administer intravenous rasburicase infusion to achieve an immediate serum urate of zero",
        "Rasburicase is a recombinant urate oxidase reserved strictly for tumor lysis syndrome in hematologic malignancies; it is not approved or indicated for routine outpatient gout."
      ]
    ],
    "shortestValidSolution": "Acute gout flare while taking allopurinol + urate 7.4 mg/dL -> continue allopurinol, treat flare with colchicine/steroids, then titrate allopurinol upward to target urate < 6.0 mg/dL.",
    "necessaryInference": "Apply ACR gout guidelines: do NOT discontinue allopurinol during an acute flare (urate shifts prolong inflammation), treat the acute attack, and subsequently titrate to target urate < 6.0 mg/dL.",
    "strongestDistractor": "Discontinue allopurinol immediately and resume it only after the patient has been symptom-free for 6 months",
    "distractorExclusion": "Discontinuing allopurinol during a flare is an obsolete myth; stopping therapy causes urate fluctuations that lengthen and intensify the acute attack.",
    "citation": "FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Rheumatol. 2020;72(6):879-895. PMID: 32391934.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ACR gout guidelines: do NOT discontinue allopurinol during an acute flare (urate shifts prolong inflammation), treat the acute attack, and subsequently titrate to target urate < 6.0 mg/dL.",
      "distractorExclusionNotes": "Strongest distractor 'Discontinue allopurinol immediately and resume it only after the patient has bee' excluded: Discontinuing allopurinol during a flare is an obsolete myth; stopping therapy causes urate fluctuations that lengthen and intensify the acute attack.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0310",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Benign Prostatic Hyperplasia (BPH)",
    "subtopic": "Combination Therapy (Alpha-Blocker + 5-Alpha Reductase Inhibitor) in Moderate-to-Severe BPH with Enlarged Prostate",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents to the clinic with progressively worsening urinary symptoms over the past 12 months. He reports hesitancy, a weak and interrupted urinary stream, straining to void, post-void dribbling, and waking up 4 times every night to urinate (nocturia). His International Prostate Symptom Score (IPSS) is 24 (severe lower urinary tract symptoms). He has had no dysuria, hematuria, or fever. Physical examination reveals a non-tender, symmetrically enlarged, smooth, rubbery prostate on digital rectal examination, with an estimated volume of 45 grams (normal: < 25 grams). Urinalysis is completely negative. Post-void residual volume measured by bladder ultrasound is 85 mL (normal: < 100 mL). Serum prostate-specific antigen (PSA) is 3.2 ng/mL (normal: < 4.0 ng/mL). The patient desires medical pharmacotherapy to relieve his symptoms and prevent disease progression. Which of the following is the most appropriate initial medical regimen for this patient?",
    "choices": [
      [
        "Combination therapy with an alpha-1 adrenergic antagonist (tamsulosin) and a 5-alpha reductase inhibitor (finasteride)",
        "The patient has severe lower urinary tract symptoms (LUTS) secondary to benign prostatic hyperplasia (BPH) with documented prostatic enlargement (prostate volume 45 g, PSA > 1.5 ng/mL). According to American Urological Association (AUA) guidelines and landmark randomized trials (MTOPS and CombAT), COMBINATION THERAPY WITH AN ALPHA-1 ANTAGONIST AND A 5-ALPHA REDUCTASE INHIBITOR (5-ARI) IS THE OPTIMAL FIRST-LINE STRATEGY FOR MEN WITH MODERATE-TO-SEVERE LUTS AND PROSTATIC ENLARGEMENT (> 30\u201335 g): (1) Alpha-1 antagonists (tamsulosin or alfuzosin) relax prostatic and bladder neck smooth muscle, providing rapid symptom relief within days to weeks; (2) 5-alpha reductase inhibitors (finasteride or dutasteride) inhibit conversion of testosterone to dihydrotestosterone (DHT), shrinking prostate epithelial volume by 20% to 25% over 6 to 12 months. Long-term combination therapy significantly reduces the risk of acute urinary retention and the need for future BPH-related surgery compared to monotherapy with either drug alone. (Note: 5-ARIs reduce serum PSA by approximately 50%; baseline PSA must be multiplied by 2 during subsequent cancer screening)."
      ],
      [
        "Monotherapy with the muscarinic receptor antagonist tolterodine",
        "Tolterodine treats overactive bladder and detrusor overactivity, but does not relieve bladder outlet obstruction in BPH and increases the risk of acute urinary retention."
      ],
      [
        "Immediate transurethral resection of the prostate (TURP) without a trial of medical therapy",
        "TURP is the surgical gold standard reserved for patients who fail medical therapy or develop refractory retention, recurrent UTIs, bladder calculi, or renal insufficiency; initial medical therapy is indicated."
      ],
      [
        "Monotherapy with oral saw palmetto (Serenoa repens) dietary supplements",
        "Rigorous Cochrane reviews and double-blind multicenter trials (STEP and CAMUS) demonstrated that saw palmetto is no better than placebo in relieving LUTS or reducing prostate size."
      ],
      [
        "Prescribe daily oral ciprofloxacin for 4 weeks to treat subclinical chronic bacterial prostatitis",
        "The patient has no dysuria, fever, leukocyturia, or bacteriuria; empirical antibiotics for sterile BPH contribute to antimicrobial resistance without clinical efficacy."
      ]
    ],
    "shortestValidSolution": "Severe BPH symptoms (IPSS 24) + enlarged prostate (45 g, PSA 3.2) -> combination therapy: alpha-1 blocker (tamsulosin) + 5-alpha reductase inhibitor (finasteride) (MTOPS trial).",
    "necessaryInference": "Apply the MTOPS/CombAT evidence-based guidelines: men with moderate-to-severe BPH symptoms and prostate enlargement (> 30 g) achieve maximum symptom relief and prevention of urinary retention with dual alpha-blocker + 5-ARI therapy.",
    "strongestDistractor": "Monotherapy with the muscarinic receptor antagonist tolterodine",
    "distractorExclusion": "Tolterodine relaxes the bladder dome but does not relieve prostate outlet obstruction, predisposing to acute urinary retention in un-catheterized patients.",
    "citation": "Lerner LB, et al. Management of Lower Urinary Tract Symptoms Attributed to Benign Prostatic Hyperplasia: AUA Guideline Part II\u2014Surgical Evaluation and Treatment. J Urol. 2021;206(4):818-826. PMID: 34384236.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the MTOPS/CombAT evidence-based guidelines: men with moderate-to-severe BPH symptoms and prostate enlargement (> 30 g) achieve maximum symptom relief and prevention of urinary retention with dual alpha-blocker + 5-ARI therapy.",
      "distractorExclusionNotes": "Strongest distractor 'Monotherapy with the muscarinic receptor antagonist tolterodine' excluded: Tolterodine relaxes the bladder dome but does not relieve prostate outlet obstruction, predisposing to acute urinary retention in un-catheterized patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0311",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Subclinical Hypothyroidism",
    "subtopic": "Confirmation with Repeat Testing and Treatment Indications (TSH >= 10 mIU/L vs Pregnancy)",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman presents for a routine annual health checkup. She reports feeling entirely well with no fatigue, cold intolerance, weight gain, constipation, depression, or skin dryness. She takes no medications and has no chronic medical conditions. Physical examination is completely normal, with a blood pressure of 122/76 mm Hg, heart rate of 68/min, and no thyroid enlargement, nodularity, or delayed relaxation of deep tendon reflexes. Routine laboratory screening reveals: - Serum TSH: 6.8 microU/mL (normal: 0.5\u20135.0 microU/mL) - Free T4: 1.1 ng/dL (normal: 0.8\u20131.8 ng/dL) - Serum cholesterol: 195 mg/dL. The patient is not pregnant and is not planning pregnancy. The medical resident recommends immediately initiating oral levothyroxine 50 mcg daily. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Repeat serum TSH and free T4 in 3 months to confirm persistent elevation before considering therapy",
        "The patient has asymptomatic mild subclinical hypothyroidism (elevated TSH [5.0\u201310.0 microU/mL] with a normal free T4). According to American Thyroid Association (ATA) and Endocrine Society guidelines, the MANDATORY FIRST STEP is to REPEAT SERUM TSH AND FREE T4 IN 3 MONTHS (often with anti-thyroid peroxidase [anti-TPO] antibody testing). In up to 40% to 50% of patients with mild TSH elevations (< 7\u201310 microU/mL), repeat testing demonstrates spontaneous normalization of TSH without intervention (e.g., following subacute thyroiditis or transient systemic illness). Furthermore, randomized controlled trials (TRUST trial) have conclusively demonstrated that treating mild subclinical hypothyroidism (TSH < 10 microU/mL) in asymptomatic older adults provides NO BENEFIT in terms of fatigue, cognitive function, mood, or cardiovascular endpoints. Clear indications for levothyroxine therapy include: (1) TSH >= 10 microU/mL, (2) Pregnancy or actively planning pregnancy, (3) Presence of severe hypothyroid symptoms, or (4) High-titer anti-TPO antibodies with goiter."
      ],
      [
        "Initiate oral levothyroxine 50 mcg daily immediately to prevent progression to overt hypothyroidism",
        "Starting levothyroxine immediately based on a single mild TSH elevation of 6.8 microU/mL results in unnecessary lifelong medication for a value that spontaneously normalizes in half of patients."
      ],
      [
        "Perform a radionuclide iodine-123 thyroid uptake scan to evaluate follicular iodine clearance",
        "Radioactive iodine uptake scans are indicated for thyrotoxicosis (hyperthyroidism), not hypothyroidism, and provide zero clinical utility in subclinical hypothyroidism."
      ],
      [
        "Perform high-resolution ultrasound of the thyroid gland to evaluate for occult papillary thyroid cancer",
        "Thyroid ultrasound is indicated for discrete palpable thyroid nodules or goiter; it is not indicated for isolated mild biochemical subclinical hypothyroidism with a normal physical exam."
      ],
      [
        "Initiate daily oral liothyronine (synthetic T3) monotherapy to bypass peripheral deiodinase conversion",
        "Liothyronine (T3) monotherapy causes wide fluctuations in plasma levels, cardiac arrhythmias, and palpitations, and is explicitly not recommended for hypothyroidism."
      ]
    ],
    "shortestValidSolution": "Asymptomatic adult with mild TSH elevation (6.8 microU/mL) and normal free T4 -> repeat TSH/free T4 in 3 months before treatment (normalizes spontaneously in ~50%; treat only if TSH >= 10, pregnant, or symptomatic).",
    "necessaryInference": "Recognize that mild subclinical hypothyroidism (TSH 5-10 with normal T4) requires confirmatory repeat testing in 3 months, and that routine levothyroxine is not indicated for asymptomatic non-pregnant adults with TSH < 10 mIU/L (TRUST trial).",
    "strongestDistractor": "Initiate oral levothyroxine 50 mcg daily immediately to prevent progression to overt hypothyroidism",
    "distractorExclusion": "Levothyroxine does not improve symptoms or cardiovascular outcomes when TSH is < 10, and approximately half of mild TSH elevations normalize spontaneously on repeat testing.",
    "citation": "Stott DJ, et al. Thyroid Hormone Therapy for Older Adults with Subclinical Hypothyroidism. N Engl J Med. 2017;376(26):2534-2544. PMID: 28402241.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that mild subclinical hypothyroidism (TSH 5-10 with normal T4) requires confirmatory repeat testing in 3 months, and that routine levothyroxine is not indicated for asymptomatic non-pregnant adults with TSH < 10 mIU/L (TRUST trial).",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral levothyroxine 50 mcg daily immediately to prevent progression to o' excluded: Levothyroxine does not improve symptoms or cardiovascular outcomes when TSH is < 10, and approximately half of mild TSH elevations normalize spontaneously on repeat testing.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0312",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Statin-Associated Muscle Symptoms (SAMS)",
    "subtopic": "Serum CK Measurement, Drug Holiday, and Alternative Dosing Strategies",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents to the clinic complaining of bilateral aching, soreness, and heaviness in his thighs and calves that began 4 weeks after initiating atorvastatin 40 mg daily for primary prevention of atherosclerotic cardiovascular disease (10-year ASCVD risk: 14%). He states that the muscle soreness is present throughout the day and impairs his ability to jog. He denies muscle weakness, dark or tea-colored urine, fever, or joint pain. On physical examination, blood pressure is 126/78 mm Hg and heart rate is 70/min. Neurological examination reveals full 5/5 motor strength in proximal and distal muscles of both lower extremities with normal muscle tone, intact sensation, and normal deep tendon reflexes. Laboratory evaluation reveals: - Serum creatine kinase (CK): 280 U/L (normal: 30\u2013200 U/L; upper limit of normal [ULN]: 200 U/L; CK is < 2x ULN) - Serum creatinine: 0.9 mg/dL - AST: 28 U/L - ALT: 24 U/L - Urinalysis: negative for blood and protein. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Discontinue atorvastatin temporarily for 2 to 4 weeks (drug holiday), assess for symptom resolution, and rechallenge with a lower dose or a different statin (such as rosuvastatin or pravastatin)",
        "The patient is experiencing Statin-Associated Muscle Symptoms (SAMS), the most common adverse effect of statin therapy (occurring in 5\u201310% of patients), typically presenting as symmetric proximal myalgia without significant weakness. According to ACC/AHA and NLA guidelines, when evaluating SAMS: (1) Rule out rhabdomyolysis: check serum CK and urinalysis (rhabdomyolysis features CK > 10x ULN, severe weakness, and myoglobinuria; here, CK is only mildly elevated at < 2x ULN). (2) RECHALLENGE PROTOCOL: Temporarily discontinue the statin for a 2- to 4-week 'drug holiday' to confirm that symptoms resolve. (3) RE-CHALLENGE WITH LOWER DOSE OR ALTERNATIVE STATIN: Once symptoms resolve, rechallenge with the same statin at a lower dose, or switch to an alternative statin with different pharmacokinetic properties (e.g., rosuvastatin, pravastatin, or fluvastatin, which are more hydrophilic than lipophilic atorvastatin). Intermittent once- or twice-weekly dosing of long-acting statins (e.g., rosuvastatin 5\u201310 mg twice weekly) is highly effective and tolerated in > 70% of patients with prior myalgias, allowing them to achieve necessary LDL-lowering goals."
      ],
      [
        "Permanently discontinue all statin therapy and declare an absolute lifelong statin allergy",
        "Declaring a permanent statin allergy deprives the patient of the most powerful proven mortality-reducing class of cardiovascular medications; > 70\u201380% of patients with myalgia successfully tolerate an alternative statin or lower dose."
      ],
      [
        "Initiate daily oral coenzyme Q10 (ubiquinone) supplements while continuing atorvastatin 40 mg daily",
        "Multiple randomized controlled trials and meta-analyses have conclusively demonstrated that coenzyme Q10 supplementation does not prevent or treat statin-induced myalgias compared to placebo."
      ],
      [
        "Refer for immediate subcutaneous PCSK9 inhibitor therapy (evolocumab) as first-line monotherapy",
        "PCSK9 inhibitors are expensive second-line injectable monoclonal antibodies reserved for patients who have confirmed intolerance to multiple statins at lowest doses combined with ezetimibe; statin rechallenge must be attempted first."
      ],
      [
        "Administer oral prednisone 40 mg daily for suspected autoimmune necrotizing myopathy",
        "Statin-induced immune-mediated necrotizing myopathy (associated with anti-HMGCR antibodies) causes severe progressive proximal weakness and massive CK elevations (> 10\u201350x ULN) that persist after stopping the statin; it is not present in mild myalgias."
      ]
    ],
    "shortestValidSolution": "Statin myalgias with CK < 2x ULN (no rhabdomyolysis) -> stop statin for 2-4 weeks (drug holiday), then rechallenge with lower dose or alternative statin (pravastatin/rosuvastatin).",
    "necessaryInference": "Apply the ACC/AHA statin-associated muscle symptom protocol: verify absence of rhabdomyolysis (CK < 4x ULN), institute a 2-4 week drug holiday, and rechallenge with a lower dose or alternative hydrophilic statin rather than permanently abandoning statins.",
    "strongestDistractor": "Permanently discontinue all statin therapy and declare an absolute lifelong statin allergy",
    "distractorExclusion": "Most patients reporting muscle symptoms successfully tolerate a different statin or intermittent regimen; declaring an absolute allergy prematurely forfeits major cardiovascular protection.",
    "citation": "Grundy SM, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143. PMID: 30422031.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the ACC/AHA statin-associated muscle symptom protocol: verify absence of rhabdomyolysis (CK < 4x ULN), institute a 2-4 week drug holiday, and rechallenge with a lower dose or alternative hydrophilic statin rather than permanently abandoning statins.",
      "distractorExclusionNotes": "Strongest distractor 'Permanently discontinue all statin therapy and declare an absolute lifelong stat' excluded: Most patients reporting muscle symptoms successfully tolerate a different statin or intermittent regimen; declaring an absolute allergy prematurely forfeits major cardiovascular pr",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0313",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Behavioral and Psychological Symptoms of Dementia (BPSD)",
    "subtopic": "Non-Pharmacologic Interventions First-Line vs Antipsychotic Mortality Risk",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old man with moderate Alzheimer dementia is brought to the geriatric clinic by his exhausted wife and primary caregiver. The wife reports that over the past 3 weeks, the patient has become increasingly restless, agitated, and verbally argumentative every evening around 5:00 PM ('sundowning'). He paces the hallway, repeatedly asks to 'go home' to his childhood residence, and resists his wife's attempts to guide him to dinner or bed. He has not exhibited physical violence, delusions, or hallucinations, and has not threatened harm to himself or others. His medical history includes hypertension and osteoarthritis. Physical examination reveals normal vital signs, clear lungs, soft non-tender abdomen, and no signs of acute urinary retention, fecal impaction, or pain. Urinalysis is completely negative. The wife asks if the doctor can prescribe haloperidol or quetiapine to 'calm him down in the evenings'. Which of the following is the most appropriate initial management approach for this patient?",
    "choices": [
      [
        "Implement structured non-pharmacologic behavioral and environmental modifications, establish a consistent daily routine, and offer caregiver support resources",
        "The patient is experiencing behavioral and psychological symptoms of dementia (BPSD), specifically 'sundowning' (agitation and confusion worsening in late afternoon/evening). According to American Psychiatric Association (APA) and American Geriatrics Society (AGS) guidelines, NON-PHARMACOLOGIC BEHAVIORAL AND ENVIRONMENTAL INTERVENTIONS ARE THE MANDATORY FIRST-LINE TREATMENT FOR BPSD. Interventions include: (1) establishing predictable daily routines, (2) daytime exposure to sunlight and structured physical activities to reinforce circadian rhythms, (3) minimizing evening environmental overstimulation (noise, clutter, multiple caregivers), (4) validating emotions and gentle redirection rather than confronting disorientation, and (5) caregiver respite and support. PHARMACOLOGIC SAFETY PRINCIPLE: Antipsychotic medications (both typical like haloperidol and atypical like quetiapine, risperidone, olanzapine) carry an FDA BLACK-BOX WARNING for an increased risk of stroke, cardiovascular events, and all-cause mortality in elderly patients with dementia-related psychosis. Antipsychotics should be reserved strictly as a last resort for severe, refractory neuropsychiatric symptoms where the patient poses imminent danger to self or others."
      ],
      [
        "Initiate low-dose oral haloperidol 1 mg every evening at 4:30 PM",
        "Typical antipsychotics (haloperidol) carry high rates of extrapyramidal symptoms, tardive dyskinesia, accelerated cognitive decline, and increased mortality in dementia; they are contraindicated for mild agitation."
      ],
      [
        "Initiate oral quetiapine 25 mg every evening as first-line pharmacologic monotherapy",
        "Atypical antipsychotics also carry the FDA black-box warning for increased mortality in elderly dementia patients and should never precede non-pharmacologic environmental strategies in non-violent patients."
      ],
      [
        "Prescribe oral alprazolam 0.5 mg twice daily for acute anxiolytic sedation",
        "Benzodiazepines in older adults with dementia (AGS Beers Criteria) cause severe worsening of confusion, paradoxical agitation, respiratory depression, motor ataxia, falls, and hip fractures."
      ],
      [
        "Recommend immediate placement in an acute psychiatric inpatient locked facility",
        "Inpatient psychiatric commitment is unnecessary and traumatic for non-violent sundowning; environmental modifications and caregiver home support successfully manage the vast majority of cases."
      ]
    ],
    "shortestValidSolution": "Alzheimer patient with non-violent evening agitation (sundowning) -> first-line management is structured non-pharmacologic environmental modifications (antipsychotics carry FDA black-box mortality warning).",
    "necessaryInference": "Recognize that non-pharmacologic environmental strategies are mandatory first-line for BPSD, and that antipsychotics carry an FDA black-box warning for increased mortality in elderly dementia patients.",
    "strongestDistractor": "Initiate oral quetiapine 25 mg every evening as first-line pharmacologic monotherapy",
    "distractorExclusion": "Atypical antipsychotics (quetiapine) increase all-cause mortality and stroke in elderly dementia patients (FDA black box warning) and cannot be used before attempting non-pharmacologic behavioral measures.",
    "citation": "Reus VI, et al. The American Psychiatric Association Practice Guideline on the Use of Antipsychotics to Treat Agitation or Psychosis in Patients With Dementia. Am J Psychiatry. 2016;173(5):543-546. PMID: 27133427.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that non-pharmacologic environmental strategies are mandatory first-line for BPSD, and that antipsychotics carry an FDA black-box warning for increased mortality in elderly dementia patients.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral quetiapine 25 mg every evening as first-line pharmacologic monothe' excluded: Atypical antipsychotics (quetiapine) increase all-cause mortality and stroke in elderly dementia patients (FDA black box warning) and cannot be used before attempting non-pharmacol",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0314",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Behavioral Health",
    "topic": "Chronic Insomnia in Older Adults",
    "subtopic": "Cognitive Behavioral Therapy for Insomnia (CBT-I) vs Beers Criteria Sedatives",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old retired schoolteacher presents to the clinic complaining of persistent difficulty falling asleep and staying asleep for the past 6 months. She reports lying awake in bed for 1 to 2 hours every night before falling asleep, waking up 3 to 4 times during the night, and feeling unrefreshed and fatigued throughout the day. She has no chronic pain, orthopnea, nocturnal dyspnea, or restless legs. Her medical history includes well-controlled hypertension and osteopenia. She drinks two cups of coffee in the morning and does not drink alcohol. On physical examination, blood pressure is 124/76 mm Hg and BMI is 23 kg/m2. Epworth Sleepiness Scale score is 6 (normal < 10). STOP-BANG score is 1 (low risk for obstructive sleep apnea). Routine laboratory testing (CBC, TSH, comprehensive metabolic panel) is completely normal. The patient requests a prescription for zolpidem or lorazepam, stating that her neighbor takes a 'sleeping pill' with great success. According to the American College of Physicians (ACP) and American Academy of Sleep Medicine (AASM) guidelines, which of the following is the most appropriate first-line therapy for this patient?",
    "choices": [
      [
        "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
        "The patient meets diagnostic criteria for Chronic Insomnia Disorder (difficulty initiating or maintaining sleep occurring >= 3 nights per week for >= 3 months with daytime impairment). According to the American College of Physicians (ACP) and American Academy of Sleep Medicine (AASM) clinical practice guidelines, COGNITIVE BEHAVIORAL THERAPY FOR INSOMNIA (CBT-I) IS THE INITIAL FIRST-LINE THERAPY FOR ALL ADULTS WITH CHRONIC INSOMNIA. CBT-I is a structured multicomponent psychological therapy encompassing: (1) stimulus control (using the bed strictly for sleep and sex; leaving bed if awake > 20 minutes), (2) sleep restriction (matching time in bed to actual total sleep time to consolidate sleep architecture), (3) sleep hygiene education, and (4) cognitive restructuring to dispel catastrophic beliefs about sleep loss. Head-to-head clinical trials demonstrate that CBT-I produces sustained sleep improvements equivalent or superior to hypnotic medications, WITHOUT TOLERANCE, REBOUND INSOMNIA, OR DRUG SIDE EFFECTS. GERIATRIC PHARMACOTHERAPY SAFETY: Sedative-hypnotics (Z-drugs like zolpidem, eszopiclone) and benzodiazepines (lorazepam) are listed on the AGS BEERS CRITERIA because they drastically increase the risk of cognitive impairment, delirium, motor vehicle collisions, falls, and hip fractures in older adults."
      ],
      [
        "Initiate oral zolpidem 5 mg at bedtime with a 30-day supply and monthly refills",
        "Z-drugs (zolpidem) are on the Beers Criteria; they carry high risks of parasomnias (sleepwalking, sleep eating), next-day grogginess, falls, and fractures in older adults, and have no long-term durability."
      ],
      [
        "Initiate low-dose oral lorazepam 0.5 mg at bedtime for acute anxiolytic hypnotic effect",
        "Benzodiazepines cause physical dependence, tolerance, cognitive decline, and significantly increase the risk of falls and fractures in older adults; they are not indicated for chronic insomnia."
      ],
      [
        "Prescribe over-the-counter diphenhydramine 50 mg nightly for histamine-1 receptor blockade",
        "First-generation antihistamines (diphenhydramine) possess potent anticholinergic properties that cause acute urinary retention, constipation, dry mouth, blurred vision, and delirium in older adults."
      ],
      [
        "Initiate oral quetiapine 25 mg nightly as an off-label sedative-hypnotic agent",
        "Atypical antipsychotics have severe metabolic, cardiovascular, and extrapyramidal toxicities and are explicitly not recommended for the treatment of primary chronic insomnia."
      ]
    ],
    "shortestValidSolution": "Chronic insomnia in 72-year-old -> first-line therapy is Cognitive Behavioral Therapy for Insomnia (CBT-I) (sedative-hypnotics are Beers Criteria violations).",
    "necessaryInference": "Identify Cognitive Behavioral Therapy for Insomnia (CBT-I) as the guideline-directed first-line therapy for chronic insomnia, recognizing that sedative-hypnotics (zolpidem, benzodiazepines, diphenhydramine) violate Beers Criteria in older adults.",
    "strongestDistractor": "Initiate oral zolpidem 5 mg at bedtime with a 30-day supply and monthly refills",
    "distractorExclusion": "Zolpidem is listed on the Beers Criteria due to proven risks of delirium, daytime somnolence, falls, and hip fractures in older adults; CBT-I is non-pharmacologic and first-line.",
    "citation": "Qaseem A, et al. Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline From the American College of Physicians. Ann Intern Med. 2016;165(2):125-133. PMID: 27136449.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify Cognitive Behavioral Therapy for Insomnia (CBT-I) as the guideline-directed first-line therapy for chronic insomnia, recognizing that sedative-hypnotics (zolpidem, benzodiazepines, diphenhydramine) violate Beers Criteria in older adults.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral zolpidem 5 mg at bedtime with a 30-day supply and monthly refills' excluded: Zolpidem is listed on the Beers Criteria due to proven risks of delirium, daytime somnolence, falls, and hip fractures in older adults; CBT-I is non-pharmacologic and first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0315",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Unintentional Weight Loss in Older Adults",
    "subtopic": "Comprehensive Etiologic Evaluation vs High-Risk Appetite Stimulants (Megestrol Acetate)",
    "provisionalDifficulty": 4,
    "stem": "An 83-year-old man is brought to the clinic by his son because of unintentional weight loss. Over the past 6 months, the patient has lost 7.5 kg (16.5 lb), representing an 11% loss of his baseline body weight. His son notes that the patient rarely finishes his meals and complains that food 'doesn't taste good anymore'. The patient lives alone following the death of his wife 9 months ago. His medical history includes hypertension, benign prostatic hyperplasia, and osteoarthritis. Current medications are: lisinopril 20 mg daily, amlodipine 5 mg daily, tamsulosin 0.4 mg daily, and over-the-counter naproxen 220 mg twice daily. On physical examination, blood pressure is 118/72 mm Hg, heart rate is 68/min, and BMI is 19.8 kg/m2 (down from 22.2 kg/m2). Oral examination reveals poorly fitting upper and lower dentures with mucosal erythema (denture stomatitis). Abdominal examination is normal without masses or organomegaly. Geriatric Depression Scale (GDS) score is 8/15 (suggestive of mild-to-moderate depression). Laboratory testing (CBC, CMP, TSH, fecal occult blood) is completely normal. The son asks if his father should be started on megestrol acetate or dronabinol to stimulate his appetite. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Perform dental adjustment, initiate treatment for depression, recommend high-calorie oral nutritional snacks between meals, and avoid megestrol acetate",
        "Unintentional weight loss in older adults (defined as > 5% loss in 6 months or > 10% in 1 year) is a geriatric syndrome associated with increased functional decline, infection, and mortality. The etiology is typically multifactorial: (1) Oral/dental issues (denture stomatitis, poorly fitting dentures), (2) Neuropsychiatric disorders (late-life depression, bereavement, isolation), (3) Polypharmacy/medications, and (4) Chronic medical diseases. Management requires a systematic, multifactorial approach: repair dentures, treat underlying depression (e.g., mirtazapine, which promotes appetite and weight gain while treating depression), provide social assistance (Meals on Wheels), and encourage energy-dense oral nutritional supplements taken BETWEEN meals (so as not to displace regular meals). PHARMACOLOGIC SAFETY PRINCIPLE: MEGESTROL ACETATE IS STRONGLY DISCOURAGED BY THE AGS BEERS CRITERIA: megestrol produces minimal lean muscle mass gain (mostly fluid and fat) while substantially increasing the risk of venous thromboembolism (deep vein thrombosis and fatal pulmonary embolism), adrenal insufficiency, and all-cause mortality in older adults."
      ],
      [
        "Initiate oral megestrol acetate suspension 400 mg daily as first-line pharmacologic appetite stimulation",
        "Megestrol acetate carries a high risk of deep vein thrombosis, pulmonary embolism, fluid retention, adrenal insufficiency, and death in older adults (Beers Criteria violation) with negligible benefit."
      ],
      [
        "Initiate daily oral dronabinol (synthetic THC) 2.5 mg before lunch and dinner",
        "Dronabinol causes severe central nervous system toxicities in older adults, including somnolence, confusion, orthostatic hypotension, and increased fall risk, without proven benefit in non-AIDS cachexia."
      ],
      [
        "Immediately place a percutaneous endoscopic gastrostomy (PEG) feeding tube for enteral hyperalimentation",
        "Feeding tubes do not improve survival, reduce aspiration pneumonia, or enhance quality of life in frail older adults with progressive weight loss, and carry surgical complications."
      ],
      [
        "Prescribe high-dose oral prednisone 20 mg daily to stimulate appetite and reduce systemic inflammation",
        "Systemic corticosteroids cause severe muscle wasting (steroid myopathy), osteoporosis, hyperglycemia, and immunosuppression, worsening sarcopenia and frailty."
      ]
    ],
    "shortestValidSolution": "83-year-old with 11% weight loss + poor dentures + depression -> fix dentures, treat depression, high-calorie snacks between meals; avoid megestrol acetate (DVT/adrenal risk, Beers criteria).",
    "necessaryInference": "Address reversible multifactorial causes of geriatric weight loss (dentures, depression, nutrition) and recognize that appetite stimulants like megestrol acetate are Beers Criteria violations carrying high thromboembolic and mortality risks.",
    "strongestDistractor": "Initiate oral megestrol acetate suspension 400 mg daily as first-line pharmacologic appetite stimulation",
    "distractorExclusion": "Megestrol acetate is explicitly warned against on the Beers Criteria because it increases venous thromboembolism, adrenal suppression, and death in older adults.",
    "citation": "Gaddey HL, Holder K. Unintentional Weight Loss in Older Adults. Am Fam Physician. 2014;89(9):718-722. PMID: 24784334.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Address reversible multifactorial causes of geriatric weight loss (dentures, depression, nutrition) and recognize that appetite stimulants like megestrol acetate are Beers Criteria violations carrying high thromboembolic and mortality risks.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral megestrol acetate suspension 400 mg daily as first-line pharmacolo' excluded: Megestrol acetate is explicitly warned against on the Beers Criteria because it increases venous thromboembolism, adrenal suppression, and death in older adults.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0316",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD)",
    "subtopic": "Non-Calcium Phosphate Binders vs Calcium-Based Binders and Calciphylaxis Risk",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man with stage 5 chronic kidney disease (eGFR 12 mL/min/1.73 m2, preparing for peritoneal dialysis) presents to the nephrology clinic for routine follow-up. He feels well and adheres to dietary sodium restriction. Medications are: lisinopril 10 mg daily, torsemide 20 mg daily, and rosuvastatin 10 mg daily. On physical examination, blood pressure is 132/80 mm Hg and cardiopulmonary exam is normal without peripheral edema. Follow-up laboratory testing reveals: - Serum phosphorus: 6.8 mg/dL (normal: 2.5\u20134.5 mg/dL; target in CKD: 3.5\u20135.5 mg/dL) - Serum calcium: 9.6 mg/dL (normal: 8.5\u201310.2 mg/dL) - Calcium-phosphate product: 65 mg2/dL2 (elevated; goal: < 55 mg2/dL2) - Intact parathyroid hormone (PTH): 280 pg/mL (target in stage 5 CKD: ~150\u2013300 pg/mL) - Serum albumin: 4.1 g/dL - 25-hydroxyvitamin D: 34 ng/mL. Plain lateral abdominal radiograph demonstrates prominent, linear calcification outlining the abdominal aorta and iliac vessels. A clinical trainee suggests initiating calcium carbonate or calcium acetate 1,000 mg with each meal to bind dietary phosphate. Which of the following is the most appropriate management approach for this patient's hyperphosphatemia?",
    "choices": [
      [
        "Prescribe dietary phosphate restriction and initiate a non-calcium-based phosphate binder (sevelamer carbonate or lanthanum carbonate) with meals",
        "The patient has Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) manifested by hyperphosphatemia and prominent vascular calcification of the aorta and iliac vessels. Reduced GFR impairs renal phosphate excretion; hyperphosphatemia stimulates FGF-23 and PTH, while driving vascular smooth muscle cells to undergo phenotypic switching into osteoblast-like cells, causing extensive medial vascular calcification (arteriosclerosis) and predisposing to calciphylaxis. According to KDIGO CKD-MBD clinical practice guidelines, IN ADULT PATIENTS WITH CKD STAGES 3a\u20135D, EXCESSIVE EXOGENOUS CALCIUM LOADING SHOULD BE AVOIDED. Using calcium-based phosphate binders (calcium acetate or calcium carbonate) in a patient with normal baseline serum calcium (9.6 mg/dL) and pre-existing vascular calcification accelerates arterial calcification, aortic stiffness, and cardiovascular mortality. Therefore, the recommended therapy is DIETARY PHOSPHATE RESTRICTION combined with a NON-CALCIUM-BASED PHOSPHATE BINDER (such as SEVELAMER CARBONATE or LANTHANUM CARBONATE) taken with meals to bind luminal dietary phosphate and form insoluble unabsorbable complexes excreted in the feces."
      ],
      [
        "Initiate calcium carbonate 1,000 mg three times daily with meals to maximize luminal calcium-phosphate precipitation",
        "Administering calcium-based binders causes positive calcium balance and accelerates metastatic vascular calcification and calciphylaxis in CKD stage 5."
      ],
      [
        "Administer high-dose active oral calcitriol (1,25-dihydroxyvitamin D) 0.5 mcg daily",
        "Calcitriol increases gastrointestinal absorption of both calcium and phosphorus; giving calcitriol when serum phosphorus is already 6.8 mg/dL drastically worsens hyperphosphatemia and vascular calcification."
      ],
      [
        "Discontinue lisinopril to improve renal tubular phosphate filtration clearance",
        "ACE inhibitors have negligible effect on tubular phosphate excretion, and stopping lisinopril worsens blood pressure control and cardiovascular risk."
      ],
      [
        "Initiate intravenous zoledronic acid infusion to block osteoclastic bone resorption",
        "Bisphosphonates are contraindicated in severe CKD (eGFR < 30\u201335 mL/min/1.73 m2) due to risk of adynamic bone disease and nephrotoxicity."
      ]
    ],
    "shortestValidSolution": "CKD stage 5 + hyperphosphatemia (6.8) + normal calcium (9.6) + aortic calcification -> non-calcium phosphate binder (sevelamer/lanthanum) with meals (avoid calcium binders).",
    "necessaryInference": "Apply KDIGO CKD-MBD guidelines: avoid calcium-based phosphate binders in patients with vascular calcification or normal/high calcium to prevent accelerated arterial calcification, selecting non-calcium binders (sevelamer).",
    "strongestDistractor": "Initiate calcium carbonate 1,000 mg three times daily with meals to maximize luminal calcium-phosphate precipitation",
    "distractorExclusion": "Calcium-based binders produce systemic calcium loading and accelerate vascular calcification and calciphylaxis; non-calcium binders are preferred.",
    "citation": "Kidney Disease: Improving Global Outcomes (KDIGO) CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD). Kidney Int Suppl (2011). 2017;7(1):1-59. PMID: 30675257.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply KDIGO CKD-MBD guidelines: avoid calcium-based phosphate binders in patients with vascular calcification or normal/high calcium to prevent accelerated arterial calcification, selecting non-calcium binders (sevelamer).",
      "distractorExclusionNotes": "Strongest distractor 'Initiate calcium carbonate 1,000 mg three times daily with meals to maximize lum' excluded: Calcium-based binders produce systemic calcium loading and accelerate vascular calcification and calciphylaxis; non-calcium binders are preferred.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0317",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Preserved Ejection Fraction (HFpEF)",
    "subtopic": "SGLT2 Inhibitors as the First-Line Class with Proven Cardiovascular Mortality/Hospitalization Benefit",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman presents to the cardiology clinic with progressive exertional shortness of breath, fatigue, and lower extremity swelling over the past 4 months. She can now walk only half a block on level ground before having to stop to rest. She sleeps on three pillows to avoid nocturnal breathlessness. Her medical history includes hypertension, obesity (BMI 34 kg/m2), and stage 3a chronic kidney disease. Current medications are: amlodipine 10 mg daily and hydrochlorothiazide 25 mg daily. On physical examination, blood pressure is 138/84 mm Hg and heart rate is 76/min. Physical examination reveals: jugular venous distention 4 cm above the sternal angle at 45 degrees, bilateral bibasilar fine inspiratory crackles, a prominent S4 gallop, and 2+ bilateral pitting pretibial edema. Laboratory evaluation reveals: - Serum creatinine: 1.4 mg/dL (eGFR 44 mL/min/1.73 m2) - Serum potassium: 4.4 mEq/L - N-terminal pro-B-type natriuretic peptide (NT-proBNP): 1,450 pg/mL (normal: < 125 pg/mL). Transthoracic echocardiography reveals: left ventricular ejection fraction of 56% (preserved), marked left ventricular concentric hypertrophy (interventricular septal thickness 1.4 cm), left atrial enlargement (left atrial volume index 42 mL/m2), and an elevated E/e' ratio of 16, consistent with elevated left ventricular filling pressures. Which of the following is the most appropriate pharmacologic agent to initiate to reduce the risk of cardiovascular death and heart failure hospitalization in this patient?",
    "choices": [
      [
        "An SGLT2 inhibitor (empagliflozin or dapagliflozin)",
        "The patient has Heart Failure with Preserved Ejection Fraction (HFpEF), defined by: (1) symptoms and signs of heart failure (dyspnea, orthopnea, JVD, S4 gallop, edema), (2) preserved LVEF (>= 50%), and (3) objective evidence of spontaneous or provokable increased left ventricular filling pressures (elevated NT-proBNP, elevated E/e' ratio > 14, left atrial enlargement, and LV concentric hypertrophy). Historically, neurohormonal antagonists (ACE inhibitors, ARBs, beta-blockers) failed in large clinical trials to demonstrate significant reductions in cardiovascular mortality or hospitalization in HFpEF. However, the landmark EMPEROR-Preserved and DELIVER randomized controlled trials conclusively established that SGLT2 INHIBITORS (EMPAGLIFLOZIN AND DAPAGLIFLOZIN) PRODUCE A STATISTICALLY SIGNIFICANT AND ROBUST REDUCTION IN THE COMPOSITE OUTCOME OF CARDIOVASCULAR DEATH OR HEART FAILURE HOSPITALIZATION ACROSS THE ENTIRE SPECTRUM OF HFpEF, REGARDLESS OF THE PRESENCE OR ABSENCE OF DIABETES. Current AHA/ACC/HFSA guidelines grant SGLT2 inhibitors a Class 1 recommendation for all patients with HFpEF."
      ],
      [
        "Oral digoxin monotherapy titrated to a serum trough level of 1.0 ng/mL",
        "The DIG trial demonstrated that digoxin has zero mortality benefit in heart failure, and in HFpEF with concentric hypertrophy, inotropic stimulation provides no diastolic relaxation benefit and increases toxicity."
      ],
      [
        "Oral diltiazem 120 mg daily as primary therapy to enhance left ventricular diastolic filling",
        "Non-dihydropyridine calcium channel blockers have failed to improve clinical outcomes or mortality in heart failure trials and are not guideline-directed therapy for HFpEF."
      ],
      [
        "High-dose oral vericiguat (soluble guanylate cyclase stimulator)",
        "Vericiguat is approved for worsening HFrEF with reduced ejection fraction; large randomized trials (VITALITY-HFpEF) showed no improvement in quality of life or clinical outcomes in HFpEF."
      ],
      [
        "Immediate referral for transcatheter interatrial shunt device implantation",
        "Interatrial shunt devices remain investigational; the REDUCE LAP-HF II randomized sham-controlled trial failed to demonstrate clinical benefit in the overall HFpEF population."
      ]
    ],
    "shortestValidSolution": "Heart failure signs + LVEF 56% (preserved) + NT-proBNP 1,450 + E/e' 16 -> HFpEF -> SGLT2 inhibitor (empagliflozin/dapagliflozin) reduces CV death and HF hospitalizations (EMPEROR-Preserved).",
    "necessaryInference": "Diagnose HFpEF from preserved ejection fraction, high NT-proBNP, and diastolic filling markers, and select SGLT2 inhibitors as the sole drug class proven to reduce cardiovascular mortality and hospitalization in HFpEF.",
    "strongestDistractor": "Oral digoxin monotherapy titrated to a serum trough level of 1.0 ng/mL",
    "distractorExclusion": "Digoxin does not reduce mortality or hospitalizations in HFpEF and confers high risk of toxicity; SGLT2 inhibitors are the guideline-directed Class 1 therapy.",
    "citation": "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose HFpEF from preserved ejection fraction, high NT-proBNP, and diastolic filling markers, and select SGLT2 inhibitors as the sole drug class proven to reduce cardiovascular mortality and hospitalization in HFpEF.",
      "distractorExclusionNotes": "Strongest distractor 'Oral digoxin monotherapy titrated to a serum trough level of 1.0 ng/mL' excluded: Digoxin does not reduce mortality or hospitalizations in HFpEF and confers high risk of toxicity; SGLT2 inhibitors are the guideline-directed Class 1 therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0318",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Anticoagulation in End-Stage Renal Disease (ESRD) with Atrial Fibrillation",
    "subtopic": "Apixaban Dose Adjustment Rules vs Contraindication of Other DOACs",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old woman with end-stage renal disease (ESRD) secondary to diabetic glomerulosclerosis who has been maintained on maintenance hemodialysis for 3 years presents for a routine nephrology evaluation. Two weeks ago, she was diagnosed with new-onset persistent non-valvular atrial fibrillation. She has a history of ischemic stroke 4 years ago and hypertension (CHA2DS2-VASc score: 6). Her dry weight is 54 kg (119 lb). She feels well and has had no active bleeding, syncope, or chest discomfort. Current medications are: sevelamer carbonate, amlodipine, and carvedilol. On physical examination, blood pressure is 128/74 mm Hg, heart rate is 74/min (irregularly irregular), and her right upper arm arteriovenous fistula has a palpable thrill and continuous bruit. Complete blood count reveals: hemoglobin 10.8 g/dL and platelet count 185,000/mm3. The clinical team decides to initiate stroke prophylaxis. Which of the following is the most appropriate oral anticoagulant and dosage regimen for this patient?",
    "choices": [
      [
        "Oral apixaban 2.5 mg twice daily",
        "The patient has end-stage renal disease (ESRD) on hemodialysis with high-risk non-valvular atrial fibrillation (CHA2DS2-VASc = 6). Selecting an oral anticoagulant in ESRD requires precise knowledge of pharmacokinetics and clinical trial evidence: (1) Dabigatran (80% renal clearance) and rivaroxaban are NOT recommended in ESRD/dialysis in clinical guidelines due to significant drug accumulation and bleeding risks. (2) APIXABAN has only ~27% renal clearance and is metabolized primarily by the liver (CYP3A4) and excreted via the biliary/intestinal tract. (3) FDA AND GUIDELINE APINXABAN DOSING RULES IN ESRD/DIALYSIS: The standard dose of apixaban is 5 mg twice daily. However, DOSE REDUCTION TO 2.5 MG TWICE DAILY IS MANDATED IF THE PATIENT MEETS AT LEAST TWO OF THE FOLLOWING THREE CRITERIA: (a) Age >= 80 years, (b) Body weight <= 60 kg, or (c) Serum creatinine >= 1.5 mg/dL. In ESRD on dialysis, this patient fulfills TWO criteria: she is 82 years old (age >= 80) AND weighs 54 kg (weight <= 60 kg). Therefore, the correct evidence-based dose is APIXABAN 2.5 MG TWICE DAILY. Large observational cohort studies demonstrate that apixaban in dialysis is associated with lower risks of major bleeding and mortality compared to warfarin."
      ],
      [
        "Oral apixaban 5 mg twice daily",
        "Apixaban 5 mg BID is the standard dose in dialysis patients who do NOT fulfill two dose-reduction criteria; because this patient is >= 80 years AND weighs <= 60 kg, 5 mg BID would cause drug accumulation and excessive bleeding."
      ],
      [
        "Oral dabigatran etexilate 150 mg twice daily",
        "Dabigatran is 80% eliminated by the kidneys and is strictly contraindicated in patients on hemodialysis due to profound drug accumulation and fatal hemorrhagic strokes."
      ],
      [
        "Oral rivaroxaban 20 mg once daily with the evening meal",
        "Rivaroxaban is not recommended in hemodialysis due to lack of randomized trial safety data and high bleeding risks compared to apixaban."
      ],
      [
        "Withhold all anticoagulation because anticoagulants are absolutely contraindicated in all hemodialysis patients",
        "Withholding anticoagulation in a patient with a CHA2DS2-VASc score of 6 and prior stroke leaves her at extreme risk of recurrent fatal thromboembolic stroke; guideline consensus supports apixaban or warfarin."
      ]
    ],
    "shortestValidSolution": "82-year-old on hemodialysis with AFib weighing 54 kg -> apixaban reduced to 2.5 mg BID (meets 2 reduction criteria: age >= 80 AND weight <= 60 kg).",
    "necessaryInference": "Apply the FDA/guideline apixaban dose-reduction criteria (reduce to 2.5 mg BID if >= 2 of: age >= 80, weight <= 60 kg, Cr >= 1.5), recognizing that dabigatran and rivaroxaban are contraindicated in ESRD on dialysis.",
    "strongestDistractor": "Oral apixaban 5 mg twice daily",
    "distractorExclusion": "Standard 5 mg BID is used in dialysis ONLY if the patient does not meet 2 dose-reduction criteria; meeting age >= 80 and weight <= 60 kg mandates reduction to 2.5 mg BID.",
    "citation": "Pokorney SD, et al. Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Systematic Review and Meta-Analysis. Circulation. 2022;146(23):1735-1745. PMID: 36345719.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the FDA/guideline apixaban dose-reduction criteria (reduce to 2.5 mg BID if >= 2 of: age >= 80, weight <= 60 kg, Cr >= 1.5), recognizing that dabigatran and rivaroxaban are contraindicated in ESRD on dialysis.",
      "distractorExclusionNotes": "Strongest distractor 'Oral apixaban 5 mg twice daily' excluded: Standard 5 mg BID is used in dialysis ONLY if the patient does not meet 2 dose-reduction criteria; meeting age >= 80 and weight <= 60 kg mandates reduction to 2.5 mg BID.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0319",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Alcohol Use Disorder Maintenance Pharmacotherapy",
    "subtopic": "Acamprosate vs Naltrexone in Hepatic Impairment vs Renal Impairment",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man presents to the outpatient addiction medicine clinic seeking medical pharmacotherapy to maintain abstinence from alcohol. He recently completed an inpatient medically supervised alcohol withdrawal protocol and has been completely abstinent for 10 days. He reports intense daily cravings for alcohol. He has a 20-year history of severe alcohol use disorder complicated by alcoholic hepatitis and early cirrhosis with portal hypertension (history of treated esophageal varices). He denies illicit drug use or chronic pain and has never taken opioids. On physical examination, blood pressure is 126/78 mm Hg and heart rate is 72/min. Physical examination reveals spider angiomas on the chest, palmar erythema, and a palpable liver edge 2 cm below the costal margin, without ascites, asterixis, or peripheral edema. Laboratory evaluation reveals: - AST: 84 U/L - ALT: 62 U/L - Total bilirubin: 2.1 mg/dL - Serum albumin: 3.2 g/dL - International Normalized Ratio (INR): 1.4 - Serum creatinine: 0.8 mg/dL (eGFR > 90 mL/min/1.73 m2). Which of the following is the most appropriate first-line pharmacologic agent to reduce cravings and support maintenance of abstinence in this patient?",
    "choices": [
      [
        "Oral acamprosate calcium 666 mg three times daily",
        "The patient has severe alcohol use disorder and desires pharmacotherapy to prevent relapse and maintain abstinence. Selecting an anticraving agent requires careful evaluation of organ function: (1) NALTREXONE (an opioid mu-receptor antagonist) is a highly effective first-line anticraving agent, BUT IT UNDERGOES EXTENSIVE HEPATIC METABOLISM AND CARRIES AN FDA WARNING FOR HEPATOTOXICITY; it is contraindicated in patients with acute hepatitis, decompensated liver disease/cirrhosis with elevated liver enzymes, or those taking opioids. (2) ACAMPROSATE (a glutamate/NMDA receptor modulator that restores GABA/glutamate balance) IS THE FIRST-LINE PHARMACOTHERAPY OF CHOICE IN PATIENTS WITH CHRONIC LIVER DISEASE OR CIRRHOSIS. Acamprosate is NOT metabolized by the liver and does not affect hepatic function; it is eliminated exclusively by the kidneys. Because this patient has underlying cirrhosis with transaminitis and hyperbilirubinemia, but normal renal function (eGFR > 90 mL/min), ACAMPROSATE IS COMPLETELY SAFE AND THE PREFERRED AGENT. (Note: Acamprosate requires dose reduction in moderate CKD [eGFR 30\u201350] and is contraindicated in severe CKD [eGFR < 30])."
      ],
      [
        "Oral naltrexone 50 mg daily as the primary anticraving agent",
        "Naltrexone undergoes extensive hepatic first-pass metabolism and causes dose-dependent hepatocellular injury; it is contraindicated in patients with active liver disease, cirrhosis, or marked transaminitis."
      ],
      [
        "Oral disulfiram 250 mg daily to induce aversive acetaldehyde accumulation",
        "Disulfiram is an irreversible aldehyde dehydrogenase inhibitor that carries severe idiosyncratic hepatotoxicity (fatal hepatic necrosis) and provides poor compliance; it is contraindicated in cirrhosis."
      ],
      [
        "Daily oral chlordiazepoxide maintenance therapy to suppress central sympathetic tone",
        "Benzodiazepines are used strictly for acute alcohol withdrawal (3\u20135 days); chronic maintenance benzodiazepines cause severe physical dependence, cross-tolerance, and lethal overdose if combined with alcohol."
      ],
      [
        "Reassure the patient that pharmacotherapy is ineffective and mandate exclusive mutual-help group attendance",
        "FDA-approved medications (acamprosate, naltrexone) combined with psychosocial counseling significantly increase abstinence rates and reduce relapse compared to counseling alone."
      ]
    ],
    "shortestValidSolution": "Alcohol use disorder in patient with cirrhosis/liver disease + normal renal function -> choose ACAMPROSATE (renally cleared; naltrexone and disulfiram are hepatotoxic).",
    "necessaryInference": "Differentiate pharmacokinetics of alcohol dependence medications: naltrexone is hepatotoxic (avoid in cirrhosis/hepatitis); acamprosate is renally eliminated and completely safe in hepatic impairment.",
    "strongestDistractor": "Oral naltrexone 50 mg daily as the primary anticraving agent",
    "distractorExclusion": "Naltrexone is contraindicated in cirrhosis and acute hepatitis due to significant hepatic metabolism and risks of drug-induced liver failure.",
    "citation": "American Psychiatric Association. Practice Guideline for the Pharmacological Treatment of Patients With Alcohol Use Disorder. Am J Psychiatry. 2018;175(1):86-90. PMID: 29385935.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate pharmacokinetics of alcohol dependence medications: naltrexone is hepatotoxic (avoid in cirrhosis/hepatitis); acamprosate is renally eliminated and completely safe in hepatic impairment.",
      "distractorExclusionNotes": "Strongest distractor 'Oral naltrexone 50 mg daily as the primary anticraving agent' excluded: Naltrexone is contraindicated in cirrhosis and acute hepatitis due to significant hepatic metabolism and risks of drug-induced liver failure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0320",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Peripheral Artery Disease (PAD) Secondary Prevention",
    "subtopic": "Dual Pathway Inhibition (Aspirin + Low-Dose Rivaroxaban) and Supervised Exercise Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man presents to the clinic complaining of aching pain and tightness in his right calf that consistently begins after walking two blocks and forces him to stop; the pain resolves completely within 5 minutes of resting (intermittent claudication). He has a 35-pack-year smoking history and continues to smoke half a pack daily. He has a history of hypertension and hyperlipidemia. On physical examination, blood pressure is 134/80 mm Hg and heart rate is 70/min. Physical examination of the lower extremities reveals diminished right popliteal, dorsalis pedis, and posterior tibial pulses (1+) compared to the left (2+), with mild coolness and hair loss over the right lower shin, without resting ischemic pain or ulcerations. Ankle-brachial index (ABI) is 0.64 in the right lower extremity and 0.94 in the left lower extremity. Current medications are: amlodipine 5 mg daily and rosuvastatin 20 mg daily. The patient has a low baseline bleeding risk. Which of the following represents the most comprehensive evidence-based medical and functional management regimen for this patient?",
    "choices": [
      [
        "Dual-pathway antithrombotic therapy with aspirin 81 mg daily plus low-dose rivaroxaban 2.5 mg twice daily, high-intensity statin, smoking cessation, and a structured supervised exercise therapy program",
        "The patient has symptomatic lower extremity peripheral artery disease (PAD) confirmed by intermittent claudication and an abnormal resting right ABI <= 0.90 (0.64). Patients with PAD have extensive systemic atherosclerosis and are at extraordinarily high risk for myocardial infarction, ischemic stroke, acute limb ischemia, and vascular amputation. According to updated ACC/AHA guidelines and the landmark COMPASS and VOYAGER-PAD randomized clinical trials: (1) DUAL-PATHWAY INHIBITION: The combination of low-dose aspirin (81\u2013100 mg daily) PLUS very low-dose rivaroxaban (2.5 mg twice daily, a Factor Xa inhibitor) significantly reduces major adverse cardiovascular events (MACE: CV death, MI, stroke) by 24% and major adverse limb events (MALE: acute limb ischemia, major amputation) by 46% compared to aspirin alone in patients with PAD at low bleeding risk. (Alternatively, single antiplatelet therapy with clopidogrel is an established option). (2) High-intensity statin therapy (atorvastatin 80 mg or rosuvastatin 20\u201340 mg) reduces all-cause mortality and plaque progression. (3) Aggressive smoking cessation. (4) SUPERVISED EXERCISE THERAPY (SET): A formal 12-week program of supervised treadmill walking (minimum 30\u201345 min, 3 times weekly) is a Class 1 recommendation that dramatically increases pain-free and maximal walking distance via collateral vascular development."
      ],
      [
        "Immediate referral for percutaneous transluminal angioplasty with bare-metal stenting of the right femoral artery",
        "Revascularization (endovascular or surgical) is reserved for patients who fail a trial of guideline-directed medical therapy and supervised exercise, or who have chronic limb-threatening ischemia (rest pain/tissue loss)."
      ],
      [
        "Warfarin anticoagulation targeting an INR of 2.5 to 3.5 combined with strict complete bed rest",
        "High-intensity warfarin increases major bleeding without cardiovascular benefit over antiplatelet therapy in PAD, and bed rest causes rapid muscular deconditioning."
      ],
      [
        "Oral cilostazol 100 mg twice daily as sole antithrombotic therapy without aspirin or statins",
        "Cilostazol is a phosphodiesterase-3 inhibitor that relieves claudication symptoms, but provides zero secondary prevention against myocardial infarction, stroke, or cardiovascular mortality."
      ],
      [
        "Prescribe oral pentoxifylline 400 mg three times daily and advise the patient to avoid all physical walking",
        "Pentoxifylline has proven lack of clinical efficacy in multiple trials and is not recommended by guidelines; physical walking is the primary therapeutic mechanism to promote collaterals."
      ]
    ],
    "shortestValidSolution": "Symptomatic PAD (claudication, ABI 0.64) -> Aspirin + low-dose rivaroxaban 2.5 mg BID (COMPASS trial dual-pathway) + high-intensity statin + supervised exercise therapy.",
    "necessaryInference": "Apply modern PAD guidelines: combine dual-pathway antithrombotic therapy (aspirin + rivaroxaban 2.5 mg BID per COMPASS trial) with high-intensity statin and supervised exercise therapy before considering invasive revascularization.",
    "strongestDistractor": "Immediate referral for percutaneous transluminal angioplasty with bare-metal stenting of the right femoral artery",
    "distractorExclusion": "Interventional stenting is premature for moderate claudication; guidelines mandate a trial of medical therapy and supervised exercise first.",
    "citation": "Bonaca MP, et al. Rivaroxaban in Peripheral Artery Disease after Revascularization. N Engl J Med. 2020;382(21):1994-2004. PMID: 32222135.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply modern PAD guidelines: combine dual-pathway antithrombotic therapy (aspirin + rivaroxaban 2.5 mg BID per COMPASS trial) with high-intensity statin and supervised exercise therapy before considering invasive revascularization.",
      "distractorExclusionNotes": "Strongest distractor 'Immediate referral for percutaneous transluminal angioplasty with bare-metal ste' excluded: Interventional stenting is premature for moderate claudication; guidelines mandate a trial of medical therapy and supervised exercise first.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0321",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Metabolic Dysfunction-Associated Steatohepatitis (MASH / NASH)",
    "subtopic": "Non-Invasive Fibrosis Assessment (FIB-4), Lifestyle Weight Loss Targets, and Targeted Pharmacotherapy",
    "provisionalDifficulty": 4,
    "stem": "A 51-year-old man with type 2 diabetes mellitus, hypertension, and severe obesity (BMI 36.2 kg/m2) is referred to the hepatology clinic for evaluation of elevated liver enzymes discovered during routine checkup. He drinks no alcohol. Viral hepatitis serologies (HBsAg, anti-HCV) and autoimmune markers (ANA, ASMA) are negative. He has no stigmata of chronic liver disease. Laboratory evaluation reveals: - AST: 58 U/L - ALT: 74 U/L - Platelet count: 185,000/mm3 - Fasting blood glucose: 154 mg/dL - Hemoglobin A1c: 8.2%. The calculated Fibrosis-4 (FIB-4) index is 1.85 (indeterminate risk: 1.3\u20132.67). Follow-up vibration-controlled transient elastography (FibroScan) reveals liver stiffness of 9.2 kPa, consistent with significant fibrosis (stage F2\u2013F3). Ultrasound confirms diffuse hepatic steatosis. Which of the following is the most appropriate evidence-based management strategy to halt or reverse hepatic fibrosis in this patient?",
    "choices": [
      [
        "Structured lifestyle intervention targeting >= 7% to 10% total body weight loss, combined with a GLP-1 receptor agonist (such as semaglutide) or resmetirom for non-cirrhotic MASH with significant fibrosis",
        "The patient has Metabolic Dysfunction-Associated Steatohepatitis (MASH, formerly NASH) with moderate-to-advanced hepatic fibrosis (stage F2\u2013F3). Hepatic fibrosis stage is the single most important histological predictor of liver-related mortality and progression to cirrhosis in MASH. According to AASLD practice guidance: (1) LIFESTYLE WEIGHT LOSS: Achieving >= 7% to 10% total body weight loss is the cornerstone of therapy, resulting in resolution of steatohepatitis in > 80% of patients and regression of fibrosis in > 45%. (2) PHARMACOTHERAPY: In patients with type 2 diabetes and MASH, GLP-1 RECEPTOR AGONISTS (e.g., subcutaneous semaglutide) induce substantial weight loss, optimize glycemic control, reduce transaminases, and demonstrate resolution of steatohepatitis without worsening fibrosis. Furthermore, RESMETIROM (a liver-directed thyroid hormone receptor-beta [THR-beta] agonist approved for non-cirrhotic MASH with moderate-to-advanced fibrosis F2\u2013F3) directly improves hepatic lipid clearance and promotes fibrosis regression."
      ],
      [
        "Initiate high-dose oral vitamin E 800 IU daily as preferred monotherapy",
        "While vitamin E improves histology in non-diabetic NASH, large clinical trials have shown lack of efficacy in patients with type 2 diabetes, and high-dose vitamin E carries increased risks of hemorrhagic stroke and prostate cancer."
      ],
      [
        "Perform immediate exploratory laparoscopy with open wedge liver biopsy before lifestyle changes",
        "Routine liver biopsy is unnecessary when non-invasive tests (FIB-4 followed by transient elastography) concordantly demonstrate significant F2\u2013F3 fibrosis."
      ],
      [
        "Prescribe daily oral ursodeoxycholic acid 15 mg/kg as sole hepatoprotective therapy",
        "Multiple randomized placebo-controlled trials have demonstrated that ursodeoxycholic acid does not improve liver histology, steatohepatitis, or fibrosis in MASH/NASH."
      ],
      [
        "Recommend strict avoidance of physical exercise to prevent muscle-derived hepatic transaminase release",
        "Sedentary lifestyle accelerates insulin resistance and visceral adiposity; aerobic and resistance exercise is a core component of MASH management."
      ]
    ],
    "shortestValidSolution": "Diabetic with MASH and F2-F3 fibrosis on transient elastography -> >= 7-10% weight loss + GLP-1 receptor agonist (semaglutide) or resmetirom to reverse fibrosis.",
    "necessaryInference": "Apply AASLD guidelines for MASH with significant fibrosis: prioritize >= 7-10% body weight loss and select GLP-1 receptor agonists (semaglutide) or targeted agents (resmetirom) over ineffective ursodeoxycholic acid or vitamin E in diabetes.",
    "strongestDistractor": "Initiate high-dose oral vitamin E 800 IU daily as preferred monotherapy",
    "distractorExclusion": "Vitamin E is not recommended for patients with diabetes due to lack of demonstrated histologic benefit and concerns regarding hemorrhagic stroke and prostate cancer.",
    "citation": "Rinella ME, et al. AASLD Practice Guidance on the Clinical Assessment and Management of Nonalcoholic Fatty Liver Disease. Hepatology. 2023;77(5):1797-1835. PMID: 36727674.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply AASLD guidelines for MASH with significant fibrosis: prioritize >= 7-10% body weight loss and select GLP-1 receptor agonists (semaglutide) or targeted agents (resmetirom) over ineffective ursodeoxycholic acid or vitamin E in diabetes.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate high-dose oral vitamin E 800 IU daily as preferred monotherapy' excluded: Vitamin E is not recommended for patients with diabetes due to lack of demonstrated histologic benefit and concerns regarding hemorrhagic stroke and prostate cancer.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0322",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Aldosteronism Screening and Subtyping",
    "subtopic": "Plasma Aldosterone-to-Renin Ratio (ARR) and Adrenal Vein Sampling (AVS) Prior to Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man is evaluated for refractory hypertension. Despite taking amlodipine 10 mg daily, valsartan 320 mg daily, and hydralazine 50 mg twice daily, his office blood pressure remains elevated at 158/98 mm Hg. He has had no chest pain, palpitations, or headaches. Routine serum electrolytes reveal: - Sodium: 142 mEq/L - Potassium: 3.1 mEq/L (spontaneous hypokalemia; baseline was 3.2 mEq/L 3 months ago) - Bicarbonate: 31 mEq/L - Serum creatinine: 0.9 mg/dL. He is screened for secondary hypertension. Spironolactone and eplerenone were never started. Screening reveals: - Plasma aldosterone concentration (PAC): 32 ng/dL (normal: 3\u201316 ng/dL) - Plasma renin activity (PRA): 0.4 ng/mL/hr (suppressed) - Aldosterone-to-renin ratio (ARR): 80 (positive screening cutoff: > 20\u201330 with PAC > 15 ng/dL). Confirmatory intravenous saline suppression testing confirms autonomous aldosterone secretion (post-infusion aldosterone remains elevated at 18 ng/dL). Contrast-enhanced thin-section CT of the adrenal glands demonstrates a 1.2-cm hypodense nodule in the left adrenal gland and a normal-appearing right adrenal gland. The surgical team prepares to schedule the patient for immediate left laparoscopic adrenalectomy. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Perform bilateral adrenal vein sampling (AVS) to differentiate unilateral adenoma from bilateral adrenal hyperplasia before considering surgical adrenalectomy",
        "The patient has confirmed Primary Aldosteronism (Conn syndrome), characterized by resistant hypertension, spontaneous hypokalemia, metabolic alkalosis, suppressed plasma renin activity, and elevated plasma aldosterone concentration (ARR > 30), confirmed by failure to suppress aldosterone following saline loading. THE MANDATORY SUBTYPING RULE BEFORE ADRENAL SURGERY: Primary aldosteronism is caused either by a UNILATERAL ALDOSTERONE-PRODUCING ADENOMA (APA, ~35\u201340%, curable by laparoscopic adrenalectomy) or BILATERAL IDIOPATHIC ADRENAL HYPERPLASIA (IAH, ~60%, treated medically with spironolactone/eplerenone; surgery is contraindicated). CT IMAGING OF THE ADRENAL GLANDS IS NOTORIOUSLY UNRELIABLE FOR SUBTYPING: non-functioning incidental adrenal adenomas are extraordinarily common in patients > 35\u201340 years of age, and CT can misidentify a non-functioning nodule in a patient who actually has bilateral hyperplasia or a microadenoma in the contralateral gland in up to 40% of cases. Therefore, according to Endocrine Society guidelines, IN PATIENTS DESIRING SURGICAL CURE WHO ARE > 35 YEARS OF AGE, BILATERAL ADRENAL VEIN SAMPLING (AVS) IS THE GOLD STANDARD MANDATORY STEP to measure cortisol-corrected aldosterone secretion from each adrenal vein and confirm unilateral lateralization before performing adrenalectomy."
      ],
      [
        "Proceed directly to left laparoscopic adrenalectomy based on the definitive CT visualization of a left adrenal nodule",
        "Operating based on CT alone without AVS leads to inappropriate removal of a non-functioning nodule in patients with bilateral hyperplasia or contralateral microadenoma in up to 40% of cases."
      ],
      [
        "Initiate high-dose oral potassium chloride supplements and continue current antihypertensives without hormonal therapy",
        "Potassium supplements treat hypokalemia symptomatically but fail to block mineralocorticoid receptor-mediated vascular and myocardial fibrosis driving cardiovascular morbidity."
      ],
      [
        "Perform a 24-hour urinary free cortisol test to evaluate for subclinical Cushing syndrome",
        "The patient has suppressed renin and high aldosterone with confirmed saline non-suppression; the diagnosis of primary aldosteronism is already firmly established."
      ],
      [
        "Prescribe oral amiloride 10 mg daily and advise that surgical adrenalectomy has no proven benefit over medications",
        "Unilateral aldosterone-producing adenomas achieve complete surgical cure of hypertension and hypokalemia in > 80% without lifelong medications; subtyping with AVS is essential."
      ]
    ],
    "shortestValidSolution": "Confirmed primary aldosteronism + age 44 + left adrenal nodule on CT -> perform bilateral adrenal vein sampling (AVS) to confirm lateralization before adrenalectomy.",
    "necessaryInference": "Apply Endocrine Society guidelines: CT is unreliable for subtyping in patients > 35 years; bilateral adrenal vein sampling is mandatory to prove unilateral hypersecretion before laparoscopic adrenalectomy.",
    "strongestDistractor": "Proceed directly to left laparoscopic adrenalectomy based on the definitive CT visualization of a left adrenal nodule",
    "distractorExclusion": "Adrenal incidentalomas are common (> 40% discordance between CT and AVS); removing the wrong adrenal gland fails to cure aldosteronism.",
    "citation": "Funder JW, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply Endocrine Society guidelines: CT is unreliable for subtyping in patients > 35 years; bilateral adrenal vein sampling is mandatory to prove unilateral hypersecretion before laparoscopic adrenalectomy.",
      "distractorExclusionNotes": "Strongest distractor 'Proceed directly to left laparoscopic adrenalectomy based on the definitive CT v' excluded: Adrenal incidentalomas are common (> 40% discordance between CT and AVS); removing the wrong adrenal gland fails to cure aldosteronism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0323",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Fibromyalgia Comprehensive Management",
    "subtopic": "Non-Pharmacologic Aerobic Exercise First-Line and Avoidance of Chronic Opioids",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old woman presents to the clinic with widespread, diffuse musculoskeletal pain for the past 14 months. She describes the pain as a constant, deep aching and burning sensation involving her neck, upper back, lower back, hips, and anterior chest. She reports waking up feeling completely exhausted regardless of sleep duration, and describes significant 'brain fog' and cognitive fatigue that impairs her work as an accountant. She has tried over-the-counter ibuprofen and acetaminophen with no relief. On physical examination, there is no joint swelling, erythema, warmth, or deformity. Neurological examination reveals normal cranial nerves, normal 5/5 motor strength, normal sensation, and symmetric 2+ deep tendon reflexes. Palpation of soft tissues reveals widespread, exquisite tenderness at multiple bilateral anatomical locations (occiput, trapezius, supraspinatus, second rib, lateral epicondyle, gluteal, greater trochanter, and knee). Laboratory evaluation demonstrates: - ESR: 8 mm/hr (normal: < 20 mm/hr) - CRP: 0.2 mg/dL (normal: < 0.5 mg/dL) - TSH: 1.8 microU/mL - Complete blood count: normal - ANA and Rheumatoid Factor: negative. The patient is distressed, crying in the exam room, and states: 'A previous doctor told me it was all in my head and gave me tramadol, but I don't know what to do.' Which of the following represents the most appropriate initial management approach for this patient?",
    "choices": [
      [
        "Patient education, validation of symptoms, initiation of a low-impact aerobic exercise program, and trial of an SNRI (duloxetine) or pregabalin, while strictly avoiding opioids",
        "The patient meets American College of Rheumatology (ACR) diagnostic criteria for Fibromyalgia (widespread pain index >= 7 with symptom severity score >= 5, present for >= 3 months, without an alternative inflammatory or endocrine disorder). Fibromyalgia is a centralized pain disorder (nociplastic pain) characterized by central nervous system pain amplification, altered nociceptive processing, and deficient descending inhibitory pathways. According to ACR and EULAR guidelines, MANAGEMENT REQUIRES A MULTIMODAL STRATEGY: (1) EDUCATION AND SYMPTOM VALIDATION: Reassure the patient that fibromyalgia is a real neurobiological disorder (not 'in her head' or imaginary) with normal inflammatory markers. (2) NON-PHARMACOLOGIC THERAPY IS FIRST-LINE: Graded low-impact aerobic exercise (walking, swimming, aquatic therapy) and cognitive behavioral therapy (CBT) demonstrate the strongest and most durable evidence for reducing pain and fatigue. (3) PHARMACOTHERAPY: FDA-approved medications include SNRIs (DULOXETINE or milnacipran) and alpha-2-delta calcium channel ligands (PREGABALIN), which modulate central pain pathways. CRITICAL AVOIDANCE: OPIOIDS (including tramadol, oxycodone) AND BENZODIAZEPINES ARE STRONGLY CONTRAINDICATED because they do not treat central sensitization, cause opioid-induced hyperalgesia, and lead to dependency."
      ],
      [
        "Initiate long-acting oral oxycodone 10 mg twice daily combined with short-acting hydromorphone for breakthrough pain",
        "Chronic opioids are strictly contraindicated in fibromyalgia; they cause opioid-induced hyperalgesia, worsening central pain amplification, dependency, and cognitive blunting."
      ],
      [
        "Administer a 6-week tapering course of oral prednisone 40 mg daily for systemic soft-tissue inflammation",
        "Fibromyalgia is not an inflammatory or autoimmune disorder (ESR/CRP are normal); systemic corticosteroids have zero efficacy and cause severe metabolic and bone toxicities."
      ],
      [
        "Order a full-body fluorodeoxyglucose PET-CT scan to localize occult soft-tissue inflammatory foci",
        "PET-CT scan is not indicated for fibromyalgia and exposes the patient to unnecessary radiation without altering management."
      ],
      [
        "Reassure the patient that all laboratory tests are normal and discharge without active treatment",
        "Dismissing the patient's symptoms exacerbates distress and healthcare utilization; establishing the diagnosis, providing validation, and prescribing structured exercise/SNRIs are essential."
      ]
    ],
    "shortestValidSolution": "Widespread pain + fatigue + brain fog + normal ESR/CRP + multiple tender points -> Fibromyalgia -> validation + low-impact aerobic exercise + duloxetine/pregabalin (avoid opioids).",
    "necessaryInference": "Diagnose fibromyalgia as a central nociplastic pain disorder, prescribe non-pharmacologic aerobic exercise and FDA-approved neuromodulators (duloxetine/pregabalin), and strictly avoid contraindicated chronic opioids.",
    "strongestDistractor": "Initiate long-acting oral oxycodone 10 mg twice daily combined with short-acting hydromorphone for breakthrough pain",
    "distractorExclusion": "Opioids worsen fibromyalgia through opioid-induced hyperalgesia and are strongly contraindicated by ACR and international pain guidelines.",
    "citation": "Macfarlane GJ, et al. EULAR Revised Recommendations for the Management of Fibromyalgia. Ann Rheum Dis. 2017;76(2):318-328. PMID: 27377817.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose fibromyalgia as a central nociplastic pain disorder, prescribe non-pharmacologic aerobic exercise and FDA-approved neuromodulators (duloxetine/pregabalin), and strictly avoid contraindicated chronic opioids.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate long-acting oral oxycodone 10 mg twice daily combined with short-acting' excluded: Opioids worsen fibromyalgia through opioid-induced hyperalgesia and are strongly contraindicated by ACR and international pain guidelines.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0324",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Restless Legs Syndrome (Willis-Ekbom Disease)",
    "subtopic": "Serum Ferritin Screening, Alpha-2-Delta Ligands First-Line, and Dopaminergic Augmentation",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old woman presents to the clinic complaining of an irresistible urge to move her legs that has disrupted her sleep for the past 6 months. She describes an uncomfortable 'creepy-crawly', pulling sensation deep within both calves that begins exclusively in the evening while resting on the couch watching television or lying in bed. The sensations and urge to move are temporarily relieved when she gets up and walks around the room or stretches her legs, but recur immediately when she lies back down. She has no chronic medical conditions and takes no medications. Physical examination, including complete neurological examination with motor strength, deep tendon reflexes, and sensory testing, is completely normal. Laboratory testing reveals: - Hemoglobin: 12.8 g/dL - Mean corpuscular volume (MCV): 86 fL - Serum creatinine: 0.8 mg/dL - Serum ferritin: 42 ng/mL (normal: 15\u2013150 ng/mL; target in RLS: >= 75 ng/mL) - Serum iron: 68 mcg/dL - Total iron-binding capacity: 360 mcg/dL. The medical resident recommends immediately prescribing daily oral pramipexole (a dopamine agonist). According to current American Academy of Sleep Medicine (AASM) and International RLS Study Group guidelines, which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Initiate oral iron supplementation (ferrous sulfate with vitamin C) to achieve a serum ferritin >= 75 ng/mL, and prescribe an alpha-2-delta ligand (gabapentin or pregabalin) if pharmacotherapy is required",
        "The patient meets the clinical diagnostic criteria for Restless Legs Syndrome (RLS, Willis-Ekbom disease): (1) an irresistible urge to move the legs, usually accompanied by uncomfortable sensations; (2) onset/worsening during rest or inactivity; (3) relief with movement; and (4) worsening in the evening/night. THE MANDATORY INITIAL INVESTIGATION IN ALL PATIENTS WITH RLS IS MEASURING SERUM FERRITIN. Central nervous system iron deficiency in the substantia nigra impairs dopaminergic neurotransmission and is a primary treatable driver of RLS. In patients with RLS, ORAL IRON SUPPLEMENTATION IS INDICATED IF SERUM FERRITIN IS < 75 NG/ML (even if ferritin is within the 'normal' general laboratory reference range > 15\u201320 ng/mL) with a target ferritin >= 75\u2013100 ng/mL. FIRST-LINE PHARMACOTHERAPY SHIFT: While dopamine agonists (pramipexole, ropinirole) were historically first-line, modern guidelines now recommend ALPHA-2-DELTA CALCIUM CHANNEL LIGANDS (GABAPENTIN ENACARBIL, GABAPENTIN, OR PREGABALIN) AS FIRST-LINE PHARMACOTHERAPY. Dopamine agonists carry an extraordinarily high long-term risk (> 50\u201370% over 5\u201310 years) of DOPAMINERGIC AUGMENTATION\u2014a severe drug-induced worsening where RLS symptoms begin earlier in the day, spread to arms, and become more intense."
      ],
      [
        "Initiate oral pramipexole 0.125 mg nightly as the uncontested first-line medication of choice",
        "Dopamine agonists (pramipexole, ropinirole) are no longer first-line due to high rates of severe dopaminergic augmentation; alpha-2-delta ligands (gabapentin/pregabalin) are preferred."
      ],
      [
        "Reassure the patient that her ferritin of 42 ng/mL is normal and iron replacement is contraindicated",
        "In RLS, the threshold for iron deficiency is ferritin < 75 ng/mL (not the standard lab cutoff of 15\u201320 ng/mL); iron replacement is a primary disease-modifying treatment."
      ],
      [
        "Initiate chronic oral carbidopa-levodopa 25/100 mg nightly before sleep",
        "Levodopa carries the highest rate of dopaminergic augmentation (up to 70% within 1 year) and is reserved strictly for intermittent, on-demand use (e.g., long flights), never daily maintenance."
      ],
      [
        "Prescribe daily oral clonazepam 1 mg at bedtime as primary therapy",
        "Clonazepam has weak efficacy, high risk of tolerance and dependency, and worsens sleep apnea and next-day grogginess; it is a secondary, low-preference option."
      ]
    ],
    "shortestValidSolution": "Urge to move legs at night relieved by walking + ferritin 42 ng/mL (< 75) -> RLS -> oral iron to target ferritin >= 75 + alpha-2-delta ligand (gabapentin/pregabalin) first-line (avoid dopamine agonist augmentation).",
    "necessaryInference": "Apply modern RLS guidelines: treat iron if ferritin < 75 ng/mL, and choose alpha-2-delta ligands (gabapentin) over dopamine agonists to avoid severe dopaminergic augmentation.",
    "strongestDistractor": "Initiate oral pramipexole 0.125 mg nightly as the uncontested first-line medication of choice",
    "distractorExclusion": "Pramipexole causes severe long-term dopaminergic augmentation in > 50% of patients; modern guidelines designate alpha-2-delta ligands as first-line pharmacotherapy.",
    "citation": "Silber MH, et al. The Appropriate Use of Neurostimulation in Restless Legs Syndrome: An International Restless Legs Syndrome Study Group (IRLSSG) Consensus Guideline. Sleep Med. 2021;86:146-155. PMID: 34509748.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply modern RLS guidelines: treat iron if ferritin < 75 ng/mL, and choose alpha-2-delta ligands (gabapentin) over dopamine agonists to avoid severe dopaminergic augmentation.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate oral pramipexole 0.125 mg nightly as the uncontested first-line medicat' excluded: Pramipexole causes severe long-term dopaminergic augmentation in > 50% of patients; modern guidelines designate alpha-2-delta ligands as first-line pharmacotherapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0325",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Venous Insufficiency vs Lymphedema",
    "subtopic": "Graduated Compression Therapy (20-30 mm Hg) and Ineffectiveness of Diuretics",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman presents to the clinic with bilateral lower leg swelling and heaviness that has progressed over the past 2 years. She states that her legs feel tired and ache by the end of the day, particularly after prolonged standing at her retail job, but the swelling improves significantly when she sleeps with her legs elevated on pillows. She has no shortness of breath, orthopnea, chest pain, or history of deep vein thrombosis. On physical examination, blood pressure is 126/78 mm Hg and heart rate is 70/min. Cardiopulmonary examination is normal without S3 gallop or crackles, and jugular venous pressure is normal. Examination of the lower extremities reveals bilateral 2+ pitting edema from the mid-calf down to the ankles. Sensation and peripheral arterial pulses (dorsalis pedis and posterior tibial) are normal (2+). There is prominent brown, rusty, hyperpigmented discoloration (hemosiderin deposition) around both malleoli and dilated, tortuous superficial varicosities over the medial calves. The skin of the dorsum of the feet can be easily pinched and lifted at the base of the second toe (negative Stemmer sign). Lower extremity venous duplex ultrasonography demonstrates retrograde flow > 0.5 seconds in the great saphenous veins bilaterally, with no acute or chronic deep venous thrombosis. The patient asks for a prescription for furosemide to 'get rid of the water in my legs'. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Prescribe graduated knee-high compression stockings (20 to 30 mm Hg), recommend leg elevation above the heart level, and avoid loop diuretics",
        "The patient has Chronic Venous Insufficiency (CVI) manifested by dependent pitting edema, aching relieved by elevation, superficial varicosities, stasis dermatitis with hemosiderin hyperpigmentation (extravasation of red blood cells and iron deposition), and proven valvular reflux (> 0.5 seconds) on duplex ultrasound. (A negative Stemmer sign\u2014ability to pinch skin on the dorsum of the toe\u2014rules out lymphedema). THE CORNERSTONE OF CVI MANAGEMENT IS MECHANICAL COMPRESSION AND ELEVATION: (1) Graduated knee-high compression stockings (20\u201330 mm Hg) counteract elevated venous hydrostatic pressure, promote venous return, and relieve microvascular capillary hypertension; (2) Regular leg elevation above heart level for 30 minutes 3\u20134 times daily; and (3) Daily skin moisturizers (emollients) to prevent stasis ulceration. CRITICAL PHARMACOLOGIC MISCONCEPTION: LOOP DIURETICS (FUROSEMIDE) ARE INEFFECTIVE AND INAPPROPRIATE FOR PURE CHRONIC VENOUS INSUFFICIENCY in the absence of systemic volume overload (e.g., heart failure, cirrhosis). Diuretics deplete central intravascular volume without relieving localized venous valvular reflux, precipitating pre-renal azotemia, hypokalemia, and orthostatic hypotension."
      ],
      [
        "Initiate daily oral furosemide 40 mg to eliminate dependent lower extremity edema",
        "Loop diuretics do not treat the underlying mechanical venous valvular incompetence; they deplete intravascular volume, causing pre-renal kidney injury and orthostasis."
      ],
      [
        "Perform immediate urgent bilateral saphenous vein ligation and stripping under general anesthesia",
        "Surgical stripping is invasive and largely obsolete; conservative compression therapy is first-line, and minimally invasive endovenous thermal ablation is reserved for refractory ulcers."
      ],
      [
        "Administer oral cephalexin 500 mg four times daily for bilateral lower extremity cellulitis",
        "Hemosiderin hyperpigmentation and venous stasis dermatitis are bilateral and non-infectious; misdiagnosing stasis as cellulitis leads to unnecessary, harmful antibiotic overuse."
      ],
      [
        "Apply pneumatic compression boots continuously 24 hours a day with strict bed rest",
        "Continuous bed rest causes muscle atrophy and promotes deep venous thrombosis; active ambulation while wearing compression stockings engages the calf muscle pump."
      ]
    ],
    "shortestValidSolution": "Bilateral leg edema + hemosiderin staining + negative Stemmer sign + venous reflux > 0.5 s (CVI) -> graduated compression stockings (20-30 mm Hg) + leg elevation (avoid diuretics).",
    "necessaryInference": "Diagnose chronic venous insufficiency and select graduated compression stockings and elevation as first-line therapy, while recognizing that loop diuretics are ineffective and harmful for localized venous stasis.",
    "strongestDistractor": "Initiate daily oral furosemide 40 mg to eliminate dependent lower extremity edema",
    "distractorExclusion": "Diuretics fail to correct venous valvular incompetence and cause pre-renal azotemia and orthostasis in euvolemic patients with chronic venous stasis.",
    "citation": "Gloviczki P, et al. The 2022 Society for Vascular Surgery, American Venous Forum, and American Vein and Lymphatic Society Clinical Practice Guidelines for the Management of Varicose Veins of the Lower Extremities. Part I. J Vasc Surg Venous Lymphat Disord. 2023;11(2):231-261. PMID: 36774136.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose chronic venous insufficiency and select graduated compression stockings and elevation as first-line therapy, while recognizing that loop diuretics are ineffective and harmful for localized venous stasis.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate daily oral furosemide 40 mg to eliminate dependent lower extremity edem' excluded: Diuretics fail to correct venous valvular incompetence and cause pre-renal azotemia and orthostasis in euvolemic patients with chronic venous stasis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
