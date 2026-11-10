import json

# Generator for Step 1 Batch 14 (op-c-s1-0326 to 0350)
from gen_s1_b14 import items as b14_part1

b14_part2 = [
  # 0333
  {
    "code": "op-c-s1-0333",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Fluoroquinolone Resistance DNA Gyrase Mutations",
    "subtopic": "Point Mutations in gyrA and parC Quinolone Resistance-Determining Regions",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old man presents with dysuria and purulent urethral discharge. Nucleic acid amplification testing of the discharge is positive for Neisseria gonorrhoeae. Antimicrobial susceptibility testing demonstrates high-level resistance to ciprofloxacin (MIC > 32 mcg/mL). In susceptible bacteria, fluoroquinolones bactericidally inhibit DNA replication by stabilizing covalent enzyme-DNA cleavage complexes. Genetic sequencing of the resistant N. gonorrhoeae isolate demonstrates missense point mutations in the quinolone resistance-determining region (QRDR) of the gyrA and parC genes. Which of the following catalytic enzymes are encoded by these mutated genes?",
    "choices": [
      ["DNA topoisomerase II (DNA gyrase) and DNA topoisomerase IV", "Correct. Fluoroquinolones (ciprofloxacin, levofloxacin, moxifloxacin) inhibit two essential bacterial type II topoisomerases: DNA GYRASE (composed of GyrA and GyrB subunits) and DNA TOPOISOMERASE IV (composed of ParC and ParE subunits). DNA gyrase introduces negative supercoils into double-stranded DNA ahead of the replication fork to relieve torsional strain, whereas topoisomerase IV is responsible for decatenating (unlinking) daughter chromosomal rings after replication. Fluoroquinolones bind to the enzyme-DNA complex, trapping the broken DNA strands and preventing resealing, leading to lethal double-stranded DNA breaks. Chromosomal resistance in Gram-negatives (N. gonorrhoeae, E. coli, Pseudomonas) arises primarily via point mutations in the QUINOLONE RESISTANCE-DETERMINING REGION (QRDR) of gyrA and parC, altering key serine or acidic residues that form the water-metal ion bridge coordinating drug binding."],
      ["DNA-dependent RNA polymerase core enzyme and sigma-70 transcription factor", "Bacterial DNA-dependent RNA polymerase is targeted by rifamycins (rifampin), which bind the beta subunit (encoded by rpoB), not fluoroquinolones."],
      ["Peptidyl transferase center of the 50S ribosomal subunit and 23S rRNA", "The 50S ribosomal peptidyl transferase center is targeted by chloramphenicol, macrolides, and clindamycin, not fluoroquinolones."],
      ["Penicillin-binding protein 2a (PBP2a) transpeptidase and transglycosylase", "PBP2a is encoded by the mecA gene in methicillin-resistant Staphylococcus aureus (MRSA), conferring beta-lactam resistance, not fluoroquinolone resistance."],
      ["Dihydrofolate reductase and dihydropteroate synthase in folate biosynthesis", "Dihydropteroate synthase and dihydrofolate reductase are targeted by sulfonamides and trimethoprim, respectively."]
    ],
    "shortestValidSolution": "Fluoroquinolone resistance (ciprofloxacin) with gyrA and parC mutations -> DNA gyrase (topoisomerase II) and topoisomerase IV.",
    "necessaryInference": "Correlate ciprofloxacin target inhibition and QRDR mutations in gyrA and parC with bacterial DNA gyrase and topoisomerase IV.",
    "strongestDistractor": "DNA-dependent RNA polymerase core enzyme and sigma-70 transcription factor",
    "distractorExclusion": "RNA polymerase is the target of rifampin (rpoB mutations), whereas fluoroquinolones target DNA gyrase and topoisomerase IV.",
    "citation": "Hopkins KL, Davies RH, Threlfall EJ. Mechanisms of quinolone resistance in Escherichia coli and other Enterobacteriaceae. Int J Antimicrob Agents. 2005;25(5):358-373. PMID: 15850974."
  },
  # 0334
  {
    "code": "op-c-s1-0334",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Macrolide Resistance 23S rRNA Methylation erm Genes",
    "subtopic": "Post-Transcriptional Dimethylation of Adenine Preventing MLSB Drug Binding",
    "provisionalDifficulty": 4,
    "stem": "A 5-year-old boy with acute otitis media fails to improve after 5 days of oral azithromycin therapy. Culture of middle ear fluid grows Streptococcus pneumoniae that is resistant to erythromycin, azithromycin, and clindamycin (the MLSB resistance phenotype). Genetic testing identifies the presence of the ermB (erythromycin ribosome methylation) gene. Which of the following post-transcriptional modifications is catalyzed by the product of this gene to confer cross-resistance across these distinct antimicrobial classes?",
    "choices": [
      ["Mono- or dimethylation of a specific adenine residue within the peptidyl transferase region of 23S ribosomal RNA", "Correct. Macrolides (azithromycin, clarithromycin, erythromycin), Lincosamides (clindamycin), and Streptogramin B share overlapping binding sites on the 50S ribosomal subunit near the peptidyl transferase center, blocking polypeptide exit tunnel elongation. The most prevalent mechanism of high-level acquired resistance in Gram-positive cocci (S. pneumoniae, S. aureus) is TARGET SITE MODIFICATION mediated by plasmid- or transposon-borne erm (erythromycin ribosome methylase) genes. The Erm methyltransferase catalyzes the POST-TRANSCRIPTIONAL DIMETHYLATION OF A SPECIFIC ADENINE RESIDUE (A2058 in E. coli numbering) within the 23S rRNA of the 50S subunit. This dimethylation creates steric clash that simultaneously prevents binding of all three chemically distinct antibiotic families (the MLSB cross-resistance phenotype)."],
      ["Enzymatic phosphorylation of the 2'-hydroxyl group on the desosamine sugar ring of the macrolide", "Enzymatic macrolide phosphorylation is mediated by mph (macrolide phosphotransferase) genes, conferring resistance only to macrolides, without causing cross-resistance to clindamycin (lincosamides)."],
      ["Active energy-dependent efflux of antibiotics via an ATP-binding cassette transporter (mefA)", "The mefA gene encodes an active efflux pump that confers resistance only to 14- and 15-membered macrolides (M phenotype), leaving clindamycin susceptible."],
      ["Enzymatic esterification of the lactone macrolide ring catalyzed by erythromycin esterases", "Erythromycin esterases (ereA/ereB) hydrolyze the macrolide lactone ring in Enterobacteriaceae, but do not affect clindamycin or confer the MLSB phenotype."],
      ["Deacetylation of the nascent peptide chain at the entrance of the ribosomal peptide exit tunnel", "Bacterial ribosomal resistance operates via ribosomal RNA methylation (erm), not peptide deacetylation."]
    ],
    "shortestValidSolution": "Erythromycin + clindamycin resistance (MLSB phenotype) with ermB gene -> 23S rRNA adenine methylation.",
    "necessaryInference": "Cross-resistance between macrolides and clindamycin (MLSB phenotype) mediated by erm genes is caused by post-transcriptional methylation of an adenine residue on 23S rRNA of the 50S subunit.",
    "strongestDistractor": "Active energy-dependent efflux of antibiotics via an ATP-binding cassette transporter (mefA)",
    "distractorExclusion": "The mefA efflux pump confers resistance only to macrolides (M phenotype); cross-resistance to clindamycin requires erm-mediated 23S rRNA methylation.",
    "citation": "Leclercq R. Mechanisms of resistance to macrolides and lincosamides: nature of the resistance elements and their clinical implications. Clin Infect Dis. 2002;34(4):482-492. PMID: 11797175."
  },
  # 0335
  {
    "code": "op-c-s1-0335",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Daptomycin Mechanism Membrane Depolarization vs Inactivation by Surfactant",
    "subtopic": "Calcium-Dependent Oligomerization Pore Formation and Inactivation by Pulmonary Surfactant",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man hospitalized with right-sided tricuspid valve endocarditis secondary to methicillin-resistant Staphylococcus aureus (MRSA) bacteremia is treated with intravenous daptomycin. Four days later, he develops fever, hypoxemia, and a new right lower lobe consolidation on chest radiography. Sputum culture yields heavy growth of the same MRSA strain. Despite increasing the daptomycin dosage, his pulmonary infiltrate worsens rapidly. The infectious disease consultant explains that daptomycin is highly effective for MRSA endocarditis and bacteremia, but is completely ineffective for treating bacterial pneumonia. Which of the following best explains why daptomycin fails in the treatment of pulmonary infections?",
    "choices": [
      ["Chemical sequestration and functional inactivation by pulmonary surfactant in the alveolar fluid lining", "Correct. Daptomycin is a cyclic lipopeptide antibiotic with potent bactericidal activity against Gram-positive organisms (MRSA, VRE). In the presence of physiological calcium ions, daptomycin inserts its lipophilic tail into the bacterial plasma membrane, oligomerizing into transmembrane ion channels that induce rapid POTASSIUM EFFLUX, MEMBRANE DEPOLARIZATION, and cell death without cell lysis. CRITICAL USMLE STEP 1 PHARMACOLOGY TRAP: DAPTOMYCIN IS INEFFECTIVE FOR PNEUMONIA because it is sequestered and bound by PULMONARY SURFACTANT in the alveolar lining. Surfactant contains dipalmitoylphosphatidylcholine (DPPC), which incorporates daptomycin into lipid micellar complexes, rendering it completely inert and unable to penetrate the bacterial membrane. Therefore, daptomycin must NEVER be used to treat MRSA pneumonia (linezolid or vancomycin is preferred)."],
      ["Rapid enzymatic hydrolysis of the cyclic peptide ring by human alveolar macrophage elastases", "Daptomycin is cleared intact renally; it is not degraded by alveolar macrophage proteases."],
      ["Poor penetration across the alveolar-capillary barrier resulting in undetectable epithelial lining fluid levels", "Daptomycin does achieve measurable concentrations in lung lining fluid, but it is bound and functionally inactivated by surfactant."],
      ["Constitutive downregulation of calcium-sensing receptors on bacterial cell walls in alveolar environments", "Bacterial membrane insertion of daptomycin requires calcium, but alveolar calcium levels are normal; the failure is direct surfactant antagonism."],
      ["Induction of pneumococcal beta-lactamase enzymes cross-neutralizing cyclic lipopeptides", "Beta-lactamases cleave beta-lactam rings; daptomycin is a cyclic lipopeptide lacking a beta-lactam structure."]
    ],
    "shortestValidSolution": "Daptomycin effective for MRSA bacteremia/endocarditis but fails in pneumonia -> Inactivation by pulmonary surfactant.",
    "necessaryInference": "Recognize that daptomycin depolarizes bacterial membranes but is bound and inactivated by alveolar pulmonary surfactant, preventing its use in pneumonia.",
    "strongestDistractor": "Poor penetration across the alveolar-capillary barrier resulting in undetectable epithelial lining fluid levels",
    "distractorExclusion": "Daptomycin enters alveolar lining fluid, but is chemically sequestered and neutralized by surfactant phospholipids.",
    "citation": "Silverman JA, Mortin LI, Vanpraagh AD, et al. Inhibition of daptomycin by pulmonary surfactant: in vitro modeling and clinical implications. J Infect Dis. 2005;191(12):2149-2152. PMID: 15898002."
  },
  # 0336
  {
    "code": "op-c-s1-0336",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Extended-Spectrum Beta-Lactamases and Carbapenem Superiority",
    "subtopic": "Plasmid-Encoded ESBL Hydrolysis of Cephalosporins and Carbapenem Resistance Sparing",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman with catheter-associated urosepsis develops bacteremia with a multi-drug resistant strain of Klebsiella pneumoniae. Disk diffusion and automated broth microdilution susceptibility testing reveal that the isolate is resistant to ampicillin, ceftriaxone, cefotaxime, and cefepime, but susceptibility to ceftriaxone is restored when combined with clavulanic acid in vitro. Susceptibility to meropenem and imipenem remains fully intact. Which of the following resistance mechanisms is present in this bacterial isolate, and what is the definitive drug class of choice for invasive infections caused by this organism?",
    "choices": [
      ["Extended-spectrum beta-lactamase (ESBL) production; treated with carbapenems (meropenem)", "Correct. Extended-spectrum beta-lactamases (ESBLs; e.g., TEM, SHV, CTX-M) are plasmid-encoded beta-lactamases commonly found in Enterobacterales (Klebsiella pneumoniae, Escherichia coli). ESBLs hydrolyze and confer resistance to PENICILLINS, THIRD-GENERATION CEPHALOSPORINS (ceftriaxone, ceftazidime), FOURTH-GENERATION CEPHALOSPORINS (cefepime), and MONOBACTAMS (aztreonam). They are typically INHIBITED BY BETA-LACTAMASE INHIBITORS (clavulanic acid, tazobactam) in vitro. The definitive, evidence-based treatment of choice for severe or invasive ESBL infections (e.g., bacteremia) is a CARBAPENEM (meropenem, imipenem, ertapenem). Carbapenems resist ESBL hydrolysis because their unique trans-hydroxyethyl side chain provides steric protection to the beta-lactam ring."],
      ["AmpC chromosomal beta-lactamase derepression; treated with fourth-generation cephalosporins (cefepime)", "AmpC beta-lactamases are inducible chromosomal enzymes in SPACE organisms (Serratia, Pseudomonas, Acinetobacter, Citrobacter, Enterobacter) that are resistant to clavulanic acid; this isolate is inhibited by clavulanate and is Klebsiella, characteristic of ESBL."],
      ["Metallo-beta-lactamase (NDM-1) synthesis; treated with aztreonam monotherapy", "Metallo-beta-lactamases (class B) hydrolyze carbapenems and are resistant to clavulanic acid; they do not spare meropenem."],
      ["Klebsiella pneumoniae carbapenemase (KPC) production; treated with piperacillin-tazobactam", "KPC hydrolyzes all beta-lactams including carbapenems; meropenem susceptibility was fully preserved in this isolate, ruling out KPC."],
      ["Altered penicillin-binding protein (PBP) transpeptidase; treated with high-dose ampicillin-sulbactam", "Altered PBPs mediate resistance in MRSA and Enterococcus faecium, not Gram-negative plasmid-mediated ESBLs."]
    ],
    "shortestValidSolution": "Cephalosporin-resistant Klebsiella inhibited by clavulanic acid and susceptible to meropenem -> ESBL (carbapenem is drug of choice).",
    "necessaryInference": "Resistance to 3rd/4th generation cephalosporins reversed by clavulanic acid = ESBL. Carbapenems (meropenem) are the gold-standard bactericidal treatment of choice for ESBL bacteremia.",
    "strongestDistractor": "AmpC chromosomal beta-lactamase derepression; treated with fourth-generation cephalosporins (cefepime)",
    "distractorExclusion": "AmpC beta-lactamases are not inhibited by clavulanic acid, whereas this isolate's resistance was explicitly reversed by clavulanate (the defining diagnostic hallmark of ESBL).",
    "citation": "Paterson DL, Bonomo RA. Extended-spectrum beta-lactamases: a clinical update. Clin Microbiol Rev. 2005;18(4):657-686. PMID: 16223899."
  },
  # 0337
  {
    "code": "op-c-s1-0337",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Antifungal Mechanisms Polyenes vs Azoles",
    "subtopic": "Amphotericin B Ergosterol Pore Formation vs Azole 14-Alpha-Demethylase Inhibition",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old man with AIDS (CD4 count 28/mcL) is admitted with cryptococcal meningitis. He is treated with intravenous amphotericin B and flucytosine for 2 weeks, followed by oral fluconazole consolidation therapy. In the design of antifungal pharmacology, drugs target specific components of the fungal cell membrane that differ from mammalian host membranes. Which of the following correctly pairs the biochemical mechanism of action of amphotericin B with that of fluconazole?",
    "choices": [
      ["Amphotericin B binds ergosterol to form transmembrane micropores; fluconazole inhibits cytochrome P450 14-alpha-demethylase", "Correct. Fungal cell membranes contain ERGOSTEROL as their principal sterol, whereas mammalian cell membranes contain cholesterol. Master the two core membrane antifungal mechanisms on USMLE Step 1: (1) POLYENES (AMPHOTERICIN B, NYSTATIN): Amphotericin B is an amphipathic molecule that binds directly to ergosterol in the fungal plasma membrane. Multiple polyene molecules aggregate to form TRANSMEMBRANE PORES (micropores) that disrupt membrane stability, causing lethal leakage of intracellular potassium, magnesium, and other electrolytes. (Toxicity: binds host cholesterol weakly, causing nephrotoxicity, renal tubular acidosis, and hypokalemia). (2) AZOLES (FLUCONAZOLE, VORICONAZOLE, ITRACONAZOLE): Azoles inhibit the fungal cytochrome P450 enzyme 14-ALPHA-DEMETHYLASE (encoded by ERG11). This enzyme normally converts lanosterol into ergosterol. Inhibition blocks ergosterol synthesis and causes toxic 14-alpha-methylated sterols to accumulate, destabilizing the fungal membrane."],
      ["Amphotericin B inhibits squalene epoxidase; fluconazole binds directly to membrane glucans to induce osmotic lysis", "Squalene epoxidase is inhibited by terbinafine, not amphotericin B; glucans are targeted by echinocandins, not azoles."],
      ["Amphotericin B inhibits fungal thymidylate synthase; fluconazole disrupts mitotic spindle beta-tubulin polymerization", "Thymidylate synthase is targeted by flucytosine (converted to 5-FU); mitotic spindles are disrupted by griseofulvin."],
      ["Amphotericin B inhibits beta-(1,3)-D-glucan synthase; fluconazole blocks chitin microfibril assembly", "Beta-(1,3)-D-glucan synthase is inhibited by echinocandins (caspofungin), not amphotericin B."],
      ["Amphotericin B blocks fungal protein elongation factor-2; fluconazole inhibits topoisomerase II decatenation", "Protein elongation is targeted by sordarins; topoisomerase II is not targeted by azoles."]
    ],
    "shortestValidSolution": "Amphotericin B = binds ergosterol to form membrane pores. Fluconazole = inhibits 14-alpha-demethylase in ergosterol synthesis.",
    "necessaryInference": "Differentiate polyene pore formation (binding pre-existing ergosterol) from azole synthesis inhibition (blocking lanosterol 14-alpha-demethylase).",
    "strongestDistractor": "Amphotericin B inhibits squalene epoxidase; fluconazole binds directly to membrane glucans to induce osmotic lysis",
    "distractorExclusion": "Squalene epoxidase is the target of terbinafine, and glucans are the target of echinocandins.",
    "citation": "Odds FC, Brown AJ, Gow NA. Antifungal agents: mechanisms of action. Trends Microbiol. 2003;11(6):272-279. PMID: 12823944."
  },
  # 0338
  {
    "code": "op-c-s1-0338",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Echinocandins Mechanism of Action Beta-Glucan Synthase",
    "subtopic": "Caspofungin Inhibition of Beta-(1,3)-D-Glucan Cell Wall Biosynthesis",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old woman undergoing induction chemotherapy for acute myeloid leukemia develops persistent neutropenic fever despite broad-spectrum antibacterial coverage with vancomycin and cefepime. Blood cultures grow Candida glabrata that is resistant to fluconazole. The infectious disease consultant initiates intravenous caspofungin. In fungal pathophysiology, this class of antifungal agents exerts its fungicidal effect by inhibiting the biosynthesis of which of the following cell wall or membrane constituents?",
    "choices": [
      ["Beta-(1,3)-D-glucan polysaccharides in the fungal cell wall, leading to loss of structural integrity and osmotic lysis", "Correct. Echinocandins (CASPOFUNGIN, MICAFUNGIN, ANIDULAFUNGIN) are lipopeptide antifungals that non-competitively inhibit the enzyme BETA-(1,3)-D-GLUCAN SYNTHASE (encoded by FKS1 and FKS2). Beta-(1,3)-D-glucan is a major structural polysaccharide fibril network that cross-links with chitin and mannoproteins to maintain the mechanical rigidity and osmotic integrity of the FUNGAL CELL WALL. Inhibition of beta-glucan synthase deprives the fungal cell of its protective wall, rendering it vulnerable to ambient osmotic stress and causing rapid cell lysis. Because mammalian host cells possess plasma membranes but COMPLETELY LACK A CELL WALL (and lack beta-glucan synthase), echinocandins have an exceptionally favorable safety and tolerability profile compared to amphotericin B and azoles. They are first-line for invasive candidiasis and salvage therapy for invasive aspergillosis."],
      ["Ergosterol in the fungal plasma membrane, causing leakage of intracellular cations", "Ergosterol synthesis is inhibited by azoles (14-alpha-demethylase), allylamines (squalene epoxidase), and morpholines, not echinocandins."],
      ["Chitin polymers composed of beta-(1,4)-linked N-acetylglucosamine in the inner cell wall", "Chitin synthase is targeted by nikkomycins (experimental antifungals), not clinically utilized echinocandins."],
      ["Capsular glucuronoxylomannan polymers protecting fungi from phagocytic engulfment", "Glucuronoxylomannan is the polysaccharide capsule unique to Cryptococcus neoformans (which is intrinsically resistant to echinocandins)."],
      ["Lanosterol in the endoplasmic reticulum membrane, preventing sterol transport to the cell surface", "Lanosterol is an intermediate in ergosterol biosynthesis; echinocandins target cell wall glucans, not sterols."]
    ],
    "shortestValidSolution": "Caspofungin / echinocandins -> Inhibit beta-(1,3)-D-glucan synthase in fungal cell wall.",
    "necessaryInference": "Identify that echinocandins (caspofungin) target fungal cell wall synthesis by inhibiting beta-(1,3)-D-glucan synthase, distinguishing cell wall targets from membrane sterols.",
    "strongestDistractor": "Chitin polymers composed of beta-(1,4)-linked N-acetylglucosamine in the inner cell wall",
    "distractorExclusion": "Chitin is a minor structural wall component, but echinocandins specifically inhibit the synthesis of beta-(1,3)-D-glucan.",
    "citation": "Denning DW. Echinocandin antifungal drugs. Lancet. 2003;362(9390):1142-1151. PMID: 14550704."
  }
]

print(f"Loaded {len(b14_part1) + len(b14_part2)} items for Batch 14.")
