import { CandidateSpec } from './types';

export const step3Batch21: CandidateSpec[] = [
  {
    "code": "op-c-s3-0501",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Nervous System",
    "topic": "Delirium Non-Pharmacologic Protocol vs Antipsychotics",
    "provisionalDifficulty": 5,
    "stem": "An 81-year-old man who underwent elective right total hip arthroplasty 36 hours ago becomes acutely agitated, disoriented, and belligerent at 2:00 AM. He is pulling at his peripheral intravenous line and attempting to climb out of bed, insisting that he needs to feed his horses on his farm. The night nurse notes that during the afternoon he was pleasant, oriented, and interacting appropriately with family. His vital signs show: temperature 37.1 C (98.8 F), blood pressure 138/82 mm Hg, pulse 84/min, respirations 16/min, and oxygen saturation 98% on room air. Physical examination reveals an alert elderly man who is unable to state the year, month, or location, and cannot name the months of the year in reverse order. The surgical dressing is clean and dry; cardiopulmonary and abdominal examinations are unremarkable. Bedside bladder scan reveals 85 mL of urine. Point-of-care capillary blood glucose is 114 mg/dL. Which of the following is the most appropriate initial management step?",
    "choices": [
      [
        "Implement structured non-pharmacologic delirium interventions (frequent verbal reorientation, familiar family presence, continuous gentle lighting, and removal of unnecessary medical restraints)",
        "DELIRIUM is an acute, fluctuating disorder of attention and cognitive function that occurs in up to 50% of elderly surgical patients. Diagnostic criteria (Confusion Assessment Method / CAM) require: (1) Acute onset and fluctuating course; (2) Inattention (inability to focus, shift, or sustain attention); plus either (3) Disorganized thinking; OR (4) Altered level of consciousness. The single most effective, evidence-based management strategy for acute delirium is MULTICOMPONENT NON-PHARMACOLOGIC INTERVENTIONS: (a) Frequent reorientation by staff and presence of familiar family members; (b) Optimization of the sleep-wake environment (adequate daytime sunlight, quiet dark environment at night with soft nightlight); (c) Early mobilization and removal of tethering devices (IV lines, catheters, telemetry); (d) Correction of sensory deficits (ensuring patient has hearing aids and eyeglasses); and (e) Review and discontinuation of offending anticholinergic or sedative medications. PHARMACOLOGIC AGENTS (haloperidol, atypical antipsychotics) HAVE ZERO PROVEN EFFICACY IN PREVENTING OR SHORTENING DELIRIUM DURATION and carry significant risks of extrapyramidal symptoms, QT prolongation, and mortality; antipsychotics are STRICTLY RESERVED FOR PATIENTS IN SEVERE, INTRACTABLE AGITATION WHO POSE AN IMMINENT DANGER TO THEMSELVES OR OTHERS."
      ],
      [
        "Administer intravenous haloperidol (2.5 mg) every 4 hours around the clock for 48 hours",
        "Routine standing antipsychotic therapy does not reduce delirium duration, worsens cognitive recovery, and increases adverse cardiovascular events."
      ],
      [
        "Administer intravenous lorazepam (1 mg) to induce rapid sedation and prevent nocturnal wandering",
        "Benzodiazepines worsen hypoactive and hyperactive delirium, exacerbate confusion, and increase falls; they are reserved strictly for alcohol/sedative withdrawal."
      ],
      [
        "Apply bilateral wrist restraints and a posey vest to protect the intravenous catheter",
        "Physical restraints paradoxically escalate agitation, increase strangulation and injury risks, and prolong hospitalization in delirious patients."
      ],
      [
        "Prescribe oral donepezil (5 mg daily) to enhance central cholinergic neurotransmission acutely",
        "Cholinesterase inhibitors have zero efficacy in treating acute postoperative delirium and can precipitate bradycardia and syncope."
      ]
    ],
    "shortestValidSolution": "Acute fluctuating inattention post-op = Delirium -> Implement non-pharmacologic protocol first; avoid antipsychotics/restraints unless imminent physical danger.",
    "necessaryInference": "Prioritize multicomponent non-pharmacologic interventions over psychotropic pharmacotherapy and physical restraints for acute postoperative delirium.",
    "strongestDistractor": "Administer intravenous haloperidol (2.5 mg) every 4 hours around the clock for 48 hours",
    "distractorExclusion": "Standing antipsychotics do not alter delirium duration or outcomes and carry significant extrapyramidal and mortality risks in the elderly.",
    "citation": "Marcantonio ER. Delirium in Hospitalized Older Adults. N Engl J Med. 2017;377(15):1456-1466. PMID: 29020579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0502",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Nervous System",
    "topic": "Beers Criteria Anticholinergic Deprescribing Urinary Retention",
    "provisionalDifficulty": 5,
    "stem": "A 77-year-old woman is brought to the clinic by her daughter due to progressive confusion, memory lapses, dry mouth, and severe constipation over the past 3 months. Two weeks ago, she was evaluated in the emergency department for acute lower abdominal discomfort, where urinary catheterization evacuated 650 mL of retained urine. Her current daily medications include: lisinopril 10 mg for hypertension, metformin 500 mg twice daily for type 2 diabetes, oxybutynin 10 mg daily for overactive bladder, diphenhydramine 50 mg nightly for insomnia, and paroxetine 20 mg daily for generalized anxiety. Physical examination reveals an alert, frail woman who scores 21/30 on the Montreal Cognitive Assessment (MoCA), losing points in delayed recall, serial subtractions, and visuospatial tasks. Abdominal examination reveals a palpable fullness in the suprapubic region, and post-void residual volume measured by ultrasound is 280 mL. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Taper and discontinue diphenhydramine, oxybutynin, and paroxetine (deprescribing anticholinergic medications)",
        "This patient is suffering from cumulative ANTICHOLINERGIC BURDEN, a major cause of reversible cognitive impairment, delirium, dry mouth, constipation, and overflow urinary retention in older adults. According to the AMERICAN GERIATRICS SOCIETY (AGS) BEERS CRITERIA, medications with strong anticholinergic properties are POTENTIALLY INAPPROPRIATE MEDICATIONS (PIMs) in older adults and should be avoided. This patient is taking three potent anticholinergic agents: (1) DIPHENHYDRAMINE (first-generation antihistamine used inappropriately as an OTC sleep aid); (2) OXYBUTYNIN (antimuscarinic bladder relaxant causing urinary retention and cognitive worsening); and (3) PAROXETINE (the most anticholinergic of all SSRIs). The combined anticholinergic blockade inhibits central M1 muscarinic receptors (causing memory impairment resembling dementia) and peripheral M2/M3 receptors (causing detrusor hyporeflexia, urinary retention, and severe hypomotility). The FIRST-LINE INTERVENTION IS SYSTEMATIC DEPRESCRIBING of these offending anticholinergic agents. Once cleared, cognition, salivary function, and detrusor contractility frequently improve dramatically."
      ],
      [
        "Initiate oral donepezil (5 mg daily) and increase oxybutynin to 15 mg daily to manage incontinence",
        "Prescribing a cholinesterase inhibitor to treat cognitive decline while simultaneously continuing/increasing anticholinergic antimuscarinics creates an absurd prescribing cascade."
      ],
      [
        "Place a permanent indwelling Foley catheter and refer for bilateral hip bone mineral density testing",
        "Indwelling Foley catheters carry high rates of urosepsis and catheter trauma; discontinuing anticholinergics restores detrusor function."
      ],
      [
        "Add oral bethanechol chloride (25 mg three times daily) to stimulate detrusor smooth muscle contraction",
        "Adding a cholinergic agonist on top of competing anticholinergic drugs exemplifies a prescribing cascade; removing the offending drugs is the primary intervention."
      ],
      [
        "Refer for urgent neurosurgical consultation for ventriculoperitoneal shunt placement for normal pressure hydrocephalus",
        "Cognitive decline with urinary retention in the setting of heavy anticholinergic polypharmacy is iatrogenic, not communicating hydrocephalus."
      ]
    ],
    "shortestValidSolution": "Cognitive decline + urinary retention + constipation on Diphenhydramine + Oxybutynin + Paroxetine = Anticholinergic toxicity -> Deprescribe offending drugs.",
    "necessaryInference": "Apply Beers Criteria to identify cumulative anticholinergic burden (sedative antihistamines, bladder antimuscarinics, paroxetine) and execute systematic deprescribing.",
    "strongestDistractor": "Initiate oral donepezil (5 mg daily) and increase oxybutynin to 15 mg daily to manage incontinence",
    "distractorExclusion": "Adding donepezil (cholinergic agonist) while continuing oxybutynin (anticholinergic antagonist) creates a futile prescribing cascade; deprescribing is required.",
    "citation": "By the 2019 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2019 Updated AGS Beers Criteria for Potentially Inappropriate Medication Use in Older Adults. J Am Geriatr Soc. 2019;67(4):674-694. PMID: 30693946.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0503",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Endocrine",
    "topic": "Deprescribing in Frail Elderly Relaxed HbA1c Targets Hypoglycemia",
    "provisionalDifficulty": 5,
    "stem": "An 84-year-old woman residing in a long-term care facility has an episode of diaphoresis, tremulousness, and confusion. Fingerstick blood glucose is measured at 42 mg/dL. Her symptoms resolve rapidly following administration of oral glucose gel. Her medical history is notable for type 2 diabetes mellitus for 28 years, vascular dementia (requires assistance with all activities of daily living), stage 4 chronic kidney disease (eGFR 24 mL/min/1.73 m2), and recurrent falls. Her current diabetic medications include glimepiride 4 mg daily and insulin glargine 22 units at bedtime. Laboratory evaluation shows a serum creatinine of 2.6 mg/dL and hemoglobin A1c of 6.2%. Which of the following is the most appropriate long-term glycemic management strategy for this patient?",
    "choices": [
      [
        "Discontinue glimepiride, de-escalate or discontinue insulin glargine, and adjust the target hemoglobin A1c goal to 7.5% to 8.5%",
        "In older adults with FRAILTY, LIMITED LIFE EXPECTANCY (<5-10 years), DEMENTIA, and ADVANCED MULTI-MORBIDITY (e.g. stage 4 CKD, recurrent falls), TIGHT GLYCEMIC CONTROL (HbA1c < 6.5-7.0%) CONFERS SUBSTANTIAL HARM WITH ZERO CLINICAL BENEFIT. The microvascular benefits of tight control take 10-15 years to accrue, whereas the immediate harms\u2014RECURRENT SEVERE HYPOGLYCEMIA\u2014precipitate falls, hip fractures, cardiac arrhythmias, stroke, and accelerated cognitive decline. Landmark guidelines from the American Diabetes Association (ADA) and American Geriatrics Society (AGS) recommend INDIVIDUALIZED GLYCEMIC GOALS: for frail patients with multiple chronic illnesses and cognitive impairment, THE TARGET HbA1c GOAL IS RELAXED TO 7.5% TO 8.5% (or avoiding symptoms of hyperglycemia/hypoglycemia without a fixed numeric target). SULFONYLUREAS (especially long-acting agents like glimepiride and glyburide) ACCUMULATE IN RENAL FAILURE and carry high risk of prolonged hypoglycemia; GLIMEPIRIDE SHOULD BE IMMEDIATELY DISCONTINUED and insulin de-escalated."
      ],
      [
        "Increase insulin glargine to 28 units at bedtime to maintain hemoglobin A1c strictly below 6.5%",
        "Tight glycemic control in frail elderly with dementia drastically increases fatal hypoglycemic events without long-term microvascular benefit."
      ],
      [
        "Switch glimepiride to oral glyburide 10 mg daily and maintain hemoglobin A1c target at 6.0%",
        "Glyburide has active metabolites that accumulate severely in renal failure (eGFR 24), causing protracted, refractory, and potentially fatal hypoglycemia."
      ],
      [
        "Add oral canagliflozin (SGLT2 inhibitor) to suppress glucose fluctuations and keep HbA1c < 6.5%",
        "SGLT2 inhibitors have poor glycemic efficacy in stage 4 CKD (eGFR <30) and increase risks of volume depletion, orthostasis, and mycotic infections."
      ],
      [
        "Continue current regimen unchanged and instruct nursing staff to give orange juice prior to each meal",
        "Continuing glimepiride in stage 4 CKD with HbA1c 6.2% guarantees recurrent life-threatening hypoglycemia; active deprescribing is mandatory."
      ]
    ],
    "shortestValidSolution": "Frail 84yo with dementia + CKD 4 + recurrent hypoglycemia + HbA1c 6.2% on glimepiride = Relax target to 7.5-8.5% -> Discontinue glimepiride and de-escalate insulin.",
    "necessaryInference": "Formulate relaxed glycemic goals (HbA1c 7.5-8.5%) for frail older adults with multi-morbidity, and eliminate high-risk sulfonylureas in renal insufficiency.",
    "strongestDistractor": "Increase insulin glargine to 28 units at bedtime to maintain hemoglobin A1c strictly below 6.5%",
    "distractorExclusion": "Pursuing tight glycemic control (HbA1c <6.5%) in frail older adults causes severe hypoglycemic brain injury and mortality with zero clinical benefit.",
    "citation": "American Diabetes Association. 13. Older Adults: Standards of Medical Care in Diabetes-2022. Diabetes Care. 2022;45(Suppl 1):S195-S207. PMID: 34964867.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0504",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Palliative Care Breakthrough Cancer Pain Titration and Bowel Regimen",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman with metastatic pancreatic adenocarcinoma receiving palliative care presents with worsening severe abdominal and back pain. She is currently taking extended-release oral morphine 60 mg every 12 hours (total 120 mg/day). Over the past week, she reports experiencing 4 to 5 episodes of severe, sharp breakthrough pain daily, rating the pain as 8/10 on a visual analog scale. She has not had a bowel movement in 4 days and feels bloated and nauseated; her only laxative is as-needed docusate sodium. Physical examination reveals abdominal distension, decreased bowel sounds, and hard stool in the rectal vault. Cardiopulmonary examination is normal. In addition to initiating an aggressive bowel regimen with an oral osmotic or stimulant laxative, which of the following is the most appropriate management of her breakthrough cancer pain?",
    "choices": [
      [
        "Prescribe immediate-release oral morphine at a dose equivalent to 10% to 15% of the total 24-hour baseline opioid dose (15 mg oral morphine) every 3 to 4 hours as needed for breakthrough pain",
        "In cancer pain management, optimal symptom control requires a structured two-tiered strategy: (1) BASELINE CHRONIC PAIN is managed with scheduled round-the-clock long-acting opioids; (2) BREAKTHROUGH PAIN (transient exacerbations of moderate-to-severe pain above baseline) is treated with SHORT-ACTING, IMMEDIATE-RELEASE OPIOID RESCUE MEDICATION. Guideline consensus (NCCN and WHO) dictates that THE DOSE OF IMMEDIATE-RELEASE RESCUE OPIOID SHOULD EQUAL APPROXIMATELY 10% TO 15% OF THE TOTAL 24-HOUR AROUND-THE-CLOCK BASELINE OPIOID DOSE. For this patient receiving extended-release morphine 60 mg q12h (120 mg/day total), 10-15% corresponds to 12 to 18 mg (standard dose: 15 mg immediate-release oral morphine q3-4h PRN). If the patient consistently requires >=3-4 rescue doses per 24 hours, the 24-hour total should be calculated and the baseline long-acting dose titrated upward. Furthermore, OPIOID-INDUCED CONSTIPATION NEVER DEVELOPS TOLERANCE; therefore, a scheduled STIMULANT LAXATIVE (senna, bisacodyl) plus/minus an osmotic agent (polyethylene glycol) is MANDATORY. Docusate (stool softener) alone is proven ineffective."
      ],
      [
        "Prescribe immediate-release oral oxycodone (40 mg) every 2 hours as needed for breakthrough pain",
        "40 mg oxycodone is equivalent to 60 mg oral morphine (50% of total daily baseline dose), an excessively high rescue dose causing respiratory depression."
      ],
      [
        "Discontinue all oral opioids immediately and initiate high-dose intravenous patient-controlled analgesia (PCA) hydromorphone",
        "Oral opioid titration is effective and preferred for outpatient oncology; abruptly switching to high-dose IV PCA without trial is unwarranted."
      ],
      [
        "Add oral celecoxib (400 mg daily) as sole breakthrough therapy and avoid all short-acting rescue opioids",
        "NSAID monotherapy is completely inadequate for severe 8/10 breakthrough pancreatic cancer pain; opioid rescue is standard of care."
      ],
      [
        "Instruct the patient to double her extended-release morphine dose whenever breakthrough pain occurs",
        "Extended-release tablets must NEVER be crushed, chewed, or taken as rapid PRN rescue doses; slow onset fails to treat acute pain and causes delayed toxicity."
      ]
    ],
    "shortestValidSolution": "Metastatic cancer pain on 120 mg/day baseline morphine = Rescue dose is 10-15% of daily total (15 mg immediate-release morphine PRN) + stimulant laxative.",
    "necessaryInference": "Calculate appropriate breakthrough cancer pain rescue opioid dosing (10-15% of 24-hour baseline) and prescribe concurrent bowel regimen.",
    "strongestDistractor": "Instruct the patient to double her extended-release morphine dose whenever breakthrough pain occurs",
    "distractorExclusion": "Extended-release opioids have slow absorption and must never be used for rapid PRN breakthrough relief; immediate-release formulations are required.",
    "citation": "Swarm RA, et al. Adult Cancer Pain, Version 3.2019, NCCN Clinical Practice Guidelines in Oncology. J Natl Compr Canc Netw. 2019;17(8):977-1007. PMID: 31390582.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0505",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Opioid-Induced Constipation PAMORA Methylnaltrexone",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with metastatic non-small cell lung cancer is receiving palliative chemotherapy and around-the-clock transdermal fentanyl (75 mcg/hour) plus oral immediate-release oxycodone for bone metastases. Over the past 2 weeks, he has experienced severe, worsening constipation, with only one hard, pellet-like bowel movement every 5 to 6 days accompanied by intense abdominal cramping and tenesmus. His daily bowel regimen consists of maximum recommended doses of oral senna (2 tablets twice daily) and oral polyethylene glycol 3350 (17 g twice daily). Digital rectal examination confirms soft stool in the rectal vault without fecal impaction. Abdominal radiography demonstrates prominent stool throughout the colon without air-fluid levels or mechanical small bowel obstruction. Which of the following is the most appropriate next pharmacologic intervention?",
    "choices": [
      [
        "Subcutaneous methylnaltrexone (peripherally acting mu-opioid receptor antagonist)",
        "OPIOID-INDUCED CONSTIPATION (OIC) occurs in over 60-80% of patients receiving chronic opioid therapy, driven by opioid binding to mu-opioid receptors in the enteric nervous system (myenteric and submucosal plexuses), leading to decreased peristalsis, increased non-propulsive segmental contractions, and decreased intestinal fluid secretion. Unlike other opioid side effects (nausea, sedation), PATIENTS DO NOT DEVELOP TOLERANCE TO OPIOID-INDUCED CONSTIPATION. When first-line laxatives (stimulant laxatives e.g. senna, and osmotic laxatives e.g. PEG) fail at maximum doses, the guideline-recommended second-line therapy is a PERIPHERALLY ACTING MU-OPIOID RECEPTOR ANTAGONIST (PAMORA), such as SUBCUTANEOUS METHYLNALTREXONE, oral naldemedine, or oral naloxegol. Because methylnaltrexone carries a quaternary amine group with permanent positive charge, IT CANNOT CROSS THE BLOOD-BRAIN BARRIER. Consequently, it selectively blocks peripheral enteric mu receptors\u2014rapidly inducing bowel evacuation within hours\u2014WITHOUT PRECIPITATING CENTRAL OPIOID WITHDRAWAL OR REVERSING SYSTEMIC ANALGESIA."
      ],
      [
        "Oral naltrexone tablets (50 mg daily) combined with oral magnesium citrate",
        "Oral naltrexone crosses the blood-brain barrier and precipitates acute, agonizing central opioid withdrawal and catastrophic loss of cancer pain control."
      ],
      [
        "Discontinue transdermal fentanyl and switch to intravenous methadone monotherapy without laxatives",
        "Methadone is a potent mu-opioid agonist that causes equal or worse opioid-induced constipation; changing opioids will not resolve refractory OIC."
      ],
      [
        "Perform an emergent exploratory laparotomy with subtotal colectomy and end ileostomy",
        "Surgical resection is completely contraindicated for functional opioid-induced bowel hypomotility without mechanical obstruction or perforation."
      ],
      [
        "Instruct the patient to increase dietary insoluble fiber intake to > 40 g daily and drink 4 L of water",
        "High insoluble fiber in opioid-induced hypomotility forms a bulky inspissated mass that drastically worsens impaction and can precipitate bowel obstruction."
      ]
    ],
    "shortestValidSolution": "Refractory opioid-induced constipation despite maximum senna + PEG = PAMORA (Subcutaneous Methylnaltrexone) -> blocks enteric mu receptors without CNS withdrawal.",
    "necessaryInference": "Select a peripherally acting mu-opioid receptor antagonist (methylnaltrexone) for laxative-refractory opioid constipation, preserving central analgesia.",
    "strongestDistractor": "Oral naltrexone tablets (50 mg daily) combined with oral magnesium citrate",
    "distractorExclusion": "Naltrexone crosses the blood-brain barrier into the central nervous system, precipitating acute severe opioid withdrawal and severe pain crisis.",
    "citation": "Crockett SD, et al. American Gastroenterological Association Institute Guideline on the Medical Management of Opioid-Induced Constipation. Gastroenterology. 2019;156(1):218-226. PMID: 30342045.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0506",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Advanced Dementia Enteral Feeding Tube vs Assisted Oral Feeding",
    "provisionalDifficulty": 5,
    "stem": "An 86-year-old woman with end-stage Alzheimer disease residing in a specialized memory care unit is admitted to the hospital with aspiration pneumonia. She has severe dysphagia, is completely bedbound, nonverbal, and dependent for all basic activities of daily living. Over the past 6 months, she has lost 18 lb despite high-calorie oral liquid supplements. Her pneumonia is improving with intravenous antibiotics. A formal video fluoroscopic swallowing study reveals silent aspiration of all liquid and solid consistencies. Her son, who is her designated durable power of attorney for healthcare, states that his mother never executed a written living will. He tearfully asks: 'Should we place a percutaneous endoscopic gastrostomy (PEG) feeding tube so my mother won't starve to death or aspirate anymore?' Which of the following represents the most evidence-based and compassionate response to the son?",
    "choices": [
      [
        "Counsel that enteral feeding tubes in advanced dementia do not prolong survival, prevent aspiration, or improve quality of life, and recommend careful, patient-centered assisted oral feeding (comfort feeding)",
        "In patients with ADVANCED END-STAGE DEMENTIA and severe dysphagia, EXTENSIVE EVIDENCE-BASED LITERATURE AND CONSENSUS GUIDELINES (American Geriatrics Society, American Academy of Hospice and Palliative Medicine, and American College of Gastroenterology) UNANIMOUSLY ADVISE AGAINST PERCUTANEOUS ENDOSCOPIC GASTROSTOMY (PEG) TUBE PLACEMENT. Landmark clinical trials and meta-analyses have established that enteral tube feeding in advanced dementia: (1) DOES NOT EXTEND SURVIVAL OR REDUCE MORTALITY; (2) DOES NOT PREVENT ASPIRATION PNEUMONIA (patients continue to aspirate oral secretions and regurgitated gastric contents); (3) DOES NOT IMPROVE NUTRITIONAL MARKERS OR ACCELERATE PRESSURE ULCER HEALING; and (4) SIGNIFICANTLY DEGRADES QUALITY OF LIFE by necessitating physical restraints to prevent tube pulling, causing tube clogging/leakage, and increasing emergency visits. The guideline-recommended standard of care is CAREFUL HAND FEEDING (ASSISTED ORAL FEEDING / COMFORT FEEDING), honoring patient hunger and thirst cues with textured foods, providing emotional human touch, and focusing on comfort."
      ],
      [
        "Recommend immediate PEG tube placement because enteral nutrition guarantees prevention of future aspiration pneumonia",
        "Tube feedings do not prevent aspiration pneumonia; patients aspirate colonized saliva and refluxed gastric contents."
      ],
      [
        "Advise placement of a long-term nasogastric tube combined with bilateral wrist restraints to protect the tube",
        "Nasogastric tubes cause nasal necrosis, sinusitis, discomfort, and require physical restraints that worsen agitation and delirium."
      ],
      [
        "Inform the son that refusing a feeding tube constitutes medical neglect and that adult protective services will be notified",
        "Refusing artificial nutrition and hydration in end-stage dementia is a medically sound, ethically endorsed decision; reporting neglect is completely inappropriate."
      ],
      [
        "Recommend total parenteral nutrition (TPN) via a central venous catheter as the safest long-term feeding modality",
        "TPN carries severe risks of catheter-related bloodstream infections, thrombosis, and metabolic derangements, with zero benefit in end-stage dementia."
      ]
    ],
    "shortestValidSolution": "End-stage dementia with dysphagia = PEG tube does NOT prolong life or prevent aspiration -> Recommend careful assisted oral feeding (comfort feeding).",
    "necessaryInference": "Counsel surrogate decision-makers on evidence-based limits of enteral feeding tubes in advanced dementia: tubes do not prevent aspiration or prolong life; support comfort feeding.",
    "strongestDistractor": "Recommend immediate PEG tube placement because enteral nutrition guarantees prevention of future aspiration pneumonia",
    "distractorExclusion": "Evidence conclusively shows PEG tubes do not prevent aspiration pneumonia in dementia and fail to prolong life; assisted oral comfort feeding is recommended.",
    "citation": "American Geriatrics Society Ethics Committee and Clinical Practice and Models of Care Committee. American Geriatrics Society feeding tubes in advanced dementia position statement. J Am Geriatr Soc. 2014;62(8):1590-1593. PMID: 25039796.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0507",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Comprehensive Geriatric Assessment Failure to Thrive Evaluation",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old man is brought to the geriatric clinic by his daughter because of progressive weight loss, fatigue, and functional decline over the past 5 months. The daughter notes that her father has lost 22 lb (approximately 14% of his body weight) since his wife of 58 years passed away 6 months ago. He lives alone, rarely leaves the house, and often skips meals. He has a history of hypertension and osteoarthritis treated with lisinopril and acetaminophen. Physical examination reveals temporal wasting, loose clothing, and dry oral mucosa. Blood pressure is 124/76 mm Hg, pulse is 68/min, and BMI is 19.2 kg/m2. Neurologic examination shows no focal deficits, but his gait is slow. Serum TSH, complete blood count, comprehensive metabolic panel, and urinalysis are all normal. Screening with the 15-item Geriatric Depression Scale (GDS) reveals a score of 11/15 (indicative of moderate-to-severe depression). Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Initiate a multimodal intervention including an antidepressant (such as mirtazapine to stimulate appetite and treat depression), social support services (e.g. Meals on Wheels), and outpatient physical therapy",
        "This patient presents with FAILURE TO THRIVE IN THE ELDERLY, characterized by weight loss >5%, decreased appetite, poor nutrition, and physical inactivity/functional decline. The COMPREHENSIVE GERIATRIC ASSESSMENT (CGA) evaluates the '4 D's': Depression, Dementia, Delirium, and Drug side effects/Disease. Here, bereavement and a positive Geriatric Depression Scale (11/15) identify LATE-LIFE MAJOR DEPRESSIVE DISORDER as the primary driver of anorexia, weight loss, and isolation. Management requires a MULTIFACETED STRATEGY: (1) PHARMACOTHERAPY: An antidepressant with appetite-stimulating and sedating properties, specifically MIRTAZAPINE (an alpha-2 antagonist that enhances central noradrenergic and serotonergic transmission, with 5-HT2 and 5-HT3 antagonism that stimulates appetite and weight gain); (2) SOCIAL AND NUTRITIONAL SUPPORT: Enrolling in community meal delivery programs (Meals on Wheels), family-assisted dining, and high-calorie dietary supplements; and (3) PHYSICAL THERAPY to prevent sarcopenia and improve functional mobility."
      ],
      [
        "Prescribe high-dose megestrol acetate (800 mg daily) as first-line monotherapy to restore appetite",
        "Megestrol acetate increases thromboembolism, fluid retention, adrenal insufficiency, and mortality in older adults without treating underlying depression."
      ],
      [
        "Perform an urgent whole-body fluorodeoxyglucose (FDG) PET-CT scan to search for occult malignancy",
        "Extensive blind imaging for occult cancer in a newly bereaved patient with severe depression and negative initial labs is low-yield and non-indicated."
      ],
      [
        "Admit the patient to an acute inpatient psychiatric facility for immediate involuntary electroconvulsive therapy",
        "Involuntary psychiatric commitment is inappropriate for uncomplicated outpatient bereavement-related depression; outpatient therapy and social support are first-line."
      ],
      [
        "Prescribe oral dronabinol (cannabinoid) and advise complete bed rest to minimize caloric expenditure",
        "Dronabinol causes severe orthostasis, confusion, and falls in older adults, and bed rest accelerates sarcopenic muscle loss."
      ]
    ],
    "shortestValidSolution": "Elderly failure to thrive + 22-lb weight loss post-bereavement + GDS 11/15 = Geriatric depression -> Mirtazapine (appetite/mood) + social meal programs + PT.",
    "necessaryInference": "Perform comprehensive geriatric assessment for failure to thrive, diagnose late-life depression, and select mirtazapine with social-nutritional support.",
    "strongestDistractor": "Prescribe high-dose megestrol acetate (800 mg daily) as first-line monotherapy to restore appetite",
    "distractorExclusion": "Megestrol acetate carries severe risks of venous thromboembolism and mortality in older adults, while failing to address the underlying severe depressive disorder.",
    "citation": "Robertson RG, Montagnini M. Geriatric failure to thrive. Am Fam Physician. 2004;70(2):343-350. PMID: 15291242.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0508",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Dermatology",
    "topic": "Pressure Injury Staging and Hydrocolloid Foam Dressing Offloading",
    "provisionalDifficulty": 5,
    "stem": "A 79-year-old woman with advanced vascular dementia and hemiplegia secondary to a prior ischemic stroke is evaluated in a skilled nursing facility. Over the past 3 weeks, she has been largely bedbound. Physical examination of her sacral region reveals a 4.0 cm x 3.5 cm wound with full-thickness loss of skin. Subcutaneous adipose tissue is clearly visible in the wound bed, but there is no exposed muscle, tendon, ligament, cartilage, or bone. There is a small amount of slough in the center of the ulcer, but the depth of tissue loss is entirely visible. There is no undermining, tunneling, foul odor, surrounding erythema, or fluctuance. Which of the following correctly classifies this pressure injury stage and identifies the most appropriate local wound and pressure-redistribution management?",
    "choices": [
      [
        "Stage 3 pressure injury; manage with a moist interactive wound dressing (e.g. hydrocolloid or foam dressing), sharp debridement of slough if non-viable, and an alternating-pressure redistribution mattress with scheduled repositioning every 2 hours",
        "According to the National Pressure Injury Advisory Panel (NPIAP) staging system: (1) STAGE 1: Non-blanchable erythema of intact skin; (2) STAGE 2: Partial-thickness skin loss with exposed dermis (shallow open ulcer with red-pink wound bed, or intact/ruptured serum blister); (3) STAGE 3: FULL-THICKNESS SKIN LOSS IN WHICH ADIPOSE (FAT) IS VISIBLE, but bone, tendon, or muscle is NOT exposed. Slough or eschar may be present but does not obscure depth; (4) STAGE 4: Full-thickness skin and tissue loss with EXPOSED BONE, TENDON, OR MUSCLE; (5) UNSTAGEABLE: Full-thickness tissue loss obscured by slough or eschar such that depth cannot be determined. Management for Stage 3 pressure injuries requires: (a) PRESSURE RELIEF: scheduled q2h repositioning, 30-degree lateral tilted position, and pressure-redistributing support surfaces (alternating-pressure or low-air-loss mattress); (b) WOUND BED PREPARATION: gentle debridement of non-viable slough; and (c) MOIST WOUND HEALING: hydrocolloid, foam, or hydrogel dressings that maintain a moist environment while absorbing exudate."
      ],
      [
        "Stage 2 pressure injury; manage with dry gauze dressing changed daily and complete continuous bed rest",
        "Stage 2 involves dermis only without visible adipose; dry gauze dries out the wound bed and causes painful mechanical trauma during dressing changes."
      ],
      [
        "Stage 4 pressure injury; manage with urgent surgical rotational flap closure and empiric IV vancomycin",
        "Stage 4 requires exposed bone, tendon, or muscle; surgery is reserved for refractory wounds, and systemic antibiotics are contraindicated without osteomyelitis."
      ],
      [
        "Unstageable pressure injury; manage with application of iodine paint and withholding all dressing changes",
        "The depth of the wound is completely visualized with visible adipose; the ulcer is fully stageable as Stage 3."
      ],
      [
        "Deep tissue pressure injury; manage by keeping the wound exposed to open room air and applying heat lamps",
        "Deep tissue injury presents as intact purple/maroon skin; open air and heat lamps desiccate tissue, worsening cellular necrosis."
      ]
    ],
    "shortestValidSolution": "Full-thickness ulcer with visible subcutaneous fat (no bone/muscle exposed) = Stage 3 pressure injury -> Hydrocolloid/foam dressing + alternating mattress + q2h turning.",
    "necessaryInference": "Accurately stage pressure injuries according to NPIAP criteria (Stage 3 = visible subcutaneous fat) and select evidence-based moist dressings with offloading.",
    "strongestDistractor": "Stage 2 pressure injury; manage with dry gauze dressing changed daily and complete continuous bed rest",
    "distractorExclusion": "Stage 2 is partial-thickness loss of dermis only; visible subcutaneous adipose establishes a Stage 3 injury, and dry gauze impairs granulation tissue.",
    "citation": "National Pressure Injury Advisory Panel (NPIAP). Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline. J Wound Ostomy Continence Nurs. 2020;47(2):105-112. PMID: 32149959.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0509",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Renal",
    "topic": "Urinary Incontinence Post-Void Residual Overflow vs Urge",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old woman presents to the clinic with urinary frequency, urgency, and involuntary leakage of urine. She reports that she experiences sudden, overwhelming urges to void, often failing to reach the bathroom in time, wetting her undergarments multiple times per day. Over the past month, she has also noticed constant dribbling throughout the day and a feeling of incomplete bladder emptying. She has a history of long-standing type 2 diabetes mellitus complicated by diabetic peripheral neuropathy and diabetic retinopathy. Physical examination shows no pelvic organ prolapse; sensory examination demonstrates decreased pinprick and vibration sensation in a stocking distribution. Urinalysis shows no nitrites, leukocyte esterase, or bacteria. Which of the following diagnostic procedures must be performed prior to initiating any pharmacologic bladder therapy?",
    "choices": [
      [
        "Measurement of post-void residual (PVR) volume using bedside bladder ultrasonography or straight catheterization",
        "This patient has symptoms of mixed urinary incontinence with features concerning for OVERFLOW INCONTINENCE (diabetic cystopathy / neurogenic bladder) mimicking or coexisting with URGE INCONTINENCE. Cardinal teaching point: BEFORE PRESCRIBING ANTIMUSCARINIC AGENTS (e.g., oxybutynin, tolterodine) FOR PRESUMED URGE INCONTINENCE, MEASURING POST-VOID RESIDUAL (PVR) VOLUME IS MANDATORY! Pathophysiology: Diabetic neuropathy damages autonomic sensory and motor fibers innervating the detrusor muscle, causing detrusor hypoactivity and impaired sensation of bladder fullness. As the bladder overfills, intravesical pressure exceeds sphincter resistance, producing involuntary leakage and constant dribbling (overflow incontinence). A normal PVR is <50-100 mL; a PVR > 200-300 mL confirms urinary retention and overflow incontinence. IF AN ANTIMUSCARINIC AGENT WERE PRESCRIBED BLINDLY WITHOUT CHECKING PVR, it would further paralyze the detrusor muscle, precipitating COMPLETE ACUTE URINARY RETENTION AND UROSEPSIS."
      ],
      [
        "Immediate prescription of oral oxybutynin (10 mg daily) to relax detrusor smooth muscle",
        "Prescribing oxybutynin without measuring PVR in a diabetic with neurogenic bladder can precipitate complete acute urinary retention and bilateral hydronephrosis."
      ],
      [
        "Placement of a transvaginal suburethral sling for presumed intrinsic sphincter deficiency",
        "Surgical slings treat genuine stress incontinence, not overflow or neurogenic urge incontinence, and worsen urinary retention."
      ],
      [
        "Renal biopsy to evaluate for early diabetic nodular glomerulosclerosis",
        "Renal biopsy evaluates parenchymal proteinuric renal disease, not lower urinary tract voiding dysfunction or autonomic bladder neuropathy."
      ],
      [
        "Prescription of high-dose oral desmopressin at bedtime to suppress nocturnal urine output",
        "Desmopressin carries high risk of severe, life-threatening hyponatremia and seizures in the elderly and is contraindicated in chronic retention."
      ]
    ],
    "shortestValidSolution": "Diabetic with urgency + constant dribbling = Rule out overflow incontinence (diabetic neurogenic bladder) -> Measure post-void residual (PVR) before anticholinergics.",
    "necessaryInference": "Prioritize measurement of post-void residual volume to exclude overflow incontinence before initiating antimuscarinic medications in high-risk patients.",
    "strongestDistractor": "Immediate prescription of oral oxybutynin (10 mg daily) to relax detrusor smooth muscle",
    "distractorExclusion": "Blindly administering oxybutynin in occult overflow incontinence paralyzes the detrusor muscle, triggering acute complete urinary retention.",
    "citation": "American College of Obstetricians and Gynecologists. ACOG Practice Bulletin No. 155: Urinary Incontinence in Women. Obstet Gynecol. 2015;126(5):e66-e81. PMID: 26488523.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0510",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Normal Pressure Hydrocephalus High-Volume Tap Test",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old man is brought to the neurology clinic by his wife because of progressive walking difficulty, frequent falls, and mental slowing over the past 9 months. His wife notes that he walks as if his 'feet are glued to the floor' and has difficulty initiating steps and turning. Over the past 3 months, he has also developed urinary urgency and episodic incontinence. Physical examination reveals a wide-based, slow, shuffling gait with short strides, poor foot clearance, and marked hesitation when initiating gait or turning (gait apraxia); muscle strength and sensation are normal. Cognitive assessment reveals psychomotor slowing and impaired executive function (MoCA score 22/30). Brain MRI demonstrates ventriculomegaly with Evans index > 0.3, disproportionate enlargement of the Sylvian fissures, and callosal angle < 90 degrees, without prominent cortical sulcal enlargement. Which of the following is the most appropriate next step to confirm the diagnosis and predict surgical shunt responsiveness?",
    "choices": [
      [
        "Perform a high-volume diagnostic lumbar puncture (removal of 30 to 50 mL of cerebrospinal fluid) with quantitative objective gait testing before and after the procedure",
        "NORMAL PRESSURE HYDROCEPHALUS (NPH) is a form of communicating hydrocephalus characterized by the classic clinical triad ('wet, wobbly, and wacky'): (1) GAIT DISTURBANCE: the FIRST, most prominent, and most shunt-responsive symptom (wide-based, magnetic, shuffling gait with hesitation and freezing); (2) COGNITIVE IMPAIRMENT: subcortical pattern (psychomotor slowing, apathy, executive dysfunction); and (3) URINARY INCONTINENCE: urgency progressing to incontinence due to lack of frontal cortical inhibition of the detrusor. Neuroimaging shows DISPROPORTIONATE VENTRICULAR ENLARGEMENT out of proportion to sulcal atrophy. The gold-standard diagnostic and predictive test is the HIGH-VOLUME LUMBAR PUNCTURE (CSF TAP TEST): removal of 30 to 50 mL of CSF via lumbar puncture, measuring opening pressure (which is characteristically normal, 70-200 mm H2O), accompanied by QUANTITATIVE PRE- AND POST-TAP GAIT ASSESSMENT (e.g. 10-meter walk test, timed up-and-go). A significant, objective improvement in gait speed or stride cadence within 2 to 24 hours strongly confirms the diagnosis and predicts excellent clinical response to definitive VENTRICULOPERITONEAL (VP) SHUNT SURGERY."
      ],
      [
        "Perform urgent stereotactic brain biopsy of the periventricular white matter",
        "Brain biopsy is invasive, carries risk of intracranial hemorrhage, and has zero diagnostic role in normal pressure hydrocephalus."
      ],
      [
        "Initiate oral carbidopa-levodopa (25/100 mg three times daily) and evaluate after 6 months",
        "Levodopa is ineffective for NPH gait apraxia and delays definitive surgical shunting, leading to irreversible dementia and immobility."
      ],
      [
        "Prescribe oral acetazolamide (500 mg daily) as definitive long-term medical therapy to reduce CSF production",
        "Medical therapy with carbonic anhydrase inhibitors or diuretics has proven ineffective for long-term management of NPH; shunting is required."
      ],
      [
        "Perform serial therapeutic lumbar punctures weekly for 12 months in lieu of neurosurgical consultation",
        "Serial weekly lumbar punctures carry high cumulative infection risk and are impractical; confirmed tap test responders require a permanent VP shunt."
      ]
    ],
    "shortestValidSolution": "Magnetic gait + dementia + urinary incontinence + ventriculomegaly = NPH -> High-volume lumbar puncture (30-50 mL CSF) with pre/post gait testing.",
    "necessaryInference": "Recognize the triad of normal pressure hydrocephalus and select the high-volume CSF tap test with objective gait assessment to predict shunt success.",
    "strongestDistractor": "Initiate oral carbidopa-levodopa (25/100 mg three times daily) and evaluate after 6 months",
    "distractorExclusion": "NPH gait apraxia does not respond to dopaminergic therapy; delaying VP shunt evaluation causes irreversible cognitive and motor decline.",
    "citation": "Williams MA, Malm J. Diagnosis and Treatment of Normal-Pressure Hydrocephalus. Continuum (Minneap Minn). 2016;22(2 Dementia):579-599. PMID: 27042909.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0511",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Lewy Body Dementia Severe Neuroleptic Sensitivity",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old man is admitted to the hospital with delirium and mild dehydration. His medical history is notable for a 2-year history of progressive cognitive decline with marked day-to-day fluctuations in attention and alertness, vivid well-formed visual hallucinations of small animals sitting in his living room, and a 4-year history of acting out violent dreams during sleep (REM sleep behavior disorder). Physical examination demonstrates bilateral resting tremor, cogwheel rigidity, and bradykinesia. In the evening, the patient becomes frightened by visual hallucinations of intruders in his hospital room and begins shouting. The on-call physician considers prescribing an antipsychotic medication. Which of the following critical adverse reactions is this patient at extreme risk of developing if exposed to typical antipsychotic agents (such as haloperidol)?",
    "choices": [
      [
        "Severe neuroleptic sensitivity (catastrophic irreversible parkinsonian rigidity, acute neuroleptic malignant syndrome, prolonged somnolence, and sudden death)",
        "DEMENTIA WITH LEWY BODIES (DLB) is the second most common neurodegenerative dementia in older adults, pathologically characterized by alpha-synuclein inclusions (Lewy bodies) in the cortex and subcortical nuclei. Cardinal clinical features include: (1) FLUCTUATING COGNITION with pronounced variations in attention and alertness; (2) RECURRENT VIVID, WELL-FORMED VISUAL HALLUCINATIONS; (3) REM SLEEP BEHAVIOR DISORDER (acting out dreams due to loss of normal REM motor atonia); and (4) SPONTANEOUS PARKINSONISM (rigidity, resting tremor, bradykinesia). CRITICAL PRECAUTION: UP TO 50% OF DLB PATIENTS EXHIBIT SEVERE NEUROLEPTIC SENSITIVITY REACTIONS to typical antipsychotics (e.g., haloperidol, chlorpromazine) and high-potency atypicals. Exposure triggers SUDDEN, SEVERE, OFTEN IRREVERSIBLE MOTOR DETERIORATION, life-threatening parkinsonian rigidity, neuroleptic malignant syndrome (NMS), autonomic instability, and a 2- to 3-fold increase in mortality. First-line management is environmental reassurance and cholinesterase inhibitors (donepezil, rivastigmine); if pharmacotherapy for psychosis is unavoidable, low-dose quetiapine or pimavanserin may be used with extreme caution."
      ],
      [
        "Acute angle-closure glaucoma precipitated by excessive central adrenergic stimulation",
        "Antipsychotics are dopamine receptor antagonists, not adrenergic stimulants, and do not specifically trigger glaucoma in Lewy body dementia."
      ],
      [
        "Severe hypoglycemic coma caused by drug-induced beta-cell hypersecretion of insulin",
        "Antipsychotics cause metabolic syndrome and insulin resistance over long periods, not acute severe hypoglycemia in Lewy body disease."
      ],
      [
        "Accelerated hepatic encephalopathy secondary to idiosyncratic fulminant hepatic necrosis",
        "Typical antipsychotics do not cause acute fulminant hepatic necrosis; the lethal threat in DLB is profound neuroleptic extrapyramidal sensitivity."
      ],
      [
        "Rapidly progressive multifocal leukoencephalopathy (PML) mediated by JC virus reactivation",
        "PML occurs in severe immunosuppression (HIV, natalizumab), not from acute neuroleptic administration in Lewy body dementia."
      ]
    ],
    "shortestValidSolution": "Fluctuating cognition + visual hallucinations + REM sleep disorder + parkinsonism = Lewy Body Dementia -> Severe neuroleptic sensitivity (avoid Haloperidol).",
    "necessaryInference": "Recognize dementia with Lewy bodies and identify the lethal threat of severe neuroleptic sensitivity associated with dopamine-blocking antipsychotics.",
    "strongestDistractor": "Accelerated hepatic encephalopathy secondary to idiosyncratic fulminant hepatic necrosis",
    "distractorExclusion": "The primary, life-threatening danger of neuroleptics in DLB is catastrophic D2 receptor blockade causing severe rigidity, NMS, and death, not acute hepatic necrosis.",
    "citation": "McKeith IG, et al. Diagnosis and management of dementia with Lewy bodies: Fourth consensus report of the DLB Consortium. Neurology. 2017;89(1):88-100. PMID: 28592453.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0512",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Frontotemporal Dementia Behavioral Variant vs Alzheimer",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man is brought to the clinic by his wife because of dramatic behavioral and personality changes that have emerged over the past 14 months. The wife reports that her previously polite, conscientious husband has become socially disinhibited: he makes inappropriate sexual remarks to strangers in public, touches merchandise in stores without paying, and laughs loudly at funerals. Over the past 6 months, he has developed an obsessive craving for sweet pastries, eating entire boxes of donuts in one sitting (hyperorality). He exhibits profound apathy, having abandoned his hobbies and showing no concern when his daughter was injured in an accident. Cognitive testing demonstrates impaired executive function and verbal fluency, but his episodic memory, orientation, and visuospatial skills (clock drawing) are completely intact. Brain MRI is performed. Which of the following neuroimaging patterns is most characteristic of this patient's disorder?",
    "choices": [
      [
        "Bilateral, asymmetric atrophy selectively involving the frontal lobes and anterior temporal lobes",
        "BEHAVIORAL VARIANT FRONTOTEMPORAL DEMENTIA (bvFTD, Pick disease) is the most common form of frontotemporal lobar degeneration and a leading cause of early-onset dementia in patients <65 years of age. Pathologically characterized by tau or TDP-43 inclusions. Cardinal clinical diagnostic criteria require >=3 of the following early features: (1) EARLY BEHAVIORAL DISINHIBITION (socially inappropriate actions, loss of manners, offensive remarks); (2) EARLY APATHY OR INERTIA; (3) EARLY LOSS OF SYMPATHY OR EMPATHY; (4) EARLY PERSEVERATIVE, STEREOTYPED, OR COMPULSIVE BEHAVIORS; (5) HYPERORALITY AND DIETARY CHANGES (obsessive bingeing on carbohydrates, sweets, or inedible objects); and (6) NEUROPSYCHOLOGICAL PROFILE: prominent executive dysfunction with RELATIVE SPARING OF EPISODIC MEMORY AND VISUOSPATIAL FUNCTION (contrasting sharply with Alzheimer disease). The pathognomonic neuroimaging finding on brain MRI or PET is FOCAL, OFTEN ASYMMETRIC ATROPHY (OR HYPOMETABOLISM) PREDOMINANTLY INVOLVING THE FRONTAL LOBES AND ANTERIOR TEMPORAL LOBES."
      ],
      [
        "Prominent, symmetric bilateral hippocampal and entorhinal cortex atrophy with parietal volume loss",
        "Bilateral hippocampal and parietal atrophy is the hallmark of ALZHEIMER DISEASE, which presents with early episodic memory loss, not disinhibition."
      ],
      [
        "Diffuse, widespread periventricular white matter hyperintensities on T2/FLAIR without lobar atrophy",
        "Periventricular white matter hyperintensities define vascular dementia (subcortical ischemic microangiopathy), which features stepwise motor deficits."
      ],
      [
        "Proportionate enlargement of the lateral ventricles with preservation of frontal and temporal gyri",
        "Communicating ventriculomegaly is seen in normal pressure hydrocephalus; bvFTD produces severe knife-blade frontal/temporal lobar atrophy."
      ],
      [
        "Selective bilateral atrophy of the caudate nuclei and putamen with compensatory ex-vacuo lateral ventriculomegaly",
        "Bilateral caudate atrophy is characteristic of HUNTINGTON DISEASE, which presents with chorea and family history of autosomal dominant CAG repeats."
      ]
    ],
    "shortestValidSolution": "Age < 65 + social disinhibition + hyperorality (sweets) + apathy + preserved memory = Frontotemporal Dementia -> Frontal and anterior temporal lobe atrophy.",
    "necessaryInference": "Distinguish frontotemporal dementia from Alzheimer disease based on early behavioral disinhibition and selective frontal/anterior temporal lobe atrophy on MRI.",
    "strongestDistractor": "Prominent, symmetric bilateral hippocampal and entorhinal cortex atrophy with parietal volume loss",
    "distractorExclusion": "Hippocampal and entorhinal atrophy is pathognomonic for Alzheimer disease (early memory loss); bvFTD characteristically shows selective frontal and anterior temporal atrophy.",
    "citation": "Rascovsky K, et al. Sensitivity of revised diagnostic criteria for the behavioural variant of frontotemporal dementia. Brain. 2011;134(Pt 9):2456-2477. PMID: 21810890.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0513",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Vascular Dementia Subcortical Ischemia Executive Dysfunction",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a long-standing history of poorly controlled hypertension, heavy cigarette smoking, and type 2 diabetes mellitus is brought to the clinic for cognitive evaluation. His daughter reports that over the past 2 years, his mental clarity has deteriorated in a distinct 'stepwise' pattern, with sudden noticeable drops in function following transient episodes of weakness or slurred speech, followed by periods of stability. He has severe difficulty planning tasks, organizing his finances, and shifting attention between activities (executive dysfunction), but his long-term biographical memory is relatively preserved. Physical examination reveals asymmetric hyperreflexia, an extensor plantar response (positive Babinski sign) on the left, pseudobulbar affect (unprovoked emotional lability), and a mild spastic hemiparetic gait. Brain MRI demonstrates extensive, confluent periventricular and subcortical white matter hyperintensities on T2/FLAIR imaging, alongside multiple small cystic lacunar infarcts in the basal ganglia and internal capsule. Which of the following is the diagnosis?",
    "choices": [
      [
        "Vascular dementia (subcortical ischemic vascular cognitive impairment)",
        "VASCULAR DEMENTIA (VaD) is the second most common form of dementia in older adults, accounting for ~15-20% of cases. It arises from cerebrovascular disease (multiple large-vessel cortical territorial infarcts, single strategic strokes, or chronic small-vessel subcortical ischemic microangiopathy / Binswanger disease). Key distinguishing clinical features include: (1) STEPWISE OR FLUCTUATING TEMPORAL DECLINE coinciding with ischemic events; (2) PROMINENT EXECUTIVE DYSFUNCTION (impaired planning, sequencing, processing speed) out of proportion to episodic memory impairment; (3) FOCAL NEUROLOGIC SIGNS ON EXAMINATION (asymmetric hyperreflexia, Babinski sign, pseudobulbar affect, gait abnormalities); (4) STRONG CARDIOVASCULAR RISK PROFILE (hypertension is the single most important modifiable risk factor, smoking, diabetes, hyperlipidemia); and (5) NEUROIMAGING EVIDENCE of cerebrovascular disease: confluent leukoaraiosis (white matter hyperintensities) and subcortical lacunar infarcts. Management centers on aggressive cardiovascular risk reduction (blood pressure control, statins, antiplatelet therapy) to prevent recurrent strokes."
      ],
      [
        "Sporadic Creutzfeldt-Jakob disease (sCJD)",
        "CJD presents with rapidly progressive dementia over weeks to months with startle myoclonus and cortical ribboning on diffusion-weighted MRI, not indolent 2-year stepwise decline."
      ],
      [
        "Dementia with Lewy bodies (DLB)",
        "DLB features visual hallucinations, fluctuating alertness, and REM sleep behavior disorder, rather than focal stroke deficits and extensive lacunar infarcts."
      ],
      [
        "Neurosyphilis (general paresis of the insane)",
        "Neurosyphilis causes pupillary abnormalities (Argyll Robertson pupil) and meningovascular signs, with positive CSF VDRL, not classic hypertensive lacunar strokes."
      ],
      [
        "Primary progressive aphasia (PPA)",
        "PPA is a subtype of frontotemporal lobar degeneration presenting with isolated, progressive speech and language deterioration, sparing motor pathways."
      ]
    ],
    "shortestValidSolution": "Stepwise cognitive decline + focal deficits (Babinski, hyperreflexia) + leukoaraiosis/lacunar infarcts on MRI = Vascular dementia.",
    "necessaryInference": "Diagnose vascular dementia by its stepwise decline, prominent executive dysfunction, focal motor signs, and extensive ischemic white matter disease on MRI.",
    "strongestDistractor": "Sporadic Creutzfeldt-Jakob disease (sCJD)",
    "distractorExclusion": "sCJD progresses precipitously within weeks to months with severe myoclonus and 14-3-3 protein, unlike the gradual 2-year stepwise course of vascular dementia.",
    "citation": "O'Brien JT, Thomas A. Vascular dementia. Lancet. 2015;386(10004):1698-1706. PMID: 26595643.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0514",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Musculoskeletal",
    "topic": "Fall Risk Multicomponent Intervention Timed Up and Go",
    "provisionalDifficulty": 5,
    "stem": "An 80-year-old woman is brought to the clinic by her daughter after experiencing two mechanical falls in her home over the past 4 months, neither of which resulted in fractures. She states that she fell while walking to the bathroom at night. Her medical history includes hypertension, osteoarthritis of the knees, and insomnia. Her current medications are amlodipine 10 mg daily, hydrochlorothiazide 25 mg daily, zolpidem 10 mg nightly, and over-the-counter naproxen as needed. Physical examination shows no orthostatic hypotension (supine BP 132/78 mm Hg, standing BP 128/76 mm Hg). Visual acuity is 20/50 bilaterally. Timed Up and Go (TUG) test requires 17 seconds to complete (normal < 12 seconds). Which of the following combinations of interventions has the strongest evidence base for reducing this patient's future fall risk?",
    "choices": [
      [
        "Taper and discontinue zolpidem, perform a home safety hazard evaluation, refer to physical therapy for structured gait and balance training (e.g. Tai Chi), and update corrective eyewear",
        "FALLS IN OLDER ADULTS are a major cause of morbidity, hip fractures, intracranial hemorrhage, and loss of independence. The American Geriatrics Society (AGS) and CDC (STEADI algorithm) recommend a COMPREHENSIVE MULTIFACTORIAL FALL RISK ASSESSMENT AND MULTICOMPONENT INTERVENTION: (1) MEDICATION REVIEW AND DEPRESCRIBING: Sedative-hypnotics, psychotropic drugs, and benzodiazepine receptor agonists (ZOLPIDEM) dramatically increase fall risk (sedation, impaired balance, nocturnal ataxia) and must be tapered and stopped; (2) GAIT AND BALANCE INTERVENTIONS: A Timed Up and Go (TUG) > 12 seconds indicates high fall risk; structured physical therapy focusing on progressive balance, strength, and gait training (such as Tai Chi or Otago exercises) is the single most effective physical intervention to prevent falls; (3) HOME HAZARD MITIGATION: home evaluation to remove throw rugs, improve lighting, install grab bars in bathrooms, and place nightlights; and (4) SENSORY CORRECTION: formal visual evaluation and updated corrective lenses (avoiding bifocals/trifocals when walking outdoors or on stairs)."
      ],
      [
        "Advise the patient to remain in bed or in a seated wheelchair for the majority of the day to eliminate walking risks",
        "Immobilization and wheelchair confinement cause rapid muscle wasting, severe deconditioning, depression, and paradoxically increase severe fall injuries."
      ],
      [
        "Add oral alprazolam (0.5 mg nightly) to reduce fall-related anxiety and improve sleep architecture",
        "Benzodiazepines exacerbate ataxia, cognitive impairment, and daytime sedation, drastically escalating fall risk and hip fracture rates."
      ],
      [
        "Prescribe a four-wheeled rolling walker without physical therapy evaluation and maintain all current medications",
        "Providing a walking aid without instruction or addressing causative sedative medications (zolpidem) fails to reduce fall rates and can cause walker-related tripping."
      ],
      [
        "Initiate oral donepezil (10 mg daily) to enhance attention during nocturnal ambulation",
        "Cholinesterase inhibitors have no role in fall prevention in non-demented older adults and can precipitate bradycardia, syncope, and dangerous falls."
      ]
    ],
    "shortestValidSolution": "Elderly falls + TUG 17s + taking Zolpidem = Multifactorial intervention -> Stop zolpidem + physical therapy (Tai Chi/balance) + home hazard assessment + vision check.",
    "necessaryInference": "Formulate an evidence-based multifactorial fall prevention bundle: deprescribe sedatives (zolpidem), refer for gait/balance training, and evaluate home hazards.",
    "strongestDistractor": "Advise the patient to remain in bed or in a seated wheelchair for the majority of the day to eliminate walking risks",
    "distractorExclusion": "Restricting mobility causes rapid sarcopenia, bone deconditioning, and loss of postural reflexes, accelerating frailty and paradoxically increasing fall injury severity.",
    "citation": "Ganz DA, Latham NK. Prevention of Falls in Community-Dwelling Older Adults. N Engl J Med. 2020;382(8):734-743. PMID: 32074367.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0515",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Neurogenic Orthostatic Hypotension Autonomic Failure vs Hypovolemia",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with a 5-year history of Parkinson disease presents with recurrent episodes of lightheadedness, coat-hanger neck ache, and blurred vision occurring within 1 to 2 minutes of standing from a seated or supine position. The symptoms resolve promptly upon sitting or lying down. He has experienced two syncopal episodes while standing in line at the grocery store. He takes carbidopa-levodopa 25/100 mg three times daily and has no history of diabetes. Physical examination reveals: supine blood pressure 156/88 mm Hg with a heart rate of 66/min. After 3 minutes of standing, his blood pressure drops to 108/62 mm Hg (a drop of 48 mm Hg systolic and 26 mm Hg diastolic), while his heart rate rises minimally to 70/min (an increase of only 4 bpm). Cardiopulmonary examination is normal; there is no jugular venous distension or peripheral edema. Complete blood count and serum electrolytes are normal. Which of the following is the underlying mechanism of this patient's postural hemodynamic abnormality?",
    "choices": [
      [
        "Impaired baroreflex-mediated sympathetic efferent vasoconstriction and inadequate compensatory tachycardia (neurogenic orthostatic hypotension)",
        "ORTHOSTATIC HYPOTENSION (OH) is defined as a sustained reduction of systolic blood pressure >= 20 mm Hg or diastolic blood pressure >= 10 mm Hg within 3 minutes of standing. In non-neurogenic OH (e.g. hypovolemia, dehydration), standing-induced venous pooling triggers an intact baroreflex response: sympathetic outflow increases, resulting in compensatory reflex tachycardia (delta HR > 15-20 bpm). In contrast, this patient exhibits NEUROGENIC ORTHOSTATIC HYPOTENSION (nOH). In nOH (seen in synucleinopathies like Parkinson disease, multiple system atrophy, and pure autonomic failure), degeneration of postganglionic sympathetic adrenergic neurons impairs norepinephrine release, resulting in: (1) FAILURE OF ARTERIOLAR VASOCONSTRICTION; and (2) AN INADEQUATE, BLUNTED COMPENSATORY HEART RATE INCREASE (ratio of delta HR to delta SBP < 0.5 bpm/mm Hg, or absolute delta HR < 10 bpm despite profound hypotension). Management: discontinue offending vasodilators, use waist-high compression stockings, elevate head of bed 30 degrees, ensure adequate salt/water intake, and prescribe pharmacotherapy (midodrine [alpha-1 agonist], droxidopa [norepinephrine precursor], or fludrocortisone)."
      ],
      [
        "Profound intravascular volume depletion resulting in maxed baroreflex vagal stimulation",
        "Intravascular hypovolemia produces prominent compensatory reflex sinus tachycardia (delta HR > 20-30 bpm); here delta HR was only 4 bpm, proving autonomic failure."
      ],
      [
        "Postural orthostatic tachycardia syndrome (POTS) driven by excessive hyperadrenergic tone",
        "POTS requires an excessive postural heart rate increase (>=30 bpm) in the ABSENCE of orthostatic hypotension, the exact opposite of this patient's findings."
      ],
      [
        "Transient cerebral hypoperfusion secondary to carotid sinus hypersensitivity cardioinhibition",
        "Carotid sinus hypersensitivity triggers sudden sinus pauses or AV block during neck turning or tight collar pressure, not sustained orthostatic pooling."
      ],
      [
        "Paroxysmal supraventricular tachycardia with high-degree atrioventricular block",
        "ECG and pulse show sinus rhythm with normal resting rate; the defect is autonomic baroreflex failure."
      ]
    ],
    "shortestValidSolution": "Standing BP drop >20/10 mm Hg with blunted HR response (<10 bpm increase) in Parkinson patient = Neurogenic orthostatic hypotension (autonomic failure).",
    "necessaryInference": "Distinguish neurogenic orthostatic hypotension (blunted heart rate response <10 bpm due to baroreflex sympathetic failure) from hypovolemic orthostasis.",
    "strongestDistractor": "Profound intravascular volume depletion resulting in maxed baroreflex vagal stimulation",
    "distractorExclusion": "Hypovolemia elicits intact sympathetic baroreflex tachycardia (HR rises >15-20 bpm); an isolated 4 bpm rise despite a 48 mm Hg drop proves neurogenic autonomic failure.",
    "citation": "Freeman R, et al. Consensus statement on the definition of orthostatic hypotension, neurally mediated syncope and the postural tachycardia syndrome. Clin Auton Res. 2011;21(2):69-72. PMID: 21431947.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0516",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "CKD Anemia ESA Initiation Target Hb and Iron Saturation",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman with stage 4 chronic kidney disease (eGFR 22 mL/min/1.73 m2 secondary to hypertensive nephrosclerosis) presents for routine follow-up. Over the past 2 months, she has noticed progressive exertional dyspnea and generalized fatigue. Physical examination reveals conjunctival pallor without jaundice or peripheral edema; blood pressure is 134/82 mm Hg. Laboratory studies demonstrate: hemoglobin 8.8 g/dL (normal 12.0-16.0 g/dL), hematocrit 26.4%, MCV 88 fL, serum iron 42 mcg/dL, total iron-binding capacity 280 mcg/dL, transferrin saturation (TSAT) 15% (normal 20-50%), and serum ferritin 85 ng/mL (normal 15-200 ng/mL). Stool guaiac testing is negative on three samples. The physician considers initiating an erythropoiesis-stimulating agent (ESA), such as epoetin alfa or darbepoetin alfa. Which of the following represents the most appropriate management plan regarding iron repletion and target hemoglobin parameters?",
    "choices": [
      [
        "Administer intravenous iron repletion to achieve a transferrin saturation > 20% and serum ferritin > 200 ng/mL prior to initiating an ESA, and target a conservative hemoglobin level between 10.0 and 11.5 g/dL (never exceeding 11.5 to 12.0 g/dL)",
        "ANEMIA OF CHRONIC KIDNEY DISEASE (CKD) is primarily driven by decreased renal erythropoietin production by peritubular interstitial fibroblasts, combined with functional iron deficiency mediated by hepcidin. Management follows strict KDIGO guideline parameters: (1) IRON STATUS FIRST: Erythropoiesis requires accessible iron stores. In CKD, 'functional' iron deficiency is common; ESAs will fail if iron is inadequate. KDIGO guidelines mandate maintaining TRANSFERRIN SATURATION (TSAT) > 20% AND SERUM FERRITIN > 200 ng/mL (or >100 ng/mL in non-dialysis CKD, ideally >200-500 ng/mL). IV iron is significantly more effective than oral iron; (2) ESA INITIATION CRITERIA: ESAs are indicated when hemoglobin is < 10.0 g/dL to reduce the need for blood transfusions and improve quality of life; and (3) TARGET HEMOGLOBIN: Landmark randomized controlled trials (CHOIR, CREATE, and TREAT) demonstrated that FULL NORMALIZATION OF HEMOGLOBIN (>12.0-13.0 g/dL) WITH ESAs SIGNIFICANTLY INCREASES THE RISK OF ISCHEMIC STROKE, VENOUS THROMBOEMBOLISM, CARDIOVASCULAR EVENTS, AND MORTALITY (FDA Black Box Warning). Therefore, guidelines mandate a CONSERVATIVE TARGET HEMOGLOBIN OF 10.0 TO 11.5 g/dL, avoiding targets >11.5 g/dL."
      ],
      [
        "Initiate high-dose epoetin alfa immediately without iron supplementation, titrating the dose to normalize hemoglobin strictly > 13.0 g/dL",
        "Normalizing hemoglobin >13 g/dL with ESAs is proven to cause an unacceptably high rate of ischemic stroke and death (TREAT and CHOIR trials)."
      ],
      [
        "Transfuse 2 units of packed red blood cells immediately to achieve a hemoglobin of 11.0 g/dL",
        "Blood transfusions in CKD sensitize the patient to human leukocyte antigens (HLA alloimmunization), compromising future renal transplant eligibility; reserved for acute shock."
      ],
      [
        "Administer oral iron sulfate monotherapy and withhold all ESAs until the hemoglobin falls below 6.5 g/dL",
        "Oral iron is poorly absorbed in CKD due to high hepcidin, and withholding ESAs until Hb <6.5 causes severe ischemic cardiac morbidity and heart failure."
      ],
      [
        "Initiate oral cyanocobalamin and folic acid supplementation while maintaining hemoglobin goal > 14.0 g/dL",
        "Vitamin B12 and folate are normal (normocytic MCV 88); supranormal hemoglobin targets drastically increase fatal thrombotic complications."
      ]
    ],
    "shortestValidSolution": "CKD 4 anemia (Hb 8.8, TSAT 15%) = Replenish iron first (TSAT >20%, ferritin >200) -> Conservative ESA target 10.0-11.5 g/dL (never >11.5-12 due to stroke risk).",
    "necessaryInference": "Apply KDIGO anemia guidelines in CKD: correct iron deficiency (TSAT >20%) before ESA initiation and maintain conservative target Hb (10-11.5 g/dL) to prevent stroke.",
    "strongestDistractor": "Initiate high-dose epoetin alfa immediately without iron supplementation, titrating the dose to normalize hemoglobin strictly > 13.0 g/dL",
    "distractorExclusion": "Large clinical trials (TREAT, CHOIR) demonstrated that titrating ESAs to normal hemoglobin levels (>13 g/dL) causes a massive excess of ischemic strokes and death.",
    "citation": "Kidney Disease: Improving Global Outcomes (KDIGO) Anemia Work Group. KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease. Kidney Int Suppl. 2012;2(4):279-335. PMID: 33909547.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0517",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Osteoporosis Bisphosphonate Drug Holiday Atypical Femur Fracture",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old postmenopausal woman presents for a routine health maintenance visit. She has taken oral alendronate (70 mg once weekly) faithfully for the past 5 years for osteoporosis. She has had no fractures, falls, or gastrointestinal symptoms. A dual-energy X-ray absorptiometry (DEXA) scan performed today shows a femoral neck T-score of -2.1 and lumbar spine T-score of -2.2 (improved from a baseline T-score of -2.8 at both sites 5 years ago). Her 10-year major osteoporotic fracture risk calculated by FRAX is 14% (moderate risk, <20%), and 10-year hip fracture risk is 2.1% (<3%). Physical examination is normal, with no thigh or groin pain. She asks if she needs to continue taking alendronate indefinitely. Which of the following is the most appropriate management recommendation?",
    "choices": [
      [
        "Initiate a 'drug holiday' by discontinuing alendronate, and reassess fracture risk and bone mineral density with a repeat DEXA scan in 2 to 3 years",
        "BISPHOSPHONATES (e.g. alendronate, zoledronic acid) bind avidly to hydroxyapatite crystals in bone mineral, where they are internalized by osteoclasts and inhibit farnesyl pyrophosphate synthase, suppressing bone resorption. Because bisphosphonates accumulate in bone matrix, THEY PERSIST IN SKELETAL TISSUE FOR YEARS AFTER CESSATION, exerting a prolonged residual antiresorptive effect. However, prolonged uninterrupted suppression of bone turnover (>5 years of oral bisphosphonates or >3 years of IV zoledronic acid) is associated with rare but severe complications: (1) ATYPICAL FEMORAL FRACTURES (AFF: subtrochanteric or diaphyseal chalk-like transverse fractures, often preceded by thigh/groin aching); and (2) OSTEONECROSIS OF THE JAW (ONJ). According to ASBMR and AACE guidelines, patients who achieve moderate fracture risk (T-score > -2.5, no recent fractures) after 5 years of oral bisphosphonate therapy should be offered a 'DRUG HOLIDAY' (temporary drug discontinuation for 2-3 years) with periodic monitoring of bone mineral density."
      ],
      [
        "Switch to intravenous zoledronic acid annually for an additional 10 consecutive years without interruption",
        "Switching to another potent bisphosphonate further suppresses bone turnover, drastically increasing the risk of atypical femur fractures and osteonecrosis of the jaw."
      ],
      [
        "Discontinue alendronate permanently and assure the patient that osteoporosis is cured and never requires repeat bone density monitoring",
        "Bisphosphonates do not cure osteoporosis; skeletal stores gradually dissipate over 2-5 years, requiring reassessment DEXA in 2-3 years to determine when to resume therapy."
      ],
      [
        "Switch immediately to subcutaneous denosumab and instruct her that denosumab can be stopped whenever bone density normalizes",
        "Denosumab lacks skeletal retention; abruptly stopping denosumab causes a severe rebound in bone resorption with rapid multiple vertebral compression fractures."
      ],
      [
        "Increase the dose of alendronate to 140 mg weekly to achieve a supranormal T-score > +1.0",
        "Supranormal bone density is not a therapeutic objective and high doses drastically elevate the incidence of adynamic bone disease and atypical fractures."
      ]
    ],
    "shortestValidSolution": "5 years of alendronate + T-score improved to -2.1 (moderate risk) = Initiate bisphosphonate 'drug holiday' (reassess DEXA in 2-3 years) to prevent atypical femur fractures.",
    "necessaryInference": "Formulate bisphosphonate holiday guidelines: pause therapy after 5 years in moderate-risk patients to prevent atypical femur fractures while monitoring bone density.",
    "strongestDistractor": "Switch immediately to subcutaneous denosumab and instruct her that denosumab can be stopped whenever bone density normalizes",
    "distractorExclusion": "Denosumab cannot be stopped without a transition bisphosphonate; abrupt cessation triggers rapid rebound osteoclast activation and multiple vertebral fractures.",
    "citation": "Adler RA, et al. Managing Osteoporosis in Patients on Long-Term Bisphosphonate Treatment: Report of a Task Force of the American Society for Bone and Mineral Research. J Bone Miner Res. 2016;31(1):16-35. PMID: 26350171.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0518",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Behavioral Health",
    "topic": "Hyperactive ICU Delirium ABCDEF Bundle Dexmedetomidine",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old man in the intensive care unit (ICU) is recovering from septic shock secondary to acute peritonitis after emergency sigmoid resection 4 days ago. He is currently extubated and receiving 2 L/min oxygen by nasal cannula. Over the past 6 hours, he has become combative, shouting at nursing staff, accusing the team of poisoning him, and repeatedly pulling at his arterial line and Foley catheter. His ICU nurse requests an order for physical wrist restraints and standing intravenous lorazepam. Vital signs show: temperature 37.4 C (99.3 F), blood pressure 144/86 mm Hg, heart rate 98/min, and oxygen saturation 96%. On examination, the patient is agitated, inattentive, and cannot track simple commands (Confusion Assessment Method for the ICU [CAM-ICU] is positive). Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Implement the multicomponent ICU ABCDEF bundle (spontaneous awakening/breathing, delirium monitoring, early mobility, family presence), avoid benzodiazepines and physical restraints, and consider low-dose dexmedetomidine infusion if agitation precludes safe care",
        "The Society of Critical Care Medicine (SCCM) PADIS guidelines (Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption) recommend the 'ABCDEF BUNDLE' as the gold-standard framework for managing ICU delirium: (1) Assess, Prevent, and Manage Pain first; (2) Both Spontaneous Awakening and Breathing Trials; (3) Choice of analgesia and sedation; (4) Delirium: Assess, Prevent, and Manage; (5) Early mobility and Exercise; and (6) Family engagement and empowerment. Key principles: (a) BENZODIAZEPINES (lorazepam, midazolam) ARE PROVEN INDEPENDENT RISK FACTORS FOR PROLONGING DELIRIUM DURATION AND INCREASING ICU MORTALITY; they must be avoided; (b) PHYSICAL RESTRAINTS worsen agitation, prolong ICU stays, and increase injury; (c) IF PHARMACOTHERAPY FOR SEVERE AGITATION IS NECESSARY to prevent self-extubation or line removal, DEXMEDETOMIDINE (a selective central alpha-2 adrenergic agonist) is the sedative of choice because it provides anxiolysis and cooperative sedation without respiratory depression, and significantly shortens delirium duration compared to benzodiazepines."
      ],
      [
        "Administer standing intravenous lorazepam (2 mg every 4 hours) combined with bilateral four-point physical restraints",
        "Benzodiazepines are proven deliriogens that double the duration of ICU delirium and increase mechanical ventilation days; restraints escalate combative behavior."
      ],
      [
        "Prescribe standing high-dose oral olanzapine (20 mg twice daily) to completely suppress all dopaminergic signaling",
        "High-dose standing atypical antipsychotics fail to resolve underlying ICU delirium, cause severe hypotension and QTc prolongation, and have no mortality benefit."
      ],
      [
        "Perform an immediate bedside re-intubation and initiate deep neuromuscular blockade with cisatracurium",
        "Re-intubation and chemical paralysis for hyperactive delirium carries extreme morbidity (ventilator-associated pneumonia, ICU myopathy) and is medically contraindicated."
      ],
      [
        "Administer intravenous propofol infusion titrated to achieve deep burst suppression on continuous electroencephalography",
        "Propofol-induced burst suppression is indicated for refractory status epilepticus, not for postoperative ICU delirium, and causes propofol infusion syndrome."
      ]
    ],
    "shortestValidSolution": "ICU delirium + agitation = Apply ABCDEF bundle -> Avoid benzodiazepines/restraints; use non-pharm + Dexmedetomidine if pharmacotherapy needed for line safety.",
    "necessaryInference": "Apply SCCM PADIS guidelines for ICU delirium: prioritize the ABCDEF bundle, avoid deliriogenic benzodiazepines, and select dexmedetomidine when sedation is required.",
    "strongestDistractor": "Administer standing intravenous lorazepam (2 mg every 4 hours) combined with bilateral four-point physical restraints",
    "distractorExclusion": "Benzodiazepines worsen ICU delirium duration and increase mortality in clinical trials; physical restraints cause panic, aspiration, and nerve injury.",
    "citation": "Devlin JW, et al. Clinical Practice Guidelines for the Prevention and Management of Pain, Agitation/Sedation, Delirium, Immobility, and Sleep Disruption in Adult Patients in the ICU. Crit Care Med. 2018;46(9):e825-e873. PMID: 30113379.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0519",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "Musculoskeletal",
    "topic": "Sarcopenia Resistance Training and High-Protein Nutrition",
    "provisionalDifficulty": 5,
    "stem": "An 81-year-old man presents to the outpatient geriatric clinic for evaluation of progressive physical weakness, sluggish movement, and difficulty rising from low chairs over the past year. He denies joint pain, focal numbness, or weight loss. He lives independently but notes that carrying grocery bags has become exhausting. Physical examination reveals bilateral symmetrical thinning of the temporal muscles, deltoids, and quadriceps without fasciculations. Grip strength measured by hand-held dynamometer is 21 kg (low; reference > 27 kg for men). Gait speed measured over a 4-meter course is 0.65 m/s (slow; reference > 0.8 m/s). Bioelectrical impedance analysis confirms a skeletal muscle mass index (SMMI) significantly below the sex-specific cutoff. Complete blood count, serum creatinine, TSH, vitamin D, and serum creatine kinase are completely normal. Which of the following therapeutic interventions has the strongest evidence base for improving muscle mass, strength, and physical performance in this patient?",
    "choices": [
      [
        "A progressive resistance exercise training program combined with dietary protein supplementation targeting 1.2 to 1.5 g/kg/day",
        "SARCOPENIA is a progressive and generalized skeletal muscle disorder characterized by the accelerated loss of muscle mass, muscle strength (dynapenia), and physical performance. According to the European Working Group on Sarcopenia in Older People (EWGSOP2), diagnosis is confirmed by LOW MUSCLE STRENGTH (e.g. low grip strength <27 kg in men) combined with LOW MUSCLE QUANTITY/QUALITY (on DXA or bioimpedance), and categorized as severe if gait speed is <0.8 m/s. The cornerstone, evidence-based first-line therapy for sarcopenia is PROGRESSIVE RESISTANCE EXERCISE TRAINING (PRT) 2 to 3 times weekly, targeting major muscle groups (squats, leg press, chest press). PRT stimulates myofibrillar protein synthesis, promotes motor unit recruitment, and reverses age-related type II muscle fiber atrophy. Resistance training MUST BE PAIRED WITH INCREASED DIETARY PROTEIN INTAKE TARGETING 1.2 TO 1.5 g/kg/day (distributed as 25-30 g of high-quality protein containing leucine per meal) to overcome anabolic resistance in older skeletal muscle. Hormonal therapies (testosterone, growth hormone) have unfavorable risk-benefit ratios and are not recommended."
      ],
      [
        "Intramuscular testosterone cypionate injections (200 mg every 2 weeks) monotherapy without exercise",
        "Testosterone carries risks of erythrocytosis, prostate stimulation, fluid retention, and cardiovascular events, without reversing underlying functional mobility deficits."
      ],
      [
        "Recombinant human growth hormone (somatropin) daily subcutaneous injections",
        "Growth hormone increases fluid retention, carpal tunnel syndrome, arthralgias, and insulin resistance without improving muscle strength or function."
      ],
      [
        "Strict complete bed rest for 4 weeks to conserve metabolic energy and prevent musculoskeletal fatigue",
        "Bed rest induces catastrophic muscle loss in older adults (up to 1 kg of muscle mass lost in 10 days of bed rest), dramatically worsening sarcopenia."
      ],
      [
        "Oral high-dose megestrol acetate (400 mg daily) to stimulate general metabolic weight gain",
        "Megestrol acetate promotes adipose fat gain rather than functional lean skeletal muscle, while significantly increasing venous thromboembolism and mortality."
      ]
    ],
    "shortestValidSolution": "Low grip strength + low muscle mass + slow gait (<0.8 m/s) = Sarcopenia -> Progressive resistance training + high protein (1.2-1.5 g/kg/day).",
    "necessaryInference": "Identify sarcopenia by muscle mass and strength criteria and prescribe the gold-standard evidence-based therapy: progressive resistance exercise and dietary protein.",
    "strongestDistractor": "Intramuscular testosterone cypionate injections (200 mg every 2 weeks) monotherapy without exercise",
    "distractorExclusion": "Exogenous androgens without resistance training do not restore functional mobility and confer substantial cardiovascular and hematologic toxicities in the elderly.",
    "citation": "Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16-31. PMID: 30312372.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0520",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Diabetic Neuropathic Pain Gabapentinoid Renal Dosing vs Amitriptyline Avoidance",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman with a 20-year history of type 2 diabetes mellitus presents with persistent burning, tingling, and lancinating pain in both feet that has worsened over the past 6 months. The pain is worse at night, disrupting her sleep. She has no ulcers or skin breakdown. Her past medical history is notable for stage 3b chronic kidney disease (serum creatinine 1.8 mg/dL, estimated GFR 38 mL/min/1.73 m2), hypertension, and chronic angle-closure glaucoma. Physical examination reveals symmetric loss of vibration sense to the bilateral ankles and diminished pinprick sensation in a stocking distribution. Which of the following is the most appropriate first-line pharmacologic agent for managing this patient's neuropathic pain, taking into account her comorbidities?",
    "choices": [
      [
        "Oral gabapentin (initiating at a low dose of 100 mg at bedtime with dose titration adjusted for renal clearance) or duloxetine (starting at 30 mg daily)",
        "DIABETIC PERIPHERAL NEUROPATHIC PAIN is managed with first-line agents recommended by the American Diabetes Association (ADA) and American Academy of Neurology (AAN): (1) GABAPENTINOIDS (gabapentin, pregabalin): bind to the alpha-2-delta subunit of voltage-gated calcium channels, decreasing excitatory neurotransmitter release. Crucially, GABAPENTINOIDS ARE EXCRETED 100% UNCHANGED BY THE KIDNEYS. In patients with CKD (eGFR 38 mL/min), gabapentin MUST BE INITIATED AT A LOW DOSE (100 mg at bedtime) AND TITRATED CAUTIOUSLY TO PREVENT SEVERE TOXICITY (somnolence, myoclonus, ataxia, respiratory depression); (2) SNRIs (duloxetine): highly effective; in CKD, duloxetine can be started at 30 mg daily; (3) TRICYCLIC ANTIDEPRESSANTS (TCAs e.g. amitriptyline) ARE STRICTLY CONTRAINDICATED IN THIS PATIENT because of: (a) Beers Criteria warning in older adults (severe anticholinergic toxicity, orthostatic hypotension, falls, cardiac conduction block); and (b) Pre-existing ANGLE-CLOSURE GLAUCOMA (anticholinergic pupil dilation triggers acute pupillary block)."
      ],
      [
        "Oral amitriptyline (initiating at 50 mg at bedtime as preferred first-line therapy)",
        "Amitriptyline has potent anticholinergic actions that precipitate acute angle-closure glaucoma attacks and cause dangerous orthostatic hypotension and falls in elderly patients."
      ],
      [
        "Oral oxycodone immediate-release (10 mg every 4 hours around the clock)",
        "Opioids are not first-line for chronic neuropathic pain due to lack of long-term efficacy, hyperalgesia, dependency, and severe constipation in older adults."
      ],
      [
        "Subcutaneous sumatriptan (6 mg as needed) for neuropathic paroxysms",
        "Triptans are 5-HT1B/1D agonists used exclusively for acute migraine attacks; they have zero efficacy in peripheral diabetic neuropathy."
      ],
      [
        "Oral indomethacin (50 mg three times daily) combined with topical capsaicin",
        "Oral NSAIDs are completely ineffective for neuropathic pain and cause acute hemodynamically mediated kidney failure in stage 3b CKD."
      ]
    ],
    "shortestValidSolution": "Diabetic neuropathic pain + CKD 3b + Glaucoma = Avoid amitriptyline (glaucoma/falls) -> Initiate Gabapentin low dose (renal adjustment) or Duloxetine.",
    "necessaryInference": "Select first-line therapy for diabetic neuropathic pain while avoiding contraindicated tricyclics (Beers criteria, glaucoma) and adjusting gabapentinoids for renal impairment.",
    "strongestDistractor": "Oral amitriptyline (initiating at 50 mg at bedtime as preferred first-line therapy)",
    "distractorExclusion": "Amitriptyline's potent anticholinergic activity dilates the pupil, precipitating an acute ophthalmic emergency in pre-existing angle-closure glaucoma.",
    "citation": "Pop-Busui R, et al. Diabetic Neuropathy: A Position Statement by the American Diabetes Association. Diabetes Care. 2017;40(1):136-154. PMID: 27999003.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0521",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Severe Alzheimer Dementia Agitation Non-Pharmacologic Redirection",
    "provisionalDifficulty": 5,
    "stem": "An 83-year-old woman with severe Alzheimer disease residing in a specialized dementia care facility exhibits progressive behavioral disturbances. In the late afternoon and early evening ('sundowning'), she becomes restless, paces through hallways, enters other residents' rooms, and attempts to open locked exterior fire doors, stating repeatedly that she must 'go home to pick up my children from school.' When nursing assistants attempt to redirect her to her room or physically block her path, she becomes irritable, shouts, and pushes staff away. She has not struck anyone or caused physical injury. Vital signs, urinalysis, and physical examination are completely normal, with no evidence of pain, infection, or fecal impaction. The facility administrator requests a prescription for standing intramuscular haloperidol or oral risperidone to manage her wandering and exit-seeking behaviors. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Implement structured non-pharmacologic behavioral modifications (individualized sensory engagement, music therapy, scheduled late-afternoon activities, validating communication without arguing, and a secure wandering pathway)",
        "BEHAVIORAL AND PSYCHOLOGICAL SYMPTOMS OF DEMENTIA (BPSD)\u2014including wandering, exit-seeking, pacing, and evening restlessness (sundowning)\u2014are common manifestations of severe neurocognitive disorders. In the absence of acute physical danger or distressing psychosis, GUIDELINE CONSENSUS (American Psychiatric Association [APA] and American Geriatrics Society [AGS]) MANDATES THAT NON-PHARMACOLOGIC INTERVENTIONS ARE THE ABSOLUTE FIRST-LINE TREATMENT OF CHOICE. Effective strategies include: (1) VALIDATION AND REDIRECTION: never argue or attempt reality orientation (which escalates agitation); validate her emotional reality ('You must love your children so much; let's have tea and look at their pictures'); (2) STRUCTURED SENSORY ACTIVITIES: individualized music therapy, tactile engagement, and scheduled walking programs in a secure, enclosed wandering loop; (3) ENVIRONMENTAL MODIFICATIONS: covering exit doors with murals or curtains to reduce visual triggers, and maximizing daytime sunlight; (4) ANTIPSYCHOTIC RISKS: Both first- and second-generation antipsychotics carry an FDA BLACK BOX WARNING IN DEMENTIA (significantly increased risk of stroke, myocardial infarction, and all-cause mortality). Antipsychotics should NEVER be used for wandering, pacing, or mild agitation."
      ],
      [
        "Prescribe standing oral risperidone (2 mg twice daily) as first-line therapy for exit-seeking and wandering",
        "Antipsychotics are not approved for wandering or pacing; they carry an FDA black box warning for increased stroke and mortality in dementia."
      ],
      [
        "Administer intramuscular haloperidol (5 mg) and apply bilateral soft wrist restraints to her bed",
        "Chemical and physical restraints violate patient rights, accelerate functional deconditioning, and cause severe distress and mortality."
      ],
      [
        "Prescribe oral alprazolam (1 mg three times daily) to provide continuous daytime anxiolysis",
        "Benzodiazepines cause paradoxical disinhibition, daytime sedation, ataxia, respiratory depression, and dramatically increase fall injuries."
      ],
      [
        "Instruct the nursing staff to repeatedly reorient the patient by firmly reminding her that her children are grown adults and her home was sold",
        "Direct confrontation and reality orientation in severe dementia triggers intense anxiety, frustration, and catastrophic aggressive outbursts."
      ]
    ],
    "shortestValidSolution": "Wandering/sundowning in Alzheimer dementia without harm = Non-pharmacologic redirection (music, secure wandering path) -> Avoid antipsychotics (Black Box Warning).",
    "necessaryInference": "Prioritize structured non-pharmacologic behavioral interventions over antipsychotics and benzodiazepines for wandering and agitation in dementia.",
    "strongestDistractor": "Prescribe standing oral risperidone (2 mg twice daily) as first-line therapy for exit-seeking and wandering",
    "distractorExclusion": "Antipsychotics are ineffective for wandering, exacerbate fall risk, and carry an FDA black box warning for increased cardiovascular mortality in dementia.",
    "citation": "Reus VI, et al. The American Psychiatric Association Practice Guideline on the Use of Antipsychotics to Treat Agitation or Psychosis in Patients With Dementia. Am J Psychiatry. 2016;173(5):543-546. PMID: 27133429.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0522",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Palliative Sedation in Refractory Terminal Distress",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with terminal, unresectable cholangiocarcinoma with extensive peritoneal carcinomatosis and malignant bowel obstruction is admitted to an inpatient palliative care hospice unit. His prognosis is estimated at days to hours. Over the past 48 hours, he has experienced agonizing, refractory pain, severe terminal dyspnea with air hunger, and intractable delirium with agitated thrashing. He has failed maximum guideline-directed therapies: continuous intravenous hydromorphone PCA at high doses, intravenous haloperidol, continuous glycopyrrolate, and supplemental oxygen. A multidisciplinary palliative care team evaluation confirms that his physical distress is truly refractory to all conventional disease- and symptom-specific interventions. The patient previously expressed a clear desire for comfortable end-of-life care, and his designated healthcare proxy requests comfort-focused intervention. Which of the following is the most appropriate management approach for this patient's refractory suffering?",
    "choices": [
      [
        "Initiate continuous palliative sedation using a titrated intravenous midazolam (or propofol) infusion, with the explicit goal of relieving refractory distress by reducing consciousness to a comfortable level",
        "PALLIATIVE SEDATION (terminal sedation) is an established, ethically recognized palliative intervention defined as the monitored, proportional use of non-opioid sedative medications to reduce the level of consciousness to the extent necessary to relieve one or more REFRACTORY SYMPTOMS in patients with advanced terminal illness. Ethical and clinical criteria: (1) The patient has an advanced terminal illness with expected prognosis of hours to days; (2) The symptom (e.g. intractable pain, severe suffocation/dyspnea, agitated delirium) is truly REFRACTORY (meaning all other symptom-directed interventions have failed or caused intolerable side effects); (3) Explicit informed consent is obtained from the patient or surrogate decision-maker; and (4) THE PROPORTIONALITY PRINCIPLE (Doctrine of Double Effect): The explicit clinical intention is the RELIEF OF SUFFERING through sedation, NOT the hastening of death. The standard first-line agent is a TITRATED INTRAVENOUS INFUSION OF MIDAZOLAM (a short-acting benzodiazepine) or propofol, adjusted strictly to the minimum depth of sedation necessary to achieve comfort."
      ],
      [
        "Administer a rapid lethal bolus of intravenous potassium chloride to terminate suffering humanely",
        "Direct administration of lethal doses of potassium chloride is active euthanasia, which is illegal, unethical, and fundamentally prohibited in medicine."
      ],
      [
        "Discontinue all opioid infusions and sedatives to restore full mental alertness for family interactions",
        "Abruptly stopping opioids and sedatives in a dying patient with malignant obstruction precipitates agonizing pain crisis, suffocation, and withdrawal."
      ],
      [
        "Transfer the patient immediately to the intensive care unit for endotracheal intubation and mechanical ventilation",
        "Mechanical ventilation in a dying terminal cancer patient with multi-organ failure contradicts established goals of care and causes futile prolongation of death."
      ],
      [
        "Withhold all further pharmacological interventions and maintain observation without medication changes",
        "Passive observation without symptom control violates core medical ethics; refractory distress mandates active palliative sedation to achieve comfort."
      ]
    ],
    "shortestValidSolution": "Refractory agony/dyspnea in terminal cancer failing maximum therapy = Palliative sedation (titrated IV midazolam infusion) to relieve suffering.",
    "necessaryInference": "Apply ethical and clinical principles of palliative sedation: initiate proportional sedative infusion to relieve truly refractory terminal suffering.",
    "strongestDistractor": "Administer a rapid lethal bolus of intravenous potassium chloride to terminate suffering humanely",
    "distractorExclusion": "Administering a lethal agent (potassium chloride) with intent to cause death constitutes active euthanasia, distinguishing it fundamentally from proportional palliative sedation.",
    "citation": "Cherny NI, Radbruch L. European Association for Palliative Care (EAPC) recommended framework for palliative sedation. Palliat Med. 2009;23(7):581-593. PMID: 19858276.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0523",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Chronic Opioid Stewardship Multimodal Analgesia Avoid Benzos",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man presents to his primary care physician to establish care. He has a 10-year history of chronic axial lumbar spondylosis and facet arthropathy. He currently takes oral oxycodone 20 mg three times daily (total 60 mg/day; approximately 90 Morphine Milligram Equivalents [MME]/day) and oral diazepam 10 mg at bedtime for anxiety and muscle spasms, prescribed by a physician who recently retired. He has had no falls or overdoses. He asks for refills of both medications. Physical examination reveals lumbar paraspinal tenderness with no focal motor weakness, normal sensation, and symmetric reflexes. He ambulates without assistive devices. Prior to discussing long-term management, the physician checks the state Prescription Drug Monitoring Program (PDMP) database, which confirms no duplicate prescriptions. Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Counsel the patient on the substantial risk of fatal respiratory depression from concurrent opioid and benzodiazepine therapy, initiate a gradual, structured taper of diazepam, and optimize multimodal non-opioid analgesia",
        "CHRONIC PAIN MANAGEMENT and OPIOID STEWARDSHIP guidelines from the CDC and VA/DoD emphasize key safety principles: (1) AVOID CONCURRENT PRESCRIBING OF OPIOIDS AND BENZODIAZEPINES: Concurrent use of opioids and benzodiazepines causes synergistic central nervous system and respiratory depression, resulting in a 4- to 10-FOLD INCREASED RISK OF FATAL OVERDOSE. Whenever patients present on this combination, the physician should prioritize TAPERING AND DISCONTINUING THE BENZODIAZEPINE (diazepam should be tapered gradually over weeks to months to avoid life-threatening benzodiazepine withdrawal seizures); (2) HIGH MME SURVEILLANCE: Doses >= 50-90 MME/day warrant careful reassessment of individual risk-benefit ratios and consideration of co-prescribing naloxone; and (3) MULTIMODAL NON-OPIOID ANALGESIA: Transitioning chronic musculoskeletal back pain toward evidence-based non-pharmacologic (physical therapy, core strengthening) and non-opioid pharmacologic therapies (topical NSAIDs, duloxetine). Abrupt cessation of opioids without tapering is contraindicated."
      ],
      [
        "Immediately double the dose of both oxycodone and diazepam to achieve complete pain eradication",
        "Escalating concurrent high-dose opioids and benzodiazepines drastically increases fatal overdose and respiratory arrest."
      ],
      [
        "Abruptly discontinue oxycodone today without tapering and refer to an emergency department for opioid withdrawal",
        "Abrupt opioid cessation precipitates severe acute opioid withdrawal, loss of therapeutic alliance, and drives patients to illicit fentanyl."
      ],
      [
        "Maintain both medications at current doses indefinitely since the patient has not had an overdose event yet",
        "A lack of past overdose does not protect against future synergistic fatal respiratory arrest from concurrent opioid-benzodiazepine use."
      ],
      [
        "Switch diazepam to oral alprazolam and replace oxycodone with high-dose intravenous hydromorphone",
        "Alprazolam has high abuse liability and rapid pharmacokinetics that worsen respiratory depression, while IV opioids are contraindicated for chronic outpatient back pain."
      ]
    ],
    "shortestValidSolution": "Concurrent chronic opioid + benzodiazepine = High risk of fatal respiratory depression -> Gradual taper of diazepam + optimize non-opioid multimodal therapies.",
    "necessaryInference": "Apply CDC chronic opioid stewardship guidelines: systematically eliminate concurrent benzodiazepine use through structured tapering to prevent fatal overdose.",
    "strongestDistractor": "Abruptly discontinue oxycodone today without tapering and refer to an emergency department for opioid withdrawal",
    "distractorExclusion": "Abrupt opioid cessation is dangerous, violates guidelines, triggers acute withdrawal, and destabilizes patients; gradual tapering is required.",
    "citation": "Dowell D, et al. CDC Clinical Practice Guideline for Prescribing Opioids for Pain - United States, 2022. MMWR Recomm Rep. 2022;71(3):1-95. PMID: 36327391.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0524",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hospice Eligibility End-Stage Heart Failure NYHA Class IV",
    "provisionalDifficulty": 5,
    "stem": "A 78-year-old man with ischemic cardiomyopathy and severe heart failure with reduced ejection fraction (left ventricular ejection fraction 15%) is admitted to the hospital for the fourth time in 3 months with acute decompensated heart failure. He has severe dyspnea at rest, orthopnea, and severe fatigue even while dressing or speaking in sentences (NYHA Functional Class IV). His optimal medical therapy has been maximized: sacubitril-valsartan was discontinued 2 months ago due to refractory symptomatic hypotension (systolic BP 82-88 mm Hg); he cannot tolerate carvedilol due to bradycardia and hypotension; and he is refractory to high-dose oral furosemide and metolazone, requiring continuous intravenous furosemide infusion. He is not a candidate for left ventricular assist device (LVAD) or cardiac transplantation due to severe vascular dementia and stage 4 CKD. The patient states: 'I am so tired of coming back to the hospital every 2 weeks. I just want to stay in my own bed, breathe without gasping, and spend time with my grandchildren.' Which of the following is the most appropriate next step in care?",
    "choices": [
      [
        "Initiate a goals-of-care discussion regarding transition to comprehensive hospice care focused on home symptom palliation (including low-dose opioids for dyspnea and inotrope support if needed)",
        "This patient meets clinical criteria for END-STAGE HEART FAILURE (ACC/AHA Stage D, NYHA Class IV) with a life expectancy estimated at <6 months: (1) Severe symptoms at rest despite maximized medical therapy; (2) Inability to tolerate neurohormonal blockers (ACEI/ARB/ARNI, beta-blockers) due to symptomatic hypotension; (3) Diuretic resistance requiring recurrent hospitalizations; and (4) Ineligibility for advanced therapies (transplant or LVAD). According to ACC/AHA and palliative care consensus guidelines, when disease-modifying therapies are exhausted and the patient's goal shifts from longevity to symptom relief and staying at home, TRANSITION TO HOSPICE CARE IS HIGHLY APPROPRIATE. Hospice provides interdisciplinary home support, emergency nursing access, and evidence-based symptom relief: (a) LOW-DOSE OPIOIDS (oral morphine) are the standard first-line therapy to relieve refractory cardiac dyspnea and air hunger (by decreasing central perception of breathlessness and reducing sympathetic vascular tone); (b) Sublingual nitroglycerin; and (c) Inpatient or home palliative inotropic infusions if necessary for symptom comfort."
      ],
      [
        "Attempt emergency placement of a total artificial heart under experimental compassionate use protocols",
        "Experimental mechanical heart surgery in an 81-year-old with dementia and stage 4 CKD carries prohibitive perioperative mortality and violates patient preferences."
      ],
      [
        "Perform an urgent biventricular implantable cardioverter-defibrillator (ICD) lead revision to improve hemodynamics",
        "Invasive electrophysiologic procedures do not reverse terminal cardiogenic shock or diuretic resistance, and ICD shocks cause agonizing end-of-life distress."
      ],
      [
        "Discharge home on high-dose oral hydralazine and nitrates with instructions to call 911 if dyspnea recurs",
        "Discharging an end-stage patient without home palliative/hospice support perpetuates the revolving door of emergency readmissions and acute suffering."
      ],
      [
        "Initiate hemodialysis via a temporary catheter as a bridge to potential heart transplantation",
        "Hemodialysis does not reverse terminal cardiomyopathy and does not make a patient with severe vascular dementia an eligible transplant candidate."
      ]
    ],
    "shortestValidSolution": "Stage D NYHA IV heart failure + refractory to GDMT + 4 hospitalizations in 3 months + wants to die at home = Transition to Hospice care (low-dose morphine for dyspnea).",
    "necessaryInference": "Identify hospice eligibility criteria in Stage D heart failure and align management with patient goals of comfort and home symptom palliation.",
    "strongestDistractor": "Perform an urgent biventricular implantable cardioverter-defibrillator (ICD) lead revision to improve hemodynamics",
    "distractorExclusion": "Electrophysiologic interventions do not reverse terminal end-stage heart failure, and un-deactivated ICDs deliver painful shocks during the dying process.",
    "citation": "Heidenreich PA, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. J Am Coll Cardiol. 2022;79(17):e263-e421. PMID: 35379503.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0525",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "SIADH Euvolemic Hyponatremia Fluid Restriction and Osmotic Demyelination",
    "provisionalDifficulty": 5,
    "stem": "An 80-year-old woman is admitted to the hospital with mild lethargy and gait unsteadiness. Her medical history includes major depressive disorder, for which she was started on sertraline (an SSRI) 3 weeks ago. Vital signs show: blood pressure 126/78 mm Hg without orthostasis, pulse 72/min, and respirations 14/min. Physical examination reveals an alert, mildly slow woman with moist mucous membranes, normal skin turgor, no jugular venous distension, and no peripheral edema (clinical euvolemia). Laboratory studies show: serum sodium 122 mEq/L (normal 135-145 mEq/L), serum potassium 4.1 mEq/L, chloride 88 mEq/L, bicarbonate 24 mEq/L, BUN 8 mg/dL, and serum creatinine 0.7 mg/dL. Measured serum osmolality is 252 mOsm/kg (hypoosmolar; normal 275-295 mOsm/kg). Urine studies reveal: urine osmolality 480 mOsm/kg (inappropriately concentrated; > 100 mOsm/kg) and urine sodium 52 mEq/L (> 40 mEq/L). TSH and morning cortisol levels are completely normal. Which of the following is the most appropriate initial management approach, including the maximum safe rate of sodium correction?",
    "choices": [
      [
        "Discontinue sertraline, implement strict fluid restriction (800 to 1,000 mL/day), and ensure the rate of serum sodium correction does not exceed 8 mEq/L in any 24-hour period to prevent osmotic demyelination syndrome",
        "This patient has the SYNDROME OF INAPPROPRIATE ANTIDIURETIC HORMONE SECRETION (SIADH), triggered by an SSRI (sertraline). Diagnostic criteria for SIADH: (1) HYPOTONIC HYPONATREMIA (serum osmolality < 275 mOsm/kg); (2) CLINICAL EUVOLEMIA (no signs of volume depletion or volume overload); (3) INAPPROPRIATELY CONCENTRATED URINE (urine osmolality > 100 mOsm/kg, usually >300 mOsm/kg); (4) ELEVATED URINE SODIUM (urine Na > 30-40 mEq/L reflecting normal dietary intake and volume expansion-induced natriuresis); and (5) NORMAL THYROID AND ADRENAL FUNCTION. Management: (a) ELIMINATE REVERSIBLE CAUSES (discontinue sertraline); (b) FIRST-LINE THERAPY: FLUID RESTRICTION (typically 800-1,000 mL/day); (c) RATE OF CORRECTION: In chronic hyponatremia (>48 hours), brain cells adapt by extruding organic osmoles. OVERLY RAPID CORRECTION CAUSES OSMOTIC DEMYELINATION SYNDROME (central pontine myelinolysis -> flaccid paralysis, dysarthria, 'locked-in' syndrome). Guidelines mandate that SODIUM CORRECTION MUST NEVER EXCEED 8 mEq/L IN ANY 24-HOUR PERIOD (or 4-6 mEq/L/day in high-risk patients)."
      ],
      [
        "Administer rapid intravenous 3% hypertonic saline infusion (150 mL bolus) to raise serum sodium by 15 mEq/L within 6 hours",
        "Rapid correction (>8 mEq/L in 24 hours) causes catastrophic osmotic demyelination syndrome (central pontine myelinolysis); 3% saline is reserved for acute severe seizures/coma."
      ],
      [
        "Administer 2 liters of intravenous 0.9% normal saline over 4 hours to expand intravascular volume",
        "Normal saline in SIADH is ineffective and actually WORSENS hyponatremia: the kidney excretes sodium in concentrated urine while retaining free water."
      ],
      [
        "Initiate high-dose intravenous desmopressin (DDAVP) to stimulate renal water excretion",
        "Desmopressin is a synthetic ADH agonist that promotes water retention, which would catastrophically worsen hypotonic hyponatremia."
      ],
      [
        "Prescribe oral spironolactone (100 mg daily) combined with a high-water intake goal > 3 L/day",
        "Spironolactone impairs urinary sodium retention and high water intake causes acute, severe dilutional cerebral edema and herniation."
      ]
    ],
    "shortestValidSolution": "SSRI + euvolemic hypotonic hyponatremia + urine osm 480 + urine Na 52 = SIADH -> Stop SSRI + fluid restriction + correct Na < 8 mEq/L in 24 hrs (prevents ODS).",
    "necessaryInference": "Identify SIADH, select fluid restriction as first-line therapy, and adhere to strict sodium correction limits (<8 mEq/L in 24 hours) to prevent osmotic demyelination.",
    "strongestDistractor": "Administer 2 liters of intravenous 0.9% normal saline over 4 hours to expand intravascular volume",
    "distractorExclusion": "In SIADH, infusing isotonic saline paradoxically worsens hyponatremia because the hyperactive ADH concentrates urine (excreting Na) while retaining free water.",
    "citation": "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47. PMID: 24569125.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 3 clinical management and geriatrics/palliative care item requiring multi-system assessment and patient-centered decision making.",
      "distractorExclusionNotes": "Distractors feature inappropriate psychotropic prescribing, premature tube feedings, or dangerous drug interactions in elderly multimorbid patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
