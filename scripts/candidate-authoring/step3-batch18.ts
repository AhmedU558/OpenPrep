import { CandidateSpec } from './types';

export const step3Batch18: CandidateSpec[] = [
  {
    "code": "op-c-s3-0426",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Postoperative Fever Chronology and Evaluation",
    "subtopic": "Early Post-op Day 1-2 Fever, Atelectasis vs Cytokine Response, Antibiotic Stewardship",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman is admitted to the surgical ward following an uneventful elective open total abdominal hysterectomy and bilateral salpingo-oophorectomy for symptomatic uterine leiomyomata. On postoperative day (POD) 1, approximately 20 hours after surgery, the cross-covering resident is paged because the patient has developed a temperature of 38.4 C (101.1 F). She reports mild incisional discomfort well-controlled with oral acetaminophen and patient-controlled analgesia (hydromorphone), but has no shortness of breath, cough, chest pain, dysuria, or calf pain. Vital signs demonstrate blood pressure of 124/76 mm Hg, heart rate of 88/min, respiratory rate of 16/min, and oxygen saturation of 97% on ambient room air. Physical examination reveals an alert woman in no acute distress. Chest auscultation demonstrates faint vesicular breath sounds at the lung bases without crackles or wheezes. The surgical abdominal incision is clean, dry, and intact with mild expected surgical tenderness and no surrounding erythema, fluctuance, or purulent drainage. An indwelling Foley catheter drains clear yellow urine. The bilateral lower extremities are soft and non-tender with no swelling or erythema. The bedside nurse asks if broad-spectrum intravenous piperacillin-tazobactam and vancomycin should be initiated.\n\nWhich of the following represents the most appropriate management approach for this patient?",
    "choices": [
      [
        "Provide reassurance, encourage active bedside incentive spirometry, aggressive pulmonary toilet, and early out-of-bed ambulation, withholding empiric antimicrobial therapy and diagnostic imaging",
        "Postoperative fever evaluation follows a classic temporal chronology ('The 5 Ws'): (1) POSTOPERATIVE DAYS 1 TO 2 ('WIND' / PHYSIOLOGIC RESPONSE): Fevers occurring within the first 24 to 48 hours postoperatively are overwhelmingly NON-INFECTIOUS. They represent a benign, self-limited systemic inflammatory response syndrome (SIRS) driven by tissue injury, surgical trauma, and macrophage release of endogenous pyrogenic cytokines (IL-1, IL-6, TNF-alpha), often accompanied by dependent basilar alveolar collapse (atelectasis) from anesthesia and shallow splinting. (2) ANTIMICROBIAL STEWARDSHIP: True bacterial infections (pneumonia, surgical site infection, UTI) rarely manifest within the first 48 hours post-surgery. In a clinically stable, non-toxic patient with normal vital signs, oxygen saturation >= 95%, and a benign physical examination, ORDERING EXTENSIVE 'FEVER WORKUPS' (chest radiograph, urinalysis, blood cultures) AND INITIATING EMPIRIC BROAD-SPECTRUM ANTIBIOTICS REPRESENTS LOW-VALUE OVERTESTING AND HARMFUL OVERTREATMENT. Broad-spectrum antibiotics cause adverse drug events, promote Clostridioides difficile infection, and select for multidrug-resistant pathogens. (3) FIRST-LINE EVIDENCE-BASED CARE: Aggressive pulmonary toilet, deep breathing exercises, active bedside incentive spirometry (10 breaths every hour while awake), adequate multimodal analgesia to prevent splinting, and early progressive out-of-bed ambulation are the definitive interventions."
      ],
      [
        "Initiate intravenous vancomycin and piperacillin-tazobactam immediately for presumptive hospital-acquired sepsis",
        "Empiric broad-spectrum antibiotics on POD 1 in a stable, non-toxic patient with a clean surgical wound and normal oxygen saturation represent severe antibiotic overuse and increase risks of C. diff colitis."
      ],
      [
        "Order emergent computed tomography (CT) of the abdomen and pelvis with oral and intravenous contrast to rule out pelvic abscess",
        "Deep pelvic abscesses ('wound') typically present between postoperative days 5 and 10 with persistent high spiking fevers, leukocytosis, and localized tenderness; imaging on POD 1 is completely premature."
      ],
      [
        "Perform emergent bilateral lower-extremity venous duplex ultrasound to rule out acute deep vein thrombosis",
        "Venous thromboembolism ('walking') classically manifests between postoperative days 5 and 7; acute DVT on POD 1 in an asymptomatic patient without calf swelling is exceedingly rare."
      ],
      [
        "Remove the surgical dressings, probe the fascia with a sterile hemostat, and irrigate the wound with povidone-iodine",
        "Superficial or deep surgical site infections rarely occur before POD 4 to 7; disrupting a clean, intact, healing surgical incision on POD 1 introduces skin pathogens into the sterile wound bed."
      ]
    ],
    "rationale": "Fevers on postoperative days 1-2 are almost always benign, self-limited non-infectious inflammatory responses to surgical tissue trauma and atelectasis. In a clinically stable patient with normal oxygen saturation, uninfected wound, and clear chest, extensive diagnostic testing and empiric broad-spectrum antibiotics are inappropriate overtreatment. Management focuses on incentive spirometry, deep breathing, adequate pain control to prevent splinting, and early ambulation. Infectious causes (UTI, surgical site infection, abscess) present later (POD 3-10).",
    "metadata": {
      "shortSolution": "POD 1 low-grade fever with normal exam and SpO2 97% is physiologic/atelectatic; manage with incentive spirometry and ambulation; withhold empiric broad-spectrum antibiotics.",
      "competingChoice": "Initiate intravenous vancomycin and piperacillin-tazobactam immediately for presumptive hospital-acquired sepsis",
      "exclusionFinding": "Bacterial infections rarely manifest on POD 1; empiric broad-spectrum antibiotics represent inappropriate overtreatment in a clinically stable patient.",
      "pedagogicalValue": "Recognizing the chronology of postoperative fever: POD 1-2 fevers are non-infectious/atelectatic and require pulmonary toilet and ambulation, not antibiotics.",
      "citations": [
        "Clarke SM, Goldstein SL, Balentine CJ, et al. Postoperative Fever: A Systematic Approach to Diagnosis and Management. Surg Clin North Am. 2021;101(4):659-670. PMID: 34243851.",
        "Pile JC. Evaluating postoperative fever: a focused approach. Cleve Clin J Med. 2006;73 Suppl 1:S62-S66. PMID: 16570551."
      ]
    },
    "critique": {
      "shortestValidSolution": "POD 1 fever in stable patient -> incentive spirometry + early ambulation; withhold antibiotics and invasive workups.",
      "strongestCompetitor": "Initiate intravenous vancomycin and piperacillin-tazobactam immediately for presumptive hospital-acquired sepsis",
      "exclusionFinding": "POD 1 fever is physiologic/atelectatic; empiric antibiotics are inappropriate overtreatment.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: POD 1 low-grade fever with normal exam and SpO2 97% is physiologic/atelectatic; manage with incentive spirometry and ambulation; withhold empiric broad-spectrum antibiotics.",
      "distractorExclusionNotes": "Distractor exclusion verified: Bacterial infections rarely manifest on POD 1; empiric broad-spectrum antibiotics represent inappropriate overtreatment in a clinically stable patient.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "POD 1 low-grade fever with normal exam and SpO2 97% is physiologic/atelectatic; manage with incentive spirometry and ambulation; withhold empiric broad-spectrum antibiotics.",
    "necessaryInference": "POD 1 low-grade fever with normal exam and SpO2 97% is physiologic/atelectatic; manage with incentive spirometry and ambulation; withhold empiric broad-spectrum antibiotics.",
    "strongestDistractor": "Initiate intravenous vancomycin and piperacillin-tazobactam immediately for presumptive hospital-acquired sepsis",
    "distractorExclusion": "Bacterial infections rarely manifest on POD 1; empiric broad-spectrum antibiotics represent inappropriate overtreatment in a clinically stable patient.",
    "citation": "Clarke SM, Goldstein SL, Balentine CJ, et al. Postoperative Fever: A Systematic Approach to Diagnosis and Management. Surg Clin North Am. 2021;101(4):659-670. PMID: 34243851."
  },
  {
    "code": "op-c-s3-0427",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Behavioral Health",
    "topic": "Geriatric Hospital Delirium Cross-Coverage and Antipsychotic Stewardship",
    "subtopic": "Sundowning Agitation, HELP Delirium Bundle, Reserving Antipsychotics for Safety Threats",
    "provisionalDifficulty": 5,
    "stem": "An 83-year-old woman with mild vascular dementia is hospitalized on the medical floor on hospital day 2 for treatment of acute pyelonephritis with intravenous ceftriaxone. At 11:30 PM, the cross-covering physician is paged by the night nurse because the patient has become agitated, is yelling that 'intruders are hiding in the closet,' and is attempting to climb over the raised bed rails. On arrival, the patient is disoriented, misidentifying the nurse as her sister, and exhibits fluctuating attention. Vital signs show blood pressure of 136/82 mm Hg, heart rate of 88/min, respiratory rate of 18/min, temperature of 37.4 C (99.3 F), and oxygen saturation of 97% on ambient air. Physical examination reveals no focal neurological deficits, no abdominal rigidity, and no signs of acute urinary retention. Point-of-care blood glucose is 112 mg/dL. Her peripheral IV is intact, and she does not have an indwelling urinary catheter. The nurse requests an urgent order for 'intravenous haloperidol 5 mg or lorazepam 2 mg' to keep the patient calm in bed.\n\nWhich of the following represents the most appropriate initial management approach for this patient?",
    "choices": [
      [
        "Assign a dedicated one-on-one bedside observer (sitter), dim room lighting, reorient the patient, lower the bed to the floor, ensure sensory aids (eyeglasses and hearing aids) are provided, and decline routine chemical restraints",
        "Hospital Delirium is an acute, fluctuating neurocognitive disturbance common in hospitalized older adults with underlying dementia. (1) PATHOPHYSIOLOGY AND PHENOMENOLOGY: Worsening confusion and agitation in the evening/night ('sundowning') is triggered by sensory deprivation, circadian rhythm disruption, sleep fragmentation, and acute medical illness (pyelonephritis). (2) FIRST-LINE NON-PHARMACOLOGICAL MANAGEMENT (AMERICAN GERIATRICS SOCIETY GUIDELINES): The evidence-based Hospital Elder Life Program (HELP) bundle represents the gold standard: (a) Constant presence: One-on-one bedside observer (sitter) or encouraging a familiar family member to stay at the bedside; (b) Environmental optimization: Dimming room lights at night, minimizing noise, turning off television, keeping the bed in the lowest possible position with floor mats (to prevent fall trauma without physical restraints); (c) Sensory restoration: Providing eyeglasses and functioning hearing aids to decrease perceptual misinterpretations and visual illusions; (d) Verbal de-escalation: Frequent, calm, reassuring reorientation by staff. (3) ANTIPSYCHOTIC STEWARDSHIP: Large randomized placebo-controlled trials (such as Girard et al., NEJM 2018) prove that ANTIPSYCHOTICS (haloperidol, olanzapine) DO NOT SHORTEN DELIRIUM DURATION OR REDUCE MORTALITY, and they carry severe risks: extrapyramidal symptoms, QTc prolongation, and an FDA black-box warning for excess mortality in elderly patients with dementia. Antipsychotics should be strictly reserved as an emergency last resort for severe refractory combativeness that poses an immediate, serious physical danger to the patient or staff. (4) BENZODIAZEPINE CONTRAINDICATION: Benzodiazepines (lorazepam) cause paradoxical disinhibition, worsen delirium, and significantly increase fall and hip fracture rates; they are strictly contraindicated in delirium (except for alcohol/sedative withdrawal)."
      ],
      [
        "Administer intravenous haloperidol 5 mg every 4 hours scheduled to maintain behavioral compliance",
        "Scheduled high-dose haloperidol does not shorten delirium, causes severe extrapyramidal reactions and torsades de pointes, and increases mortality in dementia (FDA black box warning)."
      ],
      [
        "Administer intravenous lorazepam 2 mg immediately as first-line sedative therapy",
        "Benzodiazepines are major precipitants of delirium in elderly patients and cause paradoxical disinhibition, respiratory depression, and fall injuries; they are contraindicated for routine delirium."
      ],
      [
        "Apply four-point physical wrist and ankle restraints to securely immobilize the patient in bed",
        "Physical restraints increase agitation, delirium severity, physical struggle, strangulation risk, pressure ulcers, and aspiration; they should not be used as substitutes for non-pharmacological care."
      ],
      [
        "Administer oral diphenhydramine 50 mg to induce rapid nighttime sedation",
        "Diphenhydramine is a potent anticholinergic agent (Beers Criteria PIM) that severely impairs central cholinergic neurotransmission, worsening acute delirium and precipitating urinary retention."
      ]
    ],
    "rationale": "Inpatient delirium (acute fluctuating inattention/agitation) is managed first-line with multicomponent non-pharmacological interventions: one-on-one observer (sitter), sensory aid replacement (glasses, hearing aids), verbal reorientation, sleep hygiene, and lowering the bed. Randomized clinical trials (Girard et al.) show that antipsychotics (haloperidol) do not shorten delirium duration or reduce mortality and carry serious risks (QTc prolongation, extrapyramidal symptoms, mortality warning in dementia). Benzodiazepines paradoxically worsen delirium (contraindicated except in alcohol withdrawal). Physical restraints worsen agitation.",
    "metadata": {
      "shortSolution": "Elderly patient with nocturnal delirium/agitation requires multicomponent non-pharmacologic interventions (sitter, reorientation, sensory aids, low bed); avoid routine haloperidol or benzodiazepines.",
      "competingChoice": "Administer intravenous haloperidol 5 mg every 4 hours scheduled to maintain behavioral compliance",
      "exclusionFinding": "Antipsychotics carry an FDA black box warning in dementia, do not shorten delirium duration, and cause severe adverse events; non-pharmacological care is first-line.",
      "pedagogicalValue": "Mastering non-pharmacological first-line management of hospital delirium and recognizing the strict limitations and harms of antipsychotics and benzodiazepines in older adults.",
      "citations": [
        "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774.",
        "Girard TD, Exline MC, Carson SS, et al. Haloperidol and Ziprasidone for Treatment of Delirium in Critical Illness. N Engl J Med. 2018;379(26):2506-2516. PMID: 30346242."
      ]
    },
    "critique": {
      "shortestValidSolution": "Nocturnal delirium agitation -> non-pharmacologic bundle (sitter, reorientation, glasses/hearing aids, low bed); decline haloperidol/lorazepam.",
      "strongestCompetitor": "Administer intravenous haloperidol 5 mg every 4 hours scheduled to maintain behavioral compliance",
      "exclusionFinding": "Antipsychotics do not shorten delirium duration and carry black-box mortality warnings in dementia; non-pharmacologic care is standard.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly patient with nocturnal delirium/agitation requires multicomponent non-pharmacologic interventions (sitter, reorientation, sensory aids, low bed); avoid routine haloperidol or benzodiazepines.",
      "distractorExclusionNotes": "Distractor exclusion verified: Antipsychotics carry an FDA black box warning in dementia, do not shorten delirium duration, and cause severe adverse events; non-pharmacological care is first-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly patient with nocturnal delirium/agitation requires multicomponent non-pharmacologic interventions (sitter, reorientation, sensory aids, low bed); avoid routine haloperidol or benzodiazepines.",
    "necessaryInference": "Elderly patient with nocturnal delirium/agitation requires multicomponent non-pharmacologic interventions (sitter, reorientation, sensory aids, low bed); avoid routine haloperidol or benzodiazepines.",
    "strongestDistractor": "Administer intravenous haloperidol 5 mg every 4 hours scheduled to maintain behavioral compliance",
    "distractorExclusion": "Antipsychotics carry an FDA black box warning in dementia, do not shorten delirium duration, and cause severe adverse events; non-pharmacological care is first-line.",
    "citation": "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014;383(9920):911-922. PMID: 23992774."
  },
  {
    "code": "op-c-s3-0428",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Severe Symptomatic Hyponatremia and Osmotic Demyelination Syndrome Prevention",
    "subtopic": "3% Hypertonic Saline Boluses, Target Rate of Correction < 8 mEq/L/24h, Seizure Management",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman with a history of hypertension treated with hydrochlorothiazide 25 mg daily is brought to the emergency department by ambulance after experiencing a witnessed 2-minute generalized tonic-clonic seizure at home. On arrival, she is postictal, stuporous, and unresponsive to verbal questions, withdrawing only to painful stimuli (Glasgow Coma Scale score 8: E2V2M4). While in the resuscitation bay, she begins actively having a second generalized convulsive seizure. Vital signs reveal blood pressure of 144/88 mm Hg, heart rate of 106/min, respiratory rate of 20/min, and oxygen saturation of 96% on a non-rebreather mask. Physical examination shows no focal lateralizing neurological signs; pupils are 3 mm and reactive. Emergent point-of-care laboratory evaluation demonstrates:\n- Serum sodium: 112 mEq/L (severely decreased; normal 135 to 145 mEq/L)\n- Serum potassium: 3.4 mEq/L\n- Serum chloride: 76 mEq/L\n- Serum bicarbonate: 24 mEq/L\n- Blood urea nitrogen: 10 mg/dL\n- Serum creatinine: 0.7 mg/dL\n- Blood glucose: 104 mg/dL\n- Serum osmolality: 234 mOsm/kg (hypoosmolar)\n\nWhich of the following represents the most appropriate immediate sodium correction strategy to terminate her seizure and prevent permanent neurological disability?",
    "choices": [
      [
        "Administer an immediate intravenous bolus of 100 mL of 3% hypertonic saline over 10 minutes (repeatable up to two additional times if seizures persist) targeting an acute sodium rise of 4 to 6 mEq/L, while strictly capping the total sodium increase at <= 8 mEq/L within the first 24 hours",
        "Severe Symptomatic Hyponatremia (serum sodium < 120 mEq/L with severe neurological symptoms such as seizures, coma, or respiratory arrest) represents an acute neurosurgical and medical emergency caused by acute cerebral edema: (1) PATHOPHYSIOLOGY OF BRAIN EDEMA: Hypotonic extracellular fluid drives water movement across the blood-brain barrier into astrocytes via aquaporin-4 channels, causing brain cell swelling, increased intracranial pressure, tentorial herniation, and death. (2) IMMEDIATE RESCUE PROTOCOL (CONSENSUS GUIDELINES): In patients with active seizures, the immediate goal is NOT to normalize the sodium, but to RAPIDLY RAISE SERUM SODIUM BY 4 TO 6 mEq/L to abruptly reverse cerebral swelling and terminate seizures. Guidelines (US and European Hyponatremia Guidelines) mandate: (a) Administer an IMMEDIATE INTRAVENOUS BOLUS of 100 mL of 3% HYPERTONIC SALINE infused over 10 minutes; (b) This 100-mL bolus may be repeated up to two additional times at 10-minute intervals (total up to 300 mL) until the seizure stops or the serum sodium increases by 4 to 6 mEq/L. (3) STRICT LIMITS TO PREVENT OSMOTIC DEMYELINATION SYNDROME (ODS): Over days, brain cells adapt to chronic hyponatremia by extruding intracellular organic osmolytes (myoinositol, glutamate, taurine). If serum sodium is corrected too rapidly, the hypertonic extracellular fluid draws water out of adapted astrocytes and oligodendrocytes, precipitating OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis), causing irreversible spastic quadriparesis, pseudobulbar palsy, 'locked-in' syndrome, and death. GUIDELINE CEILING: TOTAL SERUM SODIUM CORRECTION MUST NOT EXCEED 8 mEq/L IN ANY 24-HOUR PERIOD (or <= 6 mEq/L in high-risk patients with malnutrition, alcoholism, or hypokalemia)."
      ],
      [
        "Administer 0.9% normal saline at 250 mL/hour continuously over the next 24 hours to gradually correct intravascular volume",
        "Normal saline (0.9% NaCl; osmolarity 308 mOsm/L) is ineffective for acute hyponatremic seizures, fails to rapidly raise sodium by 4-6 mEq/L, and can paradoxically worsen hyponatremia if free water is excreted slower than sodium."
      ],
      [
        "Administer a continuous infusion of 3% hypertonic saline targeting full normalization of serum sodium to 138 mEq/L within the first 12 hours",
        "Rapidly normalizing sodium by 26 mEq/L in 12 hours causes massive oligodendrocyte dehydration and fatal Osmotic Demyelination Syndrome (central pontine myelinolysis); correction must be capped at <= 8 mEq/L in 24 hours."
      ],
      [
        "Administer oral tolvaptan 15 mg immediately via nasogastric tube to induce rapid aquaresis",
        "Vasopressin V2 receptor antagonists (vaptans) carry an unpredictable, erratic onset and high risk of rapid overcorrection; guidelines explicitly state vaptans are contraindicated in severe symptomatic hyponatremia."
      ],
      [
        "Administer intravenous desmopressin (dDAVP) 2 mcg bolus combined with free water administration",
        "Desmopressin and free water are 'rescue strategies' used to halt overcorrection when sodium rises too fast; administering them to a patient actively seizing from sodium 112 mEq/L will cause fatal brain herniation."
      ]
    ],
    "rationale": "Severe symptomatic hyponatremia (sodium < 120 mEq/L with seizures/coma) causes cerebral edema. Immediate management mandates rapid partial correction using boluses of 3% hypertonic saline (100 mL IV over 10 min, repeatable up to 3 times) to raise serum sodium by 4 to 6 mEq/L, which relieves cerebral edema and terminates seizures. Crucially, the total correction over the first 24 hours must be strictly capped at <= 8 mEq/L (or <= 6 mEq/L in high-risk patients) to prevent catastrophic Osmotic Demyelination Syndrome (central pontine myelinolysis). Vaptans are contraindicated in acute severe hyponatremia.",
    "metadata": {
      "shortSolution": "Active hyponatremic seizure (Na 112) requires 100-mL boluses of 3% hypertonic saline to raise Na by 4-6 mEq/L, with total 24-hour correction capped at <= 8 mEq/L to prevent osmotic demyelination syndrome.",
      "competingChoice": "Administer a continuous infusion of 3% hypertonic saline targeting full normalization of serum sodium to 138 mEq/L within the first 12 hours",
      "exclusionFinding": "Normalizing sodium by 26 mEq/L in 12 hours causes fatal Osmotic Demyelination Syndrome (central pontine myelinolysis); guidelines cap total 24-hour correction at <= 8 mEq/L.",
      "pedagogicalValue": "Mastering the protocol for hyponatremic seizures: 100 mL 3% NaCl boluses targeting an acute 4-6 mEq/L rise, with a strict ceiling of <= 8 mEq/L/24h to avoid ODS.",
      "citations": [
        "Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47. PMID: 24569125.",
        "Verbalis JG, Goldsmith SR, Bustamante A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-S42. PMID: 24074529."
      ]
    },
    "critique": {
      "shortestValidSolution": "Hyponatremic seizure (Na 112) -> 100 mL 3% NaCl bolus (raise Na 4-6 mEq/L to stop seizure); cap total 24h rise at <= 8 mEq/L (prevent ODS).",
      "strongestCompetitor": "Administer a continuous infusion of 3% hypertonic saline targeting full normalization of serum sodium to 138 mEq/L within the first 12 hours",
      "exclusionFinding": "Rapid normalization causes fatal osmotic demyelination syndrome; correction must not exceed 8 mEq/L in 24 hours.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Active hyponatremic seizure (Na 112) requires 100-mL boluses of 3% hypertonic saline to raise Na by 4-6 mEq/L, with total 24-hour correction capped at <= 8 mEq/L to prevent osmotic demyelination syndrome.",
      "distractorExclusionNotes": "Distractor exclusion verified: Normalizing sodium by 26 mEq/L in 12 hours causes fatal Osmotic Demyelination Syndrome (central pontine myelinolysis); guidelines cap total 24-hour correction at <= 8 mEq/L.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Active hyponatremic seizure (Na 112) requires 100-mL boluses of 3% hypertonic saline to raise Na by 4-6 mEq/L, with total 24-hour correction capped at <= 8 mEq/L to prevent osmotic demyelination syndrome.",
    "necessaryInference": "Active hyponatremic seizure (Na 112) requires 100-mL boluses of 3% hypertonic saline to raise Na by 4-6 mEq/L, with total 24-hour correction capped at <= 8 mEq/L to prevent osmotic demyelination syndrome.",
    "strongestDistractor": "Administer a continuous infusion of 3% hypertonic saline targeting full normalization of serum sodium to 138 mEq/L within the first 12 hours",
    "distractorExclusion": "Normalizing sodium by 26 mEq/L in 12 hours causes fatal Osmotic Demyelination Syndrome (central pontine myelinolysis); guidelines cap total 24-hour correction at <= 8 mEq/L.",
    "citation": "Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47. PMID: 24569125."
  },
  {
    "code": "op-c-s3-0429",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Postoperative Acute Kidney Injury (AKI) Differentiation",
    "subtopic": "Prerenal Azotemia vs ATN, FeNa vs FeUrea on Diuretics, Muddy Brown Casts",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman with a history of heart failure with preserved ejection fraction (HFpEF) managed with oral furosemide 40 mg daily and lisinopril 20 mg daily undergoes an uncomplicated elective open left total hip arthroplasty. Intraoperative blood loss was 450 mL, and she received 1,500 mL of lactated Ringer solution. On postoperative day 2, routine laboratory studies reveal an acute elevation of serum creatinine from her baseline of 0.9 mg/dL to 2.2 mg/dL, accompanied by a blood urea nitrogen (BUN) of 38 mg/dL. Her urine output over the past 12 hours has been 250 mL (0.35 mL/kg/h). Her home furosemide was administered yesterday morning. Physical examination reveals blood pressure of 114/72 mm Hg, heart rate of 82/min, jugular venous pressure of 6 cm H2O, clear lungs, and trace ankle edema. The surgical incision is clean. Urinary diagnostic indices demonstrate:\n- Urine sodium: 48 mEq/L\n- Fractional excretion of sodium (FeNa): 2.4% (elevated; > 2%)\n- Fractional excretion of urea (FeUrea): 24% (normal < 35% indicates prerenal physiology)\n- Urine osmolality: 540 mOsm/kg H2O (concentrated; > 500 mOsm/kg)\n- Microscopic urinalysis of uncentrifuged urine: Normal-appearing hyaline casts; completely negative for muddy brown granular casts or renal tubular epithelial cells\n\nWhich of the following mechanisms best explains why the fractional excretion of sodium (FeNa) is misleadingly elevated (> 2%) in this patient with true prerenal azotemia?",
    "choices": [
      [
        "Recent administration of a loop diuretic (furosemide) inhibits the Na-K-2Cl cotransporter in the thick ascending limb of Henle, causing pharmacologically driven natriuresis that elevates FeNa despite avid neurohormonal tubular sodium reabsorption",
        "Acute Kidney Injury (AKI) requires distinguishing Prerenal Azotemia (renal hypoperfusion with intact tubular function) from Acute Tubular Necrosis (ATN; intrinsic ischemic or nephrotoxic tubular injury): (1) CLASSICAL INDICES: In a patient NOT receiving diuretics, Prerenal Azotemia features: FeNa < 1%, Urine Na < 20 mEq/L, BUN/Cr ratio > 20:1, Urine Osmolality > 500 mOsm/kg, and bland hyaline casts. ATN features: FeNa > 2%, Urine Na > 40 mEq/L, Urine Osmolality < 350 mOsm/kg, and pathognomonic muddy brown granular casts or renal tubular epithelial cells. (2) THE DIURETIC CONFOUNDER: Loop diuretics (furosemide, bumetanide) reversibly block the luminal Na-K-2Cl cotransporter in the thick ascending limb, preventing sodium reabsorption. Consequently, even when severe intravascular volume depletion is present, loop diuretics FORCE SODIUM INTO THE URINE, elevating urine sodium (> 40 mEq/L) and falsely elevating FeNa (> 2%), rendering FeNa completely unreliable and uninterpretable. (3) FRACTIONAL EXCRETION OF UREA (FeUrea): In patients on diuretics, FeUrea is the diagnostic test of choice. Urea reabsorption occurs predominantly in the proximal tubule and inner medullary collecting duct, processes regulated by neurohormonal activation (angiotensin II, vasopressin) and entirely independent of loop diuretic action. A FeUrea < 35% (here 24%) combined with high urine osmolality (540 mOsm/kg) and absence of muddy brown casts definitively proves PRERENAL AZOTEMIA. Treatment requires isotonic fluid restoration and temporary suspension of diuretics and ACE inhibitors."
      ],
      [
        "Direct ischemic necrosis of proximal convoluted tubule cells causing loss of the brush border and complete inability to reabsorb filtered urea",
        "Ischemic ATN causes tubular cell sloughing, impaired urine concentrating ability (urine osmolality < 350 mOsm/kg), and muddy brown granular casts, all of which are absent in this patient with concentrated urine (540 mOsm/kg) and low FeUrea (24%)."
      ],
      [
        "Glomerular hyperfiltration secondary to lisinopril-induced preferential efferent arteriolar vasoconstriction",
        "ACE inhibitors (lisinopril) inhibit angiotensin II, causing preferential efferent arteriolar VASODILATION (not constriction), which decreases intraglomerular filtration pressure."
      ],
      [
        "Acute interstitial nephritis mediated by an idiosyncratic delayed hypersensitivity reaction to cefazolin",
        "Acute interstitial nephritis features fever, rash, eosinophilia, pyuria, and WBC casts on urine microscopy, which are completely absent in this patient."
      ],
      [
        "Mechanical bilateral ureteral obstruction caused by pelvic hematoma formation",
        "Post-renal obstructive uropathy does not explain a concentrated urine osmolality > 500 mOsm/kg with low FeUrea, and is ruled out by normal bladder scanning and imaging."
      ]
    ],
    "rationale": "In evaluating AKI, FeNa is normally < 1% in prerenal azotemia and > 2% in ATN. However, loop diuretics (furosemide) block the Na-K-2Cl cotransporter in the loop of Henle, causing pharmacologic natriuresis that elevates urine sodium and raises FeNa > 2% even in true prerenal azotemia. In patients receiving diuretics, the Fractional Excretion of Urea (FeUrea) is the gold standard diagnostic index: FeUrea < 35% (here 24%) and urine osmolality > 500 mOsm/kg confirm prerenal physiology, because proximal tubular urea reabsorption is unaffected by loop diuretics. Bland sediment and absence of muddy brown casts confirm intact tubules.",
    "metadata": {
      "shortSolution": "Patient on furosemide with AKI has FeNa 2.4% but FeUrea 24% (< 35%) and urine osm 540; FeNa is falsely elevated by loop diuretic-induced natriuresis, while FeUrea confirms prerenal azotemia.",
      "competingChoice": "Direct ischemic necrosis of proximal convoluted tubule cells causing loss of the brush border and complete inability to reabsorb filtered urea",
      "exclusionFinding": "Tubular necrosis (ATN) causes dilute urine (osm < 350) and muddy brown casts; urine osm 540 and bland sediment with low FeUrea rule out ATN and prove prerenal state.",
      "pedagogicalValue": "Understanding why FeNa is invalid in patients receiving loop diuretics and using FeUrea (< 35%) to accurately diagnose prerenal azotemia.",
      "citations": [
        "Carvounis CP, Nisar S, Guro-Razuman S. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int. 2002;62(6):2223-2229. PMID: 12427149.",
        "P\u00e9pin MN, Bouchard J, Legault L, Ethier J. Diagnostic performance of fractional excretion of urea and fractional excretion of sodium in the evaluations of patients with acute kidney injury with or without diuretic therapy. Nephrol Dial Transplant. 2007;22(2):433-438. PMID: 17095537."
      ]
    },
    "critique": {
      "shortestValidSolution": "AKI on furosemide + FeNa > 2% but FeUrea 24% (< 35%) + concentrated urine -> FeNa falsely elevated by diuretic; FeUrea confirms prerenal azotemia.",
      "strongestCompetitor": "Direct ischemic necrosis of proximal convoluted tubule cells causing loss of the brush border and complete inability to reabsorb filtered urea",
      "exclusionFinding": "ATN presents with dilute urine (< 350) and muddy brown casts; high urine osm and low FeUrea confirm prerenal azotemia.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient on furosemide with AKI has FeNa 2.4% but FeUrea 24% (< 35%) and urine osm 540; FeNa is falsely elevated by loop diuretic-induced natriuresis, while FeUrea confirms prerenal azotemia.",
      "distractorExclusionNotes": "Distractor exclusion verified: Tubular necrosis (ATN) causes dilute urine (osm < 350) and muddy brown casts; urine osm 540 and bland sediment with low FeUrea rule out ATN and prove prerenal state.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient on furosemide with AKI has FeNa 2.4% but FeUrea 24% (< 35%) and urine osm 540; FeNa is falsely elevated by loop diuretic-induced natriuresis, while FeUrea confirms prerenal azotemia.",
    "necessaryInference": "Patient on furosemide with AKI has FeNa 2.4% but FeUrea 24% (< 35%) and urine osm 540; FeNa is falsely elevated by loop diuretic-induced natriuresis, while FeUrea confirms prerenal azotemia.",
    "strongestDistractor": "Direct ischemic necrosis of proximal convoluted tubule cells causing loss of the brush border and complete inability to reabsorb filtered urea",
    "distractorExclusion": "Tubular necrosis (ATN) causes dilute urine (osm < 350) and muddy brown casts; urine osm 540 and bland sediment with low FeUrea rule out ATN and prove prerenal state.",
    "citation": "Carvounis CP, Nisar S, Guro-Razuman S. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int. 2002;62(6):2223-2229. PMID: 12427149."
  },
  {
    "code": "op-c-s3-0430",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Limb Ischemia (ALI) Emergency Management",
    "subtopic": "Rutherford Classification, Immediate Heparin Anticoagulation, Emergent Revascularization",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old man with a history of non-valvular atrial fibrillation who stopped taking his prescribed apixaban 3 weeks ago due to financial constraints presents to the emergency department with sudden, severe pain in his right leg that began 3 hours ago. He describes that his right foot went suddenly cold and numb. On physical examination, he is in excruciating pain. Vital signs demonstrate blood pressure of 148/86 mm Hg, irregularly irregular heart rate of 102/min, and respiratory rate of 20/min. Physical examination of the right lower extremity reveals a cold, pale, marble-like leg from the mid-calf down to the toes (pallor and poikilothermia). Sensation to light touch and pinprick is diminished over the right dorsal and plantar foot, but motor strength of the toes and ankle is preserved (Rutherford Class IIa: marginally threatened limb). The right femoral pulse is palpable, but right popliteal, dorsalis pedis, and posterior tibial pulses are completely absent to palpation and produce no audible arterial signals on handheld bedside Doppler ultrasound. Left lower extremity pulses are normal.\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediate intravenous administration of an unfractionated heparin bolus followed by a continuous therapeutic infusion, and emergent vascular surgery consultation for revascularization (catheter-directed thrombolysis or surgical thromboembolectomy)",
        "Acute Limb Ischemia (ALI) is defined as a sudden decrease in limb perfusion that threatens the viability of the extremity, presenting with the classic '6 Ps': Pain, Pallor, Poikilothermia (coldness), Pulselessness, Paresthesias, and Paralysis. In a patient with atrial fibrillation not on anticoagulation, cardiogenic thromboembolism (typically occluding the femoral artery bifurcation or popliteal artery) is the predominant cause. (1) SKELETAL MUSCLE ISCHEMIA TOLERANCE: Skeletal muscle and peripheral nerves tolerate ischemia for only 4 to 6 HOURS before irreversible cellular necrosis, muscle rigor, permanent foot drop, and limb amputation occur. (2) IMMEDIATE ANTICOAGULATION: As soon as acute limb ischemia is clinically suspected, IMMEDIATE INTRAVENOUS UNFRACTIONATED HEPARIN (weight-based bolus of 80 units/kg followed by continuous infusion of 18 units/kg/h) MUST BE INITIATED WITHOUT DELAY. Heparin prevents propagation and elongation of the thrombus into distal microvascular collateral beds and arrests further appositional clotting. (3) RUTHERFORD VIABILITY CLASSIFICATION: Class I (viable; no sensory/motor loss), Class IIa (marginally threatened; sensory loss in toes, motor intact, salvageable if treated promptly), Class IIb (immediately threatened; motor weakness/rest pain, requires emergent revascularization), Class III (irreversible; profound paralysis, rigor, anesthetic; requires primary amputation). Because this patient has sensory loss with intact motor (Class IIa), his limb is viable and acutely salvageable. (4) EMERGENT REVASCULARIZATION: Emergent vascular surgery consultation is mandatory to decide between catheter-directed thrombolysis (alteplase infusion into the clot) or surgical balloon catheter thromboembolectomy (Fogarty catheter)."
      ],
      [
        "Apply a rigid warming blanket directly to the right leg and elevate the limb on three pillows above heart level",
        "Direct thermal warming increases metabolic demand of ischemic tissue, accelerating tissue necrosis, and elevating an ischemic limb decreases arterial hydrostatic perfusion; the leg should be kept dependent and at room temperature."
      ],
      [
        "Order an elective outpatient lower-extremity arterial duplex ultrasound and restart oral apixaban 5 mg twice daily",
        "ALI is an acute surgical emergency with a 4- to 6-hour limb-salvage window; outpatient scheduling results in complete muscle necrosis, compartment syndrome, and above-knee amputation."
      ],
      [
        "Administer intramuscular morphine 10 mg every 2 hours and observe for 24 hours to assess if collateral vessels compensate",
        "Observing an acutely ischemic limb with absent arterial Doppler signals guarantees irreversible neuromuscular gangrene within hours; emergent revascularization is required."
      ],
      [
        "Perform immediate bedside fasciotomies of the anterior and lateral compartments before initiating any anticoagulation",
        "Prophylactic fasciotomy is performed in the operating room AFTER arterial revascularization to manage reperfusion injury/compartment syndrome; performing bedside fasciotomies prior to restoring arterial flow does not reperfuse the limb."
      ]
    ],
    "rationale": "Acute limb ischemia (the 6 Ps: pain, pallor, poikilothermia, pulselessness, paresthesias, paralysis) has a critical 4-6 hour window before irreversible muscle necrosis occurs. Cardiogenic emboli from atrial fibrillation typically lodge in the femoral or popliteal bifurcations. Immediate management mandates: (1) Immediate IV unfractionated heparin bolus and infusion to prevent clot propagation, and (2) Emergent vascular surgical consultation for revascularization (catheter-directed thrombolysis or surgical embolectomy). Direct warming and elevation are contraindicated (keep limb slightly dependent).",
    "metadata": {
      "shortSolution": "Acute limb ischemia (cold, pale, pulseless right foot in AF patient) requires immediate IV unfractionated heparin bolus/infusion and emergent vascular surgical revascularization within 4-6 hours.",
      "competingChoice": "Apply a rigid warming blanket directly to the right leg and elevate the limb on three pillows above heart level",
      "exclusionFinding": "Direct warming increases tissue metabolic demand in an ischemic limb, accelerating necrosis, and elevation decreases arterial flow; the limb must be kept dependent and anticoagulated immediately.",
      "pedagogicalValue": "Mastering emergency management of acute limb ischemia: immediate IV heparin to prevent thrombus propagation and emergent vascular revascularization within 4-6 hours.",
      "citations": [
        "Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease: Executive Summary. Circulation. 2017;135(12):e686-e725. PMID: 27840332.",
        "Rutherford RB, Baker JD, Ernst C, et al. Recommended standards for reports dealing with lower extremity ischemia: revised version. J Vasc Surg. 1997;26(3):517-538. PMID: 9308598."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute limb ischemia (6 Ps, absent Doppler) -> immediate IV unfractionated heparin + emergent vascular revascularization (< 4-6h window).",
      "strongestCompetitor": "Apply a rigid warming blanket directly to the right leg and elevate the limb on three pillows above heart level",
      "exclusionFinding": "Warming increases metabolic oxygen demand and elevation reduces perfusion; heparin and emergent revascularization are mandatory.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute limb ischemia (cold, pale, pulseless right foot in AF patient) requires immediate IV unfractionated heparin bolus/infusion and emergent vascular surgical revascularization within 4-6 hours.",
      "distractorExclusionNotes": "Distractor exclusion verified: Direct warming increases tissue metabolic demand in an ischemic limb, accelerating necrosis, and elevation decreases arterial flow; the limb must be kept dependent and anticoagulated immediately.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute limb ischemia (cold, pale, pulseless right foot in AF patient) requires immediate IV unfractionated heparin bolus/infusion and emergent vascular surgical revascularization within 4-6 hours.",
    "necessaryInference": "Acute limb ischemia (cold, pale, pulseless right foot in AF patient) requires immediate IV unfractionated heparin bolus/infusion and emergent vascular surgical revascularization within 4-6 hours.",
    "strongestDistractor": "Apply a rigid warming blanket directly to the right leg and elevate the limb on three pillows above heart level",
    "distractorExclusion": "Direct warming increases tissue metabolic demand in an ischemic limb, accelerating necrosis, and elevation decreases arterial flow; the limb must be kept dependent and anticoagulated immediately.",
    "citation": "Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease: Executive Summary. Circulation. 2017;135(12):e686-e725. PMID: 27840332."
  },
  {
    "code": "op-c-s3-0431",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Inpatient Glycemic Management in Non-Critically Ill Patients",
    "subtopic": "Scheduled Basal-Bolus Regimen vs Sliding-Scale Regular Insulin, RABBIT-2 Trial",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman with a 10-year history of type 2 diabetes mellitus is admitted to the medical ward on hospital day 1 for treatment of community-acquired pneumonia with intravenous ceftriaxone and azithromycin. Her home diabetes medications include metformin 1,000 mg twice daily and glimepiride 4 mg daily. Her baseline outpatient HbA1c is 8.6%. On admission, metformin and glimepiride were withheld. She is taking a regular diabetic diet. Point-of-care capillary blood glucose readings on day 1 have fluctuated between 210 mg/dL and 280 mg/dL. The admitting intern placed an order for 'sliding-scale regular insulin (SSI) monotherapy before meals and at bedtime' with no scheduled basal insulin. On hospital day 2, blood glucose readings remain persistently elevated at 220 to 260 mg/dL. Physical examination reveals an alert woman with resolving fever. Serum creatinine is 1.0 mg/dL.\n\nBased on landmark randomized clinical trial evidence (the RABBIT-2 trial) and current American Diabetes Association (ADA) inpatient guidelines, which of the following represents the most appropriate glycemic management strategy for this patient?",
    "choices": [
      [
        "Discontinue sliding-scale insulin monotherapy and initiate a scheduled physiologic insulin regimen consisting of basal insulin (e.g., glargine or degludec once daily) PLUS prandial nutritional insulin (e.g., lispro or aspart before meals) PLUS correctional insulin",
        "Inpatient glycemic management in non-critically ill hospitalized patients is guided by landmark trial evidence: (1) THE FAILURE OF SLIDING-SCALE INSULIN (SSI) MONOTHERAPY: For decades, SSI monotherapy (administering short-acting insulin only after hyperglycemia occurs) was widespread. However, SSI is a REACTIONARY, NON-PHYSIOLOGIC approach: it treats hyperglycemia only after it has already occurred, failing to prevent glucose surges. It produces wild glycemic excursions ('roller-coaster' kinetics), fails to control baseline fasting glucose, and prolongs inpatient hospital stays. (2) LANDMARK EVIDENCE (THE RABBIT-2 TRIAL, DIABETES CARE 2007): The landmark randomized controlled RABBIT-2 trial directly compared sliding-scale regular insulin monotherapy versus a scheduled basal-bolus regimen (glargine once daily plus glulisine before meals) in hospitalized patients with type 2 diabetes. (a) Glycemic Control: The basal-bolus regimen achieved significantly superior blood glucose control (mean blood glucose 166 mg/dL vs 193 mg/dL), with > 66% of patients reaching target glucose < 140 mg/dL compared to only 38% on SSI; (b) Clinical Complications: Patients receiving SSI experienced a significantly higher rate of hospital complications and prolonged length of stay. (3) ADA INPATIENT GUIDELINE RECOMMENDATIONS: ADA guidelines explicitly recommend AGAINST sliding-scale insulin monotherapy in the hospital. The standard of care for non-critically ill hospitalized patients with adequate nutritional intake is a SCHEDULED BASAL-BOLUS REGIMEN: (a) Basal insulin (40-50% of total daily dose) to suppress hepatic gluconeogenesis; (b) Prandial nutritional rapid-acting insulin (50-60% of TDD divided before meals) to cover mealtime carbohydrates; and (c) Correctional insulin added to prandial doses for pre-meal glucose above target (target blood glucose 140-180 mg/dL)."
      ],
      [
        "Continue sliding-scale regular insulin monotherapy unchanged, because scheduled basal insulin carries an unacceptably high risk of nocturnal hypoglycemia",
        "The RABBIT-2 trial proved that SSI monotherapy results in persistent unacceptable hyperglycemia, higher complication rates, and longer hospital stays; scheduled basal-bolus is guideline-mandated."
      ],
      [
        "Resume home oral metformin and glimepiride at full doses while continuing ceftriaxone",
        "Oral sulfonylureas carry severe risks of prolonged hypoglycemia in patients with erratic hospital oral intake, and metformin risks lactic acidosis during acute infectious illness or contrast exposure; oral agents are withheld in favor of insulin."
      ],
      [
        "Initiate a continuous intravenous regular insulin infusion in the medical ward targeting a tight blood glucose of 80 to 110 mg/dL",
        "Continuous IV insulin infusions require ICU monitoring and frequent hourly blood glucose checks; intensive glycemic targets (80-110 mg/dL) cause severe hypoglycemia and increase mortality (NICE-SUGAR trial)."
      ],
      [
        "Withhold all insulin therapy unless blood glucose rises above 350 mg/dL",
        "Permitting blood glucose levels > 200 mg/dL severely impairs neutrophil chemotaxis and phagocytosis, increases secondary hospital-acquired infections, and prolongs pneumonia resolution."
      ]
    ],
    "rationale": "In non-critically ill hospitalized patients with diabetes eating meals, ADA guidelines recommend a scheduled basal-bolus insulin regimen (basal + mealtime prandial + correctional) targeting blood glucose 140-180 mg/dL. The landmark RABBIT-2 trial proved that sliding-scale regular insulin (SSI) monotherapy is reactive, ineffective (only 38% reach target), and associated with higher complication rates and longer hospital stays compared to scheduled basal-bolus therapy. SSI monotherapy is explicitly condemned by ADA guidelines. Oral agents are held during acute hospitalization.",
    "metadata": {
      "shortSolution": "Non-critically ill inpatient with uncontrolled glucose on sliding-scale insulin monotherapy requires transition to a scheduled basal-bolus regimen (basal + prandial + correctional; RABBIT-2 trial).",
      "competingChoice": "Continue sliding-scale regular insulin monotherapy unchanged, because scheduled basal insulin carries an unacceptably high risk of nocturnal hypoglycemia",
      "exclusionFinding": "The RABBIT-2 trial established that sliding-scale insulin monotherapy causes poor glycemic control and higher hospital complications; scheduled basal-bolus is standard of care.",
      "pedagogicalValue": "Mastering inpatient glycemic management: replacing reactive sliding-scale insulin monotherapy with a physiologic scheduled basal-bolus regimen (RABBIT-2 trial).",
      "citations": [
        "Umpierrez GE, Smiley D, Zisman A, et al. Randomized study of basal-bolus insulin therapy in the inpatient management of patients with type 2 diabetes (RABBIT 2 trial). Diabetes Care. 2007;30(9):2181-2186. PMID: 17513708.",
        "ElSayed NA, Aleppo G, Aroda VR, et al. 16. Diabetes Care in the Hospital: Standards of Care in Diabetes-2023. Diabetes Care. 2023;46(Suppl 1):S267-S278. PMID: 36507638."
      ]
    },
    "critique": {
      "shortestValidSolution": "Inpatient hyperglycemia on sliding-scale insulin -> switch to scheduled basal-bolus insulin regimen (RABBIT-2 trial proved superiority).",
      "strongestCompetitor": "Continue sliding-scale regular insulin monotherapy unchanged, because scheduled basal insulin carries an unacceptably high risk of nocturnal hypoglycemia",
      "exclusionFinding": "Sliding-scale monotherapy is reactive and condemned by ADA guidelines; basal-bolus is the proven standard.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Non-critically ill inpatient with uncontrolled glucose on sliding-scale insulin monotherapy requires transition to a scheduled basal-bolus regimen (basal + prandial + correctional; RABBIT-2 trial).",
      "distractorExclusionNotes": "Distractor exclusion verified: The RABBIT-2 trial established that sliding-scale insulin monotherapy causes poor glycemic control and higher hospital complications; scheduled basal-bolus is standard of care.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Non-critically ill inpatient with uncontrolled glucose on sliding-scale insulin monotherapy requires transition to a scheduled basal-bolus regimen (basal + prandial + correctional; RABBIT-2 trial).",
    "necessaryInference": "Non-critically ill inpatient with uncontrolled glucose on sliding-scale insulin monotherapy requires transition to a scheduled basal-bolus regimen (basal + prandial + correctional; RABBIT-2 trial).",
    "strongestDistractor": "Continue sliding-scale regular insulin monotherapy unchanged, because scheduled basal insulin carries an unacceptably high risk of nocturnal hypoglycemia",
    "distractorExclusion": "The RABBIT-2 trial established that sliding-scale insulin monotherapy causes poor glycemic control and higher hospital complications; scheduled basal-bolus is standard of care.",
    "citation": "Umpierrez GE, Smiley D, Zisman A, et al. Randomized study of basal-bolus insulin therapy in the inpatient management of patients with type 2 diabetes (RABBIT 2 trial). Diabetes Care. 2007;30(9):2181-2186. PMID: 17513708."
  },
  {
    "code": "op-c-s3-0432",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Upper Gastrointestinal Bleeding Cross-Coverage Management",
    "subtopic": "Restrictive Transfusion Thresholds (Hb < 7 g/dL), Erythromycin Prokinetic, High-Dose PPI",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with a history of alcohol use disorder and osteoarthritis treated with daily over-the-counter naproxen is admitted to the intermediate medical step-down unit at 10:00 PM after presenting with an acute upper gastrointestinal bleed. He experienced two episodes of coffee-ground emesis and passed a large, foul-smelling, black tarry stool (melena) 4 hours ago. On arrival, he is alert and oriented. Vital signs demonstrate blood pressure of 118/72 mm Hg, heart rate of 98/min, and respiratory rate of 18/min. Two large-bore 16-gauge peripheral intravenous lines are placed, and isotonic crystalloid infusion is underway. Nasogastric tube lavage is deferred. Complete blood count demonstrates:\n- Hemoglobin: 7.8 g/dL (normal 13.5 to 17.5 g/dL; no prior baseline available)\n- Platelet count: 210,000/mm3\n- International normalized ratio (INR): 1.1\n- Blood urea nitrogen: 36 mg/dL\n- Serum creatinine: 0.9 mg/dL\n\nThe cross-covering resident initiates an intravenous proton pump inhibitor (pantoprazole 80 mg IV bolus followed by 8 mg/hour continuous infusion) and requests emergent gastroenterology consultation. The bedside nurse asks if 2 units of packed red blood cells should be immediately transfused for the hemoglobin of 7.8 g/dL.\n\nBased on landmark randomized clinical trial evidence (the Villanueva NEJM trial) and current ACG guidelines, which of the following represents the most appropriate transfusion strategy and adjunctive pre-endoscopic medical management for this patient?",
    "choices": [
      [
        "Withhold blood transfusion at this time (maintaining a restrictive transfusion threshold targeting hemoglobin >= 7.0 g/dL), and administer intravenous erythromycin 250 mg 30 to 90 minutes prior to endoscopy",
        "Acute Upper Gastrointestinal Bleeding (UGIB) is a major inpatient emergency. (1) RESTRICTIVE VERSUS LIBERAL TRANSFUSION STRATEGY (VILLANUEVA TRIAL, NEJM 2013): For decades, clinicians liberalized transfusions to maintain hemoglobin > 9 to 10 g/dL. However, the landmark randomized controlled trial by Villanueva et al. (> 900 UGIB patients) proved that a RESTRICTIVE TRANSFUSION STRATEGY (transfusing ONLY when hemoglobin drops < 7.0 g/dL, targeting a post-transfusion hemoglobin of 7.0 to 9.0 g/dL) SIGNIFICANTLY REDUCES MORTALITY (45% relative reduction; 5% vs 9% at 45 days) and significantly reduces rebleeding rates compared to a liberal strategy (transfusing when Hb < 9 g/dL). Pathophysiology: Over-transfusion increases central venous and portal hydrostatic pressures, which disrupts newly formed platelet-fibrin clots on bleeding ulcers or varices and worsens coagulopathy. A higher threshold (Hb < 8.0 g/dL) is reserved strictly for patients with active acute coronary syndrome or severe symptomatic ischemic cardiovascular disease. Because this patient is hemodynamically stable without active cardiac ischemia and his hemoglobin is 7.8 g/dL (> 7.0 g/dL), TRANSFUSION SHOULD BE WITHHELD. (2) ADJUNCTIVE PRE-ENDOSCOPIC ERYTHROMYCIN: Erythromycin is a motilin receptor agonist that stimulates gastric antral contractions. Administering IV erythromycin (250 mg IV infused 30-90 minutes prior to endoscopy) rapidly empties the stomach of blood, clots, and food residue, dramatically improving mucosal endoscopic visualization, decreasing the need for repeat endoscopy, and shortening procedural time."
      ],
      [
        "Immediately transfuse 2 units of packed red blood cells to achieve a target hemoglobin > 10.0 g/dL prior to endoscopy",
        "Liberal blood transfusion (targeting Hb > 9-10 g/dL) in acute UGIB increases portal pressure, disrupts fragile hemostatic clots, doubles rebleeding rates, and significantly increases mortality (Villanueva trial)."
      ],
      [
        "Administer intravenous octreotide 50 mcg bolus and continuous infusion as primary therapy for peptic ulcer bleeding",
        "Octreotide reduces splanchnic blood flow and is indicated for variceal bleeding in cirrhosis; in non-cirrhotic peptic ulcer bleeding (NSAID-induced), octreotide provides no clinical benefit."
      ],
      [
        "Administer oral tranexamic acid 1,000 mg every 8 hours to promote systemic clot stabilization",
        "The HALT-IT trial (> 12,000 patients) proved that tranexamic acid does not reduce death from gastrointestinal bleeding and significantly increases venous thromboembolism and seizures; it is not recommended."
      ],
      [
        "Insert a large-bore nasogastric tube and perform iced-saline gastric lavage until effluent is completely clear",
        "Nasogastric tube placement and iced saline lavage cause patient discomfort, mucosal trauma, and vagal bradycardia without providing any diagnostic or therapeutic benefit."
      ]
    ],
    "rationale": "In acute upper GI bleeding, the landmark Villanueva trial proved that a restrictive transfusion strategy (transfusing only when Hb < 7.0 g/dL to maintain Hb 7-9 g/dL) significantly reduces mortality (5% vs 9%) and rebleeding compared to liberal transfusion (Hb < 9 g/dL), because over-transfusion increases portal/venous pressure and blows off hemostatic clots. (Threshold is Hb < 8 g/dL only in acute coronary syndrome). Pre-endoscopic IV erythromycin (motilin agonist) empties gastric blood and clots, improving endoscopic visualization. Tranexamic acid is ineffective and increases VTE (HALT-IT trial).",
    "metadata": {
      "shortSolution": "Hemodynamically stable UGIB with Hb 7.8 g/dL requires withholding blood transfusion (restrictive threshold Hb < 7.0 g/dL per Villanueva trial) and giving pre-endoscopic IV erythromycin for gastric emptying.",
      "competingChoice": "Immediately transfuse 2 units of packed red blood cells to achieve a target hemoglobin > 10.0 g/dL prior to endoscopy",
      "exclusionFinding": "Liberal transfusion (Hb > 9-10 g/dL) increases portal hydrostatic pressure and significantly increases mortality and rebleeding (Villanueva trial); restrictive transfusion (Hb < 7) is standard.",
      "pedagogicalValue": "Mastering the restrictive transfusion threshold (Hb < 7.0 g/dL) in acute UGIB (Villanueva trial) and utilizing IV erythromycin to improve endoscopic visualization.",
      "citations": [
        "Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013;368(1):11-21. PMID: 23281973.",
        "Laine L, Barkun AN, Saltzman JR, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917. PMID: 33929377."
      ]
    },
    "critique": {
      "shortestValidSolution": "UGIB + Hb 7.8 g/dL -> withhold transfusion (restrictive threshold Hb < 7 g/dL per Villanueva trial) + give pre-endoscopic IV erythromycin.",
      "strongestCompetitor": "Immediately transfuse 2 units of packed red blood cells to achieve a target hemoglobin > 10.0 g/dL prior to endoscopy",
      "exclusionFinding": "Liberal transfusion (targeting Hb > 10) increases rebleeding and mortality; restrictive threshold (Hb < 7) is standard of care.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Hemodynamically stable UGIB with Hb 7.8 g/dL requires withholding blood transfusion (restrictive threshold Hb < 7.0 g/dL per Villanueva trial) and giving pre-endoscopic IV erythromycin for gastric emptying.",
      "distractorExclusionNotes": "Distractor exclusion verified: Liberal transfusion (Hb > 9-10 g/dL) increases portal hydrostatic pressure and significantly increases mortality and rebleeding (Villanueva trial); restrictive transfusion (Hb < 7) is standard.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Hemodynamically stable UGIB with Hb 7.8 g/dL requires withholding blood transfusion (restrictive threshold Hb < 7.0 g/dL per Villanueva trial) and giving pre-endoscopic IV erythromycin for gastric emptying.",
    "necessaryInference": "Hemodynamically stable UGIB with Hb 7.8 g/dL requires withholding blood transfusion (restrictive threshold Hb < 7.0 g/dL per Villanueva trial) and giving pre-endoscopic IV erythromycin for gastric emptying.",
    "strongestDistractor": "Immediately transfuse 2 units of packed red blood cells to achieve a target hemoglobin > 10.0 g/dL prior to endoscopy",
    "distractorExclusion": "Liberal transfusion (Hb > 9-10 g/dL) increases portal hydrostatic pressure and significantly increases mortality and rebleeding (Villanueva trial); restrictive transfusion (Hb < 7) is standard.",
    "citation": "Villanueva C, Colomo A, Bosch A, et al. Transfusion strategies for acute upper gastrointestinal bleeding. N Engl J Med. 2013;368(1):11-21. PMID: 23281973."
  },
  {
    "code": "op-c-s3-0433",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Stress Ulcer Prophylaxis (SUP) Indications and Stewardship",
    "subtopic": "Mechanical Ventilation > 48 Hours, Coagulopathy, Inappropriate Non-ICU Use",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman is admitted to the general medical ward from the emergency department for treatment of acute bacterial cellulitis of the left lower extremity with intravenous cefazolin. Her past medical history includes essential hypertension and osteoarthritis managed with amlodipine 5 mg daily and occasional acetaminophen. She has no personal or family history of peptic ulcer disease, gastrointestinal bleeding, or chronic kidney disease. Physical examination reveals an alert woman in no distress with localized erythema and warmth over the left pretibial region. Vital signs are normal. Complete blood count shows WBC of 12,400/mm3, hemoglobin of 13.2 g/dL, and platelet count of 240,000/mm3. International normalized ratio (INR) is 1.0. She is tolerating a regular diet. The admitting medical resident includes an order for 'intravenous pantoprazole 40 mg daily for stress ulcer prophylaxis.'\n\nAccording to American Society of Health-System Pharmacists (ASHP) guidelines and Surviving Sepsis Campaign criteria, which of the following represents the most appropriate management approach regarding stress ulcer prophylaxis for this patient?",
    "choices": [
      [
        "Discontinue intravenous pantoprazole, as stress ulcer prophylaxis is strictly indicated only for specific high-risk intensive care unit patients (e.g., mechanical ventilation > 48 hours or coagulopathy), and its inappropriate use in general ward patients increases risks of hospital-acquired pneumonia and Clostridioides difficile colitis",
        "Stress Ulcer Prophylaxis (SUP) is a widely overutilized medical practice that leads to substantial adverse clinical outcomes when prescribed outside evidence-based indications: (1) PATHOPHYSIOLOGY OF TRUE STRESS ULCERATION: Clinically significant stress-related mucosal damage occurs in critically ill patients experiencing severe physiological shock, massive burn injury, severe head trauma, or multi-organ failure. Splanchnic hypoperfusion compromises mucosal microcirculation and bicarbonate secretion, allowing gastric acid to erode the ischemic mucosa. (2) MAJOR VALIDATED INDICATIONS FOR SUP (ASHP GUIDELINES): High-level evidence restricts routine SUP to INTENSIVE CARE UNIT (ICU) PATIENTS possessing at least ONE OF TWO INDEPENDENT MAJOR RISK FACTORS: (a) MECHANICAL VENTILATION ANTICIPATED TO LAST > 48 HOURS, OR (b) COAGULOPATHY (defined as an INR > 1.5, aPTT > 2x control, or platelet count < 50,000/mm3). Minor ICU risk factors include septic shock, severe head trauma (Cushing ulcer), extensive burns (Curling ulcer), acute renal failure, or history of GI bleeding within the past year. (3) THE DANGER OF SUP IN NON-ICU WARD PATIENTS: General medical ward patients without ICU-level illness have an exceptionally low incidence of stress ulcer bleeding (< 0.1-0.2%). Prescribing prophylactic proton pump inhibitors or H2-receptor antagonists to non-ICU ward patients provides ZERO CLINICAL BENEFIT. Furthermore, pharmacological gastric acid suppression neutralizes the natural gastric 'acid barrier', promoting bacterial colonization of the upper digestive tract and micro-aspiration, which significantly INCREASES THE RISK OF HOSPITAL-ACQUIRED PNEUMONIA (by 20-30%) and CLOSTRIDIOIDES DIFFICILE INFECTION (by 50-100%). Pantoprazole should be immediately discontinued."
      ],
      [
        "Continue intravenous pantoprazole 40 mg daily throughout the hospitalization and discharge home on oral pantoprazole for 6 months",
        "Routine SUP on general medical floors represents inappropriate overtreatment that increases C. difficile infection and pneumonia without reducing bleeding; continuing it post-discharge causes chronic hypomagnesemia and fractures."
      ],
      [
        "Switch intravenous pantoprazole to intravenous famotidine 20 mg twice daily, as H2-receptor antagonists are preferred for routine ward prophylaxis",
        "H2-receptor antagonists carry identical risks of pneumonia and C. difficile in low-risk patients; the problem is the inappropriate indication for prophylaxis itself, not the choice of agent."
      ],
      [
        "Switch to oral sucralfate slurry 1 g four times daily to coat the gastric mucosa without altering gastric pH",
        "Sucralfate requires frequent dosing, binds other oral medications preventing their absorption, and is completely unnecessary in a patient with no indication for stress ulcer prophylaxis."
      ],
      [
        "Increase pantoprazole to 80 mg intravenous bolus followed by continuous infusion to prevent acute ulceration",
        "Continuous high-dose infusion is indicated for active endoscopic high-risk peptic ulcer bleeding, not prophylaxis in a patient with no bleeding."
      ]
    ],
    "rationale": "Stress ulcer prophylaxis (SUP) is indicated exclusively in high-risk ICU patients with specific criteria: (1) Mechanical ventilation > 48 hours, or (2) Coagulopathy (INR > 1.5, platelets < 50,000). Minor indications include septic shock, severe trauma, or burns. General medical ward patients without these criteria have an extremely low bleeding risk (< 0.1%). Routine SUP on medical floors provides no clinical benefit and increases hospital-acquired pneumonia and Clostridioides difficile colitis by eliminating the gastric acid barrier. Pantoprazole should be discontinued.",
    "metadata": {
      "shortSolution": "Medical ward patient with cellulitis has no indication for stress ulcer prophylaxis (reserved for ICU mechanical ventilation > 48h or coagulopathy); discontinue pantoprazole to avoid C. diff and pneumonia.",
      "competingChoice": "Switch intravenous pantoprazole to intravenous famotidine 20 mg twice daily, as H2-receptor antagonists are preferred for routine ward prophylaxis",
      "exclusionFinding": "Routine ward prophylaxis is completely unjustified regardless of drug class; both PPIs and H2RAs increase C. diff and pneumonia in low-risk patients.",
      "pedagogicalValue": "Mastering the strict ICU indications for stress ulcer prophylaxis (ventilation > 48h, coagulopathy) and deprescribing unnecessary PPIs in general medical ward patients.",
      "citations": [
        "Cook D, Guyatt G. Prophylaxis against Upper Gastrointestinal Bleeding in Hospitalized Patients. N Engl J Med. 2018;378(26):2506-2516. PMID: 29949497.",
        "ASHP Therapeutic Guidelines on Stress Ulcer Prophylaxis. ASHP Commission on Therapeutics and approved by the ASHP Board of Directors on November 14, 1998. Am J Health Syst Pharm. 1999;56(4):347-379. PMID: 10072552."
      ]
    },
    "critique": {
      "shortestValidSolution": "General ward patient with cellulitis -> discontinue pantoprazole (SUP indicated only for ICU with vent > 48h or coagulopathy; avoids C. diff/pneumonia).",
      "strongestCompetitor": "Switch intravenous pantoprazole to intravenous famotidine 20 mg twice daily, as H2-receptor antagonists are preferred for routine ward prophylaxis",
      "exclusionFinding": "Routine ward prophylaxis is unjustified; both PPIs and H2 blockers increase infection risks without benefit.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Medical ward patient with cellulitis has no indication for stress ulcer prophylaxis (reserved for ICU mechanical ventilation > 48h or coagulopathy); discontinue pantoprazole to avoid C. diff and pneumonia.",
      "distractorExclusionNotes": "Distractor exclusion verified: Routine ward prophylaxis is completely unjustified regardless of drug class; both PPIs and H2RAs increase C. diff and pneumonia in low-risk patients.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Medical ward patient with cellulitis has no indication for stress ulcer prophylaxis (reserved for ICU mechanical ventilation > 48h or coagulopathy); discontinue pantoprazole to avoid C. diff and pneumonia.",
    "necessaryInference": "Medical ward patient with cellulitis has no indication for stress ulcer prophylaxis (reserved for ICU mechanical ventilation > 48h or coagulopathy); discontinue pantoprazole to avoid C. diff and pneumonia.",
    "strongestDistractor": "Switch intravenous pantoprazole to intravenous famotidine 20 mg twice daily, as H2-receptor antagonists are preferred for routine ward prophylaxis",
    "distractorExclusion": "Routine ward prophylaxis is completely unjustified regardless of drug class; both PPIs and H2RAs increase C. diff and pneumonia in low-risk patients.",
    "citation": "Cook D, Guyatt G. Prophylaxis against Upper Gastrointestinal Bleeding in Hospitalized Patients. N Engl J Med. 2018;378(26):2506-2516. PMID: 29949497."
  },
  {
    "code": "op-c-s3-0434",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Catheter-Associated Urinary Tract Infection (CAUTI) Stewardship",
    "subtopic": "Catheter Removal/Replacement, Culturing Fresh Urine, Asymptomatic Pyuria Stewardship",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old woman is hospitalized in the intermediate care unit following surgical repair of a right intertrochanteric femur fracture 6 days ago. She has had an indwelling Foley urinary catheter in place since surgery. At 2:00 AM, the night cross-covering resident is paged because the bedside nurse noticed that the patient's urine in the drainage bag appears cloudy and malodorous. The patient is currently asleep, comfortable, and awakens easily. She denies fever, chills, flank pain, lower abdominal cramping, or dysuria. Vital signs are normal: blood pressure 126/74 mm Hg, heart rate 72/min, respiratory rate of 14/min, and oral temperature of 36.8 C (98.2 F). Physical examination reveals a soft, non-tender abdomen with no suprapubic fullness or tenderness, and no costovertebral angle tenderness. The surgical hip incision is clean and healing well. The nurse requests an order to send a urinalysis and urine culture aspirated from the drainage bag and initiate empiric intravenous vancomycin and cefepime for suspected catheter-associated urinary tract infection (CAUTI).\n\nAccording to current Infectious Diseases Society of America (IDSA) guidelines, which of the following represents the most appropriate management approach for this patient?",
    "choices": [
      [
        "Remove the indwelling urinary catheter immediately (evaluating for spontaneous voiding), withhold antimicrobial therapy, and do not send urine for culture, because cloudy or malodorous urine in an asymptomatic patient does not indicate infection",
        "Catheter-Associated Urinary Tract Infection (CAUTI) is one of the most common hospital-acquired infections, but is frequently over-diagnosed and over-treated: (1) DEFINITION OF TRUE CAUTI (IDSA GUIDELINES): True CAUTI requires BOTH: (a) Symptoms or signs compatible with UTI (fever, rigors, altered mental status, flank pain, costovertebral tenderness, acute hematuria, or pelvic discomfort) with no other identified source; AND (b) Quantitative microbiological growth of >= 1,000 CFU/mL of a pathogen in an appropriately collected urine specimen. (2) BACTERIAL BIOFILMS AND ASYMPTOMATIC BACTERIURIA: Indwelling urinary catheters develop intraluminal and extraluminal polymicrobial bacterial biofilms within 48 to 72 hours of placement. Virtually 100% of patients with catheters in place for > 30 days (and > 50% at 1 week) have bacterial colonization. This colonization frequently causes pyuria, cloudy urine, and foul-smelling urine. However, CLOUDY OR MALODOROUS URINE ALONE IN THE ABSENCE OF CLINICAL SYMPTOMS REFLECTS ASYMPTOMATIC BACTERIURIA / BIOFILM COLONIZATION, NOT ACTIVE INFECTION. Randomized clinical trials prove that treating asymptomatic catheter-associated bacteriuria provides zero clinical benefit, does not prevent symptomatic UTI or bacteremia, and significantly increases adverse drug events and Clostridioides difficile colitis. (3) FIRST-LINE INTERVENTION: The most critical, evidence-based intervention is IMMEDIATE REMOVAL OF THE CATHETER to eliminate the biofilm source and assess for spontaneous bladder emptying. (4) CULTURING TECHNIQUE (IF SYMPTOMATIC): If a patient with a catheter in place for > 2 weeks develops systemic symptoms and CAUTI is suspected, the catheter MUST BE REMOVED (OR REPLACED) FIRST, and a fresh urine specimen collected directly from the newly placed catheter or clean void; draining urine from a collection bag is strictly prohibited because bag urine represents stagnant, heavily colonized biofilm debris."
      ],
      [
        "Aspirate urine directly from the drainage collection bag port, send for culture, and initiate intravenous cefepime 2 g every 8 hours",
        "Urine in drainage bags represents stagnant biofilm contamination; culturing bag urine yields misleading colonizers, and treating asymptomatic pyuria violates IDSA guidelines and breeds resistance."
      ],
      [
        "Initiate oral ciprofloxacin 500 mg twice daily for 7 days while keeping the indwelling Foley catheter in place",
        "Treating asymptomatic catheter colonization while leaving the catheter in place results in immediate recolonization with ciprofloxacin-resistant organisms within days."
      ],
      [
        "Perform continuous bladder irrigation with an amphotericin B and neomycin solution through a three-way catheter",
        "Antimicrobial bladder irrigation causes severe chemical mucosal irritation, does not eradicate bacterial biofilms, and is strongly condemned by IDSA guidelines."
      ],
      [
        "Order a contrast-enhanced CT scan of the abdomen and pelvis to evaluate for emphysematous cystitis",
        "In an afebrile, asymptomatic patient with normal physical examination, CT imaging represents extreme overutilization of radiation and contrast."
      ]
    ],
    "rationale": "In patients with indwelling Foley catheters, bacterial biofilms develop within days, causing cloudy, foul-smelling urine and pyuria. IDSA guidelines state that cloudy or malodorous urine in an asymptomatic patient represents catheter colonization/asymptomatic bacteriuria, NOT CAUTI. Treating asymptomatic bacteriuria provides no benefit and causes C. diff and antibiotic resistance. The primary intervention is prompt removal of the catheter (eliminating the foreign-body biofilm). Urine should never be cultured from the drainage bag. If CAUTI is suspected in a symptomatic patient, the catheter must be removed/replaced before obtaining a fresh specimen.",
    "metadata": {
      "shortSolution": "Asymptomatic patient with indwelling Foley has cloudy/malodorous urine; IDSA guidelines mandate catheter removal and withholding antibiotics/cultures (colonization, not CAUTI).",
      "competingChoice": "Aspirate urine directly from the drainage collection bag port, send for culture, and initiate intravenous cefepime 2 g every 8 hours",
      "exclusionFinding": "Drainage bag urine is contaminated by biofilms; treating asymptomatic cloudy urine violates guidelines and increases C. diff and resistance.",
      "pedagogicalValue": "Mastering CAUTI diagnostic stewardship: cloudy/foul-smelling urine without systemic symptoms is colonization, not infection; remove the catheter and withhold antibiotics.",
      "citations": [
        "Hooton TM, Bradley SF, Cardenas DD, et al. Diagnosis, prevention, and treatment of catheter-associated urinary tract infection in adults: 2009 International Clinical Practice Guidelines from the Infectious Diseases Society of America. Clin Infect Dis. 2010;50(5):625-663. PMID: 20156062.",
        "Nicolle LE, Gupta K, Bradley SF, et al. Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2019;68(10):e83-e110. PMID: 30895288."
      ]
    },
    "critique": {
      "shortestValidSolution": "Indwelling Foley + cloudy/malodorous urine + afebrile/asymptomatic -> remove Foley; withhold antibiotics and cultures.",
      "strongestCompetitor": "Aspirate urine directly from the drainage collection bag port, send for culture, and initiate intravenous cefepime 2 g every 8 hours",
      "exclusionFinding": "Drainage bag urine is colonized; treating asymptomatic pyuria provides zero benefit and causes antibiotic resistance.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Asymptomatic patient with indwelling Foley has cloudy/malodorous urine; IDSA guidelines mandate catheter removal and withholding antibiotics/cultures (colonization, not CAUTI).",
      "distractorExclusionNotes": "Distractor exclusion verified: Drainage bag urine is contaminated by biofilms; treating asymptomatic cloudy urine violates guidelines and increases C. diff and resistance.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Asymptomatic patient with indwelling Foley has cloudy/malodorous urine; IDSA guidelines mandate catheter removal and withholding antibiotics/cultures (colonization, not CAUTI).",
    "necessaryInference": "Asymptomatic patient with indwelling Foley has cloudy/malodorous urine; IDSA guidelines mandate catheter removal and withholding antibiotics/cultures (colonization, not CAUTI).",
    "strongestDistractor": "Aspirate urine directly from the drainage collection bag port, send for culture, and initiate intravenous cefepime 2 g every 8 hours",
    "distractorExclusion": "Drainage bag urine is contaminated by biofilms; treating asymptomatic cloudy urine violates guidelines and increases C. diff and resistance.",
    "citation": "Hooton TM, Bradley SF, Cardenas DD, et al. Diagnosis, prevention, and treatment of catheter-associated urinary tract infection in adults: 2009 International Clinical Practice Guidelines from the Infectious Diseases Society of America. Clin Infect Dis. 2010;50(5):625-663. PMID: 20156062."
  },
  {
    "code": "op-c-s3-0435",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Postoperative Opioid-Induced Respiratory Depression Cross-Coverage",
    "subtopic": "Titrated Low-Dose Naloxone, Avoidance of Full Reversal, Severe Pain Crisis Prevention",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man who underwent an open posterior lumbar decompression and fusion (L3-L5) 14 hours ago is admitted to the surgical orthopedic floor. He has been receiving intravenous morphine via a patient-controlled analgesia (PCA) pump (1 mg demand dose with a 6-minute lockout interval and a continuous basal infusion of 1 mg/hour). At 3:30 AM, the cross-covering physician is called emergently by the nurse because the patient is somnolent and difficult to arouse. On examination, the patient is obtunded, opening his eyes only to vigorous sternal rubbing, and unable to answer questions. Vital signs demonstrate blood pressure of 102/64 mm Hg, heart rate of 58/min, respiratory rate of 5/min, and oxygen saturation of 84% on ambient air, which increases to 90% when bag-valve-mask assisted ventilation is initiated with supplemental 100% oxygen. Physical examination reveals pinpoint pupils (miosis, 1.5 mm bilaterally) and shallow, hypopneic chest wall excursions. The PCA pump is immediately disconnected. The nurse holds a 0.4-mg ampule of naloxone and asks if the entire 0.4 mg should be pushed intravenously as a rapid bolus.\n\nWhich of the following represents the most appropriate pharmacological resuscitation approach for this patient?",
    "choices": [
      [
        "Administer intravenous naloxone in low, titrated increments (e.g., dilute 0.4 mg in 10 mL saline to 0.04 mg/mL and administer 0.04 to 0.08 mg IV every 2 to 3 minutes) until adequate spontaneous ventilation (respiratory rate >= 10 to 12/min) is restored, while avoiding full, abrupt opioid reversal",
        "Opioid-Induced Respiratory Depression (OIRD) is a life-threatening postoperative complication characterized by hypercapnia, hypoxemia, and secondary respiratory arrest. Risk factors include: continuous basal PCA infusions in opioid-naive patients, concurrent sedatives (benzodiazepines, gabapentinoids), sleep apnea, and renal impairment. (1) THE DANGER OF HIGH-DOSE RAPID NALOXONE BOLUSES: In a postoperative patient receiving therapeutic opioids for severe surgical pain (such as a multi-level spinal fusion), administering a large, full intravenous dose of naloxone (e.g., 0.4 mg to 2.0 mg IV push) causes IMMEDIATE, TOTAL COMPETITIVE STRIPPING of opioids from all central and peripheral mu-opioid receptors. This triggers an explosive catecholamine surge, causing: (a) Catastrophic, excruciating postoperative pain crisis; (b) Acute severe sympathetic hypertension, tachycardia, and cardiac arrhythmias; (c) Acute non-cardiogenic pulmonary edema; and (d) Acute myocardial ischemia or infarction. (2) EVIDENCE-BASED TITRATION STRATEGY: The clinical goal of naloxone in postoperative medical/surgical patients is RESTORATION OF ADEQUATE SPONTANEOUS VENTILATION (respiratory rate >= 10-12 breaths/min and oxygen saturation > 92%), NOT FULL ALERTNESS OR TOTAL ANALGESIA REVERSAL. Guidelines mandate DILUTING AND TITRATING NALOXONE: Dilute a standard 0.4-mg naloxone vial in 9 mL or 10 mL of normal saline (producing a concentration of 0.04 mg/mL). Administer 0.04 mg to 0.08 mg IV every 2 to 3 minutes while observing respiratory excursions. As soon as the patient breathes comfortably at 10-12 breaths/min, stop dosing. (3) DURATION OF ACTION MONITORING: Naloxone has a short elimination half-life (30 to 90 minutes), which is significantly shorter than morphine or hydromorphone (half-lives 2 to 4 hours). Therefore, CLOSE MONITORING FOR RE-SEDATION AND RECURRENT HYPOVENTILATION FOR AT LEAST 2 TO 4 HOURS IS MANDATORY; repeated small doses or a low-dose continuous infusion may be required."
      ],
      [
        "Administer a rapid intravenous bolus of naloxone 2.0 mg to ensure immediate total neurological arousal and complete opioid receptor clearance",
        "Pushing 2 mg of naloxone causes a massive sympathetic surge, acute non-cardiogenic pulmonary edema, myocardial infarction, and agonizing unbearable pain crisis."
      ],
      [
        "Administer intravenous flumazenil 0.5 mg to treat presumed paradoxical benzodiazepine co-toxicity",
        "The patient is receiving a morphine PCA and exhibits classic opioid miosis and respiratory depression; flumazenil treats benzodiazepines, carries a high risk of fatal status epilepticus, and provides zero benefit."
      ],
      [
        "Administer continuous intravenous doxapram infusion as a central respiratory stimulant without giving naloxone",
        "Doxapram is obsolete due to severe hypertension, arrhythmias, and seizures; titrated naloxone is the specific, safe competitive antidote for opioid respiratory depression."
      ],
      [
        "Perform immediate endotracheal intubation and maintain mechanical ventilation for 24 hours without administering any naloxone",
        "Invasive endotracheal intubation carries significant airway trauma and ICU admission risks; carefully titrated low-dose naloxone rapidly restores spontaneous ventilation non-invasively within minutes."
      ]
    ],
    "rationale": "In postoperative patients with opioid-induced respiratory depression (RR < 8/min, miosis, somnolence), the goal of naloxone is restoring adequate spontaneous ventilation (RR >= 10-12/min), NOT full arousal or complete pain reversal. Pushing high-dose naloxone (0.4-2.0 mg) causes massive sympathetic discharge, acute pulmonary edema, cardiac arrhythmias, and agonizing pain crisis. Naloxone should be diluted (e.g. 0.04 mg/mL) and titrated in small aliquots (0.04-0.08 mg IV every 2-3 min). Because naloxone's half-life (30-90 min) is shorter than morphine (2-4 hours), monitoring for recurrent hypoventilation is required.",
    "metadata": {
      "shortSolution": "Postoperative patient with morphine respiratory depression (RR 5/min, miosis) requires low-dose titrated IV naloxone (0.04-0.08 mg every 2-3 min) to restore ventilation without triggering pulmonary edema or severe pain crisis.",
      "competingChoice": "Administer a rapid intravenous bolus of naloxone 2.0 mg to ensure immediate total neurological arousal and complete opioid receptor clearance",
      "exclusionFinding": "Full-dose rapid naloxone causes massive catecholamine surge, acute pulmonary edema, myocardial ischemia, and severe pain; titrated low-dose dosing is standard of care.",
      "pedagogicalValue": "Mastering the resuscitation technique for postoperative opioid depression: titrated low-dose naloxone (0.04-0.08 mg aliquots) to restore respiration while preserving analgesia.",
      "citations": [
        "Gupta K, Prasad A, Nagappa M, et al. Risk factors for opioid-induced respiratory depression in surgical patients: a systematic review and meta-analyses. BMJ Open. 2018;8(12):e024086. PMID: 30530588.",
        "Overdyk FJ. Postoperative opioids: we can prevent preventable deaths. Anesth Analg. 2011;112(3):510-512. PMID: 21350228."
      ]
    },
    "critique": {
      "shortestValidSolution": "Post-op opioid respiratory depression (RR 5) -> titrated low-dose IV naloxone (0.04-0.08 mg aliquots) to restore RR >= 10-12 while avoiding pulmonary edema/pain crisis.",
      "strongestCompetitor": "Administer a rapid intravenous bolus of naloxone 2.0 mg to ensure immediate total neurological arousal and complete opioid receptor clearance",
      "exclusionFinding": "Pushing 2 mg naloxone causes acute pulmonary edema, arrhythmias, and excruciating pain; low-dose titration is required.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Postoperative patient with morphine respiratory depression (RR 5/min, miosis) requires low-dose titrated IV naloxone (0.04-0.08 mg every 2-3 min) to restore ventilation without triggering pulmonary edema or severe pain crisis.",
      "distractorExclusionNotes": "Distractor exclusion verified: Full-dose rapid naloxone causes massive catecholamine surge, acute pulmonary edema, myocardial ischemia, and severe pain; titrated low-dose dosing is standard of care.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Postoperative patient with morphine respiratory depression (RR 5/min, miosis) requires low-dose titrated IV naloxone (0.04-0.08 mg every 2-3 min) to restore ventilation without triggering pulmonary edema or severe pain crisis.",
    "necessaryInference": "Postoperative patient with morphine respiratory depression (RR 5/min, miosis) requires low-dose titrated IV naloxone (0.04-0.08 mg every 2-3 min) to restore ventilation without triggering pulmonary edema or severe pain crisis.",
    "strongestDistractor": "Administer a rapid intravenous bolus of naloxone 2.0 mg to ensure immediate total neurological arousal and complete opioid receptor clearance",
    "distractorExclusion": "Full-dose rapid naloxone causes massive catecholamine surge, acute pulmonary edema, myocardial ischemia, and severe pain; titrated low-dose dosing is standard of care.",
    "citation": "Gupta K, Prasad A, Nagappa M, et al. Risk factors for opioid-induced respiratory depression in surgical patients: a systematic review and meta-analyses. BMJ Open. 2018;8(12):e024086. PMID: 30530588."
  },
  {
    "code": "op-c-s3-0436",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Inpatient Acute Chest Pain and High-Sensitivity Troponin Protocols",
    "subtopic": "ESC 0/1-Hour Algorithm, Rule-In vs Rule-Out Thresholds, Dynamic Delta Changes",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man who is hospitalized on the medical ward on day 3 for treatment of acute bacterial cellulitis with intravenous cefazolin develops new-onset substernal chest pressure at 6:00 AM. He describes the discomfort as a dull squeezing sensation (rated 5/10) that began 45 minutes ago while resting in bed, with no radiation to the jaw or left arm. His medical history includes essential hypertension and hyperlipidemia. Vital signs demonstrate blood pressure of 134/82 mm Hg, heart rate of 76/min, respiratory rate of 16/min, and oxygen saturation of 98% on ambient air. Physical examination reveals clear lungs, normal heart sounds (no murmurs or gallops), and no chest wall tenderness to palpation. An immediate 12-lead electrocardiogram (ECG) reveals normal sinus rhythm at 76/min without ST-segment elevation, ST depression, or T-wave inversions. Point-of-care capillary blood glucose is 114 mg/dL. The hospital laboratory utilizes a high-sensitivity cardiac troponin T (hs-cTnT) assay (99th percentile upper reference limit is 14 ng/L). Blood drawn at the onset of chest discomfort (0 hours) demonstrates an initial hs-cTnT concentration of 28 ng/L.\n\nAccording to European Society of Cardiology (ESC) and American College of Cardiology (ACC) guidelines for the 0/1-hour high-sensitivity troponin algorithm, which of the following represents the most appropriate next step in the diagnostic management of this patient?",
    "choices": [
      [
        "Obtain a repeat high-sensitivity cardiac troponin T level exactly 1 hour after the baseline draw (1-hour draw), accompanied by a repeat 12-lead ECG, to evaluate for a dynamic absolute troponin change (delta >= 5 ng/L) indicative of acute myocardial infarction",
        "High-Sensitivity Cardiac Troponin (hs-cTn) assays have revolutionized the evaluation of acute chest pain, capable of detecting picogram concentrations of circulating troponin: (1) DIFFERENTIATION BETWEEN CHRONIC ELEVATION AND ACUTE MYOCARDIAL INFARCTION: A single mildly elevated troponin concentration (such as 28 ng/L; above the 99th percentile URL of 14 ng/L) does NOT automatically establish an acute myocardial infarction. Chronic elevations are exceedingly common in hospitalized patients due to heart failure, chronic kidney disease, severe sepsis, or chronic structural heart disease. The fundamental hallmark that distinguishes ACUTE MYOCARDIAL INFARCTION from chronic myocardial injury is a SIGNIFICANT DYNAMIC RISE OR FALL (A 'DELTA') OVER A SHORT TIME INTERVAL. (2) THE VALIDATED 0/1-HOUR RAPID PROTOCOL (ESC / ACC GUIDELINES): Large multicenter diagnostic trials (APACE, BACC, High-STEACS) validated the 0/1-hour algorithm for hs-cTnT: (a) RULE-OUT: Baseline hs-cTnT < 5 ng/L (if pain > 3h), OR baseline < 12 ng/L AND 1-hour delta < 3 ng/L (negative predictive value > 99.5%); (b) RULE-IN: Baseline hs-cTnT >= 52 ng/L, OR a 1-HOUR ABSOLUTE DELTA CHANGE >= 5 ng/L (positive predictive value > 75-80%); (c) OBSERVE ZONE: Patients who meet neither rule-out nor rule-in criteria (e.g., baseline 28 ng/L with 1-hour delta 1-4 ng/L) require a 3-hour troponin draw, continuous telemetry, and echocardiography. (3) NEXT STEP: Drawing a repeat hs-cTnT at EXACTLY 1 HOUR with a repeat ECG is the mandatory, validated next step to assess the 1-hour delta and rule in or rule out NSTEMI."
      ],
      [
        "Wait 6 to 8 hours before drawing a repeat troponin level, as high-sensitivity assays require several hours to exhibit measurable plasma changes",
        "Waiting 6 to 8 hours is obsolete practice from the era of conventional fourth-generation troponins; high-sensitivity assays detect microvascular cellular release within 1 hour, allowing rapid rule-in or rule-out."
      ],
      [
        "Immediately transport the patient to the cardiac catheterization laboratory for emergent invasive coronary angiography based solely on the baseline hs-cTnT of 28 ng/L",
        "Baseline hs-cTnT of 28 ng/L without dynamic delta or ST elevation does not warrant emergent catheterization; it may represent chronic myocardial injury, and the 1-hour delta must be assessed first."
      ],
      [
        "Administer intravenous full-dose alteplase 100 mg for presumed acute coronary occlusion",
        "Thrombolysis is strictly contraindicated in non-ST-elevation acute coronary syndromes (NSTEMI/unstable angina); randomized trials proved thrombolytics increase mortality and bleeding in NSTEMI."
      ],
      [
        "Reassure the patient that the pain is muscular, discontinue telemetry, and cancel further troponin testing",
        "Substernal pressure in a 62-year-old with a troponin above the 99th percentile (28 ng/L) cannot be dismissed as muscular; completing the serial 0/1-hour protocol is mandatory."
      ]
    ],
    "rationale": "High-sensitivity cardiac troponin (hs-cTn) assays enable rapid triage of acute chest pain. An elevated baseline troponin above the 99th percentile (here 28 ng/L; URL 14 ng/L) does not confirm acute MI without a dynamic rise/fall (delta), because chronic myocardial injury produces static elevations. Under the validated ESC/ACC 0/1-hour algorithm, a repeat hs-cTn level must be drawn exactly 1 hour after baseline: a 1-hour absolute delta >= 5 ng/L rules in acute MI, while a baseline < 12 ng/L with delta < 3 ng/L rules it out. Waiting 6-8 hours is obsolete.",
    "metadata": {
      "shortSolution": "Chest pain with baseline hs-cTnT of 28 ng/L (above URL 14) requires repeat hs-cTnT at 1 hour (plus ECG) to assess for dynamic delta (>= 5 ng/L) per the ESC 0/1-hour protocol.",
      "competingChoice": "Wait 6 to 8 hours before drawing a repeat troponin level, as high-sensitivity assays require several hours to exhibit measurable plasma changes",
      "exclusionFinding": "High-sensitivity assays detect changes within 1 hour; waiting 6-8 hours is obsolete and delays critical revascularization in evolving NSTEMI.",
      "pedagogicalValue": "Mastering the high-sensitivity troponin 0/1-hour protocol: checking a 1-hour repeat level to evaluate for dynamic delta changes distinguishing acute MI from chronic myocardial injury.",
      "citations": [
        "Collet JP, Thiele H, Barbato E, et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. Eur Heart J. 2021;42(14):1289-1367. PMID: 32860058.",
        "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. 2021;144(22):e368-e454. PMID: 34709979."
      ]
    },
    "critique": {
      "shortestValidSolution": "Inpatient chest pain + baseline hs-cTnT 28 ng/L -> repeat hs-cTnT at 1 hour (0/1-hour protocol) to evaluate for dynamic delta >= 5 ng/L.",
      "strongestCompetitor": "Wait 6 to 8 hours before drawing a repeat troponin level, as high-sensitivity assays require several hours to exhibit measurable plasma changes",
      "exclusionFinding": "High-sensitivity assays allow 1-hour repeat testing; 6-8 hour intervals are obsolete.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Chest pain with baseline hs-cTnT of 28 ng/L (above URL 14) requires repeat hs-cTnT at 1 hour (plus ECG) to assess for dynamic delta (>= 5 ng/L) per the ESC 0/1-hour protocol.",
      "distractorExclusionNotes": "Distractor exclusion verified: High-sensitivity assays detect changes within 1 hour; waiting 6-8 hours is obsolete and delays critical revascularization in evolving NSTEMI.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Chest pain with baseline hs-cTnT of 28 ng/L (above URL 14) requires repeat hs-cTnT at 1 hour (plus ECG) to assess for dynamic delta (>= 5 ng/L) per the ESC 0/1-hour protocol.",
    "necessaryInference": "Chest pain with baseline hs-cTnT of 28 ng/L (above URL 14) requires repeat hs-cTnT at 1 hour (plus ECG) to assess for dynamic delta (>= 5 ng/L) per the ESC 0/1-hour protocol.",
    "strongestDistractor": "Wait 6 to 8 hours before drawing a repeat troponin level, as high-sensitivity assays require several hours to exhibit measurable plasma changes",
    "distractorExclusion": "High-sensitivity assays detect changes within 1 hour; waiting 6-8 hours is obsolete and delays critical revascularization in evolving NSTEMI.",
    "citation": "Collet JP, Thiele H, Barbato E, et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. Eur Heart J. 2021;42(14):1289-1367. PMID: 32860058."
  },
  {
    "code": "op-c-s3-0437",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Alcohol Withdrawal Inpatient Management Protocols",
    "subtopic": "CIWA-Ar Symptom-Triggered Dosing vs Fixed-Schedule Regimens, Total Dose Reduction",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man with a 15-year history of heavy alcohol consumption (drinks approximately 1 pint of vodka daily) is admitted to the general medical ward for treatment of acute diverticulitis with intravenous piperacillin-tazobactam. His last alcohol drink was 18 hours prior to admission. Approximately 12 hours after admission, he develops coarse hand tremors, diaphoresis, nausea, anxiety, and mild agitation. Vital signs demonstrate blood pressure of 158/94 mm Hg, heart rate of 112/min, respiratory rate of 20/min, and temperature of 37.6 C (99.7 F). Physical examination reveals prominent postural tremor of both outstretched hands and tongue, flushed skin, and heavy perspiration on his forehead. Orienting questions confirm he is oriented to person, place, and year. There are no hallucinations, seizures, or delirium. The cross-covering intern must select an inpatient pharmacological protocol for alcohol withdrawal detoxification.\n\nAccording to American Society of Addiction Medicine (ASAM) guidelines and randomized clinical trial evidence (e.g., Saitz et al.), which of the following represents the preferred pharmacological protocol for managing acute alcohol withdrawal in this hospitalized patient?",
    "choices": [
      [
        "A symptom-triggered benzodiazepine protocol utilizing a validated scoring tool (e.g., Clinical Institute Withdrawal Assessment for Alcohol, Revised [CIWA-Ar]), administering oral lorazepam or chlordiazepoxide only when the CIWA-Ar score reaches >= 8 to 10",
        "Acute Alcohol Withdrawal Syndrome (AWS) results from chronic alcohol-induced neuroadaptation: chronic alcohol exposure upregulates excitatory NMDA/glutamate receptors and downregulates inhibitory GABA-A receptors. Abrupt cessation unmasks a severe hyperexcitable state of central adrenergic and glutamatergic excess. (1) BENZODIAZEPINES ARE FIRST-LINE: Benzodiazepines (chlordiazepoxide, diazepam, lorazepam) bind GABA-A receptors, enhancing chloride conductance and replacing the inhibitory tone previously provided by alcohol. They are the ONLY class proven to prevent withdrawal seizures and delirium tremens (DTs). (2) SYMPTOM-TRIGGERED VERSUS FIXED-SCHEDULE REGIMENS (SAITZ ET AL., JAMA 1994): (a) FIXED-SCHEDULE REGIMENS: Administer a predetermined dose of benzodiazepine (e.g., chlordiazepoxide 50 mg every 6 hours) for several days regardless of symptoms. This frequently causes severe over-sedation, respiratory depression, and paradoxical prolongation of hospitalization in mild withdrawers, while under-treating severe withdrawers. (b) SYMPTOM-TRIGGERED REGIMENS (THE GOLD STANDARD): Nursing staff assess the patient every 1 to 4 hours using a validated objective instrument (CIWA-Ar). A benzodiazepine dose (e.g., lorazepam 2 mg or chlordiazepoxide 50 mg) is administered ONLY WHEN the CIWA-Ar score reaches >= 8 to 10 (moderate withdrawal). Landmark randomized trials proved that symptom-triggered protocols DRAMATICALLY REDUCE TOTAL BENZODIAZEPINE REQUIREMENTS (by > 75%; median 100 mg vs 425 mg of chlordiazepoxide) and DRAMATICALLY SHORTEN TREATMENT DURATION (median 9 hours vs 68 hours) compared to fixed dosing, while achieving identical safety and seizure prevention."
      ],
      [
        "A scheduled, fixed-dose protocol administering oral chlordiazepoxide 50 mg every 6 hours around the clock for 5 consecutive days",
        "Fixed-dose regimens result in substantial over-sedation, accumulate active metabolites, increase fall and aspiration risks, and nearly quadruple the duration of detoxification compared to symptom-triggered protocols."
      ],
      [
        "Oral clonidine 0.2 mg three times daily as standalone monotherapy without benzodiazepines",
        "Alpha-2 agonists (clonidine) and beta-blockers suppress peripheral autonomic hyperactivity (tachycardia, hypertension), but they do NOT raise the seizure threshold or prevent fatal delirium tremens; benzodiazepines are mandatory."
      ],
      [
        "Intramuscular haloperidol 5 mg every 4 hours as first-line monotherapy for psychomotor agitation",
        "Antipsychotics lower the seizure threshold, predisposing the patient to grand mal alcohol withdrawal seizures; they are contraindicated as standalone therapy in alcohol withdrawal."
      ],
      [
        "Oral baclofen 10 mg three times daily combined with oral gabapentin 300 mg as primary acute withdrawal therapy",
        "Baclofen and gabapentin lack high-level evidence for preventing complicated withdrawal seizures or delirium tremens; they are not approved for acute inpatient alcohol detoxification."
      ]
    ],
    "rationale": "In acute alcohol withdrawal, symptom-triggered benzodiazepine administration guided by the CIWA-Ar protocol (giving lorazepam or chlordiazepoxide only when score >= 8-10) is the gold standard (ASAM guidelines). The landmark trial by Saitz et al. proved that symptom-triggered therapy reduces total benzodiazepine dosage by > 75% and shortens treatment duration from 68 hours to 9 hours compared to fixed-schedule dosing, while maintaining equal efficacy in preventing seizures and delirium tremens. Adrenergic agents (clonidine) do not prevent seizures. Antipsychotics lower seizure thresholds.",
    "metadata": {
      "shortSolution": "Acute alcohol withdrawal is best managed with a symptom-triggered benzodiazepine protocol (CIWA-Ar >= 8-10), which drastically reduces total benzodiazepine dose and detox duration compared to fixed dosing.",
      "competingChoice": "A scheduled, fixed-dose protocol administering oral chlordiazepoxide 50 mg every 6 hours around the clock for 5 consecutive days",
      "exclusionFinding": "Fixed-dose regimens cause severe over-sedation and quadruple the duration of detox; landmark trials proved symptom-triggered CIWA dosing is superior.",
      "pedagogicalValue": "Mastering inpatient alcohol withdrawal: symptom-triggered benzodiazepine therapy guided by CIWA-Ar minimizes drug exposure and hospital stay compared to fixed-dose regimens.",
      "citations": [
        "Saitz R, Mayo-Smith MF, Roberts MS, et al. Individualized treatment for alcohol withdrawal. A randomized clinical trial. JAMA. 1994;272(7):519-523. PMID: 8046805.",
        "The ASAM Clinical Practice Guideline on Alcohol-Withdrawal Management. J Addict Med. 2020;14(3S Suppl 1):1-72. PMID: 32578564."
      ]
    },
    "critique": {
      "shortestValidSolution": "Alcohol withdrawal -> symptom-triggered benzodiazepines guided by CIWA-Ar score (>= 8-10) reduces total drug dose and detox time.",
      "strongestCompetitor": "A scheduled, fixed-dose protocol administering oral chlordiazepoxide 50 mg every 6 hours around the clock for 5 consecutive days",
      "exclusionFinding": "Fixed-schedule protocols cause over-sedation and prolonged stays; symptom-triggered CIWA dosing is evidence-based standard.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Acute alcohol withdrawal is best managed with a symptom-triggered benzodiazepine protocol (CIWA-Ar >= 8-10), which drastically reduces total benzodiazepine dose and detox duration compared to fixed dosing.",
      "distractorExclusionNotes": "Distractor exclusion verified: Fixed-dose regimens cause severe over-sedation and quadruple the duration of detox; landmark trials proved symptom-triggered CIWA dosing is superior.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Acute alcohol withdrawal is best managed with a symptom-triggered benzodiazepine protocol (CIWA-Ar >= 8-10), which drastically reduces total benzodiazepine dose and detox duration compared to fixed dosing.",
    "necessaryInference": "Acute alcohol withdrawal is best managed with a symptom-triggered benzodiazepine protocol (CIWA-Ar >= 8-10), which drastically reduces total benzodiazepine dose and detox duration compared to fixed dosing.",
    "strongestDistractor": "A scheduled, fixed-dose protocol administering oral chlordiazepoxide 50 mg every 6 hours around the clock for 5 consecutive days",
    "distractorExclusion": "Fixed-dose regimens cause severe over-sedation and quadruple the duration of detox; landmark trials proved symptom-triggered CIWA dosing is superior.",
    "citation": "Saitz R, Mayo-Smith MF, Roberts MS, et al. Individualized treatment for alcohol withdrawal. A randomized clinical trial. JAMA. 1994;272(7):519-523. PMID: 8046805."
  },
  {
    "code": "op-c-s3-0438",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Hospital-Acquired Clostridioides difficile Infection Cross-Coverage",
    "subtopic": "Contact Precautions, Soap and Water Hygiene, Testing Algorithm, Oral Vancomycin/Fidaxomicin",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man who was admitted to the general medical ward 5 days ago for treatment of community-acquired pneumonia with intravenous ceftriaxone and azithromycin develops acute-onset watery diarrhea at 1:00 AM. Over the past 8 hours, he has had 5 large, unformed, watery bowel movements accompanied by diffuse lower abdominal cramping. On physical examination, he appears uncomfortable and mildly volume-depleted. Vital signs reveal blood pressure of 116/70 mm Hg, heart rate of 94/min, respiratory rate of 18/min, and temperature of 38.1 C (100.6 F). The abdomen is soft and non-distended with mild, diffuse tenderness to deep palpation across both lower quadrants, without guarding, rigidity, or rebound tenderness. Complete blood count demonstrates a white blood cell count of 13,800/mm3 (normal < 15,000/mm3) and serum creatinine of 1.0 mg/dL (baseline 0.9 mg/dL). Ceftriaxone and azithromycin are discontinued.\n\nWhich of the following represents the most appropriate immediate infection control and clinical management sequence for this patient?",
    "choices": [
      [
        "Immediately place the patient on Contact Precautions in a private room, mandate hand hygiene with soap and water (rather than alcohol-based rubs) for all healthcare personnel, submit an unformed liquid stool specimen for Clostridioides difficile toxin nucleic acid amplification or enzyme immunoassay testing, and initiate oral fidaxomicin or oral vancomycin",
        "Hospital-Acquired Clostridioides difficile Infection (CDI) is the leading cause of healthcare-associated infectious diarrhea, triggered by broad-spectrum antimicrobial disruption of colonic microbial flora: (1) IMMEDIATE INFECTION PREVENTION AND CONTROL (IDSA / SHEA GUIDELINES): (a) CONTACT PRECAUTIONS: The patient must be placed immediately in a private room (or cohorted) on Contact Precautions (gloves and gowns required for all room entry) AS SOON AS CDI IS SUSPECTED, without waiting for laboratory test confirmation. (b) MANDATORY SOAP AND WATER HAND HYGIENE: C. difficile produces hardy, dormant, keratin-coated endospores that are COMPLETELY RESISTANT TO ALCOHOL. Alcohol-based hand rubs DO NOT kill or denature C. difficile spores. Therefore, all healthcare workers and visitors MUST WASH HANDS WITH SOAP AND WATER UPON EXITING THE ROOM; mechanical friction and surfactant rinsing physically wash spores off the skin. (c) SPORE-CIDAL SURFACE DISINFECTION: Patient care equipment must be disinfected using EPA-registered hypochlorite (bleach-based) sporicidal disinfectants. (2) DIAGNOSTIC TESTING STEWARDSHIP: Stool testing should be performed ONLY on UNFORMED (liquid or loose) stool specimens; testing formed stool detects asymptomatic carriage and leads to inappropriate treatment. (3) FIRST-LINE THERAPY: For non-severe CDI (WBC < 15,000 cells/mm3 and Cr < 1.5 mg/dL), oral FIDAXOMICIN (200 mg BID x 10 days) is preferred, or oral VANCOMYCIN (125 mg QID x 10 days)."
      ],
      [
        "Place the patient on standard precautions, instruct staff to clean hands with alcohol-based hand sanitizer exclusively, and initiate oral metronidazole 500 mg three times daily",
        "Alcohol hand sanitizers do not kill C. difficile bacterial endospores (soap and water is mandatory), and oral metronidazole is inferior and no longer first-line therapy."
      ],
      [
        "Administer oral loperamide 4 mg immediately followed by 2 mg after each loose stool to control fluid losses while awaiting stool test results",
        "Antimotility agents (loperamide) prevent fecal toxin clearance, prolong mucosal toxin contact, and can precipitate fatal toxic megacolon; they are strictly contraindicated."
      ],
      [
        "Initiate intravenous vancomycin 1,000 mg every 12 hours infused over 60 minutes",
        "Intravenous vancomycin is eliminated by the kidneys and achieves zero concentration in the colonic lumen; oral vancomycin or oral fidaxomicin is required for C. diff colitis."
      ],
      [
        "Submit stool for testing and continue ceftriaxone to complete a full 10-day pneumonia course",
        "Continuing the inciting broad-spectrum antibiotic (ceftriaxone) sustains colonic dysbiosis and worsens C. difficile proliferation; inciting antibiotics should be stopped as soon as possible."
      ]
    ],
    "rationale": "Hospital-acquired C. difficile infection mandates immediate infection control: (1) Contact Precautions in a private room (gloves and gown), and (2) Hand hygiene with SOAP AND WATER (alcohol-based rubs do not kill C. diff endospores; mechanical washing is required). Stool testing (NAAT/EIA) should only be performed on loose stool. First-line therapy is oral fidaxomicin (preferred) or oral vancomycin (125 mg QID). IV vancomycin does not penetrate the gut lumen. Antimotility agents (loperamide) are contraindicated due to toxic megacolon risk.",
    "metadata": {
      "shortSolution": "Suspected hospital-acquired C. diff requires immediate Contact Precautions, soap and water hand hygiene (alcohol does not kill spores), stool toxin testing, and oral fidaxomicin or oral vancomycin.",
      "competingChoice": "Place the patient on standard precautions, instruct staff to clean hands with alcohol-based hand sanitizer exclusively, and initiate oral metronidazole 500 mg three times daily",
      "exclusionFinding": "Alcohol sanitizers fail to eradicate C. diff spores (soap and water is mandatory), and metronidazole is no longer first-line therapy.",
      "pedagogicalValue": "Mastering infection control for C. diff: soap and water hand hygiene (due to alcohol-resistant spores), Contact Precautions, and oral fidaxomicin/vancomycin therapy.",
      "citations": [
        "McDonald LC, Gerding DN, Johnson S, et al. Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA). Clin Infect Dis. 2018;66(7):e1-e48. PMID: 29462280.",
        "Johnson S, Lavergne V, Skinner AM, et al. Clinical Practice Guideline by the IDSA and SHEA: 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648."
      ]
    },
    "critique": {
      "shortestValidSolution": "Suspected hospital C. diff -> Contact Precautions + soap and water hand washing (alcohol doesn't kill spores) + stool NAAT/EIA + oral fidaxomicin/vancomycin.",
      "strongestCompetitor": "Place the patient on standard precautions, instruct staff to clean hands with alcohol-based hand sanitizer exclusively, and initiate oral metronidazole 500 mg three times daily",
      "exclusionFinding": "Alcohol rubs fail to kill C. diff endospores; soap and water is required, and metronidazole is obsolete.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Suspected hospital-acquired C. diff requires immediate Contact Precautions, soap and water hand hygiene (alcohol does not kill spores), stool toxin testing, and oral fidaxomicin or oral vancomycin.",
      "distractorExclusionNotes": "Distractor exclusion verified: Alcohol sanitizers fail to eradicate C. diff spores (soap and water is mandatory), and metronidazole is no longer first-line therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Suspected hospital-acquired C. diff requires immediate Contact Precautions, soap and water hand hygiene (alcohol does not kill spores), stool toxin testing, and oral fidaxomicin or oral vancomycin.",
    "necessaryInference": "Suspected hospital-acquired C. diff requires immediate Contact Precautions, soap and water hand hygiene (alcohol does not kill spores), stool toxin testing, and oral fidaxomicin or oral vancomycin.",
    "strongestDistractor": "Place the patient on standard precautions, instruct staff to clean hands with alcohol-based hand sanitizer exclusively, and initiate oral metronidazole 500 mg three times daily",
    "distractorExclusion": "Alcohol sanitizers fail to eradicate C. diff spores (soap and water is mandatory), and metronidazole is no longer first-line therapy.",
    "citation": "McDonald LC, et al. Clinical Practice Guidelines for Clostridium difficile Infection: 2017 Update by IDSA and SHEA. Clin Infect Dis. 2018;66(7):e1-e48. PMID: 29462280."
  },
  {
    "code": "op-c-s3-0439",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Transfusion Reaction Cross-Coverage Emergency Protocol",
    "subtopic": "Immediate Transfusion Cessation, Clerical Check, Hemolytic Workup, Hydration",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old woman with diffuse large B-cell lymphoma is receiving a transfusion of packed red blood cells (PRBCs) on the hematology-oncology ward for symptomatic anemia (hemoglobin 6.6 g/dL). Approximately 15 minutes after the transfusion begins (after 40 mL of blood has infused), the cross-covering resident is urgently called to the bedside because the patient has developed acute chills, rigors, nausea, and severe, aching bilateral flank and lower back pain. Vital signs demonstrate blood pressure of 88/54 mm Hg (baseline 124/76 mm Hg), heart rate of 124/min, respiratory rate of 24/min, and oral temperature of 38.9 C (102.0 F; baseline 36.8 C). Physical examination reveals a diaphoretic, anxious woman with flushed skin and no wheezing, stridor, or urticaria. An indwelling Foley catheter drains 20 mL of dark reddish-brown, tea-colored urine.\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediately stop the blood transfusion, disconnect the blood tubing from the intravenous cannula, maintain intravenous access with a fresh infusion of 0.9% normal saline, perform a bedside clerical verification check of all unit labels and patient identifiers, and notify the blood bank while sending blood and urine samples for direct antiglobulin testing, free plasma hemoglobin, and repeat crossmatching",
        "Acute Hemolytic Transfusion Reaction (AHTR) is a life-threatening medical emergency carrying high mortality from shock, disseminated intravascular coagulation (DIC), and acute renal failure, predominantly caused by clerical ABO-incompatibility errors: (1) PATHOPHYSIOLOGY: Preformed recipient IgM or IgG isohemagglutinins (e.g., recipient anti-A antibodies reacting with transfused donor A erythrocytes) bind foreign A or B surface antigens, activating the classical complement cascade to completion (membrane attack complex, C5b-9). This triggers massive intravascular hemolysis, releasing free hemoglobin and stroma into the plasma, accompanied by a massive surge of anaphylatoxins (C3a, C5a) that induce severe hypotension, vasodilation, and bronchospasm. Free hemoglobin binds plasma haptoglobin (depleting it), and excess uncomplexed hemoglobin filters across glomeruli into tubular fluid, producing dark reddish-brown hemoglobinuria and acute tubular necrosis (ATN). (2) MANDATORY EMERGENCY SEQUENCE (AABB GUIDELINES): (a) STEP 1: IMMEDIATELY STOP THE TRANSFUSION. The severity of AHTR is directly proportional to the volume of incompatible blood infused; stopping the infusion instantly limits antigen load. (b) STEP 2: DISCONNECT TUBING AND MAINTAIN IV ACCESS: Disconnect the entire blood administration set from the IV hub (do not flush blood remaining in the tubing into the patient) and initiate rapid IV crystalloid infusion (0.9% normal saline) to maintain renal perfusion, urine output (> 100 mL/h), and blood pressure. (c) STEP 3: CLERICAL VERIFICATION CHECK: Perform an immediate bedside verification of the patient's identification wristband, the blood product bag label, and compatibility paperwork to identify clerical mislabeling. (d) STEP 4: LABORATORY NOTIFICATION AND SAMPLES: Send the remaining blood product bag, fresh recipient EDTA blood, and fresh urine to the blood bank for repeat ABO/Rh typing, repeat crossmatch, Direct Antiglobulin Test (DAT / Coombs), plasma free hemoglobin, and serum haptoglobin."
      ],
      [
        "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
        "Slowing the transfusion is an egregious error in acute hemolytic reaction; continuing incompatible blood infusion dramatically accelerates complement-mediated intravascular hemolysis, DIC, and death."
      ],
      [
        "Administer intramuscular epinephrine 0.3 mg and nebulized albuterol for presumed severe anaphylactic transfusion reaction",
        "Anaphylaxis causes bronchospasm, stridor, and angioedema without dark red hemoglobinuria or flank pain; flank pain, fever, and tea-colored urine indicate acute intravascular hemolysis, requiring transfusion cessation and fluid resuscitation."
      ],
      [
        "Flush the remaining blood in the intravenous tubing into the patient with 50 mL of sterile water, then disconnect",
        "Flushing the tubing pushes incompatible red blood cells into the circulation, worsening hemolysis, and sterile water causes severe local osmotic lysis of host erythrocytes."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus immediately to force diuresis before administering any intravenous fluids",
        "Loop diuretics in a hypotensive patient (BP 88/54) with hemoglobinuria exacerbate prerenal intravascular hypoperfusion, accelerating acute tubular necrosis; aggressive isotonic saline hydration is mandatory."
      ]
    ],
    "rationale": "Acute hemolytic transfusion reaction (AHTR) is an emergency caused by ABO incompatibility. Infused antibodies trigger complement-mediated intravascular hemolysis, presenting with fever, chills, hypotension, flank pain, and dark reddish-brown hemoglobinuria. Immediate protocol: (1) STOP the transfusion immediately; (2) Disconnect tubing from the IV hub (do not flush tubing blood into patient) and run normal saline to maintain urine output and BP; (3) Perform bedside clerical check of patient ID and blood unit labels; (4) Notify blood bank and send unit + fresh recipient blood/urine for repeat typing, DAT (Coombs), free hemoglobin, and haptoglobin.",
    "metadata": {
      "shortSolution": "Fever, hypotension, flank pain, and red-brown urine during PRBC transfusion is an acute hemolytic reaction; immediately stop transfusion, disconnect tubing, run normal saline, perform clerical check, and send hemolytic workup to blood bank.",
      "competingChoice": "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
      "exclusionFinding": "Slowing the rate in acute hemolytic reaction allows lethal volumes of incompatible blood to infuse; the transfusion must be stopped immediately.",
      "pedagogicalValue": "Mastering the emergency protocol for acute hemolytic transfusion reaction: immediate cessation, line disconnection, IV hydration, clerical check, and sending blood/urine for DAT and repeat crossmatch.",
      "citations": [
        "Vlaar APJ, Celis S, Addas-Carvalho M, et al. An international consensus definition of acute transfusion reactions: report of the ISBT Working Party on Haemovigilance. Vox Sang. 2024;119(1):15-28. PMID: 37943567.",
        "Delaney M, Wendel S, Bercovitz RS, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet. 2016;388(10061):2825-2836. PMID: 27083327."
      ]
    },
    "critique": {
      "shortestValidSolution": "Transfusion reaction with flank pain + hypotension + dark urine -> stop transfusion immediately, disconnect line, infuse normal saline, perform clerical check, send blood/urine to blood bank.",
      "strongestCompetitor": "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
      "exclusionFinding": "Continuing or slowing the transfusion during acute hemolysis is fatal; immediate cessation and disconnection are mandatory.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Fever, hypotension, flank pain, and red-brown urine during PRBC transfusion is an acute hemolytic reaction; immediately stop transfusion, disconnect tubing, run normal saline, perform clerical check, and send hemolytic workup to blood bank.",
      "distractorExclusionNotes": "Distractor exclusion verified: Slowing the rate in acute hemolytic reaction allows lethal volumes of incompatible blood to infuse; the transfusion must be stopped immediately.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Fever, hypotension, flank pain, and red-brown urine during PRBC transfusion is an acute hemolytic reaction; immediately stop transfusion, disconnect tubing, run normal saline, perform clerical check, and send hemolytic workup to blood bank.",
    "necessaryInference": "Fever, hypotension, flank pain, and red-brown urine during PRBC transfusion is an acute hemolytic reaction; immediately stop transfusion, disconnect tubing, run normal saline, perform clerical check, and send hemolytic workup to blood bank.",
    "strongestDistractor": "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
    "distractorExclusion": "Slowing the rate in acute hemolytic reaction allows lethal volumes of incompatible blood to infuse; the transfusion must be stopped immediately.",
    "citation": "Vlaar APJ, Celis S, Addas-Carvalho M, et al. An international consensus definition of acute transfusion reactions: report of the ISBT Working Party on Haemovigilance. Vox Sang. 2024;119(1):15-28. PMID: 37943567."
  },
  {
    "code": "op-c-s3-0440",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Inpatient Fall Evaluation Protocol",
    "subtopic": "Post-Fall Assessment Algorithm, Cervical Spine/Hip Trauma, Avoiding Restraints",
    "provisionalDifficulty": 4,
    "stem": "An 79-year-old man who is hospitalized on the medical ward on day 2 for treatment of acute pyelonephritis with intravenous ceftriaxone is discovered lying on the floor beside his hospital bed at 2:30 AM by a nursing assistant. The bed rails were raised, and his call light was on the bedside table. The cross-covering resident is immediately paged to evaluate the patient. On arrival, the patient is conscious, lying supine on the linoleum floor. He is oriented to person and hospital, but is uncertain how he got to the floor, stating, 'I think I was trying to get to the bathroom.' He complains of pain in his right hip and right shoulder. Vital signs taken while supine on the floor demonstrate blood pressure of 134/78 mm Hg, heart rate of 82/min, respiratory rate of 16/min, and oxygen saturation of 97% on room air. The nursing assistant asks whether they should quickly lift the patient back into bed before the physician examines him.\n\nWhich of the following represents the most appropriate immediate post-fall clinical evaluation protocol for this patient?",
    "choices": [
      [
        "Perform an immediate on-the-floor physical assessment of the head, cervical spine, right hip/extremities, and neurological status to rule out acute fracture or spinal injury prior to moving the patient, followed by log-roll transfer to bed, orthostatic vital signs, and a comprehensive medication review",
        "Inpatient falls occur in approximately 3% to 5% of hospital admissions, with up to 25% resulting in physical injury (fractures, subdural hematomas, lacerations): (1) IMMEDIATE POST-FALL ASSESSMENT ON THE FLOOR: Moving an acutely fallen patient into bed before assessing for spinal or skeletal trauma can cause catastrophic displacement of an unstable cervical spine fracture or displaced femoral neck fracture. Guidelines (VA National Center for Patient Safety Fall Protocol) mandate: (a) Assess vital signs and level of consciousness immediately; (b) Examine head and neck for trauma or cervical spine tenderness; (c) Inspect extremities for deformities, shortening, or external rotation (indicative of hip fracture); (d) Perform a focused neurological examination (pupils, symmetry, motor function). (2) SAFE TRANSFER: If no cervical spine or hip fracture is suspected, assist the patient back to bed safely using appropriate mechanical lifting devices or slide boards with assistance (log-rolling if indicated). (3) POST-FALL SYSTEMATIC INVESTIGATION: Once stabilized in bed: (a) Measure orthostatic vital signs (supine and standing BP/HR) to detect orthostatic hypotension; (b) Check fingerstick blood glucose and review telemetry for transient arrhythmias/syncope; (c) Comprehensive medication review to identify contributing agents (sedatives, antihypertensives, anticholinergics, diuretics); and (d) Root-cause assessment (e.g., urgency/nocturia from pyelonephritis, lack of accessible urinal, footwear). (4) PHYSICAL RESTRAINT WARNING: Ordering physical restraints after a fall is strongly condemned by CMS and Joint Commission standards because restraints increase fall-related mortality, strangulation, combativeness, and pressure ulcers."
      ],
      [
        "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
        "Moving the patient prior to examining for hip or spinal injury risks displacing acute fractures, and applying physical restraints increases delirium, combativeness, and serious fall-related injury."
      ],
      [
        "Transport the patient immediately for emergent whole-body computed tomography (pan-scan) without performing a bedside physical examination",
        "Routine whole-body CT scanning without localized physical exam findings represents massive, unnecessary radiation exposure and delays focused clinical care."
      ],
      [
        "Administer intramuscular lorazepam 2 mg to calm the patient and prevent him from attempting to stand up again",
        "Benzodiazepines severely worsen sedation, cognitive confusion, and ataxia, dramatically increasing the risk of subsequent catastrophic fall injuries."
      ],
      [
        "Document the event in the chart and reassure the patient, deferring physical examination until morning rounds",
        "Deferring physical assessment after an unwitnessed fall risks missing occult femoral neck fractures or evolving intracranial hemorrhage, representing serious substandard care."
      ]
    ],
    "rationale": "Following an inpatient fall, the patient must be assessed immediately ON THE FLOOR before moving, to rule out head/cervical spine trauma or hip fractures (shortened, externally rotated leg) that could be displaced by improper transfer. Once cleared and safely moved to bed, post-fall evaluation includes: orthostatic vitals, focused neuro check, glucose check, telemetry review, and medication reconciliation (deprescribing sedatives/antihypertensives). Physical restraints are strictly prohibited as they increase fall injuries and mortality.",
    "metadata": {
      "shortSolution": "Inpatient fall evaluation requires immediate on-the-floor trauma/spine/hip assessment before moving the patient to bed, followed by orthostatics and medication review; avoid physical restraints.",
      "competingChoice": "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
      "exclusionFinding": "Moving before examination risks displacing hip or spinal fractures; physical restraints are condemned by CMS and increase fall-related mortality.",
      "pedagogicalValue": "Mastering the inpatient post-fall protocol: on-the-floor primary survey for fracture/spine injury before transfer, followed by orthostatics, medication review, and avoiding restraints.",
      "citations": [
        "Bouldin ED, Andresen EM, Dunton NE, et al. Complexities of measuring hospital fall rates: an analysis of the National Database of Nursing Quality Indicators. J Patient Saf. 2013;9(4):187-194. PMID: 23644485.",
        "Ganz DA, Huang C, Saliba D, Shier V. Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care. Agency for Healthcare Research and Quality (AHRQ). Publication No. 13-0015-EF. 2013. NLM ID: 101614728."
      ]
    },
    "critique": {
      "shortestValidSolution": "Inpatient fall -> assess on floor for hip/spine/head trauma before transfer to bed; check orthostatics and meds; avoid restraints.",
      "strongestCompetitor": "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
      "exclusionFinding": "Moving before examination risks displacing fractures; physical restraints increase fall injuries and are prohibited.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Inpatient fall evaluation requires immediate on-the-floor trauma/spine/hip assessment before moving the patient to bed, followed by orthostatics and medication review; avoid physical restraints.",
      "distractorExclusionNotes": "Distractor exclusion verified: Moving before examination risks displacing hip or spinal fractures; physical restraints are condemned by CMS and increase fall-related mortality.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Inpatient fall evaluation requires immediate on-the-floor trauma/spine/hip assessment before moving the patient to bed, followed by orthostatics and medication review; avoid physical restraints.",
    "necessaryInference": "Inpatient fall evaluation requires immediate on-the-floor trauma/spine/hip assessment before moving the patient to bed, followed by orthostatics and medication review; avoid physical restraints.",
    "strongestDistractor": "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
    "distractorExclusion": "Moving before examination risks displacing hip or spinal fractures; physical restraints are condemned by CMS and increase fall-related mortality.",
    "citation": "Bouldin ED, Andresen EM, Dunton NE, et al. Complexities of measuring hospital fall rates: an analysis of the National Database of Nursing Quality Indicators. J Patient Saf. 2013;9(4):187-194. PMID: 23644485."
  },
  {
    "code": "op-c-s3-0441",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Postoperative Oliguria and Point-of-Care Bladder Ultrasound",
    "subtopic": "Mechanical Catheter Obstruction, Acute Urinary Retention, Fluid Challenge Stewardship",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man who underwent an elective open right hemicolectomy 8 hours ago is admitted to the surgical step-down unit. He has an indwelling Foley urinary catheter connected to a gravity drainage bag. At 1:30 AM, the cross-covering resident is paged because the patient's urine output has dropped to zero over the past 3 hours (total urine output 0 mL over 3 hours; preceding hourly outputs were 45 mL, 40 mL, and 35 mL). He has received 2,000 mL of intravenous lactated Ringer solution since the beginning of surgery. He complains of moderate lower abdominal fullness and discomfort. Vital signs demonstrate blood pressure of 142/86 mm Hg, heart rate of 92/min, respiratory rate of 16/min, and oxygen saturation of 98% on room air. Physical examination reveals a clean abdominal dressing with no active bleeding. Palpation of the lower abdomen reveals dullness to percussion and a smooth, firm, rounded, tender fullness in the suprapubic area extending 4 cm above the pubic symphysis. The Foley catheter tubing is inspected and shows no visible urine flow into the drainage bag. The nurse asks if a 1,000-mL intravenous normal saline bolus and intravenous furosemide 40 mg should be administered for presumed postoperative acute tubular necrosis.\n\nWhich of the following represents the most appropriate immediate diagnostic and therapeutic step for this patient?",
    "choices": [
      [
        "Perform an immediate bedside point-of-care bladder ultrasound (POCUS) to assess for acute urinary retention, and flush the Foley catheter with 30 to 50 mL of sterile saline (or replace the catheter) to relieve mechanical catheter occlusion",
        "Postoperative Oliguria (urine output < 0.5 mL/kg/h) is an exceedingly common cross-coverage problem. (1) POST-RENAL OBSTRUCTION AS FIRST PRIORITY: Before diagnosing prerenal azotemia or intrinsic acute tubular necrosis (ATN), the clinician MUST ALWAYS FIRST RULE OUT MECHANICAL POST-RENAL OUTFLOW OBSTRUCTION. In hospitalized patients with indwelling Foley catheters, sudden, abrupt cessation of urine output (dropping abruptly from 40 mL/h to zero) is overwhelmingly caused by MECHANICAL CATHETER MALFUNCTION (tubing kinking, intraluminal blood clot, mucous plug, sediment occlusion, or catheter tip displacement into the prostatic urethra). (2) POINT-OF-CARE BLADDER ULTRASOUND (POCUS): A bedside bladder ultrasound scan rapidly provides an objective, non-invasive measurement of retained intravesical volume. A retained bladder volume > 300 to 500 mL (with a catheter in place) definitively establishes acute urinary retention secondary to catheter outflow obstruction. (3) DEFINITIVE RELIEF: The immediate management is to gently flush and aspirate the Foley catheter with 30 to 50 mL of sterile saline using aseptic technique to dislodge intraluminal obstructing clots or sediment. If resistance is met or flow cannot be restored, the catheter must be immediately removed and replaced. (4) DANGER OF BLIND FLUID BOLUSES AND DIURETICS: Administering large IV fluid boluses (1,000 mL saline) to a patient with an obstructed bladder causes dangerous, agonizing bladder overdistension, detrusor rupture, and acute hypertension. Administering loop diuretics (furosemide) increases urine production into an occluded bladder, exponentially worsening intravesical pressure and pain."
      ],
      [
        "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
        "Giving an intravenous fluid bolus to a patient with mechanical catheter obstruction and a palpable suprapubic bladder mass accelerates bladder overdistension, risks bladder rupture, and worsens pain."
      ],
      [
        "Administer intravenous furosemide 40 mg to force renal tubular diuresis and test tubular responsiveness",
        "Administering a loop diuretic against a mechanically obstructed Foley catheter causes rapid massive urine accumulation behind the obstruction, causing extreme pain and bladder barotrauma."
      ],
      [
        "Order an emergent non-contrast renal CT scan to rule out acute bilateral ureteral transection",
        "Bilateral ureteral transection during hemicolectomy is exceedingly rare; the presence of an obstructed, palpable bladder points to an infravesical/catheter problem, which is diagnosed bedside with ultrasound."
      ],
      [
        "Initiate a continuous intravenous dopamine infusion at 'renal dose' (2 mcg/kg/min) to dilate renal arterioles",
        "'Renal-dose' dopamine has been proven completely ineffective in multiple randomized controlled trials (ANZICS trial); it does not improve renal perfusion or urine output and increases tachyarrhythmias."
      ]
    ],
    "rationale": "Sudden-onset complete anuria (dropping abruptly to 0 mL/h) in a patient with a Foley catheter and suprapubic fullness is mechanical catheter obstruction (clot, kinking, sediment plug) until proven otherwise. Bedside bladder ultrasound (POCUS) confirms retained bladder volume (> 300-500 mL). Flushing the catheter with 30-50 mL of sterile saline or replacing the catheter immediately restores outflow. Giving IV fluid boluses or furosemide to an obstructed bladder is dangerous and causes bladder overdistension and severe pain. Renal-dose dopamine is proven ineffective.",
    "metadata": {
      "shortSolution": "Postoperative patient with sudden zero urine output, suprapubic fullness, and Foley catheter has mechanical catheter obstruction; confirm with bedside bladder ultrasound and flush/replace catheter before giving fluids or diuretics.",
      "competingChoice": "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
      "exclusionFinding": "Infusing fluids into a patient with mechanical catheter outflow obstruction and palpable bladder fullness causes severe bladder barotrauma and pain.",
      "pedagogicalValue": "Mastering cross-coverage of sudden postoperative anuria: always rule out mechanical catheter obstruction with bedside bladder ultrasound before giving fluids or diuretics.",
      "citations": [
        "Bellomo R, Ronco C, Kellum JA, et al. Acute renal failure - definition, outcome measures, animal models, fluid therapy and information technology needs: the Second International Consensus Conference of the Acute Dialysis Quality Initiative (ADQI) Group. Crit Care. 2004;8(4):R204-R212. PMID: 15312219.",
        "Klotz L. How to manage acute urinary retention. Can Fam Physician. 1999;45:1207-1212. PMID: 10349195."
      ]
    },
    "critique": {
      "shortestValidSolution": "Sudden anuria + Foley in place + suprapubic fullness -> bedside bladder ultrasound + flush/replace Foley (relieve mechanical obstruction); avoid fluids/diuretics.",
      "strongestCompetitor": "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
      "exclusionFinding": "Giving fluid boluses against an obstructed Foley causes bladder overdistension and pain; relieving the obstruction is the first step.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Postoperative patient with sudden zero urine output, suprapubic fullness, and Foley catheter has mechanical catheter obstruction; confirm with bedside bladder ultrasound and flush/replace catheter before giving fluids or diuretics.",
      "distractorExclusionNotes": "Distractor exclusion verified: Infusing fluids into a patient with mechanical catheter outflow obstruction and palpable bladder fullness causes severe bladder barotrauma and pain.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Postoperative patient with sudden zero urine output, suprapubic fullness, and Foley catheter has mechanical catheter obstruction; confirm with bedside bladder ultrasound and flush/replace catheter before giving fluids or diuretics.",
    "necessaryInference": "Postoperative patient with sudden zero urine output, suprapubic fullness, and Foley catheter has mechanical catheter obstruction; confirm with bedside bladder ultrasound and flush/replace catheter before giving fluids or diuretics.",
    "strongestDistractor": "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
    "distractorExclusion": "Infusing fluids into a patient with mechanical catheter outflow obstruction and palpable bladder fullness causes severe bladder barotrauma and pain.",
    "citation": "Bellomo R, et al. Acute renal failure - definition, outcome measures, animal models, fluid therapy: the ADQI Group. Crit Care. 2004;8(4):R204-R212. PMID: 15312219."
  },
  {
    "code": "op-c-s3-0442",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Massive Pulmonary Embolism in Early Postoperative Patients",
    "subtopic": "Systemic Thrombolysis Contraindications, Catheter-Directed Thrombectomy, Surgical Embolectomy",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman who underwent an elective open sigmoid colectomy for recurrent diverticulitis 36 hours ago is recovering on the surgical floor. She suddenly develops severe shortness of breath, diaphoresis, and syncope when attempting to sit on the edge of the bed. On arrival of the rapid response team, she is pale, tachypneic, and cool to the touch. Vital signs demonstrate blood pressure of 78/48 mm Hg, heart rate of 128/min, respiratory rate of 32/min, and oxygen saturation of 86% on ambient air, which improves only to 90% on a 100% non-rebreather mask. Physical examination reveals distended jugular veins, a loud pulmonic component of S2, and clear lungs bilaterally. The surgical abdominal incision is clean with no active external bleeding. Bedside transthoracic echocardiography reveals severe right ventricular dilation with hypokinesis (McConnell sign) and a flattened interventricular septum bowing into the left ventricle (D-shaped left ventricle), consistent with acute cor pulmonale and massive pulmonary embolism. Infusion of isotonic crystalloids (500 mL) fails to improve her blood pressure (BP remains 80/50 mm Hg). Norepinephrine infusion is initiated. The surgical team notes that she is only 36 hours post-major abdominal surgery.\n\nWhich of the following represents the most appropriate reperfusion strategy for this patient's massive pulmonary embolism?",
    "choices": [
      [
        "Emergent catheter-directed mechanical thrombectomy (or surgical pulmonary embolectomy), withholding full-dose systemic intravenous thrombolysis due to the absolute contraindication of major abdominal surgery within the past 2 weeks",
        "Massive (High-Risk) Pulmonary Embolism is defined by sustained systemic hypotension (systolic BP < 90 mm Hg for > 15 minutes, or requiring inotropes/vasopressors, or cardiac arrest) caused by acute right ventricular failure: (1) SYSTEMIC THROMBOLYSIS CONTRAINDICATIONS (AHA / CHEST / ESC GUIDELINES): In unselected massive PE, full-dose intravenous systemic thrombolytic therapy (e.g., alteplase 100 mg IV over 2 hours) is first-line. However, MAJOR SURGERY WITHIN THE PRECEDING 14 DAYS IS AN ABSOLUTE CONTRAINDICATION TO FULL-DOSE SYSTEMIC THROMBOLYSIS. In a patient 36 hours post-open bowel resection, systemic thrombolytic therapy will rapidly dissolve hemostatic surgical ligatures and clots on mesenteric vascular pedicles, precipitating catastrophic, uncontrollable intra-abdominal exsanguination, hemorrhagic shock, and death in > 50% of cases. (2) REPERFUSION ALTERNATIVES (INTERVENTIONAL / SURGICAL): When systemic thrombolysis is contraindicated or has failed: (a) CATHETER-DIRECTED MECHANICAL THROMBECTOMY (CDT): Large-bore aspiration catheter thrombectomy or mechanical maceration (e.g., FlowTriever or Indigo systems) can extract large saddle clots from the main pulmonary arteries through femoral venous access with minimal bleeding risk; (b) SURGICAL PULMONARY EMBOLECTOMY: Performed via median sternotomy on cardiopulmonary bypass to manually open the pulmonary trunk and extract clots. Both modalities rapidly reduce RV afterload and restore cardiac output without exposing the surgical abdomen to systemic fibrinolysis."
      ],
      [
        "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
        "Systemic full-dose thrombolysis is absolutely contraindicated 36 hours post-major open abdominal surgery; it causes massive, fatal intra-abdominal mesenteric hemorrhage."
      ],
      [
        "Therapeutic anticoagulation with subcutaneous low-molecular-weight heparin monotherapy as standalone conservative therapy",
        "Massive PE with refractory shock (BP 78/48 on norepinephrine) has a mortality > 50% within hours; anticoagulation alone does not dissolve obstructing clots or restore cardiac output."
      ],
      [
        "Immediate placement of an inferior vena cava (IVC) filter in the cardiac catheterization laboratory without attempting pulmonary reperfusion",
        "IVC filters prevent future lower-extremity emboli but do not relieve the acute massive pulmonary arterial obstruction causing right ventricular collapse and shock."
      ],
      [
        "Administer high-dose inhaled nitric oxide and continue observation in the step-down unit",
        "Inhaled nitric oxide provides modest pulmonary vasodilation but cannot relieve anatomical obstruction of main pulmonary arteries in massive PE with cardiogenic shock."
      ]
    ],
    "rationale": "Massive pulmonary embolism presents with persistent hypotension (systolic BP < 90 mm Hg) and acute RV failure. While systemic thrombolysis is first-line in general, recent major surgery within 14 days (here 36 hours post-colectomy) is an absolute contraindication to full-dose systemic thrombolytic therapy due to extreme risk of fatal intra-abdominal hemorrhage. Guidelines (AHA/ESC/CHEST) mandate emergent catheter-directed mechanical thrombectomy (aspiration/maceration) or surgical pulmonary embolectomy on cardiopulmonary bypass when systemic thrombolysis is contraindicated.",
    "metadata": {
      "shortSolution": "Massive PE with shock 36 hours post-colectomy cannot receive systemic thrombolysis (absolute contraindication: major surgery < 14 days); requires emergent catheter-directed thrombectomy or surgical embolectomy.",
      "competingChoice": "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
      "exclusionFinding": "Systemic thrombolysis within 14 days of major surgery causes catastrophic intra-abdominal hemorrhage; catheter-directed thrombectomy or surgical embolectomy is mandatory.",
      "pedagogicalValue": "Recognizing contraindications to systemic thrombolysis in massive PE (recent major surgery < 14 days) and selecting catheter-directed thrombectomy or surgical embolectomy.",
      "citations": [
        "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31504429.",
        "Jaff MR, McMurtry MS, Archer SL, et al. Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension: a scientific statement from the American Heart Association. Circulation. 2011;123(16):1788-1830. PMID: 21422387."
      ]
    },
    "critique": {
      "shortestValidSolution": "Massive PE with shock + recent surgery (36h post-colectomy) -> catheter-directed thrombectomy or surgical embolectomy (systemic thrombolysis is contraindicated).",
      "strongestCompetitor": "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
      "exclusionFinding": "Recent major surgery (< 14 days) is an absolute contraindication to systemic thrombolysis due to fatal bleeding.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Massive PE with shock 36 hours post-colectomy cannot receive systemic thrombolysis (absolute contraindication: major surgery < 14 days); requires emergent catheter-directed thrombectomy or surgical embolectomy.",
      "distractorExclusionNotes": "Distractor exclusion verified: Systemic thrombolysis within 14 days of major surgery causes catastrophic intra-abdominal hemorrhage; catheter-directed thrombectomy or surgical embolectomy is mandatory.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Massive PE with shock 36 hours post-colectomy cannot receive systemic thrombolysis (absolute contraindication: major surgery < 14 days); requires emergent catheter-directed thrombectomy or surgical embolectomy.",
    "necessaryInference": "Massive PE with shock 36 hours post-colectomy cannot receive systemic thrombolysis (absolute contraindication: major surgery < 14 days); requires emergent catheter-directed thrombectomy or surgical embolectomy.",
    "strongestDistractor": "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
    "distractorExclusion": "Systemic thrombolysis within 14 days of major surgery causes catastrophic intra-abdominal hemorrhage; catheter-directed thrombectomy or surgical embolectomy is mandatory.",
    "citation": "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31504429."
  },
  {
    "code": "op-c-s3-0443",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Venous Thromboembolism Prophylaxis in Severe Renal Impairment",
    "subtopic": "Unfractionated Heparin vs LMWH Bioaccumulation, eGFR < 30 mL/min, Bleeding Risk",
    "provisionalDifficulty": 5,
    "stem": "An 74-year-old man with end-stage renal disease secondary to hypertensive nephrosclerosis (stage 5 non-dialysis chronic kidney disease; estimated GFR 18 mL/min/1.73 m2, baseline serum creatinine 4.1 mg/dL) is admitted to the general medical ward for treatment of acute bacterial cellulitis with intravenous vancomycin. He is largely bedbound during this acute illness. Physical examination reveals an alert, frail man with localized erythema and edema over the left forearm. Vital signs are normal. Complete blood count demonstrates hemoglobin of 9.2 g/dL and platelet count of 180,000/mm3. Baseline coagulation parameters are normal (INR 1.0, aPTT 28 seconds). The patient has no active bleeding or history of heparin-induced thrombocytopenia. The admitting resident plans to order pharmacologic thromboprophylaxis to prevent hospital-acquired deep vein thrombosis.\n\nAccording to current American College of Chest Physicians (CHEST) and American Society of Hematology (ASH) guidelines, which of the following represents the preferred pharmacologic venous thromboembolism (VTE) prophylaxis regimen for this patient?",
    "choices": [
      [
        "Subcutaneous low-dose unfractionated heparin (UFH; 5,000 units subcutaneously every 8 to 12 hours), which is preferred over low-molecular-weight heparin in patients with severe renal impairment (eGFR < 30 mL/min) because UFH is cleared primarily by the reticuloendothelial system rather than the kidneys",
        "Venous Thromboembolism (VTE) prophylaxis in hospitalized medically ill patients requires careful consideration of renal elimination kinetics: (1) ELIMINATION OF LOW-MOLECULAR-WEIGHT HEPARINS (LMWH: enoxaparin, dalteparin): LMWH molecules are eliminated almost exclusively (> 80-90%) by renal GLOMERULAR FILTRATION. In patients with severe renal impairment (estimated GFR < 30 mL/min/1.73 m2), renal clearance of LMWH drops precipitously, leading to progressive PHARMACOKINETIC BIOACCUMULATION of anti-Xa activity. Multiple clinical trials and meta-analyses prove that administering standard-dose or unadjusted LMWH in severe renal failure nearly quadruples the risk of catastrophic major bleeding (e.g., retroperitoneal hemorrhage, fatal gastrointestinal bleeding) without providing superior antithrombotic efficacy. (2) ELIMINATION OF UNFRACTIONATED HEPARIN (UFH): Unfractionated heparin is a heterogeneous mixture of glycosaminoglycans cleared primarily by a rapid, saturable cellular mechanism involving ENDOTHELIAL CELLS AND MACROPHAGES OF THE RETICULOENDOTHELIAL SYSTEM, followed by hepatic depolymerization; renal clearance plays only a minor, non-saturable secondary role at very high doses. (3) GUIDELINE RECOMMENDATION: For hospitalized patients with severe renal impairment (eGFR < 30 mL/min), current CHEST and ASH guidelines STRONGLY PREFER LOW-DOSE UNFRACTIONATED HEPARIN (UFH 5,000 units SC q8h or q12h) over LMWH. If enoxaparin must be used when UFH is strictly unavailable, dose reduction (e.g., 30 mg SC once daily instead of 40 mg daily) and mandatory anti-Xa trough monitoring are required."
      ],
      [
        "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
        "Enoxaparin is renally cleared; administering 40 mg daily in eGFR 18 mL/min leads to severe drug accumulation and a nearly 4-fold increase in major bleeding complications."
      ],
      [
        "Oral rivaroxaban 10 mg daily as preferred oral thromboprophylaxis",
        "Direct oral factor Xa inhibitors are renally eliminated and are not approved for routine medical VTE prophylaxis in stage 5 CKD; they carry high bleeding risks without monitoring."
      ],
      [
        "Subcutaneous fondaparinux 2.5 mg daily as first-line synthetic thromboprophylaxis",
        "Fondaparinux is 100% renally excreted and carries an absolute FDA contraindication in severe renal impairment (eGFR < 30 mL/min) due to catastrophic major hemorrhage risks."
      ],
      [
        "Withhold all mechanical and pharmacological thromboprophylaxis because renal failure provides natural auto-anticoagulation",
        "Uremia causes platelet dysfunction but does NOT protect against venous thromboembolism; bedbound hospitalized patients with CKD have high rates of fatal pulmonary embolism and require prophylaxis."
      ]
    ],
    "rationale": "In hospitalized patients with severe renal impairment (eGFR < 30 mL/min), unfractionated heparin (UFH 5,000 units SC q8-12h) is preferred over low-molecular-weight heparin (enoxaparin) for VTE prophylaxis. LMWH is cleared renally (> 80%), causing pharmacokinetic bioaccumulation and quadrupling major bleeding risk in advanced renal failure. UFH is cleared by endothelial cells and the reticuloendothelial system, making its clearance independent of renal function. Fondaparinux is 100% renally cleared and is absolutely contraindicated for eGFR < 30.",
    "metadata": {
      "shortSolution": "VTE prophylaxis in severe renal failure (eGFR 18 mL/min) requires subcutaneous unfractionated heparin (UFH 5,000 U q8-12h); avoid LMWH (enoxaparin) to prevent renal drug bioaccumulation and bleeding.",
      "competingChoice": "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
      "exclusionFinding": "Enoxaparin accumulates in renal failure (eGFR < 30) due to renal excretion, quadrupling major bleeding; UFH is cleared by reticuloendothelial cells and is preferred.",
      "pedagogicalValue": "Understanding the clearance pathways of anticoagulants: LMWH/fondaparinux accumulate in renal failure (eGFR < 30), making subcutaneous UFH the preferred agent for VTE prophylaxis.",
      "citations": [
        "Sch\u00fcnemann HJ, Cushman M, Burnett AE, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: prophylaxis for hospitalized and nonhospitalized medical patients. Blood Adv. 2018;2(22):3198-3225. PMID: 30482763.",
        "Lim W, Dentali F, Eikelboom JW, Crowther MA. Meta-analysis: low-molecular-weight heparin and bleeding in patients with severe renal insufficiency. Ann Intern Med. 2006;144(9):673-684. PMID: 16670137."
      ]
    },
    "critique": {
      "shortestValidSolution": "VTE prophylaxis in severe CKD (eGFR < 30) -> subcutaneous unfractionated heparin (UFH 5,000 U q8-12h) avoids renal bioaccumulation.",
      "strongestCompetitor": "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
      "exclusionFinding": "Enoxaparin bioaccumulates in renal failure and quadruples major bleeding; UFH is cleared reticuloendothelially.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: VTE prophylaxis in severe renal failure (eGFR 18 mL/min) requires subcutaneous unfractionated heparin (UFH 5,000 U q8-12h); avoid LMWH (enoxaparin) to prevent renal drug bioaccumulation and bleeding.",
      "distractorExclusionNotes": "Distractor exclusion verified: Enoxaparin accumulates in renal failure (eGFR < 30) due to renal excretion, quadrupling major bleeding; UFH is cleared by reticuloendothelial cells and is preferred.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "VTE prophylaxis in severe renal failure (eGFR 18 mL/min) requires subcutaneous unfractionated heparin (UFH 5,000 U q8-12h); avoid LMWH (enoxaparin) to prevent renal drug bioaccumulation and bleeding.",
    "necessaryInference": "VTE prophylaxis in severe renal failure (eGFR 18 mL/min) requires subcutaneous unfractionated heparin (UFH 5,000 U q8-12h); avoid LMWH (enoxaparin) to prevent renal drug bioaccumulation and bleeding.",
    "strongestDistractor": "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
    "distractorExclusion": "Enoxaparin accumulates in renal failure (eGFR < 30) due to renal excretion, quadrupling major bleeding; UFH is cleared by reticuloendothelial cells and is preferred.",
    "citation": "Sch\u00fcnemann HJ, Cushman M, Burnett AE, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: prophylaxis for hospitalized and nonhospitalized medical patients. Blood Adv. 2018;2(22):3198-3225. PMID: 30482763."
  },
  {
    "code": "op-c-s3-0444",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Nervous System",
    "topic": "Postoperative Delirium and Psychosis in Parkinson Disease",
    "subtopic": "Avoidance of Typical Antipsychotics, Dopamine Antagonism Dangers, Quetiapine and Pimavanserin",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a 7-year history of Parkinson disease managed with oral carbidopa-levodopa (25/100 mg four times daily) and pramipexole (0.5 mg three times daily) undergoes elective open repair of an incarcerated inguinal hernia under general anesthesia. On postoperative night 1, the cross-covering resident is called to the bedside because the patient has become agitated, fearful, and is experiencing vivid visual hallucinations, insisting that 'black insects are crawling all over the walls and ceiling.' Physical examination reveals a frightened, tremulous man who is disoriented to time and place. Vital signs demonstrate blood pressure of 132/78 mm Hg, heart rate of 84/min, respiratory rate of 18/min, and temperature of 37.2 C (99.0 F). Neurological examination shows bilateral resting pill-rolling tremors, mild cogwheel rigidity, and no focal cranial nerve deficits. Serum electrolytes, blood glucose, and urinalysis are normal. The bedside surgical nurse has drawn up 5 mg of haloperidol into a syringe and asks for authorization to administer it intravenously to control his agitated hallucinations.\n\nWhich of the following explains why intravenous haloperidol is strictly contraindicated in this patient, and what is the preferred pharmacological strategy if non-pharmacological de-escalation fails?",
    "choices": [
      [
        "Haloperidol exerts potent dopamine D2 receptor antagonism in the striatum, which precipitates acute catastrophic motor deterioration, severe Parkinsonian 'off' crisis, neuroleptic malignant syndrome, or irreversible rigidity; if medication is necessary, low-dose quetiapine or pimavanserin is the preferred agent",
        "Management of psychosis and delirium in Parkinson Disease (PD) is exceptionally challenging due to conflicting neurochemical systems: (1) PATHOPHYSIOLOGY OF PD PSYCHOSIS: Parkinson disease is characterized by chronic dopaminergic depletion in the striatum (causing motor parkinsonism) combined with relative mesolimbic and cortical hyper-reactivity, often aggravated by dopaminergic medications (especially dopamine receptor agonists like pramipexole and ropinirole). Visual hallucinations are characteristically well-formed and non-threatening initially, but become distressing and paranoid during acute hospital stressors (surgery, infection, opioids). (2) ABSOLUTE CONTRAINDICATION TO TYPICAL ANTIPSYCHOTICS: First-generation antipsychotics (HALOPERIDOL, fluphenazine) and certain second-generation antipsychotics with high D2 affinity (RISPERIDONE, OLANZAPINE) POTENTLY BLOCK DOPAMINE D2 RECEPTORS IN THE DORSAL STRIATUM. In a patient with baseline Parkinson disease, administering haloperidol completely shuts down remaining striatal dopaminergic neurotransmission, precipitating: (a) Catastrophic, irreversible akinesia and 'lead-pipe' rigidity; (b) Complete inability to swallow or breathe, leading to fatal aspiration; (c) Neuroleptic Malignant Syndrome (NMS); and (d) Marked increase in 30-day mortality. Haloperidol is STRICTLY CONTRAINDICATED in Parkinson disease. (3) FIRST-LINE MEDICAL MANAGEMENT: (a) Identify and treat underlying triggers (infection, pain, opioids, urinary retention); (b) Taper or discontinue high-potency adjunctive antiparkinsonian drugs with high psychotogenic potential (first stop anticholinergics, then amantadine, then dopamine agonists like pramipexole, preserving carbidopa-levodopa); (c) IF ANTIPSYCHOTIC PHARMACOTHERAPY IS UNREASONABLY AVOIDABLE: LOW-DOSE QUETIAPINE (12.5 to 25 mg at bedtime; minimal D2 affinity, fast dissociation) OR PIMAVANSERIN (a selective 5-HT2A inverse agonist that possesses ZERO DOPAMINE RECEPTOR AFFINITY) are the ONLY guideline-recommended antipsychotics in Parkinson disease."
      ],
      [
        "Haloperidol induces massive central acetylcholine depletion causing acute cholinergic crisis; intravenous atropine should be administered instead",
        "Haloperidol is a dopamine receptor antagonist, not an anticholinergic; it exacerbates dopamine deficiency in Parkinson disease, and atropine is not indicated."
      ],
      [
        "Administer intravenous haloperidol combined with intravenous diphenhydramine to fully neutralize any extrapyramidal motor risks",
        "Diphenhydramine is a potent anticholinergic that worsens delirium, cognitive decline, and urinary retention; it cannot prevent haloperidol-induced Parkinsonian crisis and is contraindicated."
      ],
      [
        "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
        "Risperidone has potent dose-dependent striatal dopamine D2 receptor blockade that severely worsens motor parkinsonism and rigidity, behaving similarly to haloperidol."
      ],
      [
        "Immediately triple the dose of oral pramipexole to enhance central dopaminergic tone and resolve the hallucinations",
        "Pramipexole is a dopamine receptor agonist that directly causes visual hallucinations; increasing pramipexole will severely exacerbate psychosis and delirium."
      ]
    ],
    "rationale": "In Parkinson disease, psychotic hallucinations are exacerbated by surgery, infection, or dopamine agonists. First-generation antipsychotics (haloperidol) and high-potency second-generation agents (risperidone) are strictly contraindicated because potent striatal dopamine D2 receptor blockade triggers acute catastrophic motor freezing, severe rigidity, aspiration, and neuroleptic malignant syndrome. Management involves non-pharmacologic care, tapering dopamine agonists (pramipexole), and if medication is unavoidable, selecting low-dose quetiapine (low D2 affinity) or pimavanserin (selective 5-HT2A inverse agonist with zero dopamine receptor affinity).",
    "metadata": {
      "shortSolution": "Haloperidol is contraindicated in Parkinson disease because potent D2 blockade precipitates severe motor crisis and rigidity; if needed, use low-dose quetiapine or pimavanserin (no dopamine blockade).",
      "competingChoice": "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
      "exclusionFinding": "Risperidone potently blocks striatal D2 receptors and severely worsens motor Parkinsonism; quetiapine or pimavanserin is the only approved choice.",
      "pedagogicalValue": "Mastering antipsychotic selection in Parkinson disease: haloperidol is strictly contraindicated due to D2-blockade motor collapse; quetiapine or pimavanserin is preferred.",
      "citations": [
        "Cummings J, Isaacson S, Mills R, et al. Pimavanserin for patients with Parkinson's disease psychosis: a randomised, placebo-controlled phase 3 trial. Lancet. 2014;383(9916):533-540. PMID: 24183448.",
        "Seppi K, Ray Chaudhuri K, Coelho M, et al. Update on treatments for nonmotor symptoms of Parkinson's disease-an evidence-based medicine review. Mov Disord. 2019;34(2):180-198. PMID: 30652384."
      ]
    },
    "critique": {
      "shortestValidSolution": "Parkinson delirium/hallucinations -> avoid haloperidol (D2 blockade causes motor collapse); use low-dose quetiapine or pimavanserin.",
      "strongestCompetitor": "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
      "exclusionFinding": "Risperidone potently blocks D2 receptors and worsens rigidity; quetiapine and pimavanserin are the evidence-based choices.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Haloperidol is contraindicated in Parkinson disease because potent D2 blockade precipitates severe motor crisis and rigidity; if needed, use low-dose quetiapine or pimavanserin (no dopamine blockade).",
      "distractorExclusionNotes": "Distractor exclusion verified: Risperidone potently blocks striatal D2 receptors and severely worsens motor Parkinsonism; quetiapine or pimavanserin is the only approved choice.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Haloperidol is contraindicated in Parkinson disease because potent D2 blockade precipitates severe motor crisis and rigidity; if needed, use low-dose quetiapine or pimavanserin (no dopamine blockade).",
    "necessaryInference": "Haloperidol is contraindicated in Parkinson disease because potent D2 blockade precipitates severe motor crisis and rigidity; if needed, use low-dose quetiapine or pimavanserin (no dopamine blockade).",
    "strongestDistractor": "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
    "distractorExclusion": "Risperidone potently blocks striatal D2 receptors and severely worsens motor Parkinsonism; quetiapine or pimavanserin is the only approved choice.",
    "citation": "Cummings J, Isaacson S, Mills R, et al. Pimavanserin for patients with Parkinson's disease psychosis: a randomised, placebo-controlled phase 3 trial. Lancet. 2014;383(9916):533-540. PMID: 24183448."
  },
  {
    "code": "op-c-s3-0445",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Central Venous Catheter (CVC) Occlusion and Alteplase Instillation",
    "subtopic": "Intraluminal Fibrin Thrombosis, Avoidance of Forceful Flushing, tPA Dwell Technique",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old woman with metastatic breast cancer receiving cyclic outpatient chemotherapy is admitted to the medical ward for management of neutropenic fever. She has a right subclavian tunneled silicone central venous catheter (PowerLine port) placed 4 months ago. When the registered nurse attempts to administer intravenous cefepime through the port, the infusion pump alarms for high upstream occlusion pressure. On examination of the catheter, the nurse can flush 5 mL of normal saline with mild resistance, but cannot aspirate any blood from the catheter lumen (withdrawal occlusion / 'one-way valve' phenomenon). Changing the patient's arm and head position, having her cough, and deep inspiration fail to restore blood aspiration. The overlying skin is clean, non-tender, and without swelling or erythema. The nurse picks up a 10-mL syringe and prepares to forcefully flush the line with 20 mL of heparinized saline under high manual syringe pressure to 'blow open the obstruction.'\n\nWhich of the following represents the most appropriate immediate intervention to manage this catheter occlusion?",
    "choices": [
      [
        "Instruct the nurse to immediately stop forceful manual flushing, and instill 2 mg (in 2 mL) of recombinant tissue plasminogen activator (alteplase / tPA) into the catheter lumen, allowing it to dwell for 30 to 120 minutes before aspirating",
        "Central Venous Catheter (CVC) Occlusion is the most common non-infectious catheter complication, occurring in up to 25% of long-term lines: (1) PATHOPHYSIOLOGY OF THROMBOTIC OCCLUSION: Over 60% of catheter occlusions are caused by INTRALUMINAL THROMBUS OR A FIBRIN SLEEVE/TAIL at the catheter tip. A fibrin tail acts as a classic 'ONE-WAY CHECK VALVE': it permits fluid infusion (as positive infusion pressure displaces the flap outward away from the lumen) but collapses inward over the catheter orifice during negative aspiration pressure, preventing blood return. (2) CATASTROPHIC DANGER OF FORCEFUL MANUAL FLUSHING: Attempting to forcefully flush an obstructed catheter using high manual plunger pressure is DANGEROUSLY CONTRAINDICATED. Forceful flushing generates extreme intraluminal hydrostatic pressures exceeding 50 to 100 psi (especially with small syringes). This causes: (a) Catheter rupture, fracture, and plastic fragment embolization into the right ventricle or pulmonary artery; (b) Extravasation of irritating infusate into the mediastinum or subcutaneous space; and (c) Embolization of large, infected, or sterile fibrin clots into the pulmonary arterial circulation, causing acute pulmonary embolism. (3) FIRST-LINE EVIDENCE-BASED RESTORATION PROTOCOL (COOL TRIAL): Recombinant tissue plasminogen activator (ALTEPLASE / tPA; Cathflo Activase) is the definitive, FDA-approved thrombolytic of choice. Standard protocol: (a) Instill 2.0 mg of alteplase (reconstituted in 2.0 mL of sterile water to match the internal priming volume of the catheter lumen); (b) Allow alteplase to DWELL within the catheter lumen for 30 to 120 minutes to bind and enzymatically digest fibrin clots; (c) Aspirate the dwell volume (containing alteplase and degraded clot fragments) and discard; (d) Flush with normal saline. This achieves catheter clearance in > 85-90% of cases, avoiding line replacement."
      ],
      [
        "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
        "Forceful flushing with a small syringe generates extreme hydrostatic pressure (> 50 psi), causing catheter rupture, plastic fracture embolization, or pulmonary thromboembolism."
      ],
      [
        "Immediately remove the tunneled port under local anesthesia and insert a temporary femoral venous catheter",
        "Invasive removal of a functional tunneled port is completely premature; > 85% of thrombotic catheter occlusions are successfully cleared non-invasively with intraluminal alteplase dwell."
      ],
      [
        "Infuse 1,000 units of unfractionated heparin into the catheter lumen and flush it through into the systemic circulation",
        "Heparin prevents new clot formation but does not dissolve pre-existing fibrin clots; pushing heparin into the circulation fails to clear the obstruction and causes systemic anticoagulation."
      ],
      [
        "Instill 2 mL of 0.1 N hydrochloric acid into the catheter lumen and leave it indefinitely",
        "Hydrochloric acid is used specifically for low-pH drug precipitates (e.g., vancomycin), not for thrombotic fibrin occlusion, and risks catheter degradation."
      ]
    ],
    "rationale": "CVC occlusion with ability to infuse but inability to aspirate represents a fibrin sheath or intraluminal thrombus acting as a one-way valve. Forceful manual flushing is strictly contraindicated because high hydrostatic pressure can rupture the catheter or dislodge emboli into the pulmonary circulation. The evidence-based standard of care is instilling 2 mg (2 mL) of alteplase (tPA) into the catheter lumen, allowing it to dwell for 30 to 120 minutes, followed by aspiration and saline flush (COOL trial). This restores patency in > 85% of occluded lines without requiring catheter removal.",
    "metadata": {
      "shortSolution": "Central line with one-way withdrawal occlusion from a fibrin clot requires instillation of 2 mg alteplase (tPA) dwell for 30-120 minutes; avoid forceful flushing to prevent catheter rupture and embolization.",
      "competingChoice": "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
      "exclusionFinding": "Small syringes generate extreme hydrostatic pressures that cause catheter rupture and embolization; forceful flushing is strictly contraindicated.",
      "pedagogicalValue": "Recognizing the pathophysiology of catheter fibrin sleeves and knowing that intraluminal alteplase (tPA) dwell is the treatment of choice while forceful flushing is contraindicated.",
      "citations": [
        "Baskin KM, Jimenez RM, Cahill AM, et al. CVC-related venous thrombosis in children and adults. J Vasc Interv Radiol. 2009;20(7 Suppl):S275-S280. PMID: 19560010.",
        "Deitcher SR, Fesen MR, Kiproff PM, et al. Safety and efficacy of alteplase for restoring patency in occluded central venous access devices: results of the Cardiovascular Thrombolytic to Open Occluded Lines (COOL) trial. J Clin Oncol. 2002;20(1):317-324. PMID: 11773185."
      ]
    },
    "critique": {
      "shortestValidSolution": "CVC withdrawal occlusion (fibrin sheath) -> instill alteplase (tPA 2 mg) dwell for 30-120 min; stop forceful manual flushing (rupture risk).",
      "strongestCompetitor": "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
      "exclusionFinding": "Forceful flushing causes catheter rupture and clot embolization; tPA dwell dissolves the fibrin clot non-invasively.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Central line with one-way withdrawal occlusion from a fibrin clot requires instillation of 2 mg alteplase (tPA) dwell for 30-120 minutes; avoid forceful flushing to prevent catheter rupture and embolization.",
      "distractorExclusionNotes": "Distractor exclusion verified: Small syringes generate extreme hydrostatic pressures that cause catheter rupture and embolization; forceful flushing is strictly contraindicated.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Central line with one-way withdrawal occlusion from a fibrin clot requires instillation of 2 mg alteplase (tPA) dwell for 30-120 minutes; avoid forceful flushing to prevent catheter rupture and embolization.",
    "necessaryInference": "Central line with one-way withdrawal occlusion from a fibrin clot requires instillation of 2 mg alteplase (tPA) dwell for 30-120 minutes; avoid forceful flushing to prevent catheter rupture and embolization.",
    "strongestDistractor": "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
    "distractorExclusion": "Small syringes generate extreme hydrostatic pressures that cause catheter rupture and embolization; forceful flushing is strictly contraindicated.",
    "citation": "Baskin KM, Jimenez RM, Cahill AM, et al. CVC-related venous thrombosis in children and adults. J Vasc Interv Radiol. 2009;20(7 Suppl):S275-S280. PMID: 19560010."
  },
  {
    "code": "op-c-s3-0446",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Surgical Wound Dehiscence Without Evisceration",
    "subtopic": "Fascial Integrity Assessment, Sterile Saline Dressings, Avoidance of Blind Bedside Suturing",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man who underwent an open exploratory laparotomy and Hartmann procedure for perforated diverticulitis 5 days ago is recovering on the surgical floor. He has a history of poorly controlled type 2 diabetes mellitus, obesity (BMI 36 kg/m2), and chronic obstructive pulmonary disease. While coughing vigorously this morning, he felt a sudden 'pop' and tearing sensation along his midline abdominal incision, followed by a sudden gush of clear, pink, salmon-colored serosanguinous fluid soaking through his abdominal dressings. The surgical resident removes the dressing to inspect the incision. The superficial skin and subcutaneous adipose tissue have separated along an 8-cm segment of the midline incision. On careful sterile digital examination using sterile gloves, the deep rectus aponeurotic fascia is found to be intact, with no bowel loops, omentum, or peritoneal contents visible or protruding through the defect (absence of evisceration). Vital signs demonstrate blood pressure of 132/80 mm Hg, heart rate of 84/min, and temperature of 37.4 C. Physical examination shows a soft abdomen with mild expected perilesional tenderness and no peritoneal signs.\n\nWhich of the following represents the most appropriate initial management for this patient's wound complication?",
    "choices": [
      [
        "Apply sterile, moist saline-soaked gauze dressings to the wound, support the abdomen with an abdominal binder, advise the patient to avoid strenuous coughing or Valsalva maneuvers, and arrange for secondary healing or delayed primary closure, withholding emergency laparotomy",
        "Postoperative Wound Dehiscence is the separation of the margins of a surgical wound, occurring in 1% to 3% of abdominal surgeries: (1) RISK FACTORS: Malnutrition, obesity, advanced age, diabetes mellitus, systemic corticosteroids, intra-abdominal hypertension (vigorous coughing, retching, COPD, ileus), and surgical site infection. (2) PATHOGNOMONIC SIGN: The sudden, copious leakage of SALMON-COLORED (SEROSANGUINOUS) FLUID from an abdominal wound on postoperative days 4 to 8 is the classic hallmark of wound breakdown. (3) CRUCIAL TRIAGE - EVISCERATION VERSUS DEHISCENCE WITHOUT EVISCERATION: (a) WOUND EVISCERATION: Rupture of BOTH the fascial closure and the peritoneum, with protrusion of intra-abdominal viscera (bowel loops, omentum) out through the skin incision. Evisceration is an ABSOLUTE SURGICAL EMERGENCY requiring immediate covering with sterile moist saline sponges and emergent return to the operating room for exploratory laparotomy and fascial reconstruction. (b) DEHISCENCE WITHOUT EVISCERATION (SUPERFICIAL DEHISCENCE): In this patient, careful sterile examination confirms that the DEEP FASCIA IS INTACT, and no intra-abdominal contents protrude. Emergency laparotomy is NOT INDICATED. (4) MANAGEMENT OF SUPERFICIAL DEHISCENCE: (a) Local wound care with sterile moist saline dressings (or negative-pressure wound therapy [wound VAC]) to promote granulation tissue; (b) Application of an elastic abdominal binder to splint the incision and reduce tension; (c) Cough suppression and stool softeners to prevent spikes in intra-abdominal pressure; and (d) Healing by secondary intention or delayed secondary surgical closure once clean granulation tissue is established. (5) BEDSIDE SUTURING CONTRAINDICATION: Blindly placing deep sutures into an open, separated wound at the bedside is dangerous because it risks puncturing unseen underlying bowel and introduces foreign material into a contaminated wound."
      ],
      [
        "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
        "Emergent re-operation is indicated exclusively for complete fascial rupture with visceral evisceration; in superficial dehiscence with an intact deep fascia, emergency surgery is unnecessary and overly invasive."
      ],
      [
        "Blindly re-approximate the separated wound margins at the bedside using 1-0 polypropylene interrupted retention sutures without local anesthesia",
        "Blind bedside deep suturing risks catastrophic bowel perforation and fistula formation, causes severe pain, and traps bacteria within contaminated subcutaneous tissue."
      ],
      [
        "Pack the open wound with dry sterile gauze sponges and apply a rigid adhesive pressure dressing changed once weekly",
        "Dry gauze desiccates exposed tissues, causes mechanical damage during removal, and weekly dressing changes promote bacterial infection; moist saline dressings changed regularly are required."
      ],
      [
        "Administer intravenous vancomycin, piperacillin-tazobactam, and metronidazole for 14 days for presumed intra-abdominal sepsis",
        "Superficial mechanical dehiscence without fever, erythema, purulence, or peritoneal signs is a mechanical complication, not a systemic bacterial infection; systemic antibiotics are not indicated."
      ]
    ],
    "rationale": "Surgical wound separation presenting with salmon-colored serosanguinous fluid is wound dehiscence. Clinical triage hinges on fascial integrity: (1) Complete fascial rupture with protruding viscera (evisceration) is an emergency requiring emergent OR return. (2) Superficial dehiscence with INTACT deep fascia (as in this patient) does NOT require emergency laparotomy. Management involves sterile moist saline-soaked gauze dressings (or wound VAC), an abdominal binder to support the wall, avoiding straining, and allowing secondary intention healing or delayed primary closure. Blind bedside suturing is contraindicated.",
    "metadata": {
      "shortSolution": "Superficial wound dehiscence with intact fascia (no evisceration) requires moist saline dressings, abdominal binder, and secondary healing; emergency laparotomy is reserved for fascial evisceration.",
      "competingChoice": "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
      "exclusionFinding": "Emergency laparotomy is indicated only when the deep fascia ruptures with visceral evisceration; intact fascia is managed conservatively with moist dressings.",
      "pedagogicalValue": "Differentiating surgical wound dehiscence with intact fascia (conservative moist dressings, binder) from complete fascial evisceration (emergent OR return).",
      "citations": [
        "Sandy-Hodgetts K, Leslie GD, Lewin G. Surgical wound dehiscence: a conceptual framework for clinical practice. J Wound Care. 2018;27(3):119-126. PMID: 29533722.",
        "van Ramshorst GH, Nieuwenhuizen J, Hop WC, et al. Abdominal wound dehiscence in adults: development and validation of a risk model. World J Surg. 2010;34(1):20-27. PMID: 19898894."
      ]
    },
    "critique": {
      "shortestValidSolution": "Wound dehiscence with intact fascia (no evisceration) -> moist saline dressings + abdominal binder + secondary healing; withhold emergency surgery.",
      "strongestCompetitor": "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
      "exclusionFinding": "Emergency laparotomy is reserved for fascial breakdown with evisceration; intact fascia requires conservative wound care.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Superficial wound dehiscence with intact fascia (no evisceration) requires moist saline dressings, abdominal binder, and secondary healing; emergency laparotomy is reserved for fascial evisceration.",
      "distractorExclusionNotes": "Distractor exclusion verified: Emergency laparotomy is indicated only when the deep fascia ruptures with visceral evisceration; intact fascia is managed conservatively with moist dressings.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Superficial wound dehiscence with intact fascia (no evisceration) requires moist saline dressings, abdominal binder, and secondary healing; emergency laparotomy is reserved for fascial evisceration.",
    "necessaryInference": "Superficial wound dehiscence with intact fascia (no evisceration) requires moist saline dressings, abdominal binder, and secondary healing; emergency laparotomy is reserved for fascial evisceration.",
    "strongestDistractor": "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
    "distractorExclusion": "Emergency laparotomy is indicated only when the deep fascia ruptures with visceral evisceration; intact fascia is managed conservatively with moist dressings.",
    "citation": "Sandy-Hodgetts K, Leslie GD, Lewin G. Surgical wound dehiscence: a conceptual framework for clinical practice. J Wound Care. 2018;27(3):119-126. PMID: 29533722."
  },
  {
    "code": "op-c-s3-0447",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Post-Dural Puncture Headache (PDPH) and Epidural Blood Patch",
    "subtopic": "Postural Orthostatic Cephalea, CSF Leakage Kinetics, Autologous Blood Patch",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old primigravida woman who underwent an uncomplicated elective repeat Cesarean delivery under epidural anesthesia 48 hours ago is recovering on the postpartum ward. During epidural catheter placement by a trainee, an accidental dural puncture ('wet tap') occurred with an 18-gauge Tuohy needle, but the catheter was resited successfully. This morning upon attempting to sit up in bed to nurse her newborn, she developed an excruciating, incapacitating, throbbing bifrontal and occipital headache radiating to her neck and shoulders. She describes that the headache is completely agonizing (10/10) when sitting or standing, but completely disappears within 5 to 10 minutes whenever she lies completely flat in the supine position. She also reports mild photophobia, nausea, and muffled hearing (tinnitus). Physical examination demonstrates an uncomfortable woman lying flat in bed. Vital signs are normal, and she is afebrile. Neurological examination is completely normal: pupils are reactive, cranial nerves are intact, motor and sensory exams are normal, and there is no papilledema or nuchal rigidity when supine. Conservative management with aggressive oral and intravenous hydration, oral acetaminophen, oral caffeine, and bed rest was initiated 24 hours ago, but her headache recurs with unbearable intensity whenever she attempts to stand.\n\nWhich of the following represents the most effective definitive therapeutic intervention for this patient's condition?",
    "choices": [
      [
        "Perform an autologous epidural blood patch (injecting 15 to 20 mL of the patient's own sterile venous blood into the epidural space at or near the level of the dural puncture)",
        "Post-Dural Puncture Headache (PDPH) is a classic iatrogenic complication resulting from intentional or accidental perforation of the dura mater during spinal anesthesia, diagnostic lumbar puncture, or epidural placement: (1) PATHOPHYSIOLOGY: Cerebrospinal fluid leaks continuously through the persistent dural-arachnoid puncture hole into the epidural space at a rate faster than choroid plexus CSF production (normal CSF production is ~0.35 mL/min or 500 mL/day). This causes intracranial CSF hypovolemia and low intracranial pressure. When the patient assumes an upright posture, the brain sags downward within the cranial vault, placing traction on pain-sensitive anchoring structures (the tentorium cerebelli, dural falx, and sensory branches of cranial nerves V, IX, X). Compensatory cerebral and meningeal venodilation also contributes to throbbing pain. (2) PATHOGNOMONIC CLINICAL HALLMARK: An intensely POSTURAL / ORTHOSTATIC HEADACHE that worsens significantly within 15 minutes of sitting or standing and resolves or improves markedly within 15 to 30 minutes of lying supine. Auditory symptoms (tinnitus, hearing loss) occur due to endolymphatic sac pressure changes. (3) DEFINITIVE THERAPY (THE AUTOLOGOUS EPIDURAL BLOOD PATCH): While mild PDPH can be managed conservatively for 24 to 48 hours (bed rest, hydration, caffeine, NSAIDs), an AUTOLOGOUS EPIDURAL BLOOD PATCH (EBP) is the DEFINITIVE GOLD STANDARD OF CARE for severe, incapacitating PDPH or cases refractory to conservative therapy. Protocol: Under strict aseptic technique, 15 to 20 mL of the patient's own autologous blood is drawn from an antecubital vein and injected into the epidural space at or adjacent to the level of the dural puncture. The blood spreads several spinal segments cephalad and caudad, forming a gelatinous fibrin clot that mechanically plugs the dural tear, immediately halting further CSF leak and restoring normal intracranial CSF pressure within minutes (> 85-95% immediate success rate)."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 3 days to suppress meningeal inflammation",
        "PDPH is a mechanical CSF leak causing downward brain traction, not an autoimmune or inflammatory condition; corticosteroids provide zero therapeutic benefit and delay definitive mechanical repair."
      ],
      [
        "Perform a repeat lumbar puncture in the lateral decubitus position to inject 20 mL of preservative-free normal saline into the intrathecal space",
        "Intrathecal saline injection provides only transient (minutes to hours) pressure restoration and introduces a second dural puncture hole, doubling the CSF leak rate."
      ],
      [
        "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
        "Triptans are 5-HT1B/1D agonists for vascular migraine; multiple randomized trials have shown that triptans are completely ineffective for mechanical low-pressure post-dural puncture headaches."
      ],
      [
        "Perform emergent bilateral surgical superficial temporal artery ligation",
        "Superficial temporal artery ligation has no role in low-CSF-pressure orthostatic headaches and represents an inappropriate, mutilating surgical intervention."
      ]
    ],
    "rationale": "Post-Dural Puncture Headache (PDPH) is caused by persistent CSF leakage through a dural puncture hole (often from large-bore Tuohy needles), causing low intracranial pressure and downward traction on pain-sensitive meningeal structures when upright. The hallmark is an incapacitating orthostatic headache (severe upright, disappears flat). While initial hydration, caffeine, and NSAIDs are trialed, the definitive gold standard for severe or refractory PDPH is an AUTOLOGOUS EPIDURAL BLOOD PATCH (injecting 15-20 mL of sterile autologous venous blood into the epidural space). The injected blood forms a mechanical clot sealing the dural defect, resolving symptoms in > 90% of patients. Steroids and triptans are ineffective.",
    "metadata": {
      "shortSolution": "Severe postural headache disappearing when supine 48 hours post-epidural wet tap is PDPH; refractory to conservative therapy, the definitive gold-standard treatment is an autologous epidural blood patch.",
      "competingChoice": "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
      "exclusionFinding": "Triptans are ineffective for mechanical low-pressure CSF leaks; an autologous epidural blood patch is required to physically seal the dural hole.",
      "pedagogicalValue": "Recognizing the orthostatic hallmark of PDPH and knowing that an autologous epidural blood patch is the definitive therapy for severe or refractory cases.",
      "citations": [
        "Russell R, Groves N, Wharton M. Obstetric post-dural puncture headache: guidelines from the Obstetric Anaesthetists' Association. Anaesthesia. 2018;73(7):806-817. PMID: 29770850.",
        "Kwak KH. Post-dural puncture headache. Korean J Anesthesiol. 2017;70(2):136-143. PMID: 28392842."
      ]
    },
    "critique": {
      "shortestValidSolution": "Severe postural headache post-dural puncture (worse upright, better flat) -> autologous epidural blood patch (15-20 mL blood seals dural hole).",
      "strongestCompetitor": "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
      "exclusionFinding": "Triptans are ineffective for mechanical CSF leaks; epidural blood patch physically seals the defect.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Severe postural headache disappearing when supine 48 hours post-epidural wet tap is PDPH; refractory to conservative therapy, the definitive gold-standard treatment is an autologous epidural blood patch.",
      "distractorExclusionNotes": "Distractor exclusion verified: Triptans are ineffective for mechanical low-pressure CSF leaks; an autologous epidural blood patch is required to physically seal the dural hole.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Severe postural headache disappearing when supine 48 hours post-epidural wet tap is PDPH; refractory to conservative therapy, the definitive gold-standard treatment is an autologous epidural blood patch.",
    "necessaryInference": "Severe postural headache disappearing when supine 48 hours post-epidural wet tap is PDPH; refractory to conservative therapy, the definitive gold-standard treatment is an autologous epidural blood patch.",
    "strongestDistractor": "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
    "distractorExclusion": "Triptans are ineffective for mechanical low-pressure CSF leaks; an autologous epidural blood patch is required to physically seal the dural hole.",
    "citation": "Russell R, Groves N, Wharton M. Obstetric post-dural puncture headache: guidelines from the Obstetric Anaesthetists' Association. Anaesthesia. 2018;73(7):806-817. PMID: 29770850."
  },
  {
    "code": "op-c-s3-0448",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertensive Emergency vs Hypertensive Urgency Cross-Coverage",
    "subtopic": "Acute End-Organ Damage Triage, Titratable IV Antihypertensives, Controlled Blood Pressure Reduction",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents to the emergency department at 11:00 PM with severe shortness of breath, orthopnea, and chest tightness that began 2 hours ago. He has a history of essential hypertension but has not taken his prescribed amlodipine or hydrochlorothiazide for 3 weeks because he ran out of medication. On physical examination, he is in acute respiratory distress, sitting upright and diaphoretic. Vital signs demonstrate blood pressure of 218/124 mm Hg, heart rate of 118/min, respiratory rate of 28/min, and oxygen saturation of 88% on ambient air, which improves to 93% on a non-rebreather mask. Bilateral diffuse inspiratory crackles are auscultated throughout both lower and mid-lung fields, accompanied by an S3 gallop and jugular venous distension to 10 cm H2O. Neurological examination is completely normal with no focal deficits or altered mental status. Chest radiograph demonstrates cardiomegaly, bilateral fluffy alveolar infiltrates in a bat-wing distribution, and prominent vascular cephalization, confirming acute cardiogenic pulmonary edema. Serum creatinine is 1.2 mg/dL.\n\nWhich of the following represents the most appropriate initial pharmacological strategy for this patient?",
    "choices": [
      [
        "Classify as a hypertensive emergency and administer intravenous titratable vasodilators (e.g., intravenous nitroglycerin infusion combined with intravenous nicardipine or clevidipine) alongside intravenous loop diuretics, targeting a controlled reduction in mean arterial pressure of approximately 20% to 25% within the first hour",
        "Severe blood pressure elevations are categorized into two fundamentally distinct clinical entities based on the PRESENCE OR ABSENCE OF ACUTE TARGET ORGAN DAMAGE: (1) HYPERTENSIVE URGENCY: Severe blood pressure elevation (typically systolic BP >= 180 mm Hg or diastolic BP >= 120 mm Hg) WITHOUT objective evidence of acute, ongoing target organ damage. Management consists of oral antihypertensive medications (e.g., amlodipine, clonidine, or captopril) with blood pressure reduction over 24 to 48 hours in the outpatient setting; rapid intravenous reduction is NOT indicated and can precipitate cerebral or myocardial hypoperfusion. (2) HYPERTENSIVE EMERGENCY: Severe blood pressure elevation WITH OBJECTIVE, ACUTE END-ORGAN INJURY: acute cardiogenic pulmonary edema, acute coronary syndrome, aortic dissection, hypertensive encephalopathy, acute ischemic stroke, or acute kidney injury. This patient has acute cardiogenic pulmonary edema (severe dyspnea, crackles, S3 gallop, radiographic pulmonary edema), representing a TRUE HYPERTENSIVE EMERGENCY. (3) MANAGEMENT PRINCIPLES (ACC/AHA GUIDELINES): (a) ROUTE: Requires IMMEDIATE INTRAVENOUS TITRATABLE ANTIHYPERTENSIVE THERAPY in an ICU or step-down setting. (b) AGENT SELECTION: In acute pulmonary edema, INTRAVENOUS NITROGLYCERIN (sublingually then continuous IV infusion, potent venodilator that reduces preload and pulmonary capillary wedge pressure) COMBINED WITH an IV arteriolar vasodilator (NICARDIPINE or CLEVIDIPINE) and IV LOOP DIURETICS (furosemide) is the preferred regimen. (Beta-blockers like labetalol are relatively contraindicated in acute decompensated heart failure with pulmonary edema due to negative inotropic effects). (c) TARGET RATE: To prevent cerebral and coronary autoregulatory hypoperfusion, reduce Mean Arterial Pressure (MAP) by NO MORE THAN 20% TO 25% within the first hour, then toward 160/100 mm Hg over the subsequent 2 to 6 hours (except in acute aortic dissection, where rapid reduction to SBP < 120 mm Hg within 20 minutes is mandatory)."
      ],
      [
        "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
        "Acute pulmonary edema with S3 gallop and diffuse crackles constitutes acute target organ damage, defining a hypertensive emergency; managing this as urgency with oral agents risks fatal hypoxemic respiratory arrest."
      ],
      [
        "Administer a rapid intravenous bolus of hydralazine 20 mg targeting an immediate normalization of blood pressure to 120/80 mm Hg within 10 minutes",
        "Hydralazine boluses have an unpredictable, prolonged duration of action and cause reflex sympathetic tachycardia that increases myocardial oxygen consumption; precipitous normalization causes stroke and myocardial infarction."
      ],
      [
        "Administer immediate intravenous labetalol 40 mg bolus as first-line monotherapy for acute pulmonary edema",
        "Beta-blockers (labetalol) exert acute negative inotropic effects that can further depress left ventricular systolic function in acute decompensated heart failure with pulmonary edema; vasodilators (nitroglycerin/nicardipine) are preferred."
      ],
      [
        "Administer oral sublingual nifedipine 10 mg capsule bitten and swallowed for rapid blood pressure lowering",
        "Sublingual short-acting nifedipine causes uncontrollable, precipitous hypotension resulting in fatal cerebral ischemia and myocardial infarction; it carries an FDA warning and is strictly prohibited."
      ]
    ],
    "rationale": "Hypertensive emergency is defined by severe hypertension (BP >= 180/120 mm Hg) with acute target organ damage (here, acute cardiogenic pulmonary edema). It requires ICU admission and immediate titratable intravenous therapy (IV nitroglycerin to reduce preload, combined with IV nicardipine/clevidipine and IV furosemide). MAP should be lowered by 20-25% in the first hour to prevent ischemic organ hypoperfusion. Labetalol is avoided in acute pulmonary edema due to negative inotropy. Sublingual nifedipine is dangerous and prohibited.",
    "metadata": {
      "shortSolution": "BP 218/124 with acute pulmonary edema is a hypertensive emergency; requires titratable IV vasodilators (nitroglycerin/nicardipine) to reduce MAP by 20-25% in the first hour.",
      "competingChoice": "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
      "exclusionFinding": "Acute pulmonary edema represents acute target organ damage, which defines a hypertensive emergency requiring immediate IV therapy, not outpatient oral therapy.",
      "pedagogicalValue": "Distinguishing hypertensive emergency (end-organ damage present, IV therapy, 20-25% MAP reduction in 1st hour) from urgency, and choosing vasodilators over beta-blockers in pulmonary edema.",
      "citations": [
        "Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146255.",
        "van den Born BJ, Lip GYH, Brguljan-Hitij J, et al. ESC Council on hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019;5(1):37-46. PMID: 30165588."
      ]
    },
    "critique": {
      "shortestValidSolution": "BP 218/124 + acute pulmonary edema = hypertensive emergency -> titratable IV vasodilators (nitroglycerin/nicardipine) targeting 20-25% MAP drop in 1 hour.",
      "strongestCompetitor": "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
      "exclusionFinding": "Pulmonary edema is acute target organ damage, defining an emergency requiring immediate IV treatment.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: BP 218/124 with acute pulmonary edema is a hypertensive emergency; requires titratable IV vasodilators (nitroglycerin/nicardipine) to reduce MAP by 20-25% in the first hour.",
      "distractorExclusionNotes": "Distractor exclusion verified: Acute pulmonary edema represents acute target organ damage, which defines a hypertensive emergency requiring immediate IV therapy, not outpatient oral therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "BP 218/124 with acute pulmonary edema is a hypertensive emergency; requires titratable IV vasodilators (nitroglycerin/nicardipine) to reduce MAP by 20-25% in the first hour.",
    "necessaryInference": "BP 218/124 with acute pulmonary edema is a hypertensive emergency; requires titratable IV vasodilators (nitroglycerin/nicardipine) to reduce MAP by 20-25% in the first hour.",
    "strongestDistractor": "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
    "distractorExclusion": "Acute pulmonary edema represents acute target organ damage, which defines a hypertensive emergency requiring immediate IV therapy, not outpatient oral therapy.",
    "citation": "Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146255."
  },
  {
    "code": "op-c-s3-0449",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Endocrine",
    "topic": "Post-Thyroidectomy Acute Hypocalcemia Management",
    "subtopic": "Transient Parathyroid Devascularization, Chvostek and Trousseau Signs, IV Calcium Gluconate",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman who underwent an uncomplicated total thyroidectomy for multinodular goiter 24 hours ago is recovering on the surgical ward. At 4:00 AM, the cross-covering resident is called because the patient has developed tingling and numbness around her mouth (circumoral paresthesias) and painful cramping in both hands. Physical examination reveals an anxious woman. When a blood pressure cuff on her right arm is inflated to 20 mm Hg above her systolic pressure for 3 minutes, her right wrist and metacarpophalangeal joints involuntarily flex with extension of the interphalangeal joints and adduction of the thumb (positive Trousseau sign). Tapping gently over the facial nerve anterior to the ear tragus produces ipsilateral contraction of the facial muscles (positive Chvostek sign). Vital signs demonstrate blood pressure of 122/76 mm Hg and heart rate of 88/min. A 12-lead ECG reveals sinus rhythm with marked prolongation of the corrected QT interval (QTc 510 ms). Emergent laboratory evaluation demonstrates:\n- Total serum calcium: 6.6 mg/dL (normal 8.5 to 10.2 mg/dL)\n- Serum albumin: 4.0 g/dL (normal 3.5 to 5.0 g/dL)\n- Ionized calcium: 0.82 mmol/L (normal 1.15 to 1.33 mmol/L)\n- Serum magnesium: 2.0 mg/dL (normal 1.7 to 2.2 mg/dL)\n- Serum phosphate: 5.4 mg/dL (elevated; normal 2.5 to 4.5 mg/dL)\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Administer intravenous calcium gluconate (1 to 2 g in 50 to 100 mL of 5% dextrose infused over 10 to 20 minutes) with continuous cardiac telemetry monitoring, followed by maintenance oral calcium carbonate and oral calcitriol",
        "Acute Hypocalcemia is a well-recognized complication occurring in up to 10% to 30% of patients following total thyroidectomy, caused by transient ischemia, devascularization, surgical trauma, or inadvertent excision of the parathyroid glands during thyroid lobe dissection: (1) PATHOPHYSIOLOGY AND NEUROMUSCULAR HYPEREXCITABILITY: Extracellular calcium ions stabilize neuronal and muscle cell membranes by blocking sodium channels. In severe hypocalcemia, this stabilizing effect is lost, dramatically lowering the threshold for action potential generation and provoking spontaneous, repetitive firing of peripheral nerves. (2) CLINICAL HALLMARKS: (a) Circumoral and digital paresthesias; (b) Neuromuscular irritability: Chvostek sign (facial twitching upon percussion of CN VII) and Trousseau sign (carpopedal spasm induced by cuff inflation; more sensitive and specific than Chvostek); (c) Tetany, laryngospasm, seizures, and ECG QTc prolongation (predisposing to torsades de pointes ventricular tachycardia). (3) IMMEDIATE EMERGENCY PHARMACOTHERAPY: (a) INTRAVENOUS CALCIUM GLUCONATE: Symptomatic acute hypocalcemia (ionized Ca < 0.9 mmol/L, tetany, QTc prolongation) is an emergency requiring IMMEDIATE INTRAVENOUS CALCIUM GLUCONATE (1-2 g of 10% calcium gluconate [equivalent to 90-180 mg elemental calcium] infused over 10-20 minutes). CALCIUM GLUCONATE IS PREFERRED OVER CALCIUM CHLORIDE because calcium chloride causes severe tissue necrosis and thrombophlebitis if extravasation occurs; calcium chloride is reserved for cardiac arrest via central lines. (b) ORAL CONSOLIDATION: Once acute tetany is relieved, initiate high-dose oral calcium (calcium carbonate 1,000-2,000 mg three times daily) COMBINED WITH ORAL CALCITRIOL (1,25-dihydroxyvitamin D, 0.25-0.5 mcg twice daily), which is essential to stimulate active intestinal calcium absorption in the presence of postoperative hypoparathyroidism."
      ],
      [
        "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
        "Intravenous calcium chloride is highly caustic and sclerosing; infusing it through a peripheral hand vein carries severe risks of peripheral thrombophlebitis and catastrophic full-thickness skin necrosis if extravasation occurs; calcium gluconate is preferred."
      ],
      [
        "Administer oral calcium carbonate 500 mg monotherapy once daily and recheck serum calcium in 48 hours",
        "Oral calcium monotherapy is completely inadequate for acute symptomatic hypocalcemia with QTc prolongation and tetany, and without calcitriol, oral calcium absorption is poor in hypoparathyroidism."
      ],
      [
        "Administer intravenous magnesium sulfate 2 g bolus as primary standalone therapy without calcium",
        "Serum magnesium is normal (2.0 mg/dL); while hypomagnesemia causes hypocalcemia, giving magnesium when levels are normal does not treat the acute profound calcium deficit."
      ],
      [
        "Return the patient emergently to the operating room for surgical exploration of the neck incision",
        "The patient has hypocalcemic tetany from transient parathyroid stunning, not a compressive postoperative neck hematoma (wound is non-tense, breathing is uncompromised); re-operation is unnecessary and harmful."
      ]
    ],
    "rationale": "Post-total thyroidectomy hypocalcemia results from transient ischemia or inadvertent removal of parathyroid glands. Manifestations include circumoral paresthesias, Trousseau sign (carpopedal spasm), Chvostek sign, and QTc prolongation. Symptomatic hypocalcemia with QTc prolongation is an emergency requiring immediate IV calcium gluconate (1-2 g over 10-20 min; preferred over calcium chloride because it avoids tissue necrosis if extravasated). Follow with oral calcium and calcitriol (active vitamin D to stimulate gut absorption).",
    "metadata": {
      "shortSolution": "Post-thyroidectomy tetany with Trousseau sign, QTc 510 ms, and Ca 6.6 mg/dL requires immediate IV calcium gluconate (1-2 g) on telemetry, followed by oral calcium and calcitriol.",
      "competingChoice": "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
      "exclusionFinding": "Calcium chloride causes severe peripheral thrombophlebitis and skin necrosis if extravasated; calcium gluconate is preferred for peripheral infusion.",
      "pedagogicalValue": "Mastering the treatment of post-thyroidectomy acute hypocalcemia: IV calcium gluconate for acute tetany/QTc prolongation, followed by oral calcium and calcitriol.",
      "citations": [
        "Orloff LA, Wiseman SM, Bernet VJ, et al. American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid. 2018;28(7):831-841. PMID: 29848194.",
        "Cooper MS, Gittoes NJ. Diagnosis and management of hypocalcaemia. BMJ. 2008;336(7656):1298-1302. PMID: 18535072."
      ]
    },
    "critique": {
      "shortestValidSolution": "Post-thyroidectomy tetany + QTc prolongation (Ca 6.6) -> immediate IV calcium gluconate, then oral calcium + calcitriol.",
      "strongestCompetitor": "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
      "exclusionFinding": "Calcium chloride causes severe tissue necrosis on extravasation; calcium gluconate is the peripheral drug of choice.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Post-thyroidectomy tetany with Trousseau sign, QTc 510 ms, and Ca 6.6 mg/dL requires immediate IV calcium gluconate (1-2 g) on telemetry, followed by oral calcium and calcitriol.",
      "distractorExclusionNotes": "Distractor exclusion verified: Calcium chloride causes severe peripheral thrombophlebitis and skin necrosis if extravasated; calcium gluconate is preferred for peripheral infusion.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Post-thyroidectomy tetany with Trousseau sign, QTc 510 ms, and Ca 6.6 mg/dL requires immediate IV calcium gluconate (1-2 g) on telemetry, followed by oral calcium and calcitriol.",
    "necessaryInference": "Post-thyroidectomy tetany with Trousseau sign, QTc 510 ms, and Ca 6.6 mg/dL requires immediate IV calcium gluconate (1-2 g) on telemetry, followed by oral calcium and calcitriol.",
    "strongestDistractor": "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
    "distractorExclusion": "Calcium chloride causes severe peripheral thrombophlebitis and skin necrosis if extravasated; calcium gluconate is preferred for peripheral infusion.",
    "citation": "Orloff LA, Wiseman SM, Bernet VJ, et al. American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid. 2018;28(7):831-841. PMID: 29848194."
  },
  {
    "code": "op-c-s3-0450",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Contrast-Associated Acute Kidney Injury (CA-AKI) Prevention",
    "subtopic": "Isotonic Saline Hydration, Ineffectiveness of N-Acetylcysteine/Bicarbonate, PRESERVE Trial",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with a 15-year history of type 2 diabetes mellitus, hypertension, and stage 3b chronic kidney disease (baseline serum creatinine 2.1 mg/dL, estimated GFR 32 mL/min/1.73 m2) is scheduled to undergo an elective contrast-enhanced computed tomography (CT) angiography of the chest and abdomen to evaluate a suspected thoracic aortic aneurysm. He has no history of heart failure and takes metformin (which was withheld 24 hours ago) and amlodipine. Physical examination reveals normal blood pressure (130/78 mm Hg), normal jugular venous pressure, clear lungs, and no peripheral edema. The medical resident inquires about the optimal pharmacological strategy to prevent contrast-associated acute kidney injury (CA-AKI).\n\nBased on landmark randomized clinical trial evidence (the PRESERVE trial) and current KDIGO/ACR guidelines, which of the following represents the most appropriate, evidence-based preventive strategy for this high-risk patient?",
    "choices": [
      [
        "Intravenous volume expansion with isotonic crystalloids (0.9% normal saline at 1 to 1.5 mL/kg/hour for 3 to 12 hours prior to and 6 to 12 hours following contrast administration), while withholding oral N-acetylcysteine and intravenous sodium bicarbonate",
        "Contrast-Associated Acute Kidney Injury (CA-AKI; historically contrast-induced nephropathy) is defined as an abrupt decline in renal function occurring within 48 hours of intravascular iodinated radiocontrast administration. (1) PATHOPHYSIOLOGY: Iodinated contrast triggers intense renal medullary vasoconstriction (endothelin and adenosine release with decreased nitric oxide), causing profound ischemic injury to metabolically active thick ascending limbs and proximal tubules, compounded by direct tubular epithelial cell cytotoxicity and reactive oxygen species generation. (2) EVIDENCE-BASED INTRAVENOUS EXPANSION: Intravenous volume expansion with ISOTONIC CRYSTALLOIDS (0.9% normal saline or lactated Ringer solution) is the ONLY intervention proven to consistently reduce CA-AKI. Hydration expands intravascular volume, suppresses the renin-angiotensin-aldosterone axis, dilutes contrast medium in the tubular lumen, promotes tubular contrast transit, and prevents medullary vasoconstriction. (3) THE LANDMARK PRESERVE TRIAL (NEJM 2018): For years, oral N-acetylcysteine (an antioxidant) and intravenous sodium bicarbonate (to alkalinize tubular urine) were widely utilized based on small, flawed historical studies. The landmark double-blind randomized PRESERVE trial (involving > 5,000 high-risk patients with CKD undergoing angiography) definitively tested sodium bicarbonate vs sodium chloride, and oral N-acetylcysteine vs placebo. The trial proved that NEITHER SODIUM BICARBONATE NOR N-ACETYL CYSTEINE REDUCED THE INCIDENCE OF AKI, THE NEED FOR DIALYSIS, OR 90-DAY MORTALITY compared to standard isotonic normal saline and placebo. Current KDIGO and American College of Radiology (ACR) guidelines explicitly recommend AGAINST routine N-acetylcysteine or routine sodium bicarbonate, establishing ISOTONIC SALINE AS THE PRIMARY EVIDENCE-BASED PROPHYLAXIS."
      ],
      [
        "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
        "The landmark PRESERVE trial (> 5,000 patients) proved that neither N-acetylcysteine nor sodium bicarbonate reduces contrast-induced AKI or mortality compared to isotonic saline; their routine use is contrary to guidelines."
      ],
      [
        "Administer intravenous furosemide 40 mg 1 hour prior to contrast injection to ensure high tubular flow rates",
        "Forced diuresis with furosemide causes intravascular volume depletion, worsening renal medullary vasoconstriction and significantly INCREASING the incidence of contrast nephropathy."
      ],
      [
        "Administer prophylactic oral theophylline 200 mg twice daily as an adenosine receptor antagonist",
        "Theophylline has narrow therapeutic margins, significant cardiac arrhythmogenic toxicity, and lacks consistent clinical trial support; it is not recommended by KDIGO."
      ],
      [
        "Perform prophylactic hemodialysis immediately following completion of the CT angiogram",
        "Prophylactic hemodialysis removes contrast but causes transient hemodynamic instability that worsens renal ischemia, and clinical trials prove it provides zero benefit while increasing complications."
      ]
    ],
    "rationale": "Contrast-associated acute kidney injury (CA-AKI) in patients with CKD is prevented by intravenous hydration with isotonic crystalloids (0.9% normal saline or lactated Ringer's) before and after contrast administration. The landmark PRESERVE trial (> 5,000 patients) definitively proved that neither oral N-acetylcysteine nor IV sodium bicarbonate reduces AKI, death, or dialysis compared to normal saline. Forced diuresis with furosemide worsens AKI. Prophylactic hemodialysis is ineffective and harmful.",
    "metadata": {
      "shortSolution": "High-risk CKD patient receiving iodinated contrast requires IV volume expansion with 0.9% normal saline; PRESERVE trial proved N-acetylcysteine and sodium bicarbonate provide no benefit.",
      "competingChoice": "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
      "exclusionFinding": "The PRESERVE trial proved N-acetylcysteine and sodium bicarbonate do not reduce CA-AKI compared to normal saline; guidelines recommend against them.",
      "pedagogicalValue": "Mastering evidence-based prevention of contrast-associated AKI: isotonic crystalloid hydration is proven effective, while N-acetylcysteine and sodium bicarbonate are ineffective (PRESERVE trial).",
      "citations": [
        "Weisbord SD, Gallagher M, Jneid H, et al. Outcomes after Angiography with Sodium Bicarbonate and Acetylcysteine. N Engl J Med. 2018;378(7):603-614. PMID: 29130794.",
        "Davenport MS, Perazella MA, Yee J, et al. Use of Intravenous Iodinated Contrast Media in Patients with Kidney Disease: Consensus Statements from the American College of Radiology and the National Kidney Foundation. Radiology. 2020;294(3):660-668. PMID: 31961247."
      ]
    },
    "critique": {
      "shortestValidSolution": "High-risk CKD undergoing contrast -> IV isotonic normal saline hydration; N-acetylcysteine and bicarbonate are ineffective (PRESERVE trial).",
      "strongestCompetitor": "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
      "exclusionFinding": "The PRESERVE trial proved NAC and bicarbonate provide zero benefit over saline.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: High-risk CKD patient receiving iodinated contrast requires IV volume expansion with 0.9% normal saline; PRESERVE trial proved N-acetylcysteine and sodium bicarbonate provide no benefit.",
      "distractorExclusionNotes": "Distractor exclusion verified: The PRESERVE trial proved N-acetylcysteine and sodium bicarbonate do not reduce CA-AKI compared to normal saline; guidelines recommend against them.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "High-risk CKD patient receiving iodinated contrast requires IV volume expansion with 0.9% normal saline; PRESERVE trial proved N-acetylcysteine and sodium bicarbonate provide no benefit.",
    "necessaryInference": "High-risk CKD patient receiving iodinated contrast requires IV volume expansion with 0.9% normal saline; PRESERVE trial proved N-acetylcysteine and sodium bicarbonate provide no benefit.",
    "strongestDistractor": "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
    "distractorExclusion": "The PRESERVE trial proved N-acetylcysteine and sodium bicarbonate do not reduce CA-AKI compared to normal saline; guidelines recommend against them.",
    "citation": "Weisbord SD, Gallagher M, Jneid H, et al. Outcomes after Angiography with Sodium Bicarbonate and Acetylcysteine. N Engl J Med. 2018;378(7):603-614. PMID: 29130794."
  }
];
