"""
Step 3 Batch 36 (0889-0900) Definitions - Acute Clinical Emergencies & Palliative Ethics
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b36_part2 = [
  # 0889
  {
    "code": "op-c-s3-0889",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Aortic Dissection Immediate Beta-Blocker Heart Rate and Shear Control",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the emergency department with sudden-onset, excruciating, 'tearing' substernal chest pain radiating straight between his scapulae that began 45 minutes ago. On physical examination, he is pale and diaphoretic. Blood pressure measured in the right arm is 204/118 mm Hg, and in the left arm is 172/96 mm Hg. Heart rate is 108/min regular. Neurological examination is intact. Contrast-enhanced computed tomographic angiography (CTA) of the chest confirms an acute Stanford Type A aortic dissection involving the ascending aorta, extending into the aortic arch with a patent true and false lumen. The cardiothoracic surgery team is mobilized for emergent operative repair. While preparing the patient for the operating room, which of the following is the most critical immediate pharmacological sequence to control aortic wall shear stress?",
    "choices": [
      [
        "Immediate intravenous beta-blocker (e.g., esmolol or labetalol) targeting heart rate < 60/min, followed by vasodilator therapy if systolic BP remains > 120 mm Hg",
        "Acute aortic dissection is a cardiovascular emergency requiring immediate medical stabilization to limit propagation of the dissection flap and prevent catastrophic aortic rupture, hemopericardium, and tamponade. The primary physiological objective is reducing aortic wall shear stress (dP/dt, the rate of change of left ventricular pressure over time). Guidelines dictate a strict pharmacological sequence: (1) Intravenous beta-blockade (e.g., esmolol infusion or labetalol boluses) must be initiated FIRST, targeting a resting heart rate < 60 beats/min; (2) Once beta-blockade is established, if systolic blood pressure remains elevated, a pure vasodilator (e.g., intravenous nicardipine or nitroprusside) is added to rapidly achieve a target systolic BP between 100 and 120 mm Hg. CRITICAL PITFALL: Administering a vasodilator (nitroprusside, hydralazine) WITHOUT prior beta-blockade triggers profound reflex sympathetic activation and reflex tachycardia, dramatically increasing dP/dt and accelerating aortic flap tearing and fatal rupture."
      ],
      [
        "Immediate intravenous sodium nitroprusside infusion as initial monotherapy targeting systolic BP < 100 mm Hg",
        "Administering a vasodilator alone induces severe reflex tachycardia and increases dP/dt, tearing the aortic dissection flap and causing rupture."
      ],
      [
        "Immediate intravenous hydralazine bolus combined with oral amlodipine",
        "Hydralazine triggers severe reflex sympathetic stimulation and tachycardia, accelerating aortic shear stress and propagation."
      ],
      [
        "Intravenous unfractionated heparin bolus and infusion to prevent true lumen thrombosis",
        "Anticoagulation is strictly contraindicated in acute aortic dissection because it accelerates false lumen propagation, bleeding, and fatal hemopericardium."
      ],
      [
        "High-dose intravenous nitroglycerin infusion with permissive tachycardia up to 130 beats/min",
        "Nitroglycerin causes venodilation and reflex tachycardia; controlling heart rate below 60/min with beta-blockers is the essential primary step."
      ]
    ],
    "shortestValidSolution": "Type A aortic dissection = IV beta-blocker FIRST (target HR < 60) -> then add vasodilator (target SBP < 120) to control dP/dt shear.",
    "necessaryInference": "Enforce the critical sequence in acute aortic dissection: beta-blockade before vasodilation to control dP/dt and prevent reflex tachycardia.",
    "strongestDistractor": "Immediate intravenous sodium nitroprusside infusion as initial monotherapy targeting systolic BP < 100 mm Hg",
    "distractorExclusion": "Vasodilators without prior beta-blockers induce reflex tachycardia and increase aortic shear stress (dP/dt), precipitating fatal rupture.",
    "citation": "Isselbacher EM, Preventza O, Black JH 3rd, et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022;146(24):e334-e482. PMID: 36322642.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency cardiology item testing physiological shear control (dP/dt) and sequencing in acute aortic dissection.",
      "distractorExclusionNotes": "Excluded nitroprusside monotherapy and hydralazine because beta-blockade must always precede vasodilation to prevent reflex shear stress.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0890
  {
    "code": "op-c-s3-0890",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Refractory Ventricular Fibrillation Defibrillation and Antiarrhythmic Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man collapses in the emergency department waiting room. The resuscitation team initiates cardiopulmonary resuscitation (CPR). The cardiac monitor reveals fine-to-coarse ventricular fibrillation (VF). Chest compressions are delivered with minimal interruptions (rate 110/min, depth > 5 cm, full chest recoil), an advanced airway is placed, and a first 200-joule biphasic defibrillation shock is delivered. CPR is resumed immediately for 2 minutes, and intravenous epinephrine 1 mg is administered. Rhythm check reveals persistent coarse ventricular fibrillation; a second 200-joule shock is delivered, and CPR is resumed. Rhythm check after the second cycle demonstrates ongoing, refractory ventricular fibrillation. A third 200-joule shock is delivered. While high-quality chest compressions continue, which of the following is the most appropriate first-line antiarrhythmic agent to administer according to Advanced Cardiovascular Life Support (ACLS) guidelines?",
    "choices": [
      [
        "Intravenous amiodarone 300 mg bolus (or intravenous lidocaine 1.0 to 1.5 mg/kg)",
        "In cardiac arrest with shock-refractory ventricular fibrillation or pulseless ventricular tachycardia (VF/pVT that persists after at least two shocks and epinephrine): (1) High-quality CPR and timely defibrillation remain the primary determinant of survival; (2) The recommended first-line antiarrhythmic therapy according to ACLS guidelines is intravenous amiodarone (300 mg IV/IO push initial bolus, with a second dose of 150 mg IV if VF/pVT persists) OR intravenous lidocaine (1.0 to 1.5 mg/kg IV initial bolus, followed by 0.5 to 0.75 mg/kg). Large randomized clinical trials (the ALPS trial) demonstrated that amiodarone and lidocaine significantly increased the rate of survival to hospital admission in shock-refractory out-of-hospital VF/pVT compared to placebo. Concurrently, the team must aggressively identify and treat reversible etiologies (the 5 H's and 5 T's: Hypoxia, Hypovolemia, Hydrogen ion acidosis, Hypo/hyperkalemia, Hypothermia; Tension pneumothorax, Tamponade, Toxins, Thrombosis pulmonary, Thrombosis coronary)."
      ],
      [
        "Intravenous calcium gluconate 3 g rapid bolus as routine empirical therapy",
        "Routine calcium administration does not terminate ventricular fibrillation and is indicated strictly for documented hyperkalemia, hypocalcemia, or CCB toxicity."
      ],
      [
        "Intravenous sodium bicarbonate 100 mEq bolus to treat lactic acidosis",
        "Routine bicarbonate causes intracellular paradoxical acidosis and hyperosmolarity, and is reserved for severe tricyclic antidepressant overdose or preexisting metabolic acidosis."
      ],
      [
        "Immediate cessation of chest compressions to perform emergent transvenous cardiac pacing",
        "Cardiac pacing has zero efficacy in terminating ventricular fibrillation and interrupting chest compressions severely decreases coronary perfusion."
      ],
      [
        "Intravenous atropine 3 mg rapid push to block vagal efferent tone",
        "Atropine is indicated for symptomatic bradycardia; it has no role in pulseless ventricular fibrillation and was removed from the ACLS pulseless algorithm."
      ]
    ],
    "shortestValidSolution": "Refractory VF after shock 2/3 = IV amiodarone 300 mg bolus (or lidocaine 1-1.5 mg/kg) + continuous CPR.",
    "necessaryInference": "Apply ACLS shock-refractory VF algorithm: administer amiodarone 300 mg (or lidocaine) after the second/third shock alongside CPR.",
    "strongestDistractor": "Intravenous calcium gluconate 3 g rapid bolus as routine empirical therapy",
    "distractorExclusion": "Calcium has no antiarrhythmic efficacy in refractory VF; amiodarone 300 mg or lidocaine is the guideline-directed antiarrhythmic.",
    "citation": "Kudenchuk PJ, Brown SP, Daya M, et al. Amiodarone, Lidocaine, or Placebo in Out-of-Hospital Cardiac Arrest (ALPS Trial). N Engl J Med. 2016;374(18):1711-1722. PMID: 27043898.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/cardiology item on ACLS protocols for shock-refractory ventricular fibrillation and antiarrhythmic dosing.",
      "distractorExclusionNotes": "Excluded calcium, bicarbonate, and pacing because amiodarone 300 mg (or lidocaine) is the evidence-based first-line antiarrhythmic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0891
  {
    "code": "op-c-s3-0891",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Status Epilepticus Refractory to Benzodiazepines Second-Line Anticonvulsants",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman is brought to the emergency department in active status epilepticus. Her family witnessed continuous, generalized tonic-clonic convulsions that began 25 minutes ago. Upon arrival, the emergency team establishes airway protection, supplemental oxygen, and intravenous access. She receives intravenous lorazepam 4 mg over 2 minutes; generalized clonic activity persists. At minute 5, a second dose of intravenous lorazepam 4 mg is administered. At minute 10, the patient continues to experience continuous, bilateral convulsive seizure activity. Blood glucose is 110 mg/dL, and electrolytes are normal. Vital signs show blood pressure 138/82 mm Hg, heart rate 130/min, and oxygen saturation 95% on nonrebreather mask. Which of the following is the most appropriate next step in pharmacological management according to established status epilepticus guidelines (e.g., the ESETT trial)?",
    "choices": [
      [
        "Immediate intravenous infusion of levetiracetam (or fosphenytoin, or valproate sodium)",
        "Status epilepticus is defined operationally as >= 5 minutes of continuous seizure activity or >= 2 discrete seizures between which there is incomplete recovery of consciousness. It is a time-critical neurological emergency where prompt cessation of electrical activity prevents excitotoxic neuronal death. Treatment follows a strict phase-based algorithm: (1) First-line therapy (Phase 1, 0-5 to 10 min): Intravenous benzodiazepine (lorazepam 0.1 mg/kg IV, up to 4 mg repeated once, or IM midazolam 10 mg). (2) Second-line therapy (Phase 2, established status epilepticus, failing benzodiazepines): The landmark ESETT (Established Status Epilepticus Treatment Trial) randomized clinical trial demonstrated that intravenous levetiracetam (60 mg/kg, max 4,500 mg), intravenous fosphenytoin (20 mg PE/kg, max 1,500 mg), and intravenous valproate sodium (40 mg/kg, max 3,000 mg) have EQUIVALENT high efficacy (~45-50% seizure cessation) and safety. Any of these three agents represents guideline-directed second-line therapy. (3) Third-line therapy (refractory status epilepticus failing second-line): General anesthesia intubation with propofol, midazolam, or ketamine infusion."
      ],
      [
        "Immediate administration of third and fourth boluses of intravenous lorazepam",
        "Repeated benzodiazepine boluses beyond 2 doses fail to stop seizures due to GABA-A receptor internalization and precipitate profound respiratory depression."
      ],
      [
        "Oral carbamazepine crushed and administered via nasogastric tube",
        "Enteral administration is too slow, unpredictable, and ineffective for acute active convulsive status epilepticus."
      ],
      [
        "Immediate high-dose intravenous dexamethasone to reduce cerebral edema",
        "Corticosteroids have no anticonvulsant properties and do not terminate acute status epilepticus."
      ],
      [
        "Administration of subcutaneous sumatriptan for presumed prolonged hemiplegic migraine",
        "Sumatriptan treats acute migraines; it has zero efficacy for convulsive status epilepticus and risks coronary vasospasm."
      ]
    ],
    "shortestValidSolution": "Status epilepticus failing 2 doses of lorazepam = Phase 2 second-line IV anticonvulsant (levetiracetam, fosphenytoin, or valproate; ESETT trial).",
    "necessaryInference": "Apply the ESETT trial and AES guidelines selecting levetiracetam, fosphenytoin, or valproate as second-line therapy after benzodiazepine failure.",
    "strongestDistractor": "Immediate administration of third and fourth boluses of intravenous lorazepam",
    "distractorExclusion": "Repeated benzodiazepines fail due to GABA receptor downregulation; progressing to non-sedating IV second-line anticonvulsants is required.",
    "citation": "Kapur J, Elm J, Chamberlain JM, et al. Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus (ESETT Trial). N Engl J Med. 2019;381(22):2103-2113. PMID: 31774953.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency neurology item on managing established status epilepticus with second-line anticonvulsants based on the ESETT trial.",
      "distractorExclusionNotes": "Excluded repeated benzodiazepines and oral medications because IV levetiracetam, fosphenytoin, or valproate is the proven standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0892
  {
    "code": "op-c-s3-0892",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Large Vessel Occlusion Ischemic Stroke Extended Window Mechanical Thrombectomy",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman is brought to the comprehensive stroke center by her husband. She was in her normal state of health when she went to sleep at 10:00 PM last night. Upon awakening at 7:00 AM this morning (9 hours since she was last seen normal), her husband discovered her with severe right-sided hemiplegia and complete inability to speak (global aphasia). NIHSS score is 18. Vital signs show blood pressure 164/92 mm Hg, and pulse 76/min irregular. Non-contrast head CT demonstrates an Alberta Stroke Program Early CT Score (ASPECTS) of 9, with no evidence of intracranial hemorrhage or extensive hypoattenuation. CT angiography (CTA) confirms an acute occlusion of the M1 segment of the left middle cerebral artery (MCA). CT perfusion (CTP) reveals an ischemic core volume (cerebral blood flow < 30%) of 15 mL and a critically hypoperfused penumbra volume (Tmax > 6 seconds) of 110 mL, representing a large ischemic penumbral tissue mismatch (mismatch ratio > 7). Which of the following is the most appropriate management approach according to landmark extended-window stroke trials (e.g., DAWN and DEFUSE 3) and AHA/ASA guidelines?",
    "choices": [
      [
        "Immediate transfer to the angiography suite for emergent catheter-based mechanical thrombectomy",
        "While intravenous thrombolysis (alteplase/tenecteplase) is limited to within 4.5 hours of last known normal, Mechanical Thrombectomy (endovascular clot retrieval) has an extended treatment window up to 24 hours. Landmark randomized clinical trials (DAWN trial up to 24 hours and DEFUSE 3 trial up to 16 hours) established that patients presenting with Large Vessel Occlusion (LVO, internal carotid artery or proximal MCA M1) between 6 and 24 hours who have a substantial 'clinical-core mismatch' or 'perfusion-core mismatch' derive massive functional benefits from mechanical thrombectomy: (1) Small irreversible infarct core (e.g., core volume < 50-70 mL, or ASPECTS >= 6), AND (2) Substantial salvageable ischemic penumbra (large mismatch ratio >= 1.8). In this patient presenting 9 hours after last seen well, with a tiny core (15 mL), huge salvageable penumbra (110 mL), and high NIHSS (18), immediate mechanical thrombectomy dramatically improves functional independence (NNT ~2-3 to reduce disability) and is the definitive standard of care."
      ],
      [
        "Intravenous alteplase infusion because the wake-up time is within nine hours",
        "Intravenous thrombolysis is strictly contraindicated beyond 4.5 hours of last seen normal (unless MRI DWI/FLAIR mismatch is demonstrated in specific non-LVO cases)."
      ],
      [
        "Conservative medical management with oral aspirin 325 mg and admission to the ward",
        "Conservative aspirin alone in acute LVO with massive salvageable penumbra results in irreversible completed hemispheric infarction and death."
      ],
      [
        "Emergent decompressive hemicraniectomy prior to attempting any vascular recanalization",
        "Hemicraniectomy is a salvage rescue surgical procedure for malignant cerebral edema developing days after completed infarction, not an upfront recanalization therapy."
      ],
      [
        "Therapeutic anticoagulation with full-dose intravenous unfractionated heparin bolus",
        "Full-dose anticoagulation in acute large-territory ischemic stroke does not recanalize the occluded M1 vessel and significantly increases fatal hemorrhagic transformation."
      ]
    ],
    "shortestValidSolution": "Stroke 9 hrs (wake-up) + M1 occlusion + small core (15 mL) + large penumbra (110 mL) = Mechanical Thrombectomy (DAWN/DEFUSE 3).",
    "necessaryInference": "Apply extended-window guidelines (DAWN/DEFUSE 3 trials) selecting mechanical thrombectomy up to 24 hours based on perfusion mismatch.",
    "strongestDistractor": "Intravenous alteplase infusion because the wake-up time is within nine hours",
    "distractorExclusion": "Standard IV alteplase window is 4.5 hours; endovascular mechanical thrombectomy is indicated up to 24 hours for LVO with perfusion mismatch.",
    "citation": "Nogueira RG, Jadhav AP, Haussen DC, et al. Thrombectomy 6 to 24 Hours After Stroke With a Mismatch Between Deficit and Infarct (DAWN Trial). N Engl J Med. 2018;378(1):11-21. PMID: 29129157.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 neurology emergency item on extended-window mechanical thrombectomy for large vessel occlusion based on DAWN/DEFUSE 3.",
      "distractorExclusionNotes": "Excluded IV alteplase (outside 4.5 hr window) and heparin because endovascular thrombectomy is the proven standard up to 24 hours with tissue mismatch.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0893
  {
    "code": "op-c-s3-0893",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Severe Accidental Hypothermia With Cardiac Arrest Extracorporeal Rewarming",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man is found submerged in an ice-covered alpine mountain stream. Emergency responders extricate him and perform continuous CPR during transport. On arrival at the trauma resuscitation bay, he is pulseless, apneic, and completely unresponsive. His extremities and core torso are cold and stiff. The cardiac monitor demonstrates asystole. Pupils are fixed and dilated. Core body temperature measured with an esophageal thermistor is 24.2 C (75.6 F). Serum potassium is 3.8 mEq/L. Blood gas analysis reveals severe mixed acidosis. A junior resident recommends terminating resuscitation and declaring the patient deceased due to prolonged asystole, fixed pupils, and rigor-like rigidity. Which of the following is the most appropriate resuscitation and rewarming strategy according to Wilderness Medical Society and international hypothermia resuscitation guidelines?",
    "choices": [
      [
        "Continue active CPR and initiate emergent extracorporeal life support / ECMO rewarming; the patient cannot be declared dead until rewarmed to >= 32.0 C",
        "Severe accidental hypothermia (core temperature < 28 C, Stage IV) profoundly depresses cerebral metabolic demand (reducing cerebral oxygen consumption by ~50% for every 6 C drop in core temperature). This profound neuroprotection allows complete neurologically intact recovery after prolonged periods of cardiac arrest that would be universally fatal at normothermia, embodying the critical clinical aphorism: 'No one is dead until warm and dead.' Rigid chest wall musculature can mimic rigor mortis, and fixed pupils reflect hypothermic brainstem suppression rather than brain death. In hypothermic cardiac arrest without obvious lethal traumatic injuries: (1) CPR must be continued; (2) The treatment of choice for severe hypothermic cardiac arrest is Extracorporeal Life Support (ECLS) via venoarterial Extracorporeal Membrane Oxygenation (VA-ECMO) or cardiopulmonary bypass, which provides rapid internal core rewarming (up to 6-9 C/hr) and circulatory support; (3) Defibrillation and ACLS drugs (epinephrine) are largely ineffective at core temperatures < 30 C; (4) Resuscitation cannot be terminated until core body temperature is rewarmed to at least 32.0 C (or hyperkalemia > 12 mmol/L indicates irreversible cell lysis)."
      ],
      [
        "Cease resuscitation immediately and declare death based on the irreversible asystolic cardiac rhythm",
        "Asystole is an expected physiological effect of severe hypothermia (<28 C); cessation before rewarming violates international hypothermia resuscitation protocols."
      ],
      [
        "Declare brain death immediately based on fixed, dilated pupils and lack of spontaneous movement",
        "Hypothermia suppresses all brainstem reflexes and pupil reactivity; brain death cannot be diagnosed while core temperature is < 36 C."
      ],
      [
        "Administer intravenous epinephrine 1 mg every two minutes until return of spontaneous circulation",
        "Epinephrine does not metabolize at temperatures < 30 C, leading to massive toxic accumulation and fatal refractory arrhythmias upon rewarming."
      ],
      [
        "Rely exclusively on passive external rewarming with warm blankets and heated ambient air",
        "Passive rewarming requires endogenous heat production, which is absent in cardiac arrest; active extracorporeal rewarming is mandatory."
      ]
    ],
    "shortestValidSolution": "Cardiac arrest with core temp 24.2 C = 'Not dead until warm and dead' -> continuous CPR + emergent ECMO/ECLS rewarming to >= 32 C.",
    "necessaryInference": "Apply hypothermia resuscitation guidelines: continue CPR and utilize ECMO/ECLS core rewarming before death can be declared.",
    "strongestDistractor": "Cease resuscitation immediately and declare death based on the irreversible asystolic cardiac rhythm",
    "distractorExclusion": "Termination of resuscitation is strictly prohibited until the patient is rewarmed to >= 32 C because hypothermia provides profound neuroprotection.",
    "citation": "Paal P, Pasquier M, Darocha T, et al. Accidental Hypothermia: 2021 Update. Int J Environ Res Public Health. 2022;19(1):501. PMID: 35010761.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/critical care item on managing severe hypothermic cardiac arrest with extracorporeal life support.",
      "distractorExclusionNotes": "Excluded declaring death and passive rewarming because patients must be actively rewarmed with ECMO to >=32 C before declaring death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0894
  {
    "code": "op-c-s3-0894",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Acetaminophen Overdose Rumack-Matthew Nomogram and N-Acetylcysteine",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman is brought to the emergency department 4.5 hours after a single, acute intentional ingestion of thirty 500-mg tablets of acetaminophen (total 15 g) in a suicide attempt. She has mild nausea and epigastric discomfort but no vomiting. Vital signs show blood pressure 118/74 mm Hg, heart rate 84/min, and respiratory rate 16/min. Physical examination is unremarkable with no jaundice, hepatomegaly, or right upper quadrant tenderness. Laboratory evaluation reveals: AST 28 U/L, ALT 24 U/L, total bilirubin 0.8 mg/dL, and serum creatinine 0.8 mg/dL. A serum acetaminophen concentration drawn exactly 4.5 hours post-ingestion is 185 mcg/mL. When plotted on the Rumack-Matthew nomogram, this level falls well above the standard 'treatment line' (which begins at 150 mcg/mL at 4 hours). Which of the following is the most appropriate next step in pharmacological management?",
    "choices": [
      [
        "Immediate initiation of intravenous (or oral) N-acetylcysteine therapy",
        "Acetaminophen (APAP) hepatotoxicity is mediated by its reactive metabolite N-acetyl-p-benzoquinone imine (NAPQI), produced by cytochrome P450 2E1. At therapeutic doses, NAPQI is rapidly detoxified by conjugation with endogenous hepatic glutathione. In acute overdose, glutathione stores become exhausted (>70% depleted), allowing toxic NAPQI to bind covalently to hepatocyte mitochondrial proteins, causing centrilobular hepatic necrosis. The Rumack-Matthew nomogram guides therapy for single, acute ingestions between 4 and 24 hours. A 4.5-hour level of 185 mcg/mL falls clearly above the treatment line (150 mcg/mL at 4 hours), indicating high risk of severe hepatotoxicity. The antidote of choice is N-acetylcysteine (NAC), which acts as a glutathione precursor, directly conjugates NAPQI, and provides antioxidant protection. Initiating NAC within 8 hours of acute ingestion provides virtually 100% hepatoprotection and prevents acute liver failure and death."
      ],
      [
        "Oral activated charcoal 50 g as sole primary therapy with no antidote",
        "Activated charcoal is effective within 1 to 2 hours of ingestion to bind remaining pill fragments; at 4.5 hours, NAC is the essential systemic antidote."
      ],
      [
        "Immediate transfer to the operating room for emergent orthotopic liver transplantation",
        "Transplantation is indicated for King's College criteria in established acute liver failure (severe coagulopathy, encephalopathy, acidosis), not early stage I overdose."
      ],
      [
        "Discharge home with psychiatric follow-up because liver enzymes are completely normal",
        "In Stage I APAP toxicity (first 24 hours), transaminases are typically completely normal; clinical hepatic necrosis and AST/ALT elevation manifest at 24-72 hours."
      ],
      [
        "High-dose intravenous flumazenil infusion to reverse acetaminophen receptor binding",
        "Flumazenil is a benzodiazepine antagonist that has zero biochemical interaction with acetaminophen metabolism."
      ]
    ],
    "shortestValidSolution": "Acute APAP overdose + 4.5 hr level 185 mcg/mL (above Rumack-Matthew line) = immediate N-acetylcysteine (NAC).",
    "necessaryInference": "Apply the Rumack-Matthew nomogram to identify toxic acetaminophen levels and initiate N-acetylcysteine within the 8-hour protective window.",
    "strongestDistractor": "Oral activated charcoal 50 g as sole primary therapy with no antidote",
    "distractorExclusion": "Charcoal is an early adjunct; N-acetylcysteine is the definitive systemic antidote required when levels exceed the nomogram line.",
    "citation": "Dart RC, Erdman AR, Olson KR, et al. Acetaminophen Poisoning: An Evidence-Based Consensus Guideline for Out-of-Hospital Management. Clin Toxicol (Phila). 2006;44(1):1-18. PMID: 16496488.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/toxicology item on applying the Rumack-Matthew nomogram and initiating N-acetylcysteine.",
      "distractorExclusionNotes": "Excluded normal ALT dismissal (necrosis takes 24-72 hrs) and charcoal alone because levels above the nomogram mandate NAC therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0895
  {
    "code": "op-c-s3-0895",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Acute Salicylate Poisoning Acid-Base Derangements and Hemodialysis Thresholds",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man presents to the emergency department 6 hours after an intentional ingestion of an unknown quantity of aspirin. On examination, he is agitated, tachypneic, and profusely diaphoretic. He complains of loud ringing in his ears (tinnitus), nausea, and dizziness. Vital signs: blood pressure 138/82 mm Hg, heart rate 124/min, respiratory rate 36/min, and temperature 38.6 C (101.5 F). Arterial blood gas reveals: pH 7.46, PaCO2 20 mm Hg, and HCO3- 14 mEq/L. Serum sodium is 142 mEq/L, chloride is 100 mEq/L, and potassium is 3.6 mEq/L (anion gap = 142 - [100 + 14] = 28 mEq/L). Serum salicylate concentration is 96 mg/dL (severe toxicity > 70-80 mg/dL). Over the subsequent 2 hours despite intravenous sodium bicarbonate infusion and urine alkalinization, he develops confusion, stupor, and bibasilar pulmonary rales on exam. Which of the following is the definitive management of choice for this patient?",
    "choices": [
      [
        "Emergent hemodialysis",
        "Acute salicylate poisoning presents with a classic mixed acid-base disorder: (1) Primary Respiratory Alkalosis (direct stimulation of the medullary respiratory center causing hyperventilation and hypocapnia), accompanied by (2) Primary High Anion Gap Metabolic Acidosis (uncoupling of mitochondrial oxidative phosphorylation, accumulation of lactic acid, ketoacids, and salicylate anions). While mild-to-moderate toxicity is managed with volume resuscitation and urine alkalinization (IV sodium bicarbonate targeting urine pH 7.5-8.0 to ion-trap salicylate in renal tubules and prevent central nervous system penetration), definitive indications for EMERGENT HEMODIALYSIS include: (1) Serum salicylate level >= 90-100 mg/dL (or >= 80 mg/dL with renal impairment), (2) Central nervous system toxicity (altered mental status, confusion, seizures, coma), (3) Pulmonary edema (non-cardiogenic ARDS), (4) Renal failure impairing urinary clearance, or (5) Severe refractory acid-base/electrolyte deterioration despite bicarbonate therapy. In this patient with a level of 96 mg/dL, worsening encephalopathy, and pulmonary edema, emergent hemodialysis is the definitive life-saving therapy."
      ],
      [
        "Endotracheal intubation with mild hyperventilation on low tidal volume",
        "Intubating salicylate toxicity is exceptionally perilous: any transient hypoventilation drops blood pH, shifting un-ionized salicylate across the blood-brain barrier and causing rapid fatal brain death."
      ],
      [
        "Oral N-acetylcysteine loading dose via nasogastric tube",
        "N-acetylcysteine is the specific antidote for acetaminophen toxicity; it has zero efficacy for salicylate poisoning."
      ],
      [
        "Continuous intravenous infusion of deferoxamine mesylate",
        "Deferoxamine is an iron-chelating agent used for acute iron poisoning, not salicylate poisoning."
      ],
      [
        "High-dose intravenous loop diuretic therapy with furosemide to induce diuresis",
        "Loop diuretics acidify urine, promoting tubular reabsorption of salicylate, and worsen dehydration, accelerating central nervous system toxicity."
      ]
    ],
    "shortestValidSolution": "Salicylate level 96 mg/dL + confusion + pulmonary rales = severe toxicity refractory to bicarb -> emergent hemodialysis.",
    "necessaryInference": "Recognize indications for emergent hemodialysis in acute salicylate poisoning (level >90 mg/dL, CNS depression, pulmonary edema).",
    "strongestDistractor": "Endotracheal intubation with mild hyperventilation on low tidal volume",
    "distractorExclusion": "Intubation in salicylate toxicity carries immense mortality because mechanical ventilation cannot match extreme spontaneous hyperventilation.",
    "citation": "Juurlink DN, Gosselin S, Kielstein JT, et al. Extracorporeal Treatment for Salicylate Poisoning: Systematic Review and Recommendations From the EXTRIP Workgroup. Ann Emerg Med. 2015;66(2):165-181. PMID: 25986311.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency toxicology/nephrology item on identifying hemodialysis indications in severe salicylate overdose.",
      "distractorExclusionNotes": "Excluded intubation (extreme risk of fatal brain herniation from acidosis) and NAC because level >90 with neuro findings mandates hemodialysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0896
  {
    "code": "op-c-s3-0896",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Calcium Channel and Beta-Blocker Overdose High-Dose Insulin Euglycemia Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man presents to the emergency department 2 hours after an intentional massive ingestion of sixty tablets of extended-release diltiazem (total 14.4 g) and thirty tablets of atenolol. On arrival, he is somnolent, cool, and mottled. Blood pressure is 66/38 mm Hg, and heart rate is 34/min with junctional bradycardia. Bedside echocardiogram reveals severe global left ventricular hypokinesis with an ejection fraction of 20%. Despite 3 liters of intravenous crystalloids, intravenous calcium chloride (3 g), and high-dose norepinephrine and epinephrine infusions, he remains in refractory cardiogenic shock with blood pressure 72/40 mm Hg. Point-of-care blood glucose is 280 mg/dL. Which of the following advanced pharmacological therapies is the treatment of choice to restore myocardial contractility and reverse shock?",
    "choices": [
      [
        "High-dose insulin euglycemia therapy (regular insulin 1 unit/kg bolus followed by 1 to 10 units/kg/hr infusion with dextrose)",
        "Calcium channel blocker (CCB) and beta-blocker overdoses are leading causes of fatal cardiovascular medication toxicity, producing refractory cardiogenic shock, profound bradycardia, and vasodilation. Calcium chloride and glucagon are traditional first-line adjuncts, but are frequently ineffective in massive poisonings. High-Dose Insulin Euglycemia (HIE / HDI) therapy is the definitive advanced inotropic therapy of choice. The physiological mechanism is metabolic: under normal aerobic conditions, myocardial cells preferentially utilize free fatty acids as their primary energy substrate. However, in severe shock and CCB-induced hypoperfusion, the stressed myocardium switches abruptly to carbohydrate (glucose) metabolism. Severe CCB poisoning simultaneously inhibits pancreatic L-type calcium channels, suppressing endogenous insulin release and causing hypoinsulinemia and severe peripheral insulin resistance. Administering supraphysiological doses of insulin (1 unit/kg IV bolus followed by 1 to 10 units/kg/hr continuous infusion) dramatically enhances myocardial glucose uptake, restores sarcoplasmic reticular calcium cycling, exerts a direct positive inotropic effect independent of adrenergic receptors, and restores cardiac output. A 10% or 20% dextrose infusion is co-administered to maintain euglycemia, with frequent bedside glucose and potassium monitoring."
      ],
      [
        "Intravenous flumazenil 1 mg rapid bolus to reverse myocardial sedation",
        "Flumazenil reverses benzodiazepines; it has zero efficacy on calcium channels or beta-adrenergic receptors and induces seizures."
      ],
      [
        "High-dose intravenous sodium bicarbonate 150 mEq bolus to block cardiac sodium channels",
        "Sodium bicarbonate is the antidote for sodium channel blockers (TCAs, flecainide); it does not restore calcium flux in CCB overdose."
      ],
      [
        "Intravenous digoxin 0.5 mg bolus to increase myocyte contractility",
        "Digoxin inhibits the Na+/K+ ATPase, exacerbating bradycardia and AV nodal blockade, accelerating fatal cardiac arrest in CCB/beta-blocker toxicity."
      ],
      [
        "Oral activated charcoal 100 g administered via nasogastric tube without airway protection",
        "Administering charcoal to a somnolent, hypotensive patient without endotracheal intubation results in massive fatal pulmonary charcoal aspiration."
      ]
    ],
    "shortestValidSolution": "Refractory CCB/beta-blocker shock (diltiazem) = High-Dose Insulin Euglycemia therapy (1-10 units/kg/hr + dextrose).",
    "necessaryInference": "Select high-dose insulin euglycemia (HIE) therapy as the definitive advanced metabolic inotrope for refractory CCB/beta-blocker toxicity.",
    "strongestDistractor": "High-dose intravenous sodium bicarbonate 150 mEq bolus to block cardiac sodium channels",
    "distractorExclusion": "Sodium bicarbonate treats TCA/sodium channel toxicity; High-Dose Insulin restores myocardial glucose metabolism in CCB overdose.",
    "citation": "Graudins A, Lee HM, Druda D. Calcium Channel Antagonist and Beta-Blocker Overdose: Antidotes and Adjunct Therapies. Br J Clin Pharmacol. 2016;81(3):453-461. PMID: 26344579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/toxicology item on advanced management of refractory CCB/beta-blocker shock with high-dose insulin.",
      "distractorExclusionNotes": "Excluded bicarbonate (TCA specific) and digoxin (worsens AV block) because high-dose insulin is the proven metabolic inotrope.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0897
  {
    "code": "op-c-s3-0897",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Massive Life-Threatening Hemoptysis Dependent Positioning and Embolization",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with a history of cavitary pulmonary tuberculosis treated 10 years ago and chronic aspergilloma (fungus ball) presents to the emergency department with acute, massive hemoptysis. Over the past 45 minutes, he has coughed up approximately 350 mL of gross, bright red blood into an emesis basin. He is dyspneic, tachypneic at 32/min, and anxious. Vital signs: blood pressure 98/58 mm Hg, heart rate 118/min, and oxygen saturation 88% on high-flow mask. Portable chest radiography demonstrates a 6-cm thick-walled cavitary lesion with an intracavitary mass and surrounding dense consolidation occupying the right upper lobe, with clear left lung parenchyma. Fresh blood continues to pour from his mouth with each cough. Which of the following is the most appropriate immediate sequence of emergency airway and vascular interventions?",
    "choices": [
      [
        "Position the patient in the right lateral decubitus position (bleeding lung dependent), secure the airway, and arrange emergent bronchial artery embolization",
        "Massive (life-threatening) hemoptysis is defined as expectoration of >= 100 to 150 mL of blood in a single hour, or >= 600 mL in 24 hours, or any volume causing acute airway obstruction, hypoxia, or hemodynamic instability. Patients die from ASPHYXIATION and drowning in their own blood, not exsanguination. Immediate management priorities are: (1) Position the patient with the BLEEDING LUNG DOWN (right lateral decubitus in this patient) so gravity prevents blood from spilling across the carina into the healthy dependent left lung; (2) Airway protection: large-bore endotracheal intubation (ideally size >= 8.5 mm to allow flexible/rigid bronchoscopy) or selective endobronchial intubation of the non-bleeding mainstem bronchus; and (3) Definitive hemostasis: >90% of massive hemoptysis arises from the high-pressure BRONCHIAL ARTERIAL CIRCULATION (hypertrophied bronchial arteries supplying chronic cavitary/inflammatory lesions like aspergilloma). Emergent catheter-directed Bronchial Artery Embolization (BAE) in interventional radiology is the definitive treatment of choice, achieving immediate hemostasis in >85% of cases."
      ],
      [
        "Position the patient in the left lateral decubitus position to encourage drainage of blood into the unaffected lung",
        "Placing the bleeding lung up allows blood to flood the contralateral healthy lung, causing bilateral alveolar inundation and fatal asphyxia."
      ],
      [
        "Administer high-dose intravenous heparin to prevent intra-alveolar clot formation",
        "Anticoagulation in active massive pulmonary hemorrhage abolishes hemostasis and precipitates fatal drowning in blood."
      ],
      [
        "Immediate transfer to the operating room for emergent right pneumonectomy without prior embolization",
        "Emergent open thoracic resection during active massive bleeding carries prohibitive mortality (>35-50%); bronchial artery embolization is the standard bridge."
      ],
      [
        "Prescribe oral voriconazole and schedule outpatient pulmonary angiography in one week",
        "Massive hemoptysis carries high immediate mortality from asphyxiation; delayed outpatient therapy is completely negligent."
      ]
    ],
    "shortestValidSolution": "Massive hemoptysis right lung = bleeding lung DEPENDENT (right side down) + secure airway + emergent bronchial artery embolization.",
    "necessaryInference": "Apply life-saving positioning principles (bleeding side dependent to protect healthy lung) and select bronchial artery embolization for massive hemoptysis.",
    "strongestDistractor": "Position the patient in the left lateral decubitus position to encourage drainage of blood into the unaffected lung",
    "distractorExclusion": "Placing the healthy lung down floods it with blood, causing immediate asphyxiation; the bleeding lung must always be dependent.",
    "citation": "Davidson K, Shojaee S. Managing Massive Hemoptysis. Chest. 2020;157(1):77-88. PMID: 31520693.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 pulmonary emergency/interventional radiology item on managing massive hemoptysis with dependent positioning and bronchial artery embolization.",
      "distractorExclusionNotes": "Excluded contralateral positioning (causes drowning) and open surgery because dependent positioning and catheter embolization are standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0898
  {
    "code": "op-c-s3-0898",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Septic Shock Resuscitation Hour-1 Bundle Compliance and Vasopressor Timing",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man is brought to the emergency department from a long-term care facility with severe lethargy, productive cough, and chills. On arrival, he is obtunded. Vital signs show blood pressure 76/44 mm Hg (mean arterial pressure 55 mm Hg), heart rate 128/min, respiratory rate 28/min, and temperature 39.2 C (102.6 F). Oxygen saturation is 90% on room air. Point-of-care capillary lactate is 4.6 mmol/L. Right lower lobe bronchial breath sounds and crackles are present. The physician recognizes septic shock. Peripheral intravenous access is established. Which of the following sequences represents the correct execution of the Surviving Sepsis Campaign 'Hour-1 Bundle'?",
    "choices": [
      [
        "Measure serum lactate, obtain blood cultures prior to antibiotics, administer broad-spectrum IV antibiotics, infuse 30 mL/kg crystalloid, and initiate norepinephrine if MAP remains < 65 mm Hg",
        "The Surviving Sepsis Campaign 'Hour-1 Bundle' is a critical quality improvement protocol designed to reduce sepsis mortality by standardizing early resuscitation. The five core bundle components must be initiated within the FIRST HOUR of recognition: (1) Measure blood lactate concentration (and remeasure within 2-4 hours if initial lactate > 2.0 mmol/L to guide resuscitation); (2) Obtain blood cultures prior to starting antimicrobial therapy (without causing significant delay in antibiotic administration); (3) Administer broad-spectrum intravenous antimicrobials immediately (targeting within 1 hour of shock recognition); (4) Rapidly begin intravenous crystalloid fluid resuscitation at 30 mL/kg for hypotension (MAP < 65 mm Hg) or serum lactate >= 4.0 mmol/L; and (5) Apply vasopressors (norepinephrine is the first-choice vasopressor) during or immediately after fluid resuscitation to restore and maintain a mean arterial pressure >= 65 mm Hg if fluid resuscitation alone fails."
      ],
      [
        "Withhold all intravenous antibiotics until sputum and urine culture sensitivities finalize at 48 hours",
        "Delaying antibiotics in septic shock significantly increases mortality with each passing hour of delay; broad-spectrum empiric therapy within 1 hour is mandatory."
      ],
      [
        "Infuse six liters of 0.9% normal saline before initiating any vasopressor agents",
        "Forced high-volume fluid resuscitation without early vasopressors causes severe fluid overload, acute pulmonary edema, and delayed arterial perfusion."
      ],
      [
        "Initiate dopamine as the preferred first-line vasopressor over norepinephrine",
        "Dopamine was shown in the SOAP II trial to cause significantly more tachyarrhythmias and higher mortality in septic shock compared to norepinephrine."
      ],
      [
        "Administer high-dose intravenous dexamethasone bolus prior to obtaining blood cultures",
        "Corticosteroids are indicated only as refractory septic shock rescue therapy (hydrocortisone 200 mg/day) when fluids and vasopressors fail, not in the initial Hour-1 bundle."
      ]
    ],
    "shortestValidSolution": "Septic shock Hour-1 Bundle = Lactate + blood cultures -> IV antibiotics + 30 mL/kg crystalloids + norepinephrine for MAP >= 65.",
    "necessaryInference": "Apply the Surviving Sepsis Campaign Hour-1 bundle sequence: lactate, cultures, broad-spectrum antibiotics within 1 hr, 30 mL/kg fluids, and norepinephrine.",
    "strongestDistractor": "Initiate dopamine as the preferred first-line vasopressor over norepinephrine",
    "distractorExclusion": "Norepinephrine is the definitive first-line vasopressor in septic shock; dopamine carries higher arrhythmia and mortality rates.",
    "citation": "Levy MM, Evans LE, Rhodes A. The Surviving Sepsis Campaign Bundle: 2018 Update. Intensive Care Med. 2018;44(6):925-928. PMID: 29675574.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/emergency medicine item on the Surviving Sepsis Campaign Hour-1 bundle components and execution.",
      "distractorExclusionNotes": "Excluded antibiotic delays and dopamine because early broad-spectrum antibiotics and norepinephrine are established bundle requirements.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0899
  {
    "code": "op-c-s3-0899",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Acute Carbon Monoxide Toxicity Co-Oximetry and Hyperbaric Oxygen Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man is rescued from a burning apartment building by firefighters. He was found unconscious in a smoke-filled bedroom. In the emergency department, he is awake but disoriented, complaining of a throbbing headache, dizziness, and nausea. Vital signs: blood pressure 132/84 mm Hg, heart rate 116/min, respiratory rate 22/min, and temperature 37.0 C. Standard standard finger pulse oximetry displays an oxygen saturation (SpO2) of 99% on room air. However, an arterial blood gas with co-oximetry reveals: pH 7.28, PaCO2 32 mm Hg, PaO2 94 mm Hg, and a Carboxyhemoglobin (COHb) level of 34% (normal for non-smokers < 3%). Serum lactate is 4.8 mmol/L. High-flow 100% normobaric oxygen via a nonrebreather mask is initiated immediately. Which of the following explains the misleadingly normal standard pulse oximetry, and what is the definitive therapeutic indication for Hyperbaric Oxygen (HBO) therapy?",
    "choices": [
      [
        "Standard pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin; hyperbaric oxygen is indicated for loss of consciousness, severe acidosis, or COHb > 25%",
        "Carbon monoxide (CO) is a colorless, odorless gas that binds hemoglobin with an affinity > 200 times higher than oxygen, forming carboxyhemoglobin (COHb). This shifts the oxygen-hemoglobin dissociation curve to the left (Haldane effect), preventing oxygen release to tissues and causing profound cellular hypoxia and mitochondrial cytochrome c oxidase inhibition. Crucial diagnostic pitfall: Standard two-wavelength pulse oximeters measure light absorption at 660 nm and 940 nm, where carboxyhemoglobin has identical absorption to oxyhemoglobin. The oximeter falsely reads COHb as oxyhemoglobin, displaying a falsely reassuring 'normal' saturation (99%). True diagnosis requires Blood Co-Oximetry, which uses multiple wavelengths to differentiate hemoglobin species. Treatment begins with 100% normobaric oxygen, which shortens the half-life of COHb from 300 minutes to 60-90 minutes. Indications for Hyperbaric Oxygen (HBO, 2.5-3.0 atm, half-life 20-30 min) include: (1) Transient or sustained loss of consciousness / coma, (2) Neurological deficits or cognitive impairment, (3) Severe metabolic acidosis (lactate elevation), (4) Evidence of myocardial ischemia (ECG changes, troponin elevation), or (5) COHb level > 25% (or > 15-20% in pregnant women, as fetal hemoglobin avidly binds CO)."
      ],
      [
        "The pulse oximeter was calibrated improperly; normobaric room air is sufficient because CO clears spontaneously in thirty minutes",
        "CO has a half-life of 4 to 5 hours on room air; 100% oxygen or hyperbaric oxygen is essential to displace CO from hemoglobin."
      ],
      [
        "Standard pulse oximetry measures methemoglobin, which cancels out carboxyhemoglobin; hyperbaric oxygen is strictly contraindicated",
        "Pulse oximeters cannot measure COHb; hyperbaric oxygen is life-saving and reduces persistent delayed neurocognitive sequelae."
      ],
      [
        "Intravenous methylene blue infusion is the definitive antidote to reduce carboxyhemoglobin to ferrous hemoglobin",
        "Methylene blue is the antidote for methemoglobinemia; it has zero efficacy for carbon monoxide toxicity and worsens tissue hypoxia."
      ],
      [
        "Immediate whole blood exchange transfusion is required because oxygen therapy cannot displace carbon monoxide",
        "High-flow oxygen and hyperbaric oxygen rapidly displace CO via mass action; exchange transfusion is dangerous and unnecessary."
      ]
    ],
    "shortestValidSolution": "Pulse oximeter can't tell COHb from OxyHb (reads 99%) -> co-oximetry COHb 34% + syncope/acidosis = Hyperbaric Oxygen (HBO).",
    "necessaryInference": "Recognize pulse oximetry limitations in carbon monoxide toxicity and identify clinical indications for hyperbaric oxygen therapy.",
    "strongestDistractor": "Intravenous methylene blue infusion is the definitive antidote to reduce carboxyhemoglobin to ferrous hemoglobin",
    "distractorExclusion": "Methylene blue treats methemoglobinemia; carbon monoxide toxicity requires 100% normobaric or hyperbaric oxygen therapy.",
    "citation": "Weaver LK. Clinical Practice. Carbon Monoxide Poisoning. N Engl J Med. 2009;360(12):1217-1225. PMID: 19297574.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine/toxicology item on pulse oximetry limitations and hyperbaric oxygen indications in carbon monoxide poisoning.",
      "distractorExclusionNotes": "Excluded methylene blue (methemoglobinemia specific) and room air dismissal because co-oximetry and hyperbaric oxygen are required.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0900
  {
    "code": "op-c-s3-0900",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Terminal Dyspnea Palliative Opioids and the Doctrine of Double Effect",
    "provisionalDifficulty": 4,
    "stem": "A 76-year-old man with metastatic non-small cell lung cancer and extensive bilateral malignant pleural effusions is admitted to the inpatient hospice palliative care unit. He is bedbound, cachectic, and actively dying, with an estimated prognosis of hours to a few days. He experiences excruciating, refractory air hunger (terminal dyspnea) and severe anxiety, with tachypnea (respiratory rate 38/min), prominent accessory muscle use, and gasping. The palliative care physician orders an intravenous morphine infusion titrated specifically to relieve his dyspnea. The bedside nurse hesitates to administer the titrated opioid, expressing moral distress: 'If I give this morphine to relieve his breathing distress, it might depress his respirations further and accelerate his death, which would make me responsible for euthanasia.' Which of the following ethical principles provides the foundational justification for administering titrated opioids to relieve severe suffering in actively dying patients?",
    "choices": [
      [
        "Doctrine of Double Effect, which permits an action intended to achieve a good result (relieving dyspnea) even if it carries a foreseeable, unintended secondary risk (potential respiratory depression)",
        "The management of refractory terminal dyspnea and severe pain near the end of life relies ethically upon the classical philosophical and bioethical principle known as the 'Doctrine of Double Effect' (Rule of Double Effect). The doctrine states that an action having two foreseeable effects—one good (relieving agonizing dyspnea and pain) and one bad (potentially accelerating death or causing respiratory depression)—is morally permissible if four conditions are met: (1) The act itself (administering analgesia) is good or morally neutral; (2) The physician's INTENTION is solely to achieve the good effect (relieving terminal distress), with the bad effect being an unintended, foreseen side effect, NOT the intended goal; (3) The bad effect is not the means to the good effect (death is not what relieves the pain); and (4) There is a proportionately serious reason (relieving unbearable dying distress) to accept the secondary risk. Furthermore, extensive palliative care clinical evidence demonstrates that properly titrated opioids relieve dyspnea WITHOUT shortening survival or hastening death. Withholding titrated opioids out of misplaced fear of respiratory depression violates non-maleficence and beneficence, condemning dying patients to agonizing, untreated air hunger."
      ],
      [
        "Principle of Non-Maleficence, which strictly forbids administering any medication that has potential physiological side effects",
        "Non-maleficence does not mean withholding all medications with side effects; allowing unbearable terminal dyspnea to go untreated constitutes severe medical harm."
      ],
      [
        "Doctrine of Paternalistic Beneficence, which empowers nurses to override physician orders based on personal religious beliefs",
        "Paternalism does not authorize staff to deny prescribed comfort care to dying patients based on personal moral misunderstandings."
      ],
      [
        "Principle of Utilitarian Resource Allocation, which directs medications away from terminally ill patients to save hospital budget",
        "Resource rationing has zero ethical standing in bedside symptom management of terminal palliative care patients."
      ],
      [
        "Active voluntary euthanasia, which allows clinicians to deliberately terminate life when suffering exceeds quality of life thresholds",
        "Palliative opioid administration is NOT euthanasia; euthanasia involves deliberate lethal intent to end life, whereas palliative titration intends solely to relieve suffering."
      ]
    ],
    "shortestValidSolution": "Titrating morphine for terminal dyspnea = Doctrine of Double Effect (intends relief of air hunger, secondary risk of death is unintended).",
    "necessaryInference": "Apply the Doctrine of Double Effect justifying opioid titration for terminal dyspnea when the primary intent is symptom relief.",
    "strongestDistractor": "Principle of Non-Maleficence, which strictly forbids administering any medication that has potential physiological side effects",
    "distractorExclusion": "Non-maleficence does not prohibit palliative opioids; allowing untreated dying dyspnea is harm. The Doctrine of Double Effect provides the ethical framework.",
    "citation": "Quill TE, Dresser R, Brock DW. The Rule of Double Effect--A Critique of Its Role in End-of-Life Decision Making. N Engl J Med. 1997;337(24):1768-1771. PMID: 9392705.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 palliative medicine/medical ethics item on applying the Doctrine of Double Effect to treat refractory terminal dyspnea.",
      "distractorExclusionNotes": "Excluded euthanasia and non-maleficence misconceptions because the Doctrine of Double Effect explicitly justifies palliative symptom relief.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
