# Step 2 CK Batch 13 Part 1: Items 0301 - 0312
import json

items_b13_p1 = [
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
    "citation": "O'Gara PT, et al. 2013 ACCF/AHA guideline for the management of ST-elevation myocardial infarction. Circulation. 2013;127(4):e362-e425. PMID: 23247304."
},
  {
    "code": "op-c-s2-0302",
    "exam": "Step 2 CK",
    "subject": "Critical Care Medicine",
    "system": "Respiratory",
    "topic": "Acute Respiratory Distress Syndrome (ARDS)",
    "subtopic": "Lung-Protective Ventilation Strategy and Permissive Hypercapnia",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with severe acute gallstone pancreatitis is intubated in the intensive care unit for progressive hypoxemic respiratory failure. Chest radiography reveals extensive bilateral fluffy alveolar infiltrates with normal cardiac silhouette. Arterial blood gas analysis on mechanical ventilation (FiO2 0.80, positive end-expiratory pressure [PEEP] 10 cm H2O, tidal volume 600 mL, respiratory rate 16/min) demonstrates: pH 7.36, PaCO2 42 mm Hg, PaO2 64 mm Hg (PaO2/FiO2 ratio: 80 mm Hg). The patient's measured height is 162 cm (5 ft 4 in), and her predicted ideal body weight is 55 kg. The ventilator graphics display a plateau airway pressure of 36 cm H2O. Which of the following ventilator adjustments is most strongly indicated to improve survival in this patient?",
    "choices": [
      ["Reduce the tidal volume to 330 mL (6 mL/kg of predicted body weight)", "The patient has severe ARDS (P/F ratio < 100 mm Hg, bilateral infiltrates, non-cardiogenic pulmonary edema). The ARDSNet trial demonstrated a significant mortality reduction with a lung-protective ventilation strategy utilizing low tidal volumes (4–8 mL/kg, targeting 6 mL/kg based on predicted/ideal body weight rather than actual weight) and maintaining plateau pressure ≤30 cm H2O. For her predicted body weight of 55 kg, 6 mL/kg is 330 mL. High tidal volumes (600 mL = 11 mL/kg) cause ventilator-induced lung injury (volutrauma and barotrauma), elevated plateau pressure (>30 cm H2O), and increased mortality."],
      ["Increase the respiratory rate to 28/min while maintaining the 600 mL tidal volume", "Increasing the respiratory rate without reducing tidal volume maintains high plateau pressures (>30 cm H2O) and volutrauma, perpetuating alveolar rupture and inflammatory cytokine release without addressing the mechanical source of lung injury."],
      ["Discontinue positive end-expiratory pressure to decrease mean airway pressure", "PEEP prevents end-expiratory alveolar collapse (atelectotrauma) and improves oxygenation by recruiting non-aerated lung units. Discontinuing PEEP in severe ARDS causes derecruitment and catastrophic hypoxemia."],
      ["Switch to volume-targeted proportional assist ventilation with auto-titrating pressure", "Proportional assist ventilation is an assist mode that varies support with patient effort, unsuitable for deeply sedated patients with severe ARDS, elevated plateau pressures, and severe hypoxemia where strict tidal volume limitation is life-saving."],
      ["Increase tidal volume to 750 mL to overcome alveolar dead space fraction", "Increasing tidal volume to 750 mL (>13 mL/kg PBW) drastically elevates transpulmonary and plateau pressures, causing massive barotrauma, pneumothorax, and marked increase in mortality in ARDS."]
    ],
    "shortestValidSolution": "Pancreatitis + severe ARDS + plateau pressure 36 cm H2O on 600 mL Vt -> lower tidal volume to 6 mL/kg PBW (330 mL) to target plateau pressure <= 30 cm H2O.",
    "necessaryInference": "Calculate tidal volume based on predicted body weight (55 kg * 6 mL/kg = 330 mL) and recognize that reducing tidal volume to maintain plateau pressure <= 30 cm H2O is the single intervention with proven mortality benefit in ARDS.",
    "strongestDistractor": "Increase the respiratory rate to 28/min while maintaining the 600 mL tidal volume",
    "distractorExclusion": "Minute ventilation cannot be raised at the expense of high tidal volumes; lung-protective ventilation mandates volume reduction even if permissive hypercapnia occurs.",
    "citation": "The Acute Respiratory Distress Syndrome Network. Ventilation with Lower Tidal Volumes as Compared with Traditional Tidal Volumes for Acute Lung Injury. N Engl J Med. 2000;342(18):1301-1308. PMID: 10793162."
  },
  {
    "code": "op-c-s2-0303",
    "exam": "Step 2 CK",
    "subject": "Trauma Surgery",
    "system": "General Principles",
    "topic": "Hemorrhagic Shock and Massive Transfusion Protocol",
    "subtopic": "Balanced 1:1:1 Hemostatic Resuscitation vs Crystalloid Overload",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old man arrives at the trauma bay 20 minutes after sustaining multiple high-velocity gunshot wounds to the abdomen and pelvis. On arrival, he is somnolent and pale with cool, clammy extremities. Vital signs are: blood pressure 72/40 mm Hg, heart rate 138/min, and respiratory rate 26/min. Focused assessment with sonography for trauma (FAST) demonstrates abundant free fluid in Morison pouch and the splenorenal recess, and pelvis radiography reveals an unstable open-book pelvic fracture. Two large-bore 14-gauge peripheral intravenous lines are placed. Which of the following resuscitation strategies is most appropriate while preparing the patient for immediate emergency laparotomy?",
    "choices": [
      ["Initiation of massive transfusion protocol with uncrossmatched blood, plasma, and platelets in a 1:1:1 ratio", "The patient is in class IV hemorrhagic shock from penetrating abdominal and pelvic trauma. Modern damage control resuscitation mandates early activation of a massive transfusion protocol (MTP) using a balanced 1:1:1 ratio of packed red blood cells, fresh frozen plasma (FFP), and platelets. Large-volume crystalloid resuscitation causes dilutional coagulopathy, hypothermia, and metabolic acidosis (the 'lethal triad' of trauma), worsening hemorrhage and dramatically increasing mortality. The PROPPR trial demonstrated that balanced 1:1:1 hemostatic resuscitation improves early hemostasis and reduces death from exsanguination."],
      ["Rapid infusion of 3 liters of warmed lactated Ringer solution prior to blood product administration", "Aggressive crystalloid-first resuscitation is obsolete in major trauma; infusing 3 liters of lactated Ringer dilutes clotting factors and platelets, increases hydrostatic pressure dislodging early clots ('pop the clot'), and exacerbates hypothermia and coagulopathy."],
      ["Transfusion of 4 units of packed red blood cells followed by reassessment of laboratory coagulation parameters", "Administering red cells alone without concurrent plasma and platelets rapidly produces dilutional thrombocytopenia and deficiency of clotting factors, precipitating uncontrollable diffuse microvascular bleeding."],
      ["Continuous infusion of norepinephrine titrated to a mean arterial pressure of 80 mm Hg", "Vasopressors in unresuscitated hemorrhagic shock cause intense peripheral and splanchnic vasoconstriction, worsening tissue hypoperfusion and lactic acidosis without addressing intravascular volume deficit. Hemostatic blood products are mandatory before vasopressors."],
      ["Administration of high-dose recombinant factor VIIa prior to surgical vascular control", "Recombinant factor VIIa is reserved as off-label rescue therapy for refractory coagulopathic bleeding when standard blood products and surgical hemostasis fail, and carries a significant risk of thromboembolic events; it is not initial first-line therapy."]
    ],
    "shortestValidSolution": "Penetrating trauma + class IV hemorrhagic shock + positive FAST -> Massive Transfusion Protocol in balanced 1:1:1 ratio (PRBC:FFP:platelets) to prevent lethal triad.",
    "necessaryInference": "Contrast modern balanced damage-control resuscitation (1:1:1 ratio of PRBCs, plasma, and platelets) with outdated crystalloid loading that worsens dilutional coagulopathy and acidosis.",
    "strongestDistractor": "Rapid infusion of 3 liters of warmed lactated Ringer solution prior to blood product administration",
    "distractorExclusion": "Crystalloid boluses are contraindicated in severe exsanguinating trauma because they dilute clotting factors and exacerbate the lethal triad of hypothermia, acidosis, and coagulopathy.",
    "citation": "Holcomb JB, et al. Transfusion of Plasma, Platelets, and Red Blood Cells in a 1:1:1 vs a 1:1:2 Ratio and Mortality in Patients with Severe Trauma: The PROPPR Randomized Clinical Trial. JAMA. 2015;313(5):471-482. PMID: 25647203."
  },
  {
    "code": "op-c-s2-0304",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Toxicology",
    "system": "General Principles",
    "topic": "Acetaminophen Toxicity",
    "subtopic": "Timing of N-Acetylcysteine Administration and Rumack-Matthew Nomogram",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college student is brought to the emergency department by her roommate 5 hours after intentionally ingesting an entire bottle of extra-strength acetaminophen (approximately 25 grams) following an emotional breakup. She has vomited twice and complains of mild epigastric discomfort, but denies alcohol or other co-ingestions. Physical examination reveals normal vital signs, clear lungs, and mild non-tender epigastric fullness without peritoneal signs. Serum acetaminophen concentration drawn at 5 hours post-ingestion returns at 180 mcg/mL. Aspartate aminotransferase (AST) is 24 U/L and alanine aminotransferase (ALT) is 21 U/L. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Initiate intravenous N-acetylcysteine infusion immediately", "The Rumack-Matthew nomogram plots serum acetaminophen concentration versus time elapsed since ingestion to assess hepatotoxicity risk. The treatment line starts at 150 mcg/mL at 4 hours and 75 mcg/mL at 8 hours. At 5 hours, 180 mcg/mL is well above the treatment line (which is approximately 130 mcg/mL at 5 hours), indicating substantial risk for centrilobular hepatic necrosis. N-acetylcysteine (NAC) replenishes glutathione stores and conjugates NAPQI (the toxic reactive metabolite), providing near 100% hepatoprotection when started within 8 hours of acute ingestion. Immediate initiation is mandatory."],
      ["Repeat the serum acetaminophen concentration in 4 hours before making treatment decisions", "Delaying NAC therapy while awaiting repeat levels allows toxic NAPQI to bind covalently to hepatocellular macromolecules, causing irreversible centrilobular necrosis. Because the 5-hour level clearly exceeds the nomogram treatment line, immediate therapy is required."],
      ["Administer activated charcoal orally and discharge with psychiatry follow-up", "Activated charcoal is most effective when administered within 1 to 2 hours of ingestion and is not adequate monotherapy for a toxic level at 5 hours; moreover, the patient requires inpatient NAC therapy and subsequent psychiatric evaluation."],
      ["Obtain urgent emergent consult for transjugular intrahepatic portosystemic shunt", "TIPS is a procedure for portal hypertension (variceal bleeding or refractory ascites) and has no role in the management of acute acetaminophen toxicity."],
      ["Administer deferoxamine intravenously to prevent hepatic iron-induced lipid peroxidation", "Deferoxamine is the specific chelating agent for acute iron poisoning, characterized by radiopaque pills on abdominal radiography and metabolic acidosis, not acetaminophen overdose."]
    ],
    "shortestValidSolution": "Acute acetaminophen overdose at 5 hours with serum level 180 mcg/mL (above 130 mcg/mL nomogram line) -> immediate N-acetylcysteine to restore glutathione.",
    "necessaryInference": "Apply the Rumack-Matthew nomogram cutoff (150 mcg/mL at 4 hr; ~130 mcg/mL at 5 hr) to recognize that a level of 180 mcg/mL requires immediate NAC without waiting for repeat levels or AST/ALT elevation.",
    "strongestDistractor": "Repeat the serum acetaminophen concentration in 4 hours before making treatment decisions",
    "distractorExclusion": "Waiting 4 hours would cross the 8-hour window where NAC is most effective, risking irreversible hepatic failure when the initial level already clearly exceeds the treatment line.",
    "citation": "Dart RC, et al. Acetaminophen Poisoning: An Evidence-Based Consensus Guideline for Out-of-Hospital Management. Clin Toxicol (Phila). 2006;44(1):1-18. PMID: 16496488."
  },
  {
    "code": "op-c-s2-0305",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Aortic Dissection",
    "subtopic": "Target Hemodynamic Parameters and Sequence of Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the emergency department with sudden-onset, severe, tearing chest pain radiating between his shoulder blades that began 45 minutes ago. He has a history of poorly controlled hypertension. Vital signs are: blood pressure 210/118 mm Hg in the right arm and 184/98 mm Hg in the left arm, heart rate 104/min, respiratory rate 22/min, and oxygen saturation 96% on ambient air. Cardiac examination reveals a grade 2/6 early diastolic decrescendo murmur heard best along the right sternal border. Bilateral radial pulses are palpable but asymmetric. Contrast-enhanced CT angiography of the chest demonstrates a Stanford type A aortic dissection originating in the ascending aorta and extending into the aortic arch. Which of the following is the most appropriate initial medical management while surgical consultation is obtained?",
    "choices": [
      ["Intravenous esmolol infusion targeting heart rate < 60/min, followed by intravenous nitroprusside if systolic blood pressure remains > 120 mm Hg", "The acute medical management of aortic dissection aims to minimize aortic wall shear stress (rate of change of left ventricular pressure, dP/dt). This requires immediate heart rate control (target HR < 60/min) followed by blood pressure reduction (target SBP 100–120 mm Hg). Intravenous beta-blockers (such as esmolol or labetalol) must always be administered FIRST before vasodilators (such as sodium nitroprusside or nicardipine). Administering a vasodilator alone or prior to beta-blockade induces reflex sympathetic tachycardia and increases dP/dt, propagating the intimal flap and accelerating aortic rupture."],
      ["Intravenous sodium nitroprusside monotherapy titrated rapidly to a systolic blood pressure < 110 mm Hg", "Sodium nitroprusside is a potent pure vasodilator. Administered without prior beta-blockade, it causes reflex sympathetic adrenergic discharge, increasing heart rate and left ventricular contractility (dP/dt), which tears the aortic wall further."],
      ["Intravenous hydralazine 20 mg bolus every 20 minutes to maintain diastolic pressure < 80 mm Hg", "Hydralazine causes unpredictable, prolonged vasodilation and pronounced reflex tachycardia, increasing dP/dt and increasing the risk of dissection propagation; it is contraindicated in acute aortic dissection."],
      ["Intravenous unfractionated heparin bolus and infusion to prevent thromboembolic propagation", "Anticoagulation with heparin is strictly contraindicated in acute aortic dissection because it impairs false lumen clotting, exacerbates bleeding, and drastically increases the risk of fatal pericardial tamponade or hemothorax."],
      ["Urgent pericardiocentesis under echocardiographic guidance to treat the early aortic regurgitation", "Pericardiocentesis is contraindicated in hemopericardium from acute aortic dissection unless the patient is in pulseless cardiac arrest; withdrawing blood acutely decompresses the intrapericardial space, increasing transaortic transmural pressure and precipitating fatal exsanguination."]
    ],
    "shortestValidSolution": "Type A dissection + severe hypertension and tachycardia -> IV beta-blocker (esmolol) first to HR < 60/min, then vasodilator (nitroprusside) if SBP > 120 mm Hg.",
    "necessaryInference": "Apply the mandatory physiological rule of aortic dissection: beta-blockers must precede vasodilators to suppress reflex tachycardia and dP/dt (shear stress) before reducing systolic pressure.",
    "strongestDistractor": "Intravenous sodium nitroprusside monotherapy titrated rapidly to a systolic blood pressure < 110 mm Hg",
    "distractorExclusion": "Monotherapy with pure vasodilators like nitroprusside induces reflex sympathetic tachycardia, increasing aortic shear stress and accelerating aortic rupture.",
    "citation": "Hiratzka LF, et al. 2010 ACCF/AHA/AATS Guidelines for the Diagnosis and Management of Patients with Thoracic Aortic Disease. Circulation. 2010;121(13):e266-e369. PMID: 20233780."
  },
  {
    "code": "op-c-s2-0306",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Respiratory",
    "topic": "Tension Pneumothorax",
    "subtopic": "Clinical Diagnosis vs Radiographic Delay and Needle Decompression",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old man is brought to the emergency department after being struck by an automobile while riding his bicycle. He is agitated, gasping for air, and cyanotic. Vital signs are: blood pressure 74/42 mm Hg, heart rate 142/min, respiratory rate 36/min, and oxygen saturation 81% on a nonrebreather mask. Physical examination reveals distended neck veins, trachea palpably deviated to the left, subcutaneous emphysema over the right hemithorax, and complete absence of breath sounds over the right lung with hyperresonance to percussion. The junior resident suggests immediately wheeling the patient to the radiology suite for a stat portable chest radiograph. Which of the following is the most appropriate next step in management?",
    "choices": [
      ["Perform immediate needle decompression in the second intercostal space at the midclavicular line", "The patient has a life-threatening right-sided tension pneumothorax with severe hemodynamic compromise (hypotension, tachycardia, tracheal deviation, JVD, absent breath sounds). Tension pneumothorax is a clinical diagnosis; waiting for radiographic confirmation causes fatal delay. Immediate needle decompression (or finger thoracostomy) converts the tension pneumothorax into an open pneumothorax, decompressing intrathoracic pressure, relieving superior and inferior vena caval kinking, and restoring venous return and cardiac output, followed promptly by tube thoracostomy."],
      ["Obtain a portable upright chest radiograph to confirm the location of the pleural line", "Delaying decompression to obtain an imaging study in an unstable patient with clinical signs of tension pneumothorax is a critical medical error that can result in pulseless electrical activity (PEA) cardiac arrest."],
      ["Perform emergency rapid sequence endotracheal intubation before thoracic intervention", "Positive pressure ventilation prior to decompressing a tension pneumothorax exacerbates intrathoracic pressure, worsens mediastinal shift, and accelerates complete cardiovascular collapse."],
      ["Administer a 2-liter intravenous bolus of normal saline to treat the distributive shock", "The primary etiology of hypotension is obstructive shock from impaired venous return due to positive intrathoracic pressure; volume infusion without thoracic decompression does not restore cardiac output."],
      ["Perform urgent pericardiocentesis under subxiphoid ultrasound guidance", "While pericardial tamponade presents with JVD and hypotension, it features muffled heart sounds and clear lungs, whereas this patient has unilateral absent breath sounds, hyperresonance, and tracheal deviation diagnostic of tension pneumothorax."]
    ],
    "shortestValidSolution": "Hypotension + absent breath sounds + hyperresonance + tracheal deviation to opposite side -> clinical tension pneumothorax -> immediate needle decompression without waiting for X-ray.",
    "necessaryInference": "Recognize tension pneumothorax as a purely clinical emergency requiring immediate decompression prior to imaging or positive-pressure intubation.",
    "strongestDistractor": "Obtain a portable upright chest radiograph to confirm the location of the pleural line",
    "distractorExclusion": "Imaging delays life-saving decompression in an unstable, hypotensive patient and is a classic board exam trap.",
    "citation": "American College of Surgeons. Advanced Trauma Life Support (ATLS) Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. NLM ID: 101736637"
  },
  {
    "code": "op-c-s2-0307",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Toxicology",
    "system": "General Principles",
    "topic": "Tricyclic Antidepressant Overdose",
    "subtopic": "Sodium Bicarbonate for QRS Widening and Fast Sodium Channel Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman with a history of major depressive disorder is found unresponsive in her bedroom by family members, surrounded by empty medication containers of amitriptyline. On arrival of emergency medical services, she has a generalized tonic-clonic seizure that terminates after intravenous lorazepam. In the emergency department, she is somnolent with a Glasgow Coma Scale score of 7. Vital signs are: blood pressure 82/46 mm Hg, heart rate 128/min, respiratory rate 10/min, and temperature 38.3°C (100.9°F). Physical examination reveals warm, flushed skin, dry oral mucous membranes, and bilateral dilated pupils measuring 7 mm with sluggish light reactivity. An ECG demonstrates sinus tachycardia with a QRS duration of 148 ms and a prominent terminal R wave in lead aVR (> 3 mm). Which of the following is the most appropriate immediate pharmacotherapy to address this patient's cardiovascular findings?",
    "choices": [
      ["Intravenous sodium bicarbonate bolus and infusion", "Tricyclic antidepressants (TCAs) inhibit myocardial fast sodium channels (phase 0 depolarization), prolonging the QRS complex and predisposing to fatal ventricular arrhythmias (ventricular tachycardia and fibrillation) and refractory hypotension. A QRS duration > 100 ms is an indication for intravenous sodium bicarbonate therapy. Sodium bicarbonate acts by: (1) increasing extracellular sodium concentration, which competitively overcomes sodium channel blockade, and (2) inducing serum alkalization (target pH 7.50–7.55), which shifts the lipophilic TCA drug molecules into an uncharged, non-binding state, dislodging them from the sodium channel receptor."],
      ["Intravenous physostigmine salicylate infusion to reverse anticholinergic delirium", "Physostigmine is a tertiary acetylcholinesterase inhibitor used in pure anticholinergic toxicity. In TCA overdose, physostigmine is strictly contraindicated because it precipitates complete heart block, asystole, and refractory seizures."],
      ["Intravenous amiodarone infusion for ventricular antiarrhythmic prophylaxis", "Class Ia and III antiarrhythmics (including amiodarone, procainamide, and quinidine) prolong the cardiac action potential and QT interval, further worsening cardiac conduction delay and triggering polymorphic ventricular tachycardia in TCA toxicity."],
      ["Intravenous flumazenil bolus to reverse central benzodiazepine receptor sedation", "Flumazenil is contraindicated in patients with suspected mixed tricyclic antidepressant ingestion because it blocks endogenous GABAergic inhibition, triggering uncontrollable seizures and cardiotoxicity."],
      ["Intravenous magnesium sulfate bolus for stabilization of the cardiac membrane", "Magnesium sulfate is the treatment of choice for torsades de pointes (polymorphic VT with prolonged QT). For TCA-induced QRS prolongation and monomorphic ventricular tachycardia, hypertonic sodium bicarbonate is the specific antidote."]
    ],
    "shortestValidSolution": "Amitriptyline overdose + anticholinergic signs + QRS 148 ms with tall R wave in aVR -> IV sodium bicarbonate to overcome fast sodium channel blockade.",
    "necessaryInference": "Identify TCA cardiac toxicity by QRS prolongation > 100 ms and terminal R wave in aVR; select IV sodium bicarbonate for sodium loading and serum alkalization, while avoiding contraindicated physostigmine or amiodarone.",
    "strongestDistractor": "Intravenous physostigmine salicylate infusion to reverse anticholinergic delirium",
    "distractorExclusion": "Physostigmine is contraindicated in TCA toxicity because it worsens cardiac conduction defects, triggering fatal asystole and seizures.",
    "citation": "Body R, et al. Guidelines in Emergency Medicine Network (GEMNet): Guideline for the Management of Tricyclic Antidepressant Overdose. Emerg Med J. 2011;28(4):347-368. PMID: 21415174."
  },
  {
    "code": "op-c-s2-0308",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "General Principles",
    "topic": "Anaphylaxis Management",
    "subtopic": "Intramuscular Epinephrine in Anterolateral Thigh vs Antihistamines",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old boy is brought to the emergency department by his mother 20 minutes after eating a pastry containing almond flour at a bakery. He complains of throat tightness, difficulty swallowing, and a spreading pruritic rash. Physical examination reveals generalized urticaria with extensive erythematous wheals across his chest and extremities, facial and periorbital edema, and inspiratory stridor audible over the anterior neck. Vital signs are: blood pressure 86/52 mm Hg, heart rate 124/min, respiratory rate 26/min, and oxygen saturation 93% on room air. The triage nurse asks which medication should be administered first. Which of the following is the most appropriate initial therapy?",
    "choices": [
      ["Intramuscular epinephrine (1:1,000) administered into the anterolateral mid-thigh", "The patient is experiencing severe anaphylaxis with airway compromise (inspiratory stridor) and cardiovascular collapse (hypotension). Intramuscular epinephrine (1 mg/mL, 1:1,000 concentration, 0.01 mg/kg, maximum 0.3–0.5 mg in adults/adolescents) administered into the anterolateral thigh (vastus lateralis) is the undisputed first-line treatment for anaphylaxis. Epinephrine stimulates alpha-1 receptors (causing vasoconstriction to treat hypotension and reduce laryngeal mucosal edema), beta-1 receptors (increasing heart rate and cardiac contractility), and beta-2 receptors (inducing bronchodilation and inhibiting mast cell and basophil degranulation). Delivery into the anterolateral thigh achieves faster and higher peak plasma concentrations than subcutaneous injection or deltoid administration."],
      ["Intravenous diphenhydramine 50 mg and ranitidine 50 mg administered over 10 minutes", "Antihistamines (H1 and H2 blockers) are secondary, adjunctive treatments that treat cutaneous symptoms (itching, hives) but do not relieve laryngeal edema, reverse bronchospasm, or treat hypotension, and should never delay epinephrine."],
      ["Intravenous methylprednisolone 125 mg to suppress late-phase inflammatory mediator release", "Systemic corticosteroids have an onset of action of 4 to 6 hours; they have no immediate effect on acute airway obstruction or shock and must never precede epinephrine."],
      ["Inhaled albuterol nebulization 2.5 mg every 20 minutes for relief of upper airway obstruction", "Inhaled albuterol treats lower airway bronchospasm (wheezing) but is ineffective for upper airway laryngeal edema (stridor) and does not treat systemic hypotension."],
      ["Subcutaneous epinephrine (1:1,000) injected into the upper deltoid region", "Subcutaneous injection and deltoid site administration result in significantly delayed absorption and lower peak plasma epinephrine concentrations compared to intramuscular injection into the vastus lateralis."]
    ],
    "shortestValidSolution": "Nut ingestion + urticaria + inspiratory stridor + hypotension -> anaphylaxis -> immediate IM epinephrine (1:1,000) in anterolateral thigh.",
    "necessaryInference": "Prioritize intramuscular epinephrine into the anterolateral thigh over antihistamines, steroids, or inhalers as the sole life-saving initial intervention in anaphylaxis.",
    "strongestDistractor": "Intravenous diphenhydramine 50 mg and ranitidine 50 mg administered over 10 minutes",
    "distractorExclusion": "Antihistamines are slow-acting adjunctive agents that only alleviate cutaneous hives and pruritus; they do not reverse life-threatening airway edema or shock.",
    "citation": "Shaker MS, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and Grading of Recommendations, Assessment, Development and Evaluation (GRADE) Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123. PMID: 32001153."
  },
  {
    "code": "op-c-s2-0309",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Toxicology",
    "system": "General Principles",
    "topic": "Carbon Monoxide Poisoning",
    "subtopic": "Normal Pulse Oximetry, Elevated Carboxyhemoglobin, and Hyperbaric Oxygen Indications",
    "provisionalDifficulty": 4,
    "stem": "A 45-year-old man is brought to the emergency department after being rescued from a house fire. He was found unconscious in a smoke-filled bedroom. On arrival, he is somnolent and confused, complaining of a throbbing headache, dizziness, and severe nausea. Vital signs are: blood pressure 138/84 mm Hg, heart rate 110/min, respiratory rate 20/min, and pulse oximetry saturation (SpO2) 99% on room air. Neurological examination reveals disorientation to time and place, but no focal deficits. Arterial blood gas analysis on 100% nonrebreather mask demonstrates: pH 7.31, PaCO2 36 mm Hg, PaO2 105 mm Hg, and an arterial blood carboxyhemoglobin level of 34% (normal: < 3% in non-smokers). Serum lactate is 4.8 mmol/L. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Maintain 100% high-flow normobaric oxygen and arrange immediate hyperbaric oxygen therapy", "The patient has severe carbon monoxide (CO) poisoning manifested by neurological dysfunction (somnolence, confusion, transient loss of consciousness) and an elevated carboxyhemoglobin level of 34%. Standard pulse oximetry cannot distinguish between oxyhemoglobin and carboxyhemoglobin (both absorb light at 660 nm), falsely reporting a normal SpO2 of 99%. Hyperbaric oxygen (HBO) therapy drastically shortens the half-life of carboxyhemoglobin (from ~300 minutes on room air and ~90 minutes on 100% normobaric O2 down to ~20–30 minutes at 2.5–3.0 atmospheres) and reduces long-term cognitive and neurological sequelae. Indications for HBO include: carboxyhemoglobin > 25% (> 15% in pregnancy), loss of consciousness, severe metabolic acidosis (pH < 7.25), end-organ ischemia (chest pain/ECG changes), or persistent neurological deficits."],
      ["Discontinue oxygen therapy because the pulse oximetry confirms adequate tissue oxygen saturation", "Pulse oximeters cannot differentiate carboxyhemoglobin from oxyhemoglobin, falsely reading 99% even in fatal CO toxicity; discontinuing oxygen exacerbates severe tissue hypoxia."],
      ["Administer intravenous hydroxocobalamin monotherapy and discharge once lactate clears", "Hydroxocobalamin is the antidote for cyanide poisoning, which often co-occurs in smoke inhalation; however, this patient has proven severe CO poisoning (COHb 34%) with neurological impairment, requiring HBO therapy regardless of cyanide management."],
      ["Administer intravenous methylene blue for drug-induced functional dyshemoglobinemia", "Methylene blue is the specific treatment for methemoglobinemia (converts Fe3+ to Fe2+), not carbon monoxide poisoning; methylene blue in CO poisoning can induce hemolytic anemia and is contraindicated."],
      ["Perform emergent fiberoptic bronchoscopy to confirm inhalational thermal airway injury", "While airway assessment is important in smoke inhalation, bronchoscopy does not treat systemic cellular hypoxia from carbon monoxide poisoning and should not delay HBO therapy."],
    ],
    "shortestValidSolution": "Smoke inhalation + pulse oximetry falsely 99% + confusion + carboxyhemoglobin 34% -> severe CO poisoning -> 100% normobaric O2 and immediate hyperbaric oxygen.",
    "necessaryInference": "Recognize that standard pulse oximeters falsely overestimate saturation in CO toxicity, and identify the criteria for hyperbaric oxygen therapy (COHb > 25%, loss of consciousness, neurological deficits).",
    "strongestDistractor": "Discontinue oxygen therapy because the pulse oximetry confirms adequate tissue oxygen saturation",
    "distractorExclusion": "Standard pulse oximetry measures both carboxyhemoglobin and oxyhemoglobin as 99% saturation; stopping oxygen based on SpO2 would cause catastrophic hypoxia.",
    "citation": "Weaver LK. Carbon Monoxide Poisoning. N Engl J Med. 2009;360(12):1217-1225. PMID: 19297574."
  },
  {
    "code": "op-c-s2-0310",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Cardiovascular",
    "topic": "Cardiac Tamponade",
    "subtopic": "Beck Triad, Pulsus Paradoxus, and Emergency Pericardiocentesis",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with metastatic breast cancer presents to the emergency department with progressive shortness of breath, profound fatigue, and lightheadedness over the past 3 days. On physical examination, she appears distressed and sits upright, leaning forward. Vital signs are: blood pressure 88/60 mm Hg, heart rate 118/min, respiratory rate 24/min, and temperature 37.0°C (98.6°F). Jugular venous distention is prominent up to the angle of the jaw with an absent y descent. Heart sounds are distant and muffled on auscultation, and the lungs are clear to auscultation bilaterally. On blood pressure cuff deflation, the first Korotkoff sounds are heard intermittently during expiration at 96 mm Hg, and become audible continuously throughout both inspiration and expiration at 80 mm Hg. Point-of-care echocardiography reveals a large circumferential pericardial effusion with diastolic collapse of the right ventricle. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform emergency echocardiography-guided pericardiocentesis", "The patient presents with cardiac tamponade secondary to malignant pericardial effusion. She exhibits Beck triad (hypotension, jugular venous distention, muffled heart sounds) and pulsus paradoxus (> 10 mm Hg drop in systolic blood pressure during inspiration; here, 96 - 80 = 16 mm Hg). Diastolic collapse of the right ventricle on echocardiography confirms elevated intrapericardial pressure exceeding intracardiac chamber pressure, severely impeding venous return and stroke volume. Emergency pericardiocentesis under echocardiographic guidance relieves intrapericardial pressure, restores ventricular filling, and rapidly reverses cardiogenic shock."],
      ["Administer intravenous furosemide 40 mg to reduce elevated central venous pressure", "Diuretics reduce intravascular volume and intracardiac filling pressures. In cardiac tamponade, cardiac output depends on high filling pressures to overcome external pericardial compression; diuresis eliminates preload, precipitating sudden cardiovascular collapse."],
      ["Initiate immediate positive-pressure noninvasive ventilation with BiPAP", "Positive pressure ventilation increases intrathoracic pressure, further decreasing venous return to the right heart and worsening hemodynamic collapse in cardiac tamponade."],
      ["Administer intravenous beta-blocker to control sinus tachycardia and reduce myocardial oxygen demand", "Sinus tachycardia is a vital compensatory mechanism to preserve cardiac output (CO = HR x SV) in the setting of a fixed, severely reduced stroke volume. Suppressing the heart rate precipitates fatal circulatory failure."],
      ["Schedule elective subxiphoid pericardial window placement within the next 48 hours", "Delaying intervention for elective surgery in a hypotensive patient with diastolic right ventricular collapse is dangerous; immediate bedside decompression is required to prevent arrest."]
    ],
    "shortestValidSolution": "Metastatic breast cancer + Beck triad (JVD, hypotension, muffled sounds) + pulsus paradoxus 16 mm Hg + RV diastolic collapse -> cardiac tamponade -> emergency pericardiocentesis.",
    "necessaryInference": "Calculate pulsus paradoxus (16 mm Hg drop during inspiration) and recognize that hemodynamic compromise with RV diastolic collapse mandates immediate pericardiocentesis rather than diuresis or elective surgery.",
    "strongestDistractor": "Administer intravenous furosemide 40 mg to reduce elevated central venous pressure",
    "distractorExclusion": "Diuretics deplete the high ventricular filling pressures required to maintain cardiac output against the pericardial effusion, causing immediate circulatory collapse.",
    "citation": "Adler Y, et al. 2015 ESC Guidelines for the Diagnosis and Management of Pericardial Diseases. Eur Heart J. 2015;36(42):2921-2964. PMID: 26320112."
  },
  {
    "code": "op-c-s2-0311",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Toxicology",
    "system": "General Principles",
    "topic": "Opioid Overdose vs Sedative-Hypnotic Withdrawal",
    "subtopic": "Titrated Naloxone vs Rapid Reversal Precipitating Acute Withdrawal",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man is brought to the emergency department after being found unresponsive in a public restroom. Empty syringes and a spoon with residue were discovered next to him. On arrival, he is comatose and does not respond to sternal rub. Vital signs are: blood pressure 94/56 mm Hg, heart rate 52/min, respiratory rate 5/min, and oxygen saturation 82% on ambient air. Physical examination reveals pinpoint pupils (1 mm) that react sluggishly to light, shallow chest excursions, and cool skin with track marks over both antecubital fossae. Bag-valve-mask ventilation with 100% supplemental oxygen is immediately initiated, improving oxygen saturation to 96%. Which of the following is the most appropriate next step in the pharmacologic management of this patient?",
    "choices": [
      ["Administer low-dose intravenous naloxone (0.04 to 0.1 mg) titrated to adequate spontaneous ventilation", "The patient has acute opioid overdose, characterized by the classic triad of central nervous system depression, miosis (pinpoint pupils), and respiratory depression. While naloxone is the specific opioid receptor antagonist, the goal of naloxone therapy in opioid-dependent individuals is restoration of adequate spontaneous ventilation (respiratory rate ≥ 10–12/min and normal tidal volume), not full arousal or consciousness. Administering low, titrated doses of intravenous naloxone (0.04 to 0.1 mg every 2–3 minutes) restores ventilation while preventing severe precipitated opioid withdrawal (agitation, violent vomiting, aspiration, and sympathetic surge)."],
      ["Administer a rapid intravenous bolus of naloxone 4 mg to achieve immediate full arousal", "High-dose bolus naloxone precipitates acute, severe opioid withdrawal syndrome, causing tachycardia, hypertension, violent agitation, vomiting with high risk of pulmonary aspiration, and acute pulmonary edema."],
      ["Perform immediate endotracheal intubation without administering opioid antagonists", "Intubation is invasive and carries complications. In opioid overdose, bag-valve-mask ventilation followed by titrated naloxone reliably restores spontaneous ventilation, avoiding the need for mechanical ventilation in the vast majority of cases."],
      ["Administer intravenous flumazenil 0.2 mg to treat suspected co-ingestion of benzodiazepines", "Flumazenil carries a significant risk of inducing refractory seizures and status epilepticus in benzodiazepine-tolerant patients or mixed overdoses, and is contraindicated in undifferentiated coma."],
      ["Administer intravenous clonidine to suppress sympathetic hyperactivity and autonomic discharge", "Clonidine treats autonomic symptoms of opioid withdrawal; administering it to a patient in acute opioid-induced coma and bradycardia would worsen hypotension and central depression."]
    ],
    "shortestValidSolution": "Coma + pinpoint pupils + respiratory rate 5/min + track marks -> opioid overdose -> titrated low-dose IV naloxone (0.04-0.1 mg) targeting adequate ventilation without severe withdrawal.",
    "necessaryInference": "Recognize that the therapeutic endpoint of naloxone is restoration of adequate ventilation (not full alert consciousness) and that low titrated dosing avoids dangerous precipitated withdrawal.",
    "strongestDistractor": "Administer a rapid intravenous bolus of naloxone 4 mg to achieve immediate full arousal",
    "distractorExclusion": "High-dose bolus naloxone causes violent precipitated withdrawal with severe emesis and aspiration risk; titrated dosing is standard of care.",
    "citation": "Boyer EW. Management of Opioid Analgesic Overdose. N Engl J Med. 2012;367(2):146-155. PMID: 22784117."
  },
  {
    "code": "op-c-s2-0312",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Cardiovascular",
    "topic": "Unstable Tachyarrhythmia",
    "subtopic": "Synchronized Cardioversion vs Defibrillation and Antiarrhythmics",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a history of ischemic cardiomyopathy (left ventricular ejection fraction 30%) presents to the emergency department with sudden severe palpitations, chest tightness, and lightheadedness that began 30 minutes ago. On arrival, he is pale and diaphoretic. Vital signs are: blood pressure 78/48 mm Hg, heart rate 175/min and regular, respiratory rate 24/min, and oxygen saturation 94% on ambient air. Cardiac monitor shows a monomorphic wide-complex tachycardia with a QRS duration of 160 ms. He remains conscious but speaks in short, fragmented phrases and appears close to syncope. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform immediate synchronized electrical cardioversion", "The patient has monomorphic wide-complex tachycardia (presumed ventricular tachycardia in a patient with structural heart disease) with hemodynamic instability (hypotension, chest tightness, altered mental status/near-syncope). According to ACLS guidelines, any tachyarrhythmia with pulse causing hemodynamic instability requires immediate synchronized electrical cardioversion. Synchronization delivers the electrical shock timed to the R wave of the QRS complex, preventing shock delivery during the vulnerable relative refractory period (T wave) which would precipitate ventricular fibrillation."],
      ["Administer an immediate unsynchronized high-energy electrical shock (defibrillation)", "Defibrillation (unsynchronized shock) is reserved for pulseless cardiac arrest (ventricular fibrillation or pulseless VT). Delivering an unsynchronized shock to a patient with a perfusing rhythm can trigger R-on-T phenomenon, converting ventricular tachycardia into fatal ventricular fibrillation."],
      ["Administer intravenous amiodarone 150 mg infused over 10 minutes", "Pharmacologic therapy with amiodarone is indicated only for hemodynamically STABLE wide-complex tachycardia; in an unstable, hypotensive patient, antiarrhythmic infusions delay life-saving electrical therapy and exacerbate hypotension."],
      ["Administer rapid intravenous adenosine 6 mg followed by a 20 mL saline flush", "Adenosine is used for regular, narrow-complex supraventricular tachycardia (or stable undifferentiated monomorphic wide-complex tachycardia). In an unstable, hypotensive patient, chemical conversion delays definitive therapy."],
      ["Perform bilateral carotid sinus massage to increase vagal parasympathetic tone", "Vagal maneuvers are used for stable paroxysmal supraventricular tachycardia. They are ineffective for ventricular tachycardia and contraindicated in unstable patients with shock."]
    ],
    "shortestValidSolution": "Monomorphic wide-complex tachycardia + hypotension (BP 78/48) + chest pain -> unstable VT with pulse -> immediate synchronized electrical cardioversion.",
    "necessaryInference": "Differentiate stable from unstable tachyarrhythmias, and synchronized cardioversion (for unstable rhythms with a pulse) from defibrillation (for pulseless arrest).",
    "strongestDistractor": "Administer an immediate unsynchronized high-energy electrical shock (defibrillation)",
    "distractorExclusion": "Unsynchronized shocks (defibrillation) are for pulseless cardiac arrest; delivering an unsynchronized shock to a patient with a pulse risks R-on-T induced ventricular fibrillation.",
    "citation": "Panchal AR, et al. 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care: Adult Basic and Advanced Life Support. Circulation. 2020;142(16_suppl_2):S366-S468. PMID: 33081529."
  }
]

print(f"Loaded {len(items_b13_p1)} items for Step 2 CK Batch 13 part 1.")
