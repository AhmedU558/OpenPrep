import { CandidateSpec } from './types';

export const step1Batch36: CandidateSpec[] = [
  {
    "code": "op-c-s1-0876",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Burkitt Lymphoma t(8;14) c-MYC Immunoglobulin Translocation Mechanism",
    "provisionalDifficulty": 4,
    "stem": "A 12-year-old boy presents with a rapidly enlarging right submandibular neck mass that doubled in size over 10 days. Excisional biopsy demonstrates a diffuse, monomorphic proliferation of medium-sized mature B cells with coarse chromatin, multiple nucleoli, and deeply basophilic cytoplasm containing fine lipid vacuoles. Frequent mitotic figures and apoptotic bodies are ingested by interspersed pale tingible-body macrophages, producing a classic 'starry-sky' histological appearance. Ki-67 proliferation index is nearly 100%. Cytogenetic analysis identifies a reciprocal translocation t(8;14)(q24;q32). Which of the following molecular events directly results from this translocation to drive explosive neoplastic cell growth?",
    "choices": [
      [
        "Translocation of the c-MYC proto-oncogene downstream of the constitutively active immunoglobulin heavy-chain promoter",
        "BURKITT LYMPHOMA is an aggressive mature B-cell non-Hodgkin lymphoma characterized cytogenetically by reciprocal translocations juxtaposing the c-MYC PROTO-ONCOGENE on chromosome 8q24 with an immunoglobulin gene locus: most commonly the IMMUNOGLOBULIN HEAVY-CHAIN (IgH) locus on chromosome 14q32 [t(8;14)], or less commonly kappa light chain on 2p12 [t(2;8)] or lambda light chain on 22q11 [t(8;22)]. The c-MYC gene encodes a basic helix-loop-helix leucine zipper transcription factor that heterodimerizes with MAX to drive the expression of genes required for ribosome biogenesis, protein synthesis, and G1/S cell-cycle progression (cyclin D2, CDK4, E2F). When juxtaposed with the constitutively active enhancer/promoter elements of the immunoglobulin heavy chain locus, c-MYC is constitutively overexpressed, producing an extraordinarily rapid doubling time and near-100% Ki-67 proliferation fraction."
      ],
      [
        "Juxtaposition of the BCL-2 anti-apoptotic oncogene with the immunoglobulin heavy-chain enhancer",
        "t(14;18) juxtaposes BCL-2 with IgH, which is the pathognomonic translocation of follicular lymphoma, preventing apoptosis rather than driving explosive c-MYC proliferation."
      ],
      [
        "Translocation of the CCND1 gene adjacent to the immunoglobulin locus driving cyclin D1 overproduction",
        "t(11;14) juxtaposes Cyclin D1 (CCND1) with IgH, which is the cytogenetic hallmark of mantle cell lymphoma."
      ],
      [
        "Creation of a constitutively active BCR-ABL1 chimeric fusion tyrosine kinase",
        "t(9;22) Philadelphia chromosome creates the BCR-ABL1 fusion tyrosine kinase, characteristic of chronic myelogenous leukemia and B-ALL, not Burkitt lymphoma."
      ],
      [
        "Chimeric fusion of the PML gene with the retinoic acid receptor alpha (RARA) transcription factor",
        "t(15;17) PML-RARA fusion occurs in acute promyelocytic leukemia (APL / AML M3), arresting granulocyte differentiation."
      ]
    ],
    "shortestValidSolution": "Starry-sky lymphoma + t(8;14) = Burkitt lymphoma -> c-MYC translocated downstream of constitutively active IgH promoter.",
    "necessaryInference": "Map t(8;14) to c-MYC juxtaposition with the IgH heavy-chain enhancer driving transcriptional upregulation of cell-cycle progression genes.",
    "strongestDistractor": "Juxtaposition of the BCL-2 anti-apoptotic oncogene with the immunoglobulin heavy-chain enhancer",
    "distractorExclusion": "t(14;18) juxtaposes BCL-2 with IgH in follicular lymphoma; t(8;14) involves c-MYC on chromosome 8 in Burkitt lymphoma.",
    "citation": "Hecht JL et al. Molecular biology of Burkitt's lymphoma. J Clin Oncol. PMID: 11054444.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item distinguishing Burkitt t(8;14) c-MYC from follicular t(14;18) and mantle cell t(11;14).",
      "distractorExclusionNotes": "Excluded BCL-2 (t[14;18]), Cyclin D1 (t[11;14]), and BCR-ABL1 based on c-MYC chromosome 8 translocation biology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0877",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Follicular Lymphoma t(14;18) BCL-2 Overexpression and Apoptosis Evasion",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman presents with a 6-month history of painless, 'waxing and waning' generalized lymphadenopathy. Physical examination reveals non-tender, rubbery cervical, axillary, and inguinal lymphadenopathy without hepatosplenomegaly. Excisional lymph node biopsy demonstrates complete effacement of normal nodal architecture by crowded, back-to-back neoplastic lymphoid follicles lacking defined mantle zones and lacking tingible-body macrophages. Immunohistochemistry is positive for CD19, CD20, CD10, and BCL-2. Cytogenetic analysis confirms a t(14;18)(q32;q21) translocation. Which of the following molecular mechanisms directly prevents programmed cell death in the neoplastic centrocytes and centroblasts of this tumor?",
    "choices": [
      [
        "Overexpression of BCL-2 protein on the outer mitochondrial membrane binds and sequesters pro-apoptotic BAX and BAK",
        "FOLLICULAR LYMPHOMA is the most common indolent non-Hodgkin lymphoma. It is driven by the reciprocal translocation t(14;18)(q32;q21), which juxtaposes the BCL-2 ONCOGENE on chromosome 18 with the IMMUNOGLOBULIN HEAVY-CHAIN (IgH) locus on chromosome 14. This causes constitutive overexpression of BCL-2, an anti-apoptotic protein anchored to the OUTER MITOCHONDRIAL MEMBRANE. Normally, germinal center B cells with low affinity or non-functional receptors undergo apoptosis via the intrinsic mitochondrial pathway. BCL-2 prevents apoptosis by binding and sequestering pro-apoptotic BH1-3 proteins (BAX and BAK) and BH3-only activators (BIM, PUMA). This prevents BAX/BAK homo-oligomerization, preserves mitochondrial outer membrane integrity, and blocks the release of CYTOCHROME C into the cytosol, granting immortality to follicular centrocytes and centroblasts."
      ],
      [
        "Inhibition of the 26S proteasome preventing enzymatic degradation of the tumor suppressor p53",
        "Proteasome inhibition stabilizes p53 and promotes apoptosis (the mechanism of bortezomib); follicular lymphoma evasion of apoptosis is driven by BCL-2."
      ],
      [
        "Constitutive hyperphosphorylation and inactivation of the retinoblastoma protein by cyclin D1",
        "Cyclin D1 drives G1/S progression via pRb phosphorylation in mantle cell lymphoma [t(11;14)], not apoptosis evasion in follicular lymphoma."
      ],
      [
        "Proteolytic cleavage of caspase-8 and caspase-3 by overexpressed cellular FLICE-inhibitory protein",
        "c-FLIP inhibits extrinsic death-receptor apoptosis (caspase-8); BCL-2 blocks intrinsic mitochondrial apoptosis (cytochrome c release)."
      ],
      [
        "Epigenetic hypermethylation of the PTEN promoter activating the oncogenic Akt kinase cascade",
        "While PI3K/Akt signaling promotes survival, the primary cytogenetic initiating driver of follicular lymphoma is t(14;18) BCL-2 overexpression."
      ]
    ],
    "shortestValidSolution": "Waxing/waning lymphadenopathy + crowded follicles without tingible-body macrophages + t(14;18) = Follicular lymphoma -> BCL-2 blocks BAX/BAK -> inhibits apoptosis.",
    "necessaryInference": "Map t(14;18) BCL-2 overexpression to outer mitochondrial membrane blockade of BAX/BAK and cytochrome c release.",
    "strongestDistractor": "Constitutive hyperphosphorylation and inactivation of the retinoblastoma protein by cyclin D1",
    "distractorExclusion": "Cyclin D1 regulates pRb cell cycle entry in mantle cell lymphoma; BCL-2 specifically blocks the intrinsic mitochondrial apoptosis pathway.",
    "citation": "Kridel R, Sehn LH, Gascoyne RD. Pathogenesis of follicular lymphoma. J Clin Invest. 2012;122(10):3424-3431. PMID: 23023713.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/biochemistry item on follicular lymphoma t(14;18) BCL-2 mechanics and intrinsic mitochondrial apoptosis evasion.",
      "distractorExclusionNotes": "Excluded mantle cell cyclin D1 (t[11;14]) and extrinsic caspase-8 based on outer mitochondrial BAX/BAK inhibition by BCL-2.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0878",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Mantle Cell Lymphoma t(11;14) Cyclin D1 Overexpression G1-S Progression",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man presents with progressive fatigue, generalized lymphadenopathy, and mild early satiety. Physical examination reveals generalized firm, non-tender lymphadenopathy and splenomegaly (spleen tip palpable 4 cm below the left costal margin). Colonoscopy performed for occult lower gastrointestinal bleeding reveals multiple small mucosal polyps throughout the ileocecal region and ascending colon ('multiple lymphomatous polyposis'). Biopsy of a mesenteric lymph node demonstrates a diffuse and nodular expansion of small-to-medium lymphocytes with irregular, cleaved nuclei effacing the mantle zones of lymphoid follicles. Immunohistochemical staining reveals neoplastic cells that are positive for CD19, CD20, CD5, and demonstrate intense nuclear positivity for Cyclin D1. Cytogenetic FISH analysis confirms a t(11;14)(q13;q32) translocation. Which of the following cell-cycle regulatory events directly results from this genetic abnormality?",
    "choices": [
      [
        "Hyperphosphorylation of the retinoblastoma protein (pRb) by CDK4/6, releasing E2F to drive G1 to S phase transition",
        "MANTLE CELL LYMPHOMA is an aggressive mature B-cell non-Hodgkin lymphoma characterized cytogenetically by the reciprocal translocation t(11;14)(q13;q32). This translocation juxtaposes the CCND1 GENE on chromosome 11q13 (encoding CYCLIN D1) with the IMMUNOGLOBULIN HEAVY-CHAIN (IgH) enhancer on chromosome 14q32, resulting in constitutive overexpression of Cyclin D1. In normal cells, Cyclin D1 is synthesized in response to mitogenic growth factors and forms active holoenzyme complexes with CYCLIN-DEPENDENT KINASES 4 AND 6 (CDK4/6). The active Cyclin D1-CDK4/6 complex HYPERPHOSPHORYLATES THE RETINOBLASTOMA PROTEIN (pRb). In its hypophosphorylated state, pRb sequesters the E2F transcription factor; phosphorylation releases E2F, which enters the nucleus to drive the transcription of genes required for DNA replication, forcing premature TRANSITION FROM G1 TO S PHASE."
      ],
      [
        "Allosteric activation of ATM kinase stimulating p53 phosphorylation and G2/M arrest",
        "ATM activates p53 to cause cell cycle arrest in response to DNA double-strand breaks; Cyclin D1 overexpression overrides checkpoints and forces proliferation."
      ],
      [
        "Direct degradation of anti-apoptotic BCL-2 via E3 ubiquitin ligase recruitment",
        "Degradation of BCL-2 would trigger apoptosis; mantle cell lymphoma cells avoid apoptosis and express high Cyclin D1 to drive proliferation."
      ],
      [
        "Competitive displacement of p27 (Kip1) from cyclin B1-CDK1 mitosis complexes",
        "p27 inhibits G1 cyclin-CDK complexes; the primary action of overexpressed Cyclin D1 is sequestering p27 and hyperphosphorylating pRb via CDK4/6."
      ],
      [
        "Inhibition of anaphase-promoting complex (APC/C) preventing sister chromatid separation",
        "APC/C regulates the metaphase-to-anaphase transition during mitosis, whereas Cyclin D1 acts exclusively at the G1/S boundary."
      ]
    ],
    "shortestValidSolution": "Multiple lymphomatous polyposis + CD5+ B-cells + Cyclin D1 nuclear stain + t(11;14) = Mantle cell lymphoma -> CDK4/6 phosphorylates pRb -> G1/S transition.",
    "necessaryInference": "Map t(11;14) Cyclin D1 overexpression to CDK4/6 hyperphosphorylation of pRb and release of E2F transcription factors.",
    "strongestDistractor": "Juxtaposition of the BCL-2 anti-apoptotic oncogene with the immunoglobulin heavy-chain enhancer",
    "distractorExclusion": "t(14;18) BCL-2 occurs in follicular lymphoma; mantle cell lymphoma is characterized by t(11;14) Cyclin D1 hyperphosphorylating pRb.",
    "citation": "Sureda-Gómez M et al. SOX11 expression is restricted to EBV-negative Burkitt lymphoma and is associated with molecular genetic features. Blood. PMID: 38620074.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/cell biology item on mantle cell lymphoma t(11;14), Cyclin D1-CDK4/6 signaling, and pRb phosphorylation.",
      "distractorExclusionNotes": "Excluded follicular lymphoma BCL-2 and G2/M mitosis regulators based on classic G1/S restriction point regulation by Cyclin D1.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0879",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Chronic Myelogenous Leukemia t(9;22) BCR-ABL1 Constitutive Tyrosine Kinase",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man presents with progressive fatigue, night sweats, early satiety, and a dragging sensation in his left upper quadrant. Physical examination reveals massive splenomegaly extending 8 cm below the left costal margin. Complete blood count reveals: hemoglobin 10.4 g/dL, platelet count 520,000/uL, and white blood cell count markedly elevated at 142,000/uL. Peripheral blood smear demonstrates the full spectrum of granulocytic differentiation, including myeloblasts (2%), promyelocytes, myelocytes, metamyelocytes, band forms, and mature segmented neutrophils, along with absolute basophilia (6%) and eosinophilia. Leukocyte alkaline phosphatase (LAP) score is strikingly low at 8 (normal 20-100). Cytogenetic analysis of bone marrow aspirate reveals the Philadelphia chromosome, t(9;22)(q34;q11). Which of the following molecular alterations directly accounts for the malignant clonal granulocytic expansion in this patient?",
    "choices": [
      [
        "Fusion of BCR with ABL1 creates an oligomerized chimeric oncoprotein with constitutive, ligand-independent tyrosine kinase activity",
        "CHRONIC MYELOGENOUS LEUKEMIA (CML) is a myeloproliferative neoplasm driven by the PHILADELPHIA CHROMOSOME, a reciprocal translocation t(9;22)(q34;q11). This translocation fuses the ABL1 proto-oncogene (a non-receptor tyrosine kinase on chromosome 9q34) with the BCR gene (breakpoint cluster region on chromosome 22q11). The resulting BCR-ABL1 CHIMERIC FUSION GENE encodes an oncoprotein (most commonly p210 BCR-ABL1) in which the N-terminal coiled-coil oligomerization domain of BCR induces spontaneous, CONSTITUTIVE, LIGAND-INDEPENDENT TYROSINE KINASE ACTIVITY of the ABL1 catalytic domain. This continuously auto-phosphorylates and activates downstream signaling cascades, including RAS-MAPK (driving proliferation), PI3K-AKT (driving anti-apoptotic survival), and STAT5. The low LAP score reflects the neoplastic, biochemically immature nature of the granulocytes, distinguishing CML from a leukemoid reaction (where LAP is high)."
      ],
      [
        "Acquired point mutation (V617F) in the pseudokinase domain of Janus kinase 2 abolishing autoregulatory inhibition",
        "JAK2 V617F is the driver mutation in polycythemia vera, essential thrombocythemia, and primary myelofibrosis, not CML (which is defined by BCR-ABL1)."
      ],
      [
        "Constitutive activation of FMS-like tyrosine kinase 3 (FLT3) by internal tandem duplications in the juxtamembrane domain",
        "FLT3-ITD mutations occur in acute myeloid leukemia (AML), conferring a high risk of relapse, not chronic myelogenous leukemia."
      ],
      [
        "Gain-of-function mutation in the colony-stimulating factor 3 receptor (CSF3R) driving selective neutrophil maturation",
        "CSF3R mutations are characteristic of chronic neutrophilic leukemia (CNL), which has high LAP scores and lacks the Philadelphia chromosome."
      ],
      [
        "Loss-of-function mutation in calreticulin (CALR) exon 9 generating an altered C-terminal acidic peptide sequence",
        "CALR mutations occur in JAK2-negative essential thrombocythemia and primary myelofibrosis, not in CML."
      ]
    ],
    "shortestValidSolution": "Massive splenomegaly + full granulocyte spectrum + basophilia + LOW LAP score + t(9;22) = CML (BCR-ABL1 constitutive tyrosine kinase).",
    "necessaryInference": "Map t(9;22) to BCR-ABL1 coiled-coil oligomerization and constitutive, ligand-independent tyrosine kinase activation.",
    "strongestDistractor": "Acquired point mutation (V617F) in the pseudokinase domain of Janus kinase 2 abolishing autoregulatory inhibition",
    "distractorExclusion": "JAK2 V617F drives PV, ET, and myelofibrosis; CML is exclusively defined by the t(9;22) Philadelphia chromosome creating BCR-ABL1.",
    "citation": "Druker BJ, Sawyers CL, Kantarjian H, et al. Activity of a specific inhibitor of the BCR-ABL tyrosine kinase in the blast crisis of chronic myeloid leukemia and acute lymphoblastic leukemia with the Philadelphia chromosome. N Engl J Med. 2001;344(14):1038-1042. PMID: 11287973.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 hematology/pathology item on CML, low LAP score differentiation, and BCR-ABL1 chimeric tyrosine kinase oncogenesis.",
      "distractorExclusionNotes": "Excluded JAK2 V617F, FLT3-ITD, and CALR based on Philadelphia chromosome t(9;22) tyrosine kinase mechanics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0880",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Acute Promyelocytic Leukemia t(15;17) PML-RARA Differentiation Arrest",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old previously healthy woman presents with gum bleeding, epistaxis, extensive spontaneous ecchymoses, and petechiae. Complete blood count reveals: hemoglobin 7.2 g/dL, platelet count 16,000/uL, and white blood cell count 4,800/uL. Coagulation studies demonstrate acute disseminated intravascular coagulation (DIC): prothrombin time 22 seconds, fibrinogen profoundly low at 70 mg/dL (normal 200-400 mg/dL), and D-dimer markedly elevated at 18 ug/mL. Peripheral blood smear and bone marrow aspirate reveal sheets of abnormal, hypergranular promyelocytes containing numerous reddish needle-like cytoplasmic inclusions arranged in bundles ('faggot cells' / Auer rods). Cytogenetic analysis confirms a t(15;17)(q24;q21) reciprocal translocation. Which of the following molecular mechanisms accounts for the differentiation arrest in this acute leukemia and explains its sensitivity to all-trans retinoic acid (ATRA)?",
    "choices": [
      [
        "PML-RARA chimeric fusion protein recruits histone deacetylases (HDACs) with abnormally high affinity, repressing myeloid transcription",
        "ACUTE PROMYELOCYTIC LEUKEMIA (APL / AML M3) is defined cytogenetically by the reciprocal translocation t(15;17)(q24;q21), which fuses the PROMYELOCYTIC LEUKEMIA (PML) gene on chromosome 15 with the RETINOIC ACID RECEPTOR ALPHA (RARA) gene on chromosome 17. Normal RARA binds retinoic acid responsive elements (RAREs) in promoter regions of genes required for granulocytic differentiation. At physiological concentrations of retinoic acid, RARA releases corepressors and recruits coactivators to drive promyelocyte maturation into mature granulocytes. The mutant PML-RARA FUSION PROTEIN forms homodimers that bind corepressors and HISTONE DEACETYLASES (HDACs) with ABNORMALLY HIGH AFFINITY, creating a constitutive repressive complex that permanently silences differentiation genes at physiological retinoic acid levels, ARRESTING CELLS AT THE PROMYELOCYTE STAGE. Pharmacological doses of ALL-TRANS RETINOIC ACID (ATRA) force PML-RARA to dissociate from HDACs and undergo proteasomal degradation, relieving transcriptional repression and inducing terminal differentiation into mature neutrophils."
      ],
      [
        "Constitutive autophosphorylation of the c-KIT receptor tyrosine kinase driving uninhibited stem cell proliferation",
        "c-KIT mutations occur in systemic mastocytosis and core-binding factor AML, not t(15;17) promyelocytic leukemia."
      ],
      [
        "Loss-of-function mutation in isocitrate dehydrogenase 1 (IDH1) producing the oncometabolite 2-hydroxyglutarate",
        "IDH1/2 mutations produce 2-hydroxyglutarate in subset AML and gliomas; they do not mediate the t(15;17) translocation or ATRA responsiveness."
      ],
      [
        "Fusion of the ETO gene to RUNX1 disrupting core-binding factor transcriptional regulation",
        "t(8;21) fuses RUNX1-ETO (core-binding factor AML), which is not associated with hypergranular promyelocytes, faggot cells, or ATRA differentiation therapy."
      ],
      [
        "Inversion of chromosome 16 creating a CBFB-MYH11 fusion that alters smooth muscle myosin heavy chain assembly",
        "inv(16) creates CBFB-MYH11, characteristic of acute myelomonocytic leukemia with abnormal bone marrow eosinophils (AML M4eo), not APL."
      ]
    ],
    "shortestValidSolution": "DIC + promyelocytes with Auer rod bundles ('faggot cells') + t(15;17) = APL (PML-RARA fusion recruits HDACs -> blocks differentiation; treated with ATRA).",
    "necessaryInference": "Map t(15;17) PML-RARA fusion to high-affinity HDAC corepressor recruitment that blocks granulocytic differentiation until overcome by ATRA.",
    "strongestDistractor": "Fusion of the ETO gene to RUNX1 disrupting core-binding factor transcriptional regulation",
    "distractorExclusion": "t(8;21) RUNX1-ETO is core-binding factor AML; APL is exclusively driven by t(15;17) PML-RARA and exhibits unique sensitivity to ATRA.",
    "citation": "Ablain J et al. Revisiting the differentiation paradigm in acute promyelocytic leukemia. Blood. PMID: 21444912.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/pharmacology item on acute promyelocytic leukemia t(15;17), HDAC corepressor biology, and ATRA differentiation mechanics.",
      "distractorExclusionNotes": "Excluded core-binding factor AML (t[8;21], inv[16]) and IDH mutations based on PML-RARA and faggot cell morphology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0881",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Ewing Sarcoma t(11;22) EWSR1-FLI1 Oncogenic Transcription Factor",
    "provisionalDifficulty": 4,
    "stem": "A 13-year-old boy presents with progressive left thigh pain and localized swelling that worsens at night. Physical examination reveals a warm, tender, firm mass over the mid-diaphysis of the left femur. Radiographs demonstrate a destructive, permeative lytic lesion in the femoral diaphysis with extensive lamellated, concentric 'onion-skin' periosteal reaction. Biopsy of the lesion reveals uniform, small, round blue cells with high nuclear-to-cytoplasmic ratios, round nuclei with fine chromatin, and clear cytoplasm rich in glycogen (positive on PAS stain). Immunohistochemistry is diffusely and intensely positive for CD99 (MIC2). Cytogenetic analysis reveals a t(11;22)(q24;q12) chromosomal translocation. Which of the following functional oncoproteins is generated by this translocation?",
    "choices": [
      [
        "Chimeric transcription factor combining the EWSR1 transactivation domain with the FLI1 DNA-binding domain",
        "EWING SARCOMA is the second most common malignant primary bone tumor in children and adolescents. It is defined cytogenetically by reciprocal translocations involving the EWSR1 gene on chromosome 22q12 with an ETS-family transcription factor, most commonly FLI1 on chromosome 11q24 [t(11;22)(q24;q12), ~85% of cases], or ERG on 21q22 [t(21;22)]. The resulting EWSR1-FLI1 FUSION GENE encodes an abnormal, chimeric ONCOGENIC TRANSCRIPTION FACTOR that combines the potent, disordered N-terminal transactivation domain of EWSR1 with the sequence-specific C-terminal ETS DNA-binding domain of FLI1. This aberrant transcription factor binds specific GGAA microsatellite repeat enhancers throughout the genome, constitutively dysregulating target gene expression, driving chromatin remodeling, blocking neural/mesenchymal differentiation, and promoting malignant transformation of small round blue cells expressing membrane CD99."
      ],
      [
        "Constitutively active receptor tyrosine kinase formed by fusion of ALK with nucleophosmin",
        "t(2;5) NPM-ALK fusion tyrosine kinase occurs in anaplastic large cell lymphoma (ALCL), not Ewing sarcoma."
      ],
      [
        "Chimeric transcription factor formed by fusion of PAX3 with the FOXO1 transactivation domain",
        "t(2;13) PAX3-FOXO1 fusion occurs in alveolar rhabdomyosarcoma, a soft tissue tumor positive for desmin and myogenin."
      ],
      [
        "Fusion oncoprotein joining SS18 with SSX disrupting epigenetic chromatin-remodeling BAF complexes",
        "t(X;18) SS18-SSX fusion occurs in synovial sarcoma, a soft tissue sarcoma typically presenting near large joints in young adults."
      ],
      [
        "Constitutive non-receptor tyrosine kinase formed by fusion of ETV6 with neurotrophic receptor tyrosine kinase 3",
        "ETV6-NTRK3 fusion occurs in infantile fibrosarcoma, congenital mesoblastic nephroma, and secretory breast carcinoma, not Ewing sarcoma."
      ]
    ],
    "shortestValidSolution": "Diaphyseal bone tumor + onion-skin periosteal reaction + small round blue cells (CD99+) + t(11;22) = Ewing sarcoma (EWSR1-FLI1 chimeric transcription factor).",
    "necessaryInference": "Map t(11;22) to the EWSR1-FLI1 chimeric transcription factor that dysregulates ETS-dependent gene expression.",
    "strongestDistractor": "Chimeric transcription factor formed by fusion of PAX3 with the FOXO1 transactivation domain",
    "distractorExclusion": "PAX3-FOXO1 occurs in alveolar rhabdomyosarcoma [t(2;13)]; Ewing sarcoma is characterized by EWSR1-FLI1 [t(11;22)].",
    "citation": "Figuerola-Bou E et al. KDM6 Demethylases Contribute to EWSR1::FLI1-Driven Oncogenic Reprogramming in Ewing Sarcoma. Cancer Res. PMID: 41085408.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 musculoskeletal pathology item on Ewing sarcoma t(11;22) EWSR1-FLI1 chimeric transcription factor oncogenesis.",
      "distractorExclusionNotes": "Excluded PAX3-FOXO1 (rhabdomyosarcoma), SS18-SSX (synovial sarcoma), and ALK based on CD99+ diaphyseal bone tumor genetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0882",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Synovial Sarcoma t(X;18) SS18-SSX Fusion Epigenetic Chromatin Remodeling",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man presents with a deep-seated, slowly enlarging, painful mass in the popliteal fossa of his left knee. MRI demonstrates a well-circumscribed, multilobular, heterogeneous soft-tissue mass adjacent to the joint capsule measuring 6 cm. Histopathological examination demonstrates a classic biphasic growth pattern composed of uniform spindle cells arranged in dense fascicles intermingled with gland-like epithelial structures containing mucinous secretions. Immunohistochemical staining is positive for cytokeratin, epithelial membrane antigen (EMA), and TLE1. Cytogenetic FISH testing reveals a pathognomonic reciprocal translocation t(X;18)(p11.2;q11.2). Which of the following molecular mechanisms accounts for oncogenesis driven by this translocation?",
    "choices": [
      [
        "SS18-SSX fusion protein incorporates into SWI/SNF (BAF) chromatin-remodeling complexes, ejecting BAF47 and altering histone methylation",
        "SYNOVIAL SARCOMA is a distinctive malignant soft-tissue sarcoma that typically arises in the para-articular deep soft tissues of the extremities in young adults. Despite its historical name, it DOES NOT arise from synoviocytes. It is defined by the pathognomonic reciprocal translocation t(X;18)(p11.2;q11.2), which fuses the SS18 (SYT) gene on chromosome 18 with one of the SSX genes (SSX1, SSX2, or SSX4) on chromosome X. Normal SS18 is a core subunit of the mammalian SWI/SNF (BAF) ATP-DEPENDENT CHROMATIN-REMODELING COMPLEX. The mutant SS18-SSX fusion protein integrates into the BAF complex, which triggers EJECTION AND PROTEASOMAL DEGRADATION OF THE TUMOR SUPPRESSOR BAF47 (SMARCB1/INI1). The altered oncogenic BAF complex retargets genome-wide, directly evicting Polycomb repressive complex 2 (PRC2) from bivalent developmental promoters and driving widespread aberrant transcriptional activation and epigenetic reprogramming."
      ],
      [
        "Direct point mutational activation of the GTPase catalytic pocket of the KRAS proto-oncogene",
        "KRAS mutations occur in pancreatic, colorectal, and lung adenocarcinomas, not in translocation-associated synovial sarcomas."
      ],
      [
        "Constitutive dimerization of platelet-derived growth factor receptor alpha (PDGFRA) in cell membranes",
        "PDGFRA mutations occur in gastrointestinal stromal tumors (GIST), which are KIT/CD117 positive, not synovial sarcoma."
      ],
      [
        "Inactivation of the von Hippel-Lindau (VHL) E3 ubiquitin ligase preventing degradation of hypoxia-inducible factors",
        "VHL inactivation drives clear cell renal cell carcinoma and hemangioblastomas, not soft-tissue synovial sarcomas."
      ],
      [
        "Amplification of MDM2 oncogene on chromosome 12q leading to constitutive degradation of the p53 protein",
        "MDM2 amplification is the hallmark of well-differentiated and dedifferentiated liposarcoma, not synovial sarcoma."
      ]
    ],
    "shortestValidSolution": "Popliteal mass + biphasic spindle/glandular + TLE1+ + t(X;18) = Synovial sarcoma (SS18-SSX fusion dysregulates SWI/SNF [BAF] chromatin complexes).",
    "necessaryInference": "Identify t(X;18) as the cytogenetic hallmark of synovial sarcoma and pair it with SS18-SSX epigenetic chromatin remodeling.",
    "strongestDistractor": "Amplification of MDM2 oncogene on chromosome 12q leading to constitutive degradation of the p53 protein",
    "distractorExclusion": "MDM2 amplification defines liposarcomas; synovial sarcoma is defined by the reciprocal translocation t(X;18) creating SS18-SSX.",
    "citation": "Kadoch C, Crabtree GR. Reversible disruption of mSWI/SNF (BAF) complexes by the SS18-SSX oncogenic fusion in synovial sarcoma. Cell. 2013;153(1):71-85. PMID: 23540691.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/epigenetics item on synovial sarcoma t(X;18), TLE1 positivity, and SWI/SNF (BAF) complex disruption.",
      "distractorExclusionNotes": "Excluded MDM2 (liposarcoma) and GIST PDGFRA based on biphasic spindle/epithelial histology and t(X;18) translocation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0883",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Musculoskeletal",
    "topic": "Alveolar Rhabdomyosarcoma t(2;13) PAX3-FOXO1 Chimeric Transcription Factor",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old girl presents with a rapidly growing, firm, painless mass in the deep soft tissue of her right forearm. Biopsy of the mass reveals nests and clusters of small, round, discohesive malignant cells that adhere to fibrous septa while detaching in the center of the spaces, creating an architectural pattern that closely mimics pulmonary alveoli ('alveolar pattern'). Immunohistochemical staining is strongly and diffusely positive for desmin, myogenin (myf4), and MyoD1. Cytogenetic analysis identifies a reciprocal translocation t(2;13)(q35;q14). Which of the following chimeric fusion oncoproteins is generated by this translocation to drive myogenic differentiation arrest and aggressive malignancy?",
    "choices": [
      [
        "PAX3-FOXO1 chimeric transcription factor with enhanced transactivation potency",
        "RHABDOMYOSARCOMA is the most common soft-tissue sarcoma of childhood. ALVEOLAR RHABDOMYOSARCOMA is a particularly aggressive subtype defined by the reciprocal translocation t(2;13)(q35;q14) [~75% of cases], or less commonly t(1;13)(p36;q14) [~10%]. In t(2;13), the DNA-binding domain of the developmental paired-box transcription factor PAX3 on chromosome 2q35 is fused to the C-terminal transactivation domain of the forkhead transcription factor FOXO1 (FKHR) on chromosome 13q14. The resulting PAX3-FOXO1 FUSION ONCOPROTEIN acts as an abnormally potent, chimeric transcription factor that binds PAX3 target sites with 10- to 100-fold higher transcriptional activation potency than wild-type PAX3. This dysregulates myogenic master genes, prevents terminal differentiation of myoblasts into skeletal muscle fibers, and drives invasive growth of desmin/myogenin-positive cells."
      ],
      [
        "EWSR1-FLI1 fusion oncoprotein binding GGAA repetitive microsatellite enhancers",
        "EWSR1-FLI1 [t(11;22)] defines Ewing sarcoma (CD99 positive), which does not express skeletal muscle markers (desmin, myogenin, MyoD1)."
      ],
      [
        "SS18-SSX1 fusion protein disrupting chromatin-remodeling BAF complexes",
        "SS18-SSX [t(X;18)] defines synovial sarcoma (TLE1 and cytokeratin positive), not rhabdomyosarcoma."
      ],
      [
        "ETV6-RUNX1 chimeric fusion protein causing transcriptional repression in pre-B cells",
        "ETV6-RUNX1 (TEL-AML1) [t(12;21)] is the most common genetic lesion in pediatric B-cell acute lymphoblastic leukemia (B-ALL)."
      ],
      [
        "COL1A1-PDGFB fusion oncoprotein driving autocrine growth factor stimulation",
        "COL1A1-PDGFB [t(17;22)] defines dermatofibrosarcoma protuberans (DFSP), a low-grade cutaneous spindle-cell tumor, not rhabdomyosarcoma."
      ]
    ],
    "shortestValidSolution": "Deep muscle mass + alveolar architectural pattern + desmin/myogenin+ + t(2;13) = Alveolar rhabdomyosarcoma (PAX3-FOXO1 chimeric transcription factor).",
    "necessaryInference": "Map t(2;13) and myogenic markers (desmin, myogenin) to the PAX3-FOXO1 fusion oncoprotein of alveolar rhabdomyosarcoma.",
    "strongestDistractor": "EWSR1-FLI1 fusion oncoprotein binding GGAA repetitive microsatellite enhancers",
    "distractorExclusion": "EWSR1-FLI1 occurs in Ewing sarcoma (CD99+); rhabdomyosarcoma is myogenic (desmin/myogenin+) and driven by PAX3-FOXO1 [t(2;13)].",
    "citation": "Martin-Giacalone BA et al. Germline Genetic Testing and Survival Outcomes Among Children With Rhabdomyosarcoma: A Report From the Children's Oncology Group. JAMA Netw Open. PMID: 38546643.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on alveolar rhabdomyosarcoma t(2;13), PAX3-FOXO1 fusion oncoprotein, and myogenic immunohistochemistry.",
      "distractorExclusionNotes": "Excluded Ewing sarcoma (EWSR1-FLI1) and synovial sarcoma (SS18-SSX) based on desmin/myogenin positivity and alveolar histology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0884",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Neuroblastoma MYCN Gene Amplification and Extrachromosomal Double Minutes",
    "provisionalDifficulty": 4,
    "stem": "An 18-month-old male infant presents with abdominal distension, an irregular, firm retroperitoneal mass crossing the midline, peri-orbital ecchymoses ('raccoon eyes'), and rapid, erratic conjugate eye movements accompanied by myoclonic jerks of the extremities (opsoclonus-myoclonus ataxia syndrome). 24-hour urine collection reveals marked elevations in homovanillic acid (HVA) and vanillylmandelic acid (VMA). Biopsy of the adrenal mass reveals sheets of primitive neuroblasts forming Homer Wright pseudorosettes. Metaphase cytogenetics and FISH analysis of the tumor cells demonstrate massive copy-number expansion of the MYCN oncogene on chromosome 2p24, appearing both as extrachromosomal paired chromatin fragments ('double minute chromosomes') and as large, non-banding regions within chromosomes ('homogeneously staining regions' / HSRs). Which of the following mutational mechanisms is responsible for the formation of double minute chromosomes and high-level oncogene amplification in this tumor?",
    "choices": [
      [
        "Chromothripsis and breakage-fusion-bridge cycles generating autonomous, circular extrachromosomal DNA elements lacking centromeres",
        "NEUROBLASTOMA is the most common extracranial solid tumor of infancy, arising from neural crest cells in the adrenal medulla or sympathetic ganglia. High-risk neuroblastomas are defined by AMPLIFICATION OF THE MYCN ONCOGENE (typically > 10 copies, often 50-100+ copies). Gene amplification occurs via complex genomic rearrangements including BREAKAGE-FUSION-BRIDGE (BFB) CYCLES and CHROMOTHRIPSIS (catastrophic shattering of a chromosome). Amplified MYCN sequences manifest cytogenetically in two forms: (1) DOUBLE MINUTE CHROMOSOMES (dmin): small, autonomous, paired circular fragments of extrachromosomal DNA (ecDNA) that LACK CENTROMERES AND TELOMERES and segregate unequally during mitosis, driving rapid copy-number surges; and (2) HOMOGENEOUSLY STAINING REGIONS (HSRs): expanded linear arrays integrated into host chromosomes. High-level MYCN amplification is the strongest independent predictor of aggressive behavior and treatment failure."
      ],
      [
        "Reciprocal chromosomal translocation juxtaposing the oncogene with the immunoglobulin heavy-chain enhancer",
        "Translocation with IgH enhancers (e.g., t[8;14], t[14;18]) causes oncogene overexpression from two gene copies; it does not generate double minute chromosomes or copy-number amplification."
      ],
      [
        "Trinucleotide repeat expansion during DNA replication mediated by strand slippage and hairpin formation",
        "Trinucleotide expansions (e.g., CAG in Huntington, CGG in Fragile X) cause monogenic neurodegenerative disorders, not oncogene amplification."
      ],
      [
        "Reactivation of embryonic retrotransposons inserting into the promoter of tumor suppressor genes",
        "Retrotransposon insertion causes insertional mutagenesis, not high-level focal oncogene amplification as double minutes."
      ],
      [
        "Nondisjunction during meiosis I resulting in stable trisomy of chromosome 2",
        "Meiotic nondisjunction causes whole-chromosome aneuploidy (3 copies), not focal 50- to 100-fold gene amplification."
      ]
    ],
    "shortestValidSolution": "Adrenal mass crossing midline + opsoclonus-myoclonus + Homer Wright rosettes + MYCN double minutes = Neuroblastoma (chromothripsis/ecDNA amplification).",
    "necessaryInference": "Map MYCN gene amplification to double minute chromosomes (extrachromosomal circular DNA lacking centromeres) and homogeneously staining regions.",
    "strongestDistractor": "Reciprocal chromosomal translocation juxtaposing the oncogene with the immunoglobulin heavy-chain enhancer",
    "distractorExclusion": "Translocations (e.g., t[8;14]) overexpress an intact diploid locus; double minutes represent autonomous extrachromosomal focal amplification of 50+ copies.",
    "citation": "Shaw LP et al. The shared evolutionary capacities of plasmids and extrachromosomal DNA. Nat Rev Genet. PMID: 42736483.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/oncology item on neuroblastoma MYCN amplification, double minute chromosomes, and extrachromosomal DNA biology.",
      "distractorExclusionNotes": "Excluded balanced translocations (Burkitt), repeat expansions, and meiotic trisomy based on ecDNA amplification mechanics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0885",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Retinoblastoma RB1 Two-Hit Hypothesis and Transcriptional Regulation of E2F",
    "provisionalDifficulty": 4,
    "stem": "An 11-month-old female infant is brought to the pediatric ophthalmologist when her mother notices a white pupillary reflection ('cat's-eye reflex' / leukocoria) in flash photographs. Funduscopic examination under anesthesia reveals bilateral, multifocal, chalky-white retinal masses with vitreous seeding. Cytogenetic and molecular sequencing confirms an inherited germline heterozygous nonsense mutation in the RB1 gene on chromosome 13q14. The patient's father lost an eye to retinoblastoma during early childhood and successfully underwent resection of an osteosarcoma of the distal femur at age 16. In accordance with Knudson's two-hit hypothesis, which of the following molecular events represents the primary biochemical function of the unphosphorylated wild-type Rb protein in suppressing tumor development?",
    "choices": [
      [
        "Hypophosphorylated Rb sequesters E2F transcription factors, preventing transcription of S-phase cell-cycle genes",
        "RETINOBLASTOMA is the prototype of KNUDSON'S TWO-HIT HYPOTHESIS of tumor suppressor gene inactivation. In familial (hereditary) retinoblastoma (~40% of cases), patients inherit a 'first hit' GERMLINE LOSS-OF-FUNCTION MUTATION in one RB1 allele on chromosome 13q14. A 'second hit' SOMATIC MUTATION (or loss of heterozygosity via mitotic recombination) inactivates the remaining normal allele in retinal precursor cells, producing bilateral, multifocal retinoblastomas and a markedly increased lifetime risk of second primary neoplasms, especially OSTEOSARCOMA. The wild-type RB PROTEIN (pRb) is a master regulator of the G1/S CHECKPOINT. In its normal, UNPHOSPHORYLATED (HYPOPHOSPHORYLATED) ACTIVE STATE, pRb binds and SEQUESTERS E2F TRANSCRIPTION FACTORS and recruits histone deacetylases (HDACs), silencing genes required for DNA synthesis. When CDK4/6-cyclin D hyperphosphorylates pRb, E2F is released, driving S-phase entry."
      ],
      [
        "Directly phosphorylates MDM2 to promote its rapid proteasomal autoubiquitination",
        "Phosphorylation of MDM2 is regulated by ATM and other DNA-damage checkpoint kinases, not by the pRb protein."
      ],
      [
        "Acts as a sequence-specific transcription factor binding directly to promoters containing p53-response elements",
        "p53 binds p53-response elements to activate p21 and pro-apoptotic genes; pRb regulates E2F and does not directly bind p53-response elements."
      ],
      [
        "Degrades cytoplasmic beta-catenin through the destruction complex containing axin and APC",
        "Beta-catenin degradation is mediated by the APC-Axin-GSK3-beta complex, which is mutated in Familial Adenomatous Polyposis, not retinoblastoma."
      ],
      [
        "Ubiquitinates hypoxia-inducible factor 1-alpha under normoxic physiological conditions",
        "HIF-1-alpha ubiquitination is mediated by the VHL tumor suppressor protein, mutated in Von Hippel-Lindau disease."
      ]
    ],
    "shortestValidSolution": "Bilateral retinoblastoma + family osteosarcoma = hereditary RB1 (13q14). Active unphosphorylated pRb sequesters E2F -> blocks G1/S transition.",
    "necessaryInference": "Map Knudson's two-hit model of RB1 to its active unphosphorylated state sequestering E2F to maintain the G1/S block.",
    "strongestDistractor": "Acts as a sequence-specific transcription factor binding directly to promoters containing p53-response elements",
    "distractorExclusion": "p53 binds p53-response elements; pRb acts by binding and sequestering E2F transcription factors to silence S-phase genes.",
    "citation": "Knudson AG Jr. Mutation and cancer: statistical study of retinoblastoma. Proc Natl Acad Sci U S A. 1971;68(4):820-823. PMID: 5279523.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/cell biology item on Knudson's two-hit hypothesis, RB1 phosphorylation kinetics, and osteosarcoma susceptibility.",
      "distractorExclusionNotes": "Excluded p53 response elements, APC beta-catenin degradation, and VHL based on canonical pRb-E2F G1/S checkpoint arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0886",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "General Principles",
    "topic": "Li-Fraumeni Syndrome TP53 Germline Mutation Cell-Cycle Arrest Failure",
    "provisionalDifficulty": 4,
    "stem": "A 31-year-old woman presents with a firm, painless palpable mass in the upper outer quadrant of her left breast. Core needle biopsy confirms invasive ductal carcinoma that is estrogen receptor negative, progesterone receptor negative, and HER2 negative (triple-negative). Her medical history is remarkable for resection of an osteosarcoma of the right proximal tibia at age 14 and an adrenocortical carcinoma at age 22. Her family history is significant for her mother, who died of premenopausal bilateral breast cancer at age 36, a brother who died of glioblastoma multiforme at age 24, and a maternal aunt who was treated for a retroperitoneal liposarcoma. Genetic sequencing reveals a heterozygous germline missense mutation in the DNA-binding domain of the TP53 gene on chromosome 17p13.1. In response to DNA damage in normal cells, which of the following transcriptional targets is directly upregulated by wild-type p53 to enforce G1 cell-cycle arrest?",
    "choices": [
      [
        "Cyclin-dependent kinase inhibitor 1A (p21 / CIP1) inhibiting CDK2 and CDK4/6 complexes",
        "LI-FRAUMENI SYNDROME is an autosomal dominant cancer predisposition syndrome caused by germline heterozygous mutations in the TP53 GENE on chromosome 17p13.1. TP53 encodes p53, the 'guardian of the genome.' Patients develop an extensive spectrum of early-onset malignancies (mnemonic 'SBLA': Sarcomas, Breast cancer, Leukemia/brain tumors, Adrenocortical carcinoma). In response to DNA damage, p53 is phosphorylated by ATM/ATR and stabilizes. Tetrameric p53 acts as a sequence-specific transcription factor that binds p53-responsive promoter elements to directly upregulate: (1) p21 (CIP1/WAF1 / CDKN1A), a potent CYCLIN-DEPENDENT KINASE INHIBITOR that binds and inhibits CDK2-cyclin E and CDK4/6-cyclin D complexes, maintaining pRb in its unphosphorylated, active state to arrest cells in G1; (2) GADD45 (mediating DNA repair); and (3) BAX and PUMA (triggering intrinsic apoptosis if DNA damage is unrepairable)."
      ],
      [
        "Retinoblastoma gene (RB1) driving de novo transcription of hypophosphorylated pRb",
        "p53 does not directly transcribe the RB1 gene; p53 upregulates p21, which prevents CDK-mediated phosphorylation of existing pRb."
      ],
      [
        "Ataxia-telangiectasia mutated (ATM) serine/threonine protein kinase",
        "ATM is upstream of p53; ATM phosphorylates and activates p53 in response to double-strand breaks, rather than being a transcriptional target of p53."
      ],
      [
        "Murine double minute 2 (MDM2) acting as an irreversible activator of the G1/S restriction point",
        "While p53 does transcribe MDM2 as a negative feedback loop to target p53 for degradation, MDM2 is an E3 ubiquitin ligase, not a cell-cycle arresting agent."
      ],
      [
        "Cyclin D1 (CCND1) accelerating transit through the G1 phase restriction point",
        "Cyclin D1 drives cell cycle progression; p53 arrests the cell cycle by inhibiting cyclin-CDK activity via p21."
      ]
    ],
    "shortestValidSolution": "Young breast cancer + osteosarcoma + adrenocortical + family brain/sarcomas = Li-Fraumeni (TP53). p53 arrests G1 by transcribing p21 (CDK inhibitor).",
    "necessaryInference": "Identify p21 (CDKN1A) as the primary transcriptional target through which p53 inhibits CDK4/6 and CDK2 to arrest the G1/S transition.",
    "strongestDistractor": "Ataxia-telangiectasia mutated (ATM) serine/threonine protein kinase",
    "distractorExclusion": "ATM is UPSTREAM of p53 (ATM phosphorylates p53); p53 functions DOWNSTREAM by transcribing p21 to halt the cell cycle.",
    "citation": "Malkin D. Li-fraumeni syndrome. Genes Cancer. 2011;2(4):475-484. PMID: 21779515.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/cell biology item on Li-Fraumeni syndrome (SBLA spectrum) and p53-dependent transcriptional activation of p21.",
      "distractorExclusionNotes": "Excluded upstream kinase ATM and oncogenic drivers (Cyclin D1) based on p21 CDK-inhibition cell cycle arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0887",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Gastrointestinal",
    "topic": "Lynch Syndrome DNA Mismatch Repair MSH2 MLH1 Microsatellite Instability",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man presents with iron deficiency anemia and a 5-cm ulcerated, polypoid adenocarcinoma of the cecum (right colon). Colonoscopy reveals only two small, benign tubular adenomas elsewhere in the colon. His family history is notable for his mother, who was diagnosed with endometrial carcinoma at age 42, a maternal uncle with colorectal carcinoma at age 46, and a maternal cousin with ovarian cancer at age 38, meeting Amsterdam II criteria for Lynch syndrome. Immunohistochemical staining of the resected colon tumor reveals complete loss of nuclear staining for MSH2 and MSH6 proteins, with preserved MLH1 and PMS2 staining. High-resolution fragment analysis confirms high-level microsatellite instability (MSI-H). Which of the following biochemical defects during DNA replication is directly caused by loss of the MSH2/MSH6 heterodimer (MutS-alpha)?",
    "choices": [
      [
        "Failure to recognize and bind single base-pair mismatches and small insertion-deletion slippage loops",
        "LYNCH SYNDROME (Hereditary Non-Polyposis Colorectal Cancer / HNPCC) is an autosomal dominant cancer syndrome caused by germline mutations in DNA MISMATCH REPAIR (MMR) GENES: MSH2 (~40%), MLH1 (~40%), MSH6 (~10%), or PMS2 (~5%). MSH2 forms an obligatory heterodimer with MSH6 (known as MutS-alpha) that functions as a molecular sliding clamp to SCAN newly synthesized DNA, recognizing SINGLE BASE-PAIR MISMATCHES (e.g., G-T or A-C pairs) and SMALL INSERTION/DELETION LOOPS (1-2 nucleotides) caused by DNA polymerase slippage during replication of tandem repetitive sequences (MICROSATELLITES). MutS-alpha then recruits MutL-alpha (MLH1/PMS2 heterodimer) to coordinate exonucleolytic excision of the nascent strand. Loss of MSH2/MSH6 causes uncorrected slippage mutations throughout the genome (MICROSATELLITE INSTABILITY), accumulating frameshifts in tumor suppressor genes containing coding microsatellites (e.g., TGFBR2, BAX)."
      ],
      [
        "Inability of excinuclease endonucleases to excise ultraviolet-induced pyrimidine photodimers",
        "Excision of UV-induced thymine-thymine cyclobutane pyrimidine dimers is mediated by nucleotide excision repair (NER, defective in Xeroderma Pigmentosum), not mismatch repair."
      ],
      [
        "Impaired removal of deaminated cytosine (uracil) residues by DNA glycosylases",
        "Removal of uracil from DNA is the function of uracil-DNA glycosylase in Base Excision Repair (BER), not mismatch repair."
      ],
      [
        "Defective non-homologous end-joining (NHEJ) of blunt DNA double-strand breaks",
        "NHEJ repairs double-strand breaks using Ku70/80 and DNA-PKcs; defect causes severe combined immunodeficiency, not Lynch syndrome."
      ],
      [
        "Failure of DNA topoisomerase I to relieve supercoiling torsional stress during transcription",
        "Topoisomerases resolve topological tension during replication and transcription; they are not DNA mismatch repair enzymes."
      ]
    ],
    "shortestValidSolution": "Right colon cancer at young age + maternal endometrial cancer + MSH2/MSH6 loss + MSI-H = Lynch syndrome (failure of DNA mismatch repair).",
    "necessaryInference": "Map MSH2/MSH6 (MutS-alpha) specifically to recognition of base-base mismatches and replication slippage loops at microsatellites.",
    "strongestDistractor": "Inability of excinuclease endonucleases to excise ultraviolet-induced pyrimidine photodimers",
    "distractorExclusion": "UV pyrimidine dimers are repaired by Nucleotide Excision Repair (NER, defective in Xeroderma Pigmentosum); Lynch syndrome is defective Mismatch Repair (MMR).",
    "citation": "Vasen HF, Blanco I, Aktan-Collan K, et al. Revised guidelines for the clinical management of Lynch syndrome (HNPCC): recommendations by a group of European experts. Gut. 2013;62(6):812-823. PMID: 23408351.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/biochemistry item on Lynch syndrome mismatch repair mechanisms, MutS-alpha recognition, and microsatellite instability.",
      "distractorExclusionNotes": "Excluded NER (pyrimidine dimers), BER (uracil glycosylase), and NHEJ based on MMR polymerase slippage at microsatellites.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0888",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Gastrointestinal",
    "topic": "Familial Adenomatous Polyposis APC Gene and Beta-Catenin Destruction",
    "provisionalDifficulty": 4,
    "stem": "A 21-year-old man undergoes screening colonoscopy because his father was diagnosed with metastatic colon cancer at age 39. The colonoscopy reveals carpet-like polyposis throughout the entire large intestine with over 1,200 small, pedunculated and sessile adenomatous polyps carpeting the colonic mucosa from the rectum to the cecum. Random biopsies confirm tubular adenomas with low-grade and focal high-grade dysplasia. Ophthalmologic examination reveals multiple bilateral pigmented ocular fundus lesions (congenital hypertrophy of the retinal pigment epithelium / CHRPE). Genetic sequencing confirms a heterozygous germline frameshift mutation in the APC gene on chromosome 5q21. Which of the following biochemical cascades is constitutively activated in colonic epithelial cells as a direct result of this mutation?",
    "choices": [
      [
        "Loss of the destruction complex permits free beta-catenin to accumulate and translocate to the nucleus, driving TCF/LEF transcription",
        "FAMILIAL ADENOMATOUS POLYPOSIS (FAP) is an autosomal dominant condition caused by germline mutations in the ADENOMATOUS POLYPOSIS COLI (APC) gene on chromosome 5q21. Patients develop thousands of colonic adenomas by early adulthood, with a 100% risk of progression to colorectal cancer if total proctocolectomy is not performed. In normal quiescent enterocytes, APC forms a multiprotein DESTRUCTION COMPLEX with Axin, glycogen synthase kinase 3-beta (GSK3-beta), and casein kinase 1 (CK1). This complex phosphorylates cytoplasmic BETA-CATENIN, targeting it for polyubiquitination and 26S proteasomal degradation. Loss of APC completely disrupts the destruction complex. Unphosphorylated beta-catenin accumulates in the cytoplasm, TRANSLOCATES INTO THE NUCLEUS, and binds TCF/LEF transcription factors to constitutively transcribe oncogenes: CYCLIN D1 and c-MYC, driving continuous epithelial proliferation and adenoma formation."
      ],
      [
        "Constitutive hyperphosphorylation of the epidermal growth factor receptor activating downstream KRAS",
        "EGFR and KRAS mutations represent downstream progression events in the classic adenoma-carcinoma sequence; loss of APC is the initiating gatekeeper event."
      ],
      [
        "Impaired phosphorylation of SMAD4 blocking transforming growth factor-beta (TGF-beta) apoptosis",
        "SMAD4 inactivation occurs in late adenoma-to-carcinoma progression or Juvenile Polyposis Syndrome, not the initiating APC destruction complex defect."
      ],
      [
        "Inability of p53 to upregulate pro-apoptotic BAX leading to evasion of programmed cell death",
        "Loss of TP53 is the final step in the classic Vogelstein adenoma-carcinoma sequence, facilitating the transition from high-grade adenoma to invasive carcinoma."
      ],
      [
        "Constitutive autophosphorylation of the RET receptor tyrosine kinase driving glial cell line-derived neurotrophic signaling",
        "RET gain-of-function mutations cause Multiple Endocrine Neoplasia type 2 (MEN2), not Familial Adenomatous Polyposis."
      ]
    ],
    "shortestValidSolution": "Thousands of colon polyps + CHRPE + chromosome 5q21 = FAP (APC mutation -> failure of beta-catenin degradation -> nuclear TCF/LEF transcription).",
    "necessaryInference": "Sequence the adenoma-carcinoma pathway: APC loss (first step) leads to failure of beta-catenin degradation and nuclear translocation.",
    "strongestDistractor": "Inability of p53 to upregulate pro-apoptotic BAX leading to evasion of programmed cell death",
    "distractorExclusion": "p53 loss is the LATE step in the Vogelstein sequence that drives invasive carcinoma; APC loss is the INITIATING step that drives adenoma formation.",
    "citation": "Kinzler KW et al. Lessons from hereditary colorectal cancer. Cell. PMID: 8861899.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on FAP, APC gatekeeper function, and beta-catenin Wnt signaling in the adenoma-carcinoma sequence.",
      "distractorExclusionNotes": "Excluded downstream progression events (KRAS, SMAD4, p53) based on APC destruction complex disassembly and beta-catenin accumulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0889",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Von Hippel-Lindau Disease VHL Ubiquitin Ligase and HIF-1-Alpha Degradation",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old man presents with progressive occipital headaches, unsteady gait, and episodes of diaphoresis, palpitations, and severe hypertension (blood pressure 210/115 mm Hg). Brain MRI demonstrates a cystic lesion with an intensely enhancing mural nodule in the cerebellar hemisphere (hemangioblastoma). Abdominal CT reveals bilateral, multifocal solid enhancing renal masses with central necrosis (biopsy confirmed as clear cell renal cell carcinoma), multiple pancreatic neuroendocrine tumors, and a 4-cm heterogeneously enhancing right adrenal mass (confirmed as pheochromocytoma by elevated urinary metanephrines). Genetic testing reveals a germline heterozygous mutation in the VHL tumor suppressor gene on chromosome 3p25.3. Which of the following biochemical events is directly impaired by loss of the functional VHL protein?",
    "choices": [
      [
        "Polyubiquitination and proteasomal degradation of hydroxylated hypoxia-inducible factors (HIF-1-alpha and HIF-2-alpha)",
        "VON HIPPEL-LINDAU (VHL) DISEASE is an autosomal dominant multi-system tumor predisposition syndrome caused by mutations in the VHL GENE on chromosome 3p25.3. Clinical features include CAPILLARY HEMANGIOBLASTOMAS (cerebellum, retina, spinal cord), CLEAR CELL RENAL CELL CARCINOMA (often bilateral and multifocal), PHEOCHROMOCYTOMA, and pancreatic neuroendocrine tumors. Under normal oxygenated (normoxic) conditions, cellular PROLYL HYDROXYLASES (requiring O2, Fe2+, and alpha-ketoglutarate) hydroxylate specific proline residues on HYPOXIA-INDUCIBLE FACTORS (HIF-1-alpha and HIF-2-alpha). The VHL protein functions as the substrate-recognition component of an E3 UBIQUITIN LIGASE complex that binds hydroxylated HIF-alpha, polyubiquitinating it for rapid degradation by the 26S proteasome. In VHL deficiency, HIF-alpha CANNOT BE DEGRADED; it accumulates constitutively, translocates to the nucleus, and transcribes pro-angiogenic and proliferative genes: VEGF (vascular endothelial growth factor, driving vascular tumors), PDGF, and erythropoietin."
      ],
      [
        "Binding and transcriptional sequestration of the E2F family of cell-cycle transcription factors",
        "E2F sequestration is the function of the retinoblastoma protein (pRb, chromosome 13q14), not the VHL ubiquitin ligase."
      ],
      [
        "Dephosphorylation of downstream ribosomal protein S6 kinase via tuberin-hamartin GTPase-activating complexes",
        "S6 kinase regulation via tuberin/hamartin occurs in Tuberous Sclerosis (TSC1/TSC2), not Von Hippel-Lindau disease."
      ],
      [
        "Phosphorylation of cytoplasmic beta-catenin within the Axin-glycogen synthase kinase destruction complex",
        "Beta-catenin destruction is regulated by the APC protein (chromosome 5q21), mutated in Familial Adenomatous Polyposis."
      ],
      [
        "GTPase-activating protein (GAP) stimulation accelerating the intrinsic hydrolysis of Ras-GTP to Ras-GDP",
        "Ras-GAP activity is the function of neurofibromin (NF1, chromosome 17), mutated in Neurofibromatosis Type 1."
      ]
    ],
    "shortestValidSolution": "Cerebellar hemangioblastoma + clear cell RCC + pheochromocytoma = VHL (3p25). Defective VHL E3 ligase cannot degrade HIF-1-alpha -> excess VEGF.",
    "necessaryInference": "Map VHL tumor suppressor to its biochemical role as the substrate recognition subunit of an E3 ubiquitin ligase targeting hydroxylated HIF-alpha.",
    "strongestDistractor": "Dephosphorylation of downstream ribosomal protein S6 kinase via tuberin-hamartin GTPase-activating complexes",
    "distractorExclusion": "Tuberin/hamartin regulates mTOR in Tuberous Sclerosis; VHL functions as an E3 ubiquitin ligase targeting HIF-alpha.",
    "citation": "Kaelin WG Jr. Molecular basis of the VHL hereditary cancer syndrome. Nat Rev Cancer. 2002;2(9):673-682. PMID: 12209156.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on Von Hippel-Lindau disease, prolyl hydroxylation, and VHL E3 ubiquitin ligase HIF degradation.",
      "distractorExclusionNotes": "Excluded pRb, TSC1/2, APC, and NF1 based on oxygen-sensing HIF-alpha ubiquitination and VEGF overproduction.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0890",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Endocrine",
    "topic": "Multiple Endocrine Neoplasia Type 1 MEN1 Gene Menin Nuclear Scaffold",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old man presents with recurrent, severe epigastric burning pain and water-brash refractory to high-dose omeprazole. Upper endoscopy reveals multiple deep peptic ulcers in the second and third portions of the duodenum and proximal jejunum. Fasting serum gastrin is markedly elevated at 1,850 pg/mL (normal < 100 pg/mL), and secretin stimulation test produces a paradoxical surge in serum gastrin to 2,900 pg/mL (confirming Zollinger-Ellison syndrome / gastrinoma). Routine serum chemistry reveals asymptomatic hypercalcemia (serum calcium 11.8 mg/dL) with an inappropriately elevated intact parathyroid hormone (PTH 142 pg/mL, normal 15-65 pg/mL), and neck ultrasound reveals four-gland parathyroid hyperplasia. Further history reveals that the patient underwent transsphenoidal resection of a prolactinoma at age 28. Genetic sequencing identifies an inactivating mutation in the MEN1 gene on chromosome 11q13. Which of the following functions describes the physiological role of the protein product encoded by this tumor suppressor gene?",
    "choices": [
      [
        "Nuclear scaffold protein (menin) that regulates gene transcription and chromatin modification by interacting with JunD and MLL",
        "MULTIPLE ENDOCRINE NEOPLASIA TYPE 1 (MEN1 / WERMER SYNDROME) is an autosomal dominant disorder characterized by tumors of the '3 Ps': (1) PARATHYROID (multigland hyperplasia in >95%, causing hyperparathyroidism and hypercalcemia); (2) PANCREATIC / ENTEROPANCREATIC neuroendocrine tumors (most commonly GASTRINOMA [Zollinger-Ellison syndrome with refractory jejunal ulcers and paradoxical secretin stimulation] or insulinoma); and (3) PITUITARY adenomas (most commonly prolactinoma). MEN1 is caused by inactivating mutations in the MEN1 GENE on chromosome 11q13. The gene encodes MENIN, a 610-amino-acid NUCLEAR SCAFFOLD PROTEIN. Menin lacks intrinsic enzymatic activity but coordinates transcriptional repression and epigenetic regulation by interacting with the JunD transcription factor (repressing JunD-mediated proliferation) and the MLL1/KMT2A histone methyltransferase complex (promoting H3K4 trimethylation of cell-cycle inhibitor genes p18 and p27)."
      ],
      [
        "Receptor tyrosine kinase carrying gain-of-function point mutations in extracellular cysteine-rich domains",
        "Gain-of-function mutations in the RET receptor tyrosine kinase cause Multiple Endocrine Neoplasia Type 2 (MEN2A and MEN2B), not MEN1."
      ],
      [
        "GTPase-activating protein that accelerates hydrolysis of active Ras-GTP to inactive Ras-GDP",
        "Neurofibromin (encoded by NF1) functions as a Ras-GAP; its inactivation causes Neurofibromatosis Type 1, not MEN1."
      ],
      [
        "Phosphatase dephosphorylating phosphatidylinositol 3,4,5-trisphosphate at the plasma membrane",
        "PTEN is a lipid phosphatase dephosphorylating PIP3; mutations cause Cowden syndrome, characterized by hamartomas and breast/thyroid cancer."
      ],
      [
        "Substrate recognition subunit of an E3 ubiquitin ligase targeting hydroxylated transcription factors",
        "The VHL protein functions as the substrate recognition subunit of an E3 ubiquitin ligase targeting HIF-alpha, causing Von Hippel-Lindau disease."
      ]
    ],
    "shortestValidSolution": "3 Ps: Parathyroid hyperplasia + Pancreatic gastrinoma (ZES) + Pituitary prolactinoma = MEN1 (11q13). MEN1 encodes menin (nuclear scaffold protein).",
    "necessaryInference": "Map the 3 Ps of MEN1 to the MEN1 tumor suppressor gene encoding the nuclear scaffold protein menin.",
    "strongestDistractor": "Receptor tyrosine kinase carrying gain-of-function point mutations in extracellular cysteine-rich domains",
    "distractorExclusion": "RET receptor tyrosine kinase mutations cause MEN2 (medullary thyroid cancer, pheochromocytoma); MEN1 is an inactivating mutation in menin.",
    "citation": "Thakker RV, Newey PJ, Walls GV, et al. Clinical practice guidelines for multiple endocrine neoplasia type 1 (MEN1). J Clin Endocrinol Metab. 2012;97(9):2990-3011. PMID: 22723327.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/endocrinology item on MEN1 syndrome (3 Ps), menin nuclear scaffold biology, and distinction from MEN2 RET kinase.",
      "distractorExclusionNotes": "Excluded MEN2 RET proto-oncogene, NF1 Ras-GAP, and PTEN based on menin nuclear transcription/scaffold function.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0891",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Endocrine",
    "topic": "Multiple Endocrine Neoplasia Type 2 RET Proto-Oncogene Gain of Function",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old girl is evaluated for a firm, painless thyroid nodule. Serum calcitonin is markedly elevated at 2,400 pg/mL (normal < 10 pg/mL). Fine-needle aspiration confirms medullary thyroid carcinoma, with tumor cells displaying amyloid stroma on Congo red stain. Plasma free fractionated metanephrines reveal marked elevation of metanephrine and normetanephrine, and abdominal CT confirms bilateral adrenal medullary masses (pheochromocytomas). Physical examination reveals a tall, slender Marfanoid habitus, joint hypermobility, prominent blubbery lips, and multiple mucosal neuromas on the anterior dorsal surface of her tongue and buccal mucosa. Ophthalmologic examination reveals hypertrophied, visible corneal nerve fibers. Genetic testing confirms a de novo heterozygous germline point mutation in the kinase domain of the RET proto-oncogene (M918T) on chromosome 10q11.2. Which of the following molecular mechanisms directly explains how this mutation causes Multiple Endocrine Neoplasia type 2B (MEN2B)?",
    "choices": [
      [
        "Alters the substrate-binding pocket of the RET tyrosine kinase domain, inducing monomeric, ligand-independent catalytic activation",
        "MULTIPLE ENDOCRINE NEOPLASIA TYPE 2 (MEN2) is an autosomal dominant syndrome caused by GAIN-OF-FUNCTION MUTATIONS IN THE RET PROTO-ONCOGENE on chromosome 10q11.2, which encodes a receptor tyrosine kinase for glial cell line-derived neurotrophic factor (GDNF) family ligands. RET mutations fall into two distinct mechanistic classes: (1) MEN2A mutations (e.g., C634R in the extracellular cysteine-rich domain) alter cysteine residues that form abnormal intermolecular disulfide bonds, causing constitutive, ligand-independent RECEPTOR DIMERIZATION; (2) MEN2B mutations (specifically the M918T mutation in the intracellular catalytic core, ~95% of cases) alter the activation loop of the tyrosine kinase domain, permitting CONSTITUTIVE, LIGAND-INDEPENDENT CATALYTIC ACTIVATION IN THE MONOMERIC STATE and altering substrate specificity to phosphorylate novel cytosolic targets. MEN2B presents with medullary thyroid cancer (extremely aggressive), pheochromocytoma, mucosal neuromas, and Marfanoid habitus, but NO parathyroid hyperplasia."
      ],
      [
        "Inactivates the GTPase-activating catalytic site of neurofibromin, locking downstream Ras in an active GTP-bound state",
        "NF1 inactivation causes Neurofibromatosis Type 1, which features neurofibromas and cafe-au-lait spots, not medullary thyroid cancer or mucosal neuromas."
      ],
      [
        "Disrupts the destruction complex preventing beta-catenin phosphorylation and driving uncontrolled TCF-mediated transcription",
        "APC mutations disrupt beta-catenin degradation in Familial Adenomatous Polyposis, not MEN2B."
      ],
      [
        "Abolishes DNA-damage cell-cycle checkpoint arrest by preventing p21 (CDKN1A) transcriptional transactivation",
        "p53 loss abolishes p21 activation in Li-Fraumeni syndrome, which predisposes to sarcomas and breast cancer, not MEN2B."
      ],
      [
        "Prevents polyubiquitination of hypoxia-inducible factor 1-alpha, driving constitutive vascular endothelial growth factor expression",
        "VHL mutations prevent HIF-1-alpha degradation in Von Hippel-Lindau disease, not MEN2B."
      ]
    ],
    "shortestValidSolution": "Medullary thyroid cancer (calcitonin) + pheochromocytoma + mucosal neuromas + Marfanoid habitus = MEN2B -> RET M918T kinase domain activation.",
    "necessaryInference": "Distinguish MEN2B (M918T intracellular kinase domain monomer activation) from MEN2A (extracellular cysteine dimerization) and MEN1 (menin loss).",
    "strongestDistractor": "Inactivates the GTPase-activating catalytic site of neurofibromin, locking downstream Ras in an active GTP-bound state",
    "distractorExclusion": "NF1 causes neurofibromas and Lisch nodules; MEN2B is caused by gain-of-function RET tyrosine kinase mutations causing mucosal neuromas and MTC.",
    "citation": "Wells SA Jr, Asa SL, Dralle H, et al. Revised American Thyroid Association guidelines for the management of medullary thyroid carcinoma. Thyroid. 2015;25(6):567-610. PMID: 25810047.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/endocrinology item on MEN2B RET M918T kinase domain gain-of-function mechanism and medullary thyroid cancer.",
      "distractorExclusionNotes": "Excluded NF1 Ras-GAP, APC beta-catenin, and VHL based on canonical RET receptor tyrosine kinase oncogenesis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0892",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Neurofibromatosis Type 1 NF1 Neurofibromin Ras-GAP Inactivation",
    "provisionalDifficulty": 4,
    "stem": "A 14-year-old boy presents for an evaluation of multiple skin lesions. Physical examination reveals nine flat, light brown, hyperpigmented macules with smooth borders measuring between 2.0 and 4.5 cm in diameter (cafe-au-lait spots) distributed over his trunk, prominent freckling in both axillary and inguinal creases (Crowe sign), and multiple soft, fleshy, non-tender cutaneous papules and nodules (cutaneous neurofibromas). Slit-lamp biomicroscopy demonstrates multiple yellow-brown melanocytic hamartomas of the iris (Lisch nodules). Brain MRI demonstrates an asymptomatic optic pathway glioma. Genetic testing confirms an autosomal dominant loss-of-function mutation in the NF1 gene on chromosome 17q11.2. Which of the following biochemical functions is normally mediated by the protein encoded by NF1?",
    "choices": [
      [
        "GTPase-activating protein (Ras-GAP) that accelerates the intrinsic hydrolysis of active Ras-GTP to inactive Ras-GDP",
        "NEUROFIBROMATOSIS TYPE 1 (NF1 / VON RECKLINGHAUSEN DISEASE) is an autosomal dominant condition with 100% penetrance caused by mutations in the NF1 GENE on chromosome 17q11.2 (mnemonic: chromosome 17 has 17 letters in 'von Recklinghausen'). The NF1 gene encodes NEUROFIBROMIN, a large cytoplasmic tumor suppressor protein containing a GAP-related domain (GRD). Neurofibromin functions as a GTPASE-ACTIVATING PROTEIN (Ras-GAP). In normal cells, Ras switches between an active GTP-bound state and an inactive GDP-bound state. While Ras has weak intrinsic GTPase activity, neurofibromin ACCELERATES THE HYDROLYSIS OF Ras-GTP TO Ras-GDP BY OVER 100,000-FOLD, functioning as an essential 'off-switch' for Ras signaling. Loss-of-function mutations in NF1 abolish this GAP activity, leaving Ras constitutively locked in the active GTP-bound state, driving continuous downstream RAF-MEK-MAPK and PI3K-AKT signaling, promoting neural crest tumor formation."
      ],
      [
        "Cytoskeletal linker protein (merlin) that mediates contact inhibition by coupling cell-surface adhesion molecules to actin",
        "Merlin (schwannomin) is encoded by the NF2 gene on chromosome 22q12; mutations cause Neurofibromatosis Type 2 (bilateral vestibular schwannomas)."
      ],
      [
        "Guanine nucleotide exchange factor (GEF) that promotes the loading of GTP onto inactive Ras-GDP",
        "Guanine nucleotide exchange factors (e.g., SOS) activate Ras by loading GTP; neurofibromin is a GAP that inactives Ras by promoting GTP hydrolysis."
      ],
      [
        "Serine/threonine kinase that phosphorylates and inactivates the downstream effector B-Raf",
        "Ras-GTP activates Raf kinases; neurofibromin regulates Ras upstream and does not act as a protein kinase."
      ],
      [
        "E3 ubiquitin ligase targeting the epidermal growth factor receptor for lysosomal degradation",
        "c-Cbl is the E3 ubiquitin ligase targeting EGFR, not neurofibromin; neurofibromin regulates Ras GTPase activity."
      ]
    ],
    "shortestValidSolution": "Cafe-au-lait spots + axillary freckling + Lisch nodules + neurofibromas = NF1 (chromosome 17). NF1 encodes neurofibromin (Ras-GAP: Ras-GTP -> Ras-GDP).",
    "necessaryInference": "Identify neurofibromin as a Ras-GAP that inactivates Ras by accelerating GTP hydrolysis to GDP (contrast with GEFs that activate Ras).",
    "strongestDistractor": "Guanine nucleotide exchange factor (GEF) that promotes the loading of GTP onto inactive Ras-GDP",
    "distractorExclusion": "GEFs (like SOS) activate Ras by exchanging GDP for GTP; GAPs (like neurofibromin) inactivate Ras by stimulating GTP hydrolysis to GDP.",
    "citation": "Gutmann DH, Ferner RE, Listernick RH, et al. Neurofibromatosis type 1. Nat Rev Dis Primers. 2017;3:17004. PMID: 28230061.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/biochemistry item on NF1, neurofibromin Ras-GAP molecular mechanics, and contrast with GEFs and merlin.",
      "distractorExclusionNotes": "Excluded GEF (activating function) and NF2 merlin based on Ras-GAP negative regulatory GTPase hydrolysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0893",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Neurofibromatosis Type 2 NF2 Merlin Contact Inhibition Signaling",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old man presents with progressive bilateral hearing loss, tinnitus, and unsteadiness that has worsened over the past year. Audiometric testing confirms bilateral sensorineural hearing loss. Contrast-enhanced MRI of the brain demonstrates large, enhancing masses centered within bilateral cerebellopontine angles causing widening of both internal acoustic meatuses and compressing the brainstem, diagnostic of bilateral vestibular schwannomas (acoustic neuromas). The MRI also reveals a durally based, homogenously enhancing dural-tail mass along the cerebral convexity consistent with a parasagittal meningioma. Genetic testing reveals an autosomal dominant mutation in the NF2 gene on chromosome 22q12. Which of the following cellular roles describes the normal physiological function of the protein encoded by NF2?",
    "choices": [
      [
        "ERM-family cytoskeletal scaffold protein (merlin) that coordinates contact inhibition at cell-cell adherens junctions",
        "NEUROFIBROMATOSIS TYPE 2 (NF2) is an autosomal dominant disorder caused by inactivating mutations in the NF2 GENE on chromosome 22q12 (mnemonic: 'type 2 has all 2s: chromosome 22, gene NF2, bilateral acoustic neuromas'). NF2 encodes MERLIN (schwannomin), a 595-amino-acid member of the ezrin-radixin-moesin (ERM) family of membrane-cytoskeletal scaffolding proteins. Merlin localizes to CELL-CELL ADHERENS JUNCTIONS and the cortical actin cytoskeleton. In response to high cell density, unphosphorylated (active) merlin coordinates CONTACT INHIBITION by: (1) Sequestering and suppressing cell-surface growth factor receptors (EGFR, CD44, and integrins); and (2) Positively regulating the HIPPO TUMOR SUPPRESSOR PATHWAY (activating Lats1/2 kinases, which phosphorylate and sequester the oncogenic transcriptional coactivators YAP and TAZ in the cytoplasm). Loss of merlin disrupts contact inhibition, unleashing uncontrolled proliferation of Schwann cells, meningeal cells, and ependymocytes."
      ],
      [
        "GTPase-activating protein that accelerates intrinsic hydrolysis of Ras-GTP to inactive Ras-GDP",
        "Ras-GAP activity is the function of neurofibromin (NF1 on chromosome 17), not merlin (NF2 on chromosome 22)."
      ],
      [
        "Subunit of the mismatch repair complex recognizing base-base mismatches during replication",
        "Mismatch repair is carried out by MSH2/MLH1, mutated in Lynch syndrome, not neurofibromatosis."
      ],
      [
        "DNA helicase that resolves stalled replication forks during homologous recombination repair",
        "DNA helicases are mutated in Bloom syndrome (BLM) and Werner syndrome (WRN), not NF2."
      ],
      [
        "Dual-specificity protein phosphatase that dephosphorylates active mitogen-activated protein kinases",
        "MAPK phosphatases (DUSPs) down-regulate ERK/JNK signaling; merlin is a structural ERM-family cytoskeletal protein."
      ]
    ],
    "shortestValidSolution": "Bilateral vestibular schwannomas + meningioma = NF2 (chromosome 22). NF2 encodes merlin (ERM cytoskeletal contact inhibition/Hippo pathway).",
    "necessaryInference": "Differentiate NF1 (chromosome 17, neurofibromin, Ras-GAP) from NF2 (chromosome 22, merlin, ERM cytoskeletal contact inhibition).",
    "strongestDistractor": "GTPase-activating protein that accelerates intrinsic hydrolysis of Ras-GTP to inactive Ras-GDP",
    "distractorExclusion": "Ras-GAP activity is the function of neurofibromin in NF1; NF2 encodes merlin, an ERM-family contact inhibition cytoskeletal protein.",
    "citation": "Asthagiri AR, Parry DM, Butman JA, et al. Neurofibromatosis type 2. Lancet. 2009;373(9679):1974-1986. PMID: 19476995.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/neurology item distinguishing NF2 merlin cytoskeletal contact inhibition from NF1 neurofibromin Ras-GAP mechanics.",
      "distractorExclusionNotes": "Excluded NF1 Ras-GAP, mismatch repair, and Bloom helicase based on canonical ERM-family merlin function in NF2.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0894",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Tuberous Sclerosis TSC1-TSC2 Hamartin-Tuberin Complex and mTORC1 Activation",
    "provisionalDifficulty": 4,
    "stem": "A 6-year-old boy with autism spectrum disorder and refractory focal seizures is evaluated. Physical examination reveals three hypopigmented ash-leaf macules on his trunk that fluoresce under Wood lamp, a fibrous cephalic plaque on his forehead, and angiofibromas in a butterfly distribution across his malar cheeks. Brain MRI demonstrates multiple cortical tubers, subependymal nodules along the lateral ventricles, and an enhancing lesion at the foramen of Monro causing obstructive hydrocephalus (subependymal giant cell astrocytoma / SEGA). Renal ultrasound demonstrates bilateral renal angiomyolipomas. Genetic testing confirms an inactivating mutation in the TSC2 gene (encoding tuberin). Which of the following downstream signaling alterations directly accounts for the cellular hypertrophy and hamartoma formation in this patient?",
    "choices": [
      [
        "Loss of tuberin GTPase-activating activity allows Rheb-GTP to accumulate, constitutively activating mTOR complex 1 (mTORC1)",
        "TUBEROUS SCLEROSIS COMPLEX (TSC / EPILOIA) is an autosomal dominant neurocutaneous disorder caused by inactivating mutations in either TSC1 (chromosome 9q34, encoding HAMARTIN) or TSC2 (chromosome 16p13.3, encoding TUBERIN). In normal cells, hamartin and tuberin form an obligatory heterodimeric tumor suppressor complex. Tuberin possesses a GTPASE-ACTIVATING PROTEIN (GAP) DOMAIN specific for the small G-protein RHEB (Ras homolog enriched in brain). The TSC1-TSC2 complex stimulates Rheb GTPase activity, converting active Rheb-GTP into inactive Rheb-GDP. Inactivation of either TSC1 or TSC2 abolishes this GAP activity, leading to constitutive accumulation of RHEB-GTP. Rheb-GTP binds and CONSTITUTIVELY ACTIVATES mTOR COMPLEX 1 (mTORC1). Hyperactive mTORC1 phosphorylates S6 kinase (S6K1) and 4E-BP1, driving massive protein synthesis, ribosome biogenesis, and cell growth (hamartomas). This provides the molecular rationale for mTOR inhibitors (everolimus, sirolimus) in treating SEGAs and angiomyolipomas in TSC."
      ],
      [
        "Constitutive hyperactivation of the Merlin-Hippo pathway leading to nuclear sequestration of YAP/TAZ coactivators",
        "Merlin-Hippo pathway activation is a tumor suppressor cascade (defective in NF2); in TSC, hamartoma growth is driven by mTORC1."
      ],
      [
        "Direct point mutational activation of the catalytic domain of isocitrate dehydrogenase 1 (IDH1)",
        "IDH1 mutations generate the oncometabolite 2-hydroxyglutarate in diffuse gliomas and AML, not tuberous sclerosis."
      ],
      [
        "Failure of p53 to induce p21-mediated cell cycle arrest in response to ionizing radiation",
        "p53/p21 dysfunction characterizes Li-Fraumeni syndrome and sporadic cancers, not the TSC1/TSC2 hamartoma pathway."
      ],
      [
        "Epigenetic hypermethylation of the MLH1 promoter causing microsatellite instability in enterocytes",
        "MLH1 hypermethylation causes sporadic mismatch repair deficiency in colorectal cancer, not tuberous sclerosis."
      ]
    ],
    "shortestValidSolution": "Ash-leaf spots + angiofibromas + SEGA + angiomyolipomas = Tuberous sclerosis (TSC1/TSC2 mutation -> uninhibited Rheb-GTP -> constitutively active mTORC1).",
    "necessaryInference": "Map TSC2 (tuberin) loss of GAP activity on Rheb to constitutive hyperactivation of mTORC1 (treated with everolimus).",
    "strongestDistractor": "Constitutive hyperactivation of the Merlin-Hippo pathway leading to nuclear sequestration of YAP/TAZ coactivators",
    "distractorExclusion": "Merlin functions in NF2; TSC1/TSC2 functions upstream of Rheb and mTORC1, explaining clinical efficacy of rapamycin analogs.",
    "citation": "Crino PB, Nathanson KL, Henske EP. The tuberous sclerosis complex. N Engl J Med. 2006;355(13):1345-1356. PMID: 17005952.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/biochemistry item on tuberous sclerosis TSC1/TSC2 GAP mechanics, Rheb-GTP dynamics, and mTORC1 hyperactivation.",
      "distractorExclusionNotes": "Excluded NF2 Hippo, IDH1, and p53 mechanisms based on Rheb-mTORC1 hyperactivation and rapamycin sensitivity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0895",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Sturge-Weber Syndrome GNAQ Somatic Mosaicism and Capillary-Venous Malformations",
    "provisionalDifficulty": 4,
    "stem": "A 9-month-old male infant presents with intractable focal motor seizures involving his left upper and lower extremities and developmental delay. Physical examination reveals a large, sharply demarcated, dark reddish-purple maculopapular vascular birthmark (nevus flammeus / port-wine stain) covering the right forehead, upper eyelid, and temple in the distribution of the ophthalmic (V1) and maxillary (V2) divisions of the trigeminal nerve. Ophthalmologic examination reveals elevated intraocular pressure (glaucoma) and an ipsilateral diffuse choroidal hemangioma. Non-contrast head CT demonstrates gyriform, serpentine subcortical calcifications ('tram-track calcifications') along the right parietal-occipital cerebral cortex accompanied by ipsilateral cerebral hemiatrophy and prominent leptomeningeal angiomatosis. Which of the following genetic principles explains why this neurocutaneous disorder is non-inherited and occurs sporadically without a family history?",
    "choices": [
      [
        "Post-zygotic somatic mosaic activating mutation in the GNAQ gene occurring in embryonic vascular endothelial precursors",
        "STURGE-WEBER SYNDROME (encephalotrigeminal angiomatosis) is a rare neurocutaneous disorder characterized by: (1) Unilateral facial PORT-WINE STAIN (nevus flammeus) in the V1/V2 trigeminal nerve distribution; (2) Ipsilateral LEPTOMENINGEAL CAPILLARY-VENOUS ANGIOMATOSIS causing venous stasis, cerebral ischemia, cortical calcifications ('tram-track' appearance on CT), intractable seizures, and contralateral hemiparesis; and (3) Ocular choroidal hemangiomas causing GLAUCOMA. Crucially, Sturge-Weber syndrome is NON-INHERITED and occurs entirely SPORADICALLY. It is caused by a POST-ZYGOTIC SOMATIC MOSAIC GAIN-OF-FUNCTION MUTATION in the GNAQ GENE (c.548G>A, p.R183Q), which encodes the G-alpha-q subunit of heterotrimeric G proteins. Because the mutation occurs post-zygotically during embryogenesis, it affects only a subset of cells (mosaicism) and CANNOT BE TRANSMITTED through the germline."
      ],
      [
        "Maternal mitochondrial DNA point mutation characterized by high levels of heteroplasmy in neural tissues",
        "Mitochondrial disorders (e.g., MELAS, MERRF) are maternally inherited, not somatic mosaic mutations, and do not cause port-wine stains."
      ],
      [
        "Trinucleotide repeat expansion displaying genetic anticipation exclusively through maternal meiosis",
        "Trinucleotide repeats (e.g., Fragile X) display familial transmission and anticipation, which is absent in sporadic Sturge-Weber syndrome."
      ],
      [
        "Uniparental disomy of chromosome 15 resulting in complete silencing of paternal gene expression",
        "Uniparental disomy of chromosome 15 causes Prader-Willi or Angelman syndrome, characterized by hyperphagia or ataxia, not vascular malformations."
      ],
      [
        "Complete penetrance autosomal dominant germline mutation that produces fetal lethality in males",
        "Sturge-Weber affects both males and females equally; it is not a germline male-lethal disorder (unlike incontinentia pigmenti)."
      ]
    ],
    "shortestValidSolution": "Port-wine stain (V1/V2) + tram-track calcifications + seizures = Sturge-Weber syndrome (post-zygotic somatic mosaicism in GNAQ -> non-inherited).",
    "necessaryInference": "Identify post-zygotic somatic mosaicism in GNAQ as the biological explanation for the sporadic, non-inherited nature of Sturge-Weber syndrome.",
    "strongestDistractor": "Complete penetrance autosomal dominant germline mutation that produces fetal lethality in males",
    "distractorExclusion": "Sturge-Weber affects both sexes and is not an inherited germline trait; it is caused exclusively by somatic post-zygotic mosaic GNAQ mutations.",
    "citation": "Shirley MD et al. Sturge-Weber syndrome and port-wine stains caused by somatic mutation in GNAQ. N Engl J Med. PMID: 23656586.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/neurology item on Sturge-Weber syndrome, GNAQ post-zygotic somatic mosaicism, and non-Mendelian inheritance.",
      "distractorExclusionNotes": "Excluded mitochondrial inheritance, triplet repeats, and genomic imprinting based on embryonic somatic mosaic GNAQ pathogenesis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0896",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Spinal Muscular Atrophy SMN1 Deletion and SMN2 Exon 7 Splicing Therapeutics",
    "provisionalDifficulty": 4,
    "stem": "A 2-month-old male infant presents with severe generalized hypotonia, absent deep tendon reflexes, symmetrical flaccid quadriparesis, tongue fasciculations, and paradoxical breathing (belly breathing due to intercostal muscle paralysis with preserved diaphragmatic excursion). Electromyography confirms widespread acute and chronic denervation of skeletal muscle with normal sensory nerve action potentials. Genetic testing confirms homozygous deletion of exon 7 and 8 in the SMN1 gene on chromosome 5q13.2, confirming spinal muscular atrophy type 1 (Werdnig-Hoffmann disease). The infant is evaluated for targeted therapy with nusinersen, an antisense oligonucleotide that alters pre-mRNA splicing of the nearly identical paralogous SMN2 gene. Which of the following pre-mRNA splicing mechanisms is targeted by nusinersen to restore functional survival motor neuron (SMN) protein levels?",
    "choices": [
      [
        "Blocks an intronic splicing silencer in SMN2 pre-mRNA to promote inclusion of exon 7 into the mature transcript",
        "SPINAL MUSCULAR ATROPHY (SMA) is an autosomal recessive motor neuron disease caused by homozygous deletion or loss-of-function mutation in the SMN1 GENE (survival motor neuron 1) on chromosome 5q13. SMN protein is essential for small nuclear ribonucleoprotein (snRNP) biogenesis in the spliceosome; its absence leads to progressive degeneration of ANTERIOR HORN CELLS in the spinal cord and motor cranial nerve nuclei. Humans carry a nearly identical paralogous gene, SMN2. However, SMN2 carries a silent C-to-T transition in exon 7 (c.859C>T) that creates an exonic splicing silencer, causing EXON 7 SKIPPING in ~85-90% of SMN2 transcripts. The resulting truncated protein (SMN-delta-7) is rapidly degraded. NUSINERSEN is an ANTISENSE OLIGONUCLEOTIDE that binds to an intronic splicing silencer site (ISS-N1) in intron 7 of SMN2 pre-mRNA, blocking splicing repressors and FORCING THE INCLUSION OF EXON 7, producing full-length, stable SMN protein from the SMN2 gene."
      ],
      [
        "Directly induces exon 7 skipping in SMN1 pre-mRNA to eliminate an upstream premature termination codon",
        "Nusinersen promotes exon 7 INCLUSION in SMN2, not skipping; skipping exon 7 is what renders normal SMN2 transcripts unstable."
      ],
      [
        "Inhibits polyadenylation of the 3'-untranslated region of SMN2 mRNA to accelerate its cytoplasmic translation",
        "Inhibiting polyadenylation would destabilize mRNA and promote degradation; nusinersen is a splicing modifier targeting exon 7."
      ],
      [
        "Cleaves mutant SMN1 mRNA transcripts via RNA-induced silencing complex (RISC) endonuclease activation",
        "SMN1 is already homozygously deleted in SMA patients; therapy aims to rescue expression from the homologous SMN2 gene."
      ],
      [
        "Methylates CpG islands within the SMN2 promoter to relieve transcriptional gene silencing by Polycomb complexes",
        "Promoter CpG methylation represses gene expression; nusinersen acts at the post-transcriptional pre-mRNA splicing level, not on DNA methylation."
      ]
    ],
    "shortestValidSolution": "Floppy infant + tongue fasciculations + SMN1 deletion = Werdnig-Hoffmann (SMA 1). Nusinersen forces EXON 7 INCLUSION in SMN2 pre-mRNA -> stable SMN protein.",
    "necessaryInference": "Map nusinersen antisense mechanism to blocking splicing repressors to force exon 7 inclusion in SMN2 pre-mRNA.",
    "strongestDistractor": "Directly induces exon 7 skipping in SMN1 pre-mRNA to eliminate an upstream premature termination codon",
    "distractorExclusion": "Exon 7 skipping causes the defect in SMN2; nusinersen forces exon 7 INCLUSION in SMN2 to restore functional SMN protein.",
    "citation": "Finkel RS, Mercuri E, Darras BT, et al. Nusinersen versus Sham Control in Infantile-Onset Spinal Muscular Atrophy. N Engl J Med. 2017;377(18):1723-1732. PMID: 29091570.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/pharmacology item on SMA molecular genetics, SMN2 alternative splicing, and nusinersen antisense therapeutics.",
      "distractorExclusionNotes": "Excluded exon skipping (which is the disease mechanism, not therapy) and promoter methylation based on pre-mRNA exon 7 inclusion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0897",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Amyotrophic Lateral Sclerosis C9orf72 Hexanucleotide Repeat and TDP-43 Pathology",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents with progressive asymmetric weakness in his right hand and difficulty turning keys and unbuttoning shirts. Over the past 6 months, he has developed muscle twitching (fasciculations), severe cramps, and slurred speech. Neurological examination reveals a combination of UPPER MOTOR NEURON SIGNS (hyperreflexia, spasticity, bilateral extensor plantar responses / Babinski signs, and pseudobulbar affect) and LOWER MOTOR NEURON SIGNS (atrophy of the right thenar eminence, bilateral tongue fasciculations, and flaccid weakness). His family history is notable for his sister, who developed frontotemporal dementia with behavioral disinhibition at age 52. Genetic testing reveals a massive pathological expansion (> 800 repeats) of a GGGGCC hexanucleotide repeat in the non-coding promoter region of the C9orf72 gene on chromosome 9p21. Which of the following neuropathological hallmarks is universally present in degenerating motor neurons in patients with this genetic abnormality?",
    "choices": [
      [
        "Cytoplasmic ubiquitinated inclusions containing hyperphosphorylated, mislocalized TDP-43 protein",
        "AMYOTROPHIC LATERAL SCLEROSIS (ALS / Lou Gehrig disease) is a fatal neurodegenerative disease characterized by the simultaneous degeneration of both UPPER MOTOR NEURONS (corticospinal tracts -> spasticity, hyperreflexia, Babinski sign) and LOWER MOTOR NEURONS (anterior horn cells and motor cranial nuclei -> flaccid weakness, atrophy, fasciculations). Familial ALS accounts for ~10% of cases, most commonly caused by a GGGGCC HEXANUCLEOTIDE REPEAT EXPANSION in the first intron/promoter of C9orf72 on chromosome 9p21 (which also causes frontotemporal dementia / FTD). Pathologically, over 95% of all ALS cases (including sporadic and C9orf72-linked cases, but excluding SOD1 cases) display SKEIN-LIKE CYTOPLASMIC INCLUSIONS containing hyperphosphorylated, cleaved, and aggregated TDP-43 (TAR DNA-binding protein 43). Normally a nuclear RNA/DNA-binding protein, mutant repeats trigger nuclear clearance of TDP-43 and toxic cytoplasmic aggregation."
      ],
      [
        "Intranuclear eosinophilic inclusions composed of mutant huntingtin protein fragments",
        "Huntingtin inclusions occur in Huntington disease (CAG repeat on chromosome 4), causing chorea and caudate atrophy, not motor neuron disease."
      ],
      [
        "Cytoplasmic Lewy bodies composed of alpha-synuclein within dopaminergic neurons",
        "Alpha-synuclein Lewy bodies occur in Parkinson disease and Lewy body dementia, characterized by resting tremor and rigidity, not combined UMN/LMN disease."
      ],
      [
        "Extracellular plaques containing beta-amyloid surrounded by neurofibrillary tau tangles",
        "Beta-amyloid plaques and hyperphosphorylated tau neurofibrillary tangles characterize Alzheimer disease, not motor neuron degeneration."
      ],
      [
        "Intracellular Bunina bodies containing misfolded copper-zinc superoxide dismutase (SOD1) only",
        "While Bunina bodies occur in ALS, SOD1 mutations account for only ~2% of ALS cases and uniquely lack TDP-43 inclusions; C9orf72-mediated ALS is universally characterized by TDP-43 pathology."
      ]
    ],
    "shortestValidSolution": "Combined UMN + LMN signs + family frontotemporal dementia + C9orf72 repeat = ALS -> cytoplasmic aggregates of phosphorylated TDP-43.",
    "necessaryInference": "Link C9orf72 hexanucleotide repeat expansion in ALS/FTD to pathognomonic cytoplasmic mislocalization and aggregation of TDP-43.",
    "strongestDistractor": "Intracellular Bunina bodies containing misfolded copper-zinc superoxide dismutase (SOD1) only",
    "distractorExclusion": "SOD1 mutations represent a minority of familial ALS cases and do NOT exhibit TDP-43 inclusions; C9orf72-linked ALS is defined by TDP-43 inclusions.",
    "citation": "DeJesus-Hernandez M, Mackenzie IR, Boeve BF, et al. Expanded GGGGCC hexanucleotide repeat in noncoding region of C9ORF72 causes chromosome 9p-linked FTD and ALS. Neuron. 2011;72(2):245-256. PMID: 21944778.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/genetics item on ALS/FTD spectrum, C9orf72 hexanucleotide repeats, and TDP-43 neuropathology.",
      "distractorExclusionNotes": "Excluded Huntingtin, alpha-synuclein (Lewy bodies), and isolated SOD1 based on universal TDP-43 inclusions in C9orf72 ALS.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0898",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Charcot-Marie-Tooth Disease Type 1A PMP22 Duplication Schwann Cell Pathology",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy presents with progressive difficulty walking, frequent ankle sprains, and clumsy gait. Physical examination reveals high-arched rigid feet (pes cavus), bilateral clawing of the toes (hammer toes), symmetrical distal wasting and weakness of the lower legs producing an inverted champagne-bottle ('stork leg') appearance, and palpably enlarged, firm common peroneal nerves at the fibular heads. Sensation to light touch, vibration, and proprioception is diminished in a distal stocking-glove distribution, and deep tendon reflexes are globally absent. Nerve conduction studies demonstrate marked, uniform slowing of motor nerve conduction velocities (median nerve 22 m/s, normal > 50 m/s). Sural nerve biopsy reveals redundant, concentric concentric lamellae of Schwann cell cytoplasmic processes surrounding axon cylinders ('onion-bulb' formations). Genetic testing confirms an autosomal dominant 1.4-megabase duplication on chromosome 17p11.2-p12. Which of the following genes is duplicated in this disorder?",
    "choices": [
      [
        "Peripheral myelin protein 22 (PMP22) gene",
        "CHARCOT-MARIE-TOOTH DISEASE TYPE 1A (CMT1A) is the most common inherited peripheral neuropathy. It is an autosomal dominant demyelinating neuropathy caused by a 1.4-Mb TANDEM DUPLICATION on chromosome 17p11.2 containing the PMP22 GENE (peripheral myelin protein 22). PMP22 is a major integral membrane glycoprotein expressed by myelinating Schwann cells. Overexpression of PMP22 disrupts myelin compaction and Schwann cell differentiation. Cycles of demyelination and failed remyelination produce characteristic concentric concentric layers of Schwann cell processes around demyelinated axons, known histologically as 'ONION-BULB' FORMATIONS. Clinical hallmarks include: (1) Distal symmetric muscle weakness and atrophy ('stork legs'), (2) PES CAVUS and hammer toes, (3) Palpably hypertrophic peripheral nerves, (4) Areflexia, and (5) Markedly slowed nerve conduction velocities. (In contrast, a DELETION of the same PMP22 region causes Hereditary Neuropathy with Liability to Pressure Palsies [HNPP])."
      ],
      [
        "Myelin protein zero (MPZ) gene encoding the major structural adhesive protein",
        "Mutations in MPZ cause CMT Type 1B; CMT1A is caused specifically by PMP22 duplication."
      ],
      [
        "Gap junction beta-1 (GJB1) gene encoding the connexin-32 protein",
        "Mutations in GJB1 cause X-linked Charcot-Marie-Tooth disease (CMTX1), not the classic chromosome 17 duplication of CMT1A."
      ],
      [
        "Mitofusin-2 (MFN2) gene regulating mitochondrial fusion and transport",
        "MFN2 mutations cause CMT Type 2A, which is an axonal (non-demyelinating) neuropathy with normal conduction velocities and axonal loss."
      ],
      [
        "Early growth response 2 (EGR2) zinc-finger myelination transcription factor",
        "EGR2 mutations cause severe congenital hypomyelinating neuropathy (Dejerine-Sottas disease), not the classic 17p11.2 PMP22 duplication."
      ]
    ],
    "shortestValidSolution": "Pes cavus + stork-leg atrophy + onion-bulb Schwann cells + slow conduction = Charcot-Marie-Tooth 1A (PMP22 duplication on chromosome 17p11.2).",
    "necessaryInference": "Map CMT1A, onion-bulb Schwann cell hypertrophy, and 17p11.2 duplication specifically to the PMP22 gene.",
    "strongestDistractor": "Myelin protein zero (MPZ) gene encoding the major structural adhesive protein",
    "distractorExclusion": "MPZ mutations cause CMT1B; the 1.4-Mb duplication on chromosome 17p11.2 specifically involves PMP22 (CMT1A).",
    "citation": "Yuan B et al. Nonrecurrent 17p11.2p12 Rearrangement Events that Result in Two Concomitant Genomic Disorders: The PMP22-RAI1 Contiguous Gene Duplication Syndrome. Am J Hum Genet. PMID: 26544804.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/neurology item on CMT1A, PMP22 gene dosage, and onion-bulb demyelinating Schwann cell histopathology.",
      "distractorExclusionNotes": "Excluded MPZ (CMT1B), GJB1 (CMTX), and MFN2 (axonal CMT2A) based on 17p11.2 duplication and onion-bulb formations.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0899",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Myasthenia Gravis Postsynaptic Acetylcholine Receptor Autoantibodies and MuSK",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman presents with fluctuating horizontal diplopia and bilateral ptosis that worsen progressively toward the end of the day and after prolonged reading. She also notes difficulty chewing tough meat and generalized neck weakness. Physical examination reveals that sustaining upward gaze for 60 seconds elicits worsening bilateral ptosis. Application of an ice pack to the closed eyelids for 2 minutes produces significant temporary improvement in ptosis (positive ice pack test). Deep tendon reflexes are 2+ and symmetrical, and pupillary light reflexes are normal. Contrast-enhanced chest CT reveals an anterior mediastinal mass consistent with a thymoma. Single-fiber electromyography demonstrates increased jitter and blocking. Which of the following pathophysiological mechanisms accounts for neuromuscular transmission failure in this patient?",
    "choices": [
      [
        "Autoantibodies bind postsynaptic nicotinic acetylcholine receptors, cross-linking and internalizing receptors and activating complement-mediated junctional destruction",
        "MYASTHENIA GRAVIS (MG) is an autoimmune neuromuscular junction disorder characterized by FLUCTUATING, FATIGABLE WEAKNESS of ocular, bulbar, and proximal limb muscles. In ~85% of generalized cases, the disease is driven by pathogenic IgG1 and IgG3 AUTOANTIBODIES DIRECTED AGAINST THE POSTSYNAPTIC NICOTINIC ACETYLCHOLINE RECEPTOR (AChR) on the motor end-plate. The antibodies impair neuromuscular transmission through three distinct mechanisms: (1) COMPLEMENT ACTIVATION: Deposition of C5b-9 membrane attack complexes destroys the postsynaptic junctional folds, flattening the end-plate architecture and widening the synaptic cleft; (2) ANTIGENIC MODULATION: Bivalent IgG cross-links adjacent AChRs, accelerating receptor endocytosis and lysosomal degradation; and (3) FUNCTIONAL BLOCKADE: Direct competitive antagonism of the acetylcholine-binding site. The thymus plays a central inductive role (75% have follicular hyperplasia, 15% have thymoma). The ice pack test improves ptosis because cooler temperatures inhibit acetylcholinesterase, prolonging ACh availability."
      ],
      [
        "Autoantibodies bind presynaptic P/Q-type voltage-gated calcium channels preventing acetylcholine vesicle exocytosis",
        "Presynaptic P/Q calcium channel antibodies cause Lambert-Eaton Myasthenic Syndrome (LEMS), characterized by proximal limb weakness, hyporeflexia that improves with exercise, and autonomic symptoms."
      ],
      [
        "Irreversible covalent organophosphate phosphorylation of the acetylcholinesterase active-site serine",
        "Organophosphate poisoning inhibits acetylcholinesterase, producing cholinergic crisis (DUMBBELLS: diarrhea, urination, miosis, bradycardia, fasciculations), not fatigable ptosis."
      ],
      [
        "Autoantibodies target voltage-gated potassium channels in peripheral motor nerve axons",
        "Voltage-gated potassium channel (VGKC / CASPR2 / LGI1) antibodies cause neuromyotonia (Isaacs syndrome) with continuous muscle fiber activity and myokymia."
      ],
      [
        "Cleavage of synaptosome-associated protein 25 (SNAP-25) by zinc metalloprotease exotoxins",
        "SNAP-25 cleavage is the mechanism of botulinum neurotoxin (serotypes A, C, E), causing descending flaccid paralysis with fixed dilated pupils, not myasthenia gravis."
      ]
    ],
    "shortestValidSolution": "Fatigable ptosis/diplopia + ice pack test positive + thymoma = Myasthenia gravis (autoantibodies cross-link & destroy postsynaptic ACh receptors).",
    "necessaryInference": "Map myasthenia gravis to postsynaptic nicotinic AChR complement-mediated destruction and endocytosis (contrast with presynaptic LEMS).",
    "strongestDistractor": "Autoantibodies bind presynaptic P/Q-type voltage-gated calcium channels preventing acetylcholine vesicle exocytosis",
    "distractorExclusion": "Presynaptic P/Q calcium channel antibodies cause LEMS (associated with small cell lung cancer); MG targets POSTSYNAPTIC ACh receptors.",
    "citation": "Gilhus NE. Myasthenia Gravis. N Engl J Med. 2016;375(26):2570-2581. PMID: 28029925.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/neurophysiology item on myasthenia gravis, postsynaptic AChR cross-linking/complement destruction, and ice pack kinetics.",
      "distractorExclusionNotes": "Excluded presynaptic LEMS (P/Q calcium channels) and botulism (SNAP-25) based on postsynaptic AChR pathology and thymoma.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0900",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Lambert-Eaton Presynaptic P-Q Calcium Channels and Exercise Facilitation",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man with a 40-pack-year smoking history presents with progressive proximal leg weakness, difficulty rising from low chairs, dry mouth (xerostomia), and erectile dysfunction. In contrast to myasthenia gravis, he notes that his leg strength actually feels somewhat improved after walking for a few minutes. Physical examination reveals symmetrical proximal lower-extremity weakness (4/4 power in hip flexors and quadriceps) and globally absent patellar and Achilles deep tendon reflexes (0/4). However, when the patient performs maximal voluntary contraction of the quadriceps against resistance for 15 seconds, repeat reflex testing immediately demonstrates robust 2+ patellar reflexes (post-exercise facilitation). Cranial nerve examination reveals no ptosis or diplopia. Repetitive nerve stimulation at high frequency (50 Hz) or post-exercise testing demonstrates an incremental response (> 100% increase in compound muscle action potential amplitude). Chest CT reveals a central, necrotic hilar mass with mediastinal lymphadenopathy. Which of the following molecular targets is directly bound by pathogenic autoantibodies in this disorder?",
    "choices": [
      [
        "Presynaptic P/Q-type voltage-gated calcium channels on motor nerve terminals",
        "LAMBERT-EATON MYASTHENIC SYNDROME (LEMS) is a paraneoplastic autoimmune disorder of neuromuscular transmission, strongly associated with SMALL CELL LUNG CANCER (~50-60% of cases, expressing neural antigens) or autoimmune disease. LEMS is caused by pathogenic IgG autoantibodies against PRESYNAPTIC P/Q-TYPE VOLTAGE-GATED CALCIUM CHANNELS (VGCCs) on motor nerve terminals and autonomic parasympathetic synapses. Binding down-regulates VGCCs, impairing calcium influx in response to an action potential, preventing exocytic release of acetylcholine quanta. Hallmarks include: (1) Proximal limb weakness; (2) Autonomic dysfunction (dry mouth, erectile dysfunction); (3) HYPOREFLEXIA; and (4) POST-EXERCISE FACILITATION (brief maximal contraction allows calcium to accumulate presynaptically, temporarily overcoming the block and transiently augmenting ACh release, seen electrophysiologically as an INCREMENTAL CMAP RESPONSE at high stimulation rates)."
      ],
      [
        "Postsynaptic nicotinic acetylcholine receptors located at the crests of junctional folds",
        "Postsynaptic AChR antibodies cause Myasthenia Gravis, which shows decremental response on repetitive nerve stimulation, normal reflexes, and worsening weakness with exercise."
      ],
      [
        "Postsynaptic muscle-specific kinase (MuSK) regulating acetylcholine receptor clustering",
        "Anti-MuSK antibodies occur in a subset of myasthenia gravis (predominantly facial/bulbar weakness), producing decremental, not incremental, responses."
      ],
      [
        "Presynaptic synaptotagmin-1 acting as the calcium sensor for SNARE complex fusion",
        "Synaptotagmin-1 is the intracellular calcium sensor; LEMS autoantibodies target the extracellular pore of P/Q-type voltage-gated calcium channels."
      ],
      [
        "Ryanodine receptor-1 (RYR1) in the sarcoplasmic reticulum membrane of skeletal myocytes",
        "RYR1 mutations cause Malignant Hyperthermia and central core disease, not paraneoplastic neuromuscular junction failure."
      ]
    ],
    "shortestValidSolution": "Proximal weakness + dry mouth + hyporeflexia that IMPROVES with exercise (post-exercise facilitation) + lung mass = LEMS (antibodies vs presynaptic P/Q Ca2+ channels).",
    "necessaryInference": "Map post-exercise facilitation and autonomic symptoms in a smoker with a lung mass to LEMS antibodies against presynaptic P/Q-type calcium channels.",
    "strongestDistractor": "Postsynaptic nicotinic acetylcholine receptors located at the crests of junctional folds",
    "distractorExclusion": "MG targets postsynaptic AChRs and worsens with exercise; LEMS targets presynaptic P/Q Ca2+ channels and shows post-exercise facilitation.",
    "citation": "Titulaer MJ, Lang B, Verschuuren JJ. Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pathology/neurophysiology item on Lambert-Eaton syndrome, presynaptic P/Q calcium channels, and post-exercise facilitation.",
      "distractorExclusionNotes": "Excluded postsynaptic AChR (MG) and MuSK based on presynaptic VGCC antibodies, incremental response, and autonomic xerostomia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
