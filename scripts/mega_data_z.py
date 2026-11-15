"""
Mega Data Part Z: Domains 158 to 163 (Forensic Medicine, Biostatistics, Psychiatric Emergencies, Addiction Medicine, Transfusion Medicine, Anesthesia & Airway)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_Z = [
    # Domain 158: Forensic Medicine & Medical Jurisprudence
    {
        "id": "domain_158_forensic_medicine",
        "entity": "Forensic pathology, mechanical asphyxia, firearm ballistics, and post-mortem interval",
        "hallmark": "ligature mark above thyroid cartilage with inverted V-notch (hanging) versus horizontal circular low mark (strangulation), cherry-red post-mortem hypostasis, or muzzle imprint with soot deposit around entry gunshot wound",
        "system": "General Principles",
        "ref_key": "forensic_med",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Medicine",
            "UHS MBBS": "Ethics",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Post-mortem hypostasis (livor mortis) biochemistry and carbon monoxide discoloration",
                "Gravitational pooling of deoxygenated blood in dependent capillaries fixing within 8-12 hours; bright cherry-red discoloration occurs in carbon monoxide and cyanide poisoning due to carboxyhemoglobin.",
                "Once red blood cells hemolyze and pigment diffuses into surrounding subcutaneous fat (after 8-12 hours), livor mortis becomes fixed and will not blanch on thumb pressure or shift with body repositioning."
            ),
            "Step 2 CK": (
                "Differentiating ante-mortem from post-mortem injuries in forensic traumatology",
                "Detecting vital reaction including cellular inflammatory infiltration (polymorphonuclear leukocytes), extravasated coagulated fibrin clot, and enzyme (esterase, ATPase) activity at the wound margins.",
                "Post-mortem injuries lack vital cellular or vascular responses; blood easily washes away without adhering fibrin, and histopathology demonstrates absence of neutrophil migration or marginal vital tissue retraction."
            ),
            "Step 3": (
                "Medicolegal autopsy report requirements and chain of custody preservation",
                "Maintaining an unbroken formal chain of custody for all physical evidence, clothing, biological specimens, and toxicological samples collected during forensic post-mortem examination.",
                "Any unaccounted gap in the chain of custody renders physical and toxicological evidence legally inadmissible in criminal jurisprudence, compromising judicial veracity and homicide investigations."
            ),
            "PLAB / UKMLA": (
                "Coroner referral criteria in the United Kingdom: Medical Certificate of Cause of Death (MCCD)",
                "Statutory requirement to notify His Majesty's Coroner for deaths that are sudden and unexpected, violent or unnatural, occurred during or within 24 hours of surgery/anesthesia, or where cause is unknown.",
                "A registered medical practitioner can only complete an MCCD if they attended the deceased in their last illness and know the definitive natural cause of death; all other cases mandate Coroner referral."
            ),
            "AMC": (
                "Post-mortem interval estimation using rigor mortis, body temperature, and vitreous potassium",
                "Integrating algor mortis (cooling according to Henssge nomogram), rigor mortis progression (appearing at 2-4 hours, complete at 12 hours), and linear post-mortem rise in vitreous humor potassium.",
                "Vitreous humor is anatomically isolated from rapid bacterial decomposition; autolytic breakdown of the retinal syncytium releases potassium into the vitreous at a steady, predictable time-dependent rate."
            ),
            "MCCQE": (
                "Forensic differentiation of mechanical asphyxia: Hanging versus manual strangulation",
                "Hanging features an incomplete, oblique ligature furrow situated high on the neck above the thyroid cartilage; manual strangulation features fingertip contusions, fingernail abrasions, and fractured hyoid bone.",
                "Suspension constricts carotid arteries and jugular veins with minimal gravitational traction (as little as 3-5 kg), inducing rapid unconsciousness; hyoid bone fractures occur in > 50% of manual strangulation cases."
            ),
            "FCPS": (
                "Firearm entry versus exit wound morphology and range of fire determinations",
                "Contact entry wound showing a muzzle stamp, carbon soot, and stellate laceration over bone; exit wound showing larger, irregular everted margins lacking abrasion rim, soot, or burning.",
                "Expanding subcutaneous propellant gases pocketed between scalp and calvarium cause explosive outward tearing of the skin (stellate laceration) in hard-contact cranial firearm injuries."
            ),
            "NLE": (
                "Medico-legal examination of sexual assault: Biological evidence collection protocol",
                "Obtaining written informed consent, performing head-to-toe examination for physical trauma, collecting wood's lamp fluorescence swabs for acid phosphatase, and preserving vaginal pool DNA swabs.",
                "Seminal prostatic acid phosphatase and semen-specific antigen (p30 / PSA) remain detectable in the vaginal vault for up to 48-72 hours post-assault, providing conclusive biological evidence."
            ),
            "NEET PG": (
                "Drowning signs at autopsy: Froth at mouth, Paltauf hemorrhages, and diatom test",
                "Fine, white, copious, persistent lachrymatory froth (froth of Gettler) at the nostrils, subpleural petechial hemorrhages (Paltauf spots), and recovery of silica diatoms from closed bone marrow (femur).",
                "Inhaled water entering the pulmonary alveoli during active gasping carries microscopic aquatic algae (diatoms) into circulation; presence in deep closed marrow proves ante-mortem drowning."
            ),
            "MRCP": (
                "Munchausen syndrome by proxy (Fabricated or Induced Illness in a child)",
                "Parent or caregiver intentionally falsifying symptoms, tampering with laboratory specimens, or inducing actual physical illness in a dependent child, requiring immediate child protection reporting.",
                "Caregivers frequently present as cooperative, attentive, and medically knowledgeable; failure to separate the child and report to social protection services risks progressive severe morbidity or death."
            ),
            "MRCEM": (
                "Suspected non-accidental trauma (physical abuse) in pediatric emergency presentations",
                "Recognizing suspicious injury patterns: metaphyseal corner fractures ('bucket-handle' fractures), posterior rib fractures, multiple fractures of varying healing ages, and clear-demarcated immersion scald burns.",
                "Posterior rib fractures are virtually pathognomonic for severe child abuse, caused by forceful anteroposterior thoracic compression during violent shaking; skeletal survey is mandatory."
            ),
            "SMLE": (
                "Brain death determination: Neurological clinical criteria and apnea testing standards",
                "Documenting irreversible coma of known etiology, absence of brainstem reflexes (pupillary, corneal, oculocephalic, gag/cough), and lack of respiratory effort during apnea testing with PaCO2 >= 60 mm Hg.",
                "Prior to testing, core body temperature must be >= 36.0 C, systolic BP >= 100 mm Hg, and all CNS-depressant medications and neuromuscular blocking agents completely cleared or reversed."
            ),
            "HAAD / DHA": (
                "Medical negligence elements in clinical jurisprudence: Duty, Breach, Causation, and Damages",
                "Legal requirement for the plaintiff to prove all 4 elements of tort: duty of care owed, breach of the standard of care (Bolam/Bolitho standard), direct proximate causation, and quantifiable harm.",
                "Breach of duty alone without demonstrable physiological or psychological injury does not constitute actionable civil malpractice; causation must establish that 'but for' the breach, injury would not have occurred."
            ),
            "UHS MBBS": (
                "Tardieu spots, Simon sign, and post-mortem decomposition: Marbling and green discoloration",
                "Right lower quadrant anterior abdominal wall green discoloration occurring at 24-36 hours over the cecum due to hydrogen sulfide reacting with hemoglobin to form sulfhemoglobin.",
                "Bacterial putrefaction by intestinal Clostridium species generates hydrogen sulfide gas, causing green cecal staining followed by superficial venular intravascular hemolysis ('marbling' of the skin)."
            )
        }
    },

    # Domain 159: Biostatistics, Epidemiology & Diagnostic Accuracy
    {
        "id": "domain_159_biostatistics_epidemiology",
        "entity": "Clinical biostatistics, diagnostic testing accuracy, and epidemiological study designs",
        "hallmark": "screening test positive predictive value decreasing as disease prevalence drops, positive likelihood ratio > 10 ruling in disease, or calculating odds ratio from retrospective case-control study",
        "system": "General Principles",
        "ref_key": "biostats",
        "subjects": {
            "Step 1": "Biostatistics",
            "NEET PG": "Biostatistics",
            "FCPS": "Medicine",
            "UHS MBBS": "Biostatistics",
            "other": "Biostatistics"
        },
        "concepts": {
            "Step 1": (
                "Prevalence impact on Positive Predictive Value (PPV) and Negative Predictive Value (NPV)",
                "Sensitivity and specificity remain mathematically constant, whereas positive predictive value increases with disease prevalence and negative predictive value decreases as prevalence rises.",
                "In low-prevalence screening populations, the vast majority of positive test results are false positives even with highly specific tests; Bayes theorem mathematically governs post-test probability."
            ),
            "Step 2 CK": (
                "Sensitivity, Specificity, and clinical application of Likelihood Ratios",
                "Positive likelihood ratio [Sensitivity / (1 - Specificity)] > 10 generates substantial increases in post-test probability, whereas Negative likelihood ratio [(1 - Sensitivity) / Specificity] < 0.1 rules out disease.",
                "Likelihood ratios are independent of disease prevalence; converting pre-test probability to pre-test odds and multiplying by the likelihood ratio gives post-test odds, applicable to any patient cohort."
            ),
            "Step 3": (
                "Number Needed to Treat (NNT) and Absolute Risk Reduction (ARR) calculations",
                "Calculating Absolute Risk Reduction as [Control Event Rate minus Experimental Event Rate], and Number Needed to Treat as the reciprocal of ARR (NNT = 1 / ARR), rounded up to the nearest integer.",
                "Relative risk reduction can dramatically exaggerate perceived clinical benefit in low-incidence events; absolute risk reduction and NNT provide objective measures of real-world patient benefit."
            ),
            "PLAB / UKMLA": (
                "Epidemiological study designs: Cohort versus Case-Control and appropriate measure of association",
                "Prospective cohort studies select patients by exposure and calculate Relative Risk (RR); retrospective case-control studies select patients by disease outcome and calculate Odds Ratio (OR).",
                "Cohort studies determine true disease incidence rates across exposed versus unexposed populations, whereas case-control studies cannot compute incidence and must estimate risk through odds ratios."
            ),
            "AMC": (
                "Selection bias, recall bias, and Berkson bias in clinical epidemiological research",
                "Recall bias in retrospective studies where subjects with adverse outcomes recall past exposures more vividly; Berkson bias arising from selecting controls from hospitalized populations with higher illness rates.",
                "Hospital-based controls have higher exposures to medications and risk factors than the general community, creating spurious associations that distort the calculated odds ratio."
            ),
            "MCCQE": (
                "Confounding versus effect modification: Stratified analysis distinction",
                "Confounding occurs when an extraneous factor distorts association and disappears upon stratification; effect modification represents a biological reality where the association differs across strata.",
                "If the odds ratio is 2.5 overall, but becomes 1.0 in both stratified subgroups (e.g., smokers and non-smokers), smoking is a confounder; if OR is 1.0 in men and 4.0 in women, sex is an effect modifier."
            ),
            "FCPS": (
                "Type I (alpha) versus Type II (beta) statistical errors and statistical study power",
                "Type I error is rejecting the null hypothesis when it is actually true (false positive, probability alpha); Type II error is failing to reject the null when it is false (false negative, probability beta).",
                "Statistical power (1 - beta) is the probability of detecting a true clinical difference; increasing sample size, effect size, or precision increases study power and minimizes Type II errors."
            ),
            "NLE": (
                "Sensitivity versus Specificity mnemonics: SnNOut and SpPIn in clinical decision-making",
                "A highly Sensitive test when Negative rules OUT the disease (SnNOut, low false-negative rate); a highly Specific test when Positive rules IN the disease (SpPIn, low false-positive rate).",
                "Screening programs require high sensitivity to ensure virtually zero missed cases; confirmatory diagnostic tests require high specificity to avoid unnecessary treatment in healthy individuals."
            ),
            "NEET PG": (
                "Measures of central tendency and dispersion in normal (Gaussian) versus skewed distributions",
                "In a positively (right) skewed distribution, Mean > Median > Mode; in negatively (left) skewed, Mean < Median < Mode; the median is the preferred measure of central tendency for skewed data.",
                "The mean is heavily pulled toward extreme outlying values in asymmetric distributions, whereas the median remains stable and robust, accurately reflecting the 50th percentile."
            ),
            "MRCP": (
                "Intention-to-Treat (ITT) versus Per-Protocol analysis in randomized controlled trials",
                "Analyzing all randomized subjects in their assigned treatment groups regardless of protocol deviations, non-adherence, or dropout, preserving initial baseline prognostic randomization balance.",
                "Intention-to-treat reflects real-world clinical effectiveness and avoids attrition bias; per-protocol analysis evaluates physiological efficacy only in adherent patients but introduces prognostic imbalance."
            ),
            "MRCEM": (
                "Receiver Operating Characteristic (ROC) curve analysis: Area Under the Curve (AUC)",
                "Plotting true positive rate (Sensitivity) on the y-axis against false positive rate (1 - Specificity) on the x-axis, where the Area Under the Curve (AUC) quantifies overall diagnostic discrimination.",
                "An AUC of 1.0 indicates perfect diagnostic discrimination; an AUC of 0.5 denotes performance no better than random chance (the diagonal 45-degree reference line)."
            ),
            "SMLE": (
                "Lead-time bias versus length-time bias in cancer screening programs",
                "Lead-time bias creates the illusion of prolonged survival by detecting cancer earlier in its course without altering natural history; length-time bias overrepresents indolent, slowly progressive tumors.",
                "Evaluating screening programs using overall all-cause mortality in randomized controlled trials avoids the false impression of survival benefit created by lead-time and length-time artifacts."
            ),
            "HAAD / DHA": (
                "Levels of evidence and GRADE methodology in evidence-based clinical practice",
                "Systematic reviews of randomized controlled trials (Level 1a / Grade A) provide the highest quality evidence; expert opinion and descriptive case series (Level 5 / Grade D) provide the lowest.",
                "GRADE framework evaluates risk of bias, consistency across trials, directness of evidence, and precision, determining the strength of clinical recommendations (strong versus conditional)."
            ),
            "UHS MBBS": (
                "Standard deviation versus standard error of the mean in clinical descriptive statistics",
                "Standard deviation (SD) quantifies biological variability among individual observations; Standard Error of the Mean (SEM = SD / sqrt(n)) reflects the precision of the estimated sample mean.",
                "SEM is always smaller than SD and decreases as sample size n increases; reporting SEM in place of SD misleadingly minimizes the perceived biological variability of the experimental data."
            )
        }
    },

    # Domain 160: Psychiatric Emergencies & Acute Psychopharmacology
    {
        "id": "domain_160_psychiatric_emergencies",
        "entity": "Neuroleptic malignant syndrome, serotonin syndrome, acute catatonia, and psychiatric crises",
        "hallmark": "lead-pipe muscle rigidity, hyperthermia, autonomic instability, and elevated serum CK (NMS); or spontaneous clonus, hyperreflexia, and mydriasis (serotonin syndrome); or waxy flexibility and mutism",
        "system": "Behavioral Health",
        "ref_key": "psych_emergency",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Psychiatry",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Neurochemical distinction between Neuroleptic Malignant Syndrome and Serotonin Syndrome",
                "NMS is caused by acute central D2 receptor antagonism in the corpus striatum and hypothalamus; Serotonin syndrome is caused by excessive intrasynaptic 5-HT2A and 5-HT1A receptor hyperstimulation.",
                "Serotonin syndrome exhibits prominent neuromuscular excitation (spontaneous or inducible clonus, hyperreflexia, tremor); NMS features generalized severe 'lead-pipe' rigidity with hyporeflexia."
            ),
            "Step 2 CK": (
                "Serotonin syndrome clinical diagnosis (Hunter criteria) and cyproheptadine therapy",
                "Hunter Serotonin Toxicity Criteria: presence of a serotonergic agent plus clonus (spontaneous, inducible, or ocular) or tremor with hyperreflexia, treated with cyproheptadine.",
                "Cyproheptadine is a potent 5-HT2A antagonist; immediate discontinuation of all serotonergic agents, supportive temperature control, and benzodiazepines control agitation and avert rhabdomyolysis."
            ),
            "Step 3": (
                "Neuroleptic malignant syndrome: Dopamine agonists, dantrolene, and intensive supportive care",
                "Immediate cessation of antipsychotics, aggressive cooling, and administration of bromocriptine (dopamine D2 agonist) or dantrolene (ryanodine receptor blocker) in severe lead-pipe rigidity.",
                "Bromocriptine overcomes central dopaminergic hypofunction in the hypothalamic thermoregulatory center; dantrolene blocks sarcoplasmic calcium release in skeletal muscle, halting hyperthermia."
            ),
            "PLAB / UKMLA": (
                "Acute dystonic reaction: Clinical manifestations and anticholinergic rescue therapy",
                "Oculogyric crisis, torticollis, trismus, and involuntary tongue protrusion developing within hours of initiating first-generation antipsychotics, treated with intravenous or IM procyclidine or diphenhydramine.",
                "Acute D2 blockade in the nigrostriatal tract unmasks unopposed cholinergic hyperactivation; muscarinic antagonists restore the striatal dopaminergic-cholinergic equilibrium, providing rapid relief within 15 minutes."
            ),
            "AMC": (
                "Acute catatonia clinical features, Bush-Francis rating scale, and lorazepam challenge test",
                "Mutism, negativism, waxy flexibility, posturing, and echolalia, diagnosed and treated with an intravenous lorazepam challenge test (1-2 mg), followed by definitive electroconvulsive therapy (ECT) if refractory.",
                "Catatonia involves profound cortical GABAergic deficiency; positive response to IV lorazepam confirms diagnosis, while malignant catatonia (with autonomic instability) warrants emergency ECT."
            ),
            "MCCQE": (
                "Emergency psychiatric assessment of acute suicide risk and involuntary admission criteria",
                "Evaluating explicit intent, detailed plan, access to lethal means, persistent hopelessness, lack of protective factors, and initiating involuntary psychiatric hold for patient safety.",
                "When a patient poses an acute imminent danger to themselves or others, ethical and legal statutes authorize emergency involuntary evaluation and psychiatric hospitalization over patient objection."
            ),
            "FCPS": (
                "Clozapine-induced agranulocytosis: Hematological monitoring and absolute neutrophil count thresholds",
                "Mandatory weekly to monthly ANC monitoring; clozapine must be immediately withheld if ANC drops below 1,000/uL (or < 500/uL indicating life-threatening agranulocytosis).",
                "Clozapine is the most effective antipsychotic for treatment-resistant schizophrenia; dangerous bone marrow suppression mediated by toxic nitrenium ion metabolites mandates strict registry monitoring."
            ),
            "NLE": (
                "Clinical recognition and management of acute panic attack versus medical emergencies",
                "Sudden surge of intense fear with palpitations, diaphoresis, dyspnea, trembling, dizziness, and fear of dying reaching peak intensity within 10 minutes, accompanied by normal ECG and troponins.",
                "Reassurance, breathing retraining, and short-term oral benzodiazepine rescue for acute incapacitating distress, followed by cognitive behavioral therapy and SSRIs for long-term panic disorder prevention."
            ),
            "NEET PG": (
                "Extrapyramidal side effects timeline of antipsychotics: Dystonia, Akathisia, Parkinsonism, Tardive Dyskinesia",
                "Acute dystonia (hours to days, treated with anticholinergics); akathisia (days to weeks, treated with beta-blockers); parkinsonism (weeks to months); tardive dyskinesia (months to years, treated with VMAT2 inhibitors).",
                "Tardive dyskinesia involves irreversible upregulation and supersensitivity of postsynaptic striatal dopamine receptors; VMAT2 inhibitors (valbenazine, deutetrabenazine) reduce presynaptic dopamine release."
            ),
            "MRCP": (
                "Delirium tremens versus alcohol hallucinosis: Timeline, sensorium, and mortality",
                "Alcohol hallucinosis occurs at 12-24 hours with visual/auditory hallucinations in a clear sensorium; delirium tremens occurs at 48-96 hours with clouded sensorium, confusion, fever, and severe autonomic collapse.",
                "Delirium tremens carries up to 5-15% mortality without aggressive treatment; intravenous diazepam titrated to deep sedation restores GABAergic inhibition, preventing fatal hyperadrenergic arrest."
            ),
            "MRCEM": (
                "Acute severe behavioral disturbance (excited delirium) emergency chemical restraint",
                "Intramuscular administration of a rapid-acting atypical antipsychotic (olanzapine) or benzodiazepine (midazolam), or intramuscular ketamine (4-5 mg/kg) for immediate rapid de-escalation of violent agitation.",
                "Excited delirium with hyperthermia and metabolic acidosis carries high sudden cardiac death risk; ketamine provides dissociative anesthesia within 3-5 minutes, allowing safe physical stabilization."
            ),
            "SMLE": (
                "Postpartum psychosis: Clinical hallmarks, infanticide risk, and emergency admission",
                "Rapid emergence of mood lability, cognitive disorganization, auditory hallucinations, and delusional beliefs regarding the infant within 2 weeks postpartum, requiring immediate psychiatric hospitalization.",
                "Postpartum psychosis is a psychiatric emergency with a 4-5% risk of infanticide or suicide; the mother must not be left alone with the infant; mood stabilizers and ECT achieve rapid remission."
            ),
            "HAAD / DHA": (
                "Lithium therapeutic index monitoring, thyroid and renal toxicity screening",
                "Maintaining narrow therapeutic trough serum level (0.6-1.0 mEq/L), screening serum creatinine, eGFR, calcium, and TSH baseline and every 6 months to monitor for nephrogenic diabetes insipidus and hypothyroidism.",
                "Lithium uncouples vasopressin V2 receptor signaling in the renal collecting duct, causing nephrogenic diabetes insipidus; long-term therapy also induces chronic interstitial nephropathy."
            ),
            "UHS MBBS": (
                "Akathisia: Subjective inner restlessness, objective motor agitation, and propranolol therapy",
                "Intense, distressing subjective motor restlessness compelling the patient to pace, shift weight, or tap feet constantly, frequently misdiagnosed as psychotic agitation, treated with oral propranolol.",
                "Increasing antipsychotic dose in unrecognized akathisia catastrophically worsens motor agitation and suicide risk; lipophilic beta-blockers (propranolol) reduce central and peripheral adrenergic hyperactivity."
            )
        }
    },

    # Domain 161: Addiction Medicine & Substance Withdrawal
    {
        "id": "domain_161_addiction_medicine",
        "entity": "Severe substance withdrawal, opioid use disorder pharmacotherapy, and stimulant toxicity",
        "hallmark": "tremor, diaphoresis, tachycardia, and auditory/visual hallucinations 48 hours after alcohol cessation; mydriasis, rhinorrhea, lacrimation, and severe abdominal cramping following opioid cessation; or paranoia with hypertension",
        "system": "Behavioral Health",
        "ref_key": "addiction_clinical",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Psychiatry",
            "FCPS": "Medicine",
            "UHS MBBS": "Psychiatry",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Neurobiology of alcohol dependence: Chronic GABA-A downregulation and NMDA receptor upregulation",
                "Chronic ethanol stimulates inhibitory GABA-A receptors and inhibits excitatory NMDA glutamate receptors; adaptive tolerance downregulates GABA-A receptors and upregulates NMDA glutamate receptors.",
                "Abrupt cessation of alcohol removes exogenously mediated inhibition, resulting in profound unchecked glutamate-mediated excitotoxicity, sympathetic hyperreactivity, seizures, and delirium tremens."
            ),
            "Step 2 CK": (
                "CIWA-Ar protocolized symptom-triggered benzodiazepine therapy in alcohol withdrawal",
                "Using the Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar) score to administer symptom-triggered doses of long-acting oral or IV diazepam/chlordiazepoxide.",
                "Symptom-triggered regimens require lower total cumulative doses of benzodiazepines and significantly shorten duration of treatment compared to fixed-schedule administration protocols."
            ),
            "Step 3": (
                "Maintenance pharmacotherapies for Opioid Use Disorder: Buprenorphine-naloxone versus Methadone",
                "Buprenorphine (partial mu-opioid agonist with high receptor affinity) combined with naloxone, versus methadone (full mu-agonist), reducing all-cause mortality and opioid relapse.",
                "Partial agonism confers a pharmacological ceiling effect on respiratory depression, making buprenorphine significantly safer in overdose than full agonists like methadone."
            ),
            "PLAB / UKMLA": (
                "Wernicke-Korsakoff syndrome: Thiamine replenishment prior to glucose infusion",
                "Administering intravenous high-dose thiamine (Pabrinex in the UK) immediately prior to or concurrently with any carbohydrate or dextrose infusion in alcohol-dependent or malnourished patients.",
                "Thiamine is an essential pyrophosphate cofactor for transketolase and pyruvate dehydrogenase; glucose infusion accelerates thiamine depletion, triggering hemorrhagic necrosis of mammillary bodies."
            ),
            "AMC": (
                "Pharmacotherapies for alcohol relapse prevention: Acamprosate, Naltrexone, and Disulfiram",
                "Naltrexone (mu-opioid antagonist reducing craving and reward reinforcement) and acamprosate (NMDA receptor modulator maintaining abstinence in renal-competent patients).",
                "Naltrexone is contraindicated in acute hepatitis, liver failure, or patients requiring opioid analgesia; disulfiram inhibits aldehyde dehydrogenase causing unpleasant acetaldehyde accumulation."
            ),
            "MCCQE": (
                "Precipitated opioid withdrawal: Buprenorphine induction timing and COWS scoring",
                "Requiring the Clinical Opiate Withdrawal Scale (COWS) score to reach >= 12 (mild-to-moderate active withdrawal) before administering the first sublingual buprenorphine dose.",
                "Administering buprenorphine while full-agonist opioids occupy mu receptors displaces them due to buprenorphine's higher binding affinity, precipitating severe hyperacute withdrawal within minutes."
            ),
            "FCPS": (
                "Cannabis hyperemesis syndrome: Cyclic vomiting, compulsive hot bathing, and capsaicin cream",
                "Chronic daily cannabis use presenting with severe cyclic nausea, intractable vomiting, and abdominal pain temporarily relieved by hot water showers, treated with topical capsaicin and cessation.",
                "Chronic high-potency THC downregulates enteric CB1 receptors and hyperstimulates central TRPV1 vanilloid receptors; hot water and topical capsaicin activate TRPV1, resetting thermoregulatory nausea centers."
            ),
            "NLE": (
                "Clinical differentiation of acute cocaine toxicity from acute opioid overdose",
                "Cocaine toxicity presents with pupillary dilation (mydriasis), tachycardia, hypertension, diaphoresis, and psychomotor agitation; opioid overdose presents with pinpoint pupils, bradycardia, and hypopnea.",
                "Cocaine blocks presynaptic reuptake of dopamine, norepinephrine, and serotonin, generating intense sympathomimetic crisis; management requires benzodiazepines, avoiding pure beta-blockers."
            ),
            "NEET PG": (
                "Alcohol withdrawal seizures: Clinical characteristics, timeline, and distinction from epilepsy",
                "Generalized tonic-clonic seizures occurring 12 to 48 hours following cessation or reduction of heavy chronic ethanol intake; characteristically occurs as a brief cluster with normal interictal EEG.",
                "Phenytoin is ineffective and contraindicated in alcohol withdrawal seizures; treatment requires GABAergic enhancement with benzodiazepines (diazepam or lorazepam)."
            ),
            "MRCP": (
                "Opioid-induced constipation: Pathophysiology and peripherally acting mu-opioid receptor antagonists",
                "Activation of enteric mu-opioid receptors inhibiting peristalsis and mucosal secretions, treated with oral peripherally acting mu-opioid receptor antagonists (PAMORAs: methylnaltrexone, naldemedine).",
                "PAMORAs carry a permanent quaternary amine group preventing them from crossing the blood-brain barrier; they block bowel mu receptors to restore motility without precipitating central withdrawal or compromising analgesia."
            ),
            "MRCEM": (
                "Acute synthetic cannabinoid and synthetic cathinone (bath salts) toxic delirium",
                "Profound delirium with paranoid psychosis, extreme physical agitation, violent combativeness, and hyperthermia, requiring immediate high-dose IV benzodiazepines and active external cooling.",
                "Synthetic cathinones trigger massive release and reuptake blockade of monoamines (MDMA-like mechanism); unrecognized agitation progresses to rhabdomyolysis, renal failure, and fatal cardiac collapse."
            ),
            "SMLE": (
                "Smoking cessation pharmacotherapies: Varenicline, Bupropion, and Nicotine Replacement Therapy",
                "Varenicline (alpha-4 beta-2 nicotinic acetylcholine receptor partial agonist) achieves higher 6-month smoking cessation rates than bupropion or single-agent nicotine replacement therapy.",
                "Partial agonist activity provides moderate dopamine release to alleviate nicotine craving and withdrawal symptoms, while competitively blocking nicotine from binding to prevent relapse reinforcement."
            ),
            "HAAD / DHA": (
                "Workplace and clinical urine drug screen testing: Immunoassay screening and GC-MS confirmation",
                "Presumptive positive immunoassay drug screens require definitive confirmatory testing with gas chromatography-mass spectrometry (GC-MS) or LC-MS before adverse administrative or clinical action.",
                "Initial point-of-care immunoassays are prone to cross-reactivity and false positives (e.g., fluoroquinolones triggering false-positive opiate screens; sertraline triggering benzodiazepine screens)."
            ),
            "UHS MBBS": (
                "Clinical signs and management of neonatal abstinence syndrome (NAS / NOWS)",
                "High-pitched continuous cry, tremors, hyperreflexia, tachypnea, poor feeding, uncoordinated suck, and watery diarrhea in a neonate born to an opioid-dependent mother, managed with oral morphine.",
                "Using the Finnegan Neonatal Abstinence Scoring System guides initiation and weaning of oral morphine or methadone, combined with non-pharmacological swaddling and low-stimulation nursing."
            )
        }
    },

    # Domain 162: Transfusion Medicine & Immunohematology
    {
        "id": "domain_162_transfusion_medicine",
        "entity": "Acute transfusion reactions, TRALI versus TACO, and massive transfusion protocols",
        "hallmark": "fever, flank pain, hypotension, and dark urine within minutes of starting transfusion (AHTR); acute bilateral non-cardiogenic pulmonary edema with normal JVP (TRALI); or fluid overload with S3 gallop (TACO)",
        "system": "Hematology",
        "ref_key": "transfusion_med",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Immunological mechanism of Acute Hemolytic Transfusion Reaction (AHTR)",
                "Preformed recipient IgM or IgG anti-A or anti-B isohemagglutinins binding to donor red blood cell surface antigens, activating the classical complement pathway and triggering intravascular hemolysis.",
                "Complement activation yields anaphylatoxins C3a and C5a (triggering mast cell degranulation, hypotension, and shock) and the membrane attack complex (C5b-9), causing immediate intravascular lysis."
            ),
            "Step 2 CK": (
                "Clinical and hemodynamic distinction between TRALI and TACO",
                "TRALI presents with non-cardiogenic pulmonary edema, normal BNP, and hypotension within 6 hours; TACO presents with hydrostatic fluid overload, elevated BNP, hypertension, and S3 gallop.",
                "TACO is treated with immediate cessation of transfusion and IV furosemide diuresis; TRALI is an immune neutrophil-mediated alveolar capillary leak requiring supportive mechanical ventilation, not diuretics."
            ),
            "Step 3": (
                "Direct Antiglobulin Test (DAT / Coombs test) in autoimmune and alloimmune hemolytic anemia",
                "Demonstrating in vivo sensitization of erythrocytes using anti-human globulin antibodies to detect IgG or complement C3d bound directly to the patient's red blood cell membrane.",
                "A positive DAT identifies immune-mediated red cell destruction (warm AIHA, cold agglutinin disease, or acute/delayed hemolytic transfusion reaction); indirect Coombs detects unbound serum alloantibodies."
            ),
            "PLAB / UKMLA": (
                "Immediate emergency protocol for suspected acute transfusion reaction",
                "Immediately stop the blood transfusion, maintain intravenous access with normal saline, check vital signs, perform clerical bedside check, and return the blood unit and donor pack to the blood bank.",
                "Clerical administrative error (wrong blood administered to wrong patient) is the leading cause of fatal acute hemolytic transfusion reactions; early cessation limits the infused volume of incompatible RBCs."
            ),
            "AMC": (
                "Febrile non-hemolytic transfusion reaction (FNHTR): Leukoreduction and antipyretic therapy",
                "Fever rise >= 1.0 C within 1-2 hours of transfusion without hemolysis, caused by accumulated pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha) released from leukocytes during storage, prevented by pre-storage leukoreduction.",
                "Pre-storage filtration leukoreduction removes donor white blood cells prior to storage, virtually eliminating FNHTR and significantly decreasing HLA alloimmunization and cytomegalovirus transmission."
            ),
            "MCCQE": (
                "Transfusion-related metabolic complications in massive transfusion: Hypocalcemia and hypothermia",
                "Citrate preservative binding ionized calcium causing acute hypocalcemia (tetany, prolonged QT, hypotension) and hypomagnesemia, requiring proactive intravenous calcium chloride/gluconate replacement.",
                "Each unit of packed RBCs contains citrate that is normally metabolized by the liver; massive transfusion (> 10 units in 24 hours) overwhelms hepatic clearance, producing citrate toxicity and acidosis."
            ),
            "FCPS": (
                "Delayed hemolytic transfusion reaction (DHTR): Anamnestic response to minor RBC antigens",
                "Drop in hemoglobin, mild jaundice, and fever developing 5 to 14 days post-transfusion in a patient with previous transfusion or pregnancy, due to an anamnestic IgG response to Rh, Kell, Kidd, or Duffy antigens.",
                "Pre-transfusion antibody screen was negative because circulating antibody titers had waned below detection limits; re-exposure to the minor antigen triggers memory B cells to produce high-affinity IgG."
            ),
            "NLE": (
                "Universal blood donors and recipients for Red Blood Cells versus Plasma",
                "O-negative uncrossmatched packed red blood cells are the universal RBC donor in emergency resuscitation; AB-positive fresh frozen plasma is the universal plasma donor (lacking anti-A and anti-B antibodies).",
                "O-negative RBCs lack A, B, and RhD surface antigens, preventing isohemagglutinin-mediated destruction; AB plasma contains neither anti-A nor anti-B isohemagglutinins, making it safe for any ABO recipient."
            ),
            "NEET PG": (
                "Transfusion-Associated Graft-versus-Host Disease (TA-GvHD): Irradiation prevention",
                "Fatal attack by viable donor T-lymphocytes against recipient tissues in immunocompromised or HLA-shared related recipients, presenting with fever, rash, pancytopenia, and liver dysfunction.",
                "Marrow aplasia results in > 90% mortality; Gamma or X-ray irradiation (25-50 Gy) of cellular blood components crosslinks donor lymphocyte DNA, preventing proliferation and completely preventing TA-GvHD."
            ),
            "MRCP": (
                "Anaphylactic transfusion reaction in selective IgA deficiency",
                "Sudden respiratory distress, wheezing, angioedema, and cardiovascular collapse within seconds of starting transfusion in a recipient with selective IgA deficiency possessing anti-IgA antibodies.",
                "Recipient class-specific anti-IgA IgE or IgG antibodies react violently with trace amounts of donor IgA in normal plasma; subsequent transfusions require thoroughly washed red blood cells or IgA-deficient donor units."
            ),
            "MRCEM": (
                "Emergency Massive Transfusion Protocol (MTP) activation triggers and balanced 1:1:1 ratio",
                "Activating protocolized transfusion of Packed Red Blood Cells, Fresh Frozen Plasma, and Platelets in a 1:1:1 ratio alongside tranexamic acid within 3 hours for severe hemorrhagic shock.",
                "Balanced resuscitation replicates whole blood composition, preempting dilutional coagulopathy, thrombocytopenia, and hypofibrinogenemia, significantly reducing 24-hour mortality in bleeding trauma."
            ),
            "SMLE": (
                "Post-transfusion purpura (PTP): Human platelet antigen (HPA-1a) alloimmunization",
                "Profound sudden thrombocytopenia (< 10,000/uL) and severe purpura developing 7 to 10 days post-transfusion in an HPA-1a negative multiparous woman, treated with high-dose intravenous immunoglobulin.",
                "High-affinity alloantibodies directed against donor HPA-1a paradoxically cause immune-mediated destruction of both transfused donor platelets and the patient's own autologous HPA-1a negative platelets."
            ),
            "HAAD / DHA": (
                "Blood component storage temperatures, shelf life, and bacterial contamination risks",
                "Platelets stored at room temperature (20-24 C) with constant agitation for maximum 5-7 days carry the highest risk of bacterial contamination and septic transfusion reactions (Staphylococcus, Serratia).",
                "Room temperature storage permits rapid bacterial proliferation of skin flora introduced during phlebotomy; units with visible swirling loss or clumping must be quarantined and cultured."
            ),
            "UHS MBBS": (
                "ABO and Rh blood group antigen genetics and natural isohemagglutinin formation",
                "ABO antigens are carbohydrate oligosaccharide chains added by glycosyltransferases encoded on chromosome 9; naturally occurring IgM isohemagglutinins develop in infancy upon exposure to gut bacterial flora.",
                "Individuals lacking the A antigen produce anti-A antibodies naturally without prior blood transfusion; Rh (D) antigen is a protein, requiring prior alloimmunization (transfusion, pregnancy) to produce anti-D IgG."
            )
        }
    },

    # Domain 163: Anesthesia & Critical Airway Management
    {
        "id": "domain_163_anesthesia_airway",
        "entity": "Difficult airway algorithms, malignant hyperthermia, and local anesthetic systemic toxicity",
        "hallmark": "can't intubate can't oxygenate (CICO) scenario, masseter muscle rigidity and hypercapnia under volatile anesthesia, or severe postural fronto-occipital headache relieved by recumbency after dural puncture",
        "system": "General Principles",
        "ref_key": "anesthesia",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics and receptor pathophysiology of Malignant Hyperthermia",
                "Autosomal dominant gain-of-function mutation in the RYR1 gene encoding the skeletal muscle sarcoplasmic reticulum ryanodine receptor, triggered by volatile anesthetics or succinylcholine.",
                "Uncontrolled massive calcium efflux into the myoplasm drives hypermetabolism, sustained muscle rigidity, profound hypercapnia, severe lactic acidosis, rhabdomyolysis, and hyperthermia."
            ),
            "Step 2 CK": (
                "Acute clinical management of Malignant Hyperthermia crisis: Dantrolene protocol",
                "Immediate discontinuation of all volatile anesthetics, hyperventilating with 100% oxygen at high fresh gas flow, and administering intravenous dantrolene (2.5 mg/kg bolus repeated as needed).",
                "Dantrolene binds the ryanodine receptor (RYR1), blocking calcium release from the sarcoplasmic reticulum into the myoplasm, halting hypermetabolic heat production and muscle rigidity."
            ),
            "Step 3": (
                "Management of Post-Dural Puncture Headache (PDPH): Epidural blood patch",
                "Postural fronto-occipital throbbing headache worsening upright and relieved by lying flat following spinal anesthesia, treated with aggressive hydration, caffeine, and autologous epidural blood patch.",
                "Persistent leakage of CSF through the dural puncture exceeds production, causing intracranial hypotension and downward traction on pain-sensitive meninges; injecting 15-20 mL autologous blood seals the defect."
            ),
            "PLAB / UKMLA": (
                "Difficult Airway Society (DAS) guidelines: Can't Intubate, Can't Oxygenate (CICO) emergency",
                "Sequential progression through Plan A (facemask/video laryngoscopy), Plan B (supraglottic airway device / LMA), Plan C (facemask oxygenation), to Plan D: emergency scalpel-bougie-tube cricothyroidotomy.",
                "When bag-mask ventilation and supraglottic rescue fail in CICO, immediate emergency front-of-neck access (eFONA) using a horizontal scalpel stab, bougie insertion, and cuffed tube prevents hypoxic death."
            ),
            "AMC": (
                "Preoperative airway assessment: Mallampati score, thyromental distance, and Cormack-Lehane grading",
                "Mallampati class IV (soft palate and uvula completely obscured by tongue base) and thyromental distance < 6 cm (3 fingerbreadths) predicting difficult direct laryngoscopy.",
                "Cormack-Lehane classification grades the laryngoscopic view at intubation from Grade 1 (entire vocal cords visible) to Grade 4 (only soft palate visible, no epiglottis), guiding videolaryngoscopy use."
            ),
            "MCCQE": (
                "Rapid Sequence Induction and Intubation (RSII): Indications and neuromuscular blockade",
                "Pre-oxygenation with 100% O2, administration of a rapid IV induction agent followed immediately by a fast-acting paralytic (rocuronium or succinylcholine), avoiding bag-mask ventilation before intubation.",
                "Indicated in full stomach, bowel obstruction, severe GERD, or emergency trauma to minimize gastric regurgitation and fatal pulmonary aspiration before the cuffed endotracheal tube is secured."
            ),
            "FCPS": (
                "Pseudocholinesterase (butyrylcholinesterase) deficiency and prolonged succinylcholine apnea",
                "Failure to recover spontaneous ventilation for hours after succinylcholine or mivacurium due to atypical butyrylcholinesterase (BCHE gene mutation), managed with continued mechanical ventilation.",
                "Homozygous atypical variants cannot hydrolyze succinylcholine; recovery requires expectant mechanical ventilatory support and sedation until the drug slowly clears through non-specific esterases."
            ),
            "NLE": (
                "Clinical distinction between depolarizing and non-depolarizing neuromuscular blockers",
                "Succinylcholine (depolarizing blocker) produces visible muscle fasciculations followed by flaccid paralysis; rocuronium and vecuronium (non-depolarizing competitive antagonists) produce flaccid paralysis without fasciculations.",
                "Non-depolarizing blockade is reversed by acetylcholinesterase inhibitors (neostigmine with glycopyrrolate) or the selective cyclodextrin encapsulating agent sugammadex (for rocuronium)."
            ),
            "NEET PG": (
                "Sugammadex mechanism of action and selective reversal of aminosteroid neuromuscular blockers",
                "Modified gamma-cyclodextrin that encapsulates rocuronium and vecuronium in a 1:1 molecular complex in plasma, causing rapid dissociation from nicotinic receptors and rapid urinary excretion.",
                "Sugammadex achieves complete reversal of deep rocuronium-induced neuromuscular block within 2-3 minutes, completely bypassing the cholinergic side effects associated with neostigmine."
            ),
            "MRCP": (
                "Autonomic dysreflexia in spinal cord injury: Anesthetic and medical management",
                "Life-threatening paroxysmal hypertension, bradycardia, headache, and diaphoresis above the injury level triggered by noxious stimuli (bladder distension, fecal impaction) in cord lesions above T6.",
                "Loss of descending inhibitory sympathetic control allows unchecked splanchnic vasoconstriction; management requires sitting the patient upright, removing the trigger, and administering fast-acting nitrates."
            ),
            "MRCEM": (
                "Procedural sedation and analgesia (PSA) monitoring and reversal agents",
                "Continuous capnography (end-tidal CO2 monitoring) for early detection of hypoventilation, with bedside availability of naloxone (opioid reversal) and flumazenil (benzodiazepine reversal).",
                "Capnography detects hypoventilation, airway obstruction, and apnea up to 60-120 seconds before arterial desaturation appears on standard pulse oximetry, allowing prompt airway repositioning."
            ),
            "SMLE": (
                "Spinal versus epidural anesthesia: Anatomical layers traversed and landmark palpation",
                "Traversing skin, subcutaneous tissue, supraspinous ligament, interspinous ligament, ligamentum flavum, and dura-arachnoid maternal space (for spinal) or stopping at epidural space (loss of resistance).",
                "Palpating the Tuffier line (intercristal line connecting the top of the iliac crests) localizes the L4-L5 intervertebral space, well below the termination of the adult conus medullaris at L1-L2."
            ),
            "HAAD / DHA": (
                "Post-anesthesia care unit (PACU) discharge criteria: Modified Aldrete Scoring System",
                "Evaluating 5 physiological domains: motor activity, respiration, circulation (BP within 20% of baseline), consciousness, and oxygen saturation, requiring a composite score >= 9/10 for safe ward discharge.",
                "Standardized scoring ensures patient recovery from general anesthesia and neuromuscular blockade, preventing unmonitored post-discharge respiratory depression and hypoxic events on the surgical ward."
            ),
            "UHS MBBS": (
                "American Society of Anesthesiologists (ASA) Physical Status Classification System",
                "ASA I (normal healthy patient), ASA II (mild systemic disease without functional limitation), ASA III (severe systemic disease with functional limitation), ASA IV (constant threat to life), ASA V (moribund).",
                "The addition of 'E' designates emergency surgery; ASA physical status strongly correlates with perioperative morbidity, intensive care admission requirements, and 30-day surgical mortality."
            )
        }
    }
]
