import type { Spec } from '../author';
import { authorBatch } from '../author';
import { refs } from '../spec';

export const specs: Spec[] = [
  // 31. USMLE Step 2 CK: Acute Coronary Syndrome
  {
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Acute STEMI reperfusion and primary PCI timing',
    difficulty: 3,
    stem: 'A 58-year-old man presents to the emergency department with severe, crushing retrosternal chest pain radiating to his left jaw that began 90 minutes ago. He is diaphoretic and pale. Blood pressure is 150/92 mm Hg, heart rate is 88/min, and oxygen saturation is 98% on room air. An urgent 12-lead electrocardiogram demonstrates 3-mm ST-segment elevation in leads V1 through V4 with reciprocal ST depression in leads II, III, and aVF. The facility has an active cardiac catheterization laboratory. In addition to aspirin, unfractionated heparin, and a P2Y12 inhibitor, which of the following is the most appropriate next step in management?',
    options: [
      [
        'Immediate transfer to catheterization laboratory for primary percutaneous coronary intervention',
        'Primary percutaneous coronary intervention (PCI) is the preferred reperfusion strategy for patients presenting with STEMI within 12 hours of symptom onset, with a recommended door-to-balloon time of 90 minutes or less at a PCI-capable facility.'
      ],
      [
        'Intravenous tenecteplase administration followed by transfer',
        'Fibrinolytic therapy is indicated only when primary PCI cannot be performed within 120 minutes of first medical contact; because this facility is PCI-capable, primary catheterization is superior.'
      ],
      [
        'Serum cardiac troponin trending every 3 hours before invasive angiography',
        'In the setting of diagnostic ST-segment elevations on ECG, emergency reperfusion must not be delayed to await serum biomarker laboratory confirmation.'
      ],
      [
        'Urgent coronary computed tomography angiography (CCTA)',
        'CCTA is useful for low-to-intermediate risk stable chest pain in the outpatient or observation unit setting, but is contraindicated in acute STEMI requiring emergency catheterization.'
      ],
      [
        'High-dose intravenous diltiazem infusion and observation in the coronary care unit',
        'Non-dihydropyridine calcium channel blockers are not indicated for acute myocardial infarction reperfusion and can precipitate cardiogenic shock or conduction block.'
      ]
    ],
    explanation: 'Acute ST-elevation myocardial infarction (STEMI) reflects acute, complete transmural coronary arterial occlusion. The primary therapeutic objective is immediate myocardial reperfusion. In PCI-capable centers, primary percutaneous coronary intervention (PCI) is the gold standard reperfusion modality when initiated within 90 minutes of arrival. Fibrinolytic therapy is reserved for situations where anticipated transfer to a PCI center exceeds 120 minutes from medical contact.',
    objective: 'Identify primary percutaneous coronary intervention within 90 minutes as the standard reperfusion modality for acute STEMI in PCI-capable facilities.',
    reference: refs.nice_acs,
  },

  // 32. PLAB / UKMLA: Type 2 Diabetes / SGLT2 Inhibitor in CKD
  {
    exam: 'PLAB / UKMLA',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'SGLT2 inhibitors in chronic kidney disease and diabetic nephropathy',
    difficulty: 3,
    stem: 'A 64-year-old man with a 10-year history of type 2 diabetes mellitus attends a routine outpatient review. His current medications include metformin 1,000 mg twice daily and ramipril 10 mg once daily. Blood pressure is 128/78 mm Hg and BMI is 29 kg/m2. Laboratory investigations reveal: serum creatinine 115 umol/L, estimated GFR 54 mL/min/1.73 m2, HbA1c 58 mmol/mol (7.5%), and urine albumin-to-creatinine ratio (ACR) 38 mg/mmol (severely elevated). According to current clinical guidelines, which medication should be added to optimize renal and cardiovascular outcomes?',
    options: [
      [
        'Dapagliflozin',
        'Sodium-glucose cotransporter-2 (SGLT2) inhibitors (e.g., dapagliflozin, empagliflozin) provide established renal and cardiovascular protection in patients with chronic kidney disease and significant albuminuria, slowing the decline of GFR independently of glycemic control.'
      ],
      [
        'Gliclazide',
        'Sulfonylureas stimulate pancreatic beta-cell insulin secretion to lower blood glucose, but carry a risk of hypoglycemia and do not provide proven renal protection or slow CKD progression.'
      ],
      [
        'Pioglitazone',
        'Thiazolidinediones enhance peripheral insulin sensitivity but cause fluid retention and peripheral edema, increasing the risk of congestive heart failure in patients with renal impairment.'
      ],
      [
        'Sitagliptin',
        'DPP-4 inhibitors are glycemic agents with neutral renal end-point outcomes and do not confer the substantial nephroprotective benefits demonstrated by SGLT2 inhibitors.'
      ],
      [
        'Acarbose',
        'Alpha-glucosidase inhibitors decrease intestinal carbohydrate absorption but have no impact on diabetic nephropathy progression or hard cardiovascular end-points.'
      ]
    ],
    explanation: 'In adults with type 2 diabetes and chronic kidney disease with persistent albuminuria (urine ACR > 30 mg/mmol or eGFR 20–60 mL/min/1.73 m2), NICE and KDIGO guidelines strongly recommend adding an SGLT2 inhibitor (such as dapagliflozin or empagliflozin) to baseline ACE inhibitor or ARB therapy. SGLT2 inhibitors decrease intraglomerular pressure by restoring tubuloglomerular feedback, dramatically reducing the risk of renal replacement therapy and cardiovascular mortality.',
    objective: 'Select an SGLT2 inhibitor as guideline-directed nephroprotective therapy for patients with diabetic kidney disease and persistent albuminuria.',
    reference: refs.nice_ckd,
  },

  // 33. AMC: Ectopic Pregnancy Evaluation
  {
    exam: 'AMC',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Ectopic pregnancy diagnosis and management',
    difficulty: 3,
    stem: 'A 28-year-old woman, gravida 2 para 1, presents to the emergency department with 2 days of mild right lower quadrant cramping and intermittent dark vaginal spotting. Her last menstrual period was 6 weeks ago. Vital signs: blood pressure 118/74 mm Hg, heart rate 76/min, respiratory rate 14/min, and afebrile. Abdominal examination reveals mild right iliac fossa tenderness without rebound or guarding. Serum beta-hCG is 2,400 IU/L. A transvaginal ultrasound demonstrates an empty uterine cavity with an endometrial stripe of 10 mm and a 2.5-cm complex adnexal mass adjacent to the right ovary without cardiac activity or free peritoneal fluid. What is the most appropriate management plan?',
    options: [
      [
        'Single-dose intramuscular methotrexate with follow-up beta-hCG on days 4 and 7',
        'Medical management with intramuscular methotrexate is indicated for hemodynamically stable women with unruptured ectopic pregnancy, beta-hCG < 5,000 IU/L, adnexal mass < 3.5 cm, and absent embryonic cardiac activity.'
      ],
      [
        'Emergency exploratory laparotomy and right salpingo-oophorectomy',
        'Laparotomy with oophorectomy is overly invasive and inappropriate for a stable patient eligible for fertility-sparing medical management or minimally invasive laparoscopy.'
      ],
      [
        'Dilation and curettage to rule out nonviable intrauterine pregnancy',
        'Given the discriminatory beta-hCG level (> 1,500–2,000 IU/L) with an empty uterus and a definite adnexal mass, uterine curettage is unnecessary and risks disrupting an intrauterine pregnancy or delaying ectopic treatment.'
      ],
      [
        'Expectant management with repeat serum beta-hCG in 48 hours',
        'Expectant management is only safe when beta-hCG levels are low (< 1,000 IU/L) and trending downwards in asymptomatic patients.'
      ],
      [
        'Oral mifepristone followed 24 hours later by oral misoprostol',
        'Mifepristone and misoprostol regimens are indicated for medical termination of intrauterine pregnancy and are ineffective and unsafe for tubal ectopic pregnancy.'
      ]
    ],
    explanation: 'The discriminatory zone for transvaginal sonography is approximately 1,500 to 2,000 IU/L of serum beta-hCG, above which an intrauterine gestational sac should be clearly visible. In this hemodynamically stable patient, an empty uterus with a beta-hCG of 2,400 IU/L and a 2.5-cm right adnexal mass confirms an ectopic pregnancy. Criteria for medical therapy with systemic methotrexate include hemodynamic stability, unruptured mass < 3.5 cm, absence of fetal cardiac activity, and beta-hCG < 5,000 IU/L.',
    objective: 'Apply the eligibility criteria for medical management of ectopic pregnancy with intramuscular methotrexate in hemodynamically stable patients.',
    reference: refs.rcog_gtg,
  },

  // 34. MCCQE: Community-Acquired Pneumonia / CURB-65
  {
    exam: 'MCCQE',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'Community-acquired pneumonia severity assessment and CURB-65',
    difficulty: 2,
    stem: 'A 72-year-old woman is brought to a Canadian ambulatory clinic by her daughter due to a 3-day history of productive cough with rust-colored sputum, fever, and progressive breathlessness. She is fully alert and oriented. Past medical history is significant for well-controlled hypothyroidism. Vital signs: blood pressure 104/66 mm Hg, heart rate 94/min, respiratory rate 26/min, temperature 38.6 C (101.5 F), and oxygen saturation 95% on room air. Physical examination reveals bronchial breath sounds and crackles over the right lower lung base. Point-of-care blood urea nitrogen (BUN) is 5.2 mmol/L. Chest radiography confirms right middle and lower lobe consolidation. Based on the CURB-65 scoring system, which is the most appropriate management setting?',
    options: [
      [
        'Outpatient management with oral amoxicillin or macrolide therapy',
        'Her CURB-65 score is 1 (age >= 65 only; no Confusion, Urea <= 7 mmol/L, Respiratory rate < 30/min, Blood pressure normal), indicating low mortality risk (1.5%) suitable for outpatient oral antibiotic therapy.'
      ],
      [
        'Immediate admission to an intensive care unit (ICU) for invasive mechanical ventilation',
        'ICU admission is reserved for severe pneumonia with CURB-65 scores of 4–5, septic shock requiring vasopressors, or acute respiratory failure requiring mechanical support.'
      ],
      [
        'Inpatient general medical ward admission for intravenous ceftriaxone and azithromycin',
        'Ward admission is generally indicated for CURB-65 scores >= 2 (intermediate risk, 9.2% mortality) or when clinical instability or social factors preclude outpatient care.'
      ],
      [
        'Short-stay observation unit admission for continuous non-invasive positive pressure ventilation',
        'Non-invasive ventilation is indicated for acute hypercapnic respiratory failure in COPD exacerbations or cardiogenic pulmonary edema, not uncomplicated low-risk CAP.'
      ],
      [
        'Discharge home without antibiotics with symptomatic antitussive therapy only',
        'Bacterial community-acquired pneumonia with radiographic consolidation requires definitive antimicrobial therapy to prevent clinical deterioration.'
      ]
    ],
    explanation: 'The CURB-65 pneumonia severity score assesses 5 risk factors (1 point each): Confusion (AMTS <= 8), Urea > 7 mmol/L, Respiratory rate >= 30/min, Blood pressure (systolic < 90 or diastolic <= 60 mm Hg), and Age >= 65. Scores of 0–1 signify low mortality risk (< 3%), supporting outpatient therapy with oral antibiotics. This patient only meets the age criterion (score = 1), making outpatient care with oral antimicrobials the guideline-recommended approach.',
    objective: 'Calculate the CURB-65 score to stratify community-acquired pneumonia risk and select outpatient management for scores of 0 or 1.',
    reference: refs.nice_asthma,
  },

  // 35. NEET PG: Organophosphate Poisoning
  {
    exam: 'NEET PG',
    subject: 'Pharmacology',
    system: 'Nervous System',
    topic: 'Organophosphate poisoning and anticholinergic antidotes',
    difficulty: 3,
    stem: 'A 32-year-old agricultural worker is brought to the emergency department 2 hours after accidentally spilling an undiluted organophosphate pesticide solution onto his bare arms and clothing. On arrival, he is restless, salivating copiously, and coughing frothy secretions. Vital signs: blood pressure 96/60 mm Hg, heart rate 46/min, respiratory rate 30/min, and oxygen saturation 86% on ambient air. Examination reveals bilateral pinpoint pupils (1 mm) that do not react to light, diffuse expiratory wheezes and coarse crackles across both lung fields, and muscle fasciculations in the calves. What is the most immediate therapeutic intervention after airway securing and dermal decontamination?',
    options: [
      [
        'Intravenous atropine titrated to the clearance of respiratory secretions and bronchorrhea',
        'Atropine is a competitive muscarinic receptor antagonist that rapidly reverses life-threatening bronchoconstriction, bronchorrhea, and bradycardia in organophosphate intoxication.'
      ],
      [
        'Intravenous pralidoxime as sole monotherapy before giving any anticholinergic agents',
        'Pralidoxime reactivates acetylcholinesterase at nicotinic synapses but acts too slowly to treat acute muscarinic asphyxiation; atropine must always be administered first.'
      ],
      [
        'High-dose intravenous physostigmine infusion',
        'Physostigmine is an acetylcholinesterase inhibitor used to treat anticholinergic delirium and would worsen cholinergic crisis, precipitating fatal bronchospasm.'
      ],
      [
        'Intravenous flumazenil bolus',
        'Flumazenil is a benzodiazepine antagonist indicated for benzodiazepine overdose and has no role in organophosphate poisoning.'
      ],
      [
        'Subcutaneous epinephrine injection',
        'While epinephrine treats anaphylaxis, organophosphate poisoning is mediated by excessive acetylcholine accumulation at muscarinic and nicotinic receptors requiring specific atropinization.'
      ]
    ],
    explanation: 'Organophosphate pesticides irreversibly inhibit acetylcholinesterase, leading to massive synaptic accumulation of acetylcholine. This triggers severe muscarinic toxicity (salivation, lacrimation, urination, defecation, gastrointestinal cramping, emesis, miosis, bronchorrhea, bronchospasm, and bradycardia). Death occurs primarily from acute asphyxiation secondary to pulmonary secretions and bronchoconstriction. Intravenous atropine is the definitive lifesaving antidote, titrated to dry bronchial secretions, clear lung fields, and a heart rate > 80/min.',
    objective: 'Recognize organophosphate toxicity and prioritize intravenous atropine titrated to the resolution of bronchorrhea and bronchospasm.',
    reference: refs.who_trauma,
  },

  // 36. FCPS: Tension Pneumothorax
  {
    exam: 'FCPS',
    subject: 'Surgery',
    system: 'Respiratory',
    topic: 'Tension pneumothorax emergency needle thoracostomy',
    difficulty: 2,
    stem: 'A 22-year-old unrestrained driver is brought to the trauma center following a high-speed road traffic collision. The primary trauma survey reveals severe respiratory distress, cyanosis, and agitation. Vital signs: blood pressure 72/40 mm Hg, heart rate 138/min, respiratory rate 36/min, and oxygen saturation 79% on a non-rebreather mask. Physical examination shows markedly distended neck veins, trachea deviated toward the left, hyperresonance on percussion over the entire right hemithorax, and absent breath sounds on the right. What is the most urgent next step?',
    options: [
      [
        'Immediate needle decompression in the second intercostal space midclavicular line or fifth intercostal space anterior axillary line',
        'Tension pneumothorax is a clinical diagnosis requiring immediate needle decompression or thoracostomy prior to chest radiography to relieve intrathoracic pressure and restore venous return.'
      ],
      [
        'Urgent portable upright chest radiograph to confirm the diagnosis',
        'Waiting for diagnostic imaging in tension pneumothorax delays lifesaving treatment and can lead to rapid cardiac arrest from complete obstruction of venous return.'
      ],
      [
        'Immediate endotracheal intubation with high-pressure positive pressure ventilation',
        'Initiating positive-pressure ventilation before decompressing a tension pneumothorax increases intrathoracic pressure and precipitates immediate cardiovascular collapse.'
      ],
      [
        'Emergency pericardiocentesis under ultrasound guidance',
        'Distended neck veins and hypotension can occur in cardiac tamponade, but tracheal deviation, unilateral absent breath sounds, and hyperresonance confirm tension pneumothorax.'
      ],
      [
        'Rapid infusion of 2 liters of warmed crystalloid via bilateral large-bore peripheral cannulas',
        'While hypovolemic shock is common in trauma, obstructive shock from tension pneumothorax will not respond to volume replacement until the thoracic tension is relieved.'
      ]
    ],
    explanation: 'Tension pneumothorax results from a one-way valve air leak in the visceral or parietal pleura, allowing air into the pleural space during inspiration without egress during expiration. The resulting positive intrapleural pressure collapses the ipsilateral lung, shifts the mediastinum and trachea away from the affected side, and compresses the superior and inferior vena cava. This causes acute obstructive shock and pulseless electrical activity (PEA) arrest. Immediate needle thoracostomy or finger thoracostomy converts the tension into an open pneumothorax, restoring cardiac output.',
    objective: 'Prioritize immediate needle decompression without awaiting radiographic confirmation in patients with clinical tension pneumothorax.',
    reference: refs.rcuk_als,
  },

  // 37. NLE: Dengue Fever with Warning Signs
  {
    exam: 'NLE',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Dengue with warning signs and fluid management',
    difficulty: 2,
    stem: 'A 26-year-old man in Lahore presents to an acute medical unit during an epidemic outbreak with a 4-day history of high-grade fever, severe retro-orbital headache, and myalgias. Today, his fever has abruptly subsided, but he has developed persistent vomiting, continuous abdominal pain, and extreme lethargy. Physical examination reveals petechiae on both forearms and tender hepatomegaly (3 cm below the right costal margin). Blood pressure is 100/70 mm Hg and heart rate is 96/min. Laboratory studies show: hematocrit 49% (baseline 38%), platelet count 42,000/uL, and serum ALT 140 U/L. What is the most appropriate next clinical action?',
    options: [
      [
        'Hospital admission for intravenous isotonic crystalloid fluid resuscitation and close hematocrit monitoring',
        'The patient has dengue with warning signs (persistent vomiting, severe abdominal pain, hepatomegaly, and rising hematocrit with falling platelets), signaling plasma leakage requiring hospital admission and monitored crystalloid therapy.'
      ],
      [
        'Discharge home on oral paracetamol and oral rehydration therapy with follow-up in 3 days',
        'The critical phase of dengue begins at the time of defervescence; patients with warning signs must be admitted to prevent progression to severe dengue shock.'
      ],
      [
        'Immediate prophylactic transfusion of random donor platelets',
        'Prophylactic platelet transfusion is not recommended in hemodynamically stable dengue without active severe hemorrhage, as it does not prevent bleeding and carries risks of fluid overload and transfusion reactions.'
      ],
      [
        'Initiation of broad-spectrum intravenous ceftriaxone and vancomycin',
        'Dengue is an arboviral infection caused by a flavivirus transmitted by Aedes mosquitoes; empirical antibacterials are not indicated in uncomplicated viral illness.'
      ],
      [
        'Administration of high-dose oral dexamethasone to stabilize capillary permeability',
        'Systemic corticosteroids have shown no therapeutic benefit in clinical trials of dengue and may increase the risk of secondary infections and peptic ulceration.'
      ]
    ],
    explanation: 'Dengue infection has three distinct phases: febrile, critical, and recovery. The critical phase begins around the time of defervescence (days 3–7) due to systemic capillary leakage mediated by cytokines. Warning signs include severe abdominal pain, persistent vomiting, mucosal bleeding, hepatomegaly > 2 cm, lethargy, and high hematocrit coinciding with rapid thrombocytopenia. Prompt isotonic crystalloid fluid therapy (e.g., normal saline or Ringer lactate at 5–7 mL/kg/h) prevents profound hypovolemic shock.',
    objective: 'Recognize the critical phase and warning signs of dengue virus infection and manage with intravenous crystalloid fluids.',
    reference: refs.merck_infection,
  },

  // 38. MRCP: Chronic Kidney Disease / Mineral Bone Disorder
  {
    exam: 'MRCP',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'CKD mineral and bone disorder and secondary hyperparathyroidism',
    difficulty: 4,
    stem: 'A 56-year-old woman with stage G5 chronic kidney disease on maintenance hemodialysis undergoes routine biochemical monitoring. She reports generalized diffuse bone ache and proximal muscle weakness. Laboratory testing reveals: serum corrected calcium 2.05 mmol/L (normal 2.20–2.60), serum phosphate 2.15 mmol/L (normal 0.8–1.5), intact parathyroid hormone (iPTH) 680 pg/mL (target for stage 5 CKD: 150–300), and 25-hydroxyvitamin D 24 nmol/L (deficient). What is the primary pathophysiological trigger initiating this disorder in chronic renal failure?',
    options: [
      [
        'Phosphate retention and impaired renal 1-alpha-hydroxylation of 25-hydroxyvitamin D',
        'Declining nephron mass leads to reduced renal phosphate excretion (causing hyperphosphatemia) and impaired renal 1-alpha-hydroxylase activity, decreasing active 1,25-dihydroxyvitamin D synthesis and triggering secondary hyperparathyroidism.'
      ],
      [
        'Primary autonomous adenomatous hypersecretion of parathyroid hormone',
        'Autonomous parathyroid hypersecretion with hypercalcemia characterizes tertiary hyperparathyroidism or primary parathyroid adenoma, not early secondary hyperparathyroidism.'
      ],
      [
        'Excessive intestinal calcium absorption coupled with urinary phosphate wasting',
        'In CKD, deficient active vitamin D reduces intestinal calcium absorption, leading to hypocalcemia rather than excessive absorption.'
      ],
      [
        'Inhibition of fibroblast growth factor 23 (FGF-23) secretion by osteocytes',
        'FGF-23 levels are markedly elevated in early CKD to promote urinary phosphate excretion; FGF-23 is not inhibited.'
      ],
      [
        'Hypocalcemia induced by decreased renal tubular calcium reabsorption in the distal tubule',
        'Hypocalcemia in CKD is primarily driven by hyperphosphatemia-mediated calcium precipitation and deficient calcitriol-stimulated intestinal absorption, not isolated tubular calcium wasting.'
      ]
    ],
    explanation: 'In chronic kidney disease, loss of functional nephrons causes phosphate retention and reduces renal expression of 1-alpha-hydroxylase (CYP27B1). The resulting decline in active 1,25-dihydroxyvitamin D (calcitriol) diminishes intestinal calcium and phosphate absorption, leading to systemic hypocalcemia. Elevated circulating phosphate directly stimulates PTH gene transcription, while hypocalcemia acts through the calcium-sensing receptor (CaSR) to provoke parathyroid hyperplasia and secondary hyperparathyroidism.',
    objective: 'Detail the pathophysiology of chronic kidney disease-mineral and bone disorder (CKD-MBD) driven by phosphate retention and calcitriol deficiency.',
    reference: refs.nice_ckd,
  },

  // 39. MRCEM: Acute Anaphylaxis Emergency Management
  {
    exam: 'MRCEM',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Anaphylaxis immediate first-line management and adrenaline dosing',
    difficulty: 2,
    stem: 'A 19-year-old university student is brought to the emergency department by ambulance after inadvertently consuming a satay dish containing peanuts at a restaurant. Within 15 minutes, he developed generalized urticaria, facial angioedema, and a feeling of tightness in his throat. On arrival, he is stridulous and anxious. Vital signs: blood pressure 82/46 mm Hg, heart rate 124/min, respiratory rate 28/min, and oxygen saturation 91% on high-flow oxygen. What is the immediate first-line pharmacotherapy and correct route of administration?',
    options: [
      [
        'Intramuscular adrenaline (epinephrine) 0.5 mg (0.5 mL of 1:1,000) into the anterolateral thigh',
        'Intramuscular adrenaline into the anterolateral mid-thigh is the immediate first-line treatment for anaphylaxis, rapidly reversing bronchospasm, laryngeal edema, and peripheral vasodilation.'
      ],
      [
        'Intravenous hydrocortisone 200 mg and chlorphenamine 10 mg slow bolus',
        'Antihistamines and corticosteroids are second-line adjuvant therapies that have a slow onset of action and must never delay the immediate administration of adrenaline.'
      ],
      [
        'Nebulized salbutamol 5 mg and ipratropium bromide 0.5 mg',
        'Inhaled beta-agonists relieve lower airway bronchospasm but do not treat upper airway laryngeal edema or cardiovascular shock.'
      ],
      [
        'Intravenous adrenaline bolus of 1 mg (10 mL of 1:10,000) over 30 seconds',
        'Intravenous adrenaline boluses in patients with a spontaneous pulse carry a high risk of lethal ventricular tachyarrhythmias and myocardial infarction; IV adrenaline is reserved for cardiac arrest or titrated infusions in refractory shock.'
      ],
      [
        'Subcutaneous adrenaline 0.3 mg (0.3 mL of 1:1,000) into the upper arm',
        'Subcutaneous injection has significantly slower absorption and lower peak plasma levels than intramuscular injection into the highly vascular vastus lateralis.'
      ]
    ],
    explanation: 'Anaphylaxis is an acute, life-threatening systemic type I hypersensitivity reaction characterized by rapid onset of airway compromise, respiratory difficulties, and circulatory collapse. Adrenaline is the cornerstone of emergency management: its alpha-1 agonist properties induce vasoconstriction (reversing hypotension and mucosal edema), while beta-1 stimulates cardiac inotropy/chronotropy, and beta-2 causes bronchodilation and inhibits mast cell degranulation. The recommended adult dose is 0.5 mg IM (1:1,000 concentration) in the mid-anterolateral thigh.',
    objective: 'Identify intramuscular adrenaline into the anterolateral thigh as the immediate first-line therapy for anaphylaxis.',
    reference: refs.rcuk_als,
  },

  // 40. SMLE: Diabetic Ketoacidosis Management Protocol
  {
    exam: 'SMLE',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Diabetic ketoacidosis resuscitation and potassium replacement',
    difficulty: 3,
    stem: 'A 21-year-old man with type 1 diabetes mellitus presents to an emergency department in Riyadh with a 24-hour history of severe nausea, vomiting, abdominal pain, and Kussmaul breathing after omitting his insulin injections for 2 days. Vital signs: blood pressure 98/62 mm Hg, heart rate 116/min, respiratory rate 32/min, and dry mucous membranes. Initial arterial blood gas reveals: pH 7.15, pCO2 18 mm Hg, and HCO3 8 mEq/L. Point-of-care capillary blood glucose is 26 mmol/L (468 mg/dL). Serum potassium returns at 3.2 mEq/L (normal 3.5–5.0). What is the most appropriate initial management step regarding insulin and fluid resuscitation?',
    options: [
      [
        'Initiate intravenous isotonic saline fluid resuscitation and potassium replacement; hold insulin infusion until serum potassium is above 3.3 mEq/L',
        'In DKA, insulin drives potassium into cells, which can trigger fatal cardiac arrhythmias or respiratory muscle arrest if given when baseline serum potassium is below 3.3 mEq/L.'
      ],
      [
        'Immediately administer an intravenous bolus of regular insulin at 0.14 U/kg followed by continuous infusion',
        'Giving insulin without first re-establishing potassium levels in a hypokalemic DKA patient can cause lethal hypokalemia-induced ventricular fibrillation.'
      ],
      [
        'Infuse 100 mL of 8.4% sodium bicarbonate immediately to correct the profound metabolic acidosis',
        'Sodium bicarbonate is not indicated in DKA unless pH is < 6.9, as it can cause paradoxical intracellular CNS acidosis, hypocalcemia, and delayed clearance of blood ketones.'
      ],
      [
        'Start intravenous 5% dextrose in 0.45% sodium chloride at 250 mL/h',
        'Dextrose solutions are contraindicated during initial resuscitation until serum glucose drops below 200–250 mg/dL, at which point dextrose is added to prevent hypoglycemia during continued insulin-driven ketolysis.'
      ],
      [
        'Subcutaneous glargine insulin injection and oral potassium chloride tablets',
        'Severe DKA with profound dehydration and metabolic acidosis requires continuous intravenous fluid and electrolyte replacement with regular insulin under monitored conditions.'
      ]
    ],
    explanation: 'In diabetic ketoacidosis (DKA), patients suffer marked osmotic diuresis resulting in total-body potassium depletion despite potentially normal or elevated initial serum levels due to acidosis and insulin deficiency. If baseline serum potassium is < 3.3 mEq/L, insulin infusion must be withheld while aggressive intravenous hydration and potassium chloride replacement (20–30 mEq/h) are initiated. Once potassium rises >= 3.3 mEq/L, continuous regular insulin infusion (0.1 U/kg/h) can be safely started.',
    objective: 'Apply the clinical guideline requirement to withhold insulin and replace potassium first when baseline potassium is < 3.3 mEq/L in DKA.',
    reference: refs.merck_endocrine,
  },

  // 41. HAAD / DHA: Gestational Diabetes Screening and Management
  {
    exam: 'HAAD / DHA',
    subject: 'Obstetrics',
    system: 'Endocrine',
    topic: 'Gestational diabetes mellitus diagnosis and target glycemic control',
    difficulty: 3,
    stem: 'A 31-year-old woman, gravida 1 para 0, at 26 weeks gestation attends an antenatal clinic in Abu Dhabi for a 75-g oral glucose tolerance test (OGTT). Her pre-pregnancy BMI was 28 kg/m2. The test results show: fasting blood glucose 5.4 mmol/L (97 mg/dL), 1-hour glucose 10.6 mmol/L (191 mg/dL), and 2-hour glucose 8.8 mmol/L (158 mg/dL). She is diagnosed with gestational diabetes mellitus (GDM). What is the initial recommended management strategy and primary intervention?',
    options: [
      [
        'Medical nutritional therapy, lifestyle modification, and home capillary blood glucose self-monitoring',
        'First-line management for newly diagnosed gestational diabetes is dietary counseling and lifestyle modification with self-monitoring of fasting and postprandial glucose levels; pharmacotherapy is introduced if targets are not met within 1–2 weeks.'
      ],
      [
        'Immediate initiation of subcutaneous basal-bolus insulin injections',
        'Pharmacotherapy is not initiated immediately unless fasting glucose is markedly elevated (e.g., >= 7.0 mmol/L) or nutritional modification fails to achieve targets.'
      ],
      [
        'Oral metformin 1,000 mg twice daily with liberalized carbohydrate intake',
        'Pharmacotherapy is second-line after dietary therapy, and carbohydrates should be distributed across controlled meals and snacks rather than liberalized.'
      ],
      [
        'Immediate scheduling of elective Cesarean delivery at 36 weeks gestation',
        'Cesarean delivery is not routinely indicated for well-controlled gestational diabetes unless obstetric complications (e.g., estimated fetal weight > 4.5 kg) develop.'
      ],
      [
        'Repeat 75-g OGTT in 4 weeks to confirm the diagnosis before implementing interventions',
        'A single abnormal value on the 75-g OGTT meets IADPSG/WHO diagnostic criteria for GDM; repeating the OGTT delays necessary care.'
      ]
    ],
    explanation: 'Gestational diabetes mellitus (GDM) is diagnosed using a single-step 75-g oral glucose tolerance test (OGTT) at 24–28 weeks gestation if any one of the following thresholds is met: fasting >= 5.1 mmol/L (92 mg/dL), 1-hour >= 10.0 mmol/L (180 mg/dL), or 2-hour >= 8.5 mmol/L (153 mg/dL). This patient meets criteria with an abnormal fasting and 2-hour value. The first-line intervention is medical nutrition therapy and moderate physical exercise combined with blood glucose self-monitoring (fasting < 5.3 mmol/L and 1-hour postprandial < 7.8 mmol/L).',
    objective: 'Select medical nutrition therapy and blood glucose self-monitoring as the initial first-line management for gestational diabetes.',
    reference: refs.rcog_gtg,
  },

  // 42. UHS MBBS: Bacterial Meningitis CSF Differentiation
  {
    exam: 'UHS MBBS',
    subject: 'Microbiology',
    system: 'Nervous System',
    topic: 'Cerebrospinal fluid profile in acute bacterial vs viral meningitis',
    difficulty: 2,
    stem: 'A 20-year-old medical student is admitted to a tertiary hospital in Lahore with a 24-hour history of severe headache, neck stiffness, high fever, and photophobia. Examination reveals a positive Kernig and Brudzinski sign without focal neurological deficits. Lumbar puncture is promptly performed after blood cultures. CSF analysis yields: opening pressure 280 mm H2O (normal 70–180), appearance cloudy/turbid, leukocyte count 2,800/uL with 92% neutrophils, glucose 1.2 mmol/L (simultaneous blood glucose 6.0 mmol/L, ratio 0.2), and protein 2.4 g/L (normal 0.15–0.45). Gram stain shows Gram-negative diplococci. Which organism is the causative pathogen?',
    options: [
      [
        'Neisseria meningitidis',
        'Neisseria meningitidis is a Gram-negative diplococcus that causes epidemic meningococcal meningitis, characterized by marked neutrophilic CSF pleocytosis, high protein, and markedly depressed glucose.'
      ],
      [
        'Streptococcus pneumoniae',
        'Streptococcus pneumoniae appears as lancet-shaped Gram-positive diplococci rather than Gram-negative diplococci.'
      ],
      [
        'Haemophilus influenzae',
        'Haemophilus influenzae is a pleomorphic Gram-negative coccobacillus, not a diplococcus.'
      ],
      [
        'Listeria monocytogenes',
        'Listeria monocytogenes is a small Gram-positive bacillus that displays tumbling motility at room temperature.'
      ],
      [
        'Enterovirus',
        'Viral meningitis typically produces a lymphocytic pleocytosis with normal CSF glucose and clear fluid appearance.'
      ]
    ],
    explanation: 'Acute bacterial meningitis CSF profile is defined by marked elevated opening pressure (> 200 mm H2O), prominent neutrophilic pleocytosis (> 1,000/uL with > 80% polymorphonuclear cells), markedly elevated protein (> 1.0–2.0 g/L), and low glucose (< 2.2 mmol/L or CSF-to-serum ratio < 0.4). Gram-negative kidney bean-shaped diplococci inside or outside neutrophils confirm Neisseria meningitidis (meningococcus).',
    objective: 'Differentiate bacterial from viral meningitis CSF parameters and identify Neisseria meningitidis as Gram-negative diplococci.',
    reference: refs.merck_infection,
  },

  // 43. USMLE Step 1: Cardiac Electrophysiology / Class I Antiarrhythmics
  {
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Cardiovascular',
    topic: 'Class I antiarrhythmic electrophysiology and state-dependent blockade',
    difficulty: 4,
    stem: 'A researcher investigates the electrophysiological effects of three different sodium channel-blocking antiarrhythmic drugs (Drug X, Drug Y, and Drug Z) on isolated canine ventricular myocytes. Drug X produces marked slowing of phase 0 depolarization with significant prolongation of the QRS complex, but exhibits minimal effect on the action potential duration (APD). Drug Y causes moderate phase 0 slowing and prolongs APD. Drug Z produces mild phase 0 slowing and shortens APD. Which agent is the prototype drug corresponding to Drug X?',
    options: [
      [
        'Flecainide',
        'Class IC antiarrhythmics (e.g., flecainide, propafenone) bind strongly and dissociate slowly from voltage-gated sodium channels, causing pronounced phase 0 slowing (QRS prolongation) with minimal change in action potential duration.'
      ],
      [
        'Quinidine',
        'Quinidine is a prototype Class IA antiarrhythmic that moderately slows phase 0 and prolongs action potential duration and QT interval by blocking outward potassium channels.'
      ],
      [
        'Lidocaine',
        'Lidocaine is a prototype Class IB antiarrhythmic that binds and dissociates rapidly, causing mild phase 0 slowing and shortening the action potential duration.'
      ],
      [
        'Amiodarone',
        'Amiodarone is predominantly a Class III agent that prolongs phase 3 repolarization and action potential duration by blocking potassium channels.'
      ],
      [
        'Verapamil',
        'Verapamil is a Class IV calcium channel blocker that slows conduction in the SA and AV nodes rather than altering ventricular phase 0 sodium influx.'
      ]
    ],
    explanation: 'Vaughan-Williams Class I antiarrhythmics block voltage-dependent sodium channels (phase 0 of the ventricular action potential). They are subclassified by dissociation kinetics and their effects on action potential duration (APD): Class IA (quinidine, procainamide, disopyramide) moderately depress phase 0 and prolong APD; Class IB (lidocaine, mexiletine) weakly depress phase 0 and shorten APD; Class IC (flecainide, propafenone) strongly depress phase 0 (prolonging QRS) and have no significant effect on APD.',
    objective: 'Contrast the electrophysiological effects of Class IA, IB, and IC antiarrhythmic agents on phase 0 upstroke and action potential duration.',
    reference: refs.acid,
  },

  // 44. USMLE Step 2 CK: Acute Pulmonary Embolism Anticoagulation
  {
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Pulmonary embolism risk stratification and direct oral anticoagulation',
    difficulty: 3,
    stem: 'A 54-year-old woman presents to the emergency department with sudden-onset right pleuritic chest pain and shortness of breath that began 4 hours ago after returning from an 11-hour transatlantic flight. Vital signs: blood pressure 126/82 mm Hg, heart rate 102/min, respiratory rate 22/min, and oxygen saturation 94% on ambient air. Physical examination is unremarkable except for mild tachycardia. Computed tomography pulmonary angiography (CTPA) demonstrates a filling defect in the right lower lobe segmental pulmonary artery without right ventricular strain. Bedside echocardiogram shows normal right ventricular size and systolic function. Serum cardiac troponin and BNP are normal. What is the most appropriate initial therapy?',
    options: [
      [
        'Direct oral anticoagulant (DOAC) such as apixaban or rivaroxaban monotherapy',
        'In hemodynamically stable patients with acute pulmonary embolism (subsegmental or segmental) and low-risk clinical profile, oral factor Xa inhibitors (apixaban or rivaroxaban) are preferred first-line anticoagulants.'
      ],
      [
        'Systemic intravenous thrombolysis with recombinant tissue plasminogen activator (alteplase)',
        'Systemic thrombolysis is indicated exclusively for massive/high-risk pulmonary embolism presenting with sustained hypotension or cardiogenic shock, due to significant intracranial hemorrhage risk.'
      ],
      [
        'Emergency catheter-directed mechanical embolectomy',
        'Catheter-directed embolectomy is reserved for patients with massive PE who have absolute contraindications to fibrinolytic therapy or failed systemic thrombolysis.'
      ],
      [
        'Inferior vena cava (IVC) filter placement without anticoagulation',
        'IVC filters are indicated only when acute therapeutic anticoagulation is strictly contraindicated (e.g., active major internal bleeding) or in cases of documented recurrent PE despite therapeutic anticoagulation.'
      ],
      [
        'Subcutaneous unfractionated heparin and aspirin 81 mg daily',
        'Aspirin is inadequate for venous thromboembolism treatment, and therapeutic unfractionated heparin requires monitored aPTT titration, making DOACs vastly superior in stable patients.'
      ]
    ],
    explanation: 'In acute pulmonary embolism, therapeutic anticoagulation prevents thrombus extension and fatal recurrence. Risk stratification guides management: high-risk (massive) PE presents with hypotension (systolic BP < 90 mm Hg) requiring emergency thrombolysis; intermediate-risk (submassive) exhibits RV strain or elevated biomarkers; low-risk PE has normal hemodynamics and no RV strain. In hemodynamically stable, low-risk patients, direct oral anticoagulants (DOACs like apixaban or rivaroxaban) are preferred over vitamin K antagonists due to faster onset, predictable pharmacokinetics, and lower bleeding rates.',
    objective: 'Select oral direct factor Xa inhibitors as first-line anticoagulation for hemodynamically stable pulmonary embolism.',
    reference: refs.nice_acs,
  },

  // 45. PLAB / UKMLA: Acute Severe Asthma Management
  {
    exam: 'PLAB / UKMLA',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'Acute severe asthma categorization and emergency nebulization',
    difficulty: 3,
    stem: 'A 24-year-old woman with known bronchial asthma is brought to the emergency department with acute breathlessness and chest tightness unresponsive to her salbutamol inhaler. She can only speak in short phrases. On examination, there is marked accessory muscle use and widespread bilateral expiratory wheezing. Vital signs: blood pressure 132/84 mm Hg, heart rate 118/min, respiratory rate 28/min, oxygen saturation 93% on room air, and peak expiratory flow (PEF) is 45% of her predicted best value. Arterial blood gas on room air shows: pH 7.42, pCO2 4.9 kPa (37 mm Hg), and pO2 9.8 kPa. How should her asthma exacerbation be categorized and treated immediately?',
    options: [
      [
        'Acute severe asthma; administer high-flow oxygen, nebulized salbutamol with ipratropium, and oral prednisolone or IV hydrocortisone',
        'Features of acute severe asthma include PEF 33–50% of predicted best, respiratory rate >= 25/min, heart rate >= 110/min, and inability to complete sentences in one breath, managed with oxygen, bronchodilators, and systemic steroids.'
      ],
      [
        'Moderate asthma; prescribe an extra dose of inhaled budesonide and discharge with outpatient follow-up',
        'Moderate asthma is characterized by PEF 50–75% without severe features; a PEF of 45% and inability to speak in sentences indicates acute severe asthma requiring immediate emergency treatment.'
      ],
      [
        'Life-threatening asthma; arrange immediate emergency endotracheal intubation and mechanical ventilation',
        'Life-threatening asthma features include silent chest, cyanosis, exhaustion, hypotension, PEF < 33%, or normal/elevated pCO2 in severe distress; while her pCO2 of 4.9 kPa is slightly high for hyperventilation, immediate intubation is not warranted without exhaustion or failure to respond to initial nebulized therapy.'
      ],
      [
        'Near-fatal asthma; infuse intravenous magnesium sulfate bolus as the sole initial treatment',
        'Intravenous magnesium sulfate is an adjunctive therapy for refractory severe or life-threatening asthma, not a replacement for standard high-dose nebulized bronchodilators and systemic corticosteroids.'
      ],
      [
        'Hyperventilation syndrome; have the patient breathe into a paper bag to restore carbon dioxide levels',
        'Re-breathing into a bag in a patient with acute bronchospasm and hypoxia is lethal and contraindicated.'
      ]
    ],
    explanation: 'According to BTS/SIGN asthma guidelines, acute severe asthma is defined by any one of: PEF 33–50% of predicted/best, respiratory rate >= 25/min, heart rate >= 110/min, or inability to complete sentences in one breath. Immediate management consists of oxygen to maintain SpO2 94–98%, high-dose nebulized beta-2 agonists (salbutamol 5 mg) driven by oxygen, nebulized ipratropium bromide (0.5 mg), and early systemic corticosteroids (oral prednisolone 40–50 mg or IV hydrocortisone 100 mg).',
    objective: 'Categorize acute severe asthma based on PEF and vital signs, and initiate guideline-directed emergency bronchodilators and systemic corticosteroids.',
    reference: refs.nice_asthma,
  },
];

const CODES = Array.from({ length: specs.length }, (_, i) => `intl-${String(i + 31).padStart(4, '0')}`);
export const questions = authorBatch(3, specs, CODES);
