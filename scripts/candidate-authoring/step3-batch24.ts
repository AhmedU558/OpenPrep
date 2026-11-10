import { CandidateSpec } from './types';

export const step3Batch24: CandidateSpec[] = [
  {
    "code": "op-c-s3-0576",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Medication Reconciliation Discharge Transition and Discrepancies",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman with a history of heart failure with reduced ejection fraction, atrial fibrillation, and stage 3 chronic kidney disease is being discharged from the hospital following treatment for acute decompensated heart failure. Her pre-admission outpatient regimen included: sacubitril-valsartan 24/26 mg twice daily, metoprolol succinate 100 mg daily, apixaban 5 mg twice daily, and torsemide 20 mg daily. During the hospitalization, her torsemide was temporarily increased to intravenous furosemide 80 mg twice daily, and potassium chloride 20 mEq daily was added. On the day of discharge, the intern writes discharge prescriptions that inadvertently omit apixaban and include both oral torsemide 20 mg daily AND oral furosemide 40 mg twice daily. The hospital clinical pharmacist identifies these discrepancies during the structured discharge review. Which of the following quality improvement processes is specifically designed to systematically prevent these errors across transitions of care?",
    "choices": [
      [
        "Formal multidisciplinary medication reconciliation comparing the discharge orders against both the pre-admission home medications and inpatient modifications",
        "MEDICATION RECONCILIATION is a formal, standardized patient safety process defined by The Joint Commission as the process of comparing a patient's medication orders to all of the medications that the patient has been taking (including prescription drugs, over-the-counter products, and herbal supplements) at EVERY CARE TRANSITION (admission, transfer between units, and hospital discharge). Care transitions represent high-risk vulnerabilities where >50% of all medication errors and up to 20% of post-discharge adverse drug events occur. Common transitional errors include: (1) Unintended omissions of vital chronic medications (e.g. omitting apixaban, risking stroke); (2) Therapeutic duplications (e.g. prescribing two different loop diuretics simultaneously); (3) Unintentional continuation of temporary inpatient medications; and (4) Incorrect dosages or frequencies. A standardized medication reconciliation process (ideally pharmacist-led or multidisciplinary) involves: verifying the best possible medication history (BPMH), clarifying discrepancies with the prescriber, and providing an updated, reconciled written medication list with counseling to the patient and primary care physician."
      ],
      [
        "Instructing the patient to bring all pill bottles home and take whatever medications feel most effective",
        "Leaving medication decisions to an elderly patient without guidance guarantees duplication toxicity and life-threatening omissions."
      ],
      [
        "Discharging the patient with only her pre-admission medication list and cancelling all inpatient updates",
        "Cancelling all inpatient changes ignores necessary diuretic adjustments and therapeutic optimizations made during the hospitalization."
      ],
      [
        "Conducting an immediate disciplinary suspension of the intern physician for gross medical incompetence",
        "Individual punitive action fails to address underlying systemic flaws in care transitions and creates a culture of error concealment."
      ],
      [
        "Eliminating all electronic prescribing interfaces and reverting exclusively to handwritten paper prescriptions",
        "Handwritten prescriptions drastically increase medication dosing and legibility errors compared to computerized provider order entry with clinical decision support."
      ]
    ],
    "shortestValidSolution": "Discharge transition with omitted apixaban and duplicate diuretics = Formal multidisciplinary medication reconciliation across transitions of care.",
    "necessaryInference": "Identify formal medication reconciliation as the gold-standard patient safety process to prevent omissions and duplications across care transitions.",
    "strongestDistractor": "Conducting an immediate disciplinary suspension of the intern physician for gross medical incompetence",
    "distractorExclusion": "Blaming individuals rather than addressing vulnerable transitional systems violates modern patient safety principles and fails to prevent future errors.",
    "citation": "The Joint Commission. National Patient Safety Goals: Goal 3: Improve the safety of using medications. 2022.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0577",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Root Cause Analysis System-Level Process Investigation",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man in the intensive care unit accidentally receives a fatal intravenous bolus of concentrated potassium chloride instead of 0.9% normal saline. The error occurred when an unlabelled syringe containing concentrated potassium chloride\u2014drawn up 2 hours earlier by a nurse for a different patient who was urgently transferred\u2014was left on top of the medication preparation counter and picked up by a rushed floating nurse responding to a fluid bolus order. Following this sentinel event, the hospital leadership convenes a multidisciplinary committee to evaluate the tragedy. Which of the following principles is the defining characteristic of a ROOT CAUSE ANALYSIS (RCA)?",
    "choices": [
      [
        "A structured, retrospective systems-focused investigation designed to identify underlying latent process vulnerabilities and system design flaws without focusing on individual blame",
        "A ROOT CAUSE ANALYSIS (RCA) is a structured, standardized, RETROSPECTIVE method used by healthcare organizations following a SENTINEL EVENT (an unexpected occurrence involving death or serious physical/psychological injury) to identify the fundamental systemic weaknesses that allowed the error to occur. Key principles established by The Joint Commission and the Institute for Healthcare Improvement (IHI): (1) SYSTEMS-FOCUSED, NOT INDIVIDUAL-FOCUSED: Moving beyond individual blame ('who made the mistake?') to examine LATENT SYSTEM FLAWS ('why did the system allow this mistake to happen?'); (2) MULTIDISCIPLINARY: Involves nurses, pharmacists, physicians, risk managers, and human factors engineers; (3) PROMOTES A 'JUST CULTURE': Distinguishes human error (inadvertent slip), at-risk behavior (cutting corners), and reckless behavior; (4) ACTION-ORIENTED (RCA2): Formulates strong, sustainable systemic interventions (forcing functions, standardized storage, pre-mixed solutions, automated barcoding) rather than weak interventions (warning memos, retraining). In contrast: FAILURE MODE AND EFFECTS ANALYSIS (FMEA) is a PROSPECTIVE tool used BEFORE an error occurs to anticipate potential failure modes."
      ],
      [
        "A prospective predictive hazard assessment conducted prior to implementing any new hospital policy",
        "Prospective analysis is Failure Mode and Effects Analysis (FMEA); Root Cause Analysis is strictly a retrospective investigation after an event."
      ],
      [
        "A confidential peer-review proceeding focused on determining civil liability and financial malpractice damages",
        "RCA is a quality and safety learning process, not a legal liability or financial dispute proceeding."
      ],
      [
        "An administrative tribunal with the sole objective of assigning personal fault and terminating the responsible employee",
        "Punitive individual termination overlooks latent system defects, ensuring the same tragic error will recur with another clinician."
      ],
      [
        "A random chart audit of unrelated patient encounters to evaluate billing code compliance",
        "RCA focuses deeply on the specific sentinel event and its causal pathway, not random financial coding audits."
      ]
    ],
    "shortestValidSolution": "Fatal medication sentinel event = Root Cause Analysis (RCA) -> Retrospective, system-focused investigation of latent flaws without individual blame.",
    "necessaryInference": "Distinguish Root Cause Analysis (retrospective, systems-focused, non-punitive) from prospective FMEA and punitive individual blame.",
    "strongestDistractor": "A prospective predictive hazard assessment conducted prior to implementing any new hospital policy",
    "distractorExclusion": "Prospective hazard assessment defines Failure Mode and Effects Analysis (FMEA); Root Cause Analysis is fundamentally retrospective.",
    "citation": "National Patient Safety Foundation. RCA2: Improving Root Cause Analyses and Actions to Prevent Harm. 2015. https://www.ihi.org/resources/tools/rca2-improving-root-cause-analyses-and-actions-prevent-harm",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0578",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Standardized Handoff Communication I-PASS Framework",
    "provisionalDifficulty": 5,
    "stem": "A major academic medical center observes an increased rate of preventable adverse events and delayed diagnostic follow-ups occurring during evening cross-cover shifts. Qualitative interviews with resident physicians reveal that sign-outs are unstructured, rushed, and frequently omit critical pending lab results and contingencies. The clinical quality committee decides to implement the standardized I-PASS handoff communication framework across all inpatient units. Which of the following correctly pairs each component of the I-PASS mnemonic with its clinical definition?",
    "choices": [
      [
        "I: Illness severity (stable, watcher, unstable); P: Patient summary; A: Action list (to-do items with timing); S: Situation awareness and contingency planning; S: Synthesis by receiver (read-back and question opportunity)",
        "The I-PASS HANDOFF STUDY (Starmer et al., NEJM 2014) demonstrated that implementing a standardized, structured handoff bundle produced a 23% RELATIVE REDUCTION IN MEDICAL ERRORS and a 30% REDUCTION IN PREVENTABLE ADVERSE EVENTS without increasing handoff time. The evidence-based I-PASS mnemonic comprises: (1) I - ILLNESS SEVERITY: Categorizing the patient as 'Stable', 'Watcher' (high risk for acute decompensation), or 'Unstable'; (2) P - PATIENT SUMMARY: Structured clinical narrative, admission diagnosis, hospital course, and current status; (3) A - ACTION LIST: Specific to-do items, tasks to follow up (e.g. pending cultures, morning labs), with designated timing and clear responsibility; (4) S - SITUATION AWARENESS AND CONTINGENCY PLANNING: Explicit 'If-Then' statements planning for potential nocturnal events ('If blood pressure drops below 90, give 500 mL bolus and call cardiology'); and (5) S - SYNTHESIS BY RECEIVER: The incoming clinician summarizes key elements, asks clarifying questions, and verbally reads back action items to confirm accurate shared mental model."
      ],
      [
        "I: Insurance status; P: Primary care physician; A: Advance directives; S: Social work needs; S: Signature of attending",
        "I-PASS is a clinical patient-safety handoff tool, not an administrative billing or insurance transfer checklist."
      ],
      [
        "I: Infection control; P: Pharmacy reconciliation; A: Allergy list; S: Sepsis score; S: Sedation score",
        "While allergies and infection are important, I-PASS specifically structures illness severity, actions, and contingencies."
      ],
      [
        "I: Immediate discharge; P: Pain management; A: Ambulatory status; S: Surgical dressing; S: Suture removal date",
        "This describes surgical discharge instructions, not an inpatient multi-specialty clinical handoff system."
      ],
      [
        "I: Intravenous access; P: Pulse oximetry; A: Arterial line; S: Suctioning frequency; S: Sedation hold",
        "These are bedside ICU nursing monitoring parameters, not the validated physician handoff communication framework."
      ]
    ],
    "shortestValidSolution": "Unstructured cross-cover signouts causing errors = Standardized I-PASS bundle -> Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver.",
    "necessaryInference": "Identify the components of the validated I-PASS handoff communication bundle and recognize its proven reduction in preventable medical errors.",
    "strongestDistractor": "I: Insurance status; P: Primary care physician; A: Advance directives; S: Social work needs; S: Signature of attending",
    "distractorExclusion": "Conflates administrative demographic fields with the validated clinical safety mnemonic (Illness severity, Patient summary, Action list, Situation awareness, Synthesis).",
    "citation": "Starmer AJ, et al. Changes in medical-error rates after the implementation of a multifaceted handoff program (I-PASS study). N Engl J Med. 2014;371(19):1803-1812. PMID: 25470695.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0579",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Cognitive Biases Anchoring and Premature Closure in PE",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman with a history of chronic obstructive pulmonary disease (COPD) is admitted to the hospital with acute shortness of breath and wheezing, diagnosed with an acute COPD exacerbation. She is initiated on nebulized albuterol, oral prednisone, and empiric antibiotics. On hospital day 2, she develops worsening dyspnea, pleuritic right-sided chest pain, tachycardia (heart rate 118/min), and new hypoxemia requiring 4 L/min oxygen. The admitting team assumes her deterioration represents refractory bronchospasm and increases her nebulizers and steroids. The attending physician notes: 'She has severe COPD, so this must be a steroid-refractory COPD flare.' Twelve hours later, the patient collapses in cardiac arrest. Post-mortem examination reveals a massive saddle pulmonary embolism. Which of the following cognitive biases most directly contributed to this diagnostic error?",
    "choices": [
      [
        "Anchoring bias (focusing prematurely on the initial diagnosis of COPD exacerbation and failing to adjust the diagnostic impression despite new contradictory clinical findings) combined with premature closure",
        "DIAGNOSTIC ERRORS account for a large proportion of preventable inpatient morbidity and mortality, frequently driven by COGNITIVE BIASES and heuristic shortcuts: (1) ANCHORING BIAS: The tendency to fixate on an initial piece of information or early provisional diagnosis (here, 'COPD exacerbation'), while failing to adjust or re-evaluate the diagnostic hypothesis when new, contradictory clinical evidence emerges (acute pleuritic chest pain, sinus tachycardia, and sudden worsening hypoxemia); (2) PREMATURE CLOSURE: The tendency to accept a diagnosis before it has been fully verified, ending the diagnostic search prematurely; (3) AVAILABILITY BIAS: The tendency to judge a diagnosis as more likely based on how easily recent or memorable examples come to mind; (4) CONFIRMATION BIAS: The selective search for or over-weighting of evidence that supports a preconception, while disregarding conflicting data; and (5) FRAMING EFFECT: Being influenced by how information is presented or framed by others (e.g. ED triage note). Diagnostic metacognition ('diagnostic timeouts') and considering 'What else could this be?' prevent anchoring errors."
      ],
      [
        "Availability heuristic driven by recently managing three consecutive cases of pulmonary embolism",
        "Availability bias would make the clinician suspect pulmonary embolism excessively; here, the clinician completely overlooked PE."
      ],
      [
        "Framing effect caused by misleading emergency department radiology reports",
        "The error was internal physician fixation on her underlying COPD history, not misleading radiographic descriptions."
      ],
      [
        "Blind obedience bias secondary to nursing refusal to administer anticoagulant medications",
        "The diagnostic failure was clinician anchoring and premature closure, not nursing insubordination."
      ],
      [
        "Hindsight bias occurring after the autopsy findings were communicated",
        "Hindsight bias is the retrospective belief that an event was predictable after it occurred; the diagnostic error occurred during active clinical care."
      ]
    ],
    "shortestValidSolution": "Clinician fixates on COPD history and ignores acute pleuritic pain/tachycardia until fatal PE = Anchoring bias and Premature closure.",
    "necessaryInference": "Recognize common cognitive biases in medicine: identify anchoring bias and premature closure as drivers of missed catastrophic diagnoses.",
    "strongestDistractor": "Availability heuristic driven by recently managing three consecutive cases of pulmonary embolism",
    "distractorExclusion": "Availability bias would cause over-diagnosis of pulmonary embolism, the exact opposite of what occurred in this patient.",
    "citation": "Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med. 2003;78(8):775-780. PMID: 12915363.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0580",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "CLABSI Prevention Bundle Subclavian Site and Chlorhexidine",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old critically ill man requires central venous catheter placement in the intensive care unit for vasopressor infusion. He has no chest trauma, coagulopathy, or tracheostomy. The critical care team reviews the evidence-based CENTRAL LINE-ASSOCIATED BLOODSTREAM INFECTION (CLABSI) PREVENTION BUNDLE (Keystone ICU project) prior to the procedure. Which of the following combinations of insertion practices is associated with the lowest risk of catheter-related bloodstream infection?",
    "choices": [
      [
        "Strict hand hygiene, selection of the subclavian vein over the femoral vein as the preferred anatomical insertion site, chlorhexidine skin antisepsis with adequate drying, and maximal sterile barrier precautions (cap, mask, sterile gown, sterile gloves, and full-body sterile drape)",
        "CENTRAL LINE-ASSOCIATED BLOODSTREAM INFECTIONS (CLABSIs) are major causes of hospital-acquired morbidity, prolonged ICU stays, and mortality. The landmark KEYSTONE ICU PROJECT (Pronovost et al., NEJM 2006) proved that implementing a structured 5-point evidence-based insertion bundle VIRTUALLY ELIMINATES CLABSIs (reducing infection rates by >66% across entire hospital systems). Core bundle components: (1) STRICT HAND HYGIENE before catheter manipulation; (2) MAXIMAL STERILE BARRIER PRECAUTIONS: The inserter must wear a surgical cap, mask, sterile gown, and sterile gloves; the patient must be covered from head to toe with a FULL-BODY STERILE DRAPE; (3) CHLORHEXIDINE SKIN ANTISEPSIS: >0.5% chlorhexidine gluconate in 70% alcohol applied with friction and ALLOWED TO COMPLETELY AIR-DRY (superior to povidone-iodine); (4) OPTIMAL SITE SELECTION: The SUBCLAVIAN VEIN has the LOWEST INFECTION RISK. The FEMORAL VEIN HAS THE HIGHEST INFECTION AND THROMBOSIS RISKS and should be avoided in adults; (5) DAILY REVIEW OF LINE NECESSITY with prompt removal when no longer required."
      ],
      [
        "Selection of the femoral vein as the primary site, rapid povidone-iodine swab without drying, and sterile gloves without a sterile drape",
        "The femoral vein has the highest CLABSI and DVT rate; povidone-iodine is inferior to chlorhexidine, and omitting drapes violates sterile barriers."
      ],
      [
        "Routine prophylactic systemic intravenous vancomycin infusion administered 30 minutes prior to catheter insertion",
        "Prophylactic systemic antibiotics do not prevent CLABSI and breed multi-drug resistant pathogens (VRE); strict insertion technique is required."
      ],
      [
        "Routine scheduled catheter exchange over a guidewire every 7 days regardless of clinical infection signs",
        "Routine guidewire exchanges increase bacteremia and mechanical vessel injury; lines should remain in place and be removed when unneeded."
      ],
      [
        "Application of topical antibiotic ointment containing polymyxin and bacitracin to the insertion site under gauze dressings",
        "Topical antibiotic ointments promote fungal colonization and antimicrobial resistance; chlorhexidine-impregnated sponges are preferred."
      ]
    ],
    "shortestValidSolution": "Central line insertion in ICU = CLABSI prevention bundle -> Subclavian site preferred (femoral highest risk) + Chlorhexidine + Maximal sterile barriers.",
    "necessaryInference": "Apply the CDC/Keystone CLABSI prevention bundle: select subclavian site over femoral, utilize chlorhexidine antisepsis, and maintain maximal sterile barriers.",
    "strongestDistractor": "Selection of the femoral vein as the primary site, rapid povidone-iodine swab without drying, and sterile gloves without a sterile drape",
    "distractorExclusion": "The femoral vein is the most contaminated central site with the highest infection risk; subclavian insertion with maximal barrier drapes is standard.",
    "citation": "Pronovost P, et al. An intervention to decrease catheter-related bloodstream infections in the ICU (Keystone Project). N Engl J Med. 2006;355(26):2725-2732. PMID: 17192537.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0581",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "CAUTI Stewardship Asymptomatic Bacteriuria Catheter Removal",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman admitted to the medical ward 4 days ago for acute decompensated heart failure is ready for discharge. An indwelling Foley catheter was placed on admission to monitor hourly urine output during intravenous loop diuretic therapy; she has been clinically euvolemic on oral diuretics for 48 hours. She has no fever, suprapubic pain, chills, or flank pain. Vital signs are normal. A routine urinalysis and urine culture sent erroneously by a nursing protocol demonstrate: 25-50 WBCs/hpf and >100,000 CFU/mL of multidrug-resistant Klebsiella pneumoniae sensitive only to meropenem and colistin. The resident physician considers initiating intravenous meropenem. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Remove the indwelling urinary catheter immediately and withhold all antimicrobial therapy, as this represents catheter-associated asymptomatic bacteriuria",
        "CATHETER-ASSOCIATED ASYMPTOMATIC BACTERIURIA (CA-ASB) is defined as the presence of >= 100,000 CFU/mL of bacteria in a catheterized urine specimen in the ABSENCE of clinical signs or symptoms referable to urinary tract infection (fever, rigors, altered mental status, flank pain, or leukocytosis). Pyuria (WBCs in urine) is a universal, non-specific inflammatory reaction to the foreign body presence of the catheter and DOES NOT INDICATE INFECTION. According to Infectious Diseases Society of America (IDSA) guidelines: (1) ASYMPTOMATIC BACTERIURIA IN CATHETERIZED PATIENTS SHOULD NEVER BE TREATED WITH ANTIBIOTICS (exceptions: pregnant women or prior to invasive urologic mucosal procedures); (2) Treating CA-ASB does NOT prevent future symptomatic CAUTI, does NOT improve outcomes, and causes significant harm by selecting for ultra-resistant nosocomial pathogens (such as carbapenem-resistant Enterobacteriaceae) and precipitating Clostridioides difficile colitis; (3) The single most effective action to prevent true CAUTI is EARLY CATHETER REMOVAL as soon as clinical indication ends."
      ],
      [
        "Initiate intravenous meropenem (1 g every 8 hours) for a 14-day course to eradicate multidrug-resistant colonization",
        "Treating asymptomatic bacteriuria with broad-spectrum carbapenems breeds pan-resistant superbugs and triggers C. difficile infection."
      ],
      [
        "Exchange the Foley catheter over a guidewire and irrigate the bladder with neomycin-polymyxin solution daily",
        "Bladder antibiotic irrigation causes chemical cystitis, accelerates mucosal ulceration, and has zero proven efficacy in preventing CAUTI."
      ],
      [
        "Prescribe daily suppressive oral nitrofurantoin for the duration of catheterization",
        "Suppressive daily antibiotics are ineffective for indwelling catheters and select for resistant organisms with zero clinical benefit."
      ],
      [
        "Clamp the Foley catheter for 6 hours daily to rehabilitate detrusor muscle tone before removal",
        "Catheter clamping promotes urinary stasis and intraluminal bacterial overgrowth, increasing urosepsis risk."
      ]
    ],
    "shortestValidSolution": "Catheterized patient with positive urine culture + no symptoms = Catheter-associated asymptomatic bacteriuria -> Remove catheter immediately; NO antibiotics.",
    "necessaryInference": "Apply IDSA guidelines for catheter-associated bacteriuria: remove the indwelling catheter and withhold antibiotics in asymptomatic patients to prevent resistance.",
    "strongestDistractor": "Initiate intravenous meropenem (1 g every 8 hours) for a 14-day course to eradicate multidrug-resistant colonization",
    "distractorExclusion": "Administering carbapenems for asymptomatic colonization is inappropriate antimicrobial stewardship that fuels resistance and C. difficile colitis.",
    "citation": "Hooton TM, et al. Diagnosis, prevention, and treatment of catheter-associated urinary tract infection in adults: 2009 International Clinical Practice Guidelines from the Infectious Diseases Society of America. Clin Infect Dis. 2010;50(5):625-663. PMID: 20175247.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0582",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Clostridioides difficile Infection Control Soap and Water vs Alcohol",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man hospitalized for 8 days for treatment of hospital-acquired pneumonia develops acute watery diarrhea with 8 watery bowel movements in 24 hours, lower abdominal cramping, and low-grade fever. Temperature is 38.1 C (100.6 F), blood pressure is 126/78 mm Hg, and heart rate is 92/min. Stool testing is positive for Clostridioides difficile toxin B by PCR and enzyme immunoassay. The patient is initiated on oral vancomycin (125 mg orally four times daily). The hospital infection prevention team establishes strict contact precautions. Which of the following infection control practices is mandatory when caring for this patient?",
    "choices": [
      [
        "Perform hand hygiene exclusively with soap and water after patient contact (as alcohol-based hand sanitizers do not kill bacterial endospores), and place the patient on Contact Precautions with dedicated gown and gloves",
        "CLOSTRIDIOIDES DIFFICILE INFECTION (CDI) is the leading cause of healthcare-associated infectious diarrhea. The primary mode of transmission is person-to-person spread via the fecal-oral route through contaminated healthcare personnel hands or environmental fomites. C. difficile produces BACTERIAL ENDOSPORES that are extremely resistant to desiccation, heat, and chemical disinfectants. CRITICAL INFECTION PREVENTION MANDATES: (1) SOAP AND WATER HAND HYGIENE: ALCOHOL-BASED HAND RUBS DO NOT INACTIVATE OR KILL C. DIFFICILE SPORES! Mechanical friction with SOAP AND WATER is required to physically wash and rinse the spores off the skin. Hand hygiene with soap and water is mandatory after caring for patients with confirmed or suspected CDI; (2) CONTACT PRECAUTIONS: Private room (or cohorting), dedicated disposable gown and gloves donned upon room entry; (3) ENVIRONMENTAL DISINFECTION: Standard quaternary ammonium cleaners are ineffective; surfaces must be disinfected with SPORICIDAL AGENTS (bleach / sodium hypochlorite-based cleaners); (4) ANTIMICROBIAL STEWARDSHIP: Discontinue unnecessary inciting systemic antibiotics."
      ],
      [
        "Rely exclusively on alcohol-based hand rub for hand hygiene before and after room exit",
        "Alcohol hand rubs are completely ineffective against bacterial endospores; soap and water friction is required to physically rinse spores away."
      ],
      [
        "Place the patient in a negative-pressure airborne isolation room and require N95 respirators for all staff",
        "C. difficile is transmitted via the fecal-oral contact route, not airborne aerosol nuclei; airborne isolation and N95 masks are unnecessary."
      ],
      [
        "Administer oral cholestyramine resin concurrently with oral vancomycin to bind bacterial toxins",
        "Cholestyramine binds oral vancomycin in the intestinal lumen, neutralizing its antibacterial efficacy and causing treatment failure."
      ],
      [
        "Perform an emergent bedside fecal microbiota transplantation on hospital day 1",
        "Fecal microbiota transplantation is indicated for multiply recurrent CDI (>=2 recurrences), not for initial uncomplicated primary episodes."
      ]
    ],
    "shortestValidSolution": "Hospitalized patient with C. difficile diarrhea = Contact Precautions + Hand hygiene with SOAP AND WATER (alcohol does not kill spores).",
    "necessaryInference": "Identify essential infection control measures for Clostridioides difficile: mandatory soap and water hand hygiene (due to alcohol-resistant spores) and contact precautions.",
    "strongestDistractor": "Rely exclusively on alcohol-based hand rub for hand hygiene before and after room exit",
    "distractorExclusion": "C. difficile produces resilient endospores that resist alcohol inactivation; using alcohol rubs spreads hospital-acquired outbreaks.",
    "citation": "McDonald LC, et al. Clinical Practice Guidelines for Clostridium difficile Infection in Adults and Children: 2017 Update by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA). Clin Infect Dis. 2018;66(7):e1-e48. PMID: 29462280.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0583",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Surgical Site Infection SSI Prevention Bundle Antibiotic Timing",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man is scheduled to undergo elective laparoscopic sigmoid colectomy for recurrent diverticular disease. He weighs 95 kg and has no known drug allergies. The surgical team prepares the patient in the pre-anesthesia holding area. The surgical resident reviews the evidence-based SURGICAL SITE INFECTION (SSI) PREVENTION BUNDLE (Surgical Care Improvement Project [SCIP] / CDC guidelines). Which of the following represents the optimal combination of preoperative and intraoperative measures to minimize this patient's risk of surgical site infection?",
    "choices": [
      [
        "Administer intravenous cefazolin (2 g or 3 g based on weight >= 120 kg) plus metronidazole within 60 minutes prior to surgical incision, maintain intraoperative normothermia, clip hair instead of shaving with a razor, and maintain perioperative glycemic control",
        "SURGICAL SITE INFECTIONS (SSIs) are the most common and costly hospital-acquired infections among surgical patients. The CDC, WHO, and SCIP guideline bundle establishes evidence-based practices: (1) ANTIMICROBIAL PROPHYLAXIS TIMING: Intravenous prophylactic antibiotics must be fully infused WITHIN 60 MINUTES PRIOR TO SURGICAL INCISION (within 120 minutes for vancomycin or fluoroquinolones) so that bactericidal tissue levels are present at the moment of skin incision; (2) PROPHYLAXIS DOSING: Cefazolin dose is weight-based (2 g for patients < 120 kg; 3 g for patients >= 120 kg); colorectal surgery requires anaerobic coverage (add IV metronidazole); (3) HAIR REMOVAL: Hair at the operative site should NOT be removed unless it interferes with surgery; IF REMOVED, ELECTRIC CLIPPERS MUST BE USED. Shaving with a razor causes microscopic skin abrasions that harbor bacteria, dramatically increasing SSI rates; (4) NORMOTHERMIA: Active warming to maintain core temperature >= 36.0 C prevents vasoconstriction, tissue hypoxia, and impaired neutrophil oxidative burst; (5) GLYCEMIC CONTROL: Maintain blood glucose < 180-200 mg/dL."
      ],
      [
        "Shave the entire abdomen with a surgical razor 12 hours prior to surgery, and administer intravenous antibiotics immediately upon skin closure",
        "Razors cause microscopic skin lacerations that breed bacteria, and administering antibiotics after incision or upon skin closure provides zero prophylactic benefit."
      ],
      [
        "Continue intravenous prophylactic antibiotics for 7 consecutive days postoperatively to prevent late-onset infection",
        "Continuing prophylactic antibiotics beyond 24 hours postoperatively does not reduce SSI rates and promotes antimicrobial resistance and C. difficile colitis."
      ],
      [
        "Induce mild therapeutic hypothermia (target core body temperature 34 C) throughout the surgical procedure",
        "Intraoperative hypothermia impairs neutrophil phagocytosis, increases wound infection threefold, and triggers coagulopathy and blood loss."
      ],
      [
        "Administer intravenous vancomycin monotherapy 10 minutes prior to incision in all surgical patients regardless of MRSA status",
        "Vancomycin requires 60-120 minutes of infusion (rapid bolus causes red man syndrome) and is inferior to cefazolin for methicillin-sensitive S. aureus."
      ]
    ],
    "shortestValidSolution": "Elective colorectal surgery = SSI prevention bundle -> IV Cefazolin + Metronidazole within 60 min before incision + Clip hair (NO razor) + Maintain normothermia.",
    "necessaryInference": "Apply CDC/SCIP surgical site infection prevention guidelines: timely preoperative antibiotic administration (within 60 min), hair clipping, and normothermia.",
    "strongestDistractor": "Shave the entire abdomen with a surgical razor 12 hours prior to surgery, and administer intravenous antibiotics immediately upon skin closure",
    "distractorExclusion": "Razor shaving causes microscopic epithelial breaches that harbor pathogens; antibiotics administered after skin closure fail to achieve tissue bactericidal levels.",
    "citation": "Berrios-Torres SI, et al. Centers for Disease Control and Prevention Guideline for the Prevention of Surgical Site Infection, 2017. JAMA Surg. 2017;152(8):784-791. PMID: 28467526.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0584",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Decisional Capacity Assessment Four Criteria for Decision",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old man with mild vascular dementia is admitted to the surgical ward with severe, acute abdominal pain. Physical examination demonstrates an acute abdomen with involuntary guarding, rigidity, and rebound tenderness. An abdominal CT scan confirms a perforated sigmoid diverticulum with extensive pneumoperitoneum and fecal peritonitis. The surgical team explains that an emergency exploratory laparotomy and Hartmann procedure are necessary to prevent septic shock and death. The patient refuses surgery, stating: 'I have stomach pain, but I just want some warm tea and a nap. I know you say my bowel has a hole, but God will heal it while I sleep, and I don't want doctors cutting into me.' When questioned further, he can repeat that his bowel has a hole, but he denies that refusing surgery could cause him to die. A Mini-Mental State Examination score from 2 months ago was 22/30. Which of the following is the most appropriate determination regarding this patient's decision-making capacity?",
    "choices": [
      [
        "The patient lacks decision-making capacity for this specific surgical intervention because he cannot appreciate the consequences of his decision (denies that refusal will lead to death), and the surrogate decision-maker should be consulted for emergency consent",
        "DECISION-MAKING CAPACITY is a clinical determination made by any licensed physician regarding a patient's ability to make a SPECIFIC medical decision at a SPECIFIC point in time. It is DECISION-SPECIFIC and DYNAMIC (a patient may have capacity to choose their lunch or agree to a blood draw, but lack capacity for a complex, life-or-death surgical consent). A patient possesses decision-making capacity ONLY if they demonstrate ALL FOUR OF THE FOLLOWING CRITERIA: (1) UNDERSTANDING: The ability to understand the relevant facts, diagnosis, proposed treatment, alternatives, and risks/benefits; (2) APPRECIATION: The ability to appreciate the nature of the situation and its CONSEQUENCES AS THEY APPLY TO ONESELF (here, the patient fails because he denies that refusing surgery will cause his death, attributing magical healing to tea and sleep); (3) REASONING: The ability to engage in a rational process of manipulating information and comparing risks/benefits; and (4) EXPRESSING A CHOICE: The ability to clearly communicate a consistent choice. A prior diagnosis of dementia or low MMSE does NOT automatically equate to lack of capacity; however, failing to appreciate fatal consequences establishes lack of capacity. When capacity is lacking, an authorized surrogate decision-maker must be engaged."
      ],
      [
        "The patient possesses full decision-making capacity because he can clearly communicate his refusal and state that his bowel has a hole",
        "Simply expressing a choice and repeating words does not establish capacity; the patient lacks appreciation of personal fatal consequences."
      ],
      [
        "The patient automatically lacks decision-making capacity solely because he has a documented diagnosis of vascular dementia",
        "Dementia alone does not automatically equate to incapacity; capacity must be formally assessed for each specific clinical decision."
      ],
      [
        "The surgical team must obtain an immediate court order from a probate judge before performing any emergency intervention",
        "Emergency care does not require court orders when a valid surrogate is available or when immediate action is necessary to prevent death."
      ],
      [
        "The patient should be discharged home against medical advice immediately to honor his autonomy",
        "Discharging an incapacitated patient with fecal peritonitis to die at home constitutes medical abandonment and violation of beneficence."
      ]
    ],
    "shortestValidSolution": "Perforated viscus refusing surgery + denies that refusal causes death = Lacks decision-making capacity (fails appreciation criterion) -> Consult surrogate.",
    "necessaryInference": "Apply the four clinical criteria for decision-making capacity (understanding, appreciation, reasoning, choice); distinguish capacity from competence.",
    "strongestDistractor": "The patient possesses full decision-making capacity because he can clearly communicate his refusal and state that his bowel has a hole",
    "distractorExclusion": "Fails to recognize that capacity requires appreciation of consequences; denying that untreated fecal peritonitis leads to death proves lack of capacity.",
    "citation": "Appelbaum PS. Clinical practice. Assessment of patients' competence to consent to treatment. N Engl J Med. 2007;357(18):1834-1840. PMID: 17978292.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0585",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Surrogate Decision Making Substituted Judgment Standard",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old man who suffered a catastrophic left middle cerebral artery ischemic stroke is in the neuro-intensive care unit. He remains comatose, endotracheally intubated, and has failed extubation trials due to severe bulbar paralysis and absent airway reflexes. The neurocritical care team discusses long-term management with his daughter, who is his legally designated durable power of attorney for healthcare. The physician explains that the patient will require a tracheostomy and a permanent percutaneous endoscopic gastrostomy (PEG) feeding tube to survive in a long-term acute care hospital, with no realistic expectation of functional neurological recovery. The daughter states: 'My father was an active outdoorsman who always told me: If I ever have a massive stroke and can't recognize my family or take care of myself, do NOT keep me alive on machines or feeding tubes. Let me go peacefully.' The daughter breaks down crying and says: 'I love my dad so much and I personally can't bear the thought of losing him, but I know what he wanted.' Which of the following legal and ethical decision-making standards should guide the daughter's decision?",
    "choices": [
      [
        "The substituted judgment standard, in which the surrogate decision-maker makes the choice that the incapacitated patient would have made for himself based on his previously articulated values and explicit wishes",
        "When a patient loses decision-making capacity and has not executed a formal living will covering the specific clinical scenario, medical decisions must be made by an authorized SURROGATE DECISION-MAKER (durable power of attorney for healthcare or next of kin in statutory priority order). Medical ethics and health law establish a clear hierarchy of decision-making standards: (1) DIRECT ADVANCE DIRECTIVES: If the patient has a valid, applicable living will, its directives must be followed directly; (2) SUBSTITUTED JUDGMENT STANDARD: If explicit written directives do not exist, the surrogate MUST USE THE SUBSTITUTED JUDGMENT STANDARD. Under this standard, the surrogate DOES NOT DECIDE WHAT THEY PERSONALLY WANT, NOR WHAT A 'REASONABLE PERSON' MIGHT WANT. Instead, the surrogate must 'step into the shoes of the patient' and make the decision that THE PATIENT WOULD HAVE MADE FOR HIMSELF, based on his previously stated beliefs, values, religious views, and informal verbal statements; (3) BEST INTERESTS STANDARD: Applied ONLY when the patient's prior wishes and values are completely unknown or unknowable (e.g., never-competent individuals, young children). Here, the father's explicit, consistent statements mandate withdrawal of mechanical ventilation under the substituted judgment standard."
      ],
      [
        "The best interests standard, in which the daughter chooses the treatment that a reasonable third-party objective observer would choose",
        "The best interests standard is applied only when the patient's prior values are unknown; here, the father made explicit verbal statements."
      ],
      [
        "The physician authority standard, in which the critical care attending makes the final decision regardless of family preferences",
        "Physicians do not have unilateral authority to override valid surrogate substituted judgment when decisions align with patient values."
      ],
      [
        "The institutional ethics committee mandate, in which all life-sustaining treatment decisions require binding committee votes",
        "Ethics committees serve an advisory, non-binding consultative role; they do not dictate surrogate substituted judgment decisions."
      ],
      [
        "The maximum longevity standard, which legally requires continuing all life-prolonging interventions regardless of prior patient wishes",
        "There is no legal or ethical duty to prolong dying when an incapacitated patient's stated values direct transition to comfort measures."
      ]
    ],
    "shortestValidSolution": "Surrogate knows father's explicit wish: 'do not keep me alive on machines' = Substituted Judgment Standard (decide what the patient would have chosen).",
    "necessaryInference": "Differentiate the substituted judgment standard (deciding what the patient would have wanted) from the best interests standard in surrogate decision-making.",
    "strongestDistractor": "The best interests standard, in which the daughter chooses the treatment that a reasonable third-party objective observer would choose",
    "distractorExclusion": "The best interests standard is a default reserved solely for when the patient's wishes are unknown; known wishes mandate the substituted judgment standard.",
    "citation": "American Medical Association. Code of Medical Ethics: Decisions for Adult Patients Who Lack Decisional Capacity. Opinion 2.1.2.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0586",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Error Disclosure and Apology Transparent Communication",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old woman admitted to the surgical ward for an elective laparoscopic cholecystectomy receives an unintended 10-fold overdose of intravenous morphine (10 mg IV instead of 1 mg IV) due to a nurse misreading a decimal point on a paper order. Thirty minutes later, the patient develops profound respiratory depression (respiratory rate 4/min, oxygen saturation 80%) and pinpoint pupils. The rapid response team administers intravenous naloxone (0.4 mg), which immediately reverses the respiratory depression. The patient is transferred to the step-down unit for 24 hours of close monitoring and suffers no permanent physical harm. The hospital risk management department is notified. The surgical attending physician prepares to discuss the event with the patient and her family. Which of the following represents the most ethically appropriate and legally supported approach to medical error disclosure?",
    "choices": [
      [
        "Provide prompt, transparent, and complete disclosure to the patient and family, explaining the factual sequence of what occurred, apologizing sincerely for the error, explaining the corrective measures taken to ensure patient safety, and committing to investigate system-level preventions",
        "TRANSPARENT DISCLOSURE OF MEDICAL ERRORS is a foundational ethical obligation endorsed by the American Medical Association (AMA), American College of Physicians (ACP), and The Joint Commission. Ethical and clinical principles of error disclosure: (1) FULL AND PROMPT DISCLOSURE: Clinicians must disclose medical errors that cause harm or require unanticipated monitoring/intervention. Concealing or minimizing an error violates patient autonomy, breaches trust, and is ethically indefensible; (2) COMPONENTS OF AN EFFECTIVE DISCLOSURE: (a) Clear, factual explanation of what happened in plain, non-defensive language; (b) Direct acknowledgement of the error; (c) A SINCERE APOLOGY expressing empathy and regret ('I am truly sorry that this medication error occurred'); (d) Immediate clinical steps taken to mitigate harm; and (e) An explanation of institutional investigations and systemic forcing functions implemented to prevent recurrence; (3) APOLOGY LAWS: Most US jurisdictions have enacted 'apology laws' that protect benevolent statements of sympathy, regret, or apology from being admitted as evidence of liability in civil malpractice lawsuits."
      ],
      [
        "Conceal the error from the patient and attribute the naloxone administration to an idiosyncratic allergic reaction to anesthesia",
        "Falsifying records and lying to patients regarding an iatrogenic error constitutes severe professional misconduct, fraud, and breach of core ethics."
      ],
      [
        "Disclose the error only if the patient specifically notices the naloxone line item on her detailed hospital billing statement",
        "Conditional disclosure contingent on patient discovery violates transparency and destroys the fiduciary physician-patient relationship."
      ],
      [
        "Blame the bedside nurse by name and advise the family to file an immediate personal lawsuit against the nursing department",
        "Scapegoating individual staff members creates a toxic culture, conceals systemic design flaws, and violates collaborative clinical leadership."
      ],
      [
        "Refuse to speak with the family and refer all communication directly to the hospital's corporate legal defense team",
        "Refusing to communicate with patients following an error dramatically escalates anger, suspicion, and the likelihood of adversarial litigation."
      ]
    ],
    "shortestValidSolution": "Iatrogenic morphine overdose reversed with naloxone = Ethical error disclosure -> Prompt, honest factual disclosure + sincere apology + system fix.",
    "necessaryInference": "Apply ethical guidelines for medical error disclosure: provide prompt transparent communication, sincere apology, and systemic corrective actions.",
    "strongestDistractor": "Conceal the error from the patient and attribute the naloxone administration to an idiosyncratic allergic reaction to anesthesia",
    "distractorExclusion": "Concealing an iatrogenic error and fabricating an allergic reaction is fraudulent, unethical, and exposes the physician to severe disciplinary sanction.",
    "citation": "Gallagher TH, et al. Disclosing harmful medical errors to patients: a toolkit for physicians. Chest. 2009;136(3):897-903. PMID: 19736192.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0587",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Impaired Physician Colleague Duty to Protect Patient Safety",
    "provisionalDifficulty": 5,
    "stem": "A third-year surgical resident is preparing for an emergency appendectomy at 11:00 PM. While scrubbing at the sink, the resident notices that the on-call surgical attending physician is slurring his speech, smells distinctly of alcohol, has bloodshot eyes, and is swaying unsteadily while attempting to don sterile gloves. When the resident asks if he is feeling well, the attending angrily snaps: 'Mind your own business and get in the room; we have a burst appendix to take out.' Which of the following is the most appropriate immediate action for the resident physician to take?",
    "choices": [
      [
        "Immediately intervene to prevent the attending from participating in the surgery, ensure patient safety by contacting the department chair or hospital chief medical officer, and report the impairment to the hospital physician health program",
        "PATIENT SAFETY IS THE PARAMOUNT, NON-NEGOTIABLE ETHICAL DUTY OF EVERY HEALTHCARE PROFESSIONAL. When a physician exhibits signs of acute impairment (intoxication, substance use, acute cognitive or physical incapacity) while on duty: (1) IMMEDIATE INTERVENTION: An acutely impaired physician MUST NEVER BE PERMITTED TO PROVIDE PATIENT CARE OR ENTER AN OPERATING ROOM! Allowing an intoxicated surgeon to operate places the patient in imminent mortal peril and constitutes negligence; (2) CHAIN OF COMMAND ESCALATION: The resident must immediately stop the procedure from proceeding with that surgeon, notify the operating room charge nurse, and contact the next authority in the chain of command (the departmental clinical chair, the hospital Chief Medical Officer [CMO], or the backup on-call attending surgeon) to arrange safe coverage for the patient; (3) REPORTING: Ethical codes (AMA Code of Medical Ethics Opinion 9.2.1) mandate reporting impaired colleagues to the institution's PHYSICIAN HEALTH PROGRAM (PHP) or state licensing medical board to ensure patient safety and provide a confidential, structured pathway for evaluation, rehabilitation, and monitoring."
      ],
      [
        "Allow the attending to perform the operation while standing close by to physically take over if a major vessel is lacerated",
        "Permitting an acutely intoxicated surgeon to perform an invasive operation violates duty of care and exposes the patient to lethal surgical harm."
      ],
      [
        "Quietly leave the operating room and file an anonymous complaint with the state licensing medical board next week",
        "Leaving the operating room abandons the patient to an intoxicated surgeon; immediate, real-time intervention is required to protect the patient."
      ],
      [
        "Confront the attending in front of the patient and family and threaten to call local police to the bedside",
        "Public confrontation in front of the patient creates panic and distress; professional intervention through the clinical chain of command is required."
      ],
      [
        "Administer a dose of intravenous ondansetron and black coffee to the attending and proceed with surgery",
        "Coffee and antiemetics do not reverse alcohol-induced neurocognitive impairment, cerebellar ataxia, or psychomotor dysfunction."
      ]
    ],
    "shortestValidSolution": "Attending surgeon smells of alcohol and slurs speech before emergency surgery = Immediate intervention to stop surgery -> Protect patient + escalate chain of command.",
    "necessaryInference": "Prioritize patient safety when encountering an impaired physician: immediately prevent patient contact and report through official institutional leadership channels.",
    "strongestDistractor": "Allow the attending to perform the operation while standing close by to physically take over if a major vessel is lacerated",
    "distractorExclusion": "Permitting an intoxicated surgeon to begin an operation is gross clinical negligence; patient protection requires immediate cessation of patient contact.",
    "citation": "American Medical Association. Code of Medical Ethics: Physicians with Disruptive Behavior and Impairment. Opinion 9.2.1.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0588",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "Behavioral Health",
    "topic": "Duty to Protect Tarasoff Rule Identifiable Third Party",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old man with paranoid personality disorder presents for his regular outpatient psychotherapy visit. Over the past 2 weeks, his paranoia has intensified. He reveals that his former business partner, who lives in the same town, cheated him out of a contract. He states with cold, calm conviction: 'I bought an unregistered handgun yesterday. Tomorrow morning at 8:00 AM, I am going to his office at 424 Main Street and shooting him dead in the parking lot.' The psychiatrist assesses that this threat is credible, specific, and imminent, and the patient refuses voluntary hospitalization. Which of the following is the most appropriate legal and ethical course of action for the psychiatrist?",
    "choices": [
      [
        "Breach medical confidentiality to notify law enforcement immediately and make reasonable efforts to warn the intended victim (duty to protect / Tarasoff rule), and initiate an involuntary emergency psychiatric evaluation",
        "The DUTY TO WARN AND PROTECT (established by the landmark California Supreme Court decision Tarasoff v. Regents of the University of California, and codified in common law or statute in most US jurisdictions) creates an EXCEPTION TO MEDICAL CONFIDENTIALITY. When a patient communicates to a healthcare professional an EXPLICIT, IMMINENT THREAT OF SERIOUS PHYSICAL HARM OR DEATH DIRECTED AGAINST A CLEARLY IDENTIFIABLE THIRD PARTY: (1) THE DUTY TO PROTECT THE PUBLIC OUTWEIGHS THE DUTY OF CONFIDENTIALITY: The clinician has an affirmative legal and ethical obligation to take reasonable steps to protect the intended victim; (2) ACTIONS REQUIRED: (a) Immediately notify local LAW ENFORCEMENT; (b) Make reasonable, direct efforts to WARN THE INTENDED VICTIM; and (c) Initiate INVOLUNTARY EMERGENCY PSYCHIATRIC DETENTION/HOSPITALIZATION to secure the patient and prevent the violent act; (3) CRITERIA FOR INITIATING THE DUTY: (a) Foreseeable and imminent danger; (b) Specific identifiable victim (not vague generalized threats against society); and (c) Means and opportunity to execute the threat."
      ],
      [
        "Maintain strict patient-physician confidentiality, as disclosing threats violates federal HIPAA regulations under all circumstances",
        "HIPAA explicitly contains an exception permitting disclosure to prevent a serious, imminent threat to the health or safety of a person or the public."
      ],
      [
        "Advise the patient that murder is illegal and schedule a follow-up appointment in 1 week to reassess his homicidal ideation",
        "Scheduling an outpatient visit for a patient with an active, imminent murder plot abandons the victim to fatal violence."
      ],
      [
        "Notify the local newspaper and post the patient's photograph on public social media forums",
        "Public broadcasting breaches privacy far beyond what is necessary to protect the specific identifiable victim and law enforcement."
      ],
      [
        "Prescribe high-dose oral haloperidol and discharge the patient home on the condition that he surrender his weapon",
        "Discharging an actively homicidal patient who refuses hospitalization relies on unenforceable promises and endangers public life."
      ]
    ],
    "shortestValidSolution": "Patient states specific, credible, imminent threat to shoot named business partner = Duty to protect (Tarasoff rule) -> Warn victim + notify police + involuntary hold.",
    "necessaryInference": "Apply the Tarasoff duty to warn and protect: recognize that specific, credible, imminent threats to identifiable victims mandate breaching confidentiality to warn and notify.",
    "strongestDistractor": "Maintain strict patient-physician confidentiality, as disclosing threats violates federal HIPAA regulations under all circumstances",
    "distractorExclusion": "HIPAA and medical ethics explicitly permit breaching confidentiality when necessary to prevent serious, imminent physical harm to an identifiable victim.",
    "citation": "American Psychiatric Association. Position Statement on the Duty to Protect. 2014.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0589",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "EMTALA Medical Screening Examination and Stabilization",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old undocumented immigrant woman who is 38 weeks pregnant presents to the emergency department of a private non-profit hospital with regular painful contractions occurring every 3 minutes. The triage nurse notes that the patient has no health insurance and lacks financial resources. The hospital business office administrator directs the triage nurse to refuse admission and divert the patient to the county public hospital located 15 miles away. Cervical examination reveals 8 cm dilation and complete effacement with the fetal head at +2 station. Membranes spontaneously rupture in the triage bay with clear fluid. Under the Emergency Medical Treatment and Labor Act (EMTALA), which of the following represents the hospital's mandatory legal and ethical obligations?",
    "choices": [
      [
        "Perform an immediate medical screening examination (MSE) and provide stabilizing treatment (delivering the baby and placenta), regardless of insurance status, citizenship, or ability to pay",
        "The EMERGENCY MEDICAL TREATMENT AND LABOR ACT (EMTALA) is a federal statute enacted to prevent 'PATIENT DUMPING' (refusing to treat or inappropriately transferring uninsured or indigent patients with acute emergency medical conditions). Key provisions of EMTALA: (1) MANDATORY MEDICAL SCREENING EXAMINATION (MSE): Any individual who presents to a dedicated emergency department requesting examination or treatment MUST BE PROVIDED AN APPROPRIATE MSE by qualified medical personnel (physician, PA, NP) to determine whether an EMERGENCY MEDICAL CONDITION (EMC) exists, REGARDLESS OF CITIZENSHIP, LEGAL STATUS, OR ABILITY TO PAY; (2) ACTIVE LABOR IS AN EMERGENCY MEDICAL CONDITION: Under EMTALA, a pregnant woman with contractions is legally presumed to have an emergency condition if there is inadequate time for safe transfer before delivery, or if transfer poses a threat to maternal or fetal safety; (3) STABILIZING TREATMENT: If an EMC exists, the hospital MUST PROVIDE STABILIZING TREATMENT within its capabilities (here, DELIVERING THE INFANT AND PLACENTA); (4) PROHIBITION OF DELAY: Hospitals may NOT delay examination or stabilizing treatment to inquire about insurance or payment."
      ],
      [
        "Immediately transfer the patient by private taxi to the public hospital to comply with corporate administrative directives",
        "Transferring a woman in active second-stage labor (8 cm dilation, +2 station) violates EMTALA, constitutes illegal patient dumping, and causes birth in transit."
      ],
      [
        "Require the patient to sign a legally binding promissory note paying full cash deposit prior to entering the labor room",
        "Demanding payment or financial screening prior to providing emergency medical examination and stabilization is a direct violation of EMTALA."
      ],
      [
        "Discharge the patient with oral tocolytics and instruct her to walk to the county hospital",
        "Discharging a term patient in active labor with ruptured membranes constitutes gross medical negligence and violates federal law."
      ],
      [
        "Report the undocumented patient immediately to federal immigration enforcement authorities prior to clinical evaluation",
        "Healthcare facilities are designated sensitive locations; reporting patients seeking emergency care violates medical ethics and federal statutes."
      ]
    ],
    "shortestValidSolution": "Uninsured pregnant woman at 8 cm dilation in emergency department = EMTALA mandate -> Medical Screening Examination (MSE) + Deliver baby regardless of ability to pay.",
    "necessaryInference": "Apply EMTALA federal statutory mandates: emergency screening examination and stabilizing treatment are legally required regardless of insurance, payment, or citizenship.",
    "strongestDistractor": "Immediately transfer the patient by private taxi to the public hospital to comply with corporate administrative directives",
    "distractorExclusion": "Transferring an unstable patient in active second-stage labor is illegal patient dumping under EMTALA, carrying massive civil penalties and loss of CMS funding.",
    "citation": "Centers for Medicare & Medicaid Services (CMS). Emergency Medical Treatment and Labor Act (EMTALA). 42 U.S.C. \u00a7 1395dd.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0590",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Withholding vs Withdrawing Life-Sustaining Treatment Ethical Equivalence",
    "provisionalDifficulty": 5,
    "stem": "An 84-year-old woman with severe multi-infarct dementia and end-stage chronic obstructive pulmonary disease is intubated in the intensive care unit for acute hypercapnic respiratory failure secondary to aspiration pneumonia. After 10 days of mechanical ventilation, multiple weaning trials have failed due to severe diaphragmatic fatigue and encephalopathy. The patient's son, who is her healthcare proxy, meets with the palliative care and critical care teams. The son states: 'Before she developed dementia, my mother told me dozens of times that she never wanted to live connected to a ventilator. I know we should disconnect the breathing tube and focus on her comfort, but our family priest told my sister that unplugging a machine is actively killing her, whereas not putting her on the machine in the first place would have been acceptable.' Which of the following is the established consensus in medical ethics and healthcare law regarding withholding versus withdrawing life-sustaining treatment?",
    "choices": [
      [
        "Withholding and withdrawing life-sustaining medical treatment are ethically and legally equivalent, as both allow the underlying fatal disease process to take its natural course",
        "A foundational principle of medical ethics and healthcare law (established by landmark legal cases including Quinlan and Cruzan, and codified by the AMA Code of Medical Ethics): WITHHOLDING AND WITHDRAWING LIFE-SUSTAINING TREATMENT ARE ETHICALLY AND LEGALLY EQUIVALENT. Key principles: (1) In both actions, THE CAUSE OF DEATH IS THE UNDERLYING LETHAL DISEASE PROCESS (e.g. respiratory failure from end-stage COPD and dementia), NOT the physician's action; (2) IF A DISTINCTION WERE MADE where withdrawing were considered worse than withholding, CLINICIANS WOULD BE AFRAID TO INITIATE A REASONABLE TIME-LIMITED TRIAL OF THERAPY, fearing they could never stop if the patient failed to improve; (3) Patient autonomy and the right to refuse medical intervention encompass the right to CEASE an intervention that has already begun and is no longer providing benefit; (4) Transition to comfort care requires active palliative symptom control (titrated intravenous opioids and sedatives to prevent suffocation and air hunger) during and after extubation."
      ],
      [
        "Withholding treatment is legally permissible, but withdrawing an active ventilator constitutes active criminal homicide",
        "Withdrawing life-sustaining treatment at the direction of a valid surrogate is legally protected and fundamentally distinct from homicide."
      ],
      [
        "Mechanical ventilation can only be withdrawn if the patient meets strict criteria for whole-brain death",
        "Brain death is not required to withdraw mechanical ventilation; competent patients or their surrogates have the legal right to refuse any medical therapy."
      ],
      [
        "The physician must transfer care to the hospital legal department to obtain a binding court order before extubating",
        "Routine withdrawal of mechanical ventilation consistent with surrogate direction does not require judicial court involvement."
      ],
      [
        "The family must be required to sign a total liability waiver indemnifying the hospital against murder charges",
        "Surrogate-directed withdrawal of non-beneficial treatment is standard medical practice and does not involve criminal charges or waivers."
      ]
    ],
    "shortestValidSolution": "Withholding vs Withdrawing life support = Ethically and legally equivalent (both allow underlying disease to take natural course).",
    "necessaryInference": "Identify the ethical and legal equivalence of withholding and withdrawing life-sustaining treatment based on AMA ethics and constitutional jurisprudence.",
    "strongestDistractor": "Withholding treatment is legally permissible, but withdrawing an active ventilator constitutes active criminal homicide",
    "distractorExclusion": "Constitutional law and medical ethics establish that withdrawing unwanted life support is legally identical to withholding it, allowing natural death.",
    "citation": "American Medical Association. Code of Medical Ethics: Withholding or Withdrawing Life-Sustaining Medical Treatment. Opinion 5.3.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0591",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Organ Procurement Organization OPO Mandatory Timely Notification",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man is admitted to the trauma intensive care unit with catastrophic open traumatic brain injury and severe diffuse axonal injury following a motorcycle collision. Over the next 36 hours, his neurologic examination deteriorates: he develops fixed and dilated pupils, absent corneal reflexes, absent oculocephalic reflexes, and absence of spontaneous respirations on the ventilator. His intracranial pressure remains refractory at > 60 mm Hg. The neurocritical care attending determines that the patient meets criteria for impending brain death. The resident physician suggests: 'Should I go talk to the patient's parents right now in the waiting room and ask them if they want to donate his organs?' Which of the following is the required institutional and legal protocol regarding organ donation notification under federal Centers for Medicare & Medicaid Services (CMS) regulations?",
    "choices": [
      [
        "The clinical team must notify the regional Organ Procurement Organization (OPO) in a timely manner, and allow specialized OPO designated requesters (not the treating clinical team) to approach the family regarding organ donation",
        "Under federal regulations established by the Centers for Medicare & Medicaid Services (CMS Conditions of Participation: Organ, Tissue, and Eye Procurement): (1) MANDATORY TIMELY NOTIFICATION: Hospitals are legally required to notify their regional ORGAN PROCUREMENT ORGANIZATION (OPO) in a timely manner whenever a patient has died or whose death is imminent (e.g. severe brain injury with GCS <= 4-5, or when brain death testing is planned); (2) SEPARATION OF CLINICAL CARE AND DONATION REQUESTS: THE TREATING CLINICAL TEAM MUST NEVER INDEPENDENTLY APPROACH THE FAMILY TO REQUEST ORGAN DONATION! Approaching families without OPO coordination creates profound conflicts of interest, damages family trust, and drastically lowers organ donation consent rates; (3) DESIGNATED REQUESTERS: Federal regulations mandate that DISCUSSIONS REGARDING ORGAN DONATION MUST BE CONDUCTED BY AN OPO REPRESENTATIVE OR A SPECIALLY TRAINED 'DESIGNATED REQUESTER'. The clinical team first conducts a formal family conference to discuss the devastating clinical prognosis and brain death declaration; only after brain death is understood does the OPO coordinator introduce donation options."
      ],
      [
        "The primary resident physician should immediately approach the parents with organ donation consent forms before brain death testing is conducted",
        "Treating clinicians approaching families before formal brain death testing violates federal CMS mandates and creates severe conflicts of interest."
      ],
      [
        "The hospital should proceed with surgical organ procurement automatically without family notification or consent",
        "Procuring organs without verifying donor registry status or surrogate consent violates federal law and patient bodily integrity."
      ],
      [
        "The clinical team must conceal the patient's deteriorating condition from the family until organ procurement is completed",
        "Concealing clinical status violates ethical truth-telling and destroys the fundamental fiduciary relationship with the family."
      ],
      [
        "Organ donation notification is prohibited until the patient has suffered complete asystolic circulatory cardiac arrest for > 48 hours",
        "Waiting for prolonged circulatory arrest causes warm ischemic damage to transplantable organs; timely OPO notification for impending brain death is mandatory."
      ]
    ],
    "shortestValidSolution": "Impending brain death in ICU = Federal CMS mandate -> Timely notification of regional OPO; designated OPO requester (NOT clinical team) approaches family.",
    "necessaryInference": "Apply CMS and UNOS regulations for organ donation: mandate timely OPO notification and ensure only trained OPO coordinators approach families.",
    "strongestDistractor": "The primary resident physician should immediately approach the parents with organ donation consent forms before brain death testing is conducted",
    "distractorExclusion": "Federal CMS regulations explicitly prohibit treating clinicians from making uncoordinated donation requests; OPO designated coordinators must lead donation discussions.",
    "citation": "Centers for Medicare & Medicaid Services (CMS). Conditions of Participation: Organ, Tissue, and Eye Procurement. 42 CFR \u00a7 482.45.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0592",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Aid in Dying MAID vs Active Euthanasia Legal Safeguards",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old woman with metastatic stage IV pancreatic adenocarcinoma with extensive hepatic and peritoneal metastases presents to her palliative care physician in a US jurisdiction where Medical Aid in Dying (MAID) is legally authorized. Her oncologist estimates her life expectancy at 3 months. She has intact cognitive capacity, normal mood without clinical depression, and is receiving optimized multimodal palliative pain management. She states: 'I have watched my sister die an agonizing death from cancer. I want to have control over my final days. If my suffering becomes intolerable, I want the legal option to end my life peacefully on my own terms.' She asks her physician how the medical aid in dying process works and what safeguards exist. Which of the following correctly describes the legal and clinical safeguards defining Medical Aid in Dying in authorized US jurisdictions?",
    "choices": [
      [
        "The patient must be a mentally capable adult with a terminal illness confirmed by two physicians to have a prognosis of 6 months or less, make voluntary written and oral requests, and must personally self-administer the lethal medication",
        "MEDICAL AID IN DYING (MAID / physician-assisted dying), where legalized by state statute in the United States, is governed by rigorous legal and clinical statutory safeguards: (1) TERMINAL ILLNESS: The patient must have an incurable, irreversible medical condition that has been medically confirmed by both an ATTENDING PHYSICIAN AND AN INDEPENDENT CONSULTING PHYSICIAN to produce death within SIX MONTHS; (2) DECISIONAL CAPACITY: The patient must be a mentally competent adult (>=18 years old) capable of making informed healthcare decisions. If depression or cognitive impairment is suspected, a mandatory psychological/psychiatric evaluation is required; (3) VOLUNTARY REQUESTS: The patient must make two separate oral requests (separated by a statutory waiting period, typically 7 to 15 days) and one witnessed written request; (4) CRITICAL DISTINCTION: SELF-ADMINISTRATION IS MANDATORY: THE PATIENT MUST PERSONALLY INGEST / SELF-ADMINISTER THE MEDICATION. A physician or family member is STRICTLY PROHIBITED FROM ADMINISTERING THE LETHAL AGENT. Direct administration by a third party constitutes ACTIVE EUTHANASIA, which is illegal and classified as criminal homicide in all US jurisdictions."
      ],
      [
        "The physician is legally mandated to personally inject an intravenous lethal dose of potassium chloride at the patient's home",
        "Physicians directly administering a lethal injection is active euthanasia, which is illegal in all 50 US states and prohibited by medical ethics."
      ],
      [
        "The patient's designated healthcare proxy can request and sign the medical aid in dying prescription on the patient's behalf",
        "Surrogate decision-makers, powers of attorney, or family members can NEVER request MAID; the request must be strictly voluntary and personal."
      ],
      [
        "Medical aid in dying is available to any patient with chronic treatment-resistant depression without terminal physical illness",
        "MAID statutes strictly require an incurable terminal physical illness with prognosis <6 months; psychiatric illness alone does not qualify in the US."
      ],
      [
        "Physicians who hold personal moral objections to medical aid in dying are legally required to write the prescription under federal law",
        "Physicians retain the legal and ethical right of conscientious objection and are never legally compelled to prescribe MAID medications."
      ]
    ],
    "shortestValidSolution": "Medical Aid in Dying (MAID) in legal states = Terminal illness (<6 months) + Competent adult + Voluntary requests + Mandatory patient SELF-administration.",
    "necessaryInference": "Differentiate Medical Aid in Dying (patient self-administration with statutory safeguards) from active euthanasia (prohibited third-party administration).",
    "strongestDistractor": "The physician is legally mandated to personally inject an intravenous lethal dose of potassium chloride at the patient's home",
    "distractorExclusion": "Third-party administration of a lethal agent constitutes active euthanasia, which is illegal throughout the United States; MAID requires self-ingestion.",
    "citation": "American College of Physicians. Ethics and the Legalization of Physician-Assisted Suicide: An ACP Position Paper. Ann Intern Med. 2017;167(8):576-578. PMID: 28973224.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0593",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Conscientious Objection Referral and Non-Abandonment",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old woman at 8 weeks of gestation presents to her obstetrician-gynecologist requesting an elective first-trimester pregnancy termination (medical abortion). The patient is healthy, competent, and has made a firm personal decision. The physician holds deeply held personal religious convictions against performing or prescribing medications for pregnancy termination. Elective pregnancy termination is legally permissible in their jurisdiction. According to the American Medical Association (AMA) Code of Medical Ethics and the American College of Obstetricians and Gynecologists (ACOG), which of the following represents the physician's ethical obligations when exercising CONSCIENTIOUS OBJECTION?",
    "choices": [
      [
        "The physician may decline to perform the procedure based on conscientious objection, but must clearly and respectfully inform the patient of all legal medical options, avoid judging or demeaning the patient, and provide a timely, effective referral to another qualified provider to ensure non-abandonment",
        "CONSCIENTIOUS OBJECTION in healthcare occurs when a clinician refuses to provide a legally permissible medical service because it conflicts with their deeply held moral, ethical, or religious convictions. Professional ethical codes (AMA Code of Medical Ethics Opinion 1.1.7 and ACOG Committee Opinion No. 385) recognize a clinician's right to protect moral integrity, but establish STRICT PROFESSIONAL LIMITS TO PROTECT PATIENT HEALTH AND AUTONOMY: (1) DUTY OF TIMELY DISCLOSURE: The physician must inform the patient of their conscientious objection promptly and respectfully, explaining what services they will and will not provide; (2) PROHIBITION OF PROSELYTIZING OR JUDGMENT: Clinicians must never judge, demean, shame, or attempt to coerce the patient; (3) DUTY TO INFORM AND REFER: The physician has an affirmative duty to inform the patient about all medically accepted options and PROVIDE A TIMELY REFERRAL OR TRANSFER TO ANOTHER WILLING, QUALIFIED HEALTHCARE PROVIDER to ensure patient care is not delayed; (4) NON-ABANDONMENT: The physician cannot abandon the patient until care is transferred; and (5) EMERGENCY EXCEPTION: IN A LIFE-THREATENING EMERGENCY (e.g. ruptured ectopic pregnancy, septic abortion), CONSCIENTIOUS OBJECTION IS VOID, and the physician is ethically and legally obligated to provide immediate lifesaving care."
      ],
      [
        "The physician is ethically permitted to falsely tell the patient that pregnancy termination is medically impossible at 8 weeks",
        "Providing false medical information violates truth-telling, exploits professional authority, and constitutes gross medical malpractice."
      ],
      [
        "The physician must perform the termination immediately, as healthcare professionals forfeit all personal moral rights upon licensure",
        "Physicians retain the right to conscientious objection for elective services, provided timely referral and patient non-abandonment are maintained."
      ],
      [
        "The physician should immediately terminate the patient-physician relationship and refuse to provide any referrals or records",
        "Abruptly terminating the relationship without referral constitutes medical abandonment and is a disciplinary offense."
      ],
      [
        "The physician should contact the patient's parents to inform them of her decision and seek their intervention",
        "Breaching confidentiality in a competent adult patient seeking reproductive healthcare violates federal HIPAA law and professional ethics."
      ]
    ],
    "shortestValidSolution": "Physician with moral objection to elective termination = Conscientious objection permitted -> Respectful disclosure + timely referral to willing provider (no abandonment).",
    "necessaryInference": "Apply ethical guidelines for conscientious objection: balance clinician moral integrity with patient autonomy through timely disclosure, referral, and non-abandonment.",
    "strongestDistractor": "The physician should immediately terminate the patient-physician relationship and refuse to provide any referrals or records",
    "distractorExclusion": "Refusing care without providing a timely referral constitutes medical abandonment and violates the AMA Code of Medical Ethics.",
    "citation": "American Medical Association. Code of Medical Ethics: Physician Objection to Treatment. Opinion 1.1.7.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0594",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "Hematology",
    "topic": "Jehovah's Witness Autonomy Refusal of Blood Transfusion",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old man who is a devout Jehovah's Witness is brought to the trauma center following a severe construction accident with open pelvic fractures and severe retroperitoneal hemorrhage. Upon arrival, he is awake, alert, fully oriented, and demonstrates intact decision-making capacity. He carries a signed, legally executed Advance Medical Directive ('No Blood' card) and repeatedly states to the trauma team: 'My religious faith prohibits the receipt of allogeneic blood products. Under no circumstances am I to receive packed red blood cells, whole blood, platelets, or plasma, even if death is the result.' Over the next 2 hours, despite pelvic angioembolization and crystalloid infusions, his bleeding continues. Blood pressure drops to 78/44 mm Hg, heart rate is 138/min, and repeat hemoglobin is 4.8 g/dL (normal 13.5-17.5 g/dL). His distraught wife arrives and pleads: 'Please give him blood! I can't live without him!' Which of the following is the most appropriate legal and ethical course of action for the trauma team?",
    "choices": [
      [
        "Honor the patient's autonomous refusal of blood transfusions, withhold all allogeneic blood products, and maximize non-blood medical and surgical interventions (intravenous iron, erythropoietin, cell saver autotransfusion if acceptable to the patient, and volume expanders)",
        "The principle of RESPECT FOR PATIENT AUTONOMY is paramount in medical ethics and healthcare law. A COMPETENT ADULT HAS THE ABSOLUTE MORAL AND CONSTITUTIONAL RIGHT TO REFUSE ANY MEDICAL INTERVENTION, INCLUDING LIFESAVING BLOOD TRANSFUSIONS, even when that refusal will result in death. Core clinical and ethical principles in treating Jehovah's Witness patients: (1) AUTONOMY PREVAILS OVER BENEFICENCE: When a competent adult makes a voluntary, informed refusal of blood (confirmed verbally and via advance directive), clinicians MUST HONOR THAT REFUSAL. Transfusing blood against a competent patient's explicit refusal constitutes MEDICAL BATTERY and can result in civil and criminal liability; (2) SURROGATE PREFERENCE CANNOT OVERRIDE: A spouse or family member CANNOT override a competent patient's stated refusal or valid advance directive; (3) NON-BLOOD ALTERNATIVES: Clinicians must aggressively utilize bloodless medicine techniques: high-dose erythropoietin, intravenous iron, tranexamic acid (TXA), intraoperative cell salvage (if continuous circuit is acceptable to the patient), and synthetic volume expanders; (4) CRITICAL EXCEPTION (PEDIATRICS): PARENTS DO NOT HAVE THE RIGHT TO MARTYR THEIR MINOR CHILDREN. If a minor child of Jehovah's Witness parents requires lifesaving blood, clinicians must obtain emergency protective custody or an emergency court order to administer the blood."
      ],
      [
        "Administer 4 units of emergency uncrossmatched packed red blood cells immediately based on the wife's emotional consent",
        "A spouse cannot override the explicit, autonomous refusal of a competent adult; transfusing blood against refusal constitutes civil and criminal battery."
      ],
      [
        "Declare the patient mentally incompetent due to acute hemorrhagic shock and transfuse blood products",
        "Hemorrhagic shock alone does not invalidate capacity if the patient understands and appreciates the consequences of refusal."
      ],
      [
        "Administer high-dose intravenous haloperidol to sedate the patient and transfuse blood while he is asleep",
        "Chemical restraint to override a competent patient's constitutional right to refuse treatment is gross criminal battery and malpractice."
      ],
      [
        "Withdraw all medical care and discharge the patient from the trauma bay to the waiting room",
        "Honoring refusal of blood does NOT mean abandoning the patient; clinicians must provide maximum supportive medical and surgical care."
      ]
    ],
    "shortestValidSolution": "Competent Jehovah's Witness adult refusing blood even if fatal = Must honor refusal (autonomy) -> Withhold blood + maximize non-blood bloodless alternatives.",
    "necessaryInference": "Apply the principle of autonomy in treatment refusal: honor a competent adult's refusal of lifesaving blood products, recognizing that spouses cannot override.",
    "strongestDistractor": "Administer 4 units of emergency uncrossmatched packed red blood cells immediately based on the wife's emotional consent",
    "distractorExclusion": "Transfusing blood against a competent adult's documented refusal constitutes battery; family members cannot override an autonomous patient.",
    "citation": "American Medical Association. Code of Medical Ethics: Informed Consent. Opinion 2.1.1.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0595",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Pediatric Assent vs Parental Consent in Adolescents",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old adolescent boy with relapsed acute lymphoblastic leukemia (ALL) following two prior courses of chemotherapy is admitted to the pediatric oncology ward. His pediatric oncologist discusses the next step: an experimental intensive third-line salvage chemotherapy regimen followed by an allogeneic hematopoietic stem cell transplant. The oncologist explains that the regimen carries a 15% probability of achieving remission, but has a 20% risk of treatment-related mortality and will require months of profound isolation. The 15-year-old patient, who is cognitively mature and articulate, tearfully tells his oncologist: 'I have been suffering for 3 years. The chemotherapy makes me feel like I am dying every day. I don't want any more chemo. I want to spend my remaining time at home with my dog.' His parents, however, insist: 'He is only 15; we are his parents and we demand that he receive the chemotherapy and transplant.' Which of the following represents the most appropriate ethical framework and next step in management?",
    "choices": [
      [
        "Engage the patient and family in structured multidisciplinary counseling to actively elicit the adolescent's assent and explore his goals of care, recognizing that while parents have legal consent authority, an articulate adolescent's refusal of high-risk, low-benefit therapy carries substantial moral weight and should not be forcibly overridden without ethics committee consultation",
        "In pediatric healthcare ethics, decision-making for older children and adolescents involves balancing PARENTAL PERMISSION (legal consent authority held by parents or legal guardians) and PEDIATRIC ASSENT (the developmental agreement of the child to undergo the proposed treatment). According to the American Academy of Pediatrics (AAP) Committee on Bioethics: (1) DEVELOPMENT OF ASSENT: Adolescents (typically aged >= 12-14 years) frequently possess the cognitive capacity to understand their illness, treatment options, and consequences; their developmentally appropriate assent SHOULD ALWAYS BE SOUGHT; (2) ETHICAL WEIGHT OF REFUSAL (DISSENT): When a proposed therapy is standard of care, highly curative, and lifesaving (e.g. initial leukemia induction), parental consent legally authorizes therapy even over a minor's objection. HOWEVER, WHEN THERAPY IS EXPERIMENTAL, HIGH-RISK, AND HAS A VERY LOW PROBABILITY OF CURE (as in relapsed salvage transplant with 15% cure and 20% toxic death), AN ADOLESCENT'S REFUSAL CARRIES PROFOUND MORAL WEIGHT. Forcibly strapping down an articulate 15-year-old for toxic non-curative chemotherapy violates bioethics; (3) NEXT STEP: Multidisciplinary palliative care and ethics committee consultation to mediate family goals and explore comfort care options."
      ],
      [
        "Physically restrain the 15-year-old patient and administer the chemotherapy immediately because parents have absolute legal authority",
        "Forcibly administering high-toxicity, low-benefit experimental therapy over an articulate adolescent's refusal violates bioethical principles."
      ],
      [
        "Instruct the 15-year-old that minors have zero legal or ethical standing in healthcare and their opinions are completely disregarded",
        "The American Academy of Pediatrics mandates that adolescent assent must be respected and sought in all therapeutic decisions."
      ],
      [
        "Report the parents to child protective services for medical neglect because they want to pursue salvage chemotherapy",
        "Wanting to pursue potential life-prolonging salvage therapy is not medical neglect; the parents love their child and need ethical mediation."
      ],
      [
        "Discharge the patient from the hospital immediately without oncology follow-up to avoid legal involvement",
        "Abruptly abandoning a dying adolescent with relapsed leukemia violates physician beneficence and constitutes clinical abandonment."
      ]
    ],
    "shortestValidSolution": "15yo refusing low-benefit/high-risk salvage chemo + parents demanding chemo = Seek adolescent assent -> Ethics/palliative consultation (moral weight of dissent).",
    "necessaryInference": "Synthesize pediatric assent and parental permission: recognize that an articulate adolescent's dissent against high-risk low-benefit therapy carries moral weight.",
    "strongestDistractor": "Physically restrain the 15-year-old patient and administer the chemotherapy immediately because parents have absolute legal authority",
    "distractorExclusion": "Forcibly overpowering an articulate adolescent to administer experimental, highly toxic therapy with low cure likelihood violates bioethical standards.",
    "citation": "Katz AL, et al. Informed Consent in Decision-Making in Pediatric Practice. Pediatrics. 2016;138(2):e20161485. PMID: 27456510.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0596",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Emancipated Minor Legal Criteria Independent Consent",
    "provisionalDifficulty": 5,
    "stem": "A 17-year-old woman presents to the ambulatory surgery clinic for evaluation of chronic symptomatic cholelithiasis with recurrent biliary colic. Abdominal ultrasound confirms multiple gallstones with acoustic shadowing and normal gallbladder wall thickness. Elective laparoscopic cholecystectomy is recommended. The patient lives in her own apartment, is legally married to a 19-year-old college student, works full-time as an administrative assistant, and provides 100% of her own financial support. Her parents reside in another state and are estranged. The registration clerk states that because the patient is 17 years old, her parents must be contacted to sign the surgical consent form. Which of the following represents the correct legal and ethical status regarding consent for this surgical procedure?",
    "choices": [
      [
        "The patient is an emancipated minor by virtue of her legal marriage and financial self-sufficiency, giving her full legal authority to provide independent informed consent for her own surgery without parental involvement",
        "An EMANCIPATED MINOR is an individual who is under the legal age of majority (typically <18 years old) but who has gained adult legal status, granting them the FULL INDEPENDENT LEGAL AUTHORITY TO CONSENT TO ALL MEDICAL AND SURGICAL TREATMENTS, enter contracts, and make decisions WITHOUT PARENTAL PERMISSION OR NOTIFICATION. Criteria that confer legal emancipation in most US jurisdictions include: (1) LEGAL MARRIAGE; (2) ACTIVE MILITARY SERVICE in the United States Armed Forces; (3) FORMAL COURT DECLARATION of emancipation (judicial decree); or (4) FINANCIAL SELF-SUFFICIENCY AND LIVING INDEPENDENTLY apart from parents. Because this patient is legally married, lives in her own home, and is financially independent, SHE MEETS STATUTORY CRITERIA FOR AN EMANCIPATED MINOR. Her parents have NO legal authority to consent or refuse treatment on her behalf, and contacting them against her wishes would violate her right to medical confidentiality."
      ],
      [
        "Parental consent is legally mandatory for all individuals under age 18 under all circumstances without exception",
        "Emancipation explicitly removes parental consent requirements; married or self-supporting minors have full independent adult consent authority."
      ],
      [
        "The patient's 19-year-old husband must sign the surgical consent form as her designated legal guardian",
        "A husband is not a legal guardian; the patient herself possesses direct, autonomous adult decision-making capacity."
      ],
      [
        "The surgery cannot be performed until the patient reaches her 18th birthday, regardless of clinical symptoms",
        "Delaying necessary surgery for symptomatic cholelithiasis until age 18 risks acute cholecystitis, gallstone pancreatitis, and sepsis."
      ],
      [
        "An emergency court order from a family law judge is required prior to scheduling elective outpatient surgery",
        "Emancipated minors by marriage do not require case-by-case judicial court orders for standard medical and surgical care."
      ]
    ],
    "shortestValidSolution": "17-year-old legally married and self-supporting = Emancipated minor -> Full independent legal authority to provide informed consent for surgery.",
    "necessaryInference": "Identify legal criteria for minor emancipation (marriage, military service, financial self-sufficiency) granting independent consent authority.",
    "strongestDistractor": "Parental consent is legally mandatory for all individuals under age 18 under all circumstances without exception",
    "distractorExclusion": "Fails to recognize the established legal doctrine of emancipation, which grants adult medical consent rights to married or self-sufficient minors.",
    "citation": "Boonstra HD, Nash E. Minors and the right to consent to health care. Guttmacher Policy Rev. 2000;3(4):4-8. PMID: 11985149.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0597",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Mature Minor Confidential STI and Contraceptive Care",
    "provisionalDifficulty": 5,
    "stem": "A 16-year-old unmarried high school student presents to the adolescent clinic requesting an intrauterine device (IUD) for contraception and testing for sexually transmitted infections (STIs). She reports that she is sexually active with her boyfriend. She has no chronic medical illnesses. Physical examination and pelvic examination are normal. The patient expresses intense anxiety, stating: 'My parents are deeply religious. If my parents find out I am on birth control or getting tested for STIs, they will kick me out of the house. You can't tell them, right?' Which of the following correctly describes the legal and ethical framework governing confidential healthcare services for this adolescent?",
    "choices": [
      [
        "In all 50 US states, minors have the legal right to provide independent, confidential consent for the diagnosis and treatment of sexually transmitted infections, and the vast majority of states permit confidential contraceptive services without parental notification",
        "In the United States, statutory exceptions to parental consent exist to protect adolescent public health. In all 50 states and the District of Columbia: (1) CONFIDENTIAL STI DIAGNOSIS AND TREATMENT: Minors of any age (or >=12-14 depending on state) have THE LEGAL RIGHT TO PROVIDE INDEPENDENT, CONFIDENTIAL CONSENT FOR STI SCREENING AND TREATMENT WITHOUT PARENTAL CONSENT OR NOTIFICATION. If parental permission were required, adolescents would avoid testing, fueling catastrophic epidemics of untreated gonorrhea, chlamydia, syphilis, and HIV; (2) CONTRACEPTION: The vast majority of states permit minors to independently consent to contraceptive services (including oral contraceptives, injectables, implants, and IUDs) to prevent adolescent pregnancy; (3) SUBSTANCE USE AND MENTAL HEALTH: Most states allow confidential outpatient treatment for substance use disorders and acute mental health counseling; (4) BILLING PRECAUTIONS: Clinicians must ensure that Explanation of Benefits (EOB) statements are not sent to the parents' address, which would inadvertently breach confidentiality."
      ],
      [
        "The physician is legally mandated to notify the parents within 24 hours of prescribing any contraceptive method to a minor",
        "Mandatory parental notification laws for contraception do not exist in standard adolescent clinical care and would deter healthcare access."
      ],
      [
        "The patient must obtain written notarized permission from both parents prior to receiving an IUD or STI testing",
        "Demanding parental notarized permission violates adolescent confidentiality statutes and contravenes public health standards."
      ],
      [
        "The physician must report the sexual activity to child protective services as evidence of statutory child abuse",
        "Consensual sexual activity between peer adolescents is not reportable child abuse in the absence of exploitation or coercion."
      ],
      [
        "Confidentiality is protected only if the minor pays for all clinic fees in cash upfront",
        "Confidentiality rights are statutory legal protections that apply regardless of payment method or insurance type."
      ]
    ],
    "shortestValidSolution": "16-year-old requesting STI testing and IUD = Confidential adolescent care -> Legal right to independent, confidential STI and contraceptive services.",
    "necessaryInference": "Recognize statutory exceptions allowing minors to independently consent to confidential reproductive health services (STIs, contraception, substance use).",
    "strongestDistractor": "The physician is legally mandated to notify the parents within 24 hours of prescribing any contraceptive method to a minor",
    "distractorExclusion": "State statutes explicitly protect adolescent confidentiality for reproductive services to encourage testing and prevent adolescent pregnancy.",
    "citation": "Guttmacher Institute. An Overview of Minors' Consent Law. 2022. https://www.guttmacher.org/state-policy/explore/overview-minors-consent-law",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0598",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Brain Death Determination Clinical Criteria and Apnea Testing",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man who sustained catastrophic severe hypoxic-ischemic brain injury following an out-of-hospital cardiac arrest is being evaluated for determination of death by neurologic criteria (brain death) on hospital day 5. Core body temperature is 37.2 C, mean arterial pressure is 84 mm Hg on low-dose norepinephrine, and blood electrolytes and metabolic panels are normal. All sedative and paralytic infusions were discontinued 48 hours ago, and drug toxicology screens are negative. Comprehensive neurological examination demonstrates deep coma with complete unresponsiveness to noxious stimuli and absence of all brainstem reflexes: non-reactive pupils bilaterally, absent corneal reflexes, absent oculocephalic (doll's eyes) and oculovestibular (cold caloric) reflexes, and absent gag and tracheal cough reflexes. An APNEA TEST is performed: pre-oxygenation with 100% FiO2 for 10 minutes achieves a baseline PaCO2 of 42 mm Hg; the patient is disconnected from the mechanical ventilator while delivering 100% oxygen via an insufflation catheter at the carina. Over 8 minutes of apnea, the patient remains hemodynamically stable and demonstrates NO respiratory effort. Arterial blood gas demonstrates PaCO2 of 64 mm Hg and pH 7.24. Which of the following is the correct determination regarding this patient?",
    "choices": [
      [
        "The patient meets clinical and laboratory criteria for brain death (complete coma, absent brainstem reflexes, and a positive apnea test demonstrating PaCO2 >= 60 mm Hg and >= 20 mm Hg above baseline with absent respiratory drive); he is legally and clinically dead",
        "DETERMINATION OF DEATH BY NEUROLOGIC CRITERIA (BRAIN DEATH) is defined as the irreversible cessation of all functions of the entire brain, including the brainstem. The American Academy of Neurology (AAN) consensus guidelines require a rigorous 3-step evaluation: (1) PREREQUISITES: (a) Establish irreversible cause of coma; (b) Normal core temperature (>=36.0 C); (c) Normal systolic blood pressure (>=100 mm Hg or MAP >= 65 mm Hg); (d) Absence of central nervous system depressant drugs (confirmed by drug screens and clearance times); and (e) Absence of severe electrolyte, acid-base, or endocrine derangements; (2) CLINICAL EXAMINATION: (a) Complete flaccid coma; (b) ABSENCE OF ALL BRAINSTEM REFLEXES (pupillary light, corneal, oculocephalic, oculovestibular, gag, cough); (3) APNEA TEST: Disconnection from mechanical ventilator while providing tracheal oxygenation to allow PaCO2 to rise, stimulating medullary respiratory centers. A TEST IS POSITIVE (CONFIRMATORY) IF: (a) There is NO spontaneous respiratory effort; AND (b) PaCO2 RISES TO >= 60 mm Hg OR INCREASES BY >= 20 mm Hg ABOVE BASELINE (with arterial pH < 7.28). Because this patient meets all prerequisites, has absent brainstem reflexes, and has a positive apnea test (PaCO2 64 mm Hg, >20 mm Hg above baseline, no breaths), HE IS CLINICALLY AND LEGALLY PRONOUNCED DEAD. Ancillary tests (cerebral angiography, nuclear scan) are necessary ONLY if the apnea test cannot be completed safely."
      ],
      [
        "The apnea test is negative because the PaCO2 failed to reach 80 mm Hg; resume mechanical ventilation and repeat testing in 7 days",
        "A positive apnea test requires PaCO2 >= 60 mm Hg or >= 20 mm Hg above baseline; 64 mm Hg fully satisfies the confirmatory threshold."
      ],
      [
        "The patient cannot be declared brain dead until a 24-hour continuous electroencephalogram demonstrates burst suppression",
        "Ancillary testing (EEG, nuclear scan) is unnecessary when the clinical examination and apnea test are fully completed and positive."
      ],
      [
        "The patient is in a persistent vegetative state and should be transferred to a long-term rehabilitation hospital",
        "Vegetative states preserve brainstem reflexes and spontaneous respiration; absence of brainstem reflexes and positive apnea test define whole-brain death."
      ],
      [
        "Brain death determination is invalid because the patient is receiving low-dose norepinephrine to maintain blood pressure",
        "Vasopressors are permissible and standard during brain death evaluation to satisfy the prerequisite blood pressure threshold (MAP >= 65 mm Hg)."
      ]
    ],
    "shortestValidSolution": "Deep coma + absent brainstem reflexes + Apnea test positive (PaCO2 64 > 60 and >20 over baseline, no breaths) = Brain Death confirmed -> Pronounce legal death.",
    "necessaryInference": "Apply American Academy of Neurology guidelines for determination of brain death: prerequisites, absent brainstem reflexes, and positive apnea test thresholds.",
    "strongestDistractor": "The apnea test is negative because the PaCO2 failed to reach 80 mm Hg; resume mechanical ventilation and repeat testing in 7 days",
    "distractorExclusion": "The threshold for a positive apnea test is PaCO2 >= 60 mm Hg (or >= 20 mm Hg above baseline); 64 mm Hg confirms complete medullary cessation.",
    "citation": "Greer DM, et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline: Report of the AAN, AAP, CNS, and SCCM. Neurology. 2023;101(24):1112-1132. PMID: 37821233.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0599",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Planted QA Defect: Direct Giveaway in Stem with Absurd Distractor",
    "provisionalDifficulty": 1,
    "stem": "A quality improvement officer is auditing hospital hygiene compliance. Hand hygiene is the single most important intervention to prevent nosocomial pathogen transmission. Which of the following is the single most important intervention stated in the preceding sentence?",
    "choices": [
      [
        "Strict adherence to routine hospital hand hygiene protocols",
        "Hand hygiene using alcohol-based hand rub or soap and water is the single most effective intervention to prevent healthcare-associated pathogen transmission."
      ],
      [
        "Immediate bilateral carotid endarterectomy to eliminate hand pathogens",
        "Vascular neck surgery is an absurd, completely unrelated intervention that has zero role in hand hygiene compliance."
      ],
      [
        "Routine prophylactic whole-body radiation for all admitted patients",
        "Radiation therapy causes lethal bone marrow ablation and does not treat hospital hand contamination."
      ],
      [
        "Immediate bilateral lower extremity amputations for all patients",
        "Amputation is an absurd and destructive intervention completely unrelated to hand hygiene."
      ],
      [
        "Prohibiting all healthcare workers from ever washing their hands",
        "Prohibiting hand washing directly contradicts hand hygiene and accelerates lethal pathogen outbreaks."
      ]
    ],
    "shortestValidSolution": "Hand hygiene is stated in the question stem.",
    "necessaryInference": "None - giveaway in stem.",
    "strongestDistractor": "Immediate bilateral carotid endarterectomy to eliminate hand pathogens",
    "distractorExclusion": "Absurd vascular surgery intervention for hand hygiene compliance.",
    "citation": "World Health Organization. WHO Guidelines on Hand Hygiene in Health Care. 2009. PMID: 23805438.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "REJECT",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "rejectionNotes": "Planted QA rejection candidate: stem gives away answer in lead-in and distractor includes absurd surgical intervention (bilateral carotid endarterectomy for hand pathogen control). Fails inference requirement."
    },
    "reviewStatus": "REJECTED",
    "rejectionReason": "Planted QA rejection candidate: stem gives away answer in lead-in and distractor includes absurd surgical intervention (bilateral carotid endarterectomy for hand pathogen control). Fails inference requirement."
  },
  {
    "code": "op-c-s3-0600",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Dual Antiplatelet Therapy (DAPT) Duration Following Second-Generation Drug-Eluting Stent in High Bleeding Risk Patients: Shortened (1-3 Months) vs Standard (12 Months)",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a history of hypertension, stage 3 chronic kidney disease (eGFR 42 mL/min/1.73 m2), and a prior history of upper gastrointestinal bleeding secondary to a duodenal ulcer successfully undergoes percutaneous coronary intervention (PCI) with a second-generation cobalt-chromium everolimus-eluting stent for an acute non-ST-elevation myocardial infarction (NSTEMI). He is initiated on dual antiplatelet therapy (DAPT) with aspirin 81 mg daily and clopidogrel 75 mg daily, alongside a proton pump inhibitor. At his 3-month clinic follow-up, he is completely free of angina and has had no bleeding episodes. His calculated PRECISE-DAPT score is 32 (indicating high bleeding risk, score >= 25), while his calculated DAPT score is 1 (indicating low ischemic benefit from prolonged DAPT). Which of the following clinical considerations represents the active, unresolved controversy in guiding the optimal duration of dual antiplatelet therapy in this high-bleeding-risk patient?",
    "choices": [
      [
        "Balancing the reduction in major bleeding complications achieved by early discontinuation of aspirin at 1 to 3 months (transitioning to P2Y12 inhibitor monotherapy) against the potential risk of late stent thrombosis and recurrent ischemic myocardial infarction with shortened DAPT",
        "The optimal duration of DUAL ANTIPLATELET THERAPY (DAPT) following percutaneous coronary intervention (PCI) with contemporary second-generation drug-eluting stents (DES) represents an ACTIVE, EVOLVING CONTROVERSY in cardiovascular medicine, particularly in patients with HIGH BLEEDING RISK (HBR). Historical guidelines (e.g. 2016 ACC/AHA) mandated a standard 12-MONTH DAPT REGIMEN for all acute coronary syndromes (ACS). However, contemporary DES feature ultra-thin struts, biocompatible polymers, and rapid endothelialization, dramatically lowering baseline stent thrombosis rates (<0.5-1.0%). Large modern randomized trials (TWILIGHT, STOPDAPT-2, MASTER-DAPT) demonstrated that SHORT-COURSE DAPT (1 to 3 months) FOLLOWED BY P2Y12 INHIBITOR MONOTHERAPY (e.g. ticagrelor or clopidogrel) SIGNIFICANTLY REDUCES MAJOR BLEEDING COMPLICATIONS WITHOUT A STATISTICALLY SIGNIFICANT INCREASE IN ISCHEMIC CARDIAC EVENTS OR STENT THROMBOSIS. Conversely, traditionalists argue that in ACS cohorts, 12 months of DAPT provides broader secondary plaque stabilization in non-stented coronary vessels. Guidelines now endorse individualized risk stratification (PRECISE-DAPT vs DAPT score) and shared clinical decision-making."
      ],
      [
        "Mandating an uninterrupted 36-month course of dual antiplatelet therapy for all stented patients regardless of bleeding risk",
        "Protracted 36-month DAPT in high bleeding risk patients causes an unacceptable excess of fatal major gastrointestinal and intracranial hemorrhages."
      ],
      [
        "Immediately discontinuing all antiplatelet therapy and substituting high-dose therapeutic warfarin monotherapy",
        "Warfarin monotherapy without antiplatelet coverage provides inadequate protection against coronary stent thrombosis and worsens bleeding."
      ],
      [
        "Performing serial monthly intravascular ultrasound (IVUS) to determine when the drug-eluting stent is fully endothelialized",
        "Serial monthly invasive coronary catheterization carries high procedural risks and is not standard or validated to guide DAPT duration."
      ],
      [
        "Switching clopidogrel to prasugrel at double the standard dose to ensure permanent platelet inhibition",
        "Prasugrel increases major bleeding and is contraindicated in patients with high bleeding risk or prior stroke/TIA."
      ]
    ],
    "shortestValidSolution": "High bleeding risk (PRECISE-DAPT 32) post-DES for NSTEMI = Active controversy -> Short-course DAPT (1-3 mos + P2Y12 monotherapy) vs Standard 12 mos DAPT.",
    "necessaryInference": "Weigh conflicting evidence regarding shortened (1-3 month) vs standard (12-month) DAPT following modern DES in high-bleeding-risk patients.",
    "strongestDistractor": "Mandating an uninterrupted 36-month course of dual antiplatelet therapy for all stented patients regardless of bleeding risk",
    "distractorExclusion": "High bleeding risk cohorts suffer significant excess fatal hemorrhages on prolonged DAPT; guidelines now endorse shortened 1-3 month DAPT in selected patients.",
    "citation": "Lawton JM, et al. 2021 ACC/AHA/SCAI Guideline for Coronary Artery Revascularization. J Am Coll Cardiol. 2022;79(2):e21-e129. PMID: 34895957.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 patient safety, healthcare systems, and medical ethics clinical decision item requiring guideline synthesis and ethical reasoning.",
      "distractorExclusionNotes": "Distractors feature outdated paternalistic actions, punitively individual-focused responses, or unsafe transition protocols.",
      "verdict": "UNRESOLVED",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "unresolvedNotes": "Clinical controversy item: The optimal duration of DAPT after DES in high-bleeding-risk patients (shortened 1-3 months followed by P2Y12 monotherapy vs guideline standard 12 months) remains actively debated with conflicting trial endpoints."
    },
    "reviewStatus": "UNRESOLVED"
  }
];
