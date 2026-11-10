import sys

# Step 3 Batch 16 Part 1 (items 0376 to 0387)
# Focus: Medical Ethics, Informed Consent, Decision-Making Capacity, Patient Safety

items_b16_p1 = [
  {
    "code": "op-c-s3-0376",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "Appelbaum PS. Assessment of patients' competence to consent to treatment. N Engl J Med. 2007;357(18):1834-1840. doi:10.1056/NEJMcp074045"
  },
  {
    "code": "op-c-s3-0377",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Surrogate Decision-Making",
    "subtopic": "Substituted Judgment vs Best Interests Standard",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman is admitted to the intensive care unit in septic shock and acute respiratory distress syndrome secondary to fecal peritonitis from a ruptured diverticulum. Following emergency laparotomy, she remains intubated, comatose, and dependent on high-dose norepinephrine and vasopressin. She has developed multiorgan failure, including anuric acute kidney injury and lactic acidosis (lactate 9.2 mmol/L). She did not execute a written advance directive or durable power of attorney for healthcare. Her legal surrogate is her husband of 42 years. When the critical care team discusses initiating continuous renal replacement therapy and performing a tracheostomy, the husband states: 'My wife and I talked about this extensively when her sister died on life support. She always told me that if she were ever in a coma on breathing machines with no realistic chance of returning to an independent life, she never wanted machines to prolong her dying. I love her dearly, but I know she would never want dialysis or long-term life support under these conditions. We must transition to comfort measures.' The patient's adult son arrives and insists: 'Dad is grieving and not thinking straight. I want everything done for my mom, including kidney dialysis.' Which of the following principles guides the surrogate's legal and ethical authority, and how should the team proceed?",
    "choices": [
      [
        "The husband is the primary legal surrogate and is applying the substituted judgment standard; honor his request to withhold dialysis and transition to comfort-focused care",
        "In the absence of a designated durable power of attorney for healthcare, state statutes establish a clear hierarchy of default surrogate decision-makers (typically: spouse > adult children > parents > adult siblings). The husband holds legal priority over the adult son. Furthermore, when making medical decisions for an incapacitated patient, the surrogate must first apply the 'substituted judgment standard'—making the decision the patient would have made for herself based on her previously expressed values and statements, rather than the surrogate's or family's personal wishes. If the patient's prior wishes are unknown, only then does the surrogate apply the 'best interests standard.' Because the husband holds legal priority and articulates a clear substituted judgment, his decision controls."
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
    "citation": "Lo B. Resolving Ethical Dilemmas: A Guide for Clinicians. 6th ed. Philadelphia, PA: Wolters Kluwer; 2019:85-98. NLM ID: 101740054"
  },
  {
    "code": "op-c-s3-0378",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "Sabatino CP. Advance directives and advance care planning: legal and policy issues. Generations. 2012;36(3):36-43. PMID: 23213192"
  },
  {
    "code": "op-c-s3-0379",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "Moskop JC. Informed consent in the emergency department. Emerg Med Clin North Am. 1999;17(2):327-340. doi:10.1016/s0733-8627(05)70062-8"
  },
  {
    "code": "op-c-s3-0380",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "English A, Ford CA. More states authorize minors' consent for STI prevention. J Adolesc Health. 2013;52(5):657-659. doi:10.1016/j.jadohealth.2013.02.012"
  },
  {
    "code": "op-c-s3-0381",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "Santelli JS, et al. Adolescent health and the law. Pediatrics. 2014;133(5):934-942. doi:10.1542/peds.2013-3398"
  },
  {
    "code": "op-c-s3-0382",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
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
    "citation": "Gillon R. Autonomy and the principle of respect for autonomy. BMJ. 1985;290(6484):1806-1809. doi:10.1136/bmj.290.6484.1806"
  },
  {
    "code": "op-c-s3-0383",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
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
    "citation": "Gallagher TH, et al. Patients' and physicians' attitudes regarding the disclosure of medical errors. JAMA. 2003;289(8):1001-1007. doi:10.1001/jama.289.8.1001"
  },
  {
    "code": "op-c-s3-0384",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
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
    "citation": "DesRoches CM, et al. Physicians' perceptions, preparedness for reporting, and experiences related to impaired and incompetent colleagues. JAMA. 2010;304(2):187-193. doi:10.1001/jama.2010.952"
  },
  {
    "code": "op-c-s3-0385",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Legal & Ethical Issues",
    "topic": "Determination of Brain Death & Organ Donation",
    "subtopic": "Neurologic Death Criteria & First-Person Authorization",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman is admitted to the neurointensive care unit after suffering a catastrophic traumatic brain injury in a motor vehicle collision. After 48 hours of resuscitation, her core temperature is 37.2°C, systolic blood pressure is maintained at 115 mm Hg on phenylephrine, and all sedative infusions were discontinued 36 hours ago with undetectable serum drug levels. Neurologic examination demonstrates a Glasgow Coma Scale score of 3, fixed dilated pupils (8 mm) non-reactive to light, absent corneal reflexes, absent oculocephalic and oculovestibular (cold caloric) reflexes, and absent cough and gag reflexes. An apnea test is performed: pre-oxygenation with 100% O2 for 10 minutes, disconnection from mechanical ventilator with insufflation of 100% O2 via tracheal catheter; after 8 minutes, the patient exhibits zero respiratory effort, and arterial blood gas demonstrates pH 7.18 and PaCO2 64 mm Hg (baseline PaCO2 was 38 mm Hg). Brain death is formally certified. Review of state motor vehicle registry records reveals that the patient registered as a designated organ donor (first-person authorization). Her parents arrive and state: 'Her heart is still beating, so she is not dead. We forbid anyone from taking her organs.' Which of the following is the most appropriate next step?",
    "choices": [
      [
        "Explain to the parents that brain death represents the complete, irreversible cessation of all brain function and is legally and clinically equivalent to death, notify the regional organ procurement organization (OPO), and honor the patient's legally binding first-person donor authorization",
        "Under the Uniform Determination of Death Act (UDDA), death can be determined by either irreversible cessation of circulatory and respiratory functions OR irreversible cessation of all functions of the entire brain, including the brainstem. Brain death IS legal and clinical death. Once brain death criteria are met (coma, absence of brainstem reflexes, positive apnea test with PaCO2 ≥ 60 mm Hg or ≥ 20 mm Hg above baseline with no respiratory drive, in the absence of hypothermia, shock, or CNS depressants), the patient is declared deceased. Under the Uniform Anatomical Gift Act (UAGA), a patient's documented first-person authorization (e.g., driver's license donor registry) constitutes a legally binding anatomical gift that family members have no legal authority to revoke or override."
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
    "citation": "Greer DM, et al. Pediatric and Adult Brain Death/Death by Neurologic Criteria Consensus Guideline: Report of the AAN, AAP, CNS, and SCCM. Neurology. 2023;101(24):1112-1132. doi:10.1212/WNL.0000000000207740"
  },
  {
    "code": "op-c-s3-0386",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
    "topic": "Root Cause Analysis & Systems Safety",
    "subtopic": "Active vs Latent Errors and Swiss Cheese Model",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old hospitalized patient with atrial fibrillation receives a tenfold overdose of oral digoxin (1.25 mg instead of 0.125 mg) and develops severe symptomatic bradycardia (heart rate 32/min) and hyperkalemia (potassium 6.2 mEq/L) requiring digoxin-specific antibody fragments (Fab) in the intensive care unit. A multidisciplinary root cause analysis (RCA) committee investigates the incident. The committee discovers that: (1) 0.125 mg and 1.25 mg digoxin ampules/tablets are stored side-by-side in identical blue packaging in the automated dispensing cabinet; (2) the wireless barcode scanner on the nursing unit had been malfunctioning for 3 weeks and nurses routinely bypassed scanning; (3) the unit was staffed at 50% capacity due to unexpected sick calls; and (4) the electronic order entry screen had no built-in dosage alerts for digoxin. The nursing manager demands that the nurse who administered the medication be terminated for gross negligence. Which of the following best represents the fundamental philosophy of a Root Cause Analysis in healthcare safety?",
    "choices": [
      [
        "The incident resulted primarily from multiple latent system vulnerabilities (look-alike packaging, broken scanner, understaffing, absent EHR decision support) aligning to permit human error, and remediation must focus on redesigning systems rather than blaming the individual nurse",
        "Root Cause Analysis (RCA) is a structured, retrospective method used to analyze serious adverse events (sentinel events). Based on Reason's 'Swiss cheese model' of accident causation, adverse events rarely stem from a single negligent act (active failure by frontline operator); rather, they occur when multiple latent system failures (holes in the defenses—such as look-alike packaging, unmaintained equipment, chronic understaffing, and absent electronic hard stops) align simultaneously. Effective patient safety systems focus on redesigning processes, engineering forcing functions, and building resilient safeguards, rather than punishing individual clinicians for human slips."
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
    "citation": "Reason J. Human error: models and management. BMJ. 2000;320(7237):768-770. doi:10.1136/bmj.320.7237.768"
  },
  {
    "code": "op-c-s3-0387",
    "exam": "Step 3",
    "subject": "Medical Ethics & Professionalism",
    "system": "Patient Safety & Quality Improvement",
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
    "citation": "Marx D. Patient Safety and the Just Culture: A Primer for Health Care Executives. New York, NY: Columbia University; 2001. NLM ID: 101188358"
  }
]
