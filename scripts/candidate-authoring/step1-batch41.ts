import { CandidateSpec } from './types';

export const step1Batch41: CandidateSpec[] = [
  {
    "code": "op-c-s1-1001",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Homocystinuria Cystathionine Beta-Synthase Deficiency Pyridoxine Responsiveness",
    "provisionalDifficulty": 4,
    "stem": "A 9-year-old boy is brought to the clinic because of worsening learning difficulties at school and poor vision. Physical examination reveals a tall, slender child with an arm span exceeding his height, pectus excavatum, arachnodactyly, and severe kyphoscoliosis. Ophthalmologic examination demonstrates bilateral downward and inward (inferomedial) subluxation of the crystalline lenses. Cardiovascular examination reveals normal heart sounds and no murmurs. Laboratory evaluation reveals a markedly elevated plasma total homocysteine level of 185 umol/L (reference: <15 umol/L) and elevated methionine. The patient is diagnosed with an inborn error of metabolism caused by deficient activity of cystathionine beta-synthase. Which of the following cofactors is essential for the residual catalytic activity of this enzyme and represents the primary therapeutic trial for this patient?",
    "choices": [
      [
        "Pyridoxine (Vitamin B6)",
        "Homocystinuria is an autosomal recessive inborn error of sulfur amino acid metabolism classically caused by cystathionine beta-synthase (CBS) deficiency. CBS catalyzes the transsulfuration conversion of homocysteine and serine into cystathionine, using PYRIDOXINE (VITAMIN B6) as an essential cofactor (pyridoxal 5'-phosphate). Impaired CBS leads to toxic accumulation of homocysteine and upstream methionine in plasma and urine. Clinical features mimic Marfan syndrome (tall slender habitus, arachnodactyly, pectus deformity), but key distinguishing features include: (1) DOWNWARD AND INWARD (inferomedial) ECTOPIA LENTIS (vs upward/superolateral in Marfan); (2) INTELLECTUAL DISABILITY / DEVELOPMENTAL DELAY (preserved in Marfan); and (3) PREMATURE THROMBOEMBOLISM (deep vein thrombosis, stroke, myocardial infarction) due to homocysteine-induced endothelial toxicity. Approximately 50% of patients carry CBS missense mutations that respond dramatically to high-dose pyridoxine supplementation, which stabilizes the mutant enzyme and lowers thrombotic risk."
      ],
      [
        "Tetrahydrobiopterin (BH4)",
        "Tetrahydrobiopterin is a cofactor for phenylalanine hydroxylase, tyrosine hydroxylase, and nitric oxide synthase, but does not participate in the transsulfuration pathway."
      ],
      [
        "Thiamine pyrophosphate (Vitamin B1)",
        "Thiamine pyrophosphate is a cofactor for alpha-keto acid dehydrogenases (pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase), not cystathionine beta-synthase."
      ],
      [
        "Cobalamin (Vitamin B12)",
        "Cobalamin is a cofactor for methionine synthase in the remethylation pathway, which lowers homocysteine but does not restore cystathionine beta-synthase catalytic activity."
      ],
      [
        "Biotin (Vitamin B7)",
        "Biotin serves as a CO2 carrier for carboxylase enzymes (pyruvate carboxylase, acetyl-CoA carboxylase), not cystathionine beta-synthase."
      ]
    ],
    "shortestValidSolution": "CBS deficiency homocystinuria (inferomedial lens subluxation, thrombosis, scoliosis) = Pyridoxine (B6) cofactor responsiveness.",
    "necessaryInference": "Deduce cystathionine beta-synthase deficiency from inferomedial ectopia lentis and homocystinuria, identifying pyridoxine as its obligatory cofactor.",
    "strongestDistractor": "Cobalamin (Vitamin B12)",
    "distractorExclusion": "Cobalamin acts on the remethylation pathway via methionine synthase; it does not correct the defective transsulfuration enzyme cystathionine beta-synthase.",
    "citation": "Mudd SH. The natural history of homocystinuria due to cystathionine beta-synthase deficiency. Am J Hum Genet. 1985 Jan. PMID: 3872065.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics item requiring multi-step deduction on homocystinuria cystathionine beta-synthase deficiency pyridoxine responsiveness.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1002",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Listeria monocytogenes ActA Actin-Based Motility and CSF Penetration",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman with rheumatoid arthritis receiving infliximab presents to the emergency department with a 2-day history of high fever, severe headache, confusion, and neck stiffness. Lumbar puncture yields cloudy cerebrospinal fluid (CSF) with an opening pressure of 240 mm H2O. CSF analysis reveals: leukocytes 2,400/uL with 88% neutrophils, protein 195 mg/dL, and glucose 24 mg/dL (serum glucose 105 mg/dL). Gram stain demonstrates facultative intracellular, short Gram-positive rods with narrow zones of beta-hemolysis on sheep blood agar and tumbling motility at 22 C. The responsible pathogen escapes the phagolysosome via listeriolysin O and moves directly between host cells without entering the extracellular environment. Which of the following mechanisms directly mediates the intracellular and intercellular propulsion of this microorganism?",
    "choices": [
      [
        "Polymerization of host cell actin filaments at one bacterial pole",
        "Listeria monocytogenes is a facultative intracellular Gram-positive bacillus that causes severe meningoencephalitis in neonates, elderly adults, and patients with impaired cell-mediated immunity (e.g., TNF-alpha inhibitors like infliximab). Following receptor-mediated endocytosis, Listeria secretes LISTERIOLYSIN O (a pore-forming toxin) and phospholipases to dissolve the phagosomal membrane and escape into the host cytosol. Inside the cytoplasm, the bacterial surface transmembrane protein ActA recruits and activates the host cell Arp2/3 complex and actin monomers, stimulating DIRECT POLYMERIZATION OF HOST CELL ACTIN FILAMENTS into a polarized filamentous 'comet tail' at one pole of the bacterium. This actin rocket propels Listeria through the cytoplasm and forces it against the host plasma membrane to form pseudopod-like protrusions (listeriopods) that are engulfed by adjacent cells, allowing spread without extracellular immune exposure."
      ],
      [
        "Microtubule depolymerization mediated by bacterial kinesin-mimicking motors",
        "Listeria motility relies exclusively on actin microfilament polymerization via ActA and Arp2/3, not on microtubule disassembly or tubulin dynamics."
      ],
      [
        "Extracellular flagellar rotation powered by an electrochemical proton-motive force",
        "Flagellar motility occurs only extracellularly at ambient temperatures (20-25 C) and is downregulated at 37 C inside mammalian hosts."
      ],
      [
        "Intermediate filament cross-linking via bacterial transglutaminase secretion",
        "Intermediate filaments provide structural integrity but do not participate in bacterial propulsion or comet tail formation."
      ],
      [
        "Secretion of dynein light chains that bind to host nuclear envelope pores",
        "Dynein retrograde transport moves cargo along microtubules toward the centrosome; it does not generate bacterial propulsion plumes."
      ]
    ],
    "shortestValidSolution": "Listeria intracellular spread and propulsion = Polymerization of host cell actin filaments at one pole (ActA-mediated).",
    "necessaryInference": "Identify the mechanism of Listeria cell-to-cell spread: ActA-directed nucleation and polymerization of host cell actin microfilaments.",
    "strongestDistractor": "Extracellular flagellar rotation powered by an electrochemical proton-motive force",
    "distractorExclusion": "Flagella mediate extracellular tumbling motility at 22 C but are shut down at host body temperature (37 C), where actin-based motility dominates.",
    "citation": "Anaya-Sanchez A. Host methylglyoxal activates the Listeria virulence program, allowing bacteria to evade inflammatory phagocytes by cell-to-cell spread. Proc Natl Acad Sci U S A. 2026 Jun 9. PMID: 42234520.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology item requiring multi-step deduction on listeria monocytogenes acta actin-based motility and csf penetration.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1003",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Chronic Granulomatous Disease CYBB gp91phox Mutation Catalase Organisms",
    "provisionalDifficulty": 5,
    "stem": "A 3-year-old boy is evaluated for recurrent life-threatening infections, including Serratia marcescens osteomyelitis at age 14 months and a severe pulmonary abscess caused by Aspergillus fumigatus 3 weeks ago. Physical examination reveals generalized lymphadenopathy, hepatosplenomegaly, and a draining cervical lymph node. Flow cytometric analysis of peripheral blood neutrophils using the dihydrorhodamine-123 (DHR) reduction assay demonstrates a complete absence of green fluorescence after stimulation with phorbol myristate acetate (PMA). Genetic testing reveals a frameshift mutation in the CYBB gene located on the X chromosome. Which of the following biochemical defects is the direct consequence of this patient's underlying genetic disorder?",
    "choices": [
      [
        "Inability of the phagocyte oxidase enzyme complex to convert molecular oxygen to superoxide anion",
        "Chronic granulomatous disease (CGD) is a primary immunodeficiency disorder most commonly inherited in an X-linked recessive pattern due to mutations in the CYBB gene (encoding the gp91phox heavy chain subunit of cytochrome b558). Cytochrome b558 forms the catalytic core of the MULTIPROTEIN PHAGOCYTE NADPH OXIDASE COMPLEX located in the phagolysosomal membrane. Activation of NADPH oxidase normally transfers electrons from cytosolic NADPH to molecular oxygen, generating SUPEROXIDE ANIONS (O2-), which are subsequently dismutated into hydrogen peroxide (H2O2) and hypochlorous acid (HOCl via myeloperoxidase). Without functional gp91phox, phagocytes CANNOT GENERATE SUPEROXIDE, paralyzing the respiratory burst. Patients are vulnerable to CATALASE-POSITIVE PATHOGENS (Staphylococcus aureus, Serratia, Aspergillus, Nocardia, Burkholderia) because these organisms destroy their own metabolic H2O2, depriving phagocytes of any substrate for oxidative killing."
      ],
      [
        "Deficiency of myeloperoxidase preventing hypochlorous acid production from hydrogen peroxide",
        "Myeloperoxidase (MPO) deficiency preserves superoxide generation and normal DHR fluorescence, causing minimal symptoms except mild Candida susceptibility."
      ],
      [
        "Impaired lysosomal trafficking and fusion caused by a defect in the cellular vesicle transport protein LYST",
        "LYST mutations cause Chediak-Higashi syndrome, characterized by giant lysosomal granules, partial albinism, and peripheral neuropathy, with normal NADPH oxidase."
      ],
      [
        "Defective beta-2 integrin (CD18) preventing leukocyte adhesion and transmigration across vascular endothelium",
        "Leukocyte adhesion deficiency type 1 (LAD-1) is caused by CD18 mutations, resulting in delayed umbilical cord separation and leukocytosis without pus."
      ],
      [
        "Absence of purine nucleoside phosphorylase leading to toxic accumulation of dGTP in mature granulocytes",
        "Purine nucleoside phosphorylase deficiency causes combined T-cell and B-cell immunodeficiency, not isolated phagocytic respiratory burst failure."
      ]
    ],
    "shortestValidSolution": "Recurrent Aspergillus/Serratia + negative DHR test + CYBB mutation = Failure to generate superoxide from molecular oxygen (NADPH oxidase defect).",
    "necessaryInference": "Connect X-linked CYBB mutation and absent DHR oxidation directly to the catalytic inability of NADPH oxidase to convert O2 into superoxide anion.",
    "strongestDistractor": "Deficiency of myeloperoxidase preventing hypochlorous acid production from hydrogen peroxide",
    "distractorExclusion": "MPO deficiency produces normal DHR oxidation and respiratory burst because superoxide is generated normally from oxygen.",
    "citation": "Roos D. Hematologically important mutations: X-linked chronic granulomatous disease (fourth update). Blood Cells Mol Dis. 2021 Sep. PMID: 34175765.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology item requiring multi-step deduction on chronic granulomatous disease cybb gp91phox mutation catalase organisms.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1004",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Digoxin Toxicity Sodium-Potassium ATPase Inhibition and Fab Fragments",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman with chronic systolic heart failure and atrial fibrillation presents to the emergency department with anorexia, nausea, confusion, and visual complaints of 'yellow-green halos' around objects. She was recently started on hydrochlorothiazide for peripheral edema. Electrocardiogram demonstrates atrial tachycardia with variable atrioventricular (AV) block and frequent premature ventricular contractions. Serum electrolytes reveal: potassium 2.9 mEq/L (reference: 3.5-5.0 mEq/L), sodium 134 mEq/L, and creatinine 1.8 mg/dL (baseline 1.0 mg/dL). Her serum digoxin concentration is markedly elevated at 3.6 ng/mL (therapeutic: 0.5-0.9 ng/mL). Which of the following cellular mechanisms best explains why hypokalemia exacerbated this patient's digitalis toxicity?",
    "choices": [
      [
        "Decreased extracellular potassium increases digoxin binding to the extracellular domain of the Na+/K+ ATPase",
        "Digoxin exerts its positive inotropic effect by selectively and reversibly inhibiting the CARDIAC SARCOLEMMAL NA+/K+ ATPASE PUMP. The extracellular alpha-subunit of this pump contains shared and overlapping binding sites for extracellular potassium ions and cardiac glycosides. When extracellular potassium is LOW (hypokalemia), there is less steric competition for the pump's binding pocket, leading to INCREASED DIGOXIN BINDING AFFINITY AND PROLONGED ATPASE INHIBITION. Inhibition of Na+/K+ ATPase increases intracellular sodium, which reduces the driving force for the Na+/Ca2+ antiporter, secondarily trapping calcium in the sarcoplasmic reticulum. Excessive intracellular calcium overload triggers delayed afterdepolarizations (DADs), producing ectopy, ventricular arrhythmias, and AV nodal blockade. Treatment of life-threatening digitalis toxicity involves digoxin-specific antibody (Fab) fragments."
      ],
      [
        "Low serum potassium directly prevents renal tubular filtration and excretion of digoxin metabolites",
        "Digoxin is eliminated primarily by glomerular filtration and P-glycoprotein efflux in proximal tubules; hypokalemia does not impair clearance."
      ],
      [
        "Hypokalemia accelerates hepatic cytochrome P450 metabolism into toxic dihydrodigoxin derivatives",
        "Digoxin undergoes minimal hepatic metabolism (about 10%); its toxicity is pharmacodynamic at the sarcolemma rather than CYP-mediated."
      ],
      [
        "Hypokalemia stimulates sarcoplasmic reticulum calcium release channels independently of membrane polarization",
        "Calcium overload is secondary to diminished Na+/Ca2+ antiporter forward flux due to high intracellular sodium, not direct potassium action on ryanodine receptors."
      ],
      [
        "Extracellular potassium depletion causes structural denaturation of the alpha-subunit of cardiac voltage-gated sodium channels",
        "Hypokalemia hyperpolarizes resting membrane potential but does not denature voltage-gated sodium channel alpha-subunits."
      ]
    ],
    "shortestValidSolution": "Hypokalemia potentiates digoxin toxicity = Decreased K+ competition increases digoxin binding to extracellular Na+/K+ ATPase.",
    "necessaryInference": "Deduce that hypokalemia enhances digitalis toxicity by removing steric competition at the extracellular K+-binding site on the Na+/K+ ATPase pump.",
    "strongestDistractor": "Low serum potassium directly prevents renal tubular filtration and excretion of digoxin metabolites",
    "distractorExclusion": "Digoxin clearance depends on renal hemodynamics and P-gp, not serum potassium concentrations; the interaction is pharmacodynamic.",
    "citation": "Chan BS. Digoxin-specific antibody fragments in the treatment of digoxin toxicity. Clin Toxicol (Phila). 2014 Sep-Oct. PMID: 25089630.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pharmacology item requiring multi-step deduction on digoxin toxicity sodium-potassium atpase inhibition and fab fragments.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1005",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Membranous Nephropathy M-Type Phospholipase A2 Receptor Podocyte Antigens",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old previously healthy man presents with a 4-week history of worsening bilateral lower-extremity pitting edema and periorbital puffiness. Blood pressure is 142/88 mm Hg. Laboratory studies reveal: serum albumin 2.1 g/dL, total cholesterol 310 mg/dL, serum creatinine 1.0 mg/dL, and 24-hour urine protein excretion of 6.8 g (reference: <150 mg/day). Urinalysis shows 4+ protein and oval fat bodies with no red blood cell casts. Serologies for antinuclear antibodies, hepatitis B, hepatitis C, and HIV are negative. A renal biopsy demonstrates uniform diffuse thickening of the glomerular capillary wall on light microscopy, with subepithelial immune complex deposits producing a 'spike and dome' pattern on silver methenamine stain. Which of the following is the target antigen responsible for primary disease in this patient?",
    "choices": [
      [
        "M-type phospholipase A2 receptor (PLA2R)",
        "Primary (idiopathic) membranous nephropathy is the leading cause of nephrotic syndrome in non-diabetic Caucasian adults. In approximately 70-80% of primary cases, the disease is mediated by circulating autoantibodies (predominantly IgG4 subclass) directed against the M-TYPE PHOSPHOLIPASE A2 RECEPTOR (PLA2R), a transmembrane glycoprotein abundantly expressed on the podocyte cell membrane. Binding of anti-PLA2R antibodies to podocyte surface antigens leads to in situ immune complex formation, complement activation (C5b-9 membrane attack complex), and podocyte injury. Subepithelial immune deposits accumulate between the podocyte foot processes and the glomerular basement membrane (GBM), stimulating the synthesis of new GBM material around the deposits that forms the classic 'SPIKE AND DOME' appearance on silver stain."
      ],
      [
        "Glomerular basement membrane type IV collagen alpha-3 chain",
        "Antibodies against the alpha-3 chain of type IV collagen cause Goodpasture disease (anti-GBM disease), manifesting as rapidly progressive crescentic glomerulonephritis."
      ],
      [
        "Neutral endopeptidase expressed on proximal tubular brush borders",
        "Neutral endopeptidase antibodies cause rare cases of neonatal alloimmune membranous nephropathy, not primary adult membranous nephropathy."
      ],
      [
        "Thrombospondin type-1 domain-containing 7A (THSD7A) on mesangial cells",
        "THSD7A is expressed on podocytes (accounting for 3-5% of membranous cases), but PLA2R is the dominant target (70-80%) and neither is mesangial."
      ],
      [
        "Streptococcal pyrogenic exotoxin B embedded in the subendothelial space",
        "Streptococcal pyrogenic exotoxin B causes poststreptococcal glomerulonephritis with subepithelial humps, not primary membranous nephropathy."
      ]
    ],
    "shortestValidSolution": "Nephrotic syndrome + diffuse GBM thickening + subepithelial spike-and-dome deposits = Autoantibodies against M-type PLA2R.",
    "necessaryInference": "Identify the primary target antigen in idiopathic membranous nephropathy: M-type phospholipase A2 receptor (PLA2R) on podocytes.",
    "strongestDistractor": "Glomerular basement membrane type IV collagen alpha-3 chain",
    "distractorExclusion": "Anti-type IV collagen alpha-3 antibodies mediate anti-GBM (Goodpasture) disease with linear immunofluorescence and rapid renal failure, not membranous nephropathy.",
    "citation": "Juanet C. Could obinutuzumab be the new therapy for adults with primary membranous nephropathy? Expert Rev Clin Pharmacol. 2026 Nov 5. PMID: 42989087.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on membranous nephropathy m-type phospholipase a2 receptor podocyte antigens.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1006",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Cardiovascular",
    "topic": "Hypertrophic Cardiomyopathy Sarcomeric Mutations and Myofiber Disarray",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old collegiate basketball player collapses suddenly during a competitive game and dies despite immediate cardiopulmonary resuscitation. His family history is notable for an older brother who died suddenly at age 22 while running a marathon. Autopsy reveals marked cardiomegaly with severe asymmetric hypertrophy of the interventricular septum (septal-to-posterior free wall thickness ratio 2.4:1) and dynamic narrowing of the left ventricular outflow tract. Histopathological examination of the septal myocardium demonstrates extensive myofiber disarray with bizarre, disorganized, branched myocytes surrounded by prominent interstitial collagen deposition. Which of the following genes is most commonly mutated in this patient's underlying condition?",
    "choices": [
      [
        "Beta-myosin heavy chain (MYH7) or myosin-binding protein C (MYBPC3)",
        "Hypertrophic cardiomyopathy (HCM) is an autosomal dominant genetic disorder with variable penetrance, recognized as the most frequent cause of sudden cardiac death in young competitive athletes. The underlying genetic pathophysiology involves heterozygous loss-of-function or missense mutations in genes encoding STRUCTURAL PROTEINS OF THE CARDIAC SARCOMERE. Mutations in two genes account for over 70% of all genotyped cases: (1) MYH7 (encoding cardiac beta-myosin heavy chain); and (2) MYBPC3 (encoding cardiac myosin-binding protein C). Defective sarcomeric force generation triggers compensatory myocyte hypertrophy, hypercontractility, and profound HISTOLOGICAL MYOFIBER DISARRAY (loss of parallel myofibrillar orientation with whorled, branched myocytes separated by extensive interstitial fibrosis). This disorganized architecture generates lethal ventricular tachyarrhythmias."
      ],
      [
        "Transthyretin (TTR) encoding plasma transport protein for thyroxine and retinol",
        "Transthyretin mutations cause hereditary cardiac amyloidosis with extracellular Congo red-positive amyloid fibrils, not sarcomeric myofiber disarray."
      ],
      [
        "Fibrillin-1 (FBN1) encoding microfibrillar components of the extracellular matrix",
        "FBN1 mutations cause Marfan syndrome, presenting with aortic root aneurysm and dissection, not asymmetric septal hypertrophy."
      ],
      [
        "Dystrophin (DMD) encoding cytoskeletal links between actin and extracellular matrix",
        "DMD mutations cause Duchenne and Becker muscular dystrophies with dilated cardiomyopathy, not asymmetric hypertrophic cardiomyopathy."
      ],
      [
        "Ryanodine receptor 2 (RYR2) encoding the sarcoplasmic reticulum calcium release channel",
        "RYR2 mutations cause catecholaminergic polymorphic ventricular tachycardia (CPVT) with structurally normal hearts, lacking myofiber disarray."
      ]
    ],
    "shortestValidSolution": "Sudden cardiac death in young athlete + asymmetric septal hypertrophy + myofiber disarray = Sarcomeric mutation (MYH7 or MYBPC3).",
    "necessaryInference": "Link classic autopsy findings of hypertrophic cardiomyopathy (asymmetric septal hypertrophy and myofiber disarray) to sarcomeric gene mutations (MYH7 / MYBPC3).",
    "strongestDistractor": "Dystrophin (DMD) encoding cytoskeletal links between actin and extracellular matrix",
    "distractorExclusion": "DMD mutations impair the cytoskeleton-sarcolemma anchor and produce dilated cardiomyopathy with eccentric chamber enlargement, not hypertrophic myocyte disarray.",
    "citation": "Iqbal S. Genetic and phenotypic landscape of hypertrophic cardiomyopathy in the MENA region: a systematic review. J Community Genet. 2026 Nov 6. PMID: 42993355.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on hypertrophic cardiomyopathy sarcomeric mutations and myofiber disarray.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1007",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Neonatal Respiratory Distress Syndrome Dipalmitoylphosphatidylcholine",
    "provisionalDifficulty": 4,
    "stem": "A male infant is delivered by emergency cesarean section at 28 weeks gestation to a 26-year-old primigravida due to severe preeclampsia. Within 20 minutes of birth, the neonate develops severe tachypnea (respiratory rate 82/min), prominent intercostal and subcostal retractions, expiratory grunting, and central cyanosis on room air. Arterial blood gas shows: pH 7.18, PaCO2 62 mm Hg, and PaO2 44 mm Hg. Chest radiography demonstrates diffuse, bilateral, symmetric reticulogranular 'ground-glass' opacities with prominent air bronchograms and low lung volumes. The pathophysiology is driven by the collapse of small alveoli during expiration due to excessive surface tension. Which of the following lipid compounds constitutes the principal active surface-tension-reducing component of pulmonary surfactant?",
    "choices": [
      [
        "Dipalmitoylphosphatidylcholine (Lecithin)",
        "Neonatal respiratory distress syndrome (NRDS) is caused by a deficiency of PULMONARY SURFACTANT in premature infants, synthesized by TYPE II PNEUMOCYTES beginning around 24-26 weeks gestation but not reaching mature levels until 35 weeks. According to the Law of Laplace (P = 2T / r), as alveolar radius (r) decreases during expiration, collapsing pressure (P) increases dramatically unless surface tension (T) decreases proportionally. Surfactant aligns at the air-water interface to disrupt hydrogen bonding and lower surface tension, preventing atelectasis. The major functional component (comprising ~80% of surfactant phospholipids) is DIPALMITOYLPHOSPHATIDYLCHOLINE (DPPC, also known as lecithin). In clinical practice, fetal lung maturity can be assessed via amniotic fluid by measuring the LECITHIN-TO-SPHINGOMYELIN (L/S) RATIO; an L/S ratio >= 2.0 indicates adequate surfactant production."
      ],
      [
        "Sphingomyelin",
        "Sphingomyelin is a membrane phospholipid whose amniotic fluid concentration remains constant throughout gestation; it serves as the denominator in the L/S ratio."
      ],
      [
        "Phosphatidylglycerol",
        "Phosphatidylglycerol is a minor surfactant phospholipid that appears late in gestation but is not the principal surface-active agent."
      ],
      [
        "Dipalmitoylphosphatidylethanolamine",
        "Phosphatidylethanolamine is a structural membrane component that lacks the potent surface-tension-reducing properties of dipalmitoylphosphatidylcholine."
      ],
      [
        "Cholesterol ester",
        "Neutral lipids like cholesterol modulate membrane fluidity but do not form the surface-active monolayer that prevents alveolar collapse."
      ]
    ],
    "shortestValidSolution": "NRDS in preterm infant (ground-glass opacities, atelectasis) = Deficiency of dipalmitoylphosphatidylcholine (lecithin).",
    "necessaryInference": "Identify dipalmitoylphosphatidylcholine (DPPC) as the primary surface-tension-lowering phospholipid component of pulmonary surfactant.",
    "strongestDistractor": "Sphingomyelin",
    "distractorExclusion": "Sphingomyelin remains constant throughout late pregnancy and serves only as the reference standard in the L/S ratio; DPPC is the active tension reducer.",
    "citation": "Beijers RJ. Prophylactic versus selective use of surfactant for preventing morbidity and mortality in preterm infants at risk of respiratory distress syndrome. Cochrane Database Syst Rev. 2026 Jul 22. PMID: 42483935.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 physiology item requiring multi-step deduction on neonatal respiratory distress syndrome dipalmitoylphosphatidylcholine.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1008",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Gastrointestinal",
    "topic": "Hereditary Hemochromatosis HFE C282Y Mutation Hepcidin Suppression",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents to the clinic complaining of progressive fatigue, generalized joint stiffness predominantly affecting the second and third metacarpophalangeal joints, and erectile dysfunction over the past year. Physical examination reveals hyperpigmented, slate-gray discoloration of the skin over sun-exposed areas and mild hepatomegaly. Fasting serum glucose is 168 mg/dL. Laboratory evaluation demonstrates: serum iron 210 ug/dL (reference: 65-175 ug/dL), total iron-binding capacity 240 ug/dL (reference: 250-450 ug/dL), transferrin saturation 88% (reference: 20-50%), and serum ferritin 2,200 ng/mL (reference: 20-250 ng/mL). Genetic testing confirms a homozygous missense mutation in the HFE gene on chromosome 6 (C282Y). Which of the following pathophysiological mechanisms is the primary driver of systemic iron overload in this patient?",
    "choices": [
      [
        "Decreased hepatic hepcidin synthesis leading to unrestrained ferroportin activity in enterocytes",
        "Hereditary hemochromatosis is an autosomal recessive disorder of iron homeostasis most commonly caused by homozygous C282Y mutations in the HFE gene on chromosome 6. The normal HFE protein complexes with transferrin receptor 1 (TfR1) on hepatocytes, serving as an iron sensor. Mutant HFE disrupts this interaction, tricking hepatocytes into sensing an iron-deficient state. Consequently, hepatocytes synthesize and secrete INAPPROPRIATELY LOW LEVELS OF HEPCIDIN. Under normal conditions, hepcidin binds to FERROPORTIN (the sole basolateral iron exporter on enterocytes and macrophages) and triggers its internalization and lysosomal degradation. With hepcidin suppressed, FERROPORTIN REMAINS CONSTANTLY ACTIVE, causing unrestricted enterocyte iron efflux into portal circulation and massive systemic parenchymal iron accumulation (liver cirrhosis, bronze skin, diabetes, pseudogout)."
      ],
      [
        "Increased renal tubular reabsorption of transferrin-bound iron via megalin-cubilin receptors",
        "Renal iron loss is negligible under normal circumstances; systemic iron balance is regulated entirely at the level of intestinal absorption and reticuloendothelial storage."
      ],
      [
        "Constitutive activation of divalent metal transporter 1 (DMT1) on the hepatocyte canalicular membrane",
        "DMT1 imports ferrous iron across the enterocyte apical microvillar membrane, not across hepatocyte canalicular membranes."
      ],
      [
        "Defective ferrochelatase leading to accumulation of free protoporphyrin in erythroid precursors",
        "Ferrochelatase deficiency causes erythropoietic protoporphyria with painful photosensitivity, not systemic hemochromatosis with iron overload."
      ],
      [
        "Accelerated splenic reticuloendothelial phagocytosis of erythrocytes producing excessive hemoglobin breakdown",
        "Hemochromatosis is an absorptive disorder; reticuloendothelial iron stores are actually relatively spared compared to severe parenchymal iron deposition."
      ]
    ],
    "shortestValidSolution": "Hemochromatosis (C282Y, bronze diabetes, ferritin >2000) = Decreased hepcidin synthesis -> uninhibited ferroportin iron export.",
    "necessaryInference": "Deduce that the HFE C282Y mutation impairs hepatic iron sensing, reducing hepcidin and allowing unchecked ferroportin-mediated dietary iron absorption.",
    "strongestDistractor": "Increased renal tubular reabsorption of transferrin-bound iron via megalin-cubilin receptors",
    "distractorExclusion": "The kidneys do not regulate total body iron; homeostasis is controlled by enterocyte absorption and macrophage release via the hepcidin-ferroportin axis.",
    "citation": "Alamgir M. Genetics of Hereditary Hemochromatosis. Gastroenterol Clin North Am. 2026 Dec. PMID: 42933937.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on hereditary hemochromatosis hfe c282y mutation hepcidin suppression.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1009",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Endocrine",
    "topic": "Multiple Endocrine Neoplasia Type 2B RET Proto-Oncogene M918T",
    "provisionalDifficulty": 5,
    "stem": "A 16-year-old boy is brought to the clinic for evaluation of multiple painless, soft, fleshy nodules on the tip of his tongue and mucosal surface of his lower lip that have enlarged over several years. He has a history of chronic severe constipation since early childhood. Physical examination reveals a tall, slender adolescent with long, thin extremities, arachnodactyly, high-arched palate, joint hypermobility, and everted upper eyelids with thickened subconjunctival nerves. Thyroid palpation reveals a hard, fixed, 2.5-cm nodule in the right lobe, and fine-needle aspiration demonstrates sheets of malignant spindle-shaped cells that stain strongly for calcitonin and amyloid. Blood pressure is 158/96 mm Hg. Which of the following genetic alterations is the specific underlying cause of this patient's syndrome?",
    "choices": [
      [
        "Gain-of-function point mutation in the RET proto-oncogene encoding a receptor tyrosine kinase",
        "This patient presents with MULTIPLE ENDOCRINE NEOPLASIA TYPE 2B (MEN 2B), characterized by the clinical triad of: (1) MEDULLARY THYROID CARCINOMA (calcitonin-secreting neuroendocrine C-cell tumor with amyloid stroma); (2) PHEOCHROMOCYTOMA (paroxysmal hypertension, palpitations); and (3) MUCOSAL NEUROMAS (lips, tongue, eyelids) combined with MARFANOID HABITUS and intestinal ganglioneuromatosis. MEN 2B is caused by an autosomal dominant GAIN-OF-FUNCTION MUTATION IN THE RET PROTO-ONCOGENE, most commonly a specific point mutation in the intracellular catalytic tyrosine kinase domain (codon M918T in exon 16). This mutation confers ligand-independent constitutive phosphorylation and activation of intracellular signaling pathways (MAPK, PI3K/Akt), driving neuroendocrine neoplasia. Unlike MEN 2A, MEN 2B does NOT feature primary hyperparathyroidism."
      ],
      [
        "Inactivating loss-of-function mutation in the MEN1 gene encoding the tumor suppressor menin",
        "MEN1 mutations cause MEN type 1 (parathyroid adenomas, pituitary adenomas, and pancreatic neuroendocrine tumors), without mucosal neuromas or medullary thyroid cancer."
      ],
      [
        "Germline loss-of-function mutation in the VHL tumor suppressor gene on chromosome 3p",
        "VHL mutations cause von Hippel-Lindau disease (cerebellar hemangioblastomas, clear cell renal cell carcinoma, pheochromocytoma), lacking medullary thyroid carcinoma."
      ],
      [
        "Microdeletion of chromosome 22q11.2 disrupting third and fourth pharyngeal pouch development",
        "22q11.2 deletion causes DiGeorge syndrome (thymic hypoplasia, hypocalcemia, conotruncal cardiac anomalies), not marfanoid habitus or thyroid cancer."
      ],
      [
        "Loss-of-function mutation in the NF1 tumor suppressor gene encoding the Ras-GTPase-activating protein neurofibromin",
        "NF1 mutations produce cafe-au-lait macules, cutaneous neurofibromas, Lisch nodules, and optic gliomas, not mucosal neuromas and medullary thyroid cancer."
      ]
    ],
    "shortestValidSolution": "Medullary thyroid cancer + mucosal neuromas + marfanoid habitus = MEN 2B due to gain-of-function RET proto-oncogene mutation.",
    "necessaryInference": "Recognize MEN 2B triad (medullary thyroid cancer, pheochromocytoma, mucosal neuromas) and identify its molecular etiology: constitutive RET tyrosine kinase activation.",
    "strongestDistractor": "Inactivating loss-of-function mutation in the MEN1 gene encoding the tumor suppressor menin",
    "distractorExclusion": "MEN1 mutations cause the 3 Ps (pituitary, parathyroid, pancreas) without calcitonin-producing medullary thyroid cancer or mucosal neuromas.",
    "citation": "Mirra G. Extra-Endocrine Features in Infancy as Early Clues to MEN2B. Pediatrics. 2026 Sep 1. PMID: 42580739.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on multiple endocrine neoplasia type 2b ret proto-oncogene m918t.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1010",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Paroxysmal Nocturnal Hemoglobinuria PIGA Mutation CD55 CD59 Deficiency",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman presents to the emergency department with severe right upper quadrant abdominal pain and jaundice. She reports a 3-month history of fatigue and episodes of dark, cola-colored urine, most prominent in the first morning void. Vital signs: blood pressure 118/72 mm Hg, pulse 94/min. Physical examination reveals scleral icterus and tender hepatomegaly. Abdominal Doppler ultrasonography demonstrates acute thrombosis of the right and middle hepatic veins with absent flow (Budd-Chiari syndrome). Laboratory evaluation shows: hemoglobin 8.4 g/dL, reticulocytes 8.2%, total bilirubin 3.8 mg/dL (direct 0.6 mg/dL), serum lactate dehydrogenase (LDH) 1,450 U/L (reference: 140-280 U/L), and serum haptoglobin undetectable. Direct antiglobulin (Coombs) test is negative. Flow cytometry of peripheral blood granulocytes confirms absent surface expression of CD55 and CD59. Which of the following is the primary molecular defect underlying this disorder?",
    "choices": [
      [
        "Acquired somatic mutation in the PIGA gene preventing synthesis of glycosylphosphatidylinositol (GPI) anchors",
        "Paroxysmal nocturnal hemoglobinuria (PNH) is a clonal hematopoietic stem cell disorder caused by an ACQUIRED SOMATIC MUTATION IN THE PIGA GENE (phosphatidylinositol glycan class A), located on the X chromosome. PIGA encodes an enzyme essential for the biosynthesis of GLYCOSYLPHOSPHATIDYLINOSITOL (GPI) ANCHORS, which tether specific regulatory proteins to the eukaryotic cell membrane. In the absence of GPI anchors, clonal erythrocytes lack two critical complement-inactivating proteins: (1) CD55 (decay-accelerating factor), which destabilizes C3 and C5 convertases; and (2) CD59 (MAC inhibitory protein), which blocks C9 binding and membrane attack complex assembly. At night, relative hypoventilation causes mild respiratory acidosis that enhances complement activation, triggering intravascular hemolysis, hemoglobinuria, free iron release, nitric oxide scavenging, and LIFE-THREATENING VENOUS THROMBOSIS (e.g., Budd-Chiari syndrome)."
      ],
      [
        "Autosomal dominant mutation in ankyrin or spectrin disrupting erythrocyte vertical cytoskeletal stability",
        "Ankyrin and spectrin defects cause hereditary spherocytosis with extravascular splenic hemolysis, normal GPI anchors, and negative flow cytometry."
      ],
      [
        "Homozygous missense mutation in the beta-globin gene resulting in valine substitution for glutamic acid at codon 6",
        "This mutation causes sickle cell anemia (HbS) with vaso-occlusive crises and extravascular/intravascular hemolysis, but intact CD55 and CD59 expression."
      ],
      [
        "Inherited deficiency of glucose-6-phosphate dehydrogenase impairing glutathione reduction under oxidative stress",
        "G6PD deficiency causes episodic hemolysis following oxidant exposure (fava beans, sulfa drugs) with Heinz bodies and bite cells, with normal CD55/CD59."
      ],
      [
        "Severe deficiency of ADAMTS13 metalloprotease leading to accumulation of ultra-large von Willebrand factor multimers",
        "ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura (TTP) with microangiopathic hemolytic anemia and schistocytes, not absence of GPI-linked proteins."
      ]
    ],
    "shortestValidSolution": "Dark morning urine + Budd-Chiari + absent CD55/CD59 on flow cytometry = PNH due to acquired somatic PIGA gene mutation.",
    "necessaryInference": "Connect intravascular complement-mediated hemolysis and venous thrombosis to an acquired PIGA somatic mutation causing GPI anchor deficiency.",
    "strongestDistractor": "Autosomal dominant mutation in ankyrin or spectrin disrupting erythrocyte vertical cytoskeletal stability",
    "distractorExclusion": "Ankyrin and spectrin defects cause hereditary spherocytosis characterized by extravascular splenic sequestration, without loss of surface GPI anchors.",
    "citation": "Jiang L. Paroxysmal nocturnal hemoglobinuria with a positive Coombs test presenting as acute kidney injury: a case report. Front Med (Lausanne). 2026. PMID: 42180722.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on paroxysmal nocturnal hemoglobinuria piga mutation cd55 cd59 deficiency.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  },
  {
    "code": "op-c-s1-1011",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Dermatology",
    "topic": "Pemphigus Vulgaris Desmoglein-3 Autoantibodies and Intraepidermal Acantholysis",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old woman presents to the dermatology clinic with painful oral sores that have made eating difficult for the past 6 weeks. Two weeks ago, she developed widespread blisters on her scalp, face, and upper trunk. Physical examination reveals extensive, shallow erosions on the buccal mucosa and soft palate. On the trunk, there are multiple flaccid, thin-walled bullae that rupture easily under light mechanical lateral pressure, leaving raw, denuded weeping erosions (positive Nikolsky sign). A punch biopsy of an intact lesion demonstrates intraepidermal blister formation with loss of cell-cell adhesion (acantholysis) immediately above the basal cell layer, leaving a 'tombstone' appearance of intact basal keratinocytes along the basement membrane. Direct immunofluorescence of perilesional skin reveals intercellular IgG and C3 deposition throughout the epidermis in a reticular 'fishnet' pattern. Which of the following structures is the direct molecular target of the autoantibodies in this patient?",
    "choices": [
      [
        "Desmoglein-3 (cadherin components of desmosomes)",
        "Pemphigus vulgaris is a potentially fatal autoimmune blistering disease characterized by IgG autoantibodies (predominantly IgG4) directed against DESMOGLEIN-3 (and in cutaneous cases, desmoglein-1). Desmogleins are transmembrane calcium-dependent cadherin proteins that form the core adhesive structure of DESMOSOMES, which anchor adjacent keratinocytes to one another throughout the epidermis. Autoantibody binding disrupts desmosomal adhesion, leading to ACANTHOLYSIS (detachment of epidermal keratinocytes) and the formation of FLACCID, INTRAEPIDERMAL BLISTERS that rupture easily (positive Nikolsky sign). Oral mucosal involvement is present in nearly 100% of cases and often precedes cutaneous lesions by months. Histopathology shows suprabasal acantholysis with a 'tombstone' basal layer, and direct immunofluorescence shows a classic 'FISHNET' intercellular pattern. In contrast, bullous pemphigoid targets hemidesmosomes (BP180/BP230), causing tense subepidermal blisters with linear basement membrane fluorescence."
      ],
      [
        "Hemidesmosomal BP180 and BP230 anchoring proteins",
        "BP180 and BP230 are targeted in bullous pemphigoid, which features tense, deep bullae that do not rupture easily, negative Nikolsky sign, and linear basement membrane IgG."
      ],
      [
        "Type VII collagen anchoring fibrils in the sublamina densa",
        "Type VII collagen is targeted in epidermolysis bullosa acquisita, causing scarring subepidermal blisters with mechanobullous skin fragility."
      ],
      [
        "Tissue transglutaminase and epidermal transglutaminase at the dermoepidermal junction",
        "Anti-transglutaminase IgA antibodies cause dermatitis herpetiformis in celiac disease, featuring intensely pruritic grouped vesicles over extensor surfaces."
      ],
      [
        "Claudin and occludin transmembrane tight junction proteins",
        "Claudin and occludin form tight junctions (zonula occludens) that regulate paracellular permeability; they are not desmosomal targets in pemphigus."
      ]
    ],
    "shortestValidSolution": "Flaccid bullae + oral ulcers + Nikolsky positive + fishnet immunofluorescence = Autoantibodies to desmoglein-3 (desmosomes).",
    "necessaryInference": "Distinguish pemphigus vulgaris from bullous pemphigoid: desmoglein-3 desmosomal disruption causes flaccid intraepidermal blisters and positive Nikolsky sign.",
    "strongestDistractor": "Hemidesmosomal BP180 and BP230 anchoring proteins",
    "distractorExclusion": "BP180/BP230 are hemidesmosome components targeted in bullous pemphigoid, which produces tense subepidermal blisters and linear basement membrane staining.",
    "citation": "Banerjee I. Pemphigus vulgaris - A report of three cases and review of literature. J Family Med Prim Care. 2018 Sep-Oct. PMID: 30598970.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology item requiring multi-step deduction on pemphigus vulgaris desmoglein-3 autoantibodies and intraepidermal acantholysis.",
      "distractorExclusionNotes": "Distractors excluded based on contradictory anatomical or physiological mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Verified against official PubMed metadata and genuine PMID."
    }
  }
];
