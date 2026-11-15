"""
Mega Data Part S: Domains 114 to 119 (Substance Use, Child Psych, Eating Disorders, Geriatrics, Occupational, Pharmacology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_S = [
    # Domain 114: Substance Use Disorders & Withdrawal Syndromes
    {
        "id": "domain_114_substance_use",
        "entity": "Alcohol withdrawal, delirium tremens, opioid overdose, and stimulant toxicity",
        "hallmark": "coarse tremor, autonomic instability (tachycardia, hypertension, diaphoresis), visual or tactile hallucinations, seizures, delirium tremens, or pinpoint pupils with severe respiratory depression, or psychomotor agitation with dilated pupils",
        "system": "Behavioral Health",
        "ref_key": "addiction",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Pharmacology",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "GABA-A down-regulation and NMDA up-regulation in chronic alcohol neurobiology",
                "Chronic ethanol consumption down-regulates inhibitory GABA-A receptors and up-regulates excitatory NMDA glutamate receptors, causing profound neuro-excitation upon abrupt cessation.",
                "Abrupt withdrawal eliminates the exogenous GABAergic sedative stimulus while leaving an excess of uninhibited NMDA glutamate receptors, precipitating excitotoxic seizures and autonomic hyperarousal."
            ),
            "Step 2 CK": (
                "Delirium tremens emergency management with symptom-triggered benzodiazepines (CIWA-Ar)",
                "Administering intravenous long-acting benzodiazepines (diazepam or chlordiazepoxide) titrated to CIWA-Ar scores, with lorazepam reserved for severe liver cirrhosis.",
                "Delirium tremens typically manifests 48 to 96 hours after the last drink with fluctuating consciousness, autonomic collapse, and tactile hallucinations (formication); aggressive sedation prevents mortality."
            ),
            "Step 3": (
                "Medication-assisted treatment for alcohol use disorder: naltrexone vs acamprosate",
                "Prescribing oral naltrexone (mu-opioid receptor antagonist) to reduce alcohol cravings, or acamprosate (NMDA modulator) for abstinence maintenance in patients with liver dysfunction.",
                "Naltrexone blunts the dopaminergic reward pathway triggered by alcohol; it is contraindicated in patients taking opioid analgesics or with acute hepatitis, where acamprosate is the drug of choice."
            ),
            "PLAB / UKMLA": (
                "Wernicke-Korsakoff syndrome prevention: thiamine administration before glucose",
                "Immediate intravenous thiamine (Pabrinex) prior to or alongside any carbohydrate or glucose infusions in malnourished alcohol-dependent patients.",
                "Thiamine is a necessary cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase; infusing dextrose without thiamine acutely exhausts neuronal thiamine, precipitating Wernicke encephalopathy."
            ),
            "AMC": (
                "Opioid overdose emergency reversal and post-naloxone observation period",
                "Administering titrated intravenous or intramuscular naloxone to restore spontaneous ventilation, followed by a minimum 2 to 4-hour observation period for rebound toxicity.",
                "Naloxone has a shorter half-life (30-90 minutes) than most synthetic opioids (methadone, sustained-release oxycodone, fentanyl); relapse into fatal hypoventilation can occur once naloxone wears off."
            ),
            "MCCQE": (
                "Opioid Agonist Therapy (OAT): Buprenorphine-naloxone vs Methadone protocols",
                "First-line treatment of moderate to severe opioid use disorder with sublingual buprenorphine-naloxone (partial mu-agonist with ceiling effect on respiratory depression).",
                "Buprenorphine has a high receptor affinity and acts as a partial agonist, minimizing overdose risk; co-formulated naloxone prevents intravenous diversion because naloxone is poorly absorbed sublingually."
            ),
            "FCPS": (
                "Benzodiazepine withdrawal vs flumazenil contraindications in chronic users",
                "Gradual oral diazepam substitution and tapering schedule; strictly avoiding flumazenil in chronic users due to the risk of precipitating refractory status epilepticus.",
                "Flumazenil is a competitive benzodiazepine antagonist; administering it to a chronic benzodiazepine-dependent patient abruptly unmasks massive glutamate excitotoxicity, triggering fatal seizures."
            ),
            "NLE": (
                "Clinical triad of Wernicke encephalopathy and progression to Korsakoff psychosis",
                "Clinical triad of acute encephalopathy (confusion), oculomotor dysfunction (nystagmus, bilateral lateral rectus palsy), and gait ataxia, progressing to anterograde amnesia and confabulation.",
                "Korsakoff syndrome results from irreversible damage to the medial dorsal nucleus of the thalamus and mammillary bodies; while ophthalmoplegia resolves rapidly with thiamine, amnesia is permanent."
            ),
            "NEET PG": (
                "Disulfiram (Antabuse) mechanism, aldehyde dehydrogenase inhibition, and reaction",
                "Irreversible inhibition of aldehyde dehydrogenase causing accumulation of acetaldehyde, resulting in severe flushing, throbbing headache, nausea, vomiting, and hypotension upon alcohol ingestion.",
                "Disulfiram-ethanol reaction is mediated by toxic acetaldehyde build-up; patients must be warned that hidden alcohol in mouthwashes, sauces, and topical lotions can trigger severe reactions."
            ),
            "MRCP": (
                "Cannabinoid Hyperemesis Syndrome (CHS) and paradox of compulsive hot water bathing",
                "Chronic daily high-potency cannabis consumption presenting with cyclic bouts of severe nausea, intractable vomiting, abdominal pain, and learned relief from compulsive hot showers.",
                "CHS is mediated by downregulation of hypothalamic CB1 receptors; compulsive hot bathing temporarily restores thermoregulatory and autonomic homeostasis; complete cannabis cessation cures the condition."
            ),
            "MRCEM": (
                "Acute sympathomimetic toxicity (cocaine/amphetamine) and hyperthermia management",
                "Aggressive intravenous benzodiazepines (lorazepam) for psychomotor agitation and active cooling; strictly avoiding pure beta-blockers due to unopposed alpha-1 vasoconstriction.",
                "Cocaine blocks norepinephrine reuptake; administering nonselective or beta-1 selective blockers leaves alpha-1 receptors uninhibited, causing catastrophic coronary vasospasm and hypertensive crisis."
            ),
            "SMLE": (
                "Motivational interviewing and Stages of Change model in addiction medicine",
                "Employing open-ended questioning and reflective listening tailored to the patient's stage of change (Precontemplation, Contemplation, Preparation, Action, Maintenance).",
                "Meeting the patient at their current stage of readiness explores and resolves ambivalence regarding substance use, significantly increasing treatment engagement and sustained recovery rates."
            ),
            "HAAD / DHA": (
                "Workplace drug screening: urine immunoassay confirmatory testing via GC-MS / LC-MS",
                "Initial screening via enzyme multiplied immunoassay technique (EMIT) requiring mandatory confirmation of presumptive positive results by gas chromatography-mass spectrometry (GC-MS).",
                "Immunoassays are vulnerable to false-positive cross-reactivity (e.g., fluoroquinolones triggering opiate screens); GC-MS provides absolute molecular structural identification for forensic validity."
            ),
            "UHS MBBS": (
                "Ethanol metabolism pathways: Alcohol Dehydrogenase, CYP2E1, and zero-order kinetics",
                "Cytosolic oxidation of ethanol to acetaldehyde by alcohol dehydrogenase (ADH) followed by mitochondrial conversion to acetate by ALDH, exhibiting zero-order saturation elimination kinetics.",
                "At clinical concentrations, alcohol dehydrogenase is fully saturated, metabolizing ethanol at a constant rate (~7-10 g/hour) independent of blood concentration; chronic use induces microsomal CYP2E1."
            )
        }
    },

    # Domain 115: Child & Adolescent Psychiatry
    {
        "id": "domain_115_child_psychiatry",
        "entity": "ADHD, Autism Spectrum Disorder, Tourette syndrome, and Conduct disorder",
        "hallmark": "persistent inattention and hyperactivity across >= 2 settings before age 12, impaired social communication with restricted repetitive behaviors, multiple motor and vocal tics, or severe violation of societal rules with cruelty to animals",
        "system": "Behavioral Health",
        "ref_key": "psychiatry",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Psychiatry",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Dopamine and norepinephrine transporter inhibition by psychostimulants",
                "Methylphenidate blocking dopamine (DAT) and norepinephrine (NET) reuptake transporters in the prefrontal cortex, enhancing synaptic monoamine availability.",
                "The prefrontal cortex regulates executive function, working memory, and impulse control; stimulants optimize cortical signal-to-noise ratio by stimulating alpha-2A and dopamine D1 receptors."
            ),
            "Step 2 CK": (
                "First-line multimodal therapy for Attention-Deficit/Hyperactivity Disorder (ADHD)",
                "Behavioral parent training and school accommodations for preschool children, and stimulant medication (methylphenidate or amphetamines) combined with behavioral therapy for school-aged children.",
                "For children aged 6 and older, psychostimulants are the most effective first-line therapy; monitoring parameters include height, weight (appetite suppression), blood pressure, and heart rate."
            ),
            "Step 3": (
                "Non-stimulant pharmacotherapy for ADHD: Atomoxetine and Alpha-2 agonists",
                "Prescribing atomoxetine (selective NET inhibitor) or extended-release alpha-2 adrenergic agonists (guanfacine, clonidine) in patients with substance use history or severe tic disorders.",
                "Atomoxetine has no abuse liability and does not worsen tics; guanfacine stimulates postsynaptic alpha-2A receptors in the prefrontal cortex, improving impulse control and emotional regulation."
            ),
            "PLAB / UKMLA": (
                "Autism Spectrum Disorder (ASD) early developmental red flags and NICE assessment",
                "Recognizing lack of joint attention, delayed expressive language, absent reciprocal smiling, and persistent hand-flapping, prompting referral to multidisciplinary child development team.",
                "NICE guidelines mandate early comprehensive multidisciplinary evaluation; early behavioral intervention (Applied Behavior Analysis, speech and occupational therapy) maximizes functional outcomes."
            ),
            "AMC": (
                "Tourette syndrome diagnosis criteria and habit reversal behavioral therapy",
                "Presence of both multiple motor tics and >= 1 vocal tic for > 1 year with onset before age 18, managed first-line with Comprehensive Behavioral Intervention for Tics (CBIT).",
                "Tics are preceded by an uncomfortable premonitory urge relieved by tic execution; habit reversal training teaches a competing physical response to disrupt the tic-reinforcement loop."
            ),
            "MCCQE": (
                "Oppositional Defiant Disorder (ODD) vs Conduct Disorder diagnostic differentiation",
                "ODD characterized by angry/irritable mood and defiant behavior toward authority without physical aggression or theft, versus Conduct Disorder involving severe rights violations and animal cruelty.",
                "Conduct disorder is characterized by aggressive behavior toward people and animals, destruction of property, deceitfulness, and theft; it represents a major developmental precursor to adult Antisocial Personality."
            ),
            "FCPS": (
                "Pharmacological management of severe irritability and aggression in Autism Spectrum",
                "Low-dose atypical antipsychotics (risperidone or aripiprazole) approved for severe temper tantrums, physical aggression, and self-injurious behavior in children with ASD.",
                "Atypical antipsychotics improve disruptive behavioral symptoms in autism via 5-HT2A and dopamine D2 antagonism; patients require metabolic monitoring for weight gain, dyslipidemia, and hyperprolactinemia."
            ),
            "NLE": (
                "Separation Anxiety Disorder: developmental normality vs pathological impairment",
                "Excessive, developmentally inappropriate anxiety concerning separation from attachment figures lasting >= 4 weeks in children, causing severe school refusal and physical somatic complaints.",
                "Transient separation anxiety is normal between 8 and 18 months of age; when persistent and accompanied by nightmares of separation or refusal to attend school, cognitive behavioral therapy is indicated."
            ),
            "NEET PG": (
                "Rett syndrome MECP2 gene mutation, developmental regression, and hand-wringing",
                "X-linked dominant mutation in MECP2 in females presenting with normal initial development followed by deceleration of head growth, loss of purposeful hand skills, stereotyped wringing, and seizures.",
                "Rett syndrome almost exclusively affects females (hemizygous males typically die in utero); characteristic loss of spoken language, autistic features, and irregular breathing patterns develop between 6 and 18 months."
            ),
            "MRCP": (
                "Pharmacotherapy for severe refractory Tourette syndrome: Alpha-2 agonists vs D2 blockers",
                "Starting with guanfacine or clonidine, escalating to vesicular monoamine transporter 2 (VMAT-2) inhibitors (deutetrabenazine) or second-generation dopamine antagonists for disabling tics.",
                "VMAT-2 inhibitors deplete presynaptic dopamine stores without causing tardive dyskinesia; dopamine receptor antagonists carry risks of extrapyramidal symptoms and hyperprolactinemia."
            ),
            "MRCEM": (
                "Pediatric intentional self-harm and emergency mental health risk assessment",
                "Ensuring physical safety, continuous one-to-one supervision, immediate medical management of ingestions, and mandatory child and adolescent mental health service (CAMHS) emergency evaluation.",
                "Every adolescent presenting with intentional self-harm or suicidal ideation requires safe physical containment and exhaustive evaluation of family safety, bullying, abuse, and psychiatric illness."
            ),
            "SMLE": (
                "Selective Mutism diagnostic criteria and behavioral contingency management",
                "Consistent failure to speak in specific social situations where there is an expectation to speak (school) despite speaking normally in other situations (home), lasting >= 1 month.",
                "Selective mutism is an anxiety disorder, not a communication or oppositional disorder; management employs stimulus fading, systematic desensitization, and SSRIs for refractory severe cases."
            ),
            "HAAD / DHA": (
                "School refusal multidisciplinary intervention: behavioral re-entry and truancy differentiation",
                "Immediate collaborative school re-entry planning between parents, educators, and clinicians, addressing separation anxiety rather than school truancy (delinquent avoidance).",
                "Unlike truancy where children skip school without parental knowledge, school refusal involves intense distress, staying home with parental awareness, and prominent somatic symptoms on school mornings."
            ),
            "UHS MBBS": (
                "Diagnostic criteria for Enuresis and Encopresis: developmental timelines",
                "Involuntary or intentional voiding of urine in bed or clothes at least twice a week for 3 months in a child >= 5 years of age, treated first-line with enuresis alarm conditioning.",
                "Primary nocturnal enuresis is due to developmental delay in nocturnal vasopressin secretion or bladder arousal; moisture alarm conditioning carries the lowest long-term relapse rate; desmopressin is second-line."
            )
        }
    },

    # Domain 116: Eating Disorders & Refeeding Syndrome
    {
        "id": "domain_116_eating_disorders",
        "entity": "Anorexia nervosa, Bulimia nervosa, and Refeeding syndrome",
        "hallmark": "significantly low body weight (BMI < 18.5), intense fear of gaining weight, distorted body image, Russell sign (knuckle calluses), parotid gland enlargement, hypokalemia, or severe hypophosphatemia upon nutritional reintroduction",
        "system": "Behavioral Health",
        "ref_key": "psychiatry",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Psychiatry",
            "FCPS": "Psychiatry",
            "UHS MBBS": "Psychiatry",
            "other": "Psychiatry"
        },
        "concepts": {
            "Step 1": (
                "Insulin surge, cellular phosphate shifting, and ATP depletion in refeeding syndrome",
                "Nutritional reintroduction of carbohydrates driving a massive insulin surge that stimulates cellular uptake of phosphate, potassium, and magnesium, causing severe hypophosphatemia and ATP depletion.",
                "In prolonged starvation, glycogen stores are depleted and cells catabolize fat and protein; refeeding carbohydrates stimulates insulin, driving phosphate into cells for glycolysis, leading to cardiac arrest and rhabdomyolysis."
            ),
            "Step 2 CK": (
                "Inpatient medical admission criteria for severe Anorexia Nervosa",
                "Hospitalization indicated for heart rate < 40/min, blood pressure < 90/60 mm Hg, temperature < 35.6°C, cardiac dysrhythmias (QTc prolongation), severe electrolyte derangements, or BMI < 15 kg/m2.",
                "Severely malnourished patients with unstable hemodynamics or cardiac arrhythmias require immediate stabilization on a medical unit before transitioning to specialized psychiatric eating disorder programs."
            ),
            "Step 3": (
                "Refeeding syndrome prevention protocol: slow caloric titration and electrolyte repletion",
                "Initiating refeeding at a low caloric threshold (10-15 kcal/kg/day), baseline and daily monitoring of serum phosphate, potassium, and magnesium, and high-dose prophylactic thiamine.",
                "Prophylactic phosphate supplementation and slow caloric advance prevent life-threatening refeeding complications (widespread muscle weakness, diaphragmatic paralysis, arrhythmias, and acute heart failure)."
            ),
            "PLAB / UKMLA": (
                "Cognitive Behavioral Therapy for Eating Disorders (CBT-ED) in Bulimia Nervosa",
                "First-line evidence-based psychotherapy with manualized eating disorder-focused CBT (CBT-ED) alongside high-dose fluoxetine (60 mg daily) to reduce binge-eating and purging frequency.",
                "NICE guidelines recommend CBT-ED as the core psychological intervention; fluoxetine at 60 mg daily is the only antidepressant approved for reducing the frequency of bingeing and vomiting cycles."
            ),
            "AMC": (
                "Russell sign, bilateral parotid sialadenosis, and enamel erosion in bulimia",
                "Calluses on the dorsal aspect of the fingers from induced vomiting (Russell sign), painless bilateral parotid enlargement from cholinergic stimulation, and lingual dental enamel perimylolysis.",
                "Chronic exposure to acidic gastric secretions dissolves tooth enamel on lingual surfaces of maxillary teeth; parotid hypertrophy reflects hyperamylasemia from recurrent vomiting stimulation."
            ),
            "MCCQE": (
                "Laboratory hallmarks of purging: hypokalemic, hypochloremic metabolic alkalosis",
                "Elevated serum bicarbonate, low serum chloride, and profound hypokalemia with high urinary chloride excretion resulting from persistent self-induced vomiting and gastric acid loss.",
                "Loss of hydrochloric acid in vomitus generates metabolic alkalosis and volume depletion; secondary hyperaldosteronism further accelerates renal potassium and hydrogen ion excretion in urine."
            ),
            "FCPS": (
                "Avoidance of bupropion in patients with active or historical eating disorders",
                "Strict contraindication to bupropion (norepinephrine-dopamine reuptake inhibitor) in anorexia and bulimia due to a significantly heightened risk of precipitating grand mal seizures.",
                "Patients with eating disorders have electrolyte imbalances and reduced seizure thresholds; bupropion lowers the seizure threshold and carries an unacceptably high rate of epileptic seizures in this cohort."
            ),
            "NLE": (
                "Physical exam findings of severe starvation: lanugo hair, bradycardia, and acrocyanosis",
                "Fine unpigmented downy hair (lanugo) over the back and limbs, profound sinus bradycardia, orthostatic hypotension, delayed capillary refill, and dry scaly skin in anorexia nervosa.",
                "Lanugo hair represents a physiological thermal compensatory response to severe subcutaneous fat loss and hypothermia; profound sinus bradycardia reflects downregulation of basal metabolic expenditure."
            ),
            "NEET PG": (
                "Endocrine abnormalities in Anorexia: hypogonadotropic hypogonadism and euthyroid sick",
                "Suppression of hypothalamic GnRH pulsatility leading to low LH, FSH, and estradiol (amenorrhea), alongside normal TSH with low free T3 (euthyroid sick / non-thyroidal illness syndrome).",
                "Severe leptin deficiency from fat store depletion shuts down the hypothalamic-pituitary-gonadal axis; peripheral deiodinase downregulates active T3 conversion to minimize energy expenditure."
            ),
            "MRCP": (
                "Osteopenia, osteoporosis, and fracture risk management in chronic Anorexia Nervosa",
                "Dual-energy X-ray absorptiometry (DEXA) screening for profound bone mineral density loss; treatment centers on weight restoration and resumption of spontaneous menses rather than bisphosphonates.",
                "Hypoestrogenism combined with elevated serum cortisol and low IGF-1 impairs osteoblastic bone formation; oral contraceptive pills do NOT restore bone density; only nutritional weight recovery is effective."
            ),
            "MRCEM": (
                "Electrocardiographic changes in eating disorders: prolonged QTc and U-waves",
                "Hypokalemia- and hypomagnesemia-induced prolongation of the QTc interval, prominent U-waves, flattened T-waves, and fatal ventricular arrhythmias (Torsades de Pointes).",
                "Immediate 12-lead ECG is mandatory in all presenting eating disorder patients; severe hypokalemia predisposes to early afterdepolarizations and triggered polymorphic ventricular tachycardia."
            ),
            "SMLE": (
                "Family-Based Treatment (Maudsley approach) for adolescents with Anorexia Nervosa",
                "First-line outpatient psychological intervention empowering parents to temporarily take charge of the adolescent's refeeding and weight restoration before restoring autonomy.",
                "The Maudsley model views the family as an essential resource rather than a pathological cause; randomized trials demonstrate superior remission rates compared to individual psychotherapy."
            ),
            "HAAD / DHA": (
                "Binge-Eating Disorder (BED) diagnostic criteria and lisdexamfetamine therapy",
                "Recurrent episodes of consuming objectively large amounts of food with a sense of lack of control, without inappropriate compensatory behaviors (purging), treated with lisdexamfetamine.",
                "Unlike bulimia, patients with BED do not purge or abuse laxatives and are frequently overweight or obese; lisdexamfetamine and CBT significantly reduce weekly binge frequency."
            ),
            "UHS MBBS": (
                "Melanosis coli pathology from chronic stimulant laxative abuse in eating disorders",
                "Brownish-black hyperpigmentation of the colonic mucosa on colonoscopy caused by lipofuscin accumulation in mucosal macrophages from chronic anthraquinone laxative abuse.",
                "Surreptitious abuse of anthraquinone laxatives (senna, cascara) induces enterocyte apoptosis; apoptotic cell bodies are engulfed by macrophages in the lamina propria, forming lipofuscin pigment."
            )
        }
    },

    # Domain 117: Geriatric Syndromes & Polypharmacy
    {
        "id": "domain_117_geriatric_medicine",
        "entity": "Delirium vs Dementia, Beers Criteria polypharmacy, and Pressure injuries",
        "hallmark": "acute fluctuating disturbance in attention and awareness (delirium) vs insidious progressive memory decline (dementia), falls secondary to sedatives, orthostatic hypotension, or localized skin and soft tissue necrosis over bony prominences",
        "system": "General Principles",
        "ref_key": "geriatrics",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Geriatrics"
        },
        "concepts": {
            "Step 1": (
                "Age-related pharmacokinetic changes: decreased renal clearance and altered volume of distribution",
                "Reduced glomerular filtration rate, decreased hepatic Phase I cytochrome P450 oxidation, increased body fat percentage (larger volume of distribution for lipophilic drugs), and decreased total body water.",
                "Lipophilic drugs (diazepam, haloperidol) have prolonged elimination half-lives in the elderly; hydrophilic drugs (digoxin, aminoglycosides, lithium) reach higher peak serum concentrations due to smaller Vd."
            ),
            "Step 2 CK": (
                "Confusion Assessment Method (CAM) diagnostic criteria for acute delirium",
                "Diagnosis requires the presence of feature 1 (acute onset and fluctuating course) and feature 2 (inattention), and either feature 3 (disorganized thinking) or feature 4 (altered level of consciousness).",
                "Delirium is an acute medical emergency triggered by underlying systemic illness (UTI, pneumonia, electrolyte derangements, medication toxicity); identifying and reversing the medical cause is mandatory."
            ),
            "Step 3": (
                "American Geriatrics Society (AGS) Beers Criteria: deprescribing anticholinergics and sedatives",
                "Systematic identification and deprescribing of medications with high anticholinergic burden, long-acting benzodiazepines, first-generation antihistamines, and sliding-scale insulin.",
                "Anticholinergic drugs precipitate acute delirium, urinary retention, severe constipation, and cognitive decline in the elderly; reducing the anticholinergic score significantly decreases fall and mortality rates."
            ),
            "PLAB / UKMLA": (
                "Comprehensive Geriatric Assessment (CGA) and multicomponent delirium prevention",
                "Multidisciplinary evaluation addressing medical, functional, psychological, and social capabilities, and non-pharmacological delirium prevention (sleep hygiene, reorientation, mobilization, hydration).",
                "NICE guidelines state that non-pharmacological multicomponent interventions prevent over 30% of inpatient delirium episodes; antipsychotics should only be used if the patient is a danger to themselves or others."
            ),
            "AMC": (
                "Staging and guideline-directed wound management of pressure injuries",
                "Stage 1 (non-blanchable erythema), Stage 2 (partial-thickness skin loss with exposed dermis), Stage 3 (full-thickness skin loss), Stage 4 (exposed fascia, muscle, tendon, or bone).",
                "Management requires scheduled 2-hourly pressure-relieving repositioning, dynamic air-mattress surfaces, barrier films, moist wound dressings (hydrocolloids/foams), and adequate protein nutrition."
            ),
            "MCCQE": (
                "Elder abuse and neglect: screening, clinical indicators, and mandatory reporting",
                "Recognizing signs of physical trauma (unexplained fractures, bruises on torso), poor hygiene, severe dehydration, untreated pressure ulcers, caregiver financial exploitation, and reporting to protective services.",
                "Physicians have an ethical and legal obligation to assess vulnerable older adults for neglect and abuse; conducting a private interview without the suspected caregiver present is an essential first step."
            ),
            "FCPS": (
                "Polypharmacy medication review: STOPP/START criteria application",
                "Application of Screening Tool of Older Persons' Prescriptions (STOPP) and Screening Tool to Alert to Right Treatment (START) to detect potentially inappropriate medications and omitted therapies.",
                "STOPP/START criteria reduce adverse drug reactions, hospital readmissions, and healthcare expenditures in multimorbid geriatric patients compared to unguided clinical review."
            ),
            "NLE": (
                "Clinical distinction between Delirium, Dementia, and Depression (Pseudodementia)",
                "Delirium has acute onset and fluctuating attention; dementia has insidious onset and preserved alertness; depression-associated cognitive impairment exhibits poor effort ('I don't know' responses).",
                "Patients with depression-related cognitive impairment highlight their memory deficits and answer with poor effort, while patients with true dementia attempt to answer, rationalize errors, or confabulate."
            ),
            "NEET PG": (
                "Normal Pressure Hydrocephalus (NPH) clinical triad and high-volume lumbar puncture tap test",
                "Triad of gait apraxia (magnetic gait / feet glued to floor), cognitive impairment, and urinary incontinence, with temporary clinical improvement following high-volume CSF drainage (30-50 mL).",
                "Mnemonic 'Wobbly, Wet, and Wacky': ventricular enlargement out of proportion to sulcal atrophy compresses periventricular corticospinal fibers; tap test predicts success of ventriculoperitoneal shunting."
            ),
            "MRCP": (
                "Orthostatic (postural) hypotension diagnosis and non-pharmacological management",
                "Drop in systolic blood pressure >= 20 mm Hg or diastolic >= 10 mm Hg within 3 minutes of standing, managed by liberalizing fluid/salt, compression stockings, and fludrocortisone or midodrine.",
                "Blunted baroreceptor sensitivity in the elderly fails to trigger compensatory vasoconstriction; review of offending antihypertensives (alpha-blockers, diuretics) is the primary therapeutic priority."
            ),
            "MRCEM": (
                "Emergency management of severe behavioral agitation in delirium: avoiding physical restraints",
                "De-escalation techniques, verbal reassurance, presence of family members, and reserved ultra-low dose oral haloperidol (0.5 mg) or quetiapine for extreme distress or physical danger.",
                "Physical restraints exacerbate agitation, increase risk of strangulation, prolong delirium duration, and cause severe pressure ulcers; pharmacological sedation is strictly limited to short-term emergency rescue."
            ),
            "SMLE": (
                "Fall risk assessment: Timed Up and Go (TUG) test and environmental modifications",
                "Evaluating mobility using the Timed Up and Go test (normal < 10 seconds; > 12 seconds indicates high fall risk) combined with home hazard remediation (removing rugs, installing grab bars).",
                "Falls are a leading cause of traumatic brain injury and hip fractures; multimodal interventions combining strength/balance training, medication review, and home safety modifications prevent falls."
            ),
            "HAAD / DHA": (
                "Geriatric failure to thrive and advance care planning discussions",
                "Multifactorial syndrome of weight loss, decreased physical activity, social withdrawal, and cognitive decline, prompting structured advance directive and goals-of-care discussions.",
                "Advance care planning ensures patient autonomy regarding artificial nutrition, hydration, and cardiopulmonary resuscitation before loss of decision-making capacity supervenes."
            ),
            "UHS MBBS": (
                "Pathology of senile purpura: dermal collagen atrophy and vessel fragility",
                "Extravasation of erythrocytes into the dermis following minor shear stress on the extensor forearms and hands, characterized by dark purple macules without palpable induration.",
                "Age-related dermal atrophy and loss of subcutaneous supporting collagen leave superficial dermal capillaries vulnerable to rupture from minimal shear trauma; platelet count and coagulation profiles are normal."
            )
        }
    },

    # Domain 118: Occupational & Environmental Medicine
    {
        "id": "domain_118_occupational_medicine",
        "entity": "Pneumoconioses (asbestosis, silicosis, berylliosis) and heavy metal toxicity (lead, arsenic)",
        "hallmark": "insidious exertional dyspnea with bilateral interstitial fibrosis and pleural plaques, eggshell calcification of hilar lymph nodes, non-caseating granulomas, or basophilic stippling with lead line and wrist drop, or hyperkeratotic skin lesions with garlic breath",
        "system": "Respiratory",
        "ref_key": "occupational",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Asbestos bodies (ferruginous bodies) vs birefringent silica particles on microscopy",
                "Golden-brown dumbbell-shaped ferruginous bodies (asbestos fibers coated with iron and ferritin) in asbestosis versus polarized light-birefringent crystalline silica particles in silicosis.",
                "Alveolar macrophages engulf inhaled inorganic particles and release reactive oxygen species, TNF-alpha, and TGF-beta; silica is directly cytotoxic, destroying lysosomal membranes and killing macrophages."
            ),
            "Step 2 CK": (
                "Silicosis association with pulmonary tuberculosis (silicotuberculosis)",
                "Mandatory tuberculin skin testing (PPD) or interferon-gamma release assay (IGRA) in all patients with silicosis due to a 30-fold increased susceptibility to active Mycobacterium tuberculosis.",
                "Crystalline silica impairs alveolar macrophage phagolysosomal fusion and suppresses macrophage-mediated cell death of mycobacteria, dramatically increasing vulnerability to progressive tuberculosis."
            ),
            "Step 3": (
                "Lead poisoning screening, chelation thresholds, and blood lead levels (BLL)",
                "Measurement of venous blood lead levels; initiating oral succimer (DMSA) for BLL 45-69 ug/dL, and intravenous calcium disodium EDTA plus dimercaprol (BAL) for BLL >= 70 ug/dL or encephalopathy.",
                "Lead inhibits ferrochelatase and delta-aminolevulinic acid dehydratase, causing microcytic anemia with basophilic stippling, lead lines on gingiva (Burton lines), colicky abdominal pain, and wrist/foot drop."
            ),
            "PLAB / UKMLA": (
                "Occupational asthma diagnosis with serial peak expiratory flow rate (PEFR) monitoring",
                "Serial self-recorded peak expiratory flow measurements >= 4 times daily over at least 3 weeks comparing working days with days away from work.",
                "Occupational asthma is diagnosed by demonstrating reproducible worsening of airflow obstruction during work shifts and improvement during weekends or annual leave, driven by isocyanates or flour dust."
            ),
            "AMC": (
                "Berylliosis pathogenesis, beryllium lymphocyte proliferation test, and sarcoidosis mimicry",
                "Chronic granulomatous pulmonary disease in aerospace and electronics workers, positive blood beryllium lymphocyte proliferation test (BeLPT), and non-caseating interstitial granulomas.",
                "Berylliosis is a cell-mediated delayed-type hypersensitivity reaction closely mimicking pulmonary sarcoidosis; BeLPT confirms sensitization to beryllium, distinguishing it from idiopathic sarcoidosis."
            ),
            "MCCQE": (
                "Carbon monoxide poisoning: carboxyhemoglobin measurement and hyperbaric oxygen indications",
                "Pulse oximetry falsely normal; diagnosis confirmed by co-oximetry blood gas showing elevated carboxyhemoglobin, treated with 100% normobaric oxygen or hyperbaric oxygen for CO-Hb > 25% or syncope.",
                "Carbon monoxide binds hemoglobin with 200-fold greater affinity than oxygen, shifting the oxygen-hemoglobin dissociation curve to the left and inhibiting mitochondrial cytochrome c oxidase."
            ),
            "FCPS": (
                "Coal workers' pneumoconiosis (CWP) and Caplan syndrome",
                "Inhalation of coal dust particles engulfed by macrophages forming coal macules and nodules, with Caplan syndrome defined by the combination of pneumoconiosis and rheumatoid arthritis.",
                "Caplan syndrome features rapidly developing multiple well-defined rounded pulmonary necrobiotic rheumatoid nodules (1-5 cm) on a background of occupational coal or silica exposure."
            ),
            "NLE": (
                "Arsenic poisoning manifestations: skin hyperpigmentation, Mee's lines, and dimercaprol",
                "Chronic ingestion of contaminated well water presenting with 'raindrop' skin hyperpigmentation, palmoplantar hyperkeratosis, transverse white nail bands (Mees lines), and garlic breath.",
                "Arsenic binds sulfhydryl groups on lipoic acid, inhibiting pyruvate dehydrogenase; chronic exposure causes sensory peripheral neuropathy, hepatic angiosarcoma, and squamous cell skin cancers."
            ),
            "NEET PG": (
                "Asbestos-related diseases: bronchogenic carcinoma vs malignant mesothelioma relative risk",
                "Recognizing that bronchogenic carcinoma (especially combined with cigarette smoking) is far more common than malignant mesothelioma in asbestos-exposed individuals.",
                "Smoking and asbestos exposure have a synergistic multiplicative effect on bronchogenic carcinoma risk (50-fold increased risk); in contrast, malignant mesothelioma risk is independent of smoking."
            ),
            "MRCP": (
                "Extrinsic Allergic Alveolitis (Hypersensitivity Pneumonitis): Farmer lung vs Bird fancier lung",
                "Type III (immune complex) and Type IV (cell-mediated) hypersensitivity to inhaled thermophilic actinomycetes (Farmer lung) or avian serum proteins (Bird fancier lung).",
                "Subacute presentation with fever, cough, dyspnea 4-8 hours post-exposure, high-resolution CT showing diffuse centrilobular ground-glass nodules with air trapping, and bronchoalveolar lymphocytosis (> 50%)."
            ),
            "MRCEM": (
                "Cyanide poisoning: inhaled combustion toxin and hydroxocobalamin antidote",
                "Sudden lactic acidosis, normal arterial PaO2 with elevated mixed venous oxygen saturation (bright red venous blood), treated with immediate intravenous hydroxocobalamin.",
                "Cyanide blocks electron transport by binding to ferric (Fe3+) iron in mitochondrial cytochrome c oxidase, halting cellular respiration; hydroxocobalamin binds cyanide to form non-toxic cyanocobalamin."
            ),
            "SMLE": (
                "Organophosphate and carbamate toxicity: differentiating features and pralidoxime role",
                "Irreversible acetylcholinesterase inhibition by organophosphates requiring pralidoxime (2-PAM) before enzyme aging, versus reversible carbamate inhibition treated with atropine alone.",
                "Atropine blocks muscarinic manifestations (SLUDGEM: salivation, lacrimation, urination, defecation, GI cramps, emesis); pralidoxime reactivates acetylcholinesterase at nicotinic neuromuscular junctions."
            ),
            "HAAD / DHA": (
                "Heat exhaustion versus heat stroke: core body temperature and central nervous system dysfunction",
                "Heat exhaustion (sweating, normal mental status, core temp < 40°C) versus exertional heat stroke (hyperthermia > 40°C, altered mental status, anhidrosis), treated with ice water immersion.",
                "Heat stroke is a medical emergency with thermoregulatory failure, encephalopathy, and multiorgan failure; immediate whole-body evaporative or conductive cold-water immersion lowers core temperature rapidly."
            ),
            "UHS MBBS": (
                "Lead line on gingiva (Burton line) and long bone metaphyseal lead bands on radiography",
                "Bluish-black pigmentation at the dentogingival margin from lead sulfide precipitation by oral bacteria, and dense radiopaque transverse bands at long bone metaphyses in children.",
                "Hydrogen sulfide produced by oral bacteria reacts with circulating lead to form insoluble black lead sulfide precipitates; in growing bones, lead impairs osteoclastic resorption, creating dense metaphyseal bands."
            )
        }
    },

    # Domain 119: Clinical Pharmacology & Adverse Drug Reactions
    {
        "id": "domain_119_pharmacology_adverse",
        "entity": "Adverse drug reactions (DILI, Serotonin syndrome vs NMS, and CYP450 interactions)",
        "hallmark": "acute hyperthermia with neuromuscular excitability (hyperreflexia, clonus) in Serotonin syndrome vs lead-pipe rigidity in NMS, or jaundice with transaminases > 3x ULN (Hy's law), or drug toxicity from CYP3A4 inhibition",
        "system": "General Principles",
        "ref_key": "pharmacology",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Medicine",
            "UHS MBBS": "Pharmacology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Cytochrome P450 inducers and inhibitors: molecular mechanisms and drug clearance",
                "CYP3A4/2C9 induction (rifampin, carbamazepine, St. John's wort) accelerating drug metabolism versus inhibition (ketoconazole, clarithromycin, grapefruit juice) causing toxic accumulation.",
                "Inducers upregulate nuclear receptors (PXR, CAR) to increase enzyme transcription; inhibitors competitively or mechanism-based inactivate the heme iron of CYP enzymes, spiking drug levels."
            ),
            "Step 2 CK": (
                "Serotonin syndrome vs Neuroleptic Malignant Syndrome (NMS) diagnostic distinction",
                "Serotonin syndrome features hyperkinesia (hyperreflexia, spontaneous clonus, tremor, shivering) and rapid onset, while NMS features hypokinesia ('lead-pipe' rigidity, bradykinesia) and insidious onset.",
                "Hunter Serotonin Toxicity Criteria prioritize spontaneous or inducible ocular and peripheral clonus; Serotonin syndrome is treated with cyproheptadine; NMS is treated with dantrolene or bromocriptine."
            ),
            "Step 3": (
                "Drug-Induced Liver Injury (DILI): Hy's law criteria and hepatocellular vs cholestatic injury",
                "Hy's law (ALT/AST > 3x ULN combined with total bilirubin > 2x ULN without initial cholestasis) predicting a > 10% mortality rate and mandating immediate drug discontinuation.",
                "R-ratio (ALT/ULN divided by AlkPhos/ULN): R >= 5 indicates hepatocellular injury; R <= 2 indicates cholestatic injury; R between 2 and 5 indicates mixed hepatotoxicity."
            ),
            "PLAB / UKMLA": (
                "Drug-induced Long QT syndrome, Torsades de Pointes, and offending medication classes",
                "Prolongation of QTc > 500 ms by hERG potassium channel blockers (macrolides, fluoroquinolones, antipsychotics, antiarrhythmics), treated with intravenous magnesium sulfate.",
                "Inhibition of the rapid delayed rectifier potassium current (IKr) delays ventricular repolarization; sudden polymorphic ventricular tachycardia (Torsades de Pointes) is treated with IV magnesium."
            ),
            "AMC": (
                "Lithium toxicity: acute vs chronic manifestations, drug interactions, and hemodialysis",
                "Coarse tremor, ataxia, hyperreflexia, convulsions, with toxicity exacerbated by thiazide diuretics, NSAIDs, and ACE inhibitors; hemodialysis indicated for serum lithium > 4.0 mEq/L or severe coma.",
                "Lithium is reabsorbed in the proximal tubule competitive with sodium; thiazide diuretics and volume depletion stimulate proximal sodium reabsorption, causing lithium retention and toxicity."
            ),
            "MCCQE": (
                "Digoxin toxicity: electrolyte triggers, arrhythmias, and Digoxin Immune Fab",
                "Hypokalemia sensitizing the heart to digoxin; presenting with gastrointestinal distress, yellow-green visual halos (xanthopsia), bidirectional ventricular tachycardia, treated with Digoxin Immune Fab.",
                "Digoxin inhibits myocardial Na+/K+ ATPase; hypokalemia increases digoxin binding to the enzyme, precipitating life-threatening ventricular ectopy and heart block."
            ),
            "FCPS": (
                "Warfarin-induced skin necrosis and Protein C deficiency pathophysiology",
                "Rapid reduction of short-half-life Protein C and Protein S levels before prothrombin and Factor X depletion, causing transient hypercoagulable state and microvascular dermal thrombosis.",
                "Warfarin loading without therapeutic heparin bridging in patients with hereditary Protein C deficiency triggers extensive thrombosis in subcutaneous fat microvasculature, causing necrotic bullae."
            ),
            "NLE": (
                "Adverse effects of aminoglycosides: nephrotoxicity (acute tubular necrosis) and ototoxicity",
                "Accumulation in renal proximal tubular epithelial cells causing non-oliguric acute kidney injury, and destructive irreversible apoptosis of cochlear and vestibular sensory hair cells.",
                "Aminoglycosides bind anionic phospholipids on the brush border; ototoxicity presents as high-frequency sensorineural hearing loss and vestibular ataxia; once-daily extended-interval dosing lowers toxicity."
            ),
            "NEET PG": (
                "Drug-induced Stevens-Johnson Syndrome / Toxic Epidermal Necrolysis: HLA alleles",
                "HLA-B*1502 screening prior to carbamazepine in Han Chinese/South Asians, and HLA-B*5701 prior to abacavir, to prevent life-threatening cell-mediated severe cutaneous adverse reactions.",
                "Specific HLA alleles present altered self-peptides to cytotoxic CD8+ T cells; granulysin and Fas-ligand release from activated T cells drives widespread epidermal keratinocyte apoptosis."
            ),
            "MRCP": (
                "Immune Checkpoint Inhibitor-mediated toxicities: colitis, hypophysitis, and myocarditis",
                "Monoclonal antibodies blocking PD-1, PD-L1, or CTLA-4 triggering severe autoimmune manifestations, managed with temporary drug withholding and high-dose systemic corticosteroids.",
                "Checkpoint inhibitors release physiological brakes on cytotoxic T-cell activation; immune-related adverse events can affect any organ, with myocarditis carrying a 30-50% mortality rate."
            ),
            "MRCEM": (
                "Malignant Hyperthermia: RYR1 mutation, inhalational anesthetics, and dantrolene",
                "Uncontrolled calcium release from the sarcoplasmic reticulum triggered by succinylcholine or volatile anesthetics (halothane, isoflurane), treated with immediate intravenous dantrolene sodium.",
                "Mutations in the ryanodine receptor (RYR1) cause massive muscle intracellular calcium influx, hypermetabolism, hypercapnia, severe metabolic acidosis, and rhabdomyolysis; dantrolene blocks RYR1 channels."
            ),
            "SMLE": (
                "Methotrexate toxicity, leucovorin (folinic acid) rescue, and pulmonary fibrosis",
                "Inhibition of dihydrofolate reductase causing stomatitis, bone marrow suppression, and hypersensitivity pneumonitis, prevented in oncological protocols with timely leucovorin calcium rescue.",
                "Leucovorin provides a fully reduced tetrahydrofolate bypassing the blocked dihydrofolate reductase enzyme, protecting normal mucosal and hematopoietic cells from fatal cytotoxicity."
            ),
            "HAAD / DHA": (
                "Statins and gemfibrozil co-administration: rhabdomyolysis and OATP1B1 inhibition",
                "Gemfibrozil inhibiting statin glucuronidation and OATP1B1 hepatic uptake, markedly elevating systemic statin concentrations and increasing the risk of rhabdomyolysis.",
                "If fibrate therapy is required alongside a statin for mixed hyperlipidemia, fenofibrate is preferred over gemfibrozil because fenofibrate does not significantly inhibit statin metabolism."
            ),
            "UHS MBBS": (
                "Pharmacological mechanism and reversal of neuromuscular blockade: Neostigmine vs Sugammadex",
                "Acetylcholinesterase inhibition by neostigmine (co-administered with glycopyrrolate to prevent bradycardia) versus selective encapsulation and inactivation of rocuronium by sugammadex.",
                "Neostigmine increases acetylcholine at the neuromuscular junction to outcompete non-depolarizing blockers; sugammadex forms a tight, water-soluble host-guest inclusion complex, rapidly reversing rocuronium."
            )
        }
    }
]
