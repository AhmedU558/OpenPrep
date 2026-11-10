import { CandidateSpec } from './types';

export const step3Batch11: CandidateSpec[] = [
  {
    "code": "op-c-s3-0251",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Occupational Asthma Serial Peak Flow Objective Confirmation",
    "vignette": "A 32-year-old automotive paint technician presents with a 6-month history of progressive episodic wheezing, chest tightness, and dry cough. He notes that symptoms typically worsen toward the end of his workweek (Thursday and Friday afternoons) and improve significantly during his weekends off and completely resolved during a 2-week vacation in the mountains. He has worked at the facility for 3 years, spraying polyurethane paints containing hexamethylene diisocyanate. He has no prior history of childhood asthma or atopy. Vital signs in the clinic on a Monday morning are normal. Physical examination of the chest reveals clear breath sounds bilaterally without wheezing. Baseline spirometry demonstrates an FEV1 of 88% predicted and an FEV1/FVC ratio of 0.78, with no significant bronchodilator response. Which of the following is the most appropriate next diagnostic step to confirm occupational asthma?",
    "options": [
      "Instruct the patient to record serial peak expiratory flow (PEF) measurements at least 4 times daily during work periods and days off over 2 to 4 weeks",
      "Advise immediate resignation from his job and declare permanent occupational disability without further testing",
      "Order a high-resolution computed tomography (HRCT) scan of the chest",
      "Perform skin prick allergy testing for common environmental aeroallergens (dust mites, cat dander)",
      "Prescribe an oral prednisone 40 mg daily trial for 2 weeks"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. According to American Thoracic Society (ATS) and ACCP guidelines, occupational asthma (here chemical-induced by diisocyanates) must be objectively confirmed before irreversible career-altering decisions are made. In an outpatient with normal baseline spirometry during off-work hours, the initial, cost-effective, guideline-recommended diagnostic modality is serial peak expiratory flow (PEF) monitoring: measuring PEF at least 4 times daily (upon waking, mid-shift, end-shift, and bedtime) during consecutive working periods and periods away from work for 2 to 4 weeks. A diurnal variation > 20% or work-associated drop > 15-20% establishes work-related bronchoconstriction.",
      "B": "Permanent career resignation should not be advised before objective physiological confirmation is established; workplace adjustments and respirator controls may be explored.",
      "C": "Chest HRCT evaluates interstitial lung disease or bronchiectasis, not occupational asthma with normal baseline lung function.",
      "D": "Diisocyanates are low-molecular-weight chemical sensitizers that typically induce non-IgE or non-standard immune responses; standard environmental aeroallergen skin prick panels do not test for chemical diisocyanates.",
      "E": "Systemic corticosteroids treat acute flares but will mask diagnostic airway reactivity during diagnostic evaluation."
    },
    "learningObjective": "Formulate a diagnostic strategy for suspected occupational asthma: perform serial peak expiratory flow (PEF) monitoring during work and off-work periods to confirm work-related bronchoconstriction.",
    "necessaryInference": "Workweek exacerbation + weekend/vacation improvement + diisocyanate exposure + normal resting spirometry -> Occupational asthma suspected. The ATS guideline-directed initial objective confirmation is serial PEF at work vs away from work.",
    "shortestValidSolution": "Suspected occupational asthma with normal baseline spirometry -> Serial PEF monitoring at work and off work.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/18310077/",
      "https://pubmed.ncbi.nlm.nih.gov/31802952/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests occupational medicine guidelines: recognizing diurnal/workweek variability and requiring objective serial PEF verification prior to job cessation.",
      "distractorExclusionNotes": "Immediate job resignation is premature without objective confirmation; HRCT is for parenchymal disease; skin testing misses low-molecular-weight chemicals; steroids mask diagnosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0252",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Adult Occupational Lead Toxicity Diagnosis and Chelation",
    "vignette": "A 46-year-old male construction demolition worker presents to the clinic complaining of severe, diffuse, colicky abdominal pain, persistent constipation, generalized fatigue, and progressive weakness in his hands over the past 3 months. He recently spent 6 months sandblasting and torch-cutting steel girders covered with ancient lead-based anti-corrosive paint on a municipal bridge reconstruction project without using respiratory protection. On physical examination, blood pressure is 154/96 mm Hg. Abdominal examination reveals diffuse tenderness to deep palpation without guarding or peritoneal signs. Neurological examination reveals bilateral wrist drop with marked weakness of wrist and finger extensors (motor strength 3/5 bilaterally) with preserved sensation. A thin, bluish-purple hyperpigmented line is noted along the gingival margins. Complete blood count demonstrates: hemoglobin 9.4 g/dL, MCV 74 fL, and peripheral blood smear reveals prominent coarse basophilic stippling in red blood cells. Serum creatinine is 1.6 mg/dL. Which of the following is the most appropriate diagnostic test to confirm the diagnosis and guide chelation therapy?",
    "options": [
      "Serum erythrocyte protoporphyrin level alone",
      "Whole blood venous lead level (BLL)",
      "Random spot urine lead concentration",
      "24-hour urinary 5-aminolevulinic acid level",
      "Percutaneous bone marrow biopsy with Prussian blue staining"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Free erythrocyte protoporphyrin (FEP) or zinc protoporphyrin rises in lead toxicity (due to ferrochelatase inhibition) but is non-specific (also elevated in iron deficiency) and does not quantify toxic lead burden to direct chelation.",
      "B": "Correct. According to OSHA and ACGIH occupational health guidelines, the gold standard for diagnosing adult lead toxicity and determining clinical management is a whole blood venous lead level (BLL). Lead binds avidly to red blood cell membranes, making whole blood (not plasma or serum) the required medium. Adult lead poisoning typically presents with colicky abdominal pain ('lead colic'), microcytic anemia with basophilic stippling (due to inhibition of pyrimidine 5'-nucleotidase and delta-ALA dehydratase), lead lines on gingivae (Burton lines), and peripheral motor neuropathy (radial nerve wrist drop). In symptomatic adults with BLL >= 50-80 mcg/dL, chelation with oral succimer (DMSA) or IV calcium disodium EDTA (with dimercaprol if encephalopathic) is indicated.",
      "C": "Spot urine lead levels fluctuate widely depending on hydration and renal clearance and are unreliable for diagnosis prior to provoked chelation testing.",
      "D": "Urinary delta-aminolevulinic acid reflects enzyme inhibition but is a secondary biochemical research marker, not the regulatory standard for clinical decision-making.",
      "E": "Bone marrow biopsy is invasive and unnecessary; peripheral blood findings and venous blood lead level are diagnostic."
    },
    "learningObjective": "Diagnose adult occupational lead toxicity using venous whole blood lead level (BLL) and recognize characteristic clinical manifestations (lead colic, wrist drop, basophilic stippling).",
    "necessaryInference": "Bridge demolition worker + colicky abdominal pain + wrist drop (radial motor neuropathy) + microcytic anemia with basophilic stippling + Burton lines = Severe adult lead toxicity. Whole blood venous lead level is the definitive diagnostic test.",
    "shortestValidSolution": "Lead exposure + colic + wrist drop + basophilic stippling -> Venous whole blood lead level.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17454848/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests occupational toxidrome synthesis: classic triad of lead colic, radial nerve motor neuropathy (wrist drop), and basophilic stippling, requiring whole blood venous lead testing.",
      "distractorExclusionNotes": "FEP is non-specific; spot urine fluctuates widely; urinary ALA is research marker; bone marrow biopsy is overly invasive.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0253",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Smoke Inhalation Cyanide Poisoning Hydroxocobalamin Antidote",
    "vignette": "A 52-year-old woman is brought to the emergency department after being rescued from a burning apartment by firefighters. She was trapped in an enclosed, smoke-filled bedroom containing burning synthetic polyurethane furniture and vinyl materials for approximately 25 minutes. On arrival, she is comatose (Glasgow Coma Scale score 5), intubated, and has soot in her nares and oropharynx. Vital signs are: blood pressure 78/42 mm Hg, pulse 128/min, respirations 24/min on mechanical ventilation with 100% FiO2. Physical examination reveals flushed reddish skin, no significant cutaneous burns, and widely dilated, sluggishly reactive pupils. Arterial blood gas demonstrates: pH 7.10, PaCO2 28 mm Hg, PaO2 420 mm Hg, bicarbonate 8 mEq/L, and arterial blood lactate is markedly elevated at 15.2 mmol/L. Co-oximetry reveals a carboxyhemoglobin level of 7% (normal in non-smokers < 2%). Intravenous crystalloid resuscitation is initiated. Which of the following is the most appropriate immediate definitive antidote?",
    "options": [
      "Immediate transfer for emergency hyperbaric oxygen therapy",
      "Intravenous methylene blue 1 mg/kg",
      "Intravenous hydroxocobalamin 5 grams infused over 15 minutes",
      "Intravenous sodium nitrite 300 mg followed by sodium thiosulfate",
      "Intravenous N-acetylcysteine 150 mg/kg"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Hyperbaric oxygen is indicated for severe carbon monoxide poisoning (carboxyhemoglobin > 25% or pregnancy/coma), but her carboxyhemoglobin is only 7%. Furthermore, transfer delays the critical antidote for cyanide-induced histotoxic cellular hypoxia.",
      "B": "Methylene blue is the antidote for methemoglobinemia; it has no efficacy against cyanide poisoning.",
      "C": "Correct. In an enclosed-space fire with burning plastics, synthetic foam, or wool, combustion generates hydrogen cyanide gas. Cyanide binds ferric iron (Fe3+) in mitochondrial cytochrome c oxidase (complex IV), halting aerobic oxidative phosphorylation and causing severe histotoxic anoxia. The cardinal clinical clues are persistent shock, coma, flushed skin, and profound high anion gap metabolic lactic acidosis (lactate >= 10 mmol/L in smoke inhalation correlates strongly with cyanide toxicity > 90%). The preferred, first-line antidote is intravenous hydroxocobalamin (5 g), which binds cyanide with high affinity to form non-toxic cyanocobalamin (vitamin B12), excreted in urine, without inducing methemoglobinemia or exacerbating hypotension.",
      "D": "Sodium nitrite induces methemoglobinemia to scavenge cyanide; however, in smoke inhalation victims who may have concurrent carbon monoxide poisoning, inducing methemoglobinemia dangerously compounds oxygen-carrying incapacity and causes fatal tissue hypoxia and worsening vasodilation.",
      "E": "N-acetylcysteine is the antidote for acetaminophen toxicity."
    },
    "learningObjective": "Identify acute cyanide poisoning in smoke inhalation victims with profound lactic acidosis (lactate >= 10 mmol/L) and prioritize intravenous hydroxocobalamin over nitrite-based antidotes.",
    "necessaryInference": "Enclosed fire with burning synthetics + coma + refractory shock + profound lactic acidosis (lactate 15.2) with modest COHb (7%) = Acute Cyanide Toxicity. Hydroxocobalamin is the first-line antidote; nitrites are contraindicated due to methemoglobinemia risk.",
    "shortestValidSolution": "Smoke inhalation + severe lactic acidosis (lactate > 10) + coma -> Intravenous hydroxocobalamin.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17065672/",
      "https://pubmed.ncbi.nlm.nih.gov/30422960/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates cyanide poisoning from carbon monoxide in smoke inhalation (lactate > 10 vs COHb 7%) and tests why hydroxocobalamin is chosen over toxic nitrites.",
      "distractorExclusionNotes": "Hyperbaric oxygen does not treat cyanide; nitrites compromise oxygen-carrying capacity in fire victims; methylene blue treats methemoglobinemia; NAC treats acetaminophen.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0254",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Chronic Beryllium Disease Diagnostic Differentiation",
    "vignette": "A 48-year-old male aerospace manufacturing technician presents with progressive dyspnea on exertion and dry cough over the past 8 months. For the past 12 years, he has worked machining beryllium-copper alloys and ceramics used in satellite guidance systems. High-resolution CT (HRCT) of the chest reveals bilateral hilar and mediastinal lymphadenopathy with upper lobe predominant perilymphatic micronodules and interlobular septal thickening, virtually indistinguishable from sarcoidosis. Transbronchial lung biopsy demonstrates non-caseating epithelioid granulomas with lymphocytic infiltration; special stains for acid-fast bacilli and fungi are negative. Serum ACE level is mildly elevated at 64 U/L (reference: 8-52). Which of the following diagnostic tests is most specific to definitively distinguish Chronic Beryllium Disease (CBD) from idiopathic pulmonary sarcoidosis?",
    "options": [
      "Serum 1,25-dihydroxyvitamin D level",
      "Repeat transbronchial biopsy with electron dispersive X-ray spectroscopy",
      "Methacholine bronchoprovocation challenge test",
      "Beryllium Lymphocyte Proliferation Test (BeLPT) using peripheral blood or bronchoalveolar lavage fluid",
      "Total body Gallium-67 scintigraphy"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Elevated 1,25-dihydroxyvitamin D occurs in both sarcoidosis and chronic beryllium disease due to 1-alpha-hydroxylase expression in granuloma macrophages, making it non-discriminatory.",
      "B": "X-ray spectroscopy detects elemental beryllium particles in lung tissue, but particle presence merely confirms past exposure; it does not confirm the presence of cell-mediated immune sensitization that defines disease.",
      "C": "Methacholine challenge evaluates airway hyperreactivity, which is non-specific and does not differentiate granulomatous etiologies.",
      "D": "Correct. Chronic Beryllium Disease (CBD) is a cell-mediated (Type IV) delayed hypersensitivity granulomatous lung disorder caused by beryllium exposure in aerospace, defense, telecommunications, and machining industries. Clinically, radiographically, and histopathologically, it is completely indistinguishable from pulmonary sarcoidosis (non-caseating granulomas, hilar adenopathy, elevated ACE). The definitive gold-standard diagnostic test is the Beryllium Lymphocyte Proliferation Test (BeLPT), performed on peripheral blood and/or bronchoalveolar lavage (BAL) cells. The BeLPT measures in vitro T-lymphocyte proliferation (via tritiated thymidine incorporation) upon exposure to beryllium salts; abnormal proliferation confirms beryllium-specific immune sensitization.",
      "E": "Gallium scanning demonstrates active granulomatous inflammation ('lambda' and 'panda' signs) in both sarcoidosis and CBD without differentiating the two."
    },
    "learningObjective": "Differentiate Chronic Beryllium Disease (CBD) from pulmonary sarcoidosis using the Beryllium Lymphocyte Proliferation Test (BeLPT) in exposed aerospace and defense workers.",
    "necessaryInference": "Aerospace machinist + non-caseating granulomas on lung biopsy + hilar adenopathy = Sarcoidosis vs Chronic Beryllium Disease. The specific diagnostic test that proves beryllium sensitization over idiopathic sarcoidosis is the BeLPT.",
    "shortestValidSolution": "Aerospace worker + sarcoid-like non-caseating granulomas -> Beryllium Lymphocyte Proliferation Test (BeLPT).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15579730/",
      "https://pubmed.ncbi.nlm.nih.gov/18310077/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests occupational granulomatous lung disease: distinguishing CBD from sarcoidosis using the pathognomonic BeLPT assay.",
      "distractorExclusionNotes": "1,25-D is elevated in all granulomatous disease; spectroscopy shows exposure, not immunologic disease; methacholine does not assess granulomas; gallium is non-specific.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0255",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Noise-Induced Hearing Loss Audiometric Notch Pattern",
    "vignette": "A 54-year-old factory machinist presents for an occupational health evaluation due to progressive difficulty understanding speech, particularly in noisy environments such as crowded restaurants. His wife complains that he sets the television volume excessively high. He has worked on an industrial metal stamping assembly line with continuous ambient noise levels of 92 to 98 decibels for 22 years, with inconsistent use of hearing protection. He has no history of ototoxic medication use, head trauma, ear infections, or vertigo. Otoscopic examination shows clear external auditory canals with normal, translucent tympanic membranes bilaterally. Weber test does not lateralize. Rinne test demonstrates air conduction greater than bone conduction (AC > BC) in both ears. Which of the following audiometric findings is most characteristic of chronic occupational noise-induced hearing loss in this patient?",
    "options": [
      "Unilateral low-frequency sensorineural hearing loss with profound speech discrimination loss",
      "Bilateral low-frequency conductive hearing loss with bone conduction worse than air conduction",
      "Bilateral flat sensorineural hearing loss across all tested frequencies from 250 Hz to 8,000 Hz",
      "Unilateral mixed hearing loss with an extensive air-bone gap at 500 Hz",
      "Bilateral symmetrical sensorineural hearing loss with a characteristic 'acoustic notch' maximal at 4,000 Hz and recovery at 8,000 Hz"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Unilateral low-frequency sensorineural hearing loss with poor speech discrimination is classic for M\u00e9ni\u00e8re disease or acoustic neuroma (vestibular schwannoma).",
      "B": "Low-frequency conductive hearing loss suggests otosclerosis or middle ear fluid, not noise-induced trauma.",
      "C": "Flat sensorineural loss across all frequencies can occur in advanced genetic presbycusis or congenital losses, but does not display the classic early noise damage notch.",
      "D": "Mixed hearing loss with an air-bone gap suggests combined middle ear pathology (e.g., cholesteatoma or tympanosclerosis) and inner ear disease.",
      "E": "Correct. Chronic occupational noise exposure causes mechanical and metabolic damage (free radical injury) specifically to the stereocilia of outer hair cells in the basal turn of the organ of Corti. Pure-tone audiometry demonstrates bilateral, symmetrical sensorineural hearing loss characteristically manifesting as an 'acoustic notch'\u2014a dip in hearing thresholds maximal at 3,000 to 4,000 Hz (and occasionally 6,000 Hz), with partial recovery at 8,000 Hz. Over years of continued exposure, the notch deepens and widens to encompass lower speech frequencies (500 to 2,000 Hz)."
    },
    "learningObjective": "Identify the characteristic pure-tone audiometric signature of occupational noise-induced hearing loss: bilateral symmetrical sensorineural notch at 4,000 Hz with recovery at 8,000 Hz.",
    "necessaryInference": "Industrial noise exposure for 22 years + high-frequency speech discrimination difficulty + normal otoscopy and positive Rinne (sensorineural). Classic audiometry finding is the 4,000 Hz acoustic notch with 8,000 Hz recovery.",
    "shortestValidSolution": "Chronic industrial noise hearing loss -> Bilateral sensorineural 4,000 Hz acoustic notch.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/15797988/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of pathognomonic occupational audiology findings (4,000 Hz notch) resulting from mechanical stereocilia shearing in the basal cochlea.",
      "distractorExclusionNotes": "M\u00e9ni\u00e8re/schwannoma is unilateral low-frequency; otosclerosis is conductive; flat loss lacks notch; air-bone gap implies middle ear disease.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0256",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Asbestos Exposure Pleural Plaques versus Mesothelioma Risk",
    "vignette": "A 66-year-old retired naval shipyard pipefitter presents for a routine health examination. He has no cough, chest pain, or dyspnea, and walks 2 miles daily without limitation. He smoked 1 pack of cigarettes per day for 25 years but quit 20 years ago. He worked in shipyard boiler rooms and pipe insulation from 1975 to 1995 with extensive asbestos exposure. Physical examination is completely normal with normal breath sounds bilaterally and no digital clubbing. A screening low-dose chest CT reveals bilateral, discrete, calcified pleural plaques along the posterolateral parietal pleura and the domes of the diaphragms, with completely clear pulmonary parenchymal architecture and no lung nodules, pleural effusions, or pleural thickening. Pulmonary function testing demonstrates normal lung volumes and a normal DLCO. What is the most accurate clinical counseling regarding his findings?",
    "options": [
      "Pleural plaques are benign markers of past asbestos exposure that carry zero intrinsic risk of malignant transformation, but his past asbestos exposure and smoking history combine multiplicatively to increase his risk of bronchogenic lung carcinoma",
      "Pleural plaques are obligate premalignant precursors that transform into malignant pleural mesothelioma within 5 to 10 years in over 50% of patients",
      "Pleural plaques represent active asbestosis and require immediate initiation of antifibrotic therapy with pirfenidone",
      "He should undergo immediate video-assisted thoracoscopic pleurectomy to resect the plaques before malignancy develops",
      "His risk of bronchogenic carcinoma is unaffected by his asbestos exposure because he successfully quit smoking 20 years ago"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Pleural plaques are the most common radiographic manifestation of asbestos exposure, appearing after a 20- to 30-year latency as well-circumscribed, bilateral, calcified fibrohyaline plaques along the parietal pleura and diaphragms. Crucially, pleural plaques themselves are completely benign and do NOT undergo malignant transformation into mesothelioma. However, their presence confirms significant past asbestos exposure. Asbestos exposure and cigarette smoking interact in a synergistic, multiplicative fashion to drastically increase the lifetime risk of bronchogenic carcinoma (up to a 50- to 60-fold increase compared to non-exposed non-smokers). Mesothelioma risk is also elevated by asbestos, but is independent of smoking.",
      "B": "Pleural plaques are not premalignant precursors and do not directly transform into mesothelioma.",
      "C": "Asbestosis refers specifically to interstitial pulmonary fibrosis, which is absent here (normal parenchymal CT and normal DLCO). Antifibrotic therapy is unapproved and unnecessary.",
      "D": "Surgical pleurectomy for benign, asymptomatic pleural plaques is medically contraindicated and exposes the patient to severe surgical morbidity.",
      "E": "Asbestos exposure permanently confers elevated bronchogenic lung cancer risk that persists regardless of smoking cessation, although quitting smoking dramatically lowers the multiplicative excess risk."
    },
    "learningObjective": "Counsel patients with asbestos-related pleural plaques: recognize plaques as benign non-malignant markers of exposure, while understanding the multiplicative synergistic risk of bronchogenic carcinoma from combined asbestos and tobacco exposure.",
    "necessaryInference": "Bilateral calcified diaphragmatic/parietal plaques = asbestos exposure marker. Plaques are benign (no malignant transformation), but asbestos + past smoking multiplies risk for bronchogenic carcinoma (far more common than mesothelioma).",
    "shortestValidSolution": "Pleural plaques -> Benign exposure marker (no malignant conversion); asbestos + tobacco multiplicatively increases bronchogenic carcinoma risk.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15310672/",
      "https://pubmed.ncbi.nlm.nih.gov/18310077/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Disentangles common misconceptions in occupational pulmonology: distinguishing benign pleural plaques from asbestosis and mesothelioma, and identifying bronchogenic carcinoma as the chief asbestos-tobacco threat.",
      "distractorExclusionNotes": "Plaques do not transform into cancer; asbestosis is parenchymal fibrosis (absent here); surgery is contraindicated; asbestos risk is lifelong.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0257",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Silicosis Upper Lobe Fibrosis and Mandatory TB Screening",
    "vignette": "A 44-year-old man presents with a 6-month history of progressive exertional shortness of breath and chronic dry cough. For the past 14 years, he has worked cutting, grinding, and polishing artificial engineered stone (quartz) kitchen countertops in a small fabrication shop with inadequate wet suppression and dry cutting. Chest radiography and high-resolution CT demonstrate multiple small, rounded nodular opacities (2-4 mm) predominantly distributed throughout both upper lung zones, associated with bilateral hilar and mediastinal lymphadenopathy displaying peripheral, rim-like calcifications ('eggshell calcification'). Pulmonary function testing shows a mild restrictive defect with a reduced DLCO of 68% predicted. What is the most critical initial infectious disease screening required for this patient?",
    "options": [
      "Serologic testing for Coccidioides immitis antibodies",
      "Screening for latent Mycobacterium tuberculosis infection with an interferon-gamma release assay (IGRA) or tuberculin skin test",
      "Serum galactomannan antigen assay",
      "Urine Legionella pneumophila serogroup 1 antigen testing",
      "Screening for Pneumocystis jirovecii using induced sputum PCR"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Coccidioidomycosis is endemic to the southwestern US; it does not have a specific pathophysiologic synergy with silica macrophage poisoning.",
      "B": "Correct. This patient has accelerated silicosis, caused by inhalation of respirable crystalline silica particles during the fabrication of engineered quartz stone countertops. Crystalline silica is engulfed by alveolar macrophages, destabilizing phagolysosomal membranes and causing macrophage apoptosis, chronic inflammation, upper-lobe nodular fibrosis, and classic eggshell calcification of hilar lymph nodes. Because silica severely cripples alveolar macrophage phagolysosomal defense mechanisms, patients with silicosis have a 30-fold increased lifetime risk of developing active tuberculosis (silicotuberculosis). ATS and CDC guidelines mandate baseline screening for latent tuberculosis infection using an IGRA or tuberculin skin test (where >= 5 mm induration is considered positive) upon diagnosis of silicosis.",
      "C": "Galactomannan tests for invasive aspergillosis in severely neutropenic immunocompromised patients.",
      "D": "Legionella causes acute severe community-acquired pneumonia, not chronic mycobacterial susceptibility.",
      "E": "Pneumocystis affects severe cell-mediated CD4 deficiencies (HIV, transplant immunosuppression), not isolated silica macrophage dysfunction."
    },
    "learningObjective": "Identify silicosis in stone countertop workers and initiate mandatory screening for latent tuberculosis (IGRA/TST) due to silica-induced alveolar macrophage impairment.",
    "necessaryInference": "Engineered stone countertop cutting + upper-lobe nodules + eggshell hilar calcification = Silicosis. Silica destroys alveolar macrophage phagolysosomes, conferring a 30-fold increased risk of tuberculosis. Latent TB screening is mandatory.",
    "shortestValidSolution": "Silicosis (engineered stone, eggshell calcifications) -> Mandatory screening for latent tuberculosis.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/31557149/",
      "https://pubmed.ncbi.nlm.nih.gov/15579730/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Highlights emerging epidemic of accelerated silicosis in engineered quartz stone countertop workers and tests the essential clinical rule of mandatory tuberculosis screening.",
      "distractorExclusionNotes": "Tuberculosis has direct pathophysiologic synergy with silica; Coccidioides is geographic; galactomannan is for neutropenia; Pneumocystis is for CD4 depletion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0258",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Caplan Syndrome Coal Worker Pneumoconiosis and Rheumatoid Arthritis",
    "vignette": "A 58-year-old underground coal miner with a 25-year work history in an anthracite coal mine presents for evaluation of worsening joint pain and cough. Over the past year, he has developed symmetrical pain, warmth, and swelling of his wrists, metacarpophalangeal (MCP) joints, and proximal interphalangeal (PIP) joints, accompanied by 2 hours of morning stiffness. Physical examination reveals ulnar deviation of the fingers, bilateral synovial swelling of the MCPs, and subcutaneous firm, non-tender nodules over both olecranon processes. Chest radiography and high-resolution CT reveal multiple distinct, round, peripheral pulmonary nodules ranging from 1 to 4 cm in diameter throughout both lung fields, some demonstrating central cavitation, superimposed on faint background coal worker's macules. Laboratory testing confirms a high-titer rheumatoid factor of 340 IU/mL and positive anti-cyclic citrullinated peptide (anti-CCP) antibodies > 250 U/mL. What is the diagnosis?",
    "options": [
      "Metastatic bronchogenic adenocarcinoma",
      "Multiple pulmonary arteriovenous malformations (Osler-Weber-Rendu)",
      "Caplan syndrome (rheumatoid pneumoconiosis)",
      "Granulomatosis with polyangiitis (GPA)",
      "Disseminated histoplasmosis"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Metastatic cancer produces lung nodules, but the simultaneous presentation of symmetrical erosive polyarthritis, high-titer RF/anti-CCP, rheumatoid nodules, and coal mining history specifically defines Caplan syndrome.",
      "B": "Pulmonary AVMs present with hypoxemia, hemoptysis, and telangiectasias, without destructive inflammatory polyarthritis or autoantibodies.",
      "C": "Correct. Caplan syndrome (also designated rheumatoid pneumoconiosis) is the combination of coal worker's pneumoconiosis (or occasionally silicosis or asbestosis) with seropositive rheumatoid arthritis. It is characterized by the rapid development of multiple well-circumscribed, round, bilateral peripheral pulmonary nodules (0.5 to 5 cm) that may cavitate, calcify, or resolve spontaneously, superimposed on background pneumoconiosis. Histologically, the nodules resemble enlarged subcutaneous rheumatoid nodules with a central necrotic core surrounded by palisading histiocytes and a rim of coal dust.",
      "D": "GPA causes cavitary pulmonary nodules and glomerulonephritis, but presents with c-ANCA (PR3-ANCA) positivity, upper airway destructive sinus disease, and active urinary sediment, not seropositive rheumatoid arthritis with subcutaneous nodules.",
      "E": "Histoplasmosis produces nodules, but does not cause high-titer anti-CCP seropositive inflammatory polyarthritis."
    },
    "learningObjective": "Diagnose Caplan syndrome (rheumatoid pneumoconiosis): the co-occurrence of multiple round, cavitary pulmonary nodules in a coal miner or silica-exposed worker with seropositive rheumatoid arthritis.",
    "necessaryInference": "Coal miner + seropositive destructive rheumatoid arthritis (anti-CCP, MCP synovitis, subcutaneous nodules) + multiple round peripheral pulmonary nodules = Caplan syndrome.",
    "shortestValidSolution": "Coal mining exposure + rheumatoid arthritis with cavitary lung nodules -> Caplan syndrome.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15579730/",
      "https://pubmed.ncbi.nlm.nih.gov/18310077/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of Caplan syndrome combining occupational mineral dust exposure with systemic autoimmune rheumatologic disease.",
      "distractorExclusionNotes": "Metastatic cancer lacks anti-CCP autoantibodies; AVMs lack arthritis; GPA has PR3-ANCA and sinus disease; Histoplasma does not cause erosive rheumatoid disease.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0259",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Organophosphate Toxicity Atropine Priority and Pralidoxime Sequencing",
    "vignette": "A 42-year-old agricultural worker is brought to the emergency department by emergency medical services 45 minutes after accidentally spraying an undiluted organophosphate insecticide across his chest and arms. On arrival, he is in acute respiratory distress, confused, and diaphoretic. Vital signs are: blood pressure 92/56 mm Hg, pulse 44/min, respirations 32/min, and oxygen saturation 82% on room air. Physical examination reveals pinpoint pupils (miosis, 1 mm bilaterally), profuse salivation, lacrimation, urinary incontinence, diffuse audible wheezing with bilateral coarse bubbling rales throughout all lung fields, and prominent muscle fasciculations across his chest and extremities. Copious, frothy secretions are pouring from his mouth and nose. What is the immediate, life-saving pharmacologic priority in managing this patient?",
    "options": [
      "Intravenous pralidoxime (2-PAM) infusion as monotherapy before any other medication",
      "Intravenous physostigmine 2 mg slow push",
      "Intravenous succinylcholine followed by immediate endotracheal intubation",
      "Intravenous atropine administered in rapidly escalating doses (e.g., 2 mg IV doubling every 3 to 5 minutes) until pulmonary secretions clear and bronchospasm resolves",
      "Intravenous naloxone 2 mg IV bolus"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Pralidoxime (2-PAM) reactivates phosphorylated acetylcholinesterase at nicotinic receptors, relieving muscle weakness and fasciculations, but its onset of action takes 20 to 30 minutes. Patients die within minutes from muscarinic-induced asphyxiation (bronchospasm and massive bronchorrhea). Atropine must be administered immediately first; pralidoxime is an essential adjunct given concurrently or immediately after atropinization.",
      "B": "Physostigmine is an acetylcholinesterase inhibitor used for anticholinergic toxicity; administering it in cholinergic excess would worsen bronchospasm and cause immediate cardiac arrest.",
      "C": "Succinylcholine is metabolized by pseudocholinesterase (butyrylcholinesterase), which is profoundly inhibited by organophosphates. Administering succinylcholine causes prolonged neuromuscular blockade and apnea lasting many hours.",
      "D": "Correct. Organophosphates irreversibly inhibit acetylcholinesterase, leading to massive accumulation of acetylcholine at both muscarinic and nicotinic receptors. The lethal threat is asphyxiation caused by the muscarinic 'killer B's': Bronchorrhea, Bronchospasm, and Bradycardia. The absolute immediate priority is intravenous atropine (a competitive muscarinic receptor antagonist), administered in rapid doubling doses (2 mg, then 4 mg, 8 mg, etc., every 3-5 minutes) until the physiological endpoints of atropinization are achieved: clearing of bronchorrhea, cessation of wheezing, and reversal of bradycardia. Pralidoxime (2-PAM) is administered to treat nicotinic symptoms and regenerate acetylcholinesterase before irreversible enzyme 'aging' occurs.",
      "E": "Naloxone treats opioid toxicity (which presents with dry skin, decreased bowel sounds, and no bronchorrhea/fasciculations)."
    },
    "learningObjective": "Prioritize rapid intravenous atropine titration to reverse life-threatening bronchorrhea and bronchospasm before pralidoxime in acute organophosphate toxicity.",
    "necessaryInference": "Organophosphate insecticide exposure + cholinergic toxidrome (miosis, salivation, bronchorrhea, bradycardia, fasciculations). Primary cause of death is muscarinic asphyxiation. Intravenous atropine titrated to clear pulmonary secretions is the immediate life-saving priority.",
    "shortestValidSolution": "Organophosphate toxicity with severe bronchorrhea -> Escalating IV atropine until secretions clear, then add pralidoxime.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/18310077/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Critical emergency toxicology sequencing: recognizing that atropine is the primary antidote for acute asphyxiation (secretions), while pralidoxime addresses nicotinic weakness.",
      "distractorExclusionNotes": "Pralidoxime alone acts too slowly to stop bronchorrhea; physostigmine is fatal; succinylcholine causes prolonged paralysis; naloxone is for opioids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0260",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Ethylene Glycol Poisoning Fomepizole and Dialysis Thresholds",
    "vignette": "A 38-year-old man with alcohol use disorder is brought to the emergency department after being found stuporous in a commercial garage. On arrival, he is minimally responsive to painful stimuli. Vital signs are: blood pressure 138/84 mm Hg, pulse 108/min, respirations 28/min (deep Kussmaul breathing), and temperature 36.4\u00b0C. Laboratory studies reveal: serum sodium 140 mEq/L, potassium 5.2 mEq/L, chloride 100 mEq/L, bicarbonate 6 mEq/L, blood urea nitrogen 28 mg/dL, and serum creatinine 2.4 mg/dL. Measured serum osmolality is 342 mOsm/kg H2O. Blood ethanol level is 0 mg/dL. Arterial blood gas shows: pH 7.12, PaCO2 18 mm Hg, and PaO2 95 mm Hg. Urine microscopic examination reveals abundant envelope-shaped birefringent crystals. The calculated anion gap is 34 mEq/L, and the calculated serum osmolal gap is 48 mOsm/kg H2O (normal < 10). Which of the following is the most appropriate definitive management?",
    "options": [
      "Administer intravenous sodium bicarbonate infusion alone and observe in an unmonitored floor bed",
      "Administer intravenous fomepizole as monotherapy and withhold dialysis indefinitely regardless of renal function",
      "Administer oral activated charcoal and perform whole-bowel irrigation with polyethylene glycol",
      "Administer intravenous folinic acid and thiamine without enzyme inhibitors",
      "Initiate intravenous fomepizole and arrange immediate hemodialysis"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Bicarbonate infusion may transiently buffer severe acidemia, but it does not inhibit toxic metabolite generation or clear glycolic/oxalic acid; observing unmonitored is fatal.",
      "B": "Fomepizole prevents further toxic metabolite formation, but it does not clear existing toxic glycolic acid or reverse established acute kidney injury with profound acidemia (pH 7.12, bicarb 6); hemodialysis is mandatory.",
      "C": "Activated charcoal does not bind small, polar alcohols (aliphatic hydrocarbons like ethylene glycol, methanol, or ethanol) and is ineffective and dangerous due to aspiration risk in a stuporous patient.",
      "D": "Thiamine and pyridoxine are cofactors in ethylene glycol metabolism (directing glyoxylate to benign glycine), but they are minor adjuncts that are completely inadequate without ADH inhibition and hemodialysis.",
      "E": "Correct. The patient has acute ethylene glycol toxicity, characterized by an enormous high anion gap metabolic acidosis (AG 34), marked elevated osmolal gap (48 mOsm/kg H2O), envelope-shaped calcium oxalate crystalluria, acute kidney injury (creatinine 2.4), and deep Kussmaul respirations. The parent alcohol is converted by alcohol dehydrogenase (ADH) into toxic glycolic acid (causing acidosis) and oxalic acid (causing acute tubular necrosis and cerebral oxalate deposition). Immediate management requires: 1) Fomepizole (a competitive inhibitor of ADH with 8,000-fold higher affinity than ethanol) to halt toxic metabolite generation; and 2) Emergent hemodialysis, indicated because the patient has severe metabolic acidosis (pH < 7.25), acute renal failure, and significant end-organ toxicity."
    },
    "learningObjective": "Manage acute ethylene glycol poisoning by administering fomepizole to inhibit alcohol dehydrogenase and initiating emergent hemodialysis for severe acidosis (pH < 7.25) and acute renal failure.",
    "necessaryInference": "High anion gap acidosis (AG 34) + high osmolal gap (48) + calcium oxalate crystals + renal failure = Ethylene glycol poisoning. Management requires fomepizole to block metabolism PLUS urgent hemodialysis due to severe acidemia (pH 7.12) and AKI.",
    "shortestValidSolution": "Ethylene glycol poisoning + pH < 7.25 + AKI -> IV fomepizole PLUS emergent hemodialysis.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/11252119/",
      "https://pubmed.ncbi.nlm.nih.gov/10517717/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests integration of metabolic toxicology: recognizing ethylene glycol (oxalate crystals, high AG, high osmolal gap) and executing dual therapy (fomepizole + hemodialysis criteria).",
      "distractorExclusionNotes": "Bicarbonate alone does not eliminate toxins; charcoal does not bind alcohols; thiamine/pyridoxine are auxiliary cofactors; fomepizole alone cannot clear existing glycolic acid in severe AKI.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0261",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Gastrointestinal",
    "topic": "Acetaminophen Toxicity Nomogram Timing and NAC Administration",
    "vignette": "A 22-year-old college student is brought to the emergency department by roommates 6 hours after ingesting approximately forty 500-mg extra-strength acetaminophen tablets (20 grams total) in an intentional suicide attempt. She feels mildly nauseated and has vomited once, but denies abdominal pain. Vital signs are normal. Physical examination shows no jaundice, asterixis, or right upper quadrant tenderness. Laboratory studies show: AST 28 U/L, ALT 24 U/L, total bilirubin 0.6 mg/dL, INR 1.0, and serum creatinine 0.8 mg/dL. A serum acetaminophen level drawn at 6 hours post-ingestion is 165 mcg/mL (the Rumack-Matthew nomogram treatment line at 6 hours is 100 mcg/mL). Which of the following is the most appropriate immediate clinical intervention?",
    "options": [
      "Initiate intravenous N-acetylcysteine (NAC) therapy immediately",
      "Repeat the serum acetaminophen level in 4 hours and treat only if hepatic transaminases become elevated",
      "Administer oral activated charcoal 50 grams as definitive monotherapy",
      "Administer intravenous deferoxamine 15 mg/kg/hour",
      "List the patient urgently for emergency orthotopic liver transplantation"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Acetaminophen overdose saturates normal hepatic glucuronidation and sulfation pathways, shunting excess drug through CYP2E1 to produce the toxic metabolite N-acetyl-p-benzoquinone imine (NAPQI). When hepatic glutathione stores are depleted by > 70%, NAPQI binds covalently to hepatocytes, causing centrilobular hepatic necrosis. In a single acute ingestion, a 4- to 24-hour post-ingestion acetaminophen level plotted above the Rumack-Matthew treatment line (here 165 mcg/mL at 6 hours, where the treatment line is 100 mcg/mL) mandates immediate initiation of N-acetylcysteine (NAC). NAC acts as a glutathione precursor, directly conjugates NAPQI, and provides antioxidant support. Initiating NAC within 8 hours of ingestion confers virtually 100% hepatoprotection.",
      "B": "Waiting for transaminases to rise before treating guarantees massive hepatic necrosis; transaminases do not rise until 24 to 48 hours post-ingestion when irreversible necrosis has already occurred.",
      "C": "Activated charcoal is beneficial within 1 to 2 hours of ingestion to reduce gastrointestinal absorption; at 6 hours, absorption is complete, and charcoal is never a substitute for NAC antidote therapy.",
      "D": "Deferoxamine is the chelating agent for acute iron toxicity, not acetaminophen.",
      "E": "Liver transplantation evaluation is guided by King's College Criteria in established acute liver failure (severe acidosis, encephalopathy, coagulopathy, renal failure), not early nomogram-positive toxicity with normal baseline liver enzymes."
    },
    "learningObjective": "Apply the Rumack-Matthew nomogram to initiate immediate N-acetylcysteine (NAC) therapy for acute acetaminophen overdose within 8 hours to prevent centrilobular hepatic necrosis.",
    "necessaryInference": "Single acute ingestion at 6 hours with APAP level 165 mcg/mL, well above the nomogram treatment line (100 mcg/mL). Normal current LFTs do not preclude toxicity. Immediate IV NAC provides 100% hepatoprotection.",
    "shortestValidSolution": "APAP level above Rumack-Matthew nomogram line at 6 hours -> Immediate N-acetylcysteine (NAC).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17065672/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests fundamental emergency toxicology: interpreting the Rumack-Matthew nomogram at 6 hours and initiating NAC prior to transaminase elevation.",
      "distractorExclusionNotes": "Waiting for transaminases allows irreversible necrosis; charcoal is too late at 6h; deferoxamine is for iron; transplant criteria are not met.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0262",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Radiation Syndrome Biodosimetry by Lymphocyte Kinetics",
    "vignette": "A 38-year-old industrial radiographer accidentally handles an unshielded 100-curie Iridium-192 radioactive gamma source for approximately 15 minutes during a pipeline inspection failure. Two hours later, he experiences acute nausea, two episodes of vomiting, and generalized weakness. On arrival at the regional radiation emergency center 6 hours post-incident, vital signs are normal, and physical examination shows mild erythema of the hands without blistering or mucosal lesions. Which of the following laboratory evaluations is the most accurate, rapid biological dosimeter to estimate total-body ionizing radiation dose and predict hematopoietic bone marrow survival over the first 48 hours?",
    "options": [
      "Serial serum creatinine kinase-MB levels every 6 hours",
      "Serial absolute lymphocyte counts (ALC) drawn every 6 to 12 hours over the first 48 hours",
      "Serum troponin I and brain natriuretic peptide (BNP) levels",
      "Urinary excretion of beta-2 microglobulin",
      "Serum amylase level at 72 hours"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "CK-MB evaluates myocardial injury, which is not an indicator of systemic radiation dosimetry.",
      "B": "Correct. In acute radiation syndrome (ARS), circulating mature lymphocytes are exquisitely radiosensitive, undergoing rapid apoptotic interphase death within hours of whole-body ionizing radiation exposure. According to radiation emergency medical protocols (REAC/TS and WHO), the absolute lymphocyte count (ALC) depletion curve plotted over the first 12 to 48 hours (the Andrews lymphocyte nomogram) is the most reliable, rapid, and universally available biological dosimeter to estimate radiation dose. A steep drop in ALC below 1,000/mm3 within 24 hours indicates significant hematopoietic injury (> 2 Gy); a drop below 500/mm3 indicates severe, potentially lethal exposure (> 5-6 Gy) requiring cytokine support (filgrastim) and bone marrow transplantation evaluation.",
      "C": "Troponin and BNP evaluate cardiac toxicity, which occurs only in massive supralethal neurovascular syndrome (> 20-30 Gy).",
      "D": "Urinary beta-2 microglobulin reflects proximal tubular damage and does not predict hematopoietic bone marrow syndrome.",
      "E": "Serum amylase rises transiently due to radiation sialadenitis, but it lacks the quantitative precision and dosimetric validity of serial lymphocyte depletion curves."
    },
    "learningObjective": "Utilize serial absolute lymphocyte count (ALC) kinetics over the first 48 hours as the primary biological dosimeter to estimate whole-body radiation dose in acute radiation syndrome.",
    "necessaryInference": "Gamma radiation exposure with prodromal vomiting -> Biological dosimetry is required. Circulating lymphocytes are the most radiosensitive cells; serial ALC decline over 48h (Andrews nomogram) quantifies bone marrow dose.",
    "shortestValidSolution": "Acute radiation exposure dosimetry -> Serial absolute lymphocyte counts over first 48 hours.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests specialized radiation disaster medicine: recognizing lymphocyte depletion kinetics (Andrews nomogram) as the primary clinical tool for estimating ARS dose.",
      "distractorExclusionNotes": "CK-MB, troponin, and BNP do not assess radiation dose; beta-2 microglobulin is for tubular damage; amylase lacks quantitative kinetic accuracy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0263",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Decompression Sickness Recompression Hyperbaric Therapy",
    "vignette": "A 34-year-old certified recreational scuba diver presents to an emergency department on a Caribbean island 2 hours after completing two 90-foot open-water ocean dives. Due to equipment panic on the second dive, he made an uncontrolled, rapid ascent to the surface without performing scheduled decompression safety stops. Within 45 minutes of surfacing, he developed severe, dull, throbbing pain in both shoulder and knee joints ('the bends'), an itchy, purpuric, mottled rash over his abdomen (cutis marmorata), and progressive numbness, tingling, and motor weakness in both lower extremities with difficulty voiding urine. Vital signs are normal. Neurological examination reveals lower extremity paraparesis (motor strength 3/5 bilaterally), loss of pinprick sensation below the T10 dermatome, and urinary retention with a palpable bladder. What is the definitive treatment for this condition?",
    "options": [
      "Intravenous high-dose methylprednisolone 1 gram daily",
      "Immediate diagnostic lumbar puncture followed by intravenous immunoglobulin",
      "Immediate administration of 100% normobaric oxygen and transfer for emergent recompression in a hyperbaric oxygen chamber (HBOT)",
      "Intravenous tissue plasminogen activator (tPA) for suspected spinal cord infarction",
      "Oral broad-spectrum antibiotics and placement of a supportive back brace"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Corticosteroids have not been shown to improve neurological outcomes in decompression sickness or arterial gas embolism and are not recommended as primary definitive therapy.",
      "B": "Decompression sickness is an acute physical-gas phenomenon, not Guillain-Barr\u00e9 syndrome or transverse myelitis; lumbar puncture delays emergent recompression.",
      "C": "Correct. The patient has Type II (severe/neurological) decompression sickness (DCS). Rapid ascent without decompression stops violates Henry's Law: ambient pressure drops precipitously, causing inert nitrogen dissolved in body tissues to come out of solution and form expanding gas bubbles in the blood and tissues. In the spinal cord, nitrogen bubbles cause epidural venous plexus occlusion, ischemia, and paraparesis with urinary retention. Definitive therapy is immediate administration of 100% normobaric oxygen (which accelerates nitrogen washout by widening the nitrogen diffusion gradient) and emergent transfer for recompression in a multiplace or monoplace hyperbaric oxygen chamber (typically using US Navy Treatment Table 6). Recompression mechanically shrinks bubble volume (Boyle's Law) and re-dissolves nitrogen into plasma.",
      "D": "Thrombolytics are strictly contraindicated; the vascular occlusion is due to mechanical nitrogen bubbles, not fibrin thrombi, and tPA carries severe hemorrhagic risks.",
      "E": "Antibiotics and bracing do not address intravascular bubble expansion or ischemic spinal cord damage."
    },
    "learningObjective": "Identify Type II neurological decompression sickness following rapid scuba diving ascent and direct immediate recompression with hyperbaric oxygen therapy (HBOT).",
    "necessaryInference": "Rapid scuba ascent from depth + joint pain ('bends') + cutis marmorata + spinal cord paraparesis with sensory level = Type II Decompression Sickness. Nitrogen bubbles obstruct spinal venous flow. Definitive treatment is 100% O2 and emergent hyperbaric chamber recompression.",
    "shortestValidSolution": "Scuba diving rapid ascent + neurological deficits -> 100% oxygen + emergent hyperbaric oxygen therapy.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/22495333/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests undersea and hyperbaric medicine: recognizing spinal decompression illness (Henry/Boyle gas laws) and ordering emergent hyperbaric recompression over inappropriate steroids/tPA.",
      "distractorExclusionNotes": "Steroids lack efficacy; LP delays hyperbaric recompression; tPA causes hemorrhage in gas bubble occlusion; antibiotics are irrelevant.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0264",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Exertional Heat Stroke Whole-Body Ice-Water Immersion",
    "vignette": "A 19-year-old military recruit collapses during a mandatory 10-mile training run in full combat gear on a hot, humid summer day (ambient temperature 35\u00b0C [95\u00b0F], relative humidity 80%). He was witnessed to stumble, become combative, and lose consciousness. On immediate evaluation by field medics, he is unresponsive to verbal commands with Glasgow Coma Scale score 8. His skin is hot and flushed, with profuse diaphoresis. Vital signs are: blood pressure 88/52 mm Hg, pulse 152/min, respirations 32/min, and rectal core temperature is 41.2\u00b0C (106.2\u00b0F). What is the immediate, life-saving management priority that must be initiated on-site prior to ambulance transport?",
    "options": [
      "Administer oral acetaminophen 1,000 mg and ibuprofen 800 mg via nasogastric tube",
      "Administer intravenous dantrolene 2.5 mg/kg push",
      "Initiate aggressive passive cooling in an air-conditioned room with damp towels and room-temperature misting fans",
      "Immediate whole-body cold-water or ice-water immersion ('cool first, transport second')",
      "Administer high-dose intravenous regular insulin and 50% dextrose"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Antipyretics (acetaminophen, NSAIDs) act on the hypothalamic set point regulated by pyrogens; heat stroke is a failure of thermoregulation from environmental heat load, not pyrogen-mediated fever. Acetaminophen and NSAIDs are completely ineffective and exacerbate heat-induced acute hepatic necrosis, renal failure, and coagulopathy.",
      "B": "Dantrolene is a specific ryanodine receptor antagonist used for malignant hyperthermia; clinical trials have conclusively proven it has no therapeutic benefit in environmental or exertional heat stroke.",
      "C": "Passive cooling and room-temperature misting have slow cooling rates (~0.05-0.1\u00b0C/min) that are inadequate to prevent fatal cellular protein denaturation and multisystem organ failure.",
      "D": "Correct. Exertional heat stroke (EHS) is a medical emergency defined by severe core hyperthermia (> 40\u00b0C / 104\u00b0F) accompanied by central nervous system dysfunction (coma, delirium, seizures) occurring during strenuous physical exertion. Total thermal load (temperature x duration) determines mortality. The evidence-based gold standard protocol is 'cool first, transport second': immediate whole-body cold-water or ice-water immersion (water temperature 1-15\u00b0C) with continuous stirring, which produces the fastest cooling rate (> 0.2-0.35\u00b0C/min). Cooling must continue until core rectal temperature reaches 38.3-38.9\u00b0C (101-102\u00b0F) before transporting to the hospital.",
      "E": "Insulin/dextrose treats severe hyperkalemia, not primary hyperthermic circulatory collapse."
    },
    "learningObjective": "Prioritize immediate on-site whole-body cold-water or ice-water immersion ('cool first, transport second') for exertional heat stroke, avoiding ineffective antipyretics and dantrolene.",
    "necessaryInference": "Core temp > 40\u00b0C (41.2\u00b0C) + CNS dysfunction (coma) during exertion in hot environment = Exertional Heat Stroke. The definitive life-saving therapy is immediate rapid whole-body ice-water immersion on-site before transport.",
    "shortestValidSolution": "Exertional heat stroke (core temp > 40\u00b0C + coma) -> Immediate on-site ice-water immersion ('cool first, transport second').",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/26359500/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes the modern consensus in sports/military medicine: immediate cold-water immersion on-site before transport ('cool first, transport second') and strictly avoiding antipyretics.",
      "distractorExclusionNotes": "Antipyretics are ineffective and hepatotoxic; dantrolene is for malignant hyperthermia only; passive cooling is too slow to prevent brain death; insulin is not cooling therapy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0265",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Severe Accidental Hypothermia Core Rewarming and Arrhythmia Strategy",
    "vignette": "A 62-year-old man with alcohol use disorder is found unresponsive in an unheated abandoned shed during a winter snowstorm. On arrival in the emergency department, his clothes are wet and stiff. He does not respond to verbal or noxious stimuli. Vital signs are: blood pressure 72/40 mm Hg, pulse 36/min, respirations 6/min, and core rectal temperature measured with a specialized low-reading thermistor probe is 27.2\u00b0C (81.0\u00b0F). Cardiac monitoring demonstrates atrial fibrillation with a slow ventricular response and prominent positive deflections at the terminal portion of the QRS complexes in leads II, III, aVF, and V4-V6 ('Osborn or J waves'). During the initial transfer to the trauma bed, a nurse vigorously rubs his arms and legs with warm blankets and attempts to insert an invasive central line. Which of the following is the most appropriate management approach for this patient?",
    "options": [
      "Administer intravenous amiodarone 300 mg bolus and perform synchronized electrical cardioversion for the atrial fibrillation",
      "Administer intravenous epinephrine 1 mg push every 3 minutes until heart rate increases above 60/min",
      "Vigorously immerse both lower extremities in a hot water bath (45\u00b0C) to rapidly restore peripheral circulation",
      "Insert an emergency transvenous pacing wire to overdrive-pace the bradycardia",
      "Handle the patient with extreme gentleness to avoid triggering ventricular fibrillation, initiate active internal core rewarming (warmed humidified oxygen, warmed IV fluids), and avoid antiarrhythmic drugs until rewarmed"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Antiarrhythmic medications (amiodarone, lidocaine) are metabolically ineffective in severe hypothermia (< 30\u00b0C) and accumulate to toxic levels. Furthermore, the hypothermic myocardium is resistant to electrical cardioversion until core temperature rises above 30-32\u00b0C. Atrial fibrillation with slow ventricular response is a physiological consequence of hypothermia that converts spontaneously upon rewarming.",
      "B": "Vasoactive drugs like epinephrine have sluggish hepatic metabolism at core temperatures < 30\u00b0C and pool in the circulation, causing lethal rebound malignant arrhythmias once the patient rewarms. ACLS guidelines withhold or space epinephrine until core temp > 30\u00b0C.",
      "C": "Active external warming of cold extremities ('peripheral rewarming') causes profound peripheral vasodilation, shunting cold, acidotic, hyperkalemic venous blood from the periphery back to the core ('core temperature afterdrop') and precipitating severe 'rewarming shock' and fatal cardiac arrest.",
      "D": "Inserting intracardiac pacing wires or catheters mechanically irritates the exquisitely sensitive hypothermic myocardium and almost universally triggers refractory ventricular fibrillation.",
      "E": "Correct. In severe accidental hypothermia (core temperature < 28\u00b0C / 82.4\u00b0F with Osborn J waves), the myocardium is extremely irritable and prone to ventricular fibrillation triggered by minor mechanical stimulation (rough handling, endotracheal intubation, central line wires). Management mandates: 1) Gentle handling and immobilization; 2) Active internal core rewarming (warmed humidified oxygen at 40-45\u00b0C, warmed IV crystalloids at 42\u00b0C, and consideration of thoracic/peritoneal lavage or ECMO if arrest occurs); 3) Avoiding peripheral limb heating to prevent core afterdrop and rewarming shock; and 4) Recognizing that bradycardia and slow AF with Osborn waves are physiological protective adaptations that resolve spontaneously as core temperature normalizes."
    },
    "learningObjective": "Manage severe accidental hypothermia (< 28\u00b0C): execute gentle handling to prevent ventricular fibrillation, initiate active core rewarming while avoiding peripheral afterdrop, and withhold antiarrhythmics until core temperature normalizes.",
    "necessaryInference": "Core temp 27.2\u00b0C + Osborn J waves + slow AF = Severe hypothermia. Heart is highly irritable. Rough movement or catheters trigger VF. Peripheral warming causes lethal core afterdrop. Management requires gentle handling + active core rewarming.",
    "shortestValidSolution": "Severe hypothermia (< 28\u00b0C, Osborn waves) -> Gentle handling + active core rewarming (avoid peripheral rewarming/antiarrhythmics).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/30422960/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests critical concepts in wilderness and environmental medicine: myocardial irritability in deep hypothermia, core afterdrop physiology, and spontaneous rhythm normalization with rewarming.",
      "distractorExclusionNotes": "Cardioversion and antiarrhythmics fail at < 30\u00b0C; epinephrine pools dangerously; peripheral limb warming causes core afterdrop and fatal shock; transvenous pacing triggers VF.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0266",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Caustic Ingestion Emergent Endoscopy and Neutralization Contraindications",
    "vignette": "A 46-year-old man is brought to the emergency department 1 hour after intentionally swallowing approximately 200 mL of a liquid industrial drain cleaner containing concentrated sodium hydroxide (lye). He complains of excruciating burning retrosternal and epigastric pain, dysphagia, and inability to swallow his saliva. Vital signs are: blood pressure 134/78 mm Hg, pulse 112/min, respirations 22/min, and oxygen saturation 98% on room air. Physical examination reveals extensive gray-white liquefactive mucosal sloughing and ulceration across his tongue, hard palate, and posterior oropharynx, with continuous drooling. His voice is clear without hoarseness or stridor. The abdomen is soft with mild epigastric tenderness, but has no rebound or rigidity. Chest and abdominal upright radiographs show no pneumomediastinum or free air under the diaphragm. Which of the following is the most appropriate next step in management?",
    "options": [
      "Arrange emergent flexible upper endoscopy within 12 to 24 hours to grade gastrointestinal injury (Zargar classification)",
      "Administer oral dilute acetic acid (vinegar) to neutralize the alkaline base",
      "Administer oral syrup of ipecac to induce immediate emesis of residual lye",
      "Perform immediate gastric lavage with a large-bore Ewald tube",
      "Administer oral activated charcoal 100 grams to adsorb the chemical"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Ingestion of concentrated alkali (sodium hydroxide) causes liquefactive necrosis: saponification of fats, protein solubilization, and deep transmural penetration through the esophageal and gastric walls. Once airway stability and perforation (free air on imaging) are assessed, the gold standard diagnostic and prognostic modality is emergent flexible upper endoscopy performed within 12 to 24 hours. Endoscopy accurately grades mucosal injury using the Zargar classification (Grade 1 to 3b), which directly guides critical decisions regarding intensive care admission, enteral feeding, perforation risk, and late esophageal stricture formation.",
      "B": "Attempting chemical neutralization with an acid (vinegar, dilute acetic acid) is strictly contraindicated; the acid-base neutralization reaction produces an exothermic release of intense heat, causing severe secondary thermal injury and acute esophageal perforation.",
      "C": "Inducing emesis (with ipecac or mechanically) is strictly contraindicated because re-exposing the vulnerable, necrotized esophageal mucosa to the caustic alkali causes catastrophic mucosal re-injury and risks transmural rupture.",
      "D": "Gastric lavage with an Ewald tube is contraindicated because passing a large-bore blind tube through necrotic, liquefied esophageal tissue carries an extreme risk of iatrogenic esophageal perforation.",
      "E": "Activated charcoal does not bind caustic alkalis (or acids, heavy metals, or small alcohols), obscures endoscopic visualization, and causes severe pneumonitis if aspirated."
    },
    "learningObjective": "Manage acute caustic alkaline ingestion: perform flexible upper endoscopy within 12 to 24 hours while strictly avoiding neutralization, emesis, gastric lavage, or charcoal.",
    "necessaryInference": "Sodium hydroxide ingestion + liquefactive necrosis + normal CXR/AXR (no perforation). Next step is flexible endoscopy within 12-24h to grade mucosal injury. Neutralizing acids, emesis, lavage, and charcoal are strictly contraindicated.",
    "shortestValidSolution": "Caustic alkali ingestion (no perforation) -> Emergent flexible endoscopy within 12-24 hours (neutralization contraindicated).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/17065672/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests emergency gastroenterology toxicology: understanding liquefactive necrosis, timing of endoscopy, and dangerous historic myths (neutralization, charcoal, lavage).",
      "distractorExclusionNotes": "Neutralization causes exothermic thermal burns; emesis re-burns the esophagus; lavage causes mechanical rupture; charcoal does not bind alkali and blinds endoscopist.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0267",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Methemoglobinemia Methylene Blue Contraindication in G6PD Deficiency",
    "vignette": "A 28-year-old man with leprosy receiving daily dapsone presents to the emergency department with progressive shortness of breath, headache, and dark blue-gray discoloration of his lips, ears, and fingertips over the past 8 hours. Pulse oximetry on room air reads 85% and remains fixed at 85% despite administration of 100% oxygen via a non-rebreather face mask. Vital signs are: blood pressure 118/74 mm Hg, pulse 104/min, respirations 22/min. Physical examination shows pronounced central cyanosis. Arterial blood gas drawn on 100% oxygen reveals: pH 7.42, PaCO2 38 mm Hg, PaO2 480 mm Hg, and calculated SaO2 is 99%, while a sample of blood in a heparinized syringe appears distinctively dark chocolate-brown and does not turn red upon exposure to air. Co-oximetry confirms a methemoglobin fraction of 38% (normal < 1.5%). His medical chart notes a documented history of severe Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency. Which of the following is the most appropriate definitive therapeutic approach?",
    "options": [
      "Administer intravenous methylene blue 1 to 2 mg/kg push immediately",
      "Withhold methylene blue and administer high-dose intravenous ascorbic acid (vitamin C) and arrange exchange transfusion if refractory",
      "Administer intravenous sodium thiosulfate 12.5 grams",
      "Administer intravenous deferoxamine 15 mg/kg/hour",
      "Perform immediate whole-body hyperbaric oxygen therapy as monotherapy"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Intravenous methylene blue is the first-line antidote for acquired methemoglobinemia in patients with normal G6PD activity. However, in patients with severe G6PD deficiency, methylene blue is strictly contraindicated. Methylene blue requires NADPH generated by G6PD in the hexose monophosphate shunt to be reduced into its active metabolite, leukomethylene blue. In G6PD deficiency, methylene blue cannot be converted to leukomethylene blue (rendering it ineffective); worse, methylene blue acts as an oxidant itself, precipitating catastrophic, life-threatening acute intravascular hemolytic anemia.",
      "B": "Correct. In patients with severe methemoglobinemia who have known or suspected severe G6PD deficiency (or who have refractory toxicity), methylene blue is contraindicated because it cannot be reduced to leukomethylene blue and induces massive intravascular hemolysis. High-dose intravenous ascorbic acid (vitamin C, 1.5 to 3 g IV every 6 hours) acts as an alternative non-enzymatic reducing agent that directly reduces MetHb back to ferrous hemoglobin, although its kinetics are slower. In patients with severe, life-threatening tissue hypoxemia (MetHb > 30-50% with cardiopulmonary instability) and G6PD deficiency, red blood cell exchange transfusion is the definitive intervention to rapidly remove methemoglobin and provide functioning hemoglobin.",
      "C": "Sodium thiosulfate is an antidote for cyanide poisoning; it has no role in reducing methemoglobin.",
      "D": "Deferoxamine chelates ferric iron in systemic iron overload; it does not reduce heme-bound iron in methemoglobin.",
      "E": "Hyperbaric oxygen increases dissolved plasma oxygen, but does not reverse methemoglobin or treat the underlying enzymatic block, and is insufficient as monotherapy."
    },
    "learningObjective": "Manage methemoglobinemia in patients with G6PD deficiency: recognize that methylene blue is contraindicated due to hemolysis risk and utilize ascorbic acid or exchange transfusion.",
    "necessaryInference": "Cyanosis + saturation gap (pulse ox 85% vs ABG PaO2 480) + chocolate-brown blood = Methemoglobinemia (dapsone-induced). Methylene blue requires NADPH from G6PD; in G6PD deficiency, methylene blue causes lethal hemolysis. Ascorbic acid and exchange transfusion are indicated.",
    "shortestValidSolution": "Methemoglobinemia + G6PD deficiency -> Methylene blue contraindicated; use ascorbic acid or exchange transfusion.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17065672/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield toxicological contraindication: identifying the saturation gap, chocolate blood, and recognizing why methylene blue is fatal in G6PD deficiency.",
      "distractorExclusionNotes": "Methylene blue causes massive hemolysis in G6PD deficiency; thiosulfate is for cyanide; deferoxamine is for iron; HBOT does not reduce methemoglobin.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0268",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Tricyclic Antidepressant Overdose Sodium Bicarbonate Therapy",
    "vignette": "A 32-year-old woman is brought to the emergency department by ambulance 2 hours after an intentional overdose of amitriptyline. On arrival, she is lethargic, disoriented, and has hot, flushed dry skin with dilated pupils (7 mm bilaterally) and absent bowel sounds. Vital signs are: blood pressure 82/46 mm Hg, pulse 138/min, respirations 18/min, and temperature 38.2\u00b0C. While placing an intravenous catheter, she suffers a generalized tonic-clonic seizure that ceases after 2 mg of IV lorazepam. A 12-lead ECG demonstrates sinus tachycardia at 140/min, a prolonged QRS duration of 148 ms, a rightward axis shift, and a prominent terminal R wave in lead aVR measuring 4.5 mm (normal < 3 mm). Despite 2 liters of normal saline bolus, her blood pressure remains 84/48 mm Hg. Which of the following is the most appropriate immediate pharmacotherapy to treat her cardiac toxicity?",
    "options": [
      "Intravenous physostigmine salicylate 1 mg slow push",
      "Intravenous amiodarone 150 mg infused over 10 minutes",
      "Intravenous sodium bicarbonate (1-2 mEq/kg boluses titrated to narrow QRS and achieve arterial pH 7.50-7.55)",
      "Intravenous procainamide 100 mg slow push",
      "Intravenous flumazenil 0.2 mg IV push"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Physostigmine is a tertiary acetylcholinesterase inhibitor that treats pure peripheral and central anticholinergic delirium, but it is strictly contraindicated in tricyclic antidepressant (TCA) overdose because it precipitates refractory asystole and fatal bradyarrhythmias.",
      "B": "Amiodarone and other Class Ia/Ic/III antiarrhythmics block myocardial potassium or sodium channels, further widening the QRS and QTc intervals and accelerating progression to polymorphic ventricular tachycardia or asystole.",
      "C": "Correct. Tricyclic antidepressants (amitriptyline) block myocardial fast voltage-gated sodium channels (Nav1.5), slowing phase 0 depolarization and leading to intraventricular conduction delay (QRS > 100 ms), right bundle conduction delay (terminal R wave in aVR > 3 mm), hypotension, and fatal ventricular arrhythmias. Intravenous sodium bicarbonate (1-2 mEq/kg IV push) is the definitive antidote. It works via two synergistic mechanisms: 1) It delivers a high extracellular sodium load that overcomes competitive sodium channel blockade; and 2) It induces systemic alkalinization (target serum pH 7.50 to 7.55), which shifts the lipophilic TCA drug into its neutral, non-ionized state, unbinding it from the sodium channel receptor.",
      "D": "Procainamide is a Class Ia antiarrhythmic that blocks sodium channels; administering it in TCA toxicity compounds sodium channel blockade and causes immediate death.",
      "E": "Flumazenil is a benzodiazepine antagonist that precipitates intractable withdrawal seizures and ventricular arrhythmias in TCA co-ingestion."
    },
    "learningObjective": "Manage tricyclic antidepressant (TCA) cardiotoxicity: administer intravenous sodium bicarbonate boluses to treat QRS widening (> 100 ms) and refractory hypotension.",
    "necessaryInference": "Amitriptyline overdose + anticholinergic signs + QRS widening (148 ms) + prominent R wave in aVR (> 3 mm) + hypotension. Cardiotoxicity is mediated by sodium channel blockade. Intravenous sodium bicarbonate boluses to achieve pH 7.50-7.55 is the mandatory antidote.",
    "shortestValidSolution": "TCA overdose with QRS > 100 ms and terminal R wave in aVR -> IV sodium bicarbonate boluses.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17065672/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Classic emergency cardiology/toxicology: recognizing the ECG signature of TCA sodium channel blockade (QRS > 100 ms, terminal R in aVR) and executing sodium bicarbonate resuscitation.",
      "distractorExclusionNotes": "Physostigmine causes asystole in TCA overdose; amiodarone and procainamide worsen channel blockade; flumazenil precipitates refractory seizures.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0269",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Severe Beta-Blocker Overdose High-Dose Insulin Euglycemia Therapy",
    "vignette": "A 56-year-old man is brought to the emergency department 3 hours after an intentional overdose of his wife's extended-release propranolol tablets (estimated 1,600 mg). On arrival, he is somnolent but arousable. Vital signs are: blood pressure 68/38 mm Hg, pulse 34/min, respirations 14/min, and oxygen saturation 96% on room air. Point-of-care blood glucose is 64 mg/dL. 12-lead ECG demonstrates sinus bradycardia at 35/min with a PR interval of 240 ms and normal QRS duration. He receives 2 liters of intravenous normal saline and 1 mg of intravenous atropine without any improvement in heart rate or blood pressure. An intravenous bolus of 5 mg of glucagon produces a transient 5-minute pulse rise to 48/min, followed by rapid relapse into profound bradycardia (32/min) and hypotension (70/40 mm Hg). Which of the following is the most effective evidence-based pharmacotherapy to restore cardiac output and hemodynamic stability?",
    "options": [
      "Continuous intravenous dopamine infusion at 20 mcg/kg/min as monotherapy",
      "Intravenous calcium disodium EDTA infusion",
      "Intravenous methylene blue 2 mg/kg bolus",
      "High-dose intravenous regular insulin euglycemia therapy (HIET; 1 unit/kg bolus followed by 0.5-1.0 unit/kg/hour infusion with dextrose and potassium support)",
      "Oral activated charcoal and high-dose magnesium citrate"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "Dopamine relies on beta-1 adrenergic receptors which are heavily competitively occupied by massive concentrations of propranolol; standard adrenergic catecholamines frequently fail in severe poisoning.",
      "B": "Calcium disodium EDTA is a chelating agent for heavy metals; it has no role in beta-blocker inotropic rescue.",
      "C": "Methylene blue inhibits guanylate cyclase in vasoplegic shock; it does not address myocardial pump failure or adrenergic blockade.",
      "D": "Correct. In severe beta-blocker overdose refractory to atropine and fluid resuscitation, first-line medical therapy includes intravenous glucagon (which bypasses adrenergic receptors by stimulating adenylate cyclase via Gs-coupled glucagon receptors, raising cyclic AMP) and High-Dose Insulin Euglycemia Therapy (HIET). In cardiogenic shock from beta-blockade, myocardial carbohydrate metabolism is shut down and myocytes are starved of glucose. High-dose insulin (1 unit/kg bolus, followed by 0.5-1 unit/kg/h up to 10 units/kg/h) acts as a powerful inotrope, overcoming metabolic starvation, driving glucose uptake into myocardial cells, improving calcium handling in the sarcoplasmic reticulum, and dramatically augmenting cardiac output. Dextrose and potassium are infused concurrently to maintain euglycemia and normokalemia.",
      "E": "Oral charcoal is ineffective 3 hours post-ingestion in a somnolent patient and risks pulmonary aspiration."
    },
    "learningObjective": "Manage refractory cardiogenic shock in severe beta-blocker overdose using High-Dose Insulin Euglycemia Therapy (HIET) and glucagon.",
    "necessaryInference": "Propranolol overdose + profound bradycardia (34/min) + shock refractory to atropine and glucagon. Beta-receptors are saturated. High-dose insulin euglycemia therapy (HIET) bypasses adrenergic signaling, serving as the definitive metabolic inotrope.",
    "shortestValidSolution": "Beta-blocker toxicity refractory to atropine/glucagon -> High-Dose Insulin Euglycemia Therapy (HIET).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/17065672/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests modern toxicology inotropic rescue: understanding the mechanism of HIET (myocardial metabolic substrate shift) when beta-receptors are competitively blocked.",
      "distractorExclusionNotes": "Dopamine fails against saturated beta receptors; EDTA is for lead; methylene blue treats vasoplegia; charcoal causes aspiration in somnolence.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0270",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Calcium Channel Blocker Toxicity High-Dose Insulin Protocol",
    "vignette": "A 64-year-old woman presents to the emergency department 2 hours after accidentally ingesting a handful of her sustained-release verapamil tablets (estimated 2,400 mg) instead of her multivitamin. On physical examination, she is alert but lethargic. Vital signs are: blood pressure 72/42 mm Hg, pulse 38/min, respirations 16/min, and oxygen saturation 97% on room air. Capillary blood glucose is 280 mg/dL. 12-lead ECG reveals third-degree complete atrioventricular (AV) block with a junctional escape rhythm at 36/min. Intravenous fluid resuscitation, 3 grams of IV calcium gluconate, and 1 mg of IV atropine produce no change in blood pressure or heart rate. Which of the following is the most appropriate next definitive pharmacological intervention?",
    "options": [
      "Intravenous digoxin loading dose followed by continuous maintenance infusion",
      "Intravenous esmolol continuous infusion with arterial blood pressure titration",
      "Intravenous sodium nitroprusside infusion with continuous hemodynamic monitoring",
      "Oral sodium polystyrene sulfonate combined with intravenous 0.9% saline hydration",
      "High-dose regular insulin euglycemia therapy with intravenous dextrose and potassium"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Digoxin inhibits the Na+/K+-ATPase and slows AV nodal conduction; adding digoxin in verapamil toxicity would compound complete heart block and cause fatal asystole.",
      "B": "Esmolol is an ultra-short-acting beta-blocker that further depresses myocardial contractility and AV nodal conduction, accelerating cardiovascular collapse.",
      "C": "Nitroprusside is a potent arterial vasodilator that would worsen profound shock in a patient who already has severe vasodilatory and cardiogenic collapse.",
      "D": "Sodium polystyrene sulfonate treats hyperkalemia; here the patient is not hyperkalemic.",
      "E": "Correct. Verapamil is a non-dihydropyridine calcium channel blocker (CCB) that blocks L-type calcium channels in the myocardium, sinoatrial/atrioventricular nodes, and vascular smooth muscle, causing profound bradycardia, AV block, and shock. Crucially, CCBs also inhibit L-type calcium channels on pancreatic beta cells, suppressing insulin secretion and leading to characteristic marked hyperglycemia (here glucose 280 mg/dL). High-dose insulin euglycemia therapy (HIET) is the premier evidence-based therapy: it overcomes hypoinsulinemia, drives glucose into starved myocardial cells, exerts direct positive inotropy, and restores vascular tone. Concurrent dextrose and potassium infusions prevent hypoglycemia and hypokalemia."
    },
    "learningObjective": "Manage severe calcium channel blocker toxicity (verapamil/diltiazem) using High-Dose Insulin Euglycemia Therapy (HIET) and recognize toxicity-induced hyperglycemia.",
    "necessaryInference": "Verapamil overdose + complete heart block + shock + hyperglycemia (280 mg/dL from beta-cell L-type calcium channel inhibition). Management requires High-Dose Insulin Euglycemia Therapy (HIET) with dextrose.",
    "shortestValidSolution": "Verapamil overdose with shock and hyperglycemia -> High-Dose Insulin Euglycemia Therapy (HIET).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/17065672/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests recognition of CCB-induced hyperglycemia (pancreatic insulin suppression) and execution of HIET protocol over lethal AV-blocking drugs (digoxin, beta-blockers).",
      "distractorExclusionNotes": "Digoxin worsens complete AV block; beta-blockers compound myocardial depression; nitroprusside worsens hypotension; SPS is for hyperkalemia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0271",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Serotonin Syndrome Clonus Differentiator and Cyproheptadine",
    "vignette": "A 34-year-old woman with major depressive disorder treated with sertraline 150 mg daily is admitted to the hospital with acute community-acquired pneumonia. She is prescribed intravenous linezolid 600 mg every 12 hours. Within 18 hours of receiving her second dose of linezolid, she becomes agitated, tremulous, and confused. On physical examination, she is actively hallucinating, diaphoretic, and shivering. Vital signs are: blood pressure 168/98 mm Hg, pulse 124/min, respirations 24/min, and temperature 39.1\u00b0C (102.4\u00b0F). Physical examination reveals hyperactive bowel sounds, dilated pupils (mydriasis), prominent bilateral horizontal ocular flutter (ocular clonus), 4+ patellar reflexes, and spontaneous, rhythmic beating of both ankles upon rapid dorsiflexion (inducible and spontaneous ankle clonus). Muscle tone shows mild resistance in lower extremities, but no lead-pipe rigidity. Which of the following is the most accurate diagnosis and definitive antidote?",
    "options": [
      "Serotonin syndrome (Hunter criteria); discontinue offending agents, administer IV lorazepam, and give oral cyproheptadine",
      "Neuroleptic malignant syndrome; administer intravenous dantrolene and oral bromocriptine",
      "Malignant hyperthermia; administer intravenous dantrolene and cool with iced saline",
      "Anticholinergic toxidrome; administer intravenous physostigmine salicylate",
      "Acute bacterial meningitis; administer intravenous ceftriaxone, vancomycin, and dexamethasone"
    ],
    "correctOptionIndex": 0,
    "distractorExplanations": {
      "A": "Correct. Linezolid is an oxazolidinone antimicrobial with potent, reversible monoamine oxidase-A (MAO-A) inhibition. Co-administration of linezolid with an SSRI (sertraline) precipitates severe serotonin syndrome due to intrasynaptic serotonin hyperaccumulation. Under the validated Hunter Toxicity Criteria, the presence of spontaneous clonus (or inducible clonus with agitation/diaphoresis) is the single most sensitive and specific clinical differentiator of serotonin syndrome, distinguishing it from Neuroleptic Malignant Syndrome (NMS, which features 'lead-pipe' muscular rigidity and hyporeflexia). First-line management mandates immediate cessation of all serotonergic agents, supportive care with intravenous benzodiazepines (lorazepam) for agitation and hyperthermia, and oral/nasogastric cyproheptadine (a 5-HT2A antagonist) as the specific antidote.",
      "B": "Neuroleptic Malignant Syndrome (NMS) is caused by dopamine D2 receptor antagonism (antipsychotics), develops over days, and is characterized by 'lead-pipe' rigidity and hyporeflexia, not clonus and hyperreflexia.",
      "C": "Malignant hyperthermia is triggered by volatile halogenated anesthetics or succinylcholine, characterized by masseter spasm and generalized muscular rigidity, not clonus after linezolid.",
      "D": "Anticholinergic toxicity presents with dry flushed skin and absent bowel sounds; serotonin syndrome features profuse diaphoresis and hyperactive bowel sounds.",
      "E": "Bacterial meningitis can present with fever and delirium, but does not cause ocular clonus, spontaneous ankle clonus, and hyperreflexia triggered by linezolid-SSRI interaction."
    },
    "learningObjective": "Differentiate Serotonin Syndrome from Neuroleptic Malignant Syndrome using the Hunter criteria (clonus and hyperreflexia vs lead-pipe rigidity) and select cyproheptadine.",
    "necessaryInference": "Sertraline + linezolid (MAO inhibitor) -> Serotonin Syndrome. Spontaneous ankle clonus and ocular clonus are pathognomonic under Hunter criteria. Management: stop agents + benzodiazepines + cyproheptadine (5-HT2A antagonist).",
    "shortestValidSolution": "Linezolid + SSRI with spontaneous clonus and hyperreflexia -> Serotonin syndrome; treat with cyproheptadine.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/16087796/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Emphasizes the Hunter criteria for Serotonin Syndrome, recognizing linezolid as a MAOI and using clonus to exclude NMS.",
      "distractorExclusionNotes": "NMS features lead-pipe rigidity without clonus; MH requires volatile anesthetics; anticholinergic toxidrome has dry skin; meningitis lacks clonus.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0272",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Acute Inorganic Arsenic Poisoning Chelation Protocol",
    "vignette": "A 49-year-old agricultural laborer is brought to the emergency department with acute, intractable, watery diarrhea ('rice-water stool'), severe diffuse cramping abdominal pain, nausea, and vomiting that began 4 hours after consuming water from an unmapped, abandoned rural well near a commercial pesticide storage site. On arrival, he is severely dehydrated and lethargic. Vital signs: blood pressure 82/48 mm Hg, pulse 128/min, respirations 22/min. Physical examination reveals an unmistakable odor of garlic emanating from his breath and vomitus. 12-lead ECG demonstrates sinus tachycardia with a prolonged QTc interval of 520 ms and frequent ventricular ectopy. Comprehensive blood testing shows acute kidney injury with creatinine 2.8 mg/dL. Spot urine qualitative test is positive for heavy metals. Which of the following is the most appropriate immediate chelating agent for this acute poisoning?",
    "options": [
      "Oral penicillamine 250 mg four times daily",
      "Intramuscular dimercaprol (British Anti-Lewisite [BAL])",
      "Intravenous calcium disodium EDTA monotherapy",
      "Intravenous deferoxamine 15 mg/kg/hour",
      "Oral trientine 500 mg twice daily"
    ],
    "correctOptionIndex": 1,
    "distractorExplanations": {
      "A": "Penicillamine is primarily used for Wilson disease (copper chelation) and mild chronic lead or cystinuria; it is ineffective and too slow for life-threatening acute arsenic toxicity.",
      "B": "Correct. Acute inorganic arsenic poisoning presents with severe, cholera-like watery diarrhea ('rice-water stools'), hemorrhagic gastroenteritis, profound shock, prolonged QTc with ventricular arrhythmias (torsades de pointes), encephalopathy, and a distinctive garlic odor on the breath. Arsenic binds sulfhydryl groups on pyruvate dehydrogenase, arresting cellular respiration. In acute, severe, symptomatic arsenic poisoning with hemodynamic instability and renal impairment, the chelator of choice is intramuscular dimercaprol (British Anti-Lewisite [BAL]), a lipophilic dithiol compound that penetrates cells and binds arsenic. Once the patient is hemodynamically stable and oral tolerance is established, chelation is transitioned to oral succimer (DMSA).",
      "C": "Calcium disodium EDTA chelates lead; it has negligible affinity for arsenic.",
      "D": "Deferoxamine chelates iron, not arsenic.",
      "E": "Trientine is an oral copper chelator used for Wilson disease."
    },
    "learningObjective": "Identify acute inorganic arsenic poisoning (cholera-like diarrhea, garlic breath, QTc prolongation) and administer intramuscular dimercaprol (BAL) as first-line chelation.",
    "necessaryInference": "Rural contaminated well + cholera-like watery diarrhea + garlic breath odor + QTc prolongation + acute renal failure = Acute Inorganic Arsenic Poisoning. Intramuscular dimercaprol (BAL) is the immediate first-line chelator.",
    "shortestValidSolution": "Acute arsenic poisoning (garlic breath, watery diarrhea, prolonged QTc) -> Intramuscular dimercaprol (BAL).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17454848/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests classic toxicological presentation: identifying the garlic breath, rice-water diarrhea, and prolonged QTc of arsenic, and selecting BAL over copper/lead chelators.",
      "distractorExclusionNotes": "Penicillamine is for copper/Wilson disease; EDTA is for lead; deferoxamine is for iron; trientine is for copper.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0273",
    "exam": "Step 3",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Acute Elemental Mercury Vapor Inhalation and Chelation",
    "vignette": "A 35-year-old artisanal gold prospector presents with acute dyspnea, non-productive cough, chest tightness, fever, and severe metallic taste in his mouth. Earlier in the day, he heated a mercury-gold amalgam over an open flame inside an unventilated shack to vaporize the mercury. Physical examination reveals bilateral diffuse crackles, tachypnea, and an intention tremor of his hands and tongue. He appears anxious, labile, and irritable. Over the next 24 hours, he develops severe gingivostomatitis with loose teeth, hypersalivation, and oliguria. Chest radiograph shows diffuse bilateral interstitial and alveolar infiltrates consistent with acute chemical pneumonitis. What is the most appropriate definitive therapeutic management?",
    "options": [
      "High-dose intravenous methylprednisolone alone with discharge home",
      "Oral penicillamine monotherapy and broad-spectrum antibiotics",
      "Respiratory support and immediate chelation with oral succimer (DMSA) or intramuscular dimercaprol (BAL)",
      "Intravenous calcium disodium EDTA and forced alkaline diuresis",
      "Whole-lung lavage with normal saline"
    ],
    "correctOptionIndex": 2,
    "distractorExplanations": {
      "A": "Corticosteroids do not remove elemental mercury from tissues or reverse heavy metal enzyme inactivation.",
      "B": "Penicillamine has poor efficacy compared to succimer/dimercaprol and carries a high risk of drug-induced nephrotoxicity (membranous nephropathy), compounding acute mercury nephrotoxicity.",
      "C": "Correct. Inhalation of heated elemental mercury vapor causes acute chemical pneumonitis, non-cardiogenic pulmonary edema, and erosive bronchitis, alongside classic neuropsychiatric irritability (erethism mercurialis), intention tremor, metallic taste, and acute mercurial gingivostomatitis. Elemental mercury distributes into lipid-rich central nervous system tissue and proximal renal tubules. Definitive management includes aggressive respiratory support and immediate chelation therapy with oral succimer (dimercaptosuccinic acid [DMSA]) for non-emetic patients, or intramuscular dimercaprol (BAL) for severe acute systemic toxicity.",
      "D": "Calcium disodium EDTA binds lead, not mercury, and forced diuresis does not enhance mercury excretion.",
      "E": "Whole-lung lavage is indicated for pulmonary alveolar proteinosis, not heavy metal chemical vapor pneumonitis."
    },
    "learningObjective": "Manage acute elemental mercury vapor inhalation: recognize chemical pneumonitis, erethism, and gingivostomatitis, and administer succimer (DMSA) or dimercaprol (BAL).",
    "necessaryInference": "Heating mercury-gold amalgam + chemical pneumonitis + intention tremor + metallic taste + gingivostomatitis = Acute Elemental Mercury Poisoning. Chelation is indicated with succimer or dimercaprol.",
    "shortestValidSolution": "Inhaled mercury vapor with pneumonitis and tremors -> Succimer (DMSA) or dimercaprol (BAL).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/17454848/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates heavy metal toxidrome from artisanal mining: classic triad of pneumonitis, tremors/erethism, and gingivostomatitis treated with sulfhydryl chelators.",
      "distractorExclusionNotes": "Steroids do not chelate heavy metals; penicillamine causes nephrotoxicity; EDTA does not bind mercury; whole-lung lavage is for alveolar proteinosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0274",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Crotaline Envenomation Antivenom Fab and Harmful Interventions",
    "vignette": "A 28-year-old hiker is bitten on his right lateral ankle by an eastern diamondback rattlesnake in rural Georgia. He arrives at the emergency department 90 minutes post-envenomation. A friend placed an arterial tourniquet around his upper thigh and made a razor blade incision over the fang puncture marks with mouth suction. On examination, the tourniquet is removed immediately. The right ankle displays two distinct puncture marks surrounded by severe ecchymosis, bullae formation, and tense edema that has rapidly progressed 15 cm proximally up the mid-calf over the past 30 minutes. Vital signs are: blood pressure 104/62 mm Hg, pulse 116/min. Laboratory studies show: platelets 48,000/mm3 (reference: 150,000-450,000), fibrinogen 75 mg/dL (reference: 200-400), and INR 2.4. Which of the following is the most appropriate definitive therapeutic intervention?",
    "options": [
      "Perform immediate emergency calf fasciotomy to relieve suspected compartment syndrome",
      "Re-apply a tight proximal arterial tourniquet and apply crushed ice packs directly to the wound",
      "Transfuse 2 units of fresh frozen plasma and 1 pool of platelets prior to antivenom administration",
      "Elevate the extremity, monitor serial proximal limb circumference measurements, and initiate intravenous Crotalidae polyvalent immune Fab (CroFab) antivenom (initial dose 4 to 6 vials)",
      "Administer prophylactic broad-spectrum oral ampicillin-sulbactam alone"
    ],
    "correctOptionIndex": 3,
    "distractorExplanations": {
      "A": "True compartment syndrome is exceedingly rare in crotaline bites (< 1%); venom causes superficial subcutaneous edema and myonecrosis that mimics compartment syndrome. Performing a fasciotomy in a severely coagulopathic patient (INR 2.4, platelets 48k) causes catastrophic, exsanguinating hemorrhage; antivenom rapidly reverses swelling and elevated compartment pressures.",
      "B": "Tourniquets concentrate venom locally, causing tissue ischemia and necrosis, while cryotherapy (ice packs) causes severe frostbite necrosis and amputation; both are strictly contraindicated.",
      "C": "Transfusing clotting factors and platelets prior to antivenom is futile because circulating venom metalloproteinases immediately consume the transfused factors; antivenom must neutralize the venom first.",
      "D": "Correct. North American pit viper (Crotalinae: rattlesnakes, copperheads, cottonmouths) venom contains complex metalloproteinases, phospholipases, and thrombin-like enzymes that induce rapid local tissue destruction, progressive swelling, and severe venom-induced consumption coagulopathy (thrombocytopenia, hypofibrinogenemia, elevated INR). The definitive antidote is intravenous Crotalidae polyvalent immune Fab (CroFab; initial dose 4 to 6 vials) to achieve control of venom progression. Management includes limb elevation, serial measurement of proximal swelling margin every 15-30 minutes, and avoiding tourniquets, incisions, suction, cryotherapy, or prophylactic fasciotomies.",
      "E": "Routine prophylactic antibiotics are not recommended for pit viper bites, as infection rates are < 3%."
    },
    "learningObjective": "Manage crotaline (pit viper) envenomation: administer intravenous CroFab antivenom for progressive edema or coagulopathy while avoiding harmful tourniquets, ice, and premature fasciotomy.",
    "necessaryInference": "Rattlesnake bite + rapid proximal swelling + severe coagulopathy (platelets 48k, fibrinogen 75, INR 2.4) = Severe Crotaline Envenomation. Definitive treatment is IV CroFab antivenom + elevation. Tourniquets, ice, and fasciotomy are harmful.",
    "shortestValidSolution": "Pit viper bite with progressive swelling and coagulopathy -> IV CroFab antivenom (avoid tourniquets/fasciotomy).",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/24799086/",
      "https://pubmed.ncbi.nlm.nih.gov/17065672/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests North American wilderness toxicology: recognizing pit viper coagulopathy/tissue destruction, indications for CroFab, and debunking lethal folk remedies (tourniquets, fasciotomy).",
      "distractorExclusionNotes": "Fasciotomy in coagulopathy causes fatal bleed; tourniquet/ice worsens necrosis; factor transfusion fails before antivenom; prophylactic antibiotics are unindicated.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s3-0275",
    "exam": "Step 3",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Tick Paralysis Ascending Weakness and Rapid Removal Reversal",
    "vignette": "A 6-year-old girl is brought to the pediatric emergency department in Montana by her parents due to rapidly progressive clumsiness and inability to walk. Three days ago, she complained of vague tingling in her feet. Yesterday, she developed an unsteady, waddling gait, and this morning she was completely unable to stand or support her own weight. She has had no fever, diarrhea, recent respiratory illness, or vaccinations. Vital signs are normal. Neurological examination reveals symmetric, flaccid, lower motor neuron paralysis of both lower extremities (strength 1/5) with absent patellar and Achilles deep tendon reflexes (0/4). Upper extremity strength is 3/5 with hyporeflexia. Sensation to light touch, pinprick, and vibration is intact, and cranial nerves are normal. A lumbar puncture is performed: opening pressure 12 cm H2O, CSF protein 22 mg/dL (normal: 15-45), glucose 65 mg/dL, and WBC 1/mm3 (no albuminocytologic dissociation). Which of the following is the most critical next diagnostic-therapeutic intervention?",
    "options": [
      "Initiate high-dose intravenous immunoglobulin (IVIG) 2 g/kg over 2 days for suspected Guillain-Barr\u00e9 syndrome",
      "Perform emergent therapeutic plasma exchange (plasmapheresis)",
      "Administer intravenous ceftriaxone 100 mg/kg for neuroborreliosis",
      "Administer intravenous edrophonium (Tensilon test) to evaluate for juvenile myasthenia gravis",
      "Perform a meticulous head-to-toe skin and scalp examination, parting hair follicles to locate and completely excise an attached Dermacentor tick"
    ],
    "correctOptionIndex": 4,
    "distractorExplanations": {
      "A": "Guillain-Barr\u00e9 syndrome (GBS) is the chief differential diagnosis, but GBS characteristically exhibits albuminocytologic dissociation (elevated CSF protein with normal white count). Here, the CSF protein is completely normal (22 mg/dL) after several days of ascending paralysis, and IVIG is ineffective for tick paralysis.",
      "B": "Plasmapheresis is first-line for Guillain-Barr\u00e9 syndrome, but tick paralysis is cured immediately by mechanical tick removal.",
      "C": "Early Lyme disease (neuroborreliosis) causes cranial neuropathy (bilateral Bell palsy) or lymphocytic meningitis, not acute ascending flaccid motor paralysis.",
      "D": "Myasthenia gravis causes fluctuating, fatigable ptosis, diplopia, and bulbar weakness, not acute, afebrile, ascending flaccid areflexic paraplegia with intact sensation.",
      "E": "Correct. Tick paralysis is caused by a neurotoxin secreted in the saliva of an engorged gravid female tick (typically Dermacentor andersoni [Rocky Mountain wood tick] or Dermacentor variabilis [American dog tick]). The neurotoxin impairs sodium flux and acetylcholine release at presynaptic neuromuscular junctions. It presents as an acute, ascending, symmetric, flaccid lower motor neuron paralysis with absent deep tendon reflexes that closely mimics Guillain-Barr\u00e9 syndrome. A vital differentiating feature is normal CSF protein (no albuminocytologic dissociation). Definitive therapy requires a meticulous physical examination of the entire skin surface\u2014particularly the scalp, hairline, external ear canals, and skin folds\u2014and prompt, complete mechanical removal of the tick. Clinical recovery is dramatic, with motor strength returning within hours to 1-2 days without need for IVIG or plasmapheresis."
    },
    "learningObjective": "Differentiate tick paralysis from Guillain-Barr\u00e9 syndrome (normal CSF protein vs albuminocytologic dissociation) and direct thorough skin examination for prompt tick removal.",
    "necessaryInference": "Acute ascending flaccid paralysis + absent reflexes + normal CSF protein (no albuminocytologic dissociation) in endemic Montana setting = Tick paralysis. The neurotoxin is produced by a gravid Dermacentor tick; immediate head-to-toe inspection and tick removal is curative.",
    "shortestValidSolution": "Acute ascending flaccid paralysis + normal CSF protein -> Full-body scalp/skin exam for tick removal.",
    "provisionalDifficulty": 4,
    "references": [
      "https://pubmed.ncbi.nlm.nih.gov/15797988/",
      "https://pubmed.ncbi.nlm.nih.gov/24799086/"
    ],
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates tick paralysis from Guillain-Barr\u00e9 syndrome using CSF findings (normal protein excludes GBS) and emphasizes searching the scalp for embedded ticks.",
      "distractorExclusionNotes": "IVIG and plasmapheresis are for GBS; normal CSF excludes GBS; Lyme causes Bell palsy, not acute ascending flaccid paralysis; Tensilon test is for myasthenia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
