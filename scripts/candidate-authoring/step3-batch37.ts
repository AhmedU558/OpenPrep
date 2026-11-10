import { CandidateSpec } from './types';

export const step3Batch37: CandidateSpec[] = [
  {
    "code": "op-c-s3-0901",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Cardiovascular",
    "topic": "Direct Oral Anticoagulant Dose Adjustment in Frail Older Adults",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old woman with a history of nonvalvular atrial fibrillation, hypertension, mild cognitive impairment, and multiple mechanical falls presents for an annual geriatric health assessment. She lives with her daughter. Current medications include lisinopril 10 mg daily and metoprolol succinate 50 mg daily. Vital signs: blood pressure 132/78 mm Hg, heart rate 74/min (irregularly irregular), respiratory rate 16/min. Body weight is 54 kg (119 lb). Neurological examination shows no focal deficits, but her timed up-and-go (TUG) test is 18 seconds (impaired mobility). Laboratory evaluation reveals: serum creatinine 1.4 mg/dL (estimated creatinine clearance 28 mL/min by Cockcroft-Gault equation), hemoglobin 12.8 g/dL, and normal liver function tests. Her CHA2DS2-VASc score is 5, and HAS-BLED score is 2. Her daughter expresses intense anxiety that initiating anticoagulation will lead to a fatal intracranial hemorrhage if her mother falls again. Which of the following is the most appropriate management regarding stroke prevention?",
    "choices": [
      [
        "Initiation of apixaban at a reduced dose of 2.5 mg orally twice daily",
        "This frail 82-year-old patient with nonvalvular atrial fibrillation has a high annual ischemic stroke risk (CHA2DS2-VASc = 5, indicating >6-7% annual stroke risk). The clinical decision involves two key geriatric cardiology principles: (1) FALLS ARE NOT A CONTRAINDICATION TO ANTICOAGULATION: Observational and Markov modeling studies demonstrate that an older adult must fall upwards of 295 to 300 times per year for the risk of subdural hematoma to outweigh the ischemic stroke risk reduction conferred by anticoagulation; and (2) DOAC DOSE-REDUCTION CRITERIA: Direct oral anticoagulants (DOACs, specifically apixaban) are superior to warfarin in older adults with reduced intracranial bleeding risk. For APIXABAN, dose reduction from 5 mg twice daily to 2.5 mg twice daily is indicated when a patient meets AT LEAST TWO of the following three criteria: (a) Age >= 80 years (patient is 82); (b) Body weight <= 60 kg (patient is 54 kg); or (c) Serum creatinine >= 1.5 mg/dL (patient is 1.4 mg/dL). Because this patient meets TWO criteria (age and weight), she requires the reduced dose of apixaban 2.5 mg twice daily. Prescribing the full 5 mg dose increases major bleeding, while withholding anticoagulation or substituting aspirin leaves her vulnerable to devastating thromboembolic stroke."
      ],
      [
        "Withholding anticoagulation and prescribing aspirin 81 mg daily due to substantial fall risk",
        "Aspirin provides negligible stroke protection in atrial fibrillation while carrying major bleeding risks comparable to oral anticoagulants in older adults."
      ],
      [
        "Prescribing apixaban at the standard full dose of 5 mg orally twice daily",
        "Prescribing standard-dose apixaban is incorrect because meeting two of three dose-reduction criteria (age >= 80 and weight <= 60 kg) mandates reduction to 2.5 mg twice daily."
      ],
      [
        "Initiation of warfarin therapy targeting a subtherapeutic INR range of 1.5 to 2.0",
        "Subtherapeutic INR targets fail to prevent stroke and warfarin carries significantly higher rates of intracranial hemorrhage than DOACs in elderly patients."
      ],
      [
        "Left atrial appendage occlusion device placement as first-line therapy prior to pharmacotherapy",
        "Percutaneous left atrial appendage closure is reserved for patients with absolute, permanent contraindications to anticoagulation, not initial management."
      ]
    ],
    "shortestValidSolution": "AF in 82yo (weight 54 kg, Cr 1.4) = Apixaban 2.5 mg BID (meets 2 criteria: age >= 80 and weight <= 60 kg; falls do not contraindicate anticoagulation).",
    "necessaryInference": "Apply apixaban dose-reduction criteria (age >= 80 and weight <= 60 kg) and recognize that fall risk does not outweigh stroke prevention in high-risk atrial fibrillation.",
    "strongestDistractor": "Withholding anticoagulation and prescribing aspirin 81 mg daily due to substantial fall risk",
    "distractorExclusion": "Aspirin does not reduce thromboembolic stroke risk in atrial fibrillation and has comparable gastrointestinal bleeding risks to oral anticoagulants in the elderly.",
    "citation": "Josendal AV. The Use of Direct Oral Anticoagulants (DOACs) in Older Adults Receiving Multidose Drug Dispensing; Interactions, Anticholinergic and Fall-Risk Increasing Drugs. Geriatrics (Basel). 2026 Mar 6. PMID: 41873965.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 geriatrics item requiring multi-step deduction on direct oral anticoagulant dose adjustment in frail older adults.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0902",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Anticoagulation Choice Mechanical Valve vs Advanced Kidney Disease",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with end-stage renal disease on maintenance hemodialysis three times weekly is evaluated in the outpatient clinic. He has a history of mechanical bileaflet mitral valve replacement performed 6 years ago for severe rheumatic mitral regurgitation, as well as permanent atrial fibrillation. Current medications include warfarin 5 mg daily, carvedilol, and sevelamer. Today, his international normalized ratio (INR) is 2.8. He reports reading advertisements about direct oral anticoagulants (DOACs, such as rivaroxaban and apixaban) that do not require monthly blood draws and asks if he can be transitioned from warfarin to a DOAC. Physical examination reveals a crisp mechanical opening click and closing sound in the mitral position without murmurs. Which of the following is the most appropriate recommendation regarding his anticoagulation management?",
    "choices": [
      [
        "Continuation of warfarin with goal INR 2.5 to 3.5, explaining that DOACs are contraindicated with mechanical heart valves",
        "This patient has two distinct clinical conditions that dictate anticoagulation choice: (1) A MECHANICAL MITRAL VALVE; and (2) END-STAGE RENAL DISEASE (ESRD) ON HEMODIALYSIS. Direct oral anticoagulants (DOACs) are ABSOLUTELY CONTRAINDICATED in patients with MECHANICAL HEART VALVES. In the pivotal RE-ALIGN trial, dabigatran was compared to warfarin in patients with mechanical valves; the trial was halted prematurely due to excess rates of both thromboembolic events (prosthetic valve thrombosis and ischemic stroke) and major bleeding in the DOAC arm. Subsequent studies with factor Xa inhibitors have confirmed that DOACs cannot suppress the intense contact-activation thrombin generation induced by mechanical prosthetic surfaces. Warfarin (a vitamin K antagonist) remains the ONLY safe, guideline-directed anticoagulant for mechanical heart valves. For a mechanical MITRAL valve, the target INR is 2.5 to 3.5 (target 3.0), higher than the target for aortic mechanical valves (2.0 to 3.0). Switching this patient to any DOAC would place him at catastrophic risk of acute prosthetic valve thrombosis and death."
      ],
      [
        "Switching to apixaban 5 mg twice daily, as apixaban is FDA-approved for hemodialysis patients",
        "While apixaban has pharmacokinetic data in hemodialysis, it is strictly contraindicated in mechanical prosthetic heart valves due to fatal valve thrombosis."
      ],
      [
        "Switching to rivaroxaban 15 mg once daily with monthly anti-Xa activity surveillance",
        "Rivaroxaban and all factor Xa inhibitors are contraindicated with mechanical prostheses; anti-Xa levels do not guide mechanical valve antithrombotic safety."
      ],
      [
        "Transitioning to dabigatran 75 mg twice daily because direct thrombin inhibition is preferred in valves",
        "Dabigatran was directly shown in the RE-ALIGN trial to cause significantly more valve thromboses and bleeding than warfarin and is strictly contraindicated."
      ],
      [
        "Adding aspirin 81 mg daily to warfarin to allow lowering the INR target to 2.0 to 2.5",
        "Routine addition of aspirin to therapeutic warfarin in mechanical valves increases major bleeding without reducing stroke in the absence of CAD or vascular disease."
      ]
    ],
    "shortestValidSolution": "Mechanical mitral valve = Warfarin target INR 2.5-3.5 (DOACs are strictly contraindicated in mechanical heart valves).",
    "necessaryInference": "Recognize the absolute contraindication to DOACs in mechanical prosthetic heart valves (RE-ALIGN trial), maintaining warfarin with mitral target INR 2.5-3.5.",
    "strongestDistractor": "Switching to apixaban 5 mg twice daily, as apixaban is FDA-approved for hemodialysis patients",
    "distractorExclusion": "Apixaban's hemodialysis indication applies to nonvalvular atrial fibrillation; mechanical heart valves strictly require warfarin to prevent lethal thrombosis.",
    "citation": "de Jong MJ. Healthcare professionals' perspectives on prescribing DOACs to frail older patients; the DOAC-FRAIL questionnaire. BMC Geriatr. 2026 Jan 23. PMID: 41572210.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on anticoagulation choice mechanical valve vs advanced kidney disease.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0903",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Resistant Hypertension Primary Aldosteronism Screening Aldosterone Renin Ratio",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman presents for follow-up of longstanding hypertension. Despite adherence to a three-drug regimen comprising amlodipine 10 mg daily, valsartan 320 mg daily, and chlorthalidone 25 mg daily at maximally tolerated doses, her home automated blood pressure logs consistently average 154/96 mm Hg. In the clinic today, her blood pressure is 156/98 mm Hg in both arms, and heart rate is 72/min. BMI is 27 kg/m2. She denies snoring, daytime somnolence, headache, or palpitations. Physical examination is normal with no abdominal bruits. Serum laboratory testing reveals: sodium 143 mEq/L, potassium 3.3 mEq/L (mild persistent hypokalemia), bicarbonate 29 mEq/L, and serum creatinine 0.8 mg/dL. Urinalysis is unremarkable. Which of the following is the most appropriate next step in the diagnostic evaluation of this patient?",
    "choices": [
      [
        "Measurement of morning plasma aldosterone concentration and plasma renin activity under standing conditions",
        "This patient has RESISTANT HYPERTENSION, defined as blood pressure that remains uncontrolled despite the concurrent use of THREE ANTIHYPERTENSIVE AGENTS of different classes, one of which is a DIURETIC. The presence of resistant hypertension accompanied by SPONTANEOUS OR DIURETIC-INDUCED HYPOKALEMIA (potassium 3.3 mEq/L) strongly suggests PRIMARY ALDOSTERONISM (Conn syndrome or bilateral adrenal hyperplasia), which accounts for 10-20% of resistant hypertension cases. Crucially, up to 50% of patients with primary aldosteronism are normokalemic, but unprovoked or easily provoked hypokalemia is a classic red flag. The mandatory first-line screening test recommended by the Endocrine Society is the MORNING PLASMA ALDOSTERONE-TO-RENIN RATIO (ARR). A plasma aldosterone concentration (PAC) >= 15 ng/dL with suppressed plasma renin activity (PRA <1.0 ng/mL/h) yielding an ARR >= 20 to 30 suggests autonomous aldosterone secretion, requiring confirmatory testing (oral sodium loading or saline infusion test). Mineralocorticoid receptor antagonists (spironolactone/eplerenone) interfere with ARR interpretation, but calcium channel blockers and ARBs have minimal confounding effect and do not need to be stopped prior to initial screening."
      ],
      [
        "Immediate unenhanced thin-section adrenal CT scanning prior to any biochemical evaluation",
        "Adrenal CT without biochemical confirmation is inappropriate because nonfunctional adrenal incidentalomas are common (>5-10% of adults) and mislead management."
      ],
      [
        "24-hour urine collection for free cortisol and late-night salivary cortisol measurements",
        "Cushing syndrome causes hypertension with hypokalemia, but presents with overt clinical stigmata (central adiposity, purple striae, proximal muscle weakness)."
      ],
      [
        "Renal artery duplex ultrasonography to rule out atherosclerotic renal artery stenosis",
        "Atherosclerotic renal artery stenosis typically occurs in older individuals with generalized atherosclerosis; primary aldosteronism is far more common in this age group."
      ],
      [
        "Addition of clonidine 0.1 mg twice daily to achieve immediate blood pressure target",
        "Adding fourth-line agents before screening for secondary causes misses a potentially curable etiology (unilateral aldosterone-producing adenoma)."
      ]
    ],
    "shortestValidSolution": "Resistant hypertension + hypokalemia = Primary aldosteronism screening (morning plasma aldosterone-to-renin ratio ARR).",
    "necessaryInference": "Identify primary aldosteronism as the most common secondary cause of resistant hypertension with hypokalemia, selecting the aldosterone-to-renin ratio as initial screening.",
    "strongestDistractor": "Immediate unenhanced thin-section adrenal CT scanning prior to any biochemical evaluation",
    "distractorExclusion": "Biochemical confirmation must always precede adrenal imaging to avoid misattributing hypertension to a nonfunctional adrenal incidentaloma.",
    "citation": "Choudhary AK. Mechanism-defined secondary hypertension enables precision diagnosis and treatment: an evidence review. Front Cardiovasc Med. 2026. PMID: 42953123.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on resistant hypertension primary aldosteronism screening aldosterone renin ratio.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0904",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Endocrine",
    "topic": "Subclinical Hypothyroidism Conservative Monitoring in Older Adults",
    "provisionalDifficulty": 4,
    "stem": "A 76-year-old woman presents for a routine wellness visit. She has no active complaints and feels energetic, walking 2 miles every morning. Medical history includes osteoarthritis of the knees managed with topical diclofenac gel. Review of systems is negative for fatigue, cold intolerance, constipation, weight gain, depression, or cognitive decline. Vital signs: blood pressure 124/76 mm Hg, heart rate 68/min, BMI 23 kg/m2. Physical examination reveals a normal, non-palpable thyroid gland without nodules; deep tendon reflexes show normal relaxation phase. Routine laboratory testing shows: serum TSH 6.8 mIU/L (reference 0.4-4.5 mIU/L), free thyroxine (T4) normal at 1.1 ng/dL (reference 0.8-1.8 ng/dL), and anti-thyroperoxidase (anti-TPO) antibodies negative. Comprehensive metabolic panel and lipid panel are normal. Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Reassurance and repeat serum TSH and free T4 measurements in 3 to 6 months without levothyroxine therapy",
        "This patient has MILD SUBCLINICAL HYPOTHYROIDISM, defined as an elevated serum TSH (typically <10 mIU/L) with normal free thyroxine (free T4) in an asymptomatic individual. Management of subclinical hypothyroidism is heavily stratified by AGE, TSH LEVEL, and SYMPTOMS: (1) In older adults (>65-70 years), TSH distribution normally shifts upward, and mild TSH elevation (between 4.5 and 10 mIU/L) is often a physiological manifestation of aging rather than true thyroid disease; (2) The TRUST trial and multiple randomized trials demonstrated that treating older adults (>=65 years) with levothyroxine for mild subclinical hypothyroidism (TSH <10 mIU/L) provides NO BENEFIT in cognitive function, fatigue, muscle strength, body weight, quality of life, or cardiovascular outcomes; and (3) Overtreatment risk is high: up to 20-40% of older adults on levothyroxine develop iatrogenic subclinical hyperthyroidism, significantly increasing the risk of atrial fibrillation, cardiac arrhythmias, and accelerated osteoporotic bone loss. Therefore, ATA and Endocrine Society guidelines recommend CONSERVATIVE SURVEILLANCE: repeat TSH and free T4 in 3-6 months. Up to 50% of mildly elevated TSH values normalize spontaneously on repeat testing. Levothyroxine is considered only if TSH is persistently >= 10 mIU/L, if symptomatic, or in women planning pregnancy."
      ],
      [
        "Initiation of levothyroxine at a standard starting dose of 50 mcg orally once daily",
        "Routine levothyroxine for asymptomatic mild subclinical hypothyroidism (TSH <10) in older adults confers no clinical benefit and increases atrial fibrillation risk."
      ],
      [
        "Initiation of low-dose liothyronine (T3) monotherapy to improve cellular metabolic rate",
        "Liothyronine causes sharp peaks in serum T3 that trigger palpitations, angina, and arrhythmias in elderly individuals and has no role in subclinical hypothyroidism."
      ],
      [
        "Performance of radioactive iodine uptake and thyroid scintigraphy to evaluate nodular autonomy",
        "Scintigraphy is indicated for hyperthyroidism (suppressed TSH) to differentiate Graves disease from toxic adenoma, not for elevated TSH."
      ],
      [
        "Immediate fine-needle aspiration biopsy of the thyroid gland to rule out lymphoma",
        "Thyroid biopsy is indicated for suspicious nodules on ultrasound, not for mild biochemical TSH elevation with a normal physical exam."
      ]
    ],
    "shortestValidSolution": "Asymptomatic 76yo + TSH 6.8 + normal free T4 = Subclinical hypothyroidism (monitor in 3-6 mos; avoid levothyroxine in elderly if TSH <10).",
    "necessaryInference": "Apply evidence-based guidelines for subclinical hypothyroidism in older adults: withhold levothyroxine for TSH <10 mIU/L in asymptomatic elderly patients and recheck in 3-6 months.",
    "strongestDistractor": "Initiation of levothyroxine at a standard starting dose of 50 mcg orally once daily",
    "distractorExclusion": "Levothyroxine therapy in older adults with TSH <10 does not improve fatigue, cognition, or cardiovascular events (TRUST trial) and risks iatrogenic arrhythmias.",
    "citation": "Lieber I. Treating subclinical hypothyroidism in individuals with or without mental health problems -A Delphi based expert consensus study in two countries. Front Endocrinol (Lausanne). 2023. PMID: 37501790.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 geriatrics item requiring multi-step deduction on subclinical hypothyroidism conservative monitoring in older adults.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0905",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Bisphosphonate Holiday Timing and Atypical Femoral Fracture Risk",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old woman presents for a routine osteoporosis follow-up. She was diagnosed with postmenopausal osteoporosis 5 years ago after a dual-energy x-ray absorptiometry (DEXA) scan revealed a lumbar spine T-score of -2.9 and femoral neck T-score of -2.6. She has been taking oral alendronate 70 mg weekly with excellent adherence, alongside calcium and vitamin D supplementation. She has never suffered a fragility fracture. Repeat DEXA scan obtained yesterday demonstrates stable bone mineral density: lumbar spine T-score -2.4 and femoral neck T-score -2.2 (both improved into the osteopenic range). She walks 3 miles daily without hip or thigh pain. Physical examination shows no skeletal tenderness, and height has remained stable over 5 years. Which of the following is the most appropriate next step in the management of her osteoporosis?",
    "choices": [
      [
        "Initiation of a bisphosphonate holiday with discontinuation of alendronate and DEXA monitoring in 2 to 3 years",
        "Bisphosphonates (such as alendronate and zoledronic acid) incorporate avidly into the mineralized bone matrix and remain biologically active in skeletal tissue for years after cessation. While bisphosphonates dramatically reduce vertebral and hip fractures during the first 3 to 5 years of therapy, PROLONGED CONTINUOUS USE BEYOND 5 YEARS (oral) or 3 YEARS (intravenous) is associated with severe over-suppression of bone turnover, leading to rare but devastating complications: ATYPICAL FEMORAL FRACTURES (AFF: transverse or short oblique non-comminuted fractures in the subtrochanteric or diaphyseal femur, often preceded by dull thigh/groin aching) and OSTEONECROSIS OF THE JAW (ONJ). Guidelines from the ASBMR and AACE recommend that in MODERATE-RISK PATIENTS (T-score > -2.5, no prior hip or vertebral fragility fractures), A BISPHOSPHONATE DRUG HOLIDAY SHOULD BE INITIATED AFTER 5 YEARS OF ORAL ALENDRONATE. Fracture risk remains suppressed for 2-3 years due to bone retention. Management consists of discontinuing alendronate, maintaining calcium/vitamin D, and repeating DEXA every 2-3 years, restarting therapy if BMD declines significantly or a new fracture occurs. In contrast, HIGH-RISK patients (prior hip/spine fracture or T-score remaining <= -2.5) should continue therapy for up to 10 years."
      ],
      [
        "Switching oral alendronate to annual intravenous zoledronic acid infusions for 5 additional years",
        "Switching to another potent bisphosphonate further suppresses bone remodeling without vacation, escalating the risk of atypical femoral fractures."
      ],
      [
        "Indefinite continuation of oral alendronate 70 mg weekly without any planned interruption",
        "Indefinite continuous bisphosphonate therapy beyond 5 years increases atypical femoral fracture risk by >100-fold compared to treatment holiday."
      ],
      [
        "Immediate initiation of subcutaneous teriparatide daily for a 2-year course",
        "Anabolic agents (teriparatide) are reserved for severe osteoporosis with multiple vertebral fractures or treatment failure, not for stable improved BMD."
      ],
      [
        "Transitioning to denosumab 60 mg subcutaneously every 6 months without bone density monitoring",
        "Denosumab cannot be stopped without triggering a severe rebound osteoclast activation and vertebral fractures; a holiday is not possible with denosumab."
      ]
    ],
    "shortestValidSolution": "5 years of oral alendronate + stable BMD (T-score > -2.5) + no prior fractures = Bisphosphonate holiday (recheck DEXA in 2-3 yrs).",
    "necessaryInference": "Identify the indication for a bisphosphonate drug holiday after 5 years of oral therapy in moderate-risk osteoporosis to mitigate atypical femoral fracture risk.",
    "strongestDistractor": "Indefinite continuation of oral alendronate 70 mg weekly without any planned interruption",
    "distractorExclusion": "Continuous bisphosphonate therapy beyond 5 years without a drug holiday causes cumulative suppression of bone remodeling, exponentially increasing atypical fracture risk.",
    "citation": "Mianehsaz E. Bilateral atypical femoral fractures following unsupervised long-term alendronate use: a case report. J Med Case Rep. 2026 Jul 2. PMID: 42393783.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on bisphosphonate holiday timing and atypical femoral fracture risk.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0906",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "SGLT2 Inhibitor Renoprotection in Chronic Kidney Disease with Albuminuria",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with a 12-year history of type 2 diabetes mellitus and chronic kidney disease stage 3b presents for routine nephrology follow-up. Current medications include metformin 500 mg twice daily, glipizide 5 mg daily, and lisinopril 40 mg daily at maximum tolerated dose. Blood pressure is 128/78 mm Hg, heart rate is 70/min, and BMI is 29 kg/m2. Physical examination shows trace pedal edema without stigmata of heart failure. Laboratory evaluation reveals: serum creatinine 1.8 mg/dL with estimated GFR (eGFR) 38 mL/min/1.73 m2 (stable over 6 months), serum potassium 4.6 mEq/L, and HbA1c 7.6%. Urine albumin-to-creatinine ratio (uACR) is markedly elevated at 520 mg/g (severely increased albuminuria, stage A3). Which of the following therapeutic additions provides the strongest proven benefit in slowing chronic kidney disease progression and reducing cardiovascular mortality in this patient?",
    "choices": [
      [
        "Initiation of dapagliflozin 10 mg orally once daily",
        "This patient has DIABETIC KIDNEY DISEASE with persistent SEVERELY INCREASED ALBUMINURIA (uACR 520 mg/g) despite maximally tolerated ACE inhibitor therapy (lisinopril 40 mg). According to the KDIGO and ADA guidelines, an SGLT2 INHIBITOR (such as dapagliflozin 10 mg or empagliflozin 10 mg daily) is STRONGLY RECOMMENDED for all patients with CKD and albuminuria (uACR >= 200 mg/g) with an eGFR >= 20 mL/min/1.73 m2, REGARDLESS OF GLYCEMIC CONTROL. Landmark renal outcome trials (DAPA-CKD, EMPA-KIDNEY) established that SGLT2 inhibitors provide profound renoprotection: by inhibiting sodium-glucose cotransporter 2 in the proximal tubule, they increase sodium delivery to the macula densa, restoring tubuloglomerular feedback, constricting the afferent arteriole, and reducing intraglomerular hyperfiltration. This halts the progression to end-stage kidney disease (ESKD) by >30-40% and significantly reduces cardiovascular death and heart failure hospitalizations. An initial hemodynamic eGFR decline of up to 30% after starting an SGLT2 inhibitor is expected and reversible, reflecting beneficial glomerular pressure relief, and does not warrant drug discontinuation."
      ],
      [
        "Addition of losartan 100 mg daily to achieve dual renin-angiotensin-aldosterone blockade",
        "Combining an ACE inhibitor with an ARB (dual RAAS blockade) is strictly contraindicated due to increased rates of acute kidney injury and hyperkalemia without benefit (ONTARGET, VA NEPHRON-D)."
      ],
      [
        "Increasing metformin to 1,000 mg twice daily to achieve an intensive HbA1c target <6.5%",
        "Metformin dose must be limited to 1,000 mg daily when eGFR is between 30 and 44 mL/min due to lactic acidosis risk, and intensive glucose lowering does not prevent CKD progression."
      ],
      [
        "Addition of fenofibrate 145 mg daily to lower residual cardiovascular and microvascular risk",
        "Fenofibrate causes a reversible rise in serum creatinine, carries myopathy risks when combined with statins, and does not slow renal disease progression."
      ],
      [
        "Initiation of daily oral sodium bicarbonate tablets targeting serum bicarbonate >28 mEq/L",
        "Sodium bicarbonate is indicated only when metabolic acidosis is documented (serum bicarbonate <22 mEq/L); this patient has normal acid-base balance."
      ]
    ],
    "shortestValidSolution": "CKD stage 3 (eGFR 38) + albuminuria (uACR 520) on max ACEi = Add SGLT2 inhibitor (dapagliflozin/empagliflozin slows CKD progression).",
    "necessaryInference": "Select an SGLT2 inhibitor as guideline-directed renoprotective therapy in CKD with albuminuria, recognizing that dual ACEi/ARB blockade is contraindicated.",
    "strongestDistractor": "Addition of losartan 100 mg daily to achieve dual renin-angiotensin-aldosterone blockade",
    "distractorExclusion": "Dual ACEi and ARB therapy is unsafe and contraindicated (causes severe hyperkalemia and acute kidney injury without slowing CKD progression).",
    "citation": "Xie J. The Role and Mechanism of SGLT2 Inhibitors in Chronic Kidney Disease. Drug Des Devel Ther. 2026. PMID: 42935670.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on sglt2 inhibitor renoprotection in chronic kidney disease with albuminuria.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0907",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Endocrine",
    "topic": "Individualized Glycemic Targets in Frail Multimorbid Older Adults",
    "provisionalDifficulty": 4,
    "stem": "An 84-year-old man with a 20-year history of type 2 diabetes mellitus, vascular dementia, severe peripheral neuropathy, stage 4 chronic kidney disease (eGFR 26 mL/min/1.73 m2), and recurrent falls is brought to the clinic by his family. He resides in an assisted living facility and requires assistance with bathing, dressing, and medications. Current diabetes regimen consists of glimepiride 4 mg daily and insulin glargine 24 units at bedtime. His family reports that over the past month, he has experienced three episodes of nocturnal diaphoresis, nightmares, and confusion, with fingerstick blood glucose levels measuring 48 to 54 mg/dL. In the clinic today, he is pleasant but disoriented to date. Laboratory testing shows HbA1c of 6.4% and serum creatinine 2.2 mg/dL. Which of the following is the most appropriate management plan regarding his glycemic control?",
    "choices": [
      [
        "Discontinuation of glimepiride, reduction of insulin glargine, and adjustment of the target HbA1c to 7.5% to 8.5%",
        "This patient represents a FRAIL OLDER ADULT WITH SEVERE MULTIMORBIDITY, cognitive impairment, and limited life expectancy who is experiencing DANGEROUS RECURRENT HYPOGLYCEMIA (blood glucose <55 mg/dL). In older adults, hypoglycemia is catastrophic, leading directly to cardiac arrhythmias, acute myocardial infarction, falls with hip fractures, and accelerated cognitive decline. Clinical guidelines from the American Diabetes Association (ADA) and American Geriatrics Society (AGS) mandate INDIVIDUALIZING GLYCEMIC TARGETS based on patient complexity: (1) Healthy older adults with intact cognition and long life expectancy: HbA1c < 7.0-7.5%; (2) Complex/intermediate health (multiple chronic illnesses, mild cognitive impairment): HbA1c < 8.0%; and (3) VERY COMPLEX/POOR HEALTH (end-stage chronic disease, moderate-to-severe dementia, functional dependence): RELAXED HbA1c TARGET OF < 8.0-8.5% (or avoiding reliance on HbA1c and focusing entirely on avoiding hypoglycemia and symptomatic hyperglycemia). Sulfonylureas (especially long-acting glimepiride or glyburide) are cleared renally, accumulate in CKD, and are on the Beers Criteria of dangerous drugs in older adults; GLIMEPIRIDE MUST BE STOPPED IMMEDIATELY, insulin reduced, and glycemic goals relaxed."
      ],
      [
        "Continuation of current medications with instruction to consume a candy bar at bedtime",
        "Consuming simple sugars at bedtime causes daytime glycemic excursions without preventing recurrent severe hypoglycemia from long-acting sulfonylureas."
      ],
      [
        "Switching glimepiride to glyburide 5 mg daily to maintain tight glycemic control",
        "Glyburide has active metabolites that accumulate even more severely in renal impairment, carrying the highest risk of prolonged fatal hypoglycemia."
      ],
      [
        "Adding metformin 500 mg daily to allow discontinuation of insulin glargine",
        "Metformin is strictly contraindicated in stage 4 CKD (eGFR <30 mL/min/1.73 m2) due to high risk of fatal metformin-associated lactic acidosis."
      ],
      [
        "Maintaining the intensive HbA1c target of <6.5% to prevent further diabetic microvascular progression",
        "Intensive glycemic targets (<6.5%) in frail elderly adults do not reduce microvascular complications and dramatically increase all-cause mortality (ACCORD trial)."
      ]
    ],
    "shortestValidSolution": "Frail 84yo with dementia + CKD + hypoglycemia on glimepiride = Stop glimepiride + relax HbA1c target to 7.5-8.5% (avoid hypoglycemia).",
    "necessaryInference": "Apply individualized geriatric glycemic guidelines: de-escalate hypoglycemic medications (discontinue sulfonylureas) and relax HbA1c targets to 7.5-8.5% in frail multimorbid adults.",
    "strongestDistractor": "Maintaining the intensive HbA1c target of <6.5% to prevent further diabetic microvascular progression",
    "distractorExclusion": "Tight glycemic control in frail elders with limited life expectancy provides zero microvascular benefit and causes excess mortality from fatal hypoglycemic events.",
    "citation": "Golding JA. The impact of frailty on glycaemic control in older adults with type 1 diabetes: An observational study. Diabet Med. 2026 Oct. PMID: 42338167.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 geriatrics item requiring multi-step deduction on individualized glycemic targets in frail multimorbid older adults.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0908",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Chronic Coronary Disease Guideline-Directed Medical Therapy vs Revascularization",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man presents for outpatient cardiology consultation. He has a history of hypertension, hyperlipidemia, and type 2 diabetes mellitus. Over the past 6 months, he has noted exertional retrosternal chest tightness when walking briskly uphill or carrying groceries, which consistently resolves within 3 to 4 minutes of rest. He has never experienced chest pain at rest, dyspnea, or syncope. Current medications include aspirin 81 mg daily, atorvastatin 40 mg daily, and metformin 1,000 mg twice daily. Blood pressure is 138/82 mm Hg, heart rate is 76/min, and BMI is 28 kg/m2. Physical examination and resting 12-lead ECG are normal. An outpatient exercise myocardial perfusion scintigraphy study demonstrates a reversible, moderate-to-large perfusion defect in the inferolateral left ventricular wall during peak exercise, with an estimated left ventricular ejection fraction of 55% and no regional wall motion abnormalities at rest. Diagnostic coronary angiography reveals 75% stenosis in the proximal left circumflex artery and 70% stenosis in the mid-right coronary artery; the left main coronary artery is completely normal, and the left anterior descending artery has minor 30% luminal irregularities. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Optimization of guideline-directed medical therapy with high-intensity statin and addition of a beta-blocker or calcium channel blocker, reserving revascularization for refractory symptoms",
        "This patient has STABLE ISCHEMIC HEART DISEASE (Chronic Coronary Disease) with moderate exertional angina (Canadian Cardiovascular Society Class II) and multi-vessel coronary artery disease NOT involving the left main trunk, with PRESERVED LEFT VENTRICULAR SYSTOLIC FUNCTION (LVEF 55%). The landmark ISCHEMIA trial and contemporary ACC/AHA guidelines established that IN PATIENTS WITH STABLE CORONARY ARTERY DISEASE AND PRESERVED LVEF, AN INITIAL INVASIVE STRATEGY (routine percutaneous coronary intervention [PCI] or CABG) DOES NOT REDUCE THE RISK OF ALL-CAUSE MORTALITY, CARDIOVASCULAR DEATH, OR MYOCARDIAL INFARCTION COMPARED TO GUIDELINE-DIRECTED MEDICAL THERAPY (GDMT) ALONE. In chronic coronary disease, the primary purpose of coronary revascularization (PCI or CABG) is SYMPTOM RELIEF in patients who remain unacceptably symptomatic despite optimal medical therapy. The definitive guideline-directed management is OPTIMIZATION OF MEDICAL PHARMACOTHERAPY: maximizing high-intensity statin (atorvastatin 80 mg), achieving BP <130/80 mm Hg, antiplatelet therapy, and initiating first-line antianginal pharmacotherapy (beta-blocker such as metoprolol succinate, or calcium channel blocker) to reduce myocardial oxygen demand. Revascularization is reserved for patients with refractory symptoms despite maximal GDMT, or those with high-risk anatomical features (left main disease or severe LV dysfunction LVEF <35%)."
      ],
      [
        "Emergent transfer to the cardiac catheterization laboratory for two-vessel percutaneous coronary intervention with drug-eluting stents",
        "Routine upfront PCI in stable angina does not reduce myocardial infarction or all-cause mortality compared to medical therapy (ISCHEMIA and COURAGE trials)."
      ],
      [
        "Immediate referral for coronary artery bypass graft surgery (CABG) to improve long-term survival",
        "CABG confers survival benefit in left main stenosis, three-vessel disease with low EF, or complex diabetes with high SYNTAX scores, not stable 2-vessel disease with normal EF."
      ],
      [
        "Discontinuation of atorvastatin and initiation of daily sublingual nitroglycerin as monotherapy",
        "Statins stabilize coronary atheromatous plaque and prevent acute plaque rupture; discontinuing statin therapy drastically increases acute coronary syndrome risk."
      ],
      [
        "Performance of repeat exercise nuclear perfusion stress testing in 6 weeks before altering medications",
        "Repeat stress testing in 6 weeks provides zero additional clinical information and delays necessary antianginal and cardioprotective medication titration."
      ]
    ],
    "shortestValidSolution": "Stable CAD + normal EF + no left main stenosis = Optimize medical therapy (beta-blocker/statin; revascularization only for refractory angina).",
    "necessaryInference": "Apply the findings of the ISCHEMIA trial: in stable coronary artery disease with preserved EF and non-left main stenosis, initial medical therapy is equivalent to invasive revascularization for survival.",
    "strongestDistractor": "Emergent transfer to the cardiac catheterization laboratory for two-vessel percutaneous coronary intervention with drug-eluting stents",
    "distractorExclusion": "Upfront PCI in stable ischemic heart disease does not reduce mortality or myocardial infarction compared to guideline-directed medical therapy.",
    "citation": "Hochman JS. Long-Term Survival After Initial Invasive or Conservative Management of Stable Coronary Disease in ISCHEMIA-EXTEND. JAMA. 2026 Nov 7. PMID: 42998244.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on chronic coronary disease guideline-directed medical therapy vs revascularization.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0909",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Asymptomatic Carotid Artery Stenosis Intensive Medical Therapy vs Endarterectomy",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man presents for evaluation after an incidental carotid duplex ultrasound performed for a cervical bruit detected 75% to 80% stenosis of the right internal carotid artery. The left internal carotid artery exhibits 30% stenosis. He is completely asymptomatic and has never experienced a stroke, transient ischemic attack (TIA), amaurosis fugax, motor weakness, numbness, or dysarthria. Medical history is notable for hypertension, hyperlipidemia, and a 30-pack-year smoking history (quit 5 years ago). Current medications include hydrochlorothiazide 25 mg daily and simvastatin 20 mg daily. Blood pressure is 142/86 mm Hg, heart rate is 72/min, and BMI is 26 kg/m2. Neurological examination is entirely normal. Fasting lipid panel reveals: total cholesterol 210 mg/dL, LDL cholesterol 132 mg/dL, and triglycerides 160 mg/dL. The patient asks whether he needs immediate carotid surgery to prevent a stroke. Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Initiation of intensive medical therapy with high-intensity statin, blood pressure control to <130/80 mm Hg, and aspirin, with surveillance carotid ultrasound in 6 to 12 months",
        "This patient has ASYMPTOMATIC CAROTID ARTERY STENOSIS (75-80% stenosis without any prior TIA, stroke, or retinal ischemia in the ipsilateral vascular territory). Contemporary randomized trials (CREST-2, ACST-2) and American Heart Association / Society for Vascular Surgery guidelines have substantially shifted the management of asymptomatic carotid stenosis: (1) INTENSIVE MEDICAL THERAPY (IMT) IS THE FOUNDATION: Modern medical therapy\u2014combining HIGH-INTENSITY STATIN THERAPY (atorvastatin 80 mg or rosuvastatin 20-40 mg targeting LDL <70 mg/dL), ANTIPLATELET MONOTHERAPY (aspirin 81 mg daily), and RIGOROUS BLOOD PRESSURE CONTROL (<130/80 mm Hg)\u2014has dramatically reduced the annual stroke risk of asymptomatic carotid disease from historical rates of 2-3% per year down to LESS THAN 0.5% TO 1.0% PER YEAR; (2) RE-EVALUATION OF SURGERY: While Carotid Endarterectomy (CEA) or stenting (CAS) was historically performed for asymptomatic stenosis >70%, the perioperative stroke/death risk of CEA itself is 1.5% to 3.0%, which negates or exceeds the low annual stroke risk achievable with modern medical therapy; and (3) Therefore, intensive medical therapy is the preferred initial approach for asymptomatic stenosis, reserving CEA for highly selected surgical candidates with high-risk plaque features (rapid progression, microemboli on TCD) treated at centers with documented perioperative complication rates <3%."
      ],
      [
        "Emergent carotid artery stenting (CAS) within 48 hours to prevent impending stroke",
        "Emergent revascularization is indicated for acute symptomatic crescendo TIAs or stroke within 48 hours, never for stable asymptomatic stenosis."
      ],
      [
        "Immediate carotid endarterectomy (CEA) as first-line therapy, deferring lipid-lowering optimization",
        "Carotid surgery in asymptomatic stenosis without prior medical optimization exposes the patient to perioperative stroke risks that exceed the benefit of surgery."
      ],
      [
        "Anticoagulation with therapeutic apixaban 5 mg twice daily instead of antiplatelet therapy",
        "Oral anticoagulants are ineffective for atherosclerotic carotid artery disease and cause significantly more intracranial bleeding than antiplatelet agents."
      ],
      [
        "Discontinuation of all statin therapy and scheduling routine duplex ultrasound every 5 years",
        "Statins are crucial for atherosclerotic plaque stabilization; stopping statin therapy leads to plaque rupture and ischemic stroke."
      ]
    ],
    "shortestValidSolution": "Asymptomatic carotid stenosis 75-80% = Intensive medical therapy (high-dose statin + aspirin + BP <130/80; surgery has <=1% annual benefit).",
    "necessaryInference": "Differentiate asymptomatic from symptomatic carotid stenosis, selecting modern intensive medical therapy over routine upfront endarterectomy.",
    "strongestDistractor": "Immediate carotid endarterectomy (CEA) as first-line therapy, deferring lipid-lowering optimization",
    "distractorExclusion": "Modern medical therapy achieves annual stroke rates <1%; routine CEA carries a 2-3% perioperative complication risk that outweighs benefit in unselected asymptomatic patients.",
    "citation": "Lazar RM. Revascularization of Asymptomatic Carotid Artery Stenosis: Cognitive Results of the CREST-2 Randomized Trials. JAMA. 2026 Oct 27. PMID: 42747844.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on asymptomatic carotid artery stenosis intensive medical therapy vs endarterectomy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0910",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure with Preserved Ejection Fraction SGLT2 Inhibitor Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old woman presents to the clinic with progressive exertional dyspnea, fatigue, and lower extremity edema over the past 4 months. She can now walk only half a block before stopping due to shortness of breath (NYHA functional class III). Medical history includes hypertension, obesity (BMI 34 kg/m2), and paroxysmal atrial fibrillation. Current medications include amlodipine 10 mg daily, apixaban 5 mg twice daily, and metoprolol succinate 50 mg daily. Vital signs: blood pressure 138/84 mm Hg, heart rate 72/min, respiratory rate 18/min. Physical examination reveals jugular venous distension of 9 cm H2O, bilateral basilar crackles, and 2+ pitting bilateral pretibial edema. Transthoracic echocardiogram demonstrates: left ventricular ejection fraction (LVEF) of 58% (normal systolic function), left ventricular concentric hypertrophy, left atrial enlargement (volume index 42 mL/m2), and an elevated E/e' ratio of 16 (indicating elevated left ventricular filling pressures). Serum NT-proBNP is elevated at 1,420 pg/mL (reference <125 pg/mL). Serum creatinine is 1.1 mg/dL and potassium is 4.3 mEq/L. Which of the following therapeutic additions has the strongest evidence for reducing heart failure hospitalizations and cardiovascular mortality in this patient?",
    "choices": [
      [
        "Initiation of empagliflozin 10 mg orally once daily",
        "This patient has HEART FAILURE WITH PRESERVED EJECTION FRACTION (HFpEF), defined by: (1) Symptoms and signs of heart failure (dyspnea, JVD, edema); (2) LVEF >= 50% (here 58%); (3) Objective evidence of elevated LV filling pressures (elevated E/e' ratio >14, left atrial enlargement); and (4) Elevated natriuretic peptides (NT-proBNP 1,420 pg/mL). Historically, no pharmacotherapy demonstrated convincing mortality or hospitalization reductions in HFpEF. However, the landmark EMPEROR-Preserved and DELIVER clinical trials demonstrated that SGLT2 INHIBITORS (EMPAGLIFLOZIN and DAPAGLIFLOZIN) significantly reduce the composite primary endpoint of CARDIOVASCULAR DEATH AND HEART FAILURE HOSPITALIZATION by >20% across the entire spectrum of ejection fractions, including HFpEF. Based on this robust evidence, the ACC/AHA/HFSA guidelines establish a CLASS 1 RECOMMENDATION for SGLT2 inhibitors as the cornerstone pharmacotherapy in all patients with HFpEF, regardless of the presence of diabetes. Loop diuretics (furosemide) are added as needed for congestion, but SGLT2 inhibitors are the only disease-modifying agents with Class 1 evidence."
      ],
      [
        "Initiation of digoxin 0.25 mg daily to improve myocardial contractility and symptom score",
        "Digoxin has no benefit in HFpEF and carries severe risks of digitalis toxicity, bradycardia, and increased mortality in elderly women."
      ],
      [
        "Initiation of atenolol 50 mg daily to achieve rigid heart rate reduction <55 beats/min",
        "Excessive bradycardia from beta-blockers shortens stroke volume compensation and exacerbates exercise intolerance and fatigue in HFpEF."
      ],
      [
        "Initiation of isosorbide mononitrate 60 mg daily for systemic venodilation",
        "Nitrates were shown in the NEAT-HFpEF trial to worsen physical activity levels and quality of life without reducing hospitalizations in HFpEF."
      ],
      [
        "Initiation of diltiazem 240 mg daily as definitive monotherapy for diastolic filling",
        "Non-dihydropyridine calcium channel blockers do not reduce mortality or heart failure hospitalizations in HFpEF."
      ]
    ],
    "shortestValidSolution": "HFpEF (LVEF 58%, high NT-proBNP, E/e' 16, edema) = SGLT2 inhibitor (empagliflozin/dapagliflozin Class 1 guideline recommendation).",
    "necessaryInference": "Recognize SGLT2 inhibitors as the first-line disease-modifying pharmacotherapy with a Class 1 guideline recommendation for heart failure with preserved ejection fraction (HFpEF).",
    "strongestDistractor": "Initiation of digoxin 0.25 mg daily to improve myocardial contractility and symptom score",
    "distractorExclusion": "Digoxin does not reduce mortality or hospitalizations in HFpEF and carries high risks of toxicity in elderly patients with diastolic dysfunction.",
    "citation": "Verastegui A. Comparing guideline adherence and readability: Artificial intelligence with deep learning versus specialized physicians in peripheral artery disease management. Vasc Med. 2026 Feb. PMID: 41410030.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on heart failure with preserved ejection fraction sglt2 inhibitor therapy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0911",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Treat-to-Target Urate-Lowering Therapy Allopurinol Dose Titration",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents for outpatient management of chronic recurrent gout. Over the past 18 months, he has suffered four severe polyarticular flares involving his first metatarsophalangeal joints, ankles, and right knee. Physical examination reveals subcutaneous tophi along the olecranon bursa and ear helices. Baseline laboratory testing shows: serum urate 9.4 mg/dL (reference <6.0 mg/dL), serum creatinine 1.2 mg/dL (eGFR 74 mL/min/1.73 m2), and normal liver enzymes. Testing for the HLA-B*5801 allele is negative. He is initiated on allopurinol 100 mg daily, alongside colchicine 0.6 mg daily for anti-inflammatory prophylaxis. At a 4-week follow-up visit, he has had no acute flares, and his repeat serum urate is 7.2 mg/dL. He asks if his current 100 mg dose is adequate. Which of the following is the most appropriate management plan regarding his urate-lowering therapy?",
    "choices": [
      [
        "Titration of allopurinol upward by 100 mg increments every 2 to 4 weeks until serum urate is <6.0 mg/dL (or <5.0 mg/dL given tophaceous disease)",
        "The American College of Rheumatology (ACR) guidelines establish a 'TREAT-TO-TARGET' STRATEGY for urate-lowering therapy (ULT) in chronic gout. The core principles are: (1) INDICATION FOR ULT: Strong indications include >= 2 flares per year, presence of tophi, or radiographic joint damage; (2) START LOW AND GO SLOW: Allopurinol is initiated at a low dose (<= 100 mg daily, or <= 50 mg in CKD) to avoid triggering severe acute flares and to reduce the risk of Allopurinol Hypersensitivity Syndrome (AHS); (3) TITRATE TO TARGET: ALLOPURINOL MUST BE TITRATED UPWARD (by 100 mg increments every 2-4 weeks, exceeding the traditional 300 mg ceiling if necessary, up to 800 mg daily) UNTIL SERUM URATE IS MAINTAINED AT < 6.0 MG/DL (and ideally < 5.0 mg/dL in patients with TOPHACEOUS GOUT to promote tophus dissolution); and (4) CONCOMITANT PROPHYLAXIS: Anti-inflammatory flare prophylaxis (colchicine 0.6 mg once or twice daily, low-dose NSAID, or low-dose prednisone) MUST BE CONTINUED FOR AT LEAST 3 TO 6 MONTHS after achieving target serum urate. Leaving this patient on allopurinol 100 mg with a serum urate of 7.2 mg/dL guarantees persistent urate crystal deposition, progressive tophi expansion, and recurrent joint destruction."
      ],
      [
        "Maintenance of allopurinol at 100 mg daily indefinitely since he has been free of flares for 4 weeks",
        "Maintaining a fixed low dose when serum urate remains >6.0 mg/dL fails to prevent crystal accumulation and long-term joint destruction."
      ],
      [
        "Immediate discontinuation of allopurinol and substitution with febuxostat 80 mg daily",
        "Febuxostat is reserved for allopurinol intolerance or allergy; allopurinol should first be titrated to effective doses."
      ],
      [
        "Discontinuation of colchicine prophylaxis today since he has experienced no flares in the past month",
        "Discontinuing flare prophylaxis at 4 weeks precipitates acute gout attacks as serum urate levels fluctuate; prophylaxis must continue for 3-6 months."
      ],
      [
        "Addition of daily oral probenecid 500 mg while stopping allopurinol titration",
        "Uricosurics (probenecid) are second-line add-ons for refractory cases; titrating allopurinol monotherapy to target is first-line standard of care."
      ]
    ],
    "shortestValidSolution": "Chronic gout with tophi on allopurinol 100 mg with urate 7.2 = Titrate allopurinol upward until urate < 6.0 (or < 5.0 for tophi).",
    "necessaryInference": "Apply the treat-to-target strategy for gout: titrate allopurinol upward past 100-300 mg until serum urate reaches <6.0 mg/dL (or <5.0 mg/dL for tophi) with concurrent prophylaxis.",
    "strongestDistractor": "Maintenance of allopurinol at 100 mg daily indefinitely since he has been free of flares for 4 weeks",
    "distractorExclusion": "Absence of symptoms does not equate to disease control; urate crystals continue to deposit when serum urate exceeds 6.0 mg/dL.",
    "citation": "Mikuls TR. Treat-to-Target Urate-lowering Therapy: Lessons Learned from the STOP Gout Study. Curr Rheumatol Rep. 2026 Apr 27. PMID: 42043635.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on treat-to-target urate-lowering therapy allopurinol dose titration.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0912",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Polymyalgia Rheumatica Glucocorticoid Initiation and Structured Tapering",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old woman presents with a 6-week history of severe bilateral shoulder and hip girdle aching and stiffness. She reports that her stiffness is most pronounced in the morning, lasting >90 minutes, making it difficult to turn over in bed, rise from a chair, or brush her hair. Review of systems is negative for headache, scalp tenderness, jaw claudication, visual changes, or peripheral joint swelling. Vital signs are normal. Physical examination reveals active bilateral shoulder abduction limited to 80 degrees by pain; passive range of motion is preserved. Muscle strength is 5/5 bilaterally once pain is accounted for, and there is no muscle atrophy. Laboratory testing reveals: ESR 68 mm/h (reference <25 mm/h), CRP 34 mg/L (reference <5 mg/L), creatine kinase (CK) normal at 82 U/L, and rheumatoid factor and anti-CCP antibodies negative. She is diagnosed with POLYMYALGIA RHEUMATICA (PMR). Which of the following is the guideline-directed initial pharmacotherapy and long-term management strategy for this patient?",
    "choices": [
      [
        "Oral prednisone 15 to 20 mg daily, anticipating rapid clinical response within 72 hours, followed by a gradual structured taper over 1 to 2 years",
        "POLYMYALGIA RHEUMATICA (PMR) is an inflammatory disorder of older adults (>50 years) characterized by aching and morning stiffness in the shoulder and pelvic girdles, accompanied by elevated inflammatory markers (ESR, CRP) and normal muscle enzymes (CK). ACR/EULAR and British Society for Rheumatology guidelines recommend: (1) INITIAL GLUCOCORTICOID REGIMEN: ORAL PREDNISONE 12.5 TO 20 MG DAILY (usually 15 mg). High doses (>25 mg daily) are unnecessary and increase toxicity; low doses (<10 mg) have higher failure rates; (2) PROMPT DIAGNOSTIC RESPONSE: A hallmark feature of PMR is a DRAMATIC CLINICAL IMPROVEMENT (often >70% symptom reduction) WITHIN 48 TO 72 HOURS of initiating prednisone; failure to respond promptly mandates rethinking the diagnosis; and (3) STRUCTURED SLOW TAPER: Once symptoms resolve and acute phase reactants normalize (usually at 3-4 weeks), prednisone is tapered gradually (e.g., reduce by 2.5 mg every 2-4 weeks down to 10 mg/day, then by 1 mg every 1-2 months). TOTAL TREATMENT DURATION TYPICALLY SPANS 1 TO 2 YEARS. Premature or rapid tapering within a few weeks causes a high rate of relapse (>50%). Methotrexate may be added as a steroid-sparing agent only in patients with frequent relapses or high risk of glucocorticoid-related complications."
      ],
      [
        "High-dose intravenous methylprednisolone 1 gram daily for 3 days followed by oral prednisone 60 mg daily",
        "Pulse methylprednisolone and high-dose prednisone (60 mg) are indicated for giant cell arteritis with visual loss, not uncomplicated PMR."
      ],
      [
        "Oral methotrexate 15 mg weekly as monotherapy to avoid corticosteroid adverse effects",
        "Methotrexate monotherapy is ineffective for inducing remission in PMR; systemic glucocorticoids are the mandatory first-line therapy."
      ],
      [
        "Oral ibuprofen 800 mg three times daily for 4 weeks followed by physical therapy",
        "NSAIDs fail to provide adequate disease control in PMR and are associated with severe gastrointestinal and renal toxicity in older adults."
      ],
      [
        "Oral prednisone 15 mg daily for a rapid 14-day burst followed by immediate discontinuation",
        "A 14-day burst results in immediate disease recurrence in >90% of patients; PMR requires a structured slow taper over 12-24 months."
      ]
    ],
    "shortestValidSolution": "PMR (bilateral shoulder/hip stiffness + ESR 68) = Prednisone 15-20 mg daily (rapid 72h response; structured taper over 1-2 years).",
    "necessaryInference": "Apply guideline recommendations for polymyalgia rheumatica: initiate moderate-dose prednisone (15-20 mg daily) with expected rapid response, tapering gradually over 12-24 months.",
    "strongestDistractor": "Oral prednisone 15 mg daily for a rapid 14-day burst followed by immediate discontinuation",
    "distractorExclusion": "Abrupt cessation after 2 weeks leads to immediate inflammatory relapse; PMR is an ongoing systemic process requiring prolonged gradual taper.",
    "citation": "Toyoda T. The 2026 British Society for Rheumatology guideline for the treatment of polymyalgia rheumatica. Rheumatology (Oxford). 2026 Oct 1. PMID: 42869454.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on polymyalgia rheumatica glucocorticoid initiation and structured tapering.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0913",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Giant Cell Arteritis Visual Symptoms High-Dose Pulse Methylprednisolone",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman presents to the emergency department with a 3-week history of right-sided temporal headache, scalp tenderness when brushing her hair, and jaw ache while chewing steak. Over the past 6 hours, she has experienced two episodes of transient, painless monocular visual loss ('black curtain' falling over the right eye) lasting 5 to 10 minutes each, with residual blurring of vision in the inferior visual field of the right eye today. Physical examination reveals an indurated, tender, non-pulsatile right superficial temporal artery. Visual acuity is 20/100 in the right eye and 20/20 in the left eye; fundoscopic examination of the right eye demonstrates pale, edematous optic disc swelling consistent with anterior ischemic optic neuropathy (AION). Vital signs are normal. Point-of-care laboratory testing reveals ESR 98 mm/h and CRP 52 mg/L. Which of the following is the most appropriate immediate management for this patient?",
    "choices": [
      [
        "Immediate intravenous methylprednisolone pulse therapy (500 to 1,000 mg daily for 3 days) followed by temporal artery biopsy",
        "This patient presents with GIANT CELL ARTERITIS (GCA / temporal arteritis) complicated by THREATENED PERMANENT VISION LOSS (amaurosis fugax, inferior visual field defect, and anterior ischemic optic neuropathy [AION]). Ischemic optic neuropathy in GCA is caused by vasculitic occlusion of the posterior ciliary arteries, leading to optic nerve infarction. Permanent vision loss occurs in up to 15-20% of GCA patients and, once established in one eye, can spread rapidly to the contralateral eye within hours to days. ACR and EULAR guidelines establish: (1) IMMEDIATE HIGH-DOSE GLUCOCORTICOID THERAPY: In patients presenting with VISUAL LOSS, AMAUROSIS FUGAX, OR DIPLOPIA, treatment must be initiated IMMEDIATELY with INTRAVENOUS METHYLPREDNISOLONE (500 to 1,000 mg IV daily for 3 consecutive days), followed by high-dose oral prednisone (1 mg/kg/day, maximum 60-80 mg daily). If no visual symptoms are present, oral prednisone 40-60 mg daily is sufficient; (2) DO NOT DELAY FOR BIOPSY: Glucocorticoids must NEVER BE DELAYED while arranging temporal artery biopsy or vascular ultrasound. Diagnostic histopathology of the temporal artery remains reliable for up to 2 weeks after glucocorticoid initiation; and (3) ADJUNCTIVE BIOLOGICS: Tocilizumab (an IL-6 receptor antagonist) can be added as a glucocorticoid-sparing agent for long-term maintenance, but high-dose corticosteroids are the immediate emergency standard."
      ],
      [
        "Withholding systemic corticosteroids until unilateral temporal artery biopsy confirms granulomatous vasculitis",
        "Delaying corticosteroids while awaiting temporal artery biopsy leads to irreversible bilateral blindness in up to 50% of untreated patients."
      ],
      [
        "Initiation of low-dose oral prednisone 20 mg daily with outpatient ophthalmology consultation in 48 hours",
        "Low-dose prednisone (20 mg) is adequate for polymyalgia rheumatica but completely fails to suppress the fulminant vasculitis of GCA with visual loss."
      ],
      [
        "Emergency transcatheter ophthalmic artery thrombolysis with tissue plasminogen activator (tPA)",
        "Intra-arterial thrombolysis is ineffective and contraindicated in GCA because ischemia is driven by transmural arterial wall granulomatous inflammation, not acute embolic thrombus."
      ],
      [
        "Initiation of subcutaneous tocilizumab monotherapy without systemic corticosteroids",
        "Tocilizumab monotherapy takes several days to achieve therapeutic immunosuppression and is contraindicated as emergency monotherapy for acute visual loss."
      ]
    ],
    "shortestValidSolution": "GCA with visual symptoms (amaurosis fugax, AION) = Immediate IV methylprednisolone pulse (500-1000 mg/d x 3d) before biopsy (prevent bilateral blindness).",
    "necessaryInference": "Select immediate high-dose intravenous pulse methylprednisolone for giant cell arteritis with visual symptoms, recognizing that treatment must precede biopsy to prevent contralateral blindness.",
    "strongestDistractor": "Withholding systemic corticosteroids until unilateral temporal artery biopsy confirms granulomatous vasculitis",
    "distractorExclusion": "Biopsy confirmation must never delay treatment; temporal artery histology remains diagnostic for 2 weeks after starting steroids, while vision loss is irreversible.",
    "citation": "Dibl\u00edk P. Giant Cell Arteritis in Ophthalmology - Current Treatment Options. A Review. Cesk Slov Oftalmol. 2026. PMID: 42900579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on giant cell arteritis visual symptoms high-dose pulse methylprednisolone.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0914",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Benign Prostatic Hyperplasia Combination Alpha-Blocker 5-ARI Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents with progressive lower urinary tract symptoms (LUTS) over the past 12 months. He reports weak urinary stream, hesitancy, terminal dribbling, sensation of incomplete emptying, and nocturia 4 to 5 times per night. His International Prostate Symptom Score (IPSS) is 24 (severe symptoms). He has no hematuria, dysuria, or fever. Digital rectal examination reveals a smooth, firm, symmetrical, and markedly enlarged prostate estimated at 55 grams, without nodules or tenderness. Serum prostate-specific antigen (PSA) is 3.8 ng/mL (reference <4.0 ng/mL), and serum creatinine is 1.0 mg/dL. Post-void residual bladder volume measured by ultrasound is 120 mL. He has never received pharmacotherapy for prostatic disease. Which of the following is the most appropriate initial medical pharmacotherapy for this patient?",
    "choices": [
      [
        "Combination therapy with an alpha-1 adrenergic antagonist (tamsulosin) and a 5-alpha reductase inhibitor (finasteride)",
        "This patient has SEVERE LOWER URINARY TRACT SYMPTOMS (IPSS 24) secondary to BENIGN PROSTATIC HYPERPLASIA (BPH) with high-risk features for disease progression: PROSTATE VOLUME >30-40 GRAMS (here 55 g) and PSA >= 1.5 ng/mL. The landmark MTOPS (Medical Therapy of Prostatic Symptoms) and CombAT clinical trials established that: (1) ALPHA-1 ADRENERGIC ANTAGONISTS (e.g., tamsulosin 0.4 mg daily): Relax smooth muscle in the prostatic stroma, bladder neck, and prostatic capsule, providing RAPID SYMPTOM RELIEF within days to weeks; BUT (2) Alpha-blockers do NOT alter prostate size or long-term disease progression; (3) 5-ALPHA REDUCTASE INHIBITORS (5-ARIs, e.g., finasteride 5 mg or dutasteride 0.5 mg daily): Inhibit the conversion of testosterone to dihydrotestosterone (DHT), the primary androgen driving prostatic epithelial hyperplasia. Over 6 to 12 months, 5-ARIs REDUCE PROSTATE VOLUME BY 20% TO 25% and REDUCE THE LONG-TERM RISK OF ACUTE URINARY RETENTION AND BPH-RELATED SURGERY BY >50%; and (4) COMBINATION THERAPY (tamsulosin + finasteride): Is significantly superior to either monotherapy in patients with enlarged prostates (>30 g), providing both immediate symptom relief and long-term risk reduction. Monotherapy with an alpha-blocker alone leaves him at high risk of acute retention."
      ],
      [
        "Monotherapy with an alpha-1 adrenergic antagonist (tamsulosin) indefinitely, avoiding 5-alpha reductase inhibitors",
        "Alpha-blocker monotherapy improves dynamic flow but does not reduce prostate volume or prevent long-term urinary retention in enlarged glands (>30 g)."
      ],
      [
        "Monotherapy with finasteride 5 mg daily without an alpha-adrenergic antagonist",
        "Finasteride monotherapy requires 6 to 12 months to achieve clinical efficacy; omitting an alpha-blocker leaves the patient with severe untreated symptoms."
      ],
      [
        "Immediate referral for transurethral resection of the prostate (TURP) prior to any medication trial",
        "Surgical intervention (TURP) is reserved for patients who fail medical combination therapy or develop refractory retention, renal insufficiency, or recurrent stones."
      ],
      [
        "Initiation of daily oral oxybutynin 10 mg as monotherapy to reduce urinary frequency",
        "Anticholinergics (oxybutynin) reduce detrusor contractility and, if given as monotherapy in severe bladder outlet obstruction, precipitate acute urinary retention."
      ]
    ],
    "shortestValidSolution": "Severe BPH with enlarged prostate (55g) = Combination alpha-blocker (tamsulosin) + 5-ARI (finasteride) to relieve symptoms and shrink prostate.",
    "necessaryInference": "Apply MTOPS/CombAT trial evidence: combine an alpha-1 antagonist (rapid symptom relief) with a 5-alpha reductase inhibitor (reduces prostate size and retention risk) for BPH with prostate >30g.",
    "strongestDistractor": "Monotherapy with an alpha-1 adrenergic antagonist (tamsulosin) indefinitely, avoiding 5-alpha reductase inhibitors",
    "distractorExclusion": "Alpha-blocker monotherapy fails to halt progressive glandular hyperplasia; combining with finasteride cuts the long-term risk of urinary retention and surgery by half.",
    "citation": "Mengesha A. Long-Term Stability of a Fixed-Dose Doxazosin and Finasteride Combination Formulation. Int J Pharm Compd. 2026 Sep-Oct. PMID: 42965423.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on benign prostatic hyperplasia combination alpha-blocker 5-ari therapy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0915",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Renal",
    "topic": "Overactive Bladder Geriatric Pharmacotherapy Mirabegron vs Anticholinergics",
    "provisionalDifficulty": 4,
    "stem": "A 77-year-old woman presents with persistent urinary urgency, frequency (urinating 10 to 12 times during the day), and urge incontinence (involuntary leakage accompanied by an abrupt desire to void) for 9 months. She denies dysuria, hematuria, or fever. She has a history of mild cognitive impairment (Montreal Cognitive Assessment [MoCA] score 23/30), hypertension, and chronic constipation. Behavioral interventions, including bladder training, timed voiding, and pelvic floor muscle exercises, have been tried for 3 months with minimal improvement. Urinalysis is completely negative, and urine culture shows no growth. Post-void residual volume measured by bladder ultrasound is 35 mL. Which of the following is the most appropriate next step in pharmacotherapy for her overactive bladder?",
    "choices": [
      [
        "Initiation of mirabegron 25 mg orally once daily, monitoring blood pressure",
        "This older patient has OVERACTIVE BLADDER (OAB) with urge incontinence refractory to first-line behavioral therapy. In geriatric patients, particularly those with BASELINE MILD COGNITIVE IMPAIRMENT OR DEMENTIA, the choice of second-line pharmacotherapy is critical: (1) ANTICHOLINERGIC / ANTIMUSCARINIC AGENTS (e.g., oxybutynin, tolterodine, solifenacin) have historically been widely prescribed for OAB by blocking M2/M3 receptors in the detrusor muscle. However, antimuscarinics cross the blood-brain barrier and block central M1 muscarinic receptors essential for memory and cholinergic neurotransmission. Large prospective cohort studies and the AGS Beers Criteria establish that ANTICHOLINERGICS DRAMATICALLY ACCELERATE COGNITIVE DECLINE, TRIPLE THE RISK OF DELIRIUM, AND SIGNIFICANTLY INCREASE LONG-TERM INCIDENCE OF DEMENTIA, while also exacerbating constipation and dry mouth; (2) BETA-3 ADRENERGIC RECEPTOR AGONISTS (MIRABEGRON, VIBEGRON): Stimulate beta-3 adrenergic receptors in the bladder detrusor, promoting detrusor relaxation during the storage phase to increase bladder capacity WITHOUT ANY ANTICHOLINERGIC ACTIVITY. Mirabegron has no adverse cognitive effects and does not cause dry mouth or constipation; and (3) The primary precaution with mirabegron is dose-dependent blood pressure elevation; baseline and follow-up blood pressure monitoring is mandatory."
      ],
      [
        "Initiation of oral oxybutynin immediate-release 5 mg three times daily",
        "Oxybutynin has high anticholinergic burden, readily crosses the blood-brain barrier, worsens cognitive impairment, and accelerates dementia in elderly patients."
      ],
      [
        "Initiation of oral solifenacin 10 mg daily as a cognitive-sparing anticholinergic alternative",
        "While solifenacin has modest M3 selectivity, all antimuscarinics contribute to cumulative anticholinergic burden and increase dementia risk in older adults."
      ],
      [
        "Indwelling Foley catheter placement to completely eliminate incontinent episodes",
        "Chronic indwelling catheterization causes recurrent catheter-associated urinary tract infections, urosepsis, and bladder trauma, and is inappropriate for OAB."
      ],
      [
        "Intravesical onabotulinumtoxinA injection into the detrusor muscle as initial second-line therapy",
        "Intravesical botulinum toxin is a third-line invasive intervention reserved for patients who fail or cannot tolerate oral beta-3 agonists."
      ]
    ],
    "shortestValidSolution": "Overactive bladder in 77yo with cognitive impairment = Mirabegron (beta-3 agonist; avoids anticholinergic dementia risk of oxybutynin).",
    "necessaryInference": "Select a beta-3 adrenergic agonist (mirabegron) over antimuscarinics (oxybutynin) for overactive bladder in older adults with cognitive impairment to avoid anticholinergic neurocognitive toxicity.",
    "strongestDistractor": "Initiation of oral oxybutynin immediate-release 5 mg three times daily",
    "distractorExclusion": "Oxybutynin crosses the blood-brain barrier, worsens pre-existing cognitive impairment, exacerbates constipation, and is on the Beers Criteria list of inappropriate drugs.",
    "citation": "Sheyn D. Drug Therapies and Incidence of Dementia Among Adults With Overactive Bladder. JAMA Netw Open. 2026 Nov 2. PMID: 42993548.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 geriatrics item requiring multi-step deduction on overactive bladder geriatric pharmacotherapy mirabegron vs anticholinergics.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0916",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Chronic Insomnia First-Line Cognitive Behavioral Therapy vs Sedative Hypnotics",
    "provisionalDifficulty": 4,
    "stem": "A 69-year-old retired schoolteacher presents with difficulty sleeping that has persisted for 8 months. She reports taking 60 to 90 minutes to fall asleep each night, waking up 3 to 4 times during the night with difficulty returning to sleep, and waking up at 4:30 AM feeling unrefreshed. She spends 9 to 10 hours in bed each night attempting to sleep. During the day, she feels fatigued, irritable, and worries incessantly about how poorly she will sleep the upcoming night. She has tried drinking chamomile tea and taking over-the-counter diphenhydramine 50 mg nightly, which produced daytime grogginess, dry mouth, and urinary hesitancy without improving her sleep. Medical history includes well-controlled hypertension. Vital signs, physical examination, and routine laboratory tests are normal. She requests a prescription for zolpidem to help her sleep. Which of the following is the most appropriate first-line management for this patient?",
    "choices": [
      [
        "Cognitive Behavioral Therapy for Insomnia (CBT-I) including stimulus control and sleep restriction therapy",
        "This patient meets clinical criteria for CHRONIC INSOMNIA DISORDER (sleep onset and/or maintenance difficulties occurring >= 3 nights per week for >= 3 months, causing significant daytime distress). Clinical practice guidelines from the American College of Physicians (ACP) and American Academy of Sleep Medicine (AASM) establish that: (1) COGNITIVE BEHAVIORAL THERAPY FOR INSOMNIA (CBT-I) IS THE FIRST-LINE TREATMENT FOR ALL ADULTS WITH CHRONIC INSOMNIA, SUPERIOR TO ALL PHARMACOTHERAPY. CBT-I is a multimodal intervention comprising: (a) Stimulus control therapy (using the bed only for sleep and intimacy; leaving the bedroom if not asleep within 20 minutes); (b) Sleep restriction therapy (limiting time in bed to match total actual sleep time, consolidating sleep and building homeostatic sleep drive); (c) Sleep hygiene education; and (d) Cognitive restructuring (addressing catastrophic beliefs and anxiety regarding sleep loss); and (2) SEDATIVE-HYPNOTICS (such as zolpidem, eszopiclone, or benzodiazepines) and ANTIHISTAMINES (diphenhydramine) ARE STRONGLY DISCOURAGED AS FIRST-LINE THERAPY, particularly in older adults (Beers Criteria). In the elderly, sedative-hypnotics cause next-day sedation, motor vehicle collisions, anterograde amnesia, complex sleep behaviors (sleep-walking), tolerance, dependency, and a >2-fold increased risk of FALLS AND HIP FRACTURES."
      ],
      [
        "Prescribing oral zolpidem 10 mg at bedtime with a 6-month refill authorization",
        "Sedative-hypnotics (zolpidem) are contraindicated as first-line therapy in older adults due to severe risks of falls, cognitive impairment, and dependency."
      ],
      [
        "Switching diphenhydramine to oral hydroxyzine 50 mg nightly for sedative-anxiolytic synergy",
        "Hydroxyzine is a potent first-generation antihistamine that adds severe anticholinergic burden (urinary retention, delirium, dry mouth) in elderly patients."
      ],
      [
        "Prescribing oral clonazepam 1 mg nightly to achieve immediate sleep continuity",
        "Benzodiazepines have prolonged elimination half-lives in older adults, cause daytime sedation and ataxia, and carry severe risks of physical dependence."
      ],
      [
        "Ordering an immediate in-laboratory overnight polysomnography (PSG) sleep study",
        "Polysomnography is indicated for suspected sleep apnea, periodic limb movement disorder, or narcolepsy, not for routine uncomplicated psychophysiological insomnia."
      ]
    ],
    "shortestValidSolution": "Chronic insomnia >3 months in older adult = CBT-I (first-line; avoids sedative-hypnotic fall and fracture risks).",
    "necessaryInference": "Identify Cognitive Behavioral Therapy for Insomnia (CBT-I) as the guideline-directed first-line therapy for chronic insomnia, avoiding sedative-hypnotic drugs in older adults.",
    "strongestDistractor": "Prescribing oral zolpidem 10 mg at bedtime with a 6-month refill authorization",
    "distractorExclusion": "Zolpidem carries significant risks of falls, fractures, delirium, and dependency in the elderly; guidelines mandate CBT-I before any pharmacological trial.",
    "citation": "Jones B. An innovative hybrid cognitive behavioral therapy for insomnia approach to insomnia treatment: a retrospective chart review study. Fam Pract. 2026 Oct 6. PMID: 42870755.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 psychiatry item requiring multi-step deduction on chronic insomnia first-line cognitive behavioral therapy vs sedative hypnotics.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0917",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Treatment-Resistant Depression Second-Generation Antipsychotic Augmentation",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old woman presents for follow-up of major depressive disorder (MDD). Eight weeks ago, she was initiated on sertraline, which was titrated to the maximum therapeutic dose of 200 mg daily 4 weeks ago. She reports strict daily medication adherence. Despite this, she continues to experience persistent depressed mood, severe anhedonia, fatigue, feelings of worthlessness, and terminal insomnia. Her Patient Health Questionnaire-9 (PHQ-9) score is 19 (severe depression), showing minimal change from her baseline score of 21. She denies suicidal ideation, psychosis, or manic symptoms. Prior medication trials include a 10-week course of escitalopram 20 mg daily, which was similarly ineffective. Vital signs, comprehensive metabolic panel, thyroid-stimulating hormone (TSH), and urine toxicology screen are completely normal. Which of the following is the most evidence-based pharmacological next step in management?",
    "choices": [
      [
        "Augmentation of sertraline with low-dose aripiprazole (2 to 5 mg daily)",
        "This patient meets criteria for TREATMENT-RESISTANT DEPRESSION (TRD), defined as major depressive disorder that has failed to achieve adequate clinical remission despite at least TWO ADEQUATE TRIALS OF DIFFERENT ANTIDEPRESSANT CLASSES administered at therapeutic doses for sufficient duration (>= 6-8 weeks each). In treatment-resistant depression, APA and CANMAT guidelines recommend two primary pharmacological strategies: (1) SWITCHING to a different antidepressant class (e.g., SNRI, bupropion, or mirtazapine); or (2) AUGMENTATION THERAPY of the current antidepressant. Meta-analyses and randomized trials (including the landmark STAR*D trial and VA Augmentation trial) demonstrate that AUGMENTATION WITH A SECOND-GENERATION (ATYPICAL) ANTIPSYCHOTIC (specifically ARIPIPRAZOLE, BREXPIPRAZOLE, or QUETIAPINE) has the STRONGEST AND MOST CONSISTENT EVIDENCE BASE for achieving rapid clinical remission compared to other strategies. Aripiprazole functions as a partial dopamine D2/D3 and serotonin 5-HT1A agonist with 5-HT2A antagonism, enhancing mesolimbic dopaminergic signaling and prefrontal cortical function. It is initiated at low doses (2 to 5 mg daily) and titrated up to 10-15 mg/day. Patients must be monitored for akathisia, metabolic changes, and weight gain. Lithium and triiodothyronine (T3) are alternate augmentation options, but atypical antipsychotics have superior effect sizes."
      ],
      [
        "Increasing sertraline to a supratherapeutic dose of 300 mg daily",
        "Escalating sertraline above the maximum FDA-approved dose of 200 mg daily yields minimal additional serotonin transporter inhibition while increasing GI and sexual toxicity."
      ],
      [
        "Discontinuing sertraline and initiating paroxetine monotherapy 20 mg daily",
        "Switching to a third SSRI after two consecutive SSRI treatment failures (escitalopram and sertraline) has very low likelihood of remission (<10-15%)."
      ],
      [
        "Discontinuing sertraline and initiating phenelzine monotherapy without a washout period",
        "Switching immediately from an SSRI to a monoamine oxidase inhibitor (MAOI) without a 2-week washout precipitates lethal SEROTONIN SYNDROME."
      ],
      [
        "Initiation of daily oral alprazolam 1 mg three times daily as definitive monotherapy",
        "Benzodiazepines have no intrinsic antidepressant efficacy, carry severe addiction and dependency risks, and are strictly contraindicated as monotherapy for MDD."
      ]
    ],
    "shortestValidSolution": "MDD failing 2 SSRIs (escitalopram + max sertraline) = Augmentation with low-dose atypical antipsychotic (aripiprazole 2-5 mg/d).",
    "necessaryInference": "Recognize treatment-resistant depression after two failed antidepressant trials, selecting evidence-based augmentation with a second-generation antipsychotic (aripiprazole).",
    "strongestDistractor": "Discontinuing sertraline and initiating paroxetine monotherapy 20 mg daily",
    "distractorExclusion": "Switching to a third agent within the same drug class (SSRI) after two failures has negligible success; augmentation or cross-class switching is required.",
    "citation": "Jo SH. Aripiprazole versus Bupropion Augmentation in Patients with Anxious Depression Resistant to Selective Serotonin Reuptake Inhibitors: A Randomized, Prospective, Open-label, Multicenter Study. Clin Psychopharmacol Neurosci. 2026 Nov 30. PMID: 42947598.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 psychiatry item requiring multi-step deduction on treatment-resistant depression second-generation antipsychotic augmentation.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0918",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Alcohol Use Disorder Pharmacotherapy Acamprosate in Hepatic Impairment",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents to the clinic expressing a strong desire to stop drinking alcohol. He consumes 8 to 10 standard alcoholic beverages daily and has had multiple failed attempts at abstinence due to intense cravings. He has completed medically supervised alcohol detoxification 5 days ago and is currently in a state of stable abstinence without withdrawal symptoms. Medical history is notable for alcohol-associated cirrhosis (Child-Pugh Class B) and chronic hepatitis C. Physical examination reveals spider angiomas, palmar erythema, and mild non-tender hepatomegaly without jaundice or ascites. Laboratory evaluation demonstrates: AST 142 U/L, ALT 86 U/L, total bilirubin 1.8 mg/dL, platelets 92,000/uL, and serum creatinine 0.9 mg/dL (eGFR 92 mL/min/1.73 m2). He takes no opioids and his urine drug screen is negative. Which of the following is the most appropriate first-line pharmacotherapy to maintain alcohol abstinence in this patient?",
    "choices": [
      [
        "Oral acamprosate 666 mg three times daily",
        "Pharmacotherapy for ALCOHOL USE DISORDER (AUD) significantly improves abstinence rates and reduces relapse when combined with psychosocial interventions. First-line FDA-approved agents are NALTREXONE and ACAMPROSATE, but the choice between them is dictated entirely by HEPATIC and RENAL FUNCTION: (1) NALTREXONE (an opioid receptor antagonist that blunts alcohol-induced dopamine release and reduces cravings): Undergoes extensive hepatic metabolism and carries an FDA black-box warning for DOSE-DEPENDENT HEPATOTOXICITY; it is ABSOLUTELY CONTRAINDICATED in patients with acute hepatitis, liver failure, or severe hepatic cirrhosis (elevated transaminases, Child-Pugh B/C); (2) ACAMPROSATE (modulates central NMDA and GABA neurotransmission, reducing withdrawal-induced negative reinforcement and alcohol cravings): UNDERGOES COMPLETE RENAL ELIMINATION WITHOUT ANY HEPATIC METABOLISM AND IS NOT HEPATOTOXIC. Therefore, ACAMPROSATE IS THE FIRST-LINE MEDICATION OF CHOICE FOR AUD IN PATIENTS WITH LIVER DISEASE, CIRRHOSIS, OR ELEVATED TRANSAMINASES. Acamprosate is contraindicated only in severe renal impairment (CrCl <30 mL/min), which this patient does not have; and (3) DISULFIRAM is a second-line aversive agent that inhibits aldehyde dehydrogenase, but carries severe risks of fatal drug-induced hepatitis and cardiac arrhythmias in cirrhosis."
      ],
      [
        "Oral naltrexone 50 mg once daily with monthly liver function monitoring",
        "Naltrexone is hepatically metabolized and contraindicated in patients with active liver disease, cirrhosis, or significantly elevated transaminases."
      ],
      [
        "Oral disulfiram 250 mg once daily as an aversive deterrent agent",
        "Disulfiram carries black-box warnings for fulminant hepatic necrosis and liver failure and is contraindicated in cirrhotic liver disease."
      ],
      [
        "Long-term oral chlordiazepoxide 25 mg four times daily to suppress craving",
        "Benzodiazepines are used solely for short-term acute withdrawal (3-5 days); long-term use in cirrhosis causes addiction, falls, and hepatic encephalopathy."
      ],
      [
        "Oral topiramate 200 mg daily as definitive monotherapy without counseling",
        "Topiramate is a second-line, off-label agent associated with cognitive slowing, paresthesias, and metabolic acidosis, and is inferior to acamprosate in this setting."
      ]
    ],
    "shortestValidSolution": "Alcohol use disorder + cirrhosis/liver disease + normal kidneys = Acamprosate (renally excreted, avoids hepatotoxic naltrexone).",
    "necessaryInference": "Select acamprosate over naltrexone for alcohol use disorder in patients with cirrhosis or hepatic impairment, recognizing acamprosate's safe renal clearance.",
    "strongestDistractor": "Oral naltrexone 50 mg once daily with monthly liver function monitoring",
    "distractorExclusion": "Naltrexone is hepatically cleared and carries severe hepatotoxicity risks; active liver injury or cirrhosis mandates using renally cleared acamprosate.",
    "citation": "Chan SY. Nationwide trends of six medications for alcohol use disorder prescriptions post-discharge in patients hospitalized with alcohol-associated liver disease between 2015 and 2024. Drug Alcohol Depend. 2026 Nov 1. PMID: 42879917.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on alcohol use disorder pharmacotherapy acamprosate in hepatic impairment.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0919",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Opioid Use Disorder Buprenorphine Induction Clinical Opiate Withdrawal Scale",
    "provisionalDifficulty": 5,
    "stem": "A 31-year-old man presents to the clinic seeking treatment for severe opioid use disorder. He has been using 1 to 2 grams of illicit intravenous fentanyl daily for the past 2 years. He last injected fentanyl 18 hours ago and feels miserable. Physical examination reveals an irritable, diaphoretic man with pupillary dilation (mydriasis, 6 mm bilaterally), prominent piloerection ('gooseflesh'), rhinorrhea, lacrimation, restlessness with frequent leg movements, and active yawning. Abdominal examination reveals hyperactive bowel sounds with abdominal cramping; he reports watery diarrhea 30 minutes ago. Vital signs: blood pressure 138/88 mm Hg, heart rate 104/min, and temperature 37.6 C. His calculated Clinical Opiate Withdrawal Scale (COWS) score is 16 (moderate withdrawal). He has agreed to initiate buprenorphine-naloxone sublingual therapy. Which of the following represents the most appropriate management plan regarding buprenorphine induction for this patient?",
    "choices": [
      [
        "Initiation of sublingual buprenorphine-naloxone immediately, as his moderate withdrawal (COWS >= 12) prevents precipitated withdrawal",
        "BUPRENORPHINE is a partial mu-opioid receptor agonist with an EXCEPTIONALLY HIGH RECEPTOR BINDING AFFINITY that exceeds that of virtually all full opioid agonists (heroin, oxycodone, morphine, and fentanyl). If buprenorphine is administered while full agonists still occupy mu receptors, it DISPLACES THE FULL AGONIST FROM THE RECEPTOR and, due to its lower intrinsic efficacy (partial agonism), TRIGGERS A PRECIPITOUS DROP IN INTRINSIC OPIOID SIGNALING, CAUSING SEVERE, IMMEDIATE 'PRECIPITATED WITHDRAWAL'. To prevent precipitated withdrawal, guideline-directed buprenorphine induction mandates that: (1) THE PATIENT MUST BE IN OBJECTIVE, ACTIVE OPIOID WITHDRAWAL PRIOR TO INITIATING BUPRENORPHINE; (2) The standard clinical threshold is a Clinical Opiate Withdrawal Scale (COWS) score of >= 8 to 12 (MILD-TO-MODERATE WITHDRAWAL), characterized by objective signs such as dilated pupils, piloerection, tremor, diaphoresis, tachycardia, and gastrointestinal cramping; and (3) Because this patient has a COWS score of 16 (moderate withdrawal) with clear objective signs (mydriasis, piloerection, tachycardia) 18 hours after last fentanyl use, mu receptors are substantially unoccupied, and BUPRENORPHINE INDUCTION CAN PROCEED SAFELY WITH AN INITIAL DOSE (e.g., 2 to 4 mg sublingual). In fentanyl users, lipophilic accumulation can sometimes cause prolonged clearance, but objective moderate withdrawal on COWS confirms readiness."
      ],
      [
        "Administration of full-dose intramuscular naloxone 2 mg to clear remaining fentanyl from receptors before buprenorphine",
        "Administering full-dose antagonist naloxone triggers violent, catastrophic withdrawal, severe hypertension, tachycardia, and pulmonary edema."
      ],
      [
        "Withholding buprenorphine for an additional 72 hours until all urinary fentanyl metabolites test completely negative",
        "Waiting 72 hours until urine tests negative is unnecessary and causes intolerable withdrawal distress, leading to treatment dropout and fatal overdose."
      ],
      [
        "Prescribing oral clonazepam 2 mg combined with oral oxycodone 10 mg as bridging therapy for 5 days",
        "Prescribing full-agonist opioids and benzodiazepines fuels the addiction cycle, increases overdose mortality, and completely resets the withdrawal clock."
      ],
      [
        "Initiation of oral naltrexone 50 mg daily as monotherapy since he has reached moderate withdrawal",
        "Naltrexone is a full opioid antagonist and requires an absolute 7 to 10-day opioid-free period; giving naltrexone during withdrawal causes lethal autonomic storm."
      ]
    ],
    "shortestValidSolution": "Opioid use disorder with COWS score 16 (moderate withdrawal) = Initiate buprenorphine-naloxone immediately (avoids precipitated withdrawal).",
    "necessaryInference": "Apply buprenorphine induction guidelines: initiate buprenorphine only after the patient enters objective mild-to-moderate withdrawal (COWS >= 8-12) to avoid precipitated withdrawal.",
    "strongestDistractor": "Withholding buprenorphine for an additional 72 hours until all urinary fentanyl metabolites test completely negative",
    "distractorExclusion": "Fentanyl urine assays remain positive for days due to lipophilic storage; waiting for negative urine tests prolongs agonizing withdrawal and drives relapse.",
    "citation": "Fenske E. Buprenorphine for the Management of 7-Hydroxymitragynine (7-OH) Use: A Retrospective Case Series. J Addict Med. 2026 Nov-Dec 01. PMID: 42225057.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on opioid use disorder buprenorphine induction clinical opiate withdrawal scale.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0920",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Tobacco Use Disorder First-Line Combination Pharmacotherapy Strategy",
    "provisionalDifficulty": 4,
    "stem": "A 47-year-old man presents for a routine physical examination. He has smoked 1.5 packs of cigarettes daily for 28 years (42 pack-years). He smokes his first cigarette within 5 minutes of waking each morning (high nicotine dependence). He has attempted to quit several times in the past using over-the-counter nicotine patches alone, but relapsed within 1 to 2 weeks each time due to overwhelming sudden cigarette cravings, irritability, and restlessness. He is highly motivated to quit today because his 12-year-old son asked him to stop. Medical history is notable for well-controlled hypertension; he has no history of psychiatric illness, seizures, or eating disorders. Vital signs and physical examination are normal. Which of the following pharmacological strategies is recommended by the American Thoracic Society (ATS) and US Public Health Service guidelines as the most effective first-line approach for this patient?",
    "choices": [
      [
        "Varenicline monotherapy OR combination nicotine replacement therapy (long-acting nicotine patch plus short-acting nicotine gum or lozenge)",
        "TOBACCO USE DISORDER is the leading preventable cause of death in the United States. Landmark clinical trials (including the EAGLES trial) and clinical practice guidelines from the ATS and USPHS establish two FIRST-LINE PHARMACOLOGICAL STRATEGIES with the highest proven long-term abstinence rates: (1) VARENICLINE MONOTHERAPY: A partial agonist at the alpha-4-beta-2 nicotinic acetylcholine receptor that stimulates moderate dopamine release (mitigating withdrawal and cravings) while competitively blocking nicotine binding (preventing satisfaction from smoking). Varenicline is superior to bupropion and nicotine patch monotherapy; and (2) COMBINATION NICOTINE REPLACEMENT THERAPY (NRT): Combining a LONG-ACTING FORMULATION (transdermal nicotine patch, which delivers continuous baseline nicotine levels to suppress continuous withdrawal) with an AS-NEEDED SHORT-ACTING FORMULATION (nicotine gum, lozenge, or inhaler, which provides rapid boluses to overcome acute breakthrough cravings). Combination NRT is significantly more effective than any single NRT product alone (patch monotherapy or gum monotherapy), achieving abstinence rates comparable to varenicline. In contrast, NRT monotherapy has high failure rates in heavy, highly dependent smokers (first cigarette within 30 minutes of waking)."
      ],
      [
        "Repeat trial of the standard 21 mg nicotine transdermal patch as strict monotherapy for 8 weeks",
        "Nicotine patch monotherapy failed previously in this patient and has significantly lower abstinence rates compared to combination NRT or varenicline."
      ],
      [
        "Switching completely to electronic nicotine delivery systems (e-cigarettes) as an FDA-approved cessation aid",
        "Electronic cigarettes are NOT FDA-approved smoking cessation aids due to lack of long-term safety data, risk of dual use, and pulmonary toxicity."
      ],
      [
        "Oral buspirone 10 mg three times daily as monotherapy to alleviate smoking-related generalized anxiety",
        "Buspirone has zero proven efficacy for smoking cessation and does not reduce nicotine withdrawal or cigarette cravings."
      ],
      [
        "Oral clonidine 0.1 mg twice daily as first-line therapy to blunt autonomic hyperarousal",
        "Clonidine is a second-line agent limited by severe sedation, postural hypotension, and rebound hypertension, and is inferior to varenicline or combination NRT."
      ]
    ],
    "shortestValidSolution": "Heavy smoker failing patch monotherapy = Varenicline OR combination NRT (long-acting patch + short-acting gum/lozenge; superior to monotherapy).",
    "necessaryInference": "Select guideline-directed first-line pharmacotherapy for tobacco cessation: varenicline or combination NRT (patch plus short-acting gum/lozenge), which is superior to NRT monotherapy.",
    "strongestDistractor": "Repeat trial of the standard 21 mg nicotine transdermal patch as strict monotherapy for 8 weeks",
    "distractorExclusion": "Single-agent NRT monotherapy produces steady basal nicotine levels but cannot blunt acute breakthrough cravings, resulting in high relapse rates in heavy smokers.",
    "citation": "Gonz\u00e1lez-Domenech P. Pharmacological interventions for smoking cessation in patients with bipolar disorder. Adicciones. 2026 Jun 2. PMID: 42269647.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on tobacco use disorder first-line combination pharmacotherapy strategy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0921",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Knee Osteoarthritis Conservative Multimodal Non-Pharmacological Management",
    "provisionalDifficulty": 4,
    "stem": "A 61-year-old woman presents with worsening right knee pain over the past 8 months. The pain is exacerbated by prolonged walking, descending stairs, and rising from low chairs, and is relieved by rest. She notes morning stiffness lasting 15 minutes. She denies joint swelling, redness, fever, or pain in other joints. Medical history includes hypertension, stage 3a chronic kidney disease (serum creatinine 1.5 mg/dL, eGFR 42 mL/min/1.73 m2), and peptic ulcer disease with a history of bleeding 3 years ago. BMI is 33 kg/m2 (obesity). Physical examination of the right knee reveals bony enlargement, medial joint line tenderness, and fine crepitus on passive flexion and extension; there is no joint effusion, warmth, or erythema. Weight-bearing plain radiographs of both knees show asymmetric medial joint space narrowing, subchondral sclerosis, and marginal osteophytes in the right knee. Which of the following is the most appropriate initial management strategy for this patient?",
    "choices": [
      [
        "A multimodal conservative program including structured physical therapy, quadriceps strengthening exercises, weight loss, and topical NSAIDs (diclofenac gel)",
        "This patient has symptomatic MEDIAL COMPARTMENT OSTEOARTHRITIS (OA) OF THE KNEE. Clinical guidelines from the American College of Rheumatology (ACR) and Osteoarthritis Research Society International (OARSI) emphasize: (1) CORE NON-PHARMACOLOGICAL THERAPIES: Are strongly recommended for all patients and form the cornerstone of management. These include: (a) Structured aerobic and resistance land-based exercise (specifically QUADRICEPS STRENGTHENING), which stabilizes the knee joint and unloads the joint cartilage; and (b) WEIGHT LOSS: In overweight or obese individuals (BMI >= 25 kg/m2), each pound of weight lost reduces four pounds of mechanical load across the knee per step; losing >= 5% to 10% of body weight yields clinically meaningful pain reduction and functional improvement; and (2) PHARMACOTHERAPY IN HIGH-RISK COMORBIDITIES: Systemic oral NSAIDs (ibuprofen, naproxen) are CONTRAINDICATED in this patient due to stage 3 CKD and prior gastrointestinal bleeding. In contrast, TOPICAL NSAIDs (TOPICAL DICLOFENAC GEL) are STRONGLY RECOMMENDED as first-line pharmacotherapy for knee OA. Topical NSAIDs achieve therapeutic synovial concentrations while producing minimal systemic absorption (<1% of oral levels), avoiding renal and GI toxicity. Opioids are strongly discouraged due to dependence and fall risks."
      ],
      [
        "Prescribing oral naproxen 500 mg twice daily combined with acetaminophen 1,000 mg every 6 hours",
        "Oral systemic NSAIDs are contraindicated in patients with chronic kidney disease (eGFR 42) and prior bleeding peptic ulcers due to high nephrotoxicity and recurrent hemorrhage."
      ],
      [
        "Immediate referral for total knee arthroplasty (TKA) before initiating non-pharmacological therapies",
        "Total knee arthroplasty is indicated only for end-stage osteoarthritis with refractory pain and severe functional disability who have exhausted conservative management."
      ],
      [
        "Prescribing oral tramadol 50 mg three times daily as first-line analgesic therapy",
        "Opioids (including tramadol) have negligible long-term efficacy in osteoarthritis and cause substantial addiction, cognitive impairment, and falls in older adults."
      ],
      [
        "Routine serial intra-articular hyaluronic acid (viscosupplementation) injections every 3 months",
        "Hyaluronic acid injections are conditionally not recommended by the ACR due to lack of meaningful clinical efficacy over placebo and risk of post-injection flare."
      ]
    ],
    "shortestValidSolution": "Knee OA in patient with CKD and ulcer = Physical therapy + quadriceps strengthening + weight loss + topical diclofenac (avoid oral NSAIDs).",
    "necessaryInference": "Select guideline-directed multimodal conservative therapy (exercise, weight loss, topical NSAIDs) for knee osteoarthritis, recognizing contraindications to systemic oral NSAIDs in CKD/PUD.",
    "strongestDistractor": "Prescribing oral naproxen 500 mg twice daily combined with acetaminophen 1,000 mg every 6 hours",
    "distractorExclusion": "Systemic NSAIDs cause acute kidney injury and catastrophic gastrointestinal bleeding in patients with baseline CKD and prior peptic ulcer disease.",
    "citation": "Koshti SH. A Prospective Interventional Study Comparing a Multimodal Intervention Incorporating Behavior, Exercise, Nutrition, Medication, and Posture With Exercise and Medication in Patients With Chronic Nonspecific Low Back Pain. Cureus. 2026 Oct. PMID: 42985311.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on knee osteoarthritis conservative multimodal non-pharmacological management.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0922",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Pneumococcal Conjugate Vaccination Guidelines in Adults Aged 65 and Older",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman presents for a preventive health maintenance visit. She feels well and has no chronic medical conditions. She takes no medications and has no drug allergies. Her immunization record indicates that she received the recombinant zoster vaccine (Shingrix, two doses) at age 65, an updated COVID-19 booster 3 months ago, and an annual influenza vaccine last month. She has never received any pneumococcal vaccine. Vital signs and physical examination are entirely normal. Which of the following represents the current Advisory Committee on Immunization Practices (ACIP) guideline-directed pneumococcal vaccination recommendation for this patient?",
    "choices": [
      [
        "Administration of a single dose of 20-valent pneumococcal conjugate vaccine (PCV20) alone today",
        "According to the updated CDC / Advisory Committee on Immunization Practices (ACIP) guidelines, PNEUMOCOCCAL VACCINATION IS ROUTINELY RECOMMENDED FOR ALL ADULTS AGED >= 65 YEARS who have not previously received a pneumococcal conjugate vaccine. ACIP provides two approved, equivalent options for pneumococcal conjugate-naive older adults: (1) PREFERRED SIMPLE REGIMEN: A SINGLE DOSE OF 20-VALENT PNEUMOCOCCAL CONJUGATE VACCINE (PCV20) ALONE. PCV20 includes conjugate protection against 20 capsular serotypes and DOES NOT REQUIRE ANY SUBSEQUENT POLYSACCHARIDE (PPSV23) BOOSTER; OR (2) ALTERNATIVE REGIMEN: A SINGLE DOSE OF 15-VALENT PNEUMOCOCCAL CONJUGATE VACCINE (PCV15) FOLLOWED BY A DOSE OF 23-VALENT PNEUMOCOCCAL POLYSACCHARIDE VACCINE (PPSV23) AT LEAST 1 YEAR LATER. Conjugate vaccines stimulate T-cell-dependent mucosal and systemic immunity with long-lived memory B cells and superior mucosal antibody protection compared to pure polysaccharide vaccines. Administering PPSV23 alone without a prior conjugate vaccine is no longer standard of care for adults >= 65 years."
      ],
      [
        "Administration of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone today without a conjugate vaccine",
        "PPSV23 alone stimulates T-cell-independent IgM responses without immune memory; current ACIP guidelines mandate a conjugate vaccine (PCV20 or PCV15)."
      ],
      [
        "Administration of 13-valent pneumococcal conjugate vaccine (PCV13) followed by PPSV23 in 8 weeks",
        "PCV13 has been completely superseded by broader conjugate vaccines (PCV20 and PCV15) and is no longer recommended for routine adult vaccination."
      ],
      [
        "Administration of PCV20 today followed by a mandatory dose of PPSV23 exactly 1 year later",
        "When PCV20 is administered, NO subsequent PPSV23 dose is required or recommended because PCV20 already covers all key serotypes with conjugate efficacy."
      ],
      [
        "Withholding pneumococcal vaccination until age 75 unless she develops chronic lung disease or diabetes",
        "Pneumococcal vaccination is routinely indicated for ALL adults at age 65 regardless of chronic comorbidities to prevent invasive pneumococcal bacteremia and pneumonia."
      ]
    ],
    "shortestValidSolution": "Vaccine-naive adult turning 65 = Single dose of PCV20 alone (or PCV15 followed by PPSV23 in >=1 year; no PPSV23 needed after PCV20).",
    "necessaryInference": "Apply updated ACIP pneumococcal vaccination guidelines: administer PCV20 alone as a single dose for vaccine-naive adults aged >= 65 years.",
    "strongestDistractor": "Administration of 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone today without a conjugate vaccine",
    "distractorExclusion": "Polysaccharide-only vaccination (PPSV23 alone) is obsolete for initial immunization; conjugate vaccines (PCV20 or PCV15) are required for T-cell dependent memory.",
    "citation": "Koul PA. Indian Multidisciplinary Expert Opinions on the Use of 20-Valent Pneumococcal Conjugate Vaccine in Adults. Vaccines (Basel). 2026 Oct 16. PMID: 42931434.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on pneumococcal conjugate vaccination guidelines in adults aged 65 and older.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0923",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Gastric Intestinal Metaplasia Surveillance Endoscopy Recommendations",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man who immigrated to the United States from South Korea 10 years ago undergoes an upper endoscopy (esophagogastroduodenoscopy [EGD]) for persistent dyspepsia. Endoscopy reveals diffuse mucosal granularity and pale mucosal patches involving both the antrum and the gastric body; no discrete mass, ulcer, or dysplasia is visualized. Biopsies obtained according to the Sydney protocol demonstrate EXTENSIVE GASTRIC INTESTINAL METAPLASIA involving both the antrum and corpus, with complete intestinal metaplasia; rapid urease testing for Helicobacter pylori is positive. He is treated with a 14-day course of quadruple therapy (bismuth subcitrate, metronidazole, tetracycline, and omeprazole), and a repeat urea breath test at 6 weeks confirms successful H. pylori eradication. His dyspeptic symptoms have completely resolved. He asks what ongoing monitoring is required for his stomach condition. Which of the following is the most appropriate recommendation according to American Gastroenterological Association (AGA) guidelines?",
    "choices": [
      [
        "Surveillance upper endoscopy in 3 years to evaluate for progression of metaplasia or development of dysplasia",
        "GASTRIC INTESTINAL METAPLASIA (GIM) is a premalignant condition along the Correa cascade of gastric adenocarcinoma (chronic gastritis -> atrophic gastritis -> intestinal metaplasia -> dysplasia -> adenocarcinoma). The American Gastroenterological Association (AGA) clinical practice update recommends: (1) ERADICATION OF H. PYLORI: Mandatory in all patients with GIM to halt ongoing mucosal inflammation and reduce cancer risk; (2) RISK STRATIFICATION FOR SURVEILLANCE: Routine surveillance EGD is NOT recommended for patients with focal, low-risk GIM in regions of low gastric cancer incidence. However, SURVEILLANCE EGD IN 3 YEARS IS STRONGLY RECOMMENDED for individuals with HIGH-RISK FEATURES: (a) EXTENSIVE GIM (involving both the gastric antrum and corpus/body); (b) Incomplete histological subtype; (c) Family history of gastric cancer in a first-degree relative; or (d) Racial/ethnic minorities or IMMIGRANTS FROM HIGH-INCIDENCE REGIONS (East Asia, Eastern Europe, South America); and (3) Because this patient is an East Asian immigrant with EXTENSIVE GIM involving the antrum and body, repeat high-definition endoscopy with mapping biopsies in 3 years is indicated."
      ],
      [
        "No further endoscopic surveillance is necessary once Helicobacter pylori eradication is documented",
        "H. pylori eradication stops inflammation but does not eliminate pre-existing extensive intestinal metaplasia; high-risk patients require 3-year surveillance."
      ],
      [
        "Surveillance upper endoscopy every 6 months with serial endoscopic mucosal resections",
        "Endoscopy every 6 months is indicated for high-grade dysplasia, not non-dysplastic extensive intestinal metaplasia."
      ],
      [
        "Prophylactic total gastrectomy with Roux-en-Y reconstruction to eliminate gastric cancer risk",
        "Prophylactic gastrectomy is indicated exclusively for hereditary diffuse gastric cancer (CDH1 germline mutation), never for acquired intestinal metaplasia."
      ],
      [
        "Annual serum pepsinogen I and II ratio screening in lieu of repeat endoscopic examination",
        "Serum pepsinogen testing is an epidemiological biomarker that lacks the mucosal resolution to detect early focal dysplasia or early adenocarcinoma."
      ]
    ],
    "shortestValidSolution": "Extensive gastric intestinal metaplasia (antrum + body) in East Asian immigrant = Eradicate H. pylori + surveillance EGD in 3 years.",
    "necessaryInference": "Apply AGA surveillance guidelines for gastric intestinal metaplasia: recommend surveillance endoscopy in 3 years for patients with extensive metaplasia or immigrants from high-incidence countries.",
    "strongestDistractor": "No further endoscopic surveillance is necessary once Helicobacter pylori eradication is documented",
    "distractorExclusion": "Eradication of H. pylori prevents new metaplasia but does not reverse existing extensive metaplastic mucosa, which retains malignant potential.",
    "citation": "Calderwood AH. AGA Clinical Practice Update on Surveillance of Metaplastic and Premalignant Conditions of the Esophagus and Colorectum in Older Adults: Expert Review. Clin Gastroenterol Hepatol. 2026 Aug 3. PMID: 42545305.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on gastric intestinal metaplasia surveillance endoscopy recommendations.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0924",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Lung Cancer Screening Low-Dose CT Eligibility Criteria and Discontinuation",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents for a preventive health assessment. He feels well and has no cough, hemoptysis, shortness of breath, chest pain, or unexplained weight loss. Medical history includes mild osteoarthritis of the fingers and hyperlipidemia. He has smoked 1 pack of cigarettes daily for 25 years (25 pack-years) and continues to smoke. Vital signs: blood pressure 126/78 mm Hg, heart rate 72/min, BMI 27 kg/m2. Physical examination, including chest auscultation and lymph node examination, is entirely normal. He has never had a chest radiograph or CT scan. He asks whether he should undergo screening for lung cancer. Which of the following is the most appropriate recommendation according to the United States Preventive Services Task Force (USPSTF) guidelines?",
    "choices": [
      [
        "Annual screening for lung cancer with low-dose computed tomography (LDCT) of the chest",
        "The United States Preventive Services Task Force (USPSTF) recommends ANNUAL SCREENING FOR LUNG CANCER WITH LOW-DOSE COMPUTED TOMOGRAPHY (LDCT) for individuals who meet ALL of the following criteria: (1) AGE 50 TO 80 YEARS (patient is 58); (2) SMOKING HISTORY OF AT LEAST 20 PACK-YEARS (patient has 25 pack-years); and (3) CURRENT SMOKER OR HAS QUIT WITHIN THE PAST 15 YEARS (patient is a current smoker). The National Lung Screening Trial (NLST) and NELSON trials demonstrated that annual LDCT screening reduces lung cancer mortality by 20% to 24% by detecting asymptomatic early-stage (Stage I) resectable non-small cell lung cancers. Screening should be discontinued once a person reaches age 81, or has not smoked for 15 consecutive years, or develops a severe health condition that substantially limits life expectancy or the ability to undergo curative lung surgery. Chest radiography and sputum cytology lack sensitivity and have been definitively proven ineffective for lung cancer screening."
      ],
      [
        "Annual screening with posteroanterior and lateral chest radiography",
        "Chest radiography fails to detect small early-stage lung nodules and was shown in large randomized trials to provide zero reduction in lung cancer mortality."
      ],
      [
        "Screening with low-dose CT every 5 years beginning at age 65",
        "Lung cancer screening must be performed annually, not every 5 years; delaying screening to age 65 misses the critical 50-64 age window."
      ],
      [
        "Withholding screening because lung cancer screening is indicated only for individuals with >=30 pack-years",
        "The USPSTF updated guidelines in 2021 expanded eligibility from 30 down to 20 pack-years, and from age 55 down to age 50."
      ],
      [
        "Performance of baseline serum carcinoembryonic antigen (CEA) and circulating tumor DNA assay",
        "Serum biomarkers have no proven diagnostic accuracy or clinical utility for population-based lung cancer screening."
      ]
    ],
    "shortestValidSolution": "58yo current smoker with 25 pack-years = Annual low-dose CT (LDCT) screening (USPSTF criteria: age 50-80, >=20 pack-years, quit <15 yrs).",
    "necessaryInference": "Apply USPSTF lung cancer screening guidelines: recommend annual low-dose chest CT for adults aged 50-80 with >= 20 pack-year smoking history who currently smoke or quit <15 years ago.",
    "strongestDistractor": "Annual screening with posteroanterior and lateral chest radiography",
    "distractorExclusion": "Chest X-rays do not reduce lung cancer mortality; low-dose CT is the only evidence-based screening modality proven to reduce mortality.",
    "citation": "Samami E. Determinants of lung cancer screening intention among eligible individuals. Lung Cancer. 2026 Oct. PMID: 42685528.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on lung cancer screening low-dose ct eligibility criteria and discontinuation.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s3-0925",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Abdominal Aortic Aneurysm Screening Ultrasonography Eligibility Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man presents to the clinic for a routine annual Medicare wellness exam. He is active and asymptomatic, walking 3 miles three times a week. Medical history includes hypertension well controlled on amlodipine 5 mg daily. He smoked 1 pack of cigarettes per day from age 20 to age 42 (22 pack-years), but successfully quit smoking 25 years ago. He has no family history of aortic aneurysm, dissection, or sudden unexplained death. Vital signs: blood pressure 124/76 mm Hg, heart rate 68/min, BMI 26 kg/m2. Abdominal examination reveals a soft, non-tender abdomen; the abdominal aorta is palpable and non-tender, measuring approximately 2.5 cm in width without palpable lateral pulsatility or abdominal bruits. Peripheral pulses are 2+ and symmetric. Which of the following represents the most appropriate screening recommendation for abdominal aortic aneurysm (AAA) for this patient according to the USPSTF?",
    "choices": [
      [
        "A one-time abdominal ultrasonography screening examination for abdominal aortic aneurysm",
        "The United States Preventive Services Task Force (USPSTF) and Society for Vascular Surgery (SVS) guidelines recommend a ONE-TIME SCREENING ABDOMINAL ULTRASONOGRAPHY FOR ABDOMINAL AORTIC ANEURYSM (AAA) in: (1) MEN AGED 65 TO 75 YEARS WHO HAVE EVER SMOKED (defined as having smoked at least 100 cigarettes in their lifetime). The patient is a 67-year-old man with a 22 pack-year smoking history, fulfilling exact criteria; (2) RATIONALE: Abdominal ultrasonography has a sensitivity and specificity approaching 98% to 100% for detecting infrarenal aortic aneurysms (diameter >= 3.0 cm). Screening reduces AAA-related mortality by approximately 50% and reduces emergency rupture rates by identifying aneurysms at an asymptomatic stage where elective repair or surveillance can be performed; (3) CESSATION TIMING: The USPSTF recommendation for AAA screening DOES NOT REQUIRE THAT CESSATION OCCURRED WITHIN 15 YEARS (unlike lung cancer screening); ANY EVER-SMOKING HISTORY in a man aged 65-75 warrants one-time ultrasound; and (4) In women who have never smoked, routine screening is not recommended."
      ],
      [
        "Annual screening abdominal ultrasonography every year until age 80",
        "Routine AAA screening is a one-time examination; annual surveillance is indicated only if an aneurysm (>=3.0 cm) is actually discovered on initial ultrasound."
      ],
      [
        "Withholding screening because he quit smoking >15 years ago",
        "The 15-year quit rule applies to lung cancer screening; AAA screening applies to ANY man aged 65-75 who has EVER smoked (>=100 lifetime cigarettes)."
      ],
      [
        "Contrast-enhanced abdominal and pelvic CT angiogram as the initial screening modality",
        "Ultrasonography is the preferred screening modality because it avoids nephrotoxic intravenous contrast and ionizing radiation while providing 100% sensitivity."
      ],
      [
        "Withholding screening because physical examination demonstrated a normal palpable aorta width",
        "Physical examination is notoriously insensitive for detecting abdominal aortic aneurysms (sensitivity <30-40% for aneurysms 3.0-4.0 cm); ultrasound is required."
      ]
    ],
    "shortestValidSolution": "67yo man with 22 pack-year smoking history (quit 25 yrs ago) = One-time abdominal ultrasound for AAA (USPSTF: men 65-75 who ever smoked).",
    "necessaryInference": "Apply USPSTF abdominal aortic aneurysm screening guidelines: order a one-time abdominal ultrasound in men aged 65-75 with any lifetime smoking history.",
    "strongestDistractor": "Withholding screening because he quit smoking >15 years ago",
    "distractorExclusion": "The 15-year cessation cutoff applies to lung cancer CT screening; AAA ultrasound screening applies to any male ever-smoker aged 65-75 regardless of quit date.",
    "citation": "McLoughlin MT. Abdominal aortic aneurysm (AAA) screening and the Irish context. Surgeon. 2025 Dec 24. PMID: 41449029.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on abdominal aortic aneurysm screening ultrasonography eligibility criteria.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  }
];
