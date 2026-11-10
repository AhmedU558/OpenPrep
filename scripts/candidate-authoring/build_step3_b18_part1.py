import json

items_s3_b18_part1 = [
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
        "Pépin MN, Bouchard J, Legault L, Ethier J. Diagnostic performance of fractional excretion of urea and fractional excretion of sodium in the evaluations of patients with acute kidney injury with or without diuretic therapy. Nephrol Dial Transplant. 2007;22(2):433-438. PMID: 17095537."
      ]
    },
    "critique": {
      "shortestValidSolution": "AKI on furosemide + FeNa > 2% but FeUrea 24% (< 35%) + concentrated urine -> FeNa falsely elevated by diuretic; FeUrea confirms prerenal azotemia.",
      "strongestCompetitor": "Direct ischemic necrosis of proximal convoluted tubule cells causing loss of the brush border and complete inability to reabsorb filtered urea",
      "exclusionFinding": "ATN presents with dilute urine (< 350) and muddy brown casts; high urine osm and low FeUrea confirm prerenal azotemia.",
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
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
      "verdict": "PASS"
    }
  }
]
