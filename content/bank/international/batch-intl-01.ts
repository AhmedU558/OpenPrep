import type { Spec } from '../author';
import { authorBatch } from '../author';
import { refs } from '../spec';

export const specs: Spec[] = [
  // 1. USMLE Step 1: Renal Hemodynamics & Filtration Fraction
  {
    exam: 'Step 1',
    subject: 'Physiology',
    system: 'Renal',
    topic: 'Renal arteriolar resistance and filtration fraction',
    difficulty: 3,
    stem: 'A 62-year-old man with hypertension is started on an angiotensin-converting enzyme (ACE) inhibitor. Two weeks later, repeat laboratory evaluation reveals a slight increase in serum creatinine from 1.0 mg/dL to 1.2 mg/dL. Renal hemodynamic testing is conducted to assess the microvascular response. Which of the following changes in renal blood flow (RBF), glomerular filtration rate (GFR), and filtration fraction (FF = GFR/RPF) most accurately reflects the direct pharmacological effect of this drug on the efferent arteriole?',
    options: [
      [
        'Increased RBF, decreased GFR, and decreased filtration fraction',
        'Efferent arteriolar vasodilation decreases glomerular capillary hydrostatic pressure, reducing GFR while simultaneously reducing renal vascular resistance to increase renal blood flow, resulting in a decreased filtration fraction.'
      ],
      [
        'Decreased RBF, increased GFR, and increased filtration fraction',
        'This pattern occurs with efferent arteriolar constriction (e.g., high angiotensin II tone), which raises intraglomerular pressure while restricting total renal perfusion.'
      ],
      [
        'Decreased RBF, decreased GFR, and unchanged filtration fraction',
        'This response is characteristic of afferent arteriolar vasoconstriction (e.g., NSAID administration blocking vasodilatory prostaglandins), reducing both GFR and RPF proportionally.'
      ],
      [
        'Increased RBF, increased GFR, and increased filtration fraction',
        'This combination does not occur with isolated efferent dilation because reducing post-glomerular resistance lowers the hydrostatic pressure gradient driving ultrafiltration.'
      ],
      [
        'Unchanged RBF, decreased GFR, and increased filtration fraction',
        'Efferent arteriolar dilation decreases filtration fraction because renal plasma flow increases while glomerular filtration rate decreases.'
      ]
    ],
    explanation: 'Angiotensin II selectively constricts the efferent arteriole to maintain glomerular filtration rate (GFR) during states of reduced renal perfusion. Angiotensin-converting enzyme (ACE) inhibitors inhibit the synthesis of angiotensin II, preferentially causing efferent arteriolar dilation. This dilation reduces renal vascular resistance (increasing renal blood flow and renal plasma flow) and decreases intraglomerular capillary hydrostatic pressure (reducing GFR). Because filtration fraction is the ratio of GFR to RPF (FF = GFR/RPF), a decrease in the numerator combined with an increase in the denominator produces a marked reduction in filtration fraction.',
    objective: 'Explain how ACE inhibitor-mediated efferent arteriolar vasodilation alters renal blood flow, glomerular filtration rate, and filtration fraction.',
    reference: refs.acid,
  },

  // 2. USMLE Step 1: Autonomic Pharmacology / Receptor Selectivity
  {
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Cardiovascular',
    topic: 'Adrenergic receptor selectivity and vascular resistance',
    difficulty: 3,
    stem: 'A 24-year-old healthy male volunteer participates in a clinical pharmacology study. An intravenous infusion of an experimental adrenergic agonist is administered at a constant rate. Baseline blood pressure is 120/80 mm Hg and heart rate is 72/min. During infusion, blood pressure changes to 145/60 mm Hg, heart rate increases to 98/min, and mean pulmonary arterial pressure remains stable. Pretreatment with propranolol completely abolishes both the heart rate increase and the diastolic blood pressure reduction. Which receptor profile best characterizes the infused drug?',
    options: [
      [
        'Predominant beta-1 and beta-2 adrenergic receptor agonism',
        'Isoproterenol is a nonselective beta agonist that increases heart rate and cardiac contractility via beta-1 receptors and produces peripheral vasodilation via beta-2 receptors, resulting in widened pulse pressure.'
      ],
      [
        'Selective alpha-1 adrenergic receptor agonism',
        'Alpha-1 agonists such as phenylephrine cause intense vasoconstriction, increasing both systolic and diastolic blood pressure with reflex bradycardia, which is blocked by phentolamine rather than propranolol.'
      ],
      [
        'Combined alpha-1 and beta-1 adrenergic receptor agonism',
        'Norepinephrine stimulates alpha-1 and beta-1 receptors, causing vasoconstriction that elevates diastolic pressure and induces reflex baroreceptor-mediated bradycardia.'
      ],
      [
        'Selective muscarinic M2 receptor antagonism',
        'Atropine blocks M2 receptors to cause tachycardia, but it does not produce beta-2 mediated systemic vasodilation that lowers diastolic blood pressure.'
      ],
      [
        'Selective beta-3 adrenergic receptor agonism',
        'Beta-3 agonists such as mirabegron stimulate detrusor relaxation in overactive bladder and do not cause significant acute systemic hypotension or pronounced tachycardia.'
      ]
    ],
    explanation: 'The clinical vignette describes the hemodynamic response to a nonselective beta-adrenergic agonist such as isoproterenol. Beta-1 receptor stimulation on the sinoatrial node and ventricular myocardium increases chronotropy, dromotropy, and inotropy, elevating systolic blood pressure and cardiac output. Simultaneously, beta-2 receptor stimulation on vascular smooth muscle in skeletal muscle beds causes vasodilation, reducing systemic vascular resistance and lowering diastolic blood pressure. The combined effect is a widened pulse pressure and tachycardia, both of which are antagonized by the nonselective beta-blocker propranolol.',
    objective: 'Identify the hemodynamic consequences and receptor pharmacology of nonselective beta-adrenergic stimulation.',
    reference: refs.pharm,
  },

  // 3. USMLE Step 1: Microbiology / Bacterial Genetics & Transformation
  {
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Respiratory',
    topic: 'Pneumococcal capsular transformation and competence',
    difficulty: 2,
    stem: 'In a classic laboratory experiment modeled after the Griffith experiment, a culture of living, nonencapsulated, avirulent Streptococcus pneumoniae is incubated in broth containing heat-killed, encapsulated, virulent S. pneumoniae. Deoxyribonuclease (DNase) is added to tube 1 prior to incubation, while tube 2 contains no DNase. Following incubation, aliquots from each tube are injected into laboratory mice. All mice injected from tube 1 survive, whereas all mice injected from tube 2 develop bacteremia and die. Which bacterial mechanism accounts for the findings in tube 2?',
    options: [
      [
        'Natural competence-mediated DNA transformation',
        'Streptococcus pneumoniae becomes naturally competent, taking up naked DNA fragments from the environment and incorporating them via homologous recombination; this process is abolished by DNase.'
      ],
      [
        'Bacteriophage-mediated specialized transduction',
        'Transduction transfers bacterial genes via a bacteriophage capsid, which protects viral and bacterial DNA from degradation by extracellular DNase.'
      ],
      [
        'Sex pilus-dependent conjugative plasmid transfer',
        'Conjugation requires direct cell-to-cell contact through a conjugative pilus and is completely resistant to environmental DNase enzymes.'
      ],
      [
        'Transposon-mediated illegitimate transposition',
        'Transposons jump between genetic loci within a living cell and cannot spontaneously cross the extracellular space between heat-killed and live bacteria without a protective vector.'
      ],
      [
        'Generalized transduction by lytic virions',
        'Generalized transduction involves packaging of host chromosomal fragments into virions, which shields the nucleic acid from extracellular enzymatic digestion.'
      ]
    ],
    explanation: 'Transformation is the direct uptake and homologous incorporation of exogenous, naked double-stranded DNA fragments from the extracellular environment by naturally competent bacteria, including Streptococcus pneumoniae, Neisseria meningitidis, and Haemophilus influenzae. Because the DNA is free in the medium, adding deoxyribonuclease (DNase) degrades the naked genetic material and completely prevents transformation, as demonstrated in tube 1. Processes like conjugation and transduction protect the transferring DNA from environmental nucleases.',
    objective: 'Differentiate bacterial transformation from transduction and conjugation based on susceptibility to environmental deoxyribonuclease.',
    reference: refs.micro,
  },

  // 4. USMLE Step 2 CK: Acute Coronary Syndromes Management
  {
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'NSTEMI early invasive risk stratification',
    difficulty: 3,
    stem: 'A 64-year-old man with a history of hypertension and type 2 diabetes presents to the emergency department with 2 hours of substernal chest pressure radiating to his left jaw, accompanied by diaphoresis and nausea. Blood pressure is 154/92 mm Hg, pulse is 88/min, and oxygen saturation is 98% on room air. ECG reveals 1.5 mm of horizontal ST-segment depression in leads V4–V6. An initial high-sensitivity cardiac troponin T is markedly elevated. The patient receives chewable aspirin, sublingual nitroglycerin, and therapeutic subcutaneous enoxaparin. His GRACE score indicates high ischemic risk. Which of the following is the most appropriate next step in management?',
    options: [
      [
        'Early coronary angiography within 24 hours with intent to revascularize',
        'High-risk NSTEMI patients with dynamic ischemic ECG changes or elevated troponin benefit significantly from early invasive coronary angiography and revascularization within 24 hours.'
      ],
      [
        'Immediate intravenous fibrinolytic therapy with tenecteplase',
        'Fibrinolytic therapy is strictly indicated for acute STEMI when primary PCI cannot be performed within 120 minutes; it is harmful and contraindicated in NSTEMI.'
      ],
      [
        'Elective non-invasive CT coronary angiography on post-admission day 3',
        'CT coronary angiography is used to evaluate low-risk chest pain in outpatient or observation units, not for confirmed acute high-risk NSTEMI with elevated troponins.'
      ],
      [
        'Conservative medical management with serial troponins and stress testing prior to discharge',
        'An ischemia-guided conservative strategy is reserved for very low-risk patients without recurrent chest pain, hemodynamic instability, or dynamic ST changes.'
      ],
      [
        'Urgent surgical coronary artery bypass grafting without prior diagnostic angiography',
        'Diagnostic coronary angiography must precede surgical revascularization to define coronary anatomy, lesion severity, and surgical candidacy.'
      ]
    ],
    explanation: 'This patient presents with a high-risk Non-ST-Elevation Myocardial Infarction (NSTEMI) supported by ischemic symptoms, horizontal ST depressions, and elevated cardiac biomarkers. Current ACC/AHA and ESC guidelines recommend an early invasive strategy (coronary angiography within 24 hours) for NSTEMI patients with high-risk features, including established troponin elevation, dynamic ST-T wave changes, and elevated clinical risk scores (GRACE > 140). Intravenous fibrinolysis has shown no benefit and increased mortality in NSTEMI and is strictly contraindicated.',
    objective: 'Apply risk stratification to select an early invasive angiographic strategy over fibrinolysis in high-risk NSTEMI.',
    reference: refs.nice_acs,
  },

  // 5. USMLE Step 2 CK: Severe Pre-eclampsia Intrapartum Management
  {
    exam: 'Step 2 CK',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Preeclampsia with severe features management',
    difficulty: 3,
    stem: 'A 31-year-old primigravida at 36 weeks of gestation presents to the labor and delivery unit with a severe frontal headache, blurred vision, and right upper quadrant abdominal tenderness. Her blood pressure is 172/112 mm Hg on two readings 15 minutes apart. Urinalysis demonstrates 3+ protein. Platelet count is 88,000/mm³, serum creatinine is 1.3 mg/dL, and aspartate aminotransferase is 185 U/L. Fetal heart rate monitoring is reassuring. Intravenous access is established immediately. Which of the following is the most appropriate initial pharmacological combination for maternal stabilization?',
    options: [
      [
        'Intravenous magnesium sulfate and intravenous labetalol',
        'Severe preeclampsia requires seizure prophylaxis with magnesium sulfate and immediate blood pressure reduction with IV labetalol, hydralazine, or oral nifedipine to prevent stroke.'
      ],
      [
        'Oral furosemide and intravenous diazepam',
        'Diuretics reduce placental perfusion and are contraindicated in preeclampsia unless pulmonary edema develops, while benzodiazepines are inferior to magnesium for eclamptic prophylaxis.'
      ],
      [
        'Intravenous nitroprusside and subcutaneous terbutaline',
        'Nitroprusside poses fetal cyanide toxicity risks, and terbutaline is a tocolytic that is contraindicated when delivery is indicated for severe maternal preeclampsia.'
      ],
      [
        'Subcutaneous heparin and intravenous dexamethasone',
        'Anticoagulation and steroids do not lower acute blood pressure or prevent eclamptic seizures; maternal delivery is indicated after stabilization.'
      ],
      [
        'Oral atenolol and intramuscular phenytoin',
        'Atenolol is associated with fetal growth restriction, and phenytoin is significantly less effective than magnesium sulfate for eclampsia prevention.'
      ]
    ],
    explanation: 'The patient has preeclampsia with severe features (severe hypertension >= 160/110 mm Hg, thrombocytopenia, transaminitis, elevated creatinine, and neurological symptoms). Immediate management requires two simultaneous interventions: (1) seizure prophylaxis with intravenous magnesium sulfate (loading dose followed by continuous infusion), and (2) prompt blood pressure control to reduce the risk of maternal hemorrhagic stroke using intravenous labetalol, intravenous hydralazine, or immediate-release oral nifedipine. Once stabilized, delivery is indicated for gestational age >= 34 weeks.',
    objective: 'Formulate acute pharmacological stabilization with magnesium sulfate and labetalol for preeclampsia with severe features.',
    reference: refs.rcog_gtg,
  },

  // 6. USMLE Step 2 CK: Pediatric Dehydration & Gastroenteritis
  {
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Gastrointestinal',
    topic: 'Assessment and management of acute pediatric dehydration',
    difficulty: 2,
    stem: 'An 18-month-old toddler is brought to the clinic by her mother due to 2 days of watery diarrhea and vomiting. On examination, the child is irritable but consolable, with dry mucous membranes, sunken eyes, skin turgor with recoil within 1.5 seconds, and a heart rate of 135/min. Capillary refill time is 2 seconds, and blood pressure is 92/58 mm Hg. The anterior fontanelle is slightly depressed. There are no peritoneal signs. What is the most appropriate initial rehydration therapy for this patient?',
    options: [
      [
        'Oral rehydration solution administered in small, frequent volumes',
        'Mild-to-moderate dehydration is safely and effectively managed using oral rehydration solution (50–100 mL/kg over 3–4 hours) in small, frequent increments.'
      ],
      [
        'Rapid intravenous bolus of 20 mL/kg of 0.9% normal saline over 20 minutes',
        'Intravenous isotonic fluid boluses are indicated for severe dehydration characterized by hemodynamic compromise, hypovolemic shock, or failure of oral rehydration.'
      ],
      [
        'Intravenous infusion of 5% dextrose in water at maintenance rates',
        'D5W lacks electrolytes and can precipitate acute, life-threatening hyponatremia and cerebral edema in pediatric gastroenteritis.'
      ],
      [
        'Oral apple juice diluted with whole milk',
        'High-sugar drinks and hyperosmolar fruit juices worsen osmotic diarrhea, and milk may provoke transient lactose malabsorption during acute mucosal injury.'
      ],
      [
        'Immediate administration of oral loperamide and metoclopramide',
        'Antimotility agents and antiemetics are generally avoided in young toddlers due to central nervous system depression, paralytic ileus, and extrapyramidal toxicity.'
      ]
    ],
    explanation: 'This child exhibits signs of mild-to-moderate dehydration (irritable, dry mucous membranes, sunken eyes, mildly delayed recoil, stable hemodynamics without shock). According to AAP and WHO guidelines, oral rehydration therapy (ORT) with an isotonic, reduced-osmolarity oral rehydration solution is the first-line therapy for mild-to-moderate dehydration. ORT is as effective as IV fluids, non-invasive, avoids catheter-related complications, and can be administered with a syringe or small cup (e.g., 5 mL every 2–3 minutes). IV rehydration is reserved for severe shock, altered mental status, or persistent vomiting failure.',
    objective: 'Identify oral rehydration solution as first-line therapy for mild-to-moderate pediatric dehydration in gastroenteritis.',
    reference: refs.clinical,
  },

  // 7. PLAB / UKMLA: Acute Asthma Exacerbation Stepwise Escalation
  {
    exam: 'PLAB / UKMLA',
    subject: 'Medicine',
    system: 'Respiratory',
    topic: 'Acute severe versus life-threatening asthma management',
    difficulty: 3,
    stem: 'A 28-year-old woman presents to the emergency department in London with acute breathlessness and chest tightness. She has a history of moderate persistent asthma. On examination, she is unable to complete sentences in one breath. Respiratory rate is 28/min, heart rate is 118/min, and oxygen saturation is 93% on air. Peak expiratory flow (PEF) is 45% of her predicted baseline. She has received back-to-back nebulised salbutamol and ipratropium bromide with high-flow oxygen, as well as oral prednisolone 40 mg. Despite this, repeat PEF at 30 minutes remains 42% and her respiratory rate has risen to 32/min. What is the most appropriate next pharmacological intervention according to BTS/SIGN and NICE guidelines?',
    options: [
      [
        'Intravenous magnesium sulfate infusion over 20 minutes',
        'Intravenous magnesium sulfate (1.2–2.0 g IV over 20 minutes) is the established next step for acute severe asthma unresponsive to initial inhaled bronchodilators.'
      ],
      [
        'Intravenous aminophylline continuous infusion',
        'Aminophylline has a narrow therapeutic window and significant arrhythmogenic toxicity; it is reserved for intensive care settings when magnesium has failed.'
      ],
      [
        'Subcutaneous adrenaline (epinephrine)',
        'Subcutaneous or intramuscular adrenaline is indicated for acute anaphylaxis with bronchospasm, rather than isolated acute severe asthma exacerbations.'
      ],
      [
        'Inhaled fluticasone propionate high-dose dry powder',
        'Inhaled corticosteroids have a delayed onset of action and are unsuitable for acute emergency bronchodilation in status asthmaticus.'
      ],
      [
        'Immediate non-invasive bilevel positive airway pressure (BiPAP)',
        'BiPAP is rarely indicated in asthma due to high risk of pneumothorax and intrinsic PEEP; invasive mechanical ventilation is preferred if respiratory arrest is imminent.'
      ]
    ],
    explanation: 'The patient presents with acute severe asthma, defined by PEF 33–50% of predicted, inability to complete sentences, respiratory rate >= 25/min, and heart rate >= 110/min. British Thoracic Society (BTS/SIGN) and NICE guidelines recommend adding a single dose of intravenous magnesium sulfate (1.2–2.0 g infused over 20 minutes) for patients with acute severe asthma who have not responded adequately to initial inhaled bronchodilator therapy or who present with life-threatening features. Magnesium promotes bronchial smooth muscle relaxation by blocking calcium influx.',
    objective: 'Select intravenous magnesium sulfate as the second-line bronchodilator for acute severe asthma refractory to inhaled beta-agonists.',
    reference: refs.nice_asthma,
  },

  // 8. PLAB / UKMLA: Delirium versus Dementia Assessment in Elderly Care
  {
    exam: 'PLAB / UKMLA',
    subject: 'Geriatrics',
    system: 'Behavioral Health',
    topic: 'Differentiating acute delirium from chronic dementia',
    difficulty: 2,
    stem: 'An 82-year-old woman is admitted to the acute medical unit following a fall at home. Her family notes that over the past 48 hours she has become acutely confused, sees children playing in her wardrobe, and fluctuates between extreme agitation and periods of deep somnolence. Her daughter mentions that she has had mild forgetfulness for two years but was independently driving and managing her finances until 3 days ago. On physical examination, temperature is 38.2°C, blood pressure is 108/68 mm Hg, and pulse is 96/min. What clinical feature is most specific in distinguishing delirium from her baseline cognitive state?',
    options: [
      [
        'Acute onset with a fluctuating course and impaired attention',
        'Delirium is fundamentally characterized by an acute onset (hours to days), marked fluctuation of severity, and prominent inattention, in contrast to the insidious, chronic progression of dementia.'
      ],
      [
        'Impairment of long-term episodic autobiographical memory',
        'Long-term memory deficits are classic features of progressive dementia (e.g., Alzheimer disease) rather than isolated markers of acute delirium.'
      ],
      [
        'Gradual progressive decline in functional activities of daily living',
        'Gradual functional loss over months or years characterizes chronic neurodegenerative disorders, not acute delirium.'
      ],
      [
        'Presence of well-formed visual hallucinations without fluctuating awareness',
        'Persistent, non-fluctuating visual hallucinations with preserved alertness are seen in dementia with Lewy bodies.'
      ],
      [
        'Intact executive planning and preserved working memory',
        'Neither delirium nor advanced dementia exhibits preserved executive planning; delirium severely impairs working memory and cognitive speed.'
      ]
    ],
    explanation: 'Delirium is an acute, fluctuating disturbance in attention, awareness, and baseline cognitive function. Key distinguishing criteria (such as in the Confusion Assessment Method / 4AT) include acute onset (hours to days), fluctuation throughout the 24-hour cycle, altered level of consciousness, and inattention. Dementia typically has an insidious onset, progressive course over months to years, and preserved attention in its early stages. In this patient, the acute deterioration and fever strongly indicate delirium secondary to an acute intercurrent infection (e.g., UTI or pneumonia).',
    objective: 'Contrast the acute fluctuating inattention of delirium with the insidious progression of underlying dementia.',
    reference: refs.clinical,
  },

  // 9. PLAB / UKMLA: General Surgery / Acute Appendicitis
  {
    exam: 'PLAB / UKMLA',
    subject: 'Surgery',
    system: 'Gastrointestinal',
    topic: 'Clinical diagnosis and preoperative management of acute appendicitis',
    difficulty: 2,
    stem: 'A 21-year-old man presents to the surgical assessment unit with a 24-hour history of abdominal pain. The pain initially began around the umbilicus but has now migrated to the right lower quadrant and worsened with walking and coughing. He is anorexic and vomited once. On examination, temperature is 37.9°C, pulse is 92/min, and blood pressure is 124/76 mm Hg. Abdominal palpation reveals localized tenderness, involuntary guarding, and positive rebound tenderness at McBurney point. Urinalysis is normal. What is the physiological mechanism explaining the migration of his abdominal pain?',
    options: [
      [
        'Progression from visceral afferent stretch to somatic parietal peritoneal irritation',
        'Early appendiceal distension activates sympathetic visceral afferents (T10 dermatome/umbilicus), while transmural inflammation contacts the parietal peritoneum, activating somatic nerves (localized right iliac fossa pain).'
      ],
      [
        'Direct chemical peritonitis caused by early free perforation of bowel contents',
        'Free perforation typically presents with generalized rigidity and diffuse peritonitis rather than localized migratory appendiceal tenderness.'
      ],
      [
        'Referred pain mediated entirely through the right genitofemoral nerve',
        'The genitofemoral nerve supplies scrotal and thigh skin; it does not mediate periumbilical visceral pain or McBurney tenderness.'
      ],
      [
        'Bacterial seeding along the retroperitoneal mesenteric lymphatics',
        'Lymphatic spread causes reactive mesenteric lymphadenitis, not the classic visceral-to-somatic migration pattern of appendiceal pain.'
      ],
      [
        'Ascending migration of inflammation into the subdiaphragmatic space',
        'Subdiaphragmatic inflammation causes referred shoulder pain via the phrenic nerve, which is absent in uncomplicated appendicitis.'
      ]
    ],
    explanation: 'The classic migration of pain in acute appendicitis reflects neuroanatomical progression. Luminal obstruction leads to appendiceal distension and wall ischemia, stimulating unmyelinated visceral afferent C fibers that enter the spinal cord at T10, producing vague, poorly localized, periumbilical pain. As inflammation extends transmurally to involve the serosa and overlying parietal peritoneum, myelinated A-delta somatic sensory fibers are stimulated, producing sharp, well-localized pain directly over the right lower quadrant (McBurney point).',
    objective: 'Explain the neuroanatomical basis for the transition from visceral periumbilical pain to somatic parietal peritoneal pain in acute appendicitis.',
    reference: refs.anatomy,
  },

  // 10. AMC: General Practice / T2D Glycemic Control & Cardiorenal Protection
  {
    exam: 'AMC',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Cardiorenal protection with SGLT2 inhibitors in type 2 diabetes',
    difficulty: 3,
    stem: 'A 58-year-old man attends a general practice clinic in Melbourne for a routine chronic disease review. He has a 7-year history of type 2 diabetes mellitus and hypertension. Current medications are metformin 1000 mg twice daily and perindopril 5 mg daily. His BMI is 31 kg/m². Blood pressure is 132/82 mm Hg. Recent blood tests show HbA1c of 8.2% (66 mmol/mol), serum creatinine of 105 µmol/L, eGFR of 68 mL/min/1.73m², and a spot urine albumin-to-creatinine ratio (ACR) of 18 mg/mmol (microalbuminuria). According to current Australian Diabetes Society guidelines, which medication should be added next to improve glycemic control and reduce cardiorenal progression?',
    options: [
      [
        'Sodium-glucose cotransporter-2 (SGLT2) inhibitor',
        'SGLT2 inhibitors (e.g., empagliflozin, dapagliflozin) provide proven nephroprotection, delay chronic kidney disease progression, reduce heart failure hospitalizations, and improve glycemic control in diabetic kidney disease.'
      ],
      [
        'Sulfonylurea such as gliclazide',
        'While sulfonylureas reduce blood glucose, they carry a high risk of hypoglycemia, cause weight gain, and do not confer direct renal or cardiovascular benefits.'
      ],
      [
        'Dipeptidyl peptidase-4 (DPP-4) inhibitor such as sitagliptin',
        'DPP-4 inhibitors are glucose-lowering agents with weight neutrality, but they do not reduce hard kidney or cardiovascular outcomes compared to SGLT2 inhibitors.'
      ],
      [
        'Thiazolidinedione such as pioglitazone',
        'Pioglitazone causes fluid retention and is contraindicated in patients with or at risk for heart failure, making it suboptimal for cardiorenal risk reduction.'
      ],
      [
        'Basal insulin glargine administered once nightly',
        'Insulin is typically reserved for severe hyperglycemia, symptomatic catabolism, or when oral/injectable cardiorenal-protective agents fail to achieve target control.'
      ]
    ],
    explanation: 'Australian guidelines (RACGP / Australian Diabetes Society) and international consensus guidelines (KDIGO / ADA) strongly recommend adding an SGLT2 inhibitor (or GLP-1 receptor agonist) for patients with type 2 diabetes and evidence of persistent albuminuria or chronic kidney disease, regardless of baseline HbA1c. SGLT2 inhibitors reduce intraglomerular hypertension by restoring tubuloglomerular feedback, slowing renal function decline, and dramatically reducing cardiovascular death and heart failure admissions.',
    objective: 'Select an SGLT2 inhibitor as the preferred second-line therapy for type 2 diabetes with albuminuria to reduce cardiorenal risk.',
    reference: refs.nice_ckd,
  },

  // 11. AMC: Emergency Medicine / Australasian Snake Envenomation
  {
    exam: 'AMC',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Brown snake envenomation venom-induced consumptive coagulopathy',
    difficulty: 3,
    stem: 'A 35-year-old farmer in rural Queensland is bitten on the right ankle by an unidentified brown-colored snake while working in tall grass. A pressure immobilization bandage is applied immediately, and he is transported to the regional emergency department within 45 minutes. On arrival, he is conscious and alert. Vital signs are normal. A venous blood sample collected 30 minutes post-admission demonstrates an undetectable fibrinogen level (< 0.2 g/L), an INR > 10.0, and a markedly elevated D-dimer (> 20 mg/L). Platelet count is 140,000/mm³. Which of the following is the primary mechanism of the coagulopathy caused by Eastern brown snake (Pseudonaja textilis) envenomation?',
    options: [
      [
        'Prothrombin activation by a venom factor Xa/Va-like procoagulant complex',
        'Eastern brown snake venom contains a potent prothrombin activator that rapidly converts prothrombin to thrombin, consuming fibrinogen and causing venom-induced consumptive coagulopathy (VICC).'
      ],
      [
        'Direct antibody-mediated destruction of circulating coagulation factor VIII',
        'Acquired hemophilia involves autoantibodies against factor VIII and does not cause acute hypofibrinogenemia or occur as a snakebite envenomation mechanism.'
      ],
      [
        'Immediate destruction of hepatic parenchyma resulting in acute failure of clotting factor synthesis',
        'Loss of hepatic synthetic capacity takes days to develop; acute snakebite coagulopathy occurs within minutes to hours due to intravascular enzymatic consumption.'
      ],
      [
        'Selective direct fibrinolysis by a plasminogen activator toxin',
        'While secondary fibrinolysis occurs, the initiating and predominant driver of brown snake VICC is intravascular prothrombin activation.'
      ],
      [
        'Autoimmune heparin-induced thrombocytopenia mimicry',
        'Snake venom coagulopathy is an enzymatic consumption process rather than an immune-mediated platelet factor 4 reaction.'
      ]
    ],
    explanation: 'Venom-Induced Consumptive Coagulopathy (VICC) is the hallmark of Australasian elapid snake envenomation, especially from the Eastern brown snake (Pseudonaja textilis). Brown snake venom contains a potent prothrombin activator complex (pseutarin C, homologous to mammalian factor Xa/Va) that enzymatically converts prothrombin into thrombin. This triggers massive, unregulated fibrin formation and secondary fibrinolysis, leading to rapid, complete consumption of fibrinogen and prolongation of INR/aPTT within an hour of envenomation.',
    objective: 'Recognize the pathophysiology of venom-induced consumptive coagulopathy (VICC) following brown snake envenomation.',
    reference: refs.amc_anthology,
  },

  // 12. AMC: Psychiatry / Major Depression with High Suicidal Risk
  {
    exam: 'AMC',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Acute suicide risk assessment and admission',
    difficulty: 2,
    stem: 'A 42-year-old man is brought to an emergency department in Sydney by his brother. The brother reports that over the past two weeks, the patient has given away his personal possessions, written a farewell letter, and purchased a rope with the explicit intent of hanging himself tonight. The patient states, "There is no point in living; my family is better off without me." He has a history of major depressive disorder and one prior suicide attempt 5 years ago. The patient demands to leave the emergency department immediately. Which of the following is the most appropriate management under the relevant state Mental Health Act?',
    options: [
      [
        'Involuntary admission to a psychiatric facility for urgent assessment and safety',
        'A patient with acute major depression, active suicidal intent, a lethal plan, and a prior attempt meets legal and clinical criteria for involuntary detention to prevent imminent self-harm.'
      ],
      [
        'Discharge home with his brother after having the patient sign a "no-harm contract"',
        'No-harm contracts are clinically ineffective, do not guarantee safety, and are unacceptable in patients with active suicidal intent and immediate means.'
      ],
      [
        'Prescribe an oral SSRI and provide an outpatient mental health appointment in 2 weeks',
        'Antidepressants require weeks to take effect, and outpatient management is unsafe when imminent, active suicidal risk is present.'
      ],
      [
        'Permit the patient to leave because he has the right to refuse medical assessment',
        'Under Mental Health legislation, autonomy is superseded when severe mental illness poses an imminent risk of serious physical harm to the patient or others.'
      ],
      [
        'Administer intramuscular haloperidol and discharge under the supervision of his family',
        'Chemical sedation does not address underlying suicidal intent or ensure safety once the sedation resolves; hospitalization is mandatory.'
      ]
    ],
    explanation: 'Under Australian State and Territory Mental Health Acts, involuntary admission (scheduling) is legally warranted when a person is diagnosed with a mental illness and there is an imminent risk of serious harm to self or others, no less restrictive environment is available, and the patient refuses voluntary admission. High-risk features in this patient include a specific lethal plan (rope), preparatory acts (giving away possessions, farewell letter), expressed hopelessness, a previous attempt, and active intent. Involuntary psychiatric admission is life-saving and mandatory.',
    objective: 'Apply medical and legal principles of involuntary admission for patients with acute mental illness and imminent suicide risk.',
    reference: refs.ethics,
  },

  // 13. MCCQE: Family Medicine / Preventive Health & Screening Ethics
  {
    exam: 'MCCQE',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Preventive breast cancer screening guidelines',
    difficulty: 2,
    stem: 'A 52-year-old asymptomatic woman visits her family physician in Toronto for a periodic health visit. She has no personal or family history of breast, ovarian, or colorectal cancer. She asks whether she should undergo routine mammography screening. According to the Canadian Task Force on Preventive Health Care (CTFPHC) guidelines, which of the following is the most appropriate recommendation regarding breast cancer screening for this patient?',
    options: [
      [
        'Engage in shared decision-making regarding the benefits and harms of screening mammography every 2 to 3 years',
        'CTFPHC guidelines conditionally recommend shared decision-making for women aged 50–74, balancing mortality reduction against risks of false positives and overdiagnosis.'
      ],
      [
        'Mandatory annual mammography combined with breast ultrasound for all women aged 50 and older',
        'Annual screening and supplemental ultrasound are not recommended for average-risk asymptomatic women due to high false-positive biopsy rates.'
      ],
      [
        'Routine genetic testing for BRCA1 and BRCA2 mutations prior to initiating imaging',
        'Genetic screening is not indicated for average-risk individuals without a significant family history of hereditary breast and ovarian cancer syndromes.'
      ],
      [
        'Breast MRI screening every 2 years as a more sensitive alternative to mammography',
        'Breast MRI is reserved for very high-risk individuals (e.g., confirmed BRCA mutation or prior chest radiation), not for average-risk screening.'
      ],
      [
        'Advise against all breast cancer screening until age 60',
        'The CTFPHC recommends that screening discussions begin between ages 50 and 74 rather than delaying until age 60.'
      ]
    ],
    explanation: 'The Canadian Task Force on Preventive Health Care (CTFPHC) recommends shared decision-making for breast cancer screening with mammography every 2 to 3 years in average-risk women aged 50 to 74 years. The guidance emphasizes that clinicians must inform patients of both the absolute benefits (small reduction in breast cancer mortality) and potential harms (false-positive results, unnecessary biopsies, and overdiagnosis of indolent tumors that would never have caused clinical disease).',
    objective: 'Counsel average-risk women aged 50–74 on breast cancer screening using Canadian Task Force guidelines and shared decision-making.',
    reference: refs.mcc_objectives,
  },

  // 14. MCCQE: Internal Medicine / Chronic Kidney Disease & Mineral Bone Disease
  {
    exam: 'MCCQE',
    subject: 'Medicine',
    system: 'Renal',
    topic: 'Secondary hyperparathyroidism in CKD',
    difficulty: 3,
    stem: 'A 60-year-old woman with stage 4 chronic kidney disease (eGFR 22 mL/min/1.73m²) secondary to diabetic nephropathy attends her nephrology clinic in Montreal. Laboratory results demonstrate serum calcium of 2.10 mmol/L (normal 2.15–2.55), serum phosphate of 1.95 mmol/L (normal 0.80–1.45), intact parathyroid hormone (PTH) of 280 pg/mL (normal 15–65), and 1,25-dihydroxyvitamin D of 18 pmol/L (normal 40–150). Which physiological mechanism initiates the elevation of parathyroid hormone in this patient?',
    options: [
      [
        'Phosphate retention and decreased 1-alpha-hydroxylase activity leading to hypocalcemia',
        'Reduced GFR decreases phosphate excretion (hyperphosphatemia) and diminishes renal 1-alpha-hydroxylase activity, lowering calcitriol and serum calcium to stimulate PTH secretion.'
      ],
      [
        'Primary autonomous adenomatous hyperplasia of parathyroid chief cells',
        'Autonomous, non-suppressible secretion describes tertiary hyperparathyroidism, which typically occurs after years of end-stage renal disease.'
      ],
      [
        'Direct transcriptional upregulation of parathyroid hormone by severe hypercalcemia',
        'Hypercalcemia suppresses PTH secretion via the calcium-sensing receptor; hypocalcemia stimulates PTH release.'
      ],
      [
        'Increased renal tubular tubular reabsorption of phosphate mediated by calcitonin',
        'Calcitonin promotes urinary phosphate excretion and lowers blood calcium, rather than causing uremic phosphate retention.'
      ],
      [
        'Suppression of fibroblast growth factor 23 (FGF-23) secretion by osteocytes',
        'FGF-23 levels are markedly elevated in CKD to promote urinary phosphate excretion and inhibit calcitriol synthesis.'
      ]
    ],
    explanation: 'Secondary hyperparathyroidism in chronic kidney disease is initiated by two primary factors: (1) phosphate retention resulting from reduced glomerular filtration, and (2) loss of functional renal parenchyma, leading to decreased 1-alpha-hydroxylase activity and deficient production of 1,25-dihydroxyvitamin D (calcitriol). Elevated phosphate directly stimulates PTH synthesis and complexes with calcium, causing mild hypocalcemia. Calcitriol deficiency removes normal negative feedback on the parathyroid glands and decreases intestinal calcium absorption, driving compensatory parathyroid hyperplasia.',
    objective: 'Detail the interrelated mechanisms of phosphate retention, calcitriol deficiency, and hypocalcemia in CKD-mineral bone disorder.',
    reference: refs.nice_ckd,
  },

  // 15. MCCQE: Pediatrics / Developmental Milestones & Red Flags
  {
    exam: 'MCCQE',
    subject: 'Pediatrics',
    system: 'Nervous System',
    topic: 'Recognition of developmental delay and speech regression red flags',
    difficulty: 2,
    stem: 'A 24-month-old boy is brought to his family physician by his parents for a well-child checkup. The parents are concerned because he speaks only two recognizable single words ("mama", "ball") and does not combine two words. He does not point to show interest in objects or make consistent eye contact. At 15 months, he was reported to wave "bye-bye" and imitate sounds, but he stopped doing so around 18 months. Physical examination is unremarkable, with normal hearing demonstrated on prior newborn screening. Which of the following is the most appropriate next step in management?',
    options: [
      [
        'Urgent formal developmental and audiological evaluation for suspected autism spectrum disorder',
        'Speech delay combined with loss of previously acquired social/language skills (regression) and impaired joint attention is a major red flag requiring immediate comprehensive evaluation.'
      ],
      [
        'Reassure the parents that language development varies widely and re-evaluate at age 3 years',
        'A "wait-and-see" approach is contraindicated in the presence of developmental regression and impaired social communication.'
      ],
      [
        'Initiate broad-spectrum empiric oral antibiotic therapy for occult middle ear effusion',
        'Antibiotics are not indicated without physical evidence of acute otitis media, and middle ear fluid does not explain loss of social milestones.'
      ],
      [
        'Immediate brain MRI under general anesthesia to rule out structural intracranial mass',
        'Neuroimaging is not a first-line screening investigation for developmental delay unless focal neurological signs, macrocephaly, or seizures are present.'
      ],
      [
        'Prescribe oral methylphenidate for early-onset attention-deficit/hyperactivity disorder',
        'Stimulant medications are not indicated or approved for 24-month-old children and do not treat social-communication regression.'
      ]
    ],
    explanation: 'Developmental regression (loss of previously acquired language, motor, or social skills) at any age is an absolute red flag that warrants immediate multidisciplinary referral. At 24 months, a toddler is expected to have a vocabulary of >= 50 words, combine two words into meaningful phrases ("more milk"), point to indicate interest, and engage in reciprocal social interaction. The combination of expressive language delay, loss of gestures/imitation, and poor joint attention strongly raises concern for Autism Spectrum Disorder (ASD). Immediate audiological testing and specialized developmental assessment are essential.',
    objective: 'Identify developmental regression and lack of joint attention as urgent indications for formal autism and audiological assessment.',
    reference: refs.clinical,
  },
];

export const codes = specs.map((_, i) => `intl-${String(i + 1).padStart(4, '0')}`);
export const questions = authorBatch(1, specs, codes);
