import { CandidateSpec } from './types';

export const step2Batch41: CandidateSpec[] = [
  {
    "code": "op-c-s2-1001",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Stanford Type A Aortic Dissection Emergency Open Surgical Repair",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents to the emergency department with sudden-onset, severe, 'tearing' substernal chest pain radiating directly between his shoulder blades. Vital signs: blood pressure 184/104 mm Hg in the right arm and 142/86 mm Hg in the left arm, heart rate 94/min. Physical examination reveals an early diastolic decrescendo murmur at the right sternal border and clear breath sounds bilaterally. Electrocardiogram reveals sinus tachycardia and non-specific ST-T wave changes without acute ST-segment elevation. Contrast-enhanced computed tomography (CT) angiography of the chest demonstrates an intimal flap extending from the aortic root 1.5 cm above the aortic valve into the proximal ascending thoracic aorta, with a small associated pericardial effusion. Which of the following is the most appropriate definitive management strategy for this patient?",
    "choices": [
      [
        "Immediate intravenous beta-blocker therapy followed by emergency open surgical repair",
        "Acute thoracic aortic dissection is classified using the Stanford system: TYPE A involves the ascending aorta (proximal to the brachiocephalic artery) regardless of entry site, whereas TYPE B is restricted to the descending aorta distal to the left subclavian artery. Stanford Type A dissection is a catastrophic surgical emergency with an untreated mortality rate of 1-2% per hour due to fatal complications including aortic rupture, hemopericardium with cardiac tamponade, acute severe aortic regurgitation, and coronary or cerebral malperfusion. Definitive management mandates IMMEDIATE EMERGENCY OPEN SURGICAL REPAIR (resection of the intimal tear, replacement of the ascending aorta with a synthetic graft, and aortic valve suspension or replacement). Preoperative medical management focuses on ANTIIIMPULSE THERAPY using IV beta-blockers (e.g., esmolol or labetalol) to reduce heart rate (<60/min) and shear stress (dP/dt), followed by vasodilators (e.g., clevidipine, nitroprusside) to lower systolic blood pressure to 100-120 mm Hg."
      ],
      [
        "Exclusive medical therapy in the intensive care unit with intravenous labetalol and nitroprusside",
        "Medical management alone is indicated for uncomplicated Stanford Type B dissections; for Type A dissections, medical therapy alone carries a 30-day mortality approaching 50%."
      ],
      [
        "Elective thoracic endovascular aortic repair (TEVAR) after 48 hours of medical stabilization",
        "TEVAR is the treatment of choice for complicated Type B aortic dissection, but open surgical sternotomy is standard of care for ascending Type A dissection."
      ],
      [
        "Immediate therapeutic anticoagulation with intravenous unfractionated heparin",
        "Anticoagulation is strictly contraindicated in acute aortic dissection because it accelerates intramural hematoma propagation, fatal hemopericardium, and exsanguination."
      ],
      [
        "Pericardiocentesis under echocardiographic guidance to evacuate the pericardial effusion",
        "Pericardiocentesis in Type A dissection can decompress intrapericardial pressure, re-initiating torrential pressurized hemorrhage into the pericardial space and precipitating death."
      ]
    ],
    "shortestValidSolution": "Tearing chest pain + BP differential + ascending aortic intimal flap (Type A) = IV beta-blocker + emergency open surgical repair.",
    "necessaryInference": "Differentiate Stanford Type A (involving ascending aorta) from Type B: Type A requires immediate surgical repair to prevent tamponade, while Type B is managed medically.",
    "strongestDistractor": "Exclusive medical therapy in the intensive care unit with intravenous labetalol and nitroprusside",
    "distractorExclusion": "Medical therapy alone is appropriate for uncomplicated Type B dissections; Type A carries high hourly mortality from aortic rupture and requires emergency open surgery.",
    "citation": "Nienaber CA. Management of acute aortic dissection. Lancet. 2015 Feb 28. PMID: 25662791.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on stanford type a aortic dissection emergency open surgical repair.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1002",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Intermediate-High Risk Pulmonary Embolism Anticoagulation and Monitoring",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman presents to the emergency department with acute dyspnea and pleuritic chest pain 2 weeks after an elective total knee arthroplasty. Vital signs: blood pressure 128/82 mm Hg, heart rate 108/min, respiratory rate 26/min, and oxygen saturation 91% on room air. Physical examination reveals clear lungs and right lower-extremity swelling. Contrast CT pulmonary angiography demonstrates extensive bilateral filling defects within the main and lobar pulmonary arteries. Transthoracic echocardiogram demonstrates right ventricular hypokinesis with an RV-to-LV diameter ratio of 1.2 and flattening of the interventricular septum. Serum cardiac troponin I is elevated at 0.18 ng/mL (reference: <0.04 ng/mL), and plasma BNP is 450 pg/mL. She remains normotensive and alert. Which of the following is the most appropriate initial management?",
    "choices": [
      [
        "Immediate therapeutic anticoagulation with weight-based low-molecular-weight heparin and ICU admission",
        "This patient has an INTERMEDIATE-HIGH-RISK (SUBMASSIVE) PULMONARY EMBOLISM, defined by: (1) Hemodynamic stability (systolic blood pressure >= 90 mm Hg); (2) Evidence of RIGHT VENTRICULAR DYSFUNCTION on imaging (RV/LV diameter ratio > 0.9, McConnell sign); and (3) Evidence of MYOCARDIAL INJURY (elevated troponin or BNP). In hemodynamically stable intermediate-high-risk patients, initial therapy consists of IMMEDIATE THERAPEUTIC ANTICOAGULATION (with weight-based LMWH, fondaparinux, or unfractionated heparin) and ADMISSION TO AN INTERMEDIATE OR INTENSIVE CARE UNIT for frequent hemodynamic monitoring. Systemic thrombolysis is NOT indicated initially because bleeding risks (including hemorrhagic stroke) outweigh mortality benefits in normotensive patients. However, rescue reperfusion (systemic thrombolysis, catheter-directed thrombectomy, or surgical embolectomy) is immediately deployed if the patient develops overt hemodynamic collapse (hypotension, shock)."
      ],
      [
        "Immediate administration of systemic full-dose intravenous tissue plasminogen activator",
        "Full-dose systemic thrombolysis is indicated as first-line therapy only for high-risk (massive) PE with sustained hypotension (systolic BP <90 mm Hg); it causes excess major bleeding in normotensive patients."
      ],
      [
        "Emergency surgical pulmonary embolectomy under cardiopulmonary bypass",
        "Surgical embolectomy is reserved for patients with massive PE who have absolute contraindications to thrombolysis or failed catheter-directed therapies."
      ],
      [
        "Placement of an inferior vena cava (IVC) filter without systemic anticoagulation",
        "IVC filters are indicated only when therapeutic anticoagulation is absolutely contraindicated or when recurrent PE occurs despite documented therapeutic anticoagulation."
      ],
      [
        "Discharge home on oral rivaroxaban with outpatient cardiology follow-up in 48 hours",
        "Intermediate-high-risk PE patients carry significant 30-day early decompensation risks and require close inpatient hospital monitoring, not outpatient discharge."
      ]
    ],
    "shortestValidSolution": "PE + normotension + RV strain on echo + elevated troponin (intermediate-high risk) = Therapeutic anticoagulation + close ICU monitoring.",
    "necessaryInference": "Stratify pulmonary embolism: intermediate-high risk (normotensive with RV strain and troponin elevation) requires therapeutic anticoagulation and monitoring, reserving thrombolysis for hypotension.",
    "strongestDistractor": "Immediate administration of systemic full-dose intravenous tissue plasminogen activator",
    "distractorExclusion": "Systemic thrombolysis is reserved for massive (high-risk) PE with sustained shock or hypotension; in normotensive patients, bleeding risk exceeds benefit.",
    "citation": "AbuRahma ZT. Catheter Directed Mechanical Thrombectomy for Intermediate-Risk Acute Pulmonary Embolism: Clinical Outcomes From a Single Center Experience. Vasc Endovascular Surg. 2026 May. PMID: 41217492.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on intermediate-high risk pulmonary embolism anticoagulation and monitoring.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1003",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Fulminant Clostridioides difficile Colitis High-Dose Vancomycin and Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old man hospitalized for 10 days for healthcare-associated pneumonia treated with cefepime and levofloxacin develops sudden severe abdominal distension, watery diarrhea, and fever. Vital signs: temperature 39.1 C (102.4 F), blood pressure 82/50 mm Hg, heart rate 124/min. Physical examination reveals a lethargic man with a diffusely distended, tympanitic, severely tender abdomen with involuntary guarding and absent bowel sounds. Laboratory studies show: white blood cell count 38,000/uL with 20% bands, serum creatinine 2.8 mg/dL (baseline 1.0 mg/dL), and serum lactate 3.4 mmol/L. Stool PCR is positive for Clostridioides difficile toxin genes. An abdominal radiograph reveals colonic dilation with a cecal diameter of 9.5 cm and no pneumoperitoneum (toxic megacolon). In addition to fluid resuscitation, which of the following is the most appropriate management?",
    "choices": [
      [
        "High-dose oral/nasogastric vancomycin, intravenous metronidazole, and urgent surgical consultation",
        "This patient has FULMINANT CLOSTRIDIOIDES DIFFICILE INFECTION, defined by the presence of C. difficile colitis complicated by HYPOTENSION/SHOCK, ILEUS, or TOXIC MEGACOLON (colonic dilation > 6 cm with systemic toxicity), severe leukocytosis (WBC >= 30,000/uL), or elevated serum lactate (> 2.2 mmol/L). Recommended medical therapy for fulminant disease consists of: (1) HIGH-DOSE ORAL OR ENTERIC VANCOMYCIN (500 mg 4 times daily orally or via nasogastric tube); (2) If ileus is present, rectal retention enemas of vancomycin (500 mg in 100 mL saline every 6 hours); PLUS (3) INTRAVENOUS METRONIDAZOLE (500 mg every 8 hours) to ensure tissue penetration; and (4) URGENT SURGICAL CONSULTATION for consideration of subtotal colectomy with end ileostomy or diverting loop ileostomy with colonic vancomycin lavage before colonic perforation or irreversible shock supervenes."
      ],
      [
        "Standard-dose oral fidaxomicin 200 mg twice daily monotherapy for 10 days",
        "Fidaxomicin is effective for initial non-severe or severe C. difficile, but has not been established as first-line monotherapy for fulminant colitis with ileus and toxic megacolon."
      ],
      [
        "Immediate colonoscopy with fecal microbiota transplantation into the right colon",
        "Colonoscopy in the setting of acute toxic megacolon carries an unacceptable risk of mechanical colonic perforation and is strictly contraindicated."
      ],
      [
        "Intravenous vancomycin 15-20 mg/kg every 12 hours with loperamide for diarrhea control",
        "Intravenous vancomycin is not excreted into the intestinal lumen in therapeutic quantities and is ineffective for C. difficile; antimotility agents precipitate toxic megacolon."
      ],
      [
        "Oral metronidazole 500 mg three times daily as sole antimicrobial agent",
        "Oral metronidazole monotherapy has unacceptably high treatment failure rates and is no longer recommended for severe or fulminant C. difficile colitis."
      ]
    ],
    "shortestValidSolution": "C. diff + shock + toxic megacolon + WBC 38k = High-dose oral vancomycin + IV metronidazole + urgent surgical consultation.",
    "necessaryInference": "Recognize fulminant C. difficile colitis (toxic megacolon, shock, severe leukocytosis) and apply multimodal therapy: high-dose enteral vancomycin, IV metronidazole, and emergency surgical consult.",
    "strongestDistractor": "Standard-dose oral fidaxomicin 200 mg twice daily monotherapy for 10 days",
    "distractorExclusion": "Fidaxomicin is approved for non-fulminant colitis; fulminant disease with ileus mandates dual coverage with high-dose enteral vancomycin and IV metronidazole plus surgical evaluation.",
    "citation": "Pinz\u00f3n MA. Fecal Microbiota Transplantation as a Rescue Therapy for Refractory Clostridioides difficile Infection in a Patient With Lupus. Case Rep Infect Dis. 2026. PMID: 42813038.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on fulminant clostridioides difficile colitis high-dose vancomycin and surgery.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1004",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Hepatorenal Syndrome-AKI Diagnosis Vasoconstrictor Therapy Terlipressin",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with decompensated alcohol-associated cirrhosis and refractory ascites is admitted for worsening abdominal distension and jaundice. He was treated with furosemide and spironolactone at home. On admission, his serum creatinine is 2.4 mg/dL (baseline 0.9 mg/dL 1 month ago). Vital signs: blood pressure 96/60 mm Hg, heart rate 78/min. Physical examination reveals spider angiomas, prominent shifting dullness with a positive fluid wave, and mild flapping tremor. Urinalysis shows no protein, no blood, and 0-1 WBCs/hpf; urine sodium is 6 mEq/L, and fractional excretion of sodium is 0.2%. Furosemide and spironolactone are immediately discontinued. He is treated with intravenous 20% albumin at 1 g/kg/day for 48 consecutive hours. Repeat serum creatinine after 48 hours of volume challenge is 2.6 mg/dL, and urine output remains <20 mL/hour. Renal ultrasound shows normal-sized kidneys with no hydronephrosis or parenchymal abnormalities. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiation of vasoconstrictor therapy with terlipressin combined with intravenous albumin",
        "This patient meets the International Club of Ascites diagnostic criteria for HEPATORENAL SYNDROME-ACUTE KIDNEY INJURY (HRS-AKI): (1) Cirrhosis with ascites; (2) Doubling of serum creatinine to >= 1.5 mg/dL; (3) Lack of improvement in renal function (creatinine remaining elevated) after at least 48 HOURS OF DIURETIC WITHDRAWAL AND PLASMA VOLUME EXPANSION WITH ALBUMIN (1 g/kg/day); (4) Absence of shock; and (5) No current or recent exposure to nephrotoxic agents and absence of structural kidney disease (normal urinalysis, no proteinuria/hematuria, normal ultrasound). The pathophysiology is driven by profound splanchnic arterial vasodilation (mediated by portal hypertension and nitric oxide), resulting in extreme arterial underfilling and intense compensatory renal vasoconstriction. FIRST-LINE PHARMACOLOGIC THERAPY IS TERLIPRESSIN (a vasopressin V1 receptor agonist) COMBINED WITH IV ALBUMIN (or norepinephrine infusion plus albumin in ICU), which constricts the dilated splanchnic circulation and restores renal perfusion, bridging the patient to LIVER TRANSPLANTATION."
      ],
      [
        "Administration of high-dose intravenous furosemide infusion to overcome diuretic resistance",
        "Furosemide further depletes effective circulating volume and exacerbates severe renal vasoconstriction in hepatorenal syndrome."
      ],
      [
        "Immediate placement of an emergency transjugular intrahepatic portosystemic shunt (TIPS)",
        "TIPS can improve renal hemodynamics in selected stable cirrhotics, but is not the immediate first-line pharmacological treatment for acute progressive HRS-AKI and carries high hepatic encephalopathy risks."
      ],
      [
        "Initiation of broad-spectrum antibiotic therapy with intravenous vancomycin and piperacillin-tazobactam",
        "Empiric antibiotics are indicated for spontaneous bacterial peritonitis (SBP), but diagnostic paracentesis is required first; antibiotics without vasoconstrictors do not reverse HRS."
      ],
      [
        "Urgent initiation of chronic intermittent hemodialysis as sole definitive therapy",
        "Dialysis provides renal replacement for refractory acidosis, hyperkalemia, or volume overload, but does not correct splanchnic vasodilation and is not definitive therapy (liver transplant is)."
      ]
    ],
    "shortestValidSolution": "Decompensated cirrhosis + AKI unresponsive to 48h albumin volume expansion = HRS-AKI treated with terlipressin + IV albumin.",
    "necessaryInference": "Apply the diagnostic criteria of hepatorenal syndrome (lack of response to 48 hours of albumin challenge) and select targeted splanchnic vasoconstrictor therapy (terlipressin + albumin).",
    "strongestDistractor": "Administration of high-dose intravenous furosemide infusion to overcome diuretic resistance",
    "distractorExclusion": "Diuretics exacerbate intravascular volume depletion and worsen pre-existing renal ischemia; they must be withheld in suspected hepatorenal syndrome.",
    "citation": "Ozturk NB. Vasoconstrictor therapy for HRS-AKI in patients listed for liver transplantation: Translating evidence to the pretransplant setting. Liver Transpl. 2026 Oct 2. PMID: 42825583.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on hepatorenal syndrome-aki diagnosis vasoconstrictor therapy terlipressin.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1005",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Refractory Status Epilepticus Continuous Intravenous Anesthetic Infusion",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old man with a history of focal epilepsy is brought to the emergency department in active status epilepticus. Witnesses report continuous generalized tonic-clonic convulsions that began 35 minutes ago without return of consciousness. The emergency medical team administered two separate doses of intravenous lorazepam 4 mg (total 8 mg) without cessation of motor seizures. In the emergency department, endotracheal intubation is performed for airway protection. The patient is immediately loaded with intravenous levetiracetam 60 mg/kg (4,500 mg). Fifteen minutes after completing the levetiracetam infusion, continuous rhythmic clonic jerking of all four extremities persists, accompanied by persistent nystagmoid eye movements. Vital signs: blood pressure 138/84 mm Hg, heart rate 122/min, temperature 38.4 C (101.1 F). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiation of continuous intravenous infusion of midazolam or propofol with continuous EEG monitoring",
        "This patient has REFRACTORY STATUS EPILEPTICUS (RSE), defined as ongoing clinical or electrographic seizure activity despite adequate doses of an initial first-line benzodiazepine (e.g., lorazepam 0.1 mg/kg or 8 mg) and an appropriate second-line non-sedating antiseizure medication (e.g., levetiracetam 60 mg/kg, fosphenytoin 20 mg PE/kg, or valproate 40 mg/kg). With prolonged seizures (>30 minutes), synaptic GABA-A receptors undergo progressive endocytosis and dephosphorylation, while excitatory NMDA receptors are upregulated, causing pharmacoresistance to standard anticonvulsants. Management of RSE requires THIRD-LINE THERAPY WITH CONTINUOUS INTRAVENOUS GENERAL ANESTHETIC AGENTS (e.g., continuous IV MIDAZOLAM, PROPOFOL, or KETAMINE) titrated to achieve clinical seizure cessation and continuous electroencephalographic (EEG) BURST SUPPRESSION or complete background suppression for 24-48 hours."
      ],
      [
        "Administration of an additional dose of intravenous lorazepam 4 mg",
        "Repeating benzodiazepines after adequate initial dosing (8 mg) is ineffective due to GABA receptor internalization and delays necessary anesthetic escalation."
      ],
      [
        "Oral administration of carbamazepine via nasogastric tube",
        "Enteric carbamazepine has slow, erratic absorption and is ineffective for acute emergency status epilepticus termination."
      ],
      [
        "Intravenous administration of magnesium sulfate 4 g over 20 minutes",
        "Magnesium sulfate is indicated for eclamptic seizures in pregnancy, but is ineffective for general refractory epileptic status in young men."
      ],
      [
        "Emergent lumbar puncture prior to administering further antiseizure medications",
        "Etiologic workup (neuroimaging, LP) is critical, but terminating active convulsive brain injury takes absolute therapeutic precedence; diagnostic LP must not delay continuous anesthesia."
      ]
    ],
    "shortestValidSolution": "Status epilepticus refractory to lorazepam and levetiracetam (RSE) = Continuous IV anesthetic infusion (midazolam/propofol) + continuous EEG.",
    "necessaryInference": "Recognize refractory status epilepticus (failure of benzodiazepine and second-line AED) and select third-line continuous IV anesthetic infusion targeting EEG burst suppression.",
    "strongestDistractor": "Administration of an additional dose of intravenous lorazepam 4 mg",
    "distractorExclusion": "GABA-A receptor downregulation during prolonged status epilepticus renders repeated benzodiazepines ineffective and delays lifesaving general anesthesia.",
    "citation": "Cornwall CD. Fast Acute Sedation at Intensive Care vs. High-Dose IV Anti-seizure Medication for Treatment of Non-convulsive Status Epilepticus: A Randomized, Multicenter Trial. Crit Care Explor. 2025 Sep 1. PMID: 40953286.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on refractory status epilepticus continuous intravenous anesthetic infusion.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1006",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Giant Cell Arteritis Anterior Ischemic Optic Neuropathy Methylprednisolone",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents to the emergency department with sudden, painless, severe loss of vision in her right eye that began 3 hours ago. For the past month, she has experienced progressive right-sided temporal headaches, scalp tenderness when brushing her hair, and fatigue. She also notes cramping jaw pain when chewing tough foods that resolves with rest. Vital signs: blood pressure 136/82 mm Hg, heart rate 72/min. Visual acuity is light perception only in the right eye and 20/25 in the left eye. Pupillary examination reveals a right relative afferent pupillary defect. Funduscopic examination of the right eye demonstrates a pale, edematous optic disc with blurred margins and splinter peripapillary hemorrhages. Laboratory studies reveal: erythrocyte sedimentation rate (ESR) 96 mm/hr (reference: <30 mm/hr) and C-reactive protein 42 mg/L (reference: <5 mg/L). Which of the following is the most appropriate immediate management?",
    "choices": [
      [
        "Immediate high-dose intravenous methylprednisolone pulse therapy",
        "This patient presents with GIANT CELL (TEMPORAL) ARTERITIS (GCA) complicated by ANTERIOR ISCHEMIC OPTIC NEUROPATHY (AION), an ophthalmic emergency. GCA is a large- and medium-vessel vasculitis predominantly affecting branches of the external carotid (temporal, facial, maxillary) and ophthalmic arteries. Thrombotic occlusion of the POSTERIOR CILIARY ARTERIES causes infarction of the optic nerve head, presenting as acute, painless, profound vision loss with disc pallor and edema. Visual loss in GCA is irreversible once established, and without immediate therapy, the contralateral eye becomes involved within days to weeks in up to 50% of patients. When visual symptoms or neuro-ophthalmic deficits are present, IMMEDIATE HIGH-DOSE INTRAVENOUS METHYLPREDNISOLONE (500 to 1,000 mg daily for 3 consecutive days) must be administered immediately. A temporal artery biopsy should be arranged within 1-2 weeks, but steroids must NEVER be delayed for diagnostic procedures."
      ],
      [
        "Scheduling an outpatient temporal artery biopsy before initiating corticosteroid therapy",
        "Delaying corticosteroids for biopsy risks catastrophic bilateral permanent blindness; histologic features of GCA persist for 2-4 weeks after initiating steroids."
      ],
      [
        "Initiation of low-dose oral prednisone 20 mg daily with outpatient rheumatology referral",
        "Low-dose oral prednisone is appropriate for isolated polymyalgia rheumatica, but is entirely inadequate for GCA with acute ischemic optic neuropathy."
      ],
      [
        "Administration of intravenous tissue plasminogen activator (tPA) for retinal artery thrombosis",
        "GCA-mediated visual loss is caused by inflammatory vasculitic stenosis and thrombosis of posterior ciliary arteries, not embolic central retinal artery occlusion."
      ],
      [
        "Topical timolol and apraclonidine eye drops to reduce intraocular pressure",
        "Topical glaucoma medications treat elevated intraocular pressure in angle-closure glaucoma; they have no effect on arteritic anterior ischemic optic neuropathy."
      ]
    ],
    "shortestValidSolution": "Temporal headache + jaw claudication + acute vision loss + ESR 96 (GCA) = Immediate high-dose IV methylprednisolone pulse therapy.",
    "necessaryInference": "Recognize acute anterior ischemic optic neuropathy in giant cell arteritis and initiate emergency high-dose IV methylprednisolone to preserve contralateral vision.",
    "strongestDistractor": "Scheduling an outpatient temporal artery biopsy before initiating corticosteroid therapy",
    "distractorExclusion": "Diagnostic temporal artery biopsy must never delay high-dose steroid therapy, as histologic inflammatory signs persist for weeks and delay risks bilateral blindness.",
    "citation": "Dibl\u00edk P. Giant Cell Arteritis in Ophthalmology - Current Treatment Options. A Review. Cesk Slov Oftalmol. 2026. PMID: 42900579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on giant cell arteritis anterior ischemic optic neuropathy methylprednisolone.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1007",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Immune Thrombocytopenia Isolated Severe Thrombocytopenia IVIG Steroids",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents to the clinic with widespread bruising and nosebleeds for the past 4 days. She notes scattered red pinpoint spots on her lower legs and blood on her toothbrush. She has no fever, joint pain, weight loss, or previous history of bleeding. Current medications: none. Vital signs: blood pressure 118/74 mm Hg, pulse 72/min, temperature 36.8 C (98.2 F). Physical examination reveals extensive petechiae over both lower extremities, scattered non-blanching purpura on her arms, and wet purpura (blood blisters) on the buccal mucosa. There is no hepatosplenomegaly or lymphadenopathy. Complete blood count shows: hemoglobin 13.2 g/dL, white blood cell count 6,800/uL with a normal differential, and platelet count 7,000/uL (reference: 150,000-450,000/uL). Coagulation studies (PT, aPTT, INR) are normal. Peripheral blood smear demonstrates markedly decreased platelets with scattered large platelets (megathrombocytes) and normal red blood cell morphology without schistocytes. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Systemic corticosteroids (oral dexamethasone or prednisone) plus intravenous immunoglobulin (IVIG)",
        "This patient presents with PRIMARY IMMUNE THROMBOCYTOPENIA (ITP), an autoimmune disorder characterized by IgG autoantibodies directed against platelet membrane glycoproteins (e.g., GPIIb/IIIa). Antibody-coated platelets are cleared by splenic macrophage Fc receptors, causing ISOLATED SEVERE THROMBOCYTOPENIA without anemia, leukopenia, or schistocytes. In adults with ITP presenting with severe thrombocytopenia (platelet count < 20,000-30,000/uL) and ACTIVE MUCOSAL BLEEDING ('wet purpura', epistaxis), initial first-line therapy consists of SYSTEMIC CORTICOSTEROIDS (high-dose dexamethasone 40 mg daily for 4 days or oral prednisone 1 mg/kg/day) COMBINED WITH INTRAVENOUS IMMUNOGLOBULIN (IVIG, 1 g/kg). IVIG rapidly saturates splenic macrophage Fc-gamma receptors, halting platelet destruction and producing a rapid rise in platelet counts within 24-48 hours. Platelet transfusions are ineffective due to rapid antibody clearance and are reserved only for life-threatening hemorrhage."
      ],
      [
        "Immediate transfusion of two units of pooled donor platelets without pharmacotherapy",
        "Prophylactic platelet transfusions are ineffective in ITP because circulating antiplatelet autoantibodies destroy transfused platelets within minutes to hours."
      ],
      [
        "Emergency laparoscopic splenectomy within 24 hours of hospital admission",
        "Splenectomy is a second-line therapy for chronic ITP refractory to corticosteroids, IVIG, rituximab, and TPO receptor agonists, not initial management."
      ],
      [
        "Initiation of daily plasma exchange (plasmapheresis) for suspected thrombotic microangiopathy",
        "Plasma exchange is the treatment of choice for thrombotic thrombocytopenic purpura (TTP), but this patient has normal RBCs without schistocytes and no microangiopathy."
      ],
      [
        "Observation and outpatient monitoring without medical therapy as long as intracranial bleeding is absent",
        "Observation is appropriate for pediatric ITP with mild bleeding, but adults with platelets <20,000-30,000/uL and mucosal purpura require active medical therapy."
      ]
    ],
    "shortestValidSolution": "Isolated platelets 7k + mucosal wet purpura + normal smear = ITP treated with systemic corticosteroids + IVIG.",
    "necessaryInference": "Identify primary ITP (severe isolated thrombocytopenia with mucocutaneous bleeding) and apply first-line therapy: corticosteroids combined with IVIG to block splenic clearance.",
    "strongestDistractor": "Immediate transfusion of two units of pooled donor platelets without pharmacotherapy",
    "distractorExclusion": "Platelet transfusions are destroyed almost immediately by circulating autoantibodies and are reserved only for life-threatening intracranial or internal hemorrhage.",
    "citation": "Weinstein Mezan D. Romiplostim during pregnancy in refractory primary immune thrombocytopenia: Literature review and case series. Ther Adv Hematol. 2026. PMID: 42620825.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on immune thrombocytopenia isolated severe thrombocytopenia ivig steroids.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1008",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Infected Necrotizing Pancreatitis Minimally Invasive Step-Up Drainage",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man is hospitalized for severe acute gallstone pancreatitis. On admission, contrast-enhanced CT of the abdomen demonstrated extensive necrotizing pancreatitis involving >50% of the pancreatic parenchyma with peripancreatic fluid collections. He was managed in the ICU with intravenous fluid resuscitation and enteral nutrition via a nasojejunal tube. On hospital day 22, he develops new high fevers (temperature 39.2 C), worsening abdominal pain, leukocytosis (WBC 24,500/uL), and tachycardia (heart rate 116/min). Repeat contrast-enhanced CT of the abdomen reveals walled-off pancreatic necrosis with multiple gas bubbles within the retroperitoneal necrotic collection. Blood cultures grow Klebsiella pneumoniae. He is initiated on intravenous meropenem. Which of the following is the most appropriate next step in the management of this patient's infected necrosis?",
    "choices": [
      [
        "Percutaneous catheter drainage or endoscopic transmural drainage as part of a step-up approach",
        "This patient has INFECTED PANCREATIC NECROSIS, evidenced by clinical sepsis >2 weeks after onset of severe acute pancreatitis and the pathognomonic finding of RETROPERITONEAL EXTRAMURAL GAS BUBBLES within the necrotic collection on contrast CT. Over the past decade, high-quality randomized clinical trials (the PANTER trial and subsequent guidelines) established the MINIMALLY INVASIVE 'STEP-UP APPROACH' as the standard of care for infected necrosis, replacing traditional open surgical necrosectomy. The step-up approach begins with MINIMALLY INVASIVE DRAINAGE (either percutaneous catheter drainage or endoscopic transluminal ultrasound-guided cystogastrostomy). Drainage alone resolves infection and sepsis without requiring surgical debridement in up to 35-50% of patients. If clinical improvement does not occur within 72 hours, the next step is minimally invasive retroperitoneal necrosectomy (VARD). This strategy dramatically reduces new-onset multiorgan failure and mortality."
      ],
      [
        "Emergency open surgical exploratory laparotomy with blunt manual necrosectomy and wide debridement",
        "Immediate open necrosectomy carries high morbidity (postoperative organ failure, fistulae) and significantly higher mortality than the minimally invasive step-up approach."
      ],
      [
        "Immediate therapeutic endoscopic retrograde cholangiopancreatography (ERCP) with sphincterotomy",
        "ERCP is indicated for acute gallstone pancreatitis complicated by concurrent acute cholangitis or persistent biliary obstruction, not for walled-off infected retroperitoneal necrosis."
      ],
      [
        "Continuing intravenous antibiotics alone without any drainage procedure for 6 weeks",
        "Antibiotics alone cannot adequately penetrate or sterilize large walled-off fluid and solid necrotic debris; source control via mechanical drainage is mandatory."
      ],
      [
        "CT-guided fine-needle aspiration of the collection for Gram stain and culture before considering drainage",
        "Gas bubbles on CT in a septic patient are diagnostic of infected necrosis; routine diagnostic FNA is unnecessary and delays definitive therapeutic drainage."
      ]
    ],
    "shortestValidSolution": "Infected pancreatic necrosis (gas on CT >3 weeks post-onset) = Minimally invasive step-up approach (percutaneous/endoscopic drainage first).",
    "necessaryInference": "Apply the evidence-based step-up approach for infected necrotizing pancreatitis: initiate percutaneous or endoscopic catheter drainage before considering surgical necrosectomy.",
    "strongestDistractor": "Emergency open surgical exploratory laparotomy with blunt manual necrosectomy and wide debridement",
    "distractorExclusion": "Open surgical necrosectomy has been superseded by the step-up approach, which lowers rates of multiorgan failure, pancreatic fistulae, and death.",
    "citation": "Zuo Q. Robot-assisted pancreatic necrosectomy for infected pancreatic necrosis secondary to severe acute pancreatitis: a single-center retrospective cohort study. J Robot Surg. 2026 Aug 31. PMID: 42671732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on infected necrotizing pancreatitis minimally invasive step-up drainage.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1009",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Postpartum Hemorrhage Uterine Atony Intrauterine Balloon Tamponade",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old primigravida delivered a healthy 4,200-g (9 lb 4 oz) male infant via spontaneous vaginal delivery 30 minutes ago following an uncomplicated labor augmented with oxytocin. The placenta delivered intact with three umbilical vessels. Fifteen minutes after delivery, the nurse notes brisk continuous vaginal bleeding and multiple large blood clots. Vital signs: blood pressure 92/58 mm Hg, heart rate 118/min. Physical examination reveals a soft, boggy, poorly contracted uterus with the fundus palpable 3 cm above the umbilicus. Continuous bimanual uterine massage is initiated. Despite high-dose intravenous oxytocin infusion (40 units in 1,000 mL normal saline), intramuscular methylergonovine 0.2 mg, rectal misoprostol 800 ug, and intramuscular carboprost 0.25 mg, heavy uterine hemorrhage persists with an estimated blood loss of 1,400 mL. Pelvic examination confirms absence of cervical or vaginal lacerations. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Placement of an intrauterine balloon tamponade (Bakri balloon)",
        "POSTPARTUM HEMORRHAGE (PPH) is defined as cumulative blood loss >= 1,000 mL or blood loss accompanied by symptoms of hypovolemia within 24 hours of delivery. The most common etiology is UTERINE ATONY (accounting for 70-80% of cases), with risk factors including fetal macrosomia (>4,000 g), prolonged labor, and oxytocin augmentation. When uterine atony is REFRACTORY TO BIMANUAL MASSAGE AND MULTIMODAL FIRST-LINE UTEROTONICS (oxytocin, methylergonovine, carboprost, misoprostol), the immediate next step is INTRAUTERINE BALLOON TAMPONADE (e.g., Bakri balloon). The balloon is inserted into the uterine cavity and filled with sterile saline (typically 300-500 mL) to generate inward-to-outward hydrostatic pressure against the uterine wall and spiral arteries, arresting hemorrhage in 85% of cases and avoiding invasive laparotomy. If balloon tamponade fails, the patient proceeds to surgical interventions (uterine compression sutures like B-Lynch, uterine artery embolization, or hysterectomy)."
      ],
      [
        "Immediate emergency emergent total abdominal hysterectomy",
        "Emergency hysterectomy is the definitive treatment of absolute last resort; uterine balloon tamponade and compression sutures must be attempted first."
      ],
      [
        "Administration of intravenous desmopressin (DDAVP) to stimulate factor VIII release",
        "DDAVP is indicated for von Willebrand disease and mild hemophilia A; it has no role in mechanical uterine atony in patients with normal baseline coagulation."
      ],
      [
        "Surgical exploration of the perineum for occult retroperitoneal hematoma",
        "Physical exam confirmed uterine atony (boggy uterus above umbilicus) without perineal lacerations; pelvic exploration does not address uterine atony."
      ],
      [
        "Withholding all interventions and waiting 30 minutes for endogenous clotting to occur",
        "Delaying intervention in active ongoing hemorrhage with shock (BP 92/58, HR 118) leads to rapid consumptive coagulopathy, multiorgan failure, and maternal death."
      ]
    ],
    "shortestValidSolution": "Postpartum hemorrhage from uterine atony refractory to medical uterotonics = Intrauterine balloon tamponade (Bakri balloon).",
    "necessaryInference": "Select intrauterine balloon tamponade as the primary non-surgical intervention for postpartum hemorrhage refractory to bimanual massage and uterotonic medications.",
    "strongestDistractor": "Immediate emergency emergent total abdominal hysterectomy",
    "distractorExclusion": "Hysterectomy is the irreversible final resort after balloon tamponade and uterine artery ligation/compression sutures have failed.",
    "citation": "Basurte MC. Improving Obstetric Safety in Postpartum Hemorrhage: Impact of Protocol-Based Conservative Management. Life (Basel). 2026 Jun 19. PMID: 42355556.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 obstetrics item requiring multi-step deduction on postpartum hemorrhage uterine atony intrauterine balloon tamponade.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1010",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Kawasaki Disease Refractory to Initial IVIG Treatment Escalation",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old boy is hospitalized with Kawasaki disease. At the time of admission, he met full diagnostic criteria with 6 days of high fever, bilateral non-exudative bulbar conjunctival injection, cracked red lips, strawberry tongue, polymorphous macular trunk rash, and induration of both hands. He was treated with standard first-line therapy: high-dose intravenous immunoglobulin (IVIG, 2 g/kg as a single 12-hour infusion) and high-dose oral aspirin (80 mg/kg/day). Thirty-six hours after the completion of the IVIG infusion, the child remains irritable and his temperature spikes to 39.4 C (102.9 F). Physical examination reveals persistent conjunctival injection and worsening cervical lymphadenopathy. Laboratory studies show: ESR 88 mm/hr, CRP 68 mg/L, and platelet count 520,000/uL. Echocardiogram demonstrates normal coronary arteries without ectasia or aneurysm. Which of the following is the most appropriate management for this patient's condition?",
    "choices": [
      [
        "Administration of a second dose of intravenous immunoglobulin (2 g/kg) or adjunct infliximab",
        "Approximately 10-20% of children with Kawasaki disease exhibit IVIG RESISTANCE (REFRACTORY KAWASAKI DISEASE), defined by the persistence or recrudescence of fever (temperature >= 38.0 C) at least 36 hours after completion of the initial IVIG infusion. IVIG resistance is a major risk factor for the development of CORONARY ARTERY ANEURYSMS due to ongoing systemic medium-vessel vasculitis. According to the American Heart Association (AHA) guidelines, the standard first-line management for IVIG-resistant Kawasaki disease is ADMINISTRATION OF A SECOND DOSE OF IVIG (2 g/kg). Alternatively, adjunctive therapy with a TNF-alpha inhibitor (INFLIXIMAB, 5 mg/kg) or a course of high-dose intravenous methylprednisolone pulse therapy is highly effective in terminating vascular inflammation and reducing coronary aneurysm risks."
      ],
      [
        "Immediate cessation of aspirin and initiation of broad-spectrum antibiotics with intravenous vancomycin",
        "Kawasaki disease is an immune-mediated vasculitis, not a bacterial infection; discontinuing aspirin and giving antibiotics fails to treat vasculitis and increases coronary risk."
      ],
      [
        "Increasing oral aspirin to 150 mg/kg/day as monotherapy without further immunomodulation",
        "Increasing aspirin beyond standard anti-inflammatory doses (80-100 mg/kg/day) provides no additional vasculitic control and dramatically increases salicylate hepatotoxicity."
      ],
      [
        "Administration of intramuscular methotrexate with maintenance oral colchicine",
        "Methotrexate and colchicine are used for chronic adult rheumatic conditions; they are not indicated or effective for acute refractory Kawasaki disease."
      ],
      [
        "Observation without further therapy since coronary arteries are normal on baseline echocardiogram",
        "Normal baseline echocardiography does not preclude aneurysm formation; untreated persistent inflammation causes aneurysm development in 25% of cases within 2-4 weeks."
      ]
    ],
    "shortestValidSolution": "Persistent fever 36h after IVIG in Kawasaki disease = Second dose of IVIG (2 g/kg) or adjunct infliximab.",
    "necessaryInference": "Recognize IVIG-resistant Kawasaki disease (fever recrudescence >=36 hours post-infusion) and select recommended escalation: second IVIG infusion or infliximab.",
    "strongestDistractor": "Increasing oral aspirin to 150 mg/kg/day as monotherapy without further immunomodulation",
    "distractorExclusion": "Aspirin alone does not reduce coronary artery aneurysm risk; escalating immunomodulation with a second IVIG dose or TNF inhibitor is required.",
    "citation": "McCrindle BW. Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association. Circulation. 2017 Apr 25. PMID: 28356445.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pediatrics item requiring multi-step deduction on kawasaki disease refractory to initial ivig treatment escalation.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1011",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Respiratory",
    "topic": "Tension Pneumothorax Immediate Decompression and Tube Thoracostomy",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is brought to the trauma center by emergency medical services following a high-speed motor vehicle collision in which his vehicle struck a concrete abutment. On arrival, he is in severe respiratory distress, cyanotic, and agitated. Vital signs: blood pressure 72/44 mm Hg, heart rate 142/min, respiratory rate 38/min, oxygen saturation 78% on a non-rebreather mask. Physical examination reveals distended neck veins (elevated jugular venous pressure), prominent subcutaneous emphysema over the right chest wall, absence of breath sounds over the entire right hemithorax, hyperresonance to percussion over the right chest, and visible deviation of the trachea to the left. The patient's blood pressure drops to 64/38 mm Hg while on the trauma stretcher. Which of the following is the most appropriate immediate action?",
    "choices": [
      [
        "Immediate needle decompression or finger thoracostomy of the right chest followed by chest tube placement",
        "This patient has a life-threatening TENSION PNEUMOTHORAX of the right hemithorax. A one-way valve mechanism allows air to enter the pleural space during inspiration without escaping during expiration, resulting in progressive intrapleural air accumulation and massively elevated intrathoracic pressure. This leads to: (1) Complete ipsilateral lung collapse; (2) Contralateral mediastinal and TRACHEAL SHIFT (to the left); (3) Compression of the superior and inferior vena cava and right atrium, severely impairing venous return (preload) and causing profound OBSTRUCTIVE SHOCK (hypotension, tachycardia, distended neck veins). Tension pneumothorax is a STRICTLY CLINICAL DIAGNOSIS. In an unstable patient, IMMEDIATE DECOMPRESSION must be performed without waiting for imaging: either NEEDLE DECOMPRESSION (14-gauge catheter at the 2nd intercostal space midclavicular line or 4th/5th intercostal space anterior axillary line) or FINGER THORACOSTOMY, immediately followed by FORMAL TUBE THORACOSTOMY (chest tube insertion)."
      ],
      [
        "Immediate portable anteroposterior chest radiography in the trauma resuscitation bay",
        "Delaying decompression to obtain diagnostic chest radiography in a decompensating, severely hypotensive trauma patient frequently precipitates cardiac arrest."
      ],
      [
        "Immediate endotracheal intubation with high-pressure positive-pressure mechanical ventilation",
        "Positive-pressure ventilation before decompressing a tension pneumothorax forces more air into the pleural space, accelerating cardiovascular collapse and death."
      ],
      [
        "Emergency pericardiocentesis under subxiphoid ultrasound guidance for suspected cardiac tamponade",
        "Pericardiocentesis treats tamponade; this patient has classic unilateral absent breath sounds and hyperresonance indicating tension pneumothorax, not tamponade."
      ],
      [
        "Immediate administration of intravenous broad-spectrum vasopressors via central venous line",
        "Vasopressors do not correct the mechanical obstruction to vena caval inflow; immediate pleural decompression is the definitive treatment for obstructive shock."
      ]
    ],
    "shortestValidSolution": "Trauma + shock + absent breath sounds + hyperresonance + tracheal deviation = Immediate needle decompression / tube thoracostomy.",
    "necessaryInference": "Recognize tension pneumothorax as a clinical diagnosis causing obstructive shock; perform immediate needle/finger decompression without awaiting radiography.",
    "strongestDistractor": "Immediate portable anteroposterior chest radiography in the trauma resuscitation bay",
    "distractorExclusion": "Awaiting radiographic confirmation in an unstable, hypotensive patient with tension pneumothorax delays lifesaving decompression and risks cardiac arrest.",
    "citation": "Ausman JA. Comparison of Needle Decompression to Simple (Finger) Thoracostomy in Non-Perfused Cadaveric Models with Theoretical Tension Pneumothorax. Prehosp Emerg Care. 2026. PMID: 42054269.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on tension pneumothorax immediate decompression and tube thoracostomy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1012",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Neuroleptic Malignant Syndrome Severe Lead-Pipe Rigidity Dantrolene",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old man with treatment-resistant schizophrenia is brought to the emergency department by his family because of extreme lethargy, confusion, and high fever over the past 24 hours. Four days ago, his outpatient psychiatrist increased his haloperidol dose and added intramuscular haloperidol decanoate for worsening psychotic agitation. Vital signs: temperature 40.1 C (104.2 F), blood pressure 178/104 mm Hg, heart rate 128/min, respiratory rate 24/min. Physical examination reveals a stuporous, diaphoresis-soaked man with extreme, generalized 'lead-pipe' muscle rigidity in all four extremities. Reflexes are 1+ bilaterally with no ankle clonus or ocular tremor. Laboratory evaluation shows: white blood cell count 18,200/uL, serum creatinine 2.4 mg/dL (baseline 0.9 mg/dL), and serum creatine kinase (CK) 34,000 U/L (reference: 30-200 U/L). Urinalysis is positive for blood by dipstick but contains only 0-2 RBCs per high-power field (myoglobinuria). In addition to aggressive cooling and intravenous hydration, which of the following is the most appropriate pharmacotherapy?",
    "choices": [
      [
        "Intravenous dantrolene or oral bromocriptine",
        "This patient presents with NEUROLEPTIC MALIGNANT SYNDROME (NMS), a life-threatening idiosyncratic reaction to dopamine receptor antagonists (most frequently high-potency typical antipsychotics like haloperidol). NMS is driven by central dopamine D2 receptor blockade in the hypothalamus and basal ganglia. The classic clinical tetrad consists of: (1) HYPERTHERMIA (often >40 C); (2) SEVERE 'LEAD-PIPE' MUSCLE RIGIDITY; (3) AUTONOMIC INSTABILITY (tachycardia, labile hypertension, diaphoresis); and (4) ALTERED MENTAL STATUS (encephalopathy). Massive muscle breakdown produces marked CREATINE KINASE ELEVATION (>10,000-50,000 U/L) and rhabdomyolysis-induced acute tubular necrosis (dipstick-positive blood without RBCs). Treatment requires immediate cessation of causative antipsychotics, intensive supportive care (aggressive cooling, IV hydration), and targeted pharmacotherapy: DANTROLENE (a direct ryanodine receptor blocker preventing sarcoplasmic calcium release) or BROMOCRIPTINE (a central dopamine D2 receptor agonist)."
      ],
      [
        "Intravenous cyproheptadine",
        "Cyproheptadine is a 5-HT2A serotonin antagonist used specifically for moderate-to-severe serotonin syndrome (hyperreflexia, clonus), not dopamine-antagonist NMS."
      ],
      [
        "Intramuscular flumazenil",
        "Flumazenil is a benzodiazepine antagonist that can precipitate acute withdrawal seizures; it has no therapeutic efficacy in NMS."
      ],
      [
        "High-dose intravenous methylprednisolone pulse therapy",
        "Corticosteroids are indicated for autoimmune or vasculitic encephalitis, not for central dopamine D2 blockade in neuroleptic malignant syndrome."
      ],
      [
        "Administration of diphenhydramine 50 mg intravenously",
        "Diphenhydramine is an anticholinergic used for acute dystonic reactions; it does not reverse the hyperthermia, rhabdomyolysis, or severe rigidity of NMS."
      ]
    ],
    "shortestValidSolution": "Haloperidol + fever 40C + lead-pipe rigidity + CK 34k = NMS treated with dantrolene or bromocriptine.",
    "necessaryInference": "Differentiate NMS (lead-pipe rigidity, severe hyperthermia, extreme CK) from serotonin syndrome (hyperreflexia, clonus) and select dantrolene / bromocriptine.",
    "strongestDistractor": "Intravenous cyproheptadine",
    "distractorExclusion": "Cyproheptadine is a serotonin antagonist indicated for serotonin syndrome; NMS is caused by dopamine antagonism and responds to dantrolene or bromocriptine.",
    "citation": "Ivarola P. [Neuroleptic Malignant Syndrome]. Medicina (B Aires). 2026 Aug. PMID: 42659566.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 psychiatry item requiring multi-step deduction on neuroleptic malignant syndrome severe lead-pipe rigidity dantrolene.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1013",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Thyroid Storm Burch-Wartofsky Multimodal Sequential Medical Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman with a history of Graves disease who discontinued her methimazole 3 months ago is brought to the emergency department with severe agitation, profuse sweating, vomiting, and diarrhea. She developed a high fever and productive cough 2 days ago. Vital signs: temperature 40.3 C (104.5 F), blood pressure 168/76 mm Hg, heart rate 158/min (irregularly irregular, consistent with atrial fibrillation), respiratory rate 28/min. Physical examination reveals an extremely delirious woman with marked proptosis, diffuse goiter with an audible vascular bruit, and fine hand tremors. Chest radiography demonstrates right lower lobe consolidation. Laboratory studies reveal: TSH <0.01 uIU/mL, free T4 5.8 ng/dL (reference: 0.8-1.8 ng/dL), and free T3 18.2 pg/mL (reference: 2.3-4.2 pg/mL). Her Burch-Wartofsky Point Scale score is 70 (diagnostic of thyroid storm). Which of the following represents the correct sequential multi-agent pharmacotherapy for this patient?",
    "choices": [
      [
        "Intravenous propranolol, oral propylthiouracil, inorganic potassium iodide administered 1 hour later, and intravenous hydrocortisone",
        "THYROID STORM is an acute, life-threatening hypermetabolic state triggered by precipitating stressors (e.g., infection, surgery, non-compliance) in patients with thyrotoxicosis. Treatment requires a STRICTLY ORDERED MULTIMODAL REGIMEN: (1) BETA-BLOCKER (e.g., IV propranolol or esmolol) to control hyperadrenergic symptoms and block peripheral T4-to-T3 conversion; (2) THIONAMIDE: PROPYLTHIOURACIL (PTU) is preferred over methimazole in thyroid storm because PTU inhibits new hormone synthesis via thyroid peroxidase AND blocks peripheral conversion of T4 to active T3; (3) INORGANIC IODINE (potassium iodide or Lugol solution) to block hormone release via the Wolff-Chaikoff effect, but CRITICALLY, IODINE MUST BE DELAYED BY AT LEAST 1 HOUR AFTER THIONAMIDE ADMINISTRATION to prevent the iodine from serving as new substrate for accelerated thyroid hormone synthesis (the Jod-Basedow phenomenon); and (4) GLUCOCORTICOIDS (IV hydrocortisone) to reduce peripheral conversion of T4 to T3 and protect against relative adrenal insufficiency."
      ],
      [
        "Immediate oral potassium iodide administration followed 2 hours later by intravenous methimazole",
        "Administering iodine before thionamides provides substrate for massive new thyroid hormone synthesis, drastically exacerbating life-threatening thyrotoxicosis."
      ],
      [
        "Monotherapy with high-dose intravenous levothyroxine to saturate systemic thyroid receptors",
        "Levothyroxine is exogenous thyroid hormone and would precipitate fatal cardiovascular collapse in acute thyrotoxicosis."
      ],
      [
        "Immediate emergency total thyroidectomy within 6 hours of hospital presentation",
        "Emergency surgery in unblocked thyroid storm carries catastrophic intraoperative mortality; patients must be pharmacologically rendered euthyroid prior to surgery."
      ],
      [
        "Intravenous amiodarone infusion to treat atrial fibrillation and suppress thyroid secretion",
        "Amiodarone contains large amounts of organic iodine that worsens thyrotoxicosis in Graves disease and can trigger fatal cardiovascular collapse."
      ]
    ],
    "shortestValidSolution": "Thyroid storm = Sequential therapy: Propranolol + PTU + Potassium iodide (delayed 1h) + Hydrocortisone.",
    "necessaryInference": "Apply the sequence of thyroid storm pharmacotherapy: beta-blocker and PTU first, followed by inorganic iodine at least 1 hour later, plus stress-dose hydrocortisone.",
    "strongestDistractor": "Immediate oral potassium iodide administration followed 2 hours later by intravenous methimazole",
    "distractorExclusion": "Inorganic iodine must never precede thionamide blockade; giving iodine first fuels new hormone synthesis and exacerbates life-threatening storm.",
    "citation": "Zhang L. [Successful treatment of myocardial infarction complicated with thyroid crisis using extracorporeal membrane oxygenation: a case report and literature review]. Zhonghua Wei Zhong Bing Ji Jiu Yi Xue. 2026 Sep. PMID: 42875246.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on thyroid storm burch-wartofsky multimodal sequential medical therapy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1014",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ectopic Pregnancy Single-Dose Methotrexate Selection Criteria",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman, gravida 2 para 1, presents to the early pregnancy assessment clinic with 4 days of intermittent light vaginal spotting and mild dull left lower quadrant aching. Her last menstrual period was 6 weeks ago. Vital signs: blood pressure 124/76 mm Hg, heart rate 74/min. Physical examination reveals mild tenderness in the left adnexa without peritoneal signs, rebound, or cervical motion tenderness. Quantitative serum beta-hCG is 2,400 mIU/mL. Transvaginal ultrasonography reveals an empty uterine cavity with a thickened endometrial stripe (11 mm), a normal right ovary, and a well-circumscribed, non-cystic, 2.6-cm ectopic gestational mass in the left ampulla without cardiac activity or yolk sac. There is no free fluid in the pouch of Douglas. Complete blood count, serum creatinine, and liver transaminases are entirely normal. The patient desires to preserve fertility. Which of the following is the most appropriate management?",
    "choices": [
      [
        "Intramuscular single-dose methotrexate with quantitative beta-hCG monitoring on days 4 and 7",
        "This patient has an UNRUPTURED TUBAL ECTOPIC PREGNANCY. Medical management with intramuscular METHOTREXATE (a folate antagonist that inhibits dihydrofolate reductase and arrests rapidly dividing trophoblastic tissue) is a safe, effective, fertility-sparing alternative to surgery in selected candidates. Key eligibility criteria for methotrexate therapy include: (1) HEMODYNAMIC STABILITY with minimal abdominal pain; (2) PRE-TREATMENT SERUM BETA-HCG < 5,000 mIU/mL (this patient is 2,400 mIU/mL); (3) GESTATIONAL MASS DIAMETER < 3.5 cm (patient is 2.6 cm); (4) ABSENCE OF EMBRYONIC CARDIAC ACTIVITY; and (5) Normal renal and hepatic function, with guaranteed patient compliance for outpatient follow-up. Protocol requires measuring serum beta-hCG on DAY 4 AND DAY 7; a decline >= 15% between days 4 and 7 indicates successful medical treatment. Surgical salpingostomy/salpingectomy is reserved for ruptured ectopic, hemodynamic instability, or methotrexate contraindications."
      ],
      [
        "Immediate exploratory laparoscopy with left total salpingectomy",
        "Salpingectomy is definitive surgical management indicated for ruptured ectopic pregnancy, hemodynamic instability, or mass >3.5 cm, but is unnecessary for eligible medical candidates."
      ],
      [
        "Dilation and curettage to evacuate presumed abnormal intrauterine pregnancy",
        "Dilation and curettage is appropriate when distinguishing miscarriage from ectopic in non-visualized pregnancies, but transvaginal ultrasound already confirmed an adnexal ectopic mass."
      ],
      [
        "Oral mifepristone 200 mg followed 24 hours later by oral misoprostol 800 ug",
        "Mifepristone plus misoprostol is indicated for medical abortion of confirmed intrauterine pregnancies, but is entirely ineffective for tubal ectopic pregnancies."
      ],
      [
        "Expectant management with repeat serum beta-hCG measurement in 1 week",
        "Expectant management is only considered for asymptomatic patients with very low, spontaneously declining beta-hCG levels (<1,000 mIU/mL); beta-hCG of 2,400 requires active treatment."
      ]
    ],
    "shortestValidSolution": "Unruptured ectopic (mass <3.5 cm, hCG <5000, no cardiac activity, stable) = Single-dose IM methotrexate.",
    "necessaryInference": "Evaluate eligibility criteria for medical management of ectopic pregnancy: hemodynamic stability, hCG <5,000, mass <3.5 cm, and no embryonic cardiac activity mandate methotrexate.",
    "strongestDistractor": "Immediate exploratory laparoscopy with left total salpingectomy",
    "distractorExclusion": "Surgical salpingectomy is invasive and sacrifices the fallopian tube; hemodynamically stable patients meeting strict methotrexate criteria achieve high non-surgical resolution.",
    "citation": "Mammadov R. Letrozole in ectopic pregnancy: exploring a promising frontier in non-surgical therapy - a narrative review. Ginekol Pol. 2026. PMID: 42663163.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 obstetrics item requiring multi-step deduction on ectopic pregnancy single-dose methotrexate selection criteria.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1015",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Septic Shock Fluid-Refractory Hypotension Norepinephrine Vasopressin",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with diabetes mellitus is admitted to the intensive care unit with septic shock secondary to acute pyelonephritis. Over the past 2 hours, he has received 30 mL/kg of intravenous balanced crystalloid fluids (total 2,500 mL) and broad-spectrum antibiotics. Despite adequate volume loading, his arterial blood pressure is 78/44 mm Hg with a mean arterial pressure (MAP) of 55 mm Hg. Heart rate is 114/min, and central venous oxygen saturation (ScvO2) is 62%. Physical examination reveals warm, flushed extremities with brisk capillary refill (<1 second). Bedside echocardiography demonstrates a hyperdynamic left ventricle with complete systolic cavity obliteration and a collapsing inferior vena cava. Serum lactate has increased from 2.8 mmol/L to 4.2 mmol/L. Which of the following is the most appropriate first-line vasopressor to restore systemic perfusion pressure in this patient?",
    "choices": [
      [
        "Norepinephrine infusion titrated to target a mean arterial pressure of at least 65 mm Hg",
        "The Surviving Sepsis Campaign international guidelines strongly recommend NOREPINEPHRINE AS THE FIRST-LINE VASOPRESSOR OF CHOICE in septic shock. Septic shock is characterized by profound pathologically low systemic vascular resistance (distributive shock) caused by inflammatory endothelial nitric oxide release. Norepinephrine acts as a potent ALPHA-1 ADRENERGIC AGONIST, causing intense arteriolar vasoconstriction to restore vascular tone and increase MAP, combined with modest BETA-1 INOTROPIC STIMULATION that supports cardiac output without causing excessive tachycardia. The recommended target is a MAP >= 65 mm Hg. If MAP remains inadequate despite moderate-to-high doses of norepinephrine (e.g., >0.25 mcg/kg/min), VASOPRESSIN (fixed dose 0.03 units/min) is added as a second-line vasopressor to restore tone and reduce norepinephrine requirements."
      ],
      [
        "Dopamine infusion titrated to achieve a renal-dose dopaminergic effect",
        "Dopamine is associated with significantly higher rates of tachyarrhythmias and increased mortality compared to norepinephrine in septic shock; renal-dose dopamine is ineffective."
      ],
      [
        "Phenylephrine infusion as pure alpha-1 vasoconstrictor monotherapy",
        "Phenylephrine causes pure vasoconstriction and reflex bradycardia, which decreases stroke volume and cardiac index; it is reserved only for severe tachyarrhythmias."
      ],
      [
        "Epinephrine infusion as first-line single agent before attempting norepinephrine",
        "Epinephrine is recommended only as an add-on agent when norepinephrine and vasopressin are insufficient, as it causes excessive tachycardia and lactic acidosis."
      ],
      [
        "Dobutamine monotherapy titrated to optimize left ventricular contractility",
        "Dobutamine is an inodilator that causes peripheral vasodilation (beta-2) and would worsen profound arterial hypotension in distributive septic shock."
      ]
    ],
    "shortestValidSolution": "Septic shock refractory to crystalloids (MAP <65) = Norepinephrine first-line vasopressor targeting MAP >=65.",
    "necessaryInference": "Select norepinephrine as the definitive first-line vasopressor in fluid-refractory septic shock to restore systemic vascular resistance and achieve MAP >=65 mm Hg.",
    "strongestDistractor": "Dopamine infusion titrated to achieve a renal-dose dopaminergic effect",
    "distractorExclusion": "Dopamine causes excessive tachyarrhythmias and excess mortality compared to norepinephrine; low-dose 'renal dopamine' has no therapeutic benefit.",
    "citation": "Zhang Y. Severity-stratified vasopressor-escalation strategies in septic shock: a cross-fitted doubly robust analysis with external replication. Front Pharmacol. 2026. PMID: 42565049.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on septic shock fluid-refractory hypotension norepinephrine vasopressin.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1016",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Dermatology",
    "topic": "Stevens-Johnson Syndrome Toxic Epidermal Necrolysis SCORTEN Burn ICU",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man presents to the emergency department with a widespread, painful rash, high fever, and severe mouth sores that developed over the past 48 hours. Three weeks ago, he was started on allopurinol for gout. Vital signs: temperature 39.4 C (102.9 F), blood pressure 104/66 mm Hg, heart rate 112/min. Physical examination reveals extensive, dark purpuric macules and atypical targetoid lesions with dusky, necrotic centers involving his face, trunk, and proximal extremities. Flaccid bullae are present, and gentle lateral pressure on unaffected-appearing skin causes the epidermis to slide and separate from the dermis (positive Nikolsky sign). Approximately 22% of his total body surface area exhibits epidermal detachment. There are extensive, hemorrhagic erosions with gray pseudomembranes on his lips, buccal mucosa, and palpebral conjunctiva. Laboratory studies reveal: blood urea nitrogen 34 mg/dL and serum bicarbonate 18 mEq/L. Which of the following is the most critical initial management step?",
    "choices": [
      [
        "Immediate discontinuation of allopurinol and urgent transfer to an intensive care burn center",
        "This patient presents with STEVENS-JOHNSON SYNDROME / TOXIC EPIDERMAL NECROLYSIS (SJS/TEN) OVERLAP, a life-threatening, cell-mediated (cytotoxic CD8+ T-cell and NK-cell) cutaneous reaction characterized by extensive keratinocyte apoptosis. SJS involves <10% body surface area (BSA) epidermal detachment, SJS/TEN overlap involves 10-30% BSA detachment (this patient has 22%), and TEN involves >30% BSA detachment. The most common inciting triggers are medications (allopurinol, aromatic anticonvulsants, sulfonamides, NSAIDs). THE SINGLE MOST CRITICAL DETERMINANT OF SURVIVAL IS IMMEDIATE CESSATION OF THE OFFENDING DRUG. Furthermore, patients with extensive epidermal sloughing require URGENT TRANSFER TO A DEDICATED BURN UNIT OR SPECIALIZED ICU. Massive epidermal loss mirrors severe burn injury, causing catastrophic fluid loss, hypothermia, high-output failure, and life-threatening sepsis (most commonly Pseudomonas aeruginosa or S. aureus). SCORTEN score calculates predicted mortality."
      ],
      [
        "Initiation of high-dose oral acyclovir for suspected disseminated herpes simplex infection",
        "Acyclovir treats viral infections; SJS/TEN is a drug-induced cytotoxic immune reaction requiring immediate offending drug withdrawal and barrier skin care."
      ],
      [
        "Topical application of silver sulfadiazine cream over all denuded areas",
        "Silver sulfadiazine contains a sulfonamide moiety, a frequent trigger of SJS/TEN, and can cause systemic toxicity and impaired re-epithelialization in TEN."
      ],
      [
        "Immediate high-dose intravenous immunoglobulin (IVIG) as outpatient clinic therapy",
        "Outpatient management is contraindicated in life-threatening SJS/TEN involving 22% BSA; intensive inpatient barrier care and fluid resuscitation in a burn ICU are mandatory."
      ],
      [
        "Full-thickness surgical debridement of all necrotic epidermis in the operating room",
        "Aggressive surgical debridement strips viable basal cells and worsens wound healing; conservative barrier dressings without mechanical shear are standard."
      ]
    ],
    "shortestValidSolution": "Allopurinol + 22% epidermal detachment + mucosal erosions + Nikolsky positive = Stop drug + transfer to Burn ICU.",
    "necessaryInference": "Recognize SJS/TEN overlap (10-30% BSA detachment) and apply core management principles: immediate culprit drug withdrawal and transfer to an intensive burn unit.",
    "strongestDistractor": "Full-thickness surgical debridement of all necrotic epidermis in the operating room",
    "distractorExclusion": "Surgical debridement destroys remaining regenerative stem cells; care in TEN relies on non-adherent biological dressings and gentle wound management in a burn unit.",
    "citation": "Alfaro M. SCORTEN in Contrast: Two Cases of SJS/TEN Overlap With Divergent Outcomes Highlighting the Role of Renal Dysfunction. Clin Case Rep. 2026 Sep. PMID: 42698784.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on stevens-johnson syndrome toxic epidermal necrolysis scorten burn icu.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1017",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Acute Compartment Syndrome Delta Pressure Measurement Emergency Fasciotomy",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old motorcyclist is admitted following a collision resulting in a closed, displaced midshaft fracture of the right tibia and fibula. The fracture is temporarily immobilized in a posterior splint, and open reduction and internal fixation is scheduled for the morning. Six hours post-injury, the patient complains of excruciating right lower-leg pain that is progressively worsening despite multiple doses of intravenous morphine. Physical examination reveals a tense, firm, 'wooden' swelling of the right anterior and lateral calf. The patient screams in pain when the examiner passively flexes his toes. Sensation to light touch is diminished in the first dorsal web space of the right foot. Distal pedal pulses (dorsalis pedis and posterior tibial) remain 2+ bilaterally, and the foot is warm with capillary refill <2 seconds. Vital signs: blood pressure 110/70 mm Hg, heart rate 104/min. An intracompartmental pressure monitor inserted into the anterior compartment measures 48 mm Hg. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate emergency four-compartment fasciotomy of the right lower leg",
        "This patient has ACUTE COMPARTMENT SYNDROME (ACS) of the right lower leg, a surgical emergency commonly complicating closed tibial fractures. Increased pressure within an inelastic fascial compartment compromises capillary perfusion, leading to muscle ischemia and irreversible tissue necrosis within 4-6 hours. Clinical diagnosis is supported by the '6 Ps', but the EARLIEST AND MOST SENSITIVE CLINICAL SIGN IS PAIN OUT OF PROPORTION TO INJURY and PAIN EXACERBATED BY PASSIVE STRETCH of muscles in that compartment. Sensory deficits (e.g., deep peroneal nerve numbness in the first web space) precede motor deficits. CRITICALLY, PALPABLE PERIPHERAL PULSES DO NOT RULE OUT COMPARTMENT SYNDROME; arterial pulses persist until intracompartmental pressure exceeds systolic pressure. Diagnosis is confirmed by a DELTA PRESSURE (diastolic blood pressure minus compartment pressure) <= 30 mm Hg (here: 70 - 48 = 22 mm Hg). Immediate definitive treatment is EMERGENCY FASCIOTOMY OF ALL FOUR COMPARTMENTS (anterior, lateral, superficial posterior, deep posterior)."
      ],
      [
        "Elevation of the right leg above the level of the heart with tight compressive elastic wrapping",
        "Elevating the leg decreases arterial inflow pressure, and compressive wraps increase tissue pressure; both accelerate ischemic muscle necrosis."
      ],
      [
        "Immediate application of a circumferential non-padded fiberglass cast",
        "Circumferential casting constricts the expanding limb and drastically worsens intracompartmental pressure, precipitating rapid gangrene."
      ],
      [
        "Administration of intravenous mannitol and continuous therapeutic unfractionated heparin",
        "Anticoagulation can precipitate hematoma expansion within the closed compartment; medical therapies cannot decompress the rigid fascia."
      ],
      [
        "Observation with repeat intracompartmental pressure measurements in 6 hours",
        "A delta pressure of 22 mm Hg is diagnostic of tissue-threatening ischemia; delaying surgical decompression by 6 hours causes permanent nerve palsy and Volkmann contracture."
      ]
    ],
    "shortestValidSolution": "Tibia fracture + severe pain on passive stretch + delta pressure <=30 mmHg = Emergency four-compartment fasciotomy.",
    "necessaryInference": "Identify acute compartment syndrome using delta pressure (diastolic BP minus compartment pressure <= 30 mm Hg); palpable pulses do not exclude emergency fasciotomy.",
    "strongestDistractor": "Observation with repeat intracompartmental pressure measurements in 6 hours",
    "distractorExclusion": "Delaying fasciotomy when delta pressure is <=30 mm Hg results in irreversible muscle necrosis, rhabdomyolysis, and permanent foot drop within hours.",
    "citation": "Dasgupta R. Evaluation of Clinical and Venous Blood Parameters as Surrogate Indicators in Assessing the Need for Fasciotomy in Lower Limb Compartment Syndrome. Int J Low Extrem Wounds. 2024 Sep. PMID: 34792424.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 surgery item requiring multi-step deduction on acute compartment syndrome delta pressure measurement emergency fasciotomy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s2-1018",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Acute Angle-Closure Glaucoma Medical Decompression Laser Iridotomy",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old Asian woman presents to the emergency department with sudden, severe, boring pain in and around her right eye that began 2 hours ago while sitting in a dark movie theater. She is nauseated and has vomited twice. She reports blurred vision and seeing rainbow-colored halos around lights. Physical examination of the right eye reveals intense conjunctival ciliary injection, a cloudy 'steamy' cornea, a shallow anterior chamber, and a mid-dilated (5 mm), vertically oval pupil that is completely non-reactive to light. Tonometry demonstrates an intraocular pressure (IOP) of 58 mm Hg in the right eye (reference: 10-21 mm Hg) and 16 mm Hg in the left eye. Which of the following represents the most appropriate immediate medical management to rapidly lower intraocular pressure?",
    "choices": [
      [
        "Topical timolol, topical apraclonidine, intravenous acetazolamide, followed by topical pilocarpine",
        "This patient presents with ACUTE ANGLE-CLOSURE GLAUCOMA (AACG), an ophthalmologic emergency. In anatomically predisposed eyes (e.g., hyperopia, shallow anterior chamber), pupillary dilation in dim light causes the peripheral iris to bunch against the trabecular meshwork, producing acute pupillary block. Aqueous humor cannot drain through the canal of Schlemm, causing rapid spike in intraocular pressure (>40-60 mm Hg), optic nerve ischemia, and permanent vision loss within hours if untreated. IMMEDIATE MEDICAL THERAPY uses multiple topical and systemic agents to reduce aqueous production and facilitate outflow: (1) TOPICAL TIMOLOL (beta-blocker) and TOPICAL APRACLONIDINE (alpha-2 agonist) to decrease aqueous synthesis; (2) SYSTEMIC ACETAZOLAMIDE (IV carbonic anhydrase inhibitor) to suppress aqueous production; and (3) TOPICAL PILOCARPINE (muscarinic cholinergic agonist) to induce miosis, pulling the peripheral iris away from the trabecular meshwork (typically administered once IOP drops <40 mm Hg and pupillary sphincter ischemia resolves). Definitive curative therapy is BILATERAL LASER PERIPHERAL IRIDOTOMY."
      ],
      [
        "Topical atropine eye drops administered every 15 minutes to relieve ciliary spasm",
        "Atropine is a potent muscarinic antagonist that produces mydriasis (pupil dilation); it is strictly contraindicated because it precipitates total angle closure."
      ],
      [
        "Immediate retrobulbar alcohol injection to block ciliary ganglion sensory transmission",
        "Retrobulbar alcohol is a destructive procedure reserved for blind, painful eyes with end-stage absolute glaucoma, not acute reversible angle closure."
      ],
      [
        "Oral prednisone 60 mg daily combined with warm ocular compresses",
        "Corticosteroids are indicated for uveitis or arteritic anterior ischemic optic neuropathy, but do not relieve pupillary block in acute angle-closure glaucoma."
      ],
      [
        "Reassurance and discharge home with outpatient ophthalmology follow-up the next morning",
        "Untreated acute angle closure with an IOP of 58 mm Hg causes irreversible ischemic damage to the optic nerve head and blindness within hours."
      ]
    ],
    "shortestValidSolution": "Sudden eye pain + halos + steamy mid-dilated pupil + IOP 58 mmHg = Topical timolol/apraclonidine + IV acetazolamide + pilocarpine.",
    "necessaryInference": "Recognize acute angle-closure glaucoma and execute multi-agent medical decompression (timolol, apraclonidine, acetazolamide, pilocarpine) prior to laser iridotomy.",
    "strongestDistractor": "Topical atropine eye drops administered every 15 minutes to relieve ciliary spasm",
    "distractorExclusion": "Atropine is a strong mydriatic that bunches the peripheral iris and completely obstructs the trabecular meshwork, worsening acute glaucoma.",
    "citation": "Sharma S. Ophthaproblem. Acute angle-closure glaucoma. Can Fam Physician. 2000 Feb. PMID: 10690485.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 medicine item requiring multi-step deduction on acute angle-closure glaucoma medical decompression laser iridotomy.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  }
];
