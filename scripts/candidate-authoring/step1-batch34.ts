import { CandidateSpec } from './types';

export const step1Batch34: CandidateSpec[] = [
  {
    "code": "op-c-s1-0826",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Ornithine Transcarbamylase vs CPS1 Urea Cycle and Orotic Aciduria",
    "provisionalDifficulty": 4,
    "stem": "A 3-day-old male newborn develops progressive somnolence, vomiting, tachypnea, and seizures. Serum ammonia is markedly elevated at 820 umol/L (normal < 50 umol/L), and arterial blood gas demonstrates respiratory alkalosis with pH 7.54, pCO2 24 mm Hg, and HCO3- 20 mEq/L. Plasma amino acid analysis reveals undetectable plasma citrulline and markedly elevated glutamine and alanine. Urine organic acid analysis reveals massively elevated urinary orotic acid (1,450 umol/mmol creatinine, normal < 2). Serum uric acid is normal, and there is no megaloblastic anemia. Which of the following inborn errors of metabolism accounts for this infant's presentation?",
    "choices": [
      [
        "X-linked ornithine transcarbamylase (OTC) deficiency",
        "ORNITHINE TRANSCARBAMYLASE (OTC) DEFICIENCY is the most common urea cycle disorder and the only one with X-LINKED RECESSIVE inheritance. OTC catalyzes the condensation of carbamoyl phosphate and ornithine to form citrulline in the mitochondrial matrix. When OTC is deficient, carbamoyl phosphate accumulates in the mitochondria and spills over into the cytosol, where it enters the pyrimidine synthesis pathway via carbamoyl phosphate synthetase II (CPS II), producing MASSIVE ELEVATIONS IN URINARY OROTIC ACID. In contrast, carbamoyl phosphate synthetase I (CPS I) deficiency also causes severe hyperammonemia with low citrulline, but has LOW or undetectable urinary orotic acid because carbamoyl phosphate cannot be formed. Hereditary orotic aciduria (UMP synthase deficiency) causes orotic aciduria but presents with megaloblastic anemia and normal ammonia."
      ],
      [
        "Mitochondrial carbamoyl phosphate synthetase I (CPS I) deficiency",
        "CPS I deficiency causes neonatal hyperammonemia with low citrulline and respiratory alkalosis, but urinary orotic acid is LOW or absent because carbamoyl phosphate is not synthesized."
      ],
      [
        "Cytosolic uridine monophosphate (UMP) synthase deficiency",
        "UMP synthase deficiency (hereditary orotic aciduria) presents with elevated urinary orotic acid, failure to thrive, and refractory megaloblastic anemia, but serum ammonia levels are normal."
      ],
      [
        "Argininosuccinate synthetase deficiency (Citrullinemia Type 1)",
        "Argininosuccinate synthetase deficiency causes hyperammonemia, but plasma citrulline levels are massively elevated (often > 1,000 umol/L), not undetectable."
      ],
      [
        "N-acetylglutamate synthase (NAGS) deficiency",
        "NAGS synthesizes N-acetylglutamate, the obligatory allosteric activator of CPS I; like CPS I deficiency, it causes hyperammonemia with absent/low urinary orotic acid."
      ]
    ],
    "shortestValidSolution": "Neonatal hyperammonemia + low citrulline + elevated urinary orotic acid = Ornithine transcarbamylase (OTC) deficiency (X-linked).",
    "necessaryInference": "Differentiate OTC deficiency (carbamoyl phosphate shunted to pyrimidines -> high orotic acid) from CPS1/NAGS deficiency (no carbamoyl phosphate -> low orotic acid).",
    "strongestDistractor": "Mitochondrial carbamoyl phosphate synthetase I (CPS I) deficiency",
    "distractorExclusion": "CPS I deficiency cannot synthesize carbamoyl phosphate; therefore, carbamoyl phosphate does not spill into the cytosol and orotic acid is low or undetectable.",
    "citation": "Enns GM et al. Survival after treatment with phenylacetate and benzoate for urea-cycle disorders. N Engl J Med. PMID: 17538087.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry question distinguishing urea cycle defects using orotic acid shunting and citrulline concentrations.",
      "distractorExclusionNotes": "Excluded CPS I and NAGS (no orotic acid accumulation) and UMP synthase (normal ammonia, megaloblastic anemia).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0827",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Maple Syrup Urine Disease Branched-Chain Alpha-Ketoacid Dehydrogenase",
    "provisionalDifficulty": 4,
    "stem": "A 5-day-old female infant born to consanguineous parents develops poor feeding, progressive lethargy, dystonia with alternating hypotonia and hypertonia, and a characteristic sweet, burnt-sugar odor in her diapers. Plasma amino acid analysis reveals marked elevations in leucine (2,800 umol/L), isoleucine, and valine, accompanied by the pathognomonic presence of alloisoleucine. Urine organic acid analysis reveals large quantities of alpha-ketoisocaproate, alpha-keto-beta-methylvalerate, and alpha-ketoisovalerate. Diagnostic evaluation indicates an autosomal recessive defect in the branched-chain alpha-ketoacid dehydrogenase (BCKDC) multi-enzyme complex. Which of the following vitamin-derived cofactors is an essential catalytic component of the E1 subunit of this complex and forms the basis for a subtype of this condition responsive to high-dose vitamin therapy?",
    "choices": [
      [
        "Thiamine pyrophosphate (TPP derived from vitamin B1)",
        "MAPLE SYRUP URINE DISEASE (MSUD) is caused by deficiency of the BRANCHED-CHAIN ALPHA-KETOACID DEHYDROGENASE (BCKDC) complex, which catabolizes the branched-chain amino acids (leucine, isoleucine, valine). Like pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase, BCKDC requires FIVE COFACTORS: Thiamine pyrophosphate (TPP, B1), Lipoic acid, Coenzyme A (pantothenate, B5), FAD (riboflavin, B2), and NAD+ (niacin, B3) ['Tender Loving Care For Nancy']. The E1 decarboxylase subunit of BCKDC uses THIAMINE PYROPHOSPHATE (TPP) as its catalytic cofactor. Mutations that reduce E1 affinity for TPP result in 'thiamine-responsive MSUD', in which high-dose oral thiamine improves enzyme activity and leucine tolerance."
      ],
      [
        "Pyridoxal 5'-phosphate (PLP derived from vitamin B6)",
        "PLP is the cofactor for transamination (branched-chain aminotransferase), decarboxylation, and cystathionine beta-synthase, but is not a cofactor for the BCKDC multi-enzyme complex."
      ],
      [
        "Tetrahydrobiopterin (BH4 synthesized from GTP)",
        "BH4 is the cofactor for aromatic amino acid hydroxylases (phenylalanine, tyrosine, and tryptophan hydroxylases) and nitric oxide synthase, not BCKDC."
      ],
      [
        "Adenosylcobalamin (derived from vitamin B12)",
        "Adenosylcobalamin is the cofactor for methylmalonyl-CoA mutase in propionate catabolism, not branched-chain alpha-ketoacid dehydrogenase."
      ],
      [
        "Biotin (derived from vitamin B7)",
        "Biotin is the cofactor for carboxylation reactions (pyruvate carboxylase, propionyl-CoA carboxylase, acetyl-CoA carboxylase), not oxidative decarboxylation."
      ]
    ],
    "shortestValidSolution": "MSUD = BCKDC deficiency (branched-chain ketoacids accumulate) -> E1 requires Thiamine pyrophosphate (TPP) -> thiamine-responsive subtype.",
    "necessaryInference": "Map the 5 cofactors of alpha-ketoacid dehydrogenases to BCKDC and identify TPP as the E1 cofactor in thiamine-responsive MSUD.",
    "strongestDistractor": "Pyridoxal 5'-phosphate (PLP derived from vitamin B6)",
    "distractorExclusion": "PLP is the cofactor for the upstream transaminase (branched-chain amino acid transaminase), not the multienzyme dehydrogenase complex itself.",
    "citation": "Chuang DT, Chuang JL, Wynn RM. Lessons from genetic disorders of branched-chain amino acid metabolism. J Nutr. 2006;136(1 Suppl):243S-249S. PMID: 16365091.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry question testing multienzyme dehydrogenase cofactor requirements and metabolic treatment response.",
      "distractorExclusionNotes": "Excluded PLP (transaminase cofactor), biotin (carboxylase cofactor), and B12 based on E1 decarboxylase thiamine kinetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0828",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Propionic Acidemia Propionyl-CoA Carboxylase Biotin Dependency Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 2-week-old male infant presents with vomiting, poor feeding, lethargy, and hypotonia. Laboratory evaluation reveals severe high anion gap metabolic acidosis (anion gap 26 mEq/L), hypoglycemia (blood glucose 38 mg/dL), ketonuria, and elevated serum ammonia (340 umol/L). Plasma acylcarnitine profile demonstrates marked elevation of propionylcarnitine (C3). Urine organic acid analysis reveals massively elevated 3-hydroxypropionate and methylcitrate, but normal methylmalonic acid. The patient is diagnosed with propionic acidemia due to a defect in propionyl-CoA carboxylase. Which of the following sets of amino acids and odd-chain fatty acids serves as the primary metabolic precursor pool that funnels into the blocked propionyl-CoA pathway?",
    "choices": [
      [
        "Valine, Isoleucine, Methionine, Threonine, and odd-chain fatty acids (VOMIT)",
        "PROPIONIC ACIDEMIA is an autosomal recessive deficiency of PROPIONYL-CoA CARBOXYLASE, a biotin-dependent mitochondrial enzyme that converts propionyl-CoA to methylmalonyl-CoA. The metabolic precursors that generate propionyl-CoA include: VALINE, ODD-CHAIN FATTY ACIDS, METHIONINE, ISOLEUCINE, and THREONINE (mnemonic: 'VOMIT'). Blockade leads to accumulation of propionyl-CoA, which is converted to propionylcarnitine (C3), 3-hydroxypropionate, and methylcitrate. Propionyl-CoA also allosterically inhibits N-acetylglutamate synthase (NAGS), impairing the urea cycle and provoking secondary HYPERAMMONEMIA. Methylmalonic acid is normal, distinguishing propionic acidemia from methylmalonic acidemia."
      ],
      [
        "Leucine, Lysine, Phenylalanine, and even-chain saturated fatty acids",
        "Leucine and lysine are purely ketogenic amino acids that generate acetyl-CoA and acetoacetate; they do not yield propionyl-CoA."
      ],
      [
        "Alanine, Glycine, Serine, Cysteine, and even-chain dicarboxylic acids",
        "Alanine, glycine, serine, and cysteine are glucogenic amino acids that funnel into pyruvate, not propionyl-CoA."
      ],
      [
        "Glutamate, Glutamine, Proline, Arginine, and histidine",
        "These amino acids funnel into alpha-ketoglutarate in the citric acid cycle via glutamate dehydrogenase, not into propionyl-CoA."
      ],
      [
        "Aspartate, Asparagine, Tyrosine, and branched-chain alpha-ketoacids",
        "Aspartate and asparagine convert to oxaloacetate, and tyrosine yields fumarate and acetoacetate, rather than forming propionyl-CoA."
      ]
    ],
    "shortestValidSolution": "Propionyl-CoA precursors = Valine, Odd-chain fatty acids, Methionine, Isoleucine, Threonine (VOMIT) -> defective carboxylase -> C3 acylcarnitine + hyperammonemia.",
    "necessaryInference": "Map the branched/sulfur/threonine amino acid catabolic convergence into propionyl-CoA (VOMIT mnemonic).",
    "strongestDistractor": "Leucine, Lysine, Phenylalanine, and even-chain saturated fatty acids",
    "distractorExclusion": "Leucine and lysine are purely ketogenic yielding acetyl-CoA/acetoacetate; they bypass propionyl-CoA entirely.",
    "citation": "Yap S et al. Real world experience of carglumic acid for methylmalonic and propionic acidurias: the second interim analysis of the multicentre observational PROTECT study. Orphanet J Rare Dis. PMID: 42839282.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on metabolic precursor pathways and secondary urea cycle inhibition in organic acidemias.",
      "distractorExclusionNotes": "Excluded purely ketogenic amino acids (Leu, Lys) and pyruvate-yielding amino acids (Ala, Gly, Ser) based on VOMIT precursors.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0829",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Methylmalonic Acidemia Methylmalonyl-CoA Mutase and B12 Cofactor Dependency",
    "provisionalDifficulty": 5,
    "stem": "A 3-week-old female infant is brought to the emergency department in a state of profound lethargy and dehydration following a mild upper respiratory infection. Laboratory studies demonstrate severe ketoacidosis (arterial pH 7.12, HCO3- 8 mEq/L, anion gap 28 mEq/L), hypoglycemia, and hyperammonemia (420 umol/L). Urine organic acid analysis reveals massively elevated methylmalonic acid and methylcitrate, and plasma acylcarnitine analysis shows high propionylcarnitine (C3). In vitro enzyme analysis of patient fibroblasts confirms deficient activity of methylmalonyl-CoA mutase. Which of the following vitamin B12-derived active coenzymes is specifically required by methylmalonyl-CoA mutase to convert L-methylmalonyl-CoA to succinyl-CoA?",
    "choices": [
      [
        "5'-deoxyadenosylcobalamin (adenosylcobalamin)",
        "METHYLMALONIC ACIDEMIA is an inborn error of metabolism caused by deficient activity of METHYLMALONYL-CoA MUTASE (mut0 or mut- phenotypes) or impaired synthesis of its obligatory coenzyme, 5'-DEOXYADENOSYLCOBALAMIN (adenosylcobalamin). Vitamin B12 (cobalamin) is converted intracellularly into two active cofactors: (1) METHYLCOBALAMIN (cytosolic, required by methionine synthase for homocysteine remethylation to methionine), and (2) ADENOSYLCOBALAMIN (mitochondrial, required by methylmalonyl-CoA mutase to isomerize L-methylmalonyl-CoA into succinyl-CoA for entry into the TCA cycle). Deficiency causes massive accumulation of methylmalonic acid, propionyl-CoA, and secondary hyperammonemia."
      ],
      [
        "Methylcobalamin (cytosolic coenzyme)",
        "Methylcobalamin is the cofactor for methionine synthase in the cytosol; deficiency impairs folate trapping and elevates homocysteine, but does not isomerize methylmalonyl-CoA."
      ],
      [
        "Cyanocobalamin (synthetic pharmacological cobalamin)",
        "Cyanocobalamin is the shelf-stable pharmaceutical form of vitamin B12 with a cyanide ligand; it has no intrinsic coenzyme activity until converted to methyl- or adenosylcobalamin."
      ],
      [
        "Hydroxocobalamin (extracellular circulating precursor)",
        "Hydroxocobalamin is an unreduced precursor cobalamin used as an antidote for cyanide poisoning; it must be enzymatically converted to adenosylcobalamin in mitochondria to activate the mutase."
      ],
      [
        "Tetrahydrofolate (polyglutamated active folate)",
        "Tetrahydrofolate participates in one-carbon transfers (e.g., thymidylate synthase, purine synthesis); it is not the cofactor for methylmalonyl-CoA mutase."
      ]
    ],
    "shortestValidSolution": "Methylmalonyl-CoA mutase requires Adenosylcobalamin (mitochondrial B12) to make succinyl-CoA. (Methionine synthase uses methylcobalamin).",
    "necessaryInference": "Differentiate the two active B12 coenzymes: mitochondrial adenosylcobalamin (mutase) versus cytosolic methylcobalamin (methionine synthase).",
    "strongestDistractor": "Methylcobalamin (cytosolic coenzyme)",
    "distractorExclusion": "Methylcobalamin is used by methionine synthase in the cytosol; methylmalonyl-CoA mutase specifically requires adenosylcobalamin in the mitochondria.",
    "citation": "Stepien KM et al. Cobalamin-Related Remethylation Disorders: Pregnancy Outcomes and Prenatal Treatment-New Cases and a Literature Study. J Inherit Metab Dis. PMID: 42644808.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry question testing intracellular B12 cofactor compartmentalization and mutase kinetics.",
      "distractorExclusionNotes": "Excluded methylcobalamin (methionine synthase target) based on mitochondrial adenosylcobalamin specificity for mutase.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0830",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Cardiovascular",
    "topic": "Homocystinuria Cystathionine Beta-Synthase vs Methionine Synthase Defect",
    "provisionalDifficulty": 4,
    "stem": "A 9-year-old tall, slender boy with a Marfanoid habitus, pectus excavatum, arachnodactyly, and mild intellectual disability presents with acute right-sided hemiparesis. Brain MRI reveals an acute ischemic stroke in the left middle cerebral artery distribution. Ophthalmologic slit-lamp examination reveals bilateral downward and inward (inferonasal) subluxation of the ocular lenses (ectopia lentis). Plasma total homocysteine is markedly elevated at 180 umol/L (normal < 15 umol/L), and urinary cyanide-nitroprusside test is strongly positive. Quantitative plasma amino acid chromatography shows marked elevation of plasma methionine (480 umol/L, normal 15-35 umol/L) and undetectable cystathionine. Which of the following enzymatic deficiencies is responsible for this patient's clinical presentation?",
    "choices": [
      [
        "Cystathionine beta-synthase (CBS) deficiency requiring pyridoxal phosphate (vitamin B6)",
        "CLASSIC HOMOCYSTINURIA is an autosomal recessive disorder caused by deficiency of CYSTATHIONINE BETA-SYNTHASE (CBS), which uses PYRIDOXAL PHOSPHATE (PLP, vitamin B6) to condense homocysteine and serine into cystathionine. When CBS is deficient, homocysteine accumulates and is shunted into remethylation pathways, producing MARKEDLY ELEVATED PLASMA METHIONINE and undetectable cystathionine. Clinical features include Marfanoid habitus, osteopenia, intellectual disability, INFERONASAL LENS DISLOCATION (in contrast to superotemporal dislocation in Marfan syndrome), and life-threatening premature THROMBOEMBOLISM (arterial and venous). In contrast, methionine synthase (MTHFR/MS) deficiency causes hyperhomocystinuria with LOW or normal methionine."
      ],
      [
        "Methionine synthase (MTR) deficiency requiring methylcobalamin",
        "Methionine synthase converts homocysteine to methionine; deficiency causes elevated homocysteine with LOW plasma methionine and megaloblastic anemia, unlike this patient's high methionine."
      ],
      [
        "Methylenetetrahydrofolate reductase (MTHFR) homozygous deficiency",
        "MTHFR deficiency reduces 5-methyl-THF formation, impairing homocysteine remethylation, leading to high homocysteine with LOW plasma methionine."
      ],
      [
        "Fibrillin-1 (FBN1) extracellular matrix microfibril gene mutation",
        "Marfan syndrome (FBN1 mutation) presents with Marfanoid habitus and ectopia lentis (superotemporal), but has normal plasma amino acids, normal homocysteine, and no thromboembolic diathesis."
      ],
      [
        "Homogentisate 1,2-dioxygenase deficiency causing ochronosis",
        "Homogentisate dioxygenase deficiency causes alkaptonuria (dark urine, ochronotic arthropathy), not Marfanoid habitus, ectopia lentis, or thromboembolic stroke."
      ]
    ],
    "shortestValidSolution": "Marfanoid habitus + inferonasal lens subluxation + stroke + HIGH methionine = Cystathionine beta-synthase (CBS) deficiency (B6-dependent).",
    "necessaryInference": "Use plasma methionine elevation to pinpoint the transsulfuration block (CBS) versus the remethylation block (MS/MTHFR, which lowers methionine).",
    "strongestDistractor": "Methionine synthase (MTR) deficiency requiring methylcobalamin",
    "distractorExclusion": "Methionine synthase defect blocks remethylation, resulting in LOW plasma methionine; CBS defect blocks transsulfuration, causing high methionine.",
    "citation": "Skovby F et al. A revisit to the natural history of homocystinuria due to cystathionine beta-synthase deficiency. Mol Genet Metab. PMID: 19819175.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/biochemistry question differentiating transsulfuration from remethylation defects in homocystinuria.",
      "distractorExclusionNotes": "Excluded methionine synthase and MTHFR based on high plasma methionine (remethylation defects have low methionine).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0831",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Alkaptonuria Homogentisate 1,2-Dioxygenase Ochronotic Arthropathy",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man presents with progressive chronic low back pain and stiffness. Physical examination reveals dark blue-black pigmentation of the ear cartilage (auricular conchae) and sclerae. Joint examination reveals decreased range of motion and crepitus in the hips, knees, and lumbar spine. Spinal radiographs demonstrate extensive intervertebral disc calcification and wafer-thin disc narrowing. His wife notes that his urine turns dark black if left standing in the toilet bowl. Which of the following enzymes in the phenylalanine and tyrosine catabolic pathway is deficient in this patient?",
    "choices": [
      [
        "Homogentisate 1,2-dioxygenase converting homogentisic acid to maleylacetoacetic acid",
        "ALKAPTONURIA is an autosomal recessive disorder of tyrosine degradation caused by deficiency of HOMOGENTISATE 1,2-DIOXYGENASE. Homogentisic acid accumulates and is oxidized to benzoquinone acetate, which polymerizes into a dark melanin-like pigment. Clinical hallmarks include: (1) URINE THAT TURNS BLACK UPON STANDING or alkalinization (due to homogentisic acid oxidation), (2) OCHRONOSIS (bluish-black pigmentation of connective tissue, ears, and sclerae), and (3) OCHRONOTIC ARTHROPATHY (severe, debilitating degenerative arthritis with characteristic intervertebral disc calcification and collapse). The condition is relatively benign in childhood but causes progressive osteoarthropathy in adulthood."
      ],
      [
        "Fumarylacetoacetate hydrolase converting fumarylacetoacetate to fumarate and acetoacetate",
        "Fumarylacetoacetate hydrolase deficiency causes Tyrosinemia Type 1, which manifests in infancy with severe hepatic failure, renal Fanconi syndrome, rickets, and cabbage-like odor."
      ],
      [
        "Tyrosine aminotransferase catalyzing transamination of tyrosine to 4-hydroxyphenylpyruvate",
        "Tyrosine aminotransferase deficiency causes Tyrosinemia Type 2 (Richner-Hanhart syndrome), presenting with painful palmoplantar keratoderma, corneal erosions, and intellectual disability."
      ],
      [
        "Phenylalanine hydroxylase converting phenylalanine to tyrosine",
        "Phenylalanine hydroxylase deficiency causes classic phenylketonuria (PKU), presenting with intellectual disability, musty odor, hypopigmentation, and microcephaly if untreated."
      ],
      [
        "Dihydropteridine reductase regenerating tetrahydrobiopterin cofactors",
        "Dihydropteridine reductase deficiency causes malignant hyperphenylalaninemia with central monoamine depletion and hyperprolactinemia, not ochronosis or black urine."
      ]
    ],
    "shortestValidSolution": "Black urine upon standing + blue-black ear cartilage + intervertebral disc calcification = Homogentisate 1,2-dioxygenase deficiency (Alkaptonuria).",
    "necessaryInference": "Map homogentisic acid polymer accumulation (ochronosis and black urine) to homogentisate 1,2-dioxygenase.",
    "strongestDistractor": "Fumarylacetoacetate hydrolase converting fumarylacetoacetate to fumarate and acetoacetate",
    "distractorExclusion": "Fumarylacetoacetate hydrolase deficiency causes Tyrosinemia Type 1 (liver failure, Fanconi syndrome), not ochronotic pigmentary arthritis.",
    "citation": "Phornphutkul C, Introne WJ, Perry MB, et al. Natural history of alkaptonuria. N Engl J Med. 2002;347(26):2111-2121. PMID: 12501223.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item identifying the precise enzymatic lesion in tyrosine catabolism causing ochronosis.",
      "distractorExclusionNotes": "Excluded tyrosinemia enzymes (FAH and TAT) and PKU based on ochronotic disc calcification and black urine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0832",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Tetrahydrobiopterin Synthesis vs Recycling Inborn Errors and Monoamines",
    "provisionalDifficulty": 5,
    "stem": "A 3-month-old male infant with hyperphenylalaninemia identified on newborn screening is placed on a strict phenylalanine-restricted formula. Follow-up testing demonstrates that his plasma phenylalanine has successfully normalized to 110 umol/L. However, he now presents with progressive neurological regression, axial hypotonia with limb rigidity, abnormal choreiform movements, swallowing difficulties, and bouts of hyperthermia. Laboratory evaluation shows serum prolactin is markedly elevated at 82 ng/mL (normal < 18 ng/mL). CSF neurotransmitter analysis reveals low homovanillic acid (HVA) and low 5-hydroxyindoleacetic acid (5-HIAA). Which of the following enzymes is most likely defective in this infant?",
    "choices": [
      [
        "6-pyruvoyltetrahydropterin synthase (PTPS) or dihydropteridine reductase (DHPR)",
        "MALIGNANT HYPERPHENYLALANINEMIA is caused by impaired synthesis or recycling of TETRAHYDROBIOPTERIN (BH4), most commonly due to 6-pyruvoyltetrahydropterin synthase (PTPS, synthesis) or dihydropteridine reductase (DHPR, recycling) deficiency. BH4 is an obligatory cofactor for three aromatic amino acid hydroxylases: (1) PHENYLALANINE HYDROXYLASE (converting Phe to Tyr), (2) TYROSINE HYDROXYLASE (converting Tyr to L-DOPA, precursor to dopamine, norepinephrine, and epinephrine), and (3) TRYPTOPHAN HYDROXYLASE (converting Trp to 5-HTP, precursor to serotonin). While dietary phenylalanine restriction normalizes blood phenylalanine, it CANNOT RESTORE central dopamine and serotonin synthesis. Dopamine deficiency removes prolactin inhibition (hyperprolactinemia) and causes severe progressive dystonia and chorea."
      ],
      [
        "Classic hepatic phenylalanine hydroxylase (PAH) with complete gene deletion",
        "Classic PAH deficiency responds completely to dietary phenylalanine restriction with normal neurological development and normal prolactin and monoamine levels."
      ],
      [
        "Dopamine beta-hydroxylase catalyzing norepinephrine synthesis in synaptic vesicles",
        "Dopamine beta-hydroxylase deficiency causes severe orthostatic hypotension and ptosis without hyperphenylalaninemia, hyperprolactinemia, or low CSF 5-HIAA."
      ],
      [
        "Tyrosine aminotransferase catalyzing tyrosine breakdown in the cytoplasm",
        "Tyrosine aminotransferase deficiency causes Tyrosinemia Type 2 with skin and eye lesions; it does not impair central monoamines or elevate prolactin."
      ],
      [
        "Aromatic L-amino acid decarboxylase (AADC) with preserved cofactor binding",
        "AADC deficiency causes monoamine depletion with elevated L-DOPA and normal phenylalanine; it does not present with hyperphenylalaninemia on newborn screening."
      ]
    ],
    "shortestValidSolution": "Normal Phe on diet + progressive dystonia + hyperprolactinemia + low CSF HVA/5-HIAA = BH4 defect (PTPS or DHPR deficiency).",
    "necessaryInference": "Recognize that BH4 is the shared cofactor for phenylalanine, tyrosine, and tryptophan hydroxylases, causing central dopamine and serotonin failure.",
    "strongestDistractor": "Classic hepatic phenylalanine hydroxylase (PAH) with complete gene deletion",
    "distractorExclusion": "Classic PAH deficiency is completely controlled by dietary restriction; progressive neurological regression with hyperprolactinemia proves BH4 deficiency.",
    "citation": "Blau N, van Spronsen FJ, Levy HL. Phenylketonuria. Lancet. 2010;376(9750):1417-1427. PMID: 20971365.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/genetics item on BH4 cofactor biology and central neurotransmitter synthesis failure.",
      "distractorExclusionNotes": "Excluded classic PAH null mutation because dietary restriction fails to rescue dopamine/serotonin cofactor deficits.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0833",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Tyrosinemia Type 1 Fumarylacetoacetate Hydrolase and Succinylacetone Toxicity",
    "provisionalDifficulty": 5,
    "stem": "A 5-month-old male infant presents with hepatosplenomegaly, jaundice, failure to thrive, and a distinctive cabbage-like or boiled-celery body odor. Laboratory evaluation reveals marked coagulopathy (INR 2.8), elevated transaminases, hypophosphatemic rickets, and renal Fanconi syndrome (generalized aminoaciduria, glucosuria, and phosphaturia). Serum alpha-fetoprotein is dramatically elevated at 42,000 ng/mL. Quantitative urine organic acid profiling demonstrates pathognomonic elevation of succinylacetone and succinylacetoacetate. Which of the following enzymes is deficient in this disorder, and which targeted pharmacological agent inhibits an upstream enzyme to prevent toxic metabolite accumulation?",
    "choices": [
      [
        "Deficient enzyme: Fumarylacetoacetate hydrolase; Pharmacological inhibitor: Nitisinone (NTBC)",
        "TYROSINEMIA TYPE 1 is an autosomal recessive deficiency of FUMARYLACETOACETATE HYDROLASE (FAH), the terminal enzyme of tyrosine degradation. Impaired FAH causes upstream accumulation of fumarylacetoacetate and maleylacetoacetate, which are converted into SUCCINYLACETONE and succinylacetoacetate. Succinylacetone is a potent alkylating toxin that causes hepatic necrosis, cirrhosis, hepatocellular carcinoma (strikingly high AFP), and proximal renal tubular dysfunction (Fanconi syndrome), as well as inhibiting porphobilinogen synthase (causing acute porphyria-like crises). Treatment with NITISINONE (NTBC) selectively inhibits the upstream enzyme 4-HYDROXYPHENYLPYRUVATE DIOXYGENASE, preventing the formation of toxic maleylacetoacetate and succinylacetone."
      ],
      [
        "Deficient enzyme: Tyrosine aminotransferase; Pharmacological inhibitor: Allopurinol",
        "Tyrosine aminotransferase deficiency causes Tyrosinemia Type 2; allopurinol inhibits xanthine oxidase for hyperuricemia, not tyrosine catabolism."
      ],
      [
        "Deficient enzyme: Homogentisate 1,2-dioxygenase; Pharmacological inhibitor: Pyridoxine",
        "Homogentisate dioxygenase deficiency causes alkaptonuria, which produces ochronosis and dark urine without succinylacetone or Fanconi syndrome."
      ],
      [
        "Deficient enzyme: 4-hydroxyphenylpyruvate dioxygenase; Pharmacological inhibitor: Levodopa",
        "4-hydroxyphenylpyruvate dioxygenase is the therapeutic target inhibited by nitisinone, not the deficient enzyme causing Tyrosinemia Type 1."
      ],
      [
        "Deficient enzyme: Phenylalanine hydroxylase; Pharmacological inhibitor: Sapropterin",
        "Phenylalanine hydroxylase deficiency causes PKU; sapropterin is a BH4 cofactor analog used to stimulate residual PAH activity, not an inhibitor."
      ]
    ],
    "shortestValidSolution": "Cabbage-like odor + liver failure + Fanconi syndrome + succinylacetone = Fumarylacetoacetate hydrolase (FAH) deficiency; treated with Nitisinone (NTBC).",
    "necessaryInference": "Identify FAH deficiency from pathognomonic succinylacetone and pair it with upstream 4-HPPD inhibition by nitisinone.",
    "strongestDistractor": "Deficient enzyme: 4-hydroxyphenylpyruvate dioxygenase; Pharmacological inhibitor: Levodopa",
    "distractorExclusion": "4-HPPD is the upstream target inhibited by nitisinone to prevent succinylacetone toxicity, not the primary mutated enzyme.",
    "citation": "Kuypers AM et al. Overview of European Practices for Management of Tyrosinemia Type 1: Towards European Guidelines. J Inherit Metab Dis. PMID: 40965374.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/pathology item on tyrosine toxic metabolites and substrate-reduction therapy mechanism.",
      "distractorExclusionNotes": "Excluded Tyrosinemia Type 2 (TAT) and alkaptonuria based on succinylacetone accumulation and nitisinone mechanism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0834",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Endocrine",
    "topic": "Von Gierke Disease Glucose-6-Phosphatase Severe Hypoglycemia and Lactic Acidosis",
    "provisionalDifficulty": 4,
    "stem": "A 4-month-old male infant presents with severe lethargy, irritability, and tachypnea that occur within 2 to 3 hours after feeding. Physical examination reveals a protuberant abdomen with massive hepatomegaly (liver edge 6 cm below right costal margin) and 'doll-like' facial features with chubby cheeks, but normal spleen size. Fasting laboratory evaluation reveals profound hypoglycemia (glucose 24 mg/dL), severe lactic acidosis (lactate 9.2 mmol/L), hyperuricemia (uric acid 12.4 mg/dL), and severe hypertriglyceridemia (triglycerides 1,480 mg/dL). Intravenous administration of glucagon fails to produce an increase in blood glucose but triggers a further spike in plasma lactate concentrations. Which of the following enzymatic deficiencies accounts for this infant's presentation?",
    "choices": [
      [
        "Glucose-6-phosphatase (Von Gierke disease / GSD Type Ia)",
        "GLYCOGEN STORAGE DISEASE TYPE Ia (VON GIERKE DISEASE) is an autosomal recessive deficiency of GLUCOSE-6-PHOSPHATASE in the endoplasmic reticulum of hepatocytes and renal cortex. Glucose-6-phosphatase catalyzes the final common step of BOTH glycogenolysis and gluconeogenesis (hydrolyzing glucose-6-phosphate to free glucose). When deficient, free glucose cannot be released into the blood, causing PROFOUND FASTING HYPOGLYCEMIA. The accumulated glucose-6-phosphate is shunted into: (1) GLYCOLYSIS -> generating massive LACTIC ACIDOSIS (which competes with uric acid for renal excretion, causing HYPERURICEMIA and gout); (2) PENTOSE PHOSPHATE PATHWAY -> generating excess ribose-5-phosphate and purine synthesis, further elevating uric acid; and (3) LIPOGENESIS -> generating severe HYPERTRIGLYCERIDEMIA and hepatic steatosis (massive hepatomegaly)."
      ],
      [
        "Lysosomal acid alpha-1,4-glucosidase (Pompe disease / GSD Type II)",
        "Pompe disease presents with severe infantile hypertrophic cardiomyopathy, generalized hypotonia ('floppy baby'), and macroglossia, without profound hypoglycemia or lactic acidosis."
      ],
      [
        "Glycogen debranching enzyme alpha-1,6-glucosidase (Cori disease / GSD Type III)",
        "Cori disease causes milder hypoglycemia and hepatomegaly with limit dextrin accumulation; gluconeogenesis is intact, so lactic acid levels are completely normal."
      ],
      [
        "Muscle glycogen phosphorylase (McArdle disease / GSD Type V)",
        "McArdle disease affects skeletal muscle, presenting in adolescence/adulthood with exercise-induced cramps, myoglobinuria, and flat lactate curve; blood glucose is normal."
      ],
      [
        "Hepatic glycogen phosphorylase (Hers disease / GSD Type VI)",
        "Hers disease affects hepatic phosphorylase, causing mild hepatomegaly and mild hypoglycemia; gluconeogenesis is intact, so lactic acidosis does not occur."
      ]
    ],
    "shortestValidSolution": "Severe fasting hypoglycemia + lactic acidosis + hyperuricemia + hypertriglyceridemia + massive hepatomegaly = Glucose-6-phosphatase deficiency (Von Gierke).",
    "necessaryInference": "Differentiate GSD Ia (both glycogenolysis and gluconeogenesis blocked -> lactic acidosis) from GSD III (intact gluconeogenesis -> normal lactate).",
    "strongestDistractor": "Glycogen debranching enzyme alpha-1,6-glucosidase (Cori disease / GSD Type III)",
    "distractorExclusion": "In Cori disease, gluconeogenesis is intact; therefore, fasting hypoglycemia is milder and serum lactate and uric acid levels are normal.",
    "citation": "Kishnani PS, Austin SL, Abdenur JE, et al. Diagnosis and management of glycogen storage disease type I. Genet Med. 2014;16(11):e1. PMID: 25356975.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on metabolic shunt pathways and lactic acidosis in glycogen storage diseases.",
      "distractorExclusionNotes": "Excluded Cori disease (intact gluconeogenesis, normal lactate) and Pompe disease (cardiomegaly, normal glucose).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0835",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Cardiovascular",
    "topic": "Pompe Disease Lysosomal Acid Alpha-Glucosidase Infantile Cardiomyopathy",
    "provisionalDifficulty": 4,
    "stem": "A 3-month-old female infant is evaluated for progressive generalized muscle weakness, poor head control, weak cry, and respiratory distress during feeding. Physical examination reveals a profoundly hypotonic infant ('floppy infant'), macroglossia, and massive cardiomegaly without palpable hepatomegaly. Chest radiograph confirms a massively enlarged cardiac silhouette (cardio-thoracic ratio 0.72) with pulmonary vascular congestion. 12-lead ECG demonstrates extremely high-voltage QRS complexes in all leads and a strikingly shortened PR interval. Echocardiogram reveals severe symmetric concentric left and right ventricular hypertrophy with left ventricular outflow tract obstruction. Serum creatine kinase is markedly elevated at 1,420 U/L, but fasting blood glucose is normal. Which of the following cellular organelles is the primary site of pathological glycogen accumulation in this disorder?",
    "choices": [
      [
        "Lysosomes due to deficiency of acid alpha-1,4-glucosidase (acid maltase)",
        "POMPE DISEASE (GLYCOGEN STORAGE DISEASE TYPE II) is an autosomal recessive deficiency of LYSOSOMAL ACID ALPHA-1,4-GLUCOSIDASE (acid maltase). Unlike all other glycogen storage diseases (which involve cytosolic enzymes), Pompe disease is a LYSOSOMAL STORAGE DISORDER. Glycogen engulfed by autophagy cannot be degraded within secondary lysosomes, leading to toxic intra-lysosomal glycogen engorgement and rupture in cardiac and skeletal muscle. Infantile-onset Pompe disease presents classically with: (1) PROFOUND HYPERTROPHIC CARDIOMYOPATHY with shortened PR intervals and massive QRS voltages, (2) SEVERE GENERALIZED HYPOTONIA ('floppy baby'), (3) MACROGLOSSIA, and (4) ELEVATED CK with NORMAL BLOOD GLUCOSE."
      ],
      [
        "Endoplasmic reticulum lumen due to impaired glucose-6-phosphate translocase transport",
        "Impaired glucose-6-phosphate translocase transport causes Von Gierke disease Type Ib (neutropenia and severe hypoglycemia), not cardiomegaly."
      ],
      [
        "Mitochondrial matrix due to deficient pyruvate dehydrogenase phosphatase",
        "Pyruvate dehydrogenase phosphatase deficiency causes congenital lactic acidosis and microcephaly, not lysosomal glycogen accumulation or giant QRS voltages."
      ],
      [
        "Cytosol due to deficient branching enzyme amylo-(1,4 to 1,6)-transglycosylase",
        "Branching enzyme deficiency causes Andersen disease (GSD Type IV), leading to fatal infantile hepatic cirrhosis due to poorly soluble polyglucosan (amylopectin-like) bodies."
      ],
      [
        "Peroxisomes due to impaired very-long-chain fatty acid ATP-binding cassette transport",
        "Peroxisomal ABC transporter defects cause X-linked adrenoleukodystrophy or Zellweger syndrome, not lysosomal glycogen cardiomyopathy."
      ]
    ],
    "shortestValidSolution": "Floppy infant + massive cardiomegaly + giant QRS voltages + short PR interval + normal glucose = Lysosomal acid maltase (Pompe disease).",
    "necessaryInference": "Identify Pompe disease as a uniquely lysosomal glycogen storage disease sparing cytosolic glucose homeostasis.",
    "strongestDistractor": "Cytosol due to deficient branching enzyme amylo-(1,4 to 1,6)-transglycosylase",
    "distractorExclusion": "Andersen disease (branching enzyme) affects the cytosol and produces hepatic cirrhosis; Pompe uniquely targets lysosomes with massive cardiac hypertrophy.",
    "citation": "Kishnani PS, Steiner RD, Bali D, et al. Pompe disease diagnosis and management guideline. Genet Med. 2006;8(5):267-288. PMID: 16702877.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/cardiovascular item on lysosomal compartmentalization and infantile cardiomyopathy.",
      "distractorExclusionNotes": "Excluded cytosolic glycogenoses (GSD I, III, IV) based on lysosomal enzyme defect and isolated neuromuscular/cardiac phenotype.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0836",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Cori Disease Debranching Enzyme Defect and Limit Dextrin Accumulation",
    "provisionalDifficulty": 4,
    "stem": "A 2-year-old boy presents with poor linear growth and abdominal distension. Physical examination reveals marked hepatomegaly with a firm liver edge palpable 4 cm below the right costal margin, but no splenomegaly. Neuromuscular examination demonstrates mild proximal muscle weakness and diminished deep tendon reflexes. Laboratory evaluation reveals mild fasting hypoglycemia (glucose 52 mg/dL), elevated liver transaminases (AST 180 U/L, ALT 145 U/L), and mild elevation of serum creatine kinase (320 U/L). Serum lactic acid and serum uric acid are completely normal. Liver biopsy demonstrates cytoplasmic accumulation of glycogen with abnormally short outer branches resembling limit dextrin. Which of the following dual-catalytic enzymatic activities is deficient in this patient?",
    "choices": [
      [
        "Alpha-1,4-to-alpha-1,4 glucanotransferase and alpha-1,6-glucosidase (debranching enzyme)",
        "CORI DISEASE (GLYCOGEN STORAGE DISEASE TYPE III) is caused by deficiency of the GLYCOGEN DEBRANCHING ENZYME, a single polypeptide possessing two distinct catalytic activities: (1) 4-ALPHA-GLUCANOTRANSFERASE (which moves three glucose residues from a 4-residue branch to the main chain), and (2) ALPHA-1,6-GLUCOSIDASE (which cleaves the remaining single alpha-1,6 linked glucose residue, releasing free glucose). Deficiency impairs glycogenolysis, leaving structurally abnormal glycogen molecules with short outer chains termed LIMIT DEXTRIN. Unlike Von Gierke disease (GSD I), GLUCONEOGENESIS IS FULLY INTACT in Cori disease, so serum lactic acid and uric acid are completely normal, and hypoglycemia is much milder."
      ],
      [
        "Alpha-1,4-to-alpha-1,6 glucan branching enzyme and glycogen synthase",
        "Branching enzyme deficiency causes Andersen disease (GSD IV), which produces abnormally long, unbranched glycogen chains (polyglucosan bodies) and fatal juvenile cirrhosis."
      ],
      [
        "Glucose-6-phosphatase catalytic subunit and glucose-6-phosphate translocase",
        "Glucose-6-phosphatase deficiency causes Von Gierke disease (GSD I), characterized by severe lactic acidosis, hyperuricemia, and severe hypoglycemia."
      ],
      [
        "UDP-glucose pyrophosphorylase and glycogenin autoglucosylating transferase",
        "UDP-glucose pyrophosphorylase catalyzes the synthesis of UDP-glucose for glycogen synthesis; it is not the debranching enzyme defect causing limit dextrinosis."
      ],
      [
        "Muscle-specific glycogen phosphorylase and phosphofructokinase-1",
        "Muscle glycogen phosphorylase deficiency is McArdle disease (GSD V), which presents with exercise-induced muscle cramps without hepatomegaly or hypoglycemia."
      ]
    ],
    "shortestValidSolution": "Hepatomegaly + mild hypoglycemia + NORMAL lactate/uric acid + short outer branches (limit dextrin) = Debranching enzyme (Cori disease / GSD III).",
    "necessaryInference": "Recognize limit dextrin accumulation and normal lactate as diagnostic of glycogen debranching enzyme deficiency (GSD III).",
    "strongestDistractor": "Glucose-6-phosphatase catalytic subunit and glucose-6-phosphate translocase",
    "distractorExclusion": "Von Gierke disease (GSD I) presents with severe lactic acidosis and hyperuricemia; Cori disease (GSD III) maintains intact gluconeogenesis and normal lactate.",
    "citation": "Lucchiari S et al. Hepatic and neuromuscular forms of glycogenosis type III: nine mutations in AGL. Hum Mutat. PMID: 16705713.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item differentiating debranching enzyme limit dextrinosis from Von Gierke disease.",
      "distractorExclusionNotes": "Excluded GSD I based on completely normal serum lactate and uric acid levels and limit dextrin pathology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0837",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "McArdle Disease Muscle Glycogen Phosphorylase and Venous Lactate Curve",
    "provisionalDifficulty": 4,
    "stem": "An 18-year-old male athlete presents with recurrent severe muscle pain, cramping, and stiffness that occur exclusively during the first several minutes of intense sprinting or weightlifting. If he rests briefly when the cramps begin, he is able to resume exercise with markedly improved stamina and comfort ('second-wind phenomenon'). Following a rigorous physical training session yesterday, he noticed that his urine was dark red-brown; urinalysis is positive for blood on dipstick, but microscopic examination reveals zero red blood cells per high-power field. A forearm ischemic exercise test is performed with serial venous blood sampling. Which of the following biochemical patterns on venous blood sampling confirms the diagnosis of muscle glycogen phosphorylase deficiency (McArdle disease)?",
    "choices": [
      [
        "Failure of venous lactate to rise despite a normal brisk rise in venous ammonia concentrations",
        "McARDLE DISEASE (GLYCOGEN STORAGE DISEASE TYPE V) is caused by an autosomal recessive deficiency of MYOPHOSPHORYLASE (skeletal muscle glycogen phosphorylase, PYGM). During intense anaerobic exercise, glycogenolysis is blocked, preventing the breakdown of muscle glycogen into glucose-1-phosphate to enter glycolysis. Consequently, anaerobic glycolysis cannot produce lactic acid. During a FOREARM ISCHEMIC EXERCISE TEST, patients with McArdle disease exhibit a FLAT VENOUS LACTATE CURVE (zero rise in lactate). However, muscle adenylate kinase and AMP deaminase continue to degrade adenylate nucleotides to generate emergency ATP, resulting in a NORMAL BRISK SURGE IN VENOUS AMMONIA. The 'second-wind phenomenon' occurs as blood flow increases and liver-derived glucose and free fatty acids reach the muscle."
      ],
      [
        "Exaggerated rise in venous lactate accompanied by complete absence of venous ammonia production",
        "An exaggerated rise in venous lactate occurs in mitochondrial myopathies; absence of ammonia production indicates myoadenylate deaminase deficiency."
      ],
      [
        "Simultaneous failure of both venous lactate and venous ammonia to rise during ischemic forearm exercise",
        "Failure of both lactate and ammonia to rise indicates inadequate patient effort or poor tourniquet occlusion during the forearm exercise test."
      ],
      [
        "Marked elevation of venous pyruvate with secondary suppression of venous beta-hydroxybutyrate",
        "Pyruvate elevation indicates pyruvate dehydrogenase deficiency, not skeletal muscle glycogen phosphorylase deficiency."
      ],
      [
        "Profound drop in venous glucose accompanied by severe metabolic alkalosis with hypokalemia",
        "Systemic blood glucose is controlled by hepatic glycogenolysis and gluconeogenesis, which are completely normal in McArdle disease."
      ]
    ],
    "shortestValidSolution": "Muscle cramps + myoglobinuria + second-wind phenomenon + flat venous lactate curve with normal ammonia surge = McArdle disease (myophosphorylase).",
    "necessaryInference": "Map muscle glycogenolysis failure to flat venous lactate with preserved purine nucleotide degradation (intact ammonia surge).",
    "strongestDistractor": "Simultaneous failure of both venous lactate and venous ammonia to rise during ischemic forearm exercise",
    "distractorExclusion": "Ammonia rises normally from adenylate kinase/AMP deaminase; failure of ammonia to rise indicates lack of effort or myoadenylate deaminase defect.",
    "citation": "Lucia A, Nogales-Gadea G, Perez M, et al. McArdle disease: what do neurologists need to know? Nat Clin Pract Neurol. 2008;4(10):568-577. PMID: 18833216.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/musculoskeletal item on forearm exercise testing and the second-wind phenomenon in myophosphorylase deficiency.",
      "distractorExclusionNotes": "Excluded mitochondrial myopathy and AMP deaminase patterns based on flat lactate with brisk ammonia elevation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0838",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Carnitine Palmitoyltransferase II Deficiency Long-Chain Fatty Acid Oxidation",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old male military recruit collapses during prolonged field marching under hot weather after a 14-hour fast. He reports severe, debilitating generalized muscle aches, weakness, and dark tea-colored urine. Laboratory evaluation reveals serum creatine kinase markedly elevated at 48,000 U/L (normal < 200 U/L), serum myoglobin 12,000 ug/L, and elevated serum creatinine of 2.1 mg/dL. Fasting blood glucose is 68 mg/dL with trace urine ketones. Plasma acylcarnitine profile demonstrates marked elevation of long-chain acylcarnitines, specifically palmitoylcarnitine (C16) and oleylcarnitine (C18:1), with an elevated (C16 + C18:1)/C2 ratio. Muscle biopsy reveals lipid accumulation in myofibers without glycogen depletion. Which of the following mitochondrial transport processes is defective in this patient?",
    "choices": [
      [
        "Reconversion of acylcarnitines to long-chain acyl-CoA species on the inner mitochondrial membrane",
        "CARNITINE PALMITOYLTRANSFERASE II (CPT II) DEFICIENCY is the most common inherited disorder of lipid metabolism affecting skeletal muscle. Long-chain fatty acids (LCFAs) are esterified to carnitine by CPT I on the outer mitochondrial membrane, transported across the inner membrane by carnitine-acylcarnitine translocase (CACT), and then RECONVERTED TO ACYL-CoA BY CPT II on the inner mitochondrial membrane for entry into beta-oxidation. CPT II deficiency blocks the release of fatty acyl-CoA into the mitochondrial matrix. Classic myopathic adult-onset CPT II deficiency presents in young adults with recurrent rhabdomyolysis and myoglobinuria triggered by PROLONGED EXERCISE, FASTING, or FEVER, with elevated long-chain acylcarnitines (C16, C18:1)."
      ],
      [
        "Initial conjugation of long-chain fatty acids to carnitine on the outer mitochondrial membrane",
        "Conjugation of LCFA to carnitine is catalyzed by CPT I on the outer membrane; CPT I deficiency causes severe hypoketotic hypoglycemia with liver dysfunction and elevated free carnitine."
      ],
      [
        "Active transport of free carnitine across the plasma membrane via OCTN2 transporters",
        "Primary carnitine deficiency (OCTN2 defect) impairs cellular carnitine uptake, presenting with cardiomyopathy and profoundly LOW plasma free carnitine."
      ],
      [
        "Medium-chain fatty acyl-CoA dehydrogenation in the mitochondrial matrix",
        "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency impairs octanoyl-CoA dehydrogenation, presenting in infancy with hypoketotic hypoglycemia and dicarboxylic aciduria."
      ],
      [
        "Short-chain enoyl-CoA hydratase activity in the peroxisomal matrix",
        "Peroxisomal enoyl-CoA hydratase participates in very-long-chain (>C22) oxidation, not mitochondrial muscle energy production during exercise."
      ]
    ],
    "shortestValidSolution": "Young adult + rhabdomyolysis post prolonged exercise/fasting + high C16/C18:1 acylcarnitines = CPT II deficiency (inner mitochondrial membrane).",
    "necessaryInference": "Distinguish CPT I (outer membrane carnitine conjugation) from CPT II (inner membrane reconversion to acyl-CoA).",
    "strongestDistractor": "Initial conjugation of long-chain fatty acids to carnitine on the outer mitochondrial membrane",
    "distractorExclusion": "CPT I conjugates fatty acids to carnitine on the outer membrane; CPT II catalyzes the inner membrane reconversion to acyl-CoA.",
    "citation": "Bonnefont JP et al. Carnitine palmitoyltransferases 1 and 2: biochemical, molecular and medical aspects. Mol Aspects Med. PMID: 15363638.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on the carnitine shuttle topology and long-chain fatty acid oxidation defects.",
      "distractorExclusionNotes": "Excluded CPT I (outer membrane) and OCTN2 (plasma membrane) based on inner membrane CPT II reconversion of C16 carnitine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0839",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Medium-Chain Acyl-CoA Dehydrogenase Deficiency Hypoketotic Hypoglycemia",
    "provisionalDifficulty": 4,
    "stem": "A 14-month-old girl is brought to the emergency department after being found unarousable in her crib following an overnight fast of 14 hours during a mild gastroenteritis illness. Physical examination reveals an unresponsive, hypotonic toddler with mild hepatomegaly. Laboratory evaluation demonstrates profound hypoglycemia (glucose 22 mg/dL), mild metabolic acidosis, and hyperammonemia (110 umol/L). Serum beta-hydroxybutyrate and acetoacetate are completely undetectable, and urine dipstick reveals ZERO ketones. Plasma acylcarnitine profile demonstrates marked elevation of octanoylcarnitine (C8), with elevated C6 and C10:1 species. Urine organic acid analysis reveals significant elevations of C6 to C10 dicarboxylic acids (adipic, suberic, and sebacic acids). Which of the following metabolic pathways is defective in this patient?",
    "choices": [
      [
        "Mitochondrial beta-oxidation of fatty acids due to medium-chain acyl-CoA dehydrogenase deficiency",
        "MEDIUM-CHAIN ACYL-CoA DEHYDROGENASE (MCAD) DEFICIENCY is the most common inborn error of fatty acid oxidation (autosomal recessive, frequently due to the c.985A>G mutation). During fasting, glycogen stores deplete and the body relies on fatty acid beta-oxidation to generate acetyl-CoA (which drives ketogenesis and allosterically activates pyruvate carboxylase for gluconeogenesis). Deficient MCAD blocks the initial dehydrogenation of 6- to 12-carbon fatty acids. Consequently, fasting produces PROFOUND HYPOKETOTIC HYPOGLYCEMIA. Unmetabolized medium-chain fatty acids accumulate as OCTANOYLCARNITINE (C8) and are shunted into microsomal omega-oxidation, yielding C6-C10 DICARBOXYLIC ACIDS. Unesterified fatty acids also inhibit the urea cycle, causing secondary hyperammonemia."
      ],
      [
        "Hepatic glycogenolysis due to deficient debranching enzyme",
        "Glycogen storage disease Type III (Cori) produces hypoglycemia with ketosis, not hypoketotic hypoglycemia with dicarboxylic aciduria."
      ],
      [
        "Mitochondrial HMG-CoA lyase catalyzing the terminal step of acetoacetate synthesis",
        "HMG-CoA lyase deficiency causes hypoketotic hypoglycemia but manifests with massive 3-hydroxy-3-methylglutaric aciduria, not elevated C8 octanoylcarnitine."
      ],
      [
        "Peroxisomal very-long-chain fatty acid alpha-oxidation",
        "Alpha-oxidation of phytanic acid occurs in peroxisomes; deficiency causes Refsum disease (ataxia, retinitis pigmentosa), not acute fasting hypoketotic hypoglycemia."
      ],
      [
        "Cytosolic gluconeogenesis due to fructose-1,6-bisphosphatase deficiency",
        "Fructose-1,6-bisphosphatase deficiency causes fasting hypoglycemia with marked lactic acidosis and ketosis, not hypoketotic hypoglycemia."
      ]
    ],
    "shortestValidSolution": "Fasting hypoglycemia + ZERO ketones + high C8 octanoylcarnitine + C6-C10 dicarboxylic acids = MCAD deficiency (beta-oxidation block).",
    "necessaryInference": "Recognize hypoketotic hypoglycemia plus C8 acylcarnitine and dicarboxylic aciduria as pathognomonic for MCAD deficiency.",
    "strongestDistractor": "Mitochondrial HMG-CoA lyase catalyzing the terminal step of acetoacetate synthesis",
    "distractorExclusion": "HMG-CoA lyase deficiency prevents ketogenesis but causes HMG aciduria, whereas MCAD deficiency selectively elevates C8 octanoylcarnitine.",
    "citation": "Grosse SD, Khoury MJ, Greene CL, et al. The epidemiology of medium chain acyl-CoA dehydrogenase deficiency: an update. Genet Med. 2006;8(4):205-212. PMID: 16617240.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on fasting energy homeostasis, hypoketotic hypoglycemia, and omega-oxidation shunt products.",
      "distractorExclusionNotes": "Excluded ketotic hypoglycemia disorders (GSD, FBPase) and HMG-CoA lyase based on pathognomonic C8 octanoylcarnitine profile.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0840",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Pyruvate Dehydrogenase Complex E1-Alpha Deficiency and Ketogenic Diet",
    "provisionalDifficulty": 4,
    "stem": "An 8-month-old male infant presents with developmental regression, severe hypotonia, microcephaly, and episodes of tachypnea. Laboratory evaluation demonstrates severe lactic acidosis (venous lactate 8.8 mmol/L, normal < 2.0) and elevated pyruvate (0.42 mmol/L), with a normal lactate-to-pyruvate ratio of approximately 20:1. Plasma amino acid analysis reveals markedly elevated alanine. Genetic testing identifies a hemizygous pathogenic missense mutation in the PDHA1 gene encoding the E1-alpha catalytic subunit of the pyruvate dehydrogenase complex (PDC). To bypass the metabolic block, prevent neurotoxic lactic acidosis, and provide an alternative fuel source for the brain, the infant is transitioned to a specialized therapeutic diet. Which of the following dietary regimens with purely ketogenic amino acid supplementation is indicated?",
    "choices": [
      [
        "High-fat, low-carbohydrate ketogenic diet supplemented with leucine and lysine",
        "PYRUVATE DEHYDROGENASE COMPLEX (PDC) DEFICIENCY is the most common cause of congenital lactic acidosis, most frequently caused by X-linked mutations in the PDHA1 gene (E1-alpha subunit). PDC converts pyruvate to acetyl-CoA. When blocked, pyruvate accumulates and is shunted into: (1) LACTATE via lactate dehydrogenase (causing severe lactic acidosis), and (2) ALANINE via alanine transaminase (ALT). Glucogenic carbohydrates aggravate lactic acid production. Treatment requires a KETOGENIC DIET (high fat, low carbohydrate) supplemented with the purely ketogenic amino acids LEUCINE AND LYSINE. Ketogenic substrates bypass pyruvate dehydrogenase entirely, generating acetyl-CoA and ketone bodies (acetoacetate, beta-hydroxybutyrate) that fuel the brain without producing lactate."
      ],
      [
        "High-carbohydrate, low-fat diet supplemented with valine and isoleucine",
        "High carbohydrate intake floods glycolysis with glucose, driving massive pyruvate accumulation and worsening life-threatening lactic acidosis; valine is glucogenic."
      ],
      [
        "Protein-restricted diet supplemented with arginine and citrulline",
        "Arginine and citrulline supplementation is used for urea cycle disorders to promote nitrogen clearance, not for pyruvate dehydrogenase complex deficiency."
      ],
      [
        "Medium-chain triglyceride-restricted diet supplemented with methionine and threonine",
        "MCTs are ketogenic and therapeutic in PDC deficiency; restricting them and giving glucogenic methionine/threonine would exacerbate lactic acidosis."
      ],
      [
        "Galactose- and lactose-free diet supplemented with phenylalanine and tyrosine",
        "Galactose-free diets are used in classic galactosemia; phenylalanine and tyrosine are mixed glucogenic/ketogenic amino acids that do not bypass pyruvate."
      ]
    ],
    "shortestValidSolution": "Pyruvate dehydrogenase deficiency -> pyruvate shunted to lactate/alanine. Treat with Ketogenic diet + purely ketogenic amino acids (Leucine and Lysine).",
    "necessaryInference": "Identify Leucine and Lysine as the only purely ketogenic amino acids capable of bypassing PDC without feeding pyruvate/lactate.",
    "strongestDistractor": "High-carbohydrate, low-fat diet supplemented with valine and isoleucine",
    "distractorExclusion": "Carbohydrates and glucogenic amino acids (valine) generate pyruvate and worsen lactic acidosis; purely ketogenic substrates bypass the defect.",
    "citation": "Patel KP, O'Brien TW, Subramony SH, et al. The spectrum of pyruvate dehydrogenase complex deficiency: clinical, biochemical and genetic features in 371 patients. Mol Genet Metab. 2012;105(1):34-43. PMID: 22079328.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on metabolic bypass therapy and ketogenic versus glucogenic amino acid categorization.",
      "distractorExclusionNotes": "Excluded glucogenic amino acids (Val, Met, Thr) and high-carbohydrate diets which fuel pyruvate and exacerbate lactic acidosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0841",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Pyruvate Carboxylase Deficiency Gluconeogenesis and Anaplerosis Failure",
    "provisionalDifficulty": 5,
    "stem": "A 2-day-old female neonate presents with severe hypotonia, tachypnea, seizures, and progressive coma. Arterial blood gas demonstrates severe metabolic acidosis with pH 7.08, HCO3- 6 mEq/L, and elevated anion gap of 30 mEq/L. Serum lactate is markedly elevated at 14 mmol/L, with a severely elevated lactate-to-pyruvate ratio exceeding 60:1 (normal 10-20:1). Fasting blood glucose is 28 mg/dL. In addition, serum ammonia is elevated (260 umol/L), and plasma amino acid chromatography demonstrates marked citrullinemia, hyperlysinemia, and hyperalaninemia. Enzymatic testing confirms deficiency of pyruvate carboxylase. Which of the following biochemical principles explains why pyruvate carboxylase deficiency impairs BOTH gluconeogenesis and the urea cycle?",
    "choices": [
      [
        "Failure of anaplerotic oxaloacetate synthesis impairs both phosphoenolpyruvate carboxykinase and aspartate supply to argininosuccinate synthetase",
        "PYRUVATE CARBOXYLASE is a biotin-dependent mitochondrial enzyme that converts pyruvate into OXALOACETATE (OAA). It serves two vital functions: (1) GLUCONEOGENESIS: OAA is converted to phosphoenolpyruvate by PEPCK, so deficiency causes severe fasting hypoglycemia and lactic acidosis; (2) ANAPLEROSIS: OAA replenishes the citric acid cycle and transaminates with glutamate to form ASPARTATE. Aspartate is an obligatory substrate for ARGININOSUCCINATE SYNTHETASE in the urea cycle (providing the second nitrogen atom of urea). Lack of aspartate stalls argininosuccinate synthesis, leading to secondary CITRULLINEMIA and HYPERAMMONEMIA. Furthermore, depletion of OAA prevents NADH oxidation, producing a markedly elevated lactate-to-pyruvate ratio."
      ],
      [
        "Direct competitive inhibition of carbamoyl phosphate synthetase I by accumulated intracellular lactate",
        "Hyperammonemia in pyruvate carboxylase deficiency is caused by lack of aspartate for argininosuccinate synthetase, not competitive CPS I inhibition by lactate."
      ],
      [
        "Inability of mitochondrial malate dehydrogenase to synthesize malate in the absence of cytosolic citrate",
        "Malate dehydrogenase synthesizes malate from oxaloacetate; lack of oxaloacetate is the initiating defect, not citrate deficiency."
      ],
      [
        "Allosteric desensitization of acetyl-CoA carboxylase preventing malonyl-CoA synthesis in the cytosol",
        "Acetyl-CoA accumulates because it cannot be consumed by citrate synthase without oxaloacetate; this stimulates lipogenesis but does not cause urea cycle failure."
      ],
      [
        "Impaired synthesis of N-acetylglutamate secondary to excessive mitochondrial succinyl-CoA consumption",
        "NAGS deficiency occurs in propionic acidemia due to propionyl-CoA accumulation; in pyruvate carboxylase deficiency, urea cycle failure is due to aspartate starvation."
      ]
    ],
    "shortestValidSolution": "Pyruvate carboxylase makes Oxaloacetate (OAA) -> OAA needed for gluconeogenesis (PEPCK) and transaminates to Aspartate (needed by ASS in urea cycle).",
    "necessaryInference": "Link mitochondrial oxaloacetate anaplerosis to aspartate provision for argininosuccinate synthetase in the urea cycle.",
    "strongestDistractor": "Direct competitive inhibition of carbamoyl phosphate synthetase I by accumulated intracellular lactate",
    "distractorExclusion": "Citrulline accumulates because the second step of the urea cycle (argininosuccinate synthetase) lacks its co-substrate aspartate (derived from OAA).",
    "citation": "García-Cazorla A et al. Pyruvate carboxylase deficiency: metabolic characteristics and new neurological aspects. Ann Neurol. PMID: 16278852.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item linking anaplerotic oxaloacetate deficiency to dual gluconeogenic and urea cycle failure.",
      "distractorExclusionNotes": "Excluded direct CPS I inhibition and NAGS options based on aspartate-dependent argininosuccinate synthetase arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0842",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Hereditary Fructose Intolerance Aldolase B Phosphate Trapping Mechanism",
    "provisionalDifficulty": 4,
    "stem": "A 6-month-old female infant is brought to the pediatrician for severe vomiting, pallor, diaphoresis, and lethargy. The symptoms began one week ago when fruit purees and fruit juices were first introduced into her diet; prior to this, she was exclusively breastfed and thrived without symptoms. Laboratory evaluation 90 minutes after fruit puree ingestion demonstrates severe hypoglycemia (glucose 28 mg/dL), metabolic acidosis with hyperlactatemia, and hyperuricemia (9.4 mg/dL). Urinalysis is positive for reducing substances on Clinitest, but completely negative for glucose on glucose oxidase dipstick. Which of the following biochemical mechanisms accounts for the acute profound hypoglycemia and hyperuricemia following fructose ingestion in patients with aldolase B deficiency?",
    "choices": [
      [
        "Intracellular trapping of fructose-1-phosphate depletes inorganic phosphate, inhibiting glycogen phosphorylase and gluconeogenesis",
        "HEREDITARY FRUCTOSE INTOLERANCE (HFI) is an autosomal recessive deficiency of ALDOLASE B (fructose-1,6-bisphosphate aldolase B in liver, kidney, and intestine). Fructose is phosphorylated to fructose-1-phosphate (F1P) by fructokinase, consuming ATP. Because aldolase B is deficient, F1P ACCUMULATES RAPIDLY AND TRAPS INORGANIC PHOSPHATE (Pi). Intracellular Pi depletion has two catastrophic consequences: (1) HYPOGLYCEMIA: Low Pi inhibits glycogen phosphorylase (blocking glycogenolysis) and aldolase B absence blocks gluconeogenesis, producing profound hypoglycemia; (2) HYPERURICEMIA: Depleted Pi prevents ATP resynthesis from ADP/AMP, activating AMP deaminase and catabolizing adenine nucleotides into uric acid."
      ],
      [
        "Direct competitive inhibition of pancreatic glucokinase preventing homeostatic insulin suppression",
        "Fructose metabolism does not directly inhibit pancreatic beta-cell glucokinase; HFI hypoglycemia is driven by hepatic glycogenolysis and gluconeogenesis inhibition."
      ],
      [
        "Excessive accumulation of sorbitol within hepatocytes causing osmotic cellular lysis and enzyme leakage",
        "Sorbitol accumulation occurs via aldose reductase in diabetes and cataract formation, not as the primary toxic mechanism in aldolase B deficiency."
      ],
      [
        "Allosteric activation of fructose-1,6-bisphosphatase by toxic phosphorylated intermediate metabolites",
        "Fructose-1-phosphate allosterically inhibits, rather than activates, gluconeogenic enzymes; phosphate depletion also stalls energy production."
      ],
      [
        "Competitive displacement of glucose from apical sodium-glucose cotransporter 1 in intestinal enterocytes",
        "Fructose is absorbed via facilitated diffusion through GLUT5, not SGLT1, and enterocyte transport does not account for systemic hypoglycemia or hyperuricemia."
      ]
    ],
    "shortestValidSolution": "Aldolase B deficiency -> Fructose-1-phosphate accumulates -> traps Pi -> blocks glycogenolysis (hypoglycemia) + AMP degraded to uric acid (hyperuricemia).",
    "necessaryInference": "Map phosphate trapping by F1P to inhibition of glycogenolysis (hypoglycemia) and accelerated AMP purine degradation (hyperuricemia).",
    "strongestDistractor": "Allosteric activation of fructose-1,6-bisphosphatase by toxic phosphorylated intermediate metabolites",
    "distractorExclusion": "Pi depletion and toxic F1P inhibit glycogen phosphorylase and gluconeogenesis; they do not activate fructose-1,6-bisphosphatase.",
    "citation": "Ali M, Rellos P, Cox TM. Hereditary fructose intolerance. J Med Genet. 1998;35(5):353-365. PMID: 9610797.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item on aldolase B deficiency, intracellular phosphate trapping, and nucleotide breakdown.",
      "distractorExclusionNotes": "Excluded enterocyte SGLT1 and sorbitol mechanisms based on hepatic Pi depletion and AMP deaminase activation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0843",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Renal",
    "topic": "Essential Fructosuria Fructokinase Deficiency and Compensatory Hexokinase Shunt",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old healthy man undergoes a routine pre-employment physical examination. He is completely asymptomatic with an unremarkable medical history. Routine urinalysis shows 2+ reducing substances on copper reduction reagent (Clinitest), but a glucose-specific strip (glucose oxidase) is completely negative. Repeated fasting blood glucose, liver enzymes, and renal function panels are entirely normal. Further evaluation shows that after consuming a high-fructose meal, large amounts of fructose appear in his urine without any signs of hypoglycemia, nausea, or abdominal distress. The patient is reassured that this is an entirely benign condition. Which of the following enzymes normally provides an alternative, low-affinity salvage pathway to metabolize a small fraction of dietary fructose in peripheral tissues in this condition?",
    "choices": [
      [
        "Hexokinase phosphorylating fructose to fructose-6-phosphate",
        "ESSENTIAL FRUCTOSURIA is a completely benign, asymptomatic autosomal recessive condition caused by deficiency of hepatic FRUCTOKINASE (ketohexokinase). Fructose absorbed from the diet cannot be converted to fructose-1-phosphate. Consequently, unmetabolized fructose accumulates in the blood and is excreted in urine, causing positive testing for reducing sugars on copper reduction (Clinitest) with negative glucose strip. Because no toxic phosphorylated intermediate is trapped (unlike HFI), intracellular phosphate and ATP remain normal. A minor fraction of dietary fructose (approx. 10-15%) is phosphorylated directly to FRUCTOSE-6-PHOSPHATE by HEXOKINASE in adipose tissue and skeletal muscle, allowing it to enter standard glycolysis."
      ],
      [
        "Aldolase B cleaving free unphosphorylated fructose into triose intermediates",
        "Aldolase B requires phosphorylated substrates (fructose-1-phosphate or fructose-1,6-bisphosphate); it cannot cleave free unphosphorylated fructose."
      ],
      [
        "Glucokinase converting fructose into glucose-6-phosphate in pancreatic beta cells",
        "Glucokinase has high specificity for glucose and negligible affinity for fructose; it does not metabolize fructose in peripheral tissues."
      ],
      [
        "Sorbitol dehydrogenase oxidizing fructose to sorbitol in the lens and retina",
        "Sorbitol dehydrogenase oxidizes sorbitol into fructose (the reverse direction) using NAD+; it does not phosphorylate fructose for glycolysis."
      ],
      [
        "Phosphofructokinase-1 converting fructose directly to fructose-1,6-bisphosphate",
        "Phosphofructokinase-1 phosphorylates fructose-6-phosphate to fructose-1,6-bisphosphate; it cannot use unphosphorylated fructose as a substrate."
      ]
    ],
    "shortestValidSolution": "Fructokinase deficiency = Essential fructosuria (benign, fructose in urine). Hexokinase acts as low-affinity salvage (fructose -> F6P).",
    "necessaryInference": "Identify hexokinase as the alternative enzyme that phosphorylates fructose to fructose-6-phosphate when fructokinase is absent.",
    "strongestDistractor": "Aldolase B cleaving free unphosphorylated fructose into triose intermediates",
    "distractorExclusion": "Aldolase B only cleaves phosphorylated hexoses (F1P, F1,6BP); unphosphorylated fructose is salvaged by hexokinase.",
    "citation": "Santer R et al. A summary of molecular genetic findings in fructose-1,6-bisphosphatase deficiency with a focus on a common long-range deletion and the role of MLPA analysis. Orphanet J Rare Dis. PMID: 27101822.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item contrasting benign fructokinase deficiency with aldolase B and identifying the hexokinase salvage pathway.",
      "distractorExclusionNotes": "Excluded glucokinase, PFK-1, and aldolase B based on substrate specificity (hexokinase phosphorylates fructose to F6P).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0844",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Classic Galactosemia GALT Deficiency Galactitol Cataract and E. Coli Sepsis",
    "provisionalDifficulty": 4,
    "stem": "A 5-day-old male infant born to a healthy mother develops poor feeding, forceful vomiting, and lethargy within 48 hours of starting breastfeeding. Physical examination reveals jaundice, marked hepatomegaly, and bilateral punctate oil-droplet opacities within both ocular lenses (cataracts). Blood cultures drawn on admission grow Escherichia coli. Laboratory evaluation reveals direct hyperbilirubinemia, elevated transaminases, prolonged prothrombin time, and renal Fanconi syndrome. Urinalysis demonstrates reducing substances with a negative glucose dipstick. Deficiency of which of the following enzymes is responsible for this clinical presentation, and which accumulated metabolite specifically mediates cataract formation?",
    "choices": [
      [
        "Enzyme: Galactose-1-phosphate uridylyltransferase (GALT); Cataract metabolite: Galactitol",
        "CLASSIC GALACTOSEMIA is an autosomal recessive deficiency of GALACTOSE-1-PHOSPHATE URIDYLYLTRANSFERASE (GALT). Ingestion of galactose (from lactose in breast milk or formula) leads to accumulation of GALACTOSE-1-PHOSPHATE (Gal-1-P) and free galactose. Gal-1-P accumulation in liver, brain, and kidneys causes severe hepatic failure, jaundice, intellectual disability, and renal Fanconi syndrome. High Gal-1-P impairs leukocyte bactericidal activity, dramatically predisposing neonates to fulminant ESCHERICHIA COLI SEPSIS. In the lens of the eye, excess free galactose is converted by ALDOSE REDUCTASE into GALACTITOL, an osmotically active polyol that cannot diffuse out of cells, causing osmotic swelling, fiber rupture, and bilateral OIL-DROPLET CATARACTS."
      ],
      [
        "Enzyme: Galactokinase (GALK); Cataract metabolite: Galactose-1-phosphate",
        "Galactokinase (GALK) deficiency causes mild galactosemia presenting with isolated cataracts due to galactitol, but lacks hepatosplenomegaly, liver failure, and E. coli sepsis."
      ],
      [
        "Enzyme: UDP-galactose-4-epimerase (GALE); Cataract metabolite: Sorbitol",
        "GALE deficiency is rare and mimics GALT in severe forms, but cataracts are caused by galactitol, not sorbitol (which is formed from glucose)."
      ],
      [
        "Enzyme: Aldolase B; Cataract metabolite: Fructose-1-phosphate",
        "Aldolase B deficiency causes hereditary fructose intolerance, which manifests after weaning to fruits, without cataracts or E. coli sepsis."
      ],
      [
        "Enzyme: Glucose-6-phosphate dehydrogenase (G6PD); Cataract metabolite: Glutathione",
        "G6PD deficiency causes episodic hemolytic anemia upon oxidative stress, not neonatal liver failure, cataracts, or reducing substances in urine."
      ]
    ],
    "shortestValidSolution": "Breastfeeding + jaundice/hepatomegaly + cataracts + E. coli sepsis = GALT deficiency (Classic Galactosemia); cataracts caused by Galactitol.",
    "necessaryInference": "Pair GALT enzyme deficiency with dual pathogenesis: toxic Gal-1-P (liver/kidney/E. coli sepsis) and osmotic galactitol (cataracts).",
    "strongestDistractor": "Enzyme: Galactokinase (GALK); Cataract metabolite: Galactose-1-phosphate",
    "distractorExclusion": "GALK deficiency presents with isolated cataracts without liver failure or sepsis; cataract formation is mediated by galactitol, not Gal-1-P.",
    "citation": "Berry GT. Classic Galactosemia and Clinical Variant Galactosemia. GeneReviews. 2000 (Updated 2021). PMID: 20301691.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/microbiology item on classic galactosemia, E. coli sepsis susceptibility, and aldose reductase polyol cataractogenesis.",
      "distractorExclusionNotes": "Excluded GALK deficiency (no hepatomegaly or sepsis) and sorbitol based on galactitol-mediated lens swelling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0845",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Galactokinase Deficiency Isolated Infantile Nuclear Cataractogenesis",
    "provisionalDifficulty": 4,
    "stem": "A 6-month-old male infant is brought to the pediatric ophthalmologist when his parents notice a white pupillary reflex (leukocoria) in both eyes. Slit-lamp examination demonstrates bilateral dense nuclear cataracts. His birth history, newborn period, and developmental milestones have been entirely normal. He is growing well along the 50th percentile on standard infant formula. Abdominal examination reveals a soft, non-tender abdomen without hepatomegaly or splenomegaly. Neurological examination is completely normal. Laboratory evaluation demonstrates normal serum bilirubin, normal transaminases, normal coagulation profile, and normal renal function. Urinalysis demonstrates 3+ reducing substances with a negative glucose oxidase strip. Which of the following enzymes is most likely deficient in this infant?",
    "choices": [
      [
        "Galactokinase (GALK1)",
        "GALACTOKINASE DEFICIENCY is a milder autosomal recessive inborn error of galactose metabolism caused by mutations in GALK1. Galactokinase catalyzes the initial phosphorylation of galactose into galactose-1-phosphate. When galactokinase is deficient, galactose cannot be phosphorylated; therefore, toxic galactose-1-phosphate DOES NOT ACCUMULATE, sparing the patient from hepatic failure, renal Fanconi syndrome, intellectual disability, and E. coli sepsis. Instead, unmetabolized galactose spills into the urine (positive reducing substance, negative glucose strip) and enters the ocular lens. There, ALDOSE REDUCTASE reduces galactose into GALACTITOL, causing osmotic swelling and ISOLATED BILATERAL CATARACTS in an otherwise healthy infant."
      ],
      [
        "Galactose-1-phosphate uridylyltransferase (GALT)",
        "GALT deficiency causes classic galactosemia, which presents in the first week of life with fulminant hepatic failure, jaundice, hepatosplenomegaly, and E. coli sepsis."
      ],
      [
        "Aldolase B (fructose-1,6-bisphosphate aldolase)",
        "Aldolase B deficiency causes hereditary fructose intolerance, presenting with vomiting and hypoglycemia after eating fruits; it does not cause cataracts."
      ],
      [
        "Fructokinase (ketohexokinase)",
        "Fructokinase deficiency causes benign essential fructosuria without cataracts or ocular pathology."
      ],
      [
        "Glucose-6-phosphatase (G6PC)",
        "Glucose-6-phosphatase deficiency causes Von Gierke disease (GSD I), characterized by profound fasting hypoglycemia, lactic acidosis, and massive hepatomegaly."
      ]
    ],
    "shortestValidSolution": "Isolated cataracts + reducing substances in urine + completely normal liver/growth = Galactokinase (GALK) deficiency.",
    "necessaryInference": "Distinguish isolated cataracts in GALK deficiency from multi-organ failure and sepsis in GALT classic galactosemia.",
    "strongestDistractor": "Galactose-1-phosphate uridylyltransferase (GALT)",
    "distractorExclusion": "GALT deficiency causes severe infantile liver failure, jaundice, and sepsis; GALK deficiency presents with benign isolated cataracts.",
    "citation": "Bosch AM et al. Classic galactosemia: dietary dilemmas. J Inherit Metab Dis. PMID: 20625932.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry item contrasting isolated galactokinase deficiency with severe multi-organ GALT galactosemia.",
      "distractorExclusionNotes": "Excluded GALT (liver failure/sepsis) and fructokinase (no cataracts) based on isolated polyol-driven lens opacity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0846",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "G6PD Deficiency Glutathione Reductase Dynamics and Heinz Body Formation",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old African American man presents with sudden-onset fatigue, dark tea-colored urine, and scleral icterus 3 days after completing a course of trimethoprim-sulfamethoxazole for acute prostatitis. Laboratory evaluation reveals a drop in hemoglobin from a baseline of 14.5 g/dL to 8.2 g/dL, reticulocyte count 8.4%, indirect bilirubin 4.1 mg/dL, and lactate dehydrogenase 1,120 U/L (normal < 250 U/L). Peripheral blood smear with crystal violet supravital staining demonstrates dark, round intracellular inclusions adherent to erythrocyte inner cell membranes (Heinz bodies), as well as numerous cells with irregular scooped-out borders (bite cells / degmacytes). Which of the following biochemical defects is the direct proximate cause of hemoglobin denaturation and precipitation in this disorder?",
    "choices": [
      [
        "Failure of NADPH generation prevents glutathione reductase from regenerating reduced glutathione (GSH)",
        "GLUCOSE-6-PHOSPHATE DEHYDROGENASE (G6PD) catalyzes the rate-limiting step of the PENTOSE PHOSPHATE PATHWAY (hexose monophosphate shunt), converting G6P to 6-phosphoglucono-delta-lactone while reducing NADP+ to NADPH. Because mature erythrocytes lack mitochondria and nuclei, the HMP shunt is their SOLE SOURCE OF NADPH. NADPH is the obligatory electron donor for GLUTATHIONE REDUCTASE, which reduces oxidized glutathione (GSSG) back to REDUCED GLUTATHIONE (GSH). GSH neutralizes hydrogen peroxide and free radicals via glutathione peroxidase. Under oxidative stress (e.g., sulfa drugs, fava beans, infection), G6PD-deficient erythrocytes cannot regenerate GSH, allowing reactive oxygen species to cross-link sulfhydryl groups on hemoglobin, forming insoluble HEINZ BODIES that are plucked by splenic macrophages (BITE CELLS)."
      ],
      [
        "Inability of pyruvate kinase to generate ATP leading to failure of the membrane Na+/K+-ATPase pump",
        "Pyruvate kinase deficiency impairs ATP generation in glycolysis, causing chronic non-spherocytic hemolytic anemia with echinocytes (burr cells), not Heinz bodies."
      ],
      [
        "Mutation in the beta-spectrin cytoskeleton disrupting vertical interactions with membrane ankyrin",
        "Spectrin/ankyrin cytoskeletal defects cause hereditary spherocytosis, characterized by round spherocytes without central pallor and increased osmotic fragility."
      ],
      [
        "Deficiency of NADH-cytochrome b5 reductase leading to persistent oxidation of ferrous heme to ferric heme",
        "NADH-cytochrome b5 reductase deficiency causes methemoglobinemia (chocolate-colored blood and cyanosis), not Heinz body hemolytic anemia."
      ],
      [
        "Impaired synthesis of 2,3-bisphosphoglycerate shifting the hemoglobin oxygen dissociation curve to the left",
        "Bisphosphoglycerate mutase regulates 2,3-BPG levels and oxygen affinity; it does not protect erythrocytes against oxidative denaturation."
      ]
    ],
    "shortestValidSolution": "G6PD deficiency -> decreased NADPH -> glutathione reductase cannot regenerate GSH -> oxidative cross-linking -> Heinz bodies & bite cells.",
    "necessaryInference": "Link G6PD-derived NADPH to glutathione reductase and the maintenance of reduced glutathione pools against oxidative hemolysis.",
    "strongestDistractor": "Inability of pyruvate kinase to generate ATP leading to failure of the membrane Na+/K+-ATPase pump",
    "distractorExclusion": "Pyruvate kinase deficiency impairs ATP and causes rigid echinocytes; G6PD impairs NADPH/GSH causing oxidative Heinz bodies and bite cells.",
    "citation": "Luzzatto L, Nannelli C, Notaro R. Glucose-6-Phosphate Dehydrogenase Deficiency. Hematol Oncol Clin North Am. 2016;30(2):373-393. PMID: 27040960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/hematology item on pentose phosphate pathway kinetics and glutathione antioxidant defenses.",
      "distractorExclusionNotes": "Excluded pyruvate kinase (ATP failure) and methemoglobinemia based on Heinz body sulfhydryl oxidation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0847",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Gastrointestinal",
    "topic": "Hereditary Hemochromatosis HFE C282Y Ferroportin and Hepcidin Regulation",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents with progressive fatigue, generalized arthralgias involving the second and third metacarpophalangeal joints, erectile dysfunction, and darkening of his skin ('bronze' pigmentation). Physical examination reveals hepatomegaly and testicular atrophy. Fasting laboratory evaluation reveals serum ferritin markedly elevated at 2,450 ng/mL (normal 20-250 ng/mL), transferrin saturation 88% (normal 20-50%), and fasting blood glucose 192 mg/dL. Genetic testing confirms homozygous c.845G>A (C282Y) mutation in the HFE gene on chromosome 6. Which of the following pathophysiological mechanisms accounts for the uncontrolled systemic iron absorption and multi-organ iron overload in this patient?",
    "choices": [
      [
        "Inappropriately suppressed hepatic hepcidin synthesis allows unchecked basolateral ferroportin iron export into plasma",
        "HEREDITARY HEMOCHROMATOSIS is most commonly caused by homozygous C282Y mutations in the HFE GENE. Normal HFE protein interacts with transferrin receptor 1 (TfR1) and transferrin receptor 2 (TfR2) on hepatocytes to sense circulating iron levels and upregulate the iron-regulatory hormone HEPCIDIN. Mutant HFE (C282Y) disrupts cell-surface complex formation, tricking hepatocytes into sensing FALSELY LOW SYSTEMIC IRON. Consequently, HEPATIC HEPCIDIN SYNTHESIS IS PROFOUNDLY SUPPRESSED. Because hepcidin normally binds and internalizes the iron exporter FERROPORTIN for lysosomal degradation, low hepcidin allows ferroportin to remain constitutively active on enterocyte basolateral membranes and reticuloendothelial macrophages, driving relentless, unregulated iron absorption."
      ],
      [
        "Constitutive overproduction of hepcidin leading to accelerated degradation of enterocyte divalent metal transporter 1",
        "High hepcidin occurs in anemia of chronic disease and suppresses ferroportin; hemochromatosis is characterized by inappropriately LOW hepcidin levels."
      ],
      [
        "Direct transcriptional upregulation of apical transferrin receptors in duodenal enterocytes",
        "Duodenal enterocytes absorb non-heme iron via apical DMT1 and heme iron via heme transporters, not via apical transferrin receptors."
      ],
      [
        "Inhibition of duodenal ferric reductase (DCYTB) preventing reduction of dietary ferric iron to ferrous iron",
        "Inhibiting DCYTB would prevent iron absorption; in hemochromatosis, iron absorption is massively increased."
      ],
      [
        "Selective mutation of the ceruloplasmin ferroxidase catalytic site impairing copper-dependent iron storage",
        "Ceruloplasmin defects cause aceruloplasminemia, not classic HFE-associated hemochromatosis; HFE regulates hepcidin signaling."
      ]
    ],
    "shortestValidSolution": "HFE C282Y mutation -> liver senses falsely low iron -> inappropriately LOW hepcidin -> ferroportin remains active -> uncontrolled iron absorption.",
    "necessaryInference": "Map mutant HFE to failure of hepcidin upregulation, resulting in uninhibited basolateral ferroportin export.",
    "strongestDistractor": "Constitutive overproduction of hepcidin leading to accelerated degradation of enterocyte divalent metal transporter 1",
    "distractorExclusion": "Hepcidin is inappropriately suppressed (low) in hemochromatosis, which permits unrestricted ferroportin-mediated iron entry into the circulation.",
    "citation": "Pietrangelo A. Hereditary hemochromatosis: pathogenesis, diagnosis, and treatment. Gastroenterology. 2010;139(2):393-404. PMID: 20542038.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on the molecular pathogenesis of HFE hemochromatosis and hepcidin-ferroportin axis.",
      "distractorExclusionNotes": "Excluded high hepcidin (anemia of chronic disease) and DMT1 mechanisms based on suppressed hepcidin allowing ferroportin patency.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0848",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Gastrointestinal",
    "topic": "Wilson Disease ATP7B Copper-Transporting ATPase and Ceruloplasmin Failure",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old woman is brought to the clinic by her family due to progressive dysarthria, resting tremor, gait ataxia, and recent behavioral changes with emotional lability and decline in college performance. Physical examination reveals a 'wing-beating' tremor of outstretched arms and rigidity. Slit-lamp ophthalmologic examination demonstrates golden-brown granular pigment depositions in Descemet's membrane at the limbus of both corneas (Kayser-Fleischer rings). Liver enzymes show mild transaminitis (AST 92 U/L, ALT 78 U/L), and serum ceruloplasmin is markedly reduced at 6 mg/dL (normal 20-40 mg/dL). 24-hour urinary copper excretion is markedly elevated at 280 ug/day (normal < 40 ug/day). Which of the following cellular transport defects directly underlies the pathogenesis of this condition?",
    "choices": [
      [
        "Impaired P-type ATPase copper transport into the trans-Golgi network for ceruloplasmin incorporation and biliary excretion",
        "WILSON DISEASE (hepatolenticular degeneration) is an autosomal recessive disorder caused by mutations in the ATP7B GENE, which encodes a copper-transporting P-type ATPase located in the trans-Golgi network of hepatocytes. ATP7B has two critical physiological functions: (1) Translocating copper into the Golgi lumen for INCORPORATION INTO APOCERULOPLASMIN to form mature ceruloplasmin (unincorporated apoceruloplasmin is rapidly degraded, explaining low serum ceruloplasmin); and (2) Trafficking copper to vesicular lysosomes for EXCRETION INTO BILE (the primary route of copper elimination). Defective ATP7B leads to toxic copper accumulation in hepatocytes, spillover of free non-ceruloplasmin copper into blood, and secondary deposition in the basal ganglia (chorea, parkinsonism), Descemet's membrane (Kayser-Fleischer rings), and kidneys."
      ],
      [
        "Defective intestinal copper uptake across the enterocyte apical membrane via ATP7A transporters",
        "ATP7A deficiency causes Menkes disease (impaired intestinal copper absorption and systemic copper deficiency with brittle kinky hair), opposite to Wilson disease."
      ],
      [
        "Mutational failure of renal proximal tubular copper-hydrogen exchangers driving systemic reabsorption",
        "Renal copper reabsorption is not mediated by a copper-hydrogen exchanger; elevated urine copper in Wilson disease reflects massive overflow of unbound serum copper."
      ],
      [
        "Inability of lysosomal glucocerebrosidase to hydrolyze glucosylceramide within cerebral reticuloendothelial cells",
        "Glucocerebrosidase deficiency causes Gaucher disease (hepatosplenomegaly, bone crises, Gaucher cells), not copper toxicosis."
      ],
      [
        "Allosteric disruption of mitochondrial ferrochelatase preventing metal insertion into protoporphyrin IX",
        "Ferrochelatase inserts iron into protoporphyrin in heme synthesis; deficiency causes erythropoietic protoporphyria, not copper overload."
      ]
    ],
    "shortestValidSolution": "Wing-beating tremor + Kayser-Fleischer rings + low ceruloplasmin + high urine copper = ATP7B mutation (P-type ATPase, copper into bile/ceruloplasmin).",
    "necessaryInference": "Map ATP7B mutation to dual failure of copper excretion into bile and copper loading into apoceruloplasmin.",
    "strongestDistractor": "Defective intestinal copper uptake across the enterocyte apical membrane via ATP7A transporters",
    "distractorExclusion": "ATP7A defect causes Menkes disease (copper deficiency, kinky hair); ATP7B defect causes Wilson disease (copper overload, Kayser-Fleischer rings).",
    "citation": "Shribman S et al. Wilson's disease: update on pathogenesis, biomarkers and treatments. J Neurol Neurosurg Psychiatry. PMID: 34341141.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item distinguishing ATP7B (Wilson copper overload) from ATP7A (Menkes copper deficiency).",
      "distractorExclusionNotes": "Excluded Menkes ATP7A enterocyte transport and Gaucher storage defects based on ATP7B biliary transport failure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0849",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Menkes Disease ATP7A Copper Transporter and Lysyl Oxidase Cross-Linking",
    "provisionalDifficulty": 4,
    "stem": "A 3-month-old male infant presents with developmental regression, severe generalized hypotonia, failure to thrive, and intractable focal seizures. Physical examination reveals doughy, redundant, hyperextensible skin, pudgy cheeks, and sparse, coarse, brittle, steel-colored scalp hair that feels like wire wool. Light microscopy of the hair shaft reveals pili torti (180-degree twisting of hair shafts) and trichorrhexis nodosa. Radiographs demonstrate generalized osteopenia, flaring of the anterior ribs, and metaphyseal spurring. Angiography shows tortuous, elongated intracranial vessels. Serum copper is profoundly decreased at 12 ug/dL (normal 70-140 ug/dL), and serum ceruloplasmin is 4 mg/dL. Which of the following enzymes requires copper as an obligatory cofactor and directly accounts for the defective collagen cross-linking and vascular tortuosity seen in this X-linked disorder?",
    "choices": [
      [
        "Lysyl oxidase cross-linking tropocollagen and elastin molecules into stable fibrils",
        "MENKES DISEASE is an X-LINKED RECESSIVE disorder caused by mutations in the ATP7A GENE, which encodes a copper-transporting P-type ATPase responsible for basolateral copper export from intestinal enterocytes into the portal circulation. Defective ATP7A traps copper inside enterocytes, causing SEVERE SYSTEMIC COPPER DEFICIENCY. Copper is an essential cofactor for multiple critical metalloenzymes: (1) LYSYL OXIDASE (requires copper to deaminate lysine/hydroxylysine into reactive allysine for covalent cross-linking of collagen and elastin; deficiency causes lax skin, osteopenia, metaphyseal spurs, and arterial tortuosity/aneurysms); (2) CYTOCHROME C OXIDASE (complex IV; deficiency causes hypotonia and neurodegeneration); (3) TYROSINASE (deficiency causes hypopigmentation); and (4) SULFHYDRYL OXIDASE (deficiency causes pili torti / kinky brittle hair)."
      ],
      [
        "Prolyl 4-hydroxylase hydroxylating proline residues in the endoplasmic reticulum",
        "Prolyl hydroxylase requires vitamin C (ascorbate) and ferrous iron (Fe2+), not copper; deficiency causes scurvy."
      ],
      [
        "Lysyl hydroxylase hydroxylating lysine residues prior to triple helix assembly",
        "Lysyl hydroxylase requires vitamin C and Fe2+; mutations cause Ehlers-Danlos syndrome kyphoscoliotic type, not Menkes copper deficiency."
      ],
      [
        "Mitochondrial superoxide dismutase-2 catalyzing dismutation of superoxide to hydrogen peroxide",
        "Mitochondrial SOD2 requires manganese (Mn-SOD), whereas cytosolic SOD1 requires copper and zinc (Cu/Zn-SOD)."
      ],
      [
        "Extracellular procollagen peptidase cleaving terminal registration propeptides",
        "Procollagen peptidases cleave N- and C-terminal propeptides in the extracellular space; they are not copper-dependent enzymes."
      ]
    ],
    "shortestValidSolution": "Kinky brittle hair (pili torti) + arterial tortuosity + low copper = Menkes disease (ATP7A defect) -> deficient Lysyl Oxidase (copper-dependent cross-linking).",
    "necessaryInference": "Connect ATP7A copper absorption defect to lysyl oxidase failure and impaired collagen/elastin covalent cross-linking.",
    "strongestDistractor": "Prolyl 4-hydroxylase hydroxylating proline residues in the endoplasmic reticulum",
    "distractorExclusion": "Prolyl and lysyl hydroxylases require Vitamin C (ascorbate) and Fe2+; lysyl oxidase specifically requires copper.",
    "citation": "Kaler SG. ATP7A-related copper transport disorders. GeneReviews. 2003 (Updated 2016). PMID: 20301586.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/biochemistry item on Menkes disease, copper metalloenzymes, and lysyl oxidase collagen cross-linking.",
      "distractorExclusionNotes": "Excluded vitamin C-dependent hydroxylases (scurvy) and procollagen peptidases based on copper-dependent lysyl oxidase catalysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0850",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Alpha-1 Antitrypsin Deficiency PiZZ SERPINA1 Misfolding and PAS Diastase",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old non-smoking man presents with progressive exertional dyspnea, wheezing, and chronic cough. High-resolution chest CT demonstrates severe panacinar (panlobular) emphysema with marked destruction of alveolar septa, predominantly affecting the lower lung zones (bases). His family history is notable for his father, who died of end-stage liver cirrhosis at age 49 without a history of alcohol use. Liver biopsy in the patient reveals normal architecture but demonstrates numerous round, intracytoplasmic globules within periportal hepatocytes that stain intensely bright magenta with Periodic acid-Schiff (PAS) and remain completely resistant to digestion with diastase. Which of the following molecular mechanisms accounts for the hepatic pathology observed in this patient?",
    "choices": [
      [
        "Misfolding of mutant Z-variant protein in the endoplasmic reticulum with polymerization and failure of vesicular secretion",
        "ALPHA-1 ANTITRYPSIN (AAT) DEFICIENCY is an autosomal codominant disorder caused by mutations in the SERPINA1 gene. The most severe and clinically significant genotype is PiZZ (caused by a Glu342Lys missense mutation). The mutant Z-protein undergoes abnormal tertiary folding within the hepatocyte ENDOPLASMIC RETICULUM (ER), leading to spontaneous loop-sheet POLYMERIZATION into insoluble aggregate polymers. These polymers cannot be exported via the vesicular secretory pathway and accumulate within ER cisternae, appearing histologically as PAS-POSITIVE, DIASTASE-RESISTANT CYTOPLASMIC GLOBULES that trigger chronic hepatocyte apoptosis, hepatitis, and cirrhosis. Lack of circulating AAT permits unchecked neutrophil elastase activity, destroying lower-lobe elastica and causing panacinar emphysema."
      ],
      [
        "Enzymatic failure of lysosomal alpha-glucosidase leading to massive intralysosomal glycogen accumulation",
        "Intralysosomal glycogen accumulation is the mechanism of Pompe disease (GSD II), which is sensitive to diastase digestion (glycogen is digested by diastase)."
      ],
      [
        "Toxic accumulation of unesterified copper within hepatocellular mitochondrial membranes",
        "Copper accumulation occurs in Wilson disease (ATP7B mutation), which stains with rhodanine or rubeanic acid, not PAS-diastase globules."
      ],
      [
        "Deposition of insoluble beta-pleated fibrillar amyloid protein derived from misfolded serum amyloid A",
        "Serum amyloid A forms secondary (AA) amyloidosis, which stains with Congo red and shows apple-green birefringence under polarized light."
      ],
      [
        "Failure of hepatic canalicular bile salt export pump (BSEP) transport provoking progressive intrahepatic cholestasis",
        "BSEP deficiency causes progressive familial intrahepatic cholestasis (PFIC2), characterized by low GGT cholestasis without PAS globules."
      ]
    ],
    "shortestValidSolution": "Young non-smoker lower-lobe emphysema + liver disease + PAS-positive diastase-resistant globules = Alpha-1 antitrypsin (PiZZ) ER misfolding/polymerization.",
    "necessaryInference": "Identify PiZZ SERPINA1 ER protein misfolding and polymerization as the cause of PAS-positive diastase-resistant globules.",
    "strongestDistractor": "Enzymatic failure of lysosomal alpha-glucosidase leading to massive intralysosomal glycogen accumulation",
    "distractorExclusion": "Glycogen stains with PAS but is DIGESTED by diastase; AAT globules are glycoproteins that resist diastase digestion.",
    "citation": "Stoller JK, Aboussouan LS. A review of alpha1-antitrypsin deficiency. Am J Respir Crit Care Med. 2012;185(3):246-259. PMID: 21960536.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on SERPINA1 ER protein misfolding and PAS-diastase histochemistry.",
      "distractorExclusionNotes": "Excluded glycogen (diastase-sensitive) and Wilson disease based on diastase-resistant glycoprotein polymer accumulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
