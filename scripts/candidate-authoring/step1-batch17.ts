import { CandidateSpec } from './types';

export const step1Batch17: CandidateSpec[] = [
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
        "Procaspase-9 zymogen",
        "The intrinsic (mitochondrial) pathway of apoptosis is regulated by the balance between pro- and anti-apoptotic BCL-2 family proteins. BCL-2 normally sequesters pro-apoptotic effectors BAX and BAK. When a BH3-mimetic (like venetoclax) binds BCL-2, BAX and BAK are released, oligomerize, and form pores in the outer mitochondrial membrane (mitochondrial outer membrane permeabilization, MOMP). This allows CYTOCHROME C to leak from the intermembrane space into the cytosol. In the cytosol, cytochrome c binds Apoptotic protease-activating factor 1 (Apaf-1) in a dATP-dependent manner, triggering the assembly of a wheel-like heptameric 'APOPTOSOME'. The apoptosome specifically recruits and activates the initiator caspase PROCASPASE-9. Activated caspase-9 then cleaves and activates downstream executioner caspases (caspase-3 and caspase-7) to execute apoptotic cell death."
      ],
      [
        "Procaspase-8 zymogen",
        "Procaspase-8 is the initiator caspase of the EXTRINSIC (death receptor) apoptosis pathway, recruited to the Death-Inducing Signaling Complex (DISC) following FasL/Fas or TNF-alpha/TNFR1 ligation via FADD, not the mitochondrial apoptosome."
      ],
      [
        "Procaspase-1 zymogen",
        "Caspase-1 is an inflammatory caspase recruited to the INFLAMMASOME (NLRP3) to process pro-IL-1beta and pro-IL-18 during pyroptosis, not the mitochondrial apoptosome."
      ],
      [
        "Procaspase-3 zymogen",
        "Caspase-3 is an EXECUTIONER caspase, not the initiator caspase; it is cleaved and activated downstream by active caspase-9."
      ],
      [
        "Granzyme B protease",
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0406",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Cell Cycle Control and Retinoblastoma Protein",
    "subtopic": "Cyclin D-CDK4/6 Phosphorylation and E2F Release",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old woman with metastatic ER-positive, HER2-negative breast cancer is initiated on palbociclib, an orally active small-molecule inhibitor of cyclin-dependent kinases 4 and 6 (CDK4/6), in combination with an aromatase inhibitor. Bone marrow suppression with severe neutropenia is observed 2 weeks after starting therapy. At the cellular level, palbociclib arrests malignant epithelial cells and hematopoietic progenitors specifically at the G1 restriction point (G1-to-S phase transition). Which of the following molecular states of the Retinoblastoma (Rb) protein is maintained as a direct consequence of this targeted drug mechanism?",
    "choices": [
      [
        "Hypophosphorylated Rb complexed with and inhibiting E2F transcription factors",
        "The G1-to-S phase transition is the critical 'restriction point' of the mammalian cell cycle. In quiescent or early G1 cells, the Retinoblastoma (Rb) tumor suppressor protein is HYPOPHOSPHORYLATED (active state). Hypophosphorylated Rb binds tightly to E2F family transcription factors, repressing their transactivation domains and recruiting histone deacetylases (HDACs) to repress genes required for DNA synthesis. Mitogenic signaling upregulates Cyclin D, which complexes with CDK4 and CDK6. Cyclin D-CDK4/6 phosphorylates Rb. Hyperphosphorylated Rb dissociates from E2F, freeing E2F to transcribe Cyclin E, Cyclin A, and DNA polymerases, driving the cell irreversibly into S phase. CDK4/6 inhibitors (e.g., palbociclib, ribociclib, abemaciclib) block Rb phosphorylation, trapping Rb in its active, hypophosphorylated state bound to E2F, arresting cells in G1."
      ],
      [
        "Hyperphosphorylated Rb dissociated from E2F transcription factors",
        "Hyperphosphorylated Rb is the inactive form produced by CDK4/6 activity that releases E2F to drive S-phase entry; CDK4/6 inhibitors prevent this phosphorylation."
      ],
      [
        "Polyubiquitinated Rb targeted for rapid 26S proteasomal degradation",
        "Rb is regulated by cyclic reversible phosphorylation, not targeted for proteasomal degradation by CDK4/6; oncoproteins like HPV E7 promote Rb degradation, not CDK inhibitors."
      ],
      [
        "Acetylated Rb localized to the nucleolus to prevent ribosomal biogenesis",
        "Rb regulates transcription of cell cycle genes at replication origins and promoters, not by nucleolar sequestration."
      ],
      [
        "Cleaved Rb fragments generated by active executioner caspase-3",
        "Caspase-mediated cleavage of Rb occurs during apoptosis, distinct from pharmacological G1 cell cycle arrest."
      ]
    ],
    "shortestValidSolution": "CDK4/6 inhibition prevents Rb phosphorylation, maintaining hypophosphorylated Rb bound to and repressing E2F at the G1 restriction point.",
    "necessaryInference": "Recognize that active hypophosphorylated Rb sequesters E2F to maintain G1 arrest, and CDK4/6 inhibitors maintain this unphosphorylated state.",
    "strongestDistractor": "Hyperphosphorylated Rb dissociated from E2F transcription factors",
    "distractorExclusion": "Hyperphosphorylation is what CDK4/6 normally does to INACTIVATE Rb; inhibiting CDK4/6 maintains hypophosphorylated Rb.",
    "citation": "Sherr CJ, Beach D, Shapiro GI. Targeting CDK4 and CDK6: From Discovery to Therapy. Cancer Discov. 2016;6(4):353-367. PMID: 26658054.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact molecular mechanism of Rb regulation and CDK4/6 inhibitor therapeutics at the G1 restriction point.",
      "distractorExclusionNotes": "Contrasts hypophosphorylated (active/repressive) vs hyperphosphorylated (inactive/dissociated) states of Rb.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0407",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "DNA Damage Response & p53 Pathway",
    "subtopic": "ATM-Chk2 Phosphorylation, p53 Stabilization, and p21 Induction",
    "provisionalDifficulty": 5,
    "stem": "Cultured human primary fibroblasts are exposed to ionizing radiation, causing extensive double-strand DNA breaks. Within minutes, the sensor kinase Ataxia-Telangiectasia Mutated (ATM) autophosphorylates and phosphorylates downstream effector kinases. A critical tumor suppressor protein undergoes phosphorylation at serine residues near its amino terminus, which sterically disrupts its interaction with an endogenous E3 ubiquitin ligase (MDM2) that normally targets it for constitutive proteasomal degradation. The resulting stabilized tumor suppressor protein accumulates in the nucleus and acts as a homotetrameric transcription factor. Which of the following genes is directly transcribed by this stabilized protein to enforce cell cycle arrest at the G1 checkpoint?",
    "choices": [
      [
        "CDKN1A (encoding p21 CIP1/WAF1)",
        "The cellular response to DNA double-strand breaks relies on the ATM-p53 signaling pathway: (1) ATM detects double-strand breaks and phosphorylates both p53 (at Ser15/Ser20) and MDM2. (2) Phosphorylation of p53 prevents MDM2 (an E3 ubiquitin ligase) from binding p53, halting its polyubiquitination and proteasomal degradation. (3) Stabilized p53 forms homotetramers, binds specific DNA response elements, and transcribes target genes. (4) The principal mediator of p53-induced G1 cell cycle arrest is CDKN1A, which encodes p21 (CIP1/WAF1). p21 is a potent cyclin-dependent kinase inhibitor (CKI) that binds to and inhibits Cyclin E-CDK2 and Cyclin D-CDK4/6 complexes, preventing Rb phosphorylation and arresting the cell in G1 to allow DNA repair. If damage is irreparable, p53 transcribes pro-apoptotic genes (BAX, PUMA, NOXA)."
      ],
      [
        "CCND1 (encoding Cyclin D1)",
        "Cyclin D1 promotes cell cycle progression; p53 suppresses cell division rather than transcribing Cyclin D1."
      ],
      [
        "BCL2 (encoding BCL-2 anti-apoptotic protein)",
        "BCL-2 is an anti-apoptotic survival protein; p53 represses BCL-2 while transcribing pro-apoptotic BAX, PUMA, and NOXA."
      ],
      [
        "MYC (encoding c-Myc oncoprotein)",
        "c-Myc is an oncogenic transcription factor that drives cellular proliferation and metabolic reprogramming, not a p53-induced checkpoint mediator."
      ],
      [
        "TERT (encoding telomerase reverse transcriptase)",
        "Telomerase reverse transcriptase maintenance is upregulated in malignancies; p53 does not transcribe TERT to enforce DNA repair arrest."
      ]
    ],
    "shortestValidSolution": "Stabilized p53 transcribes CDKN1A (p21 CIP1/WAF1), which inhibits CDK2 and CDK4/6 to induce G1 arrest for DNA repair.",
    "necessaryInference": "Identify CDKN1A (p21) as the direct p53 transcriptional target responsible for cyclin-dependent kinase inhibition and G1 arrest.",
    "strongestDistractor": "CCND1 (encoding Cyclin D1)",
    "distractorExclusion": "Cyclin D1 drives cell cycle progression, whereas p53 halts progression via p21 induction.",
    "citation": "Kastan MB, Lim DS. The many substrates and functions of ATM. Nat Rev Mol Cell Biol. 2000;1(3):179-186. PMID: 11252893.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates the DNA damage response from ATM phosphorylation of p53/MDM2 through transcription of CDKN1A (p21).",
      "distractorExclusionNotes": "Distractors represent oncogenic and proliferative genes (CCND1, MYC, BCL2, TERT) that oppose checkpoint arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0408",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Musculoskeletal",
    "topic": "Excitation-Contraction Coupling Biophysics",
    "subtopic": "Mechanical DHPR-RYR1 Coupling in Skeletal Muscle vs CICR in Myocardium",
    "provisionalDifficulty": 5,
    "stem": "An experimental neurophysiology laboratory investigates excitation-contraction coupling in isolated single skeletal muscle myofibers compared to isolated ventricular cardiomyocytes. In the first experiment, skeletal myofibers are placed in a calcium-free extracellular bathing solution containing ethylene glycol-bis(beta-aminoethyl ether)-N,N,N',N'-tetraacetic acid (EGTA). When the sarcolemma is depolarized with an electrical pulse, robust twitch tension is generated despite the complete absence of extracellular calcium. In the second experiment, ventricular cardiomyocytes exposed to the identical calcium-free EGTA bathing solution fail to generate any twitch force upon depolarization. Which of the following biophysical mechanisms explains why skeletal muscle contraction persists in the absence of extracellular calcium?",
    "choices": [
      [
        "Direct mechanical conformational coupling between the T-tubule dihydropyridine receptor and the sarcoplasmic reticulum ryanodine receptor (RYR1)",
        "Skeletal muscle and cardiac muscle utilize fundamentally different mechanisms to release calcium from the sarcoplasmic reticulum (SR): (1) In SKELETAL MUSCLE, the L-type voltage-gated calcium channel in the transverse (T) tubule (Dihydropyridine receptor, DHPR) acts primarily as a VOLTAGE SENSOR rather than a conduit for calcium influx. Depolarization induces a physical conformational change in the DHPR that mechanically pulls open the adjacent Ryanodine Receptor 1 (RYR1) in the SR terminal cisternae via direct protein-protein physical contact ('foot protein' coupling). Therefore, skeletal muscle contraction DOES NOT require extracellular calcium influx. (2) In CARDIAC MUSCLE, the DHPR and RYR2 are NOT mechanically linked; depolarization causes calcium INFLUX through the L-type channel, and this small calcium influx binds to and triggers opening of RYR2 (Calcium-Induced Calcium Release, CICR). Without extracellular calcium, cardiac CICR cannot occur and contraction ceases."
      ],
      [
        "Extracellular calcium influx through T-type voltage-gated calcium channels that directly triggers sarcoplasmic reticulum calcium release",
        "Skeletal muscle does not rely on extracellular calcium influx for contraction; EGTA chelation proved contraction is independent of external calcium."
      ],
      [
        "Constitutive activity of the sarcoplasmic/endoplasmic reticulum calcium ATPase (SERCA) pump during membrane depolarization",
        "SERCA pumps calcium from the cytosol back INTO the sarcoplasmic reticulum to mediate muscle RELAXATION, not calcium release for contraction."
      ],
      [
        "Sodium-calcium exchanger (NCX) operating in reverse mode to import calcium from the extracellular space",
        "Reverse-mode NCX occurs in myocardium under high intracellular sodium, but in a calcium-free EGTA medium, no external calcium exists to import."
      ],
      [
        "Gq-protein-coupled receptor activation with inositol 1,4,5-trisphosphate (IP3) dependent calcium release",
        "IP3-mediated calcium release operates in vascular smooth muscle and non-muscle cells, not skeletal muscle excitation-contraction coupling."
      ]
    ],
    "shortestValidSolution": "Skeletal muscle DHPR mechanically pulls open RYR1 via direct physical coupling (independent of external Ca2+), unlike cardiac Ca2+-induced Ca2+ release.",
    "necessaryInference": "Contrast the direct mechanical coupling of skeletal DHPR-RYR1 (extracellular Ca2+-independent) with cardiac CICR (extracellular Ca2+-dependent).",
    "strongestDistractor": "Sodium-calcium exchanger (NCX) operating in reverse mode to import calcium from the extracellular space",
    "distractorExclusion": "The experiment is conducted in an extracellular calcium-free EGTA solution; reverse NCX cannot import non-existent calcium.",
    "citation": "Bers DM. Cardiac excitation-contraction coupling. Nature. 2002;415(6868):198-205. PMID: 11805843.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic high-yield biophysics discrimination between skeletal mechanical coupling and cardiac CICR using experimental EGTA conditions.",
      "distractorExclusionNotes": "Eliminates extracellular calcium-dependent mechanisms (T-type, reverse NCX) based on EGTA experiment parameters.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0409",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Autophagy and Macroautophagy Mechanics",
    "subtopic": "LC3 Lipidation and Autophagosome-Lysosome Fusion",
    "provisionalDifficulty": 5,
    "stem": "Cultured hepatocytes are placed in a serum- and amino-acid-depleted starvation medium to induce macroautophagy. Intracellular nutrient-sensing cascades respond with rapid inactivation of mTORC1, allowing the ULK1/Atg1 kinase complex to initiate isolation membrane (phagophore) nucleation. During autophagosome elongation, a cytosolic microtubule-associated protein (LC3-I) undergoes enzymatic cleavage by the cysteine protease Atg4 and subsequent covalent conjugation to a lipid moiety in the phagophore membrane. This lipidated form (LC3-II) associates with both the inner and outer membranes of the expanding autophagosome to facilitate cargo recruitment and membrane closure. Which of the following lipid molecules is covalently linked to LC3-I during this essential autophagic maturation step?",
    "choices": [
      [
        "Phosphatidylethanolamine (PE)",
        "Macroautophagy is a conserved cellular recycling process triggered by nutrient starvation or cell stress. When mTORC1 is inactivated, the ULK1 kinase complex initiates phagophore nucleation. Expansion and closure of the phagophore into a double-membrane AUTOPHAGOSOME requires two ubiquitin-like conjugation systems: (1) The Atg12-Atg5-Atg16L1 complex. (2) The LC3 (Atg8) conjugation system. Cytosolic LC3 is cleaved by Atg4 to expose a C-terminal glycine residue, generating LC3-I. LC3-I is then transferred sequentially by Atg7 (E1-like enzyme) and Atg3 (E2-like enzyme) to covalently conjugate to the polar headgroup of PHOSPHATIDYLETHANOLAMINE (PE). This lipidated form, LC3-II, inserts stably into the autophagosomal membrane. LC3-II serves as the canonical biochemical marker of autophagosome abundance and functions as a dock for autophagy receptors (e.g., p62/SQSTM1) that deliver polyubiquitinated cellular cargo for lysosomal degradation."
      ],
      [
        "Phosphatidylserine (PS)",
        "Phosphatidylserine is normally restricted to the inner leaflet of the plasma membrane and flips to the outer leaflet as an 'eat-me' signal during apoptosis, not the lipid conjugated to LC3 in autophagy."
      ],
      [
        "Phosphatidylinositol 4,5-bisphosphate (PIP2)",
        "PIP2 is a plasma membrane phospholipid cleaved by PLC to yield IP3 and DAG or phosphorylated by PI3K to yield PIP3, not the lipid conjugate for LC3."
      ],
      [
        "Cardiolipin",
        "Cardiolipin is a dimeric phospholipid localized almost exclusively to the inner mitochondrial membrane that stabilizes respiratory chain complexes, not the autophagosomal LC3 conjugate."
      ],
      [
        "Sphingomyelin",
        "Sphingomyelin is a plasma membrane and myelin sheath sphingolipid enriched in lipid rafts, not involved in LC3 lipidation."
      ]
    ],
    "shortestValidSolution": "During autophagosome elongation, cytosolic LC3-I is lipidated by covalent conjugation to phosphatidylethanolamine (PE) to yield LC3-II.",
    "necessaryInference": "Identify phosphatidylethanolamine (PE) as the specific lipid moiety conjugated to LC3-I to generate membrane-bound LC3-II during autophagy.",
    "strongestDistractor": "Phosphatidylserine (PS)",
    "distractorExclusion": "Phosphatidylserine externalization is an apoptotic phagocytic signal, whereas phosphatidylethanolamine is the autophagic lipid anchor for LC3.",
    "citation": "Mizushima N, Komatsu M. Autophagy: renovation of cells and tissues. Cell. 2011;147(4):728-741. PMID: 22078875.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Advanced cell biology question testing exact lipid biochemistry of the autophagy marker LC3-I to LC3-II conversion.",
      "distractorExclusionNotes": "Distractors represent distinctive membrane lipids (cardiolipin, phosphatidylserine, PIP2, sphingomyelin) with well-defined alternative functions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0410",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Genomic Imprinting and Epigenetics",
    "subtopic": "Maternal vs Paternal Chromosome 15q11-q13 Epigenetic Regulation",
    "provisionalDifficulty": 5,
    "stem": "A 3-year-old boy is brought to the pediatric genetics clinic due to developmental delay, severe intellectual disability, paroxysms of inappropriate laughter, and an unsteady, jerky, ataxic gait. He has microcephaly and a prominent mandible, but no hyperphagia or obesity. High-resolution cytogenetic microarray demonstrates a 4-megabase interstitial microdeletion on the long arm of chromosome 15 (15q11-q13). Methylation-specific PCR of the SNRPN promoter in this chromosomal region reveals a normal paternal methylation pattern with complete absence of the maternal unmethylated allele. Which of the following genes located within this deleted region is normally expressed exclusively from the maternal allele in brain tissue and is responsible for this patient's clinical phenotype?",
    "choices": [
      [
        "UBE3A (ubiquitin-protein ligase E3A)",
        "Angelman syndrome is an imprinted neurodevelopmental disorder caused by the loss of normal maternal expression of the UBE3A gene on chromosome 15q11-q13. The UBE3A gene encodes an E3 ubiquitin ligase critical for synaptic protein degradation. Genomic imprinting in this region is tissue-specific: in most somatic tissues, UBE3A is expressed biallelically; however, in neurons of the brain, the paternal UBE3A allele is epigenetically SILENCED by an antisense transcript (UBE3A-ATS), leaving only the maternal UBE3A allele functionally active. Loss of the active maternal allele\u2014via maternal 15q11-q13 microdeletion (70%), paternal uniparental disomy (UPD 15, ~5%), imprinting defects, or point mutations in maternal UBE3A\u2014causes Angelman syndrome ('happy puppet' syndrome: ataxia, paroxysmal laughter, microcephaly, seizures, absent speech). Conversely, loss of paternal 15q11-q13 expression (SNRPN, snoRNAs, NDN) causes Prader-Willi syndrome."
      ],
      [
        "SNRPN (small nuclear ribonucleoprotein polypeptide N)",
        "SNRPN is maternally imprinted (silenced) and expressed exclusively from the PATERNAL allele; its loss contributes to Prader-Willi syndrome (hypotonia, hyperphagia, hypogonadism), not Angelman syndrome."
      ],
      [
        "MECP2 (methyl-CpG-binding protein 2)",
        "MECP2 is an X-linked gene (Xq28) mutated in Rett syndrome, which causes developmental regression in girls, not 15q11-q13 microdeletion."
      ],
      [
        "FMR1 (fragile X messenger ribonucleoprotein 1)",
        "FMR1 is an X-linked gene (Xq27.3) whose 5'-UTR CGG repeat expansion causes Fragile X syndrome, characterized by macroorchidism, long face, and large ears."
      ],
      [
        "H19 (imprinted long noncoding RNA)",
        "H19 is an imprinted lncRNA on chromosome 11p15.5 associated with Beckwith-Wiedemann and Silver-Russell syndromes, not chromosome 15."
      ]
    ],
    "shortestValidSolution": "Ataxia + laughter + intellectual disability + maternal 15q11-q13 deletion = Angelman syndrome, caused by loss of maternal neuronal expression of UBE3A.",
    "necessaryInference": "Integrate Angelman syndrome clinical features with chromosome 15 imprinting genetics, identifying UBE3A as the brain-specific maternally expressed gene.",
    "strongestDistractor": "SNRPN (small nuclear ribonucleoprotein polypeptide N)",
    "distractorExclusion": "SNRPN is paternally expressed and lost in Prader-Willi; UBE3A is maternally expressed in brain and lost in Angelman.",
    "citation": "Buiting K, et al. Angelman syndrome\u2014insights into a rare neurogenetic disorder. Nat Rev Neurol. 2016;12(10):584-593. PMID: 27615419.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests integration of syndromic phenotype (Angelman) with tissue-specific maternal imprinting of UBE3A on 15q11-q13.",
      "distractorExclusionNotes": "Distinguishes maternal UBE3A (Angelman) from paternal SNRPN (Prader-Willi) and X-linked loci (MECP2, FMR1).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0411",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Mitochondrial Genetics and Heteroplasmy",
    "subtopic": "Replicative Segregation and Variable Threshold Effects in MELAS",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old man presents to the emergency department with acute right-sided hemiparesis, aphasia, and a left temporal lobe infarction on brain MRI that does not conform to a typical vascular arterial territory. He has a history of sensorineural hearing loss, short stature, and exercise intolerance. Serum lactate is markedly elevated at 5.4 mmol/L (normal < 2.0 mmol/L). A skeletal muscle biopsy demonstrates subsarcolemmal accumulations of abnormal mitochondria on modified Gomori trichrome stain ('ragged-red fibers'). Genetic testing identifies an m.3243A>G mutation in the MT-TL1 mitochondrial gene encoding tRNALeu(UUR). Family pedigree analysis reveals that the patient's mother has mild sensorineural hearing loss and type 2 diabetes mellitus, his maternal aunt has refractory migraines and myopathy, but his maternal uncle is completely asymptomatic. Which of the following genetic principles best explains the marked variability in clinical disease severity among maternal relatives carrying this pathogenic mutation?",
    "choices": [
      [
        "Heteroplasmy with stochastic replicative segregation of mutant and wild-type mitochondrial genomes during cell division",
        "Mitochondrial DNA (mtDNA) is inherited exclusively from the mother. Each eukaryotic cell contains hundreds of mitochondria, and each mitochondrion harbors multiple circular copies of mtDNA. In mitochondrial disorders like MELAS (Mitochondrial Encephalomyopathy, Lactic Acidosis, and Stroke-like episodes), mutated and wild-type mtDNA genomes co-exist within the same cell\u2014a state termed HETEROPLASMY. During cytokinesis, mitochondria divide and segregate randomly (stochastic replicative segregation) into daughter cells. Consequently, different tissues and different individuals within the same maternal lineage receive varying proportions of mutant mtDNA. Tissues with high oxidative metabolic demands (brain, skeletal muscle, cochlea, pancreatic beta cells) are exquisitely vulnerable: clinical disease manifests only when the percentage of mutant mtDNA exceeds a critical physiological THRESHOLD, explaining the variable penetrance and phenotypic severity seen across family members."
      ],
      [
        "X-linked dominant inheritance with skewed lyonization of the maternal X chromosome",
        "mtDNA is encoded on extranuclear circular mitochondrial DNA and inherited maternally, not on the X chromosome."
      ],
      [
        "Variable trinucleotide repeat expansion with anticipation occurring preferentially through maternal transmission",
        "Trinucleotide repeats (e.g., Huntington, Fragile X) involve nuclear DNA tandem repeats, whereas MELAS is caused by a mitochondrial point mutation."
      ],
      [
        "Incomplete penetrance due to variable paternal genomic imprinting of the nuclear respiratory factor gene",
        "mtDNA is exclusively maternally inherited without paternal transmission or nuclear genomic imprinting."
      ],
      [
        "Somatic mosaicism resulting from post-zygotic mitotic non-disjunction of nuclear chromosome 16",
        "The disorder is caused by an inherited maternal mitochondrial mutation present across generations, not an acquired nuclear aneuploidy."
      ]
    ],
    "shortestValidSolution": "Variable clinical severity in mitochondrial disorders (e.g., MELAS) arises from heteroplasmy and stochastic replicative segregation exceeding tissue threshold.",
    "necessaryInference": "Identify heteroplasmy and replicative segregation as the mechanism of variable penetrance and tissue threshold effects in mitochondrial diseases.",
    "strongestDistractor": "X-linked dominant inheritance with skewed lyonization of the maternal X chromosome",
    "distractorExclusion": "Non-vascular stroke + lactic acidosis + ragged-red fibers is classic mitochondrial disease, not X-linked inactivation.",
    "citation": "Stewart JB, Chinnery PF. The dynamics of mitochondrial DNA heteroplasmy: implications for human health and disease. Nat Rev Genet. 2015;16(9):530-542. PMID: 26281784.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates MELAS syndrome findings (stroke-like episodes, lactic acidosis, ragged-red fibers) with the genetics of heteroplasmy.",
      "distractorExclusionNotes": "Contrasts mitochondrial heteroplasmy with nuclear genetic phenomena (lyonization, trinucleotide repeats, imprinting).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0412",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Nervous System",
    "topic": "Microtubule Molecular Motors and Axonal Transport",
    "subtopic": "Dynein Retrograde Transport vs Kinesin Anterograde Transport",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old spelunker is bitten on the right thumb by a wild bat in a cave. Three weeks later, he develops fever, severe hydrophobia, agitation, and copious hypersalivation. The patient subsequently lapses into a coma and dies of respiratory arrest. Histopathologic examination of hippocampal pyramidal neurons and cerebellar Purkinje cells reveals characteristic eosinophilic cytoplasmic inclusions (Negri bodies). Following initial local inoculation at the neuromuscular junction, the rhabdovirus enters peripheral nerve axon terminals and travels toward the neuronal cell body (soma) in the dorsal root ganglion and central nervous system. Which of the following molecular motor complexes directly mediates this movement along the axonal cytoskeleton?",
    "choices": [
      [
        "Cytoplasmic dynein moving toward the minus end of microtubules",
        "Axonal transport along microtubules is directed by two distinct classes of ATP-dependent molecular motor proteins: (1) CYTOPLASMIC DYNEIN mediates RETROGRADE transport\u2014movement from the axon terminal toward the neuronal cell body (soma), which corresponds to the MINUS (-) end of microtubules (anchored at the centrosome/microtubule-organizing center near the nucleus). Pathogens that utilize dynein-mediated retrograde axonal transport include Rabies virus, Clostridium tetani toxin, Poliovirus, and Herpes simplex virus (during initial sensory nerve invasion from mucosa to sensory ganglia). (2) KINESIN mediates ANTEROGRADE transport\u2014movement from the cell body toward the axon terminal, corresponding to the PLUS (+) end of microtubules (e.g., transporting synaptic vesicles, mitochondria, and reactivated HSV particles back to the skin/mucosa)."
      ],
      [
        "Kinesin-1 moving toward the plus end of microtubules",
        "Kinesin mediates ANTEROGRADE axonal transport (soma to nerve terminal, toward the plus end); moving from the bitten thumb to the spinal cord is retrograde."
      ],
      [
        "Myosin V moving along cortical actin microfilaments",
        "Myosin motors move along actin filaments for short-range local vesicle trafficking near the plasma membrane, not long-distance axonal transit over centimeters to meters."
      ],
      [
        "Clathrin heavy chain triskelions mediating fluid-phase pinocytosis",
        "Clathrin coats vesicular buds at the plasma membrane for endocytosis; it is not a motor protein that moves cargo along microtubules."
      ],
      [
        "Tubulin heterodimers polymerizing by GTP cap addition",
        "Tubulin is the structural subunit of the microtubule polymer itself, not an active mechanical motor protein."
      ]
    ],
    "shortestValidSolution": "Rabies travels retrograde from peripheral axon terminal to neuronal cell body using cytoplasmic dynein toward the microtubule minus end.",
    "necessaryInference": "Distinguish retrograde axonal transport (dynein, minus end, rabies/tetanus) from anterograde axonal transport (kinesin, plus end).",
    "strongestDistractor": "Kinesin-1 moving toward the plus end of microtubules",
    "distractorExclusion": "Kinesin drives anterograde movement (soma to terminal), whereas rabies spreads retrogradely via dynein toward the minus end.",
    "citation": "Hirokawa N, Noda Y, Tanaka Y, Niwa S. Kinesin superfamily motor proteins and intracellular transport. Nat Rev Mol Cell Biol. 2009;10(10):682-696. PMID: 19773780.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Links rabies clinical presentation to retrograde axonal transport polarity (dynein to minus end).",
      "distractorExclusionNotes": "Contrasts dynein (retrograde/minus) with kinesin (anterograde/plus) and short-range actin motors (myosin).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0413",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Telomerase Biochemistry and Cellular Senescence",
    "subtopic": "RNA-Dependent DNA Polymerase Hexanucleotide Synthesis",
    "provisionalDifficulty": 4,
    "stem": "An oncology research group studies the mechanisms that allow human glioblastoma multiforme cells to achieve replicative immortality. While normal primary human somatic fibroblasts enter irreversible replicative senescence after approximately 50 to 60 population doublings (the Hayflick limit), the glioblastoma cell line proliferates indefinitely in culture. Biochemical extraction of nuclear proteins reveals high activity of a ribonucleoprotein enzyme complex that extends the 3' overhang of linear eukaryotic chromosomes. Which of the following biochemical activities best characterizes the catalytic subunit of this enzyme complex?",
    "choices": [
      [
        "RNA-dependent DNA polymerase (reverse transcriptase) that synthesizes TTAGGG hexanucleotide tandem repeats",
        "Linear eukaryotic chromosomes cannot fully replicate the 3' ends of their lagging strands during DNA replication because removal of the terminal RNA primer leaves a gap that standard DNA polymerases cannot fill (the 'end-replication problem'). This leads to progressive telomere shortening with each cell division, culminating in senescence. Immortal cells (cancer cells, embryonic stem cells, adult germ cells) express TELOMERASE, a specialized ribonucleoprotein complex consisting of: (1) TERC (telomerase RNA component), an intrinsic RNA molecule containing the template 3'-CAAUCCCAAUC-5'; and (2) TERT (telomerase reverse transcriptase), a catalytic subunit with RNA-DEPENDENT DNA POLYMERASE activity. TERT uses the internal TERC RNA template to synthesize tandem 5'-TTAGGG-3' hexanucleotide repeats onto the 3' end of the leading strand, preserving chromosomal length and conferring cellular immortality."
      ],
      [
        "DNA-dependent RNA polymerase that transcribes non-coding ribosomal RNAs",
        "DNA-dependent RNA polymerases (Pol I, II, III) synthesize RNA from DNA templates, whereas telomerase synthesizes DNA from an RNA template (reverse transcriptase)."
      ],
      [
        "DNA topoisomerase I that relieves torsional strain by creating transient single-strand breaks",
        "Topoisomerase I relaxes supercoiled DNA ahead of replication forks by cleaving and religating single strands, not synthesizing telomeric repeats."
      ],
      [
        "Flap endonuclease 1 (FEN1) that removes displaced 5' single-stranded flaps during lagging strand synthesis",
        "FEN1 processes Okazaki fragment flaps during lagging strand replication; it does not add telomeric repeat sequences."
      ],
      [
        "Poly(A) polymerase that adds post-transcriptional adenosine residues to the 3' end of pre-mRNAs",
        "Poly(A) polymerase adds polyadenylate tails to mRNA transcripts in the nucleus without a template, not chromosomal telomere repeat synthesis."
      ]
    ],
    "shortestValidSolution": "Telomerase reverse transcriptase (TERT) is an RNA-dependent DNA polymerase that uses an internal RNA template to add TTAGGG repeats.",
    "necessaryInference": "Identify telomerase as an RNA-dependent DNA polymerase (reverse transcriptase) that synthesizes TTAGGG repeats to overcome the end-replication problem.",
    "strongestDistractor": "Poly(A) polymerase that adds post-transcriptional adenosine residues to the 3' end of pre-mRNAs",
    "distractorExclusion": "Poly(A) polymerase processes mRNA, whereas telomerase extends genomic chromosomal ends via RNA-templated reverse transcription.",
    "citation": "Shay JW, Wright WE. Telomeres and telomerase in normal and cancer cells. FEBS Lett. 2010;584(17):3819-3825. PMID: 20494633.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Directly tests enzymatic classification and hexanucleotide substrate of telomerase in cellular immortality.",
      "distractorExclusionNotes": "Distractors represent other nucleic acid processing enzymes (RNA pol, topoisomerase, FEN1, poly(A) pol).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0414",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Ubiquitin-Proteasome System Enzymology",
    "subtopic": "E3 Ubiquitin Ligase Substrate Specificity and 26S Proteasome Degradation",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man presents with a 3-month history of painless left flank fullness and microscopic hematuria. Abdominal computed tomography reveals a 6.5-cm heterogeneously enhancing solid mass in the lower pole of the left kidney, accompanied by bilateral multiple retinal angiomas and a cystic pancreatic lesion. Left radical nephrectomy confirms clear cell renal cell carcinoma. Genetic analysis confirms a germline loss-of-function mutation in the VHL tumor suppressor gene. In normoxic healthy cells, the functional VHL gene product acts as the substrate-recognition recognition subunit of a multi-protein enzyme complex that targets hypoxia-inducible factor 1-alpha (HIF-1alpha) for destruction. Which of the following enzymatic classes describes the function of the multi-protein complex of which the VHL protein is a component?",
    "choices": [
      [
        "E3 ubiquitin ligase",
        "The Ubiquitin-Proteasome System (UPS) utilizes a three-step enzymatic cascade to target proteins for degradation: (1) E1 (Ubiquitin-activating enzyme) activates ubiquitin in an ATP-dependent reaction. (2) E2 (Ubiquitin-conjugating enzyme) transfers ubiquitin from E1 to its active site cysteine. (3) E3 (UBIQUITIN LIGASE) provides the crucial SUBSTRATE SPECIFICITY. The E3 ligase binds both the E2-ubiquitin conjugate and the specific target substrate, transferring ubiquitin to lysine residues on the target protein. Sequential ubiquitination forms a polyubiquitin chain (via Lys48 linkages), which serves as a recognition signal for degradation by the 26S PROTEASOME. The von Hippel-Lindau (VHL) protein functions as the substrate-recognition subunit of an E3 cullin-RING ubiquitin ligase complex. Under normoxic conditions, proline hydroxylases hydroxylate HIF-1alpha, allowing VHL to bind HIF-1alpha and polyubiquitinate it for proteasomal destruction. Loss of VHL prevents HIF-1alpha degradation, leading to constitutive expression of VEGF, PDGF, and erythropoietin."
      ],
      [
        "E1 ubiquitin-activating enzyme",
        "E1 is a generic enzyme that activates ubiquitin using ATP; it does not confer substrate specificity and is encoded by UBA1, not VHL."
      ],
      [
        "20S catalytic core threonine protease",
        "The 20S core of the 26S proteasome contains the catalytic threonine proteases that degrade polyubiquitinated proteins; VHL tags the substrate rather than degrading it directly."
      ],
      [
        "Lysosomal acid hydrolase",
        "Lysosomal acid hydrolases degrade extracellular proteins via endocytosis or bulk organelles via autophagy, distinct from the ubiquitin-proteasome pathway."
      ],
      [
        "Deubiquitinating enzyme (DUB)",
        "DUBs remove ubiquitin from proteins to rescue them from degradation, opposing the action of E3 ligases like the VHL complex."
      ]
    ],
    "shortestValidSolution": "VHL is the substrate-recognition component of an E3 ubiquitin ligase complex that polyubiquitinates hydroxylated HIF-1alpha for 26S proteasome destruction.",
    "necessaryInference": "Identify the VHL tumor suppressor complex as an E3 ubiquitin ligase responsible for substrate-specific targeting in the ubiquitin-proteasome system.",
    "strongestDistractor": "Deubiquitinating enzyme (DUB)",
    "distractorExclusion": "VHL promotes polyubiquitination (E3 ligase), whereas DUBs remove ubiquitin chains.",
    "citation": "Kaelin WG Jr. The von Hippel-Lindau tumor suppressor protein and clear cell renal carcinoma. Clin Cancer Res. 2007;13(2 Pt 2):680s-684s. PMID: 17255293.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates von Hippel-Lindau syndrome (clear cell RCC, retinal angiomas, pancreatic cysts) with the enzymology of E3 ubiquitin ligases.",
      "distractorExclusionNotes": "Distinguishes E3 substrate ligase from E1 activating, proteasomal 20S core, and deubiquitinating enzymes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0415",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Gastrointestinal",
    "topic": "Wnt / Beta-Catenin Signaling in Colorectal Carcinogenesis",
    "subtopic": "APC Destruction Complex Disruption and Nuclear Beta-Catenin Translocation",
    "provisionalDifficulty": 5,
    "stem": "A 21-year-old man undergoes screening colonoscopy because his father died of metastatic colorectal cancer at age 38. The colonoscopy reveals greater than 1,500 adenomatous polyps carpeting the entire mucosal surface of the colon and rectum. Genetic sequencing identifies a germline nonsense mutation in the adenomatous polyposis coli (APC) gene. In normal resting colonic epithelial cells in the absence of Wnt ligand, the APC protein forms a scaffolding destruction complex with Axin, glycogen synthase kinase 3-beta (GSK-3beta), and casein kinase 1 (CK1). What is the primary biochemical consequence of loss-of-function APC mutations on this signaling cascade?",
    "choices": [
      [
        "Failure of cytoplasmic beta-catenin phosphorylation and degradation, leading to its nuclear accumulation and activation of TCF/LEF transcription factors",
        "The Wnt/beta-catenin signaling pathway controls intestinal stem cell renewal and colorectal carcinogenesis: (1) In the ABSENCE of Wnt ligand ('off' state), cytoplasmic beta-catenin is constantly sequestered by a multiprotein 'DESTRUCTION COMPLEX' composed of APC, Axin, CK1, and GSK-3beta. Within this complex, CK1 and GSK-3beta phosphorylate beta-catenin at conserved serine/threonine residues, creating a binding site for the beta-TrCP E3 ubiquitin ligase that targets beta-catenin for rapid 26S proteasomal degradation. (2) When the APC gene suffers biallelic loss-of-function mutations (as in Familial Adenomatous Polyposis, FAP), the destruction complex fails to assemble. Unphosphorylated beta-catenin escapes degradation, accumulates to high levels in the cytoplasm, and translocates into the NUCLEUS. In the nucleus, beta-catenin binds TCF/LEF (T-cell factor/lymphoid enhancer factor) transcription factors, driving constitutive transcription of oncogenic drivers including c-MYC and Cyclin D1, initiating adenoma formation."
      ],
      [
        "Excessive phosphorylation of beta-catenin by active GSK-3beta, accelerating its proteasomal destruction",
        "Loss of the APC scaffold PREVENTS GSK-3beta from phosphorylating beta-catenin; beta-catenin is stabilized, not destroyed."
      ],
      [
        "Direct transcriptional repression of the TP53 gene promoter via promoter hypermethylation",
        "APC loss acts through beta-catenin/TCF-LEF, not through direct p53 promoter methylation; p53 mutations occur late in the adenoma-carcinoma sequence."
      ],
      [
        "Inability of E-cadherin to anchor at adherens junctions, causing immediate epithelial-to-mesenchymal transition",
        "While beta-catenin also binds E-cadherin at cell junctions, the driver of polyp formation in FAP is transcriptional activation via nuclear beta-catenin/TCF, not immediate loss of cell-cell adhesion."
      ],
      [
        "Constitutive activation of KRAS GTPase activity via hyperactive son-of-sevenless (SOS) exchange",
        "KRAS mutations represent the second major step in the classic Vogelstein adenoma-carcinoma sequence, distinct from APC/beta-catenin activation."
      ]
    ],
    "shortestValidSolution": "APC loss destroys the destruction complex -> beta-catenin escapes phosphorylation/degradation -> translocates to nucleus and binds TCF/LEF to transcribe MYC/Cyclin D1.",
    "necessaryInference": "Trace the Wnt/beta-catenin destruction complex and recognize that APC loss leads to unphosphorylated beta-catenin nuclear translocation and TCF/LEF activation.",
    "strongestDistractor": "Constitutive activation of KRAS GTPase activity via hyperactive son-of-sevenless (SOS) exchange",
    "distractorExclusion": "KRAS is a separate downstream mutation in colorectal progression; APC specifically regulates beta-catenin degradation.",
    "citation": "Clevers H, Nusse R. Wnt/beta-catenin signaling and disease. Cell. 2012;149(6):1192-1205. PMID: 22682243.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates Familial Adenomatous Polyposis (FAP) clinical findings with Wnt destruction complex and beta-catenin/TCF-LEF biochemistry.",
      "distractorExclusionNotes": "Contrasts beta-catenin stabilization with other steps in the Vogelstein adenoma-to-carcinoma sequence (KRAS, p53).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0416",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Notch Signaling and Regulated Intramembrane Proteolysis",
    "subtopic": "Gamma-Secretase Cleavage and Nuclear Intracellular Domain Translocation",
    "provisionalDifficulty": 5,
    "stem": "A 16-year-old boy presents with fatigue, anterior mediastinal mass, generalized lymphadenopathy, and a peripheral leukocyte count of 94,000/mm3 consisting of 82% lymphoblasts that express CD3, CD4, CD8, and terminal deoxynucleotidyl transferase (TdT), establishing a diagnosis of T-cell acute lymphoblastic leukemia (T-ALL). Molecular cytogenetic analysis identifies an activating mutation in the NOTCH1 gene. In normal developmental hematopoiesis, ligand binding (Delta-like or Jagged) to the extracellular domain of the Notch transmembrane receptor induces sequential proteolytic cleavages. Which of the following membrane-bound proteolytic enzyme complexes performs the final intramembrane cleavage that releases the Notch intracellular domain (NICD) to translocate into the nucleus?",
    "choices": [
      [
        "Gamma-secretase complex (presenilin-dependent intramembrane protease)",
        "The Notch signaling pathway regulates binary cell-fate decisions, particularly T-cell lineage specification. The pathway functions without second messengers via regulated intramembrane proteolysis (RIP): (1) Engagement of the extracellular domain by Delta-like or Jagged ligands induces a first cleavage (S2) by an ADAM family metalloproteinase (TACE/ADAM10). (2) This exposes the membrane-proximal stalk to an essential SECOND cleavage (S3) within the hydrophobic lipid bilayer performed by the GAMMA-SECRETASE complex (a multiprotein complex containing presenilin 1/2, nicastrin, APH-1, and PEN-2). (3) Gamma-secretase intramembrane cleavage liberates the Notch Intracellular Domain (NICD). (4) NICD translocates directly into the nucleus, complexes with the CSL (RBP-Jkappa) DNA-binding transcription factor, displaces corepressors, recruits coactivators (MAML1, p300), and transcribes T-cell developmental target genes (e.g., HES1, MYC). Over 50% of human T-ALL cases harbor activating NOTCH1 mutations, making gamma-secretase inhibitors an active area of investigation."
      ],
      [
        "Beta-site amyloid precursor protein cleaving enzyme 1 (BACE1)",
        "BACE1 is a beta-secretase that performs an extracellular luminal cleavage of amyloid precursor protein (APP) in Alzheimer disease, not the intramembrane S3 cleavage of Notch."
      ],
      [
        "Granzyme B serine protease",
        "Granzyme B is delivered by cytotoxic T cells and natural killer cells to cleave procaspases and Bid, inducing apoptosis, not intramembrane receptor processing."
      ],
      [
        "Angiotensin-converting enzyme 2 (ACE2)",
        "ACE2 is an endothelial zinc carboxypeptidase that converts angiotensin II to angiotensin-(1-7); it does not perform intramembrane cleavage."
      ],
      [
        "Caspase-8 cysteine-aspartic protease",
        "Caspase-8 is an initiator caspase in the extrinsic apoptosis pathway, not an intramembrane multiprotein secretase complex."
      ]
    ],
    "shortestValidSolution": "Notch signaling final intramembrane cleavage is executed by the gamma-secretase complex (presenilin), releasing NICD to enter the nucleus.",
    "necessaryInference": "Identify gamma-secretase (presenilin complex) as the enzyme performing intramembrane cleavage of Notch to generate NICD in T-ALL pathogenesis.",
    "strongestDistractor": "Beta-site amyloid precursor protein cleaving enzyme 1 (BACE1)",
    "distractorExclusion": "BACE1 is the initial luminal beta-secretase in APP processing, whereas gamma-secretase performs intramembrane cleavage of both APP and Notch.",
    "citation": "Aster JC, Pear WS, Blacklow SC. The Varied Roles of Notch in Cancer. Annu Rev Pathol. 2017;12:245-275. PMID: 27959635.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Connects T-cell ALL mediastinal mass to NOTCH1 activating mutations and intramembrane gamma-secretase cleavage.",
      "distractorExclusionNotes": "Distinguishes gamma-secretase from beta-secretase (BACE1), apoptotic proteases (caspase-8, granzyme), and surface peptidases.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0417",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "TGF-Beta / SMAD Signaling Cascades",
    "subtopic": "Serine/Threonine Kinase Receptors and Co-SMAD4 Translocation",
    "provisionalDifficulty": 5,
    "stem": "An experimental model of progressive tissue fibrosis investigates the molecular pathways activated in hepatic stellate cells during cirrhosis development. Upon exposure to transforming growth factor-beta 1 (TGF-beta1), the ligand binds to a cell-surface Type II receptor, which recruits, transphosphorylates, and activates a Type I receptor. Unlike traditional growth factor receptors (such as EGFR or PDGFR) that possess intrinsic tyrosine kinase activity, the active cytoplasmic domains of TGF-beta receptors possess a distinct enzymatic activity that phosphorylates receptor-regulated intracellular effector proteins (R-SMADs) at a C-terminal SSXS motif. Which of the following describes the enzymatic activity of the TGF-beta receptor complex and the identity of the common-mediator protein with which phosphorylated R-SMADs must partner to enter the nucleus?",
    "choices": [
      [
        "Serine/threonine kinase activity; partners with common-mediator SMAD4 (Co-SMAD)",
        "The TGF-beta signaling superfamily (including TGF-beta, bone morphogenetic proteins [BMPs], and activin) is unique among membrane growth factor receptors because its receptors possess intrinsic SERINE/THREONINE KINASE activity, rather than tyrosine kinase activity. The signaling sequence is: (1) TGF-beta binds the Type II receptor (a constitutively active serine/threonine kinase). (2) The Type II receptor recruits and transphosphorylates the Type I receptor at its GS domain. (3) The activated Type I receptor phosphorylates Receptor-regulated SMADs (R-SMADs: SMAD2 and SMAD3 for TGF-beta; SMAD1/5/8 for BMPs) at a C-terminal SSXS serine motif. (4) Phosphorylated R-SMADs dissociate from the receptor and form a trimeric complex with the universal common-mediator SMAD: SMAD4 (Co-SMAD). (5) The R-SMAD/SMAD4 complex translocates into the nucleus, binding DNA alongside transcriptional cofactors to drive extracellular matrix collagen synthesis (fibrosis) or cell cycle inhibition (p15/p21). Inactivating mutations of SMAD4 are frequent in pancreatic and gastrointestinal carcinomas."
      ],
      [
        "Tyrosine kinase activity; partners with signal transducer and activator of transcription 3 (STAT3)",
        "TGF-beta receptors are serine/threonine kinases, not tyrosine kinases; STAT3 is activated by non-receptor tyrosine kinases (JAKs)."
      ],
      [
        "Guanosine triphosphatase (GTPase) activity; partners with the beta-arrestin adaptor complex",
        "Receptors do not possess intrinsic GTPase activity (GTPases are G-alpha or Ras proteins); beta-arrestin is an adaptor for GPCRs, not TGF-beta."
      ],
      [
        "Phospholipase activity; partners with the calcineurin protein phosphatase",
        "Phospholipase activity is exhibited by PLC, not TGF-beta receptors; calcineurin is activated by Ca2+-calmodulin to dephosphorylate NFAT."
      ],
      [
        "Histone acetyltransferase activity; partners with the E2F1 transcription factor",
        "Histone acetyltransferases (e.g., p300/CBP) are nuclear transcriptional coactivators, not cell-surface transmembrane receptors."
      ]
    ],
    "shortestValidSolution": "TGF-beta receptors have intrinsic serine/threonine kinase activity; phosphorylated R-SMADs bind common-mediator SMAD4 to enter the nucleus.",
    "necessaryInference": "Distinguish TGF-beta receptor serine/threonine kinase activity from tyrosine kinases, and identify SMAD4 as the essential common-mediator Co-SMAD.",
    "strongestDistractor": "Tyrosine kinase activity; partners with signal transducer and activator of transcription 3 (STAT3)",
    "distractorExclusion": "TGF-beta receptors are serine/threonine kinases, not tyrosine kinases; they signal through SMAD4, not STAT3.",
    "citation": "Massague J. TGFbeta signalling in context. Nat Rev Mol Cell Biol. 2012;13(10):616-630. PMID: 22992590.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Discriminates TGF-beta serine/threonine receptor enzymology and SMAD4 co-mediator mechanics from tyrosine kinase cascades.",
      "distractorExclusionNotes": "Distractors represent classic alternative receptor types (RTKs, GPCRs, phospholipases, nuclear acetyltransferases).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0418",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Dermatology",
    "topic": "Hedgehog Signaling Pathway in Basal Cell Carcinoma",
    "subtopic": "Patched-1 / Smoothened Receptor Axis and Vismodegib Pharmacology",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man presents with a slowly enlarging, non-healing ulcerated nodule on his right temple. Physical examination reveals a 1.8-cm pearly, translucent pink papule with rolled borders, central ulceration, and prominent overlying telangiectasias. Punch biopsy demonstrates nests of atypical basaloid cells extending from the epidermis into the dermis with characteristic peripheral palisading and stromal retraction artifact, confirming nodular basal cell carcinoma. Molecular analysis demonstrates biallelic loss-of-function mutations in the PTCH1 gene. Under normal physiological conditions in the absence of Sonic Hedgehog (Shh) ligand, what is the primary regulatory function of the Patched-1 (PTCH1) receptor protein?",
    "choices": [
      [
        "Constitutive tonic inhibition of the transmembrane G-protein coupled-like transducer Smoothened (SMO)",
        "The Hedgehog (Hh) signaling pathway regulates tissue patterning and stem cell maintenance, and its aberrant activation drives basal cell carcinoma (BCC): (1) In the ABSENCE of Hedgehog ligand (repressed state), the 12-transmembrane receptor PATCHED-1 (PTCH1) resides in the primary cilium and exerts CONSTITUTIVE TONIC INHIBITION on SMOOTHENED (SMO), a 7-transmembrane GPCR-like transducer. In this repressed state, GLI zinc-finger transcription factors are phosphorylated, cleaved by proteasomes into truncated repressors (GLI-R), and block target gene transcription. (2) When Sonic Hedgehog binds PTCH1 (or when PTCH1 loses function via mutation, as in sporadic BCC or Gorlin syndrome/nevoid BCC syndrome), PTCH1 is internalized, relieving its tonic inhibition on SMO. Active SMO accumulates in the primary cilium, preventing GLI repressor cleavage and allowing full-length GLI activators (GLI-A) to translocate into the nucleus, transcribing oncogenic drivers (GLI1, PTCH1, BCL2, Cyclin D). Vismodegib and sonidegib are targeted SMO antagonists that restore pathway repression in advanced BCC."
      ],
      [
        "Direct phosphorylation of GLI transcription factors to trigger their nuclear export",
        "PTCH1 does not act as a kinase to directly phosphorylate GLI; GLI is phosphorylated by cytoplasmic PKA, CK1, and GSK-3beta downstream of SMO repression."
      ],
      [
        "Covalent dimerization with the epidermal growth factor receptor to block Ras GTP loading",
        "PTCH1 does not heterodimerize with EGFR or signal through Ras; it specifically regulates Smoothened."
      ],
      [
        "Cleavage of membrane-bound Notch to generate nuclear transcription factors",
        "Intramembrane cleavage of Notch is performed by the gamma-secretase complex, unrelated to the Patched/Hedgehog pathway."
      ],
      [
        "Ubiquitination of beta-catenin in coordination with the Axin-APC scaffold",
        "Beta-catenin ubiquitination is governed by the Wnt destruction complex, distinct from the Hedgehog/Smoothened pathway."
      ]
    ],
    "shortestValidSolution": "In the absence of Hedgehog, PTCH1 tonically inhibits Smoothened (SMO); loss of PTCH1 in basal cell carcinoma relieves SMO inhibition, activating GLI transcription.",
    "necessaryInference": "Recognize that PTCH1 tonically inhibits Smoothened (SMO), and loss of PTCH1 causes uninhibited SMO activity driving basal cell carcinoma.",
    "strongestDistractor": "Direct phosphorylation of GLI transcription factors to trigger their nuclear export",
    "distractorExclusion": "PTCH1 regulates SMO at the primary cilium, not through direct enzymatic phosphorylation of GLI.",
    "citation": "Epstein EH. Basal cell carcinomas: attack of the hedgehog. Nat Rev Cancer. 2008;8(10):743-754. PMID: 18784738.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates basal cell carcinoma clinical/histopathologic features (peripheral palisading) with the PTCH1/Smoothened/GLI pathway.",
      "distractorExclusionNotes": "Distractors represent other major developmental oncogenic pathways (EGFR, Notch, Wnt/APC).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0419",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "NF-kappa-B Signaling and I-kappa-B Degradation",
    "subtopic": "IKK Phosphorylation, Ubiquitination, and Nuclear Localization Sequence Unmasking",
    "provisionalDifficulty": 5,
    "stem": "Cultured human peripheral blood macrophages are stimulated with bacterial lipopolysaccharide (LPS). LPS binds to CD14 and Toll-like receptor 4 (TLR4), initiating an intracellular signaling cascade via MyD88 and IRAK4 that activates the I-kappa-B kinase (IKK) trimeric complex. Activated IKK rapidly phosphorylates two conserved serine residues on an endogenous inhibitory chaperone protein. Phosphorylation triggers polyubiquitination and subsequent degradation of this inhibitory protein within the 26S proteasome, thereby releasing a p50/p65 heterodimeric transcription factor to expose its nuclear localization sequence (NLS) and migrate into the nucleus. Which of the following proteins serves as the specific inhibitory chaperone that undergoes phosphorylation and degradation in this pathway?",
    "choices": [
      [
        "I-kappa-B-alpha (IkappaBalpha)",
        "Nuclear factor kappa-light-chain-enhancer of activated B cells (NF-kappa-B) is the master transcriptional regulator of innate immunity, inflammation, and cell survival: (1) In resting cells, the canonical NF-kappa-B heterodimer (composed of p50 and RelA/p65 subunits) is sequestered in the cytoplasm by its physical association with an inhibitory chaperone: I-KAPPA-B-ALPHA (IkappaBalpha). IkappaBalpha sterically masks the nuclear localization sequence (NLS) of the p65 subunit, preventing nuclear entry. (2) Upon inflammatory stimulation (LPS via TLR4, TNF-alpha via TNFR1, IL-1beta via IL-1R), an upstream kinase cascade activates the I-kappa-B kinase (IKK) complex. (3) IKK phosphorylates IkappaBalpha at serines 32 and 36. (4) Phosphorylation recruits the beta-TrCP E3 ubiquitin ligase, which polyubiquitinates IkappaBalpha, targeting it for rapid degradation by the 26S proteasome. (5) Destruction of IkappaBalpha unmasks the NLS of NF-kappa-B, allowing p50/p65 to translocate into the nucleus and transcribe inflammatory cytokines (TNF, IL-1, IL-6), chemokines, adhesion molecules (ICAM-1), and anti-apoptotic genes."
      ],
      [
        "Heat shock protein 90 (HSP90)",
        "HSP90 sequesters cytoplasmic steroid hormone receptors (e.g., glucocorticoid receptor) in the absence of ligand, not the NF-kappa-B p50/p65 heterodimer."
      ],
      [
        "Calreticulin chaperone",
        "Calreticulin is an endoplasmic reticulum quality-control lectin chaperone that binds newly synthesized glycoproteins, not a cytoplasmic NF-kappa-B regulator."
      ],
      [
        "14-3-3 sigma adaptor protein",
        "14-3-3 proteins bind phosphorylated BAD or phosphorylated FOXO transcription factors in the cytoplasm, not the p50/p65 NF-kappa-B complex."
      ],
      [
        "Myeloid differentiation primary response 88 (MyD88)",
        "MyD88 is an upstream cytosolic adapter that couples TLR4 to IRAK4/TRAF6; it is not the inhibitory chaperone that masks the NF-kappa-B nuclear localization sequence."
      ]
    ],
    "shortestValidSolution": "IKK phosphorylates I-kappa-B-alpha, triggering its proteasomal degradation and unmasking the NF-kappa-B (p50/p65) nuclear localization signal.",
    "necessaryInference": "Identify I-kappa-B-alpha as the inhibitory chaperone phosphorylated by IKK and degraded by the proteasome to allow NF-kappa-B nuclear translocation.",
    "strongestDistractor": "Myeloid differentiation primary response 88 (MyD88)",
    "distractorExclusion": "MyD88 is an upstream adapter protein in the TLR cascade, whereas I-kappa-B-alpha is the direct inhibitory chaperone masking NF-kappa-B.",
    "citation": "Hayden MS, Ghosh S. Shared principles in NF-kappaB signaling. Cell. 2008;132(3):344-362. PMID: 18267068.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular immunology question testing the exact step of I-kappa-B-alpha phosphorylation and degradation in TLR4 signaling.",
      "distractorExclusionNotes": "Distractors represent related innate immune adapters (MyD88) and distinct cytoplasmic chaperones (HSP90, 14-3-3).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0420",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Ras-MAPK Pathway and Neurofibromatosis Type 1",
    "subtopic": "GTPase-Activating Protein (GAP) Function of Neurofibromin",
    "provisionalDifficulty": 5,
    "stem": "An 8-year-old boy is brought to the clinic for a routine physical examination. His mother reports that he has mild learning difficulties in school. Physical examination reveals eight smooth-bordered, light brown macules measuring 15 to 30 mm in diameter on his trunk and thighs (> 6 caf\u00e9-au-lait spots), prominent freckling in the bilateral axillary and inguinal regions (Crowe sign), and multiple raised, soft, flesh-colored subcutaneous nodules. Slit-lamp biomicroscopy reveals bilateral pigmented iris hamartomas (Lisch nodules). Genetic testing confirms a heterozygous loss-of-function mutation in the NF1 gene on chromosome 17q11.2. The normal protein product of this gene, neurofibromin, functions as a critical negative regulator of an intracellular molecular switch. Which of the following biochemical functions is directly mediated by normal neurofibromin?",
    "choices": [
      [
        "Acceleration of intrinsic GTP hydrolysis by Ras, converting active Ras-GTP into inactive Ras-GDP",
        "Neurofibromatosis type 1 (NF1, von Recklinghausen disease) is an autosomal dominant disorder caused by loss-of-function mutations in the NF1 tumor suppressor gene on chromosome 17q11.2. The NF1 gene product, NEUROFIBROMIN, contains a central domain that functions as a GTPase-ACTIVATING PROTEIN (GAP). Ras is a small membrane-anchored monomeric G-protein that alternates between an inactive GDP-bound state and an active GTP-bound state. Guanine nucleotide exchange factors (GEFs, such as SOS) activate Ras by loading GTP. Active Ras-GTP recruits Raf-1 to trigger the mitogenic MAPK (Raf-MEK-ERK) signaling cascade. Neurofibromin (Ras-GAP) terminates signaling by accelerating the intrinsically slow GTPase activity of Ras by over 100,000-fold, rapidly hydrolyzing GTP to GDP. Loss of neurofibromin leads to failure of Ras-GTP inactivation, causing unbridled Ras-MAPK signaling and predisposing to neurofibromas, optic pathway gliomas, malignant peripheral nerve sheath tumors, and pheochromocytomas."
      ],
      [
        "Guanine nucleotide exchange factor (GEF) activity that unloads GDP from Ras to facilitate GTP binding",
        "GEF activity (performed by SOS) ACTIVATES Ras by facilitating GTP loading; neurofibromin is a GAP that INACTIVATES Ras by promoting GTP hydrolysis."
      ],
      [
        "Farnesyltransferase-mediated post-translational isoprenylation of Ras to anchor it to the plasma membrane",
        "Farnesyltransferase adds a lipid moiety to anchor Ras to the inner leaflet of the plasma membrane, distinct from neurofibromin's GAP catalytic function."
      ],
      [
        "Direct dephosphorylation of MEK1/2 to terminate downstream ERK kinase activation",
        "Dephosphorylation of MAP kinases is performed by dual-specificity phosphatases (DUSPs), not neurofibromin."
      ],
      [
        "Cleavage of membrane phosphoinositides to generate inositol 1,4,5-trisphosphate and diacylglycerol",
        "Cleavage of PIP2 into IP3 and DAG is the function of phospholipase C (PLC), unrelated to neurofibromin."
      ]
    ],
    "shortestValidSolution": "Neurofibromin is a Ras-GAP that accelerates intrinsic Ras GTP hydrolysis (Ras-GTP -> Ras-GDP); NF1 loss leads to constitutive Ras-MAPK signaling.",
    "necessaryInference": "Link NF1 clinical findings (caf\u00e9-au-lait, axillary freckling, Lisch nodules, neurofibromas) to neurofibromin's Ras-GAP activity promoting GTP hydrolysis.",
    "strongestDistractor": "Guanine nucleotide exchange factor (GEF) activity that unloads GDP from Ras to facilitate GTP binding",
    "distractorExclusion": "GEFs activate Ras; neurofibromin is a GAP that terminates Ras signaling by stimulating GTPase activity.",
    "citation": "Ratner N, Miller SJ. A role for neurofibromin in NF1-associated tumors. Nat Rev Cancer. 2015;15(5):290-301. PMID: 25907221.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Connects multi-system NF1 manifestations with neurofibromin's precise biochemical identity as a GTPase-activating protein (GAP).",
      "distractorExclusionNotes": "Directly contrasts GAP activity (GTP hydrolysis accelerator) with GEF activity (GTP exchanger).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0421",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Endocrine",
    "topic": "Nuclear Receptor Superfamily Mechanics",
    "subtopic": "Type I Cytoplasmic Steroid Receptors vs Type II Nuclear Heterodimers",
    "provisionalDifficulty": 4,
    "stem": "An endocrine pharmacology laboratory compares the cellular mechanisms of action of dexamethasone (a synthetic glucocorticoid) and levothyroxine (thyroid hormone, T4/T3). In radiolabeled ligand-binding assays, unbound glucocorticoid receptors are isolated predominantly from the cytosolic subcellular fraction bound to molecular chaperone complexes containing heat shock protein 90 (HSP90). Upon ligand binding, HSP90 dissociates, allowing the receptor to homodimerize and translocate into the nucleus. In contrast, unbound thyroid hormone receptors (TRs) are isolated exclusively from the nuclear chromatin fraction even in the complete absence of thyroid hormone. Which of the following features best characterizes the inactive, unbound state of the thyroid hormone receptor within the nucleus?",
    "choices": [
      [
        "Bound to DNA as a heterodimer with the Retinoid X Receptor (RXR) complexed with corepressor proteins that actively silence target gene transcription",
        "The nuclear receptor superfamily is classified into two major structural and functional types: (1) TYPE I (Steroid receptors: glucocorticoid, mineralocorticoid, progesterone, androgen, estrogen receptors). In the absence of hormone, Type I receptors reside in the CYTOPLASM complexed with molecular chaperones (HSP90, HSP70). Ligand binding induces conformational change, chaperone dissociation, receptor homodimerization, and nuclear translocation to bind inverted palindromic hormone response elements (HREs). (2) TYPE II (Non-steroid receptors: Thyroid hormone [TR], Vitamin D [VDR], Retinoic acid [RAR], Peroxisome proliferator-activated [PPAR] receptors). Type II receptors reside CONSTITUTIVELY IN THE NUCLEUS bound to direct repeat DNA response elements as HETERODIMERS with the Retinoid X Receptor (RXR). In the absence of ligand, the TR-RXR heterodimer binds COREPRESSOR proteins (NCoR, SMRT) that recruit histone deacetylases (HDACs), actively silencing basal transcription. Ligand binding induces corepressor dissociation and coactivator recruitment (histone acetyltransferases), switching the complex to an active transcriptional activator."
      ],
      [
        "Sequestered in the nucleolus by binding to ribosomal RNA precursors until hormone-dependent export to the cytoplasm",
        "Thyroid hormone receptors do not reside in the nucleolus or export to the cytoplasm upon ligand binding; they operate directly on promoter chromatin."
      ],
      [
        "Tethered to the inner nuclear envelope by lamin A/C phosphorylation",
        "Lamin A/C provides nuclear structural support, but nuclear hormone receptors bind specific genomic DNA response elements."
      ],
      [
        "Cleaved into inactive fragments by the 20S proteasome until ubiquitin-specific ligases reassemble the active domain",
        "Receptors are not cleaved and reassembled; they exist as full-length intact transcription factor heterodimers."
      ],
      [
        "Bound to the cytoplasmic face of the rough endoplasmic reticulum adjacent to signal recognition particles",
        "Type II nuclear receptors never localize to the rough ER; they reside constitutively within the nucleus."
      ]
    ],
    "shortestValidSolution": "Type II nuclear receptors (thyroid hormone, vitamin D) reside constitutively in the nucleus as RXR heterodimers bound to corepressors, actively silencing transcription until ligand binds.",
    "necessaryInference": "Contrast Type I steroid receptors (cytoplasmic, HSP90-bound) with Type II receptors (nuclear, RXR heterodimers, corepressor-bound in the basal state).",
    "strongestDistractor": "Sequestered in the nucleolus by binding to ribosomal RNA precursors until hormone-dependent export to the cytoplasm",
    "distractorExclusion": "Type II receptors are chromatin-bound heterodimers on specific response elements, not nucleolar storage components.",
    "citation": "Mangelsdorf DJ, et al. The nuclear receptor superfamily: the second decade. Cell. 1995;83(6):835-839. PMID: 8521507.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates fundamental biophysical mechanisms of Type I vs Type II nuclear hormone receptor families.",
      "distractorExclusionNotes": "Distractors represent incorrect subcellular locations (nucleolar, ER, nuclear envelope) and implausible mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0422",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Phospholipase C and Gq Signal Transduction",
    "subtopic": "Bifurcation into Soluble IP3 and Membrane-Bound Diacylglycerol",
    "provisionalDifficulty": 4,
    "stem": "An experimental pharmacology assay studies the second-messenger cascade triggered when oxytocin binds to its G-protein-coupled receptor on human myometrial smooth muscle cells. Receptor activation leads to GTP-loading of heterotrimeric Gq-alpha subunits, which activate phospholipase C-beta (PLC-beta). PLC-beta hydrolyzes the minor plasma membrane phospholipid phosphatidylinositol 4,5-bisphosphate (PIP2) into two distinct second messengers. One messenger is a water-soluble molecule that diffuses through the cytosol to open calcium channels on the sarcoplasmic reticulum, whereas the other messenger is a hydrophobic molecule that remains embedded in the inner leaflet of the plasma membrane. Which of the following downstream enzymes is directly activated by the combined action of this membrane-bound hydrophobic messenger and elevated cytosolic calcium?",
    "choices": [
      [
        "Protein kinase C (PKC)",
        "The Gq-coupled signaling cascade bifurcates through the cleavage of PIP2 by phospholipase C (PLC): (1) INOSITOL 1,4,5-TRISPHOSPHATE (IP3): A water-soluble, hydrophilic molecule that diffuses through the cytoplasm to bind ligand-gated IP3 receptors on the sarcoplasmic/endoplasmic reticulum, triggering the release of stored Ca2+ into the cytosol. (2) DIACYLGLYCEROL (DAG): A hydrophobic molecule consisting of a glycerol backbone and two fatty acyl chains that remains anchored in the inner leaflet of the plasma membrane. DAG and the elevated cytosolic Ca2+ work synergistically to recruit and activate PROTEIN KINASE C (PKC). Activated conventional PKC isoforms phosphorylate target cellular proteins (such as caldesmon and calponin in smooth muscle) to promote contractility and cellular proliferation."
      ],
      [
        "Protein kinase A (PKA)",
        "Protein kinase A is activated by cyclic AMP (cAMP) downstream of Gs-coupled adenylyl cyclase, not by DAG and calcium."
      ],
      [
        "Protein kinase G (PKG)",
        "Protein kinase G is activated by cyclic GMP (cGMP) downstream of nitric oxide and guanylyl cyclase, not by Gq/PLC/DAG."
      ],
      [
        "Calmodulin-dependent protein kinase II (CaMKII)",
        "CaMKII is activated by the Ca2+-calmodulin complex alone; it does not bind or require the membrane-anchored lipid diacylglycerol (DAG)."
      ],
      [
        "Phospholipase A2 (PLA2)",
        "Phospholipase A2 cleaves membrane phospholipids to release arachidonic acid for eicosanoid synthesis; it is not the classic target activated by DAG."
      ]
    ],
    "shortestValidSolution": "PLC cleaves PIP2 into soluble IP3 (releases Ca2+ from SR) and membrane-bound DAG; DAG + Ca2+ directly activate Protein Kinase C (PKC).",
    "necessaryInference": "Identify diacylglycerol (DAG) as the hydrophobic membrane-bound cleavage product and Protein Kinase C as the enzyme it directly activates with Ca2+.",
    "strongestDistractor": "Calmodulin-dependent protein kinase II (CaMKII)",
    "distractorExclusion": "CaMKII requires only Ca2+-calmodulin, whereas DAG specifically binds and activates Protein Kinase C.",
    "citation": "Nishizuka Y. Intracellular signaling by hydrolysis of phospholipids and activation of protein kinase C. Science. 1992;258(5082):607-614. PMID: 1411541.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests precision understanding of the dual second messengers of the Gq pathway (IP3 vs DAG) and their specific downstream targets.",
      "distractorExclusionNotes": "Distinguishes PKC (DAG/Ca2+) from PKA (cAMP), PKG (cGMP), and CaMKII (calmodulin alone).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0423",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "General Principles",
    "topic": "Resting Membrane Potential Biophysics",
    "subtopic": "Goldman-Hodgkin-Katz Equation and Potassium Leak Permeability",
    "provisionalDifficulty": 4,
    "stem": "An intracellular glass microelectrode records the resting membrane potential of a healthy human skeletal muscle cell at -85 mV. The extracellular and intracellular concentrations of major ions are measured: \n- Extracellular Na+: 145 mEq/L, Intracellular Na+: 12 mEq/L (ENa = +67 mV)\n- Extracellular K+: 4.0 mEq/L, Intracellular K+: 140 mEq/L (EK = -95 mV)\n- Extracellular Cl-: 110 mEq/L, Intracellular Cl-: 10 mEq/L (ECl = -64 mV)\n- Extracellular Ca2+: 2.0 mEq/L, Intracellular free Ca2+: 0.0001 mEq/L (ECa = +129 mV)\n\nUnder resting conditions, which of the following biophysical properties of the plasma membrane primarily accounts for the observation that the resting membrane potential (-85 mV) is close to the potassium equilibrium potential (-95 mV) and far from the sodium equilibrium potential (+67 mV)?",
    "choices": [
      [
        "High resting membrane permeability to potassium relative to sodium through constitutively open background potassium leak channels",
        "The resting membrane potential (Vm) of excitable cells is determined by two factors: (1) the concentration gradients of ions across the membrane (maintained by the electrogenic Na+/K+-ATPase pump), and (2) the RELATIVE PERMEABILITY of the membrane to each ion, as described mathematically by the Goldman-Hodgkin-Katz (GHK) voltage equation. At rest, the membrane permeability to potassium (PK) is 25 to 100 times greater than its permeability to sodium (PNa) or other ions, primarily due to the presence of constitutively open inward-rectifying and two-pore domain (K2P) background potassium 'leak' channels. Because potassium can diffuse down its chemical gradient out of the cell much more freely than sodium can enter, Vm is driven close to the potassium equilibrium potential (EK = -95 mV). The slight difference between -85 mV and -95 mV reflects a small basal inward leak of sodium ions."
      ],
      [
        "Direct 1:1 electroneutral transport of sodium and potassium by the plasma membrane Na+/K+-ATPase",
        "The Na+/K+-ATPase is electrogenic, pumping 3 Na+ out for every 2 K+ in (a 3:2 net ratio, not 1:1), but its direct pump current contributes only ~ -3 to -5 mV; high K+ permeability drives the remaining -80 mV."
      ],
      [
        "Active extrusion of chloride ions by sodium-potassium-chloride cotransporters to maintain negative resting potential",
        "Chloride transport adjusts intracellular chloride, but the primary determinant of negative resting membrane potential is high potassium permeability."
      ],
      [
        "Continuous opening of voltage-gated sodium channels operating at subthreshold membrane voltages",
        "Voltage-gated sodium channels are predominantly closed and inactivated at -85 mV; opening them would depolarize the membrane toward +67 mV."
      ],
      [
        "Intracellular binding of all free calcium to sarcoplasmic reticulum calsequestrin molecules",
        "Calsequestrin buffers calcium inside the sarcoplasmic reticulum, but resting membrane potential across the sarcolemma is governed by surface potassium leak permeability."
      ]
    ],
    "shortestValidSolution": "High resting K+ permeability through leak channels (PK >> PNa) pulls resting membrane potential (-85 mV) close to EK (-95 mV) per the GHK equation.",
    "necessaryInference": "Apply the Goldman-Hodgkin-Katz equation to explain why resting potential reflects the equilibrium potential of the ion with highest resting permeability (K+).",
    "strongestDistractor": "Direct 1:1 electroneutral transport of sodium and potassium by the plasma membrane Na+/K+-ATPase",
    "distractorExclusion": "The Na+/K+ pump is 3:2 electrogenic (not 1:1) and contributes only ~5 mV directly; the -85 mV potential is set by high K+ leak permeability.",
    "citation": "Hodgkin AL, Katz B. The effect of sodium ions on the electrical activity of the giant axon of the squid. J Physiol. 1949;108(1):37-77. PMID: 18128231.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Foundational biophysics question testing quantitative understanding of resting potential vs Nernst equilibrium and GHK relative permeability.",
      "distractorExclusionNotes": "Debunks the common misconception that the Na+/K+ pump directly creates the -85 mV charge, proving it is high K+ permeability.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0424",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Cardiac Action Potential Phases in Ventricular Myocytes",
    "subtopic": "Phase 2 Plateau Inward L-Type Calcium vs Outward Potassium Currents",
    "provisionalDifficulty": 5,
    "stem": "An intracellular electrophysiological recording of a single ventricular cardiomyocyte displays a prolonged action potential lasting approximately 250 milliseconds with a prominent, sustained plateau phase (Phase 2). During this plateau phase, the transmembrane potential remains relatively stable near 0 mV for over 100 milliseconds before rapid repolarization begins. Which of the following combinations of transmembrane ionic currents is actively operating in balance across the sarcolemma during this sustained Phase 2 plateau?",
    "choices": [
      [
        "Inward calcium current through L-type calcium channels (Cav1.2) balanced by outward potassium current through delayed rectifier channels (IKr and IKs)",
        "The ventricular cardiac action potential (fast-response tissue) comprises 5 distinct phases: (1) Phase 0: Rapid depolarization via massive inward Na+ current (INa via Nav1.5). (2) Phase 1: Early transient repolarization via inactivation of Na+ channels and activation of transient outward K+ current (Ito). (3) Phase 2 (PLATEAU): The unique, prolonged plateau phase that prevents cardiac tetany and ensures adequate ejection time. It is characterized by an exquisite ELECTRICAL BALANCE between: INWARD Ca2+ current through voltage-gated L-type calcium channels (ICa,L via Cav1.2, activated during phase 0 and slow to inactivate) and OUTWARD K+ current through delayed rectifier potassium channels (IKr [rapid] and IKs [slow]). (4) Phase 3: Rapid repolarization as L-type Ca2+ channels close while delayed rectifier (IKr, IKs) and inward rectifier (IK1) K+ currents predominate. (5) Phase 4: Resting membrane potential maintained near -90 mV primarily by IK1."
      ],
      [
        "Inward sodium current through persistent Nav1.5 channels balanced by outward chloride current",
        "Phase 0 fast sodium channels are rapidly and completely inactivated by Phase 1; persistent sodium currents are pathological (e.g., LQT3)."
      ],
      [
        "Outward calcium current via plasma membrane Ca2+-ATPase balanced by inward sodium current through NCX",
        "L-type calcium channels flux calcium INWARD into the cytoplasm down its steep concentration gradient, not outward via ATPase during the plateau."
      ],
      [
        "Inward funny current (If) balanced by outward delayed rectifier potassium current",
        "The funny current (If, pacemaker channel HCN4) is present in Phase 4 of nodal pacemaker cells (SA/AV nodes), not Phase 2 of ventricular myocytes."
      ],
      [
        "Inward potassium current through inward rectifier channels (IK1) balanced by inward calcium current",
        "IK1 channels are closed during Phase 2 due to polyamine and Mg2+ block at depolarized potentials, opening only during Phase 3 and Phase 4."
      ]
    ],
    "shortestValidSolution": "Ventricular Phase 2 plateau is maintained by a balance between inward L-type Ca2+ current (ICa,L) and outward delayed rectifier K+ current (IKr/IKs).",
    "necessaryInference": "Identify the opposing ionic currents that maintain the Phase 2 plateau: inward Ca2+ (Cav1.2) and outward K+ (IKr/IKs).",
    "strongestDistractor": "Inward funny current (If) balanced by outward delayed rectifier potassium current",
    "distractorExclusion": "Funny current (If) operates during Phase 4 diastolic depolarization in SA/AV nodes, not Phase 2 of ventricular myocytes.",
    "citation": "Nerbonne JM, Kass RS. Molecular physiology of cardiac repolarization. Physiol Rev. 2005;85(4):1205-1253. PMID: 16183911.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests exact electrophysiological currents balancing the ventricular Phase 2 plateau (inward ICa,L vs outward IKr/IKs).",
      "distractorExclusionNotes": "Distinguishes ventricular fast-response action potentials from nodal pacemaker currents (If, T-type Ca2+).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0425",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Renal Tubular Water Transport and Aquaporins",
    "subtopic": "V2 Receptor-cAMP-PKA Induced Aquaporin-2 Apical Trafficking",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man presents with extreme thirst, polyuria, and polydipsia, consuming 8 liters of water daily. Serum sodium is 148 mEq/L, and plasma osmolality is 308 mOsm/kg. Simultaneous spot urine osmolality is dilute at 95 mOsm/kg. Following a supervised 8-hour water deprivation test, urine osmolality remains low at 110 mOsm/kg. Subcutaneous desmopressin (dDAVP) is administered. Two hours later, urine osmolality rises sharply to 640 mOsm/kg, accompanied by a dramatic reduction in urine volume. In a healthy kidney, the physiologic activation of the receptor targeted by desmopressin triggers which of the following cell-biological events in the medullary collecting duct?",
    "choices": [
      [
        "Protein kinase A (PKA) phosphorylation of aquaporin-2 (AQP2), inducing exocytic insertion of subapical storage vesicles into the luminal apical membrane",
        "The patient has central diabetes insipidus, diagnosed by dilute urine that concentrates dramatically (>50% increase) in response to desmopressin (dDAVP). Desmopressin is a synthetic analogue that selectively binds the VASOPRESSIN V2 RECEPTOR on the basolateral membrane of principal cells in the late distal convoluted tubule and collecting duct. The downstream cellular mechanism is: (1) V2 receptor couples to Gs-alpha, activating adenylyl cyclase to increase cyclic AMP (cAMP). (2) Elevated cAMP activates Protein Kinase A (PKA). (3) PKA phosphorylates specific serine residues (Ser256) on the C-terminal cytoplasmic tail of AQUAPORIN-2 (AQP2) water channels stored in intracellular subapical endosomes. (4) Phosphorylation triggers targeted exocytic translocation and fusion of these AQP2 vesicles into the LUMINAL (APICAL) plasma membrane, rendering the previously water-impermeable apical membrane permeable to water. Water enters the cell through apical AQP2 and exits into the hypertonic medullary interstitium via constitutively active basolateral AQP3 and AQP4 channels."
      ],
      [
        "Direct insertion of constitutively active aquaporin-3 and aquaporin-4 channels into the luminal apical membrane",
        "AQP3 and AQP4 are localized exclusively to the BASOLATERAL membrane and are constitutively active; AQP2 is the regulated apical water channel."
      ],
      [
        "Gq-protein-coupled activation of phospholipase C with opening of apical calcium-activated water channels",
        "V2 receptors couple to Gs-adenylyl cyclase-cAMP, not Gq/PLC; V1 receptors on vascular smooth muscle couple to Gq to mediate vasoconstriction."
      ],
      [
        "Transcriptional upregulation of urea transporter A1 (UTA1) without affecting plasma membrane water channels",
        "While vasopressin also enhances inner medullary urea permeability via UT-A1/UT-A3, the rapid water reabsorption is driven by AQP2 apical trafficking."
      ],
      [
        "Endocytosis and lysosomal degradation of apical sodium-chloride cotransporters in the collecting duct",
        "Vasopressin stimulates water reabsorption via AQP2 and sodium reabsorption via ENaC; it does not degrade cotransporters in the collecting duct."
      ]
    ],
    "shortestValidSolution": "Desmopressin binds V2 receptors -> Gs -> cAMP -> PKA phosphorylates AQP2 -> exocytic insertion of AQP2 vesicles into the apical luminal membrane.",
    "necessaryInference": "Integrate central DI diagnosis with cellular biophysics: V2-Gs-cAMP-PKA stimulates apical trafficking of phosphorylated Aquaporin-2 storage vesicles.",
    "strongestDistractor": "Direct insertion of constitutively active aquaporin-3 and aquaporin-4 channels into the luminal apical membrane",
    "distractorExclusion": "AQP3 and AQP4 are constitutively active on the basolateral membrane; AQP2 is the hormone-regulated channel inserted into the apical membrane.",
    "citation": "Nielsen S, et al. Cellular and molecular biology of aquaporins in the kidney. Physiol Rev. 2002;82(1):205-244. PMID: 11773613.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive renal physiology item tracing central DI response to desmopressin down to AQP2 vesicular trafficking and polarity.",
      "distractorExclusionNotes": "Contrasts regulated apical AQP2 with constitutive basolateral AQP3/4 and V1 (Gq) vs V2 (Gs) receptor coupling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
