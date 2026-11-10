import { CandidateSpec } from './types';

export const step3Batch16: CandidateSpec[] = [
  {
    "code": "op-c-s3-0376",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Informed Consent & Decisional Capacity",
    "subtopic": "Assessment of Decision-Making Capacity in Cognitive Impairment",
    "provisionalDifficulty": 4,
    "stem": "An 76-year-old man with mild vascular dementia is admitted to the hospital with acute cholecystitis. An abdominal ultrasound confirms gallstones with gallbladder wall thickening and pericholecystic fluid. The surgical service recommends an urgent laparoscopic cholecystectomy to prevent perforation. The patient calmly states: 'I understand that my gallbladder is infected and that it could burst if nothing is done, which could kill me. But my wife died during surgery in this hospital 2 years ago, and I have lived a full life. I do not want any operation under general anesthesia. I want IV antibiotics and pain medicine only, even if that means I have a higher chance of dying.' On mental status examination, he is oriented to person, place, and year, recalls 2 of 3 words at 5 minutes, but cannot perform serial sevens. His daughter arrives and demands that the surgical team proceed with emergency cholecystectomy immediately, stating: 'My father has dementia and cannot legally refuse this life-saving surgery.' Which of the following is the most ethically and legally appropriate next step?",
    "choices": [
      [
        "Respect the patient's refusal of surgery and treat him with intravenous antibiotics and analgesia while continuing supportive counseling",
        "Decision-making capacity is decision-specific and time-specific, and is determined clinically by a physician, not by a court or family member. Having a diagnosis of mild dementia or scoring poorly on cognitive screening (e.g., serial sevens) does not automatically strip a patient of capacity. A patient possesses capacity for a specific medical decision if they demonstrate 4 core criteria: (1) understanding the medical condition and options, (2) appreciating how the decision applies to their personal situation, (3) reasoning through the risks and benefits logically, and (4) communicating a consistent, voluntary choice. Because this patient clearly understands the diagnosis, acknowledges the lethal risk of perforation, provides a coherent rationale based on personal values, and clearly articulates his choice, he possesses capacity to refuse cholecystectomy."
      ],
      [
        "Obtain emergency surgical consent from the daughter as designated next of kin because a dementia diagnosis automatically invalidates informed refusal",
        "A diagnosis of dementia does not automatically render a patient incapacitated; capacity must be evaluated for the specific decision at hand."
      ],
      [
        "Petition a probate court to appoint a temporary emergency guardian before administering any antibiotics or analgesia",
        "Court intervention is unnecessary when an adult patient possesses decision-making capacity; delaying medical treatment while petitioning a court would be harmful and unethical."
      ],
      [
        "Administer intramuscular haloperidol to treat hospital delirium and reassess capacity once his cognitive score normalizes",
        "The patient is calm, coherent, and demonstrates no evidence of acute hyperactive delirium or psychosis; chemical restraint is completely inappropriate."
      ],
      [
        "Proceed with laparoscopic cholecystectomy under emergency doctrine because cholecystitis is an acute, potentially life-threatening surgical emergency",
        "The emergency doctrine allows treatment without consent only when a patient lacks capacity and no surrogate is available; it cannot override the valid refusal of a competent patient."
      ]
    ],
    "shortestValidSolution": "Patient demonstrates all 4 capacity criteria (understanding, appreciation, reasoning, choice); mild dementia does not invalidate refusal of surgery.",
    "necessaryInference": "Apply the 4 clinical criteria of decision-making capacity and recognize that capacity is decision-specific and overrides surrogate objections.",
    "strongestDistractor": "Obtain emergency surgical consent from the daughter as designated next of kin because a dementia diagnosis automatically invalidates informed refusal",
    "distractorExclusion": "Cognitive impairment does not equate to incapacity; a patient can retain capacity for a specific informed refusal despite mild dementia.",
    "citation": "Appelbaum PS. Assessment of patients' competence to consent to treatment. N Engl J Med. 2007;357(18):1834-1840. doi:10.1056/NEJMcp074045",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the 4 clinical criteria of decision-making capacity and recognize that capacity is decision-specific and overrides surrogate objections.",
      "distractorExclusionNotes": "Strongest distractor 'Obtain emergency surgical consent from the daughter as designated next of kin be' excluded: Cognitive impairment does not equate to incapacity; a patient can retain capacity for a specific informed refusal despite mild dementia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0377",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Surrogate Decision-Making",
    "subtopic": "Substituted Judgment vs Best Interests Standard",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman is admitted to the intensive care unit in septic shock and acute respiratory distress syndrome secondary to fecal peritonitis from a ruptured diverticulum. Following emergency laparotomy, she remains intubated, comatose, and dependent on high-dose norepinephrine and vasopressin. She has developed multiorgan failure, including anuric acute kidney injury and lactic acidosis (lactate 9.2 mmol/L). She did not execute a written advance directive or durable power of attorney for healthcare. Her legal surrogate is her husband of 42 years. When the critical care team discusses initiating continuous renal replacement therapy and performing a tracheostomy, the husband states: 'My wife and I talked about this extensively when her sister died on life support. She always told me that if she were ever in a coma on breathing machines with no realistic chance of returning to an independent life, she never wanted machines to prolong her dying. I love her dearly, but I know she would never want dialysis or long-term life support under these conditions. We must transition to comfort measures.' The patient's adult son arrives and insists: 'Dad is grieving and not thinking straight. I want everything done for my mom, including kidney dialysis.' Which of the following principles guides the surrogate's legal and ethical authority, and how should the team proceed?",
    "choices": [
      [
        "The husband is the primary legal surrogate and is applying the substituted judgment standard; honor his request to withhold dialysis and transition to comfort-focused care",
        "In the absence of a designated durable power of attorney for healthcare, state statutes establish a clear hierarchy of default surrogate decision-makers (typically: spouse > adult children > parents > adult siblings). The husband holds legal priority over the adult son. Furthermore, when making medical decisions for an incapacitated patient, the surrogate must first apply the 'substituted judgment standard'\u2014making the decision the patient would have made for herself based on her previously expressed values and statements, rather than the surrogate's or family's personal wishes. If the patient's prior wishes are unknown, only then does the surrogate apply the 'best interests standard.' Because the husband holds legal priority and articulates a clear substituted judgment, his decision controls."
      ],
      [
        "The son's request must be honored because in life-or-death decisions, the ethical duty of beneficence requires preserving life whenever any family member objects",
        "Beneficence does not mandate prolonging life against a patient's autonomous wishes as expressed through a valid substituted judgment, and the son does not hold legal priority over the spouse."
      ],
      [
        "Initiate continuous renal replacement therapy immediately until the family reaches unanimous consensus or a court hearing can be scheduled",
        "Unanimous consensus is not required when a recognized hierarchical surrogate exists; imposing invasive non-beneficial dialysis against known patient wishes violates ethical duties."
      ],
      [
        "Convene the hospital ethics committee to formally strip the husband of surrogate authority because opting for comfort care constitutes neglect",
        "Requesting withdrawal or withholding of life-sustaining treatment in line with patient values is ethically and legally sound, not neglect."
      ],
      [
        "Disregard the husband's verbal recollection because oral statements carry zero legal validity without a notarized living will",
        "Oral statements made to family members prior to incapacity carry substantial ethical and legal weight and form the core basis of substituted judgment."
      ]
    ],
    "shortestValidSolution": "Spouse has legal priority over adult child and correctly applies substituted judgment based on patient's stated values.",
    "necessaryInference": "Apply legal surrogate priority (spouse > adult child) and the substituted judgment standard over family dispute.",
    "strongestDistractor": "The son's request must be honored because in life-or-death decisions, the ethical duty of beneficence requires preserving life whenever any family member objects",
    "distractorExclusion": "Family consensus is not legally required; default hierarchy places the spouse first, and substituted judgment overrides preserving life at all costs.",
    "citation": "Lo B. Resolving Ethical Dilemmas: A Guide for Clinicians. 6th ed. Philadelphia, PA: Wolters Kluwer; 2019:85-98. NLM ID: 101740054",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply legal surrogate priority (spouse > adult child) and the substituted judgment standard over family dispute.",
      "distractorExclusionNotes": "Strongest distractor 'The son's request must be honored because in life-or-death decisions, the ethica' excluded: Family consensus is not legally required; default hierarchy places the spouse first, and substituted judgment overrides preserving life at all costs.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0378",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Advance Directives & Living Wills",
    "subtopic": "Authority of Valid Living Will vs Overriding Family Demands",
    "provisionalDifficulty": 4,
    "stem": "A 79-year-old woman with severe chronic obstructive pulmonary disease (GOLD stage 4) and ischemic cardiomyopathy is admitted to the hospital with acute hypercapnic respiratory failure secondary to influenza A pneumonia. Arterial blood gas on non-invasive positive pressure ventilation (BiPAP) reveals pH 7.20, PaCO2 74 mm Hg, and PaO2 58 mm Hg. The patient becomes progressively somnolent and is unable to follow commands. In her electronic health record, there is a formally executed, notarized living will signed 6 months ago while she was fully competent, specifically stating: 'If I develop respiratory failure, I do not consent to endotracheal intubation or mechanical ventilation under any circumstances. I request non-invasive measures and palliative medications for comfort.' Her estranged daughter arrives from another state, produces a durable power of attorney for finances, and shouts: 'I am her legal power of attorney! She didn't know what she was signing 6 months ago. Intubate her right now, or I will sue everyone in this ICU!' Which of the following is the most appropriate action by the medical team?",
    "choices": [
      [
        "Continue non-invasive ventilation, provide morphine for dyspnea, and uphold the living will's refusal of endotracheal intubation",
        "A formally executed advance directive (living will) created by a competent patient takes precedence over the wishes of family members, even when the patient subsequently loses capacity. A durable power of attorney for finances grants zero authority over healthcare decisions. Even a healthcare power of attorney (proxy) cannot override a clear, specific written instruction in a valid living will unless the patient explicitly authorized the proxy to do so. The daughter's threats of litigation do not alter the team's legal and ethical duty to honor the patient's autonomous written refusal."
      ],
      [
        "Intubate the patient immediately to mitigate medical-legal liability while hospital risk management reviews the living will",
        "Intubating a patient in direct violation of a clear, valid advance directive constitutes medical battery and a severe breach of patient autonomy."
      ],
      [
        "Transfer surrogate decision-making authority to the daughter because a living will is automatically suspended during acute pneumonia",
        "Living wills are specifically designed to guide care during life-threatening acute medical crises; they are not suspended during acute illness."
      ],
      [
        "Immediately discontinue non-invasive positive pressure ventilation and all medications to allow natural death within minutes",
        "The living will refused endotracheal intubation, not all supportive care; continuing non-invasive ventilation and providing palliative analgesia respects her stated wishes."
      ],
      [
        "Petition a district court to issue an injunction compelling the daughter to sign a DNR form",
        "No court injunction is needed because the patient's existing living will is already legally binding and enforceable."
      ]
    ],
    "shortestValidSolution": "A valid living will refusing intubation overrides family demands; financial POA has no healthcare authority.",
    "necessaryInference": "Recognize that a valid living will legally supersedes contrary family demands, and financial POA confers no healthcare authority.",
    "strongestDistractor": "Intubate the patient immediately to mitigate medical-legal liability while hospital risk management reviews the living will",
    "distractorExclusion": "Violating a clear living will to avoid family conflict violates patient autonomy and constitutes battery; the living will is legally controlling.",
    "citation": "Sabatino CP. Advance directives and advance care planning: legal and policy issues. Generations. 2012;36(3):36-43. PMID: 23213192",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that a valid living will legally supersedes contrary family demands, and financial POA confers no healthcare authority.",
      "distractorExclusionNotes": "Strongest distractor 'Intubate the patient immediately to mitigate medical-legal liability while hospi' excluded: Violating a clear living will to avoid family conflict violates patient autonomy and constitutes battery; the living will is legally controlling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0379",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Emergency Treatment Doctrine & Implied Consent",
    "subtopic": "Life-Saving Intervention in Unidentified Incapacitated Trauma",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is brought to the trauma center by emergency medical services after being struck by a motor vehicle as an unhelmeted pedestrian. He is unconscious and unresponsive. Vital signs show blood pressure 72/40 mm Hg, heart rate 142/min, respiratory rate 34/min, and oxygen saturation 86% on high-flow mask. Physical examination reveals absent breath sounds over the right hemithorax, tracheal deviation to the left, distended neck veins, and an unstable pelvis with marked perineal hematoma. He has no identification on his person, and no family members or friends are present. A portable chest radiograph is unavailable. Which of the following is the most appropriate immediate management regarding informed consent and clinical intervention?",
    "choices": [
      [
        "Perform immediate needle thoracostomy and tube thoracostomy under the emergency doctrine (implied consent), followed by rapid pelvic binder placement and massive transfusion protocol",
        "The emergency treatment doctrine (implied consent) legally and ethically authorizes healthcare providers to provide immediate life-saving or limb-saving medical and surgical interventions to an incapacitated patient when an immediate threat to life or health exists and neither the patient nor a legally authorized surrogate is available to provide consent. Under the law, consent is reasonably presumed because any reasonable person would desire life-saving resuscitation. Tension pneumothorax is an immediate clinical emergency requiring instant needle/finger decompression followed by chest tube placement without waiting for identification or consent."
      ],
      [
        "Delay all invasive interventions until the hospital social worker can identify the patient through police fingerprint records and contact next of kin",
        "Delaying emergency decompression and resuscitation in tension pneumothorax and hemorrhagic shock would result in cardiac arrest and wrongful death."
      ],
      [
        "Wait for two independent attending physicians to sign an emergency institutional review board waiver before performing thoracostomy",
        "Emergency needle decompression in tension pneumothorax is a standard life-saving procedure covered by implied consent; IRB waivers apply to research protocols, not clinical trauma care."
      ],
      [
        "Proceed with fluid resuscitation but withhold blood transfusion because the patient might be a Jehovah's Witness who would refuse blood products",
        "Without an advance directive, emergency medical jewelry, or wallet card stating refusal of blood, providers must presume implied consent for standard life-saving interventions, including blood transfusion."
      ],
      [
        "Contact the hospital legal risk management department to obtain judicial authorization for chest tube insertion",
        "Judicial authorization is never required for emergency resuscitation of an unidentified, comatose trauma patient."
      ]
    ],
    "shortestValidSolution": "Emergency doctrine (implied consent) authorizes immediate life-saving decompression and resuscitation for incapacitated unidentified trauma.",
    "necessaryInference": "Apply the emergency doctrine / implied consent to provide immediate life-saving interventions without delay for absent surrogates.",
    "strongestDistractor": "Proceed with fluid resuscitation but withhold blood transfusion because the patient might be a Jehovah's Witness who would refuse blood products",
    "distractorExclusion": "Implied consent presumes life-saving care including blood unless explicit prior documented refusal exists.",
    "citation": "Moskop JC. Informed consent in the emergency department. Emerg Med Clin North Am. 1999;17(2):327-340. doi:10.1016/s0733-8627(05)70062-8",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the emergency doctrine / implied consent to provide immediate life-saving interventions without delay for absent surrogates.",
      "distractorExclusionNotes": "Strongest distractor 'Proceed with fluid resuscitation but withhold blood transfusion because the pati' excluded: Implied consent presumes life-saving care including blood unless explicit prior documented refusal exists.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0380",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Adolescent Healthcare & Confidentiality",
    "subtopic": "Sexually Transmitted Infections & Reproductive Health Exceptions",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old high school student presents to an outpatient adolescent health clinic reporting a 5-day history of dysuria and a yellowish vaginal discharge. She attends the visit alone. She is sexually active with her boyfriend and reports using condoms inconsistently. Physical examination reveals normal vital signs, a purulent cervical discharge, and cervical motion tenderness without adnexal masses. A rapid nucleic acid amplification test (NAAT) from a cervical swab returns positive for Neisseria gonorrhoeae and negative for Chlamydia trachomatis. The patient states: 'Please do not tell my parents about this. My father is very strict and would throw me out of the house if he knew I was having sex.' Which of the following is the most appropriate management regarding parental notification and clinical treatment?",
    "choices": [
      [
        "Administer intramuscular ceftriaxone, provide expedited partner therapy, and maintain medical confidentiality without notifying the parents",
        "In all 50 US states and the District of Columbia, state statutes explicitly grant minors the legal right to provide confidential, independent consent for the diagnosis and treatment of sexually transmitted infections (STIs), as well as access to contraception and pregnancy care, without parental consent or notification. Respecting adolescent confidentiality is essential to encourage youth to seek timely care for STIs and reproductive health. The physician should treat the gonococcal infection (ceftriaxone 500 mg IM), screen for other STIs (HIV, syphilis), offer contraception, provide expedited partner therapy (EPT) where permitted by state law, and uphold confidentiality."
      ],
      [
        "Inform the patient that state medical laws mandate disclosing all positive bacterial culture results to her parents within 24 hours",
        "State reporting laws require reporting certain communicable diseases to public health departments, but they do NOT require (and frequently prohibit) disclosure to parents without the minor's consent."
      ],
      [
        "Refuse to administer intramuscular antibiotics until one parent or legal guardian signs an in-person informed consent document",
        "Refusing treatment violates state statutory minor consent laws for STIs and exposes the patient to pelvic inflammatory disease and reproductive complications."
      ],
      [
        "Notify the parents immediately because cervical discharge in a minor constitutes prima facie evidence of child neglect or sexual abuse",
        "In an adolescent above the legal age of consent engaging in consensual peer sexual activity, an STI is not evidence of child abuse or neglect."
      ],
      [
        "Treat the infection but instruct the clinic billing department to send the full itemized explanation of benefits directly to the parents' home address",
        "Itemized billing sent home would breach confidentiality; clinics caring for minors should provide confidential billing or Title X funding protection."
      ]
    ],
    "shortestValidSolution": "Minors have legal rights to confidential STI diagnosis and treatment without parental consent or disclosure.",
    "necessaryInference": "Recognize statutory minor consent exceptions for sexually transmitted infections and reproductive healthcare.",
    "strongestDistractor": "Inform the patient that state medical laws mandate disclosing all positive bacterial culture results to her parents within 24 hours",
    "distractorExclusion": "Mandatory disease reporting is to the public health department, not to parents; minor confidentiality for STIs is legally protected.",
    "citation": "English A, Ford CA. More states authorize minors' consent for STI prevention. J Adolesc Health. 2013;52(5):657-659. doi:10.1016/j.jadohealth.2013.02.012",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize statutory minor consent exceptions for sexually transmitted infections and reproductive healthcare.",
      "distractorExclusionNotes": "Strongest distractor 'Inform the patient that state medical laws mandate disclosing all positive bacte' excluded: Mandatory disease reporting is to the public health department, not to parents; minor confidentiality for STIs is legally protected.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0381",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Adolescent Healthcare & Legal Emancipation",
    "subtopic": "Emancipated Minor Status vs Mature Minor Doctrine",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old woman presents to the emergency department with a 24-hour history of severe right lower quadrant abdominal pain, anorexia, and low-grade fever. Computed tomography of the abdomen and pelvis confirms acute non-perforated appendicitis. The surgical service recommends laparoscopic appendectomy. The patient is legally married, lives in her own apartment with her spouse, works full-time as an accountant, and is financially independent from her parents. When the surgeon discusses the operation, the patient asks detailed questions, understands the risks of appendiceal rupture versus surgical bleeding, and signs the surgical consent form. The on-call hospital administrator raises concern that because she is 17 years old (under the age of majority), the surgery cannot proceed without written consent from her parents. Which of the following best characterizes this patient's legal status and the appropriate course of action?",
    "choices": [
      [
        "The patient is an emancipated minor who possesses the full legal rights of an adult to give informed consent for her own medical and surgical procedures",
        "An emancipated minor is an adolescent who has legally acquired adult rights and responsibilities prior to reaching the statutory age of majority (typically 18). While definitions vary slightly across jurisdictions, minors who are legally married, members of the armed forces, or living independently and financially self-sufficient through court decree are recognized as emancipated. Emancipated minors have full legal authority to consent to or refuse any medical or surgical treatment, exactly as an adult would. Parental consent is neither required nor permitted to override the patient's valid consent."
      ],
      [
        "The patient's spouse must sign the consent form because marriage transfers parental guardianship directly to the husband",
        "Marriage grants the minor personal emancipation; the spouse is not her guardian, and the patient herself has independent legal authority."
      ],
      [
        "Parental consent is strictly mandatory for all surgical procedures requiring general anesthesia until age 18 regardless of marital status",
        "Emancipation removes parental authority for all healthcare decisions, including major surgery under general anesthesia."
      ],
      [
        "The mature minor doctrine requires a probate court judge to issue a formal emergency order before operating",
        "The mature minor doctrine allows older minors with demonstrated maturity to consent to certain treatments in some states, but this patient is already legally emancipated, requiring no judicial order."
      ],
      [
        "Emergency doctrine must be invoked because minors cannot legally execute binding medical contracts under any circumstances",
        "The emergency doctrine is applied when consent cannot be obtained; here the patient is emancipated and capable of providing direct consent."
      ]
    ],
    "shortestValidSolution": "Married, financially self-supporting 17-year-old is an emancipated minor with full legal authority to consent to surgery.",
    "necessaryInference": "Identify criteria for legal minor emancipation (marriage, financial independence, military) and resultant independent consent rights.",
    "strongestDistractor": "The patient's spouse must sign the consent form because marriage transfers parental guardianship directly to the husband",
    "distractorExclusion": "Emancipation empowers the patient herself to consent as an adult; spouses do not act as guardians for competent adults.",
    "citation": "Santelli JS, et al. Adolescent health and the law. Pediatrics. 2014;133(5):934-942. doi:10.1542/peds.2013-3398",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify criteria for legal minor emancipation (marriage, financial independence, military) and resultant independent consent rights.",
      "distractorExclusionNotes": "Strongest distractor 'The patient's spouse must sign the consent form because marriage transfers paren' excluded: Emancipation empowers the patient herself to consent as an adult; spouses do not act as guardians for competent adults.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0382",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Patient Autonomy & Religious Beliefs",
    "subtopic": "Jehovah's Witness Adult Refusal of Blood Transfusion",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man who is a devout Jehovah's Witness is admitted to the intensive care unit with a massive upper gastrointestinal hemorrhage from a bleeding duodenal ulcer. Upper endoscopy demonstrates an actively bleeding ulcer that is successfully treated with dual-modality hemoclip placement and epinephrine injection. Following the procedure, his hemoglobin is 4.8 g/dL, blood pressure is 88/54 mm Hg, and heart rate is 122/min. The patient is fully awake, alert, and oriented. When the intensivist explains that packed red blood cell transfusion is urgently recommended to prevent myocardial infarction and death, the patient states: 'I understand that my blood count is dangerously low and that I could suffer a heart attack or die without blood. However, based on my religious beliefs in God's law as written in the Bible (Acts 15:28-29), I absolutely refuse any allogeneic whole blood or packed red blood cells. I will accept intravenous crystalloids, iron, erythropoietin, and cell saver if my blood remains in a continuous circuit.' The intensivist feels deeply conflicted because withholding blood risks patient death. Which of the following is the most ethically and legally appropriate action?",
    "choices": [
      [
        "Respect the patient's refusal of blood transfusion, administer non-blood volume expanders, IV iron, and erythropoiesis-stimulating agents, and closely monitor hemodynamics",
        "A competent adult patient has the fundamental ethical and legal right to refuse any medical intervention, including life-saving therapies such as blood transfusions, based on their religious beliefs or personal values. Beneficence (the physician's desire to preserve life) does not override a competent patient's autonomy. Coercing, sedating, or administering blood against the patient's explicit competent refusal constitutes battery. The appropriate management is to honor the refusal, optimize non-blood management (IV fluids, IV iron, erythropoietin, continuous-circuit cell salvage, tranexamic acid if indicated), minimize phlebotomy, and document the informed refusal thoroughly."
      ],
      [
        "Administer 2 units of packed red blood cells under emergency doctrine because saving life supersedes religious tenets in acute shock",
        "The emergency doctrine only applies when a patient's wishes are unknown and the patient is incapacitated; it can never be used to override the valid refusal of a competent patient."
      ],
      [
        "Intubate and sedate the patient so that blood transfusion can be administered once he is no longer actively refusing",
        "Sedating a patient to circumvent their autonomous refusal is a severe ethical violation and constitutes medical battery."
      ],
      [
        "Petition a judge for an emergency court order authorizing involuntary transfusion of packed red blood cells",
        "Courts consistently uphold the right of competent adults to refuse blood products based on religious beliefs; judicial orders for involuntary transfusion are granted only for minor children of Jehovah's Witnesses, not competent adults."
      ],
      [
        "Immediately discharge the patient from the intensive care unit because refusing standard of care terminates the physician-patient relationship",
        "Refusing a specific treatment does not terminate the duty of care; abandoning an unstable ICU patient constitutes clinical abandonment."
      ]
    ],
    "shortestValidSolution": "Competent adult Jehovah's Witness has absolute legal right to refuse blood transfusion; honor refusal and provide non-blood support.",
    "necessaryInference": "Apply the primacy of adult autonomy in refusing life-saving blood products, distinguishing adult autonomy from pediatric protections.",
    "strongestDistractor": "Petition a judge for an emergency court order authorizing involuntary transfusion of packed red blood cells",
    "distractorExclusion": "Judicial orders to mandate blood transfusion apply only to minors whose parents refuse life-saving care, never to competent adults.",
    "citation": "Gillon R. Autonomy and the principle of respect for autonomy. BMJ. 1985;290(6484):1806-1809. doi:10.1136/bmj.290.6484.1806",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the primacy of adult autonomy in refusing life-saving blood products, distinguishing adult autonomy from pediatric protections.",
      "distractorExclusionNotes": "Strongest distractor 'Petition a judge for an emergency court order authorizing involuntary transfusio' excluded: Judicial orders to mandate blood transfusion apply only to minors whose parents refuse life-saving care, never to competent adults.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0383",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Error Disclosure & Transparency",
    "subtopic": "Communication and Apology Following an Adverse Event",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman undergoes an elective right total knee arthroplasty under spinal anesthesia with a peripheral nerve block. In the preoperative holding area, the anesthesiology resident performs an ultrasound-guided adductor canal block on the left leg instead of the right leg due to failure to perform a structured pre-procedure site 'time-out.' The error is recognized immediately when the orthopedic surgeon enters the room to prep the right surgical leg. The surgeon subsequently performs the correct right adductor canal block, and the right knee replacement proceeds without surgical complication. Postoperatively, the patient awakens in the post-anesthesia care unit with bilateral lower extremity numbness. The anesthesia resident asks the attending anesthesiologist how to handle this situation, noting that the patient suffered no permanent harm and will recover full sensation in the left leg within 18 hours. Which of the following is the most appropriate next step in managing this medical error?",
    "choices": [
      [
        "Promptly disclose the wrong-site nerve block to the patient, explain what occurred and why, provide an apology, outline the expected recovery timeline, and ensure the hospital waives any charges associated with the error",
        "Ethical standards, professional guidelines (AMA Code of Ethics), and institutional safety policies mandate prompt, transparent disclosure of all harmful and near-harmful medical errors to patients. Disclosing the event, explaining how it occurred, describing steps taken to mitigate harm (bilateral fall precautions until the block wears off), providing an empathetic apology, and confirming that the patient will not be billed for the wrong-site procedure or its consequences foster patient trust, reduce psychological distress, and are associated with lower rates of litigation."
      ],
      [
        "Withhold disclosure of the left nerve block from the patient because the temporary block causes no permanent physiological injury",
        "Concealing a medical error violates truth-telling (veracity) and patient autonomy; error disclosure is required regardless of whether permanent injury resulted."
      ],
      [
        "Inform the patient that bilateral nerve blocks are routinely administered to improve postoperative bilateral quadriceps balance",
        "Lying or fabricating a clinical justification to conceal an error is fraudulent, unethical, and grounds for severe disciplinary action."
      ],
      [
        "Wait until the patient is discharged home before mailing a formal written incident disclosure letter from the hospital risk management office",
        "Disclosure should occur promptly and in person by the responsible clinical team, not through delayed impersonal letters after discharge."
      ],
      [
        "Blame the preoperative holding nurse in front of the patient to preserve the patient's trust in the anesthesia physician team",
        "Scapegoating colleagues undermines interprofessional safety culture and is unprofessional and misleading."
      ]
    ],
    "shortestValidSolution": "Prompt, transparent disclosure of the error to the patient, with an apology, explanation of effects, and waiver of associated charges.",
    "necessaryInference": "Apply ethical principles of veracity, full disclosure of medical errors, empathetic apology, and institutional transparency.",
    "strongestDistractor": "Withhold disclosure of the left nerve block from the patient because the temporary block causes no permanent physiological injury",
    "distractorExclusion": "Non-disclosure violates veracity; errors that impact the patient (e.g. bilateral numbness, fall risk) must be disclosed regardless of permanence.",
    "citation": "Gallagher TH, et al. Patients' and physicians' attitudes regarding the disclosure of medical errors. JAMA. 2003;289(8):1001-1007. doi:10.1001/jama.289.8.1001",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ethical principles of veracity, full disclosure of medical errors, empathetic apology, and institutional transparency.",
      "distractorExclusionNotes": "Strongest distractor 'Withhold disclosure of the left nerve block from the patient because the tempora' excluded: Non-disclosure violates veracity; errors that impact the patient (e.g. bilateral numbness, fall risk) must be disclosed regardless of permanence.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0384",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Impaired Colleague & Professional Responsibility",
    "subtopic": "Immediate Patient Protection vs Physician Health Program Reporting",
    "provisionalDifficulty": 4,
    "stem": "A third-year internal medicine resident is cross-covering the inpatient medical floor at 2:00 AM. The on-call surgical senior resident arrives to perform a bedside consultation for acute bowel obstruction. The surgical resident has slurred speech, an unsteady gait, flushed conjunctivae, and a distinct odor of alcohol on his breath. As he approaches the bedside with a central line kit to insert a femoral line, he drops the sterile needle on the floor, picks it up, and attempts to use it. The internal medicine resident stops him. The surgical resident whispers: 'I've had a rough night going through a divorce, man. Don't make a scene. Just let me put this line in and I'll go crash in the call room.' Which of the following is the most appropriate immediate action by the internal medicine resident?",
    "choices": [
      [
        "Prevent the colleague from touching the patient or performing any procedures, immediately notify the surgical attending or hospital nursing supervisor, and relieve him of clinical duty to ensure patient safety",
        "The primary ethical, professional, and legal obligation of any physician is patient safety. When a colleague is acutely impaired (e.g., intoxicated on duty) and attempts to deliver clinical care, the immediate priority is to stop the colleague from touching or treating any patient and ensure they are immediately relieved of duty by contacting the supervising attending physician, chief of service, or hospital supervisor. Once immediate patient safety is secured, the situation is referred to the state Physician Health Program (PHP) or institutional wellness committee for non-punitive evaluation and rehabilitation."
      ],
      [
        "Allow him to sleep in the call room for 4 hours until the alcohol clears, on the condition that he promises to seek outpatient addiction counseling tomorrow",
        "Allowing an intoxicated resident to self-manage without notifying leadership leaves patients at risk if he is paged or wanders back to the floor."
      ],
      [
        "Call the state medical licensing board immediately to file an emergency license revocation report before removing him from the patient's room",
        "Filing licensing board reports does not resolve the immediate acute threat to patient safety; removing the colleague from duty is the mandatory first step."
      ],
      [
        "Supervise the colleague closely while he completes the femoral catheter insertion to ensure sterile technique is maintained",
        "Permitting an intoxicated physician to perform an invasive procedure under any supervision is completely unacceptable and exposes the patient to severe harm."
      ],
      [
        "Perform a blood alcohol draw on the surgical resident without his consent to establish objective legal proof of intoxication",
        "Performing unauthorized blood tests on a colleague violates bodily integrity and patient privacy; clinical observation and supervisor notification are the standard."
      ]
    ],
    "shortestValidSolution": "Immediately remove impaired colleague from patient care and notify supervisor to protect patient safety.",
    "necessaryInference": "Prioritize immediate patient protection by removing an impaired physician from duty over personal loyalty or delayed administrative reporting.",
    "strongestDistractor": "Allow him to sleep in the call room for 4 hours until the alcohol clears, on the condition that he promises to seek outpatient addiction counseling tomorrow",
    "distractorExclusion": "Delaying reporting or covering for an impaired colleague leaves hospital patients unprotected and breaches professional duties.",
    "citation": "DesRoches CM, et al. Physicians' perceptions, preparedness for reporting, and experiences related to impaired and incompetent colleagues. JAMA. 2010;304(2):187-193. doi:10.1001/jama.2010.952",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Prioritize immediate patient protection by removing an impaired physician from duty over personal loyalty or delayed administrative reporting.",
      "distractorExclusionNotes": "Strongest distractor 'Allow him to sleep in the call room for 4 hours until the alcohol clears, on the' excluded: Delaying reporting or covering for an impaired colleague leaves hospital patients unprotected and breaches professional duties.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0385",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Determination of Brain Death & Organ Donation",
    "subtopic": "Neurologic Death Criteria & First-Person Authorization",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman is admitted to the neurointensive care unit after suffering a catastrophic traumatic brain injury in a motor vehicle collision. After 48 hours of resuscitation, her core temperature is 37.2\u00b0C, systolic blood pressure is maintained at 115 mm Hg on phenylephrine, and all sedative infusions were discontinued 36 hours ago with undetectable serum drug levels. Neurologic examination demonstrates a Glasgow Coma Scale score of 3, fixed dilated pupils (8 mm) non-reactive to light, absent corneal reflexes, absent oculocephalic and oculovestibular (cold caloric) reflexes, and absent cough and gag reflexes. An apnea test is performed: pre-oxygenation with 100% O2 for 10 minutes, disconnection from mechanical ventilator with insufflation of 100% O2 via tracheal catheter; after 8 minutes, the patient exhibits zero respiratory effort, and arterial blood gas demonstrates pH 7.18 and PaCO2 64 mm Hg (baseline PaCO2 was 38 mm Hg). Brain death is formally certified. Review of state motor vehicle registry records reveals that the patient registered as a designated organ donor (first-person authorization). Her parents arrive and state: 'Her heart is still beating, so she is not dead. We forbid anyone from taking her organs.' Which of the following is the most appropriate next step?",
    "choices": [
      [
        "Explain to the parents that brain death represents the complete, irreversible cessation of all brain function and is legally and clinically equivalent to death, notify the regional organ procurement organization (OPO), and honor the patient's legally binding first-person donor authorization",
        "Under the Uniform Determination of Death Act (UDDA), death can be determined by either irreversible cessation of circulatory and respiratory functions OR irreversible cessation of all functions of the entire brain, including the brainstem. Brain death IS legal and clinical death. Once brain death criteria are met (coma, absence of brainstem reflexes, positive apnea test with PaCO2 \u2265 60 mm Hg or \u2265 20 mm Hg above baseline with no respiratory drive, in the absence of hypothermia, shock, or CNS depressants), the patient is declared deceased. Under the Uniform Anatomical Gift Act (UAGA), a patient's documented first-person authorization (e.g., driver's license donor registry) constitutes a legally binding anatomical gift that family members have no legal authority to revoke or override."
      ],
      [
        "Delay brain death declaration until a 4-vessel cerebral angiogram or radionuclide scan is performed because clinical apnea tests are legally inconclusive",
        "Ancillary tests (e.g., cerebral angiography, EEG) are only required when clinical brainstem reflexes or the apnea test cannot be safely completed."
      ],
      [
        "Cancel all organ donation discussions and continue full mechanical ventilator support indefinitely out of deference to parental grief",
        "Once a patient is declared legally dead, mechanical support is discontinued or maintained temporarily only for organ preservation; families cannot demand indefinite ICU support for a deceased individual."
      ],
      [
        "Accede to the parents' refusal because family consent legally supersedes an individual's prior organ donor registration in all US states",
        "The Revised Uniform Anatomical Gift Act specifically prohibits family members from overriding a deceased individual's first-person organ donation consent."
      ],
      [
        "Administer high-dose intravenous naloxone and flumazenil to rule out occult opioid and benzodiazepine receptor antagonism before certifying death",
        "Sedatives were discontinued 36 hours prior and serum levels are confirmed undetectable with normal core temperature and hemodynamics, satisfying pre-conditions."
      ]
    ],
    "shortestValidSolution": "Brain death is legal and clinical death; legally binding first-person organ donation authorization cannot be overridden by family.",
    "necessaryInference": "Apply Uniform Determination of Death Act criteria and Uniform Anatomical Gift Act rules regarding first-person authorization.",
    "strongestDistractor": "Accede to the parents' refusal because family consent legally supersedes an individual's prior organ donor registration in all US states",
    "distractorExclusion": "First-person authorization in the donor registry is legally binding and cannot be vetoed by next of kin under the Revised UAGA.",
    "citation": "Greer DM, et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline: Report of the AAN, AAP, CNS, and SCCM. Neurology. 2023;101(24):1112-1132. doi:10.1212/WNL.0000000000207740",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply Uniform Determination of Death Act criteria and Uniform Anatomical Gift Act rules regarding first-person authorization.",
      "distractorExclusionNotes": "Strongest distractor 'Accede to the parents' refusal because family consent legally supersedes an indi' excluded: First-person authorization in the donor registry is legally binding and cannot be vetoed by next of kin under the Revised UAGA.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0386",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Root Cause Analysis & Systems Safety",
    "subtopic": "Active vs Latent Errors and Swiss Cheese Model",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old hospitalized patient with atrial fibrillation receives a tenfold overdose of oral digoxin (1.25 mg instead of 0.125 mg) and develops severe symptomatic bradycardia (heart rate 32/min) and hyperkalemia (potassium 6.2 mEq/L) requiring digoxin-specific antibody fragments (Fab) in the intensive care unit. A multidisciplinary root cause analysis (RCA) committee investigates the incident. The committee discovers that: (1) 0.125 mg and 1.25 mg digoxin ampules/tablets are stored side-by-side in identical blue packaging in the automated dispensing cabinet; (2) the wireless barcode scanner on the nursing unit had been malfunctioning for 3 weeks and nurses routinely bypassed scanning; (3) the unit was staffed at 50% capacity due to unexpected sick calls; and (4) the electronic order entry screen had no built-in dosage alerts for digoxin. The nursing manager demands that the nurse who administered the medication be terminated for gross negligence. Which of the following best represents the fundamental philosophy of a Root Cause Analysis in healthcare safety?",
    "choices": [
      [
        "The incident resulted primarily from multiple latent system vulnerabilities (look-alike packaging, broken scanner, understaffing, absent EHR decision support) aligning to permit human error, and remediation must focus on redesigning systems rather than blaming the individual nurse",
        "Root Cause Analysis (RCA) is a structured, retrospective method used to analyze serious adverse events (sentinel events). Based on Reason's 'Swiss cheese model' of accident causation, adverse events rarely stem from a single negligent act (active failure by frontline operator); rather, they occur when multiple latent system failures (holes in the defenses\u2014such as look-alike packaging, unmaintained equipment, chronic understaffing, and absent electronic hard stops) align simultaneously. Effective patient safety systems focus on redesigning processes, engineering forcing functions, and building resilient safeguards, rather than punishing individual clinicians for human slips."
      ],
      [
        "The primary root cause is individual operator negligence, and firing the nurse is the most effective single intervention to prevent future hospital medication errors",
        "Terminating frontline staff does not fix underlying system defects (look-alike packaging, uncalibrated scanners) and creates a culture of fear that suppresses error reporting."
      ],
      [
        "Root cause analysis is designed exclusively to assign civil liability and quantify financial damages for hospital legal defense",
        "RCA is a quality improvement and safety tool aimed at understanding underlying systemic factors, not a mechanism for establishing legal fault or litigation strategy."
      ],
      [
        "The barcode scanner failure is an active failure of nursing administration, whereas administering the pill is a latent institutional error",
        "The nurse administering the pill is the active failure (frontline sharp end), whereas packaging, broken scanners, and staffing policies are latent conditions (system blunt end)."
      ],
      [
        "System redesign is only necessary if the patient suffers permanent irreversible physical disability or death",
        "RCAs and system fixes are warranted for all sentinel events, serious adverse events, and high-risk near misses, regardless of ultimate patient survival."
      ]
    ],
    "shortestValidSolution": "RCA identifies latent system defects (packaging, technology, staffing) aligned in the Swiss cheese model, prioritizing system redesign over blame.",
    "necessaryInference": "Apply the principles of Root Cause Analysis and the Swiss cheese model to distinguish latent system flaws from individual active errors.",
    "strongestDistractor": "The primary root cause is individual operator negligence, and firing the nurse is the most effective single intervention to prevent future hospital medication errors",
    "distractorExclusion": "Focusing on individual blame fails to correct latent system defects and suppresses future voluntary safety reporting.",
    "citation": "Reason J. Human error: models and management. BMJ. 2000;320(7237):768-770. doi:10.1136/bmj.320.7237.768",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the principles of Root Cause Analysis and the Swiss cheese model to distinguish latent system flaws from individual active errors.",
      "distractorExclusionNotes": "Strongest distractor 'The primary root cause is individual operator negligence, and firing the nurse i' excluded: Focusing on individual blame fails to correct latent system defects and suppresses future voluntary safety reporting.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0387",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Just Culture & Error Classification",
    "subtopic": "Human Error vs At-Risk Behavior vs Reckless Behavior",
    "provisionalDifficulty": 5,
    "stem": "A hospital safety committee evaluates three distinct adverse medication events that occurred during a single month across various inpatient wards:\n- Incident 1: A tired night-shift nurse inadvertently selects a cefazolin vial placed immediately adjacent to an identical ceftriaxone vial in the medication refrigerator and infuses it.\n- Incident 2: An experienced nurse routinely bypasses the mandatory double-check protocol for intravenous heparin infusions because 'it takes too long and the second nurse is always busy,' resulting in an unverified rate change.\n- Incident 3: A surgical resident, while visibly intoxicated after drinking alcohol at a party, intentionally disables the safety alarms on a patient-controlled analgesia (PCA) pump to quiet the room so he can sleep in the call room, resulting in severe patient respiratory depression.\n\nUnder the principles of 'Just Culture' in healthcare, which of the following describes the correct classification and appropriate organizational response for each incident?",
    "choices": [
      [
        "Incident 1: Human error (console the nurse and fix packaging); Incident 2: At-risk behavior (coach the nurse and address workflow barriers); Incident 3: Reckless behavior (remedial or disciplinary action)",
        "A 'Just Culture' distinguishes between three types of behavioral choices: (1) Human error: an unintentional slip, lapse, or mistake while performing a task (Incident 1). The appropriate response is to console the clinician and re-engineer the system (e.g., separate look-alike vials). (2) At-risk behavior: a behavioral choice where the clinician develops a habit of taking shortcuts or drifting away from safety rules because the risk is perceived as low or justified by operational efficiency (Incident 2). The response is coaching, education, and removing workflow barriers. (3) Reckless behavior: a conscious, unjustifiable disregard of a substantial and known safety risk (Incident 3). The response is disciplinary action and sanction."
      ],
      [
        "All three incidents represent gross professional negligence and mandate immediate termination and state licensing board reporting",
        "Treating honest human error with punitive sanctions destroys safety culture and leads to concealment of future errors."
      ],
      [
        "Incident 1 and Incident 2 represent reckless behavior requiring suspension, while Incident 3 is human error caused by provider fatigue",
        "Disabling alarms while intoxicated is quintessential reckless behavior; slips and procedural drift are human error and at-risk behavior, respectively."
      ],
      [
        "Because no patient died in any of the three incidents, no organizational response or coaching is required",
        "Safety management responds to behavioral risk and system hazards, not merely whether severe injury occurred."
      ],
      [
        "Incident 2 is human error because double-checking is an optional guideline, while Incident 1 is at-risk behavior",
        "Bypassing a mandatory safety policy to save time is classic at-risk behavior (rule drift), whereas inadvertent misidentification is human error."
      ]
    ],
    "shortestValidSolution": "Just Culture taxonomy: Human error (console/redesign) -> At-risk behavior (coach/remove barriers) -> Reckless behavior (discipline).",
    "necessaryInference": "Classify errors into Human Error, At-Risk Behavior, and Reckless Behavior and match each to its appropriate Just Culture institutional response.",
    "strongestDistractor": "Incident 2 is human error because double-checking is an optional guideline, while Incident 1 is at-risk behavior",
    "distractorExclusion": "Drifting from safety rules to save time is at-risk behavior, not an inadvertent human slip.",
    "citation": "Marx D. Patient Safety and the Just Culture: A Primer for Health Care Executives. New York, NY: Columbia University; 2001. NLM ID: 101188358",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Classify errors into Human Error, At-Risk Behavior, and Reckless Behavior and match each to its appropriate Just Culture institutional response.",
      "distractorExclusionNotes": "Strongest distractor 'Incident 2 is human error because double-checking is an optional guideline, whil' excluded: Drifting from safety rules to save time is at-risk behavior, not an inadvertent human slip.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0388",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Starmer AJ, et al. Changes in medical errors after implementation of a handoff program. N Engl J Med. 2014;371(19):1803-1812. doi:10.1056/NEJMsa1405556",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify components of the I-PASS hand-off mnemonic and recognize closed-loop synthesis by receiver.",
      "distractorExclusionNotes": "Strongest distractor 'Contingency planning' excluded: Contingency planning is the 'if-then' instruction ('if O2 > 4L...'), whereas repeating back the plan is Synthesis by receiver.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0389",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med. 2003;78(8):775-780. doi:10.1097/00001888-200308000-00003",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize anchoring bias and premature closure as cognitive drivers of diagnostic error in clinical presentations.",
      "distractorExclusionNotes": "Strongest distractor 'Availability bias' excluded: Availability relates to recent memorable cases; anchoring is fixating on initial clinical cues in the current encounter.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0390",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Devita MA, et al. Findings of the first consensus conference on medical emergency teams. Crit Care Med. 2006;34(9):2463-2478. doi:10.1097/01.CCM.0000235743.38172.6E",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate afferent limb failure (detection and activation) from efferent limb failure (response delivery) in rapid response systems.",
      "distractorExclusionNotes": "Strongest distractor 'Failure of the efferent limb of the rapid response system, characterized by inad' excluded: The efferent team was never called; failure of bedside recognition and activation is an afferent limb defect.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0391",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Inouye SK, et al. Preventing falls in hospitalized patients: state of the science. Clin Geriatr Med. 2010;26(4):683-705. doi:10.1016/j.cger.2010.07.005",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that physical restraints are ineffective at preventing falls and cause severe harm; implement multicomponent alternatives.",
      "distractorExclusionNotes": "Strongest distractor 'All four side rails must be permanently elevated because hospital accreditation ' excluded: Four raised rails constitute physical restraints and lead to dangerous high falls over rails; regulatory bodies advise against them.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0392",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Mueller SK, et al. Hospital-based medication reconciliation practices: a systematic review. Arch Intern Med. 2012;172(14):1057-1069. doi:10.1001/archinternmed.2012.2246",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify medication reconciliation as the required transition-of-care safety process to eliminate unintentional duplications and omissions.",
      "distractorExclusionNotes": "Strongest distractor 'Failure of therapeutic drug monitoring, because serum carvedilol levels should b' excluded: Carvedilol has no routine therapeutic drug level monitoring; the failure is an un-reconciled duplicate prescription at discharge.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0393",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Spence SA. Patients bearing gifts: are there strings attached? BMJ. 2005;331(7531):1527-1529. doi:10.1136/bmj.331.7531.1527",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ethical standards regarding gifts from patients: distinguish nominal tokens of appreciation from high-value boundary violations.",
      "distractorExclusionNotes": "Strongest distractor 'Accept the tickets on the condition that the physician attends the game accompan' excluded: Accompanying a patient on an extravagant luxury trip worsens the boundary violation; high-value gifts must be declined.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0394",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Kachigian C, Felthous AR. Court responses to Tarasoff. J Am Acad Psychiatry Law. 2004;32(3):263-273. PMID: 15515912",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the Tarasoff exception to medical confidentiality for imminent, specific threats against identifiable individuals.",
      "distractorExclusionNotes": "Strongest distractor 'Maintain strict patient confidentiality under HIPAA regulations because disclosi' excluded: HIPAA explicitly exempts disclosures to prevent imminent, serious physical harm; confidentiality does not protect homicide threats.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0395",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Conscientious Objection in Clinical Practice",
    "subtopic": "Balancing Moral Integrity with Patient Abandonment and Timely Referral",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman presents to an outpatient family medicine clinic on a Monday morning requesting emergency contraception. She reports that she had consensual intercourse on Saturday night and the condom broke approximately 36 hours ago. She does not desire pregnancy. The family physician on duty holds deeply held personal religious convictions that life begins at fertilization and considers post-coital hormonal emergency contraception (e.g., levonorgestrel or ulipristal acetate) to be morally unacceptable. Which of the following is the most ethically appropriate course of action for this physician in accordance with professional medical ethics guidelines?",
    "choices": [
      [
        "Respectfully inform the patient of his conscientious objection, provide accurate medical information about emergency contraception options, and ensure a prompt and timely referral to an accessible provider so her care is not delayed",
        "Professional codes of ethics (including the American Medical Association Code of Medical Ethics and the American College of Obstetricians and Gynecologists) recognize a physician's right to conscientious objection\u2014the freedom to decline to provide specific medical procedures that violate their deeply held moral or religious beliefs. However, this right is strictly constrained by duties to the patient: physicians must not impose their beliefs, judge or demean the patient, or obstruct care. Crucially, the objecting physician must provide factual information regarding available options and ensure an immediate, timely referral to an accessible provider who can deliver the service within the critical therapeutic window (e.g., <72-120 hours for emergency contraception) to prevent patient harm and abandonment."
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
    "citation": "American College of Obstetricians and Gynecologists. The limits of conscientious refusal in reproductive medicine. ACOG Committee Opinion No. 385. Obstet Gynecol. 2007;110(5):1201-1208. PMID: 17978144",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Balance physician conscientious objection with the ethical duty of non-abandonment and timely referral within therapeutic windows.",
      "distractorExclusionNotes": "Strongest distractor 'Refuse to provide the prescription, refuse to provide any referral, and counsel ' excluded: Physicians cannot obstruct care or preach moral views; ethical objection mandates facilitating prompt transfer to an willing provider.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0396",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "citation": "Appelbaum PS. Almost a Revolution: Mental Health Law and the Limits of Change. New York, NY: Oxford University Press; 1994:17-58. NLM ID: 9425424",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply legal criteria for involuntary commitment (imminent danger to self/others or grave disability due to mental illness).",
      "distractorExclusionNotes": "Strongest distractor 'Allow the patient to sign out against medical advice (AMA) because he demonstrat' excluded: Orientation does not establish capacity when severe psychosis dictates imminent suicide; AMA discharge is legally and medically invalid.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0397",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Palliative Care Ethics & End-of-Life Management",
    "subtopic": "Doctrine of Double Effect in Palliative Symptom Management",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with metastatic stage IV non-small cell lung cancer with extensive bone metastases and carcinomatous lymphangitic spread is enrolled in inpatient hospice care. He experiences excruciating, refractory bone pain and severe air hunger (dyspnea at rest) that are inadequately controlled despite an intravenous morphine infusion of 10 mg/hour. His respiratory rate is 28/min with shallow accessory muscle use and facial grimacing. His daughter, who is his designated healthcare proxy, pleads with the palliative care physician to increase the morphine infusion to relieve his suffering. A newly licensed nurse expresses hesitation, stating: 'If we increase the morphine infusion to 20 mg/hour, his breathing might slow down further and it could hasten his death, which would be physician-assisted euthanasia.' Which of the following ethical doctrines justifies increasing the opioid dose to alleviate this patient's suffering?",
    "choices": [
      [
        "The doctrine of double effect, which provides that an intervention intended to achieve a morally good outcome (relieving severe pain and dyspnea) is ethically permissible even if it carries a foreseeable, unintended secondary risk (hastening death)",
        "The doctrine of double effect is a fundamental ethical and legal framework in palliative medicine. It states that an action having two foreseen effects\u2014one good (relief of refractory suffering) and one bad (potential respiratory depression or hastening of death)\u2014is ethically permissible provided that: (1) the nature of the act itself is morally good or neutral (administering analgesia); (2) the clinician's primary intention is solely to achieve the good effect; (3) the bad effect is not the means to achieve the good effect (death is not the tool used to end pain); and (4) there is a proportionate, compelling reason to risk the bad effect. Furthermore, empirical palliative evidence demonstrates that appropriately titrated opioids for severe dyspnea and pain do not hasten death and often improve functional respiration."
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
    "citation": "Quill TE, Dresser R, Brock DW. The rule of double effect\u2014a critique of its role in end-of-life decision making. N Engl J Med. 1997;337(24):1768-1771. doi:10.1056/NEJM199712113372413",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the doctrine of double effect to distinguish aggressive palliative symptom management from active euthanasia.",
      "distractorExclusionNotes": "Strongest distractor 'Voluntary active euthanasia doctrine, which permits clinicians to terminate life' excluded: Double effect distinguishes intending symptom relief from intending death; euthanasia involves deliberate termination of life.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0398",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
    "distractorExclusion": "The highest-risk period is days 1\u201314; a 60-day follow-up fails to intercept early decompensations.",
    "citation": "Naylor MD, et al. Comprehensive discharge planning and home follow-up of hospitalized elders: a randomized clinical trial. JAMA. 1999;281(7):613-620. doi:10.1001/jama.281.7.613",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify core evidence-based components of transitional care interventions that reduce 30-day hospital readmission.",
      "distractorExclusionNotes": "Strongest distractor 'Scheduling an outpatient routine cardiology clinic appointment 60 days following' excluded: The highest-risk period is days 1\u201314; a 60-day follow-up fails to intercept early decompensations.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0399",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
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
      "verdict": "REJECT",
      "rejectionNotes": "Planted rejection example for quality screening: stem directly reveals clinical diagnosis (brain death) and distractors are absurd non-sequiturs lacking clinical parallelism.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "reviewStatus": "REJECTED",
    "rejectionReason": "Planted rejection example for quality screening: stem directly reveals clinical diagnosis (brain death) and distractors are absurd non-sequiturs lacking clinical parallelism."
  },
  {
    "code": "op-c-s3-0400",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Clinical Uncertainty & Guideline Controversy",
    "subtopic": "Blood Pressure Targets in Frail Institutionalized Elderly",
    "provisionalDifficulty": 5,
    "stem": "An 85-year-old woman residing in a long-term care nursing facility is evaluated during routine monthly medical director rounds. She has a history of moderate vascular dementia, severe osteoporosis with a prior non-vertebral femoral neck fracture 8 months ago, urinary urge incontinence, and primary hypertension. She ambulates slowly with a rolling walker and requires assistance with bathing and dressing. Over the past 2 months, she has had two witnessed unwitnessed slip-and-fall episodes without acute fractures. Her current medications are amlodipine 5 mg daily and donepezil 10 mg daily. In the nursing facility, her seated blood pressure averages 136/78 mm Hg, and her standing blood pressure after 3 minutes is 122/68 mm Hg with transient lightheadedness. A newly appointed clinical pharmacist cites the 2017 ACC/AHA Hypertension Guidelines and recommends adding low-dose chlorthalidone or lisinopril to achieve an intensive systolic blood pressure target of <120 mm Hg, citing cardiovascular event reduction data from the SPRINT trial. Conversely, the facility geriatrician recommends maintaining her current regimen without intensification, citing the American Geriatrics Society (AGS) and European consensus guidelines that recommend a systolic target of 130\u2013140 mm Hg in frail institutionalized older adults with documented orthostatic instability to prevent falls and syncopal fractures. Which of the following best reflects the clinical and guideline consensus regarding systolic blood pressure targets in this specific patient population?",
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
        "Trials like HYVET demonstrated clear reductions in stroke and heart failure with treatment of hypertension in adults \u226580, but targeting <120 in frail patients remains controversial."
      ],
      [
        "Orthostatic hypotension is an absolute contraindication to the use of any calcium channel blockers in nursing home residents",
        "Amlodipine is not absolutely contraindicated in orthostasis, although vasodilators and diuretics must be monitored with caution."
      ]
    ],
    "shortestValidSolution": "Conflicting guideline recommendations (ACC/AHA <120-130 vs AGS 130-140 in frail elderly) due to exclusion of nursing home/dementia patients from SPRINT.",
    "necessaryInference": "Identify unresolved clinical controversy between intensive vs conservative BP targets in frail nursing home residents.",
    "strongestDistractor": "All clinical guidelines unanimously mandate lowering systolic blood pressure to <120 mm Hg in all adults over age 80 regardless of frailty or falls",
    "distractorExclusion": "Geriatric consensus guidelines explicitly recommend higher targets (130\u2013140 mmHg) to prevent orthostatic syncope and falls.",
    "citation": "Williamson JD, et al. SPRINT Research Group. Intensive vs Standard Blood Pressure Control and Cardiovascular Disease Outcomes in Adults Aged \u226575 Years: A Randomized Clinical Trial. JAMA. 2016;315(24):2673-2682. doi:10.1001/jama.2016.7050",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Item addresses genuine clinical uncertainty: optimal BP targets in frail nursing home residents with orthostatic hypotension and fall history.",
      "distractorExclusionNotes": "Distractors represent dogmatic extremes unsupported by conflicting geriatric vs cardiovascular guidelines.",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Clinical and guideline controversy unresolved: optimal systolic blood pressure targets in frail elderly institutionalized adults with high fall risk remain conflicting between intensive ACC/AHA guidelines (<120 mmHg) and AGS/geriatric consensus (<140 mmHg).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "reviewStatus": "UNRESOLVED",
    "rejectionReason": "Clinical and guideline controversy unresolved: optimal systolic blood pressure targets in frail elderly institutionalized adults with high fall risk remain conflicting between intensive ACC/AHA guidelines (<120 mmHg) and AGS/geriatric consensus (<140 mmHg)."
  }
];
