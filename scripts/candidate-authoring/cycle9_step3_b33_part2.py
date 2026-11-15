"""
Step 3 Batch 33 (0813-0825) Definitions - Advanced Ambulatory Medicine & Multimorbidity
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b33_part2 = [
  # 0813
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
    "citation": "Chaitman BR. Ranolazine for the Treatment of Chronic Angina and Potential Other Cardiovascular Indications. Circulation. 2006;113(19):2462-2472. PMID: 16702488.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 cardiology pharmacology item evaluating antianginal selection when limited by baseline bradycardia and borderline blood pressure.",
      "distractorExclusionNotes": "Excluded diltiazem and ivabradine because both worsen bradycardia; ranolazine provides anti-ischemic relief without hemodynamic slowing.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0814
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
  # 0815
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
    "citation": "Stott DJ, Rodondi N, Kearney PM, et al. Thyroid Hormone Therapy for Older Adults With Subclinical Hypothyroidism. N Engl J Med. 2017;376(26):2534-2544. PMID: 28402241.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 endocrinology/geriatrics item evaluating management thresholds for subclinical hypothyroidism based on the TRUST trial.",
      "distractorExclusionNotes": "Excluded levothyroxine and desiccated thyroid because treating TSH <10 in asymptomatic older adults provides no clinical benefit and causes harm.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0816
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
  # 0817
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
  # 0818
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
  # 0819
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
  # 0820
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
  # 0821
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
  # 0822
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
  # 0823
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
  # 0824
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
    "citation": "Augusti A, Celli BR, Criner GJ, et al. Global Initiative for Chronic Obstructive Lung Disease 2023 Report: GOLD Executive Summary. Eur Respir J. 2023;61(4):2300239. PMID: 36858448.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 pulmonology item on using biomarker-directed therapy (blood eosinophils) to guide ICS escalation in COPD.",
      "distractorExclusionNotes": "Excluded roflumilast and azithromycin because blood eosinophils >=300 cells/uL definitively indicate escalation to LABA/LAMA/ICS triple therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0825
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
        "Pegloticase is a recombinant pegylated mammalian uricase that rapidly and dramatically lowers serum uric acid to near-zero levels, resolving refractory tophi. However, historical pegloticase monotherapy was limited by a high rate (~40-50%) of high-titer anti-drug antibodies (ADAs). Anti-drug antibodies neutralize the enzyme (causing loss of efficacy, heralded by a rebound in serum urate to >6 mg/dL) and dramatically increase the risk of severe anaphylactic infusion reactions. Major randomized trials (MIRROR trial) definitively proved that co-administration of an immunomodulator—specifically oral methotrexate 15 mg weekly (with daily folic acid) initiated 4 weeks prior to pegloticase—dramatically suppressed ADA formation, increasing sustained urate response rates from 31% to 71% and slashing infusion reactions by more than half. Monitoring serum urate before every infusion is mandatory; if urate rises > 6 mg/dL, the infusion must be halted immediately."
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
    "citation": "Botson JK, Saag K, Neogi T, et al. Pegloticase in Combination With Methotrexate in Patients With Uncontrolled Gout: A Multicenter, Open-Label (MIRROR OL) Study. J Rheumatol. 2021;48(5):767-774. PMID: 33452167.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 rheumatology item on modern evidence-based protocol for pegloticase plus methotrexate co-therapy in refractory tophaceous gout.",
      "distractorExclusionNotes": "Excluded oral allopurinol continuation because it masks antibody emergence; methotrexate immunomodulation is the proven standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
