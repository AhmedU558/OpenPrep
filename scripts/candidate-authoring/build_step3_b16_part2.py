import sys

# Step 3 Batch 16 Part 2 (items 0388 to 0400)
# Focus: Transitions of Care, Diagnostic Biases, Patient Safety, Boundary Ethics, Planted Rejection & Clinical Controversy

items_b16_p2 = [
  {
    "code": "op-c-s3-0388",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Transitions of Care & Hand-off Communication",
    "subtopic": "I-PASS Structured Hand-off Bundle",
    "provisionalDifficulty": 4,
    "stem": "A hospital medicine service implements a quality improvement initiative to reduce preventable adverse events during physician shift changes. Prior to the intervention, sign-out consisted of informal, unstructured verbal updates and handwritten notes, resulting in missed clinical tasks, medication delays, and delayed intensive care unit transfers. The department adopts the standardized 'I-PASS' mnemonic framework for all verbal and written handoffs. During evening sign-out, an intern presents a newly admitted patient: 'This is an 81-year-old woman with severe community-acquired pneumonia, categorized as 'Watcher' due to borderline hemodynamics. She is receiving intravenous ceftriaxone and azithromycin; blood cultures and procalcitonin are pending. If her oxygen requirement exceeds 4 L/min on nasal cannula or if her systolic blood pressure drops below 90 mm Hg, obtain a repeat arterial blood gas and page the rapid response team.' The intern then pauses and asks the night cross-cover resident to synthesize the plan. Which of the following elements of the I-PASS framework was demonstrated by the cross-cover resident repeating the critical action items and contingencies?",
    "choices": [
      [
        "Synthesis by receiver",
        "The I-PASS handoff bundle is a proven, evidence-based communication system that significantly reduces preventable medical errors and adverse events. The mnemonic represents: I: Illness severity (e.g., Stable, Watcher, Unstable); P: Patient summary (brief clinical narrative, diagnoses, treatment plan); A: Action list (specific to-do items and timelines); S: Situation awareness and contingency planning (what might go wrong and explicit next steps); S: Synthesis by receiver (the receiving clinician summarizes key points, asks clarifying questions, and confirms mutual understanding). The closed-loop confirmation performed by the cross-cover resident is the 'Synthesis by receiver' step."
      ],
      [
        "Illness severity categorization",
        "Illness severity categorization was demonstrated when the intern classified the patient as a 'Watcher' at the beginning of the sign-out."
      ],
      [
        "Contingency planning",
        "Contingency planning was demonstrated by specifying thresholds for triggering an ABG and paging the rapid response team, but the cross-cover resident repeating and summarizing back is the synthesis step."
      ],
      [
        "Patient clinical summary",
        "The patient clinical summary is the diagnostic narrative (81-year-old with pneumonia on antibiotics), not the closed-loop read-back."
      ],
      [
        "Structured action list",
        "The action list designates specific tasks (checking blood cultures and procalcitonin), distinct from the receiver's synthesis."
      ]
    ],
    "shortestValidSolution": "Cross-cover clinician repeating key tasks and confirming mutual understanding represents 'Synthesis by receiver' in I-PASS.",
    "necessaryInference": "Identify components of the I-PASS hand-off mnemonic and recognize closed-loop synthesis by receiver.",
    "strongestDistractor": "Contingency planning",
    "distractorExclusion": "Contingency planning is the 'if-then' instruction ('if O2 > 4L...'), whereas repeating back the plan is Synthesis by receiver.",
    "citation": "Starmer AJ, et al. Changes in medical errors after implementation of a handoff program. N Engl J Med. 2014;371(19):1803-1812. doi:10.1056/NEJMsa1405556"
  },
  {
    "code": "op-c-s3-0389",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Cognitive Biases in Diagnostic Decision-Making",
    "subtopic": "Anchoring Bias and Premature Closure",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with chronic severe alcohol use disorder is brought to the emergency department by police after being found unkempt and stumbling on a sidewalk. The triage nurse notes a strong odor of alcohol and documents 'acute alcohol intoxication.' The attending emergency physician glances at the triage note, checks that the patient is breathing comfortably, orders routine intravenous fluids with thiamine and folate, and places the patient in the 'sobering area' to sleep off intoxication without performing a complete neurologic examination. Six hours later, the day-shift physician evaluates the patient and notes fixed left pupil dilation (anisocoria) and right-sided flaccid hemiplegia. An urgent non-contrast head CT reveals a massive acute-on-chronic subdural hematoma with a 14-mm midline shift and uncal herniation requiring emergency decompressive craniotomy. Which of the following cognitive biases was the primary psychological contributor to the initial physician's diagnostic failure?",
    "choices": [
      [
        "Anchoring bias and premature closure",
        "Anchoring bias occurs when a clinician fixates prematurely on initial information or a prominent baseline feature (the smell of alcohol and triage note label of 'intoxication') and fails to adjust their diagnostic assessment despite the presence of alternative life-threatening possibilities. Premature closure is the closely related cognitive error of accepting a diagnosis before it has been fully verified or before competing diagnoses have been ruled out. In substance-using or stigmatized patients, anchoring on intoxication without performing a comprehensive neurologic examination and trauma survey frequently leads to catastrophic missed diagnoses such as acute intracranial hemorrhage, hypoglycemia, or intracranial infection."
      ],
      [
        "Availability bias",
        "Availability bias is the tendency to overestimate the likelihood of a disease because of vivid or recent clinical experiences, rather than fixating on initial triage data in the current patient."
      ],
      [
        "Confirmation bias",
        "Confirmation bias involves selectively searching for or interpreting evidence that confirms a pre-existing hypothesis while actively ignoring contradictory evidence; here, the clinician simply failed to examine the patient."
      ],
      [
        "Framing effect",
        "Framing effect occurs when decision-making is manipulated by how information is presented (e.g., survival rate vs mortality rate), rather than premature diagnostic cessation."
      ],
      [
        "Hindsight bias",
        "Hindsight bias is the retrospective belief that an event was predictable after the outcome is already known; it does not explain the initial clinician's real-time diagnostic failure."
      ]
    ],
    "shortestValidSolution": "Fixating on initial triage label of alcohol intoxication and stopping evaluation without a neurologic exam is anchoring and premature closure.",
    "necessaryInference": "Recognize anchoring bias and premature closure as cognitive drivers of diagnostic error in clinical presentations.",
    "strongestDistractor": "Availability bias",
    "distractorExclusion": "Availability relates to recent memorable cases; anchoring is fixating on initial clinical cues in the current encounter.",
    "citation": "Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med. 2003;78(8):775-780. doi:10.1097/00001888-200308000-00003"
  },
  {
    "code": "op-c-s3-0390",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Rapid Response Systems & Failure to Rescue",
    "subtopic": "Afferent Limb Triggers & Physiological Deterioration",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man who underwent an uncomplicated elective open hemicolectomy for colon adenocarcinoma 3 days ago is recovering on the surgical floor. At 04:00, the night nurse records vital signs: blood pressure 92/58 mm Hg (baseline 138/82 mm Hg), heart rate 124/min regular (baseline 74/min), respiratory rate 30/min (baseline 16/min), and pulse oximetry 90% on room air. The patient is restless and confused, answering that he is at a train station. The surgical intern on call is contacted by pager and messages back: 'Give 500 mL saline bolus and 1 dose of lorazepam for hospital delirium; I will evaluate him on morning rounds at 07:00.' Two hours later, the patient suffers an unheralded cardiac arrest (pulseless electrical activity) and cannot be resuscitated. An institutional mortality review identifies a severe breakdown in the hospital's rapid response system (RRS). Which of the following represents the most critical operational breakdown in this patient's care?",
    "choices": [
      [
        "Failure of the afferent limb of the rapid response system, characterized by failure to immediately trigger the rapid response team upon detecting marked physiological derangement (tachypnea, tachycardia, hypotension, and acute confusion)",
        "Rapid response systems consist of two primary operational components: (1) the afferent limb (early detection of physiological deterioration by frontline staff and immediate activation of the response team), and (2) the efferent limb (the multidisciplinary resuscitation team that responds and delivers critical care interventions). Studies demonstrate that patients who suffer unexpected in-hospital cardiac arrests frequently exhibit objective signs of severe physiological decompensation (specifically tachypnea > 28/min, tachycardia > 120/min, hypotension, or acute encephalopathy) for 6 to 12 hours prior to arrest. Delaying evaluation, failing to recognize impending shock, and not activating the afferent limb represents a classic 'failure to rescue'."
      ],
      [
        "Failure of the efferent limb of the rapid response system, characterized by inadequate ICU bed availability for surgical transfers",
        "The efferent limb was never summoned or mobilized because the afferent trigger was never activated; the primary system breakdown was afferent."
      ],
      [
        "Inappropriate administration of intravenous crystalloid boluses in postoperative elderly surgical patients",
        "Fluid resuscitation is indicated in acute hypotension and tachycardia; the fatal error was ignoring severe instability, sedating confusion, and failing to summon emergency critical care."
      ],
      [
        "Failure to perform routine overnight blood gas analysis on all postoperative surgical patients",
        "Routine overnight arterial punctures on all stable surgical patients are neither standard nor indicated; objective vital sign derangements must trigger immediate bedside evaluation."
      ],
      [
        "Absence of an automated closed-circuit extracorporeal membrane oxygenation team on general surgical floors",
        "General surgical wards require rapid response teams and early escalation protocols, not baseline ECMO deployment."
      ]
    ],
    "shortestValidSolution": "Failure to activate rapid response team despite severe physiological deterioration (RR 30, HR 124, BP 92/58, confusion) is an afferent limb failure.",
    "necessaryInference": "Differentiate afferent limb failure (detection and activation) from efferent limb failure (response delivery) in rapid response systems.",
    "strongestDistractor": "Failure of the efferent limb of the rapid response system, characterized by inadequate ICU bed availability for surgical transfers",
    "distractorExclusion": "The efferent team was never called; failure of bedside recognition and activation is an afferent limb defect.",
    "citation": "Devita MA, et al. Findings of the first consensus conference on medical emergency teams. Crit Care Med. 2006;34(9):2463-2478. doi:10.1097/01.CCM.0000235743.38172.6E"
  },
  {
    "code": "op-c-s3-0391",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Inpatient Fall Prevention & Restraint Ethics",
    "subtopic": "Multicomponent Fall Bundles vs Risks of Physical Restraints",
    "provisionalDifficulty": 4,
    "stem": "An 84-year-old woman with moderate Alzheimer disease and osteoarthritis is admitted to the medical ward for treatment of pyelonephritis. On hospital day 2, she attempts to get out of bed unassisted to use the toilet, becomes entangled in IV tubing, and falls to the floor, sustaining a small scalp laceration without loss of consciousness. Head CT is negative for acute intracranial bleeding. The patient is mildly confused, repeatedly attempts to climb out of bed, and resists staying in bed. The overnight resident considers applying bilateral wrist restraints and four-point bed rails to prevent another fall. Which of the following is the most accurate evidence-based recommendation regarding physical restraints and inpatient fall prevention in this patient?",
    "choices": [
      [
        "Physical restraints should be avoided because they do not reduce fall risk and are associated with increased rates of severe injury, asphyxiation, delirium, and prolonged hospitalization; implement a multicomponent fall-prevention bundle instead",
        "Extensive clinical trial and observational evidence demonstrates that physical restraints (e.g., wrist ties, vest restraints) do NOT prevent patient falls and actually increase the risk of severe injuries, strangulation, entrapment, worsening agitation, functional decline, pressure ulcers, and accelerated delirium. Four raised bed rails are also classified as a physical restraint that increases the height of falls when patients climb over them. Evidence-based fall prevention relies on multicomponent non-restraint bundles: lowering the bed to floor level, floor mats, non-skid footwear, frequent scheduled toileting (every 2 hours), bedside sitters or continuous video monitoring, medication review to deprescribe sedating drugs, and early mobilization."
      ],
      [
        "Four-point leather restraints should be immediately applied because preventing secondary hip fracture is the paramount legal standard",
        "Four-point restraints are severe interventions reserved only for violent, self-injurious psychiatric emergencies, and increase mortality and injury in frail elderly patients."
      ],
      [
        "All four side rails must be permanently elevated because hospital accreditation agencies mandate four-rail containment for all post-fall patients",
        "Raising all four bed rails is legally considered a physical restraint and is strongly discouraged by regulatory bodies because patients climbing over top rails suffer worse head and neck trauma."
      ],
      [
        "Administer intramuscular lorazepam every 4 hours around the clock to sedate the patient until discharge",
        "Benzodiazepines dramatically worsen delirium, double fall risk, and increase hip fracture rates in elderly patients (Beers criteria)."
      ],
      [
        "Immobilize the patient in bed with strict complete bed rest orders for the remainder of the hospital stay",
        "Complete bed rest causes rapid muscle deconditioning, deep vein thrombosis, and functional dependence, further aggravating fall risk."
      ]
    ],
    "shortestValidSolution": "Physical restraints increase injury, delirium, and strangulation without reducing falls; multicomponent non-restraint bundles are standard of care.",
    "necessaryInference": "Recognize that physical restraints are ineffective at preventing falls and cause severe harm; implement multicomponent alternatives.",
    "strongestDistractor": "All four side rails must be permanently elevated because hospital accreditation agencies mandate four-rail containment for all post-fall patients",
    "distractorExclusion": "Four raised rails constitute physical restraints and lead to dangerous high falls over rails; regulatory bodies advise against them.",
    "citation": "Inouye SK, et al. Preventing falls in hospitalized patients: state of the science. Clin Geriatr Med. 2010;26(4):683-705. doi:10.1016/j.cger.2010.07.005"
  },
  {
    "code": "op-c-s3-0392",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Medication Reconciliation & Care Transitions",
    "subtopic": "Discharge Medication Reconciliation & Adverse Drug Events",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old man with heart failure with reduced ejection fraction (EF 30%), type 2 diabetes mellitus, and chronic kidney disease stage 3b is discharged home after an admission for acute decompensated heart failure. During hospitalization, his outpatient home dose of carvedilol (25 mg twice daily) was temporarily reduced to 6.25 mg twice daily due to acute pulmonary edema, and his oral furosemide was switched to high-dose IV bumetanide. At the time of discharge, his clinical status has stabilized with dry weight reached. The discharge resident generates the discharge summary using automated EHR copy-forward functions without conducting a formal medication reconciliation with the clinical pharmacist or patient. As a result, the discharge instruction sheet lists BOTH carvedilol 6.25 mg twice daily and carvedilol 25 mg twice daily, as well as both furosemide 40 mg daily and bumetanide 2 mg daily. The patient takes all listed medications and presents 4 days later in cardiogenic shock and acute renal failure. Which of the following best describes the patient safety process that failed in this scenario?",
    "choices": [
      [
        "Medication reconciliation at care transition, which requires systematic comparison of the patient's pre-admission regimen against all active inpatient changes to produce an accurate, unified discharge prescription",
        "Medication reconciliation is a formal, standardized process designed to prevent medication errors at patient transition points (admission, transfer between units, and hospital discharge). It requires: (1) building the best possible medication history; (2) comparing the home regimen with newly started, adjusted, or discontinued inpatient orders; (3) identifying and resolving unintentional discrepancies (omissions, duplications, dosing errors, drug interactions); and (4) communicating an unambiguous, verified list to the patient and outpatient care team. Care transitions are exceptionally high-risk periods where unverified copy-forward documentation routinely causes severe adverse drug events."
      ],
      [
        "Failure of therapeutic drug monitoring, because serum carvedilol levels should be measured 24 hours prior to hospital discharge",
        "Carvedilol and loop diuretics are not managed by serum drug concentration assays; titration is guided by clinical hemodynamics and volume status."
      ],
      [
        "Pharmacogenomic cytochrome P450 screening failure, because CYP2D6 metabolizer status was not documented prior to discharge",
        "The patient suffered massive duplicate overdosing from clerical EHR duplication, not an idiosyncratic pharmacogenomic enzyme polymorphism."
      ],
      [
        "Failure of the hospital antibiotic stewardship committee to review discharge cardiovascular medications",
        "Antibiotic stewardship committees oversee antimicrobial utilization, not cardiovascular medication reconciliation."
      ],
      [
        "Failure of the two-challenge rule between the attending physician and the pharmacy resident",
        "The two-challenge rule is an assertive communication technique used during immediate procedural emergencies, not routine discharge prescription assembly."
      ]
    ],
    "shortestValidSolution": "Failing to reconcile home medications with inpatient changes at discharge led to dangerous duplicate dosing, representing a medication reconciliation failure.",
    "necessaryInference": "Identify medication reconciliation as the required transition-of-care safety process to eliminate unintentional duplications and omissions.",
    "strongestDistractor": "Failure of therapeutic drug monitoring, because serum carvedilol levels should be measured 24 hours prior to hospital discharge",
    "distractorExclusion": "Carvedilol has no routine therapeutic drug level monitoring; the failure is an un-reconciled duplicate prescription at discharge.",
    "citation": "Mueller SK, et al. Hospital-based medication reconciliation practices: a systematic review. Arch Intern Med. 2012;172(14):1057-1069. doi:10.1001/archinternmed.2012.2246"
  },
  {
    "code": "op-c-s3-0393",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Professional Boundaries & Physician-Patient Relationship",
    "subtopic": "Gifts from Patients & Conflict of Interest",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old real estate executive has been a patient of an outpatient internist for 10 years. The internist recently diagnosed early-stage localized colon cancer during a screening colonoscopy, leading to a curative laparoscopic resection without complications. At his 6-month postoperative visit, the patient expresses profound gratitude and presents the physician with an envelope containing two tickets to the Super Bowl (face value $5,000 each) along with reservations for a luxury hotel suite. The patient says: 'You saved my life, doctor. My family and I will never forget it. Please take these tickets as a small token of our appreciation.' The clinic has no formal written policy regarding patient gifts. Which of the following is the most ethically appropriate response by the physician?",
    "choices": [
      [
        "Politely decline the tickets, explain that accepting gifts of significant monetary value compromises professional boundaries and objectivity, but express warm appreciation for the patient's kind words and gratitude",
        "When evaluating gifts from patients, physicians must consider: (1) the monetary value of the gift; (2) the timing and underlying motive (gratitude vs expectation of special access or preferential treatment); and (3) whether accepting the gift compromises professional boundaries, objectivity, or the physician-patient relationship. Modest, inexpensive gifts (e.g., home-baked cookies, a holiday fruit basket for clinic staff) may be graciously accepted because declining might insult the patient. However, gifts of substantial monetary value ($10,000 Super Bowl package) must be declined. The physician should thank the patient warmly, explain the ethical boundary constraints, and redirect any desire to give toward a charitable foundation or hospital fund."
      ],
      [
        "Accept the tickets gladly because declining any gift from an established patient irreparably damages the therapeutic relationship",
        "Accepting extravagant gifts alters professional objectivity and creates an unethical obligation or perception of favoritism."
      ],
      [
        "Accept the tickets on the condition that the physician attends the game accompanied by the patient and his family",
        "Socializing with patients at luxury private sporting events severely compounds professional boundary violations."
      ],
      [
        "Sell the tickets on a public ticket exchange and donate the cash anonymously to the physician's personal retirement account",
        "Converting a patient's gift into personal financial gain under the guise of an exchange is unethical and deceptive."
      ],
      [
        "Accept the tickets only after obtaining written signed authorization from the state medical board ethics panel",
        "Physicians are expected to exercise independent ethical judgment to decline disproportionately lavish gifts; licensing boards do not issue gift approvals."
      ]
    ],
    "shortestValidSolution": "Politely decline extravagant gifts ($10,000) that breach professional boundaries while expressing appreciation for the sentiment.",
    "necessaryInference": "Apply ethical standards regarding gifts from patients: distinguish nominal tokens of appreciation from high-value boundary violations.",
    "strongestDistractor": "Accept the tickets on the condition that the physician attends the game accompanied by the patient and his family",
    "distractorExclusion": "Accompanying a patient on an extravagant luxury trip worsens the boundary violation; high-value gifts must be declined.",
    "citation": "Spence SA. Patients bearing gifts: are there strings attached? BMJ. 2005;331(7531):1527-1529. doi:10.1136/bmj.331.7531.1527"
  },
  {
    "code": "op-c-s3-0394",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Confidentiality & Exceptions to Privacy",
    "subtopic": "Tarasoff Duty to Warn and Protect Identifiable Third Parties",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old man presents to an outpatient psychiatry clinic for management of major depressive disorder following a contentious divorce. During the session, the patient becomes visibly agitated, slams his fist on the desk, and pulls out an ammunition magazine from his coat. He states: 'My ex-wife's new boyfriend, David Miller, is the reason I lost custody of my kids. I bought a Glock 19 yesterday. He leaves his office on 4th Street every day at 5:00 PM. I am going to wait in the parking garage this afternoon and shoot him in the head.' The psychiatrist assesses that the patient is fully lucid, intoxicated with rage, possesses immediate lethal means, and harbors an explicit, imminent intent to execute this plan. The patient grabs his coat and storms out of the clinic office. Which of the following is the most appropriate and legally mandated action by the physician?",
    "choices": [
      [
        "Immediately notify local law enforcement and take reasonable steps to warn the identifiable intended victim (David Miller) of the specific, imminent threat",
        "While patient confidentiality is a cornerstone of medicine, it is not absolute. Under common law established by the landmark Tarasoff v. Regents of the University of California ruling and codifying statutes in most US jurisdictions, a healthcare provider has a mandatory legal 'duty to protect' (duty to warn) intended victims when a patient makes an explicit, credible, and imminent threat of serious physical harm or death against an identifiable individual. The physician must immediately contact law enforcement to facilitate emergency intervention and make reasonable efforts to warn the endangered third party. Medical confidentiality does not shield imminent violent felonies."
      ],
      [
        "Maintain strict patient confidentiality under HIPAA regulations because disclosing threats to third parties constitutes a federal criminal offense",
        "HIPAA specifically includes an explicit exception permitting disclosure of protected health information to avert a serious and imminent threat to the health or safety of an individual or the public."
      ],
      [
        "Wait 24 hours to observe whether the patient cools down before taking any external protective action",
        "The threat is explicit, imminent, and involves immediate access to a firearm; waiting 24 hours would result in catastrophic preventable homicide."
      ],
      [
        "Contact the patient's ex-wife only, because notifying law enforcement without a subpoena violates fourth amendment protections",
        "Law enforcement must be contacted immediately to intercept an imminent armed assault; subpoenas are not required to report imminent violence."
      ],
      [
        "File an electronic civil commitment petition with the county courthouse to be reviewed during regular business hours tomorrow",
        "Civil commitment proceedings do not provide immediate protection for an imminent attack scheduled for that afternoon."
      ]
    ],
    "shortestValidSolution": "Explicit, imminent threat against an identifiable victim creates a mandatory duty to notify police and warn the intended victim (Tarasoff).",
    "necessaryInference": "Apply the Tarasoff exception to medical confidentiality for imminent, specific threats against identifiable individuals.",
    "strongestDistractor": "Maintain strict patient confidentiality under HIPAA regulations because disclosing threats to third parties constitutes a federal criminal offense",
    "distractorExclusion": "HIPAA explicitly exempts disclosures to prevent imminent, serious physical harm; confidentiality does not protect homicide threats.",
    "citation": "Kachigian C, Felthous AR. Court responses to Tarasoff. J Am Acad Psychiatry Law. 2004;32(3):263-273. PMID: 15515912"
  },
  {
    "code": "op-c-s3-0395",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Conscientious Objection in Clinical Practice",
    "subtopic": "Balancing Moral Integrity with Patient Abandonment and Timely Referral",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman presents to an outpatient family medicine clinic on a Monday morning requesting emergency contraception. She reports that she had consensual intercourse on Saturday night and the condom broke approximately 36 hours ago. She does not desire pregnancy. The family physician on duty holds deeply held personal religious convictions that life begins at fertilization and considers post-coital hormonal emergency contraception (e.g., levonorgestrel or ulipristal acetate) to be morally unacceptable. Which of the following is the most ethically appropriate course of action for this physician in accordance with professional medical ethics guidelines?",
    "choices": [
      [
        "Respectfully inform the patient of his conscientious objection, provide accurate medical information about emergency contraception options, and ensure a prompt and timely referral to an accessible provider so her care is not delayed",
        "Professional codes of ethics (including the American Medical Association Code of Medical Ethics and the American College of Obstetricians and Gynecologists) recognize a physician's right to conscientious objection—the freedom to decline to provide specific medical procedures that violate their deeply held moral or religious beliefs. However, this right is strictly constrained by duties to the patient: physicians must not impose their beliefs, judge or demean the patient, or obstruct care. Crucially, the objecting physician must provide factual information regarding available options and ensure an immediate, timely referral to an accessible provider who can deliver the service within the critical therapeutic window (e.g., <72-120 hours for emergency contraception) to prevent patient harm and abandonment."
      ],
      [
        "Refuse to provide the prescription, refuse to provide any referral, and counsel the patient that using emergency contraception is morally wrong",
        "Imposing moral beliefs on a patient and refusing referral breaches fundamental ethical duties and constitutes patient obstruction/abandonment."
      ],
      [
        "Prescribe a placebo tablet to satisfy the patient's psychological request while honoring his personal moral convictions",
        "Prescribing a deceptive placebo violates veracity, medical honesty, and deprives the patient of effective pregnancy prevention."
      ],
      [
        "Conscientious objection is strictly illegal under federal law, and the physician must personally dispense the medication regardless of personal conscience",
        "Conscientious objection is legally protected and recognized in healthcare, provided that emergency care is not compromised and referrals are made."
      ],
      [
        "Delay the referral for 5 days until the time window for emergency contraceptive efficacy has naturally expired",
        "Intentionally delaying care to sabotage the therapeutic window is malicious, unethical, and grounds for malpractice."
      ]
    ],
    "shortestValidSolution": "Conscientious objection is permissible but requires informing the patient and providing prompt referral to ensure timely care.",
    "necessaryInference": "Balance physician conscientious objection with the ethical duty of non-abandonment and timely referral within therapeutic windows.",
    "strongestDistractor": "Refuse to provide the prescription, refuse to provide any referral, and counsel the patient that using emergency contraception is morally wrong",
    "distractorExclusion": "Physicians cannot obstruct care or preach moral views; ethical objection mandates facilitating prompt transfer to an willing provider.",
    "citation": "American College of Obstetricians and Gynecologists. The limits of conscientious refusal in reproductive medicine. ACOG Committee Opinion No. 385. Obstet Gynecol. 2007;110(5):1201-1208. PMID: 17978144"
  },
  {
    "code": "op-c-s3-0396",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Involuntary Psychiatric Commitment",
    "subtopic": "Legal Criteria for Emergency Involuntary Hold",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old man with a history of schizophrenia is brought to the emergency department by his sister. For the past 3 weeks, he has stopped taking his oral fluphenazine. On examination, he is disheveled, actively responding to internal auditory stimuli, and exhibits paranoid delusions that the government is broadcasting microchip frequencies into his apartment through the water pipes. When asked about his health, he states: 'The voices are telling me that the only way to stop the broadcast is to jump off the bridge tonight at midnight. I have my shoes on and I am ready to go.' He refuses psychiatric admission and insists on leaving the hospital immediately. His cognitive screening is intact, and he has normal vital signs and negative toxicology screens. Which of the following is the most appropriate legal and clinical management?",
    "choices": [
      [
        "Place the patient on an emergency involuntary psychiatric hold to ensure immediate containment and evaluation in a secure inpatient psychiatric unit",
        "Involuntary psychiatric commitment deprives an individual of liberty and is justified ethically and legally under the state's parens patriae power and police power. The universal statutory criteria across US jurisdictions for an emergency involuntary hold (e.g., 72-hour observation hold) require that the patient, due to a severe mental illness, presents an: (1) imminent danger to self (active suicidal intent with specific plan, as in jumping from the bridge); (2) imminent danger to others; or (3) grave disability (inability to provide basic food, clothing, or shelter). Because this patient exhibits active psychosis with immediate lethal suicidal intent and refuses voluntary admission, emergency involuntary hospitalization is legally mandated to protect life."
      ],
      [
        "Allow the patient to sign out against medical advice (AMA) because he demonstrates intact orientation and memory",
        "Intact orientation does not equate to capacity or legal competence; active psychosis driving imminent suicide precludes voluntary refusal."
      ],
      [
        "Discharge the patient with a prescription for oral risperidone and arrange an outpatient appointment in 2 weeks",
        "Discharging an actively suicidal, psychotic patient with a specific immediate plan constitutes egregious clinical negligence."
      ],
      [
        "Require the patient's sister to assume legal and physical custody by signing a hold-harmless indemnification waiver",
        "Hospitals cannot transfer the legal duty to protect an actively suicidal patient onto a family member via waivers."
      ],
      [
        "Contact a probate judge to conduct a 14-day jury competency trial before admitting the patient to the psychiatric ward",
        "Emergency involuntary holds allow immediate short-term detention (typically 72 hours) for acute safety; full judicial hearings occur later if extended commitment is required."
      ]
    ],
    "shortestValidSolution": "Active psychosis with explicit, imminent suicide plan satisfies legal criteria for emergency involuntary psychiatric commitment.",
    "necessaryInference": "Apply legal criteria for involuntary commitment (imminent danger to self/others or grave disability due to mental illness).",
    "strongestDistractor": "Allow the patient to sign out against medical advice (AMA) because he demonstrates intact orientation and memory",
    "distractorExclusion": "Orientation does not establish capacity when severe psychosis dictates imminent suicide; AMA discharge is legally and medically invalid.",
    "citation": "Appelbaum PS. Almost a Revolution: Mental Health Law and the Limits of Change. New York, NY: Oxford University Press; 1994:17-58. NLM ID: 9425424"
  },
  {
    "code": "op-c-s3-0397",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Palliative Care Ethics & End-of-Life Management",
    "subtopic": "Doctrine of Double Effect in Palliative Symptom Management",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with metastatic stage IV non-small cell lung cancer with extensive bone metastases and carcinomatous lymphangitic spread is enrolled in inpatient hospice care. He experiences excruciating, refractory bone pain and severe air hunger (dyspnea at rest) that are inadequately controlled despite an intravenous morphine infusion of 10 mg/hour. His respiratory rate is 28/min with shallow accessory muscle use and facial grimacing. His daughter, who is his designated healthcare proxy, pleads with the palliative care physician to increase the morphine infusion to relieve his suffering. A newly licensed nurse expresses hesitation, stating: 'If we increase the morphine infusion to 20 mg/hour, his breathing might slow down further and it could hasten his death, which would be physician-assisted euthanasia.' Which of the following ethical doctrines justifies increasing the opioid dose to alleviate this patient's suffering?",
    "choices": [
      [
        "The doctrine of double effect, which provides that an intervention intended to achieve a morally good outcome (relieving severe pain and dyspnea) is ethically permissible even if it carries a foreseeable, unintended secondary risk (hastening death)",
        "The doctrine of double effect is a fundamental ethical and legal framework in palliative medicine. It states that an action having two foreseen effects—one good (relief of refractory suffering) and one bad (potential respiratory depression or hastening of death)—is ethically permissible provided that: (1) the nature of the act itself is morally good or neutral (administering analgesia); (2) the clinician's primary intention is solely to achieve the good effect; (3) the bad effect is not the means to achieve the good effect (death is not the tool used to end pain); and (4) there is a proportionate, compelling reason to risk the bad effect. Furthermore, empirical palliative evidence demonstrates that appropriately titrated opioids for severe dyspnea and pain do not hasten death and often improve functional respiration."
      ],
      [
        "The principle of non-maleficence, which strictly prohibits administering any medication that has potential side effects in terminal illness",
        "Non-maleficence must be balanced with beneficence; withholding essential pain relief out of misplaced fear of side effects constitutes medical neglect."
      ],
      [
        "Voluntary active euthanasia doctrine, which permits clinicians to terminate life upon request of a designated healthcare surrogate",
        "Active euthanasia involves administering a lethal substance with the primary intention of causing death; it is distinct from palliative symptom relief."
      ],
      [
        "The emergency doctrine, which legally eliminates all professional standard-of-care requirements during the final 48 hours of life",
        "The emergency doctrine pertains to implied consent in unrepresented emergencies; palliative standard of care remains fully operative at end of life."
      ],
      [
        "The substituted judgment standard, which requires administering high-dose neuromuscular blockade to halt respiratory distress",
        "Administering paralytic agents without sedation or intubation causes terrifying suffocation and is active homicide, not palliative care."
      ]
    ],
    "shortestValidSolution": "Doctrine of double effect permits escalating opioids to relieve severe suffering even if it carries a foreseeable risk of hastening death.",
    "necessaryInference": "Apply the doctrine of double effect to distinguish aggressive palliative symptom management from active euthanasia.",
    "strongestDistractor": "Voluntary active euthanasia doctrine, which permits clinicians to terminate life upon request of a designated healthcare surrogate",
    "distractorExclusion": "Double effect distinguishes intending symptom relief from intending death; euthanasia involves deliberate termination of life.",
    "citation": "Quill TE, Dresser R, Brock DW. The rule of double effect—a critique of its role in end-of-life decision making. N Engl J Med. 1997;337(24):1768-1771. doi:10.1056/NEJM199712113372413"
  },
  {
    "code": "op-c-s3-0398",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Transitions of Care & Care Coordination",
    "subtopic": "Post-Discharge Bundles to Reduce 30-Day Heart Failure Readmissions",
    "provisionalDifficulty": 4,
    "stem": "An urban academic medical center evaluates strategies to reduce its 30-day all-cause hospital readmission rate for patients discharged following an admission for acute decompensated heart failure. An analysis of prior readmissions reveals that 65% of readmitted patients suffered from uncoordinated outpatient medication titrations, missed follow-up appointments, or delayed recognition of early fluid overload symptoms at home. A multidisciplinary quality improvement task force designs a comprehensive transitional care bundle. Which of the following components of a transitional care program has the strongest evidence base for reducing 30-day all-cause hospital readmissions in heart failure?",
    "choices": [
      [
        "A structured transitional care bundle incorporating an inpatient multidisciplinary discharge plan, a post-discharge nurse telephone follow-up within 48 to 72 hours, and a guaranteed in-person outpatient clinic visit within 7 days",
        "Comprehensive transitional care programs for heart failure are proven to significantly reduce 30-day hospital readmissions and mortality. The highest-impact evidence-based components include: (1) structured inpatient predischarge education and multidisciplinary medication reconciliation; (2) early telephone follow-up by a specialized nurse within 48 to 72 hours post-discharge to review symptoms, daily weights, and verify medication access; and (3) an early in-person clinical follow-up appointment within 7 days of discharge to evaluate hemodynamics, adjust diuretic therapy, and uptitrate guideline-directed medical therapy (GDMT)."
      ],
      [
        "Mailing an automated printed pamphlet on low-sodium nutrition to the patient's home 3 weeks following discharge",
        "Passive mailing of nutritional pamphlets without clinical follow-up has zero proven impact on 30-day readmissions."
      ],
      [
        "Scheduling an outpatient routine cardiology clinic appointment 60 days following hospital discharge",
        "The critical vulnerability window for heart failure readmission is within the first 1 to 2 weeks; waiting 60 days misses the opportunity for early intervention."
      ],
      [
        "Instructing patients to call the hospital emergency department directly whenever they gain more than 0.5 pounds in a week",
        "Routine emergency department visits for minor weight fluctuations cause hospital crowding; daily home weight tracking with clinic nurse contact algorithms is effective."
      ],
      [
        "Ordering continuous outpatient telemetry monitoring for all heart failure patients regardless of rhythm status",
        "Universal continuous outpatient telemetry has not demonstrated a reduction in 30-day heart failure readmissions and generates substantial alert fatigue."
      ]
    ],
    "shortestValidSolution": "Evidence-based transitional bundle: predischarge reconciliation + phone call in 48-72h + clinic visit within 7 days reduces 30-day readmissions.",
    "necessaryInference": "Identify core evidence-based components of transitional care interventions that reduce 30-day hospital readmission.",
    "strongestDistractor": "Scheduling an outpatient routine cardiology clinic appointment 60 days following hospital discharge",
    "distractorExclusion": "The highest-risk period is days 1–14; a 60-day follow-up fails to intercept early decompensations.",
    "citation": "Naylor MD, et al. Comprehensive discharge planning and home follow-up of hospitalized elders: a randomized clinical trial. JAMA. 1999;281(7):613-620. doi:10.1001/jama.281.7.613"
  },
  {
    "code": "op-c-s3-0399",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Quality Screening Rejection Test Item",
    "subtopic": "Planted Rejection Example for Quality Assurance",
    "provisionalDifficulty": 1,
    "stem": "A 45-year-old man who is clinically diagnosed with brain death following severe traumatic brain injury is in the intensive care unit. His brain death evaluation is fully documented and signed by two attending physicians. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Notify the regional organ procurement organization (OPO) prior to any withdrawal of physiological support",
        "By federal mandate and hospital regulations, the regional organ procurement organization must be contacted following brain death declaration."
      ],
      [
        "Perform an emergency orthotopic liver transplantation on this patient immediately",
        "This is an absurd distractor; the patient is deceased and a candidate for organ donation, not a recipient."
      ],
      [
        "Prescribe oral amoxicillin for 10 days to treat presumed acute sinusitis",
        "This is an absurd distractor unrelated to the clinical scenario."
      ],
      [
        "Schedule an outpatient physical therapy appointment in 6 weeks",
        "This is an absurd non-sequitur distractor for a deceased patient."
      ],
      [
        "Order a repeat complete blood count and serum electrolytes in 3 months",
        "This is an absurd non-sequitur distractor."
      ]
    ],
    "shortestValidSolution": "Stem directly reveals brain death diagnosis and distractors are absurd non-sequiturs; planted rejection item.",
    "necessaryInference": "Planted quality screening failure demonstration.",
    "strongestDistractor": "Perform an emergency orthotopic liver transplantation on this patient immediately",
    "distractorExclusion": "Absurd non-sequitur distractor lacking clinical parallelism.",
    "citation": "Greer DM, et al. Practice guideline update: Determining brain death in adults. Neurology. 2010;74(23):1911-1918. doi:10.1212/WNL.0b013e3181e242a8",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Planted rejection test: stem directly hands the clinical diagnosis (brain death) to the learner without requiring inference.",
      "distractorExclusionNotes": "Distractors are absurd non-sequiturs (liver transplant, oral amoxicillin, physical therapy) violating parallelism and difficulty standards.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "REJECT",
      "rejectionNotes": "Planted rejection example for quality screening: stem directly reveals clinical diagnosis (brain death) and distractors are absurd non-sequiturs lacking clinical parallelism."
    },
    "reviewStatus": "REJECTED",
    "rejectionReason": "Planted rejection example for quality screening: stem directly reveals clinical diagnosis (brain death) and distractors are absurd non-sequiturs lacking clinical parallelism."
  },
  {
    "code": "op-c-s3-0400",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Clinical Uncertainty & Guideline Controversy",
    "subtopic": "Blood Pressure Targets in Frail Institutionalized Elderly",
    "provisionalDifficulty": 5,
    "stem": "An 85-year-old woman residing in a long-term care nursing facility is evaluated during routine monthly medical director rounds. She has a history of moderate vascular dementia, severe osteoporosis with a prior non-vertebral femoral neck fracture 8 months ago, urinary urge incontinence, and primary hypertension. She ambulates slowly with a rolling walker and requires assistance with bathing and dressing. Over the past 2 months, she has had two witnessed unwitnessed slip-and-fall episodes without acute fractures. Her current medications are amlodipine 5 mg daily and donepezil 10 mg daily. In the nursing facility, her seated blood pressure averages 136/78 mm Hg, and her standing blood pressure after 3 minutes is 122/68 mm Hg with transient lightheadedness. A newly appointed clinical pharmacist cites the 2017 ACC/AHA Hypertension Guidelines and recommends adding low-dose chlorthalidone or lisinopril to achieve an intensive systolic blood pressure target of <120 mm Hg, citing cardiovascular event reduction data from the SPRINT trial. Conversely, the facility geriatrician recommends maintaining her current regimen without intensification, citing the American Geriatrics Society (AGS) and European consensus guidelines that recommend a systolic target of 130–140 mm Hg in frail institutionalized older adults with documented orthostatic instability to prevent falls and syncopal fractures. Which of the following best reflects the clinical and guideline consensus regarding systolic blood pressure targets in this specific patient population?",
    "choices": [
      [
        "Clinical guidelines remain conflicting and unresolved regarding optimal blood pressure targets in frail, institutionalized older adults with orthostatic symptoms, because major intensive trials (such as SPRINT) excluded nursing home residents and patients with dementia",
        "The optimal blood pressure target in frail, institutionalized elderly patients with high fall risk and cognitive impairment represents a classic unresolved clinical and guideline controversy. While the 2017 ACC/AHA guideline recommends a uniform target of <130/80 mm Hg (or <120 mm Hg in high-risk patients based on SPRINT) for non-institutionalized ambulatory adults, the SPRINT trial explicitly excluded nursing home residents, patients with standing orthostatic hypotension (SBP < 110 mm Hg), and patients with dementia. Multiple geriatric expert consensus bodies (including the American Geriatrics Society and European Society of Cardiology/Hypertension) emphasize that in frail older adults with orthostasis and frequent falls, aggressive blood pressure lowering increases the risk of syncope, injurious falls, acute kidney injury, and electrolyte disturbances without proven survival benefit. Because definitive randomized trial evidence is lacking in this population, clinical practice remains divided between aggressive cardiovascular risk reduction and conservative harm minimization."
      ],
      [
        "All clinical guidelines unanimously mandate lowering systolic blood pressure to <120 mm Hg in all adults over age 80 regardless of frailty or falls",
        "Guidelines do not unanimously mandate intensive targets; geriatric societies specifically caution against <120 mm Hg targets in frail institutionalized individuals."
      ],
      [
        "Antihypertensive therapy should be immediately discontinued in all patients with any degree of cognitive impairment",
        "Abrupt cessation of all antihypertensive medications is inappropriate and increases the risk of stroke and rebound hypertension; individualized therapy is required."
      ],
      [
        "Blood pressure control has no proven clinical benefit on cardiovascular mortality in individuals over age 75",
        "Trials like HYVET demonstrated clear reductions in stroke and heart failure with treatment of hypertension in adults ≥80, but targeting <120 in frail patients remains controversial."
      ],
      [
        "Orthostatic hypotension is an absolute contraindication to the use of any calcium channel blockers in nursing home residents",
        "Amlodipine is not absolutely contraindicated in orthostasis, although vasodilators and diuretics must be monitored with caution."
      ]
    ],
    "shortestValidSolution": "Conflicting guideline recommendations (ACC/AHA <120-130 vs AGS 130-140 in frail elderly) due to exclusion of nursing home/dementia patients from SPRINT.",
    "necessaryInference": "Identify unresolved clinical controversy between intensive vs conservative BP targets in frail nursing home residents.",
    "strongestDistractor": "All clinical guidelines unanimously mandate lowering systolic blood pressure to <120 mm Hg in all adults over age 80 regardless of frailty or falls",
    "distractorExclusion": "Geriatric consensus guidelines explicitly recommend higher targets (130–140 mmHg) to prevent orthostatic syncope and falls.",
    "citation": "Williamson JD, et al. SPRINT Research Group. Intensive vs Standard Blood Pressure Control and Cardiovascular Disease Outcomes in Adults Aged ≥75 Years: A Randomized Clinical Trial. JAMA. 2016;315(24):2673-2682. doi:10.1001/jama.2016.7050",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item addresses genuine clinical uncertainty: optimal BP targets in frail nursing home residents with orthostatic hypotension and fall history.",
      "distractorExclusionNotes": "Distractors represent dogmatic extremes unsupported by conflicting geriatric vs cardiovascular guidelines.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Clinical and guideline controversy unresolved: optimal systolic blood pressure targets in frail elderly institutionalized adults with high fall risk remain conflicting between intensive ACC/AHA guidelines (<120 mmHg) and AGS/geriatric consensus (<140 mmHg)."
    },
    "reviewStatus": "UNRESOLVED",
    "rejectionReason": "Clinical and guideline controversy unresolved: optimal systolic blood pressure targets in frail elderly institutionalized adults with high fall risk remain conflicting between intensive ACC/AHA guidelines (<120 mmHg) and AGS/geriatric consensus (<140 mmHg)."
  }
]
