import { CandidateSpec } from './types';

export const step3Batch3: CandidateSpec[] = [
  {
    code: 'op-c-s3-0051',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Patient Autonomy and Refusal of Blood Transfusions',
    subtopic: 'Jehovah Witness Advanced Directives and Bloodless Resuscitation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize patient autonomy in a competent adult with a valid advance directive or clear explicit refusal of blood products (e.g., Jehovah\'s Witness), even in life-threatening hemorrhagic shock. Transfusing against known autonomous refusal constitutes legal battery. Management consists of aggressive non-blood resuscitation (IV crystalloids, TXA, cell salvage if permitted, erythropoietin, IV iron).',
    citation: 'American College of Obstetricians and Gynecologists. ACOG Committee Opinion No. 719: Preparing for Clinical Emergencies in Obstetrics. Obstet Gynecol. 2017;130(4):e187-e197. PMID: 28937572.',
    stem:
      'A 36-year-old woman is brought to the emergency department following a high-speed motor vehicle collision. She has sustained multiple pelvic fractures and an open left femur fracture with extensive soft tissue injury. On arrival, she is conscious and alert (GCS 15). Her blood pressure is 82/48 mm Hg, heart rate is 132/min, and respirations are 26/min. Hemoglobin is 5.8 g/dL. Before receiving sedation for reduction of her open fracture, the patient clearly and repeatedly states that she is an active Jehovah\'s Witness and refuses all blood product transfusions under any circumstances, showing a signed, dated, and witnessed durable power of attorney card in her wallet explicitly prohibiting whole blood, packed red blood cells, platelets, or fresh frozen plasma, but authorizing cell salvage and non-blood volume expanders. Her husband arrives at the bedside and pleads with the trauma team: "Please do whatever it takes to save her life; if she dies, our three children will have no mother, and I will sue you if you let her bleed to death." Which of the following is the most appropriate ethical and legal course of action?',
    options: [
      {
        text: 'Respect the patient’s refusal of blood products, utilize intraoperative autologous cell salvage, and give intravenous tranexamic acid and crystalloids',
        explanation: 'A competent adult patient possesses the fundamental ethical and legal right to self-determination and bodily integrity (autonomy), including the right to refuse life-sustaining interventions such as blood transfusions. When an informed, competent patient makes a voluntary refusal supported by clear and documented directives, physicians are legally and ethically bound to honor that refusal. Overriding her explicit refusal constitutes battery under the law. Spousal objections or family distress do not supersede a competent adult’s advance directive. The trauma team must pursue all aggressive bloodless alternatives acceptable to the patient (autologous cell saver, tranexamic acid, balanced crystalloids, prothrombin complex concentrates).'
      },
      {
        text: 'Obtain an emergency court order from the on-call judge to mandate immediate packed red blood cell transfusion',
        explanation: 'Courts consistently uphold the refusal of blood products by competent adults with valid advance directives; emergency court orders to compel transfusions are granted only for minor children whose parents refuse life-saving treatment on religious grounds, not competent adults.'
      },
      {
        text: 'Administer uncrossed O-negative packed red blood cells based on the emergency doctrine exception',
        explanation: 'The emergency doctrine presumes consent to save life ONLY when the patient is incapacitated and their true wishes are unknown; it cannot be invoked when a competent patient has explicitly refused the specific intervention.'
      },
      {
        text: 'Honor the husband’s request as the legal next-of-kin and initiate massive transfusion protocol',
        explanation: 'Surrogate decision-makers have authority only when the patient lacks decision-making capacity and has not previously expressed contrary preferences; a surrogate cannot override an explicit, documented directive made by the competent patient.'
      },
      {
        text: 'Withdraw all resuscitation efforts and initiate comfort care because surgical repair cannot proceed safely',
        explanation: 'Refusal of blood products is not a refusal of medical care or a request for palliative withdrawal; physicians must provide full medical and surgical care using all non-blood techniques.'
      }
    ]
  },
  {
    code: 'op-c-s3-0052',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Non-Valvular Atrial Fibrillation Anticoagulation in Advanced CKD',
    subtopic: 'CHA2DS2-VASc Stratification and DOAC Dosing Adjustments',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize stroke prevention in non-valvular atrial fibrillation with high CHA2DS2-VASc and stage 4/5 CKD. Direct oral anticoagulants (DOACs) like apixaban can be used in advanced CKD, but require specific dose reduction criteria (e.g., apixaban 2.5 mg BID if 2 of: age >= 80, weight <= 60 kg, or serum creatinine >= 1.5 mg/dL). Dabigatran is contraindicated with CrCl < 30 mL/min.',
    citation: 'Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156. PMID: 38031653.',
    stem:
      'An 81-year-old woman with a history of long-standing hypertension, stage 4 chronic kidney disease (baseline eGFR 22 mL/min/1.73m2; serum creatinine 2.1 mg/dL), and osteoporosis is admitted to the hospital with acute symptomatic palpitations. ECG demonstrates new-onset atrial fibrillation with a ventricular rate of 118/min. She has never had a stroke, transient ischemic attack, or systemic embolus. Her body weight is 54 kg (119 lb). Blood pressure is 134/78 mm Hg. Transthoracic echocardiogram reveals normal left ventricular systolic function (ejection fraction 60%), mild biatrial enlargement, and no valvular stenosis or regurgitation. Her CHA2DS2-VASc score is calculated as 5 (female sex, age >= 75 [2 points], hypertension, vascular disease). The clinical team elects to initiate oral stroke thromboprophylaxis. Which of the following anticoagulation strategies is most appropriate for this patient?',
    options: [
      {
        text: 'Oral apixaban 2.5 mg twice daily based on age, body weight, and serum creatinine criteria',
        explanation: 'In patients with non-valvular atrial fibrillation and elevated stroke risk (CHA2DS2-VASc >= 3 in women), oral anticoagulation is strongly indicated. The standard dose of apixaban is 5 mg twice daily; however, dose reduction to 2.5 mg twice daily is indicated when a patient meets at least two of the following three criteria: age >= 80 years, body weight <= 60 kg, or serum creatinine >= 1.5 mg/dL. This patient meets all three criteria (age 81, weight 54 kg, creatinine 2.1 mg/dL), necessitating the 2.5 mg twice daily regimen. Apixaban is preferred over dabigatran or rivaroxaban in advanced CKD due to lower renal elimination (27%).'
      },
      {
        text: 'Oral apixaban 5 mg twice daily with therapeutic monitoring of anti-factor Xa levels',
        explanation: 'Standard-dose apixaban (5 mg BID) in a patient meeting all three dose-reduction criteria leads to excessive drug accumulation and dramatically increases major bleeding complications without added ischemic stroke protection.'
      },
      {
        text: 'Oral dabigatran etexilate 150 mg twice daily with routine renal function surveillance',
        explanation: 'Dabigatran is 80% cleared by the kidneys and is strictly contraindicated in patients with severe renal impairment (CrCl < 30 mL/min) due to unpredictable drug accumulation and fatal hemorrhagic risk.'
      },
      {
        text: 'Oral aspirin 81 mg daily combined with clopidogrel 75 mg daily',
        explanation: 'Dual antiplatelet therapy provides markedly inferior stroke prevention compared to oral anticoagulants in atrial fibrillation and confers a comparable or higher risk of major bleeding.'
      },
      {
        text: 'Withhold all anticoagulation because bleeding risk exceeds thromboembolic benefit in stage 4 CKD',
        explanation: 'Patients with advanced CKD and atrial fibrillation have higher risks of both stroke and bleeding, but randomized trials and observational data demonstrate net clinical benefit favoring dose-adjusted anticoagulation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0053',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Thyroid Nodule Sonographic Risk Stratification and Biopsy',
    subtopic: 'American Thyroid Association Guidelines for Fine-Needle Aspiration',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize incidental thyroid nodule on imaging. TSH is checked first (if low -> thyroid scintigraphy). If TSH normal or elevated -> neck ultrasound. ATA sonographic criteria for fine-needle aspiration (FNA) biopsy: High suspicion (solid hypoechoic with microcalcifications, irregular margins, taller-than-wide, or extrathyroidal extension) warrants FNA for nodules >= 1.0 cm. Spongiform or purely cystic nodules rarely require biopsy.',
    citation: 'Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid. 2016;26(1):1-133. PMID: 26462967.',
    stem:
      'A 52-year-old woman presents for an annual health maintenance examination. She has no dysphagia, hoarseness, dyspnea, or symptoms of hyperthyroidism or hypothyroidism. During routine carotid duplex ultrasonography performed for an asymptomatic carotid bruit, an incidental nodule in the right thyroid lobe was identified. Serum thyroid-stimulating hormone (TSH) is 2.1 microU/mL (normal: 0.4–4.0 microU/mL) and free T4 is 1.2 ng/dL. Dedicated diagnostic high-resolution thyroid ultrasonography reveals a 1.6-cm solid, hypoechoic nodule in the lower pole of the right thyroid lobe with irregular, microlobulated margins, punctate echogenic foci producing no acoustic shadowing (microcalcifications), and a taller-than-wide shape in the transverse plane. No suspicious cervical lymph nodes are identified. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Ultrasound-guided fine-needle aspiration biopsy of the right thyroid nodule',
        explanation: 'Evaluation of an incidental thyroid nodule begins with serum TSH. With a normal (euthyroid) TSH, the next step is high-resolution neck ultrasound to assess malignant potential. The American Thyroid Association (ATA) stratifies nodules based on sonographic features. This nodule exhibits high-suspicion sonographic characteristics: solid hypoechoic composition, microlobulated/irregular margins, microcalcifications, and taller-than-wide geometry (predicting a 70–90% risk of malignancy, classically papillary thyroid cancer). In the high-suspicion category, fine-needle aspiration (FNA) biopsy is strongly indicated for any nodule >= 1.0 cm.'
      },
      {
        text: 'Repeat diagnostic thyroid ultrasonography in 12 months without biopsy',
        explanation: 'Surveillance without biopsy is appropriate only for low-suspicion nodules (>= 1.5 cm) or very low suspicion/spongiform nodules (>= 2.0 cm); delaying biopsy for a 1.6-cm high-suspicion nodule delays cancer diagnosis.'
      },
      {
        text: 'Radionuclide iodine-123 scintigraphy scanning to evaluate functional nodule autonomy',
        explanation: 'Radioiodine uptake scanning is indicated only when TSH is suppressed (hyperthyroid state) to identify "hot" autonomously functioning adenomas; it is non-diagnostic and contraindicated in euthyroid patients.'
      },
      {
        text: 'Initiation of empiric levothyroxine suppression therapy to reduce nodular growth',
        explanation: 'Thyroid hormone suppressive therapy is ineffective in shrinking malignant or benign nodules and causes exogenous subclinical thyrotoxicosis, osteoporosis, and atrial fibrillation.'
      },
      {
        text: 'Empiric right hemithyroidectomy without prior tissue cytological assessment',
        explanation: 'Surgical excision is not indicated without prior cytological evaluation; FNA establishes whether surgical resection is needed and guides the extent of surgery (lobectomy vs total thyroidectomy).'
      }
    ]
  },
  {
    code: 'op-c-s3-0054',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Resistant Hypertension and Primary Aldosteronism Screening',
    subtopic: 'Aldosterone-to-Renin Ratio and Mineralocorticoid Antagonism',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize resistant hypertension (uncontrolled BP on >= 3 antihypertensives of different classes including a diuretic, or requiring >= 4 medications). Primary aldosteronism is present in up to 10-20% of resistant hypertension. Screening requires plasma aldosterone concentration (PAC) and plasma renin activity (PRA) or direct renin concentration (DRC). Aldosterone-to-renin ratio (ARR) > 20-30 with PAC >= 15 ng/dL suggests primary aldosteronism. Spironolactone is added as the 4th line agent.',
    citation: 'Carey RM, et al. Resistant Hypertension: Detection, Evaluation, and Management: A Scientific Statement From the American Heart Association. Hypertension. 2018;72(5):e53-e90. PMID: 30354828.',
    stem:
      'A 54-year-old man presents for follow-up of long-standing hypertension. Despite adherence to a low-sodium diet and triple-combination therapy consisting of amlodipine 10 mg daily, valsartan 320 mg daily, and chlorthalidone 25 mg daily for 6 months, his clinic blood pressures remain elevated at 158/96 mm Hg and 162/98 mm Hg. Home blood pressure log confirms systolic readings consistently between 150 and 165 mm Hg. He reports mild fatigue and muscle weakness. Physical examination reveals a BMI of 27 kg/m2, normal funduscopic examination, no carotid or abdominal bruits, and no peripheral edema. Laboratory evaluation reveals: serum sodium 143 mEq/L, serum potassium 3.3 mEq/L (normal: 3.5–5.0 mEq/L), serum bicarbonate 29 mEq/L, serum creatinine 0.9 mg/dL, and fasting glucose 98 mg/dL. Urinalysis is normal. What is the most appropriate initial diagnostic investigation to evaluate the underlying cause of this patient’s refractory blood pressure elevation?',
    options: [
      {
        text: 'Measurement of early morning plasma aldosterone concentration and plasma renin activity after correcting hypokalemia',
        explanation: 'This patient meets criteria for resistant hypertension (failure to achieve blood pressure < 130/80 mm Hg despite adherence to maximally tolerated doses of three antihypertensive agents of different classes, one of which is a diuretic). Primary aldosteronism (Conn syndrome or bilateral adrenal hyperplasia) is the most common secondary cause, identified in up to 20% of resistant hypertension. The spontaneous or diuretic-induced hypokalemia with metabolic alkalosis strongly reinforces this suspicion. Initial screening is performed by checking morning plasma aldosterone concentration (PAC) and plasma renin activity (PRA); an aldosterone-to-renin ratio (ARR) > 20–30 with PAC >= 15 ng/dL is positive. Hypokalemia must be corrected first because hypokalemia suppresses aldosterone secretion, yielding false-negative screening.'
      },
      {
        text: 'Twenty-four-hour urinary free cortisol excretion testing for hypercortisolism',
        explanation: 'Cushing syndrome screening is indicated in the presence of catabolic signs (violaceous striae, proximal myopathy, facial plethora, buffalo hump, easy bruising), which are absent in this patient.'
      },
      {
        text: 'Renal artery duplex ultrasonography to evaluate for atherosclerotic renal artery stenosis',
        explanation: 'Atherosclerotic renal artery stenosis is considered in older patients with progressive azotemia on ACEi/ARB, refractory flash pulmonary edema, or abdominal bruits, but primary aldosteronism is more prevalent and suggested by hypokalemia.'
      },
      {
        text: 'Overnight in-laboratory polysomnography to rule out obstructive sleep apnea syndrome',
        explanation: 'While obstructive sleep apnea is common in resistant hypertension, it does not cause hypokalemia with metabolic alkalosis; biochemical screening for hyperaldosteronism is higher yield and more urgent.'
      },
      {
        text: 'Addition of oral clonidine 0.1 mg twice daily without secondary hypertension workup',
        explanation: 'Adding central alpha-2 agonists without investigating common curable secondary causes (especially with unprovoked hypokalemia) leads to lifelong drug toxicity and progressive cardiovascular end-organ damage.'
      }
    ]
  },
  {
    code: 'op-c-s3-0055',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Chronic Migraine Prophylactic Pharmacotherapy Selection',
    subtopic: 'Beta-Blockers Anticonvulsants and Comorbid Contraindications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize chronic migraine (>= 15 headache days/month for > 3 months, with >= 8 fulfilling migraine criteria). Indications for preventive therapy: frequent disabling headaches, acute medication overuse risk, or patient preference. First-line oral preventives: beta-blockers (propranolol, metoprolol, timolol), anticonvulsants (topiramate, divalproex sodium), and tricyclics (amitriptyline). In a patient with obesity, topiramate is advantageous due to weight loss; beta-blockers are avoided in asthma/bradycardia; divalproex is teratogenic.',
    citation: 'Ailani J, et al. The American Headache Society Consensus Statement: Update on integrating new migraine treatments into clinical practice. Headache. 2021;61(7):1021-1039. PMID: 34160823.',
    stem:
      'A 31-year-old woman presents to the primary care clinic for management of debilitating headaches. Over the past 5 months, she has experienced throbbing unilateral and holocranial headaches approximately 18 days per month. At least 10 of these monthly headaches are accompanied by severe nausea, photophobia, phonophobia, and occasional visual scintillating scotomas. She has been taking over-the-counter combination acetaminophen-aspirin-caffeine tablets 4 to 5 days per week and oral sumatriptan 2 to 3 days per week with diminishing relief. Her medical history includes obesity (BMI 34 kg/m2) and moderate persistent asthma well-controlled on inhaled fluticasone-salmeterol. Vital signs and neurological examination are completely normal. Brain MRI is normal without intracranial mass or vascular malformation. She desires an effective daily oral prophylactic medication to reduce headache frequency. Which of the following is the most appropriate initial prophylactic pharmacotherapeutic agent for this patient?',
    options: [
      {
        text: 'Oral topiramate titrated gradually to a target dose of 50 to 100 mg daily',
        explanation: 'This patient meets criteria for chronic migraine (>= 15 headache days per month for >= 3 months, with >= 8 days featuring migraine features), compounded by medication-overuse headache. Prophylactic therapy is indicated to reduce attack frequency, severity, and acute analgesic dependence. Topiramate and propranolol are level A evidence first-line oral preventive medications. However, this patient has active asthma, which is a contraindication to beta-blockers (propranolol causes bronchospasm). Furthermore, topiramate promotes weight loss, making it uniquely advantageous in this obese patient. Topiramate blocks voltage-dependent sodium channels, potentiates GABA-A, and inhibits AMPA/kainate receptors.'
      },
      {
        text: 'Oral propranolol hydrochloride titrated to 80 mg daily',
        explanation: 'Non-selective beta-blockers like propranolol are strictly contraindicated in patients with asthma because beta-2 receptor blockade triggers acute bronchoconstriction and potentially fatal status asthmaticus.'
      },
      {
        text: 'Oral divalproex sodium titrated to 500 mg twice daily',
        explanation: 'Divalproex sodium is an effective migraine preventive but is associated with weight gain and is a potent teratogen (neural tube defects, cognitive deficits), making it unsuitable as first-line in a reproductive-aged obese female.'
      },
      {
        text: 'Daily oral ergotamine tartrate with caffeine maintenance therapy',
        explanation: 'Ergotamines are strictly abortive medications that should never be used daily for prophylaxis because chronic use causes severe rebound medication-overuse headaches and peripheral ischemia (ergotism).'
      },
      {
        text: 'Oral oxycodone-acetaminophen taken on a scheduled daily prophylactic basis',
        explanation: 'Opioids are absolutely contraindicated for migraine prophylaxis due to lack of efficacy, rapid tolerance, dependence, addiction, and aggressive exacerbation of medication-overuse headache.'
      }
    ]
  },
  {
    code: 'op-c-s3-0056',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Acute Pulmonary Embolism Transition from Heparin to DOAC',
    subtopic: 'Direct Oral Anticoagulant Lead-In Requirements and Timing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Understand transition from parenteral to oral anticoagulation in acute venous thromboembolism (VTE). Apixaban and rivaroxaban are approved as single-drug oral regimens without requiring parenteral lead-in (or can be transitioned immediately when discontinuing IV heparin). In contrast, dabigatran and edoxaban REQUIRE a mandatory 5-10 day lead-in with parenteral anticoagulation (LMWH or UFH) before starting oral therapy.',
    citation: 'Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31473723.',
    stem:
      'A 55-year-old man is admitted to the hospital intermediate care unit after presenting with acute right pleuritic chest pain, dyspnea, and tachycardia. Contrast-enhanced chest CT angiography demonstrated acute segmental pulmonary emboli in the right lower lobe without right ventricular strain. Transthoracic echocardiogram showed normal right ventricular size and function, and serum troponin and BNP were normal (low-risk pulmonary embolism). Intravenous unfractionated heparin infusion was initiated upon admission and maintained for 24 hours with therapeutic aPTT levels (65–80 seconds). He is clinically stable, pain-free, ambulating well, and ready for transition to oral anticoagulation prior to discharge. Renal function and liver function tests are completely normal. The physician plans to transition the patient to oral dabigatran etexilate. Which of the following statements correctly describes the transition protocol required for dabigatran in acute pulmonary embolism?',
    options: [
      {
        text: 'The patient must receive at least 5 to 10 days of therapeutic parenteral anticoagulation before starting oral dabigatran',
        explanation: 'In the treatment of acute venous thromboembolism (DVT/PE), oral anticoagulants have distinct lead-in requirements. Apixaban and rivaroxaban are approved as single-drug regimens that do not require prior parenteral therapy; if a patient has been on heparin, apixaban or rivaroxaban can be started immediately upon stopping the heparin infusion. In contrast, both dabigatran and edoxaban were studied and approved only after a mandatory initial course of at least 5 to 10 days of parenteral anticoagulation (LMWH, fondaparinux, or UFH). Starting dabigatran without completing 5–10 days of parenteral therapy is a guideline violation that increases early recurrent VTE risk.'
      },
      {
        text: 'Oral dabigatran may be initiated immediately upon discontinuing the intravenous heparin infusion without parenteral lead-in',
        explanation: 'Immediate initiation without a 5–10 day parenteral lead-in applies only to apixaban and rivaroxaban; dabigatran requires 5–10 days of parenteral anticoagulation first.'
      },
      {
        text: 'Dabigatran must be overlapped with intravenous heparin until the INR is confirmed between 2.0 and 3.0',
        explanation: 'Overlapping with heparin until INR >= 2.0 is the transition protocol for warfarin (a vitamin K antagonist); DOACs like dabigatran do not require INR monitoring or multi-day overlap.'
      },
      {
        text: 'A loading dose of 300 mg dabigatran twice daily is required for the first 3 weeks',
        explanation: 'A high loading dose for the first 3 weeks (15 mg BID for 21 days) is the specific regimen for rivaroxaban, not dabigatran (which is dosed at 150 mg BID following parenteral lead-in).'
      },
      {
        text: 'Intravenous heparin must be continued for 48 hours concurrently with oral dabigatran to ensure peak plasma levels',
        explanation: 'Dabigatran reaches peak plasma anticoagulant levels within 1 to 2 hours of ingestion; concurrent administration with IV heparin produces profound over-anticoagulation and severe hemorrhage.'
      }
    ]
  },
  {
    code: 'op-c-s3-0057',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'Lung Cancer Screening Low-Dose CT Eligibility Criteria',
    subtopic: 'USPSTF 2021 Update on Age and Pack-Year Thresholds',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize USPSTF 2021 lung cancer screening criteria: Annual screening with low-dose computed tomography (LDCT) in adults aged 50 to 80 years who have a 20 pack-year smoking history and currently smoke or have quit within the past 15 years. Screening is discontinued once a person has not smoked for 15 years or develops a health condition that substantially limits life expectancy or the ability/willingness to undergo curative lung surgery.',
    citation: 'US Preventive Services Task Force. Screening for Lung Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(10):962-970. PMID: 33687448.',
    stem:
      'A 54-year-old man presents to the primary care clinic for an annual health maintenance examination. He feels well and reports no chronic cough, hemoptysis, shortness of breath, chest pain, or unintentional weight loss. His medical history includes well-controlled primary hypertension and hyperlipidemia. He currently smokes 1 pack of cigarettes daily and has smoked at this rate since age 32 (22 pack-year smoking history). He has tried nicotine replacement therapy in the past without sustained success. Physical examination reveals blood pressure 126/78 mm Hg, heart rate 68/min, and oxygen saturation 98% on ambient air. Pulmonary auscultation demonstrates clear breath sounds bilaterally. After providing comprehensive smoking cessation counseling and discussing pharmacotherapy options, the physician discusses cancer screening. According to current United States Preventive Services Task Force (USPSTF) guidelines, which of the following is the most appropriate lung cancer screening recommendation for this patient?',
    options: [
      {
        text: 'Annual screening with low-dose computed tomography (LDCT) of the chest',
        explanation: 'In 2021, the USPSTF updated its lung cancer screening recommendation: annual screening with low-dose computed tomography (LDCT) is recommended for adults aged 50 to 80 years who have a >= 20 pack-year smoking history and currently smoke or have quit within the past 15 years. This patient is 54 years old, has a 22 pack-year smoking history, and is an active smoker; he squarely meets all criteria for annual LDCT screening. LDCT reduces lung cancer mortality by detecting early-stage, resectable non-small cell lung carcinomas.'
      },
      {
        text: 'Annual single-view posterior-anterior screening chest radiography',
        explanation: 'Randomized clinical trials (e.g., National Lung Screening Trial) demonstrated that chest radiography does not reduce lung cancer mortality and yields unacceptably high false-positive and false-negative rates compared to LDCT.'
      },
      {
        text: 'No screening indicated at this time because he has not yet accumulated a 30 pack-year smoking history',
        explanation: 'The 30 pack-year threshold was the older 2013 criterion; the updated 2021 USPSTF guideline lowered the smoking history threshold from 30 to 20 pack-years and lowered the starting age from 55 to 50 years.'
      },
      {
        text: 'No screening indicated until he reaches 60 years of age',
        explanation: 'The USPSTF guideline lowered the starting age for lung cancer screening to 50 years; waiting until age 60 misses early curable disease during the highest-risk window.'
      },
      {
        text: 'Screening with induced sputum cytology examination every 2 years',
        explanation: 'Sputum cytology has no proven clinical utility for population cancer screening and is not recommended by any major professional society.'
      }
    ]
  },
  {
    code: 'op-c-s3-0058',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Postmenopausal Osteoporosis Anabolic versus Antiresorptive Therapy',
    subtopic: 'AACE Guidelines on Very High Risk Fracture Stratification',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize very high fracture risk in postmenopausal osteoporosis (prior fragility fracture, T-score <= -3.0, or multiple risk factors). AACE guidelines recommend anabolic bone-building agents (teriparatide, abaloparatide, or romosozumab) as FIRST-LINE therapy for very high fracture risk, followed sequentially by an antiresorptive agent (bisphosphonate or denosumab) to maintain bone mineral density gains.',
    citation: 'Camacho PM, et al. American Association of Clinical Endocrinologists and American College of Endocrinology Clinical Practice Guidelines for the Diagnosis and Treatment of Postmenopausal Osteoporosis - 2020 Update. Endocr Pract. 2020;26(Suppl 1):1-46. PMID: 32427503.',
    stem:
      'A 68-year-old postmenopausal woman presents to the clinic 6 weeks after sustaining a low-trauma fracture of her right femoral neck following a fall from standing height, which was treated with percutaneous pinning. Dual-energy x-ray absorptiometry (DEXA) scanning performed 2 weeks ago demonstrates a T-score of -3.4 at the lumbar spine (L1–L4) and -3.2 at the left femoral neck. She has never taken anti-osteoporotic medications. She has a history of gastroesophageal reflux disease with chronic esophagitis on omeprazole. Laboratory evaluation demonstrates normal serum calcium (9.4 mg/dL), normal 25-hydroxyvitamin D (38 ng/mL), normal serum creatinine, and normal intact parathyroid hormone. Serum alkaline phosphatase and protein electrophoresis are unremarkable. The physician stratifies her as having "very high fracture risk" according to the American Association of Clinical Endocrinologists (AACE) guidelines. Which of the following is the most appropriate initial pharmacological strategy to maximize bone mineral density and reduce future fracture risk?',
    options: [
      {
        text: 'Subcutaneous teriparatide daily for up to 24 months, followed sequentially by an antiresorptive agent',
        explanation: 'Patients with postmenopausal osteoporosis who have sustained a recent fragility fracture and have severe T-scores (<= -3.0) are classified as "very high risk" for imminent recurrent fracture. AACE/ACE guidelines recommend starting with an osteoanabolic agent (teriparatide, abaloparatide, or romosozumab) rather than an antiresorptive agent in very high-risk patients. Teriparatide (recombinant PTH 1-34) stimulates osteoblastic bone formation to rapidly increase bone density and architecture. Anabolic therapy is administered for up to 18–24 months, and must always be followed by an antiresorptive agent (bisphosphonate or denosumab) to prevent rapid bone loss after cessation.'
      },
      {
        text: 'Oral alendronate 70 mg once weekly taken immediately before bedtime with a glass of juice',
        explanation: 'Oral bisphosphonates are contraindicated in severe esophagitis, must be taken after overnight fasting with plain water remaining upright for 30 minutes, and are inferior to anabolic agents in very high-risk osteoporosis.'
      },
      {
        text: 'Subcutaneous denosumab 60 mg every 6 months as monotherapy with a planned drug holiday after 1 year',
        explanation: 'Stopping denosumab without antiresorptive consolidation causes rapid rebound bone resorption, severe loss of bone mineral density, and multiple vertebral compression fractures.'
      },
      {
        text: 'Oral raloxifene 60 mg daily targeting bone estrogen receptors',
        explanation: 'Selective estrogen receptor modulators (raloxifene) prevent vertebral fractures but have no proven efficacy in preventing non-vertebral or hip fractures, making it inadequate for severe hip fracture osteoporosis.'
      },
      {
        text: 'Elemental calcium 1,200 mg daily and vitamin D3 2,000 IU daily monotherapy without prescription pharmacotherapy',
        explanation: 'Calcium and vitamin D are essential nutritional adjuncts but are entirely insufficient as monotherapy to prevent recurrent fractures in severe established osteoporosis.'
      }
    ]
  },
  {
    code: 'op-c-s3-0059',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Perioperative Anticoagulation Bridging in Mechanical Heart Valves',
    subtopic: 'Thromboembolic Risk Stratification and Heparin Timing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize mechanical heart valve undergoing major surgery. Mitral mechanical valves, older-generation aortic valves (caged-ball), or aortic valves with AF/stroke history are HIGH thromboembolic risk (>10%/year). Bridging with therapeutic parenteral heparin (LMWH or IV UFH) is mandatory: discontinue warfarin 5 days prior; start bridging when INR < 2.0; stop LMWH 24 hours (or IV UFH 4-6 hours) before surgery.',
    citation: 'Otto CM, et al. 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021;143(5):e72-e227. PMID: 33332150.',
    stem:
      'A 62-year-old man with a bileaflet mechanical mitral valve prosthesis implanted 8 years ago for severe rheumatic mitral regurgitation is scheduled to undergo elective open hemicolectomy for colon adenocarcinoma in 10 days. He has been taking oral warfarin 5 mg daily with consistently therapeutic INR readings between 2.5 and 3.5. He has no history of stroke, thromboembolism, or bleeding complications. Serum creatinine is 1.0 mg/dL. The surgeon informs the medical consultant that the operation entails a major bleeding risk requiring normalization of coagulation (INR < 1.5). According to current American College of Cardiology/American Heart Association (ACC/AHA) guidelines on valvular heart disease, which of the following perioperative anticoagulation bridging protocols is most appropriate for this patient?',
    options: [
      {
        text: 'Discontinue warfarin 5 days preoperatively; initiate therapeutic-dose low-molecular-weight heparin once INR falls below 2.0, stopping it 24 hours prior to surgery',
        explanation: 'Any patient with a mechanical mitral valve prosthesis is considered at high thromboembolic risk (>10% per year) due to lower flow velocities across the mitral valve relative to the aortic position. For high-risk mechanical valves undergoing major surgery, therapeutic perioperative heparin bridging is recommended. Warfarin is stopped 5 days before surgery to allow the INR to normalize. When the INR drops below the therapeutic range (< 2.0), therapeutic-dose LMWH (e.g., enoxaparin 1 mg/kg every 12 hours) or IV UFH is initiated. The last dose of therapeutic LMWH is administered 24 hours prior to surgery (or IV UFH stopped 4–6 hours prior).'
      },
      {
        text: 'Discontinue warfarin 5 days preoperatively and proceed with surgery without any heparin bridging therapy',
        explanation: 'Omitting bridging is recommended for low-risk mechanical bileaflet aortic valves without other risk factors, but is contraindicated for mechanical mitral valves due to high risk of fatal valve thrombosis and embolic stroke.'
      },
      {
        text: 'Transition directly from warfarin to oral rivaroxaban 20 mg daily 48 hours preoperatively',
        explanation: 'Direct oral anticoagulants (DOACs) are strictly contraindicated in patients with mechanical prosthetic heart valves (RE-ALIGN trial showed higher thromboembolic and bleeding rates compared to warfarin).'
      },
      {
        text: 'Administer 4-factor prothrombin complex concentrate 2 hours before the operation while continuing warfarin',
        explanation: 'Prothrombin complex concentrate is indicated for life-threatening bleeding or emergent surgery within hours, not for planned elective operations where holding warfarin is safe.'
      },
      {
        text: 'Continue warfarin without interruption and administer fresh frozen plasma during intraoperative abdominal dissection',
        explanation: 'Continuing full-dose warfarin during major abdominal cancer resection results in severe, uncontrollable surgical hemorrhage and mortality.'
      }
    ]
  },
  {
    code: 'op-c-s3-0060',
    exam: 'Step 3',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Alcohol Withdrawal Protocol Symptom-Triggered Benzodiazepines',
    subtopic: 'CIWA-Ar Scoring and Delirium Tremens Prevention',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize alcohol withdrawal syndrome. Symptom-triggered benzodiazepine therapy guided by a validated assessment tool (e.g., CIWA-Ar >= 8-10) is superior to fixed-schedule therapy, resulting in lower total benzodiazepine doses, shorter treatment duration, and equivalent efficacy in preventing seizures and delirium tremens. In patients with severe hepatic dysfunction, lorazepam or oxazepam is preferred (glucuronidated, not hepatically oxidized).',
    citation: 'Mayo-Smith MF, et al. Management of alcohol withdrawal delirium. An evidence-based practice guideline. Arch Intern Med. 2004;164(13):1405-1412. PMID: 15249349.',
    stem:
      'A 46-year-old man is admitted to the hospital medicine service for treatment of severe acute cellulitis of the left lower extremity. He has a 20-year history of severe alcohol use disorder, consuming approximately 1 pint of liquor and six beers daily. His last drink was approximately 16 hours prior to arrival. On physical examination, he appears anxious and diaphoretic. Vital signs reveal blood pressure 158/94 mm Hg, heart rate 108/min, respirations 20/min, and temperature 37.8 C (100.0 F). Neurological examination demonstrates coarse postural and intentional tremors of outstretched hands and tongue. He reports mild nausea, headache, and feeling "jumpy," but denies auditory or visual hallucinations and is oriented to person, place, and date. Laboratory studies demonstrate AST 142 U/L, ALT 68 U/L (AST/ALT ratio > 2:1), and total bilirubin 1.4 mg/dL. The physician decides to implement an evidence-based pharmacotherapeutic protocol to manage withdrawal and prevent delirium tremens. Which of the following strategies is best supported by clinical trials for managing this patient’s withdrawal syndrome?',
    options: [
      {
        text: 'A symptom-triggered benzodiazepine regimen based on serial Clinical Institute Withdrawal Assessment (CIWA-Ar) scores',
        explanation: 'Randomized controlled trials demonstrate that a symptom-triggered benzodiazepine regimen (administering doses of lorazepam, diazepam, or chlordiazepoxide only when the CIWA-Ar score reaches >= 8 to 10) is superior to a fixed-schedule regimen. Symptom-triggered regimens achieve equivalent efficacy in preventing alcohol withdrawal seizures and delirium tremens while utilizing significantly lower total cumulative benzodiazepine doses and reducing the total duration of treatment. In patients with hepatic impairment (elevated transaminases), lorazepam or oxazepam is preferred because they undergo direct phase II glucuronidation without hepatic CYP450 oxidation.'
      },
      {
        text: 'A fixed-schedule oral chlordiazepoxide taper administered every 6 hours regardless of symptoms',
        explanation: 'Fixed-dose schedules administer unnecessary medication to patients who have completed withdrawal or oversedate those who metabolize drugs slowly, prolonging hospitalization.'
      },
      {
        text: 'Continuous intravenous propofol infusion with endotracheal intubation targeting burst suppression',
        explanation: 'Propofol infusion and mechanical ventilation are reserved for refractory delirium tremens failing massive intravenous benzodiazepine therapy (>50 mg diazepam or >10 mg lorazepam in 1 hour), not uncomplicated early withdrawal.'
      },
      {
        text: 'Oral carbamazepine monotherapy with complete avoidance of all benzodiazepine agents',
        explanation: 'Carbamazepine does not consistently prevent withdrawal seizures or delirium tremens and carries risks of hepatotoxicity and hematologic suppression in alcoholics.'
      },
      {
        text: 'Oral ethanol solution 5% administered enterally to maintain baseline blood alcohol concentration',
        explanation: 'Administering therapeutic ethanol is obsolete, pharmacokinetically unpredictable, carries significant organ toxicity, and reinforces alcohol dependence.'
      }
    ]
  },
  {
    code: 'op-c-s3-0061',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Pregnancy',
    topic: 'Asymptomatic Bacteriuria Screening in Pregnancy versus Geriatrics',
    subtopic: 'IDSA Guidelines on Treatment Indications and Pyelonephritis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Distinguish asymptomatic bacteriuria (ASB) indications. ASB should ONLY be screened and treated in: 1. Pregnant women (at 12-16 weeks gestation, to prevent acute pyelonephritis, preterm labor, and low birth weight); and 2. Patients undergoing invasive urologic procedures with mucosal trauma. ASB should NEVER be screened or treated in non-pregnant premenopausal women, elderly institutionalized adults, diabetics, or catheterized patients.',
    citation: 'Nicolle LE, et al. Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2019;68(10):e83-e110. PMID: 30895288.',
    stem:
      'A 24-year-old primigravida at 14 weeks gestation presents for a routine prenatal visit. She feels well and specifically denies dysuria, urinary frequency, urgency, suprapubic discomfort, fever, or flank pain. Vital signs and physical examination are normal. A routine clean-catch midstream urine culture obtained at 12 weeks gestation grows > 100,000 colony-forming units (CFU)/mL of Escherichia coli that is susceptible to nitrofurantoin, cephalexin, and amoxicillin-clavulanate, and resistant to ampicillin. Concurrently, in the adjacent examination room, the same physician evaluates an 82-year-old non-pregnant woman residing in an assisted-living facility whose routine surveillance urine culture grew > 100,000 CFU/mL of pansensitive Klebsiella pneumoniae, who is also completely asymptomatic without dysuria, fever, or mental status changes. Which of the following statements represents the correct evidence-based management for these two patients according to Infectious Diseases Society of America (IDSA) guidelines?',
    options: [
      {
        text: 'Treat the pregnant patient with oral antibiotic therapy; withhold antibiotic therapy in the elderly patient',
        explanation: 'According to IDSA guidelines, asymptomatic bacteriuria (ASB, defined as >= 100,000 CFU/mL of a single uropathogen without UTI symptoms) should be screened for and treated ONLY in pregnant women and patients undergoing invasive endoscopic urologic procedures involving mucosal breach. In pregnancy, untreated ASB progresses to acute pyelonephritis in 20–40% of women (due to progesterone-mediated ureteral dilation and uterine dextrorotation) and is associated with preterm labor and low birth weight; oral treatment (e.g., nitrofurantoin, cephalexin) reduces pyelonephritis by >80%. In contrast, ASB is extremely common in elderly women and treating it provides no clinical benefit, increases adverse drug effects, and drives antimicrobial resistance.'
      },
      {
        text: 'Treat both patients with 7 days of targeted oral antibiotic therapy',
        explanation: 'Treating ASB in elderly non-pregnant patients does not reduce symptomatic UTI episodes, sepsis, or mortality, but significantly increases C. difficile infection and resistant pathogens.'
      },
      {
        text: 'Withhold antibiotic therapy in both patients until clear dysuria or suprapubic pain develops',
        explanation: 'Withholding therapy in pregnant women allows progression to acute pyelonephritis in up to 40% of cases, endangering both maternal and fetal survival.'
      },
      {
        text: 'Treat the elderly patient with ciprofloxacin; withhold antibiotic therapy in the pregnant patient',
        explanation: 'This option inverts the evidence: the elderly patient should not be treated, and the pregnant woman must be treated.'
      },
      {
        text: 'Treat both patients with daily low-dose trimethoprim-sulfamethoxazole suppression until delivery or discharge',
        explanation: 'Continuous antibiotic prophylaxis is not indicated for initial ASB; pregnant patients receive a standard 5–7 day curative course followed by periodic surveillance cultures.'
      }
    ]
  },
  {
    code: 'op-c-s3-0062',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Acute Gout Flare Management in Advanced Chronic Kidney Disease',
    subtopic: 'ACR Recommendations and Corticosteroid First-Line Strategy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute gouty monoarthritis. Treatment choices depend on renal function: NSAIDs (indomethacin, naproxen) and colchicine are CONTRAINDICATED in severe renal impairment (eGFR < 30 mL/min/1.73m2). In severe CKD with 1-2 involved joints, intra-articular corticosteroid injection is preferred; oral systemic corticosteroids (prednisone 30-35 mg/day tapered over 7-10 days) are preferred if multiple joints or injection is infeasible.',
    citation: 'FitzGerald JD, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32391934.',
    stem:
      'A 67-year-old man presents to the urgent care clinic with severe pain, swelling, and erythema of his right first metatarsophalangeal (MTP) joint that woke him from sleep 8 hours ago. He describes the pain as 10/10 and states he cannot tolerate the weight of a bedsheet on his toe. Medical history includes stage 4 chronic kidney disease secondary to diabetic nephropathy (baseline serum creatinine 2.8 mg/dL, baseline eGFR 22 mL/min/1.73m2), heart failure with preserved ejection fraction, and peptic ulcer disease with prior upper gastrointestinal bleeding. On physical examination, the right first MTP joint is warm, exquisitely tender, tensely swollen, and surrounded by violaceous erythema. Arthrocentesis yields cloudy synovial fluid with 35,000 WBCs/microL (88% neutrophils); polarizing microscopy reveals intracellular, needle-shaped, negatively birefringent crystals, confirming acute gouty arthritis. Gram stain and bacterial cultures are negative. Which of the following is the most appropriate first-line pharmacotherapy for this acute gout flare?',
    options: [
      {
        text: 'Oral prednisone (30 to 35 mg daily for 5 days, followed by a rapid 5-day taper)',
        explanation: 'The three first-line pharmacologic classes for acute gout flares are NSAIDs, colchicine, and corticosteroids. However, in this patient with stage 4 CKD (eGFR 22 mL/min), heart failure, and active peptic ulcer history, NSAIDs are strictly contraindicated (high risk of precipitating acute renal failure, fluid overload, and gastrointestinal hemorrhage). Colchicine is also contraindicated in severe renal impairment due to fatal neuromyopathy and bone marrow toxicity from reduced drug clearance. Therefore, corticosteroids (oral prednisone 30–35 mg daily tapered over 7–10 days, or intra-articular triamcinolone injection) are the only safe and effective first-line therapy.'
      },
      {
        text: 'Oral indomethacin 50 mg three times daily with a proton-pump inhibitor',
        explanation: 'NSAIDs cause afferent arteriolar vasoconstriction, precipitating acute tubular necrosis and acute-on-chronic kidney failure in stage 4 CKD, and carry high bleeding risks in prior peptic ulcer disease.'
      },
      {
        text: 'Oral colchicine 1.2 mg loading dose followed by 0.6 mg 1 hour later',
        explanation: 'Colchicine requires dose reduction or complete avoidance in severe renal impairment (eGFR < 30 mL/min/1.73m2); using standard loading doses in stage 4 CKD leads to life-threatening neuromyopathy, rhabdomyolysis, and pancytopenia.'
      },
      {
        text: 'Immediate initiation of oral allopurinol 300 mg daily monotherapy',
        explanation: 'Urate-lowering therapy (allopurinol) should never be started as acute monotherapy during an acute flare because abrupt drops in serum urate destabilize microtophi and prolong/worsen joint inflammation.'
      },
      {
        text: 'Intravenous rasburicase infusion single dose',
        explanation: 'Rasburicase is a recombinant urate oxidase reserved for tumor lysis syndrome in malignancy; it is not approved or appropriate for routine acute outpatient gout flares.'
      }
    ]
  },
  {
    code: 'op-c-s3-0063',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Heart Failure Hospital Transitions and Readmission Reduction',
    subtopic: 'Multidisciplinary Interventions and Post-Discharge Follow-Up',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize transitions of care to reduce 30-day heart failure readmissions. High-quality evidence demonstrates that scheduling a structured in-person early outpatient follow-up visit within 7 days of discharge, combined with predischarge medication reconciliation and nurse-led self-care education (daily weight monitoring, sodium restriction), significantly reduces 30-day readmissions and mortality.',
    citation: 'Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.',
    stem:
      'A 71-year-old man with ischemic cardiomyopathy (left ventricular ejection fraction 30%) is being discharged from the hospital after successful treatment of acute decompensated heart failure with intravenous loop diuretics. His euvolemic state has been achieved, with resolution of orthopnea, clear lung fields, and absence of peripheral edema. His home regimen has been optimized to include oral sacubitril-valsartan 49/51 mg twice daily, metoprolol succinate 50 mg daily, empagliflozin 10 mg daily, and oral furosemide 40 mg daily. The inpatient quality improvement committee is reviewing discharge workflows to minimize 30-day hospital readmission rates, which carry substantial hospital penalties under CMS value-based care programs. Which of the following discharge coordination strategies has the strongest clinical evidence for reducing 30-day heart failure readmissions?',
    options: [
      {
        text: 'Scheduling a structured in-person outpatient follow-up appointment within 7 days of discharge coupled with disease-specific self-management education',
        explanation: 'Transitions of care are high-risk periods for heart failure patients. AHA/ACC/HFSA guidelines give a Class 1 recommendation to scheduling an early post-discharge outpatient follow-up visit within 7 to 14 days (optimally within 7 days) and providing structured, multidisciplinary heart failure disease management education prior to discharge. Key components include: verifying clinical stability, assessing euvolemic weight, adjusting diuretics, reinforcing medication reconciliation, educating on daily morning weight monitoring with clear "red-flag" call parameters, and dietary sodium restriction. This bundle significantly reduces 30-day readmission and mortality rates.'
      },
      {
        text: 'Discharging the patient with instructions to contact the cardiology clinic in 6 to 8 weeks for a routine check-up',
        explanation: 'Delaying outpatient follow-up to 6–8 weeks is associated with high 30-day readmission rates (>25%) because early subclinical fluid retention or medication non-compliance goes undetected.'
      },
      {
        text: 'Replacing the oral loop diuretic with as-needed over-the-counter herbal diuretics upon hospital discharge',
        explanation: 'Herbal supplements lack proven efficacy and safety, and omitting prescribed loop diuretics rapidly precipitates recurrent volume overload and acute pulmonary edema.'
      },
      {
        text: 'Ordering repeat transthoracic echocardiography on the morning of discharge before leaving the hospital',
        explanation: 'Routine repeat echocardiography immediately prior to discharge does not alter acute management or reduce readmissions when ejection fraction and valvular structure were documented during admission.'
      },
      {
        text: 'Discontinuing all beta-blocker therapy upon discharge to prevent subacute bradycardia at home',
        explanation: 'Discontinuing guideline-directed beta-blocker therapy increases mortality and heart failure hospitalization; stable patients must continue beta-blockers without interruption.'
      }
    ]
  },
  {
    code: 'op-c-s3-0064',
    exam: 'Step 3',
    subject: 'Biostatistics',
    system: 'General Principles',
    topic: 'Diagnostic Test Predictive Values and Disease Prevalence Dynamics',
    subtopic: 'Bayes Theorem Sensitivity Specificity PPV and NPV Shifts',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Understand relationship between disease prevalence and diagnostic test performance: Sensitivity and specificity are intrinsic test characteristics that do NOT change with prevalence. Positive Predictive Value (PPV) is directly proportional to prevalence (increases as prevalence increases). Negative Predictive Value (NPV) is inversely proportional to prevalence (increases as prevalence decreases). When moving a test from a tertiary hospital to a general screening population (lower prevalence), PPV drops and NPV rises.',
    references: [
      {
        label: 'Fletcher RH, Fletcher SW, Fletcher GS. Clinical Epidemiology: The Essentials. 5th ed. Philadelphia, PA: Lippincott Williams & Wilkins; 2014.',
        url: 'https://www.ncbi.nlm.nih.gov/nlmcatalog/101614798'
      }
    ],
    stem:
      'A novel non-invasive serum biomarker test has been developed for early detection of pancreatic adenocarcinoma. In a validation study conducted in a specialized tertiary gastrointestinal oncology clinic where the prevalence of pancreatic cancer was 20%, the test demonstrated a sensitivity of 90% and a specificity of 90%. A public health director proposes implementing this identical serum biomarker test as a broad screening tool in an asymptomatic primary care population where the estimated prevalence of pancreatic cancer is 0.1% (1 in 1,000 individuals). Assuming the test’s sensitivity and specificity remain strictly unchanged, how will the positive predictive value (PPV) and negative predictive value (NPV) of the test change when applied to this new primary care screening population?',
    options: [
      {
        text: 'Positive predictive value will decrease markedly, while negative predictive value will increase',
        explanation: 'Sensitivity and specificity are intrinsic operating characteristics of a diagnostic test that remain constant regardless of disease prevalence. In contrast, predictive values are heavily dependent on disease prevalence. As disease prevalence decreases (from 20% in the cancer clinic down to 0.1% in general screening), the proportion of true positives among all test positives plummets because false positives outnumber true positives, causing the Positive Predictive Value (PPV) to drop dramatically (from ~69% down to <1%). Conversely, the proportion of true negatives among all test negatives increases, causing the Negative Predictive Value (NPV) to approach nearly 100%.'
      },
      {
        text: 'Both positive predictive value and negative predictive value will decrease substantially',
        explanation: 'NPV does not decrease when prevalence falls; because fewer people have the disease, a negative test result is even more likely to represent a true non-diseased individual, increasing NPV.'
      },
      {
        text: 'Both positive predictive value and negative predictive value will remain completely unchanged',
        explanation: 'Predictive values inherently vary with prevalence according to Bayes theorem; only sensitivity and specificity remain unchanged.'
      },
      {
        text: 'Positive predictive value will increase, while negative predictive value will decrease',
        explanation: 'PPV increases only when disease prevalence increases; in a low-prevalence population, PPV decreases.'
      },
      {
        text: 'Sensitivity will increase to 99%, while specificity will decrease below 50%',
        explanation: 'Intrinsic test sensitivity and specificity do not shift simply due to changing disease prevalence in mathematical modeling.'
      }
    ]
  },
  {
    code: 'op-c-s3-0065',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Diabetic Peripheral Neuropathic Pain First-Line Pharmacotherapy',
    subtopic: 'AAN Guidelines on SNRIs Alpha-2-Delta Ligands and Opioid Avoidance',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize painful diabetic peripheral neuropathy (stocking-glove burning, paresthesias, allodynia). First-line pharmacotherapy recommended by the American Academy of Neurology (AAN) and ADA: SNRIs (duloxetine), alpha-2-delta ligands (pregabalin, gabapentin), or TCAs (amitriptyline). Opioids are strictly avoided due to lack of long-term efficacy, tolerance, and addiction.',
    citation: 'Price R, et al. Oral and Topical Treatment of Painful Diabetic Polyneuropathy: Practice Guideline Update Summary: Report of the AAN Guideline Subcommittee. Neurology. 2022;98(1):31-43. PMID: 34965987.',
    stem:
      'A 58-year-old man with a 12-year history of type 2 diabetes mellitus presents to the clinic with persistent burning, tingling, and lancinating pain in both feet and lower calves for the past 8 months. The pain is worse at night, prevents him from falling asleep, and causes him distress when even light bedsheets brush against his toes (allodynia). His HbA1c is 8.2%. Physical examination demonstrates diminished sensation to light touch with a 10-g monofilament over the plantar surfaces of both feet, absent ankle reflexes bilaterally, and reduced vibration sense at the halluces bilaterally. Dorsalis pedis pulses are 2+ bilaterally. He has no history of depression, glaucoma, or cardiac arrhythmia. He asks for effective medication to relieve his nerve pain so he can sleep. Which of the following is the most appropriate initial pharmacotherapeutic agent for this patient’s neuropathic pain?',
    options: [
      {
        text: 'Oral duloxetine 30 mg daily titrated to 60 mg daily',
        explanation: 'The patient has painful diabetic peripheral neuropathy (DPN). Practice guidelines from the American Academy of Neurology (AAN) and the American Diabetes Association (ADA) recommend serotonin-norepinephrine reuptake inhibitors (SNRIs, particularly duloxetine) or alpha-2-delta calcium channel ligands (pregabalin or gabapentin) as first-line agents. Duloxetine enhances descending inhibitory pain pathways by blocking presynaptic reuptake of serotonin and norepinephrine in the dorsal horn of the spinal cord. Tricyclic antidepressants (amitriptyline) are also effective but carry significant anticholinergic and cardiac side effects in older adults.'
      },
      {
        text: 'Oral oxycodone controlled-release 20 mg twice daily',
        explanation: 'Opioid analgesics are strongly advised against for chronic neuropathic pain by professional guidelines due to lack of sustained efficacy, rapid tolerance, risk of dependence, overdose death, and opioid-induced hyperalgesia.'
      },
      {
        text: 'Oral ibuprofen 800 mg three times daily with meals',
        explanation: 'NSAIDs are ineffective for neuropathic nerve pain mechanisms and cause renal failure, hypertension, and fluid retention in patients with diabetic microvascular disease.'
      },
      {
        text: 'Sublingual buprenorphine 2 mg daily for central analgesia',
        explanation: 'Buprenorphine is indicated for opioid use disorder or refractory chronic severe nociceptive pain; it is not a recommended first-line agent for diabetic neuropathic pain.'
      },
      {
        text: 'Tight glycemic control with intensive insulin therapy aiming for immediate complete pain relief',
        explanation: 'While tight glycemic control slows the long-term progression of diabetic neuropathy, it does not provide acute symptomatic relief of established neuropathic pain and can occasionally cause paradoxical treatment-induced neuropathy ("insulin neuritis").'
      }
    ]
  },
  {
    code: 'op-c-s3-0066',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Chronic Hepatitis C Screening and Direct-Acting Antiviral Therapy',
    subtopic: 'Reflex RNA Testing and Pangenotypic Treatment Regimens',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Hepatitis C screening and management: USPSTF recommends 1-time screening for all adults aged 18-79. Initial test is HCV antibody with reflex HCV RNA PCR. If RNA is positive, chronic infection is confirmed. First-line treatment is oral pangenotypic direct-acting antivirals (DAA) (e.g., glecaprevir-pibrentasvir for 8 weeks or sofosbuvir-velpatasvir for 12 weeks), achieving cure (SVR12) in >95% without interferon.',
    citation: 'Ghany MG, et al. Hepatitis C Guidance 2019 Update: AASLD-IDSA Recommendations for Testing, Managing, and Treating Hepatitis C. Hepatology. 2020;71(2):686-721. PMID: 31816111.',
    stem:
      'A 51-year-old man presents to the clinic for a routine health maintenance checkup. He feels entirely well and has no history of jaundice, pruritus, fatigue, or abdominal distension. He reports experimenting with intravenous drugs for several months in his early twenties. Physical examination is unremarkable, with no stigmata of chronic liver disease. Routine screening laboratory tests reveal: AST 48 U/L, ALT 54 U/L, total bilirubin 0.8 mg/dL, alkaline phosphatase 78 U/L, and platelet count 240,000/microL. Serum Hepatitis C virus (HCV) antibody is reactive. A reflex quantitative HCV RNA polymerase chain reaction (PCR) assay is positive with a viral load of 1,850,000 IU/mL, confirming chronic HCV viremia. Non-invasive liver fibrosis assessment (FIB-4 score 0.85) indicates minimal-to-no hepatic fibrosis (stage F0–F1). Which of the following is the most appropriate management plan for this patient?',
    options: [
      {
        text: 'Initiate oral pangenotypic direct-acting antiviral therapy (e.g., glecaprevir-pibrentasvir for 8 weeks or sofosbuvir-velpatasvir for 12 weeks)',
        explanation: 'According to AASLD/IDSA guidelines, all patients with chronic HCV infection (confirmed by detectable HCV RNA) should be treated with direct-acting antiviral (DAA) therapy, regardless of disease stage, unless they have short life expectancy that cannot be remediated. Modern interferon-free, pangenotypic DAA regimens (e.g., glecaprevir-pibrentasvir for 8 weeks in treatment-naive non-cirrhotic patients, or sofosbuvir-velpatasvir for 12 weeks) are highly well-tolerated, all-oral, and achieve sustained virologic response (SVR12, defined as undetectable RNA 12 weeks post-treatment, signifying virologic cure) in >95–98% of patients.'
      },
      {
        text: 'Withhold antiviral therapy and repeat HCV RNA viral load in 12 months because liver enzymes are nearly normal',
        explanation: 'Normal or mildly elevated aminotransferases do not correlate with histological progression; delaying treatment permits ongoing fibrosis progression, cirrhosis development, and transmission risk.'
      },
      {
        text: 'Perform an immediate percutaneous liver core biopsy before considering insurance approval for therapy',
        explanation: 'Liver biopsy is no longer required prior to DAA therapy; non-invasive markers (FIB-4 score, transient elastography/FibroScan) are sufficient to evaluate fibrosis.'
      },
      {
        text: 'Initiate pegylated interferon-alpha plus ribavirin combination therapy for 48 weeks',
        explanation: 'Interferon-based regimens are obsolete due to severe toxicities (depression, marrow suppression, flu-like syndrome) and markedly inferior cure rates compared to oral DAAs.'
      },
      {
        text: 'Administer hepatitis C immunoglobulin intramuscularly every 6 months to reduce viral replication',
        explanation: 'There is no effective hepatitis C immunoglobulin or vaccine; passive immunization has no role in managing established chronic HCV infection.'
      }
    ]
  },
  {
    code: 'op-c-s3-0067',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Chronic Kidney Disease Mineral and Bone Disorder Management',
    subtopic: 'Hyperphosphatemia Non-Calcium Phosphate Binders and Calciphylaxis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize CKD-MBD (stage 4-5 CKD with hyperphosphatemia, hypocalcemia, and secondary hyperparathyroidism). Decreased GFR leads to phosphate retention, which binds ionized calcium and suppresses 1-alpha-hydroxylase (low calcitriol), stimulating PTH. Initial management is dietary phosphate restriction. If phosphorus remains elevated, non-calcium phosphate binders (sevelamer carbonate) are preferred over calcium-based binders to prevent vascular calcification and calciphylaxis.',
    citation: 'Kidney Disease: Improving Global Outcomes (KDIGO) CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for the Diagnosis, Evaluation, Prevention, and Treatment of Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD). Kidney Int Suppl (2011). 2017;7(1):1-59. PMID: 30675257.',
    stem:
      'A 64-year-old man with stage 4 chronic kidney disease secondary to hypertensive nephrosclerosis (baseline eGFR 20 mL/min/1.73m2, serum creatinine 3.1 mg/dL) presents for routine nephrology follow-up. He adheres to a blood pressure regimen of lisinopril, metoprolol, and amlodipine. Physical examination reveals blood pressure 130/80 mm Hg and no peripheral edema. Laboratory evaluation reveals: serum calcium 8.9 mg/dL (normal: 8.5–10.5 mg/dL), serum phosphate 6.4 mg/dL (normal: 2.5–4.5 mg/dL), intact parathyroid hormone (iPTH) 240 pg/mL (normal: 15–65 pg/mL), 25-hydroxyvitamin D 32 ng/mL, and serum bicarbonate 22 mEq/L. Abdominal plain radiography obtained for unrelated symptoms shows extensive curvilinear calcification along the abdominal aorta and iliac arteries. Despite adherence to a low-phosphate renal diet for 3 months, his repeat fasting serum phosphate remains elevated at 6.2 mg/dL. Which of the following is the most appropriate next pharmacological intervention for this patient?',
    options: [
      {
        text: 'Initiate oral sevelamer carbonate with meals to bind intestinal phosphate without increasing calcium load',
        explanation: 'This patient has chronic kidney disease-mineral and bone disorder (CKD-MBD) with persistent hyperphosphatemia, secondary hyperparathyroidism, and pre-existing vascular calcification. KDIGO guidelines recommend lowering elevated phosphate toward the normal range. In patients with CKD stage 3a–5D who have evidence of vascular or valvular calcification, non-calcium-based phosphate binders (such as sevelamer carbonate or lanthanum carbonate) are strongly preferred over calcium-containing binders (calcium acetate or calcium carbonate) to avoid positive calcium balance, which accelerates arterial media calcification (Mönckeberg sclerosis) and increases cardiovascular mortality.'
      },
      {
        text: 'Initiate high-dose oral calcium carbonate 1,500 mg three times daily with meals',
        explanation: 'Calcium-based binders provide significant systemic calcium absorption, promoting metastatic vascular and soft-tissue calcification and calciphylaxis in CKD patients with baseline vascular calcification.'
      },
      {
        text: 'Initiate intravenous cinacalcet hydrochloride pulse therapy twice weekly',
        explanation: 'Cinacalcet is an oral calcimimetic indicated for secondary hyperparathyroidism in dialysis-dependent end-stage kidney disease (CKD stage 5D); it is not approved or recommended for non-dialysis CKD stage 4 due to high risk of severe hypocalcemia.'
      },
      {
        text: 'Initiate oral aluminum hydroxide suspension after every meal indefinitely',
        explanation: 'Aluminum-containing antacids/binders cause severe aluminum bone disease (osteomalacia), microcytic anemia, and dialysis dementia, and are strictly contraindicated for long-term use in CKD.'
      },
      {
        text: 'Perform emergent subtotal surgical parathyroidectomy to normalize parathyroid hormone',
        explanation: 'Parathyroidectomy is reserved for severe tertiary hyperparathyroidism refractory to medical therapy with hypercalcemia and intractable bone pain or calciphylaxis, not moderate secondary hyperparathyroidism.'
      }
    ]
  },
  {
    code: 'op-c-s3-0068',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Acute Ischemic Stroke Permissive Hypertension Management',
    subtopic: 'AHA/ASA Blood Pressure Thresholds Without Thrombolysis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize blood pressure management in acute ischemic stroke NOT receiving thrombolytic therapy: Permissive hypertension up to 220/120 mm Hg is maintained for the first 24-48 hours to preserve collateral perfusion in the ischemic penumbra. Only lower blood pressure if > 220/120 mm Hg (by 15% in first 24 hours) or in the presence of comorbid end-organ damage (aortic dissection, acute MI, hypertensive encephalopathy). If receiving IV tPA, target is < 185/110 before tPA and < 180/105 after.',
    citation: 'Powers WJ, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418. PMID: 31662037.',
    stem:
      'A 68-year-old man is admitted to the stroke unit 14 hours after the acute onset of left-sided facial droop, left arm weakness, and slurred speech that began yesterday evening. Non-contrast head CT demonstrates early ischemic hypodensity in the right middle cerebral artery territory with no evidence of intracranial hemorrhage or mass effect. Because he presented well outside the 4.5-hour intravenous thrombolysis window and CT perfusion demonstrates completed infarction without significant salvageable penumbra for mechanical thrombectomy, conservative supportive therapy is planned. On arrival to the unit, his blood pressure is 202/108 mm Hg and heart rate is 78/min. He is comfortable and denies headache, chest pain, or shortness of breath. Cardiac examination is normal, lungs are clear, and ECG shows sinus rhythm without acute ischemic changes. Serum troponin is normal. The resident physician asks whether intravenous nicardipine or labetalol should be started immediately to lower the patient’s blood pressure to < 140/90 mm Hg. Which of the following is the most appropriate management regarding blood pressure control for this patient?',
    options: [
      {
        text: 'Permit blood pressure to remain elevated without antihypertensive therapy unless it exceeds 220/120 mm Hg',
        explanation: 'According to AHA/ASA guidelines, in patients with acute ischemic stroke who do NOT receive intravenous thrombolysis or endovascular thrombectomy and have no comorbid conditions requiring urgent antihypertensive treatment (such as aortic dissection, acute coronary syndrome, or hypertensive encephalopathy), blood pressure should NOT be actively lowered unless systolic BP exceeds 220 mm Hg or diastolic BP exceeds 120 mm Hg. Autoregulation in the ischemic cerebral penumbra is lost, making tissue perfusion passive and entirely dependent on systemic mean arterial pressure. Precipitous blood pressure reduction compromises collateral perfusion to the penumbra, causing stroke extension and irreversible neurological deterioration.'
      },
      {
        text: 'Initiate continuous intravenous nicardipine infusion targeting a systolic blood pressure < 140 mm Hg within 2 hours',
        explanation: 'Aggressively lowering systolic BP to < 140 mm Hg in the acute phase of non-reperfused ischemic stroke reduces cerebral perfusion pressure and expands the infarct core, worsening permanent functional disability.'
      },
      {
        text: 'Administer intravenous labetalol boluses targeting a blood pressure < 185/110 mm Hg',
        explanation: 'The target of < 185/110 mm Hg applies specifically to patients who are candidates for intravenous alteplase/tenecteplase to prevent hemorrhagic transformation; this patient is outside the thrombolytic window.'
      },
      {
        text: 'Administer sublingual nifedipine capsules immediately to achieve rapid systemic vasodilatation',
        explanation: 'Sublingual nifedipine produces rapid, uncontrolled hypotension that can precipitate massive watershed cerebral infarction and myocardial infarction; it is strictly contraindicated in acute stroke.'
      },
      {
        text: 'Initiate intravenous sodium nitroprusside infusion titrated to a mean arterial pressure reduction of 40%',
        explanation: 'Sodium nitroprusside increases intracranial pressure, causes profound reflex steal phenomena, and a 40% MAP reduction severely worsens cerebral ischemia.'
      }
    ]
  },
  {
    code: 'op-c-s3-0069',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'Hospital-Acquired Pneumonia Empiric Antibiotic Stratification',
    subtopic: 'MRSA and Antipseudomonal Dual Coverage Criteria',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize hospital-acquired pneumonia (HAP, developing >= 48 hours after admission). Empiric coverage requires: 1 agent active against MRSA (vancomycin or linezolid) PLUS 1 or 2 antipseudomonal agents. Two antipseudomonal agents from different classes (e.g., cefepime/pip-tazo PLUS tobramycin/ciprofloxacin) are required if high risk of mortality (ventilator/septic shock) or prior IV antibiotics within 90 days.',
    citation: 'Kalil AC, et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the Infectious Diseases Society of America and the American Thoracic Society. Clin Infect Dis. 2016;63(5):e61-e111. PMID: 27418579.',
    stem:
      'A 66-year-old woman is evaluated on hospital day 5 following elective total hip arthroplasty. Her postoperative recovery was complicated by urinary retention requiring catheterization. Over the past 12 hours, she has developed fever, tachypnea, and a cough productive of thick purulent sputum. Her medical history includes type 2 diabetes mellitus and chronic kidney disease stage 3. She received intravenous cefazolin for surgical prophylaxis 5 days ago. On physical examination, temperature is 38.7 C (101.7 F), blood pressure is 106/66 mm Hg, heart rate is 104/min, respirations are 26/min, and oxygen saturation is 91% on ambient air. Chest auscultation reveals dullness to percussion and bronchial breath sounds with inspiratory crackles over the right lower lung zone. Portable chest radiography demonstrates a new dense consolidation in the right lower lobe. Sputum and blood cultures are obtained. The hospital’s antibiogram shows a 24% local prevalence of methicillin-resistant Staphylococcus aureus (MRSA) among S. aureus isolates. Which of the following initial empiric antimicrobial regimens is most appropriate for this patient?',
    options: [
      {
        text: 'Intravenous vancomycin combined with intravenous cefepime',
        explanation: 'This patient has hospital-acquired pneumonia (HAP, pneumonia occurring >= 48 hours after admission). According to IDSA/ATS guidelines, empiric coverage for HAP must cover Staphylococcus aureus (including MRSA) and Pseudomonas aeruginosa, as well as other gram-negative bacilli. Coverage for MRSA (with vancomycin or linezolid) is indicated when the local prevalence of MRSA among S. aureus isolates exceeds 20% or in patients with prior IV antibiotic exposure. In a hemodynamically stable patient without septic shock or high mortality risk, single-agent antipseudomonal beta-lactam coverage (such as cefepime, piperacillin-tazobactam, or meropenem) combined with an anti-MRSA agent (vancomycin) is the standard recommended regimen.'
      },
      {
        text: 'Intravenous ceftriaxone combined with oral azithromycin monotherapy',
        explanation: 'Ceftriaxone plus azithromycin is the standard regimen for community-acquired pneumonia (CAP); it lacks coverage for MRSA and Pseudomonas aeruginosa, which are the primary virulent pathogens in HAP.'
      },
      {
        text: 'Intravenous vancomycin monotherapy with targeted renal trough drug level monitoring',
        explanation: 'Vancomycin monotherapy provides excellent coverage for MRSA but completely lacks activity against Pseudomonas aeruginosa and enteric gram-negative bacilli, which cause the majority of HAP cases.'
      },
      {
        text: 'Oral levofloxacin monotherapy administered at 750 mg daily for 7 days',
        explanation: 'Levofloxacin monotherapy does not reliably cover MRSA in hospitalized patients and carries high treatment failure rates in hospital-acquired infections with high MRSA prevalence.'
      },
      {
        text: 'Intravenous daptomycin combined with intravenous piperacillin-tazobactam',
        explanation: 'Daptomycin is inactivated by pulmonary surfactant and is clinically ineffective for pneumonia; using it to treat lung infections results in severe clinical failure and increased mortality.'
      }
    ]
  },
  {
    code: 'op-c-s3-0070',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Colorectal Cancer Screening Modalities and Starting Age',
    subtopic: 'USPSTF 2021 Lowered Age Guidelines and Surveillance Intervals',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize USPSTF 2021 colorectal cancer screening guidelines for average-risk adults: Screening starts at age 45 (lowered from 50) and continues to 75. Acceptable modalities: Colonoscopy every 10 years, annual Fecal Immunochemical Test (FIT), stool DNA-FIT every 3 years, CT colonography every 5 years, or flexible sigmoidoscopy every 5 years (+/- annual FIT). Any positive non-invasive test requires follow-up colonoscopy.',
    citation: 'US Preventive Services Task Force. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325(19):1965-1977. PMID: 34003218.',
    stem:
      'A 46-year-old man presents to the primary care clinic for a routine preventive health evaluation. He feels completely well and reports no rectal bleeding, hematochezia, melena, changes in bowel caliber, unintentional weight loss, or abdominal pain. His medical history is notable only for mild hypertension managed with lifestyle modification. He has never undergone any cancer screening examinations. He has no personal history of inflammatory bowel disease, polyps, or radiation exposure. Family history is negative for colorectal cancer or polyposis syndromes in any first-degree or second-degree relatives. Physical examination and digital rectal examination are completely normal. The patient is hesitant about taking time off work for a procedure requiring bowel preparation and asks about his screening options. Which of the following counseling statements is most accurate regarding colorectal cancer screening for this patient?',
    options: [
      {
        text: 'Screening is recommended starting at age 45 using either colonoscopy every 10 years or annual fecal immunochemical testing',
        explanation: 'In 2021, the USPSTF and the American College of Gastroenterology lowered the recommended starting age for colorectal cancer screening in average-risk individuals from age 50 down to age 45 (Grade B recommendation) due to rising incidence of early-onset colorectal adenocarcinoma. Several screening strategies are endorsed: colonoscopy every 10 years, annual fecal immunochemical test (FIT), stool DNA-FIT (Cologuard) every 3 years, or CT colonography every 5 years. Offering patients non-invasive options such as annual FIT is effective and improves screening adherence for individuals unwilling to undergo colonoscopy preparation.'
      },
      {
        text: 'Screening is not recommended until age 50 because he has no family history of colorectal malignancies',
        explanation: 'Waiting until age 50 reflects obsolete pre-2021 guidelines; contemporary guidelines mandate initiating screening at age 45 for all average-risk individuals.'
      },
      {
        text: 'A negative fecal occult blood test performed on stool obtained during today’s digital rectal examination fulfills his screening requirement',
        explanation: 'In-office single digital rectal exam guaiac testing is completely invalid for cancer screening due to very low sensitivity (<30%) and high false-positive rates; home-collected multi-sample FIT or colonoscopy is required.'
      },
      {
        text: 'Serum carcinoembryonic antigen (CEA) testing every 3 years is an approved non-invasive screening alternative',
        explanation: 'Carcinoembryonic antigen (CEA) is a tumor marker used strictly for monitoring post-resection recurrence of established colorectal cancer; it has poor sensitivity and specificity and is never used for screening.'
      },
      {
        text: 'Colonoscopy is the only guideline-endorsed screening modality capable of reducing colorectal cancer mortality',
        explanation: 'Annual FIT and flexible sigmoidoscopy have both been proven in large randomized trials to significantly reduce colorectal cancer incidence and mortality; colonoscopy is not the sole acceptable modality.'
      }
    ]
  },
  {
    code: 'op-c-s3-0071',
    exam: 'Step 3',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Opioid Use Disorder Maintenance Pharmacotherapy and Mortality',
    subtopic: 'Buprenorphine-Naloxone versus Medically Supervised Withdrawal',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize severe opioid use disorder (OUD). First-line therapy is medication for opioid use disorder (MOUD) with buprenorphine-naloxone (partial mu-agonist) or methadone (full mu-agonist). MOUD reduces all-cause mortality, overdose deaths, and transmission of viral infections. Medically supervised withdrawal (detoxification) alone without maintenance has relapse rates > 80-90% and increases fatal overdose risk due to loss of tolerance.',
    citation: 'American Society of Addiction Medicine. The ASAM National Practice Guideline for the Treatment of Opioid Use Disorder: 2020 Focused Update. J Addict Med. 2020;14(2S Suppl 1):1-91. PMID: 32511106.',
    stem:
      'A 28-year-old man is brought to the clinic by his domestic partner for treatment of substance dependence. He has used illicit intravenous heroin and non-prescribed oral oxycodone daily for the past 3 years. He has experienced multiple failed attempts to quit on his own, suffers severe cravings, has lost his job, and survived an accidental fentanyl overdose 2 months ago that required emergency naloxone administration. He has no other psychiatric or medical conditions. Physical examination reveals track marks on both antecubital fossae but is otherwise unremarkable. Urine drug screen is positive for opioids and fentanyl metabolites. The patient’s partner asks: "Can’t we just admit him to an inpatient detox facility for 5 days to get the drugs completely out of his system so he can be drug-free without having to take another daily medication?" Which of the following represents the most evidence-based medical response to this request?',
    options: [
      {
        text: 'Medically supervised withdrawal alone is associated with high relapse rates and increased overdose mortality compared to opioid agonist maintenance therapy',
        explanation: 'High-quality randomized clinical trials and epidemiological studies unequivocally demonstrate that short-term medically supervised withdrawal ("detoxification") alone yields relapse rates exceeding 80–90% within weeks to months and significantly increases fatal overdose mortality (due to loss of physiological opioid tolerance during abstinence, leading to fatal respiratory arrest upon relapse). In contrast, medication for opioid use disorder (MOUD) using maintenance agonist therapy—specifically buprenorphine-naloxone (partial agonist) or methadone (full agonist)—reduces all-cause mortality by >50%, decreases illicit opioid use, reduces infectious transmission (HIV/HCV), and improves social retention.'
      },
      {
        text: 'Five-day inpatient detoxification achieves durable long-term sobriety in over 70% of patients without ongoing pharmacotherapy',
        explanation: 'Short-term inpatient detoxification without transition to maintenance therapy has long-term abstinence rates of less than 10–15%.'
      },
      {
        text: 'Opioid maintenance therapy simply substitutes one addiction for another without reducing overall patient mortality',
        explanation: 'Maintenance therapy treats the neurobiological receptor dysregulation of dependence without producing euphoria or cognitive impairment, and robust evidence confirms a dramatic reduction in all-cause mortality.'
      },
      {
        text: 'Oral naltrexone should be initiated immediately today while the patient still has active opioids in his system',
        explanation: 'Administering naltrexone (an opioid antagonist) while opioids are present precipitates immediate, severe, agonizing withdrawal syndrome; patients must be opioid-free for 7–10 days before naltrexone initiation.'
      },
      {
        text: 'Cognitive behavioral therapy monotherapy without medications is the primary recommended standard of care for severe opioid use disorder',
        explanation: 'Psychotherapy alone without medication for opioid use disorder is markedly inferior to pharmacotherapy and is not recommended as standalone treatment for severe OUD.'
      }
    ]
  },
  {
    code: 'op-c-s3-0072',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Primary Open-Angle Glaucoma Topical Prostaglandin Analogs',
    subtopic: 'Uveoscleral Outflow Facilitation and First-Line Efficacy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize primary open-angle glaucoma (POAG, elevated IOP, increased cup-to-disc ratio > 0.5, painless progressive peripheral visual field loss / arcuate scotoma). First-line medical therapy: topical prostaglandin analogs (latanoprost, bimatoprost, travoprost). Mechanism: increases uveoscleral outflow. Side effects: irreversible iris hyperpigmentation, eyelash lengthening/thickening, periorbital hyperpigmentation.',
    citation: 'Prum BE Jr, et al. Primary Open-Angle Glaucoma Preferred Practice Pattern Guidelines. Ophthalmology. 2016;123(1):P41-P111. PMID: 26581556.',
    stem:
      'A 64-year-old African American man presents to the ophthalmology clinic for a routine comprehensive eye examination. He has no ocular pain, redness, halos, or acute visual changes. He has a medical history of hypertension and well-controlled asthma. On physical examination, visual acuity is 20/20 in both eyes with corrective lenses. Slit-lamp biomicroscopy reveals clear corneas and deep, quiet anterior chambers with open iridocorneal angles (Grade 4 on gonioscopy). Goldmann applanation tonometry demonstrates an intraocular pressure (IOP) of 26 mm Hg in the right eye and 27 mm Hg in the left eye (normal: 10–21 mm Hg). Dilated funduscopic examination reveals asymmetric optic nerve cupping, with an optic cup-to-disc ratio of 0.7 in the right eye and 0.6 in the left eye, along with thinning of the inferior neuroretinal rim. Automated Humphrey visual field perimetry demonstrates early superior arcuate scotomas in both eyes respecting the horizontal midline. Which of the following topical ophthalmic medications is the most appropriate initial first-line therapy for this patient?',
    options: [
      {
        text: 'Topical latanoprost 0.005% ophthalmic solution once daily at bedtime',
        explanation: 'The patient has primary open-angle glaucoma (POAG) based on elevated intraocular pressure, open anterior chamber angles, optic nerve cupping (cup-to-disc ratio > 0.5), and characteristic arcuate visual field defects. First-line medical therapy per American Academy of Ophthalmology guidelines is a topical prostaglandin analog (such as latanoprost, bimatoprost, or travoprost). Prostaglandin analogs are the most efficacious IOP-lowering agents (reducing IOP by 25–35%), administered conveniently once daily at bedtime, and work by remodeling extracellular matrix in the ciliary muscle to facilitate uveoscleral outflow. Furthermore, topical beta-blockers (timolol) are contraindicated because the patient has active asthma.'
      },
      {
        text: 'Topical timolol maleate 0.5% ophthalmic solution twice daily',
        explanation: 'Topical beta-blockers undergo systemic absorption through the nasolacrimal duct and can trigger severe bronchospasm, asthma exacerbations, and bradycardia; asthma is a major contraindication.'
      },
      {
        text: 'Topical pilocarpine 2% ophthalmic solution four times daily',
        explanation: 'Pilocarpine is a miotic agent requiring frequent dosing (4 times daily) that causes ciliary spasm, brow ache, and night blindness, and is not first-line therapy for chronic POAG.'
      },
      {
        text: 'Oral acetazolamide 250 mg four times daily maintenance therapy',
        explanation: 'Oral carbonic anhydrase inhibitors cause substantial systemic adverse effects (metabolic acidosis, hypokalemia, nephrolithiasis, fatigue) and are reserved for acute crises or refractory disease.'
      },
      {
        text: 'Topical brimonidine tartrate monotherapy with avoidance of all other classes',
        explanation: 'Brimonidine (alpha-2 agonist) lowers IOP less effectively than prostaglandins, requires two-to-three times daily administration, and carries high rates of allergic contact blepharoconjunctivitis (>15%).'
      }
    ]
  },
  {
    code: 'op-c-s3-0073',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Preoperative Cardiac Risk Assessment RCRI and METs Capacity',
    subtopic: 'ACC/AHA Guidelines on Pharmacologic Stress Testing Indications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Evaluate preoperative cardiac risk for non-cardiac surgery using Revised Cardiac Risk Index (RCRI) and functional capacity (METs): RCRI variables (1. High-risk surgery, 2. History of ischemic heart disease, 3. History of CHF, 4. History of cerebrovascular disease, 5. Diabetes on insulin, 6. Serum Cr > 2.0). If RCRI >= 2 and functional capacity is POOR (< 4 METs, unable to climb 2 flights of stairs), pharmacologic stress testing is indicated IF it will change management.',
    citation: 'Fleisher LA, et al. 2014 ACC/AHA guideline on perioperative cardiovascular evaluation and management of patients undergoing noncardiac surgery. Circulation. 2014;130(24):e278-e333. PMID: 25085961.',
    stem:
      'A 69-year-old man is evaluated in the preoperative clinic prior to elective open repair of an infrarenal abdominal aortic aneurysm measuring 5.8 cm in diameter. His medical history includes coronary artery disease with drug-eluting stent placement to the left anterior descending artery 4 years ago, well-controlled heart failure with reduced ejection fraction (LVEF 38%), type 2 diabetes mellitus managed with subcutaneous insulin glargine, and stage 3 chronic kidney disease (serum creatinine 2.4 mg/dL). He is sedentary, experiences dyspnea on minimal exertion, and cannot walk more than 1 block on level ground or climb a single flight of stairs without stopping to rest (functional capacity < 4 metabolic equivalents [METs]). He denies resting angina, orthopnea, or syncope. Blood pressure is 132/80 mm Hg and heart rate is 64/min on carvedilol, lisinopril, and atorvastatin. Physical examination reveals clear lungs, an S4 gallop, and trace pretibial edema. Baseline ECG demonstrates normal sinus rhythm with old anterior Q waves and no acute ST-segment shifts. Which of the following is the most appropriate next step in cardiac risk stratification prior to surgery?',
    options: [
      {
        text: 'Perform non-invasive pharmacological stress testing (dobutamine stress echocardiography or radionuclide myocardial perfusion imaging)',
        explanation: 'According to ACC/AHA perioperative guidelines, patients undergoing elevated-risk elective non-cardiac surgery (such as open vascular surgery) must be stratified based on clinical risk factors and functional capacity. This patient has multiple Revised Cardiac Risk Index (RCRI) risk factors: high-risk vascular surgery, history of ischemic heart disease, heart failure with reduced LVEF, insulin-treated diabetes, and pre-existing renal impairment (Cr > 2.0 mg/dL), yielding an RCRI score of 5 (class IV, >10% risk of major adverse cardiac events). When functional capacity is poor (< 4 METs) or unknown in a patient with elevated clinical risk, non-invasive stress testing (dobutamine echocardiography or vasodilator SPECT) is indicated if the results will impact surgical planning or decision-making.'
      },
      {
        text: 'Proceed directly with open aneurysm repair without further cardiac testing because he is taking a beta-blocker',
        explanation: 'Proceeding directly to major vascular surgery in a patient with 5 RCRI predictors, poor functional capacity (<4 METs), and heart failure without defining ischemic burden carries unacceptably high perioperative infarction and mortality risks.'
      },
      {
        text: 'Perform routine invasive coronary angiography with prophylactic revascularization of all non-culprit stenoses',
        explanation: 'Routine prophylactic coronary revascularization prior to non-cardiac surgery was proven ineffective by the CARP trial and does not improve perioperative survival compared to medical optimization.'
      },
      {
        text: 'Initiate high-dose intravenous metoprolol immediately to target a heart rate < 50/min on the morning of surgery',
        explanation: 'Aggressive acute beta-blocker loading immediately before surgery was proven harmful in the POISE trial, significantly increasing the incidence of fatal bradycardia, hypotension, and ischemic strokes.'
      },
      {
        text: 'Discontinue all cardiovascular medications 48 hours prior to the operation to prevent intraoperative hypotension',
        explanation: 'Discontinuing beta-blockers and statins abruptly causes rebound adrenergic surges, plaque rupture, and perioperative myocardial infarction; they must be continued uninterrupted.'
      }
    ]
  },
  {
    code: 'op-c-s3-0074',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'Behavioral Health',
    topic: 'Chronic Insomnia Disorder in Older Adults and Beers Criteria',
    subtopic: 'Cognitive Behavioral Therapy for Insomnia versus Sedative Hypnotics',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize chronic insomnia in older adults. First-line therapy for chronic insomnia is Cognitive Behavioral Therapy for Insomnia (CBT-I) (sleep restriction, stimulus control, sleep hygiene). Sedative-hypnotics (Z-drugs like zolpidem, benzodiazepines, and diphenhydramine) are strongly cautioned/avoided per Beers criteria due to high risks of delirium, daytime drowsiness, falls, fractures, and motor vehicle accidents.',
    citation: 'Qaseem A, et al. Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline From the American College of Physicians. Ann Intern Med. 2016;165(2):125-133. PMID: 27136449.',
    stem:
      'A 74-year-old woman presents to her primary care physician with a 7-month history of difficulty falling and staying asleep. She reports taking between 60 and 90 minutes to fall asleep each night and frequently awakens at 2:00 AM, unable to return to sleep for several hours. She spends up to 10 hours in bed each night watching television, reading, and worrying about her lack of sleep. During the day, she feels fatigued, takes two 60-minute naps, and lacks energy to socialize with friends. Medical history includes osteoarthritis of both knees managed with acetaminophen and osteopenia. Physical examination and neurological examination are normal. Laboratory testing, including TSH and basic metabolic panel, is normal. The patient specifically asks for a sleeping pill prescription, stating: "My neighbor takes zolpidem every night and says it works wonders; I want a prescription for that so I can finally get a full night of sleep." Which of the following is the most appropriate initial recommendation for this patient?',
    options: [
      {
        text: 'Initiate Cognitive Behavioral Therapy for Insomnia (CBT-I) incorporating stimulus control and sleep restriction',
        explanation: 'The American College of Physicians (ACP) and American Academy of Sleep Medicine (AASM) guidelines recommend Cognitive Behavioral Therapy for Insomnia (CBT-I) as the initial first-line treatment for chronic insomnia disorder in all adult patients. CBT-I encompasses stimulus control (leaving bed if awake for >20 minutes), sleep restriction (matching time in bed to actual sleep duration to rebuild homeostatic sleep pressure), sleep hygiene, and cognitive restructuring. CBT-I achieves durable efficacy superior to medications without adverse effects. Per the AGS Beers Criteria, non-benzodiazepine benzodiazepine-receptor agonists (Z-drugs like zolpidem) should be avoided in older adults due to high risks of delirium, falls, fractures, nighttime wandering, and motor vehicle accidents.'
      },
      {
        text: 'Prescribe oral zolpidem 10 mg at bedtime with instructions to limit treatment to 6 months',
        explanation: 'Zolpidem is strongly cautioned in older adults (Beers criteria) due to elevated risks of cognitive impairment, delirium, nocturnal falls, hip fractures, and complex sleep-related behaviors.'
      },
      {
        text: 'Prescribe oral temazepam 15 mg at bedtime for rapid hypnotic induction',
        explanation: 'Benzodiazepines cause marked motor impairment, rebound insomnia, tolerance, dependence, respiratory depression, and increased mortality in elderly populations.'
      },
      {
        text: 'Recommend over-the-counter diphenhydramine 50 mg nightly for sedative-antihistamine effects',
        explanation: 'First-generation antihistamines possess potent anticholinergic properties that provoke acute urinary retention, xerostomia, constipation, blurred vision, and acute delirium in geriatric patients.'
      },
      {
        text: 'Advise the patient to spend 11 hours in bed each night to maximize sleep opportunity',
        explanation: 'Excessive time in bed dilutes homeostatic sleep pressure, fragments sleep architecture, promotes anticipatory performance anxiety, and exacerbates chronic insomnia.'
      }
    ]
  },
  {
    code: 'op-c-s3-0075',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Physician Impairment and Patient Safety Intervention Duty',
    subtopic: 'Immediate Safety Protection and Mandatory Reporting Obligations',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute physician impairment due to substance use. Primary professional and ethical duty is to PROTECT PATIENT SAFETY by immediately intervening to prevent the impaired physician from participating in patient care. Following immediate safety intervention, report the situation through established institutional channels (department chair, physician health program, or medical executive committee). Confronting without ensuring patient protection or waiting until after surgery is an ethical failure.',
    references: [
      {
        label: 'American Medical Association. Code of Medical Ethics Opinion 9.3.2: Impaired Colleagues. AMA Principles of Medical Ethics. Chicago, IL: AMA; 2017.',
        url: 'https://code-medical-ethics.ama-assn.org/ethics-opinions/impaired-colleagues'
      }
    ],
    stem:
      'A third-year surgical resident is in the scrub room preparing for an emergent exploratory laparotomy on a patient with a gunshot wound to the abdomen. The attending surgeon arrives in the scrub room to begin washing his hands. The resident notes that the attending has a strong odor of alcohol on his breath, bloodshot eyes, slurred speech, and an unsteady gait. When the resident asks the attending how he is doing, the attending laughs inappropriately, fumbles with the sterile brush, and drops it on the floor, stating: "I was at a dinner party celebrating my anniversary, but don’t worry, I can do this laparotomy with my eyes closed." The circulator nurse and the anesthesiologist are currently putting the trauma patient to sleep in the operating room. Which of the following is the most appropriate immediate action for the surgical resident to take?',
    options: [
      {
        text: 'Immediately intervene to prevent the attending from entering the operating room and notify the surgical department chair or hospital leadership',
        explanation: 'The paramount ethical and professional duty of any healthcare provider is to protect patient safety. An impaired physician poses an immediate, critical hazard to patients. The resident must take immediate action to prevent the impaired surgeon from participating in the operation or having direct patient contact. This requires notifying the operating room nursing supervisor, anesthesiologist, or departmental leadership (department chair, chief medical officer) to halt the attending\'s clinical involvement and arrange for an alternate, qualified surgeon. Once patient safety is guaranteed, the resident has an ethical and legal obligation to report the impaired colleague to the hospital physician health program or state medical licensing board.'
      },
      {
        text: 'Allow the attending to perform the operation while closely supervising him and ready to assist if he makes a technical error',
        explanation: 'A resident cannot supervise an impaired attending surgeon during major trauma surgery; permitting an acutely intoxicated physician to operate places the patient at imminent risk of fatal surgical injury.'
      },
      {
        text: 'Wait until the operation is completed and document the attending’s intoxication in the hospital electronic safety reporting system',
        explanation: 'Reporting after the surgery is completed fails to protect the patient from active intraoperative harm and represents complicity in medical negligence.'
      },
      {
        text: 'Call the local police department to dispatch officers into the operating suite for a field sobriety test',
        explanation: 'Calling municipal police into an operating room disrupts emergent trauma care and violates hospital administrative protocols; hospital leadership and security are the internal mechanisms.'
      },
      {
        text: 'Remain silent to avoid retaliation and protect the attending surgeon’s medical career and reputation',
        explanation: 'Remaining silent when a colleague is visibly impaired violates the AMA Code of Medical Ethics and makes the provider legally liable for resulting patient injury.'
      }
    ]
  }
];
