import json

# Generator for Step 1 Batch 13: Items 0301 to 0325
# Medical Genetics, Molecular Biology, Cellular Signaling, Inborn Errors of Metabolism

items = [
  # 0301
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
    "citation": "Gardner RJ, Sutherland GR, Shaffer LG. Chromosome Abnormalities and Genetic Counseling. 4th ed. Oxford University Press; 2011. NLM ID: 101560945."
},
  # 0302
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
      ["G-alpha-s subunit targeted by Vibrio cholerae enterotoxin (choleragen)", "Correct. Cholera toxin (produced by Vibrio cholerae) is an A-B toxin that ADP-ribosylates the G-alpha-s subunit of heterotrimeric G-proteins. This covalent modification blocks the intrinsic GTPase activity of G-alpha-s, preventing the hydrolysis of GTP to GDP. Consequently, G-alpha-s remains constitutively active, driving persistent adenylyl cyclase activation, massive intracellular cAMP elevation, PKA-mediated CFTR channel opening, and voluminous secretory diarrhea. In contrast, pertussis toxin ADP-ribosylates and INHIBITS G-alpha-i, disabling the 'inhibitory' brake."],
      ["G-alpha-i subunit targeted by Bordetella pertussis toxin", "Pertussis toxin ADP-ribosylates G-alpha-i (locking it in an inactive GDP-bound state), which prevents it from inhibiting adenylyl cyclase; however, the mechanism described (locking an active subunit via intrinsic GTPase ablation) is specific to G-alpha-s by cholera toxin."],
      ["G-alpha-q subunit targeted by Clostridium perfringens alpha toxin", "Clostridium perfringens alpha toxin is a phospholipase C (lecithinase) enzyme that hydrolyzes membrane sphingomyelin and phosphatidylcholine, not an ADP-ribosylating toxin of G-alpha-q."],
      ["G-alpha-t (transducin) subunit targeted by Bacillus anthracis lethal factor", "Anthrax lethal factor is a zinc metalloproteinase that cleaves MAP kinase kinase (MAPKK/MEK), while anthrax edema factor is an adenylyl cyclase itself; neither targets transducin."],
      ["G-alpha-12/13 subunit targeted by Pseudomonas aeruginosa exotoxin A", "Pseudomonas exotoxin A ADP-ribosylates eukaryotic elongation factor-2 (eEF-2) to arrest host ribosome protein synthesis; it does not target heterotrimeric G-protein subunits."]
    ],
    "shortestValidSolution": "Inhibition of intrinsic GTPase locks G-alpha-s in active state -> Vibrio cholerae cholera toxin.",
    "necessaryInference": "Differentiate Gs constitutive activation (cholera toxin abits GTPase) from Gi inactivation (pertussis toxin locks Gi in GDP-inactive state). Both increase cAMP, but through opposing G-protein targets.",
    "strongestDistractor": "G-alpha-i subunit targeted by Bordetella pertussis toxin",
    "distractorExclusion": "Pertussis toxin inhibits G-alpha-i by locking it in the inactive GDP state, whereas cholera toxin ADP-ribosylates G-alpha-s to prevent GTP hydrolysis.",
    "citation": "Costanzo LS. Physiology. 7th ed. Elsevier; 2022. NLM ID: 101777263."
  },
  # 0303
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
      ["Inappropriately suppressed hepatic hepcidin synthesis leading to unrestrained basolateral enterocyte ferroportin export", "Correct. In normal physiology, the HFE protein forms a regulatory complex with transferrin receptor 1 (TfR1) and transferrin receptor 2 (TfR2) on the hepatocyte surface. When iron-loaded transferrin binds, HFE dissociates and stimulates the BMP-SMAD signaling cascade to synthesize HEPCIDIN. In hereditary hemochromatosis (homozygous C282Y mutation), the defective HFE protein cannot complex with TfR, falsely sensing systemic iron deficiency. Consequently, hepatocytes produce inappropriately LOW levels of hepcidin despite massive total body iron overload. Low hepcidin allows FERROPORTIN on basolateral duodenal enterocytes and reticuloendothelial macrophages to remain open, driving uninhibited systemic iron absorption and release."],
      ["Hypersecretion of hepcidin by Kupffer cells causing widespread lysosomal ferroportin internalization and degradation", "High hepcidin degrades ferroportin and traps iron inside enterocytes and macrophages, which is the hallmark of anemia of chronic disease, the exact opposite of hemochromatosis."],
      ["Constitutive transcriptional upregulation of luminal divalent metal transporter 1 (DMT1) independently of iron regulatory proteins", "DMT1 is regulated by iron response elements (IRE/IRP) and mediates apical enterocyte Fe2+ uptake, but the primary genetic pathophysiology of HFE hemochromatosis operates via hepatic hepcidin suppression."],
      ["Defective ceruloplasmin ferroxidase activity preventing oxidation of ferrous iron into transferrin-bound ferric iron", "Ceruloplasmin deficiency causes aceruloplasminemia (a rare copper/iron disorder with neurologic degeneration), not classic HFE-associated hereditary hemochromatosis."],
      ["Impaired transferrin endocytosis in bone marrow erythroblasts causing secondary parenchymal iron deposition", "Bone marrow transferrin uptake is intact in hemochromatosis; the defect is excessive intestinal absorption driven by low circulating hepcidin."]
    ],
    "shortestValidSolution": "HFE C282Y mutation -> Impaired iron sensing -> Low hepcidin -> Unrestrained ferroportin iron export into blood.",
    "necessaryInference": "Trace the HFE molecular defect to low hepatic hepcidin production, leading to open ferroportin and systemic iron overload.",
    "strongestDistractor": "Constitutive transcriptional upregulation of luminal divalent metal transporter 1 (DMT1) independently of iron regulatory proteins",
    "distractorExclusion": "DMT1 is an apical importer, but systemic iron regulation is governed centrally by hepatic hepcidin acting on basolateral ferroportin.",
    "citation": "Camaschella C. Iron-deficiency anemia and hemochromatosis. N Engl J Med. 2015;372(19):1832-1843. PMID: 25946282."
  },
  # 0304
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
      ["Variable heteroplasmy across cellular mitochondrial genomes reaching critical tissue-specific metabolic thresholds", "Correct. MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes) is a maternally inherited mitochondrial disorder caused by mutations in mitochondrial DNA (mtDNA), most commonly m.3243A>G in MT-TL1. Mitochondria replicate independently and are distributed randomly during cell division (replicative segregation). A single cell can contain a mixture of normal and mutant mtDNA molecules, a state termed HETEROPLASMY. Clinical manifestations develop only when the proportion of mutant mtDNA exceeds a critical tissue threshold (threshold effect). Tissues with high oxidative metabolic demand (brain, skeletal muscle, cochlea, pancreatic beta-cells) are most vulnerable, explaining why family members with different mutant proportions exhibit vastly different phenotypic severities."],
      ["Uniparental disomy of maternal chromosome 15 resulting in genomic imprinting defects", "Maternal uniparental disomy of chromosome 15 causes Angelman syndrome, an autosomal imprinting disorder unrelated to mitochondrial DNA mutations or ragged-red fibers."],
      ["Variable expressivity driven strictly by dynamic trinucleotide repeat expansion during maternal oogenesis", "Trinucleotide repeat anticipation occurs in nuclear genes (e.g., Huntington disease, Fragile X), not in circular mitochondrial DNA."],
      ["Skewed X-chromosome inactivation (lyonization) favoring expression of the mutant allele in high-energy tissues", "Mitochondrial DNA is maternally inherited through oocyte cytoplasm and is completely independent of nuclear X-chromosome inactivation."],
      ["Locus heterogeneity where mutations in distinct unlinked nuclear genes produce overlapping encephalopathic phenotypes", "Locus heterogeneity refers to mutations at different genetic loci causing the same disorder, whereas this family shares the identical m.3243A>G mtDNA mutation displaying variable severity due to heteroplasmy."]
    ],
    "shortestValidSolution": "Maternally inherited mtDNA mutation with ragged-red fibers + variable family severity -> Heteroplasmy threshold effect.",
    "necessaryInference": "Recognize MELAS from stroke-like episodes crossing vascular territories + lactic acidosis + ragged-red fibers. Attribute intra-familial phenotypic variability to mitochondrial heteroplasmy.",
    "strongestDistractor": "Variable expressivity driven strictly by dynamic trinucleotide repeat expansion during maternal oogenesis",
    "distractorExclusion": "Anticipation with trinucleotide repeats is a nuclear genetic mechanism, whereas MELAS is caused by circular mitochondrial genome mutations.",
    "citation": "Gorman GS, Chinnery PF, DiMauro S, et al. Mitochondrial diseases. Nat Rev Dis Primers. 2016;2:16080. PMID: 27762381."
  },
  # 0305
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
      ["Accumulation of GM2 ganglioside secondary to beta-hexosaminidase A enzyme deficiency", "Correct. Tay-Sachs disease is an autosomal recessive lysosomal storage sphingolipidosis caused by deficiency of BETA-HEXOSAMINIDASE A, leading to pathological accumulation of GM2 GANGLIOSIDE within neuronal lysosomes. Clinical onset begins at 3 to 6 months with progressive motor loss, developmental regression, hyperacusis (acoustic startle), seizures, and macular cherry-red spots. Crucially, on USMLE Step 1, TAY-SACHS DISEASE HAS NO HEPATOSPLENOMEGALY. In contrast, Niemann-Pick disease (sphingomyelinase deficiency with sphingomyelin accumulation) features an identical macular cherry-red spot and neurodegeneration, but PROMINENT HEPATOSPLENOMEGALY."],
      ["Accumulation of sphingomyelin secondary to acid sphingomyelinase deficiency", "Sphingomyelin accumulation (Niemann-Pick disease Type A) produces an identical cherry-red spot and developmental delay, but is definitively characterized by marked hepatosplenomegaly, which is completely absent here."],
      ["Accumulation of galactocerebroside secondary to galactocerebrosidase deficiency", "Galactocerebrosidase deficiency causes Krabbe disease, characterized by peripheral neuropathy, extreme optic atrophy, globoid cells, and irritability, without cherry-red spots or hepatosplenomegaly."],
      ["Accumulation of glucocerebroside secondary to beta-glucocerebrosidase deficiency", "Beta-glucocerebrosidase deficiency causes Gaucher disease, which presents with hepatosplenomegaly, pancytopenia, and bone crises with 'wrinkled tissue paper' lipid-laden macrophages, without macular cherry-red spots."],
      ["Accumulation of ceramide trihexoside secondary to alpha-galactosidase A deficiency", "Alpha-galactosidase A deficiency causes Fabry disease, an X-linked disorder presenting with angiokeratomas, burning acroparesthesias, hypohidrosis, and renal/cardiovascular failure, not infantile neurodegeneration with cherry-red spots."]
    ],
    "shortestValidSolution": "Infant regression + hyperacusis + cherry-red spot + NO hepatosplenomegaly -> Tay-Sachs (beta-hexosaminidase A / GM2 ganglioside).",
    "necessaryInference": "Cherry-red spot + neurodegeneration narrows to Tay-Sachs vs Niemann-Pick. Absence of hepatosplenomegaly definitively identifies Tay-Sachs (hexosaminidase A/GM2 ganglioside).",
    "strongestDistractor": "Accumulation of sphingomyelin secondary to acid sphingomyelinase deficiency",
    "distractorExclusion": "Acid sphingomyelinase deficiency (Niemann-Pick) presents with massive hepatosplenomegaly; its absence rules out Niemann-Pick.",
    "citation": "Scriver CR, Beaudet AL, Sly WS, Valle D. The Metabolic and Molecular Bases of Inherited Disease. 8th ed. McGraw-Hill; 2001. NLM ID: 100958189."
  },
  # 0306
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
      ["Cystathionine beta-synthase deficiency requiring pyridoxal phosphate (vitamin B6) cofactor supplementation", "Correct. Classical homocystinuria is an autosomal recessive inborn error of metabolism caused by deficiency of CYSTATHIONINE BETA-SYNTHASE (CBS), which normally condenses homocysteine and serine into cystathionine using PYRIDOXAL PHOSPHATE (VITAMIN B6) as an essential cofactor. When CBS is deficient, homocysteine accumulates and is trans-methylated back to methionine, leading to MARKEDLY ELEVATED PLASMA METHIONINE AND HOMOCYSTEINE. Clinical hallmark: marfanoid habitus, downward lens subluxation (ectopia lentis; contrast with Marfan upward dislocation), intellectual disability, and life-threatening premature thromboembolism (strokes, myocardial infarctions). In contrast, methionine synthase (MTR) deficiency causes homocystinuria with DECREASED methionine."],
      ["Methionine synthase deficiency requiring cobalamin (vitamin B12) cofactor supplementation", "Methionine synthase converts homocysteine to methionine using vitamin B12; deficiency of this enzyme results in elevated homocysteine but LOW or low-normal plasma methionine, directly contradicting the marked hypermethioninemia observed in this patient."],
      ["Methylenetetrahydrofolate reductase (MTHFR) deficiency requiring folate cofactor supplementation", "MTHFR generates 5-methyl-THF required by methionine synthase; MTHFR deficiency causes hyperhomocysteinemia with LOW plasma methionine, unlike the high methionine seen here."],
      ["Methylmalonyl-CoA mutase deficiency requiring adenosylcobalamin cofactor supplementation", "Methylmalonyl-CoA mutase deficiency causes methylmalonic acidemia with severe ketoacidosis, hyperammonemia, and high methylmalonic acid, which was explicitly normal in this patient."],
      ["Fibrillin-1 structural glycoprotein mutation altering transforming growth factor-beta regulation", "Fibrillin-1 mutation causes Marfan syndrome (upward lens subluxation, normal intellect, normal amino acids, and aortic root dilation), not hyperhomocysteinemia, stroke, or downward lens dislocation."]
    ],
    "shortestValidSolution": "Marfanoid + stroke + downward lens ectopia + high homocysteine AND high methionine -> Cystathionine beta-synthase (vitamin B6).",
    "necessaryInference": "High homocysteine + high methionine differentiates cystathionine beta-synthase deficiency (transsulfuration block) from methionine synthase deficiency (remethylation block, which has low methionine). Downward ectopia lentis reinforces CBS.",
    "strongestDistractor": "Methionine synthase deficiency requiring cobalamin (vitamin B12) cofactor supplementation",
    "distractorExclusion": "Methionine synthase deficiency impairs homocysteine remethylation, producing reduced or low-normal methionine, whereas this patient has marked hypermethioninemia.",
    "citation": "Mudd SH, Levy HL, Kraus JP. Disorders of Transsulfuration. In: Scriver CR, et al, eds. The Metabolic and Molecular Bases of Inherited Disease. 8th ed. McGraw-Hill; 2001:2007-2056. NLM ID: 100958189."
  },
  # 0307
  {
    "code": "op-c-s1-0307",
    "exam": "Step 1",
    "subject": "Molecular Biology",
    "system": "Dermatology",
    "topic": "Xeroderma Pigmentosum Nucleotide Excision Repair Pyrimidine Dimers",
    "subtopic": "Endonuclease Defect in Cleavage of Ultraviolet-Induced Cyclobutane Dimers",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old boy is brought to the dermatology clinic by his parents because of severe, blistering sunburns that develop after even minimal sun exposure (less than 10 minutes outdoors). Physical examination reveals extensive solar lentigines (freckling), poikiloderma, cutaneous xerosis, and prominent telangiectasias over the face, neck, and forearms. Biopsy of a pigmented papule on his cheek reveals an invasive squamous cell carcinoma. Cultured skin fibroblasts are exposed to ultraviolet-C radiation in vitro. Analysis of cellular DNA demonstrates persistent cyclobutane pyrimidine dimers and 6-4 photoproducts that fail to be excised. Which of the following specific DNA repair enzymes is primarily defective in this patient?",
    "choices": [
      ["UV-specific excinuclease (endonuclease) that cleaves phosphodiester bonds flanking the DNA lesion", "Correct. Xeroderma pigmentosum (XP) is an autosomal recessive disorder caused by defective NUCLEOTIDE EXCISION REPAIR (NER). Ultraviolet (UV) radiation induces covalent cross-linking between adjacent pyrimidine bases (thymine-thymine or thymine-cytosine cyclobutane dimers), distorting the DNA double helix. NER operates via: (1) Recognition of helical distortion by XP proteins; (2) Cleavage of the damaged DNA strand at phosphodiester bonds on both the 5' and 3' sides of the lesion by a UV-SPECIFIC ENDONUCLEASE (excinuclease complex); (3) Excision of the ~24-32 nucleotide oligomer; and (4) Resynthesis by DNA polymerase and sealing by DNA ligase. Defective endonuclease activity leaves pyrimidine dimers unexcised, resulting in replication block, accumulation of mutations, and a >10,000-fold increased risk of non-melanoma skin cancer and melanoma before age 10."],
      ["DNA mismatch repair endonuclease (MSH2/MLH1) that recognizes single-base replication mispairings", "Mismatch repair (MMR) corrects replication proofreading errors (single-base mismatches and small insertion/deletion loops); defects cause Lynch syndrome (hereditary nonpolyposis colorectal cancer), not UV dimer repair failure."],
      ["DNA glycosylase that cleaves the N-glycosidic bond of oxidized or deaminated purines", "DNA glycosylases initiate base excision repair (BER) by removing single chemically altered bases (e.g., uracil formed from cytosine deamination, or 8-oxoguanine), not bulky UV photoproducts."],
      ["Non-homologous end-joining (NHEJ) Ku70/Ku80 heterodimer and DNA-dependent protein kinase", "NHEJ repairs double-strand DNA breaks induced by ionizing radiation (X-rays, gamma rays); defective NHEJ causes ataxia-telangiectasia and severe combined immunodeficiency (SCID), not xeroderma pigmentosum."],
      ["Homologous recombination repair protein ATM/BRCA1 that pairs with sister chromatid templates", "Homologous recombination repairs double-strand breaks during the S and G2 phases of the cell cycle; defects in BRCA1/2 increase breast and ovarian cancer, while ATM defects cause ataxia-telangiectasia."]
    ],
    "shortestValidSolution": "Severe sunburns + early skin cancer + UV-induced pyrimidine dimers failure of excision -> Nucleotide excision repair endonuclease.",
    "necessaryInference": "Identify xeroderma pigmentosum from extreme sun sensitivity and skin cancer in early childhood. Correlate UV-induced cyclobutane pyrimidine dimers with the nucleotide excision repair (NER) endonuclease defect.",
    "strongestDistractor": "DNA glycosylase that cleaves the N-glycosidic bond of oxidized or deaminated purines",
    "distractorExclusion": "DNA glycosylases participate in base excision repair (BER) for non-bulky base damage (e.g., deamination), whereas bulky UV-induced pyrimidine dimers require nucleotide excision repair (NER) endonuclease cleavage.",
    "citation": "Kraehenbuehl L, Wengner AM, Pflugfelder A, et al. DNA damage response and repair in skin cancer. J Invest Dermatol. 2019;139(12):2422-2433. PMID: 31398592."
  },
  # 0308
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
      ["Homogentisate 1,2-dioxygenase in the phenylalanine and tyrosine degradation pathway", "Correct. Alkaptonuria is an autosomal recessive disorder of amino acid catabolism caused by deficiency of HOMOGENTISATE 1,2-DIOXYGENASE (homogentisic acid oxidase), an enzyme in the degradation pathway of phenylalanine and tyrosine. Homogentisic acid accumulates and oxidizes upon exposure to air and alkaline pH, forming a black pigment (alkapton) that is excreted in urine. Over decades, retained homogentisic acid polymerizes and deposits in connective tissues, particularly cartilage of the ears (auricular chondropathy), eyes (scleral ochronosis), and joints. This leads to severe, premature, ankylosing-like degenerative arthropathy characterized by intervertebral disc calcification, disc space narrowing, and chronic back pain."],
      ["Phenylalanine hydroxylase in the conversion of phenylalanine to tyrosine", "Phenylalanine hydroxylase deficiency causes phenylketonuria (PKU), characterized by intellectual disability, microcephaly, seizures, hypopigmentation, and a musty odor, not black urine or ochronotic arthropathy."],
      ["Tyrosinase in the melanocyte conversion of tyrosine to melanin", "Tyrosinase deficiency causes oculocutaneous albinism, resulting in extreme hypopigmentation of hair, skin, and irides with photophobia and nystagmus, the opposite of hyperpigmentation."],
      ["Fumarylacetoacetate hydrolase in the final step of tyrosine catabolism", "Fumarylacetoacetate hydrolase deficiency causes hereditary tyrosinemia Type 1, presenting in infancy with acute hepatic failure, renal Fanconi syndrome, rickets, and high risk of hepatocellular carcinoma."],
      ["Branched-chain alpha-ketoacid dehydrogenase in leucine, isoleucine, and valine oxidation", "Branched-chain alpha-ketoacid dehydrogenase deficiency causes maple syrup urine disease, presenting with neonatal lethargy, seizures, cerebral edema, and sweet-smelling urine, not ochronosis."]
    ],
    "shortestValidSolution": "Urine turns black upon air/alkali exposure + ear/sclera blue-black pigment + disc calcifications -> Alkaptonuria (homogentisate 1,2-dioxygenase).",
    "necessaryInference": "Classic triad of urine darkening on standing + ochronotic pigment in ear cartilage/sclera + severe intervertebral disc calcification = Alkaptonuria. The deficient enzyme is homogentisate 1,2-dioxygenase in the tyrosine pathway.",
    "strongestDistractor": "Fumarylacetoacetate hydrolase in the final step of tyrosine catabolism",
    "distractorExclusion": "Fumarylacetoacetate hydrolase causes tyrosinemia type 1 (infantile liver failure and succinylacetone accumulation), not adult ochronosis or intervertebral disc calcifications.",
    "citation": "Phornphutkul C, Introne WJ, Perry MB, et al. Natural history of alkaptonuria. N Engl J Med. 2002;347(26):2111-2121. PMID: 12501223."
  },
  # 0309
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
      ["Thiamine pyrophosphate (vitamin B1)", "Correct. Maple syrup urine disease (MSUD) is an autosomal recessive inborn error of metabolism caused by deficiency of the BRANCHED-CHAIN ALPHA-KETOACID DEHYDROGENASE (BCKDH) complex. BCKDH catalyzes the oxidative decarboxylation of branched-chain alpha-ketoacids derived from LEUCINE, ISOLEUCINE, AND VALINE. Leucine and its ketoacid (alpha-ketoisocaproate) are neurotoxic and accumulate rapidly, causing cerebral edema, alternating tone, dystonia, and encephalopathy within the first week of life. The sweet burnt-sugar odor is due to isoleucine derivatives (alloisoleucine is pathognomonic). Like pyruvate dehydrogenase (PDH) and alpha-ketoglutarate dehydrogenase (alpha-KGDH), the BCKDH multienzyme complex requires FIVE COFACTORS: Thiamine pyrophosphate (B1), Lipoic acid, Coenzyme A (B5), FAD (B2), and NAD+ (B3). A subset of patients has thiamine-responsive MSUD, where high-dose thiamine stabilizes the E1 decarboxylase subunit."],
      ["Pyridoxal phosphate (vitamin B6)", "Pyridoxal phosphate is required for transamination reactions (aminotransferases) and cystathionine beta-synthase, but not for oxidative decarboxylation by BCKDH."],
      ["Tetrahydrobiopterin (BH4)", "Tetrahydrobiopterin is the cofactor for phenylalanine, tyrosine, and tryptophan hydroxylases, as well as nitric oxide synthase, not branched-chain ketoacid decarboxylation."],
      ["Biotin (vitamin B7)", "Biotin serves as the cofactor for carboxylase enzymes (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase), not the BCKDH oxidative decarboxylase complex."],
      ["Adenosylcobalamin (vitamin B12)", "Adenosylcobalamin is the cofactor for methylmalonyl-CoA mutase; it is not utilized in the BCKDH reaction."]
    ],
    "shortestValidSolution": "Infant encephalopathy + sweet burnt-sugar diaper odor + elevated leucine/isoleucine/valine -> Maple syrup urine disease (BCKDH requires thiamine / B1).",
    "necessaryInference": "Recognize MSUD from the sweet diaper odor, ketosis, and accumulation of branched-chain amino acids. Recall that BCKDH is an oxidative decarboxylase requiring the TLCFN cofactors: Thiamine (B1), Lipoic acid, CoA, FAD, NAD+.",
    "strongestDistractor": "Pyridoxal phosphate (vitamin B6)",
    "distractorExclusion": "Vitamin B6 is required for the initial branched-chain aminotransferase step (BCAT), but the blocked, deficient multienzyme complex causing classical MSUD is the downstream BCKDH complex, which requires thiamine (B1).",
    "citation": "Strauss KA, Puffenberger EG, Morton DH. Maple Syrup Urine Disease. In: Adam MP, et al, eds. GeneReviews. University of Washington; 2006. PMID: 20301495."
  },
  # 0310
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
      ["Reduction of NADP+ to NADPH by glucose-6-phosphate dehydrogenase in the hexose monophosphate shunt", "Correct. Glucose-6-phosphate dehydrogenase (G6PD) catalyzes the rate-limiting first step of the pentose phosphate (hexose monophosphate) shunt: the oxidation of glucose-6-phosphate to 6-phosphoglucono-delta-lactone, with the simultaneous REDUCTION OF NADP+ TO NADPH. Because mature erythrocytes lack nuclei and mitochondria, the HMP shunt is their SOLE SOURCE OF NADPH. NADPH is essential to regenerate reduced glutathione (GSH) from oxidized glutathione (GSSG) via glutathione reductase. When exposed to oxidant stress (sulfonamides, fava beans, dapsone, primaquine, infections), GSH is depleted, allowing reactive oxygen species to cross-link sulfhydryl groups on hemoglobin chains. Denatured hemoglobin precipitates into insoluble clumps termed HEINZ BODIES. As erythrocytes transit the splenic cords, splenic red pulp macrophages phagocytose these rigid inclusions, leaving behind characteristic 'BITE CELLS' (degmacytes)."],
      ["Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase in glycolysis", "Pyruvate kinase deficiency impairs ATP generation in glycolysis, causing chronic non-spherocytic extravascular hemolytic anemia with echinocytes (burr cells), without Heinz bodies or bite cells."],
      ["Oxidation of glucose to sorbitol by aldose reductase in the polyol pathway", "Aldose reductase converts glucose to sorbitol; its hyperactivation in hyperglycemia causes osmotic damage in diabetic cataracts and neuropathy, not hemolytic bite cells."],
      ["Phosphorylation of fructose-6-phosphate to fructose-1,6-bisphosphate by phosphofructokinase-1", "Phosphofructokinase-1 (PFK-1) deficiency causes Tarui disease (glycogen storage disease Type VII), presenting with exercise-induced muscle cramps and exertional hemolysis, not oxidant-induced Heinz body bite cells."],
      ["Dephosphorylation of 2,3-bisphosphoglycerate by bisphosphoglycerate phosphatase in the Luebering-Rapoport shunt", "The Luebering-Rapoport glycolytic shunt regulates 2,3-BPG concentration and oxygen-hemoglobin dissociation curve affinity; it does not protect against oxidant stress or generate bite cells."]
    ],
    "shortestValidSolution": "Sulfonamide exposure + Heinz bodies + bite cells -> G6PD deficiency (failure to reduce NADP+ to NADPH).",
    "necessaryInference": "Synthesize oxidant-induced hemolysis post-sulfa + Heinz bodies + bite cells = G6PD deficiency. The primary enzymatic defect is the failure of the HMP shunt to reduce NADP+ to NADPH, leading to unbuffered oxidative hemoglobin precipitation.",
    "strongestDistractor": "Conversion of phosphoenolpyruvate to pyruvate by pyruvate kinase in glycolysis",
    "distractorExclusion": "Pyruvate kinase deficiency impairs ATP generation rather than antioxidant defense and causes chronic hemolysis without precipitated Heinz bodies or bite cells.",
    "citation": "Luzzatto L, Nannelli C, Notaro R. Glucose-6-Phosphate Dehydrogenase Deficiency. Hematol Oncol Clin North Am. 2016;30(2):373-393. PMID: 27040960."
  }
]

print(f"Loaded {len(items)} items for part 1 of Batch 13.")
