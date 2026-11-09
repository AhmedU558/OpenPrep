import { CandidateSpec } from './types';

export const step3Batch5: CandidateSpec[] = [
  {
    code: 'op-c-s3-0101',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'General Principles',
    topic: 'Beers Criteria Anticholinergic Burden in Dementia and BPH',
    subtopic: 'Deprescribing Diphenhydramine/Oxybutynin to Prevent Delirium and Retention',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Apply Beers Criteria for Potentially Inappropriate Medications in Older Adults: - HIGH ANTICHOLINERGIC BURDEN DRUGS: First-generation antihistamines (diphenhydramine, hydroxyzine), bladder antimuscarinics (oxybutynin, tolterodine), TCAs (amitriptyline), paroxetine. - ADVERSE EFFECTS IN ELDERLY: Precipitates acute delirium/cognitive worsening, urinary retention (especially in benign prostatic hyperplasia), constipation, falls, and dry mouth. - MANAGEMENT: DEPRESCRIBE ANTICHOLINERGICS. Replace with non-pharmacologic sleep hygiene or non-anticholinergic alternatives (e.g., melatonin for insomnia; mirabegron [beta-3 agonist] for overactive bladder).',
    citation: "By the 2023 American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. J Am Geriatr Soc. 2023;71(7):2052-2081. PMID: 37139824.",
    stem:
      'An 81-year-old man is brought to the geriatric primary care clinic by his daughter for a routine follow-up visit. His medical history includes mild Alzheimer dementia diagnosed 2 years ago, benign prostatic hyperplasia (BPH), and hypertension. Over the past 3 weeks, his daughter notes that he has become increasingly confused, forgetful, and irritable, frequently wandering the house at night. In addition, he has developed painful lower abdominal fullness, straining, and daytime urinary dribbling. A review of his medications reveals: donepezil 10 mg daily, tamsulosin 0.4 mg daily, and amlodipine 5 mg daily. One month ago, his previous physician added over-the-counter diphenhydramine 50 mg nightly for sleep latency insomnia, and 3 weeks ago an urgent care provider prescribed oral oxybutynin 5 mg twice daily for urinary urgency. On physical examination, the patient is disoriented to date and location, scoring 16/30 on the Montreal Cognitive Assessment (baseline 22/30 six months ago). Physical examination of the abdomen reveals a dull, tender, smooth mass palpable in the suprapubic area extending 4 cm above the pubic symphysis. Bedside bladder scan demonstrates a post-void residual urine volume of 620 mL. Which of the following is the most appropriate next step in the pharmacologic management of this patient?',
    options: [
      {
        text: 'Discontinue diphenhydramine and oxybutynin immediately and place a temporary urinary catheter',
        explanation: 'This 81-year-old man presents with acute-on-chronic cognitive decline (delirium) and acute urinary retention with overflow incontinence (distended bladder, 620 mL post-void residual) resulting directly from severe medication-induced anticholinergic burden. Under the 2023 American Geriatrics Society (AGS) Beers Criteria, medications with strong anticholinergic properties—including first-generation antihistamines (diphenhydramine) and non-selective bladder antimuscarinics (oxybutynin)—are categorized as POTENTIALLY INAPPROPRIATE MEDICATIONS in older adults. In patients with pre-existing neurocognitive disorders (Alzheimer dementia), anticholinergic drugs directly oppose the central pro-cholinergic actions of acetylcholinesterase inhibitors (donepezil), accelerating cognitive worsening and precipitating delirium. In men with underlying benign prostatic hyperplasia (BPH), antimuscarinics block detrusor smooth muscle M3 receptors, paralyzing bladder contraction and causing severe urinary retention and overflow dribbling. The primary, essential management is IMMEDIATE DEPRESCRIBING of both diphenhydramine and oxybutynin, along with temporary transurethral bladder catheterization to decompress the urinary tract and prevent hydronephrosis and acute kidney injury.'
      },
      {
        text: 'Increase the donepezil dosage to 23 mg daily to overcome the cognitive decline',
        explanation: 'Increasing cholinesterase inhibitors while the patient continues taking high-potency peripheral and central anticholinergic blockers is ineffective and causes severe nausea, diarrhea, and bradycardia.'
      },
      {
        text: 'Initiate oral zolpidem 10 mg nightly to improve sleep continuity and reduce nighttime wandering',
        explanation: 'Z-drugs like zolpidem are also Beers criteria medications that markedly increase fall risk, delirium, motor vehicle crashes, and fractures in older adults.'
      },
      {
        text: 'Add oral finasteride 5 mg daily and continue oxybutynin for detrusor overactivity',
        explanation: 'Finasteride takes 6 to 12 months to reduce prostate volume; continuing oxybutynin ensures persistent, worsening urinary retention and bladder rupture risk.'
      },
      {
        text: 'Perform an emergency non-contrast head CT scan before modifying any medications',
        explanation: 'While acute delirium requires clinical investigation, the temporal correlation with initiating two potent anticholinergic medications and acute urinary retention makes deprescribing the clear immediate priority.'
      }
    ]
  },
  {
    code: 'op-c-s3-0102',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Surrogate Decision-Making Legal Hierarchy and Substituted Judgment',
    subtopic: 'Designated Healthcare Proxy Priority Over Non-Designated Family Members',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Apply Surrogate Decision-Making Ethics: - HIERARCHY OF SURROGATES: 1. Legally designated DURABLE POWER OF ATTORNEY FOR HEALTHCARE (DPOA) / Healthcare Proxy; 2. If no DPOA designated: Spouse, then adult children, parents, adult siblings (statutory hierarchy). - DECISION-MAKING STANDARDS: 1. SUBSTITUTED JUDGMENT STANDARD: The surrogate must decide WHAT THE PATIENT WOULD HAVE DECIDED based on known values, beliefs, and past statements; 2. BEST INTERESTS STANDARD: Used ONLY when the patient\'s wishes are completely unknown. - ETHICAL RULE: A legally designated DPOA possesses exclusive decision-making authority over all non-designated relatives (including spouse or biological children) as long as acting in good faith based on the patient\'s values.',
    citation: "American College of Obstetricians and Gynecologists. ACOG Committee Opinion No. 525: Health care proxy designation and surrogate decision making. Obstet Gynecol. 2012;119(5):1098-1102. PMID: 22525914.",
    stem:
      'A 64-year-old man is brought to the intensive care unit in septic shock secondary to severe bacterial pneumonia. Despite aggressive volume resuscitation and dual vasopressors, the patient develops acute respiratory distress syndrome (ARDS) and worsening encephalopathy. He is intubated, mechanically ventilated, and sedated. He does not have decision-making capacity. Review of his validated electronic medical records reveals a legally executed, notarized Advance Health Care Directive completed 18 months ago that explicitly designates his longtime domestic partner as his sole Durable Power of Attorney (DPOA) for Healthcare. The document states that the patient would not wish for prolonged mechanical ventilation or invasive life support in the event of severe multi-organ failure. The patient\'s adult son from a previous marriage arrives at the hospital, presents his birth certificate, and aggressively demands that the medical team override the partner, insist on full code status, and perform surgical tracheostomy and hemodialysis. The designated partner states that the patient was adamant about avoiding prolonged ventilator support if multi-organ failure developed. Which of the following is the most appropriate next step in the ethical and legal management of this patient\'s care?',
    options: [
      {
        text: 'Recognize the designated partner as the patient\'s sole legal healthcare surrogate and follow the substituted judgment standard',
        explanation: 'In medical ethics and statutory healthcare law, when a patient lacks decision-making capacity, surrogate decision-making follows a strict hierarchy: (1) A legally designated DURABLE POWER OF ATTORNEY FOR HEALTHCARE (DPOA) or Healthcare Proxy possesses ultimate legal and ethical authority to make medical decisions on behalf of the patient, superseding all biological relatives, spouses, adult children, and parents. (2) If no legal proxy has been designated, state statutes establish a default hierarchy (typically spouse, followed by adult children, parents, and adult siblings). Furthermore, the designated surrogate must utilize the SUBSTITUTED JUDGMENT STANDARD, making the medical decision that the patient himself would have made based on his previously articulated values, beliefs, and directives. Because the patient executed a valid, notarized directive appointing his domestic partner as his DPOA and the partner is faithfully articulating the patient\'s documented wishes regarding avoiding prolonged mechanical ventilation in multi-organ failure, the medical team is legally and ethically bound to recognize the partner as the sole decision-maker. The biological son has no legal standing to override the patient\'s designated agent.'
      },
      {
        text: 'Recognize the adult son as the primary decision-maker because biological lineal descent takes precedence over an unmarried domestic partner',
        explanation: 'Biological relationship does not supersede a legally executed Durable Power of Attorney for Healthcare; executing a DPOA specifically protects the patient\'s chosen surrogate over default relatives.'
      },
      {
        text: 'Require consensus agreement between the partner and the son before enacting any treatment decisions',
        explanation: 'Consensus is desirable for family coping, but when disagreement occurs, the designated DPOA has sole legal authority; requiring consensus paralyzes care and violates the patient\'s autonomy.'
      },
      {
        text: 'Apply the best interests standard determined by a majority vote of the intensive care clinical team',
        explanation: 'The best interests standard is only used when the patient\'s wishes are completely unknown; here the patient\'s values are known and represented by his legal surrogate using substituted judgment.'
      },
      {
        text: 'Obtain an emergency court order appointing a court-mandated neutral conservator',
        explanation: 'Judicial intervention is reserved for situations where a valid surrogate does not exist or the surrogate is acting in clear bad faith; here a valid directive and proxy exist.'
      }
    ]
  },
  {
    code: 'op-c-s3-0103',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Assessment of Clinical Decision-Making Capacity',
    subtopic: 'Capacity Elements (Understand, Appreciate, Reason, Express Choice)',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Assess Clinical Decision-Making Capacity: - KEY PRINCIPLE: Capacity is DECISION-SPECIFIC, time-specific, and determined by ANY LICENSED PHYSICIAN (competence is a legal determination made by a judge). A psychiatric diagnosis (depression, schizophrenia) or mild cognitive impairment does NOT automatically mean a patient lacks capacity. - 4 MANDATORY ELEMENTS OF CAPACITY: 1. UNDERSTAND the clinical condition, proposed treatment, and alternatives; 2. APPRECIATE the consequences and personal impact of accepting or refusing treatment; 3. REASON logically through options using a coherent value system; 4. COMMUNICATE A CLEAR, STABLE CHOICE. If all 4 are met, a patient has the legal and ethical right to refuse life-saving therapy.',
    citation: "Appelbaum PS. Clinical practice. Assessment of patients' competence to consent to treatment. N Engl J Med. 2007;357(18):1834-1840. PMID: 17978292.",
    stem:
      'A 62-year-old man with a history of major depressive disorder treated with sertraline is admitted to the surgical ward with severe gangrenous necrosis of his left foot complicating severe peripheral artery disease and uncontrolled type 2 diabetes. Vascular surgery evaluation concludes that the patient requires an urgent below-the-knee amputation to prevent ascending osteomyelitis, polymicrobial bacteremia, septic shock, and death within days. The patient adamantly refuses surgical amputation, stating: "I understand that my foot has severe gangrene and that without an amputation, the infection will spread into my bloodstream and kill me within days. However, I have lived my entire life as an active carpenter, and I simply cannot bear the thought of living without my leg. I would rather die with my body intact than live as an amputee, and I have made peace with that outcome." On psychiatric examination, the patient is euthymic, calm, and displays no suicidal ideation, psychosis, delusions, or hallucinations. He demonstrates a thorough understanding of his diagnosis, clearly explains the risks of dying from sepsis without surgery, articulates a consistent personal philosophy regarding bodily integrity, and consistently maintains his choice. The surgical attending requests that the psychiatrist declare the patient incapacitated so surgery can proceed against his will. Which of the following is the most appropriate psychiatric and ethical determination?',
    options: [
      {
        text: 'The patient possesses decision-making capacity to refuse the amputation, and his autonomous refusal must be respected',
        explanation: 'Clinical decision-making capacity is a clinical determination made by any licensed physician (in contrast to legal competence, which is adjudicated by a court of law). Capacity is DECISION-SPECIFIC and requires four core cognitive elements: (1) UNDERSTANDING the nature of the condition, proposed intervention, and risks/benefits; (2) APPRECIATING the personal consequences of the decision on one\'s own health and life; (3) REASONING through the risks and alternatives using a logical, internally consistent thought process; and (4) COMMUNICATING a clear, stable, voluntary choice. A history of psychiatric illness (such as treated major depression) does NOT automatically invalidate capacity. The patient clearly understands that refusing amputation will result in sepsis and death, appreciates this fatal outcome personally, articulates a coherent reason rooted in personal values of bodily integrity, and communicates a firm, consistent decision. Even though refusing life-saving amputation appears medically catastrophic to the surgical team, a patient with decision-making capacity has the absolute ethical and legal right to bodily autonomy and self-determination, including the right to refuse life-saving intervention.'
      },
      {
        text: 'The patient lacks decision-making capacity because choosing an intervention that leads to certain death is inherently irrational',
        explanation: 'An autonomous choice that leads to death does not equal lack of capacity; patients with full capacity have the legal and ethical right to refuse life-saving interventions based on personal values.'
      },
      {
        text: 'The patient lacks capacity because his history of major depressive disorder impairs objective judgment',
        explanation: 'A psychiatric diagnosis alone does not strip a patient of capacity; the patient has no active suicidal ideation or depressive distortion impacting his reasoning.'
      },
      {
        text: 'Involuntary emergency guardianship must be sought immediately to authorize the amputation',
        explanation: 'Guardianship is sought only when a patient lacks capacity; seeking guardianship for a patient who possesses full capacity violates civil liberties and medical ethics.'
      },
      {
        text: 'The surgeon should invoke therapeutic privilege and perform the amputation under implied consent',
        explanation: 'Therapeutic privilege is a narrow exception regarding withholding distressing diagnostic information; it never permits performing non-consensual surgery on a competent, refusing adult.'
      }
    ]
  },
  {
    code: 'op-c-s3-0104',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Transitions of Care and Hospital Discharge Medication Reconciliation',
    subtopic: 'Medication Reconciliation and Post-Discharge Follow-Up Within 7-14 Days',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Care Transitions (Inpatient Discharge to Ambulatory Setting): High-risk window for adverse drug events and readmissions (> 50% of post-discharge medication errors occur from reconciliation discrepancies). BEST PRACTICES: 1. COMPREHENSIVE MEDICATION RECONCILIATION at every transition (compare pre-admission medications, inpatient changes, and final discharge list; explicitly discontinue holdover/temporary drugs); 2. Provide patient-friendly written instructions; 3. MANDATORY SCHEDULED OUTPATIENT FOLLOW-UP WITHIN 7 TO 14 DAYS (reduces 30-day all-cause readmissions); 4. Ensure clear communication with primary care physician within 24-48 hours.',
    citation: "Kripalani S, et al. Deficits in communication and information transfer between hospital-based and primary care physicians: implications for patient safety and continuity of care. JAMA. 2007;297(8):831-841. PMID: 17327525.",
    stem:
      'A 73-year-old woman with a history of heart failure with reduced ejection fraction (HFrEF, EF 30%), type 2 diabetes mellitus, and chronic kidney disease stage 3 is discharged from the hospital following a 4-day admission for acute decompensated heart failure. During hospitalization, her oral home furosemide 40 mg daily was escalated to intravenous furosemide 80 mg twice daily, achieving a 5-kg net fluid loss and resolution of orthopnea. Her pre-admission outpatient regimen included lisinopril 20 mg daily, metoprolol succinate 50 mg daily, metformin 1000 mg twice daily, and atorvastatin 40 mg daily. During admission, her serum creatinine rose from baseline 1.3 mg/dL to 1.8 mg/dL with a BUN of 36 mg/dL; lisinopril was held temporarily, and oral furosemide was increased to 80 mg daily upon discharge. Which of the following discharge care transition bundles has the strongest evidence for reducing 30-day hospital readmissions and preventable adverse drug events in this patient?',
    options: [
      {
        text: 'Perform formal medication reconciliation comparing pre-admission and discharge medications, provide clear written instructions, and schedule an in-person primary care clinic follow-up within 7 to 14 days',
        explanation: 'The transition of care from the inpatient hospital setting to home is a vulnerable period characterized by high rates of preventable adverse drug events, medical errors, and hospital readmissions. Extensive health services research and transitional care model guidelines demonstrate that the most effective multidisciplinary strategy to reduce 30-day all-cause hospital readmission includes: (1) FORMAL MULTIDISCIPLINARY MEDICATION RECONCILIATION: Systematically comparing the patient\'s pre-hospitalization medication list with inpatient modifications and the final discharge prescription list, explicitly clarifying held medications (such as when to recheck renal function to resume lisinopril) and adjusting diuretic doses (furosemide 80 mg); (2) Structured, patient-centered discharge counseling with clear, plain-language written instructions and "teach-back" verification; and (3) A MANDATED POST-DISCHARGE OUTPATIENT FOLLOW-UP VISIT SCHEDULED WITHIN 7 TO 14 DAYS (or within 7 days for high-risk heart failure patients). Early outpatient evaluation allows timely assessment of volume status, electrolyte monitoring (potassium, creatinine), and safe titration of guideline-directed medical therapy.'
      },
      {
        text: 'Instruct the patient to resume all pre-admission home medications alongside all new hospital prescriptions and call if symptoms recur',
        explanation: 'Instructing patients to resume pre-admission drugs without reconciliation causes accidental duplication of therapy (e.g., taking both furosemide 40 mg and 80 mg) and severe toxicity.'
      },
      {
        text: 'Schedule an outpatient cardiology follow-up visit in 3 months and advise the patient to monitor daily weights',
        explanation: 'A 3-month follow-up interval is far too long for high-risk heart failure with acute kidney injury; the highest hazard of decompensation and mortality occurs in the first 7 to 14 days.'
      },
      {
        text: 'Discharge the patient with a 90-day supply of medications without contacting her outpatient primary care provider',
        explanation: 'Failing to communicate inpatient changes and follow-up lab orders to the outpatient primary physician leads to fractured care and high readmission rates.'
      },
      {
        text: 'Rely solely on automated electronic portal discharge summaries without direct verbal patient education',
        explanation: 'Automated electronic notes without personalized verbal counseling and teach-back comprehension assessment result in severe post-discharge medication non-adherence.'
      }
    ]
  },
  {
    code: 'op-c-s3-0105',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Mandatory Reporting of Elder Abuse and Neglect',
    subtopic: 'Suspected Physical Abuse/Financial Exploitation Reporting to Adult Protective Services',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Suspected Elder Abuse and Neglect: - SIGNS: Unexplained bruises in atypical locations (inner arms, back, posterior calves), burns, decubitus ulcers in malnourished patient, poor hygiene, dehydration, sudden changes in wills/bank accounts (financial exploitation), caregiver refusing to allow patient to speak alone. - LEGAL OBLIGATION: PHYSICIANS ARE STATUTORILY MANDATED REPORTERS. Immediate, confidential report to ADULT PROTECTIVE SERVICES (APS) is mandatory upon REASONABLE SUSPICION (proof or absolute certainty is NOT required). Interview the patient ALONE. Ensure immediate safety; admit to hospital if in imminent physical danger.',
    citation: "Lachs MS, et al. Elder Abuse. N Engl J Med. 2015;373(20):1947-1956. PMID: 26559573.",
    stem:
      'An 82-year-old woman with mild cognitive impairment and osteoporosis is brought to the primary care clinic by her adult grandson, who is her primary live-in caregiver. The grandson states that the patient had a "minor stumble" in the kitchen 2 days ago. Throughout the encounter, the grandson answers all questions aggressively, hovers closely over the patient, and repeatedly attempts to interrupt the physician. When the physician politely asks the grandson to wait in the reception area so that a private physical examination can be conducted, the grandson becomes visibly agitated but eventually leaves the room. On physical examination, the patient appears disheveled, unwashed, and cachectic, weighing 42 kg (loss of 8 kg over 6 months). Examination of the skin reveals multiple bilateral contusions of varying ages across the medial aspects of her upper arms, the posterior chest wall, and both buttocks; several rectangular linear ecchymoses are present along her back resembling belt marks. In addition, an unstageable 4-cm necrotic sacral decubitus ulcer with foul odor is noted. When asked gently about these injuries in private, the patient looks down at her hands, begins weeping quietly, and whispers: "Please don\'t say anything to him, he gets very angry when I don\'t give him my social security checks." Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Hospitalize the patient for immediate medical care and safety, and file an immediate report with Adult Protective Services',
        explanation: 'This 82-year-old vulnerable adult exhibits classic, severe physical abuse, neglect, and financial exploitation by her caregiver grandson: unexplained contusions of varying ages in non-accidental locations (medial arms, posterior trunk, buttocks, and linear marks suggestive of an implement), severe cachexia, an advanced neglected stage 4 sacral ulcer, caregiver interference during the medical exam, and direct disclosure of violence and financial coercion. In all 50 states, LICENSED HEALTHCARE PROVIDERS ARE STATUTORILY MANDATED REPORTERS OF SUSPECTED ELDER ABUSE AND NEGLECT. The standard for reporting is "reasonable suspicion"—physicians do not need definitive legal proof, forensic certainty, or the caregiver\'s admission before reporting. The appropriate immediate management is twofold: (1) ENSURE IMMEDIATE PATIENT SAFETY AND MEDICAL STABILIZATION by admitting her to the hospital (to treat malnutrition, infected sacral ulcer, and prevent the abusive grandson from removing her); and (2) FILE AN IMMEDIATE REPORT WITH ADULT PROTECTIVE SERVICES (APS) and hospital social work/security.'
      },
      {
        text: 'Confront the grandson directly in the examination room and demand an explanation for the bruises before making any reports',
        explanation: 'Confronting the suspected abuser escalates danger, risks violent retaliation against the patient or medical staff, and frequently causes the abuser to flee with the vulnerable victim.'
      },
      {
        text: 'Respect the patient\'s request for confidentiality and refrain from reporting the abuse',
        explanation: 'Physician reporting of suspected elder abuse is a statutory legal mandate that legally supersedes patient confidentiality and cannot be waived, especially when cognitive impairment and coercion are present.'
      },
      {
        text: 'Prescribe topical wound dressings for the sacral ulcer and arrange home health nursing visits without contacting authorities',
        explanation: 'Home health nursing alone cannot protect a victim from severe physical abuse and financial exploitation in an unsafe home environment.'
      },
      {
        text: 'Discharge the patient home with scheduled follow-up in 1 week to document if new bruises appear',
        explanation: 'Sending an abused elder back into the home of a dangerous abuser exposes her to severe physical injury or homicide, constituting gross medical negligence.'
      }
    ]
  },
  {
    code: 'op-c-s3-0106',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Exceptions to Medical Confidentiality: Tarasoff Duty to Protect',
    subtopic: 'Imminent Threat of Serious Harm to an Identifiable Third Party',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Apply Exceptions to Confidentiality (Tarasoff Ruling / Duty to Protect): - CORE PRINCIPLE: Physician-patient confidentiality is protected, but NOT ABSOLUTE. - TARASOFF CRITERIA FOR BREACHING CONFIDENTIALITY: 1. Patient makes an EXPLICIT, CREDIBLE THREAT OF IMMINENT SERIOUS PHYSICAL HARM OR HOMICIDE; 2. Against an IDENTIFIABLE INDIVIDUAL OR SPECIFIC TARGET GROUP; 3. Patient has the apparent intent and means to carry out the threat. - MANDATORY ACTIONS: 1. NOTIFY LAW ENFORCEMENT; 2. WARN/NOTIFY THE IDENTIFIABLE INTENDED VICTIM; 3. Hospitalize/detain the patient involuntarily for emergency psychiatric evaluation.',
    citation: "American Psychiatric Association. Commentary on Ethics in Practice: The Duty to Protect. APA Ethics Committee. 2015;42(2):1-8.",
    stem:
      'A 31-year-old man presents to an outpatient psychiatric clinic for an initial intake evaluation. He reports that his wife of 6 years abruptly filed for divorce and moved out 2 weeks ago, taking their young daughter with her. He describes intense feelings of rage, humiliation, and insomnia. When questioned about thoughts of violence, he becomes visibly flushed, clenches his fists, and leans forward, stating: "I bought an unregistered handgun from a guy yesterday, and I know exactly what time she leaves her accounting office tomorrow afternoon. I am going to wait in the parking garage and shoot her in the chest so she never takes my daughter away again." When the psychiatrist attempts to explore voluntary inpatient psychiatric admission, the patient stands up, demands his coat, and insists: "I am leaving now, and don\'t even think about calling anyone because doctor-patient confidentiality prevents you from saying a word." Which of the following is the most appropriate immediate legal and ethical action for the psychiatrist?',
    options: [
      {
        text: 'Detain the patient for emergency involuntary psychiatric hospitalization, and immediately notify both law enforcement and the intended victim',
        explanation: 'This clinical vignette illustrates the classic application of the landmark TARASOFF RULING (Duty to Warn and Duty to Protect). While physician-patient confidentiality is a foundational tenet of medical practice, it is NOT absolute. Confidentiality must be breached when a patient poses an IMMINENT, SERIOUS PHYSICAL THREAT TO AN IDENTIFIABLE THIRD PARTY. The three essential criteria requiring a breach of confidentiality are: (1) An explicit, specific threat of serious bodily injury or homicide; (2) Directed at an identifiable, specific victim (his estranged wife); and (3) The patient possesses the means (a purchased handgun) and a concrete plan (ambushing her at her workplace parking garage tomorrow). Under the duty to protect/warn, the clinician is legally and ethically mandated to: (1) Notify and warn law enforcement; (2) Notify and warn the intended victim; and (3) Immediately detain the patient for emergency involuntary psychiatric evaluation/hospitalization to prevent imminent harm.'
      },
      {
        text: 'Maintain strict doctor-patient confidentiality and schedule an urgent follow-up appointment for tomorrow morning',
        explanation: 'Maintaining confidentiality in the face of an explicit, homicidal threat against an identifiable victim with means and opportunity violates the legal duty to protect and leads to preventable murder.'
      },
      {
        text: 'Notify law enforcement but withhold warning the wife to preserve the patient\'s privacy rights',
        explanation: 'Tarasoff explicitly established a duty to protect/warn the intended victim directly or ensure law enforcement warns her immediately.'
      },
      {
        text: 'Contact the patient\'s parents to request that they take away the patient\'s handgun',
        explanation: 'Relying on family members to disarm a violent, agitated individual is ineffective, dangerous, and fails to satisfy statutory duty-to-protect mandates.'
      },
      {
        text: 'Prescribe a high dose of oral olanzapine and allow the patient to leave the clinic',
        explanation: 'Allowing an armed, homicidal patient with an active ambush plan to leave the clinic constitutes gross malpractice and criminal negligence.'
      }
    ]
  },
  {
    code: 'op-c-s3-0107',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Medical Malpractice Four Cardinal Elements',
    subtopic: 'Duty, Breach of Standard of Care, Causation (Proximate Cause), and Damages',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Analyze Medical Malpractice (Tort Law): - 4 ESSENTIAL ELEMENTS MUST BE PROVEN BY PREPONDERANCE OF EVIDENCE: 1. DUTY: Physician-patient relationship existed; 2. DERELICTION (BREACH): Physician breached the prevailing standard of care (failed to act as a reasonably prudent physician); 3. DIRECT CAUSATION (PROXIMATE CAUSE): The breach of care DIRECTLY CAUSED the adverse outcome ("but-for" causation and foreseeable harm); 4. DAMAGES: Actual measurable physical, emotional, or economic injury occurred. CRITICAL PRINCIPLE: A breach of standard of care WITHOUT resulting injury/harm DOES NOT constitute malpractice.',
    citation: "Bal BS. An introduction to medical malpractice in the United States. Clin Orthop Relat Res. 2009;467(2):339-347. PMID: 18925447.",
    stem:
      'A 54-year-old man visits a primary care clinic for an annual health maintenance examination. During the visit, a routine screening lipid panel is ordered. The laboratory reports a serum total cholesterol of 260 mg/dL, HDL cholesterol of 35 mg/dL, and LDL cholesterol of 185 mg/dL. The physician fails to review the laboratory results, does not notify the patient, and does not initiate statin therapy or dietary counseling as indicated by prevailing clinical practice guidelines. Two weeks later, while walking across a designated pedestrian crosswalk, the patient is struck by a distracted driver operating a commercial delivery truck, sustaining multiple open femoral fractures and an epidural hematoma requiring emergency neurosurgical craniotomy. The patient consults an attorney and files a medical malpractice lawsuit against the primary care physician, alleging that the failure to review the lipid panel and prescribe a statin constituted medical negligence. In evaluating this legal claim, which of the following essential elements of medical malpractice is clearly missing?',
    options: [
      {
        text: 'Proximate causation linking the physician\'s breach of care directly to the patient\'s traumatic injuries',
        explanation: 'Under tort law in the United States, to successfully establish a claim of medical malpractice (negligence), a plaintiff must prove FOUR CARDINAL ELEMENTS by a preponderance of the evidence: (1) DUTY: A formal physician-patient relationship existed, establishing a duty of care; (2) DERELICTION (BREACH): The physician breached the established standard of care by failing to act as a reasonably prudent physician under similar circumstances (here, failing to review laboratory results and initiate guideline-indicated statin therapy); (3) DIRECT CAUSATION (PROXIMATE CAUSE): The physician\'s breach of care was the actual and proximate cause of the patient\'s injury (the harm would not have occurred "but for" the physician\'s negligence, and the injury was a foreseeable consequence); and (4) DAMAGES: Actual, compensable physical, financial, or emotional injury resulted. In this case, while the physician undeniably breached the standard of care by ignoring abnormal lipid results, that omission had ZERO CAUSAL CONNECTION to the patient being struck by a motor vehicle in a pedestrian crosswalk. Because proximate causation between the physician\'s failure and the pedestrian trauma is completely absent, a medical malpractice claim cannot be sustained.'
      },
      {
        text: 'Physician duty of care to the patient',
        explanation: 'Duty of care is clearly present because a formal, direct physician-patient relationship was established during the annual wellness examination.'
      },
      {
        text: 'Dereliction or breach of the prevailing standard of medical care',
        explanation: 'Breach of duty is undeniably present because failing to review ordered laboratory results and failing to manage severe hyperlipidemia violates the medical standard of care.'
      },
      {
        text: 'Actual measurable physical and financial damages sustained by the patient',
        explanation: 'The patient suffered catastrophic physical damages (open fractures, intracranial hematoma) and financial medical expenses, but they were caused by a truck, not the physician.'
      },
      {
        text: 'Statutory competence of the patient to execute a legal tort complaint',
        explanation: 'The patient\'s legal competency to file a lawsuit is a procedural issue, not one of the four substantive tort elements of medical malpractice.'
      }
    ]
  },
  {
    code: 'op-c-s3-0108',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Cross-Cultural Medicine and Certified Medical Interpreters',
    subtopic: 'Professional Trained Interpreter vs Minor Children or Family Members',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Language Barriers in Healthcare (Title VI Civil Rights Act): - GOLD STANDARD: CERTIFIED PROFESSIONAL MEDICAL INTERPRETER (in-person or via secure video/telephone interpretation service). - RULES: 1. NEVER use ad-hoc interpreters: minor children, family members, friends, or bilingual non-clinical hospital staff (high rate of clinical errors, omission of critical info, violation of patient privacy/confidentiality); 2. Address and maintain eye contact with the PATIENT directly, speaking in short sentences using first person ("Do you have chest pain?", not "Ask him if he has..."); 3. Document the use of a professional interpreter in the medical record.',
    citation: "Karliner LS, et al. Do professional interpreters improve clinical care for patients with limited English proficiency? A systematic review of the literature. Health Serv Res. 2007;42(2):727-754. PMID: 17362215.",
    stem:
      'A 58-year-old woman who recently immigrated from rural Guatemala presents to the outpatient clinic with a 3-month history of postmenopausal vaginal bleeding and pelvic pain. The patient speaks exclusively Mam (an indigenous Mayan language) and has very limited proficiency in Spanish or English. She is accompanied by her 11-year-old bilingual grandson, who attends local public school and speaks both English and Mam fluently. The grandson states: "My grandmother is bleeding from down there, and she is very scared. I can translate everything you say to her so we don\'t have to wait." The clinic staff notes that there are no clinic employees who speak Mam, but the hospital provides a 24-hour certified telephone and video medical interpretation service that includes certified Mam interpreters. Which of the following is the most appropriate next step in communication and clinical management?',
    options: [
      {
        text: 'Utilize the certified telephone or video medical interpreter service to conduct the clinical interview, maintaining direct eye contact with the patient',
        explanation: 'Under Title VI of the Civil Rights Act and standard healthcare ethics, patients with limited English proficiency (LEP) have the legal and ethical right to receive medical care in their preferred language through a qualified medical interpreter. The gold standard and only acceptable practice is to utilize a CERTIFIED PROFESSIONAL MEDICAL INTERPRETER (in-person, telephone, or video interpretation). Using ad-hoc interpreters—especially MINOR CHILDREN OR FAMILY MEMBERS—is strictly contraindicated and represents substandard care. Minor children lack medical vocabulary, frequently misinterpret complex medical concepts, feel inappropriate emotional burden, and may withhold sensitive gynecologic, sexual, or oncologic information due to embarrassment or cultural taboos. Furthermore, having a young child translate intimate questions regarding postmenopausal bleeding violates the patient\'s dignity, confidentiality, and autonomy. When utilizing a certified interpreter, the clinician should look directly at the patient, speak in the first person ("Where is your pain?" rather than "Ask her where her pain is"), and use short, plain-language sentences.'
      },
      {
        text: 'Allow the 11-year-old grandson to interpret the encounter because he is a trusted family member',
        explanation: 'Using minor children as medical interpreters is unethical, breaches patient privacy, places an inappropriate psychological burden on the child, and leads to dangerous diagnostic errors.'
      },
      {
        text: 'Conduct the physical examination without an interpreter to avoid making the patient uncomfortable',
        explanation: 'Performing an invasive pelvic examination without communication and informed consent is traumatic, ethically unacceptable, and constitutes medical battery.'
      },
      {
        text: 'Attempt to communicate in rudimentary Spanish using written pamphlets and hand gestures',
        explanation: 'The patient speaks Mam, an indigenous language completely distinct from Spanish; guessing with hand gestures violates standard of care and informed consent.'
      },
      {
        text: 'Reschedule the appointment for a future date when an in-person Mam-speaking physician can be found',
        explanation: 'Postmenopausal bleeding is an alarm symptom for endometrial carcinoma requiring prompt evaluation; delaying care when telephone/video certified interpreters are available is unsafe.'
      }
    ]
  },
  {
    code: 'op-c-s3-0109',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Palliative Symptom Management and the Principle of Double Effect',
    subtopic: 'Opioid Escalation for Terminal Dyspnea and Foreseeable vs Intended Effects',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Apply the Principle of Double Effect in Palliative Medicine: - ETHICAL DILEMMA: Administering high doses of opioids to relieve severe, refractory terminal dyspnea or pain in a dying patient carries a foreseeable secondary risk of respiratory depression and hastening death. - 4 CRITERIA OF DOUBLE EFFECT: 1. The act itself must be morally good or neutral (relieving suffering); 2. The clinician INTENDS ONLY THE BENEFICIAL EFFECT (pain/dyspnea relief), NOT the adverse effect (death is foreseeable but unintended); 3. The good effect is NOT achieved by means of the bad effect (death is not the vehicle of relief); 4. The beneficial effect proportionately outweighs the adverse outcome. Opioids are the gold standard for terminal dyspnea.',
    citation: "Sulmasy DP, et al. The Rule of Double Effect: Clearing Up the Double Talk. Arch Intern Med. 1999;159(6):545-550. PMID: 10090110.",
    stem:
      'A 78-year-old woman with terminal, refractory stage IV pancreatic adenocarcinoma with extensive peritoneal carcinomatosis is admitted to an inpatient hospice palliative care unit for end-of-life care. Her goal of care is strictly comfort, and she has valid "Do Not Resuscitate" (DNR) and "Do Not Intubate" (DNI) orders. Over the past 6 hours, the patient has developed severe, distressing terminal dyspnea and air hunger, gasping for breath and appearing visibly anguished. Auscultation reveals coarse secretions and shallow, labored breathing with a respiratory rate of 34/min and an oxygen saturation of 82% on room air. The palliative care team prepares an intravenous morphine infusion to relieve her dyspnea. The patient\'s son expresses anxiety to the physician, asking: "If you give her more morphine, won\'t that slow down her breathing and make her die faster? Isn\'t that the same as physician-assisted suicide?" Which of the following ethical principles provides the primary moral and legal justification for administering escalating doses of opioids to relieve this patient\'s suffering?',
    options: [
      {
        text: 'The principle of double effect, which permits an action intended to relieve suffering even if it has the foreseeable, unintended consequence of hastening death',
        explanation: 'The PRINCIPLE OF DOUBLE EFFECT is a cornerstone of end-of-life medical ethics and palliative medicine. It provides moral and legal justification for an action that has two potential effects: an intended beneficial effect (relieving unbearable pain or severe dyspnea) and a foreseeable, unintended secondary adverse effect (respiratory depression and potentially hastening death). For the principle of double effect to apply, four strict conditions must be satisfied: (1) The medical act itself must be morally good or neutral (providing symptom relief and compassionate comfort care); (2) The physician\'s primary INTENTION must be solely to achieve the beneficial effect (relieving air hunger and suffering), NEVER to intentionally cause death; (3) The beneficial effect must not be achieved by means of the harmful effect (death is not the mechanism that produces pain relief); and (4) There must be a grave, proportionate reason for risking the foreseeable adverse effect (intense suffering in a dying patient). Administering titrated intravenous opioids is the standard-of-care, first-line therapy for terminal dyspnea; clinical studies show that when properly titrated for comfort, opioids relieve air hunger without significantly shortening life.'
      },
      {
        text: 'The doctrine of therapeutic privilege, which allows physicians to withhold harmful truths from anxious relatives',
        explanation: 'Therapeutic privilege involves withholding distressing medical information from a patient; it has no relevance to symptom management or the ethics of opioid administration.'
      },
      {
        text: 'The concept of active voluntary euthanasia, authorized under statutory palliative comfort care provisions',
        explanation: 'Active euthanasia involves intentionally administering a lethal substance to cause death; it is illegal in the United States and directly opposed to palliative opioid administration.'
      },
      {
        text: 'The principle of non-maleficence, which strictly prohibits administering opioids if respiratory depression could occur',
        explanation: 'Under-treating severe terminal pain and air hunger due to fear of respiratory depression violates medical ethics and causes unnecessary, cruel suffering.'
      },
      {
        text: 'The emergency doctrine of implied consent in the intensive care setting',
        explanation: 'Implied consent applies to emergency life-saving interventions for incapacitated trauma patients without known wishes, not planned end-of-life hospice palliative care.'
      }
    ]
  },
  {
    code: 'op-c-s3-0110',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'Endocrine',
    topic: 'Glycemic Goals and Sulfonylurea Selection in Frail Elderly Diabetics',
    subtopic: 'Relaxed HbA1c Goals (< 8.0-8.5%) and Avoiding Long-Acting Glyburide',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Glycemic Targets in Frail Older Adults (ADA / AGS Guidelines): - HEALTHY OLDER ADULTS (few chronic illnesses, intact cognition): HbA1c < 7.0-7.5%. - FRAIL OLDER ADULTS (multiple chronic illnesses, cognitive impairment, nursing home resident, limited life expectancy): RELAXED HbA1c TARGET OF < 8.0% TO 8.5%. RATIONALE: Severe hypoglycemia causes falls, hip fractures, myocardial ischemia, stroke, and sudden death. - MEDICATION SAFETY: AVOID LONG-ACTING SULFONYLUREAS (GLYBURIDE, chlorpropamide) due to high risk of severe, prolonged, fatal hypoglycemia. Safer alternatives: Metformin (if eGFR > 30), DPP-4 inhibitors (linagliptin requires no renal adjustment), or SGLT2 inhibitors.',
    citation: "American Diabetes Association. 13. Older Adults: Standards of Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1):S244-S257. PMID: 38078593.",
    stem:
      'An 84-year-old woman with a 20-year history of type 2 diabetes mellitus, moderate vascular dementia, osteoarthritis, and chronic kidney disease stage 3b (eGFR 38 mL/min/1.73 m²) is brought to the geriatric clinic by her daughter. The daughter reports that over the past 2 weeks, her mother has experienced three episodes of profuse sweating, confusion, trembling, and unsteadiness occurring in the late morning, which resolved after drinking orange juice. Yesterday, the patient fell while walking to the bathroom during one of these episodes, sustaining painful bruises on her left hip. Her home medications include glyburide 10 mg twice daily, metformin 500 mg twice daily, and atorvastatin 20 mg daily. On physical examination, her blood pressure is 128/74 mm Hg, heart rate is 72/min, and BMI is 22 kg/m². Point-of-care capillary blood glucose in clinic is 58 mg/dL. Laboratory testing reveals: serum creatinine 1.6 mg/dL, BUN 28 mg/dL, and hemoglobin A1c of 6.2%. Which of the following is the most appropriate management plan for this patient\'s glycemic control?',
    options: [
      {
        text: 'Discontinue glyburide immediately and liberalize the hemoglobin A1c target to less than 8.0% to 8.5%',
        explanation: 'This frail 84-year-old woman with vascular dementia and chronic kidney disease is suffering from recurrent, severe, life-threatening hypoglycemia (manifested by falls, autonomic symptoms, and clinic glucose of 58 mg/dL) directly caused by GLYBURIDE. Under the American Diabetes Association (ADA) and American Geriatrics Society (AGS) guidelines: (1) Glyburide is a long-acting second-generation sulfonylurea with active metabolites that are renally excreted; in older adults with renal impairment (eGFR 38 mL/min), drug accumulation causes prolonged, unpredictable, and potentially fatal hypoglycemia. Glyburide is explicitly flagged on the Beers Criteria and must be discontinued. (2) Glycemic goals must be individualized based on functional status and life expectancy. In frail older adults with multiple complex comorbidities, dementia, and high fall risk, tight glycemic control (HbA1c < 6.5-7.0%) confers ZERO microvascular or macrovascular benefit and dramatically increases the risk of fatal hypoglycemia, cardiovascular events, and fractures. The recommended HbA1c target for this population is LIBERALIZED TO < 8.0% TO 8.5%. Safer oral agents with minimal hypoglycemia risk (such as DPP-4 inhibitors like linagliptin, which requires no renal dose adjustment) can be considered if needed.'
      },
      {
        text: 'Add sliding-scale regular insulin before each meal to maintain hemoglobin A1c strictly below 6.5%',
        explanation: 'Sliding-scale insulin in a frail, demented patient with eGFR 38 mL/min exponentially increases severe hypoglycemic episodes and mortality, and is strongly discouraged.'
      },
      {
        text: 'Increase glyburide to 15 mg twice daily and add oral glipizide for tighter control',
        explanation: 'Escalating sulfonylurea therapy in a patient actively falling with blood glucose 58 mg/dL will precipitate irreversible hypoglycemic coma and death.'
      },
      {
        text: 'Double the dose of metformin to 1000 mg twice daily while maintaining glyburide',
        explanation: 'High-dose metformin in moderate-to-severe CKD (eGFR 38 mL/min) increases the risk of lactic acidosis and fails to address the underlying sulfonylurea hypoglycemia.'
      },
      {
        text: 'Maintain the current medication regimen and advise the daughter to give candy whenever symptoms arise',
        explanation: 'Relying on rescue candy without addressing the inappropriate medication regimen leaves the patient at imminent risk of fatal overnight hypoglycemic arrest.'
      }
    ]
  },
  {
    code: 'op-c-s3-0111',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'Behavioral Health',
    topic: 'Criteria for Involuntary Psychiatric Hospitalization',
    subtopic: 'Imminent Danger to Self or Others and Inability to Care for Basic Needs',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Determine Criteria for Involuntary Psychiatric Civil Commitment: - CORE PRINCIPLE: Involuntary hospitalization deprives an individual of constitutional liberty and requires strict legal justification. - 3 UNIVERSAL STATUTORY CRITERIA (ANY ONE IS SUFFICIENT): 1. IMMINENT DANGER TO SELF (active suicidal ideation with concrete plan, intent, or recent attempt); 2. IMMINENT DANGER TO OTHERS (active homicidal intent or severe physical assaultiveness due to mental illness); 3. GRAVE DISABILITY (inability to provide basic life-sustaining needs: food, clothing, shelter, or medical survival due to a mental illness). A voluntary admission should always be attempted first, but refusal mandates immediate emergency involuntary hold.',
    citation: "Hedman LC, et al. State Laws on Emergency Holds for Mental Health Evaluation. Psychiatr Serv. 2016;67(5):529-535. PMID: 26766099.",
    stem:
      'A 27-year-old man with a history of bipolar I disorder is brought to the emergency department by his parents after sending them a text message that read: "I cannot take this darkness anymore. I have a rope tied in my garage, and I am going to end it all tonight." In the examination room, the patient appears disheveled, tearful, and severely psychomotor-retarded. When interviewed, he freely admits to the physician: "My girlfriend broke up with me last week, and life is completely pointless. I have the rope hung over the rafter in my garage right now. As soon as I walk out of this hospital, I am going straight home to hang myself." The physician explains that he has severe major depressive disorder and requires admission to the inpatient psychiatric unit for safety and treatment. The patient adamantly refuses, stands up, and states: "You cannot keep me here against my will. I am an adult, I have constitutional rights, and I am walking out the front door right now." Which of the following is the most appropriate next step in the clinical and legal management of this patient?',
    options: [
      {
        text: 'Initiate an immediate involuntary emergency psychiatric hold and admit the patient to the secure inpatient psychiatric unit',
        explanation: 'This 27-year-old man meets clear, unequivocal statutory criteria for INVOLUNTARY EMERGENCY PSYCHIATRIC HOSPITALIZATION (civil commitment). While voluntary psychiatric admission is always preferred when possible, an individual may be detained and admitted against their will under state mental health statutes when they satisfy ANY of the following three criteria resulting from a severe mental illness: (1) IMMINENT DANGER TO SELF (active suicidal ideation with explicit intent, a lethal plan, and an immediately available means—here, a hung rope in his garage); (2) IMMINENT DANGER TO OTHERS (homicidal or violent threats); or (3) GRAVE DISABILITY (inability to provide for basic life-sustaining needs like food, clothing, or shelter). When an individual expresses active, lethal suicidal intent and refuses voluntary hospitalization, the physician has an absolute legal and ethical duty to initiate an involuntary emergency medical hold (e.g., 72-hour hold) to prevent self-harm and ensure safety. Allowing him to leave would constitute gross medical negligence and abandonment.'
      },
      {
        text: 'Allow the patient to sign out Against Medical Advice (AMA) after documenting his full decision-making capacity',
        explanation: 'Allowing a patient with active, lethal suicidal intent and a prepared ligature to leave AMA is catastrophic medical negligence; suicide risk strips the right to sign out AMA.'
      },
      {
        text: 'Have the patient sign a "no-suicide contract" and discharge him into his parents\' custody',
        explanation: 'No-suicide contracts have zero proven legal or clinical efficacy in preventing suicide and cannot substitute for inpatient safety and psychiatric treatment.'
      },
      {
        text: 'Prescribe a 30-day supply of a tricyclic antidepressant and arrange outpatient follow-up in 48 hours',
        explanation: 'TCAs are highly lethal in overdose, and outpatient referral in the face of an imminent hanging plan is dangerous and improper.'
      },
      {
        text: 'Contact the patient\'s former girlfriend to mediate a reconciliation meeting in the emergency department',
        explanation: 'Attempting to mediate relationship conflicts delays urgent psychiatric stabilization and does not eliminate active suicidal lethality.'
      }
    ]
  },
  {
    code: 'op-c-s3-0112',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Perioperative Anticoagulation Bridging Management',
    subtopic: 'CHADS-VASc Score and Low-Molecular-Weight Heparin Bridging Decisions',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Perioperative Anticoagulation (BRIDGE Trial Guidelines): - DIRECT ORAL ANTICOAGULANTS (DOACs: Apixaban, Rivaroxaban): DO NOT REQUIRE HEPARIN BRIDGING. Stop 24-48 hours before low-bleeding-risk surgery, or 48-72 hours before high-bleeding-risk surgery. Resume 24-48 hours post-op. - WARFARIN BRIDGING INDICATIONS (Stop warfarin 5 days prior; bridge with therapeutic LMWH or IV UFH ONLY IN HIGH THROMBOEMBOLIC RISK): 1. Mechanical mitral valve (or older caged-ball/tilting disc valve); 2. Mechanical aortic valve WITH additional stroke risk factors; 3. Recent VTE or stroke within past 3 months; 4. Atrial fibrillation with VERY HIGH STROKE RISK (CHADS-VASc 7-9 or prior thromboembolism). Low-to-moderate risk AF (CHADS-VASc <= 6): BRIDGING INCREASES MAJOR BLEEDING WITHOUT REDUCING STROKE (no bridging indicated).',
    citation: "Douketis JD, et al. Perioperative Management of Antithrombotic Therapy: Antithrombotic Therapy and Prevention of Thrombosis, 9th ed: American College of Chest Physicians Evidence-Based Clinical Practice Guidelines. Chest. 2012;141(2 Suppl):e326S-e350S. PMID: 22315266.",
    stem:
      'A 68-year-old man with non-valvular atrial fibrillation and hypertension is scheduled to undergo an elective open right inguinal hernia repair in 7 days. His CHA2DS2-VASc score is 2 (age 68 and hypertension). He has no history of stroke, transient ischemic attack, deep vein thrombosis, or mechanical prosthetic heart valves. His current anticoagulation regimen consists of oral apixaban 5 mg twice daily. His serum creatinine is 1.0 mg/dL (estimated CrCl 75 mL/min). The surgical team refers the patient to the preoperative medical consultation clinic for instructions on how to manage his anticoagulation around the time of surgery. Which of the following is the most appropriate recommendation regarding perioperative management of his apixaban?',
    options: [
      {
        text: 'Discontinue apixaban 48 hours prior to surgery, perform the operation without low-molecular-weight heparin bridging, and resume apixaban 24 to 48 hours postoperatively once hemostasis is secure',
        explanation: 'This patient is taking a direct oral anticoagulant (DOAC, apixaban) for non-valvular atrial fibrillation with moderate thromboembolic risk (CHA2DS2-VASc = 2) and normal renal function. The landmark BRIDGE trial and current CHEST guidelines have transformed perioperative anticoagulation management: (1) DOACs have predictable, short half-lives (~12 hours). Routine perioperative "bridging" with therapeutic low-molecular-weight heparin (LMWH) or unfractionated heparin is STRICTLY NOT RECOMMENDED for patients on DOACs because heparin bridging dramatically increases major bleeding complications without reducing thromboembolic events. (2) For procedures with standard-to-high bleeding risk (such as open hernia repair), apixaban should be discontinued 48 hours prior to surgery (equivalent to 4 half-lives, allowing drug clearance). (3) Apixaban is resumed 24 to 48 hours postoperatively once surgical hemostasis is complete. In contrast, therapeutic bridging with LMWH is reserved almost exclusively for high-risk warfarin patients—such as mechanical mitral valves, mechanical aortic valves with risk factors, or recent venous thromboembolism within 3 months.'
      },
      {
        text: 'Discontinue apixaban 5 days prior to surgery and initiate therapeutic subcutaneous enoxaparin bridging twice daily',
        explanation: 'Stopping DOACs 5 days prior causes excessive time without anticoagulation, and enoxaparin bridging markedly increases perioperative bleeding complications without benefit.'
      },
      {
        text: 'Continue apixaban without interruption through the morning of surgery to prevent perioperative stroke',
        explanation: 'Operating on full-dose apixaban causes severe intraoperative and postoperative hematoma formation and surgical hemorrhage.'
      },
      {
        text: 'Administer intravenous andexanet alfa immediately prior to the surgical incision to neutralize apixaban',
        explanation: 'Andexanet alfa is an expensive reversal agent reserved for life-threatening emergency bleeding, not elective planned hernia repair.'
      },
      {
        text: 'Switch apixaban to oral warfarin 7 days before surgery and bridge with an intravenous heparin infusion',
        explanation: 'Transitioning from a DOAC to warfarin before an elective minor procedure is unnecessarily complex, dangerous, and contrary to all modern surgical guidelines.'
      }
    ]
  },
  {
    code: 'op-c-s3-0113',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Perioperative Glycemic Control and SGLT2 Inhibitor Cessation Window',
    subtopic: 'Euglycemic DKA Prevention and Withholding SGLT2i 3-4 Days Prior to Surgery',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Perioperative Diabetes & SGLT2 Inhibitors (FDA & ADA Safety Warning): - SGLT2 INHIBITORS (Empagliflozin, Dapagliflozin, Canagliflozin): Associated with EUGLYCEMIC DIABETIC KETOACIDOSIS (euDKA: ketoacidosis with normal or near-normal blood glucose < 250 mg/dL) during acute illness or surgical stress (fasting + stress hormones + decreased insulin). - MANDATORY PREOPERATIVE CESSATION WINDOW: Discontinue SGLT2 inhibitors AT LEAST 3 TO 4 DAYS PRIOR TO MAJOR ELECTIVE SURGERY (Canagliflozin, Dapagliflozin, Empagliflozin: hold 3 days; Ertugliflozin: hold 4 days). - Resume postoperatively only when oral intake is normal and patient is clinically stable.',
    citation: "US Food and Drug Administration. FDA warns that SGLT2 inhibitors for diabetes may cause rare condition of too much acid in the blood. FDA Drug Safety Communication. 2020.",
    stem:
      'A 61-year-old man with type 2 diabetes mellitus, chronic heart failure with reduced ejection fraction (EF 35%), and hypertension is scheduled to undergo an elective laparoscopic right hemicolectomy for a benign cecal adenoma in 5 days. His current medications include empagliflozin 10 mg daily, metformin 1000 mg twice daily, carvedilol 25 mg twice daily, and lisinopril 20 mg daily. His hemoglobin A1c is 7.4%, and his serum creatinine is 1.0 mg/dL. He visits the preoperative surgical optimization clinic to receive specific instructions on how to manage his medications prior to surgery. Which of the following is the most appropriate preoperative management instruction regarding his empagliflozin?',
    options: [
      {
        text: 'Discontinue empagliflozin at least 3 days prior to surgery to reduce the risk of postoperative euglycemic diabetic ketoacidosis',
        explanation: 'Sodium-glucose cotransporter-2 (SGLT2) inhibitors—including empagliflozin, dapagliflozin, and canagliflozin—are widely utilized for type 2 diabetes, heart failure, and chronic kidney disease. However, they carry a dangerous, well-documented risk of precipitating EUGLYCEMIC DIABETIC KETOACIDOSIS (euDKA) during the perioperative period. Under surgical stress, general anesthesia, and prolonged fasting, circulating glucagon and catecholamine levels surge while endogenous insulin secretion falls. SGLT2 inhibitors promote persistent urinary glucose excretion, which keeps blood glucose levels deceptively normal or only mildly elevated (often < 200-250 mg/dL) while simultaneously driving lipolysis and hepatic ketogenesis. This often delays the clinical diagnosis of severe metabolic ketoacidosis. To mitigate this life-threatening complication, the FDA and American Diabetes Association (ADA) mandate that SGLT2 INHIBITORS MUST BE DISCONTINUED AT LEAST 3 DAYS PRIOR TO SCHEDULED MAJOR SURGERY (and 4 days for ertugliflozin). The medication should only be resumed postoperatively once the patient has resumed regular oral enteral intake and metabolic stability is confirmed. (Metformin is also typically held on the morning of surgery).'
      },
      {
        text: 'Continue empagliflozin without interruption through the morning of surgery to maintain cardioprotection',
        explanation: 'Continuing SGLT2 inhibitors through the morning of major surgery carries a severe risk of life-threatening postoperative euglycemic diabetic ketoacidosis.'
      },
      {
        text: 'Discontinue empagliflozin only on the morning of surgery and administer subcutaneous regular insulin',
        explanation: 'Because of the pharmacodynamic duration of renal glucose excretion, holding SGLT2 inhibitors for only one morning is insufficient to eliminate the risk of euDKA.'
      },
      {
        text: 'Switch empagliflozin to high-dose oral glyburide 5 days prior to surgery',
        explanation: 'Substituting a long-acting sulfonylurea before prolonged fasting creates an extreme risk of refractory intraoperative and postoperative hypoglycemia.'
      },
      {
        text: 'Administer an intravenous dextrose infusion continuously at home starting 3 days before surgery',
        explanation: 'Prophylactic home dextrose infusions are unnecessary and impractical; simply holding the drug 3 to 4 days prior completely eliminates the risk of euDKA.'
      }
    ]
  },
  {
    code: 'op-c-s3-0114',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Advance Directives and Living Wills vs DNR/DNI Orders',
    subtopic: 'Comfort Care Goals vs Reversible Acute Surgical Emergencies',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Advance Directives and Code Status: - LIVING WILL: Specifies treatments a patient wants or refuses in terminal or permanently unconscious states. - DNR / DNI (Do Not Resuscitate / Do Not Intubate): Applies strictly to CARDIOPULMONARY ARREST (no chest compressions, defibrillation, or emergency endotracheal intubation). - CRITICAL CLINICAL RULE: DNR/DNI IS NOT EQUIVALENT TO "DO NOT TREAT" OR "COMFORT CARE ONLY". Patients with DNR/DNI orders are FULLY ELIGIBLE for all standard, active medical and surgical therapies for reversible acute conditions (IV antibiotics, blood transfusions, laparoscopic appendectomy for acute appendicitis, ICU care) UNLESS the patient or their advance directive explicitly refuses that specific treatment.',
    citation: "American College of Emergency Physicians. Do-Not-Attempt-Resuscitation Orders in the Outpatient and Emergency Care Settings. Ann Emerg Med. 2016;68(4):534-535. PMID: 27663456.",
    stem:
      'An 80-year-old woman with well-managed hypertension and mild osteoarthritis presents to the emergency department with a 24-hour history of severe periumbilical abdominal pain that has migrated to the right lower quadrant, accompanied by nausea, anorexia, and low-grade fever. On physical examination, her temperature is 38.2°C (100.8°F), blood pressure is 134/82 mm Hg, and heart rate is 96/min. Abdominal examination reveals focal tenderness, involuntary guarding, and rebound tenderness over McBurney point. Contrast-enhanced CT of the abdomen confirms acute, non-perforated appendicitis with an appendiceal diameter of 12 mm and surrounding fat stranding. In her electronic medical record, the patient has an active, validated out-of-hospital "Do Not Resuscitate" (DNR) and "Do Not Intubate" (DNI) order executed 6 months ago, which states that in the event of cardiac arrest, she does not wish to receive chest compressions, electrical defibrillation, or mechanical ventilation. The patient is awake, alert, and oriented x 4 with full decision-making capacity. The surgical resident suggests that surgery is contraindicated because the patient has a DNR order and should only receive comfort measures. Which of the following is the most appropriate management plan for this patient?',
    options: [
      {
        text: 'Discuss laparoscopic appendectomy with the patient, explain perioperative resuscitation options, and proceed with surgery if she consents',
        explanation: 'A common and dangerous misconception in clinical medicine is equating a "Do Not Resuscitate" (DNR) or "Do Not Intubate" (DNI) order with "comfort care only" or "do not treat." A DNR/DNI order applies SPECIFICALLY AND EXCLUSIVELY to cardiopulmonary arrest: it directs clinicians not to perform closed-chest compressions, electrical defibrillation, or emergent intubation in the event of cardiac or respiratory arrest. It DOES NOT preclude active, standard, curative medical or surgical therapies for acute, reversible conditions. Acute appendicitis is a fully treatable, reversible surgical condition that will progress to perforation, peritonitis, septic shock, and death if untreated. Furthermore, the patient is fully alert, intact, and possesses decision-making capacity. Under surgical and anesthesiology ethical guidelines (ASA and ACS standards), the surgical team must discuss the proposed laparoscopic appendectomy with the patient. During the perioperative period, DNR/DNI orders are NOT automatically cancelled; rather, a "required reconsideration" discussion takes place where the patient can decide to: (1) Maintain the DNR/DNI orders intact during surgery; (2) Temporarily suspend the orders during the procedure and immediate recovery; or (3) Modify the orders (e.g., allow temporary airway control for general anesthesia but refuse chest compressions).'
      },
      {
        text: 'Withhold surgical consultation and initiate palliative comfort care hospice measures because DNR orders preclude surgery',
        explanation: 'Withholding curative appendectomy from a fully competent patient with a DNR order causes unnecessary progression to peritonitis, sepsis, and death, violating basic medical ethics.'
      },
      {
        text: 'Automatically and permanently revoke the patient\'s DNR and DNI orders without discussing it with her',
        explanation: 'Physicians cannot unilaterally or automatically revoke a patient\'s valid advance directive; the patient must be consulted in a shared decision-making discussion.'
      },
      {
        text: 'Refuse surgical intervention until the patient\'s healthcare surrogate arrives to authorize the procedure',
        explanation: 'Surrogate authorization is only sought when a patient lacks capacity; this patient is awake and fully capable of making her own surgical decisions.'
      },
      {
        text: 'Administer intravenous morphine monotherapy and discharge to home with hospice referral',
        explanation: 'Discharging a patient with acute appendicitis home on morphine without antibiotics or surgical treatment constitutes medical abandonment and guarantees fatal perforation.'
      }
    ]
  },
  {
    code: 'op-c-s3-0115',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Healthcare-Associated Infections and Hand Hygiene Best Practices',
    subtopic: 'Alcohol-Based Rubs vs Soap and Water for Clostridioides difficile Spores',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Infection Control and Hand Hygiene (CDC Guidelines): - ALCOHOL-BASED HAND RUB: Preferred for routine decontamination before and after touching patients or medical equipment (more effective at killing vegetative bacteria, faster, and better skin tolerability). - SOAP AND WATER WITH MECHANICAL FRICTION IS STRICTLY MANDATORY IN TWO SCENARIOS: 1. WHEN HANDS ARE VISIBLY SOILED WITH BLOOD OR BODY FLUIDS; 2. WHEN CARING FOR PATIENTS WITH KNOWN OR SUSPECTED CLOSTRIDIOIDES DIFFICILE (or Norovirus). RATIONALE: Alcohol DOES NOT KILL BACTERIAL SPORES. Mechanical washing with soap and water physically flushes spores off skin into the sink.',
    citation: "Boyce JM, et al. Guideline for Hand Hygiene in Health-Care Settings. MMWR Recomm Rep. 2002;51(RR-16):1-45. PMID: 12418624.",
    stem:
      'A medical resident on the inpatient gastroenterology service evaluates a 68-year-old woman who has developed profuse, watery diarrhea with 8 loose stools daily following a 10-day course of clindamycin for cellulitis. Stool PCR testing confirms Clostridioides difficile toxin B. The patient is placed on contact precautions in a private room. The resident dons gloves and an isolation gown prior to entering the patient\'s room, performs an abdominal examination, and removes the gloves and gown immediately before exiting the room into the hospital corridor. There is no visible stool or bodily fluid on the resident\'s bare hands. Which of the following is the most appropriate method of hand decontamination for the resident immediately following this patient encounter?',
    options: [
      {
        text: 'Washing hands with soap and running water for at least 20 seconds using mechanical friction',
        explanation: 'This question tests hospital infection control and hand hygiene guidelines set forth by the CDC and the Society for Healthcare Epidemiology of America (SHEA). While alcohol-based hand rubs are the preferred, first-line method for routine hand hygiene in the vast majority of clinical scenarios (because they are faster, achieve higher bacterial reduction on vegetative organisms, and cause less dermatitis), there are TWO ABSOLUTE EXCEPTIONS where washing hands with SOAP AND WATER is strictly mandatory: (1) When hands are VISIBLY SOILED with blood, dirt, or bodily fluids; and (2) AFTER CARING FOR A PATIENT WITH KNOWN OR SUSPECTED CLOSTRIDIOIDES DIFFICILE (or norovirus) INFECTION. Clostridioides difficile produces hearty, dormant, keratin-coated endospores that are impervious to alcohol-based hand sanitizers. Alcohol does NOT denature or kill bacterial spores. The only effective mechanism to remove C. difficile spores from hands is the MECHANICAL FRICTION of running water and soap, which physically detaches the spores from the skin surface and washes them down the drain. Therefore, washing with soap and water for at least 20 seconds is mandatory after caring for any patient with C. difficile.'
      },
      {
        text: 'Applying an alcohol-based hand rub containing 70% ethyl alcohol until hands are completely dry',
        explanation: 'Alcohol-based hand sanitizers do not kill or inactivate C. difficile spores; relying on alcohol spreads dormant spores to subsequent patients.'
      },
      {
        text: 'Rinsing hands under warm running water alone without using soap or mechanical friction',
        explanation: 'Water alone without soap surfactant is completely ineffective at dislodging adherent spores from the skin folds.'
      },
      {
        text: 'Applying sterile chlorhexidine gluconate foam without water',
        explanation: 'Chlorhexidine gluconate has excellent activity against vegetative Gram-positive bacteria, but has zero sporicidal activity against C. difficile endospores.'
      },
      {
        text: 'No hand hygiene is required because gloves were worn during the patient examination',
        explanation: 'Gloves are not an impermeable barrier; microscopic tears and contamination during glove removal contaminate hands in up to 30% of encounters, making hand hygiene mandatory.'
      }
    ]
  },
  {
    code: 'op-c-s3-0116',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Perioperative Beta-Blocker and Antihypertensive Management',
    subtopic: 'Continuing Chronic Beta-Blockers vs Avoiding Acute Day-of-Surgery Initiation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Perioperative Cardiovascular Medications (ACC/AHA Guidelines): - CHRONIC BETA-BLOCKERS: MUST BE CONTINUED PERIOPERATIVELY (abrupt cessation causes rebound hypertension, tachycardia, and fatal myocardial ischemia). - ACUTE BETA-BLOCKER INITIATION: DO NOT START BETA-BLOCKERS ON THE DAY OF SURGERY (POISE trial showed acute initiation causes profound hypotension, bradycardia, stroke, and increased all-cause mortality). - ACE INHIBITORS / ARBs: Withhold 24 hours prior to surgery to prevent refractory intraoperative hypotension under general anesthesia.',
    citation: "Fleisher LA, et al. 2014 ACC/AHA guideline on perioperative cardiovascular evaluation and management of patients undergoing noncardiac surgery. J Am Coll Cardiol. 2014;64(22):e77-e137. PMID: 25091544.",
    stem:
      'A 66-year-old man with a history of coronary artery disease treated with a drug-eluting stent 3 years ago and essential hypertension is evaluated in the preoperative clinic 2 days prior to an elective laparoscopic cholecystectomy for symptomatic cholelithiasis. His current medications include metoprolol succinate 50 mg daily, lisinopril 20 mg daily, aspirin 81 mg daily, and atorvastatin 40 mg daily. He has been taking this exact medication regimen consistently for 3 years without side effects. His blood pressure is 126/78 mm Hg, and his resting heart rate is 64/min. Physical examination of the cardiovascular and pulmonary systems is completely unremarkable. The patient asks whether he should take his morning medications on the day of surgery. Which of the following is the most appropriate recommendation regarding his metoprolol succinate and lisinopril on the morning of surgery?',
    options: [
      {
        text: 'Continue metoprolol succinate with a small sip of water on the morning of surgery, but withhold lisinopril 24 hours prior to surgery',
        explanation: 'The perioperative management of antihypertensive and cardiac medications is governed by ACC/AHA guidelines: (1) CHRONIC BETA-BLOCKER THERAPY: In patients who are already taking beta-blockers chronically (such as metoprolol for CAD), the medication MUST BE CONTINUED throughout the perioperative period, including the morning of surgery with a sip of water. Abrupt discontinuation of chronic beta-blockers triggers a dangerous adrenergic rebound surge, resulting in severe hypertension, reflex tachycardia, unstable angina, and fatal perioperative myocardial infarction. (Crucially, starting a NEW beta-blocker acutely on the day of surgery in a beta-blocker-naive patient is strictly contraindicated because the landmark POISE trial demonstrated increased risks of severe hypotension, bradycardia, and fatal stroke). (2) ACE INHIBITORS AND ARBs: Medications like lisinopril blunt the compensatory renin-angiotensin-aldosterone axis during general anesthesia and blood loss; continuing them on the morning of surgery is strongly associated with severe, refractory intraoperative hypotension. Therefore, ACE inhibitors and ARBs should be withheld 24 hours prior to surgery and resumed postoperatively once volume status and renal function are stable.'
      },
      {
        text: 'Withhold both metoprolol succinate and lisinopril on the morning of surgery',
        explanation: 'Withholding chronic beta-blockers abruptly triggers dangerous adrenergic rebound tachycardia and severe perioperative myocardial ischemia.'
      },
      {
        text: 'Continue both metoprolol succinate and lisinopril on the morning of surgery',
        explanation: 'Continuing lisinopril through the morning of surgery leads to severe, vasopressor-refractory intraoperative hypotension under general anesthesia.'
      },
      {
        text: 'Discontinue metoprolol permanently and switch to a clonidine transdermal patch',
        explanation: 'There is no indication to discontinue chronic beta-blockade in a patient with established coronary artery disease.'
      },
      {
        text: 'Double the dose of metoprolol on the morning of surgery to aggressively blunt surgical stress',
        explanation: 'Dose escalation of beta-blockers on the morning of surgery causes life-threatening intraoperative bradycardia, cardiogenic shock, and stroke.'
      }
    ]
  },
  {
    code: 'op-c-s3-0117',
    exam: 'Step 3',
    subject: 'Ethics',
    system: 'General Principles',
    topic: 'Confidentiality and Adolescent Reproductive Healthcare Rights',
    subtopic: 'STI Testing and Contraception Without Parental Consent or Notification',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Adolescent Medical Confidentiality: - MINOR CONSENT EXCEPTIONS (Title X and state statutes): Adolescents (< 18 years old) have the absolute legal and ethical right to confidential evaluation and treatment WITHOUT PARENTAL CONSENT OR NOTIFICATION for: 1. SEXUALLY TRANSMITTED INFECTIONS (testing, diagnosis, treatment, and contact tracing); 2. CONTRACEPTION / FAMILY PLANNING; 3. SUBSTANCE USE DISORDER treatment; 4. OUTPATIENT MENTAL HEALTH / SUICIDE CRISIS (initial counseling). - ETHICAL RULE: Do NOT disclose STI results or contraception to parents, even if parents specifically ask or pay for the insurance. Encourage honest parent-child communication, but preserve confidentiality.',
    citation: "American Academy of Pediatrics Committee on Bioethics. Informed consent in decision-making in pediatric practice. Pediatrics. 2016;138(2):e20161484. PMID: 27456510.",
    stem:
      'A 16-year-old high school student visits the adolescent medicine clinic unaccompanied by her parents. She reports that she became sexually active with her boyfriend 2 months ago and is experiencing mild dysuria and a yellowish vaginal discharge. She expresses intense terror that her parents, who hold very strict religious beliefs, will find out about her visit. She asks the physician: "If I get tested for infections or ask for birth control, will you have to tell my parents? If they find out, they will kick me out of the house." Physical examination reveals mild yellowish mucopurulent cervical discharge without cervical motion tenderness or adnexal masses. Nucleic acid amplification testing (NAAT) from a cervical swab returns positive for Chlamydia trachomatis. Which of the following is the most appropriate clinical and ethical management regarding parental disclosure and treatment for this patient?',
    options: [
      {
        text: 'Treat the patient with oral doxycycline, provide confidential contraceptive counseling, and maintain confidentiality without notifying her parents',
        explanation: 'In the United States, adolescent confidentiality laws and statutory exceptions grant minors (< 18 years of age) the absolute legal and ethical right to consent to certain healthcare services WITHOUT PARENTAL CONSENT OR NOTIFICATION. These protected confidential domains specifically encompass: (1) Diagnosis and treatment of SEXUALLY TRANSMITTED INFECTIONS (STIs); (2) CONTRACEPTION and family planning services; (3) SUBSTANCE USE DISORDER treatment; and (4) Outpatient mental health counseling. Breaching confidentiality in these scenarios directly deters adolescents from seeking timely medical care, leading to untreated PID, tubal infertility, unintended pregnancies, and disease transmission. The physician should prescribe guideline-directed therapy for Chlamydia trachomatis (oral doxycycline 100 mg twice daily for 7 days), provide confidential contraceptive counseling, offer expedited partner therapy (EPT) where legally permitted, and reassure the patient that her medical records, diagnosis, and treatment will remain strictly confidential from her parents. While clinicians should gently encourage open communication between adolescents and trusted parents, the minor\'s legal right to confidential reproductive care must be firmly protected.'
      },
      {
        text: 'Inform the patient that state law requires parental notification whenever an infectious sexually transmitted disease is confirmed in a minor',
        explanation: 'This statement is legally false; all 50 states allow minors to consent to STI diagnosis and treatment without parental consent or notification.'
      },
      {
        text: 'Withhold antibiotic therapy until her parents attend the clinic and sign an informed consent form',
        explanation: 'Withholding therapy leaves chlamydia untreated, risking pelvic inflammatory disease, ectopic pregnancy, and chronic pelvic pain, and violates minor consent laws.'
      },
      {
        text: 'Call the parents immediately because treating a minor without parental consent constitutes statutory assault',
        explanation: 'Treating a minor for STIs under state minor-consent statutes is legally authorized and fully protected; breaching confidentiality violates ethical and statutory laws.'
      },
      {
        text: 'Treat the infection but refuse to provide contraceptive counseling without written parental authorization',
        explanation: 'Contraceptive counseling and prescriptions are also legally protected under minor confidentiality laws in almost all jurisdictions and federally funded Title X clinics.'
      }
    ]
  },
  {
    code: 'op-c-s3-0118',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Post-Exposure Prophylaxis (PEP) for Occupational HIV Needlestick',
    subtopic: 'Immediate 28-Day Three-Drug Antiretroviral Regimen Within 72 Hours',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Occupational HIV Needlestick Exposure: - IMMEDIATE WOUND CARE: Wash area immediately with soap and water (do NOT squeeze/milk wound or apply bleach/antiseptics). - TIME CRITICAL WINDOW: HIV POST-EXPOSURE PROPHYLAXIS (PEP) MUST BE STARTED AS SOON AS POSSIBLE, IDEALLY WITHIN 2 HOURS AND NO LATER THAN 72 HOURS POST-EXPOSURE. PEP is ineffective if started after 72 hours. - REGIMEN: 28-DAY THREE-DRUG ANTIRETROVIRAL REGIMEN: Emtricitabine + Tenofovir (disoproxil or alafenamide) PLUS an Integrase Inhibitor (DOLUTEGRAVIR or Raltegravir). Baseline HIV testing of worker and source.',
    citation: "Kuhar DT, et al. Updated US Public Health Service guidelines for the management of occupational exposures to HIV and recommendations for postexposure prophylaxis. Infect Control Hosp Epidemiol. 2013;34(9):875-892. PMID: 23917901.",
    stem:
      'A 26-year-old internal medicine resident sustains a deep percutaneous puncture wound to her right index finger from a large-bore hollow needle while placing a femoral central venous line in a patient admitted with acute Pneumocystis jirovecii pneumonia. The patient\'s medical records confirm that he has untreated HIV infection with a CD4 count of 45/mm³ and an HIV viral load of 680,000 copies/mL. The needle was visibly contaminated with gross blood at the time of the puncture. The resident immediately washes the puncture site with soap and water for 5 minutes and reports to the occupational employee health clinic 45 minutes after the incident. Baseline rapid HIV testing of the resident is negative. Which of the following is the most appropriate management plan for occupational post-exposure prophylaxis (PEP) in this resident?',
    options: [
      {
        text: 'Initiate a 28-day course of a three-drug antiretroviral regimen consisting of tenofovir, emtricitabine, and dolutegravir immediately',
        explanation: 'This healthcare worker sustained a high-risk occupational bloodborne exposure: a deep percutaneous injury involving a hollow-bore needle contaminated with gross blood from a source patient with high-titer untreated HIV infection (viral load 680,000 copies/mL). The average risk of HIV transmission following percutaneous hollow-bore exposure to HIV-infected blood is approximately 0.3% (1 in 300), which increases with high viral load and deep injury. The standard of care established by the U.S. Public Health Service (USPHS) guidelines is: (1) IMMEDIATE POST-EXPOSURE PROPHYLAXIS (PEP) INITIATED AS SOON AS POSSIBLE—ideally within 2 hours, and strictly within a 72-HOUR WINDOW. (PEP initiated beyond 72 hours is generally ineffective); (2) A 28-DAY THREE-DRUG ANTIRETROVIRAL REGIMEN: The preferred first-line regimen consists of two nucleoside/nucleotide reverse transcriptase inhibitors (NRTIs: tenofovir disoproxil fumarate [or TAF] plus emtricitabine) COMBINED WITH a potent integrase strand transfer inhibitor (INSTI: DOLUTEGRAVIR or RALTEGRAVIR). INSTI-based regimens are preferred because of superior tolerability, minimal drug-drug interactions, and high efficacy; and (3) Serial HIV testing of the exposed worker at baseline, 6 weeks, and 4 months post-exposure.'
      },
      {
        text: 'Withhold antiretroviral medications and monitor the resident with weekly HIV viral load testing for 1 month',
        explanation: 'Withholding PEP while waiting for viral load monitoring completely misses the critical 72-hour window during which viral establishment can be prevented.'
      },
      {
        text: 'Prescribe a 7-day course of oral zidovudine monotherapy',
        explanation: 'Single-agent zidovudine is an obsolete historical regimen; current guidelines mandate a three-drug combination for a full 28-day duration.'
      },
      {
        text: 'Administer an intramuscular injection of hepatitis B immune globulin and re-evaluate in 2 weeks',
        explanation: 'The urgent life-threatening transmission risk is HIV; administering HBIG does not provide prophylaxis against HIV.'
      },
      {
        text: 'Prescribe oral trimethoprim-sulfamethoxazole to prevent Pneumocystis pneumonia transmission',
        explanation: 'Pneumocystis jirovecii is an environmental opportunistic fungal pathogen that is not transmitted via percutaneous bloodborne needlestick exposure.'
      }
    ]
  },
  {
    code: 'op-c-s3-0119',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Medical Error Disclosure and Apology Ethics',
    subtopic: 'Prompt Honest Disclosure of Harm, Apology, and Root Cause Correction',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Medical Error Disclosure (AMA Code of Medical Ethics & Patient Safety): - ETHICAL & PROFESSIONAL MANDATE: When an adverse medical error occurs that results in patient harm: PROMPT, FULL, AND HONEST DISCLOSURE TO THE PATIENT / FAMILY IS MANDATORY. - ESSENTIAL COMPONENTS OF DISCLOSURE: 1. State the facts clearly without medical jargon; 2. Take responsibility and express an empathetic apology ("I am sorry that this happened to you"); 3. Explain the immediate corrective steps taken to treat the harm; 4. Outline systematic institutional actions to prevent recurrence; 5. Never conceal errors, blame other staff members, or alter medical records (record tampering is fraud).',
    citation: "Gallagher TH, et al. Patients' and physicians' attitudes regarding the disclosure of medical errors. JAMA. 2003;289(8):1001-1007. PMID: 12597832.",
    stem:
      'A 64-year-old woman with a documented, severe, life-threatening anaphylactic allergy to penicillin (manifested previously by angioedema and respiratory arrest) is admitted to the hospital for treatment of complicated pyelonephritis. The admitting resident inadvertently orders intravenous ampicillin-sulbactam instead of intravenous ciprofloxacin. Within 15 minutes of the infusion starting, the patient develops severe diffuse urticaria, wheezing, facial edema, and hypotension with a blood pressure of 78/42 mm Hg. The rapid response team is called, the infusion is stopped immediately, and the patient is successfully resuscitated with intramuscular epinephrine, intravenous diphenhydramine, methylprednisolone, and an isotonic crystalloid bolus. She is transferred to the intensive care unit, where her vital signs and respiratory status stabilize completely over the next 4 hours. Once the patient is alert and fully awake, her daughter asks the attending physician: "Why did my mother suddenly stop breathing and collapse? Did she have an allergic reaction to something you gave her?" Which of the following is the most appropriate response by the attending physician?',
    options: [
      {
        text: 'Promptly and honestly disclose the medication error, apologize empathetically for the harm caused, explain the corrective actions taken, and outline hospital steps to prevent recurrence',
        explanation: 'Under the American Medical Association (AMA) Code of Medical Ethics, the Joint Commission standards, and national patient safety guidelines, physicians have an unequivocal ethical, legal, and professional obligation to PROMPTLY, TRUTHFULLY, AND FULLY DISCLOSE MEDICAL ERRORS THAT RESULT IN PATIENT HARM. Transparent error disclosure is essential to preserving patient autonomy, trust in the healthcare system, and fulfilling informed consent. Best practices for error disclosure include: (1) Prompt communication of the objective facts in plain language without medical jargon; (2) Acknowledging that an error occurred (she received a penicillin-derivative medication despite her known allergy); (3) Offering a sincere, empathetic apology ("I am deeply sorry that this mistake occurred and that you experienced this reaction"); (4) Explaining the immediate medical therapies administered to ensure her stabilization; and (5) Outlining the systemic institutional steps being undertaken (such as computerized provider order entry allergy hard-stops and pharmacy double-checks) to investigate the root cause and prevent future occurrences. Concealing mistakes, deflecting blame, or misrepresenting drug reactions is unethical, violates standards of care, and increases litigation.'
      },
      {
        text: 'Attribute the episode to an unpredictable idiosyncratic reaction to a standard urinary antibiotic without mentioning the penicillin allergy',
        explanation: 'Deceiving the patient and misrepresenting a severe preventable medication error as an unpredictable event is unethical, fraudulent, and violates medical integrity.'
      },
      {
        text: 'Refuse to discuss the event and refer the daughter directly to the hospital legal risk management department',
        explanation: 'Refusing to communicate with an injured patient creates resentment, erodes trust, and violates professional disclosure guidelines; risk management should be informed, but clinicians must disclose.'
      },
      {
        text: 'Blame the hospital inpatient pharmacy for dispensing the medication despite the electronic allergy warning',
        explanation: 'Deflecting blame onto other healthcare team members is unprofessional, undermines interprofessional safety culture, and does not fulfill the physician\'s responsibility.'
      },
      {
        text: 'Alter the medical record to remove the resident\'s ampicillin order to protect the residency training program',
        explanation: 'Falsifying or altering medical records constitutes criminal fraud, leads to immediate revocation of medical licensure, and eliminates legal defense.'
      }
    ]
  },
  {
    code: 'op-c-s3-0120',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Diagnostic Error and Cognitive Biases in Clinical Decision-Making',
    subtopic: 'Anchoring Bias vs Premature Closure and Diagnostic Verification Strategies',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Cognitive Biases in Clinical Reasoning: - ANCHORING BIAS: Tendency to fixate on an initial piece of information (e.g., triage note, previous doctor\'s diagnosis) and failing to adjust in light of subsequent contradictory evidence. - PREMATURE CLOSURE: Narrowing down on a single diagnosis too early and failing to consider alternative possibilities or search for disconfirming data. - AVAILABILITY BIAS: Overestimating the likelihood of a disease because of a recent, memorable, or dramatic case. - CONFIRMATION BIAS: Seeking only information that supports an initial hypothesis while ignoring contradictory findings. Strategy to prevent: Formal "Diagnostic Time-Out" / metacognition.',
    citation: "Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med. 2003;78(8):775-780. PMID: 12915363.",
    stem:
      'A 52-year-old woman is evaluated in the emergency department for acute chest pain and shortness of breath. The triage nurse notes on the chart: "Patient with known generalized anxiety disorder presenting with another panic attack." The emergency physician reviews the triage note, interviews the patient briefly, and notes that she appears hyperventilating and trembling. He immediately orders oral lorazepam and arranges for psychiatric crisis referral. An hour later, nursing reports that the patient\'s oxygen saturation is 88% on room air and her heart rate is 120/min. Rather than re-evaluating the patient or obtaining a D-dimer, electrocardiogram, or CT pulmonary angiogram, the physician assumes her hypoxia is due to poor effort from an anxiety attack and orders another dose of lorazepam. Two hours later, the patient collapses in cardiac arrest from a massive saddle pulmonary embolism. Which of the following cognitive biases primarily contributed to this diagnostic failure?',
    options: [
      {
        text: 'Anchoring bias combined with premature closure',
        explanation: 'This case demonstrates the deadly consequences of cognitive biases in diagnostic reasoning—specifically ANCHORING BIAS and PREMATURE CLOSURE. ANCHORING BIAS is the cognitive tendency to fixate prematurely on an initial piece of clinical data (here, the triage note labeling the presentation as a "panic attack in a patient with anxiety") and failing to revise one\'s diagnostic assessment when subsequent contradictory evidence emerges (tachycardia of 120/min, hypoxemia of 88%). Closely linked is PREMATURE CLOSURE, defined as terminating the diagnostic process too early, accepting a diagnosis before it has been properly verified, and failing to pursue a broader differential diagnosis (such as pulmonary embolism). The physician viewed all subsequent objective abnormalities through the distorted lens of the initial panic attack anchor. Cognitive debiasing techniques—such as formal diagnostic "time-outs," actively asking "What else could this be?", and deliberately seeking disconfirming evidence—are essential to preventing medical diagnostic errors.'
      },
      {
        text: 'Hindsight bias',
        explanation: 'Hindsight bias is the tendency to view an event as having been predictable after it has already occurred ("knew-it-all-along" phenomenon); it is a post-hoc analysis bias, not the real-time clinical reasoning failure shown here.'
      },
      {
        text: 'Blind spot bias',
        explanation: 'Blind spot bias is the belief that one is less susceptible to cognitive errors than others; while present in many practitioners, it is not the specific diagnostic distortion mechanism in this case.'
      },
      {
        text: 'Outcome bias',
        explanation: 'Outcome bias occurs when a clinical decision is judged based on whether the eventual outcome was good or bad rather than the quality of the decision at the time it was made.'
      },
      {
        text: 'Framing effect alone',
        explanation: 'While the triage note framed the patient as having anxiety, the persistent refusal to re-evaluate the differential when severe hypoxemia and tachycardia arose specifically defines anchoring and premature closure.'
      }
    ]
  },
  {
    code: 'op-c-s3-0121',
    exam: 'Step 3',
    subject: 'Geriatrics',
    system: 'General Principles',
    topic: 'Comprehensive Geriatric Assessment and Fall Risk Interventions',
    subtopic: 'Timed Up and Go (TUG) Test and Multifactorial Intervention Bundle',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Fall Risk in Older Adults (CDC STEADI & AGS Guidelines): - SCREENING: Ask annually about falls. TIMED UP AND GO (TUG) TEST: Patient stands from chair, walks 3 meters, turns, walks back, and sits. Time >= 12 SECONDS indicates high fall risk. - MULTIFACTORIAL INTERVENTION BUNDLE (proven to reduce falls): 1. MEDICATION RECONCILIATION: Deprescribe psychotropic, sedative, and anticholinergic drugs (Beers criteria); 2. PHYSICAL THERAPY & GAIT TRAINING: Targeted balance and strength exercises (e.g., Tai Chi); 3. HOME SAFETY MODIFICATIONS: Remove throw rugs, install grab bars, improve lighting; 4. VISION AND FOOTWEAR EVALUATION.',
    citation: "Ganz DA, et al. Prevention of Falls in Community-Dwelling Older Adults: US Preventive Services Task Force Recommendation Statement. JAMA. 2018;319(16):1696-1704. PMID: 29710214.",
    stem:
      'A 79-year-old woman presents to the primary care clinic for a routine annual wellness examination. When asked about falls, she reports that she slipped and fell in her living room 2 months ago, bruising her knee, and has had two "near-falls" over the past month while walking to the kitchen in the dark. She has become fearful of falling and has curtailed her daily walks. Her medical history includes hypertension, osteoarthritis of the knees, and insomnia. Her medications include amlodipine 5 mg daily, acetaminophen 650 mg as needed, and zolpidem 5 mg nightly. On physical examination, her blood pressure is 132/78 mm Hg without orthostatic changes, and heart rate is 68/min. The Timed Up and Go (TUG) test is performed: the patient stands from an armchair, walks 3 meters, turns, walks back, and sits down in 16 seconds (normal < 12 seconds), demonstrating an unsteady, hesitant gait. Which of the following represents the most comprehensive, evidence-based strategy to reduce this patient\'s risk of future falls and fractures?',
    options: [
      {
        text: 'Discontinue zolpidem, refer to physical therapy for balance and gait training, and arrange a home safety evaluation for hazard reduction',
        explanation: 'Falls are the leading cause of fatal and non-fatal injuries in older adults. Under the CDC STEADI (Stopping Elderly Accidents, Deaths, and Injuries) and American Geriatrics Society (AGS) guidelines, a patient with a history of falls and a Timed Up and Go (TUG) test >= 12 seconds (16 seconds here) is classified as HIGH FALL RISK. Single-intervention strategies have limited efficacy; rather, a MULTIFACTORIAL INTERVENTION BUNDLE has the strongest clinical evidence for significantly reducing fall frequency and injury: (1) MEDICATION REVIEW AND DEPRESCRIBING: Psychoactive medications, particularly sedative-hypnotics like zolpidem, impair psychomotor coordination, reaction time, and daytime alertness, doubling fall risk. Zolpidem should be discontinued and replaced with non-pharmacologic sleep hygiene; (2) TARGETED PHYSICAL THERAPY: Balance training, gait retraining, and muscle strengthening (such as Tai Chi or structured physical therapy) significantly improve neuromuscular stability and reduce falls by ~30%; (3) HOME HAZARD MITIGATION: Professional home assessment to eliminate loose throw rugs, improve hallway lighting, clear clutter, and install bathroom grab bars; and (4) Correcting visual deficits and recommending non-skid, supportive footwear.'
      },
      {
        text: 'Prescribe a 4-wheel rolling walker and advise the patient to avoid all physical activity and stay seated',
        explanation: 'Enforcing sedentary immobility leads to rapid deconditioning, sarcopenia, loss of muscle mass, and paradoxically increases future fall risk.'
      },
      {
        text: 'Increase zolpidem to 10 mg nightly to ensure deep restorative sleep and improve daytime energy',
        explanation: 'Increasing sedative-hypnotics in an elderly faller worsens ataxia, confusion, daytime grogginess, and dramatically increases hip fracture risk.'
      },
      {
        text: 'Order a non-contrast brain MRI and 48-hour Holter monitoring before initiating any physical interventions',
        explanation: 'Extensive cardiac and neuroimaging workups are not indicated for an unprovoked mechanical slip and deconditioned gait without syncope or focal deficits.'
      },
      {
        text: 'Initiate daily oral vitamin D and calcium supplementation as the exclusive intervention',
        explanation: 'While bone health is important, nutritional supplementation alone without deprescribing and balance physical therapy does not prevent mechanical falls.'
      }
    ]
  },
  {
    code: 'op-c-s3-0122',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Delirium Tremens vs Alcoholic Hallucinosis Distinction',
    subtopic: 'Intact Sensorium in Hallucinosis vs Global Disorientation in Delirium Tremens',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Differentiate Alcoholic Hallucinosis from Delirium Tremens (DTs): - ALCOHOLIC HALLUCINOSIS: Onset 12-48 hours after last drink. Hallucinations (predominantly VISUAL, tactile, or auditory: seeing bugs/animals). CRITICAL DISTINCTION: INTACT SENSORIUM / CLEAR CONSCIOUSNESS (patient is fully oriented to person, place, and time, and recognizes hallucinations are abnormal). Vital signs are relatively normal. - DELIRIUM TREMENS: Onset 48-96 hours. GLOBAL DISORIENTATION / DELIRIUM (clouded consciousness, inattention) PLUS SEVERE AUTONOMIC INSTABILITY (fever > 38.5°C, severe tachycardia, malignant hypertension, drenching diaphoresis). High mortality.',
    citation: "Mirijello A, et al. Identification and management of alcohol withdrawal syndrome. Drugs. 2015;75(4):353-365. PMID: 25700778.",
    stem:
      'A 46-year-old man is admitted to the general medical floor for management of acute uncomplicated diverticulitis with intravenous ceftriaxone and metronidazole. He has a known history of chronic alcohol use disorder, consuming approximately 10 to 12 beers daily, with his last alcoholic beverage consumed 24 hours prior to hospital admission. Twenty-four hours after admission (48 hours since his last drink), the patient rings the nurse\'s bell in a state of distress, reporting that he sees small, colorful beetles and spiders crawling along the edge of his bedsheets and curtains. On physical examination, the patient is anxious and mild fine resting tremors of his outstretched hands are noted. However, when questioned by the physician, the patient is fully alert, converses fluently, and correctly states his full name, the hospital name, the current date, and the reason for his hospitalization. He states: "I know it sounds crazy and I know they probably aren\'t real, but I can clearly see them on the wall." His vital signs are: temperature 37.1°C (98.8°F), blood pressure 134/82 mm Hg, heart rate 88/min, and respirations 16/min. Physical examination of the heart and lungs is normal. Which of the following is the most accurate clinical diagnosis?',
    options: [
      {
        text: 'Alcoholic hallucinosis',
        explanation: 'This patient presents with classic ALCOHOLIC HALLUCINOSIS. It is critical to differentiate alcoholic hallucinosis from life-threatening Delirium Tremens (DTs): (1) TIMING: Alcoholic hallucinosis typically develops 12 to 48 hours after the reduction or cessation of heavy alcohol intake (here, 48 hours since last drink); (2) SENSORIUM / CONSCIOUSNESS: In alcoholic hallucinosis, the patient has an INTACT SENSORIUM AND CLEAR SENSORIUM—the patient remains fully oriented to person, place, and date, can reason logically, and frequently recognizes that the hallucinations are perceptual distortions; and (3) AUTONOMIC SIGNS: Vital signs are relatively stable or only mildly elevated (normal temperature 37.1°C, HR 88/min, BP 134/82). Hallucinations are most commonly visual (seeing insects, small animals, or people), but auditory and tactile hallucinations can occur. In stark contrast, DELIRIUM TREMENS (DTs) typically develops 48 to 96 hours after alcohol cessation and is defined by severe, fluctuating DELIRIUM (profound disorientation, inattention, confusion) combined with EXPLOSIVE AUTONOMIC INSTABILITY (high fever, severe tachycardia, hypertension, and profuse diaphoresis). Alcoholic hallucinosis is treated symptomatically with benzodiazepines and supportive care to prevent progression to DTs.'
      },
      {
        text: 'Delirium tremens',
        explanation: 'Delirium tremens requires acute delirium (clouded consciousness, global disorientation) and marked autonomic hyperactivity (fever, extreme tachycardia); this patient is fully oriented with normal vitals.'
      },
      {
        text: 'Wernicke encephalopathy',
        explanation: 'Wernicke encephalopathy presents with the triad of encephalopathy, ataxia, and oculomotor dysfunction (nystagmus/abducens palsy), none of which are present here.'
      },
      {
        text: 'Acute primary psychotic break secondary to schizophrenia',
        explanation: 'Late-onset first-break schizophrenia at age 46 without prodromal negative symptoms in an actively withdrawing alcohol-dependent patient is an incorrect diagnosis.'
      },
      {
        text: 'Metronidazole-induced toxic encephalopathy',
        explanation: 'Metronidazole neurotoxicity typically occurs after weeks of high cumulative doses and causes cerebellar ataxia, peripheral neuropathy, and cerebellar MRI lesions, not acute visual hallucinations.'
      }
    ]
  },
  {
    code: 'op-c-s3-0123',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Brain Death Clinical Determination Criteria',
    subtopic: 'Prerequisites, Complete Absence of Brainstem Reflexes, and Apnea Testing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Determine Brain Death (Death by Neurologic Criteria - AAN Guidelines): - 3 ESSENTIAL PREREQUISITES: 1. Irreversible etiology of coma established; 2. Absence of confounding factors: Normal core temperature (> 36°C), normal SBP (>= 100 mm Hg), no severe electrolyte/acid-base derangements; 3. ABSENCE OF CNS DEPRESSANT DRUGS (sedatives, paralytics cleared; >= 5 half-lives). - 3 CARDINAL CLINICAL CRITERIA: 1. COMA (unresponsiveness to all noxious stimuli); 2. ABSENCE OF ALL BRAINSTEM REFLEXES (pupillary light, corneal, oculocephalic/doll\'s eyes, oculovestibular/cold calorics, gag, and cough reflexes absent); 3. APNEA TEST CONFIRMATION: Absence of spontaneous respiratory drive when arterial PaCO2 reaches >= 60 mm Hg (or >= 20 mm Hg above baseline) with pH < 7.28.',
    citation: "Greer DM, et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline: Report of the AAN, AAP, CNS, and SCCM. Neurology. 2023;101(24):1112-1132. PMID: 37821245.",
    stem:
      'A 34-year-old woman is brought to the intensive care unit following a severe traumatic brain injury sustained in a motor vehicle crash. She underwent an emergent decompressive craniectomy for a massive subdural hematoma 48 hours ago. Her continuous intravenous propofol and fentanyl infusions were completely discontinued 24 hours ago. On physical examination today, the patient is comatose, flaccid, and makes no spontaneous motor movements or responses to noxious central sternal pressure. Her vital signs are: core body temperature 36.8°C (98.2°F), blood pressure 118/74 mm Hg on low-dose phenylephrine, and heart rate 78/min. Laboratory evaluation reveals normal electrolytes, BUN, creatinine, and arterial blood gases. Brainstem examination reveals: bilateral pupils are 6 mm, fixed, and non-reactive to direct light; corneal reflexes are absent bilaterally; oculocephalic (doll\'s eyes) and cold water oculovestibular reflexes are absent; and endotracheal suctioning elicits no cough or gag reflex. Spinal cord deep tendon reflexes are 1+ symmetrically in the lower extremities, and triple flexion of the right leg occurs with plantar stimulation. The attending physician prepares to perform an apnea challenge test. Which of the following findings during the apnea test confirms the diagnosis of brain death?',
    options: [
      {
        text: 'Complete absence of spontaneous respiratory efforts while arterial PaCO2 rises to 60 mm Hg or greater (or 20 mm Hg above baseline) with arterial pH below 7.28',
        explanation: 'Brain death (death by neurologic criteria) represents the complete, irreversible cessation of all functions of the entire brain, including the brainstem. Guidelines from the American Academy of Neurology (AAN) outline strict prerequisites and three cardinal clinical findings: (1) Prerequisites: Irreversible cause of coma established; absence of CNS depressants, sedatives, or neuromuscular blockers (propofol/fentanyl held > 24 hours); normal core temperature (> 36°C); and hemodynamic stability (SBP >= 100 mm Hg); (2) Cardinal Examination Findings: Deep, unresponsive coma and COMPLETE ABSENCE OF ALL BRAINSTEM REFLEXES (pupillary, corneal, oculocephalic, oculovestibular, gag, and cough reflexes absent). Note that SPINAL REFLEXES (such as deep tendon reflexes, plantar withdrawal, or triple flexion) originate within the spinal cord and DO NOT PRECLUDE the diagnosis of brain death; (3) APNEA TEST: Disconnecting the patient from the ventilator while delivering 100% oxygen via tracheal insufflation to verify the absence of spontaneous respiratory drive. The test is definitively POSITIVE (confirming brain death) when NO RESPIRATORY EFFORT is observed while the arterial PaCO2 rises to >= 60 mm Hg (or >= 20 mm Hg above the pre-test baseline) with an arterial pH < 7.28.'
      },
      {
        text: 'Spontaneous chest excursions occurring once the arterial PaCO2 exceeds 45 mm Hg',
        explanation: 'Any spontaneous respiratory effort indicates functioning lower brainstem respiratory centers in the medulla, definitively disproving brain death.'
      },
      {
        text: 'The presence of deep tendon reflexes and triple flexion in the lower extremities precludes performing the test',
        explanation: 'Spinal cord reflexes (triple flexion, knee jerks) are mediated by the isolated spinal cord and are frequently preserved in brain death; they do not rule out brain death.'
      },
      {
        text: 'Development of profound systemic hypotension (SBP < 70 mm Hg) requiring immediate test termination',
        explanation: 'If severe hypotension or desaturation develops during the apnea test, the test must be aborted for safety, and an ancillary test (such as cerebral angiography or nuclear scan) is required.'
      },
      {
        text: 'A flatline electroencephalogram (EEG) is legally required in all cases to confirm brain death',
        explanation: 'Ancillary tests like EEG or cerebral blood flow scans are only required when the clinical exam or apnea test cannot be safely or completely completed.'
      }
    ]
  },
  {
    code: 'op-c-s3-0124',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Perioperative Antithrombotic Management for Dental Procedures',
    subtopic: 'Continuing Warfarin or DOAC for Minor Dental Extractions',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Manage Anticoagulation for Minor Dental Procedures (Dental Extractions, Cleanings, Restorations): - PROCEDURAL RISK: Very low risk of serious or life-threatening hemorrhage; local bleeding is easily controlled with local hemostatic measures (tranexamic acid mouthwash, gelatin sponge, sutures, pressure gauze). - THROMBOEMBOLIC RISK OF STOPPING: Interrupting anticoagulation creates a significant rebound stroke/VTE risk. - GUIDELINE RECOMMENDATION (ADA / CHEST): DO NOT INTERRUPT OR STOP WARFARIN OR DOACs (Apixaban, Rivaroxaban) for minor dental procedures. For warfarin: check INR within 24-72 hours (safe if INR in therapeutic range 2.0-3.0). Use local hemostatic agents.',
    citation: "American Dental Association Council on Scientific Affairs. Dental management of patients on oral anticoagulant therapy. J Am Dent Assoc. 2013;144(11):1278-1280. PMID: 24177409.",
    stem:
      'A 71-year-old man with a history of non-valvular atrial fibrillation and a mechanical aortic valve replacement (bileaflet mechanical prosthesis placed 4 years ago) presents to his primary care physician for preoperative clearance. He is scheduled to undergo routine cleanings and a single tooth extraction of an infected lower premolar under local lidocaine anesthesia at his dentist\'s office in 4 days. His only medication is oral warfarin 5 mg daily. He has had no bleeding episodes, bruising, or thromboembolic events. On physical examination, his vital signs are normal, and a crisp mechanical clicking aortic valve closure sound is audible across the precordium without murmurs. Laboratory testing today reveals an INR of 2.6 (target range 2.0-3.0). The dentist asked the patient to have his physician "stop the warfarin for 5 days before the extraction" to avoid excessive bleeding. Which of the following is the most appropriate management recommendation?',
    options: [
      {
        text: 'Continue warfarin without interruption at the current dose and instruct the dentist to utilize local hemostatic measures',
        explanation: 'The management of anticoagulation for minor dental procedures—including single or multiple tooth extractions, minor periodontal surgery, and routine cleanings—is governed by clear guidelines from the American College of Chest Physicians (CHEST) and the American Dental Association (ADA). Interrupting oral anticoagulation (such as warfarin or DOACs) exposes patients—especially those with mechanical heart valves or high-risk atrial fibrillation—to significant, life-threatening risks of valve thrombosis, systemic arterial thromboembolism, and stroke. Conversely, clinical trials have conclusively demonstrated that minor dental procedures carry an extremely low risk of uncontrollable or major hemorrhage in patients whose INR is within the therapeutic range (INR 2.0 to 3.0). Any localized post-extraction bleeding is easily and effectively managed with LOCAL HEMOSTATIC AGENTS (such as biting on sterile gauze soaked with 5% tranexamic acid or aminocaproic acid mouthwash, absorbable gelatin sponges, oxidized cellulose, or local suturing). Therefore, WARFARIN SHOULD BE CONTINUED WITHOUT INTERRUPTION, provided the INR is within therapeutic target (2.6 here).'
      },
      {
        text: 'Discontinue warfarin 5 days prior to the extraction and initiate therapeutic low-molecular-weight heparin bridging',
        explanation: 'Stopping warfarin and bridging with LMWH for a minor single tooth extraction is unnecessary, increases dental bleeding complications, and exposes the patient to mechanical valve thrombosis.'
      },
      {
        text: 'Discontinue warfarin 5 days prior to the extraction without bridging and resume it the following day',
        explanation: 'Stopping anticoagulation completely in a patient with a mechanical aortic valve leaves the patient unprotected against catastrophic valve thrombosis and stroke.'
      },
      {
        text: 'Administer 5 mg of oral vitamin K on the morning of the dental procedure to lower the INR to 1.5',
        explanation: 'Administering vitamin K produces warfarin resistance for days to weeks, endangering the mechanical heart valve and risking valve thrombosis.'
      },
      {
        text: 'Administer four-factor prothrombin complex concentrate (PCC) immediately prior to the extraction',
        explanation: 'PCC is an emergency reversal agent reserved for major life-threatening bleeding or emergency emergent surgery, not elective routine outpatient tooth extraction.'
      }
    ]
  },
  {
    code: 'op-c-s3-0125',
    exam: 'Step 3',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Central Line-Associated Bloodstream Infection Bundle Prevention',
    subtopic: 'Subclavian Vein Site Selection and Full Barrier Precautions',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Prevent Central Line-Associated Bloodstream Infections (CLABSI - CDC Bundle): - 5 EVIDENCE-BASED BUNDLE COMPONENTS: 1. STRICT HAND HYGIENE before catheter insertion; 2. MAXIMAL STERILE BARRIER PRECAUTIONS (cap, mask, sterile gown, sterile gloves, and large full-body sterile drape); 3. SKIN ANTISEPSIS: > 0.5% CHLORHEXIDINE WITH ALCOHOL skin prep (allowed to air-dry completely); 4. OPTIMAL SITE SELECTION: SUBCLAVIAN VEIN is preferred over internal jugular and femoral veins (FEMORAL SITE CARRIES HIGHEST INFECTION AND THROMBOSIS RISK in adults and should be avoided); 5. DAILY REVIEW of line necessity with prompt removal of unneeded catheters.',
    citation: "O'Grady NP, et al. Guidelines for the Prevention of Intravascular Catheter-related Infections. Clin Infect Dis. 2011;52(9):e162-e193. PMID: 21460264.",
    stem:
      'A 58-year-old man with septic shock secondary to acute perforated diverticulitis requires placement of a multi-lumen central venous catheter for continuous vasopressor infusion and hemodynamic monitoring in the intensive care unit. The patient has no underlying coagulopathy, severe emphysema, or anatomical deformities of the neck, chest, or groin. The critical care fellow is preparing to insert the central line. Which of the following technical and procedural practices has the strongest evidence for minimizing the risk of catheter-related bloodstream infection and deep vein thrombosis in this patient?',
    options: [
      {
        text: 'Select the subclavian vein insertion site over the femoral vein, use chlorhexidine-alcohol skin antisepsis, and apply maximal sterile barrier precautions',
        explanation: 'Central line-associated bloodstream infections (CLABSIs) are a major source of preventable hospital morbidity and mortality. The CDC and Institute for Healthcare Improvement (IHI) "Central Line Bundle" incorporates five core evidence-based interventions that dramatically reduce CLABSI rates: (1) OPTIMAL ANATOMICAL SITE SELECTION: In adult patients, the SUBCLAVIAN VEIN is the preferred site for non-tunneled central catheters because it has lower bacterial colonization density and significantly lower rates of both catheter-related bloodstream infection and catheter-related deep venous thrombosis compared to the internal jugular and FEMORAL VEIN (the femoral site has the highest rate of mechanical and infectious complications and should be avoided); (2) MAXIMAL STERILE BARRIER PRECAUTIONS: The operator must wear a cap, mask, sterile gown, and sterile gloves, and cover the patient with a full-body sterile drape; (3) CHLORHEXIDINE SKIN ANTISEPSIS: Preparing the skin with > 0.5% chlorhexidine gluconate in 70% alcohol and allowing it to air-dry completely; (4) Strict hand hygiene before line manipulation; and (5) Daily assessment of catheter necessity with prompt removal when no longer required.'
      },
      {
        text: 'Select the femoral vein insertion site to completely avoid the risk of pneumothorax',
        explanation: 'While the femoral site avoids pneumothorax, it carries the highest risk of catheter-related bloodstream infection and deep vein thrombosis in adult patients.'
      },
      {
        text: 'Use 10% povidone-iodine solution and wipe the skin dry with sterile gauze immediately before puncture',
        explanation: 'Chlorhexidine-alcohol has superior persistent bactericidal activity compared to povidone-iodine, and antiseptics must air-dry naturally to achieve maximal sterilization.'
      },
      {
        text: 'Administer a single prophylactic dose of intravenous vancomycin 30 minutes prior to catheter insertion',
        explanation: 'Routine systemic antibiotic prophylaxis before central catheter insertion does not prevent CLABSIs and promotes multidrug-resistant pathogens.'
      },
      {
        text: 'Replace the central venous catheter routinely every 7 days over a guidewire to prevent colonization',
        explanation: 'Scheduled routine replacement of central lines increases mechanical complications and infection rates; lines should only be removed when no longer needed or if infected.'
      }
    ]
  }
];
