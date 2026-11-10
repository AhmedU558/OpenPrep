import { CandidateSpec } from './types';

export const step1Batch26: CandidateSpec[] = [
  {
    "code": "op-c-s1-0626",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Osteogenesis Imperfecta Type 1 Collagen Glycine Substitution",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy is brought to the pediatric genetics clinic after suffering his fourth long-bone fracture following a minor fall from a low sofa. Physical examination demonstrates mild short stature, generalized joint hypermobility, grayish-blue sclerae, and opalescent amber-colored teeth with attrition of the incisal edges (dentinogenesis imperfecta). Audiometry reveals bilateral mild conductive hearing loss. Genetic analysis reveals a point mutation substituting bulky cysteine for glycine within the repeating Gly-X-Y triplet domain of the alpha-1 chain of type I collagen. Which of the following biochemical defects is directly caused by this specific amino acid substitution?",
    "choices": [
      [
        "Steric hindrance that disrupts the tight spatial packing of three procollagen alpha chains into a stable triple-helix conformation",
        "Glycine is the smallest amino acid (having only a single hydrogen atom as its side chain) and is mandatory at every third residue (Gly-X-Y) to allow tight steric packing in the center of the triple helix. Substitution of glycine with a bulky amino acid (e.g., cysteine) sterically disrupts triple-helix folding, causing procollagen degradation or abnormal fibril assembly (dominant-negative osteogenesis imperfecta)."
      ],
      [
        "Failure of extracellular cleavage of terminal N- and C-propeptides by procollagen peptidases",
        "Impaired cleavage of terminal propeptides prevents tropocollagen formation and causes Ehlers-Danlos syndrome (arthrochalasia type), not osteogenesis imperfecta."
      ],
      [
        "Inability of lysyl oxidase to form covalent desmosine and isodesmosine cross-links between tropocollagen monomers",
        "Lysyl oxidase cross-links tropocollagen and elastin using copper as a cofactor; impaired cross-linking occurs in Menkes disease or lathyrism, not classic OI."
      ],
      [
        "Impaired hydroxylation of proline residues within the endoplasmic reticulum due to ascorbic acid deficiency",
        "Proline hydroxylation requires vitamin C (ascorbic acid) as a reducing cofactor; deficiency causes scurvy with bleeding gums and corkscrew hairs, not inherited OI."
      ],
      [
        "Defective transport of assembled collagen fibrils from the Golgi apparatus to the secretory vesicles",
        "Collagen secretory pathway defects can cause skeletal dysplasias, but glycine substitutions specifically destabilize the triple helix itself."
      ]
    ],
    "shortestValidSolution": "Recurrent fractures + blue sclerae + dentinogenesis imperfecta + Gly-to-Cys mutation = OI -> Glycine steric packing disrupted in collagen triple helix.",
    "necessaryInference": "Understand the structural biochemistry of collagen: glycine's tiny side chain (H) is required every third residue for triple helix winding; bulky substitution disrupts folding.",
    "strongestDistractor": "Failure of extracellular cleavage of terminal N- and C-propeptides by procollagen peptidases",
    "distractorExclusion": "Propeptide cleavage failure defines arthrochalasia-type Ehlers-Danlos syndrome (extreme joint laxity without dentinogenesis imperfecta or blue sclerae).",
    "citation": "Marini JC, et al. Osteogenesis imperfecta. Nat Rev Dis Primers. 2017;3:17052. PMID: 28820464.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests amino acid structural biochemistry, steric packing constraints, and genetic pathogenesis of type I collagenopathies.",
      "distractorExclusionNotes": "Distractors differentiate propeptide cleavage (EDS), lysyl oxidase cross-linking (Menkes), prolyl hydroxylation (scurvy), and secretory transport.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0627",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Vascular vs Classical Ehlers-Danlos Syndrome Collagen Defect",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old woman is brought to the emergency department in shock following the sudden onset of excruciating abdominal pain. Physical examination demonstrates thin, translucent skin with visible underlying venous patterns, extensive ecchymoses over her arms and shins without recalled trauma, and characteristic facial features including thin lips, a narrow nose, and prominent eyes. Her joints show hypermobility restricted only to the small joints of the hands. An emergent CT angiogram reveals a ruptured left common iliac artery pseudoaneurysm with massive retroperitoneal hemorrhage. Emergency surgical repair is attempted, but vascular clamps cause tearing of the arterial wall ('tissue friability'). The patient has a heterozygous mutation in the COL3A1 gene. Which of the following collagen types is fundamentally defective in this patient?",
    "choices": [
      [
        "Type III collagen, an essential structural component of distensible hollow visceral organs and blood vessel walls",
        "Vascular Ehlers-Danlos syndrome (vEDS) is caused by autosomal dominant mutations in COL3A1 encoding type III procollagen. Type III collagen provides tensile strength to distensible tissues such as blood vessels, intestine, and uterus. Patients present with life-threatening arterial dissections/ruptures, spontaneous bowel perforation, or gravid uterine rupture, with minimal skin hyperextensibility."
      ],
      [
        "Type V collagen, mediating nucleating interactions and fiber diameter regulation with type I collagen",
        "Classical Ehlers-Danlos syndrome is caused by COL5A1 or COL5A2 mutations affecting type V collagen, presenting with dramatic joint hypermobility and hyperelastic skin with 'cigarette-paper' scars, without spontaneous arterial rupture."
      ],
      [
        "Type IV collagen, assembling into non-fibrillar meshworks within vascular and glomerular basement membranes",
        "Type IV collagen is defective in Alport syndrome (hematuria, sensorineural deafness, lenticonus), not vascular EDS."
      ],
      [
        "Type II collagen, providing compressive stiffness to hyaline and elastic articular cartilage",
        "Type II collagen defects cause chondrodysplasias (e.g., achondrogenesis type II) and Stickler syndrome, not vascular rupture."
      ],
      [
        "Type I collagen, forming high-tensile-strength cross-striated fibrils in bone, tendons, and late scar tissue",
        "Type I collagen defects cause osteogenesis imperfecta with multiple fractures and blue sclerae, not isolated arterial wall friability."
      ]
    ],
    "shortestValidSolution": "Translucent skin + arterial rupture + tissue friability + COL3A1 mutation = Vascular EDS -> Defective Type III collagen.",
    "necessaryInference": "Map collagen types to specific tissues: Type III is found in distensible organs and blood vessels (vascular EDS); Type V in skin and joints (classical EDS).",
    "strongestDistractor": "Type V collagen, mediating nucleating interactions and fiber diameter regulation with type I collagen",
    "distractorExclusion": "Type V collagen mutations cause classical EDS (skin hyperextensibility and wide atrophic scars), which lacks the extreme vascular friability of type III collagen defects.",
    "citation": "Byers PH, et al. Diagnosis, natural history, and management in vascular Ehlers-Danlos syndrome. Am J Med Genet C Semin Med Genet. 2017;175(1):40-47. PMID: 28306228.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires precise discrimination between collagen subtypes (I, II, III, IV, V) based on tissue localization and pathology.",
      "distractorExclusionNotes": "Distractors feature classical EDS (Type V), Alport (Type IV), chondrodysplasias (Type II), and OI (Type I).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0628",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Marfan Syndrome vs Homocystinuria Lens Ectopia & Vascular Risk",
    "provisionalDifficulty": 5,
    "stem": "An 8-year-old boy is referred for genetic evaluation due to tall stature, long slender fingers (arachnodactyly), pectus excavatum, and joint hypermobility. Ophthalmologic examination reveals bilateral lens subluxation (ectopia lentis) displaced inferiorly and nasally. His mother notes that he has developmental delay, intellectual disability, and recently required evaluation for a deep venous thrombosis of the right lower extremity. Blood amino acid analysis demonstrates markedly elevated serum homocysteine and methionine concentrations, with decreased cysteine levels. Which of the following biochemical defects distinguishes this patient's underlying condition from Marfan syndrome?",
    "choices": [
      [
        "Deficiency of cystathionine beta-synthase requiring pyridoxal phosphate (vitamin B6) as a catalytic cofactor",
        "Homocystinuria is an autosomal recessive metabolic disorder most commonly caused by cystathionine beta-synthase (CBS) deficiency (which requires pyridoxal phosphate/vitamin B6). Hallmark features: Marfanoid habitus, intellectual disability, downward/inward lens subluxation (ectopia lentis), and high risk of thromboembolism (arterial and venous). Marfan syndrome features upward/outward lens subluxation and normal cognition."
      ],
      [
        "Haploinsufficiency of fibrillin-1 (FBN1) causing excessive activation of tissue transforming growth factor-beta (TGF-beta)",
        "FBN1 mutations cause Marfan syndrome, presenting with upward/temporal lens subluxation, aortic root aneurysm, and normal intellect without elevated serum homocysteine."
      ],
      [
        "Impaired conversion of methylmalonyl-CoA to succinyl-CoA by vitamin B12-dependent mutase",
        "Methylmalonyl-CoA mutase deficiency causes methylmalonic acidemia (metabolic acidosis, hyperammonemia, lethargy), not a Marfanoid skeletal phenotype."
      ],
      [
        "Deficiency of homogentisate 1,2-dioxygenase causing accumulation of homogentisic acid in connective tissues",
        "Homogentisate dioxygenase deficiency causes alkaptonuria (dark urine, ochronosis, degenerative arthropathy), not homocystinuria or ectopia lentis."
      ],
      [
        "Defect in branched-chain alpha-ketoacid dehydrogenase causing accumulation of leucine, isoleucine, and valine",
        "Branched-chain dehydrogenase deficiency causes maple syrup urine disease (sweet-smelling urine, dystonia, ketoacidosis in neonates)."
      ]
    ],
    "shortestValidSolution": "Marfanoid habitus + downward lens subluxation + thrombosis + high homocysteine/methionine = Homocystinuria -> Cystathionine beta-synthase (B6) defect.",
    "necessaryInference": "Contrast homocystinuria with Marfan syndrome: homocystinuria has intellectual disability, thrombosis, and downward/inward lens subluxation via CBS enzyme deficiency.",
    "strongestDistractor": "Haploinsufficiency of fibrillin-1 (FBN1) causing excessive activation of tissue transforming growth factor-beta (TGF-beta)",
    "distractorExclusion": "FBN1 mutations cause Marfan syndrome; lens ectopia is upward and outward, and patients have normal intellect and normal homocysteine levels.",
    "citation": "Sacharow SJ, et al. Homocystinuria Caused by Cystathionine Beta-Synthase Deficiency. GeneReviews. 2017. PMID: 20301697.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical differentiation (direction of lens ectopia, thrombophilia, cognition) mapped to specific inborn metabolic error.",
      "distractorExclusionNotes": "Distractors feature Marfan (FBN1), methylmalonic acidemia, alkaptonuria, and MSUD.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0629",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Musculoskeletal",
    "topic": "Osteopetrosis Carbonic Anhydrase II Defect & Acidification",
    "provisionalDifficulty": 5,
    "stem": "A 6-month-old infant is evaluated for failure to thrive, progressive hearing loss, and bilateral optic nerve atrophy. Physical examination demonstrates marked hepatosplenomegaly and frontal bossing. Complete blood count demonstrates hemoglobin 6.8 g/dL, WBC 3,200/mm3, and platelets 42,000/mm3; peripheral blood smear displays leucoerythroblastosis with tear-drop poikilocytes. Skeletal survey reveals diffuse, symmetrical, dense thickening of all bones with obliteration of medullary cavities ('bone-in-bone' appearance and Erlenmeyer flask deformities). Genetic sequencing reveals a homozygous loss-of-function mutation in the carbonic anhydrase II (CA-II) gene. Which of the following cellular processes is primarily impaired in this infant's osteoclasts?",
    "choices": [
      [
        "Hydration of carbon dioxide to generate protons required for extracellular acidification of the resorption lacuna (Howship lacuna)",
        "Osteoclasts dissolve mineralized bone matrix by pumping protons (H+) via vacuolar H+-ATPase into the sealed Howship resorption lacuna. Protons are generated intracellularly by carbonic anhydrase II (CO2 + H2O <-> H+ + HCO3-). Deficiency of CA-II prevents acidification, abolishing mineralized hydroxyapatite dissolution and producing osteopetrosis with dense, unresorbed bone obliteration of the marrow."
      ],
      [
        "Synthesis and secretion of tartrate-resistant acid phosphatase into the extracellular bone compartment",
        "Tartrate-resistant acid phosphatase (TRAP) is an osteoclast enzyme marker, but CA-II deficiency specifically blocks proton generation rather than TRAP synthesis."
      ],
      [
        "Expression of receptor activator of nuclear factor-kappa B (RANK) on osteoclast precursor membranes",
        "RANK expression mediates osteoclast differentiation and is stimulated by osteoblast-derived RANKL; it does not depend on carbonic anhydrase enzymatic activity."
      ],
      [
        "Exocytosis of cathepsin K to cleave type I collagen within the alkaline bone matrix",
        "Cathepsin K degrades the organic collagen matrix, but functions optimally in an acidic environment created by CA-II-dependent proton secretion."
      ],
      [
        "Endocytic uptake of osteopontin to facilitate osteoclast alpha-v-beta-3 integrin sealing zone adhesion",
        "Integrin alpha-v-beta-3 mediates podosome sealing zone attachment, a structural process independent of carbonic anhydrase II enzymatic catalysis."
      ]
    ],
    "shortestValidSolution": "Dense Erlenmeyer flask bones + pancytopenia + CA-II mutation = Osteopetrosis -> Osteoclasts cannot generate H+ to acidify Howship lacuna.",
    "necessaryInference": "Detail the osteoclast proton secretion mechanism: CA-II generates H+ + HCO3- from CO2 + H2O; H+ is pumped out by H+-ATPase to dissolve bone mineral.",
    "strongestDistractor": "Exocytosis of cathepsin K to cleave type I collagen within the alkaline bone matrix",
    "distractorExclusion": "Cathepsin K degrades organic matrix and requires an acidic (not alkaline) microenvironment generated by CA-II proton production.",
    "citation": "Sobacchi C, et al. The mutational spectrum of human malignant infantile osteopetrosis. Hum Mol Genet. 2013;22(22):4502-4512. PMID: 23793448.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Deep cell biology of osteoclast bone resorption, sealing zone mechanics, and enzymatic proton generation.",
      "distractorExclusionNotes": "Distractors feature TRAP, RANK signaling, cathepsin K, and integrin adhesion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0630",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Paget Disease of Bone RANK-L / NF-kappaB Signaling Pathway",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents with persistent right thigh pain, an increasing hat size over the past 3 years, and progressive sensorineural hearing loss. Physical examination demonstrates bowing of the right femur and localized cutaneous warmth over the anterior mid-shaft. Laboratory evaluation reveals: serum calcium 9.5 mg/dL, serum phosphorus 3.6 mg/dL, serum parathyroid hormone 28 pg/mL, and markedly elevated serum alkaline phosphatase at 680 U/L (normal 35-120 U/L). Plain radiographs of the right femur show cortical thickening and coarse, disorganized trabeculae. Bone biopsy reveals a prominent 'mosaic' or 'jigsaw puzzle' pattern of lamellar bone with prominent cement lines separating irregular osteons. Which of the following molecular signaling pathways is hyperactivated in the initial osteolytic phase of this disorder?",
    "choices": [
      [
        "RANK-L binding to osteoclast RANK receptors, triggering nuclear factor-kappa B (NF-kappaB) transcription of osteoclastogenic factors",
        "Paget disease of bone (osteitis deformans) is initiated by marked osteoclast hyperactivity (often associated with SQSTM1 mutations encoding p62), which enhances RANK-L-mediated activation of NF-kappaB. This drives intense osteolytic bone resorption, followed by rapid, disorganized osteoblastic deposition of woven and lamellar bone with cement lines (mosaic pattern)."
      ],
      [
        "Parathyroid hormone-related peptide (PTHrP) binding to Gs-coupled receptors, driving cyclic AMP-mediated hypercalcemia",
        "Paget disease features normal serum calcium and phosphorus; hypercalcemia suggests immobilization or concurrent primary hyperparathyroidism."
      ],
      [
        "Wnt/beta-catenin pathway activation by sclerostin down-regulation stimulating constitutive osteoblastic mineralization",
        "Wnt/beta-catenin drives osteoblast bone formation (as seen in sclerosteosis), whereas the initial primary cellular defect in Paget disease is osteoclast hyperactivity."
      ],
      [
        "Fibroblast growth factor-23 (FGF-23) secretion by osteocytes suppressing renal sodium-phosphate cotransporter 2a (NaPi-2a)",
        "FGF-23 mediates renal phosphate wasting in oncogenic osteomalacia and X-linked hypophosphatemia, which present with low serum phosphate, not Paget disease."
      ],
      [
        "Inhibition of osteoprotegerin (OPG) degradation leading to excessive suppression of osteoclast differentiation",
        "Osteoprotegerin is a decoy receptor that blocks RANK-L; excessive OPG would suppress osteoclasts (causing osteopetrosis), whereas Paget disease has hyperactive osteoclasts."
      ]
    ],
    "shortestValidSolution": "Hat size increase + high alk phos + mosaic bone pattern = Paget disease -> Initial phase is RANK-L/RANK/NF-kappaB osteoclast hyperactivation.",
    "necessaryInference": "Recognize Paget disease stages: initial phase is osteoclastic (RANK-L/NF-kappaB mediated), followed by mixed, then quiescent osteosclerotic phase with mosaic cement lines.",
    "strongestDistractor": "Parathyroid hormone-related peptide (PTHrP) binding to Gs-coupled receptors, driving cyclic AMP-mediated hypercalcemia",
    "distractorExclusion": "Serum calcium and phosphorus are characteristically normal in uncomplicated Paget disease; PTHrP mediates humoral hypercalcemia of malignancy.",
    "citation": "Ralston SH, et al. Diagnosis and Management of Paget's Disease of Bone in Adults: A Clinical Guideline. J Bone Miner Res. 2019;34(4):579-604. PMID: 30803025.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates clinical symptoms (head circumference, hearing loss), isolated alk phos elevation, mosaic histopathology, and RANK/NF-kappaB molecular signaling.",
      "distractorExclusionNotes": "Distractors feature PTHrP hypercalcemia, Wnt/sclerostin, FGF-23 phosphate wasting, and OPG decoy mechanics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0631",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Achondroplasia FGFR3 Constitutive Activation & Growth Plate Dynamics",
    "provisionalDifficulty": 5,
    "stem": "A 2-day-old male infant born to parents of average stature is evaluated in the newborn nursery for physical abnormalities. Physical examination demonstrates marked disproportionate short stature with shortening of the proximal extremities (rhizomelia), macrocephaly with frontal bossing, midface hypoplasia with a depressed nasal bridge, and trident configuration of the hands. Plain radiographs demonstrate flared metaphyses and narrowing of the interpedicular distances in the lumbar spine. Molecular genetic testing identifies a de novo heterozygous G-to-A transition at nucleotide 1138 of the FGFR3 gene, resulting in a Gly380Arg substitution. Which of the following alterations in epiphyseal growth plate chondrocytes is directly caused by this mutation?",
    "choices": [
      [
        "Constitutive ligand-independent activation of receptor tyrosine kinase signaling that prematurely inhibits chondrocyte proliferation and endochondral ossification",
        "Achondroplasia is caused by a gain-of-function mutation in FGFR3 (fibroblast growth factor receptor 3). The Gly380Arg substitution constitutively activates this receptor tyrosine kinase, which normally serves as a negative regulator of bone growth. Excessive FGFR3 signaling activates STAT1 and MAPK pathways that prematurely arrest chondrocyte proliferation in the proliferative zone of epiphyseal growth plates, impairing endochondral ossification while leaving intramembranous ossification intact."
      ],
      [
        "Loss-of-function impairment of parathyroid hormone-related peptide (PTHrP) signaling, accelerating osteoblastic apoptosis",
        "PTHrP stimulates chondrocyte proliferation and delays differentiation; achondroplasia involves gain of FGFR3 tyrosine kinase activity rather than PTHrP receptor loss."
      ],
      [
        "Defective synthesis of type II collagen alpha-1 chains, causing severe disruption of the articular cartilage fibrillar architecture",
        "Type II collagen mutations cause achondrogenesis type II and Stickler syndrome, presenting with fatal perinatal dwarfism or cleft palate, not classical rhizomelic achondroplasia."
      ],
      [
        "Failure of periosteal osteoblast differentiation, preventing subperiosteal intramembranous bone deposition",
        "Intramembranous ossification (forming the skull vault and clavicles) is completely spared in achondroplasia, which explains why the calvarium is large (macrocephaly with frontal bossing)."
      ],
      [
        "Impaired osteoclast recruitment to the chondro-osseous junction, preventing primary spongiosa vascularization",
        "Osteoclast recruitment failure occurs in osteopetrosis or matrix metalloproteinase-9 deficiency, distinct from chondrocyte growth plate arrest in achondroplasia."
      ]
    ],
    "shortestValidSolution": "Rhizomelia + macrocephaly + FGFR3 mutation = Achondroplasia -> Constitutive activation of FGFR3 inhibits chondrocyte proliferation in endochondral ossification.",
    "necessaryInference": "Remember that FGFR3 is a negative regulator of chondrocyte growth; gain-of-function mutation causes constitutive inhibition of endochondral bone formation.",
    "strongestDistractor": "Failure of periosteal osteoblast differentiation, preventing subperiosteal intramembranous bone deposition",
    "distractorExclusion": "Intramembranous ossification does not require cartilaginous scaffolding and is intact, which accounts for the enlarged membranous cranial vault (macrocephaly).",
    "citation": "Horton WA, et al. Achondroplasia. Lancet. 2007;370(9582):162-172. PMID: 17630040.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Deduces receptor pharmacology (gain of negative regulator) and embryological ossification modes (endochondral vs intramembranous).",
      "distractorExclusionNotes": "Distractors feature PTHrP, Type II collagen, intramembranous ossification failure, or osteoclast recruitment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0632",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Duchenne vs Becker Muscular Dystrophy Molecular Genetics",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old boy is brought to the clinic because of difficulty running, frequent falling, and trouble climbing stairs. On physical examination, when rising from the floor, he places his hands on his knees and walks his hands up his thighs (Gowers sign). Bilateral enlargement and rubbery firmness of the calf muscles (pseudohypertrophy) are noted. Serum creatine kinase is severely elevated at 18,500 U/L (normal 30-200 U/L). Multiplex ligation-dependent probe amplification (MLPA) reveals a deletion spanning exons 45 through 50 of the dystrophin gene (DMD) on chromosome Xp21. Sequencing confirms that this deletion alters the reading frame, creating a premature termination codon within exon 51. Which of the following consequences at the protein level best explains why this mutation causes a severe (Duchenne) rather than a mild (Becker) phenotype?",
    "choices": [
      [
        "The frameshift mutation triggers nonsense-mediated mRNA decay resulting in a complete or near-complete absence of functional dystrophin protein at the sarcolemma",
        "Duchenne muscular dystrophy (DMD) is characteristically caused by frameshift deletions or nonsense mutations in the DMD gene that disrupt the reading frame, producing a premature stop codon. The aberrant transcript undergoes nonsense-mediated decay, resulting in virtually complete loss (<1% normal levels) of dystrophin. In contrast, Becker muscular dystrophy (BMD) involves non-frameshift (in-frame) deletions that yield a shortened, partially functional dystrophin protein."
      ],
      [
        "The deletion preserves the open reading frame, yielding an internally deleted, truncated dystrophin that retains partial sarcolemmal anchoring function",
        "In-frame deletions that preserve the translational reading frame produce truncated, partially functional dystrophin, which is the exact molecular mechanism of the milder Becker muscular dystrophy."
      ],
      [
        "The mutation produces a dominant-negative peptide that aggregates within the sarcoplasmic reticulum and blocks ryanodine channel opening",
        "DMD is an X-linked recessive disorder characterized by loss of dystrophin function, not a dominant-negative sarcoplasmic toxic gain-of-function."
      ],
      [
        "The deletion disrupts the mitochondrial targeting sequence, preventing dystrophin translocation into the inner mitochondrial membrane",
        "Dystrophin is a subsarcolemmal cytoskeletal protein that links intracellular F-actin to extracellular laminin-2 via the dystroglycan complex; it is not a mitochondrial protein."
      ],
      [
        "The mutated dystrophin undergoes excessive post-translational polyubiquitination that causes selective degradation of voltage-gated sodium channels",
        "Dystrophin loss leads to mechanical fragility of the sarcolemma with calcium influx and myofiber necrosis; it does not selectively degrade sodium channels."
      ]
    ],
    "shortestValidSolution": "Gowers sign + calf pseudohypertrophy + high CK + frameshift deletion = DMD -> Reading frame disruption causes nonsense-mediated decay and complete dystrophin loss.",
    "necessaryInference": "Apply the reading frame rule: frameshift deletions = premature stop codon = complete absence of dystrophin (Duchenne); in-frame deletions = truncated protein (Becker).",
    "strongestDistractor": "The deletion preserves the open reading frame, yielding an internally deleted, truncated dystrophin that retains partial sarcolemmal anchoring function",
    "distractorExclusion": "Preservation of the reading frame produces truncated dystrophin with partial function, which defines the milder Becker phenotype, directly contrasting with Duchenne.",
    "citation": "Duan D, et al. Duchenne muscular dystrophy. Nat Rev Dis Primers. 2021;7(1):13. PMID: 33602943.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests molecular genetic translational mechanics (frameshift vs in-frame, nonsense-mediated decay) determining disease severity.",
      "distractorExclusionNotes": "Distractors feature the Becker in-frame mechanism, dominant-negative aggregation, mitochondrial mistargeting, or ubiquitin degradation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0633",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Musculoskeletal",
    "topic": "Myasthenia Gravis vs Lambert-Eaton Electrophysiology",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with a 40-pack-year smoking history presents with progressive proximal leg weakness that makes it difficult to rise from a low chair. He reports that his leg strength actually seems to improve slightly after walking around his house for several minutes. He also complains of a dry mouth and erectile dysfunction. Physical examination reveals 3/5 strength in the bilateral hip flexors that improves to 4+/5 after 15 seconds of maximal isometric contraction. Deep tendon reflexes at the patella and Achilles are absent at baseline but become easily elicitable following brief exercise. Repetitive nerve stimulation testing is performed. Which of the following electrophysiological responses is most characteristically observed during high-frequency (50 Hz) repetitive nerve stimulation or immediately following maximal isometric exercise?",
    "choices": [
      [
        "A marked incremental increase (facilitation) of the compound muscle action potential (CMAP) amplitude exceeding 100% above baseline",
        "Lambert-Eaton myasthenic syndrome (LEMS) is an autoimmune disorder against presynaptic P/Q-type voltage-gated calcium channels, often paraneoplastic (small cell lung cancer). Reduced Ca2+ influx impairs baseline acetylcholine exocytosis, yielding low baseline CMAP amplitudes. High-frequency (20-50 Hz) stimulation or brief exercise accumulates calcium within the presynaptic nerve terminal, facilitating massive ACh vesicle release and producing a dramatic incremental response (>100% increase) in CMAP amplitude."
      ],
      [
        "A progressive decremental reduction of compound muscle action potential amplitude greater than 10% during low-frequency (3 Hz) stimulation",
        "A decremental response at low-frequency stimulation occurs in Myasthenia Gravis (autoantibodies against postsynaptic nicotinic ACh receptors), which worsens with exercise rather than improving."
      ],
      [
        "Complete conduction block across the peripheral nerve segment without any change in distal latency or motor conduction velocity",
        "Conduction block characterizes focal demyelinating neuropathies (e.g., multifocal motor neuropathy or acute entrapment), not a presynaptic neuromuscular junction disorder."
      ],
      [
        "Sustained spontaneous high-frequency electrical discharges displaying wax-and-wane amplitude and frequency (myotonic runs)",
        "Myotonic discharges producing a 'dive-bomber' sound on electromyography define myotonic dystrophy, caused by CTG trinucleotide expansion in DMPK."
      ],
      [
        "Prolongation of distal motor latencies with severe temporal dispersion reflecting segmental demyelination of large myelinated fibers",
        "Temporal dispersion and prolonged distal latencies are electrophysiological hallmarks of chronic inflammatory demyelinating polyneuropathy (CIDP)."
      ]
    ],
    "shortestValidSolution": "Proximal weakness improving with exercise + dry mouth + smoking history = LEMS -> Incremental CMAP facilitation (>100%) at high frequency.",
    "necessaryInference": "Contrast neuromuscular junction channelopathies: LEMS features presynaptic P/Q Ca2+ channel antibodies with post-exercise incremental CMAP facilitation; MG has postsynaptic decremental response.",
    "strongestDistractor": "A progressive decremental reduction of compound muscle action potential amplitude greater than 10% during low-frequency (3 Hz) stimulation",
    "distractorExclusion": "Decremental response at 3 Hz stimulation defines postsynaptic myasthenia gravis, in which muscle weakness worsens with repetitive activity.",
    "citation": "Titulaer MJ, et al. The Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Correlates clinical findings (post-exercise facilitation, autonomic dysfunction) with precise electrophysiological electrodiagnostic criteria.",
      "distractorExclusionNotes": "Distractors feature myasthenia gravis, demyelinating conduction block, myotonic runs, and CIDP dispersion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0634",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Polymyositis vs Dermatomyositis Immunopathology",
    "provisionalDifficulty": 4,
    "stem": "A 49-year-old woman presents with progressive, painless, symmetrical muscle weakness involving her shoulders and pelvic girdle over the past 4 months. She has difficulty combing her hair and climbing stairs. Physical examination reveals 3/5 strength in bilateral deltoids and iliopsoas muscles with normal sensation and preserved deep tendon reflexes. Skin examination reveals no rashes, heliotrope discoloration, or Gottron papules. Laboratory evaluation demonstrates: serum creatine kinase 4,800 U/L (normal 30-200 U/L), serum aldolase 32 U/L (normal < 8 U/L), and positive anti-Jo-1 (histidyl-tRNA synthetase) antibodies. A quadriceps muscle biopsy is performed. Which of the following histopathological findings is most characteristic of this patient's condition?",
    "choices": [
      [
        "Endomysial mononuclear inflammatory infiltrate consisting predominantly of CD8+ cytotoxic T lymphocytes surrounding and invading non-necrotic muscle fibers with diffuse sarcolemmal MHC class I overexpression",
        "Polymyositis is characterized by an endomysial inflammatory infiltrate consisting predominantly of CD8+ cytotoxic T lymphocytes and macrophages that directly invade intact, non-necrotic myofibers expressing MHC class I antigens. In contrast, dermatomyositis is a complement-mediated microangiopathy with perimysial CD4+ T cell/B cell infiltrates and pathognomonic perifascicular muscle fiber atrophy."
      ],
      [
        "Perimysial and perivascular CD4+ T lymphocyte and B lymphocyte infiltrates with prominent perifascicular myofiber atrophy and capillary necrosis",
        "Perimysial CD4+ infiltrates and perifascicular atrophy are pathognomonic for dermatomyositis, which also features cutaneous findings (heliotrope rash, Gottron papules) absent in this patient."
      ],
      [
        "Extensive granulomatous inflammation containing multinucleated Langerhans-type giant cells within the epimysial connective tissue",
        "Granulomatous myositis is seen in muscular sarcoidosis or tuberculosis, not idiopathic autoimmune polymyositis."
      ],
      [
        "Basophilic rimmed vacuoles containing amyloid-like aggregates positive for beta-amyloid and phosphorylated tau on modified Gomori trichrome",
        "Rimmed vacuoles containing beta-amyloid characterize inclusion body myositis (IBM), which typically presents in older men (>50) with distal asymmetric weakness (wrist/finger flexors and quadriceps)."
      ],
      [
        "Subsarcolemmal accumulation of abnormal mitochondria producing 'ragged-red fibers' on modified Gomori trichrome stain",
        "Ragged-red fibers are characteristic of mitochondrial myopathies (e.g., MELAS, MERRF) caused by mitochondrial DNA mutations."
      ]
    ],
    "shortestValidSolution": "Symmetric proximal weakness + high CK + anti-Jo-1 + no rash = Polymyositis -> Endomysial CD8+ T-cell invasion of non-necrotic fibers with MHC-I.",
    "necessaryInference": "Distinguish inflammatory myopathies histologically: Polymyositis = endomysial CD8+ cytotoxic invasion; Dermatomyositis = perimysial CD4+/B-cell with perifascicular atrophy; IBM = rimmed vacuoles.",
    "strongestDistractor": "Perimysial and perivascular CD4+ T lymphocyte and B lymphocyte infiltrates with prominent perifascicular myofiber atrophy and capillary necrosis",
    "distractorExclusion": "Perifascicular atrophy and perimysial CD4+ infiltrates define dermatomyositis, which presents with cutaneous manifestations (heliotrope rash, Gottron papules) that are completely absent here.",
    "citation": "Dalakas MC. Inflammatory muscle diseases. N Engl J Med. 2015;372(18):1734-1747. PMID: 25923553.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests microscopic discrimination between polymyositis, dermatomyositis, inclusion body myositis, and mitochondrial myopathy.",
      "distractorExclusionNotes": "Distractors feature dermatomyositis (perimysial/perifascicular), sarcoidosis (granulomas), IBM (rimmed vacuoles), and mitochondrial myopathy (ragged-red).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0635",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Giant Cell Arteritis Granulomatous Pathogenesis & Elastic Lamina",
    "provisionalDifficulty": 5,
    "stem": "A 73-year-old woman presents to the physician with a 3-week history of throbbing unilateral right-sided headache, scalp tenderness when brushing her hair, and jaw ache that develops after 2 minutes of chewing tough foods (jaw claudication). She also reports aching and stiffness in her neck, shoulders, and hips each morning lasting over an hour (polymyalgia rheumatica). Visual acuity is intact. Physical examination reveals a thickened, tender, non-pulsatile right superficial temporal artery. Erythrocyte sedimentation rate (ESR) is markedly elevated at 104 mm/h and C-reactive protein is 48 mg/L. A temporal artery biopsy is performed. Which of the following immunopathological cascades is primarily responsible for the vascular remodeling observed in this patient's biopsy?",
    "choices": [
      [
        "Dendritic cell-mediated activation of CD4+ Th1 and Th17 lymphocytes with interferon-gamma and interleukin-6 secretion, recruiting macrophages that form granulomas and disrupt the internal elastic lamina",
        "Giant cell (temporal) arteritis is an antigen-driven systemic vasculitis. Adventitial dendritic cells present unknown arterial antigens to CD4+ T cells, which differentiate into Th1 (producing IFN-gamma) and Th17 (producing IL-17) subsets. High systemic IL-6 drives ESR/CRP. Macrophages differentiate into multinucleated giant cells and secrete matrix metalloproteinases (MMPs) and reactive oxygen species that fragment the internal elastic lamina."
      ],
      [
        "Deposition of circulating IgG-IgM immune complexes in the vessel wall, triggering classical complement activation and neutrophilic leukocytoclasia",
        "Immune complex deposition (Type III hypersensitivity) with neutrophilic leukocytoclasia defines leukocytoclastic vasculitis or cryoglobulinemic vasculitis, not cell-mediated granulomatous GCA."
      ],
      [
        "Direct cytotoxic autoantibody binding to endothelial proteinase-3, inducing respiratory burst and necrotizing crescentic injury",
        "Anti-proteinase-3 (c-ANCA) autoantibodies cause granulomatosis with polyangiitis (GPA), typically presenting with sinusitis, pulmonary nodules, and necrotizing glomerulonephritis."
      ],
      [
        "Clonal expansion of smooth muscle cells driven by platelet-derived growth factor following endothelial shear stress injury",
        "Smooth muscle clonal proliferation driven by PDGF is the hallmark of atherosclerotic plaque fibrointimal hyperplasia, not inflammatory granulomatous vasculitis."
      ],
      [
        "Mast cell degranulation triggering IgE-mediated eosinophilic infiltration with Charcot-Leyden crystal formation",
        "Eosinophilic infiltration with Charcot-Leyden crystals characterizes eosinophilic granulomatosis with polyangiitis (EGPA / Churg-Strauss), not giant cell arteritis."
      ]
    ],
    "shortestValidSolution": "Elderly female + headache + jaw claudication + high ESR = Giant Cell Arteritis -> CD4+ Th1/Th17 + macrophage granulomas disrupting internal elastic lamina.",
    "necessaryInference": "Identify the cellular immunology of GCA: dendritic cell antigen presentation -> Th1 (IFN-gamma) & Th17 (IL-6) -> macrophage activation and fragmentation of internal elastic lamina.",
    "strongestDistractor": "Deposition of circulating IgG-IgM immune complexes in the vessel wall, triggering classical complement activation and neutrophilic leukocytoclasia",
    "distractorExclusion": "GCA is a cell-mediated (Type IV) granulomatous vasculitis; it is not mediated by circulating immune complex deposition or complement activation.",
    "citation": "Weyand CM, Goronzy JJ. Medium- and large-vessel vasculitis. N Engl J Med. 2003;349(2):160-169. PMID: 12853590.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive immunopathology of large-vessel vasculitis detailing T-cell subsets, cytokines (IL-6, IFN-gamma), and structural elastic lamina breakdown.",
      "distractorExclusionNotes": "Distractors feature immune complex vasculitis, ANCA-associated vasculitis (GPA), atherosclerosis, and EGPA.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0636",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Polyarteritis Nodosa Transmural Necrotizing Vasculitis",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old man presents with a 2-month history of fatigue, intermittent low-grade fevers, non-radiating abdominal pain after meals, and weight loss of 6 kg. Over the past week, he has noticed numbness and foot drop in his right lower extremity (mononeuritis multiplex). Blood pressure is 168/102 mm Hg. Physical examination reveals livedo reticularis on both thighs and a tender subcutaneous nodule over the right calf. Laboratory testing reveals elevated serum creatinine at 2.2 mg/dL; urinalysis shows trace proteinuria without hematuria or red cell casts. Serologic testing is positive for hepatitis B surface antigen (HBsAg) and HBeAg. ANCA antibodies are negative. A biopsy of the subcutaneous calf nodule reveals segmental, transmural necrotizing inflammation with prominent eosinophilic fibrinoid necrosis affecting medium-sized muscular arteries. Which of the following vascular beds is classically characteristically spared by this disease process?",
    "choices": [
      [
        "Pulmonary arterial vasculature, which is completely spared from necrotizing inflammation",
        "Polyarteritis nodosa (PAN) is a systemic necrotizing vasculitis affecting medium and small muscular arteries, classically sparing the pulmonary circulation. It affects renal, mesenteric, coronary, and peripheral nerve vessels (causing mononeuritis multiplex), often presenting with hypertension, microaneurysms, and livedo reticularis, with strong association with active Hepatitis B infection (HBsAg-anti-HBs immune complexes)."
      ],
      [
        "Renal interlobar and arcuate arteries, leading to microaneurysm formation and renovascular hypertension",
        "Renal arteries are the most frequently involved vessels in PAN (affecting >80% of patients), producing ischemia, microaneurysms, and secondary renin-dependent hypertension without true glomerulonephritis."
      ],
      [
        "Mesenteric arterial arcade, predisposing to postprandial intestinal angina and ischemic bowel infarction",
        "Mesenteric vessels are commonly affected in PAN, producing abdominal pain ('intestinal angina') and predisposing to bowel perforation."
      ],
      [
        "Vasa nervorum supplying peripheral nerves, causing asymmetric axonal ischemia and mononeuritis multiplex",
        "Vasa nervorum necrotizing vasculitis causes ischemic nerve infarction manifesting as mononeuritis multiplex (e.g., wrist drop or foot drop), a classic hallmark of PAN."
      ],
      [
        "Coronary muscular arterial branches, leading to subendocardial ischemia in young adults",
        "Coronary arteries are involved in up to 50% of PAN autopsy cases and are a leading cause of early mortality."
      ]
    ],
    "shortestValidSolution": "Foot drop + livedo reticularis + Hep B + fibrinoid necrosis of medium arteries = PAN -> Classically spares pulmonary arteries.",
    "necessaryInference": "Recall the classic negative rule of vasculitides: Polyarteritis nodosa involves renal, mesenteric, coronary, and neurovascular beds, but characteristically spares the pulmonary vasculature.",
    "strongestDistractor": "Renal interlobar and arcuate arteries, leading to microaneurysm formation and renovascular hypertension",
    "distractorExclusion": "Renal arterial involvement is the most common and clinically decisive feature of PAN, directly causing the severe hypertension seen in this patient.",
    "citation": "de Menthon M, et al. Polyarteritis nodosa. Semin Immunopathol. 2014;36(4):453-467. PMID: 24715104.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests organ-specific vascular distribution of necrotizing medium-vessel vasculitis and viral association (HBV).",
      "distractorExclusionNotes": "Distractors feature heavily involved target vascular beds (renal, mesenteric, vasa nervorum, coronary).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0637",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Musculoskeletal",
    "topic": "Ankylosing Spondylitis HLA-B27 Pathogenesis & Enthesitis",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old man presents with chronic lower back pain and morning stiffness that has worsened over the past 8 months. The stiffness is most severe upon waking, lasts for more than 90 minutes, and improves significantly with vigorous exercise or swimming, but worsens with prolonged rest. Over the past month, he has also experienced severe heel pain at the insertion of the Achilles tendon (enthesitis) and an episode of painful, red left eye with photophobia diagnosed as acute anterior uveitis. Pelvic radiography demonstrates bilateral, symmetrical sacroiliitis with subchondral sclerosis and joint space narrowing. Laboratory evaluation is positive for the HLA-B27 allele. Which of the following immunopathological mechanisms is directly linked to the pathogenesis of this seronegative spondyloarthropathy?",
    "choices": [
      [
        "Misfolding of HLA-B27 heavy chains within the endoplasmic reticulum triggers cellular ER stress and autophagy, stimulating excessive interleukin-23 and interleukin-17 axis activation",
        "Ankylosing spondylitis is strongly linked to HLA-B27 (an MHC class I molecule). Two leading pathogenic mechanisms involve: (1) HLA-B27 heavy chains tend to misfold in the ER, triggering the unfolded protein response (UPR/ER stress) and promoting IL-23 secretion by dendritic cells; and (2) IL-23 stimulates Th17 and innate lymphoid cells (ILC3) to produce IL-17 and TNF-alpha, which drive chronic inflammation and new bone formation (syndesmophytes) at fibrocartilaginous entheses."
      ],
      [
        "Cleavage of native synovial aggrecan by circulating anti-cyclic citrullinated peptide IgG antibodies",
        "Anti-CCP autoantibodies and citrullinated protein recognition drive rheumatoid arthritis, a seropositive arthropathy affecting synovial joints, distinct from seronegative enthesitis."
      ],
      [
        "Deposition of IgA-containing immune complexes in the pericapillary basement membranes of the ciliary body and spinal ligaments",
        "IgA immune complexes cause IgA vasculitis (Henoch-Sch\u00f6nlein) or IgA nephropathy, not HLA-B27 axial spondyloarthritis."
      ],
      [
        "Direct cytotoxic autoantibody-mediated destruction of type II collagen within articular hyaline cartilage",
        "Autoantibodies to type II collagen can occur in inflammatory joint models, but AS is driven by entheseal T cell and cytokine (IL-23/IL-17) signaling rather than direct anti-collagen cytotoxicity."
      ],
      [
        "Failure of central thymic negative selection allowing survival of autoreactive CD4+ T cells specific for myelin basic protein",
        "Myelin basic protein autoreactivity drives multiple sclerosis or experimental autoimmune encephalomyelitis, which targets CNS myelin, not skeletal entheses."
      ]
    ],
    "shortestValidSolution": "Young male + inflammatory back pain + Achilles enthesitis + uveitis + HLA-B27 = Ankylosing Spondylitis -> HLA-B27 ER misfolding stimulates IL-23/IL-17 axis.",
    "necessaryInference": "Connect HLA-B27 molecular biology to cellular immunology: heavy chain ER stress/UPR drives the IL-23/IL-17 cytokine cascade that induces entheseal inflammation and osteogenesis.",
    "strongestDistractor": "Cleavage of native synovial aggrecan by circulating anti-cyclic citrullinated peptide IgG antibodies",
    "distractorExclusion": "Anti-CCP antibodies drive rheumatoid arthritis (seropositive synovitis), whereas ankylosing spondylitis is seronegative and primarily targets fibrocartilaginous entheses.",
    "citation": "Sieper J, Poddubnyy D. Axial spondyloarthritis. Lancet. 2017;390(10090):73-84. PMID: 28110912.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests modern molecular immunology of spondyloarthropathies (ER stress, UPR, IL-23/IL-17 pathway).",
      "distractorExclusionNotes": "Distractors feature rheumatoid arthritis (anti-CCP), IgA vasculitis, type II collagen cytotoxicity, and multiple sclerosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0638",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Musculoskeletal",
    "topic": "Systemic Sclerosis Autoantibody Profiles & Organ Involvement",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman presents with progressive skin tightening over her chest, abdomen, upper arms, and thighs that began 8 months ago. She also reports severe heartburn, dysphagia to solids and liquids, and exertional shortness of breath. Physical examination demonstrates diffuse sclerodactyly, flexion contractures of the fingers, facial skin tightening with microstomia, and bilateral basilar 'velcro-like' crackles on pulmonary auscultation. High-resolution chest CT demonstrates bilateral lower-lobe subpleural reticular opacities and traction bronchiectasis consistent with nonspecific interstitial pneumonia (NSIP). Echocardiography shows normal estimated pulmonary arterial systolic pressure and normal right ventricular size. Which of the following autoantibody specificities is most strongly associated with this diffuse cutaneous clinical presentation?",
    "choices": [
      [
        "Antibodies against DNA topoisomerase I (anti-Scl-70), associated with diffuse cutaneous involvement and early progressive interstitial pulmonary fibrosis",
        "Systemic sclerosis is classified into diffuse cutaneous (dcSSc) and limited cutaneous (lcSSc/CREST). Diffuse cutaneous disease features skin thickening proximal to the elbows and knees, early visceral organ involvement, and high risk of interstitial lung disease (fibrosis); it is strongly associated with anti-topoisomerase I (anti-Scl-70) antibodies. In contrast, limited disease is associated with anti-centromere antibodies and late pulmonary arterial hypertension."
      ],
      [
        "Antibodies against kinetochore centromere proteins (anti-centromere), associated with isolated digital sclerosis and late pulmonary arterial hypertension",
        "Anti-centromere antibodies characterize limited cutaneous systemic sclerosis (CREST syndrome), which has skin thickening restricted to distal extremities and face, and late pulmonary arterial hypertension without early extensive pulmonary fibrosis."
      ],
      [
        "Antibodies against small nuclear ribonucleoprotein particles U1-RNP (anti-U1 RNP), defining mixed connective tissue disease",
        "Anti-U1 RNP antibodies define mixed connective tissue disease (MCTD), which features overlapping traits of systemic lupus, systemic sclerosis, and polymyositis."
      ],
      [
        "Antibodies against aminoacyl-tRNA synthetase (anti-Jo-1), associated with inflammatory myopathy and mechanic's hands",
        "Anti-Jo-1 antibodies define antisynthetase syndrome, featuring inflammatory myopathy, interstitial lung disease, Raynaud phenomenon, and hyperkeratotic 'mechanic's hands', but not diffuse truncal scleroderma."
      ],
      [
        "Antibodies against the Ro52/SSA and La/SSB ribonuclear complexes, associated with secondary Sj\u00f6gren syndrome and congenital heart block",
        "Anti-Ro/SSA and anti-La/SSB antibodies characterize Sj\u00f6gren syndrome and SLE, associated with keratoconjunctivitis sicca and neonatal congenital heart block, not diffuse scleroderma."
      ]
    ],
    "shortestValidSolution": "Diffuse skin thickening (chest/arms) + interstitial lung disease (fibrosis) = Diffuse SSc -> Anti-DNA topoisomerase I (anti-Scl-70).",
    "necessaryInference": "Distinguish diffuse vs limited systemic sclerosis: diffuse = trunk involvement + interstitial fibrosis + anti-Scl-70; limited = distal extremities + PAH + anti-centromere.",
    "strongestDistractor": "Antibodies against kinetochore centromere proteins (anti-centromere), associated with isolated digital sclerosis and late pulmonary arterial hypertension",
    "distractorExclusion": "Anti-centromere antibodies define limited cutaneous systemic sclerosis (CREST syndrome) which features skin involvement restricted to hands/face and isolated PAH rather than pulmonary fibrosis.",
    "citation": "Denton CP, Khanna D. Systemic sclerosis. Lancet. 2017;390(10103):1685-1699. PMID: 28413064.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Demands exact mapping between autoantibody serotypes and anatomical distribution of sclerosis and organ complications (ILD vs PAH).",
      "distractorExclusionNotes": "Distractors feature anti-centromere (CREST), anti-U1 RNP (MCTD), anti-Jo-1 (antisynthetase), and anti-Ro/La (Sj\u00f6gren/SLE).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0639",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Musculoskeletal",
    "topic": "Rheumatoid Arthritis Citrullinated Peptide Neoantigen Pathogenesis",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman presents with progressive pain, swelling, and morning stiffness involving both wrists, metacarpophalangeal (MCP) joints, and proximal interphalangeal (PIP) joints over the past 5 months. Morning stiffness lasts approximately 2 hours and improves with daily chores. On physical examination, there is symmetrical boggy swelling and tenderness over the 2nd and 3rd MCP and PIP joints bilaterally. Radiographs of the hands reveal periarticular osteopenia and marginal cortical erosions. Serologic evaluation reveals high titers of antibodies directed against cyclic citrullinated peptides (anti-CCP). Which of the following post-translational enzymatic modifications is directly responsible for generating the neoantigens recognized by these diagnostic autoantibodies?",
    "choices": [
      [
        "Enzymatic conversion of positively charged arginine residues to neutral citrulline residues catalyzed by peptidylarginine deiminase (PAD) enzymes",
        "Peptidylarginine deiminases (PADs, particularly PAD2 and PAD4) catalyze the post-translational deimination of positively charged arginine residues into neutral citrulline residues in proteins such as vimentin, fibrinogen, and enolase. In genetically susceptible individuals (carrying the HLA-DRB1 'shared epitope'), citrullinated peptides fit with high affinity into the peptide-binding groove, activating autoreactive CD4+ T cells and driving high-affinity anti-CCP antibody production."
      ],
      [
        "Hydroxylation of proline and lysine residues in the endoplasmic reticulum by ascorbic acid-dependent oxygenases",
        "Prolyl and lysyl hydroxylases stabilize collagen triple-helix assembly (defective in scurvy); they do not generate citrullinated neoantigens in rheumatoid arthritis."
      ],
      [
        "Cross-linking of lysine residues by transglutaminase-2 to form stable isopeptide protein polymers",
        "Tissue transglutaminase deamidates gluten peptides in celiac disease, creating neoantigens presented by HLA-DQ2/DQ8, distinct from peptidylarginine deiminase in RA."
      ],
      [
        "Enzymatic cleavage of terminal sialic acid residues by viral neuraminidases exposing subterminal galactose",
        "Neuraminidase removes sialic acid during viral budding (e.g., influenza); it does not play a role in generating citrullinated neoantigens in rheumatoid arthritis."
      ],
      [
        "Phosphorylation of serine and threonine residues by mitogen-activated protein kinases (MAPK)",
        "Serine/threonine phosphorylation is a ubiquitous intracellular regulatory signaling modification, not the specific extracellular citrullination generating anti-CCP targets."
      ]
    ],
    "shortestValidSolution": "Symmetric MCP/PIP arthritis + erosions + anti-CCP = Rheumatoid Arthritis -> Peptidylarginine deiminase converts arginine to citrulline.",
    "necessaryInference": "Identify the precise biochemical reaction underlying anti-CCP: peptidylarginine deiminase (PAD) deiminates arginine into neutral citrulline, creating neoepitopes.",
    "strongestDistractor": "Cross-linking of lysine residues by transglutaminase-2 to form stable isopeptide protein polymers",
    "distractorExclusion": "Tissue transglutaminase modifies gluten in celiac disease (causing anti-tTG antibodies), whereas rheumatoid arthritis neoantigens are formed by peptidylarginine deiminase.",
    "citation": "McInnes IB, Schett G. The pathogenesis of rheumatoid arthritis. N Engl J Med. 2011;365(23):2205-2219. PMID: 22150039.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact post-translational enzymatic biochemistry (citrullination) generating the primary diagnostic autoantigen of rheumatoid arthritis.",
      "distractorExclusionNotes": "Distractors feature prolyl hydroxylation (collagen), transglutaminase (celiac), neuraminidase, and protein phosphorylation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0640",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Gout PRPP Synthetase Superactivity vs HGPRT Salvage Pathway",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old man presents with excruciating pain, erythema, and swelling of his right first metatarsophalangeal joint that began abruptly 6 hours ago. He has had three similar episodes over the past 2 years, as well as two episodes of nephrolithiasis. Serum uric acid concentration is markedly elevated at 10.8 mg/dL. Synovial fluid aspiration from the joint reveals intracellular needle-shaped crystals that exhibit strong negative birefringence under polarized light microscopy (yellow when parallel to the slow axis of the compensator). An enzymatic assay of cultured skin fibroblasts reveals a gain-of-function mutation resulting in allosteric resistance of an enzyme to feedback inhibition by purine nucleotides (AMP, GMP, IMP). Which of the following enzymes carries this activating mutation?",
    "choices": [
      [
        "Phosphoribosylpyrophosphate (PRPP) synthetase, causing unrestrained de novo purine synthesis and excessive uric acid end-product accumulation",
        "PRPP synthetase catalyzes the conversion of ribose-5-phosphate to PRPP (using ATP). Gain-of-function mutations (superactivity) render PRPP synthetase resistant to allosteric feedback inhibition by purine end-products (AMP, GMP, IMP). Unrestrained PRPP production drives the rate-limiting step of de novo purine synthesis (glutamine-PRPP amidotransferase), generating massive excess purines that are degraded into uric acid, causing early-onset gout and uric acid stones."
      ],
      [
        "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT), causing impaired purine salvage and self-mutilation behavior",
        "HGPRT deficiency (Lesch-Nyhan syndrome) causes loss of purine salvage and gout, but is a loss-of-function defect characterized by dystonia, choreoathetosis, and compulsive self-mutilation, absent here."
      ],
      [
        "Adenosine deaminase (ADA), causing toxic accumulation of deoxyadenosine in developing lymphoid precursors",
        "Adenosine deaminase deficiency causes Severe Combined Immunodeficiency (SCID) due to dATP accumulation in lymphocytes, not isolated crystal arthropathy."
      ],
      [
        "Xanthine oxidase, accelerating the terminal oxidation of hypoxanthine and xanthine to uric acid",
        "Xanthine oxidase catalyzes uric acid synthesis, but inherited gain-of-function mutations are not the cause of hereditary gout; allopurinol/febuxostat target this enzyme."
      ],
      [
        "Glucose-6-phosphatase, causing glycogen storage accumulation and secondary competitive renal urate retention",
        "Glucose-6-phosphatase deficiency (von Gierke disease / GSD I) causes fasting hypoglycemia, severe hepatomegaly, and lactic acidosis that secondarily competes with urate excretion."
      ]
    ],
    "shortestValidSolution": "Early gout + negative birefringent crystals + feedback-resistant enzyme = PRPP synthetase superactivity -> Drives de novo purine synthesis.",
    "necessaryInference": "Differentiate enzymatic causes of gout: HGPRT is salvage loss-of-function (Lesch-Nyhan); PRPP synthetase gain-of-function has purine nucleotide allosteric insensitivity.",
    "strongestDistractor": "Hypoxanthine-guanine phosphoribosyltransferase (HGPRT), causing impaired purine salvage and self-mutilation behavior",
    "distractorExclusion": "HGPRT deficiency causes Lesch-Nyhan syndrome with severe neurological features (self-mutilation, chorea), whereas PRPP synthetase superactivity presents with isolated early-onset gout and stones.",
    "citation": "Dalbeth N, et al. Gout. Nat Rev Dis Primers. 2019;5(1):69. PMID: 31558746.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests de novo purine biosynthetic pathway regulation, allosteric feedback mechanisms, and clinical inborn metabolic genetics.",
      "distractorExclusionNotes": "Distractors feature HGPRT (Lesch-Nyhan), ADA (SCID), xanthine oxidase, and glucose-6-phosphatase (von Gierke).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0641",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Pseudogout Calcium Pyrophosphate Crystal Chemistry",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man presents with acute-onset severe pain, erythema, and massive swelling of his right knee that began 12 hours ago. He has a history of primary hyperparathyroidism and hemochromatosis. Physical examination reveals a large joint effusion with significant warmth and restricted range of motion. Knee arthrocentesis yields turbid synovial fluid with a white blood cell count of 38,000/mm3 (82% neutrophils). Gram stain and bacterial cultures are negative. Compensated polarized light microscopy of the synovial fluid demonstrates intracellular and extracellular rhomboid-shaped crystals that exhibit weak positive birefringence (appearing blue when aligned parallel to the slow axis of the red compensator). Which of the following chemical compounds constitutes these crystals?",
    "choices": [
      [
        "Calcium pyrophosphate dihydrate (CPPD), which deposits in fibrocartilage and articular cartilage to cause chondrocalcinosis",
        "Pseudogout (calcium pyrophosphate deposition [CPPD] disease) is caused by synovial accumulation of calcium pyrophosphate dihydrate crystals. Under compensated polarized light, CPPD crystals are rhomboid-shaped and exhibit weak positive birefringence (blue when parallel, yellow when perpendicular to the compensator axis). It is strongly associated with hyperparathyroidism, hemochromatosis, and hypomagnesemia."
      ],
      [
        "Monosodium urate monohydrate, forming needle-shaped crystals with strong negative birefringence",
        "Monosodium urate crystals cause gout; they are needle-shaped and show strong negative birefringence (yellow when parallel to the slow axis of the compensator)."
      ],
      [
        "Basic calcium phosphate (hydroxyapatite), forming non-birefringent globoid aggregates detectable by alizarin red S",
        "Basic calcium phosphate (hydroxyapatite) crystals cause calcific periarthritis/Milwaukee shoulder; they are tiny non-birefringent clumps seen only on electron microscopy or alizarin red."
      ],
      [
        "Calcium oxalate monohydrate, producing bipyramidal envelope-shaped crystals in severe chronic renal failure",
        "Calcium oxalate crystals deposit in joint tissues in oxalosis (end-stage renal disease) or ethylene glycol toxicity; they are bipyramidal or envelope-shaped."
      ],
      [
        "Cholesterol monohydrate, producing notched rectangular birefringent plates in chronic rheumatoid effusions",
        "Cholesterol crystals appear as notched rectangular plates in chronic inflammatory synovial fluid ('cholesterol effusions') in rheumatoid arthritis."
      ]
    ],
    "shortestValidSolution": "Acute knee swelling + rhomboid crystals + positive birefringence (blue parallel) = Pseudogout -> Calcium pyrophosphate dihydrate (CPPD).",
    "necessaryInference": "Contrast crystal morphology and optics: CPPD = rhomboid + weakly positive (blue parallel); Gout = needle + strongly negative (yellow parallel).",
    "strongestDistractor": "Monosodium urate monohydrate, forming needle-shaped crystals with strong negative birefringence",
    "distractorExclusion": "Monosodium urate crystals are needle-shaped and negatively birefringent (yellow parallel), whereas the examined fluid contained rhomboid positively birefringent (blue parallel) crystals.",
    "citation": "Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med. 2016;374(26):2575-2584. PMID: 27355536.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests crystal optical physics (birefringence color orientation) and secondary metabolic risk factors (hemochromatosis, hyperparathyroidism).",
      "distractorExclusionNotes": "Distractors feature monosodium urate (gout), basic calcium phosphate, calcium oxalate, and cholesterol plates.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0642",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Rhabdomyolysis Acute Kidney Injury Pathophysiology",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old military recruit is brought to the medical tent after collapsing during a 15-mile endurance march in hot, humid weather (34\u00b0C [93\u00b0F]). On arrival, he is delirious and complaining of severe generalized muscle pain. Vital signs show blood pressure 98/62 mm Hg, pulse 128/min, and rectal temperature 39.8\u00b0C (103.6\u00b0F). Physical examination reveals severe tenderness and swelling of the quadriceps and calf muscles bilaterally. A Foley catheter yields dark reddish-brown urine. Urinalysis reveals 4+ blood on dipstick, but microscopic sediment examination shows only 0-1 red blood cells per high-power field, along with numerous pigmented granular ('muddy brown') casts. Serum creatine kinase is severely elevated at 84,000 U/L. Which of the following pathophysiological mechanisms accounts for the acute tubular injury in this patient?",
    "choices": [
      [
        "Heme iron-catalyzed generation of free radicals (Fenton reaction) driving lipid peroxidation, combined with precipitation of myoglobin with Tamm-Horsfall protein causing tubular cast obstruction",
        "Rhabdomyolysis releases massive amounts of intracellular myoglobin into the systemic circulation. When filtered myoglobin exceeds haptoglobin binding, it reaches the distal renal tubules where it precipitates with Tamm-Horsfall mucoprotein in an acidic environment, forming obstructive casts. Concurrently, ferrous heme iron catalyzes hydroxyl free-radical generation via the Fenton reaction, causing renal lipid peroxidation, direct proximal tubular necrosis, and profound renal vasoconstriction."
      ],
      [
        "Direct immunological cytotoxicity mediated by anti-glomerular basement membrane autoantibodies triggering crescentic glomerulonephritis",
        "Anti-GBM antibodies cause Goodpasture disease with true hematuria (dysmorphic RBCs and RBC casts), not dipstick-positive/microscopically-negative pigment nephropathy."
      ],
      [
        "Ascending bacterial ascending colonization of the distal collecting tubules triggering suppurative tubulointerstitial microabscesses",
        "Ascending infection causes acute pyelonephritis with WBC casts and bacteriuria, distinct from pigment-induced toxic acute tubular necrosis."
      ],
      [
        "Immune complex deposition in the subepithelial space triggering complement-mediated podocyte foot process effacement",
        "Subepithelial immune complex deposition characterizes membranous nephropathy (causing heavy nephrotic proteinuria), not rhabdomyolysis."
      ],
      [
        "Selective crystallization of calcium oxalate within proximal tubular brush borders causing physical shearing of epithelial cells",
        "Calcium oxalate crystallization occurs in ethylene glycol ingestion or primary hyperoxaluria, which produces envelope-shaped crystals without severe CK elevation."
      ]
    ],
    "shortestValidSolution": "Crush/exertional injury + dark urine + 4+ dipstick blood with 0 RBCs + high CK = Rhabdomyolysis -> Myoglobin-Tamm-Horsfall casts + heme iron lipid peroxidation.",
    "necessaryInference": "Interpret the classic discordance: dipstick positive for blood (detects heme pigment) but microscopic urinalysis negative for RBCs = myoglobinuria -> heme iron toxicity.",
    "strongestDistractor": "Direct immunological cytotoxicity mediated by anti-glomerular basement membrane autoantibodies triggering crescentic glomerulonephritis",
    "distractorExclusion": "Anti-GBM disease produces true red blood cells and RBC casts in the urine sediment, whereas myoglobinuria produces positive dipstick without microscopic RBCs.",
    "citation": "Bosch X, et al. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009;361(1):62-72. PMID: 19571284.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative urine sediment discordance (heme vs RBCs) and cellular free-radical nephrotoxicity of filtered myoglobin.",
      "distractorExclusionNotes": "Distractors feature anti-GBM disease, pyelonephritis, membranous nephropathy, and calcium oxalate nephropathy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0643",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Musculoskeletal",
    "topic": "Malignant Hyperthermia Ryanodine Receptor 1 Molecular Genetics",
    "provisionalDifficulty": 4,
    "stem": "A 21-year-old man undergoes emergent exploratory laparotomy following a motor vehicle collision. General anesthesia is induced with intravenous propofol and succinylcholine, and maintained with inhaled sevoflurane. Ten minutes into the procedure, the anesthesiologist notes that the patient's end-tidal CO2 has risen rapidly from 38 mm Hg to 85 mm Hg despite increasing minute ventilation. The patient's heart rate increases to 142/min and his jaw muscles become severely rigid (masseter muscle spasm). Core body temperature rises precipitously to 40.8\u00b0C (105.4\u00b0F). Arterial blood gas demonstrates a severe combined metabolic and respiratory acidosis with a serum lactate of 9.4 mmol/L and serum potassium of 6.8 mEq/L. Which of the following intracellular proteins carries the underlying genetic mutation predisposing this patient to this hypermetabolic crisis?",
    "choices": [
      [
        "Ryanodine receptor 1 (RYR1) calcium-release channel in the skeletal muscle sarcoplasmic reticulum membrane",
        "Malignant hyperthermia is an autosomal dominant pharmacogenetic crisis most commonly caused by gain-of-function mutations in RYR1 (ryanodine receptor 1), or less commonly CACNA1S (dihydropyridine receptor). Exposure to volatile anesthetics (sevoflurane, desflurane) or succinylcholine triggers uncontrolled, massive release of Ca2+ from the sarcoplasmic reticulum into the myoplasm. Unchecked cross-bridge cycling and ATP consumption drive hyperthermia, rhabdomyolysis, rigidity, and severe lactic acidosis."
      ],
      [
        "Dihydropyridine receptor alpha-1S subunit acting as a voltage-gated chloride channel in the sarcolemma",
        "The dihydropyridine receptor (DHPR) is an L-type voltage-gated calcium channel, not a chloride channel; chloride channels are encoded by CLCN1 (mutated in myotonia congenita)."
      ],
      [
        "Sarcoplasmic reticulum Ca2+-ATPase (SERCA1) pump mediating active calcium reuptake into terminal cisternae",
        "Loss-of-function SERCA1 mutations cause Brody myopathy (painless muscle cramping), not malignant hyperthermia."
      ],
      [
        "Cardiac ryanodine receptor 2 (RYR2) mediating calcium-induced calcium release in ventricular myocytes",
        "RYR2 is the cardiac isoform; mutations cause catecholaminergic polymorphic ventricular tachycardia (CPVT), not skeletal muscle malignant hyperthermia."
      ],
      [
        "Plasma membrane calsequestrin-1 buffering high-affinity calcium ions within the extracellular matrix",
        "Calsequestrin is an intra-sarcoplasmic reticulum calcium-buffering protein, not an extracellular plasma membrane receptor."
      ]
    ],
    "shortestValidSolution": "Inhaled anesthetic + succinylcholine + high ETCO2 + masseter spasm + hyperthermia = Malignant Hyperthermia -> RYR1 mutation in sarcoplasmic reticulum.",
    "necessaryInference": "Identify the molecular defect in malignant hyperthermia: RYR1 mutation in skeletal muscle sarcoplasmic reticulum causing uncontrolled calcium release.",
    "strongestDistractor": "Cardiac ryanodine receptor 2 (RYR2) mediating calcium-induced calcium release in ventricular myocytes",
    "distractorExclusion": "RYR2 is expressed in cardiac muscle (mutated in CPVT), whereas malignant hyperthermia specifically involves the skeletal muscle isoform RYR1.",
    "citation": "Rosenberg H, et al. Malignant hyperthermia: a review. Orphanet J Rare Dis. 2015;10:93. PMID: 26242385.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates ion channel isoforms (RYR1 skeletal vs RYR2 cardiac, DHPR channel types) in volatile anesthetic hypermetabolic crisis.",
      "distractorExclusionNotes": "Distractors feature DHPR chloride misattribution, SERCA1 (Brody), RYR2 (CPVT), and calsequestrin.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0644",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Musculoskeletal",
    "topic": "Osteosarcoma vs Ewing Sarcoma Molecular Genetics",
    "provisionalDifficulty": 5,
    "stem": "A 16-year-old boy presents with a 3-month history of worsening localized pain and swelling in his right distal thigh that awakens him from sleep. Physical examination reveals a firm, tender, non-fluctuant mass fixed to the underlying distal femur. Plain radiography demonstrates a destructive mixed osteolytic and osteosclerotic lesion in the metaphysis of the distal femur that breaches the cortex, elevating the periosteum to produce a triangular shadow of subperiosteal new bone formation ('Codman triangle') and a 'sunburst' pattern of spicular calcification extending into the adjacent soft tissue. Biopsy confirms malignant mesenchymal spindle cells producing unmineralized osteoid matrix. Which of the following pairs of tumor suppressor genes is most commonly inactivated in the pathogenesis of this primary bone neoplasm?",
    "choices": [
      [
        "RB1 (retinoblastoma gene) and TP53 (tumor protein p53), frequently associated with hereditary cancer syndromes",
        "Osteosarcoma is the most common primary malignant bone tumor in adolescents, characteristically arising in the metaphyses of long bones (distal femur, proximal tibia) with Codman triangle and sunburst spiculation. Biopsy shows malignant spindle cells producing neoplastic osteoid. It has a profound genetic link to biallelic inactivation of both the RB1 gene (seen in hereditary retinoblastoma survivors) and the TP53 gene (seen in Li-Fraumeni syndrome)."
      ],
      [
        "EWS and FLI1, generating a chimeric t(11;22) oncogenic fusion transcription factor in neuroectodermal cells",
        "The t(11;22)(q24;q12) translocation creates the EWS-FLI1 fusion transcript in Ewing sarcoma, a small blue round cell tumor arising in bone diaphyses with 'onion-skin' periosteal reactions."
      ],
      [
        "APC (adenomatous polyposis coli) and CTNNB1 (beta-catenin), predisposing to osteomas and desmoid tumors",
        "APC mutations cause Gardner syndrome (familial adenomatous polyposis with benign osteomas of the mandible and skull), not high-grade osteosarcoma."
      ],
      [
        "EXT1 and EXT2 (exostosin genes), impairing heparan sulfate biosynthesis in osteochondromas",
        "EXT1 and EXT2 mutations cause hereditary multiple exostoses (osteochondromas), which are benign cartilage-capped bony projections."
      ],
      [
        "VHL (von Hippel-Lindau) and RET proto-oncogene, predisposing to osseous hemangiomas and endocrine tumors",
        "VHL mutations cause hemangioblastomas and renal cell carcinoma; RET mutations cause MEN2 syndromes, not osteosarcoma."
      ]
    ],
    "shortestValidSolution": "Adolescent + distal femur mass + Codman triangle + osteoid production = Osteosarcoma -> Inactivation of RB1 and TP53.",
    "necessaryInference": "Contrast bone tumors genetically: Osteosarcoma involves RB1 and TP53 mutations with osteoid production; Ewing sarcoma involves t(11;22) EWS-FLI1 in diaphyses.",
    "strongestDistractor": "EWS and FLI1, generating a chimeric t(11;22) oncogenic fusion transcription factor in neuroectodermal cells",
    "distractorExclusion": "EWS-FLI1 t(11;22) translocation defines Ewing sarcoma (diaphyseal small round blue cell tumor with onion-skinning), which does not produce osteoid matrix.",
    "citation": "Kansara M, et al. Infiltrative bone tumors: osteosarcoma. Nat Rev Cancer. 2014;14(11):722-735. PMID: 25342631.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Correlates oncologic radiography (Codman triangle, sunburst) and histology (osteoid) with specific tumor suppressor genetics (RB1/TP53).",
      "distractorExclusionNotes": "Distractors feature Ewing sarcoma t(11;22), Gardner syndrome (APC), osteochondroma (EXT1/2), and VHL/RET.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0645",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Musculoskeletal",
    "topic": "Synovial Fluid Differentiation Septic vs Inflammatory Arthritis",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with a history of poorly controlled type 2 diabetes presents to the emergency department with acute-onset excruciating pain, erythema, and marked swelling of his left knee that began 18 hours ago. He has had rigors and chills. On physical examination, he is febrile at 38.9\u00b0C (102\u00b0F) with blood pressure 118/74 mm Hg and heart rate 108/min. The left knee is intensely erythematous, warm, and swollen, held in 30 degrees of flexion, with severe pain elicited by any passive motion. An emergent arthrocentesis is performed, yielding 40 mL of opaque, purulent yellowish-green synovial fluid. Which of the following synovial fluid analysis profiles provides the most definitive quantitative evidence differentiating acute bacterial septic arthritis from non-infectious inflammatory crystal arthropathy?",
    "choices": [
      [
        "Synovial leukocyte count exceeding 50,000/mm3 (frequently > 100,000/mm3) with greater than 90% polymorphonuclear neutrophils and marked reduction in synovial glucose relative to serum",
        "Septic arthritis typically produces purulent fluid with synovial white blood cell (WBC) counts > 50,000/mm3 (frequently > 100,000/mm3) and > 90% polymorphonuclear leukocytes (PMNs). Synovial fluid glucose is markedly diminished (< 50% of simultaneous serum glucose) due to high metabolic consumption by bacteria and neutrophils, with high lactic acid. Inflammatory effusions (gout, RA) typically show 2,000-50,000 WBC/mm3 with lower neutrophil percentages."
      ],
      [
        "Synovial leukocyte count between 2,000 and 10,000/mm3 with mononuclear cell predominance and normal synovial glucose",
        "This profile describes non-inflammatory effusions (such as osteoarthritis) or mild reactive states, inconsistent with acute bacterial septic arthritis."
      ],
      [
        "Complete absence of synovial lactate dehydrogenase (LDH) accompanied by an alkaline synovial fluid pH exceeding 7.8",
        "Septic fluid is characterized by elevated synovial LDH (from bacterial and neutrophil lysis) and an acidic pH (< 7.2) due to anaerobic lactic acid generation."
      ],
      [
        "Synovial fluid protein concentration strictly under 1.5 g/dL with a high mucin clot viscosity test",
        "Septic joint fluid has elevated protein (> 3.5 g/dL) and poor mucin clot formation due to bacterial and enzymatic hyaluronidase degradation."
      ],
      [
        "Absolute synovial erythrocyte count exceeding 250,000/mm3 with prominent lipid droplets in the absence of leukocytes",
        "Grossly bloody fluid with fat globules (lipohemarthrosis) indicates intra-articular fracture (e.g., tibial plateau fracture), not bacterial septic arthritis."
      ]
    ],
    "shortestValidSolution": "Fever + red hot knee + purulent fluid = Septic arthritis -> Synovial WBC > 50,000 (>90% PMNs) + low synovial glucose.",
    "necessaryInference": "Apply diagnostic quantitative thresholds for joint fluid: WBC > 50,000/mm3 with > 90% PMNs and glucose < 50% of serum is diagnostic of septic arthritis.",
    "strongestDistractor": "Synovial leukocyte count between 2,000 and 10,000/mm3 with mononuclear cell predominance and normal synovial glucose",
    "distractorExclusion": "WBC < 10,000 with mononuclear predominance defines osteoarthritis or resolving trauma, which cannot account for the purulent joint effusion.",
    "citation": "Sharff KA, et al. Adult septic arthritis: overview and updates. Infect Dis Clin North Am. 2017;31(2):227-240. PMID: 28499694.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical laboratory diagnostics of synovial fluid analysis, glucose ratio, and neutrophil fractions.",
      "distractorExclusionNotes": "Distractors feature non-inflammatory osteoarthritis, falsely normal LDH/alkaline pH, low protein, and lipohemarthrosis fracture.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0646",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Dupuytren Contracture Fibroblast Proliferation & Collagen Shift",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man of Northern European descent presents with progressive flexion deformities of his left ring and little fingers that have made it difficult to shake hands or place his hand flat on a table (positive tabletop test). He has a 25-pack-year smoking history and mild alcohol-related hepatic steatosis. Physical examination reveals painless, nodular thickening and puckering of the palmar skin overlying the 4th and 5th metacarpal heads, with prominent longitudinal fibrous cords extending into the proximal phalanges causing fixed 45-degree flexion contractures at the metacarpophalangeal and proximal interphalangeal joints. Histopathologic examination of an excised palmar cord is most likely to demonstrate which of the following cellular and matrix alterations?",
    "choices": [
      [
        "Proliferation of contractile alpha-smooth muscle actin-positive myofibroblasts with an increased ratio of type III collagen relative to type I collagen",
        "Dupuytren contracture is a benign fibroproliferative disorder of the palmar aponeurosis. It is characterized by active proliferation of myofibroblasts expressing alpha-smooth muscle actin (alpha-SMA), which contract the fascial matrix. Biochemically, there is a marked phenotypic shift from normal type I collagen to immature type III collagen, forming dense nodular tissue that matures into contracted longitudinal cords."
      ],
      [
        "Autoimmune granulomatous necrotizing vasculitis of palmar digital arteries leading to ischemic fibrotic contracture",
        "Dupuytren disease is non-inflammatory and non-vasculitic; digital arteries are anatomically displaced by cords but do not exhibit necrotizing vasculitis."
      ],
      [
        "Deposition of unmineralized osteoid matrix by proliferating osteoblasts beneath the flexor tendon sheath",
        "Osteoid production characterizes bone tumors (osteoid osteoma, osteosarcoma), not superficial fascial fibromatosis."
      ],
      [
        "Extensive granulomatous foreign-body reaction surrounding fragmented calcified keratin lamellae",
        "Foreign body granulomas surround ruptured epidermoid cysts or suture material, not the uniform myofibroblastic cords of Dupuytren disease."
      ],
      [
        "Mononuclear inflammatory infiltration of digital flexor tenosynovium with dense fibrinoid necrosis",
        "Tenosynovial inflammation causes stenosing tenosynovitis (trigger finger), affecting the A1 pulley rather than the superficial palmar aponeurosis."
      ]
    ],
    "shortestValidSolution": "Puckered palmar skin + flexed 4th/5th digits + positive tabletop test = Dupuytren contracture -> Alpha-SMA myofibroblasts + high Type III/I collagen ratio.",
    "necessaryInference": "Identify the cellular and matrix biology of Dupuytren disease: alpha-smooth muscle actin myofibroblasts driving contraction with high Type III collagen synthesis.",
    "strongestDistractor": "Mononuclear inflammatory infiltration of digital flexor tenosynovium with dense fibrinoid necrosis",
    "distractorExclusion": "Flexor tenosynovitis (trigger finger) causes catching/locking of the digit at the A1 pulley, distinct from palmar aponeurotic contracture in Dupuytren disease.",
    "citation": "Townley WA, et al. Dupuytren's contracture unfolded. BMJ. 2006;332(7538):397-400. PMID: 16484267.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Connects clinical exam findings (tabletop test, cords) to cellular biology (myofibroblasts, Type III collagen shift).",
      "distractorExclusionNotes": "Distractors feature digital vasculitis, osteoid production, foreign body granulomas, and trigger finger tenosynovitis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0647",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Musculoskeletal",
    "topic": "Lateral Epicondylitis Angiofibroblastic Tendinosis & Innervation",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old amateur tennis player presents with a 6-week history of sharp, burning pain over the lateral aspect of her dominant right elbow that radiates down the posterior forearm. The pain is exacerbated during the backhand stroke and when lifting a heavy briefcase. On physical examination, point tenderness is elicited directly over the lateral epicondyle of the humerus. Pain is sharply reproduced by resisted extension of the wrist with the elbow in full extension, as well as by resisted extension of the third (middle) digit. Histopathologic examination of the affected tendon origin demonstrates angiofibroblastic hyperplasia with disorganized collagen architecture and absence of acute inflammatory cell infiltrates ('angiofibroblastic tendinosis'). Which of the following muscles originates from the specific anatomical site of pathology in this patient?",
    "choices": [
      [
        "Extensor carpi radialis brevis, originating from the lateral epicondyle and inserting onto the base of the third metacarpal",
        "Lateral epicondylitis ('tennis elbow') is an overuse tendinopathy primarily affecting the common extensor origin, specifically the extensor carpi radialis brevis (ECRB). Histopathology shows non-inflammatory angiofibroblastic tendinosis (disorganized collagen, vascular proliferation, fibroblast hyperplasia). Pain is reproduced by resisted wrist extension and resisted middle finger extension (which specifically loads ECRB)."
      ],
      [
        "Flexor carpi radialis, originating from the medial epicondyle and inserting onto the base of the second metacarpal",
        "Flexor carpi radialis originates from the medial epicondyle; overuse causes medial epicondylitis ('golfer's elbow'), characterized by pain during resisted wrist flexion."
      ],
      [
        "Pronator teres, originating from the medial supracondylar ridge and inserting onto the mid-shaft of the radius",
        "Pronator teres originates medially and mediates forearm pronation; its compression causes pronator syndrome (median neuropathy), not lateral elbow pain."
      ],
      [
        "Brachioradialis, originating from the lateral supracondylar ridge and inserting onto the styloid process of the radius",
        "Brachioradialis originates from the lateral supracondylar ridge (above the epicondyle) and mediates forearm flexion in mid-pronation, not resisted wrist extension."
      ],
      [
        "Abductor pollicis longus, originating from the posterior radius and ulna and inserting onto the first metacarpal",
        "Abductor pollicis longus and extensor pollicis brevis cross the radial styloid in the first dorsal compartment; tenosynovitis causes de Quervain tenosynovitis."
      ]
    ],
    "shortestValidSolution": "Lateral elbow pain + pain on resisted wrist/middle-finger extension = Lateral epicondylitis -> Extensor carpi radialis brevis (ECRB).",
    "necessaryInference": "Map the exact muscle origin for lateral epicondylitis: Extensor carpi radialis brevis (ECRB) originates from the lateral epicondyle and inserts on the 3rd metacarpal.",
    "strongestDistractor": "Brachioradialis, originating from the lateral supracondylar ridge and inserting onto the styloid process of the radius",
    "distractorExclusion": "Brachioradialis originates proximal to the lateral epicondyle (on the supracondylar ridge) and flexes the forearm; it does not extend the wrist or 3rd digit.",
    "citation": "Tosti R, et al. Lateral epicondylitis of the elbow. Am J Med. 2013;126(4):357.e1-6. PMID: 23395543.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests functional anatomy and provocative physical maneuvers isolating the extensor carpi radialis brevis tendon.",
      "distractorExclusionNotes": "Distractors feature medial epicondylitis flexors, pronator teres, brachioradialis, and de Quervain abductors.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0648",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Musculoskeletal",
    "topic": "Rotator Cuff Tendinopathy Supraspinatus Impingement",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old painter presents with persistent right shoulder pain that worsens when working overhead with his arms abducted above 90 degrees. He reports difficulty sleeping on the right side. Active abduction of the right arm elicits severe pain between 60 and 120 degrees of abduction (a positive 'painful arc' test). The Neer impingement test (passive forward flexion with internal rotation) and Hawkins-Kennedy test (passive internal rotation of the 90-degree flexed arm) are both strongly positive. However, passive range of motion is completely preserved, and muscle strength testing reveals 5/5 strength against resistance in all planes without atrophy. Subacromial injection of 1% lidocaine completely abolishes the pain during active abduction (positive Neer test). Which of the following anatomical structures is mechanically compressed in the subacromial space to produce this clinical syndrome?",
    "choices": [
      [
        "Supraspinatus tendon and subacromial-subdeltoid bursa compressed beneath the anterior under-surface of the acromion and coracoacromial ligament",
        "Subacromial impingement syndrome involves mechanical compression of the supraspinatus tendon, long head of biceps tendon, and subacromial bursa between the humeral head and the coracoacromial arch (acromion, coracoacromial ligament, and acromioclavicular joint). Impingement is maximal during arm abduction between 60 and 120 degrees (painful arc) as the greater tubercle of the humerus passes beneath the acromion."
      ],
      [
        "Infraspinatus tendon compressed beneath the spine of the scapula within the spinoglenoid notch",
        "Infraspinatus compression in the spinoglenoid notch causes isolated external rotation weakness due to suprascapular nerve entrapment, not an anterior painful arc."
      ],
      [
        "Subscapularis tendon compressed beneath the coracoid process within the subcoracoid space",
        "Subcoracoid impingement compresses the subscapularis, causing anterior pain during forward flexion and internal rotation, but is far less common than classic subacromial supraspinatus impingement."
      ],
      [
        "Teres minor tendon compressed against the surgical neck of the humerus within the quadrangular space",
        "The quadrangular space contains the axillary nerve and posterior circumflex humeral artery; compression causes teres minor/deltoid weakness, not subacromial impingement."
      ],
      [
        "Glenoid labrum superior aspect avulsed by eccentric traction of the long head of the triceps tendon",
        "Superior labral anterior-to-posterior (SLAP) tears involve the long head of the biceps (not triceps) tendon anchor and produce clicking/popping, not a subacromial painful arc."
      ]
    ],
    "shortestValidSolution": "Overhead shoulder pain + painful arc (60-120 deg) + relief with subacromial lidocaine = Supraspinatus tendon / subacromial bursa impingement.",
    "necessaryInference": "Identify the anatomical boundaries of the subacromial space: supraspinatus tendon passes beneath the coracoacromial arch (acromion + coracoacromial ligament).",
    "strongestDistractor": "Subscapularis tendon compressed beneath the coracoid process within the subcoracoid space",
    "distractorExclusion": "Subcoracoid impingement affects subscapularis during adduction/internal rotation, whereas classic overhead painful arc impinges supraspinatus beneath the acromion.",
    "citation": "Varacallo M, et al. Subacromial Impingement Syndrome. StatPearls. 2023. PMID: 30020633.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests regional kinesiology, provocative impingement maneuvers, and precise spatial anatomy of the coracoacromial arch.",
      "distractorExclusionNotes": "Distractors feature spinoglenoid notch (infraspinatus), subcoracoid impingement, quadrangular space, and SLAP labral tears.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0649",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Musculoskeletal",
    "topic": "Carpal Tunnel Syndrome Median Nerve Compression & Palmar Sparing",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old female dental hygienist presents with numbness, tingling, and burning pain involving the palmar aspect of her right thumb, index, and middle fingers that wakes her up from sleep at night. Shaking her hand provides temporary relief. Physical examination reveals: Tinel sign positive at the volar wrist, Phalen maneuver reproducing paresthesias within 30 seconds, and mild atrophy of the right thenar eminence with weakness on resisted thumb abduction (abductor pollicis brevis). However, sensory pinprick testing reveals normal sensation over the central proximal thenar eminence. Which of the following anatomical descriptions correctly explains why sensation over the thenar eminence is preserved in this patient?",
    "choices": [
      [
        "The palmar cutaneous branch of the median nerve arises proximal to the flexor retinaculum (transverse carpal ligament) and passes superficial to the carpal tunnel",
        "The median nerve gives off the palmar cutaneous branch approximately 5 cm proximal to the wrist crease. This branch courses superficial to the flexor retinaculum (transverse carpal ligament) to innervate the skin overlying the central thenar eminence. Because it does not pass through the carpal tunnel, it is spared from compression, leaving thenar eminence sensation intact while digits 1-3 experience sensory loss."
      ],
      [
        "The superficial sensory branch of the radial nerve crosses over the anatomical snuffbox to provide collateral innervation to the thenar palm",
        "The superficial radial nerve innervates the dorsum of the hand and dorsal thumb/index finger; it does not innervate the palmar thenar eminence."
      ],
      [
        "The palmar cutaneous branch of the ulnar nerve supplies overlapping cross-innervation across the median-ulnar watershed zone",
        "The palmar cutaneous branch of the ulnar nerve supplies the hypothenar eminence, not the thenar eminence."
      ],
      [
        "The recurrent motor branch of the median nerve carries dual sensory-motor fibers that bypass the carpal tunnel via the canal of Guyon",
        "The recurrent branch is purely motor to the thenar muscles (OAF: Opponens, Abductor, Flexor pollicis brevis superficial head); the canal of Guyon contains the ulnar nerve."
      ],
      [
        "The lateral antebrachial cutaneous nerve terminates prematurely at the proximal wrist crease without entering the palm",
        "The lateral antebrachial cutaneous nerve (from musculocutaneous) innervates the lateral forearm skin, not the central palmar thenar eminence."
      ]
    ],
    "shortestValidSolution": "Carpal tunnel with preserved thenar sensation = Palmar cutaneous branch arises proximal to carpal tunnel and passes superficial to flexor retinaculum.",
    "necessaryInference": "Explain palmar sensory sparing in carpal tunnel syndrome: the palmar cutaneous branch branches proximal to the flexor retinaculum and travels superficially.",
    "strongestDistractor": "The superficial sensory branch of the radial nerve crosses over the anatomical snuffbox to provide collateral innervation to the thenar palm",
    "distractorExclusion": "The superficial radial nerve supplies the dorsal hand and webspace, not the palmar thenar eminence.",
    "citation": "Aroori S, Spence RA. Carpal tunnel syndrome. Ulster Med J. 2008;77(1):6-17. PMID: 18269111.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact neuroanatomical branching patterns (palmar cutaneous branch vs main median nerve) accounting for clinical sensory dissociation.",
      "distractorExclusionNotes": "Distractors feature superficial radial nerve, ulnar cutaneous branch, recurrent motor branch, and lateral antebrachial cutaneous nerve.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0650",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "Scurvy Collagen Post-Translational Hydroxylation Defect",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old widower who lives alone on an unvarying diet of canned tea and white toast presents to the clinic with progressive fatigue, spontaneous bruising, and painful swelling of his knees. Physical examination demonstrates pale conjunctivae, swollen spongy purple gums that bleed readily upon probing, petechiae centered around hair follicles with corkscrew hairs on both lower extremities, and bilateral subperiosteal hematomas over the anterior tibiae. Laboratory evaluation reveals a normocytic anemia and normal platelet count (240,000/mm3) with normal coagulation studies (PT and PTT normal). Which of the following post-translational enzymatic reactions is directly impaired in this patient?",
    "choices": [
      [
        "Hydroxylation of specific proline and lysine residues within the rough endoplasmic reticulum, catalyzed by prolyl and lysyl hydroxylases requiring ferrous iron and ascorbic acid",
        "Scurvy is caused by vitamin C (ascorbic acid) deficiency. Ascorbic acid acts as a reducing agent to keep iron in its active ferrous (Fe2+) state during the catalytic cycle of prolyl and lysyl hydroxylases within the rough endoplasmic reticulum. Hydroxyproline is essential for interchain hydrogen bonding that stabilizes the collagen triple helix; deficiency yields unstable collagen that degrades at physiological temperature, causing capillary fragility (petechiae, bleeding gums) and impaired wound healing."
      ],
      [
        "Extracellular oxidative deamination of lysine and hydroxylysine residues by copper-dependent lysyl oxidase",
        "Lysyl oxidase cross-links tropocollagen extracellularly using copper as a cofactor; deficiency causes Menkes disease or lathyrism, not vitamin C-dependent scurvy."
      ],
      [
        "Addition of glucose and galactose residues to hydroxylysine by endoplasmic reticulum glycosyltransferases",
        "Glycosylation of hydroxylysine residues does not require vitamin C as a cofactor; hydroxylation must precede glycosylation."
      ],
      [
        "Proteolytic cleavage of terminal propeptides by procollagen N-proteinase in the extracellular matrix",
        "Propeptide cleavage occurs extracellularly and is independent of ascorbic acid; defects cause Ehlers-Danlos syndrome arthrochalasia type."
      ],
      [
        "Gamma-carboxylation of glutamic acid residues in procollagen monomers catalyzed by vitamin K-dependent carboxylase",
        "Vitamin K mediates gamma-carboxylation of clotting factors (II, VII, IX, X) and osteocalcin, not collagen alpha chains."
      ]
    ],
    "shortestValidSolution": "Tea and toast diet + bleeding gums + corkscrew hairs + petechiae = Scurvy -> Vitamin C deficiency impairs prolyl/lysyl hydroxylase in RER.",
    "necessaryInference": "Connect the clinical signs of scurvy to the exact intracellular step in collagen synthesis: vitamin C is a reducing cofactor for prolyl/lysyl hydroxylases in the RER.",
    "strongestDistractor": "Extracellular oxidative deamination of lysine and hydroxylysine residues by copper-dependent lysyl oxidase",
    "distractorExclusion": "Lysyl oxidase acts extracellularly and requires copper (defective in Menkes disease), whereas prolyl/lysyl hydroxylases act in the RER and require vitamin C and iron.",
    "citation": "Maxfield L, Crane JS. Vitamin C Deficiency (Scurvy). StatPearls. 2023. PMID: 29630239.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular biochemistry of collagen synthesis, cofactor requirements (Fe2+/ascorbate), and cellular compartmentalization (RER vs extracellular).",
      "distractorExclusionNotes": "Distractors feature lysyl oxidase (copper), glycosyltransferases, propeptide cleavage, and vitamin K carboxylation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
