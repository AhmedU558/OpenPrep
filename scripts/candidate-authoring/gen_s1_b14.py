import json

# Generator for Step 1 Batch 14: Items 0326 to 0338
# Pharmacology: Autonomics, Antimicrobials, Antineoplastics

items = [
  # 0326
  {
    "code": "op-c-s1-0326",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Organophosphate Toxicity Pralidoxime Reversal and Aging Kinetics",
    "subtopic": "Regeneration of Acetylcholinesterase via Nucleophilic Oxime Reactivation Before Aging",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old agricultural worker is rushed to the emergency department 45 minutes after accidentally spilling an industrial pesticide containing parathion over his arms and chest while spraying a fruit orchard. On arrival, he is in acute respiratory distress, confused, and profusely diaphoretic. Physical examination demonstrates pinpoint pupils (miosis) with sluggish light reflex, severe wheezing with diffuse pulmonary rhonchi, copious salivation and lacrimation, and visible fasciculations in his calf and forearm muscles. Heart rate is 42/min and blood pressure is 88/54 mm Hg. Intravenous atropine is promptly administered, resulting in resolution of his wheezing and normalization of heart rate, but the muscle fasciculations and motor weakness persist. Which of the following is the biochemical mechanism of the second pharmacological agent that must be administered urgently to reverse his neuromuscular weakness?",
    "choices": [
      ["Nucleophilic displacement of the organophosphate group from the active site of acetylcholinesterase before chemical aging occurs", "Correct. Parathion is an organophosphate insecticide that covalently phosphorylates the esteratic site (serine hydroxyl group) of ACETYLCHOLINESTERASE (AChE), irreversibly inactivating it. This leads to massive acetylcholine accumulation at both MUSCARINIC synapses (DUMBBELSS: Diarrhea, Urination, Miosis, Bronchospasm/Bradycardia, Emesis, Lacrimation, Salivation, Sweating) and NICOTINIC synapses (muscle fasciculations, weakness, diaphragmatic paralysis). ATROPINE is a competitive muscarinic receptor antagonist that rapidly reverses life-threatening central and muscarinic effects (bronchorrhea, bronchospasm, bradycardia), BUT HAS ZERO EFFECT ON NICOTINIC RECEPTORS. PRALIDOXIME (2-PAM) is a nucleophilic oxime that regenerates functional AChE: its oxime group nucleophilically attacks the phosphorus atom, cleaving the covalent bond and freeing active AChE at both muscarinic and nicotinic junctions (reversing skeletal muscle weakness). CRUCIAL PHARMACOLOGY CONCEPT: Pralidoxime MUST be administered early before 'AGING' occurs (the non-enzymatic spontaneous loss of an alkyl side chain from the organophosphate-enzyme complex, which permanently locks the enzyme in an irreversible, unreactivatable state)."],
      ["Competitive antagonism at post-junctional skeletal muscle nicotinic acetylcholine receptors", "Competitive nicotinic blockers (e.g., tubocurarine, vecuronium) would worsen skeletal muscle paralysis and cause immediate respiratory arrest."],
      ["Selective allosteric activation of presynaptic choline acetyltransferase accelerating acetylcholine clearance", "Choline acetyltransferase SYNTHESIZES acetylcholine; activating it would increase ACh and worsen the cholinergic crisis."],
      ["Direct inhibition of voltage-gated calcium channels at presynaptic cholinergic nerve terminals", "Blocking presynaptic calcium channels inhibits vesicle fusion (Lambert-Eaton or botulinum mechanism), but does not regenerate phosphorylated acetylcholinesterase or treat organophosphate poisoning."],
      ["Enzymatic hydrolysis of organophosphates in the circulation by recombinant butyrylcholinesterase", "Recombinant butyrylcholinesterase serves as a theoretical bioscavenger to neutralize circulating toxin, but pralidoxime's primary clinical mechanism is nucleophilic reactivation of phosphorylated synaptic acetylcholinesterase."]
    ],
    "shortestValidSolution": "Organophosphate toxicity with muscle weakness persisting after atropine -> Pralidoxime (nucleophilic reactivation of AChE before aging).",
    "necessaryInference": "Atropine reverses muscarinic signs but leaves nicotinic muscle fasciculations and weakness intact. Pralidoxime is required to nucleophilically cleave the phosphate-serine bond and regenerate AChE at the neuromuscular junction before aging occurs.",
    "strongestDistractor": "Competitive antagonism at post-junctional skeletal muscle nicotinic acetylcholine receptors",
    "distractorExclusion": "Pralidoxime is an enzyme reactivator, not a competitive receptor antagonist. Nicotinic antagonists worsen muscle paralysis.",
    "citation": "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008;371(9612):597-607. PMID: 18280330."
  },
  # 0327
  {
    "code": "op-c-s1-0327",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Beta-Blocker Pharmacodynamics Intrinsic Sympathomimetic Activity",
    "subtopic": "Partial Agonist Mechanics (Pindolol, Acebutolol) in Resting vs Exercising Bradycardia",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with a history of moderate hypertension and chronic symptomatic sinus bradycardia (resting heart rate 48-52/min) requires antihypertensive therapy. His physician wishes to select an adrenergic receptor antagonist that will lower his blood pressure and blunt peak exercise-induced tachycardia, while avoiding further suppression of his resting heart rate at baseline. A drug that acts as a partial agonist at beta-1 and beta-2 adrenergic receptors is chosen. Which of the following pharmacological agents exhibits this intrinsic sympathomimetic activity (ISA)?",
    "choices": [
      ["Pindolol, which acts as a partial agonist producing weak receptor stimulation at low basal tone while competitively blocking full agonists at high tone", "Correct. Beta-adrenergic receptor antagonists are classified by cardioselectivity (beta-1 vs non-selective), lipid solubility, and INTRINSIC SYMPATHOMIMETIC ACTIVITY (ISA). PINDOLOL and ACEBUTOLOL are partial beta-receptor agonists. When endogenous catecholamine tone is low (at rest), their intrinsic agonist activity provides weak basal stimulation of the receptor (maintaining resting heart rate and cardiac output). However, during exercise or high sympathetic stress, when high concentrations of endogenous full agonists (epinephrine and norepinephrine) are released, the partial agonist competitively occupies the receptor sites, preventing full activation and capping peak heart rate and blood pressure. Therefore, pindolol and acebutolol cause less resting bradycardia and lipid alteration, although they are contraindicated in post-MI patients or angina because they do not reduce resting myocardial oxygen demand as effectively as pure beta-blockers."],
      ["Metoprolol, which acts as a pure inverse agonist selectively targeting beta-1 adrenergic receptors in cardiac nodal tissue", "Metoprolol is a beta-1 selective competitive antagonist without intrinsic sympathomimetic activity; it causes significant resting bradycardia."],
      ["Propranolol, which acts as a non-selective pure antagonist with potent local anesthetic membrane stabilizing properties", "Propranolol is a non-selective beta-1 and beta-2 antagonist lacking intrinsic sympathomimetic activity; it causes pronounced resting bradycardia."],
      ["Carvedilol, which combines non-selective beta-blockade with alpha-1 adrenergic receptor antagonism and antioxidant properties", "Carvedilol blocks beta-1, beta-2, and alpha-1 receptors without intrinsic sympathomimetic activity, and produces resting bradycardia."],
      ["Atenolol, which acts as a hydrophilic, beta-1 cardioselective antagonist cleared primarily by renal elimination", "Atenolol is a selective beta-1 antagonist without partial agonist properties that slows resting heart rate."]
    ],
    "shortestValidSolution": "Beta-blocker that lowers BP and limits exercise tachycardia without dropping resting heart rate -> Partial agonist with ISA (Pindolol / Acebutolol).",
    "necessaryInference": "Differentiate pure antagonists from partial agonists with intrinsic sympathomimetic activity (ISA: Pindolol, Acebutolol), which act as functional antagonists at high sympathetic tone but weak agonists at low basal tone.",
    "strongestDistractor": "Metoprolol, which acts as a pure inverse agonist selectively targeting beta-1 adrenergic receptors in cardiac nodal tissue",
    "distractorExclusion": "Metoprolol is a pure beta-1 antagonist without ISA and would exacerbate this patient's resting sinus bradycardia.",
    "citation": "Katzung BG. Basic & Clinical Pharmacology. 15th ed. McGraw-Hill; 2021. NLM ID: 101777264."
  },
  # 0328
  {
    "code": "op-c-s1-0328",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Alpha-1 Receptor Antagonist First-Dose Orthostatic Hypotension",
    "subtopic": "Impairment of Splanchnic and Peripheral Venoconstriction Baroreflex",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with benign prostatic hyperplasia (BPH) and hypertension is prescribed oral terazosin 2 mg daily. Thirty minutes after taking his very first dose at bedtime, he gets out of bed to use the bathroom. Upon standing, he experiences sudden lightheadedness, diaphoresis, and syncope, collapsing onto the floor without sustaining head trauma. Physical examination in the emergency department reveals: supine blood pressure 138/82 mm Hg, pulse 72/min; standing blood pressure 86/52 mm Hg, pulse 104/min. The sudden drop in blood pressure upon assuming the upright posture in this patient is primarily mediated by pharmacological blockade of which of the following vascular mechanisms?",
    "choices": [
      ["Alpha-1 adrenergic receptor-mediated venoconstriction resulting in decreased venous return (preload) and reduced cardiac output upon standing", "Correct. Alpha-1 adrenergic receptor antagonists (prazosin, terazosin, doxazosin) block vascular Gq-coupled alpha-1 receptors on both arterial and venous smooth muscle. Arteriolar dilation reduces total peripheral resistance (afterload). However, the major driver of FIRST-DOSE ORTHOSTATIC HYPOTENSION and syncope is VENODILATION (increased venous capacitance). Normally, upon standing, 500-1000 mL of blood pools in the lower extremities and splanchnic circulation; baroreceptors trigger sympathetic activation to constrict capacitance veins, preserving venous return (preload), end-diastolic volume, and stroke volume. Alpha-1 blockade prevents this compensatory venoconstriction, causing blood to pool in dependent extremities, precipitating a precipitous drop in preload, stroke volume, and arterial blood pressure upon standing. To minimize this risk, alpha-1 blockers must be initiated at low doses at bedtime."],
      ["Beta-2 adrenergic receptor-mediated vasodilation of skeletal muscle vascular beds", "Terazosin selectively blocks alpha-1 receptors; it has no affinity for beta-2 receptors, which mediate vasodilation via Gs/cAMP."],
      ["Muscarinic M3 receptor-mediated endothelial nitric oxide release causing generalized vasoplegia", "M3 receptors mediate endothelial NO release in response to acetylcholine; alpha-1 blockers do not stimulate muscarinic receptors."],
      ["Presynaptic alpha-2 adrenergic autoreceptor blockade causing paradoxical suppression of norepinephrine exocytosis", "Presynaptic alpha-2 blockade INCREASES norepinephrine release (disinhibiting the autoreceptor), rather than suppressing it."],
      ["Direct inhibition of voltage-dependent L-type calcium channels in the sinoatrial and atrioventricular nodes", "Inhibition of L-type calcium channels is the mechanism of calcium channel blockers (diltiazem, verapamil), not alpha-1 adrenergic antagonists."]
    ],
    "shortestValidSolution": "First-dose syncope after starting terazosin -> Alpha-1 blockade of venoconstriction decreases venous return (preload) upon standing.",
    "necessaryInference": "Postural syncope from first-dose alpha-1 blockade (terazosin) is primarily caused by venodilation: inability of lower extremity capacitance veins to constrict upon standing leads to pooled blood, decreased preload, and orthostatic collapse.",
    "strongestDistractor": "Presynaptic alpha-2 adrenergic autoreceptor blockade causing paradoxical suppression of norepinephrine exocytosis",
    "distractorExclusion": "Terazosin is selective for postsynaptic alpha-1 receptors, and alpha-2 blockade increases rather than decreases sympathetic discharge.",
    "citation": "Katzung BG. Basic & Clinical Pharmacology. 15th ed. McGraw-Hill; 2021. NLM ID: 101777264."
  },
  # 0329
  {
    "code": "op-c-s1-0329",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Clonidine Rebound Hypertension Receptor Downregulation",
    "subtopic": "Presynaptic Alpha-2 Agonist Abrupt Withdrawal and Sympathetic Storm",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man with poorly controlled hypertension who has been taking oral clonidine 0.2 mg three times daily for the past 2 years abruptly stops taking all medications after running out of his prescription 36 hours ago. He presents to the emergency department with severe throbbing headache, diaphoresis, palpitations, and marked anxiety. Physical examination reveals an agitated man with warm, flushed skin. Vital signs demonstrate blood pressure 220/124 mm Hg, pulse 124/min, and respirations 22/min. 12-lead ECG shows sinus tachycardia without ischemic ST-segment changes. Which of the following receptor alterations best accounts for the severe rebound hypertensive crisis observed following the abrupt discontinuation of this medication?",
    "choices": [
      ["Downregulation and desensitization of central presynaptic alpha-2 adrenergic autoreceptors leading to massive uninhibited norepinephrine exocytosis", "Correct. Clonidine is a centrally acting partial agonist at PRE-SYNAPTIC ALPHA-2 ADRENERGIC RECEPTORS in the nucleus tractus solitarius of the medulla. Activation of these Gi-coupled autoreceptors inhibits adenylyl cyclase, lowers cAMP, and blocks presynaptic voltage-gated calcium channels, thereby reducing the exocytosis of norepinephrine and dampening overall sympathetic outflow to the heart and peripheral vasculature. With chronic clonidine therapy, continuous agonist exposure leads to DOWNREGULATION, INTERNALIZATION, AND DESENSITIZATION OF CENTRAL ALPHA-2 AUTORECEPTORS. When clonidine is abruptly discontinued, the pharmacologic 'brake' is suddenly removed. Lacking functional down-regulated alpha-2 autoreceptors to provide negative feedback, presynaptic terminals release massive, uninhibited surges of norepinephrine, producing a severe SYMPATHETIC STORM: acute rebound hypertensive crisis, tachycardia, diaphoresis, and anxiety."],
      ["Upregulation of vascular endothelial endothelin ETA receptors driving irreversible arterial vasoconstriction", "Endothelin-1 contributes to pulmonary and systemic hypertension, but acute clonidine withdrawal crisis is mediated by central sympathetic surge, not endothelin upregulation."],
      ["Constitutive activation of renal beta-1 adrenergic receptors secondary to genetic promoter hypomethylation", "Renal beta-1 stimulation does increase renin release during sympathetic surge, but the primary cause of clonidine rebound is the loss of presynaptic alpha-2 autoreceptor negative feedback."],
      ["Downregulation of post-junctional vascular alpha-1 adrenergic receptors causing paradoxical denervation supersensitivity", "Vascular alpha-1 receptors are target organs that become exposed to high catecholamine surges; down-regulation would reduce, not increase, vasoconstriction."],
      ["Direct chemical blockade of vesicular monoamine transporter 2 (VMAT-2) in central adrenergic neurons", "VMAT-2 inhibition is the mechanism of reserpine, which depletes catecholamines, the exact opposite of the massive norepinephrine release in clonidine withdrawal."]
    ],
    "shortestValidSolution": "Abrupt clonidine cessation + severe hypertension/tachycardia -> Downregulated presynaptic alpha-2 autoreceptors cause massive sympathetic rebound.",
    "necessaryInference": "Clonidine is a presynaptic alpha-2 agonist that reduces sympathetic outflow. Chronic use downregulates alpha-2 autoreceptors; abrupt cessation removes the brake, precipitating massive uninhibited norepinephrine release and rebound hypertensive crisis.",
    "strongestDistractor": "Downregulation of post-junctional vascular alpha-1 adrenergic receptors causing paradoxical denervation supersensitivity",
    "distractorExclusion": "Post-junctional alpha-1 receptors mediate vasoconstriction, but the primary pharmacodynamic lesion is central presynaptic alpha-2 receptor downregulation.",
    "citation": "Katzung BG. Basic & Clinical Pharmacology. 15th ed. McGraw-Hill; 2021. NLM ID: 101777264."
  },
  # 0330
  {
    "code": "op-c-s1-0330",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Adrenergic Agonist Hemodynamic Comparative Profiles",
    "subtopic": "Norepinephrine vs Epinephrine vs Phenylephrine on SVR, MAP, and Reflex Heart Rate",
    "provisionalDifficulty": 4,
    "stem": "An intensive care fellow reviews continuous hemodynamic monitoring tracings of three different intravenous vasopressor infusions administered to experimental swine models: Drug X produces a marked increase in systolic blood pressure, marked increase in diastolic blood pressure, marked increase in systemic vascular resistance (SVR), and a reflex DECREASE in heart rate (reflex bradycardia). Drug Y produces an increase in systolic blood pressure, a DECREASE in diastolic blood pressure, a slight decrease in SVR, and a marked INCREASE in heart rate. Drug Z produces a marked increase in systolic blood pressure, moderate increase in diastolic blood pressure, moderate increase in SVR, and an initial increase followed by a slight decrease in heart rate. Which of the following correctly identifies Drug X, Drug Y, and Drug Z?",
    "choices": [
      ["Drug X: Phenylephrine; Drug Y: Epinephrine (low dose); Drug Z: Norepinephrine", "Correct. Master the comparative adrenergic hemodynamic profiles on USMLE Step 1: (1) DRUG X is PHENYLEPHRINE: a pure alpha-1 selective agonist. It causes pure arterial and venous vasoconstriction -> marked increase in SVR, marked rise in both systolic and diastolic BP, and mean arterial pressure (MAP). The high MAP stretches carotid sinus and aortic arch baroreceptors, triggering parasympathetic vagal stimulation that causes REFLEX BRADYCARDIA (and reduced cardiac output). (2) DRUG Y is LOW-TO-MODERATE DOSE EPINEPHRINE: at low doses, beta-2 affinity exceeds alpha-1 affinity. Beta-1 stimulation increases heart rate and stroke volume (increased systolic BP); beta-2 stimulation in skeletal muscle vascular beds causes vasodilation (decreased SVR and DECREASED DIASTOLIC BP), yielding wide pulse pressure and tachycardia. (3) DRUG Z is NOREPINEPHRINE: potent alpha-1 agonist with modest beta-1 activity and negligible beta-2 activity. Alpha-1 vasoconstriction increases SVR, diastolic BP, and systolic BP. Beta-1 activity increases contractility, but baroreceptor reflex partially offsets beta-1 chronotropy, leaving heart rate unchanged or slightly decreased."],
      ["Drug X: Isoproterenol; Drug Y: Phenylephrine; Drug Z: Epinephrine", "Isoproterenol is a pure beta-1/beta-2 agonist that decreases diastolic BP and SVR while increasing heart rate, completely opposite to Drug X."],
      ["Drug X: Norepinephrine; Drug Y: Phenylephrine; Drug Z: Dobutamine", "Phenylephrine causes reflex bradycardia and increases diastolic BP, which does not match Drug Y (decreased diastolic BP, tachycardia)."],
      ["Drug X: Dobutamine; Drug Y: Norepinephrine; Drug Z: Epinephrine", "Dobutamine is a beta-1 > beta-2 inotrope that reduces SVR and does not cause the massive vasoconstriction and reflex bradycardia seen in Drug X."],
      ["Drug X: Epinephrine; Drug Y: Dobutamine; Drug Z: Phenylephrine", "Epinephrine at high doses increases heart rate and SVR, which does not produce pure reflex bradycardia and decreased cardiac output as in Drug X."]
    ],
    "shortestValidSolution": "High SVR + high diastolic BP + reflex bradycardia = Phenylephrine. Decreased SVR/diastolic BP + tachycardia = Low-dose Epinephrine. High SVR + high BP + balanced HR = Norepinephrine.",
    "necessaryInference": "Integrate adrenergic receptor subtype selectivities (alpha-1 vs beta-1 vs beta-2) with baroreceptor reflex arc dynamics to identify Phenylephrine (pure alpha-1), Epinephrine (beta-1 + beta-2 at low doses), and Norepinephrine (alpha-1 > beta-1).",
    "strongestDistractor": "Drug X: Norepinephrine; Drug Y: Phenylephrine; Drug Z: Dobutamine",
    "distractorExclusion": "Norepinephrine has beta-1 inotropic activity and modest chronotropic drive, whereas pure alpha-1 phenylephrine causes profound reflex bradycardia with zero direct beta stimulation.",
    "citation": "Costanzo LS. Physiology. 7th ed. Elsevier; 2022. NLM ID: 101777263."
  },
  # 0331
  {
    "code": "op-c-s1-0331",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Aminoglycoside Resistance Aminoglycoside-Modifying Enzymes",
    "subtopic": "Plasmid-Encoded Transfer of Acetyltransferases, Phosphotransferases, and Nucleotidyltransferases",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man hospitalized in the intensive care unit for ventilator-associated pneumonia secondary to multidrug-resistant Pseudomonas aeruginosa is treated with an intravenous antibiotic regimen that includes tobramycin. Follow-up blood and endotracheal cultures continue to grow the organism despite therapeutic peak and trough serum drug levels. Genetic analysis of the resistant P. aeruginosa isolate reveals acquisition of a conjugative plasmid that encodes an enzyme capable of covalently modifying the antibiotic prior to ribosomal binding. Which of the following biochemical reactions is the most common mechanism of acquired aminoglycoside resistance in Gram-negative bacilli?",
    "choices": [
      ["Enzymatic acetylation, adenylation, or phosphorylation of amino and hydroxyl groups on the aminoglycoside molecule", "Correct. Aminoglycosides (gentamicin, tobramycin, amikacin) are polycationic molecules that bind irreversibly to the 30S ribosomal subunit, causing mRNA misreading, premature translation termination, and destruction of outer membrane integrity. THE MOST COMMON AND CLINICALLY SIGNIFICANT MECHANISM OF BACTERIAL RESISTANCE TO AMINOGLYCOSIDES is the acquisition of plasmid- or transposon-encoded AMINOGLYCOSIDE-MODIFYING ENZYMES (AMEs). These periplasmic enzymes include: (1) Aminoglycoside acetyltransferases (AAC; catalyze N-acetylation using acetyl-CoA); (2) Aminoglycoside phosphotransferases (APH; catalyze O-phosphorylation using ATP); and (3) Aminoglycoside nucleotidyltransferases/adenylyltransferases (ANT; catalyze O-adenylation using ATP). Covalent attachment of bulky acetyl, phosphate, or adenylyl groups alters the electrostatic charge and steric conformation of the aminoglycoside, preventing it from binding to its target site on the 30S ribosomal RNA."],
      ["Point mutation in the 23S rRNA gene preventing antibiotic binding to the peptidyl transferase center", "23S rRNA point mutations mediate resistance to macrolides (erythromycin, azithromycin) and oxazolidinones (linezolid), which bind the 50S subunit, not the 30S subunit targeted by aminoglycosides."],
      ["Active enzymatic cleavage of the central lactam ring by class A carbapenemases (KPC)", "Beta-lactamases cleave beta-lactam rings (penicillins, cephalosporins, carbapenems); aminoglycosides possess no beta-lactam ring."],
      ["Reprogramming of terminal peptidoglycan precursors from D-alanyl-D-alanine to D-alanyl-D-lactate", "D-Ala-D-Ala to D-Ala-D-Lac alteration mediates vancomycin resistance in enterococci (VRE), not aminoglycoside resistance."],
      ["Downregulation of outer membrane porin OprD channels preventing drug entry across the outer membrane", "Loss of OprD porins in Pseudomonas aeruginosa confers specific resistance to carbapenems (imipenem), not aminoglycosides, which enter via oxygen-dependent active transport."]
    ],
    "shortestValidSolution": "Acquired resistance to tobramycin/gentamicin in Gram-negative bacteria -> Aminoglycoside-modifying enzymes (acetylation, adenylation, phosphorylation).",
    "necessaryInference": "Recognize that the primary plasmid-mediated resistance mechanism against aminoglycosides in Gram-negatives is enzymatic chemical modification (acetylation/adenylation/phosphorylation) by periplasmic enzymes.",
    "strongestDistractor": "Downregulation of outer membrane porin OprD channels preventing drug entry across the outer membrane",
    "distractorExclusion": "OprD porin loss is the specific mechanism for imipenem resistance in Pseudomonas, whereas aminoglycoside resistance is overwhelmingly mediated by aminoglycoside-modifying enzymes.",
    "citation": "Ramirez MS, Tolmasky ME. Aminoglycoside modifying enzymes. Drug Resist Updat. 2010;13(6):151-171. PMID: 20833577."
  },
  # 0332
  {
    "code": "op-c-s1-0332",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Vancomycin Resistance Peptidoglycan Precursor Reprogramming",
    "subtopic": "VanA Operon D-Alanyl-D-Lactate Substitution and Loss of Critical Hydrogen Bonding",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old woman with a history of recurrent urinary tract infections is admitted with septic shock secondary to Enterococcus faecium bacteremia. The isolate is found to be resistant to ampicillin, gentamicin, and vancomycin (minimum inhibitory concentration [MIC] > 256 mcg/mL). Genetic testing demonstrates the presence of the transposon-borne vanA gene cluster. In susceptible Gram-positive bacteria, vancomycin inhibits cell wall peptidoglycan synthesis by forming five high-affinity hydrogen bonds with a terminal amino acid dipeptide on cell wall precursors. The vanA operon confers high-level vancomycin resistance by altering this terminal dipeptide target to which of the following structures?",
    "choices": [
      ["D-alanyl-D-lactate, replacing a key amide linkage with an ester bond that eliminates an essential hydrogen bond", "Correct. Vancomycin is a large, glycopeptide bactericidal antibiotic that inhibits bacterial cell wall synthesis by binding tightly to the D-ALANYL-D-ALANINE (D-Ala-D-Ala) terminus of nascent peptidoglycan pentapeptide chains (lipid II). By steric hindrance, vancomycin caps the precursor, preventing transglycosylases from elongating the peptidoglycan chain and transpeptidases from cross-linking it. Binding depends on FIVE CRITICAL HYDROGEN BONDS formed between the peptide backbone of vancomycin and the D-Ala-D-Ala dipeptide. The vanA operon (transposon Tn1546) encodes enzymes (VanA ligase, VanH dehydrogenase, VanX dipeptidase) that reprogram peptidoglycan biosynthesis: VanH converts pyruvate to D-lactate, and VanA synthesizes D-ALANYL-D-LACTATE (D-Ala-D-Lac). Replacing the terminal amide linkage (-NH-) with an ester bond (-O-) creates electrostatic repulsion and ELIMINATES ONE CRITICAL HYDROGEN BOND, decreasing vancomycin binding affinity by more than 1,000-fold."],
      ["D-alanyl-D-serine, forming a bulky hydroxylated residue that repels vancomycin sterically", "D-Ala-D-Ser substitution confers low-level, intrinsic vancomycin resistance in Enterococcus gallinarum and E. casseliflavus (vanC phenotype), but high-level resistance in E. faecium (vanA) is mediated by D-Ala-D-Lac."],
      ["L-alanyl-L-alanine, inverting the stereochemistry of the peptide backbone", "Bacteria utilize D-stereoisomers in cell wall peptidoglycans to resist eukaryotic proteases; inversion to L-amino acids does not occur."],
      ["D-alanyl-glycyl-glycine, adding a flexible spacer that prevents steric capping", "Glycine cross-bridges are characteristic of Staphylococcus aureus peptidoglycan interpeptide bridges, not the terminal dipeptide targeted by vancomycin."],
      ["N-acetylglucosaminyl-N-acetylmuramic acid, polymerizing without peptide stems", "NAG and NAM form the carbohydrate glycan backbone of peptidoglycan; vancomycin binds to the peptide stem, not the sugar backbone."]
    ],
    "shortestValidSolution": "Vancomycin-resistant enterococci (VRE) vanA operon -> Replaces D-Ala-D-Ala with D-Ala-D-Lactate (loss of critical hydrogen bond).",
    "necessaryInference": "Vancomycin binds D-Ala-D-Ala via 5 hydrogen bonds. High-level resistance (vanA) synthesizes D-Ala-D-Lactate, replacing an NH group with O, losing 1 hydrogen bond and reducing affinity 1,000-fold.",
    "strongestDistractor": "D-alanyl-D-serine, forming a bulky hydroxylated residue that repels vancomycin sterically",
    "distractorExclusion": "D-Ala-D-Ser confers low-level resistance (vanC), whereas high-level transmissible resistance in E. faecium and VRSA (vanA) is mediated by D-Ala-D-Lactate.",
    "citation": "Courvalin P. Vancomycin resistance in gram-positive cocci. Clin Infect Dis. 2006;42(Suppl 1):S25-S34. PMID: 16323116."
  }
]

print(f"Loaded {len(items)} items for part 1 of Batch 14.")
