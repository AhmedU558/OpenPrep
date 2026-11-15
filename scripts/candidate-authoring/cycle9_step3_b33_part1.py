"""
Step 3 Batch 33 (0801-0812) Definitions - Advanced Ambulatory Medicine & Multimorbidity
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b33_part1 = [
  # 0801
  {
    "code": "op-c-s3-0801",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Nonvalvular Atrial Fibrillation in Hemodialysis Anticoagulation Selection",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with end-stage kidney disease on maintenance hemodialysis for 4 years presents for a routine nephrology clinic visit. He has permanent nonvalvular atrial fibrillation with a CHA2DS2-VASc score of 4 (age 68, hypertension, diabetes mellitus, prior ischemic stroke 2 years ago). He has had no bleeding episodes. Blood pressure is 134/78 mm Hg, and pulse is 76/min irregularly irregular. Dry weight is 78 kg. Recent pre-dialysis serum creatinine is 8.4 mg/dL. He has been taking warfarin with erratic INR values ranging between 1.3 and 4.8 despite close clinic monitoring. After a comprehensive multidisciplinary discussion regarding the lack of definitive randomized clinical trial mortality data in dialysis-dependent atrial fibrillation, the patient strongly expresses his desire to continue stroke prevention therapy with an oral anticoagulant that avoids frequent venous punctures. Which of the following is the most appropriate oral anticoagulant regimen according to current pharmacokinetic and clinical evidence?",
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
    "citation": "Pokorney SD, Chertow GM, Al-Khalidi HR, et al. Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Multicenter Randomized Clinical Trial (RENAL-AF). Circulation. 2022;146(23):1735-1745. PMID: 36330818.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/cardiology item evaluating oral anticoagulation options in patients with atrial fibrillation on maintenance hemodialysis.",
      "distractorExclusionNotes": "Excluded dabigatran and rivaroxaban due to renal clearance, and DAPT due to poor stroke prevention in AF.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0802
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
  # 0803
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
  # 0804
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
  # 0805
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
    "citation": "Grundy SM, Stone NJ, Bailey AL, et al. 2018 AHA/ACC/AACVPR/AAPA/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Blood Cholesterol. Circulation. 2019;139(25):e1082-e1143. PMID: 30422031.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology/preventive medicine item on systematic stepwise management of statin-associated muscle symptoms.",
      "distractorExclusionNotes": "Excluded CoQ10 and complete therapy abandonment because low-dose rechallenge plus ezetimibe provides essential secondary prevention.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0806
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
  # 0807
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
  # 0808
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
  # 0809
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
    "citation": "Bird ST, Gelperin K, Yermilov I, et al. Severe Hypocalcemia With Denosumab in Patients With Advanced Chronic Kidney Disease. JAMA. 2024;331(9):749-757. PMID: 38241040.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/endocrinology item on denosumab safety, FDA boxed warning, and severe hypocalcemia risk in stage 4-5 CKD.",
      "distractorExclusionNotes": "Excluded withholding calcium and zoledronic acid because bisphosphonates cause acute tubular necrosis and denosumab requires prophylactic calcium repletion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0810
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
    "citation": "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Rheumatol. 2020;72(6):879-895. PMID: 32390406.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology/nephrology item evaluating drug safety in acute gout flares with severe renal and cardiac comorbidity.",
      "distractorExclusionNotes": "Excluded NSAIDs (worsens CKD/HF) and colchicine (toxicity in eGFR <30); corticosteroids are the definitive safe therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0811
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
  # 0812
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
    "citation": "Bakris GL, Agarwal R, Anker SD, et al. Effect of Finerenone on Chronic Kidney Disease Outcomes in Type 2 Diabetes. N Engl J Med. 2020;383(23):2219-2229. PMID: 33260057.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/endocrinology item on modern guideline-directed medical therapy for diabetic kidney disease with finerenone.",
      "distractorExclusionNotes": "Excluded dual ACEi/ARB and aliskiren due to trial-proven nephrotoxicity and hyperkalemia; finerenone is the approved add-on.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
