import json

items_s3_b20_part1 = [
  {
    "code": "op-c-s3-0476",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Decision-Making for Unrepresented Incapacitated Patients ('Unbefriended')",
    "subtopic": "Multidisciplinary Ethics Committee Review, Institutional Review vs Sole Attending Autonomy, Legal Guardianship",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old unhoused man is brought to the emergency department in septic shock secondary to extensive necrotizing fasciitis of the right lower extremity. He is obtunded, encephalopathic, and unable to participate in medical decision-making. Emergency above-knee amputation is performed under the doctrine of emergency consent. Postoperatively in the intensive care unit, the hospital social work team conducts an exhaustive search involving local shelters, law enforcement databases, fingerprint analysis, and public records, which reveals no advance directive, no designated healthcare proxy, and no identifiable family members or close surrogate decision-makers ('unrepresented' or 'unbefriended' patient). On postoperative day 14, the patient remains in a vegetative comatose state on mechanical ventilation, with severe hypoxic-ischemic brain injury confirmed by electroencephalography and magnetic resonance imaging. The primary surgical attending believes that prolonged life support is non-beneficial and wishes to withdraw mechanical ventilation and transition to comfort-focused palliative care.\n\nAccording to national bioethics consensus guidelines (such as the American Thoracic Society and AMA Code of Medical Ethics), which of the following represents the most ethically appropriate mechanism to make this major end-of-life decision for this unrepresented patient?",
    "choices": [
      [
        "Convening a formal multidisciplinary hospital ethics committee consultation or institutional review committee to review the clinical prognosis, evaluate proportional benefit versus burden, and provide consensus authorization before withdrawing life-sustaining therapy",
        "Decision-making for unrepresented ('unbefriended') incapacitated patients—those who lack decision-making capacity, have no advance directive, and possess no surrogate decision-maker—presents one of the most profound ethical challenges in acute medicine: (1) REJECTING SOLE ATTENDING AUTONOMY: Landmark policy statements from the American Thoracic Society (ATS), American College of Physicians (ACP), and AMA Code of Medical Ethics Opinion 2.1.2 explicitly advise AGAINST allowing a single attending physician to act alone as the sole decision-maker for life-or-death decisions. Unilateral decisions by single physicians are vulnerable to idiosyncratic biases, conflicts of interest (e.g., bed turnover pressures), and arbitrary variability in end-of-life philosophy. (2) INSTITUTIONAL MULTIDISCIPLINARY ETHICS REVIEW: The recognized ethical gold standard is a structured institutional mechanism—such as a multidisciplinary institutional ethics committee or specialized surrogate decision committee (comprising physicians, nurses, social workers, chaplains, and community patient advocates). This committee conducts an independent audit of the clinical record, verifies that surrogate searches were exhaustive, ensures prognostic consensus, and applies the 'best interests' standard to weigh therapeutic burdens versus benefits. (3) LEGAL APPOINTMENT: In jurisdictions where statutory law mandates judicial oversight, the hospital petitions for an independent, court-appointed legal guardian. (4) DISTRACTOR ANALYSIS: Emergency implied consent covers immediate life-saving surgery (such as the initial amputation) but does NOT authorize elective withdrawal of life support weeks later; delegating the choice to hospital risk management transforms a clinical-ethical judgment into a legal defense calculation."
      ],
      [
        "Allowing the primary surgical attending physician to unilaterally order withdrawal of life-sustaining treatment without external peer or ethics review under the doctrine of clinical autonomy",
        "Unilateral decision-making by a single attending physician without independent ethics review is rejected by national bioethics guidelines due to idiosyncratic bias and lack of accountability."
      ],
      [
        "Applying the doctrine of emergency implied consent to authorize withdrawal of mechanical ventilation",
        "Emergency implied consent authorizes immediate, life-preserving treatment when capacity is absent and life is threatened; it never authorizes elective cessation of life-sustaining measures."
      ],
      [
        "Delegating the end-of-life decision exclusively to the hospital risk management department to minimize institutional liability",
        "Hospital risk management addresses legal risk and institutional liability; end-of-life decisions require multidisciplinary clinical and ethical evaluation centered on patient best interests."
      ],
      [
        "Maintaining maximal invasive mechanical ventilation and hemodialysis indefinitely regardless of futility until the patient experiences spontaneous asystole",
        "Indefinite prolonged non-beneficial invasive treatment in a patient with irreversible devastating brain injury causes prolonged indignity and physiological suffering, violating non-maleficence."
      ]
    ],
    "rationale": "For unrepresented ('unbefriended') incapacitated patients facing major non-emergent treatment decisions (such as withdrawing life-sustaining therapy), ethical guidelines reject unilateral decision-making by a single physician. Instead, a multidisciplinary hospital ethics committee consultation, institutional surrogate committee, or court-appointed legal guardian is required to ensure independent review based on the patient's best interests.",
    "metadata": {
      "shortSolution": "End-of-life decisions in unrepresented incapacitated patients require multidisciplinary hospital ethics committee or court-appointed guardian review; single attending cannot act alone.",
      "competingChoice": "Allowing the primary surgical attending physician to unilaterally order withdrawal of life-sustaining treatment without external peer or ethics review under the doctrine of clinical autonomy",
      "exclusionFinding": "Sole attending authority is explicitly rejected by national bioethics consensus (ATS, ACP, AMA) to prevent idiosyncratic bias and protect vulnerable patients.",
      "pedagogicalValue": "Mastering the ethical and legal frameworks governing healthcare decision-making for unrepresented ('unbefriended') incapacitated patients.",
      "citations": [
        "White DB, Evans LR, Bautista CA, et al. Treatment decision making for unrepresented patients in the ICU. An official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2016;194(1):100-108. PMID: 27367885.",
        "American Medical Association. Decisions for patients who lack capacity: Code of Medical Ethics Opinion 2.1.2. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Unrepresented incapacitated patient end-of-life decision -> multidisciplinary hospital ethics committee review or court-appointed guardian; avoid unilateral physician decision.",
      "strongestCompetitor": "Allowing the primary surgical attending physician to unilaterally order withdrawal of life-sustaining treatment without external peer or ethics review under the doctrine of clinical autonomy",
      "exclusionFinding": "Single attending decision-making lacks ethical oversight and violates national ATS/AMA standards for vulnerable unbefriended patients.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0477",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Durable Power of Attorney for Healthcare (DPOA) Hierarchy and Legal Precedence",
    "subtopic": "Designated Healthcare Proxy vs Estranged Legal Spouse and Non-Designated Biological Family",
    "provisionalDifficulty": 5,
    "stem": "A 55-year-old corporate executive sustains catastrophic polytrauma, multiple skull fractures, and severe traumatic brain injury with uncal herniation following a high-speed motor vehicle collision. In the trauma resuscitation bay, he is comatose (Glasgow Coma Scale 3), intubated, and has an acute expanding right-sided epidural hematoma with a 12-mm midline shift. The neurosurgery team recommends immediate decompressive craniectomy. Three years ago, when fully competent, the patient executed a legally valid, notarized Durable Power of Attorney for Healthcare naming his long-time life partner of 9 years as his sole healthcare proxy. The partner arrives with the executed document and gives informed consent for emergent surgical decompression. Simultaneously, the patient's legally married but estranged wife (from whom he separated 5 years ago, with contested divorce proceedings ongoing) arrives in the emergency department. She produces a marriage certificate, asserts that as the legal spouse she holds statutory seniority, and demands that the surgical team cancel the craniectomy and withdraw care.\n\nWhich of the following describes the legally and ethically correct surrogate authority in this situation?",
    "choices": [
      [
        "The life partner designated in the legally executed Durable Power of Attorney for Healthcare holds exclusive legal and ethical decision-making authority, superseding the estranged legal spouse and all biological family members",
        "The legal and ethical doctrine of surrogate decision-making establishes an unequivocal hierarchy of authority: (1) PRIMACY OF THE DESIGNATED HEALTHCARE PROXY: An individual appointed by the patient in a legally valid Durable Power of Attorney for Healthcare (DPOA-HC) or healthcare proxy document represents the patient's explicit, competent exercise of self-determination. The designated agent's authority SUPERCEDES all statutory default surrogate hierarchies—including legally married spouses, adult children, parents, and siblings. (2) ROLE OF STATUTORY DEFAULT SURROGATES: State statutory default surrogate hierarchies (which typically place the legal spouse first) apply ONLY when the patient has NOT executed a valid advance directive designating a proxy. The existence of a valid, executed DPOA document completely renders statutory default rankings inapplicable. (3) RESOLVING ESTRANGEMENT CONFLICTS: Even if the estranged spouse claims legal marriage, pending divorce or separation does not give her authority to override the patient's designated proxy. The clinical team is ethically and legally obligated to honor the decision of the designated partner (who consents to life-saving craniectomy). (4) DISTRACTOR ANALYSIS: Transferring authority to an estranged spouse violates the patient's express constitutional right to designate his surrogate; postponing surgery for a court hearing will cause irreversible herniation and brain death."
      ],
      [
        "The legal spouse holds automatic statutory legal priority over any designated non-marital partner until a formal final decree of divorce is issued by a family court",
        "A designated healthcare proxy appointed via a valid DPOA legally supersedes a spouse; statutory spousal priority applies only in the absence of a designated proxy."
      ],
      [
        "Because the patient's family members disagree, all surrogate decision-making is legally suspended, and the clinical team must delay surgery until a judge appoints a conservator",
        "Delaying life-saving craniectomy for epidural hematoma and uncal herniation causes brain death; the partner possesses clear, uncompromised legal proxy authority."
      ],
      [
        "The life partner and the legal spouse must reach unanimous consensus, and if consensus cannot be reached, the hospital risk management officer casts the deciding vote",
        "Surrogate authority is not shared between an appointed proxy and an estranged spouse; the designated proxy possesses sole authority, and risk managers do not make clinical decisions."
      ],
      [
        "The trauma surgeon must override both individuals and proceed under emergency doctrine without considering either surrogate's input",
        "When a legally appointed healthcare proxy is physically present and immediately available with valid documentation, the proxy provides informed consent; emergency doctrine applies only when surrogates are unavailable."
      ]
    ],
    "rationale": "A legally executed Durable Power of Attorney for Healthcare (DPOA) grants the designated healthcare proxy exclusive decision-making authority, superseding statutory default hierarchies (including legal spouses and biological family). The designated partner's informed consent for emergent craniectomy is legally binding and supersedes the estranged spouse's objections.",
    "metadata": {
      "shortSolution": "Valid DPOA-designated proxy has exclusive legal and ethical authority, superseding estranged legal spouse and default statutory hierarchies.",
      "competingChoice": "The legal spouse holds automatic statutory legal priority over any designated non-marital partner until a formal final decree of divorce is issued by a family court",
      "exclusionFinding": "Statutory spousal priority applies only when no proxy was appointed; a legally designated proxy in a valid DPOA always takes legal precedence.",
      "pedagogicalValue": "Understanding the legal hierarchy of surrogate decision-makers and the absolute legal primacy of a designated Durable Power of Attorney for Healthcare.",
      "citations": [
        "Sabatino CP. Ten legal myths about advance medical directives. BIFOCAL. 2010;32(1):1-10.",
        "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "DPOA-appointed proxy supersedes estranged legal spouse -> partner's consent is valid and exclusive.",
      "strongestCompetitor": "The legal spouse holds automatic statutory legal priority over any designated non-marital partner until a formal final decree of divorce is issued by a family court",
      "exclusionFinding": "Default spousal priority only functions as a fallback when no DPOA exists; executed proxy documentation always supersedes marital status.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0478",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Ethical Standards for Surrogate Decision-Making: Substituted Judgment vs Best Interests",
    "subtopic": "Prioritizing Substituted Judgment Based on Patient's Articulated Values over Surrogate's Personal Beliefs",
    "provisionalDifficulty": 5,
    "stem": "An 81-year-old woman with severe multi-infarct vascular dementia, advanced chronic kidney disease (baseline eGFR 14 mL/min/1.73 m2), and severe frailty is admitted to the intensive care unit with urosepsis, acute respiratory distress syndrome, and severe oliguric acute kidney injury (blood urea nitrogen 118 mg/dL, serum creatinine 6.4 mg/dL, potassium 6.2 mEq/L). She is intubated and comatose. The nephrology and critical care teams discuss initiating continuous renal replacement therapy (CRRT) and placing a central dialysis catheter. The patient's adult son is her legally designated healthcare proxy. In discussing the patient's values, the son states: 'Two years ago, after my aunt died on dialysis, my mother sat down with our family and made us promise that if she ever developed advanced dementia and could no longer live independently or recognize her family, she never wanted dialysis, feeding tubes, or prolonged machines to keep her heart beating. But doctor, I am a devout believer in miracles, and my personal religious faith teaches that life must be preserved at any cost. Therefore, as her proxy, I demand that you place the dialysis line and start dialysis immediately.'\n\nWhich of the following reflects the ethical and legal standard that governs the son's authority as a surrogate decision-maker in this clinical scenario?",
    "choices": [
      [
        "The surrogate is ethically and legally bound to apply the principle of substituted judgment (deciding what the patient would have chosen based on her explicit prior values and statements), rather than substituting his own personal religious or moral beliefs",
        "Surrogate decision-making is governed by a strict ethical and legal hierarchy designed to preserve the incapacitated patient's self-determination (autonomy): (1) SUBSTITUTED JUDGMENT PRINCIPLE: When an incapacitated patient has previously expressed specific wishes, values, or goals of care while competent (as this patient did explicitly regarding dialysis and prolonged life support in dementia), the surrogate's legal and ethical duty is to apply SUBSTITUTED JUDGMENT. The surrogate must step into the patient's shoes and voice the decision the PATIENT would make for herself, not the decision the surrogate prefers. A surrogate has no ethical or legal right to impose his own personal religious beliefs or moral preferences over the patient's known, authentic wishes. (2) BEST INTERESTS STANDARD: The 'best interests' standard applies ONLY when the patient's prior wishes, values, and beliefs are completely unknown or unexpressed. Under best interests, the surrogate and clinical team weigh the objective benefits versus burdens of treatment from the perspective of a reasonable person. (3) MANAGING SURROGATE CONFLICT: The clinical team must compassionately explore the son's emotional distress, remind him gently that his role is to be his mother's 'voice' rather than deciding for himself, and involve the hospital ethics committee or palliative care team if he continues to demand interventions that contradict his mother's explicit choices."
      ],
      [
        "The designated healthcare proxy possesses absolute discretionary legal authority to make any medical decision he chooses based on his personal moral or religious convictions",
        "A surrogate's authority is fiduciary, not absolute; surrogates are legally and ethically bound to execute the patient's wishes (substituted judgment), not their own personal desires."
      ],
      [
        "The son is required to follow the 'best interests' standard regardless of his mother's prior verbal statements because she did not complete a notarized living will",
        "Substituted judgment is not restricted to notarized written documents; reliable, repeated verbal statements to family constitute clear evidence of patient values that govern decisions."
      ],
      [
        "The clinical team must immediately petition a probate court to terminate the son's proxy authority and appoint the hospital chief medical officer as legal guardian",
        "Immediately petitioning the court without compassionate dialogue, ethics consultation, and palliative mediation is adversarial and premature."
      ],
      [
        "Because hemodialysis is technically feasible, the principle of beneficence mandates that the nephrologist initiate CRRT regardless of surrogate or patient preferences",
        "Beneficence cannot be used to force unwanted, invasive interventions onto an unwilling patient; patient autonomy (via substituted judgment) governs the refusal of treatment."
      ]
    ],
    "rationale": "Surrogate decision-makers are legally and ethically bound to apply the principle of 'substituted judgment'—making the choice the patient would have made based on her explicit prior statements and values—rather than imposing their own personal beliefs. The 'best interests' standard applies only when patient preferences are unknown.",
    "metadata": {
      "shortSolution": "Surrogate must apply substituted judgment (patient's known wishes/values) rather than imposing his own personal religious beliefs.",
      "competingChoice": "The designated healthcare proxy possesses absolute discretionary legal authority to make any medical decision he chooses based on his personal moral or religious convictions",
      "exclusionFinding": "Surrogate proxy authority is a fiduciary duty to honor the patient's wishes (substituted judgment), not an absolute license for the surrogate's personal beliefs.",
      "pedagogicalValue": "Differentiating substituted judgment from best interests and managing surrogate conflicts where personal beliefs clash with known patient wishes.",
      "citations": [
        "Sulmasy DP, Snyder L. Substituted judgment: healthcare decisions for incapacitated patients. Ann Intern Med. 2010;153(12):837-841. PMID: 21173418.",
        "Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019."
      ]
    },
    "critique": {
      "shortestValidSolution": "Known prior patient wishes -> surrogate must apply substituted judgment (voice mother's choice), not his personal faith.",
      "strongestCompetitor": "The designated healthcare proxy possesses absolute discretionary legal authority to make any medical decision he chooses based on his personal moral or religious convictions",
      "exclusionFinding": "Surrogates have a fiduciary duty to represent patient values, not unilateral authority to impose personal preferences.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0479",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Clinician Conscientious Objection and Professional Duty of Non-Abandonment",
    "subtopic": "Right to Refusal of Participation in Elective Morally Contested Care Coupled with Mandatory Timely Referral",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman (gravida 3, para 3) presents to an outpatient family medicine clinic to establish care and discuss permanent contraception. She has three healthy children, is fully competent, and states that she and her husband have decided their family is complete. After discussing various contraceptive options, she explicitly requests a referral to a gynecologist for elective bilateral laparoscopic tubal ligation. The examining family physician holds deeply rooted personal and moral beliefs against voluntary surgical sterilization. The physician believes that performing or facilitating sterilization conflicts fundamentally with his conscience.\n\nAccording to national medical ethics guidelines (such as the American College of Obstetricians and Gynecologists [ACOG] and the AMA Code of Medical Ethics), which of the following represents the most ethically appropriate course of action for this physician?",
    "choices": [
      [
        "Respectfully inform the patient of his conscientious objection without preaching or moral judgment, provide medically accurate information about sterilization, and facilitate a timely referral to another accessible, qualified healthcare provider who can fulfill her request",
        "The ethical balance between a physician's moral integrity and a patient's access to legitimate medical care is governed by the principles of conscientious refusal and non-abandonment (ACOG Committee Opinion No. 385; AMA Code of Medical Ethics Opinion 1.1.7): (1) RIGHT TO CONSCIENTIOUS OBJECTION: Healthcare providers possess a recognized moral right to refrain from performing, assisting in, or directly participating in elective medical procedures that violate their deeply held religious or moral conscience (e.g., elective sterilization, abortion, medical aid in dying). (2) MANDATORY LIMITS ON OBJECTION: Conscientious objection is not absolute. Clinicians are ethically and professionally prohibited from: (a) Imposing moral judgment, lecturing, or shaming the patient; (b) Misrepresenting clinical evidence or exaggerating risks to dissuade the patient; (c) Obstructing or delaying patient care; (d) Abandoning the patient. (3) DUTY OF REFERRAL & CONTINUITY: The physician has an affirmative professional obligation to provide complete, unbiased medical information and FACILITATE A TIMELY, ACCESSIBLE REFERRAL to another qualified clinician willing to perform the procedure. In emergent, life-threatening scenarios (e.g., severe obstetric hemorrhage), the duty to provide emergency care supersedes conscientious objection, and clinicians must stabilize the patient regardless of conscience."
      ],
      [
        "Refuse to refer the patient to another provider because facilitating a referral makes the physician morally complicit in the sterilizing procedure",
        "Refusing to refer abandons the patient, obstructs legitimate healthcare access, and violates professional ethics codes mandating timely referral."
      ],
      [
        "Counsel the patient that bilateral tubal ligation carries unacceptable risks of regret and chronic pelvic pain, and refuse to discuss permanent contraception further",
        "Misrepresenting medical risks to dissuade a patient based on personal moral objections violates truthfulness, beneficence, and informed consent."
      ],
      [
        "Inform the patient that federal law requires both her and her spouse to undergo mandatory 6-month psychological evaluations prior to scheduling elective sterilization",
        "Fabricating non-existent legal requirements to obstruct reproductive autonomy is deceptive, unethical, and legally impermissible."
      ],
      [
        "Perform the bilateral laparoscopic tubal ligation procedure himself because professional licensure mandates that physicians set aside all personal conscience",
        "Physicians are not compelled to perform elective, non-emergency procedures that violate their conscience, provided timely referral to another willing provider is made."
      ]
    ],
    "rationale": "A physician may conscientiously object to participating in an elective procedure that violates their moral beliefs, but they are ethically required to inform the patient promptly without judgment, provide accurate information, and facilitate a timely referral to another willing provider to ensure continuity of care and non-abandonment.",
    "metadata": {
      "shortSolution": "Conscientious objection requires respectful disclosure + unbiased counseling + timely referral to another qualified, willing provider.",
      "competingChoice": "Refuse to refer the patient to another provider because facilitating a referral makes the physician morally complicit in the sterilizing procedure",
      "exclusionFinding": "Refusing to refer constitutes patient abandonment and obstruction of care, violating professional codes (AMA, ACOG).",
      "pedagogicalValue": "Mastering the boundaries of conscientious objection, non-abandonment, and mandatory referral obligations in reproductive and elective healthcare.",
      "citations": [
        "American College of Obstetricians and Gynecologists. The limits of conscientious refusal in reproductive medicine. ACOG Committee Opinion No. 385. Obstet Gynecol. 2007;110(5):1201-1208. PMID: 17978146.",
        "American Medical Association. Physician objection to treatment: Code of Medical Ethics Opinion 1.1.7. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Conscientious objection permitted for elective care, but mandates respectful disclosure and timely referral to a willing provider.",
      "strongestCompetitor": "Refuse to refer the patient to another provider because facilitating a referral makes the physician morally complicit in the sterilizing procedure",
      "exclusionFinding": "Withholding referral violates duty of non-abandonment and professional ethical codes.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0480",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Tarasoff Duty to Protect and Breach of Confidentiality",
    "subtopic": "Mandatory Notification of Law Enforcement and Identifiable Third Party Facing Credible, Imminent Physical Harm",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old man presents to an outpatient psychiatry clinic for an intake evaluation following an acrimonious divorce. During the interview, he becomes visibly agitated, slams his fists on the desk, and expresses severe rage toward his former supervisor at an accounting firm, whom he blames for getting him fired. The patient states: 'I followed him home from his office yesterday and saw his exact parking spot. I bought a semiautomatic handgun and two loaded magazines from an unlicensed street vendor this morning. Tomorrow evening at 17:30, when he walks to his car in the parking garage, I am going to shoot him dead.' When the psychiatrist attempts to de-escalate the situation and suggests voluntary inpatient psychiatric admission, the patient becomes enraged, screams 'You will never lock me up!', and abruptly storms out of the clinic suite into the street.\n\nUnder legal precedents (the Tarasoff doctrine) and professional ethical standards regarding confidentiality, which of the following represents the psychiatrist's legal and ethical obligation?",
    "choices": [
      [
        "Immediately contact local law enforcement to report the imminent threat and take reasonable steps to warn the identifiable victim directly, as the duty to protect an identifiable third party from imminent, serious physical harm supersedes physician-patient confidentiality",
        "The landmark California Supreme Court decision in Tarasoff v. Regents of the University of California (1976) established the legal and ethical principle known as the 'DUTY TO PROTECT' (or 'duty to warn'): (1) ELEMENTS REQUIRING BREACH OF CONFIDENTIALITY: Physician-patient confidentiality is a core ethical pillar, but it is NOT absolute. A clinician has an affirmative legal and ethical duty to breach confidentiality when three criteria are met: (a) Explicit threat of serious physical violence or homicide; (b) Identifiable third party (a specific, named individual or known targeted victim); (c) Imminent danger with credible capability/intent (e.g., patient bought a firearm, stalked the victim's parking spot, established a specific time and location). (2) ACTIONS REQUIRED: The clinician must take reasonable steps to protect the intended victim, which includes: (a) Immediately notifying local law enforcement with specific details of the threat; (b) Attempting to contact and warn the intended victim directly; (c) Initiating emergency involuntary psychiatric commitment procedures if the patient's whereabouts can be established. (3) DISTRACTOR ANALYSIS: Upholding confidentiality in the face of an explicit, imminent homicidal plan violates statutory law and medical ethics; merely documenting the encounter in the medical record without notifying police or the victim constitutes medical negligence."
      ],
      [
        "Maintain strict physician-patient confidentiality because breaching confidentiality without a patient's signed consent or a subpoena is a federal HIPAA violation",
        "HIPAA contains an explicit statutory safe-harbor exception permitting disclosure to law enforcement and threatened individuals to prevent imminent serious harm."
      ],
      [
        "Document the patient's statements in the electronic medical record and schedule a follow-up telehealth appointment in 48 hours to reassess his homicidal ideation",
        "Passive documentation and delaying action for 48 hours when a specific homicidal threat is planned for tomorrow evening represents gross clinical negligence."
      ],
      [
        "Contact the patient's former employer's human resources department to request that they terminate the supervisor to resolve the conflict",
        "Contacting HR to demand administrative employment changes does not protect the victim and mismanages an imminent lethal criminal threat."
      ],
      [
        "Notify the state medical licensing board of the incident and request that they issue an emergency warrant for the patient's arrest",
        "State medical licensing boards regulate physician licensure and have no legal authority or jurisdiction to investigate threats or issue arrest warrants."
      ]
    ],
    "rationale": "Under the Tarasoff doctrine, when a patient articulates a credible, explicit, imminent threat of serious physical violence against an identifiable third party, the clinician has a legal and ethical duty to protect the intended victim by notifying law enforcement and attempting to warn the victim directly. This duty supersedes confidentiality.",
    "metadata": {
      "shortSolution": "Credible, explicit, imminent threat against an identifiable victim requires immediate breach of confidentiality: notify law enforcement and warn the victim (Tarasoff duty).",
      "competingChoice": "Maintain strict physician-patient confidentiality because breaching confidentiality without a patient's signed consent or a subpoena is a federal HIPAA violation",
      "exclusionFinding": "Confidentiality is not absolute; HIPAA explicitly permits disclosure to law enforcement and victims to avert serious and imminent threats of physical harm.",
      "pedagogicalValue": "Understanding the clinical criteria, legal framework, and protective action required under the Tarasoff duty to protect.",
      "citations": [
        "Tarasoff v. Regents of the University of California, 551 P.2d 334 (Cal. 1976).",
        "Appelbaum PS. Tarasoff and the clinician: problems in fulfilling the duty to protect. Am J Psychiatry. 1985;142(4):425-429. PMID: 3977114."
      ]
    },
    "critique": {
      "shortestValidSolution": "Specific imminent death threat against identified coworker -> immediately alert police and warn victim (Tarasoff duty to protect).",
      "strongestCompetitor": "Maintain strict physician-patient confidentiality because breaching confidentiality without a patient's signed consent or a subpoena is a federal HIPAA violation",
      "exclusionFinding": "HIPAA and ethics explicitly waive confidentiality to prevent imminent physical violence against identifiable targets.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0481",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Mandatory Public Health and Protective Reporting Exceptions to Confidentiality",
    "subtopic": "Suspected Elder Abuse and Neglect, Mandatory Reporting Mandates vs Patient Privacy Requests",
    "provisionalDifficulty": 5,
    "stem": "A 78-year-old woman with mild vascular cognitive impairment and osteoarthritis is brought to the outpatient clinic by her primary caregiver, an adult daughter. The daughter appears impatient, interrupts the patient frequently, and states: 'She's just here because she keeps complaining about back pain.' During the physical examination, while the daughter is asked to step into the waiting area, the physician observes multiple bilateral ecchymoses of varying ages on the patient's upper arms, chest, and inner thighs, as well as a foul-smelling, unstageable sacral decubitus ulcer covered in necrotic slough. The patient is unkempt, wearing soiled clothes, and has lost 14 pounds over the past 2 months. When gently asked about the bruising, the patient begins weeping and whispers: 'My daughter gets so furious when I have accidents. She grabs me, shakes me, and locks me in my bedroom all day without food or my blood pressure pills. But doctor, please do not tell anyone or report her! She is the only family I have. If you report her, she will abandon me or send me to an awful nursing home.'\n\nWhich of the following represents the physician's legal and ethical obligation in this situation?",
    "choices": [
      [
        "File an immediate report of suspected elder abuse and neglect with Adult Protective Services (APS) or law enforcement, as physicians are legally mandated reporters whose statutory duty to protect vulnerable adults supersedes patient confidentiality and does not require patient consent",
        "Elder abuse and neglect is an underdiagnosed, high-morbidity public health crisis. The legal and ethical obligations of clinicians are clear: (1) MANDATED REPORTING: In almost all US jurisdictions, licensed healthcare professionals are legally classified as MANDATORY REPORTERS of suspected elder abuse, physical abuse, neglect (including deprivation of food/medicine), financial exploitation, and sexual abuse in vulnerable adults. (2) REASONABLE SUSPICION STANDARD: Mandated reporting does NOT require definitive proof; it requires only 'reasonable suspicion' or 'reasonable cause to believe' that abuse or neglect has occurred. The state protective agency (Adult Protective Services [APS]) is responsible for conducting the formal investigation. (3) SUPERSEDING PATIENT CONSENT: A physician is legally obligated to report suspected elder abuse EVEN IF THE PATIENT PLEADS WITH THE PHYSICIAN NOT TO REPORT IT. While clinicians must treat the patient with compassionate empathy and validate their fears of retaliation or abandonment, the statutory reporting mandate cannot be waived by the patient. (4) ENSURING IMMEDIATE SAFETY: In addition to reporting, the physician must ensure the patient's immediate medical stabilization and physical safety—frequently by admitting the patient to the hospital for wound debridement, nutrition, and safe social placement."
      ],
      [
        "Honor the patient's explicit autonomous request to keep the information confidential, and schedule a follow-up appointment in 2 weeks to reassess the bruising",
        "Physicians are legally mandated reporters of elder abuse; honoring a request not to report is illegal, violates mandatory reporting statutes, and leaves the patient in mortal danger."
      ],
      [
        "Confront the daughter in the waiting room with the abuse allegations, inform her that a police report is being drafted, and demand that she surrender caregiving duties",
        "Directly confronting an abusive caregiver in the clinic risks escalating domestic violence, putting the patient at extreme risk of retaliatory harm upon returning home."
      ],
      [
        "Advise the patient that she must personally visit the local police precinct to file a formal criminal domestic violence complaint before the medical team can intervene",
        "Shifting the reporting burden onto a frail, cognitively impaired elder facing domestic abuse is unethical and completely ignores the clinician's direct legal mandate."
      ],
      [
        "Notify the hospital legal department to obtain a court subpoena prior to contacting Adult Protective Services",
        "Subpoenas and court orders are not required to report suspected abuse; mandated reporting statutes legally protect clinicians from liability for reporting in good faith."
      ]
    ],
    "rationale": "Physicians are legally mandated reporters of suspected elder abuse and neglect. The reporting mandate requires only reasonable suspicion, supersedes patient confidentiality, and must be fulfilled even if a competent or mildly impaired patient asks the physician not to report. The physician must report to Adult Protective Services (APS) and ensure immediate safety.",
    "metadata": {
      "shortSolution": "Suspected elder abuse requires immediate mandatory reporting to Adult Protective Services (APS) regardless of patient requests to keep it confidential.",
      "competingChoice": "Honor the patient's explicit autonomous request to keep the information confidential, and schedule a follow-up appointment in 2 weeks to reassess the bruising",
      "exclusionFinding": "Mandated reporting laws strictly override patient confidentiality; clinicians cannot withhold reports of elder abuse even if requested by the patient.",
      "pedagogicalValue": "Understanding the statutory mandates, exceptions to confidentiality, and clinical response protocols for suspected elder abuse and neglect.",
      "citations": [
        "Lachs MS, Pillemer KA. Elder abuse. N Engl J Med. 2015;373(20):1947-1956. PMID: 26559573.",
        "American Medical Association. Abuse of elderly or disabled persons: Code of Medical Ethics Opinion 8.8. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Evidence of elder physical abuse/neglect -> immediate mandatory report to Adult Protective Services; cannot be waived by patient request.",
      "strongestCompetitor": "Honor the patient's explicit autonomous request to keep the information confidential, and schedule a follow-up appointment in 2 weeks to reassess the bruising",
      "exclusionFinding": "Elder abuse reporting is a statutory mandate that overrides confidentiality and patient objection to protect vulnerable adults.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0482",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Management of the Impaired Physician and Patient Safety Priority",
    "subtopic": "Immediate Relief from Clinical Duties, Protecting Patients from Imminent Harm vs Delaying for Administrative Reporting",
    "provisionalDifficulty": 5,
    "stem": "An internal medicine chief resident is on duty in the medical intensive care unit at 22:00. An acutely deteriorating patient with septic shock and refractory hypotension requires emergent central venous line placement for vasopressor infusion. The on-call critical care attending physician arrives at the bedside to perform the procedure. The chief resident immediately observes that the attending has slurred speech, an unsteady, ataxic gait, bloodshot conjunctivae, and a strong odor of alcohol on his breath. The attending fumbles with the sterile ultrasound probe cover, drops an 18-gauge introducer needle onto the non-sterile floor, picks it up, and prepares to advance the needle into the patient's right internal jugular vein.\n\nWhich of the following represents the chief resident's most appropriate immediate action?",
    "choices": [
      [
        "Immediately intervene to halt the procedure, relieve the attending physician from all direct patient care responsibilities, ensure that a qualified credentialed clinician performs the line placement safely, and subsequently notify the department chair, residency program leadership, or hospital physician health program",
        "Management of an acutely impaired physician is governed by the absolute ethical primacy of PATIENT SAFETY: (1) IMMEDIATE INTERVENTION: When a physician is actively impaired (whether due to alcohol, substance use, acute psychiatric crisis, or severe cognitive decline) and about to perform an invasive or clinical task, there is a clear and immediate risk of catastrophic patient harm. The immediate priority is to INTERVENE DECISIVELY: physically stopping the procedure, relieving the impaired clinician from clinical duties, and ensuring that patient care is handed over to a competent, credentialed provider. (2) HIERARCHY OF RESPONSIBILITY: Concerns about professional hierarchy, embarrassment, career repercussions, or interpersonal conflict are strictly subordinate to the fundamental obligation of non-maleficence (protecting patients from harm). (3) SUBSEQUENT REPORTING & REHABILITATION: Once patient safety is definitively secured, the resident has an ethical and professional duty (AMA Code of Medical Ethics Opinion 9.2.2) to report the incident promptly through appropriate institutional channels (department chair, chief medical officer, residency leadership, and the state Physician Health Program [PHP]). Modern PHPs emphasize confidential, non-punitive rehabilitation and monitoring while safeguarding public safety."
      ],
      [
        "Allow the attending physician to complete the internal jugular line placement while standing by with sterile gauze, and file an anonymous electronic incident report the following morning",
        "Allowing an overtly intoxicated physician to insert a central venous line risks fatal complications (carotid puncture, tension pneumothorax, air embolism) and violates patient safety."
      ],
      [
        "Discreetly escort the attending physician to the hospital staff lounge to sleep for 4 hours, and complete the clinical shift alone without reporting the incident to protect his medical career",
        "Covering up acute physician impairment ('conspiracy of silence') enables ongoing substance abuse, endangers future patients, and violates mandatory reporting ethics."
      ],
      [
        "Call the state police department to immediately enter the intensive care unit and conduct a roadside breathalyzer test on the attending physician",
        "Summoning civil police into an active ICU for a breathalyzer test is clinically disruptive and inappropriate; internal hospital safety mechanisms and administrative leadership handle clinical relief."
      ],
      [
        "Confront the attending in front of the patient's family, demand a written confession, and insist that he sign an immediate voluntary resignation letter",
        "Confronting an impaired colleague aggressively in front of family causes severe patient distress, breach of dignity, and fails to handle the situation professionally."
      ]
    ],
    "rationale": "When a physician appears acutely impaired by substances and is about to perform an invasive procedure, the immediate ethical priority is patient safety: halting the procedure immediately, relieving the physician from patient care duties, ensuring safe completion by a qualified clinician, and subsequently reporting the impairment through institutional leadership or physician health programs.",
    "metadata": {
      "shortSolution": "Impaired physician about to perform invasive procedure -> immediately halt procedure, relieve him from patient care to protect safety, then report to department chair/PHP.",
      "competingChoice": "Allow the attending physician to complete the internal jugular line placement while standing by with sterile gauze, and file an anonymous electronic incident report the following morning",
      "exclusionFinding": "Allowing an intoxicated physician to perform central line placement permits immediate life-threatening harm; patient protection takes precedence over all else.",
      "pedagogicalValue": "Understanding the emergency ethical priority of patient protection, hierarchy navigation, and reporting mechanisms for the acutely impaired physician.",
      "citations": [
        "American Medical Association. Impaired physicians: Code of Medical Ethics Opinion 9.2.2. AMA; 2017.",
        "Dupont RL, McLellan AT, Carr G, et al. How are addicted physicians treated? A national survey of Physician Health Programs. J Subst Abuse Treat. 2009;37(1):1-7. PMID: 19482453."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acutely impaired physician about to place central line -> immediately halt procedure and relieve him to protect patient; report thereafter.",
      "strongestCompetitor": "Allow the attending physician to complete the internal jugular line placement while standing by with sterile gauze, and file an anonymous electronic incident report the following morning",
      "exclusionFinding": "Permitting an intoxicated clinician to instrument a patient violates non-maleficence and risks immediate fatal injury.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0483",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "The Principle of Double Effect in Palliative Care and Terminal Sedation",
    "subtopic": "Intention to Relieve Intractable Suffering vs Foreseen but Unintended Hastening of Death",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with metastatic pancreatic adenocarcinoma and extensive peritoneal carcinomatosis is admitted to an inpatient palliative care unit with intractable, severe abdominal pain, persistent nausea, and severe agitated delirium. Despite maximal escalating doses of oral and transdermal opioids, adjuvant neuroleptics, and antiemetics, his numeric pain score remains 10/10, and he is thrashing in agonizing distress. The palliative care team recommends initiating a continuous intravenous morphine infusion titrated upward against pain, combined with a continuous subcutaneous infusion of midazolam for proportionate palliative sedation. During the multidisciplinary huddle, the floor bedside nurse expresses profound moral hesitation, stating: 'If we increase this morphine drip and add continuous midazolam, his respiratory rate could drop from 10/min to 5/min, and it might hasten his death by hours or days. Wouldn't that make me ethically and legally responsible for physician-assisted suicide or active euthanasia?'\n\nWhich of the following ethical frameworks addresses the bedside nurse's concern and justifies the aggressive titration of palliative medications in this patient?",
    "choices": [
      [
        "The Principle of Double Effect: an intervention intended solely to relieve intractable pain and suffering is ethically and legally permissible even if it carries the foreseen but unintended secondary risk of hastening death, provided the medication is titrated proportionately to symptom distress",
        "The Principle of Double Effect (enshrined in medical ethics, Roman Catholic moral theology, and US Supreme Court jurisprudence [Vacco v. Quill, 1997]) provides the ethical foundation for aggressive symptom management and palliative sedation at the end of life: (1) CORE CRITERIA OF DOUBLE EFFECT: An action that produces two foreseeable effects—one good (profound relief of intractable pain/agitation) and one potentially bad (respiratory depression, hypotension, or hastening of death)—is ethically permissible IF four conditions are met: (a) The nature of the act itself is morally good or neutral (providing symptom relief); (b) The clinician's SOLE INTENTION is the good effect (relieving pain); the bad effect (death) is merely foreseen, not intended; (c) The bad effect is NOT the means to achieve the good effect (death is not what relieves the pain; the pharmacologic analgesia relieves the pain); (d) Proportionality: The relief of severe, intractable suffering justifies accepting the foreseeable risks. (2) DISTINCTION FROM EUTHANASIA: In active euthanasia or physician-assisted death, the physician's explicit primary intent is to end the patient's life to eliminate suffering. In palliative symptom titration and palliative sedation, the sole intent is to relieve refractory distress. Furthermore, extensive prospective palliative studies demonstrate that properly titrated opioids and sedatives at the end of life do NOT hasten death, but rather maintain physiological comfort."
      ],
      [
        "The Doctrine of Substituted Consent: the patient's advance directive legally immunizes the clinical team from any criminal prosecution for administering lethal medications",
        "Advance directives authorize withholding or withdrawing treatments and consent to palliative care, but they do not immunize or permit intentional lethal administration."
      ],
      [
        "The Principle of Therapeutic Privilege: physicians are legally authorized to withhold information from nursing staff regarding potential lethal medication side effects",
        "Therapeutic privilege applies strictly to withholding information from a patient if disclosure would cause severe direct psychological harm; it never applies to nursing staff."
      ],
      [
        "The Rule of Non-Maleficence Priority: the ethical duty to avoid causing death strictly supersedes the duty of beneficence, requiring that the morphine dose be capped below any level that alters respiratory rate",
        "Capping analgesia and forcing a dying patient to endure agonizing pain out of fear of respiratory depression violates both beneficence and palliative standards."
      ],
      [
        "The Utilitarian Allocation Framework: hastening death in terminally ill patients is ethically preferred to conserve scarce hospital inpatient beds for curable patients",
        "Allocating beds or resources by hastening patient death violates foundational medical ethics and human rights."
      ]
    ],
    "rationale": "The Principle of Double Effect morally and legally justifies aggressive titration of opioids and sedatives for intractable terminal suffering: an action intended solely to relieve distress is permissible even if it carries the foreseen but unintended risk of hastening death, provided doses are titrated proportionately to symptoms.",
    "metadata": {
      "shortSolution": "Titrating opioids/sedatives for intractable pain is justified by the Principle of Double Effect: primary intent is symptom relief, even if hastening death is a foreseen secondary risk.",
      "competingChoice": "The Rule of Non-Maleficence Priority: the ethical duty to avoid causing death strictly supersedes the duty of beneficence, requiring that the morphine dose be capped below any level that alters respiratory rate",
      "exclusionFinding": "Under-treating refractory terminal pain violates medical ethics; the Principle of Double Effect permits proportionate opioid titration despite respiratory risk.",
      "pedagogicalValue": "Mastering the Principle of Double Effect and distinguishing proportionate palliative symptom management from active euthanasia.",
      "citations": [
        "Quill TE, Dresser R, Brock DW. The rule of double effect--a critique of its role in end-of-life decision making. N Engl J Med. 1997;337(24):1768-1771. PMID: 9392706.",
        "American Medical Association. Sedation to unconsciousness in end-of-life care: Code of Medical Ethics Opinion 5.6. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Titrating morphine/sedatives to relieve intractable terminal distress = Principle of Double Effect (good intent justifies foreseen unintended risk).",
      "strongestCompetitor": "The Rule of Non-Maleficence Priority: the ethical duty to avoid causing death strictly supersedes the duty of beneficence, requiring that the morphine dose be capped below any level that alters respiratory rate",
      "exclusionFinding": "Capping doses and allowing agony is unethical; Double Effect allows proportionate titration for intractable suffering.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0484",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Ethical and Legal Equivalence of Withholding vs Withdrawing Life-Sustaining Treatment",
    "subtopic": "Moral Parity of Mechanical Ventilation Cessation and Forgoing CPR, Reframing Care Toward Comfort",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old woman with severe global hypoxic-ischemic encephalopathy following a 28-minute out-of-hospital cardiopulmonary arrest is admitted to the intensive care unit. On hospital day 8, she remains in a deep comatose state on mechanical ventilation and continuous vasopressor infusion. Neurological consultation and diagnostic evaluation reveal bilaterally absent pupillary and corneal reflexes, bilaterally absent cortical N20 responses on somatosensory evoked potentials (SSEPs), and diffuse cortical laminar necrosis on MRI, confirming irreversible catastrophic neurological devastation. Her designated healthcare proxy (her daughter) reviews her mother's documented values and requests that mechanical ventilation and vasopressors be withdrawn to allow a natural death. A newly graduated intern on the medical team feels conflicted and confides to the attending: 'If we had decided not to intubate her in the emergency department, that would have been morally acceptable withholding. But now that she is already on the ventilator, actively turning it off feels like we are causing her death.'\n\nWhich of the following principles of medical ethics and healthcare jurisprudence addresses the intern's misconception?",
    "choices": [
      [
        "Withholding and withdrawing life-sustaining medical treatment are ethically and legally equivalent; when an intervention is no longer aligned with patient goals or provides no net therapeutic benefit, discontinuing it allows the underlying disease process to take its natural course without physician causation of death",
        "A common misconception among clinicians and families is that withdrawing an ongoing life-sustaining intervention (e.g., extubation) is ethically or legally distinct from withholding it (e.g., Do Not Intubate): (1) ETHICAL & LEGAL PARITY: Decades of medical ethics consensus (President's Commission, AMA Code of Medical Ethics Opinion 5.3) and landmark US Supreme Court jurisprudence (Cruzan v. Director, Missouri Dept of Health, 1990) establish that WITHHOLDING AND WITHDRAWING LIFE-SUSTAINING TREATMENT ARE ETHICALLY AND LEGALLY EQUIVALENT. (2) RATIONALE: An invasive medical treatment that does not achieve the patient's goals of care or offers no therapeutic benefit confers no moral obligation to be continued simply because it was initiated. Requiring higher thresholds to stop a therapy than to start it creates a perverse incentive: clinicians might hesitate to offer potentially life-saving time-limited trials of intubation or dialysis for fear that once started, they could never ethically be stopped. (3) CAUSALITY: When mechanical ventilation is withdrawn in a patient with irreversible devastating brain injury, the CAUSE OF DEATH is the underlying catastrophic disease (hypoxic-ischemic encephalopathy), NOT the physician who removes the endotracheal tube. (4) DISTRACTOR ANALYSIS: Classifying withdrawal as active euthanasia is legally and clinically false; demanding a court order for consensual surrogate extubation introduces needless suffering and delay."
      ],
      [
        "Withdrawing mechanical ventilation constitutes active physician-induced termination of life and is legally permissible only if authorized by an emergency probate court decree",
        "Consensual withdrawal of non-beneficial life support based on patient wishes is standard palliative practice and does not require court involvement."
      ],
      [
        "Withholding treatment is ethically superior to withdrawing treatment because withholding represents passive omission while withdrawing represents active commission",
        "The commission/omission distinction has been explicitly rejected by bioethics and law; both withholding and withdrawing are subject to identical ethical standards."
      ],
      [
        "Once mechanical ventilation is initiated, it must be maintained continuously until cardiac arrest occurs or brain death is formally established",
        "Forcing continuation of invasive ventilation in irreversible coma until asystole causes prolonged indignity and violates patient self-determination."
      ],
      [
        "Life-sustaining therapies may only be withdrawn if the patient's organ donor status has been officially approved by the regional organ procurement organization",
        "Withdrawal of life support is governed strictly by patient preferences and goals of care; it is completely independent of organ donation status."
      ]
    ],
    "rationale": "Medical ethics and US constitutional law establish that withholding and withdrawing life-sustaining therapy are ethically and legally equivalent. Discontinuing non-beneficial interventions allows the underlying disease to run its natural course and does not constitute active causation of death.",
    "metadata": {
      "shortSolution": "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent; stopping non-beneficial treatment allows underlying disease to cause death.",
      "competingChoice": "Withholding treatment is ethically superior to withdrawing treatment because withholding represents passive omission while withdrawing represents active commission",
      "exclusionFinding": "The commission vs omission distinction is rejected by bioethics and law; both withholding and withdrawing require identical justification based on patient goals.",
      "pedagogicalValue": "Understanding the ethical and legal equivalence of withholding and withdrawing life-sustaining medical treatment.",
      "citations": [
        "Cruzan v. Director, Missouri Department of Health, 497 U.S. 261 (1990).",
        "President's Commission for the Study of Ethical Problems in Medicine and Biomedical and Behavioral Research. Deciding to Forego Life-Sustaining Treatment. U.S. GPO; 1983."
      ]
    },
    "critique": {
      "shortestValidSolution": "Withholding vs withdrawing life support -> ethically and legally equivalent; stopping non-beneficial therapy allows natural underlying disease death.",
      "strongestCompetitor": "Withholding treatment is ethically superior to withdrawing treatment because withholding represents passive omission while withdrawing represents active commission",
      "exclusionFinding": "Bioethics and law firmly reject the action/omission distinction here; withholding and withdrawing carry identical moral and legal parity.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0485",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "General Principles",
    "topic": "Brain Death Determination: American Academy of Neurology (AAN) Guidelines",
    "subtopic": "Mandatory Prerequisites, Absence of Brainstem Reflexes, Apnea Testing Protocol (PaCO2 >= 60 mmHg and >= 20 mmHg above baseline)",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old man sustains massive traumatic intracranial hemorrhage and diffuse cerebral edema following a motorcycle collision. Despite emergency decompressive hemicraniectomy, his intracranial pressure remains refractory (> 45 mmHg), and he progresses to bilateral pupillary dilation and fixed unresponsiveness. The neurocritical care team initiates a formal brain death evaluation. The following prerequisites are confirmed: core body temperature 37.0 C (98.6 F), systolic blood pressure maintained > 100 mmHg on phenylephrine, normal serum electrolytes, and complete clearance of sedatives and neuromuscular blocking agents (confirmed with train-of-four peripheral nerve stimulation 4/4 twitches). Neurological examination reveals complete flaccid coma with absent motor response to central noxious stimulation and complete absence of all brainstem reflexes (pupillary, corneal, oculocephalic, oculovestibular with ice water, gag, and cough reflexes). The team performs an apnea test: the patient is pre-oxygenated with 100% FiO2 for 15 minutes; baseline arterial blood gas shows pH 7.42, PaCO2 40 mmHg, and PaO2 380 mmHg. The mechanical ventilator is disconnected while oxygen is insufflated via a tracheal cannula at 6 L/min. During 10 minutes of observation, the patient makes zero spontaneous respiratory efforts. A repeat arterial blood gas reveals pH 7.21, PaCO2 66 mmHg, and PaO2 240 mmHg. Hemodynamics remain stable throughout the test.\n\nWhich of the following represents the correct conclusion regarding this evaluation?",
    "choices": [
      [
        "The patient meets all clinical criteria for brain death (death by neurologic criteria); the apnea test is positive (PaCO2 >= 60 mmHg and >= 20 mmHg above baseline in the absence of spontaneous respirations), and no ancillary testing is required to declare legal and biological death",
        "Determination of death by neurologic criteria (brain death) is established by the American Academy of Neurology (AAN) and the World Brain Death Project guidelines: (1) PREREQUISITES: (a) Irreversible cause of coma established; (b) Normothermia (core temperature >= 36.0 C); (c) Hemodynamic stability (systolic BP >= 100 mmHg or MAP >= 75 mmHg); (d) Absence of confounding metabolic derangements, CNS depressant drugs, or neuromuscular blockade. (2) CLINICAL BRAINSTEM EXAMINATION: Complete flaccid unresponsiveness to deep painful stimuli and complete absence of all brainstem reflexes: pupillary light reflex, corneal reflex, oculocephalic (doll's eyes), oculovestibular (cold caloric), gag, and tracheal cough reflex. (3) APNEA TEST: Confirms permanent loss of medullary respiratory drive. After pre-oxygenation, the ventilator is detached while maintaining oxygenation. A positive apnea test requires: (a) ABSENCE of any spontaneous respiratory efforts; AND (b) PaCO2 rising to >= 60 mmHg OR >= 20 mmHg above baseline, with accompanying acidosis (pH < 7.28). (4) ANCILLARY TESTING: Ancillary tests (e.g., 4-vessel cerebral angiography, radionuclide cerebral blood flow scan, or transcranial Doppler) are indicated ONLY when the apnea test cannot be safely completed (e.g., profound hypoxemia or cardiovascular collapse aborting the test) or when cranial nerve/brainstem exam components cannot be examined (e.g., severe facial trauma). When the clinical exam and apnea test are complete and definitive, brain death is declared without need for ancillary tests."
      ],
      [
        "The apnea test is negative because PaCO2 did not exceed 70 mmHg, requiring an immediate repeat test after another 10 minutes off the ventilator",
        "A positive apnea test requires PaCO2 >= 60 mmHg or >= 20 mmHg increase above baseline; 66 mmHg satisfies both thresholds conclusively."
      ],
      [
        "The patient cannot be declared legally dead until an ancillary four-vessel cerebral angiogram or radionuclide scan confirms absent intracranial blood flow",
        "Ancillary blood flow testing is not required when the clinical brainstem examination and apnea test are safely and definitively completed."
      ],
      [
        "The apnea test is invalid because the ventilator must remain disconnected until arterial pH drops below 7.10",
        "There is no pH requirement below 7.10; meeting the PaCO2 >= 60 mmHg threshold with respiratory acidosis (pH < 7.28) is fully diagnostic."
      ],
      [
        "The patient is in a persistent vegetative state rather than brain death because heart rate and arterial blood pressure remain intact",
        "Spinal reflexes and cardiac automaticity persist after brain death; cardiac contractions do not indicate cerebral viability."
      ]
    ],
    "rationale": "Brain death determination requires establishing prerequisites, confirming absence of all brainstem reflexes, and a positive apnea test (no spontaneous breathing with PaCO2 >= 60 mmHg and >= 20 mmHg above baseline). When these are met, brain death is established without needing ancillary testing.",
    "metadata": {
      "shortSolution": "Absent brainstem reflexes + positive apnea test (no breaths, PaCO2 66 [>= 60 and >= 20 above baseline]) = brain death confirmed without ancillary testing.",
      "competingChoice": "The patient cannot be declared legally dead until an ancillary four-vessel cerebral angiogram or radionuclide scan confirms absent intracranial blood flow",
      "exclusionFinding": "Ancillary flow testing is needed only if apnea testing cannot be completed; a definitive clinical exam + apnea test is conclusive.",
      "pedagogicalValue": "Mastering the prerequisites, clinical examination, and apnea testing thresholds for brain death determination under AAN guidelines.",
      "citations": [
        "Greer DM, Shemie SD, Lewis A, et al. Determination of brain death/death by neurologic criteria: the World Brain Death Project. JAMA. 2020;324(11):1078-1097. PMID: 32749449.",
        "Wijdicks EF, Varelas PN, Gronseth GS, Greer DM. Evidence-based guideline update: determining brain death in adults. Neurology. 2010;74(23):1911-1918. PMID: 20530327."
      ]
    },
    "critique": {
      "shortestValidSolution": "Absent brainstem reflexes + apnea test with PaCO2 66 mmHg (>= 60 and >= 20 above baseline) -> brain death verified; no ancillary testing needed.",
      "strongestCompetitor": "The patient cannot be declared legally dead until an ancillary four-vessel cerebral angiogram or radionuclide scan confirms absent intracranial blood flow",
      "exclusionFinding": "Ancillary imaging is only indicated when apnea test is aborted or confounded; clinical exam + apnea test is self-sufficient.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0486",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Organ Procurement Organization (OPO) Notification and Role Separation",
    "subtopic": "Federal Mandate for Timely OPO Notification, Separation of Primary Clinical Team from Organ Request",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old woman is admitted to the neuro-intensive care unit with catastrophic diffuse axonal injury and massive cerebral edema following a motor vehicle collision. After completing the neurological evaluation and apnea testing, the neurocritical care team formally declares the patient deceased by neurologic criteria (brain death). The patient's driver's license carries a state donor registry heart emblem indicating prior consent for organ donation. The patient's grieving parents and spouse are gathered in the ICU family consultation room. The second-year internal medicine resident rotating in the ICU suggests: 'I will go in right now and talk to the family to explain the organ donation process, obtain their written consent for multiorgan procurement, and coordinate the surgical recovery team so we can save as many lives as possible.'\n\nWhich of the following explains why the resident's proposed plan violates federal hospital regulations and professional ethical standards regarding organ procurement?",
    "choices": [
      [
        "Federal regulations and professional standards mandate that the primary healthcare team must notify the regional Organ Procurement Organization (OPO) but must NOT independently initiate organ donation discussions or request consent from the family; only designated, trained OPO coordinators (or designated hospital requestors) may approach the family regarding donation",
        "The legal and ethical governance of deceased organ donation in the United States is established by the Centers for Medicare & Medicaid Services (CMS) Conditions of Participation (42 CFR 482.45) and the National Organ Transplant Act: (1) TIMELY NOTIFICATION: Hospitals are legally required to notify their designated regional Organ Procurement Organization (OPO) in a timely manner regarding any patient who meets clinical triggers of impending brain death or severe acute neurological injury (e.g., GCS < 5 or planned withdrawal of life support). (2) STRICT ROLE SEPARATION: To eliminate conflicts of interest, protect physician-patient trust, and ensure high consent rates, federal rules strictly prohibit members of the primary treating clinical team (attending physicians, residents, bedside nurses) from independently approaching family members to request organ donation. (3) DESIGNATED REQUESTORS: Families must be approached ONLY by professional OPO donor coordinators or individuals who have completed formal certified 'designated requestor' training. Studies demonstrate that when primary physicians attempt to request donation prematurely or conflate the declaration of death with donation requests ('decoupling failure'), families experience intense distrust and authorization rates drop precipitously. (4) FIRST-PERSON AUTHORIZATION: The OPO coordinator verifies state donor registries (first-person authorization); if the patient legally registered as a donor, that consent is legally binding in most states, but the OPO coordinator manages communication with the family."
      ],
      [
        "Because the patient is an adult under age 30, organ donation is legally prohibited without an express living will notarized within the preceding 12 months",
        "There is no age restriction or requirement for recent notarized living wills for organ donation; state registry designation constitutes legal authorization."
      ],
      [
        "The primary healthcare team must first disconnect mechanical ventilation and allow circulatory arrest to occur before any contact with the OPO is legally permitted",
        "Waiting for circulatory arrest to contact the OPO destroys the viability of vascularized organs (heart, lungs, liver, kidneys) and violates CMS notification triggers."
      ],
      [
        "The clinical team is legally required to conduct an immediate public lottery among waiting-list transplant recipients in the hospital lobby",
        "Transplant allocation is managed scientifically and equitably through the national United Network for Organ Sharing (UNOS) matching system, never local lotteries."
      ],
      [
        "Organ procurement discussions can only occur after the patient's family retains private legal counsel to negotiate financial compensation for donated organs",
        "Financial compensation for human organs is strictly illegal under the National Organ Transplant Act; organ donation is altruistic."
      ]
    ],
    "rationale": "Federal CMS regulations and ethical standards mandate that hospital clinical teams notify the regional Organ Procurement Organization (OPO) but must never independently request organ donation from families. Only trained, designated OPO coordinators (or certified requestors) are permitted to discuss donation with families to prevent conflicts of interest and maintain trust.",
    "metadata": {
      "shortSolution": "Primary treating team must notify OPO but cannot independently request organ donation; only trained OPO coordinators/designated requestors can approach the family.",
      "competingChoice": "The primary healthcare team must first disconnect mechanical ventilation and allow circulatory arrest to occur before any contact with the OPO is legally permitted",
      "exclusionFinding": "OPO notification must occur while ventilation is maintained; delaying contact until circulatory arrest destroys organ viability and violates CMS rules.",
      "pedagogicalValue": "Understanding federal CMS regulations, OPO notification mandates, and the essential separation of roles between treating physicians and organ procurement coordinators.",
      "citations": [
        "Centers for Medicare & Medicaid Services. Hospital conditions of participation: organ, tissue, and eye procurement. 42 CFR 482.45.",
        "American Medical Association. Commercialism in the practice of pathology and organ donation: Code of Medical Ethics Opinion 6.1.1. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Primary medical team must alert OPO but cannot request organ donation; only trained OPO coordinators approach family (CMS mandate).",
      "strongestCompetitor": "The primary healthcare team must first disconnect mechanical ventilation and allow circulatory arrest to occur before any contact with the OPO is legally permitted",
      "exclusionFinding": "CMS requires notification before circulatory arrest; waiting for death destroys viable organs and violates federal conditions of participation.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0487",
    "exam": "Step 3",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Adolescent Minor Consent Exceptions and Confidential Healthcare Services",
    "subtopic": "Legal Autonomy for Contraception, STI Evaluation, Substance Use, and Mental Health Services Without Parental Consent",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old high school sophomore presents unaccompanied to an outpatient adolescent health clinic. She is articulate, fully oriented, and requests screening for sexually transmitted infections (STIs) and initiation of effective contraception. During the private, confidential interview, she discloses that she has been sexually active with her 16-year-old boyfriend for 4 months, uses condoms inconsistently, and has noticed mild yellowish vaginal discharge and dysuria for 5 days. Physical examination reveals normal vital signs, no abdominal tenderness, and purulent cervical exudate with friability. Nucleic acid amplification testing (NAAT) for Neisseria gonorrhoeae and Chlamydia trachomatis is collected, and the physician prepares to treat her empirically with intramuscular ceftriaxone and oral doxycycline. The patient becomes visibly distressed and asks: 'Doctor, will you send a bill or medical report to my parents? If my parents find out I am having sex and getting a birth control implant, my father will kick me out of the house. Do my parents have to give permission for this visit?'\n\nWhich of the following represents the correct legal and ethical standard regarding parental consent and confidentiality for this adolescent?",
    "choices": [
      [
        "In all 50 US states, adolescent minors have the legal capacity to consent independently to confidential medical care for sexually transmitted infections, contraception, substance use disorders, and outpatient mental health counseling without parental knowledge or parental consent",
        "Adolescent confidentiality and legal minor consent exceptions represent a critical domain in pediatric and adolescent medicine: (1) STATUTORY MINOR CONSENT EXCEPTIONS: Under state statutes across the United States, minors have legally protected autonomy to consent to specific sensitive healthcare services without parental consent or notification. These universally include: (a) Diagnosis and treatment of sexually transmitted infections (STIs); (b) Prescription and provision of contraception (including long-acting reversible contraceptives [LARCs] like implants and IUDs); (c) Evaluation and treatment for substance use disorders; (d) Outpatient mental health counseling. (2) ETHICAL RATIONALE: Decades of public health data demonstrate that mandatory parental disclosure creates a formidable barrier to care, driving adolescents away from seeking STI treatment and contraception, resulting in preventable pelvic inflammatory disease, infertility, unintended teenage pregnancies, and disease transmission. (3) CONFIDENTIALITY SAFEGUARDS: Clinicians must ensure that explanation of benefits (EOB) insurance statements or electronic portal notifications do not inadvertently breach confidentiality. (4) EXCEPTIONS TO CONFIDENTIALITY: Clinicians must breach confidentiality ONLY if the minor expresses active suicidal/homicidal ideation or discloses physical, sexual, or emotional abuse (mandated child abuse reporting)."
      ],
      [
        "Parental consent is legally required for all prescription contraceptives in patients under age 18, but STI treatment may be administered confidentially without parental knowledge",
        "Contraception is explicitly protected under minor consent exceptions in almost all states; parental consent is not legally required."
      ],
      [
        "The physician is legally mandated to notify the patient's parents within 24 hours regarding any confirmed bacterial sexually transmitted infection",
        "Public health statutes mandate reporting confirmed STIs to local/state health departments, NOT to parents; breaching confidentiality to parents violates minor rights."
      ],
      [
        "Adolescent minors may receive confidential contraceptive care only if they have been officially granted emancipated minor status by a juvenile court judge",
        "Minor consent exceptions for STIs and contraception apply universally to non-emancipated minors; formal legal emancipation is not required."
      ],
      [
        "The clinician must refuse care and advise the patient to return with at least one legal parent or guardian to sign the informed consent documentation",
        "Refusing care denies legally protected adolescent services, violates clinical guidelines, and increases risks of untreated PID and unintended pregnancy."
      ]
    ],
    "rationale": "Adolescent minors have legal authority under state minor consent laws to receive confidential medical care for STIs, contraception, substance use disorders, and outpatient mental health without parental consent or notification. Clinicians must maintain confidentiality unless there is disclosure of abuse or imminent self-harm/harm to others.",
    "metadata": {
      "shortSolution": "Adolescent minors can independently consent to confidential STI treatment, contraception, substance abuse, and mental healthcare without parental consent.",
      "competingChoice": "Parental consent is legally required for all prescription contraceptives in patients under age 18, but STI treatment may be administered confidentially without parental knowledge",
      "exclusionFinding": "Minor consent exceptions cover both STI treatment AND contraception; parental consent is not required for contraceptive provision.",
      "pedagogicalValue": "Understanding statutory minor consent exceptions, adolescent confidentiality protections, and clinical management in adolescent healthcare.",
      "citations": [
        "American Academy of Pediatrics Committee on Bioethics. Informed consent in decision-making in pediatric practice. Pediatrics. 2016;138(2):e20161484. PMID: 27456514.",
        "Guttmacher Institute. Minors' access to STI services and contraceptive services. State Laws and Policies; 2023."
      ]
    },
    "critique": {
      "shortestValidSolution": "Adolescent minor seeking STI care/contraception -> legally autonomous to consent confidentially without parental consent or notification.",
      "strongestCompetitor": "Parental consent is legally required for all prescription contraceptives in patients under age 18, but STI treatment may be administered confidentially without parental knowledge",
      "exclusionFinding": "Contraceptive care is fully protected alongside STI care under adolescent minor consent laws in all US jurisdictions.",
      "verdict": "PASS"
    }
  }
]
