import { CandidateSpec } from './types';

export const step3Batch4: CandidateSpec[] = [
  {
    code: 'op-c-s3-0076',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Decision-Making Capacity Assessment for High-Stakes Treatment Refusal',
    subtopic: 'Understanding Appreciation Reasoning and Expression of Choice',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Evaluate decision-making capacity: Capacity is task-specific and decision-specific. Four key components: 1. Understanding relevant information; 2. Appreciating the situation and consequences; 3. Reasoning logically through treatment alternatives; 4. Expressing a consistent, voluntary choice. Mild cognitive impairment or dementia does NOT automatically preclude capacity. If an adult patient demonstrates understanding that refusing surgery carries a high risk of sepsis and death, their autonomous refusal must be honored.',
    citation: 'Appelbaum PS. Clinical practice. Assessment of patients\' competence to consent to treatment. N Engl J Med. 2007;357(18):1834-1840. PMID: 17978292.',
    stem:
      'A 78-year-old man with mild vascular neurocognitive disorder (Mini-Mental State Examination score 24/30) is admitted to the surgical service with acute gangrenous cholecystitis. He has right upper quadrant peritoneal signs and an ultrasound demonstrating a distended, thick-walled gallbladder containing gallstones with pericholecystic fluid and sloughed mucosal membranes. Blood cultures grow Escherichia coli. The surgical team recommends emergent laparoscopic cholecystectomy, explaining that without surgical intervention, the gallbladder will likely perforate, leading to generalized peritonitis, septic shock, and death within 24 to 48 hours. The patient calmly and clearly refuses the operation. When asked why, he states: "I understand that my gallbladder is severely infected and will likely burst if you don’t remove it. I know that without the surgery, I will likely develop severe blood poisoning and die. I am 78 years old, I have lived a full and happy life, and I do not want any more surgeries or invasive tubes. I accept that I may die from this, and I want only intravenous antibiotics and comfort care." His daughter insists that the surgical team obtain an emergency court order or override his refusal because her father has documented mild dementia. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Honor the patient’s refusal of surgery and provide medical therapy with intravenous antibiotics and palliative care',
        explanation: 'Decision-making capacity is decision-specific and time-specific, not an all-or-none diagnosis. Having mild cognitive impairment or dementia does not automatically strip a patient of the legal and ethical right to make autonomous healthcare choices. Assessment of capacity requires four elements: (1) understanding the medical condition and proposed treatments; (2) appreciating how the condition and consequences apply to oneself; (3) reasoning through the risks, benefits, and alternatives; and (4) expressing a clear, consistent choice. This patient clearly demonstrates all four components: he understands the diagnosis, articulates that refusal carries high risk of sepsis and death, weighs this against his personal life goals, and expresses a consistent choice. A competent refusal must be honored, even if it leads to death.'
      },
      {
        text: 'Proceed with emergent cholecystectomy under emergency doctrine because the condition is life-threatening',
        explanation: 'The emergency doctrine presumes consent to save life ONLY when an incapacitated patient’s wishes are unknown; it cannot override an explicit, informed refusal by a patient with capacity.'
      },
      {
        text: 'Designate the daughter as surrogate decision-maker to provide consent for surgery due to his MMSE score of 24/30',
        explanation: 'Surrogate decision-makers have no legal authority when a patient possesses decision-making capacity; a diagnosis of cognitive impairment does not automatically transfer decision-making authority.'
      },
      {
        text: 'Petition the probate court for emergent legal guardianship to compel surgical intervention',
        explanation: 'Courts will not appoint guardians to override competent refusals; petitioning the court wastes critical hours and violates patient autonomy.'
      },
      {
        text: 'Administer intravenous haloperidol to sedate the patient until he agrees to sign the surgical consent form',
        explanation: 'Coercing or sedating a patient to force consent violates ethical and legal standards and constitutes medical battery.'
      }
    ]
  },
  {
    code: 'op-c-s3-0077',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Inpatient Glycemic Control Basal-Bolus versus Sliding-Scale',
    subtopic: 'Non-ICU Subcutaneous Regimens and Hypoglycemia Avoidance',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize inpatient glycemic management in non-ICU hospitalized patients: ADA guidelines strongly recommend a SCHEDULED BASAL-BOLUS-CORRECTION subcutaneous insulin regimen (basal glargine/detemir + nutritional prandial rapid-acting + correction) for patients eating regular meals, or basal plus correction for NPO. SLIDING-SCALE INSULIN MONOTHERAPY (SSI) IS STRONGLY DISCOURAGED because it treats hyperglycemia reactively after it occurs, causing severe glycemic swings ("rollercoaster") and higher infection rates without reducing hypoglycemia.',
    citation: 'American Diabetes Association. 16. Diabetes Care in the Hospital: Standards of Care in Diabetes-2024. Diabetes Care. 2024;47(Suppl 1):S295-S306. PMID: 38078577.',
    stem:
      'A 62-year-old man with a 10-year history of type 2 diabetes mellitus is admitted to the general medical floor for treatment of community-acquired pneumonia. His outpatient home regimen was metformin 1,000 mg twice daily and glipizide 10 mg daily (baseline HbA1c 8.8%). Upon admission, his oral antidiabetic agents are held. He is alert, hemodynamically stable, and eating a consistent-carbohydrate diabetic diet. On hospital day 2, his random blood glucose measurements are 245 mg/dL before breakfast, 280 mg/dL before lunch, and 265 mg/dL before dinner. He is currently receiving only a reactive "sliding-scale" regular insulin regimen consisting of subcutaneous regular insulin administered only when blood glucose exceeds 200 mg/dL. The intern proposes increasing the sensitivity of the sliding-scale algorithm without adding background insulin. According to American Diabetes Association (ADA) hospital practice guidelines, which of the following is the most appropriate glycemic management strategy for this patient?',
    options: [
      {
        text: 'Initiate a proactive basal-bolus-correction subcutaneous insulin regimen combining once-daily long-acting insulin with pre-meal rapid-acting insulin',
        explanation: 'The American Diabetes Association (ADA) hospital care guidelines give a strong recommendation that sliding-scale insulin (SSI) monotherapy should be avoided in inpatient non-critically ill medical units. SSI is a reactive strategy that "chases" blood glucose after it rises rather than preventing hyperglycemia, leading to wide glycemic variability ("rollercoaster" excursions), prolonged hospital stays, and increased postoperative wound infection rates. Randomized trials (such as the RABBIT 2 trial) established that a proactive scheduled basal-bolus-correction regimen (basal glargine or detemir to suppress hepatic gluconeogenesis + prandial rapid-acting lispro or aspart for mealtime carbohydrates + correction scale) achieves superior glycemic control (target 140–180 mg/dL) with lower rates of complications and comparable hypoglycemia.'
      },
      {
        text: 'Continue sliding-scale regular insulin monotherapy and add oral metformin 1,000 mg twice daily',
        explanation: 'Metformin is generally held in hospitalized patients with acute infections due to fluctuating renal perfusion and the catastrophic risk of metformin-associated lactic acidosis.'
      },
      {
        text: 'Resume outpatient oral glipizide at double the baseline dosage',
        explanation: 'Sulfonylureas are held in hospitalized patients because inconsistent dietary intake and unpredictable illness recovery markedly increase the risk of severe, prolonged hypoglycemia.'
      },
      {
        text: 'Initiate continuous intravenous regular insulin infusion targeting a strict blood glucose of 80 to 110 mg/dL',
        explanation: 'Intensive IV insulin targeting euglycemia (80–110 mg/dL) is reserved for intensive care unit settings and was shown by the NICE-SUGAR trial to increase severe hypoglycemia and all-cause mortality.'
      },
      {
        text: 'Withhold all insulin therapy unless blood glucose values consistently exceed 350 mg/dL',
        explanation: 'Permitting sustained hyperglycemia > 200–300 mg/dL impairs neutrophil phagocytosis, increases bacteremia and secondary infection risk, and delays wound healing.'
      }
    ]
  },
  {
    code: 'op-c-s3-0078',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Medical Malpractice Four Tort Elements and Compensable Harm',
    subtopic: 'Breach of Standard of Care versus Actual Measurable Damages',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Understand the four essential legal elements of medical malpractice tort: 1. Duty of care (established physician-patient relationship); 2. Breach of duty (failure to meet accepted standard of care); 3. Causation (proximate cause linking breach to outcome); 4. Damages (actual, measurable physical, emotional, or financial harm). Even if a physician clearly breaches the standard of care (negligence), a malpractice lawsuit CANNOT succeed if the patient suffered NO actual physical injury or compensable harm.',
    references: [
      {
        label: 'Buppert C. Legal and Ethical Issues in Healthcare. 5th ed. Burlington, MA: Jones & Bartlett Learning; 2018.',
        url: 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101704257'
      }
    ],
    stem:
      'A 54-year-old man visits his primary care physician for a routine health maintenance examination. During the encounter, the physician orders routine blood work, including a lipid panel and serum chemistry. The patient has a documented allergy to amoxicillin (anaphylaxis with angioedema and bronchospasm 5 years ago, clearly displayed in bold red letters on his electronic medical record). Later that day, while distracted by a medical emergency in the clinic, the physician accidentally enters an electronic prescription for amoxicillin 500 mg three times daily intended for a different patient into this patient’s outpatient chart. The pharmacy dispenses the 30-day bottle of amoxicillin capsules to the patient. Upon arriving home, the patient notices the medication label, immediately recognizes that he was dispensed penicillin, and does not open the bottle or ingest any pills. He returns the bottle to the clinic the next morning and consults a medical malpractice attorney, seeking \$500,000 in damages for physician negligence. Which of the following legal elements is lacking, preventing a successful medical malpractice tort claim by this patient?',
    options: [
      {
        text: 'Actual measurable injury or compensable damages resulting from the breach of duty',
        explanation: 'To establish a successful medical malpractice tort claim under common law, the plaintiff must prove four distinct legal elements by a preponderance of the evidence: (1) Duty (a legal obligation to adhere to an accepted standard of care arising from the physician-patient relationship); (2) Breach of duty (failure to meet the standard of care that a reasonably prudent physician would provide in similar circumstances); (3) Causation (both cause-in-fact ["but-for" cause] and proximate cause linking the breach to the adverse outcome); and (4) Damages (actual, compensable physical, financial, or severe emotional harm). In this case, although the physician clearly breached the standard of care by prescribing a contraindicated antibiotic, the patient never ingested the medication and suffered no physical injury, financial loss, or harm. Without damages, no malpractice liability exists.'
      },
      {
        text: 'A formal legal duty of care established between the physician and the patient',
        explanation: 'A formal duty of care was established as soon as the physician agreed to evaluate and treat the patient during the scheduled clinic encounter.'
      },
      {
        text: 'Deviation from the accepted medical standard of care by the prescribing physician',
        explanation: 'Prescribing a known lethal allergen clearly documented in the electronic medical record represents an undeniable breach (deviation from the standard of care).'
      },
      {
        text: 'Establishment of res ipsa loquitur doctrine governing healthcare errors',
        explanation: 'Res ipsa loquitur ("the thing speaks for itself") is an evidentiary rule allowing inference of negligence when an accident would not ordinarily occur without negligence; it does not substitute for the requirement of damages.'
      },
      {
        text: 'Proof of intentional malicious misconduct or criminal gross negligence',
        explanation: 'Malpractice is a civil tort based on negligence (failure to exercise reasonable care); proof of malicious intent or criminal recklessness is not required for civil liability.'
      }
    ]
  },
  {
    code: 'op-c-s3-0079',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Non-Occupational Post-Exposure Prophylaxis for HIV Timing',
    subtopic: 'CDC 72-Hour Initiation Window and 28-Day Regimen',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize non-occupational post-exposure prophylaxis (nPEP) for HIV: Unprotected sexual exposure or needle-sharing with an individual known to be HIV-positive. Initiation window: ASAP, MUST be within 72 HOURS of exposure (ineffective if > 72 hours). Regimen: 3-drug antiretroviral regimen (e.g., Tenofovir DF + Emtricitabine PLUS Dolutegravir or Raltegravir) for exactly 28 DAYS. Baseline HIV testing (Ag/Ab) followed by repeat testing at 4-6 weeks and 3 months.',
    references: [
      {
        label: 'CDC Updated Guidelines for Antiretroviral Postexposure Prophylaxis After Exposure to HIV. 2016.',
        url: 'https://stacks.cdc.gov/view/cdc/38856'
      }
    ],
    stem:
      'A 24-year-old man presents to the urgent care clinic on Sunday morning at 10:00 AM stating that he had condomless receptive anal intercourse approximately 14 hours ago with a new male partner who disclosed afterward that he is HIV-positive and has not been taking his antiretroviral medications for several months. The patient has never been diagnosed with HIV, has no history of renal disease, and does not take pre-exposure prophylaxis (PrEP). Vital signs and physical examination are normal. Rapid HIV-1/2 antigen/antibody immunoassay performed in the clinic is non-reactive (negative). Serum creatinine is 0.8 mg/dL. He is intensely anxious and requests medications to prevent contracting HIV. According to current Centers for Disease Control and Prevention (CDC) guidelines, which of the following is the most appropriate post-exposure prophylaxis (PEP) protocol for this patient?',
    options: [
      {
        text: 'Initiate a 3-drug antiretroviral regimen (tenofovir disoproxil fumarate, emtricitabine, plus dolutegravir) immediately, completing a 28-day course',
        explanation: 'This patient has had a high-risk non-occupational exposure to HIV (receptive anal intercourse with a viremic partner). CDC guidelines mandate that non-occupational post-exposure prophylaxis (nPEP) must be initiated as soon as possible, and strictly within 72 hours of exposure. After 72 hours, animal and clinical studies demonstrate that viral dissemination to regional lymph nodes has occurred, rendering PEP ineffective. The recommended first-line PEP regimen for adults with normal renal function consists of a 3-drug combination: tenofovir disoproxil fumarate (TDF) 300 mg plus emtricitabine (FTC) 200 mg once daily, COMBINED WITH an integrase strand transfer inhibitor (INSTI), specifically dolutegravir 50 mg once daily (or raltegravir 400 mg twice daily). The regimen must be taken faithfully for exactly 28 consecutive days.'
      },
      {
        text: 'Initiate tenofovir disoproxil fumarate plus emtricitabine dual therapy alone for 14 days',
        explanation: 'Two-drug regimens are approved for Pre-Exposure Prophylaxis (PrEP), but PEP requires a 3-drug regimen containing an INSTI to achieve rapid, potent viral blockade; 14 days is insufficient (28 days required).'
      },
      {
        text: 'Withhold antiretroviral medications and perform repeat HIV antibody testing in 4 weeks',
        explanation: 'Withholding PEP misses the critical 72-hour window during which viral replication can be aborted, leaving the patient at high risk of permanent established HIV infection.'
      },
      {
        text: 'Administer intramuscular HIV immune globulin within 24 hours of exposure',
        explanation: 'There is no commercially available or efficacious HIV immune globulin; passive antibody prophylaxis does not exist for HIV.'
      },
      {
        text: 'Initiate oral zidovudine monotherapy for 6 months with biweekly viral load monitoring',
        explanation: 'Zidovudine monotherapy is obsolete due to high toxicity (anemia, neutropenia) and markedly inferior efficacy compared to modern 3-drug INSTI-based regimens.'
      }
    ]
  },
  {
    code: 'op-c-s3-0080',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Secondary Hyperparathyroidism in Hemodialysis Calcimimetic Therapy',
    subtopic: 'Calcium-Sensing Receptor Activation and Parathyroid Hormone Suppression',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize secondary hyperparathyroidism in ESRD on hemodialysis: hyperphosphatemia, hypocalcemia/normocalcemia, and markedly elevated intact PTH (> 600-800 pg/mL). When hypercalcemia or elevated calcium-phosphate product limits vitamin D analogs, CALCIMIMETICS (cinacalcet or IV etelcalcetide) are indicated. Mechanism: allosterically activates the calcium-sensing receptor (CaSR) on parathyroid chief cells, tricking the gland into perceiving high calcium, suppressing PTH secretion while simultaneously LOWERING serum calcium and phosphorus.',
    citation: 'Kidney Disease: Improving Global Outcomes (KDIGO) CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD). Kidney Int Suppl (2011). 2017;7(1):1-59. PMID: 30675257.',
    stem:
      'A 56-year-old man with end-stage kidney disease secondary to diabetic nephropathy maintained on thrice-weekly hemodialysis for 5 years is evaluated for progressive bone pain and muscle weakness. He currently takes sevelamer carbonate 1,600 mg with each meal and calcitriol 0.5 mcg daily. Laboratory studies obtained prior to his midweek hemodialysis session reveal: serum calcium 10.4 mg/dL (normal: 8.5–10.5 mg/dL), serum phosphate 6.8 mg/dL (normal: 2.5–4.5 mg/dL), calcium-phosphate product 70.7 mg2/dL2 (target: < 55 mg2/dL2), and serum intact parathyroid hormone (iPTH) 890 pg/mL (KDIGO target range for dialysis: ~150–600 pg/mL). His calcitriol is discontinued to avoid further worsening of his hypercalcemia and hyperphosphatemia. Which of the following therapeutic agents acts directly on parathyroid tissue to suppress parathyroid hormone secretion while simultaneously reducing both serum calcium and serum phosphate levels?',
    options: [
      {
        text: 'Oral cinacalcet hydrochloride',
        explanation: 'This hemodialysis patient has severe secondary (bordering on tertiary) hyperparathyroidism with an elevated calcium-phosphate product (> 55 mg2/dL2) and high PTH. Active vitamin D analogs (calcitriol, paricalcitol) suppress PTH by binding vitamin D receptors, but they increase intestinal calcium and phosphate absorption, exacerbating hypercalcemia and vascular calcification. In contrast, calcimimetics (such as oral cinacalcet or intravenous etelcalcetide) act as positive allosteric modulators of the calcium-sensing receptor (CaSR) on parathyroid chief cells. By increasing the receptor’s sensitivity to extracellular calcium, calcimimetics trick the parathyroid gland into sensing higher calcium levels, thereby directly suppressing PTH transcription and secretion, which consequently reduces both serum calcium and serum phosphate.'
      },
      {
        text: 'Oral calcium acetate',
        explanation: 'Calcium acetate is a calcium-containing phosphate binder; it increases serum calcium load and would worsen hypercalcemia and vascular calcification.'
      },
      {
        text: 'Intravenous ergocalciferol',
        explanation: 'Nutritional vitamin D2 (ergocalciferol) requires 1-alpha-hydroxylation in the kidney, which is absent in non-functioning dialysis kidneys, and does not suppress high PTH.'
      },
      {
        text: 'Subcutaneous teriparatide',
        explanation: 'Teriparatide is recombinant PTH (1-34); administering it to a patient with an intact PTH of 890 pg/mL would cause severe hypercalcemia and accelerate osteitis fibrosa cystica.'
      },
      {
        text: 'Oral sodium polystyrene sulfonate',
        explanation: 'Sodium polystyrene sulfonate is a potassium-binding resin used for hyperkalemia; it has no effect on parathyroid hormone secretion or calcium-phosphate metabolism.'
      }
    ]
  },
  {
    code: 'op-c-s3-0081',
    exam: 'Step 3',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Cervical Cancer Screening USPSTF Guidelines and Discontinuation Age',
    subtopic: 'Ages 30 to 65 Modalities and Adequate Prior Screening Criteria',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize USPSTF cervical cancer screening guidelines: Women aged 21 to 29: cervical cytology alone every 3 years. Women aged 30 to 65: 1. Cytology alone every 3 years, OR 2. hrHPV alone every 5 years, OR 3. Cotesting (cytology + hrHPV) every 5 years. Discontinuation at age 65: permitted ONLY if adequate prior negative screening (3 consecutive negative cytology OR 2 consecutive negative cotests within past 10 years, most recent within 5 years) and no history of CIN 2+ in past 20 years.',
    citation: 'US Preventive Services Task Force. Screening for Cervical Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;320(7):674-686. PMID: 30128473.',
    stem:
      'A 65-year-old woman presents to the gynecology clinic for an annual well-woman examination. She feels completely well and reports no abnormal postcoital bleeding, intermenstrual spotting, pelvic pain, or vaginal discharge. She has been in a monogamous relationship with her husband for 38 years. Her medical history includes well-controlled hypertension and osteopenia. Review of her medical records confirms that she underwent cervical screening at age 55 (normal cytology and negative high-risk HPV), age 60 (normal cytology and negative high-risk HPV), and 8 months ago at age 64 (normal cytology and negative high-risk HPV). She has never had an abnormal Pap smear, high-grade cervical dysplasia (CIN 2 or CIN 3), or cervical surgical excisions. Physical examination reveals normal external genitalia and a smooth, normal-appearing cervix without lesions. According to the United States Preventive Services Task Force (USPSTF) guidelines, which of the following is the most appropriate cervical cancer screening recommendation for this patient?',
    options: [
      {
        text: 'Discontinue routine cervical cancer screening permanently because she meets criteria for adequate prior negative screening',
        explanation: 'According to USPSTF and American Cancer Society guidelines, cervical cancer screening should be discontinued at age 65 in women who have had "adequate prior negative screening" and are not otherwise at high risk for cervical cancer. Adequate prior negative screening is defined as: (1) three consecutive negative cytology results alone, OR (2) two consecutive negative high-risk HPV or cotesting results within the past 10 years, with the most recent test performed within the past 5 years. Additionally, the patient must have no history of CIN 2, CIN 3, or cervical cancer within the preceding 20 years. This patient meets all criteria (consecutive negative cotests at ages 55, 60, and 64 with no history of dysplasia), allowing safe, permanent cessation of screening.'
      },
      {
        text: 'Continue routine screening with high-risk HPV testing every 5 years until age 75',
        explanation: 'Extending routine screening past age 65 in women with adequate negative prior testing provides zero mortality reduction and increases false-positive results and invasive colposcopies.'
      },
      {
        text: 'Perform annual cervical liquid-based cytology indefinitely regardless of prior history',
        explanation: 'Annual Pap testing is obsolete and not recommended for any average-risk age group, especially older women who qualify for screening discontinuation.'
      },
      {
        text: 'Perform diagnostic colposcopy and endocervical curettage today before permitting screening cessation',
        explanation: 'Colposcopy is indicated only for abnormal screening results (e.g., ASC-US with HPV+, LSIL, HSIL); it is never used to clear an asymptomatic patient with normal cotesting.'
      },
      {
        text: 'Discontinue screening only if she agrees to undergo prophylactic total laparoscopic hysterectomy',
        explanation: 'Hysterectomy is major surgery with significant morbidity; performing prophylactic surgery to avoid non-invasive screening in a low-risk 65-year-old woman is malpractice.'
      }
    ]
  },
  {
    code: 'op-c-s3-0082',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Cardiogenic Shock Cold and Wet Profile Inotropic Support',
    subtopic: 'Hypoperfusion with Volume Overload and Dobutamine Mechanism',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute decompensated heart failure hemodynamic profiles (Forrester classification): "Cold and Wet" (hypoperfused + congested). Features: low cardiac output (cold extremities, oliguria, rising Cr, elevated lactate) AND high filling pressures (pulmonary crackles, JVD, S3). In "cold and wet" with low-normal SBP (85-95 mm Hg), pure vasodilators can cause cardiovascular collapse, and beta-blockers worsen shock. First-line therapy: INOTROPES (dobutamine or milrinone) to restore cardiac output and systemic perfusion, combined with cautious IV loop diuretics.',
    citation: 'Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.',
    stem:
      'A 67-year-old man with end-stage ischemic cardiomyopathy (left ventricular ejection fraction 18%) is admitted to the cardiac intensive care unit with worsening shortness of breath at rest, orthopnea, and confusion. On physical examination, he appears somnolent and in respiratory distress. Blood pressure is 84/56 mm Hg, heart rate is 108/min, respirations are 28/min, and oxygen saturation is 89% on 4 L/min nasal cannula. Jugular venous pressure is distended to the angle of the jaw at 90 degrees. Cardiac auscultation reveals a prominent S3 gallop and a soft holosystolic murmur of functional mitral regurgitation. Pulmonary auscultation reveals bilateral coarse crackles extending up to the mid-lung zones. His upper and lower extremities are cool, clammy, and mottled with delayed capillary refill of 5 seconds (hypoperfusion). Laboratory studies reveal: serum creatinine increased to 2.8 mg/dL (baseline 1.2 mg/dL), BUN 64 mg/dL, and arterial blood lactate elevated at 3.8 mmol/L. Bedside echocardiogram demonstrates severe biventricular systolic dysfunction with a stroke volume index of 18 mL/m2. Which of the following is the most appropriate initial pharmacological strategy to restore systemic organ perfusion and relieve congestion?',
    options: [
      {
        text: 'Initiate an intravenous inotrope (such as dobutamine) combined with cautious intravenous loop diuretic therapy',
        explanation: 'This patient presents in acute decompensated heart failure with a "cold and wet" hemodynamic profile (cardiogenic shock with pulmonary congestion). "Cold" denotes severe systemic hypoperfusion (hypotension, cool mottled extremities, acute prerenal kidney injury, elevated lactate, altered mentation), while "wet" denotes severe venous congestion (JVD, pulmonary crackles, S3). In patients with severe low-output state and borderline low blood pressure (SBP < 90 mm Hg), administering aggressive diuretics alone or vasodilators (nitroprusside) causes profound hemodynamic collapse. The primary immediate goal is to restore cardiac output and forward perfusion using an inotropic agent (dobutamine [beta-1 > beta-2 agonist] or milrinone [phosphodiesterase-3 inhibitor]), which increases stroke volume and decreases end-diastolic pressures, enabling the kidneys to respond safely to intravenous loop diuretics.'
      },
      {
        text: 'Intravenous sodium nitroprusside monotherapy titrated to systemic vascular resistance',
        explanation: 'Nitroprusside is a potent arterial and venous vasodilator indicated for "warm and wet" hypertensive heart failure; in a patient with SBP 84 mm Hg and cardiogenic shock, it induces catastrophic fatal hypotension.'
      },
      {
        text: 'Intravenous bolus of metoprolol tartrate to reduce myocardial oxygen demand',
        explanation: 'Beta-blockers exert negative inotropic effects and are strictly contraindicated in acute decompensated heart failure with cardiogenic shock or hypoperfusion; they precipitate acute electromechanical dissociation.'
      },
      {
        text: 'Intravenous infusion of 2 liters of 0.9% normal saline over 1 hour to correct prerenal azotemia',
        explanation: 'Infusing large volumes of saline in a patient with massive left ventricular volume overload and pulmonary edema triggers acute respiratory arrest requiring emergency intubation.'
      },
      {
        text: 'Immediate discontinuation of all oxygen support to stimulate endogenous hypoxic vasoconstriction',
        explanation: 'Withholding oxygen worsens myocardial and cerebral hypoxia; supplemental oxygen or non-invasive positive pressure ventilation is essential.'
      }
    ]
  },
  {
    code: 'op-c-s3-0083',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Opioid-Induced Constipation Stepwise Laxative Pharmacotherapy',
    subtopic: 'Peripherally Acting Mu-Opioid Receptor Antagonists',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize opioid-induced constipation (OIC): Opioids bind peripheral enteric mu receptors, slowing peristalsis and mucosal secretions. Tolerance does NOT develop to constipation. Prevention/first-line therapy: STIMULANT LAXATIVE (senna, bisacodyl) +/- osmotic agent (polyethylene glycol). Docusate (stool softener) alone is ineffective. For refractory OIC failing standard laxatives, initiate a PERIPHERALLY ACTING MU-OPIOID RECEPTOR ANTAGONIST (PAMORA, e.g., oral naldemedine, naloxegol, or subcutaneous methylnaltrexone), which reverses bowel dysfunction without crossing blood-brain barrier or affecting analgesia.',
    citation: 'Crockett SD, et al. American Gastroenterological Association Institute Guideline on the Medical Management of Opioid-Induced Constipation. Gastroenterology. 2019;156(1):218-226. PMID: 30342045.',
    stem:
      'A 61-year-old man with metastatic prostate cancer to the spine and pelvis presents to the palliative care clinic with severe abdominal bloating, crampy pain, and absence of bowel movements for the past 6 days. Three weeks ago, his oncology team escalated his pain regimen to oral extended-release morphine (60 mg twice daily) and immediate-release morphine (15 mg every 4 hours as needed), which has achieved excellent pain control. At that time, he was advised to take over-the-counter docusate sodium (100 mg twice daily). On physical examination, he appears uncomfortable. Vital signs are normal. Abdominal examination reveals a distended abdomen with tympany, mild generalized tenderness without rebound or guarding, and hypoactive bowel sounds. Digital rectal examination reveals hard, dry stool in the rectal vault. Plain abdominal radiography demonstrates extensive fecal loading throughout the colon without air-fluid levels, free air, or mechanical obstruction. The physician manual-evacuates the rectal vault and adds scheduled oral senna and polyethylene glycol. Two weeks later, despite adherence to daily senna and polyethylene glycol, the patient continues to experience fewer than two painful, straining bowel movements per week. Which of the following is the most appropriate next therapeutic agent for this patient’s refractory condition?',
    options: [
      {
        text: 'Oral naldemedine or subcutaneous methylnaltrexone',
        explanation: 'This patient has refractory opioid-induced constipation (OIC). Opioids bind enteric mu-opioid receptors in the myenteric and submucosal plexuses, inhibiting gastric emptying, reducing peristalsis, and decreasing intestinal fluid secretion. Unlike opioid-induced nausea and sedation, patients never develop pharmacological tolerance to constipation. While first-line management combines a stimulant laxative (senna, bisacodyl) with an osmotic agent (polyethylene glycol), refractory OIC warrants treatment with a peripherally acting mu-opioid receptor antagonist (PAMORA), such as oral naldemedine, oral naloxegol, or subcutaneous methylnaltrexone. PAMORAs have high polarity and low lipid solubility, preventing them from crossing the blood-brain barrier. Consequently, they selectively block peripheral gut mu receptors, restoring normal motility without compromising central opioid analgesia or precipitating opioid withdrawal.'
      },
      {
        text: 'Increase oral docusate sodium dosage to 400 mg three times daily',
        explanation: 'Multiple randomized clinical trials have proven docusate to be no more effective than placebo for opioid-induced constipation; increasing the dose of an ineffective surfactant provides no benefit.'
      },
      {
        text: 'Switch from oral morphine to intravenous naloxone continuous infusion',
        explanation: 'Systemic naloxone freely crosses the blood-brain barrier, which would immediately reverse central analgesia, causing agonizing cancer pain crisis and acute opioid withdrawal.'
      },
      {
        text: 'Discontinue all opioid analgesics immediately and transition to oral ketorolac monotherapy',
        explanation: 'Stopping opioids abruptly triggers acute withdrawal and severe uncontrolled oncologic pain; NSAID monotherapy is inadequate for metastatic bone cancer pain and causes renal failure.'
      },
      {
        text: 'Oral loperamide hydrochloride administered before each meal',
        explanation: 'Loperamide is a peripheral mu-opioid receptor agonist used to treat diarrhea; administering it to a constipated patient will cause toxic megacolon and bowel perforation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0084',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Subclinical Hyperthyroidism Complications and Treatment Criteria',
    subtopic: 'Atrial Fibrillation Osteoporosis and Suppressed TSH Thresholds',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize subclinical hyperthyroidism: suppressed serum TSH (< 0.1 microU/mL) with normal free T4 and free T3. Major clinical consequences: 1. 3-fold increased risk of atrial fibrillation; 2. Accelerated bone loss and osteoporotic fractures in postmenopausal women. ATA/AACE guidelines recommend definitive treatment (methimazole or radioiodine) if: age >= 65, underlying cardiovascular disease, osteoporosis, or persistent TSH < 0.1 microU/mL.',
    citation: 'Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421. PMID: 27521067.',
    stem:
      'A 69-year-old postmenopausal woman presents to the clinic for follow-up of routine laboratory tests. She feels well and denies palpitations, heat intolerance, tremor, weight loss, or changes in bowel habits. Her medical history includes hypertension well-controlled on amlodipine and osteopenia diagnosed on DEXA scan 2 years ago (lumbar T-score -2.2). Physical examination reveals blood pressure of 128/78 mm Hg and heart rate of 74/min and regular. There is no tremor, proptosis, or lid lag. Thyroid examination demonstrates a normal-sized thyroid gland without palpable nodules or bruits. Initial laboratory testing 8 weeks ago demonstrated a serum TSH of 0.04 microU/mL (normal: 0.4–4.0 microU/mL) with normal free T4 (1.2 ng/dL) and normal total T3 (110 ng/dL). Repeat laboratory evaluation today confirms persistent TSH suppression at 0.03 microU/mL, with persistently normal free T4 and free T3. Radioactive iodine uptake (RAIU) scan reveals a 24-hour uptake of 32% (normal: 10–30%) with homogeneous distribution. Which of the following represents the most compelling clinical rationale for initiating definitive antithyroid therapy in this asymptomatic patient?',
    options: [
      {
        text: 'Significantly elevated risks of developing atrial fibrillation and accelerated bone mineral density loss',
        explanation: 'This patient has persistent subclinical hyperthyroidism (grade 2, defined as fully suppressed TSH < 0.1 microU/mL with normal free T4 and free T3). Even in the absence of overt thyrotoxic symptoms, prolonged subclinical hyperthyroidism has serious long-term adverse health consequences: (1) a 3- to 5-fold increased incidence of atrial fibrillation and embolic stroke, particularly in adults aged >= 65 years; and (2) accelerated osteoclastic bone resorption leading to worsening osteoporosis and fragility fractures in postmenopausal women. The American Thyroid Association (ATA) strongly recommends treatment (oral methimazole or radioiodine ablation) for all patients aged >= 65 years, patients with underlying cardiovascular disease or osteoporosis, and whenever TSH is persistently < 0.1 microU/mL.'
      },
      {
        text: 'Imminent progression to acute life-threatening thyroid storm within the next 30 days',
        explanation: 'Progression to thyroid storm from subclinical hyperthyroidism is exceedingly rare unless precipitated by major trauma, surgery, or massive iodine radiocontrast loads.'
      },
      {
        text: 'Development of severe infiltrative ophthalmopathy and pretibial myxedema',
        explanation: 'Graves ophthalmopathy correlates with high thyroid-stimulating immunoglobulin titers; subclinical hyperthyroidism alone without high antibodies rarely causes severe ophthalmopathy.'
      },
      {
        text: 'High likelihood of malignant transformation into undifferentiated anaplastic thyroid carcinoma',
        explanation: 'Thyroid dysfunction does not drive anaplastic transformation; anaplastic carcinoma arises from dedifferentiated papillary/follicular carcinomas, not subclinical functional hyperactivity.'
      },
      {
        text: 'Prevention of secondary pituitary adenoma enlargement caused by negative feedback failure',
        explanation: 'Secondary pituitary hyperplasia occurs in severe untreated primary hypothyroidism (high TRH driving thyrotrophs), never in hyperthyroid suppressed TSH states.'
      }
    ]
  },
  {
    code: 'op-c-s3-0085',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Recurrent Clostridioides Difficile Infection Fidaxomicin Strategy',
    subtopic: 'IDSA 2021 Update on Narrow-Spectrum Bactericidal Macrocycles',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize management of recurrent Clostridioides difficile infection: Updated IDSA/SHEA guidelines prefer oral FIDAXOMICIN (200 mg BID for 10 days) over vancomycin for initial and first recurrent episodes because fidaxomicin is a narrow-spectrum bactericidal RNA polymerase inhibitor that preserves native colonic microbiota (Bacteroidetes and Firmicutes), significantly reducing subsequent recurrence rates. If vancomycin was used initially, fidaxomicin or a prolonged vancomycin taper/pulsed regimen is indicated.',
    citation: 'Johnson S, et al. IDSA/SHEA 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164674.',
    stem:
      'A 68-year-old woman presents to the clinic with watery diarrhea (5–6 episodes daily), lower abdominal cramping, and low-grade fever for 3 days. Four weeks ago, she completed a 10-day course of oral vancomycin (125 mg four times daily) for her first episode of non-severe Clostridioides difficile infection (CDI) following antibiotic treatment for diverticulitis, which resulted in complete resolution of diarrhea. On physical examination, temperature is 37.8 C (100.0 F), blood pressure is 124/76 mm Hg, and heart rate is 84/min. Abdomen is soft with mild left lower quadrant tenderness without guarding or rebound. Complete blood count reveals: white blood cell count 10,800/microL and serum creatinine 0.9 mg/dL. Stool enzyme immunoassay is positive for C. difficile toxins A and B. According to the updated Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA) guidelines, which of the following is the preferred first-line pharmacological regimen for this first recurrence of CDI?',
    options: [
      {
        text: 'Oral fidaxomicin 200 mg twice daily for 10 days',
        explanation: 'The patient is experiencing her first recurrence of Clostridioides difficile infection (CDI). Recurrence occurs in 20–25% of patients following a standard course of vancomycin, primarily due to persistence of dormant C. difficile spores and failure of the depleted normal colonic microbiota to recover. In the 2021 focused guideline update, IDSA/SHEA designate oral fidaxomicin as the preferred first-line agent for both initial episodes and first recurrences of CDI. Fidaxomicin is a bactericidal macrocyclic RNA polymerase inhibitor with minimal systemic absorption. Unlike vancomycin (which broad-spectrum disrupts colonic anaerobic microbiota), fidaxomicin has a narrow spectrum that spares beneficial commensal flora (Bacteroides, Firmicutes), resulting in a >40–50% reduction in subsequent recurrence rates.'
      },
      {
        text: 'Repeat the identical 10-day course of oral vancomycin 125 mg four times daily',
        explanation: 'Repeating the identical 10-day vancomycin regimen that previously failed yields very high second recurrence rates (>35%); guidelines recommend fidaxomicin or a prolonged vancomycin pulsed/tapered regimen.'
      },
      {
        text: 'Oral metronidazole 500 mg three times daily for 14 days',
        explanation: 'Oral metronidazole is no longer recommended as first-line therapy for CDI due to documented inferior clinical cure rates and higher recurrence rates compared to vancomycin and fidaxomicin.'
      },
      {
        text: 'Immediate colonoscopic fecal microbiota transplantation (FMT)',
        explanation: 'Fecal microbiota transplantation (FMT) is guideline-endorsed for multiple recurrent CDI (at least two prior recurrences / three episodes total) failing targeted antibiotic therapy, not for a first recurrence.'
      },
      {
        text: 'Intravenous tigecycline monotherapy combined with oral cholestyramine',
        explanation: 'Tigecycline is reserved for refractory fulminant colitis; cholestyramine binds vancomycin and fidaxomicin in the gut lumen, inactivating them and causing clinical failure.'
      }
    ]
  },
  {
    code: 'op-c-s3-0086',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Chronic Hepatitis B Treatment Indications and Oral Antivirals',
    subtopic: 'AASLD Guidelines on ALT Thresholds HBV DNA and Entecavir',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize AASLD treatment indications for chronic Hepatitis B (CHB): Treatment is indicated if: 1. Immune-active CHB: elevated ALT (> 2x ULN) AND elevated HBV DNA (> 2,000 IU/mL for HBeAg-negative, > 20,000 IU/mL for HBeAg-positive); OR 2. Cirrhosis (compensated or decompensated) with ANY detectable HBV DNA; OR 3. Advanced fibrosis (>= F2). First-line therapy: oral nucleos(t)ide analogs with high barrier to resistance (ENTECAVIR, TENOFOVIR DISOPROXIL FUMARATE, or TENOFOVIR ALAFENAMIDE). Inactive carriers (normal ALT, low DNA) are monitored.',
    citation: 'Terrault NA, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD 2018 hepatitis B guidance. Hepatology. 2018;67(4):1560-1599. PMID: 29405329.',
    stem:
      'A 38-year-old Asian American man presents to the hepatology clinic for evaluation of chronic Hepatitis B virus (HBV) infection diagnosed during routine screening 1 year ago. He is asymptomatic and feels well. Physical examination reveals no stigmata of chronic liver disease, no jaundice, and no hepatosplenomegaly. Serial laboratory monitoring over the past 6 months reveals: persistent HBsAg positivity, HBeAg negativity, and anti-HBe positivity. Serum alanine aminotransferase (ALT) is persistently elevated at 88 U/L (normal: <= 35 U/L for men; > 2x upper limit of normal), and AST is 74 U/L. Serum total bilirubin, albumin, and platelet count (220,000/microL) are completely normal. Quantitative serum HBV DNA is 48,000 IU/mL. Transient elastography (FibroScan) reveals a liver stiffness measurement of 8.8 kPa, corresponding to moderate-to-advanced hepatic fibrosis (stage F2–F3). Abdominal ultrasonography reveals normal hepatic parenchyma without focal nodules. According to current American Association for the Study of Liver Diseases (AASLD) guidelines, which of the following is the most appropriate management plan?',
    options: [
      {
        text: 'Initiate long-term oral antiviral monotherapy with entecavir or tenofovir',
        explanation: 'This patient has HBeAg-negative immune-active chronic hepatitis B, defined by HBsAg positivity, elevated serum ALT (> 2x ULN), elevated HBV DNA (> 2,000 IU/mL), and documented significant hepatic fibrosis (F2–F3). Untreated immune-active CHB carries high risks of cirrhosis progression, hepatic decompensation, and hepatocellular carcinoma (HCC). AASLD guidelines strongly recommend initiating antiviral therapy for immune-active disease. First-line preferred agents are oral nucleos(t)ide analogs with high genetic barriers to resistance: entecavir, tenofovir disoproxil fumarate (TDF), or tenofovir alafenamide (TAF). These agents potently inhibit HBV DNA polymerase, suppress viral replication, normalize ALT, and reverse fibrosis.'
      },
      {
        text: 'Continue observation without antiviral treatment and repeat liver function tests in 12 months',
        explanation: 'Observation is appropriate only for "inactive carriers" (normal ALT, HBV DNA < 2,000 IU/mL, no fibrosis); withholding therapy in a patient with active inflammation and F2–F3 fibrosis permits cirrhosis progression.'
      },
      {
        text: 'Initiate oral lamivudine monotherapy 100 mg daily',
        explanation: 'Lamivudine has a very low genetic barrier to resistance, with resistance rates exceeding 70% at 5 years due to YMDD mutations; it is no longer recommended as first-line therapy.'
      },
      {
        text: 'Administer hepatitis B immune globulin (HBIG) intramuscularly once monthly',
        explanation: 'HBIG is used for post-exposure prophylaxis or post-liver transplantation to prevent graft reinfection; it has no role in treating established chronic hepatitis B.'
      },
      {
        text: 'Initiate oral ribavirin monotherapy for 24 weeks',
        explanation: 'Ribavirin has zero clinical activity against hepatitis B virus and causes severe hemolytic anemia; it was historically used for hepatitis C.'
      }
    ]
  },
  {
    code: 'op-c-s3-0087',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'Behavioral Health',
    topic: 'Delirium Prevention Multi-Component Non-Pharmacological Bundle',
    subtopic: 'Hospital Elder Life Program and Avoidance of Tethers',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize delirium: acute, fluctuating disturbance in attention, awareness, and cognition (Confusion Assessment Method [CAM] positive). Pathogenesis is multifactorial in hospitalized elderly. The most effective evidence-based intervention to prevent and manage delirium is a MULTI-COMPONENT NON-PHARMACOLOGICAL BUNDLE (HELP program): frequent reorientation, maintaining circadian sleep-wake cycles (noise reduction at night, natural daytime light), early mobilization, sensory aids (glasses/hearing aids), adequate hydration, and removal of physical tethers (Foley catheters, restraints). Antipsychotics do NOT prevent or resolve delirium.',
    citation: 'Inouye SK, et al. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774.',
    stem:
      'An 81-year-old woman is admitted to the hospital medicine service following an elective left total knee arthroplasty. Her postoperative medications include scheduled acetaminophen, celecoxib, and low-dose oral oxycodone as needed for breakthrough pain. On postoperative day 2, her nurse reports that the patient was awake and lucid during the morning, but became disoriented, anxious, and agitated in the evening, attempting to climb out of bed and claiming that spiders were crawling on the wall. Physical examination reveals an inattentive woman with waxing and waning concentration. When asked to spell the word "WORLD" backward, she cannot proceed past the first letter. Her vital signs, surgical wound, complete blood count, electrolytes, and urinalysis are completely normal. She has an indwelling Foley catheter in place and bilateral soft wrist restraints applied by the nursing staff to prevent falls. According to current geriatric practice guidelines and the Hospital Elder Life Program (HELP), which of the following multi-component strategies is the most effective approach to reduce the duration and severity of delirium in this patient?',
    options: [
      {
        text: 'Discontinue physical restraints, remove the indwelling catheter, provide sensory aids, ensure early mobilization, and implement scheduled reorientation',
        explanation: 'This patient has acute postoperative delirium, validated by the Confusion Assessment Method (CAM: acute onset and fluctuating course, inattention, plus disorganized thinking or altered level of consciousness). Delirium is driven by predisposing vulnerability factors (advanced age, joint surgery) interacting with precipitating hospital insults. Landmark clinical trials (e.g., Hospital Elder Life Program [HELP]) prove that multi-component, non-pharmacological interventions are the most effective strategy to prevent and resolve delirium. Key components include: (1) removing physical restraints and indwelling bladder catheters (tethers that heighten agitation and sensory deprivation); (2) early daytime mobilization and physical therapy; (3) ensuring access to eyeglasses and hearing aids; (4) preserving circadian sleep-wake cycles (quiet nights, natural daytime light); and (5) frequent verbal reorientation by staff and family.'
      },
      {
        text: 'Prescribe scheduled oral haloperidol (2 mg twice daily) to resolve the underlying delirium',
        explanation: 'Randomized clinical trials demonstrate that antipsychotics (haloperidol, atypical antipsychotics) do not reduce delirium incidence, shorten delirium duration, or decrease hospital mortality; they are reserved only for dangerous physical aggression.'
      },
      {
        text: 'Administer intravenous lorazepam (1 mg every 4 hours as needed) to promote sedation',
        explanation: 'Benzodiazepines are a major precipitating cause of delirium in elderly patients, worsening cognitive impairment, prolonging hospitalization, and increasing fall risk.'
      },
      {
        text: 'Maintain strict bed rest in a darkened, silent private room with continuous bilateral wrist restraints',
        explanation: 'Sensory deprivation, isolation, and physical restraints exacerbate delirium, accelerate functional deconditioning, and cause asphyxiation and pressure injuries.'
      },
      {
        text: 'Initiate continuous intravenous propofol infusion targeting a Richmond Agitation-Sedation Scale score of -4',
        explanation: 'Deep pharmacologic coma with propofol requires ICU intubation and mechanical ventilation, carrying substantial morbidity for uncomplicated postoperative delirium.'
      }
    ]
  },
  {
    code: 'op-c-s3-0088',
    exam: 'Step 3',
    subject: 'Surgery',
    system: 'Respiratory',
    topic: 'Preoperative Smoking Cessation Optimal Timing and Complications',
    subtopic: 'Four to Eight Week Window for Secretion Clearance and Wound Healing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize optimal timing for preoperative smoking cessation before elective surgery: Stopping smoking >= 4 to 8 WEEKS prior to surgery is required to significantly reduce postoperative pulmonary complications (pneumonia, atelectasis, respiratory failure) and surgical site wound healing complications. Brief cessation (< 24-48 hours) reduces carboxyhemoglobin and nicotine levels, improving tissue oxygenation, but does NOT reduce postoperative pulmonary morbidity because airway mucus hypersecretion and ciliary clearance require 4-8 weeks to normalize.',
    citation: 'Wong J, et al. Preoperative smoking cessation and postoperative complications: a systematic review and meta-analysis. Can J Anaesth. 2012;59(3):268-279. PMID: 22183679.',
    stem:
      'A 58-year-old man presents to the preoperative clinic 8 weeks prior to an elective open total knee arthroplasty. He has a 35-pack-year smoking history and currently smokes 1 pack of cigarettes daily. He has mild chronic cough productive of scant white sputum in the morning. His medical history includes well-controlled hypertension on lisinopril. On physical examination, breath sounds are clear bilaterally with no wheezes or crackles. The surgical team asks the medical consultant to counsel the patient on smoking cessation. The patient asks: "If I quit smoking today, 8 weeks before my surgery, will that really make a difference compared to just stopping the night before the operation?" Which of the following counseling statements accurately reflects the physiological timeline of preoperative smoking cessation and its impact on postoperative complications?',
    options: [
      {
        text: 'Cessation for at least 4 to 8 weeks is required to normalize tracheobronchial ciliary clearance and significantly reduce postoperative pulmonary and wound complications',
        explanation: 'Cigarette smoking is an independent risk factor for both postoperative pulmonary complications (pneumonia, prolonged mechanical ventilation, atelectasis) and surgical site infections / wound dehiscence. Understanding the physiological timeline of smoking cessation is essential: Within 12 to 24 hours of cessation, carboxyhemoglobin levels normalize and nicotine-induced tachycardia/vasoconstriction resolves, improving tissue oxygen delivery. However, normalizing mucous hypersecretion, restoring tracheobronchial mucociliary clearance, and improving macrophage immune function requires at least 4 to 8 weeks. Extensive meta-analyses demonstrate that smoking cessation for >= 4 to 8 weeks prior to elective surgery significantly reduces postoperative respiratory complications by >40% and reduces surgical site wound infections.'
      },
      {
        text: 'Stopping smoking 24 hours before surgery yields identical pulmonary risk reduction to stopping 8 weeks prior',
        explanation: 'Stopping 24 hours prior normalizes carboxyhemoglobin, but does not alter airway inflammation, mucus hypersecretion, or infection risk, leaving pulmonary complication rates elevated.'
      },
      {
        text: 'Stopping smoking 4 to 8 weeks before surgery paradoxically increases postoperative pneumonia risk due to sputum impaction',
        explanation: 'The historical myth of "rebound pulmonary complications" from quitting 4–8 weeks prior has been completely refuted by large systematic reviews; every week of cessation confers incremental benefit.'
      },
      {
        text: 'Smoking cessation alters only cardiac ischemic risk, with zero demonstrated impact on wound healing or surgical site infections',
        explanation: 'Nicotine causes severe microvascular vasoconstriction and carbon monoxide impairs tissue oxygen delivery; cessation >= 4 weeks dramatically improves surgical wound tensile strength and reduces wound dehiscence.'
      },
      {
        text: 'Preoperative smoking cessation has no measurable benefit unless maintained continuously for at least 5 full years',
        explanation: 'Substantial, clinically proven reductions in surgical morbidity occur after just 4 to 8 weeks of preoperative abstinence.'
      }
    ]
  },
  {
    code: 'op-c-s3-0089',
    exam: 'Step 3',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Major Depressive Disorder Continuation and Maintenance Duration',
    subtopic: 'Relapse Prevention Phases and Long-Term Recurrence Criteria',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize duration of antidepressant therapy in Major Depressive Disorder (MDD): Phases of treatment: Acute phase (achieve remission) -> Continuation phase (4 to 9 MONTHS at therapeutic dose to prevent RELAPSE) -> Maintenance phase (>= 1-3 years or indefinitely to prevent RECURRENCE). In a patient with their FIRST episode of uncomplicated unipolar MDD achieving full remission, continue the effective antidepressant dose for at least 4 to 9 months before considering gradual taper. Maintenance therapy (>= 2 years) is indicated for >= 3 lifetime episodes, chronic depression (>2 years), or severe suicidal features.',
    citation: 'American Psychiatric Association. Practice Guideline for the Treatment of Patients With Major Depressive Disorder. 3rd ed. Washington, DC: APA; 2010. PMID: 21246534.',
    stem:
      'A 34-year-old woman presents to the clinic for follow-up of a first episode of major depressive disorder diagnosed 4 months ago. At that time, she experienced severe depressed mood, insomnia, 5-kg weight loss, feelings of worthlessness, and psychomotor retardation following a divorce. She was initiated on oral escitalopram, titrated to 20 mg daily. Over the past 6 weeks, she reports complete resolution of all depressive symptoms: her mood is bright, she sleeps 8 hours nightly, her energy and appetite have returned to baseline, and she is excelling at work. Her PHQ-9 depression score is 1 (indicating full clinical remission). She has no prior personal or family psychiatric history. She asks her physician: "Since I feel completely back to my normal self and have felt great for over a month, can I stop taking the escitalopram today?" According to American Psychiatric Association (APA) guidelines, which of the following is the most appropriate management recommendation for this patient?',
    options: [
      {
        text: 'Continue escitalopram at the full therapeutic dose of 20 mg daily for an additional 4 to 9 months (continuation phase) before considering tapering',
        explanation: 'Treatment of major depressive disorder is divided into three distinct phases: (1) Acute phase (inducing remission, typically 6–12 weeks); (2) Continuation phase (maintaining remission and preventing relapse of the same episode, lasting 4 to 9 months); and (3) Maintenance phase (preventing a new episode/recurrence, lasting >= 1–3 years or indefinitely). In patients achieving remission from a first, uncomplicated episode of unipolar major depression, APA and CANMAT guidelines strongly recommend continuing antidepressant therapy at the full therapeutic dose that achieved remission for at least 4 to 9 months. Discontinuing antidepressants immediately upon achieving initial remission results in relapse rates exceeding 40–50% within the subsequent 6 months.'
      },
      {
        text: 'Discontinue escitalopram today because sustained clinical remission for 4 weeks indicates complete biological recovery',
        explanation: 'Discontinuing antidepressants immediately after initial remission carries a high risk of acute depressive relapse within weeks.'
      },
      {
        text: 'Reduce the escitalopram dosage to 5 mg daily today as low-dose maintenance indefinitely',
        explanation: 'Dose reduction below the therapeutic level during the continuation phase provides subtherapeutic drug concentrations, increasing relapse risk without full protection.'
      },
      {
        text: 'Recommend lifelong maintenance antidepressant therapy at the full dose because depression is an incurable permanent disease',
        explanation: 'Indefinite maintenance therapy is indicated for patients with >= 3 lifetime recurrent episodes, chronic depression (>= 2 years), or severe suicide attempts, not a single uncomplicated first episode.'
      },
      {
        text: 'Transition immediately to oral bupropion monotherapy to eliminate any potential sexual side effects',
        explanation: 'Switching medications when a patient is in full remission from an effective agent risks destabilizing mood and triggering depressive relapse.'
      }
    ]
  },
  {
    code: 'op-c-s3-0090',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Severe Asymptomatic Aortic Stenosis Surveillance and AVR Indications',
    subtopic: 'Aortic Valve Area Jet Velocity and Left Ventricular Ejection Fraction',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize management of severe aortic stenosis (AS, aortic valve area <= 1.0 cm2, peak jet velocity >= 4.0 m/s, or mean gradient >= 40 mm Hg). In SYMPTOMATIC severe AS (angina, syncope, dyspnea), AVR (SAVR or TAVR) is mandatory. In ASYMPTOMATIC severe AS, watchful waiting with serial echocardiography every 6-12 months is standard UNLESS: 1. LVEF < 50%; 2. Symptoms or fall in SBP on exercise stress testing; 3. Very severe AS (Vmax >= 5.0 m/s); 4. Patient undergoing other cardiac surgery.',
    citation: 'Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021;143(5):e72-e227. PMID: 33332150.',
    stem:
      'A 72-year-old retired schoolteacher presents for a routine follow-up. He feels completely asymptomatic and walks 2 miles every morning without chest discomfort, shortness of breath, lightheadedness, or presyncope. His medical history includes well-controlled hypertension on amlodipine. Physical examination reveals blood pressure 130/78 mm Hg and heart rate 68/min. Cardiac auscultation reveals a normal S1, a single S2 with an inaudible aortic component, and a grade 3/6 late-peaking crescendo-decrescendo systolic ejection murmur heard best at the right second intercostal space with radiation to both carotid arteries. Carotid upstrokes are delayed and diminished in amplitude (pulsus parvus et tardus). Transthoracic echocardiogram demonstrates a heavily calcified trileaflet aortic valve with an aortic valve area (AVA) of 0.8 cm2, a peak aortic jet velocity of 4.2 m/s, and a mean transvalvular gradient of 44 mm Hg (severe aortic stenosis). The left ventricular ejection fraction is preserved at 62% with concentric left ventricular hypertrophy. Supervised treadmill exercise testing confirms excellent exercise tolerance with no symptoms, no ST-segment depression, and a normal rise in systolic blood pressure of 24 mm Hg. According to current ACC/AHA valvular heart disease guidelines, which of the following is the most appropriate management plan?',
    options: [
      {
        text: 'Careful clinical surveillance and repeat echocardiography every 6 to 12 months with prompt education on reporting symptoms',
        explanation: 'This patient has severe, asymptomatic aortic stenosis (AVA <= 1.0 cm2, peak jet velocity >= 4.0 m/s, mean gradient >= 40 mm Hg, with preserved LVEF >= 50% and confirmed absence of symptoms during treadmill exercise testing). For asymptomatic severe AS with normal left ventricular function, the rate of sudden cardiac death is < 1% per year, which is lower than the procedural risk of aortic valve replacement (surgical SAVR or transcatheter TAVR). Therefore, watchful waiting with close clinical follow-up and repeat echocardiography every 6 to 12 months is the guideline-directed standard of care. Patients must be educated to report angina, dyspnea, or presyncope immediately, as onset of symptoms is an absolute indication for prompt AVR.'
      },
      {
        text: 'Emergent transcatheter aortic valve replacement (TAVR) within 2 weeks of diagnosis',
        explanation: 'Emergent valve replacement is indicated for symptomatic severe AS or asymptomatic severe AS with LVEF < 50%, abnormal exercise stress testing, or very severe AS (Vmax >= 5.0 m/s), none of which apply here.'
      },
      {
        text: 'Initiate high-dose oral atorvastatin to halt progression of aortic valve calcification',
        explanation: 'Multiple large randomized clinical trials (e.g., ASTRONOMER, SALTIRE) have conclusively demonstrated that statins do not halt or slow the hemodynamic progression of calcific aortic stenosis.'
      },
      {
        text: 'Percutaneous balloon aortic valvuloplasty as definitive curative therapy',
        explanation: 'Balloon valvuloplasty in calcific adult AS has high complication rates, does not improve survival, and has restenosis rates >80% within 6 months; it is only a palliative bridge in cardiogenic shock.'
      },
      {
        text: 'Advise strict sedentary lifestyle with avoidance of all walking or physical activity',
        explanation: 'Sedentary restriction is not recommended for asymptomatic patients with normal stress tests; regular moderate aerobic activity (walking) is encouraged to maintain cardiovascular fitness.'
      }
    ]
  },
  {
    code: 'op-c-s3-0091',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Severe Alcohol-Associated Hepatitis Maddrey Discriminant Function',
    subtopic: 'Corticosteroid Therapy Indications and Lille Score Assessment',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize severe alcohol-associated hepatitis: heavy alcohol consumption, jaundice, tender hepatomegaly, AST:ALT > 2:1. Calculate Maddrey Discriminant Function (mDF = 4.6 x [PT - control PT] + total bilirubin). If mDF >= 32, the disease is SEVERE (30-day mortality 35-50%). First-line therapy: oral PREDNISOLONE (40 mg daily for 28 days) to suppress cytokine-mediated inflammation and improve short-term survival. Assess response at Day 7 using the Lille score (if Lille > 0.45, non-responder, stop steroids). Active infection or GI bleeding must be excluded first.',
    citation: 'Crabb DW, et al. Diagnosis and Management of Alcohol-Associated Liver Disease: 2019 Practice Guidance From the American Association for the Study of Liver Diseases. Hepatology. 2020;71(1):306-333. PMID: 31314133.',
    stem:
      'A 45-year-old man is admitted to the hospital with a 2-week history of worsening jaundice, anorexia, and tender abdominal distension. He has consumed approximately 1 pint of vodka and six beers daily for the past 15 years, with his last drink 2 days ago. On physical examination, he appears deeply jaundiced and malnourished. Temperature is 38.0 C (100.4 F), blood pressure is 112/68 mm Hg, and heart rate is 104/min. Physical examination reveals scleral icterus, spider angiomas, tender hepatomegaly palpable 4 cm below the right costal margin, and moderate ascites without asterixis. Diagnostic paracentesis rules out spontaneous bacterial peritonitis (ascitic PMN count 85/microL). Blood, urine, and sputum cultures are negative, and chest x-ray is clear. Laboratory evaluation reveals: total bilirubin 18.4 mg/dL, direct bilirubin 14.2 mg/dL, AST 240 U/L, ALT 92 U/L (AST/ALT ratio > 2:1), alkaline phosphatase 160 U/L, serum creatinine 1.0 mg/dL, patient prothrombin time 22.4 seconds, and laboratory control prothrombin time 12.0 seconds. The Maddrey Discriminant Function (mDF) is calculated as: 4.6 x (22.4 - 12.0) + 18.4 = 66.2. Which of the following is the most appropriate first-line pharmacotherapeutic intervention to improve short-term survival in this patient?',
    options: [
      {
        text: 'Oral prednisolone (40 mg daily for 28 days) with planned reassessment using the Lille score on day 7',
        explanation: 'This patient has severe alcohol-associated hepatitis, defined by a Maddrey Discriminant Function (mDF) >= 32 (here, mDF = 66.2), which carries a 30-day mortality of 35% to 50% without treatment. AASLD and EASL guidelines recommend systemic corticosteroid therapy with oral prednisolone (40 mg daily for 28 days, followed by a 2- to 4-week taper) as the primary treatment to improve 28-day survival. Prednisolone is preferred over prednisone because prednisone requires hepatic 11-beta-hydroxysteroid dehydrogenase conversion, which is severely impaired in acute hepatic necroinflammation. Prior to starting steroids, active bacterial infection (SBP, pneumonia, bacteremia) and GI bleeding must be excluded. The Lille model is calculated on day 7 to evaluate treatment response; a Lille score > 0.45 indicates non-response and warrants stopping corticosteroids to avoid fatal fungal or bacterial sepsis.'
      },
      {
        text: 'Oral pentoxifylline 400 mg three times daily monotherapy for 4 weeks',
        explanation: 'Randomized clinical trials (e.g., STOPAH trial) demonstrated that pentoxifylline does not improve survival in severe alcoholic hepatitis; guidelines no longer recommend it as primary therapy.'
      },
      {
        text: 'Intravenous N-acetylcysteine infusion monotherapy for 72 hours',
        explanation: 'N-acetylcysteine is the antidote for acetaminophen toxicity; while it has been studied as an adjunct to steroids in alcoholic hepatitis, it is ineffective as monotherapy.'
      },
      {
        text: 'Placement of a transjugular intrahepatic portosystemic shunt (TIPS) within 48 hours',
        explanation: 'TIPS is strictly contraindicated in acute severe alcoholic hepatitis and active hepatic necroinflammation, where it accelerates liver failure and fatal hepatic encephalopathy.'
      },
      {
        text: 'Supportive nutritional therapy alone without pharmacotherapy because steroids increase long-term mortality',
        explanation: 'While nutritional support is essential, withholding corticosteroids in severe disease with mDF = 66.2 deprives the patient of the only medical therapy proven to reduce short-term mortality.'
      }
    ]
  },
  {
    code: 'op-c-s3-0092',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Chronic Stable Angina Ranolazine Mechanism and Add-on Therapy',
    subtopic: 'Late Inward Sodium Current and Hemodynamic-Neutral Anti-Anginal',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize management of refractory chronic stable angina on guideline-directed medical therapy (GDMT): Patient has angina despite maximally tolerated beta-blocker (or CCB) and statin. Addition of RANOLAZINE is indicated. Mechanism: selectively inhibits the late inward sodium current (late INa) in ischemic myocytes -> reduces intracellular Na+ overload -> reduces reverse Na+/Ca2+ exchanger activity -> decreases intracellular Ca2+ overload -> improves diastolic relaxation and subendocardial perfusion WITHOUT altering heart rate or blood pressure.',
    citation: 'Knuuti J, et al. 2019 ESC Guidelines for the diagnosis and management of chronic coronary syndromes. Eur Heart J. 2020;41(3):407-477. PMID: 31504439.',
    stem:
      'A 64-year-old man presents to the cardiology clinic with persistent exertional chest pressure. Over the past 4 months, he has experienced retrosternal squeezing chest discomfort whenever he walks up an incline or climbs two flights of stairs, which resolves within 3 to 5 minutes of rest. His medical history includes coronary artery disease (stent to the right coronary artery 3 years ago), hypertension, and chronic obstructive pulmonary disease. His current medications include metoprolol succinate 100 mg daily, atorvastatin 80 mg daily, and low-dose aspirin 81 mg daily. On physical examination, blood pressure is 114/72 mm Hg and heart rate is 54/min and regular. Cardiac and pulmonary examinations are normal. Resting ECG reveals sinus bradycardia at 54/min with non-specific ST-T wave changes and a normal QTc interval of 420 ms. Because increasing the beta-blocker dosage is precluded by bradycardia (HR 54/min) and adding a non-dihydropyridine calcium channel blocker (diltiazem) risks severe heart block, the physician selects an adjunctive anti-anginal agent that reduces myocardial ischemia without significantly affecting heart rate or blood pressure. Which of the following describes the molecular mechanism of this medication?',
    options: [
      {
        text: 'Selective inhibition of the late inward sodium current reducing myocardial intracellular calcium overload',
        explanation: 'The patient has refractory chronic stable angina despite guideline-directed beta-blocker therapy. When heart rate (54/min) or blood pressure (114/72 mm Hg) limits further up-titration of beta-blockers or addition of rate-slowing calcium channel blockers (verapamil, diltiazem), ranolazine is the preferred add-on anti-anginal agent. During myocardial ischemia, pathologic failure of sodium channel inactivation leads to an exaggerated late inward sodium current (late INa). This intracellular sodium accumulation drives reverse-mode operation of the sodium-calcium exchanger (NCX), overloading myocytes with calcium, impairing diastolic relaxation, and increasing microvascular wall tension. Ranolazine selectively inhibits late INa, preventing calcium overload, improving diastolic perfusion, and relieving angina without altering heart rate, inotropy, or systemic blood pressure.'
      },
      {
        text: 'Selective blockade of hyperpolarization-activated cyclic nucleotide-gated channels in the sinoatrial node',
        explanation: 'Inhibition of the If funny current in the SA node is the mechanism of ivabradine, which lowers heart rate; it is indicated only in heart failure or angina with resting heart rate >= 70/min, and is contraindicated in bradycardia (HR 54).'
      },
      {
        text: 'Direct stimulation of soluble guanylyl cyclase increasing cyclic GMP-mediated venodilation',
        explanation: 'Stimulation of soluble guanylyl cyclase is the mechanism of riociguat (for pulmonary hypertension) and organic nitrates; nitrates cause systemic venodilation and reflex tachycardia, with high tolerance.'
      },
      {
        text: 'Allosteric opening of ATP-sensitive potassium channels in vascular smooth muscle',
        explanation: 'K-ATP channel openers (minoxidil, nicorandil) cause potent arteriolar dilation and severe reflex fluid retention and hirsutism, not cardioselective late-sodium blockade.'
      },
      {
        text: 'Irreversible antagonism of platelet purinergic P2Y12 adenosine diphosphate receptors',
        explanation: 'P2Y12 receptor blockade (clopidogrel, ticagrelor) prevents platelet aggregation and stent thrombosis, but has no direct anti-anginal or myocardial metabolic effects.'
      }
    ]
  },
  {
    code: 'op-c-s3-0093',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Aspirin Primary Prevention Cardiovascular Disease Guidelines',
    subtopic: 'USPSTF 2022 Update on Adults Aged 60 and Older Bleeding Risk',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize USPSTF 2022 guideline on aspirin for PRIMARY prevention of cardiovascular disease: 1. Adults aged 60 years or older: USPSTF RECOMMENDS AGAINST initiating low-dose aspirin for primary prevention (net harm due to increased major gastrointestinal and intracranial bleeding without mortality benefit). 2. Adults aged 40 to 59 with >= 10% 10-year CVD risk: small net benefit, individual decision. (Note: secondary prevention for established CVD like prior MI/stroke remains strongly indicated).',
    citation: 'US Preventive Services Task Force. Aspirin Use to Prevent Cardiovascular Disease: US Preventive Services Task Force Recommendation Statement. JAMA. 2022;327(16):1577-1584. PMID: 35471505.',
    stem:
      'A 63-year-old man presents to the primary care clinic for an annual preventive health evaluation. He feels completely well and reports no history of chest pain, shortness of breath, palpitations, claudication, transient neurological deficits, or gastrointestinal bleeding. His medical history includes well-controlled primary hypertension on lisinopril 10 mg daily. He has never had a myocardial infarction, stroke, or peripheral artery disease. He has never smoked cigarettes. Physical examination reveals blood pressure of 124/76 mm Hg, heart rate of 70/min, and BMI of 27 kg/m2. Laboratory studies reveal: total cholesterol 195 mg/dL, HDL 48 mg/dL, LDL 118 mg/dL, triglycerides 145 mg/dL, fasting glucose 92 mg/dL, and normal renal function. His calculated 10-year atherosclerotic cardiovascular disease (ASCVD) risk score using the pooled cohort equations is 11.2% (elevated risk). The patient notes that his older brother recently started taking a daily baby aspirin and asks: "Should I start taking a daily 81-mg aspirin to prevent having a heart attack or stroke?" According to the 2022 United States Preventive Services Task Force (USPSTF) recommendation statement, which of the following is the most appropriate counseling statement for this patient?',
    options: [
      {
        text: 'Initiating low-dose aspirin is not recommended because the risk of major gastrointestinal and intracranial bleeding outweighs the cardiovascular benefit in adults aged 60 and older',
        explanation: 'In 2022, the USPSTF updated its recommendation on aspirin for the primary prevention of cardiovascular disease. For adults aged 60 years or older who do not have established cardiovascular disease, the USPSTF recommends against initiating low-dose aspirin for primary prevention (Grade D recommendation). Large randomized clinical trials (ASPREE, ARRIVE, ASCEND) conclusively demonstrated that in older adults, the modest reduction in non-fatal myocardial infarctions is entirely offset by a significant increase in major gastrointestinal bleeding and hemorrhagic strokes, with no reduction in all-cause or cardiovascular mortality. In contrast, for adults aged 40 to 59 years with a >= 10% 10-year CVD risk, the decision to initiate aspirin should be an individualized shared decision (Grade C).'
      },
      {
        text: 'Low-dose aspirin 81 mg daily should be initiated immediately because his 10-year ASCVD risk exceeds 10%',
        explanation: 'The >10% ASCVD risk threshold applied to older guidelines; the updated 2022 USPSTF guideline specifically recommends against initiating aspirin in any individual aged >= 60 years for primary prevention.'
      },
      {
        text: 'Aspirin should be prescribed only in combination with scheduled oral clopidogrel for primary prevention',
        explanation: 'Dual antiplatelet therapy (DAPT) has no role in primary prevention and drastically multiplies the risk of catastrophic fatal hemorrhage.'
      },
      {
        text: 'Aspirin is recommended primarily because it reduces the lifetime incidence of colorectal adenocarcinoma by over 50%',
        explanation: 'The USPSTF 2022 review concluded that the evidence that low-dose aspirin reduces colorectal cancer incidence or mortality is inconsistent and insufficient to justify initiating aspirin.'
      },
      {
        text: 'Aspirin should be withheld now but initiated routinely once the patient reaches age 75',
        explanation: 'Bleeding risks escalate with age, making aspirin even more hazardous in adults aged >= 75 years; primary prevention aspirin is strictly avoided.'
      }
    ]
  },
  {
    code: 'op-c-s3-0094',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Subclinical Hypothyroidism Treatment Indications and TSH Thresholds',
    subtopic: 'Anti-TPO Antibodies Cardiovascular Risk and Levothyroxine',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize subclinical hypothyroidism: elevated TSH (typically 5-10 microU/mL) with normal free T4. Indications for levothyroxine replacement: 1. TSH >= 10 microU/mL (prevents progression to overt hypothyroidism, improves diastolic dysfunction and lipid profiles); 2. TSH 5 to 10 microU/mL in patients who are pregnant or seeking pregnancy, or who have positive anti-TPO antibodies, symptoms of hypothyroidism, or goiter. In asymptomatic elderly with TSH 5-10 and negative antibodies, observation with repeat TSH in 3-6 months is appropriate.',
    citation: 'Garber JR, et al. Clinical practice guidelines for hypothyroidism in adults: cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association. Endocr Pract. 2012;18(6):988-1028. PMID: 23246604.',
    stem:
      'A 42-year-old woman presents to the clinic for follow-up of abnormal laboratory findings. She has noticed mild fatigue and modest cold sensitivity over the past 4 months, which she attributed to stress at work. She has regular menstrual cycles and has no history of cardiovascular disease. Physical examination reveals blood pressure 122/76 mm Hg and heart rate 68/min. Thyroid examination demonstrates a diffusely enlarged, non-tender, firm goiter estimated at 35 g (normal: 15–20 g) with no discrete palpable nodules. Reflexes demonstrate a slightly delayed relaxation phase of the Achilles tendon bilaterally. Laboratory evaluation 6 weeks ago showed serum TSH of 7.8 microU/mL (normal: 0.4–4.0 microU/mL) with normal free T4 of 1.1 ng/dL (normal: 0.8–1.8 ng/dL). Repeat testing today confirms persistent TSH elevation at 8.4 microU/mL with a normal free T4 of 1.0 ng/dL. Serum antithyroid peroxidase (anti-TPO) antibody testing is strongly positive at 480 IU/mL (normal: < 35 IU/mL). Serum LDL cholesterol is 158 mg/dL. Which of the following is the most appropriate management plan for this patient?',
    options: [
      {
        text: 'Initiate oral levothyroxine monotherapy with repeat TSH monitoring in 6 to 8 weeks',
        explanation: 'This patient has subclinical hypothyroidism (elevated TSH with normal free T4). Clinical practice guidelines from the American Thyroid Association (ATA) and American Association of Clinical Endocrinologists (AACE) recommend initiating levothyroxine treatment for subclinical hypothyroidism in patients with: (1) serum TSH >= 10 microU/mL; or (2) serum TSH between 5 and 10 microU/mL who have high-titer anti-TPO antibodies (which predict a 4–5% annual rate of progression to overt hypothyroidism), presence of a goiter, hypothyroid symptoms, dyslipidemia, or pregnancy/infertility. This 42-year-old patient exhibits multiple indications: prominent symptoms, palpable goiter, dyslipidemia, and high-titer anti-TPO antibodies. Levothyroxine therapy relieves symptoms, shrinks goiter volume, improves lipid profiles, and prevents progression to overt hypothyroidism.'
      },
      {
        text: 'Reassure the patient and repeat serum TSH in 12 months without initiating medication',
        explanation: 'Observation without therapy is reserved for asymptomatic older adults (>65–70 years) with mild TSH elevation (5–10) and negative anti-TPO antibodies; this young symptomatic patient with high antibodies warrants treatment.'
      },
      {
        text: 'Initiate oral desiccated thyroid extract containing fixed ratios of T3 and T4',
        explanation: 'Desiccated porcine thyroid extract (Armour Thyroid) contains supraphysiologic T3:T4 ratios (1:4 vs human 1:14), causing fluctuating T3 levels, palpitations, and osteoporosis; levothyroxine (pure T4) is the standard.'
      },
      {
        text: 'Perform emergent fine-needle aspiration biopsy of the diffuse thyroid enlargement',
        explanation: 'Diffuse symmetric autoimmune goiter in Hashimoto thyroiditis does not require FNA unless a discrete, suspicious solitary dominant nodule is identified on ultrasound.'
      },
      {
        text: 'Initiate oral propylthiouracil therapy to block peripheral thyroxine deiodination',
        explanation: 'Propylthiouracil is an antithyroid medication for hyperthyroidism; administering it to a hypothyroid patient causes profound myxedematous decompensation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0095',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Root Cause Analysis versus Failure Modes and Effects Analysis',
    subtopic: 'Retrospective Sentinel Event Investigation and Systems Deficiencies',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Differentiate patient safety quality improvement methodologies: Root Cause Analysis (RCA) is a RETROSPECTIVE, structured, multidisciplinary process conducted AFTER a sentinel event (e.g., wrong-site surgery, unexpected death) occurs, aimed at identifying underlying LATENT SYSTEM FLAWS (process/equipment/communication errors) rather than blaming individual healthcare providers. In contrast, Healthcare Failure Mode and Effects Analysis (HFMEA) is a PROSPECTIVE risk assessment performed BEFORE an adverse event happens.',
    references: [
      {
        label: 'The Joint Commission. Sentinel Event Policy and Procedures. Comprehensive Accreditation Manual for Hospitals; 2023.',
        url: 'https://www.jointcommission.org/resources/sentinel-event/sentinel-event-policy-and-procedures/'
      }
    ],
    stem:
      'An 8-year-old boy is scheduled to undergo an elective right-sided inguinal hernia repair in an ambulatory surgical center. Preoperative nursing check-in confirms the right inguinal hernia, and the anesthesiologist performs a pre-induction evaluation. The surgical site marking was performed with a surgical pen by the circulating nurse instead of the operating surgeon. In the operating room, the surgical "time-out" is conducted hastily while the surgeon is across the room reviewing electronic charts, and neither the surgeon nor the scrub technician actively verbalizes the operative site. The surgical team proceeds to make an incision and dissect the left inguinal canal, realizing only 30 minutes into the dissection that no hernia sac is present, at which point the surgeon realizes the error. The left incision is closed, and the correct right inguinal hernia repair is subsequently completed. The patient suffers no permanent physical harm. The hospital executive safety committee initiates an immediate investigation into this sentinel event. Which of the following describes the most appropriate methodology and primary objective of this investigation?',
    options: [
      {
        text: 'Conduct a multidisciplinary Root Cause Analysis to identify latent system vulnerabilities and process failures rather than assigning individual blame',
        explanation: 'A wrong-site surgical procedure is a classic "sentinel event" (an unexpected occurrence involving death or serious physical/psychological injury, or the risk thereof). The Joint Commission mandates that accredited healthcare organizations respond to sentinel events by conducting a formal, multidisciplinary Root Cause Analysis (RCA). RCA is a retrospective, structured problem-solving methodology designed to drill down beyond proximate human errors (e.g., nurse marking the site, incomplete time-out) to discover underlying latent systems-level vulnerabilities (e.g., defective policies, communication hierarchies, production pressure, inadequate standardized checklists). The primary goal of an RCA is non-punitive: to re-engineer hospital processes and implement robust safeguards to ensure the error cannot recur. In contrast, Failure Mode and Effects Analysis (FMEA) is a prospective tool used before an error occurs.'
      },
      {
        text: 'Perform a prospective Healthcare Failure Mode and Effects Analysis to quantify future financial liability',
        explanation: 'Healthcare Failure Mode and Effects Analysis (HFMEA) is a prospective tool utilized to analyze a new or existing process before an adverse event occurs, not a retrospective investigation following a sentinel event.'
      },
      {
        text: 'Conduct an individual disciplinary tribunal to terminate the employment of the circulating nurse',
        explanation: 'Punitive investigations that focus solely on individual blame fail to address the systemic process failures that allowed the error to occur, guaranteeing that similar errors will recur with other staff.'
      },
      {
        text: 'Conceal the occurrence from the patient’s parents because no permanent physical organ loss occurred',
        explanation: 'Concealing medical errors violates medical ethics, hospital accreditation standards, and legal disclosure mandates; full, transparent, and empathetic disclosure is mandatory.'
      },
      {
        text: 'Submit an immediate report to the state licensing board demanding permanent revocation of the surgeon’s medical license',
        explanation: 'Sentinel event investigations are institutional quality improvement processes; demanding immediate license revocation without an internal RCA bypasses due process and ignores system-level safety.'
      }
    ]
  },
  {
    code: 'op-c-s3-0096',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Type 2 Diabetes Add-On Therapy with Established Atherosclerosis',
    subtopic: 'GLP-1 Receptor Agonists and SGLT2 Inhibitors with Proven CV Benefit',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize ADA guidelines for pharmacotherapy in Type 2 Diabetes with established ASCVD: In patients with established ASCVD (prior MI, coronary stenting, stroke, or PAD), regardless of baseline HbA1c or metformin use, add a GLP-1 RECEPTOR AGONIST (liraglutide, semaglutide, dulaglutide) OR an SGLT2 INHIBITOR (empagliflozin, dapagliflozin) with proven cardiovascular benefit. GLP-1 RAs reduce MACE, CV death, and promote weight loss; SGLT2i reduce heart failure hospitalizations and CKD progression.',
    citation: 'American Diabetes Association. 9. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes-2024. Diabetes Care. 2024;47(Suppl 1):S158-S178. PMID: 38078590.',
    stem:
      'A 62-year-old man presents for a routine chronic disease management visit. He has a 6-year history of type 2 diabetes mellitus and coronary artery disease, having undergone drug-eluting stent placement to his right coronary artery 2 years ago for an acute non-ST elevation myocardial infarction. He currently takes metformin 1,000 mg twice daily, atorvastatin 80 mg daily, aspirin 81 mg daily, and metoprolol succinate 50 mg daily. He adheres to a healthy diet and walks 30 minutes daily. Physical examination reveals blood pressure 126/78 mm Hg, heart rate 64/min, and BMI 33 kg/m2 (obesity). Physical examination reveals normal heart and lung sounds, palpable peripheral pulses, and no edema. Laboratory testing reveals: HbA1c 7.6%, serum creatinine 0.9 mg/dL (eGFR > 90 mL/min/1.73m2), and urine albumin-to-creatinine ratio 18 mg/g (normal: < 30 mg/g). According to current American Diabetes Association (ADA) and American College of Cardiology (ACC) guidelines, which of the following is the most appropriate next pharmacotherapeutic agent to add to his regimen?',
    options: [
      {
        text: 'Initiate a glucagon-like peptide-1 (GLP-1) receptor agonist with proven cardiovascular benefit (such as subcutaneous semaglutide or dulaglutide)',
        explanation: 'According to ADA Standards of Care, in patients with type 2 diabetes and established atherosclerotic cardiovascular disease (ASCVD, such as prior myocardial infarction, revascularization, or stroke), the recommended add-on therapy is either a GLP-1 receptor agonist with proven cardiovascular benefit (e.g., semaglutide, dulaglutide, liraglutide) OR an SGLT2 inhibitor with proven CV benefit (e.g., empagliflozin, dapagliflozin). Crucially, this recommendation applies regardless of the patient’s baseline HbA1c or whether the HbA1c target is already met. Large cardiovascular outcome trials (LEADER, SUSTAIN-6, REWIND) have proven that these GLP-1 receptor agonists significantly reduce major adverse cardiovascular events (MACE: cardiovascular death, non-fatal MI, non-fatal stroke) and promote meaningful weight loss, making them uniquely advantageous in an obese patient with prior MI.'
      },
      {
        text: 'Initiate oral glipizide 5 mg daily before breakfast',
        explanation: 'Sulfonylureas (glipizide) lower blood glucose but have no proven cardiovascular benefit, increase the risk of severe hypoglycemia, and cause undesirable weight gain.'
      },
      {
        text: 'Initiate oral pioglitazone 30 mg daily',
        explanation: 'Thiazolidinediones (pioglitazone) promote fluid retention and plasma volume expansion, carrying an FDA black-box warning for precipitating or exacerbating congestive heart failure in CAD patients.'
      },
      {
        text: 'Initiate oral acarbose 50 mg three times daily with meals',
        explanation: 'Alpha-glucosidase inhibitors (acarbose) reduce postprandial glucose modestly with significant GI flatulence/diarrhea and have no demonstrated MACE reduction in CAD.'
      },
      {
        text: 'Withhold additional medications because his HbA1c of 7.6% is sufficiently close to goal',
        explanation: 'Withholding therapy overlooks the paradigm shift in diabetes care: GLP-1 RAs and SGLT2 inhibitors are prescribed for cardiorenal organ protection independent of glycemic targets.'
      }
    ]
  },
  {
    code: 'op-c-s3-0097',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Spontaneous Intracerebral Hemorrhage Blood Pressure Lowering',
    subtopic: 'INTERACT2 ATACH-II Target Systolic Blood Pressure and Hematoma Expansion',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute spontaneous intracerebral hemorrhage (ICH): sudden focal neurological deficit, headache, vomiting, non-contrast head CT shows hyperdense parenchymal hematoma. Hematoma expansion occurs in 30-40% within first hours, driving mortality. Blood pressure management (AHA/ASA guidelines based on INTERACT2 and ATACH-II): for patients presenting with SBP between 150 and 220 mm Hg, acutely lower SBP to a target of 140 mm Hg (range 130-150 mm Hg) using titratable IV antihypertensives (nicardipine, labetalol). Avoid dropping SBP < 130 mm Hg.',
    citation: 'Greenberg SM, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2022;53(7):e282-e361. PMID: 35579034.',
    stem:
      'A 62-year-old man presents to the emergency department 90 minutes after the acute onset of right-sided hemiplegia and expressive aphasia that began while eating dinner. He has a history of poorly controlled hypertension. On arrival, he is somnolent but follows simple one-step commands. Blood pressure is 196/112 mm Hg, heart rate is 82/min, and respirations are 18/min. Neurological examination reveals dense right facial droop, 0/5 strength in the right upper and lower extremities, and right homonymous hemianopia. Emergent non-contrast head CT demonstrates an acute, hyperdense 28-cm3 parenchymal hematoma centered in the left putamen with 3 mm of midline shift and surrounding vasogenic edema, with no intraventricular hemorrhage or subarachnoid blood. Complete blood count, platelet count, and coagulation profile (PT, INR, aPTT) are normal. The neuro-intensive care team plans immediate medical management to prevent early hematoma expansion. Which of the following represents the most appropriate blood pressure management target and strategy for this patient?',
    options: [
      {
        text: 'Rapidly lower systolic blood pressure to a target of 140 mm Hg (maintaining between 130 and 150 mm Hg) using a continuous intravenous nicardipine or labetalol infusion',
        explanation: 'In acute spontaneous intracerebral hemorrhage (ICH), early hematoma expansion occurs in up to 30% to 40% of patients within the first few hours, substantially increasing mortality and devastating neurological disability. Clinical trials (INTERACT2, ATACH-II) and AHA/ASA guidelines recommend that for patients presenting with acute ICH and systolic blood pressure (SBP) between 150 and 220 mm Hg, acute lowering of SBP to a target of 140 mm Hg (maintaining SBP strictly in the 130–150 mm Hg range) is safe and reduces hematoma growth. Titratable intravenous infusions such as nicardipine or labetalol are preferred to achieve smooth, steady blood pressure control. ATACH-II demonstrated that precipitous reductions below 130 mm Hg increase renal adverse events without added clinical benefit.'
      },
      {
        text: 'Permit blood pressure to remain elevated without antihypertensives up to a systolic pressure of 220 mm Hg',
        explanation: 'Permissive hypertension up to 220/120 mm Hg is indicated in acute ISCHEMIC stroke to maintain collateral penumbral perfusion; in hemorrhagic stroke, high blood pressure directly drives ongoing arterial bleeding and hematoma expansion.'
      },
      {
        text: 'Acutely lower systolic blood pressure to < 110 mm Hg within 30 minutes using intravenous sodium nitroprusside',
        explanation: 'Lowering SBP < 110–120 mm Hg causes severe renal hypoperfusion and reduces cerebral perfusion pressure; nitroprusside also increases intracranial pressure.'
      },
      {
        text: 'Administer oral clonidine 0.3 mg every 2 hours until systolic blood pressure is < 160 mm Hg',
        explanation: 'Oral antihypertensives have unpredictable absorption in acute ICH, cannot be titrated smoothly, and cause profound sedation and rebound hypertension.'
      },
      {
        text: 'Withhold all blood pressure interventions until emergent craniotomy and open surgical hematoma evacuation are completed',
        explanation: 'Routine surgical evacuation of supratentorial deep putaminal hematomas does not improve functional outcomes compared to medical therapy (STICH trial); immediate medical blood pressure control is the primary intervention.'
      }
    ]
  },
  {
    code: 'op-c-s3-0098',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Septic Shock Resuscitation Fluid Bolus and Dynamic Responsiveness',
    subtopic: 'Surviving Sepsis Campaign 30 mL/kg Crystalloids and Norepinephrine',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize sepsis and septic shock: suspected infection + organ dysfunction (SOFA >= 2) + persistent hypotension (MAP < 65) or lactate >= 4.0 mmol/L. Surviving Sepsis Campaign bundle: 1. Administer at least 30 mL/kg of IV BALANCED CRYSTALLOIDS (Lactated Ringer\'s) within the first 3 hours; 2. Blood cultures before antibiotics; 3. Broad-spectrum IV antibiotics within 1 hour; 4. If MAP remains < 65 mm Hg despite fluid bolus, start NOREPINEPHRINE (first-line vasopressor). Guide additional fluids with dynamic measures (passive leg raise, stroke volume variation).',
    citation: 'Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143. PMID: 34605781.',
    stem:
      'A 68-year-old woman with type 2 diabetes mellitus is brought to the emergency department from an assisted-living facility with fever, chills, and altered mental status. On arrival, she is lethargic and oriented only to her name. Her weight is 70 kg (154 lb). Vital signs: temperature 39.2 C (102.6 F), blood pressure 78/44 mm Hg (mean arterial pressure: 55 mm Hg), heart rate 124/min, respirations 26/min, and oxygen saturation 93% on ambient air. Physical examination reveals warm, flushed extremities with brisk capillary refill, dry mucous membranes, and exquisite right costovertebral angle tenderness. Urinalysis demonstrates 3+ leukocyte esterase, positive nitrites, and >100 WBCs/HPF. Arterial blood gas demonstrates a high anion gap metabolic acidosis with serum lactate of 5.2 mmol/L. Blood and urine cultures are immediately drawn, and broad-spectrum intravenous piperacillin-tazobactam is administered within 45 minutes of arrival. According to the 2021 Surviving Sepsis Campaign guidelines, which of the following is the most appropriate next step in hemodynamic resuscitation?',
    options: [
      {
        text: 'Administer an intravenous balanced crystalloid bolus of at least 30 mL/kg (approximately 2.1 liters) within the first 3 hours, initiating norepinephrine if MAP remains < 65 mm Hg',
        explanation: 'This patient meets criteria for septic shock secondary to acute pyelonephritis (infection with refractory hypotension [MAP 55 mm Hg] and profound tissue hypoperfusion indicated by serum lactate >= 4.0 mmol/L). The 2021 Surviving Sepsis Campaign international guidelines issue a strong recommendation that for sepsis-induced hypoperfusion or septic shock, at least 30 mL/kg of intravenous crystalloids (balanced crystalloids like Lactated Ringer\'s preferred over 0.9% normal saline) should be administered within the first 3 hours of resuscitation. For a 70-kg patient, this equals approximately 2,100 mL. If mean arterial pressure (MAP) remains < 65 mm Hg despite or during fluid loading, norepinephrine should be initiated as the first-line vasopressor to restore perfusion pressure.'
      },
      {
        text: 'Infuse 500 mL of 5% albumin solution and restrict total fluids to < 1 liter to prevent pulmonary edema',
        explanation: 'Albumin may be used as an adjunct in patients who have received large volumes of crystalloids, but restricting initial resuscitation fluids to < 1 L in septic shock leads to persistent hypoperfusion, acute tubular necrosis, and death.'
      },
      {
        text: 'Initiate high-dose intravenous dopamine infusion as the first-line vasopressor agent of choice',
        explanation: 'Dopamine is associated with significantly higher rates of tachyarrhythmias and increased mortality compared to norepinephrine, which is the undisputed first-line vasopressor in septic shock.'
      },
      {
        text: 'Administer high-dose intravenous hydrocortisone (200 mg bolus) immediately before fluid resuscitation',
        explanation: 'Intravenous corticosteroids (hydrocortisone 200 mg/day) are indicated only for refractory septic shock persisting despite adequate fluid resuscitation and high-dose vasopressor therapy.'
      },
      {
        text: 'Infuse 2 units of uncrossed packed red blood cells to increase oxygen-carrying capacity',
        explanation: 'Blood transfusion in sepsis is recommended strictly when hemoglobin is < 7.0 g/dL in the absence of acute myocardial ischemia, severe hypoxemia, or active hemorrhage.'
      }
    ]
  },
  {
    code: 'op-c-s3-0099',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Intimate Partner Violence Confidential Screening and Safety Planning',
    subtopic: 'Autonomous Adult Patient and Mandatory Reporting Boundaries',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Intimate Partner Violence (IPV): adult patient with chronic somatic symptoms, variable-stage bruises, or overly controlling partner. Principles of IPV management: 1. Isolate the patient safely (ask partner to step out for private exam); 2. Inquire directly with empathetic, non-judgmental open questions; 3. Validate her experiences; 4. Formulate a personalized SAFETY PLAN and provide confidential community resources. 5. Crucial legal/ethical rule: IN COMPETENT ADULTS, DO NOT REPORT TO POLICE WITHOUT PATIENT CONSENT (mandatory reporting applies to child abuse, elder abuse, and vulnerable adults, NOT autonomous competent adults; reporting against her will can provoke retaliatory homicide).',
    citation: 'American College of Obstetricians and Gynecologists. Intimate Partner Violence: ACOG Committee Opinion, Number 518. Obstet Gynecol. 2012;119(2 Pt 1):412-417. PMID: 22270319.',
    stem:
      'A 31-year-old woman presents to the primary care clinic for evaluation of chronic diffuse pelvic pain, insomnia, and fatigue over the past 6 months. During the visit, her husband insists on staying in the room, sits close to her, answers questions on her behalf, and becomes visibly annoyed when the physician asks the patient directly about her symptoms. When the patient is escorted alone to the examination room for a physical examination, the physician notes multiple ecchymoses in various stages of healing (yellow, purple, and brown) across her upper arms, shoulders, and lower back, along with a healing linear laceration on her right forearm. When gently asked about these injuries in a supportive, private environment, the patient begins to cry and admits that her husband frequently hits, pushes, and threatens her when he is angry. She states: "Please do not tell anyone or call the police. If he finds out that I told you, he promised he will kill me and take our children away." Which of the following is the most appropriate ethical and clinical course of action for the physician?',
    options: [
      {
        text: 'Validate her experiences, conduct an immediate lethality and safety assessment, assist in formulating a confidential safety plan, and provide local domestic violence resources without notifying law enforcement',
        explanation: 'Intimate partner violence (IPV) affects millions of adults. When IPV is identified, the physician’s primary ethical duty is to prioritize patient safety, maintain confidentiality, and empower patient autonomy. Steps include: (1) validating her courage and feelings ("You do not deserve to be treated this way, and help is available"); (2) conducting an immediate safety/lethality assessment (evaluating access to firearms, escalating threats, strangulation history); (3) developing a tailored, practical safety plan (safe contacts, escape bag, emergency shelter numbers); and (4) connecting her with specialized domestic violence advocacy resources. In virtually all jurisdictions, mandatory reporting to law enforcement does NOT apply to competent, autonomous adult victims of domestic abuse (mandatory reporting applies to children, elders, or vulnerable incapacitated adults). Reporting to police against an adult victim\'s explicit refusal can escalate the abuser\'s rage and trigger retaliatory intimate partner homicide.'
      },
      {
        text: 'Contact the local police department immediately to file a mandatory domestic abuse police report despite her objections',
        explanation: 'Mandatory reporting of domestic violence involving competent adults is not legally required in most states and breaches confidentiality, destroys patient trust, and places the victim at immediate risk of retaliatory murder.'
      },
      {
        text: 'Bring the husband into the examination room to conduct joint couples communication counseling',
        explanation: 'Confronting an abusive partner or attempting couples therapy in active domestic violence is dangerous, contraindicated, and dramatically escalates violence against the victim.'
      },
      {
        text: 'Advise the patient to return home immediately and confront her husband about his unacceptable anger issues',
        explanation: 'Advising a victim to confront an abuser without an established safety plan and safe shelter puts her life in imminent jeopardy.'
      },
      {
        text: 'Prescribe oral alprazolam for acute anxiety and schedule a routine follow-up appointment in 3 months',
        explanation: 'Sedating medications impair the patient’s alertness and ability to execute escape safety maneuvers, and delaying intervention ignores acute homicide risk.'
      }
    ]
  },
  {
    code: 'op-c-s3-0100',
    exam: 'Step 3',
    subject: 'Surgery',
    system: 'Renal',
    topic: 'Asymptomatic Microscopic Hematuria AUA Risk Stratification',
    subtopic: 'Cystoscopy and Multiphasic CT Urography Evaluation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize asymptomatic microscopic hematuria (AMH): defined as >= 3 red blood cells per high-power field (RBCs/HPF) on a properly collected non-contaminated urine specimen. Dipstick hematuria alone is NOT sufficient. American Urological Association (AUA) risk stratification: High-risk patients (males >= 50 years old, smoking history >= 30 pack-years, or gross hematuria) require BOTH: 1. CYSTOSCOPY (evaluates bladder/urethral urothelium); and 2. MULTIPHASIC CT UROGRAPHY (evaluates renal parenchyma, calyces, and ureters) to rule out malignancy (urothelial carcinoma, RCC).',
    citation: 'Barocas DA, et al. Microhematuria: AUA/SUO Guideline. J Urol. 2020;204(4):778-786. PMID: 32698717.',
    stem:
      'A 62-year-old man presents to the clinic for a routine health maintenance checkup. He feels completely healthy and has had no flank pain, dysuria, urinary frequency, gross hematuria, fever, or weight loss. He has a 35-pack-year smoking history and worked as an industrial pipefitter for 25 years. Physical examination, including abdominal palpation and digital rectal examination of the prostate, is normal. Blood pressure is 126/78 mm Hg. Routine microscopic urinalysis on a clean-catch midstream urine specimen reveals: specific gravity 1.018, pH 6.0, no protein, negative leukocyte esterase, negative nitrites, and 12 red blood cells per high-power field (RBCs/HPF) without red blood cell casts or dysmorphic features. Repeat microscopic urinalysis 3 weeks later confirms persistent microhematuria with 10 RBCs/HPF. Serum creatinine is 0.9 mg/dL. Renal function and complete blood count are normal. According to the 2020 American Urological Association (AUA) / Society of Urologic Oncology (SUO) microhematuria guidelines, which of the following is the most appropriate next step in the diagnostic evaluation of this high-risk patient?',
    options: [
      {
        text: 'Perform both rigid or flexible cystoscopy and multiphasic CT urography of the abdomen and pelvis',
        explanation: 'This patient has asymptomatic microscopic hematuria (defined as >= 3 RBCs/HPF on microscopic evaluation of urinary sediment). The 2020 AUA/SUO guidelines categorize patients into low, intermediate, and high risk for urothelial and renal malignancy. This patient is classified as high-risk based on multiple criteria: male sex, age >= 60 years, and a >= 30 pack-year smoking history (which increases bladder cancer risk 3- to 4-fold). In high-risk microhematuria patients, the probability of finding a genitourinary malignancy (most commonly urothelial bladder carcinoma, followed by renal cell carcinoma and upper tract urothelial carcinoma) exceeds 10–12%. Guidelines mandate comprehensive evaluation with BOTH: (1) cystoscopy (to directly visualize the lower urinary tract and bladder mucosa); and (2) multiphasic CT urography with pre-contrast, nephrographic, and excretory phases (to visualize renal parenchyma, collecting systems, and ureters).'
      },
      {
        text: 'Perform renal ultrasound alone and repeat urinalysis in 12 months',
        explanation: 'Renal ultrasound has poor sensitivity (<50%) for bladder urothelial tumors and upper tract transitional cell tumors, making it inadequate as standalone imaging in high-risk patients.'
      },
      {
        text: 'Prescribe a 14-day course of oral ciprofloxacin and repeat urinalysis after completion',
        explanation: 'Treating asymptomatic hematuria with empiric antibiotics in the absence of pyuria, nitrites, or UTI symptoms is inappropriate and delays cancer diagnosis.'
      },
      {
        text: 'Obtain voided urine cytology alone without cystoscopy or cross-sectional imaging',
        explanation: 'Urine cytology has very low sensitivity for low-grade urothelial carcinomas (<20–30%) and cannot substitute for visual inspection by cystoscopy or CT urography.'
      },
      {
        text: 'Reassure the patient that microscopic hematuria in the absence of gross blood requires no further workup',
        explanation: 'Microscopic hematuria is the earliest and often the sole presenting sign of curable bladder and kidney cancers; ignoring it in a 62-year-old heavy smoker results in metastatic disease.'
      }
    ]
  }
];
