"""
Mega Data Part P: Domains 95 to 100 (Medical Ethics, Forensic Medicine, Dermatology & Transfusion Reactions)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_P = [
    # Domain 95: Medical Decision-Making Capacity & Advance Directives
    {
        "id": "domain_95_medical_capacity",
        "entity": "Medical decision-making capacity, advance healthcare directives, and involuntary admission",
        "hallmark": "patient refusing life-sustaining intervention, fluctuating cognitive clarity, surrogate family disagreements, durable power of attorney documentation, or acute suicidal ideation requiring psychiatric detention",
        "system": "Behavioral Health",
        "ref_key": "ethics",
        "subjects": {
            "Step 1": "Ethics",
            "NEET PG": "Ethics",
            "FCPS": "Medicine",
            "UHS MBBS": "Ethics",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Four legal criteria for decision-making capacity: understanding, expressing choice, appreciation, and reasoning",
                "Demonstrating ability to understand relevant clinical information, appreciate the consequences of the decision on their own health, reason through options, and communicate a consistent voluntary choice.",
                "Decision-making capacity is decision-specific and time-specific, assessed by any licensed physician; it differs from competence, which is a global legal designation determined exclusively by a judge."
            ),
            "Step 2 CK": (
                "Hierarchy of surrogate decision-makers and substituted judgment standard",
                "Following valid advance directives and designated healthcare power of attorney, applying the substituted judgment standard (what the patient would have wanted) before best interests standard.",
                "Substituted judgment respects patient autonomy by honoring known patient values and prior stated wishes; the best interests standard is applied only when the patient's personal preferences are unknown."
            ),
            "Step 3": (
                "Resolving family disagreements with living wills and hospital ethics committee consultation",
                "Honoring clear, unambiguous living wills and advance directives despite family objections, convening an ethics committee consultation when surrogate disputes persist.",
                "A patient's previously executed valid advance directive supersedes the contrary preferences of grieving family members; clinicians must advocate for the patient's autonomous self-determination."
            ),
            "PLAB / UKMLA": (
                "Mental Capacity Act 2005 (MCA) principles and two-stage capacity test",
                "Applying the MCA 2005 presumption of capacity, establishing impairment of mind or brain, and assessing inability to understand, retain, weigh information, or communicate the decision.",
                "Under UK law, an unwise or eccentric decision does not in itself indicate lack of capacity; healthcare professionals must take all practicable steps to support the person to make the decision."
            ),
            "AMC": (
                "Australian guardianship legislation and enduring power of attorney activation",
                "Activating designated Enduring Guardian or Medical Treatment Decision Maker authority once lack of capacity is formally documented, adhering to the principle of least restrictive alternative.",
                "In Australian jurisdictions, an Enduring Power of Attorney for medical decisions becomes active only upon documented loss of capacity, with statutory tribunals resolving conflicting surrogate claims."
            ),
            "MCCQE": (
                "Criteria for involuntary psychiatric admission: imminent risk of harm to self or others",
                "Completing statutory involuntary psychiatric detention forms for patients with active mental illness presenting imminent serious risk of suicide, physical harm to others, or severe self-neglect.",
                "Involuntary psychiatric admission overrides autonomy to preserve life and safety; it requires documented severe mental disorder and clear imminent danger that cannot be mitigated voluntarily."
            ),
            "FCPS": (
                "Do-Not-Resuscitate (DNR) protocols and distinction from withdrawal of medical care",
                "Documenting valid Do-Not-Resuscitate orders in terminal illness with patient/family consent, recognizing that DNR restricts only cardiopulmonary resuscitation, not comfort care or therapeutic interventions.",
                "A DNR order applies specifically to cardiac and respiratory arrest; it does not authorize withholding intravenous fluids, antibiotics, pain relief, or other appropriate active clinical care."
            ),
            "NLE": (
                "Principle of patient autonomy and informed refusal of life-saving blood transfusion",
                "Respecting the autonomous refusal of blood products by an adult patient with decision-making capacity (e.g., Jehovah's Witness), exploring blood-sparing alternatives.",
                "An adult with documented decision-making capacity possesses the fundamental legal and ethical right to refuse any medical treatment, even if that refusal leads directly to their demise."
            ),
            "NEET PG": (
                "Supreme Court of India passive euthanasia ruling and Advance Medical Directive registration",
                "Executing Advance Medical Directives for passive euthanasia under guidelines of the Supreme Court of India, requiring verification by a Judicial Magistrate and hospital medical boards.",
                "Indian jurisprudence permits passive euthanasia (withdrawal of life support in terminally ill, persistent vegetative state) under strict multi-tiered primary and secondary medical board safeguards."
            ),
            "MRCP": (
                "Deprivation of Liberty Safeguards (DoLS) and Liberty Protection Safeguards in hospital wards",
                "Applying for DoLS authorization when an incapacitated inpatient is subject to continuous supervision, control, and is not free to leave the acute hospital ward.",
                "DoLS protects human rights (Article 5 ECHR) for vulnerable individuals lacking capacity; hospital clinicians must ensure restraint or confinement is lawful, proportionate, and in best interests."
            ),
            "MRCEM": (
                "Emergency doctrine exception to consent in unconscious, unstable patients without surrogates",
                "Providing emergent life-saving medical resuscitation and surgical intervention under the emergency doctrine of implied consent when the patient is unconscious and no surrogate is immediately reachable.",
                "The emergency doctrine presumes that a reasonable person would consent to immediate life-saving care in the absence of a known valid prior written refusal or advance directive."
            ),
            "SMLE": (
                "Islamic bioethics and Saudi Council of Senior Scholars fatwas on brain death and DNR",
                "Following Ministry of Health and Senior Scholars guidelines recognizing brain death as legal death, and requiring three qualified attending consultants to validate a DNR decision for terminal futility.",
                "Saudi health regulations mandate consensus of three consultant physicians to issue a DNR order in medical futility, ensuring clinical decisions align with Islamic jurisprudence."
            ),
            "HAAD / DHA": (
                "Federal Decree Law on Medical Liability: End-of-life care and DNR documentation in UAE",
                "Documenting DNR orders in compliance with UAE Federal Medical Liability Law, requiring unanimous agreement of three consultant physicians in cases of terminal, irreversible illness.",
                "UAE statutory legislation prohibits active euthanasia; non-resuscitation is permitted under strict conditions when treatment is clinically futile as certified by a multi-consultant review panel."
            ),
            "UHS MBBS": (
                "Four classical core principles of biomedical ethics (Beauchamp and Childress)",
                "Autonomy (self-determination), Beneficence (acting in patient's best interest), Non-maleficence (primum non nocere), and Justice (fair distribution of healthcare resources).",
                "Clinical ethical dilemmas arise when these prima facie principles conflict (e.g., autonomy in treatment refusal conflicting with beneficence); structured ethical frameworks reconcile these tensions."
            )
        }
    },

    # Domain 96: Informed Consent & Treatment of Minors
    {
        "id": "domain_96_consent_minors",
        "entity": "Informed consent, Treatment of minors, Gillick competence, and Confidentiality exceptions",
        "hallmark": "adolescent requesting confidential contraception or STI treatment, parental refusal of life-saving therapy for a child, or duty to warn third parties of imminent violence (Tarasoff rule)",
        "system": "Behavioral Health",
        "ref_key": "ethics",
        "subjects": {
            "Step 1": "Ethics",
            "NEET PG": "Ethics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Ethics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Core elements of informed consent: information, voluntariness, and disclosure standards",
                "Disclosing diagnosis, proposed procedure, material risks, potential benefits, alternatives (including no treatment), and ensuring voluntary authorization without coercion.",
                "The reasonable person disclosure standard requires physicians to disclose all risks and alternatives that an ordinary reasonable patient would consider significant in deciding on treatment."
            ),
            "Step 2 CK": (
                "Confidential care for mature minors: contraception, STIs, substance abuse, and pregnancy",
                "Providing confidential assessment and management for emancipated or mature minors seeking contraception, sexually transmitted infection treatment, prenatal care, or substance abuse rehabilitation.",
                "Most legal jurisdictions protect confidential minor consent for reproductive healthcare, sexual health, and substance abuse to prevent fear of parental disclosure from deterring essential treatment."
            ),
            "Step 3": (
                "Parental refusal of life-saving treatment for a child: emergent court order and intervention",
                "Providing immediate emergent life-saving treatment to a child despite parental religious refusal, obtaining an emergency court order or temporary protective custody if time permits.",
                "While parents have wide discretion in child-rearing, parental authority is not absolute; the state's parens patriae doctrine mandates protecting a child from life-threatening medical neglect."
            ),
            "PLAB / UKMLA": (
                "Gillick competence and Fraser guidelines for adolescent contraception under age 16",
                "Assessing Gillick competence (sufficient maturity and intelligence to understand treatment), and applying Fraser guidelines to provide confidential contraception without parental knowledge.",
                "Lord Fraser's guidelines allow confidential contraception if the adolescent understands advice, cannot be persuaded to inform parents, is likely to have intercourse, and their physical/mental health will suffer without it."
            ),
            "AMC": (
                "Australian 'Mature Minor' doctrine (Marion's Case) and statutory child protection reporting",
                "Evaluating whether an adolescent has achieved sufficient understanding and intelligence to consent to medical treatment, while fulfilling mandatory statutory reporting for child physical/sexual abuse.",
                "The High Court of Australia established in Marion's Case that parental power to consent diminishes as the child reaches sufficient maturity; however, special procedures (sterilization) require court approval."
            ),
            "MCCQE": (
                "Mandatory reporting exceptions to confidentiality: child abuse, elder abuse, and impaired driving",
                "Breaching patient-physician confidentiality to fulfill statutory mandatory reporting duties for suspected child physical/sexual abuse, elder abuse, and medical conditions impairing safe motor vehicle operation.",
                "Confidentiality is a fundamental ethical duty but not absolute; provincial and territorial statutes legally compel physicians to report suspected child abuse and reportable communicable diseases."
            ),
            "FCPS": (
                "Pediatric assent in clinical research and assent threshold in adolescents",
                "Obtaining written parental permission accompanied by development-appropriate affirmative assent from pediatric patients aged 7 years and older before clinical trial enrollment.",
                "Assent respects the developing autonomy of the child; dissent by a capable older child must be respected unless the experimental intervention offers direct, life-saving therapeutic benefit unavailable elsewhere."
            ),
            "NLE": (
                "Therapeutic privilege doctrine: strict limitations in modern clinical practice",
                "Withholding clinical information under therapeutic privilege only when disclosure would cause severe, immediate psychological deterioration, strictly avoiding its use to prevent refusal.",
                "Therapeutic privilege is an extremely narrow legal defense; it cannot be invoked simply because the physician anticipates the patient might refuse an uncomfortable or necessary procedure."
            ),
            "NEET PG": (
                "Indian POCSO Act (Protection of Children from Sexual Offences) mandatory reporting requirements",
                "Mandatory reporting of any sexual activity involving a minor under 18 years of age to the Special Juvenile Police Unit or local police under Section 19 of the POCSO Act.",
                "The POCSO Act makes reporting of suspected sexual offenses against minors legally mandatory for doctors, with criminal penalties for failure to report, even when the adolescent requests confidentiality."
            ),
            "MRCP": (
                "Duty of candour: statutory requirements to disclose and apologize for clinical harm",
                "Fulfilling the statutory professional duty of candour by informing the patient promptly of unintended harm, offering a sincere apology, and explaining remedial actions taken.",
                "Regulation 20 of the Health and Social Care Act legally obliges healthcare organizations to be open and transparent with service users when notifiable safety incidents result in moderate or severe harm."
            ),
            "MRCEM": (
                "Tarasoff ruling: Duty to protect and warn identifiable third parties of imminent violent threats",
                "Breaching confidentiality to directly warn law enforcement and notify specific, identifiable potential victims when a psychiatric patient articulates credible, imminent threats of violence.",
                "The California Supreme Court Tarasoff decision established that the protective privilege of confidentiality ends where public peril begins; clinicians must act reasonably to protect endangered third parties."
            ),
            "SMLE": (
                "Saudi Law on Practicing Healthcare Professions: Consent requirements and female autonomy",
                "Obtaining independent informed consent directly from adult female patients with full legal capacity, recognizing that male guardianship (wali) approval is not legally required for medical care.",
                "Saudi Ministry of Health directives affirm that any adult woman possessing mental capacity has the sovereign right to sign her own informed consent for medical, surgical, and obstetric procedures."
            ),
            "HAAD / DHA": (
                "Electronic medical records (EMR) privacy and patient data protection regulations",
                "Adhering to National Health Data Protection regulations, prohibiting unauthorized sharing of identifiable patient health records without explicit written patient authorization.",
                "Health authority data privacy laws impose severe fines and regulatory sanctions for unauthorized access, data breaches, or clinical photography shared on personal electronic devices."
            ),
            "UHS MBBS": (
                "Medical negligence (Tort of Malpractice): The four essential legal Ds",
                "Duty of care owed by physician, Dereliction (breach of standard of care), Direct causation, and Damages (actual compensable physical or psychological injury).",
                "To establish civil medical negligence in a court of law, the claimant must prove all four elements on the balance of probabilities; an adverse outcome without breach of duty does not constitute negligence."
            )
        }
    },

    # Domain 97: Forensic Pathology & Traumatology
    {
        "id": "domain_97_forensic_pathology",
        "entity": "Forensic pathology, Post-mortem interval (PMI), Gunshot wound ballistics, and Asphyxial deaths",
        "hallmark": "estimating post-mortem interval via algor, livor, and rigor mortis, differentiating contact vs distant gunshot entrance wounds by soot and stippling, and identifying hyoid bone fracture in manual strangulation",
        "system": "General Principles",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Biochemical basis of rigor mortis: ATP depletion and persistent actin-myosin cross-linking",
                "Loss of oxidative phosphorylation and ATP synthesis preventing detachment of myosin cross-bridges from actin filaments, causing permanent muscle stiffening that resolves with autolysis.",
                "Rigor mortis begins 2-4 hours post-mortem, peaks at 12 hours, remains fixed for 12 hours, and resolves over 24-36 hours as endogenous lysosomal proteases degrade myofibrillar structural proteins."
            ),
            "Step 2 CK": (
                "Gunshot wound characteristics: contact muzzle imprint, soot tattooing (stippling), and distant wounds",
                "Contact wounds displaying muzzle imprint and soot in wound tract; close-range showing powder tattooing (stippling) of unburned powder particles; distant wounds showing clean circular defect with abrasion collar.",
                "True powder tattooing (stippling) consists of punctate punctate burns caused by hot unburned gunpowder flakes embedded in the epidermis; it cannot be wiped off, proving a close-range firing distance (< 60-100 cm)."
            ),
            "Step 3": (
                "Differentiating hanging (antemortem ligature mark) from manual strangulation and post-mortem suspension",
                "Identifying ascending, incomplete, non-continuous ligature furrow with suspended apex above the thyroid cartilage in hanging, versus horizontal, continuous, low-level marks and hyoid fracture in strangulation.",
                "In typical complete hanging, the ligature mark rises obliquely toward the suspension knot at the occiput; in manual strangulation, fingertip contusions, nail marks, and hyoid greater cornu fractures predominate."
            ),
            "PLAB / UKMLA": (
                "Coroner notification criteria and statutory death certification in the UK",
                "Referring to the Coroner for deaths that are sudden, unexpected, violent, unnatural, occurring during surgery/anesthesia, or within 14 days of medical admission without clear cause.",
                "A medical certificate of cause of death (MCCD) cannot be issued by the treating doctor if the death meets statutory coroner referral criteria, mandating formal coroner review and potential autopsy."
            ),
            "AMC": (
                "Medical certificate of cause of death (MCCD) formatting: Part I underlying cause vs Part II contributory",
                "Recording the immediate cause of death on line I(a), due to antecedent intermediate causes on I(b)/I(c), and underlying primary disease on the lowest line, listing unrelated contributors in Part II.",
                "The underlying cause of death is the disease or injury that initiated the chain of morbid events leading directly to death; mechanistic modes of dying (e.g., 'cardiac arrest' or 'respiratory failure') are improper causes."
            ),
            "MCCQE": (
                "Sudden Infant Death Syndrome (SIDS) diagnostic criteria and safe sleep counseling",
                "Sudden unexplained death of an infant under 1 year after thorough case investigation, complete autopsy, and death scene reconstruction; counseling on supine sleep positioning ('Back to Sleep').",
                "SIDS is a diagnosis of exclusion; safe sleep guidelines (supine positioning, firm mattress, no loose bedding, room-sharing without bed-sharing, and smoke-free environment) drastically reduce incidence."
            ),
            "FCPS": (
                "Differentiating antemortem vs post-mortem injuries: vital reaction and histopathology",
                "Identifying cellular vital reaction (inflammatory polymorphonuclear leukocyte infiltration, tissue retraction, and true extravasated fibrin clotting) to prove trauma occurred prior to death.",
                "Post-mortem injuries lack vital reaction, exhibiting no inflammatory response, no tissue swelling, and only passive hypostatic oozing of unclotted blood without fibrin net formation."
            ),
            "NLE": (
                "Differentiating ante-mortem drowning (PNS signs) from post-mortem submersion",
                "Identifying persistent fine, white, tenacious froth at mouth and nostrils (froth of Paltauf), emphysema aquosum (hyperinflated lungs with rib indentations), and diatom recovery in closed bone marrow.",
                "Diatoms (microscopic algae) in closed organs (femur marrow, brain) prove antemortem active circulation and inhalation of drowning water, distinguishing active drowning from post-mortem disposal of a body."
            ),
            "NEET PG": (
                "Forensic traumatology: Lucid interval in extradural hemorrhage and blast injury physics",
                "Lucid interval in extradural hematoma (middle meningeal artery), and blast injuries: primary (barotrauma shock wave), secondary (shrapnel), tertiary (body displacement), and quaternary (burns/toxins).",
                "Primary blast injury affects air-filled organs (tympanic membrane rupture, blast lung, bowel perforation); the tympanic membrane is the most sensitive anatomical structure to overpressure shock waves."
            ),
            "MRCP": (
                "Cyanide and carbon monoxide post-mortem skin discoloration patterns",
                "Recognizing bright cherry-red post-mortem hypostasis (livor mortis) in carbon monoxide poisoning, and brick-red or pink discoloration in cyanide toxicity due to cellular histotoxic unextracted oxygen.",
                "Because cyanide blocks cellular oxygen extraction by cytochrome oxidase, venous blood remains fully oxygenated, producing bright pinkish-red lividity mimicking carbon monoxide poisoning."
            ),
            "MRCEM": (
                "Chain of custody preservation for forensic evidence and forensic sexual assault kits",
                "Meticulously documenting evidence collection, maintaining unbroken signed chain-of-custody transfer logs, drying wet biological swabs, and storing sealed evidence in tamper-evident containers.",
                "Failure to document an unbroken chain of custody renders physical and forensic evidence inadmissible in a court of law; emergency clinicians must ensure proper custody protocols from triage."
            ),
            "SMLE": (
                "Post-mortem interval (PMI) estimation formula: Algor mortis and Henssge nomogram",
                "Using Henssge's nomogram combining deep rectal temperature, ambient temperature, body weight, and clothing factor to calculate the post-mortem interval with statistical confidence limits.",
                "During the first 12 hours post-mortem, body core temperature drops by approximately 0.8 to 1.0 C per hour in temperate environments; environmental factors and clothing significantly modulate this cooling rate."
            ),
            "HAAD / DHA": (
                "Medico-legal documentation standards in acute domestic violence and physical assault",
                "Using standardized body surface injury charts (pictograms), documenting precise measurements, anatomical locations, and photography under patient consent with forensic scale rulers.",
                "Exact forensic documentation with millimeter measurements and non-judgmental descriptive terminology (e.g., 'linear abrasion' rather than 'scratched by husband') provides objective courtroom evidence."
            ),
            "UHS MBBS": (
                "Post-mortem changes: Livor mortis (hypostasis) fixity and differentiation from contusion",
                "Hypostasis results from gravitational pooling of blood in dependent capillaries; differentiating from contusion by incising the skin: hypostatic blood washes away with water, whereas contusion hematoma is clotted.",
                "Livor mortis is blanchable during the first 6 to 8 hours; after 8 to 12 hours, hemolyzed erythrocytes extravasate and stain subcutaneous fat, becoming permanently fixed regardless of body repositioning."
            )
        }
    },

    # Domain 98: Cutaneous Malignancies (Melanoma, BCC & SCC)
    {
        "id": "domain_98_cutaneous_neoplasms",
        "entity": "Melanoma, Basal cell carcinoma (BCC), and Squamous cell carcinoma (SCC)",
        "hallmark": "pigmented lesion with ABCDE criteria, pearly nodule with rolled borders and arborizing telangiectasias, or hyperkeratotic ulcerated crusted lesion on sun-exposed head/neck in an elderly patient",
        "system": "Dermatology",
        "ref_key": "bad_derm",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Dermatology"
        },
        "concepts": {
            "Step 1": (
                "Oncogenic mutations: BRAF V600E in melanoma vs Hedgehog PTCH1 in BCC and p53 in SCC",
                "BRAF V600E activating mutation in the MAPK pathway in melanoma, sonic hedgehog/PTCH1 pathway inactivation in BCC, and UV-induced pyrimidine dimer mutations in p53 in squamous cell carcinoma.",
                "UVB radiation induces characteristic cyclobutane pyrimidine dimers (C-to-T transitions); BRAF V600E occurs in >50% of cutaneous melanomas, making them susceptible to vemurafenib/dabrafenib targeted therapy."
            ),
            "Step 2 CK": (
                "Complete excisional biopsy for suspected melanoma and Breslow depth prognostic significance",
                "Performing complete full-thickness excisional biopsy with 1-3 mm margins (avoiding superficial shave biopsy) to determine histological Breslow microstaging depth and ulceration status.",
                "Breslow thickness (measured from the granular layer of the epidermis to the deepest invading tumor cells in millimeters) is the single most powerful prognostic indicator for cutaneous melanoma."
            ),
            "Step 3": (
                "Wide local excision margins and sentinel lymph node biopsy (SLNB) indications",
                "Performing wide local excision with 1 cm margins for melanoma < 1 mm depth (2 cm margins for > 2 mm depth), offering sentinel lymph node biopsy for Breslow thickness >= 0.8 mm or ulceration.",
                "SLNB accurately microstages regional nodal basins; identifying microscopic nodal metastases guides adjuvant systemic therapy (anti-PD-1 immunotherapy or targeted BRAF/MEK inhibitors)."
            ),
            "PLAB / UKMLA": (
                "NICE Guideline NG12: Urgent 2-week wait (2WW) referral criteria for suspected skin cancer",
                "Referring urgently via the suspected cancer 2-week wait pathway using the weighted 7-point checklist (major: change in size, irregular shape, irregular color) scoring >= 3 points.",
                "The revised 7-point checklist assigns 2 points each to major features and 1 point to minor features (inflammation, oozing, sensory change, diameter >= 7 mm); scores of 3 or more mandate urgent 2WW referral."
            ),
            "AMC": (
                "Mohs micrographic surgery indications for high-risk Basal Cell Carcinomas",
                "Recommending Mohs micrographic surgery for facial tumors in the central cosmetic/functional 'H-zone', recurrent lesions, aggressive histological subtypes, or poorly defined clinical margins.",
                "Mohs surgery provides 100% intraoperative histological evaluation of all peripheral and deep surgical margins with frozen sections, maximizing tissue preservation and achieving cure rates > 99%."
            ),
            "MCCQE": (
                "ABCDE mnemonic for bedside dermatological evaluation of pigmented lesions",
                "Asymmetry, Border irregularity, Color variegation (multiple shades of brown, black, blue, red), Diameter > 6 mm, and Evolution (any changing shape, size, elevation, or bleeding).",
                "Evolution (change over time) is the single most sensitive historical feature of malignant melanoma; an 'ugly duckling' lesion that looks distinctly different from the patient's other nevi warrants biopsy."
            ),
            "FCPS": (
                "Surgical management of Squamous Cell Carcinoma: Marjolin ulcer and lymphadenectomy",
                "Wide surgical excision with 4-6 mm margins for low-risk SCC, 10 mm margins for high-risk/Marjolin ulcer, and staging regional lymphadenectomy for clinically palpable metastases.",
                "Squamous cell carcinoma arising in chronic non-healing burns, radiation scars, or chronic osteomyelitis (Marjolin ulcer) is aggressive, carrying a high metastatic rate (> 30%) to regional lymph nodes."
            ),
            "NLE": (
                "Clinical variants of Basal Cell Carcinoma: Nodular, Superficial, and Morpheaform",
                "Nodular BCC presenting as a pearly translucent papule with telangiectasias and rolled borders, superficial BCC presenting as an erythematous scaly plaque, and morpheaform mimicking an indurated scar.",
                "Basal cell carcinoma is the most common human malignancy; it is locally invasive and destructive ('rodent ulcer') but has an exceedingly low rate of distant hematogenous metastasis (< 0.1%)."
            ),
            "NEET PG": (
                "Histological hallmarks: Peripheral palisading in BCC vs keratin pearls in Squamous Cell Carcinoma",
                "Islands of basaloid epithelial cells with peripheral nuclear palisading and retraction artifact from adjacent stroma in BCC, versus atypical keratinocytes with intercellular bridges and keratin pearls in SCC.",
                "Peripheral palisading and stromal clefting are pathognomonic for BCC; squamous cell carcinoma is defined by malignant dyskeratotic cells forming concentric laminated whorls of eosinophilic keratin pearls."
            ),
            "MRCP": (
                "Adjuvant systemic therapy for advanced and metastatic melanoma: Immunotherapy vs BRAF/MEK inhibitors",
                "Administering immune checkpoint inhibitors (nivolumab plus ipilimumab) or targeted dabrafenib plus trametinib for BRAF V600E-mutant stage III/IV melanoma.",
                "Targeted BRAF/MEK inhibitors yield rapid clinical responses in BRAF-mutated disease, while dual CTLA-4 and PD-1 checkpoint blockade generates durable, long-term survival in advanced melanoma."
            ),
            "MRCEM": (
                "Actinic keratosis as a pre-malignant precursor to invasive Squamous Cell Carcinoma",
                "Recognizing erythematous, sandpaper-textured scaly macules on sun-exposed skin, treating with cryotherapy with liquid nitrogen, topical 5-fluorouracil, or imiquimod.",
                "Actinic keratoses represent partial-thickness intraepidermal dysplasia; approximately 1-10% progress over time to invasive squamous cell carcinoma, requiring treatment."
            ),
            "SMLE": (
                "Photoprotection counseling: broad-spectrum sunscreens, UV index, and barrier clothing",
                "Recommending daily broad-spectrum (UVA and UVB) water-resistant sunscreen with SPF >= 30-50, applied 20 minutes before sun exposure, re-applied every 2 hours, and seeking shade.",
                "Sun protection prevents both direct DNA pyrimidine dimer mutations from UVB and reactive oxygen species generation from UVA, significantly reducing lifetime non-melanoma and melanoma skin cancer risks."
            ),
            "HAAD / DHA": (
                "Dermoscopic criteria for melanoma: atypical pigment network and blue-white veil",
                "Utilizing handheld dermoscopy to identify asymmetric atypical pigment networks, irregular dots/globules, branched streaks, and blue-white veils indicating deep dermal melanin.",
                "Dermoscopy increases diagnostic sensitivity for melanoma by 20-30% compared to naked-eye inspection, avoiding unnecessary biopsies of benign seborrheic keratoses and dysplastic nevi."
            ),
            "UHS MBBS": (
                "Anatomy and function of epidermal melanocytes and keratinocyte melanin capping",
                "Dendritic melanocytes derived from the neural crest located in the basal layer of the epidermis, transferring melanin granules (melanosomes) to suprabasal keratinocytes to shield nuclei from UV radiation.",
                "Each melanocyte provides protective melanin granules to approximately 36 adjacent keratinocytes (epidermal-melanin unit), forming protective supranuclear 'umbrellas' that absorb incoming UV photons."
            )
        }
    },

    # Domain 99: Severe Cutaneous Adverse Reactions (SCAR)
    {
        "id": "domain_99_severe_drug_reactions",
        "entity": "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS), AGEP, and Fixed Drug Eruption",
        "hallmark": "diffuse morbilliform eruption developing 2-8 weeks post-drug initiation, facial edema, diffuse lymphadenopathy, marked eosinophilia (> 1,500/mcL), massive acute pustulosis, or recurrent well-demarcated dusky violaceous plaques at the exact same anatomical site",
        "system": "Dermatology",
        "ref_key": "bad_derm",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pharmacology",
            "other": "Dermatology"
        },
        "concepts": {
            "Step 1": (
                "Delayed type IVb hypersensitivity, viral reactivation (HHV-6), and high-risk HLA alleles",
                "T-cell mediated delayed hypersensitivity with IL-5-driven eosinophil activation, human herpesvirus 6 (HHV-6) reactivation, and HLA-B*57:01 (abacavir) or HLA-B*58:01 (allopurinol) genetic susceptibility.",
                "DRESS syndrome involves massive T-cell stimulation triggering viral reactivation of latent HHV-6, HHV-7, and EBV; allopurinol-induced DRESS is strongly associated with HLA-B*58:01 in Han Chinese populations."
            ),
            "Step 2 CK": (
                "Immediate offending drug cessation and systemic corticosteroid taper in DRESS syndrome",
                "Immediate discontinuation of the culprit medication and initiating oral or intravenous corticosteroids (prednisone 0.5-1.0 mg/kg/day) with a slow, gradual taper over 2 to 3 months.",
                "Premature discontinuation or rapid tapering of systemic corticosteroids in DRESS frequently precipitates severe recrudescence of visceral organ inflammation (hepatitis, nephritis, myocarditis)."
            ),
            "Step 3": (
                "Visceral organ screening: transaminitis, serum creatinine, and cardiac troponin in DRESS",
                "Serial monitoring of liver function tests (severe hepatitis is the commonest visceral complication), renal function (interstitial nephritis), and cardiac troponin (fatal acute eosinophilic myocarditis).",
                "Internal organ involvement is the hallmark of DRESS, distinguishing it from simple morbilliform drug eruptions; acute myocarditis carries an exceptionally high mortality, mandating early echocardiography."
            ),
            "PLAB / UKMLA": (
                "High-risk culprit drugs: aromatic antiepileptics, allopurinol, sulfonamides, and vancomycin",
                "Identifying the common culprit triggers: aromatic anticonvulsants (carbamazepine, phenytoin, phenobarbital), lamotrigine, allopurinol, sulfasalazine, and minocycline, noting the 2-8 week latency.",
                "Unlike anaphylaxis (minutes) or simple drug exanthems (days), DRESS syndrome has a uniquely prolonged incubation period of 2 to 8 weeks between starting the drug and clinical manifestation."
            ),
            "AMC": (
                "Differentiating DRESS from Stevens-Johnson Syndrome (SJS/TEN) and AGEP",
                "Differentiating DRESS (prominent facial edema, eosinophilia, internal organ involvement, absence of mucosal erosion) from SJS/TEN (severe mucosal sloughing, positive Nikolsky sign).",
                "Acute Generalized Exanthematous Pustulosis (AGEP) presents rapidly within 24-48 hours of antibiotic exposure with hundreds of non-follicular sterile subcorneal pustules and neutrophilia."
            ),
            "MCCQE": (
                "Fixed Drug Eruption (FDE): clinical features, hyperpigmentation, and intraepidermal CD8+ T cells",
                "Recognizing solitary or few round, sharply demarcated, dusky red or violaceous plaques that recur at the exact same anatomical site (often genitalia or lips) leaving residual slate-gray post-inflammatory hyperpigmentation.",
                "Fixed drug eruptions are mediated by quiescent resident memory CD8+ T cells persisting in the basal epidermis at the lesion site, reacting instantly upon re-exposure to the culprit drug (NSAIDs, co-trimoxazole)."
            ),
            "FCPS": (
                "Second-line steroid-sparing immunosuppression in refractory DRESS: Cyclosporine and IVIG",
                "Administering oral cyclosporine or intravenous immunoglobulin (IVIG) for corticosteroid-refractory DRESS syndrome with fulminant liver failure or severe interstitial pneumonitis.",
                "Cyclosporine rapidly suppresses IL-2 and T-cell activation, halting eosinophilic infiltration and rescuing patients with advancing steroid-resistant hepatic necrosis."
            ),
            "NLE": (
                "Diagnostic triad of DRESS syndrome (RegiSCAR criteria)",
                "Extensive cutaneous eruption, systemic symptoms (fever > 38.5 C, cervical lymphadenopathy), and biological abnormalities (eosinophilia > 10% or >= 700/mcL, atypical lymphocytosis, internal organ failure).",
                "RegiSCAR validation scoring categorizes suspected cases into no, possible, probable, or definite DRESS, guiding decisions regarding systemic immunosuppressive therapy."
            ),
            "NEET PG": (
                "Sterile subcorneal pustulosis and neutrophil chemotaxis (IL-8) in AGEP",
                "Subcorneal and intraepidermal spongiform pustules on histopathology driven by drug-specific T-cells secreting high levels of interleukin-8 (CXCL8) recruiting massive neutrophilic infiltration.",
                "AGEP develops rapidly after starting beta-lactams or macrolides; resolution occurs spontaneously within 10 to 14 days following drug cessation with characteristic pinhead desquamation."
            ),
            "MRCP": (
                "Long-term autoimmune sequelae following DRESS recovery: Autoimmune thyroiditis and Type 1 Diabetes",
                "Long-term endocrine surveillance for late-onset autoimmune complications (Hashimoto thyroiditis, Graves disease, type 1 diabetes) developing months to years after resolution of DRESS.",
                "Massive immune dysregulation and loss of regulatory T-cell function during the viral reactivation phase predispose patients to late de novo autoimmune polyendocrinopathies."
            ),
            "MRCEM": (
                "Emergency triage differentiation of drug rash with facial edema from angioedema",
                "Differentiating widespread morbilliform eruption with facial swelling in DRESS from acute IgE-mediated anaphylaxis/angioedema, noting absence of stridor, wheeze, or lip/tongue swelling.",
                "Facial edema in DRESS is inflammatory and cutaneous rather than mucosal; airway compromise is rare, but systemic hemodynamic instability from high-output erythroderma can occur."
            ),
            "SMLE": (
                "Cross-reactivity among aromatic anticonvulsants and safe non-aromatic alternatives",
                "Recognizing > 75% immunological cross-reactivity among aromatic antiepileptics (carbamazepine, phenytoin, phenobarbital), substituting non-aromatic agents (levetiracetam, valproate).",
                "Aromatic anticonvulsants share common arene oxide reactive intermediate metabolites; developing DRESS to one aromatic agent strictly contraindicates switching to another aromatic drug."
            ),
            "HAAD / DHA": (
                "Reporting adverse drug reactions to pharmacovigilance registries and medical alert cards",
                "Issuing a permanent national medical alert card and filing mandatory yellow card adverse drug reaction reports with statutory pharmacovigilance authorities.",
                "Patients who survive severe cutaneous adverse reactions must be provided with explicit written documentation and wristbands; re-exposure to the culprit drug can precipitate fatal recurrence."
            ),
            "UHS MBBS": (
                "Gell and Coombs classification: Type I through Type IV drug hypersensitivity",
                "Type I (IgE anaphylaxis), Type II (cytotoxic IgG/IgM), Type III (immune-complex deposition), and Type IV (cell-mediated delayed hypersensitivity: IVa monocytes, IVb eosinophils, IVc cytotoxic T cells, IVd neutrophils).",
                "DRESS is a classic manifestation of Type IVb delayed hypersensitivity (characterized by TH2 cytokine profile, IL-5, and prominent tissue eosinophilia), whereas AGEP represents Type IVd (IL-8 and neutrophils)."
            )
        }
    },

    # Domain 100: Acute Transfusion Reactions (TRALI, TACO, Hemolytic)
    {
        "id": "domain_100_transfusion_reactions",
        "entity": "Acute transfusion reactions: TRALI, TACO, Febrile Non-Hemolytic, and Acute Hemolytic",
        "hallmark": "sudden hypoxemia and bilateral non-cardiogenic pulmonary infiltrates within 6 hours of transfusion (TRALI), elevated jugular venous pressure with S3 gallop (TACO), acute flank pain with brown urine and shock (ABO mismatch), or benign fever spike with rigors (FNHTR)",
        "system": "Hematology",
        "ref_key": "anemia",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pathology",
            "other": "Hematology"
        },
        "concepts": {
            "Step 1": (
                "Two-hit neutrophil priming mechanism in TRALI vs anti-A/anti-B IgM complement lysis in AHTR",
                "Donor anti-HLA or anti-HNA antibodies binding primed recipient pulmonary neutrophils causing capillary leak in TRALI, versus preformed recipient IgM fixing complement causing intravascular hemolysis in ABO mismatch.",
                "TRALI requires recipient neutrophil priming (sepsis, surgery) followed by donor antileukocyte antibodies activating pulmonary microvascular neutrophils, causing acute non-cardiogenic pulmonary edema."
            ),
            "Step 2 CK": (
                "Immediate cessation of transfusion, clerical check, and aggressive isotonic fluids in acute hemolytic reaction",
                "Immediately stopping the blood transfusion, preserving IV access with normal saline, performing a bedside clerical identification check, and administering aggressive fluids to prevent acute renal failure.",
                "In acute hemolytic transfusion reaction, intravascular hemolysis releases free hemoglobin and stroma, predisposing to disseminated intravascular coagulation (DIC) and acute tubular necrosis."
            ),
            "Step 3": (
                "Differentiating TRALI from TACO using BNP, echocardiography, and diuretic response",
                "Differentiating Transfusion-Related Acute Lung Injury (normal BNP, normal cardiac filling pressures, exudative edema) from Transfusion-Associated Circulatory Overload (elevated BNP, high JVP, responds to loop diuretics).",
                "TACO is cardiogenic hydrostatic pulmonary edema caused by volume overload, treated with intravenous furosemide; TRALI is non-cardiogenic capillary leak where diuretics are ineffective and can cause hypotension."
            ),
            "PLAB / UKMLA": (
                "Serious Hazards of Transfusion (SHOT) reporting and management of Febrile Non-Hemolytic reaction",
                "Stopping transfusion, checking vitals to rule out acute hemolysis/sepsis, administering paracetamol, and submitting mandatory statutory notification to the SHOT hemovigilance scheme.",
                "Febrile non-hemolytic transfusion reactions (FNHTR) are caused by accumulated cytokines (IL-1, IL-6, TNF-alpha) released from leukocytes during stored platelet/RBC storage; symptoms resolve with antipyretics."
            ),
            "AMC": (
                "Universal prestorage leukodepletion to reduce FNHTR and CMV transmission",
                "Implementing universal prestorage leukoreduction of blood products to drastically reduce the incidence of febrile non-hemolytic reactions, HLA alloimmunization, and cytomegalovirus transmission.",
                "Filtering out white blood cells prior to storage prevents cytokine accumulation during shelf-life and prevents recipient antibody formation against donor human leukocyte antigens (HLA)."
            ),
            "MCCQE": (
                "Anaphylactic transfusion reaction in selective IgA deficiency: anti-IgA antibodies",
                "Sudden hypotension, bronchospasm, and urticaria within seconds of initiating transfusion in a patient with selective IgA deficiency, caused by preformed recipient anti-IgA IgE/IgG antibodies.",
                "Patients with severe IgA deficiency (< 7 mg/dL) develop antibodies against foreign IgA; transfusing standard blood components containing trace donor IgA triggers catastrophic anaphylaxis, requiring washed red cells."
            ),
            "FCPS": (
                "Donor deferral policies and predominantly male plasma donation to prevent TRALI",
                "Excluding multiparous female donors from fresh frozen plasma (FFP) and platelet production, relying on male or nulliparous female donors to eliminate anti-HLA alloantibodies.",
                "Pregnancy induces alloimmunization against paternal HLA and human neutrophil antigens (HNA); restricting plasma donation to male donors has reduced TRALI incidence by > 70% worldwide."
            ),
            "NLE": (
                "Immediate clinical and laboratory investigations following an acute transfusion reaction",
                "Sending the remaining blood bag, transfusion tubing, fresh recipient blood sample, and urine sample to the blood bank for repeat cross-match, direct antiglobulin (Coombs) test, and free hemoglobin testing.",
                "Direct antiglobulin testing (DAT) demonstrates in vivo antibody or complement coating of circulating transfused donor red blood cells, confirming immune-mediated hemolytic destruction."
            ),
            "NEET PG": (
                "Transfusion-Associated Graft-versus-Host Disease (TA-GvHD) and gamma irradiation",
                "Fatal pancytopenia, fever, rash, and liver dysfunction developing 1-4 weeks post-transfusion in immunocompromised or HLA-homozygous shared family donors, prevented by gamma irradiation of cellular components.",
                "TA-GvHD is caused by viable donor T-lymphocytes engrafting and attacking recipient tissues; gamma irradiation (25 Gy) cross-links donor leukocyte DNA, preventing proliferation while preserving RBC function."
            ),
            "MRCP": (
                "Delayed Hemolytic Transfusion Reaction (DHTR): anamnestic Rh/Kidd antibody response",
                "Unexplained drop in hemoglobin, mild jaundice, and spherocytosis occurring 3 to 14 days post-transfusion, caused by an anamnestic secondary antibody response (classically anti-Jka or anti-Rh).",
                "Kidd (Jk) system antibodies typically drop to undetectable titers over time; re-exposure to antigen-positive donor RBCs triggers rapid secondary IgG synthesis, causing extravascular splenic hemolysis days later."
            ),
            "MRCEM": (
                "Emergency management of suspected septic bacterial contamination of platelet units",
                "Immediate blood culture collection from both the patient and the implicated blood pack, initiating emergency broad-spectrum IV carbapenems or vancomycin/piperacillin-tazobactam.",
                "Platelets are stored at room temperature (20-24 C), providing a fertile environment for bacterial proliferation (Staphylococcus epidermidis, Serratia, Gram-negative rods), causing fulminant septic shock."
            ),
            "SMLE": (
                "Washed and irradiated red blood cell indications across special patient populations",
                "Washed red blood cells for recurrent severe allergic/anaphylactic reactions or severe IgA deficiency, and irradiated blood products for bone marrow transplant recipients and first-degree directed family donations.",
                "Saline washing removes > 99% of plasma proteins (including IgA) from cellular components; gamma irradiation prevents graft-versus-host disease in immunocompromised or partial HLA-matched recipients."
            ),
            "HAAD / DHA": (
                "Blood bank barcode verification and two-person independent bedside verification",
                "Mandatory independent bedside double-checking of patient identification wristband, blood unit tag, expiration date, and ABO/Rh compatibility by two registered practitioners before transfusion.",
                "Bedside identification errors remain the primary root cause of fatal ABO-incompatible hemolytic transfusion reactions; strict two-person electronic barcode verification eliminates clerical transcription errors."
            ),
            "UHS MBBS": (
                "Direct Coombs test (DAT) vs Indirect Coombs test (IAT) principles and methodology",
                "Direct Coombs test detects antibodies or complement already bound to the patient's RBCs in vivo; Indirect Coombs test detects unbound atypical antibodies in the patient's serum in vitro.",
                "In the Direct Antiglobulin Test, antihuman globulin (Coombs reagent) is added directly to washed patient red cells; agglutination proves the presence of surface-bound IgG or C3d."
            )
        }
    }
]
