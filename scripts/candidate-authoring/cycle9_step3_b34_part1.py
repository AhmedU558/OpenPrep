"""
Step 3 Batch 34 (0826-0838) Definitions - Inpatient & Critical Care Medicine
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b34_part1 = [
  # 0826
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
  # 0827
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
  # 0828
  {
    "code": "op-c-s3-0828",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Post-Extubation Laryngeal Stridor Cuff Leak Test and Steroid Prophylaxis",
    "provisionalDifficulty": 5,
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
    "citation": "Kuriyama A, Umakoshi N, Sun R. Prophylactic Corticosteroids for Prevention of Postextubation Stridor and Reintubation in Adults: A Systematic Review and Meta-Analysis. Chest. 2017;151(5):1002-1010. PMID: 28249814.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care item on cuff leak test interpretation and prophylactic corticosteroid timing to prevent post-extubation stridor.",
      "distractorExclusionNotes": "Excluded immediate extubation (stridor risk) and tracheostomy (excessive) because IV steroids for 4-6 hours resolve laryngeal edema.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0829
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
  # 0830
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
  # 0831
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
  # 0832
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
  # 0833
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
    "citation": "Vieillard-Baron A, Naeije R, Haddad F, et al. Diagnostic and Therapeutic Approach to the Care of the Critically Ill Patient With Right Ventricular Failure. Intensive Care Med. 2016;42(9):1426-1437. PMID: 27072939.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/cardiology item on hemodynamic management of acute cor pulmonale and RV failure in ARDS.",
      "distractorExclusionNotes": "Excluded fluid boluses (cause ventricular collapse) and high PEEP (increases RV afterload); inhaled epoprostenol lowers PVR selectively.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0834
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
  # 0835
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
  # 0836
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
    "citation": "Krag M, Perner A, Wetterslev J, et al. Prevalence and Risk Factors for Gastrointestinal Bleeding in the ICU: A Multicentre Prospective Cohort Study. Intensive Care Med. 2015;41(5):833-845. PMID: 25808233.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/inpatient medicine item testing precise evidence-based indications for stress ulcer prophylaxis.",
      "distractorExclusionNotes": "Excluded general ward patients because mechanical ventilation >=48 hours and severe coagulopathy are the established primary indications.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0837
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
  # 0838
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
  }
]
