import json

# Generator for Step 1 Batch 13 (op-c-s1-0301 to 0325)
# Focus: Genetics, Biochemistry, Molecular Biology & Cellular Signaling

questions = [
  {
    "code": "op-c-s1-0301",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Robertsonian Translocation Down Syndrome Recurrence Risk",
    "subtopic": "Unbalanced Segregation in Maternal 14;21 Robertsonian Translocation",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old woman and her 28-year-old husband present for genetic counseling after the birth of their first child, who was diagnosed with Down syndrome. Karyotype analysis of the infant reveals 46,XY,der(14;21)(q10;q10),+21. Neither parent exhibits phenotypic features of Down syndrome. Parental karyotyping demonstrates that the father has a normal 46,XY karyotype, whereas the mother has a 45,XX,der(14;21)(q10;q10) balanced Robertsonian translocation. The couple plans to conceive again and asks about the risk of having another child with Down syndrome. Which of the following best represents the empirical recurrence risk of Down syndrome in subsequent liveborn offspring of this couple?",
    "choices": [
      [
        "Approximately 10% to 15% due to selective preferential loss of unbalanced fetuses",
        "Correct. The mother is a carrier of a balanced Robertsonian translocation involving chromosomes 14 and 21. Although the theoretical risk of Down syndrome based on random gamete segregation is 33% (1 in 3 viable outcomes: normal, balanced carrier, or trisomy 21, with monosomies and trisomy 14 resulting in early embryonic lethality), the observed empirical recurrence risk for female balanced der(14;21) carriers is approximately 10% to 15% (and < 2% if the father is the carrier). This discrepancy is primarily due to preferential non-viability and spontaneous abortion of unbalanced conceptions."
      ],
      [
        "Less than 1% because Robertsonian translocations arise almost exclusively de novo during meiosis",
        "Less than 1% is the recurrence risk for standard free trisomy 21 (maternal meiotic non-disjunction) in women under age 30, not for an inherited parental Robertsonian translocation carrier."
      ],
      [
        "Exactly 33% based strictly on Mendelian gametic segregation with complete fetal viability",
        "A 33% figure reflects theoretical gametic probability (1/3 normal, 1/3 carrier, 1/3 trisomy 21), but fails to account for empirical post-conception intrauterine mortality of unbalanced embryos."
      ],
      [
        "Exactly 50% because the derivative chromosome behaves as a dominant Mendelian allele",
        "Robertsonian translocations do not segregate as simple dominant alleles; homologous and non-homologous pairing produces trivalent meiotic figures with 6 theoretical gamete types."
      ],
      [
        "100% because all surviving offspring inherit the abnormal fused derivative chromosome",
        "100% recurrence risk of Down syndrome occurs only when a parent carries a 21;21 Robertsonian translocation (isochromosome 21), where every viable gamete contains two copies of chromosome 21."
      ]
    ],
    "shortestValidSolution": "Maternal 14;21 Robertsonian carrier -> empirical Down syndrome recurrence risk is ~10-15% (theoretical 33% reduced by spontaneous loss).",
    "necessaryInference": "Identify that the infant has translocation Down syndrome inherited from a carrier mother. Recognize the divergence between theoretical meiotic segregation (33%) and empirical liveborn risk (10-15%).",
    "strongestDistractor": "Exactly 33% based strictly on Mendelian gametic segregation with complete fetal viability",
    "distractorExclusion": "Theoretical 33% segregation is substantially higher than empirical 10-15% liveborn risk due to spontaneous resorption of unbalanced gestations.",
    "citation": "Gardner RJ, Sutherland GR, Shaffer LG. Chromosome Abnormalities and Genetic Counseling. 4th ed. Oxford University Press; 2011. NLM ID: 101560945."
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
    "citation": "Costanzo LS. Physiology. 7th ed. Elsevier; 2022. NLM ID: 101777263."
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
    "citation": "Camaschella C. Iron-deficiency anemia and hemochromatosis. N Engl J Med. 2015;372(19):1832-1843. PMID: 25946282."
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
    "citation": "Gorman GS, Chinnery PF, DiMauro S, et al. Mitochondrial diseases. Nat Rev Dis Primers. 2016;2:16080. PMID: 27762381."
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
    "citation": "Scriver CR, Beaudet AL, Sly WS, Valle D. The Metabolic and Molecular Bases of Inherited Disease. 8th ed. McGraw-Hill; 2001. NLM ID: 100958189."
  }
]

print(f"Generated {len(questions)} high-yield items for Batch 13.")
