import json

items_s2_b19_part1 = [
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0457",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Guillain-Barré Syndrome (GBS) Respiratory Monitoring and Therapy",
    "subtopic": "Forced Vital Capacity Monitoring, IVIG vs Plasmapheresis, Corticosteroid Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man presents to the hospital with a 4-day history of progressive ascending weakness and tingling that began in his feet and has now ascended to involve both thighs and hands. He had an episode of self-limited watery diarrhea 3 weeks ago while traveling in Mexico. On physical examination, he has symmetric flaccid weakness of both lower extremities (motor strength 2/5 proximally, 1/5 distally) and upper extremities (4/5 proximally, 3/5 distally). Deep tendon reflexes are completely absent (0/4) throughout all four limbs. Sensation to light touch and vibration is mildly diminished in a stocking-glove distribution. Cranial nerves are intact, but he reports mild difficulty clearing throat secretions. Vital signs show blood pressure of 138/82 mm Hg, heart rate of 96/min, respiratory rate of 22/min, and oxygen saturation of 97% on ambient air. Bedside spirometry demonstrates a forced vital capacity (FVC) of 22 mL/kg (normal > 60 mL/kg) and negative inspiratory force (NIF) of -26 cm H2O.\n\nWhich of the following represents the most appropriate initial management strategy for this patient?",
    "choices": [
      [
        "Admit to an intensive care unit for serial bedside pulmonary function tests (FVC and NIF every 4 to 6 hours) and initiate intravenous immunoglobulin (IVIG) or plasma exchange, avoiding systemic corticosteroids",
        "Guillain-Barré Syndrome (GBS, acute inflammatory demyelinating polyradiculoneuropathy [AIDP]) is an autoimmune polyradiculoneuropathy frequently triggered by molecular mimicry following Campylobacter jejuni enteritis. (1) RESPIRATORY MONITORING: The most critical determinant of immediate survival is monitoring for impending diaphragmatic and intercostal muscle paralysis. Up to 30% of patients require mechanical ventilation. Pulse oximetry and arterial blood gases are dangerously insensitive because hypoxemia and hypercapnia develop only after diaphragmatic collapse occurs. Patients must be admitted to an ICU with serial monitoring of Forced Vital Capacity (FVC) and Negative Inspiratory Force (NIF) every 4 to 6 hours. The '20/30/40 rule' mandates elective mechanical ventilation when: (a) FVC drops < 15 to 20 mL/kg, (b) NIF becomes less negative than -30 cm H2O, or (c) Maximum expiratory pressure drops < 40 cm H2O. (2) DISEASE-MODIFYING IMMUNOTHERAPY: Intravenous Immunoglobulin (IVIG, 0.4 g/kg/day for 5 days) or Plasma Exchange (PLEX, 5 sessions over 2 weeks) accelerates motor recovery and reduces time on mechanical ventilation. Both have equivalent efficacy; combination therapy provides no additional benefit. (3) CONTRAINDICATION TO CORTICOSTEROIDS: Multiple large randomized controlled trials (including Cochrane systematic reviews) prove that SYSTEMIC CORTICOSTEROIDS (oral or intravenous) PROVIDE ZERO BENEFIT IN GBS AND MAY ACTUALLY DELAY OR PROTRACT MOTOR RECOVERY."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
        "Systemic corticosteroids are ineffective and contraindicated in Guillain-Barré syndrome; multiple clinical trials demonstrated that steroids do not accelerate recovery and may slow axonal repair."
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
    "rationale": "Guillain-Barré syndrome (AIDP) causes ascending flaccid paralysis and absent deep tendon reflexes, frequently post-Campylobacter jejuni. Respiratory failure develops in ~30% of cases and must be tracked with serial bedside spirometry (FVC and NIF every 4-6 hours in an ICU); pulse oximetry is deceptively normal until diaphragmatic arrest. Intubation is indicated when FVC < 15-20 mL/kg or NIF < -30 cm H2O. First-line therapy is IVIG or plasmapheresis. Systemic corticosteroids are contraindicated as trials show they provide no benefit and delay recovery.",
    "metadata": {
      "shortSolution": "Rapidly progressive GBS with FVC 22 mL/kg requires ICU admission for serial FVC/NIF monitoring and IVIG or plasmapheresis; systemic corticosteroids are contraindicated.",
      "competingChoice": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
      "exclusionFinding": "Systemic corticosteroids are proven ineffective in GBS and protract axonal recovery; IVIG or plasmapheresis is the treatment of choice.",
      "pedagogicalValue": "Understanding that serial FVC/NIF monitoring in an ICU is essential for GBS, IVIG or plasmapheresis is first-line, and corticosteroids are ineffective/contraindicated.",
      "citations": [
        "Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barré syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435.",
        "Hughes RA, Brassington R, Gunn AA, van Doorn PA. Corticosteroids for Guillain-Barré syndrome. Cochrane Database Syst Rev. 2016;10(10):CD001446. PMID: 27778385."
      ]
    },
    "critique": {
      "shortestValidSolution": "GBS + FVC 22 mL/kg -> ICU admission for serial FVC/NIF + IVIG or plasmapheresis; avoid corticosteroids.",
      "strongestCompetitor": "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 5 days to halt inflammatory autoimmune nerve demyelination",
      "exclusionFinding": "Corticosteroids are proven ineffective in GBS; IVIG or plasmapheresis is first-line therapy.",
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
  }
]
