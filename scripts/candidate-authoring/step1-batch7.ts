import { CandidateSpec } from './types';

export const step1Batch7: CandidateSpec[] = [
  {
    code: 'op-c-s1-0151',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'General Principles',
    topic: 'Methicillin Resistance Altered PBP2a Penicillin-Binding Protein',
    subtopic: 'mecA Gene Transpeptidase Resistance and Vancomycin Indications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Methicillin-Resistant Staphylococcus aureus (MRSA): Resistance to all beta-lactam antibiotics (penicillins, cephalosporins [except 5th-gen ceftaroline], carbapenems, and monobactams) is mediated by the mecA gene, which encodes an ALTERED PENICILLIN-BINDING PROTEIN (PBP2a). Normal PBPs are membrane-bound transpeptidases that cross-link D-Ala-D-Ala peptidoglycan chains. PBP2a has markedly reduced binding affinity for beta-lactams, allowing uninterrupted cell wall synthesis despite therapeutic drug concentrations. In contrast, standard penicillin resistance in MSSA is mediated by plasmid-borne beta-lactamase (penicillinase), which hydrolyzes the beta-lactam ring and is overcome by beta-lactamase inhibitors (clavulanate, sulbactam) or nafcillin.',
    citation: 'Chambers HF, DeLeo FR. Waves of resistance: Staphylococcus aureus in the antibiotic era. Nat Rev Microbiol. 2009;7(9):629-641. PMID: 19680247.',
    stem:
      'A 42-year-old man who injects intravenous heroin is admitted to the hospital with high fevers, rigors, and severe lower back pain over the past 3 days. Physical examination reveals an acutely ill man with track marks over both antecubital fossae, point tenderness over the L3–L4 lumbar spinous processes, and a new 3/6 holosystolic murmur at the left lower sternal border that increases in intensity with inspiration (tricuspid regurgitation). Contrast-enhanced MRI of the lumbar spine confirms L3–L4 vertebral osteomyelitis with an associated epidural abscess. Transthoracic echocardiogram demonstrates a 1.2-cm mobile vegetation on the anterior leaflet of the tricuspid valve. Blood cultures drawn on admission rapidly grow Gram-positive, catalase-positive, coagulase-positive cocci in clusters. Quantitative antimicrobial susceptibility testing demonstrates high-level resistance to nafcillin, oxacillin, cefazolin, and piperacillin-tazobactam. The bacterial resistance mechanism responsible for treatment failure with these beta-lactam antimicrobials is mediated by which of the following genetic alterations?',
    options: [
      {
        text: 'Acquisition of the mecA gene encoding a novel transpeptidase (PBP2a) with low binding affinity for beta-lactam antibiotics',
        explanation: 'The patient has infective endocarditis and vertebral osteomyelitis caused by Methicillin-Resistant Staphylococcus aureus (MRSA). Beta-lactam antibiotics (penicillins, cephalosporins, carbapenems) normally exert bactericidal action by covalently binding to and inhibiting penicillin-binding proteins (PBPs), which are membrane-associated transpeptidases that catalyze the final cross-linking of adjacent peptidoglycan pentapeptide chains (D-alanyl-D-alanine) in the bacterial cell wall. Standard penicillin resistance in S. aureus is mediated by plasmid-borne blaZ beta-lactamase, which hydrolyzes the beta-lactam ring but is ineffective against penicillinase-resistant penicillins (nafcillin, oxacillin). In contrast, methicillin resistance in MRSA is mediated by the acquisition of the staphylococcal cassette chromosome mec (SCCmec) carrying the mecA gene. The mecA gene encodes PBP2a, an alternative 78-kDa transpeptidase with a conformational change in its active site that confers markedly reduced binding affinity for virtually all beta-lactam antibiotics, permitting cell wall transpeptidation to proceed unhindered. Only fifth-generation cephalosporins (ceftaroline) bind PBP2a with high affinity.'
      },
      {
        text: 'Plasmid-mediated production of a narrow-spectrum TEM-1 beta-lactamase that hydrolyzes penicillins',
        explanation: 'TEM-1 is a plasmid-encoded beta-lactamase common in Gram-negative bacilli (E. coli, H. influenzae) and easily inhibited by clavulanate; it does not confer MRSA resistance.'
      },
      {
        text: 'Chromosomal point mutations in the parC gene altering topoisomerase IV subunit structure',
        explanation: 'Mutations in parC and gyrA confer fluoroquinolone resistance (ciprofloxacin, levofloxacin), not beta-lactam resistance in staphylococci.'
      },
      {
        text: 'Constitutive ribosomal methylation of 23S rRNA mediated by the erm gene preventing drug binding',
        explanation: 'Ribosomal 23S methylation encoded by erm genes confers macrolide-lincosamide-streptogramin B (MLSB) cross-resistance (e.g., clindamycin resistance detected on D-test), not beta-lactam resistance.'
      },
      {
        text: 'Enzymatic O-phosphorylation and N-acetylation of aminoglycoside 30S ribosomal binding domains',
        explanation: 'Aminoglycoside-modifying enzymes (acetyltransferases, phosphotransferases) confer resistance to gentamicin and tobramycin, not cell-wall transpeptidase inhibitors.'
      }
    ]
  },
  {
    code: 'op-c-s1-0152',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'General Principles',
    topic: 'Vancomycin Resistance VanA D-Ala-D-Lac Peptidoglycan Alteration',
    subtopic: 'Enterococcus Faecium Cell Wall Remodeling and D-Lactate Substitution',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Vancomycin-Resistant Enterococci (VRE): Vancomycin is a glycopeptide that binds the terminal D-Ala-D-Ala dipeptide of peptidoglycan precursors by forming five hydrogen bonds, sterically inhibiting transglycosylase (elongation) and transpeptidase (cross-linking). High-level vancomycin resistance (VanA and VanB phenotypes in Enterococcus faecium) is encoded on transposon Tn1546. The VanA operon encodes: 1. VanA ligase: replaces the terminal D-alanine with D-LACTATE (forming D-Ala-D-Lac instead of D-Ala-D-Ala); 2. VanX dipeptidase: hydrolyzes normal D-Ala-D-Ala precursors. The D-Ala-D-Lac substitution replaces an amide hydrogen bond with an ester bond, causing a 1,000-fold reduction in vancomycin binding affinity while maintaining structural integrity for bacterial cell wall transpeptidation. Treatment: Linezolid, Daptomycin, or Tigecycline.',
    citation: 'Cetinkaya Y, et al. Vancomycin-resistant enterococci: an emerging pathogen. Clin Microbiol Rev. 2000;13(4):686-707. PMID: 11023964.',
    stem:
      'A 73-year-old woman hospitalized in the medical intensive care unit for 3 weeks while receiving broad-spectrum intravenous piperacillin-tazobactam and vancomycin develops new-onset septic shock with high fever and hypotension. A newly placed indwelling urinary catheter drains cloudy, foul-smelling urine. Urinalysis demonstrates 4+ leukocyte esterase, 3+ protein, and > 100 WBCs/HPF. Blood and urine cultures grow non-hemolytic, bile-esculin-positive, pyrrolidonyl arylamidase (PYR)-positive, Gram-positive cocci in pairs and short chains that grow vigorously in 6.5% NaCl broth. The organism is identified as Enterococcus faecium. Minimum inhibitory concentration (MIC) testing reveals high-level resistance to vancomycin (MIC > 256 microg/mL) and ampicillin. The transmissible plasmid-borne operon responsible for vancomycin resistance in this pathogen alters the cell wall by which of the following molecular modifications?',
    options: [
      {
        text: 'Enzymatic substitution of the terminal D-alanyl-D-alanine pentapeptide with D-alanyl-D-lactate',
        explanation: 'Vancomycin is a large, tricyclic glycopeptide antimicrobial that binds with high affinity to the terminal D-alanyl-D-alanine (D-Ala-D-Ala) dipeptide of cell wall peptidoglycan precursors (Lipid II). By forming five hydrogen bonds with the D-Ala-D-Ala terminus, vancomycin sterically hinders transglycosylase enzymes from polymerizing the glycan chain and prevents transpeptidases from cross-linking the peptidoglycan wall. High-level vancomycin resistance in Enterococcus faecium (VanA phenotype, encoded on the Tn1546 transposon) involves an inducible cluster of five genes: (1) VanS (membrane histidine kinase sensor) and VanR (response regulator); (2) VanA (a modified ligase that synthesizes D-alanyl-D-lactate instead of D-alanyl-D-alanine); (3) VanH (a dehydrogenase that produces D-lactate from pyruvate); and (4) VanX (a D,D-dipeptidase that destroys normal endogenous D-Ala-D-Ala peptides). Because D-Ala-D-Lac substitutes an ester linkage for an amide linkage, one critical hydrogen bond is lost, resulting in a 1,000-fold loss of vancomycin binding affinity while bacterial transpeptidases can still recognize D-Ala-D-Lac to cross-link the wall.'
      },
      {
        text: 'Active efflux of glycopeptide molecules mediated by a proton-dependent multidrug resistance pump',
        explanation: 'Efflux pumps mediate resistance to tetracyclines (TetA) and fluoroquinolones (NorA), but glycopeptides are too large for bacterial efflux pumps.'
      },
      {
        text: 'Phosphorylation and inactivation of vancomycin by a periplasmic aminoglycoside-like phosphotransferase',
        explanation: 'Vancomycin is not inactivated enzymatically by phosphorylation; resistance is achieved entirely through remodeling of the bacterial target peptide.'
      },
      {
        text: 'Overproduction of thick capsular polysaccharide slime that traps vancomycin in the glycocalyx',
        explanation: 'Trapping in cell wall peptidoglycan occurs in Vancomycin-Intermediate S. aureus (VISA) due to thick, cell-wall overproduction, distinct from VRE target substitution.'
      },
      {
        text: 'Mutation in the 23S ribosomal RNA peptidyl transferase center preventing glycopeptide binding',
        explanation: 'Vancomycin targets the cell wall, not the ribosome; 23S rRNA mutations confer resistance to linezolid and macrolides, not vancomycin.'
      }
    ]
  },
  {
    code: 'op-c-s1-0153',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Respiratory',
    topic: 'Daptomycin Pore Formation and Pulmonary Surfactant Inactivation',
    subtopic: 'Membrane Depolarization and Contraindication in Pneumonia',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Daptomycin: cyclic lipopeptide active ONLY against Gram-positive organisms (MRSA, VRE, Enterococcus faecalis/faecium). Mechanism: inserts lipophilic tail into bacterial cytoplasmic membrane in a CALCIUM-DEPENDENT manner -> oligomerizes to form TRANSMEMBRANE PORES -> rapid POTASSIUM (K+) EFFLUX -> membrane depolarization -> arrest of DNA/RNA/protein synthesis and rapid cell death without lysis. INDICATIONS: MRSA bacteremia, right-sided infective endocarditis, skin/soft tissue infections. CRUCIAL CLINICAL CONTRAINDICATION: DAPTOMYCIN MUST NEVER BE USED TO TREAT PNEUMONIA. Daptomycin is bound and COMPLETELY INACTIVATED by PULMONARY SURFACTANT (dipalmitoylphosphatidylcholine). Major adverse effect: skeletal muscle toxicity (RHABDOMYOLYSIS, elevated creatine kinase; monitor weekly CK).',
    citation: 'Silverman JA, et al. In vitro susceptibility and mode of action of daptomycin for Streptococcus pneumoniae. Antimicrob Agents Chemother. 2005;49(1):33-38. PMID: 15616023.',
    stem:
      'A 62-year-old woman is hospitalized in the intensive care unit for treatment of persistent Methicillin-Resistant Staphylococcus aureus (MRSA) bacteremia originating from an infected central venous catheter. The primary care team initiates therapy with a cyclic lipopeptide antimicrobial agent that inserts into the bacterial cell membrane in a calcium-dependent manner, creating transmembrane ion-permeable channels that cause rapid potassium efflux and membrane depolarization. On hospital day 4, blood cultures have cleared; however, the patient develops a new cough with purulent sputum, fever of 39.1 C, tachypnea, and worsening hypoxemia. Chest radiography reveals a new dense lobar consolidation in the right middle lobe, and sputum Gram stain demonstrates numerous Gram-positive cocci in clusters with heavy neutrophils. The consulting infectious disease physician immediately discontinues this antimicrobial agent and switches the patient to intravenous vancomycin. Which of the following explains why this cyclic lipopeptide is clinically ineffective for the treatment of pulmonary infections?',
    options: [
      {
        text: 'It is directly bound, sequestered, and inactivated by alveolar pulmonary surfactant',
        explanation: 'The medication described is daptomycin, a cyclic lipopeptide antibiotic that exhibits rapid bactericidal activity against Gram-positive pathogens, including MRSA and vancomycin-resistant enterococci (VRE). Daptomycin\'s lipophilic tail inserts into the bacterial cytoplasmic membrane in a calcium-dependent process, where it oligomerizes into transmembrane pores. These pores allow rapid potassium (K+) efflux, causing membrane depolarization, loss of membrane potential, and cellular arrest. Daptomycin is FDA-approved for complicated skin and soft-tissue infections, MRSA bacteremia, and right-sided infective endocarditis. However, daptomycin is strictly contraindicated for the treatment of community-acquired or nosocomial pneumonia. Pulmonary surfactant (specifically dipalmitoylphosphatidylcholine, DPPC, produced by type II pneumocytes) binds with high affinity to daptomycin, causing conformational changes that completely inactivate its antibacterial activity within the alveolar fluid. In addition, daptomycin causes skeletal myopathy and rhabdomyolysis, requiring routine weekly monitoring of serum creatine kinase (CK).'
      },
      {
        text: 'It fails to penetrate the blood-alveolar barrier due to high molecular weight and hydrophilicity',
        explanation: 'Daptomycin penetrates well into lung tissue; its failure in pneumonia is due to biochemical inactivation by surfactant, not poor penetration.'
      },
      {
        text: 'It is rapidly hydrolyzed by alveolar macrophage carboxylesterases into inactive metabolites',
        explanation: 'Daptomycin is eliminated unchanged primarily by renal excretion; it is not metabolized by alveolar macrophage esterases.'
      },
      {
        text: 'Acidic pH within inflammatory purulent bronchial exudates completely denatures its cyclic peptide backbone',
        explanation: 'Daptomycin remains stable in acidic pH; macrolides and aminoglycosides lose activity in acidic purulence, but daptomycin failure is surfactant-mediated.'
      },
      {
        text: 'It induces intense reflex pulmonary vasoconstriction causing fatal ventilation-perfusion mismatch',
        explanation: 'Daptomycin does not cause pulmonary vasoconstriction; its pulmonary limitation is purely pharmacological inactivation by alveolar surfactant.'
      }
    ]
  },
  {
    code: 'op-c-s1-0154',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Behavioral Health',
    topic: 'Linezolid Ribosomal 50S Inhibition and Serotonin Syndrome',
    subtopic: 'Weak Monoamine Oxidase Inhibition and SSRI Drug Interactions',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Linezolid: oxazolidinone antibiotic active against resistant Gram-positive organisms (MRSA, VRE). Mechanism of action: binds the 50S ribosomal subunit (specifically the 23S rRNA peptidyl transferase center), uniquely blocking the formation of the 70S INITIATION COMPLEX. Major clinical toxicity and drug interactions: 1. SEROTONIN SYNDROME: Linezolid is a weak, reversible, non-selective MONOAMINE OXIDASE INHIBITOR (MAOI). When co-administered with SSRIs (sertraline, fluoxetine), SNRIs, or TCAs, it impairs serotonin degradation, precipitating life-threatening Serotonin Syndrome (Hunter criteria: neuromuscular hyperactivity [clonus, hyperreflexia, tremor], autonomic instability [fever, diaphoresis, tachycardia, hypertension], and altered mental status [agitation, delirium]); 2. Bone marrow suppression (thrombocytopenia, anemia, leukopenia, especially after > 2 weeks); 3. Optic and peripheral neuropathy and lactic acidosis (due to inhibition of mitochondrial protein synthesis).',
    citation: 'Taylor JJ, et al. Linezolid and Serotonin Toxicity: A Review. Clin Infect Dis. 2006;42(11):1578-1583. PMID: 16652315.',
    stem:
      'A 38-year-old woman with a history of recurrent major depressive disorder well controlled on oral sertraline is admitted to the hospital with severe diabetic foot cellulitis and osteomyelitis. Wound and bone cultures grow vancomycin-resistant Enterococcus faecium (VRE). Intravenous antimicrobial therapy is initiated with an oxazolidinone antibiotic that inhibits bacterial protein synthesis by binding to the 23S rRNA of the 50S ribosomal subunit, preventing 70S initiation complex assembly. Forty-eight hours later, the patient becomes acutely confused, diaphoretic, and severely agitated. Physical examination reveals an agitated, disoriented woman with flushed skin and profuse sweating. Vital signs: blood pressure 178/104 mm Hg, heart rate 124/min, respirations 24/min, and temperature 39.2 C (102.6 F). Neurological examination reveals bilateral dilated pupils (mydriasis), prominent horizontal ocular flutter, continuous spontaneous rhythmic jerking of both ankles (ankle clonus), 4+ patellar reflexes, and fine tremors throughout both upper extremities. The antimicrobial agent responsible for this patient’s acute neurotoxicity possesses which of the following secondary pharmacodynamic properties?',
    options: [
      {
        text: 'Reversible non-selective inhibition of monoamine oxidase, impairing synaptic serotonin degradation',
        explanation: 'The patient was treated with linezolid, an oxazolidinone antimicrobial used for resistant Gram-positive infections (VRE and MRSA). Linezolid has a unique antibacterial mechanism: it binds to the 23S ribosomal RNA of the 50S subunit, preventing assembly of the functional 70S initiation complex (unlike macrolides, aminoglycosides, or tetracyclines, which block elongation). In addition to its antimicrobial actions, linezolid is structurally related to toloxatone and functions as a weak, reversible, non-selective inhibitor of monoamine oxidase A and B (MAOI). When linezolid is administered to a patient already taking a selective serotonin reuptake inhibitor (SSRI, such as sertraline), the combination of increased serotonin release/reuptake blockade (from sertraline) and impaired enzymatic degradation by MAO (from linezolid) causes massive synaptic serotonin accumulation. This triggers Serotonin Syndrome, characterized by the classic Hunter criteria triad: (1) Neuromuscular hyperactivity (spontaneous or inducible clonus, hyperreflexia, tremor); (2) Autonomic instability (hyperthermia, tachycardia, hypertension, diaphoresis, mydriasis); and (3) Altered mental status (agitation, delirium).'
      },
      {
        text: 'Direct agonism of central dopamine D2 receptors disinhibiting basal ganglia motor pathways',
        explanation: 'Linezolid does not stimulate dopamine receptors; dopamine agonists (pramipexole, ropinirole) treat Parkinson disease, not cause clonus and hyperthermia.'
      },
      {
        text: 'Allosteric potentiation of central GABA-A receptors increasing chloride conductance',
        explanation: 'GABA-A potentiators (benzodiazepines, barbiturates) are sedatives and anticonvulsants used to treat serotonin syndrome, not cause it.'
      },
      {
        text: 'Competitive antagonism of postjunctional nicotinic acetylcholine receptors at the motor endplate',
        explanation: 'Nicotinic antagonists (neuromuscular blockers like vecuronium) cause flaccid paralysis without autonomic hyperthermia or clonus.'
      },
      {
        text: 'Blockade of central muscarinic acetylcholine receptors precipitating anticholinergic delirium',
        explanation: 'Anticholinergic delirium presents with hyperthermia, mydriasis, and dry skin (anhidrosis) with absent bowel sounds, whereas serotonin syndrome features profuse diaphoresis, hyperactive bowel sounds, and pathognomonic clonus/hyperreflexia.'
      }
    ]
  },
  {
    code: 'op-c-s1-0155',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Musculoskeletal',
    topic: 'Fluoroquinolones Topoisomerase Inhibition and Tendon Rupture',
    subtopic: 'DNA Gyrase and Topoisomerase IV Cleavage Complex Arrest and MMP Upregulation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Fluoroquinolones (ciprofloxacin, levofloxacin, moxifloxacin): bactericidal antimicrobials. Mechanism: inhibit bacterial DNA GYRASE (topoisomerase II, which introduces negative supercoils to relieve torsional strain ahead of the replication fork) and TOPOISOMERASE IV (which decatenates intertwined daughter chromosomes following replication), trapping the cleavage complex and causing lethal double-stranded DNA breaks. Adverse effects: 1. TENDINITIS AND TENDON RUPTURE (classically ACHILLES TENDON rupture): caused by chelation of magnesium/iron, induction of tenocyte oxidative stress, and upregulation of matrix metalloproteinases (MMPs) degrading type I collagen; increased risk in ELDERLY (> 60 years), CONCOMITANT CORTICOSTEROIDS, and renal failure; 2. QT prolongation; 3. Chelation with divalent cations (Ca2+, Mg2+, Fe2+) reducing oral absorption; 4. Cartilage damage in growing animals (contraindicated in pregnancy and pediatrics).',
    citation: 'Sendzik J, et al. Fluoroquinolone-induced serious undesirable effects: tendonitis and tendon rupture. Cell Tissue Res. 2010;340(3):499-509. PMID: 20461402.',
    stem:
      'A 64-year-old woman with a history of rheumatoid arthritis managed with chronic oral prednisone (10 mg daily) is treated with oral levofloxacin for an acute exacerbation of chronic obstructive pulmonary disease. On day 5 of antimicrobial therapy, while stepping off a sidewalk curb, she hears a loud "pop" in the back of her right heel, followed by sudden, sharp pain and an inability to bear weight. Physical examination reveals swelling and localized tenderness over the posterior right ankle, with a palpable gap 4 cm proximal to the calcaneal tuberosity. When the patient lies prone with her feet hanging over the edge of the examination table, squeezing her right calf muscle produces no plantar flexion of the right foot (positive Thompson test), while squeezing the left calf produces normal passive plantar flexion. Ultrasonography confirms a complete full-thickness rupture of the right Achilles tendon. The antimicrobial class prescribed to this patient inhibits which of the following essential bacterial enzymatic targets?',
    options: [
      {
        text: 'Bacterial DNA gyrase (topoisomerase II) and topoisomerase IV preventing the relaxation of supercoiled DNA and chromosome decatenation',
        explanation: 'The patient experienced an acute Achilles tendon rupture secondary to levofloxacin, a member of the fluoroquinolone antimicrobial class. Fluoroquinolones (ciprofloxacin, levofloxacin, moxifloxacin) exert bactericidal activity by targeting two essential bacterial type II topoisomerases: (1) DNA gyrase (topoisomerase II), which introduces negative supercoils into bacterial DNA to relieve mechanical torsional strain generated ahead of advancing replication forks; and (2) Topoisomerase IV, which separates (decatenates) intertwined concatenated circular daughter chromosomes following DNA replication. Fluoroquinolones stabilize the covalent enzyme-DNA cleavage complex, stalling replication forks and generating lethal double-stranded DNA breaks. Tendinopathy and tendon rupture (most commonly the Achilles tendon, but also patellar, quadriceps, and rotator cuff tendons) is a well-known boxed warning for all fluoroquinolones. Tenotoxicity involves: chelation of magnesium required for tenocyte viability, mitochondrial free radical generation, and upregulation of matrix metalloproteinases (MMP-1 and MMP-3) that digest type I collagen fibers. Risk is dramatically amplified by concurrent systemic corticosteroid therapy, advanced age (> 60 years), and renal insufficiency.'
      },
      {
        text: 'Bacterial DNA-dependent RNA polymerase halting transcription initiation at promoter sequences',
        explanation: 'Inhibition of DNA-dependent RNA polymerase is the mechanism of rifampin (used for tuberculosis and prophylaxis), which causes orange bodily fluids and hepatotoxicity, not tendon rupture.'
      },
      {
        text: 'Cytoplasmic dihydrofolate reductase preventing conversion of dihydrofolic acid to tetrahydrofolate',
        explanation: 'Trimethoprim inhibits bacterial dihydrofolate reductase; toxicities include megaloblastic anemia, hyperkalemia, and rash, not tendon rupture.'
      },
      {
        text: 'Bacterial 30S ribosomal subunit preventing initial formyl-methionyl-tRNA binding',
        explanation: 'Aminoglycosides (gentamicin) bind the 30S ribosomal subunit to cause misreading; adverse effects are nephrotoxicity and ototoxicity, not tendinitis.'
      },
      {
        text: 'Bacterial transpeptidases cross-linking peptide chains in the nascent peptidoglycan wall',
        explanation: 'Beta-lactams inhibit transpeptidases; they do not target DNA topoisomerases or cause Achilles tendon rupture.'
      }
    ]
  },
  {
    code: 'op-c-s1-0156',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Gastrointestinal',
    topic: 'Erythromycin Motilin Receptor Agonism for Diabetic Gastroparesis',
    subtopic: 'Macrolide 50S Translocation Inhibition and hERG QTc Prolongation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Macrolides (Erythromycin, Azithromycin, Clarithromycin): 1. ANTIMICROBIAL MECHANISM: reversibly bind the 23S rRNA of the 50S ribosomal subunit, blocking PEPTIDYL TRANSFERASE TRANSLOCATION (preventing tRNA transfer from A site to P site); 2. GASTROINTESTINAL PROKINETIC PROPERTY: Erythromycin is a potent, direct AGONIST OF MOTILIN RECEPTORS on smooth muscle cells of the stomach and duodenum. Stimulates Phase III migrating motor complexes (MMCs), causing powerful antral contractions. Clinically utilized off-label for acute diabetic gastroparesis and prior to upper endoscopy to clear gastric blood; 3. ADVERSE EFFECTS: GI distress (cramping, diarrhea due to motilin agonism), CYP3A4 INHIBITION (clarithromycin/erythromycin increase statin and warfarin levels), CHOLESTATIC HEPATITIS (erythromycin estolate), and QT PROLONGATION / Torsades de pointes (blocks hERG potassium channels). Tachyphylaxis limits long-term motilin use.',
    citation: 'Peeters TL. Erythromycin and other macrolides as prokinetic agents. Gastroenterology. 1993;105(6):1886-1899. PMID: 8253366.',
    stem:
      'A 54-year-old woman with a 20-year history of poorly controlled type 1 diabetes mellitus complicated by diabetic nephropathy and peripheral neuropathy presents to the gastroenterology clinic with severe early satiety, persistent nausea, and recurrent episodes of vomiting undigested food eaten 6 to 8 hours earlier. Physical examination reveals an epigastric succession splash audible with the stethoscope when rocking the abdomen. Upper endoscopy reveals retained food and gastric secretions without mechanical gastric outlet obstruction or peptic ulceration. A standardized 4-hour gastric emptying scintigraphy study with a radiolabeled solid meal demonstrates 62% retention at 4 hours (normal: < 10% retention), confirming severe diabetic gastroparesis. The gastroenterologist prescribes a 2-week course of low-dose oral erythromycin to stimulate coordinated gastric motor activity. Erythromycin accelerates gastric emptying primarily by mimicking which of the following endogenous gastrointestinal regulatory peptides?',
    options: [
      {
        text: 'Motilin, acting directly on motilin receptors on gastrointestinal smooth muscle to trigger migrating motor complexes',
        explanation: 'Diabetic gastroparesis is a form of autonomic neuropathy characterized by delayed gastric emptying in the absence of mechanical obstruction, driven by vagal nerve degeneration and loss of interstitial cells of Cajal. Erythromycin is a 14-membered ring macrolide antibiotic that inhibits bacterial protein synthesis by binding to the 23S rRNA of the 50S ribosomal subunit, preventing translocation. In addition to its antimicrobial actions, erythromycin possesses a non-antibiotic pharmacodynamic property: it acts as a potent, direct agonist at motilin receptors located on smooth muscle cells and intrinsic enteric neurons of the gastric antrum and duodenum. Motilin is an endogenous peptide secreted by endocrine M cells of the duodenal and jejunal mucosa during fasting. Endogenous motilin stimulates Phase III of the migrating motor complex (MMC), producing sweeping, propulsive peristaltic contractions that empty non-digestible solids from the stomach into the small intestine. Erythromycin induces powerful antral contractions and accelerates gastric emptying in acute gastroparesis, although rapid tachyphylaxis (receptor downregulation) limits its utility to short-term therapy (< 4 weeks).'
      },
      {
        text: 'Cholecystokinin (CCK), stimulating gallbladder contraction and relaxing the sphincter of Oddi',
        explanation: 'Cholecystokinin (from I cells) actually delays gastric emptying to allow intestinal lipid emulsification; it does not accelerate gastric propulsion.'
      },
      {
        text: 'Secretin, stimulating pancreatic ductal bicarbonate excretion and suppressing gastrin',
        explanation: 'Secretin (from S cells) stimulates bicarbonate release and inhibits gastric acid and motility; erythromycin does not bind secretin receptors.'
      },
      {
        text: 'Vasoactive intestinal peptide (VIP), stimulating smooth muscle relaxation and water secretion',
        explanation: 'VIP relaxes gastrointestinal smooth muscle and sphincters; agonism would worsen gastroparesis rather than stimulate peristalsis.'
      },
      {
        text: 'Somatostatin, exerting tonic inhibitory control over all splanchnic exocrine and motor secretions',
        explanation: 'Somatostatin (and its analog octreotide) potently inhibits gastrointestinal motility and secretions, the exact opposite of erythromycin\'s prokinetic action.'
      }
    ]
  },
  {
    code: 'op-c-s1-0157',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Renal',
    topic: 'Amphotericin B Ergosterol Pore Formation and Distal Tubular Toxicity',
    subtopic: 'Membrane Permeability Shift Afferent Vasoconstriction and Type 1 RTA',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Amphotericin B: polyene antifungal used for severe systemic fungal infections (Cryptococcus, Mucor, Histoplasma, Blastomyces, Coccidioides). Mechanism: binds ERGOSTEROL in fungal cell membranes, forming TRANSMEMBRANE PORES that leak intracellular ions (especially K+ and Mg2+), killing the fungus. Mammalian cholesterol is structurally similar to ergosterol, causing significant clinical toxicity: 1. NEPHROTOXICITY (nearly universal): causes intense AFFERENT ARTERIOLAR VASOCONSTRICTION (prerenal azotemia, drop in GFR, prevented by PRE-TREATMENT IV SALINE HYDRATION); 2. Direct tubular cell necrosis and distal tubular membrane pore formation (Type 1 RTA with SEVERE HYPOKALEMIA, HYPOMAGNESEMIA, and non-gap metabolic acidosis; requires aggressive daily potassium and magnesium repletion); 3. Normocytic normochromic anemia (suppresses renal erythropoietin production); 4. Infusion-related reactions ("shake and bake": fever, chills, rigors, thrombophlebitis, histamine/prostaglandin release). Liposomal formulation reduces nephrotoxicity.',
    citation: 'Laniado-Laborin R, Cabrales-Vargas MN. Amphotericin B: side effects and toxicity. Rev Iberoam Micol. 2009;26(4):223-227. PMID: 19836900.',
    stem:
      'A 38-year-old man with advanced HIV infection (CD4+ T-cell count 32/microL) is hospitalized for cryptococcal meningitis. Induction therapy is initiated with intravenous amphotericin B deoxycholate and oral flucytosine. On hospital day 6, his headache and neck stiffness have significantly improved; however, routine morning laboratory testing reveals acute kidney injury: serum creatinine has increased from a baseline of 0.9 mg/dL up to 2.4 mg/dL, and BUN is 38 mg/dL. Serum electrolytes demonstrate: sodium 136 mEq/L, potassium 2.7 mEq/L (severely low; normal: 3.5–5.0 mEq/L), chloride 108 mEq/L, bicarbonate 16 mEq/L (normal anion gap metabolic acidosis), and magnesium 1.1 mg/dL (low; normal: 1.7–2.2 mg/dL). Urinalysis demonstrates fractional excretion of sodium (FENa) of 2.8% and urine pH of 6.5. Complete blood count demonstrates a drop in hemoglobin from 12.8 g/dL down to 10.1 g/dL with a low reticulocyte count. Which of the following dual mechanisms accounts for the profound renal vasoconstriction and severe electrolyte wasting induced by amphotericin B?',
    options: [
      {
        text: 'Afferent arteriolar vasoconstriction decreasing GFR combined with non-selective distal tubular pore formation leaking potassium and magnesium',
        explanation: 'Amphotericin B is a polyene antifungal that selectively binds ergosterol in fungal cytoplasmic membranes, forming large barrel-like transmembrane pores that leak essential monovalent and divalent cations (K+, Mg2+), killing the fungus. However, amphotericin B exhibits cross-reactivity with host cholesterol molecules embedded in human cell membranes, producing severe dose-dependent nephrotoxicity through two distinct pathophysiological mechanisms: (1) Hemodynamic / vascular: amphotericin B induces intense renal afferent arteriolar vasoconstriction, sharply reducing renal blood flow and GFR (manifesting as rising BUN and creatinine; this component is ameliorated by pre-infusion intravenous 0.9% normal saline volume loading); and (2) Direct tubular cell membrane toxicity: amphotericin B inserts pores directly into the membranes of distal convoluted tubule and collecting duct epithelial cells. This causes loss of the negative lumen-to-cell gradient, impaired hydrogen ion secretion (distal / Type 1 RTA with inappropriately high urine pH > 6.0 and metabolic acidosis), and massive, uncontrolled urinary wasting of potassium and magnesium (requiring aggressive intravenous repletion). Anemia develops later due to impaired renal erythropoietin production.'
      },
      {
        text: 'Selective efferent arteriolar vasodilation combined with proximal tubular brush border shedding and Tamm-Horsfall cast precipitation',
        explanation: 'Amphotericin B constricts afferent arterioles, not dilates efferent arterioles (which is the action of ACE inhibitors).'
      },
      {
        text: 'Immune-mediated type III hypersensitivity with immune complex deposition along the glomerular basement membrane',
        explanation: 'Amphotericin B nephrotoxicity is direct toxic and hemodynamic pore formation, not an immune-complex glomerulonephritis.'
      },
      {
        text: 'Direct crystalluria and intraluminal precipitation within distal collecting ducts forming insoluble calcium oxalate casts',
        explanation: 'Insoluble crystal precipitation occurs with acyclovir, indinavir, or ethylene glycol, not amphotericin B, which produces tubular membrane pores.'
      },
      {
        text: 'Inhibition of the basolateral sodium-potassium-chloride cotransporter in the thick ascending limb',
        explanation: 'NKCC2 is inhibited by loop diuretics (furosemide); amphotericin B forms non-specific cation pores in distal tubular membranes.'
      }
    ]
  },
  {
    code: 'op-c-s1-0158',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'General Principles',
    topic: 'Echinocandins 1,3-Beta-D-Glucan Synthase Inhibition Mechanism',
    subtopic: 'Caspofungin Fungal Cell Wall Disruption for Invasive Candidiasis and Aspergillosis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Echinocandins (Caspofungin, Micafungin, Anidulafungin): major class of antifungal agents. Mechanism of action: non-competitive inhibition of the enzyme 1,3-BETA-D-GLUCAN SYNTHASE (encoded by FKS1/FKS2 genes). 1,3-beta-D-glucan is an essential polysaccharide structural polymer that provides osmotic tensile strength to the FUNGAL CELL WALL (analogous to peptidoglycan in bacteria or beta-lactam antibiotics). Inhibition halts glucan synthesis, compromising fungal cell wall integrity and leading to OSMOTIC LYSIS and fungal death. Mammalian cells completely lack a cell wall and glucan polymers, making echinocandins exceptionally well-tolerated. Clinical spectrum: First-line intravenous therapy for INVASIVE CANDIDIASIS (including candidemia) and second-line salvage therapy for INVASIVE ASPERGILLOSIS.',
    citation: 'Denning DW. Echinocandin antifungal drugs. Lancet. 2003;362(9390):1142-1151. PMID: 14550704.',
    stem:
      'A 52-year-old woman undergoing induction chemotherapy for acute myeloid leukemia develops prolonged, severe neutropenia (absolute neutrophil count 80/microL). On hospital day 12, despite broad-spectrum antibacterial coverage with cefepime and vancomycin, she develops a persistent fever of 39.4 C, rigors, and hypotension. Blood cultures drawn from a dual-lumen Hickman catheter grow Candida glabrata. Quantitative antifungal susceptibility testing demonstrates that the isolate is resistant to fluconazole. The consulting infectious disease physician initiates intravenous therapy with caspofungin. Which of the following biological structures or biosynthetic pathways is the primary target of this antifungal agent?',
    options: [
      {
        text: 'Synthesis of 1,3-beta-D-glucan, an essential polysaccharide polymer of the fungal cell wall',
        explanation: 'Caspofungin, micafungin, and anidulafungin belong to the echinocandin class of antifungal medications. Echinocandins function as non-competitive inhibitors of the enzyme 1,3-beta-D-glucan synthase (encoded by the FKS1 and FKS2 genes). 1,3-beta-D-glucan is a major structural polysaccharide that forms a cross-linked fibrillar scaffold within the fungal cell wall, responsible for maintaining osmotic stability and cell shape (analogous to the role of peptidoglycan in bacterial cell walls). By halting glucan chain synthesis, echinocandins destabilize the fungal wall, rendering the organism exquisitely vulnerable to osmotic lysis and fungal death. Because mammalian cells possess only a phospholipid bilayer cell membrane and completely lack a cell wall or glucan polymers, echinocandins exhibit minimal host toxicity. Echinocandins are recommended as first-line empiric and definitive therapy for invasive candidiasis (candidemia, including azole-resistant Candida glabrata and Candida krusei) and as salvage therapy for invasive aspergillosis.'
      },
      {
        text: 'Fungal cytochrome P450 14-alpha-demethylase preventing conversion of lanosterol to ergosterol',
        explanation: 'Inhibition of 14-alpha-demethylase is the mechanism of azole antifungals (fluconazole, voriconazole, itraconazole), which target the fungal cell membrane, not the glucan cell wall.'
      },
      {
        text: 'Squalene epoxidase halting the earliest committed step in fungal ergosterol biosynthesis',
        explanation: 'Squalene epoxidase inhibition is the mechanism of terbinafine, used primarily for dermatophyte onychomycosis, not invasive candidemia.'
      },
      {
        text: 'Fungal microtubule spindle assembly arresting fungal mitosis in metaphase',
        explanation: 'Mitotic spindle disruption is the mechanism of griseofulvin, an oral agent used for dermatophytosis of skin and hair, not systemic Candida infections.'
      },
      {
        text: 'Direct binding to preformed ergosterol creating cation-permeable transmembrane pores',
        explanation: 'Ergosterol binding and pore formation is the mechanism of polyene antifungals (amphotericin B and nystatin), not echinocandins.'
      }
    ]
  },
  {
    code: 'op-c-s1-0159',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Nervous System',
    topic: 'Flucytosine Cytosine Deaminase Activation and Thymidylate Synthase Inhibition',
    subtopic: 'Synergistic Cryptococcal Meningitis Therapy and Bone Marrow Suppression',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Flucytosine (5-fluorocytosine, 5-FC): antimetabolite antifungal used in combination with Amphotericin B for CRYPTOCOCCAL MENINGITIS. Selective toxicity: Fungi take up 5-FC via cytosine permease and deaminate it to 5-FLUOROURACIL (5-FU) via FUNGAL CYTOSINE DEAMINASE (an enzyme ABSENT in human mammalian cells). 5-FU is converted to 5-FdUMP, which competitively inhibits THYMIDYLATE SYNTHASE, halting fungal DNA synthesis; another metabolite (5-FUTP) incorporates into fungal RNA, disrupting protein synthesis. Never used as monotherapy due to rapid emergence of resistance (mutations in cytosine permease or deaminase). Major dose-dependent toxicities: BONE MARROW SUPPRESSION (leukopenia, anemia, thrombocytopenia) and HEPATOTOXICITY (human intestinal microflora can convert small amounts to 5-FU).',
    citation: 'Vermes A, et al. Flucytosine: a review of its mechanism of action, clinical pharmacology, and adverse effects. Int J Antimicrob Agents. 2000;15(2):87-104. PMID: 10854802.',
    stem:
      'A 34-year-old man with AIDS (CD4+ T-cell count 18/microL) presents to the emergency department with a 2-week history of severe, global headache, nausea, photophobia, and low-grade fevers. Lumbar puncture demonstrates an elevated opening pressure of 320 mm H2O. Cerebrospinal fluid analysis reveals: protein 110 mg/dL, glucose 28 mg/dL, and lymphocytic pleocytosis. India ink preparation reveals round budding yeast cells surrounded by wide, clear halos (Cryptococcus neoformans), confirmed by positive cryptococcal capsular polysaccharide antigen titer (1:1024). The patient is admitted to the hospital and initiated on dual antifungal induction therapy with intravenous amphotericin B and oral flucytosine. Flucytosine achieves selective antifungal toxicity within the pathogen primarily because fungal cells, unlike human host cells, possess which of the following specific enzymes?',
    options: [
      {
        text: 'Cytosine deaminase converting flucytosine into 5-fluorouracil, an inhibitor of thymidylate synthase',
        explanation: 'Flucytosine (5-fluorocytosine / 5-FC) is an oral pyrimidine antimetabolite antifungal agent utilized synergistically with amphotericin B as the gold-standard induction regimen for cryptococcal meningitis and severe candidal endophthalmitis/endocarditis. Flucytosine enters fungal cells via a specialized fungal transporter called cytosine permease. Once inside the fungal cytoplasm, flucytosine is deaminated into 5-fluorouracil (5-FU) by the enzyme cytosine deaminase. Crucially, human mammalian cells completely lack cytosine deaminase, conferring selective fungal toxicity. Inside the fungal cell, 5-FU is converted to 5-fluorodeoxyuridine monophosphate (5-FdUMP), which acts as a suicide inhibitor of thymidylate synthase, starving the fungus of thymidine and halting DNA synthesis. A secondary metabolite, 5-fluorouridine triphosphate (5-FUTP), is incorporated into fungal RNA, disrupting translation. Flucytosine is never used as monotherapy because point mutations in cytosine permease or deaminase rapidly emerge. Dose-limiting host toxicities include bone marrow suppression (leukopenia, thrombocytopenia) and hepatic necrosis, partly due to conversion of 5-FC to 5-FU by human intestinal microflora.'
      },
      {
        text: 'Thymidine kinase phosphorylating flucytosine directly into its active nucleotide triphosphate form',
        explanation: 'Thymidine kinase phosphorylates acyclovir in herpesviruses, not flucytosine in fungi.'
      },
      {
        text: 'Hypoxanthine-guanine phosphoribosyltransferase (HGPRT) scavenging exogenous fluorinated purines',
        explanation: 'HGPRT is a purine salvage enzyme; flucytosine is a fluorinated pyrimidine that utilizes uracil phosphoribosyltransferase, not HGPRT.'
      },
      {
        text: 'Ribonucleotide reductase reducing fluorinated ribonucleotides into deoxyribonucleotides',
        explanation: 'Ribonucleotide reductase is present in both human and fungal cells; the selective step is fungal cytosine deaminase.'
      },
      {
        text: 'Dihydroorotate dehydrogenase converting carbamoyl phosphate into dihydroorotate in mitochondria',
        explanation: 'Dihydroorotate dehydrogenase is a mitochondrial pyrimidine synthesis enzyme targeted by leflunomide; flucytosine does not target this enzyme.'
      }
    ]
  },
  {
    code: 'op-c-s1-0160',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Hematology',
    topic: 'Plasmodium Falciparum Cytoadherence and Microvascular Sequestration',
    subtopic: 'PfEMP1 Knobs Endothelial CD36 / ICAM-1 Binding and Cerebral Malaria',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Plasmodium falciparum Severe / Cerebral Malaria: most lethal malaria species. Transmitted by female Anopheles mosquito. Characterized by severe microvascular occlusion, cerebral malaria (coma, seizures), acute renal failure (blackwater fever), severe hemolytic anemia, and non-cardiogenic pulmonary edema. Pathogenic hallmark: CYTOADHERENCE AND MICROVASCULAR SEQUESTRATION. P. falciparum exports Erythrocyte Membrane Protein 1 (PfEMP1) to the red blood cell surface, forming electron-dense "KNOBS". PfEMP1 binds host endothelial receptors: CD36, ICAM-1 (in cerebral capillaries), and chondroitin sulfate A (in placenta during pregnancy). Infected RBCs adhere to capillary endothelium and avoid passage through the spleen (evading splenic filtration and clearance). Consequently, ONLY EARLY RING FORMS (trophozoites) and gametocytes are seen on peripheral blood smears; mature trophozoites and schizonts are sequestered in deep microvasculature.',
    citation: 'Miller LH, et al. The pathogenic basis of malaria. Nature. 2002;415(6872):673-679. PMID: 11832955.',
    stem:
      'A 29-year-old previously healthy man is brought to the emergency department in a state of unarousable coma 10 days after returning from a 3-week humanitarian trip to rural sub-Saharan Africa. He did not take pharmacological malaria chemoprophylaxis. His travel companion notes that he developed high, spiking daily fevers, severe rigors, profuse drenching sweats, and persistent vomiting 4 days ago. Physical examination reveals a deeply comatose man who decerebrate postures to painful stimuli. Scleral icterus and marked conjunctival pallor are present, with hepatosplenomegaly. Vital signs: blood pressure 84/50 mm Hg, heart rate 132/min, respirations 32/min, and temperature 40.2 C (104.4 F). Laboratory evaluation reveals: hemoglobin 5.8 g/dL, platelet count 42,000/microL, total bilirubin 8.4 mg/dL (unconjugated 6.8 mg/dL), and blood glucose 34 mg/dL (profound hypoglycemia). Giemsa-stained thick and thin peripheral blood smears demonstrate an exceptionally high parasitemia (18% of red blood cells infected), revealing exclusively delicate intraerythrocytic ring-form trophozoites with double chromatin dots and crescent-shaped (banana-shaped) gametocytes. Notably, despite heavy parasitemia, mature late trophozoites and multinucleated schizonts are completely absent from the circulating blood. The absence of mature schizonts from the peripheral circulation in this lethal form of malaria is explained by which of the following cellular mechanisms?',
    options: [
      {
        text: 'Parasite-encoded surface protein (PfEMP1) expression on erythrocyte knobs mediating cytoadherence to endothelial ICAM-1 and CD36',
        explanation: 'The patient has cerebral malaria and severe malaria caused by Plasmodium falciparum, the most virulent malaria species. P. falciparum has the unique biological capacity to sequester infected red blood cells (iRBCs) within the postcapillary venules and capillaries of deep vital organs (brain, kidneys, lungs, placenta). As intraerythrocytic parasites mature from early ring forms into late trophozoites and schizonts, the parasite exports Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1) to the host red cell membrane, where it clusters into electron-dense protrusions termed "knobs." PfEMP1 functions as a high-affinity adhesin that binds host endothelial receptors, including ICAM-1 (in cerebral microvessels, driving cerebral malaria, coma, and seizures), CD36, and chondroitin sulfate A (in the placenta, driving pregnancy-associated malaria). Cytoadherence and microvascular sequestration offer two advantages to the parasite: (1) it prevents iRBCs from circulating through the spleen, thereby evading splenic cord filtration and macrophage phagocytosis; and (2) it causes microvascular obstruction, tissue ischemia, lactic acidosis, and endothelial barrier breakdown. Because mature forms remain sequestered in deep capillary beds, peripheral blood smears show ONLY young ring forms and banana-shaped gametocytes.'
      },
      {
        text: 'Rapid splenic macrophage phagocytosis of all mature schizonts via phosphatidylserine recognition',
        explanation: 'Mature schizonts evade splenic phagocytosis precisely because they are tethered to deep microvascular endothelium via PfEMP1 knobs; if they circulated to the spleen, they would be destroyed.'
      },
      {
        text: 'Selective intrahepatic schizogony restricted entirely to hepatocytes during the exoerythrocytic cycle',
        explanation: 'Intrahepatic schizogony occurs during initial liver infection before erythrocyte invasion; intraerythrocytic schizogony occurs in blood, where mature schizonts sequester in capillary beds.'
      },
      {
        text: 'Inability of Plasmodium falciparum to complete nuclear division inside mature anucleate erythrocytes',
        explanation: 'P. falciparum readily divides into 16 to 24 merozoites per schizont; they are present in enormous numbers in deep tissues, though absent from peripheral smears.'
      },
      {
        text: 'Immediate complement-mediated intravascular lysis of mature red cells via alternative pathway activation',
        explanation: 'Complement activation occurs mildly, but sequestration is an active adhesive process mediated by PfEMP1, not sudden intravascular lysis of mature stages.'
      }
    ]
  },
  {
    code: 'op-c-s1-0161',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Hematology',
    topic: 'Babesia Microti Maltese Cross Intraerythrocytic Trophozoites',
    subtopic: 'Ixodes Scapularis Vector Asplenic Fulminant Hemolysis and Co-Infection',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Babesiosis: tick-borne intraerythrocytic zoonosis caused by Babesia microti. Endemic in northeastern and upper midwestern United States (Nantucket, Martha\'s Vineyard, Rhode Island, Connecticut). Transmitted by the IXODES SCAPULARIS tick (same deer tick vector as Borrelia burgdorferi [Lyme disease] and Anaplasma phagocytophilum; co-infection is common). Clinical features: fever, drenching sweats, chills, myalgias, and hemolytic anemia (jaundice, dark urine, elevated indirect bilirubin, high LDH, low haptoglobin). ASPLENIC PATIENTS (prior splenectomy) are at extreme risk of fulminant, life-threatening hemolysis, DIC, and shock. Diagnostic hallmark on Giemsa/Wright-stained peripheral smear: INTRAERYTHROCYTIC TETRADS arranged in a "MALTESE CROSS" (cross-like formation of four budding merozoites) and pleomorphic ring forms WITHOUT hemozoin pigment or gametocytes (differentiating it from Plasmodium). Treatment: Atovaquone PLUS Azithromycin.',
    citation: 'Vannier E, Krause PJ. Human babesiosis. N Engl J Med. 2012;366(25):2397-2407. PMID: 22716978.',
    stem:
      'A 64-year-old man presents to an emergency department on Cape Cod, Massachusetts, in July with a 5-day history of high fevers, drenching night sweats, fatigue, dark tea-colored urine, and generalized muscle aches. He underwent an emergency splenectomy 12 years ago following a motor vehicle collision. Physical examination reveals an acutely ill, pale man with scleral icterus and an absence of skin rashes. Vital signs: blood pressure 92/58 mm Hg, heart rate 116/min, and temperature 39.6 C (103.3 F). Laboratory evaluation reveals: hemoglobin 6.8 g/dL (normal: 13.5–17.5 g/dL), platelet count 54,000/microL, reticulocyte count 8.2%, total serum bilirubin 5.4 mg/dL (unconjugated bilirubin 4.6 mg/dL), serum LDH 1,480 U/L (normal: 140–280 U/L), and serum haptoglobin undetectable (< 10 mg/dL). Peripheral blood smear examination demonstrates microcytic normochromic anemia with Howell-Jolly bodies and numerous intraerythrocytic ring forms, along with pathognomonic intraerythrocytic tetrads arranged in a cross-like formation resembling a "Maltese cross." Which of the following describes the vector responsible for transmitting this pathogen, along with the potential for concurrent microbial co-infection?',
    options: [
      {
        text: 'Ixodes scapularis tick vector, with high potential for transmission of Borrelia burgdorferi and Anaplasma phagocytophilum',
        explanation: 'The patient has babesiosis, an intraerythrocytic protozoan infection caused by Babesia microti, endemic to the coastal northeastern and upper midwestern United States (especially Massachusetts, Rhode Island, and New York). Babesia microti is transmitted by the bite of the Ixodes scapularis (blacklegged deer) tick, which also serves as the biological vector for Borrelia burgdorferi (the spirochete causing Lyme disease) and Anaplasma phagocytophilum (human granulocytic anaplasmosis). Consequently, concurrent co-infections occur in up to 20% to 40% of cases and often produce more severe clinical illness. In humans, sporozoites invade mature erythrocytes, reproducing asexually via budding. Hallmarks on Giemsa-stained blood smears include: pleomorphic ring forms (frequently confused with P. falciparum rings) and pathognomonic cruciform tetrad formations ("Maltese cross") representing four budding merozoites joined at a central stalk. Crucially, Babesia does NOT produce hemozoin pigment or gametocytes. Asplenic patients lack splenic filtration and macrophages, placing them at catastrophic risk of fulminant hemolysis, acute renal failure, and death. Treatment is oral or IV atovaquone plus azithromycin.'
      },
      {
        text: 'Dermacentor andersoni wood tick vector, transmitting Rickettsia rickettsii and Colorado tick fever virus',
        explanation: 'Dermacentor ticks transmit Rocky Mountain spotted fever (Rickettsia rickettsii) and Colorado tick fever, presenting with centrifugal purpuric rash, not Maltese cross intraerythrocytic parasites.'
      },
      {
        text: 'Amblyomma americanum lone star tick vector, transmitting Ehrlichia chaffeensis and Francisella tularensis',
        explanation: 'Amblyomma americanum transmits Ehrlichia chaffeensis (human monocytic ehrlichiosis with morulae in monocytes) and tularemia, not intraerythrocytic Maltese cross tetrads.'
      },
      {
        text: 'Female Anopheles mosquito vector, transmitting Plasmodium vivax and arboviral encephalitides',
        explanation: 'Anopheles mosquitoes transmit malaria (Plasmodium); P. falciparum displays ring forms with hemozoin pigment and crescent gametocytes, never the Maltese cross tetrad.'
      },
      {
        text: 'Triatomine reduviid bug vector, transmitting Trypanosoma cruzi causing acute myocarditis',
        explanation: 'Triatomine (kissing) bugs transmit Trypanosoma cruzi (Chagas disease), which produces flagellated extracellular C-shaped trypomastigotes in blood, not intraerythrocytic tetrads.'
      }
    ]
  },
  {
    code: 'op-c-s1-0162',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Hematology',
    topic: 'Leishmania Donovani Visceral Leishmaniasis Macrophage Amastigotes',
    subtopic: 'Kala-Azar Sandfly Vector Massive Splenomegaly and Kinetoplast',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Visceral Leishmaniasis (Kala-Azar / "black fever"): caused by Leishmania donovani / infantum, endemic in South Asia (India, Bangladesh), East Africa (Sudan), and the Mediterranean. Transmitted by the bite of the female PHLEBOTOMUS SANDFLY. Sandflies inject flagellated PROMASTIGOTES into host skin -> phagocytosed by macrophages -> transform into intracellular, non-flagellated, round AMASTIGOTES. Amastigotes replicate within macrophage phagolysosomes, resisting acid hydrolases, and disseminate through the reticuloendothelial system (spleen, liver, bone marrow). Clinical triad: 1. MASSIVE SPLENOMEGALY (spleen crosses midline, dragging abdominal sensation); 2. PANCYTOPENIA (bone marrow infiltration causes anemia, leukopenia with secondary infections, thrombocytopenia with bleeding); 3. HYPERGAMMAGLOBULINEMIA with severe wasting and hyperpigmented skin ("black sickness"). Diagnosis: Bone marrow or splenic aspirate demonstrating intracellular amastigotes with a rod-shaped KINETOPLAST inside macrophages (Leishman-Donovan bodies). Treatment: Liposomal amphotericin B or miltefosine.',
    citation: 'Chappuis F, et al. Visceral leishmaniasis: what are the needs for diagnosis, treatment and control? Nat Rev Microbiol. 2007;5(11):873-882. PMID: 17938629.',
    stem:
      'A 32-year-old humanitarian aid worker presents to the infectious diseases clinic with a 3-month history of intermittent spiking fevers, drenching night sweats, profound fatigue, and an unintentional 12-kg weight loss. Over the past 2 years, he lived in rural agricultural villages in Bihar, India. Physical examination reveals an emaciated, cachectic man with dark, dusky gray hyperpigmentation across his hands and face. Abdominal examination demonstrates massive, firm, non-tender splenomegaly extending 14 cm below the left costal margin and crossing the abdominal midline, accompanied by moderate hepatomegaly. Complete blood count demonstrates severe pancytopenia: hemoglobin 6.2 g/dL, white blood cell count 1,400/microL with absolute neutropenia (ANC 320/microL), and platelet count 36,000/microL. Total serum protein is markedly elevated at 10.4 g/dL, driven by massive polyclonal hypergammaglobulinemia (IgG 5,800 mg/dL), with a low serum albumin of 2.1 g/dL (reversed A/G ratio). Bone marrow aspiration is performed; Giemsa staining of the aspirate reveals numerous tiny (2–4 micrometer), round-to-oval intra-macrophage microorganisms, each containing a distinct nucleus and a darkly staining, perpendicular, rod-like kinetoplast. Which of the following vectors transmitted the infectious life cycle stage of this protozoan to the patient?',
    options: [
      {
        text: 'Phlebotomine sandfly inoculating flagellated promastigotes during a blood meal',
        explanation: 'The patient has visceral leishmaniasis (also known as Kala-azar or "black fever"), caused by the intracellular protozoan Leishmania donovani (endemic in India, Bangladesh, Sudan, and Brazil). The vector is the female phlebotomine sandfly (Phlebotomus species in the Old World, Lutzomyia in the New World). When the sandfly bites a human host, it regurgitates the motile, flagellated promastigote stage into the dermis. Promastigotes are promptly phagocytosed by tissue macrophages. Inside the macrophage phagolysosome, promastigotes lose their flagella and transform into oval, non-motile amastigotes. Amastigotes proliferate within phagolysosomes until the macrophage ruptures, releasing progeny to infect other reticuloendothelial cells throughout the body (spleen, liver, lymph nodes, and bone marrow). Reticuloendothelial infiltration produces a classic clinical presentation: massive splenomegaly (often the largest spleens seen in clinical medicine), hepatomegaly, pancytopenia (due to hypersplenism and marrow replacement), profound polyclonal B-cell activation (hypergammaglobulinemia with reversed A/G ratio), and gray-black cutaneous hyperpigmentation. Giemsa staining of bone marrow aspirates confirms diagnostic amastigotes with a bar-like kinetoplast inside macrophages (Leishman-Donovan bodies).'
      },
      {
        text: 'Tsetse fly (Glossina species) injecting metacyclic trypomastigotes into subcutaneous tissue',
        explanation: 'Tsetse flies transmit Trypanosoma brucei (African sleeping sickness), presenting with chancre, Winterbottom sign (posterior cervical lymphadenopathy), and daytime somnolence with extracellular flagellates in blood/CSF.'
      },
      {
        text: 'Chrysops deer fly transmitting microfilariae that migrate through subconjunctival tissues',
        explanation: 'Chrysops deer flies transmit Loa loa (African eye worm), causing transient Calabar swellings and adult worms migrating under the conjunctiva, not visceral Kala-azar.'
      },
      {
        text: 'Blackfly (Simulium species) depositing infective filarial larvae causing river blindness',
        explanation: 'Simulium blackflies transmit Onchocerca volvulus (river blindness), causing pruritic dermatitis, skin depigmentation ("leopard skin"), and punctate keratitis / blindness.'
      },
      {
        text: 'Aedes aegypti mosquito transmitting an arboviral flavivirus causing hemorrhagic fever',
        explanation: 'Aedes mosquitoes transmit dengue, yellow fever, chikungunya, and Zika viruses, which cause acute biphasic febrile illnesses, not chronic Kala-azar with macrophage amastigotes.'
      }
    ]
  },
  {
    code: 'op-c-s1-0163',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Gastrointestinal',
    topic: 'Trypanosoma Cruzi Chagas Megadisease and Myenteric Plexus Loss',
    subtopic: 'Auerbach Plexus Denervation Megaesophagus Megacolon and Apical Aneurysm',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Chagas Disease (American Trypanosomiasis): caused by protozoan Trypanosoma cruzi, endemic in rural Central and South America. Transmitted by feces of the REDUVIID BUG ("kissing bug", Triatoma) scratching into bite wound or conjunctiva (Romaña sign: unilateral periorbital edema). Acute phase: parasitemia, fever, acute myocarditis. Chronic phase (develops decades later): persistent intracellular amastigote pseudocysts in muscle and autonomic ganglia incite immune destruction of MYENTERIC (AUERBACH) PLEXUS ganglion cells. Hallmark chronic manifestations: 1. GASTROINTESTINAL: MEGAESOPHAGUS (secondary achalasia, severe dysphagia to solids/liquids, regurgitation, "bird-beak" on barium swallow) and MEGACOLON (severe chronic constipation, abdominal distension, fecaloma, volvulus); 2. CARDIAC: DILATED CARDIOMYOPATHY with APICAL LV ANEURYSM (mural thrombi, systemic emboli), biventricular heart failure, and conduction blocks (Right Bundle Branch Block [RBBB] + Left Anterior Fascicular Block).',
    citation: 'Rassi A Jr, et al. Chagas disease. Lancet. 2010;375(9723):1388-1402. PMID: 20399979.',
    stem:
      'A 58-year-old man who emigrated from rural Bolivia 20 years ago presents to the clinic with a 6-month history of progressively worsening difficulty swallowing both solid foods and liquids, accompanied by regurgitation of undigested meals, nocturnal cough, and a 9-kg weight loss. He also reports severe, chronic constipation, requiring manual disimpaction and moving his bowels only once every 10 to 14 days. He recalls living in a thatched-roof adobe house during childhood where large, winged "kissing bugs" were commonly present in the bedroom walls. Physical examination reveals an alert man with bilateral basal pulmonary crackles and a displaced apical impulse. Abdominal examination demonstrates marked distension with palpable, hard, rock-like masses in the left lower quadrant (fecalomas). Barium esophagogram demonstrates massive dilatation of the thoracic esophagus with smooth, symmetric, tapered narrowing of the gastroesophageal junction resembling a "bird’s beak." Barium enema reveals extreme dilatation and elongation of the rectosigmoid colon (megacolon). Transthoracic echocardiogram demonstrates four-chamber cardiac enlargement with an ejection fraction of 24% and a thin, dyskinetic apical left ventricular aneurysm. His gastrointestinal and cardiac pathology is primarily driven by chronic immune-mediated destruction of which of the following neural structures?',
    options: [
      {
        text: 'Postganglionic parasympathetic neurons in the myenteric (Auerbach) plexus and intracardiac conduction networks',
        explanation: 'The patient has chronic Chagas disease (American trypanosomiasis), caused by infection with the kinetoplastid protozoan Trypanosoma cruzi, endemic throughout rural Central and South America. T. cruzi is transmitted when the triatomine reduviid bug ("kissing bug") defecates infective metacyclic trypomastigotes onto human skin during a nocturnal blood meal; the host inadvertently scratches the feces into the pruritic bite wound or mucous membranes. Following an acute parasitemic phase, the disease enters an asymptomatic indeterminate phase lasting 10 to 30 years. In ~30% of infected individuals, chronic Chagas disease develops. Intracellular amastigote replication and autoimmune cross-reactivity (molecular mimicry) trigger chronic inflammatory destruction and denervation of postganglionic parasympathetic ganglion cells in the myenteric (Auerbach) plexus located between the circular and longitudinal muscle layers of the muscularis propria. Loss of inhibitory VIP- and nitric oxide-releasing enteric neurons leads to uncoordinated aperistalsis and persistent tone of the lower esophageal sphincter, producing secondary achalasia and massive esophageal dilatation (megaesophagus). Similar colonic myenteric loss produces megacolon (chronic constipation, obstipation, volvulus). In the heart, myocardial scarring and conduction system fibrosis cause dilated cardiomyopathy, right bundle branch block (RBBB), and pathognomonic apical left ventricular aneurysms.'
      },
      {
        text: 'Preganglionic sympathetic neurons in the intermediolateral cell column of the spinal cord',
        explanation: 'Preganglionic sympathetic fibers arise from T1–L2; their destruction causes autonomic failure (as in multiple system atrophy), not isolated megacolon or achalasia.'
      },
      {
        text: 'Sensory neuron cell bodies within the lumbosacral dorsal root ganglia',
        explanation: 'Dorsal root ganglion loss causes sensory ataxia (tabes dorsalis), not smooth muscle aperistalsis or esophageal dilatation.'
      },
      {
        text: 'Somatic alpha motor neurons within the anterior horns of the cervical and lumbar spinal cord',
        explanation: 'Anterior horn cell degeneration causes flaccid skeletal muscle paralysis (ALS, polio), having no impact on enteric smooth muscle plexuses.'
      },
      {
        text: 'Afferent vagal sensory nerve endings monitoring mucosal stretch in the submucosal (Meissner) plexus',
        explanation: 'The submucosal (Meissner) plexus primarily regulates mucosal fluid secretion and local blood flow; motor peristalsis and sphincter relaxation are controlled by the myenteric (Auerbach) plexus.'
      }
    ]
  },
  {
    code: 'op-c-s1-0164',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Gastrointestinal',
    topic: 'Strongyloides Stercoralis Autoinfection Hyperinfection Syndrome',
    subtopic: 'Filariform Larval Penetration Corticosteroid Risk and Polymicrobial Sepsis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Strongyloides stercoralis: intestinal threadworm (nematode). Unique life cycle feature: AUTOINFECTION. Filariform larvae penetrate intact skin (walking barefoot in soil) -> migrate hematogenously to lungs -> ascend tracheobronchial tree -> swallowed into small intestine -> mature into adult females that lay eggs in mucosal crypts -> eggs hatch into non-infectious RHABDITIFORM LARVAE in the intestinal lumen -> excreted in stool. CRUCIAL: Rhabditiform larvae can molt within the intestinal lumen directly into infectious FILARIFORM LARVAE, which penetrate the colonic wall or perianal skin to re-enter circulation, sustaining lifelong autoinfection for decades. When the host receives IMMUNOSUPPRESSION (especially SYSTEMIC CORTICOSTEROIDS, which act as molting hormones / ecdysteroid analogs), autoinfection accelerates into HYPERINFECTION SYNDROME. Massive numbers of larvae migrate through the bowel wall, carrying enteric bacteria into the bloodstream -> BACTEREMIA, MENINGITIS, and POLYMICROBIAL SEPSIS with Gram-negative bacilli (E. coli, Klebsiella) and Enterococcus. Diagnosis: Rhabditiform larvae in stool (NOT eggs). Treatment: Ivermectin.',
    citation: 'Keiser PB, Nutman TB. Strongyloides stercoralis in the immunocompromised population. Clin Microbiol Rev. 2004;17(1):208-217. PMID: 14726461.',
    stem:
      'A 62-year-old man who emigrated from rural Vietnam 30 years ago is hospitalized for an acute severe exacerbation of chronic obstructive pulmonary disease. He is treated with intravenous methylprednisolone (60 mg every 6 hours) and nebulized bronchodilators. On hospital day 5, his respiratory symptoms acutely worsen, and he develops high fevers, diffuse abdominal pain, watery diarrhea, and altered mental status. Physical examination reveals an acutely ill, toxic, obtunded man with diffuse abdominal guarding, scattered bilateral crackles, and a creeping, linear, serpiginous, erythematous, urticarial rash over his perianal region, buttocks, and lower abdomen (larva currens). Vital signs: blood pressure 78/48 mm Hg, heart rate 130/min, and temperature 39.8 C (103.6 F). Chest radiography reveals new, diffuse, bilateral alveolar infiltrates. Lumbar puncture demonstrates purulent CSF with 3,200 WBCs/microL (94% neutrophils). Blood and CSF cultures both grow Escherichia coli and Enterococcus faecalis. Microscopic examination of a fresh stool specimen and tracheal aspirate reveals numerous motile, microscopic rhabditiform nematode larvae with short buccal cavities. Administration of high-dose corticosteroids triggered this patient’s catastrophic condition by accelerating which of the following biological phenomena?',
    options: [
      {
        text: 'Internal autoinfection cycle with accelerated transformation of rhabditiform larvae into invasive filariform larvae',
        explanation: 'The patient has Strongyloides stercoralis hyperinfection syndrome with secondary enteric Gram-negative sepsis and meningitis. Strongyloides is unique among helminths because it can complete its entire reproductive life cycle inside the human host via autoinfection. Infectious filariform larvae penetrate bare skin, migrate hematogenously to alveolar spaces, ascend the bronchial tree, and are swallowed into the duodenum, where parthenogenetic adult females lay eggs. Eggs hatch in the intestinal mucosa into non-infectious rhabditiform larvae, which are passed in feces. However, some rhabditiform larvae prematurely molt within the gastrointestinal lumen into infectious filariform larvae. These filariform larvae penetrate the colonic mucosa or perianal skin, re-entering venous circulation. This low-grade autoinfection allows Strongyloides to persist subclinically in a human host for decades. When the patient is administered systemic corticosteroids, glucocorticoids suppress Th2-mediated mucosal eosinophilia and mast cell defense; furthermore, corticosteroids structurally mimic nematode ecdysteroid molting hormones, directly stimulating adult female fecundity and accelerating larval transformation. Billions of filariform larvae breach the bowel wall, carrying enteric bacteria (E. coli, Klebsiella, Enterococcus) on their cuticle into the bloodstream, causing polymicrobial bacteremia, meningitis, and septic shock. Diagnosis is made by identifying rhabditiform larvae in stool or sputum (eggs are rarely seen because they hatch within mucosa). First-line therapy is oral ivermectin.'
      },
      {
        text: 'Conversion of dormant intrahepatic hypnozoites into actively dividing merozoites',
        explanation: 'Hypnozoite reactivation occurs in Plasmodium vivax and Plasmodium ovale malaria, causing recurrent fevers, not helminthic hyperinfection or Gram-negative meningitis.'
      },
      {
        text: 'Rupture of an intrahepatic hydatid cyst spilling protoscolices and triggering anaphylaxis',
        explanation: 'Hydatid cyst rupture is caused by Echinococcus granulosus (dog tapeworm), presenting with acute anaphylactic shock and daughter cysts on CT, lacking rhabditiform larvae in stool.'
      },
      {
        text: 'Encystment of infective nurse cells within skeletal muscle following nurse cell degeneration',
        explanation: 'Nurse cell skeletal muscle encystment occurs in Trichinella spiralis (ingestion of undercooked pork/bear meat), presenting with periorbital edema and myositis, not autoinfection.'
      },
      {
        text: 'Retrograde migration of gravid proglottids into the common bile duct causing acute cholangitis',
        explanation: 'Proglottid migration is seen in tapeworms (Taenia, Diphyllobothrium), which lack motile larval forms in stool and do not cause larva currens.'
      }
    ]
  },
  {
    code: 'op-c-s1-0165',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Renal',
    topic: 'Schistosoma Haematobium vs Mansoni Terminal Spine Pathology',
    subtopic: 'Urinary Bladder Granulomas Painless Hematuria and Squamous Cell Carcinoma',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Differentiate Schistosoma haematobium from Schistosoma mansoni / japonicum: All are trematodes (blood flukes) whose cercariae penetrate human skin in freshwater snails (Biomphalaria / Bulinus). S. MANSONI has a LARGE LATERAL SPINE; adult worms reside in the INFERIOR MESENTERIC VEINS, depositing eggs that cause intestinal schistosomiasis, granulomatous inflammation, PIPESTEM CIRRHOSIS, and portal hypertension (splenomegaly, esophageal varices), with preserved liver function. S. HAEMATOBIUM has a PROMINENT TERMINAL SPINE (at the tip/pole); adult worms reside in the VENOUS PLEXUS OF THE URINARY BLADDER. Eggs incite chronic Th2 granulomatous inflammation and fibrous scarring of the bladder wall, presenting with PAINLESS TERMINAL HEMATURIA, dysuria, and hydronephrosis. Long-term consequence: SQUAMOUS CELL CARCINOMA OF THE BLADDER (NOT urothelial/transitional cell carcinoma). Treatment: Praziquantel.',
    citation: 'Colley DG, et al. Human schistosomiasis. Lancet. 2014;383(9936):2253-2264. PMID: 24698483.',
    stem:
      'A 34-year-old man who recently emigrated from rural Egypt presents to the urology clinic with a 6-month history of painless terminal hematuria (passing frank red blood at the very end of urination) and mild dysuria. He has no flank pain, fever, or weight loss. He reports swimming and bathing in freshwater irrigation canals connected to the Nile River throughout his childhood. Physical examination is unremarkable with no palpable abdominal masses. Urinalysis demonstrates 3+ blood, 1+ protein, 10–15 WBCs/HPF, and > 100 RBCs/HPF, with negative bacterial urine cultures. Microscopic examination of centrifuged urine sediment reveals large, elongated, transparent parasitic eggs measuring 140 micrometers in length, featuring a sharp, prominent, pointed terminal spine at the posterior pole. Cystoscopy reveals multiple patches of sandy-appearing, granular mucosal patches ("sandy patches") and nodular inflammatory pseudopolyps along the posterior bladder wall. Transurethral biopsy of a pseudopolyp confirms chronic granulomatous inflammation surrounding calcified parasite eggs with extensive squamous metaplasia of the urothelium. Chronic infection with this trematode is a major recognized risk factor for the development of which of the following malignancies?',
    options: [
      {
        text: 'Squamous cell carcinoma of the urinary bladder',
        explanation: 'The patient has urinary schistosomiasis, caused by the digenetic blood fluke Schistosoma haematobium, highly endemic in the Nile River basin of Egypt and sub-Saharan Africa. Free-swimming cercariae released from freshwater Bulinus snails penetrate intact human skin, transform into schistosomula, and migrate via the portal system into the venous plexus of the urinary bladder and pelvis. Adult male and female worm pairs mate and lay hundreds of eggs daily. The eggs of S. haematobium are pathognomonic: large (110–170 micrometers) with a prominent, sharp, pointed TERMINAL SPINE located at the posterior tip (in contrast to Schistosoma mansoni, which has a prominent LATERAL SPINE and causes intestinal/portal pipe-stem fibrosis, and Schistosoma japonicum, which has a small, round, rudimentary lateral knob). S. haematobium eggs penetrate the bladder wall, inciting intense Th2-driven granulomatous inflammation, eosinophilia, and fibrous scarring, producing "sandy patches" and painless terminal hematuria. Chronic mechanical irritation, chronic ulceration, and bacterial nitrosamine production induce extensive squamous metaplasia of the transitional urothelium, culminating in SQUAMOUS CELL CARCINOMA of the bladder (unlike the typical smoking-associated transitional/urothelial cell carcinoma).'
      },
      {
        text: 'Conventional urothelial (transitional cell) carcinoma of the renal pelvis',
        explanation: 'Transitional cell (urothelial) carcinoma is strongly associated with cigarette smoking, aromatic amine dyes (naphthylamine), and phenacetin, not Schistosoma haematobium.'
      },
      {
        text: 'Clear cell renal cell carcinoma arising from proximal tubular epithelium',
        explanation: 'Clear cell RCC is associated with von Hippel-Lindau (VHL) gene loss on chromosome 3p, presenting with flank pain, hematuria, and a palpable flank mass.'
      },
      {
        text: 'Cholangiocarcinoma arising from intrahepatic bile duct epithelium',
        explanation: 'Cholangiocarcinoma is strongly associated with infection by the liver flukes Clonorchis sinensis and Opisthorchis viverrini, not the urinary fluke S. haematobium.'
      },
      {
        text: 'Angiosarcoma of the liver associated with vinyl chloride and Thorotrast exposure',
        explanation: 'Hepatic angiosarcoma is linked to vinyl chloride, arsenic, and Thorotrast, not trematode infections.'
      }
    ]
  },
  {
    code: 'op-c-s1-0166',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Hematology',
    topic: 'Parvovirus B19 Erythrocyte P Antigen Tropism and Aplastic Crisis',
    subtopic: 'Single-Stranded DNA Virus Pure Red Cell Aplasia and Hydrops Fetalis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Parvovirus B19: smallest DNA virus, non-enveloped, single-stranded LINEAR DNA virus. Cellular tropism: binds specifically to the ERYTHROCYTE P ANTIGEN (globoside / tetrahexosylceramide) expressed on erythroid progenitor cells (pronormoblasts / erythroblasts) in bone marrow. Replicates in and lyses erythroid precursors, causing temporary cessation of erythropoiesis (~7-10 days). In healthy individuals: causes Erythema Infectiosum (Fifth Disease: "slapped-cheek" facial rash and lace-like reticular body rash; arthralgias in adult women). In patients with underlying chronic hemolytic anemias (SICKLE CELL DISEASE, HEREDITARY SPHEROCYTOSIS, beta-thalassemia): causes TRANSIENT APLASTIC CRISIS (sudden drop in hemoglobin, profound RETICULOCYTOPENIA < 0.5%, with normal platelets and WBCs). In pregnant women: infects fetal erythroid precursors, causing severe fetal anemia, high-output heart failure, and HYDROPS FETALIS. Bone marrow biopsy: giant pronormoblasts with glassy viral inclusions.',
    citation: 'Young NS, Brown KE. Parvovirus B19. N Engl J Med. 2004;350(6):586-597. PMID: 14762186.',
    stem:
      'A 9-year-old boy with homozygous sickle cell disease (HbSS) is brought to the pediatric emergency department because of extreme lethargy, progressive pallor, and lightheadedness over the past 24 hours. Two days ago, his 5-year-old sister experienced low-grade fevers and bright red erythema across both cheeks that resembled a "slapped-face" appearance. Physical examination reveals an exhausted, pale child who is tachycardic (heart rate 136/min) and tachypneic (respiratory rate 28/min) with a blood pressure of 88/52 mm Hg. Sclerae are non-icteric. A grade 3/6 systolic hemic flow murmur is heard loudly across the precordium. The spleen is not palpable (consistent with prior autosplenectomy). Laboratory evaluation demonstrates a catastrophic decline in hemoglobin: hemoglobin 3.2 g/dL (patient\'s baseline: 8.5 g/dL) and hematocrit 9.8%. The absolute reticulocyte count is profoundly depressed at 0.1% (normal: 0.5–2.5%; expected in chronic hemolysis: > 5–15%). Total serum bilirubin is 1.2 mg/dL (unconjugated 0.8 mg/dL; no increase in hemolysis). White blood cell count and platelet count are normal. The viral pathogen responsible for this acute aplastic crisis possesses which of the following microbiological characteristics?',
    options: [
      {
        text: 'A non-enveloped, single-stranded DNA genome that attaches to the erythrocyte P antigen (globoside)',
        explanation: 'The patient has a transient aplastic crisis caused by Parvovirus B19, the only member of the Parvoviridae family known to cause human disease. Parvovirus B19 is the smallest DNA virus and has a unique structural profile: it is a non-enveloped, single-stranded linear DNA virus. Parvovirus B19 exhibits narrow cellular tropism: it binds specifically to the blood group P antigen (globoside, a glycosphingolipid) expressed abundantly on mature erythrocytes and erythroid progenitor cells (CFU-E and BFU-E pronormoblasts) in the bone marrow. The virus enters erythroid precursors, replicates autonomously within the nucleus, and induces cytotoxic lysis, completely halting erythropoiesis for 7 to 10 days. In healthy individuals (whose RBC lifespan is 120 days), a 7-day pause in production causes an imperceptible drop in hematocrit (manifesting merely as fifth disease: slapped-cheek rash and lacy body rash). However, in patients with chronic hemolytic anemia (such as sickle cell disease or hereditary spherocytosis, where RBC lifespan is shortened to 10–20 days), halting red cell production precipitates a rapid, life-threatening drop in hemoglobin accompanied by pathognomonic RETICULOCYTOPENIA (< 0.5%). Because red cell destruction is halted, bilirubin does not rise, differentiating aplastic crisis from hyperhemolytic or splenic sequestration crises.'
      },
      {
        text: 'An enveloped, double-stranded circular DNA genome replicating via a reverse transcriptase intermediate',
        explanation: 'Enveloped dsDNA with reverse transcriptase describes Hepatitis B virus (Hepadnaviridae), which causes acute and chronic hepatitis, not pure red cell aplasia.'
      },
      {
        text: 'A non-enveloped, double-stranded segmented RNA genome containing eleven segments',
        explanation: 'Double-stranded segmented RNA describes Rotavirus (Reoviridae), which causes infantile secretory diarrhea, not aplastic crisis.'
      },
      {
        text: 'An enveloped, negative-sense single-stranded RNA genome with surface hemagglutinin and neuraminidase',
        explanation: 'Enveloped negative-sense segmented RNA describes Influenza virus (Orthomyxoviridae), which causes respiratory influenza.'
      },
      {
        text: 'An enveloped, positive-sense single-stranded RNA retrovirus utilizing gp120 to bind CD4',
        explanation: 'Retrovirus utilizing gp120 describes HIV (Human Immunodeficiency Virus), which causes progressive CD4+ T-cell depletion.'
      }
    ]
  },
  {
    code: 'op-c-s1-0167',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Gastrointestinal',
    topic: 'Rotavirus Segmented dsRNA NSP4 Viral Enterotoxin Diarrhea',
    subtopic: 'Reoviridae Wheel-Like Structure Villous Blunting and Calcium Mobilization',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Rotavirus: most common cause of severe, dehydrating, watery diarrhea in infants and young children worldwide (prior to universal live-attenuated vaccination). Microbiological features: Reoviridae family; NON-ENVELOPED, DOUBLE-STRANDED RNA (dsRNA) with 11 SEGMENTS, surrounded by a double-layered icosahedral capsid giving a characteristic "WHEEL-LIKE" appearance on transmission electron microscopy (rota = wheel). Pathophysiology of diarrhea: dual osmotic and secretory mechanism: 1. Destroys mature absorptive enterocytes in the villus tips of the duodenum and jejunum -> blunting of villi -> loss of brush border disaccharidases (especially LACTASE) -> malabsorption of lactose -> OSMOTIC DIARRHEA; 2. Produces the first discovered viral enterotoxin, NSP4 (non-structural protein 4). NSP4 acts as a viroporin that mobilizes intracellular calcium from the endoplasmic reticulum -> triggers calcium-dependent CHLORIDE (Cl-) SECRETION via anoctamin-1 (ANO1) / CFTR channels, producing profuse SECRETORY DIARRHEA.',
    citation: 'Crawford SE, et al. Rotavirus infection. Nat Rev Dis Primers. 2017;3:17083. PMID: 29119972.',
    stem:
      'A 9-month-old unvaccinated boy who attends a daycare center is brought to the pediatric emergency department for evaluation of profuse, non-bloody, watery diarrhea (10–12 episodes daily), repeated vomiting, and low-grade fever that began 48 hours ago. Physical examination reveals an irritable, sunken-eyed infant with dry oral mucous membranes, depressed anterior fontanelle, and poor skin turgor with delayed capillary refill (3 seconds), consistent with moderate-to-severe dehydration. Abdominal examination demonstrates hyperactive bowel sounds with mild diffuse tenderness without rebound or guarding. Stool examination demonstrates watery stool that is negative for occult blood and fecal leukocytes. Stool viral antigen enzyme immunoassay confirms infection with an enteric virus. Transmission electron microscopy of stool reveals non-enveloped, 70-nm viral particles with a distinctive sharp, wheel-like outer rim radiating from a central hub. In addition to osmotic malabsorption secondary to enterocyte brush border villous blunting, which of the following molecular mechanisms directly contributes to this pathogen’s profuse secretory diarrhea?',
    options: [
      {
        text: 'Synthesis of the non-structural viral enterotoxin NSP4 that mobilizes intracellular calcium and stimulates epithelial chloride secretion',
        explanation: 'Rotavirus (a member of the Reoviridae family) is the premier cause of severe, dehydrating infantile gastroenteritis worldwide. Structurally, rotavirus is a non-enveloped, icosahedral virus containing a segmented, double-stranded RNA (dsRNA) genome composed of 11 distinct gene segments. Transmission electron microscopy reveals a pathognomonic wheel-like or cartwheel appearance (spoke-like capsomers radiating from a central core; rota = wheel in Latin). Rotavirus induces diarrhea through a potent two-pronged pathophysiological mechanism: (1) Osmotic component: the virus selectively invades and lyses mature enterocytes at the villus tips of the small intestine. Loss of absorptive surface area and loss of brush-border disaccharidases (particularly lactase) causes unabsorbed carbohydrates to remain in the bowel lumen, drawing water osmotically; and (2) Secretory component: rotavirus encodes NSP4 (non-structural protein 4), the first recognized viral enterotoxin. NSP4 functions as a viroporin that disrupts endoplasmic reticulum integrity, triggering massive release of intracellular calcium into the cytoplasm. Elevated intracellular calcium activates calcium-activated chloride channels (CaCC / anoctamin-1), driving active transcellular chloride and water secretion into the intestinal lumen. Live-attenuated oral vaccines (RotaTeq, Rotarix) provide robust protective immunity.'
      },
      {
        text: 'ADP-ribosylation of the stimulatory G-protein alpha subunit constitutively activating adenylyl cyclase',
        explanation: 'Gs-alpha ADP-ribosylation is the mechanism of cholera toxin (Vibrio cholerae) and heat-labile toxin (ETEC), not rotavirus.'
      },
      {
        text: 'Guanylyl cyclase-C receptor activation increasing intracellular cyclic GMP and protein kinase G',
        explanation: 'Guanylyl cyclase-C stimulation is the mechanism of heat-stable toxin (STa) of enterotoxigenic E. coli (ETEC) and linaclotide, not rotavirus.'
      },
      {
        text: 'Inactivation of the 60S ribosomal subunit via N-glycosidase cleavage of 28S ribosomal RNA',
        explanation: '60S ribosomal cleavage is the mechanism of Shiga toxin (Shigella dysenteriae) and Shiga-like toxin (EHEC O157:H7), which cause bloody diarrhea (hemolytic uremic syndrome).'
      },
      {
        text: 'Cleavage of synaptobrevin blocking acetylcholine release at intestinal parasympathetic junctions',
        explanation: 'Synaptobrevin cleavage is the mechanism of botulinum neurotoxin and tetanus neurotoxin, causing neuromuscular paralysis rather than secretory diarrhea.'
      }
    ]
  },
  {
    code: 'op-c-s1-0168',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Gastrointestinal',
    topic: 'Hepatitis D Defective Subviral Particle HBsAg Requirement',
    subtopic: 'Circular Negative-Sense ssRNA Superinfection vs Co-infection',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Hepatitis D Virus (HDV / "Delta agent"): defective, subviral satellite pathogen. Microbiological features: non-enveloped, circular, single-stranded negative-sense RNA virus. It encodes only a single structural protein: the DELTA ANTIGEN (HDAg), which encapsidates its RNA genome into a ribonucleoprotein core. CRUCIAL BIOLOGICAL DEFECT: HDV completely lacks the genetic capacity to synthesize its own outer envelope surface glycoproteins. To assemble mature infectious virions and penetrate hepatocytes, HDV STRICTLY REQUIRES THE COAT OF HEPATITIS B SURFACE ANTIGEN (HBsAg). Infection modes: 1. CO-INFECTION (simultaneous acquisition of HBV and HDV): usually causes self-limited acute hepatitis; low risk of chronicity (< 5%); 2. SUPERINFECTION (HDV infection in a patient already chronically carrying HBsAg): causes acute severe hepatitis on top of chronic HBV, with very high risk of FULMINANT HEPATIC FAILURE (massive liver necrosis, coagulopathy, encephalopathy) and rapid progression to cirrhosis (in ~80%). Immunization against HBV with the recombinant HBsAg vaccine confers 100% protection against HDV.',
    citation: 'Hughes SA, et al. Hepatitis delta virus. Lancet. 2011;378(9785):73-85. PMID: 21511329.',
    stem:
      'A 41-year-old man who injects illicit intravenous drugs presents to the emergency department with profound fatigue, dark tea-colored urine, jaundice, and confusion. He has a known 6-year history of asymptomatic chronic Hepatitis B virus (HBV) infection (positive HBsAg, negative HBeAg, low HBV DNA viral load). Over the past 48 hours, he has experienced rapid clinical decompensation with severe right upper quadrant abdominal pain and vomiting. Physical examination reveals an agitated, disoriented man with deep scleral icterus, asterixis (flapping tremor of outstretched hands), and a shrunken, non-palpable liver edge. Laboratory evaluation demonstrates catastrophic fulminant hepatic necrosis: serum AST 4,850 U/L, serum ALT 5,200 U/L, total serum bilirubin 18.6 mg/dL, and prothrombin time (INR) 3.8 (markedly prolonged). Serological evaluation demonstrates active superinfection with Hepatitis D virus (HDV), confirmed by positive anti-HDV IgM antibodies and detectable HDV RNA in serum. The defective viral agent responsible for this acute liver failure is biologically incapable of producing infectious progeny in the absence of which of the following Hepatitis B viral components?',
    options: [
      {
        text: 'Hepatitis B surface antigen (HBsAg) required to form the outer viral lipoprotein envelope for hepatocyte transmission',
        explanation: 'Hepatitis D virus (HDV, or delta agent) is a unique, replication-defective subviral satellite pathogen that is classified in the Deltavirus genus. The HDV virion consists of a tiny (1.7 kilobases), circular, single-stranded negative-sense RNA genome that possesses intrinsic ribozyme catalytic cleavage activity. The genome encodes only one structural protein, the delta antigen (hepatitis delta antigen / HDAg), which associates with the viral RNA to form an internal ribonucleoprotein core. HDV is biologically defective because its diminutive genome completely lacks the genetic information required to synthesize viral surface envelope glycoproteins. Consequently, HDV is an obligate parasite of Hepatitis B virus (HBV): it strictly depends on the host hepatocyte being co-infected with HBV so that HDV ribonucleoprotein cores can be enveloped and coated with Hepatitis B surface antigen (HBsAg). HBsAg provides the envelope necessary for virion budding, stability, and attachment to the sodium-taurocholate cotransporting polypeptide (NTCP) receptor on uninfected hepatocytes. Superinfection of a chronic HBV carrier with HDV frequently triggers fulminant hepatic failure (massive hepatic necrosis, encephalopathy, asterixis) and accelerates cirrhosis. Recombinant HBV vaccination prevents HDV infection.'
      },
      {
        text: 'Hepatitis B core antigen (HBcAg) required to assemble the icosahedral nucleocapsid',
        explanation: 'HBcAg forms the icosahedral capsid of HBV; HDV does not use HBcAg, relying instead on its own delta antigen (HDAg) to form its internal nucleocapsid.'
      },
      {
        text: 'Hepatitis B e antigen (HBeAg) required to suppress host cytotoxic T-cell surveillance',
        explanation: 'HBeAg is a soluble secretory protein indicating active HBV viral replication, but is not physically incorporated into the virion and is not required by HDV.'
      },
      {
        text: 'Hepatitis B viral DNA-dependent DNA polymerase required for genome replication',
        explanation: 'HDV is an RNA virus and does not use HBV polymerase; HDV replicates its circular RNA using host cellular RNA polymerase II in the hepatocyte nucleus.'
      },
      {
        text: 'Hepatitis B X protein (HBx) required for transactivation of host oncogenic promoters',
        explanation: 'HBx is a transcriptional transactivator of HBV implicated in hepatocellular carcinoma; it is not a structural envelope requirement for HDV transmission.'
      }
    ]
  },
  {
    code: 'op-c-s1-0169',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Multiple Myeloma Monoclonal Plasma Cell Bone Resorption',
    subtopic: 'RANKL / OPG Imbalance CRAB Criteria and Light Chain Cast Nephropathy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Multiple Myeloma: malignant proliferation of clonal plasma cells (> 10% in bone marrow, CD138+ / CD38+). Clinical tetrad of "CRAB": 1. HyperCalcemia (osteoclast activation); 2. Renal failure (myeloma cast nephropathy); 3. Anemia (normocytic normochromic, marrow replacement); 4. Bone lytic lesions (bone pain, pathological fractures). Mechanism of lytic bone destruction: Myeloma cells express RANKL and secrete MIP-1alpha (CCL3) and DKK1 (Wnt inhibitor), which stimulates osteoclasts (via RANK receptor) and inhibits osteoblasts (suppressing osteoprotegerin [OPG]). Osteolytic "punched-out" lesions on skeletal survey (skull, spine, ribs); cold on bone scan (because bone scans detect osteoblastic activity!). Renal failure is caused by LIGHT CHAIN CAST NEPHROPATHY (Bence-Jones proteins filter through glomerulus and precipitate with Tamm-Horsfall mucoprotein in distal tubules, forming giant fractured casts). Peripheral smear shows ROULEAUX formation.',
    citation: 'Rajkumar SV, et al. International Myeloma Working Group updated criteria for the diagnosis of multiple myeloma. Lancet Oncol. 2014;15(12):e538-e548. PMID: 25439696.',
    stem:
      'A 68-year-old man presents to the clinic with severe, deep lower back pain and generalized fatigue over the past 3 months. The back pain is unremitting, awakens him from sleep, and worsens with movement. Physical examination reveals an alert, pale man with marked point tenderness over the mid-thoracic and lumbar spinous processes without neurological deficits. Laboratory evaluation reveals: hemoglobin 8.4 g/dL, MCV 88 fL, white blood cell count 4,800/microL, platelet count 140,000/microL, and erythrocyte sedimentation rate (ESR) > 100 mm/h. Serum chemistry demonstrates: calcium 12.2 mg/dL (normal: 8.5–10.5 mg/dL), BUN 42 mg/dL, and serum creatinine 2.8 mg/dL. Standard urine dipstick is negative for protein; however, a 24-hour quantitative urine protein electrophoresis reveals 3.8 g of protein, identified as monoclonal kappa light chains. Plain radiographic skeletal survey reveals multiple, sharply punched-out, non-sclerotic osteolytic lesions throughout the calvarium, ribs, and pelvis, along with a compression fracture of the L2 vertebral body. Serum protein electrophoresis (SPEP) demonstrates a prominent, narrow monoclonal spike (M-spike) in the gamma-globulin region. The extensive osteolytic bone destruction in this disorder is driven primarily by which of the following cellular mechanisms?',
    options: [
      {
        text: 'Neoplastic plasma cell upregulation of RANKL and secretion of osteolytic cytokines stimulating osteoclastic bone resorption',
        explanation: 'The patient has multiple myeloma, a clonal malignant neoplasm of terminally differentiated plasma cells (characterized by the CRAB tetrad: hyperCalcemia, Renal insufficiency, Anemia, and Bone lytic lesions). In multiple myeloma, bone destruction is characterized by uncoupled bone remodeling: markedly increased osteoclast activity accompanied by profound osteoblast suppression. Malignant plasma cells within the bone marrow stroma produce cytokines (such as macrophage inflammatory protein-1alpha / CCL3, TNF-alpha, and IL-1beta) that upregulate the expression of Receptor Activator of Nuclear Factor-kappa-B Ligand (RANKL) on marrow stromal cells and osteoblasts. RANKL binds to RANK receptors on osteoclast precursors, driving osteoclast differentiation, activation, and survival, leading to unchecked bone resorption. Simultaneously, myeloma cells secrete Dickkopf-1 (DKK1) and soluble frizzled-related proteins that inhibit the Wnt/beta-catenin pathway in osteoblasts, blocking osteoblast differentiation and shutting down osteoprotegerin (OPG, a soluble decoy receptor that normally neutralizes RANKL). This produces purely lytic "punched-out" bone lesions that appear as radiolucent defects on plain radiography and are characteristically cold on technetium-99m bone scintigraphy (which requires osteoblastic new bone formation).'
      },
      {
        text: 'Ectopic tumor secretion of intact 1-84 parathyroid hormone into the peripheral circulation',
        explanation: 'Ectopic intact PTH secretion is exceptionally rare; hypercalcemia of malignancy is driven by local osteolysis (myeloma, breast) or PTHrP (squamous carcinomas).'
      },
      {
        text: 'Excessive renal 1-alpha-hydroxylase activity producing systemic calcitriol intoxication',
        explanation: 'Calcitriol-mediated hypercalcemia occurs in granulomatous diseases (sarcoidosis, tuberculosis) and certain lymphomas via macrophage 1-alpha-hydroxylase, not multiple myeloma.'
      },
      {
        text: 'Intense periosteal osteoblastic bone formation with delayed osteoid mineralization',
        explanation: 'Osteoblastic bone formation produces dense sclerotic lesions (seen in metastatic prostate cancer) and Paget disease, whereas myeloma lesions are purely osteolytic with absent osteoblastic reaction.'
      },
      {
        text: 'Autoantibodies stimulating the calcium-sensing receptor on parathyroid chief cells',
        explanation: 'Activating CaSR antibodies cause hypocalcemia, while inactivating mutations cause FHH; neither causes lytic bone fractures or myeloma paraproteinemia.'
      }
    ]
  },
  {
    code: 'op-c-s1-0170',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Waldenstrom Macroglobulinemia IgM Hyperviscosity Syndrome',
    subtopic: 'Lymphoplasmacytic Lymphoma MYD88 L265P and Absence of Lytic Bone Lesions',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Differentiate Waldenström Macroglobulinemia (WM) from Multiple Myeloma: WM is a low-grade B-cell lymphoplasmacytic lymphoma characterized by monoclonal IgM overproduction. Driven by somatic MYD88 L265P mutation in >90% of cases. IgM is a massive 970-kDa PENTAMER that remains intravascular, causing HYPERVISCOSITY SYNDROME: 1. Visual disturbances (blurred vision, diplopia, fundoscopy shows dilated, engorged, tortuous retinal veins with "sausage-link" pinching and retinal flame hemorrhages); 2. Neurological deficits (headache, dizziness, ataxia, stupor); 3. Mucosal bleeding (epistaxis, gingival oozing due to IgM coating platelets and clotting factors). Physical exam reveals generalized LYMPHADENOPATHY and HEPATOSPLENOMEGALY (~30-40%). CRUCIAL DIFFERENTIATION FROM MULTIPLE MYELOMA: WM DOES NOT CAUSE LYTIC BONE LESIONS OR HYPERCALCEMIA (bone scan and calcium are completely normal), and renal failure is uncommon. Emergency treatment: PLASMAPHERESIS.',
    citation: 'Gertz MA. Waldenström macroglobulinemia: 2021 update on diagnosis, risk stratification, and management. Am J Hematol. 2021;96(2):258-269. PMID: 33179340.',
    stem:
      'A 71-year-old man presents to the emergency department complaining of progressive blurry vision, unsteadiness when walking, recurrent severe nosebleeds (epistaxis), and throbbing headaches over the past 3 weeks. Physical examination reveals an alert but lethargic elderly man with generalized, non-tender, rubbery cervical, axillary, and inguinal lymphadenopathy. Abdominal examination demonstrates moderate hepatomegaly and splenomegaly palpable 4 cm below the left costal margin. Dilated fundoscopic examination of both eyes reveals striking venous engorgement with tortuous, segmented retinal veins displaying a classic "sausage-link" appearance, along with scattered retinal flame hemorrhages. Complete blood count demonstrates: hemoglobin 8.8 g/dL, white blood cell count 5,200/microL, and platelet count 165,000/microL. Serum chemistry demonstrates: calcium 9.2 mg/dL (normal: 8.5–10.5 mg/dL), BUN 18 mg/dL, and serum creatinine 1.0 mg/dL. A full-body plain radiographic skeletal survey demonstrates completely normal bones with zero osteolytic lesions and no fractures. Serum protein electrophoresis (SPEP) reveals a dense M-spike in the gamma-globulin zone, confirmed on immunofixation to be a monoclonal IgM kappa paraprotein with a serum concentration of 5,400 mg/dL. Serum relative viscosity is markedly elevated at 4.8 (normal: 1.4–1.8). Which of the following features decisively differentiates this patient’s condition from multiple myeloma?',
    options: [
      {
        text: 'Circulation of a pentameric IgM paraprotein producing hyperviscosity and lymphadenopathy without osteolytic bone lesions or hypercalcemia',
        explanation: 'The patient has Waldenström macroglobulinemia (WM), a low-grade B-cell neoplasm classified as lymphoplasmacytic lymphoma. In >90% of cases, it is driven by a somatic gain-of-function mutation in MYD88 (L265P), which activates NF-kappa-B signaling. WM is characterized by bone marrow infiltration by a mixture of mature B lymphocytes, plasmacytoid lymphocytes, and plasma cells that secrete massive amounts of monoclonal Immunoglobulin M (IgM). Unlike IgG or IgA monomers/dimers in multiple myeloma, IgM is a massive 970-kDa pentamer. Because of its high molecular weight and carbohydrate content, IgM remains largely confined to the intravascular compartment, where it markedly increases blood viscosity. Hyperviscosity syndrome manifests at serum viscosity > 4.0 with the classic triad of: (1) Visual disturbances (dilated, segmented "sausage-link" retinal veins, papilledema, retinal hemorrhages); (2) Neurological symptoms (headache, vertigo, ataxia, stupor); and (3) Bleeding diathesis (epistaxis, mucosal bleeding due to IgM coating platelets and inhibiting fibrin polymerization). The decisive differences from multiple myeloma: WM characteristically exhibits lymphadenopathy and hepatosplenomegaly, and DOES NOT cause osteolytic "punched-out" bone lesions, bone pain, or hypercalcemia (calcium and skeletal survey are completely normal).'
      },
      {
        text: 'Development of severe osteolytic calvarial lesions driven by unopposed osteoclastic bone resorption',
        explanation: 'Osteolytic bone lesions and pathological fractures are the diagnostic hallmark of multiple myeloma, but are specifically ABSENT in Waldenström macroglobulinemia.'
      },
      {
        text: 'Light chain cast nephropathy causing severe acute oliguric renal failure with crystalline intratubular casts',
        explanation: 'Bence-Jones cast nephropathy is common in multiple myeloma; in WM, IgM is too large to filter through the glomerulus, so cast nephropathy is exceedingly rare.'
      },
      {
        text: 'Somatic chromosomal translocation t(11;14) juxtaposing the cyclin D1 gene with the immunoglobulin heavy chain',
        explanation: 'Translocation t(11;14) characterizes mantle cell lymphoma and a subset of multiple myeloma; WM is driven by the MYD88 L265P mutation.'
      },
      {
        text: 'Profound hypercalcemia secondary to extensive local secretion of macrophage inflammatory protein-1alpha',
        explanation: 'Hypercalcemia is a classic CRAB feature of multiple myeloma, but serum calcium is normal in Waldenström macroglobulinemia.'
      }
    ]
  },
  {
    code: 'op-c-s1-0171',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Burkitt Lymphoma t(8;14) c-MYC Overexpression Starry-Sky',
    subtopic: 'Jaw Mass in Endemic vs Abdominal Mass in Sporadic Form and EBV',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Burkitt Lymphoma: highly aggressive, high-grade B-cell non-Hodgkin lymphoma with the fastest doubling time of any human malignancy (Ki-67 proliferation index ~100%). Cytogenetics: reciprocal TRANSLOCATION t(8;14)(q24;q32) in >80% of cases. Juxtaposes the c-MYC ONCOGENE on chromosome 8 with the Ig HEAVY CHAIN (IgH) enhancer on chromosome 14, causing constitutive overexpression of the c-MYC TRANSCRIPTION FACTOR, which drives cell-cycle progression from G1 to S phase. Clinical subtypes: 1. ENDEMIC (African): strongly linked to EPSTEIN-BARR VIRUS (EBV), presents as a massive MANDIBULAR / JAW MASS in young children; 2. SPORADIC (Western): presents as a bulky ILEOCECAL / ABDOMINAL MASS causing bowel obstruction or intussusception. Histopathology: pathognomonic "STARRY-SKY" appearance (sheets of uniform, medium-sized, round basophilic B cells [the "night sky"] interspersed with pale, lipid-laden tingible body macrophages phagocytosing apoptotic debris [the "stars"]). High risk of Tumor Lysis Syndrome.',
    citation: 'Hecht JL, Aster JC. Molecular biology of Burkitt\'s lymphoma. J Clin Oncol. 2000;18(21):3707-3721. PMID: 11054443.',
    stem:
      'A 6-year-old boy from Uganda is brought to a regional hospital because of a rapidly enlarging, disfiguring mass involving his left mandible and maxilla that has grown over the past 3 weeks. The mass has loosened several molars and causes significant facial distortion and difficulty swallowing. Physical examination reveals a massive, firm, non-tender, 8-cm tumor protruding from the left mandibular ramus and gingiva, accompanied by left cervical lymphadenopathy. He is afebrile. Head and neck CT reveals extensive cortical destruction of the left mandible with a soft-tissue mass infiltrating the pterygomaxillary fossa. Biopsy of the mandibular mass is performed. Microscopic examination demonstrates a diffuse, monotonous sheet of medium-sized lymphoid cells with round nuclei, coarse chromatin, multiple distinct basophilic nucleoli, and deeply basophilic cytoplasm containing small lipid vacuoles. Numerous mitotic figures and apoptotic bodies are present throughout the tissue, with a Ki-67 proliferation fraction approaching 100%. Scattered throughout the dense sheets of dark neoplastic lymphocytes are numerous pale, benign, tingible-body macrophages containing ingested cellular debris, creating a classic "starry-sky" pattern. Serological testing is strongly positive for Epstein-Barr virus (EBV) nuclear antigens. This neoplastic process is driven by a chromosomal translocation that places which of the following oncogenes under the control of a constitutively active immunoglobulin enhancer?',
    options: [
      {
        text: 'The c-MYC nuclear transcription factor oncogene on chromosome 8',
        explanation: 'The patient has endemic Burkitt lymphoma, a highly aggressive mature B-cell non-Hodgkin lymphoma characterized by an exceptionally rapid proliferation rate (doubling time < 24 hours, Ki-67 index approaching 100%). Endemic Burkitt lymphoma occurs primarily in equatorial Africa, is virtually 100% associated with latent Epstein-Barr virus (EBV) infection (involving EBNA-1 and LMP-1), and characteristically presents as a rapidly expanding mass of the mandible or maxilla in young children. In contrast, the sporadic (non-endemic) form presents in Western countries as an ileocecal or abdominal mass. The molecular hallmark of Burkitt lymphoma is the reciprocal chromosomal translocation t(8;14)(q24;q32), present in ~85% of cases (variant translocations include t(2;8) involving the kappa light chain and t(8;22) involving the lambda light chain). This translocation juxtaposes the c-MYC proto-oncogene on chromosome 8q24 with the transcriptionally hyperactive immunoglobulin heavy-chain (IgH) enhancer locus on chromosome 14q32. c-MYC encodes a basic helix-loop-helix leucine zipper transcription factor that heterodimerizes with MAX to upregulate cyclin-dependent kinases (CDKs) and downregulate p21, driving continuous, uncontrolled cell-cycle progression from G1 into S phase. High apoptosis and phagocytosis by tingible body macrophages create the classic "starry sky" histological appearance.'
      },
      {
        text: 'The BCL-2 mitochondrial anti-apoptotic oncogene on chromosome 18',
        explanation: 'Translocation t(14;18) places BCL-2 under the IgH enhancer in Follicular Lymphoma, which is an indolent lymphoma of older adults that inhibits apoptosis, not the hyperproliferative Burkitt lymphoma.'
      },
      {
        text: 'The Cyclin D1 (CCND1) cell-cycle regulator oncogene on chromosome 11',
        explanation: 'Translocation t(11;14) overexpresses Cyclin D1 in Mantle Cell Lymphoma, presenting in older men with lymphadenopathy and lymphomatous polyposis, not a pediatric jaw tumor.'
      },
      {
        text: 'The ABL1 non-receptor tyrosine kinase oncogene on chromosome 9',
        explanation: 'Translocation t(9;22) produces BCR-ABL1 in Chronic Myeloid Leukemia (CML) and B-ALL, causing constitutive cytoplasmic tyrosine kinase activity.'
      },
      {
        text: 'The BCL-6 transcriptional repressor zinc-finger gene on chromosome 3',
        explanation: 'BCL-6 translocations on chromosome 3q27 occur in Diffuse Large B-Cell Lymphoma (DLBCL), presenting with large pleomorphic lymphocytes (2-3 times the size of a normal lymphocyte), not Burkitt lymphoma.'
      }
    ]
  },
  {
    code: 'op-c-s1-0172',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Follicular Lymphoma t(14;18) BCL-2 Apoptosis Resistance',
    subtopic: 'Mitochondrial Cytochrome C Blockade Centrocytes and Loss of Macrophages',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Follicular Lymphoma: most common indolent (low-grade) non-Hodgkin lymphoma in adults (median age ~60). Cytogenetics: hallmark reciprocal translocation t(14;18)(q32;q21). Juxtaposes the BCL-2 ONCOGENE on chromosome 18 with the Ig HEAVY CHAIN (IgH) enhancer on chromosome 14. BCL-2 is an ANTI-APOPTOTIC protein located on the outer mitochondrial membrane that stabilizes membrane permeability, blocking BAX/BAK channel formation and PREVENTING CYTOCHROME C RELEASE into the cytoplasm (halting caspase activation). Overexpression prevents physiological apoptosis of B cells that fail somatic hypermutation. Presentation: painless, generalized "waxing and waning" lymphadenopathy over years. Histopathology: crowded, back-to-back neoplastic follicles lacking mantle zones, composed of small cleaved cells (centrocytes) and large cells (centroblasts). DIFFERENTIATION FROM REACTIVE FOLLICULAR HYPERPLASIA: 1. Follicular lymphoma follicles LACK tingible body macrophages (because cells do not die!); 2. Monoclonal B cells (restricted kappa or lambda); 3. Strongly BCL-2 POSITIVE (normal germinal centers are BCL-2 negative!). Risk of transformation to Diffuse Large B-Cell Lymphoma (Richter-like transformation).',
    citation: 'Kridel R, et al. The biology of follicular lymphoma. Nat Rev Cancer. 2012;12(10):688-698. PMID: 22972413.',
    stem:
      'A 62-year-old man presents to the clinic for evaluation of multiple enlarged, painless swellings in his neck, armpits, and groin that have waxed and waned in size over the past 3 years. He reports no fevers, night sweats, or unintentional weight loss. Physical examination reveals generalized, non-tender, discrete, mobile, rubbery lymphadenopathy involving bilateral cervical, axillary, and inguinal lymph node chains, without hepatosplenomegaly. Complete blood count and peripheral blood smear are unremarkable. An excisional biopsy of an enlarged cervical lymph node is performed. Microscopic examination demonstrates complete effacement of the normal nodal architecture by crowded, back-to-back, uniform neoplastic lymphoid follicles extending throughout both the cortex and the medullary sinusoids. The neoplastic follicles lack well-defined mantle zones and are composed of a mixture of small cells with deeply clefted, indented nuclei (centrocytes) and larger non-cleaved cells (centroblasts). In striking contrast to benign reactive germinal centers, these neoplastic follicles demonstrate a complete absence of tingible-body macrophages and an exceptionally low apoptotic rate. Immunohistochemical staining demonstrates that the follicular cells are strongly and diffusely positive for CD20, CD10, and BCL-2. The chromosomal translocation characteristic of this neoplasm promotes oncogenesis primarily by preventing which of the following biological processes?',
    options: [
      {
        text: 'Mitochondrial outer membrane permeabilization and release of cytochrome c into the cytoplasm',
        explanation: 'The patient has follicular lymphoma, the most common indolent non-Hodgkin lymphoma in adults. It arises from germinal center B cells and typically presents as painless, generalized, "waxing and waning" lymphadenopathy over many years. The genetic hallmark of follicular lymphoma is the t(14;18)(q32;q21) reciprocal translocation. This translocation juxtaposes the BCL-2 proto-oncogene on chromosome 18q21 with the transcriptionally active immunoglobulin heavy-chain (IgH) locus on chromosome 14q32. BCL-2 is an integral outer mitochondrial membrane anti-apoptotic protein. It heterodimerizes with and neutralizes pro-apoptotic multidomain proteins (BAX and BAK). Under normal physiology, germinal center B cells downregulate BCL-2 so that cells failing somatic hypermutation or producing non-functional antibodies undergo apoptosis (which are engulfed by tingible body macrophages). Overexpression of BCL-2 prevents mitochondrial outer membrane permeabilization (MOMP), blocking the efflux of cytochrome c into the cytosol and preventing apoptosome assembly and caspase-9/caspase-3 activation. Centrocytes survive indefinitely, producing neoplastic follicles that are BCL-2 positive and characteristically lack tingible-body macrophages.'
      },
      {
        text: 'Phosphorylation and inactivation of the retinoblastoma (Rb) tumor suppressor protein',
        explanation: 'Rb phosphorylation is mediated by Cyclin D1-CDK4/6 complexes (seen in Mantle Cell Lymphoma t(11;14)), releasing E2F to promote the G1/S transition, not BCL-2 anti-apoptotic signaling.'
      },
      {
        text: 'Ubiquitin-proteasome-mediated degradation of the p53 tumor suppressor protein',
        explanation: 'p53 degradation is mediated by MDM2 or HPV E6 protein; BCL-2 acts downstream of p53 at the mitochondrial membrane.'
      },
      {
        text: 'Receptor tyrosine kinase dimerization and autophosphorylation of cytoplasmic tyrosine residues',
        explanation: 'Receptor tyrosine kinase activation is characteristic of EGFR, HER2, or RET, not the mitochondrial anti-apoptotic protein BCL-2.'
      },
      {
        text: 'Telomere shortening during successive cycles of mitotic somatic cell division',
        explanation: 'Telomerase reactivation prevents telomere shortening; BCL-2 specifically blocks the intrinsic mitochondrial pathway of apoptosis.'
      }
    ]
  },
  {
    code: 'op-c-s1-0173',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Mantle Cell Lymphoma t(11;14) Cyclin D1 Overexpression',
    subtopic: 'G1 to S Phase Cell Cycle Promotion and Lymphomatous Polyposis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Mantle Cell Lymphoma (MCL): aggressive B-cell non-Hodgkin lymphoma arising from naïve B cells in the mantle zone of lymphoid follicles. Cytogenetics: pathognomonic reciprocal translocation t(11;14)(q13;q32). Juxtaposes the CCND1 gene (encodes CYCLIN D1) on chromosome 11 with the Ig HEAVY CHAIN (IgH) enhancer on chromosome 14, causing constitutive OVEREXPRESSION OF CYCLIN D1. Cyclin D1 complexes with CDK4 and CDK6 to PHOSPHORYLATE RETINOBLASTOMA (Rb) PROTEIN. Phosphorylated Rb releases the E2F transcription factor, which transcribes genes required for G1 TO S PHASE CELL-CYCLE TRANSITION. Clinical presentation: older men (median age ~65) with generalized lymphadenopathy, splenomegaly, and high propensity for extranodal involvement: classic LYMPHOMATOUS POLYPOSIS OF THE GASTROINTESTINAL TRACT (multiple polyps throughout colon and small bowel). Immunohistochemistry: CD20+, CD5+, Cyclin D1+, CD23-negative (distinguishing it from CLL which is CD23+).',
    citation: 'Jares P, et al. Molecular pathogenesis of mantle cell lymphoma. J Clin Invest. 2012;122(10):3416-3423. PMID: 23023715.',
    stem:
      'A 66-year-old man presents to the clinic with generalized fatigue, early satiety, and a 6-kg unintentional weight loss over the past 4 months. Physical examination reveals generalized, firm, non-tender cervical, supraclavicular, axillary, and inguinal lymphadenopathy. Abdominal palpation demonstrates massive splenomegaly extending 8 cm below the left costal margin. Colonoscopy performed for intermittent hematochezia reveals innumerable small (2–10 mm), smooth, sessile polypoid mucosal lesions studded throughout the cecum, ascending colon, and terminal ileum (lymphomatous polyposis). Excisional biopsy of an enlarged inguinal lymph node demonstrates effacement of nodal architecture by a diffuse and nodular proliferation of small-to-medium-sized lymphocytes with irregular, indented, cleaved nuclei expanding the follicular mantle zones. Immunohistochemical staining reveals that the neoplastic cells are strongly positive for CD20, CD5, and nuclear Cyclin D1, but are negative for CD23 and CD10. Fluorescence in situ hybridization (FISH) confirms a t(11;14)(q13;q32) chromosomal translocation. Overexpression of the protein encoded by this translocated gene accelerates neoplastic cell proliferation primarily through which of the following molecular mechanisms?',
    options: [
      {
        text: 'Phosphorylation of the retinoblastoma (Rb) protein, facilitating release of the E2F transcription factor to drive G1 to S phase progression',
        explanation: 'The patient has mantle cell lymphoma (MCL), an aggressive B-cell non-Hodgkin lymphoma arising from the mantle zone of secondary lymphoid follicles. MCL is most prevalent in older men (median age 65) and characteristically presents with advanced disease: generalized lymphadenopathy, splenomegaly, and prominent extranodal gastrointestinal involvement manifesting as multiple mucosal polyps (lymphomatous polyposis). The molecular hallmark of mantle cell lymphoma is the reciprocal chromosomal translocation t(11;14)(q13;q32). This translocation transposes the CCND1 gene on chromosome 11q13 to the immunoglobulin heavy chain (IgH) locus on chromosome 14q32, resulting in constitutive overexpression of Cyclin D1 mRNA and nuclear protein. Cyclin D1 binds to cyclin-dependent kinase 4 and kinase 6 (CDK4/CDK6), forming an active catalytic complex that phosphorylates the retinoblastoma tumor suppressor protein (pRb). In its unphosphorylated (hypophosphorylated) state, Rb binds tightly to the E2F transcription factor, keeping it sequestered and inactive. Upon hyperphosphorylation by Cyclin D1-CDK4/6, Rb dissociates from E2F. Free E2F translocates to the nucleus and transcribes genes essential for DNA synthesis (such as DNA polymerase, thymidine kinase, and cyclin E), driving the cell uncontrollably past the G1/S restriction point into active DNA replication.'
      },
      {
        text: 'Constitutive activation of the c-Kit receptor tyrosine kinase driving stem cell factor signaling',
        explanation: 'Activating c-Kit (CD117) mutations drive Gastrointestinal Stromal Tumors (GIST) and systemic mastocytosis, sensitive to imatinib, not mantle cell lymphoma.'
      },
      {
        text: 'Inactivation of the PTEN phosphatase resulting in uninhibited Akt kinase phosphorylation',
        explanation: 'PTEN loss hyperactivates the PI3K/Akt pathway in Cowden syndrome, endometrial cancer, and glioblastoma, but is not the defining driver of mantle cell lymphoma.'
      },
      {
        text: 'Sequestration of cytoplasmic NF-kappa-B by mutant I-kappa-B-alpha repressor proteins',
        explanation: 'I-kappa-B sequesters NF-kappa-B to suppress transcription; oncogenic signaling typically degrades I-kappa-B to activate NF-kappa-B.'
      },
      {
        text: 'Direct enzymatic cleavage of pro-caspase-3 into its active executioner fragments',
        explanation: 'Caspase-3 cleavage executes apoptotic cell death; mantle cell lymphoma promotes cell cycle progression through Rb phosphorylation.'
      }
    ]
  },
  {
    code: 'op-c-s1-0174',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Hairy Cell Leukemia BRAF V600E Mutation and TRAP Cytochemistry',
    subtopic: 'Bone Marrow Reticulin Fibrosis Dry Tap and Cladribine Purine Analog',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Hairy Cell Leukemia (HCL): indolent mature B-cell neoplasm occurring predominantly in middle-aged to elderly MEN (male-to-female ratio 4:1). Pathognomonic somatic mutation: BRAF V600E activating point mutation in virtually 100% of cases (constitutively activates BRAF-MEK-ERK pathway). Clinical triad: 1. MASSIVE SPLENOMEGALY (red pulp engorgement, LUQ fullness, early satiety; NO peripheral lymphadenopathy); 2. PANCYTOPENIA (normocytic anemia, severe neutropenia with monocytopenia, thrombocytopenia; severe opportunistic atypical mycobacterial infections); 3. "DRY TAP" on bone marrow aspiration: marrow cannot be aspirated due to dense RETICULIN FIBROSIS induced by neoplastic cell secretion of TGF-beta. Blood smear: neoplastic B cells with abundant cytoplasm and delicate, fine, hair-like projections. Cytochemistry: TARTRATE-RESISTANT ACID PHOSPHATASE (TRAP) POSITIVE. Flow cytometry: CD19+, CD20+, CD11c+, CD25+, CD103+. First-line treatment: CLADRIBINE (2-chlorodeoxyadenosine, 2-CdA: purine analog resistant to adenosine deaminase that incorporates into DNA, causing strand breaks and apoptosis).',
    citation: 'Grever MR, et al. Consensus guidelines for the diagnosis and management of patients with hairy cell leukemia. Blood. 2017;129(5):553-560. PMID: 27903528.',
    stem:
      'A 58-year-old man presents to the clinic complaining of worsening fatigue, easy bruising, early satiety, and a dull, dragging sensation in his left upper abdomen over the past 5 months. He has experienced recurrent sinopulmonary infections, including an episode of disseminated Mycobacterium kansasii infection 2 months ago. Physical examination reveals an alert, pale man with scattered petechiae over his lower extremities. Palpation of the abdomen reveals massive splenomegaly extending 10 cm below the left costal margin; however, complete examination reveals a striking absence of palpable peripheral lymphadenopathy. Complete blood count demonstrates severe pancytopenia: hemoglobin 8.2 g/dL, white blood cell count 1,800/microL with profound monocytopenia (absolute monocyte count < 20/microL), and platelet count 48,000/microL. Peripheral blood smear reveals medium-sized lymphoid cells with round-to-oval nuclei and abundant, pale-blue cytoplasm featuring prominent, irregular, fine, thread-like or "hair-like" cytoplasmic projections. Cytochemical staining of these cells remains strongly positive for acid phosphatase following incubation with tartrate (positive TRAP stain). Flow cytometry confirms expression of CD19, CD20, CD11c, CD25, and CD103. Attempted bone marrow aspiration yields a "dry tap" with zero aspirate obtainable. Trephine core biopsy confirms diffuse infiltration of the marrow by lymphoid cells surrounded by clear halos ("fried-egg" appearance), accompanied by marked reticulin fibrosis. Nearly all cases of this hematologic malignancy harbor which of the following specific activating genetic mutations?',
    options: [
      {
        text: 'A point mutation in the BRAF gene resulting in a valine-to-glutamic acid substitution at codon 600 (BRAF V600E)',
        explanation: 'The patient has hairy cell leukemia (HCL), a rare, indolent B-cell lymphoproliferative neoplasm that predominantly affects middle-aged men (median age 55, 4:1 male predominance). In 2011, whole-exome sequencing revealed that the somatic BRAF V600E point mutation (c.1799T>A in exon 15, substituting valine for glutamic acid in the kinase activation loop) is present in virtually 100% of classic HCL cases. BRAF is a serine/threonine protein kinase acting immediately downstream of KRAS. The V600E mutation mimics phosphorylation, locking the kinase into a constitutively active conformation that drives continuous phosphorylation of MEK and ERK, promoting cell survival and proliferation. Hallmark features: (1) Massive splenomegaly without lymphadenopathy (neoplastic B cells infiltrate the splenic red pulp cords and sinuses); (2) Pancytopenia with profound, diagnostic monocytopenia (predisposing to atypical mycobacterial infections like MAC and Legionella); (3) "Dry tap" on bone marrow aspiration due to neoplastic cell secretion of transforming growth factor-beta (TGF-beta) and fibronectin, inducing dense reticulin fiber deposition; (4) Pathognomonic "hairy" cytoplasmic projections on peripheral smear; (5) Tartrate-resistant acid phosphatase (TRAP) positive cytochemistry; and (6) Flow cytometry positive for CD11c, CD25, and CD103. Highly responsive to cladribine (2-CdA, an adenosine deaminase-resistant purine analog).'
      },
      {
        text: 'A somatic mutation in the JAK2 gene resulting in a valine-to-phenylalanine substitution at codon 617 (JAK2 V617F)',
        explanation: 'JAK2 V617F mutation characterizes myeloproliferative neoplasms (polycythemia vera, essential thrombocythemia, primary myelofibrosis), presenting with panmyelosis, not TRAP-positive hairy B cells.'
      },
      {
        text: 'A point mutation in the MYD88 gene resulting in a leucine-to-proline substitution at codon 265 (MYD88 L265P)',
        explanation: 'MYD88 L265P mutation drives Waldenström macroglobulinemia, characterized by IgM hyperviscosity and lymphoplasmacytic proliferation without hairy projections.'
      },
      {
        text: 'A chromosomal inversion inv(16)(p13q22) fusing the CBFB gene with the MYH11 gene',
        explanation: 'Inversion inv(16) characterizes Acute Myeloid Leukemia subtype M4eo (acute myelomonocytic leukemia with abnormal eosinophils), an acute myeloid leukemia with myeloblasts.'
      },
      {
        text: 'A loss-of-function deletion of the ATM serine/threonine kinase gene on chromosome 11q22',
        explanation: 'ATM deletions/mutations occur in Ataxia-Telangiectasia and T-cell prolymphocytic leukemia, not classic B-cell hairy cell leukemia.'
      }
    ]
  },
  {
    code: 'op-c-s1-0175',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Polycythemia Vera JAK2 V617F Pseudokinase Mutation',
    subtopic: 'Constitutive Tyrosine Kinase Activity Low Erythropoietin and Aquagenic Pruritus',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Polycythemia Vera (PV): chronic myeloproliferative neoplasm characterized by autonomous, unregulated overproduction of all three myeloid lineages (panmyelosis: predominant absolute ERYTHROCYTOSIS, along with leukocytosis and thrombocytosis). Genetic hallmark: somatic gain-of-function mutation in the JAK2 gene (JAK2 V617F in >95% of cases; JAK2 exon 12 mutations in remaining 5%). The V617F mutation substitutes valine for phenylalanine in the autoinhibitory JH2 pseudokinase domain, abolishing negative feedback and causing CONSTITUTIVE TYROSINE KINASE ACTIVITY downstream of hematopoietic cytokine receptors (EPO-R, TPO-R, G-CSF-R). Results in erythroid proliferation INDEPENDENT OF ERYTHROPOIETIN. Diagnostic hallmark: SERUM ERYTHROPOIETIN (EPO) IS MARKEDLY LOW / SUPPRESSED (differentiating PV from secondary polycythemia due to hypoxia or EPO-secreting tumors where EPO is high). Clinical signs: plethoric "ruddy" face, headache, dizziness, AQUAGENIC PRURITUS (intense itching after warm bath/shower due to basophil histamine release), splenomegaly, gout, and high risk of ARTERIAL AND VENOUS THROMBOSIS (Budd-Chiari syndrome). Treatment: Phlebotomy and hydroxyurea.',
    citation: 'Spivak JL. Myeloproliferative Neoplasms. N Engl J Med. 2017;376(22):2168-2181. PMID: 28564566.',
    stem:
      'A 58-year-old man presents to the clinic complaining of persistent, throbbing headaches, dizziness, tinnitus, and an intense, burning, prickling itch (pruritus) across his entire body that occurs reliably 10 minutes after taking a warm bath or shower and does not respond to over-the-counter antihistamines. He has no history of smoking or cardiopulmonary disease. Physical examination reveals an alert man with a plethoric, ruddy facial complexion and engorged retinal veins on fundoscopy. Vital signs: blood pressure 156/94 mm Hg and resting room-air oxygen saturation 98%. Abdominal examination demonstrates firm, non-tender splenomegaly palpable 5 cm below the left costal margin. Complete blood count demonstrates: hemoglobin 20.8 g/dL (normal: 13.5–17.5 g/dL), hematocrit 62% (normal: 41–50%), red blood cell count 7.2 million/microL, white blood cell count 14,800/microL with mild neutrophilia and basophilia, and platelet count 520,000/microL (panmyelosis). Serum erythropoietin (EPO) concentration is profoundly suppressed at 1.2 mIU/mL (normal: 4–24 mIU/mL). Bone marrow biopsy confirms trilineage hypercellularity (panmyelosis). The somatic mutation responsible for this myeloproliferative neoplasm is located within which of the following functional domains of the JAK2 cytoplasmic tyrosine kinase?',
    options: [
      {
        text: 'The autoinhibitory JH2 pseudokinase domain, relieving tonic negative regulation and driving constitutive STAT phosphorylation',
        explanation: 'The patient has Polycythemia Vera (PV), a chronic BCR-ABL1-negative myeloproliferative neoplasm characterized by autonomous, clonal overproduction of mature red blood cells, granulocytes, and platelets (panmyelosis with predominant absolute erythrocytosis). Greater than 95% of patients with PV harbor a specific somatic gain-of-function missense mutation in the JAK2 gene: the JAK2 V617F mutation (substitution of valine with phenylalanine at amino acid 617 in exon 14). Structurally, JAK2 contains two kinase domains: the catalytic tyrosine kinase domain (JH1) and an adjacent regulatory pseudokinase domain (JH2). Under normal conditions, the JH2 pseudokinase domain acts as an autoinhibitory brake, exerting tonic negative feedback that keeps the JH1 catalytic domain inactive until an extracellular cytokine (such as erythropoietin, thrombopoietin, or G-CSF) binds its cell-surface receptor. The V617F mutation disrupts this autoinhibitory interaction, locking the catalytic JH1 domain into a constitutively active state. JAK2 continuously auto-phosphorylates and phosphorylates downstream STAT transcription factors (STAT5 and STAT3), driving uncontrolled erythrocyte proliferation completely independent of erythropoietin. Consequently, endogenous serum erythropoietin (EPO) is profoundly suppressed by negative feedback from elevated red cell mass. Key clinical features: hyperviscosity (headache, dizziness), plethoric face, splenomegaly, aquagenic pruritus (triggered by water contact, mediated by basophil and mast cell degranulation), and high thrombosis risk (including hepatic vein thrombosis / Budd-Chiari syndrome).'
      },
      {
        text: 'The extracellular ligand-binding domain, increasing its affinity for low circulating concentrations of erythropoietin',
        explanation: 'JAK2 is an intracellular cytoplasmic non-receptor tyrosine kinase associated with the receptor intracellular tail; it does not possess an extracellular ligand-binding domain.'
      },
      {
        text: 'The transmembrane anchoring alpha-helix, promoting spontaneous receptor homodimerization',
        explanation: 'Transmembrane mutations occur in RET or FGFR3; JAK2 is a peripheral cytoplasmic kinase lacking a transmembrane helix.'
      },
      {
        text: 'The catalytic ATP-binding pocket, preventing competitive inhibition by endogenous tyrosine phosphatases',
        explanation: 'The V617F mutation is in the regulatory JH2 pseudokinase domain, not the ATP-binding pocket of the JH1 catalytic domain.'
      },
      {
        text: 'The nuclear localization signal, accelerating constitutive translocation into the promoter region of the c-myc gene',
        explanation: 'JAK2 phosphorylates cytoplasmic STATs, which dimerize and translocate to the nucleus; JAK2 itself does not act as a primary nuclear transcription factor.'
      }
    ]
  }
];
