import { CandidateSpec } from './types';

export const step2Batch19: CandidateSpec[] = [
  {
    "code": "op-c-s2-0451",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Ischemic Stroke and Blood Pressure Permissive Thresholds for Thrombolysis",
    "subtopic": "Intravenous Alteplase Eligibility, Labetalol Titration, Intracranial Hemorrhage Prevention",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man is brought to the emergency department by ambulance 75 minutes after the sudden onset of right-sided facial droop, right arm weakness, and severe expressive aphasia. He has a history of essential hypertension and type 2 diabetes mellitus. On physical examination, he is alert but unable to speak fluently, following one-step commands with difficulty. Neurological examination reveals dense right hemiplegia (motor strength 0/5 in right upper extremity, 2/5 in right lower extremity), right facial flattening, and expressive aphasia, yielding a National Institutes of Health Stroke Scale (NIHSS) score of 16. Emergent non-contrast head computed tomography (CT) reveals no acute intracranial hemorrhage, mass effect, or early ischemic changes (Alberta Stroke Program Early CT Score [ASPECTS] is 10). Blood glucose is 142 mg/dL, and platelet count is 260,000/mm3. Vital signs demonstrate blood pressure of 198/112 mm Hg, heart rate of 88/min, and respiratory rate of 16/min. The patient has no history of head trauma, prior stroke, gastrointestinal bleeding, or anticoagulant use.\n\nWhich of the following represents the most appropriate immediate management step before administering intravenous thrombolytic therapy?",
    "choices": [
      [
        "Administer intravenous labetalol (10 to 20 mg over 1 to 2 minutes) or nicardipine infusion to reduce blood pressure below 185/110 mm Hg prior to initiating intravenous alteplase or tenecteplase",
        "For patients with acute ischemic stroke presenting within the 4.5-hour thrombolytic window, intravenous thrombolysis (alteplase 0.9 mg/kg or tenecteplase 0.25 mg/kg) improves functional neurological outcomes. However, ELEVATED BLOOD PRESSURE IS A CRITICAL CONTRAINDICATION TO THROMBOLYSIS: (1) Safety Threshold: Intravenous thrombolysis cannot be administered if systolic blood pressure exceeds 185 mm Hg or diastolic blood pressure exceeds 110 mm Hg, because arterial hypertension markedly increases the risk of catastrophic symptomatic intracranial hemorrhage (sICH). (2) Management: Guidelines (AHA/ASA) mandate immediate active blood pressure lowering to SBP < 185 mm Hg and DBP < 110 mm Hg prior to thrombolysis, typically using intravenous labetalol (10-20 mg IV push, may repeat once) or a titratable nicardipine infusion (5-15 mg/h). (3) Post-Thrombolysis Target: Once thrombolysis is initiated, blood pressure must be rigorously maintained below 180/105 mm Hg for at least the subsequent 24 hours. If blood pressure cannot be maintained below 185/110 mm Hg, intravenous thrombolytic therapy must not be administered."
      ],
      [
        "Immediately infuse intravenous alteplase 0.9 mg/kg while permitting blood pressure to remain at 198/112 mm Hg to preserve collateral penumbral cerebral perfusion",
        "Administering intravenous thrombolytic therapy with blood pressure > 185/110 mm Hg causes a dramatic surge in fatal symptomatic intracranial hemorrhage; lowering BP below 185/110 is an absolute prerequisite."
      ],
      [
        "Administer intravenous nitroprusside bolus targeting an immediate reduction of systolic blood pressure to 120 mm Hg",
        "Precipitous blood pressure reduction below 140 mm Hg in acute ischemic stroke collapses cerebral perfusion pressure across the ischemic penumbra, precipitating irreversible infarct expansion."
      ],
      [
        "Administer oral aspirin 325 mg and clopidogrel 300 mg immediately, withholding thrombolysis due to the elevated blood pressure",
        "Hypertension is readily treatable with IV labetalol or nicardipine; withholding thrombolytic therapy in an eligible patient presenting at 75 minutes with severe deficits (NIHSS 16) causes permanent severe disability."
      ],
      [
        "Perform emergent lumbar puncture to rule out subarachnoid hemorrhage before administering antihypertensive therapy",
        "Non-contrast head CT has > 95% sensitivity for subarachnoid hemorrhage within the first 6 hours; lumbar puncture is unnecessary, delays thrombolysis, and introduces an arterial puncture site contraindicating thrombolysis."
      ]
    ],
    "rationale": "In acute ischemic stroke, intravenous thrombolysis (alteplase or tenecteplase) within 4.5 hours improves functional recovery. However, blood pressure > 185/110 mm Hg significantly elevates the risk of fatal symptomatic intracranial hemorrhage (sICH). Guidelines mandate lowering BP below 185/110 mm Hg using IV labetalol or nicardipine before administering the thrombolytic agent, and maintaining BP < 180/105 mm Hg for the first 24 hours post-thrombolysis. Thrombolysis is contraindicated if BP remains refractory above 185/110 mm Hg.",
    "metadata": {
      "shortSolution": "Acute ischemic stroke within 4.5 hours with BP 198/112 mm Hg requires IV labetalol/nicardipine to lower BP < 185/110 mm Hg before administering IV alteplase/tenecteplase to prevent intracranial hemorrhage.",
      "competingChoice": "Immediately infuse intravenous alteplase 0.9 mg/kg while permitting blood pressure to remain at 198/112 mm Hg to preserve collateral penumbral cerebral perfusion",
      "exclusionFinding": "Administering thrombolytics with BP >= 185/110 mm Hg carries severe risk of fatal intracranial hemorrhage; BP must be actively lowered below 185/110 mm Hg before thrombolysis.",
      "pedagogicalValue": "Recognizing the blood pressure thresholds for thrombolysis in acute ischemic stroke: < 185/110 mm Hg pre-treatment and < 180/105 mm Hg post-treatment.",
      "citations": [
        "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418. PMID: 31662037.",
        "Mendelson SJ, Prabhakaran S. Diagnosis and Management of Transient Ischemic Attack and Acute Ischemic Stroke: A Review. JAMA. 2021;325(11):1088-1098. PMID: 33724327."
      ]
    },
    "critique": {
      "shortestValidSolution": "Stroke within 4.5h + BP 198/112 -> give IV labetalol/nicardipine to achieve BP < 185/110 before giving IV thrombolytic.",
      "strongestCompetitor": "Immediately infuse intravenous alteplase 0.9 mg/kg while permitting blood pressure to remain at 198/112 mm Hg to preserve collateral penumbral cerebral perfusion",
      "exclusionFinding": "Thrombolysis with BP > 185/110 mm Hg carries extreme risk of symptomatic intracranial hemorrhage.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute ischemic stroke within 4.5 hours with BP 198/112 mm Hg requires IV labetalol/nicardipine to lower BP < 185/110 mm Hg before administering IV alteplase/tenecteplase to prevent intracranial hemorrhage.",
      "distractorExclusionNotes": "Distractor exclusion verified: Administering thrombolytics with BP >= 185/110 mm Hg carries severe risk of fatal intracranial hemorrhage; BP must be actively lowered below 185/110 mm Hg before thrombolysis.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute ischemic stroke within 4.5 hours with BP 198/112 mm Hg requires IV labetalol/nicardipine to lower BP < 185/110 mm Hg before administering IV alteplase/tenecteplase to prevent intracranial hemorrhage.",
    "necessaryInference": "Acute ischemic stroke within 4.5 hours with BP 198/112 mm Hg requires IV labetalol/nicardipine to lower BP < 185/110 mm Hg before administering IV alteplase/tenecteplase to prevent intracranial hemorrhage.",
    "strongestDistractor": "Immediately infuse intravenous alteplase 0.9 mg/kg while permitting blood pressure to remain at 198/112 mm Hg to preserve collateral penumbral cerebral perfusion",
    "distractorExclusion": "Administering thrombolytics with BP >= 185/110 mm Hg carries severe risk of fatal intracranial hemorrhage; BP must be actively lowered below 185/110 mm Hg before thrombolysis.",
    "citation": "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke. Stroke. 2019;50(12):e344-e418. PMID: 31662037."
  },
  {
    "code": "op-c-s2-0452",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Large Vessel Occlusion (LVO) and Endovascular Thrombectomy",
    "subtopic": "Extended Window (6-24 Hours), DAWN/DEFUSE-3 Criteria, Mismatch Ratio",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman is brought to the hospital by her daughter. The patient was last known to be at her normal neurological baseline when going to bed at 10:00 PM the previous evening. At 7:00 AM this morning (9 hours after last known well), her daughter found her slumped in a chair, mute, with flaccid paralysis of the left face, arm, and leg. On examination, the patient has forced right gaze deviation, left homonymous hemianopsia, profound left hemiplegia, and complete hemineglect, corresponding to an NIHSS score of 20. Non-contrast head CT reveals no hemorrhage and an ASPECTS score of 8. CT angiography (CTA) of the head and neck demonstrates an acute, complete occlusion of the M1 segment of the right middle cerebral artery. CT perfusion (CTP) imaging reveals an ischemic core volume (cerebral blood flow < 30%) of 18 mL and a total hypoperfused penumbra volume (Tmax > 6 seconds) of 110 mL, yielding an absolute mismatch volume of 92 mL and a mismatch ratio of 6.1. Vital signs show blood pressure of 158/88 mm Hg, heart rate of 76/min, and oxygen saturation of 97% on ambient air.\n\nWhich of the following represents the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform emergent mechanical endovascular thrombectomy with a stent retriever or contact aspiration catheter",
        "Mechanical Endovascular Thrombectomy (EVT) has transformed the management of acute ischemic stroke secondary to Large Vessel Occlusion (LVO) of the anterior circulation (internal carotid artery or M1 segment of the middle cerebral artery). (1) TRADITIONAL WINDOW: EVT is standard of care within 6 hours of symptom onset. (2) EXTENDED WINDOW (6 TO 24 HOURS): Landmark trials (DAWN and DEFUSE-3) established that EVT provides profound clinical benefit in patients presenting between 6 and 24 hours from last known well (including wake-up strokes) when physiological imaging demonstrates a SALVAGEABLE PENUMBRA: (a) Small ischemic core (infarcted tissue that cannot be saved, typically core volume < 50-70 mL on CT perfusion or diffusion-weighted MRI), and (b) Large mismatch ratio (penumbra to core ratio >= 1.8, mismatch volume >= 15 mL) or clinical-core mismatch (high NIHSS >= 10 with small core). (3) APPLICATION: This patient presents at 9 hours with an M1 occlusion, a tiny core of only 18 mL, and a massive mismatch volume of 92 mL (ratio 6.1), representing substantial salvageable brain tissue at risk. Immediate mechanical thrombectomy is indicated. (Note: Intravenous alteplase is only FDA-approved up to 4.5 hours from last known well and is not indicated here at 9 hours)."
      ],
      [
        "Administer intravenous tenecteplase 0.25 mg/kg bolus, withholding mechanical intervention",
        "Intravenous thrombolysis is restricted to within 4.5 hours of last known well in routine clinical practice; this patient is 9 hours from last known well and thrombolysis is contraindicated."
      ],
      [
        "Initiate oral aspirin 325 mg and high-intensity atorvastatin 80 mg daily, admitting to the neuro step-down unit for conservative therapy",
        "Conservative antiplatelet therapy for acute anterior circulation LVO with large salvageable penumbra results in massive complete middle cerebral artery infarction, brain herniation, and death or severe dependency in > 80% of patients."
      ],
      [
        "Administer continuous intravenous unfractionated heparin infusion targeting an activated partial thromboplastin time (aPTT) of 60 to 80 seconds",
        "Therapeutic heparin in acute ischemic stroke does not improve clinical outcomes and significantly increases intracranial hemorrhagic transformation."
      ],
      [
        "Perform emergent right hemicraniectomy prior to any vascular revascularization attempts",
        "Decompressive hemicraniectomy is a surgical rescue for life-threatening malignant cerebral edema with midline shift, not an initial treatment for acute revascularizable large vessel occlusion."
      ]
    ],
    "rationale": "Endovascular mechanical thrombectomy (EVT) is the standard of care for acute ischemic stroke caused by anterior circulation large vessel occlusion (ICA or proximal MCA). Under the DAWN and DEFUSE-3 criteria, patients presenting within 6 to 24 hours of last known well (including wake-up strokes) who have a favorable neuroimaging mismatch profile (small ischemic core < 50-70 mL and large salvageable ischemic penumbra with mismatch ratio >= 1.8) derive dramatic functional benefit from mechanical thrombectomy. Intravenous thrombolysis is outside its 4.5-hour therapeutic window.",
    "metadata": {
      "shortSolution": "Stroke at 9 hours with right M1 occlusion, small core (18 mL), and large salvageable penumbra (mismatch ratio 6.1) meets DEFUSE-3/DAWN criteria for emergent mechanical thrombectomy up to 24 hours.",
      "competingChoice": "Administer intravenous tenecteplase 0.25 mg/kg bolus, withholding mechanical intervention",
      "exclusionFinding": "Patient is 9 hours from last known well; intravenous thrombolysis is contraindicated outside the 4.5-hour window, whereas mechanical thrombectomy is proven beneficial up to 24 hours with perfusion mismatch.",
      "pedagogicalValue": "Understanding the extended therapeutic window (6-24 hours) for endovascular thrombectomy in anterior circulation large vessel occlusion based on perfusion mismatch (DAWN/DEFUSE-3 trials).",
      "citations": [
        "Nogueira RG, Jadhav AP, Haussen DC, et al. Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct. N Engl J Med. 2018;378(1):11-21. PMID: 29129157.",
        "Albers GW, Marks MP, Kemp S, et al. Thrombectomy for Stroke at 6 to 16 Hours with Selection by Perfusion Imaging. N Engl J Med. 2018;378(8):708-718. PMID: 29364767."
      ]
    },
    "critique": {
      "shortestValidSolution": "LVO (M1 occlusion) at 9 hours + small core (18 mL) / large penumbra (mismatch 6.1) -> mechanical endovascular thrombectomy (DEFUSE-3/DAWN).",
      "strongestCompetitor": "Administer intravenous tenecteplase 0.25 mg/kg bolus, withholding mechanical intervention",
      "exclusionFinding": "IV thrombolysis is off-label/contraindicated at 9 hours; mechanical thrombectomy is indicated up to 24 hours for LVO with perfusion mismatch.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Stroke at 9 hours with right M1 occlusion, small core (18 mL), and large salvageable penumbra (mismatch ratio 6.1) meets DEFUSE-3/DAWN criteria for emergent mechanical thrombectomy up to 24 hours.",
      "distractorExclusionNotes": "Distractor exclusion verified: Patient is 9 hours from last known well; intravenous thrombolysis is contraindicated outside the 4.5-hour window, whereas mechanical thrombectomy is proven beneficial up to 24 hours with perfusion mismatch.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Stroke at 9 hours with right M1 occlusion, small core (18 mL), and large salvageable penumbra (mismatch ratio 6.1) meets DEFUSE-3/DAWN criteria for emergent mechanical thrombectomy up to 24 hours.",
    "necessaryInference": "Stroke at 9 hours with right M1 occlusion, small core (18 mL), and large salvageable penumbra (mismatch ratio 6.1) meets DEFUSE-3/DAWN criteria for emergent mechanical thrombectomy up to 24 hours.",
    "strongestDistractor": "Administer intravenous tenecteplase 0.25 mg/kg bolus, withholding mechanical intervention",
    "distractorExclusion": "Patient is 9 hours from last known well; intravenous thrombolysis is contraindicated outside the 4.5-hour window, whereas mechanical thrombectomy is proven beneficial up to 24 hours with perfusion mismatch.",
    "citation": "Nogueira RG, Jadhav AP, Haussen DC, et al. Thrombectomy 6 to 24 Hours after Stroke with a Mismatch between Deficit and Infarct. N Engl J Med. 2018;378(1):11-21. PMID: 29129157."
  },
  {
    "code": "op-c-s2-0453",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Status Epilepticus Pharmacotherapy Escalation Sequence",
    "subtopic": "Benzodiazepine Resistance, Second-Line Antiseizure Medications, Levetiracetam",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman with a history of focal epilepsy is brought to the emergency department by paramedics in active generalized tonic-clonic status epilepticus. Paramedics administered intravenous lorazepam 4 mg en route 10 minutes ago, but continuous convulsive motor activity persisted. Upon arrival in the resuscitation bay, she remains actively seizing with continuous generalized clonic movements of all four extremities, rhythmic eye blinking, and jaw clenching. Vital signs demonstrate blood pressure of 148/92 mm Hg, heart rate of 132/min, respiratory rate of 22/min, and oxygen saturation of 94% on a non-rebreather mask. Fingerstick blood glucose is 118 mg/dL. A second dose of intravenous lorazepam 4 mg is administered immediately. Five minutes later (total seizure duration now 25 minutes), continuous bilateral clonic motor activity persists without cessation.\n\nWhich of the following represents the most appropriate next pharmacological intervention?",
    "choices": [
      [
        "Administer intravenous levetiracetam (60 mg/kg, maximum 4,500 mg) or intravenous fosphenytoin (20 mg PE/kg) as a second-line urgent antiseizure medication",
        "Status epilepticus (SE) is defined as continuous seizure activity lasting >= 5 minutes, or two or more seizures without full recovery of consciousness between them. As seizure activity continues beyond 10 to 30 minutes, GABA-A receptors undergo rapid clathrin-mediated internal endocytosis from synaptic membranes, leading to pharmacodynamic TOLERANCE to benzodiazepines, while excitatory NMDA receptors proliferate. PHARMACOTHERAPY ESCALATION (AES GUIDELINES / ESETT TRIAL): (1) PHASE 1 (0 to 10 min): Initial emergent therapy is a parenteral benzodiazepine: intravenous lorazepam (0.1 mg/kg, typically 4 mg IV push, repeated once at 5-10 min) or intramuscular midazolam (10 mg IM). (2) PHASE 2 (10 to 30 min - URGENT CONTROL): If seizure activity persists after two full doses of benzodiazepines, repeating further benzodiazepines causes respiratory arrest and hypotension without seizure cessation due to GABA receptor downregulation. The mandatory next step is administration of a NON-BENZODIAZEPINE SECOND-LINE ANTISEIZURE MEDICATION given as a rapid intravenous infusion. The landmark ESETT (Established Status Epilepticus Trial) trial demonstrated that LEVETIRACETAM (60 mg/kg IV, max 4,500 mg), FOSPHENYTOIN (20 mg PE/kg IV, max 1,500 mg PE), and VALPROATE SODIUM (40 mg/kg IV, max 3,000 mg) have equivalent efficacy (~45-50% seizure termination at 60 min) and safety profiles. (3) PHASE 3 (> 30-40 min - REFRACTORY SE): If seizures continue despite second-line therapy, the patient has refractory status epilepticus requiring endotracheal intubation and continuous anesthetic infusions (propofol, midazolam, or ketamine)."
      ],
      [
        "Administer a third and fourth dose of intravenous lorazepam 4 mg every 5 minutes until convulsive movements cease",
        "Repeated benzodiazepine dosing beyond 2 adequate doses fails because synaptic GABA-A receptors become internalized; it risks respiratory arrest while delaying definitive second-line therapy."
      ],
      [
        "Initiate oral carbamazepine suspension via a nasogastric tube at a dose of 200 mg every 8 hours",
        "Carbamazepine is an oral agent with slow absorption and erratic bioavailability; it has no role in the urgent management of status epilepticus."
      ],
      [
        "Administer continuous intravenous neuromuscular blockade with vecuronium to abolish skeletal muscle contractions",
        "Paralytics abolish peripheral muscle contractions but leave cortical electrical status epilepticus entirely unsuppressed, causing ongoing excitotoxic cerebral necrosis while masking seizures."
      ],
      [
        "Administer intravenous mannitol 1 g/kg to reduce presumptive acute cerebral edema",
        "Osmotic therapy with mannitol is indicated for intracranial hypertension and herniation, not for terminating cortical epileptic seizure discharges."
      ]
    ],
    "rationale": "Status epilepticus management follows a strict time-based protocol (AES guidelines). Phase 1 (first 5-10 min) utilizes benzodiazepines (IV lorazepam 4 mg x 2 doses). If seizures persist beyond 2 doses (established status epilepticus, 10-30 min), synaptic GABA-A receptors downregulate, rendering benzodiazepines ineffective. Phase 2 requires immediate infusion of a second-line intravenous antiseizure medication: levetiracetam (60 mg/kg), fosphenytoin (20 mg PE/kg), or valproate (40 mg/kg), which showed equivalent ~50% efficacy in the ESETT trial. General anesthesia (propofol/midazolam) is reserved for refractory SE failing second-line therapy.",
    "metadata": {
      "shortSolution": "Seizure persisting after 2 doses of IV lorazepam represents established status epilepticus; guidelines mandate immediate second-line IV antiseizure medication (levetiracetam, fosphenytoin, or valproate).",
      "competingChoice": "Administer a third and fourth dose of intravenous lorazepam 4 mg every 5 minutes until convulsive movements cease",
      "exclusionFinding": "Synaptic GABA receptors internalize after prolonged seizures; repeating benzodiazepines causes respiratory arrest without terminating the seizure and delays second-line therapy.",
      "pedagogicalValue": "Mastering the status epilepticus escalation sequence: 2 doses of benzodiazepine -> immediate second-line IV agent (levetiracetam/fosphenytoin/valproate) -> general anesthesia/intubation if refractory.",
      "citations": [
        "Kapur J, Elm J, Chamberlain JM, et al. Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus. N Engl J Med. 2019;381(22):2103-2113. PMID: 31774953.",
        "Glauser T, Shinnar S, Gloss D, et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults: Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016;16(1):48-61. PMID: 26900382."
      ]
    },
    "critique": {
      "shortestValidSolution": "Status epilepticus failing 2 doses of lorazepam -> give second-line IV antiseizure agent (levetiracetam, fosphenytoin, or valproate sodium).",
      "strongestCompetitor": "Administer a third and fourth dose of intravenous lorazepam 4 mg every 5 minutes until convulsive movements cease",
      "exclusionFinding": "Synaptic GABA-A receptor downregulation causes benzodiazepine resistance; repeating lorazepam causes apnea and delays definitive control.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Seizure persisting after 2 doses of IV lorazepam represents established status epilepticus; guidelines mandate immediate second-line IV antiseizure medication (levetiracetam, fosphenytoin, or valproate).",
      "distractorExclusionNotes": "Distractor exclusion verified: Synaptic GABA receptors internalize after prolonged seizures; repeating benzodiazepines causes respiratory arrest without terminating the seizure and delays second-line therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Seizure persisting after 2 doses of IV lorazepam represents established status epilepticus; guidelines mandate immediate second-line IV antiseizure medication (levetiracetam, fosphenytoin, or valproate).",
    "necessaryInference": "Seizure persisting after 2 doses of IV lorazepam represents established status epilepticus; guidelines mandate immediate second-line IV antiseizure medication (levetiracetam, fosphenytoin, or valproate).",
    "strongestDistractor": "Administer a third and fourth dose of intravenous lorazepam 4 mg every 5 minutes until convulsive movements cease",
    "distractorExclusion": "Synaptic GABA receptors internalize after prolonged seizures; repeating benzodiazepines causes respiratory arrest without terminating the seizure and delays second-line therapy.",
    "citation": "Kapur J, Elm J, Chamberlain JM, et al. Randomized Trial of Three Anticonvulsant Medications for Status Epilepticus. N Engl J Med. 2019;381(22):2103-2113. PMID: 31774953."
  },
  {
    "code": "op-c-s2-0454",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Spontaneous Intracerebral Hemorrhage (ICH) and Anticoagulation Reversal",
    "subtopic": "Factor Xa Inhibitor Reversal, Blood Pressure Lowering Targets, Andexanet Alfa",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old man with non-valvular atrial fibrillation managed with oral apixaban (5 mg twice daily; last dose taken 4 hours ago) presents to the emergency department with sudden severe headache, vomiting, and acute left-sided weakness that began 90 minutes ago. Physical examination reveals an obtunded man with Glasgow Coma Scale score of 10 (E2V3M5). Neurological examination demonstrates dense left hemiplegia and left facial droop. Vital signs show blood pressure of 192/108 mm Hg, heart rate of 82/min, and respiratory rate of 18/min. Non-contrast head CT demonstrates an acute 32-mL hyperdense intraparenchymal hematoma within the right basal ganglia (putamen) with 4 mm of midline shift and surrounding vasogenic edema, with no intraventricular extension. Laboratory evaluation reveals platelet count of 210,000/mm3, serum creatinine of 1.1 mg/dL, and prothrombin time/INR of 1.4.\n\nWhich of the following represents the most appropriate immediate medical management strategy for this patient?",
    "choices": [
      [
        "Immediate intravenous administration of andexanet alfa (or 4-factor prothrombin complex concentrate if unavailable) combined with rapid intravenous blood pressure lowering targeting a systolic blood pressure between 130 and 140 mm Hg",
        "Spontaneous Intracerebral Hemorrhage (ICH) in the setting of oral anticoagulant therapy is an extreme medical emergency carrying a 30-day mortality approaching 50%, primarily driven by early hematoma expansion within the first 6 to 24 hours. Emergency management requires two simultaneous, time-critical interventions: (1) IMMEDIATE ANTICOAGULATION REVERSAL: For direct oral factor Xa inhibitors (apixaban, rivaroxaban) ingested recently, the specific reversal agent is intravenous ANDEXANET ALFA (a recombinant modified human factor Xa decoy protein that binds and sequesters factor Xa inhibitors with high affinity). If andexanet alfa is unavailable or contraindicated, 4-factor Prothrombin Complex Concentrate (4F-PCC; 50 U/kg IV) should be immediately administered. Fresh frozen plasma (FFP) is inadequate due to volume overload and slow reversal. (2) ACUTE BLOOD PRESSURE CONTROL: Elevated systolic blood pressure drives persistent extravasation and hematoma expansion. Landmark randomized clinical trials (INTERACT-2, ATACH-2) and the AHA/ASA 2022 Guidelines recommend rapid, smooth blood pressure reduction using titratable intravenous agents (e.g., nicardipine or labetalol) to a TARGET SYSTOLIC BLOOD PRESSURE OF 130 TO 140 MM HG. ATACH-2 demonstrated that targeting SBP < 130 mm Hg precipitously (e.g., < 120 mm Hg) increased renal adverse events without clinical benefit; thus, 130-140 mm Hg is the optimal safe target range."
      ],
      [
        "Immediate administration of intravenous idarucizumab followed by blood pressure reduction targeting systolic blood pressure < 110 mm Hg",
        "Idarucizumab is a monoclonal antibody fragment specific for dabigatran (direct thrombin inhibitor); it has zero activity against apixaban (factor Xa inhibitor). Furthermore, lowering SBP < 110 mm Hg causes acute kidney injury and hypoperfusion."
      ],
      [
        "Transfusion of 4 units of fresh frozen plasma and 2 units of platelets, while maintaining systolic blood pressure at 160 to 180 mm Hg to preserve cerebral perfusion",
        "FFP takes hours to thaw and infuse, causes severe volume overload, and fails to rapidly reverse factor Xa inhibitors; platelets are harmful in non-thrombocytopenic ICH (PATCH trial)."
      ],
      [
        "Immediate administration of high-dose intravenous dexamethasone 10 mg to reduce perihematomal vasogenic edema",
        "Systemic corticosteroids in acute spontaneous ICH have no benefit, significantly increase infectious and hyperglycemic complications, and increase mortality."
      ],
      [
        "Administration of intravenous protamine sulfate and vitamin K 10 mg slow IV push",
        "Protamine reverses unfractionated heparin, and vitamin K reverses warfarin (takes 12-24 hours); neither has any activity against apixaban."
      ]
    ],
    "rationale": "In acute spontaneous ICH associated with direct factor Xa inhibitors (apixaban/rivaroxaban), immediate management centers on two pillars: (1) Specific anticoagulation reversal with andexanet alfa (or 4F-PCC if andexanet alfa is not available) to arrest hematoma expansion. (2) Rapid, controlled blood pressure lowering using intravenous labetalol or nicardipine targeting a systolic blood pressure of 130 to 140 mm Hg (AHA/ASA guidelines). Idarucizumab is specific only for dabigatran. Platelet transfusions in non-thrombocytopenic ICH worsen outcomes (PATCH trial).",
    "metadata": {
      "shortSolution": "Apixaban-associated ICH with BP 192/108 mm Hg requires immediate reversal with andexanet alfa (or 4F-PCC) and rapid BP lowering targeting SBP 130-140 mm Hg.",
      "competingChoice": "Immediate administration of intravenous idarucizumab followed by blood pressure reduction targeting systolic blood pressure < 110 mm Hg",
      "exclusionFinding": "Idarucizumab only reverses dabigatran (direct thrombin inhibitor), not apixaban (factor Xa inhibitor); dropping SBP < 110 mm Hg causes renal injury.",
      "pedagogicalValue": "Selecting specific reversal agents for DOACs (andexanet alfa for apixaban/rivaroxaban; idarucizumab for dabigatran) and knowing the blood pressure target (SBP 130-140 mm Hg) for acute ICH.",
      "citations": [
        "Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2022;53(7):e282-e361. PMID: 35579034.",
        "Connolly SJ, Crowther M, Eikelboom JW, et al. Full Study Report of Andexanet Alfa for Reversal of Factor Xa Inhibitors. N Engl J Med. 2019;380(14):1326-1335. PMID: 30730782."
      ]
    },
    "critique": {
      "shortestValidSolution": "Apixaban ICH + BP 192/108 -> andexanet alfa (or 4F-PCC) + IV BP lowering to target SBP 130-140 mm Hg.",
      "strongestCompetitor": "Immediate administration of intravenous idarucizumab followed by blood pressure reduction targeting systolic blood pressure < 110 mm Hg",
      "exclusionFinding": "Idarucizumab is specific to dabigatran; apixaban requires andexanet alfa or 4F-PCC.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Apixaban-associated ICH with BP 192/108 mm Hg requires immediate reversal with andexanet alfa (or 4F-PCC) and rapid BP lowering targeting SBP 130-140 mm Hg.",
      "distractorExclusionNotes": "Distractor exclusion verified: Idarucizumab only reverses dabigatran (direct thrombin inhibitor), not apixaban (factor Xa inhibitor); dropping SBP < 110 mm Hg causes renal injury.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Apixaban-associated ICH with BP 192/108 mm Hg requires immediate reversal with andexanet alfa (or 4F-PCC) and rapid BP lowering targeting SBP 130-140 mm Hg.",
    "necessaryInference": "Apixaban-associated ICH with BP 192/108 mm Hg requires immediate reversal with andexanet alfa (or 4F-PCC) and rapid BP lowering targeting SBP 130-140 mm Hg.",
    "strongestDistractor": "Immediate administration of intravenous idarucizumab followed by blood pressure reduction targeting systolic blood pressure < 110 mm Hg",
    "distractorExclusion": "Idarucizumab only reverses dabigatran (direct thrombin inhibitor), not apixaban (factor Xa inhibitor); dropping SBP < 110 mm Hg causes renal injury.",
    "citation": "Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the Management of Patients With Spontaneous Intracerebral Hemorrhage: A Guideline From the American Heart Association/American Stroke Association. Stroke. 2022;53(7):e282-e361. PMID: 35579034."
  },
  {
    "code": "op-c-s2-0455",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Aneurysmal Subarachnoid Hemorrhage (aSAH) and Vasospasm Prevention",
    "subtopic": "Nimodipine Administration, Euvolemia Maintenance, Endovascular Coiling",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old woman is brought to the emergency department after experiencing a sudden, explosive headache ('the worst headache of my life') while lifting weights at the gym 3 hours ago, followed by several episodes of vomiting and transient loss of consciousness. On arrival, she is alert and oriented but in severe pain with marked photophobia and neck stiffness (positive Kernig and Brudzinski signs). Neurological examination reveals no focal cranial nerve or motor deficits (Hunt and Hess Grade 2; World Federation of Neurosurgical Societies Grade 1). Emergent non-contrast head CT demonstrates extensive hyperattenuating blood filling the basal cisterns, sylvian fissures, and fourth ventricle (Fisher Grade 3). CT angiography of the cerebral circulation reveals a 6-mm saccular aneurysm of the anterior communicating artery with an irregular dome. Vital signs demonstrate blood pressure of 144/86 mm Hg, heart rate of 78/min, and core body temperature of 37.1 C.\n\nIn addition to urgent neurointerventional consultation for aneurysm securing, which of the following represents the most appropriate pharmacotherapy to improve neurological outcomes and prevent delayed cerebral ischemia?",
    "choices": [
      [
        "Initiate oral or nasogastric nimodipine (60 mg every 4 hours for 21 consecutive days) while maintaining strict euvolemia with isotonic crystalloids",
        "Aneurysmal Subarachnoid Hemorrhage (aSAH) carries significant morbidity and mortality from two distinct phases: (1) EARLY REBLEEDING: Maximal in the first 24 hours (~4-10%); prevented by prompt surgical clipping or endovascular coiling. (2) DELAYED CEREBRAL ISCHEMIA (DCI) / VASOSPASM: Typically occurs between days 4 and 14 post-hemorrhage (peaking at days 7-10), caused by toxic breakdown products of subarachnoid erythrocyte lysis (oxyhemoglobin, endothelin-1, free radicals) inducing microvascular spasm, cortical spreading depolarization, and cerebral infarction. PHARMACOTHERAPY AND PREVENTION (AHA/ASA GUIDELINES): (a) NIMODIPINE: Oral or enteral nimodipine (60 mg every 4 hours for 21 days) is the ONLY medication proven in randomized clinical trials to reduce poor neurological outcomes and cerebral infarction in aSAH. It acts as a lipophilic dihydropyridine calcium channel blocker with cerebrovascular selectivity and neuroprotective cytoprotective effects. It MUST BE ADMINISTERED ORALLY OR VIA NASOGASTRIC TUBE; INTRAVENOUS NIMODIPINE IS STRICTLY PROHIBITED due to severe fatal systemic hypotension. (b) VOLEMIC STATUS: Strict EUVOLEMIA must be maintained using isotonic intravenous fluids (0.9% normal saline). Routine 'Triple-H therapy' (hypervolemia, hemodilution, hypertension) is OBSOLETE; prophylactic hypervolemia causes pulmonary edema and myocardial ischemia without improving outcomes."
      ],
      [
        "Administer continuous intravenous nimodipine infusion at 2 mg/hour to achieve rapid and reliable plasma concentrations",
        "Intravenous administration of nimodipine is strictly contraindicated by the FDA (black box warning) because it causes catastrophic, refractory systemic cardiovascular collapse and death."
      ],
      [
        "Initiate aggressive prophylactic 'Triple-H therapy' with aggressive hypervolemic fluid loading (5 liters/day normal saline) to achieve a CVP > 12 mm Hg",
        "Prophylactic hypervolemia and hemodilution are obsolete; they cause pulmonary edema, congestive heart failure, and hyponatremia without preventing vasospasm. Guidelines recommend euvolemia."
      ],
      [
        "Administer intravenous magnesium sulfate continuous infusion targeting a supra-therapeutic serum magnesium of 4.5 to 5.5 mg/dL",
        "The MASH-2 trial demonstrated that routine magnesium infusions do not reduce delayed cerebral ischemia or improve neurological outcomes in aneurysmal SAH."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 500 mg every 12 hours to suppress meningeal inflammatory irritation",
        "Systemic corticosteroids do not improve clinical outcomes in aneurysmal subarachnoid hemorrhage and increase risks of hyperglycemia and infection."
      ]
    ],
    "rationale": "Delayed cerebral ischemia (DCI) due to cerebral vasospasm occurs 4 to 14 days after aneurysmal subarachnoid hemorrhage. Oral nimodipine (60 mg orally every 4 hours for 21 days) is the only pharmacological agent proven in randomized trials to improve neurological outcomes and reduce cerebral infarction in aSAH (AHA/ASA guidelines). It must be given orally or via NG tube (IV administration is banned due to fatal hypotension). Prophylactic hypervolemia ('Triple-H') is obsolete; maintaining euvolemia with isotonic fluids is standard.",
    "metadata": {
      "shortSolution": "Aneurysmal SAH requires oral nimodipine (60 mg every 4h for 21 days) and strict euvolemia to prevent delayed cerebral ischemia and vasospasm.",
      "competingChoice": "Administer continuous intravenous nimodipine infusion at 2 mg/hour to achieve rapid and reliable plasma concentrations",
      "exclusionFinding": "Intravenous nimodipine is strictly contraindicated (FDA black-box warning) due to severe fatal hypotension; nimodipine must be given orally/enterally.",
      "pedagogicalValue": "Oral nimodipine is the definitive therapy for delayed cerebral ischemia in aSAH; IV formulation is contraindicated; hypervolemia is no longer recommended.",
      "citations": [
        "Connolly ES Jr, Rabinstein AA, Carhuapoma JR, et al. Guidelines for the management of aneurysmal subarachnoid hemorrhage: a guideline for healthcare professionals from the American Heart Association/American Stroke Association. Stroke. 2012;43(6):1711-1737. PMID: 22556195.",
        "Pickard JD, Murray GD, Illingworth R, et al. Effect of oral nimodipine on cerebral infarction and outcome after subarachnoid haemorrhage: British aneurysm nimodipine trial. BMJ. 1989;298(6674):636-642. PMID: 2496789."
      ]
    },
    "critique": {
      "shortestValidSolution": "aSAH + aneurysm -> oral nimodipine (60 mg q4h x 21 days) + euvolemia to prevent delayed cerebral ischemia.",
      "strongestCompetitor": "Administer continuous intravenous nimodipine infusion at 2 mg/hour to achieve rapid and reliable plasma concentrations",
      "exclusionFinding": "IV nimodipine carries an FDA black-box warning for fatal hypotension; oral/enteral route is mandatory.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Aneurysmal SAH requires oral nimodipine (60 mg every 4h for 21 days) and strict euvolemia to prevent delayed cerebral ischemia and vasospasm.",
      "distractorExclusionNotes": "Distractor exclusion verified: Intravenous nimodipine is strictly contraindicated (FDA black-box warning) due to severe fatal hypotension; nimodipine must be given orally/enterally.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Aneurysmal SAH requires oral nimodipine (60 mg every 4h for 21 days) and strict euvolemia to prevent delayed cerebral ischemia and vasospasm.",
    "necessaryInference": "Aneurysmal SAH requires oral nimodipine (60 mg every 4h for 21 days) and strict euvolemia to prevent delayed cerebral ischemia and vasospasm.",
    "strongestDistractor": "Administer continuous intravenous nimodipine infusion at 2 mg/hour to achieve rapid and reliable plasma concentrations",
    "distractorExclusion": "Intravenous nimodipine is strictly contraindicated (FDA black-box warning) due to severe fatal hypotension; nimodipine must be given orally/enterally.",
    "citation": "Connolly ES Jr, Rabinstein AA, Carhuapoma JR, et al. Guidelines for the management of aneurysmal subarachnoid hemorrhage: a guideline for healthcare professionals from the American Heart Association/American Stroke Association. Stroke. 2012;43(6):1711-1737. PMID: 22556195."
  },
  {
    "code": "op-c-s2-0456",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Myasthenic Crisis Management and Airway Triage",
    "subtopic": "Forced Vital Capacity, Negative Inspiratory Force, Pyridostigmine Withholding",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman with generalized myasthenia gravis managed with oral pyridostigmine (60 mg four times daily) and prednisone (10 mg daily) is brought to the emergency department with severe, rapidly progressive generalized weakness, difficulty swallowing saliva, and shortness of breath over the past 24 hours. She was prescribed oral ciprofloxacin for an uncomplicated urinary tract infection 2 days ago. Physical examination demonstrates an anxious woman sitting upright with weak, muffled speech and tachypnea. She is unable to count past 12 on a single breath. Bilateral ptosis and moderate facial weakness are present. Vital signs reveal blood pressure of 142/88 mm Hg, heart rate of 118/min, respiratory rate of 28/min, and oxygen saturation of 94% on room air. Bedside pulmonary function testing demonstrates:\n- Forced vital capacity (FVC): 14 mL/kg (normal > 60 mL/kg; baseline 38 mL/kg 3 months ago)\n- Negative inspiratory force (NIF / MIP): -18 cm H2O (normal < -60 cm H2O; abnormal when less negative than -30 cm H2O)\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Perform elective endotracheal intubation for impending respiratory muscle fatigue, temporarily discontinue oral pyridostigmine, and initiate therapeutic plasma exchange (plasmapheresis) or intravenous immunoglobulin (IVIG)",
        "Myasthenic Crisis is a life-threatening complication of myasthenia gravis defined by respiratory muscle failure requiring mechanical ventilatory support, often triggered by infections, surgery, or medications that impair neuromuscular transmission (e.g., fluoroquinolones like ciprofloxacin, aminoglycosides, beta-blockers, macrolides). (1) AIRWAY MANAGEMENT AND THE '20/30/40 RULE': Bedside spirometry monitoring is mandatory. Objective criteria indicating impending diaphragmatic failure and requiring elective endotracheal intubation include: (a) Forced Vital Capacity (FVC) < 15 to 20 mL/kg, (b) Negative Inspiratory Force (NIF) less negative than -20 to -30 cm H2O, or (c) Single-breath counting < 15 to 20. Waiting for hypoxemia, hypercapnia, or respiratory arrest is disastrous because neuromuscular respiratory failure presents late with sudden collapse. (2) WITHHOLDING ACETYLCHOLINESTERASE INHIBITORS: Oral pyridostigmine must be TEMPORARILY DISCONTINUED upon intubation. Pyridostigmine increases airway secretions and bronchial secretions, making pulmonary toilet difficult and complicating mechanical ventilation, and excessive dosing can provoke a confusing cholinergic crisis. (3) DEFINITIVE THERAPY: Therapeutic Plasma Exchange (PLEX, typically 5 exchanges over 10 days) or Intravenous Immunoglobulin (IVIG, 2 g/kg over 2-5 days) provides rapid clearance or neutralization of pathogenic anti-AChR or anti-MuSK autoantibodies, producing clinical improvement within 2 to 5 days."
      ],
      [
        "Administer high-dose intravenous pyridostigmine (2 mg every 4 hours) and escalate oral prednisone to 80 mg daily while monitoring in the step-down unit",
        "Parenteral pyridostigmine causes massive cholinergic hypersecretion, bronchospasm, and bradycardia, further compromising the airway; acute high-dose corticosteroids can paradoxically cause a transient, catastrophic worsening of myasthenic weakness in the first 5-7 days."
      ],
      [
        "Administer non-invasive positive pressure ventilation (BiPAP) and continue outpatient medications unchanged",
        "BiPAP is contraindicated or ineffective in patients with severe bulbar dysfunction and inability to clear pharyngeal secretions due to high aspiration risk; intubation is indicated for FVC < 15 mL/kg."
      ],
      [
        "Administer intravenous edrophonium chloride (Tensilon test) to determine whether the patient has myasthenic crisis or cholinergic crisis",
        "The Tensilon test is obsolete due to high risks of fatal bradycardia, ventricular asystole, and severe bronchospasm; diagnosis and management rely on clinical parameters and bedside spirometry."
      ],
      [
        "Perform emergent thymectomy via median sternotomy during the acute hospital admission",
        "Thymectomy is an elective procedure performed only in stable, non-crisis patients months later; surgery during acute crisis causes massive morbidity and mortality."
      ]
    ],
    "rationale": "Myasthenic crisis is life-threatening respiratory failure due to diaphragmatic and intercostal muscle weakness, often precipitated by fluoroquinolones (ciprofloxacin). Objective criteria for elective intubation include FVC < 15-20 mL/kg or NIF less negative than -20 to -30 cm H2O (the '20/30 rule'). Waiting for abnormal ABGs is dangerous. Oral pyridostigmine should be withheld temporarily to reduce bronchopulmonary secretions. Rapid immunomodulatory therapy with plasma exchange (PLEX) or IVIG is the treatment of choice. Corticosteroids can transiently worsen weakness and should not be initiated acutely without airway protection.",
    "metadata": {
      "shortSolution": "Myasthenia gravis worsened by ciprofloxacin with FVC 14 mL/kg (< 15-20) and NIF -18 cm H2O represents myasthenic crisis requiring elective intubation, withholding pyridostigmine, and PLEX or IVIG.",
      "competingChoice": "Administer high-dose intravenous pyridostigmine (2 mg every 4 hours) and escalate oral prednisone to 80 mg daily while monitoring in the step-down unit",
      "exclusionFinding": "IV pyridostigmine causes dangerous airway hypersecretion, and high-dose steroids cause transient worsening of myasthenic weakness; intubation and PLEX/IVIG are required.",
      "pedagogicalValue": "Recognizing the spirometric thresholds (FVC < 20 mL/kg, NIF < -30) for intubation in myasthenic crisis and knowing to withhold pyridostigmine and administer PLEX or IVIG.",
      "citations": [
        "Gilhus NE, Tzartos S, Evoli A, et al. Myasthenia gravis. Nat Rev Dis Primers. 2019;5(1):30. PMID: 31048702.",
        "Sanders DB, Wolfe GI, Benatar M, et al. International consensus guidance for management of myasthenia gravis: Executive summary. Neurology. 2016;87(4):419-425. PMID: 27358333."
      ]
    },
    "critique": {
      "shortestValidSolution": "Myasthenic crisis + FVC 14 mL/kg (< 15-20) + NIF -18 -> intubate electively + stop pyridostigmine (secretions) + start PLEX or IVIG.",
      "strongestCompetitor": "Administer high-dose intravenous pyridostigmine (2 mg every 4 hours) and escalate oral prednisone to 80 mg daily while monitoring in the step-down unit",
      "exclusionFinding": "IV pyridostigmine increases airway secretions and high-dose steroids paradoxically worsen weakness acutely; intubation and PLEX/IVIG are indicated.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Myasthenia gravis worsened by ciprofloxacin with FVC 14 mL/kg (< 15-20) and NIF -18 cm H2O represents myasthenic crisis requiring elective intubation, withholding pyridostigmine, and PLEX or IVIG.",
      "distractorExclusionNotes": "Distractor exclusion verified: IV pyridostigmine causes dangerous airway hypersecretion, and high-dose steroids cause transient worsening of myasthenic weakness; intubation and PLEX/IVIG are required.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Myasthenia gravis worsened by ciprofloxacin with FVC 14 mL/kg (< 15-20) and NIF -18 cm H2O represents myasthenic crisis requiring elective intubation, withholding pyridostigmine, and PLEX or IVIG.",
    "necessaryInference": "Myasthenia gravis worsened by ciprofloxacin with FVC 14 mL/kg (< 15-20) and NIF -18 cm H2O represents myasthenic crisis requiring elective intubation, withholding pyridostigmine, and PLEX or IVIG.",
    "strongestDistractor": "Administer high-dose intravenous pyridostigmine (2 mg every 4 hours) and escalate oral prednisone to 80 mg daily while monitoring in the step-down unit",
    "distractorExclusion": "IV pyridostigmine causes dangerous airway hypersecretion, and high-dose steroids cause transient worsening of myasthenic weakness; intubation and PLEX/IVIG are required.",
    "citation": "Gilhus NE, Tzartos S, Evoli A, et al. Myasthenia gravis. Nat Rev Dis Primers. 2019;5(1):30. PMID: 31048702."
  },
  {
    "code": "op-c-s2-0457",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Guillain-Barr\u00e9 Syndrome (GBS) Respiratory Monitoring and Therapy",
    "subtopic": "Forced Vital Capacity Monitoring, IVIG vs Plasmapheresis, Corticosteroid Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man presents to the hospital with a 4-day history of progressive ascending weakness and tingling that began in his feet and has now ascended to involve both thighs and hands. He had an episode of self-limited watery diarrhea 3 weeks ago while traveling in Mexico. On physical examination, he has symmetric flaccid weakness of both lower extremities (motor strength 2/5 proximally, 1/5 distally) and upper extremities (4/5 proximally, 3/5 distally). Deep tendon reflexes are completely absent (0/4) throughout all four limbs. Sensation to light touch and vibration is mildly diminished in a stocking-glove distribution. Cranial nerves are intact, but he reports mild difficulty clearing throat secretions. Vital signs show blood pressure of 138/82 mm Hg, heart rate of 96/min, respiratory rate of 22/min, and oxygen saturation of 97% on ambient air. Bedside spirometry demonstrates a forced vital capacity (FVC) of 22 mL/kg (normal > 60 mL/kg) and negative inspiratory force (NIF) of -26 cm H2O.\n\nWhich of the following represents the most appropriate initial management strategy for this patient?",
    "choices": [
      [
        "Admit to an intensive care unit for serial bedside pulmonary function tests (FVC and NIF every 4 to 6 hours) and initiate intravenous immunoglobulin (IVIG) or plasma exchange, avoiding systemic corticosteroids",
        "Guillain-Barr\u00e9 Syndrome (GBS, acute inflammatory demyelinating polyradiculoneuropathy [AIDP]) is an autoimmune polyradiculoneuropathy frequently triggered by molecular mimicry following Campylobacter jejuni enteritis. (1) RESPIRATORY MONITORING: The most critical determinant of immediate survival is monitoring for impending diaphragmatic and intercostal muscle paralysis. Up to 30% of patients require mechanical ventilation. Pulse oximetry and arterial blood gases are dangerously insensitive because hypoxemia and hypercapnia develop only after diaphragmatic collapse occurs. Patients must be admitted to an ICU with serial monitoring of Forced Vital Capacity (FVC) and Negative Inspiratory Force (NIF) every 4 to 6 hours. The '20/30/40 rule' mandates elective mechanical ventilation when: (a) FVC drops < 15 to 20 mL/kg, (b) NIF becomes less negative than -30 cm H2O, or (c) Maximum expiratory pressure drops < 40 cm H2O. (2) DISEASE-MODIFYING IMMUNOTHERAPY: Intravenous Immunoglobulin (IVIG, 0.4 g/kg/day for 5 days) or Plasma Exchange (PLEX, 5 sessions over 2 weeks) accelerates motor recovery and reduces time on mechanical ventilation. Both have equivalent efficacy; combination therapy provides no additional benefit. (3) CONTRAINDICATION TO CORTICOSTEROIDS: Multiple large randomized controlled trials (including Cochrane systematic reviews) prove that SYSTEMIC CORTICOSTEROIDS (oral or intravenous) PROVIDE ZERO BENEFIT IN GBS AND MAY ACTUALLY DELAY OR PROTRACT MOTOR RECOVERY."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
        "Systemic corticosteroids are ineffective and contraindicated in Guillain-Barr\u00e9 syndrome; multiple clinical trials demonstrated that steroids do not accelerate recovery and may slow axonal repair."
      ],
      [
        "Administer combination therapy with simultaneous intravenous immunoglobulin and therapeutic plasma exchange",
        "Randomized clinical trials demonstrate that combining IVIG and plasma exchange provides no added benefit over either treatment alone and substantially increases costs and catheter complications."
      ],
      [
        "Admit to a general medical floor and discharge home on oral gabapentin if oxygen saturation remains >= 95%",
        "Pulse oximetry remains completely normal until sudden fatal respiratory arrest occurs; ICU admission for serial FVC/NIF monitoring is mandatory in progressive GBS."
      ],
      [
        "Administer oral ciprofloxacin 500 mg twice daily for 7 days to eradicate residual Campylobacter jejuni infection",
        "Antimicrobial therapy weeks after diarrhea has resolved has no effect on the autoimmune molecular mimicry cascade of GBS and can worsen neuromuscular transmission."
      ]
    ],
    "rationale": "Guillain-Barr\u00e9 syndrome (AIDP) causes ascending flaccid paralysis and absent deep tendon reflexes, frequently post-Campylobacter jejuni. Respiratory failure develops in ~30% of cases and must be tracked with serial bedside spirometry (FVC and NIF every 4-6 hours in an ICU); pulse oximetry is deceptively normal until diaphragmatic arrest. Intubation is indicated when FVC < 15-20 mL/kg or NIF < -30 cm H2O. First-line therapy is IVIG or plasmapheresis. Systemic corticosteroids are contraindicated as trials show they provide no benefit and delay recovery.",
    "metadata": {
      "shortSolution": "Rapidly progressive GBS with FVC 22 mL/kg requires ICU admission for serial FVC/NIF monitoring and IVIG or plasmapheresis; systemic corticosteroids are contraindicated.",
      "competingChoice": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
      "exclusionFinding": "Systemic corticosteroids are proven ineffective in GBS and protract axonal recovery; IVIG or plasmapheresis is the treatment of choice.",
      "pedagogicalValue": "Understanding that serial FVC/NIF monitoring in an ICU is essential for GBS, IVIG or plasmapheresis is first-line, and corticosteroids are ineffective/contraindicated.",
      "citations": [
        "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barr\u00e9 syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435.",
        "Hughes RA, Brassington R, Gunn AA, van Doorn PA. Corticosteroids for Guillain-Barr\u00e9 syndrome. Cochrane Database Syst Rev. 2016;10(10):CD001446. PMID: 27778385."
      ]
    },
    "critique": {
      "shortestValidSolution": "GBS + FVC 22 mL/kg -> ICU admission for serial FVC/NIF + IVIG or plasmapheresis; avoid corticosteroids.",
      "strongestCompetitor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
      "exclusionFinding": "Corticosteroids are proven ineffective in GBS; IVIG or plasmapheresis is first-line therapy.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Rapidly progressive GBS with FVC 22 mL/kg requires ICU admission for serial FVC/NIF monitoring and IVIG or plasmapheresis; systemic corticosteroids are contraindicated.",
      "distractorExclusionNotes": "Distractor exclusion verified: Systemic corticosteroids are proven ineffective in GBS and protract axonal recovery; IVIG or plasmapheresis is the treatment of choice.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Rapidly progressive GBS with FVC 22 mL/kg requires ICU admission for serial FVC/NIF monitoring and IVIG or plasmapheresis; systemic corticosteroids are contraindicated.",
    "necessaryInference": "Rapidly progressive GBS with FVC 22 mL/kg requires ICU admission for serial FVC/NIF monitoring and IVIG or plasmapheresis; systemic corticosteroids are contraindicated.",
    "strongestDistractor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
    "distractorExclusion": "Systemic corticosteroids are proven ineffective in GBS and protract axonal recovery; IVIG or plasmapheresis is the treatment of choice.",
    "citation": "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barr\u00e9 syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435."
  },
  {
    "code": "op-c-s2-0458",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Idiopathic Intracranial Hypertension (IIH / Pseudotumor Cerebri)",
    "subtopic": "Diagnostic Lumbar Puncture, Acetazolamide, Weight Loss, Optic Neuropathy",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman presents to the neurology clinic with a 2-month history of daily, throbbing generalized headaches that are worse upon waking in the morning and aggravated by bending forward or coughing. Over the past 3 weeks, she has noticed brief episodes of blackened vision lasting 5 to 10 seconds in both eyes when standing up (transient visual obscurations), as well as a rhythmic whooshing sound in her ears that corresponds to her heartbeat (pulsatile tinnitus). Her body mass index (BMI) is 36 kg/m2; she gained 12 kg (26 lbs) over the preceding 6 months. Physical examination reveals an alert woman with normal cranial nerve function except for bilateral visual fundus examination demonstrating marked bilateral papilledema with blurred optic disc margins and flame hemorrhages. Visual field automated testing reveals enlarged blind spots bilaterally without central visual acuity loss. Brain magnetic resonance imaging (MRI) with magnetic resonance venography (MRV) reveals an empty sella turcica, flattening of the posterior sclera, and bilateral transverse sinus stenosis without mass lesions, hydrocephalus, or dural venous sinus thrombosis. Lumbar puncture performed in the lateral decubitus position demonstrates an opening pressure of 340 mm H2O (normal <= 200 mm H2O in adults; > 250 mm H2O is diagnostic). Cerebrospinal fluid (CSF) analysis reveals normal cell count, glucose, and protein.\n\nWhich of the following represents the most appropriate initial pharmacological therapy for this patient?",
    "choices": [
      [
        "Oral acetazolamide combined with a medically supervised weight-loss program",
        "Idiopathic Intracranial Hypertension (IIH, formerly pseudotumor cerebri) predominantly affects young women of childbearing age with obesity or recent weight gain. DIAGNOSTIC CRITERIA (MODIFIED DANDY CRITERIA): (1) Symptoms and signs of elevated intracranial pressure (headache, pulsatile tinnitus, transient visual obscurations, papilledema); (2) Normal neurological examination except for cranial nerve VI (abducens) palsy; (3) Normal brain imaging excluding space-occupying lesions or hydrocephalus (neuroimaging signs include empty sella, flattening of posterior sclera, distention of perioptic subarachnoid space); (4) Elevated lumbar puncture opening pressure (> 250 mm H2O in lateral decubitus position); and (5) Normal CSF cytological and biochemical composition. FIRST-LINE MEDICAL MANAGEMENT: (a) ACETAZOLAMIDE: A carbonic anhydrase inhibitor that reduces cerebrospinal fluid secretion by the choroid plexus by up to 50%. The landmark NORDIC IIHTT (Idiopathic Intracranial Hypertension Treatment Trial) demonstrated that acetazolamide (titrated up to 1-4 g daily) significantly improves visual field function, reduces papilledema, and relieves headaches. (b) WEIGHT LOSS: Modest weight loss (5% to 10% of total body weight) has been demonstrated to normalize CSF opening pressure and achieve long-term clinical remission. (c) SURGICAL RESCUE: Optic nerve sheath fenestration or ventriculoperitoneal/lumboperitoneal shunting is reserved for patients with severe, rapidly progressive visual loss refractory to high-dose medical therapy."
      ],
      [
        "Therapeutic serial lumbar punctures performed twice weekly to maintain opening pressure < 200 mm H2O",
        "Serial lumbar punctures are painful, carry risks of CSF infection and epidural hematoma, and provide only transient CSF pressure relief (CSF regenerates at 20 mL/hour, replenishing within 6 to 12 hours)."
      ],
      [
        "Oral topiramate monotherapy at low dose (25 mg daily) without dietary modifications",
        "While topiramate has weak carbonic anhydrase activity, acetazolamide is the proven first-line agent of choice with definitive clinical trial efficacy (IIHTT); weight loss is a mandatory cornerstone of disease remission."
      ],
      [
        "Initiation of oral prednisone 60 mg daily for 4 weeks followed by a rapid steroid taper",
        "Systemic corticosteroids are not recommended for routine IIH management due to severe rebound intracranial hypertension upon tapering, weight gain, and systemic metabolic toxicity."
      ],
      [
        "Emergent placement of an optic nerve sheath fenestration before initiating any medical therapy",
        "Surgical fenestration is an invasive intervention reserved for severe, rapidly deteriorating visual acuity or refractory papilledema failing maximum medical therapy, not initial management in mild visual field loss."
      ]
    ],
    "rationale": "Idiopathic Intracranial Hypertension (IIH) presents in obese young women with headache, pulsatile tinnitus, transient visual obscurations, papilledema, elevated opening pressure (> 250 mm H2O), and normal CSF/neuroimaging. The goal of therapy is preventing permanent visual loss. First-line therapy is oral acetazolamide (which inhibits choroid plexus carbonic anhydrase, reducing CSF production) alongside a structured weight-reduction program (5-10% weight loss induces remission). Surgery (optic nerve sheath fenestration or VP shunt) is reserved for progressive visual loss failing medical therapy.",
    "metadata": {
      "shortSolution": "Obese female with papilledema, elevated opening pressure (340 mm H2O), and normal CSF has IIH; first-line therapy is oral acetazolamide and structured weight loss.",
      "competingChoice": "Therapeutic serial lumbar punctures performed twice weekly to maintain opening pressure < 200 mm H2O",
      "exclusionFinding": "CSF replenishes within 6-12 hours; serial lumbar punctures are ineffective long-term, whereas acetazolamide continuously suppresses choroid plexus CSF production.",
      "pedagogicalValue": "Mastering the diagnostic criteria and first-line medical therapy (acetazolamide + weight loss) for idiopathic intracranial hypertension.",
      "citations": [
        "Wall M, McDermott MP, Kieburtz KD, et al. Effect of acetazolamide on visual function in patients with idiopathic intracranial hypertension and mild visual loss: the Idiopathic Intracranial Hypertension Treatment Trial, a randomized clinical trial. JAMA. 2014;311(16):1641-1651. PMID: 24756514.",
        "Mollan SP, Davies B, Silver NC, et al. New horizons in the management of idiopathic intracranial hypertension. J Neurol Neurosurg Psychiatry. 2018;89(10):1088-1100. PMID: 29555848."
      ]
    },
    "critique": {
      "shortestValidSolution": "IIH (papilledema + LP opening pressure 340 mm H2O) -> oral acetazolamide + weight loss.",
      "strongestCompetitor": "Therapeutic serial lumbar punctures performed twice weekly to maintain opening pressure < 200 mm H2O",
      "exclusionFinding": "CSF regenerates within hours; serial LPs are painful and ineffective; acetazolamide is the proven medical therapy.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Obese female with papilledema, elevated opening pressure (340 mm H2O), and normal CSF has IIH; first-line therapy is oral acetazolamide and structured weight loss.",
      "distractorExclusionNotes": "Distractor exclusion verified: CSF replenishes within 6-12 hours; serial lumbar punctures are ineffective long-term, whereas acetazolamide continuously suppresses choroid plexus CSF production.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Obese female with papilledema, elevated opening pressure (340 mm H2O), and normal CSF has IIH; first-line therapy is oral acetazolamide and structured weight loss.",
    "necessaryInference": "Obese female with papilledema, elevated opening pressure (340 mm H2O), and normal CSF has IIH; first-line therapy is oral acetazolamide and structured weight loss.",
    "strongestDistractor": "Therapeutic serial lumbar punctures performed twice weekly to maintain opening pressure < 200 mm H2O",
    "distractorExclusion": "CSF replenishes within 6-12 hours; serial lumbar punctures are ineffective long-term, whereas acetazolamide continuously suppresses choroid plexus CSF production.",
    "citation": "Wall M, McDermott MP, Kieburtz KD, et al. Effect of acetazolamide on visual function in patients with idiopathic intracranial hypertension and mild visual loss: the Idiopathic Intracranial Hypertension Treatment Trial, a randomized clinical trial. JAMA. 2014;311(16):1641-1651. PMID: 24756514."
  },
  {
    "code": "op-c-s2-0459",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Normal Pressure Hydrocephalus (NPH)",
    "subtopic": "Classic Clinical Triad, Large-Volume CSF Tap Test, Ventriculoperitoneal Shunting",
    "provisionalDifficulty": 4,
    "stem": "A 75-year-old man is brought to the outpatient clinic by his wife due to a 9-month history of progressive walking difficulty, urinary accidents, and memory lapses. His wife describes that he walks with a slow, shuffling manner and has had several near-falls. More recently, he developed urinary urgency that progressed to involuntary urinary incontinence, and he has trouble recalling recent appointments and names. On physical examination, the patient is alert and cooperative. Mini-Mental State Examination score is 23/30 with prominent executive dysfunction and psychomotor slowing. Cranial nerves are normal. Motor strength is 5/5 throughout with normal muscle tone. Deep tendon reflexes are symmetric and plantars are flexor. Sensation is intact. Gait assessment demonstrates a slow, wide-based, short-stepped gait with diminished step height; his feet appear glued to the floor ('magnetic gait') and he requires multiple small steps to complete a 180-degree turn. Brain MRI demonstrates ventriculomegaly with an Evans index of 0.38 (normal <= 0.30) that is markedly out of proportion to high-convexity cerebral sulcal enlargement, with flattening of sulci at the cerebral vertex and narrowing of the callosal angle.\n\nWhich of the following is the most appropriate next step to assess whether this patient will benefit from definitive cerebrospinal fluid shunting?",
    "choices": [
      [
        "Perform a high-volume diagnostic lumbar puncture (removal of 30 to 50 mL of CSF) with quantitative timed gait assessment before and after the procedure",
        "Normal Pressure Hydrocephalus (NPH) is a potentially reversible form of hydrocephalus characterized by the classic clinical triad ('wobbly, wet, wacky'): (1) GAIT DISTURBANCE: Typically the earliest and most prominent symptom, characterized as a magnetic, wide-based, apraxic gait with preserved motor strength; (2) URINARY INCONTINENCE: Urgency progressing to involuntary incontinence; and (3) COGNITIVE IMPAIRMENT: Subcortical dementia with psychomotor slowing, apathy, and executive dysfunction. NEUROIMAGING: Demonstrates ventriculomegaly (Evans index > 0.3) out of proportion to sulcal atrophy, with crowding of gyri at the cerebral vertex and bowing of the corpus callosum. DIAGNOSTIC ASSESSMENT (CSF TAP TEST): The single best predictor of clinical improvement from permanent surgical ventriculoperitoneal (VP) shunting is the HIGH-VOLUME LUMBAR PUNCTURE ('TAP TEST'). Approximately 30 to 50 mL of cerebrospinal fluid is removed. Objective, standardized gait assessment (e.g., 10-meter walk test, Timed Up and Go [TUG] test measuring time and steps required) is performed immediately before and 2 to 4 hours following the tap test. A demonstrable, quantitative improvement in gait velocity or reduction in step count confirms a positive tap test and carries a high positive predictive value (> 85-90%) for sustained clinical benefit from VP shunt placement."
      ],
      [
        "Proceed directly to surgical ventriculoperitoneal shunt placement without performing a diagnostic lumbar puncture tap test",
        "VP shunting is an invasive neurosurgical procedure carrying significant risks of subdural hematoma, infection, and catheter malfunction; performing a prognostic tap test is standard to confirm shunt responsiveness."
      ],
      [
        "Initiate oral donepezil 5 mg daily and memantine 10 mg twice daily for presumed Alzheimer dementia",
        "Alzheimer disease presents primarily with early prominent episodic memory loss with cortical atrophy and preserved gait in early stages; NPH presents with early prominent gait apraxia and ventriculomegaly."
      ],
      [
        "Initiate oral levodopa-carbidopa to treat presumed Parkinson disease gait freezing",
        "Parkinson disease presents with resting tremor, cogwheel rigidity, and asymmetric bradykinesia; levodopa provides zero benefit for the apraxic gait of normal pressure hydrocephalus."
      ],
      [
        "Initiate oral acetazolamide 500 mg twice daily to reduce choroid plexus cerebrospinal fluid secretion",
        "Acetazolamide has no demonstrated efficacy in normal pressure hydrocephalus and can induce volume depletion and electrolyte disturbances in elderly patients."
      ]
    ],
    "rationale": "Normal Pressure Hydrocephalus (NPH) presents with the triad of gait disturbance ('magnetic gait'), urinary incontinence, and subcortical dementia ('wobbly, wet, wacky') with ventriculomegaly out of proportion to sulcal atrophy. Gait impairment is the earliest and most responsive symptom. The standard prognostic test prior to surgical ventriculoperitoneal (VP) shunting is a large-volume lumbar puncture (removal of 30-50 mL of CSF) with objective pre- and post-procedure timed gait testing (e.g., Timed Up and Go). Demonstrable improvement in gait velocity predicts high likelihood of shunt success.",
    "metadata": {
      "shortSolution": "Elderly patient with magnetic gait, urinary incontinence, cognitive decline, and ventriculomegaly has NPH; perform high-volume CSF tap test with timed gait assessment to predict response to VP shunt.",
      "competingChoice": "Proceed directly to surgical ventriculoperitoneal shunt placement without performing a diagnostic lumbar puncture tap test",
      "exclusionFinding": "VP shunt has significant surgical risks; a prognostic high-volume CSF tap test with objective pre/post gait testing is standard to establish shunt responsiveness.",
      "pedagogicalValue": "Understanding the diagnostic evaluation of NPH: the high-volume CSF tap test with objective pre/post gait assessment predicts VP shunt efficacy.",
      "citations": [
        "Relkin N, Marmarou A, Klinge P, et al. Diagnosing idiopathic normal-pressure hydrocephalus. Neurosurgery. 2005;57(3 Suppl):S4-S16. PMID: 16160427.",
        "Williams MA, Malm J. Normal Pressure Hydrocephalus. N Engl J Med. 2016;374(6):597-598. PMID: 26863375."
      ]
    },
    "critique": {
      "shortestValidSolution": "NPH triad (gait + urinary + cognitive) + ventriculomegaly -> large-volume LP tap test with timed gait evaluation before VP shunting.",
      "strongestCompetitor": "Proceed directly to surgical ventriculoperitoneal shunt placement without performing a diagnostic lumbar puncture tap test",
      "exclusionFinding": "Surgical shunting carries major risks; objective tap test confirmation is standard practice before permanent shunt insertion.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly patient with magnetic gait, urinary incontinence, cognitive decline, and ventriculomegaly has NPH; perform high-volume CSF tap test with timed gait assessment to predict response to VP shunt.",
      "distractorExclusionNotes": "Distractor exclusion verified: VP shunt has significant surgical risks; a prognostic high-volume CSF tap test with objective pre/post gait testing is standard to establish shunt responsiveness.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly patient with magnetic gait, urinary incontinence, cognitive decline, and ventriculomegaly has NPH; perform high-volume CSF tap test with timed gait assessment to predict response to VP shunt.",
    "necessaryInference": "Elderly patient with magnetic gait, urinary incontinence, cognitive decline, and ventriculomegaly has NPH; perform high-volume CSF tap test with timed gait assessment to predict response to VP shunt.",
    "strongestDistractor": "Proceed directly to surgical ventriculoperitoneal shunt placement without performing a diagnostic lumbar puncture tap test",
    "distractorExclusion": "VP shunt has significant surgical risks; a prognostic high-volume CSF tap test with objective pre/post gait testing is standard to establish shunt responsiveness.",
    "citation": "Relkin N, Marmarou A, Klinge P, et al. Diagnosing idiopathic normal-pressure hydrocephalus. Neurosurgery. 2005;57(3 Suppl):S4-S16. PMID: 16160427."
  },
  {
    "code": "op-c-s2-0460",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Amyotrophic Lateral Sclerosis (ALS) Multidisciplinary Management",
    "subtopic": "Combined Upper and Lower Motor Neuron Signs, Riluzole, Non-Invasive Ventilation",
    "provisionalDifficulty": 5,
    "stem": "A 59-year-old man presents to the neurology clinic with a 7-month history of progressive weakness that began in his right hand with difficulty turning keys and buttoning shirts, followed by muscle twitching in both arms and difficulty walking. Over the past 2 months, he has noted slurred speech, choking episodes when drinking thin liquids, and orthopnea when lying flat in bed. Physical examination reveals emotional lability with inappropriate laughter (pseudobulbar affect), tongue atrophy with prominent fasciculations, and spastic dysarthria. Motor examination reveals asymmetric atrophy of the right first dorsal interosseous and thenar muscles with visible fasciculations, combined with hyperreflexia (3+ biceps and patellar reflexes bilaterally), a positive Hoffman sign on the right, and an extensor plantar response (positive Babinski) on the right. Sensory examination is completely normal. Electromyography (EMG) confirms active denervation (fibrillations and positive sharp waves) and chronic reinnervation changes in bulbar, cervical, and lumbosacral segments. Pulmonary function testing demonstrates an erect forced vital capacity (FVC) of 58% of predicted, which drops to 42% of predicted in the supine position.\n\nWhich of the following therapeutic interventions has the greatest proven efficacy in prolonging tracheostomy-free survival in this patient?",
    "choices": [
      [
        "Initiation of non-invasive positive pressure ventilation (BiPAP) combined with oral riluzole therapy",
        "Amyotrophic Lateral Sclerosis (ALS) is a fatal neurodegenerative disorder characterized by progressive loss of both Upper Motor Neurons (UMN: hyperreflexia, spasticity, Hoffman sign, Babinski sign) and Lower Motor Neurons (LMN: muscle atrophy, weakness, fasciculations) across multiple body regions (bulbar, cervical, thoracic, lumbosacral), with complete sensory sparing. (1) VENTILATORY SUPPORT (GREATEST SURVIVAL IMPACT): Diaphragmatic weakness manifests early as nocturnal hypoventilation, morning headaches, and orthopnea (demonstrated by a > 15-20% drop in FVC from erect to supine). Landmark randomized trials establish that timely initiation of NON-INVASIVE POSITIVE PRESSURE VENTILATION (NIV / BiPAP) is the single most powerful therapeutic intervention to prolong survival (extending life by 7 to 12 months) and maintain quality of life, far exceeding pharmacotherapy. Guidelines (AAN) recommend initiating NIV when: (a) FVC < 50% predicted, (b) Orthopnea or supine FVC drop > 15-20%, or (c) Nocturnal hypoxemia. (2) DISEASE-MODIFYING PHARMACOTHERAPY: RILUZOLE (50 mg orally twice daily) is a glutamate antagonist that inhibits voltage-gated sodium channels and presynaptic glutamate release, prolonging tracheostomy-free survival by approximately 2 to 3 months. (3) NUTRITION: Percutaneous endoscopic gastrostomy (PEG) is indicated for dysphagia and weight loss before FVC drops < 50% to minimize procedural respiratory complications."
      ],
      [
        "High-dose intravenous methylprednisolone 1,000 mg daily for 5 days followed by oral prednisone taper",
        "ALS is a primary neurodegenerative disorder of motor neurons, not an inflammatory demyelinating disease; corticosteroids provide zero therapeutic benefit and accelerate muscle wasting."
      ],
      [
        "Long-term intravenous immunoglobulin (IVIG) infusions administered every 3 weeks",
        "IVIG is used to treat multifocal motor neuropathy (MMN, which presents with pure lower motor neuron weakness and conduction block on EMG), but is completely ineffective in ALS."
      ],
      [
        "Emergent permanent tracheostomy and invasive mechanical ventilation before attempting non-invasive support",
        "Invasive tracheostomy ventilation is reserved for patients who fail or decline non-invasive ventilation; non-invasive positive pressure ventilation is the non-invasive standard of care that prolongs survival."
      ],
      [
        "Initiation of oral baclofen monotherapy without respiratory monitoring or ventilatory support",
        "Baclofen is an adjunctive GABAB agonist that relieves muscle spasticity but has zero effect on disease progression, respiratory failure, or survival."
      ]
    ],
    "rationale": "Amyotrophic Lateral Sclerosis (ALS) is characterized by combined upper and lower motor neuron degeneration without sensory deficits. The intervention with the greatest proven survival benefit is non-invasive positive pressure ventilation (NIV/BiPAP), which prolongs survival by 7-12 months when initiated for FVC < 50% or orthopnea/supine FVC drop. Riluzole (a glutamate release inhibitor) extends tracheostomy-free survival by 2-3 months. Corticosteroids and IVIG have no role in ALS.",
    "metadata": {
      "shortSolution": "ALS patient with mixed UMN/LMN signs, bulbar symptoms, and supine FVC drop to 42% requires non-invasive ventilation (BiPAP), which provides the largest survival benefit, alongside oral riluzole.",
      "competingChoice": "High-dose intravenous methylprednisolone 1,000 mg daily for 5 days followed by oral prednisone taper",
      "exclusionFinding": "ALS is neurodegenerative, not autoimmune/inflammatory; corticosteroids provide no benefit and cause muscle atrophy. NIV is the definitive survival-prolonging intervention.",
      "pedagogicalValue": "Recognizing combined UMN and LMN signs of ALS and understanding that non-invasive positive pressure ventilation (BiPAP) confers the largest survival prolongation.",
      "citations": [
        "Bourke SC, Tomlinson M, Higgins TL, et al. Effects of non-invasive ventilation on survival and quality of life in patients with amyotrophic lateral sclerosis: a randomised controlled trial. Lancet Neurol. 2006;5(2):140-147. PMID: 16426962.",
        "Miller RG, Brooks BR, Swain-Eng RJ, et al. Quality improvement in neurology: Amyotrophic lateral sclerosis quality measure set. Neurology. 2013;81(24):2136-2140. PMID: 24323440."
      ]
    },
    "critique": {
      "shortestValidSolution": "ALS (UMN + LMN) + orthopnea + FVC drop -> BiPAP (largest survival benefit) + oral riluzole.",
      "strongestCompetitor": "High-dose intravenous methylprednisolone 1,000 mg daily for 5 days followed by oral prednisone taper",
      "exclusionFinding": "ALS is non-inflammatory; steroids do not alter progression. NIV and riluzole are the evidence-based therapies.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: ALS patient with mixed UMN/LMN signs, bulbar symptoms, and supine FVC drop to 42% requires non-invasive ventilation (BiPAP), which provides the largest survival benefit, alongside oral riluzole.",
      "distractorExclusionNotes": "Distractor exclusion verified: ALS is neurodegenerative, not autoimmune/inflammatory; corticosteroids provide no benefit and cause muscle atrophy. NIV is the definitive survival-prolonging intervention.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "ALS patient with mixed UMN/LMN signs, bulbar symptoms, and supine FVC drop to 42% requires non-invasive ventilation (BiPAP), which provides the largest survival benefit, alongside oral riluzole.",
    "necessaryInference": "ALS patient with mixed UMN/LMN signs, bulbar symptoms, and supine FVC drop to 42% requires non-invasive ventilation (BiPAP), which provides the largest survival benefit, alongside oral riluzole.",
    "strongestDistractor": "High-dose intravenous methylprednisolone 1,000 mg daily for 5 days followed by oral prednisone taper",
    "distractorExclusion": "ALS is neurodegenerative, not autoimmune/inflammatory; corticosteroids provide no benefit and cause muscle atrophy. NIV is the definitive survival-prolonging intervention.",
    "citation": "Bourke SC, Tomlinson M, Higgins TL, et al. Effects of non-invasive ventilation on survival and quality of life in patients with amyotrophic lateral sclerosis: a randomised controlled trial. Lancet Neurol. 2006;5(2):140-147. PMID: 16426962."
  },
  {
    "code": "op-c-s2-0461",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Multiple Sclerosis Acute Relapse vs Disease-Modifying Therapy",
    "subtopic": "High-Dose Corticosteroids, Second-Line Plasmapheresis, Relapse Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old woman with relapsing-remitting multiple sclerosis (RRMS) diagnosed 2 years ago and managed with subcutaneous glatiramer acetate presents to the emergency department with a 3-day history of progressive right eye vision loss and eye pain worsened by ocular movements. She also reports a 2-day history of clumsy walking and tingling across both legs. She is afebrile with no signs of systemic infection or heat exposure (absence of Uhthoff phenomenon). Neurological examination reveals right eye visual acuity of 20/200, a right relative afferent pupillary defect (Marcus Gunn pupil), red-green color desaturation, and mild right optic disc swelling (anterior optic neuritis). Gait is moderately ataxic with a positive Romberg sign. Bilateral knee hyperreflexia and an extensor plantar response on the right are present. Contrast-enhanced MRI of the brain and orbits reveals hyperintensity and intense gadolinium enhancement of the right optic nerve and two new periventricular enhancing demyelinating plaques, consistent with an acute multiple sclerosis relapse.\n\nWhich of the following represents the most appropriate immediate medical management for this patient's acute neurological deficits?",
    "choices": [
      [
        "Administer high-dose intravenous methylprednisolone (1,000 mg daily for 3 to 5 days) without immediate change in maintenance disease-modifying therapy",
        "An acute Multiple Sclerosis (MS) relapse (exacerbation) is defined as new or worsening neurological dysfunction lasting > 24 hours in the absence of fever, infection, or hyperthermia (pseudo-relapse). (1) ACUTE RELAPSE TREATMENT: High-dose intravenous corticosteroids (methylprednisolone 500 to 1,000 mg IV daily for 3 to 5 consecutive days, with or without an oral steroid taper) is the definitive first-line therapy. High-dose steroids reduce blood-brain barrier permeability, suppress pro-inflammatory cytokine expression, and accelerate functional recovery from acute neurological deficits (such as optic neuritis or transverse myelitis). (Note: Oral prednisone at standard doses [e.g., 60 mg/day] is strictly avoided in acute optic neuritis because the landmark Optic Neuritis Treatment Trial [ONTT] proved that standard-dose oral prednisone increases the rate of recurrent optic neuritis). (2) STEROID-REFRACTORY RELAPSE: For severe, disabling acute relapses that fail to demonstrate functional improvement after high-dose pulse corticosteroids, therapeutic Plasma Exchange (PLEX, typically 5 to 7 exchanges every other day) is the proven second-line rescue modality. (3) MAINTENANCE DISEASE-MODIFYING THERAPY (DMT): Decisions regarding switching maintenance DMTs (e.g., escalating from glatiramer acetate to higher-efficacy monoclonal antibodies like ocrelizumab or natalizumab) are made in the outpatient setting after the acute relapse has fully stabilized."
      ],
      [
        "Administer standard-dose oral prednisone 60 mg daily for 14 days followed by an outpatient taper",
        "The Optic Neuritis Treatment Trial (ONTT) showed that standard-dose oral prednisone does not accelerate visual recovery and significantly doubles the rate of recurrent optic neuritis compared to IV pulse steroids."
      ],
      [
        "Immediate switch from glatiramer acetate to intravenous ocrelizumab during the acute emergency department visit",
        "Disease-modifying therapies prevent future relapses over months but have zero therapeutic effect on reversing acute inflammatory axonal conduction block during an ongoing relapse."
      ],
      [
        "Administer immediate therapeutic plasma exchange without administering corticosteroids",
        "Plasma exchange is second-line rescue therapy reserved specifically for severe relapses that fail to improve after an initial trial of high-dose intravenous corticosteroids."
      ],
      [
        "Administer oral acyclovir 800 mg five times daily and intravenous broad-spectrum antibiotics",
        "Optic neuritis and periventricular plaques in a patient with established RRMS represent an autoimmune demyelinating relapse, not an infectious process."
      ]
    ],
    "rationale": "An acute multiple sclerosis relapse presents with new neurological symptoms lasting > 24 hours without infection or fever. First-line therapy for disabling relapses (e.g., optic neuritis, motor deficits) is high-dose intravenous pulse methylprednisolone (1,000 mg daily for 3-5 days), which accelerates functional recovery. Standard-dose oral prednisone is contraindicated in optic neuritis because it doubles recurrence rates (ONTT). Plasma exchange is second-line for steroid-refractory relapses. Disease-modifying therapy adjustments are deferred until the acute episode is stabilized.",
    "metadata": {
      "shortSolution": "Acute MS relapse with optic neuritis requires high-dose IV methylprednisolone (1,000 mg/day for 3-5 days); standard oral prednisone is avoided because it doubles optic neuritis recurrence.",
      "competingChoice": "Administer standard-dose oral prednisone 60 mg daily for 14 days followed by an outpatient taper",
      "exclusionFinding": "ONTT established that standard-dose oral prednisone doubles optic neuritis recurrence rates without accelerating recovery; high-dose pulse IV steroids are required.",
      "pedagogicalValue": "Understanding the management of acute MS relapses: high-dose IV pulse steroids accelerate recovery, standard-dose oral prednisone is avoided in optic neuritis, and PLEX is second-line.",
      "citations": [
        "Beck RW, Cleary PA, Anderson MM Jr, et al. A randomized, controlled trial of corticosteroids in the treatment of acute optic neuritis. The Optic Neuritis Study Group. N Engl J Med. 1992;326(9):581-588. PMID: 1734247.",
        "Rae-Grant A, Day GS, Marrie RA, et al. Comprehensive systematic review summary: Disease-modifying therapies for adults with multiple sclerosis: Report of the Guideline Development, Dissemination, and Implementation Subcommittee of the American Academy of Neurology. Neurology. 2018;90(17):789-800. PMID: 29686117."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute MS relapse / optic neuritis -> high-dose IV methylprednisolone (1,000 mg daily x 3-5 days).",
      "strongestCompetitor": "Administer standard-dose oral prednisone 60 mg daily for 14 days followed by an outpatient taper",
      "exclusionFinding": "Standard-dose oral prednisone increases optic neuritis recurrence (ONTT); high-dose pulse IV methylprednisolone is required.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute MS relapse with optic neuritis requires high-dose IV methylprednisolone (1,000 mg/day for 3-5 days); standard oral prednisone is avoided because it doubles optic neuritis recurrence.",
      "distractorExclusionNotes": "Distractor exclusion verified: ONTT established that standard-dose oral prednisone doubles optic neuritis recurrence rates without accelerating recovery; high-dose pulse IV steroids are required.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute MS relapse with optic neuritis requires high-dose IV methylprednisolone (1,000 mg/day for 3-5 days); standard oral prednisone is avoided because it doubles optic neuritis recurrence.",
    "necessaryInference": "Acute MS relapse with optic neuritis requires high-dose IV methylprednisolone (1,000 mg/day for 3-5 days); standard oral prednisone is avoided because it doubles optic neuritis recurrence.",
    "strongestDistractor": "Administer standard-dose oral prednisone 60 mg daily for 14 days followed by an outpatient taper",
    "distractorExclusion": "ONTT established that standard-dose oral prednisone doubles optic neuritis recurrence rates without accelerating recovery; high-dose pulse IV steroids are required.",
    "citation": "Beck RW, Cleary PA, Anderson MM Jr, et al. A randomized, controlled trial of corticosteroids in the treatment of acute optic neuritis. The Optic Neuritis Study Group. N Engl J Med. 1992;326(9):581-588. PMID: 1734247."
  },
  {
    "code": "op-c-s2-0462",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Wernicke Encephalopathy and Thiamine Administration Timing",
    "subtopic": "Classic Clinical Triad, Glucose-Induced Decompensation, Korsakoff Psychosis Prevention",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man with a 20-year history of severe alcohol use disorder is brought to the emergency department by emergency medical services after being found disoriented, disheveled, and hypothermic in an alley. He has not consumed solid food for over a week according to peers. On physical examination, he is malnourished, disoriented to time, date, and place, and demonstrates impaired short-term recall and continuous fabrication of stories to fill memory gaps (confabulation). Cranial nerve examination reveals bilateral abducens (CN VI) nerve palsies with horizontal gaze-evoked nystagmus. Motor examination shows generalized muscle wasting with normal muscle tone. Cerebellar testing reveals prominent trunk and lower-extremity ataxia; he is unable to walk or perform tandem gait. Vital signs reveal blood pressure of 106/66 mm Hg, heart rate of 102/min, respiratory rate of 14/min, and core body temperature of 35.2 C (95.4 F). Point-of-care capillary blood glucose is 48 mg/dL.\n\nWhich of the following represents the most appropriate initial management sequence for this patient?",
    "choices": [
      [
        "Administer high-dose intravenous thiamine immediately prior to or concomitantly with intravenous dextrose",
        "Wernicke Encephalopathy (WE) is an acute, life-threatening neurological emergency resulting from severe thiamine (vitamin B1) deficiency, predominantly occurring in chronic alcohol use disorder, severe malnutrition, hyperemesis gravidarum, or bariatric surgery. (1) CLASSIC CLINICAL TRIAD: (a) Encephalopathy (profound confusion, apathy, disorientation), (b) Oculomotor dysfunction (bilateral abducens nerve palsy, horizontal nystagmus, conjugate gaze palsy), and (c) Gait ataxia (wide-based cerebellar ataxia due to cerebellar vermis degeneration). Only approximately 15-30% of patients present with all three components simultaneously; high clinical suspicion is vital. (2) PATHOPHYSIOLOGY AND DEXTROSE DANGER: Thiamine pyrophosphate (TPP) is an indispensable cofactor for critical carbohydrate-metabolizing enzymes: pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, and transketolase. In a severely thiamine-deficient state, administering an intravenous glucose or dextrose load increases glycolytic flux, causing rapid, catastrophic intracellular depletion of remaining thiamine stores. This triggers acute metabolic failure, focal lactic acidosis, and irreversible hemorrhagic necrosis of vulnerable brain structures (mammillary bodies, medial thalamus, periaqueductal gray). (3) MANAGEMENT RULE: High-dose intravenous thiamine (e.g., 500 mg IV every 8 hours) MUST ALWAYS BE ADMINISTERED PRIOR TO OR SIMULTANEOUSLY WITH INTRAVENOUS DEXTROSE. Delaying thiamine administration risks precipitating irreversible Korsakoff psychosis (anterograde/retrograde amnesia with confabulation) or fatal brainstem arrest."
      ],
      [
        "Administer a rapid bolus of 50% intravenous dextrose immediately and defer thiamine until full blood glucose normalization is achieved",
        "Infusing dextrose alone in a severely thiamine-deficient patient accelerates intracellular thiamine depletion, triggering irreversible hemorrhagic necrosis of the mammillary bodies and Korsakoff syndrome."
      ],
      [
        "Perform emergent brain MRI and lumbar puncture before administering any vitamins or glucose infusions",
        "Wernicke encephalopathy is a clinical diagnosis; delaying thiamine and glucose administration for diagnostic neuroimaging or lumbar puncture can cause permanent irreversible brain damage."
      ],
      [
        "Administer oral thiamine 100 mg daily with a normal hospital diet, as oral bioavailability is completely preserved in alcohol use disorder",
        "Chronic alcoholism causes severe downregulation of intestinal thiamine transporters (THTR-1 and THTR-2); oral thiamine is poorly absorbed and completely inadequate for treating acute Wernicke encephalopathy."
      ],
      [
        "Administer intravenous haloperidol 5 mg to treat confusion and confabulation before nutritional repletion",
        "Antipsychotics do not treat the underlying metabolic defect, lower the seizure threshold, and worsen cerebellar ataxia and hypothermia."
      ]
    ],
    "rationale": "Wernicke encephalopathy is caused by thiamine (vitamin B1) deficiency, presenting with the triad of encephalopathy, oculomotor dysfunction (nystagmus, bilateral CN VI palsies), and ataxia. Thiamine is an essential cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase. Giving intravenous dextrose without thiamine accelerates cellular thiamine consumption, precipitating acute lactic acidosis and hemorrhagic necrosis of the mammillary bodies and periaqueductal gray, leading to irreversible Korsakoff psychosis or death. High-dose IV thiamine must always precede or accompany IV dextrose.",
    "metadata": {
      "shortSolution": "Malnourished alcoholic with hypoglycemia, confusion, nystagmus/CN VI palsy, and ataxia has Wernicke encephalopathy; IV thiamine must precede or accompany IV dextrose to prevent mammillary body necrosis.",
      "competingChoice": "Administer a rapid bolus of 50% intravenous dextrose immediately and defer thiamine until full blood glucose normalization is achieved",
      "exclusionFinding": "Giving dextrose alone in severe thiamine deficiency exhausts remaining thiamine stores, precipitating acute mammillary body necrosis and irreversible Korsakoff psychosis.",
      "pedagogicalValue": "Understanding the metabolic mechanism of thiamine in carbohydrate metabolism and why IV thiamine must always precede or accompany dextrose administration.",
      "citations": [
        "Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol. 2010;17(12):1408-1418. PMID: 20642627.",
        "Sechi G, Serra A. Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol. 2007;6(5):442-455. PMID: 17434099."
      ]
    },
    "critique": {
      "shortestValidSolution": "Hypoglycemic alcoholic with Wernicke triad (confusion, nystagmus, ataxia) -> IV thiamine before/with IV dextrose.",
      "strongestCompetitor": "Administer a rapid bolus of 50% intravenous dextrose immediately and defer thiamine until full blood glucose normalization is achieved",
      "exclusionFinding": "Dextrose without thiamine exhausts thiamine stores and precipitates irreversible hemorrhagic necrosis of mammillary bodies.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Malnourished alcoholic with hypoglycemia, confusion, nystagmus/CN VI palsy, and ataxia has Wernicke encephalopathy; IV thiamine must precede or accompany IV dextrose to prevent mammillary body necrosis.",
      "distractorExclusionNotes": "Distractor exclusion verified: Giving dextrose alone in severe thiamine deficiency exhausts remaining thiamine stores, precipitating acute mammillary body necrosis and irreversible Korsakoff psychosis.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Malnourished alcoholic with hypoglycemia, confusion, nystagmus/CN VI palsy, and ataxia has Wernicke encephalopathy; IV thiamine must precede or accompany IV dextrose to prevent mammillary body necrosis.",
    "necessaryInference": "Malnourished alcoholic with hypoglycemia, confusion, nystagmus/CN VI palsy, and ataxia has Wernicke encephalopathy; IV thiamine must precede or accompany IV dextrose to prevent mammillary body necrosis.",
    "strongestDistractor": "Administer a rapid bolus of 50% intravenous dextrose immediately and defer thiamine until full blood glucose normalization is achieved",
    "distractorExclusion": "Giving dextrose alone in severe thiamine deficiency exhausts remaining thiamine stores, precipitating acute mammillary body necrosis and irreversible Korsakoff psychosis.",
    "citation": "Galvin R, Brathen G, Ivashynka A, et al. EFNS guidelines for diagnosis, therapy and prevention of Wernicke encephalopathy. Eur J Neurol. 2010;17(12):1408-1418. PMID: 20642627."
  },
  {
    "code": "op-c-s2-0463",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Epidural Hematoma and Emergent Surgical Indications",
    "subtopic": "Middle Meningeal Artery, Lucid Interval, Biconvex Hematoma, Craniotomy",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college hockey player is struck on the right side of the head by a puck. He experiences a brief 30-second loss of consciousness, but rapidly awakens, answers questions appropriately, and insists he feels fine (lucid interval). Two hours later while sitting on the team bench, he develops a severe throbbing headache, becomes increasingly somnolent, and vomits repeatedly. Paramedics are summoned. On arrival in the emergency department, his Glasgow Coma Scale (GCS) score is 9 (E2V2M5). Physical examination demonstrates a dilated, sluggishly reactive right pupil (5 mm) and a briskly reactive left pupil (3 mm). Motor examination reveals left-sided hemiparesis with pronator drift and a positive left Babinski sign. Vital signs reveal blood pressure of 172/94 mm Hg, heart rate of 52/min, and respiratory rate of 12/min (Cushing triad). Emergent non-contrast head CT demonstrates a hyperdense, biconvex (lenticular) extra-axial collection along the right temporoparietal convexity that does not cross cranial suture lines. The hematoma volume is calculated at 42 cm3 with a 9-mm midline shift and compression of the right lateral ventricle.\n\nWhich of the following represents the most appropriate immediate definitive management for this patient?",
    "choices": [
      [
        "Emergent right-sided craniotomy and surgical evacuation of the hematoma with middle meningeal artery ligation",
        "Epidural Hematoma (EDH) typically results from blunt trauma to the pterion (the thinnest portion of the lateral skull), causing a fracture of the temporal bone that lacerates the MIDDLE MENINGEAL ARTERY (a branch of the maxillary artery) or its associated dural veins. (1) CLINICAL COURSE: Classic presentation features a brief loss of consciousness, followed by a temporary symptom-free 'lucid interval', culminating in rapid, catastrophic deterioration as arterial blood strips the tightly adherent dura from the inner skull table. Progressive mass effect produces ipsilateral uncal herniation, compressing the ipsilateral oculomotor nerve (CN III parasympathetic fibers, causing an uncal blown pupil) and the ipsilateral cerebral peduncle (causing contralateral hemiparesis). Cushing triad (hypertension, bradycardia, irregular respiration) signals life-threatening brainstem compression. (2) NEUROIMAGING: Biconvex (lentiform), hyperdense extra-axial collection limited by cranial suture lines where the dura is firmly anchored. (3) SURGICAL CRITERIA (BRAIN TRAUMA FOUNDATION GUIDELINES): Immediate surgical evacuation via craniotomy is an absolute surgical emergency for: (a) Hematoma volume > 30 cm3 regardless of GCS score, OR (b) GCS score < 9 with midline shift >= 5 mm or pupillary asymmetry. Withholding emergent craniotomy for conservative observation or medical therapies in this rapidly expanding 42-cm3 arterial hematoma leads to fatal brainstem herniation."
      ],
      [
        "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
        "Conservative observation is strictly limited to small (< 30 cm3), asymptomatic epidural hematomas with < 5 mm midline shift and normal GCS; observing a 42-cm3 hematoma with pupillary dilation and Cushing triad is fatal."
      ],
      [
        "Administer intravenous mannitol 1 g/kg and hypertonic saline bolus as definitive standalone therapy without surgical intervention",
        "Osmotic diuretics (mannitol/hypertonic saline) are temporary bridging maneuvers to transiently reduce brain edema en route to the operating room; they cannot arrest arterial bleeding or evacuate a 42-cm3 clot."
      ],
      [
        "Perform bedside burr hole trephination and leave an external ventricular drain in the right lateral ventricle",
        "Burr hole trephination can easily miss a thick solid clotted epidural hematoma and fails to achieve hemostasis of the lacerated middle meningeal artery; formal craniotomy is required."
      ],
      [
        "Administer intravenous tranexamic acid and high-dose dexamethasone to promote clot resorption",
        "Corticosteroids are contraindicated in acute traumatic brain injury (CRASH trial proved increased mortality); medical therapies do not decompress mechanical arterial hematomas."
      ]
    ],
    "rationale": "Epidural hematoma is caused by laceration of the middle meningeal artery after temporal bone trauma, presenting with a lucid interval followed by rapid coma, ipsilateral mydriasis (CN III compression), and contralateral hemiparesis. Brain CT shows a biconvex extra-axial collection limited by sutures. The Brain Trauma Foundation mandates emergent craniotomy and clot evacuation for hematomas > 30 cm3, or when GCS < 9, midline shift >= 5 mm, or pupillary asymmetry is present. Medical osmotic therapy is only a bridge to the operating room.",
    "metadata": {
      "shortSolution": "Head trauma victim with lucid interval, right blown pupil, left hemiparesis, Cushing triad, and 42-mL biconvex hematoma requires emergent surgical craniotomy and evacuation.",
      "competingChoice": "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
      "exclusionFinding": "EDH volume > 30 cm3, GCS < 9, midline shift 9 mm, and pupillary dilation are absolute indications for emergent surgical evacuation; observation is fatal.",
      "pedagogicalValue": "Recognizing the clinical features of epidural hematoma (middle meningeal artery, lucid interval) and knowing the surgical threshold (> 30 cm3, GCS < 9, or anisocoria).",
      "citations": [
        "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Neurosurgery. 2006;58(3 Suppl):S7-S15. PMID: 16540746.",
        "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15. PMID: 27654000."
      ]
    },
    "critique": {
      "shortestValidSolution": "Lucid interval + blown pupil + 42 cm3 biconvex hematoma -> emergent craniotomy and evacuation.",
      "strongestCompetitor": "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
      "exclusionFinding": "Volume > 30 cm3 and anisocoria mandate emergent surgery; conservative management leads to fatal herniation.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Head trauma victim with lucid interval, right blown pupil, left hemiparesis, Cushing triad, and 42-mL biconvex hematoma requires emergent surgical craniotomy and evacuation.",
      "distractorExclusionNotes": "Distractor exclusion verified: EDH volume > 30 cm3, GCS < 9, midline shift 9 mm, and pupillary dilation are absolute indications for emergent surgical evacuation; observation is fatal.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Head trauma victim with lucid interval, right blown pupil, left hemiparesis, Cushing triad, and 42-mL biconvex hematoma requires emergent surgical craniotomy and evacuation.",
    "necessaryInference": "Head trauma victim with lucid interval, right blown pupil, left hemiparesis, Cushing triad, and 42-mL biconvex hematoma requires emergent surgical craniotomy and evacuation.",
    "strongestDistractor": "Admit to the neurointensive care unit for continuous intracranial pressure monitoring and conservative serial head CT scans",
    "distractorExclusion": "EDH volume > 30 cm3, GCS < 9, midline shift 9 mm, and pupillary dilation are absolute indications for emergent surgical evacuation; observation is fatal.",
    "citation": "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Neurosurgery. 2006;58(3 Suppl):S7-S15. PMID: 16540746."
  },
  {
    "code": "op-c-s2-0464",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Subdural Hematoma in Anticoagulated Elderly Patients",
    "subtopic": "Bridging Cortical Veins, Crescentic Shape, Anticoagulation Reversal, Surgical Decompression",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old man with non-valvular atrial fibrillation treated with warfarin (INR 2.8) is brought to the emergency department after his family noticed progressive confusion, somnolence, and unsteady gait over the past 5 days. Three weeks ago, he suffered a ground-level mechanical fall at home without reported loss of consciousness. On physical examination, the patient is obtunded, opening eyes only to loud voice and oriented only to person (GCS 12: E3V4M5). Neurological examination reveals mild right pronator drift, flattened right nasolabial fold, and hyperreflexia with an extensor plantar response on the right. Vital signs demonstrate blood pressure of 164/88 mm Hg and heart rate of 64/min. Emergent non-contrast head CT demonstrates a large, crescent-shaped, mixed-density (predominantly isodense-to-hypodense with dependent hyperdense areas) extra-axial fluid collection extending along the entire left cerebral convexity. The collection crosses cranial suture lines, measures 16 mm in maximal thickness, causes 10 mm of left-to-right midline shift, and compresses the left lateral ventricle.\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediate intravenous administration of 4-factor prothrombin complex concentrate (4F-PCC) and intravenous vitamin K, followed by urgent surgical evacuation (burr hole craniostomy or craniotomy)",
        "Subdural Hematoma (SDH) in the elderly results from age-related cerebral cortical atrophy, which increases the distance between the brain surface and dural venous sinuses, placing mechanical traction on BRIDGING CORTICAL VEINS. Minor blunt trauma tears these fragile bridging veins, producing venous bleeding into the subdural space. (1) IMAGING: Crescentic (concave inward) collection that freely crosses cranial suture lines (dura is not anchored to sutures) but is limited by dural reflections (falx cerebri and tentorium cerebelli). Mixed density indicates chronic fluid with acute rebleeding ('acute-on-chronic' subdural hematoma). (2) MANAGEMENT SEQUENCE: (a) IMMEDIATE WARFARIN REVERSAL: Performing emergent neurosurgery with an elevated INR (2.8) leads to uncontrollable intraoperative hemorrhage. Immediate, rapid reversal with intravenous 4-factor Prothrombin Complex Concentrate (4F-PCC, 25-50 U/kg) normalizes the INR within 15 to 30 minutes, combined with intravenous vitamin K (10 mg) to sustain hepatic coagulation factor synthesis. Fresh frozen plasma is second-line and unacceptably slow. (b) URGENT SURGICAL EVACUATION: Brain Trauma Foundation guidelines mandate urgent surgical evacuation (burr hole craniostomy or craniotomy) for subdural hematomas with a thickness > 10 mm or midline shift > 5 mm, or whenever progressive neurological decline occurs."
      ],
      [
        "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
        "Attempting neurosurgery without pre-reversing warfarin using 4F-PCC causes massive, uncontrollable intraoperative hemorrhage; 4F-PCC normalizes INR in minutes and must precede skin incision."
      ],
      [
        "Administer oral vitamin K 10 mg and admit to the intensive care unit for serial neurological examinations over the next 48 hours",
        "Oral vitamin K requires 24 hours to synthesize clotting factors and fails to provide rapid reversal; deferring surgery for a 16-mm hematoma with 10-mm midline shift causes fatal uncal herniation."
      ],
      [
        "Administer intravenous recombinant factor VIIa (rFVIIa) monotherapy and observe without surgical decompression",
        "Recombinant factor VIIa carries high arterial thromboembolic risk and is inferior to 4F-PCC for warfarin reversal; furthermore, 10 mm of midline shift requires mechanical surgical evacuation."
      ],
      [
        "Perform emergent lumbar puncture to reduce elevated intracranial pressure and drain subdural blood",
        "Lumbar puncture in the presence of 10 mm of midline shift and asymmetric intracranial mass effect precipitates fatal transtentorial or tonsillar brain herniation."
      ]
    ],
    "rationale": "Subdural hematoma in the elderly results from tearing of bridging cortical veins, appearing crescent-shaped and crossing suture lines. Acute surgical evacuation (burr hole craniostomy or craniotomy) is indicated for thickness > 10 mm or midline shift > 5 mm. In an anticoagulated patient taking warfarin, rapid reversal with 4-factor prothrombin complex concentrate (4F-PCC) and IV vitamin K is mandatory before surgical intervention to prevent catastrophic intraoperative hemorrhage. Lumbar puncture is strictly contraindicated due to herniation risk.",
    "metadata": {
      "shortSolution": "Elderly patient on warfarin with crescentic subdural hematoma (thickness 16 mm, midline shift 10 mm) requires immediate reversal with 4F-PCC + IV vitamin K followed by urgent surgical evacuation.",
      "competingChoice": "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
      "exclusionFinding": "Operating with INR 2.8 causes fatal intraoperative hemorrhage; 4F-PCC achieves rapid INR normalization within 15-30 minutes and must precede neurosurgical incision.",
      "pedagogicalValue": "Recognizing the anatomy of subdural hematoma (bridging veins, crescentic) and the critical protocol of rapid anticoagulation reversal (4F-PCC) before surgical evacuation.",
      "citations": [
        "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute subdural hematomas. Neurosurgery. 2006;58(3 Suppl):S16-S24. PMID: 16540747.",
        "Frontera JA, Lewin JJ 3rd, Rabinstein AA, et al. Guideline for Reversal of Antithrombotics in Intracranial Hemorrhage. Neurocrit Care. 2016;24(1):6-46. PMID: 26698823."
      ]
    },
    "critique": {
      "shortestValidSolution": "Warfarin patient + SDH (16 mm, 10 mm shift) -> 4F-PCC + IV vitamin K for rapid reversal, then urgent surgical evacuation.",
      "strongestCompetitor": "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
      "exclusionFinding": "4F-PCC reverses INR within minutes and is mandatory before incision to prevent uncontrollable surgical hemorrhage.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly patient on warfarin with crescentic subdural hematoma (thickness 16 mm, midline shift 10 mm) requires immediate reversal with 4F-PCC + IV vitamin K followed by urgent surgical evacuation.",
      "distractorExclusionNotes": "Distractor exclusion verified: Operating with INR 2.8 causes fatal intraoperative hemorrhage; 4F-PCC achieves rapid INR normalization within 15-30 minutes and must precede neurosurgical incision.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly patient on warfarin with crescentic subdural hematoma (thickness 16 mm, midline shift 10 mm) requires immediate reversal with 4F-PCC + IV vitamin K followed by urgent surgical evacuation.",
    "necessaryInference": "Elderly patient on warfarin with crescentic subdural hematoma (thickness 16 mm, midline shift 10 mm) requires immediate reversal with 4F-PCC + IV vitamin K followed by urgent surgical evacuation.",
    "strongestDistractor": "Proceed immediately to emergency craniotomy in the operating room while infusing fresh frozen plasma during the surgical procedure",
    "distractorExclusion": "Operating with INR 2.8 causes fatal intraoperative hemorrhage; 4F-PCC achieves rapid INR normalization within 15-30 minutes and must precede neurosurgical incision.",
    "citation": "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute subdural hematomas. Neurosurgery. 2006;58(3 Suppl):S16-S24. PMID: 16540747."
  },
  {
    "code": "op-c-s2-0465",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Uncal Herniation and the Kernohan Notch Phenomenon",
    "subtopic": "Transtentorial Herniation, Oculomotor Nerve Compression, False Localizing Sign",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old woman is admitted to the neurocritical care unit after sustaining a severe traumatic brain injury in a motor vehicle collision. Admission CT scan revealed an acute left-sided subdural hematoma with 8 mm of midline shift. Six hours after admission, her neurological status deteriorates acutely. Her GCS score drops from 11 to 6. On physical examination, her left pupil is 6 mm, fixed, and completely unreactive to light, while the right pupil is 3 mm and briskly reactive. Neurological examination reveals left-sided spastic hemiparesis with hyperactive left knee and ankle jerks and an extensor plantar response (positive Babinski sign) on the left side, with preserved motor movement on the right side. Vital signs show blood pressure of 184/96 mm Hg, heart rate of 48/min, and irregular respirations.\n\nWhich of the following anatomical mechanisms best explains the paradoxical presence of left-sided (ipsilateral) hemiparesis in the setting of an expanding left-sided intracranial mass lesion?",
    "choices": [
      [
        "Compression of the contralateral (right) cerebral peduncle against the rigid tentorial edge (Kernohan notch phenomenon)",
        "Uncal (lateral transtentorial) herniation occurs when an expanding supratentorial mass (such as an acute left subdural hematoma) forces the medial temporal lobe (the uncus) downward and medially over the tentorium cerebelli into the posterior fossa. (1) CLASSIC PRESENTATION: (a) Compression of the ipsilateral (left) oculomotor nerve (CN III): The superficial, parasympathetic pupilloconstrictor fibers of CN III are compressed against the petroclinoid ligament, causing an ipsilateral dilated, 'blown', unreactive pupil. (b) Compression of the ipsilateral (left) cerebral peduncle (containing descending corticospinal motor tracts before their decussation in the caudal medulla): This classically produces CONTRALATERAL (right-sided) hemiparesis. (2) PARADOXICAL LOCALIZING SIGN (KERNOHAN NOTCH PHENOMENON): In severe or rapid herniation, the expanding left hemispheric mass pushes the entire midbrain across the tentorial incisura toward the opposite side. The CONTRALATERAL (right) cerebral peduncle is forced against the rigid, free edge of the CONTRALATERAL tentorium cerebelli (the Kernohan notch). Because the right corticospinal tract decussates in the medulla below, damage to the right cerebral peduncle results in IPSILATERAL (left-sided) hemiparesis\u2014a classic 'false localizing sign'. Recognizing this phenomenon prevents catastrophic neurosurgical exploration of the incorrect cerebral hemisphere."
      ],
      [
        "Subfalcine herniation causing mechanical compression of the contralateral right anterior cerebral artery",
        "Subfalcine herniation forces the cingulate gyrus beneath the falx cerebri, compressing the anterior cerebral artery and producing contralateral lower-extremity motor weakness, not ipsilateral hemiparesis with an ipsilateral blown pupil."
      ],
      [
        "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
        "Infarction of the left internal capsule damages left descending corticospinal fibers before decussation, which produces contralateral (right-sided) hemiparesis, not ipsilateral hemiparesis."
      ],
      [
        "Downward cerebellar tonsillar herniation through the foramen magnum compressing the lower medullary pyramids",
        "Tonsillar herniation compresses the lower medulla and respiratory centers, causing sudden respiratory arrest and quadriparesis, not isolated ipsilateral hemiparesis with an isolated unilateral blown pupil."
      ],
      [
        "Central transtentorial herniation causing bilateral diencephalic compression and decorticate posturing",
        "Central herniation causes downward displacement of both cerebral hemispheres, presenting with initial small reactive pupils, Cheyne-Stokes breathing, and bilateral motor decorticate posturing."
      ]
    ],
    "rationale": "In uncal herniation from a left-sided mass, compression of the ipsilateral (left) CN III causes an ipsilateral blown pupil. While compression of the left cerebral peduncle causes contralateral (right) hemiparesis, severe lateral midbrain displacement can force the opposite (right) cerebral peduncle against the sharp contralateral tentorial margin (Kernohan notch). Injury to the right corticospinal fibers results in paradoxical ipsilateral (left) hemiparesis\u2014the Kernohan notch phenomenon, a classic false localizing sign.",
    "metadata": {
      "shortSolution": "Expanding left hemispheric mass with left blown pupil and paradoxical left hemiparesis is caused by the Kernohan notch phenomenon: lateral displacement of the midbrain compressing the contralateral (right) cerebral peduncle against the tentorial edge.",
      "competingChoice": "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
      "exclusionFinding": "Left internal capsule injury causes right-sided (contralateral) hemiparesis; left-sided hemiparesis from a left mass requires compression of the right cerebral peduncle (Kernohan notch).",
      "pedagogicalValue": "Understanding the Kernohan notch phenomenon as an essential false localizing sign in neurocritical care (ipsilateral hemiparesis due to contralateral cerebral peduncle compression against the tentorium).",
      "citations": [
        "Kernohan JW, Woltman HW. Incisural notch; a method of producing ipsilateral paralysis in cases of brain tumor. Arch Neurol Psychiatry. 1929;22(5):981-987. DOI: 10.1001/archneurpsyc.1929.02220050117009.",
        "Plum F, Posner JB. The Diagnosis of Stupor and Coma. 4th ed. Oxford University Press; 2007:54-88. NLM ID: 101314995."
      ]
    },
    "critique": {
      "shortestValidSolution": "Left mass + left blown pupil + left hemiparesis -> Kernohan notch (right cerebral peduncle compressed against tentorial edge).",
      "strongestCompetitor": "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
      "exclusionFinding": "Left internal capsule damage produces right hemiparesis; left hemiparesis requires right peduncle compression.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Expanding left hemispheric mass with left blown pupil and paradoxical left hemiparesis is caused by the Kernohan notch phenomenon: lateral displacement of the midbrain compressing the contralateral (right) cerebral peduncle against the tentorial edge.",
      "distractorExclusionNotes": "Distractor exclusion verified: Left internal capsule injury causes right-sided (contralateral) hemiparesis; left-sided hemiparesis from a left mass requires compression of the right cerebral peduncle (Kernohan notch).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Expanding left hemispheric mass with left blown pupil and paradoxical left hemiparesis is caused by the Kernohan notch phenomenon: lateral displacement of the midbrain compressing the contralateral (right) cerebral peduncle against the tentorial edge.",
    "necessaryInference": "Expanding left hemispheric mass with left blown pupil and paradoxical left hemiparesis is caused by the Kernohan notch phenomenon: lateral displacement of the midbrain compressing the contralateral (right) cerebral peduncle against the tentorial edge.",
    "strongestDistractor": "Direct ischemic necrosis of the ipsilateral left internal capsule due to anterior choroidal artery compression",
    "distractorExclusion": "Left internal capsule injury causes right-sided (contralateral) hemiparesis; left-sided hemiparesis from a left mass requires compression of the right cerebral peduncle (Kernohan notch).",
    "citation": "Kernohan JW, Woltman HW. Incisural notch; a method of producing ipsilateral paralysis in cases of brain tumor. Arch Neurol Psychiatry. 1929;22(5):981-987. DOI: 10.1001/archneurpsyc.1929.02220050117009."
  },
  {
    "code": "op-c-s2-0466",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Cauda Equina Syndrome vs Conus Medullaris Syndrome",
    "subtopic": "Saddle Anesthesia, Overflow Incontinence, Emergent Decompression",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old construction worker presents to the emergency department with severe, sharp lower back pain that radiates down the posterior aspect of both legs to his heels, which began after lifting heavy lumber 18 hours ago. Over the past 6 hours, he has felt a 'deadness' in his groin and inner thighs and noticed difficulty initiating urination; when he does void, he only passes small trickles of urine. Physical examination reveals an uncomfortable man in severe pain. Neurological examination reveals marked bilateral flaccid weakness of foot dorsiflexion (strength 2/5 bilaterally) and plantar flexion (strength 3/5 bilaterally). Sensation to light touch and pinprick is completely absent over the perianal, perineal, and medial upper thigh regions (S2-S5 dermatomes; saddle anesthesia). Patellar reflexes are 1+ bilaterally, and Achilles reflexes are absent (0/4) bilaterally. Digital rectal examination demonstrates absent anal sphincter tone and absent bulbocavernosus reflex. Post-void bladder ultrasound scan reveals a retained urine volume of 650 mL.\n\nWhich of the following represents the most appropriate immediate diagnostic and therapeutic strategy for this patient?",
    "choices": [
      [
        "Perform emergent lumbosacral spine magnetic resonance imaging (MRI) followed by urgent surgical decompressive laminectomy within 24 to 48 hours",
        "Cauda Equina Syndrome (CES) is a surgical emergency caused by mechanical compression of the lumbosacral nerve roots (L2 to S5) forming the cauda equina within the spinal canal below the termination of the conus medullaris (which ends at L1-L2). Most commonly caused by a massive central disc herniation (typically at L4-L5 or L5-S1). (1) CLINICAL HALLMARKS: (a) Saddle anesthesia: Sensory loss over dermatomes S2-S5 (perineum, anus, buttocks, inner thighs); (b) Bowel and bladder dysfunction: Urinary retention with overflow incontinence (demonstrated by high post-void residual > 200-500 mL) and loss of anal sphincter tone; (c) Lower extremity motor weakness: Flaccid, asymmetric or bilateral lower motor neuron (LMN) weakness with hyporeflexia/areflexia (absent Achilles reflexes); and (d) Bilateral sciatica. (2) CONTRAST WITH CONUS MEDULLARIS SYNDROME: Conus medullaris syndrome involves the terminal spinal cord (at L1-L2 vertebral level) and exhibits mixed UMN/LMN signs, symmetric perianal sensory loss, early bowel/bladder dysfunction, preserved ankle reflexes, and hyperreflexia/Babinski sign. (3) TIMING OF SURGERY: Emergent non-contrast MRI of the lumbosacral spine is the imaging modality of choice. Surgical decompressive laminectomy within 24 to 48 hours of symptom onset is mandatory; delays beyond 48 hours dramatically increase the risk of permanent, irreversible bladder paralysis, fecal incontinence, and sexual impotence."
      ],
      [
        "Administer oral muscle relaxants and nonsteroidal anti-inflammatory drugs, scheduling outpatient physical therapy in 2 weeks",
        "Cauda equina syndrome is an absolute surgical emergency; conservative management causes irreversible lifelong urinary incontinence, fecal incontinence, and bilateral motor paralysis."
      ],
      [
        "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
        "Epidural steroid injection does not relieve massive mechanical canal occlusion from a herniated disc fragment and delays emergency surgical decompression."
      ],
      [
        "Obtain plain standing radiographs of the lumbosacral spine and discharge with an indwelling urinary catheter",
        "Plain radiographs cannot evaluate soft tissue disc herniations or neural canal compression; MRI is mandatory to visualize the cauda equina."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 30 mg/kg bolus followed by a 24-hour infusion without imaging",
        "High-dose systemic corticosteroids have no proven benefit in cauda equina compression and carry significant risks of gastric ulceration and wound infection without relieving the physical structural mass."
      ]
    ],
    "rationale": "Cauda equina syndrome results from massive compression of the lumbosacral nerve roots below L2, presenting with bilateral radiculopathy, flaccid lower extremity weakness, absent Achilles reflexes, saddle anesthesia (S2-S5), and urinary retention with overflow incontinence (> 500 mL post-void residual). Emergent lumbosacral MRI is mandatory to confirm the diagnosis, followed by urgent surgical decompression (laminectomy) within 24-48 hours to prevent irreversible bowel, bladder, and sexual dysfunction.",
    "metadata": {
      "shortSolution": "Patient with saddle anesthesia, bilateral lower extremity weakness, absent anal tone, and urinary retention (650 mL residual) has Cauda Equina Syndrome; requires emergent MRI and urgent surgical decompression within 24-48 hours.",
      "competingChoice": "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
      "exclusionFinding": "Steroid injections do not decompress mechanical disc extrusion and delay urgent surgical laminectomy, which must occur within 24-48 hours to prevent permanent incontinence.",
      "pedagogicalValue": "Differentiating cauda equina syndrome (pure LMN, saddle anesthesia, urinary retention) and knowing the urgency of MRI and surgical decompression within 24-48 hours.",
      "citations": [
        "Fraser S, Roberts L, Murphy E. Cauda equina syndrome: a literature review of its definition, aetiology, clinical presentation, diagnosis and surgical management. Emerg Med J. 2009;26(10):700-704. PMID: 19773489.",
        "Todd NV. Guidelines for cauda equina syndrome. Red flags and white flags. Systematic review and opinion. Spine (Phila Pa 1976). 2017;42(13):E790-E797. PMID: 27820718."
      ]
    },
    "critique": {
      "shortestValidSolution": "Saddle anesthesia + urinary retention (650 mL) + absent anal tone -> Cauda Equina Syndrome -> emergent MRI + urgent surgical decompression (< 24-48h).",
      "strongestCompetitor": "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
      "exclusionFinding": "Mechanical disc compression of cauda equina requires emergent surgical decompression; epidural steroids fail to decompress and cause permanent nerve deficits.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient with saddle anesthesia, bilateral lower extremity weakness, absent anal tone, and urinary retention (650 mL residual) has Cauda Equina Syndrome; requires emergent MRI and urgent surgical decompression within 24-48 hours.",
      "distractorExclusionNotes": "Distractor exclusion verified: Steroid injections do not decompress mechanical disc extrusion and delay urgent surgical laminectomy, which must occur within 24-48 hours to prevent permanent incontinence.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient with saddle anesthesia, bilateral lower extremity weakness, absent anal tone, and urinary retention (650 mL residual) has Cauda Equina Syndrome; requires emergent MRI and urgent surgical decompression within 24-48 hours.",
    "necessaryInference": "Patient with saddle anesthesia, bilateral lower extremity weakness, absent anal tone, and urinary retention (650 mL residual) has Cauda Equina Syndrome; requires emergent MRI and urgent surgical decompression within 24-48 hours.",
    "strongestDistractor": "Perform an emergent fluoroscopy-guided epidural corticosteroid injection to reduce nerve root inflammation",
    "distractorExclusion": "Steroid injections do not decompress mechanical disc extrusion and delay urgent surgical laminectomy, which must occur within 24-48 hours to prevent permanent incontinence.",
    "citation": "Fraser S, Roberts L, Murphy E. Cauda equina syndrome: a literature review of its definition, aetiology, clinical presentation, diagnosis and surgical management. Emerg Med J. 2009;26(10):700-704. PMID: 19773489."
  },
  {
    "code": "op-c-s2-0467",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Angle-Closure Glaucoma",
    "subtopic": "Pupillary Block, Intraocular Pressure, Multi-Agent Medical Regimen, Laser Iridotomy",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman of East Asian descent presents to the emergency department with severe, agonizing right eye pain and right-sided hemicranial headache that began 2 hours ago while watching a movie in a darkened cinema. She also reports blurred vision, seeing rainbow-colored halos surrounding streetlights, and persistent nausea with two episodes of emesis. On physical examination, she is in extreme distress, clutching her right orbit. Visual acuity in the right eye is 20/200 and in the left eye is 20/25. Examination of the right eye reveals intense conjunctival ciliary injection, a cloudy ('steamy') cornea, shallow anterior chamber depth, and a fixed, mid-dilated (5 mm) pupil that does not respond to light. The right globe feels rock-hard to gentle palpation through the closed eyelid. Applanation tonometry reveals an intraocular pressure (IOP) of 58 mm Hg in the right eye (normal 10 to 21 mm Hg) and 16 mm Hg in the left eye.\n\nWhich of the following represents the most appropriate immediate medical management sequence followed by definitive therapy for this patient?",
    "choices": [
      [
        "Immediate administration of topical timolol, apraclonidine, and pilocarpine combined with intravenous acetazolamide (or mannitol), followed by emergent bilateral laser peripheral iridotomy",
        "Acute Angle-Closure Glaucoma (AACG) is an ophthalmologic emergency occurring predominantly in predisposed individuals (hyperopia, shallow anterior chambers, East Asian or Inuit ancestry). Pupillary dilation (e.g., in a dark cinema or after sympathomimetic/anticholinergic drugs) causes the peripheral iris to contact the lens, blocking aqueous humor flow from the posterior chamber through the pupil (pupillary block). Pressure builds behind the iris, bowing it forward against the trabecular meshwork and abruptly occluding the iridocorneal filtration angle, causing intraocular pressure to surge (> 40 to 80 mm Hg). (1) CLINICAL PRESENTATION: Severe ocular pain, headache, halos around lights, nausea/vomiting, ciliary injection, cloudy/steamy cornea, and a fixed, mid-dilated pupil. (2) IMMEDIATE MULTI-AGENT MEDICAL THERAPY: Aimed at rapidly lowering IOP to protect the optic nerve: (a) TOPICAL TIMOLOL (beta-blocker) and APRACLONIDINE (alpha-2 agonist) to reduce aqueous humor synthesis; (b) TOPICAL PILOCARPINE (muscarinic cholinergic agonist) to induce miosis, pulling the peripheral iris away from the trabecular meshwork (administered once IOP drops < 40-50 mm Hg, as high IOP causes ischemic iris sphincter paralysis); (c) SYSTEMIC ACETAZOLAMIDE (intravenous carbonic anhydrase inhibitor) or IV MANNITOL (osmotic agent) for rapid vitreous dehydration. (3) DEFINITIVE SURGICAL THERAPY: Laser Peripheral Iridotomy (LPI) creates a full-thickness hole in the iris to equalize pressure between chambers. BILATERAL IRIDOTOMY IS MANDATORY because the contralateral eye has identical shallow anatomical angles and an 80% risk of acute closure."
      ],
      [
        "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
        "Topical atropine and anticholinergics cause pupillary dilation (mydriasis), which further bunches the peripheral iris into the filtration angle, completely occluding drainage and causing irreversible blindness."
      ],
      [
        "Immediate performance of right eye anterior chamber paracentesis with an 18-gauge needle at the bedside without medications",
        "Needle paracentesis through an acutely congested anterior chamber risks lens puncture, intraocular hemorrhage, and endophthalmitis; multi-agent pharmacotherapy followed by laser iridotomy is standard."
      ],
      [
        "Administer intravenous methylprednisolone 1,000 mg daily for optic neuritis and consult neurology",
        "Optic neuritis presents with central scotoma and painful eye movements without steamy cornea, mid-dilated fixed pupil, or intraocular pressure > 50 mm Hg; corticosteroids provide zero benefit in angle closure."
      ],
      [
        "Unilateral right eye surgical trabeculectomy with no intervention or follow-up directed at the unaffected left eye",
        "Laser peripheral iridotomy is the definitive procedure, not trabeculectomy; furthermore, failing to treat the contralateral eye leaves it at an 80% risk of subsequent acute angle closure."
      ]
    ],
    "rationale": "Acute angle-closure glaucoma is an ophthalmic emergency caused by pupillary block occluding the trabecular meshwork in patients with shallow anterior chambers (e.g., triggered by darkness/mydriasis). Signs: steamy cornea, fixed mid-dilated pupil, rock-hard globe, IOP > 40-50 mm Hg. Medical management combines topical aqueous suppressants (timolol, apraclonidine), miosis (pilocarpine), and systemic agents (IV acetazolamide or mannitol). Definitive treatment is bilateral laser peripheral iridotomy (LPI); the unaffected eye must be treated prophylactically because of identical predisposing anatomy.",
    "metadata": {
      "shortSolution": "Acute eye pain, halos, steamy cornea, fixed mid-dilated pupil, and IOP 58 mm Hg is acute angle-closure glaucoma; treated with topical suppressants + IV acetazolamide followed by bilateral laser peripheral iridotomy.",
      "competingChoice": "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
      "exclusionFinding": "Atropine causes mydriasis, which worsens angle closure and leads to permanent blindness; miosis and aqueous suppression are required.",
      "pedagogicalValue": "Mastering the presentation, multi-agent medical regimen, and necessity of bilateral laser peripheral iridotomy in acute angle-closure glaucoma.",
      "citations": [
        "Weinreb RN, Aung T, Medeiros FA. The pathophysiology and treatment of glaucoma: a review. JAMA. 2014;311(18):1901-1911. PMID: 24825645.",
        "Prum BE Jr, Herndon LW Jr, Moroi SE, et al. Primary Angle Closure Preferred Practice Pattern(R) Guidelines. Ophthalmology. 2016;123(1):P1-P40. PMID: 26581557."
      ]
    },
    "critique": {
      "shortestValidSolution": "Halos + steamy cornea + mid-dilated pupil + IOP 58 mm Hg -> medical IOP lowering (timolol, apraclonidine, acetazolamide, pilocarpine) + bilateral laser iridotomy.",
      "strongestCompetitor": "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
      "exclusionFinding": "Atropine causes mydriasis, further bunching the iris and worsening pupillary block; it is contraindicated.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute eye pain, halos, steamy cornea, fixed mid-dilated pupil, and IOP 58 mm Hg is acute angle-closure glaucoma; treated with topical suppressants + IV acetazolamide followed by bilateral laser peripheral iridotomy.",
      "distractorExclusionNotes": "Distractor exclusion verified: Atropine causes mydriasis, which worsens angle closure and leads to permanent blindness; miosis and aqueous suppression are required.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute eye pain, halos, steamy cornea, fixed mid-dilated pupil, and IOP 58 mm Hg is acute angle-closure glaucoma; treated with topical suppressants + IV acetazolamide followed by bilateral laser peripheral iridotomy.",
    "necessaryInference": "Acute eye pain, halos, steamy cornea, fixed mid-dilated pupil, and IOP 58 mm Hg is acute angle-closure glaucoma; treated with topical suppressants + IV acetazolamide followed by bilateral laser peripheral iridotomy.",
    "strongestDistractor": "Immediate administration of topical atropine 1% and cyclopentolate drops to relax the ciliary muscle and relieve pain",
    "distractorExclusion": "Atropine causes mydriasis, which worsens angle closure and leads to permanent blindness; miosis and aqueous suppression are required.",
    "citation": "Weinreb RN, Aung T, Medeiros FA. The pathophysiology and treatment of glaucoma: a review. JAMA. 2014;311(18):1901-1911. PMID: 24825645."
  },
  {
    "code": "op-c-s2-0468",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Central Retinal Artery Occlusion (CRAO)",
    "subtopic": "Painless Monocular Vision Loss, Cherry-Red Spot, Emergent Interventions, Stroke Workup",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents to the emergency department 90 minutes after experiencing sudden, catastrophic, painless loss of vision in his left eye while eating breakfast. He describes that his vision went completely black within seconds, 'like a window shade was pulled all the way down,' and has not improved. He has a history of coronary artery disease, hypertension, hyperlipidemia, and a 40 pack-year smoking history. Physical examination reveals an alert man in no distress. Visual acuity in the left eye is limited to bare perception of hand motions; visual acuity in the right eye is 20/20. Pupillary examination reveals a marked left relative afferent pupillary defect (Marcus Gunn pupil). Slit-lamp biomicroscopy of the anterior segment is normal with normal intraocular pressure (14 mm Hg bilaterally). Dilated funduscopic examination of the left eye reveals diffuse retinal whitening and pallor with attenuation of retinal arterioles, segmentation of the blood column within retinal venules ('boxcarring'), and a prominent, circular 'cherry-red spot' visible in the central macula. Examination of the right eye fundus is normal.\n\nWhich of the following represents the most appropriate immediate management strategy for this patient?",
    "choices": [
      [
        "Perform immediate bedside ocular massage, administer topical aqueous humor suppressants (e.g., timolol), and initiate an emergent acute ischemic stroke diagnostic evaluation",
        "Central Retinal Artery Occlusion (CRAO) is the ocular analogue of an acute ischemic stroke, representing an end-organ vascular infarction most commonly caused by thromboembolism originating from an ipsilateral carotid artery atherosclerotic plaque (calcified or cholesterol emboli [Hollenhorst plaques]) or cardiogenic embolism (atrial fibrillation, valvular disease). (1) CLINICAL AND FUNDUSCOPIC FINDINGS: Sudden, profound, painless monocular visual loss with an afferent pupillary defect. Funduscopy demonstrates diffuse retinal clouding and pallor due to ischemic intracellular edema of the ganglion cell layer. The fovea centralis appears as a vivid 'CHERRY-RED SPOT' because the fovea is extremely thin and lacks ganglion cells, allowing the underlying richly vascular, red choroid (perfused by ciliary arteries) to show through. Retinal arteriole boxcarring reflects arrested blood flow. (2) IMMEDIATE OCULAR MANEUVERS: Retinal neural tissue tolerates ischemia for only 90 to 240 minutes before permanent necrosis occurs. Immediate maneuvers aim to dislodge the embolus into more distal peripheral branches and lower intraocular pressure: digital ocular massage (repeated cycles of firm pressure for 10-15 seconds followed by sudden release), topical IOP suppressants (timolol, apraclonidine), or anterior chamber paracentesis. (3) STROKE EQUIVALENT: CRAO carries a high immediate risk of concurrent or imminent cerebral stroke. Guidelines mandate immediate stroke evaluation, including brain MRI with diffusion-weighted imaging, carotid duplex ultrasound, echocardiography, and continuous cardiac telemetry."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
        "Giant cell arteritis typically causes arteritic anterior ischemic optic neuropathy (AION) featuring a pale, swollen optic disc with headache, jaw claudication, and elevated ESR/CRP; CRAO presents with diffuse retinal pallor and a macular cherry-red spot."
      ],
      [
        "Perform emergent vitrectomy with intravitreal injection of vascular endothelial growth factor (VEGF) inhibitors",
        "Anti-VEGF therapy is indicated for central retinal vein occlusion (CRVO) with macular edema or diabetic retinopathy; it provides zero benefit for acute arterial occlusion."
      ],
      [
        "Instill topical pilocarpine drops and perform emergent bilateral laser peripheral iridotomy",
        "Pilocarpine and laser iridotomy treat acute angle-closure glaucoma (elevated IOP, painful eye, steamy cornea); IOP is normal (14 mm Hg) in CRAO."
      ],
      [
        "Reassure the patient that retinal perfusion will spontaneously normalize within 24 hours and schedule outpatient follow-up",
        "Retinal ischemia causes irreversible photoreceptor and ganglion cell death within 2 to 4 hours; CRAO is an emergency carrying catastrophic permanent blindness and high stroke risk."
      ]
    ],
    "rationale": "Central Retinal Artery Occlusion (CRAO) is an ocular ischemic stroke caused by thromboembolism to the central retinal artery. Presentation: acute, painless monocular vision loss, Marcus Gunn pupil, diffuse retinal pallor with boxcarring, and a macular 'cherry-red spot' (thin fovea showing through to underlying choroidal perfusion). Immediate attempts to dislodge emboli include ocular massage and topical pressure-lowering agents. Because CRAO shares the etiology of cerebral stroke, emergent stroke evaluation (carotid duplex, echocardiogram, telemetry, brain MRI) is mandatory.",
    "metadata": {
      "shortSolution": "Sudden painless vision loss with retinal pallor and cherry-red spot is Central Retinal Artery Occlusion; managed with immediate ocular massage/IOP reduction and urgent stroke workup.",
      "competingChoice": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
      "exclusionFinding": "Arteritic AION causes a pale swollen optic disc with high ESR/jaw claudication; CRAO presents with a cherry-red spot and diffuse retinal pallor.",
      "pedagogicalValue": "Recognizing the funduscopic findings of CRAO (cherry-red spot, retinal pallor) and treating CRAO as an acute ischemic stroke equivalent requiring urgent vascular evaluation.",
      "citations": [
        "Biousse V, Nahab F, Newman NJ. Management of Central Retinal Artery Occlusion: A Scientific Statement From the American Heart Association. Stroke. 2021;52(6):e282-e294. PMID: 33761761.",
        "Hayreh SS, Zimmerman MB. Central retinal artery occlusion: visual prognosis. Am J Ophthalmol. 2005;140(3):376-391. PMID: 16138997."
      ]
    },
    "critique": {
      "shortestValidSolution": "Painless sudden vision loss + cherry-red spot + retinal pallor -> CRAO managed with ocular massage/IOP reduction + stroke evaluation.",
      "strongestCompetitor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
      "exclusionFinding": "AION presents with pale swollen optic disc without cherry-red spot; cherry-red spot with retinal boxcarring is diagnostic of CRAO.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Sudden painless vision loss with retinal pallor and cherry-red spot is Central Retinal Artery Occlusion; managed with immediate ocular massage/IOP reduction and urgent stroke workup.",
      "distractorExclusionNotes": "Distractor exclusion verified: Arteritic AION causes a pale swollen optic disc with high ESR/jaw claudication; CRAO presents with a cherry-red spot and diffuse retinal pallor.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Sudden painless vision loss with retinal pallor and cherry-red spot is Central Retinal Artery Occlusion; managed with immediate ocular massage/IOP reduction and urgent stroke workup.",
    "necessaryInference": "Sudden painless vision loss with retinal pallor and cherry-red spot is Central Retinal Artery Occlusion; managed with immediate ocular massage/IOP reduction and urgent stroke workup.",
    "strongestDistractor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for presumed giant cell arteritis with ischemic optic neuropathy",
    "distractorExclusion": "Arteritic AION causes a pale swollen optic disc with high ESR/jaw claudication; CRAO presents with a cherry-red spot and diffuse retinal pallor.",
    "citation": "Biousse V, Nahab F, Newman NJ. Management of Central Retinal Artery Occlusion: A Scientific Statement From the American Heart Association. Stroke. 2021;52(6):e282-e294. PMID: 33761761."
  },
  {
    "code": "op-c-s2-0469",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Giant Cell Arteritis with Visual Complications",
    "subtopic": "Ischemic Optic Neuropathy, Glucocorticoid Initiation Before Biopsy, Blindness Prevention",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents to the emergency department with a 3-week history of severe, throbbing right temporal headache, pain in her jaw muscles while chewing solid food that forces her to stop eating (jaw claudication), and aching stiffness in her shoulders and hips that is worst in the morning. This morning, she experienced two 5-minute episodes of blackened vision in her right eye (amaurosis fugax) that spontaneously resolved, but right eye vision remains blurred. Physical examination demonstrates an uncomfortable woman with marked tenderness, induration, and absent pulsations along the right superficial temporal artery. Visual acuity in the right eye is 20/80 and in the left eye is 20/20. Funduscopic examination of the right eye reveals a pale, swollen optic disc with blurred margins and scattered splinter hemorrhages (arteritic anterior ischemic optic neuropathy [A-AION]). Laboratory evaluation reveals:\n- Erythrocyte sedimentation rate (ESR): 108 mm/hr (normal <= 30 mm/hr)\n- Serum C-reactive protein (CRP): 42 mg/L (normal < 5 mg/L)\n- Platelet count: 480,000/mm3\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Immediate administration of high-dose intravenous pulse methylprednisolone (500 to 1,000 mg daily for 3 days) prior to obtaining a temporal artery biopsy",
        "Giant Cell (Temporal) Arteritis (GCA) is a systemic granulomatous panarteritis of medium and large vessels, primarily affecting the extracranial branches of the carotid artery in patients > 50 years of age. (1) CLINICAL FEATURES: New-onset localized headache, scalp tenderness, jaw claudication (the highest positive likelihood ratio for GCA), polymyalgia rheumatica symptoms, marked ESR (> 50-100 mm/hr) and CRP elevation, and thrombocytosis. (2) VISUAL COMPLICATIONS: Occlusion of the posterior ciliary arteries leads to Arteritic Anterior Ischemic Optic Neuropathy (A-AION), manifesting as amaurosis fugax, sudden visual acuity loss, and a pale, edematous optic disc. Without immediate treatment, visual loss becomes IRREVERSIBLE, and involvement of the contralateral eye can occur within hours to days in up to 50% of untreated patients. (3) IMMEDIATE MANAGEMENT RULE: When visual symptoms or visual loss are present, IMMEDIATE HIGH-DOSE INTRAVENOUS PULSE METHYLPREDNISOLONE (500-1,000 mg/day for 3 days, followed by high-dose oral prednisone 1 mg/kg/day) MUST BE INITIATED IMMEDIATELY. (For patients without visual symptoms, oral prednisone 1 mg/kg/day is adequate). TREATMENT MUST NEVER BE DELAYED FOR TEMPORAL ARTERY BIOPSY. The histological features of granulomatous inflammation and giant cells persist on temporal artery biopsy for up to 2 to 4 weeks after initiating corticosteroid therapy."
      ],
      [
        "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
        "Delaying corticosteroids to obtain a temporal artery biopsy is a catastrophic error that results in permanent, irreversible bilateral blindness within 24 to 48 hours."
      ],
      [
        "Initiate oral methotrexate 15 mg weekly as first-line monotherapy to avoid steroid-induced hyperglycemia and osteoporosis",
        "Methotrexate has a slow onset of action (requiring 8 to 12 weeks) and is completely ineffective for acute inflammatory arterial ischemia; high-dose corticosteroids are mandatory."
      ],
      [
        "Administer intravenous alteplase 0.9 mg/kg for presumed acute thrombotic occlusion of the posterior ciliary arteries",
        "GCA is a chronic granulomatous autoimmune vasculitis, not a simple thromboembolic event; thrombolytics do not treat vasculitis and cause fatal systemic hemorrhages."
      ],
      [
        "Perform emergent right-sided superficial temporal artery endarterectomy",
        "GCA involves segmental, diffuse transmural granulomatous destruction; surgical revascularization has no role and is technically impossible in small inflamed branches."
      ]
    ],
    "rationale": "Giant cell arteritis (GCA) in patients > 50 presents with headache, jaw claudication, scalp tenderness, polymyalgia rheumatica, and elevated inflammatory markers (ESR > 50-100 mm/hr, high CRP). Occlusion of the posterior ciliary arteries causes arteritic anterior ischemic optic neuropathy (A-AION). Visual loss is an absolute ophthalmologic emergency. High-dose intravenous pulse methylprednisolone (500-1,000 mg daily for 3 days) must be administered immediately without waiting for temporal artery biopsy, which remains histologically diagnostic for 2-4 weeks post-steroid initiation.",
    "metadata": {
      "shortSolution": "Elderly female with jaw claudication, temporal tenderness, ESR 108, and acute visual loss (A-AION) requires immediate high-dose IV methylprednisolone before biopsy to prevent bilateral blindness.",
      "competingChoice": "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
      "exclusionFinding": "Biopsy remains positive for weeks on steroids, while withholding steroids risks irreversible bilateral blindness within hours; immediate steroids are mandatory.",
      "pedagogicalValue": "Recognizing that visual symptoms in giant cell arteritis mandate immediate high-dose IV corticosteroids before temporal artery biopsy.",
      "citations": [
        "Weyand CM, Goronzy JJ. Clinical practice. Giant-cell arteritis and polymyalgia rheumatica. N Engl J Med. 2014;371(1):50-57. PMID: 24988557.",
        "Ponte C, Grayson PC, Robson JC, et al. 2022 American College of Rheumatology/EULAR classification criteria for giant cell arteritis. Ann Rheum Dis. 2022;81(12):1647-1653. PMID: 36351704."
      ]
    },
    "critique": {
      "shortestValidSolution": "GCA + visual symptoms/A-AION -> immediate IV pulse methylprednisolone before temporal artery biopsy.",
      "strongestCompetitor": "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
      "exclusionFinding": "Delaying steroids causes permanent blindness; histology remains positive for 2-4 weeks after steroid initiation.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly female with jaw claudication, temporal tenderness, ESR 108, and acute visual loss (A-AION) requires immediate high-dose IV methylprednisolone before biopsy to prevent bilateral blindness.",
      "distractorExclusionNotes": "Distractor exclusion verified: Biopsy remains positive for weeks on steroids, while withholding steroids risks irreversible bilateral blindness within hours; immediate steroids are mandatory.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly female with jaw claudication, temporal tenderness, ESR 108, and acute visual loss (A-AION) requires immediate high-dose IV methylprednisolone before biopsy to prevent bilateral blindness.",
    "necessaryInference": "Elderly female with jaw claudication, temporal tenderness, ESR 108, and acute visual loss (A-AION) requires immediate high-dose IV methylprednisolone before biopsy to prevent bilateral blindness.",
    "strongestDistractor": "Withhold all corticosteroids until a unilateral temporal artery biopsy is performed and histological confirmation of giant cells is verified",
    "distractorExclusion": "Biopsy remains positive for weeks on steroids, while withholding steroids risks irreversible bilateral blindness within hours; immediate steroids are mandatory.",
    "citation": "Weyand CM, Goronzy JJ. Clinical practice. Giant-cell arteritis and polymyalgia rheumatica. N Engl J Med. 2014;371(1):50-57. PMID: 24988557."
  },
  {
    "code": "op-c-s2-0470",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Neuroleptic Malignant Syndrome (NMS) vs Serotonin Syndrome",
    "subtopic": "Dopamine Receptor Antagonism, Lead-Pipe Rigidity, Dantrolene, Bromocriptine",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man with schizophrenia is brought to the emergency department by his family due to acute confusion, high fever, and extreme bodily stiffness over the past 24 hours. Four days ago, his outpatient psychiatrist increased his oral haloperidol dose from 5 mg to 15 mg daily and added intramuscular haloperidol decanoate for worsening persecutory delusions. On physical examination, the patient is obtunded, diaphoretic, and mute. Vital signs reveal blood pressure of 178/104 mm Hg, heart rate of 128/min, respiratory rate of 26/min, and core body temperature of 40.1 C (104.2 F). Physical examination reveals diffuse, severe 'lead-pipe' muscle rigidity throughout all four limbs, neck, and trunk. Deep tendon reflexes are 1+ bilaterally with down-going plantars; there is no ocular or extremity clonus. The skin is flushed and heavily soaked with perspiration. Laboratory evaluation reveals:\n- Serum creatine kinase (CK): 48,000 U/L (markedly elevated; normal < 200 U/L)\n- White blood cell count: 22,000/mm3 with 82% neutrophils\n- Serum creatinine: 2.4 mg/dL (baseline 0.9 mg/dL)\n- Serum potassium: 5.6 mEq/L\n\nWhich of the following represents the most appropriate immediate pharmacotherapeutic strategy for this patient?",
    "choices": [
      [
        "Immediately discontinue haloperidol, initiate aggressive external cooling and intravenous crystalloid hydration, and administer intravenous dantrolene and oral bromocriptine",
        "Neuroleptic Malignant Syndrome (NMS) is a life-threatening idiosyncratic reaction triggered by potent dopamine D2 receptor antagonism (most commonly first-generation high-potency antipsychotics like haloperidol, fluphenazine, or abrupt withdrawal of dopamine agonists in Parkinson disease). (1) PATHOPHYSIOLOGY: Blockade of dopamine D2 receptors in the hypothalamus causes thermoregulatory set-point disruption (hyperthermia), and blockade in the striatum causes intense, unremitting muscle contracture ('lead-pipe' rigidity). (2) CLINICAL TETRAD: (a) Hyperthermia (temp > 38-40 C); (b) Extreme 'lead-pipe' muscle rigidity; (c) Autonomic instability (severe labile hypertension, tachycardia, tachypnea, profuse diaphoresis); and (d) Encephalopathy/altered mental status. (3) LABORATORY FINDINGS: Severe rhabdomyolysis with massive creatine kinase (CK) elevation (typically > 10,000 to 100,000 U/L), leukocytosis (15,000-30,000/mm3), and acute kidney injury from myoglobinuria. (4) DIFFERENTIATION FROM SEROTONIN SYNDROME: NMS is characterized by severe 'lead-pipe' rigidity and hyporeflexia, with slow onset over days. Serotonin syndrome is characterized by neuromuscular HYPERACTIVITY: hyperreflexia, spontaneous or inducible clonus, and tremor, with hyper-acute onset within hours of serotonergic exposure. (5) MANAGEMENT: Immediate cessation of antipsychotics, aggressive active cooling, and massive IV hydration. Specific pharmacotherapy: DANTROLENE (a skeletal muscle ryanodine receptor antagonist that inhibits calcium release from the sarcoplasmic reticulum, treating rigidity and hyperthermia) and BROMOCRIPTINE or AMANTADINE (dopamine receptor agonists that overcome hypothalamic/striatal dopamine blockade)."
      ],
      [
        "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
        "Cyproheptadine is a 5-HT2A serotonin antagonist used specifically for serotonin syndrome; it has zero efficacy in NMS, and continuing haloperidol will result in fatal rhabdomyolytic cardiac arrest."
      ],
      [
        "Administer high-dose intravenous acetaminophen 1,000 mg every 6 hours and apply standard ice packs without muscle-directed agents",
        "Hyperthermia in NMS is generated peripherally by unremitting skeletal muscle contracture and central hypothalamic dopamine blockade, not hypothalamic prostaglandin synthesis; antipyretics like acetaminophen are ineffective."
      ],
      [
        "Administer intravenous succinylcholine bolus to induce complete skeletal muscle relaxation",
        "Succinylcholine triggers massive, lethal hyperkalemic cardiac arrest in patients with active rhabdomyolysis and denervation/muscle injury; it is strictly contraindicated."
      ],
      [
        "Perform emergent hemodialysis to clear haloperidol decanoate from the plasma circulation",
        "Haloperidol has a massive volume of distribution and high lipophilicity; hemodialysis does not remove haloperidol from tissues."
      ]
    ],
    "rationale": "Neuroleptic Malignant Syndrome (NMS) is caused by dopamine D2 receptor blockade (haloperidol). Tetrad: hyperthermia (> 40 C), 'lead-pipe' rigidity, autonomic instability, and altered sensorium, with massive CK elevation and leukocytosis. It is distinguished from serotonin syndrome by severe rigidity and hyporeflexia (vs clonus and hyperreflexia). Management: discontinue antipsychotic, aggressive cooling/IV hydration, and administer dantrolene (ryanodine antagonist) and bromocriptine (dopamine agonist). Antipyretics are ineffective because heat is generated by muscle contracture.",
    "metadata": {
      "shortSolution": "Haloperidol escalation with hyperthermia (40.1 C), lead-pipe rigidity, autonomic instability, and CK 48,000 U/L is NMS; stop haloperidol, cool, hydrate, and give dantrolene/bromocriptine.",
      "competingChoice": "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
      "exclusionFinding": "Cyproheptadine treats serotonin syndrome (clonus/hyperreflexia); NMS (lead-pipe rigidity) requires dantrolene and bromocriptine, and the antipsychotic must be stopped immediately.",
      "pedagogicalValue": "Differentiating NMS (lead-pipe rigidity, hyporeflexia, days onset, dantrolene/bromocriptine) from serotonin syndrome (clonus, hyperreflexia, hours onset, cyproheptadine).",
      "citations": [
        "Strawn JR, Keck PE Jr, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007;164(6):870-876. PMID: 17541044.",
        "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664."
      ]
    },
    "critique": {
      "shortestValidSolution": "Haloperidol + 40.1 C + lead-pipe rigidity + CK 48,000 -> NMS treated with drug cessation, cooling, dantrolene, and bromocriptine.",
      "strongestCompetitor": "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
      "exclusionFinding": "Cyproheptadine is for serotonin syndrome; NMS features rigidity without clonus and requires dantrolene/bromocriptine.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Haloperidol escalation with hyperthermia (40.1 C), lead-pipe rigidity, autonomic instability, and CK 48,000 U/L is NMS; stop haloperidol, cool, hydrate, and give dantrolene/bromocriptine.",
      "distractorExclusionNotes": "Distractor exclusion verified: Cyproheptadine treats serotonin syndrome (clonus/hyperreflexia); NMS (lead-pipe rigidity) requires dantrolene and bromocriptine, and the antipsychotic must be stopped immediately.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Haloperidol escalation with hyperthermia (40.1 C), lead-pipe rigidity, autonomic instability, and CK 48,000 U/L is NMS; stop haloperidol, cool, hydrate, and give dantrolene/bromocriptine.",
    "necessaryInference": "Haloperidol escalation with hyperthermia (40.1 C), lead-pipe rigidity, autonomic instability, and CK 48,000 U/L is NMS; stop haloperidol, cool, hydrate, and give dantrolene/bromocriptine.",
    "strongestDistractor": "Administer intravenous cyproheptadine 12 mg via nasogastric tube and maintain low-dose haloperidol to prevent acute psychotic relapse",
    "distractorExclusion": "Cyproheptadine treats serotonin syndrome (clonus/hyperreflexia); NMS (lead-pipe rigidity) requires dantrolene and bromocriptine, and the antipsychotic must be stopped immediately.",
    "citation": "Strawn JR, Keck PE Jr, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007;164(6):870-876. PMID: 17541044."
  },
  {
    "code": "op-c-s2-0471",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Serotonin Syndrome and the Hunter Toxicity Criteria",
    "subtopic": "Neuromuscular Hyperactivity, Inducible Clonus, Benzodiazepines, Cyproheptadine",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old woman with major depressive disorder managed with sertraline (100 mg daily) presents to the emergency department 6 hours after ingesting two doses of oral tramadol prescribed by an urgent care physician for an acute ankle sprain. She is accompanied by her roommate, who notes that the patient became progressively agitated, sweaty, and tremulous over the past 4 hours. Physical examination reveals an extremely restless, anxious, and diaphoretic woman with dilated pupils (mydriasis) bilaterally. Vital signs show blood pressure of 168/96 mm Hg, heart rate of 134/min, respiratory rate of 24/min, and core body temperature of 38.8 C (101.8 F). Bowel sounds are hyperactive. Neurological examination reveals prominent, rhythmic spontaneous beating movements of both ankles and wrists (spontaneous clonus), inducible ocular clonus with continuous horizontal oscillations, and 4+ hyperreflexia at the patellar and Achilles tendons bilaterally with bilateral extensor plantar responses (positive Babinski signs). Marked tremor is present in both upper extremities; muscle tone is increased in the lower extremities but lacks 'lead-pipe' resistance.\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Immediate discontinuation of all serotonergic agents, administration of intravenous lorazepam for neuromuscular agitation, and administration of oral or nasogastric cyproheptadine",
        "Serotonin Syndrome (Toxicity) is a potentially life-threatening toxidrome resulting from excessive intrasynaptic 5-HT receptor stimulation (predominantly 5-HT2A and 5-HT1A receptors) across the central and peripheral nervous systems, most commonly triggered by combining an SSRI (sertraline) with another serotonergic drug (e.g., tramadol [a weak mu-opioid agonist and serotonin-norepinephrine reuptake inhibitor], linezolid, MAOIs, triptans, or dextromethorphan). (1) HUNTER TOXICITY CRITERIA: In the presence of a serotonergic agent, serotonin toxicity is diagnosed by the presence of ANY of the following: (a) Spontaneous clonus; (b) Inducible clonus PLUS agitation or diaphoresis; (c) Ocular clonus PLUS agitation or diaphoresis; (d) Tremor PLUS hyperreflexia; or (e) Hypertonia and temperature > 38 C PLUS ocular or inducible clonus. (2) CLINICAL HALLMARK: NEUROMUSCULAR EXCITABILITY (spontaneous/inducible clonus, ocular clonus, 4+ hyperreflexia, tremor, hyperactive bowel sounds). In contrast to NMS, serotonin syndrome has hyper-acute onset (hours vs days) and features brisk clonus/hyperreflexia rather than lead-pipe rigidity. (3) MANAGEMENT: (a) Immediate cessation of all serotonergic drugs; (b) Intravenous BENZODIAZEPINES (lorazepam 2-4 mg IV) are the first-line therapy to blunt autonomic hyperactivity, suppress muscular agitation, and lower body temperature; (c) CYPROHEPTADINE (an oral/nasogastric 5-HT2A and 5-HT1A receptor antagonist) is administered as specific antidote therapy for moderate-to-severe serotonin syndrome; (d) Severe hyperthermia (> 41.1 C) mandates immediate neuromuscular paralysis with vecuronium and endotracheal intubation (succinylcholine is avoided due to rhabdomyolysis hyperkalemia risk)."
      ],
      [
        "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
        "Dantrolene and bromocriptine are specific therapies for neuroleptic malignant syndrome (NMS); they have no efficacy in serotonin syndrome, and bromocriptine (a dopaminergic/serotonergic agonist) can exacerbate serotonin toxicity."
      ],
      [
        "Administration of subcutaneous sumatriptan 6 mg and continuous intravenous fentanyl infusion",
        "Sumatriptan (5-HT1B/1D agonist) and fentanyl (serotonergic opioid) are potent serotonergic agents that will catastrophically worsen serotonin toxicity, precipitating fatal hyperthermia."
      ],
      [
        "Intramuscular administration of haloperidol 5 mg and diphenhydramine 50 mg to control acute psychotic agitation",
        "Haloperidol lowers the seizure threshold, impairs thermoregulation via anticholinergic effects, and increases the risk of precipitating concomitant neuroleptic malignant syndrome."
      ],
      [
        "Administration of high-dose intravenous propranolol 5 mg every 10 minutes to normalize heart rate and blood pressure",
        "Propranolol is a non-selective beta-blocker that can provoke severe hypotension and bradycardia, block sympathetic compensatory responses, and inhibit peripheral vasodilation needed for heat dissipation."
      ]
    ],
    "rationale": "Serotonin syndrome is caused by excess serotonergic stimulation (SSRI + tramadol). The Hunter Criteria require clonus (spontaneous, inducible, or ocular), hyperreflexia, agitation, diaphoresis, and hyperthermia. It is distinguished from NMS by hyper-acute onset (hours), mydriasis, hyperactive bowel sounds, and prominent clonus/hyperreflexia (vs lead-pipe rigidity). Management: discontinue serotonergic agents, administer IV benzodiazepines (first-line for agitation and temperature control), and give cyproheptadine (5-HT2A antagonist). Dantrolene and bromocriptine are for NMS.",
    "metadata": {
      "shortSolution": "Sertraline plus tramadol causing agitation, diaphoresis, hyperreflexia, and spontaneous/ocular clonus meets Hunter criteria for Serotonin Syndrome; treated with stopping drugs, IV benzodiazepines, and cyproheptadine.",
      "competingChoice": "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
      "exclusionFinding": "Dantrolene and bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia (not lead-pipe rigidity) and is treated with benzodiazepines and cyproheptadine.",
      "pedagogicalValue": "Applying the Hunter Toxicity Criteria for Serotonin Syndrome and choosing IV benzodiazepines and cyproheptadine as specific management.",
      "citations": [
        "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664.",
        "Dunkley EJ, Isbister GK, Sibbritt D, et al. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003;96(9):635-642. PMID: 12925718."
      ]
    },
    "critique": {
      "shortestValidSolution": "SSRI + tramadol + spontaneous/ocular clonus + hyperreflexia -> Serotonin Syndrome treated with IV benzodiazepines + cyproheptadine.",
      "strongestCompetitor": "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
      "exclusionFinding": "Dantrolene/bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia, requiring cyproheptadine.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Sertraline plus tramadol causing agitation, diaphoresis, hyperreflexia, and spontaneous/ocular clonus meets Hunter criteria for Serotonin Syndrome; treated with stopping drugs, IV benzodiazepines, and cyproheptadine.",
      "distractorExclusionNotes": "Distractor exclusion verified: Dantrolene and bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia (not lead-pipe rigidity) and is treated with benzodiazepines and cyproheptadine.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Sertraline plus tramadol causing agitation, diaphoresis, hyperreflexia, and spontaneous/ocular clonus meets Hunter criteria for Serotonin Syndrome; treated with stopping drugs, IV benzodiazepines, and cyproheptadine.",
    "necessaryInference": "Sertraline plus tramadol causing agitation, diaphoresis, hyperreflexia, and spontaneous/ocular clonus meets Hunter criteria for Serotonin Syndrome; treated with stopping drugs, IV benzodiazepines, and cyproheptadine.",
    "strongestDistractor": "Immediate intravenous administration of dantrolene sodium and oral bromocriptine",
    "distractorExclusion": "Dantrolene and bromocriptine treat NMS; serotonin syndrome features clonus and hyperreflexia (not lead-pipe rigidity) and is treated with benzodiazepines and cyproheptadine.",
    "citation": "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664."
  },
  {
    "code": "op-c-s2-0472",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Hospital Delirium Prevention and Multicomponent Non-Pharmacologic Management",
    "subtopic": "Circadian Synchronization, Environmental Modification, Antipsychotic Stewardship",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old man with mild cognitive impairment and benign prostatic hyperplasia is admitted to the medical ward on hospital day 3 for treatment of right lower lobe pneumonia with intravenous ceftriaxone and azithromycin. Over the past 12 hours, his mental status has fluctuated dramatically; he was lucid and conversant at breakfast, but became agitated, disoriented, and fearful at sunset, pulling out his peripheral intravenous catheter and urinary catheter, insisting that strange people are in his room trying to steal his clothes. On physical examination, he is restless, unable to sustain attention (cannot name the months of the year backward), and exhibits disorganized speech. Vital signs demonstrate blood pressure of 132/78 mm Hg, heart rate of 82/min, respiratory rate of 18/min, and oxygen saturation of 96% on room air. Focused evaluation reveals no hypoxemia, acute stroke, electrolyte derangement, or urinary retention. His bedside nurse requests an order for 'routine nighttime haloperidol or lorazepam' to ensure he stays asleep in bed.\n\nWhich of the following represents the most appropriate management approach for this patient's acute encephalopathy?",
    "choices": [
      [
        "Implement a multicomponent non-pharmacological delirium bundle (daylight exposure, nighttime dark/quiet environment, frequent reorientation, early mobilization, family presence, and removal of unnecessary tethers), withholding sedatives and antipsychotics unless the patient poses an immediate physical danger to self or others",
        "Hospital Delirium is an acute, fluctuating disturbance in attention, awareness, and baseline cognition commonly precipitated by acute medical illness, hospitalization, infection, or medication exposure in vulnerable elderly patients. (1) PATHOPHYSIOLOGY AND RISK FACTORS: Underlying cognitive impairment, sensory deprivation, tethering (catheters, IV lines), sleep fragmentation, and anticholinergic drugs. (2) MANAGEMENT PARADIGM (AMERICAN GERIATRICS SOCIETY GUIDELINES): Randomized controlled trials (such as the Hospital Elder Life Program [HELP]) establish that MULTICOMPONENT NON-PHARMACOLOGICAL STRATEGIES are the gold-standard first-line intervention: (a) Environmental modifications: Day-night circadian synchronization (bright daytime lighting, opening window blinds, quiet/dark environment at night, minimizing vital sign checks between midnight and 6 AM); (b) Reorientation: Clocks, calendars, whiteboard with staff names, frequent verbal orientation, and familiar family presence; (c) Functional maintenance: Prompt removal of unnecessary physical restraints, bladder catheters, and IV lines; ensuring sensory aids (glasses, hearing aids) are in place; early progressive out-of-bed mobilization. (3) PHARMACOLOGICAL STEWARDSHIP: Multiple large randomized placebo-controlled trials have demonstrated that ANTIPSYCHOTICS (haloperidol, quetiapine) DO NOT SHORTEN DELIRIUM DURATION, REDUCE SEVERITY, OR IMPROVE MORTALITY, and they carry significant risks of extrapyramidal symptoms, QTc prolongation, and excess mortality in elderly patients with dementia (FDA black box warning). Benzodiazepines (e.g., lorazepam) PARADOXICALLY WORSEN AND PROLONG DELIRIUM (except in alcohol or sedative withdrawal). Antipsychotics should be strictly reserved as a temporary last resort for severe refractory agitation that threatens immediate physical safety (e.g., pulling endotracheal tubes)."
      ],
      [
        "Administer intravenous lorazepam 1 to 2 mg every 4 hours as needed for agitation and insomnia",
        "Benzodiazepines are a major independent precipitant of delirium, paradoxical disinhibition, respiratory depression, and fall injuries in elderly patients; they are contraindicated for delirium except in alcohol/sedative withdrawal."
      ],
      [
        "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
        "Antipsychotics do not reduce delirium duration or improve mortality in clinical trials; scheduled prophylactic use exposes the patient to severe extrapyramidal toxicity, QTc prolongation, and ventricular arrhythmias."
      ],
      [
        "Apply four-point physical wrist and ankle restraints to securely immobilize the patient in bed",
        "Physical restraints increase agitation, delirium severity, combativeness, strangulation risk, pressure ulcers, and aspiration without preventing falls."
      ],
      [
        "Administer continuous intravenous diphenhydramine 50 mg every 6 hours to promote nighttime sedation",
        "Diphenhydramine is a potent first-generation anticholinergic agent (Beers criteria) that severely worsens acute cognitive decline, urinary retention, and delirium."
      ]
    ],
    "rationale": "Hospital delirium is an acute fluctuating disturbance in attention and awareness. The gold-standard management is multicomponent non-pharmacological intervention (the HELP protocol: sleep-wake cycle preservation, frequent reorientation, family presence, early ambulation, removal of catheters/restraints, sensory aids). Randomized clinical trials show antipsychotics do not reduce delirium duration or mortality and carry serious risks (QTc prolongation, extrapyramidal effects, mortality warning in dementia). Benzodiazepines paradoxically worsen delirium (contraindicated except for alcohol/sedative withdrawal).",
    "metadata": {
      "shortSolution": "Elderly patient with acute fluctuating inattention (delirium) requires multicomponent non-pharmacologic interventions (HELP bundle); avoid routine antipsychotics and benzodiazepines.",
      "competingChoice": "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
      "exclusionFinding": "Clinical trials show antipsychotics do not shorten delirium duration or reduce mortality and increase adverse events; non-pharmacological interventions are first-line.",
      "pedagogicalValue": "Mastering the non-pharmacological first-line management of hospital delirium and recognizing the harms of routine antipsychotic and benzodiazepine use.",
      "citations": [
        "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774.",
        "American Geriatrics Society Expert Panel on Postoperative Delirium in Older Adults. Postoperative delirium in older adults: best practice statement from the American Geriatrics Society. J Am Coll Surg. 2015;220(2):136-148.e1. PMID: 25535170."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute fluctuating inattention/agitation -> Delirium managed with multicomponent non-pharmacologic bundle; avoid routine antipsychotics/benzodiazepines.",
      "strongestCompetitor": "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
      "exclusionFinding": "Antipsychotics do not improve delirium outcomes and carry black-box mortality risks; non-pharmacological care is standard.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly patient with acute fluctuating inattention (delirium) requires multicomponent non-pharmacologic interventions (HELP bundle); avoid routine antipsychotics and benzodiazepines.",
      "distractorExclusionNotes": "Distractor exclusion verified: Clinical trials show antipsychotics do not shorten delirium duration or reduce mortality and increase adverse events; non-pharmacological interventions are first-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly patient with acute fluctuating inattention (delirium) requires multicomponent non-pharmacologic interventions (HELP bundle); avoid routine antipsychotics and benzodiazepines.",
    "necessaryInference": "Elderly patient with acute fluctuating inattention (delirium) requires multicomponent non-pharmacologic interventions (HELP bundle); avoid routine antipsychotics and benzodiazepines.",
    "strongestDistractor": "Initiate scheduled oral haloperidol 2 mg three times daily for the remainder of the hospital stay",
    "distractorExclusion": "Clinical trials show antipsychotics do not shorten delirium duration or reduce mortality and increase adverse events; non-pharmacological interventions are first-line.",
    "citation": "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774."
  },
  {
    "code": "op-c-s2-0473",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "High-Risk Transient Ischemic Attack (TIA) and Dual Antiplatelet Therapy",
    "subtopic": "ABCD2 Score Calculation, Minor Stroke (NIHSS <= 3), 21-Day DAPT Duration",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents to the emergency department 2 hours after experiencing an episode of sudden weakness and heaviness in his right hand and slurred speech while having lunch. The symptoms completely resolved spontaneously after 25 minutes, and he feels entirely back to his normal baseline on arrival. He has a history of essential hypertension treated with lisinopril and type 2 diabetes mellitus treated with metformin. On physical examination, he is alert and fully oriented. Neurological examination is completely normal, including cranial nerves, motor strength (5/5 throughout), sensation, cerebellar testing, and speech (NIHSS score is 0). Vital signs demonstrate blood pressure of 162/92 mm Hg, heart rate of 78/min, and oxygen saturation of 98% on room air. Emergent non-contrast head CT and brain MRI with diffusion-weighted imaging (DWI) show no acute intracranial hemorrhage or acute territorial cerebral infarction.\n\nBased on his calculated ABCD2 risk score and landmark clinical trial evidence (POINT and CHANCE trials), which of the following represents the most appropriate initial antiplatelet strategy for secondary stroke prevention in this patient?",
    "choices": [
      [
        "Initiate dual antiplatelet therapy (DAPT) with aspirin (loading dose followed by 81 mg daily) PLUS clopidogrel (300 to 600 mg loading dose followed by 75 mg daily) within 24 hours, continuing DAPT for 21 days followed by single antiplatelet monotherapy",
        "Transient Ischemic Attack (TIA) carries a high risk of subsequent catastrophic ischemic stroke within the first 90 days, with the highest risk clustering within the first 48 to 72 hours. (1) ABCD2 RISK STRATIFICATION SCORE: (a) Age >= 60 years = 1 point; (b) Blood pressure >= 140/90 mm Hg at initial presentation = 1 point; (c) Clinical features: Unilateral weakness = 2 points, Speech disturbance without weakness = 1 point; (d) Duration: >= 60 minutes = 2 points, 10 to 59 minutes = 1 point, < 10 minutes = 0 points; (e) Diabetes mellitus = 1 point. In this patient: Age 67 (1 pt) + BP 162/92 (1 pt) + Unilateral right hand weakness (2 pts) + Duration 25 min (1 pt) + Diabetes (1 pt) = TOTAL ABCD2 SCORE OF 6 POINTS (HIGH RISK; score 6-7 carries an 8-12% stroke risk at 48 hours). (2) DUAL ANTIPLATELET THERAPY (POINT AND CHANCE TRIALS): Landmark randomized double-blind clinical trials (POINT and CHANCE) demonstrated that for HIGH-RISK TIA (ABCD2 score >= 4) or MINOR ISCHEMIC STROKE (NIHSS score <= 3), initiating DAPT (aspirin + clopidogrel) within 12 to 24 hours reduces the risk of recurrent ischemic stroke by approximately 25-30% compared to aspirin alone. (3) DAPT DURATION (THE 21-DAY LIMIT): The therapeutic benefit of DAPT is heavily front-loaded in the first 21 days; beyond 21 days, the risk of major hemorrhage (intracranial hemorrhage, major GI bleeding) surpasses the ischemic stroke prevention benefit. Therefore, current AHA/ASA guidelines mandate continuing DAPT for exactly 21 to 90 days (specifically 21 days based on the POINT trial protocol), followed by transition to SINGLE ANTIPLATELET MONOTHERAPY (aspirin alone or clopidogrel alone)."
      ],
      [
        "Initiate aspirin 81 mg monotherapy alone indefinitely, withholding clopidogrel to prevent gastrointestinal bleeding",
        "Aspirin monotherapy is significantly inferior to DAPT in high-risk TIA (ABCD2 >= 4); omitting clopidogrel during the first 21 days leaves the patient at substantial risk for disabling recurrent ischemic stroke."
      ],
      [
        "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
        "Prolonging DAPT beyond 21 to 90 days provides no additional ischemic stroke reduction and dramatically increases the risk of fatal major extracranial and intracranial hemorrhage."
      ],
      [
        "Initiate full-dose therapeutic anticoagulation with intravenous unfractionated heparin followed by warfarin targeting an INR of 2.0 to 3.0",
        "Anticoagulation in non-cardioembolic TIA does not prevent recurrent stroke compared to antiplatelet agents and significantly increases fatal intracranial hemorrhage."
      ],
      [
        "Administer intravenous tenecteplase 0.25 mg/kg bolus immediately, as symptoms occurred within the past 4.5 hours",
        "Thrombolysis is strictly contraindicated in TIA because neurological symptoms have fully resolved (NIHSS 0) and the risk of intracranial hemorrhage far outweighs any potential benefit."
      ]
    ],
    "rationale": "High-risk TIA (ABCD2 score >= 4) or minor acute ischemic stroke (NIHSS <= 3) carries a high early risk of recurrent stroke. The POINT and CHANCE trials demonstrated that dual antiplatelet therapy (aspirin + clopidogrel) started within 24 hours significantly reduces stroke recurrence compared to aspirin monotherapy. Critically, DAPT should be continued for 21 days, after which it is switched to single antiplatelet monotherapy, because the risk of major bleeding outweighs ischemic protection after 21 days.",
    "metadata": {
      "shortSolution": "TIA with ABCD2 score of 6 (high-risk) requires DAPT (aspirin + clopidogrel) started within 24 hours and continued for 21 days, followed by single antiplatelet monotherapy.",
      "competingChoice": "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
      "exclusionFinding": "Continuing DAPT beyond 21-90 days causes high cumulative risk of major hemorrhage without added stroke prevention; DAPT must be transitioned to monotherapy at 21 days.",
      "pedagogicalValue": "Calculating the ABCD2 score and knowing the indication and duration (21 days) for dual antiplatelet therapy in high-risk TIA and minor stroke (POINT trial).",
      "citations": [
        "Johnston SC, Easton JD, Farrant M, et al. Clopidogrel and Aspirin in Acute Ischemic Stroke and High-Risk TIA. N Engl J Med. 2018;379(3):215-225. PMID: 29770751.",
        "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update. Stroke. 2019;50(12):e344-e418. PMID: 31662037."
      ]
    },
    "critique": {
      "shortestValidSolution": "High-risk TIA (ABCD2 score 6) -> DAPT (aspirin + clopidogrel) for 21 days, then single antiplatelet agent.",
      "strongestCompetitor": "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
      "exclusionFinding": "Lifelong DAPT causes severe excess bleeding without ischemic benefit; DAPT is limited to 21 days (POINT trial).",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: TIA with ABCD2 score of 6 (high-risk) requires DAPT (aspirin + clopidogrel) started within 24 hours and continued for 21 days, followed by single antiplatelet monotherapy.",
      "distractorExclusionNotes": "Distractor exclusion verified: Continuing DAPT beyond 21-90 days causes high cumulative risk of major hemorrhage without added stroke prevention; DAPT must be transitioned to monotherapy at 21 days.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "TIA with ABCD2 score of 6 (high-risk) requires DAPT (aspirin + clopidogrel) started within 24 hours and continued for 21 days, followed by single antiplatelet monotherapy.",
    "necessaryInference": "TIA with ABCD2 score of 6 (high-risk) requires DAPT (aspirin + clopidogrel) started within 24 hours and continued for 21 days, followed by single antiplatelet monotherapy.",
    "strongestDistractor": "Initiate lifelong dual antiplatelet therapy with aspirin and clopidogrel continued indefinitely for secondary stroke prevention",
    "distractorExclusion": "Continuing DAPT beyond 21-90 days causes high cumulative risk of major hemorrhage without added stroke prevention; DAPT must be transitioned to monotherapy at 21 days.",
    "citation": "Johnston SC, Easton JD, Farrant M, et al. Clopidogrel and Aspirin in Acute Ischemic Stroke and High-Risk TIA. N Engl J Med. 2018;379(3):215-225. PMID: 29770751."
  },
  {
    "code": "op-c-s2-0474",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Bell Palsy (Idiopathic Facial Nerve Palsy)",
    "subtopic": "Upper vs Lower Facial Weakness, Corticosteroid Window, Corneal Protection",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents to the urgent care clinic with sudden weakness of the right side of his face that he noticed upon waking this morning. When brushing his teeth, water drooled from the right corner of his mouth, and he felt his right eye burning and tearing. He denies limb weakness, sensory loss, visual changes, headache, or ear discharge. Physical examination reveals an alert man. Neurological examination demonstrates complete right-sided facial weakness: when asked to raise his eyebrows and wrinkle his forehead, there is complete absence of movement on the right side; when asked to close his eyes tightly, the right eyelid fails to close fully (lagophthalmos), and the right eyeball rolls upward and outward (Bell phenomenon); and when asked to smile, the right oral commissure does not elevate. Sensation over the face is symmetric and intact to pinprick. Extraocular movements, hearing, and all other cranial nerves are completely intact. Otoscopic examination of the external auditory canal and tympanic membrane reveals no vesicles, erythema, or discharge. Eye examination shows mild right conjunctival injection without corneal abrasion.\n\nWhich of the following represents the most appropriate pharmacological and supportive management for this patient?",
    "choices": [
      [
        "Oral prednisone (60 to 80 mg daily for 7 to 10 days) initiated within 72 hours of symptom onset, combined with daytime lubricating artificial tears and nighttime eye ointment with eye taping",
        "Bell Palsy is an acute, idiopathic, peripheral neuropathy of Cranial Nerve VII (facial nerve), likely triggered by herpes simplex virus reactivation causing edema and entrapment within the fallopian (facial) canal of the temporal bone. (1) UPPER VERSUS LOWER MOTOR NEURON WEAKNESS: (a) Central/UMN lesion (e.g., motor cortex stroke): Bilateral cortical motor innervation to the frontalis and orbicularis oculi muscles spares the upper face; therefore, forehead wrinkling is PRESERVED, and only the contralateral lower face is paralyzed. (b) Peripheral/LMN lesion (Bell palsy): All motor branches of CN VII are affected, resulting in ipsilateral paralysis of BOTH UPPER AND LOWER FACE (inability to wrinkle forehead, inability to close eye, flattened nasolabial fold, drooping mouth corner). (2) PHARMACOTHERAPY (AAN / AAO-HNS GUIDELINES): Multiple large randomized controlled trials (including the landmark Scottish Bell's Palsy Study) establish that ORAL CORTICOSTEROIDS (prednisone 60-80 mg daily for 7 to 10 days) significantly accelerate and increase the rate of complete facial nerve recovery (from ~70% to > 85-95%), provided they are INITIATED WITHIN 72 HOURS OF SYMPTOM ONSET. Antiviral monotherapy (acyclovir/valacyclovir) has NO benefit; combining antivirals with steroids offers minimal to no additional benefit over steroids alone. (3) CORNEAL PROTECTION: Incomplete eye closure (lagophthalmos) exposes the cornea to desiccation, keratitis, corneal ulceration, and permanent blindness. Eye protection with daytime lubricating artificial tears every 1-2 hours, nighttime lubricating ophthalmic ointment, and eye taping closed during sleep is MANDATORY."
      ],
      [
        "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
        "High-level randomized trials prove that antiviral monotherapy provides zero therapeutic benefit compared to placebo in Bell palsy; corticosteroids are the definitive first-line therapy."
      ],
      [
        "Perform emergent brain MRI with gadolinium and hospitalize for continuous stroke monitoring",
        "Involvement of the forehead (upper face) definitively localizes the lesion to the peripheral facial nerve (LMN), completely ruling out an upper motor neuron stroke; neuroimaging is unnecessary in acute isolated Bell palsy."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily and perform emergent surgical facial canal decompression",
        "Surgical facial nerve decompression carries substantial risks of permanent sensorineural hearing loss and is not recommended for acute Bell palsy; oral prednisone is standard of care."
      ],
      [
        "Reassurance with observation alone, as over 95% of patients recover spontaneously without any medical intervention or corneal care",
        "Untreated Bell palsy results in permanent facial asymmetry, synkinesis, or crocodile tears in 30% of patients, and failure to provide corneal lubrication causes corneal ulceration and permanent vision loss."
      ]
    ],
    "rationale": "Bell palsy is an acute idiopathic peripheral neuropathy of CN VII, causing unilateral upper and lower facial paralysis (including inability to wrinkle the forehead, which distinguishes it from a central stroke). Treatment within 72 hours of onset with oral prednisone (60-80 mg daily for 7-10 days) significantly increases complete recovery rates. Antiviral monotherapy is ineffective. Corneal protection with lubricating drops, nighttime ointment, and taping is critical to prevent exposure keratopathy and ulceration.",
    "metadata": {
      "shortSolution": "Acute unilateral upper and lower facial weakness (including forehead) is Bell palsy; treated with oral prednisone within 72 hours plus corneal protection (artificial tears, nocturnal taping).",
      "competingChoice": "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
      "exclusionFinding": "Antiviral monotherapy is proven ineffective in randomized trials; oral corticosteroids initiated within 72 hours are the only proven pharmacotherapy for Bell palsy.",
      "pedagogicalValue": "Distinguishing peripheral CN VII palsy (forehead involved) from central stroke (forehead spared) and knowing the 72-hour window for oral prednisone plus corneal protection.",
      "citations": [
        "Sullivan FM, Swan IR, Donnan PT, et al. Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med. 2007;357(16):1598-1607. PMID: 17942873.",
        "Baugh RF, Basura GJ, Ishii LE, et al. Clinical practice guideline: Bell's palsy. Otolaryngol Head Neck Surg. 2013;149(3 Suppl):S1-S27. PMID: 24198270."
      ]
    },
    "critique": {
      "shortestValidSolution": "Unilateral facial paralysis with forehead involvement -> Bell palsy treated with oral prednisone (< 72h) + eye lubrication.",
      "strongestCompetitor": "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
      "exclusionFinding": "Antiviral monotherapy is ineffective; oral corticosteroids are the proven treatment.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute unilateral upper and lower facial weakness (including forehead) is Bell palsy; treated with oral prednisone within 72 hours plus corneal protection (artificial tears, nocturnal taping).",
      "distractorExclusionNotes": "Distractor exclusion verified: Antiviral monotherapy is proven ineffective in randomized trials; oral corticosteroids initiated within 72 hours are the only proven pharmacotherapy for Bell palsy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute unilateral upper and lower facial weakness (including forehead) is Bell palsy; treated with oral prednisone within 72 hours plus corneal protection (artificial tears, nocturnal taping).",
    "necessaryInference": "Acute unilateral upper and lower facial weakness (including forehead) is Bell palsy; treated with oral prednisone within 72 hours plus corneal protection (artificial tears, nocturnal taping).",
    "strongestDistractor": "Oral acyclovir 800 mg five times daily as standalone monotherapy without corticosteroids",
    "distractorExclusion": "Antiviral monotherapy is proven ineffective in randomized trials; oral corticosteroids initiated within 72 hours are the only proven pharmacotherapy for Bell palsy.",
    "citation": "Sullivan FM, Swan IR, Donnan PT, et al. Early treatment with prednisolone or acyclovir in Bell's palsy. N Engl J Med. 2007;357(16):1598-1607. PMID: 17942873."
  },
  {
    "code": "op-c-s2-0475",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Trigeminal Neuralgia (Tic Douloureux)",
    "subtopic": "Vascular Compression, Lancinating Facial Pain, Carbamazepine, Adverse Effects",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman presents to the clinic with a 6-week history of agonizing, lancinating right-sided facial pain. She describes the pain as sudden, sharp, electric shock-like jolts lasting between 5 and 30 seconds that shoot along her right lower jaw and right cheek. The episodes occur up to 20 times a day and are triggered by light sensory touch, such as brushing her teeth, applying makeup, washing her face, or encountering a cold breeze outdoors. She has stopped chewing food on the right side of her mouth to avoid triggering an attack. Neurological examination is completely normal: sensation to pinprick, light touch, and temperature across all three trigeminal nerve divisions (V1, V2, V3) is completely intact and symmetric bilaterally; corneal reflexes are normal; and motor function of the muscles of mastication (masseter and temporalis) is symmetric with normal jaw jerk. Brain MRI with dedicated high-resolution fiesta sequences demonstrates neurovascular compression of the right trigeminal nerve root entry zone by an aberrant loop of the superior cerebellar artery, with no demyelinating plaques, mass lesions, or brainstem infarcts.\n\nWhich of the following represents the most appropriate initial pharmacological therapy for this patient?",
    "choices": [
      [
        "Oral carbamazepine (or oxcarbazepine), with baseline and follow-up monitoring of complete blood count and serum sodium concentrations",
        "Trigeminal Neuralgia (TN, tic douloureux) is characterized by recurrent paroxysms of severe, sharp, lancinating, electric shock-like unilateral facial pain restricted to one or more divisions of the trigeminal nerve (most commonly V2 [maxillary] and V3 [mandibular], rarely V1 [ophthalmic]). (1) PATHOPHYSIOLOGY: Classical TN is caused by neurovascular compression of the trigeminal nerve root entry zone by an aberrant arterial loop (most commonly the superior cerebellar artery), leading to focal mechanical pulsatile demyelination, ephaptic cross-talk between sensory fibers, and hyper-excitable ectopic action potentials. (2) DIAGNOSTIC HALLMARKS: Paroxysms triggered by innocuous, light tactile stimuli (chewing, brushing teeth, light touch, wind); pain lasts seconds to < 2 minutes; neurological examination is characteristically completely normal (absence of sensory loss or motor weakness). (3) FIRST-LINE MEDICAL PHARMACOTHERAPY: CARBAMAZEPINE (titrated from 100-200 mg twice daily up to 1,200 mg daily) or OXCARBAZEPINE is the undisputed first-line treatment of choice, acting by blocking use-dependent voltage-gated sodium channels to stabilize hyper-excitable neuronal membranes and suppress high-frequency repetitive firing. (4) ADVERSE EFFECT MONITORING: Carbamazepine requires baseline and serial monitoring of Complete Blood Count (risk of aplastic anemia and agranulocytosis) and Serum Electrolytes (risk of Syndrome of Inappropriate Antidiuretic Hormone [SIADH] and severe hyponatremia). (5) SURGICAL RESCUE: Microvascular Decompression (MVD, Janetta procedure) is reserved for patients refractory to or intolerant of pharmacotherapy."
      ],
      [
        "Oral ibuprofen 800 mg three times daily and acetaminophen 1,000 mg three times daily as first-line analgesic therapy",
        "Standard non-steroidal anti-inflammatory drugs and acetaminophen have zero efficacy against neuropathic ephaptic firing in trigeminal neuralgia."
      ],
      [
        "Scheduled oral oxycodone 10 mg every 4 hours for neuropathic pain control",
        "Opioids are ineffective for the brief paroxysmal lancinating electric pain of trigeminal neuralgia and carry high risks of physical dependence, tolerance, and sedation."
      ],
      [
        "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
        "Microvascular decompression is an invasive intracranial neurosurgical procedure carrying risks of hearing loss, stroke, and CSF leak; conservative trial of first-line carbamazepine is mandatory before considering surgery."
      ],
      [
        "Oral prednisone 60 mg daily for 4 weeks for presumed acute autoimmune trigeminal neuritis",
        "Classical trigeminal neuralgia is a mechanical neurovascular compression disorder, not an inflammatory autoimmune neuropathy; corticosteroids are completely ineffective."
      ]
    ],
    "rationale": "Trigeminal neuralgia presents with brief, lancinating, electric-shock unilateral facial pain in the V2/V3 distribution triggered by light tactile stimuli (chewing, brushing teeth) with a completely normal neurological examination, caused by neurovascular compression of the trigeminal root entry zone (often by the superior cerebellar artery). First-line therapy is oral carbamazepine (or oxcarbazepine), a voltage-gated sodium channel blocker. Monitoring for agranulocytosis, aplastic anemia, and hyponatremia (SIADH) is required. Microvascular decompression is reserved for medical failures.",
    "metadata": {
      "shortSolution": "Lancinating facial pain triggered by light touch with normal neuro exam is Trigeminal Neuralgia; first-line therapy is carbamazepine with CBC and sodium monitoring.",
      "competingChoice": "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
      "exclusionFinding": "Carbamazepine/oxcarbazepine is the mandatory first-line therapy with > 80% initial response; invasive neurosurgery is reserved for medical failures.",
      "pedagogicalValue": "Recognizing trigeminal neuralgia and knowing carbamazepine is first-line therapy with required monitoring of complete blood counts and sodium.",
      "citations": [
        "Cruccu G, Gronseth G, Alksne J, et al. AAN-EFNS guidelines on trigeminal neuralgia management. Eur J Neurol. 2008;15(10):1013-1028. PMID: 18721143.",
        "Bendtsen L, Zakrzewska JM, Abbott J, et al. European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol. 2019;26(6):831-845. PMID: 30860637."
      ]
    },
    "critique": {
      "shortestValidSolution": "Lancinating electric facial pain triggered by light touch -> Trigeminal neuralgia treated first-line with oral carbamazepine.",
      "strongestCompetitor": "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
      "exclusionFinding": "Medical therapy with carbamazepine is first-line; surgery is reserved for refractory cases.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Lancinating facial pain triggered by light touch with normal neuro exam is Trigeminal Neuralgia; first-line therapy is carbamazepine with CBC and sodium monitoring.",
      "distractorExclusionNotes": "Distractor exclusion verified: Carbamazepine/oxcarbazepine is the mandatory first-line therapy with > 80% initial response; invasive neurosurgery is reserved for medical failures.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Lancinating facial pain triggered by light touch with normal neuro exam is Trigeminal Neuralgia; first-line therapy is carbamazepine with CBC and sodium monitoring.",
    "necessaryInference": "Lancinating facial pain triggered by light touch with normal neuro exam is Trigeminal Neuralgia; first-line therapy is carbamazepine with CBC and sodium monitoring.",
    "strongestDistractor": "Immediate referral for open posterior fossa craniotomy and microvascular decompression before attempting medical therapy",
    "distractorExclusion": "Carbamazepine/oxcarbazepine is the mandatory first-line therapy with > 80% initial response; invasive neurosurgery is reserved for medical failures.",
    "citation": "Cruccu G, Gronseth G, Alksne J, et al. AAN-EFNS guidelines on trigeminal neuralgia management. Eur J Neurol. 2008;15(10):1013-1028. PMID: 18721143."
  }
];
