import { CandidateSpec } from './types';

export const step1Batch18: CandidateSpec[] = [
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
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
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0436",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Obesity Hypoventilation Syndrome vs OSA",
    "subtopic": "Daytime Hypercapnia, Blunted Central Chemoreceptor Drive, and Compensatory Renal Bicarbonate Retention",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with a body mass index (BMI) of 44 kg/m2 presents for evaluation of daytime somnolence, morning headaches, and cognitive slowing. His wife reports that he snores loudly and frequently stops breathing during sleep. While seated quietly awake in the examination room breathing room air at sea level, his vital signs show blood pressure 152/92 mm Hg, pulse 78/min, respiratory rate 14/min, and oxygen saturation 89%. Daytime arterial blood gas on ambient air demonstrates:\n- pH: 7.36\n- PaCO2: 54 mm Hg\n- PaO2: 58 mm Hg\n- Serum HCO3-: 31 mEq/L\n\nPolysomnography confirms severe obstructive sleep apnea with an apnea-hypopnea index (AHI) of 62/hour. Which of the following physiological mechanisms distinguishes this patient's condition (obesity hypoventilation syndrome) from uncomplicated obstructive sleep apnea?",
    "choices": [
      [
        "Persistent awake daytime alveolar hypoventilation with chronic respiratory acidosis compensated by renal bicarbonate retention, secondary to blunted central respiratory chemosensitivity and leptin resistance",
        "Obesity Hypoventilation Syndrome (OHS, Pickwickian syndrome) is defined by the triad of: (1) Obesity (BMI >= 30 kg/m2), (2) Sleep-disordered breathing (most often OSA), and (3) AWAKE CHRONIC DAYTIME ALVEOLAR HYPOVENTILATION (daytime PaCO2 > 45 mm Hg) in the absence of alternative causes of hypoventilation (e.g., severe COPD, neuromuscular disease). IN CONTRAST to uncomplicated OSA (in which nocturnal apneas cause transient nighttime hypercapnia/hypoxemia, but patients hyperventilate and restore NORMAL daytime PaCO2 and pH), patients with OHS develop a failure of daytime ventilatory compensation: Increased mechanical work of breathing from severe chest wall adiposity is compounded by BLUNTED CENTRAL RESPIRATORY CHEMORECEPTOR RESPONSIVENESS to hypercapnia. Leptin, an adipokine that normally stimulates ventilation, encounters CENTRAL LEPTIN RESISTANCE. Over weeks to months, sustained hypercapnia prompts the kidneys to retain bicarbonate (elevated serum HCO3- > 27 mEq/L, often > 30 mEq/L), buffering the pH back to the normal/low-normal range (7.35-7.38) and establishing a state of fully compensated chronic respiratory acidosis."
      ],
      [
        "Episodes of upper airway pharyngeal collapse occurring exclusively during rapid eye movement sleep with complete normalization of daytime alveolar gas tensions",
        "Pharyngeal collapse limited to sleep with normal daytime PaCO2 (< 45 mm Hg) and normal daytime HCO3- defines UNCOMPLICATED OBSTRUCTIVE SLEEP APNEA, not obesity hypoventilation syndrome."
      ],
      [
        "Irreversible destruction of interalveolar septa causing permanent reduction in carbon monoxide diffusing capacity (DLCO < 50%)",
        "Alveolar septal destruction causing low DLCO is pulmonary emphysema; OHS is an extrapulmonary ventilatory pump disorder with normal DLCO."
      ],
      [
        "Primary impairment of respiratory rhythmogenesis due to an inherited loss-of-function mutation in the PHOX2B transcription factor",
        "PHOX2B mutations cause congenital central hypoventilation syndrome (Ondine curse), presenting in neonates with failure of autonomic ventilatory control, not adult obesity."
      ],
      [
        "Severe fixed extrathoracic upper airway stenosis causing symmetric flattening of both inspiratory and expiratory loops on spirometry",
        "Fixed extrathoracic obstruction produces tracheal stridor and symmetric loop flattening on spirometry, which is absent in OHS."
      ]
    ],
    "shortestValidSolution": "BMI > 30 + OSA + daytime awake PaCO2 > 45 mm Hg with compensatory elevated HCO3- = Obesity Hypoventilation Syndrome (differentiated from OSA by persistent awake daytime hypercapnia and blunted central drive).",
    "necessaryInference": "Differentiate OHS from uncomplicated OSA by recognizing that OHS features daytime awake hypercapnia (PaCO2 > 45) and renal HCO3- compensation due to blunted central ventilatory drive.",
    "strongestDistractor": "Episodes of upper airway pharyngeal collapse occurring exclusively during rapid eye movement sleep with complete normalization of daytime alveolar gas tensions",
    "distractorExclusion": "This distractor defines uncomplicated OSA, in which daytime blood gases are normal; OHS is defined by awake daytime hypercapnia (PaCO2 54 mm Hg).",
    "citation": "Mokhlesi B, et al. Evaluation and management of obesity hypoventilation syndrome: an official ATS clinical practice guideline. Am J Respir Crit Care Med. 2019;200(3):e6-e24. PMID: 31368798.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests physiological boundary between uncomplicated OSA and OHS using daytime ABG parameters (PaCO2 54, HCO3 31) and central chemoreceptor/leptin physiology.",
      "distractorExclusionNotes": "Directly targets the essential distinction between nocturnal-only hypoxemia (OSA) and persistent daytime hypoventilation with renal compensation (OHS).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0437",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Pulmonary Arterial Hypertension Pathogenesis",
    "subtopic": "BMPR2 Inactivating Mutations, Plexiform Lesions, and Endothelial-Smooth Muscle Dysregulation",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old woman presents with progressive exertional dyspnea, near-syncope while climbing stairs, and lower extremity edema over the past 6 months. Physical examination demonstrates an accentuated pulmonary component of the second heart sound (loud P2), a right-sided S4 gallop, a prominent jugular venous 'a' wave, and clear lung fields bilaterally. Transthoracic echocardiography reveals right ventricular hypertrophy, right atrial enlargement, and an estimated right ventricular systolic pressure of 75 mm Hg with normal left ventricular systolic and diastolic function. Right heart catheterization demonstrates a mean pulmonary arterial pressure of 48 mm Hg, pulmonary vascular resistance of 7 Wood units, and a pulmonary capillary wedge pressure of 10 mm Hg (pre-capillary pulmonary hypertension). Her family history reveals that her mother died of unexplained heart failure at age 34. Lung biopsy from a similarly affected patient would demonstrate concentric intimal fibrosis, medial hypertrophy of small muscular arteries, and complex plexiform vascular lesions. Which of the following genetic alterations is most strongly linked to this disorder?",
    "choices": [
      [
        "Heterozygous loss-of-function germline mutation in the bone morphogenetic protein receptor type 2 (BMPR2) gene",
        "Heritable Pulmonary Arterial Hypertension (HPAH, Group 1 PAH) is an autosomal dominant disorder with variable penetrance (~20%) most commonly caused by heterozygous germline inactivating mutations in the BMPR2 GENE (bone morphogenetic protein receptor type 2), which encodes a member of the TGF-beta receptor serine/threonine kinase superfamily. (1) In normal pulmonary vascular tissue, BMPR2 signaling inhibits vascular smooth muscle proliferation and promotes endothelial cell survival/quiescence. (2) Loss-of-function BMPR2 mutations disrupt this growth-suppressive pathway, shifting the balance toward pro-proliferative TGF-beta/activin signaling. (3) An environmental 'second hit' (e.g., inflammation, drugs, estrogen) triggers vascular injury, resulting in endothelial dysfunction characterized by EXCESSIVE VASOCONSTRICTORS (ENDOTHELIN-1, THROMBOXANE A2) and DEFICIENT VASODILATORS (PROSTACYCLIN, NITRIC OXIDE). (4) This uninhibited proliferation of vascular smooth muscle and endothelial cells leads to concentric laminar 'onion-skin' intimal fibroelastosis, medial hypertrophy, and pathognomonic PLEXIFORM LESIONS (glomeruloid tufts of slit-like capillary channels formed by aberrant endothelial cell proliferation)."
      ],
      [
        "Gain-of-function missense mutation in the RET proto-oncogene leading to constitutive tyrosine kinase activation",
        "RET proto-oncogene mutations cause Multiple Endocrine Neoplasia type 2 (MEN2A/MEN2B) and familial medullary thyroid carcinoma, not pulmonary hypertension."
      ],
      [
        "Inactivating nonsense mutation in the APC tumor suppressor gene disrupting beta-catenin degradation",
        "APC mutations cause Familial Adenomatous Polyposis (FAP) with thousands of colorectal adenomas and adenocarcinoma, not vascular remodeling."
      ],
      [
        "Trinucleotide CAG repeat expansion in the HTT gene causing striatal GABAergic medium spiny neuron degeneration",
        "HTT CAG expansions cause Huntington disease with chorea and executive dementia, unrelated to pulmonary hemodynamics."
      ],
      [
        "Homozygous delta-F508 deletion in CFTR causing impaired apical chloride transport and viscous mucus plugging",
        "CFTR mutations cause cystic fibrosis with bronchiectasis and recurrent sinopulmonary infections, but do not directly cause familial pre-capillary PAH with plexiform lesions."
      ]
    ],
    "shortestValidSolution": "Young woman + loud P2 + elevated PAP with normal PCWP + family history + plexiform lesions = Heritable PAH -> heterozygous BMPR2 loss-of-function mutation.",
    "necessaryInference": "Identify BMPR2 inactivating mutations as the classic genetic cause of heritable Group 1 pulmonary arterial hypertension with plexiform lesions.",
    "strongestDistractor": "Homozygous delta-F508 deletion in CFTR causing impaired apical chloride transport and viscous mucus plugging",
    "distractorExclusion": "CFTR causes CF-related bronchiectasis (Group 3 PAH late in disease), but heritable Group 1 PAH with plexiform lesions is caused by BMPR2 mutations.",
    "citation": "Morrell NW, et al. Cellular and molecular basis of pulmonary arterial hypertension. J Am Coll Cardiol. 2009;54(1 Suppl):S20-S31. PMID: 19555855.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive Step 1 item evaluating clinical hemodynamics (mean PAP 48, PCWP 10 = pre-capillary), histopathology (plexiform lesions), and molecular genetics (BMPR2).",
      "distractorExclusionNotes": "Distractors feature core genetic markers of distinct genetic syndromes (RET, APC, HTT, CFTR).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0438",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Respiratory",
    "topic": "Alpha-1 Antitrypsin Deficiency Pathophysiology",
    "subtopic": "Hepatocyte Endoplasmic Reticulum Polymerization and Panacinar Basal Emphysema",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man who has never smoked cigarettes presents with progressive shortness of breath during routine exercise and a chronic morning cough productive of clear sputum. Physical examination reveals hyperresonance to percussion, diminished breath sounds throughout both lung fields, and distant heart sounds. Spirometry confirms severe airflow obstruction with an FEV1/FVC ratio of 0.52 and marked reduction in DLCO. High-resolution chest CT reveals extensive, confluent, panacinar emphysematous destruction involving predominantly the lower lobes bilaterally. Laboratory evaluation reveals mild elevation of serum transaminases (AST 54 U/L, ALT 62 U/L). A percutaneous liver biopsy reveals hepatocytes containing abundant round, intracytoplasmic, periodic acid-Schiff (PAS)-positive, diastase-resistant globules located predominantly within periportal hepatocytes. Which of the following molecular mechanisms directly explains both the pulmonary destruction and the hepatic accumulation in this patient?",
    "choices": [
      [
        "A single-nucleotide mutation (Glu342Lys) in the SERPINA1 gene causing abnormal protein folding and polymerization in the hepatocyte endoplasmic reticulum, leading to hepatic retention and severe circulating antiprotease deficiency that permits uninhibited neutrophil elastase destruction of alveolar elastin",
        "Alpha-1 Antitrypsin (AAT) Deficiency is an autosomal codominant genetic disorder caused by mutations in the SERPINA1 gene, which encodes AAT, a circulating serine protease inhibitor (serpin). (1) Normal individuals carry the Pi*MM genotype. The most severe and clinically significant deficiency occurs in homozygous individuals with the Pi*ZZ GENOTYPE. (2) The Pi*Z allele results from a single base substitution (GAG to AAG) that substitutes a lysine for glutamic acid at position 342 (GLU342LYS). This amino acid substitution causes abnormal tertiary folding of the nascent protein within the rough ENDOPLASMIC RETICULUM OF HEPATOCYTES. The mutant AAT undergoes spontaneous loop-sheet POLYMERIZATION, forming aggregated polymers that cannot be secreted into the bloodstream. (3) HEPATIC PATHOLOGY: Retention of polymerized AAT produces endoplasmic reticulum stress, hepatocyte apoptosis, and the pathognomonic appearance of INTRACYTOPLASMIC ROUND GLOBULES that are PERIODIC ACID-SCHIFF (PAS)-POSITIVE AND DIASTASE-RESISTANT (diastase digests glycogen, leaving glycoprotein polymers intact). This can progress to neonatal cholestasis, cirrhosis, and hepatocellular carcinoma. (4) PULMONARY PATHOLOGY: Severely depressed circulating AAT levels (< 15-20% of normal) fail to neutralize NEUTROPHIL ELASTASE in the pulmonary microvasculature. Unopposed elastase degrades elastin in the interalveolar septa throughout the entire acinus, producing PANACINAR (PANLOBULAR) EMPHYSEMA with a distinct predilection for the LOWER LOBES (due to higher baseline perfusion delivering more neutrophils)."
      ],
      [
        "Defective synthesis of copper-transporting P-type ATPase resulting in impaired incorporation of copper into ceruloplasmin and toxic accumulation in hepatocytes and basal ganglia",
        "ATP7B mutation causes Wilson disease with hepatic copper deposition and Kayser-Fleischer rings, but does not cause early-onset panacinar lower-lobe emphysema."
      ],
      [
        "Inactivating mutation in the HFE gene leading to increased intestinal iron absorption and excessive hemosiderin deposition in hepatocytes and pancreatic acinar cells",
        "HFE mutations cause hereditary hemochromatosis with micronodular cirrhosis and diabetes ('bronze diabetes'), not elastase-mediated pulmonary emphysema."
      ],
      [
        "Excessive lysosomal degradation of sphingomyelin due to inherited deficiency of acid sphingomyelinase leading to hepatosplenomegaly and cherry-red macular spots",
        "Acid sphingomyelinase deficiency causes Niemann-Pick disease (hepatosplenomegaly, neurodegeneration, cherry-red spot), not PAS-positive diastase-resistant liver globules or emphysema."
      ],
      [
        "Homozygous mutation in the CFTR chloride channel causing hyperviscous mucus obstruction of intralobular bile ducts and upper-lobe bronchiectasis",
        "Cystic fibrosis produces upper-lobe bronchiectasis, recurrent Pseudomonas/Staph infections, and biliary cirrhosis, not panacinar lower-lobe emphysema with PAS-positive hepatocyte globules."
      ]
    ],
    "shortestValidSolution": "Young non-smoker + lower-lobe panacinar emphysema + PAS+ diastase-resistant hepatocyte globules = Alpha-1 antitrypsin deficiency (PiZZ, Glu342Lys -> ER polymerization/retention -> elastase alveolar destruction).",
    "necessaryInference": "Connect the Glu342Lys SERPINA1 mutation to hepatocyte ER polymerization (PAS+ diastase-resistant globules) and systemic deficiency allowing neutrophil elastase destruction of lower-lobe alveolar elastin.",
    "strongestDistractor": "Defective synthesis of copper-transporting P-type ATPase resulting in impaired incorporation of copper into ceruloplasmin and toxic accumulation in hepatocytes and basal ganglia",
    "distractorExclusion": "Wilson disease (ATP7B) causes copper-mediated hepatic and basal ganglia injury, but has no link to elastase-mediated lower-lobe pulmonary emphysema.",
    "citation": "Stoller JK, Aboussouan LS. A review of alpha1-antitrypsin deficiency. Am J Respir Crit Care Med. 2012;185(3):246-259. PMID: 21960536.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive pathology and biochemistry question unifying liver histology (PAS+ diastase-resistant globules) and lung pathophysiology (panacinar emphysema, neutrophil elastase).",
      "distractorExclusionNotes": "Distractors represent other major metabolic liver diseases: Wilson disease, hemochromatosis, Niemann-Pick, and cystic fibrosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0439",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Respiratory",
    "topic": "Cystic Fibrosis Molecular Genetics",
    "subtopic": "CFTR F508del Endoplasmic Reticulum-Associated Degradation (ERAD) and Transepithelial Potential Difference",
    "provisionalDifficulty": 5,
    "stem": "A 4-month-old male infant presents with failure to thrive, recurrent productive cough, and greasy, foul-smelling stools. Quantitative pilocarpine iontophoresis sweat chloride test is markedly abnormal with a sweat chloride concentration of 86 mEq/L (normal < 30 mEq/L). Genetic testing confirms that the infant is homozygous for a three-base-pair deletion on chromosome 7q31.2, resulting in the loss of a phenylalanine residue at codon 508 of the CFTR protein (F508del). Nasal transepithelial potential difference measurement demonstrates an exaggerated baseline negative potential difference and complete absence of hyperpolarization upon perfusion with a chloride-free solution containing isoproterenol. Which of the following intracellular processes is directly responsible for the absence of this mutated protein on the apical plasma membrane of respiratory epithelial cells?",
    "choices": [
      [
        "Misfolding of the nascent polypeptide chain in the rough endoplasmic reticulum, triggering recognition by molecular chaperones and targeted degradation by the 26S proteasome via endoplasmic reticulum-associated degradation (ERAD)",
        "Cystic Fibrosis (CF) is an autosomal recessive disorder caused by mutations in the CFTR GENE (cystic fibrosis transmembrane conductance regulator), which encodes an ATP-binding cassette (ABC) transmembrane chloride and bicarbonate channel. (1) The most common mutation worldwide (accounting for ~70% of mutant alleles) is F508del (a 3-base-pair deletion of CTT resulting in loss of phenylalanine at position 508 within the nucleotide-binding domain 1). (2) INTRACELLULAR TRAFFICKING MECHANISM (Class II CFTR mutation): The F508del mutation alters the folding kinetics of the nascent polypeptide chain within the rough ENDOPLASMIC RETICULUM (rER). Although the mutated channel retains partial intrinsic chloride channel activity if it reaches the cell surface, molecular chaperones (e.g., Hsp70, calnexin) recognize the misfolded protein as aberrant. The protein is RETENTION-TRAPPED in the ER, retrotranslocated into the cytoplasm, polyubiquitinated, and RAPIDLY DEGRADED BY THE 26S PROTEASOME via the ENDOPLASMIC RETICULUM-ASSOCIATED DEGRADATION (ERAD) pathway. It never undergoes mature core-to-complex glycosylation in the Golgi apparatus, resulting in a near-complete ABSENCE OF FUNCTIONAL CFTR AT THE APICAL PLASMA MEMBRANE. (3) TRANSEPITHELIAL PHYSIOLOGY: CFTR normally secretes chloride and inhibits the Epithelial Sodium Channel (ENaC). In respiratory epithelium, lack of CFTR results in loss of chloride secretion and UNINHIBITED ENAC ACTIVITY, causing hyperabsorption of sodium and water. This creates an abnormally negative baseline lumen potential difference (-40 to -50 mV vs normal -15 mV) and dehydrates airway surface mucus, producing viscous secretions, mucociliary clearance failure, and recurrent infections."
      ],
      [
        "Premature termination codon causing rapid degradation of mRNA transcripts by the nonsense-mediated mRNA decay surveillance pathway",
        "Nonsense mutations (e.g., G542X, W1282X; Class I CFTR mutations) introduce premature stop codons leading to nonsense-mediated mRNA decay; F508del is an in-frame Class II deletion causing ER protein misfolding."
      ],
      [
        "Impaired opening of the channel pore in response to cAMP-dependent protein kinase A phosphorylation at the cell surface",
        "Gating defects (Class III mutations, e.g., G551D) reach the plasma membrane but fail to open; they respond directly to the potentiator ivacaftor."
      ],
      [
        "Decreased total rate of gene transcription due to extensive hypermethylation of CpG islands within the upstream CFTR promoter region",
        "Transcriptional silencing via promoter hypermethylation is an epigenetic mechanism seen in tumor suppressor inactivation, not the mechanism of the F508del CFTR mutation."
      ],
      [
        "Accelerated endocytic internalization and lysosomal degradation from the apical plasma membrane due to disrupted PDZ-domain interactions",
        "Disrupted apical stability and accelerated endocytosis characterize Class VI CFTR mutations, whereas F508del never reaches the membrane in significant quantities due to ERAD."
      ]
    ],
    "shortestValidSolution": "CFTR F508del causes abnormal folding in the rough ER -> molecular chaperones target it for proteasomal degradation (ERAD) -> protein never reaches the apical plasma membrane.",
    "necessaryInference": "Identify Class II CFTR mutation mechanism (F508del misfolding in rER -> targeted for 26S proteasome degradation by ERAD before Golgi glycosylation).",
    "strongestDistractor": "Impaired opening of the channel pore in response to cAMP-dependent protein kinase A phosphorylation at the cell surface",
    "distractorExclusion": "Gating defects (Class III, G551D) reach the membrane but fail to open; F508del is a Class II trafficking/folding mutation destroyed in the ER by ERAD.",
    "citation": "Riordan JR. CFTR function and transfection. Annu Rev Biochem. 2008;77:701-726. PMID: 18304008.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular genetics question distinguishing CFTR mutation classes (Class II ERAD vs Class I nonsense vs Class III gating) and connecting it to nasal potential difference.",
      "distractorExclusionNotes": "Distractors systematically match the alternative classes of CFTR dysfunction (nonsense decay, gating defect, epigenetic silencing, accelerated endocytosis).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0440",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Pulmonary Embolism Pathophysiology",
    "subtopic": "Alveolar Dead Space Ventilation (V/Q = infinity), Reflex Bronchoconstriction, and Hypoxemia Mechanisms",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman on post-operative day 4 following total hip arthroplasty suddenly develops acute pleuritic chest pain, tachypnea (respiratory rate 32/min), and anxiety. Physical examination reveals heart rate 118/min, blood pressure 114/74 mm Hg, and oxygen saturation 86% on ambient air. Lungs are clear to auscultation bilaterally. Arterial blood gas on room air demonstrates: \n- pH: 7.50\n- PaCO2: 28 mm Hg\n- PaO2: 56 mm Hg\n- Serum HCO3-: 22 mEq/L\n\nComputed tomography pulmonary angiography reveals a large saddle pulmonary embolus occluding the main bifurcation of the pulmonary artery with extension into both main pulmonary arteries. Which of the following best describes the immediate physiological consequence of vascular occlusion in the affected lung segments, and what mechanism primarily explains her arterial hypoxemia?",
    "choices": [
      [
        "Acute creation of alveolar dead space (V/Q approaching infinity) in unperfused segments; hypoxemia is primarily caused by compensatory redistribution of the entire cardiac output to non-occluded lung units, overwhelming their ventilatory capacity and producing profound ventilation-perfusion mismatch (low V/Q)",
        "Pulmonary Embolism (PE) produces complex multi-compartment pulmonary physiological disturbances: (1) DEAD SPACE VENTILATION (V/Q = infinity): Sudden mechanical occlusion of pulmonary arterial branches completely abolishes perfusion (Q = 0) to distal alveoli while ventilation (V) continues. These unperfused ventilated alveoli represent ALVEOLAR DEAD SPACE. Wasted ventilation of dead space increases the fraction of minute ventilation that does not participate in gas exchange. (2) HYPOXEMIA MECHANISM: Dead space itself does not directly add deoxygenated blood to the arterial circulation. Rather, the entire right ventricular cardiac output is forcefully REDIRECTED to the remaining patent pulmonary vascular bed. The patent lung units receive massive blood flow that grossly exceeds their local ventilation, creating areas of LOW VENTILATION-PERFUSION RATIO (LOW V/Q MISMATCH). In addition, localized alveolar hypocapnia in unperfused segments triggers reflex bronchoconstriction, and surfactant depletion in underperfused areas leads to regional microatelectasis, further compounding low V/Q and intrapulmonary shunting. (3) RESPIRATORY ALKALOSIS: Stimulation of pulmonary irritant/J receptors by vascular distension and inflammation drives intense tachypnea, washing out carbon dioxide (PaCO2 28 mm Hg, pH 7.50)."
      ],
      [
        "Immediate widespread diffuse alveolar damage causing massive protein-rich permeability edema and severe intrapulmonary right-to-left shunt (V/Q = 0) that is completely refractory to 100% inspired oxygen",
        "Diffuse alveolar damage with permeability edema is the mechanism of ARDS; acute PE does not cause generalized alveolar flooding or true refractory right-to-left shunt."
      ],
      [
        "Severe alveolar hypoventilation resulting from sudden inhibition of the medullary dorsal respiratory group by vagal baroreceptor afferents",
        "PE causes intense tachypnea and alveolar hyperventilation (PaCO2 28 mm Hg), not central hypoventilation."
      ],
      [
        "Direct chemical destruction of the alveolar-capillary basement membrane by embolized platelet-activating factor and thromboxane B2",
        "Basement membrane destruction does not occur in acute PE; the primary defect is hemodynamic perfusion redistribution and functional V/Q mismatch."
      ],
      [
        "Massive systemic vasodilation causing a precipitous drop in systemic vascular resistance and secondary high-output cardiac failure",
        "PE increases right ventricular afterload and pulmonary vascular resistance, which can lead to obstructive shock, not low-SVR distributive shock."
      ]
    ],
    "shortestValidSolution": "PE occludes blood flow -> creates alveolar dead space (V/Q = inf) in unperfused areas; blood is diverted to remaining patent units -> creates severe low V/Q mismatch and hypoxemia.",
    "necessaryInference": "Recognize that PE produces alveolar dead space (V/Q = inf) in occluded zones, while arterial hypoxemia results from blood redistribution causing low V/Q mismatch in non-occluded zones.",
    "strongestDistractor": "Immediate widespread diffuse alveolar damage causing massive protein-rich permeability edema and severe intrapulmonary right-to-left shunt (V/Q = 0) that is completely refractory to 100% inspired oxygen",
    "distractorExclusion": "ARDS causes diffuse alveolar damage and refractory shunt (V/Q = 0); PE creates dead space (V/Q = inf) and hypoxemia via redistribution low V/Q mismatch.",
    "citation": "Tapson VF. Acute pulmonary embolism. N Engl J Med. 2008;358(10):1037-1052. PMID: 18322285.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield cardiopulmonary physiology question testing the precise mechanisms of dead space (V/Q = inf) vs hypoxemia (redistribution low V/Q) in acute PE.",
      "distractorExclusionNotes": "Distractors contrast ARDS (shunt), central hypoventilation (hypercapnia), and distributive shock (low SVR).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0441",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Chest Wall vs Lung Compliance Mechanics",
    "subtopic": "Pressure-Volume Curves and Extrapulmonary Restrictive Disorders (Severe Kyphoscoliosis)",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old woman with severe congenital thoracic kyphoscoliosis (Cobb angle of 78 degrees) presents for preoperative pulmonary evaluation prior to planned spinal corrective surgery. She reports exertional breathlessness when walking two blocks but denies orthopnea or wheezing. Physical examination reveals marked thoracic asymmetry with a prominent right thoracic rib hump and shallow chest expansions. Spirometry and plethysmographic lung volume measurements demonstrate: \n- FEV1: 52% of predicted\n- FVC: 50% of predicted\n- FEV1/FVC ratio: 0.84\n- Total Lung Capacity (TLC): 54% of predicted\n- Residual Volume (RV): 72% of predicted\n- Functional Residual Capacity (FRC): 56% of predicted\n- DLCO: 86% of predicted (normal when adjusted for alveolar volume)\n\nEsophageal manometry during tidal breathing is performed to generate respiratory system pressure-volume compliance curves. Which of the following changes in compliance is the primary mechanical abnormality in this patient?",
    "choices": [
      [
        "Marked reduction in chest wall compliance (C_cw) with relatively preserved intrinsic lung compliance (C_L), resulting in a decreased total respiratory system compliance (C_rs) and shift of the respiratory equilibrium point (FRC) to a lower volume",
        "The respiratory system consists of two elastic structures arranged in series: the LUNGS (intrinsic pulmonary compliance, C_L) and the CHEST WALL (thoracic compliance, C_cw). Total respiratory system compliance (C_rs) is calculated by the reciprocal relationship: 1/C_rs = 1/C_L + 1/C_cw. (1) In EXTRAPULMONARY RESTRICTIVE DISORDERS (e.g., severe kyphoscoliosis, ankylosing spondylitis, morbid obesity, fibrothorax): The intrinsic lung parenchyma and alveolar-capillary membranes are initially NORMAL (normal DLCO when corrected for volume). However, severe skeletal distortion, rib crowding, and joint ankylosis markedly stiffen the thoracic cage, causing a SEVERE REDUCTION IN CHEST WALL COMPLIANCE (C_cw). (2) MECHANICS AT FRC: Functional Residual Capacity (FRC) is the equilibrium volume where the inward elastic recoil of the lungs exactly equals the outward elastic spring of the chest wall. A stiff, restricted chest wall exerts diminished outward recoil, shifting this balance point to a LOWER RESTING VOLUME (decreased FRC and TLC). (3) The work of breathing is increased dramatically because the respiratory muscles must generate high pleural pressures to expand the rigid thoracic cage, predisposing to hypoventilation and microatelectasis over time."
      ],
      [
        "Severe reduction in intrinsic lung compliance (C_L) caused by alveolar septal fibroblastic proliferation with preserved chest wall elasticity",
        "Reduction in intrinsic lung compliance (low C_L) with low DLCO characterizes intrinsic parenchymal lung diseases (idiopathic pulmonary fibrosis, asbestosis), not extrapulmonary skeletal deformities."
      ],
      [
        "Marked increase in both lung and chest wall compliance resulting in dynamic hyperinflation and an elevated functional residual capacity",
        "Increased compliance (loss of elastic recoil) and elevated FRC/TLC characterize pulmonary emphysema, which is an obstructive disease, not a restrictive chest wall disorder."
      ],
      [
        "Selective loss of abdominal wall compliance with paradoxical outward chest wall movement during forced expiration",
        "Abdominal wall compliance changes do not account for thoracic cage restriction in kyphoscoliosis."
      ],
      [
        "Isolated destruction of the diaphragmatic central tendon causing unilateral diaphragmatic paralysis and preserved total respiratory compliance",
        "Diaphragmatic paralysis causes orthopnea and elevated hemidiaphragm on CXR, but does not explain rigid thoracic cage restriction."
      ]
    ],
    "shortestValidSolution": "Severe kyphoscoliosis + normal DLCO + low TLC/FVC = extrapulmonary restriction -> marked reduction in chest wall compliance (C_cw) while intrinsic lung compliance (C_L) is preserved.",
    "necessaryInference": "Distinguish extrapulmonary restriction (low chest wall compliance C_cw, preserved lung compliance C_L, normal adjusted DLCO) from intrinsic parenchymal restriction (low C_L, low DLCO).",
    "strongestDistractor": "Severe reduction in intrinsic lung compliance (C_L) caused by alveolar septal fibroblastic proliferation with preserved chest wall elasticity",
    "distractorExclusion": "Low C_L and low DLCO define intrinsic pulmonary fibrosis; kyphoscoliosis restricts ventilation purely through stiffened chest wall mechanics (low C_cw).",
    "citation": "Kesten S, et al. Respiratory system mechanics in kyphoscoliosis. Am Rev Respir Dis. 1991;144(5):1098-1102. PMID: 1952438.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative respiratory mechanics: series compliance equations (1/C_rs = 1/C_L + 1/C_cw), FRC equilibrium, and differentiation of chest wall vs parenchymal restriction.",
      "distractorExclusionNotes": "Contrasts chest wall restriction (low C_cw) with pulmonary fibrosis (low C_L), emphysema (high compliance), and diaphragmatic palsy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0442",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Hemoglobin-Oxygen Dissociation Dynamics",
    "subtopic": "Bohr Effect, Allosteric Regulation, and Right vs Left Curve Shifts",
    "provisionalDifficulty": 4,
    "stem": "An elite distance runner is undergoing high-intensity cardiopulmonary exercise testing on a cycle ergometer at peak maximal oxygen consumption (VO2 max). Blood samples drawn simultaneously from a radial artery catheter and a deep femoral venous catheter draining active quadriceps femoris muscle capillary beds reveal marked physiological gradients. At the femoral venous catheter, local muscle temperature is 39.5 degrees C, interstitial PCO2 is 68 mm Hg, pH is 7.15, and intraerythrocytic 2,3-bisphosphoglycerate (2,3-BPG) concentration is elevated. Which of the following best describes the resulting alteration in the hemoglobin-oxygen dissociation curve at this skeletal muscle capillary bed, and what is its physiological significance?",
    "choices": [
      [
        "Rightward shift of the dissociation curve with an increase in P50; decreases hemoglobin's affinity for oxygen, facilitating enhanced unloading of oxygen to actively respiring skeletal muscle tissue",
        "The hemoglobin-oxygen dissociation curve exhibits a sigmoidal shape due to positive cooperativity among hemoglobin's four heme subunits. In exercising skeletal muscle, local metabolic byproducts alter hemoglobin's allosteric state: (1) RIGHTWARD SHIFT: The curve is shifted to the right by: (a) Increased temperature (hyperthermia), (b) Increased PaCO2, (c) Decreased pH (increased H+ concentration; the BOHR EFFECT), and (d) Increased 2,3-BISPHOSPHOGLYCERATE (2,3-BPG). (2) MOLECULAR MECHANISM: Protons (H+) bind to specific histidine residues, and 2,3-BPG binds to a positively charged central cavity between the beta-chains of hemoglobin, stabilizing the deoxygenated 'TAUT' (T) CONFORMATION over the oxygenated 'RELAXED' (R) conformation. (3) PHYSIOLOGICAL RESULT: A rightward shift increases P50 (the partial pressure of oxygen at which hemoglobin is 50% saturated, normally ~27 mm Hg; rises to > 35 mm Hg). This means hemoglobin has a LOWER AFFINITY for oxygen at any given PO2, allowing large amounts of bound oxygen to be UNLOADED from erythrocytes into the interstitial fluid and mitochondria of contracting muscle fibers without requiring a severe drop in tissue capillary PO2."
      ],
      [
        "Leftward shift of the dissociation curve with a decrease in P50; increases hemoglobin's affinity for oxygen, maximizing loading of oxygen in active tissues",
        "A leftward shift increases oxygen affinity (lowers P50), which impairs oxygen release to tissues; this occurs with hypothermia, alkalosis, low CO2, and fetal hemoglobin (HbF)."
      ],
      [
        "Downward shift of the curve ceiling without change in P50; irreversibly reduces the total oxygen-carrying capacity of hemoglobin without affecting affinity",
        "Reducing oxygen capacity without changing P50 is the hallmark of chronic anemia or acute blood loss, not the allosteric rightward Bohr shift of exercise."
      ],
      [
        "Rightward shift of the dissociation curve caused by preferential oxidation of ferrous (Fe2+) heme iron to ferric (Fe3+) iron",
        "Oxidation of Fe2+ to Fe3+ produces methemoglobinemia, which causes a LEFTWARD shift of the remaining hemes and impairs tissue unloading."
      ],
      [
        "Transformation of the sigmoidal oxygen binding curve into a hyperbolic curve indistinguishable from that of monomeric myoglobin",
        "A hyperbolic binding curve occurs in myoglobin or monomeric hemoglobin subunits lacking cooperative binding (e.g., isolated alpha chains), not tetrameric adult hemoglobin during exercise."
      ]
    ],
    "shortestValidSolution": "Exercising muscle (high temp, high CO2, high H+, high 2,3-BPG) -> rightward shift of Hb-O2 curve -> increased P50 -> lower affinity -> enhanced O2 unloading to tissue.",
    "necessaryInference": "Recognize that acidosis, elevated CO2, hyperthermia, and 2,3-BPG shift the hemoglobin dissociation curve to the right, raising P50 to facilitate oxygen unloading to exercising tissue.",
    "strongestDistractor": "Leftward shift of the dissociation curve with a decrease in P50; increases hemoglobin's affinity for oxygen, maximizing loading of oxygen in active tissues",
    "distractorExclusion": "Leftward shifts increase O2 affinity and occur with alkalosis/hypothermia; exercise conditions (acidosis, heat, CO2) shift the curve rightward to promote unloading.",
    "citation": "Kaufman DP, et al. Physiology, Oxyhemoglobin Dissociation Curve. In: StatPearls [Internet]. StatPearls Publishing; 2023. PMID: 29763189.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Core medical physiology question integrating metabolic indicators of exercise (acidosis, temperature, CO2, 2,3-BPG), allosteric T-state stabilization, and P50.",
      "distractorExclusionNotes": "Distractors differentiate right vs left shifts, anemia (capacity reduction), methemoglobinemia, and hyperbolic kinetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0443",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Respiratory",
    "topic": "Dyshemoglobinemias: Carbon Monoxide vs Methemoglobinemia",
    "subtopic": "Normal PaO2, Co-Oximetry, Left Shift, and Methylene Blue vs Hyperbaric Oxygen",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man who works in an agricultural chemical plant is brought to the emergency department after an accidental skin and respiratory exposure to an aniline dye derivative. He complains of headache, nausea, and shortness of breath. On physical examination, he appears lethargic with marked slate-gray, bluish discoloration of his lips, tongue, and nail beds that does not improve after administration of 100% oxygen via a non-rebreather mask. Standard dual-wavelength pulse oximetry reads 85% and remains fixed at 85% despite continuous high-flow oxygen. Blood drawn for laboratory testing appears abnormally chocolate-brown and fails to turn bright red upon exposure to room air. Arterial blood gas demonstrates:\n- pH: 7.38\n- PaCO2: 36 mm Hg\n- PaO2: 102 mm Hg (normal)\n- Calculated SaO2: 98%\n\nCo-oximetry confirms a methemoglobin fraction of 38%. Which of the following describes the molecular alteration in hemoglobin in this condition, and what is the definitive pharmacological antidote?",
    "choices": [
      [
        "Oxidation of heme iron from the ferrous (Fe2+) state to the ferric (Fe3+) state, which cannot bind oxygen and causes an allosteric leftward shift of remaining ferrous hemes; intravenous methylene blue is the definitive antidote",
        "Methemoglobinemia occurs when the normal ferrous (Fe2+) state of heme iron is oxidized to the FERRIC (Fe3+) STATE by oxidizing chemicals (e.g., aniline dyes, nitrites/nitrates, dapsone, sulfonamides, local anesthetics such as benzocaine). (1) PATHOPHYSIOLOGY: Ferric (Fe3+) iron CANNOT BIND MOLECULAR OXYGEN. Furthermore, the presence of ferric iron induces an allosteric conformational change in the remaining normal ferrous (Fe2+) hemes within the hemoglobin tetramer, INCREASING THEIR OXYGEN AFFINITY and causing a severe LEFTWARD SHIFT of the dissociation curve. This severely impairs the unloading of oxygen to peripheral tissues, producing profound cellular hypoxia and lactic acidosis despite normal dissolved oxygen in blood. (2) DIAGNOSTIC HALLMARKS: Dissolved arterial oxygen tension (PaO2) is COMPLETELY NORMAL (100 mm Hg) because PaO2 reflects oxygen dissolved in plasma, which is independent of hemoglobin. Pulse oximetry reads falsely ~85% (due to equal absorbance of 660 nm and 940 nm light by methemoglobin). The blood appears chocolate-brown and does not change color on air exposure. (3) TREATMENT: The definitive antidote is INTRAVENOUS METHYLENE BLUE, which acts as an electron acceptor for NADPH-dependent methemoglobin reductase, rapidly reducing ferric (Fe3+) iron back to ferrous (Fe2+) iron."
      ],
      [
        "Competitive binding of carbon monoxide to ferrous (Fe2+) heme with 200-fold higher affinity than oxygen, forming carboxyhemoglobin; 100% hyperbaric oxygen is the definitive antidote",
        "Carbon monoxide poisoning involves CO binding to Fe2+ (not oxidation to Fe3+), blood appears cherry-red (not chocolate-brown), and treatment is 100% normobaric or hyperbaric oxygen (not methylene blue)."
      ],
      [
        "Irreversible binding of cyanide ions to ferric iron in mitochondrial cytochrome c oxidase inhibiting complex IV; intravenous hydroxocobalamin is the definitive antidote",
        "Cyanide toxicity poisons mitochondrial cytochrome c oxidase (complex IV) without directly altering hemoglobin color or causing an 85% fixed pulse oximetry plateau; antidote is hydroxocobalamin."
      ],
      [
        "Irreversible covalent modification of the beta-globin chain by covalent adducts forming sulfhemoglobin; emergent red blood cell exchange transfusion is the only therapy",
        "Sulfhemoglobinemia causes green-tinged blood and does not respond to methylene blue, but aniline dyes classically cause methemoglobinemia, which responds promptly to methylene blue."
      ],
      [
        "Autoimmune IgG binding to erythrocyte Rh antigens activating complement-mediated intravascular hemolysis; high-dose intravenous methylprednisolone is the definitive antidote",
        "Autoimmune hemolytic anemia causes jaundice, spherocytes, and a positive Coombs test, without oxidation of heme iron to the chocolate-brown ferric state."
      ]
    ],
    "shortestValidSolution": "Aniline exposure + cyanosis unresponsive to O2 + chocolate-brown blood + normal PaO2 + 85% fixed sat = Methemoglobinemia (Fe2+ oxidized to Fe3+; treated with IV methylene blue).",
    "necessaryInference": "Identify methemoglobinemia from oxidizing exposure, chocolate blood, and pulse oximeter saturation gap; recognize Fe2+ -> Fe3+ oxidation and methylene blue antidote.",
    "strongestDistractor": "Competitive binding of carbon monoxide to ferrous (Fe2+) heme with 200-fold higher affinity than oxygen, forming carboxyhemoglobin; 100% hyperbaric oxygen is the definitive antidote",
    "distractorExclusion": "Carbon monoxide produces cherry-red blood and carboxyhemoglobin; aniline dye oxidation produces chocolate-brown blood and methemoglobin (Fe3+), reversed by methylene blue.",
    "citation": "Wright RO, et al. Methemoglobinemia: etiology, pharmacology, and clinical management. Ann Emerg Med. 1999;34(5):646-656. PMID: 10533013.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive Step 1 item evaluating dyshemoglobinemias: distinguishing methemoglobinemia from CO poisoning and cyanide, and specifying oxidation state and antidote.",
      "distractorExclusionNotes": "Distractors feature carbon monoxide (Fe2+, hyperbaric O2), cyanide (cytochrome c oxidase), sulfhemoglobin, and autoimmune hemolysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0444",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "High-Altitude Acclimatization Physiology",
    "subtopic": "Hypobaric Hypoxia, Respiratory Alkalosis, Renal Bicarbonate Wasting, and Erythropoietin Response",
    "provisionalDifficulty": 5,
    "stem": "A 27-year-old mountaineer ascends from sea level to a base camp located at 4,300 meters (14,100 feet; barometric pressure 450 mm Hg). Upon arrival, she experiences acute lightheadedness, mild headache, and hyperpnea. Over the subsequent 5 days, her acute symptoms resolve as physiological acclimatization occurs. On day 6 at base camp, an arterial blood gas drawn while resting at ambient altitude demonstrates: \n- pH: 7.43\n- PaCO2: 26 mm Hg\n- PaO2: 44 mm Hg\n- Serum HCO3-: 17 mEq/L\n\nWhich of the following physiological adaptations occurs during this acclimatization period to restore arterial pH toward normal while preserving systemic tissue oxygenation?",
    "choices": [
      [
        "Compensatory renal excretion of bicarbonate via down-regulation of proximal tubular Na+/H+ exchangers and carbonic anhydrase, coupled with an increase in intraerythrocytic 2,3-bisphosphoglycerate (2,3-BPG) and HIF-1alpha-driven renal erythropoietin secretion",
        "Acclimatization to high altitude involves sequential organ adaptations to hypobaric hypoxia: (1) HYPERVENTILATION: Decreased atmospheric PO2 stimulates peripheral chemoreceptors in the carotid bodies, triggering hyperventilation. Increased minute ventilation drives alveolar PACO2 and arterial PaCO2 down (PaCO2 26 mm Hg), producing an acute RESPIRATORY ALKALOSIS (elevated pH initially). (2) RENAL COMPENSATION: Within 24-72 hours, the kidneys compensate by EXCRETING BICARBONATE in the urine. Proximal tubule Na+/H+ exchange and carbonic anhydrase activity decrease, lowering serum bicarbonate (from 24 to 17 mEq/L). This metabolic compensation brings arterial pH back down toward the normal range (pH 7.43, fully compensated chronic respiratory alkalosis), which relieves central chemoreceptor braking and permits sustained hyperventilation. (3) ERYTHROCYTE AND TISSUE ADAPTATIONS: Hypoxia stabilizes Hypoxia-Inducible Factor-1alpha (HIF-1alpha), driving transcription of ERYTHROPOIETIN (EPO) by renal peritubular interstitial cells, stimulating reticulocytosis and polycythemia over weeks. Simultaneously, erythrocytes increase synthesis of 2,3-BISPHOSPHOGLYCERATE (2,3-BPG), shifting the hemoglobin curve to the right to facilitate oxygen release in hypoxic tissues."
      ],
      [
        "Renal retention of hydrogen ions and massive secretion of ammonium to produce a compensatory metabolic alkalosis that offsets hypoxemic lactic acidosis",
        "Metabolic acidosis (bicarbonate excretion), not metabolic alkalosis, is the compensatory response to high-altitude respiratory alkalosis."
      ],
      [
        "Central chemoreceptor desensitization resulting in a progressive rise in arterial PaCO2 back to sea-level values (40 mm Hg) to normalize blood pH",
        "PaCO2 remains chronically depressed (20-28 mm Hg) at high altitude to sustain hyperventilation; it does not return to sea-level values."
      ],
      [
        "Leftward shift of the hemoglobin-oxygen dissociation curve mediated by acute suppression of erythrocyte 2,3-bisphosphoglycerate synthesis",
        "2,3-BPG synthesis INCREASES at high altitude, which shifts the curve to the right to enhance tissue oxygen unloading."
      ],
      [
        "Suppression of renal erythropoietin gene transcription by elevated arterial oxygen content following hyperventilation",
        "EPO transcription is STIMULATED by renal hypoxia via HIF-1alpha, leading to secondary polycythemia, not suppressed."
      ]
    ],
    "shortestValidSolution": "High altitude -> hypoxia drives hyperventilation -> respiratory alkalosis (low PaCO2) -> kidneys excrete HCO3- to restore pH; HIF-1alpha stimulates EPO and 2,3-BPG rises.",
    "necessaryInference": "Integrate high-altitude respiratory alkalosis with compensatory renal bicarbonate excretion and chronic hematologic adaptations (HIF-1alpha, EPO, 2,3-BPG).",
    "strongestDistractor": "Leftward shift of the hemoglobin-oxygen dissociation curve mediated by acute suppression of erythrocyte 2,3-bisphosphoglycerate synthesis",
    "distractorExclusion": "2,3-BPG increases (not suppresses) at altitude, shifting the curve rightward to improve peripheral oxygen delivery.",
    "citation": "West JB. High-altitude medicine. Am J Respir Crit Care Med. 2012;186(12):1229-1237. PMID: 23103737.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive integrative physiology question evaluating respiratory, renal, and hematologic axes during high-altitude acclimatization.",
      "distractorExclusionNotes": "Distractors invert renal compensation (acid retention), ventilatory mechanics (raising CO2), and allosteric 2,3-BPG regulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0445",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Exercise Physiology Pulmonary Mechanics",
    "subtopic": "Unchanged Mean Arterial Blood Gases, Decreased Dead Space Fraction, and Increased Diffusing Capacity",
    "provisionalDifficulty": 4,
    "stem": "A healthy 24-year-old medical student participates in an exercise physiology study. Baseline measurements at rest show oxygen consumption (VO2) of 250 mL/min, carbon dioxide production (VCO2) of 200 mL/min, minute ventilation of 6.0 L/min, and heart rate of 70/min. She then performs moderate, steady-state treadmill exercise below her anaerobic threshold, resulting in a five-fold increase in VO2 to 1,250 mL/min. Which of the following sets of physiological changes occurs in her pulmonary system during this moderate steady-state aerobic exercise compared to resting baseline?",
    "choices": [
      [
        "Arterial PaO2 and PaCO2 remain virtually unchanged; pulmonary capillary blood volume increases with recruitment and distension of apical capillaries, resulting in a decreased ratio of dead space to tidal volume (V_D/V_T) and an increased diffusing capacity (DLCO)",
        "During moderate steady-state aerobic exercise below the anaerobic (lactate) threshold: (1) BLOOD GASES: Minute ventilation and alveolar ventilation increase in direct proportion to metabolic oxygen consumption (VO2) and carbon dioxide production (VCO2). Consequently, mean ARTERIAL PaO2 AND PaCO2 REMAIN VIRTUALLY UNCHANGED compared to resting baseline (PaO2 ~95-100 mm Hg, PaCO2 ~40 mm Hg). Arterial pH also remains normal (no metabolic lactic acidosis occurs below the anaerobic threshold). In contrast, VENOUS blood gas tensions change drastically: mixed venous PvO2 drops from 40 to ~25 mm Hg, and mixed venous PvCO2 rises from 46 to > 60 mm Hg. (2) PULMONARY HEMODYNAMICS AND DLCO: Cardiac output increases several-fold. Increased pulmonary arterial pressure causes RECRUITMENT AND DISTENSION of previously underperfused apical pulmonary capillaries (Zone 1 converts to Zone 2/3). This recruitment dramatically increases functional pulmonary capillary surface area, causing an INCREASE IN DLCO. (3) DEAD SPACE: Because tidal volume (V_T) increases much more than anatomic dead space (V_D), the physiological DEAD SPACE FRACTION (V_D/V_T) DECREASES significantly, making ventilation substantially more efficient."
      ],
      [
        "Arterial PaO2 increases sharply to > 120 mm Hg due to hyperventilation, while arterial PaCO2 drops to < 30 mm Hg producing marked acute respiratory alkalosis",
        "Arterial blood gases do not change during moderate aerobic exercise; hyperventilation lowering PaCO2 occurs only above the anaerobic threshold to compensate for lactic acidosis."
      ],
      [
        "Arterial PaO2 drops significantly to < 70 mm Hg due to extreme shortening of erythrocyte pulmonary capillary transit time below the diffusion equilibrium threshold",
        "Diffusion limitation with falling PaO2 occurs only in severe disease (pulmonary fibrosis) or elite athletes at extreme VO2 max, not in healthy individuals at moderate exercise."
      ],
      [
        "Pulmonary vascular resistance increases dramatically due to sympathetic vasoconstriction, leading to an increased ratio of dead space to tidal volume (V_D/V_T)",
        "Pulmonary vascular resistance DECREASES during exercise due to recruitment and distension of pulmonary capillaries; V_D/V_T decreases, not increases."
      ],
      [
        "Diffusing capacity of the lung (DLCO) decreases by 50% because the velocity of capillary blood flow shears the alveolar-capillary endothelial glycocalyx",
        "DLCO INCREASES during exercise (by 2- to 3-fold) due to capillary recruitment expanding the total alveolar-capillary surface area for diffusion."
      ]
    ],
    "shortestValidSolution": "Moderate steady-state exercise -> PaO2 and PaCO2 stay normal (ventilation matches metabolism); apical capillary recruitment increases DLCO and decreases V_D/V_T.",
    "necessaryInference": "Recognize that during moderate exercise below anaerobic threshold, arterial PaO2 and PaCO2 remain unchanged, PVR drops, DLCO increases, and V_D/V_T decreases.",
    "strongestDistractor": "Arterial PaO2 increases sharply to > 120 mm Hg due to hyperventilation, while arterial PaCO2 drops to < 30 mm Hg producing marked acute respiratory alkalosis",
    "distractorExclusion": "Ventilation precisely matches metabolism in moderate exercise, keeping arterial PaO2 and PaCO2 normal; hyperventilatory alkalosis does not occur.",
    "citation": "Wasserman K, et al. Principles of Exercise Testing and Interpretation. 5th ed. Lippincott Williams & Wilkins; 2011. NLM ID: 101563229.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental exercise physiology: constancy of arterial blood gases vs venous changes, capillary recruitment, DLCO augmentation, and V_D/V_T reduction.",
      "distractorExclusionNotes": "Distractors feature classic student misconceptions: assuming exercise causes arterial hypoxia, hyperventilation, increased PVR, or impaired DLCO.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0446",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Complications of Neonatal Hyperoxia Therapy",
    "subtopic": "Bronchopulmonary Dysplasia (Arrested Alveolarization) and Retinopathy of Prematurity",
    "provisionalDifficulty": 5,
    "stem": "A female infant born at 25 weeks of gestation is treated in the neonatal intensive care unit for severe respiratory distress syndrome with surfactant administration and prolonged mechanical ventilation with high concentrations of inspired oxygen (FiO2 0.60 to 0.80) for 4 weeks. Although she survives the acute phase, at 36 weeks postmenstrual age she remains dependent on supplemental oxygen and low-level positive airway pressure. Serial chest radiography demonstrates coarse reticular opacities with alternating areas of hyperinflation and cystic lucencies. Echocardiography reveals right ventricular hypertrophy consistent with pulmonary hypertension. Dilated fundoscopic examination demonstrates peripheral retinal avascularity with extraretinal fibrovascular proliferation and ridge formation at the junction of vascularized and non-vascularized retina. Which of the following cellular mechanisms is primarily responsible for the chronic pulmonary parenchymal changes observed in this infant?",
    "choices": [
      [
        "Hyperoxia- and mechanical stretch-induced oxidative injury disrupting secondary septation, leading to arrested alveolar and microvascular development with simplified, enlarged alveolar spaces and dysmorphic capillary networks (bronchopulmonary dysplasia)",
        "Premature infants (< 28 weeks gestation) who require prolonged supplemental oxygen and mechanical ventilation are at high risk for two severe oxygen-toxicity complications: (1) BRONCHOPULMONARY DYSPLASIA (BPD): The lungs of extreme pre-term infants are in the saccular stage of development (24-36 weeks). Exposure to high concentrations of inspired oxygen generates reactive oxygen species (ROS) that overwhelm immature antioxidant defenses (catalase, superoxide dismutase, glutathione). Compounded by mechanical volutrauma/barotrauma, this oxidative and mechanical injury suppresses critical angiogenic and alveolar growth factors (VEGF, FGF-10, PDGF-A). The result is ARRESTED SECONDARY ALVEOLAR SEPTATION AND MICROVASCULAR DYSMORPHISM. Histologically, instead of millions of delicate alveoli, the lungs show fewer, simplified, grossly enlarged alveolar saccules with thick septa, abnormal elastin deposition, and pruned capillary networks, leading to chronic oxygen dependence and pulmonary hypertension. (2) RETINOPATHY OF PREMATURITY (ROP): Hyperoxia suppresses local VEGF secretion in the developing retina, causing vaso-obliteration and halting vessel growth toward the periphery (Phase 1). Subsequently, as the infant matures and metabolic demand outstrips oxygen supply, the avascular peripheral retina becomes severely hypoxic, triggering a massive rebound surge in VEGF and erythropoietin that drives aberrant, fragile NEOVASCULAR PROLIFERATION and retinal detachment (Phase 2)."
      ],
      [
        "Severe autoimmune destruction of alveolar type I pneumocytes by maternal transplacental IgG antibodies targeting the surfactant protein A receptor",
        "BPD is an oxidative and mechanical injury of prematurity, not an alloimmune or autoimmune disorder mediated by maternal transplacental antibodies."
      ],
      [
        "Congenital failure of neural crest cell migration into the walls of terminal bronchioles causing complete absence of autonomic smooth muscle innervation",
        "Failure of neural crest migration causes Hirschsprung disease in the colon, not alveolar arrest in premature lungs."
      ],
      [
        "Clonal proliferation of pulmonary capillary endothelial cells driven by activating somatic mutations in the GNAQ oncogene",
        "GNAQ somatic mutations cause Sturge-Weber syndrome capillary-venous malformations, not hyperoxia-induced bronchopulmonary dysplasia."
      ],
      [
        "Defective ciliary dynein arms leading to complete immobility of respiratory cilia and secondary post-obstructive bronchiectasis",
        "Dynein arm defects cause primary ciliary dyskinesia (Kartagener syndrome with situs inversus), not neonatal oxygen-induced alveolar simplification."
      ]
    ],
    "shortestValidSolution": "Preterm neonate + prolonged high FiO2/ventilation + chronic O2 dependence + ROP = Bronchopulmonary dysplasia (hyperoxia/stretch disrupts septation -> arrested alveolar development with simplified enlarged saccules).",
    "necessaryInference": "Identify the cellular mechanism of bronchopulmonary dysplasia: oxygen toxicity and barotrauma arrest secondary septation in the saccular stage, creating simplified, enlarged alveoli.",
    "strongestDistractor": "Severe autoimmune destruction of alveolar type I pneumocytes by maternal transplacental IgG antibodies targeting the surfactant protein A receptor",
    "distractorExclusion": "BPD is caused by oxidative stress and volutrauma disrupting alveolar septation, not maternal autoantibodies or alloimmunity.",
    "citation": "Jobe AH. The new bronchopulmonary dysplasia. Annu Rev Med. 2011;62:401-412. PMID: 20887198.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive perinatal pathology item linking prolonged oxygen therapy, retinal vasoproliferation (ROP), and modern BPD histopathology (arrested alveolarization).",
      "distractorExclusionNotes": "Distractors represent unrelated genetic/developmental conditions: autoimmune injury, neural crest defects, GNAQ mutations, and ciliary dyskinesia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0447",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Emphysema Phenotypes: Centriacinar vs Panacinar",
    "subtopic": "Upper Lobe Centriacinar (Smoking) vs Lower Lobe Panacinar (Alpha-1 Antitrypsin Deficiency)",
    "provisionalDifficulty": 4,
    "stem": "An autopsy study examines lung specimens obtained from two individuals who died of end-stage chronic obstructive pulmonary disease: \n- Specimen A: Obtained from a 68-year-old man with a 50 pack-year smoking history. Gross inspection reveals focal, irregular airspaces measuring 3 to 10 mm located predominantly in the upper lobes, with spared peripheral alveolar ducts and sacs. Microscopic examination demonstrates destructive enlargement limited to respiratory bronchioles, accompanied by abundant black anthracotic pigment and an intense intraluminal accumulation of CD8+ T lymphocytes and pigment-laden macrophages.\n- Specimen B: Obtained from a 42-year-old non-smoker with homozygous Pi*ZZ alpha-1 antitrypsin deficiency. Gross inspection reveals uniform, spongy, parchment-thin lung parenchyma with diffuse destruction affecting predominantly the lower lobes and anterior lung margins. Microscopic examination demonstrates uniform, confluent enlargement and septal destruction extending uniformly from the respiratory bronchioles all the way through the terminal alveolar sacs.\n\nWhich of the following terms correctly identifies the emphysema subtype present in Specimen A and Specimen B, respectively?",
    "choices": [
      [
        "Specimen A: Centriacinar (centrilobular) emphysema; Specimen B: Panacinar (panlobular) emphysema",
        "Emphysema is defined pathologically as permanent, abnormal enlargement of airspaces distal to terminal bronchioles accompanied by destruction of alveolar walls without obvious fibrosis: (1) CENTRIACINAR (CENTRILOBULAR) EMPHYSEMA (Specimen A): The prototypical smoking-induced lesion. Cigarette smoke particles deposit preferentially at the bifurcation of RESPIRATORY BRONCHIOLES (the central/proximal part of the acinus). Smoke-activated alveolar macrophages recruit neutrophils that release neutrophil elastase and matrix metalloproteinases, selectively destroying respiratory bronchioles while leaving distal alveolar ducts and sacs initially intact. Pigment accumulation (anthracosis) is prominent, and lesions show a marked PREDILECTION FOR THE UPPER LOBES (apical segments), where ventilation-perfusion ratios are higher and lymphatic clearance of particulates is less efficient. (2) PANACINAR (PANLOBULAR) EMPHYSEMA (Specimen B): Characterizes ALPHA-1 ANTITRYPSIN DEFICIENCY (PiZZ genotype). Because AAT is a circulating antiprotease delivered via the bloodstream, systemic deficiency permits uninhibited elastase activity throughout the ENTIRE ACINUS (from respiratory bronchiole through terminal alveoli). Panacinar emphysema exhibits a marked PREDILECTION FOR THE LOWER LOBES and anterior margins, where baseline pulmonary blood flow (and therefore delivery of uninhibited neutrophils) is highest."
      ],
      [
        "Specimen A: Panacinar (panlobular) emphysema; Specimen B: Centriacinar (centrilobular) emphysema",
        "Reverses the two classic subtypes; smoking causes centriacinar (upper lobes), whereas alpha-1 antitrypsin deficiency causes panacinar (lower lobes)."
      ],
      [
        "Specimen A: Distal acinar (paraseptal) emphysema; Specimen B: Irregular (scar) emphysema",
        "Paraseptal emphysema affects peripheral subpleural airspaces adjacent to the pleura (predisposing to spontaneous pneumothorax), not central respiratory bronchioles."
      ],
      [
        "Specimen A: Compensatory hyperinflation; Specimen B: Interstitial emphysema",
        "Compensatory hyperinflation is alveolar dilation without septal destruction following lobectomy; interstitial emphysema involves air dissection into connective tissue septa."
      ],
      [
        "Specimen A: Centriacinar emphysema; Specimen B: Distal acinar (paraseptal) emphysema",
        "Specimen B shows uniform destruction throughout all acinar structures in the lower lobes (panacinar), not isolated subpleural paraseptal destruction."
      ]
    ],
    "shortestValidSolution": "Specimen A (smoker, upper lobes, respiratory bronchioles only) = Centriacinar emphysema; Specimen B (AAT deficiency, lower lobes, entire acinus) = Panacinar emphysema.",
    "necessaryInference": "Distinguish centriacinar (smoking, upper lobe, respiratory bronchiole) from panacinar (AAT deficiency, lower lobe, entire acinus) emphysema.",
    "strongestDistractor": "Specimen A: Panacinar (panlobular) emphysema; Specimen B: Centriacinar (centrilobular) emphysema",
    "distractorExclusion": "This distractor reverses the anatomical distributions; smoking produces centriacinar/upper lobe lesions, while AAT deficiency produces panacinar/lower lobe lesions.",
    "citation": "Kumar V, Abbas AK, Aster JC. Robbins and Cotran Pathologic Basis of Disease. 10th ed. Elsevier; 2020:678-684. NLM ID: 101758550.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Essential comparative histopathology item evaluating gross anatomical and acinar structural differences between centriacinar and panacinar emphysema.",
      "distractorExclusionNotes": "Distractors include reversal of phenotypes and confusion with paraseptal (distal acinar) or scar-related irregular emphysema.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0448",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Pneumothorax Pathophysiology",
    "subtopic": "Secondary Spontaneous Pneumothorax vs Tension Pneumothorax Mechanics",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man with severe GOLD Stage IV chronic obstructive pulmonary disease (FEV1 28% of predicted) on long-term home oxygen therapy suddenly develops acute, severe right-sided pleuritic chest pain and acute respiratory distress while watching television. On arrival at the emergency department, he is sitting upright, gasping for air, and diaphoretic. Vital signs demonstrate blood pressure 138/84 mm Hg, heart rate 108/min, respiratory rate 34/min, and oxygen saturation 81% while receiving oxygen via nasal cannula. Physical examination reveals hyperresonance to percussion, severely diminished breath sounds, and absent tactile fremitus over the entire right hemithorax. Trachea is midline, and jugular venous pressure is 7 cm H2O (normal). Chest radiography demonstrates a 60% right-sided pneumothorax with visible visceral pleural line and hyperinflated emphysematous lungs with apical bullae, but no contralateral mediastinal or tracheal shift. Which of the following pathophysiological mechanisms directly initiated this acute event?",
    "choices": [
      [
        "Spontaneous rupture of an emphysematous apical subpleural bleb or bulla into the negative-pressure pleural space, allowing alveolar air to equilibrate with intrapleural pressure until the lung collapses to its unstressed volume (secondary spontaneous pneumothorax)",
        "Pneumothorax is categorized by etiology and mechanics: (1) SECONDARY SPONTANEOUS PNEUMOTHORAX (SSP): Occurs in patients with pre-existing lung disease, most commonly severe COPD with EMPHYSEMA. Proteolytic destruction of alveolar walls and distal acinar architecture forms enlarged airspaces; when these occur immediately beneath the visceral pleura, they form SUBPLEURAL BLEBS (< 1-2 cm) or BULLAE (> 1-2 cm). Spontaneous rupture of a subpleural bulla creates a direct communication between the alveolar space and the PLEURAL CAVITY. Because intrapleural pressure is normally negative (-5 cm H2O at rest) relative to atmospheric/alveolar pressure (0 cm H2O), air rushes down the pressure gradient into the pleural space. As intrapleural pressure rises toward atmospheric pressure, the inward elastic recoil of the lung is unopposed, causing the lung to collapse to its unstressed volume. (2) DISTINCTION FROM TENSION PNEUMOTHORAX: In simple spontaneous pneumothorax, the defect acts as an open or bidirectional communication, so intrapleural pressure does not exceed atmospheric pressure; the trachea remains MIDLINE and systemic venous return is preserved (normal BP and normal JVP). In TENSION pneumothorax, a one-way 'ball-valve' flap causes intrapleural pressure to exceed atmospheric pressure, producing mediastinal shift, IVC compression, severe hypotension, and elevated JVP."
      ],
      [
        "One-way ball-valve flap mechanism generating positive intrapleural pressure exceeding atmospheric pressure throughout expiration, causing acute compression of the superior vena cava and obstructive shock",
        "A one-way valve with positive intrapleural pressure defines TENSION pneumothorax, which causes tracheal deviation, high JVP, and hemodynamic collapse (hypotension); this patient has normal BP and midline trachea."
      ],
      [
        "Primary spontaneous rupture of subpleural apical blebs occurring in an otherwise structurally normal lung in a tall, slender young male",
        "Primary spontaneous pneumothorax occurs in young, tall, thin males WITHOUT underlying lung disease; this 67-year-old with severe COPD has SECONDARY spontaneous pneumothorax."
      ],
      [
        "Direct erosion of a calcified subpleural granuloma through both visceral and parietal pleurae creating a persistent broncho-cutaneous fistula",
        "Erosion of a calcified granuloma through chest wall layers causing a bronchocutaneous fistula is rare (empyema necessitans), not typical rupture of emphysematous bullae."
      ],
      [
        "Traumatic puncture of the parietal pleura and intercostal neurovascular bundle by sudden inward fracture of a demineralized thoracic rib",
        "No trauma or rib fracture occurred; the patient was sitting quietly watching television, confirming a non-traumatic spontaneous event."
      ]
    ],
    "shortestValidSolution": "Severe COPD + sudden pleuritic pain/hyperresonance + visible pleural line + midline trachea/stable BP = Secondary spontaneous pneumothorax from ruptured apical emphysematous bulla.",
    "necessaryInference": "Differentiate secondary spontaneous pneumothorax (rupture of emphysematous bulla, stable hemodynamics, midline trachea) from tension pneumothorax and primary spontaneous pneumothorax.",
    "strongestDistractor": "One-way ball-valve flap mechanism generating positive intrapleural pressure exceeding atmospheric pressure throughout expiration, causing acute compression of the superior vena cava and obstructive shock",
    "distractorExclusion": "Tension pneumothorax causes contralateral tracheal shift, jugular distension, and hypotension; this patient has a midline trachea and stable blood pressure.",
    "citation": "MacDuff A, et al. Management of spontaneous pneumothorax: British Thoracic Society pleural disease guideline 2010. Thorax. 2010;65 Suppl 2:ii18-ii31. PMID: 20696690.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests clinical and physiological discrimination between secondary spontaneous pneumothorax (underlying COPD, ruptured bulla) and tension pneumothorax.",
      "distractorExclusionNotes": "Distractors contrast tension pneumothorax (one-way valve/shock), primary spontaneous pneumothorax (healthy tall youth), and trauma.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0449",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Hypoxic Pulmonary Vasoconstriction Mechanics",
    "subtopic": "Inhibition of Voltage-Gated Potassium Channels (Kv) in Pulmonary Arterial Smooth Muscle",
    "provisionalDifficulty": 5,
    "stem": "An isolated, ventilated, and blood-perfused rat lung preparation is utilized to investigate regional pulmonary vascular control mechanisms. When the gas mixture ventilating the left lung is switched from normoxic air (21% O2) to a hypoxic mixture (3% O2) while right lung ventilation remains normoxic, pulmonary arterial blood flow to the left lung decreases by 72% within 3 minutes, with an equivalent diversion of blood flow to the well-ventilated right lung. Biochemical and electrophysiological patch-clamp analysis of isolated precapillary pulmonary arterial smooth muscle cells (PASMCs) exposed to acute hypoxia reveals closure of cell membrane potassium channels, membrane depolarization, and a brisk surge in intracellular free calcium. Which of the following electrophysiological events initiates this hypoxic vasoconstrictor response?",
    "choices": [
      [
        "Inhibition of oxygen-sensitive voltage-gated potassium channels (Kv1.5 and Kv2.1) causing smooth muscle cell membrane depolarization, opening of L-type voltage-gated calcium channels, and calcium influx triggering contraction (Euler-Liljestrand mechanism)",
        "Hypoxic Pulmonary Vasoconstriction (HPV, the Euler-Liljestrand mechanism) is an intrinsic physiological reflex unique to the pulmonary circulation (in sharp contrast to systemic vascular beds, which VASODILATE in response to hypoxia). (1) PURPOSE: HPV optimizes ventilation-perfusion matching by redirecting blood flow away from poorly ventilated, hypoxic alveoli toward well-oxygenated lung regions, minimizing intrapulmonary shunt. (2) CELLULAR ELECTROPHYSIOLOGY: Pulmonary arterial smooth muscle cells (PASMCs) serve as oxygen sensors. In normoxia, VOLTAGE-GATED POTASSIUM CHANNELS (specifically Kv1.5 and Kv2.1) remain active, allowing K+ efflux that maintains a negative resting membrane potential (~ -50 to -60 mV). Under hypoxic conditions, mitochondrial reactive oxygen species signaling or direct redox changes INHIBIT OXYGEN-SENSITIVE Kv CHANNELS. (3) Reduced K+ efflux leads to intracellular K+ accumulation and SMOOTH MUSCLE CELL MEMBRANE DEPOLARIZATION. Depolarization opens L-TYPE VOLTAGE-GATED CALCIUM CHANNELS, permitting rapid extracellular Ca2+ influx. Elevated cytosolic free Ca2+ binds calmodulin, activating myosin light chain kinase (MLCK) and causing PRECAPILLARY PULMONARY ARTERIAL VASOCONSTRICTION."
      ],
      [
        "Activation of large-conductance calcium-activated potassium channels (BK_Ca) causing severe membrane hyperpolarization and extrusion of intracellular magnesium",
        "Hyperpolarization (via K+ channel opening) relaxes vascular smooth muscle; HPV requires K+ channel INHIBITION and membrane DEPOLARIZATION to contract."
      ],
      [
        "Massive endothelial synthesis of prostacyclin activating smooth muscle IP receptors and adenylyl cyclase to elevate cyclic AMP",
        "Prostacyclin (PGI2) is a potent pulmonary VASODILATOR that raises cAMP; HPV is a vasoconstrictive response mediated by Ca2+ influx."
      ],
      [
        "Stimulation of pulmonary endothelial nitric oxide synthase (eNOS) producing cyclic GMP-mediated dephosphorylation of myosin light chains",
        "Nitric oxide causes vasodilation via cGMP and MLCP; hypoxia inhibits this pathway and activates precapillary vasoconstriction."
      ],
      [
        "Blockade of endothelin ETA receptors by hypoxia-induced peptides terminating vascular smooth muscle IP3-mediated calcium release",
        "Endothelin receptor blockade causes vasodilation; endothelin-1 is a vasoconstrictor that augments, rather than blocks, pulmonary hypertension."
      ]
    ],
    "shortestValidSolution": "Alveolar hypoxia closes oxygen-sensitive Kv channels in pulmonary smooth muscle -> membrane depolarization -> L-type Ca2+ channel opening -> Ca2+ influx -> hypoxic vasoconstriction.",
    "necessaryInference": "Identify Kv channel inhibition and membrane depolarization leading to L-type Ca2+ channel opening as the molecular mechanism of hypoxic pulmonary vasoconstriction.",
    "strongestDistractor": "Stimulation of pulmonary endothelial nitric oxide synthase (eNOS) producing cyclic GMP-mediated dephosphorylation of myosin light chains",
    "distractorExclusion": "eNOS and cGMP mediate vasodilation (counteracting HPV); HPV is initiated by Kv channel closure and calcium-driven vasoconstriction.",
    "citation": "Sylvester JT, et al. Hypoxic pulmonary vasoconstriction. Physiol Rev. 2012;92(1):367-526. PMID: 22298659.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests molecular biophysics of Euler-Liljestrand mechanism (HPV): precapillary PASMC oxygen sensing, Kv closure, and voltage-gated Ca2+ entry.",
      "distractorExclusionNotes": "Distractors contrast vasodilatory pathways (BK_Ca hyperpolarization, prostacyclin cAMP, nitric oxide cGMP) with the vasoconstrictive Kv mechanism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0450",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Respiratory",
    "topic": "Ventilator-Induced Lung Injury (VILI)",
    "subtopic": "Volutrauma vs Barotrauma, Cyclic Atelectrauma, and Biotrauma Cytokine Release",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with severe acute respiratory distress syndrome (ARDS) secondary to aspiration pneumonia is receiving invasive mechanical ventilation in the intensive care unit. Initially, he is ventilated using volume-control ventilation with a traditional high tidal volume of 12 mL/kg predicted body weight (850 mL) and zero positive end-expiratory pressure (ZEEP). After 48 hours, his oxygenation deteriorates significantly, and his static compliance drops from 35 mL/cm H2O to 18 mL/cm H2O. Repeat chest CT reveals marked worsening of bilateral alveolar opacities with new interstitial emphysema and subpleural pneumatoceles. Bronchoalveolar lavage fluid demonstrates a marked increase in protein concentration, neutrophil counts, and high concentrations of pro-inflammatory cytokines (IL-1beta, TNF-alpha, IL-6, and IL-8). Plasma concentrations of these same cytokines are also markedly elevated, accompanied by new-onset oliguria and hypotension. Which of the following mechanical and biological mechanisms primarily explains how high-tidal-volume mechanical ventilation induced this widespread tissue damage?",
    "choices": [
      [
        "Excessive alveolar overdistension at end-inspiration (volutrauma) combined with repetitive cyclic recruitment and derecruitment of unstable alveoli at end-expiration (atelectrauma), generating high shear stress that disrupts the epithelial-endothelial barrier and triggers systemic cytokine release (biotrauma)",
        "Ventilator-Induced Lung Injury (VILI) is a severe iatrogenic complication of mechanical ventilation that encompasses three interrelated mechanical and biological mechanisms: (1) VOLUTRAUMA: Historically attributed to high airway pressure (barotrauma), seminal trials (e.g., ARDSNet 2000) demonstrated that EXCESSIVE END-INSPIRATORY ALVEOLAR OVERDISTENSION (volutrauma from high tidal volumes, e.g., 12 mL/kg) is the primary driver of lung damage. In ARDS, the aerated lung volume is severely reduced ('baby lung'); delivering normal tidal volumes severely overstretches these few patent alveoli. (2) ATELECTRAUMA: Ventilating with inadequate or zero positive end-expiratory pressure (ZEEP) allows unstable, surfactant-deficient alveoli to COLLAPSE AT END-EXPIRATION AND REOPEN AT INSPIRATION. This repetitive cyclic opening and closing generates catastrophic interfacial SHEAR FORCES that rip alveolar epithelial and capillary endothelial cells apart. (3) BIOTRAUMA: Mechanical deformation activates mechanosensitive ion channels and cell signaling pathways, triggering massive de novo synthesis and secretion of pro-inflammatory cytokines (TNF-alpha, IL-1beta, IL-6, IL-8). These cytokines spill over into the systemic circulation, driving distant end-organ failure (acute kidney injury, vasoplegic shock, multiorgan dysfunction syndrome). Lung-protective ventilation (6 mL/kg PBW, plateau pressure < 30 cm H2O, adequate PEEP) directly mitigates volutrauma, atelectrauma, and biotrauma."
      ],
      [
        "Selective barometric rupture of conducting airway cartilaginous rings without disruption of the peripheral alveolar-capillary gas exchange surface",
        "VILI primarily damages the peripheral alveolar-capillary barrier (diffuse alveolar damage), not large conducting cartilaginous airways."
      ],
      [
        "Immediate pulmonary arterial thrombosis caused by mechanical compression of extra-alveolar blood vessels by elevated pleural pressure",
        "Mechanical compression of intra-alveolar capillaries increases PVR, but the primary pathology of VILI is epithelial rupture and cytokine release, not macroscopic arterial thrombosis."
      ],
      [
        "Profound hypocarbic vasoconstriction of systemic coronary arteries secondary to high minute ventilation washing out all carbon dioxide",
        "While hyperventilation can cause hypocapnia, VILI is driven by mechanical alveolar strain and shear stress leading to biotrauma and multiorgan failure."
      ],
      [
        "Pure allergic anaphylactoid response to silicone polymers shedding from the synthetic inner lumen of the endotracheal tube",
        "Endotracheal tube materials are biocompatible; VILI is a mechanical and mechanotransduction-mediated biological injury."
      ]
    ],
    "shortestValidSolution": "High tidal volume + ZEEP = VILI -> volutrauma (overdistension) + atelectrauma (cyclic collapse/reopening shear) -> alveolar-capillary barrier disruption -> biotrauma (systemic cytokine spillover).",
    "necessaryInference": "Integrate the physical and molecular triad of VILI: volutrauma (overdistension), atelectrauma (shear from cyclic reopening), and biotrauma (cytokine spillover causing multiorgan failure).",
    "strongestDistractor": "Selective barometric rupture of conducting airway cartilaginous rings without disruption of the peripheral alveolar-capillary gas exchange surface",
    "distractorExclusion": "VILI targets peripheral alveoli (overdistension and shear), causing alveolar-capillary barrier breakdown; conducting cartilage rings are unaffected.",
    "citation": "Slutsky AS, Ranieri VM. Ventilator-induced lung injury. N Engl J Med. 2013;369(22):2126-2136. PMID: 24283226.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive critical care physiology and pathology item testing modern concepts of VILI: volutrauma, atelectrauma, and biotrauma.",
      "distractorExclusionNotes": "Distractors feature misconceptions about macroscopic barotrauma, thrombosis, hypocapnic spasm, and tube allergies.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
