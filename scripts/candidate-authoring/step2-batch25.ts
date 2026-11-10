import { CandidateSpec } from './types';

export const step2Batch25: CandidateSpec[] = [
  {
    "code": "op-c-s2-0601",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Febrile Neutropenia Initial Empiric Antibiotic Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with diffuse large B-cell lymphoma presents to the emergency department with chills, rigor, and malaise 8 days after completing her second cycle of R-CHOP chemotherapy. Temperature is 38.6 C (101.5 F), blood pressure 114/72 mm Hg, pulse 104/min, and respirations 18/min. Physical examination shows a clear chest, non-tender abdomen, and an indwelling right subclavian central venous catheter without erythema, tenderness, or purulent drainage. Complete blood count reveals: hemoglobin 9.4 g/dL, white blood cell count 850/microL with 18% segmented neutrophils and 2% band forms (absolute neutrophil count 170/microL), and platelets 82,000/microL. Serum creatinine is 0.9 mg/dL. Peripheral and central catheter blood cultures and urinalysis are obtained. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Administer intravenous cefepime monotherapy immediately within 60 minutes of triage",
        "This patient has FEBRILE NEUTROPENIA (fever >= 38.3 C or >= 38.0 C sustained for 1 hour with ANC < 500/microL or expected to fall below 500/microL). Febrile neutropenia is an oncologic emergency requiring urgent EMPIRIC BROAD-SPECTRUM ANTIPSEUDOMONAL BETA-LACTAM MONOTHERAPY within 60 minutes of presentation. First-line monotherapy options include intravenous CEFEPIME (2 g IV q8h), PIPERACILLIN-TAZOBACTAM, or MEROPENEM. Gram-negative bacteremia (especially Pseudomonas aeruginosa) has a mortality rate up to 50% within hours if untreated. Vancomycin is NOT routinely indicated in initial empiric therapy unless there is hemodynamic instability/septic shock, suspected central line-associated bloodstream infection (tunnel erythema/purulence), skin/soft tissue infection, pneumonia, or known MRSA colonization."
      ],
      [
        "Initiate oral ciprofloxacin plus amoxicillin-clavulanate outpatient therapy after observed response",
        "Oral fluoroquinolone combination therapy is reserved for low-risk febrile neutropenia (MASCC score >= 21) without significant comorbidities, inpatient status, or central lines, but IV monotherapy in hospital is required here."
      ],
      [
        "Add intravenous vancomycin and tobramycin to intravenous ceftriaxone for synergy",
        "Ceftriaxone lacks adequate anti-pseudomonal activity; adding vancomycin without specific clinical triggers promotes resistance and nephrotoxicity without improving initial survival."
      ],
      [
        "Administer subcutaneous filgrastim (G-CSF) and hold antibiotic therapy pending culture speciation",
        "Withholding antimicrobial therapy pending microbiologic cultures in febrile neutropenia is lethal; colony-stimulating factors do not replace urgent bactericidal antibiotic administration."
      ],
      [
        "Administer oral fluconazole and trimethoprim-sulfamethoxazole while observing in the short-stay unit",
        "Antifungal and antipneumocystis agents do not cover acute gram-negative bacteremic pathogens like Pseudomonas aeruginosa that drive rapid early mortality in neutropenic sepsis."
      ]
    ],
    "shortestValidSolution": "ANC 170/microL + fever 38.6 C post-chemo = Febrile neutropenia -> Immediate IV cefepime (antipseudomonal monotherapy).",
    "necessaryInference": "Calculate ANC (850 * 0.20 = 170/microL) to recognize febrile neutropenia and select immediate antipseudomonal monotherapy.",
    "strongestDistractor": "Add intravenous vancomycin and tobramycin to intravenous ceftriaxone for synergy",
    "distractorExclusion": "Ceftriaxone lacks antipseudomonal activity and vancomycin is not recommended empirically in the absence of hemodynamic instability or overt line infection.",
    "citation": "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011;52(4):e56-e93. PMID: 21258094.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology-oncology emergency item requiring calculation of ANC and guideline-based selection of empiric antipseudomonal monotherapy.",
      "distractorExclusionNotes": "Distractors feature oral regimens for high-risk patients, non-pseudomonal cephalosporins with redundant vancomycin, and inappropriate antibiotic withholding.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0602",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Tumor Lysis Syndrome Rasburicase Mechanism and Indications",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old man with newly diagnosed stage IV Burkitt lymphoma receives his first cycle of intensive multi-agent chemotherapy. Eighteen hours later, he develops nausea, muscle cramps, and perioral numbness. Blood pressure is 138/86 mm Hg and pulse is 96/min with occasional premature beats. Physical examination reveals positive Chvostek and Trousseau signs. ECG shows peaked T waves and QT interval prolongation. Laboratory evaluation shows: serum potassium 6.2 mEq/L, serum calcium 6.8 mg/dL (ionized calcium 0.82 mmol/L), serum phosphorus 8.4 mg/dL, serum uric acid 14.6 mg/dL, blood urea nitrogen 46 mg/dL, and serum creatinine 2.4 mg/dL (baseline 0.9 mg/dL). Vigorous intravenous normal saline hydration and calcium gluconate have been initiated. Which of the following is the most appropriate pharmacotherapy to specifically reduce this patient's serum uric acid burden?",
    "choices": [
      [
        "Administer intravenous rasburicase to convert insoluble uric acid into soluble allantoin",
        "This patient has laboratory and clinical TUMOR LYSIS SYNDROME (TLS) following cytotoxic therapy for Burkitt lymphoma, a high-grade neoplasm with extreme cellular turnover. TLS criteria (Cairo-Bishop): hyperuricemia (>8 mg/dL), hyperkalemia (>6 mEq/L), hyperphosphatemia (>4.5 mg/dL), and hypocalcemia (<7 mg/dL). High uric acid crystallizes in renal tubules causing acute uric acid nephropathy. RASBURICASE is a recombinant urate oxidase enzyme that directly catalyzes the conversion of existing uric acid into ALLANTOIN, an inactive compound that is 5-10 times more soluble in urine than uric acid and rapidly excreted by the kidneys. Unlike allopurinol (which only inhibits xanthine oxidase to prevent NEW uric acid synthesis but does not lower existing uric acid levels), rasburicase rapidly degrades circulating uric acid within 4 hours and is the definitive agent for established, high-risk TLS with renal dysfunction."
      ],
      [
        "Initiate high-dose oral allopurinol to inhibit xanthine oxidase and degrade established crystals",
        "Allopurinol blocks xanthine oxidase preventing new uric acid formation, but it cannot break down existing uric acid and may cause xanthine nephropathy in severe active TLS."
      ],
      [
        "Infuse intravenous sodium bicarbonate to alkalize the urine to a pH greater than 7.5",
        "Urinary alkalinization is no longer recommended because it promotes calcium phosphate precipitation in renal tubules and worsens hypocalcemia."
      ],
      [
        "Administer oral probenecid to block renal tubular urate reabsorption via URAT-1 transporters",
        "Probenecid increases urinary uric acid excretion, which directly precipitates uric acid crystals in the collecting ducts and worsens acute obstructive tubular injury."
      ],
      [
        "Initiate oral febuxostat monotherapy combined with aggressive loop diuretic forced diuresis",
        "Febuxostat is an oral xanthine oxidase inhibitor used for prophylaxis, not for urgent enzymatic degradation of dangerous circulating uric acid in acute renal failure."
      ]
    ],
    "shortestValidSolution": "Burkitt lymphoma post-chemo + K 6.2 + Phos 8.4 + Ca 6.8 + Uric acid 14.6 + Cr 2.4 = Established TLS -> IV Rasburicase.",
    "necessaryInference": "Distinguish active degradation of existing uric acid (rasburicase -> allantoin) from inhibition of new synthesis (allopurinol) in acute renal injury.",
    "strongestDistractor": "Initiate high-dose oral allopurinol to inhibit xanthine oxidase and degrade established crystals",
    "distractorExclusion": "Allopurinol prevents new synthesis but does not degrade circulating uric acid, making it ineffective for established severe hyperuricemia with acute kidney injury.",
    "citation": "Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol. 2004;127(1):3-11. PMID: 15384972.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK oncology emergency item testing enzymatic mechanism and clinical indication of rasburicase versus xanthine oxidase inhibitors.",
      "distractorExclusionNotes": "Distractors feature outdated practices (urinary alkalinization), slower synthetic inhibitors (allopurinol/febuxostat), and contraindicated uricosurics (probenecid).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0603",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Epidural Spinal Cord Compression Emergent Dexamethasone and MRI",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with metastatic prostate adenocarcinoma presents with progressive mid-thoracic back pain for 3 weeks, which has acutely worsened over the past 24 hours. He describes a band-like ache radiating around his chest wall that is exacerbated by coughing, straining, and lying flat in bed. Over the past 6 hours, he has noted bilateral lower extremity heaviness and difficulty climbing stairs. Vital signs are normal. Neurologic examination shows 3/5 muscle strength in bilateral lower extremities with increased tone, 3+ patellar and Achilles reflexes, bilateral upgoing plantar responses (Babinski sign), and a sensory level to pinprick at the T8 dermatome. Rectal sphincter tone is decreased. Post-void bladder ultrasound demonstrates 450 mL of retained urine. Which of the following is the most appropriate immediate next step in management?",
    "choices": [
      [
        "Administer high-dose intravenous dexamethasone immediately and order emergent whole-spine MRI",
        "This patient exhibits classic signs of METASTATIC EPIDURAL SPINAL CORD COMPRESSION (MESCC), an oncologic emergency seen commonly in prostate, lung, and breast cancers. Presentation includes: localized band-like spinal pain worsening when supine (due to distension of epidural venous plexus), motor weakness, hyperreflexia, extensor plantar responses, sensory level, and late autonomic dysfunction (urinary retention, bowel incontinence). The MOST CRITICAL IMMEDIATE ACTION is intravenous HIGH-DOSE DEXAMETHASONE (10-16 mg IV bolus followed by 4-16 mg q6h) to reduce vasogenic cord edema, relieve pain, and arrest neurologic deterioration, followed immediately by EMERGENT WHOLE-SPINE MRI. Dexamethasone must NOT be delayed while waiting for imaging or neurosurgical consultation, as ambulatory status at treatment onset strongly dictates permanent recovery."
      ],
      [
        "Obtain plain lumbar and thoracic radiographs and await surgical consultation prior to steroids",
        "Plain radiographs miss up to 20% of epidural compressions and cannot visualize soft tissue or neural structures; withholding steroids causes irreversible paralysis."
      ],
      [
        "Perform urgent bedside lumbar puncture for CSF cytology and protein electrophoresis",
        "Lumbar puncture in spinal cord compression carries a significant risk of spinal herniation or worsening cord compression below an obstruction, and is contraindicated."
      ],
      [
        "Schedule an outpatient neurosurgical consultation and prescribe scheduled transdermal fentanyl",
        "Outpatient management of acute progressive paraparesis and urinary retention results in permanent paraplegia within hours to days."
      ],
      [
        "Initiate empiric intravenous broad-spectrum vancomycin and ceftriaxone for suspected discitis",
        "The history of metastatic prostate cancer, localized thoracic pain worse supine, and absence of systemic fever or infectious markers points directly to malignant compression."
      ]
    ],
    "shortestValidSolution": "Metastatic cancer + worsening back pain lying flat + bilateral leg weakness + T8 sensory level + urinary retention = Cord compression -> IV Dexamethasone + urgent MRI.",
    "necessaryInference": "Recognize the neuro-oncologic emergency of malignant cord compression requiring immediate glucocorticoids before imaging.",
    "strongestDistractor": "Obtain plain lumbar and thoracic radiographs and await surgical consultation prior to steroids",
    "distractorExclusion": "Delaying steroids while waiting for imaging or consultations leads to permanent motor deficits; whole-spine MRI is required rather than plain radiographs.",
    "citation": "Lawton AJ, Lee KA, Cheville AL, et al. Assessment and management of patients with metastatic spinal cord compression: a multidisciplinary review. J Clin Oncol. 2019;37(1):61-71. PMID: 30485177.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK oncology emergency item focusing on the prioritized sequence of immediate high-dose dexamethasone followed by emergent MRI.",
      "distractorExclusionNotes": "Distractors feature delayed imaging modalities, contraindicated procedures (lumbar puncture risk of spinal coning), and outpatient misdiagnoses.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0604",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Hypercalcemia of Malignancy Aggressive Saline and Zoledronic Acid",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman with metastatic squamous cell carcinoma of the lung is brought to the emergency department because of increasing lethargy, confusion, constipation, and vomiting over the past 4 days. She has a history of smoking 40 pack-years. Physical examination shows dry mucous membranes, poor skin turgor, and depressed deep tendon reflexes. Blood pressure is 98/62 mm Hg, pulse 110/min, and respirations 16/min. ECG demonstrates a shortened QT interval (QTc 340 ms). Laboratory studies show: serum sodium 134 mEq/L, serum potassium 3.6 mEq/L, blood urea nitrogen 44 mg/dL, serum creatinine 2.1 mg/dL (baseline 0.8 mg/dL), serum albumin 3.0 g/dL, and total serum calcium 14.8 mg/dL (corrected calcium 15.6 mg/dL). Intravenous fluids are about to be started. Which of the following therapeutic regimens is the most appropriate initial management?",
    "choices": [
      [
        "Aggressive intravenous isotonic saline infusion combined with calcitonin and intravenous zoledronic acid",
        "This patient presents with SEVERE HYPERCALCEMIA OF MALIGNANCY (corrected calcium > 14 mg/dL), typically driven by tumor secretion of PARATHYROID HORMONE-RELATED PROTEIN (PTHrP) in squamous cell carcinoma. Hypercalcemia induces nephrogenic diabetes insipidus, severe dehydration, prerenal azotemia, and neuropsychiatric depression. Management entails a tiered approach: (1) AGGRESSIVE ISOTONIC SALINE HYDRATION (200-300 mL/hr) to restore intravascular volume, promote calciuresis, and reverse prerenal failure; (2) CALCITONIN (subcutaneous or intramuscular) for RAPID CALCIUM REDUCTION within 4-6 hours (inhibits osteoclasts, increases urinary excretion; limited by tachyphylaxis after 48 hours); and (3) INTRAVENOUS BISPHOSPHONATES (ZOLEDRONIC ACID 4 mg IV or pamidronate) for SUSTAINED CONTROL (onset 48-72 hours, blocks osteoclast-mediated bone resorption). Loop diuretics (e.g., furosemide) are NOT given initially and are indicated only if fluid overload develops after adequate hydration."
      ],
      [
        "Immediate high-dose intravenous furosemide combined with oral cinacalcet and oral phosphorus",
        "Loop diuretics worsen hypovolemia and prerenal azotemia if administered before aggressive volume resuscitation is complete; cinacalcet is for secondary/tertiary hyperparathyroidism."
      ],
      [
        "Intravenous pamidronate monotherapy without fluid hydration to avoid precipitating pulmonary edema",
        "Bisphosphonates require 48-72 hours to achieve clinical effect and do not address the acute life-threatening dehydration and hemodynamic collapse."
      ],
      [
        "High-dose oral prednisone monotherapy for 14 days and discharge with oral hydration instructions",
        "Glucocorticoids are effective for hypercalcemia mediated by 1,25-dihydroxyvitamin D (e.g., lymphoma, sarcoidosis), but have poor efficacy in PTHrP-mediated squamous carcinoma."
      ],
      [
        "Emergent hemodialysis against a zero-calcium bath as the sole required intervention",
        "Hemodialysis is reserved for refractory hypercalcemia with acute renal failure or severe fluid overload where massive saline hydration is contraindicated."
      ]
    ],
    "shortestValidSolution": "Lung SCC + corrected calcium 15.6 mg/dL + dehydration + QTc 340 ms = Severe hypercalcemia -> Aggressive IV normal saline + Calcitonin + IV Zoledronic acid.",
    "necessaryInference": "Recognize severe hypercalcemia (>14 mg/dL) requiring acute volume restoration plus short-acting calcitonin and long-acting bisphosphonate.",
    "strongestDistractor": "Immediate high-dose intravenous furosemide combined with oral cinacalcet and oral phosphorus",
    "distractorExclusion": "Furosemide before volume repletion is dangerous because it exacerbates pre-existing severe intravascular volume contraction and worsening prerenal azotemia.",
    "citation": "Major P, Lortholary A, Hon J, et al. Zoledronic acid is superior to pamidronate in the treatment of hypercalcemia of malignancy: a pooled analysis of two randomized, controlled clinical trials. J Clin Oncol. 2001;19(2):558-567. PMID: 11208851.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK oncology emergency item testing multi-phase medical management of severe hypercalcemia of malignancy.",
      "distractorExclusionNotes": "Distractors feature premature loop diuresis, delayed single-agent bisphosphonates without hydration, vitamin D-specific steroid therapy, or premature dialysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0605",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Thrombotic Thrombocytopenic Purpura Emergent Plasma Exchange",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old previously healthy woman is brought to the emergency department with confusion and petechial skin lesions. Over the past 3 days, she experienced fatigue, dark tea-colored urine, and intermittent abdominal discomfort. Vital signs show: temperature 38.2 C (100.8 F), blood pressure 132/80 mm Hg, pulse 98/min, and respirations 18/min. Physical examination shows scleral icterus, petechiae across her lower extremities, and fluctuating disorientation to time and place without focal cranial nerve or motor deficits. Laboratory evaluation reveals: hemoglobin 7.8 g/dL, platelet count 14,000/microL, white blood cell count 9,200/microL, total bilirubin 4.2 mg/dL with direct bilirubin 0.6 mg/dL, serum LDH 1,480 U/L (markedly elevated), haptoglobin < 10 mg/dL, blood urea nitrogen 34 mg/dL, and serum creatinine 1.8 mg/dL. Coagulation profile shows: prothrombin time (PT) 12.0 seconds (INR 1.0), and activated partial thromboplastin time (aPTT) 28 seconds. Peripheral blood smear demonstrates numerous fragmented red cells (schistocytes, 4-5 per high-power field). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate emergent therapeutic plasma exchange (TPE) and administer systemic glucocorticoids",
        "This patient presents with THROMBOTIC THROMBOCYTOPENIC PURPURA (TTP), a life-threatening thrombotic microangiopathy caused by autoantibodies against ADAMTS13 (a metalloprotease that cleaves ultra-large von Willebrand factor multimers). Deficiency of ADAMTS13 leads to platelet microthrombi in small vessels. The pentad includes: (1) MICROANGIOPATHIC HEMOLYTIC ANEMIA (schistocytes, elevated LDH, indirect hyperbilirubinemia, low haptoglobin); (2) THROMBOCYTOPENIA; (3) NEUROLOGIC SYMPTOMS (confusion, headache, seizure, stroke); (4) RENAL INSUFFICIENCY; and (5) FEVER. Note that COAGULATION STUDIES (PT/INR, aPTT, fibrinogen) ARE COMPLETELY NORMAL because the clotting cascade is not consumed (distinguishing TTP from DIC). The primary and emergent treatment is THERAPEUTIC PLASMA EXCHANGE (TPE) with fresh frozen plasma, combined with HIGH-DOSE GLUCOCORTICOIDS. TPE removes the autoantibodies and ultra-large multimers while supplying functional ADAMTS13 enzyme. Mortality without TPE is >90%."
      ],
      [
        "Transfuse two units of pooled platelets immediately to prevent intracranial hemorrhage",
        "Platelet transfusions in TTP are strictly contraindicated (except in life-threatening catastrophic bleeding) because infusing platelets fuels widespread microvascular thrombosis ('adding fuel to the fire')."
      ],
      [
        "Administer intravenous heparin infusion followed by cryoprecipitate replacement",
        "Anticoagulation with heparin and cryoprecipitate is inappropriate and hazardous; coagulation parameters are normal and microthrombi are platelet-rich rather than fibrin-dependent."
      ],
      [
        "Initiate high-dose intravenous immunoglobulin (IVIG) and schedule urgent splenectomy",
        "IVIG and splenectomy are treatments for immune thrombocytopenia (ITP); they do not replenish ADAMTS13 or arrest schistocytic microangiopathic hemolytic destruction."
      ],
      [
        "Begin broad-spectrum intravenous piperacillin-tazobactam and observe platelets for 24 hours",
        "While fever is present, delaying therapeutic plasma exchange in TTP while observing on antibiotics carries extreme mortality from widespread microvascular stroke or cardiac ischemia."
      ]
    ],
    "shortestValidSolution": "Schistocytes + platelets 14k + normal PT/INR + LDH 1480 + confusion = TTP -> Emergent Plasma Exchange (TPE) + steroids; NO platelets.",
    "necessaryInference": "Distinguish TTP from DIC (normal PT/aPTT) and ITP (schistocytes present), selecting emergent plasma exchange and avoiding platelet transfusion.",
    "strongestDistractor": "Transfuse two units of pooled platelets immediately to prevent intracranial hemorrhage",
    "distractorExclusion": "Platelet transfusions in TTP are contraindicated because they exacerbate microvascular platelet-vWF thrombosis, increasing stroke and myocardial infarction risk.",
    "citation": "Scully M, Cataland S, Coppo P, et al. Consensus on the standardization of terminology in thrombotic thrombocytopenic purpura and related thrombotic microangiopathies. J Thromb Haemost. 2017;15(2):312-322. PMID: 27868334.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology emergency requiring recognition of TTP from the classic clinical presentation and normal coagulation profile.",
      "distractorExclusionNotes": "Distractors feature fatal pitfalls (platelet transfusion), ITP treatments (IVIG/splenectomy), DIC therapies, and dangerous observational delays.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0606",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Heparin-Induced Thrombocytopenia Argatroban Initiation",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man who underwent elective total knee arthroplasty 6 days ago has been receiving subcutaneous enoxaparin 30 mg twice daily for deep venous thrombosis prophylaxis. His postoperative recovery had been uneventful until this morning, when he developed acute pain and swelling in his left calf. Physical examination reveals erythema, tenderness, and asymmetric edema in the left leg extending to the mid-thigh. Peripheral pulses are intact. Laboratory evaluation shows: platelet count 72,000/microL (preoperative baseline 210,000/microL; postoperative day 2 was 195,000/microL), hemoglobin 12.8 g/dL, and serum creatinine 1.0 mg/dL. Duplex ultrasonography reveals an occlusive deep venous thrombosis in the left femoral and popliteal veins. Which of the following is the most appropriate next step in pharmacologic management?",
    "choices": [
      [
        "Discontinue enoxaparin immediately and initiate an intravenous direct thrombin inhibitor such as argatroban",
        "This patient exhibits HEPARIN-INDUCED THROMBOCYTOPENIA TYPE II (HIT), characterized by: (1) Thrombocytopenia with a >=50% drop from baseline; (2) Onset 5-10 days after heparin exposure (or <24 hours if re-exposed within 3 months); and (3) Paradoxical ARTERIAL OR VENOUS THROMBOSIS (HITT). The 4T score here is 8 (high probability). Pathogenesis involves autoantibodies against platelet factor 4 (PF4)-heparin complexes, activating platelets and endothelial cells into a hypercoagulable state. Management: (1) IMMEDIATELY CESSATE ALL FORMS OF HEPARIN (unfractionated and LMWH, including catheter flushes); and (2) INITIATE A NON-HEPARIN ANTICOAGULANT, typically an INTRAVENOUS DIRECT THROMBIN INHIBITOR (ARGATROBAN or BIVALIRUDIN) or FONDAPARINUX. Direct thrombin inhibitors bind directly to the catalytic site of thrombin independent of antithrombin. Warfarin must NOT be started until platelets have recovered to >150,000/microL, as early warfarin causes rapid protein C depletion leading to microvascular thrombosis and venous limb gangrene."
      ],
      [
        "Switch enoxaparin to intravenous unfractionated heparin with a goal aPTT of 60 to 80 seconds",
        "Switching from LMWH to unfractionated heparin is catastrophic because HIT antibodies cross-react 100% with unfractionated heparin, worsening thrombosis."
      ],
      [
        "Administer oral warfarin 10 mg loading dose combined with continuation of enoxaparin for 5 days",
        "Warfarin monotherapy or loading in acute HIT causes acute protein C depletion, precipitating extensive microvascular thrombosis and venous limb gangrene."
      ],
      [
        "Transfuse two units of apheresis platelets to elevate counts above 100,000/microL before starting anticoagulation",
        "Platelet transfusions in HIT are contraindicated because they supply additional substrate for antibody-mediated platelet activation and thrombosis."
      ],
      [
        "Discontinue enoxaparin and withhold all anticoagulation until platelet count normalizes above 150,000/microL",
        "Withholding all anticoagulation in HIT without starting a non-heparin agent carries a 30-day thrombosis risk exceeding 50% due to circulating hypercoagulable state."
      ]
    ],
    "shortestValidSolution": "Enoxaparin 6 days + >50% platelet drop (210k -> 72k) + new DVT = HIT -> Stop enoxaparin + Start IV Argatroban (no warfarin yet).",
    "necessaryInference": "Recognize HIT type II (4T criteria) and select an immediate direct thrombin inhibitor while avoiding cross-reacting heparins, platelets, and early warfarin.",
    "strongestDistractor": "Switch enoxaparin to intravenous unfractionated heparin with a goal aPTT of 60 to 80 seconds",
    "distractorExclusion": "Unfractionated heparin cross-reacts strongly with HIT antibodies; switching from LMWH to UFH worsens catastrophic thrombosis.",
    "citation": "Cuker A, Arepally GM, Chong BH, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392. PMID: 30482768.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology emergency testing clinical recognition of HIT type II, calculation of platelet kinetics, and non-heparin anticoagulation selection.",
      "distractorExclusionNotes": "Distractors feature cross-reacting heparins, dangerous warfarin-induced venous limb gangrene, contraindicated platelet transfusions, and unsafe cessation of all anticoagulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0607",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Disseminated Intravascular Coagulation Diagnostic Profile vs TTP",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man is admitted to the intensive care unit with severe septic shock secondary to acute perforated diverticulitis. He has received broad-spectrum antibiotics, aggressive fluid resuscitation, and norepinephrine infusion. Over the past 4 hours, oozing of blood is noted from his central venous catheter insertion site, radial arterial line, and urinary catheter. Physical examination demonstrates cold extremities, mottled skin, and diffuse ecchymoses across his abdomen and extremities. Laboratory evaluation demonstrates: hemoglobin 8.6 g/dL, platelet count 36,000/microL, prothrombin time (PT) 24.6 seconds (INR 2.3; normal 0.8-1.2), activated partial thromboplastin time (aPTT) 62 seconds (normal 25-35 seconds), plasma fibrinogen 65 mg/dL (normal 200-400 mg/dL), D-dimer > 10,000 ng/mL FEU, and serum creatinine 2.6 mg/dL. Peripheral blood smear reveals moderate schistocytes. Which of the following pathophysiologic mechanisms best distinguishes this patient's coagulopathy from thrombotic thrombocytopenic purpura (TTP)?",
    "choices": [
      [
        "Systemic activation of both the coagulation cascade and fibrinolysis leading to consumptive depletion of clotting factors and fibrinogen",
        "This patient has acute DISSEMINATED INTRAVASCULAR COAGULATION (DIC) triggered by septic shock. Sepsis releases tissue factor and inflammatory cytokines (TNF-alpha, IL-1, IL-6), leading to uncontrolled, widespread generation of thrombin throughout the microvasculature. This causes: (1) CONSUMPTION OF COAGULATION FACTORS (prolonged PT/INR and aPTT); (2) CONSUMPTION OF FIBRINOGEN (hypofibrinogenemia < 100 mg/dL); (3) CONSUMPTION OF PLATELETS (thrombocytopenia); and (4) SECONDARY FIBRINOLYSIS (markedly elevated D-dimer). In contrast, THROMBOTIC THROMBOCYTOPENIC PURPURA (TTP) is mediated by platelet-vWF interaction due to ADAMTS13 deficiency; in TTP, the COAGULATION CASCADE IS NOT ACTIVATED, so PT/INR, aPTT, and fibrinogen levels REMAIN ENTIRELY NORMAL."
      ],
      [
        "Autoantibody-mediated inhibition of ADAMTS13 leading to accumulation of ultra-large von Willebrand factor multimers",
        "ADAMTS13 deficiency characterizes TTP, where the coagulation cascade is unaffected and PT/INR and fibrinogen remain completely normal."
      ],
      [
        "Isolated splenic platelet sequestration without activation of vascular endothelial cell procoagulant pathways",
        "Splenic sequestration causes isolated thrombocytopenia without prolongation of clotting times (PT/aPTT) or consumption of fibrinogen and elevation of D-dimer."
      ],
      [
        "Antibody-mediated platelet destruction by anti-glycoprotein IIb/IIIa autoantibodies in reticuloendothelial tissue",
        "Anti-GPIIb/IIIa antibodies cause immune thrombocytopenia (ITP), an isolated thrombocytopenia with normal coagulation times and normal fibrinogen."
      ],
      [
        "Impaired hepatic gamma-carboxylation of glutamic acid residues in vitamin K-dependent procoagulant factors",
        "Vitamin K deficiency prolongs PT and aPTT but does not consume platelets, cause hypofibrinogenemia, or generate schistocytes."
      ]
    ],
    "shortestValidSolution": "Sepsis + oozing at lines + prolonged PT/aPTT + fibrinogen 65 + platelets 36k + high D-dimer = DIC (widespread factor consumption, unlike TTP).",
    "necessaryInference": "Contrast DIC (consumptive coagulopathy with prolonged PT/aPTT and low fibrinogen) with TTP (isolated platelet microthrombi with normal coagulation factors).",
    "strongestDistractor": "Autoantibody-mediated inhibition of ADAMTS13 leading to accumulation of ultra-large von Willebrand factor multimers",
    "distractorExclusion": "ADAMTS13 deficiency is the hallmark of TTP, which does not prolong PT or aPTT and does not deplete plasma fibrinogen.",
    "citation": "Levi M, Ten Cate H. Disseminated intravascular coagulation. N Engl J Med. 1999;341(8):586-592. PMID: 10451465.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing laboratory discrimination between consumptive coagulopathy (DIC) and thrombotic microangiopathy (TTP).",
      "distractorExclusionNotes": "Distractors feature TTP pathophysiology (ADAMTS13), ITP autoantibodies (GPIIb/IIIa), splenic sequestration, and vitamin K carboxylation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0608",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Sickle Cell Acute Chest Syndrome Exchange Transfusion Indications",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old man with homozygous sickle cell disease (HbSS) is admitted to the hospital with severe vaso-occlusive bone pain in his back and thighs. He is started on intravenous morphine patient-controlled analgesia and isotonic fluids. On hospital day 2, he develops sudden-onset pleuritic chest pain, cough, shortness of breath, and fever. Temperature is 38.8 C (101.8 F), blood pressure 118/74 mm Hg, pulse 116/min, and respirations 28/min. Pulse oximetry shows oxygen saturation of 86% while breathing 4 L/min via nasal cannula; arterial blood gas on 50% Venturi mask reveals pH 7.34, PaCO2 36 mm Hg, and PaO2 56 mm Hg. Physical examination reveals bronchial breath sounds and crackles over the right middle and lower lung fields. Chest radiography reveals a new dense consolidation in the right middle and lower lobes. Laboratory studies show: hemoglobin 6.8 g/dL (baseline 8.5 g/dL), reticulocyte count 12%, and white blood cell count 18,400/microL. Empiric intravenous ceftriaxone and azithromycin, supplemental oxygen, and incentive spirometry are initiated. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform urgent automated red blood cell exchange transfusion to reduce HbS below 30% and raise PaO2",
        "This patient has severe ACUTE CHEST SYNDROME (ACS), the leading cause of mortality in sickle cell disease. Diagnostic criteria: new pulmonary infiltrate on chest radiography involving at least one complete lung segment, plus at least one clinical finding: temperature >= 38.5 C, tachypnea, chest pain, wheezing/cough, or hypoxemia. Management: (1) Broad-spectrum antibiotics (3rd-gen cephalosporin + macrolide for atypical coverage e.g. Chlamydia/Mycoplasma); (2) Judicious IV hydration and analgesia; (3) INCENTIVE SPIROMETRY; and (4) TRANSFUSION THERAPY. While simple transfusion is sufficient for mild ACS, EMERGENT RED BLOOD CELL EXCHANGE TRANSFUSION (erythrocytapheresis) is indicated for SEVERE ACS defined by: severe hypoxemia (PaO2 < 60 mm Hg or acute drop in SpO2 < 90% despite supplemental O2), multi-lobar lung disease, rapid clinical progression, or altered mental status. Exchange transfusion rapidly replaces HbS with HbA (target HbS < 30%) and improves tissue oxygenation without increasing blood viscosity or triggering hyperviscosity syndrome."
      ],
      [
        "Administer intravenous dexamethasone 10 mg q6h to suppress acute alveolar endothelial inflammation",
        "High-dose systemic corticosteroids in sickle cell acute chest syndrome are associated with severe rebound vaso-occlusive pain crises and prolonged hospitalization, and are avoided."
      ],
      [
        "Administer simple transfusion of four units of uncrossmatched packed red blood cells to reach Hb 12 g/dL",
        "Transfusing HbSS patients to a hemoglobin > 10-11 g/dL with simple transfusions dramatically increases blood viscosity, worsening microvascular sludging and vaso-occlusion."
      ],
      [
        "Withhold transfusion and initiate continuous non-invasive positive pressure ventilation (BiPAP) as sole therapy",
        "Severe hypoxemia (PaO2 56 mm Hg) in acute chest syndrome represents life-threatening sickling in the pulmonary vasculature that requires exchange transfusion to prevent acute fatal respiratory failure."
      ],
      [
        "Administer high-dose intravenous heparin infusion for suspected extensive pulmonary thromboembolism",
        "While PE can occur, the primary pathophysiology is sickling, alveolar hypoventilation, and microvascular infarction; systemic anticoagulation does not treat acute chest syndrome."
      ]
    ],
    "shortestValidSolution": "Sickle cell + new pulmonary infiltrate + fever + severe hypoxemia (PaO2 56 mm Hg on O2) = Severe ACS -> Urgent RBC exchange transfusion.",
    "necessaryInference": "Recognize severe acute chest syndrome criteria (PaO2 < 60 mmHg) requiring emergent red cell exchange transfusion rather than simple over-transfusion.",
    "strongestDistractor": "Administer simple transfusion of four units of uncrossmatched packed red blood cells to reach Hb 12 g/dL",
    "distractorExclusion": "Simple transfusion aiming for Hb > 10 g/dL increases blood viscosity and promotes fatal sickling; exchange transfusion lowers HbS while keeping total Hb <= 10 g/dL.",
    "citation": "Howard J, Hart N, Roberts-Harewood M, et al. Guideline on the management of acute chest syndrome in sickle cell disease. Br J Haematol. 2015;169(4):492-505. PMID: 25777470.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing indications for exchange transfusion versus simple transfusion in acute chest syndrome based on arterial blood gas severity.",
      "distractorExclusionNotes": "Distractors feature hyperviscosity risks of over-transfusion, corticosteroid rebound crises, and inappropriate reliance on non-invasive ventilation alone.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0609",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Polycythemia Vera Phlebotomy Target and Aspirin Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents to the clinic with persistent headaches, dizziness, and intense generalized pruritus that occurs characteristically after taking a warm bath or shower. Over the past 2 months, he has also experienced burning pain and erythema in his hands and feet (erythromelalgia). He has no history of cardiopulmonary disease and does not smoke. Physical examination reveals facial plethora, engorged retinal veins on funduscopy, and a palpable spleen tip 3 cm below the left costal margin. Laboratory studies demonstrate: hemoglobin 20.2 g/dL, hematocrit 62%, red blood cell count 7.1 x 10^6/microL, white blood cell count 13,800/microL with normal differential, and platelet count 520,000/microL. Serum erythropoietin (EPO) level is 1.8 mU/mL (reference 4.0-24.0 mU/mL). Molecular genetic analysis confirms a valine-to-phenylalanine substitution at codon 617 (V617F) in the JAK2 gene. Which of the following represents the most appropriate initial therapeutic strategy to reduce this patient's risk of major thrombotic events?",
    "choices": [
      [
        "Perform therapeutic phlebotomy to maintain hematocrit below 45% and initiate daily low-dose aspirin",
        "This patient has POLYCYTHEMIA VERA (PV), a myeloproliferative neoplasm characterized by clonal erythrocytosis driven by an activating mutation in the JAK2 tyrosine kinase (JAK2 V617F in >95% of cases). Hallmark features include: low serum erythropoietin (autonomous proliferation), aquagenic pruritus (histamine release from basophils), erythromelalgia (burning extremity pain from microvascular thromboses), plethora, and splenomegaly. The primary cause of morbidity and mortality in PV is THROMBOSIS (arterial and venous, including Budd-Chiari syndrome). The standard first-line management for all PV patients is: (1) THERAPEUTIC PHLEBOTOMY with a strict target HEMATOCRIT < 45% (based on the CYTO-PV trial, which showed a 4-fold reduction in cardiovascular death and major thromboses compared to a target of 45-50%); and (2) LOW-DOSE ASPIRIN (75-100 mg daily) to prevent arterial and microvascular thrombosis. Cytoreductive therapy (hydroxyurea) is added for high-risk patients (age >= 60 or prior thrombosis)."
      ],
      [
        "Perform therapeutic phlebotomy with a relaxed hematocrit target between 48% and 52% and initiate warfarin",
        "Clinical trials (CYTO-PV) proved that a hematocrit target >= 45% significantly increases cardiovascular death and thrombosis; warfarin is not indicated for primary prevention."
      ],
      [
        "Administer recombinant erythropoietin receptor antagonists and prescribe systemic antihistamines",
        "Erythropoietin levels are already suppressed; no therapeutic EPO receptor antagonists exist, and treating pruritus without lowering hematocrit leaves thrombosis risk unmitigated."
      ],
      [
        "Initiate oral ruxolitinib as immediate first-line monotherapy without requiring therapeutic phlebotomy",
        "Ruxolitinib (JAK1/2 inhibitor) is second-line therapy for patients with resistance or intolerance to hydroxyurea, not initial first-line therapy for treatment-naive PV."
      ],
      [
        "Perform emergent total splenectomy to eliminate extramedullary hematopoiesis and normalize cell counts",
        "Splenectomy in polycythemia vera is contraindicated as initial management because it worsens thrombocytosis and dramatically increases the risk of fatal thromboembolism."
      ]
    ],
    "shortestValidSolution": "Aquagenic pruritus + Hct 62% + low EPO + JAK2 V617F = Polycythemia vera -> Phlebotomy to Hct < 45% + low-dose aspirin.",
    "necessaryInference": "Identify polycythemia vera and apply guideline-directed hematocrit threshold (<45%) and antiplatelet prophylaxis to prevent major thrombotic events.",
    "strongestDistractor": "Perform therapeutic phlebotomy with a relaxed hematocrit target between 48% and 52% and initiate warfarin",
    "distractorExclusion": "A hematocrit target of 48-52% was definitively shown to increase thrombotic death 4-fold compared to strict control < 45%.",
    "citation": "Marchioli R, Finazzi G, Specchia G, et al. Cardiovascular events and intensity of treatment in polycythemia vera. N Engl J Med. 2013;368(1):22-33. PMID: 23228116.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing landmark trial-based management of polycythemia vera (CYTO-PV trial hematocrit target).",
      "distractorExclusionNotes": "Distractors feature inferior hematocrit targets, second-line JAK inhibitors, contraindicated splenectomy, and irrelevant receptor antagonists.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0610",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Multiple Myeloma CRAB Criteria and Diagnostic Evaluation",
    "provisionalDifficulty": 4,
    "stem": "A 69-year-old man presents to his primary care physician with fatigue, generalized weakness, and lower back pain that has worsened over the past 3 months and does not improve with acetaminophen. Physical examination shows pallor and localized tenderness over the lumbar spine. Laboratory studies demonstrate: hemoglobin 9.2 g/dL, MCV 88 fL, white blood cell count 5,400/microL, platelet count 165,000/microL, serum sodium 138 mEq/L, serum potassium 4.2 mEq/L, blood urea nitrogen 38 mg/dL, serum creatinine 2.2 mg/dL (baseline 0.9 mg/dL one year ago), serum total protein 9.8 g/dL, serum albumin 3.2 g/dL (protein gap 6.6 g/dL), and serum calcium 11.4 mg/dL. Urinalysis demonstrates minimal proteinuria on dipstick, but 24-hour urine collection reveals 2.8 g of protein. Plain radiographs of the lumbar spine and pelvis demonstrate discrete 'punched-out' radiolucent bone lesions without surrounding osteoblastic sclerosis. Which of the following diagnostic findings is required to establish the definitive diagnosis of this patient's underlying condition?",
    "choices": [
      [
        "Bone marrow biopsy showing 10% or more clonal plasma cells (or biopsy-proven plasmacytoma) in the setting of end-organ damage",
        "This patient exhibits the classic CRAB features of MULTIPLE MYELOMA (MM): (1) Calcium elevation (>11 mg/dL); (2) Renal insufficiency (Cr > 2.0 mg/dL); (3) Anemia (Hb < 10 g/dL, normocytic); and (4) Bone lesions (punched-out lytic lesions without sclerosis, driven by osteoclast activation via RANKL and osteoblast suppression via DKK1). The massive PROTEIN GAP (total protein minus albumin = 6.6 g/dL, normal < 4 g/dL) reflects monoclonal immunoglobulin production. Note that dipstick urinalysis detects ALBUMIN only; light chains (Bence Jones proteinuria) are missed on dipstick but detected on sulfosalicylic acid (SSA) precipitation or 24-hr urine protein electrophoresis. International Myeloma Working Group (IMWG) criteria require: >=10% CLONAL BONE MARROW PLASMA CELLS (or biopsy-proven plasmacytoma) PLUS either end-organ damage (CRAB) or a validated biomarker of malignancy (bone marrow plasma cells >=60%, involved/uninvolved serum free light chain ratio >=100, or >1 focal lesion on MRI)."
      ],
      [
        "Demonstration of positive Congo red staining with apple-green birefringence in abdominal fat aspirate",
        "Congo red birefringence establishes amyloidosis (AL amyloid), which can complicate myeloma but does not define multiple myeloma itself."
      ],
      [
        "Detection of the Philadelphia chromosome t(9;22) translocation and BCR-ABL1 fusion transcripts",
        "BCR-ABL1 defines chronic myeloid leukemia (CML) and a subset of ALL, not plasma cell dyscrasias."
      ],
      [
        "Presence of monoclonal IgM spike exceeding 3.0 g/dL on serum protein electrophoresis with lymphoplasmacytic marrow",
        "Monoclonal IgM with lymphoplasmacytic lymphoma defines Waldenstrom macroglobulinemia, which typically causes hyperviscosity and adenopathy rather than lytic bone lesions."
      ],
      [
        "Flow cytometric detection of CD5+ and CD23+ mature B cells exhibiting smudge cells on blood film",
        "CD5+ CD23+ mature B cells with smudge cells define chronic lymphocytic leukemia (CLL), not multiple myeloma."
      ]
    ],
    "shortestValidSolution": "Back pain + lytic lesions + Cr 2.2 + Ca 11.4 + protein gap 6.6 + light chain proteinuria = Multiple myeloma -> >=10% clonal plasma cells on bone marrow biopsy.",
    "necessaryInference": "Synthesize CRAB features and unmeasured urinary light chain protein to select definitive IMWG diagnostic criteria (>=10% clonal plasma cells).",
    "strongestDistractor": "Demonstration of positive Congo red staining with apple-green birefringence in abdominal fat aspirate",
    "distractorExclusion": "Amyloidosis can occur secondarily to light-chain deposition, but the primary definitive diagnosis of multiple myeloma requires documentation of clonal bone marrow plasma cells >= 10%.",
    "citation": "Rajkumar SV, Dimopoulos MA, Palumbo A, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014;15(12):e538-e548. PMID: 25439696.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing recognition of multiple myeloma presentation (CRAB criteria, protein gap, dipstick discordance) and formal diagnostic criteria.",
      "distractorExclusionNotes": "Distractors feature alternative hematologic malignancies (Waldenstrom IgM, CML Philadelphia, CLL CD5/23) and amyloid staging.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0611",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Waldenstrom Macroglobulinemia Hyperviscosity Plasmapheresis",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man presents with progressive blurry vision, dull persistent headaches, epistaxis, and bilateral numbness and tingling in his feet over the past 6 weeks. Physical examination shows generalized lymphadenopathy and mild hepatosplenomegaly. Dilated funduscopic examination reveals marked engorgement and segmentation of retinal veins ('sausage-link' appearance) with scattered flame hemorrhages and bilateral papilledema. Laboratory evaluation demonstrates: hemoglobin 8.8 g/dL, platelet count 112,000/microL, white blood cell count 6,200/microL, serum creatinine 1.2 mg/dL, and serum calcium 9.2 mg/dL (normal). Serum protein electrophoresis demonstrates a prominent narrow spike in the gamma-globulin zone, and immunofixation confirms monoclonal IgM with a concentration of 5,800 mg/dL (normal 40-230 mg/dL). Bone marrow biopsy reveals infiltration with lymphoplasmacytic cells harboring the MYD88 L265P mutation. Which of the following is the most appropriate immediate intervention to prevent irreversible visual loss and acute stroke?",
    "choices": [
      [
        "Perform emergent therapeutic plasma exchange (plasmapheresis) to rapidly reduce serum IgM levels",
        "This patient presents with WALDENSTROM MACROGLOBULINEMIA (WM) complicated by symptomatic HYPERVISCOSITY SYNDROME. WM is a lymphoplasmacytic lymphoma characterized by excessive monoclonal IgM secretion and the MYD88 L265P mutation in >90% of cases. Because IgM is a large pentameric molecule restricted largely to the intravascular compartment (80%), high levels markedly increase blood viscosity. Symptoms of hyperviscosity include: (1) Ocular (visual blurring, retinal hemorrhages, venous engorgement with 'sausage-link' segmentation); (2) Neurologic (headache, dizziness, ataxia, stupor, coma, stroke); and (3) Bleeding diathesis (epistaxis, mucosal bleeding due to IgM binding to clotting factors and platelets). EMERGENT THERAPEUTIC PLASMA EXCHANGE (PLASMAPHERESIS) is the mandatory immediate treatment to rapidly reduce IgM levels, alleviate hyperviscosity, and prevent irreversible blindness or ischemic stroke. Systemic chemoimmunotherapy (e.g., rituximab + bendamustine) is started subsequently, but giving rituximab alone initially is dangerous because it can induce an acute IgM flare and worsen hyperviscosity."
      ],
      [
        "Administer single-agent intravenous rituximab infusion immediately as definitive first-line therapy",
        "Rituximab monotherapy can trigger an acute, dangerous 'IgM flare' that spikes IgM levels and precipitates catastrophic hyperviscosity stroke or retinal vein occlusion."
      ],
      [
        "Infuse two units of packed red blood cells to correct anemia and improve ocular tissue oxygenation",
        "Transfusing red blood cells in hyperviscosity syndrome dramatically increases whole blood viscosity, directly precipitating thrombotic stroke and myocardial infarction."
      ],
      [
        "Administer high-dose intravenous dexamethasone combined with emergent whole-brain radiation",
        "Radiation therapy is inappropriate for diffuse systemic lymphoplasmacytic proliferation; plasmapheresis is required to clear circulating pentameric IgM."
      ],
      [
        "Initiate oral therapeutic anticoagulation with apixaban to dissolve retinal microvascular thrombi",
        "Direct oral anticoagulants do not reduce viscosity and dramatically aggravate the mucosal and retinal bleeding diathesis caused by IgM-mediated platelet dysfunction."
      ]
    ],
    "shortestValidSolution": "Sausage-link retinal veins + epistaxis + IgM spike 5800 + MYD88 = Waldenstrom with hyperviscosity -> Emergent Plasmapheresis.",
    "necessaryInference": "Recognize hyperviscosity syndrome in Waldenstrom macroglobulinemia requiring immediate mechanical IgM clearance via plasmapheresis before systemic therapy.",
    "strongestDistractor": "Administer single-agent intravenous rituximab infusion immediately as definitive first-line therapy",
    "distractorExclusion": "Rituximab monotherapy can precipitate an acute IgM flare that sharply worsens whole blood viscosity, triggering stroke or complete retinal vein thrombosis.",
    "citation": "Gertz MA. Acute hyperviscosity: syndromes and management. Blood. 2018;132(13):1379-1385. PMID: 30104217.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology-oncology emergency item testing recognition of IgM hyperviscosity syndrome in Waldenstrom macroglobulinemia.",
      "distractorExclusionNotes": "Distractors feature dangerous treatments (rituximab flare, PRBC transfusion increasing viscosity, DOACs worsening hemorrhage) and inappropriate radiation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0612",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Warm vs Cold Autoimmune Hemolytic Anemia Diagnosis and Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman with a history of systemic lupus erythematosus presents to the emergency department with profound fatigue, exertional dyspnea, and yellowing of her eyes over the past week. Physical examination reveals pale conjunctivae, scleral icterus, and mild splenomegaly. Cardiopulmonary examination is normal. Laboratory evaluation demonstrates: hemoglobin 6.4 g/dL, MCV 102 fL, reticulocyte count 9.8%, total bilirubin 3.8 mg/dL with direct bilirubin 0.5 mg/dL, serum LDH 880 U/L, and undetectable serum haptoglobin. Peripheral blood smear demonstrates microspherocytes with polychromasia, but no schistocytes. Direct antiglobulin test (Coombs test) is strongly positive for IgG autoantibodies and negative for C3d. Which of the following is the most appropriate first-line pharmacotherapy for this patient's condition?",
    "choices": [
      [
        "Oral or intravenous systemic glucocorticoids such as high-dose prednisone",
        "This patient presents with WARM AUTOIMMUNE HEMOLYTIC ANEMIA (AIHA), an extravascular hemolytic process strongly associated with systemic lupus erythematosus (SLE), lymphoproliferative disorders, or drugs (penicillins, alpha-methyldopa). Pathogenesis: WARM-REACTING AUTOANTIBODIES (primarily IgG) bind to erythrocyte surface antigens at body temperature (37 C). As IgG-coated erythrocytes transit the splenic red pulp, splenic macrophages recognize the Fc portion of IgG and phagocytose portions of the erythrocyte membrane, generating MICROSPHEROCYTES without shearing (no schistocytes). The direct antiglobulin test (DAT) is POSITIVE FOR IgG. FIRST-LINE THERAPY is SYSTEMIC GLUCOCORTICOIDS (oral prednisone 1-1.5 mg/kg/day or IV methylprednisolone). Glucocorticoids reduce autoantibody synthesis and downregulate Fc receptor expression on splenic macrophages. In contrast, COLD AGGLUTININ DISEASE is mediated by IgM and complement (C3d positive on DAT); cold AIHA is refractory to corticosteroids and is treated by cold avoidance and rituximab."
      ],
      [
        "Emergent total splenectomy within 24 hours of hospital presentation",
        "Splenectomy is a second-line therapy reserved for patients with warm AIHA who fail, relapse on, or cannot tolerate systemic glucocorticoid therapy."
      ],
      [
        "Avoidance of cold environmental exposure and supportive care with blankets",
        "Cold avoidance is the cornerstone of cold agglutinin disease (IgM/C3d-mediated), but is ineffective for warm AIHA (IgG-mediated at 37 C)."
      ],
      [
        "Intravenous acyclovir and broad-spectrum antimicrobial coverage for Mycoplasma",
        "Antimicrobials treat triggers of cold agglutinin disease (Mycoplasma pneumoniae or EBV), not warm IgG-mediated hemolysis in SLE."
      ],
      [
        "Immediate therapeutic plasma exchange as primary first-line intervention",
        "Plasma exchange is ineffective in warm AIHA because IgG is widely distributed throughout extravascular and tissue spaces and rebounds rapidly."
      ]
    ],
    "shortestValidSolution": "SLE + hemolysis + microspherocytes + Coombs positive for IgG = Warm AIHA -> Systemic glucocorticoids (Prednisone).",
    "necessaryInference": "Distinguish warm AIHA (IgG-positive, responsive to corticosteroids) from cold AIHA (IgM/C3d-positive, unresponsive to steroids, managed with cold avoidance/rituximab).",
    "strongestDistractor": "Emergent total splenectomy within 24 hours of hospital presentation",
    "distractorExclusion": "Splenectomy is second-line therapy for warm AIHA refractory to steroids; initial emergency management is high-dose glucocorticoid therapy.",
    "citation": "Barcellini W, Fattizzo B. How I treat warm autoimmune hemolytic anemia. Blood. 2021;137(10):1283-1294. PMID: 33171490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing distinction between warm (IgG) and cold (IgM) AIHA mechanisms and first-line steroid therapy selection.",
      "distractorExclusionNotes": "Distractors feature second-line splenectomy, cold agglutinin-specific measures (cold avoidance, Mycoplasma therapy), and ineffective plasmapheresis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0613",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Hereditary Spherocytosis Eosin-5-Maleimide Binding Test",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy presents with right upper quadrant abdominal pain, scleral icterus, and fatigue. His father underwent a cholecystectomy and an unspecified hematologic surgery at age 22. Physical examination reveals scleral icterus, right upper quadrant tenderness with positive Murphy sign, and a palpable spleen tip 4 cm below the left costal margin. Abdominal ultrasonography reveals multiple pigmented radiopaque gallstones with gallbladder wall thickening and pericholecystic fluid. Laboratory evaluation demonstrates: hemoglobin 10.4 g/dL, MCV 84 fL, mean corpuscular hemoglobin concentration (MCHC) 37.8 g/dL (normal 32-36 g/dL), red blood cell distribution width (RDW) 17.2% (elevated), reticulocyte count 8.4%, total bilirubin 4.4 mg/dL with direct bilirubin 0.8 mg/dL, and serum LDH 540 U/L. Direct antiglobulin (Coombs) test is negative. Peripheral blood smear shows dense round red cells lacking central pallor (spherocytes) and polychromasia. Which of the following diagnostic tests is the most sensitive and specific modern confirmatory study for this patient's underlying condition?",
    "choices": [
      [
        "Flow cytometry utilizing eosin-5-maleimide (EMA) binding to erythrocyte surface band 3",
        "This patient has HEREDITARY SPHEROCYTOSIS (HS), an autosomal dominant red cell membrane disorder caused by mutations in ANKYRIN, SPECTRIN, BAND 3, or PROTEIN 4.2. Membrane loss without proportional volume loss creates spherical erythrocytes (spherocytes) that have reduced surface-area-to-volume ratio and high intracellular dehydration, yielding an ELEVATED MCHC (> 36 g/dL) and increased RDW. These rigid spherocytes are trapped and destroyed in the splenic cords, causing extravascular hemolysis, splenomegaly, and calcium bilirubinate gallstones (pigmented stones). Coombs test is NEGATIVE (distinguishing HS from warm AIHA). The modern diagnostic test of choice with the highest sensitivity (>93%) and specificity is FLOW CYTOMETRIC EOSIN-5-MALEIMIDE (EMA) BINDING TEST, which quantifies reduced fluorescence of EMA bound to transmembrane band 3 and Rh-associated glycoprotein. The acidified glycerol lysis test (AGLT) is also confirmatory. The traditional osmotic fragility test is prone to false negatives and is no longer preferred."
      ],
      [
        "Standard erythrocyte osmotic fragility test on freshly drawn unincubated blood",
        "Osmotic fragility testing on unincubated blood has low sensitivity (up to 20% false-negative rate) and has been largely replaced by EMA flow cytometry."
      ],
      [
        "Hemoglobin electrophoresis on cellulose acetate at alkaline pH to detect variant globin chains",
        "Hemoglobin electrophoresis is normal in hereditary spherocytosis because HS is a membrane cytoskeletal defect, not a hemoglobinopathy."
      ],
      [
        "Serum glucose-6-phosphate dehydrogenase enzymatic activity assay during active hemolysis",
        "G6PD deficiency causes episodic intravascular oxidative hemolysis with Heinz bodies and bite cells, not elevated MCHC, chronic spherocytosis, or negative Coombs."
      ],
      [
        "Bone marrow aspiration and core biopsy demonstrating megaloblastic erythroid hyperplasia",
        "Bone marrow biopsy is invasive and unnecessary; it shows normoblastic erythroid hyperplasia reflecting hemolysis rather than diagnostic etiology."
      ]
    ],
    "shortestValidSolution": "High MCHC 37.8 + Coombs neg spherocytes + pigmented gallstones + splenomegaly = Hereditary spherocytosis -> EMA binding flow cytometry.",
    "necessaryInference": "Recognize high MCHC and negative Coombs as hereditary spherocytosis and select modern guideline confirmatory testing (EMA binding).",
    "strongestDistractor": "Standard erythrocyte osmotic fragility test on freshly drawn unincubated blood",
    "distractorExclusion": "Unincubated osmotic fragility testing has poor sensitivity and has been superseded by flow cytometric EMA binding as the preferred diagnostic test.",
    "citation": "King MJ, Garcon L, Hoyer JD, et al. ICSH guidelines for the laboratory diagnosis of nonimmune hereditary red cell membrane disorders. Int J Lab Hematol. 2015;37(3):304-325. PMID: 25779663.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing recognition of hereditary spherocytosis triad (hemolysis, splenomegaly, gallstones, high MCHC) and modern EMA flow cytometry.",
      "distractorExclusionNotes": "Distractors feature outdated osmotic fragility testing, hemoglobinopathy screening, G6PD assays, and unnecessary marrow examination.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0614",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Aplastic Crisis vs Splenic Sequestration in Sickle Cell",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old boy with homozygous sickle cell disease (HbSS) is brought to the emergency department because of extreme fatigue, pallor, and lethargy for 2 days. One week ago, he had low-grade fevers and a mild facial rash that his mother described as looking like 'slapped cheeks'. Vital signs show: temperature 37.4 C (99.3 F), blood pressure 92/58 mm Hg, pulse 128/min, and respirations 24/min. Physical examination shows striking conjunctival and mucosal pallor. Cardiac examination reveals a grade 2/6 systolic flow murmur. The abdomen is soft and non-tender; the spleen is not palpable. Laboratory evaluation demonstrates: hemoglobin 3.8 g/dL (baseline 8.2 g/dL), platelet count 210,000/microL, white blood cell count 6,800/microL, and reticulocyte count 0.1% (absolute reticulocyte count 6,000/microL; reference 25,000-75,000/microL). Which of the following is the most likely diagnosis and primary pathophysiologic mechanism?",
    "choices": [
      [
        "Transient aplastic crisis caused by Parvovirus B19 infection of erythroid progenitor cells",
        "This patient exhibits a classic TRANSIENT APLASTIC CRISIS. In patients with underlying chronic hemolysis (e.g., sickle cell disease, hereditary spherocytosis), erythrocyte lifespan is shortened from 120 days to 10-20 days, requiring constant high-level compensatory reticulocytosis (typically 8-15%). Infection with PARVOVIRUS B19 (the etiologic agent of erythema infectiosum, characterized by the 'slapped cheek' rash) selectively infects and destroys ERYTHROID PROGENITOR CELLS via the P-antigen receptor, temporarily halting red blood cell production for 7-10 days. In normal individuals this pause is clinically silent, but in sickle cell patients it results in an acute catastrophic drop in hemoglobin accompanied by an ABSOLUTE RETICULOCYTOPHENIA (reticulocytes < 1% or near zero). In contrast, SPLENIC SEQUESTRATION CRISIS features sudden splenic pooling of erythrocytes causing acute anemia WITH MARKEDLY ELEVATED RETICULOCYTES and a rapidly ENLARGING, TENDER SPLEEN."
      ],
      [
        "Acute splenic sequestration crisis with intravascular pooling of erythrocytes in the splenic cords",
        "Splenic sequestration presents with rapid painful splenomegaly, circulatory collapse, and a markedly ELEVATED reticulocyte count, whereas this patient has no palpable spleen and near-zero reticulocytes."
      ],
      [
        "Hyperhemolytic crisis characterized by accelerated antibody-mediated extravascular erythrocyte lysis",
        "Hyperhemolysis causes a dramatic rise in reticulocyte count, unconjugated bilirubin, and serum LDH, which is absent here."
      ],
      [
        "Severe nutritional megaloblastic anemia resulting from acute dietary folate exhaustion",
        "Dietary folate depletion causes gradual macrocytic anemia with hypersegmented neutrophils over months, not an acute life-threatening drop over 48 hours following a viral prodrome."
      ],
      [
        "Acute marrow failure secondary to human herpesvirus 6 (HHV-6) trilineage stem cell suppression",
        "HHV-6 typically causes exanthem subitum (roseola infantum) with high fevers and trilineage cytopenias, not pure red cell aplasia with preserved platelets and leukocytes."
      ]
    ],
    "shortestValidSolution": "HbSS + acute drop Hb to 3.8 + reticulocytes 0.1% + slapped cheek rash = Aplastic crisis -> Parvovirus B19 erythroid progenitor arrest.",
    "necessaryInference": "Use near-zero reticulocyte count and absent splenomegaly following erythema infectiosum to distinguish aplastic crisis from splenic sequestration.",
    "strongestDistractor": "Acute splenic sequestration crisis with intravascular pooling of erythrocytes in the splenic cords",
    "distractorExclusion": "Splenic sequestration crisis presents with rapid splenomegaly and robust reticulocytosis (>10%), whereas aplastic crisis features absent splenomegaly and reticulocytopenia (<1%).",
    "citation": "Serjeant GR, Serjeant BE, Thomas PW, et al. Human parvovirus infection in homozygous sickle cell disease. Lancet. 1993;341(8854):1237-1240. PMID: 8098077.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing clinical and laboratory differentiation between aplastic crisis (reticulocytopenia) and sequestration crisis (reticulocytosis/splenomegaly).",
      "distractorExclusionNotes": "Distractors feature splenic sequestration, hyperhemolysis, nutritional megaloblastosis, and generalized marrow suppression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0615",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Hemophilia A High-Titer Inhibitor Bypassing Agents",
    "provisionalDifficulty": 5,
    "stem": "A 14-year-old boy with severe hemophilia A (baseline factor VIII activity < 1%) presents to the emergency department with severe right knee pain and swelling following a minor collision during physical education. He infused his prescribed recombinant factor VIII concentrate at home 3 hours ago and again 1 hour ago without any relief of pain or reduction in swelling. Physical examination demonstrates an acutely tender, tensely distended, and warm right knee joint with markedly restricted range of motion. Laboratory evaluation shows: activated partial thromboplastin time (aPTT) 84 seconds (normal 25-35 seconds), which fails to correct upon a 1:1 mixing study with normal pooled plasma after a 2-hour incubation at 37 C. Bethesda assay demonstrates a factor VIII inhibitor titer of 18 Bethesda Units (BU; high-titer inhibitor >= 5 BU). Which of the following is the most appropriate immediate therapeutic management for this acute hemarthrosis?",
    "choices": [
      [
        "Administer an intravenous bypassing agent such as recombinant activated factor VII (rFVIIa) or activated prothrombin complex concentrate (aPCC)",
        "This patient with severe hemophilia A has developed a HIGH-TITER FACTOR VIII INHIBITOR (neutralizing IgG alloantibody directed against factor VIII, defined as >= 5 Bethesda Units). Inhibitors occur in up to 30% of severe hemophilia A patients receiving factor replacement. The inhibitor neutralizes exogenous factor VIII infusions, resulting in lack of therapeutic response and failure of the aPTT to correct on a 1:1 mixing study (indicating the presence of an inhibitor rather than factor deficiency). For acute bleeding in patients with high-titer inhibitors, standard or high-dose factor VIII concentrates are ineffective. Management requires 'BYPASSING AGENTS' that promote thrombin generation independent of factor VIII: RECOMBINANT ACTIVATED FACTOR VII (rFVIIa) or ACTIVATED PROTHROMBIN COMPLEX CONCENTRATE (aPCC / FEIBA, containing activated factors II, VII, IX, and X). Long-term management involves immune tolerance induction (ITI) and the bispecific antibody emicizumab."
      ],
      [
        "Administer high-dose continuous infusion recombinant factor VIII concentrate aiming for 100% factor activity",
        "High-dose factor VIII is rapidly neutralized by high-titer inhibitors (>= 5 BU) and fails to achieve hemostasis in acute severe hemarthrosis."
      ],
      [
        "Administer intravenous desmopressin (DDAVP) to stimulate endogenous endothelial factor VIII release",
        "Desmopressin releases stored vWF and factor VIII from Weibel-Palade bodies, which is ineffective in severe hemophilia A (<1% baseline) and neutralized by inhibitors."
      ],
      [
        "Perform emergent therapeutic needle arthrocentesis without administering any hemostatic concentrates",
        "Arthrocentesis in an uncorrected coagulopathy causes massive recurrent intra-articular re-bleeding, joint infection, and permanent joint destruction."
      ],
      [
        "Initiate oral high-dose prednisone monotherapy and withhold all procoagulant factor infusions",
        "Glucocorticoids may be used as part of immune suppression during elective tolerance induction, but have zero immediate hemostatic efficacy for acute hemarthrosis."
      ]
    ],
    "shortestValidSolution": "Hemophilia A + failed FVIII infusion + aPTT fails to correct on mix + Bethesda 18 BU = High-titer inhibitor -> Bypassing agent (rFVIIa or aPCC).",
    "necessaryInference": "Identify high-titer inhibitor (Bethesda >= 5 BU) and select bypassing agents (rFVIIa/aPCC) that generate thrombin downstream without requiring factor VIII.",
    "strongestDistractor": "Administer high-dose continuous infusion recombinant factor VIII concentrate aiming for 100% factor activity",
    "distractorExclusion": "Infusing factor VIII in the presence of a high-titer neutralizing inhibitor (> 5 BU) is neutralized and fails to halt joint hemorrhage.",
    "citation": "Kempton CL, White GC 2nd. How we treat a hemophilia A patient with a factor VIII inhibitor. Blood. 2009;113(1):11-17. PMID: 18838615.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing management of acute hemarthrosis in hemophilia A complicated by high-titer neutralizing alloantibody inhibitors.",
      "distractorExclusionNotes": "Distractors feature neutralized factor VIII infusions, ineffective DDAVP, hazardous needle aspiration without factor coverage, and delayed steroids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0616",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Antiphospholipid Syndrome Warfarin Superiority over DOACs",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman presents to the clinic for follow-up 6 weeks after hospitalization for an unprovoked extensive deep venous thrombosis involving the right common femoral vein. Her medical history is notable for two unexplained spontaneous pregnancy losses at 14 and 18 weeks of gestation. She is currently taking rivaroxaban 20 mg once daily. Diagnostic testing performed at the time of diagnosis and repeated today (12 weeks apart) demonstrates: positive dilute Russell viper venom time (dRVVT) confirming lupus anticoagulant, high-titer anti-cardiolipin IgG antibodies (78 GPL units; normal < 15), and high-titer anti-beta-2-glycoprotein I IgG antibodies (65 SGU; normal < 20). CBC, renal, and hepatic function are normal. Which of the following is the most appropriate long-term anticoagulation strategy for this patient?",
    "choices": [
      [
        "Transition from rivaroxaban to warfarin with a target international normalized ratio (INR) of 2.0 to 3.0",
        "This patient meets Sydney criteria for ANTIPHOSPHOLIPID SYNDROME (APS): at least one clinical criterion (vascular thrombosis or defined pregnancy morbidity) PLUS at least one persistent laboratory criterion on >=2 occasions at least 12 weeks apart (lupus anticoagulant, anti-cardiolipin IgG/IgM, or anti-beta-2-glycoprotein I IgG/IgM). This patient is 'TRIPLE-POSITIVE' (positive for all 3 antibodies), which confers the highest risk of recurrent thrombosis. Landmark randomized controlled trials (TRAPS and ASTRO-APS) have definitively demonstrated that DIRECT ORAL ANTICOAGULANTS (DOACs, such as rivaroxaban or apixaban) ARE INFERIOR TO WARFARIN in thrombotic antiphospholipid syndrome\u2014particularly in triple-positive patients\u2014and are associated with a significantly higher rate of recurrent thromboembolic events, especially ARTERIAL THROMBOSIS (stroke and myocardial infarction). Therefore, international guidelines (ASH, ISTH, EULAR) recommend long-term/indefinite anticoagulation with a VITAMIN K ANTAGONIST (WARFARIN, target INR 2.0-3.0) as the definitive standard of care."
      ],
      [
        "Continue oral rivaroxaban 20 mg daily because DOACs provide non-inferior protection with lower bleeding risk",
        "Clinical trials (TRAPS trial) showed rivaroxaban had excess arterial thromboses (ischemic strokes and MI) compared to warfarin in triple-positive APS."
      ],
      [
        "Discontinue all anticoagulation and initiate low-dose aspirin 81 mg daily as sole long-term prophylaxis",
        "Aspirin monotherapy is inadequate for secondary thromboprophylaxis following an established deep venous thrombosis in antiphospholipid syndrome."
      ],
      [
        "Transition to subcutaneous unfractionated heparin with home aPTT monitoring targeting 50 to 70 seconds",
        "Long-term therapeutic unfractionated heparin carries high rates of osteoporosis, heparin-induced thrombocytopenia, and is impractical compared to oral warfarin."
      ],
      [
        "Discontinue anticoagulation after 3 total months because the unprovoked venous thrombosis has resolved",
        "Patients with APS and established venous or arterial thrombosis require indefinite anticoagulation because stopping therapy carries a recurrent thrombosis rate > 50%."
      ]
    ],
    "shortestValidSolution": "Triple-positive APS (lupus anticoagulant + anticardiolipin + anti-beta-2) with DVT = High-risk APS -> Switch from rivaroxaban to Warfarin (INR 2-3).",
    "necessaryInference": "Apply landmark trial evidence (TRAPS trial) demonstrating that DOACs are contraindicated/inferior to warfarin in triple-positive antiphospholipid syndrome.",
    "strongestDistractor": "Continue oral rivaroxaban 20 mg daily because DOACs provide non-inferior protection with lower bleeding risk",
    "distractorExclusion": "Rivaroxaban was demonstrated in prospective trials to cause significantly more arterial thromboses than warfarin in patients with triple-positive APS.",
    "citation": "Pengo V, Denas G, Zoppellaro G, et al. Rivaroxaban vs warfarin in high-risk patients with antiphospholipid syndrome. Blood. 2018;132(13):1365-1371. PMID: 30002145.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing landmark guideline recommendations for warfarin superiority over DOACs in triple-positive antiphospholipid syndrome.",
      "distractorExclusionNotes": "Distractors feature inappropriate DOAC continuation, inadequate aspirin monotherapy, impractical long-term UFH, and premature anticoagulation cessation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0617",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Superior Vena Cava Syndrome Endovascular Stenting Indications",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 45-pack-year smoking history presents to the emergency department with progressive facial puffiness, neck fullness, headache, and shortness of breath that worsens markedly when bending forward or lying supine. Over the past 24 hours, he has experienced hoarseness and difficulty swallowing. Physical examination reveals striking facial edema, plethoric cyanosis of the face and upper torso, dilated superficial collateral veins coursing across the anterior chest wall, and prominent jugular venous distension without inspiratory collapse. Mild stridor is audible over the trachea. Contrast-enhanced CT of the chest demonstrates a 6.2-cm right upper lobe pulmonary mass infiltrating the mediastinum and causing complete extrinsic compression and endoluminal thrombosis of the superior vena cava, with severe secondary tracheal compression. Which of the following is the most appropriate immediate intervention to rapidly alleviate his life-threatening airway and cerebral venous congestion?",
    "choices": [
      [
        "Perform urgent endovascular superior vena cava angioplasty with self-expanding metal stent placement",
        "This patient presents with severe SUPERIOR VENA CAVA (SVC) SYNDROME complicated by impending airway obstruction (stridor, tracheal compression) and cerebral edema (headache, venous plethora). SVC syndrome is most commonly caused by non-small cell lung cancer, small cell lung cancer, or lymphoma. While radiation therapy and chemotherapy were historically the initial approaches, ENDOVASCULAR CAVAL STENTING (angioplasty and self-expanding metal stent placement) is now the preferred first-line intervention for ACUTE, LIFE-THREATENING SVC OBSTRUCTION. Stenting provides IMMEDIATE RELIEF OF VENOUS HYPERTENSION (within 24-48 hours in >90% of patients), relieves airway compromise, and avoids delays associated with awaiting histologic confirmation or radiation latency. Systemic glucocorticoids and loop diuretics may be used as temporizing adjuncts, but stenting is definitive for rapid structural canalization."
      ],
      [
        "Administer emergent urgent empiric whole-chest radiotherapy without obtaining histologic tissue",
        "Emergency radiation therapy prior to biopsy can distort tissue histology, preventing accurate diagnosis, and requires days to produce tumor regression and relieve severe obstruction."
      ],
      [
        "Administer high-dose intravenous furosemide monotherapy and maintain strict supine positioning",
        "Supine positioning dramatically worsens intracranial and airway venous congestion; loop diuresis alone cannot overcome mechanical caval occlusion."
      ],
      [
        "Initiate oral therapeutic rivaroxaban monotherapy and schedule elective outpatient radiation oncology consultation",
        "DOAC monotherapy does not relieve mechanical tumor compression of the vena cava or alleviate life-threatening airway stridor."
      ],
      [
        "Perform emergent open surgical bypass using a synthetic Dacron graft via median sternotomy",
        "Surgical bypass is high-risk, invasive, and reserved for rare benign cases where endovascular catheter techniques fail."
      ]
    ],
    "shortestValidSolution": "Smoker + facial plethora + dilated chest veins + stridor + SVC obstruction on CT = Severe SVC syndrome -> Urgent Endovascular Stenting.",
    "necessaryInference": "Select urgent endovascular stent placement as the fastest, most effective intervention for acute SVC syndrome with airway compromise.",
    "strongestDistractor": "Administer emergent urgent empiric whole-chest radiotherapy without obtaining histologic tissue",
    "distractorExclusion": "Empiric radiation before biopsy obscures histology and has a delayed onset of relief (days to weeks) compared to immediate endovascular stenting.",
    "citation": "Rizvi AZ, Kalra M, Bjarnason H, et al. SVS/AVF guidelines for the management of superior vena cava syndrome. J Vasc Surg Venous Lymphat Disord. 2020;8(6):1085-1101. PMID: 32682064.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK medical oncology emergency item testing modern management of acute superior vena cava syndrome with critical airway features.",
      "distractorExclusionNotes": "Distractors feature outdated empiric radiation that ruins diagnostic biopsy, ineffective loop diuresis, inappropriate anticoagulation monotherapy, and invasive open surgery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0618",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Cancer-Associated Thrombosis Anticoagulation Selection",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man with unresectable, locally advanced adenocarcinoma of the pancreatic body and tail presents with acute right lower extremity swelling and tenderness for 2 days. Physical examination shows unilateral calf erythema and pitting edema. Doppler ultrasonography confirms an occlusive deep venous thrombosis in the right popliteal and superficial femoral veins. He has no history of gastrointestinal bleeding or peptic ulcer disease. Complete blood count shows: hemoglobin 11.2 g/dL, platelet count 185,000/microL, and serum creatinine 0.9 mg/dL. Endoscopic ultrasound performed 3 weeks ago demonstrated intact gastric and duodenal mucosa with no active intraluminal tumor ulceration. Which of the following anticoagulation regimens is recommended as first-line therapy according to current clinical guidelines for cancer-associated thrombosis?",
    "choices": [
      [
        "Oral direct factor Xa inhibitor such as apixaban or low-molecular-weight heparin such as enoxaparin",
        "CANCER-ASSOCIATED THROMBOSIS (CAT) carries high risks of both recurrent venous thromboembolism and major bleeding. Landmark randomized trials (CARAVAGGIO, ADAM-VTE, SELECT-D, HOKUSAI-VTE Cancer) demonstrated that DIRECT ORAL ANTICOAGULANTS (specifically oral factor Xa inhibitors: APIXABAN, RIVAROXABAN, or EDOXABAN) are non-inferior to LOW-MOLECULAR-WEIGHT HEPARIN (LMWH, such as ENOXAPARIN) for preventing recurrent VTE, with comparable major bleeding rates in patients WITHOUT luminal mucosal gastrointestinal or genitourinary cancers. Current guidelines (ASCO, ASH, CHEST) recommend APIXABAN, RIVAROXABAN, or LMWH as preferred first-line options for cancer-associated thrombosis. However, in patients with unresected luminal gastrointestinal cancers (e.g., esophageal, gastric, or colorectal adenocarcinoma) where oral Xa inhibitors carry an increased risk of gastrointestinal bleeding, LMWH is preferred. In this patient with pancreatic cancer and no luminal mucosal lesions, oral apixaban or LMWH is first-line."
      ],
      [
        "Oral warfarin monotherapy with target INR 2.0 to 3.0 because oral vitamin K antagonists are superior to LMWH in malignancy",
        "Warfarin was proved inferior to LMWH in the landmark CLOT trial and has unpredictable bioavailability in cancer patients due to malnutrition and chemo interactions."
      ],
      [
        "Subcutaneous unfractionated heparin twice daily combined with daily low-dose aspirin 81 mg",
        "Subcutaneous UFH is cumbersome, carries high risk of heparin-induced thrombocytopenia, and is inferior to LMWH or DOACs for cancer-associated thrombosis."
      ],
      [
        "Placement of an inferior vena cava (IVC) filter and withholding all pharmacologic anticoagulation",
        "IVC filters are reserved strictly for patients with absolute contraindications to anticoagulation (active major bleeding); they do not treat underlying thrombosis."
      ],
      [
        "Oral dabigatran monotherapy without any preceding parenteral anticoagulation lead-in period",
        "Dabigatran requires a mandatory 5-10 day parenteral anticoagulation lead-in before oral administration and is not preferred in cancer-associated thrombosis."
      ]
    ],
    "shortestValidSolution": "Pancreatic cancer + acute DVT (no GI mucosal lesion) = Cancer-associated thrombosis -> Oral factor Xa inhibitor (Apixaban) or LMWH.",
    "necessaryInference": "Select guideline-directed therapy for cancer-associated thrombosis (oral Xa inhibitor or LMWH) and evaluate luminal bleeding risks.",
    "strongestDistractor": "Oral warfarin monotherapy with target INR 2.0 to 3.0 because oral vitamin K antagonists are superior to LMWH in malignancy",
    "distractorExclusion": "Warfarin was proven inferior to LMWH and DOACs in cancer-associated thrombosis (CLOT trial) due to higher recurrence rates and unpredictable kinetics.",
    "citation": "Agnelli G, Becattini C, Meyer G, et al. Apixaban for the treatment of venous thromboembolism in patients with cancer. N Engl J Med. 2020;382(17):1599-1607. PMID: 32223112.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology-oncology item testing first-line anticoagulation selection in cancer-associated thrombosis based on recent guideline trials.",
      "distractorExclusionNotes": "Distractors feature outdated inferior warfarin, improper IVC filter placement without bleeding, cumbersome subcutaneous UFH, and unlead-in dabigatran.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0619",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Myelodysplastic Syndrome Isolated del(5q) Lenalidomide",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old woman presents to her hematologist with profound fatigue and dyspnea on exertion. She has required packed red blood cell transfusions every 3 weeks over the past 6 months to maintain a hemoglobin above 7.5 g/dL. Physical examination reveals conjunctival pallor and no hepatosplenomegaly or lymphadenopathy. Laboratory studies show: hemoglobin 7.2 g/dL, MCV 106 fL, white blood cell count 4,800/microL with normal differential, and platelet count 340,000/microL (normal to elevated). Serum ferritin is 820 ng/mL, serum erythropoietin is 650 mU/mL, and vitamin B12 and folate levels are normal. Bone marrow biopsy reveals hypercellularity with prominent erythroid hypoplasia and numerous hypolobated micromegakaryocytes ('mononuclear megakaryocytes'). Myeloblasts constitute 2% of total nucleated cells. Cytogenetic analysis demonstrates an isolated deletion of the long arm of chromosome 5, del(5q)(q13q33). Which of the following pharmacologic agents is the most appropriate targeted therapy to achieve transfusion independence for this patient?",
    "choices": [
      [
        "Oral lenalidomide to induce ubiquitination of casein kinase 1A1 (CK1alpha) and stimulate erythropoiesis",
        "This patient has MYELODYSPLASTIC SYNDROME (MDS) WITH ISOLATED del(5q). The 5q- syndrome is a distinct MDS subtype characterized by: female predominance, refractory macrocytic anemia, normal or elevated platelet count, hypolobated micromegakaryocytes, low blast percentage (<5%), and an isolated deletion of chromosome 5q. LENALIDOMIDE is an immunomodulatory agent that specifically targets the haploinsufficient CSNK1A1 gene located on 5q. Lenalidomide binds CRBN (cereblon) E3 ubiquitin ligase, directing the degradation of casein kinase 1A1 (CK1alpha), which induces selective apoptosis of the malignant 5q- clone while sparing normal stem cells. In clinical trials, lenalidomide achieved transfusion independence in >65% of patients and complete cytogenetic remission in >50%."
      ],
      [
        "Subcutaneous recombinant human erythropoietin (EPO) combined with filgrastim (G-CSF)",
        "Erythropoiesis-stimulating agents are ineffective in patients with high endogenous serum erythropoietin levels (> 500 mU/mL) and do not target the 5q- clone."
      ],
      [
        "Intravenous azacitidine hypomethylating chemotherapy targeting DNA methyltransferase",
        "Hypomethylating agents (azacitidine, decitabine) are indicated for higher-risk MDS or when lenalidomide fails; lenalidomide is the specific first-line therapy for isolated del(5q)."
      ],
      [
        "Oral imatinib mesylate targeting the BCR-ABL1 receptor tyrosine kinase",
        "Imatinib targets BCR-ABL1 in chronic myeloid leukemia or PDGFR in hypereosinophilic syndrome, having zero efficacy in del(5q) myelodysplastic syndrome."
      ],
      [
        "High-dose intravenous methylprednisolone pulse therapy combined with cyclosporine A",
        "Immunosuppressive therapy with antithymocyte globulin or cyclosporine is reserved for hypoplastic MDS in younger patients, not isolated del(5q) MDS."
      ]
    ],
    "shortestValidSolution": "Macrocytic anemia + normal platelets + hypolobated megakaryocytes + isolated del(5q) = 5q- MDS -> Lenalidomide.",
    "necessaryInference": "Recognize the 5q- syndrome clinical phenotype (normal/elevated platelets, micromegakaryocytes) and identify lenalidomide as the targeted first-line agent.",
    "strongestDistractor": "Subcutaneous recombinant human erythropoietin (EPO) combined with filgrastim (G-CSF)",
    "distractorExclusion": "Endogenous EPO > 500 mU/mL predicts virtual non-response to exogenous erythropoietin; lenalidomide is the targeted therapy of choice for del(5q).",
    "citation": "List A, Dewald G, Bennett J, et al. Lenalidomide in the myelodysplastic syndrome with chromosome 5q deletion. N Engl J Med. 2006;355(14):1456-1465. PMID: 17021321.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing recognition of isolated del(5q) myelodysplastic syndrome and its targeted molecular therapy (lenalidomide).",
      "distractorExclusionNotes": "Distractors feature ineffective recombinant EPO in high baseline states, higher-risk hypomethylating agents, TKIs, and generalized immunosuppression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0620",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Promyelocytic Leukemia Emergent All-Trans Retinoic Acid",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old previously healthy woman presents to the emergency department with severe fatigue, spontaneous gingival bleeding, epistaxis, and widespread bruising over the past 4 days. Temperature is 38.1 C (100.6 F), blood pressure 110/68 mm Hg, pulse 102/min, and respirations 18/min. Physical examination reveals extensive petechiae and ecchymoses on her extremities and trunk. Laboratory evaluation demonstrates: hemoglobin 7.4 g/dL, platelet count 18,000/microL, white blood cell count 3,200/microL, prothrombin time (PT) 21.0 seconds (INR 1.9), activated partial thromboplastin time (aPTT) 44 seconds, fibrinogen 85 mg/dL (markedly decreased), and D-dimer > 10,000 ng/mL FEU. Peripheral blood smear reveals numerous abnormal promyelocytes with folded or bilobed nuclei and cytoplasm packed with coarse azurophilic granules, including cells containing multiple clustered Auer rods ('faggot cells'). Which of the following is the most appropriate immediate intervention?",
    "choices": [
      [
        "Initiate oral all-trans retinoic acid (ATRA) immediately without awaiting confirmatory cytogenetic results",
        "This patient presents with ACUTE PROMYELOCYTIC LEUKEMIA (APL, AML M3 subtype), a hematologic emergency characterized by the t(15;17)(q24;q21) chromosomal translocation that fuses the PML gene to the RARA (retinoic acid receptor alpha) gene. This hybrid PML-RARA protein blocks myeloid differentiation at the promyelocyte stage. Primary morbidity is driven by SEVERE CONSUMPTIVE COAGULOPATHY AND HYPERFIBRINOLYSIS (DIC triggered by annexin II and tissue factor on promyelocytic granules), causing fatal intracranial or pulmonary hemorrhage. The MOST CRITICAL ACTION is the IMMEDIATE INITIATION OF ALL-TRANS RETINOIC ACID (ATRA / tretinoin) upon morphologic suspicion, WITHOUT DELAYING for cytogenetic or FISH confirmation. ATRA binds PML-RARA, inducing terminal differentiation of promyelocytes into mature granulocytes, rapidly reversing the coagulopathy within 24-48 hours. Combined with ARSENIC TRIOXIDE (ATO), ATRA achieves cure rates >90%."
      ],
      [
        "Withhold pharmacologic therapy until reverse transcriptase-PCR confirms the PML-RARA fusion transcript",
        "Delaying ATRA therapy while waiting for cytogenetics or molecular confirmation results in catastrophic early hemorrhagic death from fulminant DIC."
      ],
      [
        "Administer high-dose cytarabine and daunorubicin (7+3 regimen) as the sole initial pharmacotherapy",
        "Cytotoxic chemotherapy without ATRA lyses promyelocytes, dumping granules into circulation and worsening fatal consumptive DIC."
      ],
      [
        "Perform therapeutic leukapheresis immediately to clear circulating abnormal promyelocytes",
        "Leukapheresis in APL mechanical shears promyelocytes, precipitating massive procoagulant release and worsening fatal hemorrhage; it is contraindicated."
      ],
      [
        "Infuse recombinant factor VIIa and tranexamic acid without initiating differentiating agents",
        "Procoagulants and antifibrinolytics do not stop the underlying neoplastic driving clone and carry high risks of catastrophic thrombosis without ATRA."
      ]
    ],
    "shortestValidSolution": "Auer rod faggot cells + DIC (low fibrinogen, high PT/aPTT) = Acute promyelocytic leukemia -> Immediate oral ATRA (no delay).",
    "necessaryInference": "Recognize APL morphology and coagulopathy, selecting immediate ATRA differentiation therapy prior to cytogenetic confirmation.",
    "strongestDistractor": "Withhold pharmacologic therapy until reverse transcriptase-PCR confirms the PML-RARA fusion transcript",
    "distractorExclusion": "Awaiting molecular confirmation before initiating ATRA carries unacceptable early mortality from acute fatal intracranial hemorrhage.",
    "citation": "Sanz MA, Fenaux P, Tallman MS, et al. Management of acute promyelocytic leukemia: updated recommendations from an expert panel of the European LeukemiaNet. Blood. 2019;133(15):1630-1643. PMID: 30803991.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology emergency item testing rapid diagnosis of APL and urgent non-delayed administration of ATRA.",
      "distractorExclusionNotes": "Distractors feature fatal procedural delays awaiting cytogenetics, dangerous leukapheresis, cytotoxic lysis without differentiation, and isolated hemostatics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0621",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Chronic Myeloid Leukemia Blast Crisis Management",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with a 4-year history of chronic myeloid leukemia (CML), who has been inconsistently taking imatinib 400 mg daily, presents with acute fatigue, night sweats, bone pain, and epistaxis. Physical examination reveals massive splenomegaly extending into the pelvis and petechiae over the lower extremities. Complete blood count demonstrates: hemoglobin 8.1 g/dL, platelet count 42,000/microL, and white blood cell count 88,000/microL. Peripheral blood smear and bone marrow aspirate show 28% myeloblasts with prominent nucleoli and Auer rods. Cytogenetic analysis confirms the persistence of t(9;22)(q34;q11) resulting in BCR-ABL1, along with a secondary T315I kinase domain mutation. Which of the following represents the most appropriate immediate medical strategy and definitive curative pathway?",
    "choices": [
      [
        "Initiate a third-generation tyrosine kinase inhibitor such as ponatinib followed by allogeneic hematopoietic stem cell transplantation",
        "This patient with CML has progressed from chronic phase to BLAST CRISIS (defined by >=20% blasts in peripheral blood or bone marrow, or extramedullary blast proliferation). The presence of the T315I 'gatekeeper' mutation confers complete resistance to first-generation (imatinib) and second-generation (dasatinib, nilotinib, bosutinib) tyrosine kinase inhibitors (TKIs) because the bulky isoleucine residue sterically hinders inhibitor binding in the ATP-binding pocket. PONATINIB is a third-generation synthetic TKI specifically designed with a carbon-carbon triple bond (ethynyl linker) that bypasses the steric hindrance imposed by the T315I mutation. Because blast crisis carries a dismal prognosis with TKI therapy alone, ponatinib (or asciminib / combination chemotherapy) is used to achieve remissions as a bridge to ALLOGENEIC HEMATOPOIETIC STEM CELL TRANSPLANTATION, which remains the only potentially curative treatment."
      ],
      [
        "Increase the dosage of imatinib to 800 mg daily and schedule elective autologous stem cell harvest",
        "Imatinib dose escalation is completely ineffective against the T315I gatekeeper mutation; autologous transplantation re-infuses malignant leukemic cells."
      ],
      [
        "Switch to second-generation dasatinib monotherapy with outpatient follow-up in 3 months",
        "Dasatinib is inactive against the T315I mutation; blast crisis has an average survival of <6 months without aggressive inpatient bridging to allogeneic transplant."
      ],
      [
        "Administer oral hydroxyurea monotherapy to maintain total white blood cell count under 20,000/microL",
        "Hydroxyurea is a palliative cytoreductive agent that does not alter clonal evolution, eliminate blast proliferation, or overcome T315I resistance."
      ],
      [
        "Perform urgent splenectomy to reduce mechanical tumor burden prior to re-initiating imatinib",
        "Splenectomy in CML blast crisis carries high surgical mortality and does not treat marrow leukemia or overcome the underlying molecular mutation."
      ]
    ],
    "shortestValidSolution": "CML + 28% blasts (blast crisis) + T315I mutation = TKI-resistant blast crisis -> 3rd-gen TKI (Ponatinib) + Allogeneic stem cell transplant.",
    "necessaryInference": "Identify CML blast crisis and recognize that T315I confers resistance to 1st/2nd-gen TKIs, requiring ponatinib bridged to allogeneic transplantation.",
    "strongestDistractor": "Switch to second-generation dasatinib monotherapy with outpatient follow-up in 3 months",
    "distractorExclusion": "Dasatinib is inactive against the T315I gatekeeper mutation; ponatinib is the only approved TKI specifically designed to inhibit T315I.",
    "citation": "Cortes JE, Kim DW, Pinilla-Ibarz J, et al. Ponatinib efficacy and safety in Philadelphia chromosome-positive leukemia: final 5-year results of the phase 2 PACE trial. Blood. 2018;132(4):393-404. PMID: 29567798.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing recognition of CML blast crisis, molecular genetics of the T315I gatekeeper mutation, and ponatinib allogeneic transplant bridge.",
      "distractorExclusionNotes": "Distractors feature ineffective dose escalation of imatinib, resistant 2nd-gen TKIs (dasatinib), palliative hydroxyurea, and ineffective splenectomy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0622",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "CAR-T Cytokine Release Syndrome Tocilizumab Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with relapsed/refractory diffuse large B-cell lymphoma is admitted to the cellular therapy unit 5 days after receiving an infusion of autologous CD19-directed chimeric antigen receptor (CAR) T cells (axicabtagene ciloleucel). He develops acute shaking chills, high fever, dyspnea, and lightheadedness. Temperature is 39.6 C (103.3 F), blood pressure is 82/48 mm Hg, pulse is 124/min, and respirations are 26/min. Pulse oximetry shows 88% on room air, improving to 93% on 6 L/min via nasal cannula. Physical examination shows warm, flushed skin and bilateral basal lung crackles. Extensive blood, urine, and sputum cultures are drawn, and empiric broad-spectrum cefepime and vancomycin are started. Despite receiving 3 liters of intravenous isotonic crystalloid, his blood pressure remains 84/50 mm Hg, necessitating the initiation of a norepinephrine infusion. Laboratory evaluation reveals: serum ferritin 18,400 ng/mL, C-reactive protein 240 mg/L, and interleukin-6 (IL-6) markedly elevated. Which of the following is the most appropriate targeted therapy to administer immediately?",
    "choices": [
      [
        "Intravenous tocilizumab (interleukin-6 receptor antagonist) combined with intravenous dexamethasone",
        "This patient presents with SEVERE CYTOKINE RELEASE SYNDROME (CRS, Grade 3/4), the most frequent and life-threatening toxicity of CHIMERIC ANTIGEN RECEPTOR (CAR) T-CELL THERAPY. CRS results from massive hyperactivation of infused CAR-T cells and bystander host macrophages, leading to torrential release of pro-inflammatory cytokines, predominantly INTERLEUKIN-6 (IL-6), interferon-gamma, and TNF-alpha. Severe CRS manifests with high fever, vasodilatory shock requiring vasopressors, capillary leak, and severe hypoxia. The definitive, FDA-approved targeted treatment is TOCILIZUMAB, a humanized monoclonal antibody that binds to both soluble and membrane-bound INTERLEUKIN-6 RECEPTORS (IL-6R), terminating IL-6 signaling. For grade >=2 CRS with hemodynamic instability refractory to fluids (requiring vasopressors) or severe hypoxemia, TOCILIZUMAB IS COMBINED WITH HIGH-DOSE SYSTEMIC CORTICOSTEROIDS (e.g., intravenous dexamethasone 10 mg q6h)."
      ],
      [
        "High-dose intravenous immunoglobulin (IVIG) combined with subcutaneous filgrastim",
        "IVIG does not neutralize IL-6 receptor signaling, and G-CSF stimulates myeloid cells and can exacerbate cytokine storm."
      ],
      [
        "Therapeutic plasmapheresis to clear circulating chimeric antigen receptor T cells",
        "Plasmapheresis mechanically clears antibodies, not the cellular immune response, and destroys the therapeutic CAR-T cells without blocking cytokine receptors."
      ],
      [
        "Intravenous infliximab (anti-TNF-alpha) monotherapy without administering glucocorticoids",
        "Infliximab targets TNF-alpha, which is not the primary driver of CAR-T CRS; tocilizumab (targeting IL-6R) is the proven first-line agent."
      ],
      [
        "Intravenous cyclophosphamide pulse chemotherapy to eliminate donor-derived CAR-T lymphocytes",
        "Cytotoxic chemotherapy induces severe neutropenic sepsis and organ failure; cytokine blockade with tocilizumab safely reverses CRS while preserving CAR-T efficacy."
      ]
    ],
    "shortestValidSolution": "CAR-T cell therapy + fever + hypotension requiring norepinephrine + high IL-6 = Severe CRS -> IV Tocilizumab (IL-6R antagonist) + Dexamethasone.",
    "necessaryInference": "Recognize high-grade cytokine release syndrome following CAR-T therapy and select the specific IL-6 receptor antagonist tocilizumab.",
    "strongestDistractor": "Intravenous infliximab (anti-TNF-alpha) monotherapy without administering glucocorticoids",
    "distractorExclusion": "IL-6 is the central effector of CAR-T CRS; IL-6 receptor blockade with tocilizumab is guideline-directed, whereas anti-TNF-alpha agents are ineffective.",
    "citation": "Neelapu SS, Tummala S, Kebriaei P, et al. Chimeric antigen receptor T-cell therapy - assessment and management of toxicities. Nat Rev Clin Oncol. 2018;15(1):47-62. PMID: 28925994.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK medical oncology emergency item testing recognition of severe CAR-T cytokine release syndrome and targeted IL-6 receptor blockade.",
      "distractorExclusionNotes": "Distractors feature non-targeted IVIG, plasmapheresis, off-target TNF inhibitors, and marrow-toxic cytotoxic immunosuppression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0623",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Immune Checkpoint Inhibitor Myocarditis High-Dose Corticosteroids",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman with metastatic melanoma who received her second cycle of combination nivolumab (anti-PD-1) and ipilimumab (anti-CTLA-4) 12 days ago presents with progressive dyspnea, orthopnea, chest tightness, and lightheadedness for 2 days. Physical examination shows elevated jugular venous pressure to the angle of the jaw, bilateral lung crackles, and an S3 gallop. Blood pressure is 94/62 mm Hg, pulse is 48/min, and respirations are 22/min. ECG demonstrates complete (third-degree) atrioventricular block with a ventricular escape rate of 46/min. High-sensitivity cardiac troponin I is markedly elevated at 4.82 ng/mL (normal < 0.04 ng/mL), and serum creatine kinase (CK) is 1,240 U/L. Urgent bedside echocardiography demonstrates a newly depressed left ventricular ejection fraction of 35% with global hypokinesis. Urgent coronary angiography reveals normal, non-obstructive coronary arteries. Which of the following is the most appropriate immediate medical pharmacotherapy?",
    "choices": [
      [
        "Administer high-dose intravenous methylprednisolone (1,000 mg daily) immediately upon clinical suspicion",
        "This patient presents with IMMUNE CHECKPOINT INHIBITOR (ICI) MYOCARDITIS, a rare but fulminant and life-threatening immune-related adverse event (irAE) associated with CTLA-4 and PD-1/PD-L1 inhibitors (especially combination ipilimumab + nivolumab). ICI myocarditis typically presents within 2-6 weeks of initiation with acute heart failure, high-grade conduction abnormalities (complete heart block, ventricular arrhythmias), cardiogenic shock, and concomitantly elevated troponin and CK (often accompanied by myositis). Coronary angiography is normal. The American Society of Clinical Oncology (ASCO) and National Comprehensive Cancer Network (NCCN) guidelines mandate IMMEDIATE PERMANENT DISCONTINUATION OF ICIs and the IMMEDIATE ADMINISTRATION OF HIGH-DOSE INTRAVENOUS GLUCOCORTICOIDS (intravenous methylprednisolone 1,000 mg/day for 3-5 days). Treatment must NOT be delayed for cardiac MRI or endomyocardial biopsy, as early steroid administration dramatically reduces mortality (from >50% to <15%). Temporary pacing is required for complete heart block."
      ],
      [
        "Administer intravenous digoxin loading dose combined with oral carvedilol 25 mg twice daily",
        "Beta-blockers and digoxin are contraindicated in complete atrioventricular block and cardiogenic shock, and do not treat T-cell-mediated myocardial necrosis."
      ],
      [
        "Initiate oral therapeutic rivaroxaban and schedule outpatient cardiac MRI in 2 to 3 weeks",
        "ICI myocarditis is a hyperacute medical emergency with high early arrhythmic mortality; outpatient imaging delays lead to refractory cardiogenic arrest."
      ],
      [
        "Administer intravenous acyclovir and broad-spectrum antibiotics for suspected infectious viral myocarditis",
        "The acute temporal onset after combination checkpoint blockade (nivolumab + ipilimumab) with elevated CK indicates autoimmune T-cell infiltration, not viral myocarditis."
      ],
      [
        "Perform emergent total surgical pericardiectomy for suspected constrictive hemodynamic physiology",
        "This patient has diffuse myocardial pump failure and conduction necrosis, not chronic fibrotic pericardial constriction; surgery is contraindicated."
      ]
    ],
    "shortestValidSolution": "Nivolumab/Ipilimumab + complete heart block + troponin 4.82 + clean coronaries = ICI myocarditis -> Immediate IV Methylprednisolone 1000 mg/day.",
    "necessaryInference": "Recognize checkpoint inhibitor myocarditis (conduction block + troponin elevation + myositis) and initiate immediate pulse-dose steroids.",
    "strongestDistractor": "Administer intravenous digoxin loading dose combined with oral carvedilol 25 mg twice daily",
    "distractorExclusion": "Carvedilol and digoxin worsen complete AV block and hemodynamic collapse; high-dose pulse methylprednisolone is required to halt autoimmune myocardial destruction.",
    "citation": "Brahmer JR, Lacchetti C, Schneider BJ, et al. Management of immune-related adverse events in patients treated with immune checkpoint inhibitor therapy: ASCO Clinical Practice Guideline. J Clin Oncol. 2018;36(17):1714-1768. PMID: 29442540.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK cardio-oncology emergency item testing recognition of checkpoint inhibitor-induced myocarditis and emergency pulse methylprednisolone.",
      "distractorExclusionNotes": "Distractors feature contraindicated AV nodal blockers (carvedilol/digoxin), delayed outpatient imaging, empiric antiviral therapy, and surgical pericardiectomy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0624",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Sickle Cell Acute Chest Syndrome Initial Medical Regimen",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old woman with homozygous sickle cell disease (HbSS) is admitted to the medical ward for an acute vaso-occlusive crisis involving her hips and lower back. Twelve hours after admission, she develops acute shortness of breath, right-sided pleuritic chest pain, and a dry cough. Temperature is 38.6 C (101.5 F), blood pressure 114/70 mm Hg, pulse 108/min, and respirations 24/min. Pulse oximetry shows 94% on ambient room air. Physical examination reveals crackles at the right lung base. Chest radiography demonstrates a new alveolar opacity in the right lower lobe that was not present on admission imaging. Complete blood count shows: hemoglobin 8.4 g/dL (baseline 8.8 g/dL), white blood cell count 14,800/microL with 78% neutrophils, and reticulocyte count 11.4%. In addition to intravenous analgesia and cautious hydration, which of the following is the most appropriate next step in medical management?",
    "choices": [
      [
        "Initiate empiric intravenous ceftriaxone plus oral azithromycin, and enforce hourly incentive spirometry",
        "This patient has developed ACUTE CHEST SYNDROME (ACS), defined by a NEW PULMONARY INFILTRATE on chest radiography in a patient with sickle cell disease combined with fever, respiratory symptoms (chest pain, cough, dyspnea), or hypoxemia. ACS is multifactorial, caused by a vicious cycle of pulmonary microvascular sickling/infarction, fat embolism from necrotic marrow, and INFECTION (atypical pathogens such as Mycoplasma pneumoniae and Chlamydia pneumoniae, as well as Streptococcus pneumoniae). Standard initial management includes: (1) BROAD-SPECTRUM EMPIRIC ANTIMICROBIALS covering both typical and atypical pathogens: a third-generation cephalosporin (e.g., intravenous CEFTRIAXONE) PLUS a macrolide (e.g., AZITHROMYCIN) or respiratory fluoroquinolone; (2) INCENTIVE SPIROMETRY (at least 10 breaths every 2 hours while awake), which has been proven in randomized trials to prevent atelectasis and reduce the incidence of ACS progression by 50%; and (3) Judicious hydration (avoiding pulmonary edema). Transfusion is not immediately required because she is not severely hypoxemic (SpO2 94% on room air) and Hb is near baseline."
      ],
      [
        "Perform emergent total red blood cell exchange transfusion within 2 hours of symptom onset",
        "Exchange transfusion is reserved for severe ACS (PaO2 < 60 mm Hg, multi-lobar infiltrates, altered mental status); this patient is mildly symptomatic with SpO2 94% and single-lobe infiltrate."
      ],
      [
        "Initiate oral ciprofloxacin monotherapy and discharge with home supplemental oxygen concentrator",
        "ACS carries significant mortality and unpredictable rapid deterioration; hospital admission with IV cephalosporin and macrolide is mandatory."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus to resolve the alveolar opacity",
        "The opacity represents sickling, ischemia, or infection rather than cardiogenic pulmonary edema; aggressive diuresis causes hemoconcentration and precipitates further sickling."
      ],
      [
        "Prescribe oral hydroxyurea dose escalation from 15 mg/kg to 35 mg/kg daily for acute resolution",
        "Hydroxyurea increases fetal hemoglobin over months and is used for long-term crisis prevention; it has zero efficacy for acute active chest syndrome."
      ]
    ],
    "shortestValidSolution": "Sickle cell + new pulmonary infiltrate + fever + SpO2 94% = Non-severe ACS -> IV Ceftriaxone + Azithromycin + Incentive spirometry.",
    "necessaryInference": "Select comprehensive initial management for acute chest syndrome (antimicrobials covering typical/atypical pathogens + incentive spirometry) while avoiding premature exchange transfusion.",
    "strongestDistractor": "Perform emergent total red blood cell exchange transfusion within 2 hours of symptom onset",
    "distractorExclusion": "Exchange transfusion is indicated for severe or progressing ACS (hypoxemia PaO2 < 60 mm Hg or SpO2 < 90%); mild cases are managed medically with antibiotics and incentive spirometry.",
    "citation": "Howard J, Hart N, Roberts-Harewood M, et al. Guideline on the management of acute chest syndrome in sickle cell disease. Br J Haematol. 2015;169(4):492-505. PMID: 25777470.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology item testing standard multi-modal initial therapy for non-severe acute chest syndrome in sickle cell disease.",
      "distractorExclusionNotes": "Distractors feature premature emergent exchange transfusion in non-hypoxemic patients, unsafe outpatient discharge, hemoconcentrating loop diuresis, and chronic hydroxyurea.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0625",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Hyperleukocytosis and Leukostasis in Acute Myeloid Leukemia",
    "provisionalDifficulty": 5,
    "stem": "A 53-year-old man presents to the emergency department with progressive confusion, severe headache, blurry vision, and shortness of breath over the past 24 hours. Physical examination shows somnolence, tachypnea, scattered petechiae, and bilateral retinal hemorrhages on funduscopic examination. Vital signs: temperature 38.3 C (101.0 F), blood pressure 136/82 mm Hg, pulse 112/min, and respirations 26/min. Pulse oximetry demonstrates oxygen saturation of 87% on room air. Complete blood count reveals: hemoglobin 6.9 g/dL, platelet count 24,000/microL, and white blood cell count 142,000/microL with 82% circulating myeloblasts. Serum uric acid is 11.2 mg/dL, and serum creatinine is 2.2 mg/dL. Which of the following is the most appropriate initial medical management?",
    "choices": [
      [
        "Initiate aggressive intravenous hydration, administer oral hydroxyurea for cytoreduction, and strictly avoid red blood cell transfusions",
        "This patient presents with HYPERLEUKOCYTOSIS complicated by SYMPTOMATIC LEUKOSTASIS, a medical emergency seen most commonly in acute myeloid leukemia (AML). Leukostasis occurs when the circulating blast count exceeds 50,000-100,000/microL. Unlike mature lymphocytes, myeloblasts are large, rigid cells with sticky surface adhesion molecules that plug microvessels, leading to tissue hypoperfusion and endothelial damage. The two primary clinical targets are the CENTRAL NERVOUS SYSTEM (headache, confusion, visual blurring, stroke, intracranial hemorrhage) and the RESPIRATORY SYSTEM (dyspnea, hypoxemia, diffuse alveolar hemorrhage). Initial management requires: (1) AGGRESSIVE INTRAVENOUS HYDRATION and tumor lysis syndrome prophylaxis (rasburicase); (2) URGENT CYTOREDUCTION using high-dose oral HYDROXYUREA (or emergent induction chemotherapy / leukapheresis); and (3) STRICT AVOIDANCE OF PACKED RED BLOOD CELL (PRBC) TRANSFUSIONS, even in the presence of severe anemia. Transfusing erythrocytes sharply increases blood viscosity and precipitates fatal microvascular sludging and intracranial infarction."
      ],
      [
        "Administer three units of packed red blood cells immediately to correct symptomatic tissue hypoxia",
        "Packed red blood cell transfusions are strictly contraindicated in active leukostasis because raising hematocrit increases whole blood viscosity, triggering fatal microvascular occlusion."
      ],
      [
        "Perform emergent therapeutic phlebotomy to remove 500 mL of whole blood",
        "Phlebotomy is indicated for erythrocytosis in polycythemia vera, but removing whole blood in a patient with severe anemia (Hb 6.9 g/dL) causes acute hypovolemic and ischemic collapse."
      ],
      [
        "Initiate high-dose intravenous heparin infusion to prevent microvascular thrombosis",
        "Systemic anticoagulation in leukostasis with thrombocytopenia (platelets 24,000/microL) and endothelial injury dramatically precipitates fatal intracranial hemorrhage."
      ],
      [
        "Administer intravenous desmopressin and schedule urgent radiation therapy to the neuroaxis",
        "Desmopressin and cranial radiation do not address intravascular blast sludging and carry high risks of worsening cerebral edema and thrombosis."
      ]
    ],
    "shortestValidSolution": "AML + WBC 142,000 + confusion + dyspnea = Leukostasis -> IV Hydration + Hydroxyurea cytoreduction; AVOID red blood cell transfusion.",
    "necessaryInference": "Recognize AML leukostasis syndrome, select emergency cytoreduction, and avoid red blood cell transfusion which increases blood viscosity.",
    "strongestDistractor": "Administer three units of packed red blood cells immediately to correct symptomatic tissue hypoxia",
    "distractorExclusion": "Transfusing red blood cells in acute leukostasis dramatically increases whole blood viscosity, triggering fatal cerebrovascular occlusion or pulmonary infarction.",
    "citation": "Ganzel C, Becker J, Mintz PD, et al. Hyperleukocytosis, leukostasis and leukapheresis: practice management. Blood Rev. 2012;26(3):117-122. PMID: 22365440.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK hematology-oncology emergency item testing recognition of hyperleukocytosis/leukostasis and the contraindication to red blood cell transfusion.",
      "distractorExclusionNotes": "Distractors feature fatal PRBC transfusion increasing viscosity, dangerous phlebotomy worsening severe anemia, heparin-induced hemorrhage, and cranial irradiation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
