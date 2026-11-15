"""
Mega Data Part T: Domains 120 to 125 (Epidemiology, Biostatistics, Ethics, Disaster Medicine, Palliative, Transplant)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_T = [
    # Domain 120: Epidemiology, Biostatistics & Diagnostic Tests
    {
        "id": "domain_120_biostatistics",
        "entity": "Sensitivity, Specificity, Predictive values, and Likelihood ratios",
        "hallmark": "interpreting clinical diagnostic test performance, 2x2 contingency table calculations, prevalence-dependence of positive and negative predictive values, receiver operating characteristic (ROC) curves, or likelihood ratio Fagan nomograms",
        "system": "General Principles",
        "ref_key": "epidemiology",
        "subjects": {
            "Step 1": "Biostatistics",
            "NEET PG": "Biostatistics",
            "FCPS": "Medicine",
            "UHS MBBS": "Biostatistics",
            "other": "Biostatistics"
        },
        "concepts": {
            "Step 1": (
                "Sensitivity vs Specificity: intrinsic test characteristics independent of disease prevalence",
                "Sensitivity (TP / [TP + FN]) and Specificity (TN / [TN + FP]) represent fixed intrinsic operational properties of a diagnostic test that remain constant regardless of disease prevalence.",
                "Sensitivity measures the proportion of diseased individuals who test positive (screening tests with high sensitivity minimize false negatives: SnNOut); specificity confirms disease (SpPIn)."
            ),
            "Step 2 CK": (
                "Impact of disease prevalence on Positive (PPV) and Negative Predictive Value (NPV)",
                "As disease prevalence increases in a tested population, Positive Predictive Value rises significantly while Negative Predictive Value decreases, even though sensitivity and specificity are unchanged.",
                "PPV (TP / [TP + FP]) depends heavily on pre-test probability; in low-prevalence screening settings, even a highly specific test produces more false positives than true positives."
            ),
            "Step 3": (
                "Likelihood Ratios (LR+ and LR-) and clinical pre-test to post-test probability shifts",
                "Positive Likelihood Ratio (LR+ = Sensitivity / [1 - Specificity]) and Negative Likelihood Ratio (LR- = [1 - Sensitivity] / Specificity) applied to pre-test odds to calculate post-test probability.",
                "Likelihood ratios are prevalence-independent and quantify the shift in diagnostic certainty; an LR+ > 10 generates substantial conclusive shifts in post-test probability on a Fagan nomogram."
            ),
            "PLAB / UKMLA": (
                "Number Needed to Treat (NNT) and Absolute Risk Reduction (ARR) calculations",
                "Absolute Risk Reduction (ARR = Control Event Rate - Experimental Event Rate) and Number Needed to Treat (NNT = 1 / ARR), rounded up to the nearest whole integer.",
                "NNT represents the number of patients who must receive a specific treatment to prevent one additional adverse outcome; lower NNT values reflect greater clinical effectiveness."
            ),
            "AMC": (
                "Receiver Operating Characteristic (ROC) curve and Area Under the Curve (AUC)",
                "Plotting true positive rate (Sensitivity) against false positive rate (1 - Specificity) across variable cutoffs, where Area Under the Curve (AUC) quantifies overall diagnostic discrimination.",
                "An AUC of 1.0 indicates perfect diagnostic discrimination; shifting the cutoff threshold to the left increases sensitivity at the expense of lowering specificity."
            ),
            "MCCQE": (
                "Pre-test probability assessment and avoiding low-yield defensive diagnostic testing",
                "Evaluating clinical pre-test probability (e.g., Wells criteria for pulmonary embolism) before ordering diagnostic tests to prevent false positives and unnecessary downstream interventions.",
                "Testing patients with low pre-test probability leads to incidentalomas and false-positive diagnostic cascades; clinical decision rules optimize resource utilization and patient safety."
            ),
            "FCPS": (
                "Type I (alpha) and Type II (beta) statistical errors, and statistical power calculations",
                "Type I error (rejecting the null hypothesis when it is actually true; alpha level) versus Type II error (failing to reject null hypothesis when false; beta level; Power = 1 - beta).",
                "Statistical power is the probability of correctly detecting a true treatment effect; power increases with larger sample size, larger effect size, and higher chosen alpha significance."
            ),
            "NLE": (
                "Calculation of Odds Ratio (OR) in case-control studies vs Relative Risk (RR) in cohorts",
                "Odds Ratio (ad / bc) in case-control studies estimating Relative Risk (incidence in exposed / incidence in unexposed) when the disease is rare in the general population (rare disease assumption).",
                "Relative risk requires measuring incidence over time in cohort studies; case-control studies start with diseased and non-diseased individuals, allowing only calculation of exposure odds."
            ),
            "NEET PG": (
                "Standard Error of the Mean (SEM) vs Standard Deviation (SD) and confidence intervals",
                "Standard Deviation measures dispersion of individual observations around the mean, while Standard Error of the Mean (SEM = SD / sqrt(n)) quantifies precision of the sample mean estimate.",
                "A 95% confidence interval is estimated as Mean +/- 1.96 x SEM; increasing the sample size (n) narrows the standard error and tightens the confidence interval around the population parameter."
            ),
            "MRCP": (
                "Hazard Ratio (HR) interpretation in survival analysis and Kaplan-Meier curves",
                "Hazard Ratio comparing the instantaneous event rate between treatment groups over time; an HR of 0.70 represents a 30% relative reduction in the event rate at any given time point.",
                "Kaplan-Meier survival curves plot event-free survival probabilities over time, with the log-rank test assessing statistical significance between curves without assuming proportional hazards."
            ),
            "MRCEM": (
                "Validity and application of clinical decision rules in emergency medicine (NEXUS, Ottawa)",
                "NEXUS low-risk criteria for cervical spine radiography and Ottawa ankle/foot rules demonstrating > 99% sensitivity to safely rule out fractures without radiation exposure.",
                "Clinical decision instruments with near-100% sensitivity possess a negative likelihood ratio near zero (LR- < 0.05), allowing clinicians to safely exclude fractures without imaging."
            ),
            "SMLE": (
                "Attributable Risk (AR) and Population Attributable Risk (PAR) in public health policy",
                "Attributable Risk (Incidence in exposed - Incidence in unexposed) quantifying excess risk, and PAR quantifying the reduction in total population disease incidence if exposure was eliminated.",
                "PAR guides national public health resource allocation; smoking cessation has an enormous PAR for coronary disease and lung cancer due to high population exposure prevalence."
            ),
            "HAAD / DHA": (
                "Wilson and Jungner criteria for implementing national disease screening programs",
                "Requirements that the condition is an important health problem, has an acceptable treatment, a recognizable latent stage, a suitable test, and an agreed-on policy on whom to treat.",
                "Screening asymptomatic populations is justifiable only when early detection and presymptomatic treatment alter the natural history and improve long-term clinical outcomes."
            ),
            "UHS MBBS": (
                "Parametric versus Non-parametric statistical tests and distribution assumptions",
                "Student t-test and ANOVA applied to normally distributed continuous data, versus Mann-Whitney U test and Kruskal-Wallis applied to skewed, ordinal, or non-normal distributions.",
                "Parametric tests assume Gaussian bell-shaped distribution with equal variances; applying parametric tests to heavily skewed distributions produces spurious statistical significance."
            )
        }
    },

    # Domain 121: Study Designs & Research Methodology
    {
        "id": "domain_121_study_designs",
        "entity": "Clinical study designs, epidemiological biases, and confounding",
        "hallmark": "evaluating randomized controlled trials, cohort studies, case-control studies, cross-sectional surveys, selection bias, measurement bias, recall bias, lead-time bias, or confounding by indication",
        "system": "General Principles",
        "ref_key": "epidemiology",
        "subjects": {
            "Step 1": "Biostatistics",
            "NEET PG": "Biostatistics",
            "FCPS": "Medicine",
            "UHS MBBS": "Biostatistics",
            "other": "Biostatistics"
        },
        "concepts": {
            "Step 1": (
                "Hierarchical hierarchy of evidence: RCTs, prospective cohorts, case-control, and cross-sectional",
                "Double-blind randomized controlled trials providing the highest level of causal evidence by balancing known and unknown baseline confounders through true random allocation.",
                "Prospective cohorts observe exposure-to-outcome prospectively (measuring incidence and relative risk); case-control studies evaluate outcome-to-exposure retrospectively (odds ratios)."
            ),
            "Step 2 CK": (
                "Confounding vs Effect Modification: stratification analysis distinction",
                "A confounder is an extraneous variable related to both exposure and outcome that disappears upon stratification; an effect modifier produces different true effect sizes across strata.",
                "Confounding is a source of bias that must be controlled by randomization, matching, or multivariable regression; effect modification is a biological phenomenon that must be reported."
            ),
            "Step 3": (
                "Intention-to-Treat (ITT) vs Per-Protocol analysis in randomized controlled trials",
                "Intention-to-Treat analyzing all randomized participants in their assigned groups regardless of non-compliance, protocol deviations, or dropout to preserve baseline randomization balance.",
                "ITT analysis reflects real-world clinical effectiveness and prevents attrition bias; per-protocol analysis evaluates physiological efficacy among fully compliant patients but introduces bias."
            ),
            "PLAB / UKMLA": (
                "Selection bias (Berkson bias) and strategies for minimization in observational research",
                "Berkson bias occurring when hospital-based controls have different exposure probabilities than the general population, minimized by enrolling community-based controls.",
                "Selection bias arises when the study sample is not representative of the target population; matching, rigorous inclusion/exclusion criteria, and high follow-up rates prevent selection distortions."
            ),
            "AMC": (
                "Recall bias in retrospective case-control studies and objective verification",
                "Individuals with a negative outcome (mothers of malformed infants) selectively recalling historical exposures more completely than healthy controls, minimized by objective medical records.",
                "Differential recall between cases and controls falsely inflates the observed odds ratio; using blinded interviewers and pre-existing objective pharmacy or health records eliminates recall bias."
            ),
            "MCCQE": (
                "Screening biases: Lead-time bias vs Length-time bias in cancer survival analysis",
                "Lead-time bias creating an artificial inflation of survival time due to earlier detection without changing the date of death; length-time bias over-representing slowly progressive indolent cases.",
                "Screening programs detect slowly progressing diseases (length-time bias) and advance the point of diagnosis (lead-time bias); evaluating all-cause or disease-specific mortality eliminates these biases."
            ),
            "FCPS": (
                "Cross-sectional studies: prevalence calculation and temporality limitation",
                "Simultaneous measurement of exposure and outcome at a single point in time (snapshot), calculating prevalence but unable to establish temporal sequence or causality.",
                "Cross-sectional studies cannot determine whether the exposure preceded the disease; they are subject to survival bias (prevalence-incidence bias or Neyman bias) by missing rapidly fatal cases."
            ),
            "NLE": (
                "Hawthorne effect (observer bias) and Pygmalion (Rosenthal) observer expectancy effect",
                "Study participants modifying their behavior simply because they are aware of being observed (Hawthorne), and researcher expectations unconsciously biasing study outcome assessments (Pygmalion).",
                "Double-blinding of both participants and investigators neutralizes both the Hawthorne effect and observer expectancy, ensuring objective and unbiased outcome evaluations."
            ),
            "NEET PG": (
                "Ecological study design and the Ecological Fallacy: population vs individual inferences",
                "Observing an association between an exposure and an outcome at the aggregate population level that does not hold true or reverses when evaluated in individual human subjects.",
                "The ecological fallacy occurs when population-level correlation (e.g., countries with high chocolate consumption having more Nobel laureates) is erroneously assumed to apply to individuals."
            ),
            "MRCP": (
                "Meta-analysis methodology: Funnel plot asymmetry and Egger test for publication bias",
                "Funnel plots graphing trial effect size against sample size / standard error, where an asymmetrical inverted funnel suggests selective non-publication of small negative trials.",
                "Publication bias occurs because journals preferentially publish positive, statistically significant studies; funnel plot asymmetry and trim-and-fill methods adjust for suppressed negative data."
            ),
            "MRCEM": (
                "Non-inferiority clinical trials: non-inferiority margin and clinical equivalence",
                "Testing whether a new therapy is not worse than an established standard therapy by more than a pre-specified clinically acceptable margin (delta), often for safer or cheaper options.",
                "Non-inferiority trials require rigorous both ITT and per-protocol analyses; if the upper limit of the 95% confidence interval excludes the non-inferiority margin, non-inferiority is declared."
            ),
            "SMLE": (
                "Qualitative research methodologies: thematic analysis, grounded theory, and saturation",
                "Exploring patient lived experiences, beliefs, and health behaviors using semi-structured interviews and focus groups until theoretical saturation (no new themes emerge) is achieved.",
                "Qualitative research generates hypotheses regarding health disparities and treatment non-adherence; rigorous member checking and triangulation ensure qualitative research trustworthiness."
            ),
            "HAAD / DHA": (
                "Clinical trial phases (Phase I through Phase IV): primary safety and efficacy endpoints",
                "Phase I (healthy volunteers, pharmacokinetics/safety), Phase II (small patient cohort, optimal dosing/efficacy), Phase III (large RCT, confirmatory efficacy), Phase IV (post-marketing surveillance).",
                "Phase IV post-marketing surveillance detects rare adverse drug reactions, long-term toxicities, and off-target effects in diverse real-world patient populations after regulatory approval."
            ),
            "UHS MBBS": (
                "Matching and restriction techniques for controlling confounding at the design stage",
                "Matching cases and controls on potential confounding variables (age, sex, smoking) or restricting enrollment to a uniform single exposure category to eliminate confounding.",
                "Controlling confounding at the design phase (randomization, restriction, matching) prevents unequal distribution of confounders, while multivariable regression adjusts for them analytically."
            )
        }
    },

    # Domain 122: Medical Ethics, Professionalism & Public Health
    {
        "id": "domain_122_medical_ethics",
        "entity": "Core medical ethics principles, informed consent, confidentiality, and capacity",
        "hallmark": "ethical dilemmas involving adult refusal of life-sustaining treatment, surrogate decision-making, exceptions to patient confidentiality, mature minor consent (Gillick competence), or impaired physician reporting",
        "system": "General Principles",
        "ref_key": "ethics",
        "subjects": {
            "Step 1": "Ethics",
            "NEET PG": "Ethics",
            "FCPS": "Medicine",
            "UHS MBBS": "Ethics",
            "other": "Ethics"
        },
        "concepts": {
            "Step 1": (
                "Four core bioethical principles: Autonomy, Beneficence, Non-maleficence, and Justice",
                "Balancing patient self-determination (autonomy), acting in the patient's best interest (beneficence), doing no harm (non-maleficence), and equitable distribution of healthcare resources (justice).",
                "Autonomy permits an adult patient with decision-making capacity to refuse any medical treatment, even if that refusal results in preventable death; beneficence cannot override autonomous refusal."
            ),
            "Step 2 CK": (
                "Assessment of decision-making capacity: understanding, expressing choice, appreciation, reasoning",
                "Clinical determination that a patient can understand relevant medical facts, express an unambiguous choice, appreciate consequences to their life, and rationally manipulate information.",
                "Decision-making capacity is decision-specific and time-specific; a patient with mild dementia or depression may retain full capacity to make straightforward treatment decisions."
            ),
            "Step 3": (
                "Surrogate decision-making hierarchy: Substituted judgment vs Best interests standard",
                "Surrogate decision-makers must first apply the substituted judgment standard (what the patient would have chosen based on prior statements), followed by best interests if wishes are unknown.",
                "If an advance directive or designated healthcare proxy exists, their direction overrides family consensus; family members cannot override documented autonomous choices of the patient."
            ),
            "PLAB / UKMLA": (
                "Exceptions to patient confidentiality: public safety, communicable disease, and DVLA",
                "Breaching confidentiality without consent when required by law (notifiable infectious diseases), or to protect the public from serious harm (violent threats, unfit to drive reported to DVLA).",
                "Under GMC guidance, physicians should first encourage the patient to self-report unfit driving or violent intent; if the patient refuses, the physician must disclose necessary details to authorities."
            ),
            "AMC": (
                "Emergency doctrine and implied consent in unconscious or incapacitated patients",
                "Providing immediate life-saving medical and surgical resuscitation under the emergency doctrine of implied consent when the patient is unconscious and no surrogate is immediately reachable.",
                "The emergency doctrine assumes that a reasonable person would consent to immediate life-saving interventions; physicians are legally protected in initiating urgent trauma resuscitation."
            ),
            "MCCQE": (
                "Mature minor doctrine and adolescent reproductive healthcare confidentiality",
                "Minors demonstrating sufficient intellectual maturity and understanding (Gillick competence) may provide legally binding consent for contraception, STI treatment, and abortion without parental notification.",
                "Healthcare providers must protect minor confidentiality regarding sexual and reproductive health; notifying parents against a mature minor's wishes breaches confidentiality and discourages care."
            ),
            "FCPS": (
                "Management of impaired colleague: patient safety priority and institutional reporting",
                "Ethical and professional duty to protect patient safety by immediately reporting an impaired colleague (substance intoxication, severe cognitive impairment) to clinical supervisor or licensing board.",
                "Protecting vulnerable patients from immediate harm supersedes interpersonal loyalty; physicians must take prompt action to intervene if an impaired colleague is actively seeing patients."
            ),
            "NLE": (
                "Informed consent requirements: disclosure of risks, benefits, alternatives, and voluntariness",
                "Adequate disclosure of diagnosis, proposed intervention nature and purpose, material risks (> 1% or severe), expected benefits, viable alternatives, and the option of no treatment.",
                "Informed consent is an active communication process, not a signed paper form; consent is legally invalid if coerced, obtained under false pretenses, or if material risks were withheld."
            ),
            "NEET PG": (
                "Brain death criteria and declaration protocols: clinical apnea test and ancillary testing",
                "Irreversible cessation of all brain and brainstem function: deep coma, absent brainstem reflexes (pupillary, corneal, oculocephalic, gag), and positive apnea test (PaCO2 >= 60 mm Hg without respiration).",
                "Brain death is legal and biological death; prior to testing, reversible confounders (hypothermia < 35°C, severe metabolic derangements, CNS depressant medications, neuromuscular blockade) must be excluded."
            ),
            "MRCP": (
                "Cardiopulmonary Resuscitation (DNACPR) decisions: clinical futility vs patient autonomy",
                "A Do Not Attempt Cardiopulmonary Resuscitation (DNACPR) order applies solely to cardiopulmonary arrest and does not withhold other active medical therapies (antibiotics, fluids, oxygen).",
                "Physicians are not ethically or legally obligated to provide medically futile cardiopulmonary resuscitation that offers no physiological benefit; however, transparent discussion with the family is mandatory."
            ),
            "MRCEM": (
                "Emergency detention of patients lacking capacity attempting to leave against medical advice",
                "Invoking common law or mental health legislation to temporarily detain, physically restrain, and treat a patient who lacks capacity and poses an immediate danger to their own life or health.",
                "A patient with acute delirium, intoxication, or severe hypoxemia who lacks capacity cannot discharge themselves against medical advice; clinicians have a legal duty of care to hold and treat them."
            ),
            "SMLE": (
                "Disclosure of medical errors: transparency, apology, and systemic safety review",
                "Immediate truthful disclosure of medical errors to the patient and family, accompanied by a genuine empathetic apology, explanation of remediation, and non-punitive root-cause analysis.",
                "Open disclosure reduces medical malpractice litigation, restores patient trust, and facilitates institutional root cause analysis to redesign systems and prevent future adverse events."
            ),
            "HAAD / DHA": (
                "Cultural competence and religious considerations in end-of-life and blood transfusion care",
                "Respecting autonomous adult Jehovah's Witness refusal of blood products (employing cell salvage and non-blood volume expanders), while recognizing court intervention to transfuse minor children.",
                "Adults with capacity have the legal right to refuse life-saving blood products based on religious beliefs; however, parents cannot refuse life-saving transfusions for a minor child."
            ),
            "UHS MBBS": (
                "Hippocratic Oath, Declaration of Geneva, and Nuremberg Code foundational ethics",
                "Declaration of Geneva emphasizing dedication to humanitarian service, patient health as first consideration, absolute respect for human life, and prohibition of involuntary human experimentation.",
                "The Nuremberg Code (1947) established that voluntary informed consent of the human subject is absolutely essential, prohibiting medical research without informed autonomous participant agreement."
            )
        }
    },

    # Domain 123: Emergency Disaster Medicine & CBRNE
    {
        "id": "domain_123_disaster_medicine",
        "entity": "Mass casualty triage (START), CBRNE decontamination, and radiation injury",
        "hallmark": "mass casualty disaster scene with multiple trauma victims, color-coded triage tags (Green, Yellow, Red, Black), chemical nerve agent exposure (cholinergic SLUDGEM), acute radiation sickness with lymphocyte depletion, or blast trauma with tympanic rupture",
        "system": "General Principles",
        "ref_key": "disaster",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Acute Radiation Syndrome (ARS): absolute lymphocyte count kinetics and staging",
                "Depletion of peripheral blood absolute lymphocyte count within 24 to 48 hours serving as the most accurate biological dosimeter of acute whole-body ionizing radiation exposure.",
                "Doses > 2 Gy cause hematopoietic syndrome (pancytopenia); doses > 6 Gy cause gastrointestinal mucosal sloughing; doses > 10 Gy cause cardiovascular and central nervous system collapse."
            ),
            "Step 2 CK": (
                "Simple Triage and Rapid Treatment (START) algorithm for adult mass casualty incidents",
                "Rapid classification: Walking wounded = GREEN; Respiration absent after airway repositioning = BLACK; Respiratory rate > 30/min, absent radial pulse, or fails to follow commands = RED (Immediate).",
                "START triage evaluates respiration, perfusion, and mental status (RPM) in under 60 seconds per patient; patients with stable vitals who follow commands but cannot walk are classified as YELLOW (Delayed)."
            ),
            "Step 3": (
                "Chemical nerve agent exposure (Sarin, VX): autoinjector antidotes and decontamination",
                "Immediate dermal decontamination (clothing removal) and administration of atropine (muscarinic blocker) and pralidoxime (acetylcholinesterase reactivator), plus diazepam for seizures.",
                "Organophosphates irreversibly phosphorylate acetylcholinesterase; atropine reverses life-threatening bronchorrhea and bronchoconstriction ('killer B's'), while pralidoxime frees the enzyme before aging."
            ),
            "PLAB / UKMLA": (
                "Blast injury physics: primary, secondary, tertiary, and quaternary mechanisms",
                "Primary blast injury caused by the supersonic shock wave affecting air-filled organs (blast lung, tympanic membrane rupture, bowel perforation); secondary caused by flying shrapnel.",
                "Tympanic membrane rupture is the most sensitive anatomical marker of primary overpressure blast exposure; blast lung causes acute pulmonary contusion and air embolism requiring cautious ventilation."
            ),
            "AMC": (
                "Hospital disaster preparedness: surge capacity, lockdown, and reverse triage",
                "Activating the hospital incident command system, locking down emergency entrances, and reverse-triaging stable inpatients for early discharge to expand critical care bed capacity.",
                "Reverse triage identifies hospitalized patients with low risk of acute decompensation whose discharge frees staff, monitored beds, and surgical suites for the incoming mass casualty surge."
            ),
            "MCCQE": (
                "Hot, Warm, and Cold operational zones in hazmat CBRNE emergency response",
                "Victims triaged and decontaminated in the Warm zone before entry into the Cold zone (hospital treatment area); healthcare providers in Hot/Warm zones require Level A/B personal protective equipment.",
                "Secondary contamination of emergency department staff and facilities occurs if contaminated patients enter without prior gross decontamination (clothing removal accounts for 80-90% of decontamination)."
            ),
            "FCPS": (
                "Crush syndrome and traumatic rhabdomyolysis emergency field management",
                "Initiating aggressive intravenous isotonic saline hydration (1-1.5 L/hr) PRIOR to releasing the compressive entrapment object to prevent acute hyperkalemic cardiac arrest and renal failure.",
                "Reperfusion of crushed skeletal muscle flushes massive amounts of myoglobin, potassium, and acid metabolites into systemic circulation; pre-extrication hydration protects against lethal arrhythmias."
            ),
            "NLE": (
                "JumpSTART pediatric mass casualty triage algorithm modifications",
                "Incorporating 5 rescue breaths for non-breathing pediatric patients with a palpable pulse before classifying as DECEASED (Black), reflecting the primary respiratory etiology of pediatric arrest.",
                "Unlike adults where apnea after airway positioning signifies death, children often experience primary respiratory arrest with intact cardiac function; 5 rescue breaths can restore spontaneous breathing."
            ),
            "NEET PG": (
                "Anthrax (Bacillus anthracis) as a biological weapon: inhalational presentation and ciprofloxacin",
                "Inhalation of aerosolized endospores engulfed by alveolar macrophages, causing hemorrhagic mediastinitis (widened mediastinum on chest X-ray), hemorrhagic pleural effusions, and septic shock.",
                "Inhalational anthrax is non-communicable person-to-person; post-exposure prophylaxis and treatment require 60 days of oral ciprofloxacin or doxycycline plus antitoxin (raxibacumab)."
            ),
            "MRCP": (
                "Sulfur mustard (vesicant) chemical injury: blister formation and pulmonary toxicity",
                "Alkylating agent causing DNA cross-linking, painless latency period of 2 to 24 hours, followed by erythema, massive fluid-filled bullae, corneal ulceration, and pseudomembranous tracheobronchitis.",
                "Mustard gas causes alkylation of cellular nucleophiles and activates poly(ADP-ribose) polymerase (PARP), depleting NAD+ and causing keratinocyte necrosis; treatment is supportive wound and airway care."
            ),
            "MRCEM": (
                "Hospital evacuation protocols in fire, structural collapse, or hazmat breach",
                "Horizontal evacuation across fire-resistant smoke barrier compartments on the same floor before initiating vertical evacuation down stairwells to the ground level staging area.",
                "Horizontal evacuation moves critically ill dependent patients past fire compartment doors without navigating stairwells, maintaining life support equipment and avoiding bottleneck delays."
            ),
            "SMLE": (
                "Potassium iodide (KI) administration following nuclear reactor radioactive iodine release",
                "Oral potassium iodide administered within hours of atmospheric radioactive iodine-131 release to saturate thyroid sodium-iodide symporters and prevent future thyroid follicular carcinoma.",
                "Potassium iodide floods the thyroid gland with stable non-radioactive iodine (Wolff-Chaikoff effect), blocking uptake of carcinogenic I-131; priority is given to pregnant women, infants, and children."
            ),
            "HAAD / DHA": (
                "Infectious disease biosecurity and viral hemorrhagic fever (Ebola) personal protective equipment",
                "Full-body fluid-impermeable coverall, powered air-purifying respirator (PAPR) or N95 mask with face shield, double gloving, and trained observer supervision during strict doffing procedures.",
                "Transmission occurs through direct contact with infectious blood and body fluids; the majority of healthcare worker infections occur during improper doffing of contaminated PPE."
            ),
            "UHS MBBS": (
                "Casualty tag color coding and physiological thresholds in disaster triage",
                "Red (Priority 1: immediate life-threatening compromise), Yellow (Priority 2: urgent delayed), Green (Priority 3: minor ambulatory walking wounded), Black (Priority 4: dead or non-survivable).",
                "Standard disaster triage shifts the clinical focus from individual patient advocacy to doing the greatest good for the greatest number of casualties with available medical resources."
            )
        }
    },

    # Domain 124: Palliative Care & Pain Management
    {
        "id": "domain_124_palliative_care",
        "entity": "Cancer pain management, WHO analgesic ladder, and end-of-life care",
        "hallmark": "severe chronic cancer pain, breakthrough pain spikes, opioid-induced constipation, opioid rotation, palliative sedation for refractory distress, or 'death rattle' terminal respiratory secretions",
        "system": "General Principles",
        "ref_key": "palliative",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pharmacology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Opioid receptor signal transduction and tolerance vs physical dependence vs addiction",
                "Mu-opioid receptor Gi protein-coupling inhibiting adenylyl cyclase, closing voltage-gated calcium channels, and opening inward-rectifying potassium channels to hyperpolarize neurons.",
                "Physical dependence (withdrawal upon abrupt cessation) and pharmacological tolerance (requiring higher doses for equal analgesia) are expected physiological responses, distinct from psychological addiction."
            ),
            "Step 2 CK": (
                "WHO three-step analgesic ladder and opioid initiation in moderate to severe cancer pain",
                "Step 1 (non-opioids: acetaminophen, NSAIDs), Step 2 (weak opioids: codeine, tramadol), Step 3 (strong opioids: morphine, oxycodone, fentanyl) with co-prescribed stimulant laxatives.",
                "For severe cancer pain (score >= 7/10), bypass weak opioids directly to Step 3 strong opioids (oral morphine); always initiate a scheduled bowel regimen (senna plus docusate) to prevent constipation."
            ),
            "Step 3": (
                "Breakthrough pain management and equianalgesic opioid dose rotation calculations",
                "Prescribing breakthrough doses equivalent to 10% to 15% of the total 24-hour baseline opioid requirement available every 1 to 2 hours as needed, with 25-50% dose reduction for incomplete cross-tolerance.",
                "When rotating opioids (e.g., oral morphine to transdermal fentanyl), calculate the 24-hour equianalgesic dose and reduce by 25-30% to account for incomplete cross-tolerance and avoid accidental overdose."
            ),
            "PLAB / UKMLA": (
                "Management of terminal respiratory secretions ('death rattle') in end-of-life care",
                "Gentle patient repositioning (semi-prone or side-lying) and subcutaneous antimuscarinic administration (glycopyrronium, hyoscine butylbromide) without distressing tracheal suctioning.",
                "Terminal secretions result from loss of the swallowing and cough reflexes in an obtunded dying patient; antimuscarinics decrease ongoing salivary production but do not clear existing secretions."
            ),
            "AMC": (
                "Palliative sedation for refractory terminal suffering and doctrine of double effect",
                "Intravenous or subcutaneous midazolam infusion titrated to relieve unbearable existential or physical distress refractory to all interventions, ethically justified by the doctrine of double effect.",
                "The doctrine of double effect recognizes that an action with both a good effect (relieving suffering) and an unintended foreseen bad effect (hastening death) is ethical if the primary intent is palliative."
            ),
            "MCCQE": (
                "Neuropathic cancer pain: adjuvant medications (Gabapentinoids and SNRIs)",
                "Burning, lancinating, or dermatomal dysesthesias indicating neuropathic pain, managed by adding gabapentin, pregabalin, or duloxetine to baseline opioid analgesia.",
                "Opioids have poor efficacy for pure neuropathic pain; gabapentinoids bind alpha-2-delta subunits of voltage-gated calcium channels, reducing excitatory neurotransmitter release in the dorsal horn."
            ),
            "FCPS": (
                "Opioid neurotoxicity syndrome: hyperalgesia, allodynia, and opioid rotation",
                "Accumulation of active polar metabolites (morphine-3-glucuronide) in renal impairment causing paradoxical hyperalgesia, myoclonus, and delirium, managed by hydration and opioid rotation.",
                "Morphine-3-glucuronide lacks analgesic activity and is neurotoxic; when renal clearance declines, switching to opioids without active neurotoxic metabolites (fentanyl, methadone) resolves myoclonus."
            ),
            "NLE": (
                "Management of opioid-induced constipation: peripherally acting mu-opioid receptor antagonists",
                "Prophylactic osmotic and stimulant laxatives (polyethylene glycol, senna), escalating to peripherally acting mu-opioid receptor antagonists (PAMORAs: methylnaltrexone) for refractory constipation.",
                "Methylnaltrexone contains a quaternary amine that prevents it from crossing the blood-brain barrier; it selectively blocks peripheral gastrointestinal mu-receptors without reversing central analgesia."
            ),
            "NEET PG": (
                "Transdermal Fentanyl patch pharmacokinetics, onset latency, and heat warnings",
                "Subcutaneous fat depot formation requiring 12 to 24 hours to reach steady-state analgesic concentrations; external heat (heating pads, fever) dramatically accelerates transdermal absorption.",
                "Fentanyl patches are indicated ONLY for opioid-tolerant chronic pain, never for acute opioid-naive pain; external heat increases cutaneous microcirculation, precipitating lethal fentanyl overdose."
            ),
            "MRCP": (
                "Spinal cord compression in metastatic malignancy: emergency dexamethasone and MRI",
                "Immediate high-dose intravenous dexamethasone (16 mg bolus) to reduce vasogenic cord edema, followed by urgent whole-spine MRI and emergency surgical decompression or radiotherapy.",
                "Metastatic epidural cord compression is an oncological emergency; neurological recovery is inversely proportional to duration of motor deficit before decompression; steroids must precede imaging."
            ),
            "MRCEM": (
                "Management of severe dyspnea in end-of-life palliative patients",
                "Low-dose oral or subcutaneous morphine (decreases work of breathing and blunts respiratory center air hunger) combined with facial cool-air fanning and low-dose benzodiazepines.",
                "Opioids reduce central perception of air hunger and relieve dyspnea without suppressing respiratory drive when carefully titrated; a cool fan directed at the cheek stimulates the trigeminal nerve, reducing dyspnea."
            ),
            "SMLE": (
                "Advance care planning and healthcare power of attorney documentation",
                "Structured discussions exploring values, living wills, durable power of attorney for healthcare, and preferred location of death (home hospice versus inpatient palliative unit).",
                "Early palliative integration alongside disease-directed oncological therapy improves quality of life, decreases depression, reduces non-beneficial ICU admissions, and prolongs median survival."
            ),
            "HAAD / DHA": (
                "Total pain concept in palliative care: physical, psychological, social, and spiritual dimensions",
                "Dame Cicely Saunders' multidimensional 'total pain' framework addressing physical nociception alongside psychological distress, interpersonal conflict, and existential suffering.",
                "Escalating opioid doses without addressing existential terror, caregiver burnout, or unresolved guilt fails to achieve pain relief; interdisciplinary chaplaincy and social work are essential."
            ),
            "UHS MBBS": (
                "Metabolism and excretion of Morphine, Codeine, and Fentanyl in hepatic and renal failure",
                "Morphine undergoing hepatic glucuronidation to M3G and M6G excreted by kidneys; Fentanyl metabolized by CYP3A4 to inactive norfentanyl without active metabolites, preferred in renal failure.",
                "In chronic kidney disease, morphine and codeine metabolites accumulate rapidly causing profound narcosis and respiratory arrest; fentanyl and methadone are the safest opioids in renal impairment."
            )
        }
    },

    # Domain 125: Transplant Immunology & Allograft Rejection
    {
        "id": "domain_125_transplant_immunology",
        "entity": "Hyperacute, Acute cellular, Antibody-mediated, and Chronic allograft rejection",
        "hallmark": "intraoperative cyanosis and thrombosis upon revascularization (hyperacute), or acute rise in serum creatinine with interstitial lymphocytic infiltration (acute cellular), or microvascular inflammation with C4d complement staining, or progressive obliterative graft arteriosclerosis",
        "system": "General Principles",
        "ref_key": "transplant",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Mechanisms of allograft rejection: Hyperacute, Acute cellular, and Chronic",
                "Preformed anti-donor antibodies activating complement (Hyperacute, Type II); host CD8+ and CD4+ T-cell response to donor HLA (Acute cellular, Type IV); smooth muscle proliferation (Chronic).",
                "Hyperacute rejection occurs within minutes (thrombosis and graft necrosis); acute cellular rejection occurs weeks to months post-transplant (tubulitis and endarteritis); chronic rejection causes fibrosis."
            ),
            "Step 2 CK": (
                "Acute cellular rejection diagnosis via renal core biopsy and high-dose methylprednisolone",
                "Percutaneous ultrasound-guided core needle allograft biopsy demonstrating tubulitis and interstitial mononuclear infiltrate, treated with intravenous pulse methylprednisolone (500 mg daily for 3 days).",
                "Biopsy is essential to distinguish acute allograft rejection from calcineurin inhibitor nephrotoxicity, BK virus nephropathy, and acute tubular necrosis before escalating immunosuppression."
            ),
            "Step 3": (
                "Maintenance immunosuppression triple therapy: Calcineurin inhibitor, Antimetabolite, Steroid",
                "Standard maintenance regimen combining tacrolimus (calcineurin inhibitor), mycophenolate mofetil (IMPDH inhibitor), and low-dose oral prednisone, with therapeutic drug monitoring of tacrolimus.",
                "Tacrolimus prevents IL-2 transcription by blocking calcineurin-NFAT dephosphorylation; mycophenolate selectively blocks inosine monophosphate dehydrogenase, arresting T- and B-lymphocyte purine synthesis."
            ),
            "PLAB / UKMLA": (
                "Cytomegalovirus (CMV) screening, prophylaxis, and ganciclovir therapy in transplant",
                "Pre-transplant donor/recipient CMV serostatus mismatch (D+/R- highest risk) warranting 3 to 6 months of oral valganciclovir prophylaxis and monitoring for fever, leukopenia, and organ disease.",
                "CMV infection impairs allograft survival and causes tissue-invasive pneumonitis, hepatitis, and colitis; intravenous ganciclovir or oral valganciclovir is the first-line treatment of choice."
            ),
            "AMC": (
                "Antibody-Mediated Rejection (AMR): Donor-Specific Antibodies (DSA) and C4d deposition",
                "De novo anti-HLA donor-specific antibodies binding allograft peritubular capillaries, activating the classical complement pathway, confirmed by C4d immunohistochemistry and treated with plasmapheresis and IVIG.",
                "C4d is a stable degradation fragment of complement component C4 that covalently binds endothelial basement membranes; presence of C4d and DSA confirms humoral rejection requiring antibody removal."
            ),
            "MCCQE": (
                "Calcineurin inhibitor toxicity (Tacrolimus/Cyclosporine): nephrotoxicity vs rejection",
                "Afferent arteriolar vasoconstriction causing non-inflammatory elevation in serum creatinine, hypertension, and hyperkalemia, resolving with reduction of the calcineurin inhibitor trough level.",
                "Biopsy in calcineurin inhibitor nephrotoxicity shows isometric proximal tubular vacuolization and hyaline arteriolar thickening without the tubulitis or interstitial inflammatory infiltrate of rejection."
            ),
            "FCPS": (
                "Pre-transplant immunological matching: ABO compatibility, HLA typing, and cross-matching",
                "Complement-dependent lymphocytotoxicity (CDC) cross-match to rule out preformed recipient antibodies against donor T-cells, combined with HLA-A, B, C, DR, and DQ molecular matching.",
                "A positive cytotoxic T-cell cross-match is an absolute contraindication to transplantation because preformed anti-HLA antibodies trigger immediate catastrophic hyperacute rejection."
            ),
            "NLE": (
                "Opportunistic infection timeline post-transplantation: 0-1 month, 1-6 months, > 6 months",
                "First month dominated by surgical/nosocomial infections (wound, UTI); 1-6 months dominated by opportunistic infections (CMV, EBV, PJP, BK virus); > 6 months community-acquired pathogens.",
                "Universal trimethoprim-sulfamethoxazole (TMP-SMX) prophylaxis for 6 to 12 months prevents Pneumocystis jirovecii pneumonia, toxoplasmosis, and bacterial urinary tract infections."
            ),
            "NEET PG": (
                "Graft-Versus-Host Disease (GVHD) in hematopoietic stem cell transplantation",
                "Donor alloreactive immunocompetent T-cells attacking host histocompatibility antigens in the skin (maculopapular rash), liver (cholestatic jaundice), and gastrointestinal tract (secretory diarrhea).",
                "GVHD requires three conditions (Billingham criteria): graft contains immunologically competent cells, host is immunologically compromised, and host expresses foreign antigens not present in the donor."
            ),
            "MRCP": (
                "Post-Transplant Lymphoproliferative Disorder (PTLD) and Epstein-Barr Virus (EBV)",
                "EBV-driven B-cell lymphoproliferation in heavily immunosuppressed patients, presenting with lymphadenopathy, fever, and extranodal masses, managed by reducing immunosuppression and rituximab.",
                "Loss of cytotoxic T-cell surveillance allows latent EBV-infected B-lymphocytes to proliferate unchecked; reducing baseline immunosuppression allows endogenous T cells to clear EBV-driven clones."
            ),
            "MRCEM": (
                "Sepsis presentation in the immunosuppressed solid organ transplant recipient",
                "Blunted febrile response and minimal physical inflammatory signs due to chronic corticosteroid and antimetabolite therapy; immediate broad-spectrum coverage and septic shock protocol.",
                "Immunosuppressed patients cannot mount a robust leukocytosis or fever response; a mild temperature elevation (38.0°C) or subtle malaise may be the only harbinger of overwhelming bacteremia."
            ),
            "SMLE": (
                "BK virus-associated nephropathy (BKVAN): viral replication and decoy cells",
                "Reactivation of polyomavirus BK in renal allografts causing progressive interstitial nephritis, diagnosed by urine decoy cells on cytology, plasma BK viral PCR, and allograft biopsy.",
                "BK virus latent in renal tubular epithelium reactivates under intense immunosuppression; management requires stepwise reduction of immunosuppression to prevent allograft loss."
            ),
            "HAAD / DHA": (
                "Long-term post-transplant malignancy screening: non-melanoma skin cancer and cervical screening",
                "Annual total-body dermatological examination for squamous cell and basal cell carcinoma (60-fold increased incidence), strict photoprotection, and regular cervical Pap smear surveillance.",
                "Chronic immunosuppression impairs immune surveillance of oncogenic viruses (HPV, HHV-8, EBV); squamous cell carcinoma of the skin in transplant recipients is aggressive and prone to metastasis."
            ),
            "UHS MBBS": (
                "Immunological pathways of allorecognition: Direct versus Indirect pathway",
                "Direct pathway involves recipient T cells recognizing intact allogeneic MHC on donor dendritic cells (acute rejection); indirect pathway involves recipient APCs processing donor MHC peptides (chronic rejection).",
                "The direct pathway triggers a massive polyclonal T-cell response responsible for early acute cellular rejection; the indirect pathway mimics normal foreign antigen presentation and drives chronic vascular rejection."
            )
        }
    }
]
