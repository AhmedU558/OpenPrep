import sys
items_b18 = [
  {
    "code": "op-c-s1-0426",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Alveolar Gas Equation and A-a Oxygen Gradient",
    "subtopic": "Distinguishing Hypoventilation from V/Q Mismatch and Diffusion Impairment",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old man is brought to the emergency department by friends after being found obtunded in his apartment with several empty prescription bottles nearby. On arrival, he is somnolent and arousable only to vigorous noxious stimuli. Vital signs show blood pressure 110/68 mm Hg, heart rate 64/min, respiratory rate 6/min, and oxygen saturation 84% while breathing ambient room air at sea level (barometric pressure 760 mm Hg; water vapor pressure 47 mm Hg; respiratory quotient 0.8). Physical examination reveals pinpoint pupils (1.5 mm) and shallow, symmetric respirations with clear breath sounds bilaterally. Arterial blood gas on room air demonstrates:\n- pH: 7.22\n- PaCO2: 68 mm Hg\n- PaO2: 54 mm Hg\n- HCO3-: 26 mEq/L\n\nWhich of the following is the calculated alveolar-arterial (A-a) oxygen gradient in this patient, and what is the primary pathophysiological mechanism responsible for his hypoxemia?",
    "choices": [
      [
        "A-a gradient = 11 mm Hg (normal); pure alveolar hypoventilation due to central respiratory depression",
        "The evaluation of arterial hypoxemia (low PaO2) requires calculating the alveolar-arterial (A-a) oxygen gradient to differentiate alveolar hypoventilation/high altitude (normal A-a gradient, typically < 15 mm Hg in young adults) from intrinsic pulmonary parenchymal or vascular pathology (elevated A-a gradient: V/Q mismatch, diffusion defect, right-to-left shunt). \n\n1. Calculate alveolar oxygen tension (PAO2) using the Alveolar Gas Equation: \nPAO2 = [FiO2 * (P_atm - P_H2O)] - (PaCO2 / R) \nAt room air at sea level: FiO2 = 0.21, P_atm = 760 mm Hg, P_H2O = 47 mm Hg, R = 0.8. \nPAO2 = [0.21 * (760 - 47)] - (68 / 0.8) \nPAO2 = [0.21 * 713] - 85 = 149.7 - 85 = 64.7 mm Hg (approximately 65 mm Hg). \n\n2. Calculate the A-a gradient: \nA-a gradient = PAO2 - PaO2 = 65 - 54 = 11 mm Hg. \n\nAn A-a gradient of 11 mm Hg is completely normal (normal expected A-a gradient is roughly [Age/4] + 4, or < 15 mm Hg in a 23-year-old). This normal gradient confirms that there is NO intrinsic lung parenchymal disease, V/Q mismatch, or shunt; the hypoxemia and respiratory acidosis are entirely explained by PURE ALVEOLAR HYPOVENTILATION secondary to acute opioid-induced central respiratory depression."
      ],
      [
        "A-a gradient = 31 mm Hg (elevated); severe ventilation-perfusion mismatch secondary to microatelectasis",
        "Calculated by incorrectly omitting water vapor pressure or using an incorrect respiratory quotient; the true A-a gradient is 11 mm Hg (normal)."
      ],
      [
        "A-a gradient = 46 mm Hg (elevated); diffusion impairment across the alveolar-capillary membrane",
        "Calculated by confusing inspired PO2 (150 mm Hg) with alveolar PO2 without subtracting PaCO2 / R; alveolar PO2 is ~65 mm Hg, yielding a normal gradient."
      ],
      [
        "A-a gradient = 5 mm Hg (normal); physiological right-to-left intrapulmonary vascular shunt",
        "Intrapulmonary shunting produces a severely elevated A-a gradient refractory to oxygen, not a normal gradient."
      ],
      [
        "A-a gradient = 24 mm Hg (elevated); impaired oxygen carrying capacity due to acute methemoglobinemia",
        "Methemoglobinemia does not alter PaO2 or alveolar PAO2, and the math for A-a gradient calculation is incorrect."
      ]
    ],
    "shortestValidSolution": "PAO2 = 150 - (68 / 0.8) = 150 - 85 = 65 mm Hg. A-a gradient = PAO2 - PaO2 = 65 - 54 = 11 mm Hg (normal) -> pure hypoventilation from opioid overdose.",
    "necessaryInference": "Apply the Alveolar Gas Equation to calculate PAO2, deduce a normal A-a gradient (11 mm Hg), and identify pure central hypoventilation as the cause of hypoxemia.",
    "strongestDistractor": "A-a gradient = 46 mm Hg (elevated); diffusion impairment across the alveolar-capillary membrane",
    "distractorExclusion": "46 mm Hg is obtained if the learner fails to correct for PaCO2/R (150 - 54 = 96); proper formula yields PAO2 = 65 and A-a = 11 mm Hg.",
    "citation": "West JB, Luks AM. West's Respiratory Physiology: The Essentials. 11th ed. Wolters Kluwer; 2021:65-78. NLM ID: 101777265.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield quantitative respiratory physiology item requiring actual two-step calculation of PAO2 and A-a gradient from raw ABG values.",
      "distractorExclusionNotes": "Distractors reflect classic arithmetic pitfalls (omitting vapor pressure, omitting PaCO2/R) and incorrect pathophysiological mechanisms.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0427",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Pulmonary Function Testing Flow-Volume Loops",
    "subtopic": "Variable Extrathoracic Upper Airway Obstruction Mechanics",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman presents to the pulmonary clinic with exertional dyspnea, intermittent hoarseness, and a harsh, high-pitched inspiratory sound audible over the anterior neck when exercising. She was treated for asthma with high-dose inhaled corticosteroids and long-acting beta-agonists for 6 months without any symptomatic relief. Physical examination is unremarkable at rest, but deep, rapid breathing elicits inspiratory stridor over the larynx, while lung bases are clear. Spirometry and flow-volume loop analysis demonstrate: \n- FEV1: 82% of predicted\n- FVC: 86% of predicted\n- FEV1/FVC ratio: 0.80 (normal)\n\nThe flow-volume loop demonstrates a normal, intact triangular expiratory curve with preserved peak expiratory flow, but marked, reproducible plateau-like flattening of the entire inspiratory loop with a severely depressed peak inspiratory flow rate. Which of the following conditions is most consistent with this physiological flow-volume pattern?",
    "choices": [
      [
        "Paradoxical vocal cord adduction during inspiration (variable extrathoracic upper airway obstruction)",
        "Flow-volume loop morphology is diagnostic for upper airway obstruction patterns based on lesion location and mobility: (1) VARIABLE EXTRATHORACIC OBSTRUCTION (e.g., vocal cord dysfunction/paradoxical vocal fold motion, unilateral vocal cord paralysis, laryngeal edema): During INSPIRATION, intratracheal pressure inside the extrathoracic airway becomes negative relative to surrounding atmospheric pressure, causing the mobile/narrowed extrathoracic airway to collapse inward. This selectively flattens and truncates the INSPIRATORY limb of the flow-volume loop, while EXPIRATION is normal (positive airway pressure pushes the obstruction outward). (2) VARIABLE INTRATHORACIC OBSTRUCTION (e.g., tracheomalacia, dynamic intrathoracic tracheal mass): During EXPIRATION, positive pleural pressure exceeds airway pressure, collapsing the intrathoracic airway and flattening the EXPIRATORY loop, while inspiration is normal. (3) FIXED OBSTRUCTION (e.g., tracheal stenosis from prior intubation, thyroid goiter): Both inspiratory and expiratory limbs are symmetrically flattened."
      ],
      [
        "Dynamic intrathoracic tracheal collapse during forced expiration (variable intrathoracic obstruction)",
        "Variable intrathoracic obstruction selectively flattens the EXPIRATORY loop (due to elevated pleural pressure compressing the intrathoracic airway), while inspiration is normal."
      ],
      [
        "Fibrotic circumferential tracheal stenosis from prolonged endotracheal intubation (fixed upper airway obstruction)",
        "Fixed upper airway obstruction flattens BOTH the inspiratory and expiratory limbs symmetrically."
      ],
      [
        "Severe small-airway bronchoconstriction with dynamic air trapping (diffuse obstructive lung disease)",
        "Small-airway obstruction (asthma, COPD) produces an 'effort-independent' scooped-out (coved) expiratory curve with preserved inspiratory loop and low FEV1/FVC ratio."
      ],
      [
        "Advanced idiopathic pulmonary fibrosis with architectural distortion (diffuse restrictive lung disease)",
        "Restrictive parenchymal disease produces a miniaturized 'witch's hat' loop with normal shape, preserved or high FEV1/FVC, and symmetric volume reduction, not isolated inspiratory flattening."
      ]
    ],
    "shortestValidSolution": "Isolated flattening of the inspiratory limb with normal expiratory curve on flow-volume loop = variable extrathoracic obstruction (e.g., vocal cord dysfunction).",
    "necessaryInference": "Interpret flow-volume loop dynamics: negative extrathoracic inspiratory transmural pressure collapses mobile upper airway lesions, isolating flow limitation to inspiration.",
    "strongestDistractor": "Fibrotic circumferential tracheal stenosis from prolonged endotracheal intubation (fixed upper airway obstruction)",
    "distractorExclusion": "Fixed stenosis impairs both inspiratory and expiratory flows symmetrically; isolated inspiratory flattening defines variable extrathoracic lesions.",
    "citation": "Miller RD, Hyatt RE. Evaluation of obstructing lesions of the trachea and larynx by flow-volume loops. Am Rev Respir Dis. 1973;108(3):475-481. PMID: 4728508.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests physiological discrimination of flow-volume loop morphology based on transmural airway pressure dynamics (variable extrathoracic vs intrathoracic vs fixed).",
      "distractorExclusionNotes": "Distractors represent classic alternative loop patterns: variable intrathoracic (expiratory flattening), fixed (dual flattening), asthma (coving), fibrosis (miniaturized).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0428",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Diffusing Capacity of the Lung for Carbon Monoxide (DLCO)",
    "subtopic": "Differentiating Emphysema, Chronic Bronchitis, and Asthma",
    "provisionalDifficulty": 4,
    "stem": "Three 55-year-old men with long-standing cigarette smoking histories present to a respiratory physiology laboratory for comprehensive pulmonary function testing. All three patients demonstrate an obstructive ventilatory defect with a post-bronchodilator FEV1/FVC ratio < 0.70. \n- Patient 1: FEV1/FVC 0.58, Total Lung Capacity (TLC) 124% of predicted, Residual Volume (RV) 165% of predicted, DLCO 42% of predicted.\n- Patient 2: FEV1/FVC 0.62, TLC 102% of predicted, RV 118% of predicted, DLCO 98% of predicted.\n- Patient 3: FEV1/FVC 0.64, TLC 105% of predicted, RV 115% of predicted, DLCO 125% of predicted.\n\nWhich of the following clinical diagnoses is most accurately assigned to Patient 1, Patient 2, and Patient 3 based on their diffusing capacity (DLCO) and lung volume profiles?",
    "choices": [
      [
        "Patient 1: Pulmonary emphysema; Patient 2: Chronic bronchitis; Patient 3: Bronchial asthma",
        "Diffusing capacity of the lung for carbon monoxide (DLCO) measures gas transfer across the alveolar-capillary membrane and is the definitive physiological discriminator among obstructive lung diseases: (1) PULMONARY EMPHYSEMA (Patient 1): Proteolytic destruction of interalveolar septa and capillary beds reduces total surface area for gas diffusion, leading to a CHARACTERISTICALLY LOW DLCO (< 60%). Hyperinflation (elevated TLC) and severe air trapping (elevated RV) are prominent. (2) CHRONIC BRONCHITIS (Patient 2): Pathologic narrowing, mucus hypersecretion, and inflammation are confined to conducting airways, while the underlying alveolar architecture and capillary bed remain intact. Therefore, DLCO IS TYPICALLY NORMAL (80-100%). (3) BRONCHIAL ASTHMA (Patient 3): Airway hyperreactivity and smooth muscle hypertrophy cause reversible obstruction, but increased pulmonary capillary blood volume and negative intrathoracic inspiratory pressure augment apical perfusion, resulting in a NORMAL OR ELEVATED DLCO (> 100-120%)."
      ],
      [
        "Patient 1: Chronic bronchitis; Patient 2: Bronchial asthma; Patient 3: Pulmonary emphysema",
        "Emphysema is characterized by low DLCO due to alveolar capillary destruction; it cannot be assigned to Patient 3 (DLCO 125%)."
      ],
      [
        "Patient 1: Idiopathic pulmonary fibrosis; Patient 2: Pulmonary emphysema; Patient 3: Chronic bronchitis",
        "Idiopathic pulmonary fibrosis produces a RESTRICTIVE ventilatory defect (FEV1/FVC normal or increased, reduced TLC < 80%), not an obstructive defect with FEV1/FVC 0.58 and TLC 124%."
      ],
      [
        "Patient 1: Bronchial asthma; Patient 2: Pulmonary emphysema; Patient 3: Chronic bronchitis",
        "Asthma does not cause irreversible alveolar destruction with DLCO 42% and marked hyperinflation; emphysema causes low DLCO."
      ],
      [
        "Patient 1: Pulmonary emphysema; Patient 2: Alpha-1 antitrypsin deficiency; Patient 3: Sarcoidosis",
        "Alpha-1 antitrypsin deficiency causes severe panacinar emphysema with LOW DLCO, not a normal DLCO of 98% as in Patient 2."
      ]
    ],
    "shortestValidSolution": "Obstructive defect with low DLCO = emphysema; normal DLCO = chronic bronchitis; elevated DLCO = asthma.",
    "necessaryInference": "Use DLCO to distinguish obstructive lung phenotypes: emphysema (alveolar destruction -> low DLCO), chronic bronchitis (pure conducting airway -> normal DLCO), asthma (increased capillary blood volume -> elevated DLCO).",
    "strongestDistractor": "Patient 1: Chronic bronchitis; Patient 2: Bronchial asthma; Patient 3: Pulmonary emphysema",
    "distractorExclusion": "Emphysema has low DLCO, not high DLCO; asthma characteristically exhibits normal-to-elevated DLCO.",
    "citation": "Macintyre N, et al. Standardisation of the single-breath determination of carbon monoxide uptake in the lung. Eur Respir J. 2005;26(4):720-735. PMID: 16204605.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive comparative physiology item differentiating the three core obstructive disorders based on gas transfer (DLCO) and lung volumes.",
      "distractorExclusionNotes": "Distractors reverse the classic DLCO patterns or misclassify restrictive parenchymal fibrosis as obstructive.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0429",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Acute Respiratory Distress Syndrome Pathophysiology",
    "subtopic": "Diffuse Alveolar Damage, Hyaline Membranes, and Refractory Intrapulmonary Shunting",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman is admitted to the intensive care unit with severe acute necrotizing pancreatitis. On hospital day 3, she develops sudden tachypnea (respiratory rate 36/min), diaphoresis, and severe hypoxemia. Arterial blood gas on a non-rebreather mask (FiO2 1.0) demonstrates pH 7.31, PaCO2 34 mm Hg, and PaO2 52 mm Hg (PaO2/FiO2 ratio = 52, indicating severe ARDS). Chest radiography reveals extensive bilateral fluffy alveolar infiltrates ('white-out') with normal cardiac silhouette, and transthoracic echocardiography demonstrates normal left ventricular systolic function with an estimated pulmonary capillary wedge pressure of 12 mm Hg (non-cardiogenic). Endotracheal intubation is performed. Increasing the delivered oxygen concentration from 60% to 100% fails to produce any meaningful improvement in arterial PaO2. Which of the following pathophysiological mechanisms directly explains why hypoxemia in this condition is refractory to supplemental oxygen therapy?",
    "choices": [
      [
        "Extensive true right-to-left intrapulmonary shunting caused by perfusion of completely flooded and collapsed alveoli (V/Q = 0)",
        "Acute Respiratory Distress Syndrome (ARDS) is initiated by systemic inflammation that activates pulmonary capillary endothelial cells and alveolar macrophages, triggering neutrophil extravasation and release of proteases, reactive oxygen species, and inflammatory cytokines (TNF, IL-1, IL-6). The resulting histopathologic lesion is DIFFUSE ALVEOLAR DAMAGE (DAD): (1) Capillary endothelial and type I alveolar epithelial necrosis causes increased vascular permeability, flooding alveolar spaces with protein-rich exudate, erythrocytes, and cellular debris. (2) Fibrin and necrotic epithelial remnants condense along alveolar walls to form eosinophilic HYALINE MEMBRANES. (3) Damage to type II pneumocytes causes surfactant depletion and inactivation, leading to massive alveolar microatelectasis. (4) Blood flowing through pulmonary capillaries perfusing non-ventilated, fluid-filled, or collapsed alveoli CANNOT PARTICIPATE IN GAS EXCHANGE. This creates an extreme TRUE INTRAPULMONARY SHUNT (V/Q = 0). Because deoxygenated mixed venous blood bypasses ventilated lung and mixes directly into pulmonary veins, increasing inspired oxygen (FiO2) CANNOT oxygenate this shunted blood, rendering hypoxemia refractory to oxygen supplementation."
      ],
      [
        "Alveolar dead space ventilation caused by microvascular pulmonary arterial thrombosis (V/Q = infinity)",
        "Dead space ventilation (wasted ventilation of unperfused alveoli) increases PaCO2 and work of breathing, but does not cause severe refractory arterial hypoxemia."
      ],
      [
        "Extrinsic mechanical compression of terminal bronchioles by severe cardiogenic hydrostatic transudation",
        "PCWP is normal (12 mm Hg) and LV function is normal, ruling out cardiogenic hydrostatic edema; ARDS is non-cardiogenic permeability edema."
      ],
      [
        "Massive destruction of interalveolar septa causing permanent reduction in pulmonary capillary transit time",
        "Alveolar septal destruction is chronic emphysema, not acute exudative diffuse alveolar damage with hyaline membranes."
      ],
      [
        "Excessive generation of 2,3-bisphosphoglycerate shifting the hemoglobin-oxygen dissociation curve to the left",
        "Elevated 2,3-BPG shifts the curve to the RIGHT (promoting oxygen release), and does not cause intrapulmonary shunting."
      ]
    ],
    "shortestValidSolution": "ARDS causes alveolar flooding and collapse -> perfused non-ventilated alveoli create true right-to-left intrapulmonary shunt (V/Q = 0) refractory to supplemental FiO2.",
    "necessaryInference": "Differentiate intrapulmonary shunt (V/Q = 0, refractory to 100% O2) from simple V/Q mismatch, and link it to diffuse alveolar damage in ARDS.",
    "strongestDistractor": "Alveolar dead space ventilation caused by microvascular pulmonary arterial thrombosis (V/Q = infinity)",
    "distractorExclusion": "Dead space (V/Q = inf) impairs CO2 clearance; hypoxemia refractory to FiO2 is the defining hallmark of true right-to-left shunt (V/Q = 0).",
    "citation": "Matthay MA, et al. Acute respiratory distress syndrome. Nat Rev Dis Primers. 2019;5(1):18. PMID: 30872586.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests core pathophysiology of ARDS (DAD, hyaline membranes, non-cardiogenic edema) and biophysics of shunt-induced refractory hypoxemia.",
      "distractorExclusionNotes": "Contrasts shunt (V/Q = 0) with dead space (V/Q = inf), hydrostatic transudate, and chronic emphysematous changes.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s1-0430",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Idiopathic Pulmonary Fibrosis Pathogenesis",
    "subtopic": "Type II Pneumocyte Microinjury, Aberrant Repair, and Fibroblastic Foci",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old male former smoker presents with a 9-month history of insidious, progressive exertional dyspnea and a dry, non-productive cough. Physical examination reveals bilateral digital clubbing and dry, late-inspiratory 'Velcro-like' crackles most prominent at the lung bases. Pulmonary function testing reveals a restrictive pattern (FEV1/FVC 0.84, TLC 68% of predicted) with a markedly reduced DLCO (38% of predicted). High-resolution chest computed tomography (HRCT) demonstrates subpleural, basal-predominant reticular opacities, traction bronchiectasis, and subpleural cystic airspaces arranged in distinct rows sharing thick fibrous walls ('honeycombing'). Surgical lung biopsy confirms a pattern of Usual Interstitial Pneumonia (UIP). Which of the following cellular events initiates and drives the fibrogenic cascade in this condition?",
    "choices": [
      [
        "Recurrent microinjuries to alveolar type II epithelial cells leading to senescence, impaired re-epithelialization, and aberrant release of TGF-beta1 and PDGF",
        "Idiopathic Pulmonary Fibrosis (IPF) is the prototypical progressive fibrosing interstitial lung disease characterized histologically by the Usual Interstitial Pneumonia (UIP) pattern. Current molecular evidence refutes the historic concept that IPF is primarily an inflammatory disease; rather, it is a disease of ABERRANT EPITHELIAL REPAIR and accelerated aging: (1) In genetically susceptible individuals (mutations in telomerase TERT/TERC, surfactant proteins SFTPC/SFTPA2, or MUC5B promoter variant), environmental exposures (smoking, viral infections, microaspiration) cause RECURRENT SUBCLINICAL MICROINJURIES to alveolar type II pneumocytes. (2) Injured type II pneumocytes undergo premature senescence, endoplasmic reticulum stress, and apoptosis, failing to differentiate into type I pneumocytes to restore the denuded epithelial basement membrane. (3) Senescent and activated epithelial cells secrete excessive pro-fibrotic mediators, primarily TRANSFORMING GROWTH FACTOR-BETA 1 (TGF-beta1), PDGF, and FGF. (4) TGF-beta1 drives migration, proliferation, and transdifferentiation of resident fibroblasts into myofibroblasts, forming microscopic clusters of actively proliferating spindle cells embedded in loose myxoid stroma (FIBROBLASTIC FOCI). (5) Myofibroblasts deposit excessive collagen and extracellular matrix, destroying the alveolar capillary architecture, yielding subpleural honeycombing and architectural distortion."
      ],
      [
        "Delayed-type (Type IV) cell-mediated hypersensitivity driven by CD4+ Th1 lymphocytes forming sterile noncaseating granulomas",
        "Type IV hypersensitivity with noncaseating granulomas describes sarcoidosis or berylliosis, not IPF, which completely lacks granulomatous inflammation."
      ],
      [
        "Direct cytotoxic autoantibody-mediated destruction of the alveolar basement membrane by anti-proteinase 3 IgG",
        "Anti-PR3 (c-ANCA) causes granulomatosis with polyangiitis (cavitary pulmonary nodules, necrotizing capillaritis, RPGN), not idiopathic subpleural reticular fibrosis."
      ],
      [
        "Deposition of circulating IgA-containing immune complexes in alveolar septa activating the alternative complement pathway",
        "Immune-complex deposition causes hypersensitivity pneumonitis or lupus pneumonitis, whereas IPF is not an immune-complex mediated disease."
      ],
      [
        "Clonal expansion of smooth muscle cells within lymphatic vessels caused by inactivating mutations in the TSC2 gene",
        "Smooth muscle proliferation in lymphatics describes Lymphangioleiomyomatosis (LAM), seen in young women of childbearing age with tuberous sclerosis."
      ]
    ],
    "shortestValidSolution": "IPF is driven by recurrent microinjury to type II alveolar epithelial cells -> aberrant repair -> TGF-beta1 release -> myofibroblast proliferation (fibroblastic foci) and honeycombing.",
    "necessaryInference": "Identify type II pneumocyte microinjury and aberrant TGF-beta-driven myofibroblast activation (fibroblastic foci) as the initiating pathophysiology of IPF/UIP.",
    "strongestDistractor": "Delayed-type (Type IV) cell-mediated hypersensitivity driven by CD4+ Th1 lymphocytes forming sterile noncaseating granulomas",
    "distractorExclusion": "Granulomatous inflammation characterizes sarcoidosis/berylliosis; IPF is a non-granulomatous, non-inflammatory aberrant epithelial repair disorder.",
    "citation": "Richeldi L, Collard HR, Jones MG. Idiopathic pulmonary fibrosis. Lancet. 2017;389(10082):1941-1952. PMID: 28365226.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates modern pathogenic understanding of IPF (type II alveolar senescence, TGF-beta, fibroblastic foci) over obsolete inflammatory hypotheses.",
      "distractorExclusionNotes": "Distractors represent distinct pulmonary pathologies: sarcoidosis (granulomas), GPA (cavitary capillaritis), LAM (TSC2 smooth muscle).",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed.",
      "verdict": "PASS"
    }
  }
]
