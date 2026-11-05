import sys

# Step 1 Batch 17 (items 0401 to 0425)
# Focus: Cellular Physiology, Signal Transduction, Receptors, Second Messengers, Cell Cycle

items_b17 = [
  {
    "code": "op-c-s1-0401",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "GPCR Signal Transduction and Desensitization",
    "subtopic": "Beta-Arrestin Mediated Receptor Endocytosis",
    "provisionalDifficulty": 5,
    "stem": "Cultured human bronchial smooth muscle cells are exposed to continuous, high-concentration isoproterenol in an in vitro pharmacologic assay. Intracellular cyclic AMP (cAMP) levels rise sharply, reaching a peak within 3 minutes, but then progressively decline toward baseline over the subsequent 45 minutes despite the constant presence of extracellular ligand. Biochemical analysis of the cell membrane reveals phosphorylation of serine and threonine residues located specifically on the carboxyl-terminal cytoplasmic tail of the beta-2 adrenergic receptor, followed by high-affinity binding of an intracellular cytosolic adapter protein that physically blocks interaction with Gs-alpha subunits and links the receptor to clathrin-coated pits. Which of the following proteins directly mediates this receptor uncoupling and initiates clathrin-dependent endocytosis?",
    "choices": [
      [
        "Beta-arrestin",
        "Continuous exposure of G-protein coupled receptors (GPCRs) like the beta-2 adrenergic receptor to agonists leads to homologous desensitization. The process involves two coordinated steps: (1) G-protein coupled receptor kinases (GRKs) phosphorylate serine and threonine residues on the intracellular carboxyl-terminal tail of the activated receptor. (2) Phosphorylation creates high-affinity binding sites for BETA-ARRESTIN. Beta-arrestin binding sterically hinders the receptor from interacting with heterotrimeric G-protein (Gs-alpha) subunits, rapidly terminating cAMP production. Furthermore, beta-arrestin functions as an adaptor protein that binds directly to clathrin and the AP-2 adaptor complex, targeting the desensitized receptor to clathrin-coated pits for internalization (endocytosis) into endosomes for either recycling or lysosomal degradation."
      ],
      [
        "Phospholipase C-beta",
        "Phospholipase C-beta is an effector enzyme activated by Gq-alpha that cleaves phosphatidylinositol 4,5-bisphosphate (PIP2) into IP3 and DAG, not an adapter that mediates GPCR endocytosis."
      ],
      [
        "Adenylyl cyclase type V",
        "Adenylyl cyclase is the membrane-bound effector enzyme activated by Gs-alpha to synthesize cAMP from ATP; it does not bind clathrin or mediate receptor internalization."
      ],
      [
        "Regulator of G-protein signaling (RGS)",
        "RGS proteins accelerate the intrinsic GTPase activity of G-alpha subunits (GAP function) to promote GTP hydrolysis to GDP, but they do not bind the carboxyl tail or clathrin-coated pits."
      ],
      [
        "Protein phosphatase 2A",
        "Protein phosphatase 2A dephosphorylates phosphoproteins; it reverses phosphorylation events rather than docking onto phosphorylated receptor tails to recruit clathrin."
      ]
    ],
    "shortestValidSolution": "Phosphorylation of GPCR carboxyl tail recruits beta-arrestin, which uncouples Gs-alpha and targets receptor to clathrin-coated pits for endocytosis.",
    "necessaryInference": "Identify beta-arrestin as the cytosolic adaptor that binds phosphorylated GPCRs to block G-protein coupling and recruit clathrin for endocytosis.",
    "strongestDistractor": "Regulator of G-protein signaling (RGS)",
    "distractorExclusion": "RGS acts as a GTPase-activating protein on G-alpha subunits, whereas beta-arrestin binds the receptor tail and mediates clathrin endocytosis.",
    "citation": "Lefkowitz RJ. Arrestins, GPCRs, and modern pharmacology. Physiology (Bethesda). 2013;28(1):9-13. PMID: 23280178.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-inference item requiring deduction of GPCR homologous desensitization mechanics from molecular steps without diagnostic giveaways.",
      "distractorExclusionNotes": "Distractors represent related GPCR signaling components (RGS, PLC, adenylyl cyclase) that lack clathrin-adapter activity.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0402",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Receptor Tyrosine Kinase Downstream Cascades",
    "subtopic": "PI3K-Akt-mTOR Signaling Pathway and Cell Survival",
    "provisionalDifficulty": 5,
    "stem": "An experimental peptide growth factor binds to an extracellular cell-surface receptor on vascular endothelial cells, triggering rapid receptor dimerization and autophosphorylation of intracellular tyrosine residues. An adapter protein containing an SH2 domain docks onto the phosphorylated receptor and recruits a lipid kinase that phosphorylates phosphatidylinositol 4,5-bisphosphate (PIP2) at the 3-position of the inositol ring. The resulting lipid second messenger recruits a cytosolic serine/threonine protein kinase to the inner leaflet of the plasma membrane via its pleckstrin homology (PH) domain, leading to kinase activation and downstream inhibition of the pro-apoptotic protein BAD. Which of the following downstream enzymes is directly activated by this signaling cascade to promote protein synthesis and cell survival?",
    "choices": [
      [
        "Mechanistic target of rapamycin complex 1 (mTORC1)",
        "Receptor tyrosine kinase (RTK) stimulation activates the PI3K-Akt signaling axis: (1) Receptor autophosphorylation recruits Phosphoinositide 3-kinase (PI3K) via its SH2 domain. (2) PI3K phosphorylates PIP2 to generate Phosphatidylinositol 3,4,5-trisphosphate (PIP3). (3) PIP3 anchors both Phosphoinositide-dependent kinase 1 (PDK1) and Protein Kinase B (Akt) to the membrane via their Pleckstrin Homology (PH) domains, allowing PDK1 to phosphorylate and activate Akt. (4) Activated Akt phosphorylates and inactivates the tuberous sclerosis complex (TSC1/TSC2), which relieves inhibition on Rheb-GTP, leading to direct activation of mTORC1 (mechanistic target of rapamycin complex 1). mTORC1 phosphorylates S6K and 4E-BP1 to drive ribosomal translation, cell growth, and survival, while Akt directly phosphorylates and inhibits the pro-apoptotic Bcl-2 family member BAD."
      ],
      [
        "Glycogen synthase kinase-3 beta (GSK-3beta)",
        "Akt phosphorylates and INACTIVATES GSK-3beta (inhibition of an inhibitor); GSK-3beta is not activated to promote cell survival."
      ],
      [
        "Caspase-3 executioner protease",
        "Caspase-3 is an executioner protease of the apoptotic cascade; Akt signaling actively blocks apoptosis by inhibiting BAD and caspase-9."
      ],
      [
        "Forkhead box protein O1 (FOXO1) transcription factor",
        "Akt phosphorylates FOXO transcription factors, creating binding sites for 14-3-3 chaperone proteins that sequester FOXO in the cytoplasm, preventing pro-apoptotic transcription."
      ],
      [
        "Guanylyl cyclase B",
        "Guanylyl cyclase B is a transmembrane natriuretic peptide receptor that synthesizes cGMP from GTP, independent of the PI3K-Akt-mTOR survival axis."
      ]
    ],
    "shortestValidSolution": "PIP2 -> PIP3 via PI3K recruits Akt via PH domain, which phosphorylates TSC2/Rheb to activate mTORC1 and promote cell growth/survival.",
    "necessaryInference": "Trace the RTK -> PI3K -> PIP3 -> Akt -> mTORC1 pathway and recognize that Akt activation leads to downstream mTORC1 stimulation.",
    "strongestDistractor": "Glycogen synthase kinase-3 beta (GSK-3beta)",
    "distractorExclusion": "Akt phosphorylates GSK-3beta to INHIBIT it, whereas it stimulates the mTORC1 pathway.",
    "citation": "Manning BD, Toker A. AKT/PKB Signaling: Navigating the Network. Cell. 2017;169(3):381-405. PMID: 28431241.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Multi-step molecular physiology item testing discrimination of Akt downstream targets (activation of mTORC1 vs inhibition of GSK-3beta/FOXO/BAD).",
      "distractorExclusionNotes": "Distractors represent proteins inhibited by Akt or unrelated signaling cascades.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0403",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Hematology",
    "topic": "JAK-STAT Signaling in Myeloproliferative Neoplasms",
    "subtopic": "Autophosphorylation and Dimerization Mechanics of Non-Receptor Tyrosine Kinases",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents with persistent pruritus that worsens dramatically after warm baths, intermittent headache, and painful erythema of his palms and soles (erythromelalgia). Physical examination reveals a plethoric facies and splenomegaly extending 4 cm below the left costal margin. Laboratory studies reveal a hematocrit of 62%, platelet count of 540,000/mm3, and white blood cell count of 14,200/mm3. Serum erythropoietin concentration is undetectable (< 1 mIU/mL). Bone marrow biopsy reveals trilineage panmyelosis. Genetic sequencing reveals a point mutation substituting phenylalanine for valine at position 617 within the pseudokinase regulatory domain of an intracellular non-receptor tyrosine kinase. Which of the following biochemical events directly results from this specific genetic alteration?",
    "choices": [
      [
        "Loss of autoinhibitory control leading to constitutive kinase phosphorylation and downstream STAT transcription factor dimerization",
        "The patient has polycythemia vera, a classic myeloproliferative neoplasm driven in >95% of cases by the JAK2 V617F mutation. Erythropoietin, thrombopoietin, and G-CSF signal through cytokine receptors that lack intrinsic enzymatic activity and instead rely on the Janus kinase 2 (JAK2) non-receptor tyrosine kinase. JAK2 possesses a catalytic kinase domain (JH1) and an adjacent pseudokinase regulatory domain (JH2). Under normal conditions, the JH2 pseudokinase domain exerts an AUTOINHIBITORY effect that keeps the JH1 catalytic domain quiescent in the absence of ligand binding. The V617F mutation within the JH2 domain disrupts this autoinhibition, producing constitutive, ligand-independent JAK2 tyrosine phosphorylation. Activated JAK2 then phosphorylates cytoplasmic STAT (signal transducers and activators of transcription) proteins, inducing STAT SH2-domain-mediated dimerization, nuclear translocation, and unbridled transcription of erythroid survival genes despite undetectable serum erythropoietin."
      ],
      [
        "Constitutive GTP loading on Ras resulting in continuous Raf-MEK-ERK mitogen signaling",
        "Constitutive Ras GTP-loading occurs with KRAS/NRAS mutations (loss of intrinsic GTPase activity), not JAK2 pseudokinase point mutations."
      ],
      [
        "Enhanced binding of the von Hippel-Lindau (VHL) E3 ubiquitin ligase to hypoxia-inducible factor 1-alpha",
        "VHL binds hydroxylated HIF-1alpha to target it for proteasomal degradation under normoxia; increased VHL binding would suppress erythropoiesis, not cause polycythemia."
      ],
      [
        "Impaired intrinsic GTP hydrolysis by heterotrimeric Gs-alpha subunits leading to continuous adenylyl cyclase activation",
        "Constitutive Gs-alpha activation occurs in McCune-Albright syndrome (GNAS mutation), not polycythemia vera."
      ],
      [
        "Direct transcriptional activation of the BCR-ABL1 chimeric fusion oncoprotein",
        "BCR-ABL1 is a reciprocal t(9;22) translocation product characteristic of chronic myeloid leukemia (CML), not polycythemia vera."
      ]
    ],
    "shortestValidSolution": "JAK2 V617F mutation disrupts the autoinhibitory JH2 pseudokinase domain -> constitutive phosphorylation and STAT dimerization.",
    "necessaryInference": "Link the polycythemia vera phenotype (aquagenic pruritus, erythromelalgia, panmyelosis, low EPO) to JAK2 V617F and its molecular mechanism (disruption of JH2 autoinhibition causing STAT dimerization).",
    "strongestDistractor": "Constitutive GTP loading on Ras resulting in continuous Raf-MEK-ERK mitogen signaling",
    "distractorExclusion": "Ras mutations involve small GTPases, whereas JAK2 is a non-receptor tyrosine kinase regulating STAT transcription factors.",
    "citation": "Baxter EJ, et al. Acquired mutation of the tyrosine kinase JAK2 in human myeloproliferative disorders. Lancet. 2005;365(9464):1054-1061. PMID: 15781101.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Multi-step reasoning from clinical signs (aquagenic pruritus, splenomegaly, panmyelosis, undetectable EPO) to JAK2 non-receptor kinase JH2 pseudokinase autoinhibition loss.",
      "distractorExclusionNotes": "Distractors represent classic oncogenic mechanisms (Ras, VHL, Gs, BCR-ABL) that do not match JAK2 pseudokinase kinetics.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0404",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Nitric Oxide and Cyclic GMP Signaling",
    "subtopic": "Soluble Guanylyl Cyclase and Protein Kinase G Myosin Dephosphorylation",
    "provisionalDifficulty": 4,
    "stem": "An isolated vascular smooth muscle strip is treated with acetylcholine in an organ bath containing intact vascular endothelium. The vascular ring promptly relaxes. Biochemical analysis demonstrates that acetylcholine stimulates endothelial muscarinic M3 receptors, raising intracellular calcium and activating an enzyme that synthesizes a short-lived gas from L-arginine, molecular oxygen, and NADPH. The gas diffuses across the internal elastic lamina into the adjacent vascular smooth muscle cell, binding directly to the heme prosthetic group of an intracellular enzyme. Which of the following downstream events directly accounts for the subsequent relaxation of the vascular smooth muscle cell?",
    "choices": [
      [
        "Activation of protein kinase G (PKG), which stimulates myosin light chain phosphatase and decreases cytosolic free calcium",
        "Endothelial-dependent vasodilation proceeds through the Nitric Oxide (NO)-cyclic GMP pathway: (1) Endothelial M3 receptor stimulation raises intracellular Ca2+, activating Endothelial Nitric Oxide Synthase (eNOS) to produce NO from L-arginine. (2) NO gas diffuses into vascular smooth muscle and binds to the ferrous heme moiety of SOLUBLE GUANYLYL CYCLASE (sGC), stimulating conversion of GTP to cyclic GMP (cGMP). (3) cGMP activates PROTEIN KINASE G (PKG). (4) PKG induces smooth muscle relaxation through three coordinated mechanisms: (a) activating MYOSIN LIGHT CHAIN PHOSPHATASE (MLCP), which dephosphorylates myosin light chains to prevent cross-bridge cycling; (b) phosphorylating and activating phospholamban, which stimulates the SERCA pump to sequester Ca2+ into the sarcoplasmic reticulum; and (c) closing voltage-gated L-type Ca2+ channels."
      ],
      [
        "Direct phosphorylation and activation of myosin light chain kinase (MLCK) by cyclic AMP-dependent protein kinase",
        "Activation of MLCK promotes smooth muscle contraction, not relaxation; relaxation requires MLCP activation or MLCK inhibition."
      ],
      [
        "Opening of sarcoplasmic reticulum ryanodine receptor channels with massive calcium release into the cytoplasm",
        "Ryanodine receptor opening floods the cytosol with Ca2+, stimulating Ca2+-calmodulin-dependent MLCK and inducing profound smooth muscle CONTRACTION."
      ],
      [
        "Gq-protein-mediated hydrolysis of phosphatidylinositol 4,5-bisphosphate to inositol 1,4,5-trisphosphate",
        "Gq activation and IP3 production in smooth muscle stimulates Ca2+ release and contraction; M3 on endothelium activates eNOS, but the smooth muscle response is mediated by cGMP/PKG."
      ],
      [
        "Inhibition of the plasma membrane Na+/K+-ATPase resulting in intracellular sodium accumulation",
        "Inhibiting Na+/K+-ATPase (as with cardiac glycosides) increases intracellular Na+ and Ca2+, promoting contraction, not vasodilation."
      ]
    ],
    "shortestValidSolution": "Endothelial NO activates smooth muscle soluble guanylyl cyclase -> cGMP -> PKG -> stimulates myosin light chain phosphatase (MLCP) -> relaxation.",
    "necessaryInference": "Trace the NO -> sGC -> cGMP -> PKG cascade and identify MLCP activation and Ca2+ lowering as the proximal cause of smooth muscle relaxation.",
    "strongestDistractor": "Direct phosphorylation and activation of myosin light chain kinase (MLCK) by cyclic AMP-dependent protein kinase",
    "distractorExclusion": "MLCK activation causes vasoconstriction; vasodilation requires MLCP stimulation by PKG.",
    "citation": "Francis SH, Busch JL, Corbin JD. cGMP-dependent protein kinases and cGMP phosphodiesterases in nitric oxide and cGMP signaling. Pharmacol Rev. 2010;62(3):525-563. PMID: 20716671.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Rigorous mechanism item distinguishing MLCP activation from MLCK activation in NO-mediated vasodilation.",
      "distractorExclusionNotes": "Distractors represent contractile mechanisms (MLCK, IP3, ryanodine, Na/K inhibition) that contradict relaxation.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0405",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "General Principles",
    "topic": "Intrinsic Mitochondrial vs Extrinsic Apoptosis Pathways",
    "subtopic": "Mitochondrial Outer Membrane Permeabilization and Cytochrome c Release",
    "provisionalDifficulty": 5,
    "stem": "Cultured human follicular lymphoma cells are treated with an experimental small-molecule BH3-mimetic antagonist that selectively binds with nanomolar affinity to the hydrophobic groove of the anti-apoptotic protein BCL-2. Within 6 hours of exposure, mitochondrial membrane integrity is compromised. Immunoblotting of subcellular fractions reveals a rapid shift of a 12-kDa heme-containing mitochondrial intermembrane space protein into the cytoplasm, where it binds directly to Apaf-1 in the presence of dATP to assemble a heptameric macromolecular complex. Which of the following downstream proteases is directly recruited and activated as the initiator enzyme within this apoptosome complex?",
    "choices": [
      [
        "Procaspase-9",
        "The intrinsic (mitochondrial) pathway of apoptosis is regulated by the balance between pro- and anti-apoptotic BCL-2 family proteins. BCL-2 normally sequesters pro-apoptotic effectors BAX and BAK. When a BH3-mimetic (like venetoclax) binds BCL-2, BAX and BAK are released, oligomerize, and form pores in the outer mitochondrial membrane (mitochondrial outer membrane permeabilization, MOMP). This allows CYTOCHROME C to leak from the intermembrane space into the cytosol. In the cytosol, cytochrome c binds Apoptotic protease-activating factor 1 (Apaf-1) in a dATP-dependent manner, triggering the assembly of a wheel-like heptameric 'APOPTOSOME'. The apoptosome specifically recruits and activates the initiator caspase PROCASPASE-9. Activated caspase-9 then cleaves and activates downstream executioner caspases (caspase-3 and caspase-7) to execute apoptotic cell death."
      ],
      [
        "Procaspase-8",
        "Procaspase-8 is the initiator caspase of the EXTRINSIC (death receptor) apoptosis pathway, recruited to the Death-Inducing Signaling Complex (DISC) following FasL/Fas or TNF-alpha/TNFR1 ligation via FADD, not the mitochondrial apoptosome."
      ],
      [
        "Caspase-1",
        "Caspase-1 is an inflammatory caspase recruited to the INFLAMMASOME (NLRP3) to process pro-IL-1beta and pro-IL-18 during pyroptosis, not the mitochondrial apoptosome."
      ],
      [
        "Caspase-3",
        "Caspase-3 is an EXECUTIONER caspase, not the initiator caspase; it is cleaved and activated downstream by active caspase-9."
      ],
      [
        "Granzyme B",
        "Granzyme B is an exogenous serine protease delivered into target cells by cytotoxic T lymphocytes and natural killer cells via perforin pores; it is not part of the apoptosome complex."
      ]
    ],
    "shortestValidSolution": "Cytochrome c + Apaf-1 + dATP assemble the apoptosome, which recruits and activates initiator procaspase-9.",
    "necessaryInference": "Distinguish intrinsic pathway initiator caspase-9 from extrinsic initiator caspase-8 and executioner caspase-3.",
    "strongestDistractor": "Procaspase-8",
    "distractorExclusion": "Caspase-8 is the extrinsic death-receptor initiator; caspase-9 is the intrinsic mitochondrial apoptosome initiator.",
    "citation": "Czabotar PE, Lessene G, Strasser A, Adams JM. Control of apoptosis by the BCL-2 protein family: implications for physiology and therapy. Nat Rev Mol Cell Biol. 2014;15(1):49-63. PMID: 24355989.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Multi-step apoptosis item requiring identification of the specific initiator caspase within the mitochondrial apoptosome.",
      "distractorExclusionNotes": "Distractors test precise caspase taxonomy: caspase-8 (extrinsic), caspase-1 (inflammasome), caspase-3 (executioner).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  }
]
