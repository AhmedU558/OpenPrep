import json

items_b18_rest = [
  {
    "code": "op-c-s1-0431",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Pneumoconioses: Silicosis",
    "subtopic": "Macrophage Phagolysosome Rupture and Eggshell Hilar Calcifications",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man who worked for 25 years as a sandblaster and granite cutter presents with progressive exertional dyspnea and a mild dry cough. Chest radiography reveals multiple rounded, nodular opacities measuring 2 to 5 mm, localized predominantly to the upper lung zones bilaterally, accompanied by thin, peripheral calcification of the rim of hilar lymph nodes ('eggshell calcification'). Sputum evaluation is negative for acid-fast bacilli. Which of the following cellular events directly triggers the chronic pulmonary fibrotic reaction in this condition?",
    "choices": [
      [
        "Engulfment of crystalline particles by alveolar macrophages causing phagolysosomal membrane destabilization, activation of the NLRP3 inflammasome, and release of IL-1beta and TNF-alpha",
        "Silicosis results from chronic inhalation of crystalline silica (quartz), commonly encountered in sandblasting, quarrying, and mining. Small respirable particles (< 5 micrometers) reach the terminal bronchioles and alveoli where they are engulfed by alveolar macrophages. Unlike inert particulates, crystalline silica cannot be enzymatically degraded; instead, the sharp crystalline surfaces interact directly with phagolysosomal membranes, causing PHAGOLYSOSOMAL MEMBRANE DESTABILIZATION and rupture. Lysosomal enzymes leak into the cytoplasm, and cytoplasmic sensors trigger assembly of the NLRP3 INFLAMMASOME. This leads to caspase-1 activation and massive secretion of potent pro-inflammatory and pro-fibrotic cytokines, particularly INTERLEUKIN-1BETA (IL-1beta), TNF-alpha, and PDGF. Macrophage lysis releases the intact silica particles back into the interstitium to be re-engulfed by neighboring macrophages, propagating a chronic cycle of macrophage death, fibroblast proliferation, and collagen deposition forming pathognomonic concentrically laminated silicotic nodules with polarized birefringent particles."
      ],
      [
        "Generation of asbestos-induced hydroxyl free radicals catalyzed by high endogenous iron content leading to malignant mesothelial transformation",
        "Asbestos exposure produces iron-coated ferruginous bodies and pleural plaques in lower lobes, predisposing to mesothelioma, not upper-lobe silicotic nodules with eggshell calcification."
      ],
      [
        "CD4+ Th1 cell-mediated delayed-type hypersensitivity reaction forming noncaseating granulomas in response to HLA-DPB1-bound metallic antigens",
        "Berylliosis is characterized by CD4+ Th1 noncaseating granulomas linked to HLA-DPB1 Glu69, resembling sarcoidosis rather than laminated hyaline silicotic nodules."
      ],
      [
        "Precipitin-mediated immune complex deposition in interalveolar septa activating the classical complement cascade following organic mold inhalation",
        "Immune complex (Type III) deposition occurs in acute hypersensitivity pneumonitis (e.g., farmer's lung), not inorganic silica mineral exposure."
      ],
      [
        "Excessive lysosomal storage of glucocerebroside within histiocytes resulting from inherited glucocerebrosidase deficiency",
        "Gaucher disease causes lysosomal glucocerebroside accumulation in histiocytes ('crinkled tissue paper' cytoplasm) with hepatosplenomegaly, not pneumoconiosis."
      ]
    ],
    "shortestValidSolution": "Inhaled crystalline silica disrupts macrophage phagolysosomes -> activates NLRP3 inflammasome -> IL-1beta and TNF-alpha release drive upper-lobe fibrotic nodules and eggshell calcifications.",
    "necessaryInference": "Identify silica-induced macrophage phagolysosome membrane destabilization and NLRP3 inflammasome activation as the initiating molecular mechanism of silicosis.",
    "strongestDistractor": "CD4+ Th1 cell-mediated delayed-type hypersensitivity reaction forming noncaseating granulomas in response to HLA-DPB1-bound metallic antigens",
    "distractorExclusion": "Berylliosis produces noncaseating granulomas via HLA-DPB1 Th1 immunity; silicosis produces concentric fibrotic nodules through macrophage lysis and NLRP3 activation.",
    "citation": "Mossman BT, Churg A. Mechanisms in the pathogenesis of asbestosis and silicosis. Am J Respir Crit Care Med. 1998;157(5 Pt 1):1666-1680. PMID: 9603153.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates cellular mechanism of silicosis (NLRP3 inflammasome, phagolysosomal rupture) and radiographic features (upper lobe nodules, eggshell calcification).",
      "distractorExclusionNotes": "Distractors distinguish asbestosis (hydroxyl radicals/iron), berylliosis (HLA-DPB1 granulomas), and hypersensitivity pneumonitis (immune complexes).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0432",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Pneumoconioses: Asbestosis and Mesothelioma",
    "subtopic": "Ferruginous Bodies, Pleural Plaques, and BAP1 Inactivation",
    "provisionalDifficulty": 5,
    "stem": "A 69-year-old retired shipyard worker and insulator presents with worsening exertional dyspnea, left-sided non-pleuritic dull chest pain, and 8-kg unintentional weight loss over 4 months. Chest computed tomography reveals extensive, nodular, circumferential pleural thickening encasing the entire left hemithorax with contraction of the left hemithorax and a large ipsilateral hemorrhagic pleural effusion. In addition, bilateral dense calcified plaques are noted along the posterolateral parietal pleura and diaphragmatic domes. Thoracoscopic pleural biopsy demonstrates an invasive malignancy composed of polygonal cells forming tubulopapillary structures that stain strongly positive for calretinin, cytokeratin 5/6, and WT-1, with homozygous deletion of CDKN2A and loss of BAP1 nuclear expression. Which of the following microscopic findings in the lung parenchyma is most characteristic of prior exposure to the causative mineral fiber?",
    "choices": [
      [
        "Golden-brown, translucent, dumbbell-shaped beaded fiber cores coated with iron-protein complexes that stain intensely blue with Prussian blue",
        "This patient has MALIGNANT MESOTHELIOMA arising in the setting of chronic asbestos exposure (shipyard worker, insulator, pipefitter). The presence of bilateral diaphragmatic calcified pleural plaques is the most specific radiological marker of prior asbestos exposure. Asbestos fibers (particularly amphibole serpentine fibers) penetrate deep into the lower lung parenchyma. Alveolar macrophages attempt to phagocytose these long, non-cleared fibers, coating them with a mixture of ferritin, hemosiderin, and mucopolysaccharides to form ASBESTOS BODIES (FERRUGINOUS BODIES). Histologically, they appear as golden-brown, translucent, beaded or dumbbell-shaped rods that stain intensely Prussian blue (Perls' acid ferrocyanide) due to their high iron content. Mesothelioma typically presents decades after exposure with circumferential pleural encasement, hemorrhagic effusion, and characteristic immunohistochemistry (calretinin+, CK5/6+, WT1+) with loss of BAP1 (BRCA1-associated protein 1) and CDKN2A deletion."
      ],
      [
        "Polarized light examination showing brightly birefringent needle-shaped silica crystals within concentric whorls of dense collagenous hyaline tissue",
        "Whorled hyaline nodules containing birefringent crystals are silicotic nodules, which occur predominantly in upper lung fields without pleural encasement."
      ],
      [
        "Noncaseating epithelioid granulomas containing asteroid bodies and Schaumann bodies within mediastinal lymph nodes and peribronchovascular interstitium",
        "Noncaseating granulomas with Schaumann and asteroid bodies characterize sarcoidosis or chronic berylliosis, which lack asbestos bodies and pleural plaques."
      ],
      [
        "Intra-alveolar accumulation of acellular, periodic acid-Schiff-positive, lipoproteinaceous surfactant-derived granular material",
        "PAS-positive granular lipoproteinaceous material in alveoli describes pulmonary alveolar proteinosis (PAP), caused by anti-GM-CSF autoantibodies."
      ],
      [
        "Extensive intra-alveolar sheets of lipid-laden foamy macrophages intermixed with cholesterol clefts secondary to chronic bronchial obstruction",
        "Endogenous lipoid pneumonia ('golden pneumonia') shows foamy macrophages distal to an obstructing bronchial neoplasm, not ferruginous bodies."
      ]
    ],
    "shortestValidSolution": "Shipyard worker + diaphragmatic pleural plaques + calretinin+ pleural encasement = mesothelioma from asbestos -> ferruginous bodies (golden-brown beaded rods coated with iron, Prussian blue+).",
    "necessaryInference": "Recognize mesothelioma and bilateral diaphragmatic plaques as signs of asbestos exposure, and identify ferruginous bodies (iron-protein coated dumbbell fibers) as the microscopic marker.",
    "strongestDistractor": "Polarized light examination showing brightly birefringent needle-shaped silica crystals within concentric whorls of dense collagenous hyaline tissue",
    "distractorExclusion": "Silica particles are birefringent in whorled nodules; asbestos bodies are golden-brown, beaded, iron-coated fibers that stain with Prussian blue.",
    "citation": "Carbone M, et al. Malignant mesothelioma: facts, myths, and hypotheses. J Cell Physiol. 2012;227(1):44-58. PMID: 21465472.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Synthesizes clinical exposure history (shipyard), radiographic hallmark (calcified diaphragmatic plaques), tumor genetics (BAP1, calretinin), and microscopic morphology (ferruginous bodies).",
      "distractorExclusionNotes": "Distractors feature alternative classic pulmonary histologies: silicosis (whorls), sarcoidosis (Schaumann bodies), PAP (lipoproteinaceous PAS+), lipoid pneumonia.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0433",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Respiratory",
    "topic": "Pneumoconioses: Chronic Berylliosis",
    "subtopic": "HLA-DPB1 Glu69 Genetic Susceptibility and Th1 Cell-Mediated Hypersensitivity",
    "provisionalDifficulty": 5,
    "stem": "A 43-year-old aerospace engineer who manufactures beryllium-copper alloy guidance components for rocket propulsion systems presents with an 8-month history of progressive exertional dyspnea, fatigue, and dry cough. High-resolution chest CT reveals bilateral hilar lymphadenopathy and ill-defined peribronchovascular micronodules with ground-glass opacities. Transbronchial lung biopsy demonstrates noncaseating epithelioid granulomas with multinucleated giant cells and a prominent lymphocytic infiltrate. Bronchoalveolar lavage shows marked lymphocytosis (42% lymphocytes) with a CD4:CD8 ratio of 6.2. Proliferation of patient peripheral blood mononuclear cells when incubated in vitro with beryllium sulfate is strongly positive. Which of the following immunogenetic factors confers the strongest susceptibility to developing this cell-mediated immune response?",
    "choices": [
      [
        "Presence of a negatively charged glutamic acid residue at position 69 of the HLA-DPB1 beta-chain (HLA-DPB1 Glu69)",
        "Chronic Beryllium Disease (CBD, berylliosis) is an occupational granulomatous lung disease occurring in individuals exposed to beryllium metal or alloys (aerospace, defense, semiconductor, nuclear industries). CBD is an antigen-specific cell-mediated (Type IV) delayed-type hypersensitivity reaction: (1) Beryllium acts as a hapten that coordinates with endogenous peptides and binds to human leukocyte antigen (HLA) class II molecules on antigen-presenting cells. (2) Molecular genetic studies demonstrate that susceptibility is strongly linked to specific MHC Class II alleles, most notably HLA-DPB1 possessing a glutamic acid at amino acid position 69 (HLA-DPB1 Glu69). The negative charge of Glu69 alters the electrostatic potential of the antigen-binding groove, allowing divalent beryllium cations (Be2+) to coordinate with high affinity. (3) APCs present beryllium to CD4+ T helper 1 (Th1) cells, inducing clonal expansion, interferon-gamma (IFN-gamma) and IL-2 secretion, and macrophage activation to form noncaseating epithelioid granulomas indistinguishable histologically from sarcoidosis. The beryllium lymphocyte proliferation test (BeLPT) confirms sensitization."
      ],
      [
        "Inherited homozygous loss-of-function mutation in the cystic fibrosis transmembrane conductance regulator (CFTR)",
        "CFTR mutations cause defective chloride and bicarbonate transport in cystic fibrosis with bronchiectasis and Pseudomonas infections, not beryllium-specific granulomas."
      ],
      [
        "Homozygous inheritance of the HLA-B27 major histocompatibility complex class I allele",
        "HLA-B27 is an MHC class I allele associated with seronegative spondyloarthropathies (ankylosing spondylitis, reactive arthritis), not beryllium hypersensitivity."
      ],
      [
        "Inactivating mutations in the NADPH oxidase CYBB gene impairing generation of superoxide radicals",
        "CYBB mutations cause X-linked chronic granulomatous disease (CGD), presenting with recurrent catalase-positive bacterial and fungal infections, not alloy-induced pneumoconiosis."
      ],
      [
        "Heterozygous mutation in the bone morphogenetic protein receptor type 2 (BMPR2) gene",
        "BMPR2 mutations cause heritable pulmonary arterial hypertension via vascular smooth muscle hyperplasia, not immunogenic granuloma formation."
      ]
    ],
    "shortestValidSolution": "Aerospace alloy exposure + noncaseating granulomas + positive beryllium lymphocyte proliferation = chronic berylliosis -> strongly associated with HLA-DPB1 Glu69.",
    "necessaryInference": "Link aerospace beryllium exposure and noncaseating granulomas to the specific immunogenetic susceptibility marker HLA-DPB1 Glu69.",
    "strongestDistractor": "Homozygous inheritance of the HLA-B27 major histocompatibility complex class I allele",
    "distractorExclusion": "HLA-B27 is linked to spondyloarthropathies; berylliosis requires the MHC Class II allele HLA-DPB1 Glu69 to coordinate Be2+ cations.",
    "citation": "Fontenot AP, et al. Beryllium presentation to CD4+ T cells associated with disease susceptibility alleles. J Immunol. 2000;165(2):1017-1023. PMID: 10878381.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates occupational exposure (aerospace alloys), clinical presentation (sarcoid-like granulomas), and immunogenetics (HLA-DPB1 Glu69 electrostatic binding pocket).",
      "distractorExclusionNotes": "Distractors test high-yield genetic markers of unrelated pulmonary/rheumatologic conditions (CFTR, HLA-B27, CYBB, BMPR2).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0434",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Respiratory",
    "topic": "Hypersensitivity Pneumonitis",
    "subtopic": "Mixed Type III/IV Hypersensitivity and Bronchoalveolar Lavage CD4:CD8 Ratio Inversion",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old dairy farmer presents with recurrent episodes of chills, fever, non-productive cough, and severe dyspnea that develop approximately 5 to 6 hours after he enters his barn to pitch moldy hay. The symptoms typically subside over 24 to 48 hours following removal from the barn. Physical examination during an acute episode demonstrates tachypnea, diffuse inspiratory fine crackles, and mild cyanosis. High-resolution chest CT shows centrilobular ground-glass nodules with mosaic attenuation reflecting air trapping. Serum precipitins against Saccharopolyspora rectivirgula are positive. Bronchoalveolar lavage (BAL) is performed. Which of the following findings on BAL fluid analysis is most characteristic of this immune disorder?",
    "choices": [
      [
        "Marked lymphocytosis (> 40-50%) with an inverted CD4+ to CD8+ T-cell ratio (CD4:CD8 < 1.0, typically 0.5 to 0.8)",
        "Hypersensitivity Pneumonitis (HP, extrinsic allergic alveolitis; e.g., 'farmer's lung' triggered by thermophilic actinomycetes like Saccharopolyspora rectivirgula in moldy hay) is an immunologically mediated inflammatory lung disease resulting from repeated inhalation of finely dispersed organic antigens: (1) Pathophysiology involves a COMBINED TYPE III (immune complex) and TYPE IV (delayed-type cell-mediated) hypersensitivity response. During acute exposure, high levels of inhaled antigen bind specific IgG antibodies, forming immune complexes (serum precipitins) that activate complement and recruit neutrophils. (2) With subacute and chronic exposure, antigen-presenting cells stimulate CD8+ and CD4+ T cells, recruiting activated cytotoxic T cells and producing noncaseating, poorly formed interstitial granulomas. (3) A critical diagnostic feature distinguishing HP from sarcoidosis is BRONCHOALVEOLAR LAVAGE (BAL) CYTOLOGY: HP produces extreme lymphocytosis (often > 50% lymphocytes) characterized by a PREPONDERANCE OF CD8+ CYTOTOXIC T CELLS, resulting in an INVERTED CD4:CD8 RATIO (typically < 1.0). In sharp contrast, sarcoidosis produces an elevated CD4:CD8 ratio (> 3.5 to 4.0)."
      ],
      [
        "Pronounced CD4+ helper T-cell lymphocytosis yielding a markedly elevated CD4:CD8 ratio (> 3.5)",
        "An elevated CD4:CD8 ratio (> 3.5) on BAL is the hallmark of pulmonary SARCOIDOSIS, whereas hypersensitivity pneumonitis characteristically displays an inverted ratio (< 1.0)."
      ],
      [
        "Predominance of degenerate neutrophils (> 80%) with intracellular Gram-positive diplococci",
        "Neutrophilic predominance with bacteria indicates acute bacterial pneumonia, not an immune-mediated hypersensitivity reaction to moldy hay antigens."
      ],
      [
        "Abundant lipid-laden foamy macrophages staining intensely with Oil Red O and Sudan black",
        "Lipid-laden macrophages on Oil Red O indicate exogenous lipoid pneumonia (mineral oil aspiration) or chronic gastroesophageal reflux microaspiration."
      ],
      [
        "Eosinophil count exceeding 40% with Charcot-Leyden crystals and elevated serum IgE",
        "BAL eosinophilia > 40% characterizes acute or chronic eosinophilic pneumonia or allergic bronchopulmonary aspergillosis (ABPA), not hypersensitivity pneumonitis."
      ]
    ],
    "shortestValidSolution": "Recurrent fever/dyspnea 4-8 h after moldy hay + precipitins = Farmer's lung (hypersensitivity pneumonitis) -> BAL shows marked lymphocytosis with inverted CD4:CD8 ratio (< 1.0).",
    "necessaryInference": "Contrast hypersensitivity pneumonitis (inverted BAL CD4:CD8 < 1 due to CD8+ predominance) with sarcoidosis (high CD4:CD8 > 3.5).",
    "strongestDistractor": "Pronounced CD4+ helper T-cell lymphocytosis yielding a markedly elevated CD4:CD8 ratio (> 3.5)",
    "distractorExclusion": "High CD4:CD8 (> 3.5) defines sarcoidosis; hypersensitivity pneumonitis is characterized by CD8+ cytotoxic T-cell influx with CD4:CD8 < 1.0.",
    "citation": "Raghu G, et al. Diagnosis of hypersensitivity pneumonitis: an official ATS/JRS/ALAT clinical practice guideline. Am J Respir Crit Care Med. 2020;202(3):e36-e69. PMID: 32706312.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical differentiation between two common granulomatous/interstitial lung diseases (hypersensitivity pneumonitis vs sarcoidosis) using BAL T-cell subsets.",
      "distractorExclusionNotes": "Directly targets the classic trap of confusing sarcoidosis BAL (elevated CD4:CD8) with HP BAL (inverted CD4:CD8 < 1).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0435",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Respiratory",
    "topic": "Neonatal Respiratory Distress Syndrome (NRDS)",
    "subtopic": "Type II Pneumocyte Dipalmitoylphosphatidylcholine (DPPC) Deficiency and Alveolar Surface Tension",
    "provisionalDifficulty": 5,
    "stem": "A male infant is born at 28 weeks of gestation via emergent cesarean delivery due to placental abruption. Within 15 minutes of birth, he exhibits tachypnea (respiratory rate 82/min), prominent intercostal and subcostal retractions, nasal flaring, and an audible expiratory grunt. Chest radiography demonstrates diffuse, bilateral, uniform 'ground-glass' reticulogranular opacities with prominent air bronchograms and low lung volumes. Arterial blood gas on room air shows pH 7.18, PaCO2 64 mm Hg, and PaO2 38 mm Hg. The primary underlying pathophysiology involves a critical developmental deficiency of a specialized surface-active phospholipid synthesized and stored within cytoplasmic lamellar bodies of alveolar epithelial cells. Which of the following represents the major biochemical component of this substance, and what physical effect does it produce at the alveolar air-liquid interface?",
    "choices": [
      [
        "Dipalmitoylphosphatidylcholine (DPPC); disrupts intermolecular hydrogen bonding between water molecules to reduce surface tension and prevent alveolar collapse at low lung volumes",
        "Neonatal Respiratory Distress Syndrome (NRDS, hyaline membrane disease) is caused by pulmonary surfactant deficiency in premature infants (< 32 weeks gestation; mature surfactant production surges after 34-35 weeks under the influence of fetal cortisol). (1) Surfactant is synthesized and secreted by TYPE II ALVEOLAR PNEUMOCYTES and stored in concentric membranous organelles called LAMELLAR BODIES. (2) The major active lipid component of surfactant (comprising ~70-80% of surfactant phospholipids) is DIPALMITOYLPHOSPHATIDYLCHOLINE (DPPC, also known as lecithin). DPPC possesses two saturated 16-carbon palmitic acid chains and a hydrophilic choline head. (3) MECHANISM: According to the Law of Laplace (P = 2T / r, where P is collapsing pressure, T is surface tension, and r is alveolar radius), smaller alveoli have an inherently higher collapsing pressure than larger alveoli. Surfactant molecules align at the air-liquid interface; the hydrophobic palmitate tails point into the alveolar airspace while the polar choline heads insert into the liquid hypophase, DISRUPTING INTERMOLECULAR HYDROGEN BONDS between water molecules. This dramatically LOWERS ALVEOLAR SURFACE TENSION (T), decreasing collapsing pressure (P), equalizing pressures across alveoli of different sizes, preventing end-expiratory atelectasis, and increasing pulmonary compliance."
      ],
      [
        "Sphingomyelin; cross-links type IV collagen molecules in the epithelial basement membrane to withstand peak inspiratory stretching forces",
        "Sphingomyelin remains relatively constant throughout gestation and serves as a reference standard in the lecithin/sphingomyelin (L/S) ratio (> 2.0 indicates fetal lung maturity); it is not the active surface tension-reducing agent."
      ],
      [
        "Phosphatidylglycerol; covalently binds fibrin monomers to prevent leakage of high-molecular-weight plasma proteins into alveolar lumens",
        "Phosphatidylglycerol is a minor surfactant component indicating late maturity, but it does not bind fibrin to prevent plasma leakage."
      ],
      [
        "Glycosaminoglycan hyaluronan; forms a hyperosmolar gel in the interstitial space that draws alveolar fluid into pulmonary lymphatic vessels",
        "Hyaluronan is an extracellular matrix glycosaminoglycan that binds water in connective tissue, not an alveolar surfactant component."
      ],
      [
        "Alpha-1 antitrypsin; inhibits neutrophil elastase to prevent proteolytic destruction of alveolar elastin fibers during mechanical ventilation",
        "Alpha-1 antitrypsin is a circulating serpin antiprotease synthesized by hepatocytes, not an alveolar phospholipid that lowers surface tension."
      ]
    ],
    "shortestValidSolution": "Prematurity + ground-glass reticulogranular infiltrates + expiratory grunting = NRDS -> deficiency of dipalmitoylphosphatidylcholine (DPPC) synthesized by type II pneumocytes, which disrupts water hydrogen bonding to lower surface tension.",
    "necessaryInference": "Identify DPPC as the primary surface-active phospholipid of surfactant and describe its physical mechanism via the Law of Laplace (reducing surface tension to prevent end-expiratory collapse).",
    "strongestDistractor": "Sphingomyelin; cross-links type IV collagen molecules in the epithelial basement membrane to withstand peak inspiratory stretching forces",
    "distractorExclusion": "Sphingomyelin is a constant reference phospholipid in amniotic fluid, not the active tension-lowering phospholipid; DPPC (lecithin) is the primary active agent.",
    "citation": "Whitsett JA, et al. Alveolar surfactant homeostasis and the pathogenesis of pulmonary disease. Annu Rev Med. 2010;61:105-119. PMID: 20059333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular biochemistry and biophysics question linking type II pneumocyte lamellar bodies, DPPC structure, and the Law of Laplace.",
      "distractorExclusionNotes": "Distractors target related neonatology concepts (sphingomyelin/amniotic ratio, phosphatidylglycerol, hyaluronan, AAT).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  }
]

print(f"Loaded {len(items_b18_rest)} base items.")
