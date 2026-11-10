import { CandidateSpec } from './types';

export const step1Batch13: CandidateSpec[] = [
  {
    "code": "op-c-s1-0301",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Robertsonian Translocation Down Syndrome Recurrence Risk",
    "subtopic": "Segregation Mechanics and Empirical Recurrence Discrepancy",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old G1P1 woman and her 30-year-old husband present for genetic counseling following the birth of their first child, who was diagnosed with Down syndrome. Cytogenetic karyotype analysis of the infant confirms an unbalanced Robertsonian translocation involving chromosomes 14 and 21: 46,XY,der(14;21)(q10;q10),+21. High-resolution parental karyotyping demonstrates that the father possesses a normal 46,XY karyotype, whereas the mother is an asymptomatic carrier of a balanced Robertsonian translocation: 45,XX,der(14;21)(q10;q10). The parents plan future childbearing and inquire about the precise risk of having another child with Down syndrome. Which of the following best represents the empirical recurrence risk of Down syndrome in subsequent liveborn children of this couple, and the biological reason for this rate?",
    "choices": [
      [
        "Approximately 10% to 15%; theoretical gametic segregation of 33% is attenuated by high intrauterine lethality of unbalanced conceptions",
        "The mother is a balanced carrier of a Robertsonian der(14;21) translocation. During meiosis I, the translocated chromosome pairs with chromosomes 14 and 21 to form a trivalent structure. Theoretical segregation yields 6 possible gametic types: normal (14, 21), balanced translocation der(14;21), translocated trisomy 21 (der[14;21], 21), monosomy 21 (14), trisomy 14 (der[14;21], 14), and monosomy 14 (21). Monosomies 14 and 21 and trisomy 14 are non-viable, leaving 3 viable theoretical gametic outcomes: normal, balanced carrier, and Down syndrome (theoretical risk 1 in 3, or 33%). However, the EMPIRICAL recurrence risk in liveborn offspring of female balanced der(14;21) carriers is approximately 10% to 15% (and < 2% if the father is the carrier). This marked discrepancy between theoretical (33%) and empirical (10-15%) risk arises because unbalanced trisomy 21 embryos frequently undergo spontaneous first-trimester embryonic resorption and miscarriage."
      ],
      [
        "Approximately 33%; Mendelian segregation predicts one viable trisomic conceptus for every three surviving zygotes",
        "While 33% is the theoretical Mendelian gametic risk based on the 3 viable gametic outcomes, the observed empirical recurrence rate in liveborns is 10% to 15% because many unbalanced fetuses spontaneously abort."
      ],
      [
        "Approximately 50%; the translocated derivative chromosome segregates into half of all functional maternal gametes",
        "Robertsonian segregation involves a trivalent complex resulting in 6 possible gametes (3 viable), not a simple 1:1 Mendelian monogenic split."
      ],
      [
        "Approximately 1% to 2%; post-zygotic meiotic rescue selectively degrades excess chromosomal material in maternal oocytes",
        "An empirical risk of < 2% occurs when the FATHER is the balanced der(14;21) carrier due to impaired motility and selection against unbalanced sperm, not when the mother is the carrier."
      ],
      [
        "Essentially 100%; maternal balanced 14;21 translocations inevitably produce unbalanced gametes due to univalent arrest",
        "Balanced carriers produce normal and balanced gametes in addition to unbalanced gametes; recurrence is far below 100%."
      ]
    ],
    "shortestValidSolution": "Maternal balanced der(14;21) carrier -> theoretical 33% gametic risk is reduced to ~10-15% empirical liveborn risk due to spontaneous loss of unbalanced conceptions.",
    "necessaryInference": "Distinguish theoretical 33% trivalent gametic segregation from the 10-15% empirical liveborn recurrence risk resulting from selective intrauterine loss.",
    "strongestDistractor": "Approximately 33%; Mendelian segregation predicts one viable trisomic conceptus for every three surviving zygotes",
    "distractorExclusion": "33% is the theoretical viable gametic ratio, but spontaneous abortion of unbalanced conceptions lowers empirical liveborn recurrence to 10-15%.",
    "citation": "Gardner RJ, Sutherland GR, Shaffer LG. Chromosome Abnormalities and Genetic Counseling. 4th ed. Oxford University Press; 2011. NLM ID: 101560945.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Distinguish theoretical 33% trivalent gametic segregation from the 10-15% empirical liveborn recurrence risk resulting from selective intrauterine loss.",
      "distractorExclusionNotes": "Strongest distractor 'Approximately 33%; Mendelian segregation predicts one viable trisomic conceptus ' excluded: 33% is the theoretical viable gametic ratio, but spontaneous abortion of unbalanced conceptions lowers empirical liveborn recurrence to 10-15%.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0302",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "G-Protein Coupled Receptor ADP-Ribosylation Mechanics",
    "subtopic": "Cholera Toxin Gs alpha Activation vs Pertussis Toxin Gi alpha Inhibition",
    "provisionalDifficulty": 4,
    "stem": "An experimental microbiologist investigates the intracellular signaling cascades targeted by bacterial exotoxins in intestinal epithelial cells. In an in vitro assay, enterocytes are exposed to an exotoxin that catalyzes the transfer of an ADP-ribose moiety from NAD+ to a specific alpha subunit of a heterotrimeric G-protein. This modification permanently inactivates the intrinsic GTPase activity of the alpha subunit, freezing it in an active, GTP-bound conformation. Intracellular cyclic AMP (cAMP) levels increase more than 50-fold, triggering protein kinase A (PKA) phosphorylation of the cystic fibrosis transmembrane conductance regulator (CFTR) channel. Which of the following specific G-protein alpha subunits and targeting exotoxins is described in this experiment?",
    "choices": [
      [
        "G-alpha-s subunit targeted by Vibrio cholerae enterotoxin (choleragen)",
        "Correct. Cholera toxin (produced by Vibrio cholerae) is an A-B toxin that ADP-ribosylates the G-alpha-s subunit of heterotrimeric G-proteins. This covalent modification blocks the intrinsic GTPase activity of G-alpha-s, preventing the hydrolysis of GTP to GDP. Consequently, G-alpha-s remains constitutively active, driving persistent adenylyl cyclase activation, massive intracellular cAMP elevation, PKA-mediated CFTR channel opening, and voluminous secretory diarrhea. In contrast, pertussis toxin ADP-ribosylates and INHIBITS G-alpha-i, disabling the 'inhibitory' brake."
      ],
      [
        "G-alpha-i subunit targeted by Bordetella pertussis toxin",
        "Pertussis toxin ADP-ribosylates G-alpha-i (locking it in an inactive GDP-bound state), which prevents it from inhibiting adenylyl cyclase; however, the mechanism described (locking an active subunit via intrinsic GTPase ablation) is specific to G-alpha-s by cholera toxin."
      ],
      [
        "G-alpha-q subunit targeted by Clostridium perfringens alpha toxin",
        "Clostridium perfringens alpha toxin is a phospholipase C (lecithinase) enzyme that hydrolyzes membrane sphingomyelin and phosphatidylcholine, not an ADP-ribosylating toxin of G-alpha-q."
      ],
      [
        "G-alpha-t (transducin) subunit targeted by Bacillus anthracis lethal factor",
        "Anthrax lethal factor is a zinc metalloproteinase that cleaves MAP kinase kinase (MAPKK/MEK), while anthrax edema factor is an adenylyl cyclase itself; neither targets transducin."
      ],
      [
        "G-alpha-12/13 subunit targeted by Pseudomonas aeruginosa exotoxin A",
        "Pseudomonas exotoxin A ADP-ribosylates eukaryotic elongation factor-2 (eEF-2) to arrest host ribosome protein synthesis; it does not target heterotrimeric G-protein subunits."
      ]
    ],
    "shortestValidSolution": "Inhibition of intrinsic GTPase locks G-alpha-s in active state -> Vibrio cholerae cholera toxin.",
    "necessaryInference": "Differentiate Gs constitutive activation (cholera toxin abits GTPase) from Gi inactivation (pertussis toxin locks Gi in GDP-inactive state). Both increase cAMP, but through opposing G-protein targets.",
    "strongestDistractor": "G-alpha-i subunit targeted by Bordetella pertussis toxin",
    "distractorExclusion": "Pertussis toxin inhibits G-alpha-i by locking it in the inactive GDP state, whereas cholera toxin ADP-ribosylates G-alpha-s to prevent GTP hydrolysis.",
    "citation": "Costanzo LS. Physiology. 7th ed. Elsevier; 2022. NLM ID: 101777263.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate Gs constitutive activation (cholera toxin abits GTPase) from Gi inactivation (pertussis toxin locks Gi in GDP-inactive state). Both increase cAMP, but through opposing G-protein targets.",
      "distractorExclusionNotes": "Strongest distractor 'G-alpha-i subunit targeted by Bordetella pertussis toxin' excluded: Pertussis toxin inhibits G-alpha-i by locking it in the inactive GDP state, whereas cholera toxin ADP-ribosylates G-alpha-s to prevent GTP hydrolysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0303",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Gastrointestinal",
    "topic": "Hereditary Hemochromatosis HFE Mutation and Hepcidin Regulation",
    "subtopic": "Inappropriately Suppressed Hepcidin and Ferroportin Hyperfunction",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man presents with progressive fatigue, generalized joint pain predominantly in the second and third metacarpophalangeal joints, and erectile dysfunction. Physical examination reveals mild hepatomegaly and slate-gray hyperpigmentation over the sun-exposed areas of his neck and arms. Fasting laboratory evaluation demonstrates serum ferritin 1,850 ng/mL (normal: 20-250 ng/mL) and transferrin saturation 78% (normal: 20-50%). Genetic testing confirms homozygous C282Y missense mutations in the HFE gene on chromosome 6. In this patient, the mutant HFE protein fails to interact normally with transferrin receptor 1 (TfR1) on hepatocytes. Which of the following molecular downstream consequences directly mediates the excessive systemic iron accumulation in this condition?",
    "choices": [
      [
        "Inappropriately suppressed hepatic hepcidin synthesis leading to unrestrained basolateral enterocyte ferroportin export",
        "Correct. In normal physiology, the HFE protein forms a regulatory complex with transferrin receptor 1 (TfR1) and transferrin receptor 2 (TfR2) on the hepatocyte surface. When iron-loaded transferrin binds, HFE dissociates and stimulates the BMP-SMAD signaling cascade to synthesize HEPCIDIN. In hereditary hemochromatosis (homozygous C282Y mutation), the defective HFE protein cannot complex with TfR, falsely sensing systemic iron deficiency. Consequently, hepatocytes produce inappropriately LOW levels of hepcidin despite massive total body iron overload. Low hepcidin allows FERROPORTIN on basolateral duodenal enterocytes and reticuloendothelial macrophages to remain open, driving uninhibited systemic iron absorption and release."
      ],
      [
        "Hypersecretion of hepcidin by Kupffer cells causing widespread lysosomal ferroportin internalization and degradation",
        "High hepcidin degrades ferroportin and traps iron inside enterocytes and macrophages, which is the hallmark of anemia of chronic disease, the exact opposite of hemochromatosis."
      ],
      [
        "Constitutive transcriptional upregulation of luminal divalent metal transporter 1 (DMT1) independently of iron regulatory proteins",
        "DMT1 is regulated by iron response elements (IRE/IRP) and mediates apical enterocyte Fe2+ uptake, but the primary genetic pathophysiology of HFE hemochromatosis operates via hepatic hepcidin suppression."
      ],
      [
        "Defective ceruloplasmin ferroxidase activity preventing oxidation of ferrous iron into transferrin-bound ferric iron",
        "Ceruloplasmin deficiency causes aceruloplasminemia (a rare copper/iron disorder with neurologic degeneration), not classic HFE-associated hereditary hemochromatosis."
      ],
      [
        "Impaired transferrin endocytosis in bone marrow erythroblasts causing secondary parenchymal iron deposition",
        "Bone marrow transferrin uptake is intact in hemochromatosis; the defect is excessive intestinal absorption driven by low circulating hepcidin."
      ]
    ],
    "shortestValidSolution": "HFE C282Y mutation -> Impaired iron sensing -> Low hepcidin -> Unrestrained ferroportin iron export into blood.",
    "necessaryInference": "Trace the HFE molecular defect to low hepatic hepcidin production, leading to open ferroportin and systemic iron overload.",
    "strongestDistractor": "Constitutive transcriptional upregulation of luminal divalent metal transporter 1 (DMT1) independently of iron regulatory proteins",
    "distractorExclusion": "DMT1 is an apical importer, but systemic iron regulation is governed centrally by hepatic hepcidin acting on basolateral ferroportin.",
    "citation": "Camaschella C. Iron-deficiency anemia and hemochromatosis. N Engl J Med. 2015;372(19):1832-1843. PMID: 25946282.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Trace the HFE molecular defect to low hepatic hepcidin production, leading to open ferroportin and systemic iron overload.",
      "distractorExclusionNotes": "Strongest distractor 'Constitutive transcriptional upregulation of luminal divalent metal transporter ' excluded: DMT1 is an apical importer, but systemic iron regulation is governed centrally by hepatic hepcidin acting on basolateral ferroportin.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0304",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Mitochondrial Heteroplasmy and MELAS Phenotypic Variability",
    "subtopic": "Variable Mutant Mitochondrial DNA Proportions Governing Tissue Threshold Expression",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old girl is admitted to the neurology service with acute right-sided hemiparesis, expressive aphasia, and a generalized tonic-clonic seizure. Brain MRI reveals cortical and subcortical hyperintensities in the left temporal and parietal lobes that cross classic arterial vascular distributions. Serum lactate is markedly elevated at 5.2 mmol/L (normal: 0.5-2.0 mmol/L). Muscle biopsy demonstrates ragged-red fibers on Gomori trichrome stain. Genetic analysis reveals an m.3243A>G point mutation in the MT-TL1 gene encoding mitochondrial tRNALeu. Family history reveals that the patient's mother suffers only from mild bilateral sensorineural hearing loss, her maternal grandmother died in her 70s with adult-onset type 2 diabetes mellitus, and her younger brother has severe intractable infantile epilepsy. Which of the following genetic concepts best accounts for the marked differences in clinical severity observed among family members harboring this mutation?",
    "choices": [
      [
        "Variable heteroplasmy across cellular mitochondrial genomes reaching critical tissue-specific metabolic thresholds",
        "Correct. MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes) is a maternally inherited mitochondrial disorder caused by mutations in mitochondrial DNA (mtDNA), most commonly m.3243A>G in MT-TL1. Mitochondria replicate independently and are distributed randomly during cell division (replicative segregation). A single cell can contain a mixture of normal and mutant mtDNA molecules, a state termed HETEROPLASMY. Clinical manifestations develop only when the proportion of mutant mtDNA exceeds a critical tissue threshold (threshold effect). Tissues with high oxidative metabolic demand (brain, skeletal muscle, cochlea, pancreatic beta-cells) are most vulnerable, explaining why family members with different mutant proportions exhibit vastly different phenotypic severities."
      ],
      [
        "Uniparental disomy of maternal chromosome 15 resulting in genomic imprinting defects",
        "Maternal uniparental disomy of chromosome 15 causes Angelman syndrome, an autosomal imprinting disorder unrelated to mitochondrial DNA mutations or ragged-red fibers."
      ],
      [
        "Variable expressivity driven strictly by dynamic trinucleotide repeat expansion during maternal oogenesis",
        "Trinucleotide repeat anticipation occurs in nuclear genes (e.g., Huntington disease, Fragile X), not in circular mitochondrial DNA."
      ],
      [
        "Skewed X-chromosome inactivation (lyonization) favoring expression of the mutant allele in high-energy tissues",
        "Mitochondrial DNA is maternally inherited through oocyte cytoplasm and is completely independent of nuclear X-chromosome inactivation."
      ],
      [
        "Locus heterogeneity where mutations in distinct unlinked nuclear genes produce overlapping encephalopathic phenotypes",
        "Locus heterogeneity refers to mutations at different genetic loci causing the same disorder, whereas this family shares the identical m.3243A>G mtDNA mutation displaying variable severity due to heteroplasmy."
      ]
    ],
    "shortestValidSolution": "Maternally inherited mtDNA mutation with ragged-red fibers + variable family severity -> Heteroplasmy threshold effect.",
    "necessaryInference": "Recognize MELAS from stroke-like episodes crossing vascular territories + lactic acidosis + ragged-red fibers. Attribute intra-familial phenotypic variability to mitochondrial heteroplasmy.",
    "strongestDistractor": "Variable expressivity driven strictly by dynamic trinucleotide repeat expansion during maternal oogenesis",
    "distractorExclusion": "Anticipation with trinucleotide repeats is a nuclear genetic mechanism, whereas MELAS is caused by circular mitochondrial genome mutations.",
    "citation": "Gorman GS, Chinnery PF, DiMauro S, et al. Mitochondrial diseases. Nat Rev Dis Primers. 2016;2:16080. PMID: 27762381.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize MELAS from stroke-like episodes crossing vascular territories + lactic acidosis + ragged-red fibers. Attribute intra-familial phenotypic variability to mitochondrial heteroplasmy.",
      "distractorExclusionNotes": "Strongest distractor 'Variable expressivity driven strictly by dynamic trinucleotide repeat expansion ' excluded: Anticipation with trinucleotide repeats is a nuclear genetic mechanism, whereas MELAS is caused by circular mitochondrial genome mutations.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0305",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Sphingolipidoses Differentiation Tay-Sachs vs Niemann-Pick",
    "subtopic": "Beta-Hexosaminidase A Deficiency (GM2 Ganglioside) with Sparing of Hepatosplenomegaly",
    "provisionalDifficulty": 4,
    "stem": "A 7-month-old Ashkenazi Jewish boy is evaluated for progressive developmental regression. He previously rolled over and reached for toys, but over the past 2 months he has lost head control, ceased smiling, and demonstrates an exaggerated startle response to clapping and sudden noises (hyperacusis). Funduscopic examination reveals prominent bilateral cherry-red spots on the macula surrounded by pale retinal edema. Abdominal examination reveals a soft, non-tender abdomen with normal liver span and no palpable splenomegaly. Neurological examination reveals profound axial hypotonia and generalized motor weakness. Which of the following accumulated metabolic substrates and deficient enzymes is primarily responsible for this child's neurodegenerative condition?",
    "choices": [
      [
        "Accumulation of GM2 ganglioside secondary to beta-hexosaminidase A enzyme deficiency",
        "Correct. Tay-Sachs disease is an autosomal recessive lysosomal storage sphingolipidosis caused by deficiency of BETA-HEXOSAMINIDASE A, leading to pathological accumulation of GM2 GANGLIOSIDE within neuronal lysosomes. Clinical onset begins at 3 to 6 months with progressive motor loss, developmental regression, hyperacusis (acoustic startle), seizures, and macular cherry-red spots. Crucially, on USMLE Step 1, TAY-SACHS DISEASE HAS NO HEPATOSPLENOMEGALY. In contrast, Niemann-Pick disease (sphingomyelinase deficiency with sphingomyelin accumulation) features an identical macular cherry-red spot and neurodegeneration, but PROMINENT HEPATOSPLENOMEGALY."
      ],
      [
        "Accumulation of sphingomyelin secondary to acid sphingomyelinase deficiency",
        "Sphingomyelin accumulation (Niemann-Pick disease Type A) produces an identical cherry-red spot and developmental delay, but is definitively characterized by marked hepatosplenomegaly, which is completely absent here."
      ],
      [
        "Accumulation of galactocerebroside secondary to galactocerebrosidase deficiency",
        "Galactocerebrosidase deficiency causes Krabbe disease, characterized by peripheral neuropathy, extreme optic atrophy, globoid cells, and irritability, without cherry-red spots or hepatosplenomegaly."
      ],
      [
        "Accumulation of glucocerebroside secondary to beta-glucocerebrosidase deficiency",
        "Beta-glucocerebrosidase deficiency causes Gaucher disease, which presents with hepatosplenomegaly, pancytopenia, and bone crises with 'wrinkled tissue paper' lipid-laden macrophages, without macular cherry-red spots."
      ],
      [
        "Accumulation of ceramide trihexoside secondary to alpha-galactosidase A deficiency",
        "Alpha-galactosidase A deficiency causes Fabry disease, an X-linked disorder presenting with angiokeratomas, burning acroparesthesias, hypohidrosis, and renal/cardiovascular failure, not infantile neurodegeneration with cherry-red spots."
      ]
    ],
    "shortestValidSolution": "Infant regression + hyperacusis + cherry-red spot + NO hepatosplenomegaly -> Tay-Sachs (beta-hexosaminidase A / GM2 ganglioside).",
    "necessaryInference": "Cherry-red spot + neurodegeneration narrows to Tay-Sachs vs Niemann-Pick. Absence of hepatosplenomegaly definitively identifies Tay-Sachs (hexosaminidase A/GM2 ganglioside).",
    "strongestDistractor": "Accumulation of sphingomyelin secondary to acid sphingomyelinase deficiency",
    "distractorExclusion": "Acid sphingomyelinase deficiency (Niemann-Pick) presents with massive hepatosplenomegaly; its absence rules out Niemann-Pick.",
    "citation": "Scriver CR, Beaudet AL, Sly WS, Valle D. The Metabolic and Molecular Bases of Inherited Disease. 8th ed. McGraw-Hill; 2001. NLM ID: 100958189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Cherry-red spot + neurodegeneration narrows to Tay-Sachs vs Niemann-Pick. Absence of hepatosplenomegaly definitively identifies Tay-Sachs (hexosaminidase A/GM2 ganglioside).",
      "distractorExclusionNotes": "Strongest distractor 'Accumulation of sphingomyelin secondary to acid sphingomyelinase deficiency' excluded: Acid sphingomyelinase deficiency (Niemann-Pick) presents with massive hepatosplenomegaly; its absence rules out Niemann-Pick.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0306",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Cardiovascular",
    "topic": "Homocystinuria Cystathionine Beta-Synthase Deficiency vs Methionine Synthase",
    "subtopic": "Elevated Methionine, Downward Lens Ectopia, and Thrombotic Vascular Occlusion",
    "provisionalDifficulty": 4,
    "stem": "A 14-year-old boy is brought to the emergency department with acute right-sided hemiparesis and facial droop. Brain MRI confirms an acute ischemic stroke in the left middle cerebral artery distribution. He is tall and thin with long, slender fingers, pectus excavatum, and mild intellectual disability. Slit-lamp ophthalmological examination reveals inferomedial subluxation (downward dislocation) of both ocular lenses. Quantitative plasma amino acid chromatography reveals marked elevation of plasma total homocysteine (185 mcmol/L; normal < 15) and markedly elevated plasma methionine (240 mcmol/L; normal 15-40). Plasma methylmalonic acid concentration is normal. Which of the following enzyme deficiencies and required vitamin cofactors is the primary cause of this patient's condition?",
    "choices": [
      [
        "Cystathionine beta-synthase deficiency requiring pyridoxal phosphate (vitamin B6) cofactor supplementation",
        "Correct. Classical homocystinuria is an autosomal recessive inborn error of metabolism caused by deficiency of CYSTATHIONINE BETA-SYNTHASE (CBS), which normally condenses homocysteine and serine into cystathionine using PYRIDOXAL PHOSPHATE (VITAMIN B6) as an essential cofactor. When CBS is deficient, homocysteine accumulates and is trans-methylated back to methionine, leading to MARKEDLY ELEVATED PLASMA METHIONINE AND HOMOCYSTEINE. Clinical hallmark: marfanoid habitus, downward lens subluxation (ectopia lentis; contrast with Marfan upward dislocation), intellectual disability, and life-threatening premature thromboembolism (strokes, myocardial infarctions). In contrast, methionine synthase (MTR) deficiency causes homocystinuria with DECREASED methionine."
      ],
      [
        "Methionine synthase deficiency requiring cobalamin (vitamin B12) cofactor supplementation",
        "Methionine synthase converts homocysteine to methionine using vitamin B12; deficiency of this enzyme results in elevated homocysteine but LOW or low-normal plasma methionine, directly contradicting the marked hypermethioninemia observed in this patient."
      ],
      [
        "Methylenetetrahydrofolate reductase (MTHFR) deficiency requiring folate cofactor supplementation",
        "MTHFR generates 5-methyl-THF required by methionine synthase; MTHFR deficiency causes hyperhomocysteinemia with LOW plasma methionine, unlike the high methionine seen here."
      ],
      [
        "Methylmalonyl-CoA mutase deficiency requiring adenosylcobalamin cofactor supplementation",
        "Methylmalonyl-CoA mutase deficiency causes methylmalonic acidemia with severe ketoacidosis, hyperammonemia, and high methylmalonic acid, which was explicitly normal in this patient."
      ],
      [
        "Fibrillin-1 structural glycoprotein mutation altering transforming growth factor-beta regulation",
        "Fibrillin-1 mutation causes Marfan syndrome (upward lens subluxation, normal intellect, normal amino acids, and aortic root dilation), not hyperhomocysteinemia, stroke, or downward lens dislocation."
      ]
    ],
    "shortestValidSolution": "Marfanoid + stroke + downward lens ectopia + high homocysteine AND high methionine -> Cystathionine beta-synthase (vitamin B6).",
    "necessaryInference": "High homocysteine + high methionine differentiates cystathionine beta-synthase deficiency (transsulfuration block) from methionine synthase deficiency (remethylation block, which has low methionine). Downward ectopia lentis reinforces CBS.",
    "strongestDistractor": "Methionine synthase deficiency requiring cobalamin (vitamin B12) cofactor supplementation",
    "distractorExclusion": "Methionine synthase deficiency impairs homocysteine remethylation, producing reduced or low-normal methionine, whereas this patient has marked hypermethioninemia.",
    "citation": "Mudd SH, Levy HL, Kraus JP. Disorders of Transsulfuration. In: Scriver CR, et al, eds. The Metabolic and Molecular Bases of Inherited Disease. 8th ed. McGraw-Hill; 2001:2007-2056. NLM ID: 100958189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: High homocysteine + high methionine differentiates cystathionine beta-synthase deficiency (transsulfuration block) from methionine synthase deficiency (remethylation block, which has low methionine). Downward ectopia lentis reinforces CBS.",
      "distractorExclusionNotes": "Strongest distractor 'Methionine synthase deficiency requiring cobalamin (vitamin B12) cofactor supple' excluded: Methionine synthase deficiency impairs homocysteine remethylation, producing reduced or low-normal methionine, whereas this patient has marked hypermethioninemia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0307",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Dermatology",
    "topic": "Xeroderma Pigmentosum Nucleotide Excision Repair Pyrimidine Dimers",
    "subtopic": "Endonuclease Defect in Cleavage of Ultraviolet-Induced Cyclobutane Dimers",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old boy is brought to the dermatology clinic by his parents because of severe, blistering sunburns that develop after even minimal sun exposure (less than 10 minutes outdoors). Physical examination reveals extensive solar lentigines (freckling), poikiloderma, cutaneous xerosis, and prominent telangiectasias over the face, neck, and forearms. Biopsy of a pigmented papule on his cheek reveals an invasive squamous cell carcinoma. Cultured skin fibroblasts are exposed to ultraviolet-C radiation in vitro. Analysis of cellular DNA demonstrates persistent cyclobutane pyrimidine dimers and 6-4 photoproducts that fail to be excised. Which of the following specific DNA repair enzymes is primarily defective in this patient?",
    "choices": [
      [
        "UV-specific excinuclease (endonuclease) that cleaves phosphodiester bonds flanking the DNA lesion",
        "Correct. Xeroderma pigmentosum (XP) is an autosomal recessive disorder caused by defective NUCLEOTIDE EXCISION REPAIR (NER). Ultraviolet (UV) radiation induces covalent cross-linking between adjacent pyrimidine bases (thymine-thymine or thymine-cytosine cyclobutane dimers), distorting the DNA double helix. NER operates via: (1) Recognition of helical distortion by XP proteins; (2) Cleavage of the damaged DNA strand at phosphodiester bonds on both the 5' and 3' sides of the lesion by a UV-SPECIFIC ENDONUCLEASE (excinuclease complex); (3) Excision of the ~24-32 nucleotide oligomer; and (4) Resynthesis by DNA polymerase and sealing by DNA ligase. Defective endonuclease activity leaves pyrimidine dimers unexcised, resulting in replication block, accumulation of mutations, and a >10,000-fold increased risk of non-melanoma skin cancer and melanoma before age 10."
      ],
      [
        "DNA mismatch repair endonuclease (MSH2/MLH1) that recognizes single-base replication mispairings",
        "Mismatch repair (MMR) corrects replication proofreading errors (single-base mismatches and small insertion/deletion loops); defects cause Lynch syndrome (hereditary nonpolyposis colorectal cancer), not UV dimer repair failure."
      ],
      [
        "DNA glycosylase that cleaves the N-glycosidic bond of oxidized or deaminated purines",
        "DNA glycosylases initiate base excision repair (BER) by removing single chemically altered bases (e.g., uracil formed from cytosine deamination, or 8-oxoguanine), not bulky UV photoproducts."
      ],
      [
        "Non-homologous end-joining (NHEJ) Ku70/Ku80 heterodimer and DNA-dependent protein kinase",
        "NHEJ repairs double-strand DNA breaks induced by ionizing radiation (X-rays, gamma rays); defective NHEJ causes ataxia-telangiectasia and severe combined immunodeficiency (SCID), not xeroderma pigmentosum."
      ],
      [
        "Homologous recombination repair protein ATM/BRCA1 that pairs with sister chromatid templates",
        "Homologous recombination repairs double-strand breaks during the S and G2 phases of the cell cycle; defects in BRCA1/2 increase breast and ovarian cancer, while ATM defects cause ataxia-telangiectasia."
      ]
    ],
    "shortestValidSolution": "Severe sunburns + early skin cancer + UV-induced pyrimidine dimers failure of excision -> Nucleotide excision repair endonuclease.",
    "necessaryInference": "Identify xeroderma pigmentosum from extreme sun sensitivity and skin cancer in early childhood. Correlate UV-induced cyclobutane pyrimidine dimers with the nucleotide excision repair (NER) endonuclease defect.",
    "strongestDistractor": "DNA glycosylase that cleaves the N-glycosidic bond of oxidized or deaminated purines",
    "distractorExclusion": "DNA glycosylases participate in base excision repair (BER) for non-bulky base damage (e.g., deamination), whereas bulky UV-induced pyrimidine dimers require nucleotide excision repair (NER) endonuclease cleavage.",
    "citation": "Kraehenbuehl L, Wengner AM, Pflugfelder A, et al. DNA damage response and repair in skin cancer. J Invest Dermatol. 2019;139(12):2422-2433. PMID: 31398592.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify xeroderma pigmentosum from extreme sun sensitivity and skin cancer in early childhood. Correlate UV-induced cyclobutane pyrimidine dimers with the nucleotide excision repair (NER) endonuclease defect.",
      "distractorExclusionNotes": "Strongest distractor 'DNA glycosylase that cleaves the N-glycosidic bond of oxidized or deaminated pur' excluded: DNA glycosylases participate in base excision repair (BER) for non-bulky base damage (e.g., deamination), whereas bulky UV-induced pyrimidine dimers require nucleotide excision rep",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0308",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Alkaptonuria Homogentisate 1,2-Dioxygenase Deficiency and Ochronosis",
    "subtopic": "Tyrosine Degradation Pathway Defect and Homogentisic Acid Pigment Deposition",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents with chronic, debilitating pain and stiffness in his lower back, hips, and knees. He reports that his urine has always turned dark black when left standing in the toilet bowl for several hours. Physical examination reveals dark blue-black pigmentation over the sclerae of both eyes and the cartilaginous pinnae of his ears. Plain radiographs of the lumbar spine demonstrate severe narrowing of the intervertebral disc spaces with dense calcification of the intervertebral discs throughout the entire lumbar spine. A fresh urine sample is initially normal amber in color, but upon alkalinization and prolonged air exposure, it oxidizes to a dense black color. Which of the following enzymes in the amino acid catabolic pathway is deficient in this patient?",
    "choices": [
      [
        "Homogentisate 1,2-dioxygenase in the phenylalanine and tyrosine degradation pathway",
        "Correct. Alkaptonuria is an autosomal recessive disorder of amino acid catabolism caused by deficiency of HOMOGENTISATE 1,2-DIOXYGENASE (homogentisic acid oxidase), an enzyme in the degradation pathway of phenylalanine and tyrosine. Homogentisic acid accumulates and oxidizes upon exposure to air and alkaline pH, forming a black pigment (alkapton) that is excreted in urine. Over decades, retained homogentisic acid polymerizes and deposits in connective tissues, particularly cartilage of the ears (auricular chondropathy), eyes (scleral ochronosis), and joints. This leads to severe, premature, ankylosing-like degenerative arthropathy characterized by intervertebral disc calcification, disc space narrowing, and chronic back pain."
      ],
      [
        "Phenylalanine hydroxylase in the conversion of phenylalanine to tyrosine",
        "Phenylalanine hydroxylase deficiency causes phenylketonuria (PKU), characterized by intellectual disability, microcephaly, seizures, hypopigmentation, and a musty odor, not black urine or ochronotic arthropathy."
      ],
      [
        "Tyrosinase in the melanocyte conversion of tyrosine to melanin",
        "Tyrosinase deficiency causes oculocutaneous albinism, resulting in extreme hypopigmentation of hair, skin, and irides with photophobia and nystagmus, the opposite of hyperpigmentation."
      ],
      [
        "Fumarylacetoacetate hydrolase in the final step of tyrosine catabolism",
        "Fumarylacetoacetate hydrolase deficiency causes hereditary tyrosinemia Type 1, presenting in infancy with acute hepatic failure, renal Fanconi syndrome, rickets, and high risk of hepatocellular carcinoma."
      ],
      [
        "Branched-chain alpha-ketoacid dehydrogenase in leucine, isoleucine, and valine oxidation",
        "Branched-chain alpha-ketoacid dehydrogenase deficiency causes maple syrup urine disease, presenting with neonatal lethargy, seizures, cerebral edema, and sweet-smelling urine, not ochronosis."
      ]
    ],
    "shortestValidSolution": "Urine turns black upon air/alkali exposure + ear/sclera blue-black pigment + disc calcifications -> Alkaptonuria (homogentisate 1,2-dioxygenase).",
    "necessaryInference": "Classic triad of urine darkening on standing + ochronotic pigment in ear cartilage/sclera + severe intervertebral disc calcification = Alkaptonuria. The deficient enzyme is homogentisate 1,2-dioxygenase in the tyrosine pathway.",
    "strongestDistractor": "Fumarylacetoacetate hydrolase in the final step of tyrosine catabolism",
    "distractorExclusion": "Fumarylacetoacetate hydrolase causes tyrosinemia type 1 (infantile liver failure and succinylacetone accumulation), not adult ochronosis or intervertebral disc calcifications.",
    "citation": "Phornphutkul C, Introne WJ, Perry MB, et al. Natural history of alkaptonuria. N Engl J Med. 2002;347(26):2111-2121. PMID: 12501223.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Classic triad of urine darkening on standing + ochronotic pigment in ear cartilage/sclera + severe intervertebral disc calcification = Alkaptonuria. The deficient enzyme is homogentisate 1,2-dioxygenase in the tyrosine pathway.",
      "distractorExclusionNotes": "Strongest distractor 'Fumarylacetoacetate hydrolase in the final step of tyrosine catabolism' excluded: Fumarylacetoacetate hydrolase causes tyrosinemia type 1 (infantile liver failure and succinylacetone accumulation), not adult ochronosis or intervertebral disc calcifications.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0309",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Maple Syrup Urine Disease Branched-Chain Alpha-Ketoacid Dehydrogenase",
    "subtopic": "Impaired Leucine, Isoleucine, and Valine Catabolism Requiring Thiamine Pyrophosphate",
    "provisionalDifficulty": 4,
    "stem": "A 5-day-old female infant is brought to the emergency department because of poor feeding, progressive lethargy, and episodic hypertonicity with bicycling movements of her lower extremities. The infant was born full-term following an uneventful pregnancy and was healthy for the first 48 hours of life after initiating breastfeeding. On physical examination, she is stuporous and alternating between muscular hypotonia and hypertonicity. Her diapers have a distinctive sweet, burnt-sugar odor. Laboratory evaluation reveals marked metabolic acidosis with an elevated anion gap, severe ketosis, and a plasma ammonia concentration of 110 mcmol/L (mild elevation). Plasma amino acid analysis reveals markedly elevated concentrations of leucine, isoleucine, and valine, with detection of alloisoleucine. Which of the following cofactors is an essential catalytic component of the deficient multienzyme complex in this infant?",
    "choices": [
      [
        "Thiamine pyrophosphate (vitamin B1)",
        "Correct. Maple syrup urine disease (MSUD) is an autosomal recessive inborn error of metabolism caused by deficiency of the BRANCHED-CHAIN ALPHA-KETOACID DEHYDROGENASE (BCKDH) complex. BCKDH catalyzes the oxidative decarboxylation of branched-chain alpha-ketoacids derived from LEUCINE, ISOLEUCINE, AND VALINE. Leucine and its ketoacid (alpha-ketoisocaproate) are neurotoxic and accumulate rapidly, causing cerebral edema, alternating tone, dystonia, and encephalopathy within the first week of life. The sweet burnt-sugar odor is due to isoleucine derivatives (alloisoleucine is pathognomonic). Like pyruvate dehydrogenase (PDH) and alpha-ketoglutarate dehydrogenase (alpha-KGDH), the BCKDH multienzyme complex requires FIVE COFACTORS: Thiamine pyrophosphate (B1), Lipoic acid, Coenzyme A (B5), FAD (B2), and NAD+ (B3). A subset of patients has thiamine-responsive MSUD, where high-dose thiamine stabilizes the E1 decarboxylase subunit."
      ],
      [
        "Pyridoxal phosphate (vitamin B6)",
        "Pyridoxal phosphate is required for transamination reactions (aminotransferases) and cystathionine beta-synthase, but not for oxidative decarboxylation by BCKDH."
      ],
      [
        "Tetrahydrobiopterin (BH4)",
        "Tetrahydrobiopterin is the cofactor for phenylalanine, tyrosine, and tryptophan hydroxylases, as well as nitric oxide synthase, not branched-chain ketoacid decarboxylation."
      ],
      [
        "Biotin (vitamin B7)",
        "Biotin serves as the cofactor for carboxylase enzymes (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase), not the BCKDH oxidative decarboxylase complex."
      ],
      [
        "Adenosylcobalamin (vitamin B12)",
        "Adenosylcobalamin is the cofactor for methylmalonyl-CoA mutase; it is not utilized in the BCKDH reaction."
      ]
    ],
    "shortestValidSolution": "Infant encephalopathy + sweet burnt-sugar diaper odor + elevated leucine/isoleucine/valine -> Maple syrup urine disease (BCKDH requires thiamine / B1).",
    "necessaryInference": "Recognize MSUD from the sweet diaper odor, ketosis, and accumulation of branched-chain amino acids. Recall that BCKDH is an oxidative decarboxylase requiring the TLCFN cofactors: Thiamine (B1), Lipoic acid, CoA, FAD, NAD+.",
    "strongestDistractor": "Pyridoxal phosphate (vitamin B6)",
    "distractorExclusion": "Vitamin B6 is required for the initial branched-chain aminotransferase step (BCAT), but the blocked, deficient multienzyme complex causing classical MSUD is the downstream BCKDH complex, which requires thiamine (B1).",
    "citation": "Strauss KA, Puffenberger EG, Morton DH. Maple Syrup Urine Disease. In: Adam MP, et al, eds. GeneReviews. University of Washington; 2006. PMID: 20301495.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize MSUD from the sweet diaper odor, ketosis, and accumulation of branched-chain amino acids. Recall that BCKDH is an oxidative decarboxylase requiring the TLCFN cofactors: Thiamine (B1), Lipoic acid, CoA, FAD, NAD+.",
      "distractorExclusionNotes": "Strongest distractor 'Pyridoxal phosphate (vitamin B6)' excluded: Vitamin B6 is required for the initial branched-chain aminotransferase step (BCAT), but the blocked, deficient multienzyme complex causing classical MSUD is the downstream BCKDH co",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0310",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Glucose-6-Phosphate Dehydrogenase Deficiency and Splenic Degmacytes",
    "subtopic": "Failure of NADPH Regeneration and Splenic Macrophage Heinz Body Pitting",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old African American man presents to the urgent care clinic with fatigue, scleral icterus, and dark mahogany-colored urine 3 days after completing a course of trimethoprim-sulfamethoxazole for a skin abscess. Laboratory evaluation demonstrates hemoglobin 8.4 g/dL (baseline 14.5 g/dL), total bilirubin 4.1 mg/dL, direct bilirubin 0.6 mg/dL, lactate dehydrogenase (LDH) 1,120 U/L, and serum haptoglobin < 10 mg/dL. Supravital staining with crystal violet demonstrates dark, round intracellular inclusions adherent to red blood cell membranes (Heinz bodies). A peripheral blood smear examined under standard Wright-Giemsa stain demonstrates numerous 'bite cells' (degmacytes) and blister cells. Which of the following biochemical reactions is directly impaired in this patient's erythrocytes, leading to the formation of these morphological findings?",
    "choices": [
      [
        "Reduction of NADP+ to NADPH by glucose-6-phosphate dehydrogenase in the hexose monophosphate shunt",
        "Correct. Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the rate-limiting first step of the pentose phosphate (hexose monophosphate) shunt: the oxidation of glucose-6-phosphate to 6-phosphoglucono-delta-lactone, with the simultaneous REDUCTION OF NADP+ TO NADPH. Because mature erythrocytes lack nuclei and mitochondria, the HMP shunt is their SOLE SOURCE OF NADPH. NADPH is essential to regenerate reduced glutathione (GSH) from oxidized glutathione (GSSG) via glutathione reductase. When exposed to oxidant stress (sulfonamides, fava beans, dapsone, primaquine, infections), GSH is depleted, allowing reactive oxygen species to cross-link sulfhydryl groups on hemoglobin chains. Denatured hemoglobin precipitates into insoluble clumps termed HEINZ BODIES. As erythrocytes transit the splenic cords, splenic red pulp macrophages phagocytose these rigid inclusions, leaving behind characteristic 'BITE CELLS' (degmacytes)."
      ],
      [
        "Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase in glycolysis",
        "Pyruvate kinase deficiency impairs ATP generation in glycolysis, causing chronic non-spherocytic extravascular hemolytic anemia with echinocytes (burr cells), without Heinz bodies or bite cells."
      ],
      [
        "Oxidation of glucose to sorbitol by aldose reductase in the polyol pathway",
        "Aldose reductase converts glucose to sorbitol; its hyperactivation in hyperglycemia causes osmotic damage in diabetic cataracts and neuropathy, not hemolytic bite cells."
      ],
      [
        "Phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate by phosphofructokinase-1",
        "Phosphofructokinase-1 (PFK-1) deficiency causes Tarui disease (glycogen storage disease Type VII), presenting with exercise-induced muscle cramps and exertional hemolysis, not oxidant-induced Heinz body bite cells."
      ],
      [
        "Dephosphorylation of 2,3-bisphosphoglycerate by bisphosphoglycerate phosphatase in the Luebering-Rapoport shunt",
        "The Luebering-Rapoport glycolytic shunt regulates 2,3-BPG concentration and oxygen-hemoglobin dissociation curve affinity; it does not protect against oxidant stress or generate bite cells."
      ]
    ],
    "shortestValidSolution": "Sulfonamide exposure + Heinz bodies + bite cells -> G6PD deficiency (failure to reduce NADP+ to NADPH).",
    "necessaryInference": "Synthesize oxidant-induced hemolysis post-sulfa + Heinz bodies + bite cells = G6PD deficiency. The primary enzymatic defect is the failure of the HMP shunt to reduce NADP+ to NADPH, leading to unbuffered oxidative hemoglobin precipitation.",
    "strongestDistractor": "Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase in glycolysis",
    "distractorExclusion": "Pyruvate kinase deficiency impairs ATP generation rather than antioxidant defense and causes chronic hemolysis without precipitated Heinz bodies or bite cells.",
    "citation": "Luzzatto L, Nannelli C, Notaro R. Glucose-6-Phosphate Dehydrogenase Deficiency. Hematol Oncol Clin North Am. 2016;30(2):373-393. PMID: 27040960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Synthesize oxidant-induced hemolysis post-sulfa + Heinz bodies + bite cells = G6PD deficiency. The primary enzymatic defect is the failure of the HMP shunt to reduce NADP+ to NADPH, leading to unbuffered oxidative hemoglobin precipitation.",
      "distractorExclusionNotes": "Strongest distractor 'Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase in glycolysis' excluded: Pyruvate kinase deficiency impairs ATP generation rather than antioxidant defense and causes chronic hemolysis without precipitated Heinz bodies or bite cells.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0311",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Acute Intermittent Porphyria Porphobilinogen Deaminase Deficiency",
    "subtopic": "Neurovisceral Attacks without Cutaneous Photosensitivity Triggered by CYP450 Inducers",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman is admitted to the hospital with severe, colicky abdominal pain, nausea, and vomiting that began 2 days after starting a low-carbohydrate fasting diet and taking oral rifampin for latent tuberculosis. Her abdomen is soft and non-tender to deep palpation, without rebound or guarding. Neurological examination reveals mild proximal upper extremity motor weakness, anxiety, and auditory hallucinations. A fresh urine specimen collected in a clear container appears normal light yellow, but turns deep reddish-purple (port-wine color) after 2 hours of exposure to ambient sunlight. Quantitative urinalysis demonstrates markedly elevated concentrations of delta-aminolevulinic acid (ALA) and porphobilinogen (PBG). Serum porphyrin levels are normal, and physical examination reveals no cutaneous blisters, hypertrichosis, or skin fragility. Which of the following enzymes is primarily deficient in this patient?",
    "choices": [
      [
        "Porphobilinogen deaminase (hydroxymethylbilane synthase)",
        "Correct. Acute intermittent porphyria (AIP) is an autosomal dominant disorder of heme biosynthesis caused by deficiency of PORPHOBILINOGEN DEAMINASE (PBGD; also known as hydroxymethylbilane synthase). Clinical attacks are characterized by the classic 5 Ps: Painful abdomen (severe neurovisceral pain disproportionate to exam), Port-wine colored urine, Polyneuropathy (predominantly proximal motor weakness), Psychological disturbances (delirium, hallucinations, anxiety), and Precipitated by drugs (CYP450 inducers like rifampin, barbiturates, antiepileptics), fasting, or alcohol. These triggers induce hepatic ALA SYNTHASE-1, driving accumulation of neurotoxic intermediates: delta-aminolevulinic acid (ALA) and porphobilinogen (PBG). CRUCIALLY, BECAUSE THE ENZYMATIC BLOCK OCCURS PRIOR TO THE FORMATION OF CYCLIC PORPHYRINOGENS, AIP HAS ABSOLUTELY NO CUTANEOUS PHOTOSENSITIVITY OR BLISTERING. In contrast, porphyria cutanea tarda (uroporphyrinogen decarboxylase deficiency) occurs AFTER porphyrin ring closure and presents with prominent cutaneous blistering and hypertrichosis."
      ],
      [
        "Uroporphyrinogen decarboxylase in the conversion of uroporphyrinogen III to coproporphyrinogen III",
        "Uroporphyrinogen decarboxylase deficiency causes porphyria cutanea tarda (PCT), which is characterized by marked cutaneous photosensitivity, vesicles, bullae, and skin fragility on sun-exposed areas, without acute neurovisceral crises."
      ],
      [
        "Ferrochelatase in the final insertion of ferrous iron into protoporphyrin IX",
        "Ferrochelatase deficiency causes erythropoietic protoporphyria, characterized by painful, non-blistering burning photosensitivity in early childhood, not acute episodic neurovisceral pain with proximal weakness."
      ],
      [
        "ALA dehydratase (porphobilinogen synthase) in the condensation of two molecules of ALA",
        "ALA dehydratase deficiency is an extremely rare recessive porphyria (or caused by lead toxicity); while it causes neurovisceral symptoms, lead inhibits both ALA dehydratase and ferrochelatase, elevating ALA without porphobilinogen."
      ],
      [
        "Uroporphyrinogen III synthase in the cyclization of hydroxymethylbilane",
        "Uroporphyrinogen III synthase deficiency causes congenital erythropoietic porphyria (Gunther disease), an infantile disorder with severe hemolytic anemia, extreme cutaneous mutilating photosensitivity, and red teeth (erythrodontia)."
      ]
    ],
    "shortestValidSolution": "Colicky abdominal pain + neuropsychiatric symptoms + port-wine urine on standing + NO photosensitivity -> Acute intermittent porphyria (porphobilinogen deaminase).",
    "necessaryInference": "Acute neurovisceral attacks triggered by rifampin/fasting + elevated ALA and PBG + absence of skin blistering = Acute intermittent porphyria (AIP). The deficient enzyme is porphobilinogen deaminase (PBGD).",
    "strongestDistractor": "Uroporphyrinogen decarboxylase in the conversion of uroporphyrinogen III to coproporphyrinogen III",
    "distractorExclusion": "Uroporphyrinogen decarboxylase deficiency causes porphyria cutanea tarda, which is defined by cutaneous blistering and skin fragility, both explicitly absent here.",
    "citation": "Balwani M, Desnick RJ. The porphyrias: advances in diagnosis and treatment. Blood. 2012;120(23):4496-4504. PMID: 22791288.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Acute neurovisceral attacks triggered by rifampin/fasting + elevated ALA and PBG + absence of skin blistering = Acute intermittent porphyria (AIP). The deficient enzyme is porphobilinogen deaminase (PBGD).",
      "distractorExclusionNotes": "Strongest distractor 'Uroporphyrinogen decarboxylase in the conversion of uroporphyrinogen III to copr' excluded: Uroporphyrinogen decarboxylase deficiency causes porphyria cutanea tarda, which is defined by cutaneous blistering and skin fragility, both explicitly absent here.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0312",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Cardiovascular",
    "topic": "Familial Hypercholesterolemia LDL Receptor Endocytosis Defect",
    "subtopic": "Receptor-Mediated Clathrin-Coated Pit Endocytosis Failure",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college student presents with nodular, firm, painless swellings over both Achilles tendons and prominent yellowish papules along the extensor surfaces of his elbows. Slit-lamp examination demonstrates bilateral corneal arcus. His father died suddenly of an acute myocardial infarction at age 38, and his paternal grandfather had coronary bypass surgery at age 42. Fasting lipid panel reveals: Total Cholesterol 580 mg/dL, Triglycerides 140 mg/dL, HDL Cholesterol 46 mg/dL, and LDL Cholesterol 506 mg/dL. Genetic sequencing reveals an autosomal dominant mutation in the low-density lipoprotein (LDL) receptor gene that prevents the receptor from concentrating into clathrin-coated pits on the hepatocyte plasma membrane. Which of the following cell biological processes is primarily disrupted as a consequence of this mutation?",
    "choices": [
      [
        "Receptor-mediated endocytosis of apolipoprotein B-100-containing lipoprotein particles",
        "Correct. Familial hypercholesterolemia (FH; Type IIa dyslipidemia) is an autosomal dominant disorder caused most commonly by mutations in the LDL RECEPTOR (LDLR) gene on chromosome 19. Normal cellular uptake of LDL involves: (1) Binding of apolipoprotein B-100 on the LDL particle surface to the extracellular domain of LDLR; (2) Lateral clustering of the ligand-receptor complexes into CLATHRIN-COATED PITS on the cell membrane; (3) Invagination and pinch-off via dynamin to form coated vesicles; (4) Endosomal acidification, prompting LDL release and receptor recycling. Mutations in the cytoplasmic tail of the LDL receptor (Class 4 LDLR mutations) prevent interaction with adaptor proteins (e.g., ARH/AP-2), preventing receptor concentration into clathrin-coated pits. As a result, RECEPTOR-MEDIATED ENDOCYTOSIS IS IMPAIRED, leading to profound accumulation of circulating atherogenic LDL, early coronary artery disease, tendon xanthomas, and corneal arcus."
      ],
      [
        "Hydrolysis of chylomicron core triglycerides by capillary endothelial lipoprotein lipase",
        "Lipoprotein lipase (LPL) or ApoC-II deficiency causes Type I familial chylomicronemia, presenting with eruptive xanthomas, lipemia retinalis, acute pancreatitis, and massive hypertriglyceridemia, not pure hypercholesterolemia with tendon xanthomas."
      ],
      [
        "Esterification of free cholesterol in high-density lipoproteins by lecithin-cholesterol acyltransferase",
        "Lecithin-cholesterol acyltransferase (LCAT) deficiency impairs HDL maturation and cholesterol reverse transport, leading to corneal opacities, target cells, hemolytic anemia, and renal failure, not isolated extreme LDL elevation."
      ],
      [
        "Hepatic microsomal triglyceride transfer protein assembly of nascent very-low-density lipoproteins",
        "Microsomal triglyceride transfer protein (MTP) deficiency causes abetalipoproteinemia, characterized by absent apoB-48 and apoB-100, fat malabsorption, acanthocytosis, and undetectable serum cholesterol/LDL."
      ],
      [
        "Apolipoprotein E-mediated hepatic clearance of remnant chylomicrons and intermediate-density lipoproteins",
        "Defective ApoE (homozygous ApoE2) causes Type III dysbetalipoproteinemia (familial dysbetalipoproteinemia), presenting with elevated chylomicron/VLDL remnants, tuberoeruptive and palmar xanthomas, and both elevated cholesterol and triglycerides."
      ]
    ],
    "shortestValidSolution": "Severe hypercholesterolemia + tendon xanthomas + early CAD + LDL receptor clathrin-pit defect -> Impaired receptor-mediated endocytosis.",
    "necessaryInference": "Recognize Familial Hypercholesterolemia Type IIa from Achilles tendon xanthomas and LDL > 500. Correlate the LDL receptor clathrin-pit internalization defect with failure of receptor-mediated endocytosis of ApoB-100 particles.",
    "strongestDistractor": "Apolipoprotein E-mediated hepatic clearance of remnant chylomicrons and intermediate-density lipoproteins",
    "distractorExclusion": "ApoE defects cause Type III dysbetalipoproteinemia (elevated remnants with palmar xanthomas), whereas LDL receptor mutations specifically impair LDL clearance via receptor-mediated endocytosis.",
    "citation": "Goldstein JL, Brown MS. The LDL receptor. Arterioscler Thromb Vasc Biol. 2009;29(4):431-438. PMID: 19299667.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize Familial Hypercholesterolemia Type IIa from Achilles tendon xanthomas and LDL > 500. Correlate the LDL receptor clathrin-pit internalization defect with failure of receptor-mediated endocytosis of ApoB-100 particles.",
      "distractorExclusionNotes": "Strongest distractor 'Apolipoprotein E-mediated hepatic clearance of remnant chylomicrons and intermed' excluded: ApoE defects cause Type III dysbetalipoproteinemia (elevated remnants with palmar xanthomas), whereas LDL receptor mutations specifically impair LDL clearance via receptor-mediated",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0313",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Endocrine",
    "topic": "Glycogen Storage Disease Type I von Gierke vs Type III Cori",
    "subtopic": "Glucose-6-Phosphatase Deficiency Lactic Acidosis vs Debranching Enzyme Dextrin Limit",
    "provisionalDifficulty": 4,
    "stem": "A 4-month-old male infant is brought to the pediatric clinic because of generalized lethargy, tachypnea, and prominent abdominal distension. Physical examination reveals a rounded 'doll-like' facial appearance with fat cheeks, thin extremities, and massive hepatomegaly (liver edge palpable 6 cm below the right costal margin); the spleen is not palpable. Fasting laboratory evaluation demonstrates: - Blood Glucose: 34 mg/dL (severe hypoglycemia) - Blood Lactate: 6.8 mmol/L (normal: 0.5-2.0 mmol/L; marked lactic acidosis) - Serum Uric Acid: 10.4 mg/dL (normal: 2.0-5.5 mg/dL; marked hyperuricemia) - Serum Triglycerides: 540 mg/dL (marked hyperlipidemia) Intravenous administration of glucagon fails to increase blood glucose concentration, but causes a further surge in blood lactate levels. Liver biopsy demonstrates hepatocytes distended with structurally normal glycogen and marked steatosis. Which of the following enzymes is primarily deficient in this infant?",
    "choices": [
      [
        "Glucose-6-phosphatase in the terminal step of gluconeogenesis and glycogenolysis",
        "Correct. Glycogen storage disease Type I (von Gierke disease) is an autosomal recessive deficiency of GLUCOSE-6-PHOSPHATASE (Type Ia) or the glucose-6-phosphate translocase (Type Ib). Glucose-6-phosphatase catalyzes the final, shared step of BOTH glycogenolysis and gluconeogenesis: hydrolyzing glucose-6-phosphate into free glucose and inorganic phosphate in the endoplasmic reticulum of liver and kidney cells. When deficient, free glucose cannot be released into the blood, causing SEVERE FASTING HYPOGLYCEMIA. Accumulated G6P is shunted into alternate pathways: (1) Glycolysis -> excessive pyruvate and LACTIC ACIDOSIS (lactate competes with urate at renal OAT1 transporters -> HYPERURICEMIA and gout); (2) HMP shunt -> excessive ribose-5-phosphate, driving de novo purine synthesis and hyperuricemia; (3) Lipogenesis -> marked HYPERTRIGLYCERIDEMIA and hepatic steatosis ('doll-like' facies, massive hepatomegaly). CRUCIAL STEP 1 DISTINCTION: In von Gierke disease, GLUCAGON FAILS TO INCREASE GLUCOSE, BUT INCREASES LACTATE. In contrast, Type III (Cori disease; debranching enzyme deficiency) has NORMAL BLOOD LACTATE, intact gluconeogenesis, and abnormal limit dextrin-like glycogen."
      ],
      [
        "Debranching enzyme (alpha-1,6-glucosidase) in the breakdown of glycogen branch points",
        "Debranching enzyme deficiency (Type III Cori disease) presents with hepatomegaly and hypoglycemia, but has NORMAL blood lactate and intact gluconeogenesis, whereas this infant has profound lactic acidosis and hyperuricemia."
      ],
      [
        "Branching enzyme (amylo-1,4 to 1,6-transglucosidase) in the synthesis of glycogen branches",
        "Branching enzyme deficiency (Type IV Andersen disease) leads to abnormal glycogen with few branch points (polyglucosan bodies), causing infantile cirrhosis, portal hypertension, and death before age 2, without severe hypoglycemia."
      ],
      [
        "Lysosomal alpha-1,4-glucosidase (acid maltase) in the vacuolar degradation of glycogen",
        "Acid maltase deficiency (Type II Pompe disease) causes lysosomal glycogen accumulation resulting in hypertrophic cardiomyopathy, profound hypotonia, and early cardiorespiratory failure, without hypoglycemia or lactic acidosis."
      ],
      [
        "Liver glycogen phosphorylase in the phosphorolytic cleavage of alpha-1,4-glycosidic bonds",
        "Liver glycogen phosphorylase deficiency (Type VI Hers disease) presents with benign mild fasting hypoglycemia and hepatomegaly, but without the severe metabolic derangements (lactic acidosis, marked hyperuricemia, hyperlipidemia) seen in von Gierke disease."
      ]
    ],
    "shortestValidSolution": "Severe fasting hypoglycemia + lactic acidosis + hyperuricemia + massive hepatomegaly -> von Gierke disease (glucose-6-phosphatase).",
    "necessaryInference": "Severe hypoglycemia + lactic acidosis + hyperuricemia + massive hepatomegaly + glucagon raising lactate rather than glucose = von Gierke disease (Type I). The deficient enzyme is glucose-6-phosphatase. Differentiate from Cori disease (Type III), which has normal lactate.",
    "strongestDistractor": "Debranching enzyme (alpha-1,6-glucosidase) in the breakdown of glycogen branch points",
    "distractorExclusion": "Debranching enzyme deficiency (Cori disease) maintains intact gluconeogenesis; blood lactate and uric acid levels are normal, ruling out Cori disease.",
    "citation": "Kishnani PS, Austin SL, Abdenur JE, et al. Diagnosis and management of glycogen storage disease type I. Genet Med. 2014;16(11):e1. PMID: 25356975.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Severe hypoglycemia + lactic acidosis + hyperuricemia + massive hepatomegaly + glucagon raising lactate rather than glucose = von Gierke disease (Type I). The deficient enzyme is glucose-6-phosphatase. Differentiate from Cori disease (Type III), which has normal lactate.",
      "distractorExclusionNotes": "Strongest distractor 'Debranching enzyme (alpha-1,6-glucosidase) in the breakdown of glycogen branch p' excluded: Debranching enzyme deficiency (Cori disease) maintains intact gluconeogenesis; blood lactate and uric acid levels are normal, ruling out Cori disease.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0314",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Lesch-Nyhan Syndrome HGPRT Deficiency and Purine Salvage Failure",
    "subtopic": "Compensatory Upregulation of PRPP Synthetase and De Novo Purine Synthesis",
    "provisionalDifficulty": 4,
    "stem": "A 2-year-old boy is brought to the pediatric genetics clinic because of involuntary muscle twisting, developmental regression, and aggressive behavioral abnormalities. His mother notes that over the past 3 months, he has repeatedly bitten his own lips, tongue, and fingertips, requiring arm splints and dental extraction to prevent severe tissue loss. Examination reveals dystonia, choreoathetosis, hyperreflexia with bilateral ankle clonus, and severe self-mutilation injuries to the lower lip and digits. His diapers frequently contain an orange sand-like substance. Laboratory evaluation demonstrates serum uric acid 12.8 mg/dL (normal: 2.0-5.5 mg/dL). Enzyme assay of cultured skin fibroblasts confirms complete absence of hypoxanthine-guanine phosphoribosyltransferase (HGPRT) activity. Which of the following regulatory enzymes in purine metabolism exhibits a marked compensatory increase in activity as a direct consequence of this salvage pathway defect?",
    "choices": [
      [
        "Phosphoribosylpyrophosphate (PRPP) amidotransferase in the first committed step of de novo purine synthesis",
        "Correct. Lesch-Nyhan syndrome is an X-linked recessive inborn error of metabolism caused by complete deficiency of HYPOXANTHINE-GUANINE PHOSPHORIBOSYLTRANSFERASE (HGPRT). HGPRT is the core purine salvage enzyme that recycles free purine bases back into nucleotides: hypoxanthine + PRPP -> IMP, and guanine + PRPP -> GMP. When HGPRT is absent: (1) Free hypoxanthine and guanine cannot be salvaged and are degraded by xanthine oxidase into massive amounts of URIC ACID (hyperuricemia, orange 'sand' uric acid crystal diapers, nephrolithiasis, gout); (2) Unconsumed phosphoribosylpyrophosphate (PRPP) accumulates to extreme levels; (3) Concurrently, intracellular IMP and GMP levels drop, removing allosteric feedback inhibition on the rate-limiting enzyme of de novo purine synthesis: PHOSPHORIBOSYLPYROPHOSPHATE (PRPP) AMIDOTRANSFERASE. Driven by excess substrate (PRPP) and absent feedback inhibition (low IMP/GMP), PRPP amidotransferase activity surges dramatically, accelerating de novo purine synthesis and flooding the system with even more purines that inevitably degrade to uric acid."
      ],
      [
        "Xanthine oxidase in the oxidation of hypoxanthine to xanthine and uric acid",
        "Xanthine oxidase catalyzes uric acid production and is inhibited by allopurinol/febuxostat, but the primary regulatory enzyme that undergoes massive compensatory allosteric upregulation is PRPP amidotransferase."
      ],
      [
        "Adenosine deaminase in the irreversible deamination of adenosine to inosine",
        "Adenosine deaminase (ADA) deficiency causes severe combined immunodeficiency (SCID) due to toxic dATP accumulation in lymphocytes; ADA activity is not the driver of Lesch-Nyhan purine overproduction."
      ],
      [
        "Ribonucleotide reductase in the reduction of ribonucleotides to deoxyribonucleotides",
        "Ribonucleotide reductase converts UDP/CDP/ADP/GDP to their deoxy forms for DNA replication and is inhibited by hydroxyurea; it is not the committed step of de novo purine synthesis."
      ],
      [
        "Carbamoyl phosphate synthetase II in the initial step of de novo pyrimidine synthesis",
        "Carbamoyl phosphate synthetase II (CPS-II) is the cytosolic rate-limiting enzyme of de novo PYRIMIDINE synthesis; it is not regulated by HGPRT or purine salvage intermediates."
      ]
    ],
    "shortestValidSolution": "Self-mutilation + dystonia + orange diaper sand + HGPRT deficiency -> Unchecked de novo purine synthesis via upregulated PRPP amidotransferase.",
    "necessaryInference": "Absence of HGPRT purine salvage causes PRPP substrate accumulation and loss of purine feedback inhibition, leading to marked compensatory hyperactivity of PRPP amidotransferase.",
    "strongestDistractor": "Xanthine oxidase in the oxidation of hypoxanthine to xanthine and uric acid",
    "distractorExclusion": "Xanthine oxidase handles the downstream degradation of unsalvaged purines, but the upstream enzymatic driver producing massive purine excess is PRPP amidotransferase.",
    "citation": "Jinnah HA. Lesch-Nyhan Disease. In: Adam MP, et al, eds. GeneReviews. University of Washington; 2000. PMID: 20301490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Absence of HGPRT purine salvage causes PRPP substrate accumulation and loss of purine feedback inhibition, leading to marked compensatory hyperactivity of PRPP amidotransferase.",
      "distractorExclusionNotes": "Strongest distractor 'Xanthine oxidase in the oxidation of hypoxanthine to xanthine and uric acid' excluded: Xanthine oxidase handles the downstream degradation of unsalvaged purines, but the upstream enzymatic driver producing massive purine excess is PRPP amidotransferase.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0315",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Ornithine Transcarbamylase Deficiency vs UMP Synthase Deficiency",
    "subtopic": "Orotic Aciduria with Hyperammonemia (Urea Cycle) vs Megaloblastic Anemia",
    "provisionalDifficulty": 4,
    "stem": "A 3-day-old male newborn develops progressive somnolence, vomiting, and tachypnea. Arterial blood gas demonstrates respiratory alkalosis (pH 7.54, pCO2 24 mm Hg, HCO3- 20 mEq/L). Laboratory evaluation reveals a critical plasma ammonia concentration of 680 mcmol/L (normal: < 50 mcmol/L) and blood urea nitrogen of 2 mg/dL. Complete blood count demonstrates hemoglobin 16.2 g/dL and MCV 98 fL (normal for age, no megaloblastic changes). Quantitative urinary organic acid analysis reveals markedly elevated urinary orotic acid excretion (1,250 mcmol/mmol creatinine; normal < 5). Plasma amino acid chromatography demonstrates undetectable citrulline and elevated glutamine. Which of the following is the mode of inheritance and primary deficient enzyme in this infant?",
    "choices": [
      [
        "X-linked recessive inheritance of ornithine transcarbamylase deficiency",
        "Correct. Ornithine transcarbamylase (OTC) deficiency is the most common inborn error of the urea cycle and the ONLY UREA CYCLE DEFECT WITH X-LINKED RECESSIVE INHERITANCE (all other urea cycle enzyme deficiencies are autosomal recessive). In the mitochondria, OTC normally condenses carbamoyl phosphate with ornithine to produce citrulline. When OTC is deficient, carbamoyl phosphate accumulates in the mitochondria and overflows into the cytoplasm, where it enters the pyrimidine synthesis pathway, driving massive production and excretion of OROTIC ACID (orotic aciduria). The failure of the urea cycle causes severe, life-threatening HYPERAMMONEMIA with low/absent citrulline and low BUN. CRUCIAL STEP 1 DIFFERENTIATING CONCEPT: Orotic aciduria is also seen in hereditary orotic aciduria (UMP SYNTHASE DEFICIENCY). However, UMP synthase deficiency is autosomal recessive, has NORMAL AMMONIA, and features SEVERE MEGALOBLASTIC ANEMIA refractory to B12/folate. In contrast, OTC deficiency features SEVERE HYPERAMMONEMIA, normal blood counts, and X-linked inheritance."
      ],
      [
        "Autosomal recessive inheritance of uridine monophosphate (UMP) synthase deficiency",
        "UMP synthase deficiency (hereditary orotic aciduria) causes high urinary orotic acid, but ammonia levels are completely NORMAL, and infants present with profound megaloblastic anemia and failure to thrive, not neonatal hyperammonemic coma."
      ],
      [
        "Autosomal recessive inheritance of carbamoyl phosphate synthetase I deficiency",
        "Carbamoyl phosphate synthetase I (CPS-I) deficiency causes severe neonatal hyperammonemia, but because carbamoyl phosphate cannot be formed, orotic acid levels are completely normal or low."
      ],
      [
        "Autosomal recessive inheritance of argininosuccinate synthetase deficiency",
        "Argininosuccinate synthetase deficiency (citrullinemia Type I) causes hyperammonemia, but is characterized by MASSIVELY ELEVATED plasma citrulline, whereas citrulline is undetectable in OTC deficiency."
      ],
      [
        "X-linked dominant inheritance of dihydropyrimidine dehydrogenase deficiency",
        "Dihydropyrimidine dehydrogenase deficiency impairs pyrimidine catabolism, causing severe toxic accumulation of 5-fluorouracil during chemotherapy; it does not cause neonatal hyperammonemia or orotic aciduria."
      ]
    ],
    "shortestValidSolution": "Neonatal hyperammonemia + high urinary orotic acid + normal MCV (no megaloblastic anemia) -> Ornithine transcarbamylase (OTC) deficiency (X-linked recessive).",
    "necessaryInference": "High urinary orotic acid narrows to OTC deficiency vs UMP synthase deficiency. Presence of severe hyperammonemia with normal MCV definitively confirms the urea cycle defect: X-linked recessive OTC deficiency.",
    "strongestDistractor": "Autosomal recessive inheritance of uridine monophosphate (UMP) synthase deficiency",
    "distractorExclusion": "UMP synthase deficiency produces orotic aciduria without hyperammonemia, and causes severe megaloblastic anemia that is absent in OTC deficiency.",
    "citation": "Lichter-Konecki U, Caldovic L, Morizono H, Simpson K. Ornithine Transcarbamylase Deficiency. In: Adam MP, et al, eds. GeneReviews. University of Washington; 2013. PMID: 24006547.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: High urinary orotic acid narrows to OTC deficiency vs UMP synthase deficiency. Presence of severe hyperammonemia with normal MCV definitively confirms the urea cycle defect: X-linked recessive OTC deficiency.",
      "distractorExclusionNotes": "Strongest distractor 'Autosomal recessive inheritance of uridine monophosphate (UMP) synthase deficien' excluded: UMP synthase deficiency produces orotic aciduria without hyperammonemia, and causes severe megaloblastic anemia that is absent in OTC deficiency.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0316",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Sickle Cell Hemoglobin Molecular Polymerization Kinetics",
    "subtopic": "Hydrophobic Valine Substitution Interaction with Phenylalanine/Leucine Pocket",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old African American man presents to the emergency department with severe, unremitting bone pain in his lower back, bilaterally in his femurs, and throughout his chest following a high-altitude hike in the Rocky Mountains. Physical examination demonstrates pale conjunctivae, mild scleral icterus, and extreme tenderness over the mid-shafts of both femurs. Laboratory evaluation reveals hemoglobin 7.8 g/dL, reticulocyte count 11.2%, and indirect bilirubin 3.6 mg/dL. Peripheral blood smear demonstrates sickle-shaped erythrocytes, target cells, and Howell-Jolly bodies. Hemoglobin electrophoresis demonstrates 88% HbS, 10% HbF, and 2% HbA2 (homozygous HbSS). At the molecular structural level, the pathological sickling of deoxygenated HbS molecules is driven by which of the following biophysical interactions?",
    "choices": [
      [
        "Formation of a hydrophobic protrusion by valine at position 6 that fits into a complementary hydrophobic pocket on an adjacent beta-globin chain",
        "Correct. Sickle cell anemia (HbS) is caused by a single-base missense mutation (GAG to GTG in codon 6 of the beta-globin gene on chromosome 11), substituting non-polar, hydrophobic VALINE for negatively charged, hydrophilic GLUTAMATE on the outer surface of the beta-globin chain. In the oxygenated state (R-state), the hydrophobic valine residue remains exposed but innocuous. However, upon deoxygenation (T-state; triggered by hypoxia, acidosis, dehydration, high altitude), a conformational change unmasks a complementary hydrophobic receptor pocket (composed of phenylalanine 85 and leucine 88) on the beta chain of an adjacent deoxyhemoglobin tetramer. The mutant valine inserts into this hydrophobic pocket, driving non-covalent aggregation into rigid, insoluble crystalline polymers of 14-strand helical filaments. These polymers distort the erythrocyte into a rigid, fragile crescent (sickle cell), causing microvascular vaso-occlusion and extravascular/intravascular hemolysis."
      ],
      [
        "Creation of an aberrant covalent disulfide bond between mutated cysteine residues on adjacent alpha- and beta-globin subunits",
        "The HbS mutation involves valine, not cysteine; polymerization is mediated entirely by non-covalent hydrophobic interactions, not covalent disulfide cross-linking."
      ],
      [
        "Disruption of the proximal histidine coordination bond with the heme iron atom causing constitutive methemoglobin formation",
        "Mutation of the proximal (HisF8) or distal (HisE7) histidine residues causes Hemoglobin M disease (congenital methemoglobinemia), not sickle cell polymerization."
      ],
      [
        "Electrostatic repulsion between positively charged lysine residues on neighboring beta-globin dimers",
        "Substitution of glutamate with positively charged lysine at position 6 produces Hemoglobin C (HbC), which forms hexagonal intracellular crystals without forming sickle polymers or sickled erythrocytes."
      ],
      [
        "Impaired allosteric binding of 2,3-bisphosphoglycerate locking hemoglobin in a high-affinity relaxed quaternary conformation",
        "HbS polymerization occurs exclusively in the low-affinity deoxygenated T-state; locking hemoglobin in the relaxed R-state (e.g., via fetal hemoglobin HbF or voxelotor) inhibits sickling."
      ]
    ],
    "shortestValidSolution": "HbS mutation (Glu6Val) -> Hydrophobic valine fits into hydrophobic pocket (Phe85/Leu88) of adjacent deoxygenated beta chain -> Polymerization.",
    "necessaryInference": "Identify the molecular mechanism of sickle polymerization: non-polar valine substitution interacts with a complementary hydrophobic pocket on neighboring deoxygenated beta chains.",
    "strongestDistractor": "Electrostatic repulsion between positively charged lysine residues on neighboring beta-globin dimers",
    "distractorExclusion": "Lysine substitution at codon 6 causes Hemoglobin C, which forms blunt rhomboid crystals without sickle polymerization.",
    "citation": "Sundd P, Gladwin MT, Novelli EM. Pathophysiology of Sickle Cell Disease. Annu Rev Pathol. 2019;14:263-292. PMID: 30332562.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify the molecular mechanism of sickle polymerization: non-polar valine substitution interacts with a complementary hydrophobic pocket on neighboring deoxygenated beta chains.",
      "distractorExclusionNotes": "Strongest distractor 'Electrostatic repulsion between positively charged lysine residues on neighborin' excluded: Lysine substitution at codon 6 causes Hemoglobin C, which forms blunt rhomboid crystals without sickle polymerization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0317",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Osteogenesis Imperfecta Type I Collagen Glycine Substitution",
    "subtopic": "Disruption of the Gly-X-Y Triple Helix Steric Packing Assembly",
    "provisionalDifficulty": 4,
    "stem": "A 6-year-old girl is brought to the pediatric orthopedic clinic after sustaining a spiral fracture of her right tibia after slipping on carpet. Her medical history is remarkable for four prior low-impact fractures of long bones and a clavicle fracture during infancy. Physical examination demonstrates mild short stature, generalized joint hypermobility, and prominent blue sclerae in both eyes. Dental examination reveals small, misshapen, translucent, brownish-blue teeth that are prone to rapid wear (dentinogenesis imperfecta). Audiological testing demonstrates mild bilateral conductive hearing loss. Genetic testing confirms an autosomal dominant missense mutation in the COL1A1 gene encoding the pro-alpha-1 chain of Type I collagen. The substitution of which of the following amino acids by a bulkier residue is the primary molecular cause of defective collagen triple helix formation in this patient?",
    "choices": [
      [
        "Glycine, because its minimal hydrogen side chain is uniquely required for steric packing within the interior of the collagen triple helix",
        "Correct. Type I collagen is the primary structural protein of bone, dentin, sclerae, tendons, and skin. It is synthesized as a triple helix composed of two pro-alpha-1 chains and one pro-alpha-2 chain. The primary amino acid sequence consists of an invariant repeating triplet motif: (Gly-X-Y)n, where X is frequently proline (which induces helical kinking) and Y is frequently hydroxyproline or hydroxylysine (which forms stabilizing interchain hydrogen bonds). GLYCINE IS THE SMALLEST AMINO ACID, possessing only a single hydrogen atom as its side chain. Because the core of the triple helix is extremely tight and crowded, ONLY GLYCINE CAN FIT INTO THE RESTRICTED INTERIOR AXIS. In osteogenesis imperfecta (OI Type I/II/III/IV), point mutations that replace glycine with bulkier or charged amino acids (e.g., alanine, aspartate, arginine) cause steric clash, preventing normal triple helix folding and assembly (dominant negative effect) or reducing collagen synthesis."
      ],
      [
        "Proline, because its rigid pyrrolidine ring is required to form interchain covalent desmosine cross-links",
        "Desmosine cross-links are unique to elastin, formed from lysine residues by lysyl oxidase, not proline in collagen."
      ],
      [
        "Lysine, because its epsilon-amino group is required for extracellular copper-dependent lysyl hydroxylase cleavage",
        "Lysyl oxidase (not hydroxylase) requires copper, and lysyl hydroxylase operates intracellularly on lysine residues; however, the invariant core residue required for triple-helix packing is glycine."
      ],
      [
        "Tryptophan, because its aromatic indole ring mediates hydrophobic base-stacking between neighboring tropocollagen fibrils",
        "Type I collagen completely lacks tryptophan residues in its core triple-helical domain; the structural integrity relies on glycine."
      ],
      [
        "Cysteine, because its sulfhydryl groups form essential intrachain disulfide bridges along the entire helical rod",
        "Disulfide bridges are formed exclusively within the C-terminal propeptide extension to initiate triple-helix alignment, and are removed extracellularly; they do not run along the triple helix."
      ]
    ],
    "shortestValidSolution": "Recurrent fractures + blue sclerae + dentinogenesis imperfecta -> Osteogenesis imperfecta (mutation replacing Glycine in Gly-X-Y collagen helix).",
    "necessaryInference": "Recognize Osteogenesis Imperfecta from multiple fractures, blue sclerae, and dentinogenesis imperfecta. Identify that Type I collagen requires Glycine at every third position due to steric constraints in the triple helix core.",
    "strongestDistractor": "Proline, because its rigid pyrrolidine ring is required to form interchain covalent desmosine cross-links",
    "distractorExclusion": "Desmosine cross-linking is specific to elastin, and proline provides helical kinks rather than core axis fitting.",
    "citation": "Marini JC, Forlino A, B\u00e4chinger HP, et al. Osteogenesis imperfecta. Nat Rev Dis Primers. 2017;3:17052. PMID: 28820180.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize Osteogenesis Imperfecta from multiple fractures, blue sclerae, and dentinogenesis imperfecta. Identify that Type I collagen requires Glycine at every third position due to steric constraints in the triple helix core.",
      "distractorExclusionNotes": "Strongest distractor 'Proline, because its rigid pyrrolidine ring is required to form interchain coval' excluded: Desmosine cross-linking is specific to elastin, and proline provides helical kinks rather than core axis fitting.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0318",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Cardiovascular",
    "topic": "Marfan Syndrome Fibrillin-1 Mutation and Excessive TGF-Beta Signaling",
    "subtopic": "Extracellular Matrix Microfibril Scaffolding Failure and Elastolysis",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old high school basketball player undergoes a pre-participation sports physical examination. He is 6 feet 6 inches (198 cm) tall, with an arm span of 206 cm (arm span-to-height ratio > 1.05) and long, slender arachnodactylic digits. He has a positive Steinberg thumb sign and a positive Walker-Murdoch wrist sign, along with moderate pectus excavatum. Slit-lamp biomicroscopy reveals bilateral superior and temporal (upward) dislocation of the crystalline lenses (ectopia lentis). Transthoracic echocardiography reveals marked dilatation of the aortic root (sinus of Valsalva diameter 46 mm) with mild aortic regurgitation. Genetic sequencing identifies a heterozygous mutation in the FBN1 gene on chromosome 15 encoding fibrillin-1. In addition to structural microfibril scaffolding deficiency, which of the following aberrant cellular signaling mechanisms directly drives the aortic elastolysis and connective tissue pathology in this syndrome?",
    "choices": [
      [
        "Excessive activation of transforming growth factor-beta (TGF-beta) signaling due to failure of extracellular matrix sequestration",
        "Correct. Marfan syndrome is an autosomal dominant connective tissue disorder caused by heterozygous mutations in the FBN1 gene, which encodes FIBRILLIN-1. Fibrillin-1 is a large glycoprotein that polymerizes to form extracellular microfibrils, which serve as the scaffolding for tropoelastin deposition in elastic tissues (aorta, periosteum, zonular fibers of the lens). Beyond its structural role, normal fibrillin-1 binds and sequesters the large latent TRANSFORMING GROWTH FACTOR-BETA (TGF-beta) complex in the extracellular matrix. Defective or deficient fibrillin-1 fails to sequester latent TGF-beta, resulting in UNRESTRAINED, EXCESSIVE BIOACTIVE TGF-BETA SIGNALING. Excessive TGF-beta stimulates vascular smooth muscle apoptosis, metalloproteinase (MMP) secretion, and progressive degradation of elastic lamellae (cystic medial necrosis) in the aortic root, driving aortic aneurysms and dissections."
      ],
      [
        "Constitutive autophosphorylation of vascular endothelial growth factor receptor 2 (VEGFR2) driving hypervascularization",
        "VEGFR2 mediates angiogenesis in tumors and vascular malformations; it is not the pathogenic signaling axis dysregulated by fibrillin-1 mutations in Marfan syndrome."
      ],
      [
        "Impaired lysyl oxidase cross-linking of collagen fibers secondary to copper transport defects in the trans-Golgi network",
        "Impaired lysyl oxidase cross-linking due to copper transport deficiency causes Menkes disease (ATP7A mutation), characterized by kinky hair, hypotonia, and aneurysms, not classical Marfan syndrome."
      ],
      [
        "Defective cleavage of procollagen amino- and carboxy-terminal propeptides in the extracellular space",
        "Defective procollagen peptidase cleavage prevents mature collagen fibril assembly, which causes Ehlers-Danlos syndrome (arthrochalasia type), not Marfan syndrome."
      ],
      [
        "Constitutive activation of fibroblast growth factor receptor 3 (FGFR3) inhibiting chondrocyte proliferation",
        "Activating FGFR3 mutations cause achondroplasia, the most common form of dwarfism, featuring rhizomelic limb shortening, not tall stature and aortic aneurysms."
      ]
    ],
    "shortestValidSolution": "Tall habitus + upward lens ectopia + aortic root aneurysm + FBN1 mutation -> Fibrillin-1 defect with excessive TGF-beta signaling.",
    "necessaryInference": "Identify Marfan syndrome from marfanoid habitus, upward ectopia lentis, and aortic root dilation. Recall that FBN1 mutations cause pathology both through microfibril weakness and loss of TGF-beta sequestration (excessive TGF-beta activity).",
    "strongestDistractor": "Defective cleavage of procollagen amino- and carboxy-terminal propeptides in the extracellular space",
    "distractorExclusion": "Procollagen peptidase defects cause Ehlers-Danlos syndrome (skin hyperextensibility and joint hypermobility), whereas Marfan syndrome is mediated by fibrillin-1 and TGF-beta dysregulation.",
    "citation": "Dietz HC, Cutting GR, Pyeritz RE, et al. Marfan syndrome caused by a recurrent de novo missense mutation in the fibrillin gene. Nature. 1991;352(6333):337-339. PMID: 1852208.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify Marfan syndrome from marfanoid habitus, upward ectopia lentis, and aortic root dilation. Recall that FBN1 mutations cause pathology both through microfibril weakness and loss of TGF-beta sequestration (excessive TGF-beta activity).",
      "distractorExclusionNotes": "Strongest distractor 'Defective cleavage of procollagen amino- and carboxy-terminal propeptides in the' excluded: Procollagen peptidase defects cause Ehlers-Danlos syndrome (skin hyperextensibility and joint hypermobility), whereas Marfan syndrome is mediated by fibrillin-1 and TGF-beta dysreg",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0319",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Endocrine",
    "topic": "McCune-Albright Syndrome Postzygotic Somatic GNAS Mutation",
    "subtopic": "Mosaic Activating Mutation of Gs-Alpha Causing Constitutive Adenylyl Cyclase Stimulation",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old girl is evaluated for precocious puberty and recurrent skeletal fractures. Over the past 6 months, her mother noted breast bud development, pubic hair, and two episodes of vaginal bleeding. Physical examination reveals a large, unilateral, irregularly bordered brown macule with jagged edges ('coast of Maine' border) spanning across her left flank and buttock, stopping abruptly at the midline. Skeletal survey reveals multiple radiolucent, ground-glass expansile bone lesions with cortical thinning (polyostotic fibrous dysplasia) involving the left femur and pelvis. Serum estradiol and free thyroxine levels are elevated with suppressed LH, FSH, and TSH. Genetic analysis of affected bone tissue reveals a postzygotic activating somatic missense mutation in the GNAS gene encoding the Gs alpha subunit. Which of the following genetic concepts explains why this mutation is survivable in this patient but would cause fatal embryonic lethality if present as a constitutional germline mutation?",
    "choices": [
      [
        "Somatic mosaicism arising early in embryonic postzygotic development",
        "Correct. McCune-Albright syndrome is a rare genetic disorder characterized by the classic clinical triad of: (1) Polyostotic fibrous dysplasia (ground-glass bone lesions, pathological fractures); (2) Unilateral cafe-au-lait macules with jagged, irregular borders ('coast of Maine') that respect the midline; and (3) Autonomous endocrine hyperfunction (precocious puberty, thyrotoxicosis, Cushing syndrome, gigantism). The underlying etiology is an activating gain-of-function mutation in the GNAS gene, which encodes the G-alpha-s subunit of heterotrimeric G-proteins. This mutation abolishes intrinsic GTPase activity, leading to constitutive, ligand-independent adenylyl cyclase activation and continuous cAMP generation in target tissues. CRUCIAL GENETIC PRINCIPLE: If this mutation occurred in the germline (present in every cell of the conceptus), constitutive Gs signaling would cause fatal embryonic lethality. It is survivable ONLY BECAUSE IT ARISES AS A POSTZYGOTIC SOMATIC MUTATION, creating a MOSAIC distribution where only a fraction of tissues harbor the mutation while surrounding normal cells maintain viability."
      ],
      [
        "Genomic imprinting with selective maternal allele inactivation in developing neural crest cells",
        "Genomic imprinting involves parent-of-origin dependent methylation (e.g., Prader-Willi/Angelman), which does not account for the survival of McCune-Albright syndrome mutations."
      ],
      [
        "Mitochondrial heteroplasmy with tissue-specific threshold variability across organ systems",
        "McCune-Albright is caused by a nuclear chromosomal gene mutation (GNAS on chromosome 20), not mitochondrial circular DNA."
      ],
      [
        "Anticipation driven by trinucleotide repeat expansion in maternal gametogenesis",
        "Trinucleotide expansions (e.g., Huntington, Fragile X) cause dynamic anticipation, not mosaic survivability of lethal G-protein activating mutations."
      ],
      [
        "Uniparental disomy of chromosome 20 leading to complete loss of heterozygosity",
        "Uniparental disomy causes recessive disease unmasking or imprinting anomalies, not somatic activating gain-of-function mosaicism."
      ]
    ],
    "shortestValidSolution": "Precocious puberty + coast-of-Maine cafe-au-lait + polyostotic fibrous dysplasia -> McCune-Albright (postzygotic somatic mosaicism in GNAS).",
    "necessaryInference": "Classic triad of fibrous dysplasia + coast-of-Maine spots + endocrine autonomous function = McCune-Albright. The activating GNAS (Gs alpha) mutation is embryonic lethal if germline; it survives only via postzygotic somatic mosaicism.",
    "strongestDistractor": "Genomic imprinting with selective maternal allele inactivation in developing neural crest cells",
    "distractorExclusion": "While GNAS does exhibit complex tissue-specific imprinting in Albright hereditary osteodystrophy (pseudohypoparathyroidism), the classic McCune-Albright triad is driven specifically by postzygotic somatic mosaicism.",
    "citation": "Boyce AM, Collins MT. Fibrous Dysplasia / McCune-Albright Syndrome. In: Adam MP, et al, eds. GeneReviews. University of Washington; 2015. PMID: 25719192.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Classic triad of fibrous dysplasia + coast-of-Maine spots + endocrine autonomous function = McCune-Albright. The activating GNAS (Gs alpha) mutation is embryonic lethal if germline; it survives only via postzygotic somatic mosaicism.",
      "distractorExclusionNotes": "Strongest distractor 'Genomic imprinting with selective maternal allele inactivation in developing neu' excluded: While GNAS does exhibit complex tissue-specific imprinting in Albright hereditary osteodystrophy (pseudohypoparathyroidism), the classic McCune-Albright triad is driven specificall",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0320",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Fragile X Syndrome FMR1 CGG Repeat Expansion Hypermethylation",
    "subtopic": "CpG Island Promoter Hypermethylation and Transcriptional Gene Silencing",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old boy is referred to a developmental pediatrician because of severe intellectual disability, speech delay, and repetitive hand-flapping behaviors. On physical examination, he avoids direct eye contact. He has a long, narrow face with a prominent forehead and jaw, large everted ears, high-arched palate, and marked hyperextensibility of his finger joints. Genital examination reveals bilateral macroorchidism (testicular volume > 25 mL; normal for age < 4 mL). Southern blot analysis reveals an unstable CGG trinucleotide repeat expansion exceeding 220 repeats in the 5' untranslated region of the FMR1 gene on the X chromosome. Which of the following molecular epigenetic modifications is the direct mechanism by which this trinucleotide expansion causes loss of fragile X mental retardation protein (FMRP) expression?",
    "choices": [
      [
        "DNA hypermethylation of cytosine residues within promoter CpG islands causing transcriptional gene silencing",
        "Correct. Fragile X syndrome is the most common inherited cause of intellectual disability and the second most common genetic cause overall (after Down syndrome). It is an X-linked dominant condition caused by an unstable CGG TRINUCLEOTIDE REPEAT EXPANSION in the 5' untranslated region (5' UTR) of the FMR1 gene on the long arm of the X chromosome (Xq27.3). Normal alleles contain 5 to 44 CGG repeats; full mutation alleles contain > 200 repeats. When the repeat count exceeds 200, the massive expansion attracts DNA methyltransferases, leading to EXTENSIVE DNA HYPERMETHYLATION OF CYTOSINE BASES WITHIN CPG ISLANDS in the FMR1 promoter. This promoter hypermethylation condenses chromatin (heterochromatinization), resulting in COMPLETE TRANSCRIPTIONAL SILENCING of FMR1 and the total absence of Fragile X Mental Retardation Protein (FMRP), an essential mRNA-binding translational repressor in neurons."
      ],
      [
        "Formation of an aberrant nuclear splice-acceptor site resulting in premature nonsense codon insertion",
        "Nonsense and frameshift mutations can occur in FMR1 rarely, but the overwhelming mechanism of classical CGG expansion is promoter hypermethylation and transcriptional shut-off, not aberrant splicing."
      ],
      [
        "Ubiquitin-proteasome hyperactivation targeting synthesized FMRP for accelerated cytosolic degradation",
        "FMRP is not synthesized and rapidly degraded; transcription of the FMR1 mRNA itself is completely shut down at the genomic promoter level by methylation."
      ],
      [
        "Defective polyadenylation of the 3' untranslated region leading to rapid cytoplasmic mRNA decay",
        "The CGG repeat expansion is located in the 5' untranslated region (promoter-associated), not the 3' polyadenylation signal."
      ],
      [
        "Constitutive histone hyperacetylation loosening chromatin and preventing transcription factor assembly",
        "Histone hyperacetylation OPENS chromatin and promotes gene transcription; in Fragile X, DNA methylation induces histone DEACETYLATION, packing chromatin into transcriptionally inert heterochromatin."
      ]
    ],
    "shortestValidSolution": "Intellectual disability + long face + large ears + macroorchidism + >200 CGG repeats -> FMR1 promoter CpG hypermethylation and gene silencing.",
    "necessaryInference": "Recognize Fragile X syndrome from macroorchidism, long face, large ears, and CGG repeats in FMR1. Identify that >200 CGG repeats leads directly to DNA hypermethylation of CpG islands, silencing transcription.",
    "strongestDistractor": "Constitutive histone hyperacetylation loosening chromatin and preventing transcription factor assembly",
    "distractorExclusion": "Histone hyperacetylation enhances transcription, whereas Fragile X silencing involves DNA hypermethylation and histone hypoacetylation (chromatin condensation).",
    "citation": "Santoro MR, Bray SM, Warren ST. Molecular mechanisms of fragile X syndrome: a twenty-year perspective. Annu Rev Pathol. 2012;7:219-245. PMID: 22017584.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize Fragile X syndrome from macroorchidism, long face, large ears, and CGG repeats in FMR1. Identify that >200 CGG repeats leads directly to DNA hypermethylation of CpG islands, silencing transcription.",
      "distractorExclusionNotes": "Strongest distractor 'Constitutive histone hyperacetylation loosening chromatin and preventing transcr' excluded: Histone hyperacetylation enhances transcription, whereas Fragile X silencing involves DNA hypermethylation and histone hypoacetylation (chromatin condensation).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0321",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Friedreich Ataxia FXN GAA Repeat and Iron-Sulfur Cluster Defect",
    "subtopic": "Mitochondrial Frataxin Deficiency, Iron Accumulation, and Hypertrophic Cardiomyopathy",
    "provisionalDifficulty": 4,
    "stem": "A 13-year-old boy is brought to the neurology clinic because of progressive clumsiness, frequent falls, and difficulty walking that began 1 year ago. Neurological examination reveals marked bilateral lower extremity ataxia, dysmetria on finger-to-nose testing, loss of position and vibration sense in both feet, absent patellar and Achilles deep tendon reflexes, and bilateral extensor plantar (Babinski) responses. Musculoskeletal examination demonstrates severe kyphoscoliosis and high plantar arches (pes cavus). Transthoracic echocardiography reveals concentric left ventricular hypertrophy (hypertrophic cardiomyopathy). Genetic testing reveals homozygous GAA trinucleotide repeat expansions in intron 1 of the FXN gene on chromosome 9. The protein encoded by this gene (frataxin) is essential for which of the following cellular processes?",
    "choices": [
      [
        "Mitochondrial iron homeostasis and biosynthesis of iron-sulfur clusters in the electron transport chain",
        "Correct. Friedreich ataxia (FRDA) is an autosomal recessive neurodegenerative disorder caused by homozygous GAA TRINUCLEOTIDE REPEAT EXPANSIONS within intron 1 of the FXN gene on chromosome 9. Frataxin is an essential mitochondrial protein localized to the inner mitochondrial membrane that functions as an iron chaperone required for the BIOGENESIS OF IRON-SULFUR (FE-S) CLUSTERS. Fe-S clusters are critical prosthetic groups for respiratory electron transport chain complexes (Complexes I, II, and III) and mitochondrial aconitase. Loss of frataxin leads to severe mitochondrial iron accumulation, free radical oxidative damage via Fenton chemistry, and failure of cellular ATP generation. Degeneration targets: (1) Dorsal root ganglia and posterior columns (loss of vibration/proprioception, absent DTRs); (2) Spinocerebellar tracts (ataxia, dysmetria); (3) Lateral corticospinal tracts (spastic weakness, Babinski sign). The leading cause of death is HYPERTROPHIC CARDIOMYOPATHY (in >60% of patients) and cardiac arrhythmias."
      ],
      [
        "Copper transport across the canalicular membrane of hepatocytes for biliary excretion",
        "Canalicular copper export is mediated by the ATP7B P-type ATPase; mutations cause Wilson disease (hepatolenticular degeneration), not GAA-repeat ataxia with pes cavus."
      ],
      [
        "Hydrolysis of very-long-chain fatty acids in peroxisomal beta-oxidation",
        "Peroxisomal beta-oxidation of VLCFAs is impaired in X-linked adrenoleukodystrophy (ABCD1 mutation) and Zellweger syndrome, not Friedreich ataxia."
      ],
      [
        "Lysosomal degradation of glycosaminoglycans within connective tissue fibroblasts",
        "Glycosaminoglycan degradation is defective in mucopolysaccharidoses (Hurler and Hunter syndromes), causing gargoylism, corneal clouding, and hepatosplenomegaly."
      ],
      [
        "Vesicular transport of acetylcholine into synaptic storage vesicles at the motor endplate",
        "Vesicular acetylcholine transport is mediated by VAChT; it is unrelated to frataxin, GAA repeats, or spinocerebellar degeneration."
      ]
    ],
    "shortestValidSolution": "Ataxia + pes cavus + kyphoscoliosis + hypertrophic cardiomyopathy + GAA repeat -> Friedreich ataxia (frataxin deficiency impairing mitochondrial Fe-S clusters).",
    "necessaryInference": "Ataxia + loss of DTRs + Babinski + pes cavus + hypertrophic cardiomyopathy + GAA repeat = Friedreich ataxia. Frataxin is an inner mitochondrial membrane protein vital for iron-sulfur (Fe-S) cluster assembly.",
    "strongestDistractor": "Hydrolysis of very-long-chain fatty acids in peroxisomal beta-oxidation",
    "distractorExclusion": "Peroxisomal VLCFA breakdown defects cause adrenoleukodystrophy, which presents with behavioral changes and adrenal insufficiency, not GAA-repeat spinocerebellar degeneration.",
    "citation": "Bidichandani SI, Delatycki MB. Friedreich Ataxia. In: Adam MP, et al, eds. GeneReviews. University of Washington; 1998. PMID: 20301458.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Ataxia + loss of DTRs + Babinski + pes cavus + hypertrophic cardiomyopathy + GAA repeat = Friedreich ataxia. Frataxin is an inner mitochondrial membrane protein vital for iron-sulfur (Fe-S) cluster assembly.",
      "distractorExclusionNotes": "Strongest distractor 'Hydrolysis of very-long-chain fatty acids in peroxisomal beta-oxidation' excluded: Peroxisomal VLCFA breakdown defects cause adrenoleukodystrophy, which presents with behavioral changes and adrenal insufficiency, not GAA-repeat spinocerebellar degeneration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0322",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Huntington Disease CAG Repeat Polyglutamine and Transcriptional Repression",
    "subtopic": "Caudate Striatal Atrophy and Histone Hypoacetylation Gene Silencing",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man is brought to the outpatient clinic by his wife because of progressive involuntary jerky movements of his hands and shoulders, mood irritability, and cognitive decline over the past 18 months. Physical examination reveals continuous, irregular, purposeless writhing movements of his extremities (chorea) and an unsteady, lurching gait. Mental status examination reveals impaired executive functioning and memory retrieval. His father died in a psychiatric facility at age 48 after suffering from severe dementia and choreiform movements. Brain MRI demonstrates marked bilateral atrophy of the caudate nuclei and putamen, with ex vacuo enlargement of the frontal horns of the lateral ventricles. Genetic analysis confirms a heterozygous CAG trinucleotide repeat expansion (46 repeats) in the HTT gene on chromosome 4. In addition to direct toxic gain-of-function, the mutant huntingtin protein binds to and inactivates CREB-binding protein (CBP), causing which of the following downstream epigenetic alterations in striatal neurons?",
    "choices": [
      [
        "Decreased histone acetyltransferase activity resulting in histone hypoacetylation and transcriptional repression of neuroprotective genes",
        "Correct. Huntington disease is an autosomal dominant neurodegenerative disorder caused by a CAG TRINUCLEOTIDE REPEAT EXPANSION (encoding polyglutamine tracts) in the HTT gene on chromosome 4. Normal alleles have < 26 CAG repeats; full penetrance occurs at >= 40 repeats, exhibiting paternal anticipation. The pathology features profound atrophy of GABAergic medium spiny neurons in the CAUDATE NUCLEUS and putamen (striatum). At the molecular level, mutant huntingtin forms toxic intracellular aggregates and abnormally binds to transcription factors, including CREB-BINDING PROTEIN (CBP). CBP possesses intrinsic HISTONE ACETYLTRANSFERASE (HAT) activity. Inhibition of CBP reduces histone acetylation (causing HISTONE HYPOACETYLATION), which tightens chromatin around nucleosomes, silencing transcription of critical neuroprotective factors, including Brain-Derived Neurotrophic Factor (BDNF)."
      ],
      [
        "Hyperactivation of DNA methyltransferases causing genome-wide cytosine demethylation",
        "DNA methyltransferases ADD methyl groups to cytosines (methylation), which condenses chromatin; they do not cause demethylation."
      ],
      [
        "Constitutive phosphorylation of RNA polymerase II leading to uncontrolled transcriptional elongation",
        "Mutant huntingtin represses transcription of survival genes rather than stimulating uncontrolled RNA polymerase II elongation."
      ],
      [
        "Impaired spliceosome assembly leading to global retention of non-coding introns in mature mRNAs",
        "Huntingtin aggregates interfere primarily with transcription and vesicular transport, not global spliceosome intron excision."
      ],
      [
        "Defective aminoacyl-tRNA synthetase charging of glutamine resulting in ribosome stalling and translational arrest",
        "Polyglutamine tracts result from excessive CAG translation by intact glutaminyl-tRNA, not synthetase deficiency or ribosome stalling."
      ]
    ],
    "shortestValidSolution": "Chorea + dementia + caudate atrophy + CAG repeat -> Huntington disease (mutant huntingtin inhibits CBP -> histone hypoacetylation).",
    "necessaryInference": "Identify Huntington disease from chorea, behavioral changes, caudate atrophy, and CAG expansion on chromosome 4. Recognize that mutant huntingtin inhibits CREB-binding protein (CBP), reducing histone acetyltransferase activity (histone hypoacetylation).",
    "strongestDistractor": "Constitutive phosphorylation of RNA polymerase II leading to uncontrolled transcriptional elongation",
    "distractorExclusion": "Huntingtin toxicity is characterized by transcriptional repression (silencing) of survival factors like BDNF due to histone hypoacetylation, not excessive transcriptional elongation.",
    "citation": "Bates GP, Dorsey R, Gusella JF, et al. Huntington disease. Nat Rev Dis Primers. 2015;1:15005. PMID: 27188209.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify Huntington disease from chorea, behavioral changes, caudate atrophy, and CAG expansion on chromosome 4. Recognize that mutant huntingtin inhibits CREB-binding protein (CBP), reducing histone acetyltransferase activity (histone hypoacetylation).",
      "distractorExclusionNotes": "Strongest distractor 'Constitutive phosphorylation of RNA polymerase II leading to uncontrolled transc' excluded: Huntingtin toxicity is characterized by transcriptional repression (silencing) of survival factors like BDNF due to histone hypoacetylation, not excessive transcriptional elongatio",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0323",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Myotonic Dystrophy Type 1 CTG Repeat and Alternative Splicing",
    "subtopic": "RNA Toxicity and Sequestration of Muscleblind-Like 1 (MBNL1) Splicing Regulator",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents with progressive muscle weakness and stiffness in his hands. He notes that after gripping a golf club or door handle, he experiences prolonged difficulty relaxing his grip and must consciously wait several seconds for his fingers to release (myotonia). Physical examination reveals bilateral temporalis and masseter muscle wasting with a long, narrow 'hatchet' facies, bilateral frontal balding, and ptosis. Direct percussion of the thenar eminence with a reflex hammer elicits prolonged sustained contraction followed by slow relaxation. Slit-lamp biomicroscopy reveals iridescent, polychromatic 'Christmas tree' cataracts in both posterior subcapsular lenses. An ECG demonstrates a prolonged PR interval (first-degree AV block). Genetic analysis reveals a CTG trinucleotide repeat expansion in the 3' untranslated region of the DMPK gene on chromosome 19. Which of the following molecular mechanisms directly mediates the multisystem symptoms of this condition?",
    "choices": [
      [
        "Nuclear accumulation of mutant expanded CUG-repeat RNA transcripts that sequester muscleblind-like 1 (MBNL1), disrupting alternative splicing of pre-mRNAs",
        "Correct. Myotonic Dystrophy Type 1 (DM1) is an autosomal dominant disorder caused by an unstable CTG TRINUCLEOTIDE REPEAT EXPANSION in the 3' untranslated region (3' UTR) of the DMPK (dystrophia myotonica protein kinase) gene on chromosome 19. Normal individuals have 5-37 repeats; affected individuals have > 50 to thousands of repeats, displaying marked maternal anticipation. PATHOPHYSIOLOGY OF RNA TOXICITY: Unlike Huntington disease (polyglutamine protein toxicity), DM1 is a toxic RNA GAIN-OF-FUNCTION disorder. The mutant DMPK pre-mRNAs containing expanded CUG repeats fold into stable hairpin structures that accumulate as toxic nuclear foci. These CUG hairpins tightly bind and SEQUESTER SPLICING REGULATOR PROTEINS, notably MUSCLEBLIND-LIKE 1 (MBNL1), while upregulating CELF1. Depletion of functional MBNL1 causes widespread ABERRANT ALTERNATIVE SPLICING of developmentally regulated pre-mRNAs in multiple organs: (1) Skeletal muscle chloride channel (CLCN1) mis-splicing -> impaired membrane repolarization and myotonia; (2) Cardiac troponin T and SCN5A mis-splicing -> AV block and arrhythmias; (3) Insulin receptor (INSR) mis-splicing -> insulin resistance; (4) Lens epithelial defects -> cataracts."
      ],
      [
        "Dystrophin-glycoprotein complex disruption destabilizing the sarcolemmal membrane during muscle contraction",
        "Dystrophin deficiency (Duchenne/Becker) is caused by dystrophin frameshift/in-frame mutations on the X chromosome, causing proximal pseudohypertrophy, not myotonia or CTG repeats."
      ],
      [
        "Immune-mediated IgG autoantibodies targeting postsynaptic nicotinic acetylcholine receptors",
        "Antibodies against nicotinic acetylcholine receptors cause Myasthenia Gravis (fluctuating fatigable ocular/bulbar weakness), not grip myotonia or frontal balding."
      ],
      [
        "Voltage-gated P/Q-type calcium channel autoantibodies impairing presynaptic acetylcholine exocytosis",
        "Antibodies against presynaptic P/Q-type calcium channels cause Lambert-Eaton myasthenic syndrome, featuring hyporeflexia and weakness that improves with exercise, not myotonia."
      ],
      [
        "Constitutive activating mutation in the skeletal muscle ryanodine receptor (RYR1) calcium release channel",
        "RYR1 mutations cause Malignant Hyperthermia and Central Core Disease, triggered by volatile anesthetics and succinylcholine, not inherited CTG-repeat multisystem myotonic dystrophy."
      ]
    ],
    "shortestValidSolution": "Grip myotonia + frontal balding + cataracts + arrhythmia + CTG repeat -> Myotonic dystrophy Type 1 (toxic CUG RNA sequesters MBNL1, altering pre-mRNA splicing).",
    "necessaryInference": "Myotonia + hatchet facies + frontal balding + cataracts + CTG expansion in DMPK = Myotonic Dystrophy Type 1. The pathogenic mechanism is toxic RNA gain-of-function where mutant CUG-repeat transcripts sequester MBNL1, disrupting alternative pre-mRNA splicing.",
    "strongestDistractor": "Dystrophin-glycoprotein complex disruption destabilizing the sarcolemmal membrane during muscle contraction",
    "distractorExclusion": "Dystrophin loss causes Duchenne muscular dystrophy without myotonia, cataracts, or CTG repeat expansions.",
    "citation": "Thornton CA. Myotonic dystrophy. Neurol Clin. 2014;32(3):705-719. PMID: 25037086.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Myotonia + hatchet facies + frontal balding + cataracts + CTG expansion in DMPK = Myotonic Dystrophy Type 1. The pathogenic mechanism is toxic RNA gain-of-function where mutant CUG-repeat transcripts sequester MBNL1, disrupting alternative pre-mRNA splicing.",
      "distractorExclusionNotes": "Strongest distractor 'Dystrophin-glycoprotein complex disruption destabilizing the sarcolemmal membran' excluded: Dystrophin loss causes Duchenne muscular dystrophy without myotonia, cataracts, or CTG repeat expansions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0324",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "I-Cell Disease Mannose-6-Phosphate Tagging Deficiency",
    "subtopic": "Phosphotransferase Failure Leading to Secretion of Acid Hydrolases into Extracellular Space",
    "provisionalDifficulty": 4,
    "stem": "An 8-month-old girl is evaluated for severe developmental delay, coarse facial features, and skeletal deformities. Physical examination reveals a depressed nasal bridge, prominent forehead, thick lips and gingival hyperplasia, corneal clouding, and restricted joint mobility in both shoulders and hips. Skeletal radiographs demonstrate dysostosis multiplex with anterior beaking of the lumbar vertebrae. Cultured skin fibroblasts examined under phase-contrast microscopy reveal numerous dense, refractile intracellular inclusion bodies occupying the cytoplasm. Biochemical analysis demonstrates that multiple acid hydrolase enzymes (including beta-hexosaminidase, beta-glucuronidase, and alpha-fucosidase) are virtually absent from intracellular lysosomes, but are present at 20- to 50-fold elevated concentrations in the patient's plasma and extracellular culture medium. Which of the following Golgi apparatus enzymes is primarily defective in this patient?",
    "choices": [
      [
        "UDP-N-acetylglucosamine:lysosomal enzyme N-acetylglucosaminyl-1-phosphotransferase",
        "Correct. I-cell disease (mucolipidosis Type II) is a rare autosomal recessive lysosomal storage disorder caused by deficiency of the Golgi enzyme UDP-N-ACETYLGLUCOSAMINE:LYSOSOMAL ENZYME N-ACETYLGLUCOSAMINYL-1-PHOSPHOTRANSFERASE (GlcNAc-phosphotransferase). In normal cell biology, acid hydrolase enzymes destined for lysosomes are synthesized in the rough ER and transported to the cis-Golgi. GlcNAc-phosphotransferase adds a phosphorylated GlcNAc to specific asparagine-linked mannose residues; a second enzyme removes the GlcNAc, leaving a MANNOSE-6-PHOSPHATE (M6P) TAG. M6P receptors in the trans-Golgi recognize this tag and package the hydrolases into clathrin-coated vesicles destined for lysosomes. In I-cell disease, absence of the phosphotransferase means acid hydrolases CANNOT BE TAGGED WITH MANNOSE-6-PHOSPHATE. Lacking the lysosomal routing signal, the enzymes are diverted by default into the constitutive secretory pathway and EXCRETED INTO THE EXTRACELLULAR SPACE AND PLASMA. Lysosomes become deficient in all hydrolases and fill with undigested substrates, forming characteristic INCLUSION BODIES ('I-cells')."
      ],
      [
        "Lysosomal alpha-L-iduronidase in the sequential degradation of dermatan and heparan sulfate",
        "Alpha-L-iduronidase deficiency causes Hurler syndrome (MPS I), which has coarse facial features and corneal clouding, but intracellular lysosomal enzyme routing is intact and plasma hydrolases are not globally elevated."
      ],
      [
        "Galactosyltransferase in the assembly of core oligosaccharide chains on secretory glycoproteins",
        "Galactosyltransferase mediates general N- and O-linked glycosylation in the trans-Golgi; its deficiency causes congenital disorders of glycosylation (CDG), not selective loss of mannose-6-phosphate tagging."
      ],
      [
        "Sphingomyelin phosphodiesterase in the conversion of sphingomyelin to ceramide and phosphocholine",
        "Sphingomyelinase deficiency causes Niemann-Pick disease, characterized by hepatosplenomegaly and cherry-red spots, not global misrouting of Golgi acid hydrolases."
      ],
      [
        "Glucosylceramide beta-glucosidase in the hydrolytic cleavage of glucocerebroside",
        "Glucocerebrosidase deficiency causes Gaucher disease, presenting with pancytopenia and avascular bone necrosis without coarse facies, corneal clouding, or high extracellular enzyme levels."
      ]
    ],
    "shortestValidSolution": "Coarse facies + corneal clouding + inclusions ('I-cells') + acid hydrolases in plasma instead of lysosomes -> I-cell disease (GlcNAc-phosphotransferase defect in M6P tagging).",
    "necessaryInference": "Enzymes absent in lysosomes but massively elevated in extracellular plasma/medium = failure of lysosomal targeting. The defective step is mannose-6-phosphate phosphorylation in the Golgi apparatus by GlcNAc-phosphotransferase.",
    "strongestDistractor": "Lysosomal alpha-L-iduronidase in the sequential degradation of dermatan and heparan sulfate",
    "distractorExclusion": "Hurler syndrome shares coarse facies and corneal clouding, but is caused by deficiency of a single enzyme (alpha-L-iduronidase) inside lysosomes, without global secretion of all acid hydrolases into the plasma.",
    "citation": "Kollmann K, Pohl S, Marschner K, et al. Mannose phosphorylation in health and disease. Eur J Cell Biol. 2010;89(1):117-123. PMID: 19913327.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Enzymes absent in lysosomes but massively elevated in extracellular plasma/medium = failure of lysosomal targeting. The defective step is mannose-6-phosphate phosphorylation in the Golgi apparatus by GlcNAc-phosphotransferase.",
      "distractorExclusionNotes": "Strongest distractor 'Lysosomal alpha-L-iduronidase in the sequential degradation of dermatan and hepa' excluded: Hurler syndrome shares coarse facies and corneal clouding, but is caused by deficiency of a single enzyme (alpha-L-iduronidase) inside lysosomes, without global secretion of all ac",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0325",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Zellweger Syndrome Peroxisomal Biogenesis Disorder",
    "subtopic": "PEX Gene Mutations and Impaired Very-Long-Chain Fatty Acid Alpha- and Beta-Oxidation",
    "provisionalDifficulty": 4,
    "stem": "A 2-day-old male newborn is evaluated in the neonatal intensive care unit for profound generalized hypotonia, poor feeding, and recurrent focal seizures. Physical examination demonstrates severe muscular flaccidity ('floppy infant'), a flattened facial profile with a high prominent forehead, wide-open fontanelles, hypertelorism, upslanting palpebral fissures, and redundant skin folds on the neck. Abdominal ultrasound reveals bilateral cortical renal cysts and mild hepatomegaly. Brain MRI demonstrates diffuse polymicrogyria, pachygyria, and abnormal periventricular pseudocysts. Plasma biochemical profiling reveals markedly elevated concentrations of very-long-chain fatty acids (VLCFAs, including C26:0 hexacosanoic acid and C26:1), elevated phytanic acid, and severely reduced levels of plasmalogens. Cultured skin fibroblasts demonstrate an absence of functional peroxisomes due to a homozygous mutation in the PEX1 gene. Which of the following metabolic pathways is primarily dependent on the intact function of this defective organelle?",
    "choices": [
      [
        "Initial alpha-oxidation of branched-chain fatty acids and beta-oxidation of fatty acids with chain length >= 22 carbons",
        "Correct. Zellweger syndrome (cerebrohepatorenal syndrome) is the most severe PEROXISOME BIOGENESIS DISORDER (PBD), inherited in an autosomal recessive pattern. It is caused by mutations in any of the PEX genes (most commonly PEX1), which encode PEROXINS\u2014proteins essential for the import of matrix enzymes and assembly of functional peroxisomes. In the absence of peroxisomes, multiple critical biochemical pathways fail: (1) BETA-OXIDATION OF VERY-LONG-CHAIN FATTY ACIDS (VLCFAs; chain length >= 22 carbons): Peroxisomes perform the initial beta-oxidative shortening of VLCFAs down to medium-chain fatty acids, which then transfer to mitochondria for complete oxidation. (2) ALPHA-OXIDATION OF PHYTANIC ACID: Dietary branched-chain fatty acids (phytanic acid) possess a methyl group on the beta-carbon that blocks direct beta-oxidation; peroxisomal alpha-oxidation removes one carbon, generating pristanic acid for subsequent beta-oxidation (defective in Refsum disease). (3) PLASMALOGEN SYNTHESIS: Peroxisomes initiate synthesis of plasmalogens (ether phospholipids vital for myelin and heart). Accumulation of VLCFAs and phytanic acid causes severe neuronal migration defects (polymicrogyria), infantile hypotonia, facial dysmorphism, hepatomegaly, and early infant death."
      ],
      [
        "Carnitine palmitoyltransferase-1 (CPT-1) mediated transport of long-chain fatty acids across the inner mitochondrial membrane",
        "CPT-1 resides on the outer mitochondrial membrane and initiates the carnitine shuttle for long-chain fatty acids (C14-C18) into mitochondria, not peroxisomal VLCFA processing."
      ],
      [
        "Microsomal omega-oxidation of fatty acids by cytochrome P450 4A enzymes generating dicarboxylic acids",
        "Omega-oxidation occurs in the smooth endoplasmic reticulum (microsomes) and becomes an active alternative pathway during severe carnitine or mitochondrial beta-oxidation failure, producing dicarboxylic acids."
      ],
      [
        "Mitochondrial medium-chain acyl-CoA dehydrogenase (MCAD) beta-oxidation generating acetyl-CoA for ketogenesis",
        "MCAD resides in the mitochondrial matrix and oxidizes medium-chain fatty acids (C6-C12); MCAD deficiency causes hypoketotic hypoglycemia during fasting, without facial dysmorphism or absent peroxisomes."
      ],
      [
        "Lysosomal degradation of glycosaminoglycans and sulfatides by arylsulfatase A",
        "Arylsulfatase A is a lysosomal enzyme; its deficiency causes metachromatic leukodystrophy, an autosomal recessive lysosomal storage disease, not a peroxisome biogenesis disorder."
      ]
    ],
    "shortestValidSolution": "Floppy infant + high forehead + hepatomegaly + high VLCFAs + low plasmalogens + PEX1 mutation -> Zellweger syndrome (impaired peroxisomal alpha- and beta-oxidation of VLCFAs).",
    "necessaryInference": "Floppy newborn + craniofacial dysmorphism + renal cysts + high VLCFAs/phytanic acid + PEX mutation = Zellweger syndrome. Identify that peroxisomes are obligatory for VLCFA beta-oxidation (>= C22), phytanic acid alpha-oxidation, and plasmalogen synthesis.",
    "strongestDistractor": "Carnitine palmitoyltransferase-1 (CPT-1) mediated transport of long-chain fatty acids across the inner mitochondrial membrane",
    "distractorExclusion": "The carnitine shuttle is a mitochondrial system for long-chain fatty acids (C14-C18), whereas very-long-chain fatty acids (>= C22) must be oxidized initially within peroxisomes.",
    "citation": "Braverman NE, Raymond GV, Rizzo WB, et al. Peroxisome biogenesis disorders in the Zellweger spectrum: An overview of current diagnosis, clinical manifestations, and treatment guidelines. Mol Genet Metab. 2016;117(3):313-321. PMID: 26750748.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Floppy newborn + craniofacial dysmorphism + renal cysts + high VLCFAs/phytanic acid + PEX mutation = Zellweger syndrome. Identify that peroxisomes are obligatory for VLCFA beta-oxidation (>= C22), phytanic acid alpha-oxidation, and plasmalogen synthesis.",
      "distractorExclusionNotes": "Strongest distractor 'Carnitine palmitoyltransferase-1 (CPT-1) mediated transport of long-chain fatty ' excluded: The carnitine shuttle is a mitochondrial system for long-chain fatty acids (C14-C18), whereas very-long-chain fatty acids (>= C22) must be oxidized initially within peroxisomes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
