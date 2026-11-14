"""
Mega Data Part H: Domains 45 to 50 (Psychiatry, Dermatology & Clinical Toxicology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_H = [
    # Domain 45: Major Depressive Disorder & Acute Suicidality
    {
        "id": "domain_45_depression_suicide",
        "entity": "major depressive disorder and acute suicidality",
        "hallmark": "pervasive depressed mood for four weeks, profound anhedonia, early morning awakening, psychomotor retardation, and active suicidal ideation with a lethal plan",
        "system": "Behavioral Health",
        "ref_key": "nice_depression",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Pathology",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Monoamine hypothesis and serotonin/norepinephrine transporter inhibition",
                "Selective serotonin reuptake inhibitors (SSRIs) blocking the presynaptic serotonin transporter (SERT / SLC6A4), increasing synaptic cleft 5-HT and downregulating somatodendritic 5-HT1A autoreceptors.",
                "SSRIs selectively block SERT, initially increasing synaptic serotonin; therapeutic delay of 2-4 weeks reflects time required for 5-HT1A autoreceptor desensitization and downstream BDNF upregulation."
            ),
            "Step 2 CK": (
                "Comprehensive suicide risk assessment and immediate safety protocols",
                "Assessing suicidal intent, explicit plan, access to lethal means, and history of attempts; immediate constant observation and psychiatric inpatient admission (involuntary if uncooperative).",
                "When a patient has active suicidal ideation with intent and a specific plan, immediate hospitalization with 1-to-1 constant observation is mandatory to guarantee physical safety."
            ),
            "Step 3": (
                "Electroconvulsive therapy (ECT) indications and maintenance antidepressant duration",
                "Emergency indications for ECT: psychotic depression, severe treatment resistance, acute refusal of food/water, or high immediate suicide risk; continuing pharmacotherapy for >= 6-12 months.",
                "ECT provides rapid, life-saving remission in catatonic or psychotic depression with severe suicidality; following initial episode remission, antidepressants are continued for at least 6-9 months."
            ),
            "PLAB / UKMLA": (
                "NICE stepped-care model and Mental Health Act assessment",
                "Application of the Mental Health Act (Section 2 or 3) for compulsory admission when a severely depressed patient poses an acute risk to themselves, and starting an SSRI (sertraline).",
                "NICE guidelines prioritize sertraline or citalopram as first-line pharmacotherapy; acute risk of self-harm warrants urgent crisis team assessment and formal Mental Health Act detention."
            ),
            "AMC": (
                "Postpartum depression versus postpartum blues and postpartum psychosis",
                "Postpartum psychosis occurring in the first 2-4 weeks with delusions, hallucinations, and infanticide risk, requiring emergency psychiatric admission and separation protection.",
                "Australian guidelines differentiate benign postpartum blues (resolving within 10-14 days) from severe postpartum depression or psychosis, which carries emergency mother-infant safety risks."
            ),
            "MCCQE": (
                "Medical mimickers of depression and routine baseline investigations",
                "Screening with serum TSH, complete blood count, and vitamin B12 levels to rule out hypothyroidism and metabolic causes before initiating antidepressant therapy.",
                "Canadian medical objectives mandate screening for organic etiologies (especially hypothyroidism, hypercalcemia, and occult malignancy) before finalizing a primary psychiatric diagnosis."
            ),
            "FCPS": (
                "Pharmacological management of treatment-resistant depression",
                "Augmentation with atypical antipsychotics (aripiprazole, quetiapine), lithium carbonate, or triiodothyronine (T3) after failure of two adequate trials of first-line antidepressants.",
                "In post-graduate psychiatric practice, treatment-resistant depression is defined as failure of two distinct antidepressant classes at adequate doses for 6-8 weeks, requiring augmentation strategies."
            ),
            "NLE": (
                "Diagnostic criteria for Major Depressive Episode (SIGECAPS mnemonic)",
                "Presence of at least 5 of 9 symptoms (Sleep disturbance, Interest loss, Guilt, Energy loss, Concentration impairment, Appetite change, Psychomotor agitation/retardation, Suicidality) for >= 2 weeks.",
                "National licensing curricula test DSM-5 criteria: at least 5 of 9 SIGECAPS symptoms present for at least two consecutive weeks, with at least one symptom being depressed mood or anhedonia."
            ),
            "NEET PG": (
                "Antidepressant side effects and receptor binding profiles",
                "Bupropion contraindicated in patients with anorexia/bulimia or seizure disorders due to lowering of the seizure threshold through dopamine/norepinephrine reuptake inhibition.",
                "NEET PG pharmacology emphasizes that bupropion carries minimal sexual dysfunction risk compared to SSRIs, but is strictly contraindicated in eating disorders due to seizure induction."
            ),
            "MRCP": (
                "Serotonin syndrome diagnostic criteria (Hunter criteria) and treatment",
                "Clonus (spontaneous, inducible, or ocular), agitation, diaphoresis, tremor, and hyperthermia in patients taking serotonergic agents, treated with cyproheptadine and cooling.",
                "MRCP clinical scenarios test serotonin syndrome: hyperreflexia and clonus distinguish it from neuroleptic malignant syndrome; cyproheptadine (5-HT2A antagonist) is the specific antidote."
            ),
            "MRCEM": (
                "Emergency management of acute deliberate self-poisoning with antidepressants",
                "Immediate ECG monitoring for QRS widening (> 100 ms) and prominent terminal R wave in aVR in tricyclic antidepressant overdose, treated promptly with IV sodium bicarbonate.",
                "In emergency care of TCA overdose, intravenous sodium bicarbonate alkalinizes serum (pH 7.45-7.55), outcompeting TCA binding to myocardial fast sodium channels and preventing fatal ventricular arrhythmias."
            ),
            "SMLE": (
                "Stigma reduction and community-based mental health integration",
                "Patient-centered psychoeducation, engaging family support systems within cultural values, and providing crisis hotline access (e.g., National Center for Mental Health).",
                "Saudi healthcare guidelines emphasize integrated primary care mental health clinics to de-stigmatize mood disorders and facilitate confidential psychiatric evaluation."
            ),
            "HAAD / DHA": (
                "Screening for depression in chronic disease clinics (PHQ-9 screening)",
                "Routine administration of the Patient Health Questionnaire-9 (PHQ-9) in diabetic and cardiovascular outpatient clinics, initiating collaborative care for scores >= 10.",
                "UAE health standards enforce routine PHQ-9 depression screening in primary care and chronic non-communicable disease management to optimize holistic clinical outcomes."
            ),
            "UHS MBBS": (
                "Neurobiology and structural brain alterations in chronic depression",
                "Decreased hippocampal volume, reduced prefrontal cortical activity, and dysregulation of the hypothalamic-pituitary-adrenal (HPA) axis with elevated cortisol levels.",
                "Undergraduate behavioral sciences and pathology link chronic major depression with hippocampal dendritic atrophy and elevated serum glucocorticoids causing neurotoxicity."
            )
        }
    },

    # Domain 46: Psychotic Disorders & Neuroleptic Malignant Syndrome
    {
        "id": "domain_46_psychosis_nms",
        "entity": "schizophrenia and neuroleptic malignant syndrome",
        "hallmark": "auditory command hallucinations, persecutory delusions, extreme 'lead-pipe' muscle rigidity, hyperthermia 40.1 C, and serum creatine kinase 28,000 U/L",
        "system": "Behavioral Health",
        "ref_key": "nice_psychosis",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Pathology",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Dopaminergic pathways and mechanism of typical versus atypical antipsychotics",
                "Antipsychotic blockade of dopamine D2 receptors in the mesolimbic pathway reducing positive symptoms, while D2 blockade in the nigrostriatal pathway causes extrapyramidal symptoms.",
                "First-generation typical antipsychotics (e.g., haloperidol) have high D2 receptor affinity, causing EPS; second-generation atypicals (e.g., olanzapine, risperidone) also block 5-HT2A receptors."
            ),
            "Step 2 CK": (
                "Diagnosis and emergency management of Neuroleptic Malignant Syndrome (NMS)",
                "Immediate discontinuation of the offending neuroleptic, aggressive cooling, intravenous hydration, and administration of dantrolene or bromocriptine in the ICU.",
                "NMS is a life-threatening idiosyncratic reaction to dopamine antagonists featuring hyperthermia, lead-pipe rigidity, autonomic instability, and massive CK elevation from rhabdomyolysis."
            ),
            "Step 3": (
                "Clozapine monitoring for agranulocytosis and metabolic surveillance",
                "Mandatory weekly absolute neutrophil count (ANC) monitoring for the first 6 months, interrupting therapy if ANC falls below 1,000/mcL (or 500/mcL in benign ethnic neutropenia).",
                "Clozapine is the most effective antipsychotic for treatment-resistant schizophrenia, but requires strict registry-based ANC monitoring due to its 1-2% risk of fatal agranulocytosis."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for first-episode psychosis and early intervention services",
                "Urgent referral to an early intervention in psychosis service within 2 weeks, comprehensive metabolic baseline assessment, and starting oral atypical antipsychotic therapy.",
                "NICE clinical guideline CG178 mandates rapid referral to specialized early intervention teams and baseline monitoring of weight, lipids, and HbA1c prior to initiating antipsychotics."
            ),
            "AMC": (
                "Extrapyramidal symptom management (acute dystonia versus akathisia versus tardive dyskinesia)",
                "Acute dystonia treated with intramuscular benztropine or diphenhydramine; akathisia managed with propranolol or dose reduction; tardive dyskinesia treated with VMAT2 inhibitors.",
                "Australian guidelines detail EPS treatment: anticholinergics rapidly reverse painful oculogyric crisis and torticollis (dystonia); VMAT2 inhibitors (valbenazine) treat irreversible choreiform movements."
            ),
            "MCCQE": (
                "Substance-induced psychosis versus primary psychiatric disorder differentiation",
                "Comprehensive urine toxicology screen (ruling out methamphetamine, cocaine, PCP, cannabis) and assessing symptom persistence during a 1-month period of confirmed sobriety.",
                "Canadian medical objectives emphasize that substance-induced psychotic disorders must be excluded; psychosis that resolves within days of negative drug screening is secondary."
            ),
            "FCPS": (
                "Catatonia diagnostic evaluation (Bush-Francis scale) and lorazepam challenge test",
                "Identification of mutism, waxy flexibility, catalepsy, and negativism, confirmed by dramatic temporary clinical improvement following intravenous lorazepam (1-2 mg).",
                "In catatonia, positive response to the lorazepam challenge confirms diagnosis; refractory cases or malignant catatonia (with autonomic instability) require urgent bilateral ECT."
            ),
            "NLE": (
                "Positive versus negative symptoms of schizophrenia and prognosis",
                "Positive symptoms (delusions, hallucinations, disorganized thought) responding well to antipsychotics; negative symptoms (apathy, avolition, alogia, affective flattening) predicting poorer long-term outcome.",
                "National licensing curricula test schizophrenia symptom domains: positive symptoms reflect mesolimbic dopamine excess; negative symptoms correlate with prefrontal dopamine deficit."
            ),
            "NEET PG": (
                "Hyperprolactinemia mechanism and adverse endocrine effects of risperidone",
                "Tuberoinfundibular dopamine D2 blockade disinhibiting pituitary prolactin secretion, leading to galactorrhea, amenorrhea, gynecomastia, and long-term osteoporosis.",
                "NEET PG pharmacology emphasizes that risperidone has the highest propensity among second-generation antipsychotics to cause hyperprolactinemia due to potent D2 antagonism."
            ),
            "MRCP": (
                "Antipsychotic-induced metabolic syndrome and second-generation differences",
                "Olanzapine and clozapine carrying the highest risk of weight gain, hypertriglyceridemia, and new-onset type 2 diabetes mellitus, requiring serial lipid and glucose monitoring.",
                "MRCP clinical medicine focuses on metabolic morbidity: aripiprazole and ziprasidone are metabolically neutral, whereas olanzapine causes profound weight gain and insulin resistance."
            ),
            "MRCEM": (
                "Emergency management of acute behavioral disturbance and psychiatric sedation",
                "De-escalation techniques first-line, followed by rapid tranquilization with oral or intramuscular lorazepam plus haloperidol (or olanzapine) with continuous pulse oximetry monitoring.",
                "Emergency resuscitation in acute severe psychomotor agitation prioritizes physical safety while avoiding respiratory depression; co-administration of an anticholinergic prevents acute dystonia."
            ),
            "SMLE": (
                "Cultural formulations in psychotic symptoms and clinical differentiation",
                "Careful evaluation of culturally congruent beliefs (e.g., Evil Eye, Jinn possession) to distinguish cultural idioms of distress from true non-bizarre and bizarre psychotic delusions.",
                "Saudi psychiatric practice emphasizes applying the DSM-5 Cultural Formulation Interview to ensure normative religious and cultural experiences are not misdiagnosed as psychotic pathology."
            ),
            "HAAD / DHA": (
                "Long-acting injectable (depot) antipsychotics in non-adherent schizophrenia",
                "Initiating long-acting injectable risperidone, paliperidone palmitate, or aripiprazole monohydrate after establishing tolerability with oral formulations to prevent relapse.",
                "UAE psychiatric guidelines recommend early consideration of long-acting injectable antipsychotics in patients with frequent hospital readmissions driven by poor medication adherence."
            ),
            "UHS MBBS": (
                "Neuropathology of schizophrenia (ventricular enlargement and cortical thinning)",
                "Bilateral lateral and third ventricular enlargement with loss of cortical gray matter, reduced dendritic spine density, and absence of prominent gliosis.",
                "Undergraduate pathology highlights that neuroimaging and post-mortem brains of chronic schizophrenia show ventricular enlargement without gliosis, suggesting a neurodevelopmental disorder."
            )
        }
    },

    # Domain 47: Anxiety, Panic Disorder & PTSD
    {
        "id": "domain_47_anxiety_ptsd",
        "entity": "panic disorder and post-traumatic stress disorder",
        "hallmark": "recurrent unexpected panic attacks, anticipatory anxiety, agoraphobic avoidance, intrusive flashbacks of a near-fatal event, hypervigilance, and insomnia",
        "system": "Behavioral Health",
        "ref_key": "nice_depression",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Pathology",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Amygdala hyperreactivity and prefrontal cortical hypoactivity in anxiety circuitry",
                "Hyperactive basolateral amygdala circuits driving fear conditioning and locus coeruleus norepinephrine release, with impaired top-down inhibitory control from the medial prefrontal cortex.",
                "Pathophysiology of panic and PTSD involves exaggerated central sympathetic outflow mediated by the locus coeruleus and hyperactive amygdala signaling without adequate ventromedial prefrontal inhibition."
            ),
            "Step 2 CK": (
                "First-line pharmacotherapy and cognitive-behavioral therapy for panic disorder",
                "Combination of cognitive-behavioral therapy (CBT) and first-line SSRIs (sertraline, paroxetine) or SNRIs (venlafaxine), avoiding routine long-term benzodiazepine monotherapy.",
                "Guidelines recommend SSRIs as first-line maintenance therapy for panic disorder; short-term benzodiazepines should be tapered within 2-4 weeks due to tolerance, dependence, and rebound anxiety."
            ),
            "Step 3": (
                "Trauma-focused psychotherapy and prazosin for PTSD nightmares",
                "Trauma-focused cognitive behavioral therapy or Eye Movement Desensitization and Reprocessing (EMDR), combined with the alpha-1 adrenergic antagonist prazosin for trauma-related nightmares.",
                "Evidence-based guidelines prioritize trauma-focused psychotherapy for PTSD; prazosin crosses the blood-brain barrier to inhibit hyperactive central noradrenergic signaling, suppressing nightmares."
            ),
            "PLAB / UKMLA": (
                "NICE stepped-care approach for generalized anxiety disorder (GAD)",
                "Stepped care: psychoeducation and low-intensity psychological interventions first, escalating to high-intensity CBT or SSRI (sertraline) if symptoms persist.",
                "NICE guideline CG113 specifies sertraline as the most cost-effective first-line pharmacological treatment for generalized anxiety disorder in primary care."
            ),
            "AMC": (
                "Acute Stress Disorder versus Post-Traumatic Stress Disorder timeline criteria",
                "Acute Stress Disorder diagnosed when trauma symptoms last between 3 days and 1 month; symptoms persisting beyond 1 month fulfilling criteria for PTSD.",
                "Australian mental health guidelines emphasize the temporal distinction: trauma symptoms occurring within the first 30 days are classified as Acute Stress Disorder and managed with supportive trauma-focused CBT."
            ),
            "MCCQE": (
                "Emergency exclusion of medical mimics of panic attacks (pheochromocytoma, arrhythmia, PE)",
                "Performing 12-lead ECG, pulse oximetry, and assessing for paroxysmal headache, sweating, and tachycardia to rule out cardiac arrhythmias and pheochromocytoma before diagnosing panic disorder.",
                "Canadian medical objectives mandate ruling out life-threatening somatic mimics (pulmonary embolism, acute coronary syndrome, thyrotoxicosis) in patients presenting with acute severe panic attacks."
            ),
            "FCPS": (
                "Obsessive-Compulsive Disorder (OCD) high-dose SSRI therapy and exposure-response prevention",
                "High-dose SSRI therapy (e.g., fluoxetine 80 mg daily, sertraline 200 mg) combined with exposure and response prevention (ERP) behavioral therapy.",
                "In post-graduate psychiatry, OCD requires significantly higher doses of SSRIs than major depression, with therapeutic onset typically delayed until 10 to 12 weeks of treatment."
            ),
            "NLE": (
                "Agoraphobia diagnostic criteria and clinical association with panic disorder",
                "Marked fear or anxiety about two or more situations (public transit, open spaces, enclosed places, lines/crowds, outside of home alone) due to fear of escape difficulty.",
                "National licensing curricula test agoraphobia: often triggered by panic attacks where patients fear having an attack in situations where escape or immediate help might be unavailable."
            ),
            "NEET PG": (
                "Buspirone pharmacology and lack of sedative/addictive properties",
                "Buspirone acting as a partial agonist at 5-HT1A receptors used for generalized anxiety disorder, with no affinity for GABA-A receptors and zero potential for addiction or motor impairment.",
                "NEET PG pharmacology emphasizes that buspirone takes 2-4 weeks to achieve therapeutic anxiety reduction, but does not cause sedation, physical dependence, or cognitive impairment."
            ),
            "MRCP": (
                "Social Anxiety Disorder (Social Phobia) and performance-only beta-blockade",
                "Propranolol administered 30 to 60 minutes prior to a public speaking event to control peripheral adrenergic manifestations (palpitations, tremor, flushing) in performance-only social anxiety.",
                "MRCP clinical scenarios test situational social anxiety: beta-blockers suppress peripheral autonomic symptoms (tachycardia, tremor) without affecting cognitive processing or causing sedation."
            ),
            "MRCEM": (
                "Emergency department hyperventilation syndrome and respiratory alkalosis",
                "Paresthesias, carpopedal spasm (Trousseau sign), lightheadedness, and low PaCO2 with elevated arterial pH caused by psychogenic hyperventilation; avoid paper bag rebreathing.",
                "Emergency resuscitation protocols caution against paper bag breathing due to risk of fatal hypoxia; reassurance, coach-breathing techniques, and ruling out pulmonary embolism are mandatory."
            ),
            "SMLE": (
                "Somatic symptom disorder and illness anxiety disorder management",
                "Scheduling regular, brief scheduled outpatient follow-up visits with a single primary care physician to minimize unnecessary diagnostic testing and reinforce coping mechanisms.",
                "Saudi clinical guidelines emphasize establishing an empathic therapeutic alliance with fixed follow-up appointments to manage health anxiety without reinforcing somatic preoccupation."
            ),
            "HAAD / DHA": (
                "Occupational post-traumatic stress in frontline healthcare and emergency workers",
                "Implementing structured psychological debriefing, peer support networks, and trauma-informed cognitive therapy following critical occupational traumatic incidents.",
                "UAE occupational health regulations mandate psychological surveillance and access to confidential trauma counseling for emergency medical and first-responder personnel."
            ),
            "UHS MBBS": (
                "Neurochemical transmission in the autonomic nervous system during acute fear response",
                "Hypothalamic corticotropin-releasing hormone (CRH) activating the sympathetic-adrenal-medullary axis, inducing adrenal medullary epinephrine and norepinephrine release.",
                "Undergraduate physiology details the 'fight-or-flight' physiological cascade: massive catecholamine release increases heart rate, dilates bronchial passages, and shifts blood to skeletal muscle."
            )
        }
    },

    # Domain 48: Severe Cutaneous Adverse Reactions (SJS & TEN)
    {
        "id": "domain_48_sjs_ten",
        "entity": "Stevens-Johnson syndrome and toxic epidermal necrolysis",
        "hallmark": "targetoid erythematous macules, flaccid bullae, positive Nikolsky sign with sheets of epidermal sloughing, and painful mucosal ulcerations involving lips and eyes",
        "system": "Dermatology",
        "ref_key": "bad_derm",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Dermatology"
        },
        "concepts": {
            "Step 1": (
                "Granulysin-mediated keratinocyte apoptosis and HLA associations",
                "Cytotoxic T lymphocytes (CD8+) and natural killer cells releasing granulysin, perforin, and granzyme B, triggering widespread apoptosis of epidermal basal keratinocytes.",
                "SCAR reactions involve drug-antigen presentation on specific HLA alleles (e.g., HLA-B*1502 with carbamazepine, HLA-B*5801 with allopurinol), activating cytotoxic T cells to release granulysin."
            ),
            "Step 2 CK": (
                "SCORTEN prognostic scoring and emergency burn unit transfer",
                "Calculating SCORTEN score within 24 hours to estimate mortality risk and transferring patient immediately to an accredited specialized burn center or intensive care unit.",
                "SCORTEN evaluates 7 clinical variables (age >= 40, heart rate >= 120, cancer, %TBSA > 10%, BUN > 28, glucose > 250, bicarbonate < 20); higher scores predict elevated mortality."
            ),
            "Step 3": (
                "Immediate discontinuation of causative medication and supportive wound care",
                "Immediate withdrawal of all potential offending medications (allopurinol, antiepileptics, sulfonamides, NSAIDs), non-adherent silicone dressing, and ophthalmology consultation.",
                "Early withdrawal of the causative drug with short half-life significantly reduces mortality; urgent ophthalmology evaluation is essential to prevent permanent cicatricial blindness."
            ),
            "PLAB / UKMLA": (
                "Distinguishing SJS from TEN based on body surface area detachment",
                "Stevens-Johnson syndrome involving < 10% TBSA epidermal detachment; SJS/TEN overlap involving 10-30% TBSA; Toxic Epidermal Necrolysis involving > 30% TBSA.",
                "UK dermatological guidelines classify the spectrum strictly by epidermal detachment area: SJS (< 10%), overlap (10-30%), and TEN (> 30%), each managed with urgent barrier nursing."
            ),
            "AMC": (
                "Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS syndrome) comparison",
                "Triad of widespread morbilliform rash, facial edema, fever, marked peripheral eosinophilia, and internal organ involvement (hepatitis, nephritis, myocarditis).",
                "Australian guidelines differentiate SJS/TEN (keratinocyte necrosis and blistering) from DRESS syndrome (diffuse morbilliform eruption with visceral organ involvement and latent onset of 2-8 weeks)."
            ),
            "MCCQE": (
                "Ocular complications of SJS/TEN and prevention of synechiae formation",
                "Daily examination with fluorescein staining, frequent preservative-free ocular lubricants, topical corticosteroids, and amniotic membrane grafting to prevent symblepharon.",
                "Canadian medical objectives emphasize that acute ocular mucosal sloughing can lead to symblepharon, keratitis, and blindness, requiring daily ophthalmologic debridement."
            ),
            "FCPS": (
                "Role of high-dose intravenous immunoglobulin (IVIG) and cyclosporine in TEN",
                "Administration of high-dose IVIG (2-3 g/kg total) or cyclosporine to block Fas-Fas ligand-mediated apoptosis, initiated in the early dynamic spreading phase.",
                "In surgical and dermatological intensive care, cyclosporine and IVIG inhibit T-cell activation and block Fas-mediated keratinocyte apoptosis, halting epidermal necrolysis."
            ),
            "NLE": (
                "High-risk medications triggering severe cutaneous adverse reactions",
                "The classic triggering medications: Allopurinol, Carbamazepine, Phenytoin, Lamotrigine, Sulfamethoxazole-trimethoprim, and oxicam Non-Steroidal Anti-Inflammatory Drugs.",
                "National licensing curricula test causative drug classes: anticonvulsants, allopurinol, sulfonamide antimicrobials, and certain NSAIDs account for over 80% of SJS/TEN cases."
            ),
            "NEET PG": (
                "Nikolsky sign and Asboe-Hansen sign mechanism and significance",
                "Positive Nikolsky sign (dislodgement of full-thickness epidermis by lateral shearing pressure) and Asboe-Hansen sign (lateral extension of a blister upon vertical pressure).",
                "NEET PG dermatology tests Nikolsky sign: positive in SJS/TEN, Pemphigus vulgaris, and Staphylococcal Scalded Skin Syndrome, indicating epidermal loss of cohesion."
            ),
            "MRCP": (
                "Staphylococcal Scalded Skin Syndrome (SSSS) versus TEN differentiation",
                "SSSS caused by exfoliative toxins A and B cleavage of desmoglein 1 in the subcorneal stratum granulosum, sparing mucosal surfaces, occurring predominantly in young children.",
                "MRCP clinical dermatology emphasizes that SSSS splits intraepidermally (stratum granulosum) sparing mucous membranes, whereas TEN causes full-thickness epidermal necrosis with mucosal involvement."
            ),
            "MRCEM": (
                "Emergency fluid resuscitation and fluid management in extensive TEN",
                "Infusing warm balanced crystalloid solutions at approximately 2-3 mL/kg/%TBSA burned/detached over 24 hours, carefully monitoring for fluid overload and hypothermia.",
                "Unlike deep thermal burns, fluid requirements in TEN are lower (approx. two-thirds of Parkland formula) because dermal capillaries remain partially intact; gentle handling prevents shearing."
            ),
            "SMLE": (
                "Pharmacogenetic screening for HLA-B*1502 and HLA-B*5801 prior to drug initiation",
                "Screening for HLA-B*5801 before starting allopurinol and HLA-B*1502 before starting carbamazepine in at-risk genetic populations to prevent life-threatening SCAR.",
                "Saudi clinical pharmacology guidelines recommend pharmacogenetic screening to identify high-risk alleles, substituting alternative therapies (e.g., febuxostat, levetiracetam)."
            ),
            "HAAD / DHA": (
                "Infection control and barrier nursing in extensive epidermal denudation",
                "Strict reverse protective isolation in a temperature-controlled private room, avoiding routine prophylactic systemic antibiotics, and performing regular surveillance wound cultures.",
                "UAE health standards mandate that patients with extensive skin detachment be nursed under strict aseptic isolation, treating infections only upon documented clinical/microbiological evidence."
            ),
            "UHS MBBS": (
                "Histopathology of toxic epidermal necrolysis and frozen section diagnosis",
                "Full-thickness epidermal coagulative necrosis with subepidermal separation, extensive basal layer vacuolization, and sparse dermal lymphocytic infiltrate.",
                "Undergraduate pathology identifies the hallmark of TEN on skin biopsy: complete apoptotic necrosis of all epidermal cell layers creating a subepidermal split."
            )
        }
    },

    # Domain 49: Autoimmune Blistering Dermatoses
    {
        "id": "domain_49_blistering_diseases",
        "entity": "pemphigus vulgaris and bullous pemphigoid",
        "hallmark": "fragile, easily ruptured flaccid bullae leaving painful weeping erosions, extensive oral mucosal involvement, and positive Nikolsky sign",
        "system": "Dermatology",
        "ref_key": "bad_derm",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Dermatology"
        },
        "concepts": {
            "Step 1": (
                "Desmoglein 3 autoantibodies versus hemidesmosomal BP180/BP230 autoantibodies",
                "Pemphigus vulgaris driven by IgG autoantibodies against desmoglein 3 (and 1) disrupting desmosomes (acantholysis); Bullous pemphigoid driven by IgG against hemidesmosomal BP180/BP230.",
                "In Pemphigus vulgaris, anti-desmoglein 3 IgG causes suprabasal intraepidermal acantholysis; in Bullous pemphigoid, anti-BP180 IgG attacks hemidesmosomes, causing subepidermal tense blisters."
            ),
            "Step 2 CK": (
                "Direct immunofluorescence patterns and initial systemic corticosteroid therapy",
                "Pemphigus vulgaris showing intercellular 'net-like' or 'chicken-wire' IgG staining throughout the epidermis; treated initially with high-dose oral prednisone and rituximab.",
                "First-line therapy for moderate-to-severe Pemphigus vulgaris combines systemic corticosteroids with rituximab (anti-CD20 monoclonal antibody) to achieve rapid remission and steroid sparing."
            ),
            "Step 3": (
                "Steroid-sparing immunosuppressive maintenance and osteoporosis prophylaxis",
                "Maintenance therapy with mycophenolate mofetil or azathioprine, co-prescribing calcium, vitamin D, and bisphosphonates to mitigate long-term corticosteroid toxicity.",
                "Chronic management of autoimmune blistering disorders requires transition to steroid-sparing agents (mycophenolate mofetil, azathioprine) alongside bone density preservation protocols."
            ),
            "PLAB / UKMLA": (
                "Bullous pemphigoid clinical presentation in elderly patients and topical clobetasol",
                "Tense, subepidermal bullae on an erythematous base in an elderly patient, negative Nikolsky sign, rare mucosal involvement, treated effectively with high-potency topical clobetasol propionate.",
                "UK dermatological guidelines recommend high-potency topical corticosteroids (clobetasol cream 20-30 g/day) as first-line therapy for bullous pemphigoid, which is as effective as oral steroids with lower mortality."
            ),
            "AMC": (
                "Dermatitis herpetiformis association with celiac disease and dapsone therapy",
                "Intensely pruritic grouped vesicular eruptions on extensor surfaces (elbows, knees, buttocks), granular IgA deposition in dermal papillae, responding to gluten-free diet and dapsone.",
                "Australian guidelines highlight dermatitis herpetiformis as the cutaneous manifestation of celiac disease; dapsone rapidly relieves pruritus, while strict gluten-free diet cures the underlying condition."
            ),
            "MCCQE": (
                "Distinguishing clinical features of flaccid versus tense bullous eruptions",
                "Flaccid blisters (Pemphigus vulgaris) rupture rapidly leaving painful erosions; tense blisters (Bullous pemphigoid) remain intact for days because the full epidermal roof is preserved.",
                "Canadian medical objectives emphasize physical inspection of bullae: tense blisters indicate a deep subepidermal split, whereas flaccid blisters indicate superficial intraepidermal cleavage."
            ),
            "FCPS": (
                "Rituximab protocol in refractory pemphigus vulgaris",
                "Intravenous rituximab (1,000 mg on days 1 and 15, or 375 mg/m2 weekly for 4 weeks) targeting CD20 B-lymphocytes to eliminate circulating anti-desmoglein autoantibodies.",
                "Rituximab is now recommended as first-line therapy alongside corticosteroids for moderate-to-severe pemphigus vulgaris, providing complete clinical remission in over 80% of patients."
            ),
            "NLE": (
                "Tombstone appearance on histopathology of Pemphigus vulgaris",
                "Intraepidermal suprabasal acantholytic blister with a single layer of intact basal keratinocytes adhering to the basement membrane resembling a 'row of tombstones'.",
                "National licensing curricula test classic histopathology: the 'row of tombstones' sign occurs because basal keratinocytes remain anchored via hemidesmosomes while suprabasal cells detach."
            ),
            "NEET PG": (
                "Direct immunofluorescence linear basement membrane pattern in Bullous pemphigoid",
                "Continuous, smooth linear deposition of IgG and C3 along the dermo-epidermal junction (basement membrane zone) on direct immunofluorescence microscopy.",
                "NEET PG dermatology questions contrast DIF patterns: linear continuous basement membrane fluorescence indicates Bullous pemphigoid; fishnet/chicken-wire pattern indicates Pemphigus."
            ),
            "MRCP": (
                "Paraneoplastic pemphigus and occult lymphoproliferative neoplasms",
                "Intractable painful polymorphous stomatitis, multiorgan involvement, and lichenoid cutaneous lesions associated with Castleman disease, non-Hodgkin lymphoma, or chronic lymphocytic leukemia.",
                "MRCP clinical scenarios test paraneoplastic pemphigus: autoantibodies target plakins (envoplakin, periplakin) in addition to desmogleins, requiring imaging to identify occult hematologic malignancy."
            ),
            "MRCEM": (
                "Emergency management of secondary bacteremia and skin failure in pemphigus",
                "Immediate recognition of secondary skin failure, fluid and electrolyte replacement, barrier nursing, and empiric IV antibiotics for suspected Staphylococcus aureus sepsis.",
                "Severe extensive pemphigus behaves like a partial-thickness burn; secondary cutaneous infection leading to staphylococcal or pseudomonal bacteremia is the leading cause of mortality."
            ),
            "SMLE": (
                "Pre-immunosuppressive screening for hepatitis B and latent tuberculosis",
                "Screening with HBsAg, anti-HBc, and QuantiFERON-TB prior to initiating high-dose corticosteroids, rituximab, or azathioprine, providing antiviral prophylaxis if indicated.",
                "Saudi clinical practice guidelines require screening for latent tuberculosis and hepatitis B reactivation prior to initiating biological and high-dose immunosuppressive therapy."
            ),
            "HAAD / DHA": (
                "Thiopurine methyltransferase (TPMT) testing prior to azathioprine initiation",
                "Measuring baseline TPMT enzyme activity or genotype to identify patients at risk of fatal bone marrow suppression before prescribing azathioprine.",
                "UAE health authority standards mandate baseline TPMT evaluation; intermediate or low enzyme activity mandates dose reduction or selecting an alternative steroid-sparing agent."
            ),
            "UHS MBBS": (
                "Tzanck smear cytology in Pemphigus vulgaris and herpes simplex",
                "Tzanck smear scraping of the blister base showing rounded, detached acantholytic keratinocytes (Tzanck cells) with prominent hyperchromatic nuclei.",
                "Undergraduate pathology and dermatology test the bedside Tzanck smear: rounded free acantholytic cells are seen in pemphigus; multinucleated giant cells indicate herpesvirus."
            )
        }
    },

    # Domain 50: Clinical Toxicology & Poisoning Syndromes
    {
        "id": "domain_50_toxicology_poisoning",
        "entity": "acute poisoning and toxidromes (cholinergic, anticholinergic, and acetaminophen)",
        "hallmark": "profuse salivation, lacrimation, urinary incontinence, diarrhea, severe bradycardia, pinpoint pupils, and diffuse pulmonary wheezing and bronchorrhea",
        "system": "General Principles",
        "ref_key": "toxicology",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Acetylcholinesterase inhibition by organophosphates and aging of the enzyme",
                "Irreversible covalent phosphorylation of the esteratic site of acetylcholinesterase, leading to massive synaptic acetylcholine accumulation and progressive chemical 'aging'.",
                "Organophosphates inhibit acetylcholinesterase; before enzyme 'aging' (spontaneous dealkylation) occurs, pralidoxime can reactivate the enzyme by displacing the organophosphate moiety."
            ),
            "Step 2 CK": (
                "Immediate atropinization protocol and pralidoxime in organophosphate poisoning",
                "Immediate intravenous atropine titrated rapidly (doubling dose every 3-5 minutes: 2 mg, 4 mg, 8 mg) until pulmonary bronchorrhea clears, combined with pralidoxime.",
                "In organophosphate poisoning, atropine competitively blocks muscarinic receptors; the primary endpoint of atropine titration is clearing of bronchial secretions and wheezing, not pupil size."
            ),
            "Step 3": (
                "Acetaminophen toxicity risk assessment via Rumack-Matthew nomogram and N-acetylcysteine",
                "Plotting 4-hour serum acetaminophen level on the Rumack-Matthew nomogram and administering IV or oral N-acetylcysteine (NAC) within 8 hours to replenish hepatic glutathione.",
                "Acetaminophen overdose exhausts hepatic glutathione, allowing toxic NAPQI to bind hepatocyte macromolecules; NAC provides cysteine to regenerate glutathione, preventing fatal centrilobular necrosis."
            ),
            "PLAB / UKMLA": (
                "Anticholinergic toxidrome recognition and physostigmine considerations",
                "Clinical toxidrome: hyperthermia, flushed dry skin, mydriasis, delirium, urinary retention, and sinus tachycardia ('blind as a bat, mad as a hatter, red as a beet, hot as a hare, dry as a bone').",
                "NICE guidelines highlight anticholinergic poisoning (from diphenhydramine, tricyclics, atropine); physostigmine reverses central delirium but is contraindicated if TCA QRS prolongation is present."
            ),
            "AMC": (
                "Envenomation management (snakebite and spider envenomation) and pressure immobilization",
                "Application of a broad pressure immobilization bandage and limb splinting without washing the bite site, followed by venom detection and specific antivenom administration.",
                "Australian envenomation protocols mandate the pressure immobilization technique (PIT) for elapid snakebites (brown, tiger, taipan) to retard lymphatic dissemination of venom."
            ),
            "MCCQE": (
                "Opioid overdose triage and naloxone administration in respiratory depression",
                "Miosis, severe respiratory depression (RR < 8/min), and altered level of consciousness, managed with titrated intravenous or intranasal naloxone targeting adequate ventilation.",
                "Canadian public health directives emphasize community and hospital naloxone distribution, titrating to restore adequate spontaneous ventilation while avoiding severe acute opioid withdrawal."
            ),
            "FCPS": (
                "Caustic ingestion management and contraindication to emesis or neutralization",
                "Immediate airway assessment, strict contraindication to inducing vomiting or administering neutralizing acids/bases, and early esophagogastroduodenoscopy within 12-24 hours.",
                "In severe alkali or acid ingestion, attempting gastric lavage, emesis, or chemical neutralization causes exothermic reactions and increases perforation risk; early EGD stages mucosal injury."
            ),
            "NLE": (
                "Specific antidotes for common clinical overdoses",
                "Flumazenil for benzodiazepines (caution in chronic dependence), Naloxone for opioids, N-acetylcysteine for acetaminophen, Atropine for organophosphates, and Vitamin K for warfarin.",
                "National licensing curricula test classic antidote pairings: Acetaminophen - N-acetylcysteine; Organophosphates - Atropine/Pralidoxime; Beta-blockers - High-dose glucagon."
            ),
            "NEET PG": (
                "Rumack-Matthew nomogram treatment line coordinates and hepatotoxicity threshold",
                "Nomogram starting at 150 mcg/mL (or 1000 mcmol/L) at 4 hours post-acute ingestion defining the treatment threshold line for intravenous N-acetylcysteine initiation.",
                "NEET PG pharmacology and forensic medicine heavily test the Rumack-Matthew nomogram: levels above the treatment line (150 mcg/mL at 4 hours) mandate immediate NAC therapy."
            ),
            "MRCP": (
                "Salicylate toxicity pathophysiology and urine alkalinization therapy",
                "Initial respiratory alkalosis followed by high anion gap metabolic acidosis; managed with intravenous sodium bicarbonate to achieve urine pH >= 7.5 to enhance renal elimination.",
                "MRCP clinical pharmacology tests aspirin toxicity: uncoupling of oxidative phosphorylation creates lactic acidosis; urine alkalinization ionizes salicylate, trapping it in renal tubules."
            ),
            "MRCEM": (
                "Emergency decontamination protocols and activated charcoal indications",
                "Single-dose activated charcoal (1 g/kg) administered within 1 hour of ingestion of toxic substances in an alert patient with an intact or protected airway.",
                "Emergency toxicology guidelines restrict activated charcoal to alert patients within 60 minutes; charcoal does not bind iron, lithium, potassium, alcohols, or strong acids/alkalis."
            ),
            "SMLE": (
                "Carbon monoxide poisoning diagnosis and hyperbaric oxygen indications",
                "Carboxyhemoglobin level > 25% (or > 15% in pregnancy), loss of consciousness, severe metabolic acidosis, or cardiac ischemia warranting hyperbaric oxygen therapy.",
                "Saudi clinical practice guidelines mandate hyperbaric oxygen therapy for severe carbon monoxide poisoning to accelerate elimination half-life from 300 minutes to 30 minutes."
            ),
            "HAAD / DHA": (
                "Ethylene glycol and methanol toxicity and fomepizole antidote therapy",
                "High anion gap metabolic acidosis with high osmolal gap and acute renal failure (ethylene glycol) or optic disc hyperemia/blindness (methanol), treated with fomepizole.",
                "UAE emergency toxicology standards recommend fomepizole (competitive alcohol dehydrogenase inhibitor) or hemodialysis to prevent formation of toxic oxalic and formic acid metabolites."
            ),
            "UHS MBBS": (
                "Centrilobular hepatic necrosis histology in acetaminophen toxicity",
                "Zone 3 (centrilobular) coagulative hepatocyte necrosis surrounding the central vein with ballooning degeneration, sparing zone 1 (periportal) hepatocytes.",
                "Undergraduate pathology emphasizes that zone 3 hepatocytes have the highest concentration of cytochrome P450 2E1 and lowest glutathione, making them selectively vulnerable to NAPQI toxicity."
            )
        }
    }
]
