import { CandidateSpec } from './types';

export const step3Batch14: CandidateSpec[] = [
  {
    "code": "op-c-s3-0326",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Inpatient Glycemic Management",
    "subtopic": "Basal-Bolus-Correction Insulin Regimen vs Harm of Sliding-Scale Monotherapy (RABBIT-2)",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with a 15-year history of type 2 diabetes mellitus is admitted to the general medical ward for treatment of community-acquired pneumonia. His home diabetes medications were metformin 1,000 mg twice daily and glipizide 10 mg daily. Both oral agents are held on admission due to acute illness and reduced oral intake. His admission blood glucose is 248 mg/dL and hemoglobin A1c is 9.4%. A hospital cross-coverage intern writes an order for 'sliding-scale regular insulin every 6 hours before meals as needed for blood glucose > 180 mg/dL' as the sole glycemic management strategy. Over the next 24 hours, the patient's blood glucose readings fluctuate wildly from 72 to 310 mg/dL ('roller-coaster pattern'). According to American Diabetes Association (ADA) and Endocrine Society inpatient guidelines, which of the following is the most appropriate insulin regimen for this patient?",
    "choices": [
      [
        "A scheduled basal-bolus-correction insulin regimen (basal insulin once daily plus prandial rapid-acting insulin before meals and correction scale)",
        "The patient is a hospitalized medical inpatient with poorly controlled type 2 diabetes. According to ADA and Endocrine Society guidelines and the landmark RABBIT-2 randomized controlled trial, SLIDING-SCALE INSULIN ALONE AS MONOTHERAPY IS STRONGLY DISCOURAGED AND INEFFECTIVE. Sliding-scale monotherapy is reactive rather than proactive: it treats hyperglycemia only AFTER it occurs, fails to provide continuous baseline insulin, and causes severe glycemic volatility ('roller-coaster' peaks and troughs) and increased infection rates. The established standard of care for non-critically ill hospitalized patients with consistent nutritional intake is a SCHEDULED BASAL-BOLUS-CORRECTION REGIMEN: (1) Basal insulin (glargine, detemir, or degludec) to suppress baseline hepatic gluconeogenesis; (2) Nutritional/prandial insulin (lispro, aspart, or glulisine) given before meals to cover mealtime carbohydrate excursions; and (3) Correction scale insulin administered concurrently with prandial doses to correct pre-meal hyperglycemia. Basal-bolus regimens achieve significantly superior glycemic control, faster resolution of hyperglycemia, and lower rates of hospital complications without increasing severe hypoglycemia compared to sliding-scale monotherapy."
      ],
      [
        "Continue sliding-scale regular insulin monotherapy and increase the scale thresholds by 50 units",
        "Escalating sliding-scale monotherapy exacerbates reactive glycemic instability, driving severe hypoglycemia followed by rebound hyperglycemia."
      ],
      [
        "Resume home oral metformin and glipizide therapy today at full baseline doses",
        "Oral sulfonylureas in hospitalized patients with acute pneumonia carry high risks of severe, unpredictable hypoglycemia, and metformin carries lactic acidosis risks if renal function declines."
      ],
      [
        "Initiate a continuous intravenous regular insulin infusion on the general medical floor without telemetry",
        "Continuous IV insulin infusions require frequent hourly point-of-care blood glucose monitoring in an intensive care unit (ICU) setting; they are not indicated or safe on a general floor for non-DKA patients."
      ],
      [
        "Withhold all insulin therapy unless blood glucose exceeds 400 mg/dL to minimize hypoglycemia risk",
        "Permissive severe hyperglycemia (> 180\u2013200 mg/dL) impairs neutrophil phagocytosis, increases secondary hospital-acquired infections, impairs wound healing, and prolongs length of stay."
      ]
    ],
    "shortestValidSolution": "Hospitalized diabetic on general ward with fluctuating glucose on sliding-scale insulin alone -> switch to scheduled basal-bolus-correction insulin regimen (RABBIT-2 trial; sliding-scale alone is obsolete).",
    "necessaryInference": "Apply ADA inpatient guidelines: reject sliding-scale insulin monotherapy as reactive and volatile, selecting scheduled basal-bolus-correction insulin as the evidence-based inpatient standard.",
    "strongestDistractor": "Resume home oral metformin and glipizide therapy today at full baseline doses",
    "distractorExclusion": "Oral antidiabetic agents (sulfonylureas/metformin) are held in acute medical admissions due to unpredictable oral intake, renal fluctuations, and hypoglycemia risks.",
    "citation": "Umpierrez GE, et al. Randomized Study of Basal-Bolus Insulin Therapy in the Inpatient Management of Patients with Type 2 Diabetes (RABBIT 2 Trial). Diabetes Care. 2007;30(9):2181-2186. PMID: 17513708.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ADA inpatient guidelines: reject sliding-scale insulin monotherapy as reactive and volatile, selecting scheduled basal-bolus-correction insulin as the evidence-based inpatient standard.",
      "distractorExclusionNotes": "Strongest distractor 'Resume home oral metformin and glipizide therapy today at full baseline doses' excluded: Oral antidiabetic agents (sulfonylureas/metformin) are held in acute medical admissions due to unpredictable oral intake, renal fluctuations, and hypoglycemia risks.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0327",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Behavioral Health",
    "topic": "Hospital-Acquired Delirium (Confusion Assessment Method)",
    "subtopic": "Non-Pharmacologic Multicomponent Bundle First-Line vs Antipsychotic Ineffectiveness",
    "provisionalDifficulty": 4,
    "stem": "An 79-year-old woman is admitted to the orthopedic inpatient floor following an uncomplicated open reduction and internal fixation of a femoral neck fracture sustained in a fall 48 hours ago. Her medical history includes mild cognitive impairment and hypertension. Her postoperative pain is managed with intravenous hydromorphone via patient-controlled analgesia (PCA). On postoperative day 2 at 11:00 PM, the night cross-coverage resident is called because the patient is pulling at her surgical wound dressing, trying to climb out of bed, and shouting that people are stealing her clothes. On physical examination, the patient is inattentive, unable to spell 'WORLD' backward or recite the months in reverse order, has disorganized, rambling speech, and fluctuates rapidly between agitation and drowsiness. The Confusion Assessment Method (CAM) is positive, confirming delirium. Physical examination reveals blood pressure 138/82 mm Hg, heart rate 92/min, temperature 37.1\u00b0C (98.8\u00b0F), and oxygen saturation 96% on ambient air. The Foley catheter was removed yesterday; bedside bladder scan shows 60 mL of urine. Electrolytes, CBC, and chest X-ray are normal. The orthopedic resident asks to order intravenous haloperidol 2.5 mg every 4 hours as needed for agitation. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Implement a multicomponent non-pharmacologic delirium protocol (reorientation, day-night light cues, family presence, sensory aids, mobilization), optimize non-opioid multimodal analgesia, and avoid routine antipsychotics",
        "The patient has acute hyperactive/mixed hospital-acquired delirium confirmed by the Confusion Assessment Method (CAM: acute onset and fluctuating course, inattention, plus disorganized thinking or altered level of consciousness). Postoperative delirium occurs in up to 50% of elderly hip fracture patients. THE EVIDENCE-BASED CORNERSTONE OF DELIRIUM MANAGEMENT IS A MULTICOMPONENT NON-PHARMACOLOGIC INTERVENTION BUNDLE: (1) Reorientation: verbal reminders, clocks, calendars, and familiar objects; (2) Environmental optimization: quiet at night, daytime natural light, sleep hygiene; (3) Restoring sensory deficits: ensure eyeglasses and hearing aids are in place; (4) Early physical mobilization; and (5) Systematic search for reversible precipitants: transition from high-dose opioids to multimodal non-opioid analgesia (acetaminophen, regional blocks), avoid physical restraints, and treat constipation. CRITICAL EVIDENCE UPDATE ON PHARMACOTHERAPY: Large randomized controlled trials (such as the AID-ICU and REDUCE trials) and the American Geriatrics Society (AGS) guidelines have conclusively shown that ANTIPSYCHOTICS (HALOPERIDOL, QUETIAPINE) DO NOT SHORTEN DELIRIUM DURATION, REDUCE SEVERITY, OR IMPROVE MORTALITY OR DISCHARGE DISPOSITION. Antipsychotics should be reserved strictly as a last resort for severe, dangerous agitation refractory to non-pharmacologic measures where the patient threatens imminent physical self-harm."
      ],
      [
        "Administer intravenous haloperidol 2.5 mg bolus every 4 hours around the clock to treat delirium",
        "Randomized controlled trials prove that haloperidol does not shorten delirium duration or improve mortality, and carries risks of QTc prolongation, torsades de pointes, and extrapyramidal symptoms."
      ],
      [
        "Administer intravenous lorazepam 1 mg every 2 hours as needed for agitation",
        "Benzodiazepines worsen delirium duration, cause profound paradoxical agitation in older adults, and increase aspiration and fall risk; they are indicated strictly for alcohol/sedative withdrawal."
      ],
      [
        "Apply four-point soft wrist and ankle restraints to prevent the patient from pulling at the wound",
        "Physical restraints are associated with increased agitation, strangulation, pressure injuries, prolonged delirium, and higher mortality; they should be strictly avoided."
      ],
      [
        "Order an emergent non-contrast head CT and lumbar puncture to rule out viral encephalitis",
        "In an elderly patient 48 hours post-femoral fracture receiving systemic opioids, post-surgical delirium is overwhelmingly common; invasive lumbar puncture is not indicated without fever or meningismus."
      ]
    ],
    "shortestValidSolution": "Post-op hip fracture delirium (CAM positive) on IV opioids -> multicomponent non-pharmacologic delirium bundle + reduce opioids (antipsychotics do not shorten delirium duration).",
    "necessaryInference": "Recognize that multicomponent non-pharmacologic environmental bundles are the evidence-based standard for delirium, and that antipsychotics (haloperidol) have failed in clinical trials to improve delirium outcomes.",
    "strongestDistractor": "Administer intravenous haloperidol 2.5 mg bolus every 4 hours around the clock to treat delirium",
    "distractorExclusion": "Large trials confirm haloperidol does not shorten delirium duration or reduce mortality; routine antipsychotics are not recommended by AGS guidelines.",
    "citation": "Marcantonio ER. Delirium in Hospitalized Older Adults. N Engl J Med. 2017;377(15):1456-1466. PMID: 29020579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that multicomponent non-pharmacologic environmental bundles are the evidence-based standard for delirium, and that antipsychotics (haloperidol) have failed in clinical trials to improve delirium outcomes.",
      "distractorExclusionNotes": "Strongest distractor 'Administer intravenous haloperidol 2.5 mg bolus every 4 hours around the clock t' excluded: Large trials confirm haloperidol does not shorten delirium duration or reduce mortality; routine antipsychotics are not recommended by AGS guidelines.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0328",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Inpatient Acute Kidney Injury Evaluation",
    "subtopic": "Fractional Excretion of Urea (FEUrea) on Diuretics vs Pre-Renal Azotemia vs Acute Tubular Necrosis",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with severe ischemic cardiomyopathy (left ventricular ejection fraction 25%) is hospitalized for acute decompensated heart failure with severe fluid overload. He has received high-dose intravenous furosemide (80 mg twice daily) for the past 48 hours, with 4.5 liters of net negative diuresis and resolution of his orthopnea and crackles. This morning, routine laboratory testing reveals an acute rise in serum creatinine from an admission baseline of 1.2 mg/dL up to 2.2 mg/dL, with blood urea nitrogen (BUN) rising from 22 to 64 mg/dL. He is producing 60 mL/hr of urine. Physical examination reveals blood pressure 104/64 mm Hg, heart rate 72/min, flat jugular veins at 30 degrees, dry oral mucous membranes, and completely clear lungs without peripheral edema. Urine chemistries demonstrate: - Urine sodium: 48 mEq/L - Urine creatinine: 60 mg/dL - Serum sodium: 138 mEq/L - Serum creatinine: 2.2 mg/dL - Urine urea nitrogen: 480 mg/dL - Serum BUN: 64 mg/dL. The calculated Fractional Excretion of Sodium (FENa) is 1.7% (traditionally interpreted as > 1%, suggestive of intrinsic ATN). However, the Fractional Excretion of Urea (FEUrea) is calculated at 24% (normal pre-renal cutoff: < 35%). Microscopic examination of the urine sediment reveals rare hyaline casts and no renal tubular epithelial cells or muddy brown granular casts. Which of the following is the most likely etiology of this patient's acute kidney injury?",
    "choices": [
      [
        "Pre-renal azotemia (intravascular volume depletion) secondary to over-diuresis, accurately identified by the low Fractional Excretion of Urea",
        "The patient has acute kidney injury (AKI) secondary to intravascular volume contraction and over-diuresis following high-dose loop diuretic therapy. A CRITICAL DIAGNOSTIC BOARD PRINCIPLE INVOLVES INTERPRETING URINARY INDICES IN THE PRESENCE OF DIURETICS: (1) Fractional Excretion of Sodium (FENa) is NOT RELIABLE in patients receiving loop or thiazide diuretics: diuretics block sodium reabsorption in the thick ascending limb of Henle or distal tubule, artificially forcing sodium into the urine (urine sodium > 40 mEq/L), which falsely elevates FENa > 1% even in the setting of severe pre-renal volume depletion. (2) FRACTIONAL EXCRETION OF UREA (FEUrea) IS THE PREFERRED DIAGNOSTIC INDEX IN PATIENTS RECEIVING DIURETICS: Urea reabsorption occurs predominantly in the proximal tubule and is unaffected by loop diuretics. A low FEUrea (< 35%) has high sensitivity and specificity (> 90%) for PRE-RENAL AZOTEMIA. Furthermore, the clinical signs (flat JVP, dry mucous membranes, resolution of edema), elevated BUN/creatinine ratio (> 20:1), and hyaline casts confirm pre-renal volume depletion rather than acute tubular necrosis. Diuretics should be held or reduced."
      ],
      [
        "Acute tubular necrosis (ATN) caused by furosemide-induced direct tubular epithelial cytotoxicity, confirmed by the FENa > 1%",
        "FENa is falsely elevated > 1% because furosemide forces natriuresis; the FEUrea < 35% and absence of muddy brown casts confirm pre-renal azotemia rather than ATN."
      ],
      [
        "Acute interstitial nephritis (AIN) secondary to furosemide hypersensitivity",
        "AIN presents with fever, maculopapular rash, arthralgias, peripheral eosinophilia, and sterile pyuria with WBC casts, which are completely absent here."
      ],
      [
        "Cardiorenal syndrome type 1 driven by persistent elevated central venous renal congestion",
        "Renal congestion in cardiorenal syndrome occurs in patients with severe fluid overload and high JVP; this patient is now volume-depleted with flat JVP and dry membranes from excessive diuresis."
      ],
      [
        "Post-renal obstructive uropathy secondary to acute bladder neck contracture",
        "The patient is producing 60 mL/hr of urine without suprapubic distension, and urinary chemistries reflect proximal tubular reabsorption of urea, ruling out obstruction."
      ]
    ],
    "shortestValidSolution": "AKI on loop diuretics + FENa 1.7% (falsely high due to diuretic natriuresis) + FEUrea 24% (< 35%) + dry membranes/flat JVP -> Pre-renal azotemia from over-diuresis.",
    "necessaryInference": "Recognize that loop diuretics render FENa unreliable (> 1%), and that Fractional Excretion of Urea (< 35%) is the decisive diagnostic test confirming pre-renal azotemia in patients taking diuretics.",
    "strongestDistractor": "Acute tubular necrosis (ATN) caused by furosemide-induced direct tubular epithelial cytotoxicity, confirmed by the FENa > 1%",
    "distractorExclusion": "FENa > 1% is a classic false-positive trap caused by diuretic-induced natriuresis; FEUrea < 35% correctly establishes pre-renal azotemia.",
    "citation": "Carvounis CP, et al. Significance of the Fractional Excretion of Urea in the Differential Diagnosis of Acute Renal Failure. Kidney Int. 2002;62(6):2223-2229. PMID: 12427156.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that loop diuretics render FENa unreliable (> 1%), and that Fractional Excretion of Urea (< 35%) is the decisive diagnostic test confirming pre-renal azotemia in patients taking diuretics.",
      "distractorExclusionNotes": "Strongest distractor 'Acute tubular necrosis (ATN) caused by furosemide-induced direct tubular epithel' excluded: FENa > 1% is a classic false-positive trap caused by diuretic-induced natriuresis; FEUrea < 35% correctly establishes pre-renal azotemia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0329",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Variceal Hemorrhage in Cirrhosis",
    "subtopic": "Restrictive Transfusion Strategy (Hb < 7 g/dL) and Vasoactive/Antibiotic Bundle",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man with decompensated alcoholic cirrhosis (Child-Pugh Class B) is admitted to the intensive care unit with acute massive hematemesis that began 2 hours ago. He has vomited approximately 800 mL of bright red blood with large clots. On arrival, he is pale and diaphoretic. Vital signs are: blood pressure 92/54 mm Hg, heart rate 116/min, respiratory rate 22/min, and oxygen saturation 96% on ambient air. Physical examination reveals spider angiomas, moderate shifting dullness consistent with ascites, and caput medusae, with no active bleeding in the oropharynx. Nasogastric lavage returns gross red blood. Laboratory testing reveals: - Hemoglobin: 7.6 g/dL (baseline was 11.2 g/dL 1 month ago) - Platelets: 68,000/mm3 - INR: 1.6 - Serum creatinine: 1.1 mg/dL. Two large-bore peripheral intravenous lines are placed, and fluid resuscitation is initiated. An enthusiastic medical resident suggests immediately ordering 4 units of packed red blood cells to aggressively restore his hemoglobin to > 10.0 g/dL. According to AASLD and Baveno VII consensus guidelines, which of the following represents the most appropriate management bundle for this patient?",
    "choices": [
      [
        "Maintain a restrictive transfusion strategy (transfuse red blood cells only if hemoglobin falls < 7.0 g/dL, targeting 7.0 to 9.0 g/dL), initiate intravenous octreotide infusion, administer prophylactic intravenous ceftriaxone, and arrange emergent upper endoscopy within 12 hours",
        "The patient has acute variceal hemorrhage secondary to cirrhotic portal hypertension. The management of acute variceal bleeding follows strict, evidence-based consensus guidelines: (1) RESTRICTIVE TRANSFUSION STRATEGY: Landmark randomized clinical trials (Villanueva et al., NEJM) demonstrated that a RESTRICTIVE TRANSFUSION THRESHOLD (transfusing packed red cells ONLY when hemoglobin drops below 7.0 g/dL, targeting a post-transfusion hemoglobin of 7.0\u20139.0 g/dL) SIGNIFICANTLY REDUCES 6-WEEK MORTALITY (mortality 5% vs 9%) and reduces rebleeding rates compared to a liberal strategy (targeting Hb > 9\u201310 g/dL). Liberal transfusion overfills the intravascular space, increases portal venous pressure, and dislodges early platelet plugs from the ruptured varix, precipitating fatal rebleeding. (2) VASOACTIVE AGENTS: Continuous intravenous octreotide (or somatostatin/terlipressin) must be initiated immediately upon suspected variceal hemorrhage to induce splanchnic vasoconstriction and reduce portal inflow. (3) ANTIBIOTIC PROPHYLAXIS: Short-term intravenous ceftriaxone (1 g daily for up to 7 days) is mandatory for ALL cirrhotic patients with GI bleeding; it significantly reduces spontaneous bacterial peritonitis, bacteremia, rebleeding, and all-cause mortality. (4) EARLY ENDOSCOPY: Perform flexible upper endoscopy within 12 hours for endoscopic variceal ligation (banding)."
      ],
      [
        "Aggressive liberal transfusion of packed red blood cells targeting a hemoglobin > 10.0 g/dL prior to endoscopy",
        "Liberal transfusion increases portal venous hydrostatic pressure, dislodges platelet plugs, and significantly increases rebleeding and 6-week mortality (Villanueva NEJM trial)."
      ],
      [
        "Administer high-dose intravenous recombinant factor VIIa to completely normalize the INR to 1.0",
        "Recombinant factor VIIa carries a high risk of fatal arterial and venous thrombosis and has demonstrated zero survival benefit in acute variceal bleeding."
      ],
      [
        "Withhold prophylactic antibiotics unless the patient develops documented fever or positive blood cultures",
        "Prophylactic antibiotics reduce bacterial translocation, recurrent bleeding, and all-cause mortality; withholding antibiotics until overt fever develops is an established medical error."
      ],
      [
        "Perform emergency surgical portacaval shunt within 2 hours of presentation without endoscopy",
        "Surgical shunts carry high operative mortality and precipitate severe, irreversible hepatic encephalopathy; endoscopic band ligation and medical therapy are first-line."
      ]
    ],
    "shortestValidSolution": "Cirrhotic variceal bleed with Hb 7.6 g/dL -> Restrictive transfusion (target Hb 7-9 g/dL, transfuse only if < 7) + IV octreotide + IV ceftriaxone + EGD within 12 hours.",
    "necessaryInference": "Apply the landmark Villanueva trial and Baveno VII guidelines: restrictive red blood cell transfusion (threshold < 7 g/dL) reduces rebleeding and mortality over liberal transfusion, combined with octreotide and ceftriaxone.",
    "strongestDistractor": "Aggressive liberal transfusion of packed red blood cells targeting a hemoglobin > 10.0 g/dL prior to endoscopy",
    "distractorExclusion": "Targeting Hb > 10 g/dL increases portal pressure, provoking massive recurrent variceal hemorrhage and higher mortality.",
    "citation": "Villanueva C, et al. Transfusion Strategies for Acute Upper Gastrointestinal Bleeding. N Engl J Med. 2013;368(1):11-21. PMID: 23281973.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the landmark Villanueva trial and Baveno VII guidelines: restrictive red blood cell transfusion (threshold < 7 g/dL) reduces rebleeding and mortality over liberal transfusion, combined with octreotide and ceftriaxone.",
      "distractorExclusionNotes": "Strongest distractor 'Aggressive liberal transfusion of packed red blood cells targeting a hemoglobin ' excluded: Targeting Hb > 10 g/dL increases portal pressure, provoking massive recurrent variceal hemorrhage and higher mortality.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0330",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Anticoagulation Reversal and Inferior Vena Cava Filters",
    "subtopic": "Life-Threatening Bleeding in Acute VTE: 4-Factor PCC / Specific Reversal and Retrievable IVC Filter",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man who was diagnosed with an acute proximal deep venous thrombosis (DVT) in the right femoral vein 4 days ago and initiated on oral apixaban 10 mg twice daily presents to the emergency department with sudden, severe hematochezia and syncope. On physical examination, he appears pale, diaphoretic, and somnolent. Vital signs are: blood pressure 82/46 mm Hg, heart rate 130/min, and respiratory rate 22/min. Rectal examination reveals torrential bright red blood with large clots. Complete blood count reveals: hemoglobin 6.4 g/dL (drop from 12.8 g/dL 4 days ago) and platelet count 210,000/mm3. Coagulation testing shows an elevated anti-factor Xa activity. Aggressive crystalloid resuscitation and transfusion of 2 units of uncrossmatched packed red blood cells are initiated. The patient continues to pass massive amounts of bloody stool, and blood pressure remains 86/50 mm Hg. The clinical team debates how to halt life-threatening bleeding while managing his acute proximal DVT (which poses an imminent risk of fatal pulmonary embolism). Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Administer specific factor Xa reversal agent (andexanet alfa or 4-factor prothrombin complex concentrate), discontinue apixaban, and place a temporary retrievable inferior vena cava (IVC) filter",
        "The patient has life-threatening, refractory major gastrointestinal bleeding while receiving direct oral anticoagulant (DOAC) therapy for an acute proximal DVT diagnosed within the past 4 days. Management requires balancing two competing life-threatening emergencies: (1) REVERSAL OF ANTICOAGULATION: Discontinue apixaban immediately and administer specific reversal therapy: ANDEXANET ALFA (a recombinant modified decoy Factor Xa protein that binds and sequesters apixaban/rivaroxaban) or, if unavailable, 4-FACTOR PROTHROMBIN COMPLEX CONCENTRATE (4F-PCC), which rapidly restores thrombin generation and arrests life-threatening coagulopathic bleeding. (2) MANAGEMENT OF ACUTE VTE: In patients with an ACUTE PROXIMAL DVT (< 1 month old) who have an ABSOLUTE CONTRAINDICATION TO ANTICOAGULATION (active life-threatening hemorrhage), PLACEMENT OF A TEMPORARY RETRIEVABLE INFERIOR VENA CAVA (IVC) FILTER is a guideline-directed Class 1 indication to mechanically trap emboli and prevent fatal pulmonary embolism. Once the bleeding source is identified and permanently controlled, anticoagulation is cautiously resumed and the IVC filter is retrieved."
      ],
      [
        "Continue apixaban at half the dose while transfusing platelets and fresh frozen plasma",
        "Continuing apixaban during torrential gastrointestinal hemorrhage causes fatal exsanguination; FFP is ineffective for reversing direct factor Xa inhibitors and causes volume overload."
      ],
      [
        "Administer intravenous protamine sulfate bolus to reverse oral apixaban activity",
        "Protamine sulfate is the specific reversal agent for unfractionated heparin (and partially reverses LMWH); it has zero binding affinity for apixaban or other oral DOACs."
      ],
      [
        "Administer intravenous idarucizumab bolus for direct chemical neutralization",
        "Idarucizumab is the specific humanized monoclonal antibody Fab fragment that reverses the direct thrombin inhibitor DABIGATRAN; it has zero efficacy against factor Xa inhibitors like apixaban."
      ],
      [
        "Perform emergency surgical ligation of the right femoral vein without reversing anticoagulation",
        "Venous ligation causes massive chronic venous gangrene and does not treat ongoing life-threatening arterial or mucosal gastrointestinal hemorrhage; anticoagulation reversal is mandatory."
      ]
    ],
    "shortestValidSolution": "Acute DVT on apixaban + massive GI bleed in shock -> stop apixaban, reverse with andexanet alfa or 4F-PCC + place temporary retrievable IVC filter (absolute contraindication to anticoagulation).",
    "necessaryInference": "Select specific Factor Xa reversal (andexanet alfa / 4F-PCC) for apixaban-induced shock bleeding, and identify placement of a retrievable IVC filter as mandatory for an acute proximal DVT with an absolute contraindication to anticoagulation.",
    "strongestDistractor": "Administer intravenous idarucizumab bolus for direct chemical neutralization",
    "distractorExclusion": "Idarucizumab reverses dabigatran exclusively; apixaban is a factor Xa inhibitor reversed by andexanet alfa or 4-factor PCC.",
    "citation": "Connolly SJ, et al. Full Study Report of Andexanet Alfa for Bleeding Associated with Factor Xa Inhibitors. N Engl J Med. 2019;380(14):1326-1335. PMID: 30730782.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select specific Factor Xa reversal (andexanet alfa / 4F-PCC) for apixaban-induced shock bleeding, and identify placement of a retrievable IVC filter as mandatory for an acute proximal DVT with an absolute contraindication to anticoagulation.",
      "distractorExclusionNotes": "Strongest distractor 'Administer intravenous idarucizumab bolus for direct chemical neutralization' excluded: Idarucizumab reverses dabigatran exclusively; apixaban is a factor Xa inhibitor reversed by andexanet alfa or 4-factor PCC.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0331",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Hemolytic Transfusion Reaction (AHTR)",
    "subtopic": "ABO Incompatibility, Clerical Error, Immediate Cessation, and Vigorous Crystalloid Diuresis",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman admitted for orthopedic surgery is receiving a transfusion of one unit of packed red blood cells for postoperative anemia (hemoglobin 6.8 g/dL). Approximately 15 minutes into the transfusion (after approximately 40 mL of blood has infused), the patient suddenly develops severe retrosternal chest tightness, flank pain, shaking chills, and shortness of breath. The nurse immediately stops the transfusion. Physical examination reveals an anxious, diaphoretic, flushed woman in acute distress. Vital signs are: blood pressure 82/48 mm Hg (baseline: 126/74 mm Hg), heart rate 136/min, respiratory rate 26/min, and temperature 39.2\u00b0C (102.6\u00b0F, baseline was 36.8\u00b0C). Urine draining from the Foley catheter has abruptly turned reddish-brown ('port-wine' colored). A clerical check of the blood bag label and patient wristband reveals that the blood unit was intended for another patient in an adjacent room (ABO mismatch: Type A blood infused into a Type O recipient). Which of the following represents the most critical immediate sequence of actions to manage this patient?",
    "choices": [
      [
        "Maintain the transfusion cessation, disconnect the blood tubing, infuse intravenous 0.9% normal saline aggressively to maintain urine output > 100 to 200 mL/hr, and send the blood unit, tubing, and fresh patient blood/urine samples to the blood bank",
        "The patient is experiencing an ACUTE HEMOLYTIC TRANSFUSION REACTION (AHTR), a life-threatening medical emergency caused by ABO incompatibility (most commonly human clerical error / misidentification). Preformed host IgM antibodies (anti-A in a Type O recipient) bind to transfused donor red blood cells, activating the classical complement cascade to completion (membrane attack complex C5b-9), causing massive INTRAVASCULAR HEMOLYSIS, shock, disseminated intravascular coagulation (DIC), and acute kidney injury (ATN from free hemoglobin-induced renal tubular obstruction and vasoconstriction). THE MANDATORY RESUSCITATION PROTOCOL: (1) STOP THE TRANSFUSION IMMEDIATELY and disconnect all blood tubing from the IV catheter (do not flush remaining blood in the line); (2) MAINTAIN IV ACCESS and initiate AGGRESSIVE INTRAVENOUS NORMAL SALINE RESUSCITATION to treat hypotension and maintain a high urine output (> 100\u2013200 mL/hr in adults) to prevent free hemoglobin precipitation in renal tubules and wash out toxic heme pigments; (3) Perform a clerical check and IMMEDIATELY NOTIFY THE BLOOD BANK, sending the implicated blood unit, IV tubing, and freshly drawn patient blood (for repeat typing, crossmatching, direct Coombs test, and free hemoglobin) and urine (for hemoglobinuria); and (4) Monitor coagulation parameters for DIC."
      ],
      [
        "Slow the transfusion rate to 10 mL/hr, administer oral diphenhydramine 50 mg, and resume after 15 minutes",
        "Slowing the infusion and giving antihistamines is the management for a mild, benign allergic transfusion reaction (urticaria); infusing more blood in an acute hemolytic reaction causes lethal shock and death."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus prior to infusing any intravenous crystalloids",
        "Administering a loop diuretic in a severely hypotensive, hypovolemic patient with acute intravascular hemolysis exacerbates shock and worsens renal tubular ischemia; aggressive saline loading must precede any diuretics."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1 g as sole definitive therapy for anaphylaxis",
        "AHTR is complement-mediated intravascular hemolysis, not IgE-mediated anaphylaxis; corticosteroids do not prevent renal tubular hemoglobin cast precipitation or reverse ABO-mediated hemolysis."
      ],
      [
        "Administer continuous intravenous sodium polystyrene sulfonate via nasogastric tube",
        "Sodium polystyrene sulfonate is an obsolete cation-exchange resin for chronic hyperkalemia; it has no role in acute hemodynamic resuscitation from transfusion shock."
      ]
    ],
    "shortestValidSolution": "ABO-mismatch transfusion reaction + flank pain + hypotension + red-brown urine (intravascular hemolysis) -> stop blood immediately + disconnect tubing + aggressive IV saline (target urine > 100-200 mL/hr) + notify blood bank.",
    "necessaryInference": "Diagnose acute hemolytic transfusion reaction from ABO mismatch, immediately halt infusion, preserve the line, aggressively resuscitate with IV normal saline to flush free hemoglobin from renal tubules, and initiate blood bank investigation.",
    "strongestDistractor": "Slow the transfusion rate to 10 mL/hr, administer oral diphenhydramine 50 mg, and resume after 15 minutes",
    "distractorExclusion": "Slowing the rate and giving diphenhydramine is appropriate only for mild urticarial reactions; continuing blood in ABO incompatibility guarantees fatal disseminated intravascular coagulation and renal failure.",
    "citation": "Delaney M, et al. Transfusion Reactions: Prevention, Diagnosis, and Treatment. Lancet. 2016;388(10061):2825-2836. PMID: 27083327.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose acute hemolytic transfusion reaction from ABO mismatch, immediately halt infusion, preserve the line, aggressively resuscitate with IV normal saline to flush free hemoglobin from renal tubules, and initiate blood bank investigation.",
      "distractorExclusionNotes": "Strongest distractor 'Slow the transfusion rate to 10 mL/hr, administer oral diphenhydramine 50 mg, an' excluded: Slowing the rate and giving diphenhydramine is appropriate only for mild urticarial reactions; continuing blood in ABO incompatibility guarantees fatal disseminated intravascular c",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0332",
    "exam": "Step 3",
    "subject": "Microbiology",
    "system": "Gastrointestinal",
    "topic": "Clostridioides difficile Colitis",
    "subtopic": "Oral Fidaxomicin vs Vancomycin First-Line, Obsolescence of Metronidazole, and Contact Precautions",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman hospitalized for 10 days for treatment of a severe diabetic foot ulcer with intravenous piperacillin-tazobactam develops acute watery diarrhea with 8 watery bowel movements over the past 24 hours, accompanied by crampy lower abdominal pain and low-grade fever. Physical examination reveals blood pressure 118/74 mm Hg, heart rate 94/min, and temperature 38.2\u00b0C (100.8\u00b0F). Abdominal examination demonstrates mild, diffuse lower abdominal tenderness without guarding, rigidity, or distension. Laboratory testing reveals: - Leukocyte count: 14,200/mm3 (normal: 4,000\u201311,000/mm3) - Serum creatinine: 1.0 mg/dL (baseline was 0.9 mg/dL). Stool nucleic acid amplification testing (NAAT) and enzyme immunoassay for toxins A and B are positive for Clostridioides difficile. This is her first lifetime episode of C. diff infection. The hospital intern suggests writing a prescription for oral metronidazole 500 mg three times daily and placing an alcohol-based hand rub dispenser outside the patient's room. According to the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA) guidelines, which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Oral fidaxomicin (200 mg twice daily for 10 days) or oral vancomycin (125 mg four times daily for 10 days), strict contact precautions, and mandatory hand hygiene with soap and water",
        "The patient has an initial episode of non-severe Clostridioides difficile infection (CDI, defined by WBC < 15,000/mm3 and serum creatinine < 1.5 mg/dL). According to the updated IDSA/SHEA clinical practice guidelines: (1) FIRST-LINE ANTIMICROBIAL THERAPY: ORAL FIDAXOMICIN (200 mg twice daily for 10 days) IS NOW THE PREFERRED FIRST-LINE AGENT over oral vancomycin because fidaxomicin is a narrow-spectrum macrocyclic bactericidal antibiotic that selectively targets C. difficile while sparing normal colonic bacteroidetes/firmicutes flora, resulting in significantly lower rates of CDI recurrence. ORAL VANCOMYCIN (125 mg four times daily for 10 days) is the established alternative first-line regimen. (2) OBSOLESCENCE OF METRONIDAZOLE: Oral metronidazole is INFERIOR in clinical cure and recurrence rates and is EXPLICITLY NO LONGER RECOMMENDED for initial CDI if fidaxomicin or vancomycin is available. (3) INFECTION CONTROL: Strict CONTACT PRECAUTIONS (gloves and gowns). MANDATORY HAND HYGIENE WITH SOAP AND WATER IS REQUIRED: alcohol-based hand sanitizers do NOT eradicate bacterial endospores; mechanical friction and washing with soap and water physically removes spores from hands."
      ],
      [
        "Oral metronidazole 500 mg three times daily for 10 days and hand hygiene using alcohol-based foam sanitizers",
        "Metronidazole is clinically inferior and no longer recommended by IDSA guidelines, and alcohol rubs do not kill C. difficile spores."
      ],
      [
        "Intravenous vancomycin 1 g every 12 hours combined with oral loperamide",
        "Intravenous vancomycin is not secreted into the colonic lumen and is completely ineffective for luminal C. diff; antimotility agents (loperamide) cause toxic megacolon and perforation."
      ],
      [
        "Oral fidaxomicin combined with immediate fecal microbiota transplantation (FMT)",
        "Fecal microbiota transplantation is indicated strictly for multiple recurrent CDI (>= 2 recurrences failing vancomycin/fidaxomicin); it is not indicated for an initial episode."
      ],
      [
        "Intravenous tigecycline monotherapy and transfer to the intensive care unit",
        "Tigecycline is a third-line rescue agent reserved strictly for fulminant, refractory, life-threatening CDI shock; it is not indicated for non-severe initial infection."
      ]
    ],
    "shortestValidSolution": "First episode of non-severe C. difficile colitis -> oral fidaxomicin (preferred) or oral vancomycin + contact precautions + hand hygiene with SOAP AND WATER (alcohol does not kill spores; metronidazole is obsolete).",
    "necessaryInference": "Apply updated IDSA/SHEA guidelines: select oral fidaxomicin or vancomycin over obsolete metronidazole, and mandate soap-and-water handwashing because alcohol sanitizers do not kill C. difficile endospores.",
    "strongestDistractor": "Oral metronidazole 500 mg three times daily for 10 days and hand hygiene using alcohol-based foam sanitizers",
    "distractorExclusion": "Metronidazole is no longer recommended due to high failure rates, and alcohol rubs fail to kill endospores, promoting nosocomial transmission.",
    "citation": "Johnson S, et al. IDSA/SHEA 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply updated IDSA/SHEA guidelines: select oral fidaxomicin or vancomycin over obsolete metronidazole, and mandate soap-and-water handwashing because alcohol sanitizers do not kill C. difficile endospores.",
      "distractorExclusionNotes": "Strongest distractor 'Oral metronidazole 500 mg three times daily for 10 days and hand hygiene using a' excluded: Metronidazole is no longer recommended due to high failure rates, and alcohol rubs fail to kill endospores, promoting nosocomial transmission.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0333",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Severe Symptomatic Hyponatremia",
    "subtopic": "Hypertonic (3%) Saline Bolus vs Limit of Correction to Prevent Osmotic Demyelination Syndrome",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman with a history of schizophrenia treated with psychotropic medications is admitted to the medical intensive care unit after being found by her case manager experiencing generalized tonic-clonic status epilepticus. The seizures terminate after intravenous lorazepam and levetiracetam. She remains comatose, opening her eyes only to noxious stimuli. Physical examination reveals moist mucous membranes, flat jugular veins, clear lungs, and no peripheral edema. Laboratory evaluation reveals: - Serum sodium: 108 mEq/L - Serum potassium: 3.8 mEq/L - Serum chloride: 76 mEq/L - Serum bicarbonate: 24 mEq/L - Blood urea nitrogen: 8 mg/dL - Serum creatinine: 0.6 mg/dL - Blood glucose: 98 mg/dL - Serum osmolality: 226 mOsm/kg (severe hypotonic hyponatremia) - Urine osmolality: 85 mOsm/kg - Urine sodium: 12 mEq/L. The findings are consistent with primary polydipsia (excessive water intake overwhelming renal diluting capacity). She develops a second generalized seizure in the ICU. Which of the following is the most appropriate immediate therapy and maximum rate of correction to safely manage this patient?",
    "choices": [
      [
        "Administer a 100-mL intravenous bolus of 3% hypertonic saline over 10 minutes (repeatable up to 2 times for ongoing seizures) targeting a 4 to 6 mEq/L rise in serum sodium, and limit total 24-hour correction to <= 8 mEq/L",
        "The patient has severe, acute symptomatic hypotonic hyponatremia (serum sodium 108 mEq/L) presenting with life-threatening neurological emergencies (status epilepticus and coma) driven by cerebral edema and impending transtentorial herniation. In severe acute symptomatic hyponatremia with seizures, the IMMEDIATE LIFE-SAVING INTERVENTION IS A 100-mL INTRAVENOUS BOLUS OF 3% HYPERTONIC SALINE INFUSED OVER 10 MINUTES. This bolus can be repeated up to two additional times at 10-minute intervals if severe neurological symptoms or seizures persist. CRITICAL THERAPEUTIC TARGET: An acute elevation of serum sodium by just 4 to 6 mEq/L is sufficient to reverse cerebral edema, stop herniation, and terminate status epilepticus. CRITICAL SAFETY LIMITATION / PREVENTING OSMOTIC DEMYELINATION SYNDROME (ODS): Overly rapid correction of chronic or subacute hyponatremia strips astrocytes and pontine neurons of myelin, causing fatal or irreversible Osmotic Demyelination Syndrome (central pontine myelinolysis: spastic quadriparesis, pseudobulbar palsy, 'locked-in' syndrome). Therefore, TOTAL SODIUM CORRECTION MUST BE STRICTLY LIMITED TO <= 8 mEq/L IN THE FIRST 24 HOURS (or <= 6 mEq/L in patients at high risk of ODS). If spontaneous overcorrection occurs (e.g., massive aquaresis once water intake stops in primary polydipsia), desmopressin (dDAVP) and D5W must be administered to halt or re-lower the sodium."
      ],
      [
        "Administer continuous 3% hypertonic saline infused at 150 mL/hr targeting rapid normalization to 135 mEq/L within 12 hours",
        "Rapidly normalizing sodium to 135 within 12 hours causes catastrophic Osmotic Demyelination Syndrome (locked-in syndrome) and permanent quadriparesis."
      ],
      [
        "Administer intravenous conivaptan (vasopressin V1a/V2 receptor antagonist) bolus and infusion",
        "Vaptans cause unpredictable, rapid aquaresis and severe overcorrection, and are strictly contraindicated in acute hyponatremia with seizures."
      ],
      [
        "Initiate strict fluid restriction to 500 mL daily as sole therapy without hypertonic saline",
        "Fluid restriction alone is completely inadequate for an actively seizing patient with cerebral herniation; hypertonic saline is required immediately to reverse brain swelling."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus to induce natriuretic renal clearance",
        "Furosemide induces further electrolyte loss and hypotension without rapidly expanding intravascular sodium to reverse acute life-threatening cerebral edema."
      ]
    ],
    "shortestValidSolution": "Severe hyponatremia (108 mEq/L) with seizures -> 3% hypertonic saline 100 mL bolus over 10 min (target 4-6 mEq/L rise) + STRICT LIMIT <= 8 mEq/L in 24 hours to prevent osmotic demyelination syndrome.",
    "necessaryInference": "Apply modern hyponatremia guidelines: actively seizing patients require 100 mL boluses of 3% saline to raise sodium by 4-6 mEq/L, with a strict maximum 24-hour limit <= 8 mEq/L to prevent fatal central pontine myelinolysis.",
    "strongestDistractor": "Administer continuous 3% hypertonic saline infused at 150 mL/hr targeting rapid normalization to 135 mEq/L within 12 hours",
    "distractorExclusion": "Normalizing sodium rapidly (> 8 mEq/L in 24 hours) destroys myelin sheaths in the brainstem, causing irreversible locked-in syndrome (osmotic demyelination).",
    "citation": "Spasovski G, et al. Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47. PMID: 24569125.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply modern hyponatremia guidelines: actively seizing patients require 100 mL boluses of 3% saline to raise sodium by 4-6 mEq/L, with a strict maximum 24-hour limit <= 8 mEq/L to prevent fatal central pontine myelinolysis.",
      "distractorExclusionNotes": "Strongest distractor 'Administer continuous 3% hypertonic saline infused at 150 mL/hr targeting rapid ' excluded: Normalizing sodium rapidly (> 8 mEq/L in 24 hours) destroys myelin sheaths in the brainstem, causing irreversible locked-in syndrome (osmotic demyelination).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0334",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Inpatient Cross-Coverage: Acute Nocturnal Agitation",
    "subtopic": "Systematic Bedside Etiologic Evaluation Before Chemical Sedation",
    "provisionalDifficulty": 4,
    "stem": "At 2:00 AM, the night cross-coverage resident receives an urgent page from the floor nurse stating: 'The 74-year-old man admitted yesterday for an acute COPD exacerbation is climbing out of bed, screaming at the staff, and pulling at his intravenous lines. He needs a sedative immediately.' The patient's daytime hospital chart notes that he was calm, cooperative, and oriented during morning rounds. He is currently receiving nebulized albuterol-ipratropium, oral prednisone 40 mg daily, and oral azithromycin. The nurse suggests ordering an immediate dose of intravenous lorazepam 2 mg or haloperidol 5 mg. Which of the following is the most appropriate initial action by the cross-coverage physician?",
    "choices": [
      [
        "Perform an immediate bedside assessment of vital signs, pulse oximetry, point-of-care glucose, and evaluate for acute urinary retention with a portable bladder scanner",
        "Acute nocturnal delirium/agitation in a hospitalized patient is a medical symptom of an underlying physiologic disturbance until proven otherwise. Ordering chemical sedation (benzodiazepines or antipsychotics) over the telephone without evaluating the patient is a major safety violation. THE MANDATORY FIRST ACTION IS IMMEDIATE IN-PERSON BEDSIDE ASSESSMENT: (1) Check vital signs and pulse oximetry: acute hypoxemia (e.g., mucous plug, worsening COPD, or pulmonary embolism) is a classic cause of sudden combativeness; (2) Check fingerstick blood glucose to rule out hypoglycemia; (3) Assess for ACUTE URINARY RETENTION: anticholinergic medications (ipratropium) and systemic corticosteroids frequently trigger painful urinary retention in older men with subclinical BPH, causing severe agitation that is immediately cured by Foley catheter decompression; (4) Check for fecal impaction, occult pain, or sepsis. Sedatives given to a hypoxic or urinary-retaining patient suppress respiration, worsen hypercapnic respiratory failure, and increase mortality."
      ],
      [
        "Order intravenous lorazepam 2 mg over the telephone to rapidly ensure patient and nursing safety",
        "Prescribing benzodiazepines without seeing the patient risks fatal respiratory arrest in a COPD patient whose agitation is caused by acute hypercapnia or hypoxemia."
      ],
      [
        "Order intravenous haloperidol 5 mg over the telephone and advise the nurse to recheck in 2 hours",
        "Blind telephone orders for antipsychotics violate patient safety; haloperidol causes QTc prolongation, torsades de pointes, and masks life-threatening physiological decompensation."
      ],
      [
        "Apply four-point soft wrist restraints and order a STAT non-contrast head CT",
        "Physical restraints increase agitation and trauma without diagnosing the cause, and transporting an unassessed, unstable patient to CT is hazardous."
      ],
      [
        "Instruct the nurse to turn off all room lights and close the door to reduce sensory stimulation",
        "Isolating an acutely agitated, unassessed patient in darkness delays recognition of respiratory failure, falls, and fatal metabolic collapse."
      ]
    ],
    "shortestValidSolution": "Acute nighttime agitation in hospitalized patient -> go to bedside immediately to check vitals, SpO2, glucose, and bladder scan for urinary retention before prescribing any sedatives.",
    "necessaryInference": "Recognize that acute inpatient agitation requires immediate bedside clinical evaluation to identify reversible medical emergencies (hypoxemia, urinary retention, hypoglycemia) rather than telephone orders for chemical restraints.",
    "strongestDistractor": "Order intravenous lorazepam 2 mg over the telephone to rapidly ensure patient and nursing safety",
    "distractorExclusion": "Telephone sedation without bedside assessment is a dangerous medical error that suppresses respiration in an acutely hypoxic or hypercapnic COPD patient.",
    "citation": "Inouye SK, et al. Delirium in Elderly People. Lancet. 2014;383(9920):911-922. PMID: 23992774.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that acute inpatient agitation requires immediate bedside clinical evaluation to identify reversible medical emergencies (hypoxemia, urinary retention, hypoglycemia) rather than telephone orders for chemical restraints.",
      "distractorExclusionNotes": "Strongest distractor 'Order intravenous lorazepam 2 mg over the telephone to rapidly ensure patient an' excluded: Telephone sedation without bedside assessment is a dangerous medical error that suppresses respiration in an acutely hypoxic or hypercapnic COPD patient.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0335",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Postoperative Atrial Fibrillation",
    "subtopic": "Hemodynamically Stable Rate Control with Beta-Blockers vs Electrical Cardioversion",
    "provisionalDifficulty": 4,
    "stem": "A 69-year-old woman is recovering on the surgical floor on postoperative day 2 following an uncomplicated elective open right hemicolectomy for colon cancer. The telemetry monitor sounds an alarm displaying a new irregularly irregular rhythm with narrow QRS complexes and absent P waves with fibrillatory baseline at a rate of 142/min, confirming new-onset atrial fibrillation with rapid ventricular response. On physical examination, the patient is awake and alert, reporting mild palpitations but no chest pain, shortness of breath, lightheadedness, or nausea. Vital signs are: blood pressure 128/78 mm Hg, heart rate 140/min, respiratory rate 16/min, and oxygen saturation 98% on ambient air. Cardiopulmonary examination reveals an irregular heart rate with normal S1 and S2, clear breath sounds bilaterally, and warm extremities with normal capillary refill. Her surgical incision is clean and intact. Laboratory evaluation reveals: - Serum potassium: 4.1 mEq/L - Serum magnesium: 2.1 mg/dL - Hemoglobin: 11.4 g/dL - Troponin: normal. Which of the following is the most appropriate initial management for this patient's arrhythmia?",
    "choices": [
      [
        "Administer intravenous metoprolol (or diltiazem) titrated to achieve ventricular rate control (heart rate < 110/min)",
        "The patient has new-onset postoperative atrial fibrillation (POAF), which occurs in up to 10% to 30% of non-cardiac surgical patients, typically triggered by sympathetic surge, systemic inflammation, fluid shifts, and autonomic imbalance. The management of new-onset atrial fibrillation is dictated strictly by HEMODYNAMIC STABILITY: (1) IN A HEMODYNAMICALLY STABLE PATIENT (normal blood pressure, alert, clear lungs, no acute coronary ischemia), THE IMMEDIATE INITIAL GOAL IS VENTRICULAR RATE CONTROL. First-line agents are INTRAVENOUS BETA-BLOCKERS (such as metoprolol tartrate 5 mg IV boluses or esmolol infusion) or NON-DIHYDROPYRIDINE CALCIUM CHANNEL BLOCKERS (diltiazem IV bolus and infusion), targeting a resting heart rate < 110/min. Beta-blockers are particularly effective in the postoperative state by counteracting high circulating catecholamines. (2) SYNCHRONIZED ELECTRICAL CARDIOVERSION IS RESERVED STRICTLY FOR HEMODYNAMICALLY UNSTABLE PATIENTS (hypotension, acute pulmonary edema, angina, shock). (3) ANTICOAGULATION: Spontaneous cardioversion back to sinus rhythm occurs in > 70% of POAF patients within 24 to 48 hours; anticoagulation is considered if atrial fibrillation persists > 48 hours or based on baseline CHA2DS2-VASc score upon discharge."
      ],
      [
        "Perform immediate synchronized electrical cardioversion at 200 Joules",
        "Synchronized cardioversion is reserved strictly for hemodynamically UNSTABLE patients; in a stable, normotensive patient, electrical cardioversion causes unnecessary procedural sedation risks."
      ],
      [
        "Administer immediate unsynchronized electrical defibrillation at 360 Joules",
        "Unsynchronized defibrillation is used strictly for pulseless cardiac arrest (VF or pulseless VT); delivering it to a patient with a pulse risks triggering fatal ventricular fibrillation."
      ],
      [
        "Initiate intravenous amiodarone infusion as primary first-line therapy",
        "Amiodarone is a secondary antiarrhythmic reserved for patients with severe heart failure, refractory rate control, or structural heart disease; beta-blockers and diltiazem are preferred first-line."
      ],
      [
        "Administer intravenous digoxin 0.5 mg bolus as sole immediate rate-controlling agent",
        "Digoxin has a delayed onset of action (> 1\u20132 hours) and controls ventricular rate poorly in the hyperadrenergic postoperative state; it is not preferred for acute rate control."
      ]
    ],
    "shortestValidSolution": "Post-op new AFib + hemodynamically stable (BP 128/78, clear lungs) -> IV beta-blocker (metoprolol) or diltiazem for rate control (cardioversion reserved for shock).",
    "necessaryInference": "Differentiate stable from unstable postoperative atrial fibrillation, selecting IV beta-blockers or diltiazem for rate control in stable patients while reserving electrical cardioversion strictly for hemodynamic collapse.",
    "strongestDistractor": "Perform immediate synchronized electrical cardioversion at 200 Joules",
    "distractorExclusion": "Cardioversion is indicated for hemodynamically unstable arrhythmias; stable patients are managed pharmacologically with rate-control agents.",
    "citation": "January CT, et al. 2019 AHA/ACC/HRS Focused Update of the 2014 AHA/ACC/HRS Guideline for the Management of Patients With Atrial Fibrillation. Circulation. 2019;140(2):e125-e151. PMID: 30686041.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate stable from unstable postoperative atrial fibrillation, selecting IV beta-blockers or diltiazem for rate control in stable patients while reserving electrical cardioversion strictly for hemodynamic collapse.",
      "distractorExclusionNotes": "Strongest distractor 'Perform immediate synchronized electrical cardioversion at 200 Joules' excluded: Cardioversion is indicated for hemodynamically unstable arrhythmias; stable patients are managed pharmacologically with rate-control agents.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0336",
    "exam": "Step 3",
    "subject": "Microbiology",
    "system": "Respiratory",
    "topic": "Hospital-Acquired Pneumonia (HAP)",
    "subtopic": "Empiric Broad-Spectrum Dual Pseudomonal and MRSA Coverage",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man hospitalized on the neurology floor for 5 days following an acute ischemic stroke develops a new fever, productive cough with purulent green sputum, and increasing oxygen requirements. He has been receiving intravenous broad-spectrum ceftriaxone for an aspiration event on admission. On physical examination, temperature is 38.9\u00b0C (102.0\u00b0F), blood pressure is 114/70 mm Hg, heart rate is 108/min, respiratory rate is 24/min, and oxygen saturation is 91% on 3 L/min nasal cannula. Auscultation of the lungs reveals bronchial breath sounds and inspiratory crackles over the right middle and lower lung lobes. A repeat portable chest radiograph reveals a new, dense consolidation in the right middle and lower lobes that was not present on admission. Sputum Gram stain and blood cultures are drawn. According to the IDSA/ATS guidelines for Hospital-Acquired Pneumonia (HAP), which of the following is the most appropriate empiric antimicrobial regimen for this patient?",
    "choices": [
      [
        "Intravenous vancomycin (or linezolid) combined with intravenous cefepime (or piperacillin-tazobactam)",
        "The patient has developed Hospital-Acquired Pneumonia (HAP, defined as pneumonia occurring >= 48 hours after hospital admission that was not incubating at the time of admission). Patients who develop HAP after prior intravenous antibiotic exposure (ceftriaxone) or in hospital units where MRSA prevalence is > 20% are at high risk for multidrug-resistant (MDR) pathogens, predominantly Methicillin-Resistant Staphylococcus aureus (MRSA) and Pseudomonas aeruginosa, as well as enteric Gram-negative bacilli. According to the IDSA/ATS HAP/VAP clinical practice guidelines, EMPIRIC ANTIMICROBIAL REGIMENS FOR HIGH-RISK HAP MUST PROVIDE DUAL COVERAGE: (1) Active anti-MRSA coverage: intravenous VANCOMYCIN (trough target 15\u201320 mcg/mL) or intravenous LINEZOLID; PLUS (2) Antipseudomonal beta-lactam: intravenous CEFEPIME, PIPERACILLIN-TAZOBACTAM, meropenem, or ceftazidime. (In patients with high risk of mortality or septic shock, a second antipseudomonal agent from a different class, such as an aminoglycoside or ciprofloxacin, is added). Monotherapy with community-acquired regimens (ceftriaxone, ampicillin-sulbactam) has unacceptably high failure and mortality rates."
      ],
      [
        "Intravenous ceftriaxone 1 g daily combined with oral azithromycin 500 mg daily",
        "Ceftriaxone plus azithromycin is the standard regimen for community-acquired pneumonia (CAP); it has zero activity against Pseudomonas aeruginosa or MRSA, the primary causes of HAP."
      ],
      [
        "Oral levofloxacin 750 mg daily as outpatient-equivalent monotherapy",
        "Fluoroquinolone monotherapy is inadequate for high-risk nosocomial pneumonia in a patient with recent antibiotic exposure, having high rates of resistance and zero MRSA coverage."
      ],
      [
        "Intravenous daptomycin 6 mg/kg daily combined with intravenous piperacillin-tazobactam",
        "Daptomycin is INACTIVATED BY PULMONARY SURFACTANT and has zero efficacy in pulmonary infections; daptomycin is strictly contraindicated in all pneumonias."
      ],
      [
        "Intravenous ampicillin-sulbactam 3 g every 6 hours as single-agent therapy",
        "Ampicillin-sulbactam lacks antipseudomonal activity and does not cover MRSA; using it for HAP after prior cephalosporin exposure leads to treatment failure."
      ]
    ],
    "shortestValidSolution": "New pneumonia developing on hospital day 5 with prior antibiotic exposure -> Hospital-Acquired Pneumonia (HAP) -> empiric vancomycin (MRSA) + cefepime or piperacillin-tazobactam (Pseudomonas).",
    "necessaryInference": "Apply IDSA/ATS HAP guidelines: nosocomial pneumonia developing after >= 48 hours of hospitalization requires empiric coverage for both MRSA (vancomycin) and Pseudomonas (cefepime/pip-tazo), recognizing that daptomycin is inactivated by surfactant.",
    "strongestDistractor": "Intravenous daptomycin 6 mg/kg daily combined with intravenous piperacillin-tazobactam",
    "distractorExclusion": "Daptomycin binds pulmonary surfactant and is completely inactivated; it cannot be used for any form of pneumonia.",
    "citation": "Kalil AC, et al. Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the Infectious Diseases Society of America and the American Thoracic Society. Clin Infect Dis. 2016;63(5):e61-e111. PMID: 27418579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply IDSA/ATS HAP guidelines: nosocomial pneumonia developing after >= 48 hours of hospitalization requires empiric coverage for both MRSA (vancomycin) and Pseudomonas (cefepime/pip-tazo), recognizing that daptomycin is inactivated by surfactant.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous daptomycin 6 mg/kg daily combined with intravenous piperacillin-tazo' excluded: Daptomycin binds pulmonary surfactant and is completely inactivated; it cannot be used for any form of pneumonia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0337",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Decompensated Heart Failure Inpatient Escalation",
    "subtopic": "Diuretic Resistance, Sequential Nephron Blockade (ADVOR Trial), and SGLT2 Inhibitor Addition",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man with chronic ischemic cardiomyopathy (left ventricular ejection fraction 28%) and chronic kidney disease stage 3a (baseline serum creatinine 1.4 mg/dL) is admitted to the hospital with acute decompensated heart failure. He has significant volume overload with 3+ bilateral pitting edema to the thighs, ascites, and bibasilar crackles. Over the first 48 hours of admission, he is treated with high-dose intravenous furosemide (continuous infusion at 20 mg/hr, totaling 480 mg/day). Despite this aggressive regimen, his net urine output over the past 24 hours has been only 800 mL, and physical examination demonstrates persistent massive fluid overload with no reduction in weight. Physical examination reveals blood pressure 114/72 mm Hg, heart rate 74/min, and oxygen saturation 94% on 2 L/min nasal cannula. Serum creatinine has remained stable at 1.5 mg/dL, serum sodium is 134 mEq/L, and serum potassium is 4.0 mEq/L. Which of the following is the most appropriate next step to overcome diuretic resistance and achieve effective decongestion in this patient?",
    "choices": [
      [
        "Initiate sequential nephron blockade by adding an oral thiazide-like diuretic (metolazone) or intravenous acetazolamide (ADVOR trial) or an SGLT2 inhibitor concurrently with the loop diuretic",
        "The patient has acute decompensated heart failure complicated by DIURETIC RESISTANCE, defined as failure to achieve adequate decongestion (urine output < 100\u2013150 mL/hr or spot urine sodium < 50\u201370 mEq/L at 2 hours) despite escalating doses of loop diuretics. Pathophysiologically, chronic loop diuretic exposure causes compensatory hypertrophy and hyperplasia of distal convoluted tubule and proximal tubule cells, leading to avid downstream sodium reabsorption ('braking phenomenon'). According to AHA/ACC/HFSA guidelines: (1) SEQUENTIAL NEPHRON BLOCKADE: Adding a second diuretic acting at a different nephron segment overcomes resistance. Oral METOLAZONE (or IV chlorothiazide) blocks distal tubule sodium-chloride cotransporters (NCC), preventing reabsorption of the massive sodium load delivered by the loop diuretic. (2) INTRAVENOUS ACETAZOLAMIDE: The landmark ADVOR randomized controlled trial demonstrated that adding intravenous acetazolamide (which inhibits proximal tubular sodium bicarbonate reabsorption) to loop diuretics significantly accelerates successful decongestion without increasing adverse events. (3) Adding an SGLT2 inhibitor also enhances natriuresis while providing proven mortality benefit."
      ],
      [
        "Switch intravenous furosemide to oral bumetanide at a reduced equivalent dose",
        "Switching from high-dose continuous IV furosemide to an oral diuretic in an edematous patient with bowel wall edema reduces drug bioavailability and severely worsens diuretic resistance."
      ],
      [
        "Initiate continuous intravenous dopamine infusion at 'renal dose' (2 mcg/kg/min)",
        "The ROSE-AHF randomized trial proved that low-dose 'renal' dopamine does not enhance decongestion, improve renal function, or reduce mortality in acute heart failure."
      ],
      [
        "Immediately refer for emergent surgical bilateral nephrectomy and urgent hemodialysis",
        "Bilateral nephrectomy is a catastrophic, irreversible intervention; medical sequential nephron blockade successfully overcomes diuretic resistance in > 90% of cases."
      ],
      [
        "Administer high-dose intravenous albumin boluses to increase oncotic delivery to the loop of Henle",
        "Albumin infusions in acute heart failure expand intravascular volume, worsening pulmonary capillary wedge pressure and precipitating flash pulmonary edema and respiratory failure."
      ]
    ],
    "shortestValidSolution": "Diuretic resistance in heart failure failing high-dose IV furosemide -> sequential nephron blockade: add oral metolazone or IV acetazolamide (ADVOR trial) to block downstream sodium reabsorption.",
    "necessaryInference": "Apply heart failure guidelines and the ADVOR trial: overcome loop diuretic resistance using sequential nephron blockade (adding metolazone, acetazolamide, or SGLT2i) to block distal/proximal compensatory sodium reabsorption.",
    "strongestDistractor": "Initiate continuous intravenous dopamine infusion at 'renal dose' (2 mcg/kg/min)",
    "distractorExclusion": "Renal-dose dopamine failed in the ROSE-AHF trial to improve decongestion or renal function; sequential nephron blockade is the evidence-based strategy.",
    "citation": "Mullens W, et al. Acetazolamide in Decompensated Heart Failure with Volume Overload (ADVOR Trial). N Engl J Med. 2022;387(13):1185-1195. PMID: 36027559.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply heart failure guidelines and the ADVOR trial: overcome loop diuretic resistance using sequential nephron blockade (adding metolazone, acetazolamide, or SGLT2i) to block distal/proximal compensatory sodium reabsorption.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate continuous intravenous dopamine infusion at 'renal dose' (2 mcg/kg/min)' excluded: Renal-dose dopamine failed in the ROSE-AHF trial to improve decongestion or renal function; sequential nephron blockade is the evidence-based strategy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0338",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Stress Ulcer Prophylaxis Indications",
    "subtopic": "ICU Specific Criteria (Mechanical Ventilation > 48h or Coagulopathy) vs Inappropriateness on General Wards",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman is admitted to the general medical ward for management of acute right lower lobe community-acquired pneumonia. She is receiving intravenous ceftriaxone, oral azithromycin, and supplemental oxygen via nasal cannula at 2 L/min. She has a history of well-controlled hypertension and osteopenia. She has no personal or family history of peptic ulcer disease, gastrointestinal bleeding, or chronic NSAID use. On physical examination, blood pressure is 124/76 mm Hg, heart rate is 82/min, and respiratory rate is 18/min. She is eating a regular diet without nausea or abdominal pain. Laboratory evaluation reveals: hemoglobin 12.8 g/dL, platelet count 240,000/mm3, and INR 1.0. A medical student on the team suggests adding daily intravenous pantoprazole 40 mg for 'routine inpatient stress ulcer prophylaxis'. According to evidence-based practice guidelines, which of the following is the most appropriate management regarding stress ulcer prophylaxis for this patient?",
    "choices": [
      [
        "Withhold stress ulcer prophylaxis because the patient lacks guideline-directed indications, and routine acid suppression increases risks of Clostridioides difficile colitis and nosocomial pneumonia",
        "Stress ulcer prophylaxis (SUP) with proton pump inhibitors (PPIs) or histamine-2 receptor antagonists (H2RAs) is widely and inappropriately over-prescribed on general medical inpatient wards. According to the American Society of Health-System Pharmacists (ASHP) and Surviving Sepsis guidelines, STRESS ULCER PROPHYLAXIS IS INDICATED STRICTLY FOR HIGH-RISK CRITICALLY ILL PATIENTS IN THE INTENSIVE CARE UNIT (ICU) WHO HAVE: (1) MECHANICAL VENTILATION FOR > 48 HOURS, or (2) COAGULOPATHY (platelet count < 50,000/mm3, INR > 1.5, or PTT > 2x control). Minor ICU risk factors requiring at least two criteria include sepsis, occult GI bleeding for >= 6 days, ICU stay > 1 week, or high-dose corticosteroids. In non-ICU patients on general medical floors who are eating and have no coagulopathy or mechanical ventilation, THE RISK OF CLINICALLY SIGNIFICANT BLEEDING IS < 0.1% TO 0.2%. Prescribing routine PPI prophylaxis in general medical patients provides zero clinical benefit while significantly INCREASING THE RISKS OF CLOSTRIDIOIDES DIFFICILE COLITIS, HOSPITAL-ACQUIRED PNEUMONIA, acute interstitial nephritis, and drug interactions."
      ],
      [
        "Initiate daily intravenous pantoprazole 40 mg because all hospitalized patients require gastroprotection",
        "Hospitalized general ward patients have an exceedingly low risk of bleeding; universal prophylaxis causes harm from C. diff and pneumonia without clinical benefit."
      ],
      [
        "Initiate oral famotidine 20 mg twice daily as a completely risk-free alternative to PPIs",
        "H2 receptor antagonists also increase the risk of C. difficile colitis and nosocomial pneumonia in non-indicated general ward patients and cause delirium in elderly patients."
      ],
      [
        "Administer oral sucralfate slurry 1 g four times daily before meals",
        "Sucralfate is cumbersome, binds co-administered medications preventing their absorption, and is not indicated for low-risk medical inpatients."
      ],
      [
        "Perform emergent upper endoscopy to screen for subclinical gastric mucosal erosions",
        "Screening endoscopy is an invasive, non-indicated procedure in an asymptomatic medical inpatient without gastrointestinal bleeding."
      ]
    ],
    "shortestValidSolution": "General medical floor patient with pneumonia (not in ICU, not mechanically ventilated, no coagulopathy) -> withhold stress ulcer prophylaxis (PPIs increase C. diff and pneumonia risks).",
    "necessaryInference": "Apply ASHP guidelines: stress ulcer prophylaxis is indicated exclusively for ICU patients with mechanical ventilation > 48 hr or coagulopathy; routine prophylaxis on general wards is inappropriate and increases C. diff and pneumonia.",
    "strongestDistractor": "Initiate daily intravenous pantoprazole 40 mg because all hospitalized patients require gastroprotection",
    "distractorExclusion": "Universal prophylaxis is an obsolete myth; general ward patients without specific indications experience increased C. diff and nosocomial pneumonia from routine acid suppression.",
    "citation": "Ye Z, et al. Gastrointestinal Bleeding Prophylaxis for Critically Ill Patients: A Clinical Practice Guideline. BMJ. 2020;368:l6722. PMID: 31907165.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ASHP guidelines: stress ulcer prophylaxis is indicated exclusively for ICU patients with mechanical ventilation > 48 hr or coagulopathy; routine prophylaxis on general wards is inappropriate and increases C. diff and pneumonia.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate daily intravenous pantoprazole 40 mg because all hospitalized patients ' excluded: Universal prophylaxis is an obsolete myth; general ward patients without specific indications experience increased C. diff and nosocomial pneumonia from routine acid suppression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0339",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Hepatorenal Syndrome (HRS-AKI)",
    "subtopic": "Albumin Volume Challenge Criteria and Vasoconstrictor Therapy (Terlipressin / Norepinephrine)",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with decompensated cirrhosis secondary to chronic hepatitis C and tense ascites is hospitalized for management of increasing abdominal distension. He was taking home furosemide 40 mg and spironolactone 100 mg daily, which were discontinued upon admission when his serum creatinine was noted to be elevated. Over the first 48 hours of admission, he received intravenous 20% albumin at a dose of 1 g/kg/day (total 80 g/day) with complete cessation of all diuretics and nephrotoxic medications. Despite 48 hours of albumin expansion and volume optimization, his serum creatinine has risen progressively from 1.3 to 2.8 mg/dL. He produces 15 mL/hr of urine. Physical examination reveals blood pressure 98/58 mm Hg, heart rate 84/min, marked ascites with shifting dullness, and caput medusae, with clear lungs and no peripheral edema. Laboratory evaluation reveals: - Serum sodium: 128 mEq/L - Serum creatinine: 2.8 mg/dL - Urine sodium: 8 mEq/L (intense renal sodium retention) - Urinalysis: normal specific gravity, negative for protein and blood, with completely normal microscopic sediment (no cellular casts or dysmorphic red blood cells). Renal ultrasound demonstrates normal kidney size and echogenicity without hydronephrosis or renal vein thrombosis. Which of the following is the most appropriate definitive pharmacologic therapy for this patient's acute kidney injury?",
    "choices": [
      [
        "Continuous intravenous terlipressin (or norepinephrine) combined with intravenous albumin",
        "The patient has Hepatorenal Syndrome-Acute Kidney Injury (HRS-AKI), a functional renal failure occurring in patients with advanced cirrhosis and portal hypertension. Pathophysiologically, severe portal hypertension drives massive nitric oxide-mediated splanchnic arterial vasodilation. Splanchnic blood pooling drastically decreases effective circulating arterial volume, triggering compensatory hyperactivation of the renin-angiotensin-aldosterone system, sympathetic nervous system, and vasopressin, causing intense renal vasoconstriction and renal hypoperfusion. THE INTERNATIONAL CLUB OF ASCITES (ICA) DIAGNOSTIC CRITERIA FOR HRS-AKI: (1) Diagnosis of cirrhosis with ascites; (2) AKI based on KDIGO criteria; (3) NO RESPONSE AFTER AT LEAST 48 HOURS OF DIURETIC WITHDRAWAL AND INTRAVENOUS ALBUMIN VOLUME EXPANSION (1 g/kg/day up to 100 g/day); (4) Absence of shock; and (5) Absence of nephrotoxic drugs, proteinuria (> 500 mg/day), microhematuria, or abnormal renal ultrasound. FIRST-LINE PHARMACOTHERAPY: Intravenous VASOCONSTRICTOR THERAPY combined with INTRAVENOUS ALBUMIN. TERLIPRESSIN (a selective vasopressin V1a receptor agonist proven superior in the CONFIRM trial) or, in the ICU, intravenous NOREPINEPHRINE infusion, constricts the dilated splanchnic arterial bed, restoring systemic vascular resistance and effective arterial volume, which relieves renal vasoconstriction and reverses AKI, serving as a critical bridge to liver transplantation."
      ],
      [
        "Administer high-dose intravenous furosemide 160 mg bolus to force renal tubular urine output",
        "Administering loop diuretics in HRS-AKI worsens intravascular hypovolemia, intensifies renal vasoconstriction, and accelerates anuric renal death; diuretics are strictly contraindicated."
      ],
      [
        "Administer high-volume intravenous 0.9% normal saline at 250 mL/hr",
        "Normal saline lacks oncotic pressure and extravasates into the peritoneal cavity, rapidly worsening tense ascites and peripheral edema without improving effective arterial blood volume."
      ],
      [
        "Perform emergency bilateral renal artery stenting under fluoroscopic guidance",
        "Renal arteries are structurally normal; vasoconstriction is neurohumoral and functional, not atherosclerotic stenosis, and stenting provides zero therapeutic benefit."
      ],
      [
        "Initiate oral midodrine and octreotide monotherapy without intravenous albumin",
        "Midodrine plus octreotide is a vastly inferior second-line regimen (shown to be inferior to terlipressin in randomized trials) and must NEVER be given without intravenous albumin."
      ]
    ],
    "shortestValidSolution": "Cirrhotic with ascites + AKI failing 48 hr albumin challenge + normal urine sediment (urine Na 8) -> Hepatorenal syndrome (HRS-AKI) -> IV terlipressin (or norepinephrine) + IV albumin.",
    "necessaryInference": "Diagnose Hepatorenal Syndrome based on failure to respond to 48 hours of diuretic withdrawal and albumin expansion, selecting splanchnic vasoconstrictors (terlipressin/norepinephrine) plus albumin as the evidence-based first-line therapy.",
    "strongestDistractor": "Administer high-dose intravenous furosemide 160 mg bolus to force renal tubular urine output",
    "distractorExclusion": "Diuretics further deplete effective arterial circulating volume in hepatorenal syndrome, accelerating ischemic renal tubular necrosis and death.",
    "citation": "Wong F, et al. Terlipressin plus Albumin for the Treatment of Type 1 Hepatorenal Syndrome (CONFIRM Trial). N Engl J Med. 2021;384(9):818-827. PMID: 33657294.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose Hepatorenal Syndrome based on failure to respond to 48 hours of diuretic withdrawal and albumin expansion, selecting splanchnic vasoconstrictors (terlipressin/norepinephrine) plus albumin as the evidence-based first-line therapy.",
      "distractorExclusionNotes": "Strongest distractor 'Administer high-dose intravenous furosemide 160 mg bolus to force renal tubular ' excluded: Diuretics further deplete effective arterial circulating volume in hepatorenal syndrome, accelerating ischemic renal tubular necrosis and death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0340",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Spontaneous Bacterial Peritonitis (SBP)",
    "subtopic": "Diagnostic Paracentesis (PMN >= 250) and Intravenous Albumin to Prevent Hepatorenal Syndrome",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man with decompensated alcoholic cirrhosis and chronic ascites is admitted to the hospital with low-grade fever, diffuse abdominal discomfort, and mild confusion for 24 hours. On physical examination, he appears lethargic with scleral icterus. Vital signs are: temperature 38.3\u00b0C (101.0\u00b0F), blood pressure 102/62 mm Hg, heart rate 96/min, and respiratory rate 18/min. Abdominal examination demonstrates marked abdominal distension with shifting dullness and diffuse mild tenderness to palpation without muscular rigidity or rebound. Flapping tremor (asterixis) is present. An immediate diagnostic paracentesis is performed before initiating any antimicrobials, yielding cloudy yellow fluid. Ascitic fluid analysis reveals: - Total nucleated cell count: 1,420/mm3 - Neutrophils (polymorphonuclear leukocytes [PMNs]): 78% (absolute PMN count: 1,107 cells/mm3; diagnostic cutoff: >= 250 cells/mm3) - Total protein: 0.8 g/dL - Albumin: 0.3 g/dL (Serum-Ascites Albumin Gradient [SAAG]: 2.8 g/dL, consistent with portal hypertension) - Ascitic fluid lactate dehydrogenase and glucose are consistent with spontaneous rather than secondary bacterial peritonitis. Blood cultures and ascitic fluid cultures in blood culture bottles are sent. Laboratory testing reveals: serum creatinine 1.7 mg/dL (baseline was 0.9 mg/dL 1 month ago) and total bilirubin 4.2 mg/dL. Which of the following represents the most appropriate initial medical therapy for this patient?",
    "choices": [
      [
        "Intravenous third-generation cephalosporin (cefotaxime or ceftriaxone) combined with intravenous 20% albumin (1.5 g/kg on day 1, followed by 1.0 g/kg on day 3)",
        "The patient has Spontaneous Bacterial Peritonitis (SBP), confirmed by an ascitic fluid absolute polymorphonuclear leukocyte (PMN) count >= 250 cells/mm3 in a patient with cirrhotic ascites. SBP occurs via bacterial translocation of enteric flora (Escherichia coli, Klebsiella pneumoniae, enterococci) across the permeable intestinal wall into ascitic fluid. STANDARD ANTIMICROBIAL REGIMEN: An intravenous third-generation cephalosporin (CEFOTAXIME 2 g IV every 8 hours or CEFTRIAXONE 1\u20132 g IV daily) provides excellent bactericidal penetration into ascitic fluid. CRITICAL MORTALITY-REDUCING INTERVENTION: INTRAVENOUS ALBUMIN ADMINISTRATION. In landmark randomized trials (Sort et al., NEJM), administering intravenous albumin (1.5 g/kg body weight within 6 hours of diagnosis, followed by 1.0 g/kg on day 3) in patients with SBP and renal impairment (serum creatinine >= 1.0 mg/dL, BUN >= 30 mg/dL, or bilirubin >= 4.0 mg/dL) SIGNIFICANTLY REDUCED THE INCIDENCE OF HEPATORENAL SYNDROME FROM 33% TO 10% AND REDUCED IN-HOSPITAL MORTALITY FROM 29% TO 10%. Albumin maintains intravascular oncotic pressure, counteracts splanchnic vasodilation, and prevents renal hypoperfusion."
      ],
      [
        "Intravenous ceftriaxone monotherapy without albumin, reserving albumin strictly for documented shock",
        "Withholding albumin in SBP patients with creatinine >= 1.0 mg/dL or bilirubin >= 4.0 mg/dL significantly increases the incidence of fatal hepatorenal syndrome and triples in-hospital mortality (Sort trial)."
      ],
      [
        "Oral ciprofloxacin 500 mg twice daily as sole outpatient-equivalent antimicrobial therapy",
        "Oral fluoroquinolones are used for secondary PROPHYLAXIS after an episode of SBP; in acute active SBP with encephalopathy and acute kidney injury, intravenous broad-spectrum bactericidal therapy is mandatory."
      ],
      [
        "Immediate surgical exploratory laparotomy with abdominal cavity open washout",
        "Exploratory laparotomy in spontaneous bacterial peritonitis carries a prohibitive operative mortality (> 50\u201380%); surgery is indicated strictly for secondary bacterial peritonitis (free bowel perforation)."
      ],
      [
        "Perform repeated large-volume paracentesis of 5 liters daily until ascites is completely drained",
        "Large-volume paracentesis during an acute active peritoneal infection is unnecessary and causes circulatory dysfunction and protein depletion; medical antibiotic and albumin therapy is curative."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + ascitic PMN 1,107 (>= 250) + Cr 1.7 -> Spontaneous Bacterial Peritonitis (SBP) -> IV cefotaxime/ceftriaxone + IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) to prevent hepatorenal syndrome and death.",
    "necessaryInference": "Diagnose SBP by ascitic fluid PMN count >= 250/mm3, initiate third-generation cephalosporins, and administer IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) based on proven trial evidence reducing hepatorenal syndrome and mortality.",
    "strongestDistractor": "Intravenous ceftriaxone monotherapy without albumin, reserving albumin strictly for documented shock",
    "distractorExclusion": "The landmark Sort NEJM trial demonstrated that IV albumin reduces hepatorenal syndrome and mortality by > 60% in SBP with creatinine >= 1.0 or bilirubin >= 4.0.",
    "citation": "Abraldes JG, et al. American Association for the Study of Liver Diseases. AASLD Practice Guidance on the Management of Adult Patients With Ascites Due to Cirrhosis. Hepatology. 2021;74(2):1014-1048. PMID: 34184784.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose SBP by ascitic fluid PMN count >= 250/mm3, initiate third-generation cephalosporins, and administer IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) based on proven trial evidence reducing hepatorenal syndrome and mortality.",
      "distractorExclusionNotes": "Strongest distractor 'Intravenous ceftriaxone monotherapy without albumin, reserving albumin strictly ' excluded: The landmark Sort NEJM trial demonstrated that IV albumin reduces hepatorenal syndrome and mortality by > 60% in SBP with creatinine >= 1.0 or bilirubin >= 4.0.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0341",
    "exam": "Step 3",
    "subject": "Microbiology",
    "system": "Renal",
    "topic": "Catheter-Associated Urinary Tract Infection (CAUTI)",
    "subtopic": "Catheter Removal vs Harm of Treating Asymptomatic Bacteriuria",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman is hospitalized on the general medical unit on day 6 following an acute ischemic stroke. She has an indwelling Foley catheter that was placed in the emergency department on admission. The nursing staff sent a routine 'screening' urinalysis and urine culture this morning without a physician order. The patient is completely afebrile (temperature 36.8\u00b0C [98.2\u00b0F]), comfortable, and communicates normally. She has no dysuria, suprapubic pain, costovertebral angle tenderness, or altered mental status. Vital signs are normal. Urinalysis demonstrates: - Color: cloudy - Leukocyte esterase: positive - White blood cells: 30\u201340 per high-power field - Bacteria: many. Urine culture returns growing > 100,000 colony-forming units/mL of multidrug-resistant Klebsiella pneumoniae sensitive only to meropenem and colistin. Complete blood count reveals a normal leukocyte count of 6,800/mm3. A junior resident prepares an order to initiate intravenous meropenem 1 g every 8 hours and leave the Foley catheter in place. According to IDSA and CDC guidelines, which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Remove the indwelling urinary catheter immediately, withhold all antimicrobial therapy, and monitor for the development of clinical symptoms",
        "The patient has Asymptomatic Bacteriuria (ASB) in the setting of an indwelling urinary catheter. Pyuria (WBCs in urine) and bacteriuria are ubiquitous in catheterized patients, developing in virtually 100% of patients within 3 to 4 weeks of catheterization as a consequence of intraluminal and extraluminal bacterial biofilm formation. According to the Infectious Diseases Society of America (IDSA) guidelines and Choosing Wisely recommendations: (1) ASYMPTOMATIC BACTERIURIA MUST NOT BE SCREENED FOR OR TREATED WITH ANTIMICROBIALS IN CATHETERIZED PATIENTS. Treatment with antibiotics does not prevent symptomatic Catheter-Associated Urinary Tract Infection (CAUTI), does not improve mortality, and directly drives the emergence of highly resistant 'superbugs' (e.g., carbapenem-resistant Enterobacteriaceae) and Clostridioides difficile colitis. (The ONLY two proven indications to treat asymptomatic bacteriuria are: PREGNANCY and PATIENTS UNDERGOING INVASIVE UROLOGICAL PROCEDURES WITH MUCOSAL TRAUMA). (2) INFECTION PREVENTION: THE SINGLE MOST EFFECTIVE MEASURE IS IMMEDIATE REMOVAL OF THE FOLEY CATHETER, which eliminates the nidus for infection and reduces CAUTI risk by > 50%."
      ],
      [
        "Initiate intravenous meropenem 1 g every 8 hours for 14 days and change the catheter over a guidewire",
        "Administering broad-spectrum carbapenems for asymptomatic bacteriuria is a major diagnostic error that selects for pan-drug-resistant pathogens without clinical benefit."
      ],
      [
        "Administer continuous bladder irrigation with amphotericin B and neomycin solutions",
        "Continuous antimicrobial bladder irrigation induces chemical cystitis, mucosal ulceration, and selects for resistant microbial biofilms; it is strictly contraindicated."
      ],
      [
        "Switch the latex Foley catheter to a silver-coated antimicrobial Foley catheter and continue meropenem",
        "Antimicrobial-coated catheters have not demonstrated clinical reduction in symptomatic CAUTI or bacteremia in large trials, and do not justify treating asymptomatic colonization."
      ],
      [
        "Administer oral nitrofurantoin 100 mg twice daily for 7 days as narrow-spectrum suppressive therapy",
        "Nitrofurantoin has poor tissue penetration and treats superficial cystitis; using it for asymptomatic colonization drives resistance without altering clinical outcomes."
      ]
    ],
    "shortestValidSolution": "Asymptomatic catheterized patient + cloudy urine with > 100k Klebsiella (no fever/symptoms) -> Asymptomatic Bacteriuria -> remove Foley catheter immediately, WITHHOLD antibiotics (treatment causes C. diff and superbug resistance).",
    "necessaryInference": "Apply IDSA guidelines on Asymptomatic Bacteriuria: never treat asymptomatic bacteriuria in catheterized patients (treatment is reserved strictly for pregnancy or urologic surgery), and remove the catheter to eliminate the biofilm.",
    "strongestDistractor": "Initiate intravenous meropenem 1 g every 8 hours for 14 days and change the catheter over a guidewire",
    "distractorExclusion": "Treating asymptomatic catheter colonization with broad-spectrum carbapenems breeds pan-drug-resistant pathogens and C. diff colitis without clinical benefit.",
    "citation": "Nicolle LE, et al. Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2019;68(10):e83-e110. PMID: 30895288.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply IDSA guidelines on Asymptomatic Bacteriuria: never treat asymptomatic bacteriuria in catheterized patients (treatment is reserved strictly for pregnancy or urologic surgery), and remove the catheter to eliminate the biofilm.",
      "distractorExclusionNotes": "Strongest distractor 'Initiate intravenous meropenem 1 g every 8 hours for 14 days and change the cath' excluded: Treating asymptomatic catheter colonization with broad-spectrum carbapenems breeds pan-drug-resistant pathogens and C. diff colitis without clinical benefit.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0342",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Pancreatitis Fluid Resuscitation",
    "subtopic": "Moderately Aggressive Lactated Ringer vs Dangers of Overhydration (WATERFALL Trial)",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man presents to the emergency department with a 12-hour history of severe, constant, boring epigastric pain that radiates directly through to his back, accompanied by nausea and three episodes of non-bilious emesis. He drinks 4 to 6 beers daily. On physical examination, he appears uncomfortable and lies on his side with his knees drawn to his chest. Vital signs are: blood pressure 132/80 mm Hg, heart rate 94/min, respiratory rate 18/min, and temperature 37.4\u00b0C (99.3\u00b0F). Physical examination reveals marked epigastric tenderness to deep palpation with voluntary guarding, but no peritoneal rigidity or rebound. The lungs are clear to auscultation bilaterally. Laboratory evaluation reveals: - Serum lipase: 2,450 U/L (normal: 10\u2013140 U/L) - Serum amylase: 890 U/L - Hematocrit: 44% - Blood urea nitrogen (BUN): 18 mg/dL - Serum creatinine: 0.9 mg/dL. Abdominal ultrasound reveals a normal biliary tree without gallstones or ductal dilation. An emergency medicine intern proposes an aggressive resuscitation protocol consisting of an immediate 20 mL/kg bolus of normal saline (1,600 mL) followed by continuous infusion at 300 mL/hr (totaling > 7 to 8 liters in the first 24 hours). According to the updated international guidelines and the landmark WATERFALL randomized controlled trial, which of the following represents the most appropriate initial fluid resuscitation strategy for this patient?",
    "choices": [
      [
        "Administer a moderate, goal-directed fluid protocol using lactated Ringer solution (e.g., 10 mL/kg bolus only if hypovolemic, followed by 1.5 to 2.0 mL/kg/hr), with regular clinical reassessment every 4 to 6 hours to prevent fluid overload",
        "The patient has acute alcoholic pancreatitis (severe epigastric pain radiating to back with serum lipase > 3x ULN). Historically, aggressive large-volume fluid resuscitation (> 5\u20138 L/day) was widely advocated based on the theory that microvascular pancreatic ischemia could be reversed by massive hydration. However, the landmark WATERFALL (Weight-Based Algorithm for Treatment of Acute Pancreatitis Fluid Resuscitation) randomized clinical trial published in the New England Journal of Medicine radically transformed modern management: (1) AGGRESSIVE RESUSCITATION (20 mL/kg bolus followed by 3 mL/kg/hr) DID NOT REDUCE PANCREATIC COMPLICATIONS OR ORGAN FAILURE, BUT SIGNIFICANTLY INCREASED FLUID OVERLOAD (cardiac failure, pulmonary edema, respiratory failure) BY OVER THREE-FOLD (20.5% vs 6.3%) compared to moderate resuscitation. (2) MODERATE FLUID RESUSCITATION (e.g., 10 mL/kg bolus if dehydrated followed by 1.5\u20132.0 mL/kg/hr of LACTATED RINGER solution) IS THE EVIDENCE-BASED STANDARD OF CARE. (3) FLUID SELECTION: LACTATED RINGER IS SUPERIOR TO NORMAL SALINE because normal saline causes hyperchloremic metabolic acidosis and triggers acinar cell enzyme activation. Fluid rates must be titrated every 4\u20136 hours based on clinical parameters (hematocrit, BUN, urine output)."
      ],
      [
        "Aggressive fluid resuscitation with normal saline bolus of 20 mL/kg followed by 300 mL/hr targeting a central venous pressure > 15 mm Hg",
        "The WATERFALL trial proved that aggressive high-volume fluid resuscitation triples the incidence of fluid overload and respiratory failure without improving pancreatitis resolution."
      ],
      [
        "Complete fluid restriction to 500 mL daily to prevent pancreatic acinar enzyme secretion",
        "Fluid restriction in acute pancreatitis leads to hemoconcentration, mesenteric hypoperfusion, extensive necrotizing pancreatitis, and high mortality."
      ],
      [
        "Immediate initiation of continuous intravenous octreotide infusion to halt pancreatic exocrine secretion",
        "Octreotide has been tested extensively in randomized clinical trials and demonstrated zero therapeutic benefit in acute pancreatitis; it is not recommended."
      ],
      [
        "Administer prophylactic intravenous imipenem-cilastatin to all patients with acute pancreatitis",
        "Prophylactic antibiotics in acute pancreatitis do not reduce infected pancreatic necrosis or mortality and increase fungal and resistant superinfections; they are explicitly contraindicated in the absence of documented infection."
      ]
    ],
    "shortestValidSolution": "Acute pancreatitis fluid management -> Moderate fluid resuscitation with Lactated Ringer (1.5-2.0 mL/kg/hr) with frequent reassessment (WATERFALL trial: aggressive hydration triples fluid overload without benefit).",
    "necessaryInference": "Apply the landmark WATERFALL NEJM trial and modern pancreatitis guidelines: reject aggressive high-volume crystalloid loading (which triples fluid overload/respiratory failure), selecting moderate Lactated Ringer resuscitation.",
    "strongestDistractor": "Aggressive fluid resuscitation with normal saline bolus of 20 mL/kg followed by 300 mL/hr targeting a central venous pressure > 15 mm Hg",
    "distractorExclusion": "The landmark WATERFALL trial proved that aggressive hydration (bolus + 300 mL/hr) triples fluid overload and pulmonary complications without improving clinical outcomes.",
    "citation": "de-Madaria E, et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis (WATERFALL Trial). N Engl J Med. 2022;387(11):989-1000. PMID: 36103415.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the landmark WATERFALL NEJM trial and modern pancreatitis guidelines: reject aggressive high-volume crystalloid loading (which triples fluid overload/respiratory failure), selecting moderate Lactated Ringer resuscitation.",
      "distractorExclusionNotes": "Strongest distractor 'Aggressive fluid resuscitation with normal saline bolus of 20 mL/kg followed by ' excluded: The landmark WATERFALL trial proved that aggressive hydration (bolus + 300 mL/hr) triples fluid overload and pulmonary complications without improving clinical outcomes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0343",
    "exam": "Step 3",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Central Line-Associated Bloodstream Infection (CLABSI)",
    "subtopic": "Mandatory Catheter Removal for High-Virulence Pathogens (S. aureus, Candida, Pseudomonas)",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man who is hospitalized in the intensive care unit on day 10 following an open repair of an abdominal aortic aneurysm develops a new fever of 39.1\u00b0C (102.4\u00b0F) and chills. He has a right internal jugular central venous catheter that was placed on admission for hemodynamic monitoring and vasopressor infusions (which were discontinued 4 days ago). On physical examination, the catheter insertion site is mildly erythematous without gross purulent drainage. Vital signs are: blood pressure 118/74 mm Hg, heart rate 104/min, and respiratory rate 18/min. Two sets of blood cultures (one drawn from the central line and one from a peripheral venipuncture) are obtained. Twenty-four hours later, both blood culture bottles turn positive for yeast growing Candida albicans. The surgical resident suggests keeping the central venous catheter in place and treating the infection with an oral fluconazole catheter lock solution to salvage the central venous access. According to the Infectious Diseases Society of America (IDSA) guidelines for intravascular catheter-related infections, which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Remove the central venous catheter immediately, initiate intravenous echinocandin therapy (caspofungin, micafungin, or anidulafungin), obtain daily follow-up blood cultures until clearance, and perform an ophthalmologic dilated funduscopic examination",
        "The patient has a Central Line-Associated Bloodstream Infection (CLABSI) caused by Candida albicans (candidemia). According to IDSA clinical practice guidelines for the management of intravascular catheter-related infections and candidemia: (1) MANDATORY PROMPT CATHETER REMOVAL: In patients with CLABSI caused by high-virulence or biofilm-forming pathogens\u2014specifically CANDIDA SPECIES, STAPHYLOCOCCUS AUREUS, PSEUDOMONAS AERUGINOSA, ENTEROCOCCI, OR MULTIDRUG-RESISTANT GRAM-NEGATIVE BACILLI\u2014THE CENTRAL CATHETER MUST BE REMOVED IMMEDIATELY. Attempting to salvage the catheter with antibiotic locks or systemic therapy leads to persistent bacteremia/fungemia, metastatic seeding (endocarditis, osteomyelitis, endophthalmitis), and significantly increased mortality. (2) FIRST-LINE SYSTEMIC ANTIFUNGAL: An intravenous ECHINOCANDIN (caspofungin, micafungin, or anidulafungin) is the preferred initial therapy for candidemia in hospitalized and critically ill patients. (3) DILATED OPHTHALMOLOGIC EXAMINATION: Candida exhibits a strong predilection for hematogenous dissemination to the retina; a dilated funduscopic examination must be performed within 7 days of diagnosis in all candidemic patients to rule out Candida endophthalmitis. (4) SURVEILLANCE CULTURES: Daily repeat blood cultures must be drawn until documented clearance to establish the start of the minimum 14-day treatment duration."
      ],
      [
        "Maintain the central venous catheter in place and administer intravenous fluconazole 400 mg daily",
        "Attempting to treat Candida CLABSI while leaving the colonized catheter in place carries high rates of persistent fungemia, fungal endocarditis, and treatment failure; catheter removal is mandatory."
      ],
      [
        "Exchange the existing central catheter over a guidewire at the same anatomical insertion site",
        "Guidewire exchange drags fungal and bacterial biofilms directly from the old line into the fresh catheter tract, perpetuating systemic candidemia and tissue infection."
      ],
      [
        "Administer oral nystatin swish-and-swallow suspension for 14 days",
        "Nystatin is a non-absorbable topical polyene used strictly for oral thrush; it has zero systemic absorption and does not treat bloodstream fungemia."
      ],
      [
        "Withhold antifungal therapy and repeat blood cultures in 48 hours to confirm that the Candida is not a laboratory contaminant",
        "Candida in a blood culture is NEVER a contaminant; dismissing candidemia as a contaminant results in disseminated fungal abscesses and fatal fungal shock."
      ]
    ],
    "shortestValidSolution": "Central line infection growing Candida albicans -> remove catheter immediately + IV echinocandin (caspofungin/micafungin) + dilated eye exam (Candida endophthalmitis).",
    "necessaryInference": "Apply IDSA catheter infection guidelines: Candida CLABSI mandates immediate catheter removal (cannot be salvaged), initial echinocandin therapy, surveillance blood cultures, and a dilated ophthalmologic exam to rule out endophthalmitis.",
    "strongestDistractor": "Maintain the central venous catheter in place and administer intravenous fluconazole 400 mg daily",
    "distractorExclusion": "Candida forms dense fungal biofilms on catheter surfaces that cannot be sterilized medically; retaining the line causes persistent fungemia, metastatic seeding, and death.",
    "citation": "Pappas PG, et al. Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2016;62(4):e1-e50. PMID: 26679628.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply IDSA catheter infection guidelines: Candida CLABSI mandates immediate catheter removal (cannot be salvaged), initial echinocandin therapy, surveillance blood cultures, and a dilated ophthalmologic exam to rule out endophthalmitis.",
      "distractorExclusionNotes": "Strongest distractor 'Maintain the central venous catheter in place and administer intravenous flucona' excluded: Candida forms dense fungal biofilms on catheter surfaces that cannot be sterilized medically; retaining the line causes persistent fungemia, metastatic seeding, and death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0344",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Post-Extubation Stridor and Laryngeal Edema",
    "subtopic": "Cuff Leak Test, Nebulized Racemic Epinephrine, and Re-Intubation Indications",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman is extubated in the intensive care unit after 6 days of mechanical ventilation for severe acute hypoxemic respiratory failure secondary to bacterial pneumonia. Her pneumonia has resolved, and she passed a 60-minute spontaneous breathing trial with flying colors. A cuff leak test performed prior to extubation revealed a leak volume of only 50 mL (< 10% of tidal volume; normal: > 110 mL or > 24% of tidal volume), suggesting laryngeal edema. Within 15 minutes following endotracheal tube removal, the patient develops a harsh, high-pitched inspiratory sound audible without a stethoscope (post-extubation stridor), tachypnea (respiratory rate 32/min), and intercostal retractions. On physical examination, she appears anxious and hoarse. Vital signs are: blood pressure 152/92 mm Hg, heart rate 124/min, and oxygen saturation 93% on 4 L/min nasal cannula. Auscultation confirms prominent inspiratory stridor loudest over the anterior trachea, with clear vesicular breath sounds over the lower lung bases. Which of the following represents the most appropriate immediate medical intervention to relieve her upper airway obstruction?",
    "choices": [
      [
        "Administer inhaled nebulized racemic epinephrine and intravenous dexamethasone, while keeping immediate re-intubation equipment at the bedside",
        "The patient has developed acute post-extubation stridor secondary to laryngeal edema (glottic and subglottic mucosal edema caused by mechanical pressure and irritation from the translaryngeal endotracheal tube). Risk factors include prolonged mechanical ventilation (> 36\u201348 hr), female sex, and a low pre-extubation cuff leak (< 110 mL or < 10\u201324% of tidal volume). Acute post-extubation stridor signals critical upper airway narrowing that can rapidly progress to complete asphyxiation. THE EVIDENCE-BASED IMMEDIATE MEDICAL MANAGEMENT INCLUDES: (1) NEBULIZED RACEMIC EPINEPHRINE (or L-epinephrine): Epinephrine stimulates alpha-1 adrenergic receptors on mucosal arterioles, causing rapid local vasoconstriction, reducing capillary permeability, and shrinking glottic mucosal edema within 10 to 30 minutes; (2) INTRAVENOUS CORTICOSTEROIDS (dexamethasone or methylprednisolone) to reduce delayed and ongoing inflammatory swelling; and (3) AIRWAY READINESS: Prepare for immediate emergent re-intubation (with a smaller endotracheal tube and video laryngoscopy) if the patient develops severe respiratory distress, somnolence, exhaustion, or worsening hypoxemia refractory to nebulized epinephrine."
      ],
      [
        "Administer continuous nebulized albuterol every 15 minutes to dilate the extrathoracic trachea",
        "Albuterol is a selective beta-2 agonist that relaxes lower airway bronchial smooth muscle; it has zero alpha-1 vasoconstrictive activity and is completely ineffective for upper airway glottic mucosal edema."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus to reduce systemic laryngeal edema",
        "Diuretics deplete intravascular fluid but have no immediate effect on localized inflammatory mucosal edema caused by tube trauma, and cause hypovolemia and electrolyte depletion."
      ],
      [
        "Perform emergent open surgical cricothyroidotomy immediately without a trial of pharmacotherapy",
        "Surgical cricothyroidotomy is an emergency rescue procedure for 'cannot intubate, cannot oxygenate' crises; in a patient with SpO2 93% and stridor, nebulized epinephrine rapidly reverses edema in > 70% of cases."
      ],
      [
        "Place the patient on non-invasive positive pressure ventilation (BiPAP) with high inspiratory pressures",
        "BiPAP does not shrink mucosal swelling and can mask progressive glottic stenosis until acute complete airway arrest occurs; epinephrine is the specific pharmacotherapy."
      ]
    ],
    "shortestValidSolution": "Post-extubation stridor within 15 min + low cuff leak (< 110 mL) -> laryngeal edema -> nebulized racemic epinephrine + IV dexamethasone (prepare for re-intubation if in extremis).",
    "necessaryInference": "Diagnose post-extubation laryngeal edema (predicted by low cuff leak volume), and administer nebulized racemic epinephrine (alpha-1 mucosal vasoconstriction) and IV dexamethasone to reduce airway swelling.",
    "strongestDistractor": "Administer continuous nebulized albuterol every 15 minutes to dilate the extrathoracic trachea",
    "distractorExclusion": "Albuterol dilates lower bronchial smooth muscle; it has no alpha-1 vasoconstrictor action and is useless for mechanical glottic mucosal swelling.",
    "citation": "Kuriyama A, et al. Prophylactic Corticosteroids for Prevention of Postextubation Stridor and Reintubation in Adults: A Systematic Review and Meta-Analysis. Chest. 2017;151(5):1002-1010. PMID: 27916624.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose post-extubation laryngeal edema (predicted by low cuff leak volume), and administer nebulized racemic epinephrine (alpha-1 mucosal vasoconstriction) and IV dexamethasone to reduce airway swelling.",
      "distractorExclusionNotes": "Strongest distractor 'Administer continuous nebulized albuterol every 15 minutes to dilate the extrath' excluded: Albuterol dilates lower bronchial smooth muscle; it has no alpha-1 vasoconstrictor action and is useless for mechanical glottic mucosal swelling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0345",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Transitions of Care and Medication Reconciliation",
    "subtopic": "High-Risk Discharge Medication Discrepancies and Structured Pharmacist-Led Reconciliation",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man with a history of permanent atrial fibrillation, hypertension, heart failure with preserved ejection fraction, and stage 3a chronic kidney disease is being prepared for discharge after a 4-day hospitalization for acute non-severe diverticulitis. His outpatient home medications prior to admission were: apixaban 5 mg twice daily, metoprolol succinate 50 mg daily, and lisinopril 20 mg daily. During admission, his apixaban was held due to diagnostic colonoscopy and he was treated with intravenous ciprofloxacin and metronidazole. Today, the resident physician writes the hospital discharge summary and electronically transmits the discharge prescription orders. A clinical pharmacist reviewing the discharge reconciliation notes that the resident mistakenly prescribed: (1) Apixaban 5 mg twice daily, (2) Rivaroxaban 20 mg once daily with food (mistakenly added from an old hospital electronic template), and (3) Omission of his home metoprolol succinate. Which of the following represents the most appropriate patient safety action and the primary mechanism by which medication reconciliation reduces 30-day post-discharge adverse events?",
    "choices": [
      [
        "Perform a structured, multidisciplinary medication reconciliation intercepting the duplicate anticoagulant and restoring the omitted beta-blocker prior to discharge, as medication discrepancies at discharge are the leading cause of preventable post-hospitalization adverse drug events and readmissions",
        "Medication discrepancies and errors occurring at transitions of care\u2014particularly at hospital discharge\u2014represent one of the most critical threats to patient safety in healthcare. Studies demonstrate that > 50% of hospitalized patients have at least one medication discrepancy at discharge, with duplicate therapies and unintended omissions being the most frequent. In this patient, discharging him with DUPLICATE DIRECT ORAL ANTICOAGULANTS (concurrent apixaban AND rivaroxaban) creates an catastrophic, near-certain risk of fatal gastrointestinal or intracranial hemorrhage within days, while OMITTING HIS HOME BETA-BLOCKER (metoprolol succinate) risks rapid ventricular rate rebound, heart failure decompensation, and hospital readmission. THE JOINT COMMISSION (NPSG.03.06.01) AND PATIENT SAFETY STANDARDS MANDATE STRUCTURED MEDICATION RECONCILIATION AT EVERY CARE TRANSITION: comparing the patient's pre-admission medications, inpatient orders, and discharge prescriptions to identify and resolve omissions, duplications, dosing errors, and drug-drug interactions. Pharmacist-led discharge reconciliation and patient counseling has been conclusively proven in randomized health-services trials to significantly reduce preventable adverse drug events, emergency department visits, and 30-day hospital readmissions."
      ],
      [
        "Allow the discharge prescriptions to process and instruct the outpatient primary care physician to resolve medication duplications at the 4-week follow-up visit",
        "Allowing a patient to leave the hospital on dual full-dose direct oral anticoagulants will result in catastrophic, fatal hemorrhage within days before an outpatient visit."
      ],
      [
        "Instruct the patient to take both apixaban and rivaroxaban concurrently to ensure maximal stroke prevention in atrial fibrillation",
        "Combining two direct oral anticoagulants does not increase antithrombotic efficacy and causes massive, potentially fatal coagulopathic bleeding."
      ],
      [
        "Discontinue all anticoagulation permanently to eliminate any potential for medication confusion",
        "Stopping all anticoagulation leaves a high-risk atrial fibrillation patient completely unprotected against devastating ischemic thromboembolic stroke."
      ],
      [
        "Reconcile the orders by removing apixaban and continuing rivaroxaban without informing the patient or revising the written discharge instructions",
        "Changing anticoagulants without educating the patient leads to double-dosing if the patient resumes their home apixaban supply alongside the new rivaroxaban."
      ]
    ],
    "shortestValidSolution": "Discharge orders contain duplicate anticoagulants (apixaban + rivaroxaban) and omitted beta-blocker -> structured medication reconciliation prior to discharge resolves errors and prevents readmissions.",
    "necessaryInference": "Apply patient safety and Joint Commission transition-of-care standards: identify duplicate anticoagulation as a lethal transition error, and utilize structured pharmacist-led reconciliation to intercept discrepancies and reduce 30-day readmissions.",
    "strongestDistractor": "Allow the discharge prescriptions to process and instruct the outpatient primary care physician to resolve medication duplications at the 4-week follow-up visit",
    "distractorExclusion": "Delaying resolution of duplicate anticoagulants for weeks guarantees severe or fatal hemorrhage at home before the outpatient visit occurs.",
    "citation": "Kripalani S, et al. Deficits in Communication and Information Transfer Between Hospital-Based and Primary Care Physicians: Implications for Patient Safety and Continuity of Care. JAMA. 2007;297(8):831-841. PMID: 17327525.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply patient safety and Joint Commission transition-of-care standards: identify duplicate anticoagulation as a lethal transition error, and utilize structured pharmacist-led reconciliation to intercept discrepancies and reduce 30-day readmissions.",
      "distractorExclusionNotes": "Strongest distractor 'Allow the discharge prescriptions to process and instruct the outpatient primary' excluded: Delaying resolution of duplicate anticoagulants for weeks guarantees severe or fatal hemorrhage at home before the outpatient visit occurs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0346",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Post-Discharge Heart Failure Follow-up",
    "subtopic": "Early Outpatient Transition (Within 7-14 Days) and 30-Day Readmission Reduction",
    "provisionalDifficulty": 4,
    "stem": "A 67-year-old man with chronic heart failure with reduced ejection fraction (left ventricular ejection fraction 32%) is ready for discharge from the hospital following successful diuresis for an acute decompensation. His admission weight was 88 kg; his discharge dry weight is 82 kg. His vital signs are: blood pressure 114/70 mm Hg and heart rate 68/min. Cardiopulmonary examination confirms complete clinical decongestion: clear lungs, flat jugular veins, and no peripheral edema. Discharge medications are: sacubitril-valsartan 24/26 mg twice daily, carvedilol 12.5 mg twice daily, empagliflozin 10 mg daily, and oral furosemide 40 mg daily. Serum creatinine at discharge is 1.2 mg/dL and potassium is 4.4 mEq/L. The discharge planning nurse asks the attending hospitalist when the patient should be scheduled for his post-discharge outpatient cardiology or primary care follow-up visit. According to the AHA/ACC/HFSA Heart Failure Guidelines and national quality transition metrics, which of the following is the most appropriate timeframe for this patient's first outpatient follow-up visit?",
    "choices": [
      [
        "An in-person or structured telehealth follow-up visit within 7 to 14 days post-discharge",
        "Heart failure is the leading cause of 30-day hospital readmission in the Medicare population, with readmission rates historically exceeding 20% to 25%. The post-discharge 'vulnerable transition period' (the first 1 to 2 weeks following discharge) is characterized by high risks of hemodynamic relapse, electrolyte derangements (hypokalemia or hyperkalemia), worsening renal function from diuretics/RAS inhibitors, and medication non-adherence. According to AHA/ACC/HFSA guidelines and national quality measures: (1) EARLY OUTPATIENT FOLLOW-UP WITHIN 7 TO 14 DAYS (ideally within 7 days for high-risk patients) IS A CLASS 1 RECOMMENDATION. Clinical trials and large registry studies have conclusively demonstrated that an in-person or structured clinical follow-up within 7 to 14 days significantly reduces 30-day all-cause hospital readmission and decreases 1-year mortality. (2) ESSENTIAL COMPONENTS OF THE EARLY VISIT: assess volume status (dry weight tracking), review and up-titrate guideline-directed medical therapy (GDMT), check serum electrolytes and renal function, review red-flag symptoms, and reinforce dietary sodium and fluid restrictions."
      ],
      [
        "An outpatient clinic visit scheduled in 6 to 8 weeks after the patient has completed a month of physical rehabilitation",
        "Delaying the initial visit to 6\u20138 weeks misses the critical 30-day window where the vast majority of preventable decompensations, electrolyte disturbances, and readmissions occur."
      ],
      [
        "An outpatient visit scheduled in 6 months for routine annual echocardiographic reassessment",
        "Waiting 6 months for follow-up in a newly discharged heart failure patient is an extreme standard-of-care violation that leads to early readmission and death."
      ],
      [
        "No routine outpatient visit is needed unless the patient develops recurrent peripheral edema or orthopnea",
        "Passive patient-dependent follow-up ('call if you feel bad') is associated with high rates of emergency department visits and readmissions due to delayed recognition of subclinical congestion."
      ],
      [
        "Immediate readmission to a subacute skilled nursing facility for 60 days of continuous hemodynamic monitoring",
        "Patients who are fully decongested, independent, and clinically stable at home do not require institutional skilled nursing confinement; structured early outpatient care is standard."
      ]
    ],
    "shortestValidSolution": "Hospitalized heart failure patient discharged at dry weight -> early outpatient follow-up within 7 to 14 days (Class 1 guideline recommendation to reduce 30-day readmissions).",
    "necessaryInference": "Apply AHA/ACC/HFSA transition-of-care metrics: scheduling outpatient follow-up within 7 to 14 days post-discharge is a proven, evidence-based intervention that reduces 30-day readmissions and mortality.",
    "strongestDistractor": "An outpatient clinic visit scheduled in 6 to 8 weeks after the patient has completed a month of physical rehabilitation",
    "distractorExclusion": "The highest-risk period for recurrent congestion and medication failure is the first 1-2 weeks; 6-8 weeks is too late to prevent 30-day readmissions.",
    "citation": "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032. PMID: 35363499.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply AHA/ACC/HFSA transition-of-care metrics: scheduling outpatient follow-up within 7 to 14 days post-discharge is a proven, evidence-based intervention that reduces 30-day readmissions and mortality.",
      "distractorExclusionNotes": "Strongest distractor 'An outpatient clinic visit scheduled in 6 to 8 weeks after the patient has compl' excluded: The highest-risk period for recurrent congestion and medication failure is the first 1-2 weeks; 6-8 weeks is too late to prevent 30-day readmissions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0347",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Inpatient Opioid Selection in Renal Impairment",
    "subtopic": "Fentanyl/Hydromorphone Preferred vs Toxic Metabolite Accumulation with Morphine/Codeine",
    "provisionalDifficulty": 4,
    "stem": "An 72-year-old man with end-stage renal disease (ESRD) secondary to diabetic nephropathy on maintenance hemodialysis is admitted to the surgical inpatient unit following an open repair of an incarcerated inguinal hernia. He reports severe, sharp surgical site pain graded 8/10 on the visual analog scale. The surgical intern prepares a patient-controlled analgesia (PCA) order for intravenous morphine sulfate (1 mg demand dose every 6 minutes with a 4-hour limit of 30 mg). The hospital clinical pharmacist immediately calls the intern to intervene on the proposed PCA medication order. Which of the following provides the most accurate pharmacological rationale for avoiding morphine in this patient, and identifies the preferred alternative opioid?",
    "choices": [
      [
        "Morphine undergoes hepatic metabolism into active polar glucuronide metabolites (morphine-6-glucuronide and morphine-3-glucuronide) that are cleared exclusively by the kidneys and accumulate in renal failure, causing severe neurotoxicity and prolonged respiratory depression; fentanyl or hydromorphone is preferred",
        "Opioid selection in patients with acute kidney injury or chronic renal failure/dialysis requires rigorous understanding of opioid pharmacokinetics: (1) MORPHINE AND CODEINE ARE STRICTLY CONTRAINDICATED / AVOIDED IN SEVERE RENAL IMPAIRMENT: Morphine is metabolized in the liver to MORPHINE-6-GLUCURONIDE (M6G, a metabolite with potent mu-opioid analgesic and respiratory depressant activity, significantly more potent than morphine itself) and MORPHINE-3-GLUCURONIDE (M3G, a neurotoxic metabolite causing hyperalgesia, myoclonus, and seizures). BOTH METABOLITES DEPEND ENTIRELY ON RENAL EXCRETION. In renal failure or dialysis, M6G and M3G rapidly accumulate to toxic plasma levels within hours to days, causing profound, prolonged sedation, life-threatening respiratory arrest, and severe myoclonus that is poorly dialyzable. (Codeine is similarly metabolized to morphine and active metabolites). (2) PREFERRED OPIOIDS IN RENAL FAILURE: FENTANYL (and sufentanil) has no active renal metabolites, undergoes primarily hepatic CYP3A4 conversion to inactive norfentanyl, and does not depend on renal excretion, making it the SAFEST preferred opioid in renal failure. HYDROMORPHONE (Dilaudid) is also widely used with careful dose titration (its metabolite H3G can accumulate with prolonged high doses, but it lacks the potent active M6G sedative metabolite)."
      ],
      [
        "Morphine is directly nephrotoxic to the loop of Henle, causing irreversible acute tubular necrosis; codeine is the preferred alternative",
        "Morphine is not directly nephrotoxic; toxicity arises from systemic accumulation of active neurotoxic and respiratory depressant metabolites (M6G/M3G) due to lack of renal excretion."
      ],
      [
        "Morphine is completely eliminated unchanged by glomerular filtration without hepatic metabolism; meperidine is the preferred alternative",
        "Morphine is extensively metabolized in the liver; furthermore, meperidine is strictly contraindicated in renal failure because its metabolite normeperidine causes severe fatal seizures."
      ],
      [
        "Morphine induces profound renal artery vasoconstriction mediated by alpha-1 adrenergic agonism; oxycodone is the preferred alternative",
        "Morphine does not stimulate alpha-1 receptors; opioid complications in renal disease are driven by delayed clearance of central nervous system sedative metabolites."
      ],
      [
        "Morphine cannot cross the blood-brain barrier in patients with uremia, resulting in complete lack of analgesia; buprenorphine is mandatory",
        "Uremia increases blood-brain barrier permeability, facilitating massive entry of toxic M6G into the brainstem and exacerbating fatal respiratory depression."
      ]
    ],
    "shortestValidSolution": "Severe renal impairment/dialysis needing IV opioid -> avoid morphine/codeine (active M6G/M3G metabolites accumulate causing fatal narcosis/myoclonus) -> choose FENTANYL or hydromorphone.",
    "necessaryInference": "Recall opioid pharmacokinetics in renal failure: morphine and codeine form active glucuronide metabolites (M6G/M3G) that accumulate and cause lethal respiratory depression; fentanyl has no active renal metabolites and is preferred.",
    "strongestDistractor": "Morphine is directly nephrotoxic to the loop of Henle, causing irreversible acute tubular necrosis; codeine is the preferred alternative",
    "distractorExclusion": "Morphine does not cause ATN; the hazard is accumulation of its active metabolite morphine-6-glucuronide causing prolonged coma and respiratory arrest.",
    "citation": "Davison SN. Clinical Pharmacology Considerations in Pain Management in Patients with Advanced Kidney Disease. Clin J Am Soc Nephrol. 2019;14(6):917-931. PMID: 30975659.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recall opioid pharmacokinetics in renal failure: morphine and codeine form active glucuronide metabolites (M6G/M3G) that accumulate and cause lethal respiratory depression; fentanyl has no active renal metabolites and is preferred.",
      "distractorExclusionNotes": "Strongest distractor 'Morphine is directly nephrotoxic to the loop of Henle, causing irreversible acut' excluded: Morphine does not cause ATN; the hazard is accumulation of its active metabolite morphine-6-glucuronide causing prolonged coma and respiratory arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0348",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Tumor Lysis Syndrome (TLS)",
    "subtopic": "High-Risk Prophylaxis: Rasburicase Recombinant Urate Oxidase vs Allopurinol",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old man is admitted to the hematology-oncology service after being diagnosed with Burkitt lymphoma presenting with a massive retroperitoneal tumor burden (abdominal mass > 12 cm) and circulating blast count of 84,000/mm3. Systemic induction chemotherapy is scheduled to begin in 8 hours. Pre-treatment baseline laboratory evaluation reveals: - Serum uric acid: 11.4 mg/dL (normal: 3.5\u20137.2 mg/dL) - Serum potassium: 5.1 mEq/L - Serum phosphorus: 5.8 mg/dL (normal: 2.5\u20134.5 mg/dL) - Serum calcium: 8.4 mg/dL - Serum creatinine: 1.6 mg/dL (eGFR 52 mL/min/1.73 m2) - Blood urea nitrogen: 28 mg/dL - Serum lactate dehydrogenase (LDH): 3,850 U/L (markedly elevated). Pre-chemotherapy screening for glucose-6-phosphate dehydrogenase (G6PD) deficiency is negative. According to international expert consensus guidelines, which of the following is the most appropriate prophylactic and therapeutic regimen to initiate immediately prior to chemotherapy?",
    "choices": [
      [
        "Aggressive intravenous hydration with isotonic crystalloids (without urinary alkalinization) and immediate administration of intravenous rasburicase",
        "The patient is at extraordinarily HIGH RISK for Tumor Lysis Syndrome (TLS), defined by Cairo-Bishop criteria in a patient with Burkitt lymphoma (high proliferative rate, massive tumor lysis potential, LDH > 2x ULN) and pre-existing hyperuricemia and renal dysfunction. Rapid lysis of neoplastic cells dumps massive intracellular contents into the bloodstream: hyperuricemia, hyperkalemia, hyperphosphatemia, and secondary hypocalcemia. Uric acid crystals precipitate in acidic distal tubules and collecting ducts, causing acute obstructive nephropathy and renal failure. According to ASCO and international consensus guidelines: (1) AGGRESSIVE INTRAVENOUS ISOTONIC HYDRATION (2,000\u20133,000 mL/m2/day targeting a urine output > 100 mL/m2/hr) to maximize renal tubular flow and dilute solutes. CRITICAL UPDATE: URINARY ALKALINIZATION (WITH SODIUM BICARBONATE) IS NO LONGER RECOMMENDED because alkaline urine promotes calcium phosphate crystal precipitation in renal parenchyma and exacerbates severe hypocalcemic tetany. (2) PHARMACOTHERAPY FOR HIGH-RISK TLS: INTRAVENOUS RASBURICASE (a recombinant urate oxidase enzyme) IS THE DRUG OF CHOICE. Rasburicase enzymatically converts existing insoluble uric acid into ALLANTOIN, an inactive, highly water-soluble metabolite that is 5 to 10 times more soluble than uric acid and rapidly excreted in urine, plummeting serum uric acid to undetectable levels within 4 hours. (In contrast, allopurinol is a xanthine oxidase inhibitor that blocks NEW uric acid synthesis but has ZERO effect on pre-existing uric acid, making it inadequate for established high-risk TLS). (Note: G6PD screening was appropriately verified as negative; rasburicase is contraindicated in G6PD deficiency due to hydrogen peroxide-induced methemoglobinemia and hemolytic anemia)."
      ],
      [
        "Oral allopurinol 300 mg daily combined with intravenous sodium bicarbonate to achieve a urine pH > 7.5",
        "Allopurinol blocks new uric acid production but cannot break down the existing 11.4 mg/dL uric acid load, and urine alkalinization causes fatal calcium phosphate precipitation."
      ],
      [
        "Initiate intravenous furosemide 80 mg every 6 hours before administering intravenous crystalloids",
        "Diuretics before restoring intravascular volume cause severe dehydration and hemoconcentration, accelerating intratubular uric acid precipitation."
      ],
      [
        "Perform immediate emergent hemodialysis prior to starting any intravenous medical therapy",
        "Medical therapy with rasburicase and aggressive crystalloids rapidly clears uric acid and resolves AKI in the majority of patients; hemodialysis is reserved for refractory hyperkalemia or severe uremia."
      ],
      [
        "Administer continuous intravenous calcium gluconate infusion to normalize serum calcium",
        "Exogenous calcium infusion in the presence of severe hyperphosphatemia drastically increases the calcium-phosphate product, driving widespread metastatic calcification and renal destruction; calcium is given strictly for symptomatic hypocalcemia (tetany/arrhythmias)."
      ]
    ],
    "shortestValidSolution": "Burkitt lymphoma with bulky mass + uric acid 11.4 mg/dL + LDH 3,850 (high-risk TLS) -> aggressive IV hydration + IV rasburicase (converts uric acid to allantoin; avoid urine alkalinization).",
    "necessaryInference": "Apply international TLS guidelines: high-risk TLS requires rasburicase (cleaves existing uric acid into allantoin) rather than allopurinol (which only prevents new synthesis), and reject obsolete urinary alkalinization.",
    "strongestDistractor": "Oral allopurinol 300 mg daily combined with intravenous sodium bicarbonate to achieve a urine pH > 7.5",
    "distractorExclusion": "Allopurinol cannot degrade existing high uric acid stores, and bicarbonate alkalinization promotes dangerous intratubular calcium-phosphate precipitation and nephrocalcinosis.",
    "citation": "Cairo MS, et al. Recommendations for the Evaluation of Risk and Prophylaxis of Tumour Lysis Syndrome (TLS) in Adults and Children with Malignant Diseases: An Expert TLS Consensus Group. Br J Haematol. 2010;149(4):578-589. PMID: 20331465.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply international TLS guidelines: high-risk TLS requires rasburicase (cleaves existing uric acid into allantoin) rather than allopurinol (which only prevents new synthesis), and reject obsolete urinary alkalinization.",
      "distractorExclusionNotes": "Strongest distractor 'Oral allopurinol 300 mg daily combined with intravenous sodium bicarbonate to ac' excluded: Allopurinol cannot degrade existing high uric acid stores, and bicarbonate alkalinization promotes dangerous intratubular calcium-phosphate precipitation and nephrocalcinosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0349",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Refractory Hypokalemia and Hypomagnesemia",
    "subtopic": "Magnesium Regulation of ROMK Channels and Mandatory Magnesium Repletion",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman with a history of alcohol use disorder and hypertension is admitted to the general medical ward with acute-onset generalized weakness and muscle cramps. On admission, her serum potassium was 2.8 mEq/L. Over the past 24 hours, she has received a total of 120 mEq of oral potassium chloride and 40 mEq of intravenous potassium chloride via a peripheral line. Despite this aggressive potassium repletion, repeat morning serum chemistries reveal that her serum potassium remains virtually unchanged at 2.9 mEq/L. Physical examination reveals blood pressure 118/74 mm Hg, heart rate 78/min, and diffuse mild muscle weakness with hypoactive deep tendon reflexes (1+ bilaterally). She is taking no diuretics. Laboratory evaluation reveals: - Serum potassium: 2.9 mEq/L (refractory hypokalemia) - Serum magnesium: 1.1 mg/dL (normal: 1.7\u20132.2 mg/dL; severe hypomagnesemia) - Serum calcium: 8.8 mg/dL - Serum sodium: 139 mEq/L - Serum creatinine: 0.7 mg/dL - Urine potassium: 38 mEq/L (inappropriately elevated renal potassium wasting). Which of the following is the primary physiological mechanism explaining this patient's resistance to potassium repletion, and the necessary corrective action?",
    "choices": [
      [
        "Intracellular magnesium normally inhibits the renal outer medullary potassium (ROMK) channels; magnesium deficiency disinhibits ROMK channels, causing ongoing excessive renal potassium wasting that requires intravenous magnesium repletion before hypokalemia can be corrected",
        "The patient has refractory hypokalemia secondary to uncorrected hypomagnesemia. A FUNDAMENTAL RENAL PHYSIOLOGY PRINCIPLE IN HOSPITAL MEDICINE: HYPOKALEMIA CANNOT BE CORRECTED IN THE PRESENCE OF UNRESOLVED HYPOMAGNESEMIA. Intracellular magnesium ions (Mg2+) play a critical regulatory role in the cortical collecting duct: magnesium normally exerts an inhibitory blockade on the apical renal outer medullary potassium (ROMK) channels. When intracellular magnesium is depleted (common in alcohol use disorder, diarrhea, malnutrition, or diuretic use), THIS INHIBITORY BLOCKADE ON ROMK CHANNELS IS LOST. Uninhibited ROMK channels remain wide open, driving continuous, massive, unregulated potassium secretion from principal cells into the tubular lumen, which is excreted in the urine (elevated urine potassium > 20 mEq/L despite severe hypokalemia). Furthermore, magnesium is an essential cofactor for the basolateral Na+/K+-ATPase pump; magnesium deficiency impairs cellular potassium uptake. Consequently, any potassium administered is immediately excreted in the urine. THE MANDATORY CORRECTIVE ACTION IS INTRAVENOUS MAGNESIUM SULFATE REPLETION, which restores ROMK channel inhibition and allows serum potassium to normalize."
      ],
      [
        "Hypomagnesemia stimulates excessive anterior pituitary ACTH release, driving adrenal cortisol-mediated mineralocorticoid receptor activation",
        "Magnesium does not regulate the hypothalamic-pituitary-adrenal axis; renal potassium wasting is driven directly by uninhibited tubular ROMK channels."
      ],
      [
        "Hypomagnesemia shifts potassium rapidly into the intracellular space through activation of the hydrogen-potassium ATPase pump",
        "Magnesium deficiency causes urinary renal wasting of potassium into the urine, not intracellular shifting."
      ],
      [
        "Hypomagnesemia induces acute proximal tubular necrosis, preventing passive solvent-drag potassium reabsorption",
        "Renal tubular histology is intact; hypomagnesemia causes functional channel disinhibition in the distal collecting duct (ROMK), not proximal tubular necrosis."
      ],
      [
        "Hypomagnesemia directly binds and inactivates circulating parathyroid hormone, causing acute calcitriol resistance",
        "While hypomagnesemia causes functional hypoparathyroidism and hypocalcemia, the mechanism of refractory hypokalemia is disinhibition of apical ROMK channels."
      ]
    ],
    "shortestValidSolution": "Refractory hypokalemia failing 160 mEq of potassium + magnesium 1.1 mg/dL -> hypomagnesemia disinhibits ROMK channels causing urinary K+ wasting -> give IV magnesium to fix hypokalemia.",
    "necessaryInference": "Recall renal tubular potassium physiology: intracellular magnesium normally inhibits apical ROMK channels in collecting ducts; hypomagnesemia disinhibits ROMK, causing refractory renal potassium loss that responds only after magnesium is repleted.",
    "strongestDistractor": "Hypomagnesemia stimulates excessive anterior pituitary ACTH release, driving adrenal cortisol-mediated mineralocorticoid receptor activation",
    "distractorExclusion": "Potassium wasting in hypomagnesemia is a direct biophysical effect on renal tubular ROMK channels, not mediated by ACTH or cortisol.",
    "citation": "Huang CL, Kuo E. Mechanism of Hypokalemia in Magnesium Deficiency. J Am Soc Nephrol. 2007;18(10):2649-2652. PMID: 17804670.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recall renal tubular potassium physiology: intracellular magnesium normally inhibits apical ROMK channels in collecting ducts; hypomagnesemia disinhibits ROMK, causing refractory renal potassium loss that responds only after magnesium is repleted.",
      "distractorExclusionNotes": "Strongest distractor 'Hypomagnesemia stimulates excessive anterior pituitary ACTH release, driving adr' excluded: Potassium wasting in hypomagnesemia is a direct biophysical effect on renal tubular ROMK channels, not mediated by ACTH or cortisol.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0350",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "General Principles",
    "topic": "Post-Cardiac Arrest Inpatient Care",
    "subtopic": "Targeted Temperature Management (Fever Prevention) and Continuous EEG Monitoring",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man who experienced an out-of-hospital ventricular fibrillation cardiac arrest achieved return of spontaneous circulation (ROSC) after 16 minutes of CPR and two defibrillations. Emergency coronary angiography revealed an acute occlusion of the left anterior descending artery, which was successfully revascularized with a drug-eluting stent. In the intensive care unit, the patient remains comatose, opening his eyes only to noxious stimuli, with bilateral reactive pupils and a Glasgow Coma Scale score of 4. Vital signs are: blood pressure 118/74 mm Hg on low-dose norepinephrine, heart rate 78/min, and core body temperature 37.4\u00b0C (99.3\u00b0F). According to current American Heart Association (AHA) and Neurocritical Care Society (NCS) guidelines for post-cardiac arrest neuroprotection, which of the following represents the most appropriate inpatient management bundle for this comatose post-cardiac arrest patient?",
    "choices": [
      [
        "Maintain active targeted temperature management (preventing fever and maintaining temperature <= 37.5\u00b0C or active cooling to 33\u00b0C to 36\u00b0C) for at least 72 hours, maintain normoxia and normocapnia, and initiate continuous electroencephalography (cEEG) monitoring to detect non-convulsive status epilepticus",
        "The patient is a comatose adult survivor following resuscitation from out-of-hospital cardiac arrest. Post-cardiac arrest syndrome is characterized by anoxic-ischemic brain injury, myocardial dysfunction, and systemic ischemia-reperfusion response. According to updated AHA/ERC/NCS post-cardiac arrest guidelines: (1) TARGETED TEMPERATURE MANAGEMENT (TTM): Prevention of pyrexia (fever) is paramount; hyperthermia (> 37.7\u00b0C) triggers secondary neuronal apoptosis, microglial activation, and worsens neurological outcomes. Guidelines mandate active temperature control targeting either strict normothermia (maintaining core temperature <= 37.5\u00b0C using advanced cooling feedback devices) or therapeutic hypothermia (33\u00b0C\u201336\u00b0C) for at least 72 hours post-ROSC (TTM2 trial). (2) RESPIRATORY PARAMETERS: Maintain strict NORMOXIA (titrate FiO2 to keep SpO2 92\u201398% or PaO2 80\u2013100 mm Hg, avoiding both hypoxia and toxic hyperoxia) and NORMOCAPNIA (PaCO2 35\u201345 mm Hg; hypocapnia causes cerebral vasoconstriction, while hypercapnia raises intracranial pressure). (3) CONTINUOUS EEG (cEEG) MONITORING: Non-convulsive status epilepticus and electrographic seizures occur in 10% to 30% of comatose post-cardiac arrest patients and exacerbate metabolic brain damage; continuous EEG should be initiated promptly to diagnose and aggressively treat seizures."
      ],
      [
        "Induce deep hypothermia to 28\u00b0C using cold saline thoracic lavage for 7 days",
        "Deep hypothermia (< 32\u00b0C) causes intractable ventricular fibrillation, severe coagulopathy, pancreatitis, and immunosuppression, and is strictly contraindicated."
      ],
      [
        "Hyperventilate the patient targeting a PaCO2 < 25 mm Hg to eliminate cerebral edema",
        "Severe hypocapnia causes profound cerebral arterial vasoconstriction, dramatically reducing cerebral blood flow and inducing secondary ischemic brain infarction."
      ],
      [
        "Administer high-dose prophylactic phenytoin to all post-cardiac arrest patients without EEG monitoring",
        "Prophylactic antiepileptic drugs without documented clinical or electrographic seizures provide zero neuroprotection and carry significant hemodynamic and hepatic toxicities."
      ],
      [
        "Perform immediate neurological prognostication at 12 hours post-ROSC and advise withdrawal of life-sustaining therapy if the patient remains unresponsive",
        "Premature prognostication is a critical error; guidelines mandate that multimodal neuroprognostication must be delayed until at least 72 hours post-ROSC (and after rewarming/sedation washout)."
      ]
    ],
    "shortestValidSolution": "Comatose survivor of cardiac arrest -> Targeted Temperature Management (strict fever avoidance <= 37.5\u00b0C or 33-36\u00b0C) for >= 72 hr + normoxia/normocapnia + continuous EEG monitoring (detects non-convulsive seizures).",
    "necessaryInference": "Apply AHA/ERC post-cardiac arrest guidelines: maintain targeted temperature management (prevent fever <= 37.5\u00b0C or 33-36\u00b0C), avoid hyperoxia/hypocapnia, and use continuous EEG to detect non-convulsive status epilepticus.",
    "strongestDistractor": "Perform immediate neurological prognostication at 12 hours post-ROSC and advise withdrawal of life-sustaining therapy if the patient remains unresponsive",
    "distractorExclusion": "Neurological prognostication must be withheld until at least 72 hours post-ROSC and after sedative clearance; early prognostication results in inappropriate premature withdrawal of life support.",
    "citation": "Panchal AR, et al. 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care: Adult Basic and Advanced Life Support. Circulation. 2020;142(16_suppl_2):S366-S468. PMID: 33081529.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply AHA/ERC post-cardiac arrest guidelines: maintain targeted temperature management (prevent fever <= 37.5\u00b0C or 33-36\u00b0C), avoid hyperoxia/hypocapnia, and use continuous EEG to detect non-convulsive status epilepticus.",
      "distractorExclusionNotes": "Strongest distractor 'Perform immediate neurological prognostication at 12 hours post-ROSC and advise ' excluded: Neurological prognostication must be withheld until at least 72 hours post-ROSC and after sedative clearance; early prognostication results in inappropriate premature withdrawal of",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
