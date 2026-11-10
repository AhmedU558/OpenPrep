import { CandidateSpec } from './types';

export const step1Batch28: CandidateSpec[] = [
  {
    "code": "op-c-s1-0676",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Major Depressive Disorder Monoamine & BDNF Neuroplasticity",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old woman with recurrent major depressive disorder is prescribed escitalopram, a selective serotonin reuptake inhibitor (SSRI). Pharmacokinetic evaluation demonstrates that synaptic serotonin concentrations in the brain rise rapidly within 4 to 6 hours of initial drug ingestion. However, the patient experiences no meaningful alleviation of depressive symptoms, psychomotor retardation, or anhedonia until approximately 4 to 6 weeks of continuous daily administration. Which of the following downstream cellular neuroadaptive events best accounts for this therapeutic latency of antidepressant efficacy?",
    "choices": [
      [
        "Chronic monoamine elevation drives desensitization of presynaptic 5-HT1A autoreceptors and stimulates CREB-mediated transcription of brain-derived neurotrophic factor (BDNF), promoting hippocampal neurogenesis and synaptic remodeling",
        "While SSRIs immediately block serotonin reuptake, acute activation of presynaptic 5-HT1A somatodendritic autoreceptors decreases serotonergic neuronal firing rate, blunting terminal release. Sustained administration over weeks leads to autoreceptor downregulation/desensitization, restoring firing and elevating synaptic 5-HT. Chronic signaling activates cyclic AMP response element-binding protein (CREB), upregulating BDNF and TrkB signaling, which stimulates neurogenesis and dendritic spine arborization in the hippocampus."
      ],
      [
        "Immediate saturation of postsynaptic 5-HT2C receptors inducing acute downregulation of hippocampal adenylyl cyclase activity",
        "Acute 5-HT2C stimulation causes initial anxiety and jitteriness (not antidepressant relief); downregulation occurs over time, but the key driver of clinical recovery is BDNF neuroplasticity."
      ],
      [
        "Gradual accumulation of parent drug in adipose tissue to reach a critical lipophilic therapeutic threshold",
        "Escitalopram reaches steady-state plasma concentrations within 1 week; therapeutic delay reflects neurobiological genomic and structural synaptic adaptations, not multi-week pharmacokinetic accumulation."
      ],
      [
        "Competitive displacement of vesicular monoamine transporter 2 (VMAT2) preventing catecholamine vesicle exocytosis",
        "VMAT2 inhibition is the mechanism of reserpine or deutetrabenazine, which depletes monoamines and precipitates severe depression, the exact opposite of SSRI action."
      ],
      [
        "Direct transcriptional repression of tryptophan hydroxylase-2 in the dorsal raphe nuclei",
        "Tryptophan hydroxylase is the rate-limiting enzyme in serotonin synthesis; repressing it would reduce serotonin production, worsening depressive pathophysiology."
      ]
    ],
    "shortestValidSolution": "SSRI 4-6 week delayed onset = 5-HT1A autoreceptor desensitization + CREB activation of BDNF neurogenesis in hippocampus.",
    "necessaryInference": "Contrast acute pharmacological reuptake inhibition (hours) with clinical therapeutic response (weeks): requires autoreceptor desensitization and CREB/BDNF hippocampal neuroplasticity.",
    "strongestDistractor": "Gradual accumulation of parent drug in adipose tissue to reach a critical lipophilic therapeutic threshold",
    "distractorExclusion": "Pharmacokinetic steady state is achieved in days; the multi-week clinical latency is explained by complex neuroplastic transcription and synaptic remodeling.",
    "citation": "Duman RS, Aghajanian GK. Synaptic dysfunction in depression: potential therapeutic targets. Science. 2012;338(6103):68-72. PMID: 23042884.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular neurobiology of antidepressant therapeutic latency, autoreceptor desensitization, and BDNF-driven neurogenesis.",
      "distractorExclusionNotes": "Distractors feature acute 5-HT2C saturation, pharmacokinetic adipose trapping, VMAT2 inhibition, and tryptophan hydroxylase repression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0677",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Lithium Carbonate Intracellular Signaling Mechanisms",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old man with bipolar I disorder is stabilized on long-term lithium carbonate maintenance therapy following an episode of acute mania with psychotic features. Longitudinal monitoring demonstrates complete suppression of manic relapses. In vitro neurobiological studies examining the molecular actions of therapeutic lithium concentrations in neuronal cultures demonstrate non-competitive inhibition of two key intracellular enzymes, leading to attenuation of phosphoinositide turnover and stabilization of neuronal survival pathways. Which of the following pairs of cellular enzymes is directly inhibited by therapeutic lithium?",
    "choices": [
      [
        "Inositol monophosphatase (IMPase), depleting intracellular free myo-inositol, and glycogen synthase kinase-3 beta (GSK-3beta), promoting beta-catenin neuroprotection",
        "Lithium exerts mood-stabilizing effects primarily through two biochemical targets: (1) Uncompetitive inhibition of inositol monophosphatase (IMPase) and inositol polyphosphate 1-phosphatase, preventing the regeneration of free myo-inositol from inositol phosphates (the 'inositol depletion hypothesis') and dampening overactive Gq-mediated signaling; and (2) Direct and indirect inhibition of glycogen synthase kinase-3 beta (GSK-3beta), which prevents beta-catenin phosphorylation and degradation, promoting neurogenesis, synaptogenesis, and cell survival."
      ],
      [
        "Tyrosine hydroxylase and monoamine oxidase-A, reducing central dopamine and norepinephrine synthesis",
        "Lithium does not directly inhibit tyrosine hydroxylase or monoamine oxidase; it modulates second-messenger signaling cascades downstream of G-protein coupled receptors."
      ],
      [
        "Voltage-gated Nav1.2 sodium channels and GABA-transaminase, elevating synaptic GABA concentrations",
        "Sodium channel blockade and GABA-transaminase inhibition define valproate (divalproex), not the elemental cation lithium."
      ],
      [
        "Type 4 phosphodiesterase (PDE-4) and cyclic AMP-dependent protein kinase A (PKA)",
        "PDE-4 inhibition elevates cAMP (mechanism of roflumilast or apremilast); lithium inhibits adenylyl cyclase (accounting for nephrogenic diabetes insipidus), not PDE-4."
      ],
      [
        "Histone deacetylase (HDAC) and calcium/calmodulin-dependent protein kinase II (CaMKII)",
        "Histone deacetylase inhibition is an epigenetic mechanism of valproic acid, distinct from lithium's IMPase and GSK-3beta inhibition."
      ]
    ],
    "shortestValidSolution": "Lithium mood stabilizer mechanism = Inositol monophosphatase (IMPase) depletion of myo-inositol + Glycogen synthase kinase-3 beta (GSK-3beta) inhibition.",
    "necessaryInference": "Identify the two molecular targets of lithium: IMPase (inositol depletion dampening Gq signaling) and GSK-3beta (promoting neuroprotective beta-catenin).",
    "strongestDistractor": "Histone deacetylase (HDAC) and calcium/calmodulin-dependent protein kinase II (CaMKII)",
    "distractorExclusion": "HDAC inhibition is the mechanism of valproic acid (another mood stabilizer), whereas lithium specifically targets IMPase and GSK-3beta.",
    "citation": "Malhi GS, Outhred T. Therapeutic Mechanisms of Lithium in Bipolar Disorder. CNS Drugs. 2016;30(6):507-526. PMID: 27150117.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact second-messenger enzymology of lithium (inositol depletion hypothesis, GSK-3beta inhibition) contrasting with other mood stabilizers.",
      "distractorExclusionNotes": "Distractors feature monoamine synthesis/MAO, valproate sodium/GABA-T, PDE-4 inhibitors, and HDAC epigenetic inhibitors.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0678",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Behavioral Health",
    "topic": "Schizophrenia Dopaminergic Circuit Pathways & Symptoms",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old college student is evaluated for a 9-month history of social withdrawal, emotional blunting, poor personal hygiene, and auditory hallucinations in which two unfamiliar voices argue about his thoughts. Functional neuroimaging studies and pharmacologic models of schizophrenia demonstrate that the distinct symptom domains of this disorder arise from anatomically segregated dopaminergic projection pathways originating in the midbrain ventral tegmental area (VTA). Which of the following neurochemical circuit alterations accurately maps these symptom domains to their corresponding anatomical pathways?",
    "choices": [
      [
        "Hyperactivity of the mesolimbic dopaminergic pathway projecting from the VTA to the nucleus accumbens drives positive symptoms (delusions, hallucinations), whereas hypofunction of the mesocortical pathway projecting from the VTA to the dorsolateral prefrontal cortex drives negative and cognitive symptoms",
        "The dopamine hypothesis of schizophrenia attributes symptoms to regional circuit imbalances: (1) Mesolimbic pathway (VTA to nucleus accumbens / ventral striatum) exhibits excessive D2 dopaminergic neurotransmission, generating positive psychotic symptoms (hallucinations, delusions, thought disorganization); (2) Mesocortical pathway (VTA to prefrontal cortex) exhibits dopaminergic hypofunction (D1 receptor deficit), driving negative symptoms (avolition, flat affect) and executive cognitive dysfunction."
      ],
      [
        "Hyperactivity of the nigrostriatal pathway projecting from the substantia nigra to the dorsal striatum drives auditory hallucinations",
        "Nigrostriatal pathway controls motor movement; hyperactivity causes chorea/tics, while D2 blockade causes extrapyramidal symptoms and parkinsonism, not auditory hallucinations."
      ],
      [
        "Hypofunction of the tuberoinfundibular pathway projecting from the arcuate nucleus to the anterior pituitary drives social withdrawal",
        "Tuberoinfundibular dopamine tonically inhibits prolactin secretion; hypofunction or D2 blockade causes hyperprolactinemia (galactorrhea, amenorrhea), not social withdrawal."
      ],
      [
        "Hyperactivity of the mesocortical pathway to the orbitofrontal cortex drives persecutory delusions",
        "The mesocortical pathway is hypofunctional in schizophrenia, producing negative and cognitive symptoms; positive symptoms (delusions) are driven by mesolimbic hyperactivity."
      ],
      [
        "Selective degeneration of cholinergic projection neurons in the nucleus basalis of Meynert drives emotional blunting",
        "Nucleus basalis of Meynert cholinergic loss occurs in Alzheimer disease (driving cognitive dementia), not primary schizophrenia dopaminergic imbalance."
      ]
    ],
    "shortestValidSolution": "Schizophrenia circuits = Mesolimbic hyperdopaminergia (positive symptoms) + Mesocortical hypodopaminergia (negative/cognitive symptoms).",
    "necessaryInference": "Map the 4 major dopamine pathways: mesolimbic (positive symptoms), mesocortical (negative/cognitive symptoms), nigrostriatal (motor/EPS), tuberoinfundibular (prolactin).",
    "strongestDistractor": "Hyperactivity of the nigrostriatal pathway projecting from the substantia nigra to the dorsal striatum drives auditory hallucinations",
    "distractorExclusion": "The nigrostriatal pathway regulates basal ganglia motor coordination, not sensory auditory hallucinations (which are driven by mesolimbic projections).",
    "citation": "Howes OD, Kapur S. The dopamine hypothesis of schizophrenia: evaluation of its status. Schizophr Bull. 2009;35(3):549-562. PMID: 19325164.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Demands exact neuroanatomical circuit mapping of dopamine pathways (mesolimbic, mesocortical, nigrostriatal, tuberoinfundibular) to specific psychopathological domains.",
      "distractorExclusionNotes": "Distractors confuse nigrostriatal motor function, tuberoinfundibular prolactin control, mesocortical hyperactivity, or Alzheimer cholinergic loss.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0679",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Clozapine Receptor Affinity & Hematologic Toxicity Monitoring",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old man with treatment-resistant schizophrenia who has failed adequate trials of risperidone and olanzapine is initiated on clozapine. Over the next 4 months, his persistent auditory hallucinations and paranoia improve markedly, and he exhibits no extrapyramidal symptoms, tremor, or tardive dyskinesia. However, mandatory weekly complete blood counts are performed as part of a national safety registry. During week 14, his routine CBC reveals: hemoglobin 13.8 g/dL, platelet count 210,000/mm3, and an absolute neutrophil count (ANC) of 850/mm3 (baseline 4,200/mm3). The medication is immediately discontinued. Which of the following receptor binding profiles explains why clozapine possesses superior antipsychotic efficacy with negligible extrapyramidal motor toxicity compared to first-generation neuroleptics?",
    "choices": [
      [
        "High-affinity antagonism of serotonin 5-HT2A and dopamine D4 receptors, combined with weak, rapidly dissociating antagonism of striatal dopamine D2 receptors",
        "Clozapine is the prototypic second-generation (atypical) antipsychotic. It exhibits potent antagonism of serotonin 5-HT2A receptors and dopamine D4 receptors, but has relatively low affinity and fast unbinding kinetics at striatal dopamine D2 receptors (<65% occupancy at therapeutic doses). 5-HT2A blockade increases local dopamine release in the nigrostriatal pathway, protecting against extrapyramidal symptoms (EPS) and tardive dyskinesia, but clozapine carries a ~1% risk of idiosyncratic life-threatening agranulocytosis (ANC < 500/mm3)."
      ],
      [
        "Irreversible covalent alkylation of dopamine D2 receptors in the anterior pituitary lactotrophs",
        "Clozapine does not irreversibly block D2 receptors and rarely causes hyperprolactinemia due to weak D2 occupancy."
      ],
      [
        "Selective agonism of central GABA-A receptor chloride channels in the mesolimbic ventral striatum",
        "GABA-A agonism is the mechanism of benzodiazepines, which are sedatives/anxiolytics, not antipsychotics."
      ],
      [
        "High-affinity blockade of vesicular monoamine transporter 1 (VMAT1) in peripheral sympathetic ganglia",
        "VMAT1 is expressed in peripheral neuroendocrine cells; central antipsychotic action depends on brain receptor binding, not VMAT1 inhibition."
      ],
      [
        "Potent competitive antagonism of N-methyl-D-aspartate (NMDA) glutamate receptors in the hippocampus",
        "NMDA antagonists (e.g., ketamine, PCP) produce psychotomimetic effects and worsen psychosis, the opposite of clozapine."
      ]
    ],
    "shortestValidSolution": "Clozapine efficacy without EPS = High 5-HT2A / D4 antagonism + Low/fast D2 antagonism (monitored for agranulocytosis).",
    "necessaryInference": "Detail the receptor pharmacology of clozapine: high 5-HT2A and D4 antagonism with low/loose D2 binding avoids EPS, while carrying a risk of agranulocytosis (ANC monitoring).",
    "strongestDistractor": "Irreversible covalent alkylation of dopamine D2 receptors in the anterior pituitary lactotrophs",
    "distractorExclusion": "Clozapine dissociates rapidly from D2 receptors and characteristically spares the tuberoinfundibular tract (minimal prolactin elevation), unlike irreversible or tight D2 blockers.",
    "citation": "Meltzer HY. Clozapine: balancing safety and efficacy. Lancet Psychiatry. 2016;3(10):896-904. PMID: 27502640.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests atypical antipsychotic receptor binding dynamics (5-HT2A/D4 vs D2 fast-off kinetics) and life-threatening hematologic toxicity (agranulocytosis).",
      "distractorExclusionNotes": "Distractors feature irreversible D2 alkylation, GABA-A agonism, VMAT1 inhibition, and NMDA antagonism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0680",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Neuroleptic Malignant Syndrome vs Serotonin Syndrome Neuromuscular Differences",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old man is brought to the emergency department in an acute state of confusion, agitation, and severe autonomic instability. His girlfriend states that over the past 3 days, he began taking an over-the-counter cough syrup containing dextromethorphan while continuing his prescribed daily sertraline and phenelzine. Vital signs demonstrate: blood pressure 178/104 mm Hg, heart rate 136/min, respiratory rate 26/min, and oral temperature 39.4\u00b0C (103\u00b0F). Physical examination reveals diaphoresis, dilated pupils (mydriasis), hyperactive bowel sounds with abdominal cramping, and continuous shivering. Neurological examination demonstrates 4+/4 hyperreflexia at the patellar and Achilles tendons, bilateral ankle clonus elicited with 6 beats of rhythmic oscillations, and ocular flutter. In contrast, muscle tone exhibits mild rigidity without lead-pipe resistance. Which of the following features most decisively distinguishes Serotonin Syndrome from Neuroleptic Malignant Syndrome (NMS)?",
    "choices": [
      [
        "The presence of spontaneous or inducible neuromuscular clonus, hyperreflexia, and mydriasis, contrasting with the extreme generalized 'lead-pipe' rigidity and hyporeflexia characteristic of NMS",
        "Serotonin syndrome (SS) and Neuroleptic Malignant Syndrome (NMS) both present with hyperthermia and autonomic instability. However, they are distinguished by distinct neuromuscular signs: SS features neuromuscular hyperactivity with hyperreflexia, spontaneous or inducible CLONUS (ocular, ankle), tremor, mydriasis, and hyperactive bowel sounds (diarrhea). In contrast, NMS (caused by central D2 blockade) characteristically features diffuse 'lead-pipe' muscle rigidity, hyporeflexia, normal pupil size, and normal/hypoactive bowel sounds."
      ],
      [
        "Marked elevation of core body temperature exceeding 40\u00b0C, which occurs exclusively in serotonin syndrome",
        "Severe hyperthermia (>40\u00b0C / 104\u00b0F) occurs in both severe serotonin syndrome and NMS as a result of sustained muscle hypermetabolism."
      ],
      [
        "Severe autonomic dysregulation including diaphoresis and labile blood pressure, which is absent in neuroleptic malignant syndrome",
        "Autonomic instability (labile blood pressure, tachycardia, diaphoresis, tachypnea) is a core diagnostic criterion present in both disorders."
      ],
      [
        "Dramatic elevation of serum creatine kinase and acute rhabdomyolysis, which is seen only in serotonin toxicity",
        "Rhabdomyolysis and severe CK elevation are prominent in both conditions due to sustained muscle contractions."
      ],
      [
        "Rapid onset of symptoms over months to years, contrasting with the acute peracute onset of neuroleptic malignant syndrome",
        "Serotonin syndrome typically develops hyperacutely within 24 hours of drug exposure/interaction; NMS typically evolves over several days to weeks."
      ]
    ],
    "shortestValidSolution": "Sertraline + phenelzine + dextromethorphan + clonus/hyperreflexia = Serotonin syndrome -> Clonus/hyperreflexia distinguishes it from NMS lead-pipe rigidity.",
    "necessaryInference": "Contrast the physical examination of toxic toxidromes: Serotonin Syndrome has clonus, hyperreflexia, mydriasis, hyperactive bowels; NMS has lead-pipe rigidity and hyporeflexia.",
    "strongestDistractor": "Marked elevation of core body temperature exceeding 40\u00b0C, which occurs exclusively in serotonin syndrome",
    "distractorExclusion": "Severe hyperthermia occurs in both disorders and cannot be used to differentiate between serotonin syndrome and neuroleptic malignant syndrome.",
    "citation": "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests bedside neuromuscular discrimination (clonus vs lead-pipe rigidity) between life-threatening neuropsychiatric toxidromes.",
      "distractorExclusionNotes": "Distractors feature shared traits (hyperthermia, autonomic instability, CK elevation) or reversed temporal onset.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0681",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Monoamine Oxidase Inhibitor Hypertensive Crisis & Tyramine Dynamics",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old woman with atypical depression characterized by hypersomnia, hyperphagia, and severe leaden paralysis is treated with tranylcypromine, an irreversible nonselective monoamine oxidase (MAO) inhibitor. During an anniversary celebration, she consumes aged gouda cheese, smoked charcuterie, and two glasses of imported red wine. Ninety minutes later, she develops an explosive, pounding occipital headache, profuse diaphoresis, palpitations, and blurred vision. Blood pressure is severely elevated at 224/128 mm Hg, and heart rate is 114/min. Physical examination reveals flushing, dilated pupils, and bilateral papilledema on funduscopy. Which of the following cellular mechanisms directly initiates this life-threatening hypertensive emergency?",
    "choices": [
      [
        "Dietary tyramine escapes intestinal and hepatic first-pass oxidative deamination, enters systemic circulation, and is transported into presynaptic sympathetic nerve terminals via NET, where it enters vesicles via VMAT and displaces massive amounts of norepinephrine into the synaptic cleft",
        "Dietary tyramine (abundant in aged cheeses, cured meats, and red wine) is normally metabolized in the gastrointestinal tract and liver by MAO-A and MAO-B. Irreversible MAO inhibition allows tyramine to enter systemic circulation. Circulating tyramine is taken up by peripheral sympathetic adrenergic nerve terminals via the norepinephrine transporter (NET). Inside the terminal, it is transported into synaptic storage vesicles via VMAT, displacing pre-stored norepinephrine into the cytosol. Cytosolic norepinephrine is forced out into the synaptic cleft via reverse NET transport, causing massive stimulation of vascular alpha-1 and cardiac beta-1 receptors (hypertensive crisis)."
      ],
      [
        "Direct agonism of vascular smooth muscle endothelin-1 type A (ETA) receptors inducing prolonged intracellular calcium release",
        "Tyramine is an indirect sympathomimetic amine; it does not bind or stimulate endothelin receptors."
      ],
      [
        "Competitive inhibition of endothelial nitric oxide synthase (eNOS) halting basal cyclic GMP-mediated vasodilation",
        "Tyramine does not inhibit eNOS; the severe hypertension is driven entirely by massive displacement of endogenous norepinephrine."
      ],
      [
        "Direct stimulation of postganglionic parasympathetic muscarinic M2 receptors on coronary vascular endothelium",
        "Muscarinic M2 stimulation causes bradycardia and vasodilation, opposite to the severe hypertension and tachycardia seen here."
      ],
      [
        "Allosteric activation of angiotensin-converting enzyme in the pulmonary vascular bed, accelerating angiotensin II synthesis",
        "Tyramine has no direct effect on ACE or the renin-angiotensin-aldosterone axis."
      ]
    ],
    "shortestValidSolution": "Tranylcypromine (MAOI) + aged cheese/wine + BP 224/128 = Hypertensive crisis -> Tyramine escapes MAO breakdown and displaces norepinephrine from vesicles.",
    "necessaryInference": "Explain the indirect sympathomimetic action of tyramine: uninhibited dietary tyramine enters sympathetic terminals via NET and displaces norepinephrine into the synapse.",
    "strongestDistractor": "Competitive inhibition of endothelial nitric oxide synthase (eNOS) halting basal cyclic GMP-mediated vasodilation",
    "distractorExclusion": "Tyramine does not block eNOS; it acts as a classic indirect sympathomimetic amine displacing catecholamines from storage vesicles.",
    "citation": "Gillman PK. A reassessment of the safety profile of monoamine oxidase inhibitors: elucidating dyadic interactions between MAOIs and serotonergic drugs. Lancet Psychiatry. 2018;5(10):835-842. PMID: 30206001.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular physiology of indirect sympathomimetic displacement (VMAT/NET reverse transport) during MAOI 'cheese effect'.",
      "distractorExclusionNotes": "Distractors feature endothelin-1, eNOS inhibition, muscarinic M2 stimulation, and ACE activation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0682",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Bupropion Neurotransmitter Reuptake & Seizure Contraindications",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old female college student with major depressive disorder presents to discuss pharmacotherapy options. She expresses severe apprehension regarding antidepressant-induced sexual dysfunction and weight gain, which caused her to discontinue sertraline 6 months ago. When questioned regarding medical history, she admits to recurrent episodes of binge eating followed by self-induced vomiting twice weekly for the past 2 years (bulimia nervosa). Physical examination demonstrates bilateral parotid gland enlargement and dental enamel erosion on the lingual surfaces of the maxillary incisors. Why is bupropion strictly contraindicated in this patient despite its favorable profile of zero sexual side effects and weight neutrality?",
    "choices": [
      [
        "Bupropion inhibits norepinephrine and dopamine reuptake without serotonergic activity, but significantly lowers the seizure threshold, predisposing patients with active eating disorders and electrolyte instability to generalized tonic-clonic seizures",
        "Bupropion is a norepinephrine-dopamine reuptake inhibitor (NDRI). Because it lacks serotonergic activity, it avoids sexual dysfunction and weight gain. However, bupropion significantly lowers the seizure threshold in a dose-dependent manner. In patients with bulimia nervosa or anorexia nervosa, purging behaviors produce episodic electrolyte disturbances (hypokalemia, hypochloremic alkalosis) and neuroendocrine dysregulation that drastically amplify the risk of generalized seizures, making active eating disorders a strict absolute contraindication."
      ],
      [
        "Bupropion acts as a potent 5-HT2C receptor agonist that stimulates the hypothalamic satiety center, inducing life-threatening anorexia cachexia",
        "Bupropion does not stimulate 5-HT2C receptors (it lacks serotonergic action); it promotes mild weight loss via dopaminergic and noradrenergic appetite suppression, not cachexia."
      ],
      [
        "Inhibition of the gastric H+/K+-ATPase proton pump accelerates mucosal atrophy in patients with recurrent self-induced emesis",
        "Bupropion does not inhibit proton pumps; proton pump inhibitors (e.g., omeprazole) act on gastric parietal cells."
      ],
      [
        "Competitive antagonism of salivary gland muscarinic M3 receptors causes permanent xerostomia and accelerated dental caries",
        "Bupropion has negligible anticholinergic activity at therapeutic doses and does not cause permanent salivary damage."
      ],
      [
        "Direct inhibition of hepatic glucuronidation leads to acute toxic accumulation of potassium-sparing diuretics",
        "Bupropion is metabolized via CYP2B6; it is not a direct inhibitor of glucuronidation."
      ]
    ],
    "shortestValidSolution": "Depressed patient + bulimia (purging/enamel erosion) = Bupropion strictly contraindicated due to increased seizure risk.",
    "necessaryInference": "Recognize the major black-box safety contraindication for bupropion: active bulimia or anorexia nervosa due to marked elevation of seizure risk.",
    "strongestDistractor": "Bupropion acts as a potent 5-HT2C receptor agonist that stimulates the hypothalamic satiety center, inducing life-threatening anorexia cachexia",
    "distractorExclusion": "Bupropion has zero direct serotonergic activity; its strict contraindication in eating disorders is driven entirely by lowered seizure threshold.",
    "citation": "Stahl SM, et al. A Review of the Neurobiology of Bupropion. Prim Care Companion CNS Disord. 2004;6(4):159-166. PMID: 15361920.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical contraindications based on neuropharmacology (NDRI mechanism) and medical complications of bulimia (seizure risk).",
      "distractorExclusionNotes": "Distractors feature 5-HT2C agonism, gastric H+/K+-ATPase, muscarinic M3 antagonism, and glucuronidation inhibition.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0683",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Trazodone Receptor Pharmacology & Priapism Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man with major depressive disorder and severe sleep-onset insomnia is prescribed low-dose trazodone (50 mg) at bedtime. Three weeks later, he presents to the emergency department with a painful, persistent penile erection that has lasted for more than 5 hours unrelated to sexual stimulation (ischemic priapism). Emergent corporal blood gas analysis confirms low oxygen, high carbon dioxide, and severe acidosis, requiring intracavernosal phenylephrine aspiration and irrigation. Which of the following receptor binding affinities of trazodone is directly responsible for impairing corporal venous outflow and precipitating this condition?",
    "choices": [
      [
        "Antagonism of peripheral vascular alpha-1 adrenergic receptors, preventing sympathetic vasoconstriction and detumescence of the corpus cavernosum",
        "Trazodone is a serotonin antagonist and reuptake inhibitor (SARI). It is a potent antagonist at serotonin 5-HT2A receptors and histamine H1 receptors (which accounts for its sedative and hypnotic efficacy at low doses), but also possesses potent antagonistic affinity at peripheral alpha-1 adrenergic receptors. Blockade of alpha-1 receptors prevents normal sympathetic vasoconstriction of cavernous helicine arterioles and corporal trabeculae, preventing venous outflow and causing ischemic, low-flow priapism."
      ],
      [
        "Potent agonism of cavernous endothelial muscarinic M3 receptors stimulating excessive nitric oxide release",
        "Trazodone is an antagonist (not agonist) and has negligible affinity for muscarinic receptors; priapism is mediated by alpha-1 adrenergic blockade."
      ],
      [
        "Selective inhibition of type 5 phosphodiesterase (PDE-5) within smooth muscle of the corpora cavernosa",
        "PDE-5 inhibition is the mechanism of sildenafil/tadalafil, which can rarely cause priapism, but trazodone acts via alpha-1 adrenergic antagonism."
      ],
      [
        "Competitive antagonism of central dopamine D2 receptors in the medial preoptic hypothalamic nucleus",
        "D2 blockade causes hyperprolactinemia and sexual dysfunction (erectile failure), not prolonged ischemic priapism."
      ],
      [
        "Direct activation of voltage-gated L-type calcium channels in vascular smooth muscle membranes",
        "L-type calcium channel activation would cause vasoconstriction and detumescence, opposite to the prolonged engorgement of priapism."
      ]
    ],
    "shortestValidSolution": "Trazodone + painful prolonged erection (>5h) = Priapism -> Alpha-1 adrenergic receptor blockade in corpora cavernosa.",
    "necessaryInference": "Map trazodone's adverse effects to receptor profiles: sedation = H1/5-HT2A blockade; priapism = peripheral alpha-1 adrenergic blockade.",
    "strongestDistractor": "Selective inhibition of type 5 phosphodiesterase (PDE-5) within smooth muscle of the corpora cavernosa",
    "distractorExclusion": "PDE-5 inhibitors elevate cGMP directly; trazodone does not inhibit PDE-5, but causes priapism via potent peripheral alpha-1 adrenergic antagonism.",
    "citation": "Stahl SM. Mechanism of action of trazodone: a multifunctional drug. CNS Spectr. 2009;14(10):536-546. PMID: 19890234.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests multi-receptor pharmacology (SARI profile, H1 sedation, alpha-1 antagonism) and urological adverse emergencies (priapism).",
      "distractorExclusionNotes": "Distractors feature muscarinic M3 stimulation, PDE-5 inhibition, dopamine D2 blockade, and calcium channel activation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0684",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Buspirone 5-HT1A Partial Agonism in Generalized Anxiety",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old commercial airline pilot presents with a 7-month history of excessive, uncontrollable worry regarding his finances, health, and family relationships, accompanied by muscle tension, irritability, and restlessness (generalized anxiety disorder). He emphasizes that because of federal aviation regulations and occupational safety, he cannot take any medication that produces sedation, cognitive impairment, psychomotor slowing, or physical dependence, and he must avoid any drug that interacts with alcohol. The physician prescribes oral buspirone. Which of the following neurochemical mechanisms accounts for the anxiolytic efficacy of this medication in the absence of sedation or dependence?",
    "choices": [
      [
        "Partial agonism at presynaptic somatodendritic and postsynaptic 5-HT1A serotonin receptors without any direct binding or allosteric modulation of the GABA-A receptor complex",
        "Buspirone is a non-benzodiazepine anxiolytic indicated for generalized anxiety disorder. It acts as a high-affinity partial agonist at both presynaptic somatodendritic 5-HT1A autoreceptors (inhibiting excessive serotonin firing) and postsynaptic 5-HT1A receptors in the hippocampus and cortex. Because it has zero affinity for the GABA-A receptor complex, buspirone does not produce sedation, hypnosis, muscle relaxation, motor impairment, or physical dependence, and does not interact with alcohol."
      ],
      [
        "Positive allosteric modulation of GABA-A receptors by increasing the opening frequency of chloride channels",
        "Increasing GABA-A channel opening frequency is the mechanism of benzodiazepines, which cause sedation, motor impairment, and tolerance/dependence."
      ],
      [
        "Competitive antagonism of central histamine H1 and muscarinic M1 receptors in the ascending reticular activating system",
        "H1 and M1 antagonism produces profound sedation and anticholinergic side effects (e.g., diphenhydramine, hydroxyzine), prohibited in pilots."
      ],
      [
        "Selective blockade of voltage-gated P/Q-type calcium channels on presynaptic nociceptive afferents",
        "P/Q or N-type calcium channel modulation is the mechanism of gabapentinoids (binding alpha-2-delta), which produce sedation and dizziness."
      ],
      [
        "Irreversible inhibition of monoamine oxidase-A elevating synaptic norepinephrine and serotonin",
        "MAO-A inhibitors cause hypertensive crises with tyramine and serotonin syndrome; they are not used as first-line non-sedating anxiolytics."
      ]
    ],
    "shortestValidSolution": "Anxiety in airline pilot + non-sedating + no dependence = Buspirone -> 5-HT1A partial agonist with no GABA activity.",
    "necessaryInference": "Contrast buspirone from benzodiazepines: buspirone is a 5-HT1A partial agonist with zero GABA activity, producing no sedation, cognitive impairment, or dependence.",
    "strongestDistractor": "Positive allosteric modulation of GABA-A receptors by increasing the opening frequency of chloride channels",
    "distractorExclusion": "GABA-A frequency modulation defines benzodiazepines (e.g., diazepam), which cause sedation, psychomotor impairment, and addiction, making them disqualified for aviation pilots.",
    "citation": "Loane C, Politis M. Buspirone: what is it all about? Brain Res. 2012;1461:111-118. PMID: 22608078.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates non-sedating serotonergic anxiolytics from GABAergic sedative-hypnotics in occupational safety contexts.",
      "distractorExclusionNotes": "Distractors feature benzodiazepines (GABA-A frequency), antihistamines (H1/M1), gabapentinoids, and MAO inhibitors.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0685",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Behavioral Health",
    "topic": "Panic Disorder Amygdala Hyperreactivity & CO2 Hypersensitivity",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old medical resident presents with recurrent, unprovoked episodes of intense fear and physical distress that peak within 8 minutes. During these attacks, she experiences palpitations, diaphoresis, shortness of breath, trembling, feelings of impending doom, and paresthesias around her mouth and fingers. Laboratory and cardiac evaluations are completely normal. During an experimental challenge test, the patient is administered an intravenous infusion of 0.5 M sodium lactate or inhalation of 35% carbon dioxide (CO2). Within 3 minutes, this challenge reliably triggers a full-blown panic attack accompanied by hyperventilation. Which of the following neuroanatomical circuits is hypersensitive to these metabolic chemosensory triggers in patients with panic disorder?",
    "choices": [
      [
        "Basolateral amygdala and medullary brainstem respiratory centers (locus coeruleus and parabrachial nucleus) demonstrating an abnormally low threshold for suffocation false-alarm triggers",
        "Klein's suffocation false-alarm theory posits that panic disorder involves hypersensitive medullary chemoreceptors (measuring PaCO2 and brainstem pH) that project to the locus coeruleus and basolateral amygdala. Intravenous sodium lactate or inhaled CO2 elevates central proton concentrations, erroneously triggering an evolved primitive 'suffocation alarm'. This stimulates the amygdala and locus coeruleus (noradrenergic hyperactivation), producing panic, intense dyspnea, and hyperventilation (which causes respiratory alkalosis and perioral paresthesias)."
      ],
      [
        "Substantia nigra pars compacta projecting to the putamen, mediating motor restlessness",
        "The substantia nigra pars compacta regulates basal ganglia motor coordination; its hyperactivity causes chorea, not autonomic panic paroxysms."
      ],
      [
        "Nucleus basalis of Meynert projecting to the entorhinal cortex, mediating memory retrieval",
        "Nucleus basalis provides cholinergic innervation for memory consolidation, degenerating in Alzheimer disease, unrelated to CO2-induced panic."
      ],
      [
        "Ventral tegmental area projecting to the nucleus accumbens, driving reward craving",
        "The VTA-nucleus accumbens circuit mediates reward, reinforcement, and addiction, not panic anxiety or suffocation false-alarms."
      ],
      [
        "Suprachiasmatic nucleus projecting to the pineal gland, controlling melatonin secretion",
        "The suprachiasmatic nucleus regulates circadian rhythm and melatonin release, not acute panic paroxysms."
      ]
    ],
    "shortestValidSolution": "Panic attack triggered by sodium lactate/CO2 = Panic disorder -> Hypersensitive suffocation alarm in basolateral amygdala + brainstem locus coeruleus.",
    "necessaryInference": "Identify the neurobiology of panic provocation: sodium lactate and CO2 trigger an exaggerated suffocation false alarm in the amygdala and brainstem respiratory centers.",
    "strongestDistractor": "Ventral tegmental area projecting to the nucleus accumbens, driving reward craving",
    "distractorExclusion": "The mesolimbic reward pathway governs pleasure and reinforcement, whereas panic attacks are driven by amygdala-brainstem noradrenergic circuits.",
    "citation": "Gorman JM, et al. A neuroanatomical hypothesis for panic disorder, revised. Am J Psychiatry. 2000;157(4):493-505. PMID: 10739783.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests physiological theories of anxiety (suffocation false alarm, lactate/CO2 challenge) mapped to amygdala and brainstem nuclei.",
      "distractorExclusionNotes": "Distractors feature substantia nigra, nucleus basalis, VTA reward, and suprachiasmatic circadian rhythm.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0686",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Behavioral Health",
    "topic": "Obsessive-Compulsive Disorder Cortico-Striato-Thalamo-Cortical Circuit",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man presents with distressing, intrusive thoughts that his hands are contaminated with lethal microbes whenever he touches doorknobs or books. To neutralize this anxiety, he washes his hands with scalding water and bleach for exactly 45 minutes up to 15 times daily, causing severe erythema and fissuring. He recognizes that his behavior is excessive and irrational (good insight), but experiences unbearable tension if prevented from washing. Functional MRI (fMRI) studies performed while the patient is exposed to contaminated objects demonstrate localized hyperactivity and increased glucose metabolism in a specific subcortical and cortical loop. Which of the following anatomical structures forms the core hyperactive circuit in obsessive-compulsive disorder (OCD)?",
    "choices": [
      [
        "Orbitofrontal cortex, anterior cingulate cortex, and head of the caudate nucleus within the cortico-striato-thalamo-cortical (CSTC) loop",
        "Obsessive-compulsive disorder (OCD) is driven by dysfunction within the cortico-striato-thalamo-cortical (CSTC) circuit. Functional neuroimaging consistently reveals hyperactivity in the orbitofrontal cortex (OFC, generating intrusive error signals), anterior cingulate cortex (ACC, driving emotional distress), and head of the caudate nucleus (striatum, failing to filter or gate repetitive behavioral programs). First-line treatments (high-dose SSRIs and exposure and response prevention [ERP]) normalize metabolism in this specific loop."
      ],
      [
        "Hippocampal CA1 pyramidal neurons and entorhinal cortex within the Papez circuit",
        "The Papez circuit (hippocampus, fornix, mammillary bodies, anterior thalamus) mediates episodic memory encoding and consolidation, not obsessive-compulsive checking/washing loops."
      ],
      [
        "Subthalamic nucleus and globus pallidus internus within the hyperdirect basal ganglia motor arrest loop",
        "The subthalamic nucleus-GPi circuit mediates broad motor inhibition and is targeted by deep brain stimulation for Parkinson disease tremor, not OCD."
      ],
      [
        "Locus coeruleus noradrenergic projections terminating in the thoracic intermediolateral horn",
        "Locus coeruleus noradrenergic pathways mediate systemic sympathetic fight-or-flight responses in panic disorder, distinct from the CSTC loop of OCD."
      ],
      [
        "Lateral hypothalamic orexinergic neurons projecting to the ventral tegmental area",
        "Lateral hypothalamic orexin regulates wakefulness, arousal, and feeding, not obsessive repetitive rituals."
      ]
    ],
    "shortestValidSolution": "Obsessions + washing rituals + insight = OCD -> Hyperactive cortico-striato-thalamo-cortical (CSTC) loop: orbitofrontal cortex, ACC, and caudate.",
    "necessaryInference": "Map the specific neuroimaging circuit of OCD: the CSTC loop involving orbitofrontal cortex, anterior cingulate cortex, and caudate nucleus.",
    "strongestDistractor": "Hippocampal CA1 pyramidal neurons and entorhinal cortex within the Papez circuit",
    "distractorExclusion": "The Papez circuit governs episodic memory consolidation, whereas OCD is specifically linked to the CSTC loop (orbitofrontal cortex and caudate).",
    "citation": "Pauls DL, et al. Obsessive-compulsive disorder: an integrative genetic and neurobiological perspective. Nat Rev Neurosci. 2014;15(6):410-424. PMID: 24840803.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests neuroimaging functional circuit anatomy (CSTC loop: OFC, anterior cingulate, caudate) in obsessive-compulsive pathology.",
      "distractorExclusionNotes": "Distractors feature Papez memory circuit, subthalamic motor arrest loop, locus coeruleus sympathetic path, and orexin arousal.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0687",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Post-Traumatic Stress Disorder Fear Circuitry & Prazosin Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old military veteran presents with severe insomnia, hypervigilance, an exaggerated startle response, and recurrent, terrifying nightmares depicting combat trauma experienced 2 years ago in an overseas combat zone. During these nightmares, he frequently awakens drenched in sweat with a pounding heart rate and an intense sensation of physical threat. Psychiatric evaluation establishes the diagnosis of post-traumatic stress disorder (PTSD). In addition to trauma-focused psychotherapy, the psychiatrist prescribes bedtime prazosin. Which of the following neurobiological mechanisms accounts for the efficacy of prazosin in reducing trauma-related nightmares in PTSD?",
    "choices": [
      [
        "Antagonism of central postsynaptic alpha-1 adrenergic receptors in the prefrontal cortex and amygdala, dampening excessive noradrenergic arousal and sleep disruption",
        "PTSD is characterized by hyperactive noradrenergic signaling from the locus coeruleus combined with impaired top-down inhibition of the amygdala by the ventromedial prefrontal cortex. Excessive nocturnal norepinephrine release acts on postsynaptic alpha-1 adrenergic receptors, disrupting REM sleep, fragmenting sleep architecture, and triggering intense autonomic trauma nightmares. Prazosin is a lipophilic alpha-1 adrenergic antagonist that crosses the blood-brain barrier to selectively block these central receptors, suppressing trauma nightmares."
      ],
      [
        "Selective stimulation of presynaptic alpha-2 adrenergic autoreceptors inhibiting locus coeruleus firing",
        "Stimulation of presynaptic alpha-2 receptors is the mechanism of clonidine or guanfacine, whereas prazosin is a selective postsynaptic alpha-1 antagonist."
      ],
      [
        "Direct positive allosteric modulation of GABA-A receptor chloride channels in the thalamic reticular nucleus",
        "GABA-A positive allosteric modulation is the mechanism of benzodiazepines and Z-drugs; benzodiazepines do not specifically suppress PTSD nightmares and can impair fear extinction."
      ],
      [
        "Competitive antagonism of orexin-1 and orexin-2 receptors in the lateral hypothalamus",
        "Dual orexin receptor antagonism is the mechanism of suvorexant and lemborexant (insomnia agents), not prazosin."
      ],
      [
        "Selective antagonism of serotonin 5-HT2A receptors in the suprachiasmatic nucleus",
        "5-HT2A antagonism is a mechanism of trazodone or atypical antipsychotics, distinct from prazosin's pure alpha-1 adrenergic blockade."
      ]
    ],
    "shortestValidSolution": "PTSD combat nightmares + hypervigilance = Prazosin -> Central alpha-1 adrenergic receptor antagonist dampens noradrenergic arousal.",
    "necessaryInference": "Connect PTSD neurocircuitry to pharmacology: hyperactive noradrenergic tone drives nightmares; prazosin blocks central alpha-1 adrenergic receptors.",
    "strongestDistractor": "Selective stimulation of presynaptic alpha-2 adrenergic autoreceptors inhibiting locus coeruleus firing",
    "distractorExclusion": "Presynaptic alpha-2 agonism defines clonidine; prazosin is a selective postsynaptic alpha-1 adrenergic antagonist.",
    "citation": "Raskind MA, et al. A Trial of Prazosin for Combat Trauma PTSD with Nightmares in Active-Duty Soldiers. Am J Psychiatry. 2013;170(9):1003-1010. PMID: 23846759.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests neurobiology of fear extinction and autonomic nocturnal hyperactivity in PTSD treated with centrally active alpha-1 antagonists.",
      "distractorExclusionNotes": "Distractors feature alpha-2 agonists (clonidine), GABA-A modulators, orexin antagonists, and 5-HT2A antagonists.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0688",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Alcohol Withdrawal Neuroadaptation & Benzodiazepine Cross-Tolerance",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man with severe alcohol use disorder is admitted to the hospital for elective repair of an inguinal hernia. His last drink was 36 hours prior to admission. On postoperative day 1, he becomes increasingly tremulous, diaphoretic, agitated, and tachycardic with a heart rate of 124/min and blood pressure of 172/106 mm Hg. Physical examination reveals coarse bilateral hand tremors, hyperreflexia, and visual hallucinations of insects crawling on the wall (delirium tremens). Intravenous diazepam is administered repeatedly until clinical sedation is achieved. Which of the following chronic receptor neuroadaptations explains the severe excitotoxicity and autonomic hyperactivity triggered by abrupt alcohol cessation in this patient?",
    "choices": [
      [
        "Downregulation and conformational desensitization of inhibitory GABA-A receptors accompanied by compensatory transcriptional upregulation of excitatory NMDA glutamate receptors",
        "Chronic ethanol exposure produces significant neuroadaptation: ethanol acts as a positive allosteric modulator of GABA-A receptors and an antagonist of NMDA receptors. To compensate for chronic depression, the brain downregulates and uncouples GABA-A receptors while upregulating postsynaptic NMDA glutamate receptors. Upon abrupt alcohol cessation, loss of GABAergic inhibition combined with excessive glutamate-NMDA receptor activation causes severe central nervous system hyperexcitability, seizures, autonomic instability, and delirium tremens, managed by benzodiazepines (GABA-A agonists)."
      ],
      [
        "Upregulation of presynaptic alpha-2 adrenergic autoreceptors in the locus coeruleus dampening central norepinephrine release",
        "Alpha-2 receptors are downregulated or overwhelmed; locus coeruleus firing is dramatically increased, producing marked tachycardia and hypertension."
      ],
      [
        "Selective destruction of dopaminergic neurons within the substantia nigra pars compacta",
        "Substantia nigra degeneration causes Parkinson disease; alcohol withdrawal is an acute functional receptor unbalance, not nigrostriatal cell death."
      ],
      [
        "Loss-of-function mutation in nicotinic acetylcholine receptor alpha-7 subunits in the autonomic ganglia",
        "Alcohol withdrawal does not involve genetic mutation of nicotinic receptors; it involves functional neuroplastic adaptation of GABA and glutamate circuits."
      ],
      [
        "Direct transcriptional activation of mu-opioid receptors in the periaqueductal gray",
        "Opioid receptors do not drive the acute delirium and seizures of alcohol withdrawal; the core mechanism is GABA-A/NMDA receptor unbalance."
      ]
    ],
    "shortestValidSolution": "Alcohol cessation + tremors + autonomic hyperactivity + delirium tremens = Withdrawal -> GABA-A downregulation + NMDA upregulation.",
    "necessaryInference": "Detail the opposing neuroadaptations in chronic alcohol dependence: chronic ethanol downregulates GABA-A receptors and upregulates NMDA receptors, leading to excitotoxicity upon withdrawal.",
    "strongestDistractor": "Upregulation of presynaptic alpha-2 adrenergic autoreceptors in the locus coeruleus dampening central norepinephrine release",
    "distractorExclusion": "Locus coeruleus noradrenergic outflow is massively increased during withdrawal; alpha-2 upregulation would dampen sympathetic tone, the exact opposite of reality.",
    "citation": "Schuckit MA. Recognition and management of withdrawal delirium (delirium tremens). N Engl J Med. 2014;371(22):2109-2113. PMID: 25427113.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular neuroplasticity and receptor counter-adaptation (GABA-A vs NMDA) in sedative-hypnotic tolerance and withdrawal.",
      "distractorExclusionNotes": "Distractors feature alpha-2 upregulation, substantia nigra destruction, nicotinic mutations, and opioid receptor activation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0689",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Behavioral Health",
    "topic": "Wernicke Encephalopathy Thiamine Pyrophosphate Enzyme Kinetics",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old malnourished man with chronic alcohol dependence is brought to the emergency department in an obtunded state. Vital signs demonstrate blood pressure 104/64 mm Hg and heart rate 98/min. Neurological examination reveals marked horizontal and vertical nystagmus, bilateral sixth cranial nerve (abducens) palsies with complete inability to abduct either eye, severe truncal ataxia that prevents standing or walking, and global disorientation to time and place (the classic triad of Wernicke encephalopathy). Before administering intravenous glucose, the emergency physician promptly administers high-dose intravenous thiamine. Which of the following biochemical reactions is directly dependent on thiamine pyrophosphate (TPP) as a mandatory catalytic cofactor?",
    "choices": [
      [
        "Oxidative decarboxylation of alpha-ketoglutarate to succinyl-CoA catalyzed by alpha-ketoglutarate dehydrogenase in the citric acid cycle",
        "Thiamine pyrophosphate (TPP, vitamin B1) is a vital cofactor for four key multienzyme complexes: (1) Pyruvate dehydrogenase (converting pyruvate to acetyl-CoA); (2) Alpha-ketoglutarate dehydrogenase (converting alpha-ketoglutarate to succinyl-CoA in the TCA cycle); (3) Transketolase (in the non-oxidative branch of the pentose phosphate pathway); and (4) Branched-chain alpha-ketoacid dehydrogenase (catabolizing leucine, isoleucine, valine). Administering glucose without thiamine depletes residual TPP, halting ATP production and precipitating acute metabolic necrosis in vulnerable structures (mammillary bodies and periaqueductal gray)."
      ],
      [
        "Carboxylation of pyruvate to oxaloacetate catalyzed by pyruvate carboxylase in gluconeogenesis",
        "Pyruvate carboxylase requires biotin (vitamin B7), ATP, and CO2, not thiamine pyrophosphate."
      ],
      [
        "Transamination of oxaloacetate and glutamate to aspartate and alpha-ketoglutarate by aspartate aminotransferase",
        "Aminotransferases (AST, ALT) require pyridoxal phosphate (PLP, vitamin B6) as a catalytic cofactor, not thiamine."
      ],
      [
        "Conversion of methylmalonyl-CoA to succinyl-CoA catalyzed by methylmalonyl-CoA mutase",
        "Methylmalonyl-CoA mutase requires 5'-deoxyadenosylcobalamin (vitamin B12), not thiamine."
      ],
      [
        "Oxidation of succinate to fumarate catalyzed by succinate dehydrogenase in the inner mitochondrial membrane",
        "Succinate dehydrogenase (Complex II) requires flavin adenine dinucleotide (FAD, vitamin B2), not thiamine pyrophosphate."
      ]
    ],
    "shortestValidSolution": "Alcoholic + ataxia + ophthalmoplegia + confusion = Wernicke encephalopathy -> TPP cofactor for alpha-ketoglutarate dehydrogenase / PDH / transketolase.",
    "necessaryInference": "Map TPP-dependent enzymes: Pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase, transketolase, and branched-chain alpha-ketoacid dehydrogenase.",
    "strongestDistractor": "Carboxylation of pyruvate to oxaloacetate catalyzed by pyruvate carboxylase in gluconeogenesis",
    "distractorExclusion": "Pyruvate carboxylase requires biotin (B7), whereas thiamine (B1) is required for decarboxylation reactions (alpha-ketoglutarate dehydrogenase, PDH).",
    "citation": "Sechi G, Serra A. Wernicke's encephalopathy: new clinical settings and recent advances in diagnosis and management. Lancet Neurol. 2007;6(5):442-455. PMID: 17434099.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests vitamin B1 enzymology (alpha-ketoglutarate dehydrogenase, transketolase) in metabolic encephalopathy.",
      "distractorExclusionNotes": "Distractors feature biotin (pyruvate carboxylase), B6 PLP (AST), B12 (methylmalonyl mutase), and B2 FAD (succinate dehydrogenase).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0690",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Opioid Overdose Mu-Opioid Gi Signaling & Respiratory Depression",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is brought to the emergency department after being found unresponsive in a public restroom with an empty syringe nearby. Physical examination demonstrates pinpoint pupils (miosis, 1 mm bilaterally), cold clammy skin, and cyanosis. Vital signs reveal blood pressure 84/52 mm Hg, heart rate 48/min, and a respiratory rate of 4 breaths/min with shallow excursions. Arterial blood gas shows: pH 7.12, PaCO2 74 mm Hg, and PaO2 52 mm Hg, confirming severe acute hypoxemic and hypercapnic respiratory failure. Immediate intravenous administration of naloxone produces restoration of spontaneous breathing at 18 breaths/min and pupil dilation within 90 seconds. Which of the following intracellular signaling events is directly triggered by mu-opioid receptor activation in respiratory pacemaker neurons of the pre-B\u00f6tzinger complex?",
    "choices": [
      [
        "Coupling to inhibitory G proteins (Gi/o) inhibits adenylyl cyclase, lowers intracellular cAMP, opens G protein-coupled inwardly rectifying K+ channels (GIRK) causing hyperpolarization, and inhibits presynaptic voltage-gated Ca2+ channels",
        "Mu-opioid receptors are G protein-coupled receptors linked to pertussis toxin-sensitive Gi/o proteins. Ligand binding activates Gi/o, which: (1) Inhibits adenylyl cyclase, lowering intracellular cAMP; (2) Stimulates G-beta-gamma subunits that directly open inwardly rectifying potassium channels (GIRK), hyperpolarizing postsynaptic neuronal membranes; and (3) Closes voltage-gated N-type and P/Q-type calcium channels on presynaptic terminals, blocking neurotransmitter exocytosis. In the pre-B\u00f6tzinger complex, this halts respiratory rhythm generation."
      ],
      [
        "Coupling to Gq stimulates phospholipase C-beta, hydrolyzing PIP2 to IP3 and elevating intracellular calcium oscillations",
        "Gq signaling mediates excitatory smooth muscle contraction and neuronal depolarization, opposite to the profound inhibitory hyperpolarization of mu-opioid activation."
      ],
      [
        "Direct opening of ligand-gated chloride channels causing rapid cell hyperpolarization independent of G proteins",
        "Direct ligand-gated chloride flux is the mechanism of ionotropic GABA-A and glycine receptors, whereas opioid receptors are metabotropic GPCRs."
      ],
      [
        "Coupling to Gs stimulates adenylyl cyclase, elevating intracellular cAMP and activating protein kinase A",
        "Gs stimulation increases cAMP and promotes neuronal excitation, which is the mechanism of beta-adrenergic or histamine H2 receptors, not inhibitory mu-opioids."
      ],
      [
        "Constitutive stimulation of the cGMP-dependent protein kinase G pathway mediating nitric oxide release",
        "The cGMP-PKG pathway mediates vascular smooth muscle relaxation (nitroglycerin, PDE-5 inhibitors), not opioid-mediated respiratory depression."
      ]
    ],
    "shortestValidSolution": "Opioid overdose (pinpoint pupils, hypoventilation) reversed by naloxone = Mu-opioid Gi/o -> Opens K+ channels (hyperpolarization) + closes Ca2+ channels.",
    "necessaryInference": "Identify the cellular signaling cascade of mu-opioid receptors: Gi/o coupling opens GIRK K+ channels (postsynaptic hyperpolarization) and closes Ca2+ channels (presynaptic inhibition).",
    "strongestDistractor": "Direct opening of ligand-gated chloride channels causing rapid cell hyperpolarization independent of G proteins",
    "distractorExclusion": "Mu-opioid receptors are metabotropic GPCRs coupled to Gi/o; direct chloride channel gating defines ionotropic GABA-A receptors.",
    "citation": "Pattinson KT. Opioids and the control of respiration. Br J Anaesth. 2008;100(6):747-758. PMID: 18456641.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests GPCR second-messenger cascades (Gi/o, GIRK K+ channel opening, Ca2+ inhibition) in medullary respiratory neurobiology.",
      "distractorExclusionNotes": "Distractors feature Gq activation, ionotropic chloride channels (GABA-A), Gs stimulation, and cGMP-PKG.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0691",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Cocaine Cardiovascular Toxicity & Unopposed Alpha Stimulation",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old man presents to the emergency department with severe, crushing substernal chest pain, diaphoresis, and paranoia that began 45 minutes after intranasal insufflation of cocaine at a nightclub. Blood pressure is 214/118 mm Hg, heart rate is 128/min, and pupils are dilated (mydriasis). A 12-lead ECG reveals 3-mm ST-segment elevations in leads II, III, and aVF with reciprocal ST depressions in leads I and aVL. The resident on duty mistakenly administers intravenous propranolol (a nonselective beta-adrenergic blocker) to treat the patient's tachycardia and hypertension. Within 5 minutes, the patient's blood pressure surges dramatically to 258/144 mm Hg, and his chest pain intensifies. Which of the following physiological principles explains this paradoxical, catastrophic deterioration?",
    "choices": [
      [
        "Blockade of vascular beta-2 adrenergic receptors eliminates physiological vasodilation, leaving intense sympathetic alpha-1 adrenergic vasoconstriction unopposed in the systemic and coronary vasculature",
        "Cocaine inhibits presynaptic reuptake of norepinephrine, dopamine, and serotonin via NET, DAT, and SERT, producing massive synaptic accumulation of norepinephrine. High norepinephrine stimulates both alpha-1 (vasoconstriction) and beta-2 (vasodilation) receptors. Administration of a nonselective beta-blocker (e.g., propranolol) selectively blocks beta-2 vasodilatory receptors, leaving intense alpha-1 vasoconstriction completely unopposed. This triggers profound systemic and coronary vasoconstriction, worsening hypertension, coronary ischemia, and myocardial infarction."
      ],
      [
        "Beta-blocker displacement of cocaine from plasma albumin causes a surge in free pharmacologically active drug levels",
        "Cocaine has low protein binding (~9% to albumin); pharmacological displacement is clinically negligible and does not cause unopposed alpha-1 vasoconstriction."
      ],
      [
        "Direct chemical reaction between propranolol and cocaine creates a novel cardiotoxic ester metabolite (cocaethylene)",
        "Cocaethylene is formed exclusively when cocaine is co-ingested with ethanol in the liver (catalyzed by carboxylesterases), not with beta-blockers."
      ],
      [
        "Selective upregulation of endothelial endothelin-1 receptors in the coronary epicardial vasculature",
        "Unopposed alpha stimulation is mediated by endogenous norepinephrine acting on pre-existing alpha-1 adrenergic receptors, not by de novo endothelin upregulation."
      ],
      [
        "Rapid dephosphorylation of troponin I accelerating myosin-actin cross-bridge detachment rates",
        "Troponin I dephosphorylation is not triggered by propranolol in this setting; the surge in BP is caused by unopposed peripheral vascular alpha-1 constriction."
      ]
    ],
    "shortestValidSolution": "Cocaine + propranolol worsens BP to 258/144 = Unopposed alpha stimulation -> Beta-2 blockade leaves alpha-1 vasoconstriction unchecked.",
    "necessaryInference": "Understand the classic pharmacology contraindication: nonselective beta-blockers in cocaine toxicity block beta-2 vasodilation, leaving massive alpha-1 vasoconstriction unopposed.",
    "strongestDistractor": "Direct chemical reaction between propranolol and cocaine creates a novel cardiotoxic ester metabolite (cocaethylene)",
    "distractorExclusion": "Cocaethylene is formed when cocaine is ingested with ethanol, not beta-blockers; the hemodynamic surge is pure unopposed alpha-1 adrenergic vasoconstriction.",
    "citation": "McCord J, et al. Management of cocaine-associated chest pain and myocardial infarction: a scientific statement from the American Heart Association. Circulation. 2008;117(14):1897-1907. PMID: 18347214.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests autonomic receptor mechanics (alpha-1 vs beta-2) and classical contraindications in substance-induced cardiovascular emergencies.",
      "distractorExclusionNotes": "Distractors feature albumin displacement, cocaethylene alcohol formation, endothelin upregulation, and troponin cross-bridging.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0692",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Amphetamine VMAT2 Reversal & Non-Exocytotic Dopamine Release",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college student takes a large dose of dextroamphetamine while studying for final examinations. Two hours later, he presents to the student health center with severe agitation, hyperthermia (38.8\u00b0C [101.8\u00b0F]), dilated pupils, palpitations, and continuous rapid pressured speech. In cellular neuroscience experiments comparing the mechanisms of psychostimulants, researchers demonstrate that whereas cocaine purely blocks the outward reuptake of monoamines by the dopamine transporter (DAT), amphetamine enters the presynaptic cytoplasm and causes massive, non-vesicular release of dopamine into the synaptic cleft. Which of the following molecular events directly produces this non-exocytotic monoamine efflux?",
    "choices": [
      [
        "Amphetamine is transported into the presynaptic terminal via DAT, disrupts vesicular monoamine transporter 2 (VMAT2) and collapses the vesicular pH gradient, displacing dopamine into the cytoplasm and reversing the direction of DAT transport to pump dopamine outward",
        "Amphetamine is a substrate for the dopamine transporter (DAT) and enters the presynaptic terminal. Once in the cytoplasm, amphetamine enters synaptic vesicles via VMAT2, where its basic properties collapse the vesicular proton gradient (pH gradient), causing stored dopamine to leak into the cytosol. The resulting massive elevation of cytosolic dopamine, combined with amphetamine-induced phosphorylation of DAT (via PKC and CaMKII), reverses the functional direction of DAT, forcing it to transport dopamine outward from the cytoplasm into the synaptic cleft independent of action potentials (reverse transport)."
      ],
      [
        "Direct opening of presynaptic N-type voltage-gated calcium channels triggering classical SNARE-complex vesicular exocytosis",
        "Amphetamine-induced dopamine efflux is non-exocytotic and calcium-independent (it continues in calcium-free media), distinct from classical SNARE-mediated vesicle fusion."
      ],
      [
        "Irreversible covalent inhibition of monoamine oxidase-B (MAO-B) on the outer mitochondrial membrane",
        "Selegiline inhibits MAO-B; amphetamine weakly inhibits MAO, but its primary potent psychostimulant mechanism is VMAT2 collapse and DAT reversal."
      ],
      [
        "Agonism of postsynaptic dopamine D2 receptors coupled to inhibitory G proteins in the nucleus accumbens",
        "Amphetamine is an indirect-acting sympathomimetic with no direct affinity for postsynaptic dopamine D2 receptors; dopamine itself activates these receptors."
      ],
      [
        "Degradation of synaptobrevin and SNAP-25 preventing inhibitory vesicle fusion at the active zone",
        "Cleavage of SNARE proteins (synaptobrevin, SNAP-25) is the mechanism of botulinum and tetanus toxins, not amphetamine."
      ]
    ],
    "shortestValidSolution": "Amphetamine mechanism = Enters terminal -> Collapses VMAT2 vesicular pH gradient -> High cytoplasmic dopamine -> Reverses DAT to pump dopamine out.",
    "necessaryInference": "Contrast amphetamine from cocaine: cocaine only blocks DAT reuptake; amphetamine collapses VMAT2 vesicular gradient and reverses DAT transport.",
    "strongestDistractor": "Direct opening of presynaptic N-type voltage-gated calcium channels triggering classical SNARE-complex vesicular exocytosis",
    "distractorExclusion": "Amphetamine release is non-vesicular and independent of calcium or SNARE complexes; it reverses the DAT membrane transporter.",
    "citation": "Fleckenstein AE, et al. New insights into the mechanism of action of amphetamines. Annu Rev Pharmacol Toxicol. 2007;47:681-698. PMID: 17209799.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular neuropharmacology of non-exocytotic monoamine transport (VMAT2 collapse, reverse DAT efflux) contrasting amphetamine with cocaine.",
      "distractorExclusionNotes": "Distractors feature SNARE calcium exocytosis, MAO-B inhibition, direct D2 agonism, and botulinum SNARE cleavage.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0693",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "Phencyclidine (PCP) NMDA Non-Competitive Antagonism & Nystagmus",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old man is brought to the emergency department by police after being found wandering into highway traffic. He is combative, agitated, exhibits superhuman strength requiring four officers to restrain him, and displays complete insensitivity to pain when evaluated for a deep laceration on his forearm. Physical examination reveals: blood pressure 168/104 mm Hg, pulse 116/min, diaphoresis, and multidirectional (both horizontal and vertical rotatory) nystagmus. He experiences visual hallucinations and severe sensory dissociation. Urine toxicology confirms ingestion of phencyclidine (PCP). Which of the following molecular targets is primarily blocked by this substance to produce its characteristic dissociative and psychotomimetic state?",
    "choices": [
      [
        "Non-competitive open-channel blockade of the ionotropic N-methyl-D-aspartate (NMDA) glutamate receptor channel pore",
        "Phencyclidine (PCP) is a dissociative anesthetic that acts primarily as a non-competitive antagonist at ionotropic NMDA glutamate receptors. PCP binds to a site located deep within the ion channel pore (the PCP site) when the channel is in its open state, physically plugging the channel and blocking calcium and sodium influx. NMDA hypofunction in the prefrontal cortex and limbic system produces sensory dissociation, analgesia, psychosis, violent agitation, and pathognomonic multidirectional (rotatory) nystagmus."
      ],
      [
        "Competitive antagonism of postsynaptic serotonin 5-HT2A receptors in the occipital visual cortex",
        "5-HT2A receptor agonism mediates the visual hallucinations of classical psychedelics (LSD, psilocybin); PCP acts via NMDA receptor channel blockade."
      ],
      [
        "Positive allosteric modulation of GABA-A receptors by extending the duration of chloride channel opening",
        "Barbiturates prolong GABA-A channel open duration; this produces central depression and coma, not violent agitation with multidirectional nystagmus."
      ],
      [
        "Direct agonism of cannabinoid CB1 receptors in the basal ganglia and cerebellum",
        "CB1 agonism mediates the effects of tetrahydrocannabinol (THC: conjunctival injection, dry mouth, increased appetite), not PCP rotatory nystagmus."
      ],
      [
        "Selective blockade of voltage-gated Nav1.5 cardiac sodium channels in the conduction system",
        "Nav1.5 blockade is an antiarrhythmic mechanism (Class I); PCP's psychoactive and neurological effects are central NMDA-mediated."
      ]
    ],
    "shortestValidSolution": "Combative + analgesia + multidirectional rotatory nystagmus = PCP -> Non-competitive NMDA receptor open-channel pore blockade.",
    "necessaryInference": "Link the classic clinical exam of PCP (violent behavior, analgesia, vertical/rotatory nystagmus) to its specific molecular target: NMDA receptor pore blockade.",
    "strongestDistractor": "Competitive antagonism of postsynaptic serotonin 5-HT2A receptors in the occipital visual cortex",
    "distractorExclusion": "5-HT2A receptors are stimulated by classical hallucinogens (LSD); PCP produces dissociative anesthesia and nystagmus via NMDA channel pore blockade.",
    "citation": "Javitt DC, Zukin SR. Recent advances in the phencyclidine model of schizophrenia. Am J Psychiatry. 1991;148(10):1301-1308. PMID: 1654746.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Correlates pathognomonic physical examination findings (vertical/rotatory nystagmus, analgesia) with NMDA receptor channel pore biophysics.",
      "distractorExclusionNotes": "Distractors feature 5-HT2A receptors (LSD), barbiturates (GABA-A duration), cannabinoids (CB1), and cardiac sodium channels.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0694",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Behavioral Health",
    "topic": "MDMA (Ecstasy) Serotonergic Neurotoxicity & Hyponatremia",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old woman is brought to the emergency department from an all-night electronic dance festival ('rave') after collapsing with a generalized tonic-clonic seizure. Witnesses report that she took two 'ecstasy' tablets (3,4-methylenedioxymethamphetamine [MDMA]), danced continuously for 5 hours, and drank large volumes of bottled water to prevent dehydration. Vital signs show: blood pressure 156/94 mm Hg, heart rate 132/min, and core body temperature 40.2\u00b0C (104.4\u00b0F). Physical examination demonstrates dilated pupils, diaphoresis, and jaw clenching (trismus). Serum laboratory evaluation reveals profound hyponatremia with a serum sodium of 114 mEq/L (normal 135-145 mEq/L), serum osmolality 242 mOsm/kg, and urine osmolality 480 mOsm/kg. Which of the following dual pathophysiological mechanisms directly accounts for the life-threatening hyponatremic encephalopathy in this patient?",
    "choices": [
      [
        "MDMA-induced central serotonin and dopamine release stimulates non-osmotic secretion of arginine vasopressin (SIADH) from the posterior pituitary, combined with excessive free water consumption",
        "MDMA (ecstasy) reverses SERT, DAT, and NET, causing massive release of serotonin and catecholamines. High central serotonin and alpha-1 adrenergic stimulation directly stimulates the hypothalamus and posterior pituitary to release arginine vasopressin (ADH) independent of serum osmolality (syndrome of inappropriate antidiuretic hormone secretion [SIADH]). When combined with hyperthermia and compulsory excessive free water consumption ('water loading' to prevent heat stroke), the high ADH levels prevent renal water excretion, causing acute, catastrophic dilutional hyponatremia and cerebral edema/seizures."
      ],
      [
        "Massive renal salt wasting caused by direct inhibition of the sodium-chloride cotransporter (NCCT) in the distal convoluted tubule",
        "MDMA does not inhibit NCCT (which is blocked by thiazide diuretics); the hyponatremia is dilutional due to ADH hypersecretion and water drinking."
      ],
      [
        "Destruction of the adrenal cortex by acute hemorrhagic necrosis (Waterhouse-Friderichsen syndrome) causing hypoaldosteronism",
        "Waterhouse-Friderichsen is caused by fulminant meningococcemia, presenting with purpura and shock, not MDMA at a rave."
      ],
      [
        "Competitive blockade of the basolateral V2 vasopressin receptor on principal collecting duct cells",
        "V2 receptor blockade is the mechanism of vaptans, which causes water loss and hypernatremia, the exact opposite of MDMA hyponatremia."
      ],
      [
        "Osmotic diuresis induced by profound hyperglycemia exceeding the renal tubular reabsorptive threshold",
        "Osmotic diuresis causes hyperosmolar dehydration, whereas MDMA produces hypotonic hypoosmolar dilutional hyponatremia."
      ]
    ],
    "shortestValidSolution": "MDMA (ecstasy) at rave + seizure + Na 114 mEq/L = MDMA-induced SIADH (non-osmotic ADH release) + excessive water drinking.",
    "necessaryInference": "Identify the cause of acute fatal hyponatremia in MDMA toxicity: serotonergic/adrenergic stimulation of non-osmotic ADH release coupled with compulsory water drinking.",
    "strongestDistractor": "Massive renal salt wasting caused by direct inhibition of the sodium-chloride cotransporter (NCCT) in the distal convoluted tubule",
    "distractorExclusion": "MDMA does not cause nephron salt wasting; the mechanism is dilutional hyponatremia caused by SIADH-mediated water retention.",
    "citation": "Campbell GA, Rosner MH. The agony of ecstasy: MDMA (3,4-methylenedioxymethamphetamine) and the kidney. Clin J Am Soc Nephrol. 2008;3(6):1852-1860. PMID: 18784334.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates psychostimulant pharmacology (MDMA), neuroendocrine regulation of water balance (non-osmotic SIADH), and electrolyte pathophysiology.",
      "distractorExclusionNotes": "Distractors feature distal tubular salt wasting (thiazide-like), Waterhouse-Friderichsen, V2 antagonism, and osmotic diuresis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0695",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Behavioral Health",
    "topic": "Sleep Architecture NREM Stage 3 Slow-Wave & Aging Changes",
    "provisionalDifficulty": 5,
    "stem": "A 76-year-old man undergoes overnight polysomnography as part of a research study investigating sleep changes in healthy aging. Compared to baseline polysomnographic recordings obtained from healthy 22-year-old collegiate volunteers, the elderly subject demonstrates preserved total sleep time but frequent nocturnal awakenings, an increase in stage N1 and N2 sleep duration, and a marked, selective reduction in the proportion of deep slow-wave sleep (stage N3). Which of the following electroencephalographic (EEG) waveform characteristics is diagnostic of stage N3 non-rapid eye movement (NREM) sleep?",
    "choices": [
      [
        "High-voltage, slow delta waves with a frequency between 0.5 and 2 Hz and an amplitude exceeding 75 microvolts, occupying more than 20% of the epoch",
        "Stage N3 (slow-wave sleep / deep sleep) is defined electroencephalographically by high-amplitude (>75 microvolts), low-frequency DELTA waves (0.5 to 2 Hz) occupying >=20% of the 30-second epoch. Growth hormone secretion and sleep terrors/sleepwalking occur during stage N3. Aging is associated with a dramatic, physiological reduction in the percentage of stage N3 sleep, often dropping from 20% in young adults to near 0-5% in the elderly."
      ],
      [
        "High-frequency, low-voltage beta waves (> 13 Hz) with desynchronized irregular activity accompanied by muscle atonia",
        "Desynchronized beta/gamma-like activity with skeletal muscle atonia is characteristic of REM sleep (or wakefulness with eyes open)."
      ],
      [
        "Synchronized alpha waves with a frequency of 8 to 12 Hz localized predominantly over the occipital cortex during relaxed wakefulness",
        "Alpha waves (8-12 Hz) characterize relaxed wakefulness with eyes closed, disappearing immediately upon sleep onset (stage N1)."
      ],
      [
        "Episodic bursts of sinusoidal 12 to 14 Hz sleep spindles and high-amplitude biphasic K-complexes lasting at least 0.5 seconds",
        "Sleep spindles (12-14 Hz) and K-complexes define stage N2 NREM sleep, which occupies the greatest percentage of total sleep time (~50%)."
      ],
      [
        "Low-amplitude mixed-frequency theta waves (4 to 7 Hz) accompanied by slow rolling eye movements and vertex sharp transients",
        "Theta waves (4-7 Hz) with vertex sharp waves and slow rolling eye movements define light stage N1 NREM sleep."
      ]
    ],
    "shortestValidSolution": "Deep sleep (N3) declining with age = Low-frequency high-amplitude delta waves (0.5-2 Hz, >75 microV).",
    "necessaryInference": "Map sleep architecture to EEG waveforms: N1 = theta; N2 = sleep spindles & K-complexes; N3 = delta waves (>75 microV, 0.5-2 Hz); REM = sawtooth/beta with atonia.",
    "strongestDistractor": "Episodic bursts of sinusoidal 12 to 14 Hz sleep spindles and high-amplitude biphasic K-complexes lasting at least 0.5 seconds",
    "distractorExclusion": "Sleep spindles and K-complexes define stage N2 sleep, whereas stage N3 slow-wave sleep is defined by slow delta waves.",
    "citation": "Carskadon MA, Dement WC. Normal Human Sleep: An Overview. In: Principles and Practice of Sleep Medicine. 6th ed. 2017. PMID: 15637299.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative electroencephalography criteria (frequency in Hz, amplitude in microV) and physiological sleep architecture changes in aging.",
      "distractorExclusionNotes": "Distractors feature REM beta atonia, relaxed alpha wakefulness, N2 spindles/K-complexes, and N1 theta waves.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0696",
    "exam": "Step 1",
    "subject": "Neurology",
    "system": "Behavioral Health",
    "topic": "REM Sleep Behavior Disorder & Alpha-Synucleinopathy Association",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man is brought for evaluation by his wife because of violent nocturnal behavior over the past 2 years. She reports that while asleep, her husband frequently screams, flails his arms, kicks, and leaps out of bed, having recently struck her in the shoulder during an episode in which he dreamed he was fighting off home intruders. When awakened immediately following an episode, he is alert and recalls the vivid, threatening dream in detail. Overnight polysomnography demonstrates loss of normal somatic muscle atonia during rapid eye movement (REM) sleep, characterized by excessive submental electromyographic (EMG) tone and complex motor behaviors during REM epochs (REM Sleep Behavior Disorder). Which of the following neurodegenerative disorders is this patient at the greatest long-term risk of developing?",
    "choices": [
      [
        "Alpha-synuclein neurodegenerative proteinopathies, specifically Parkinson disease, Dementia with Lewy Bodies, or Multiple System Atrophy",
        "REM sleep behavior disorder (RBD) is caused by degeneration of brainstem nuclei (specifically the sublaterodorsal nucleus in the pons and ventromedial medulla) that normally enforce skeletal muscle atonia during REM sleep via glycinergic/GABAergic motor neuron inhibition. Over 70% to 90% of patients with idiopathic RBD ultimately phenoconvert to an alpha-synucleinopathy (Parkinson disease, Dementia with Lewy Bodies, or Multiple System Atrophy) within 10 to 15 years, as Lewy pathology typically begins in lower brainstem nuclei prior to reaching the substantia nigra (Braak staging)."
      ],
      [
        "Tauopathies driven by 3R/4R microtubule-associated protein tau hyperphosphorylation, specifically Pick disease",
        "Pick disease (frontotemporal dementia) is a tauopathy presenting with early social disinhibition and language loss, not preceding REM sleep behavior disorder."
      ],
      [
        "Trinucleotide CAG repeat expansion disorders, specifically Huntington disease",
        "Huntington disease is a trinucleotide polyglutamine disorder causing chorea and psychiatric changes in middle age, not REM atonia loss in older adults."
      ],
      [
        "Prion protein conformational conversion diseases, specifically Sporadic Creutzfeldt-Jakob disease",
        "Creutzfeldt-Jakob disease is a rapidly progressive fatal dementia with startle myoclonus and periodic sharp waves on EEG, not decade-long REM atonia loss."
      ],
      [
        "Superoxide dismutase-1 (SOD1) motor neuron degeneration, specifically Amyotrophic Lateral Sclerosis",
        "ALS causes combined upper and lower motor neuron loss without primary brainstem REM sleep atonia breakdown."
      ]
    ],
    "shortestValidSolution": "Dream enactment + loss of REM muscle atonia = REM sleep behavior disorder -> Highly predictive precursor for alpha-synucleinopathies (Parkinson/DLB/MSA).",
    "necessaryInference": "Link the neurobiology of REM sleep behavior disorder (sublaterodorsal pontine nucleus degeneration) to its specific pathological protein: alpha-synuclein.",
    "strongestDistractor": "Tauopathies driven by 3R/4R microtubule-associated protein tau hyperphosphorylation, specifically Pick disease",
    "distractorExclusion": "Tauopathies (Pick disease, progressive supranuclear palsy) and beta-amyloidopathies (Alzheimer) do not strongly associate with prodromal RBD; RBD is uniquely linked to alpha-synuclein.",
    "citation": "Boeve BF. REM sleep behavior disorder: Updated review of the core features, the REM sleep behavior disorder-neurodegenerative disease association, evolving concepts, controversies, and future directions. Ann N Y Acad Sci. 2010;1184:15-54. PMID: 20146689.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests brainstem sleep atonia circuits and Braak staging of prodromal neurodegeneration (alpha-synuclein accumulation preceding motor signs).",
      "distractorExclusionNotes": "Distractors feature tauopathies (Pick), polyglutamine (Huntington), prions (CJD), and SOD1 (ALS).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0697",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Behavioral Health",
    "topic": "Narcolepsy Type 1 Orexin/Hypocretin Autoimmune Destruction",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old high school student is evaluated for severe daytime sleepiness. Despite sleeping 9 hours nightly, he falls asleep abruptly during class, meals, and social conversations. Over the past 6 months, whenever he laughs heartily at a funny joke or experiences intense emotional amusement, his knees suddenly buckle and he collapses to the floor for 30 seconds while remaining fully conscious (cataplexy). He also describes frightening episodes upon awakening where he is completely unable to move his limbs for 1 to 2 minutes (sleep paralysis), often accompanied by terrifying hallucinations of an intruder in his bedroom (hypnopompic hallucinations). HLA typing reveals positivity for the HLA-DQB1*06:02 allele. Cerebrospinal fluid analysis demonstrates an undetectable concentration of hypocretin-1 (orexin-A) (< 110 pg/mL). Which of the following neuroanatomical sites is the exclusive location of the neuronal cell bodies that have undergone autoimmune destruction in this patient?",
    "choices": [
      [
        "Posterolateral hypothalamus, containing orexin/hypocretin neurons that project broadly to stabilize the ascending reticular activating system and prevent inappropriate REM intrusions",
        "Narcolepsy type 1 (narcolepsy with cataplexy) is an autoimmune disorder linked to HLA-DQB1*06:02, caused by selective autoimmune destruction of approximately 70,000 hypocretin/orexin-producing neurons located exclusively in the lateral and posterior hypothalamic areas. Hypocretin-1 and hypocretin-2 are excitatory neuropeptides that stabilize monoaminergic and cholinergic wake-promoting nuclei (locus coeruleus, tuberomammillary nucleus, raphe nuclei). Loss of orexin leads to state instability, sleep fragmentation, and intrusion of REM sleep phenomena (cataplexy, sleep paralysis, hypnagogic hallucinations) into wakefulness."
      ],
      [
        "Ventrolateral preoptic nucleus (VLPO) of the anterior hypothalamus, mediating active sleep induction via GABA and galanin",
        "The VLPO is the 'sleep switch' that secretes inhibitory GABA and galanin to induce sleep; its destruction causes profound insomnia, not narcoleptic daytime sleepiness."
      ],
      [
        "Tuberomammillary nucleus of the posterior hypothalamus, secreting histamine to maintain cortical arousal",
        "Tuberomammillary neurons secrete histamine; they receive excitatory projections from orexin neurons, but are not the primary site of autoimmune destruction."
      ],
      [
        "Suprachiasmatic nucleus of the anterior hypothalamus, generating intrinsic circadian transcriptional oscillations",
        "The suprachiasmatic nucleus regulates circadian rhythm using light input from retinal ganglion cells, not orexin/cataplexy."
      ],
      [
        "Arcuate nucleus of the mediobasal hypothalamus, secreting pro-opiomelanocortin and neuropeptide Y",
        "The arcuate nucleus regulates feeding and energy homeostasis (POMC/NPY), distinct from the lateral hypothalamic orexin sleep circuits."
      ]
    ],
    "shortestValidSolution": "Cataplexy with laughter + sleep paralysis + low CSF hypocretin-1 = Narcolepsy type 1 -> Autoimmune destruction of orexin neurons in posterolateral hypothalamus.",
    "necessaryInference": "Map orexin/hypocretin to its precise hypothalamic nucleus: orexin neurons are located exclusively in the posterolateral hypothalamus and stabilize the wake-promoting ARAS.",
    "strongestDistractor": "Ventrolateral preoptic nucleus (VLPO) of the anterior hypothalamus, mediating active sleep induction via GABA and galanin",
    "distractorExclusion": "The VLPO promotes sleep through GABA/galanin; its loss causes insomnia, whereas narcolepsy is caused by loss of lateral hypothalamic orexin neurons.",
    "citation": "Scammell TE. Narcolepsy. N Engl J Med. 2015;373(27):2654-2662. PMID: 26716917.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests hypothalamic subnuclear functional neuroanatomy (lateral hypothalamus vs VLPO vs tuberomammillary vs SCN) and neuropeptide biology (orexin/hypocretin).",
      "distractorExclusionNotes": "Distractors feature VLPO sleep promoter, tuberomammillary histaminergic, SCN circadian, and arcuate feeding nuclei.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0698",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Behavioral Health",
    "topic": "Alzheimer Disease Amyloid Precursor Cleavage & Hyperphosphorylated Tau",
    "provisionalDifficulty": 5,
    "stem": "An 81-year-old woman with a 6-year history of progressive memory loss, spatial disorientation, word-finding difficulty, and loss of functional independence dies of aspiration pneumonia. Gross neuropathological examination of the brain reveals diffuse cortical atrophy with widening of the sulci, narrowing of the gyri, and compensatory enlargement of the lateral ventricles (hydrocephalus ex vacuo), most pronounced in the temporal and parietal lobes. Microscopic examination of the entorhinal cortex and hippocampus reveals: (1) Extracellular spherical plaques with central amyloid cores positive on Congo red staining, and (2) Intracellular neurofibrillary tangles composed of flame-shaped aggregates within degenerating pyramidal neurons. Which of the following biochemical descriptions accurately characterizes the sequential enzymatic processing that generates the primary neurotoxic peptide found within the extracellular plaque cores?",
    "choices": [
      [
        "Initial extracellular cleavage of amyloid precursor protein (APP) by beta-secretase (BACE1), followed by intramembranous cleavage by gamma-secretase (presenilin complex) yielding hydrophobic 42-amino-acid A-beta peptides (A-beta-42)",
        "The amyloidogenic pathway in Alzheimer disease involves sequential cleavage of the transmembrane amyloid precursor protein (APP, encoded on chromosome 21): (1) Beta-secretase (BACE1) cleaves APP at the N-terminus, releasing soluble APP-beta; (2) The membrane-bound C-terminal fragment is then cleaved within the lipid bilayer by gamma-secretase (a multi-protein complex containing presenilin 1 or 2). This intramembranous cleavage generates neurotoxic, aggregation-prone A-beta-42 peptides that form insoluble oligomers and extracellular amyloid plaques."
      ],
      [
        "Initial cleavage within the A-beta domain by alpha-secretase, releasing neuroprotective soluble APP-alpha and preventing A-beta generation",
        "Alpha-secretase cleavage occurs within the A-beta sequence in the non-amyloidogenic pathway; it precludes A-beta formation and produces neuroprotective sAPP-alpha."
      ],
      [
        "Proteolytic cleavage of cellular prion protein (PrPC) by proteinase K into insoluble beta-sheet-rich scrapie isoforms (PrPSc)",
        "Proteinase K resistance and PrPSc conversion characterize prion diseases (Creutzfeldt-Jakob disease), not amyloid plaque processing in Alzheimer disease."
      ],
      [
        "Lysosomal degradation of GM2 gangliosides catalyzed by hexosaminidase A in the presence of GM2 activator protein",
        "Hexosaminidase A degrades GM2 gangliosides; deficiency causes Tay-Sachs disease with cherry-red macular spots, not Alzheimer disease."
      ],
      [
        "Enzymatic oxidation of dopamine to aminochrome by monoamine oxidase-B driving alpha-synuclein oligomerization",
        "Dopamine oxidation and alpha-synuclein oligomers occur in Lewy body disorders and Parkinson disease, not beta-amyloid processing in AD."
      ]
    ],
    "shortestValidSolution": "Alzheimer amyloid plaques = Sequential cleavage of APP by beta-secretase (BACE1) then gamma-secretase (presenilin) -> A-beta-42.",
    "necessaryInference": "Contrast amyloidogenic vs non-amyloidogenic processing: Amyloidogenic = beta-secretase then gamma-secretase yields A-beta-42; non-amyloidogenic = alpha-secretase cleaves inside A-beta.",
    "strongestDistractor": "Initial cleavage within the A-beta domain by alpha-secretase, releasing neuroprotective soluble APP-alpha and preventing A-beta generation",
    "distractorExclusion": "Alpha-secretase mediates the non-amyloidogenic pathway, which cleaves within the A-beta domain and prevents the generation of plaques.",
    "citation": "Selkoe DJ, Hardy J. The amyloid hypothesis of Alzheimer's disease at 25 years. EMBO Mol Med. 2016;8(6):595-608. PMID: 27025652.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact protease enzymology (beta-secretase / gamma-secretase presenilin complex vs alpha-secretase) generating A-beta-42 in AD.",
      "distractorExclusionNotes": "Distractors feature alpha-secretase non-amyloidogenic path, prion conversion, Tay-Sachs gangliosidosis, and alpha-synuclein oxidation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0699",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Behavioral Health",
    "topic": "Frontotemporal Lobar Degeneration TDP-43 vs Tau Neuropathology",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old previously refined corporate executive is brought for psychiatric evaluation by his family due to a profound personality transformation over the past 14 months. He has become socially disinhibited, frequently making offensive sexual remarks to strangers, gorging himself on sweets and junk food (hyperorality), and exhibiting complete emotional apathy toward his family. He displays loss of executive planning, utilization behavior (involuntarily grabbing and using objects in front of him), and perseveration, but his visuospatial orientation and navigational memory remain intact. Brain MRI reveals marked, knife-blade symmetrical atrophy restricted to the anterior frontal and temporal lobes with sparing of the parietal and occipital cortices. Neuropathological evaluation confirms frontotemporal lobar degeneration (FTLD). Which of the following pathological protein aggregates is most commonly identified within the frontotemporal cortical neurons of patients with this clinical syndrome?",
    "choices": [
      [
        "Ubiquitinated, hyperphosphorylated transactive response DNA-binding protein 43 (TDP-43) inclusions, or hyperphosphorylated 3R/4R microtubule-associated protein tau aggregates (Pick bodies)",
        "Frontotemporal lobar degeneration (FTLD / frontotemporal dementia / Pick disease) is the most common cause of early-onset dementia in patients <60 years old. It presents with early behavioral disinhibition, hyperorality, executive dysfunction, and apathy, with relative preservation of episodic memory. Neuropathologically, cases are divided into: (1) FTLD-TDP (~50% of cases), characterized by nuclear clearance and cytoplasmic ubiquitinated TDP-43 inclusions (encoded by TARDBP); and (2) FTLD-tau (~40% of cases), featuring hyperphosphorylated tau inclusions (round, cytoplasmic Pick bodies)."
      ],
      [
        "Extracellular plaques containing beta-amyloid-42 accompanied by intracellular paired helical filaments of tau",
        "Extracellular A-beta plaques define Alzheimer disease, which begins in the transentorhinal cortex/hippocampus with early memory loss rather than early social disinhibition."
      ],
      [
        "Intranuclear polyglutamine inclusions encoded by expanded CAG repeats in huntingtin",
        "Huntingtin polyglutamine inclusions occur in Huntington disease, causing caudate atrophy, chorea, and psychiatric changes, not selective frontotemporal lobar atrophy."
      ],
      [
        "Cytoplasmic inclusions composed of wild-type superoxide dismutase-1 (SOD1) restricted to lower motor neurons",
        "SOD1 inclusions are found in familial ALS without frontotemporal lobar dementia, restricted to anterior horn cells."
      ],
      [
        "Spongiform vacuolation of the neuropil without any proteinaceous intracellular inclusion bodies",
        "Spongiform vacuolation defines prion disease (Creutzfeldt-Jakob disease), characterized by rapid progression over months with myoclonus."
      ]
    ],
    "shortestValidSolution": "Age 56 + social disinhibition + hyperorality + frontal atrophy = FTLD -> TDP-43 ubiquitinated inclusions or Pick bodies (hyperphosphorylated tau).",
    "necessaryInference": "Identify the two major pathological protein inclusions in frontotemporal lobar degeneration: TDP-43 (~50%) and hyperphosphorylated tau (Pick bodies, ~40%).",
    "strongestDistractor": "Extracellular plaques containing beta-amyloid-42 accompanied by intracellular paired helical filaments of tau",
    "distractorExclusion": "A-beta plaques and neurofibrillary tangles define Alzheimer disease, which primarily involves hippocampal memory loss rather than isolated frontotemporal behavioral disinhibition.",
    "citation": "Mackenzie IR, et al. Nomenclature and nosology for neuropathologic subtypes of frontotemporal lobar degeneration: an update. Acta Neuropathol. 2010;119(1):1-4. PMID: 19924424.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical dementia syndromic classification (FTLD behavioral variant) and molecular neuropathological subtypes (TDP-43 vs tau).",
      "distractorExclusionNotes": "Distractors feature Alzheimer disease (A-beta/tau), Huntington polyglutamine, ALS SOD1, and CJD spongiform encephalopathy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0700",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Behavioral Health",
    "topic": "Huntington Disease CAG Expansion & Histone Deacetylation Repression",
    "provisionalDifficulty": 4,
    "stem": "A 41-year-old man presents with a 1-year history of progressive involuntary, irregular, jerky, purposeless movements of his hands and face, accompanied by mood lability, severe depression, and executive cognitive decline. His father developed similar involuntary movements in his early 40s and died in a nursing facility. Physical examination demonstrates continuous rapid, non-stereotyped, involuntary movements of the upper extremities (chorea) and an inability to maintain sustained tongue protrusion ('serpentine' tongue or motor impersistence). Brain MRI reveals profound, symmetrical atrophy of the caudate nuclei and putamen with compensatory enlargement of the frontal horns of the lateral ventricles. Genetic analysis identifies an expanded CAG trinucleotide repeat (46 repeats) in exon 1 of the HTT gene on chromosome 4p16.3. Which of the following epigenetic mechanisms directly contributes to transcriptional gene silencing and neuronal death in this patient's striatal medium spiny neurons?",
    "choices": [
      [
        "Mutant huntingtin binds and inactivates histone acetyltransferases (such as CBP/p300), shifting the epigenetic equilibrium toward excessive histone deacetylation and condensed, transcriptionally repressed heterochromatin",
        "Huntington disease is an autosomal dominant neurodegenerative disorder caused by a CAG trinucleotide repeat expansion in the HTT gene, encoding an elongated polyglutamine tract. The mutant huntingtin protein misfolds and forms toxic intranuclear aggregates that physically bind and sequester CREB-binding protein (CBP), an essential histone acetyltransferase (HAT). Loss of HAT activity allows histone deacetylases (HDACs) to dominate, removing acetyl groups from lysine residues on histones H3 and H4. Histones become positively charged, binding tightly to negatively charged DNA to form condensed heterochromatin, silencing transcription of critical neurotrophic factors (such as BDNF) and causing selective apoptosis of striatal GABAergic medium spiny neurons."
      ],
      [
        "Demethylation of cytosine-guanine (CpG) islands within striatal promoter regions, inducing excessive RNA polymerase II transcription",
        "DNA hypomethylation typically enhances gene expression; Huntington disease is characterized by transcriptional repression driven by histone deacetylation."
      ],
      [
        "Constitutive hyperacetylation of core histone H3 tails by histone deacetylase inhibitors, causing nucleosomal unfolding",
        "Hyperacetylation opens chromatin and promotes transcription (the mechanism of HDAC inhibitor drugs), whereas mutant huntingtin causes hypoacetylation and silencing."
      ],
      [
        "Inactivating point mutation in the DNA methyltransferase-1 (DNMT1) enzyme, preventing maintenance of genomic imprinting",
        "DNMT1 maintains DNA methylation; Huntington disease is caused by CAG trinucleotide repeat expansion, not DNMT1 mutations."
      ],
      [
        "Selective methylation of histone H3 lysine 4 (H3K4me3) activating downstream pro-apoptotic caspase transcription",
        "H3K4me3 is an epigenetic mark of active transcription; mutant huntingtin primarily drives transcriptional silencing through loss of histone acetylation."
      ]
    ],
    "shortestValidSolution": "Chorea + caudate atrophy + CAG repeats = Huntington disease -> Mutant huntingtin sequesters histone acetyltransferases -> Excessive histone deacetylation silences transcription.",
    "necessaryInference": "Connect the molecular genetics of Huntington disease to epigenetic transcriptional repression: mutant polyglutamine tracts sequester HATs (CBP), leaving histones deacetylated and genes silenced.",
    "strongestDistractor": "Constitutive hyperacetylation of core histone H3 tails by histone deacetylase inhibitors, causing nucleosomal unfolding",
    "distractorExclusion": "Hyperacetylation relaxes chromatin to activate transcription; mutant huntingtin causes hypoacetylation (histone deacetylation), condensing chromatin into silent heterochromatin.",
    "citation": "Bates GP, et al. Huntington disease. Nat Rev Dis Primers. 2015;1:15005. PMID: 27188204.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests epigenetics of trinucleotide repeat disorders (histone acetylation vs deacetylation, CBP sequestration) and striatal neurobiology.",
      "distractorExclusionNotes": "Distractors feature CpG demethylation, histone hyperacetylation, DNMT1 mutations, and H3K4me3 activation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
