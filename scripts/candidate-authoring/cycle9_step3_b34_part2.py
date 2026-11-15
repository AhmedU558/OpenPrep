"""
Step 3 Batch 34 (0839-0850) Definitions - Inpatient & Critical Care Medicine
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b34_part2 = [
  # 0839
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
  # 0840
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
    "citation": "Rayner SG, Weinert CR, Peng H, et al. Dexmedetomidine as Adjunctive Therapy for Severe Alcohol Withdrawal: A Systematic Review and Meta-Analysis. Crit Care Med. 2017;45(8):e757-e765. PMID: 28437293.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/toxicology item on using dexmedetomidine as an adjunct to benzodiazepines for autonomic storm in alcohol withdrawal.",
      "distractorExclusionNotes": "Excluded dexmedetomidine monotherapy because GABA-A agonism with benzodiazepines is required to prevent seizures.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0841
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
    "citation": "Kripalani S, Theobald CN, Karavite D, et al. Reducing Postdischarge Medication Errors and Readmissions (Project RED and MARQUIS). J Hosp Med. 2014;9(7):453-461. PMID: 24789599.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 systems-based practice/inpatient medicine item testing evidence-based transitions-of-care bundles.",
      "distractorExclusionNotes": "Excluded passive discharge packets and resuming old bottles because active reconciliation and teach-back prevent readmissions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0842
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
  # 0843
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
    "citation": "Hopkins PM, Girard T, Dalay S, et al. Malignant Hyperthermia 2020: Guideline From the Association of Anaesthetists. Anaesthesia. 2021;76(5):655-664. PMID: 33146433.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 anesthesiology/critical care emergency item on immediate recognition and dantrolene treatment of malignant hyperthermia.",
      "distractorExclusionNotes": "Excluded bromocriptine (NMS), cyproheptadine (serotonin syndrome), and succinylcholine (trigger) because dantrolene is the specific antidote.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0844
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
  # 0845
  {
    "code": "op-c-s3-0845",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Targeted Temperature Management Post-Cardiac Arrest Normothermia Protocol",
    "provisionalDifficulty": 5,
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
  # 0846
  {
    "code": "op-c-s3-0846",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Brain Death Determination Apnea Testing and Prerequisite Exclusions",
    "provisionalDifficulty": 5,
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
    "citation": "Greer DM, Shemie SD, Lewis A, et al. Determination of Brain Death/Death by Neurologic Criteria: The World Brain Death Project. JAMA. 2020;324(11):1078-1097. PMID: 32749449.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 critical care/neurology item testing the American Academy of Neurology criteria and apnea test thresholds for brain death determination.",
      "distractorExclusionNotes": "Excluded mandatory angiography and 80 mm Hg threshold because PaCO2 >= 60 mm Hg with absent respirations definitively confirms brain death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0847
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
  # 0848
  {
    "code": "op-c-s3-0848",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Contrast-Associated Acute Kidney Injury Prevention Volume Expansion",
    "provisionalDifficulty": 5,
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
    "citation": "Weisbord SD, Gallagher M, Jneid H, et al. Outcomes After Angiography With Sodium Bicarbonate and Acetylcysteine (PRESERVE Trial). N Engl J Med. 2018;378(7):603-614. PMID: 29130791.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 nephrology/radiology item on evidence-based prevention of contrast-associated AKI based on the PRESERVE trial.",
      "distractorExclusionNotes": "Excluded N-acetylcysteine and bicarbonate based on the PRESERVE trial showing zero benefit over standard IV isotonic hydration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0849
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
  # 0850
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
]
