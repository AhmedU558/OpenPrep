import { CandidateSpec } from './types';

export const step3Batch20: CandidateSpec[] = [
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
        "Decision-making for unrepresented ('unbefriended') incapacitated patients\u2014those who lack decision-making capacity, have no advance directive, and possess no surrogate decision-maker\u2014presents one of the most profound ethical challenges in acute medicine: (1) REJECTING SOLE ATTENDING AUTONOMY: Landmark policy statements from the American Thoracic Society (ATS), American College of Physicians (ACP), and AMA Code of Medical Ethics Opinion 2.1.2 explicitly advise AGAINST allowing a single attending physician to act alone as the sole decision-maker for life-or-death decisions. Unilateral decisions by single physicians are vulnerable to idiosyncratic biases, conflicts of interest (e.g., bed turnover pressures), and arbitrary variability in end-of-life philosophy. (2) INSTITUTIONAL MULTIDISCIPLINARY ETHICS REVIEW: The recognized ethical gold standard is a structured institutional mechanism\u2014such as a multidisciplinary institutional ethics committee or specialized surrogate decision committee (comprising physicians, nurses, social workers, chaplains, and community patient advocates). This committee conducts an independent audit of the clinical record, verifies that surrogate searches were exhaustive, ensures prognostic consensus, and applies the 'best interests' standard to weigh therapeutic burdens versus benefits. (3) LEGAL APPOINTMENT: In jurisdictions where statutory law mandates judicial oversight, the hospital petitions for an independent, court-appointed legal guardian. (4) DISTRACTOR ANALYSIS: Emergency implied consent covers immediate life-saving surgery (such as the initial amputation) but does NOT authorize elective withdrawal of life support weeks later; delegating the choice to hospital risk management transforms a clinical-ethical judgment into a legal defense calculation."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: End-of-life decisions in unrepresented incapacitated patients require multidisciplinary hospital ethics committee or court-appointed guardian review; single attending cannot act alone.",
      "distractorExclusionNotes": "Distractor exclusion verified: Sole attending authority is explicitly rejected by national bioethics consensus (ATS, ACP, AMA) to prevent idiosyncratic bias and protect vulnerable patients.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "End-of-life decisions in unrepresented incapacitated patients require multidisciplinary hospital ethics committee or court-appointed guardian review; single attending cannot act alone.",
    "necessaryInference": "End-of-life decisions in unrepresented incapacitated patients require multidisciplinary hospital ethics committee or court-appointed guardian review; single attending cannot act alone.",
    "strongestDistractor": "Allowing the primary surgical attending physician to unilaterally order withdrawal of life-sustaining treatment without external peer or ethics review under the doctrine of clinical autonomy",
    "distractorExclusion": "Sole attending authority is explicitly rejected by national bioethics consensus (ATS, ACP, AMA) to prevent idiosyncratic bias and protect vulnerable patients.",
    "citation": "White DB, Evans LR, Bautista CA, et al. Treatment decision making for unrepresented patients in the ICU. An official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2016;194(1):100-108. PMID: 27367885."
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
        "The legal and ethical doctrine of surrogate decision-making establishes an unequivocal hierarchy of authority: (1) PRIMACY OF THE DESIGNATED HEALTHCARE PROXY: An individual appointed by the patient in a legally valid Durable Power of Attorney for Healthcare (DPOA-HC) or healthcare proxy document represents the patient's explicit, competent exercise of self-determination. The designated agent's authority SUPERCEDES all statutory default surrogate hierarchies\u2014including legally married spouses, adult children, parents, and siblings. (2) ROLE OF STATUTORY DEFAULT SURROGATES: State statutory default surrogate hierarchies (which typically place the legal spouse first) apply ONLY when the patient has NOT executed a valid advance directive designating a proxy. The existence of a valid, executed DPOA document completely renders statutory default rankings inapplicable. (3) RESOLVING ESTRANGEMENT CONFLICTS: Even if the estranged spouse claims legal marriage, pending divorce or separation does not give her authority to override the patient's designated proxy. The clinical team is ethically and legally obligated to honor the decision of the designated partner (who consents to life-saving craniectomy). (4) DISTRACTOR ANALYSIS: Transferring authority to an estranged spouse violates the patient's express constitutional right to designate his surrogate; postponing surgery for a court hearing will cause irreversible herniation and brain death."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Valid DPOA-designated proxy has exclusive legal and ethical authority, superseding estranged legal spouse and default statutory hierarchies.",
      "distractorExclusionNotes": "Distractor exclusion verified: Statutory spousal priority applies only when no proxy was appointed; a legally designated proxy in a valid DPOA always takes legal precedence.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Valid DPOA-designated proxy has exclusive legal and ethical authority, superseding estranged legal spouse and default statutory hierarchies.",
    "necessaryInference": "Valid DPOA-designated proxy has exclusive legal and ethical authority, superseding estranged legal spouse and default statutory hierarchies.",
    "strongestDistractor": "The legal spouse holds automatic statutory legal priority over any designated non-marital partner until a formal final decree of divorce is issued by a family court",
    "distractorExclusion": "Statutory spousal priority applies only when no proxy was appointed; a legally designated proxy in a valid DPOA always takes legal precedence.",
    "citation": "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016."
  },
  {
    "code": "op-c-s3-0478",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Surrogate Decision-Making: Substituted Judgment vs Best Interests",
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
    "rationale": "Surrogate decision-makers are legally and ethically bound to apply the principle of 'substituted judgment'\u2014making the choice the patient would have made based on her explicit prior statements and values\u2014rather than imposing their own personal beliefs. The 'best interests' standard applies only when patient preferences are unknown.",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Surrogate must apply substituted judgment (patient's known wishes/values) rather than imposing his own personal religious beliefs.",
      "distractorExclusionNotes": "Distractor exclusion verified: Surrogate proxy authority is a fiduciary duty to honor the patient's wishes (substituted judgment), not an absolute license for the surrogate's personal beliefs.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Surrogate must apply substituted judgment (patient's known wishes/values) rather than imposing his own personal religious beliefs.",
    "necessaryInference": "Surrogate must apply substituted judgment (patient's known wishes/values) rather than imposing his own personal religious beliefs.",
    "strongestDistractor": "The designated healthcare proxy possesses absolute discretionary legal authority to make any medical decision he chooses based on his personal moral or religious convictions",
    "distractorExclusion": "Surrogate proxy authority is a fiduciary duty to honor the patient's wishes (substituted judgment), not an absolute license for the surrogate's personal beliefs.",
    "citation": "Sulmasy DP, Snyder L. Substituted judgment: healthcare decisions for incapacitated patients. Ann Intern Med. 2010;153(12):837-841. PMID: 21173418."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Conscientious objection requires respectful disclosure + unbiased counseling + timely referral to another qualified, willing provider.",
      "distractorExclusionNotes": "Distractor exclusion verified: Refusing to refer constitutes patient abandonment and obstruction of care, violating professional codes (AMA, ACOG).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Conscientious objection requires respectful disclosure + unbiased counseling + timely referral to another qualified, willing provider.",
    "necessaryInference": "Conscientious objection requires respectful disclosure + unbiased counseling + timely referral to another qualified, willing provider.",
    "strongestDistractor": "Refuse to refer the patient to another provider because facilitating a referral makes the physician morally complicit in the sterilizing procedure",
    "distractorExclusion": "Refusing to refer constitutes patient abandonment and obstruction of care, violating professional codes (AMA, ACOG).",
    "citation": "American College of Obstetricians and Gynecologists. The limits of conscientious refusal in reproductive medicine. ACOG Committee Opinion No. 385. Obstet Gynecol. 2007;110(5):1201-1208. PMID: 17978146."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Credible, explicit, imminent threat against an identifiable victim requires immediate breach of confidentiality: notify law enforcement and warn the victim (Tarasoff duty).",
      "distractorExclusionNotes": "Distractor exclusion verified: Confidentiality is not absolute; HIPAA explicitly permits disclosure to law enforcement and victims to avert serious and imminent threats of physical harm.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Credible, explicit, imminent threat against an identifiable victim requires immediate breach of confidentiality: notify law enforcement and warn the victim (Tarasoff duty).",
    "necessaryInference": "Credible, explicit, imminent threat against an identifiable victim requires immediate breach of confidentiality: notify law enforcement and warn the victim (Tarasoff duty).",
    "strongestDistractor": "Maintain strict physician-patient confidentiality because breaching confidentiality without a patient's signed consent or a subpoena is a federal HIPAA violation",
    "distractorExclusion": "Confidentiality is not absolute; HIPAA explicitly permits disclosure to law enforcement and victims to avert serious and imminent threats of physical harm.",
    "citation": "Appelbaum PS. Tarasoff and the clinician: problems in fulfilling the duty to protect. Am J Psychiatry. 1985;142(4):425-429. PMID: 3977114."
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
        "Elder abuse and neglect is an underdiagnosed, high-morbidity public health crisis. The legal and ethical obligations of clinicians are clear: (1) MANDATED REPORTING: In almost all US jurisdictions, licensed healthcare professionals are legally classified as MANDATORY REPORTERS of suspected elder abuse, physical abuse, neglect (including deprivation of food/medicine), financial exploitation, and sexual abuse in vulnerable adults. (2) REASONABLE SUSPICION STANDARD: Mandated reporting does NOT require definitive proof; it requires only 'reasonable suspicion' or 'reasonable cause to believe' that abuse or neglect has occurred. The state protective agency (Adult Protective Services [APS]) is responsible for conducting the formal investigation. (3) SUPERSEDING PATIENT CONSENT: A physician is legally obligated to report suspected elder abuse EVEN IF THE PATIENT PLEADS WITH THE PHYSICIAN NOT TO REPORT IT. While clinicians must treat the patient with compassionate empathy and validate their fears of retaliation or abandonment, the statutory reporting mandate cannot be waived by the patient. (4) ENSURING IMMEDIATE SAFETY: In addition to reporting, the physician must ensure the patient's immediate medical stabilization and physical safety\u2014frequently by admitting the patient to the hospital for wound debridement, nutrition, and safe social placement."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Suspected elder abuse requires immediate mandatory reporting to Adult Protective Services (APS) regardless of patient requests to keep it confidential.",
      "distractorExclusionNotes": "Distractor exclusion verified: Mandated reporting laws strictly override patient confidentiality; clinicians cannot withhold reports of elder abuse even if requested by the patient.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Suspected elder abuse requires immediate mandatory reporting to Adult Protective Services (APS) regardless of patient requests to keep it confidential.",
    "necessaryInference": "Suspected elder abuse requires immediate mandatory reporting to Adult Protective Services (APS) regardless of patient requests to keep it confidential.",
    "strongestDistractor": "Honor the patient's explicit autonomous request to keep the information confidential, and schedule a follow-up appointment in 2 weeks to reassess the bruising",
    "distractorExclusion": "Mandated reporting laws strictly override patient confidentiality; clinicians cannot withhold reports of elder abuse even if requested by the patient.",
    "citation": "Lachs MS, Pillemer KA. Elder abuse. N Engl J Med. 2015;373(20):1947-1956. PMID: 26559573."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Impaired physician about to perform invasive procedure -> immediately halt procedure, relieve him from patient care to protect safety, then report to department chair/PHP.",
      "distractorExclusionNotes": "Distractor exclusion verified: Allowing an intoxicated physician to perform central line placement permits immediate life-threatening harm; patient protection takes precedence over all else.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Impaired physician about to perform invasive procedure -> immediately halt procedure, relieve him from patient care to protect safety, then report to department chair/PHP.",
    "necessaryInference": "Impaired physician about to perform invasive procedure -> immediately halt procedure, relieve him from patient care to protect safety, then report to department chair/PHP.",
    "strongestDistractor": "Allow the attending physician to complete the internal jugular line placement while standing by with sterile gauze, and file an anonymous electronic incident report the following morning",
    "distractorExclusion": "Allowing an intoxicated physician to perform central line placement permits immediate life-threatening harm; patient protection takes precedence over all else.",
    "citation": "American Medical Association. Impaired physicians: Code of Medical Ethics Opinion 9.2.2. AMA; 2017."
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
        "The Principle of Double Effect (enshrined in medical ethics, Roman Catholic moral theology, and US Supreme Court jurisprudence [Vacco v. Quill, 1997]) provides the ethical foundation for aggressive symptom management and palliative sedation at the end of life: (1) CORE CRITERIA OF DOUBLE EFFECT: An action that produces two foreseeable effects\u2014one good (profound relief of intractable pain/agitation) and one potentially bad (respiratory depression, hypotension, or hastening of death)\u2014is ethically permissible IF four conditions are met: (a) The nature of the act itself is morally good or neutral (providing symptom relief); (b) The clinician's SOLE INTENTION is the good effect (relieving pain); the bad effect (death) is merely foreseen, not intended; (c) The bad effect is NOT the means to achieve the good effect (death is not what relieves the pain; the pharmacologic analgesia relieves the pain); (d) Proportionality: The relief of severe, intractable suffering justifies accepting the foreseeable risks. (2) DISTINCTION FROM EUTHANASIA: In active euthanasia or physician-assisted death, the physician's explicit primary intent is to end the patient's life to eliminate suffering. In palliative symptom titration and palliative sedation, the sole intent is to relieve refractory distress. Furthermore, extensive prospective palliative studies demonstrate that properly titrated opioids and sedatives at the end of life do NOT hasten death, but rather maintain physiological comfort."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Titrating opioids/sedatives for intractable pain is justified by the Principle of Double Effect: primary intent is symptom relief, even if hastening death is a foreseen secondary risk.",
      "distractorExclusionNotes": "Distractor exclusion verified: Under-treating refractory terminal pain violates medical ethics; the Principle of Double Effect permits proportionate opioid titration despite respiratory risk.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Titrating opioids/sedatives for intractable pain is justified by the Principle of Double Effect: primary intent is symptom relief, even if hastening death is a foreseen secondary risk.",
    "necessaryInference": "Titrating opioids/sedatives for intractable pain is justified by the Principle of Double Effect: primary intent is symptom relief, even if hastening death is a foreseen secondary risk.",
    "strongestDistractor": "The Rule of Non-Maleficence Priority: the ethical duty to avoid causing death strictly supersedes the duty of beneficence, requiring that the morphine dose be capped below any level that alters respiratory rate",
    "distractorExclusion": "Under-treating refractory terminal pain violates medical ethics; the Principle of Double Effect permits proportionate opioid titration despite respiratory risk.",
    "citation": "Quill TE, Dresser R, Brock DW. The rule of double effect--a critique of its role in end-of-life decision making. N Engl J Med. 1997;337(24):1768-1771. PMID: 9392706."
  },
  {
    "code": "op-c-s3-0484",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Withholding vs Withdrawing Life-Sustaining Treatment Equivalence",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent; stopping non-beneficial treatment allows underlying disease to cause death.",
      "distractorExclusionNotes": "Distractor exclusion verified: The commission vs omission distinction is rejected by bioethics and law; both withholding and withdrawing require identical justification based on patient goals.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent; stopping non-beneficial treatment allows underlying disease to cause death.",
    "necessaryInference": "Withholding and withdrawing life-sustaining treatment are ethically and legally equivalent; stopping non-beneficial treatment allows underlying disease to cause death.",
    "strongestDistractor": "Withholding treatment is ethically superior to withdrawing treatment because withholding represents passive omission while withdrawing represents active commission",
    "distractorExclusion": "The commission vs omission distinction is rejected by bioethics and law; both withholding and withdrawing require identical justification based on patient goals.",
    "citation": "President's Commission for the Study of Ethical Problems. Deciding to Forego Life-Sustaining Treatment. U.S. GPO; 1983."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Absent brainstem reflexes + positive apnea test (no breaths, PaCO2 66 [>= 60 and >= 20 above baseline]) = brain death confirmed without ancillary testing.",
      "distractorExclusionNotes": "Distractor exclusion verified: Ancillary flow testing is needed only if apnea testing cannot be completed; a definitive clinical exam + apnea test is conclusive.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Absent brainstem reflexes + positive apnea test (no breaths, PaCO2 66 [>= 60 and >= 20 above baseline]) = brain death confirmed without ancillary testing.",
    "necessaryInference": "Absent brainstem reflexes + positive apnea test (no breaths, PaCO2 66 [>= 60 and >= 20 above baseline]) = brain death confirmed without ancillary testing.",
    "strongestDistractor": "The patient cannot be declared legally dead until an ancillary four-vessel cerebral angiogram or radionuclide scan confirms absent intracranial blood flow",
    "distractorExclusion": "Ancillary flow testing is needed only if apnea testing cannot be completed; a definitive clinical exam + apnea test is conclusive.",
    "citation": "Greer DM, Shemie SD, Lewis A, et al. Determination of brain death/death by neurologic criteria: the World Brain Death Project. JAMA. 2020;324(11):1078-1097. PMID: 32749449."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Primary treating team must notify OPO but cannot independently request organ donation; only trained OPO coordinators/designated requestors can approach the family.",
      "distractorExclusionNotes": "Distractor exclusion verified: OPO notification must occur while ventilation is maintained; delaying contact until circulatory arrest destroys organ viability and violates CMS rules.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Primary treating team must notify OPO but cannot independently request organ donation; only trained OPO coordinators/designated requestors can approach the family.",
    "necessaryInference": "Primary treating team must notify OPO but cannot independently request organ donation; only trained OPO coordinators/designated requestors can approach the family.",
    "strongestDistractor": "The primary healthcare team must first disconnect mechanical ventilation and allow circulatory arrest to occur before any contact with the OPO is legally permitted",
    "distractorExclusion": "OPO notification must occur while ventilation is maintained; delaying contact until circulatory arrest destroys organ viability and violates CMS rules.",
    "citation": "American Medical Association. Organ donation: Code of Medical Ethics Opinion 6.1.1. AMA; 2016."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Adolescent minors can independently consent to confidential STI treatment, contraception, substance abuse, and mental healthcare without parental consent.",
      "distractorExclusionNotes": "Distractor exclusion verified: Minor consent exceptions cover both STI treatment AND contraception; parental consent is not required for contraceptive provision.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Adolescent minors can independently consent to confidential STI treatment, contraception, substance abuse, and mental healthcare without parental consent.",
    "necessaryInference": "Adolescent minors can independently consent to confidential STI treatment, contraception, substance abuse, and mental healthcare without parental consent.",
    "strongestDistractor": "Parental consent is legally required for all prescription contraceptives in patients under age 18, but STI treatment may be administered confidentially without parental knowledge",
    "distractorExclusion": "Minor consent exceptions cover both STI treatment AND contraception; parental consent is not required for contraceptive provision.",
    "citation": "American Academy of Pediatrics Committee on Bioethics. Informed consent in decision-making in pediatric practice. Pediatrics. 2016;138(2):e20161484. PMID: 27456514."
  },
  {
    "code": "op-c-s3-0488",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Involuntary Psychiatric Commitment Criteria and Due Process Protections",
    "subtopic": "Imminent Danger to Self, Danger to Others, Grave Disability vs Mere Eccentricity or Refusal of Care",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old man with a long-standing history of paranoid schizophrenia is brought to the emergency department by mobile crisis workers. Over the past 3 weeks, he stopped taking his oral fluphenazine because he believes it contains microchips implanted by the federal government. On mental status examination, he is disheveled, unkempt, guarded, and exhibits paranoid delusions and auditory hallucinations of voices commenting on his actions. When asked about his living situation, he states that he lives alone in his apartment, purchases groceries with his monthly disability stipend, cooks his meals, pays his rent, and maintains running water and electricity. Cognitive testing reveals intact orientation to person, place, and date. When asked about harm, he vehemently denies any active suicidal ideation, intent, or plan ('I value my life; God protects me'), and denies any homicidal thoughts or desire to hurt anyone. He states: 'I do not want to be in this hospital, and I refuse to take any medications from you.' The emergency medicine resident asks whether this patient meets criteria for involuntary psychiatric commitment.\n\nWhich of the following describes the legal and ethical standard regarding involuntary psychiatric civil commitment for this patient?",
    "choices": [
      [
        "The patient does NOT meet criteria for involuntary civil commitment because he poses no imminent danger to himself or others and is not gravely disabled (he is capable of procuring food, shelter, and maintaining basic self-care); the presence of active psychosis and refusal of psychiatric treatment alone do not legally justify involuntary detention",
        "Involuntary psychiatric civil commitment represents a severe deprivation of individual liberty and is governed by strict constitutional standards (O'Connor v. Donaldson, 1975; Addington v. Texas, 1979): (1) CONSTITUTIONAL THRESHOLDS: The state cannot involuntarily confine an individual with mental illness unless clear and convincing evidence demonstrates that the person satisfies at least one of three specific criteria: (a) Imminent danger to self (active suicidal intent, plan, or severe self-harm); (b) Imminent danger to others (specific homicidal threats or violent acts toward others); (c) Grave disability (an inability resulting from mental illness to provide for one's own basic survival needs\u2014food, clothing, shelter, or essential medical care). (2) PSYCHOSIS AND TREATMENT REFUSAL ARE INSUFFICIENT: A patient may suffer from chronic psychosis, hold bizarre persecutory delusions, and reject recommended antipsychotic pharmacotherapy; however, if the patient maintains the functional capacity to feed himself, maintain housing, and does not pose an imminent physical danger, civil commitment is unconstitutional. Eccentricity, delusion, or poor judgment alone do not forfeit constitutional liberty. (3) CLINICAL MANAGEMENT: The team must utilize de-escalation, motivational interviewing, outpatient assertive community treatment (ACT), and engage trusted case managers rather than illegal involuntary commitment."
      ],
      [
        "The patient meets criteria for mandatory involuntary 72-hour commitment because anyone with active persecutory delusions lacks medical decision-making capacity and must be hospitalized",
        "Delusions or lack of treatment insight do not automatically satisfy statutory civil commitment criteria in the absence of imminent danger or grave disability."
      ],
      [
        "The patient meets criteria for involuntary commitment under the doctrine of parens patriae because he requires neuroleptic medication to cure his thought disorder",
        "Parens patriae does not authorize involuntary psychiatric detention of non-dangerous individuals who can safely survive in the community."
      ],
      [
        "The clinician may involuntarily commit the patient only if his biological parents or nearest relatives sign a written authorization form",
        "Commitment criteria are established by statutory judicial law based on dangerousness and disability, not by family member authorization."
      ],
      [
        "The patient may be involuntarily committed only if he has committed an active felony offense within the emergency department suite",
        "Civil commitment is a mental health protective process, not a criminal proceeding; criminal charges are not a prerequisite for psychiatric commitment."
      ]
    ],
    "rationale": "Involuntary psychiatric civil commitment requires clear evidence of imminent danger to self, danger to others, or grave disability (inability to provide basic food, clothing, or shelter). The presence of active delusions or refusal of antipsychotic medication alone does not meet legal criteria for involuntary commitment if the patient is functional and non-dangerous.",
    "metadata": {
      "shortSolution": "Active delusions/treatment refusal without imminent danger to self/others or grave disability -> does NOT meet criteria for involuntary civil commitment.",
      "competingChoice": "The patient meets criteria for mandatory involuntary 72-hour commitment because anyone with active persecutory delusions lacks medical decision-making capacity and must be hospitalized",
      "exclusionFinding": "Civil commitment requires imminent danger or grave disability; mere psychosis or refusal of care is constitutionally insufficient for detention.",
      "pedagogicalValue": "Mastering the constitutional, statutory, and ethical criteria for involuntary psychiatric civil commitment versus voluntary care.",
      "citations": [
        "O'Connor v. Donaldson, 422 U.S. 563 (1975).",
        "Appelbaum PS. Civil commitment. In: Almost a Revolution: Mental Health Law and the Limits of Change. Oxford University Press; 1994."
      ]
    },
    "critique": {
      "shortestValidSolution": "Psychotic patient who can feed/house himself and has no suicidal/homicidal danger -> does not meet civil commitment criteria (liberty protected).",
      "strongestCompetitor": "The patient meets criteria for mandatory involuntary 72-hour commitment because anyone with active persecutory delusions lacks medical decision-making capacity and must be hospitalized",
      "exclusionFinding": "Delusions and lack of insight without dangerousness or grave disability fail constitutional commitment thresholds (O'Connor v. Donaldson).",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Active delusions/treatment refusal without imminent danger to self/others or grave disability -> does NOT meet criteria for involuntary civil commitment.",
      "distractorExclusionNotes": "Distractor exclusion verified: Civil commitment requires imminent danger or grave disability; mere psychosis or refusal of care is constitutionally insufficient for detention.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Active delusions/treatment refusal without imminent danger to self/others or grave disability -> does NOT meet criteria for involuntary civil commitment.",
    "necessaryInference": "Active delusions/treatment refusal without imminent danger to self/others or grave disability -> does NOT meet criteria for involuntary civil commitment.",
    "strongestDistractor": "The patient meets criteria for mandatory involuntary 72-hour commitment because anyone with active persecutory delusions lacks medical decision-making capacity and must be hospitalized",
    "distractorExclusion": "Civil commitment requires imminent danger or grave disability; mere psychosis or refusal of care is constitutionally insufficient for detention.",
    "citation": "Appelbaum PS. Almost a Revolution: Mental Health Law and the Limits of Change. Oxford University Press; 1994. NLM ID: 9425883."
  },
  {
    "code": "op-c-s3-0489",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Jehovah's Witness Competent Adult Blood Refusal and Conservation",
    "subtopic": "Informed Refusal of Blood Products, Patient Autonomy vs Beneficence, Non-Blood Resuscitation Modalities",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman is admitted to the surgical intensive care unit following an emergency exploratory laparotomy for a ruptured ectopic pregnancy. She experienced extensive hemoperitoneum, and surgical hemostasis was successfully achieved. Postoperatively, she is awake, alert, fully oriented, and demonstrates intact decision-making capacity (understands her condition, risks, benefits, and alternatives). Her hemoglobin has decreased from 12.8 g/dL to 5.4 g/dL, blood pressure is 104/66 mmHg, heart rate is 112/min, and lactic acid is 3.2 mmol/L. The patient is a practicing Jehovah's Witness and carries an advance medical directive card stating her refusal of all allogeneic blood products (packed red blood cells, whole blood, platelets, and plasma). The surgical team explains that her severe anemia carries a significant risk of myocardial ischemia, severe organ hypoperfusion, and death. The patient acknowledges and understands these lethal risks but calmly and unequivocally refuses allogeneic blood transfusion, stating: 'Receiving blood violates my faith and eternal salvation. I want to live, but I must refuse blood.' Her non-Jehovah's Witness husband pleads with the surgeon: 'Please give her blood anyway! She has two young children who need their mother!'\n\nWhich of the following represents the most legally and ethically appropriate action by the surgical team?",
    "choices": [
      [
        "Honor the competent adult patient's informed refusal of allogeneic blood transfusion despite the risk of death, while maximizing non-blood resuscitation strategies including intravenous crystalloids, high-dose intravenous iron, recombinant human erythropoietin, and intraoperative/cell-salvage technologies if acceptable to the patient",
        "The legal and ethical doctrine governing blood refusal in competent adult Jehovah's Witnesses is a cornerstone of medical ethics and constitutional law: (1) ABSOLUTE RIGHT OF INFORMED REFUSAL: A competent adult has the absolute legal and ethical right to refuse any medical treatment\u2014including life-saving interventions such as blood transfusions\u2014even if refusal will result in death (principle of patient autonomy; Cruzan v. Director, Missouri Dept of Health). (2) CAPACITY & VOLUNTARINESS: Clinicians must ensure the patient possesses decision-making capacity (understanding the risk of death) and that the decision is free from external coercion. When capacity is intact, family members (including spouses) have NO legal standing to override the patient's competent refusal. (3) MAXIMIZING BLOODLESS MEDICINE: Respecting refusal does NOT mean abandoning the patient. Clinicians must aggressively employ multimodal blood conservation and non-blood resuscitation strategies: (a) Volume resuscitation with crystalloids or non-blood colloids; (b) Recombinant human erythropoietin (EPO) and high-dose IV iron to stimulate erythropoiesis; (c) Minimizing phlebotomy (pediatric microtainers); (d) Tranexamic acid (antifibrinolytic); (e) Inquiring about individual acceptable fractions (e.g., albumin, clotting factor concentrates, continuous closed-circuit cell salvage), as many Jehovah's Witnesses accept blood fractions or closed-loop autologous recovery. (4) DISTRACTOR ANALYSIS: Transfusing against explicit competent refusal constitutes battery and gross civil rights violation; petitioning a judge to force transfusion in a competent adult will be universally denied."
      ],
      [
        "Administer 2 units of packed red blood cells immediately under emergency implied consent because the spouse provides surrogate authorization and the patient has minor children",
        "Emergency implied consent and spousal consent do not apply to a competent adult who explicitly refuses; transfusing against competent refusal constitutes common law battery."
      ],
      [
        "Petition a local probate judge for an emergency temporary guardianship order to strip the patient of medical decision-making capacity due to religious extremism",
        "Religious beliefs do not constitute mental incapacity; competent adults have the constitutional right to base medical refusals on religious convictions."
      ],
      [
        "Administer whole blood transfusion covertly during sleep while masking the intravenous infusion bag with opaque tape",
        "Deceptive covert administration of a refused treatment violates fundamental human dignity, professional medical ethics, and criminal statutes."
      ],
      [
        "Discharge the patient from the intensive care unit immediately because refusing standard-of-care transfusion forfeits all medical treatment rights",
        "Refusal of a specific intervention does not justify patient abandonment; the clinician remains obligated to provide all acceptable supportive care."
      ]
    ],
    "rationale": "A competent adult patient possesses the absolute ethical and legal right to refuse life-saving allogeneic blood transfusion based on personal or religious convictions. The clinical team must honor this refusal, resist spousal objections, and aggressively utilize non-blood conservation and resuscitation modalities (IV iron, erythropoietin, minimal blood sampling).",
    "metadata": {
      "shortSolution": "Competent adult Jehovah's Witness refusing blood -> honor informed refusal, reject spousal override, and optimize non-blood alternatives (IV iron, EPO, volume).",
      "competingChoice": "Administer 2 units of packed red blood cells immediately under emergency implied consent because the spouse provides surrogate authorization and the patient has minor children",
      "exclusionFinding": "Spouses have zero authority to override a competent patient's informed refusal; transfusing against competent refusal is legal battery.",
      "pedagogicalValue": "Understanding patient autonomy, informed refusal, legal rights of competent adults, and bloodless medicine strategies in Jehovah's Witness patients.",
      "citations": [
        "Cruzan v. Director, Missouri Department of Health, 497 U.S. 261 (1990).",
        "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Competent adult refusing blood -> honor autonomy and refusal (spousal override invalid) + provide non-blood resuscitation.",
      "strongestCompetitor": "Administer 2 units of packed red blood cells immediately under emergency implied consent because the spouse provides surrogate authorization and the patient has minor children",
      "exclusionFinding": "Competent refusal invalidates emergency consent and spousal standing; forcing blood is battery.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Competent adult Jehovah's Witness refusing blood -> honor informed refusal, reject spousal override, and optimize non-blood alternatives (IV iron, EPO, volume).",
      "distractorExclusionNotes": "Distractor exclusion verified: Spouses have zero authority to override a competent patient's informed refusal; transfusing against competent refusal is legal battery.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Competent adult Jehovah's Witness refusing blood -> honor informed refusal, reject spousal override, and optimize non-blood alternatives (IV iron, EPO, volume).",
    "necessaryInference": "Competent adult Jehovah's Witness refusing blood -> honor informed refusal, reject spousal override, and optimize non-blood alternatives (IV iron, EPO, volume).",
    "strongestDistractor": "Administer 2 units of packed red blood cells immediately under emergency implied consent because the spouse provides surrogate authorization and the patient has minor children",
    "distractorExclusion": "Spouses have zero authority to override a competent patient's informed refusal; transfusing against competent refusal is legal battery.",
    "citation": "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016."
  },
  {
    "code": "op-c-s3-0490",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Parental Refusal of Life-Saving Medical Care for a Minor",
    "subtopic": "Limits of Parental Authority, State Parens Patriae Protection, Emergency Court Orders for Life-Threatening Pediatric Emergencies",
    "provisionalDifficulty": 5,
    "stem": "A 6-year-old boy is brought to the pediatric trauma center following a high-speed motor vehicle collision in which he was an unrestrained passenger. The child has sustained blunt abdominal trauma with a grade IV splenic laceration and active arterial extravasation confirmed on contrast-enhanced CT scanning. In the pediatric intensive care unit, the child develops hemorrhagic shock: heart rate is 168/min, blood pressure is 68/40 mmHg, capillary refill is 5 seconds, and hemoglobin has dropped acutely to 4.8 g/dL. The pediatric intensivist and pediatric trauma surgeon determine that immediate blood transfusion and emergency exploratory laparotomy/splenectomy are required to save the child's life. The child's parents are devout Jehovah's Witnesses. They state: 'We love our son dearly, but our religious faith strictly forbids receiving blood. We refuse consent for any blood transfusion. You may perform surgery, but you must not give him blood under any circumstances, even if he dies.'\n\nWhich of the following represents the legally and ethically mandatory course of action for the clinical team?",
    "choices": [
      [
        "Proceed immediately with emergent blood transfusion and life-saving surgical intervention under the doctrine of parens patriae, while hospital legal counsel files an emergency petition for temporary medical custody or court authorization, because parental rights are not absolute and parents do not have the legal authority to martyr their minor children",
        "The legal and ethical framework governing pediatric medical decision-making establishes that PARENTAL AUTHORITY HAS CLEAR, UNCOMPROMISING LIMITS (Prince v. Massachusetts, 1944): (1) ADULTS VS MINORS: While a competent adult has the legal right to refuse life-saving blood transfusion for themselves, parents DO NOT have the legal or ethical right to refuse life-saving, non-experimental medical care for their minor children based on religious beliefs ('Parents may be free to become martyrs themselves; but it does not follow that they are free, in identical circumstances, to make martyrs of their children'). (2) THE DOCTRINE OF PARENS PATRIAE: The state possesses an overriding sovereign interest (parens patriae\u2014'parent of the nation') to protect vulnerable children from life-threatening neglect or preventable death. (3) EMERGENCY PROTOCOL: In an acute life-threatening pediatric emergency (such as severe hemorrhagic shock from a grade IV splenic rupture), the clinical team must NOT delay life-saving treatment: clinicians must immediately initiate blood transfusion and surgery to save the child's life. Concurrently or immediately thereafter, hospital social services and legal counsel contact the juvenile/probate court to obtain an emergency temporary protective custody order or medical guardianship authorizing treatment. (4) DISTRACTOR ANALYSIS: Honoring parental refusal and allowing the child to exsanguinate constitutes medical neglect and civil/criminal liability; transferring the child while in profound shock violates EMTALA and causes death en route."
      ],
      [
        "Honor the parents' refusal of blood transfusion, as parents possess absolute constitutional authority over all medical decisions involving their minor children",
        "Parental rights over children are not absolute; parents have no legal right to withhold life-saving treatment from children based on religious convictions."
      ],
      [
        "Delay blood transfusion and emergency surgery until a formal contested judicial evidentiary hearing can be scheduled with the family court in 3 business days",
        "Delaying life-saving transfusion in a child with hemorrhagic shock (BP 68/40, Hb 4.8) will cause fatal cardiac arrest within minutes to hours."
      ],
      [
        "Immediately transfer the actively hemorrhaging child by ambulance to a specialized bloodless medicine surgery facility in another state",
        "Transferring an unstable, actively exsanguinating child violates EMTALA, causes death in transit, and represents failure of emergency stabilization."
      ],
      [
        "Perform the exploratory laparotomy without blood transfusion and agree to withdraw all care if cardiovascular collapse ensues intraoperatively",
        "Operating on a child with grade IV splenic hemorrhage and Hb 4.8 without blood transfusion carries near-certain mortality and violates pediatric standard of care."
      ]
    ],
    "rationale": "Parents do not have the legal or ethical right to refuse life-saving medical care (including blood transfusions) for their minor children. Under the state's parens patriae authority, clinicians must proceed with immediate emergent transfusion and life-saving surgery while hospital legal counsel secures emergency protective custody or court authorization.",
    "metadata": {
      "shortSolution": "Parents refusing life-saving blood for minor child -> transfuse and operate immediately to save child (parens patriae; parents cannot martyr minor children); obtain emergency court order.",
      "competingChoice": "Honor the parents' refusal of blood transfusion, as parents possess absolute constitutional authority over all medical decisions involving their minor children",
      "exclusionFinding": "Parental authority over minors is legally restricted; Prince v. Massachusetts establishes that parents cannot refuse life-saving care for children.",
      "pedagogicalValue": "Understanding the limits of parental authority, the doctrine of parens patriae, and emergency management of pediatric blood refusal.",
      "citations": [
        "Prince v. Massachusetts, 321 U.S. 158 (1944).",
        "American Academy of Pediatrics Committee on Bioethics. Religious objections to medical care. Pediatrics. 2013;131(1):e378-e380. PMID: 23277322."
      ]
    },
    "critique": {
      "shortestValidSolution": "Parents refuse life-saving transfusion for bleeding child -> immediately transfuse/operate under parens patriae (parents cannot martyr children) + notify court.",
      "strongestCompetitor": "Honor the parents' refusal of blood transfusion, as parents possess absolute constitutional authority over all medical decisions involving their minor children",
      "exclusionFinding": "Parental rights are legally limited; state parens patriae mandates intervening to save a child's life over parental religious refusal.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Parents refusing life-saving blood for minor child -> transfuse and operate immediately to save child (parens patriae; parents cannot martyr minor children); obtain emergency court order.",
      "distractorExclusionNotes": "Distractor exclusion verified: Parental authority over minors is legally restricted; Prince v. Massachusetts establishes that parents cannot refuse life-saving care for children.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Parents refusing life-saving blood for minor child -> transfuse and operate immediately to save child (parens patriae; parents cannot martyr minor children); obtain emergency court order.",
    "necessaryInference": "Parents refusing life-saving blood for minor child -> transfuse and operate immediately to save child (parens patriae; parents cannot martyr minor children); obtain emergency court order.",
    "strongestDistractor": "Honor the parents' refusal of blood transfusion, as parents possess absolute constitutional authority over all medical decisions involving their minor children",
    "distractorExclusion": "Parental authority over minors is legally restricted; Prince v. Massachusetts establishes that parents cannot refuse life-saving care for children.",
    "citation": "American Academy of Pediatrics. Religious objections to medical care. Pediatrics. 2013;131(1):e378-e380. PMID: 23277322."
  },
  {
    "code": "op-c-s3-0491",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Professional Boundaries: Accepting and Declining Gifts from Patients",
    "subtopic": "Distinguishing Small Inexpensive Token Gifts from Expensive, Personal, or Disproportionate Gifts",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old wealthy business executive who underwent successful resection of an early-stage colon cancer arrives at his primary care physician's clinic for a routine 6-month surveillance visit. He expresses immense gratitude for the physician's early diagnosis, stating: 'Doctor, you literally saved my life. I want to show my appreciation.' At the end of the visit, the patient hands the physician an envelope containing two tickets to an exclusive VIP box at the Super Bowl, along with an airline flight and luxury hotel package with a total estimated monetary value of $14,000. When the physician appears hesitant, the patient insists: 'Please, it's nothing to me, and I will be deeply offended if you don't take it.'\n\nAccording to the AMA Code of Medical Ethics regarding gifts from patients, which of the following is the most appropriate response by the physician?",
    "choices": [
      [
        "Graciously decline the luxury tickets and travel package, explain that professional ethical standards prevent physicians from accepting expensive personal gifts that could compromise professional objectivity or create perceived favoritism, and express sincere gratitude for the patient's kind words and successful recovery",
        "Professional boundaries regarding gifts from patients are governed by the AMA Code of Medical Ethics Opinion 1.2.8: (1) EVALUATING GIFTS: While patients often offer gifts as a genuine expression of gratitude, gifts can compromise\u2014or appear to compromise\u2014the physician's clinical objectivity, alter the doctor-patient therapeutic relationship, or foster expectations of preferential treatment. (2) TOKEN GIFTS VS EXPENSIVE GIFTS: (a) Small Token Gifts: Modest, inexpensive items (e.g., home-baked cookies, a book, a small box of chocolates, or hand-knit crafts) given around holidays or after major recovery are ethically permissible to accept, as refusing them might humiliate the patient and damage the therapeutic rapport; (b) Expensive, Disproportionate, or Luxury Gifts: Gifts of significant monetary value (e.g., thousands of dollars, luxury vacations, jewelry, cash) must ALWAYS be politely and graciously declined. Accepting substantial gifts creates subconscious obligations, skews clinical judgment, fosters dual relationships, and can exploit vulnerable patients. (3) DIPLOMATIC DECLINATION: The clinician should decline warmly without shaming the patient: expressing gratitude for the generous sentiment, explaining the institutional/professional ethical guidelines that prohibit accepting valuable gifts, and suggesting that if the patient wishes, a charitable donation to the clinic's patient assistance fund or hospital cancer research endowment would be welcomed."
      ],
      [
        "Accept the tickets and luxury hotel package, as declining an offered gift is culturally insensitive and causes irreparable damage to the patient-physician relationship",
        "Accepting a $14,000 luxury gift breaches professional boundaries, compromises clinical objectivity, and violates the AMA Code of Medical Ethics."
      ],
      [
        "Accept the luxury gift on the condition that the patient agrees to transfer his primary medical care to another physician in the clinic",
        "Conditioning acceptance of a lavish gift on terminating the doctor-patient relationship is manipulative, unethical, and fails to remedy the boundary violation."
      ],
      [
        "Accept the tickets but sell them online at auction, keeping the cash proceeds in an unmonitored personal office slush fund for physician bonuses",
        "Liquidating an inappropriate patient gift for personal cash compensation is unethical, deceptive, and violates medical licensing regulations."
      ],
      [
        "Demand that the patient provide an additional four tickets for the clinic nursing and administrative staff before accepting the offer",
        "Demanding additional expensive gifts for clinic staff compounds the ethical violation and constitutes active solicitation of patient favors."
      ]
    ],
    "rationale": "Physicians must decline expensive, disproportionate, or luxury gifts from patients to preserve clinical objectivity and avoid dual relationships or expectations of preferential treatment. While small inexpensive token gifts of appreciation may be accepted, expensive gifts ($14,000 travel package) must be declined graciously while explaining professional ethical guidelines.",
    "metadata": {
      "shortSolution": "Physician must graciously decline expensive luxury gifts ($14,000 package) to protect objectivity and boundaries, while thanking patient for kind sentiment.",
      "competingChoice": "Accept the tickets and luxury hotel package, as declining an offered gift is culturally insensitive and causes irreparable damage to the patient-physician relationship",
      "exclusionFinding": "Lavish gifts violate professional boundaries and compromise clinical objectivity; AMA ethics explicitly prohibits accepting valuable gifts.",
      "pedagogicalValue": "Mastering professional boundaries, gift evaluation criteria, and diplomatic refusal techniques under the AMA Code of Medical Ethics.",
      "citations": [
        "American Medical Association. Gifts from patients: Code of Medical Ethics Opinion 1.2.8. AMA; 2016.",
        "Lyckholm LJ. Thirty days in the clinic: a perspective on receiving gifts from patients. Camb Q Healthc Ethics. 1998;7(4):378-383. PMID: 9789392."
      ]
    },
    "critique": {
      "shortestValidSolution": "Expensive/lavish gift from patient -> graciously decline, explain professional boundary standards, and validate gratitude.",
      "strongestCompetitor": "Accept the tickets and luxury hotel package, as declining an offered gift is culturally insensitive and causes irreparable damage to the patient-physician relationship",
      "exclusionFinding": "AMA ethics strictly forbids accepting expensive luxury gifts due to boundary degradation and impaired objectivity.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Physician must graciously decline expensive luxury gifts ($14,000 package) to protect objectivity and boundaries, while thanking patient for kind sentiment.",
      "distractorExclusionNotes": "Distractor exclusion verified: Lavish gifts violate professional boundaries and compromise clinical objectivity; AMA ethics explicitly prohibits accepting valuable gifts.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Physician must graciously decline expensive luxury gifts ($14,000 package) to protect objectivity and boundaries, while thanking patient for kind sentiment.",
    "necessaryInference": "Physician must graciously decline expensive luxury gifts ($14,000 package) to protect objectivity and boundaries, while thanking patient for kind sentiment.",
    "strongestDistractor": "Accept the tickets and luxury hotel package, as declining an offered gift is culturally insensitive and causes irreparable damage to the patient-physician relationship",
    "distractorExclusion": "Lavish gifts violate professional boundaries and compromise clinical objectivity; AMA ethics explicitly prohibits accepting valuable gifts.",
    "citation": "American Medical Association. Gifts from patients: Code of Medical Ethics Opinion 1.2.8. AMA; 2016."
  },
  {
    "code": "op-c-s3-0492",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Professional Boundaries: Romantic and Sexual Relationships with Patients",
    "subtopic": "Absolute Ethical Prohibition with Current Patients, Mandatory Formal Care Transfer, Power Asymmetry",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old unmarried primary care physician has been providing longitudinal care for a 29-year-old woman with well-controlled asthma and allergic rhinitis for the past 14 months. Over recent clinic visits, their conversations have grown increasingly personal. During an annual physical examination, the patient tells the physician: 'I really look forward to seeing you, and I feel a special connection between us. Would you like to go to dinner with me this Saturday night?' The physician acknowledges to himself that he experiences mutual romantic and emotional attraction toward the patient.\n\nAccording to the AMA Code of Medical Ethics and state medical licensing boards, which of the following represents the required ethical conduct for the physician?",
    "choices": [
      [
        "Decline the romantic invitation while maintaining professional decorum, explain that romantic or sexual relationships between a physician and a current patient are strictly prohibited by professional medical ethics, and if a romantic relationship is to be pursued, formally and completely terminate the physician-patient relationship and transfer her medical care to another independent clinician",
        "Professional boundaries regarding romantic and sexual interactions are among the strictest ethical standards in medicine (AMA Code of Medical Ethics Opinion 9.1.1): (1) ABSOLUTE PROHIBITION WITH CURRENT PATIENTS: Sexual or romantic relationships between a physician and a CURRENT patient are completely unethical. The physician-patient relationship involves inherent power asymmetries, emotional vulnerability, access to intimate physical examination, and confidential personal history. Romantic involvement exploits this vulnerability, obliterates clinical objectivity, and constitutes professional misconduct. (2) ACTION REQUIRED: The physician must clearly and politely decline the invitation, explaining that professional standards forbid dating current patients. (3) PURSUING A RELATIONSHIP REQUIRES COMPLETE TERMINATION: If the physician and patient genuinely wish to pursue a personal romantic relationship, the physician-patient relationship must be FORMALLY AND DEFINITIVELY TERMINATED BEFORE any romantic interaction occurs. The physician must assist the patient in transferring her medical care to an independent, unrelated clinician, ensure continuity of medications, and observe an appropriate 'cooling-off' period. (4) PSYCHIATRIC CARE EXCEPTION: In psychiatry and psychotherapy, sexual or romantic relationships with former patients are almost universally considered permanently unethical and prohibited indefinitely due to the enduring psychological transference."
      ],
      [
        "Accept the dinner date, provided that the physician and patient agree to keep their romantic relationship secret from clinic administrative staff and avoid talking about medical issues",
        "Secrecy does not cure the fundamental ethical violation; engaging in romantic relationships with current patients constitutes gross professional misconduct."
      ],
      [
        "Continue providing primary medical care and prescribing asthma medications while engaging in a consensual dating relationship outside office hours",
        "Dating a current patient while continuing to provide clinical care destroys professional boundaries and is grounds for medical license revocation."
      ],
      [
        "Accept the invitation, provided that the physician bills the health insurance plan for a formal psychiatric psychotherapy session during the dinner date",
        "Billing insurance for a personal dinner date constitutes criminal healthcare fraud and severe ethical malpractice."
      ],
      [
        "Immediately file a police report against the patient for professional harassment and request an emergency civil restraining order",
        "Politely declining an invitation is the standard professional response; criminal harassment reports for an invited dinner date are completely unjustified."
      ]
    ],
    "rationale": "Romantic or sexual relationships between a physician and a current patient are strictly prohibited by medical ethics. If a physician wishes to pursue a romantic relationship, the physician-patient relationship must be formally and completely terminated, and the patient's care transferred to another clinician.",
    "metadata": {
      "shortSolution": "Romantic relationship with current patient is strictly prohibited; must decline, and if pursuing, must formally terminate doctor-patient relationship and transfer care.",
      "competingChoice": "Continue providing primary medical care and prescribing asthma medications while engaging in a consensual dating relationship outside office hours",
      "exclusionFinding": "Treating a current patient while dating is an egregious boundary violation and causes loss of clinical objectivity and licensure sanctions.",
      "pedagogicalValue": "Mastering professional boundary rules, power asymmetry dynamics, and protocols governing romantic/sexual conflicts of interest in medicine.",
      "citations": [
        "American Medical Association. Romantic or sexual relationships with patients: Code of Medical Ethics Opinion 9.1.1. AMA; 2016.",
        "Gabbard GO, Nadelson C. Professional boundaries in the physician-patient relationship. JAMA. 1995;273(18):1445-1449. PMID: 7739081."
      ]
    },
    "critique": {
      "shortestValidSolution": "Dating current patient is unethical -> decline invitation; if pursuing romance, must first terminate medical care and transfer patient.",
      "strongestCompetitor": "Continue providing primary medical care and prescribing asthma medications while engaging in a consensual dating relationship outside office hours",
      "exclusionFinding": "Providing clinical care while dating a patient is an absolute ethical breach leading to disciplinary action.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Romantic relationship with current patient is strictly prohibited; must decline, and if pursuing, must formally terminate doctor-patient relationship and transfer care.",
      "distractorExclusionNotes": "Distractor exclusion verified: Treating a current patient while dating is an egregious boundary violation and causes loss of clinical objectivity and licensure sanctions.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Romantic relationship with current patient is strictly prohibited; must decline, and if pursuing, must formally terminate doctor-patient relationship and transfer care.",
    "necessaryInference": "Romantic relationship with current patient is strictly prohibited; must decline, and if pursuing, must formally terminate doctor-patient relationship and transfer care.",
    "strongestDistractor": "Continue providing primary medical care and prescribing asthma medications while engaging in a consensual dating relationship outside office hours",
    "distractorExclusion": "Treating a current patient while dating is an egregious boundary violation and causes loss of clinical objectivity and licensure sanctions.",
    "citation": "American Medical Association. Romantic or sexual relationships with patients: Code of Medical Ethics Opinion 9.1.1. AMA; 2016."
  },
  {
    "code": "op-c-s3-0493",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Futility and Potentially Inappropriate Treatment Disputes",
    "subtopic": "Multi-Step Fair Process, Ethics Committee Consultation, Inter-Facility Transfer vs Unilateral Abrupt Cessation",
    "provisionalDifficulty": 5,
    "stem": "An 84-year-old man with end-stage ischemic cardiomyopathy, stage 5 chronic kidney disease on intermittent hemodialysis, and severe peripheral vascular disease is admitted to the intensive care unit in refractory septic shock secondary to ischemic bowel gangrene. The surgical team determines that the patient is inoperable due to diffuse mesenteric infarction. Over the past 5 days, despite escalating three-agent vasopressor support (norepinephrine, vasopressin, and epinephrine at maximal doses), continuous venovenous hemodiafiltration, and mechanical ventilation (FiO2 1.0, PEEP 16 cmH2O), the patient exhibits persistent severe lactic acidosis (lactate 14.8 mmol/L), severe anasarca, digital necrosis, and progressive multi-organ failure. The critical care attending determines that continued invasive organ support is physiologically non-beneficial ('futile' / potentially inappropriate) and is simply prolonging the dying process. However, the patient's surrogate (his son) insists that maximal interventions, including full cardiopulmonary resuscitation (CPR) in the event of cardiac arrest, be maintained indefinitely. The attending physician wants to write a unilateral Do Not Resuscitate (DNR) order and immediately turn off the vasopressor infusions over the son's objection.\n\nAccording to national consensus guidelines on resolving disputes over potentially inappropriate treatment (such as the American Thoracic Society/SCCM multi-society policy), which of the following represents the most ethically appropriate next step?",
    "choices": [
      [
        "Implement a structured multi-step fair process (due process): engage in intensive conflict resolution with palliative care mediation, obtain an independent second medical opinion, convene a multidisciplinary hospital ethics committee consultation with the family present, and if consensus cannot be reached, offer the family the opportunity to seek transfer to another willing facility before any unilateral withdrawal is considered",
        "Disputes regarding potentially non-beneficial or inappropriate treatments at the end of life are among the most emotionally charged dilemmas in critical care. A landmark multi-society consensus policy (American Thoracic Society, American Association of Critical-Care Nurses, American College of Chest Physicians, European Society of Intensive Care Medicine, and Society of Critical Care Medicine) established a procedural framework known as 'FAIR PROCESS' (DUE PROCESS): (1) REJECTING UNILATERAL ABRUPT ACTION: A single clinician should NOT unilaterally discontinue ongoing life support or impose a contested DNR order overnight without procedural due process. Unilateral clinician power undermines transparency, disproportionately impacts marginalized families, and creates severe ethical controversy. (2) ESSENTIAL STEPS IN FAIR PROCESS: (a) Intensive Communication & Conflict Resolution: Daily multidisciplinary conferences involving palliative care specialists and cultural/faith liaisons to address surrogate fears and misconceptions; (b) Second Medical Opinion: An independent, uninvolved critical care specialist evaluates the patient's prognosis to confirm physiological non-benefit; (c) Multidisciplinary Ethics Committee Review: Formal consultation where the surrogate presents their perspective and the committee reviews clinical facts; (d) Attempted Inter-Facility Transfer: If the committee agrees the treatment is inappropriate, the family is given a reasonable time window (e.g., 7 to 14 days) to seek transfer to another facility willing to continue therapy; (e) Unilateral Action as Last Resort: Only after full due process is exhausted and transfer fails may the clinical team withdraw non-beneficial treatment with palliative support."
      ],
      [
        "Immediately write a unilateral Do Not Resuscitate (DNR) order and discontinue all vasopressors at bedside because physician autonomy permits unilateral withdrawal of futile therapy at any time",
        "Abrupt unilateral withdrawal without ethics consultation, second opinion, or fair process violates national multi-society due process guidelines."
      ],
      [
        "Perform a 'slow code' (instituting half-hearted chest compressions without defibrillation or epinephrine) when cardiac arrest occurs to avoid confronting the son",
        "A 'slow code' is deceptive, medically fraudulent, violates patient dignity, and is universally condemned by professional ethics codes."
      ],
      [
        "Initiate criminal assault charges against the son for demanding ongoing medical interventions for his dying father",
        "Family members acting as surrogates are expressing grief and moral conviction; criminalizing their advocacy is abusive and legally baseless."
      ],
      [
        "Transfer the patient immediately to an outpatient skilled nursing facility while maintaining three continuous vasopressor infusions",
        "Outpatient nursing facilities cannot manage continuous triple vasopressors; dumping an unstable dying patient violates medical safety and EMTALA."
      ]
    ],
    "rationale": "Resolving disputes over potentially inappropriate treatment requires following a structured multi-step 'fair process' (due process): conflict resolution with palliative care, independent second opinion, multidisciplinary ethics committee consultation, and offering inter-facility transfer before any unilateral cessation of therapy can be considered.",
    "metadata": {
      "shortSolution": "Futility dispute with surrogate requires multi-step fair process: palliative mediation + second opinion + ethics committee review + transfer attempt before unilateral action.",
      "competingChoice": "Immediately write a unilateral Do Not Resuscitate (DNR) order and discontinue all vasopressors at bedside because physician autonomy permits unilateral withdrawal of futile therapy at any time",
      "exclusionFinding": "Abrupt unilateral cessation without procedural due process violates national multi-society consensus (ATS/SCCM/CHEST) standards.",
      "pedagogicalValue": "Mastering the multi-step fair process framework for resolving disputes regarding potentially inappropriate life-sustaining treatment in critical care.",
      "citations": [
        "Bosslet GT, Fallon MB, et al. An official ATS/AACN/ACCP/ESICM/SCCM policy statement: responding to requests for potentially inappropriate treatments in intensive care units. Am J Respir Crit Care Med. 2015;191(11):1318-1330. PMID: 25978438.",
        "American Medical Association. Medical futility in end-of-life care: Code of Medical Ethics Opinion 5.5. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Contested futility/surrogate demands -> structured multi-step fair process (palliative mediation, 2nd opinion, ethics review, transfer option) prior to any unilateral action.",
      "strongestCompetitor": "Immediately write a unilateral Do Not Resuscitate (DNR) order and discontinue all vasopressors at bedside because physician autonomy permits unilateral withdrawal of futile therapy at any time",
      "exclusionFinding": "Unilateral abrupt termination without procedural due process violates national intensive care multi-society consensus guidelines.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Futility dispute with surrogate requires multi-step fair process: palliative mediation + second opinion + ethics committee review + transfer attempt before unilateral action.",
      "distractorExclusionNotes": "Distractor exclusion verified: Abrupt unilateral cessation without procedural due process violates national multi-society consensus (ATS/SCCM/CHEST) standards.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Futility dispute with surrogate requires multi-step fair process: palliative mediation + second opinion + ethics committee review + transfer attempt before unilateral action.",
    "necessaryInference": "Futility dispute with surrogate requires multi-step fair process: palliative mediation + second opinion + ethics committee review + transfer attempt before unilateral action.",
    "strongestDistractor": "Immediately write a unilateral Do Not Resuscitate (DNR) order and discontinue all vasopressors at bedside because physician autonomy permits unilateral withdrawal of futile therapy at any time",
    "distractorExclusion": "Abrupt unilateral cessation without procedural due process violates national multi-society consensus (ATS/SCCM/CHEST) standards.",
    "citation": "Bosslet GT, Fallon MB, et al. An official ATS/AACN/ACCP/ESICM/SCCM policy statement: responding to requests for potentially inappropriate treatments in intensive care units. Am J Respir Crit Care Med. 2015;191(11):1318-1330. PMID: 25978438."
  },
  {
    "code": "op-c-s3-0494",
    "exam": "Step 3",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Genetic Testing Incidental Findings and Disclosure to Biological Relatives",
    "subtopic": "Encouraging Patient Disclosure, Patient Autonomy vs Direct Physician Breach to Third-Party Relatives",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman with a personal history of early-stage triple-negative breast cancer undergoes multigene germline cancer predisposition testing. The clinical geneticist receives the final report, which reveals a pathogenic germline BRCA1 mutation (c.68_69delAG), conferring a lifetime risk of breast cancer up to 72% and ovarian cancer up to 44%. In counseling the patient regarding risk-reducing interventions (salpingo-oophorectomy and intensified surveillance), the geneticist emphasizes that the patient's 38-year-old identical twin sister and 22-year-old daughter each have a 50% to 100% probability of carrying the identical life-threatening mutation, for which established preventive surgeries save lives. The patient becomes sullen, angry, and states: 'I have not spoken to my sister or daughter in 10 years because of an inheritance feud. I hate them. Under no circumstances are you allowed to contact them or tell them about this test. I forbid you from sharing my genetic information with anyone.'\n\nAccording to national professional guidelines from the American Society of Human Genetics (ASHG) and the AMA Code of Medical Ethics, which of the following is the most appropriate action by the physician?",
    "choices": [
      [
        "Maintain patient confidentiality, do not directly contact or disclose genetic test results to the sister or daughter without the patient's authorization, but provide intensive genetic counseling to educate the patient on the preventable cancer risks faced by her biological relatives and encourage her to share the findings",
        "The ethical dilemma surrounding disclosure of actionable hereditary genetic information to biological at-risk relatives involves balancing patient privacy (HIPAA and genetic confidentiality) against preventing harm to third parties: (1) PROFESSIONAL CONSENSUS ON CONFIDENTIALITY: The American Society of Human Genetics (ASHG), the President's Commission, and the AMA Code of Medical Ethics Opinion 2.1.6 establish that patient confidentiality remains the foundational duty: clinicians should NOT directly breach confidentiality to contact biological relatives against a competent patient's explicit refusal. (2) REASONS FOR NON-BREACH: Genetic information is unique, sensitive, and protected by federal law (HIPAA, GINA). Direct unsolicited contact by a physician to an unsuspecting family member can cause profound psychological distress, unwanted medical disclosure, and infringes on a relative's 'right not to know.' (3) ACTIVE ENGAGEMENT & EDUCATION: The physician's ethical responsibility is to work collaboratively with the patient: providing repeated genetic counseling, explaining the substantial benefits of screening and prophylactic oophorectomy for her daughter/sister, exploring the emotional roots of family estrangement, and providing anonymized 'family sharing letters' that the patient can forward. (4) RARE EXCEPTIONS: While ASHG outlines exceptional theoretical circumstances where direct disclosure might be considered (imminent, highly fatal, strictly preventable disease with high penetrance), modern statutory and legal HIPAA protections prohibit direct unauthorized breach to family members in ordinary hereditary cancer syndromes."
      ],
      [
        "Immediately telephone the patient's twin sister and daughter to disclose the pathogenic BRCA1 mutation under the Tarasoff duty to protect",
        "Tarasoff applies strictly to imminent physical violence/homicide; it does not authorize breaching HIPAA to disclose inherited genetic cancer risk."
      ],
      [
        "Send an unredacted copy of the full genetic testing report to the daughter's employer human resources department to mandate preventive testing",
        "Disclosing genetic records to an employer violates HIPAA and the Genetic Information Nondiscrimination Act (GINA), carrying severe federal penalties."
      ],
      [
        "Refuse to provide medical care or cancer surveillance to the patient until she signs a formal release authorizing contact with her relatives",
        "Withholding essential medical care or coercing a patient to forfeit statutory privacy rights is unethical and constitutes patient abandonment."
      ],
      [
        "Notify the state public health department so state epidemiologists can place the biological family under mandatory genetic quarantine",
        "Hereditary cancer genetic variants are not contagious infectious diseases; public health reporting and quarantine have zero legal application here."
      ]
    ],
    "rationale": "Physicians must preserve genetic confidentiality and cannot directly breach privacy to contact biological relatives against an adult patient's refusal. Instead, the clinician must counsel the patient regarding the clinical significance to her family, address emotional barriers, and encourage her to share the actionable results with at-risk relatives.",
    "metadata": {
      "shortSolution": "Patient forbids sharing BRCA1 mutation with estranged family -> preserve confidentiality, do not breach to relatives, but counsel and encourage patient to share.",
      "competingChoice": "Immediately telephone the patient's twin sister and daughter to disclose the pathogenic BRCA1 mutation under the Tarasoff duty to protect",
      "exclusionFinding": "Tarasoff applies only to imminent physical violence/crimes, not hereditary genetic risks; breaching genetic privacy violates HIPAA and ASHG guidelines.",
      "pedagogicalValue": "Understanding the ethical principles of genetic confidentiality, familial implications, and the role of counseling in hereditary disease disclosure.",
      "citations": [
        "American Society of Human Genetics. Professional disclosure of familial genetic information. The American Society of Human Genetics Social Issues Committee report. Am J Hum Genet. 1998;62(2):474-483. PMID: 9463309.",
        "American Medical Association. Genetic testing and counseling: Code of Medical Ethics Opinion 2.1.6. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "BRCA mutation in patient refusing family contact -> uphold confidentiality, do not contact family directly, but counsel patient on family risk.",
      "strongestCompetitor": "Immediately telephone the patient's twin sister and daughter to disclose the pathogenic BRCA1 mutation under the Tarasoff duty to protect",
      "exclusionFinding": "Tarasoff does not apply to genetic predisposition; HIPAA and ASHG prohibit direct non-consensual disclosure to relatives.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient forbids sharing BRCA1 mutation with estranged family -> preserve confidentiality, do not breach to relatives, but counsel and encourage patient to share.",
      "distractorExclusionNotes": "Distractor exclusion verified: Tarasoff applies only to imminent physical violence/crimes, not hereditary genetic risks; breaching genetic privacy violates HIPAA and ASHG guidelines.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient forbids sharing BRCA1 mutation with estranged family -> preserve confidentiality, do not breach to relatives, but counsel and encourage patient to share.",
    "necessaryInference": "Patient forbids sharing BRCA1 mutation with estranged family -> preserve confidentiality, do not breach to relatives, but counsel and encourage patient to share.",
    "strongestDistractor": "Immediately telephone the patient's twin sister and daughter to disclose the pathogenic BRCA1 mutation under the Tarasoff duty to protect",
    "distractorExclusion": "Tarasoff applies only to imminent physical violence/crimes, not hereditary genetic risks; breaching genetic privacy violates HIPAA and ASHG guidelines.",
    "citation": "American Society of Human Genetics. Professional disclosure of familial genetic information. The American Society of Human Genetics Social Issues Committee report. Am J Hum Genet. 1998;62(2):474-483. PMID: 9463309."
  },
  {
    "code": "op-c-s3-0495",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Emergency Medical Treatment and Labor Act (EMTALA) Obligations",
    "subtopic": "Mandatory Medical Screening Examination (MSE), Emergency Stabilization Regardless of Ability to Pay, Transfer Rules",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old uninsured, undocumented immigrant arrives at the emergency department of a private non-profit hospital at 01:15 complaining of severe, sharp, right lower quadrant abdominal pain, fever, and nausea that began 18 hours ago. Her temperature is 38.7 C (101.7 F), heart rate is 118/min, and physical examination demonstrates focal tenderness with voluntary and involuntary guarding over McBurney's point and positive Rovsing sign. An emergency bedside ultrasound reveals a non-compressible, blind-ending tubular appendix measuring 11 mm in diameter with surrounding fluid. An urgent complete blood count reveals a white blood cell count of 17,200/uL with 14% bandemia. The hospital night administrative registration supervisor informs the on-duty emergency physician: 'This patient has no health insurance, no valid identification, and no ability to pay our private hospital facility fee. Our hospital policy states we do not admit uninsured surgical patients. Please arrange an immediate private taxi or ambulance transfer to the county public charity hospital 15 miles across town before our surgical team evaluates her.'\n\nWhich of the following describes the legal and ethical requirements under the Emergency Medical Treatment and Labor Act (EMTALA) in this scenario?",
    "choices": [
      [
        "The hospital and emergency physician are legally mandated to provide an appropriate Medical Screening Examination (MSE) and stabilizing treatment (including surgical appendectomy or hospital admission) within the hospital's capabilities, regardless of the patient's citizenship, insurance status, or ability to pay; transferring an unstabilized patient with an acute surgical abdomen purely for financial reasons constitutes illegal 'patient dumping' under federal law",
        "The Emergency Medical Treatment and Labor Act (EMTALA), enacted by the US Congress in 1986, is a cornerstone federal statute governing emergency care: (1) THREE CORE STATUTORY MANDATES: (a) Medical Screening Examination (MSE): Any individual who presents to a dedicated emergency department requesting examination or treatment MUST receive an appropriate MSE performed by qualified medical personnel (physician, PA, NP) to determine whether an 'emergency medical condition' (EMC) exists; (b) Stabilizing Treatment: If an EMC exists (e.g., acute appendicitis with imminent perforation, severe hemorrhage, acute coronary syndrome, active labor), the hospital MUST provide medical stabilization within its clinical capabilities and staffing, including surgical intervention or inpatient admission; (c) Restrictions on Transfer: An unstabilized patient CANNOT be transferred to another facility unless: (i) the patient/surrogate requests transfer in writing after being informed of risks, OR (ii) a physician certifies that the medical benefits of transfer outweigh the risks (e.g., tertiary burn center or pediatric ECMO), AND the receiving hospital agrees to accept. (2) PROHIBITION ON FINANCIAL DISCRIMINATION: EMTALA strictly prohibits delaying or refusing MSE or stabilization based on ability to pay, insurance coverage, nationality, citizenship, or legal status. Transferring an unstable patient for financial reasons ('patient dumping') carries severe federal civil monetary penalties, loss of Medicare/Medicaid provider status, and personal physician fines. (3) APPLICATION: Acute appendicitis with systemic signs of infection is an emergency medical condition; transferring her across town to avoid uncompensated care is a flagrant federal violation."
      ],
      [
        "Private non-profit hospitals are legally exempt from EMTALA regulations and may divert uninsured patients to municipal public health facilities",
        "Any hospital participating in Medicare (virtually all non-profit and for-profit hospitals) is legally bound by EMTALA; there is no private exemption."
      ],
      [
        "Transfer is legally permissible without surgical evaluation as long as the emergency physician prescribes oral ciprofloxacin and writes a transfer note",
        "Providing oral antibiotics does not stabilize acute appendicitis; transferring an unstabilized surgical abdomen violates federal EMTALA laws."
      ],
      [
        "EMTALA protections apply exclusively to documented United States citizens who possess a valid Social Security number and Medicare eligibility",
        "EMTALA protects ANY individual who presents to an emergency department, regardless of citizenship, residency, or legal immigration status."
      ],
      [
        "The physician must discharge the patient to the street and instruct her to walk to the county hospital to avoid creating an official transfer record",
        "Discharging an unstable emergency patient to evade transfer records constitutes catastrophic patient dumping and gross medical negligence."
      ]
    ],
    "rationale": "Under EMTALA, any individual presenting to an emergency department is entitled to a Medical Screening Examination and stabilizing treatment within the hospital's capabilities (including surgery/admission for acute appendicitis), regardless of ability to pay or citizenship. Transferring an unstabilized emergency patient for financial reasons is illegal 'patient dumping.'",
    "metadata": {
      "shortSolution": "EMTALA mandates medical screening exam and stabilizing treatment (surgery/admission) regardless of insurance/citizenship; transferring an unstabilized patient for financial reasons is illegal dumping.",
      "competingChoice": "Private non-profit hospitals are legally exempt from EMTALA regulations and may divert uninsured patients to municipal public health facilities",
      "exclusionFinding": "All Medicare-participating hospitals (including private non-profits) are bound by EMTALA; there is no exemption based on tax status.",
      "pedagogicalValue": "Mastering federal EMTALA statutory requirements: medical screening exams, stabilization mandates, and anti-dumping transfer restrictions.",
      "citations": [
        "Emergency Medical Treatment and Labor Act (EMTALA), 42 U.S.C. 1395dd.",
        "Zibulewsky J. The Emergency Medical Treatment and Active Labor Act (EMTALA): what it is and what it means for physicians. Proc (Bayl Univ Med Cent). 2001;14(4):339-346. PMID: 16369643."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute surgical abdomen in uninsured patient -> EMTALA mandates screening exam and inpatient stabilization/surgery; financial transfer is illegal dumping.",
      "strongestCompetitor": "Private non-profit hospitals are legally exempt from EMTALA regulations and may divert uninsured patients to municipal public health facilities",
      "exclusionFinding": "EMTALA applies to all Medicare-participating hospitals; private status does not excuse financial dumping.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: EMTALA mandates medical screening exam and stabilizing treatment (surgery/admission) regardless of insurance/citizenship; transferring an unstabilized patient for financial reasons is illegal dumping.",
      "distractorExclusionNotes": "Distractor exclusion verified: All Medicare-participating hospitals (including private non-profits) are bound by EMTALA; there is no exemption based on tax status.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "EMTALA mandates medical screening exam and stabilizing treatment (surgery/admission) regardless of insurance/citizenship; transferring an unstabilized patient for financial reasons is illegal dumping.",
    "necessaryInference": "EMTALA mandates medical screening exam and stabilizing treatment (surgery/admission) regardless of insurance/citizenship; transferring an unstabilized patient for financial reasons is illegal dumping.",
    "strongestDistractor": "Private non-profit hospitals are legally exempt from EMTALA regulations and may divert uninsured patients to municipal public health facilities",
    "distractorExclusion": "All Medicare-participating hospitals (including private non-profits) are bound by EMTALA; there is no exemption based on tax status.",
    "citation": "Zibulewsky J. The Emergency Medical Treatment and Active Labor Act (EMTALA). Proc (Bayl Univ Med Cent). 2001;14(4):339-346. PMID: 16369643."
  },
  {
    "code": "op-c-s3-0496",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Core Elements of Informed Consent and Decision-Making Voluntariness",
    "subtopic": "Nature of Procedure, Material Risks, Benefits, Alternatives, Risks of Refusal, and Absence of Coercion",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man with symptomatic severe aortic valve stenosis (aortic valve area 0.7 cm2, mean transvalvular gradient 48 mmHg) and progressive exertional dyspnea is admitted to the hospital. The cardiothoracic surgery team discusses definitive management. The surgical fellow enters the patient's room with a pre-printed four-page hospital consent form, hands the patient a pen, and says: 'Mr. Davis, we need your signature right here on page 4 so we can take you to the operating room tomorrow morning for a surgical mechanical valve replacement. It's a standard valve operation and you'll do fine.' When the patient asks what risks are involved, the fellow replies: 'Oh, you don't need to worry about the rare risks, our surgeon is the best in the state. Just sign here so we don't lose our operating room slot.' When the patient asks if there are other treatment choices, such as a minimally invasive catheter approach he read about online (transcatheter aortic valve replacement [TAVR]), the fellow states: 'Open-heart surgery is the only thing we do here; let's get this paperwork signed.'\n\nWhich of the following essential legal and ethical requirements of valid informed consent was violated by the fellow in this interaction?",
    "choices": [
      [
        "Informed consent requires a voluntary dialogue disclosing the nature of the procedure, material risks and complications, anticipated benefits, reasonable clinical alternatives (including transcatheter therapy and medical management), and the risks of refusing treatment, without administrative coercion or pressure",
        "The legal and ethical doctrine of informed consent (Canterbury v. Spence, 1972; AMA Code of Medical Ethics Opinion 2.1.1) is a COMMUNICATION PROCESS, not merely signing a legal form: (1) ESSENTIAL INFORMATIONAL ELEMENTS: A clinician must disclose and discuss five core elements: (a) Nature and purpose of the proposed procedure; (b) Material risks and potential complications (using the 'prudent patient' standard\u2014what a reasonable patient in that situation would find significant to their decision, including stroke, bleeding, infection, and death); (c) Anticipated benefits; (d) Reasonable, clinically appropriate alternatives (including transcatheter aortic valve replacement [TAVR], bioprosthetic vs mechanical valves, and medical management); (e) Risks and consequences of refusing treatment. (2) VOLUNTARINESS: Consent must be given freely without coercion, undue pressure, time manipulation (e.g., 'sign now or lose your slot'), or misleading reassurances. (3) PATIENT COMPREHENSION: The clinician must encourage questions and confirm understanding. (4) DISTRACTOR ANALYSIS: Treating informed consent as an administrative bureaucratic signature on a form dismisses patient autonomy; withholding material risks violates disclosure standards; dismissing valid clinical alternatives (TAVR) deprives the patient of meaningful self-determination."
      ],
      [
        "Informed consent requires that the patient memorize and recite all surgical steps verbatim prior to entering the operating room suite",
        "Patients are not expected to memorize procedural anatomy or technical steps; consent requires understanding the general nature, risks, benefits, and alternatives."
      ],
      [
        "Informed consent is legally complete and unassailable as long as the patient's physical signature is affixed to a hospital risk management form",
        "A signed form is merely evidentiary documentation; if the dialogue fails to disclose risks and alternatives, the consent is legally and ethically invalid."
      ],
      [
        "The fellow was ethically justified in withholding complications because disclosing material risks induces irrational patient anxiety and refusal",
        "The therapeutic privilege to withhold risks applies only in extreme circumstances where disclosure causes severe direct psychological collapse, never for routine anxiety."
      ],
      [
        "Informed consent is valid only if conducted in the presence of an attorney representing the patient and a court stenographer",
        "Informed consent is a standard clinical dialogue between physician and patient; legal representation is neither required nor standard practice."
      ]
    ],
    "rationale": "Informed consent is an active communication process requiring voluntary discussion of five elements: nature of procedure, material risks, expected benefits, reasonable alternatives (such as TAVR), and consequences of refusal. Rushing a patient to sign without discussing risks or alternatives invalidates consent.",
    "metadata": {
      "shortSolution": "Valid informed consent requires voluntary dialogue disclosing nature, material risks, benefits, alternatives (TAVR), and risks of refusal; signing under pressure without risk/alternative disclosure is invalid.",
      "competingChoice": "Informed consent is legally complete and unassailable as long as the patient's physical signature is affixed to a hospital risk management form",
      "exclusionFinding": "A signature on paper does not equal valid consent; failure to discuss risks and reasonable alternatives renders consent legally deficient.",
      "pedagogicalValue": "Mastering the legal elements, communication standards, and voluntariness requirements of valid clinical informed consent.",
      "citations": [
        "Canterbury v. Spence, 464 F.2d 772 (D.C. Cir. 1972).",
        "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Informed consent requires discussing procedure, material risks, benefits, and reasonable alternatives (TAVR); signing under pressure without risk disclosure invalidates consent.",
      "strongestCompetitor": "Informed consent is legally complete and unassailable as long as the patient's physical signature is affixed to a hospital risk management form",
      "exclusionFinding": "A signed form without dialogue on risks and alternatives violates the legal standard of informed consent (Canterbury v. Spence).",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Valid informed consent requires voluntary dialogue disclosing nature, material risks, benefits, alternatives (TAVR), and risks of refusal; signing under pressure without risk/alternative disclosure is invalid.",
      "distractorExclusionNotes": "Distractor exclusion verified: A signature on paper does not equal valid consent; failure to discuss risks and reasonable alternatives renders consent legally deficient.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Valid informed consent requires voluntary dialogue disclosing nature, material risks, benefits, alternatives (TAVR), and risks of refusal; signing under pressure without risk/alternative disclosure is invalid.",
    "necessaryInference": "Valid informed consent requires voluntary dialogue disclosing nature, material risks, benefits, alternatives (TAVR), and risks of refusal; signing under pressure without risk/alternative disclosure is invalid.",
    "strongestDistractor": "Informed consent is legally complete and unassailable as long as the patient's physical signature is affixed to a hospital risk management form",
    "distractorExclusion": "A signature on paper does not equal valid consent; failure to discuss risks and reasonable alternatives renders consent legally deficient.",
    "citation": "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016."
  },
  {
    "code": "op-c-s3-0497",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Ethical Prohibition of Deceptive Placebos in Clinical Practice",
    "subtopic": "Autonomy, Patient Trust, Deception vs Open-Label Placebos and Authorized Deception in Research",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old woman with chronic somatic symptom disorder and widespread non-specific myofascial pains presents to an outpatient internal medicine clinic for a follow-up visit. Over the past 3 years, she has undergone extensive diagnostic workups (including multiple MRIs, CT scans, electromyography, rheumatologic serologies, and endocrine panels), all of which have yielded normal results. She repeatedly requests prescriptions for opioids and benzodiazepines, which the physician has appropriately declined. During today's visit, the patient tearfully demands a new prescription, stating: 'Doctor, my pain is unbearable. You have to give me something powerful to fix this.' The physician contemplates prescribing inert oral sugar pills (lactose tablets) formulated by a compounding pharmacy, and telling the patient: 'This is a powerful, newly approved neurochemical neuromodulator specifically engineered to block spinal pain pathways; take one tablet three times daily.'\n\nAccording to the AMA Code of Medical Ethics regarding the clinical use of placebos, which of the following describes the ethical status of this proposed action?",
    "choices": [
      [
        "Deceptive administration of a placebo in routine clinical practice\u2014misrepresenting an inert substance as an active pharmacological drug\u2014is ethically unacceptable because it involves intentional physician deception, undermines patient trust, and violates patient autonomy",
        "The clinical use of placebos is governed by strict ethical guidelines (AMA Code of Medical Ethics Opinion 1.1.8): (1) DECEPTIVE PLACEBOS ARE UNETHICAL: Administering an inactive, sham, or inert substance (such as sugar pills or sterile saline injections) while falsely telling the patient that it is a potent active pharmaceutical agent involves INTENTIONAL DECEPTION. Deception fundamentally undermines the physician-patient fiduciary relationship, erodes public trust in the medical profession, and strips the patient of informed self-determination (autonomy). If the patient subsequently discovers the deception, the therapeutic alliance is irrevocably destroyed. (2) PERMISSIBLE PLACEBO USE IN CLINICAL CARE: A physician may use a placebo in clinical practice ONLY with the patient's explicit, informed consent and cooperation under an 'open-label' framework: (a) The clinician must explain what a placebo is and discuss how the 'placebo effect' works through mind-body neurobiological pathways; (b) The patient must voluntarily agree to receive an inert substance. (3) PLACEBOS IN CLINICAL RESEARCH: In double-blind clinical trials, placebo use is ethically permissible because subjects provide upfront informed consent that they have an equal probability of receiving an active drug or an inert placebo ('authorized deception'). (4) CLINICAL ALTERNATIVES: For somatic symptom disorder, the ethical standard is cognitive behavioral therapy, establishing scheduled regular clinic visits, validating emotional distress without reinforcing somatic preoccupation, and avoiding deceptive interventions."
      ],
      [
        "Prescribing a deceptive placebo is ethically commendable under the principle of beneficence because it relieves somatic symptoms without exposing the patient to opioid side effects",
        "Beneficence cannot justify deliberate lying or deception in clinical medicine; benevolent deception erodes professional trust and violates patient autonomy."
      ],
      [
        "Placebos may be deceptively prescribed in clinical practice as long as the compounding pharmacy labels the medication with a fictional proprietary brand name",
        "Adding fictional drug branding compounds the fraud and deception; it does not render the placebo ethically permissible."
      ],
      [
        "The physician is legally mandated to prescribe deceptive placebos for any patient diagnosed with a somatic symptom or functional neurological disorder",
        "There is no legal or medical mandate for deceptive placebos; clinical guidelines for somatic disorders recommend cognitive behavioral therapy and scheduled visits."
      ],
      [
        "Deceptive placebos are ethical only if the physician charges the patient the full retail price of a branded opioid medication to maximize psychological expectation",
        "Charging commercial drug prices for inert sugar tablets constitutes financial fraud and egregious ethical exploitation."
      ]
    ],
    "rationale": "Deceptive placebo administration in routine clinical practice\u2014falsely presenting an inert pill as an active drug\u2014is ethically prohibited by the AMA Code of Medical Ethics. It relies on intentional deception, damages the physician-patient relationship, and violates patient autonomy. Placebos can only be used clinically under open-label conditions with informed patient agreement.",
    "metadata": {
      "shortSolution": "Deceptive placebo prescribing in clinical care is ethically prohibited; misrepresenting an inert substance as active drug violates autonomy and professional trust.",
      "competingChoice": "Prescribing a deceptive placebo is ethically commendable under the principle of beneficence because it relieves somatic symptoms without exposing the patient to opioid side effects",
      "exclusionFinding": "Beneficence cannot justify active physician deception and lying to patients; AMA ethics prohibits deceptive placebos.",
      "pedagogicalValue": "Mastering the ethical boundaries of placebo use in clinical practice versus research under the AMA Code of Medical Ethics.",
      "citations": [
        "American Medical Association. Use of placebos in clinical practice: Code of Medical Ethics Opinion 1.1.8. AMA; 2016.",
        "Lichtenberg P, Heresco-Levy U, Nitzan U. The ethics of the placebo in clinical practice. J Med Ethics. 2004;30(6):551-554. PMID: 15574441."
      ]
    },
    "critique": {
      "shortestValidSolution": "Deceptive placebo in clinic -> ethically prohibited (intentional physician deception undermines trust and autonomy).",
      "strongestCompetitor": "Prescribing a deceptive placebo is ethically commendable under the principle of beneficence because it relieves somatic symptoms without exposing the patient to opioid side effects",
      "exclusionFinding": "Paternalistic deception violates AMA ethics and core autonomy; placebos cannot be deceptively prescribed.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Deceptive placebo prescribing in clinical care is ethically prohibited; misrepresenting an inert substance as active drug violates autonomy and professional trust.",
      "distractorExclusionNotes": "Distractor exclusion verified: Beneficence cannot justify active physician deception and lying to patients; AMA ethics prohibits deceptive placebos.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Deceptive placebo prescribing in clinical care is ethically prohibited; misrepresenting an inert substance as active drug violates autonomy and professional trust.",
    "necessaryInference": "Deceptive placebo prescribing in clinical care is ethically prohibited; misrepresenting an inert substance as active drug violates autonomy and professional trust.",
    "strongestDistractor": "Prescribing a deceptive placebo is ethically commendable under the principle of beneficence because it relieves somatic symptoms without exposing the patient to opioid side effects",
    "distractorExclusion": "Beneficence cannot justify active physician deception and lying to patients; AMA ethics prohibits deceptive placebos.",
    "citation": "American Medical Association. Use of placebos in clinical practice: Code of Medical Ethics Opinion 1.1.8. AMA; 2016."
  },
  {
    "code": "op-c-s3-0498",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Conflict Between Written Living Will and Surrogate Demands",
    "subtopic": "Primacy of Authentic Written Advance Directives over Contrary Surrogate Preferences",
    "provisionalDifficulty": 5,
    "stem": "A 75-year-old retired attorney with biopsy-confirmed stage IV metastatic non-small cell lung cancer with extensive brain and hepatic metastases is admitted to the intensive care unit in acute hypercapnic respiratory failure and septic shock secondary to pseudomonal pneumonia. Six months ago, while fully competent and following detailed counseling with his oncologist, the patient executed a formal, notarized Living Will and Advance Healthcare Directive. The document explicitly states: 'If I am diagnosed with terminal, incurable cancer and develop acute respiratory failure or multi-organ failure, I direct that I NOT be intubated, NOT receive invasive mechanical ventilation, and NOT receive cardiopulmonary resuscitation. I request only comfort measures and dignified palliative care.' The patient is currently obtunded, unable to speak, and has severe arterial blood gas derangements (pH 7.14, PaCO2 78 mmHg, PaO2 52 mmHg). His daughter, who was designated in a separate document as his healthcare proxy, arrives in the ICU. Overcome with grief, she demands: 'You must intubate my father immediately and place him on the ventilator! I know what the living will says, but I am his daughter and his designated proxy, and I order you to intubate him now!'\n\nWhich of the following describes the legally and ethically correct action by the critical care team?",
    "choices": [
      [
        "Honor the patient's explicit, authentic written Living Will by withholding endotracheal intubation and mechanical ventilation, and initiate intensive comfort-focused palliative care (including titrated opioids and non-invasive comfort support), as a clear, competent written advance directive legally and ethically supersedes contrary demands by a surrogate decision-maker",
        "The hierarchy of healthcare decision-making places the patient's own authentic competent choices at the highest level of authority (autonomy): (1) PRIMACY OF WRITTEN ADVANCE DIRECTIVES: When a patient while competent has articulated specific, unambiguous healthcare instructions in an executed Living Will (e.g., explicitly directing that intubation and mechanical ventilation be withheld in terminal cancer with respiratory failure), that document represents the direct exercise of the patient's constitutional right to refuse medical treatment. (2) LIMITS ON SURROGATE AUTHORITY: A surrogate decision-maker (even a designated healthcare proxy or biological child) has authority to make medical decisions ONLY within the framework of the patient's known wishes. A surrogate's authority is FIDUCIARY: they are legally and ethically obligated to execute the patient's autonomous choices. A surrogate DOES NOT have the legal or ethical power to override, nullify, or countermand a patient's clear, documented advance directive simply because the surrogate's personal emotions or grief conflict with the patient's wishes. (3) CLINICAL MANAGEMENT OF GRIEVING SURROGATES: The clinical team must compassionately address the daughter's acute grief, explain that following her father's document honors his personal values and dignity, provide emotional and chaplaincy support, and ensure robust palliative symptom control (e.g., continuous IV morphine/glycopyrrolate) to ensure a comfortable, peaceful natural death."
      ],
      [
        "Accede to the daughter's demands and intubate the patient immediately, because a designated healthcare proxy possesses absolute legal authority to revoke a patient's living will at any time",
        "A healthcare proxy cannot revoke or override a patient's clear written living will; the proxy's duty is to uphold the patient's documented instructions."
      ],
      [
        "Delay all decision-making and maintain the patient in hypercapnic respiratory failure without oxygen or palliative medications until an emergency court hearing is held in probate court",
        "Withholding both intubation and palliative symptom relief causes horrific respiratory distress and suffering, violating non-maleficence."
      ],
      [
        "Revoke the living will and initiate mechanical ventilation because the hospital receives higher reimbursement for ventilated intensive care patients",
        "Modifying clinical decisions to maximize hospital billing reimbursement is unethical, illegal, and represents severe corporate malfeasance."
      ],
      [
        "Intubate the patient and file an emergency psychiatric commitment on the daughter for emotional dysregulation",
        "Grieving family members exhibiting distress do not meet criteria for involuntary psychiatric commitment; compassionate communication is required."
      ]
    ],
    "rationale": "A clear, specific, competent written Living Will legally and ethically supersedes contrary demands from a surrogate decision-maker (even a designated healthcare proxy). The proxy has a fiduciary duty to uphold the patient's documented instructions, and the clinical team must honor the living will by withholding mechanical ventilation and initiating intensive comfort measures.",
    "metadata": {
      "shortSolution": "Clear written living will refusing intubation supersedes contrary demands by surrogate proxy; withhold intubation and provide palliative comfort care.",
      "competingChoice": "Accede to the daughter's demands and intubate the patient immediately, because a designated healthcare proxy possesses absolute legal authority to revoke a patient's living will at any time",
      "exclusionFinding": "Surrogate proxies lack legal authority to override a patient's authentic, explicit written living will; patient autonomy is paramount.",
      "pedagogicalValue": "Understanding the legal primacy of advance directives over surrogate preferences and resolving end-of-life conflicts with grieving proxies.",
      "citations": [
        "Cruzan v. Director, Missouri Department of Health, 497 U.S. 261 (1990).",
        "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016."
      ]
    },
    "critique": {
      "shortestValidSolution": "Specific written living will refusing mechanical ventilation takes legal precedence over daughter's conflicting demands -> withhold intubation, provide comfort care.",
      "strongestCompetitor": "Accede to the daughter's demands and intubate the patient immediately, because a designated healthcare proxy possesses absolute legal authority to revoke a patient's living will at any time",
      "exclusionFinding": "Surrogates have no legal authority to cancel a patient's explicit living will; the patient's own competent directive governs.",
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Clear written living will refusing intubation supersedes contrary demands by surrogate proxy; withhold intubation and provide palliative comfort care.",
      "distractorExclusionNotes": "Distractor exclusion verified: Surrogate proxies lack legal authority to override a patient's authentic, explicit written living will; patient autonomy is paramount.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Clear written living will refusing intubation supersedes contrary demands by surrogate proxy; withhold intubation and provide palliative comfort care.",
    "necessaryInference": "Clear written living will refusing intubation supersedes contrary demands by surrogate proxy; withhold intubation and provide palliative comfort care.",
    "strongestDistractor": "Accede to the daughter's demands and intubate the patient immediately, because a designated healthcare proxy possesses absolute legal authority to revoke a patient's living will at any time",
    "distractorExclusion": "Surrogate proxies lack legal authority to override a patient's authentic, explicit written living will; patient autonomy is paramount.",
    "citation": "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016."
  },
  {
    "code": "op-c-s3-0499",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Quality Assurance Planted Rejection: Trivial Fact Recall and Diagnostic Giveaway Defect",
    "subtopic": "Planted QA Defect: Direct First-Order Fact Retrieval Lacking Multi-Step Clinical Reasoning",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old man who is a practicing Jehovah's Witness is admitted to the hospital for elective repair of an inguinal hernia. He explicitly tells the surgeon that he refuses all blood transfusions. What is the fundamental ethical principle that guarantees a competent patient's legal right to refuse medical treatment?",
    "choices": [
      [
        "Autonomy",
        "Autonomy represents the ethical principle that self-governing individuals possess the moral and legal right to make decisions regarding their own medical care, including the refusal of interventions."
      ],
      [
        "Beneficence",
        "Beneficence involves acting in the best medical interest of the patient."
      ],
      [
        "Non-maleficence",
        "Non-maleficence is the duty to do no harm."
      ],
      [
        "Justice",
        "Justice concerns the fair allocation of healthcare resources."
      ],
      [
        "Paternalism",
        "Paternalism involves overriding patient preferences for their perceived benefit."
      ]
    ],
    "rationale": "Planted QA Rejection Example: This candidate demonstrates severe structural and pedagogical defects: single-word answer choices lacking parallel clinical detail, a trivial first-order recall question asking for the definition of 'Autonomy,' zero multi-step clinical reasoning, and an elementary distractor set that can be answered by rote vocabulary recall.",
    "metadata": {
      "shortSolution": "Trivial first-order recall of 'Autonomy' definition without clinical reasoning.",
      "competingChoice": "Beneficence",
      "exclusionFinding": "Autonomy directly defines the right to self-determination and treatment refusal.",
      "pedagogicalValue": "Planted QA defect demonstrating superficial recall question lacking USMLE Step 3 clinical depth.",
      "citations": [
        "Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019.",
        "Cruzan v. Director, Missouri Department of Health, 497 U.S. 261 (1990)."
      ]
    },
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Planted QA defect: pure first-order factual recall disguised as an ethics question; lacks multi-step clinical reasoning or dilemma navigation.",
      "distractorExclusionNotes": "Distractors are elementary textbook terms lacking parallel clinical depth or real-world competition.",
      "shortestValidSolution": "Direct textbook vocabulary recall of 'Autonomy' bypasses any clinical thinking.",
      "strongestCompetitor": "Beneficence",
      "exclusionFinding": "Vocabulary definition of self-determination is autonomy.",
      "verdict": "REJECT",
      "rejectionNotes": "Planted QA Rejection Example: Superficial single-word recall question lacking multi-step clinical reasoning, distractor parallelism, and Step 3 decision depth.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Trivial first-order recall of 'Autonomy' definition without clinical reasoning.",
    "necessaryInference": "Trivial first-order recall of 'Autonomy' definition without clinical reasoning.",
    "strongestDistractor": "Beneficence",
    "distractorExclusion": "Autonomy directly defines the right to self-determination and treatment refusal.",
    "citation": "Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019. NLM ID: 101741528."
  },
  {
    "code": "op-c-s3-0500",
    "exam": "Step 3",
    "subject": "Ethics",
    "system": "General Principles",
    "topic": "Medical Aid in Dying (MAID) and Clinician Conscientious Participation vs Institutional Prohibitions",
    "subtopic": "Explicit Unresolved Controversy: Individual Clinician Conscience vs Faith-Based Health System Employment Policies",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman with widely metastatic, progressive amyotrophic lateral sclerosis (ALS) with bulbar involvement, severe quadriplegia, and impending respiratory failure resides in a US state where Medical Aid in Dying (MAID) is legally authorized under state statute. The patient is fully competent, has undergone independent psychiatric evaluation confirming absence of clinical depression, has a documented life expectancy of less than 6 months, and has submitted two oral requests separated by 15 days and one witnessed written request for a lethal prescription under state MAID laws. Her long-standing primary palliative physician, who is employed by a faith-based non-profit health system, supports her request on compassionate grounds and is willing to prescribe the medication. However, the health system's employment bylaws and ethical directives strictly forbid any employed physician from participating in MAID on hospital grounds or writing MAID prescriptions off-site, specifying immediate termination of medical staff privileges and employment for non-compliance. The physician is torn between his professional commitment to alleviate his patient's suffering and his contractual/institutional employment obligations.\n\nWhich of the following describes the unresolved clinical, legal, and ethical controversy regarding clinician participation in Medical Aid in Dying within private or faith-based healthcare institutions?",
    "choices": [
      [
        "An active, unresolved controversy persists regarding the legal and ethical boundary between an individual physician's professional conscience and a private or faith-based healthcare system's institutional right to enforce moral policies that restrict employed clinicians from participating in or referring for legally authorized Medical Aid in Dying",
        "Medical Aid in Dying (MAID)\u2014also known as physician aid-in-dying or death with dignity\u2014presents profound and actively evolving legal, institutional, and bioethical tensions: (1) JURISDICTIONAL DIVERGENCE: In states where MAID is statutorily legal (e.g., Oregon, Washington, California, Colorado, Vermont, New Jersey, Maine, Hawaii, New Mexico), strict statutory criteria exist (adult, terminal illness with < 6 months prognosis, decision-making capacity, repeated voluntary requests, self-administration). (2) CLINICIAN VS INSTITUTIONAL CONSCIENCE: While state statutes universally protect individual clinicians from being forced to participate against their personal moral conscience, the law is deeply contested regarding whether private or religiously affiliated healthcare systems can legally prohibit their employed clinicians from participating in MAID outside hospital facilities or on their own personal time. Faith-based institutions argue that institutional conscience and corporate identity (Ethical and Religious Directives for Catholic Health Care Services) permit them to prohibit employed clinicians from facilitating MAID. Conversely, patient advocates and civil liberties organizations argue that institutional restrictions infringe on clinician free exercise of conscience, violate the doctor-patient fiduciary duty, and obstruct terminally ill patients' statutory rights to access lawful end-of-life care. (3) REFERRAL OBLIGATIONS: Whether a conscientiously objecting health system or physician is legally and ethically obligated to provide information and facilitate referral to an outside willing provider remains an active point of state-by-state statutory variation and court litigation."
      ],
      [
        "Federal constitutional law establishes that private non-profit hospitals have zero authority to establish employment rules or restrict employee participation in state-regulated medical practices",
        "Private healthcare organizations possess broad legal authority to establish bylaws and ethical codes for their staff, creating ongoing legal battles over institutional conscience."
      ],
      [
        "The United States Supreme Court has ruled that Medical Aid in Dying is a fundamental constitutional right guaranteed to all citizens under the Fourteenth Amendment",
        "The US Supreme Court explicitly ruled in Washington v. Glucksberg (1997) that there is no federal constitutional right to physician-assisted suicide, leaving regulation entirely to individual states."
      ],
      [
        "Any physician who refuses to prescribe lethal medications upon request by a terminally ill patient in a MAID state is guilty of criminal patient abandonment",
        "All state MAID statutes contain explicit conscientious objection clauses protecting physicians from mandatory participation or criminal liability for refusing."
      ],
      [
        "The American Medical Association mandates that all licensed physicians must participate in Medical Aid in Dying as a prerequisite for board certification",
        "The AMA Code of Medical Ethics historically opposes physician-assisted suicide (Opinion 5.7) and upholds clinician freedom of conscience."
      ]
    ],
    "rationale": "Medical Aid in Dying (MAID) presents an explicit, unresolved controversy regarding the clash between an individual clinician's professional conscience and a faith-based healthcare system's legal right to prohibit employed clinicians from participating in or referring for statutorily legal end-of-life options. Federal law has not established a constitutional right, leaving state courts and legislatures divided.",
    "metadata": {
      "shortSolution": "Active controversy: Individual clinician conscience/patient advocacy vs institutional faith-based employer bans on participating in legally authorized MAID.",
      "competingChoice": "The United States Supreme Court has ruled that Medical Aid in Dying is a fundamental constitutional right guaranteed to all citizens under the Fourteenth Amendment",
      "exclusionFinding": "Washington v. Glucksberg ruled there is NO federal constitutional right to assisted suicide; the issue is governed by state law and contested institutional policies.",
      "pedagogicalValue": "Understanding the unresolved ethical, institutional, and legal boundaries of Medical Aid in Dying (MAID) and clinician conscience versus institutional policy.",
      "citations": [
        "Washington v. Glucksberg, 521 U.S. 702 (1997).",
        "Quill TE, Back AL, Block SD. Responding to patients requesting medical aid in dying: physician conscience and patient choices. JAMA. 2016;315(3):245-246. PMID: 26649856."
      ]
    },
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Explicitly documented unresolved clinical, legal, and bioethical controversy regarding clinician participation in MAID versus faith-based institutional employer prohibitions.",
      "distractorExclusionNotes": "Distractors contrast refuted constitutional claims (Washington v. Glucksberg), false claims of criminal liability, and inaccurate professional society mandates.",
      "shortestValidSolution": "Active unresolved controversy: clinician conscience/patient advocacy vs institutional employer bans in statutorily legal MAID.",
      "strongestCompetitor": "The United States Supreme Court has ruled that Medical Aid in Dying is a fundamental constitutional right guaranteed to all citizens under the Fourteenth Amendment",
      "exclusionFinding": "Supreme Court explicitly ruled against a federal constitutional right in Glucksberg; states and institutions actively contest MAID policies.",
      "verdict": "UNRESOLVED",
      "unresolvedNotes": "Actively debated bioethical and legal dilemma: institutional conscience and employer restrictions versus individual physician conscience and patient statutory access to Medical Aid in Dying.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Active controversy: Individual clinician conscience/patient advocacy vs institutional faith-based employer bans on participating in legally authorized MAID.",
    "necessaryInference": "Active controversy: Individual clinician conscience/patient advocacy vs institutional faith-based employer bans on participating in legally authorized MAID.",
    "strongestDistractor": "The United States Supreme Court has ruled that Medical Aid in Dying is a fundamental constitutional right guaranteed to all citizens under the Fourteenth Amendment",
    "distractorExclusion": "Washington v. Glucksberg ruled there is NO federal constitutional right to assisted suicide; the issue is governed by state law and contested institutional policies.",
    "citation": "Quill TE, Back AL, Block SD. Responding to patients requesting medical aid in dying. JAMA. 2016;315(3):245-246. PMID: 26649856."
  }
];
