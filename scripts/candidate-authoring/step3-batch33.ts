import { CandidateSpec } from './types';

export const step3Batch33: CandidateSpec[] = [
  {
    "code": "op-c-s3-0801",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Nonvalvular Atrial Fibrillation in Hemodialysis Anticoagulation Selection",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with end-stage kidney disease on maintenance hemodialysis for 4 years presents for a routine nephrology clinic visit. He has permanent nonvalvular atrial fibrillation with a CHA2DS2-VASc score of 5 (age 68 [1 point], hypertension [1 point], diabetes mellitus [1 point], prior ischemic stroke 2 years ago [2 points]). He has had no bleeding episodes. Blood pressure is 134/78 mm Hg, and pulse is 76/min irregularly irregular. Dry weight is 78 kg. Recent pre-dialysis serum creatinine is 8.4 mg/dL. He has been taking warfarin with erratic INR values ranging between 1.3 and 4.8 despite close clinic monitoring. After a comprehensive multidisciplinary discussion regarding the lack of definitive randomized clinical trial mortality data in dialysis-dependent atrial fibrillation, the patient strongly expresses his desire to continue stroke prevention therapy with an oral anticoagulant that avoids frequent venous punctures. Which of the following is the most appropriate oral anticoagulant regimen according to current pharmacokinetic and clinical evidence?",
    "choices": [
      [
        "Oral apixaban 5 mg twice daily (or 2.5 mg twice daily if age >= 80 or body weight <= 60 kg)",
        "Anticoagulation in end-stage kidney disease (ESRD) on maintenance hemodialysis represents a complex clinical dilemma. Warfarin has erratic pharmacokinetics in ESRD, increases vascular calcification (calciphylaxis), and fails to show consistent stroke reduction in observational studies. Dabigatran and rivaroxaban are largely eliminated by the kidneys (80% and 35%, respectively) and have prohibitive accumulation risks. Apixaban is primarily eliminated via non-renal pathways (fecal/biliary ~75%, renal ~25%). In patients on hemodialysis, standard apixaban dosing is 5 mg twice daily, but should be reduced to 2.5 mg twice daily if the patient meets two of the following: age >= 80 years or body weight <= 60 kg. Large retrospective cohort studies (e.g., USRDS data) and pharmacokinetic analyses demonstrated that apixaban was associated with lower bleeding risks and comparable stroke reduction relative to warfarin in hemodialysis patients."
      ],
      [
        "Oral dabigatran etexilate 150 mg twice daily with post-dialysis dosing",
        "Dabigatran is 80% renally cleared; severe accumulation in ESRD leads to fatal major hemorrhage, and it is contraindicated in hemodialysis."
      ],
      [
        "Oral rivaroxaban 20 mg once daily taken with the evening meal",
        "Rivaroxaban 20 mg once daily undergoes significant renal accumulation in dialysis patients and causes excessive gastrointestinal and intracranial bleeding."
      ],
      [
        "Dual antiplatelet therapy with oral aspirin 81 mg and clopidogrel 75 mg daily",
        "Dual antiplatelet therapy (DAPT) does not provide adequate thromboembolic stroke prophylaxis in atrial fibrillation and carries major bleeding rates similar to oral anticoagulants."
      ],
      [
        "Subcutaneous enoxaparin 1.5 mg/kg once daily on non-dialysis days",
        "Low-molecular-weight heparin accumulates predictably in renal failure, causing fatal retroperitoneal and intracranial hemorrhage unless anti-Xa levels are monitored continuously."
      ]
    ],
    "shortestValidSolution": "Dialysis + nonvalvular AF + erratic INR = apixaban 5 mg BID (or 2.5 mg if >=80yo or <=60kg) due to primarily non-renal clearance.",
    "necessaryInference": "Select apixaban over renally cleared DOACs or erratic warfarin for stroke prevention in hemodialysis.",
    "strongestDistractor": "Dual antiplatelet therapy with oral aspirin 81 mg and clopidogrel 75 mg daily",
    "distractorExclusion": "DAPT is inferior for cardioembolic stroke prevention in AF and causes bleeding equivalent to oral anticoagulation.",
    "citation": "Pokorney SD, Chertow GM, Al-Khalidi HR, et al. Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Multicenter Randomized Controlled Trial. Circulation. 2022;146(23):1735-1745. PMID: 36335914.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/cardiology item evaluating oral anticoagulation options in patients with atrial fibrillation on maintenance hemodialysis.",
      "distractorExclusionNotes": "Excluded dabigatran and rivaroxaban due to renal clearance, and DAPT due to poor stroke prevention in AF.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0802",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Direct Oral Anticoagulant Safety in Cirrhosis and Hepatic Impairment",
    "provisionalDifficulty": 5,
    "stem": "A 59-year-old woman with decompensated cirrhosis secondary to metabolic dysfunction-associated steatohepatitis (MASH) is diagnosed with new-onset nonvalvular atrial fibrillation. Her CHA2DS2-VASc score is 3 (age 59, female, hypertension, prior transient ischemic attack). On examination, she has mild scleral icterus and moderate abdominal distension with shifting dullness, but no asterixis or confusion. Laboratory studies reveal: total bilirubin 2.8 mg/dL, serum albumin 2.6 g/dL, INR 1.6, platelet count 78,000/mm3, and serum creatinine 0.8 mg/dL. Her Child-Turcotte-Pugh score is calculated as 8 (Class B). The medical team evaluates anticoagulation strategies to reduce cardioembolic stroke risk while minimizing hepatic toxicity and bleeding complications. Which of the following statements accurately reflects the safety profile and regulatory guidance for direct oral anticoagulants (DOACs) in this patient?",
    "choices": [
      [
        "Rivaroxaban is contraindicated in Child-Pugh Class B and C, whereas apixaban may be used with caution in Class B",
        "Direct oral anticoagulants (DOACs) undergo varying degrees of hepatic metabolism and clearance. All DOACs (apixaban, rivaroxaban, dabigatran, edoxaban) are safe and require no dose adjustment in mild hepatic impairment (Child-Pugh Class A). However, in moderate hepatic impairment (Child-Pugh Class B), rivaroxaban is CONTRAINDICATED (along with edoxaban) due to significantly increased drug exposure (up to 2.3-fold AUC increase) and reduced coagulation factor synthesis resulting in heightened bleeding risk. In contrast, apixaban and dabigatran do not show significant pharmacokinetic alterations in Child-Pugh Class B and may be used with caution. All DOACs are strictly contraindicated in severe hepatic impairment (Child-Pugh Class C) or cirrhosis with active coagulopathy."
      ],
      [
        "All direct oral anticoagulants are equally contraindicated in all stages of hepatic cirrhosis",
        "DOACs are approved and safe in Child-Pugh Class A cirrhosis, and apixaban/dabigatran can be used cautiously in Class B."
      ],
      [
        "Dabigatran is strictly contraindicated in Child-Pugh Class A due to direct hepatotoxicity",
        "Dabigatran is predominantly eliminated by the kidneys (80%) and is not hepatotoxic; it is safe in Child-Pugh Class A."
      ],
      [
        "Rivaroxaban is the preferred DOAC in Child-Pugh Class B cirrhosis due to minimal biliary excretion",
        "Rivaroxaban is specifically contraindicated in Child-Pugh Class B because hepatic impairment dramatically increases its systemic exposure."
      ],
      [
        "Warfarin is strictly contraindicated in all cirrhotic patients regardless of baseline INR",
        "Warfarin is not contraindicated, though monitoring is notoriously challenging because baseline INR is already elevated from impaired hepatic synthesis."
      ]
    ],
    "shortestValidSolution": "Child-Pugh B cirrhosis = rivaroxaban/edoxaban contraindicated; apixaban/dabigatran used with caution; all DOACs contraindicated in Class C.",
    "necessaryInference": "Identify specific DOAC contraindications in cirrhosis: rivaroxaban contraindicated in Child-Pugh B/C, apixaban permitted with caution in B.",
    "strongestDistractor": "All direct oral anticoagulants are equally contraindicated in all stages of hepatic cirrhosis",
    "distractorExclusion": "DOACs are widely used in Child-Pugh Class A and selected Class B patients, showing superior safety over warfarin in non-severe cirrhosis.",
    "citation": "Qamar AA, Vaduganathan M, Greenberger NJ, et al. Oral Anticoagulation in Patients With Liver Cirrhosis. J Am Coll Cardiol. 2018;71(19):2162-2175. PMID: 29747837.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 gastroenterology/pharmacology item on DOAC pharmacokinetics and contraindications across Child-Pugh cirrhosis classes.",
      "distractorExclusionNotes": "Excluded blanket contraindications and rivaroxaban preference because rivaroxaban is specifically contraindicated in Child-Pugh B.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0803",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Heart Failure With Preserved Ejection Fraction SGLT2 Inhibitor Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old woman presents to the cardiology clinic for evaluation of progressive exertional dyspnea and lower extremity edema over the past 4 months. She can now walk only half a block on level ground before stopping to rest (NYHA functional class III). Her medical history is notable for hypertension, obesity (BMI 34 kg/m2), and stage 3a chronic kidney disease (eGFR 52 mL/min/1.73 m2). She does not have diabetes mellitus. Current medications include lisinopril 20 mg daily, amlodipine 10 mg daily, and oral furosemide 40 mg daily. Blood pressure is 132/78 mm Hg, heart rate is 68/min, and oxygen saturation is 96% on ambient air. Physical examination reveals jugular venous distension to 9 cm H2O, bibasilar pulmonary crackles, and 2+ bilateral pitting pretibial edema. Transthoracic echocardiogram demonstrates a left ventricular ejection fraction of 58%, left ventricular hypertrophy, left atrial enlargement (volume index 42 mL/m2), and an E/e' ratio of 16, consistent with elevated left ventricular filling pressures. Serum NT-proBNP is 1,280 pg/mL. Which of the following medications has the strongest evidence to reduce the combined risk of cardiovascular death and hospitalization for heart failure in this patient?",
    "choices": [
      [
        "Oral empagliflozin (or dapagliflozin) 10 mg once daily",
        "This patient has heart failure with preserved ejection fraction (HFpEF, LVEF >= 50%) with persistent symptoms despite loop diuretic therapy. Historically, no disease-modifying therapies reduced mortality or major morbidity in HFpEF. However, major landmark trials (EMPEROR-Preserved with empagliflozin and DELIVER with dapagliflozin) demonstrated that sodium-glucose cotransporter 2 (SGLT2) inhibitors significantly reduce the composite primary endpoint of cardiovascular death and hospitalization for heart failure in patients with HFpEF, regardless of the presence or absence of type 2 diabetes mellitus. Current AHA/ACC/HFSA guidelines give SGLT2 inhibitors a Class 1 (strongest) recommendation for patients with HFpEF across the full spectrum of preserved ejection fractions."
      ],
      [
        "Oral sacubitril-valsartan 24/26 mg twice daily titrated to maximum dose",
        "Sacubitril-valsartan (PARAGON-HF trial) did not achieve statistically significant reduction in the primary composite endpoint in the overall HFpEF population (Class 2b recommendation, mostly beneficial in mildly reduced EF 41-49% and women)."
      ],
      [
        "Oral spironolactone 25 mg once daily with weekly potassium checks",
        "Spironolactone (TOPCAT trial) showed a Class 2b recommendation in HFpEF; it reduced hospitalizations in the Americas subgroup but missed overall primary endpoint significance."
      ],
      [
        "Oral digoxin 0.125 mg once daily targeting serum trough level 0.5-0.9 ng/mL",
        "Digoxin has no proven benefit on cardiovascular mortality or primary outcomes in HFpEF and carries increased toxicity risks in older females with renal insufficiency."
      ],
      [
        "Oral isosorbide mononitrate 30 mg once daily for preload reduction",
        "Long-acting nitrates (NEAT-HFpEF trial) worsened daily activity levels and failed to improve quality of life or exercise capacity in HFpEF."
      ]
    ],
    "shortestValidSolution": "HFpEF (EF 58%) + NYHA III dyspnea + elevated filling pressures = SGLT2 inhibitor (empagliflozin/dapagliflozin) is Class 1 guideline-directed therapy.",
    "necessaryInference": "Recognize SGLT2 inhibitors as the only Class 1 guideline-directed medical therapy that reduces cardiovascular death and hospitalizations in HFpEF.",
    "strongestDistractor": "Oral sacubitril-valsartan 24/26 mg twice daily titrated to maximum dose",
    "distractorExclusion": "Sacubitril-valsartan holds Class 2b recommendation in HFpEF; SGLT2 inhibitors hold the definitive Class 1 recommendation.",
    "citation": "Anker SD, Butler J, Filippatos G, et al. Empagliflozin in Heart Failure With a Preserved Ejection Fraction. N Engl J Med. 2021;385(16):1451-1461. PMID: 34449189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology item evaluating evidence-based medical therapy in heart failure with preserved ejection fraction (HFpEF).",
      "distractorExclusionNotes": "Excluded ARNI, spironolactone, and nitrates because SGLT2 inhibitors are the only Class 1 indicated disease-modifying agents in HFpEF.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0804",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Obesity-Related HFpEF Glucagon-Like Peptide-1 Receptor Agonist Benefits",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with obesity (BMI 38 kg/m2), type 2 diabetes mellitus (HbA1c 7.9%), and heart failure with preserved ejection fraction (LVEF 56%, NYHA functional class II-III) presents to the clinic. He is currently taking metformin 1,000 mg twice daily, empagliflozin 10 mg daily, valsartan 160 mg daily, and carvedilol 25 mg twice daily. Despite optimization of his cardiovascular medications, he remains significantly limited by exertional fatigue and shortness of breath when walking more than 100 meters. Kansas City Cardiomyopathy Questionnaire Clinical Summary Score (KCCQ-CSS) is 58 (indicating substantial symptom burden). Physical examination shows blood pressure 130/80 mm Hg, heart rate 68/min, and mild trace ankle edema. Serum creatinine is 1.1 mg/dL. Which of the following therapeutic additions has been shown in dedicated randomized clinical trials to produce substantial improvements in heart failure-related symptoms, physical limitations, and weight loss in obesity-related HFpEF?",
    "choices": [
      [
        "Subcutaneous semaglutide 2.4 mg once weekly",
        "Obesity is a major driver of systemic microvascular endothelial inflammation, epicardial adipose accumulation, and myocardial stiffness leading to the 'obesity phenotype' of HFpEF. Landmark randomized trials (STEP-HFpEF in patients without diabetes and STEP-HFpEF DM in patients with type 2 diabetes) demonstrated that once-weekly subcutaneous semaglutide 2.4 mg (a glucagon-like peptide-1 [GLP-1] receptor agonist) produced large, clinically meaningful reductions in heart failure-related symptoms and physical limitations (measured by a ~14-point improvement in KCCQ-CSS), increased 6-minute walk distance, and produced ~10% to 13% weight loss, alongside marked reductions in systemic inflammation (C-reactive protein) and NT-proBNP."
      ],
      [
        "Oral pioglitazone 30 mg once daily for insulin sensitization",
        "Thiazolidinediones (pioglitazone, rosiglitazone) stimulate renal sodium and fluid retention via PPAR-gamma stimulation, frequently precipitating acute heart failure decompensation, and are contraindicated in symptomatic heart failure."
      ],
      [
        "Oral phentermine-topiramate extended-release for appetite suppression",
        "Phentermine is a sympathomimetic amine that increases heart rate and blood pressure, potentially exacerbating myocardial ischemia and arrhythmias in heart failure."
      ],
      [
        "Subcutaneous liraglutide 0.6 mg daily targeting glycemic control alone",
        "Liraglutide failed to demonstrate clinical benefit in advanced heart failure trials (FIGHT trial) and low-dose glycemic dosing does not produce the substantial weight and symptomatic benefits seen with semaglutide 2.4 mg."
      ],
      [
        "Oral naltrexone-bupropion sustained-release for weight loss",
        "Bupropion carries noradrenergic activity that increases resting blood pressure and pulse, with no proven clinical benefit in obesity-related HFpEF."
      ]
    ],
    "shortestValidSolution": "Obese diabetic + HFpEF + persistent symptom burden = once-weekly semaglutide 2.4 mg improves HF symptoms and physical capacity.",
    "necessaryInference": "Apply recent trial evidence establishing GLP-1 receptor agonist (semaglutide 2.4 mg) efficacy in reducing symptom burden in obesity-related HFpEF.",
    "strongestDistractor": "Oral pioglitazone 30 mg once daily for insulin sensitization",
    "distractorExclusion": "Pioglitazone causes fluid retention and worsens heart failure decompensation; it is contraindicated in symptomatic HF.",
    "citation": "Kosiborod MN, Abildstrom SZ, Borlaug BA, et al. Semaglutide in Patients With Heart Failure With Preserved Ejection Fraction and Obesity. N Engl J Med. 2023;389(12):1069-1084. PMID: 37622681.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/endocrinology item on targeted medical therapy for the obesity phenotype of HFpEF with GLP-1 receptor agonists.",
      "distractorExclusionNotes": "Excluded pioglitazone due to heart failure exacerbation risk, and sympathomimetics due to cardiovascular stimulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0805",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Statin-Associated Muscle Symptoms Systematic Rechallenge and Non-Statin Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with a history of an acute anterior myocardial infarction 6 months ago treated with a drug-eluting stent presents for lipid management. At hospital discharge, he was prescribed atorvastatin 80 mg daily. Three weeks later, he developed bilateral aching and weakness in his thighs and upper arms that resolved within 10 days of discontinuing the medication. Rosuvastatin 20 mg daily was subsequently initiated, but similar proximal muscle soreness recurred after 2 weeks, again resolving upon drug cessation. He has no dark urine. Laboratory testing reveals: serum creatine kinase 142 U/L (normal < 200 U/L), serum creatinine 0.9 mg/dL, and TSH 2.1 mIU/L. Fasting lipid panel off therapy shows: total cholesterol 248 mg/dL, LDL-C 168 mg/dL, HDL-C 42 mg/dL, and triglycerides 190 mg/dL. He is anxious about restarting any statin. Which of the following is the most appropriate management strategy for his secondary cardiovascular prevention?",
    "choices": [
      [
        "Trial of a low-dose, alternate-day hydrophilic or lipophilic statin combined with oral ezetimibe",
        "Statin-associated muscle symptoms (SAMS) occur in 5% to 10% of patients, but true pharmacological intolerance to all statins is rare (<5%). Because statins reduce cardiovascular mortality in secondary prevention, abandoning statin therapy prematurely is associated with increased recurrent cardiovascular events. Guidelines recommend: (1) ruling out secondary causes (hypothyroidism, drug interactions, strenuous exercise), (2) temporary drug holiday (2-4 weeks) until symptoms resolve, and (3) systematic rechallenge using a different statin with distinct pharmacokinetics at a very low starting dose (e.g., rosuvastatin 5 mg twice weekly or atorvastatin 10 mg three times weekly). Combining a low-dose tolerated statin with oral ezetimibe (which reduces LDL-C by an additional 15-20% without myalgia) achieves substantial LDL-C lowering. If statins remain completely intolerable, bempedoic acid (an ACL inhibitor prodrug activated only in the liver, sparing skeletal muscle) or PCSK9 inhibitors are evidence-based non-statin options."
      ],
      [
        "Complete abandonment of all lipid-lowering pharmacotherapies and reliance on diet alone",
        "Dietary modifications alone reduce LDL-C by only 5% to 10% and do not provide the plaque stabilization and mortality benefits needed in secondary prevention."
      ],
      [
        "Oral gemfibrozil 600 mg twice daily as primary secondary prevention monotherapy",
        "Fibrates do not reliably reduce major adverse cardiovascular events in patients with established coronary artery disease and lack LDL-lowering efficacy."
      ],
      [
        "High-dose oral coenzyme Q10 (ubiquinone) monotherapy without prescription medications",
        "Coenzyme Q10 supplementation has failed in randomized controlled trials to prevent or alleviate statin-induced myalgias and provides no cardiovascular risk reduction."
      ],
      [
        "Immediate placement of a permanent transvenous LDL apheresis catheter",
        "LDL apheresis is an invasive, costly procedure reserved strictly for severe homozygous familial hypercholesterolemia refractory to multiple novel therapies."
      ]
    ],
    "shortestValidSolution": "Recurrent SAMS + normal CK + prior MI = trial low-dose/alternate-day statin + ezetimibe (or bempedoic acid/PCSK9i if intolerant).",
    "necessaryInference": "Apply clinical guidelines for managing statin-associated muscle symptoms: systematic low-dose rechallenge and combination non-statin therapy.",
    "strongestDistractor": "High-dose oral coenzyme Q10 (ubiquinone) monotherapy without prescription medications",
    "distractorExclusion": "Coenzyme Q10 lacks proven efficacy for statin myalgia in randomized trials; structured low-dose rechallenge with ezetimibe is required.",
    "citation": "Goldberg RB et al. The 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guidelines on the Management of Blood Cholesterol in Diabetes. Diabetes Care. PMID: 32669405.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/preventive medicine item on systematic stepwise management of statin-associated muscle symptoms.",
      "distractorExclusionNotes": "Excluded CoQ10 and complete therapy abandonment because low-dose rechallenge plus ezetimibe provides essential secondary prevention.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0806",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Glycemic Targets in Frail Older Adults Individualization to Prevent Hypoglycemia",
    "provisionalDifficulty": 4,
    "stem": "An 83-year-old woman is accompanied to the geriatrics clinic by her daughter. The patient has a 20-year history of type 2 diabetes mellitus, moderate vascular dementia, severe osteoarthritis, and stage 3b chronic kidney disease (eGFR 38 mL/min/1.73 m2). She requires assistance with all instrumental activities of daily living and partial assistance with bathing and dressing. Over the past 2 months, her daughter has found her confused and diaphoretic on three separate mornings, with fingerstick blood glucose levels in the 40 to 55 mg/dL range, which resolved after drinking orange juice. Current medications include glimepiride 4 mg daily, metformin 500 mg twice daily, and insulin glargine 22 units at bedtime. Blood pressure is 128/72 mm Hg, and BMI is 22 kg/m2. Her most recent HbA1c is 6.4%. Which of the following is the most appropriate management plan regarding her diabetes care?",
    "choices": [
      [
        "Discontinue glimepiride, de-escalate insulin glargine, and liberalize HbA1c target to < 8.0% to 8.5%",
        "In older adults with diabetes mellitus, clinical guidelines (American Diabetes Association and American Geriatrics Society) strongly emphasize individualizing glycemic goals based on functional status, multimorbidity, cognitive impairment, and life expectancy. For healthy older adults with few chronic conditions and intact cognition, an HbA1c < 7.0-7.5% is appropriate. However, for frail older adults with complex health status, multiple coexisting chronic illnesses, cognitive impairment (dementia), functional dependence, and high hypoglycemia risk, intensive glycemic control provides no microvascular or macrovascular benefit and dramatically increases the risk of severe, fatal hypoglycemia, falls, fractures, and cardiovascular events. The recommended HbA1c target for frail older adults is < 8.0% to 8.5%. Sulfonylureas (especially long-acting ones like glimepiride) should be discontinued immediately, insulin de-escalated, and medications with low hypoglycemia risk prioritized."
      ],
      [
        "Increase insulin glargine to 28 units and maintain strict HbA1c target below 6.5%",
        "Intensifying insulin in a demented, frail patient with recurrent morning neuroglycopenia is life-threatening and directly causes fatal hypoglycemic arrest."
      ],
      [
        "Add oral sitagliptin 100 mg daily while continuing glimepiride and insulin at current doses",
        "Adding another hypoglycemic agent without de-escalating the sulfonylurea or insulin perpetuates recurrent hypoglycemia."
      ],
      [
        "Switch glimepiride to oral glyburide 10 mg daily for improved nocturnal glycemic coverage",
        "Glyburide has active renally cleared metabolites that cause prolonged, severe, refractory hypoglycemia in older adults with CKD (Beers criteria high-risk drug)."
      ],
      [
        "Initiate continuous subcutaneous insulin pump therapy with real-time continuous glucose monitor",
        "Complex insulin pump technology requires intact cognitive and fine-motor skills; placing a pump in a demented, dependent patient creates immense safety hazards."
      ]
    ],
    "shortestValidSolution": "Frail 83yo + dementia + CKD + recurrent hypoglycemia + HbA1c 6.4% = stop glimepiride + relax HbA1c target to <8.0-8.5%.",
    "necessaryInference": "Apply geriatrics guidelines to de-prescribe high-risk sulfonylureas and relax HbA1c goals to 8.0-8.5% in frail, cognitively impaired elderly.",
    "strongestDistractor": "Switch glimepiride to oral glyburide 10 mg daily for improved nocturnal glycemic coverage",
    "distractorExclusion": "Glyburide is strictly contraindicated in the elderly (Beers criteria) due to prolonged hypoglycemia; de-escalation is required.",
    "citation": "American Diabetes Association. 13. Older Adults: Standards of Care in Diabetes-2023. Diabetes Care. 2023;46(Suppl 1):S216-S229. PMID: 36507633.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/endocrinology item on individualizing HbA1c targets and de-prescribing sulfonylureas in frail older adults.",
      "distractorExclusionNotes": "Excluded intensifying therapy and glyburide because hypoglycemia prevention requires de-escalation and liberalized HbA1c target (8.0-8.5%).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0807",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Beers Criteria Anticholinergic Burden and Cognitive Impairment in Elderly",
    "provisionalDifficulty": 4,
    "stem": "A 78-year-old woman is brought to the outpatient clinic by her son due to progressive memory loss, worsening confusion, and two recent falls in her home over the past 3 months. Her medical history includes urge urinary incontinence, chronic insomnia, and mild hypertension. A review of her medications reveals: hydrochlorothiazide 25 mg daily, oxybutynin 10 mg extended-release daily (prescribed 6 months ago for overactive bladder), and over-the-counter diphenhydramine 50 mg nightly (used for sleep for over 1 year). On mental status testing, her Montreal Cognitive Assessment (MoCA) score is 20/30, with prominent deficits in short-term recall and executive functioning. Physical examination reveals dry oral mucosa, sluggish pupillary accommodation, and resting heart rate of 88/min. Gait examination reveals mild unsteadiness on turns. Complete blood count, serum electrolytes, TSH, and vitamin B12 levels are normal. Which of the following is the most appropriate initial management step?",
    "choices": [
      [
        "Taper and discontinue oxybutynin and diphenhydramine, and reassess cognition in four weeks",
        "The American Geriatrics Society (AGS) Beers Criteria strongly recommend avoiding medications with potent anticholinergic properties in older adults. Cumulative anticholinergic burden (here, dual therapy with oxybutynin and diphenhydramine) frequently produces drug-induced cognitive impairment, delirium, sedation, visual blurring, dry mouth, urinary retention, constipation, and balance impairment leading to falls and hip fractures. The initial management of new or worsening cognitive decline in an older adult taking high-anticholinergic medications is to systematically taper and discontinue the offending agents and reassess cognitive and physical function after a washout period (typically 4-6 weeks) before diagnosing irreversible dementia. If urinary symptoms persist, non-pharmacologic bladder training or a beta-3 adrenergic agonist (mirabegron) can be utilized."
      ],
      [
        "Initiate oral donepezil 5 mg daily for presumed early Alzheimer disease",
        "Prescribing a cholinesterase inhibitor (donepezil) while the patient is actively taking two potent anticholinergic drugs creates a dangerous 'prescribing cascade' of opposing mechanisms."
      ],
      [
        "Switch diphenhydramine to oral zolpidem 10 mg nightly for sleep maintenance",
        "Zolpidem is a non-benzodiazepine Z-drug that is also on the Beers Criteria list of drugs to avoid due to high risks of delirium, falls, and fractures in older adults."
      ],
      [
        "Increase oxybutynin to 15 mg daily to prevent nocturnal urinary urgency and awakenings",
        "Increasing oxybutynin escalates the central anticholinergic toxicity, accelerating cognitive decline and precipitating acute delirium."
      ],
      [
        "Perform immediate 18F-fluorodeoxyglucose positron emission tomography (FDG-PET) brain scan",
        "Advanced metabolic neuroimaging is completely premature and uninterpretable until reversible drug-induced cognitive toxicity has been eliminated."
      ]
    ],
    "shortestValidSolution": "Elderly + cognitive decline + falls + oxybutynin + diphenhydramine = high anticholinergic burden -> deprescribe both anticholinergics.",
    "necessaryInference": "Apply Beers Criteria to identify cumulative anticholinergic burden causing reversible cognitive impairment and deprescribe before diagnosing dementia.",
    "strongestDistractor": "Initiate oral donepezil 5 mg daily for presumed early Alzheimer disease",
    "distractorExclusion": "Starting donepezil without stopping anticholinergics represents a harmful prescribing cascade; the anticholinergics must be removed first.",
    "citation": "By the 2019 American Geriatrics Society Beers Criteria(R) Update Expert Panel. American Geriatrics Society 2019 Updated Beers Criteria(R) for Potentially Inappropriate Medication Use in Older Adults. J Am Geriatr Soc. 2019;67(4):674-694. PMID: 30693946.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/psychiatry item testing Beers criteria, anticholinergic burden, and avoidance of prescribing cascades.",
      "distractorExclusionNotes": "Excluded donepezil, zolpidem, and PET imaging because eliminating the culprit anticholinergics is the essential first step.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0808",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension Mineralocorticoid Receptor Antagonist Step 4 Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents for a follow-up visit regarding persistent hypertension. Despite excellent adherence to lifestyle modifications and a three-drug regimen comprising lisinopril 40 mg once daily, amlodipine 10 mg once daily, and chlorthalidone 25 mg once daily at optimal doses for the past 6 months, his clinic blood pressures remain elevated at 154/96 mm Hg and 158/98 mm Hg. Home blood pressure logs confirm average readings of 152/94 mm Hg. He has no chest pain, headache, or visual disturbances. Physical examination is unremarkable with no abdominal bruits. Laboratory evaluation reveals: serum sodium 140 mEq/L, serum potassium 4.2 mEq/L, serum creatinine 1.0 mg/dL (eGFR 84 mL/min/1.73 m2), and fasting plasma glucose 98 mg/dL. Urine albumin-to-creatinine ratio is normal. Which of the following is the most appropriate next step in pharmacological management according to clinical guidelines?",
    "choices": [
      [
        "Add oral spironolactone 25 mg once daily as fourth-line therapy",
        "Resistant hypertension is defined as blood pressure that remains above goal despite concurrent use of three antihypertensive agents of different classes at optimal doses, one of which must be a diuretic (typically an ACE inhibitor/ARB, a dihydropyridine CCB, and a long-acting thiazide-like diuretic such as chlorthalidone). In the landmark PATHWAY-2 trial, spironolactone (a mineralocorticoid receptor antagonist) proved decisively superior to bisoprolol, doxazosin, and placebo as the fourth-line add-on agent for resistant hypertension. Its remarkable efficacy stems from reversing the occult sodium and fluid retention driven by low-renin, aldosterone-dependent volume expansion common in resistant hypertension. Spironolactone is recommended provided baseline serum potassium is < 4.5 mEq/L and eGFR is > 30 mL/min/1.73 m2, with close monitoring of potassium and renal function within 2 to 4 weeks."
      ],
      [
        "Add oral metoprolol succinate 50 mg once daily",
        "Beta-blockers were shown in PATHWAY-2 to be significantly inferior to spironolactone for lowering blood pressure in resistant hypertension without compelling cardiac indications."
      ],
      [
        "Add oral clonidine 0.1 mg three times daily",
        "Centrally acting alpha-2 agonists like clonidine have poor tolerability, cause severe sedation and dry mouth, and carry risks of rebound hypertensive crises with missed doses."
      ],
      [
        "Switch chlorthalidone to oral furosemide 20 mg once daily",
        "Loop diuretics have a shorter half-life than chlorthalidone and are inferior for blood pressure control unless significant renal impairment (eGFR < 30 mL/min) is present."
      ],
      [
        "Add oral hydralazine 25 mg three times daily",
        "Hydralazine is a direct vasodilator that triggers reflex tachycardia, fluid retention, and requires frequent dosing; it is reserved for refractory disease when spironolactone is contraindicated."
      ]
    ],
    "shortestValidSolution": "HTN on 3 drugs (ACEi + CCB + thiazide) = resistant hypertension -> add spironolactone 25 mg daily (PATHWAY-2).",
    "necessaryInference": "Identify resistant hypertension and select spironolactone as the guideline-recommended fourth-line agent based on PATHWAY-2 evidence.",
    "strongestDistractor": "Add oral metoprolol succinate 50 mg once daily",
    "distractorExclusion": "Beta-blockers are inferior to spironolactone in resistant hypertension in the absence of heart failure or ischemic heart disease.",
    "citation": "Williams B, MacDonald TM, Morant S, et al. Spironolactone Versus Placebo, Bisoprolol, and Doxazosin to Determine the Optimal Treatment for Drug-Resistant Hypertension (PATHWAY-2): A Randomised, Double-Blind, Crossover Trial. Lancet. 2015;386(10008):2059-2068. PMID: 26414968.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/hypertension item on selecting spironolactone as fourth-line add-on therapy for resistant hypertension.",
      "distractorExclusionNotes": "Excluded beta-blockers, clonidine, and hydralazine based on PATHWAY-2 trial proof of spironolactone's superiority.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0809",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Osteoporosis in Advanced Chronic Kidney Disease Denosumab Hypocalcemia Risk",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old woman with stage 4 chronic kidney disease (eGFR 22 mL/min/1.73 m2, baseline creatinine 2.6 mg/dL) secondary to diabetic nephropathy sustains a non-traumatic low-energy fragility fracture of the right femoral neck while stepping off a curb. Dual-energy x-ray absorptiometry (DEXA) reveals a T-score of -3.2 at the lumbar spine and -3.0 at the total hip. Her medical team evaluates anti-resorptive pharmacotherapies to prevent future fractures. Bisphosphonates are reviewed and withheld due to her renal impairment. The team selects denosumab 60 mg subcutaneously every 6 months. Laboratory testing before initiating therapy shows: serum calcium 8.9 mg/dL, serum phosphorus 4.1 mg/dL, intact PTH 185 pg/mL (target for stage 4 CKD ~70-110 pg/mL), 25-hydroxyvitamin D 22 ng/mL, and alkaline phosphatase 95 U/L. Which of the following is the most critical monitoring and preventive requirement associated with denosumab therapy in this patient?",
    "choices": [
      [
        "Aggressive daily calcium and active vitamin D supplementation with frequent serum calcium monitoring",
        "Managing osteoporosis in advanced CKD (stages 4-5, eGFR < 30 mL/min/1.73 m2) is clinically challenging. Bisphosphonates (alendronate, zoledronic acid) are renally eliminated and are strictly contraindicated when eGFR is < 30-35 mL/min due to risk of tubular nephrotoxicity and accumulation causing adynamic bone disease. Denosumab (a human monoclonal antibody targeting RANKL) is not cleared by the kidneys and can be used in advanced CKD without dose adjustment. However, denosumab profoundly halts osteoclastic bone resorption, precipitating life-threatening, refractory hypocalcemia in patients with CKD, who already suffer from impaired calcitriol synthesis and secondary hyperparathyroidism (hungry bone physiology). The FDA issued a boxed warning requiring pre-treatment normalization of vitamin D, daily oral calcium (1,000-1,200 mg) and active vitamin D (calcitriol), and frequent serum calcium checks (especially at days 7-14 post-injection)."
      ],
      [
        "No supplemental calcium should be prescribed to avoid metastatic vascular calcification",
        "Withholding calcium during denosumab therapy in advanced CKD directly precipitates life-threatening hypocalcemic tetany, seizures, and fatal cardiac arrhythmias."
      ],
      [
        "Monthly measurement of 24-hour urinary free cortisol and serum ACTH levels",
        "Adrenal hormones are unaffected by RANKL inhibition and have no clinical relevance to denosumab administration."
      ],
      [
        "Pre-treatment administration of intravenous zoledronic acid to prime bone remodeling",
        "Zoledronic acid is explicitly contraindicated in stage 4 CKD (eGFR 22 mL/min) and causes acute renal failure."
      ],
      [
        "Discontinuation of all vitamin D formulations to prevent hyperphosphatemia",
        "Severe vitamin D deficiency exacerbates denosumab-induced severe hypocalcemia; repletion with cholecalciferol and calcitriol is mandatory."
      ]
    ],
    "shortestValidSolution": "Stage 4 CKD (eGFR <30) + osteoporosis = denosumab is non-renally cleared, but requires calcium/calcitriol to prevent severe hypocalcemia.",
    "necessaryInference": "Recognize that denosumab is safe in advanced CKD where bisphosphonates are contraindicated, but requires intense calcium/vitamin D management to prevent severe hypocalcemia.",
    "strongestDistractor": "No supplemental calcium should be prescribed to avoid metastatic vascular calcification",
    "distractorExclusion": "While vascular calcification is a CKD concern, failing to supplement calcium during denosumab therapy causes fatal acute hypocalcemia.",
    "citation": "Bird ST, Gelperin K, Yermilov I, et al. Severe Hypocalcemia With Denosumab Among Older Female Dialysis-Dependent Patients. JAMA. 2024;331(9):749-757. PMID: 38241060.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/endocrinology item on denosumab safety, FDA boxed warning, and severe hypocalcemia risk in stage 4-5 CKD.",
      "distractorExclusionNotes": "Excluded withholding calcium and zoledronic acid because bisphosphonates cause acute tubular necrosis and denosumab requires prophylactic calcium repletion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0810",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Acute Gout Flare in Severe CKD and Heart Failure Corticosteroid Selection",
    "provisionalDifficulty": 4,
    "stem": "A 69-year-old man presents with acute, agonizing pain, swelling, and redness in his right first metatarsophalangeal joint that awakened him from sleep 12 hours ago. He cannot bear weight or wear a sock. He has a history of stage 4 chronic kidney disease (baseline eGFR 24 mL/min/1.73 m2, baseline serum creatinine 2.8 mg/dL) and ischemic cardiomyopathy with reduced ejection fraction (LVEF 32%, NYHA functional class II) on lisinopril, carvedilol, and furosemide. On examination, the right first MTP joint is warm, exquisitely erythematous, and tense. Arthrocentesis reveals needle-shaped, negatively birefringent monosodium urate crystals under polarized light microscopy, confirming acute gouty arthritis. Vital signs show blood pressure 138/84 mm Hg, and afebrile. Which of the following is the most appropriate first-line therapy for this acute flare?",
    "choices": [
      [
        "Oral prednisone (or intra-articular triamcinolone injection)",
        "Managing acute gout flares in patients with severe multimorbidity requires careful avoidance of drug toxicities. The three first-line classes for acute gout are NSAIDs, colchicine, and systemic/intra-articular corticosteroids. In this patient with stage 4 CKD (eGFR 24 mL/min) and heart failure: (1) NSAIDs (e.g., indomethacin, naproxen) are STRICTLY CONTRAINDICATED because they inhibit renal vasodilatory prostaglandins, precipitating acute tubular necrosis, severe worsening of kidney failure, and fluid retention worsening heart failure; (2) Colchicine is CONTRAINDICATED in severe renal impairment (eGFR < 30 mL/min) combined with acute flares because impaired clearance causes life-threatening neuromyopathy, bone marrow suppression, and fatal toxicity; (3) Corticosteroids (short-course oral prednisone 30-35 mg daily for 5 days or intra-articular injection) are the safest and preferred first-line therapy."
      ],
      [
        "High-dose oral indomethacin 50 mg three times daily for five days",
        "NSAIDs cause severe acute renal failure, hyperkalemia, and fluid retention leading to acute heart failure decompensation in stage 4 CKD."
      ],
      [
        "Oral colchicine 1.2 mg immediately followed by 0.6 mg one hour later",
        "Colchicine is contraindicated in patients with severe renal impairment (eGFR < 30 mL/min) due to catastrophic accumulation and neuromyopathy/death."
      ],
      [
        "Immediate initiation of oral allopurinol 300 mg daily with no anti-inflammatory agent",
        "Starting allopurinol during an acute flare without anti-inflammatory coverage abruptly shifts urate crystals, prolonging and intensifying the attack."
      ],
      [
        "Intravenous recombinant pegloticase infusion as emergency monotherapy",
        "Pegloticase is a chronic refractory urate-lowering therapy, not an acute anti-inflammatory agent for terminating an acute gout flare."
      ]
    ],
    "shortestValidSolution": "Acute gout + stage 4 CKD (eGFR <30) + heart failure = steroids (oral prednisone or intra-articular) is safest (avoid NSAIDs and colchicine).",
    "necessaryInference": "Recognize absolute contraindications to NSAIDs and colchicine in severe CKD/heart failure and select corticosteroid therapy for acute gout.",
    "strongestDistractor": "Oral colchicine 1.2 mg immediately followed by 0.6 mg one hour later",
    "distractorExclusion": "Colchicine causes fatal neuromuscular and marrow toxicity when cleared poorly in eGFR <30 mL/min; corticosteroids are the drug of choice.",
    "citation": "Singh JA et al. Patient Perspectives on Gout and Gout Treatments: A Patient Panel Discussion That Informed the 2020 American College of Rheumatology Treatment Guideline. ACR Open Rheumatol. PMID: 33222416.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology/nephrology item evaluating drug safety in acute gout flares with severe renal and cardiac comorbidity.",
      "distractorExclusionNotes": "Excluded NSAIDs (worsens CKD/HF) and colchicine (toxicity in eGFR <30); corticosteroids are the definitive safe therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0811",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Asymptomatic Carotid Stenosis Intensive Medical Therapy Versus Stenting",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man presents for a routine physical examination. He feels well and denies transient visual loss, weakness, numbness, speech difficulties, or dizziness. His medical history includes well-controlled hypertension and a 25 pack-year cigarette smoking history (quit 5 years ago). Physical examination reveals a right-sided mid-cervical carotid bruit without neurological deficits. Carotid duplex ultrasonography reveals 70% to 79% diameter stenosis of the right internal carotid artery and 30% stenosis of the left internal carotid artery. Confirmatory computed tomographic angiography (CTA) confirms a 75% non-calcified atherosclerotic stenosis of the proximal right internal carotid artery with no intracranial aneurysms. Blood pressure is 126/74 mm Hg, and heart rate is 68/min. Fasting LDL-C is 122 mg/dL. He asks whether he should undergo urgent carotid endarterectomy or stenting to prevent a catastrophic stroke. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Intensive medical therapy with high-intensity statin, antiplatelet, and blood pressure control",
        "The management of asymptomatic severe carotid artery stenosis (70% to 99% stenosis in a patient with no focal neurologic symptoms in the past 6 months) has evolved dramatically. Historical surgical trials from the 1990s (ACAS, ACST) demonstrated a small absolute risk reduction in stroke with carotid endarterectomy (CEA) compared to medical therapy of that era. However, with contemporary Intensive Medical Therapy (high-intensity statin targeting LDL-C < 70 mg/dL, antiplatelet therapy with aspirin, strict blood pressure control < 130/80 mm Hg, and smoking cessation), the annual risk of ipsilateral stroke with modern medical therapy alone has dropped to < 0.5% to 1.0% per year. Revascularization (CEA or carotid artery stenting [CAS]) is reserved only for highly selected asymptomatic patients with high-risk plaque features (e.g., microemboli on TCD, silent infarction on MRI) who have low perioperative risk (<3%) and a life expectancy > 5 years."
      ],
      [
        "Emergent carotid artery stenting with distal embolic protection within 48 hours",
        "Carotid stenting carries higher periprocedural stroke risks than medical therapy or CEA and is never an emergent procedure in an asymptomatic patient."
      ],
      [
        "Immediate carotid endarterectomy regardless of perioperative surgical complication risk",
        "Routine mandatory surgery for all asymptomatic 70% stenosis is outdated; modern medical therapy provides equivalent or superior stroke protection."
      ],
      [
        "Full therapeutic anticoagulation with oral apixaban 5 mg twice daily",
        "Anticoagulation is indicated for cardioembolic stroke risk (e.g., atrial fibrillation), not for non-cardiogenic large-artery atherosclerotic stenosis."
      ],
      [
        "Reassurance with repeat duplex ultrasound in five years without changing medications",
        "Failing to intensify medical therapy (adding high-intensity statin and antiplatelet) leaves the patient at high risk for progressive atherosclerosis."
      ]
    ],
    "shortestValidSolution": "Asymptomatic 75% carotid stenosis = intensive medical therapy (high-intensity statin + aspirin + BP control) first-line over routine surgery.",
    "necessaryInference": "Recognize that contemporary intensive medical therapy is first-line for asymptomatic carotid stenosis and limits annual stroke risk below surgical thresholds.",
    "strongestDistractor": "Immediate carotid endarterectomy regardless of perioperative surgical complication risk",
    "distractorExclusion": "Carotid endarterectomy is no longer automatic for asymptomatic stenosis; modern medical therapy is non-inferior with lower upfront procedural stroke risk.",
    "citation": "Naylor AR, Ricco JB, de Borst GJ, et al. Editor's Choice - Management of Atherosclerotic Carotid and Vertebral Artery Disease: 2017 Clinical Practice Guidelines of the European Society for Vascular Surgery (ESVS). Eur J Vasc Endovasc Surg. 2018;55(1):3-81. PMID: 28851594.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 vascular neurology item contrasting contemporary intensive medical therapy against routine revascularization in asymptomatic carotid stenosis.",
      "distractorExclusionNotes": "Excluded immediate surgery and stenting because modern medical therapy achieves <1% annual stroke rate without periprocedural stroke morbidity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0812",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Diabetic Kidney Disease Nonsteroidal Mineralocorticoid Receptor Antagonist",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with a 14-year history of type 2 diabetes mellitus and stage 3a chronic kidney disease presents for follow-up. Despite treatment with maximally tolerated lisinopril 40 mg daily, empagliflozin 10 mg daily, and atorvastatin 40 mg daily for the past 12 months, persistent albuminuria is documented. Laboratory testing shows: estimated GFR 44 mL/min/1.73 m2 (stable over 1 year), urine albumin-to-creatinine ratio (UACR) 480 mg/g (normal < 30 mg/g), serum potassium 4.3 mEq/L, and HbA1c 7.4%. Blood pressure is 128/76 mm Hg. He has no peripheral edema and takes no NSAIDs. Which of the following therapeutic additions has been demonstrated in major randomized trials to significantly reduce the risk of chronic kidney disease progression and cardiovascular events in this patient?",
    "choices": [
      [
        "Oral finerenone 20 mg once daily with serial serum potassium monitoring",
        "Diabetic kidney disease (DKD) progression is driven by hemodynamics, metabolism, and chronic inflammation/fibrosis mediated by overactivation of the mineralocorticoid receptor (MR). In patients with type 2 diabetes and chronic kidney disease with persistent albuminuria (UACR >= 30 mg/g) despite maximally tolerated ACE inhibitor or ARB and an SGLT2 inhibitor, the nonsteroidal selective mineralocorticoid receptor antagonist finerenone is indicated. The FIDELIO-DKD and FIGARO-DKD trials (and pooled FIDELITY analysis) demonstrated that finerenone significantly slowed CKD progression (reduction in eGFR decline, end-stage kidney disease, or renal death) and reduced major adverse cardiovascular events (cardiovascular death, non-fatal MI, HF hospitalization). Because finerenone blocks MR receptors, serum potassium must be monitored (initiation requires K+ <= 4.8 mEq/L)."
      ],
      [
        "Dual renin-angiotensin blockade by adding oral losartan 100 mg daily to lisinopril",
        "Combining an ACE inhibitor with an ARB (ONTARGET and VA NEPHRON-D trials) causes excessive hyperkalemia and acute kidney injury without slowing CKD progression."
      ],
      [
        "Add oral spironolactone 50 mg daily without routine potassium monitoring",
        "Steroidal MRAs (spironolactone) have a much higher affinity for androgen/progesterone receptors causing gynecomastia and carry a significantly higher hyperkalemia risk than finerenone."
      ],
      [
        "Direct renin inhibition by adding oral aliskiren 150 mg daily",
        "Combining aliskiren with ACE inhibitors in diabetic nephropathy (ALTITUDE trial) caused severe hypotension, hyperkalemia, and increased stroke and death."
      ],
      [
        "Discontinuation of empagliflozin due to estimated GFR below 45 mL/min/1.73 m2",
        "SGLT2 inhibitors provide proven cardiorenal protection and are approved down to eGFR 20 mL/min/1.73 m2; discontinuing empagliflozin is inappropriate."
      ]
    ],
    "shortestValidSolution": "Diabetic CKD + albuminuria on ACEi + SGLT2i = add nonsteroidal MRA finerenone to reduce renal progression and CV events.",
    "necessaryInference": "Identify finerenone as the evidence-based nonsteroidal MRA that reduces CKD progression and cardiovascular events in diabetic nephropathy.",
    "strongestDistractor": "Dual renin-angiotensin blockade by adding oral losartan 100 mg daily to lisinopril",
    "distractorExclusion": "Dual ACEi + ARB blockade is strictly contraindicated due to acute renal failure and severe hyperkalemia without clinical benefit.",
    "citation": "Mentz RJ et al. Efficacy and safety of finerenone in patients with chronic kidney disease and type 2 diabetes by diuretic use: A FIDELITY analysis. Eur J Heart Fail. PMID: 39823276.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/endocrinology item on modern guideline-directed medical therapy for diabetic kidney disease with finerenone.",
      "distractorExclusionNotes": "Excluded dual ACEi/ARB and aliskiren due to trial-proven nephrotoxicity and hyperkalemia; finerenone is the approved add-on.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0813",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Refractory Chronic Stable Angina Late Inward Sodium Current Inhibition",
    "provisionalDifficulty": 4,
    "stem": "A 65-year-old man with known multivessel coronary artery disease not amenable to further percutaneous or surgical revascularization presents for evaluation of persistent exertional angina. He experiences substernal chest tightness after walking one block or climbing a flight of stairs that resolves within 5 minutes of rest (CCS Class III). Current medical therapy includes aspirin 81 mg daily, atorvastatin 80 mg daily, metoprolol succinate 100 mg daily, and amlodipine 10 mg daily. On examination, blood pressure is 108/68 mm Hg, and resting heart rate is 54/min regular. Echocardiogram demonstrates a preserved LVEF of 55% without resting wall motion abnormalities. Baseline ECG demonstrates normal sinus rhythm with resting sinus bradycardia and a corrected QT (QTc) interval of 420 ms. Increasing his beta-blocker or adding a nondihydropyridine calcium channel blocker is precluded by his resting bradycardia and borderline blood pressure. Which of the following antianginal agents is most appropriate to add to his current medical regimen?",
    "choices": [
      [
        "Oral ranolazine 500 mg twice daily titrated to 1,000 mg twice daily",
        "Ranolazine is an antianginal agent that selectively inhibits the late inward sodium current (late INa) in ischemic cardiomyocytes. In ischemic myocardium, excessive sodium influx via the late sodium channel leads to intracellular sodium accumulation, which in turn drives reverse sodium-calcium exchange (NCX), causing intracellular calcium overload. Calcium overload increases left ventricular diastolic wall tension, exacerbates microvascular compression, and increases myocardial oxygen consumption. By inhibiting late INa, ranolazine prevents intracellular calcium overload and improves diastolic myocardial perfusion without causing clinically significant reductions in heart rate or blood pressure. This unique hemodynamic neutrality makes ranolazine the ideal add-on antianginal for patients with refractory chronic stable angina who are limited by baseline bradycardia (HR < 60/min) or low-normal blood pressure."
      ],
      [
        "Oral diltiazem extended-release 180 mg once daily added to metoprolol",
        "Combining diltiazem with a beta-blocker in a patient with baseline resting sinus bradycardia (54/min) risks severe sinus arrest, high-degree AV block, and cardiogenic shock."
      ],
      [
        "Oral isosorbide dinitrate 40 mg three times daily without nitrate-free interval",
        "Continuous round-the-clock nitrate therapy rapidly induces complete nitrate tolerance (tachyphylaxis) and worsens hypotension in a patient with BP 108/68 mm Hg."
      ],
      [
        "Oral ivabradine 5 mg twice daily with meals",
        "Ivabradine selectively inhibits the hyperpolarization-activated cyclic nucleotide-gated (HCN) If channel in the sinus node; it is indicated only when resting heart rate is >= 70/min and worsens bradycardia."
      ],
      [
        "Oral sildenafil 50 mg twice daily for coronary vasodilation",
        "Phosphodiesterase-5 inhibitors are approved for pulmonary hypertension and erectile dysfunction; they do not improve exertional angina and cause systemic hypotension."
      ]
    ],
    "shortestValidSolution": "Refractory angina + bradycardia (HR 54) + low BP (108/68) = ranolazine (inhibits late Na+ current without affecting HR or BP).",
    "necessaryInference": "Select ranolazine for chronic stable angina refractory to beta-blockers/CCBs when hemodynamics (bradycardia/low BP) preclude other agents.",
    "strongestDistractor": "Oral ivabradine 5 mg twice daily with meals",
    "distractorExclusion": "Ivabradine lowers heart rate and requires baseline HR >= 70/min; ranolazine is hemodynamically neutral.",
    "citation": "Banerjee K et al. Role of Ranolazine in cardiovascular disease and diabetes: Exploring beyond angina. Int J Cardiol. PMID: 27838121.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology pharmacology item evaluating antianginal selection when limited by baseline bradycardia and borderline blood pressure.",
      "distractorExclusionNotes": "Excluded diltiazem and ivabradine because both worsen bradycardia; ranolazine provides anti-ischemic relief without hemodynamic slowing.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0814",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Aldosteronism Screening Aldosterone to Renin Ratio Interpretation",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old man presents for evaluation of hypertension that has been difficult to control. Over the past 2 years, his blood pressure has remained between 152/96 mm Hg and 164/102 mm Hg despite adherence to amlodipine 10 mg daily and valsartan 160 mg daily. Routine laboratory testing reveals: serum sodium 143 mEq/L, serum potassium 3.1 mEq/L (normal 3.5-5.0 mEq/L), serum bicarbonate 30 mEq/L, and serum creatinine 0.9 mg/dL. He takes no diuretics or herbal supplements. The physician suspects primary aldosteronism. Which of the following preparatory steps and screening results is most appropriate to confirm a positive screening test for primary aldosteronism?",
    "choices": [
      [
        "Replete serum potassium, discontinue interfering medications, and document ARR >= 20-30 with PAC > 15 ng/dL",
        "Primary aldosteronism (PA) is the most common cause of secondary hypertension (~5-10% of all hypertensive patients and ~20% of resistant hypertension). Screening is indicated for hypertension with hypokalemia, resistant hypertension, adrenal incidentaloma, or young-onset hypertension. The initial screening test is the morning Plasma Aldosterone Concentration (PAC) to Plasma Renin Activity (PRA) ratio (ARR). Crucial preparatory steps: (1) Serum potassium must be fully normalized prior to testing because hypokalemia directly suppresses aldosterone synthesis from the adrenal zona glomerulosa, causing false-negative screens; (2) Mineralocorticoid receptor antagonists (spironolactone, eplerenone) must be stopped for 4-6 weeks; and (3) Antihypertensives that interfere with renin (e.g., ACEi, ARBs, beta-blockers) should ideally be switched to non-interfering agents like verapamil or doxazosin for 2-4 weeks. A positive screen requires an elevated ARR (typically >= 20 to 30 ng/dL per ng/mL/h) in conjunction with an elevated PAC (> 15 ng/dL)."
      ],
      [
        "Measure 24-hour urinary free cortisol excretion following overnight low-dose dexamethasone",
        "Dexamethasone suppression tests evaluate Cushing syndrome (hypercortisolemia), not primary mineralocorticoid hypersecretion."
      ],
      [
        "Perform testing immediately during active severe hypokalemia to maximize aldosterone secretion",
        "Hypokalemia directly suppresses aldosterone release by the adrenal cortex, producing a falsely low aldosterone level and false-negative screening."
      ],
      [
        "Order emergent computed tomography of the adrenal glands prior to biochemical screening",
        "Adrenal CT imaging is strictly premature before biochemical confirmation; non-functioning benign adrenal adenomas are common and mislead surgical management."
      ],
      [
        "Initiate high-dose oral spironolactone 100 mg daily for two weeks immediately before blood draw",
        "Spironolactone blocks the mineralocorticoid receptor, inducing massive reactive increases in renin and aldosterone that invalidate the ARR."
      ]
    ],
    "shortestValidSolution": "Suspected primary aldosteronism = replete K+ first, stop MRAs/interfering drugs, screen with ARR >=20-30 and PAC >15.",
    "necessaryInference": "Apply preparatory rules for primary aldosteronism screening: normalize potassium first and calculate ARR with elevated PAC.",
    "strongestDistractor": "Order emergent computed tomography of the adrenal glands prior to biochemical screening",
    "distractorExclusion": "Imaging prior to biochemical confirmation is inappropriate because incidentalomas are prevalent and cause erroneous adnexal surgeries.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/hypertension item on screening methodology and physiological confounders in primary aldosteronism.",
      "distractorExclusionNotes": "Excluded pre-screening CT and testing during hypokalemia because potassium repletion and biochemical ARR must precede imaging.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0815",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Subclinical Hypothyroidism in Asymptomatic Older Adults Watchful Waiting",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents for a routine annual health evaluation. She feels completely well, has abundant energy, exercises three times weekly, and denies fatigue, cold intolerance, weight changes, constipation, or cognitive difficulties. She has well-controlled hypertension on amlodipine 5 mg daily. Physical examination reveals an active, alert woman; thyroid gland is normal in size without palpable nodules or tenderness. Vital signs show blood pressure 124/76 mm Hg, and pulse 68/min regular. Routine blood testing reveals: serum TSH 6.8 mIU/L (reference range 0.4-4.0 mIU/L) and free thyroxine (free T4) 1.2 ng/dL (reference range 0.8-1.8 ng/dL). Serum thyroid peroxidase (TPO) antibodies are negative. Baseline ECG shows normal sinus rhythm. The patient asks if she requires thyroid hormone replacement pills. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Watchful waiting and repeat serum TSH and free T4 in 3 to 6 months without levothyroxine",
        "Subclinical hypothyroidism is defined biochemically as an elevated serum TSH with a normal free T4. In older adults (>65 to 70 years of age) with mildly elevated TSH (< 10 mIU/L) who are asymptomatic and lack anti-TPO antibodies or goiter, routine treatment with levothyroxine is NOT recommended. Landmark randomized trials (e.g., the TRUST trial) demonstrated that levothyroxine treatment in older adults with subclinical hypothyroidism provided no improvement in hypothyroid symptoms, tiredness, cognitive function, or quality of life. Furthermore, overtreating older adults carries significant risks of drug-induced subclinical hyperthyroidism, precipitating atrial fibrillation and accelerating osteoporotic bone loss. In over 50% of older individuals, mild TSH elevations normalize spontaneously on repeat testing. The standard of care is watchful waiting with repeat TSH and free T4 in 3 to 6 months."
      ],
      [
        "Initiate oral levothyroxine 50 mcg once daily to suppress TSH below 2.0 mIU/L",
        "Levothyroxine provides no symptomatic or cardiovascular benefit in older adults with TSH < 10 mIU/L and increases risks of atrial fibrillation and fractures."
      ],
      [
        "Initiate oral desiccated thyroid extract (Armour Thyroid) 30 mg once daily",
        "Desiccated thyroid extract contains unpredictable T3/T4 ratios that cause supraphysiological T3 spikes, carrying high cardiac risks in older patients."
      ],
      [
        "Perform fine-needle aspiration biopsy of the bilateral thyroid lobes",
        "FNA biopsy is indicated for suspicious thyroid nodules identified on ultrasound, not for a normal, non-nodular thyroid gland with mild TSH elevation."
      ],
      [
        "Order emergent 24-hour radioactive iodine uptake and thyroid scan",
        "Radioactive iodine scans are indicated for thyrotoxicosis and hyperthyroidism workup, not for subclinical hypothyroidism."
      ]
    ],
    "shortestValidSolution": "74yo asymptomatic + TSH 6.8 + normal free T4 = subclinical hypothyroidism in elderly -> watchful waiting (TRUST trial: no benefit from levothyroxine).",
    "necessaryInference": "Apply TRUST trial evidence showing lack of benefit and potential harm from treating mild subclinical hypothyroidism (TSH <10) in older adults.",
    "strongestDistractor": "Initiate oral levothyroxine 50 mcg once daily to suppress TSH below 2.0 mIU/L",
    "distractorExclusion": "Levothyroxine does not improve symptoms or cognition in elderly with TSH <10 mIU/L and increases atrial fibrillation/fracture risks.",
    "citation": "van der Spoel E et al. Incidence and Determinants of Spontaneous Normalization of Subclinical Hypothyroidism in Older Adults. J Clin Endocrinol Metab. PMID: 37862463.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/geriatrics item evaluating management thresholds for subclinical hypothyroidism based on the TRUST trial.",
      "distractorExclusionNotes": "Excluded levothyroxine and desiccated thyroid because treating TSH <10 in asymptomatic older adults provides no clinical benefit and causes harm.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0816",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Neurogenic Orthostatic Hypotension Nonpharmacologic and Midodrine Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man with a 5-year history of Parkinson disease presents with recurrent lightheadedness, blurred vision, and 'coat-hanger' neck aching that occurs exclusively within 1 to 2 minutes of standing up from a chair or bed. He has had two syncopal episodes upon rising in the morning. His Parkinson symptoms are managed on carbidopa-levodopa 25/100 mg three times daily. On examination, supine blood pressure after 5 minutes of rest is 144/82 mm Hg with a heart rate of 68/min. Upon standing for 3 minutes, his blood pressure drops to 96/54 mm Hg (a drop of 48/28 mm Hg), while his heart rate increases only minimally to 72/min (an increase of 4/min, indicating blunted baroreceptor-mediated cardioacceleration). Complete blood count, serum electrolytes, and morning cortisol are normal. Transthoracic echocardiogram is normal. Which of the following is the most appropriate initial pharmacological agent if nonpharmacological measures (hydration, abdominal binders, compression stockings) provide inadequate symptom relief?",
    "choices": [
      [
        "Oral midodrine hydrochloride (or droxidopa) administered during daytime upright hours",
        "This patient exhibits severe Neurogenic Orthostatic Hypotension (nOH), defined as a sustained reduction in systolic BP >= 20 mm Hg or diastolic BP >= 10 mm Hg within 3 minutes of standing, caused by autonomic failure (degenerative synucleinopathies like Parkinson disease, multiple system atrophy, or pure autonomic failure). The hallmark of neurogenic etiology is the lack of compensatory reflex tachycardia (blunted delta HR < 10-15/min) due to postganglionic sympathetic noradrenergic denervation. After nonpharmacological measures (high-waist compression stockings, abdominal binders, increased dietary salt and fluid intake, physical counterpressure maneuvers), first-line pharmacological therapy is midodrine (a selective alpha-1 adrenergic receptor agonist prodrug that increases arteriolar and venous tone) or droxidopa (a synthetic norepinephrine precursor). Dosing must be restricted to daytime upright hours (e.g., breakfast, lunch, mid-afternoon) to avoid severe supine hypertension."
      ],
      [
        "Oral clonidine 0.1 mg twice daily administered before standing",
        "Clonidine is a central alpha-2 agonist that reduces sympathetic outflow, worsening orthostatic hypotension and precipitating immediate syncope."
      ],
      [
        "High-dose oral furosemide 40 mg twice daily to mobilize extracellular volume",
        "Diuretics exacerbate intravascular volume depletion, causing catastrophic orthostatic collapse."
      ],
      [
        "Oral metoprolol tartrate 50 mg twice daily to blunt post-standing tachycardia",
        "The patient already has inadequate compensatory tachycardia (delta HR only 4/min); beta-blockers further impair cardiac output upon standing."
      ],
      [
        "Oral sildenafil 50 mg taken thirty minutes prior to morning ambulation",
        "Phosphodiesterase-5 inhibitors cause systemic vasodilation and profound orthostatic pooling, worsening syncopal falls."
      ]
    ],
    "shortestValidSolution": "Parkinson + orthostatic drop without compensatory tachycardia = neurogenic orthostatic hypotension -> daytime midodrine or droxidopa.",
    "necessaryInference": "Diagnose neurogenic orthostatic hypotension (blunted heart rate response) and select daytime alpha-1 agonist therapy (midodrine).",
    "strongestDistractor": "Oral metoprolol tartrate 50 mg twice daily to blunt post-standing tachycardia",
    "distractorExclusion": "Beta-blockers worsen bradycardia and blunt cardiac compensation; alpha-agonists like midodrine restore venous return.",
    "citation": "Freeman R, Wieling W, Axelrod FB, et al. Consensus Statement on the Definition of Orthostatic Hypotension, Neurally Mediated Syncope and the Postural Tachycardia Syndrome. Clin Auton Res. 2011;21(2):69-72. PMID: 21431947.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 neurology/ambulatory medicine item on diagnosing neurogenic orthostatic hypotension and pharmacological management.",
      "distractorExclusionNotes": "Excluded clonidine, diuretics, and beta-blockers because all worsen orthostasis; midodrine provides daytime peripheral vasoconstriction.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0817",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Vitamin B12 Versus Folate Deficiency Methylmalonic Acid Biomarkers",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old woman presents with progressive tingling and numbness in both feet, unsteady gait, and worsening fatigue for 4 months. She has a history of Hashimoto thyroiditis and underwent a partial gastrectomy for bleeding gastric ulcers 8 years ago. On examination, she appears pale. Neurological examination reveals bilateral symmetric loss of vibration sense and proprioception up to the ankles, positive Romberg sign, and hyperactive knee reflexes with extensor plantar responses (Babinski sign bilaterally). Complete blood count reveals: hemoglobin 9.4 g/dL, mean corpuscular volume (MCV) 108 fL, WBC 4,200/mm3, and platelet count 130,000/mm3. Peripheral blood smear demonstrates hypersegmented neutrophils (six or more lobes) and macro-ovalocytes. Serum vitamin B12 level is 220 pg/mL (borderline normal, reference range 200-900 pg/mL), and serum folate is 8.5 ng/mL (normal > 4.0 ng/mL). Which of the following laboratory findings would decisively confirm the underlying nutritional deficiency causing her neurological syndrome?",
    "choices": [
      [
        "Markedly elevated serum methylmalonic acid and elevated serum homocysteine",
        "Macrocytic megaloblastic anemia accompanied by subacute combined degeneration of the spinal cord (loss of posterior column vibration/proprioception and lateral corticospinal tract spasticity/Babinski signs) is the classic hallmark of Cobalamin (Vitamin B12) deficiency. In up to 30% of patients with clinically significant B12 deficiency, serum vitamin B12 levels fall into the 'borderline normal' range (200-400 pg/mL). In this clinical setting, measuring metabolic intermediates is essential: Vitamin B12 is an essential cofactor for two enzymatic reactions: (1) methylmalonyl-CoA mutase (converting methylmalonyl-CoA to succinyl-CoA), and (2) methionine synthase (converting homocysteine to methionine). In B12 deficiency, BOTH serum methylmalonic acid (MMA) and homocysteine are markedly elevated. In contrast, in isolated folate deficiency, homocysteine is elevated but methylmalonic acid remains entirely NORMAL."
      ],
      [
        "Normal serum methylmalonic acid with isolated markedly elevated serum homocysteine",
        "Normal MMA with elevated homocysteine is pathognomonic for isolated folate deficiency, which produces macrocytic anemia but does NOT cause subacute combined degeneration."
      ],
      [
        "Elevated serum ferritin combined with elevated total iron-binding capacity",
        "Iron deficiency causes microcytic hypochromic anemia with high TIBC and low ferritin, not macrocytic megaloblastic anemia with myelopathy."
      ],
      [
        "Markedly elevated serum copper and low 24-hour urinary zinc excretion",
        "Copper deficiency causes a myeloneuropathy resembling B12 deficiency, but presents with LOW serum copper and ceruloplasmin, not elevated copper."
      ],
      [
        "Normal serum homocysteine with elevated urine orotic acid excretion",
        "Orotic aciduria is an inborn error of pyrimidine synthesis presenting in infancy with megaloblastic anemia and failure to thrive, not adult myelopathy."
      ]
    ],
    "shortestValidSolution": "Borderline B12 + macrocytic anemia + posterior/lateral column signs = elevated MMA and elevated homocysteine confirms B12 deficiency.",
    "necessaryInference": "Distinguish vitamin B12 deficiency from folate deficiency using metabolic intermediates: elevated MMA + homocysteine = B12; normal MMA + elevated homocysteine = folate.",
    "strongestDistractor": "Normal serum methylmalonic acid with isolated markedly elevated serum homocysteine",
    "distractorExclusion": "Normal MMA with elevated homocysteine characterizes folate deficiency, which lacks the neurological degeneration seen here.",
    "citation": "Stabler SP. Clinical Practice. Vitamin B12 Deficiency. N Engl J Med. 2013;368(2):149-160. PMID: 23301732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hematology/neurology item testing biochemical differentiation of B12 versus folate deficiency with MMA and homocysteine.",
      "distractorExclusionNotes": "Excluded isolated homocysteine elevation (folate) because elevated MMA is required to confirm cobalamin deficiency myelopathy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0818",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Secondary Hyperparathyroidism in Advanced CKD Calcimimetic Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man with end-stage kidney disease on maintenance hemodialysis for 3 years presents for evaluation of mineral and bone disorder. His current medications include sevelamer carbonate 1,600 mg with each meal and calcitriol 0.5 mcg orally three times weekly post-dialysis. Laboratory evaluation over the past 3 months reveals: serum intact parathyroid hormone (PTH) progressively rising from 620 pg/mL to 980 pg/mL (KDIGO target range for dialysis: 2 to 9 times the upper normal limit, ~130 to 600 pg/mL). Concurrently, his serum calcium has risen to 10.4 mg/dL (normal 8.5-10.2 mg/dL), and serum phosphorus is 6.2 mg/dL (normal 2.5-4.5 mg/dL), with a calcium-phosphorus product of 64.5 mg2/dL2 (target < 55 mg2/dL2). Increasing his calcitriol dose is precluded by hypercalcemia and hyperphosphatemia. Which of the following is the most appropriate next step in medical management?",
    "choices": [
      [
        "Discontinue calcitriol and initiate oral cinacalcet (or intravenous etelcalcetide)",
        "Secondary hyperparathyroidism in chronic kidney disease is driven by phosphate retention, decreased calcitriol (1,25-dihydroxyvitamin D) synthesis, and downregulation of calcium-sensing receptors (CaSR) and vitamin D receptors on the parathyroid glands. While active vitamin D analogs (calcitriol, paricalcitol) suppress PTH gene transcription, they also stimulate intestinal calcium and phosphate absorption, frequently worsening hypercalcemia, hyperphosphatemia, and vascular calcification. When PTH is uncontrolled and serum calcium and phosphorus are elevated, active vitamin D should be discontinued or reduced, and a calcimimetic agent (oral cinacalcet or intravenous etelcalcetide) initiated. Calcimimetics allosterically activate the parathyroid calcium-sensing receptor, increasing its sensitivity to extracellular calcium and directly suppressing PTH secretion without increasing serum calcium or phosphorus (in fact, calcimimetics lower serum calcium)."
      ],
      [
        "Increase calcitriol to 1.5 mcg three times weekly to forcefully suppress PTH transcription",
        "Escalating calcitriol in the presence of hypercalcemia (10.4 mg/dL) and high calcium-phosphorus product (>64) leads to fulminant metastatic vascular and cardiac calcification."
      ],
      [
        "Switch sevelamer to calcium carbonate 1,500 mg three times daily with meals",
        "Calcium-based phosphate binders add an exogenous calcium load that exacerbates hypercalcemia and accelerates soft tissue calciphylaxis."
      ],
      [
        "Emergent total parathyroidectomy with forearm autotransplantation within 48 hours",
        "Surgical parathyroidectomy is reserved for severe tertiary hyperparathyroidism refractory to maximal medical therapy with calcimimetics and phosphate binders."
      ],
      [
        "Initiate oral ergocalciferol 50,000 IU weekly as monotherapy",
        "Ergocalciferol requires renal 1-alpha-hydroxylation, which is absent in end-stage kidney disease; it has negligible efficacy in suppressing severe secondary hyperparathyroidism."
      ]
    ],
    "shortestValidSolution": "Dialysis + high PTH (980) + high calcium (10.4) + high phos = stop calcitriol + start calcimimetic (cinacalcet/etelcalcetide).",
    "necessaryInference": "Select calcimimetics over active vitamin D when managing secondary hyperparathyroidism complicated by hypercalcemia.",
    "strongestDistractor": "Increase calcitriol to 1.5 mcg three times weekly to forcefully suppress PTH transcription",
    "distractorExclusion": "Calcitriol raises calcium and phosphorus, promoting vascular calcification; calcimimetics suppress PTH while lowering calcium.",
    "citation": "Ketteler M, Block GA, Evenepoel P, et al. Executive Summary of the 2017 KDIGO Chronic Kidney Disease-Mineral and Bone Disorder (CKD-MBD) Guideline Update: What's Changed and Why It Matters. Kidney Int. 2017;92(1):26-36. PMID: 28646995.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology item on managing secondary hyperparathyroidism with calcimimetics in the setting of hypercalcemia.",
      "distractorExclusionNotes": "Excluded escalating calcitriol and calcium binders due to high risk of metastatic calcification; calcimimetics uniquely lower PTH without raising calcium.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0819",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Chronic Insomnia in Older Adults Cognitive Behavioral Therapy First-Line",
    "provisionalDifficulty": 4,
    "stem": "A 76-year-old woman presents to the clinic complaining of difficulty falling asleep and staying asleep for the past 6 months. She reports lying awake in bed for 2 to 3 hours every night ruminating about her health, awakening frequently throughout the night, and averaging 4 hours of fragmented sleep. She takes a 90-minute nap in her armchair every afternoon. She has no restless legs sensations, snoring, or daytime cataplexy. She lives alone and has a history of osteopenia and mild hypertension on lisinopril 10 mg daily. Physical and neurological examinations are normal. She requests a prescription for a sleeping pill, stating her friend recommended zolpidem or temazepam. Which of the following is the most appropriate first-line management recommendation for this patient?",
    "choices": [
      [
        "Cognitive behavioral therapy for insomnia (CBT-I) including stimulus control and sleep restriction",
        "Chronic insomnia disorder (symptoms >= 3 nights per week for >= 3 months causing daytime distress/impairment) in older adults is best managed with non-pharmacological interventions. Both the American College of Physicians (ACP) and the American Academy of Sleep Medicine (AASM) strongly recommend Cognitive Behavioral Therapy for Insomnia (CBT-I) as the mandatory first-line therapy for all adults with chronic insomnia. Core components include: (1) stimulus control (bed is used ONLY for sleep and sex; leave bed if awake >20 minutes), (2) sleep restriction therapy (limiting time in bed to actual total sleep time), (3) sleep hygiene (eliminating daytime naps, fixed wake times), (4) relaxation techniques, and (5) cognitive restructuring. Sedative-hypnotics (benzodiazepines and 'Z-drugs' like zolpidem) are on the Beers Criteria list of inappropriate drugs in older adults due to substantial risks of falls, hip fractures, motor vehicle accidents, delirium, dependence, and cognitive decline, without durable long-term benefit."
      ],
      [
        "Oral zolpidem tartrate 5 mg nightly at bedtime as first-line monotherapy",
        "Z-drugs are associated with high rates of falls, nocturnal wandering, complex sleep behaviors, fractures, and delirium in older adults and are not first-line."
      ],
      [
        "Oral temazepam 15 mg nightly at bedtime for physiological sleep induction",
        "Benzodiazepines alter sleep architecture, induce physical tolerance and dependence, and cause daytime sedation and hip fractures in the elderly."
      ],
      [
        "Over-the-counter diphenhydramine 50 mg nightly for sedative-antihistamine effect",
        "Diphenhydramine carries a potent anticholinergic burden causing urinary retention, dry mouth, blurred vision, acute confusion, and falls in older adults."
      ],
      [
        "Oral quetiapine 25 mg nightly for off-label sedating hypnotic properties",
        "Antipsychotics should not be used off-label as routine sleep aids due to significant metabolic syndrome, stroke, and extrapyramidal risks."
      ]
    ],
    "shortestValidSolution": "Elderly + chronic insomnia = CBT-I is mandatory first-line therapy (avoid benzodiazepines, Z-drugs, and diphenhydramine per Beers criteria).",
    "necessaryInference": "Apply ACP/AASM guidelines designating CBT-I as first-line for chronic insomnia and recognize risks of sedative-hypnotics in older adults.",
    "strongestDistractor": "Oral zolpidem tartrate 5 mg nightly at bedtime as first-line monotherapy",
    "distractorExclusion": "Zolpidem carries Beers criteria high-risk warnings for falls and delirium in elderly; CBT-I is the proven first-line therapy.",
    "citation": "Qaseem A, Kansagara D, Forciea MA, et al. Management of Chronic Insomnia Disorder in Adults: A Clinical Practice Guideline From the American College of Physicians. Ann Intern Med. 2016;165(2):125-133. PMID: 27136449.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/psychiatry item on evidence-based first-line treatment of chronic insomnia in older adults.",
      "distractorExclusionNotes": "Excluded zolpidem, benzodiazepines, and diphenhydramine due to Beers criteria fall/delirium risks; CBT-I is first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0820",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Elective Procedural Anticoagulation Interruption and Bridging Avoidance",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with nonvalvular atrial fibrillation and a CHA2DS2-VASc score of 3 (age 68, hypertension, type 2 diabetes mellitus) is scheduled to undergo an elective screening colonoscopy with anticipated polypectomy in 5 days. He has normal renal function (serum creatinine 0.9 mg/dL, eGFR 86 mL/min/1.73 m2). He has been taking oral apixaban 5 mg twice daily with excellent adherence and has had no bleeding or stroke history. The gastroenterologist classifies colonoscopy with polypectomy as an intervention with high bleeding risk. The patient's primary care team considers perioperative anticoagulation management and whether therapeutic low-molecular-weight heparin (LMWH) bridging is indicated. Which of the following is the most appropriate management plan regarding his apixaban therapy?",
    "choices": [
      [
        "Discontinue apixaban 48 hours prior to the procedure and perform the colonoscopy without heparin bridging",
        "Periprocedural management of Direct Oral Anticoagulants (DOACs) differs fundamentally from warfarin. Because DOACs have predictable, short half-lives (~10-14 hours), routine heparin bridging therapy is NOT recommended. Landmark trials (such as the BRIDGE trial with warfarin and the PAUSE study with DOACs) definitively demonstrated that perioperative heparin bridging significantly increases the risk of major bleeding (up to 3-fold) WITHOUT reducing the risk of arterial thromboembolism or stroke. For high-bleeding-risk procedures (e.g., colonoscopy with polypectomy, major abdominal/pelvic surgery) in patients with normal renal function (eGFR >= 50 mL/min), apixaban should be withheld for 48 hours (equivalent to 4-5 drug half-lives, ensuring <3% residual drug concentration) without any bridging. Apixaban is safely resumed 48 to 72 hours post-procedure once definitive surgical hemostasis is confirmed."
      ],
      [
        "Discontinue apixaban five days prior and initiate full-dose therapeutic enoxaparin bridging",
        "Withholding DOACs for 5 days is unnecessarily prolonged and therapeutic heparin bridging dramatically increases major post-polypectomy bleeding without thromboembolic benefit."
      ],
      [
        "Continue apixaban uninterrupted at normal dosing throughout the colonoscopy procedure",
        "Continuing full-dose anticoagulation during colonoscopic polypectomy carries unacceptable risks of severe immediate and delayed arterial hemorrhage."
      ],
      [
        "Administer intravenous andexanet alfa immediately prior to the colonoscopy procedure",
        "Specific DOAC reversal agents (andexanet alfa, idarucizumab) are reserved for life-threatening emergency hemorrhage or emergent surgery, not elective procedures."
      ],
      [
        "Switch apixaban to oral warfarin targeting INR 2.0 to 3.0 for the perioperative period",
        "Switching from a short-acting DOAC to long-acting warfarin adds unnecessary complexity, prolonged bridging, and increased bleeding without clinical rationale."
      ]
    ],
    "shortestValidSolution": "High bleeding risk procedure + apixaban (normal renal function) = hold apixaban 48 hrs before procedure WITHOUT heparin bridging (PAUSE study).",
    "necessaryInference": "Apply modern perioperative anticoagulation guidelines: avoid routine heparin bridging with DOACs and hold for 48 hours for high-bleeding-risk procedures.",
    "strongestDistractor": "Discontinue apixaban five days prior and initiate full-dose therapeutic enoxaparin bridging",
    "distractorExclusion": "Heparin bridging triples major bleeding without lowering stroke risk (BRIDGE and PAUSE studies); withholding DOAC for 48 hours unbridged is standard.",
    "citation": "Douketis JD, Spyropoulos AC, Duncan J, et al. Perioperative Management of Patients With Atrial Fibrillation Receiving a Direct Oral Anticoagulant. JAMA Intern Med. 2019;179(11):1469-1478. PMID: 31380891.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hematology/gastroenterology perioperative item on avoiding heparin bridging and timing DOAC interruption before high-risk procedures.",
      "distractorExclusionNotes": "Excluded heparin bridging and andexanet alfa because prospective PAUSE protocol validates simple 48-hour unbridged DOAC cessation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0821",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Mild Cognitive Impairment Preservation of Independent Daily Function",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old retired accountant is accompanied to the clinic by his wife due to concerns about his memory over the past 9 months. His wife notes that he occasionally misplaces his keys, forgets names of acquaintances, and takes longer to calculate expenses when balancing their checkbook. However, he continues to independently manage their household finances, pay all bills on time, drive safely without getting lost, cook meals, manage his medications, and use the computer. He has no mood changes, hallucinations, or sleep disturbances. Neurological examination is entirely normal. On cognitive screening, his Montreal Cognitive Assessment (MoCA) score is 23/30 (normal >= 26), with lost points in delayed word recall (2/5) and trail-making executive tasks. Brain MRI demonstrates age-appropriate cerebral volume without focal atrophy or acute ischemic infarcts. Laboratory testing, including TSH, vitamin B12, and rapid plasma reagin, is normal. Which of the following features most critically distinguishes this patient's condition as Mild Cognitive Impairment (MCI) rather than early dementia?",
    "choices": [
      [
        "Preservation of independent functioning in instrumental activities of daily living",
        "The critical diagnostic distinction between Mild Cognitive Impairment (MCI) and Major Neurocognitive Disorder (Dementia) rests upon the patient's functional autonomy. Both conditions exhibit objective cognitive impairment on standardized neuropsychological testing (e.g., MoCA or MMSE) that represents a decline from prior baseline. However, in Mild Cognitive Impairment, the cognitive deficits DO NOT interfere with independence in daily activities; the individual remains functionally independent in complex Instrumental Activities of Daily Living (IADLs, such as managing finances, taking medications, driving, shopping, preparing meals), although these tasks may require greater effort or compensatory strategies. In contrast, the diagnosis of Dementia requires that cognitive decline causes loss of functional independence in everyday life (requiring assistance with IADLs or basic ADLs)."
      ],
      [
        "Score on Montreal Cognitive Assessment remaining strictly above twenty",
        "A specific MoCA cutoff score does not define dementia; functional impairment in real-world everyday independence determines the transition."
      ],
      [
        "Complete absence of hippocampal volume loss on structural magnetic resonance imaging",
        "Hippocampal atrophy can be present in both MCI and early Alzheimer disease; neuroimaging cannot establish functional clinical autonomy."
      ],
      [
        "Age of symptom onset occurring prior to seventy years of age",
        "Age of onset does not distinguish MCI from dementia; both can manifest across all geriatric age ranges."
      ],
      [
        "Rapid symptomatic response within two weeks to acetylcholinesterase inhibitors",
        "Cholinesterase inhibitors (donepezil) are not approved or recommended for MCI, as randomized trials show no reduction in progression to dementia."
      ]
    ],
    "shortestValidSolution": "Objective cognitive decline on MoCA (23/30) + preserved independence in IADLs = Mild Cognitive Impairment (not dementia).",
    "necessaryInference": "Identify preserved independence in instrumental activities of daily living as the defining boundary separating MCI from dementia.",
    "strongestDistractor": "Score on Montreal Cognitive Assessment remaining strictly above twenty",
    "distractorExclusion": "MoCA scores overlap between MCI and mild dementia; loss of independent functional capacity defines dementia.",
    "citation": "Petersen RC. Clinical Practice. Mild Cognitive Impairment. N Engl J Med. 2011;364(23):2227-2234. PMID: 21651394.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 geriatrics/neurology item distinguishing mild cognitive impairment from dementia based on functional independence.",
      "distractorExclusionNotes": "Excluded MoCA cutoffs and MRI volumes because functional independence in IADLs is the definitive diagnostic criterion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0822",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Unexplained Chronic Cough Stepwise Empirical Gastroesophageal Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old non-smoking woman presents to the clinic with an irritating, non-productive cough of 10 months' duration. She denies hemoptysis, fevers, chills, weight loss, shortness of breath, wheezing, or chest pain. She takes no medications, including ACE inhibitors. High-resolution chest CT scan and spirometry with methacholine challenge testing are entirely normal. An empirical 4-week trial of an intranasal corticosteroid combined with an oral first-generation antihistamine-decongestant for suspected upper airway cough syndrome yielded no improvement. She reports that her cough is worse when lying supine in bed at night and after eating large meals, although she rarely experiences classical heartburn or regurgitation. Physical examination of the ears, nose, throat, and chest is completely unremarkable. Which of the following is the most appropriate next step in clinical management?",
    "choices": [
      [
        "Empirical trial of high-dose oral proton pump inhibitor therapy and lifestyle antireflux measures",
        "Chronic cough (cough persisting >= 8 weeks in adults) with normal chest imaging and no history of cigarette smoking or ACE inhibitor use is accounted for in >90% of cases by the 'pathogenic triad': (1) Upper airway cough syndrome (post-nasal drip), (2) Cough-variant asthma / non-asthmatic eosinophilic bronchitis, and (3) Gastroesophageal reflux disease (GERD). In patients who have normal spirometry/methacholine challenge and fail empirical therapy for upper airway cough syndrome, GERD is the primary remaining etiology. Up to 75% of patients with GERD-induced chronic cough have 'silent reflux' with no heartburn or dyspeptic symptoms, mediated by microaspiration or esophageal-bronchial vagal reflex. Guidelines (ACCP) recommend an empirical trial of high-dose PPI therapy (e.g., omeprazole 20-40 mg twice daily 30-60 minutes before meals) combined with lifestyle antireflux measures for at least 8 to 12 weeks before undertaking invasive 24-hour pH impedance testing."
      ],
      [
        "Immediate referral for rigid diagnostic bronchoscopy with transbronchial biopsy",
        "Invasive bronchoscopy is low-yield and inappropriate when common benign etiologies (GERD) remain uninvestigated and chest CT is normal."
      ],
      [
        "Initiation of oral broad-spectrum azithromycin for suspected atypical mycobacterial infection",
        "Empiric macrolide therapy is unjustified in an immunocompetent patient with normal high-resolution CT and no systemic symptoms."
      ],
      [
        "Prescribe oral codeine phosphate three times daily as indefinite cough suppressant monotherapy",
        "Opioids cause sedation, constipation, and physical dependence, and mask underlying treatable pathology without addressing the etiology."
      ],
      [
        "Twenty-four-hour ambulatory esophageal pH-impedance monitoring before starting any medication",
        "Ambulatory pH testing is reserved for patients who fail an empirical trial of PPI therapy or when atypical surgical decisions are considered."
      ]
    ],
    "shortestValidSolution": "Chronic cough + normal CT/spirometry + failed antihistamine + worse supine = silent GERD -> empiric high-dose PPI trial (8-12 wks).",
    "necessaryInference": "Apply ACCP chronic cough algorithm: initiate empirical PPI therapy for suspected silent GERD before invasive testing.",
    "strongestDistractor": "Twenty-four-hour ambulatory esophageal pH-impedance monitoring before starting any medication",
    "distractorExclusion": "Empirical trial of high-dose PPI is recommended first-line; invasive 24-hr pH testing is reserved for PPI failures.",
    "citation": "Irwin RS, French CL, Chang AB, et al. Classification of Cough as a Symptom in Adults and Management Algorithms: CHEST Guideline and Expert Panel Report. Chest. 2018;153(1):196-209. PMID: 29080708.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 pulmonary/gastroenterology item on stepwise empirical approach to unexplained chronic cough.",
      "distractorExclusionNotes": "Excluded bronchoscopy and immediate pH testing because empirical high-dose PPI trial is the recommended next step.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0823",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Asymptomatic Microscopic Hematuria in Older Smoker Cystoscopy Evaluation",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man presents for a routine follow-up visit. He has a 35 pack-year cigarette smoking history and well-controlled hypertension on lisinopril 20 mg daily. He denies gross hematuria, dysuria, flank pain, fever, weight loss, or changes in urinary stream. A microscopic urinalysis performed as part of a routine health screen reveals: specific gravity 1.018, pH 6.0, negative leukocyte esterase, negative nitrites, negative protein, and 8 to 10 red blood cells per high-power field (RBC/HPF) with normal red blood cell morphology and absence of casts. A repeat microscopic urinalysis 2 weeks later confirms 6 to 8 RBC/HPF without bacteriuria. Serum creatinine is 0.9 mg/dL. Which of the following is the most appropriate next step in the clinical evaluation of this patient?",
    "choices": [
      [
        "Multiphasic CT urography and outpatient flexible cystoscopy",
        "Microhematuria is defined by the American Urological Association (AUA) as >= 3 red blood cells per high-power field on a properly collected microscopic urinalysis (dipstick hematuria alone is insufficient and requires microscopic confirmation). Patients with confirmed microhematuria are stratified into low-, intermediate-, and high-risk categories for urothelial and renal malignancy. High-risk features include: age >= 60 years, male sex, >30 pack-year smoking history, or gross hematuria. In high-risk patients, the likelihood of urothelial carcinoma (bladder cancer, renal cell carcinoma, or upper tract urothelial cancer) is substantial (~5-10%). The mandatory complete diagnostic workup for high-risk microhematuria consists of: (1) Multiphasic CT urography (with unenhanced, nephrographic, and excretory phases) to evaluate the renal parenchyma, collecting systems, and ureters, and (2) Outpatient flexible cystoscopy to directly visualize the bladder and urethral mucosa."
      ],
      [
        "Renal ultrasonography alone with routine repeat urinalysis in twelve months",
        "Renal ultrasound cannot reliably visualize upper tract urothelial lesions or bladder tumors and is completely inadequate for high-risk patients."
      ],
      [
        "Empiric 14-day course of oral ciprofloxacin followed by repeat urinalysis",
        "Treating with empiric antibiotics in an asymptomatic patient with negative nitrites/esterase delays cancer diagnosis and promotes resistance."
      ],
      [
        "Measurement of 24-hour urinary calcium and uric acid excretion",
        "Metabolic stone workup is indicated for recurrent nephrolithiasis, not for painless microhematuria in an older heavy smoker."
      ],
      [
        "Reassurance that microscopic hematuria in asymptomatic patients is always benign",
        "Microhematuria in older smokers is a cardinal early warning sign of bladder or urothelial malignancy; ignoring it is medical negligence."
      ]
    ],
    "shortestValidSolution": "62yo smoker + >=3 RBC/HPF on 2 UAs = high-risk microhematuria -> multiphasic CT urography + flexible cystoscopy.",
    "necessaryInference": "Apply AUA risk stratification for microscopic hematuria: age >60 and heavy smoking mandate CT urography and cystoscopy.",
    "strongestDistractor": "Renal ultrasonography alone with routine repeat urinalysis in twelve months",
    "distractorExclusion": "Ultrasound has poor sensitivity for bladder and upper tract urothelial cancers; CT urography and cystoscopy are mandatory in high-risk patients.",
    "citation": "Barocas DA, Boorjian SA, Alvarez RD, et al. Microhematuria: AUA/SUO Guideline. J Urol. 2020;204(4):778-786. PMID: 32698717.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 urology/ambulatory medicine item testing risk stratification and diagnostic evaluation of microscopic hematuria.",
      "distractorExclusionNotes": "Excluded ultrasound alone and antibiotics because high-risk criteria (male, >60, heavy smoker) mandate CT urography and cystoscopy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0824",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "COPD Frequent Exacerbations Blood Eosinophils Guiding Inhaled Steroids",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with severe chronic obstructive pulmonary disease (GOLD Group E, post-bronchodilator FEV1 42% predicted) presents for a routine follow-up. Despite excellent inhaler technique and adherence to dual long-acting bronchodilator therapy with tiotropium (LAMA) and olodaterol (LABA) once daily, he has suffered two moderate acute COPD exacerbations requiring systemic corticosteroids and antibiotics over the past 8 months. He has chronic productive cough and moderate exertional dyspnea. He has had no episodes of pneumonia. Vital signs show blood pressure 132/78 mm Hg, heart rate 76/min, and room air oxygen saturation 93%. Complete blood count shows: WBC 7,200/mm3 with an absolute blood eosinophil count of 380 cells/uL (5.3%). Which of the following is the most appropriate next step in pharmacological management according to GOLD guidelines?",
    "choices": [
      [
        "Escalate to single-inhaler triple therapy by adding an inhaled corticosteroid (LAMA + LABA + ICS)",
        "In patients with chronic obstructive pulmonary disease (COPD) experiencing persistent exacerbations despite dual bronchodilator therapy (LABA + LAMA), the Global Initiative for Chronic Obstructive Lung Disease (GOLD) guidelines recommend using blood eosinophil counts to predict the likelihood of clinical benefit from adding an Inhaled Corticosteroid (ICS). A blood eosinophil count >= 300 cells/uL (or >= 100 cells/uL in patients with >= 2 moderate exacerbations or 1 severe exacerbation resulting in hospitalization) identifies an eosinophilic endotype that derives profound reductions in exacerbation frequency and mortality from triple therapy (LAMA + LABA + ICS). Landmark randomized trials (IMPACT and ETHOS) demonstrated that single-inhaler triple therapy significantly lowered moderate-to-severe exacerbation rates and all-cause mortality compared to dual bronchodilation in this subgroup."
      ],
      [
        "Add oral roflumilast 500 mcg daily and avoid any inhaled corticosteroids",
        "Roflumilast (a PDE-4 inhibitor) is second-line add-on therapy for chronic bronchitis with FEV1 < 50%, but an eosinophil count >= 300 cells/uL strongly prioritizes ICS triple therapy."
      ],
      [
        "Initiate chronic prophylactic oral azithromycin 250 mg three times weekly",
        "Azithromycin reduces exacerbations in former smokers, but guidelines recommend optimizing inhaled triple therapy (LABA/LAMA/ICS) first in patients with high blood eosinophils."
      ],
      [
        "Discontinue tiotropium and switch to high-dose inhaled fluticasone monotherapy",
        "ICS monotherapy is strictly contraindicated in COPD because it does not improve lung function and significantly increases the risk of pneumonia."
      ],
      [
        "Add oral theophylline twice daily targeting serum level 10 to 15 mcg/mL",
        "Theophylline has a narrow therapeutic index, frequent drug interactions, and poor clinical efficacy compared to modern inhaled triple therapy."
      ]
    ],
    "shortestValidSolution": "COPD >=2 exacerbations on LABA/LAMA + blood eosinophils >=300 cells/uL = escalate to triple therapy (LABA + LAMA + ICS).",
    "necessaryInference": "Apply GOLD guidelines: use blood eosinophil threshold (>=300 cells/uL) to add inhaled corticosteroid triple therapy for recurrent COPD exacerbations.",
    "strongestDistractor": "Add oral roflumilast 500 mcg daily and avoid any inhaled corticosteroids",
    "distractorExclusion": "Roflumilast is an option for chronic bronchitis, but high eosinophils (>=300) specifically predict large clinical response to ICS triple therapy.",
    "citation": "Gupta A et al. Sarcopenia in Chronic Obstructive Pulmonary Disease: Prevalence and Association With Disease Severity in an Indian Tertiary Care Cohort. Cureus. PMID: 42923616.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 pulmonology item on using biomarker-directed therapy (blood eosinophils) to guide ICS escalation in COPD.",
      "distractorExclusionNotes": "Excluded roflumilast and azithromycin because blood eosinophils >=300 cells/uL definitively indicate escalation to LABA/LAMA/ICS triple therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0825",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Refractory Chronic Tophaceous Gout Pegloticase and Methotrexate Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 59-year-old man presents with chronic, debilitating tophaceous gout causing severe joint deformities and chronic pain. Over the past 4 years, multiple urate-lowering therapies have failed: allopurinol was titrated to 600 mg daily (with HLA-B*5801 negative status), and subsequently febuxostat 80 mg daily combined with oral probenecid was trialed, but serum urate has remained persistently between 9.2 mg/dL and 10.6 mg/dL. He suffers five to six acute flares each year and has extensive, eroding tophi over his olecranon bursa, MCP joints, and Achilles tendons. Renal function shows eGFR 48 mL/min/1.73 m2. The rheumatology team plans to initiate intravenous pegloticase (a recombinant pegylated mammalian uricase that metabolizes insoluble urate into soluble allantoin) every 2 weeks. Which of the following co-interventions is most essential to co-prescribe with pegloticase to prevent anti-drug antibody formation, prevent infusion reactions, and sustain clinical efficacy?",
    "choices": [
      [
        "Co-administration of oral methotrexate (with folic acid) as an immunomodulator",
        "Pegloticase is a recombinant pegylated mammalian uricase that rapidly and dramatically lowers serum uric acid to near-zero levels, resolving refractory tophi. However, historical pegloticase monotherapy was limited by a high rate (~40-50%) of high-titer anti-drug antibodies (ADAs). Anti-drug antibodies neutralize the enzyme (causing loss of efficacy, heralded by a rebound in serum urate to >6 mg/dL) and dramatically increase the risk of severe anaphylactic infusion reactions. Major randomized trials (MIRROR trial) definitively proved that co-administration of an immunomodulator\u2014specifically oral methotrexate 15 mg weekly (with daily folic acid) initiated 4 weeks prior to pegloticase\u2014dramatically suppressed ADA formation, increasing sustained urate response rates from 31% to 71% and slashing infusion reactions by more than half. Monitoring serum urate before every infusion is mandatory; if urate rises > 6 mg/dL, the infusion must be halted immediately."
      ],
      [
        "Concurrent continuation of maximum-dose oral allopurinol 600 mg daily",
        "Continuing oral urate-lowering agents during pegloticase is strictly contraindicated because they mask the early rise in serum urate that warns of neutralizing antibodies."
      ],
      [
        "Co-administration of high-dose intravenous cyclophosphamide pulse therapy",
        "Cyclophosphamide carries severe toxicities (hemorrhagic cystitis, myelosuppression, malignancy) and is completely disproportionate and unnecessary for gout."
      ],
      [
        "Intramuscular gold sodium thiomalate injections every two weeks",
        "Gold injections are obsolete in rheumatology due to severe nephrotoxicity and bone marrow aplasia and have no role in gout."
      ],
      [
        "Routine prophylactic platelet transfusions prior to every pegloticase infusion",
        "Platelet transfusions do not prevent antibody formation or allergic infusion reactions and carry transfusion-related risks."
      ]
    ],
    "shortestValidSolution": "Refractory tophaceous gout on pegloticase = co-prescribe methotrexate (MIRROR trial) to prevent anti-drug antibodies and infusion reactions.",
    "necessaryInference": "Apply MIRROR trial evidence establishing methotrexate co-administration with pegloticase to prevent anti-drug antibodies and sustain efficacy.",
    "strongestDistractor": "Concurrent continuation of maximum-dose oral allopurinol 600 mg daily",
    "distractorExclusion": "Oral urate-lowering drugs must be discontinued before pegloticase because they mask the rise in urate that signals neutralizing antibody development.",
    "citation": "Troum OM et al. Safety, Tolerability, and Efficacy of Shorter Infusion Durations of Pegloticase Administered to Patients With Uncontrolled Gout Receiving Methotrexate: AGILE Trial. J Clin Rheumatol. PMID: 40984755.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology item on modern evidence-based protocol for pegloticase plus methotrexate co-therapy in refractory tophaceous gout.",
      "distractorExclusionNotes": "Excluded oral allopurinol continuation because it masks antibody emergence; methotrexate immunomodulation is the proven standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
