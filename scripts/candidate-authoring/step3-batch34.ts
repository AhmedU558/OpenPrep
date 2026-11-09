import { CandidateSpec } from './types';

export const step3Batch34: CandidateSpec[] = [
  {
    "code": "op-c-s3-0826",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Ventilator-Associated Pneumonia Prevention Evidence-Based Care Bundle",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man remains mechanically ventilated in the intensive care unit on day 4 following surgical repair of a ruptured abdominal aortic aneurysm. His sedation is being weaned. The multidisciplinary ICU team conducts morning rounds to review his infection control measures and assess his risk for ventilator-associated pneumonia (VAP). Which of the following combinations of interventions represents the most strongly supported evidence-based bundle to reduce the incidence of ventilator-associated pneumonia and hospital mortality?",
    "choices": [
      [
        "Head-of-bed elevation 30 to 45 degrees, daily spontaneous awakening and breathing trials, and subglottic secretion drainage",
        "Ventilator-associated pneumonia (VAP) is an acute lower respiratory tract infection occurring > 48 hours after endotracheal intubation. VAP significantly increases ICU length of stay, mechanical ventilation duration, and mortality. Evidence-based guidelines (SHEA/IDSA and CDC) recommend a multicomponent 'VAP prevention bundle': (1) Semirecumbent positioning with elevation of the head of the bed to 30 to 45 degrees to prevent macro- and microaspiration of gastric secretions, (2) Daily 'sedation interruption' (spontaneous awakening trial, SAT) paired with daily spontaneous breathing trials (SBT) to expedite extubation, (3) Use of endotracheal tubes with subglottic secretion drainage ports for patients requiring mechanical ventilation > 48-72 hours, and (4) Changing ventilator breathing circuits only when visibly soiled or malfunctioning (routine scheduled circuit changes actually INCREASE VAP rates by disrupting bacterial biofilms)."
      ],
      [
        "Routine scheduled replacement of mechanical ventilator breathing circuits every 48 hours",
        "Routine ventilator circuit replacement introduces bacterial contamination and aerosolization, significantly increasing VAP rates; circuits should only be changed when soiled."
      ],
      [
        "Continuous supine positioning (0 degrees) to optimize abdominal perfusion",
        "Placing mechanically ventilated patients flat increases gastroesophageal reflux and aspiration of gastric contents, tripling the risk of VAP."
      ],
      [
        "Prophylactic intravenous vancomycin and cefepime for the duration of intubation",
        "Prophylactic systemic antibiotics do not prevent VAP and promote infection with multidrug-resistant pathogens (MRSA, Pseudomonas, Acinetobacter) and C. difficile."
      ],
      [
        "Deep continuous heavy sedation targeting Richmond Agitation-Sedation Scale (RASS) of -5",
        "Deep continuous sedation prolongs mechanical ventilation, increases delirium, impairs airway reflexes, and substantially elevates VAP risk."
      ]
    ],
    "shortestValidSolution": "VAP prevention = elevation 30-45 deg + daily spontaneous awakening/breathing trials + subglottic drainage (NO routine circuit changes).",
    "necessaryInference": "Apply IDSA/SHEA guidelines on the VAP prevention bundle: head-of-bed elevation, daily awakening/breathing trials, and subglottic drainage.",
    "strongestDistractor": "Routine scheduled replacement of mechanical ventilator breathing circuits every 48 hours",
    "distractorExclusion": "Frequent scheduled circuit changes increase VAP risk; circuits should be changed only when visibly contaminated.",
    "citation": "Klompas M, Branson R, Cawcutt K, et al. Strategies to Prevent Ventilator-Associated Pneumonia, Ventilator-Associated Events, and Nonventilator Hospital-Acquired Pneumonia in Acute-Care Hospitals: 2022 Update. Infect Control Hosp Epidemiol. 2022;43(6):687-713. PMID: 35589091.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care item on evidence-based ventilator bundle interventions for VAP prevention.",
      "distractorExclusionNotes": "Excluded prophylactic antibiotics, supine positioning, and routine circuit changes because the evidence-based bundle requires 30-45 degree elevation and SAT/SBT.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0827",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Weaning From Mechanical Ventilation Rapid Shallow Breathing Index Interpretation",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman is evaluated for liberation from mechanical ventilation on hospital day 5 after admission for acute hypercapnic respiratory failure secondary to a severe COPD exacerbation. Her bronchospasm has resolved, and she has been successfully treated with corticosteroids and bronchodilators. Arterial blood gas on pressure support ventilation (PS 5 cm H2O, PEEP 5 cm H2O, FiO2 0.30) reveals pH 7.38, PaCO2 44 mm Hg, and PaO2 82 mm Hg. A 30-minute spontaneous breathing trial (SBT) on a T-piece is initiated. At minute 30, she is calm, alert, and cooperative. Her spontaneous respiratory rate is 18 breaths/min, and her measured average tidal volume is 400 mL (0.40 L). Blood pressure is 126/74 mm Hg, heart rate is 78/min, and oxygen saturation is 96%. Which of the following correctly calculates her Rapid Shallow Breathing Index (RSBI) and interprets its predictive value for successful extubation?",
    "choices": [
      [
        "RSBI is 45 breaths/min/L, which is well below 105 and strongly predictive of successful extubation",
        "The Rapid Shallow Breathing Index (RSBI, Tobin index) is the most widely validated bedside weaning predictor in mechanically ventilated patients. RSBI is calculated as the spontaneous respiratory rate (f, in breaths/min) divided by the spontaneous tidal volume (Vt, in liters): RSBI = f / Vt. For this patient, RSBI = 18 breaths/min / 0.40 L = 45 breaths/min/L. An RSBI < 105 breaths/min/L during a spontaneous breathing trial is strongly predictive of successful weaning and extubation (high sensitivity and negative predictive value for extubation failure). Conversely, an RSBI > 105 indicates rapid, shallow, inefficient breathing and predicts extubation failure. Given her low RSBI (45), adequate oxygenation, stable hemodynamics, and alert sensorium, she should proceed to prompt extubation."
      ],
      [
        "RSBI is 180 breaths/min/L, which indicates significant fatigue and mandates continued mechanical ventilation",
        "Dividing respiratory rate by tidal volume in milliliters (18 / 0.1) produces an erroneous calculation; tidal volume must be expressed in liters."
      ],
      [
        "RSBI is 7.2 breaths/min/L, indicating hypoventilation requiring immediate tracheostomy",
        "Multiplying respiratory rate by tidal volume calculates minute ventilation (7.2 L/min), not the RSBI ratio."
      ],
      [
        "RSBI is 105 breaths/min/L, representing the exact threshold where extubation is contraindicated",
        "Her calculated RSBI is 45, which is safely and decisively below the 105 cutoff."
      ],
      [
        "RSBI has no predictive utility in COPD and extubation must be delayed for 48 hours",
        "RSBI was validated extensively across medical ICU populations, including COPD patients undergoing weaning trials."
      ]
    ],
    "shortestValidSolution": "Respiratory rate 18 / tidal volume 0.40 L = RSBI 45 (< 105) -> strongly predicts successful extubation.",
    "necessaryInference": "Calculate and interpret the Rapid Shallow Breathing Index (RSBI = f/Vt in L) using the <105 threshold to guide extubation.",
    "strongestDistractor": "RSBI is 180 breaths/min/L, which indicates significant fatigue and mandates continued mechanical ventilation",
    "distractorExclusion": "Units error; RSBI uses tidal volume in liters, giving 18 / 0.40 = 45, which strongly supports extubation.",
    "citation": "Yang KL, Tobin MJ. A Prospective Study of Indexes Predicting the Outcome of Trials of Weaning From Mechanical Ventilation. N Engl J Med. 1991;324(21):1445-1450. PMID: 2023603.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care item on calculating and interpreting the Rapid Shallow Breathing Index (RSBI) for extubation readiness.",
      "distractorExclusionNotes": "Excluded calculation errors and tracheostomy because RSBI = 45 is well below 105, indicating readiness for extubation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0828",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Post-Extubation Laryngeal Stridor Cuff Leak Test and Steroid Prophylaxis",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman is intubated for 10 days in the intensive care unit following severe septic shock and acute respiratory distress syndrome requiring high positive end-expiratory pressure and a large 8.0-mm endotracheal tube. She has fully recovered from sepsis and meets all clinical criteria for extubation (alert, cooperative, passed 60-minute spontaneous breathing trial, RSBI 52). Prior to extubation, the intensivist performs a quantitative endotracheal tube cuff leak test. With the cuff deflated, the measured expiratory tidal volume is 320 mL compared to an inspiratory tidal volume of 350 mL, representing a cuff leak volume of only 30 mL (8.5% of delivered tidal volume). A repeat measurement confirms absent audible air leak around the tube upon deflation. Which of the following is the most appropriate management strategy before proceeding with extubation?",
    "choices": [
      [
        "Delay extubation, administer intravenous methylprednisolone for >= 4-6 hours, and retest cuff leak",
        "Post-extubation laryngeal edema (stridor) is a major cause of upper airway obstruction and emergency re-intubation, occurring predominantly after prolonged intubation (>6-7 days), female sex, large tube size, or traumatic intubation. The cuff leak test assesses upper airway patency around the deflated endotracheal tube. A low cuff leak volume (< 110 mL or < 15-24% of delivered tidal volume) or absence of an audible leak signifies significant laryngeal and glottic mucosal edema. When a patient fails the cuff leak test, immediate extubation carries a high risk of catastrophic laryngeal obstruction. Guidelines recommend delaying extubation for at least 4 to 6 hours (or 12-24 hours) while administering intravenous corticosteroids (e.g., methylprednisolone 20-40 mg IV every 4-6 hours) to reduce subglottic inflammatory edema, followed by repeating the cuff leak test prior to extubation."
      ],
      [
        "Proceed with immediate extubation and place the patient on room air nasal cannula",
        "Extubating a patient with zero cuff leak volume leads to severe upper airway stridor, asphyxiation, and traumatic emergency re-intubation."
      ],
      [
        "Perform immediate bedside surgical tracheostomy under local anesthesia",
        "Tracheostomy is unnecessarily invasive; the vast majority of patients with low cuff leak respond rapidly to short-course intravenous corticosteroids."
      ],
      [
        "Administer high-dose inhaled albuterol every fifteen minutes for three doses",
        "Albuterol acts on lower bronchiolar beta-2 receptors; it has no effect on mechanical upper airway glottic or vocal cord edema."
      ],
      [
        "Change the 8.0-mm endotracheal tube to an 8.5-mm tube over an airway exchange catheter",
        "Placing a larger endotracheal tube causes additional mechanical friction and tears laryngeal mucosa, severely worsening glottic edema."
      ]
    ],
    "shortestValidSolution": "Prolonged intubation + failed cuff leak test (<110 mL / 8%) = glottic edema -> delay extubation + IV steroids >=4-6 hrs before re-testing.",
    "necessaryInference": "Recognize a failed cuff leak test as high risk for post-extubation stridor and administer IV corticosteroids >=4 hours before extubation.",
    "strongestDistractor": "Proceed with immediate extubation and place the patient on room air nasal cannula",
    "distractorExclusion": "Immediate extubation with absent cuff leak risks acute upper airway occlusion; preemptive steroid administration reduces re-intubation rates.",
    "citation": "Kuriyama A et al. Prophylactic Corticosteroids for Prevention of Postextubation Stridor and Reintubation in Adults: A Systematic Review and Meta-analysis. Chest. PMID: 28232056.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care item on cuff leak test interpretation and prophylactic corticosteroid timing to prevent post-extubation stridor.",
      "distractorExclusionNotes": "Excluded immediate extubation (stridor risk) and tracheostomy (excessive) because IV steroids for 4-6 hours resolve laryngeal edema.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0829",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Difficult Airway Management in the ICU Failed Intubation Algorithm",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with septic shock and severe ARDS in the intensive care unit requires urgent endotracheal intubation. The patient is pre-oxygenated, rapidly induced with etomidate and rocuronium, and an experienced intensivist performs direct laryngoscopy with a Macintosh 3 blade. Due to severe pharyngeal edema and prominent secretions, only the epiglottis tip is visualised (Cormack-Lehane Grade 3b); an attempted blind passage of a tracheal tube with stylet is unsuccessful. A second attempt by a second experienced operator using video laryngoscopy with a hyperangulated blade is attempted with optimal external laryngeal manipulation, but the vocal cords cannot be adequately visualised or cannulated. Oxygen saturation drops from 95% to 76%, and heart rate drops from 110/min to 52/min with sinus bradycardia. Bag-valve-mask ventilation is initiated, but achieves negligible chest rise with continuous air leak. Which of the following is the most appropriate immediate next step in management?",
    "choices": [
      [
        "Insertion of a second-generation supraglottic airway device (e.g., laryngeal mask airway)",
        "This patient is in a critical 'cannot intubate, cannot oxygenate' (CICO) or failing airway scenario in the ICU, complicated by severe hypoxia and bradycardia. The Difficult Airway Society (DAS) and American Society of Anesthesiologists (ASA) algorithms mandate that when direct/video laryngoscopy attempts have failed (limited to a maximum of 3 attempts to prevent airway trauma/hemorrhage) and face-mask ventilation is inadequate, the immediate Plan B is placement of a Supraglottic Airway Device (SAD, such as an i-gel or ProSeal LMA). A second-generation SAD allows rapid rescue oxygenation and ventilation, provides a conduit for fiberoptic-guided intubation, and seals against gastric aspiration. If SAD placement restores oxygenation, the patient is stabilized. If SAD placement fails to oxygenate and face-mask ventilation fails, emergent Plan D (surgical front-of-neck access / scalpel-bougie cricothyroidotomy) must be performed immediately."
      ],
      [
        "A third direct laryngoscopy attempt using a larger Miller straight blade",
        "Repeated direct laryngoscopy attempts waste critical seconds during profound hypoxemic bradycardia and cause soft tissue trauma, turning a difficult airway into a fatal one."
      ],
      [
        "Immediate administration of intravenous sugammadex to reverse rocuronium paralysis",
        "Reversing neuromuscular blockade takes 2 to 3 minutes, does not immediately restore airway patency in severe pharyngeal edema, and leads to hypoxic cardiac arrest."
      ],
      [
        "Blind digital intubation through the oropharynx using a gum elastic bougie",
        "Blind probing into an edematous airway causes pharyngeal wall perforation, false passage, and catastrophic hemorrhage."
      ],
      [
        "Intravenous infusion of high-dose atropine while continuing chest compressions",
        "Hypoxic bradycardia is caused by asphyxia; restoring alveolar oxygenation via a supraglottic airway or surgical airway is the definitive treatment."
      ]
    ],
    "shortestValidSolution": "Failed intubation + failed bag-mask + desaturation to 76% = cannot intubate/cannot oxygenate -> insert supraglottic airway (LMA) immediately.",
    "necessaryInference": "Apply the DAS/ASA difficult airway algorithm: insert a supraglottic airway immediately when laryngoscopy and bag-mask ventilation fail.",
    "strongestDistractor": "A third direct laryngoscopy attempt using a larger Miller straight blade",
    "distractorExclusion": "Repeated laryngoscopy attempts worsen laryngeal trauma and delay life-saving rescue oxygenation; supraglottic airway is Plan B.",
    "citation": "Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 Guidelines for Management of Unanticipated Difficult Intubation in Adults. Br J Anaesth. 2015;115(6):827-848. PMID: 26556848.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/airway emergency item on applying the failed intubation algorithm in the ICU.",
      "distractorExclusionNotes": "Excluded repeated laryngoscopy and reversal agents because immediate supraglottic airway placement restores oxygenation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0830",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Delirium in Hospitalized Adults Multicomponent Nonpharmacological Prevention",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old man with mild baseline vascular cognitive impairment is hospitalized for community-acquired pneumonia. On hospital day 2, his acute infection is resolving on ceftriaxone and azithromycin, and he is afebrile. However, at dusk, he becomes restless, disoriented to place and time, pulls at his peripheral intravenous line, and attempts to climb out of bed, claiming he needs to go to work. Examination reveals fluctuating attention, disorganized thinking, and normal vital signs. He has no focal neurological deficits, and physical exam is otherwise normal. Bladder catheterization reveals no urinary retention, and blood glucose and electrolytes are normal. Which of the following represents the most effective evidence-based management strategy for this patient's delirium?",
    "choices": [
      [
        "Multicomponent nonpharmacological interventions (reorientation, cognitive stimulation, sleep hygiene, early mobilization, family presence)",
        "Delirium (acute disturbance in attention and awareness developing over hours to days with fluctuating course) is common in hospitalized older adults, especially those with pre-existing dementia. Both the American Geriatrics Society (AGS) and the Society of Critical Care Medicine (SCCM) guidelines strongly emphasize that multicomponent nonpharmacological interventions (e.g., the Hospital Elder Life Program, HELP) are the gold standard for prevention and treatment. Core components include: (1) frequent orientation to person, place, and time, (2) cognitive stimulation, (3) promoting sleep hygiene (dimming lights at night, clustering nighttime care, eliminating noise), (4) early physical mobilization, (5) ensuring access to visual and hearing aids (glasses, dentures, hearing aids), (6) hydration, and (7) encouraging family presence. Antipsychotics (e.g., haloperidol, quetiapine) have NOT been shown to reduce delirium duration or mortality, and should be strictly reserved for patients with severe agitation posing imminent harm to self or staff."
      ],
      [
        "Scheduled intravenous haloperidol 2 mg every six hours around the clock",
        "Routine or scheduled antipsychotics do not shorten delirium duration or improve mortality, and carry black-box warnings for mortality in dementia, QTc prolongation, and extrapyramidal symptoms."
      ],
      [
        "Initiation of oral lorazepam 1 mg every four hours for behavioral sedation",
        "Benzodiazepines paradoxically worsen delirium, prolong cognitive clouding, and increase fall risk, and are indicated only for alcohol or sedative withdrawal."
      ],
      [
        "Application of bilateral wrist and vest physical restraints to prevent falls",
        "Physical restraints increase psychological agitation, prolong delirium, cause pressure injury, and carry risk of strangulation and asphyxiation."
      ],
      [
        "Immediate transfer to the intensive care unit for continuous propofol infusion",
        "ICU transfer and heavy sedation are excessively invasive and harmful for hyperactive delirium that responds to nonpharmacological environment management."
      ]
    ],
    "shortestValidSolution": "Hospitalized elderly + acute fluctuating confusion = delirium -> multicomponent nonpharmacological care (reorientation, mobilization, sleep hygiene).",
    "necessaryInference": "Select multicomponent nonpharmacological management over antipsychotics or benzodiazepines as first-line therapy for inpatient delirium.",
    "strongestDistractor": "Scheduled intravenous haloperidol 2 mg every six hours around the clock",
    "distractorExclusion": "Antipsychotics fail to improve delirium resolution or mortality in clinical trials; nonpharmacological interventions are first-line.",
    "citation": "Inouye SK, Westendorp RG, Saczynski JS. Delirium in Elderly People. Lancet. 2014;383(9920):911-922. PMID: 23992774.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hospitalist medicine/geriatrics item on evidence-based nonpharmacological management of inpatient delirium.",
      "distractorExclusionNotes": "Excluded haloperidol and benzodiazepines because nonpharmacological environmental protocols are the proven standard of care.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0831",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "ICU-Acquired Weakness Critical Illness Polyneuropathy and Myopathy Prevention",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman is admitted to the intensive care unit with severe septic shock and multi-organ failure secondary to necrotizing soft-tissue infection requiring multiple surgical debridements, vasopressors, and prolonged mechanical ventilation for 12 days. As her sepsis resolves and sedation is turned off, she becomes alert and responsive. However, the nursing team notes that she has profound generalized weakness. Neurological examination reveals symmetric, flaccid quadriparesis (muscle strength 2/5 in both proximal and distal muscle groups of upper and lower extremities), diffuse muscle wasting, depressed deep tendon reflexes (1+), and preserved facial muscle movement and pupillary light reflexes. Sensation to pinprick is diminished in a stocking-glove pattern. Serum electrolytes, creatine kinase, and head CT are normal. Which of the following clinical strategies has the strongest evidence to prevent the development and mitigate the progression of Intensive Care Unit-Acquired Weakness (ICUAW)?",
    "choices": [
      [
        "Protocolized early physical rehabilitation and occupational therapy paired with light sedation",
        "Intensive Care Unit-Acquired Weakness (ICUAW) encompasses Critical Illness Polyneuropathy (CIP, an axonal sensorimotor polyneuropathy) and Critical Illness Myopathy (CIM, a non-necrotizing primary myopathy with thick filament loss), frequently coexisting in critically ill patients with sepsis and prolonged mechanical ventilation. It causes delayed extubation, prolonged hospitalization, and chronic disability. Large randomized clinical trials have demonstrated that protocolized early physical and occupational therapy (early mobility initiated while patients are still mechanically ventilated) paired with daily sedation interruption and light sedation protocols significantly reduces the incidence of ICUAW, shortens mechanical ventilation duration, and improves functional independence at hospital discharge. Avoiding unnecessary neuromuscular blockade, systemic corticosteroids, and hyperglycemia also mitigates risk."
      ],
      [
        "High-dose intravenous methylprednisolone therapy for seven consecutive days",
        "Systemic corticosteroids are an established risk factor that exacerbates muscle catabolism and triggers acute critical illness myopathy."
      ],
      [
        "Continuous prophylactic neuromuscular blockade with cisatracurium infusion",
        "Prolonged neuromuscular blockade leads to denervation-like muscle atrophy and is a major causative risk factor for ICUAW."
      ],
      [
        "Intravenous immunoglobulin (IVIG) therapy at 2 g/kg divided over two days",
        "IVIG has shown no efficacy in randomized controlled trials for the prevention or treatment of critical illness polyneuropathy or myopathy."
      ],
      [
        "Strict continuous bed rest and immobilization until full discharge from the ICU",
        "Prolonged immobilization accelerates disuse muscle atrophy (losing up to 2% of muscle mass per day) and worsens long-term physical impairment."
      ]
    ],
    "shortestValidSolution": "ICU sepsis >10 days + symmetric flaccid weakness = ICUAW (CIP/CIM) -> early mobility rehabilitation + light sedation protocol.",
    "necessaryInference": "Identify ICU-acquired weakness and select early mobilization paired with minimal sedation as the primary evidence-based preventive strategy.",
    "strongestDistractor": "High-dose intravenous methylprednisolone therapy for seven consecutive days",
    "distractorExclusion": "Corticosteroids trigger muscle breakdown and exacerbate critical illness myopathy; early mobility is the proven intervention.",
    "citation": "Schweickert WD, Pohlman MC, Pohlman AS, et al. Early Physical and Occupational Therapy in Mechanically Ventilated, Critically Ill Patients: A Randomised Controlled Trial. Lancet. 2009;373(9678):1874-1882. PMID: 19446324.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/neurology item evaluating risk factors and prevention of ICU-acquired weakness (CIP/CIM).",
      "distractorExclusionNotes": "Excluded steroids, neuromuscular blockers, and immobilization because early physical therapy is the definitive preventive strategy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0832",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Post-Intensive Care Syndrome Multidisciplinary Assessment and Rehabilitation",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old previously active executive presents for follow-up 3 months after discharge from a 21-day hospital stay, which included 12 days in the ICU mechanically ventilated for severe COVID-19 pneumonia and septic shock. He reports that since returning home, he has been completely unable to return to work. He describes profound persistent physical fatigue, muscle weakness, and joint stiffness. In addition, he suffers from severe memory deficits, inability to concentrate, and executive dysfunction that prevents him from balancing his accounts or organizing meetings. He also experiences frequent nightmare flashbacks of the ICU alarms, severe anxiety, and feelings of worthlessness. Physical examination shows residual proximal muscle wasting but normal cardiorespiratory exam. Montreal Cognitive Assessment (MoCA) score is 22/30. Screen for depression (PHQ-9) score is 16 (moderate-severe depression), and PTSD checklist (PCL-5) score is 42 (positive screen). Which of the following syndromes best accounts for his constellation of deficits, and what is the most appropriate management framework?",
    "choices": [
      [
        "Post-Intensive Care Syndrome (PICS) managed with comprehensive multidisciplinary rehabilitation",
        "Post-Intensive Care Syndrome (PICS) is a recognized clinical syndrome encompassing new or worsening multidimensional impairments arising after critical illness and persisting beyond acute hospitalization. PICS classically spans three core domains: (1) Physical impairments (ICU-acquired weakness, fatigue, joint stiffness, chronic pain), (2) Cognitive impairments (executive dysfunction, memory and processing speed deficits, occurring in 30-50% of survivors), and (3) Mental health/psychiatric impairments (depression, generalized anxiety, and post-traumatic stress disorder [PTSD]). Management requires a structured multidisciplinary approach: physical and occupational therapy, cognitive rehabilitation, outpatient psychiatric and psychological care (trauma-focused psychotherapy, pharmacotherapy for depression/PTSD), peer support groups, and family education."
      ],
      [
        "Chronic traumatic encephalopathy (CTE) managed with progressive cognitive rest",
        "CTE is a neurodegenerative tauopathy resulting from repeated concussive or subconcussive head trauma (e.g., contact sports), not acute medical critical illness."
      ],
      [
        "Early-onset Alzheimer disease managed with immediate acetylcholinesterase inhibitor therapy",
        "Triad of physical wasting, PTSD flashbacks, and sudden cognitive decline following prolonged mechanical ventilation is classic PICS, not Alzheimer dementia."
      ],
      [
        "Isolated major depressive disorder managed solely with high-dose sertraline monotherapy",
        "Antidepressants address only the mood domain, failing to manage the substantial physical weakness, cognitive deficits, and rehabilitation needs of PICS."
      ],
      [
        "Conversion disorder (functional neurological symptom disorder) requiring inpatient psychotherapy",
        "PICS involves objective physiological and cognitive sequelae of sepsis and mechanical ventilation, not psychological conversion."
      ]
    ],
    "shortestValidSolution": "Post-ICU stay + physical weakness + cognitive decline (MoCA 22) + PTSD/depression = Post-Intensive Care Syndrome (PICS) -> multidisciplinary rehabilitation.",
    "necessaryInference": "Diagnose Post-Intensive Care Syndrome (PICS) across physical, cognitive, and psychiatric domains and initiate multidisciplinary care.",
    "strongestDistractor": "Isolated major depressive disorder managed solely with high-dose sertraline monotherapy",
    "distractorExclusion": "Sertraline alone neglects the physical weakness and cognitive rehabilitation required for multi-domain PICS.",
    "citation": "Needham DM, Davidson J, Wang H, et al. Improving Long-Term Outcomes After Discharge From Intensive Care Unit: Report From a Stakeholders' Conference. Crit Care Med. 2012;40(2):502-509. PMID: 21946660.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/rehabilitation medicine item on recognizing and managing Post-Intensive Care Syndrome (PICS).",
      "distractorExclusionNotes": "Excluded dementia and isolated depression because PICS encompasses concurrent physical, cognitive, and psychiatric sequelae of critical illness.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0833",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Right Ventricular Failure in ARDS Inhaled Pulmonary Vasodilators",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man is mechanically ventilated in the intensive care unit for severe ARDS secondary to bacterial pneumonia. Ventilator settings: volume-control mode, tidal volume 360 mL (6 mL/kg predicted body weight), respiratory rate 28/min, PEEP 14 cm H2O, and FiO2 0.80. Over the past 6 hours, his hemodynamic status deteriorates. Blood pressure is 84/50 mm Hg on norepinephrine 0.25 mcg/kg/min. Central venous pressure has risen from 8 mm Hg to 18 mm Hg. Transthoracic echocardiogram reveals acute cor pulmonale: marked right ventricular dilation with right-to-left septal shift (D-shaped left ventricle during systole and diastole), severe tricuspid regurgitation, and severe RV hypokinesis, while left ventricular systolic function is preserved (LVEF 55%). Administering a 500-mL crystalloid bolus resulted in a further drop in systolic blood pressure to 76 mm Hg. Which of the following is the most appropriate next step in hemodynamic management?",
    "choices": [
      [
        "Initiate inhaled epoprostenol (or inhaled nitric oxide) and avoid further fluid administration",
        "Acute right ventricular (RV) failure (acute cor pulmonale) in ARDS occurs in 20% to 25% of patients, driven by hypoxic pulmonary vasoconstriction, hypercapnia, microvascular thrombosis, and high airway pressures/PEEP compressing alveolar capillaries. Unlike the thick-walled left ventricle, the thin-walled RV has limited afterload reserve; acute increases in pulmonary vascular resistance (PVR) lead to RV dilation, wall stress, ischemia, and uncoupling. As the RV dilates within the non-compliant pericardium, the interventricular septum shifts leftward ('D-shaped LV'), impairing LV filling and dropping systemic cardiac output (ventricular interdependence). In this setting, FLUID BOLUSES ARE HARMFUL: volume loading overdistends the failing RV, worsens septal bowing, and precipitates hemodynamic collapse. Management mandates: (1) selective pulmonary vasodilation with inhaled epoprostenol or inhaled nitric oxide (which lowers PVR in ventilated lung units without systemic hypotension), (2) careful inotropic support (e.g., dobutamine or milrinone), and (3) judicious diuresis to decongest the RV."
      ],
      [
        "Rapid intravenous infusion of two liters of 0.9% normal saline to increase RV preload",
        "Aggressive fluid loading in acute RV failure overdistends the right ventricle, worsens leftward septal shift, compromises LV filling, and precipitates cardiac arrest."
      ],
      [
        "Increase ventilator positive end-expiratory pressure (PEEP) from 14 to 20 cm H2O",
        "High PEEP increases transpulmonary pressure, compressing pulmonary capillaries and escalating RV afterload, worsening right heart failure."
      ],
      [
        "Intravenous bolus of high-dose phenylephrine to achieve systemic alpha-1 vasoconstriction",
        "Phenylephrine increases pulmonary vascular resistance alongside systemic resistance, directly aggravating RV afterload mismatch."
      ],
      [
        "Immediate placement of an intra-aortic balloon pump for left ventricular unloading",
        "An IABP unloads the left ventricle; it provides no therapeutic support for isolated acute pulmonary hypertension and right ventricular failure."
      ]
    ],
    "shortestValidSolution": "ARDS + acute RV failure (D-shaped LV, CVP 18) = inhaled pulmonary vasodilator (epoprostenol/iNO) + strict fluid avoidance.",
    "necessaryInference": "Recognize acute RV failure with ventricular interdependence in ARDS and select inhaled pulmonary vasodilators while avoiding fluid boluses.",
    "strongestDistractor": "Rapid intravenous infusion of two liters of 0.9% normal saline to increase RV preload",
    "distractorExclusion": "Fluid loading worsens RV overdistension and septal flattening, crashing cardiac output; selective pulmonary vasodilation is required.",
    "citation": "Monnet X et al. ESICM guidelines on circulatory shock and hemodynamic monitoring 2025. Intensive Care Med. PMID: 41236566.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/cardiology item on hemodynamic management of acute cor pulmonale and RV failure in ARDS.",
      "distractorExclusionNotes": "Excluded fluid boluses (cause ventricular collapse) and high PEEP (increases RV afterload); inhaled epoprostenol lowers PVR selectively.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0834",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Pancreatitis Goal-Directed Fluid Resuscitation Avoiding Hypervolemia",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man presents to the emergency department with severe, constant epigastric pain radiating straight through to his back, accompanied by nausea and recurrent vomiting for 8 hours. Serum lipase is markedly elevated at 2,450 U/L (reference range 10-60 U/L). Abdominal ultrasound demonstrates gallstones in the gallbladder without common bile duct dilation. He is diagnosed with acute gallstone pancreatitis. On initial examination, blood pressure is 118/74 mm Hg, heart rate is 104/min, and respiratory rate is 18/min. Hematocrit is 44%, BUN is 22 mg/dL, and serum creatinine is 1.1 mg/dL. The medical team initiates intravenous fluid resuscitation. Which of the following fluid resuscitation strategies is most strongly supported by recent landmark randomized clinical trials (e.g., the WATERFALL trial) to optimize clinical outcomes and prevent fluid overload?",
    "choices": [
      [
        "Moderate fluid resuscitation with Lactated Ringer solution titrated to clinical markers of perfusion",
        "Fluid resuscitation in acute pancreatitis has undergone a major paradigm shift. Historically, aggressive early fluid administration (e.g., 20 mL/kg bolus followed by 3-5 mL/kg/h) was advocated to prevent pancreatic microvascular necrosis. However, the landmark WATERFALL randomized controlled trial demonstrated that aggressive fluid resuscitation resulted in a significantly higher incidence of fluid overload (heart failure, pulmonary edema, abdominal compartment syndrome) WITHOUT any improvement in clinical outcomes, systemic inflammation, or organ failure. Current guidelines recommend moderate goal-directed fluid resuscitation: an initial bolus of 10 mL/kg only if hypovolemic, followed by maintenance infusion of 1.5 to 2.0 mL/kg/h using balanced crystalloid (Lactated Ringer solution, which prevents hyperchloremic acidosis and reduces SIRS compared to normal saline), with frequent clinical re-evaluation of volume status every 4 to 6 hours."
      ],
      [
        "Aggressive fluid resuscitation with mandatory 20 mL/kg bolus followed by 300 mL/h normal saline",
        "The WATERFALL trial proved that aggressive high-volume fluid resuscitation significantly increases clinical fluid overload without improving pancreatitis outcomes."
      ],
      [
        "Rapid infusion of four liters of 5% albumin solution over the initial six hours",
        "Colloids (albumin) are expensive, show no clinical superiority over crystalloids in acute pancreatitis, and worsen interstitial pulmonary edema if capillary leak occurs."
      ],
      [
        "Complete fluid restriction with continuous intravenous furosemide to prevent pancreatic edema",
        "Complete fluid restriction exacerbates intravascular hypovolemia, hemoconcentration, and accelerates ischemic pancreatic parenchymal necrosis."
      ],
      [
        "Prophylactic intravenous imipenem-cilastatin therapy started concurrently with fluids",
        "Prophylactic antibiotics do not prevent infected necrosis in acute pancreatitis and promote resistant fungal and bacterial superinfections."
      ]
    ],
    "shortestValidSolution": "Acute pancreatitis = moderate Lactated Ringer resuscitation (WATERFALL trial showed aggressive fluids cause harmful volume overload).",
    "necessaryInference": "Apply recent trial evidence (WATERFALL) prioritizing moderate, goal-directed balanced crystalloid resuscitation over aggressive hypervolemia.",
    "strongestDistractor": "Aggressive fluid resuscitation with mandatory 20 mL/kg bolus followed by 300 mL/h normal saline",
    "distractorExclusion": "Aggressive high-volume resuscitation causes dangerous fluid overload without reducing pancreatic necrosis (WATERFALL trial).",
    "citation": "de-Madaria E, Buxbaum JL, Maisonneuve P, et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis. N Engl J Med. 2022;387(11):989-1000. PMID: 36103415.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 gastroenterology/critical care item on modern evidence-based fluid resuscitation in acute pancreatitis.",
      "distractorExclusionNotes": "Excluded aggressive fluid loading based on WATERFALL trial proof that aggressive fluids triple fluid overload without clinical benefit.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0835",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Catheter-Related Bloodstream Infection Central Line Removal Indications",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man undergoing adjuvant chemotherapy for stage III colorectal cancer has a right subclavian tunneled central venous catheter (infusion port). He is admitted with high spiking fevers to 39.4 C (102.9 F), chills, and hypotension (BP 88/54 mm Hg). Blood cultures drawn simultaneously from the central port and a peripheral vein both turn positive within 10 hours for Staphylococcus aureus (methicillin-sensitive). Examination reveals tenderness, erythema, and purulence tracking 3 cm along the subcutaneous catheter tunnel tract. Fluid resuscitation and intravenous cefazolin are initiated. Transthoracic echocardiogram is planned. Which of the following is the most appropriate next step regarding the infected central venous catheter?",
    "choices": [
      [
        "Immediate removal of the tunneled catheter followed by at least 14 days of targeted IV cefazolin",
        "Catheter-related bloodstream infection (CRBSI) management requires determining whether the central line must be removed. Guidelines from the Infectious Diseases Society of America (IDSA) define clear mandatory indications for immediate catheter removal: (1) Infection caused by virulent or difficult-to-eradicate organisms: Staphylococcus aureus, Pseudomonas aeruginosa, fungi (Candida species), or mycobacteria, (2) Presence of local complications: tunnel infection, port pocket infection, or purulence at the exit site, (3) Severe systemic complications: septic shock, endocarditis, suppurative thrombophlebitis, or metastatic seedings (e.g., osteomyelitis), and (4) Persistent bacteremia despite > 72 hours of appropriate antimicrobial therapy. Attempting catheter salvage with antibiotic lock therapy in S. aureus or tunnel infections carries prohibitive failure rates (>80%) and dramatically increases mortality."
      ],
      [
        "Catheter salvage with antibiotic lock therapy while continuing cefazolin through the port",
        "Catheter salvage is strictly contraindicated in Staphylococcus aureus infection, tunnel infections, or septic shock due to biofilm persistence and metastatic spread."
      ],
      [
        "Leave catheter in place and switch antibiotics to oral linezolid for outpatient completion",
        "Leaving a S. aureus colonized foreign body in place leads to recurrent bacteremia, endocarditis, vertebral osteomyelitis, and death."
      ],
      [
        "Exchange the catheter over a guidewire through the existing infected subcutaneous tunnel",
        "Exchanging over a guidewire through an actively infected, purulent tunnel tract reinfects the new catheter and propagates bacteremia."
      ],
      [
        "Wait for repeat blood cultures at day 7 before deciding on catheter removal",
        "Delaying catheter removal in S. aureus bacteremia significantly increases metastatic seeding, infective endocarditis, and 30-day mortality."
      ]
    ],
    "shortestValidSolution": "S. aureus bacteremia + catheter tunnel tract erythema/purulence = mandatory immediate catheter removal + targeted IV antibiotics.",
    "necessaryInference": "Identify absolute indications for central line removal in CRBSI: S. aureus organism and subcutaneous tunnel tract infection.",
    "strongestDistractor": "Catheter salvage with antibiotic lock therapy while continuing cefazolin through the port",
    "distractorExclusion": "Catheter salvage is contraindicated for S. aureus and tunnel infections; immediate removal is mandatory.",
    "citation": "Mermel LA, Allon M, Bouza E, et al. Clinical Practice Guidelines for the Diagnosis and Management of Intravascular Catheter-Related Infection: 2009 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2009;49(1):1-45. PMID: 19489710.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 infectious disease/inpatient medicine item testing criteria for mandatory central venous line removal in CRBSI.",
      "distractorExclusionNotes": "Excluded line salvage and guidewire exchange because S. aureus and tunnel purulence require immediate catheter removal.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0836",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Stress Ulcer Prophylaxis in the ICU Evidence-Based Indications and Overuse",
    "provisionalDifficulty": 4,
    "stem": "The hospitalist and ICU teams review stress ulcer prophylaxis (SUP) protocols across inpatient units. The hospital quality committee notes that proton pump inhibitors (PPIs) and H2-receptor antagonists are frequently prescribed inappropriately to non-critically ill medical ward patients, leading to increased rates of Clostridioides difficile colitis, hospital-acquired pneumonia, and bone fractures. Which of the following hospitalized patients has a definitive, guideline-supported clinical indication for initiating stress ulcer prophylaxis?",
    "choices": [
      [
        "A mechanically ventilated patient with septic shock expected to require mechanical ventilation > 48 hours",
        "Stress ulcer prophylaxis (SUP) with a proton pump inhibitor or H2-receptor antagonist is indicated ONLY in high-risk critically ill patients in the intensive care unit. Landmark trials and clinical practice guidelines (Surviving Sepsis Campaign and ASHP) define the two major independent risk factors for clinically significant gastrointestinal bleeding: (1) Mechanical ventilation anticipated to last >= 48 hours, and (2) Coagulopathy (defined as platelet count < 50,000/mm3, INR > 1.5, or aPTT > 2 times control). Other minor additive risk factors include traumatic brain injury, severe burns (>35% BSA), multi-organ failure, and sepsis. Routine SUP is STRICTLY NOT INDICATED in non-ICU general medical ward patients; inappropriate prophylactic acid suppression increases risks of Clostridioides difficile colitis, enteric infections, pneumonia, and acute interstitial nephritis."
      ],
      [
        "A hemodynamically stable patient on the medical floor receiving oral broad-spectrum antibiotics",
        "Antibiotic therapy on the general medical ward is not an indication for SUP and increases susceptibility to C. difficile superinfection."
      ],
      [
        "A 45-year-old woman admitted to the ward for uncomplicated cellulitis with mild nausea",
        "Mild nausea without critical illness or coagulopathy does not justify stress ulcer prophylaxis."
      ],
      [
        "An elective post-arthroscopic knee surgery patient receiving oral acetaminophen and ice packs",
        "Low-risk minor surgical patients have negligible gastrointestinal ulceration risk and derive no benefit from acid suppression."
      ],
      [
        "A patient with uncomplicated non-bleeding hemorrhoids admitted for observation",
        "Hemorrhoidal disease does not cause gastric mucosal ulceration and is not an indication for systemic acid suppression."
      ]
    ],
    "shortestValidSolution": "Stress ulcer prophylaxis indication = mechanical ventilation >= 48 hrs or coagulopathy (platelets <50k, INR >1.5) in the ICU.",
    "necessaryInference": "Identify the two primary evidence-based criteria for stress ulcer prophylaxis (mechanical ventilation >48 hrs and coagulopathy) and avoid general ward overuse.",
    "strongestDistractor": "A hemodynamically stable patient on the medical floor receiving oral broad-spectrum antibiotics",
    "distractorExclusion": "General medical ward patients lack indications for SUP; routine PPI use increases C. diff and hospital-acquired pneumonia.",
    "citation": "Singh SP et al. A nationwide multi-centre survey of 12,500 cases of upper gastrointestinal bleeding: A report of Indian Society of Gastroenterology Task Force on acute upper gastrointestinal bleed. Indian J Gastroenterol. PMID: 42223766.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/inpatient medicine item testing precise evidence-based indications for stress ulcer prophylaxis.",
      "distractorExclusionNotes": "Excluded general ward patients because mechanical ventilation >=48 hours and severe coagulopathy are the established primary indications.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0837",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Inpatient Glycemic Management Basal-Bolus Versus Sliding-Scale Insulin",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with a 10-year history of type 2 diabetes mellitus is admitted to the general medical service for management of right lower extremity cellulitis. Prior to admission, he was taking metformin 1,000 mg twice daily and glipizide 10 mg daily. On admission, oral hypoglycemic agents are held. Vital signs are normal. Blood glucose on admission is 214 mg/dL, and his most recent outpatient HbA1c was 8.6%. He is eating a regular diet. The admitting resident suggests writing an order for 'sliding-scale regular insulin monotherapy every 6 hours as needed for blood glucose > 180 mg/dL.' Which of the following is the most appropriate, evidence-based insulin regimen for non-critically ill hospitalized patients?",
    "choices": [
      [
        "Scheduled basal-bolus insulin regimen (long-acting basal plus rapid-acting prandial) with correctional scale",
        "Managing inpatient diabetes in non-critically ill hospitalized patients eating regular meals requires scheduled insulin therapy. Landmark randomized trials (such as the RABBIT 2 trial) definitively demonstrated that sliding-scale insulin (SSI) monotherapy ('reactive insulin') results in poor glycemic control, high rates of severe hyperglycemia, greater glycemic variability, and increased hospital complications compared to a scheduled basal-bolus regimen. Current American Diabetes Association (ADA) guidelines strongly recommend a scheduled Basal-Bolus-Correctional insulin regimen as the standard of care for non-critically ill inpatients with adequate oral intake: (1) Basal insulin (long-acting glargine or degludec once daily) to suppress hepatic gluconeogenesis, (2) Nutritional/prandial insulin (rapid-acting lispro, aspart, or glulisine given immediately before meals), and (3) Correctional insulin added to prandial doses for pre-meal hyperglycemia. Target blood glucose for most hospitalized patients is 140 to 180 mg/dL."
      ],
      [
        "Sliding-scale regular insulin monotherapy administered exclusively after hyperglycemia occurs",
        "Sliding-scale monotherapy reacts to hyperglycemia after it happens, causing dangerous glycemic peaks and valleys ('rollercoaster effect') without preventing spikes."
      ],
      [
        "Continue oral metformin 1,000 mg twice daily and increase glipizide to 20 mg twice daily",
        "Oral sulfonylureas carry severe risks of unpredictable hypoglycemia when inpatient oral intake fluctuates, and metformin is held if iodinated contrast or renal risk arises."
      ],
      [
        "Continuous intravenous regular insulin infusion titrated to target blood glucose 80 to 110 mg/dL",
        "Continuous IV insulin targeting tight euglycemia is reserved for ICU settings or DKA/HHS; on general medical wards, it causes severe life-threatening hypoglycemia."
      ],
      [
        "Withhold all insulin therapy unless blood glucose exceeds 350 mg/dL on two occasions",
        "Permissive severe hyperglycemia impairs leukocyte phagocytosis, worsens surgical wound healing, and prolongs infection recovery."
      ]
    ],
    "shortestValidSolution": "Inpatient diabetes with oral diet = scheduled basal-bolus-correctional insulin regimen (RABBIT 2 trial: sliding-scale alone is inferior).",
    "necessaryInference": "Apply ADA inpatient guidelines prioritizing scheduled basal-bolus insulin over reactive sliding-scale insulin monotherapy.",
    "strongestDistractor": "Sliding-scale regular insulin monotherapy administered exclusively after hyperglycemia occurs",
    "distractorExclusion": "Sliding-scale monotherapy causes volatile glycemic swings and is explicitly discouraged by inpatient diabetes guidelines.",
    "citation": "Umpierrez GE, Smiley D, Zisman A, et al. Randomized Study of Basal-Bolus Insulin Therapy in the Inpatient Management of Patients With Type 2 Diabetes (RABBIT 2 Trial). Diabetes Care. 2007;30(9):2181-2186. PMID: 17513708.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hospitalist medicine/endocrinology item comparing basal-bolus insulin versus sliding-scale monotherapy.",
      "distractorExclusionNotes": "Excluded sliding-scale monotherapy and tight IV insulin because scheduled basal-bolus therapy achieves optimal glycemic control without hypoglycemia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0838",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Hospital-Acquired Hyponatremia SIADH Versus Cerebral Salt Wasting",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old woman is in the neuro-intensive care unit on post-operative day 6 following surgical clipping of an aneurysmal subarachnoid hemorrhage. She has been stable until today, when she develops mild lethargy and headache. Vital signs show blood pressure 92/56 mm Hg, heart rate 104/min, and central venous pressure 4 mm Hg. Physical examination reveals flat neck veins, dry mucous membranes, and decreased skin turgor. Over the past 24 hours, her net fluid balance is negative 2,800 mL with high urine outputs. Laboratory evaluation reveals: serum sodium 124 mEq/L (baseline 138 mEq/L), serum osmolality 256 mOsm/kg H2O, urine osmolality 540 mOsm/kg H2O, and urine sodium 85 mEq/L. Serum uric acid is 2.2 mg/dL. Which of the following is the most accurate diagnosis, and what is the definitive management distinction compared to the Syndrome of Inappropriate Antidiuretic Hormone secretion (SIADH)?",
    "choices": [
      [
        "Cerebral salt wasting (CSW) treated with aggressive volume and sodium repletion with isotonic or hypertonic saline",
        "Hyponatremia is common after subarachnoid hemorrhage and neurosurgery. The critical clinical dilemma is distinguishing Cerebral Salt Wasting (CSW) from SIADH, as their treatments are DIAMETRICALLY OPPOSED. Both conditions present with hypotonic hyponatremia, high urine osmolality (>100 mOsm/kg), and high urine sodium (>40 mEq/L). However, the definitive distinguishing factor is EXTRACELLULAR FLUID VOLUME STATUS: SIADH is a state of EUVOLEMIA (or mild hypervolemia) caused by water retention; treatment is FLUID RESTRICTION. In contrast, CSW is a state of TRUE HYPOVOLEMIA caused by renal sodium wasting (mediated by brain natriuretic peptide and sympathetic denervation), presenting with hypotension, tachycardia, low CVP (<5 mm Hg), negative fluid balance, and hemoconcentration. Fluid-restricting a patient with CSW after subarachnoid hemorrhage precipitates catastrophic cerebral arterial vasospasm, delayed cerebral ischemia, and stroke. CSW must be treated with aggressive volume and sodium repletion using isotonic or 3% hypertonic saline, often combined with oral fludrocortisone."
      ],
      [
        "Syndrome of inappropriate antidiuretic hormone secretion (SIADH) treated with strict fluid restriction to 800 mL/day",
        "Fluid restriction in a hypovolemic patient with subarachnoid hemorrhage and cerebral salt wasting precipitates devastating cerebral vasospasm and ischemic stroke."
      ],
      [
        "Psychogenic polydipsia treated with voluntary fluid restriction and psychiatric therapy",
        "Psychogenic polydipsia presents with maximally dilute urine (urine osmolality < 100 mOsm/kg) and low urine sodium, the opposite of this patient's findings."
      ],
      [
        "Central diabetes insipidus treated with subcutaneous desmopressin (dDAVP)",
        "Diabetes insipidus causes HYPERnatremia with dilute polyuria, not hypotonic hyponatremia with concentrated urine."
      ],
      [
        "Adrenal crisis treated with high-dose intravenous dexamethasone monotherapy",
        "Primary adrenal insufficiency causes hyponatremia and hyperkalemia with hypotension, but does not explain massive polyuria and natriuresis after aneurysm clipping."
      ]
    ],
    "shortestValidSolution": "Subarachnoid hemorrhage + hyponatremia + true hypovolemia (BP 92/56, CVP 4) = Cerebral Salt Wasting -> IV saline repletion (NEVER fluid restrict).",
    "necessaryInference": "Distinguish cerebral salt wasting (hypovolemic, treat with saline) from SIADH (euvolemic, treat with fluid restriction) in neurosurgical patients.",
    "strongestDistractor": "Syndrome of inappropriate antidiuretic hormone secretion (SIADH) treated with strict fluid restriction to 800 mL/day",
    "distractorExclusion": "Fluid restriction in cerebral salt wasting induces severe hypovolemic cerebral vasospasm and stroke; saline repletion is mandatory.",
    "citation": "Yee AH, Burns JD, Wijdicks EF. Cerebral Salt Wasting: Pathophysiology, Diagnosis, and Treatment. Neurosurg Clin N Am. 2010;21(2):339-352. PMID: 20380974.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 neurocritical care/nephrology item contrasting cerebral salt wasting from SIADH in aneurysmal subarachnoid hemorrhage.",
      "distractorExclusionNotes": "Excluded SIADH fluid restriction because hypovolemic signs (low CVP, hypotension) prove cerebral salt wasting requiring saline repletion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0839",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Hepatorenal Syndrome AKI Splanchnic Vasoconstrictor Terlipressin Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man with decompensated alcoholic cirrhosis and refractory ascites is admitted for acute kidney injury. Baseline serum creatinine was 0.9 mg/dL 1 month ago. On admission, serum creatinine is 2.8 mg/dL. He has no history of shock or nephrotoxic drug exposure. Urinalysis shows no proteinuria, no hematuria, and normal sediment with < 2 granular casts per HPF. Urine sodium is 8 mEq/L, and fractional excretion of sodium is 0.3%. All diuretics (spironolactone and furosemide) are immediately discontinued, and a 48-hour volume expansion challenge with intravenous 20% albumin at 1 g/kg/day (100 g/day) is administered. At the end of 48 hours, serum creatinine has risen to 3.2 mg/dL. Blood pressure is 98/58 mm Hg, and pulse is 88/min. Renal ultrasound shows normal bilateral kidneys with no hydronephrosis. Diagnostic criteria for Hepatorenal Syndrome-Acute Kidney Injury (HRS-AKI) are met. Which of the following is the most appropriate first-line pharmacological therapy?",
    "choices": [
      [
        "Intravenous terlipressin combined with intravenous albumin infusion",
        "Hepatorenal syndrome (HRS-AKI) is a functional renal failure occurring in advanced cirrhosis, driven by severe portal hypertension. Massive splanchnic arterial vasodilation (mediated by excess nitric oxide) causes profound arterial pooling, leading to extreme reductions in effective circulating arterial volume. This triggers compensatory activation of the renin-angiotensin-aldosterone system, sympathetic nervous system, and vasopressin, causing intense renal cortical vasoconstriction and severe GFR decline. Diagnosis requires cirrhosis with AKI non-responsive to diuretic cessation and 48 hours of albumin challenge (1 g/kg/day), with normal urine sediment. The FDA-approved first-line therapy supported by the landmark CONFIRM trial is intravenous terlipressin (a synthetic vasopressin V1 receptor agonist) combined with IV albumin. Terlipressin induces potent, selective splanchnic vasoconstriction, redirecting pooled splanchnic blood into the systemic circulation, raising mean arterial pressure, and restoring renal cortical blood flow. Midodrine plus octreotide plus albumin is a less effective second-line alternative."
      ],
      [
        "High-dose intravenous loop diuretic therapy with continuous furosemide infusion",
        "Diuretics exacerbate intravascular hypovolemia and further stimulate renal vasoconstriction, precipitating irreversible renal failure in hepatorenal syndrome."
      ],
      [
        "Oral midodrine monotherapy without intravenous albumin or octreotide",
        "Midodrine monotherapy without albumin fails to restore effective arterial blood volume and has poor efficacy in reversing HRS-AKI."
      ],
      [
        "Immediate placement of a permanent transjugular intrahepatic portosystemic shunt (TIPS)",
        "TIPS carries high mortality in acute progressive renal failure with hyperbilirubinemia, encephalopathy, or cardiopulmonary compromise and is not first-line."
      ],
      [
        "High-dose intravenous dopamine at 'renal-dose' infusion rates (2 mcg/kg/min)",
        "'Renal-dose' dopamine has been definitively disproven in randomized trials and provides no renal protection or improvement in survival."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + AKI non-responsive to 48 hr albumin challenge = HRS-AKI -> IV terlipressin + albumin (CONFIRM trial).",
    "necessaryInference": "Identify HRS-AKI after failed albumin challenge and select first-line splanchnic vasoconstrictor therapy with terlipressin plus albumin.",
    "strongestDistractor": "High-dose intravenous loop diuretic therapy with continuous furosemide infusion",
    "distractorExclusion": "Loop diuretics worsen intravascular depletion and intensify renal vasoconstriction; splanchnic vasoconstriction with terlipressin is required.",
    "citation": "Wong F, Pappas SC, Curry MP, et al. Terlipressin Plus Albumin for the Treatment of Type 1 Hepatorenal Syndrome (CONFIRM Trial). N Engl J Med. 2021;384(9):818-827. PMID: 33657294.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/hepatology item on diagnosing HRS-AKI and initiating terlipressin plus albumin based on the CONFIRM trial.",
      "distractorExclusionNotes": "Excluded diuretics and renal-dose dopamine because terlipressin plus albumin is the definitive FDA-approved first-line regimen.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0840",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Severe Alcohol Withdrawal in ICU Adjunctive Dexmedetomidine Protocol",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man is admitted to the intensive care unit with severe alcohol withdrawal syndrome and delirium tremens. Despite receiving 140 mg of intravenous diazepam and 24 mg of intravenous lorazepam over the past 8 hours, he remains tachycardic (heart rate 138/min), severely hypertensive (blood pressure 194/112 mm Hg), agitated, tremulous, and diaphoretic. His respiratory rate is 24/min, and oxygen saturation is 96% on 2 L/min nasal cannula. The ICU team wishes to control his dangerous autonomic storm and severe psychomotor agitation while avoiding respiratory depression and invasive endotracheal intubation. Which of the following adjunctive sedative infusions is most appropriate to add to his ongoing GABA-agonist benzodiazepine regimen?",
    "choices": [
      [
        "Intravenous dexmedetomidine infusion titrated to target light conscious sedation",
        "Severe, refractory alcohol withdrawal syndrome (delirium tremens requiring massive benzodiazepine doses) is driven by profound downregulation of inhibitory GABA-A receptors and massive upregulation of excitatory NMDA/glutamate receptors, accompanied by intense central and peripheral sympathetic discharge. Dexmedetomidine is a highly selective central alpha-2 adrenergic receptor agonist that acts on the locus coeruleus to inhibit central noradrenergic sympathetic outflow. It provides effective conscious, 'arousable' sedation, blunts severe autonomic hyperactivity (rapidly reducing tachycardia, hypertension, and tremor), and decreases cumulative benzodiazepine requirements. Crucially, dexmedetomidine DOES NOT cause respiratory depression, helping avoid endotracheal intubation. However, dexmedetomidine lacks intrinsic GABA-A activity and does NOT prevent alcohol withdrawal seizures; therefore, it must ALWAYS be used as an ADJUNCT to, and never as monotherapy replacing, benzodiazepines or phenobarbital."
      ],
      [
        "Intravenous dexmedetomidine monotherapy while completely discontinuing all benzodiazepines",
        "Discontinuing benzodiazepines removes GABA-A agonism, leaving the patient completely unprotected against severe generalized alcohol withdrawal seizures."
      ],
      [
        "High-dose continuous intravenous fentanyl infusion at 200 mcg/hr",
        "Opioids do not treat the pathophysiological neurochemical derangements of alcohol withdrawal and cause respiratory arrest when combined with high-dose benzodiazepines."
      ],
      [
        "Intramuscular haloperidol 10 mg administered every two hours around the clock",
        "Haloperidol monotherapy lowers the seizure threshold, causes cardiac QTc prolongation/torsades de pointes, and worsens hyperthermia in alcohol withdrawal."
      ],
      [
        "Intravenous flumazenil infusion to reverse excessive benzodiazepine exposure",
        "Flumazenil precipitates catastrophic, refractory withdrawal status epilepticus and cardiac arrest in benzodiazepine-dependent or withdrawing patients."
      ]
    ],
    "shortestValidSolution": "Refractory autonomic storm in alcohol withdrawal = add adjunctive IV dexmedetomidine to benzodiazepines (NO monotherapy, protects against intubation).",
    "necessaryInference": "Select dexmedetomidine as an adjunctive sympatholytic sedative for severe alcohol withdrawal while recognizing it must accompany GABAergic therapy.",
    "strongestDistractor": "Intravenous dexmedetomidine monotherapy while completely discontinuing all benzodiazepines",
    "distractorExclusion": "Dexmedetomidine lacks anticonvulsant activity; discontinuing benzodiazepines precipitates withdrawal seizures and status epilepticus.",
    "citation": "Fiore M et al. Dexmedetomidine as Adjunctive Therapy for the Treatment of Alcohol Withdrawal Syndrome: A Systematic Review and Meta-Analysis. Pharmaceuticals (Basel). PMID: 39338290.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/toxicology item on using dexmedetomidine as an adjunct to benzodiazepines for autonomic storm in alcohol withdrawal.",
      "distractorExclusionNotes": "Excluded dexmedetomidine monotherapy because GABA-A agonism with benzodiazepines is required to prevent seizures.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0841",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Transitions of Care Post-Discharge Medication Reconciliation Bundle",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman with heart failure with reduced ejection fraction (LVEF 28%), stage 3 chronic kidney disease, and type 2 diabetes mellitus is being discharged home following a 5-day hospitalization for acute decompensated heart failure. During her hospital stay, her chronic outpatient medications were altered: furosemide was increased from 20 mg to 40 mg twice daily, lisinopril was discontinued, and sacubitril-valsartan 24/26 mg twice daily was initiated after a 36-hour washout period. Metoprolol succinate was titrated to 50 mg daily, and empagliflozin 10 mg daily was started. She takes 8 other chronic medications. She lives alone, and her daughter visits on weekends. According to health systems practice and transitions-of-care guidelines, which of the following combinations of interventions has the strongest evidence to reduce 30-day all-cause hospital readmission and adverse drug events?",
    "choices": [
      [
        "Pharmacist-led multidisciplinary medication reconciliation, structured teach-back education, and post-discharge phone call within 48-72 hours",
        "Transitions of care (from inpatient hospital to outpatient home environment) represent a vulnerable period associated with high rates of medication discrepancies (occurring in >50% of patients), adverse drug events, and avoidable 30-day hospital readmissions. Multicomponent transitional care bundles have the strongest evidence for reducing readmissions and adverse events: (1) Pharmacist-led medication reconciliation at discharge (verifying indication, dose adjustments, and eliminating discontinued drugs like lisinopril to prevent fatal angioedema with sacubitril-valsartan), (2) Structured patient/caregiver education utilizing the interactive 'teach-back' method to verify comprehension of red-flag symptoms and dynamic daily weights, (3) Timely transmission of a comprehensive discharge summary to the outpatient primary physician within 24-48 hours, (4) Early post-discharge telephone follow-up within 48 to 72 hours, and (5) An outpatient clinic follow-up visit scheduled within 7 to 14 days."
      ],
      [
        "Providing the patient with a 12-page printed discharge packet without verbal review",
        "Passive written instructions without interactive teach-back result in poor comprehension, confusion between old and new pill bottles, and high readmission rates."
      ],
      [
        "Scheduling the first outpatient clinic follow-up appointment in eight to twelve weeks",
        "Delaying follow-up to 8-12 weeks in high-risk heart failure patients guarantees readmission due to unmonitored electrolyte shifts and volume fluctuations."
      ],
      [
        "Advising the patient to resume all prior home prescription bottles alongside new discharge medications",
        "Resuming prior home medications causes fatal dual ACEi and ARNI ingestion (severe angioedema) and duplicate diuretic dosing."
      ],
      [
        "Relying solely on hospital electronic health record auto-faxing with no direct communication",
        "Electronic faxes are frequently delayed or unread; active direct reconciliation and post-discharge phone follow-up are essential."
      ]
    ],
    "shortestValidSolution": "High-risk transition of care = pharmacist medication reconciliation + teach-back education + phone follow-up in 48-72 hrs.",
    "necessaryInference": "Apply health systems and patient safety guidelines for evidence-based transitions-of-care bundles to prevent 30-day readmissions.",
    "strongestDistractor": "Advising the patient to resume all prior home prescription bottles alongside new discharge medications",
    "distractorExclusion": "Resuming prior home bottles causes lethal dual ACEi/ARNI ingestion (angioedema); active medication reconciliation is mandatory.",
    "citation": "Kripalani S, Roumie CL, Dalal AK, et al. Effects of a multifaceted medication reconciliation quality improvement intervention on patient safety: final results of the MARQUIS study. BMJ Qual Saf. 2018;27(12):954-964. PMID: 30126891.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 systems-based practice/inpatient medicine item testing evidence-based transitions-of-care bundles.",
      "distractorExclusionNotes": "Excluded passive discharge packets and resuming old bottles because active reconciliation and teach-back prevent readmissions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0842",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Patient-Controlled Analgesia Opioid Hypoventilation Naloxone Titration",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman is postoperative day 1 following an open total abdominal hysterectomy and bilateral salpingo-oophorectomy for uterine leiomyomata. She is receiving intravenous morphine via a patient-controlled analgesia (PCA) pump (demand dose 1 mg, lockout interval 6 minutes, continuous basal rate 1 mg/hr). The nurse discovers the patient deeply somnolent and difficult to arouse. Physical examination reveals: Glasgow Coma Scale score of 8 (E1, V2, M5), pupillary constriction (pinpoint pupils, 1.5 mm bilaterally, minimally reactive), respiratory rate 6 breaths/min with shallow respirations, and loud snoring with intermittent obstructive pauses. Blood pressure is 104/62 mm Hg, and pulse is 62/min. Oxygen saturation is 84% on ambient air, improving to 90% with bag-mask assistance. The PCA pump is immediately disconnected. Which of the following is the most appropriate next step in pharmacological management?",
    "choices": [
      [
        "Diluted intravenous naloxone administered in titrated increments (e.g., 0.04 to 0.08 mg every 2-3 minutes)",
        "This patient exhibits severe opioid-induced respiratory depression (OIRD) and sedation secondary to intravenous morphine PCA. In a postoperative patient receiving chronic or acute opioids who develops life-threatening hypoventilation (RR < 8/min, severe hypoxemia, somnolence), the opioid antagonist naloxone is indicated. However, in non-cardiac arrest postoperative settings, administering a full large bolus (e.g., 0.4 to 2.0 mg IV) is HARMFUL: it instantly precipitates an acute, explosive opioid withdrawal crisis characterized by excruciating intractable surgical wound pain, sympathetic adrenergic crisis (severe hypertension, tachycardia, myocardial ischemia), acute pulmonary edema, and severe agitation. The standard of care is careful titration: dilute a 0.4-mg ampule of naloxone in 9 mL of normal saline (producing 0.04 mg/mL) and administer small incremental doses of 0.04 mg to 0.08 mg IV every 2 to 3 minutes, titrating strictly to restore adequate ventilation (RR >= 10-12/min and airway protection) while preserving surgical analgesia."
      ],
      [
        "Immediate rapid intravenous bolus of 2.0 mg undiluted naloxone",
        "Large-dose naloxone boluses precipitate excruciating surgical pain, massive catecholamine storm, acute flash pulmonary edema, and cardiac arrest."
      ],
      [
        "Continuous intravenous infusion of flumazenil at 0.5 mg/min",
        "Flumazenil is a benzodiazepine antagonist that has zero efficacy for reversing opioid receptor-mediated hypoventilation."
      ],
      [
        "Subcutaneous administration of methylnaltrexone bromide 12 mg",
        "Methylnaltrexone is a peripherally acting mu-opioid receptor antagonist that does not cross the blood-brain barrier; it treats opioid-induced constipation, not central respiratory depression."
      ],
      [
        "Immediate endotracheal intubation without administering any reversal agent",
        "Controlled low-dose titration of naloxone rapidly restores spontaneous ventilation and airway reflexes, safely avoiding invasive endotracheal intubation."
      ]
    ],
    "shortestValidSolution": "PCA morphine + somnolence + RR 6/min = opioid respiratory depression -> titrated low-dose IV naloxone (0.04-0.08 mg increments).",
    "necessaryInference": "Titrate small incremental doses of naloxone to reverse opioid-induced hypoventilation while avoiding acute withdrawal and flash pulmonary edema.",
    "strongestDistractor": "Immediate rapid intravenous bolus of 2.0 mg undiluted naloxone",
    "distractorExclusion": "High-dose bolus naloxone triggers explosive pain crisis, hypertensive storm, and pulmonary edema; careful low-dose titration is required.",
    "citation": "Lynn RR, Galinkin J. Naloxone Dosage for Opioid Reversal: Current Evidence and Clinical Implications. Ther Adv Drug Saf. 2018;9(1):63-88. PMID: 29318006.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 inpatient safety/pharmacology item on carefully titrated naloxone administration for opioid-induced hypoventilation.",
      "distractorExclusionNotes": "Excluded large bolus naloxone (causes catecholamine surge and pulmonary edema) and flumazenil (benzodiazepine specific); low-dose titration is standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0843",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Malignant Hyperthermia Dantrolene Reversal and Volatile Gas Cessation",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old previously healthy man undergoes an emergent open reduction and internal fixation of a compound femur fracture. General anesthesia is induced with intravenous propofol and succinylcholine, followed by maintenance with inhaled sevoflurane. Forty-five minutes into the operation, the anesthesiologist notes that the end-tidal carbon dioxide (EtCO2) has risen acutely from 38 mm Hg to 88 mm Hg despite doubling minute ventilation. Blood pressure is 178/104 mm Hg, and heart rate is 144/min with frequent ventricular premature beats. The patient's jaw and extremity musculature are noted to be rigidly clenched and contracted ('masseter spasm'). Core body temperature monitored via esophageal probe rapidly climbs from 37.0 C to 40.4 C (104.7 F). Arterial blood gas reveals: pH 7.08, PaCO2 82 mm Hg, PaO2 124 mm Hg, and serum potassium 6.8 mEq/L. Which of the following is the most critical immediate pharmacological intervention?",
    "choices": [
      [
        "Immediately discontinue sevoflurane, hyperventilate with 100% oxygen, and administer intravenous dantrolene sodium",
        "Malignant hyperthermia (MH) is a life-threatening pharmacogenetic hypermetabolic crisis of skeletal muscle triggered by volatile halogenated anesthetics (sevoflurane, desflurane, isoflurane) and depolarizing neuromuscular blockers (succinylcholine), caused by mutations in the skeletal muscle ryanodine receptor (RYR1 gene) or voltage-gated calcium channel (CACNA1S gene). Uncontrolled massive release of calcium from the sarcoplasmic reticulum triggers sustained muscle contraction, leading to explosive ATP consumption, hypercapnia (the earliest and most sensitive sign: refractory EtCO2 elevation), tachycardia, profound mixed metabolic/respiratory acidosis, masseter and generalized muscle rigidity, hyperkalemia, and hyperthermia. Immediate management is: (1) Instantly stop volatile anesthetics and succinylcholine, (2) Hyperventilate with 100% oxygen at high fresh gas flows (>=10 L/min), (3) Administer intravenous dantrolene sodium (2.5 mg/kg IV initial bolus, repeated rapidly until hypermetabolism resolves, up to 10 mg/kg), and (4) Active external cooling and treatment of hyperkalemia. Dantrolene directly binds the RYR1 channel, blocking sarcoplasmic calcium release."
      ],
      [
        "Administer intravenous succinylcholine 100 mg to achieve complete muscle relaxation",
        "Administering additional succinylcholine adds further triggering agent into an ongoing malignant hyperthermic crisis, precipitating immediate fatal cardiac arrest."
      ],
      [
        "Intravenous infusion of high-dose bromocriptine mesylate via nasogastric tube",
        "Bromocriptine is a dopamine agonist used for Neuroleptic Malignant Syndrome (triggered by antipsychotics), not volatile anesthetic-induced malignant hyperthermia."
      ],
      [
        "Administer intravenous cyproheptadine 12 mg for acute serotonin storm",
        "Cyproheptadine is a serotonin antagonist used for Serotonin Syndrome; it has no activity on the skeletal muscle ryanodine receptor."
      ],
      [
        "Immediate defibrillation with 200 joules biphasic synchronization",
        "Cardioversion is indicated for ventricular fibrillation/pulseless VT; treating underlying ryanodine calcium dumping with dantrolene is essential to terminate arrhythmias."
      ]
    ],
    "shortestValidSolution": "Sevoflurane + EtCO2 88 + rigidity + 40.4C fever = Malignant Hyperthermia -> stop sevoflurane + 100% O2 + IV dantrolene immediately.",
    "necessaryInference": "Diagnose malignant hyperthermia triggered by volatile anesthetics/succinylcholine and administer immediate IV dantrolene sodium.",
    "strongestDistractor": "Intravenous infusion of high-dose bromocriptine mesylate via nasogastric tube",
    "distractorExclusion": "Bromocriptine treats NMS; malignant hyperthermia is an RYR1 channelopathy requiring immediate dantrolene sodium.",
    "citation": "Hopkins PM et al. Malignant hyperthermia 2020: Guideline from the Association of Anaesthetists. Anaesthesia. PMID: 33399225.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 anesthesiology/critical care emergency item on immediate recognition and dantrolene treatment of malignant hyperthermia.",
      "distractorExclusionNotes": "Excluded bromocriptine (NMS), cyproheptadine (serotonin syndrome), and succinylcholine (trigger) because dantrolene is the specific antidote.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0844",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Sepsis-Induced Cardiomyopathy Inotropic Dobutamine Escalation",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old woman is admitted to the intensive care unit with septic shock secondary to acute ascending pyelonephritis. She has received 30 mL/kg of balanced crystalloid resuscitation and is maintained on an infusion of norepinephrine at 0.35 mcg/kg/min. Despite achieving a mean arterial pressure of 66 mm Hg, signs of tissue hypoperfusion persist: urine output is 12 mL/hr, serum lactate has risen from 2.6 mmol/L to 4.8 mmol/L, and central venous oxygen saturation (ScvO2) is 52% (normal > 70%). Bedside echocardiography demonstrates a hyperdynamic right ventricle but global left ventricular hypokinesis with an estimated LVEF of 30% and left ventricular end-diastolic dilation, with no prior history of heart disease. Fluid responsiveness parameters (stroke volume variation on arterial pulse contour analysis) show negligible stroke volume variation (3%), indicating volume unresponsiveness. Which of the following is the most appropriate next step in hemodynamic management according to the Surviving Sepsis Campaign guidelines?",
    "choices": [
      [
        "Add an inotropic infusion of intravenous dobutamine (or switch to epinephrine)",
        "Sepsis-induced cardiomyopathy occurs in up to 30% to 50% of patients with septic shock, mediated by circulating myocardial depressant substances (TNF-alpha, IL-1beta), mitochondrial dysfunction, and beta-adrenergic receptor downregulation. It is characterized by acute, reversible left or biventricular systolic dysfunction (reduced ejection fraction and ventricular dilation). According to the Surviving Sepsis Campaign guidelines, when a patient in septic shock exhibits persistent evidence of tissue hypoperfusion (rising lactate, oliguria, low ScvO2 < 70%) despite adequate intravascular volume resuscitation and achieving target MAP (>= 65 mm Hg) on norepinephrine, the addition of an INOTROPE (dobutamine titrated up to 20 mcg/kg/min) or switching/adding epinephrine is recommended. Dobutamine stimulates beta-1 adrenergic receptors, increasing myocardial contractility and stroke volume, augmenting systemic oxygen delivery, and clearing lactate."
      ],
      [
        "Rapid intravenous bolus of two liters of 0.9% normal saline solution",
        "The patient is volume-unresponsive (SVV 3%); giving additional crystalloids causes alveolar pulmonary edema and exacerbates left ventricular volume overload."
      ],
      [
        "Add intravenous phenylephrine infusion to increase systemic vascular resistance",
        "Phenylephrine is a pure alpha-1 vasoconstrictor that increases LV afterload, further suppressing stroke volume in a failing, depressed septic myocardium."
      ],
      [
        "Initiate oral carvedilol 25 mg twice daily to achieve beta-blockade",
        "Administering a negative inotrope/beta-blocker during acute septic cardiomyopathy with cardiogenic shock precipitates acute cardiovascular collapse and death."
      ],
      [
        "Immediate placement of a pulmonary artery catheter with routine goal-directed PAC protocol",
        "Routine pulmonary artery catheterization has shown no mortality benefit in randomized trials of septic shock and exposes the patient to invasive complications."
      ]
    ],
    "shortestValidSolution": "Septic shock on norepinephrine + persistent hypoperfusion (low ScvO2, lactate) + low LVEF (30%) = add inotrope dobutamine.",
    "necessaryInference": "Apply Surviving Sepsis guidelines: add inotropic therapy (dobutamine) for myocardial depression and persistent hypoperfusion despite norepinephrine.",
    "strongestDistractor": "Rapid intravenous bolus of two liters of 0.9% normal saline solution",
    "distractorExclusion": "Stroke volume variation is 3% (volume non-responsive); further fluids worsen pulmonary edema, while inotropes restore cardiac output.",
    "citation": "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247. PMID: 34599691.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/cardiology item on recognizing sepsis-induced myocardial depression and escalating to inotropic therapy with dobutamine.",
      "distractorExclusionNotes": "Excluded fluid boluses (patient is volume refractory) and phenylephrine (worsens LV afterload); dobutamine augments depressed cardiac output.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0845",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Targeted Temperature Management Post-Cardiac Arrest Normothermia Protocol",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man achieves return of spontaneous circulation (ROSC) 18 minutes after an out-of-hospital ventricular fibrillation cardiac arrest. Following emergent coronary angiography with successful percutaneous coronary intervention of an occluded proximal left anterior descending artery, he remains comatose and unresponsive to verbal commands in the cardiac intensive care unit. His Glasgow Coma Scale score is 3 (E1, V1, M1). Pupillary light reflexes are present, and brainstem reflexes are intact. Core body temperature measured via esophageal probe is 37.2 C. Blood pressure is 118/72 mm Hg on low-dose norepinephrine. The multidisciplinary neurocritical care and cardiology teams formulate a post-resuscitation targeted temperature management (TTM) strategy. Which of the following temperature management protocols is supported by the landmark TTM2 trial and current international resuscitation guidelines?",
    "choices": [
      [
        "Maintain actively controlled normothermia targeting 36.0 to 37.5 C with aggressive fever prevention for at least 72 hours",
        "Targeted temperature management (TTM) is a cornerstone of neuroprotective care in comatose adult survivors of cardiac arrest. The landmark TTM2 randomized clinical trial (enrolling 1,900 patients) compared targeted hypothermia at 33 C versus targeted normothermia (targeting <= 37.5 C with active device cooling initiated if body temperature reached >= 37.8 C) and demonstrated NO DIFFERENCE in 6-month all-cause mortality (50% vs 48%) or functional neurological outcomes. However, hypothermia caused significantly higher rates of clinically significant cardiac arrhythmias. Current international guidelines (ILCOR, AHA, ERC) recommend maintaining actively controlled normothermia or mild hypothermia (target between 32 C and 37.5 C) for at least 24 hours, with AGGRESSIVE PREVENTION OF FEVER (temperature >= 37.8 C) maintained for at least 72 hours post-cardiac arrest, as secondary post-anoxic pyrexia significantly worsens cerebral metabolic demand, secondary ischemic injury, and neuronal death."
      ],
      [
        "Mandatory rapid surface cooling targeting strict hypothermia of 28.0 to 30.0 C for five days",
        "Deep hypothermia (<32 C) causes life-threatening ventricular arrhythmias, profound coagulopathy, severe immunosuppression, and increased mortality."
      ],
      [
        "Passive warming without temperature monitoring and treating hyperthermia only if temperature exceeds 40.5 C",
        "Allowing permissive fever or withholding active fever control leads to severe secondary neuronal apoptosis and worse neurological recovery."
      ],
      [
        "Immediate administration of high-dose intravenous methylprednisolone to reduce cerebral edema",
        "Corticosteroids have no proven neuroprotective benefit in hypoxic-ischemic brain injury and increase secondary infection and hyperglycemia risks."
      ],
      [
        "Continuous intravenous hypertonic 23.4% saline infusion as sole neuroprotective therapy",
        "Prophylactic hypertonic saline does not improve functional survival after cardiac arrest and causes severe hyperchloremic metabolic acidosis."
      ]
    ],
    "shortestValidSolution": "Comatose post-cardiac arrest = actively controlled normothermia (32-37.5 C) + strict fever prevention for >= 72 hrs (TTM2 trial).",
    "necessaryInference": "Apply recent trial evidence (TTM2) establishing that actively controlled normothermia with fever prevention is non-inferior to 33 C hypothermia.",
    "strongestDistractor": "Mandatory rapid surface cooling targeting strict hypothermia of 28.0 to 30.0 C for five days",
    "distractorExclusion": "Deep hypothermia is toxic; TTM2 showed normothermia (36-37.5 C) with fever avoidance achieves outcomes equivalent to hypothermia without arrhythmia risk.",
    "citation": "Dankiewicz J, Cronberg T, Lilja G, et al. Hypothermia Versus Normothermia After Out-of-Hospital Cardiac Arrest (TTM2 Trial). N Engl J Med. 2021;384(24):2283-2294. PMID: 34133859.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/cardiology item on modern targeted temperature management (TTM) protocols based on the TTM2 trial.",
      "distractorExclusionNotes": "Excluded deep hypothermia and passive unmonitored warming because active normothermia with strict fever avoidance is the evidence-based standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0846",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Brain Death Determination Apnea Testing and Prerequisite Exclusions",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman is admitted to the intensive care unit following a catastrophic severe traumatic brain injury resulting in diffuse cerebral edema, bilateral uncal herniation, and complete loss of consciousness. On post-injury day 4, the neurocritical care team initiates evaluation for the determination of death by neurologic criteria (brain death). Prior to formal clinical testing, the team reviews mandatory prerequisite conditions: core body temperature is 36.8 C, systolic blood pressure is maintained at 112 mm Hg on low-dose vasopressin, metabolic panel shows no profound acid-base or electrolyte disturbances, and all central nervous system depressant medications and neuromuscular blockade have been completely washed out (train-of-four 4/4 twitches). Physical examination confirms a deep coma (no response to noxious stimuli), absence of pupillary light reflexes, absent corneal reflexes, absent oculocephalic and oculovestibular reflexes, absent gag reflex, and absent cough reflex upon deep endotracheal suctioning. Apnea testing is initiated: the patient is pre-oxygenated with 100% FiO2, baseline PaCO2 is 40 mm Hg, and the mechanical ventilator is disconnected while 100% oxygen is delivered at 6 L/min via tracheal insufflation catheter. Over the subsequent 10 minutes, the patient remains hemodynamically stable without spontaneous respiratory efforts. Arterial blood gas drawn at minute 10 demonstrates pH 7.14 and PaCO2 64 mm Hg. Which of the following statements correctly interprets the apnea test and completes the determination of brain death according to American Academy of Neurology (AAN) guidelines?",
    "choices": [
      [
        "The apnea test is positive (confirmatory for brain death), as PaCO2 reached >= 60 mm Hg (and rose >= 20 mm Hg above baseline) without spontaneous respiration",
        "Determination of death by neurologic criteria (brain death) requires three cardinal findings: (1) Unresponsiveness/coma with an established irreversible catastrophic etiology, (2) Absence of all brainstem reflexes, and (3) Apnea. Guidelines from the American Academy of Neurology (AAN) require strict pre-testing prerequisites: core temperature > 36 C, systolic BP >= 100 mm Hg, and absence of confounding drugs (CNS depressants, paralytics) or severe electrolyte/endocrine derangements. Apnea testing assesses medullary respiratory center function. A positive (confirmatory) apnea test requires: (1) Absence of any spontaneous respiratory efforts throughout the test, AND (2) Final arterial PaCO2 reaching >= 60 mm Hg (or an increase of >= 20 mm Hg above normal baseline), with arterial pH < 7.30. In this patient, PaCO2 reached 64 mm Hg (a 24 mm Hg rise above baseline) with no respiratory effort, definitively confirming brain death without need for ancillary tests (unless apnea test cannot be completed due to severe hemodynamic collapse)."
      ],
      [
        "The apnea test is negative (inconclusive), as PaCO2 must reach at least 80 mm Hg before brain death can be declared",
        "The AAN diagnostic threshold for PaCO2 is >= 60 mm Hg (or >= 20 mm Hg above baseline); requiring 80 mm Hg is clinically incorrect."
      ],
      [
        "The test is invalid because ancillary four-vessel cerebral catheter angiography is legally mandatory in all cases",
        "Ancillary tests (cerebral angiography, nuclear scan, EEG, transcranial Doppler) are indicated ONLY when clinical exam or apnea testing cannot be completed safely."
      ],
      [
        "The patient is not brain dead because core body temperature must be elevated above 38.5 C during testing",
        "Elevated temperature is not required; the prerequisite threshold is normothermia (core temperature > 36 C) to eliminate hypothermic brain suppression."
      ],
      [
        "The test is abortive because arterial pH fell below 7.20, invalidating the carbon dioxide stimulus",
        "Acidemia (pH < 7.30) is the expected physiological consequence of permissive hypercapnia; it does not invalidate the test."
      ]
    ],
    "shortestValidSolution": "Prerequisites met + absent brainstem reflexes + no breathing with PaCO2 > 60 mm Hg (and > 20 mm Hg rise) = positive apnea test confirming brain death.",
    "necessaryInference": "Apply AAN brain death criteria: verify prerequisites and interpret positive apnea test thresholds (PaCO2 >= 60 mm Hg and >= 20 mm Hg increase without respirations).",
    "strongestDistractor": "The test is invalid because ancillary four-vessel cerebral catheter angiography is legally mandatory in all cases",
    "distractorExclusion": "Ancillary testing is reserved strictly for cases where apnea testing or clinical reflexes cannot be completed; clinical determination is primary.",
    "citation": "Harrison DS et al. A Modified Delphi Consensus-Based Comprehensive Checklist and Angoff Standard for Assessment of Competency in Brain Death/Death by Neurologic Criteria Determination. Crit Care Med. PMID: 42161897.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/neurology item testing the American Academy of Neurology criteria and apnea test thresholds for brain death determination.",
      "distractorExclusionNotes": "Excluded mandatory angiography and 80 mm Hg threshold because PaCO2 >= 60 mm Hg with absent respirations definitively confirms brain death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0847",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Pulmonary Embolism Outpatient Risk Stratification PESI Scoring",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old previously healthy woman presents to the emergency department with 2 days of mild, sharp right-sided pleuritic chest pain that worsens with deep inspiration. She has had no syncope, dyspnea at rest, hemoptysis, or leg swelling. Her only medication is a combined oral contraceptive pill. Vital signs show blood pressure 124/78 mm Hg, heart rate 74/min regular, respiratory rate 16/min, temperature 36.8 C, and room air oxygen saturation 98%. Physical examination is entirely normal with clear lung sounds and no lower extremity edema. Computed tomographic pulmonary angiography (CTPA) confirms an acute segmental pulmonary embolism in the right lower lobe. Transthoracic echocardiogram demonstrates normal right ventricular size and systolic function with no tricuspid regurgitation. High-sensitivity cardiac troponin I and NT-proBNP are completely normal. She has excellent home support and lives 5 minutes from the medical center. Her simplified Pulmonary Embolism Severity Index (sPESI) score is calculated as 0 points. Which of the following is the most appropriate management disposition?",
    "choices": [
      [
        "Initiate oral apixaban (or rivaroxaban) and discharge home with outpatient follow-up within 48 to 72 hours",
        "Acute pulmonary embolism (PE) risk stratification determines whether a patient requires intensive care, inpatient telemetry, or safe outpatient management. Both the European Society of Cardiology (ESC) and the American College of Chest Physicians (ACCP) guidelines recommend validated risk-stratification scores (such as the simplified Pulmonary Embolism Severity Index [sPESI] or Hestia criteria) to identify low-risk PE. An sPESI score of 0 (age < 80, no cancer, no chronic cardiopulmonary disease, heart rate < 100/min, systolic BP >= 100 mm Hg, and SpO2 >= 90%) identifies patients with an extremely low 30-day mortality risk (< 1.0%). In hemodynamically stable patients with low-risk clinical scores, absence of right ventricular strain on imaging, normal cardiac biomarkers (troponin/BNP), and a safe home environment, immediate initiation of oral anticoagulation with a direct oral anticoagulant (apixaban 10 mg twice daily for 7 days then 5 mg twice daily, or rivaroxaban 15 mg twice daily for 21 days then 20 mg daily) and early discharge home (or outpatient management) is safe, effective, and cost-reducing."
      ],
      [
        "Admit to the intensive care unit for continuous intravenous unfractionated heparin and catheter thrombolysis",
        "ICU admission and thrombolytic therapy are indicated only for massive (high-risk) PE presenting with shock or persistent hypotension, not low-risk segmental PE."
      ],
      [
        "Mandatory 5-day inpatient hospital admission on subcutaneous enoxaparin and oral warfarin",
        "Routine mandatory inpatient admission for all low-risk PE patients is outdated; outpatient DOAC therapy is established as safe and non-inferior."
      ],
      [
        "Placement of a permanent retrievable inferior vena cava filter without anticoagulation",
        "IVC filters are contraindicated as primary therapy when there is no contraindication to therapeutic anticoagulation."
      ],
      [
        "Prescribe oral aspirin 325 mg daily for three months with complete avoidance of anticoagulants",
        "Aspirin is completely inadequate for acute venous thromboembolism; full therapeutic anticoagulation is mandatory to prevent fatal recurrence."
      ]
    ],
    "shortestValidSolution": "Segmental PE + sPESI score 0 + normal RV/biomarkers = low-risk PE -> start oral DOAC + safe outpatient discharge.",
    "necessaryInference": "Apply risk stratification (sPESI = 0) and absence of RV strain to manage acute low-risk pulmonary embolism safely in the outpatient setting.",
    "strongestDistractor": "Mandatory 5-day inpatient hospital admission on subcutaneous enoxaparin and oral warfarin",
    "distractorExclusion": "Mandatory hospitalization is unnecessary for low-risk PE (sPESI = 0) without RV strain; outpatient DOAC management is the modern standard.",
    "citation": "Roy PM, Penaloza A, Hugli O, et al. Outpatient Management of Pulmonary Embolism: A Comprehensive Review and Meta-Analysis. Lancet. 2021;398(10309):1428-1438. PMID: 34481561.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/pulmonology item on risk-stratifying acute PE with sPESI to support safe outpatient management.",
      "distractorExclusionNotes": "Excluded ICU admission, IVC filter, and mandatory hospital stays because sPESI score 0 indicates outpatient DOAC eligibility.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0848",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Contrast-Associated Acute Kidney Injury Prevention Volume Expansion",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with stage 3b chronic kidney disease (eGFR 34 mL/min/1.73 m2, baseline serum creatinine 2.2 mg/dL) secondary to diabetic nephropathy and peripheral artery disease is scheduled to undergo an elective contrast-enhanced computed tomographic angiography (CTA) of the lower extremities with 100 mL of low-osmolar nonionic iodinated contrast. He is clinically euvolemic with a blood pressure of 128/76 mm Hg. He takes metformin (which is held), lisinopril, and atorvastatin. The medical team reviews preventive pharmacological strategies to reduce the incidence of Contrast-Associated Acute Kidney Injury (CA-AKI). Which of the following prophylactic regimens is most strongly supported by the landmark PRESERVE trial and current KDIGO guidelines?",
    "choices": [
      [
        "Intravenous isotonic crystalloid volume expansion (0.9% normal saline) prior to and following contrast administration",
        "Contrast-associated acute kidney injury (CA-AKI) results from renal medullary hypoxia (caused by contrast-induced vasoconstriction) and direct tubular epithelial cytotoxicity. Major risk factors include pre-existing chronic kidney disease (especially eGFR < 30-45 mL/min/1.73 m2), diabetes mellitus, hypovolemia, and high contrast volume. The landmark PRESERVE trial (enrolling > 5,000 high-risk patients undergoing angiography) definitively demonstrated that NEITHER intravenous sodium bicarbonate NOR oral N-acetylcysteine (NAC) provided any benefit over intravenous isotonic saline in preventing death, need for dialysis, or sustained decline in kidney function. Current KDIGO and ACR guidelines recommend intravenous volume expansion with isotonic crystalloids (0.9% normal saline or balanced crystalloid, e.g., 1-1.5 mL/kg/h for 3-12 hours pre- and 6-12 hours post-procedure) as the only proven preventive therapy. Using the lowest necessary volume of iso-osmolar or low-osmolar contrast and withholding nephrotoxic agents are essential co-interventions."
      ],
      [
        "Oral high-dose N-acetylcysteine (1,200 mg twice daily) combined with intravenous sodium bicarbonate",
        "The landmark PRESERVE trial proved that N-acetylcysteine and sodium bicarbonate do not reduce CA-AKI, dialysis, or mortality compared to isotonic saline."
      ],
      [
        "Intravenous furosemide 40 mg administered concurrently with contrast to force rapid diuresis",
        "Forced diuresis with loop diuretics causes acute intravascular volume depletion, worsening renal medullary vasoconstriction and increasing CA-AKI rates."
      ],
      [
        "Intravenous mannitol 20% infusion to stimulate osmotic proximal tubular wash-out",
        "Mannitol promotes osmotic nephrosis, intravascular volume shifts, and has been shown in controlled trials to increase contrast-induced nephrotoxicity."
      ],
      [
        "Pre-procedural hemodialysis session immediately before and immediately after contrast injection",
        "Prophylactic hemodialysis removes contrast too late to prevent tubular injury, causes hemodynamic instability, and does not prevent CA-AKI."
      ]
    ],
    "shortestValidSolution": "High-risk CKD undergoing contrast CTA = IV isotonic saline volume expansion (PRESERVE trial showed NAC and bicarb provide no benefit).",
    "necessaryInference": "Apply PRESERVE trial evidence establishing that isotonic crystalloid volume expansion is the sole proven prophylaxis for CA-AKI over NAC or bicarbonate.",
    "strongestDistractor": "Oral high-dose N-acetylcysteine (1,200 mg twice daily) combined with intravenous sodium bicarbonate",
    "distractorExclusion": "The PRESERVE trial disproved efficacy of N-acetylcysteine and sodium bicarbonate; standard isotonic volume expansion is recommended.",
    "citation": "Parikh CR et al. Kidney Biomarkers of Injury and Repair as Predictors of Contrast-Associated AKI: A Substudy of the PRESERVE Trial. Am J Kidney Dis. PMID: 31547939.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/radiology item on evidence-based prevention of contrast-associated AKI based on the PRESERVE trial.",
      "distractorExclusionNotes": "Excluded N-acetylcysteine and bicarbonate based on the PRESERVE trial showing zero benefit over standard IV isotonic hydration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0849",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Ischemic Stroke Thrombolysis Blood Pressure Threshold Management",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man presents to the emergency department 75 minutes after the sudden onset of right-sided hemiparesis and expressive aphasia (National Institutes of Health Stroke Scale [NIHSS] score of 14). Non-contrast head CT scan shows no evidence of intracranial hemorrhage or early ischemic changes. He is eligible for intravenous thrombolysis with alteplase. On presentation, his blood pressure is 196/114 mm Hg, and pulse is 88/min. A repeat blood pressure 10 minutes later is 192/110 mm Hg. The physician prepares to lower his blood pressure to meet regulatory safety thresholds for thrombolysis. Which of the following blood pressure parameters and pharmacotherapeutic regimens is strictly required prior to initiating intravenous alteplase and during the subsequent 24 hours?",
    "choices": [
      [
        "Lower blood pressure to < 185/110 mm Hg before alteplase, and maintain < 180/105 mm Hg for 24 hours post-thrombolysis using IV labetalol or nicardipine",
        "In acute ischemic stroke, systemic blood pressure management is tightly regulated to prevent fatal symptomatic intracranial hemorrhage while maintaining cerebral perfusion pressure in ischemic penumbral tissue. Guidelines from the AHA/ASA mandate strict blood pressure thresholds for intravenous thrombolysis: (1) Blood pressure MUST be lowered to < 185 mm Hg systolic and < 110 mm Hg diastolic PRIOR to administering intravenous alteplase (or tenecteplase); if blood pressure cannot be maintained below 185/110 mm Hg, thrombolysis is STRICTLY WITHHELD. (2) Once thrombolysis is initiated, blood pressure must be rigorously maintained < 180 mm Hg systolic and < 105 mm Hg diastolic continuously for the first 24 hours. First-line parenteral antihypertensives are IV labetalol (10-20 mg bolus repeated once) or a titratable IV nicardipine infusion (5-15 mg/hr). For non-thrombolysis patients, permissive hypertension up to 220/120 mm Hg is allowed for the first 24-48 hours."
      ],
      [
        "Rapidly lower systolic blood pressure to < 120 mm Hg before starting alteplase",
        "Precipitous reduction in blood pressure below 120 mm Hg impairs cerebral autoregulation, collapsing perfusion in the ischemic penumbra and converting viable tissue to completed infarction."
      ],
      [
        "Administer alteplase immediately regardless of blood pressure and treat hypertension only if SBP > 220 mm Hg",
        "Administering alteplase with blood pressure > 185/110 mm Hg dramatically increases the risk of fatal hemorrhagic transformation and intracranial hematoma."
      ],
      [
        "Sublingual nifedipine 10 mg capsule bitten and swallowed to produce immediate vasodilation",
        "Sublingual nifedipine causes uncontrollable, precipitous hypotension and reflex tachycardia, resulting in catastrophic watershed cerebral infarction and death."
      ],
      [
        "Intravenous sodium nitroprusside infusion as sole first-line agent targeting diastolic BP < 60 mm Hg",
        "Nitroprusside increases intracranial pressure, causes profound venodilation, and carries risk of cyanide toxicity; labetalol and nicardipine are first-line."
      ]
    ],
    "shortestValidSolution": "Stroke thrombolysis = lower BP <185/110 before alteplase and maintain <180/105 for 24 hrs post-thrombolysis (IV labetalol/nicardipine).",
    "necessaryInference": "Apply AHA/ASA blood pressure thresholds for stroke thrombolysis: <185/110 prior to alteplase and <180/105 for 24 hours post-infusion.",
    "strongestDistractor": "Administer alteplase immediately regardless of blood pressure and treat hypertension only if SBP > 220 mm Hg",
    "distractorExclusion": "Permissive hypertension (up to 220/120) applies ONLY when thrombolysis is withheld; thrombolysis mandates strict BP < 185/110 to prevent intracranial hemorrhage.",
    "citation": "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update. Stroke. 2019;50(12):e344-e418. PMID: 31662037.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 neurology emergency item testing AHA/ASA blood pressure targets and intravenous agents before and after stroke thrombolysis.",
      "distractorExclusionNotes": "Excluded permissive hypertension and sublingual nifedipine because strict titratable control (<185/110 pre and <180/105 post) is required.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0850",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Clostridioides Difficile Infection First-Line Fidaxomicin Pharmacotherapy",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman is evaluated 10 days after completing a 7-day course of intravenous cefepime for acute pyelonephritis. She presents with 3 days of watery, non-bloody diarrhea with 6 to 8 bowel movements daily, accompanied by lower abdominal cramping and low-grade fever. Physical examination reveals mild diffuse lower abdominal tenderness without guarding, rigidity, or distension. Vital signs show blood pressure 124/76 mm Hg, heart rate 84/min, and temperature 37.8 C (100.0 F). Stool testing by nucleic acid amplification and enzyme immunoassay is positive for Clostridioides difficile toxin. Laboratory evaluation reveals: WBC 11,200/mm3 and serum creatinine 0.8 mg/dL (baseline 0.8 mg/dL). She has never had a C. difficile infection in the past. Which of the following is the preferred first-line pharmacological treatment according to the current Infectious Diseases Society of America (IDSA) guidelines?",
    "choices": [
      [
        "Oral fidaxomicin 200 mg twice daily for ten days",
        "Clostridioides difficile infection (CDI) is the leading cause of healthcare-associated infectious diarrhea. In the updated 2021 IDSA/SHEA clinical practice guidelines, oral fidaxomicin (200 mg twice daily for 10 days) is the PREFERRED first-line agent for an initial episode of non-severe (WBC < 15,000/mm3 and Cr < 1.5 mg/dL) or severe CDI. Fidaxomicin is a macrocyclic bactericidal antibiotic that selectively inhibits RNA polymerase of C. difficile with minimal systemic absorption. Unlike vancomycin and metronidazole, fidaxomicin has a narrow antibacterial spectrum that spares normal commensal colonic Bacteroides and Firmicutes microbiome species, resulting in significantly lower rates of recurrent CDI (a 40-50% relative reduction in recurrence compared to vancomycin). Oral vancomycin (125 mg four times daily for 10 days) is an acceptable alternative when fidaxomicin is unavailable. Oral metronidazole is no longer recommended as first-line therapy due to inferior cure and higher recurrence rates."
      ],
      [
        "Oral metronidazole 500 mg three times daily for ten days as preferred first-line therapy",
        "Metronidazole is relegated to third-line therapy and is strictly inferior to fidaxomicin and vancomycin in both initial clinical cure and sustained recurrence-free cure."
      ],
      [
        "Intravenous vancomycin 1,000 mg every twelve hours infused over sixty minutes",
        "Intravenous vancomycin is eliminated by the kidneys and does NOT penetrate into the colonic lumen; it has zero efficacy for treating luminal C. difficile infection."
      ],
      [
        "Immediate referral for fecal microbiota transplantation (FMT) during the initial episode",
        "FMT is indicated only for multiple recurrent CDI (>= 2 recurrences / 3 episodes) failing pulsed vancomycin/fidaxomicin, not for an initial episode."
      ],
      [
        "Oral loperamide 4 mg after each loose stool combined with oral probiotics",
        "Antimotility agents like loperamide are strictly contraindicated in active CDI due to risk of precipitating toxic megacolon and colonic perforation."
      ]
    ],
    "shortestValidSolution": "First episode C. diff infection = oral fidaxomicin 200 mg BID x 10 days is preferred first-line (oral vancomycin is alternative).",
    "necessaryInference": "Identify oral fidaxomicin as the preferred first-line regimen for CDI under current IDSA guidelines due to lower recurrence rates.",
    "strongestDistractor": "Oral metronidazole 500 mg three times daily for ten days as preferred first-line therapy",
    "distractorExclusion": "Metronidazole is no longer first-line due to inferior clinical cure; fidaxomicin is preferred over both metronidazole and vancomycin.",
    "citation": "Johnson S, Lavergne V, Skinner AM, et al. Clinical Practice Guideline by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA): 2021 Focused Update Guidelines on Management of Clostridioides Difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164674.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 infectious disease/gastroenterology item on modern guideline preferences for treating initial C. difficile infection with fidaxomicin.",
      "distractorExclusionNotes": "Excluded metronidazole (inferior cure), IV vancomycin (does not enter colonic lumen), and loperamide (toxic megacolon risk); oral fidaxomicin is preferred.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
