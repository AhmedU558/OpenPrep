import { CandidateSpec } from './types';

export const step1Batch29: CandidateSpec[] = [
  {
    "code": "op-c-s1-0701",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Renal",
    "topic": "Salicylate Toxicity Dual Acid-Base Derangement",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man presents 4 hours after an intentional overdose of an over-the-counter analgesic. He complains of tinnitus, nausea, and shortness of breath. Physical examination reveals tachypnea (respirations 32/min) and diaphoresis. Arterial blood gas shows pH 7.44, PaCO2 20 mm Hg, and PaO2 96 mm Hg. Serum electrolytes show sodium 140 mEq/L, chloride 102 mEq/L, and bicarbonate 13 mEq/L. Which of the following pathophysiological mechanisms directly accounts for the metabolic component of this patient's acid-base disorder?",
    "choices": [
      [
        "Uncoupling of oxidative phosphorylation in mitochondrial inner membranes leading to accumulation of lactic acid and ketoacids",
        "Salicylate toxicity causes a mixed disorder: primary respiratory alkalosis from direct medullary stimulation, and primary high anion gap metabolic acidosis (anion gap = 140 - (102 + 13) = 25 mEq/L) from mitochondrial uncoupling, which dissipates the proton gradient, accelerates lipolysis, impairs the Krebs cycle, and accumulates lactate and ketoacids."
      ],
      [
        "Direct inhibition of carbonic anhydrase in the proximal convoluted tubule resulting in massive bicarbonate wasting",
        "Carbonic anhydrase inhibition causes a normal anion gap metabolic acidosis with hyperchloremia, unlike the high anion gap (25 mEq/L) seen here."
      ],
      [
        "Competitive antagonism of the basolateral Na+/K+-ATPase pump in medullary thick ascending limb cells",
        "Na+/K+-ATPase pump inhibition is the mechanism of digitalis glycosides and does not generate organic acidemia."
      ],
      [
        "Irreversible inactivation of the pyruvate dehydrogenase complex through lipoic acid binding",
        "Arsenic poisoning inhibits lipoic acid in pyruvate dehydrogenase; while it causes lactic acidosis, it does not produce medullary hyperventilation or respiratory alkalosis."
      ],
      [
        "Selective blockade of the apical H+-ATPase pump in cortical alpha-intercalated cells",
        "H+-ATPase failure causes distal (type 1) renal tubular acidosis, characterized by a normal anion gap and alkaline urine pH (> 5.5)."
      ]
    ],
    "shortestValidSolution": "Salicylate poisoning = Early respiratory alkalosis + HAGMA from mitochondrial uncoupling of oxidative phosphorylation.",
    "necessaryInference": "Recognize mixed acid-base derangement: high anion gap (25) with near-normal pH (7.44) and low PaCO2 (20); attribute metabolic acidosis to mitochondrial uncoupling.",
    "strongestDistractor": "Direct inhibition of carbonic anhydrase in the proximal convoluted tubule resulting in massive bicarbonate wasting",
    "distractorExclusion": "Carbonic anhydrase inhibition causes normal anion gap metabolic acidosis, whereas salicylate toxicity produces an increased anion gap.",
    "citation": "Chyka PA, Erdman AR, Christianson G, et al. Salicylate poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol (Phila). 2007;45(2):95-131. PMID: 17364628.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Salicylate Toxicity Dual Acid-Base Derangement.",
      "distractorExclusionNotes": "Competitor Direct inhibition of carbonic anhydrase in the pro excluded by Carbonic anhydrase inhibition causes normal anion gap metabo.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0702",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Left Ventricular Coronary Blood Flow and Diastolic Perfusion Time",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with severe calcific aortic stenosis develops supraventricular tachycardia with a ventricular rate of 170/min. He becomes pale and diaphoretic, and ECG shows 3-mm horizontal ST depressions in V4-V6. Echocardiogram shows severe concentric left ventricular hypertrophy. Which of the following physiological principles best explains the precipitous myocardial ischemia observed during tachycardia in this patient?",
    "choices": [
      [
        "Subendocardial coronary perfusion occurs predominantly during diastole, and marked shortening of diastolic filling time severely diminishes coronary driving pressure",
        "Left ventricular coronary blood flow occurs almost exclusively (~80%) during diastole because high systolic intramyocardial pressures compress subendocardial capillaries. In tachycardia, the cardiac cycle shortens disproportionately at the expense of diastole, severely truncating subendocardial perfusion time. In severe LV hypertrophy with elevated LVEDP, coronary driving pressure (Aortic Diastolic Pressure minus LVEDP) is further compromised."
      ],
      [
        "Systolic coronary blood flow increases exponentially to compensate for shortened diastolic relaxation",
        "Systolic flow is constrained by intramyocardial tissue pressure in the thick left ventricle and cannot compensate for shortened diastole."
      ],
      [
        "Coronary vascular resistance falls to zero due to maximal myogenic constriction of epicardial conductance arteries",
        "Myogenic response constricts vessels in response to stretch; resistance arterioles dilate via metabolic autoregulation, but total vascular resistance never reaches zero."
      ],
      [
        "Right coronary artery perfusion ceases completely during both systole and diastole due to high right ventricular pressures",
        "Right ventricular pressure (normally 25/5 mm Hg) is much lower than aortic pressure, so right coronary flow occurs throughout both systole and diastole."
      ],
      [
        "Coronary sinus pressure increases above aortic root systolic pressure, reversing trans-myocardial capillary flow",
        "Coronary sinus pressure reflects right atrial pressure (2-8 mm Hg) and never exceeds aortic root systolic pressure."
      ]
    ],
    "shortestValidSolution": "Tachycardia disproportionately shortens diastole -> LV perfusion is predominantly diastolic -> Subendocardial ischemia in hypertrophied LV.",
    "necessaryInference": "Understand that left ventricular subendocardial perfusion occurs during diastole; tachycardia causes ischemia by truncating diastolic filling time.",
    "strongestDistractor": "Systolic coronary blood flow increases exponentially to compensate for shortened diastolic relaxation",
    "distractorExclusion": "Systolic coronary flow is mechanically impeded by high intramyocardial tissue pressure and cannot compensate for lost diastolic perfusion.",
    "citation": "Duncker DJ, Bache RJ. Regulation of coronary blood flow during exercise. Physiol Rev. 2008;88(3):1009-1086. PMID: 18626066.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Left Ventricular Coronary Blood Flow and Diastolic Perfusion Time.",
      "distractorExclusionNotes": "Competitor Systolic coronary blood flow increases exponential excluded by Systolic coronary flow is mechanically impeded by high intra.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0703",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Hematology",
    "topic": "Paroxysmal Nocturnal Hemoglobinuria and GPI Anchor Defect",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman presents with persistent fatigue, recurrent dark morning urine, and right upper quadrant abdominal pain. Laboratory studies reveal hemoglobin 8.1 g/dL, reticulocytes 7.8%, total bilirubin 3.2 mg/dL, indirect bilirubin 2.6 mg/dL, and LDH 1,450 U/L. Haptoglobin is undetectable. Doppler ultrasound demonstrates hepatic vein thrombosis (Budd-Chiari syndrome). Flow cytometry confirms absent CD55 and CD59 on erythrocytes and granulocytes. Which of the following is the primary genetic mechanism underlying this disorder?",
    "choices": [
      [
        "Somatic mutation in the X-linked PIGA gene in a hematopoietic stem cell preventing biosynthesis of glycosylphosphatidylinositol anchors",
        "Paroxysmal nocturnal hemoglobinuria (PNH) is caused by an acquired somatic mutation in the X-linked PIGA gene in a hematopoietic stem cell, impairing the synthesis of glycosylphosphatidylinositol (GPI) anchors. This leads to absence of GPI-anchored surface complement regulatory proteins, notably CD55 (decay-accelerating factor) and CD59 (MAC inhibitory protein), resulting in complement-mediated intravascular hemolysis and high risk of venous thrombosis (e.g., Budd-Chiari syndrome)."
      ],
      [
        "Constitutive germline mutation in terminal complement component C9 preventing assembly of the membrane attack complex",
        "Terminal complement deficiency (C5-C9) impairs MAC formation, predisposing to recurrent Neisseria infections, not hemolytic anemia."
      ],
      [
        "Autosomal dominant mutation in the ANK1 gene encoding ankyrin-1 causing loss of vertical membrane tethering",
        "Ankyrin-1 mutations cause hereditary spherocytosis with extravascular splenic hemolysis, not intravascular complement-mediated lysis or CD55/CD59 absence."
      ],
      [
        "Acquired autoimmune IgG autoantibodies directed against the erythrocyte Rh surface antigen causing splenic phagocytosis",
        "Warm autoimmune hemolytic anemia involves anti-Rh IgG autoantibodies and extravascular splenic clearance, with normal GPI anchors."
      ],
      [
        "Homozygous missense mutation in the beta-globin gene substituting valine for glutamic acid at codon 6",
        "This mutation produces hemoglobin S (sickle cell disease), causing deoxygenation-induced hemoglobin polymerization, not GPI anchor deficiency."
      ]
    ],
    "shortestValidSolution": "Dark morning urine + intravascular hemolysis + Budd-Chiari + CD55/CD59 negative = PNH -> Somatic PIGA mutation (GPI anchor failure).",
    "necessaryInference": "Connect intravascular complement hemolysis and venous thrombosis with flow cytometric absence of CD55/CD59 to somatic PIGA mutation.",
    "strongestDistractor": "Autosomal dominant mutation in the ANK1 gene encoding ankyrin-1 causing loss of vertical membrane tethering",
    "distractorExclusion": "Ankyrin mutations cause hereditary spherocytosis (extravascular hemolysis), whereas PNH causes intravascular complement lysis and venous thrombosis.",
    "citation": "Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811. PMID: 25237203.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Paroxysmal Nocturnal Hemoglobinuria and GPI Anchor Defect.",
      "distractorExclusionNotes": "Competitor Autosomal dominant mutation in the ANK1 gene encod excluded by Ankyrin mutations cause hereditary spherocytosis (extravascu.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0704",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Hyper-IgE Syndrome (Job Syndrome) and Th17 Differentiation Defect",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy presents with recurrent non-inflamed cutaneous staphylococcal abscesses and severe eczematous dermatitis. He has retained primary incisors, a broad nasal bridge, and a history of staphylococcal pneumonia complicated by a pneumatocele. Laboratory evaluation reveals marked eosinophilia (1,800/microL) and an elevated serum IgE of 12,500 IU/mL. Serum IgG, IgA, and IgM levels are normal. Which of the following immunological defects is the underlying cause of this patient's syndrome?",
    "choices": [
      [
        "Defective STAT3 phosphorylation leading to impaired interleukin-17-producing helper T (Th17) cell differentiation",
        "Autosomal dominant Hyper-IgE syndrome (Job syndrome) is caused by dominant-negative mutations in STAT3, resulting in failure of naive CD4+ T cells to differentiate into Th17 cells. Without IL-17 and IL-22, epithelial recruitment of neutrophils is severely impaired, preventing classic warm inflammatory responses and leading to 'cold' staphylococcal abscesses, pneumatoceles, eczema, and retained primary teeth."
      ],
      [
        "Impaired CD40 ligand (CD154) expression on activated helper T cells preventing B-cell class switching",
        "CD40L deficiency causes Hyper-IgM syndrome, characterized by elevated/normal IgM with low IgG, IgA, and IgE, and Pneumocystis susceptibility."
      ],
      [
        "Defective Bruton tyrosine kinase (BTK) arrest of pre-B cell maturation in the bone marrow",
        "BTK deficiency causes X-linked agammaglobulinemia, resulting in absence of all immunoglobulin classes (including IgE) and absent circulating B cells."
      ],
      [
        "Mutation in the WAS gene encoding Wiskott-Aldrich syndrome protein causing defective actin cytoskeleton rearrangement",
        "Wiskott-Aldrich syndrome presents with eczema, microthrombocytopenia (small platelets), and recurrent infections, not retained teeth or cold abscesses."
      ],
      [
        "Defective NADPH oxidase assembly leading to failure of neutrophil superoxide production and respiratory burst",
        "NADPH oxidase deficiency causes chronic granulomatous disease, characterized by granuloma formation and recurrent catalase-positive infections with normal IgE."
      ]
    ],
    "shortestValidSolution": "Eczema + cold staph abscesses + retained teeth + pneumatocele + high IgE = Job syndrome -> STAT3 mutation (impaired Th17 differentiation).",
    "necessaryInference": "Recognize Job syndrome features and trace pathogenesis to dominant-negative STAT3 mutation causing defective Th17 cell differentiation.",
    "strongestDistractor": "Mutation in the WAS gene encoding Wiskott-Aldrich syndrome protein causing defective actin cytoskeleton rearrangement",
    "distractorExclusion": "Wiskott-Aldrich features eczema and high IgE but is distinguished by microthrombocytopenia and bleeding, without retained primary teeth.",
    "citation": "Freeman AF, Holland SM. The hyper-IgE syndromes. Immunol Allergy Clin North Am. 2008;28(2):277-291. PMID: 18424333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hyper-IgE Syndrome (Job Syndrome) and Th17 Differentiation Defect.",
      "distractorExclusionNotes": "Competitor Mutation in the WAS gene encoding Wiskott-Aldrich  excluded by Wiskott-Aldrich features eczema and high IgE but is distingu.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0705",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Pyruvate Dehydrogenase Deficiency and Ketogenic Amino Acids",
    "provisionalDifficulty": 5,
    "stem": "A 9-month-old male infant presents with hypotonia, microcephaly, and progressive psychomotor retardation. Arterial blood gas shows severe lactic acidosis with lactate 8.2 mmol/L. Serum pyruvate and alanine are both markedly elevated, with a normal lactate-to-pyruvate ratio. Fibroblast enzyme assay confirms a deficiency in the E1-alpha subunit of the pyruvate dehydrogenase (PDH) complex. Which of the following amino acid dietary regimens is most appropriate to provide caloric energy while avoiding exacerbation of lactic acidosis?",
    "choices": [
      [
        "Dietary supplementation with exclusively ketogenic amino acids, specifically lysine and leucine",
        "Pyruvate dehydrogenase (PDH) complex converts pyruvate to acetyl-CoA. When PDH is deficient, pyruvate accumulates and shunts to lactate and alanine. Management requires a ketogenic diet utilizing exclusively ketogenic amino acids\u2014LEUCINE and LYSINE\u2014which catabolize directly to acetyl-CoA and acetoacetate, feeding the TCA cycle and generating energy without producing pyruvate or exacerbating lactic acidosis."
      ],
      [
        "High-carbohydrate, low-fat diet supplemented with glucogenic amino acids, specifically alanine and glycine",
        "Glucogenic amino acids and carbohydrates metabolize directly into pyruvate, which cannot be cleared in PDH deficiency and worsens lactic acidosis."
      ],
      [
        "Dietary supplementation with branched-chain amino acids, specifically valine and isoleucine",
        "Valine is purely glucogenic (forming propionyl-CoA/succinyl-CoA), which can be converted to glucose and pyruvate, worsening acidosis."
      ],
      [
        "Complete restriction of sulfur-containing amino acids, specifically methionine and cysteine",
        "Methionine restriction is the management for homocystinuria, not pyruvate dehydrogenase deficiency."
      ],
      [
        "Oral supplementation with sodium bicarbonate and arginine to drive urea cycle excretion of pyruvate",
        "Arginine drives the urea cycle to treat hyperammonemia; it does not clear pyruvate or bypass the PDH metabolic block."
      ]
    ],
    "shortestValidSolution": "PDH deficiency = Lactic acidosis + elevated alanine -> Treat with ketogenic diet using exclusively ketogenic amino acids (Leucine, Lysine).",
    "necessaryInference": "Recall that leucine and lysine are exclusively ketogenic amino acids that generate acetyl-CoA without producing pyruvate, bypassing the defective PDH complex.",
    "strongestDistractor": "High-carbohydrate, low-fat diet supplemented with glucogenic amino acids, specifically alanine and glycine",
    "distractorExclusion": "Glucogenic amino acids metabolize into pyruvate, feeding the blocked PDH pathway and precipitating lethal lactic acidosis.",
    "citation": "Patel KP, O'Brien TW, Subramony SH, et al. The spectrum of pyruvate dehydrogenase complex deficiency: clinical, biochemical and genetic features in 371 patients. Mol Genet Metab. 2012;106(4):385-394. PMID: 22892344.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Pyruvate Dehydrogenase Deficiency and Ketogenic Amino Acids.",
      "distractorExclusionNotes": "Competitor High-carbohydrate, low-fat diet supplemented with  excluded by Glucogenic amino acids metabolize into pyruvate, feeding the.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0706",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Gastrointestinal",
    "topic": "Clostridioides difficile Toxin B and Rho Glucosyltransferase",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman develops profuse watery diarrhea, abdominal cramping, and leukocytosis (WBC 22,000/microL) 5 days after completing clindamycin for cellulitis. Stool nucleic acid amplification testing is positive for toxigenic Clostridioides difficile. Colonoscopy demonstrates yellowish, raised, adherent mucosal plaques characteristic of pseudomembranous colitis. Which of the following molecular mechanisms directly accounts for the cytotoxic mucosal epithelial damage caused by C. difficile Toxin B (TcdB)?",
    "choices": [
      [
        "UDP-glucose-dependent monoglucosylation of Rho family small GTPases causing actin cytoskeleton depolymerization and disruption of tight junctions",
        "Clostridioides difficile produces two major exotoxins: Toxin A (enterotoxin, TcdA) and Toxin B (cytotoxin, TcdB). Toxin B is a potent glucosyltransferase that uses UDP-glucose to monoglucosylate and irreversibly inactivate host Rho family small GTPases (RhoA, Rac1, and Cdc42). Inactivation of Rho GTPases disrupts actin stress fibers and microfilaments, leading to actin depolymerization, loss of cell shape, collapse of tight junctions (zonula occludens), mucosal barrier breakdown, and apoptotic enterocyte death with pseudomembrane formation."
      ],
      [
        "ADP-ribosylation of the alpha-subunit of the Gs heterotrimeric G protein causing persistent intracellular cAMP elevation",
        "Gs ADP-ribosylation with constitutive cAMP activation is the mechanism of cholera toxin (Vibrio cholerae) and enterotoxigenic E. coli heat-labile toxin (LT)."
      ],
      [
        "Direct enzymatic cleavage of 28S ribosomal RNA in the 60S eukaryotic ribosomal subunit halting peptide elongation",
        "Inactivation of the 60S ribosomal subunit via 28S rRNA cleavage is the mechanism of Shiga toxin (Shigella dysenteriae) and Shiga-like toxin (EHEC/STEC)."
      ],
      [
        "Zinc-dependent endopeptidase cleavage of synaptobrevin (VAMP) blocking presynaptic acetylcholine release",
        "Synaptobrevin cleavage is the mechanism of botulinum and tetanus neurotoxins produced by Clostridium botulinum and Clostridium tetani."
      ],
      [
        "Pore formation in the host cell cholesterol-rich plasma membrane through thiol-activated cytolysin oligomerization",
        "Cholesterol-dependent cytolysin pore formation is the mechanism of listeriolysin O (Listeria monocytogenes) and perfringolysin O (Clostridium perfringens)."
      ]
    ],
    "shortestValidSolution": "C. difficile Toxin B (cytotoxin) = Monoglucosylation of Rho GTPases -> Actin depolymerization, tight junction collapse, and enterocyte apoptosis.",
    "necessaryInference": "Identify that C. difficile Toxin B (TcdB) acts as a glucosyltransferase targeting Rho/Rac/Cdc42, disrupting the actin cytoskeleton and mucosal tight junctions.",
    "strongestDistractor": "ADP-ribosylation of the alpha-subunit of the Gs heterotrimeric G protein causing persistent intracellular cAMP elevation",
    "distractorExclusion": "Gs ADP-ribosylation causing cAMP-mediated secretory diarrhea is the mechanism of cholera toxin, not C. difficile Toxin B.",
    "citation": "Aktories K, Schwan C, Jank T. Clostridium difficile Toxin Biology. Annu Rev Microbiol. 2017;71:281-307. PMID: 28657885.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Clostridioides difficile Toxin B and Rho Glucosyltransferase.",
      "distractorExclusionNotes": "Competitor ADP-ribosylation of the alpha-subunit of the Gs he excluded by Gs ADP-ribosylation causing cAMP-mediated secretory diarrhea.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0707",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Warfarin-Induced Skin Necrosis and Protein C Decay Kinetics",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with a history of recurrent deep venous thrombosis is initiated on oral warfarin 10 mg daily without concurrent parenteral anticoagulation. On the third day of therapy, she develops exquisitely painful, well-demarcated, violaceous purpuric plaques on her breasts, thighs, and buttocks that rapidly progress to bullae and full-thickness cutaneous necrosis. Laboratory testing reveals an INR of 1.4. Which of the following pharmacokinetic principles accounts for this acute prothrombotic complication?",
    "choices": [
      [
        "Protein C has a markedly shorter biological half-life (~8 hours) than prothrombin and Factor X (~40-70 hours), causing a transient procoagulant state",
        "Warfarin inhibits vitamin K epoxide reductase (VKORC1), blocking gamma-carboxylation of clotting factors II, VII, IX, and X, as well as the endogenous anticoagulants Protein C and Protein S. Because Protein C has a very short biological half-life (~8 hours) compared to Factor X (~40 hours) and prothrombin (~60-72 hours), Protein C activity drops precipitously within 24 to 48 hours while downstream procoagulant factors remain active. This creates a transient, dangerous prothrombotic imbalance that triggers microvascular thrombosis in subcutaneous fat capillaries, causing warfarin-induced skin necrosis (often exacerbated by underlying hereditary Protein C deficiency)."
      ],
      [
        "Factor VII has a prolonged half-life of 60 hours, resulting in delayed extrinsic pathway inhibition",
        "Factor VII actually has the shortest half-life of the procoagulant factors (~6 hours), which accounts for early prolongation of the PT/INR, but it does not cause thrombosis."
      ],
      [
        "Warfarin directly binds to antithrombin III, inducing an allosteric conformational change that accelerates thrombin generation",
        "Warfarin does not bind antithrombin III; heparin accelerates antithrombin III activity."
      ],
      [
        "Hepatic clearance of warfarin is zero-order at standard therapeutic doses, causing rapid intracellular accumulation",
        "Warfarin exhibits first-order clearance at therapeutic doses and is metabolized by cytochrome P450 enzymes (primarily CYP2C9)."
      ],
      [
        "Warfarin irreversibly acetylates platelet cyclooxygenase-1, inhibiting prostacyclin synthesis in vascular endothelial cells",
        "COX-1 acetylation is the mechanism of aspirin, not warfarin."
      ]
    ],
    "shortestValidSolution": "Warfarin loading without heparin -> Protein C has shortest half-life (8h) -> Transient procoagulant state -> Microvascular thrombosis and skin necrosis.",
    "necessaryInference": "Recall the relative half-lives of vitamin K-dependent factors: Protein C decays before prothrombin/Factor X, creating a transient hypercoagulable state.",
    "strongestDistractor": "Factor VII has a prolonged half-life of 60 hours, resulting in delayed extrinsic pathway inhibition",
    "distractorExclusion": "Factor VII has the shortest procoagulant half-life (~6 hours), leading to early INR elevation, but it is the rapid loss of anticoagulant Protein C that drives necrosis.",
    "citation": "Nazarian RM, Van Cott EM, Zembowicz A, Duncan LM. Warfarin-induced skin necrosis. J Am Acad Dermatol. 2009;61(2):325-332. PMID: 19615543.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Warfarin-Induced Skin Necrosis and Protein C Decay Kinetics.",
      "distractorExclusionNotes": "Competitor Factor VII has a prolonged half-life of 60 hours,  excluded by Factor VII has the shortest procoagulant half-life (~6 hours.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0708",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Methemoglobinemia vs Carbon Monoxide Oxygen Binding Dynamics",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man undergoes an outpatient upper endoscopy. During the procedure, topical benzocaine spray is administered to his oropharynx. Twenty minutes later in recovery, his lips and nail beds appear cyanotic. Pulse oximetry reads 86% on 100% supplemental oxygen by non-rebreather mask and does not change with increased flow. Arterial blood gas reveals: pH 7.42, PaO2 104 mm Hg, and calculated SaO2 98%. Co-oximetry reveals a methemoglobin fraction of 38%. Blood drawn for laboratory testing is chocolate-brown in appearance and does not turn red upon exposure to air. Which of the following alterations in hemoglobin biochemistry is present in this patient?",
    "choices": [
      [
        "Oxidation of iron from the ferrous (Fe2+) to the ferric (Fe3+) state, which cannot bind oxygen and increases the oxygen affinity of remaining ferrous hemes",
        "Methemoglobin is formed when the iron moiety of heme is oxidized from the ferrous (Fe2+) state to the ferric (Fe3+) state by oxidizing agents such as topical benzocaine, dapsone, or nitrates. Ferric (Fe3+) iron cannot bind oxygen. Furthermore, the presence of ferric iron induces an allosteric conformational change in the hemoglobin tetramer that increases the oxygen affinity of the remaining ferrous (Fe2+) hemes, shifting the oxygen-hemoglobin dissociation curve to the LEFT and severely impeding oxygen unloading to peripheral tissues (tissue hypoxia). PaO2 remains normal because dissolved arterial oxygen is unaffected."
      ],
      [
        "Competitive binding of carbon monoxide to ferrous heme with 240-fold greater affinity than oxygen",
        "Carbon monoxide poisoning involves competitive binding of CO to ferrous (Fe2+) heme, producing carboxyhemoglobin, not methemoglobin with chocolate-brown blood."
      ],
      [
        "Mutation in the distal histidine of the beta-globin chain causing permanent covalent cross-linking of the alpha-beta dimer",
        "Hemoglobin M variants involve mutations near the heme pocket, but acute toxic methemoglobinemia from topical benzocaine is an acquired oxidation."
      ],
      [
        "Precipitation of oxidized beta-globin tetramers within the erythrocyte membrane forming Heinz bodies",
        "Beta-globin tetramers (HbH) occur in alpha-thalassemia; Heinz bodies form in G6PD deficiency, but benzocaine acutely causes methemoglobinemia."
      ],
      [
        "Excessive reduction of ferric iron by cytochrome b5 reductase leading to unstable deoxyhemoglobin polymers",
        "Cytochrome b5 reductase normally REDUCES ferric (Fe3+) iron back to ferrous (Fe2+); methemoglobinemia occurs when oxidation overwhelms this reductase enzyme."
      ]
    ],
    "shortestValidSolution": "Topical benzocaine + cyanosis unresponsive to O2 + normal PaO2 + chocolate-brown blood = Methemoglobinemia -> Fe2+ oxidized to Fe3+ (left shift of O2 curve).",
    "necessaryInference": "Identify drug-induced methemoglobinemia: oxidation of iron to Fe3+ prevents O2 binding and shifts remaining hemes left; PaO2 is normal.",
    "strongestDistractor": "Competitive binding of carbon monoxide to ferrous heme with 240-fold greater affinity than oxygen",
    "distractorExclusion": "Carbon monoxide binds ferrous (Fe2+) iron and causes cherry-red skin, whereas methemoglobinemia involves ferric (Fe3+) iron and chocolate-brown blood.",
    "citation": "Skold A, Cosco DL, Klein R. Methemoglobinemia: pathogenesis, diagnosis, and management. South Med J. 2011;104(11):757-761. PMID: 22064821.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Methemoglobinemia vs Carbon Monoxide Oxygen Binding Dynamics.",
      "distractorExclusionNotes": "Competitor Competitive binding of carbon monoxide to ferrous  excluded by Carbon monoxide binds ferrous (Fe2+) iron and causes cherry-.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0709",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Nervous System",
    "topic": "Lambert-Eaton Myasthenic Syndrome P/Q Calcium Channel Blockade",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man with a 40-pack-year smoking history presents with progressive weakness in his hips and shoulders, making it difficult to stand up from a chair or climb stairs. He also reports dry mouth, constipation, and erectile dysfunction. On physical examination, proximal lower extremity muscle strength is 3/5 initially, but with repeated maximal contraction over 10 seconds, muscle strength improves to 4+/5. Deep tendon reflexes are absent at rest but reappear following brief isometric exercise. A chest CT scan reveals a 4-cm central hilar mass with mediastinal lymphadenopathy. Which of the following is the primary electrophysiological mechanism underlying this patient's muscle weakness?",
    "choices": [
      [
        "Autoantibodies directed against presynaptic P/Q-type voltage-gated calcium channels reducing acetylcholine quantum release",
        "Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic autoimmune channelopathy strongly associated with small cell lung cancer (SCLC). Autoantibodies target presynaptic P/Q-type voltage-gated calcium channels (VGCCs) at the neuromuscular junction. Reduced calcium influx upon motor nerve depolarization diminishes exocytic release of acetylcholine quanta. With repetitive nerve stimulation or voluntary isometric exercise, intracellular calcium accumulates in the presynaptic terminal, overcoming the block and facilitating transiently normal acetylcholine release (incremental response on electromyography and post-exercise reflex potentiation). Autonomic symptoms (dry mouth, constipation, erectile dysfunction) occur due to VGCC antibodies in the autonomic ganglia."
      ],
      [
        "Autoantibodies targeting postsynaptic nicotinic acetylcholine receptors causing endocytosis and receptor depletion",
        "Myasthenia gravis involves postsynaptic nicotinic acetylcholine receptor (AChR) autoantibodies; muscle strength fatigues with repetitive exercise (decremental EMG response), without autonomic dysfunction or post-exercise potentiation."
      ],
      [
        "Autoantibodies targeting muscle-specific receptor tyrosine kinase (MuSK) impairing postsynaptic clustering",
        "Anti-MuSK myasthenia gravis causes postsynaptic fatiguable weakness (predominantly bulbar/facial) without post-exercise potentiation or autonomic symptoms."
      ],
      [
        "Irreversible blockade of the presynaptic high-affinity choline transporter (ChT) halting acetylcholine synthesis",
        "Choline transporter blockade (e.g., by hemicholinium) prevents ACh synthesis, but is not an autoimmune paraneoplastic disease mechanism."
      ],
      [
        "Excessive vesicular acetylcholine release causing sustained postsynaptic endplate depolarization block",
        "Depolarization block occurs with organophosphate poisoning or succinylcholine, causing fasciculations and flaccid paralysis without post-exercise improvement."
      ]
    ],
    "shortestValidSolution": "Proximal weakness improving with exercise + absent reflexes returning post-exercise + dry mouth + lung mass = LEMS -> Anti-P/Q VGCC antibodies.",
    "necessaryInference": "Differentiate LEMS from myasthenia gravis based on post-exercise facilitation and autonomic symptoms; link to presynaptic P/Q-type VGCC autoantibodies.",
    "strongestDistractor": "Autoantibodies targeting postsynaptic nicotinic acetylcholine receptors causing endocytosis and receptor depletion",
    "distractorExclusion": "Postsynaptic AChR antibodies (myasthenia gravis) cause muscle fatiguability that worsens with exercise, whereas LEMS exhibits post-exercise facilitation.",
    "citation": "Titulaer MJ, Lang B, Verschuuren JJ. Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Lambert-Eaton Myasthenic Syndrome P/Q Calcium Channel Blockade.",
      "distractorExclusionNotes": "Competitor Autoantibodies targeting postsynaptic nicotinic ac excluded by Postsynaptic AChR antibodies (myasthenia gravis) cause muscl.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0710",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Abetalipoproteinemia and Microsomal Triglyceride Transfer Protein",
    "provisionalDifficulty": 5,
    "stem": "An 8-month-old male infant is evaluated for failure to thrive, persistent pale greasy stools, and progressive abdominal distension. Neurological examination reveals generalized hypotonia and absent deep tendon reflexes. Funduscopic examination shows early pigmentary retinal degeneration. Peripheral blood smear reveals numerous erythrocytes with irregular, thorn-like thorny cytoplasmic projections (acanthocytosis). Fasting serum lipid profile shows: total cholesterol 28 mg/dL, triglycerides 12 mg/dL, and undetectable serum apolipoprotein B. Jejunal biopsy demonstrates enterocytes with normal villus architecture whose cytoplasm is densely packed with lipid droplets. Which of the following is the underlying molecular defect in this disorder?",
    "choices": [
      [
        "Loss-of-function mutation in the MTTP gene encoding microsomal triglyceride transfer protein",
        "Abetalipoproteinemia (Bassen-Kornzweig syndrome) is an autosomal recessive disorder caused by loss-of-function mutations in the MTTP gene, which encodes microsomal triglyceride transfer protein. MTTP is essential for loading lipids onto Apolipoprotein B (ApoB-48 in intestinal enterocytes and ApoB-100 in hepatocytes). Without functional MTTP, chylomicrons and VLDL/LDL cannot be assembled or secreted. Dietary fats accumulate inside enterocytes (visible as lipid-laden enterocytes on biopsy). Severe malabsorption of fat and fat-soluble vitamins (A, D, E, K) results. Vitamin E deficiency causes spinocerebellar degeneration, ataxia, and retinitis pigmentosa, while membrane lipid imbalance causes acanthocytosis."
      ],
      [
        "Homozygous mutation in the APOE gene preventing clearance of chylomicron remnants and VLDL by hepatic LDL receptors",
        "ApoE deficiency causes Familial Dysbetalipoproteinemia (Type III hyperlipoproteinemia), characterized by severe hypercholesterolemia, hypertriglyceridemia, and palmar xanthomas, not absent ApoB or lipid-laden enterocytes."
      ],
      [
        "Deficiency of lipoprotein lipase (LPL) preventing intravascular hydrolysis of triglycerides in circulating chylomicrons",
        "LPL deficiency causes Familial Hyperchylomicronemia (Type I), presenting with eruptive xanthomas, acute pancreatitis, and milky serum with massive hypertriglyceridemia, not abetalipoproteinemia."
      ],
      [
        "Autosomal dominant mutation in the low-density lipoprotein receptor (LDLR) gene preventing cellular uptake of LDL particles",
        "LDL receptor mutations cause Familial Hypercholesterolemia (Type IIa), characterized by severe hypercholesterolemia, tendon xanthomas, and premature coronary artery disease."
      ],
      [
        "Defective lysosomal acid lipase preventing hydrolysis of cholesteryl esters in macrophages",
        "Lysosomal acid lipase deficiency causes Wolman disease, presenting with hepatosplenomegaly, adrenal calcification, and macrophage storage, not absence of ApoB."
      ]
    ],
    "shortestValidSolution": "Steatorrhea + lipid-laden enterocytes + acanthocytosis + ataxia + undetectable ApoB = Abetalipoproteinemia -> MTTP gene mutation.",
    "necessaryInference": "Connect steatorrhea with lipid-packed enterocytes, acanthocytosis, and absent ApoB to autosomal recessive MTTP mutation (chylomicron/VLDL assembly failure).",
    "strongestDistractor": "Deficiency of lipoprotein lipase (LPL) preventing intravascular hydrolysis of triglycerides in circulating chylomicrons",
    "distractorExclusion": "LPL deficiency causes massive hypertriglyceridemia and milky plasma, whereas abetalipoproteinemia causes near-zero triglycerides and undetectable ApoB.",
    "citation": "Welty FK. Hypobetalipoproteinemia and abetalipoproteinemia. Curr Opin Lipidol. 2014;25(3):161-168. PMID: 24785890.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Abetalipoproteinemia and Microsomal Triglyceride Transfer Protein.",
      "distractorExclusionNotes": "Competitor Deficiency of lipoprotein lipase (LPL) preventing  excluded by LPL deficiency causes massive hypertriglyceridemia and milky.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0711",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Endocrine",
    "topic": "17-alpha-Hydroxylase Deficiency and Steroid Shunting",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old phenotypic female is evaluated for primary amenorrhea and absence of pubertal development. On physical examination, she has Tanner stage 1 breast development and no pubic or axillary hair. Her blood pressure is 158/98 mm Hg across multiple visits. Serum electrolytes show sodium 144 mEq/L, potassium 2.8 mEq/L, and bicarbonate 31 mEq/L. Pelvic ultrasound reveals absent uterus and fallopian tubes, with intra-abdominal gonads. Chromosomal analysis reveals a 46,XY karyotype. Serum levels of corticosterone and 11-deoxycorticosterone are elevated, while cortisol, testosterone, and androstenedione are undetectable. Which of the following enzymatic deficiencies explains this patient's clinical presentation?",
    "choices": [
      [
        "17-alpha-hydroxylase (CYP17A1) deficiency",
        "17-alpha-hydroxylase converts pregnenolone and progesterone into 17-hydroxypregnenolone and 17-hydroxyprogesterone, respectively. When deficient, mineralocorticoid precursors (11-deoxycorticosterone and corticosterone) accumulate, causing hypertension, hypokalemia, and metabolic alkalosis. Concurrently, synthesis of cortisol and sex steroids (androgens and estrogens) is completely blocked. In 46,XY individuals, lack of testosterone leads to female external genitalia (pseudohermaphroditism) with undescended testes and absence of secondary sexual characteristics, while persistent antim\u00fcllerian hormone (AMH) from Sertoli cells causes regression of m\u00fcllerian structures (absent uterus/fallopian tubes)."
      ],
      [
        "21-hydroxylase (CYP21A2) deficiency",
        "21-hydroxylase deficiency impairs mineralocorticoids and cortisol, causing salt wasting (hypotension, hyperkalemia) and androgen excess (virilization in females, precocious puberty in males)."
      ],
      [
        "11-beta-hydroxylase (CYP11B1) deficiency",
        "11-beta-hydroxylase deficiency causes hypertension from 11-deoxycorticosterone, but cortisol precursors shunt to androgens, causing virilization, not androgen deficiency."
      ],
      [
        "5-alpha-reductase type 2 deficiency",
        "5-alpha-reductase deficiency impairs conversion of testosterone to DHT, causing ambiguous genitalia in 46,XY individuals that virilize at puberty without hypertension or hypokalemia."
      ],
      [
        "Aromatase (CYP19A1) deficiency",
        "Aromatase deficiency blocks estrogen synthesis from androgens, causing maternal and female fetal virilization with normal blood pressure and potassium."
      ]
    ],
    "shortestValidSolution": "Hypertension + hypokalemia + phenotypic female with 46,XY karyotype and absent secondary sex characteristics = 17-alpha-hydroxylase deficiency.",
    "necessaryInference": "Recognize mineralocorticoid excess (HTN, low K) combined with complete block in sex steroids in 46,XY as CYP17A1 deficiency.",
    "strongestDistractor": "11-beta-hydroxylase (CYP11B1) deficiency",
    "distractorExclusion": "11-beta-hydroxylase causes hypertension but also androgen excess (virilization), whereas 17-alpha-hydroxylase blocks androgen synthesis entirely.",
    "citation": "Miller WL, Auchus RJ. The molecular biology, biochemistry, and physiology of human steroidogenesis and its disorders. Endocr Rev. 2011;32(1):81-151. PMID: 21051590.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating 17-alpha-Hydroxylase Deficiency and Steroid Shunting.",
      "distractorExclusionNotes": "Competitor 11-beta-hydroxylase (CYP11B1) deficiency excluded by 11-beta-hydroxylase causes hypertension but also androgen ex.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0712",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Type 4 Renal Tubular Acidosis and Aldosterone Resistance",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 20-year history of poorly controlled type 2 diabetes and diabetic nephropathy presents for routine follow-up. Blood pressure is 142/86 mm Hg. Laboratory studies show: serum sodium 138 mEq/L, potassium 5.8 mEq/L, chloride 109 mEq/L, bicarbonate 18 mEq/L, BUN 34 mg/dL, and serum creatinine 2.1 mg/dL. Anion gap is 11 mEq/L. Urinalysis demonstrates a urine pH of 5.1 and negative ketones. Plasma renin activity and serum aldosterone concentrations are both markedly reduced. Which of the following transport abnormalities in the cortical collecting duct directly accounts for this patient's hyperkalemic non-anion gap metabolic acidosis?",
    "choices": [
      [
        "Impaired apical epithelial sodium channel (ENaC) activity causing loss of the lumen-negative transepithelial potential required for H+ and K+ excretion",
        "Type 4 renal tubular acidosis (hypoaldosteronemic RTA) is the most common RTA, typically arising in diabetic nephropathy due to hyporeninemic hypoaldosteronism. In the cortical collecting duct, aldosterone normally upregulates apical ENaC sodium channels and basolateral Na+/K+-ATPase in principal cells, generating a lumen-negative transepithelial electrical potential. This lumen-negative potential provides the electrical driving force for K+ secretion through ROMK in principal cells and H+ secretion through apical H+-ATPase in alpha-intercalated cells. Deficiency or resistance to aldosterone impairs ENaC, abolishing the lumen-negative gradient and causing hyperkalemia and metabolic acidosis. Furthermore, hyperkalemia directly impairs renal cortical glutaminase, reducing proximal ammoniagenesis and urinary ammonium excretion, while urine pH remains appropriately acidic (< 5.5)."
      ],
      [
        "Direct defect in the apical H+-ATPase pump of alpha-intercalated cells causing failure of active proton pumping into the lumen",
        "Direct failure of the H+-ATPase pump occurs in distal (Type 1) RTA, which causes hypokalemia (not hyperkalemia) and an inappropriately alkaline urine pH > 5.5."
      ],
      [
        "Defective basolateral Na+/HCO3- cotransporter (NBCe1) in proximal tubule cells causing massive bicarbonate wasting",
        "NBCe1 defects cause proximal (Type 2) RTA, which presents with hypokalemia and low fractional excretion of bicarbonate once serum bicarbonate drops, without hypoaldosteronism."
      ],
      [
        "Complete inhibition of the apical Na+-H+ exchanger (NHE3) in the thick ascending limb of Henle",
        "NHE3 is primarily in the proximal tubule; its inhibition does not explain the selective hyperkalemic hypoaldosteronism of Type 4 RTA."
      ],
      [
        "Overexpression of the apical pendrin Cl-/HCO3- exchanger in beta-intercalated cells causing excessive bicarbonate loss",
        "Pendrin mediates bicarbonate secretion in beta-intercalated cells; it is not overexpressed in hypoaldosteronism and does not drive Type 4 RTA."
      ]
    ],
    "shortestValidSolution": "Diabetic nephropathy + hyperkalemia + non-gap acidosis + urine pH < 5.5 = Type 4 RTA -> Hypoaldosteronism diminishes cortical ENaC lumen-negative potential.",
    "necessaryInference": "Connect diabetic hyporeninemic hypoaldosteronism to Type 4 RTA: loss of aldosterone impairs ENaC, reducing the electrical gradient for H+ and K+ secretion.",
    "strongestDistractor": "Direct defect in the apical H+-ATPase pump of alpha-intercalated cells causing failure of active proton pumping into the lumen",
    "distractorExclusion": "Apical H+-ATPase failure causes Type 1 RTA with hypokalemia and alkaline urine (pH > 5.5), whereas Type 4 RTA features hyperkalemia and acidic urine (pH < 5.5).",
    "citation": "Batlle D, Haque SK. Genetic causes and mechanisms of renal tubular acidosis. J Am Soc Nephrol. 2012;23(12):1913-1925. PMID: 23138443.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Type 4 Renal Tubular Acidosis and Aldosterone Resistance.",
      "distractorExclusionNotes": "Competitor Direct defect in the apical H+-ATPase pump of alph excluded by Apical H+-ATPase failure causes Type 1 RTA with hypokalemia .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0713",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Musculoskeletal",
    "topic": "Malignant Hyperthermia Ryanodine Receptor 1 Mutations",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old man undergoes urgent open reduction and internal fixation of a fractured femur. General anesthesia is induced with intravenous propofol and inhaled sevoflurane, followed by succinylcholine for endotracheal intubation. Ten minutes into the procedure, the anesthesiologist notes persistent masseter muscle rigidity preventing jaw movement. End-tidal CO2 rapidly escalates from 38 mm Hg to 84 mm Hg despite increased mechanical ventilation. Core body temperature increases from 37.0 C to 40.2 C over 15 minutes. Blood gas reveals pH 7.12, PaCO2 68 mm Hg, and lactate 9.4 mmol/L. Serum potassium is 6.8 mEq/L and creatine kinase is 34,000 U/L. Which of the following is the underlying molecular mechanism responsible for this acute life-threatening crisis?",
    "choices": [
      [
        "Uncontrolled calcium efflux from the sarcoplasmic reticulum into the myoplasm via a mutated ryanodine receptor 1 (RYR1) channel",
        "Malignant hyperthermia is an autosomal dominant pharmacogenetic disorder triggered by volatile halogenated anesthetics (sevoflurane, desflurane, isoflurane) or succinylcholine. In susceptible individuals, mutations in the RYR1 gene (encoding the skeletal muscle ryanodine receptor 1) or CACNA1S (encoding the L-type dihydropyridine calcium channel) cause sustained opening of the RYR1 channel upon exposure to triggering agents. Massive, uncontrolled efflux of calcium from the sarcoplasmic reticulum into the myoplasm stimulates constitutive actin-myosin cross-bridge cycling and hypermetabolism. The muscle cells exhaust ATP, consume oxygen, and generate massive amounts of CO2 and heat. Myocyte necrosis (rhabdomyolysis) follows, causing hyperkalemia and myoglobinuria. Treatment is immediate cessation of triggering agents, hyperventilation with 100% O2, and administration of DANTROLENE (which binds RYR1 and blocks calcium release)."
      ],
      [
        "Sustained blockade of postsynaptic nicotinic acetylcholine receptors causing permanent endplate repolarization failure",
        "Succinylcholine initially depolarizes nicotinic receptors, but malignant hyperthermia is not caused by receptor blockade; it is an intracellular calcium release channel defect."
      ],
      [
        "Overactivation of the sarcoplasmic/endoplasmic reticulum Ca2+-ATPase (SERCA) pump consuming excessive ATP",
        "SERCA normally pumps calcium back into the sarcoplasmic reticulum; in malignant hyperthermia, SERCA cannot keep pace with the massive RYR1 calcium leak."
      ],
      [
        "Autoantibodies directed against presynaptic voltage-gated potassium channels (VGKC) preventing nerve repolarization",
        "Anti-VGKC antibodies cause neuromyotonia (Isaacs syndrome) or autoimmune encephalitis, not acute anesthetic-induced malignant hyperthermia."
      ],
      [
        "Competitive inhibition of mitochondrial complex I (NADH dehydrogenase) causing catastrophic ATP depletion",
        "Malignant hyperthermia involves runaway sarcoplasmic calcium release and accelerated mitochondrial metabolism, not complex I inhibition (rotenone)."
      ]
    ],
    "shortestValidSolution": "Sevoflurane/succinylcholine + jaw rigidity + rapid hypercapnia (ETCO2 84) + hyperthermia + rhabdomyolysis = Malignant hyperthermia -> Mutated RYR1 Ca2+ leak.",
    "necessaryInference": "Trace volatile anesthetic triggering of malignant hyperthermia to mutated RYR1 channels causing uncontrolled sarcoplasmic calcium efflux.",
    "strongestDistractor": "Overactivation of the sarcoplasmic/endoplasmic reticulum Ca2+-ATPase (SERCA) pump consuming excessive ATP",
    "distractorExclusion": "SERCA is overwhelmed by the massive calcium efflux through defective RYR1 channels; it is not the primary mutated driver of malignant hyperthermia.",
    "citation": "Rosenberg H, Pollock N, Schiemann A, Bulger T, Stowell K. Malignant hyperthermia: a review. Orphanet J Rare Dis. 2015;10:93. PMID: 26242377.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Malignant Hyperthermia Ryanodine Receptor 1 Mutations.",
      "distractorExclusionNotes": "Competitor Overactivation of the sarcoplasmic/endoplasmic ret excluded by SERCA is overwhelmed by the massive calcium efflux through d.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0714",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Fragile X Syndrome FMR1 CGG Expansion and Hypermethylation",
    "provisionalDifficulty": 5,
    "stem": "A 6-year-old boy is brought to the pediatric genetics clinic for evaluation of intellectual disability, severe hyperactivity, and poor eye contact. Physical examination reveals a long, narrow face with a prominent forehead and jaw, large protruding ears, hyperflexible finger joints, and macroorchidism. High-resolution Southern blot and polymerase chain reaction (PCR) analysis of the FMR1 gene reveals approximately 850 CGG trinucleotide repeats. Which of the following epigenetic mechanisms directly accounts for the transcriptional silencing of the FMR1 gene in this patient?",
    "choices": [
      [
        "Hypermethylation of cytosine residues in the CpG islands of the FMR1 promoter region leading to chromatin compaction and transcriptional arrest",
        "Fragile X syndrome is the most common inherited cause of intellectual disability and autism spectrum disorder, inherited in an X-linked dominant manner. It is caused by an unstable expansion of a CGG trinucleotide repeat in the 5' untranslated region of the FMR1 gene (normal < 45 repeats; premutation 55-200 repeats; full mutation > 200 repeats). When repeat length exceeds 200, the expanded CpG-rich region attracts DNA methyltransferases, causing hypermethylation of cytosine bases in the promoter CpG island. This epigenetic hypermethylation recruits histone deacetylases and methyl-CpG-binding proteins (MeCP2), converting open euchromatin into condensed heterochromatin and silencing FMR1 transcription. Loss of fragile X mental retardation protein (FMRP)\u2014a cytoplasmic RNA-binding protein that represses dendritic mRNA translation\u2014impairs synaptic plasticity."
      ],
      [
        "Alternative pre-mRNA splicing skipping exon 15 and producing an unstable truncated protein destined for ubiquitin degradation",
        "Fragile X silencing occurs at the transcriptional level via promoter hypermethylation, not through alternative pre-mRNA splicing or exon skipping."
      ],
      [
        "Trinucleotide repeat-mediated polyglutamine tract expansion causing misfolded toxic protein aggregates in neuronal nuclei",
        "Polyglutamine (CAG repeat) toxic gain-of-function occurs in Huntington disease and spinocerebellar ataxias, whereas Fragile X involves CGG repeats and transcriptional silencing."
      ],
      [
        "Impaired ATP-dependent chromatin remodeling due to homozygous deletion of the SWI/SNF nucleosome-remodeling complex",
        "SWI/SNF mutations cause Coffin-Siris syndrome, not Fragile X syndrome."
      ],
      [
        "Failure of genomic imprinting resulting in maternal uniparental disomy of chromosome 15q11-q13",
        "Maternal uniparental disomy of chromosome 15q11-q13 causes Prader-Willi syndrome, not Fragile X syndrome."
      ]
    ],
    "shortestValidSolution": "Long face + large ears + macroorchidism + CGG repeat > 200 = Fragile X syndrome -> FMR1 promoter CpG island hypermethylation and gene silencing.",
    "necessaryInference": "Connect CGG trinucleotide expansion (> 200) to FMR1 transcriptional silencing mediated by promoter CpG island hypermethylation.",
    "strongestDistractor": "Trinucleotide repeat-mediated polyglutamine tract expansion causing misfolded toxic protein aggregates in neuronal nuclei",
    "distractorExclusion": "Polyglutamine toxic aggregates result from CAG repeats (Huntington disease), whereas Fragile X involves 5' UTR CGG repeats causing transcriptional silencing.",
    "citation": "Hagerman RJ, Berry-Kravis E, Hazlett HC, et al. Fragile X syndrome. Nat Rev Dis Primers. 2017;3:17065. PMID: 28960184.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Fragile X Syndrome FMR1 CGG Expansion and Hypermethylation.",
      "distractorExclusionNotes": "Competitor Trinucleotide repeat-mediated polyglutamine tract  excluded by Polyglutamine toxic aggregates result from CAG repeats (Hunt.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0715",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Acute Tubular Necrosis S3 Proximal Tubule vs Medullary TAL Vulnerability",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man in septic shock secondary to Escherichia coli pyelonephritis experiences a prolonged period of profound hypotension with mean arterial pressures below 50 mm Hg for 4 hours. Following fluid resuscitation and vasopressor support, his urine output drops to 120 mL over 24 hours. Laboratory studies show: serum creatinine rising from 1.0 to 3.8 mg/dL and BUN 48 mg/dL. Urinalysis demonstrates dirty brown granular casts and renal tubular epithelial cells. Which of the following nephron segments is most susceptible to ischemic injury in this patient due to its combination of high metabolic demand and precarious baseline oxygenation?",
    "choices": [
      [
        "Straight segment (S3) of the proximal tubule and the medullary thick ascending limb of Henle",
        "Ischemic acute tubular necrosis (ATN) selectively damages the straight segment of the proximal tubule (S3 segment) and the medullary thick ascending limb (mTAL) of Henle. These two segments are located in the outer medulla, where baseline tissue oxygen tension is physiologically low (PO2 ~10-20 mm Hg) due to the countercurrent architecture of the vasa recta. Concurrently, both segments have massive ATP-consuming active transport requirements: the proximal tubule for solute and water reabsorption, and the mTAL for the Na+-K+-2Cl- (NKCC2) cotransporter. When renal perfusion pressure drops precipitously in septic shock, outer medullary hypoxia becomes severe, depleting ATP, causing loss of tubular polarity, blebbing, brush border loss, cell detachment, and tubular obstruction by sloughed necrotic debris ('muddy brown' granular casts)."
      ],
      [
        "Distal convoluted tubule and the cortical collecting duct principal cells",
        "The distal convoluted tubule and cortical collecting duct reside in the cortex, which receives 90% of renal blood flow and maintains high baseline tissue oxygenation, making them resistant to ischemic necrosis."
      ],
      [
        "Glomerular visceral epithelial cells (podocytes) and mesangial cells",
        "Podocytes and mesangial cells suffer in glomerular diseases (membranous nephropathy, FSGS, diabetic glomerulosclerosis); they do not undergo necrosis in ischemic ATN."
      ],
      [
        "Thin descending limb of Henle and the inner medullary collecting duct",
        "The thin descending limb has low metabolic activity (passive water transport via aquaporin-1 without active transport pumps) and is resistant to ischemic necrosis."
      ],
      [
        "Juxtaglomerular granular cells of the afferent arteriole",
        "Juxtaglomerular cells sense perfusion pressure and secrete renin; they do not undergo tubular necrosis during ischemic ATN."
      ]
    ],
    "shortestValidSolution": "Ischemic ATN muddy brown casts = Necrosis of straight proximal tubule (S3) and medullary thick ascending limb (mTAL).",
    "necessaryInference": "Identify the two nephron segments most vulnerable to ischemic ATN based on high metabolic transport demand in the hypoxic outer medulla (S3 and mTAL).",
    "strongestDistractor": "Distal convoluted tubule and the cortical collecting duct principal cells",
    "distractorExclusion": "The distal convoluted tubule and cortical collecting duct reside in the well-perfused renal cortex and are resistant to ischemic injury.",
    "citation": "Bonventre JV, Yang L. Cellular pathophysiology of ischemic acute kidney injury. J Clin Invest. 2011;121(11):4210-4221. PMID: 22045871.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Acute Tubular Necrosis S3 Proximal Tubule vs Medullary TAL Vulnerability.",
      "distractorExclusionNotes": "Competitor Distal convoluted tubule and the cortical collecti excluded by The distal convoluted tubule and cortical collecting duct re.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0716",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Digoxin Toxicity Na+/K+-ATPase Inhibition and Hyperkalemia",
    "provisionalDifficulty": 5,
    "stem": "An 81-year-old woman with chronic atrial fibrillation and heart failure with reduced ejection fraction is brought to the emergency department for severe nausea, vomiting, confusion, and yellowish-green visual halos. Her current medications include digoxin, furosemide, and carvedilol. On physical examination, her pulse is 44/min and irregular. ECG demonstrates atrial fibrillation with a regular ventricular response of 44/min and frequent bidirectional ventricular premature beats. Laboratory studies reveal: BUN 42 mg/dL, serum creatinine 2.4 mg/dL (baseline 1.1 mg/dL), serum potassium 6.2 mEq/L, and serum digoxin concentration 4.8 ng/mL (therapeutic 0.5-0.9 ng/mL). Which of the following electrophysiological mechanisms directly accounts for the life-threatening hyperkalemia observed in acute severe digoxin toxicity?",
    "choices": [
      [
        "Widespread poisoning of the sarcolemmal and cellular Na+/K+-ATPase pump preventing active potassium re-entry into cells",
        "Digoxin binds reversibly to the extracellular alpha-subunit of the sarcolemmal Na+/K+-ATPase pump, inhibiting the active extrusion of 3 Na+ ions and uptake of 2 K+ ions against their concentration gradients. In severe digoxin toxicity, massive and widespread blockade of Na+/K+-ATPase across skeletal muscle and myocardium halts cellular K+ uptake, causing extracellular potassium accumulation and severe hyperkalemia. Hyperkalemia in acute digoxin toxicity is a direct marker of the extent of Na+/K+-ATPase pump poisoning and serves as the single strongest predictor of mortality, serving as a primary indication for immediate digoxin immune fab (Digibind) therapy."
      ],
      [
        "Accelerated renal potassium reabsorption via upregulation of the medullary collecting duct H+/K+-ATPase antiporter",
        "Digoxin does not stimulate collecting duct H+/K+-ATPase; the hyperkalemia of digitalis toxicity is due to failure of cellular uptake across skeletal muscle and myocardial beds."
      ],
      [
        "Direct stimulation of adrenal zona glomerulosa mineralocorticoid receptors suppressing aldosterone secretion",
        "Digoxin does not suppress aldosterone; secondary hyperreninemic hyperaldosteronism is common in heart failure, but digitalis directly blocks cellular potassium uptake."
      ],
      [
        "Sustained opening of cardiac voltage-gated potassium channels (Kv1.5) accelerating extracellular potassium efflux",
        "Digoxin does not open voltage-gated potassium channels; it causes intracellular calcium overload and delayed afterdepolarizations by increasing intracellular sodium."
      ],
      [
        "Selective blockade of proximal tubule Na+/H+ exchangers resulting in compensatory distal potassium retention",
        "Proximal NHE3 blockade (e.g., by carbonic anhydrase inhibitors or dopamine) causes natriuresis, not severe systemic hyperkalemia."
      ]
    ],
    "shortestValidSolution": "Digoxin toxicity = Visual halos + AV block with bidirectional PVCs + hyperkalemia -> Direct poisoning of Na+/K+-ATPase halts cellular K+ uptake.",
    "necessaryInference": "Connect digitalis toxicity with hyperkalemia: inhibition of Na+/K+-ATPase across skeletal muscle and myocardium blocks K+ entry into cells.",
    "strongestDistractor": "Accelerated renal potassium reabsorption via upregulation of the medullary collecting duct H+/K+-ATPase antiporter",
    "distractorExclusion": "The hyperkalemia of severe digitalis toxicity is driven by extrarenal cellular shift (failure of ubiquitous Na+/K+-ATPase uptake), not renal H+/K+-ATPase upregulation.",
    "citation": "Yang EH, Shah S, Criley JM. Digitalis Toxicity: A Contemporary Approach to the Diagnosis and Management of an Ancient Poison. Crit Pathw Cardiol. 2012;11(2):64-70. PMID: 22622328.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Digoxin Toxicity Na+/K+-ATPase Inhibition and Hyperkalemia.",
      "distractorExclusionNotes": "Competitor Accelerated renal potassium reabsorption via upreg excluded by The hyperkalemia of severe digitalis toxicity is driven by e.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0717",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Hypertrophic Cardiomyopathy Dynamic LVOT Obstruction Hemodynamics",
    "provisionalDifficulty": 5,
    "stem": "A 21-year-old collegiate basketball player experiences lightheadedness and near-syncope during high-intensity conditioning. Physical examination reveals a harsh crescendo-decrescendo systolic murmur heard best at the left sternal border without radiation to the carotids. The murmur increases markedly in intensity when the patient performs a Valsalva maneuver or stands abruptly from a seated position, and decreases in intensity when the patient assumes a squatting position or performs sustained handgrip. Echocardiography demonstrates asymmetric septal hypertrophy (interventricular septum 22 mm, posterior wall 11 mm) with systolic anterior motion (SAM) of the mitral valve. Which of the following hemodynamic mechanisms explains the increase in murmur intensity during the Valsalva maneuver?",
    "choices": [
      [
        "Decreased left ventricular preload (end-diastolic volume) narrows the left ventricular outflow tract and accentuates the Venturi effect on the anterior mitral leaflet",
        "Hypertrophic cardiomyopathy (HCM) causes dynamic left ventricular outflow tract (LVOT) obstruction due to asymmetric septal hypertrophy combined with systolic anterior motion (SAM) of the anterior mitral valve leaflet. The intensity of the dynamic murmur depends directly on the degree of LVOT narrowing. Maneuvers that REDUCE left ventricular cavity size\u2014such as VALSALVA (strain phase) and STANDING, which decrease venous return/preload, or vasodilators/tachycardia\u2014bring the hypertrophied septum and anterior mitral leaflet closer together. This accelerates blood flow velocity through the narrowed orifice, accentuating the Venturi effect that pulls the mitral leaflet toward the septum, worsening obstruction and increasing murmur intensity. Conversely, SQUATTING increases preload (venous return) and afterload (systemic vascular resistance), expanding the LV cavity and lessening obstruction."
      ],
      [
        "Increased systemic vascular resistance increases afterload, expanding the pressure gradient across the aortic valve",
        "Increased afterload (as in handgrip or squatting) increases LV cavity dimensions and reduces the trans-LVOT gradient, which DECREASES murmur intensity."
      ],
      [
        "Sustained elevation in right atrial pressure causing paradoxical leftward displacement of the interatrial septum",
        "The murmur of HCM is generated by dynamic intraventricular subaortic outflow obstruction, not interatrial septal dynamics."
      ],
      [
        "Selective prolongation of the isovolumetric relaxation phase increasing the velocity of passive ventricular filling",
        "The murmur is systolic, not diastolic; altered isovolumetric relaxation does not account for systolic outflow tract turbulence."
      ],
      [
        "Transient coronary hypoperfusion triggering reflex papillary muscle spasm and secondary mitral leaflet prolapse",
        "The obstruction is caused by SAM of the anterior mitral leaflet due to asymmetric septal geometry and hydrodynamic forces, not acute papillary muscle spasm."
      ]
    ],
    "shortestValidSolution": "HCM murmur louder with Valsalva/standing (decreased preload/LV size) and softer with squatting/handgrip (increased preload/afterload).",
    "necessaryInference": "Differentiate dynamic LVOT obstruction from fixed aortic stenosis: reduced LV volume (Valsalva/standing) accentuates obstruction and increases murmur intensity.",
    "strongestDistractor": "Increased systemic vascular resistance increases afterload, expanding the pressure gradient across the aortic valve",
    "distractorExclusion": "Increased afterload widens the LV cavity and reduces dynamic outflow obstruction, decreasing murmur intensity, the opposite of Valsalva.",
    "citation": "Maron BJ. Hypertrophic cardiomyopathy: a systematic review. JAMA. 2002;287(10):1308-1320. PMID: 11886323.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hypertrophic Cardiomyopathy Dynamic LVOT Obstruction Hemodynamics.",
      "distractorExclusionNotes": "Competitor Increased systemic vascular resistance increases a excluded by Increased afterload widens the LV cavity and reduces dynamic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0718",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Bacillus anthracis Lethal Factor and Edema Factor Mechanisms",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old wool sorter presents with a painless, pruritic papule on his right forearm that developed into a fluid-filled vesicle and rapidly transformed into a 3-cm necrotic ulcer with a depressed, coal-black eschar surrounded by non-pitting gelatinous edema. Blood cultures grow large, non-motile, Gram-positive, spore-forming rods in long chains that are non-hemolytic on sheep blood agar and produce medusa-head colonies. Pathogenicity is mediated by a tripartite exotoxin consisting of protective antigen (PA), lethal factor (LF), and edema factor (EF). Which of the following enzymatic activities is mediated by Edema Factor to produce the profound tissue edema?",
    "choices": [
      [
        "Calmodulin-activated adenylate cyclase that massively increases intracellular cyclic AMP (cAMP)",
        "Bacillus anthracis produces an AB-type tripartite exotoxin. Protective antigen (PA) binds host cell surface receptors (TEM8/CMG2) and undergoes furin cleavage, forming a heptameric prepore that translocates two alternative catalytic subunits into the cytosol: LETHAL FACTOR (LF) and EDEMA FACTOR (EF). Lethal factor is a zinc-dependent metalloproteinase that cleaves mitogen-activated protein kinase kinases (MAPKK/MEK), disabling cellular signaling and inducing cell necrosis. Edema factor is a calcium/calmodulin-activated adenylate cyclase that converts ATP to cAMP, massively elevating intracellular cAMP levels. High cAMP disrupts cellular water homeostasis, inhibits neutrophil phagocytosis, and drives profound extracellular fluid extravasation, producing the extensive gelatinous non-pitting edema characteristic of anthrax."
      ],
      [
        "Zinc-dependent endopeptidase that cleaves mitogen-activated protein kinase kinases (MAPKK)",
        "Cleavage of MAPKK is the enzymatic mechanism of LETHAL FACTOR (LF), which induces macrophage apoptosis and tissue necrosis, not Edema Factor."
      ],
      [
        "ADP-ribosyltransferase that transfers ADP-ribose to elongation factor-2 (EF-2)",
        "Inactivation of EF-2 via ADP-ribosylation is the mechanism of diphtheria toxin (Corynebacterium diphtheriae) and exotoxin A (Pseudomonas aeruginosa)."
      ],
      [
        "Phospholipase C (alpha-toxin) that hydrolyzes phosphatidylcholine and sphingomyelin in cell membranes",
        "Phospholipase C membrane disruption is the mechanism of Clostridium perfringens alpha-toxin, causing gas gangrene and myonecrosis."
      ],
      [
        "Superantigen that cross-links the MHC class II beta-chain directly to the T-cell receptor V-beta region",
        "MHC class II/TCR cross-linking is the mechanism of toxic shock syndrome toxin-1 (TSST-1) from Staphylococcus aureus and pyrogenic exotoxins from Streptococcus pyogenes."
      ]
    ],
    "shortestValidSolution": "Anthrax = Black eschar + gelatinous edema -> Protective antigen mediates entry; Lethal factor = cleaves MAPKK; Edema factor = calmodulin-activated adenylate cyclase.",
    "necessaryInference": "Differentiate the enzymatic mechanisms of the anthrax toxin components: Edema factor increases cAMP via calmodulin-activated adenylate cyclase; Lethal factor cleaves MAPKK.",
    "strongestDistractor": "Zinc-dependent endopeptidase that cleaves mitogen-activated protein kinase kinases (MAPKK)",
    "distractorExclusion": "Cleavage of MAPKK is mediated by Lethal Factor (LF), causing necrosis, whereas Edema Factor (EF) is a calmodulin-dependent adenylate cyclase generating edema.",
    "citation": "Moayeri M, Leppla SH, Vrentas C, et al. Anthrax Pathogenesis. Annu Rev Microbiol. 2015;69:185-208. PMID: 26195305.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Bacillus anthracis Lethal Factor and Edema Factor Mechanisms.",
      "distractorExclusionNotes": "Competitor Zinc-dependent endopeptidase that cleaves mitogen- excluded by Cleavage of MAPKK is mediated by Lethal Factor (LF), causing.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0719",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Glucose-6-Phosphate Dehydrogenase Deficiency and Glutathione Redox",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old Mediterranean man presents with sudden fatigue, jaundice, and dark red-brown urine 3 days after receiving trimethoprim-sulfamethoxazole for an acute sinus infection. Laboratory studies show: hemoglobin 8.4 g/dL (down from baseline 14.2 g/dL), total bilirubin 4.1 mg/dL, indirect bilirubin 3.5 mg/dL, and elevated LDH. Peripheral blood smear reveals erythrocytes with peripheral 'bite' defects (degmacytes) and irregularly shaped dense cytoplasmic inclusions on crystal violet supravital staining (Heinz bodies). Which of the following biochemical derangements is the primary proximate cause of erythrocyte hemolysis in this condition?",
    "choices": [
      [
        "Impaired generation of NADPH by the pentose phosphate pathway leading to failure of glutathione reductase-mediated reduction of glutathione",
        "Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the rate-limiting first step of the hexose monophosphate (HMP) shunt / pentose phosphate pathway, converting glucose-6-phosphate to 6-phosphoglucono-delta-lactone and generating NADPH. Erythrocytes lack mitochondria and rely exclusively on G6PD as their sole source of NADPH. NADPH is an essential cofactor for GLUTATHIONE REDUCTASE, which regenerates reduced glutathione (GSH) from oxidized glutathione disulfide (GSSG). Reduced glutathione detoxifies hydrogen peroxide and reactive oxygen species via glutathione peroxidase. Under oxidative stress (sulfa drugs, fava beans, infection), G6PD deficiency depletes NADPH and GSH, allowing free radicals to cross-link sulfhydryl groups on hemoglobin. Denatured hemoglobin precipitates as HEINZ BODIES, which are plucked out by splenic macrophages, forming 'bite cells' and causing intravascular and extravascular hemolysis."
      ],
      [
        "Direct oxidative inactivation of pyruvate kinase causing catastrophic failure of ATP generation and membrane deformability",
        "Pyruvate kinase deficiency impairs glycolytic ATP production, causing rigid echinocytes and extravascular hemolysis, without Heinz bodies or NADPH depletion."
      ],
      [
        "Deficiency of uridine diphosphate (UDP)-glucuronosyltransferase in hepatocytes preventing bilirubin conjugation",
        "UDP-glucuronosyltransferase deficiency occurs in Gilbert and Crigler-Najjar syndromes, causing unconjugated hyperbilirubinemia without hemolytic anemia or Heinz bodies."
      ],
      [
        "Impaired synthesis of spectrin-actin junctional complexes in the erythrocyte membrane cytoskeleton",
        "Cytoskeletal defects cause hereditary spherocytosis or elliptocytosis, not oxidative precipitation of hemoglobin (Heinz bodies)."
      ],
      [
        "Failure of erythrocyte methemoglobin reductase causing covalent polymer cross-linking of hemoglobin F",
        "Methemoglobin reductase reduces Fe3+ to Fe2+; it does not regenerate reduced glutathione or prevent Heinz body hemolytic anemia."
      ]
    ],
    "shortestValidSolution": "Sulfa drug + jaundice + dark urine + bite cells + Heinz bodies = G6PD deficiency -> Pentose phosphate pathway fails to produce NADPH -> Decreased reduced glutathione.",
    "necessaryInference": "Trace G6PD deficiency mechanism: loss of rate-limiting pentose phosphate pathway enzyme depletes NADPH, halting glutathione reductase and GSH-mediated peroxide detoxification.",
    "strongestDistractor": "Direct oxidative inactivation of pyruvate kinase causing catastrophic failure of ATP generation and membrane deformability",
    "distractorExclusion": "Pyruvate kinase deficiency affects glycolysis and ATP synthesis without Heinz bodies, whereas G6PD deficiency impairs the HMP shunt and glutathione redox defense.",
    "citation": "Luzzatto L, Nannelli C, Notaro R. Glucose-6-Phosphate Dehydrogenase Deficiency. Hematol Oncol Clin North Am. 2016;30(2):373-393. PMID: 27040960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Glucose-6-Phosphate Dehydrogenase Deficiency and Glutathione Redox.",
      "distractorExclusionNotes": "Competitor Direct oxidative inactivation of pyruvate kinase c excluded by Pyruvate kinase deficiency affects glycolysis and ATP synthe.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0720",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Adenosine Deaminase Deficiency SCID and dATP Toxicity",
    "provisionalDifficulty": 5,
    "stem": "A 3-month-old male infant is admitted to the pediatric hospital with severe failure to thrive, persistent mucocutaneous candidiasis, and recurrent Pneumocystis jirovecii pneumonia. Physical examination reveals absent tonsils, profound generalized lymphopenia (absolute lymphocyte count 420/microL), and absence of a thymic shadow on chest radiography. Flow cytometry confirms a virtually complete absence of circulating CD3+ T cells, CD19+ B cells, and CD16+/CD56+ natural killer (NK) cells (T-B-NK- SCID phenotype). Genetic testing confirms a homozygous null mutation in the ADA gene. Which of the following biochemical mechanisms directly accounts for the profound pan-lymphocyte death in this infant?",
    "choices": [
      [
        "Intracellular accumulation of deoxyadenosine triphosphate (dATP) which allosterically inhibits ribonucleotide reductase and starves cells of DNA precursors",
        "Adenosine deaminase (ADA) deficiency is the second most common cause of Severe Combined Immunodeficiency (SCID), accounting for approximately 15% of cases and inherited in an autosomal recessive pattern. ADA catalyzes the irreversible deamination of adenosine and 2'-deoxyadenosine to inosine and 2'-deoxyinosine in the purine salvage pathway. In ADA deficiency, deoxyadenosine accumulates and is phosphorylated by cellular kinases to DEOXYADENOSINE TRIPHOSPHATE (dATP). dATP is a potent allosteric inhibitor of RIBONUCLEOTIDE REDUCTASE, the rate-limiting enzyme that converts ribonucleotides to deoxyribonucleotides (dCDP, dUDP, dGDP). Ribonucleotide reductase inhibition starves rapidly dividing cells of all deoxyribonucleotides required for DNA synthesis and repair. T, B, and NK lymphocyte precursors in the thymus and bone marrow are exquisitely sensitive to dATP toxicity, undergoing massive apoptosis and producing a T-B-NK- SCID phenotype."
      ],
      [
        "Excessive conversion of hypoxanthine to uric acid by xanthine oxidase precipitating widespread renal crystalline obstruction",
        "Uric acid accumulation occurs in Lesch-Nyhan syndrome (HGPRT deficiency) and gout; it does not selectively eliminate T and B lymphocytes."
      ],
      [
        "Defective degradation of purine bases by purine nucleoside phosphorylase leading to selective isolated B-cell anergy",
        "Purine nucleoside phosphorylase (PNP) deficiency causes selective T-cell impairment with preserved B cells (T-B+), whereas ADA causes complete T-B-NK- SCID."
      ],
      [
        "Failure of pyrimidine synthesis due to uninhibited feedback inactivation of carbamoyl phosphate synthetase II",
        "CPS II is regulated by UTP and PRPP in de novo pyrimidine synthesis; ADA deficiency involves the purine salvage pathway, not CPS II inhibition."
      ],
      [
        "Complete inhibition of hypoxanthine-guanine phosphoribosyltransferase (HGPRT) halting purine salvage in motor neurons",
        "HGPRT deficiency is the cause of Lesch-Nyhan syndrome (choreoathetosis, self-mutilation), which does not present with severe combined immunodeficiency."
      ]
    ],
    "shortestValidSolution": "T-B-NK- SCID + absent thymic shadow + recurrent infections = ADA deficiency -> Toxic dATP accumulation inhibits ribonucleotide reductase.",
    "necessaryInference": "Connect ADA deficiency with purine salvage failure: accumulation of dATP allosterically inhibits ribonucleotide reductase, halting DNA synthesis in lymphocyte precursors.",
    "strongestDistractor": "Defective degradation of purine bases by purine nucleoside phosphorylase leading to selective isolated B-cell anergy",
    "distractorExclusion": "PNP deficiency causes T-cell deficiency with relatively spared B-cells, whereas ADA deficiency causes profound pan-lymphopenia (T-B-NK- SCID).",
    "citation": "Hershfield M. Adenosine deaminase deficiency: clinical expression, molecular basis, and therapies. Semin Hematol. 1998;35(4):291-298. PMID: 9806623.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Adenosine Deaminase Deficiency SCID and dATP Toxicity.",
      "distractorExclusionNotes": "Competitor Defective degradation of purine bases by purine nu excluded by PNP deficiency causes T-cell deficiency with relatively spar.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0721",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Vitamin B12 vs Folate Methylmalonyl-CoA Mutase Pathway",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old woman with a history of Hashimoto thyroiditis presents with progressive symmetric numbness and tingling in her feet, unsteadiness when walking, and cognitive slowing. Physical examination reveals pallor, loss of vibration sense and proprioception in both lower extremities, positive Romberg sign, and spastic paraparesis with extensor plantar responses (Babinski sign). Complete blood count shows: hemoglobin 7.8 g/dL, MCV 114 fL, and hypersegmented neutrophils on peripheral smear. Serum folate is normal. Administration of high-dose oral folic acid improves her anemia over the subsequent month, but her gait ataxia and lower extremity paresthesias severely worsen. Which of the following biochemical reactions requires the cofactor whose deficiency is responsible for this patient's irreversible neurological deterioration?",
    "choices": [
      [
        "Isomerization of methylmalonyl-CoA to succinyl-CoA catalyzed by methylmalonyl-CoA mutase",
        "Vitamin B12 (cobalamin) serves as an essential coenzyme for only TWO human biochemical reactions: (1) METHIONINE SYNTHASE (cytosolic; transfers a methyl group from N5-methyl-THF to homocysteine to form methionine and regenerate active THF), and (2) METHYLMALONYL-CoA MUTASE (mitochondrial; converts methylmalonyl-CoA to succinyl-CoA using adenosylcobalamin). When B12 is deficient, methylmalonyl-CoA accumulates and is shunted into abnormal fatty acid synthesis (odd-chain and branched-chain fatty acids), which incorporate into neuronal membranes and cause subacute combined degeneration of the spinal cord (dorsal columns and lateral corticospinal tracts). Folic acid supplementation can bypass the 'folate trap' and correct the megaloblastic anemia, but it DOES NOT treat the methylmalonyl-CoA mutase defect, allowing irreversible myelin degeneration to progress."
      ],
      [
        "Conversion of dUMP to dTMP catalyzed by thymidylate synthase using N5,N10-methylene-THF",
        "Thymidylate synthase requires N5,N10-methylene-THF (folate) as a methyl donor; it does not require vitamin B12."
      ],
      [
        "Oxidative decarboxylation of alpha-ketoglutarate to succinyl-CoA by the alpha-ketoglutarate dehydrogenase complex",
        "Alpha-ketoglutarate dehydrogenase requires thiamine pyrophosphate (TPP), lipoate, CoA, FAD, and NAD+; it does not require cobalamin."
      ],
      [
        "Hydroxylation of phenylalanine to tyrosine catalyzed by phenylalanine hydroxylase",
        "Phenylalanine hydroxylase requires tetrahydrobiopterin (BH4); defect causes phenylketonuria (PKU), not subacute combined degeneration."
      ],
      [
        "Carboxylation of pyruvate to oxaloacetate catalyzed by pyruvate carboxylase",
        "Pyruvate carboxylase is a gluconeogenic enzyme requiring biotin (vitamin B7), ATP, and CO2, not vitamin B12."
      ]
    ],
    "shortestValidSolution": "Megaloblastic anemia + subacute combined degeneration worsened by folate alone = Vitamin B12 deficiency -> Impaired methylmalonyl-CoA mutase.",
    "necessaryInference": "Recognize that folate corrects B12 anemia but worsens neuropathy; identify methylmalonyl-CoA mutase as the specific B12-dependent enzyme whose failure drives demyelination.",
    "strongestDistractor": "Conversion of dUMP to dTMP catalyzed by thymidylate synthase using N5,N10-methylene-THF",
    "distractorExclusion": "Thymidylate synthase requires folate (N5,N10-methylene-THF); folate supplementation overcomes this defect and resolves anemia, but does not prevent B12 neuropathy.",
    "citation": "Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160. PMID: 23301732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Vitamin B12 vs Folate Methylmalonyl-CoA Mutase Pathway.",
      "distractorExclusionNotes": "Competitor Conversion of dUMP to dTMP catalyzed by thymidylat excluded by Thymidylate synthase requires folate (N5,N10-methylene-THF);.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0722",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Gastrointestinal",
    "topic": "Hereditary Hemochromatosis HFE C282Y and Hepcidin Downregulation",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man presents with progressive fatigue, diffuse arthralgias involving the second and third metacarpophalangeal joints, and erectile dysfunction. On physical examination, he has slate-gray hyperpigmentation of sun-exposed skin and mild hepatomegaly. Laboratory studies show: AST 64 U/L, ALT 72 U/L, fasting blood glucose 188 mg/dL, serum iron 210 mcg/dL, total iron-binding capacity (TIBC) 250 mcg/dL, and transferrin saturation 84% (normal 20-50%). Serum ferritin is 1,850 ng/mL. Genetic testing confirms a homozygous missense mutation in the HFE gene (C282Y). Which of the following pathophysiological mechanisms directly leads to toxic systemic iron overload in this patient?",
    "choices": [
      [
        "Impaired HFE interaction with transferrin receptor 1 causing inappropriately decreased hepatic hepcidin synthesis and unrestrained ferroportin activity",
        "Hereditary hemochromatosis is an autosomal recessive disorder most commonly caused by a homozygous C282Y mutation in the HFE gene on chromosome 6. Wild-type HFE protein normally binds transferrin receptor 1 (TfR1) and senses circulating transferrin-bound iron, signaling hepatocytes to synthesize and secrete HEPCIDIN. Hepcidin is the master regulator of systemic iron: it binds to the iron exporter FERROPORTIN on basolateral enterocyte membranes and reticuloendothelial macrophages, inducing its internalization and lysosomal degradation. Mutated HFE fails to sense systemic iron, resulting in INAPPROPRIATELY LOW HEPCIDIN LEVELS despite massive body iron overload. Unchecked ferroportin pumps unrestrained dietary iron across duodenal enterocytes into circulation, saturating transferrin and depositing toxic free iron in parenchymal cells (liver, pancreas, myocardium, pituitary, joints) via Fenton-reaction hydroxyl free radical injury."
      ],
      [
        "Constitutive overexpression of divalent metal transporter 1 (DMT1) on the basolateral surface of hepatocytes",
        "DMT1 is located on the APICAL membrane of duodenal enterocytes (and inside endosomes); it is not the master systemic iron regulator controlled by HFE."
      ],
      [
        "Loss-of-function mutation in the ceruloplasmin gene preventing ferroxidase conversion of Fe2+ to Fe3+",
        "Aceruloplasminemia impairs iron export by preventing oxidation to Fe3+, causing tissue iron retention with low serum iron and neurological disease, distinct from HFE hemochromatosis."
      ],
      [
        "Overproduction of hepcidin by Kupffer cells causing irreversible sequestration of iron in the reticuloendothelial system",
        "High hepcidin occurs in anemia of chronic disease, which traps iron in macrophages and lowers serum iron, the exact opposite of hemochromatosis."
      ],
      [
        "Defective synthesis of apotransferrin leading to intravascular precipitation of non-transferrin-bound ferric phosphate crystals",
        "Atransferrinemia is an exceedingly rare congenital disorder of transferrin deficiency causing microcytic anemia, distinct from adult-onset HFE hemochromatosis."
      ]
    ],
    "shortestValidSolution": "Bronze diabetes + 2nd/3rd MCP arthralgia + transferrin saturation 84% = Hemochromatosis -> HFE C282Y mutation causes low hepcidin and unrestrained ferroportin.",
    "necessaryInference": "Trace hemochromatosis molecular pathogenesis: mutated HFE impairs iron sensing, causing inappropriately low hepcidin, which leaves enterocyte ferroportin constitutively open.",
    "strongestDistractor": "Overproduction of hepcidin by Kupffer cells causing irreversible sequestration of iron in the reticuloendothelial system",
    "distractorExclusion": "Overproduction of hepcidin occurs in anemia of chronic disease and lowers serum iron, whereas hemochromatosis is defined by hepcidin DEFICIENCY.",
    "citation": "Bacon BR, Adams PC, Kowdley KV, Powell LW, Tavill AS. Diagnosis and management of hemochromatosis: 2011 practice guideline by the American Association for the Study of Liver Diseases. Hepatology. 2011;54(1):328-343. PMID: 21452298.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hereditary Hemochromatosis HFE C282Y and Hepcidin Downregulation.",
      "distractorExclusionNotes": "Competitor Overproduction of hepcidin by Kupffer cells causin excluded by Overproduction of hepcidin occurs in anemia of chronic disea.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0723",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Methotrexate vs 5-Fluorouracil Leucovorin Rescue Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old man with osteosarcoma receives high-dose methotrexate chemotherapy followed 24 hours later by intravenous folinic acid (leucovorin) rescue. Three weeks later, a 64-year-old man with metastatic colorectal adenocarcinoma receives a combination chemotherapy regimen consisting of 5-fluorouracil (5-FU) and leucovorin. Which of the following statements accurately contrasts the pharmacological role of leucovorin in these two distinct chemotherapy protocols?",
    "choices": [
      [
        "Leucovorin bypasses dihydrofolate reductase to rescue normal cells from methotrexate toxicity, whereas it binds and stabilizes the ternary complex of thymidylate synthase with 5-FdUMP to potentiate 5-FU cytotoxicity",
        "Leucovorin (folinic acid / N5-formyl-THF) serves OPPOSITE clinical purposes in methotrexate versus 5-fluorouracil regimens: (1) In high-dose METHOTREXATE protocols, methotrexate competitively inhibits DIHYDROFOLATE REDUCTASE (DHFR), depleting tetrahydrofolate (THF). Leucovorin is a reduced folate that is metabolically converted to THF WITHOUT requiring DHFR, effectively 'rescuing' rapidly dividing non-malignant host cells (bone marrow and GI mucosa) from lethal toxicity. (2) In 5-FLUOROURACIL protocols, 5-FU is converted to 5-fluoro-2'-deoxyuridine monophosphate (5-FdUMP), which inhibits THYMIDYLATE SYNTHASE. Leucovorin acts as an exogenous folate donor that binds to and forms a stable, irreversible TERNARY COMPLEX with thymidylate synthase and 5-FdUMP, thereby ENHANCING and POTENTIATING 5-FU antineoplastic efficacy."
      ],
      [
        "Leucovorin inhibits 5-FU clearance by inactivating hepatic dihydropyrimidine dehydrogenase, while accelerating renal excretion of methotrexate",
        "Leucovorin does not affect dihydropyrimidine dehydrogenase (DPD) or methotrexate renal clearance; it acts as an intracellular folate cofactor."
      ],
      [
        "Leucovorin competitively displaces methotrexate from dihydrofolate reductase, but has zero biochemical interaction with 5-fluorouracil",
        "Leucovorin does not displace methotrexate from DHFR; it bypasses DHFR, and it actively potentiates 5-FU by stabilizing the ternary complex."
      ],
      [
        "Leucovorin is converted into 5-FdUMP to directly incorporate into DNA, while neutralizing methotrexate through extracellular chelation",
        "5-FdUMP is derived from 5-FU, not leucovorin; leucovorin does not chelate methotrexate."
      ],
      [
        "Leucovorin enhances the cellular uptake of methotrexate by upregulating the reduced folate carrier, but prevents 5-FU-induced mucositis",
        "Leucovorin does not increase methotrexate uptake; it rescues host cells from MTX and potentiates (worsens or increases) 5-FU toxicity/efficacy."
      ]
    ],
    "shortestValidSolution": "Leucovorin rescues normal cells in methotrexate (bypasses DHFR) but potentiates cytotoxicity in 5-FU (stabilizes ternary complex with thymidylate synthase).",
    "necessaryInference": "Contrast leucovorin's dual pharmacological roles: DHFR-independent THF rescue for methotrexate vs ternary complex cofactor that potentiates 5-FU.",
    "strongestDistractor": "Leucovorin competitively displaces methotrexate from dihydrofolate reductase, but has zero biochemical interaction with 5-fluorouracil",
    "distractorExclusion": "Leucovorin does not displace methotrexate from DHFR (it bypasses the enzyme) and strongly interacts with 5-FU by enhancing thymidylate synthase inhibition.",
    "citation": "Moran RG. Roles of leucovorin in cancer chemotherapy. Adv Exp Med Biol. 1993;338:777-783. PMID: 8178822.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Methotrexate vs 5-Fluorouracil Leucovorin Rescue Mechanism.",
      "distractorExclusionNotes": "Competitor Leucovorin competitively displaces methotrexate fr excluded by Leucovorin does not displace methotrexate from DHFR (it bypa.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0724",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Neonatal Respiratory Distress Syndrome L/S Ratio and Lamellar Bodies",
    "provisionalDifficulty": 5,
    "stem": "A male infant is born at 28 weeks of gestation to a 26-year-old primigravida whose labor could not be arrested with tocolysis. Within 15 minutes of birth, the infant develops tachypnea (respirations 78/min), prominent intercostal and subcostal retractions, expiratory grunting, and central cyanosis. Chest radiography demonstrates diffuse, uniform reticulogranular 'ground-glass' opacities with prominent air bronchograms and low lung volumes. Analysis of amniotic fluid obtained prior to delivery would have demonstrated which of the following findings?",
    "choices": [
      [
        "Lecithin (dipalmitoylphosphatidylcholine) to sphingomyelin ratio less than 1.5 and low lamellar body count",
        "Neonatal respiratory distress syndrome (NRDS) is caused by pulmonary surfactant deficiency due to alveolar Type II pneumocyte immaturity. Surfactant synthesis accelerates dramatically after 32-35 weeks of gestation. Surfactant consists predominantly of phospholipids, primarily DIPALMITOYLPHOSPHATIDYLCHOLINE (lecithin). In amniotic fluid, sphingomyelin concentration remains relatively constant throughout gestation, while lecithin rises sharply after 32 weeks. An amniotic fluid LECITHIN-TO-SPHINGOMYELIN (L/S) RATIO >= 2.0 indicates mature fetal lungs, whereas a ratio < 1.5 indicates severe lung immaturity and high risk of NRDS. Type II pneumocytes store surfactant in LAMELLAR BODIES; a low lamellar body count (< 30,000/microL) confirms surfactant deficiency. Lack of surfactant increases alveolar surface tension, causing diffuse atelectasis and V/Q mismatch."
      ],
      [
        "Lecithin to sphingomyelin ratio greater than 3.0 with high concentration of phosphatidylglycerol",
        "An L/S ratio > 3.0 and present phosphatidylglycerol signify fully mature fetal lungs, which are protective against NRDS."
      ],
      [
        "Elevated alpha-fetoprotein and acetylcholinesterase concentrations in the amniotic fluid",
        "Elevated amniotic AFP and AChE indicate open neural tube defects (e.g., myelomeningocele) or abdominal wall defects (gastroschisis), not NRDS."
      ],
      [
        "High ratio of phosphatidylserine to dipalmitoylphosphatidylcholine with absent air bronchograms",
        "Phosphatidylserine is a membrane aminophospholipid involved in apoptosis; dipalmitoylphosphatidylcholine is the major active tension-reducing surfactant component."
      ],
      [
        "Elevated sweat chloride concentration exceeding 60 mEq/L due to defective apical CFTR conductance",
        "Elevated sweat chloride is diagnostic of cystic fibrosis, not acute surfactant deficiency of prematurity."
      ]
    ],
    "shortestValidSolution": "Preterm infant + grunting/retractions + ground-glass x-ray = NRDS -> Immature Type II pneumocytes -> Lecithin-to-sphingomyelin ratio < 1.5 and low lamellar bodies.",
    "necessaryInference": "Identify surfactant deficiency in prematurity: mature lungs show L/S ratio >= 2.0; ratio < 1.5 reflects deficient dipalmitoylphosphatidylcholine and low lamellar bodies.",
    "strongestDistractor": "Lecithin to sphingomyelin ratio greater than 3.0 with high concentration of phosphatidylglycerol",
    "distractorExclusion": "An L/S ratio > 2.0 indicates mature surfactant production, which prevents respiratory distress syndrome.",
    "citation": "Rodriguez RJ. Management of respiratory distress syndrome: an update. Respir Care. 2003;48(3):279-286. PMID: 12667276.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Neonatal Respiratory Distress Syndrome L/S Ratio and Lamellar Bodies.",
      "distractorExclusionNotes": "Competitor Lecithin to sphingomyelin ratio greater than 3.0 w excluded by An L/S ratio > 2.0 indicates mature surfactant production, w.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0725",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Ethylene Glycol Toxicity and Calcium Oxalate Crystalluria",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old man is found unresponsive in an abandoned parking lot next to an empty container of automotive antifreeze. In the emergency department, he is stuporous and tachypneic. Vital signs: blood pressure 138/84 mm Hg, heart rate 108/min, and respirations 28/min. Arterial blood gas shows: pH 7.15, PaCO2 22 mm Hg, and PaO2 94 mm Hg. Serum chemistries reveal: sodium 140 mEq/L, potassium 5.2 mEq/L, chloride 98 mEq/L, bicarbonate 8 mEq/L, BUN 38 mg/dL, and serum creatinine 3.2 mg/dL. Measured serum osmolality is 342 mOsm/kg (calculated osmolality 296 mOsm/kg; osmolar gap 46 mOsm/kg). Urinalysis under polarizing microscopy demonstrates abundant envelope-shaped and dumbbell-shaped birefringent crystals. Which of the following toxic metabolites is directly responsible for this patient's acute tubular necrosis and crystalluria?",
    "choices": [
      [
        "Oxalic acid (oxalate) which complexes with ionized calcium to form insoluble calcium oxalate monohydrate crystals",
        "Ethylene glycol is rapidly metabolized by hepatic ALCOHOL DEHYDROGENASE to glycoaldehyde, which is converted by aldehyde dehydrogenase to glycolic acid (the primary driver of the high anion gap metabolic acidosis), and subsequently to glyoxylic acid and OXALIC ACID (oxalate). Oxalic acid binds circulating ionized calcium to form insoluble CALCIUM OXALATE crystals. These crystals precipitate as envelope-shaped (dihydrate) or needle/dumbbell-shaped (monohydrate) birefringent crystals in renal proximal tubular lumens, causing mechanical obstruction and direct cytotoxic acute tubular necrosis (ATN). Oxalate binding also precipitates hypocalcemia, causing tetany or QT prolongation. Treatment involves competitive alcohol dehydrogenase inhibition with FOMEPIZOLE (or ethanol) and hemodialysis."
      ],
      [
        "Formic acid which inhibits mitochondrial cytochrome c oxidase in the retinal pigment epithelium",
        "Formic acid is the toxic metabolite of METHANOL (wood alcohol) metabolism, which causes optic disc hyperemia, retinal edema, and blindness, not oxalate crystals."
      ],
      [
        "Acetone which produces a prominent osmolar gap without high anion gap metabolic acidosis",
        "Acetone is the metabolite of ISOPROPANOL (rubbing alcohol), which causes central nervous system depression and an elevated osmolar gap with ketonemia, but normal anion gap and no crystals."
      ],
      [
        "Acetaldehyde which accumulates due to genetic deficiency of aldehyde dehydrogenase",
        "Acetaldehyde is the intermediate of ETHANOL oxidation, responsible for facial flushing and nausea (and disulfiram reactions), not acute renal failure or crystalluria."
      ],
      [
        "Hippuric acid which induces extensive centrilobular hepatic necrosis and transaminase elevation",
        "Centrilobular hepatic necrosis is caused by the N-acetyl-p-benzoquinone imine (NAPQI) metabolite of acetaminophen, not ethylene glycol."
      ]
    ],
    "shortestValidSolution": "Antifreeze ingestion + high anion gap acidosis + osmolar gap 46 + envelope birefringent crystals = Ethylene glycol -> Oxalic acid forms calcium oxalate crystals in renal tubules.",
    "necessaryInference": "Trace ethylene glycol metabolism: alcohol dehydrogenase converts it to glycolic acid (acidosis) and oxalic acid, which complexes calcium into obstructing tubular crystals.",
    "strongestDistractor": "Formic acid which inhibits mitochondrial cytochrome c oxidase in the retinal pigment epithelium",
    "distractorExclusion": "Formic acid is the toxic metabolite of methanol (causing retinal toxicity and blindness), whereas ethylene glycol produces oxalic acid (causing calcium oxalate renal failure).",
    "citation": "Kraut JA, Kurtz I. Toxic alcohol ingestions: clinical features, diagnosis, and management. Clin J Am Soc Nephrol. 2008;3(1):208-225. PMID: 18045860.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Ethylene Glycol Toxicity and Calcium Oxalate Crystalluria.",
      "distractorExclusionNotes": "Competitor Formic acid which inhibits mitochondrial cytochrom excluded by Formic acid is the toxic metabolite of methanol (causing ret.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
