import { CandidateSpec } from './types';

export const step3Batch9: CandidateSpec[] = [
  {
    "code": "op-c-s3-0201",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Adult Functional Asplenia Immunization Sequencing",
    "vignette": "A 24-year-old man with sickle cell anemia (HbSS) presents to an outpatient adult medicine clinic to establish primary care after moving from another state. He has had no acute pain crises or hospitalizations in the past 2 years. He had functional asplenia confirmed in early childhood due to recurrent splenic infarctions. His records show he completed all childhood vaccines up to age 18, including PPSV23 at age 5 and a booster at age 10, but has received no immunizations in adulthood. Physical examination shows mild scleral icterus, no splenomegaly, and no active stigmata of infection. Vital signs are normal. You review his preventive health needs. Which of the following is the most appropriate immunization management strategy for encapsulated bacteria at this visit?",
    "options": [
      "Administer 20-valent pneumococcal conjugate vaccine (PCV20) now; no subsequent PPSV23 is needed",
      "Administer 23-valent pneumococcal polysaccharide vaccine (PPSV23) alone, and repeat in 5 years",
      "Administer 15-valent pneumococcal conjugate vaccine (PCV15) today, followed by PPSV23 after 1 year",
      "Administer PPSV23 today, followed by PCV20 at least 8 weeks later",
      "Withhold pneumococcal vaccination because prior childhood PPSV23 series confers lifelong immunity"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Current ACIP guidelines recommend that adults aged 19-64 with immunocompromising conditions, including functional or anatomic asplenia, who have not previously received a conjugate vaccine in adulthood receive either PCV20 alone OR PCV15 followed by PPSV23 at least 8 weeks later. If PCV20 is administered, no subsequent PPSV23 dose is indicated, simplifying the schedule and providing robust mucosal and systemic T-cell-dependent immunity.",
      "B": "PPSV23 alone induces T-cell-independent antibody production without immunological memory, and current guidelines do not recommend polysaccharide monotherapy without prior or simultaneous conjugate coverage in asplenic adults.",
      "C": "When PCV15 is selected for high-risk immunocompromised individuals, the recommended interval to the subsequent PPSV23 dose is a minimum of 8 weeks, not 1 year. The 1-year interval applies to immunocompetent adults aged 65 and older.",
      "D": "Pneumococcal polysaccharide vaccine (PPSV23) should not precede conjugate vaccination, as polysaccharide-induced immune hyporesponsiveness can attenuate subsequent conjugate vaccine response. If PPSV23 was given first, one must wait at least 1 year before giving PCV20.",
      "E": "Prior childhood polysaccharide vaccination does not confer lifelong protection. Polysaccharide vaccine titers wane within 5 to 10 years and do not establish memory B-cell pools."
    },
    "learningObjective": "Formulate guideline-directed pneumococcal immunization regimens in adults with anatomic or functional asplenia using single-dose PCV20 or sequenced PCV15 followed by PPSV23 at an 8-week interval.",
    "necessaryInference": "Recognizing functional asplenia requires updated adult conjugate pneumococcal coverage. Under ACIP guidelines, a single dose of PCV20 eliminates the need for subsequent PPSV23.",
    "shortestValidSolution": "Adult asplenia without adult conjugate vaccine -> PCV20 alone (or PCV15 followed 8 weeks later by PPSV23).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/35085226/",
      "https://pubmed.ncbi.nlm.nih.gov/30422998/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recent ACIP guideline evolution moving from sequential PCV13+PPSV23 to PCV20 monotherapy in high-risk adult asplenia, requiring knowledge of timing intervals and conjugate advantages.",
      "distractorExclusionNotes": "PPSV23 alone is outdated; PCV15 requires 8-week (not 1-year) interval in asplenia; PPSV23 prior to PCV causes hyporesponsiveness.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0202",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Severe Osteoporosis Anabolic versus Antiresorptive Sequencing",
    "vignette": "A 68-year-old postmenopausal woman presents for osteoporosis management. Two months ago, she sustained a spontaneous T8 vertebral compression fracture while lifting a laundry basket, followed 3 weeks later by an atraumatic L2 compression fracture. Dual-energy X-ray absorptiometry (DXA) demonstrates a lumbar spine T-score of -3.7 and femoral neck T-score of -3.1. Serum calcium, 25-hydroxyvitamin D, PTH, creatinine, and alkaline phosphatase are normal, with no monoclonal protein on serum protein electrophoresis. She has never taken bone-active medications. She has moderate thoracic kyphosis and focal tenderness over the mid-thoracic spine. Which of the following is the most appropriate initial pharmacotherapy?",
    "options": [
      "Oral alendronate 70 mg weekly with calcium and vitamin D",
      "Subcutaneous teriparatide 20 mcg daily for up to 24 months, followed by an antiresorptive agent",
      "Intravenous zoledronic acid 5 mg annually as monotherapy",
      "Subcutaneous denosumab 60 mg every 6 months indefinitely without sequential therapy",
      "Raloxifene 60 mg daily orally"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Oral bisphosphonates are first-line for moderate osteoporosis, but in very high-risk patients (defined as T-score < -3.0 with multiple or recent vertebral fractures), clinical trials and Endocrine Society guidelines demonstrate that anabolic therapy first achieves significantly greater fracture risk reduction and bone mineral density gains than antiresorptive monotherapy.",
      "B": "Correct. In patients at very high risk of fracture (T-score < -3.0 and multiple/recent fragility fractures), guidelines recommend initiating an osteoanabolic agent (teriparatide, abaloparatide, or romosozumab) for 12 to 24 months, followed sequentially by an antiresorptive agent (bisphosphonate or denosumab) to maintain accrued bone mineral density. Starting with an antiresorptive blunts subsequent anabolic efficacy.",
      "C": "Zoledronic acid is a potent antiresorptive, but starting an antiresorptive in severe, imminent-fracture disease fails to exploit the robust bone-forming 'anabolic window' that exists before antiresorptive suppression of remodeling.",
      "D": "Denosumab provides antiresorptive coverage, but stopping denosumab leads to rapid bone loss and a rebound cascade of multiple vertebral fractures. Anabolic-first sequencing is superior in very high-risk disease.",
      "E": "Raloxifene reduces vertebral fractures in milder postmenopausal osteopenia/osteoporosis but has no demonstrated efficacy against hip or non-vertebral fractures and is inadequate for severe high-risk disease."
    },
    "learningObjective": "Differentiate therapeutic sequencing in very high-risk osteoporosis, selecting an anabolic agent prior to antiresorptive consolidation to maximize bone architecture restoration.",
    "necessaryInference": "T-score -3.7 with multiple spontaneous vertebral fractures constitutes 'very high fracture risk'. Guideline evidence dictates starting anabolic therapy first before locking in gains with an antiresorptive.",
    "shortestValidSolution": "Very high fracture risk (recent multiple vertebral fractures, T < -3.5) -> Anabolic therapy first (teriparatide) followed by antiresorptive.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/32470691/",
      "https://pubmed.ncbi.nlm.nih.gov/30903332/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates understanding of fracture risk stratification (Endocrine Society/AACE 2020 guidelines) where very high-risk patients require anabolic-first sequencing rather than standard bisphosphonate monotherapy.",
      "distractorExclusionNotes": "Bisphosphonates are appropriate for moderate risk, not very high risk with recurrent fractures; raloxifene lacks nonvertebral efficacy; denosumab without planned transition has rebound risk.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0203",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "CKD-MBD Non-Calcium Phosphate Binder Selection",
    "vignette": "A 56-year-old man with stage 4 chronic kidney disease secondary to diabetic nephropathy (baseline eGFR 22 mL/min/1.73 m2) presents for routine evaluation. He is asymptomatic. Blood pressure is 132/78 mm Hg. Laboratory studies show: serum creatinine 3.1 mg/dL, serum calcium 9.9 mg/dL, serum phosphate 6.2 mg/dL (normal: 2.5-4.5), intact PTH 280 pg/mL (target for stage 4: ~70-110), 25-hydroxyvitamin D 34 ng/mL, and spot urine albumin-to-creatinine ratio 420 mg/g. Lateral abdominal radiograph shows prominent calcification of the abdominal aorta. Dietary dietary phosphate counseling has already been initiated. Which of the following is the most appropriate next step in managing his mineral and bone disorder?",
    "options": [
      "Initiate oral calcium carbonate 500 mg with each meal",
      "Initiate oral calcitriol 0.25 mcg daily",
      "Initiate oral sevelamer carbonate 800 mg with each meal",
      "Initiate cinacalcet 30 mg daily orally",
      "No pharmacotherapy; continue dietary phosphate restriction alone until hemodialysis is initiated"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Calcium carbonate binds intestinal phosphate, but KDIGO guidelines explicitly recommend restricting calcium-based phosphate binders in patients with hypercalcemia, vascular calcification, or persistently normal-high serum calcium (patient is 9.9 mg/dL with visible aortic calcification), as exogenous calcium accelerates vascular and valvular calcification.",
      "B": "Calcitriol suppresses PTH but increases intestinal absorption of both calcium and phosphate, which would exacerbate hyperphosphatemia (6.2 mg/dL) and accelerate vascular calcification in this patient with baseline calcium at the upper normal limit.",
      "C": "Correct. In non-dialysis CKD stage 4-5 with persistent hyperphosphatemia despite dietary restriction, phosphate binders are indicated. Non-calcium-based binders (such as sevelamer carbonate or lanthanum carbonate) are strongly preferred over calcium-based binders in patients with existing vascular calcification or calcium levels in the high-normal range to prevent positive calcium balance and cardiovascular mineralization.",
      "D": "Cinacalcet (a calcimimetic) is FDA-approved for secondary hyperparathyroidism in patients on dialysis (CKD stage 5D). It is not approved or recommended for non-dialysis CKD due to a high risk of unmonitored hypocalcemia and lack of demonstrable outcome benefits.",
      "E": "Persistently elevated phosphate (6.2 mg/dL) in stage 4 CKD promotes vascular calcification, secondary hyperparathyroidism, and increased mortality. When dietary restriction fails, binder therapy is necessary."
    },
    "learningObjective": "Select non-calcium phosphate binders (e.g., sevelamer) in CKD stage 4-5 patients with hyperphosphatemia and vascular calcification to prevent accelerated cardiovascular calcification.",
    "necessaryInference": "CKD stage 4 + hyperphosphatemia + existing vascular calcification + normal-high calcium -> Avoid calcium-based binders and calcitriol; select non-calcium phosphate binder (sevelamer). Cinacalcet is reserved for dialysis.",
    "shortestValidSolution": "Stage 4 CKD + high phosphate + aortic calcification -> Sevelamer carbonate.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/28734898/",
      "https://pubmed.ncbi.nlm.nih.gov/28734897/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires synthesis of KDIGO CKD-MBD guidelines distinguishing non-dialysis CKD from dialysis CKD, and calcium-based vs non-calcium binders based on vascular calcification evidence.",
      "distractorExclusionNotes": "Calcium carbonate worsens vascular calcification; calcitriol increases phosphate and calcium absorption; cinacalcet is not indicated in non-dialysis CKD.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0204",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Diabetic Kidney Disease Nonsteroidal MRA Finerenone Indication",
    "vignette": "A 61-year-old man with a 14-year history of type 2 diabetes mellitus and chronic kidney disease presents for follow-up. Current medications are metformin 1,000 mg daily, empagliflozin 10 mg daily, atorvastatin 40 mg daily, and losartan 100 mg daily (maximum tolerated dose). He adheres strictly to his diet and medications. Blood pressure is 128/76 mm Hg, pulse 70/min, and BMI is 28 kg/m2. Laboratory studies reveal: HbA1c 7.1%, serum creatinine 1.7 mg/dL (baseline 1.6 mg/dL; eGFR 44 mL/min/1.73 m2), serum potassium 4.4 mEq/L, and repeat urine albumin-to-creatinine ratio (UACR) 480 mg/g (previously 510 mg/g). Which of the following is the most appropriate pharmacologic addition to reduce his risk of CKD progression and cardiovascular events?",
    "options": [
      "Add spironolactone 25 mg daily",
      "Add benazepril 20 mg daily to achieve dual renin-angiotensin-aldosterone blockade",
      "Discontinue empagliflozin and initiate semaglutide monotherapy",
      "Add finerenone 10 mg daily orally with monitoring of serum potassium at 4 weeks",
      "Add fenofibrate 145 mg daily"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Spironolactone is a steroidal MRA with a significantly higher risk of hyperkalemia and gynecomastia than finerenone, and lacks the large-scale randomized clinical trial evidence (FIDELIO-DKD/FIGARO-DKD) establishing specific cardiorenal outcomes in diabetic nephropathy.",
      "B": "Dual RAAS blockade combining an ACE inhibitor (benazepril) and an ARB (losartan) is strongly contraindicated (demonstrated by ONTARGET and VA NEPHRON-D) due to increased risks of hyperkalemia, acute kidney injury, and syncope without added clinical benefit.",
      "C": "Empagliflozin confers proven renal and cardiovascular risk reduction in diabetic kidney disease and should be continued. GLP-1 receptor agonists can be combined with SGLT2 inhibitors rather than replacing them.",
      "D": "Correct. In patients with type 2 diabetes and chronic kidney disease with persistent albuminuria (UACR > 30 mg/g, here 480 mg/g) and eGFR >= 25 mL/min/1.73 m2 on maximally tolerated doses of ACE inhibitor/ARB and SGLT2 inhibitor, ADA and KDIGO guidelines recommend adding the nonsteroidal mineralocorticoid receptor antagonist finerenone (FIDELIO-DKD and FIGARO-DKD trials) to slow CKD progression and reduce cardiovascular events, with potassium monitoring.",
      "E": "Fenofibrate reduces microvascular complications (retinopathy) modestly in some trials but does not reduce primary renal composite outcomes or cardiovascular mortality in diabetic CKD."
    },
    "learningObjective": "Identify indications for nonsteroidal mineralocorticoid receptor antagonist (finerenone) therapy in type 2 diabetes with chronic kidney disease and persistent albuminuria despite optimal ACEi/ARB and SGLT2i therapy.",
    "necessaryInference": "Patient has persistent albuminuria despite maximally tolerated ARB + SGLT2 inhibitor. Adding nonsteroidal MRA (finerenone) reduces cardiorenal risk; dual ACEi+ARB is contraindicated.",
    "shortestValidSolution": "T2D + CKD with persistent albuminuria on ARB + SGLT2i -> Add finerenone.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/33090726/",
      "https://pubmed.ncbi.nlm.nih.gov/36384877/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Reflects modern consensus guidelines (ADA 2023/KDIGO 2023) integrating nonsteroidal MRAs as 4th pillar in diabetic kidney disease alongside statin, SGLT2i, and maximally tolerated RAAS inhibitor.",
      "distractorExclusionNotes": "Dual ACEi+ARB causes harm; spironolactone carries excessive hyperkalemia without equal trial evidence in DKD; SGLT2i should not be stopped.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0205",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Resistant Hypertension 4th-Line Agent Selection",
    "vignette": "A 58-year-old woman returns to clinic for follow-up of persistent hypertension. She is taking amlodipine 10 mg daily, olmesartan 40 mg daily, and chlorthalidone 25 mg daily. Medication adherence is confirmed through electronic refill records and home pill counts. Home blood pressure measurements average 154/92 mm Hg, and today's clinic blood pressure is 156/94 mm Hg (confirmed with automated oscillometric protocol). Secondary causes including renal artery stenosis, Cushing syndrome, obstructive sleep apnea, and primary hyperaldosteronism have been evaluated and excluded. Physical examination is unremarkable with no peripheral edema. Laboratory studies show: serum sodium 140 mEq/L, potassium 4.1 mEq/L, blood urea nitrogen 16 mg/dL, serum creatinine 0.9 mg/dL (eGFR > 90 mL/min/1.73 m2), and normal urinalysis. Which of the following is the most appropriate next pharmacologic step?",
    "options": [
      "Add clonidine 0.1 mg twice daily",
      "Add atenolol 50 mg daily",
      "Add hydralazine 25 mg three times daily",
      "Increase chlorthalidone to 50 mg daily",
      "Add spironolactone 25 mg daily orally"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Clonidine is a centrally acting alpha-2 agonist with substantial central nervous system side effects (sedation, dry mouth) and a notorious risk of severe rebound hypertensive crisis upon missed doses; it is a late-line alternative, not the preferred 4th-line agent.",
      "B": "Beta-blockers (such as atenolol) are not recommended as 4th-line agents for resistant hypertension unless there is a compelling indication such as ischemic heart disease or reduced ejection fraction heart failure.",
      "C": "Hydralazine is a direct vasodilator that induces reflex tachycardia and secondary fluid retention; it is reserved for refractory cases failing mineralocorticoid receptor antagonists.",
      "D": "Increasing chlorthalidone from 25 mg to 50 mg provides minimal additional blood pressure lowering while significantly increasing the risks of hypokalemia, hyponatremia, and hyperuricemia.",
      "E": "Correct. The PATHWAY-2 trial and AHA/ACC guidelines establish spironolactone (12.5-25 mg daily) as the preferred, most effective fourth-line agent for confirmed resistant hypertension (uncontrolled on a three-drug regimen including an ARB/ACEi, CCB, and thiazide-like diuretic), provided serum potassium is < 4.5 mEq/L and eGFR > 45 mL/min."
    },
    "learningObjective": "Select low-dose spironolactone as the superior evidence-based fourth-line medication for resistant hypertension when eGFR and serum potassium permit.",
    "necessaryInference": "Hypertension uncontrolled on optimal triple therapy (ARB + CCB + thiazide diuretic) meets criteria for resistant hypertension. Evidence from PATHWAY-2 establishes spironolactone as the most effective 4th-line agent.",
    "shortestValidSolution": "Resistant HTN on optimal 3-drug regimen with normal K+ and eGFR -> Add low-dose spironolactone.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/26399477/",
      "https://pubmed.ncbi.nlm.nih.gov/29158572/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests management of true resistant hypertension and knowledge of the PATHWAY-2 trial establishing mineralocorticoid receptor antagonism as superior to beta-blockers or alpha-blockers.",
      "distractorExclusionNotes": "Clonidine has high rebound risk; increasing chlorthalidone has low therapeutic yield and high toxicity; hydralazine triggers reflex sympathetic activation; beta-blockers lack efficacy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0206",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Severe Hypertriglyceridemia Pancreatitis Prevention Strategy",
    "vignette": "A 43-year-old man presents to the clinic after a routine executive physical examination revealed a milky appearance of his blood sample. He reports mild postprandial epigastric discomfort but no persistent abdominal pain, nausea, or vomiting. He drinks 2 to 3 beers per week. Physical examination reveals multiple 2- to 4-mm yellowish papules with erythematous bases on his extensor surfaces (elbows and buttocks) and lipemia retinalis on funduscopy. Abdominal examination is soft and non-tender without guarding. Serum lipase is 42 U/L (normal: 10-140). Fasting lipid panel demonstrates: total cholesterol 420 mg/dL, triglycerides 1,680 mg/dL, HDL cholesterol 24 mg/dL, and LDL cholesterol cannot be calculated. Fasting glucose is 118 mg/dL. Which of the following is the most appropriate immediate pharmacotherapy to prevent acute pancreatitis?",
    "options": [
      "Initiate fenofibrate 145 mg daily orally",
      "Initiate atorvastatin 80 mg daily orally as monotherapy",
      "Admit to intensive care for continuous intravenous regular insulin infusion",
      "Initiate ezetimibe 10 mg daily orally",
      "Initiate extended-release niacin 1,000 mg daily orally"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. When fasting triglycerides exceed 1,000 mg/dL (severe hypertriglyceridemia), the immediate primary clinical objective is preventing acute hypertriglyceridemic necrotizing pancreatitis. First-line pharmacotherapy is a fibrate (fenofibrate) along with strict dietary fat restriction (< 15-20% of total calories) and complete alcohol cessation. Statins can be added later for cardiovascular risk once triglycerides are controlled.",
      "B": "Statins reduce triglycerides modestly (15-30%) and are primary therapy when triglycerides are 150-499 mg/dL to reduce atherosclerotic cardiovascular disease, but statin monotherapy is inadequate when triglycerides exceed 1,000 mg/dL to prevent acute pancreatitis.",
      "C": "Intravenous insulin infusion stimulates lipoprotein lipase and rapidly lowers triglycerides, but it is indicated for patients with acute hypertriglyceridemic pancreatitis (elevated lipase, severe abdominal pain, systemic inflammation) or diabetic ketoacidosis, not stable outpatients without pancreatitis.",
      "D": "Ezetimibe inhibits cholesterol absorption at the brush border and primarily lowers LDL cholesterol with negligible effects on triglyceride levels.",
      "E": "Niacin lowers triglycerides, but clinical trials (AIM-HIGH, HPS2-THRIVE) showed increased adverse events (flushing, hepatotoxicity, hyperglycemia) without clinical benefit, making fibrates clearly preferred."
    },
    "learningObjective": "Prioritize immediate fibrate initiation over statin monotherapy for severe hypertriglyceridemia (> 1,000 mg/dL) to avert acute pancreatitis.",
    "necessaryInference": "Triglycerides > 1,000 mg/dL with eruptive xanthomas and lipemia retinalis in an asymptomatic/stable patient -> Immediate risk is pancreatitis, not atherosclerotic events. First-line agent is a fibrate (fenofibrate).",
    "shortestValidSolution": "Asymptomatic TG > 1,000 mg/dL -> Initiate fenofibrate to prevent acute pancreatitis.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30422960/",
      "https://pubmed.ncbi.nlm.nih.gov/22983935/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates statin indication for moderate hypertriglyceridemia (ASCVD prevention) from fibrate indication for severe hypertriglyceridemia (pancreatitis prevention) and avoids inappropriate ICU admission.",
      "distractorExclusionNotes": "IV insulin is indicated for acute pancreatitis, not stable outpatients; statin monotherapy has insufficient triglyceride lowering; ezetimibe lacks triglyceride efficacy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0207",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Subclinical Hypothyroidism Treatment Threshold",
    "vignette": "A 52-year-old woman presents to her primary care physician for evaluation of mild fatigue and constipation over the past 4 months. She has no past medical history and takes no medications. On physical examination, blood pressure is 126/82 mm Hg, pulse 64/min, and BMI is 25 kg/m2. The thyroid gland is normal in size and non-tender without palpable nodules. Serum thyroid-stimulating hormone (TSH) is 12.8 mIU/L (normal: 0.4-4.5) and free thyroxine (free T4) is 1.1 ng/dL (normal: 0.8-1.8). Repeat testing 6 weeks later confirms TSH 13.2 mIU/L with free T4 1.0 ng/dL. Serum anti-thyroperoxidase (anti-TPO) antibodies are elevated at 240 IU/mL. Serum calcium, glucose, and complete blood count are normal. Which of the following is the most appropriate management?",
    "options": [
      "Recheck TSH and free T4 in 6 months without medical therapy",
      "Initiate oral levothyroxine 50 mcg daily",
      "Perform a fine-needle aspiration biopsy of the thyroid gland",
      "Initiate desiccated thyroid extract (Armour Thyroid) 60 mg daily",
      "Administer oral liothyronine (T3) monotherapy"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Observation is appropriate for mild subclinical hypothyroidism (TSH < 10 mIU/L) in asymptomatic patients without cardiovascular disease. However, when TSH is persistently >= 10 mIU/L, consensus guidelines recommend treatment due to the high rate of progression to overt hypothyroidism and increased risk of cardiovascular morbidity and heart failure.",
      "B": "Correct. According to American Thyroid Association (ATA) and European Thyroid Association (ETA) guidelines, treatment of subclinical hypothyroidism is definitively indicated when confirmed TSH is >= 10.0 mIU/L, regardless of symptoms, to reduce cardiovascular risk, improve symptoms, and halt progression to overt disease. The presence of positive anti-TPO antibodies further increases the annual risk of progression to overt hypothyroidism.",
      "C": "Thyroid biopsy is indicated for suspicious thyroid nodules on ultrasound, not for diffuse autoimmune thyroiditis with normal gland palpation.",
      "D": "Desiccated thyroid extract contains supraphysiologic and variable ratios of T3 to T4, leading to wide fluctuations in serum T3 and risk of iatrogenic cardiac arrhythmias; synthetic levothyroxine is the standard of care.",
      "E": "T3 monotherapy (liothyronine) has a short half-life causing peak-and-trough spikes and is not recommended as standard replacement therapy."
    },
    "learningObjective": "Apply guideline thresholds (TSH >= 10 mIU/L) to initiate levothyroxine therapy in subclinical hypothyroidism to prevent adverse cardiovascular outcomes and overt disease.",
    "necessaryInference": "Confirmed TSH >= 10 mIU/L with normal free T4 meets the established threshold for starting levothyroxine therapy, bolstered by positive anti-TPO antibodies.",
    "shortestValidSolution": "Confirmed TSH >= 10 mIU/L with normal T4 -> Initiate levothyroxine.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22962880/",
      "https://pubmed.ncbi.nlm.nih.gov/31599818/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates conservative observation in TSH 4.5-9.9 from mandatory intervention threshold at TSH >= 10 mIU/L based on ATA guidelines.",
      "distractorExclusionNotes": "Observation is wrong because TSH is >= 10; thyroid biopsy is unindicated without nodules; desiccated thyroid extract and T3 monotherapy are substandard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0208",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Acute Gout Flare in Severe CKD and Peptic Ulcer Disease",
    "vignette": "A 66-year-old man presents with acute, severe pain, swelling, and redness of his left first metatarsophalangeal (MTP) joint that woke him from sleep 12 hours ago. He cannot tolerate putting a bedsheet over his foot. Medical history includes stage 4 chronic kidney disease (baseline creatinine 2.8 mg/dL, eGFR 24 mL/min/1.73 m2), hypertension, and a bleeding duodenal ulcer 3 months ago treated endoscopically. Current medications are amlodipine and carvedilol. Physical examination shows an exquisitely tender, erythematous, swollen, warm left first MTP joint. Synovial fluid aspiration confirms negatively birefringent, needle-shaped intracellular crystals, with a white cell count of 35,000/mm3 and no microorganisms on Gram stain. Serum uric acid is 8.8 mg/dL. Which of the following is the most appropriate immediate treatment for this acute flare?",
    "options": [
      "Initiate indomethacin 50 mg three times daily orally",
      "Initiate colchicine 1.2 mg followed by 0.6 mg one hour later",
      "Administer intra-articular triamcinolone acetonide injection (or short-course oral prednisone)",
      "Initiate allopurinol 100 mg daily immediately",
      "Administer intravenous rasburicase 0.2 mg/kg"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "NSAIDs (including indomethacin) are strictly contraindicated in patients with severe CKD (eGFR < 30) due to hemodynamic AKI risk, as well as in patients with recent peptic ulcer hemorrhage.",
      "B": "Colchicine is eliminated renally and via hepatic P-glycoprotein/CYP3A4; in stage 4 CKD (eGFR < 30), standard dosing carries a high risk of fatal neuromyopathy and bone marrow suppression. While reduced dosing can occasionally be used, glucocorticoids are vastly safer.",
      "C": "Correct. In patients with an acute monoarticular gout flare who have severe renal impairment (eGFR < 30 mL/min/1.73 m2) and active or recent peptic ulcer disease, both NSAIDs and colchicine are contraindicated or hazardous. The ACR guidelines recommend intra-articular corticosteroid injection (for accessible joints) or a short course of oral systemic corticosteroids (e.g., prednisone) as the safest and most effective first-line therapy.",
      "D": "Urate-lowering therapy (allopurinol) should not be initiated de novo during an acute flare without anti-inflammatory prophylaxis, as acute shifts in serum urate prolong and worsen articular inflammation.",
      "E": "Rasburicase is indicated for acute hyperuricemia in tumor lysis syndrome, not for gouty arthritis."
    },
    "learningObjective": "Select intra-articular or oral corticosteroids for acute gout flares when NSAIDs and colchicine are contraindicated by severe renal impairment and recent gastrointestinal bleeding.",
    "necessaryInference": "Acute gout flare with dual contraindications (stage 4 CKD prohibits NSAIDs/makes colchicine toxic; recent ulcer prohibits NSAIDs). Corticosteroids (intra-articular or short-course oral) are the only safe first-line choice.",
    "shortestValidSolution": "Acute gout flare + stage 4 CKD + recent bleeding ulcer -> Corticosteroid therapy.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/32391934/",
      "https://pubmed.ncbi.nlm.nih.gov/23018991/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Navigates multi-morbidity contraindication grid (stage 4 CKD eliminates NSAIDs and makes colchicine high-risk; ulcer eliminates NSAIDs), leaving corticosteroid injection/systemic steroids.",
      "distractorExclusionNotes": "Indomethacin causes ulcer recurrence and AKI; colchicine accumulates in CKD 4; allopurinol should not be started alone during acute flare.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0209",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Anemia of CKD Absolute Iron Deficiency Repletion Strategy",
    "vignette": "A 63-year-old woman with stage 4 CKD secondary to hypertensive nephrosclerosis (baseline eGFR 24 mL/min/1.73 m2) presents with progressive exertional fatigue and dyspnea climbing stairs. Blood pressure is 134/82 mm Hg, pulse 76/min. Cardiopulmonary examination is normal. Laboratory evaluation demonstrates: hemoglobin 8.6 g/dL (normocytic, normochromic; baseline 10.8 g/dL 6 months ago), MCV 88 fL, reticulocyte count 0.8%, serum ferritin 68 ng/mL (normal: 15-200), and transferrin saturation (TSAT) 14% (normal: 20-50%). Fecal occult blood testing is negative. Serum B12 and folate are normal. Which of the following is the most appropriate initial management of her anemia?",
    "options": [
      "Initiate subcutaneous darbepoetin alfa 0.75 mcg/kg every 2 weeks immediately",
      "Transfuse 2 units of packed red blood cells",
      "Initiate oral ferrous sulfate 325 mg three times daily with meals",
      "Administer intravenous iron sucrose repletion prior to evaluating need for an erythropoiesis-stimulating agent",
      "Prescribe oral folic acid 1 mg daily and recheck hemoglobin in 3 months"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Initiating an erythropoiesis-stimulating agent (ESA) such as darbepoetin when TSAT is < 20% and ferritin < 100 ng/mL is ineffective ('iron-deficient erythropoiesis') and exposes the patient to ESA-related cardiovascular toxicities and thromboembolic risks without raising hemoglobin.",
      "B": "Blood transfusion should be avoided in non-bleeding, hemodynamically stable CKD patients to prevent HLA sensitization that could jeopardize future renal transplantation, as well as volume overload and iron toxicity.",
      "C": "Oral iron has poor gastrointestinal absorption and poor tolerability in stage 4-5 CKD due to high circulating hepcidin levels that block ferroportin. Clinical trials (FIND-CKD, PIVOTAL) show intravenous iron is significantly superior in achieving target iron indices and sparing ESA requirements.",
      "D": "Correct. According to KDIGO guidelines, iron status must be evaluated and corrected prior to or in conjunction with ESA therapy. When TSAT is <= 30% and ferritin is <= 500 ng/mL with clinical anemia, a trial of iron is indicated; in stage 4-5 CKD, intravenous iron is the preferred route because hepcidin blocks intestinal iron absorption. Repleting iron stores alone often corrects anemia and avoids ESA exposure.",
      "E": "Serum folate is normal and the anemia is normocytic; folic acid will not correct iron deficiency or erythropoietin deficiency."
    },
    "learningObjective": "Prioritize intravenous iron repletion over immediate ESA therapy in stage 4 CKD patients with absolute iron deficiency (TSAT < 20%, ferritin < 100 ng/mL).",
    "necessaryInference": "CKD stage 4 patient has TSAT 14% and ferritin 68 ng/mL, indicating absolute iron deficiency in CKD. High hepcidin impairs oral iron absorption. IV iron must be given before initiating ESA therapy.",
    "shortestValidSolution": "CKD 4 + TSAT < 20% + ferritin < 100 -> IV iron repletion first.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/23743477/",
      "https://pubmed.ncbi.nlm.nih.gov/30365356/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests KDIGO anemia guidelines distinguishing oral vs IV iron in advanced CKD and understanding why ESAs fail when iron indices are subtherapeutic (hepcidin physiology).",
      "distractorExclusionNotes": "ESA monotherapy without iron fails and carries thrombosis risk; oral iron is blocked by hepcidin in CKD 4; transfusions cause HLA sensitization; folate is unindicated.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0210",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Refractory Helicobacter Pylori Salvage Regimen",
    "vignette": "A 48-year-old woman presents for follow-up of persistent dyspepsia. Four months ago, she was diagnosed with Helicobacter pylori gastritis by positive stool antigen testing. She was treated with a 14-day course of clarithromycin, amoxicillin, and omeprazole, which she completed without missing doses. Repeat stool antigen testing performed 8 weeks after completing antimicrobial therapy (and 4 weeks after stopping all proton pump inhibitors) remains positive for H. pylori. She has no drug allergies. Physical examination shows mild epigastric tenderness without rebound or involuntary guarding. Which of the following is the most appropriate next therapeutic regimen?",
    "options": [
      "Repeat the same 14-day clarithromycin triple therapy regimen with high-dose esomeprazole",
      "Initiate 10-day dual therapy with amoxicillin and high-dose omeprazole",
      "Initiate 14-day ciprofloxacin, amoxicillin, and omeprazole triple therapy",
      "Initiate 14-day sequential therapy with amoxicillin followed by clarithromycin and tinidazole",
      "Initiate 14-day bismuth quadruple therapy (bismuth subcitrate, metronidazole, tetracycline, and a proton pump inhibitor)"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Repeating clarithromycin after treatment failure is contraindicated because failure almost universally selects for point mutations in the 23S rRNA gene conferring irreversible macrolide resistance.",
      "B": "High-dose dual amoxicillin-PPI therapy has niche salvage uses in specialized Asian populations, but ACG guidelines recommend bismuth quadruple therapy as the primary evidence-based salvage regimen.",
      "C": "Ciprofloxacin (or levofloxacin) triple therapy has high failure rates due to widespread primary and acquired fluoroquinolone resistance and is associated with FDA black box warnings regarding tendon and aortic toxicities.",
      "D": "Sequential therapy containing clarithromycin will fail because the organism is already clarithromycin-resistant.",
      "E": "Correct. According to American College of Gastroenterology (ACG) guidelines on H. pylori management, patients who fail a clarithromycin-containing triple therapy regimen should be assumed to harbor clarithromycin-resistant strains. The preferred salvage regimen is 14 days of bismuth quadruple therapy: bismuth subcitrate (or subsalicylate), metronidazole, tetracycline, and a potent PPI. Bismuth overcomes resistance and metronidazole resistance is clinically overcome by combination synergy."
    },
    "learningObjective": "Select 14-day bismuth quadruple therapy as the preferred salvage regimen for refractory Helicobacter pylori infection following clarithromycin triple therapy failure.",
    "necessaryInference": "Treatment failure after clarithromycin triple therapy implies 23S rRNA macrolide resistance. Repeating clarithromycin is useless. ACG guidelines mandate bismuth quadruple therapy.",
    "shortestValidSolution": "Failed clarithromycin triple therapy -> 14-day bismuth quadruple therapy.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/28071659/",
      "https://pubmed.ncbi.nlm.nih.gov/29969476/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires knowledge of microbiological resistance mechanisms (macrolide point mutations) and ACG guideline salvage hierarchy.",
      "distractorExclusionNotes": "Re-using clarithromycin guarantees failure due to acquired resistance; fluoroquinolones have high resistance and adverse risks; dual therapy is unproven first-line salvage.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0211",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Chronic Hepatitis B Treatment Initiation Thresholds",
    "vignette": "A 38-year-old man from Southeast Asia presents to an adult medicine clinic for evaluation of chronic hepatitis B infection diagnosed during a visa medical screening 1 year ago. He is asymptomatic. Physical examination reveals no stigmata of chronic liver disease (no spider angiomas, palmar erythema, or hepatosplenomegaly). Laboratory studies show: ALT 94 U/L (reference: 10-40), AST 78 U/L (reference: 10-35), total bilirubin 0.8 mg/dL, alkaline phosphatase 82 U/L, albumin 4.2 g/dL, INR 1.0, and platelets 215,000/mm3. Serologies demonstrate: HBsAg positive, HBeAg positive, anti-HBe negative, and HBV DNA level 2,400,000 IU/mL. Transient elastography reveals a liver stiffness of 8.4 kPa (consistent with F2 significant fibrosis). Which of the following is the most appropriate management at this time?",
    "options": [
      "Initiate oral tenofovir disoproxil fumarate (or entecavir) therapy",
      "Continue observation with serial liver function tests and HBV DNA every 6 months without medication",
      "Perform a percutaneous liver biopsy before considering antiviral therapy",
      "Administer a 48-week course of pegylated interferon alfa-2a monotherapy as the mandatory first-line agent",
      "Initiate oral lamivudine 100 mg daily"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to AASLD guidelines, treatment of chronic hepatitis B is recommended in HBeAg-positive patients with immune-active disease, defined as elevated ALT (> 2 times the upper limit of normal) and HBV DNA > 20,000 IU/mL, especially with non-invasive evidence of significant fibrosis (F2, stiffness 8.4 kPa). First-line therapy consists of oral nucleos(t)ide analogs with a high barrier to resistance: tenofovir disoproxil fumarate (TDF), tenofovir alafenamide (TAF), or entecavir.",
      "B": "Observation is reserved for patients in the immune-tolerant phase (normal ALT despite high HBV DNA) or inactive carriers (normal ALT, HBV DNA < 2,000 IU/mL). Active hepatocellular injury (ALT > 2x ULN) and high viral load with fibrosis mandate antiviral therapy to prevent cirrhosis and HCC.",
      "C": "Liver biopsy is unnecessary when non-invasive transient elastography confirms significant fibrosis (F2) and biochemical/virological criteria for treatment are fully met.",
      "D": "Pegylated interferon is an alternative with finite duration, but oral nucleos(t)ide analogs (tenofovir/entecavir) are vastly preferred due to superior tolerability and lack of interferon side effects (depression, cytopenias, flu-like symptoms).",
      "E": "Lamivudine is obsolete as first-line therapy due to an unacceptable rate of YMDD mutation resistance (> 70% at 5 years)."
    },
    "learningObjective": "Apply AASLD criteria (ALT > 2x ULN and HBV DNA > 20,000 IU/mL) to initiate high-barrier oral nucleos(t)ide analog therapy (tenofovir or entecavir) in immune-active chronic hepatitis B.",
    "necessaryInference": "HBeAg positive + ALT > 2x ULN + HBV DNA > 2,000,000 IU/mL + F2 fibrosis = Immune-active chronic hepatitis B. Treatment is indicated with a high-barrier agent (tenofovir or entecavir).",
    "shortestValidSolution": "Chronic HBV with ALT > 2x ULN and DNA > 20,000 IU/mL -> Initiate tenofovir or entecavir.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/29405329/",
      "https://pubmed.ncbi.nlm.nih.gov/28443906/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Distinguishes immune-active phase requiring therapy from immune-tolerant or inactive carrier phases, and requires selection of high-barrier oral agents over obsolete lamivudine.",
      "distractorExclusionNotes": "Observation allows progression to cirrhosis; biopsy is redundant given transient elastography; pegylated interferon has excessive toxicities; lamivudine has rapid resistance.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0212",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "MASLD FIB-4 Risk Stratification and Next Step",
    "vignette": "A 54-year-old woman with obesity (BMI 34 kg/m2), dyslipidemia, and type 2 diabetes mellitus is evaluated during a routine health maintenance visit. She drinks no alcohol. Abdominal ultrasound performed for vague discomfort reveals diffuse hepatic steatosis without focal lesions or biliary dilatation. Laboratory results show: AST 48 U/L, ALT 54 U/L, platelets 162,000/mm3, and total bilirubin 0.9 mg/dL. Her calculated Fibrosis-4 (FIB-4) index is 2.74 (low risk: < 1.30; high risk: > 2.67). Physical examination shows central adiposity, no splenomegaly, and no spider nevi or peripheral edema. Which of the following is the most appropriate next step in clinical management?",
    "options": [
      "Reassure the patient and repeat liver enzymes and FIB-4 calculation in 3 years",
      "Perform vibration-controlled transient elastography (FibroScan) or referral for liver stiffness measurement",
      "Schedule immediate laparoscopic wedge liver biopsy",
      "Initiate oral ursodeoxycholic acid 300 mg three times daily",
      "Refer for emergent transjugular intrahepatic portosystemic shunt (TIPS) evaluation"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Observation and repeating FIB-4 in 2-3 years is appropriate only for low-risk patients (FIB-4 < 1.30). A FIB-4 score of 2.74 places her in the high-risk category for advanced fibrosis (F3-F4) and demands second-tier evaluation.",
      "B": "Correct. According to AGA and AASLD clinical practice guidelines for metabolic dysfunction-associated steatotic liver disease (MASLD/MASH), patients with an indeterminate or high FIB-4 index (> 2.67) should undergo a second-line non-invasive test for fibrosis, specifically vibration-controlled transient elastography (VCTE) or magnetic resonance elastography (MRE), and be referred to a gastroenterologist/hepatologist to stage disease and assess for cirrhosis.",
      "C": "Liver biopsy is invasive and is not the immediate next step before non-invasive elastography has confirmed elevated liver stiffness.",
      "D": "Ursodeoxycholic acid has no proven histological or antifibrotic efficacy in MASLD/MASH and is not recommended by guidelines.",
      "E": "TIPS is indicated for refractory ascites or recurrent variceal hemorrhage in decompensated cirrhosis with portal hypertension, neither of which is present here."
    },
    "learningObjective": "Apply stepwise non-invasive fibrosis assessment in MASLD: utilize vibration-controlled transient elastography (VCTE) when the primary screening FIB-4 index is high (> 2.67).",
    "necessaryInference": "MASLD with high FIB-4 score (> 2.67) indicates high risk of advanced fibrosis (F3-F4). Guideline pathway requires second-line non-invasive elastography (VCTE/FibroScan) before considering invasive biopsy.",
    "shortestValidSolution": "High FIB-4 (> 2.67) in MASLD -> Vibration-controlled transient elastography (VCTE).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/36384877/",
      "https://pubmed.ncbi.nlm.nih.gov/34537207/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates modern MASLD/MASH guidelines on two-tier non-invasive risk stratification (FIB-4 primary care screening followed by elastography).",
      "distractorExclusionNotes": "Delaying 3 years is dangerous with high FIB-4; liver biopsy is invasive before VCTE; UDCA lacks efficacy; TIPS is for decompensated portal hypertension.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0213",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Barrett Esophagus High-Grade Dysplasia Endoscopic Eradication",
    "vignette": "A 62-year-old man with a 15-year history of gastroesophageal reflux disease undergoes routine surveillance upper endoscopy for known long-segment Barrett esophagus (C4M6). High-definition white-light endoscopy with narrow-band imaging shows salmon-colored mucosa without visible nodules, ulcerations, or mucosal irregularity. Four-quadrant biopsies taken every 1 cm demonstrate high-grade dysplasia (HGD) confirmed by two independent expert gastrointestinal pathologists. He is taking omeprazole 40 mg twice daily. He is asymptomatic and functionally active. Which of the following is the most appropriate next step in management?",
    "options": [
      "Repeat surveillance endoscopy with biopsies in 3 months",
      "Refer for transthoracic esophagectomy with lymph node dissection",
      "Perform endoscopic eradication therapy with radiofrequency ablation (RFA)",
      "Initiate high-dose oral sucralfate suspension and re-biopsy in 6 months",
      "Refer for external beam radiation therapy"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Surveillance alone without therapeutic intervention in confirmed high-grade dysplasia carries an annual progression rate to invasive esophageal adenocarcinoma of approximately 6-10% and is considered substandard care.",
      "B": "Surgical esophagectomy was historical standard care but carries high operative morbidity (30-50%) and mortality (2-5%). Modern ACG and AGA guidelines reserve esophagectomy for invasive submucosal adenocarcinoma (T1b) or refractory lesions.",
      "C": "Correct. According to ACG guidelines on Barrett esophagus, patients with confirmed flat high-grade dysplasia (without visible nodular lesions requiring endoscopic mucosal resection) should undergo endoscopic eradication therapy, with endoscopic radiofrequency ablation (RFA) being the primary treatment modality. This achieves complete eradication of dysplasia in > 90% of patients with low complication rates.",
      "D": "Sucralfate provides mucosal coating but has no antineoplastic or dysplasia-eradicating properties in Barrett esophagus.",
      "E": "Radiation therapy is indicated for locally advanced esophageal cancer, not for pre-invasive mucosal dysplasia."
    },
    "learningObjective": "Manage Barrett esophagus with confirmed high-grade dysplasia using endoscopic eradication therapy (radiofrequency ablation) rather than esophagectomy or surveillance alone.",
    "necessaryInference": "Confirmed flat high-grade dysplasia without mucosal nodules -> Endoscopic radiofrequency ablation (RFA) is first-line; surgery is overly morbid and surveillance alone risks malignant transformation.",
    "shortestValidSolution": "Barrett with flat high-grade dysplasia -> Endoscopic radiofrequency ablation (RFA).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/26526714/",
      "https://pubmed.ncbi.nlm.nih.gov/35259163/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests modern guideline evolution where endoscopic eradication has supplanted esophagectomy for flat HGD, and surveillance is no longer acceptable.",
      "distractorExclusionNotes": "Esophagectomy is overly aggressive for flat HGD; surveillance permits cancer progression; sucralfate and radiation are ineffective/inappropriate.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0214",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Chronic Cough Stepwise Diagnostic and Therapeutic Strategy",
    "vignette": "A 44-year-old woman presents with a persistent, non-productive cough that has lasted for 10 weeks. The cough is most noticeable when she lies down at night and when she wakes up, frequently accompanied by throat clearing and a sensation of liquid dripping down the back of her throat. She is a lifelong non-smoker and takes no prescription medications, specifically no ACE inhibitors. Chest radiography is completely normal. Spirometry with pre- and post-bronchodilator testing is normal with no reversible airway obstruction. She has no heartburn, regurgitation, or fevers. Which of the following is the most appropriate next step in management?",
    "options": [
      "Order a high-resolution computed tomography (HRCT) scan of the chest",
      "Order 24-hour ambulatory esophageal pH monitoring",
      "Perform a methacholine bronchoprovocation challenge test",
      "Initiate an empiric trial of an oral first-generation antihistamine combined with a decongestant",
      "Prescribe oral codeine cough syrup as needed"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Chest HRCT is unwarranted in a non-smoker with a normal conventional chest radiograph and symptoms classic for upper airway cough syndrome.",
      "B": "24-hour pH impedance monitoring is invasive and reserved for patients who fail empiric proton pump inhibitor therapy when GERD is the suspected etiology.",
      "C": "Methacholine challenge evaluates cough-variant asthma. However, the patient has normal spirometry and classic symptoms of upper airway cough syndrome (frequent throat clearing, sensation of postnasal drip, nocturnal worsening). ACCP guidelines prioritize an empiric trial for UACS first.",
      "D": "Correct. According to the American College of Chest Physicians (ACCP) guidelines on chronic cough (cough > 8 weeks with normal chest radiograph and no ACE inhibitor), the most common etiology is Upper Airway Cough Syndrome (UACS; formerly postnasal drip). The recommended initial diagnostic-therapeutic step is an empiric trial of a first-generation antihistamine-decongestant combination (e.g., brompheniramine/pseudoephedrine or chlorpheniramine) for 2 to 3 weeks.",
      "E": "Opioid antitussives only suppress the cough reflex without treating the underlying trigger and carry dependence and sedation risks."
    },
    "learningObjective": "Apply the ACCP stepwise algorithm for chronic unexplained cough: initiate an empiric trial for upper airway cough syndrome using a first-generation antihistamine-decongestant.",
    "necessaryInference": "Non-smoker + normal CXR + normal spirometry + throat clearing / postnasal sensation = UACS. Stepwise guideline requires an empiric first-generation antihistamine-decongestant trial before invasive testing.",
    "shortestValidSolution": "Chronic cough + normal CXR + postnasal drip symptoms -> Empiric first-gen antihistamine-decongestant trial.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/29037430/",
      "https://pubmed.ncbi.nlm.nih.gov/16428693/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates ACCP chronic cough algorithm distinguishing high-yield empiric trials from premature advanced diagnostic testing (CT chest, pH monitoring).",
      "distractorExclusionNotes": "Chest HRCT is excessive after normal CXR; pH monitoring is invasive before empiric trial; methacholine challenge is secondary to UACS trial; codeine is non-disease-modifying.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0215",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Smoking Cessation in Stable Mood Disorder EAGLES Evidence",
    "vignette": "A 36-year-old man with stable bipolar I disorder presents to discuss smoking cessation. He has smoked 1 pack of cigarettes daily for 15 years. His psychiatric condition has been well controlled for 3 years on lithium 900 mg daily and lurasidone 40 mg daily, with no manic, hypomanic, or depressive episodes. He has tried nicotine chewing gum in the past without success and requests prescription pharmacotherapy to help him quit. He expresses fear that medication might trigger a mood episode. Mental status examination reveals euthymic mood, coherent thought processes, and no suicidal or homicidal ideation. Which of the following is the most appropriate first-line pharmacotherapeutic approach for smoking cessation in this patient?",
    "options": [
      "Initiate oral bupropion hydrochloride 150 mg daily, increasing to 150 mg twice daily",
      "Advise against any pharmacotherapy and recommend hypnotherapy alone",
      "Initiate oral nortriptyline 25 mg daily at bedtime",
      "Initiate oral clonidine 0.1 mg daily",
      "Initiate oral varenicline 0.5 mg daily titrated to 1 mg twice daily, with ongoing clinical psychiatric monitoring"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Bupropion is an antidepressant (norepinephrine-dopamine reuptake inhibitor) that carries an established risk of precipitating hypomania, mania, or rapid cycling in patients with bipolar disorder, making it suboptimal compared to varenicline.",
      "B": "Withholding effective pharmacotherapy in a motivated smoker with stable psychiatric disease is inappropriate. Pharmacotherapy combined with behavioral support doubles to triples quit rates.",
      "C": "Nortriptyline is a second-line smoking cessation agent that carries tricyclic toxicities and high risk of manic induction in bipolar disorder.",
      "D": "Clonidine is a second-line agent with inferior efficacy and substantial side effects (hypotension, sedation).",
      "E": "Correct. The landmark multinational EAGLES trial (Evaluating Adverse Events in a Global Smoking Cessation Study) demonstrated that varenicline is the most efficacious smoking cessation monotherapy and does not significantly increase neuropsychiatric adverse events compared to placebo or nicotine replacement therapy, even in patients with stable psychiatric disorders. In bipolar disorder, varenicline is preferred over bupropion because it does not induce manic switching."
    },
    "learningObjective": "Select varenicline as the most efficacious first-line smoking cessation medication in patients with stable psychiatric illness based on EAGLES trial safety data.",
    "necessaryInference": "Patient with bipolar I disorder wants smoking cessation pharmacotherapy. Bupropion risks manic destabilization. The EAGLES trial demonstrated varenicline's neuropsychiatric safety and superiority in stable psychiatric cohorts.",
    "shortestValidSolution": "Smoking cessation + stable bipolar disorder -> Varenicline (superior efficacy, no manic switch risk vs bupropion).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27116918/",
      "https://pubmed.ncbi.nlm.nih.gov/32668104/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests integration of landmark trial data (EAGLES) overturning outdated FDA black box warnings regarding varenicline and psychiatric patients, while avoiding bupropion-induced mania.",
      "distractorExclusionNotes": "Bupropion triggers mania in bipolar illness; nortriptyline also triggers mood elevation; clonidine is poorly tolerated second-line; withholding pharmacotherapy is ineffective.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0216",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Severe Obstructive Sleep Apnea First-Line CPAP Management",
    "vignette": "A 51-year-old commercial truck driver presents for evaluation of excessive daytime sleepiness. His wife reports loud snoring and witnessed pauses in breathing followed by loud gasps. He has fallen asleep at red lights twice in the past month. Past medical history includes hypertension treated with lisinopril. BMI is 36 kg/m2, neck circumference is 18.5 inches, and blood pressure is 148/92 mm Hg. Epworth Sleepiness Scale score is 17 (abnormal > 10). Diagnostic polysomnography demonstrates an apnea-hypopnea index (AHI) of 42 events/hour (normal < 5; severe >= 30) with oxygen saturation dipping to a nadir of 81%. Which of the following is the most appropriate initial disease-modifying management?",
    "options": [
      "Positive airway pressure (CPAP) titration and initiation, accompanied by counseling on sleep hygiene and weight loss",
      "Referral for immediate uvulopalatopharyngoplasty (UPPP)",
      "Prescription for modafinil 200 mg daily orally as monotherapy",
      "Prescription for a mandibular advancement oral appliance as first-line definitive therapy",
      "Initiation of nocturnal oxygen via nasal cannula at 2 L/min"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to American Academy of Sleep Medicine (AASM) guidelines, continuous positive airway pressure (CPAP) is the first-line, gold-standard therapy for severe obstructive sleep apnea (AHI >= 30 events/hour). In a commercial driver with severe daytime somnolence, prompt CPAP initiation and adherence tracking are mandatory to restore airway patency, eliminate hypoxemia, reduce cardiovascular morbidity, and ensure driving safety.",
      "B": "UPPP has variable long-term efficacy (success rate < 50%), carries significant postoperative morbidity, and is reserved for patients with discrete anatomic pharyngeal obstruction who fail CPAP.",
      "C": "Modafinil is a wakefulness-promoting agent approved only as an adjunct for residual daytime sleepiness in patients who are already adherent to CPAP; using it as monotherapy masks sleepiness without treating upper airway collapse or hypoxemia.",
      "D": "Mandibular advancement devices are indicated for mild-to-moderate OSA or for patients with severe OSA who cannot tolerate CPAP; they are inferior to CPAP for severe OSA (AHI 42).",
      "E": "Supplemental nocturnal oxygen relieves hypoxemia but does not prevent obstructive airway collapse or terminate recurrent sleep fragmentation and hypercapnia."
    },
    "learningObjective": "Prioritize continuous positive airway pressure (CPAP) as first-line therapy for severe obstructive sleep apnea (AHI >= 30) before considering oral appliances or surgery.",
    "necessaryInference": "AHI 42 confirms severe OSA in a patient with safety-critical occupation. CPAP is the only first-line gold standard; wakefulness agents without airway splinting are contraindicated.",
    "shortestValidSolution": "Severe OSA (AHI >= 30) -> CPAP therapy first-line.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30736887/",
      "https://pubmed.ncbi.nlm.nih.gov/19223198/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates CPAP indications from oral appliances (mild-moderate) and avoids inappropriate monotherapy with stimulants in untreated airway obstruction.",
      "distractorExclusionNotes": "Modafinil masks symptoms without treating obstruction; oral appliances are inadequate for severe OSA; UPPP has poor cure rates; oxygen alone does not prevent asphyxia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0217",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Glaucoma Pharmacotherapy Contraindication in Moderate Asthma",
    "vignette": "A 58-year-old woman with a history of moderate persistent asthma presents to an ophthalmology clinic after routine screening reveals elevated intraocular pressure. She uses an inhaled fluticasone-salmeterol combination inhaler daily and an albuterol inhaler as needed for wheezing. Ophthalmic examination shows bilateral open anterior chamber angles on gonioscopy, cup-to-disc ratio of 0.7 in both eyes with superior rim thinning, and visual field testing demonstrating early arcuate scotomas. Intraocular pressure (IOP) is 27 mm Hg in the right eye and 26 mm Hg in the left eye. Which of the following is the most appropriate initial topical ophthalmic medication?",
    "options": [
      "Topical timolol maleate 0.5% ophthalmic drops twice daily",
      "Topical latanoprost 0.005% ophthalmic drops once daily at bedtime",
      "Topical brimonidine 0.2% ophthalmic drops three times daily",
      "Topical pilocarpine 2% ophthalmic drops four times daily",
      "Oral acetazolamide 250 mg twice daily"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Topical beta-blockers such as timolol are absorbed systemically via the nasolacrimal duct into the venous circulation, bypassing hepatic first-pass metabolism. They are strictly contraindicated in patients with asthma or severe COPD due to the precipitous risk of life-threatening bronchospasm and status asthmaticus.",
      "B": "Correct. Prostaglandin analogs (e.g., latanoprost, bimatoprost) increase uveoscleral outflow and are the most effective first-line topical monotherapy for primary open-angle glaucoma, typically lowering IOP by 25-35%. They have no pulmonary contraindications and are strongly preferred over beta-blockers in patients with reactive airway disease.",
      "C": "Brimonidine (an alpha-2 agonist) lowers IOP but is less efficacious than prostaglandin analogs, requires three-times-daily dosing, and frequently causes allergic blepharoconjunctivitis and systemic fatigue.",
      "D": "Pilocarpine is a cholinergic miotic agent that causes brow ache, fixed miosis, night blindness, and induced myopia; it is third-line therapy.",
      "E": "Systemic carbonic anhydrase inhibitors (oral acetazolamide) carry substantial systemic toxicity (metabolic acidosis, electrolyte wasting, fatigue, renal calculi) and are reserved for acute angle-closure crises or refractory disease, not primary outpatient open-angle glaucoma."
    },
    "learningObjective": "Select topical prostaglandin analogs (latanoprost) as preferred first-line therapy for open-angle glaucoma, recognizing that topical beta-blockers (timolol) are contraindicated in asthma.",
    "necessaryInference": "Open-angle glaucoma requires IOP lowering. Coexisting asthma is an absolute contraindication to topical non-selective beta-blockers (timolol) due to systemic bronchospastic absorption. Prostaglandin analogs (latanoprost) are superior and safe.",
    "shortestValidSolution": "Glaucoma + asthma -> Topical latanoprost (avoid beta-blockers like timolol).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/33130198/",
      "https://pubmed.ncbi.nlm.nih.gov/22051656/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic multi-morbidity contraindication vignette: recognizing nasolacrimal systemic absorption of topical beta-blockers causing asthma exacerbations.",
      "distractorExclusionNotes": "Timolol precipitates bronchospasm; pilocarpine causes intolerable miosis/ciliary spasm; acetazolamide oral has excessive systemic toxicity; brimonidine has high allergy rates.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0218",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Neovascular Age-Related Macular Degeneration Anti-VEGF Therapy",
    "vignette": "A 74-year-old man presents with a 5-day history of sudden distortion of vision in his right eye. He noticed that straight lines on the bathroom tile appear wavy and warped, and reading text has become significantly blurred. He has a history of dry age-related macular degeneration (AMD) diagnosed 3 years ago, for which he takes AREDS-2 antioxidant supplements. Visual acuity is 20/80 in the right eye (down from 20/30 six months ago) and 20/30 in the left eye. Funduscopic examination of the right eye reveals a subretinal grayish-green elevation in the macula associated with a subretinal hemorrhage and surrounding fluid. Optical coherence tomography (OCT) confirms choroidal neovascularization (CNV) with intraretinal and subretinal fluid accumulation. Which of the following is the most appropriate next step in management?",
    "options": [
      "Increase AREDS-2 supplement dosage to twice daily and re-evaluate in 3 months",
      "Perform urgent retinal laser photocoagulation to the central fovea",
      "Urgent intravitreal injection of an anti-vascular endothelial growth factor (anti-VEGF) agent (e.g., aflibercept or ranibizumab)",
      "Initiate high-dose oral prednisone 60 mg daily",
      "Refer for pars plana vitrectomy with submacular hemorrhage evacuation"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "AREDS-2 antioxidant formulations reduce the rate of progression from intermediate to advanced AMD by ~25%, but they have zero therapeutic efficacy against active choroidal neovascularization once wet AMD has developed. Doubling the dose does not treat active CNV and risks zinc toxicity.",
      "B": "Laser photocoagulation of foveal choroidal neovascular membranes causes immediate permanent central scotoma and destruction of overlying neural retina; it has been completely replaced by anti-VEGF therapy.",
      "C": "Correct. The patient has developed neovascular (wet) age-related macular degeneration characterized by choroidal neovascularization (CNV) breaking through Bruch's membrane, causing subretinal hemorrhage, exudation, and metamorphopsia. Intravitreal anti-VEGF agents (aflibercept, ranibizumab, or faricimab) are the gold-standard therapy, arresting vascular permeability, inducing regression of neovascular vessels, and recovering visual acuity if initiated promptly.",
      "D": "Corticosteroids are not first-line for wet AMD and oral steroids cause glaucoma, cataracts, and systemic side effects without inhibiting CNV angiogenesis.",
      "E": "Subretinal surgical evacuation is reserved for massive submacular hemorrhages threatening total retinal detachment, not small localized foveal wet AMD lesions."
    },
    "learningObjective": "Identify acute neovascular (wet) age-related macular degeneration and direct urgent intravitreal anti-VEGF therapy to prevent irreversible central visual loss.",
    "necessaryInference": "Acute metamorphopsia (straight lines appearing wavy) + subretinal hemorrhage/fluid on OCT in known dry AMD = acute conversion to neovascular (wet) AMD. Intravitreal anti-VEGF injection is the mandatory emergency ophthalmic therapy.",
    "shortestValidSolution": "Metamorphopsia + choroidal neovascularization on OCT -> Urgent intravitreal anti-VEGF injection.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/31802952/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of sudden metamophopsia as wet AMD conversion requiring urgent intravitreal anti-VEGF therapy rather than passive AREDS continuation.",
      "distractorExclusionNotes": "AREDS vitamins do not treat wet AMD; laser burns foveal tissue; oral steroids fail to block VEGF-driven angiogenesis; surgery is unnecessary.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0219",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Severe BPH Dual Alpha-Blocker and 5-ARI Combination Strategy",
    "vignette": "A 67-year-old man presents with severe lower urinary tract symptoms (LUTS) that have progressively worsened over the past year. He experiences significant urinary hesitancy, a weak stream, post-void dribbling, and nocturia 4 to 5 times per night. His International Prostate Symptom Score (IPSS) is 24 (severe: 20-35). Digital rectal examination demonstrates a smooth, symmetrical, markedly enlarged prostate estimated at 55 grams without nodules or induration. Serum PSA is 3.8 ng/mL (normal < 4.0). Post-void residual bladder volume measured by ultrasound is 180 mL. Urinalysis is normal. Serum creatinine is 1.0 mg/dL. Which of the following is the most appropriate long-term medical therapy to alleviate symptoms and reduce the risks of acute urinary retention and requirement for prostate surgery?",
    "options": [
      "Monotherapy with tamsulosin 0.4 mg daily orally",
      "Monotherapy with finasteride 5 mg daily orally",
      "Monotherapy with tadalafil 5 mg daily orally",
      "Combination therapy with tamsulosin 0.4 mg daily and finasteride 5 mg daily orally",
      "Immediate transurethral resection of the prostate (TURP)"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Tamsulosin (alpha-1 blocker) rapidly relieves dynamic smooth muscle obstruction within days, but as monotherapy it does not alter prostate size or prevent disease progression (acute urinary retention or eventual need for surgery).",
      "B": "Finasteride (5-alpha reductase inhibitor) reduces prostate volume by 20-25% and reduces progression, but its onset of symptomatic relief is delayed by 6 to 12 months. Used alone, it leaves the patient severely symptomatic for months.",
      "C": "Tadalafil (PDE-5 inhibitor) improves mild-to-moderate LUTS but does not reduce prostate size or prevent urinary retention.",
      "D": "Correct. In patients with severe BPH symptoms (IPSS > 19) and evidence of prostate enlargement (> 30-40 g or PSA > 1.5 ng/mL), landmark trials (MTOPS and CombAT) and AUA guidelines demonstrate that combination therapy with an alpha-1 adrenergic antagonist (tamsulosin) and a 5-alpha reductase inhibitor (finasteride or dutasteride) is superior to either monotherapy. The alpha-blocker provides rapid symptom relief, while the 5-ARI shrinks prostate volume, halving the long-term risk of acute urinary retention and surgical intervention.",
      "E": "TURP is indicated for patients with refractory urinary retention, recurrent UTIs, recurrent gross hematuria, bladder calculi, or renal insufficiency secondary to BPH, or those who fail medical therapy."
    },
    "learningObjective": "Formulate combination pharmacotherapy (alpha-1 blocker plus 5-alpha reductase inhibitor) for severe BPH with significant prostatic enlargement (> 30-40 g) to improve symptoms and reduce surgical risk.",
    "necessaryInference": "Severe symptoms (IPSS 24) + large prostate (55 g) + elevated post-void residual -> CombAT/MTOPS evidence mandates dual therapy (alpha-blocker for immediate dynamic relief + 5-ARI for static volume reduction).",
    "shortestValidSolution": "Severe BPH + prostate > 40 g -> Dual therapy: tamsulosin + finasteride.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/14681504/",
      "https://pubmed.ncbi.nlm.nih.gov/34538137/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests MTOPS and CombAT trial evidence establishing superiority of dual alpha-blocker + 5-ARI over monotherapy in patients with demonstrable prostate enlargement > 40 g.",
      "distractorExclusionNotes": "Alpha-blocker monotherapy does not shrink the gland; 5-ARI monotherapy takes months to work; TURP is premature without trying combination medical therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0220",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Renal",
    "topic": "Overactive Bladder in Mild Cognitive Impairment Mirabegron Selection",
    "vignette": "A 78-year-old woman is brought to the geriatric clinic by her daughter due to worsening urinary urgency, frequency (voiding 10-12 times per day), and urge incontinence. She frequently leaks urine on the way to the bathroom. Medical history includes hypertension, osteoarthritis, and mild cognitive impairment (Montreal Cognitive Assessment [MoCA] score 22/30). A bladder diary confirms frequent small-volume voids with urgency. Physical examination, post-void residual volume (35 mL), and clean-catch urinalysis are all normal. Pelvic floor muscle training and bladder retraining have been attempted for 8 weeks without sufficient improvement. Which of the following is the most appropriate next pharmacotherapeutic step?",
    "options": [
      "Initiate oral oxybutynin immediate-release 5 mg three times daily",
      "Initiate oral tolterodine extended-release 4 mg daily",
      "Initiate oral solifenacin 5 mg daily",
      "Perform intradetrusor onabotulinumtoxinA injections",
      "Initiate oral mirabegron 25 mg daily"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Oxybutynin is a non-selective antimuscarinic agent with high lipophilicity that readily crosses the blood-brain barrier. It is strongly discouraged by the American Geriatrics Society (AGS) Beers Criteria because it causes severe anticholinergic cognitive decline, confusion, delirium, and accelerates dementia in older adults with baseline cognitive impairment.",
      "B": "Tolterodine is also an antimuscarinic agent that carries substantial central anticholinergic burden and contributes to cognitive worsening and fall risk in older patients.",
      "C": "Solifenacin is a somewhat more bladder-selective M3 antagonist, but it still exerts systemic anticholinergic activity and is cautioned against in older adults with pre-existing cognitive impairment.",
      "D": "Intradetrusor botulinum toxin injection is a third-line invasive procedural therapy reserved for refractory OAB failing medical therapies, carrying risks of urinary retention requiring clean intermittent catheterization.",
      "E": "Correct. Mirabegron is a beta-3 adrenergic receptor agonist that relaxes the detrusor muscle during the storage phase without exerting any anticholinergic activity. Because it does not block muscarinic receptors, it avoids central anticholinergic adverse effects (cognitive deterioration, delirium) and peripheral anticholinergic effects (dry mouth, constipation, urinary retention). AGS Beers Criteria and AUA guidelines recommend beta-3 agonists as the preferred agent in older adults, particularly those with mild cognitive impairment or dementia."
    },
    "learningObjective": "Select beta-3 adrenergic receptor agonists (mirabegron) over antimuscarinics for overactive bladder in patients with cognitive impairment to avoid anticholinergic neurotoxicity.",
    "necessaryInference": "Urge incontinence in an elderly patient with mild cognitive impairment -> Antimuscarinics (oxybutynin, tolterodine, solifenacin) cross blood-brain barrier and worsen cognition (Beers Criteria). Mirabegron (beta-3 agonist) avoids anticholinergic toxicity.",
    "shortestValidSolution": "Overactive bladder + cognitive impairment -> Mirabegron (avoids anticholinergic cognitive decline).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30693946/",
      "https://pubmed.ncbi.nlm.nih.gov/31034447/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Applies AGS Beers Criteria to pharmacologic choice in geriatric urology, recognizing high neurotoxicity of antimuscarinics in cognitive impairment.",
      "distractorExclusionNotes": "All antimuscarinics (oxybutynin, tolterodine, solifenacin) impair acetylcholine transmission in the hippocampus, worsening cognitive impairment; botulinum is invasive third-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0221",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Erectile Dysfunction in Nitrate-Dependent Angina Safe Alternatives",
    "vignette": "A 64-year-old man presents requesting medication for erectile dysfunction (ED). He has had difficulty achieving and maintaining an erection for the past 2 years. Past medical history includes coronary artery disease with prior myocardial infarction 3 years ago and chronic stable exertional angina, for which he takes isosorbide mononitrate 60 mg daily, metoprolol succinate 50 mg daily, atorvastatin 80 mg daily, and aspirin 81 mg daily. He experiences angina twice a month when climbing two flights of stairs, relieved promptly by sublingual nitroglycerin. Vital signs are normal. Physical examination shows normal secondary sexual characteristics and intact peripheral pulses. He specifically asks for a prescription for sildenafil or tadalafil. Which of the following is the most appropriate management?",
    "options": [
      "Explain that PDE-5 inhibitors are absolutely contraindicated with nitrates; recommend a vacuum erection device or alprostadil injection",
      "Prescribe sildenafil 50 mg with instructions to take it 2 hours before nitrate ingestion",
      "Discontinue isosorbide mononitrate for 24 hours prior to using tadalafil",
      "Prescribe oral yohimbine 5.4 mg three times daily",
      "Prescribe transdermal testosterone gel 50 mg daily"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to AHA/ACC and AUA guidelines, phosphodiesterase type 5 (PDE-5) inhibitors (sildenafil, tadalafil, vardenafil) are absolutely contraindicated in patients taking any form of nitrate therapy (short-acting sublingual or long-acting isosorbide). Concurrent administration leads to excessive accumulation of cyclic GMP, triggering profound, refractory, and potentially fatal systemic hypotension. Safe and effective non-nitrate-interacting alternatives include a vacuum erection device (VED) or intracavernosal/intraurethral alprostadil (prostaglandin E1).",
      "B": "Spacing sildenafil 2 hours away from a daily extended-release nitrate (isosorbide mononitrate) does not eliminate risk; extended-release nitrates maintain steady-state vasodilatory nitric oxide donation for 24 hours.",
      "C": "Stopping a medically necessary anti-anginal nitrate to take a long-acting PDE-5 inhibitor (tadalafil, half-life 17.5 hours) risks acute coronary syndrome and rebound ischemia.",
      "D": "Yohimbine is a central alpha-2 antagonist that causes severe hypertension, tachycardia, and anxiety, and is unsafe in coronary artery disease.",
      "E": "Testosterone replacement is indicated only for confirmed biochemical hypogonadism (low morning total/free testosterone), not for vasculogenic ED with normal libido in an older man."
    },
    "learningObjective": "Identify the absolute contraindication of PDE-5 inhibitors in nitrate-treated coronary disease and select safe alternatives (vacuum erection device or alprostadil).",
    "necessaryInference": "Patient requires daily nitrate therapy for angina. PDE-5 inhibitors cause severe cGMP accumulation and fatal hypotension with nitrates. Vacuum erection device or local alprostadil avoids this interaction.",
    "shortestValidSolution": "ED + chronic nitrate therapy -> PDE-5 inhibitors contraindicated; select vacuum erection device or alprostadil.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/30209253/",
      "https://pubmed.ncbi.nlm.nih.gov/10618318/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of absolute pharmacologic contraindications (nitrates + PDE-5i) and offering legitimate evidence-based mechanical or local pharmacological alternatives.",
      "distractorExclusionNotes": "Timing adjustments cannot circumvent extended-release nitrates; discontinuing nitrates triggers ischemia; yohimbine is toxic in CAD; testosterone is ineffective for non-hypogonadal ED.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0222",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Restless Legs Syndrome Augmentation Avoidance Strategy",
    "vignette": "A 49-year-old woman presents with distressing sensations in her lower extremities that occur every evening while watching television or trying to fall asleep. She describes an uncomfortable, crawling, and 'creepy' sensation deep inside both calves that compels her to move, walk, or stretch her legs, which provides immediate, temporary relief. Her sleep is severely fragmented. She has no peripheral neuropathy, spinal stenosis, or edema. Neurological examination is completely normal. Laboratory studies demonstrate: hemoglobin 12.8 g/dL, serum creatinine 0.8 mg/dL, and serum ferritin 32 ng/mL (reference: 15-200). Which of the following is the most appropriate initial management strategy?",
    "options": [
      "Initiate pramipexole 0.125 mg orally two hours before bedtime as preferred first-line therapy",
      "Initiate oral iron supplementation (target ferritin > 75 ng/mL) and an alpha-2-delta ligand (gabapentin or pregabalin)",
      "Prescribe clonazepam 1 mg at bedtime",
      "Prescribe carbidopa-levodopa 25/100 mg at bedtime",
      "Reassure the patient and recommend calf stretching exercises alone"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Dopamine agonists (pramipexole, ropinirole) were previously widely used, but current AASM and European guidelines strongly recommend against them as first-line therapy due to high rates of dopaminergic 'augmentation' (occurring in up to 50-70% of patients over 5 years), where symptoms progressively worsen, appear earlier in the day, and spread to the arms.",
      "B": "Correct. Modern consensus guidelines for restless legs syndrome (RLS) prioritize: 1) Checking and repleting iron stores (oral iron with vitamin C if serum ferritin <= 75 ng/mL or transferrin saturation < 20%), because brain iron deficiency in the substantia nigra impairs dopamine neurotransmission; and 2) Utilizing alpha-2-delta calcium channel ligands (gabapentin, gabapentin enacarbil, or pregabalin) as the preferred first-line pharmacotherapy because they have proven efficacy without causing dopaminergic augmentation.",
      "C": "Clonazepam does not reduce periodic limb movements or RLS sensory urges, and carries sedation, cognitive decline, tolerance, and dependence risks.",
      "D": "Carbidopa-levodopa causes the most rapid and severe dopaminergic augmentation of all agents and is contraindicated for daily RLS maintenance.",
      "E": "Non-pharmacological measures are insufficient for severe, daily RLS disrupting sleep and quality of life."
    },
    "learningObjective": "Formulate initial management for restless legs syndrome by checking/repleting iron stores (ferritin target > 75 ng/mL) and selecting alpha-2-delta ligands over dopamine agonists to prevent augmentation.",
    "necessaryInference": "Ferritin 32 ng/mL indicates deficient central iron stores (< 75 ng/mL threshold in RLS). Dopamine agonists carry severe long-term augmentation risk. Modern first-line is iron repletion + alpha-2-delta ligand (gabapentin/pregabalin).",
    "shortestValidSolution": "Restless legs syndrome + ferritin < 75 ng/mL -> Oral iron + alpha-2-delta ligand (avoid dopamine agonists).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27402859/",
      "https://pubmed.ncbi.nlm.nih.gov/29037430/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests major paradigm shift in RLS management away from dopamine agonists (due to devastating augmentation) toward alpha-2-delta ligands and aggressive iron repletion (ferritin > 75).",
      "distractorExclusionNotes": "Dopamine agonists (pramipexole) cause augmentation; levodopa causes severe augmentation; benzodiazepines do not treat underlying sensory urge; observation is inadequate.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0223",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Fibromyalgia Multimodal Therapy and Opioid Avoidance",
    "vignette": "A 39-year-old woman presents with persistent, widespread musculoskeletal aching, stiffness, and fatigue that has lasted for over 2 years. She describes pain 'all over my body,' from her neck and shoulders down to her hips and calves. Symptoms are worse in the morning and aggravated by poor sleep and physical stress. She has seen multiple specialists without finding a structural or inflammatory cause. Comprehensive laboratory testing (complete blood count, ESR, CRP, TSH, rheumatoid factor, and anti-CCP) is completely normal. On physical examination, there is diffuse tenderness to moderate palpation across multiple soft tissue areas (trapezius, lateral epicondyles, gluteal areas) without joint swelling, synovial thickening, or muscle weakness. She asks for a prescription for oxycodone or hydrocodone, stating that over-the-counter ibuprofen provides no relief. Which of the following is the most appropriate management approach?",
    "options": [
      "Initiate oral oxycodone 5 mg as needed for breakthrough pain flares",
      "Prescribe oral prednisone 20 mg daily with a rapid 4-week taper",
      "Initiate multimodal therapy with low-impact aerobic exercise, cognitive behavioral therapy, and duloxetine or pregabalin, while explicitly avoiding opioid analgesics",
      "Order whole-body magnetic resonance imaging (MRI) to identify occult myofascial inflammation",
      "Perform bilateral tender point trigger injections with triamcinolone and bupivacaine"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Opioids (oxycodone, hydrocodone) are strongly contraindicated in fibromyalgia. They lack efficacy for central sensitization pain, accelerate hyperalgesia (opioid-induced hyperalgesia), impair sleep architecture, and carry immense addiction and overdose risks.",
      "B": "Systemic corticosteroids have no therapeutic benefit in fibromyalgia, as the pathophysiology is central nervous system nociplastic pain processing, not peripheral tissue inflammation.",
      "C": "Correct. According to the American College of Rheumatology (ACR) and EULAR guidelines for fibromyalgia, the foundation of management is non-pharmacological multimodal therapy: low-impact aerobic exercise (walking, swimming, aquatic therapy), sleep hygiene, and cognitive behavioral therapy (CBT). First-line FDA-approved pharmacological options that modulate descending inhibitory pain pathways include SNRIs (duloxetine, milnacipran) or alpha-2-delta calcium channel modulators (pregabalin). Opioids are explicitly contraindicated.",
      "D": "Whole-body MRI is expensive, unnecessary, and promotes low-value incidental findings that fuel patient anxiety; fibromyalgia is a clinical diagnosis of central sensitization.",
      "E": "Local trigger point corticosteroid injections are unproven in widespread central nociplastic pain and expose patients to local tissue atrophy."
    },
    "learningObjective": "Formulate evidence-based multimodal management for fibromyalgia (aerobic exercise, CBT, duloxetine/pregabalin) while adhering to strict contraindications against opioid analgesics.",
    "necessaryInference": "Chronic widespread body pain + fatigue + normal inflammatory markers + tender points = Fibromyalgia (central sensitization). Opioids are harmful and contraindicated; multimodal management with exercise, CBT, and an SNRI/pregabalin is indicated.",
    "shortestValidSolution": "Fibromyalgia -> Multimodal care (exercise, CBT, duloxetine/pregabalin) + avoid opioids.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27941097/",
      "https://pubmed.ncbi.nlm.nih.gov/27382111/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes guideline-based management of central sensitization (fibromyalgia) and strict avoidance of opioids which worsen opioid-induced hyperalgesia.",
      "distractorExclusionNotes": "Opioids cause hyperalgesia and addiction; steroids are ineffective; whole-body MRI is low-value care; trigger injections fail to treat central processing.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0224",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Myalgic Encephalomyelitis Post-Exertional Malaise Management",
    "vignette": "A 34-year-old woman presents for evaluation of debilitating fatigue lasting 14 months following an acute viral respiratory infection. She reports that after engaging in even minimal physical activity (e.g., walking 1 block or folding laundry) or mental exertion (e.g., balancing her checkbook), she experiences a profound 'crash' 24 to 48 hours later characterized by overwhelming exhaustion, muscle aches, cognitive 'brain fog,' and dizziness upon standing that incapacitates her for several days. She wakes unrefreshed despite 10 hours in bed. Comprehensive medical workup (CBC, CMP, TSH, ANA, morning cortisol, ferritin, and cardiac testing) is completely normal. Physical examination shows normal muscle bulk and reflexes. Orthostatic vital signs show a pulse increase of 14/min without orthostatic hypotension. Which of the following is the most appropriate management strategy for her post-exertional symptoms?",
    "options": [
      "Prescribe an aggressive, fixed-escalation graded exercise therapy (GET) protocol",
      "Prescribe modafinil 200 mg daily to overcome daytime fatigue",
      "Initiate long-term broad-spectrum oral doxycycline therapy for presumed occult infection",
      "Educate the patient on energy conservation, activity pacing, and staying within her 'energy envelope' to prevent post-exertional malaise (PEM)",
      "Prescribe oral fluoxetine 40 mg daily for masked somatization disorder"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Aggressive, fixed-schedule graded exercise therapy (GET) was historically recommended based on flawed studies (PACE trial), but current CDC, NICE, and Institute of Medicine (NAM) guidelines explicitly recommend AGAINST fixed graded exercise in ME/CFS, as forcing patients beyond their threshold triggers severe post-exertional malaise (PEM) crashes and long-term functional regression.",
      "B": "Stimulants like modafinil may temporarily mask fatigue, causing patients to overexert themselves and trigger severe PEM crashes ('push-crash cycle').",
      "C": "Empiric long-term antibiotics have no clinical benefit and cause antimicrobial resistance, C. difficile colitis, and toxicity in post-viral ME/CFS.",
      "D": "Correct. According to current CDC and NICE guidelines for Myalgic Encephalomyelitis / Chronic Fatigue Syndrome (ME/CFS), the cardinal defining feature is post-exertional malaise (PEM)\u2014the exacerbation of multiple symptoms following physical, cognitive, or emotional effort. The cornerstone of management is energy pacing within the patient's individual 'energy envelope' to prevent PEM crashes and avoid the push-crash cycle.",
      "E": "ME/CFS is a multi-system biological neuroimmune condition, not a somatic symptom disorder; prescribing high-dose SSRIs without pacing fails to address PEM."
    },
    "learningObjective": "Formulate management for Myalgic Encephalomyelitis / Chronic Fatigue Syndrome (ME/CFS) by recognizing post-exertional malaise (PEM) and employing activity pacing within the patient's energy envelope while avoiding aggressive graded exercise therapy.",
    "necessaryInference": "Profound symptom relapse 24-48h after minimal physical/mental exertion = Post-Exertional Malaise (PEM), pathognomonic for ME/CFS. Modern guidelines strictly advise pacing within the energy envelope and advise against forced graded exercise.",
    "shortestValidSolution": "ME/CFS with post-exertional malaise -> Energy pacing within energy envelope (avoid graded exercise).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/34710323/",
      "https://pubmed.ncbi.nlm.nih.gov/25695122/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recent landmark update in clinical guidelines (NICE 2021 / CDC) deprecating graded exercise therapy in favor of energy pacing to prevent PEM crashes in ME/CFS.",
      "distractorExclusionNotes": "Graded exercise causes severe PEM deterioration; stimulants induce push-crash cycle; antibiotics have no biological role; dismissing as somatization contradicts guidelines.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0225",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Chronic Insomnia Disorder First-Line CBT-I Strategy",
    "vignette": "A 55-year-old male accountant presents with difficulty sleeping that has been present for 8 months. He reports taking 60 to 90 minutes to fall asleep at night and frequently wakes up at 3:00 AM unable to return to sleep, averaging 4.5 hours of sleep per night. He feels exhausted and irritable during the day, which impairs his concentration at work. He drinks 1 cup of coffee at 7:00 AM and has 1 glass of wine with dinner. He has no symptoms of sleep apnea (no snoring or witnessed apneas) or restless legs syndrome. Screening for major depressive disorder is negative. Physical and neurological examinations are unremarkable. He requests 'a pill that will knock me out so I can sleep.' Which of the following is the most appropriate first-line therapy?",
    "options": [
      "Initiate oral zolpidem tartrate 10 mg at bedtime",
      "Initiate oral temazepam 15 mg at bedtime",
      "Initiate oral diphenhydramine 50 mg at bedtime",
      "Initiate oral quetiapine 50 mg at bedtime",
      "Initiate Cognitive Behavioral Therapy for Insomnia (CBT-I) as first-line therapy"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Non-benzodiazepine sedative-hypnotics ('Z-drugs' such as zolpidem) are associated with complex sleep behaviors (sleep-walking, sleep-driving), next-morning impairment, falls, tolerance, and rebound insomnia upon discontinuation. Clinical practice guidelines recommend against sedative-hypnotic monotherapy as first-line treatment for chronic insomnia.",
      "B": "Benzodiazepines (temazepam) carry high risks of tolerance, dependence, cognitive blunting, withdrawal, and falls, and are not recommended as first-line therapy.",
      "C": "Over-the-counter antihistamines (diphenhydramine) lack robust efficacy data for chronic insomnia, rapidly induce tolerance within days, and produce significant next-day anticholinergic grogginess and impairment.",
      "D": "Atypical antipsychotics (quetiapine) carry severe metabolic risks (weight gain, dyslipidemia, diabetes) and extrapyramidal symptoms; guidelines strongly recommend against their use for insomnia without an underlying psychiatric indication.",
      "E": "Correct. According to the American Academy of Sleep Medicine (AASM) and American College of Physicians (ACP) clinical practice guidelines, Cognitive Behavioral Therapy for Insomnia (CBT-I) is the mandatory first-line therapy for all adult patients with chronic insomnia disorder. CBT-I (incorporating sleep restriction, stimulus control, cognitive restructuring, and sleep hygiene) produces sustained sleep improvements that persist long after therapy ends, without the adverse risks, tolerance, and rebound associated with pharmacotherapies."
    },
    "learningObjective": "Prioritize Cognitive Behavioral Therapy for Insomnia (CBT-I) as the mandatory first-line therapy for chronic insomnia disorder over hypnotic sedative pharmacotherapies.",
    "necessaryInference": "Chronic insomnia disorder (> 3 months duration with daytime impairment). Guidelines (ACP, AASM) universally designate CBT-I as first-line therapy. Pharmacological agents carry addiction, fall, and tolerance risks and are reserved as short-term adjuncts.",
    "shortestValidSolution": "Chronic insomnia disorder -> CBT-I first-line (superior long-term efficacy, no sedative risk).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/27136443/",
      "https://pubmed.ncbi.nlm.nih.gov/27989383/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes ACP/AASM clinical guidelines establishing CBT-I as the undisputed first-line treatment for chronic insomnia, resisting patient demands for sedative-hypnotics.",
      "distractorExclusionNotes": "Zolpidem has black box warning for parasomnias; temazepam causes dependence; diphenhydramine has anticholinergic hangover; quetiapine causes metabolic harm.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
