import { CandidateSpec } from './types';

export const step2Batch13: CandidateSpec[] = [
  {
    "code": "op-c-s2-0301",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Right Ventricular Myocardial Infarction",
    "subtopic": "Hemodynamic Decompensation with Vasodilators and Preload Dependence",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man is brought to the emergency department by ambulance due to severe, crushing substernal chest pressure that started 2 hours ago while mowing his lawn, accompanied by nausea and profuse diaphoresis. During transport, the paramedics administered sublingual nitroglycerin 0.4 mg. Two minutes later, the patient experienced sudden severe dizziness, became obtunded, and his systolic blood pressure dropped from 132 mm Hg to 74 mm Hg.\n\nOn arrival at the resuscitation bay, he is pale, lethargic, and answering questions with single words. Vital signs show:\n- Blood pressure: 74/46 mm Hg\n- Heart rate: 52/min, regular\n- Respiratory rate: 20/min\n- Oxygen saturation: 96% on ambient air\n\nPhysical examination reveals completely clear lung fields bilaterally without crackles or wheezes. Cardiac examination demonstrates distant heart sounds without murmurs or gallops. The internal jugular venous pulsation is visible at the angle of the jaw while the patient is upright at 45 degrees, and the jugular venous column paradoxically rises further during inspiration (positive Kussmaul sign). The extremities are cool and clammy with delayed capillary refill, and there is no peripheral edema.\n\nA standard 12-lead electrocardiogram demonstrates 3-mm ST-segment elevation in leads II, III, and aVF with reciprocal ST-segment depression in leads I and aVL, accompanied by second-degree Mobitz type I atrioventricular nodal conduction delay.\n\nWhich of the following is the most appropriate initial intervention to stabilize this patient's hemodynamics?",
    "choices": [
      [
        "Rapid intravenous administration of 0.9% normal saline bolus",
        "The clinical picture\u2014acute inferior ST-elevation myocardial infarction (ST elevation in II, III, aVF) complicated by profound hypotension, marked jugular venous distention with a positive Kussmaul sign, and completely CLEAR lung fields\u2014is classic for acute right ventricular (RV) myocardial infarction. The ischemic right ventricle is acutely stiff, dilated, and non-compliant, impairing forward flow through the pulmonary circulation into the left heart and causing severe preload dependence. When nitroglycerin is administered, systemic venodilation precipitously depletes venous return to the right heart, leading to acute RV collapse, failure of left ventricular filling, and severe cardiogenic shock. The immediate, life-saving management is rapid isotonic crystalloid volume loading (0.9% saline bolus) to elevate right atrial and RV end-diastolic filling pressures, restoring forward transpulmonary flow and left-sided cardiac output."
      ],
      [
        "Intravenous infusion of nitroglycerin titrated to reduce ventricular afterload and relieve ischemia",
        "Intravenous nitrates cause potent venodilation, further decreasing right ventricular end-diastolic filling volume. In RV infarction, where the ventricle is exquisitely preload-dependent, nitrates precipitate irreversible electromechanical collapse and are strictly contraindicated."
      ],
      [
        "Intravenous furosemide 40 mg to decompress elevated central venous pressure and jugular distension",
        "Administering a loop diuretic in RV infarction drastically decreases intravascular volume and preload, worsening cardiogenic shock. Elevated JVP in RV failure reflects right heart stiffness, not left-sided pulmonary congestion."
      ],
      [
        "Intravenous metoprolol 5 mg every 5 minutes to reduce myocardial oxygen consumption",
        "Beta-blockers depress heart rate, contractility, and cardiac output. In an unstable patient with bradycardia, AV nodal conduction block, and cardiogenic shock, beta-blockers can trigger asystole or complete heart block."
      ],
      [
        "Immediate placement of an intra-aortic balloon pump prior to cardiac catheterization",
        "An intra-aortic balloon pump (IABP) reduces left ventricular afterload and augments coronary perfusion; it does not correct the primary defect of right ventricular preload failure and is not the initial intervention before rapid fluid resuscitation."
      ]
    ],
    "shortestValidSolution": "Inferior STEMI + profound hypotension after nitrate + elevated JVP with Kussmaul sign + clear lungs = RV infarction -> initial management is rapid IV normal saline bolus.",
    "necessaryInference": "Synthesize inferior STEMI, profound nitrate-induced hypotension, elevated JVP with Kussmaul sign, and clear lung fields to deduce RV infarction without relying on a V4R giveaway, and select volume resuscitation over preload reduction.",
    "strongestDistractor": "Intravenous furosemide 40 mg to decompress elevated central venous pressure and jugular distension",
    "distractorExclusion": "Diuretics further deplete RV preload, precipitating cardiovascular collapse; elevated JVP with clear lungs demands volume loading.",
    "citation": "O'Gara PT, et al. 2013 ACCF/AHA guideline for the management of ST-elevation myocardial infarction. Circulation. 2013;127(4):e362-e425. PMID: 23247304.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Synthesize inferior STEMI, profound nitrate-induced hypotension, elevated JVP with Kussmaul sign, and clear lung fields to deduce RV infarction without relying on a V4R giveaway, and select volume resuscitation over preload reduction.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous furosemide 40 mg to decompress elevated central venous pressure and ' excluded: Diuretics further deplete RV preload, precipitating cardiovascular collapse; elevated JVP with clear lungs demands volume loading.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0302",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Acute Respiratory Distress Syndrome (ARDS)",
    "subtopic": "Lung-Protective Ventilation Strategy and Permissive Hypercapnia",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with severe acute gallstone pancreatitis is intubated in the intensive care unit for progressive hypoxemic respiratory failure. Chest radiography reveals extensive bilateral fluffy alveolar infiltrates with normal cardiac silhouette. Arterial blood gas analysis on mechanical ventilation (FiO2 0.80, positive end-expiratory pressure [PEEP] 10 cm H2O, tidal volume 600 mL, respiratory rate 16/min) demonstrates: pH 7.36, PaCO2 42 mm Hg, PaO2 64 mm Hg (PaO2/FiO2 ratio: 80 mm Hg). The patient's measured height is 162 cm (5 ft 4 in), and her predicted ideal body weight is 55 kg. The ventilator graphics display a plateau airway pressure of 36 cm H2O. Which of the following ventilator adjustments is most strongly indicated to improve survival in this patient?",
    "choices": [
      [
        "Reduce the tidal volume to 330 mL (6 mL/kg of predicted body weight)",
        "The patient has severe ARDS (P/F ratio < 100 mm Hg, bilateral infiltrates, non-cardiogenic pulmonary edema). The ARDSNet trial demonstrated a significant mortality reduction with a lung-protective ventilation strategy utilizing low tidal volumes (4\u20138 mL/kg, targeting 6 mL/kg based on predicted/ideal body weight rather than actual weight) and maintaining plateau pressure \u226430 cm H2O. For her predicted body weight of 55 kg, 6 mL/kg is 330 mL. High tidal volumes (600 mL = 11 mL/kg) cause ventilator-induced lung injury (volutrauma and barotrauma), elevated plateau pressure (>30 cm H2O), and increased mortality."
      ],
      [
        "Increase the respiratory rate to 28/min while maintaining the 600 mL tidal volume",
        "Increasing the respiratory rate without reducing tidal volume maintains high plateau pressures (>30 cm H2O) and volutrauma, perpetuating alveolar rupture and inflammatory cytokine release without addressing the mechanical source of lung injury."
      ],
      [
        "Discontinue positive end-expiratory pressure to decrease mean airway pressure",
        "PEEP prevents end-expiratory alveolar collapse (atelectotrauma) and improves oxygenation by recruiting non-aerated lung units. Discontinuing PEEP in severe ARDS causes derecruitment and catastrophic hypoxemia."
      ],
      [
        "Switch to volume-targeted proportional assist ventilation with auto-titrating pressure",
        "Proportional assist ventilation is an assist mode that varies support with patient effort, unsuitable for deeply sedated patients with severe ARDS, elevated plateau pressures, and severe hypoxemia where strict tidal volume limitation is life-saving."
      ],
      [
        "Increase tidal volume to 750 mL to overcome alveolar dead space fraction",
        "Increasing tidal volume to 750 mL (>13 mL/kg PBW) drastically elevates transpulmonary and plateau pressures, causing massive barotrauma, pneumothorax, and marked increase in mortality in ARDS."
      ]
    ],
    "shortestValidSolution": "Pancreatitis + severe ARDS + plateau pressure 36 cm H2O on 600 mL Vt -> lower tidal volume to 6 mL/kg PBW (330 mL) to target plateau pressure <= 30 cm H2O.",
    "necessaryInference": "Calculate tidal volume based on predicted body weight (55 kg * 6 mL/kg = 330 mL) and recognize that reducing tidal volume to maintain plateau pressure <= 30 cm H2O is the single intervention with proven mortality benefit in ARDS.",
    "strongestDistractor": "Increase the respiratory rate to 28/min while maintaining the 600 mL tidal volume",
    "distractorExclusion": "Minute ventilation cannot be raised at the expense of high tidal volumes; lung-protective ventilation mandates volume reduction even if permissive hypercapnia occurs.",
    "citation": "The Acute Respiratory Distress Syndrome Network. Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury. N Engl J Med. 2000;342(18):1301-1308. PMID: 10793162.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Calculate tidal volume based on predicted body weight (55 kg * 6 mL/kg = 330 mL) and recognize that reducing tidal volume to maintain plateau pressure <= 30 cm H2O is the single intervention with proven mortality benefit in ARDS.",
      "distractorExclusionNotes": "Strongest distractor 'Increase the respiratory rate to 28/min while maintaining the 600 mL tidal volum' excluded: Minute ventilation cannot be raised at the expense of high tidal volumes; lung-protective ventilation mandates volume reduction even if permissive hypercapnia occurs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0303",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Hemorrhagic Shock and Massive Transfusion Protocol",
    "subtopic": "Balanced 1:1:1 Hemostatic Resuscitation vs Crystalloid Overload",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old man arrives at the trauma bay 20 minutes after sustaining multiple high-velocity gunshot wounds to the abdomen and pelvis. On arrival, he is somnolent and pale with cool, clammy extremities. Vital signs are: blood pressure 72/40 mm Hg, heart rate 138/min, and respiratory rate 26/min. Focused assessment with sonography for trauma (FAST) demonstrates abundant free fluid in Morison pouch and the splenorenal recess, and pelvis radiography reveals an unstable open-book pelvic fracture. Two large-bore 14-gauge peripheral intravenous lines are placed. Which of the following resuscitation strategies is most appropriate while preparing the patient for immediate emergency laparotomy?",
    "choices": [
      [
        "Initiation of massive transfusion protocol with uncrossmatched blood, plasma, and platelets in a 1:1:1 ratio",
        "The patient is in class IV hemorrhagic shock from penetrating abdominal and pelvic trauma. Modern damage control resuscitation mandates early activation of a massive transfusion protocol (MTP) using a balanced 1:1:1 ratio of packed red blood cells, fresh frozen plasma (FFP), and platelets. Large-volume crystalloid resuscitation causes dilutional coagulopathy, hypothermia, and metabolic acidosis (the 'lethal triad' of trauma), worsening hemorrhage and dramatically increasing mortality. The PROPPR trial demonstrated that balanced 1:1:1 hemostatic resuscitation improves early hemostasis and reduces death from exsanguination."
      ],
      [
        "Rapid infusion of 3 liters of warmed lactated Ringer solution prior to blood product administration",
        "Aggressive crystalloid-first resuscitation is obsolete in major trauma; infusing 3 liters of lactated Ringer dilutes clotting factors and platelets, increases hydrostatic pressure dislodging early clots ('pop the clot'), and exacerbates hypothermia and coagulopathy."
      ],
      [
        "Transfusion of 4 units of packed red blood cells followed by reassessment of laboratory coagulation parameters",
        "Administering red cells alone without concurrent plasma and platelets rapidly produces dilutional thrombocytopenia and deficiency of clotting factors, precipitating uncontrollable diffuse microvascular bleeding."
      ],
      [
        "Continuous infusion of norepinephrine titrated to a mean arterial pressure of 80 mm Hg",
        "Vasopressors in unresuscitated hemorrhagic shock cause intense peripheral and splanchnic vasoconstriction, worsening tissue hypoperfusion and lactic acidosis without addressing intravascular volume deficit. Hemostatic blood products are mandatory before vasopressors."
      ],
      [
        "Administration of high-dose recombinant factor VIIa prior to surgical vascular control",
        "Recombinant factor VIIa is reserved as off-label rescue therapy for refractory coagulopathic bleeding when standard blood products and surgical hemostasis fail, and carries a significant risk of thromboembolic events; it is not initial first-line therapy."
      ]
    ],
    "shortestValidSolution": "Penetrating trauma + class IV hemorrhagic shock + positive FAST -> Massive Transfusion Protocol in balanced 1:1:1 ratio (PRBC:FFP:platelets) to prevent lethal triad.",
    "necessaryInference": "Contrast modern balanced damage-control resuscitation (1:1:1 ratio of PRBCs, plasma, and platelets) with outdated crystalloid loading that worsens dilutional coagulopathy and acidosis.",
    "strongestDistractor": "Rapid infusion of 3 liters of warmed lactated Ringer solution prior to blood product administration",
    "distractorExclusion": "Crystalloid boluses are contraindicated in severe exsanguinating trauma because they dilute clotting factors and exacerbate the lethal triad of hypothermia, acidosis, and coagulopathy.",
    "citation": "Holcomb JB, et al. Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients with Severe Trauma: The PROPPR Randomized Clinical Trial. JAMA. 2015;313(5):471-482. PMID: 25647203.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Contrast modern balanced damage-control resuscitation (1:1:1 ratio of PRBCs, plasma, and platelets) with outdated crystalloid loading that worsens dilutional coagulopathy and acidosis.",
      "distractorExclusionNotes": "Strongest distractor 'Rapid infusion of 3 liters of warmed lactated Ringer solution prior to blood pro' excluded: Crystalloid boluses are contraindicated in severe exsanguinating trauma because they dilute clotting factors and exacerbate the lethal triad of hypothermia, acidosis, and coagulopa",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0304",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Acetaminophen Toxicity",
    "subtopic": "Timing of N-Acetylcysteine Administration and Rumack-Matthew Nomogram",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college student is brought to the emergency department by her roommate 5 hours after intentionally ingesting an entire bottle of extra-strength acetaminophen (approximately 25 grams) following an emotional breakup. She has vomited twice and complains of mild epigastric discomfort, but denies alcohol or other co-ingestions. Physical examination reveals normal vital signs, clear lungs, and mild non-tender epigastric fullness without peritoneal signs. Serum acetaminophen concentration drawn at 5 hours post-ingestion returns at 180 mcg/mL. Aspartate aminotransferase (AST) is 24 U/L and alanine aminotransferase (ALT) is 21 U/L. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Initiate intravenous N-acetylcysteine infusion immediately",
        "The Rumack-Matthew nomogram plots serum acetaminophen concentration versus time elapsed since ingestion to assess hepatotoxicity risk. The treatment line starts at 150 mcg/mL at 4 hours and 75 mcg/mL at 8 hours. At 5 hours, 180 mcg/mL is well above the treatment line (which is approximately 130 mcg/mL at 5 hours), indicating substantial risk for centrilobular hepatic necrosis. N-acetylcysteine (NAC) replenishes glutathione stores and conjugates NAPQI (the toxic reactive metabolite), providing near 100% hepatoprotection when started within 8 hours of acute ingestion. Immediate initiation is mandatory."
      ],
      [
        "Repeat the serum acetaminophen concentration in 4 hours before making treatment decisions",
        "Delaying NAC therapy while awaiting repeat levels allows toxic NAPQI to bind covalently to hepatocellular macromolecules, causing irreversible centrilobular necrosis. Because the 5-hour level clearly exceeds the nomogram treatment line, immediate therapy is required."
      ],
      [
        "Administer activated charcoal orally and discharge with psychiatry follow-up",
        "Activated charcoal is most effective when administered within 1 to 2 hours of ingestion and is not adequate monotherapy for a toxic level at 5 hours; moreover, the patient requires inpatient NAC therapy and subsequent psychiatric evaluation."
      ],
      [
        "Obtain urgent emergent consult for transjugular intrahepatic portosystemic shunt",
        "TIPS is a procedure for portal hypertension (variceal bleeding or refractory ascites) and has no role in the management of acute acetaminophen toxicity."
      ],
      [
        "Administer deferoxamine intravenously to prevent hepatic iron-induced lipid peroxidation",
        "Deferoxamine is the specific chelating agent for acute iron poisoning, characterized by radiopaque pills on abdominal radiography and metabolic acidosis, not acetaminophen overdose."
      ]
    ],
    "shortestValidSolution": "Acute acetaminophen overdose at 5 hours with serum level 180 mcg/mL (above 130 mcg/mL nomogram line) -> immediate N-acetylcysteine to restore glutathione.",
    "necessaryInference": "Apply the Rumack-Matthew nomogram cutoff (150 mcg/mL at 4 hr; ~130 mcg/mL at 5 hr) to recognize that a level of 180 mcg/mL requires immediate NAC without waiting for repeat levels or AST/ALT elevation.",
    "strongestDistractor": "Repeat the serum acetaminophen concentration in 4 hours before making treatment decisions",
    "distractorExclusion": "Waiting 4 hours would cross the 8-hour window where NAC is most effective, risking irreversible hepatic failure when the initial level already clearly exceeds the treatment line.",
    "citation": "Dart RC, et al. Acetaminophen Poisoning: An Evidence-Based Consensus Guideline for Out-of-Hospital Management. Clin Toxicol (Phila). 2006;44(1):1-18. PMID: 16496488.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the Rumack-Matthew nomogram cutoff (150 mcg/mL at 4 hr; ~130 mcg/mL at 5 hr) to recognize that a level of 180 mcg/mL requires immediate NAC without waiting for repeat levels or AST/ALT elevation.",
      "distractorExclusionNotes": "Strongest distractor 'Repeat the serum acetaminophen concentration in 4 hours before making treatment ' excluded: Waiting 4 hours would cross the 8-hour window where NAC is most effective, risking irreversible hepatic failure when the initial level already clearly exceeds the treatment line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0305",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Aortic Dissection",
    "subtopic": "Target Hemodynamic Parameters and Sequence of Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the emergency department with sudden-onset, severe, tearing chest pain radiating between his shoulder blades that began 45 minutes ago. He has a history of poorly controlled hypertension. Vital signs are: blood pressure 210/118 mm Hg in the right arm and 184/98 mm Hg in the left arm, heart rate 104/min, respiratory rate 22/min, and oxygen saturation 96% on ambient air. Cardiac examination reveals a grade 2/6 early diastolic decrescendo murmur heard best along the right sternal border. Bilateral radial pulses are palpable but asymmetric. Contrast-enhanced CT angiography of the chest demonstrates a Stanford type A aortic dissection originating in the ascending aorta and extending into the aortic arch. Which of the following is the most appropriate initial medical management while surgical consultation is obtained?",
    "choices": [
      [
        "Intravenous esmolol infusion targeting heart rate < 60/min, followed by intravenous nitroprusside if systolic blood pressure remains > 120 mm Hg",
        "The acute medical management of aortic dissection aims to minimize aortic wall shear stress (rate of change of left ventricular pressure, dP/dt). This requires immediate heart rate control (target HR < 60/min) followed by blood pressure reduction (target SBP 100\u2013120 mm Hg). Intravenous beta-blockers (such as esmolol or labetalol) must always be administered FIRST before vasodilators (such as sodium nitroprusside or nicardipine). Administering a vasodilator alone or prior to beta-blockade induces reflex sympathetic tachycardia and increases dP/dt, propagating the intimal flap and accelerating aortic rupture."
      ],
      [
        "Intravenous sodium nitroprusside monotherapy titrated rapidly to a systolic blood pressure < 110 mm Hg",
        "Sodium nitroprusside is a potent pure vasodilator. Administered without prior beta-blockade, it causes reflex sympathetic adrenergic discharge, increasing heart rate and left ventricular contractility (dP/dt), which tears the aortic wall further."
      ],
      [
        "Intravenous hydralazine 20 mg bolus every 20 minutes to maintain diastolic pressure < 80 mm Hg",
        "Hydralazine causes unpredictable, prolonged vasodilation and pronounced reflex tachycardia, increasing dP/dt and increasing the risk of dissection propagation; it is contraindicated in acute aortic dissection."
      ],
      [
        "Intravenous unfractionated heparin bolus and infusion to prevent thromboembolic propagation",
        "Anticoagulation with heparin is strictly contraindicated in acute aortic dissection because it impairs false lumen clotting, exacerbates bleeding, and drastically increases the risk of fatal pericardial tamponade or hemothorax."
      ],
      [
        "Urgent pericardiocentesis under echocardiographic guidance to treat the early aortic regurgitation",
        "Pericardiocentesis is contraindicated in hemopericardium from acute aortic dissection unless the patient is in pulseless cardiac arrest; withdrawing blood acutely decompresses the intrapericardial space, increasing transaortic transmural pressure and precipitating fatal exsanguination."
      ]
    ],
    "shortestValidSolution": "Type A dissection + severe hypertension and tachycardia -> IV beta-blocker (esmolol) first to HR < 60/min, then vasodilator (nitroprusside) if SBP > 120 mm Hg.",
    "necessaryInference": "Apply the mandatory physiological rule of aortic dissection: beta-blockers must precede vasodilators to suppress reflex tachycardia and dP/dt (shear stress) before reducing systolic pressure.",
    "strongestDistractor": "Intravenous sodium nitroprusside monotherapy titrated rapidly to a systolic blood pressure < 110 mm Hg",
    "distractorExclusion": "Monotherapy with pure vasodilators like nitroprusside induces reflex sympathetic tachycardia, increasing aortic shear stress and accelerating aortic rupture.",
    "citation": "Hiratzka LF, et al. 2010 ACCF/AHA/AATS Guidelines for the Diagnosis and Management of Patients with Thoracic Aortic Disease. Circulation. 2010;121(13):e266-e369. PMID: 20233780.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the mandatory physiological rule of aortic dissection: beta-blockers must precede vasodilators to suppress reflex tachycardia and dP/dt (shear stress) before reducing systolic pressure.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous sodium nitroprusside monotherapy titrated rapidly to a systolic bloo' excluded: Monotherapy with pure vasodilators like nitroprusside induces reflex sympathetic tachycardia, increasing aortic shear stress and accelerating aortic rupture.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0306",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Tension Pneumothorax",
    "subtopic": "Clinical Diagnosis vs Radiographic Delay and Needle Decompression",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old man is brought to the emergency department after being struck by an automobile while riding his bicycle. He is agitated, gasping for air, and cyanotic. Vital signs are: blood pressure 74/42 mm Hg, heart rate 142/min, respiratory rate 36/min, and oxygen saturation 81% on a nonrebreather mask. Physical examination reveals distended neck veins, trachea palpably deviated to the left, subcutaneous emphysema over the right hemithorax, and complete absence of breath sounds over the right lung with hyperresonance to percussion. The junior resident suggests immediately wheeling the patient to the radiology suite for a stat portable chest radiograph. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform immediate needle decompression in the second intercostal space at the midclavicular line",
        "The patient has a life-threatening right-sided tension pneumothorax with severe hemodynamic compromise (hypotension, tachycardia, tracheal deviation, JVD, absent breath sounds). Tension pneumothorax is a clinical diagnosis; waiting for radiographic confirmation causes fatal delay. Immediate needle decompression (or finger thoracostomy) converts the tension pneumothorax into an open pneumothorax, decompressing intrathoracic pressure, relieving superior and inferior vena caval kinking, and restoring venous return and cardiac output, followed promptly by tube thoracostomy."
      ],
      [
        "Obtain a portable upright chest radiograph to confirm the location of the pleural line",
        "Delaying decompression to obtain an imaging study in an unstable patient with clinical signs of tension pneumothorax is a critical medical error that can result in pulseless electrical activity (PEA) cardiac arrest."
      ],
      [
        "Perform emergency rapid sequence endotracheal intubation before thoracic intervention",
        "Positive pressure ventilation prior to decompressing a tension pneumothorax exacerbates intrathoracic pressure, worsens mediastinal shift, and accelerates complete cardiovascular collapse."
      ],
      [
        "Administer a 2-liter intravenous bolus of normal saline to treat the distributive shock",
        "The primary etiology of hypotension is obstructive shock from impaired venous return due to positive intrathoracic pressure; volume infusion without thoracic decompression does not restore cardiac output."
      ],
      [
        "Perform urgent pericardiocentesis under subxiphoid ultrasound guidance",
        "While pericardial tamponade presents with JVD and hypotension, it features muffled heart sounds and clear lungs, whereas this patient has unilateral absent breath sounds, hyperresonance, and tracheal deviation diagnostic of tension pneumothorax."
      ]
    ],
    "shortestValidSolution": "Hypotension + absent breath sounds + hyperresonance + tracheal deviation to opposite side -> clinical tension pneumothorax -> immediate needle decompression without waiting for X-ray.",
    "necessaryInference": "Recognize tension pneumothorax as a purely clinical emergency requiring immediate decompression prior to imaging or positive-pressure intubation.",
    "strongestDistractor": "Obtain a portable upright chest radiograph to confirm the location of the pleural line",
    "distractorExclusion": "Imaging delays life-saving decompression in an unstable, hypotensive patient and is a classic board exam trap.",
    "citation": "American College of Surgeons. Advanced Trauma Life Support (ATLS) Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. NLM ID: 101736637",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize tension pneumothorax as a purely clinical emergency requiring immediate decompression prior to imaging or positive-pressure intubation.",
      "distractorExclusionNotes": "Strongest distractor 'Obtain a portable upright chest radiograph to confirm the location of the pleura' excluded: Imaging delays life-saving decompression in an unstable, hypotensive patient and is a classic board exam trap.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0307",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Tricyclic Antidepressant Overdose",
    "subtopic": "Sodium Bicarbonate for QRS Widening and Fast Sodium Channel Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman with a history of major depressive disorder is found unresponsive in her bedroom by family members, surrounded by empty medication containers of amitriptyline. On arrival of emergency medical services, she has a generalized tonic-clonic seizure that terminates after intravenous lorazepam. In the emergency department, she is somnolent with a Glasgow Coma Scale score of 7. Vital signs are: blood pressure 82/46 mm Hg, heart rate 128/min, respiratory rate 10/min, and temperature 38.3\u00b0C (100.9\u00b0F). Physical examination reveals warm, flushed skin, dry oral mucous membranes, and bilateral dilated pupils measuring 7 mm with sluggish light reactivity. An ECG demonstrates sinus tachycardia with a QRS duration of 148 ms and a prominent terminal R wave in lead aVR (> 3 mm). Which of the following is the most appropriate immediate pharmacotherapy to address this patient's cardiovascular findings?",
    "choices": [
      [
        "Intravenous sodium bicarbonate bolus and infusion",
        "Tricyclic antidepressants (TCAs) inhibit myocardial fast sodium channels (phase 0 depolarization), prolonging the QRS complex and predisposing to fatal ventricular arrhythmias (ventricular tachycardia and fibrillation) and refractory hypotension. A QRS duration > 100 ms is an indication for intravenous sodium bicarbonate therapy. Sodium bicarbonate acts by: (1) increasing extracellular sodium concentration, which competitively overcomes sodium channel blockade, and (2) inducing serum alkalization (target pH 7.50\u20137.55), which shifts the lipophilic TCA drug molecules into an uncharged, non-binding state, dislodging them from the sodium channel receptor."
      ],
      [
        "Intravenous physostigmine salicylate infusion to reverse anticholinergic delirium",
        "Physostigmine is a tertiary acetylcholinesterase inhibitor used in pure anticholinergic toxicity. In TCA overdose, physostigmine is strictly contraindicated because it precipitates complete heart block, asystole, and refractory seizures."
      ],
      [
        "Intravenous amiodarone infusion for ventricular antiarrhythmic prophylaxis",
        "Class Ia and III antiarrhythmics (including amiodarone, procainamide, and quinidine) prolong the cardiac action potential and QT interval, further worsening cardiac conduction delay and triggering polymorphic ventricular tachycardia in TCA toxicity."
      ],
      [
        "Intravenous flumazenil bolus to reverse central benzodiazepine receptor sedation",
        "Flumazenil is contraindicated in patients with suspected mixed tricyclic antidepressant ingestion because it blocks endogenous GABAergic inhibition, triggering uncontrollable seizures and cardiotoxicity."
      ],
      [
        "Intravenous magnesium sulfate bolus for stabilization of the cardiac membrane",
        "Magnesium sulfate is the treatment of choice for torsades de pointes (polymorphic VT with prolonged QT). For TCA-induced QRS prolongation and monomorphic ventricular tachycardia, hypertonic sodium bicarbonate is the specific antidote."
      ]
    ],
    "shortestValidSolution": "Amitriptyline overdose + anticholinergic signs + QRS 148 ms with tall R wave in aVR -> IV sodium bicarbonate to overcome fast sodium channel blockade.",
    "necessaryInference": "Identify TCA cardiac toxicity by QRS prolongation > 100 ms and terminal R wave in aVR; select IV sodium bicarbonate for sodium loading and serum alkalization, while avoiding contraindicated physostigmine or amiodarone.",
    "strongestDistractor": "Intravenous physostigmine salicylate infusion to reverse anticholinergic delirium",
    "distractorExclusion": "Physostigmine is contraindicated in TCA toxicity because it worsens cardiac conduction defects, triggering fatal asystole and seizures.",
    "citation": "Body R, et al. Guidelines in Emergency Medicine Network (GEMNet): Guideline for the Management of Tricyclic Antidepressant Overdose. Emerg Med J. 2011;28(4):347-368. PMID: 21415174.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify TCA cardiac toxicity by QRS prolongation > 100 ms and terminal R wave in aVR; select IV sodium bicarbonate for sodium loading and serum alkalization, while avoiding contraindicated physostigmine or amiodarone.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous physostigmine salicylate infusion to reverse anticholinergic deliriu' excluded: Physostigmine is contraindicated in TCA toxicity because it worsens cardiac conduction defects, triggering fatal asystole and seizures.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0308",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Anaphylaxis Management",
    "subtopic": "Intramuscular Epinephrine in Anterolateral Thigh vs Antihistamines",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old boy is brought to the emergency department by his mother 20 minutes after eating a pastry containing almond flour at a bakery. He complains of throat tightness, difficulty swallowing, and a spreading pruritic rash. Physical examination reveals generalized urticaria with extensive erythematous wheals across his chest and extremities, facial and periorbital edema, and inspiratory stridor audible over the anterior neck. Vital signs are: blood pressure 86/52 mm Hg, heart rate 124/min, respiratory rate 26/min, and oxygen saturation 93% on room air. The triage nurse asks which medication should be administered first. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Intramuscular epinephrine (1:1,000) administered into the anterolateral mid-thigh",
        "The patient is experiencing severe anaphylaxis with airway compromise (inspiratory stridor) and cardiovascular collapse (hypotension). Intramuscular epinephrine (1 mg/mL, 1:1,000 concentration, 0.01 mg/kg, maximum 0.3\u20130.5 mg in adults/adolescents) administered into the anterolateral thigh (vastus lateralis) is the undisputed first-line treatment for anaphylaxis. Epinephrine stimulates alpha-1 receptors (causing vasoconstriction to treat hypotension and reduce laryngeal mucosal edema), beta-1 receptors (increasing heart rate and cardiac contractility), and beta-2 receptors (inducing bronchodilation and inhibiting mast cell and basophil degranulation). Delivery into the anterolateral thigh achieves faster and higher peak plasma concentrations than subcutaneous injection or deltoid administration."
      ],
      [
        "Intravenous diphenhydramine 50 mg and ranitidine 50 mg administered over 10 minutes",
        "Antihistamines (H1 and H2 blockers) are secondary, adjunctive treatments that treat cutaneous symptoms (itching, hives) but do not relieve laryngeal edema, reverse bronchospasm, or treat hypotension, and should never delay epinephrine."
      ],
      [
        "Intravenous methylprednisolone 125 mg to suppress late-phase inflammatory mediator release",
        "Systemic corticosteroids have an onset of action of 4 to 6 hours; they have no immediate effect on acute airway obstruction or shock and must never precede epinephrine."
      ],
      [
        "Inhaled albuterol nebulization 2.5 mg every 20 minutes for relief of upper airway obstruction",
        "Inhaled albuterol treats lower airway bronchospasm (wheezing) but is ineffective for upper airway laryngeal edema (stridor) and does not treat systemic hypotension."
      ],
      [
        "Subcutaneous epinephrine (1:1,000) injected into the upper deltoid region",
        "Subcutaneous injection and deltoid site administration result in significantly delayed absorption and lower peak plasma epinephrine concentrations compared to intramuscular injection into the vastus lateralis."
      ]
    ],
    "shortestValidSolution": "Nut ingestion + urticaria + inspiratory stridor + hypotension -> anaphylaxis -> immediate IM epinephrine (1:1,000) in anterolateral thigh.",
    "necessaryInference": "Prioritize intramuscular epinephrine into the anterolateral thigh over antihistamines, steroids, or inhalers as the sole life-saving initial intervention in anaphylaxis.",
    "strongestDistractor": "Intravenous diphenhydramine 50 mg and ranitidine 50 mg administered over 10 minutes",
    "distractorExclusion": "Antihistamines are slow-acting adjunctive agents that only alleviate cutaneous hives and pruritus; they do not reverse life-threatening airway edema or shock.",
    "citation": "Shaker MS, et al. Anaphylaxis\u2014A 2020 Practice Parameter Update, Systematic Review, and Grading of Recommendations, Assessment, Development and Evaluation (GRADE) Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123. PMID: 32001153.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Prioritize intramuscular epinephrine into the anterolateral thigh over antihistamines, steroids, or inhalers as the sole life-saving initial intervention in anaphylaxis.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous diphenhydramine 50 mg and ranitidine 50 mg administered over 10 minu' excluded: Antihistamines are slow-acting adjunctive agents that only alleviate cutaneous hives and pruritus; they do not reverse life-threatening airway edema or shock.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0309",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Carbon Monoxide Poisoning",
    "subtopic": "Normal Pulse Oximetry, Elevated Carboxyhemoglobin, and Hyperbaric Oxygen Indications",
    "provisionalDifficulty": 4,
    "stem": "A 45-year-old man is brought to the emergency department after being rescued from a house fire. He was found unconscious in a smoke-filled bedroom. On arrival, he is somnolent and confused, complaining of a throbbing headache, dizziness, and severe nausea. Vital signs are: blood pressure 138/84 mm Hg, heart rate 110/min, respiratory rate 20/min, and pulse oximetry saturation (SpO2) 99% on room air. Neurological examination reveals disorientation to time and place, but no focal deficits. Arterial blood gas analysis on 100% nonrebreather mask demonstrates: pH 7.31, PaCO2 36 mm Hg, PaO2 105 mm Hg, and an arterial blood carboxyhemoglobin level of 34% (normal: < 3% in non-smokers). Serum lactate is 4.8 mmol/L. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Maintain 100% high-flow normobaric oxygen and arrange immediate hyperbaric oxygen therapy",
        "The patient has severe carbon monoxide (CO) poisoning manifested by neurological dysfunction (somnolence, confusion, transient loss of consciousness) and an elevated carboxyhemoglobin level of 34%. Standard pulse oximetry cannot distinguish between oxyhemoglobin and carboxyhemoglobin (both absorb light at 660 nm), falsely reporting a normal SpO2 of 99%. Hyperbaric oxygen (HBO) therapy drastically shortens the half-life of carboxyhemoglobin (from ~300 minutes on room air and ~90 minutes on 100% normobaric O2 down to ~20\u201330 minutes at 2.5\u20133.0 atmospheres) and reduces long-term cognitive and neurological sequelae. Indications for HBO include: carboxyhemoglobin > 25% (> 15% in pregnancy), loss of consciousness, severe metabolic acidosis (pH < 7.25), end-organ ischemia (chest pain/ECG changes), or persistent neurological deficits."
      ],
      [
        "Discontinue oxygen therapy because the pulse oximetry confirms adequate tissue oxygen saturation",
        "Pulse oximeters cannot differentiate carboxyhemoglobin from oxyhemoglobin, falsely reading 99% even in fatal CO toxicity; discontinuing oxygen exacerbates severe tissue hypoxia."
      ],
      [
        "Administer intravenous hydroxocobalamin monotherapy and discharge once lactate clears",
        "Hydroxocobalamin is the antidote for cyanide poisoning, which often co-occurs in smoke inhalation; however, this patient has proven severe CO poisoning (COHb 34%) with neurological impairment, requiring HBO therapy regardless of cyanide management."
      ],
      [
        "Administer intravenous methylene blue for drug-induced functional dyshemoglobinemia",
        "Methylene blue is the specific treatment for methemoglobinemia (converts Fe3+ to Fe2+), not carbon monoxide poisoning; methylene blue in CO poisoning can induce hemolytic anemia and is contraindicated."
      ],
      [
        "Perform emergent fiberoptic bronchoscopy to confirm inhalational thermal airway injury",
        "While airway assessment is important in smoke inhalation, bronchoscopy does not treat systemic cellular hypoxia from carbon monoxide poisoning and should not delay HBO therapy."
      ]
    ],
    "shortestValidSolution": "Smoke inhalation + pulse oximetry falsely 99% + confusion + carboxyhemoglobin 34% -> severe CO poisoning -> 100% normobaric O2 and immediate hyperbaric oxygen.",
    "necessaryInference": "Recognize that standard pulse oximeters falsely overestimate saturation in CO toxicity, and identify the criteria for hyperbaric oxygen therapy (COHb > 25%, loss of consciousness, neurological deficits).",
    "strongestDistractor": "Discontinue oxygen therapy because the pulse oximetry confirms adequate tissue oxygen saturation",
    "distractorExclusion": "Standard pulse oximetry measures both carboxyhemoglobin and oxyhemoglobin as 99% saturation; stopping oxygen based on SpO2 would cause catastrophic hypoxia.",
    "citation": "Weaver LK. Carbon Monoxide Poisoning. N Engl J Med. 2009;360(12):1217-1225. PMID: 19297574.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that standard pulse oximeters falsely overestimate saturation in CO toxicity, and identify the criteria for hyperbaric oxygen therapy (COHb > 25%, loss of consciousness, neurological deficits).",
      "distractorExclusionNotes": "Strongest distractor 'Discontinue oxygen therapy because the pulse oximetry confirms adequate tissue o' excluded: Standard pulse oximetry measures both carboxyhemoglobin and oxyhemoglobin as 99% saturation; stopping oxygen based on SpO2 would cause catastrophic hypoxia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0310",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Cardiac Tamponade",
    "subtopic": "Beck Triad, Pulsus Paradoxus, and Emergency Pericardiocentesis",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with metastatic breast cancer presents to the emergency department with progressive shortness of breath, profound fatigue, and lightheadedness over the past 3 days. On physical examination, she appears distressed and sits upright, leaning forward. Vital signs are: blood pressure 88/60 mm Hg, heart rate 118/min, respiratory rate 24/min, and temperature 37.0\u00b0C (98.6\u00b0F). Jugular venous distention is prominent up to the angle of the jaw with an absent y descent. Heart sounds are distant and muffled on auscultation, and the lungs are clear to auscultation bilaterally. On blood pressure cuff deflation, the first Korotkoff sounds are heard intermittently during expiration at 96 mm Hg, and become audible continuously throughout both inspiration and expiration at 80 mm Hg. Point-of-care echocardiography reveals a large circumferential pericardial effusion with diastolic collapse of the right ventricle. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform emergency echocardiography-guided pericardiocentesis",
        "The patient presents with cardiac tamponade secondary to malignant pericardial effusion. She exhibits Beck triad (hypotension, jugular venous distention, muffled heart sounds) and pulsus paradoxus (> 10 mm Hg drop in systolic blood pressure during inspiration; here, 96 - 80 = 16 mm Hg). Diastolic collapse of the right ventricle on echocardiography confirms elevated intrapericardial pressure exceeding intracardiac chamber pressure, severely impeding venous return and stroke volume. Emergency pericardiocentesis under echocardiographic guidance relieves intrapericardial pressure, restores ventricular filling, and rapidly reverses cardiogenic shock."
      ],
      [
        "Administer intravenous furosemide 40 mg to reduce elevated central venous pressure",
        "Diuretics reduce intravascular volume and intracardiac filling pressures. In cardiac tamponade, cardiac output depends on high filling pressures to overcome external pericardial compression; diuresis eliminates preload, precipitating sudden cardiovascular collapse."
      ],
      [
        "Initiate immediate positive-pressure noninvasive ventilation with BiPAP",
        "Positive pressure ventilation increases intrathoracic pressure, further decreasing venous return to the right heart and worsening hemodynamic collapse in cardiac tamponade."
      ],
      [
        "Administer intravenous beta-blocker to control sinus tachycardia and reduce myocardial oxygen demand",
        "Sinus tachycardia is a vital compensatory mechanism to preserve cardiac output (CO = HR x SV) in the setting of a fixed, severely reduced stroke volume. Suppressing the heart rate precipitates fatal circulatory failure."
      ],
      [
        "Schedule elective subxiphoid pericardial window placement within the next 48 hours",
        "Delaying intervention for elective surgery in a hypotensive patient with diastolic right ventricular collapse is dangerous; immediate bedside decompression is required to prevent arrest."
      ]
    ],
    "shortestValidSolution": "Metastatic breast cancer + Beck triad (JVD, hypotension, muffled sounds) + pulsus paradoxus 16 mm Hg + RV diastolic collapse -> cardiac tamponade -> emergency pericardiocentesis.",
    "necessaryInference": "Calculate pulsus paradoxus (16 mm Hg drop during inspiration) and recognize that hemodynamic compromise with RV diastolic collapse mandates immediate pericardiocentesis rather than diuresis or elective surgery.",
    "strongestDistractor": "Administer intravenous furosemide 40 mg to reduce elevated central venous pressure",
    "distractorExclusion": "Diuretics deplete the high ventricular filling pressures required to maintain cardiac output against the pericardial effusion, causing immediate circulatory collapse.",
    "citation": "Adler Y, et al. 2015 ESC Guidelines for the Diagnosis and Management of Pericardial Diseases. Eur Heart J. 2015;36(42):2921-2964. PMID: 26320112.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Calculate pulsus paradoxus (16 mm Hg drop during inspiration) and recognize that hemodynamic compromise with RV diastolic collapse mandates immediate pericardiocentesis rather than diuresis or elective surgery.",
      "distractorExclusionNotes": "Strongest distractor 'Administer intravenous furosemide 40 mg to reduce elevated central venous pressu' excluded: Diuretics deplete the high ventricular filling pressures required to maintain cardiac output against the pericardial effusion, causing immediate circulatory collapse.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0311",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Opioid Overdose vs Sedative-Hypnotic Withdrawal",
    "subtopic": "Titrated Naloxone vs Rapid Reversal Precipitating Acute Withdrawal",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man is brought to the emergency department after being found unresponsive in a public restroom. Empty syringes and a spoon with residue were discovered next to him. On arrival, he is comatose and does not respond to sternal rub. Vital signs are: blood pressure 94/56 mm Hg, heart rate 52/min, respiratory rate 5/min, and oxygen saturation 82% on ambient air. Physical examination reveals pinpoint pupils (1 mm) that react sluggishly to light, shallow chest excursions, and cool skin with track marks over both antecubital fossae. Bag-valve-mask ventilation with 100% supplemental oxygen is immediately initiated, improving oxygen saturation to 96%. Which of the following is the most appropriate next step in the pharmacologic management of this patient?",
    "choices": [
      [
        "Administer low-dose intravenous naloxone (0.04 to 0.1 mg) titrated to adequate spontaneous ventilation",
        "The patient has acute opioid overdose, characterized by the classic triad of central nervous system depression, miosis (pinpoint pupils), and respiratory depression. While naloxone is the specific opioid receptor antagonist, the goal of naloxone therapy in opioid-dependent individuals is restoration of adequate spontaneous ventilation (respiratory rate \u2265 10\u201312/min and normal tidal volume), not full arousal or consciousness. Administering low, titrated doses of intravenous naloxone (0.04 to 0.1 mg every 2\u20133 minutes) restores ventilation while preventing severe precipitated opioid withdrawal (agitation, violent vomiting, aspiration, and sympathetic surge)."
      ],
      [
        "Administer a rapid intravenous bolus of naloxone 4 mg to achieve immediate full arousal",
        "High-dose bolus naloxone precipitates acute, severe opioid withdrawal syndrome, causing tachycardia, hypertension, violent agitation, vomiting with high risk of pulmonary aspiration, and acute pulmonary edema."
      ],
      [
        "Perform immediate endotracheal intubation without administering opioid antagonists",
        "Intubation is invasive and carries complications. In opioid overdose, bag-valve-mask ventilation followed by titrated naloxone reliably restores spontaneous ventilation, avoiding the need for mechanical ventilation in the vast majority of cases."
      ],
      [
        "Administer intravenous flumazenil 0.2 mg to treat suspected co-ingestion of benzodiazepines",
        "Flumazenil carries a significant risk of inducing refractory seizures and status epilepticus in benzodiazepine-tolerant patients or mixed overdoses, and is contraindicated in undifferentiated coma."
      ],
      [
        "Administer intravenous clonidine to suppress sympathetic hyperactivity and autonomic discharge",
        "Clonidine treats autonomic symptoms of opioid withdrawal; administering it to a patient in acute opioid-induced coma and bradycardia would worsen hypotension and central depression."
      ]
    ],
    "shortestValidSolution": "Coma + pinpoint pupils + respiratory rate 5/min + track marks -> opioid overdose -> titrated low-dose IV naloxone (0.04-0.1 mg) targeting adequate ventilation without severe withdrawal.",
    "necessaryInference": "Recognize that the therapeutic endpoint of naloxone is restoration of adequate ventilation (not full alert consciousness) and that low titrated dosing avoids dangerous precipitated withdrawal.",
    "strongestDistractor": "Administer a rapid intravenous bolus of naloxone 4 mg to achieve immediate full arousal",
    "distractorExclusion": "High-dose bolus naloxone causes violent precipitated withdrawal with severe emesis and aspiration risk; titrated dosing is standard of care.",
    "citation": "Boyer EW. Management of Opioid Analgesic Overdose. N Engl J Med. 2012;367(2):146-155. PMID: 22784117.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that the therapeutic endpoint of naloxone is restoration of adequate ventilation (not full alert consciousness) and that low titrated dosing avoids dangerous precipitated withdrawal.",
      "distractorExclusionNotes": "Strongest distractor 'Administer a rapid intravenous bolus of naloxone 4 mg to achieve immediate full ' excluded: High-dose bolus naloxone causes violent precipitated withdrawal with severe emesis and aspiration risk; titrated dosing is standard of care.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0312",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Unstable Tachyarrhythmia",
    "subtopic": "Synchronized Cardioversion vs Defibrillation and Antiarrhythmics",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a history of ischemic cardiomyopathy (left ventricular ejection fraction 30%) presents to the emergency department with sudden severe palpitations, chest tightness, and lightheadedness that began 30 minutes ago. On arrival, he is pale and diaphoretic. Vital signs are: blood pressure 78/48 mm Hg, heart rate 175/min and regular, respiratory rate 24/min, and oxygen saturation 94% on ambient air. Cardiac monitor shows a monomorphic wide-complex tachycardia with a QRS duration of 160 ms. He remains conscious but speaks in short, fragmented phrases and appears close to syncope. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform immediate synchronized electrical cardioversion",
        "The patient has monomorphic wide-complex tachycardia (presumed ventricular tachycardia in a patient with structural heart disease) with hemodynamic instability (hypotension, chest tightness, altered mental status/near-syncope). According to ACLS guidelines, any tachyarrhythmia with pulse causing hemodynamic instability requires immediate synchronized electrical cardioversion. Synchronization delivers the electrical shock timed to the R wave of the QRS complex, preventing shock delivery during the vulnerable relative refractory period (T wave) which would precipitate ventricular fibrillation."
      ],
      [
        "Administer an immediate unsynchronized high-energy electrical shock (defibrillation)",
        "Defibrillation (unsynchronized shock) is reserved for pulseless cardiac arrest (ventricular fibrillation or pulseless VT). Delivering an unsynchronized shock to a patient with a perfusing rhythm can trigger R-on-T phenomenon, converting ventricular tachycardia into fatal ventricular fibrillation."
      ],
      [
        "Administer intravenous amiodarone 150 mg infused over 10 minutes",
        "Pharmacologic therapy with amiodarone is indicated only for hemodynamically STABLE wide-complex tachycardia; in an unstable, hypotensive patient, antiarrhythmic infusions delay life-saving electrical therapy and exacerbate hypotension."
      ],
      [
        "Administer rapid intravenous adenosine 6 mg followed by a 20 mL saline flush",
        "Adenosine is used for regular, narrow-complex supraventricular tachycardia (or stable undifferentiated monomorphic wide-complex tachycardia). In an unstable, hypotensive patient, chemical conversion delays definitive therapy."
      ],
      [
        "Perform bilateral carotid sinus massage to increase vagal parasympathetic tone",
        "Vagal maneuvers are used for stable paroxysmal supraventricular tachycardia. They are ineffective for ventricular tachycardia and contraindicated in unstable patients with shock."
      ]
    ],
    "shortestValidSolution": "Monomorphic wide-complex tachycardia + hypotension (BP 78/48) + chest pain -> unstable VT with pulse -> immediate synchronized electrical cardioversion.",
    "necessaryInference": "Differentiate stable from unstable tachyarrhythmias, and synchronized cardioversion (for unstable rhythms with a pulse) from defibrillation (for pulseless arrest).",
    "strongestDistractor": "Administer an immediate unsynchronized high-energy electrical shock (defibrillation)",
    "distractorExclusion": "Unsynchronized shocks (defibrillation) are for pulseless cardiac arrest; delivering an unsynchronized shock to a patient with a pulse risks R-on-T induced ventricular fibrillation.",
    "citation": "Panchal AR, et al. 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care: Adult Basic and Advanced Life Support. Circulation. 2020;142(16_suppl_2):S366-S468. PMID: 33081529.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate stable from unstable tachyarrhythmias, and synchronized cardioversion (for unstable rhythms with a pulse) from defibrillation (for pulseless arrest).",
      "distractorExclusionNotes": "Strongest distractor 'Administer an immediate unsynchronized high-energy electrical shock (defibrillat' excluded: Unsynchronized shocks (defibrillation) are for pulseless cardiac arrest; delivering an unsynchronized shock to a patient with a pulse risks R-on-T induced ventricular fibrillation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0313",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Septic Shock Vasopressor Selection",
    "subtopic": "Norepinephrine First-Line vs Dopamine Tachyarrhythmias",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old woman is admitted to the intensive care unit with severe urosepsis caused by multidrug-resistant Escherichia coli. Despite the administration of 30 mL/kg of intravenous balanced crystalloids over 2 hours and broad-spectrum antibiotics, she remains hypotensive. Current vital signs are: blood pressure 82/46 mm Hg (mean arterial pressure 58 mm Hg), heart rate 116/min and regular, respiratory rate 22/min, and temperature 38.6\u00b0C (101.5\u00b0F). Her extremities are warm with bounding peripheral pulses and brisk capillary refill. Serum lactate is 4.2 mmol/L. The central venous pressure is 10 mm Hg. Which of the following is the most appropriate next step in the hemodynamic management of this patient?",
    "choices": [
      [
        "Initiate intravenous norepinephrine infusion titrated to a mean arterial pressure >= 65 mm Hg",
        "The patient has septic shock refractory to initial fluid resuscitation (persistent hypotension with MAP < 65 mm Hg and hyperlactatemia despite 30 mL/kg fluid loading). According to the Surviving Sepsis Campaign guidelines, norepinephrine is the undisputed first-line vasopressor of choice. Norepinephrine possesses potent alpha-1 adrenergic agonism (causing systemic vasoconstriction to elevate vascular tone and MAP) with modest beta-1 adrenergic activity (supporting heart rate and stroke volume). Compared to dopamine, norepinephrine demonstrates superior efficacy in reversing shock, significantly lower rates of tachyarrhythmias, and reduced all-cause mortality."
      ],
      [
        "Initiate intravenous dopamine infusion titrated to renal dose to improve glomerular filtration",
        "Dopamine was historically used in shock, but large randomized trials (SOAP II) demonstrated that dopamine causes significantly more arrhythmias (atrial fibrillation, ventricular tachycardia) and higher mortality compared to norepinephrine. 'Renal-dose' dopamine has been thoroughly debunked and is ineffective."
      ],
      [
        "Administer an additional 3 liters of normal saline boluses to achieve a central venous pressure > 15 mm Hg",
        "Excessive fluid administration after initial 30 mL/kg loading causes fluid overload, pulmonary edema, prolonged mechanical ventilation, and increased mortality without improving perfusion."
      ],
      [
        "Initiate intravenous epinephrine monotherapy as the primary inotrope and vasopressor",
        "Epinephrine is a secondary, second-line vasopressor reserved for shock refractory to norepinephrine; as a first-line agent, it causes excessive tachycardia, peripheral vasoconstriction, and transient hyperlactatemia via aerobic beta-2 stimulation."
      ],
      [
        "Initiate intravenous phenylephrine infusion to achieve pure vascular afterload increase",
        "Phenylephrine is a pure alpha-1 agonist with no beta-1 inotropic activity. It causes reflex bradycardia and can decrease stroke volume and cardiac output; it is reserved for patients with severe tachycardia or arrhythmias where norepinephrine is contraindicated."
      ]
    ],
    "shortestValidSolution": "Septic shock with persistent hypotension after 30 mL/kg crystalloids -> first-line vasopressor is norepinephrine (target MAP >= 65 mm Hg).",
    "necessaryInference": "Select norepinephrine over dopamine, phenylephrine, or epinephrine as the evidence-backed first-line vasopressor for fluid-refractory septic shock based on lower arrhythmia rates and mortality.",
    "strongestDistractor": "Initiate intravenous dopamine infusion titrated to renal dose to improve glomerular filtration",
    "distractorExclusion": "Dopamine increases arrhythmic events and mortality compared to norepinephrine, and renal-dose dopamine has no proven clinical benefit.",
    "citation": "Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143. PMID: 34605781.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select norepinephrine over dopamine, phenylephrine, or epinephrine as the evidence-backed first-line vasopressor for fluid-refractory septic shock based on lower arrhythmia rates and mortality.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate intravenous dopamine infusion titrated to renal dose to improve glomeru' excluded: Dopamine increases arrhythmic events and mortality compared to norepinephrine, and renal-dose dopamine has no proven clinical benefit.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0314",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertensive Emergency with Acute Pulmonary Edema",
    "subtopic": "Intravenous Vasodilators vs Harm of Pure Beta-Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the emergency department with acute severe shortness of breath that awoke him from sleep 1 hour ago. He has a history of long-standing hypertension but stopped taking his medications 3 weeks ago due to financial difficulties. On arrival, he is in marked respiratory distress, sitting bolt upright, and coughing up pink, frothy sputum. Vital signs are: blood pressure 224/128 mm Hg, heart rate 118/min, respiratory rate 32/min, and oxygen saturation 84% on ambient air. Physical examination reveals diffuse bilateral crackles extending to the apices, an S3 gallop, and distended neck veins. Arterial blood gas demonstrates acute hypoxemic respiratory failure. Portable chest radiograph confirms severe pulmonary edema with cephalization of pulmonary vasculature and bat-wing alveolar opacities. Which of the following is the most appropriate immediate medical management?",
    "choices": [
      [
        "Initiate noninvasive positive-pressure ventilation, sublingual or intravenous nitroglycerin, and intravenous furosemide",
        "The patient is experiencing a hypertensive emergency manifested by acute cardiogenic pulmonary edema (flash pulmonary edema). The immediate treatment goal is rapid reduction of left ventricular afterload and preload to alleviate pulmonary capillary wedge pressure. Noninvasive positive-pressure ventilation (CPAP or BiPAP) immediately improves oxygenation, recruits fluid-filled alveoli, and reduces both preload and afterload. Intravenous nitroglycerin provides potent venodilation (reducing preload) and at higher doses arteriolar dilation (reducing afterload), while intravenous loop diuretics (furosemide) provide early venodilation and subsequent diuresis. This triad rapidly relieves pulmonary congestion and stabilizes hemodynamics."
      ],
      [
        "Administer intravenous labetalol 20 mg bolus every 10 minutes to rapidly lower blood pressure",
        "Beta-blockers (such as labetalol or metoprolol) are strictly contraindicated in acute decompensated heart failure with pulmonary edema; suppressing myocardial contractility worsens forward cardiac output and precipitates cardiogenic shock."
      ],
      [
        "Administer intravenous hydralazine 20 mg bolus to achieve rapid arteriolar vasodilatation",
        "Hydralazine has an unpredictable onset and duration of action and induces significant reflex tachycardia, increasing myocardial oxygen demand; it is not recommended for acute pulmonary edema."
      ],
      [
        "Initiate intravenous nitroprusside infusion combined with oral carvedilol therapy",
        "While nitroprusside is a potent vasodilator, adding oral carvedilol (a beta-blocker) acutely suppresses left ventricular function and exacerbates acute pulmonary edema."
      ],
      [
        "Perform emergency transesophageal echocardiography prior to initiating pharmacotherapy",
        "Diagnostic echocardiography is helpful once stabilized, but delaying afterload reduction and respiratory support in a drowning, hypoxemic patient with acute pulmonary edema is life-threatening."
      ]
    ],
    "shortestValidSolution": "Hypertensive emergency (BP 224/128) + flash pulmonary edema -> NIPPV + IV nitroglycerin + IV furosemide (avoid beta-blockers).",
    "necessaryInference": "Differentiate management of hypertensive pulmonary edema (venodilators + afterload reducers + NIPPV) from other hypertensive emergencies (e.g., dissection where beta-blockers are mandatory), recognizing that beta-blockers acutely worsen pulmonary edema.",
    "strongestDistractor": "Administer intravenous labetalol 20 mg bolus every 10 minutes to rapidly lower blood pressure",
    "distractorExclusion": "Labetalol and other beta-blockers acutely reduce myocardial inotropy, worsening left ventricular decompensation and cardiogenic pulmonary edema.",
    "citation": "Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146535.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate management of hypertensive pulmonary edema (venodilators + afterload reducers + NIPPV) from other hypertensive emergencies (e.g., dissection where beta-blockers are mandatory), recognizing that beta-blockers acutely worsen pulmonary edema.",
      "distractorExclusionNotes": "Strongest distractor 'Administer intravenous labetalol 20 mg bolus every 10 minutes to rapidly lower b' excluded: Labetalol and other beta-blockers acutely reduce myocardial inotropy, worsening left ventricular decompensation and cardiogenic pulmonary edema.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0315",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Massive Pulmonary Embolism",
    "subtopic": "Systemic Thrombolysis for Hemodynamically Unstable PE",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old woman who underwent an elective total knee arthroplasty 8 days ago presents to the emergency department with acute-onset severe dyspnea, pleuritic chest pain, and lightheadedness. While being escorted to the triage room, she experiences a witnessed syncopal episode. On arrival in the resuscitation bay, she is pale, diaphoretic, and confused. Vital signs are: blood pressure 76/44 mm Hg, heart rate 132/min, respiratory rate 30/min, and oxygen saturation 86% on a high-flow nonrebreather mask. Physical examination reveals cold, clammy extremities, prominent jugular venous distention, and an accentuated pulmonic component of the second heart sound (P2). Bedside echocardiography demonstrates acute right ventricular dilation with hypokinesia of the right ventricular free wall and sparing of the apex (McConnell sign), with paradoxical septal flattening into the left ventricle during diastole. She has no history of stroke, head trauma, or active bleeding. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Administer systemic intravenous thrombolysis with recombinant tissue plasminogen activator (alteplase)",
        "The patient has a massive (high-risk) pulmonary embolism defined by acute PE complicated by sustained hypotension (systolic BP < 90 mm Hg for > 15 minutes), cardiogenic shock, and echocardiographic signs of acute right ventricular strain. In hemodynamically unstable massive PE without absolute contraindications to anticoagulation/thrombolysis, immediate systemic intravenous thrombolytic therapy (e.g., alteplase 100 mg over 2 hours) is indicated to rapidly dissolve the obstructing thromboembolus, reduce right ventricular afterload, restore pulmonary perfusion, and prevent fatal circulatory arrest."
      ],
      [
        "Initiate therapeutic subcutaneous low-molecular-weight heparin and admit to telemetry",
        "LMWH or unfractionated heparin alone is standard therapy for hemodynamically STABLE (low-risk or intermediate-risk) PE, but does not provide immediate clot dissolution and has unacceptably high mortality when used as monotherapy in unstable massive PE."
      ],
      [
        "Perform urgent computed tomography pulmonary angiography to definitively quantify clot burden",
        "Transporting a severely hypotensive, unstable patient in shock to the radiology scanner is dangerous and contraindicated when bedside echocardiography and clinical presentation confirm massive PE."
      ],
      [
        "Administer a rapid 2-liter intravenous bolus of normal saline to correct hypotension",
        "Aggressive fluid boluses in acute right ventricular failure overstretch the RV free wall, worsen ischemia, and exacerbate leftward septal shift, further compromising left ventricular filling and worsening shock."
      ],
      [
        "Administer intravenous inferior vena cava filter placement as primary revascularization",
        "IVC filters prevent future lower extremity emboli from reaching the lungs, but do not dissolve the existing obstructing central thrombus causing cardiogenic shock."
      ]
    ],
    "shortestValidSolution": "Post-op dyspnea + syncope + persistent hypotension (BP 76/44) + RV strain/McConnell sign -> massive PE -> immediate systemic thrombolysis (alteplase).",
    "necessaryInference": "Classify pulmonary embolism as massive based on hemodynamic shock (SBP < 90 mm Hg), mandating systemic thrombolysis over standard anticoagulation or delayed CT scanning.",
    "strongestDistractor": "Initiate therapeutic subcutaneous low-molecular-weight heparin and admit to telemetry",
    "distractorExclusion": "Heparin monotherapy prevents new clot formation but does not rapidly lyse existing thrombi, leading to high mortality in hemodynamically unstable massive PE.",
    "citation": "Konstantinides SV, et al. 2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism. Eur Heart J. 2020;41(4):543-603. PMID: 31504429.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Classify pulmonary embolism as massive based on hemodynamic shock (SBP < 90 mm Hg), mandating systemic thrombolysis over standard anticoagulation or delayed CT scanning.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate therapeutic subcutaneous low-molecular-weight heparin and admit to tele' excluded: Heparin monotherapy prevents new clot formation but does not rapidly lyse existing thrombi, leading to high mortality in hemodynamically unstable massive PE.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0316",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Traumatic Brain Injury & Intracranial Pressure",
    "subtopic": "Osmotic Therapy (Hypertonic Saline/Mannitol) vs Steroid Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old male motorcyclist is brought to the emergency department following a high-speed collision. He was not wearing a helmet. On initial assessment, he does not open his eyes to voice or pain, produces incomprehensible sounds, and demonstrates decerebrate (extensor) posturing in response to noxious stimulation (Glasgow Coma Scale score: 4). He is immediately intubated for airway protection. Vital signs are: blood pressure 184/92 mm Hg, heart rate 50/min, and respiratory rate 12/min on mechanical ventilation. His right pupil is 6 mm and non-reactive to light, while the left pupil is 3 mm and briskly reactive. A non-contrast head CT reveals a large right-sided acute epidural hematoma with a 12-mm midline shift and compression of the ipsilateral lateral ventricle. While the neurosurgeon is in transit to the operating room for emergency craniotomy, which of the following is the most appropriate immediate medical intervention to reduce intracranial pressure?",
    "choices": [
      [
        "Intravenous administration of hypertonic (3%) saline or mannitol",
        "The patient exhibits severe traumatic brain injury with uncal transtentorial herniation (ipsilateral fixed dilated pupil from CN III compression, contralateral extensor posturing) and the Cushing triad (hypertension, bradycardia, irregular respirations) reflecting critically elevated intracranial pressure (ICP). While preparing for emergent operative craniotomy, immediate osmotic therapy with intravenous hypertonic saline (3% or 23.4%) or mannitol is the standard of care to draw water from the brain parenchyma into the intravascular space, rapidly lowering ICP and improving cerebral perfusion pressure."
      ],
      [
        "Intravenous administration of high-dose dexamethasone 20 mg bolus",
        "Corticosteroids are strictly contraindicated in traumatic brain injury. The landmark CRASH randomized controlled trial demonstrated that high-dose corticosteroids in acute TBI increase mortality and worsen neurological outcomes."
      ],
      [
        "Initiate aggressive prolonged hyperventilation targeting a PaCO2 of 20 to 25 mm Hg",
        "Severe hyperventilation induces intense cerebral vasoconstriction, causing profound cerebral ischemia and secondary brain infarction. If used at all, mild brief hyperventilation (PaCO2 30\u201335 mm Hg) is reserved strictly for acute herniation crisis for minutes, not prolonged severe hypocapnia."
      ],
      [
        "Administer intravenous labetalol to aggressively normalize blood pressure to 120/80 mm Hg",
        "Hypertension in Cushing triad is a vital physiological compensatory reflex to maintain cerebral perfusion pressure (CPP = MAP - ICP). Lowering blood pressure in acute severe ICP elevation precipitates fatal cerebral hypoperfusion."
      ],
      [
        "Place the patient in the Trendelenburg position to enhance cerebral venous filling pressure",
        "Trendelenburg position elevates cerebral venous pressure and increases ICP; patients with elevated ICP must be positioned with the head of the bed elevated 30 degrees to optimize jugular venous drainage."
      ]
    ],
    "shortestValidSolution": "Severe TBI + uncal herniation (blown pupil, extensor posturing) + Cushing triad -> osmotic therapy (hypertonic saline or mannitol) prior to emergent craniotomy.",
    "necessaryInference": "Select osmotic agents (hypertonic saline or mannitol) for acute herniation while recognizing that corticosteroids are proven to increase mortality in TBI (CRASH trial).",
    "strongestDistractor": "Intravenous administration of high-dose dexamethasone 20 mg bolus",
    "distractorExclusion": "Corticosteroids reduce vasogenic edema in brain tumors, but are contraindicated in acute traumatic brain injury because they increase mortality.",
    "citation": "Carney N, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15. PMID: 27654000.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select osmotic agents (hypertonic saline or mannitol) for acute herniation while recognizing that corticosteroids are proven to increase mortality in TBI (CRASH trial).",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous administration of high-dose dexamethasone 20 mg bolus' excluded: Corticosteroids reduce vasogenic edema in brain tumors, but are contraindicated in acute traumatic brain injury because they increase mortality.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0317",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Cyanide Poisoning in Smoke Inhalation",
    "subtopic": "Hydroxocobalamin Antidote vs Nitrite Dyshemoglobinemia Risk",
    "provisionalDifficulty": 4,
    "stem": "A 40-year-old firefighter is brought to the emergency department after becoming trapped in a burning industrial warehouse containing synthetic plastics and furniture. On extraction, he was found in respiratory arrest and received bag-valve-mask ventilation. In the emergency department, he is stuporous. Vital signs are: blood pressure 82/46 mm Hg, heart rate 130/min, and respiratory rate 28/min on a mechanical ventilator with 100% FiO2. Physical examination reveals extensive soot around the nares and mouth, but no external cutaneous burns. Arterial blood gas demonstrates severe metabolic acidosis: pH 7.12, PaCO2 28 mm Hg, PaO2 120 mm Hg, and serum bicarbonate 9 mEq/L. Serum lactate is 14.5 mmol/L. Co-oximetry reveals a carboxyhemoglobin level of 18%. Which of the following is the most appropriate immediate pharmacologic antidote for this patient?",
    "choices": [
      [
        "Intravenous hydroxocobalamin infusion",
        "The patient has acute cyanide toxicity secondary to smoke inhalation from synthetic materials (plastics, polyurethane, wool). Cyanide inhibits cytochrome c oxidase (complex IV) of the mitochondrial electron transport chain, arresting aerobic ATP production and causing severe lactic acidosis (lactate > 8\u201310 mmol/L in smoke inhalation is highly sensitive and specific for cyanide poisoning). Hydroxocobalamin is the preferred first-line antidote; it directly chelates cyanide to form non-toxic cyanocobalamin (vitamin B12), which is safely excreted in the urine. Unlike sodium nitrite, hydroxocobalamin does not induce methemoglobinemia, making it completely safe in victims with concurrent carbon monoxide poisoning (COHb 18%) who cannot tolerate reduced oxygen-carrying capacity."
      ],
      [
        "Intravenous sodium nitrite followed by sodium thiosulfate infusion",
        "Sodium nitrite induces methemoglobinemia (Fe2+ to Fe3+), which binds cyanide to form cyanmethemoglobin. However, in smoke inhalation with concurrent carbon monoxide poisoning, creating methemoglobinemia further drastically compromises blood oxygen-carrying capacity, precipitating lethal tissue hypoxia; nitrites are contraindicated in smoke inhalation."
      ],
      [
        "Intravenous deferoxamine infusion to chelate toxic heavy metal combustion products",
        "Deferoxamine chelates iron in acute iron poisoning; it has no affinity for cyanide and does not reverse mitochondrial cytochrome c oxidase inhibition."
      ],
      [
        "Intravenous calcium disodium EDTA infusion for acute inorganic chemical chelation",
        "Calcium disodium EDTA chelates lead and other heavy metals, having no therapeutic efficacy in cyanide toxicity."
      ],
      [
        "Intravenous pralidoxime bolus to reactivate phosphorylated acetylcholinesterase enzymes",
        "Pralidoxime (2-PAM) reactivates acetylcholinesterase in organophosphate nerve agent or pesticide poisoning, not cyanide poisoning."
      ]
    ],
    "shortestValidSolution": "Smoke inhalation (plastics) + profound lactic acidosis (lactate 14.5) + concurrent COHb -> cyanide poisoning -> IV hydroxocobalamin (avoids methemoglobinemia of nitrites).",
    "necessaryInference": "Recognize cyanide toxicity by smoke inhalation + massive lactic acidosis, and select hydroxocobalamin over sodium nitrite because concurrent carbon monoxide renders nitrite-induced methemoglobinemia potentially fatal.",
    "strongestDistractor": "Intravenous sodium nitrite followed by sodium thiosulfate infusion",
    "distractorExclusion": "Sodium nitrite induces methemoglobinemia; combining methemoglobinemia with existing carboxyhemoglobin causes catastrophic loss of oxygen carrying capacity and death.",
    "citation": "Hall AH, et al. Hydroxocobalamin for the Treatment of Cyanide Poisoning: A Systematic Review. Clin Toxicol (Phila). 2010;48(1):1-14. PMID: 20041749.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize cyanide toxicity by smoke inhalation + massive lactic acidosis, and select hydroxocobalamin over sodium nitrite because concurrent carbon monoxide renders nitrite-induced methemoglobinemia potentially fatal.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous sodium nitrite followed by sodium thiosulfate infusion' excluded: Sodium nitrite induces methemoglobinemia; combining methemoglobinemia with existing carboxyhemoglobin causes catastrophic loss of oxygen carrying capacity and death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0318",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Exertional Heat Stroke",
    "subtopic": "Ice-Water Immersion Cooling vs Antipyretics Ineffectiveness",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old military recruit collapses during basic training after completing a 10-mile march carrying a heavy pack on a humid summer day (ambient temperature 36\u00b0C [96.8\u00b0F], relative humidity 75%). On arrival at the medical tent, he is unresponsive to verbal stimuli, agitated, and combative to physical touch. Physical examination reveals flushed, hot, profusely diaphoretic skin and profound confusion. Vital signs are: core rectal temperature 41.2\u00b0C (106.2\u00b0F), blood pressure 92/54 mm Hg, heart rate 144/min, and respiratory rate 26/min. Point-of-care fingerstick blood glucose is 92 mg/dL. The attending physician prepares to initiate emergent whole-body cooling. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform immediate whole-body cold- or ice-water immersion",
        "The patient has exertional heat stroke, characterized by core hyperthermia (> 40\u00b0C [104\u00b0F]) accompanied by central nervous system dysfunction (encephalopathy, confusion, coma) occurring during strenuous physical activity in hot/humid conditions. (Note: sweat is frequently present in exertional heat stroke, contrary to classic non-exertional heat stroke). Exertional heat stroke carries high mortality from systemic inflammatory response, rhabdomyolysis, and multi-organ failure. The gold standard and single most effective intervention is rapid whole-body ice-water immersion (conductive cooling), which provides the fastest cooling rates (~0.15\u20130.35\u00b0C/min) and dramatically reduces morbidity and mortality when initiated within 30 minutes."
      ],
      [
        "Administer intravenous acetaminophen 1,000 mg to reset the hypothalamic thermal setpoint",
        "Antipyretics (acetaminophen, NSAIDs) act on prostaglandin synthesis to lower an elevated hypothalamic set-point in pyrogen-mediated fever; they are completely ineffective in heat stroke (where the hypothalamic setpoint is normal and thermoregulation has failed) and can worsen hepatic and renal injury."
      ],
      [
        "Administer intravenous dantrolene sodium to inhibit sarcoplasmic calcium release",
        "Dantrolene is the specific therapy for malignant hyperthermia (ryanodine receptor defect induced by volatile anesthetics or succinylcholine); randomized trials have demonstrated no benefit in environmental or exertional heat stroke."
      ],
      [
        "Apply evaporative mist cooling with fans while awaiting transfer to a tertiary hospital",
        "Evaporative cooling with mist and fans is the primary method for non-exertional (classic) heat stroke in elderly patients, but ice-water immersion has vastly superior cooling velocity and is mandatory for exertional heat stroke in young athletes/recruits."
      ],
      [
        "Administer high-dose intravenous dexamethasone to reduce systemic cerebral edema",
        "Corticosteroids have no proven efficacy in lowering core temperature or treating thermal injury in heat stroke and increase the risk of secondary infections and gastrointestinal ulceration."
      ]
    ],
    "shortestValidSolution": "Recruit marching in heat + core temp 41.2\u00b0C + delirium -> exertional heat stroke -> immediate whole-body ice-water immersion (antipyretics are ineffective).",
    "necessaryInference": "Recognize that heat stroke involves thermoregulatory failure rather than a reset hypothalamic set-point (rendering antipyretics useless), and that ice-water immersion is the first-line therapy for exertional heat stroke.",
    "strongestDistractor": "Administer intravenous acetaminophen 1,000 mg to reset the hypothalamic thermal setpoint",
    "distractorExclusion": "Acetaminophen acts on fever caused by pyrogens; heat stroke is failure of heat dissipation with a normal setpoint, so antipyretics do not work and cause hepatotoxicity.",
    "citation": "Lipman GS, et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update. Wilderness Environ Med. 2019;30(4S):S33-S46. PMID: 31668897.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that heat stroke involves thermoregulatory failure rather than a reset hypothalamic set-point (rendering antipyretics useless), and that ice-water immersion is the first-line therapy for exertional heat stroke.",
      "distractorExclusionNotes": "Strongest distractor 'Administer intravenous acetaminophen 1,000 mg to reset the hypothalamic thermal ' excluded: Acetaminophen acts on fever caused by pyrogens; heat stroke is failure of heat dissipation with a normal setpoint, so antipyretics do not work and cause hepatotoxicity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0319",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Severe Accidental Hypothermia",
    "subtopic": "Active Internal Rewarming and Prevention of Ventricular Fibrillation",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man who is experiencing homelessness is found unresponsive in an abandoned alley during a winter blizzard. On arrival in the emergency department, he is comatose with a Glasgow Coma Scale score of 3. Vital signs measured with a low-reading esophageal thermistor probe are: core body temperature 26.2\u00b0C (79.2\u00b0F), blood pressure 68/38 mm Hg, heart rate 28/min and irregular, and respiratory rate 4/min. Physical examination reveals cold, rigid extremities and fixed, dilated pupils. The cardiac monitor displays severe sinus bradycardia with prominent J waves (Osborn waves) at the junction of the QRS complex and ST segment. While moving the patient from the stretcher, a technician accidentally bumps the bed forcefully. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Gentle handling and initiation of active internal core rewarming with warmed intravenous fluids and humidified oxygen",
        "The patient has severe accidental hypothermia (core temperature < 28\u00b0C [82.4\u00b0F]) with Osborn (J) waves and profound cardiorespiratory depression. Hypothermic myocardium is extremely irritable and prone to fatal ventricular fibrillation (VF) triggered by minimal mechanical disturbance; therefore, meticulous and gentle handling is mandatory. Active internal core rewarming\u2014using warmed IV crystalloids (40\u201342\u00b0C), heated humidified oxygen, and in severe cases thoracic/peritoneal cavity lavage or extracorporeal membrane oxygenation (ECMO)\u2014is required to restore cardiac stability. Bradycardia and hypotension are physiologic responses to decreased metabolic rate; vasopressors and transcutaneous pacing are ineffective and can trigger refractory VF."
      ],
      [
        "Immediate transcutaneous cardiac pacing to correct life-threatening sinus bradycardia",
        "Cardiac pacing in severe hypothermia is ineffective on cold myocardium and carries a very high risk of precipitating intractable ventricular fibrillation."
      ],
      [
        "Intravenous administration of atropine 1 mg bolus to reverse parasympathetic hypertonia",
        "Hypothermic bradycardia is a physiological adaptation to reduced tissue oxygen consumption, not excessive vagal tone; atropine is ineffective and predisposes to arrhythmias as the patient warms."
      ],
      [
        "Rapid aggressive external rewarming with hot water bottles applied to the extremities",
        "Aggressive active external rewarming of extremities induces peripheral vasodilation, causing 'rewarming shock' (pooling of cold, acidotic blood in extremities that returns to the core, causing afterdrop and circulatory arrest)."
      ],
      [
        "Pronouncement of death due to fixed dilated pupils, profound coma, and hypothermia",
        "Patients with profound hypothermia can appear clinically dead (fixed pupils, absent pulses, rigid muscles) yet achieve complete neurological recovery after rewarming ('no one is dead until warm and dead')."
      ]
    ],
    "shortestValidSolution": "Core temp 26.2\u00b0C + Osborn (J) waves + bradycardia -> severe accidental hypothermia -> gentle handling (avoid VF) + active internal core rewarming.",
    "necessaryInference": "Recognize that hypothermic hearts are irritable (mechanical jarring precipitates VF), bradycardia is physiologic, and active core rewarming must precede peripheral warming or resuscitation decisions.",
    "strongestDistractor": "Immediate transcutaneous cardiac pacing to correct life-threatening sinus bradycardia",
    "distractorExclusion": "Pacing cold myocardium fails to capture and mechanically provokes refractory ventricular fibrillation; core rewarming restores heart rate naturally.",
    "citation": "Brown DJ, et al. Accidental Hypothermia. N Engl J Med. 2012;367(20):1930-1938. PMID: 23150960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that hypothermic hearts are irritable (mechanical jarring precipitates VF), bradycardia is physiologic, and active core rewarming must precede peripheral warming or resuscitation decisions.",
      "distractorExclusionNotes": "Strongest distractor 'Immediate transcutaneous cardiac pacing to correct life-threatening sinus bradyc' excluded: Pacing cold myocardium fails to capture and mechanically provokes refractory ventricular fibrillation; core rewarming restores heart rate naturally.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0320",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Angle-Closure Glaucoma",
    "subtopic": "Topical and Systemic Pressure-Lowering Therapy Followed by Iridotomy",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old Asian woman presents to the emergency department with sudden severe right eye pain, a frontal headache, nausea, and vomiting that began 2 hours ago while sitting in a dimly lit movie theater. She describes seeing rainbow-colored halos around streetlights on her drive home. Physical examination of the right eye reveals conjunctival injection with ciliary flush, a cloudy, steamy cornea, and a mid-dilated, fixed pupil that does not react to light. Visual acuity in the right eye is reduced to hand motion. Tonometry reveals an intraocular pressure of 58 mm Hg in the right eye and 16 mm Hg in the left eye. Which of the following is the most appropriate initial medical regimen while ophthalmology is consulted for definitive laser iridotomy?",
    "choices": [
      [
        "Topical timolol, apraclonidine, and pilocarpine eyedrops combined with systemic acetazolamide",
        "The patient has acute angle-closure glaucoma (AACG) triggered by pupillary dilation in dim light, causing pupillary block and acute obstruction of trabecular outflow in an anatomically narrow anterior chamber. Intraocular pressure (IOP) is severely elevated (> 50 mm Hg). Immediate medical therapy requires a multi-agent regimen to lower IOP: (1) topical beta-blockers (timolol) to decrease aqueous humor production, (2) topical alpha-2 agonists (apraclonidine) to reduce production and enhance uveoscleral outflow, (3) systemic carbonic anhydrase inhibitors (oral/IV acetazolamide) to suppress aqueous synthesis, and (4) topical muscarinic agonists (pilocarpine 1\u20132%) to induce miosis and pull the iris away from the trabecular meshwork (typically effective once IOP is < 40\u201350 mm Hg). Definitive cure is bilateral laser peripheral iridotomy."
      ],
      [
        "Topical atropine and cyclopentolate eyedrops to achieve maximal cycloplegia",
        "Mydriatics and cycloplegics (such as atropine, cyclopentolate, or scopolamine) dilate the pupil and bunch the iris into the iridocorneal angle, completely blocking aqueous outflow and causing permanent vision loss in angle-closure glaucoma."
      ],
      [
        "Topical high-dose prednisolone acetate eyedrops administered every 15 minutes",
        "Topical corticosteroids treat anterior uveitis (iritis), which presents with miosis and ciliary flush with normal or low IOP; in glaucoma, steroids do not relieve pupillary block and can raise IOP."
      ],
      [
        "Oral valacyclovir 1,000 mg three times daily for acute viral anterior keratitis",
        "Herpetic keratoconjunctivitis presents with dendritic corneal ulcers and foreign body sensation without acute mid-dilated pupil, steamy cornea, or massive IOP elevation to 58 mm Hg."
      ],
      [
        "Emergency bedside lateral canthotomy and inferior cantholysis of the right orbit",
        "Lateral canthotomy is the emergency treatment for orbital compartment syndrome (e.g., retrobulbar hematoma following facial trauma causing proptosis and elevated IOP), not acute pupillary block glaucoma."
      ]
    ],
    "shortestValidSolution": "Movie theater darkness + severe eye pain + rainbow halos + steamy cornea + fixed mid-dilated pupil (IOP 58 mm Hg) -> acute angle-closure glaucoma -> timolol, apraclonidine, pilocarpine, and acetazolamide.",
    "necessaryInference": "Recognize angle-closure glaucoma from the clinical triad and trigger (dim light pupillary dilation), and assemble the multi-target medical therapy to lower IOP before definitive laser peripheral iridotomy.",
    "strongestDistractor": "Topical atropine and cyclopentolate eyedrops to achieve maximal cycloplegia",
    "distractorExclusion": "Atropine causes pupillary dilation (mydriasis), which further closes the iridocorneal angle and converts an acute crisis into permanent blindness.",
    "citation": "Weinreb RN, et al. Primary Open-Angle Glaucoma. Nat Rev Dis Primers. 2016;2:16067. PMID: 27654490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize angle-closure glaucoma from the clinical triad and trigger (dim light pupillary dilation), and assemble the multi-target medical therapy to lower IOP before definitive laser peripheral iridotomy.",
      "distractorExclusionNotes": "Strongest distractor 'Topical atropine and cyclopentolate eyedrops to achieve maximal cycloplegia' excluded: Atropine causes pupillary dilation (mydriasis), which further closes the iridocorneal angle and converts an acute crisis into permanent blindness.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0321",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Caustic Alkali Ingestion",
    "subtopic": "Contraindication of Neutralization/Emesis and Timing of Endoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old boy is brought to the emergency department by his parents 45 minutes after accidentally drinking an unknown quantity of a liquid drain cleaner containing concentrated sodium hydroxide (lye). The child is crying, drooling copiously, and refusing to swallow. Physical examination reveals erythematous, ulcerated oral mucosa and edema of the lips and tongue. Vital signs are: blood pressure 98/62 mm Hg, heart rate 136/min, respiratory rate 24/min, and oxygen saturation 98% on room air. The lungs are clear without stridor. The parents state that on the way to the hospital, a neighbor advised them to make the child drink vinegar to neutralize the alkaline cleaner. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Maintain airway, keep NPO with IV hydration, and perform esophagogastroduodenoscopy within 12 to 24 hours",
        "The child ingested a caustic alkali (sodium hydroxide/drain cleaner), which causes liquefactive necrosis of the esophagus and stomach, penetrating deeply into tissues. Management requires securing the airway, keeping nil per os (NPO), fluid resuscitation, and performing flexible esophagogastroduodenoscopy (EGD) within the first 12 to 24 hours to assess the depth and extent of mucosal injury (Zargar classification). Neutralizing agents (such as vinegar or citrus juice) are strictly contraindicated because the acid-base exothermic chemical reaction generates significant heat, producing severe secondary thermal burns. Emesis and gastric lavage are contraindicated because they re-expose the esophagus to the caustic substance and increase perforation risk."
      ],
      [
        "Administer oral dilute acetic acid (vinegar) to chemically neutralize the alkaline base",
        "Chemical neutralization with weak acid triggers a vigorous exothermic reaction, releasing substantial thermal energy that produces severe secondary coagulative and burn necrosis throughout the esophagus."
      ],
      [
        "Administer syrup of ipecac to induce immediate emesis of the ingested drain cleaner",
        "Inducing emesis re-exposes the esophageal and pharyngeal mucosa to the caustic chemical and increases the risk of aspiration into the respiratory tract and esophageal rupture."
      ],
      [
        "Insert a nasogastric tube to perform activated charcoal administration and gastric lavage",
        "Blind nasogastric tube insertion or gastric lavage carries a high risk of mechanically perforating the friable, necrotic esophageal wall, and charcoal does not bind caustic alkalis and obscures endoscopic visualization."
      ],
      [
        "Delay endoscopy until 7 days post-ingestion to allow initial mucosal healing to occur",
        "After 24\u201348 hours, the esophageal wall undergoes intense tissue sloughing and collagen degradation with maximum wall thinning, creating a high-risk 'vulnerable window' (days 3\u201314) where endoscopy frequently causes iatrogenic perforation."
      ]
    ],
    "shortestValidSolution": "Drain cleaner (alkali) ingestion + drooling + oral burns -> NPO, IV fluids, and EGD within 12-24 hours (neutralization and emesis are strictly contraindicated).",
    "necessaryInference": "Recognize that caustic ingestion causes liquefactive necrosis; chemical neutralization produces exothermic burns, emesis causes re-exposure injury, and EGD must occur within 12-24 hours before wall sloughing creates perforation risk.",
    "strongestDistractor": "Administer oral dilute acetic acid (vinegar) to chemically neutralize the alkaline base",
    "distractorExclusion": "Neutralizing an alkali with an acid produces an exothermic reaction that adds thermal injury to chemical necrosis, causing devastating full-thickness perforation.",
    "citation": "Chibishev A, et al. Acute Caustic Ingestion: Management and Complications. Med Arch. 2014;68(5):345-349. PMID: 25568587.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that caustic ingestion causes liquefactive necrosis; chemical neutralization produces exothermic burns, emesis causes re-exposure injury, and EGD must occur within 12-24 hours before wall sloughing creates perforation risk.",
      "distractorExclusionNotes": "Strongest distractor 'Administer oral dilute acetic acid (vinegar) to chemically neutralize the alkali' excluded: Neutralizing an alkali with an acid produces an exothermic reaction that adds thermal injury to chemical necrosis, causing devastating full-thickness perforation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0322",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Malignant Spinal Cord Compression",
    "subtopic": "Immediate High-Dose Glucocorticoids Prior to Imaging and Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with metastatic prostate cancer presents to the emergency department with severe, progressive mid-thoracic back pain for 2 weeks that has become constant and worsens when lying flat in bed. Over the past 12 hours, he has noticed progressive weakness and heaviness in both legs and experienced an episode of urinary incontinence. On physical examination, there is point tenderness to percussion over the T6 and T7 spinous processes. Motor strength is 3/5 in the hip flexors and knee extensors bilaterally, with 4/5 strength in ankle dorsiflexion. Deep tendon reflexes are 3+ at the patella and Achilles tendons bilaterally, with bilateral sustained ankle clonus and upgoing toes (Babinski sign). Sensation to pinprick is diminished below the level of the xiphoid process (T7 dermatome). Bedside post-void bladder ultrasound reveals 550 mL of retained urine. Which of the following is the most appropriate immediate intervention?",
    "choices": [
      [
        "Administer high-dose intravenous dexamethasone immediately while arranging emergent whole-spine MRI",
        "The patient has acute metastatic epidural spinal cord compression (MESCC), an oncologic emergency characterized by localized back pain, progressive motor weakness, upper motor neuron signs (hyperreflexia, Babinski), a sensory level, and autonomic dysfunction (urinary retention/overflow incontinence). The single most crucial determinant of final functional outcome is pretreatment neurological status: once paraplegia develops, recovery is rare. High-dose intravenous glucocorticoids (dexamethasone 10 to 16 mg IV bolus) must be administered immediately upon clinical suspicion before imaging or surgery. Dexamethasone reduces vasogenic tumor edema, preserves microvascular spinal perfusion, and alleviates pain. Emergent whole-spine MRI followed by radiation therapy or surgical decompression is then performed."
      ],
      [
        "Obtain emergent non-contrast CT scan of the thoracic spine before initiating pharmacotherapy",
        "CT imaging is inferior to MRI for visualizing soft tissue epidural tumor and thecal sac compression; moreover, holding corticosteroids until imaging is completed causes unnecessary irreversible spinal cord ischemia."
      ],
      [
        "Administer intravenous zoledronic acid to stabilize osteolytic spinal bone metastases",
        "Bisphosphonates prevent future skeletal-related events in bone metastases, but have zero effect on acute thecal sac compression and do not relieve spinal cord edema."
      ],
      [
        "Perform emergency lumbar puncture to analyze CSF cytology for leptomeningeal disease",
        "Lumbar puncture in the presence of complete epidural cord block is contraindicated because it lowers pressure below the block, potentially precipitating spinal cord herniation and immediate paraplegia."
      ],
      [
        "Initiate oral bicalutamide and leuprolide therapy to achieve acute androgen deprivation",
        "GnRH agonists cause a transient initial surge in luteinizing hormone and testosterone ('tumor flare'), which can exacerbate cord compression and accelerate permanent paralysis unless preceded by prolonged antiandrogen blockade."
      ]
    ],
    "shortestValidSolution": "Prostate cancer + back pain + bilateral leg weakness + T7 sensory level + urinary retention -> cord compression -> immediate high-dose IV dexamethasone + emergent MRI.",
    "necessaryInference": "Prioritize immediate IV dexamethasone upon clinical suspicion of spinal cord compression before transport to imaging, knowing that delay risks permanent non-ambulatory status.",
    "strongestDistractor": "Obtain emergent non-contrast CT scan of the thoracic spine before initiating pharmacotherapy",
    "distractorExclusion": "Imaging must never delay the immediate administration of intravenous glucocorticoids in suspected acute epidural spinal cord compression.",
    "citation": "Lawton AJ, et al. Assessment and Management of Patients with Metastatic Spinal Cord Compression: A Summary of NICE Guidance. Lancet Oncol. 2019;20(2):e93-e104. PMID: 30712809.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Prioritize immediate IV dexamethasone upon clinical suspicion of spinal cord compression before transport to imaging, knowing that delay risks permanent non-ambulatory status.",
      "distractorExclusionNotes": "Strongest distractor 'Obtain emergent non-contrast CT scan of the thoracic spine before initiating pha' excluded: Imaging must never delay the immediate administration of intravenous glucocorticoids in suspected acute epidural spinal cord compression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0323",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Cholangitis (Reynolds Pentad)",
    "subtopic": "Emergent Biliary Decompression via ERCP vs Delayed Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents to the emergency department with severe right upper quadrant abdominal pain, high fever, and shaking chills for 18 hours. Her family notes that she became progressively confused and lethargic this morning. On physical examination, she appears toxic, jaundiced, and obtunded. Vital signs are: blood pressure 82/48 mm Hg, heart rate 124/min, respiratory rate 24/min, and temperature 39.4\u00b0C (102.9\u00b0F). Abdominal examination reveals scleral icterus and marked tenderness to palpation in the right upper quadrant with voluntary guarding, without rebound tenderness. Laboratory studies demonstrate: - Leukocytes: 19,800/mm3 with 18% bands - Total bilirubin: 6.8 mg/dL - Alkaline phosphatase: 480 U/L - AST: 142 U/L - ALT: 168 U/L - Serum lactate: 3.8 mmol/L. An ultrasound of the right upper quadrant reveals choledocholithiasis with a 12-mm common bile duct dilation and intrahepatic biliary ductal dilatation. Despite aggressive crystalloid resuscitation and intravenous piperacillin-tazobactam, she remains hypotensive. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform emergent endoscopic retrograde cholangiopancreatography (ERCP) for biliary decompression",
        "The patient has severe, life-threatening acute cholangitis presenting with the Reynolds pentad: Charcot triad (fever, jaundice, right upper quadrant pain) plus hypotension (shock) and altered mental status. Obstruction of the common bile duct by a gallstone (choledocholithiasis) leads to marked elevation of biliary intraductal pressure, causing translocation of bacteria across the hepatic parenchyma into the systemic venous circulation (biliary sepsis). In patients with toxic, suppurative cholangitis who fail to respond rapidly to fluid resuscitation and broad-spectrum IV antibiotics, emergent biliary decompression\u2014most commonly via ERCP with sphincterotomy and biliary drainage/stenting\u2014is mandatory. Without decompression, mortality approaches 100%."
      ],
      [
        "Schedule elective laparoscopic cholecystectomy for the next open surgical operating suite",
        "Cholecystectomy removes the gallbladder but does not decompress the obstructed common bile duct in acute suppurative cholangitis and is associated with high mortality in septic shock."
      ],
      [
        "Perform emergent open surgical choledochotomy with T-tube drainage under general anesthesia",
        "Surgical decompression of the biliary tree in patients with severe suppurative cholangitis carries significantly higher morbidity and mortality compared to minimally invasive endoscopic decompression via ERCP."
      ],
      [
        "Administer intravenous ursodeoxycholic acid to dissolve the obstructing choledocholithiasis",
        "Ursodeoxycholic acid is a chronic oral bile acid used for medical dissolution of small radiolucent gallstones over months; it has zero efficacy in acute obstructive suppurative cholangitis."
      ],
      [
        "Obtain an urgent magnetic resonance cholangiopancreatography (MRCP) to map the biliary tree",
        "Diagnostic MRCP delays life-saving therapeutic decompression when ultrasound and laboratory findings already establish the diagnosis of choledocholithiasis and acute cholangitis."
      ]
    ],
    "shortestValidSolution": "Fever + jaundice + RUQ pain + shock + confusion (Reynolds pentad) + dilated CBD -> severe acute cholangitis -> emergent ERCP for biliary decompression.",
    "necessaryInference": "Recognize the Reynolds pentad as an emergency requiring urgent biliary decompression via ERCP rather than diagnostic MRCP or surgical cholecystectomy.",
    "strongestDistractor": "Schedule elective laparoscopic cholecystectomy for the next open surgical operating suite",
    "distractorExclusion": "Cholecystectomy addresses gallbladder stones but fails to relieve the common bile duct obstruction driving life-threatening biliary sepsis.",
    "citation": "Kiriyama S, et al. Tokyo Guidelines 2018: Diagnostic Criteria and Severity Assessment of Acute Cholangitis. J Hepatobiliary Pancreat Sci. 2018;25(1):17-30. PMID: 29205594.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize the Reynolds pentad as an emergency requiring urgent biliary decompression via ERCP rather than diagnostic MRCP or surgical cholecystectomy.",
      "distractorExclusionNotes": "Strongest distractor 'Schedule elective laparoscopic cholecystectomy for the next open surgical operat' excluded: Cholecystectomy addresses gallbladder stones but fails to relieve the common bile duct obstruction driving life-threatening biliary sepsis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0324",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Limb Ischemia",
    "subtopic": "Immediate Anticoagulation (Heparin) Followed by Emergent Revascularization",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man with a history of permanent atrial fibrillation who discontinued his oral apixaban 2 weeks ago presents to the emergency department with sudden-onset, severe pain in his left leg that began 3 hours ago. He states that his left foot feels completely numb and cold. On physical examination, the left lower extremity is pale and marble-cool from the mid-calf down to the toes. Neurological examination of the left foot demonstrates absent sensation to light touch and pinprick over the dorsum and plantar surface, and inability to wiggle his toes or dorsiflex the ankle. Dorsalis pedis and posterior tibial pulses are absent to palpation and non-audible on Doppler examination, while the popliteal and femoral pulses are bounding (2+). Sensation, motor strength, and pulses in the right lower extremity are normal. Which of the following is the most appropriate immediate next step in the management of this patient?",
    "choices": [
      [
        "Administer an immediate intravenous bolus of unfractionated heparin followed by continuous infusion",
        "The patient presents with acute limb ischemia (ALI) of the left lower extremity secondary to a cardiogenic thromboembolism lodged in the popliteal or tibial trifurcation. He exhibits the classic '6 Ps': Pain, Pallor, Poikilothermia (coolness), Pulselessness, Paresthesia (numbness), and Paralysis (loss of motor function). The presence of motor deficit (inability to dorsiflex or wiggle toes) indicates Category IIb (immediately threatened limb) per Rutherford classification, requiring emergent revascularization within 4 to 6 hours to prevent irreversible muscle necrosis and amputation. The immediate first step is intravenous unfractionated heparin bolus and infusion, which halts thrombus propagation, prevents microvascular thrombosis in distal runoff vessels, and protects collateral channels while the patient is prepped for emergent surgical thromboembolectomy or catheter-directed thrombolysis."
      ],
      [
        "Obtain outpatient duplex ultrasonography of the left lower extremity arterial tree",
        "Outpatient ultrasound creates a disastrous delay for a patient with an immediately threatened ischemic limb (motor loss and sensory anesthesia); irreversible neuromuscular damage occurs within 6 hours."
      ],
      [
        "Elevate the left lower extremity above the level of the heart to reduce ischemic edema",
        "Limb elevation decreases arterial perfusion pressure across the occlusion, worsening tissue ischemia; the limb should be kept dependent or flat to facilitate collateral perfusion."
      ],
      [
        "Administer oral clopidogrel 300 mg monotherapy and observe for 24 hours in the observation unit",
        "Antiplatelet monotherapy is completely inadequate for acute embolic occlusion of a major artery and observing an immediately threatened limb results in limb gangrene."
      ],
      [
        "Place a warm thermal heating blanket directly around the left foot to promote vasodilation",
        "Applying direct heat to an ischemic, anesthetic extremity causes thermal burn injury and increases local metabolic demand without restoring arterial blood flow, accelerating tissue gangrene."
      ]
    ],
    "shortestValidSolution": "AFib off anticoagulation + acute cold, numb, paralyzed foot (6 Ps) + absent Doppler pulses -> acute limb ischemia (Rutherford IIb) -> immediate IV heparin bolus/infusion followed by emergent revascularization.",
    "necessaryInference": "Recognize Rutherford IIb immediately threatened limb (motor loss + sensory deficit) and prioritize immediate systemic heparinization to halt clot propagation before surgical revascularization.",
    "strongestDistractor": "Obtain outpatient duplex ultrasonography of the left lower extremity arterial tree",
    "distractorExclusion": "Delaying therapy for vascular lab ultrasound in an immediately threatened limb (paralysis/paresthesia) causes irreversible ischemic neuromuscular necrosis within 6 hours.",
    "citation": "Gerhard-Herman MD, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779. PMID: 27840333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize Rutherford IIb immediately threatened limb (motor loss + sensory deficit) and prioritize immediate systemic heparinization to halt clot propagation before surgical revascularization.",
      "distractorExclusionNotes": "Strongest distractor 'Obtain outpatient duplex ultrasonography of the left lower extremity arterial tr' excluded: Delaying therapy for vascular lab ultrasound in an immediately threatened limb (paralysis/paresthesia) causes irreversible ischemic neuromuscular necrosis within 6 hours.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0325",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Thyroid Storm",
    "subtopic": "Multimodal Sequence: Beta-Blocker, PTU, Iodine (Delayed), and Glucocorticoids",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman with a history of Graves disease who has been non-compliant with methimazole presents to the emergency department with severe agitation, confusion, and palpitations 24 hours after undergoing an uncomplicated tooth extraction. On arrival, she is tremulous, delirious, and profusely diaphoretic. Vital signs are: blood pressure 168/76 mm Hg, heart rate 158/min (irregularly irregular, consistent with atrial fibrillation), respiratory rate 26/min, and core temperature 40.2\u00b0C (104.4\u00b0F). Physical examination reveals marked exophthalmos, a diffusely enlarged non-tender thyroid goiter with an audible systolic bruit, diffuse bibasilar pulmonary crackles, and a 2+ bilateral pretibial pitting edema. Laboratory testing demonstrates an undetectable TSH (< 0.01 microU/mL) and free T4 of 5.8 ng/dL. The Burch-Wartofsky Point Scale score is 65, confirming thyroid storm. Which of the following represents the correct sequence and pharmacotherapy required for this patient?",
    "choices": [
      [
        "Administer intravenous propranolol, followed by propylthiouracil, followed 1 hour later by potassium iodide (Lugol solution), and intravenous hydrocortisone",
        "Thyroid storm is a life-threatening hypermetabolic state requiring immediate multimodal pharmacotherapy administered in a strict, specific sequence: (1) Beta-blockers (propranolol IV) to control adrenergic hyperactivity and block peripheral T4-to-T3 conversion; (2) Thionamides (propylthiouracil [PTU] or methimazole) to block new thyroid hormone synthesis via thyroid peroxidase inhibition (PTU also blocks peripheral T4-to-T3 conversion); (3) Inorganic iodine (Lugol solution or saturated solution of potassium iodide [SSKI]) to inhibit thyroid hormone release via the Wolff-Chaikoff effect; and (4) Glucocorticoids (IV hydrocortisone) to reduce peripheral conversion and treat potential relative adrenal insufficiency. CRITICAL PHARMACOLOGIC TIMING: Iodine must be administered AT LEAST 1 HOUR AFTER thionamide therapy; giving iodine first provides additional substrate for thyroid hormone synthesis, exacerbating the storm (Jod-Basedow phenomenon)."
      ],
      [
        "Administer high-dose Lugol iodine solution immediately, followed 2 hours later by propylthiouracil and levothyroxine",
        "Administering inorganic iodine before thionamide blockade provides rich iodide substrate to the hyperactive thyroid gland, synthesizing massive amounts of new thyroid hormone and worsening thyroid storm."
      ],
      [
        "Administer intravenous radioiodine (I-131) ablation therapy immediately to destroy hyperactive thyroid follicular cells",
        "Radioactive iodine ablation in acute thyroid storm causes radiation thyroiditis, releasing stored thyroid hormones into the bloodstream and triggering fatal cardiovascular collapse."
      ],
      [
        "Administer intravenous amiodarone infusion to convert atrial fibrillation to normal sinus rhythm",
        "Amiodarone contains 37% iodine by weight and is heavily metabolized to release massive iodine loads, worsening thyrotoxicosis and inducing refractory arrhythmias in Graves disease."
      ],
      [
        "Initiate immediate therapeutic plasma exchange as first-line monotherapy without antithyroid medications",
        "Plasmapheresis is a third-line rescue therapy reserved strictly for patients refractory to full medical management or with severe thionamide-induced agranulocytosis or hepatotoxicity."
      ]
    ],
    "shortestValidSolution": "Graves disease + fever (40.2\u00b0C) + AFib + delirium (Burch-Wartofsky 65) -> thyroid storm -> propranolol + PTU + iodine (Lugol's) delayed >= 1 hr + hydrocortisone.",
    "necessaryInference": "Apply the mandatory sequential rule of thyroid storm: beta-blocker first, thionamide second, inorganic iodine delayed at least 1 hour after thionamide to prevent Jod-Basedow substrate-driven hormone synthesis, plus hydrocortisone.",
    "strongestDistractor": "Administer high-dose Lugol iodine solution immediately, followed 2 hours later by propylthiouracil and levothyroxine",
    "distractorExclusion": "Giving iodine before thionamides fuels new thyroid hormone synthesis (Jod-Basedow effect), triggering fatal exacerbation of thyrotoxic crisis.",
    "citation": "Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421. PMID: 27521067.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the mandatory sequential rule of thyroid storm: beta-blocker first, thionamide second, inorganic iodine delayed at least 1 hour after thionamide to prevent Jod-Basedow substrate-driven hormone synthesis, plus hydrocortisone.",
      "distractorExclusionNotes": "Strongest distractor 'Administer high-dose Lugol iodine solution immediately, followed 2 hours later b' excluded: Giving iodine before thionamides fuels new thyroid hormone synthesis (Jod-Basedow effect), triggering fatal exacerbation of thyrotoxic crisis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
