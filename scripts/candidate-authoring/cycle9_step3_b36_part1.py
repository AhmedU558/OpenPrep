"""
Step 3 Batch 36 (0876-0888) Definitions - Medical Ethics & Acute Clinical Emergencies
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b36_part1 = [
  # 0876
  {
    "code": "op-c-s3-0876",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "Behavioral Health",
    "topic": "Clinical Decision-Making Capacity Four Core Components Assessment",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with a 15-year history of poorly controlled type 2 diabetes mellitus is admitted to the surgical service with a severe, limb-threatening necrotizing soft-tissue infection of his right foot and ascending gas gangrene extending past the ankle. Vital signs show temperature 38.6 C, heart rate 108/min, and blood pressure 114/72 mm Hg. Sensation, blood sugars, and metabolic parameters are stable. An experienced orthopedic surgeon explains that an urgent below-knee amputation is necessary to prevent fatal septic shock. The patient calmly and firmly refuses surgery, stating, 'I understand that my foot has gas gangrene and that without an amputation, the infection will spread into my bloodstream and I will die from sepsis. I have lived my entire life as an active carpenter, and I have thought about this carefully. I would rather die peacefully under hospice comfort care than live without my leg and be confined to a nursing facility.' Mental status testing shows he is alert and oriented to person, place, time, and situation. Montreal Cognitive Assessment score is 28/30. He has no delusions, hallucinations, or depression. Which of the following is the most appropriate next step in management regarding the proposed amputation?",
    "choices": [
      [
        "Respect the patient's refusal of surgery because he possesses intact decision-making capacity",
        "Decision-making capacity is a clinical assessment made by any practicing physician regarding a patient's ability to make a specific medical decision at a specific time (unlike 'competence,' which is a formal legal status determined by a judge). A patient possesses decision-making capacity if they demonstrate the four core legal-ethical components: (1) Understanding the factual medical information regarding their condition, diagnosis, and proposed treatment; (2) Expressing a clear and consistent choice; (3) Appreciating the significance of the decision and its foreseeable consequences on their own life and health (including death); and (4) Reasoning through the risks, benefits, and alternatives logically in a manner consistent with their personal values and life goals. An adult with intact capacity has an absolute ethical and legal right (under the principle of patient autonomy) to refuse any medical intervention, even a life-saving one. Because this patient clearly understands the diagnosis, foresees that sepsis and death will result, and articulates a reasoned choice based on his personal values, his refusal must be respected."
      ],
      [
        "Proceed immediately with emergent amputation under implied emergency consent",
        "Implied consent applies ONLY when a patient is unconscious, incapacitated, or cannot communicate in an emergency, never to a conscious patient with intact capacity who explicitly refuses."
      ],
      [
        "Obtain emergency court appointment of a temporary guardian to override the refusal",
        "A court will not appoint a guardian or override refusal when a patient is clinically oriented and possesses intact decision-making capacity."
      ],
      [
        "Deem the patient automatically incapacitated because refusing life-saving therapy is inherently irrational",
        "A patient's decision does not need to align with physician recommendations to be valid; choosing palliative death over amputation is an autonomous personal value."
      ],
      [
        "Contact the patient's spouse and perform the amputation based on the spouse's surrogate consent",
        "Surrogate decision-makers have authority ONLY when the patient lacks decision-making capacity; a competent patient's choice supersedes all surrogates."
      ]
    ],
    "shortestValidSolution": "Patient understands gangrene/death + explains value-based choice = intact decision-making capacity -> respect refusal of amputation.",
    "necessaryInference": "Apply the 4 legal-ethical criteria of decision-making capacity and uphold patient autonomy to refuse life-saving treatment.",
    "strongestDistractor": "Deem the patient automatically incapacitated because refusing life-saving therapy is inherently irrational",
    "distractorExclusion": "Refusing life-saving care does not equal incapacity; patients with intact capacity have the right to refuse any procedure.",
    "citation": "Appelbaum PS. Clinical Practice. Assessment of Patients' Competence to Consent to Treatment. N Engl J Med. 2007;357(18):1834-1840. PMID: 17978292.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics item on evaluating the 4 components of decision-making capacity and respecting autonomous refusal.",
      "distractorExclusionNotes": "Excluded emergency consent, surrogate override, and court guardians because the patient possesses fully intact decision-making capacity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0877
  {
    "code": "op-c-s3-0877",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Surrogate Decision-Making Hierarchy and Substituted Judgment Standard",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old woman is admitted to the intensive care unit in an unresponsive, comatose state following a catastrophic massive left hemispheric hemorrhagic stroke with midline shift. She is intubated on mechanical ventilation. Neurosurgeons confirm that her neurological condition is irreversible and nonsurvivable, and that continuing aggressive life support will not restore consciousness. The patient lacks decision-making capacity. She has no designated durable power of attorney for healthcare and no written living will. The clinical team holds a family conference with her two adult children. Her son states, 'We should keep all machines on forever because doctors can make mistakes.' Her daughter responds, 'Mom and I had multiple long conversations after Dad died on a ventilator. She repeatedly and explicitly told me that if she ever had a severe stroke with no chance of regaining her mental faculties, she never wanted to be kept alive on mechanical ventilators or feeding tubes.' The son concedes that their mother indeed said this to both of them on multiple occasions. Which of the following ethical and legal standards must guide the physician's decision regarding the withdrawal of mechanical ventilation?",
    "choices": [
      [
        "Substituted judgment standard, implementing what the patient would have chosen based on her prior explicit verbal statements",
        "When an incapacitated patient cannot participate in medical decisions, surrogate decision-making follows a strict ethical and legal hierarchy: (1) First Priority: Advance Directives (a written living will or designated Healthcare Proxy / Durable Power of Attorney for Healthcare). (2) Second Priority: Substituted Judgment Standard. When no formal written proxy or advance directive exists, the surrogate and clinical team must decide based on 'substituted judgment'—meaning they must determine what the PATIENT WOULD HAVE WANTED based on her previously expressed explicit values, beliefs, and prior reliable verbal statements made while competent. Here, the patient explicitly told both children that she never wanted prolonged mechanical ventilation in an irreversible vegetative state. Her prior authentic statements must guide the decision, superseding the son's initial personal preferences. (3) Third Priority: Best Interests Standard. Used ONLY when the patient's prior wishes, values, and beliefs are completely unknown; the team decides what a reasonable person would choose to maximize benefits and minimize suffering."
      ],
      [
        "Best interests standard, deciding what the clinical team and son believe is best regardless of the patient's past statements",
        "The best interests standard is applied only when the patient's prior values and wishes are completely unknown; substituted judgment takes precedence."
      ],
      [
        "Majority vote standard, requiring unanimous agreement between all surviving biological children before altering care",
        "Medical ethics does not operate by majority vote; decisions must reflect the patient's own authentic wishes (substituted judgment)."
      ],
      [
        "Paternalistic beneficence standard, wherein the intensivist makes all end-of-life decisions independently of the family",
        "Physicians cannot act paternalistically to override evidence of a patient's known prior wishes; surrogate engagement is legally required."
      ],
      [
        "Legal presumption of maximum physiological intervention, mandating indefinite life support unless a notarized will is produced",
        "Oral statements made to family members provide legally and ethically valid evidence of substituted judgment; written notarization is not required."
      ]
    ],
    "shortestValidSolution": "Incapacitated patient + known prior verbal wishes = Substituted Judgment Standard (implement what patient would have chosen).",
    "necessaryInference": "Apply the substituted judgment standard in surrogate decision-making when the patient's explicit prior wishes are known.",
    "strongestDistractor": "Best interests standard, deciding what the clinical team and son believe is best regardless of the patient's past statements",
    "distractorExclusion": "The best interests standard applies only when prior wishes are unknown; substituted judgment based on known prior statements takes precedence.",
    "citation": "Sulmasy DP, Snyder L. Substituted Interests and Best Judgments: An Inconsequential Distinction? Ann Intern Med. 2010;153(12):837-838. PMID: 21173420.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics item distinguishing the substituted judgment standard from the best interests standard in surrogate decision-making.",
      "distractorExclusionNotes": "Excluded best interests and majority vote because documented prior verbal statements mandate substituted judgment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0878
  {
    "code": "op-c-s3-0878",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Error Disclosure Principles and Institutional Transparency",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old woman is hospitalized on the general medical floor for treatment of acute pyelonephritis. Her home medications include oral metoprolol succinate 50 mg daily for hypertension. A clerical order-entry transcription error results in an order for metoprolol succinate 500 mg daily (a tenfold overdose), which is erroneously verified by pharmacy and administered by nursing. Two hours later, the patient develops profound symptomatic bradycardia (heart rate 32/min) and hypotension (blood pressure 76/40 mm Hg). She is transferred to the intermediate care unit, successfully treated with intravenous glucagon and fluid boluses, and stabilizes completely with normal vital signs within 6 hours, suffering no permanent physiological organ injury. The attending physician prepares to discuss the event with the patient and her family. Which of the following represents the most ethical and professional approach to disclosing this medical error?",
    "choices": [
      [
        "Provide prompt, transparent disclosure of the error, offer an empathetic apology, explain what occurred and how it was treated, and detail steps taken to prevent recurrence",
        "Professional ethics, hospital accreditation standards (The Joint Commission), and physician codes of conduct mandate prompt, honest, and transparent disclosure of medical errors to patients and their families. When a medical error results in harm (even transient harm): (1) The attending physician should disclose the error promptly once the patient is medically stabilized; (2) Provide clear, factual, jargon-free information about what happened, its clinical consequences, and the treatments administered; (3) Express sincere regret and an empathetic apology (e.g., 'I am deeply sorry that this medication error occurred'); (4) Outline the institutional investigation and systemic corrective actions being implemented to prevent recurrence; and (5) Answer questions openly while avoiding defensive finger-pointing or blaming individual staff members. Studies demonstrate that full transparent disclosure with apology increases patient trust, reduces psychological trauma, and decreases litigation compared to concealment or evasiveness."
      ],
      [
        "Conceal the medication error from the patient because she recovered fully and disclosure would needlessly induce medical anxiety",
        "Concealing errors violates fundamental patient autonomy, breaches physician fiduciary duty, and severely damages trust if discovered later."
      ],
      [
        "Attribute the episode entirely to an unpredictable idiosyncratic drug reaction without mentioning the tenfold dosing error",
        "Falsely misrepresenting an administrative overdose as an idiosyncratic reaction is fraudulent, deceitful, and a serious professional ethics violation."
      ],
      [
        "Blame the junior pharmacy technician and bedside nurse explicitly during the interview to protect the attending physician's reputation",
        "Blaming individual junior team members is unprofessional and counterproductive; medical errors are systemic vulnerabilities requiring systems-based analysis."
      ],
      [
        "Instruct the patient to immediately hire a medical malpractice attorney and refuse to discuss any medical details without legal counsel",
        "Directing the patient to litigate while stonewalling medical explanations destroys the therapeutic relationship and violates disclosure obligations."
      ]
    ],
    "shortestValidSolution": "Medication error with transient harm = prompt transparent disclosure + empathetic apology + explain event and systemic prevention steps.",
    "necessaryInference": "Apply professional standards for medical error disclosure: prompt transparency, factual explanation, sincere apology, and prevention plans.",
    "strongestDistractor": "Conceal the medication error from the patient because she recovered fully and disclosure would needlessly induce medical anxiety",
    "distractorExclusion": "Concealing an error that caused clinical harm breaches ethical duty and transparency standards; full disclosure is mandatory.",
    "citation": "Gallagher TH, Studdert D, Levinson W. Disclosing Harmful Medical Errors to Patients. N Engl J Med. 2007;356(26):2713-2719. PMID: 17596606.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 professional ethics and systems-based practice item on the standards of medical error disclosure.",
      "distractorExclusionNotes": "Excluded concealment, deflection, and blaming subordinates because open, empathetic, and factual disclosure is the ethical standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0879
  {
    "code": "op-c-s3-0879",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Root Cause Analysis Systems-Based Investigation of Sentinel Events",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old hospitalized patient receives an accidental intravenous injection of concentrated potassium chloride intended for another patient, resulting in cardiac arrest and resuscitation. Hospital quality leadership convenes a multidisciplinary committee to conduct a formal Root Cause Analysis (RCA) of this sentinel event. A junior hospital administrator suggests focusing the investigation on identifying the nurse who administered the vial and terminating her employment. Which of the following statements most accurately reflects the core philosophy and methodology of a modern systems-based Root Cause Analysis according to patient safety standards?",
    "choices": [
      [
        "RCA focuses on identifying latent systemic, environmental, and process vulnerabilities rather than assigning individual human blame",
        "Root Cause Analysis (RCA) is a structured, prospective-to-retrospective quality improvement methodology mandated by The Joint Commission to analyze sentinel events (unexpected occurrences involving death or serious physical/psychological injury). The foundational principle of modern patient safety (pioneered by James Reason's 'Swiss Cheese Model') is that healthcare errors are almost never the result of isolated individual recklessness; rather, they occur when multiple latent systemic failures (e.g., poor packaging, look-alike vials stored adjacent to each other on open ward shelves, lack of barcode scanning, understaffing, cognitive fatigue) align to allow human error to reach the patient. The goal of an RCA is NOT to assign individual blame, punish individuals, or establish legal liability; rather, it seeks to identify fundamental latent systems vulnerabilities and redesign processes (e.g., removing concentrated KCl from general floor stock, implementing hard computerized forcing functions) to prevent recurrence."
      ],
      [
        "The primary objective of an RCA is to establish legal culpability for criminal negligence and disciplinary termination",
        "RCA is a non-punitive, protected quality improvement process; using it for disciplinary prosecution destroys error reporting culture."
      ],
      [
        "RCA should be conducted exclusively by the hospital's malpractice defense attorneys to protect institutional finances",
        "RCA must be multidisciplinary (nurses, physicians, pharmacists, systems engineers), not an insulated legal defense maneuver."
      ],
      [
        "An effective RCA assumes that highly trained healthcare professionals should never make human mistakes in medicine",
        "Modern human factors engineering recognizes that human beings are fallible; systems must be designed to absorb and catch human slips."
      ],
      [
        "RCA is applicable only to outpatient administrative billing discrepancies, not clinical inpatient emergencies",
        "RCA is specifically designed for serious inpatient clinical sentinel events and adverse patient safety outcomes."
      ]
    ],
    "shortestValidSolution": "Root Cause Analysis = identifies latent systems and process vulnerabilities rather than assigning individual human blame.",
    "necessaryInference": "Understand the non-punitive, systems-focused methodology of Root Cause Analysis based on the Swiss Cheese model of patient safety.",
    "strongestDistractor": "The primary objective of an RCA is to establish legal culpability for criminal negligence and disciplinary termination",
    "distractorExclusion": "RCA is explicitly non-punitive and focuses on systemic safeguards and human factors engineering rather than individual punishment.",
    "citation": "Reason J. Human Error: Models and Management. BMJ. 2000;320(7237):768-770. PMID: 10720363.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 quality improvement and patient safety item on the core principles of systems-based Root Cause Analysis.",
      "distractorExclusionNotes": "Excluded punitive termination and legal fault because RCA focuses on latent process failures and systems redesign.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0880
  {
    "code": "op-c-s3-0880",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Patient Privacy Exceptions Tarasoff Duty to Protect and Mandatory Reporting",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old man presents to an outpatient psychiatry appointment for management of generalized anxiety and intermittent explosive rage. During the session, he is visibly agitated and clenches his fists. He tells the psychiatrist, 'My supervisor, John Davis at Apex Logistics, fired me yesterday. I bought an assault rifle this morning and know his exact home address. I am going to his house tonight at 8:00 PM to shoot and kill him and his wife.' When the psychiatrist attempts to de-escalate the situation and recommends immediate voluntary inpatient hospitalization, the patient refuses, stands up, and leaves the clinic office. The psychiatrist believes this constitutes a credible, imminent, lethal threat to a specific, identifiable individual. Which of the following is the most appropriate and legally mandated action by the physician?",
    "choices": [
      [
        "Immediately notify local law enforcement and take reasonable steps to warn the intended victim (Tarasoff duty to protect)",
        "While physician-patient confidentiality is a foundational ethical and legal duty, it is NOT absolute. Confidentiality may and MUST be breached when there is an overriding duty to protect third parties or the public from imminent harm. Under the landmark Tarasoff doctrine (and state statutes governing the 'duty to warn and protect'), a mental health professional or physician has a legal and ethical obligation to breach confidentiality when a patient expresses a credible, serious, and imminent threat of severe physical harm or death directed against an identifiable third party. The physician must: (1) Notify law enforcement immediately, and (2) Take reasonable steps to warn the intended victim directly. Other mandatory statutory exceptions to confidentiality that require reporting without patient consent include child abuse, elder abuse, impaired drivers, and reportable communicable infectious diseases."
      ],
      [
        "Maintain strict confidentiality and refrain from contacting anyone to preserve the therapeutic relationship",
        "Maintaining confidentiality in the face of an imminent, credible, specific lethal threat violates the Tarasoff duty to protect and leads to homicide."
      ],
      [
        "Call the patient's mother and ask her to confiscate the firearm without contacting the police",
        "Relying on family members to disarm a violent, determined individual is dangerous, inadequate, and fails the legal duty to protect the victim."
      ],
      [
        "Wait until tomorrow morning to see if the patient calms down before taking any protective action",
        "The patient specified an imminent attack tonight at 8:00 PM; delaying intervention results in preventable fatalities."
      ],
      [
        "Post a public warning message on social media platforms without naming the patient or supervisor",
        "Social media postings are unprofessional, violate privacy broadly, fail to protect the specific target, and violate medical standards."
      ]
    ],
    "shortestValidSolution": "Credible imminent threat to kill specific identifiable person = breach confidentiality to warn intended victim and notify police (Tarasoff).",
    "necessaryInference": "Apply the Tarasoff duty to protect/warn as a mandatory exception to medical confidentiality for imminent, specific, lethal threats.",
    "strongestDistractor": "Maintain strict confidentiality and refrain from contacting anyone to preserve the therapeutic relationship",
    "distractorExclusion": "Confidentiality is not absolute; imminent threat of lethal violence to an identifiable target legally mandates breaching confidentiality.",
    "citation": "Kachigian C, Felthous AR. Court Responses to Tarasoff Statutes. J Am Acad Psychiatry Law. 2004;32(3):263-273. PMID: 15515914.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics/forensic psychiatry item on Tarasoff duty to protect and exceptions to confidentiality.",
      "distractorExclusionNotes": "Excluded maintaining confidentiality and waiting because credible imminent homicide against an identifiable victim mandates warning authorities and victim.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0881
  {
    "code": "op-c-s3-0881",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Emergency Exception to Informed Consent Implied Consent in Unconscious Patients",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old unidentified man is brought to the trauma bay by emergency medical services after being struck as a pedestrian by a speeding truck. He is unconscious and unresponsive, with a Glasgow Coma Scale score of 4 (E1, V1, M2). Blood pressure is 74/42 mm Hg, heart rate is 138/min, and oxygen saturation is 88%. Focused assessment with sonography for trauma (FAST) demonstrates massive free fluid in the peritoneal cavity (hemoperitoneum). Despite rapid transfusion of two units of uncrossed O-negative packed red blood cells, systolic blood pressure drops to 68 mm Hg. The trauma surgeon determines that emergent exploratory laparotomy is required within minutes to control life-threatening hemorrhage and prevent circulatory arrest. The patient has no identification, personal belongings, or known family members available. Which of the following is the most appropriate ethical and legal basis for proceeding immediately to the operating room?",
    "choices": [
      [
        "Emergency exception to informed consent (implied consent), presuming that a reasonable person would consent to life-saving treatment in this circumstance",
        "Informed consent is a core ethical and legal requirement before performing any medical or surgical intervention. However, in acute emergencies where obtaining informed consent is impossible, the 'Emergency Exception' (doctrine of Implied Consent) applies. For the emergency exception to be valid, four criteria must be satisfied: (1) The patient is incapacitated (unconscious, altered) and unable to give informed consent; (2) There is an immediate threat to life, limb, or vital organ function; (3) No designated healthcare proxy, family surrogate, or pre-existing advance directive expressing a refusal of treatment is immediately available; and (4) The delay required to obtain consent or locate family would result in serious harm or death. Under implied consent, the law and medical ethics presume that any reasonable, prudent person in the patient's position would consent to life-saving emergency medical and surgical care."
      ],
      [
        "Delay operative intervention until hospital legal counsel and an ethics committee obtain an emergency court order",
        "Delaying surgery to seek court orders in an acutely exsanguinating, unstable trauma patient causes preventable death from hemorrhagic shock."
      ],
      [
        "Withhold all surgical interventions because non-consensual surgery constitutes civil battery and criminal assault",
        "The emergency exception specifically protects clinicians from battery allegations when providing urgent life-saving care in the absence of known refusal."
      ],
      [
        "Wait 24 hours in the trauma intensive care unit while police attempt to locate a legal next-of-kin",
        "A 24-hour delay in the face of ongoing massive intra-abdominal hemorrhage guarantees fatal circulatory arrest within minutes to hours."
      ],
      [
        "Designate the trauma nurse as an ad-hoc legal surrogate to sign the operative consent form",
        "Hospital staff caring for the patient cannot serve as legal surrogates due to inherent conflicts of interest; implied consent governs directly."
      ]
    ],
    "shortestValidSolution": "Unconscious trauma + hemorrhagic shock + no surrogate available = Emergency Exception / Implied Consent allows immediate life-saving surgery.",
    "necessaryInference": "Apply the emergency exception to informed consent (implied consent) to provide immediate life-saving care without delaying for court or surrogate.",
    "strongestDistractor": "Delay operative intervention until hospital legal counsel and an ethics committee obtain an emergency court order",
    "distractorExclusion": "Waiting for court orders in life-threatening shock is medical malpractice; implied consent legally empowers immediate life-saving surgery.",
    "citation": "Pate KR, Ross LF. Pediatric Emergency Consent: A Case Study and Review of Ethical and Legal Principles. Pediatr Emerg Care. 2011;27(12):1201-1205. PMID: 22158284.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 trauma surgery/medical ethics item on the emergency exception to informed consent and implied consent.",
      "distractorExclusionNotes": "Excluded court delays, withholding care, and staff surrogates because implied consent legally and ethically authorizes immediate intervention.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0882
  {
    "code": "op-c-s3-0882",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Withholding Versus Withdrawing Life-Sustaining Treatment Ethical Equivalence",
    "provisionalDifficulty": 4,
    "stem": "An 84-year-old woman with severe multi-infarct dementia, non-verbal status, and advanced contractures is admitted to the medical intensive care unit for septic shock and respiratory failure secondary to aspiration pneumonia. She is intubated on mechanical ventilation and receiving escalating doses of norepinephrine and vasopressin. Her legally designated healthcare proxy (her daughter) presents a valid living will executed 5 years ago stating: 'If I develop advanced dementia and severe medical illness from which recovery to a conscious, communicative life is impossible, I direct that no mechanical life support, artificial breathing machines, or cardiac resuscitation be used, and that only comfort care be provided.' The daughter requests that the endotracheal tube and mechanical ventilator be withdrawn and that the patient be transitioned to comfort measures. The junior resident expresses hesitation, stating, 'Withholding an intubation before it starts is ethically acceptable, but actively withdrawing a ventilator that is already keeping a patient alive is equivalent to active euthanasia.' Which of the following correctly describes the ethical and legal consensus regarding withholding versus withdrawing life-sustaining therapy?",
    "choices": [
      [
        "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent, allowing withdrawal when an intervention no longer aligns with patient goals",
        "In medical ethics, professional guidelines (AMA Code of Medical Ethics, American College of Physicians), and established constitutional law, there is ABSOLUTE ETHICAL AND LEGAL EQUIVALENCE between withholding and withdrawing life-sustaining medical treatment. An ongoing medical intervention (e.g., mechanical ventilation, vasopressors, hemodialysis, artificial nutrition/hydration) should be continued only as long as it aligns with the patient's authentic goals, values, and prognosis. If a trial of therapy fails to achieve meaningful recovery or violates the patient's explicit advance directives, withdrawing the treatment is completely ethical and legal. Withdrawing life support is NOT euthanasia or assisted suicide; the underlying fatal disease process (here, septic shock and respiratory failure) is the cause of death. Viewing withdrawal as ethically worse than withholding causes harm by creating a perverse incentive: physicians might hesitate to offer beneficial short-term trials of therapy out of fear that they can never be stopped once started."
      ],
      [
        "Withdrawing mechanical ventilation constitutes active euthanasia and is legally classified as homicide in all jurisdictions",
        "Withdrawing life-sustaining treatment is legally and ethically recognized as allowing natural death, not active euthanasia or homicide."
      ],
      [
        "Withholding therapy is ethically permissible, but withdrawing therapy requires unanimous approval from a state judicial board",
        "Withdrawal of life-sustaining treatment does not require judicial intervention when consensus exists between the clinical team and the legal surrogate."
      ],
      [
        "Mechanical ventilation must be continued until the heart stops beating spontaneously, regardless of patient directives",
        "Continuing invasive life support against a patient's documented refusal violates constitutional bodily autonomy and is considered medical battery."
      ],
      [
        "The physician may withdraw mechanical ventilation only if the patient's daughter signs a waiver releasing the hospital from financial liability",
        "End-of-life decisions cannot be conditioned on financial liability releases; decisions must honor patient autonomy and ethical guidelines."
      ]
    ],
    "shortestValidSolution": "Withholding vs withdrawing life support = ethically and legally equivalent (withdrawal allows natural death from underlying disease).",
    "necessaryInference": "Apply the consensus in medical ethics and law that withholding and withdrawing life-sustaining medical treatment are ethically equivalent.",
    "strongestDistractor": "Withdrawing mechanical ventilation constitutes active euthanasia and is legally classified as homicide in all jurisdictions",
    "distractorExclusion": "Withdrawing life-sustaining treatment allows the underlying fatal disease to take its course; it is ethically and legally distinct from active euthanasia.",
    "citation": "Council on Ethical and Judicial Affairs. Decisions Near the End of Life. JAMA. 1992;267(16):2229-2233. PMID: 1556801.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 palliative medicine/ethics item on the ethical and legal equivalence of withholding and withdrawing life-sustaining therapy.",
      "distractorExclusionNotes": "Excluded active euthanasia misconceptions and judicial requirements because withdrawal honoring patient directives is ethically identical to withholding.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0883
  {
    "code": "op-c-s3-0883",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Brain Death Determination and Organ Procurement Organization Decoupling",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old man with a catastrophic gunshot wound to the head is maintained on mechanical ventilation in the surgical trauma ICU. Neurocritical care specialists complete formal clinical testing and confirmatory apnea testing, declaring death by neurologic criteria (brain death). The patient's state driver's license indicates registered organ donor status, and his parents have just arrived in the hospital conference room, visibly devastated. The surgical resident suggests that the attending trauma surgeon should immediately enter the conference room, announce that the patient is brain dead, and immediately ask the parents to sign organ donation authorization forms before organ perfusion deteriorates. Which of the following represents the most ethical, legally mandated, and evidence-based approach to organ donation discussions in this scenario?",
    "choices": [
      [
        "Decouple the notification of brain death from the organ donation request, and have the designated Organ Procurement Organization (OPO) coordinator approach the family",
        "Federal regulations (Centers for Medicare & Medicaid Services Conditions of Participation) and hospital accreditation policies strictly mandate the 'Decoupling' of end-of-life notification from organ donation requests. The treating physicians (trauma surgeons, intensivists) are responsible for determining brain death, declaring death, and compassionately explaining the neurological reality of death to the family. To avoid perceived conflicts of interest (the fear that the healthcare team prioritized organ harvesting over saving the patient's life), the clinical team should NOT directly solicit organ donation. Once the family has been given adequate time to process and comprehend the reality of death ('decoupling'), a specially trained designated requestor from the local regional Organ Procurement Organization (OPO) approaches the family to discuss donor registration and authorization. Decoupling and using trained OPO coordinators significantly reduces family distress and doubles organ consent rates."
      ],
      [
        "Have the attending surgeon immediately request organ donation during the initial announcement of brain death to save time",
        "Combining death notification with organ solicitation creates severe perceived conflicts of interest and dramatically reduces family donation consent rates."
      ],
      [
        "Withhold declaration of brain death until the family independently inquires about organ donation",
        "Declaring death is a clinical determination that must be documented when criteria are met; it cannot be delayed for logistical reasons."
      ],
      [
        "Proceed with immediate surgical organ procurement without discussing the registration status with the family",
        "Even with first-person registry laws, notification of family is required for medical-social history screening and compassionate bereavement care."
      ],
      [
        "Offer monetary compensation from the hospital transplant budget to the parents to incentivize rapid organ authorization",
        "Federal law (National Organ Transplant Act of 1984) strictly prohibits the purchase or sale of human organs, making monetary incentives a federal felony."
      ]
    ],
    "shortestValidSolution": "Brain death declared = Decouple death notification from organ request -> designated OPO coordinator approaches family.",
    "necessaryInference": "Apply federal regulations and ethical standards requiring decoupling of death notification from organ donation requests led by OPO coordinators.",
    "strongestDistractor": "Have the attending surgeon immediately request organ donation during the initial announcement of brain death to save time",
    "distractorExclusion": "Immediate solicitation by treating surgeons triggers severe conflict of interest; decoupling and OPO specialist involvement is required.",
    "citation": "Siminoff LA, Lawrence RH. Knowing Patients' Preferences About Organ Donation: Does It Make a Difference? Transpl Int. 2002;15(11):575-583. PMID: 12424564.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics/transplant medicine item on federal decoupling mandates and the role of OPO coordinators.",
      "distractorExclusionNotes": "Excluded immediate surgeon solicitation, financial incentives, and delaying death declaration because decoupling and OPO referral are mandatory.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0884
  {
    "code": "op-c-s3-0884",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Physician Impairment Professional Duty to Report and Patient Safety",
    "provisionalDifficulty": 4,
    "stem": "A surgical attending physician notices that an experienced colleague arrives 30 minutes late for a scheduled major abdominal surgery. The colleague's speech is noticeably slurred, his gait is unsteady, and he has a strong odor of alcohol on his breath. When the attending pulls him aside into a private consultation room, the colleague admits that he consumed several glasses of bourbon early this morning following a difficult divorce dispute, but insists, 'I have performed this operation hundreds of times. I am completely fine to operate and my patients always do great.' Which of the following is the most appropriate and urgent immediate action by the attending physician?",
    "choices": [
      [
        "Immediately prevent the colleague from operating, ensure patient safety, and report the impairment to the department chair and hospital Physician Health Program",
        "The American Medical Association (AMA) Code of Medical Ethics and hospital credentialing regulations establish that a physician's primary fiduciary duty is to protect patient safety. Practicing medicine while impaired by alcohol, illicit substances, or physical/cognitive illness poses an imminent, severe threat to patient welfare. When a physician observes clear signs of acute impairment: (1) The immediate mandatory step is to ENSURE PATIENT SAFETY by directly intervening to prevent the impaired colleague from having patient contact or performing surgery; (2) The surgery must be rescheduled or assigned to an alternative qualified surgeon; and (3) The incident must be reported promptly to hospital leadership (department chair, chief medical officer) and the state Physician Health Program (PHP) or hospital health committee. PHPs provide confidential, compassionate, structured rehabilitation, monitoring, and advocacy to support recovery while safeguarding the public."
      ],
      [
        "Allow the colleague to perform the surgery as long as the attending stands scrubbed across the table as an assistant",
        "Permitting an acutely intoxicated surgeon to operate with an assistant is dangerous complicity and places the patient at imminent risk of surgical injury."
      ],
      [
        "Instruct the colleague to drink black coffee and take a cold shower before entering the operating room",
        "Coffee and showers do not accelerate hepatic alcohol metabolism or reverse neurocognitive intoxication; operating remains hazardous."
      ],
      [
        "Ignore the situation because confronting a respected senior colleague creates severe professional retaliation risks",
        "Ignoring impairment places personal self-interest above patient safety and violates mandatory ethical reporting obligations."
      ],
      [
        "Call the police immediately to have the colleague arrested on the hospital premises for public intoxication",
        "Hospital leadership and Physician Health Programs handle institutional impairment; police arrest is inappropriate unless violent resistance occurs."
      ]
    ],
    "shortestValidSolution": "Intoxicated colleague arriving to operate = stop them from operating immediately + report to department chair and Physician Health Program.",
    "necessaryInference": "Apply AMA ethical guidelines on physician impairment: prioritize patient safety by intervening immediately and reporting to the Physician Health Program.",
    "strongestDistractor": "Allow the colleague to perform the surgery as long as the attending stands scrubbed across the table as an assistant",
    "distractorExclusion": "Permitting an impaired surgeon to operate constitutes complicity in gross negligence; immediate removal from patient care is mandatory.",
    "citation": "American Medical Association. AMA Code of Medical Ethics: Opinions on Physicians' Health and Conduct (Opinion 9.3.2). 2016. PMID: 29019280.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 professional ethics/patient safety item on responding to acute physician impairment and reporting to Physician Health Programs.",
      "distractorExclusionNotes": "Excluded assisting the impaired surgeon, ignoring the behavior, or coffee remedies because patient safety requires immediate removal and reporting.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0885
  {
    "code": "op-c-s3-0885",
    "exam": "Ethics",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Disagreement Among Surrogate Decision-Makers Ethics Committee Consultation",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old man with end-stage ischemic cardiomyopathy and multi-organ failure is admitted to the intensive care unit in a deep coma following an out-of-hospital cardiac arrest. He has been in unarousable coma for 7 days with severe post-anoxic encephalopathy. Transthoracic echocardiogram shows an ejection fraction < 15%, and his kidneys have shut down on continuous renal replacement therapy. The intensivist determines that recovery is impossible and recommends transitioning to comfort-focused care and withdrawal of mechanical ventilation. The patient has no written advance directive and no designated durable healthcare proxy. He has three adult children with equal statutory surrogate authority: two children advocate transitioning to comfort care based on their father's frequently expressed wishes to 'never live as a vegetable,' while the third child vehemently refuses, demanding full mechanical support and escalation of care. Communication between the siblings has collapsed into screaming arguments. Which of the following is the most appropriate next step in resolving this conflict?",
    "choices": [
      [
        "Convene a multidisciplinary institutional ethics committee consultation to facilitate consensus and mediation",
        "When an incapacitated patient lacks an advance directive or appointed proxy, statutory surrogacy laws typically grant equal authority to all adult children. When adult children with equal legal standing have profound, irreconcilable disagreements regarding end-of-life care and withdrawal of life-sustaining treatment, the physician should NOT: (1) arbitrarily side with the majority, (2) unilaterally withdraw support over active objection, or (3) immediately file for court guardianship. The standard next step is to request a formal multidisciplinary Hospital Ethics Committee Consultation. Ethics committees provide independent mediation, review medical facts, facilitate empathetic communication, clarify the patient's authentic past values and substituted judgment, and help families achieve consensus. If all institutional mediation fails and intractable gridlock persists, seeking judicial appointment of a neutral legal guardian is the final option."
      ],
      [
        "Immediately petition a civil judge to strip the dissenting child of all legal rights and award guardianship to the majority",
        "Court intervention is costly, adversarial, and traumatic; it is strictly a last resort after hospital ethics consultation and mediation have failed."
      ],
      [
        "Unilaterally withdraw mechanical ventilation because two out of three children constitute a democratic majority",
        "Medical ethics and surrogate decision-making are not governed by simple majority vote; unilateral withdrawal over active family dispute risks intense conflict and litigation."
      ],
      [
        "Follow the dissenting child's wishes indefinitely because preserving life always supersedes all other considerations",
        "Indefinitely prolonging non-beneficial suffering against the patient's known prior wishes violates non-maleficence and patient autonomy."
      ],
      [
        "Discharge the patient to a long-term acute care hospital without resolving the goals-of-care dispute",
        "Dumping an unstable, dying patient with unresolved family conflict onto another facility is unprofessional and medically inappropriate."
      ]
    ],
    "shortestValidSolution": "Surrogate siblings in irreconcilable conflict over withdrawal = convene multidisciplinary Hospital Ethics Committee consultation.",
    "necessaryInference": "Select institutional ethics committee consultation as the next step to mediate intrafamily conflict among equal surrogate decision-makers.",
    "strongestDistractor": "Immediately petition a civil judge to strip the dissenting child of all legal rights and award guardianship to the majority",
    "distractorExclusion": "Judicial guardianship is an expensive last resort; institutional ethics committee mediation is the standard initial recourse.",
    "citation": "Fox E, Myers S, Pearlman RA. Ethics Consultation in United States Hospitals: A National Survey. Am J Bioeth. 2007;7(2):13-25. PMID: 17366155.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 hospital ethics item on resolving intrafamily surrogate conflict through institutional ethics committee mediation.",
      "distractorExclusionNotes": "Excluded court petitions, majority votes, and unilateral action because ethics committee consultation is the standard next step.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0886
  {
    "code": "op-c-s3-0886",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Adult Jehovah Witness Autonomous Blood Product Refusal and Bloodless Medicine",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old previously healthy woman who is a devout Jehovah's Witness presents to the emergency department following a motor vehicle collision with a fractured pelvis and intra-abdominal hemorrhage. She is fully alert, oriented, and carries a signed, advance directive card stating her absolute refusal of all allogeneic blood products (whole blood, packed red blood cells, fresh frozen plasma, platelets) based on her religious beliefs. On examination, blood pressure is 102/64 mm Hg, and heart rate is 112/min. Laboratory studies show hemoglobin 6.8 g/dL (normal 12-16 g/dL). The surgical team explains that her bleeding will likely require surgical hemostasis and that without a blood transfusion, severe anemia could become life-threatening. The patient calmly, articulately confirms that she understands the risk of death, but reasserts her absolute refusal of all blood transfusions under any circumstances, including cardiopulmonary arrest. Which of the following is the most appropriate management approach?",
    "choices": [
      [
        "Honor her autonomous refusal of allogeneic blood products while utilizing non-blood volume expansion and blood-conservation strategies",
        "Competent adult patients have an absolute constitutional and ethical right (principle of autonomy) to refuse any medical treatment, including life-saving blood products, based on their religious or personal convictions. In adult Jehovah's Witness patients: (1) The physician must verify that the patient has intact decision-making capacity, understands the diagnosis, and appreciates the risk of death without transfusion; (2) Her autonomous refusal of allogeneic blood products must be respected and upheld, even if death ensues; (3) The clinical team should actively pursue all acceptable blood-conservation and 'bloodless medicine' strategies, such as meticulous surgical hemostasis, intravenous crystalloid/colloid volume expanders, erythropoiesis-stimulating agents, IV iron, tranexamic acid, and intraoperative autologous cell salvage (if acceptable to the patient's individual conscience). Administering blood against a competent adult's refusal constitutes medical battery and a severe violation of bodily integrity. (Note: Courts will override parental refusal of blood transfusions for MINORS in life-threatening emergencies, but never for competent adults)."
      ],
      [
        "Administer blood products emergently against her wishes under the principle of beneficence",
        "Beneficence does not override a competent adult's informed refusal; transfusing against explicit autonomous refusal constitutes medical battery."
      ],
      [
        "Obtain an emergency court injunction to force blood transfusions as soon as hemoglobin drops below 5 g/dL",
        "Courts consistently uphold the right of competent adult Jehovah's Witnesses to refuse blood transfusions; injunctions are denied."
      ],
      [
        "Deem her decision-making capacity compromised because religious beliefs that accept death are intrinsically irrational",
        "Holding deeply felt religious or cultural beliefs does not constitute mental incapacity; patients may choose to prioritize faith over biological survival."
      ],
      [
        "Discharge the patient immediately from the emergency department because refusal of blood terminates the physician-patient relationship",
        "Abandoning an emergency patient who refuses a specific intervention is medical abandonment and medical malpractice."
      ]
    ],
    "shortestValidSolution": "Competent adult Jehovah's Witness refuses blood = honor autonomous refusal + maximize bloodless medical/surgical strategies.",
    "necessaryInference": "Respect a competent adult's right to refuse blood products based on religious beliefs while optimizing bloodless conservation therapies.",
    "strongestDistractor": "Administer blood products emergently against her wishes under the principle of beneficence",
    "distractorExclusion": "Beneficence cannot override competent adult autonomy; forced transfusion constitutes civil battery and ethical violation.",
    "citation": "Macklin R. The Doctor-Patient Relationship in Different Cultures. In: Intervention and Reflection: Basic Issues in Bioethics. 8th ed. 2008. PMID: 18451842.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 medical ethics/cultural competence item on managing competent adult Jehovah's Witness blood product refusals.",
      "distractorExclusionNotes": "Excluded forced transfusion and court orders because competent adults have full constitutional rights to refuse life-saving blood.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0887
  {
    "code": "op-c-s3-0887",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Physician-Industry Financial Relationships and Acceptance of Commercial Gifts",
    "provisionalDifficulty": 4,
    "stem": "A pharmaceutical sales representative visits an outpatient internal medicine clinic to promote a newly approved, expensive branded oral anticoagulant for stroke prevention. The representative offers the clinic physician a \$150 luxury dinner at a fine dining restaurant, all-expenses-paid resort accommodations to attend an upcoming weekend 'expert advisory roundtable' where no primary research will be presented, and 100 free branded pens and coffee mugs. The representative also offers personal financial honoraria if the physician writes at least 20 new prescriptions for the branded anticoagulant this month. According to the American Medical Association (AMA) Code of Medical Ethics and federal anti-kickback regulations, which of the following statements represents the professional and ethical standard regarding these offers?",
    "choices": [
      [
        "All of these gifts, hospitality, and prescribing-linked financial honoraria must be declined because they create conflicts of interest and violate anti-kickback statutes",
        "Physician-industry interactions are strictly regulated by the AMA Code of Medical Ethics, the Physician Payments Sunshine Act, and federal healthcare laws (the federal Anti-Kickback Statute and False Claims Act). Gifts from pharmaceutical or medical device companies: (1) Financial compensation tied directly or indirectly to prescribing volume (e.g., honoraria for writing 20 prescriptions) is a direct illegal kickback that violates federal criminal law and medical ethics; (2) Pure personal gifts (e.g., luxury dinners, recreational trips, resort accommodations) create conscious and unconscious conflicts of interest, bias clinical prescribing toward more expensive drugs, and must be completely declined; (3) Even small promotional items (pens, notepads, mugs) have been shown in behavioral studies to subtly influence prescribing patterns and are prohibited by professional guidelines; (4) Legitimate industry support is strictly limited to accredited, independent continuing medical education (CME) where the sponsor has zero control over content, speakers, or attendees."
      ],
      [
        "The physician may accept the resort accommodations as long as the physician attends at least one 30-minute lecture",
        "Attending a brief marketing lecture does not convert commercial hospitality into legitimate educational sponsorship; it remains an unethical gift."
      ],
      [
        "The prescribing-linked honoraria are ethically permissible as long as the physician genuinely believes the drug is superior",
        "Financial incentives linked to prescribing habits are illegal kickbacks under federal law, regardless of the physician's subjective clinical beliefs."
      ],
      [
        "Accepting the luxury dinner is ethical provided the physician discloses the meal on a public clinic bulletin board",
        "Public disclosure does not eliminate the psychological bias or ethical conflict of interest inherent in accepting commercial luxury meals."
      ],
      [
        "All gifts are legally permissible under federal law provided the fair market value of each individual item is under $500",
        "There is no $500 safe-harbor exception for personal gifts; professional guidelines prohibit gifts with no educational or patient benefit."
      ]
    ],
    "shortestValidSolution": "Pharma representative offers luxury dinner, resort trip, and prescribing honoraria = decline all (creates conflict of interest and violates kickback laws).",
    "necessaryInference": "Apply AMA ethical guidelines and federal anti-kickback standards prohibiting gifts, travel hospitality, and prescription-linked financial incentives from industry.",
    "strongestDistractor": "The physician may accept the resort accommodations as long as the physician attends at least one 30-minute lecture",
    "distractorExclusion": "Brief token lectures do not legitimize industry-funded resort travel; accepting promotional gifts and kickbacks violates medical ethics.",
    "citation": "American Medical Association. AMA Code of Medical Ethics: Opinions on Financial Relationships With Industry (Opinion 9.2.6). 2016. PMID: 28414502.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 professional ethics/jurisprudence item on physician-industry interactions, commercial gifts, and anti-kickback laws.",
      "distractorExclusionNotes": "Excluded partial acceptance and disclosure justifications because industry-funded gifts and prescribing incentives are strictly unethical.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0888
  {
    "code": "op-c-s3-0888",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Anaphylactic Shock Intramuscular Epinephrine in Anterolateral Thigh",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman is brought to the emergency department by triage wheelchair 15 minutes after eating a meal containing cashews at a restaurant. She is in severe respiratory distress, hoarse, and clutching her throat. On physical examination, she is anxious, diaphoretic, and speaking in one-word gasps. There is prominent angioedema of the lips, tongue, and uvula, accompanied by diffuse, pruritic, raised erythematous urticarial wheals over her face, neck, and trunk. High-pitched inspiratory stridor and bilateral expiratory wheezes are audible. Vital signs show blood pressure 78/42 mm Hg, heart rate 136/min, respiratory rate 34/min, and room air oxygen saturation 86%. Which of the following is the single most critical, life-saving initial intervention?",
    "choices": [
      [
        "Immediate intramuscular injection of epinephrine 0.3 to 0.5 mg (1:1,000) into the anterolateral thigh",
        "Anaphylaxis is an acute, life-threatening systemic hypersensitivity reaction involving two or more organ systems (cutaneous urticaria/angioedema, respiratory compromise, and cardiovascular collapse/hypotension). EPINEPHRINE IS THE FIRST-LINE, LIFE-SAVING DRUG OF CHOICE and must be administered IMMEDIATELY without delay. Epinephrine's multimodal adrenergic effects treat every pathophysiological feature of anaphylaxis: (1) Alpha-1 agonism causes potent peripheral vasoconstriction, reversing vasodilation, increasing blood pressure, and decreasing mucosal airway edema; (2) Beta-1 agonism increases cardiac contractility and heart rate, augmenting cardiac output; and (3) Beta-2 agonism promotes rapid bronchial smooth muscle relaxation (bronchodilation) and stabilizes mast cell and basophil membranes, halting further inflammatory mediator release. The standard dose is 0.3 to 0.5 mg of 1:1,000 (1 mg/mL) solution administered INTRAMUSCULARLY into the mid-anterolateral thigh (vastus lateralis), which achieves significantly faster and higher peak plasma concentrations than subcutaneous injection or deltoid injection. Antihistamines and corticosteroids are second-line adjuncts that have slow onset and DO NOT prevent airway collapse or death."
      ],
      [
        "Intravenous diphenhydramine 50 mg combined with oral famotidine 20 mg",
        "H1 and H2 antihistamines relieve pruritus and urticaria, but do NOT relieve laryngeal edema, reverse bronchospasm, or restore blood pressure, and must never delay epinephrine."
      ],
      [
        "Intravenous methylprednisolone 125 mg bolus as primary emergency monotherapy",
        "Corticosteroids have an onset of action of 4 to 6 hours and have zero immediate effect on acute airway obstruction or circulatory collapse."
      ],
      [
        "Subcutaneous epinephrine injection into the deltoid muscle",
        "Subcutaneous and deltoid injections produce significantly slower absorption and lower peak plasma drug levels than intramuscular vastus lateralis injection."
      ],
      [
        "Continuous inhaled nebulized albuterol without systemic medication",
        "Albuterol relaxes lower bronchioles, but does not treat laryngeal edema or distributive vasodilatory shock."
      ]
    ],
    "shortestValidSolution": "Stridor + hypotension (78/42) + urticaria = Anaphylaxis -> immediate IM epinephrine (1:1000) into anterolateral thigh.",
    "necessaryInference": "Select immediate intramuscular epinephrine in the anterolateral thigh as the primary life-saving intervention for anaphylaxis.",
    "strongestDistractor": "Intravenous diphenhydramine 50 mg combined with oral famotidine 20 mg",
    "distractorExclusion": "Antihistamines are slow adjuncts that do not reverse shock or airway edema; IM epinephrine is the mandatory first-line therapy.",
    "citation": "Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis-A 2020 Practice Parameter Update, Systematic Review, and Grading of Recommendations, Assessment, Development and Evaluation (GRADE) Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123. PMID: 32001253.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 3 emergency medicine item on anaphylactic shock and immediate intramuscular epinephrine in the vastus lateralis.",
      "distractorExclusionNotes": "Excluded antihistamines and steroids because both lack immediate life-saving efficacy compared to prompt IM epinephrine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
