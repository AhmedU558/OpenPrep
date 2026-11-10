import { CandidateSpec } from './types';

export const step2Batch30: CandidateSpec[] = [
  {
    "code": "op-c-s2-0726",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Community-Acquired Pneumonia CURB-65 Criteria and Inpatient Admission",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man presents to the urgent care clinic with a 3-day history of productive cough with rust-colored sputum, right-sided pleuritic chest pain, chills, and progressive shortness of breath. He has a history of well-controlled hypertension and diet-controlled type 2 diabetes. Physical examination reveals an alert, oriented man in mild respiratory distress. Vital signs: temperature 38.6\u00b0C (101.5\u00b0F), blood pressure 104/64 mm Hg, heart rate 98/min, respirations 32/min, and oxygen saturation 93% on ambient air. Pulmonary examination reveals inspiratory crackles and bronchial breath sounds over the right lower lung field with dullness to percussion. Laboratory studies show: blood urea nitrogen (BUN) 24 mg/dL (8.6 mmol/L), serum creatinine 1.1 mg/dL, and WBC 16,800/microL. Chest radiography confirms a dense right lower lobe alveolar consolidation with air bronchograms without pleural effusion. Based on the CURB-65 clinical prediction rule, which of the following is the most appropriate management setting and initial antimicrobial regimen?",
    "choices": [
      [
        "Hospital admission to a general medical ward and initiation of intravenous ceftriaxone plus oral azithromycin (or respiratory fluoroquinolone monotherapy)",
        "COMMUNITY-ACQUIRED PNEUMONIA (CAP) site-of-care decisions are guided by validated clinical prediction scores, most commonly the CURB-65 CRITERIA. One point is assigned for each of the following 5 risk factors: (1) C: Confusion (disorientation to person, place, or time); (2) U: Urea (BUN > 19 mg/dL or > 7 mmol/L); (3) R: Respiratory rate >= 30 breaths/min; (4) B: Blood pressure (systolic < 90 mm Hg OR diastolic <= 60 mm Hg); (5) 65: Age >= 65 years. Risk stratification and disposition: CURB-65 score 0-1: Low risk (< 1.5% 30-day mortality), suitable for OUTPATIENT treatment; CURB-65 score 2: Moderate risk (~9% mortality), indicates INPATIENT GENERAL MEDICAL WARD ADMISSION; CURB-65 score >= 3: Severe risk (15-40% mortality), warrants urgent hospital admission and evaluation for INTENSIVE CARE UNIT (ICU) admission. Here, the patient has 3 points: Urea (BUN 24), Respiratory rate (32/min), and Age (68 years). With a CURB-65 score of 3 (or at least 2), INPATIENT HOSPITAL ADMISSION IS MANDATORY. For hospitalized non-ICU patients with CAP, guideline-concordant empiric therapy consists of: (a) A beta-lactam (INTRAVENOUS CEFTRIAXONE, ampicillin-sulbactam, or cefotaxime) PLUS A MACROLIDE (AZITHROMYCIN or clarithromycin), OR (b) RESPIRATORY FLUOROQUINOLONE MONOTHERAPY (levofloxacin or moxifloxacin). In contrast, outpatient therapy for patients without comorbidities involves high-dose amoxicillin or doxycycline; ICU admission is required for severe CAP meeting ATS/IDSA major criteria (mechanical ventilation or septic shock)."
      ],
      [
        "Outpatient management with oral amoxicillin-clavulanate and oral azithromycin with clinic follow-up in 48 hours",
        "Outpatient management is appropriate only for CURB-65 score 0 or 1; with a score of 3 (age >= 65, RR >= 30, BUN > 19), 30-day mortality is 15-20%, making outpatient therapy unsafe."
      ],
      [
        "Immediate transfer to the intensive care unit for endotracheal mechanical ventilation and intravenous vancomycin plus piperacillin-tazobactam",
        "ICU admission is reserved for septic shock requiring vasopressors or acute respiratory failure requiring mechanical ventilation; this patient is stable on room air (93%) and should be admitted to the general ward."
      ],
      [
        "Outpatient therapy with oral ciprofloxacin monotherapy for 5 days",
        "Ciprofloxacin has poor Streptococcus pneumoniae activity and is NOT a respiratory fluoroquinolone; oral monotherapy is contraindicated for inpatient CURB-65 >= 2 pneumonia."
      ],
      [
        "Immediate discharge home with oral oseltamivir and reassurance because rust-colored sputum indicates viral tracheobronchitis",
        "Rust-colored sputum is classic for Streptococcus pneumoniae lobar consolidation; oseltamivir treats influenza, not bacterial lobar pneumonia."
      ]
    ],
    "shortestValidSolution": "Age 68 + BUN 24 + RR 32 = CURB-65 score of 3 -> Inpatient hospital admission + IV Ceftriaxone + Azithromycin (or Levofloxacin).",
    "necessaryInference": "Apply CURB-65 criteria to determine pneumonia disposition: score >= 2 warrants inpatient admission with IV beta-lactam + macrolide or respiratory fluoroquinolone.",
    "strongestDistractor": "Outpatient management with oral amoxicillin-clavulanate and oral azithromycin with clinic follow-up in 48 hours",
    "distractorExclusion": "Outpatient management is safe only for CURB-65 score 0-1; score of 3 has substantial mortality requiring inpatient general ward admission.",
    "citation": "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia: An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019;200(7):e45-e67. PMID: 31573350.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Community-Acquired Pneumonia CURB-65 Criteria and Inpatient Admission.",
      "distractorExclusionNotes": "Competitor Outpatient management with oral amoxicillin-clavul excluded by Outpatient management is safe only for CURB-65 score 0-1; sc.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0727",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Pancreatitis Aggressive Fluid Resuscitation and Early Enteral Feeding",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman presents to the emergency department with a 12-hour history of severe, constant, boring epigastric pain that radiates directly into her mid-back. The pain worsens when she lies flat and is accompanied by persistent nausea and multiple episodes of non-bilious emesis. She has a history of symptomatic cholelithiasis. On physical examination, she is distressed and leaning forward on the examination stretcher. Vital signs: blood pressure 110/68 mm Hg, heart rate 108/min, respirations 22/min, and temperature 37.8\u00b0C (100.0\u00b0F). Abdominal examination reveals marked epigastric tenderness to palpation with voluntary guarding, without rebound tenderness, ecchymosis around the umbilicus (Cullen sign), or flank ecchymosis (Grey Turner sign). Laboratory evaluation demonstrates: serum lipase 2,840 U/L (normal 10-60 U/L), serum amylase 890 U/L, AST 180 U/L, ALT 240 U/L (normal < 35 U/L), total bilirubin 1.4 mg/dL, alkaline phosphatase 145 U/L, hematocrit 44%, and BUN 22 mg/dL. Which of the following represents the most appropriate initial management strategy for this patient?",
    "choices": [
      [
        "Aggressive goal-directed intravenous hydration with Lactated Ringer solution (200-500 mL/hr), early transabdominal ultrasonography, and initiation of early oral enteral feeding as soon as tolerated",
        "ACUTE PANCREATITIS diagnosis requires at least 2 of 3 Revised Atlanta Criteria: (1) Characteristic epigastric pain radiating to the back; (2) Serum lipase or amylase >= 3 times the upper limit of normal; (3) Characteristic cross-sectional imaging findings (CT, MRI, or US). Initial management focuses on three evidence-based interventions: (1) AGGRESSIVE GOAL-DIRECTED INTRAVENOUS HYDRATION: Pancreatitis causes massive third-spacing of fluid, systemic endothelial activation, and microvascular hypoperfusion of the pancreas. Early aggressive crystalloid resuscitation (200-500 mL/hr, or 20 mL/kg bolus followed by 3 mL/kg/hr) for the first 12-24 hours significantly reduces hemoconcentration, decreases pancreatic necrosis, and reduces organ failure. LACTATED RINGER SOLUTION is preferred over 0.9% normal saline because normal saline induces hyperchloremic metabolic acidosis that activates pancreatic trypsinogen and increases systemic inflammation. Resuscitation is titrated to clinical endpoints: heart rate < 120/min, MAP 65-85 mm Hg, urine output > 0.5-1 mL/kg/hr, and reduction in hematocrit and BUN. (2) ETIOLOGY IDENTIFICATION: TRANSABDOMINAL ULTRASONOGRAPHY must be performed in all patients to evaluate for GALLSTONES and common bile duct dilation (ALT > 150 U/L has a 95% positive predictive value for BILIARY/GALLSTONE PANCREATITIS). (3) EARLY ENTERAL NUTRITION: Historic practice of prolonged bowel rest (NPO) has been superseded. Current guidelines recommend EARLY ORAL ENTERAL FEEDING (low-fat solid or liquid diet) within 24-48 hours as soon as ileus has resolved and pain is improving, which maintains gut mucosal barrier integrity and reduces infectious complications and mortality. Prophylactic IV antibiotics are strictly NOT recommended for acute pancreatitis."
      ],
      [
        "Strict NPO (nothing by mouth) for 7 days, total parenteral nutrition (TPN) via central line, and prophylactic intravenous imipenem",
        "TPN and prolonged bowel rest disrupt gut mucosal integrity, promoting bacterial translocation; prophylactic antibiotics are proven ineffective in acute pancreatitis."
      ],
      [
        "Immediate contrast-enhanced abdominal CT scan within 6 hours of admission to assess pancreatic necrosis",
        "Abdominal CT within the first 48 hours is unnecessary if Atlanta criteria are met and frequently underestimates the extent of pancreatic necrosis; CT is indicated at 48-72 hours only if clinical deterioration occurs."
      ],
      [
        "Emergent endoscopic retrograde cholangiopancreatography (ERCP) within 12 hours regardless of cholangitis signs",
        "ERCP is indicated within 24 hours ONLY IF concurrent acute cholangitis (fever, jaundice, biliary sepsis) or persistent biliary duct obstruction is present, not for gallstone pancreatitis alone."
      ],
      [
        "Intravenous infusion of 0.9% normal saline at 75 mL/hr and high-dose subcutaneous octreotide",
        "75 mL/hr is severe under-resuscitation in acute pancreatitis; normal saline worsens acidosis; octreotide has no benefit in acute pancreatitis."
      ]
    ],
    "shortestValidSolution": "Boring epigastric pain radiating to back + Lipase 2840 + ALT > 150 = Acute biliary pancreatitis -> Aggressive IV Lactated Ringer's + Abdominal US + Early enteral feeding.",
    "necessaryInference": "Manage acute pancreatitis: administer aggressive IV Lactated Ringer's hydration, perform abdominal ultrasound to evaluate gallstones, and initiate early enteral feeding; avoid prophylactic antibiotics.",
    "strongestDistractor": "Strict NPO (nothing by mouth) for 7 days, total parenteral nutrition (TPN) via central line, and prophylactic intravenous imipenem",
    "distractorExclusion": "Prolonged bowel rest and TPN increase infection rates and mortality; prophylactic antibiotics are not recommended; early enteral nutrition preserves the gut barrier.",
    "citation": "Tenner S, Baillie J, DeWitt J, Vege SS. American College of Gastroenterology guideline: management of acute pancreatitis. Am J Gastroenterol. 2013;108(9):1400-1415. PMID: 23896955.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Pancreatitis Aggressive Fluid Resuscitation and Early Enteral Feeding.",
      "distractorExclusionNotes": "Competitor Strict NPO (nothing by mouth) for 7 days, total pa excluded by Prolonged bowel rest and TPN increase infection rates and mo.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0728",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Nervous System",
    "topic": "Simple vs Complex Febrile Seizure Diagnostic Evaluation and Reassurance",
    "provisionalDifficulty": 4,
    "stem": "A 16-month-old previously healthy boy is brought to the emergency department by his frantic parents 25 minutes after experiencing a seizure at home. The parents report that the child developed a runny nose, mild cough, and fever earlier today. While sitting on the living room rug, his eyes suddenly rolled upward, his arms and legs began shaking rhythmically, and he became unresponsive. The convulsive episode was generalized, lasted approximately 2 minutes, and stopped spontaneously. He was sleepy for 10 minutes afterwards but has since returned to his baseline active, playful demeanor. He has had no focal twitching, no previous seizures, and no family history of epilepsy. On physical examination, the child is interactive, smiling, and playing with a tongue depressor. Vital signs: temperature 39.2\u00b0C (102.6\u00b0F), heart rate 124/min, and respirations 24/min. Neurological examination reveals normal mental status, normal cranial nerves, normal symmetric muscle tone and strength, and normal deep tendon reflexes. Kernig and Brudzinski signs are negative, and there is no neck stiffness or anterior fontanelle fullness. Otoscopic examination demonstrates an erythematous, bulging, poorly mobile right tympanic membrane consistent with acute otitis media. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Reassurance of the parents regarding the benign nature of simple febrile seizures, administration of oral acetaminophen or ibuprofen for comfort, and outpatient treatment for acute otitis media without neuroimaging, EEG, or lumbar puncture",
        "FEBRILE SEIZURES are the most common neurological disorder of infants and young children, affecting 2-5% of children between 6 AND 60 MONTHS OF AGE (peak incidence at 18 months). They occur in the presence of a fever (temperature >= 38.0\u00b0C / 100.4\u00b0F) in children without intracranial infection, metabolic disturbance, or history of afebrile seizures. Febrile seizures are categorized into two distinct classes: (1) SIMPLE FEBRILE SEIZURE: (a) Generalized tonic-clonic convulsion, (b) Duration < 15 MINUTES, (c) Occurs ONLY ONCE IN A 24-HOUR PERIOD (single event), and (d) Resolves with complete recovery of baseline mental status within minutes to an hour without postictal focal neurological deficits (no Todd paresis). (2) COMPLEX FEBRILE SEIZURE: Focal onset or focal features during the seizure, prolonged duration (>= 15 minutes), or multiple episodes occurring within a 24-hour period. For a child with a classic SIMPLE FEBRILE SEIZURE who has returned to baseline and has an identified extracranial source of fever (such as acute otitis media) without any meningeal signs: NO ROUTINE DIAGNOSTIC TESTING IS INDICATED. Routine electroencephalography (EEG), neuroimaging (CT or MRI of the brain), and lumbar puncture are STRICTLY NOT RECOMMENDED. Lumbar puncture is indicated ONLY IF: signs of meningitis/encephalopathy are present (nuchal rigidity, bulging fontanelle, persistent altered mental status, petechial rash), or the child is unimmunized or under-immunized against Hib/Streptococcus pneumoniae, or is already pre-treated with antibiotics that mask meningitis. Simple febrile seizures do not cause brain damage or cognitive impairment, and carry only a 1-2% risk of future epilepsy (barely higher than the 1% baseline population risk). Management consists of parental education, reassurance, and antipyretics for comfort."
      ],
      [
        "Immediate non-contrast head CT scan to rule out intracranial mass effect or hemorrhage",
        "Neuroimaging is not recommended for simple febrile seizures in neurologically normal children; CT exposes the developing pediatric brain to unnecessary ionizing radiation."
      ],
      [
        "Performance of an immediate lumbar puncture and initiation of empiric intravenous vancomycin and ceftriaxone",
        "Lumbar puncture is not indicated for a simple febrile seizure in an alert child without meningeal signs who has an obvious source of fever (otitis media)."
      ],
      [
        "Electroencephalogram (EEG) within 24 hours to assess the risk of future idiopathic generalized epilepsy",
        "EEGs obtained after a simple febrile seizure do not predict seizure recurrence or the development of future epilepsy and are not recommended."
      ],
      [
        "Initiation of daily oral levetiracetam or phenobarbital maintenance therapy for 1 year",
        "Continuous antiepileptic therapy is strictly not recommended for simple febrile seizures due to adverse cognitive and behavioral side effects without preventing epilepsy."
      ]
    ],
    "shortestValidSolution": "Child 16 mo + fever + single generalized seizure < 15 min + normal neuro exam + otitis media = Simple febrile seizure -> Reassurance + Treat otitis media (NO CT, EEG, or LP).",
    "necessaryInference": "Identify simple febrile seizure management: generalized, < 15 min, single in 24 hr in a child 6-60 months; requires reassurance and treating the extracranial fever source without routine CT, EEG, or LP.",
    "strongestDistractor": "Performance of an immediate lumbar puncture and initiation of empiric intravenous vancomycin and ceftriaxone",
    "distractorExclusion": "Lumbar puncture is indicated only if signs of meningitis (nuchal rigidity, petechiae, persistent lethargy) or incomplete Hib/pneumococcal immunization are present.",
    "citation": "Subcommittee on Febrile Seizures; American Academy of Pediatrics. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011;127(2):389-394. PMID: 21285335.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Simple vs Complex Febrile Seizure Diagnostic Evaluation and Reassurance.",
      "distractorExclusionNotes": "Competitor Performance of an immediate lumbar puncture and in excluded by Lumbar puncture is indicated only if signs of meningitis (nu.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0729",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Pregnancy",
    "topic": "Acute Appendicitis in Pregnancy Diagnostic Imaging Algorithm",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old primigravida at 26 weeks of gestation presents to the emergency department with a 24-hour history of right-sided abdominal pain, anorexia, and low-grade fever. She reports that the pain initially began as a vague ache around her umbilicus and has now localized to her right flank and right upper quadrant. Physical examination reveals an uncomfortable pregnant woman. Vital signs: temperature 38.1\u00b0C (100.6\u00b0F), blood pressure 114/72 mm Hg, and heart rate 94/min. Abdominal examination demonstrates focal tenderness to deep palpation in the right upper quadrant and right mid-flank, superior to the anterior superior iliac spine, with localized guarding. Pelvic examination reveals a closed cervix with no vaginal bleeding or fluid leakage. Fetal heart tones are reassuring at 144/min with a Category 1 tracing. Laboratory studies show: WBC 17,400/microL with 16% band forms (baseline 11,000/microL) and normal serum transaminases, lipase, and urinalysis. Graded-compression transabdominal ultrasonography of the right abdomen is performed but fails to visualize the appendix due to overlying bowel gas and acoustic shadowing from the gravid uterus. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Abdominal and pelvic magnetic resonance imaging (MRI) without intravenous gadolinium contrast",
        "ACUTE APPENDICITIS is the most common non-obstetric surgical emergency during pregnancy, occurring in approximately 1 in 1,000 pregnancies. Diagnosing appendicitis in pregnancy is challenging because physiological leukocytosis is common in pregnancy, and as the gravid uterus enlarges, IT DISPLACES THE CECUM AND APPENDIX CRANIALLY AND LATERALLY toward the RIGHT MID-FLANK AND RIGHT UPPER QUADRANT (RUQ). Consequently, pregnant patients in the second and third trimesters frequently present with right mid-abdomen or RUQ tenderness rather than classic McBurney point tenderness. Delay in diagnosis significantly increases the risk of appendiceal rupture, peritonitis, maternal sepsis, and fetal loss. The DIAGNOSTIC IMAGING ALGORITHM in pregnancy follows a strict sequence: (1) FIRST-LINE IMAGING: GRADED-COMPRESSION TRANSABDOMINAL AND TRANSVAGINAL ULTRASONOGRAPHY. Ultrasound avoids all ionizing radiation. (2) SECOND-LINE IMAGING: When ultrasound is INCONCLUSIVE OR NON-DIAGNOSTIC (fails to visualize the appendix, which occurs in up to 50-70% of pregnant patients due to anatomical displacement and uterine shadowing), the NEXT STEP OF CHOICE IS ABDOMINAL AND PELVIC MAGNETIC RESONANCE IMAGING (MRI) WITHOUT GADOLINIUM. Non-contrast MRI has > 95% sensitivity and specificity for appendicitis, provides excellent anatomical resolution of displaced viscera, and avoids ionizing radiation to the developing fetus. Intravenous gadolinium is contraindicated in pregnancy because it crosses the placenta and is associated with rheumatological conditions and fetal stillbirth. (3) THIRD-LINE: Low-dose abdominal/pelvic CT is reserved ONLY when MRI is unavailable or inconclusive."
      ],
      [
        "Immediate contrast-enhanced computed tomography (CT) scan of the abdomen and pelvis",
        "Contrast CT exposes the fetus to ionizing radiation; MRI without contrast is the preferred second-line modality when ultrasound is non-diagnostic in pregnancy."
      ],
      [
        "Perform an emergent right upper quadrant diagnostic laparotomy under general anesthesia",
        "Surgical exploration without definitive imaging is premature when advanced non-radiation imaging (MRI) is readily available to confirm appendicitis or identify alternative diagnoses."
      ],
      [
        "Discharge home on oral cephalexin for presumptive pyelonephritis and follow up in 48 hours",
        "Urinalysis is completely normal, ruling out pyelonephritis; discharging a pregnant woman with undiagnosed RUQ pain risks appendiceal perforation, peritonitis, and fetal loss."
      ],
      [
        "Administration of intravenous gadolinium-enhanced MRI of the abdomen and pelvis",
        "Gadolinium contrast crosses the placenta and dissociates into toxic free ions, linked to fetal death and rheumatological disorders; MRI in pregnancy must be performed WITHOUT gadolinium."
      ]
    ],
    "shortestValidSolution": "Pregnant woman (26 wks) + RUQ/flank pain (displaced appendix) + non-diagnostic ultrasound = Next step: Abdominal MRI WITHOUT gadolinium contrast.",
    "necessaryInference": "Formulate imaging algorithm for appendicitis in pregnancy: ultrasound is first-line; when ultrasound is inconclusive, MRI without contrast is the preferred second-line imaging.",
    "strongestDistractor": "Immediate contrast-enhanced computed tomography (CT) scan of the abdomen and pelvis",
    "distractorExclusion": "CT involves ionizing radiation; guidelines specify that MRI without contrast is the mandatory next step after an inconclusive ultrasound in pregnancy.",
    "citation": "Kave M, Parooie F, Salarzaei M. Pregnancy and appendicitis: a systematic review and meta-analysis on the clinical use of MRI in diagnosis of acute appendicitis in pregnancy. World J Emerg Surg. 2019;14:37. PMID: 31413702.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Appendicitis in Pregnancy Diagnostic Imaging Algorithm.",
      "distractorExclusionNotes": "Competitor Immediate contrast-enhanced computed tomography (C excluded by CT involves ionizing radiation; guidelines specify that MRI .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0730",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Primary Hyperaldosteronism Screening Confirmation and Adrenal Vein Sampling",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old man presents for evaluation of difficult-to-control hypertension. Despite strict compliance with a three-drug antihypertensive regimen\u2014amlodipine 10 mg daily, lisinopril 40 mg daily, and hydrochlorothiazide 25 mg daily\u2014his clinic blood pressures consistently range between 162/98 mm Hg and 174/104 mm Hg. He reports occasional mild muscle cramps and fatigue. Physical examination reveals no abdominal bruits, cushingoid features, or edema. Routine serum electrolytes show: sodium 144 mEq/L, potassium 3.1 mEq/L (normal 3.5-5.0 mEq/L), chloride 98 mEq/L, and bicarbonate 31 mEq/L. Plasma aldosterone concentration (PAC) is 38 ng/dL (normal 2-20 ng/dL) and plasma renin activity (PRA) is suppressed at 0.3 ng/mL/hr (normal 0.6-3.0 ng/mL/hr), yielding an elevated PAC/PRA ratio of 126 (normal < 20). Oral sodium loading confirmatory testing fails to suppress urinary aldosterone excretion. High-resolution thin-slice contrast CT of the adrenal glands demonstrates a 1.4-cm well-circumscribed, lipid-rich hypodense nodule in the left adrenal gland, while the right adrenal gland appears morphologically normal. Which of the following is the most appropriate next step before definitive surgical intervention?",
    "choices": [
      [
        "Bilateral adrenal venous sampling (AVS) to differentiate a unilateral aldosterone-producing adenoma from bilateral adrenal hyperplasia",
        "PRIMARY HYPERALDOSTERONISM (PHA / Conn syndrome) is the leading cause of secondary hypertension, responsible for 5-10% of all hypertensive patients and up to 20% of resistant hypertension. The diagnostic and management pathway involves three distinct, mandatory phases: (1) SCREENING: Morning PLASMA ALDOSTERONE CONCENTRATION TO PLASMA RENIN ACTIVITY RATIO (PAC/PRA ratio). A PAC/PRA ratio >= 20-30 combined with a PAC >= 15 ng/dL is a positive screen, reflecting autonomous aldosterone secretion with negative-feedback suppression of renin. (2) CONFIRMATION: Confirmatory testing with oral sodium loading test, intravenous saline infusion test, or fludrocortisone suppression test. Failure to suppress aldosterone confirms autonomous production. (3) SUBTYPE DIFFERENTIATION: PHA is caused by UNILATERAL ALDOSTERONE-PRODUCING ADENOMA (APA, ~35-40%, cured by surgical adrenalectomy) or BILATERAL IDIOPATHIC ADRENAL HYPERPLASIA (IHA, ~60%, managed medically with mineralocorticoid receptor antagonists like spironolactone or eplerenone). Adrenal CT is obtained to rule out large adrenal carcinoma. However, ADRENAL CT IS OFTEN MISLEADING: non-functioning incidental adrenal adenomas ('incidentalomas') are present in > 10% of adults, and microadenomas or bilateral hyperplasia may appear normal on CT. Therefore, in surgical candidates > 35 years of age, BILATERAL ADRENAL VENOUS SAMPLING (AVS) IS THE GOLD STANDARD AND MANDATORY NEXT STEP before surgery. AVS measures aldosterone and cortisol levels simultaneously in both adrenal veins and the IVC to prove true unilateral lateralization. If lateralization is confirmed (aldosterone-to-cortisol ratio > 4:1 on the dominant side), unilateral laparoscopic adrenalectomy is performed; if non-lateralizing (bilateral hyperplasia), medical therapy is initiated."
      ],
      [
        "Immediate left laparoscopic adrenalectomy based on the definitive unilateral adrenal CT finding",
        "Proceeding directly to adrenalectomy based on CT alone leads to incorrect or unnecessary surgery in up to 25-35% of patients because the visible nodule may be a non-functioning incidentaloma with contralateral hyperplasia; AVS is mandatory."
      ],
      [
        "Initiation of high-dose intravenous potassium chloride infusion and discharge on oral spironolactone without further workup",
        "Spironolactone is appropriate for bilateral hyperplasia, but if this patient has a true unilateral adenoma, laparoscopic adrenalectomy is curative; performing AVS is necessary to identify surgical cure."
      ],
      [
        "Percutaneous fine-needle aspiration biopsy of the left adrenal nodule to exclude pheochromocytoma",
        "Adrenal biopsy is strictly contraindicated in hyperaldosteronism due to high bleeding and pneumothorax risks; biopsy cannot distinguish benign adenoma from hyperplasia."
      ],
      [
        "Performance of a 24-hour urinary free cortisol and overnight 1-mg dexamethasone suppression test",
        "Hyperaldosteronism is already confirmed; Cushing syndrome workup is unnecessary unless overt hypercortisolemic features or a large heterogeneous adrenal mass are present."
      ]
    ],
    "shortestValidSolution": "Resistant HTN + hypokalemia + PAC/PRA ratio 126 + CT left adrenal nodule = Primary hyperaldosteronism -> Bilateral Adrenal Venous Sampling (AVS) before surgery.",
    "necessaryInference": "Sequence primary hyperaldosteronism workup: PAC/PRA ratio screen -> confirmatory suppression test -> adrenal CT -> bilateral adrenal venous sampling (AVS) to confirm lateralization before adrenalectomy.",
    "strongestDistractor": "Immediate left laparoscopic adrenalectomy based on the definitive unilateral adrenal CT finding",
    "distractorExclusion": "Adrenal CT has poor specificity for functional lateralization in patients > 35 years; AVS is required to confirm unilateral disease before adrenalectomy.",
    "citation": "Funder JW, Carey RM, Mantero F, et al. The Management of Primary Aldosteronism: Case Detection, Diagnosis, and Treatment: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(5):1889-1916. PMID: 26934393.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Primary Hyperaldosteronism Screening Confirmation and Adrenal Vein Sampling.",
      "distractorExclusionNotes": "Competitor Immediate left laparoscopic adrenalectomy based on excluded by Adrenal CT has poor specificity for functional lateralizatio.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0731",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Meningococcal Disease Post-Exposure Prophylaxis Indications",
    "provisionalDifficulty": 4,
    "stem": "An 18-year-old college freshman is admitted to the intensive care unit with acute meningococcal meningitis confirmed by cerebrospinal fluid Gram stain showing Gram-negative diplococci and positive PCR for Neisseria meningitidis. Several individuals seek consultation at the university student health clinic regarding post-exposure chemoprophylaxis: (1) Person A: The patient's roommate who has shared an enclosed dormitory bedroom for the past 4 months; (2) Person B: A classmate who sat two rows away from the patient during a 50-minute lecture 3 days ago; (3) Person C: The patient's romantic partner who engaged in intimate kissing 2 days prior to symptom onset; (4) Person D: The emergency department physician who performed endotracheal intubation without wearing a surgical mask or face shield during emergency resuscitation; (5) Person E: The triage nurse who checked the patient's vital signs and placed an identification wristband while wearing standard precautions. Which of these contacts are candidates for immediate antimicrobial chemoprophylaxis?",
        "choices": [
      [
        "Persons A, C, and D (roommate, intimate partner, intubating physician)",
        "NEISSERIA MENINGITIDIS is transmitted via aerosolized respiratory droplets or direct contact with respiratory secretions. The secondary attack rate among close contacts is 500- to 1,000-fold higher than in the general population. POST-EXPOSURE CHEMOPROPHYLAXIS is indicated for CLOSE CONTACTS within the 7 days prior to symptom onset, defined by CDC/ACIP guidelines as: (1) HOUSEHOLD CONTACTS or roommates living in the same residence/dormitory room (Person A: dormitory roommate); (2) CHILDCARE OR DAYCARE contacts; (3) Direct contact with patient oral/respiratory secretions, including KISSING or sharing eating utensils/toothbrushes (Person C: romantic partner); (4) HEALTHCARE WORKERS WITH UNPROTECTED EXPOSURE TO RESPIRATORY SECRETIONS during high-risk aerosol-generating airway procedures (endotracheal intubation, suctioning, mouth-to-mouth resuscitation) WITHOUT wearing a mask/face shield (Person D: intubating physician). In contrast: Chemoprophylaxis is STRICTLY NOT INDICATED for casual, indirect, or brief contacts—such as sitting in the same classroom, office, or dining hall (Person B: classmate in lecture), or healthcare workers who performed routine clinical care without direct mucous membrane droplet exposure (Person E: triage nurse). First-line chemoprophylaxis regimens include: (a) ORAL RIFAMPIN (600 mg orally every 12 hours for 4 doses / 2 days; side effects: orange discoloration of body fluids, oral contraceptive failure); (b) SINGLE-DOSE ORAL CIPROFLOXACIN (500 mg orally once, preferred for adults); or (c) SINGLE-DOSE INTRAMUSCULAR CEFTRIAXONE (250 mg IM once, preferred in pregnancy and children < 1 month). Chemoprophylaxis should be administered as soon as possible, ideally within 24 hours of identification."
      ],
      [
        "Persons A, B, C, D, and E (all close contacts, casual contacts, and hospital staff)",
        "Casual classroom contacts and routine healthcare providers do not meet close contact criteria; universal prophylaxis leads to widespread antibiotic resistance and adverse effects."
      ],
      [
        "Person A only (dormitory roommate with prolonged household bedroom contact)",
        "Romantic partners with intimate kissing exposure and healthcare workers who performed unprotected endotracheal intubation have high attack rates and require chemoprophylaxis."
      ],
      [
        "Persons B and E only (lecture classmate and triage nurse in hospital)",
        "Persons B and E had casual and protected contact, which carries negligible risk and does not warrant chemoprophylaxis."
      ],
      [
        "Persons A and C only (dormitory roommate and intimate partner)",
        "Healthcare workers who intubate or suction patients with meningococcemia without droplet PPE have direct airway droplet exposure and require prophylaxis."
      ]
    ],
    "shortestValidSolution": "Meningococcal meningitis close contacts = Dormitory roommate (A) + Kissing partner (C) + Intubating physician without mask (D) -> Prophylaxis (Rifampin, Ciprofloxacin, Ceftriaxone).",
    "necessaryInference": "Identify indications for meningococcal post-exposure chemoprophylaxis: household/dormitory roommates, direct mucosal droplet exposure (kissing), and unprotected intubation; casual contacts are excluded.",
    "strongestDistractor": "Persons A, B, C, D, and E (all contacts should receive chemoprophylaxis)",
    "distractorExclusion": "Casual classroom contacts and routine nursing care do not require chemoprophylaxis; only household contacts, intimate oral exposure, and unprotected airway managers qualify.",
    "citation": "Cohn AC, MacNeil JR, Clark TA, et al. Prevention and control of meningococcal disease: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2013;62(RR-2):1-28. PMID: 23515099.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Meningococcal Disease Post-Exposure Prophylaxis Indications.",
      "distractorExclusionNotes": "Competitor Persons A, B, C, D, and E (all contacts should rec excluded by Casual classroom contacts and routine nursing care do not re.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0732",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Intrahepatic Cholestasis of Pregnancy Bile Acids and Delivery Timing",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old multigravida (gravida 3, para 2) at 33 weeks of gestation presents to her obstetrician for severe, intractable itching that began 10 days ago and has progressively worsened. She states that the itching is most intense on the palms of her hands and soles of her feet and is particularly agonizing at night, preventing her from sleeping. Physical examination reveals an uncomfortable pregnant woman with multiple linear excoriations on her wrists, palms, ankles, and plantar surfaces of her feet. Thorough skin inspection demonstrates NO PRIMARY CUTANEOUS LESIONS, no erythema, no urticarial wheals, and no vesicles or bullae. Abdominal examination is benign with a fundal height consistent with gestational age. Fetal heart rate tracing is Category 1. Laboratory studies show: total serum bile acids 48 micromol/L (normal non-pregnant < 10 micromol/L), total bilirubin 1.6 mg/dL, direct bilirubin 0.8 mg/dL, AST 112 U/L, and ALT 148 U/L. Viral hepatitis serologies and autoimmune markers are negative. Which of the following is the most appropriate medical and obstetrical management strategy for this patient?",
    "choices": [
      [
        "Initiation of oral ursodeoxycholic acid (UDCA) for maternal symptom relief and planned delivery between 36 and 37 weeks of gestation",
        "INTRAHEPATIC CHOLESTASIS OF PREGNANCY (ICP) is the most common pregnancy-specific liver disorder, occurring in the late second and third trimesters. It is caused by impaired biliary excretion of bile acids driven by genetic susceptibility in canalicular transporters (ABCB4/MDR3) combined with high circulating levels of estrogen and progesterone. The hallmark clinical presentation is INTENSE PRURITUS OF THE PALMS AND SOLES that characteristically lacks any primary dermatological rash (only secondary excoriations from scratching are seen) and worsens at night. DIAGNOSIS IS CONFIRMED BY ELEVATED TOTAL SERUM BILE ACIDS (>= 10 MICROMOL/L), often accompanied by mild elevations in serum transaminases and conjugated bilirubin. While maternal prognosis is benign (symptoms and lab abnormalities resolve rapidly postpartum), ICP CARRIES SIGNIFICANT RISKS OF ADVERSE FETAL OUTCOMES\u2014most critically SUDDEN, UNPREDICTABLE INTRAUTERINE FETAL DEMISE (stillbirth), meconium-stained amniotic fluid, and spontaneous preterm delivery. Fetal mortality risk correlates directly with maternal bile acid concentrations: mild (10-39 micromol/L), moderate (40-99 micromol/L), and severe (>= 100 micromol/L). Management: (1) FIRST-LINE MEDICAL THERAPY: ORAL URSODEOXYCHOLIC ACID (UDCA, 10-15 mg/kg/day). UDCA displaces toxic hydrophobic bile acids, stimulates canalicular excretion, relieves maternal pruritus, and normalizes liver biochemistries. (2) DELIVERY TIMING: The definitive intervention to prevent stillbirth is SCHEDULED PRETERM/EARLY TERM DELIVERY: For patients with total bile acids 40-99 micromol/L, delivery is recommended at 36 0/7 TO 37 0/7 WEEKS OF GESTATION. For severe disease (bile acids >= 100 micromol/L), delivery is recommended at 36 0/7 weeks (or upon diagnosis if diagnosed later). Antihistamines and topical steroids do not lower bile acids or prevent fetal demise."
      ],
      [
        "Topical triamcinolone ointment and oral diphenhydramine monotherapy with expectant management until spontaneous labor at 41 weeks",
        "Topical steroids and antihistamines provide minimal pruritus relief, have zero effect on bile acid excretion, and expectant management past 37 weeks carries high risk of sudden stillbirth."
      ],
      [
        "Immediate emergency cesarean section under general anesthesia at 33 weeks of gestation",
        "Immediate delivery at 33 weeks causes significant prematurity complications; with bile acids < 100 micromol/L and reassuring fetal status, medical therapy with UDCA and delivery at 36-37 weeks is standard."
      ],
      [
        "Oral cholestyramine monotherapy and immediate therapeutic plasma exchange",
        "Cholestyramine is second-line, poorly tolerated, binds fat-soluble vitamins (causing vitamin K deficiency and coagulopathy), and does not lower fetal stillbirth risk as effectively as UDCA."
      ],
      [
        "Weekly intramuscular hydroxyzine injections and induction of labor at 39 weeks of gestation",
        "Hydroxyzine does not reduce bile acids, and waiting until 39 weeks is unsafe for patients with bile acids >= 40 micromol/L."
      ]
    ],
    "shortestValidSolution": "Third-trimester palm/sole pruritus without rash + high bile acids (48) = Intrahepatic cholestasis of pregnancy -> Oral UDCA + Delivery at 36-37 weeks (prevent stillbirth).",
    "necessaryInference": "Manage intrahepatic cholestasis of pregnancy: oral ursodeoxycholic acid relieves maternal pruritus; planned delivery at 36-37 weeks (or 36 weeks if >= 100 micromol/L) prevents intrauterine fetal demise.",
    "strongestDistractor": "Topical triamcinolone ointment and oral diphenhydramine monotherapy with expectant management until spontaneous labor at 41 weeks",
    "distractorExclusion": "Expectant management past 37 weeks is contraindicated in ICP due to the risk of sudden fetal demise; UDCA and planned delivery at 36-37 weeks are required.",
    "citation": "Society for Maternal-Fetal Medicine (SMFM); Lee RH, Greenberg M, Metz TD, Pettker CM. Society for Maternal-Fetal Medicine Consult Series #53: Intrahepatic cholestasis of pregnancy. Am J Obstet Gynecol. 2021;224(2):B2-B9. PMID: 33197417.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Intrahepatic Cholestasis of Pregnancy Bile Acids and Delivery Timing.",
      "distractorExclusionNotes": "Competitor Topical triamcinolone ointment and oral diphenhydr excluded by Expectant management past 37 weeks is contraindicated in ICP.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0733",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Immune Thrombocytopenia First-Line Corticosteroids vs Splenectomy",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old woman presents to the clinic with easy bruising and petechiae on her lower legs for 5 days, accompanied by unusually heavy menstrual bleeding during her current cycle. She is otherwise asymptomatic with no fever, weight loss, or joint pain. Her past medical history is unremarkable, and she takes no prescription or over-the-counter medications. Physical examination reveals an alert, healthy-appearing woman. Physical examination confirms scattered petechiae and non-palpable purpura over both shins and minor ecchymoses on her forearms. There is no hepatomegaly, splenomegaly, or lymphadenopathy. Complete blood count demonstrates: platelet count 18,000/microL (normal 150,000-450,000/microL), hemoglobin 12.8 g/dL, and WBC 6,400/microL with a normal differential. Peripheral blood smear reveals markedly decreased platelets with normal morphology and a few large, well-granulated platelets; erythrocytes and leukocytes are completely normal, with ABSOLUTELY NO SCHISTOCYTES. Coagulation studies (PT/INR and aPTT) are normal. HIV and Hepatitis C serologies are negative. Which of the following is the most appropriate initial management step for this patient?",
    "choices": [
      [
        "Initiation of systemic corticosteroid therapy (oral prednisone 1 mg/kg daily or high-dose oral dexamethasone 40 mg daily for 4 days)",
        "PRIMARY IMMUNE THROMBOCYTOPENIA (ITP) is an acquired autoimmune disorder characterized by isolated thrombocytopenia (platelet count < 100,000/microL) in the absence of other systemic causes or cytopenias. Pathophysiology is driven by IgG autoantibodies directed against platelet membrane glycoproteins (GPIIb/IIIa or GPIb/IX). Antibody-coated platelets are cleared prematurely by splenic macrophage Fc-gamma receptors (extravascular clearance), combined with antibody-mediated inhibition of megakaryocyte thrombopoiesis in the bone marrow. The diagnosis of ITP is one of EXCLUSION: peripheral blood smear must be reviewed to confirm true thrombocytopenia (ruling out EDTA-dependent pseudothrombocytopenia) and ensure absence of schistocytes (ruling out TTP/HUS). Secondary causes (HIV, Hepatitis C, SLE, CLL) must be screened. Treatment guidelines: (1) Asymptomatic adult patients with platelets >= 30,000/microL and no bleeding can be safely observed without pharmacotherapy. (2) Treatment is indicated for: PLATELETS < 30,000/microL, OR patients with active bleeding regardless of platelet count. The FIRST-LINE THERAPY is SYSTEMIC CORTICOSTEROIDS: ORAL PREDNISONE (1 mg/kg daily tapered over several weeks) or HIGH-DOSE ORAL DEXAMETHASONE (40 mg daily for 4 days). Corticosteroids suppress autoantibody production and downregulate splenic macrophage Fc receptors, increasing platelet count within 2 to 7 days. INTRAVENOUS IMMUNOGLOBULIN (IVIG) or intravenous anti-D immune globulin (in Rh-positive non-splenectomized patients) is indicated when a more rapid platelet rise is needed (severe active bleeding or urgent surgery). Platelet transfusions are ineffective (rapidly destroyed by circulating autoantibodies) and reserved only for catastrophic hemorrhage. Second-line therapies for chronic refractory ITP include THROMBOPOIETIN RECEPTOR AGONISTS (romiplostim, eltrombopag), RITUXIMAB, or LAPAROSCOPIC SPLENECTOMY."
      ],
      [
        "Immediate transfusion of two units of apheresis platelets to maintain count > 50,000/microL",
        "Prophylactic platelet transfusions are ineffective in ITP because circulating antiplatelet autoantibodies destroy donor platelets within minutes to hours; transfusions are reserved for life-threatening hemorrhage."
      ],
      [
        "Immediate elective laparoscopic splenectomy",
        "Splenectomy is a second-line therapy reserved for chronic refractory ITP failing medical management for > 12 months; performing splenectomy first-line is inappropriate."
      ],
      [
        "Initiation of oral eltrombopag (thrombopoietin receptor agonist) monotherapy",
        "Thrombopoietin receptor agonists (eltrombopag, romiplostim) are second-line agents for corticosteroid-dependent or refractory ITP, not first-line therapy."
      ],
      [
        "Immediate therapeutic plasma exchange (PEX) via central venous catheter",
        "Plasma exchange is the definitive treatment for TTP, but is completely ineffective and not indicated for ITP."
      ]
    ],
    "shortestValidSolution": "Isolated thrombocytopenia (18k) + mucosal bleeding + normal smear (no schistocytes) = Immune thrombocytopenia (ITP) -> First-line: Systemic Corticosteroids (Prednisone or Dexamethasone).",
    "necessaryInference": "Select first-line therapy for adult ITP: systemic corticosteroids (prednisone or high-dose dexamethasone) or IVIG for platelets < 30,000/microL or active bleeding.",
    "strongestDistractor": "Immediate transfusion of two units of apheresis platelets to maintain count > 50,000/microL",
    "distractorExclusion": "Platelet transfusions are cleared rapidly by splenic autoantibodies and are ineffective in ITP unless life-threatening hemorrhage is occurring.",
    "citation": "Neunert C, Terrell DR, Arnold DM, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866. PMID: 31794604.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Immune Thrombocytopenia First-Line Corticosteroids vs Splenectomy.",
      "distractorExclusionNotes": "Competitor Immediate transfusion of two units of apheresis pl excluded by Platelet transfusions are cleared rapidly by splenic autoant.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0734",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Severe Traumatic Brain Injury and Elevated ICP Management Protocol",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man is brought to the trauma bay following an assault with a baseball bat. On arrival, he is obtunded with a Glasgow Coma Scale (GCS) score of 6 (Eye 1, Verbal 2, Motor 3: abnormal flexion/decorticate posturing). His airway is immediately secured with rapid sequence intubation, and mechanical ventilation is established. Non-contrast head CT reveals a large, left-sided biconvex (lenticular) hyperdense extra-axial collection with an underlying skull fracture and 8 mm of midline shift, consistent with an acute epidural hematoma. An intracranial pressure (ICP) monitor is placed, revealing an elevated opening ICP of 32 mm Hg (normal < 20 mm Hg) with cerebral perfusion pressure (CPP) of 48 mm Hg (target > 60-70 mm Hg). Vital signs: blood pressure 188/104 mm Hg, heart rate 48/min, and respirations 14/min (Cushing triad). On pupillary examination, his left pupil has acutely dilated to 6 mm and is sluggishly reactive to light (anisocoria, indicating uncal herniation). While the neurosurgical team mobilizes the operating room for emergent craniotomy, which of the following is the most appropriate acute medical intervention to lower intracranial pressure?",
    "choices": [
      [
        "Elevation of the head of the bed to 30 degrees, administration of intravenous hyperosmolar therapy (3% hypertonic saline or mannitol), and brief hyperventilation (target PaCO2 30-35 mm Hg) only as a temporizing measure for imminent herniation",
        "ELEVATED INTRACRANIAL PRESSURE (ICP > 20-22 mm Hg) following severe traumatic brain injury (TBI) impairs CEREBRAL PERFUSION PRESSURE (CPP = MAP - ICP; normal CPP target 60-70 mm Hg). The Monro-Kellie doctrine dictates that the intracranial vault is a rigid container with fixed volume; increase in one component (hematoma) compromises brain tissue, leading to life-threatening TRANSTENTORIAL UNCAL HERNIATION (ipsilateral fixed dilated pupil from CN III compression, contralateral hemiplegia, and brainstem compression). CUSHING TRIAD (hypertension, bradycardia, irregular respirations) is a late, ominous physiological response to severe brainstem ischemia. Evidence-based medical management of elevated ICP includes: (1) BASIC MEASURES: ELEVATE HEAD OF BED TO 30 DEGREES with neck midline (optimizes jugular venous drainage without reducing MAP); maintain normothermia, sedation, and analgesia; (2) HYPEROSMOLAR THERAPY: INTRAVENOUS 3% HYPERTONIC SALINE (250 mL bolus) or INTRAVENOUS MANNITOL (0.5-1.0 g/kg bolus). Hyperosmolar agents create an osmotic gradient across the intact blood-brain barrier, drawing water out of the cerebral parenchyma into the vascular space, rapidly reducing brain water volume and ICP within 10-15 minutes (hypertonic saline is preferred in hypovolemia/hypotension; mannitol induces osmotic diuresis and must be avoided if SBP < 90 mm Hg); (3) TARGETED HYPERVENTILATION: In imminent uncal herniation (pupillary dilation), BRIEF, TEMPORIZING HYPERVENTILATION (targeting PaCO2 30-35 mm Hg) induces cerebral arteriolar vasoconstriction, lowering cerebral blood volume and acutely decompressing ICP. Crucially: PROLONGED OR SEVERE HYPERVENTILATION (PaCO2 < 30 mm Hg) IS STRICTLY CONTRAINDICATED because severe vasoconstriction induces profound cerebral ischemia and stroke; (4) SURGICAL EVACUATION: Emergent craniotomy/hematoma evacuation is the definitive treatment."
      ],
      [
        "Prophylactic hyperventilation targeting PaCO2 < 25 mm Hg for the first 24 hours to maximize cerebral vasoconstriction",
        "Severe prolonged hyperventilation (PaCO2 < 25 mm Hg) causes profound cerebral vasoconstriction, causing secondary ischemic stroke and worsening mortality; it is strictly contraindicated."
      ],
      [
        "Immediate administration of high-dose intravenous methylprednisolone 30 mg/kg bolus",
        "Corticosteroids are strictly contraindicated in traumatic brain injury (proven by the CRASH trial to increase mortality); steroids treat vasogenic edema from brain tumors, not cytotoxic/traumatic edema."
      ],
      [
        "Rapid intravenous administration of 2 liters of hypotonic 0.45% saline to promote cerebral hydration",
        "Hypotonic fluids (0.45% saline, D5W) decrease serum osmolality, driving water into the injured brain and causing catastrophic brain edema and fatal herniation."
      ],
      [
        "Aggressive blood pressure reduction with intravenous labetalol to lower mean arterial pressure to < 65 mm Hg",
        "Lowering MAP reduces cerebral perfusion pressure (CPP = MAP - ICP), precipitating widespread brainstem ischemia and death; hypertension in Cushing triad is a compensatory reflex to maintain brain perfusion."
      ]
    ],
    "shortestValidSolution": "Severe TBI + epidural hematoma + ICP 32 + pupil dilation (uncal herniation) = Head of bed 30\u00b0 + IV 3% Hypertonic Saline/Mannitol + Temporary PaCO2 30-35 -> Emergent Craniotomy.",
    "necessaryInference": "Manage elevated intracranial pressure in severe TBI: head of bed 30 degrees, hyperosmolar therapy (3% saline or mannitol), and brief hyperventilation (PaCO2 30-35) for imminent herniation; avoid steroids and hypotonic fluids.",
    "strongestDistractor": "Immediate administration of high-dose intravenous methylprednisolone 30 mg/kg bolus",
    "distractorExclusion": "The CRASH trial established that high-dose corticosteroids increase mortality in acute traumatic brain injury and are strictly contraindicated.",
    "citation": "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15. PMID: 27654000.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Severe Traumatic Brain Injury and Elevated ICP Management Protocol.",
      "distractorExclusionNotes": "Competitor Immediate administration of high-dose intravenous  excluded by The CRASH trial established that high-dose corticosteroids i.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0735",
    "exam": "Step 2 CK",
    "subject": "Neurology",
    "system": "General Principles",
    "topic": "Normal Pressure Hydrocephalus Clinical Triad Tap Test and Shunt",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old man is brought to the neurology clinic by his daughter for a 9-month history of progressive walking difficulty, memory loss, and frequent falls. The daughter notes that his gait has become slow and shuffling, and he appears to have 'his feet glued to the floor' when attempting to initiate walking. Over the past 4 months, he has developed increasing forgetfulness, difficulty managing his finances, and apathy. In the past 6 weeks, he has experienced progressive urinary urgency that has culminated in frequent episodes of frank urinary incontinence. Physical examination reveals an alert, oriented man. Mental status testing shows a Mini-Mental State Examination (MMSE) score of 23/30 with psychomotor slowing and impaired recall. Cranial nerves, muscle strength, sensory examination, and cerebellar testing are normal. Gait examination reveals a wide-based, slow, shuffling, short-stepped gait with difficulty turning and marked hesitation upon gait initiation ('magnetic gait'). Brain MRI demonstrates ventriculomegaly with prominent enlargement of the lateral and third ventricles out of proportion to cerebral sulcal enlargement (Evans index > 0.3), without evidence of mass effect or obstructive aqueductal stenosis. Which of the following is the most appropriate next step in confirming the diagnosis and predicting surgical response?",
    "choices": [
      [
        "High-volume diagnostic lumbar puncture (tap test) removing 30 to 50 mL of cerebrospinal fluid, with quantitative gait assessment before and after the procedure",
        "NORMAL PRESSURE HYDROCEPHALUS (NPH) is a potentially reversible neurological disorder characterized by pathological accumulation of cerebrospinal fluid (CSF) causing ventricular dilation with intermittently normal intracranial pressure on single opening pressure measurements. It predominantly affects adults > 65 years of age. Pathophysiology is thought to involve reduced CSF resorption across the arachnoid granulations or decreased compliance of the cerebral venous system, causing progressive dilation of the lateral ventricles that compresses and stretches paraventricular motor fibers of the corona radiata (sacral motor fibers innervating legs and bladder). The classic CLINICAL TRIAD of NPH (remembered by the mnemonic 'WET, WOBBLY, AND WACKY') consists of: (1) GAIT DISTURBANCE ('WOBBLY'): the EARLIEST, MOST PROMINENT, AND MOST TREATMENT-RESPONSIVE FEATURE, characterized by a wide-based, shuffling, short-stepped 'MAGNETIC' GAIT (hesitation initiating steps, inability to lift feet off the ground, difficulty turning); (2) COGNITIVE IMPAIRMENT ('WACKY'): subcortical dementia with psychomotor slowing, apathy, executive dysfunction, and memory retrieval deficits; (3) URINARY INCONTINENCE ('WET'): urinary urgency progressing to frequency and frank urge incontinence due to lack of central inhibition on the detrusor motor center. Brain MRI confirms VENTRICULOMEGALY (Evans index > 0.3) out of proportion to cortical sulcal atrophy. The gold-standard diagnostic and predictive test is the HIGH-VOLUME LUMBAR PUNCTURE (CSF TAP TEST): 30 to 50 mL of CSF is removed via lumbar puncture, with objective, quantitative assessment of gait velocity, step height, and turn time performed immediately BEFORE and 1-2 hours AFTER the procedure. A SIGNIFICANT IMPROVEMENT IN GAIT POST-TAP confirms the diagnosis and predicts a high likelihood of successful long-term clinical response to VENTRICULOPERITONEAL (VP) SHUNT PLACEMENT."
      ],
      [
        "Initiation of oral donepezil and memantine for presumptive Alzheimer dementia",
        "Alzheimer disease begins with early short-term memory loss, whereas gait impairment occurs late; in NPH, gait impairment is the primary and earliest feature, and NPH is treatable with shunting."
      ],
      [
        "Administration of oral levodopa-carbidopa to treat suspected Parkinson disease",
        "Parkinson disease presents with asymmetric rest tremor, cogwheel rigidity, and responds to levodopa; NPH features a magnetic gait without rest tremor or rigidity and does not respond to levodopa."
      ],
      [
        "Emergent bedside ventriculostomy and continuous external ventricular drainage for 30 days",
        "Indwelling ventricular drainage carries high infection (ventriculitis) and hemorrhage risks; diagnostic tap test is performed via simple lumbar puncture."
      ],
      [
        "Initiation of daily oral acetazolamide and high-dose furosemide to medically decrease CSF production",
        "Diuretics have no proven efficacy in reversing NPH; surgical ventriculoperitoneal shunting is the only definitive long-term treatment."
      ]
    ],
    "shortestValidSolution": "Gait apraxia (magnetic gait) + urinary incontinence + dementia + ventriculomegaly on MRI = Normal pressure hydrocephalus (NPH) -> High-volume LP Tap Test (30-50 mL) -> VP shunt.",
    "necessaryInference": "Recognize normal pressure hydrocephalus: triad of magnetic gait, dementia, and urinary incontinence with ventriculomegaly; diagnose and predict shunt responsiveness with high-volume CSF tap test.",
    "strongestDistractor": "Initiation of oral donepezil and memantine for presumptive Alzheimer dementia",
    "distractorExclusion": "Alzheimer disease causes prominent early cortical memory loss without early gait disturbance; NPH is dominated by early magnetic gait dysfunction and is reversible with shunting.",
    "citation": "Marmarou A, Bergsneider M, Klinge P, et al. The value of supplemental tests for the predictment of shunt responsiveness in normal pressure hydrocephalus. Neurosurgery. 2005;57(3 Suppl):S17-S28. PMID: 16160427.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Normal Pressure Hydrocephalus Clinical Triad Tap Test and Shunt.",
      "distractorExclusionNotes": "Competitor Initiation of oral donepezil and memantine for pre excluded by Alzheimer disease causes prominent early cortical memory los.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0736",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Kawasaki Disease Clinical Criteria IVIG and Coronary Aneurysm Prevention",
    "provisionalDifficulty": 5,
    "stem": "A 2-year-old previously healthy boy is brought to the pediatric clinic with a 6-day history of high, unremitting fever (temperatures up to 39.8\u00b0C [103.6\u00b0F]) that has been unresponsive to oral acetaminophen and amoxicillin. His parents report that he has been irritable, lethargic, and refused to walk. Physical examination reveals an irritable, febrile child. Bilateral bulbar conjunctival injection is present without exudate or purulence. Oral examination reveals bright red, dry, cracked, and bleeding lips with prominent erythema of the tongue with enlarged fungiform papillae ('strawberry tongue') and diffuse pharyngeal erythema without exudates. Examination of the neck demonstrates a single, non-tender, firm anterior cervical lymph node measuring 2.2 cm. Dermatological examination reveals a polymorphous, non-vesicular maculopapular rash across his trunk and perineum. His hands and feet display firm, brawny induration and erythema of the palms and soles. Laboratory evaluation demonstrates: WBC 18,600/microL with 74% neutrophils, platelets 480,000/microL, ESR 84 mm/hr, C-reactive protein 68 mg/L, serum ALT 86 U/L, and sterile pyuria (15 WBC/hpf) on clean-catch urinalysis. Which of the following is the most appropriate management plan to prevent coronary artery complications?",
    "choices": [
      [
        "Immediate initiation of high-dose intravenous immune globulin (IVIG 2 g/kg as a single infusion) combined with oral high-dose aspirin, followed by baseline echocardiography",
        "KAWASAKI DISEASE (mucocutaneous lymph node syndrome) is an acute, self-limited, medium-vessel necrotizing vasculitis that predominantly affects children < 5 years of age (highest in Asian ethnicity). It selectively targets the CORONARY ARTERIES. Classical diagnosis requires: FEVER PERSISTING FOR AT LEAST 5 DAYS PLUS AT LEAST 4 OF THE FOLLOWING 5 CLINICAL CRITERIA (mnemonic 'CRASH and Burn'): (1) C: Conjunctivitis (bilateral, bulbar, non-exudative); (2) R: Rash (polymorphous, maculopapular, non-vesicular, prominent perineal desquamation); (3) A: Adenopathy (cervical, unilateral, >= 1.5 cm); (4) S: Strawberry tongue (and cracked, erythematous lips, oropharyngeal erythema); (5) H: Hands and feet changes (acute erythema/edema of palms/soles, and late periungual desquamation 2-3 weeks later). Laboratory features: marked leukocytosis, thrombocytosis (often peaking in 2nd-3rd week), elevated ESR/CRP, transaminitis, and sterile pyuria. The most devastating complication is CORONARY ARTERY ANEURYSMS, which occur in up to 25% of untreated children and can lead to thrombosis, myocardial infarction, and sudden death. Treatment must be initiated within the FIRST 10 DAYS OF FEVER (ideally <= 7 days) to reduce coronary aneurysm risk to < 3-5%: (1) HIGH-DOSE INTRAVENOUS IMMUNE GLOBULIN (IVIG 2 g/kg as a single 10-12 hour infusion): exerts anti-inflammatory and immunomodulatory effects; (2) HIGH-DOSE ORAL ASPIRIN (80-100 mg/kg/day divided QID): provides anti-inflammatory action until the child is afebrile for 48-72 hours, then switched to LOW-DOSE ASPIRIN (3-5 mg/kg/day) for 6-8 weeks for antiplatelet activity; (3) BASELINE ECHOCARDIOGRAPHY: to evaluate coronary artery dimensions (Z-scores) at diagnosis, 2 weeks, and 6-8 weeks. (Kawasaki disease is one of the rare exceptions where aspirin is indicated in children, despite Reye syndrome risk)."
      ],
      [
        "Oral amoxicillin-clavulanate for 10 days and reassurance that viral exanthems resolve spontaneously",
        "Kawasaki disease is a systemic vasculitis, not a bacterial infection; withholding IVIG results in a 25% rate of coronary artery aneurysms and potential myocardial infarction."
      ],
      [
        "High-dose intravenous methylprednisolone monotherapy without IVIG",
        "Corticosteroid monotherapy was historically associated with increased coronary aneurysm rupture; IVIG remains the mandatory first-line therapy (steroids are used as adjuncts in high-risk/refractory cases)."
      ],
      [
        "Immediate therapeutic anticoagulation with intravenous heparin and oral warfarin",
        "Anticoagulation is indicated only if large giant coronary aneurysms (> 8 mm) or thrombosis have already formed; initial therapy is IVIG and aspirin."
      ],
      [
        "Administration of intramuscular benzathine penicillin G for suspected scarlet fever",
        "Scarlet fever features a sandpaper rash, circumoral pallor, and positive rapid Strep test, responding to penicillin; it lacks conjunctival injection, extremity edema, and coronary artery involvement."
      ]
    ],
    "shortestValidSolution": "Fever > 5 days + conjunctivitis + strawberry tongue + cervical lymph node + palm/sole erythema = Kawasaki disease -> High-dose IVIG (2 g/kg) + Aspirin + Echocardiogram.",
    "necessaryInference": "Recognize and treat Kawasaki disease: fever >= 5 days plus 4/5 clinical criteria requires immediate IVIG and aspirin within 10 days to prevent coronary artery aneurysms.",
    "strongestDistractor": "Oral amoxicillin-clavulanate for 10 days and reassurance that viral exanthems resolve spontaneously",
    "distractorExclusion": "Kawasaki disease is a non-infectious necrotizing vasculitis; failing to treat with IVIG and aspirin exposes the child to a 25% risk of coronary artery aneurysms and sudden death.",
    "citation": "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease: A Scientific Statement for Health Professionals From the American Heart Association. Circulation. 2017;135(17):e927-e999. PMID: 28356445.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Kawasaki Disease Clinical Criteria IVIG and Coronary Aneurysm Prevention.",
      "distractorExclusionNotes": "Competitor Oral amoxicillin-clavulanate for 10 days and reass excluded by Kawasaki disease is a non-infectious necrotizing vasculitis;.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0737",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Rhabdomyolysis Myoglobinuria and Aggressive Fluid Resuscitation",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old marathon runner is found collapsed near the finish line of a race on a hot, humid summer day (ambient temperature 34\u00b0C [93.2\u00b0F]). In the emergency department, he is confused, dizzy, and reports severe, diffuse muscular aching and cramping in his thighs and calves. Physical examination reveals an exhausted, diaphoretic man with exquisite tenderness and induration to palpation over both quadriceps and gastrocnemius muscles. Vital signs: blood pressure 98/62 mm Hg, heart rate 116/min, respirations 22/min, and core temperature 38.6\u00b0C (101.5\u00b0F). Over the first 2 hours, he voids 40 mL of dark, reddish-brown, tea-colored urine. Urinalysis demonstrates: 3+ blood on dipstick, but microscopic examination reveals only 0 to 1 red blood cells per high-power field (marked dipstick-microscopy discrepancy). Laboratory evaluation shows: serum creatine kinase (CK) 34,000 U/L (normal 30-200 U/L), serum potassium 5.6 mEq/L, BUN 38 mg/dL, and serum creatinine 2.4 mg/dL. Which of the following is the most critical immediate intervention to prevent acute kidney injury?",
    "choices": [
      [
        "Aggressive early intravenous fluid resuscitation with isotonic crystalloid solution (normal saline or lactated Ringer) targeting a urine output of 200 to 300 mL/hr",
        "RHABDOMYOLYSIS is a syndrome of skeletal muscle necrosis and dissolution triggered by prolonged exertion, crush injury, heat stroke, cocaine/alcohol toxicity, statins, or prolonged immobilization. Damaged myocytes release intracellular contents into the systemic circulation, including CREATINE KINASE (CK, often > 10,000-50,000 U/L), POTASSIUM (hyperkalemia), PHOSPHATE (hyperphosphatemia), URIC ACID, and MYOGLOBIN. Pathophysiology of ACUTE KIDNEY INJURY (AKI): Circulating free myoglobin is filtered by glomeruli. In the setting of hypovolemia and acidic tubular fluid: (1) Water reabsorption in the renal tubules concentrates myoglobin, which precipitates with Tamm-Horsfall mucoprotein to form OBSTRUCTIVE INTRALUMINAL TUBULAR CASTS; (2) The ferrihemate moiety of myoglobin generates toxic hydroxyl free radicals, producing DIRECT CYTOTOXIC ACUTE TUBULAR NECROSIS; (3) Intense renal vasoconstriction occurs due to scavenging of endothelial nitric oxide. The classic diagnostic hallmark is TEA-COLORED URINE with a POSITIVE DIPSTICK FOR BLOOD (orthotolidine detects the heme moiety of both hemoglobin and myoglobin) BUT ZERO TO MINIMAL RBCS ON MICROSCOPY. Management: The single most effective and critical intervention is AGGRESSIVE EARLY INTRAVENOUS ISOTONIC CRYSTALLOID RESUSCITATION (normal saline or lactated Ringer solution at 400-1,000 mL/hr initially), titrated to maintain a HIGH URINE OUTPUT OF 200 TO 300 ML/HR. Vigorous fluid resuscitation restores effective circulating volume, increases renal tubular flow, dilutes luminal myoglobin, washes out obstructing casts, and flushes nephrotoxic heme pigments before tubular necrosis occurs. Urine alkalinization (sodium bicarbonate) and loop diuretics have no proven superiority over vigorous isotonic crystalloid hydration."
      ],
      [
        "Administration of intravenous loop diuretics (furosemide 80 mg bolus) to force diuresis prior to fluid resuscitation",
        "Administering loop diuretics in hypovolemic rhabdomyolysis worsens intravascular volume depletion, acidifies tubular urine, and accelerates myoglobin precipitation; fluids must be given first."
      ],
      [
        "Immediate infusion of intravenous 5% sodium bicarbonate monotherapy targeting urine pH > 8.5 without volume loading",
        "Fluid expansion is the primary driver of kidney protection; bicarbonate monotherapy without volume loading fails to flush tubules and can induce hypocalcemia in rhabdomyolysis."
      ],
      [
        "Urgent placement of a double-lumen hemodialysis catheter for prophylactic myoglobin clearance",
        "Myoglobin has a molecular weight of 17 kDa and is poorly cleared by standard hemodialysis; dialysis is indicated only for conventional refractory indications (refractory hyperkalemia, severe acidosis, fluid overload)."
      ],
      [
        "Oral prednisone 60 mg daily for autoimmune inflammatory myopathy",
        "This patient has exertional heat-related rhabdomyolysis, not autoimmune polymyositis; corticosteroids provide no benefit and increase infection risk."
      ]
    ],
    "shortestValidSolution": "Exertional heat collapse + tea-colored urine + dipstick blood positive with 0 RBCs + CK 34k = Rhabdomyolysis -> Aggressive early IV isotonic fluids (target urine output 200-300 mL/hr).",
    "necessaryInference": "Formulate rhabdomyolysis therapy: early aggressive IV isotonic crystalloid fluid resuscitation targeting 200-300 mL/hr urine output prevents myoglobin cast nephropathy and ATN.",
    "strongestDistractor": "Administration of intravenous loop diuretics (furosemide 80 mg bolus) to force diuresis prior to fluid resuscitation",
    "distractorExclusion": "Diuretics worsen volume depletion and tubular cast formation in hypovolemic rhabdomyolysis; aggressive fluid loading is the primary protective therapy.",
    "citation": "Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009;361(1):62-72. PMID: 19571284.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Rhabdomyolysis Myoglobinuria and Aggressive Fluid Resuscitation.",
      "distractorExclusionNotes": "Competitor Administration of intravenous loop diuretics (furo excluded by Diuretics worsen volume depletion and tubular cast formation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0738",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Shoulder Dystocia ALARMER Protocol McRoberts Maneuver and Suprapubic Pressure",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old multigravida (gravida 3, para 2) with gestational diabetes mellitus delivers at 39 weeks of gestation. Following a spontaneous vaginal delivery of the fetal head, the fetal chin retracts tightly against the maternal perineum ('turtle sign'). Gentle downward axial maternal traction applied to the fetal head fails to effect delivery of the anterior shoulder, which has become mechanically impacted behind the maternal pubic symphysis. The obstetrical resident notes that the anterior shoulder does not emerge with maternal expulsive efforts. The nursing assistant prepares to climb onto a stool to apply vigorous downward fundal pressure on the uterine fundus. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Instruct the assistant to immediately cease fundal pressure, call for emergency obstetrical assistance, perform the McRoberts maneuver (hyperflexion of maternal hips onto the abdomen) combined with simultaneous suprapubic pressure",
        "SHOULDER DYSTOCIA is an unpredictable obstetrical emergency defined as failure of the fetal shoulders to deliver with gentle downward traction following delivery of the fetal head, occurring when the fetal anterior shoulder impacts against the maternal pubic symphysis (or posterior shoulder against the sacral promontory). Risk factors include maternal diabetes, fetal macrosomia (> 4,000-4,500 g), maternal obesity, and prolonged second stage of labor. The clinical hallmark is the 'TURTLE SIGN' (retraction of the delivered fetal head against the perineum). Impaction of the shoulder compresses the fetal umbilical cord and impairs fetal respiration; irreversible asphyxial brain injury or fetal death can occur within 5-7 minutes. Management requires strict adherence to the ALARMER / HELPERR emergency protocol: (1) CALL FOR HELP (anesthesia, neonatology, senior obstetrician); (2) STRICTLY FORBID FUNDAL PRESSURE: FUNDAL PRESSURE IS STRICTLY CONTRAINDICATED in shoulder dystocia because applying downward pressure on the fundus further wedges and impacts the anterior shoulder behind the pubic symphysis, increases rates of fatal UTERINE RUPTURE, and dramatically increases severe BRACHIAL PLEXUS INJURY (Erb-Duchenne palsy, avulsion of C5-C6 nerve roots); (3) FIRST-LINE NON-INVASIVE MANEUVERS: (a) MCROBERTS MANEUVER: Hyperflexion of the maternal thighs sharply onto the maternal abdomen. This flattens the lumbar lordosis, tilts the pelvis cephalad, and rotates the pubic symphysis anteriorly, widening the anteroposterior pelvic outlet; (b) SUPRAPUBIC PRESSURE: An assistant applies firm, downward and lateral pressure immediately superior to the pubic symphysis over the posterior aspect of the anterior fetal shoulder, dislodging the impacted shoulder under the symphysis; (4) SECOND-LINE INTERNAL MANEUVERS: Rubin II and Woods screw maneuvers (rotational techniques), delivery of the posterior arm (Barnum maneuver), or episiotomy (to facilitate hand entry); (5) LAST RESORT: Gaskin (all-fours) maneuver, intentional clavicular fracture, or Zavanelli maneuver (cephalic replacement followed by emergent cesarean section)."
      ],
      [
        "Allow the assistant to apply firm, steady downward fundal pressure while applying forceful downward traction on the fetal head",
        "Fundal pressure is strictly contraindicated in shoulder dystocia because it wedges the shoulder tighter against the symphysis, causes uterine rupture, and avulses the brachial plexus."
      ],
      [
        "Perform an immediate midline episiotomy extending through the anal sphincter to release the impacted bony shoulder",
        "Shoulder dystocia is a BONY impaction (fetal shoulder on pubic symphysis), not a soft-tissue obstruction; episiotomy does not release the impacted bone and causes maternal sphincter trauma."
      ],
      [
        "Immediately perform the Zavanelli maneuver by pushing the fetal head back into the pelvis and transferring to the operating room",
        "The Zavanelli maneuver is a desperate last-resort maneuver after all external and internal maneuvers (McRoberts, suprapubic, posterior arm delivery) have failed."
      ],
      [
        "Apply high-vacuum suction cup extraction to the fetal head to forcefully overcome the impacted shoulder",
        "Vacuum extraction on an impacted shoulder is strictly contraindicated and leads to severe intracranial hemorrhage, skull fractures, and cervical spinal cord transection."
      ]
    ],
    "shortestValidSolution": "Delivery of head + turtle sign + anterior shoulder impacted = Shoulder dystocia -> STRICTLY FORBID fundal pressure -> McRoberts maneuver (hyperflex maternal hips) + Suprapubic pressure.",
    "necessaryInference": "Manage shoulder dystocia: immediately call for help, forbid fundal pressure, and perform the McRoberts maneuver with simultaneous suprapubic pressure.",
    "strongestDistractor": "Allow the assistant to apply firm, steady downward fundal pressure while applying forceful downward traction on the fetal head",
    "distractorExclusion": "Fundal pressure severely worsens shoulder impaction, causes uterine rupture, and causes permanent brachial plexus avulsion.",
    "citation": "American College of Obstetricians and Gynecologists. Practice Bulletin No. 178: Shoulder Dystocia. Obstet Gynecol. 2017;129(5):e123-e134. PMID: 28438429.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Shoulder Dystocia ALARMER Protocol McRoberts Maneuver and Suprapubic Pressure.",
      "distractorExclusionNotes": "Competitor Allow the assistant to apply firm, steady downward excluded by Fundal pressure severely worsens shoulder impaction, causes .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0739",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Acute Pericarditis Diagnostic Criteria NSAIDs and Colchicine",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old previously healthy man presents to the emergency department with a 2-day history of sharp, substernal chest pain. He states that the pain is exacerbated by deep inspiration (pleuritic), coughing, and swallowing, and is agonizing when he lies supine in bed. His symptoms improve markedly when he sits upright and leans forward. One week ago, he had a mild upper respiratory illness with low-grade fever and rhinorrhea. On physical examination, he appears in moderate distress while supine. Vital signs: temperature 37.9\u00b0C (100.2\u00b0F), blood pressure 124/76 mm Hg, heart rate 92/min, and respirations 18/min. Cardiovascular examination reveals a high-pitched, scratchy, superficial triphasic sound heard best along the left lower sternal border with the patient sitting forward during end-expiration (pericardial friction rub). There is no jugular venous distension, pulsus paradoxus is 6 mm Hg (normal < 10 mm Hg), and lung fields are clear. A 12-lead ECG demonstrates widespread, diffuse concave-upward ST-segment elevations in leads I, II, aVF, and V2 through V6, with prominent PR-segment depressions in the limb and precordial leads, and reciprocal PR-segment elevation with ST-depression in lead aVR. Serum troponin I is normal. Which of the following is the most appropriate first-line pharmacotherapy for this patient?",
    "choices": [
      [
        "High-dose oral nonsteroidal anti-inflammatory drugs (NSAIDs, such as ibuprofen or indomethacin) combined with oral colchicine for 3 months",
        "ACUTE PERICARDITIS is an acute inflammatory syndrome of the pericardial sac, most commonly idiopathic or viral (Coxsackievirus, echovirus, adenovirus, EBV, SARS-CoV-2) in etiology. The 2015 European Society of Cardiology (ESC) guidelines require AT LEAST 2 OF THE FOLLOWING 4 DIAGNOSTIC CRITERIA: (1) Characteristic chest pain (sharp, pleuritic, worse supine, relieved by sitting upright and leaning forward); (2) Pericardial friction rub (scratchy, superficial sound generated by inflamed visceral and parietal pericardial layers rubbing together); (3) Typical ECG changes: Stage 1 features DIFFUSE, CONCAVE-UPWARD ST-SEGMENT ELEVATIONS across multiple vascular territories (sparing only aVR and V1) combined with PR-SEGMENT DEPRESSION (PR depression is the earliest and most specific ECG sign of atrial epicardial inflammation), and RECIPROCAL ST DEPRESSION AND PR ELEVATION IN LEAD AVR; (4) New or worsening pericardial effusion on echocardiography. The FIRST-LINE THERAPY FOR ACUTE VIRAL OR IDIOPATHIC PERICARDITIS is: HIGH-DOSE NSAIDS (such as IBUPROFEN 600-800 mg TID or INDOMETHACIN 50 mg TID) tapered over 2 to 4 weeks PLUS ADJUNCTIVE ORAL COLCHICINE (0.5-0.6 mg daily or BID for 3 months). Colchicine inhibits tubulin polymerization and neutrophil chemotaxis; large randomized trials (COPE and ICAP) proved that ADDING COLCHICINE TO NSAIDS DOUBLES REMISSION RATES AND REDUCES RECURRENT PERICARDITIS BY 50%. Systemic corticosteroids (prednisone) are strictly SECOND-LINE agents reserved ONLY for patients with contraindications/failure of NSAIDs, autoimmune pericarditis, or renal failure, because steroids significantly INCREASE THE RISK OF RECURRENT PERICARDITIS."
      ],
      [
        "High-dose systemic oral prednisone monotherapy for 6 months as first-line therapy",
        "Systemic corticosteroids are second-line agents associated with significantly higher rates of recurrent pericarditis; NSAIDs plus colchicine are the mandatory first-line regimen."
      ],
      [
        "Immediate transfer to the cardiac catheterization laboratory for primary percutaneous coronary intervention",
        "The patient has acute pericarditis with diffuse non-vascular ST elevations and PR depression; this is not an acute STEMI (which features localized territorial ST elevations with convex morphology and reciprocal ST depressions)."
      ],
      [
        "Emergent bedside subxiphoid pericardiocentesis with drain placement",
        "Pericardiocentesis is indicated for cardiac tamponade (hypotension, JVD, pulsus paradoxus > 10 mm Hg) or large purulent effusions; this patient has no tamponade or hemodynamically significant effusion."
      ],
      [
        "Oral amoxicillin-clavulanate and low-dose aspirin monotherapy for 7 days",
        "Acute pericarditis is non-bacterial (viral/idiopathic); amoxicillin is ineffective, and low-dose aspirin does not provide the anti-inflammatory dosing required for pericarditis."
      ]
    ],
    "shortestValidSolution": "Sharp pleuritic chest pain relieved by leaning forward + friction rub + diffuse concave ST elevation with PR depression = Acute pericarditis -> High-dose NSAIDs (Ibuprofen) + Colchicine for 3 months.",
    "necessaryInference": "Formulate acute pericarditis therapy: high-dose NSAIDs (ibuprofen or indomethacin) plus oral colchicine for 3 months is first-line; systemic steroids are second-line and increase recurrence risk.",
    "strongestDistractor": "High-dose systemic oral prednisone monotherapy for 6 months as first-line therapy",
    "distractorExclusion": "Systemic corticosteroids are second-line because they strongly promote recurrent pericarditis; first-line therapy is high-dose NSAIDs plus colchicine.",
    "citation": "Adler Y, Charron P, Imazio M, et al. 2015 ESC Guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015;36(42):2921-2964. PMID: 26320112.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Pericarditis Diagnostic Criteria NSAIDs and Colchicine.",
      "distractorExclusionNotes": "Competitor High-dose systemic oral prednisone monotherapy for excluded by Systemic corticosteroids are second-line because they strong.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0740",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "Behavioral Health",
    "topic": "Bipolar I Acute Mania Pharmacotherapy and Antidepressant Avoidance",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old graduate student is brought to the psychiatric emergency service by his roommates due to increasingly bizarre and disruptive behavior over the past 5 days. The roommates report that the patient has slept less than 2 hours per night, yet appears excessively energetic. He has emptied his savings account to invest in an online cryptocurrency scheme and spent $8,000 on luxury electronics. During the evaluation, the patient is pacing around the consultation room, talking at an exceptionally rapid and loud rate with pressured speech that is difficult to interrupt. He describes racing thoughts and proclaims that he has deciphered an ancient mathematical algorithm that will grant him unlimited wealth and presidential advisory status. He has no past medical history and urine toxicology screen is negative for amphetamines, cocaine, cannabis, and opioids. Physical examination and vital signs are completely normal. Which of the following is the most appropriate initial pharmacological regimen for this patient's acute manic episode?",
    "choices": [
      [
        "A second-generation atypical antipsychotic (such as quetiapine, olanzapine, or risperidone) combined with a mood stabilizer (lithium or valproate), with strict avoidance of antidepressant monotherapy",
        "BIPOLAR I DISORDER is defined by the occurrence of AT LEAST ONE MANIC EPISODE in a patient's lifetime. A MANIC EPISODE is characterized by a distinct period of abnormally and persistently elevated, expansive, or irritable mood and abnormally and persistently increased goal-directed activity or energy, lasting AT LEAST 1 WEEK (or of any duration if hospitalization is required). Diagnostic criteria require >= 3 symptoms (or >= 4 if mood is only irritable) from the 'DIG FAST' mnemonic: (1) D: Distractibility, (2) I: Impulsivity / Indiscretion (excessive involvement in pleasurable activities with high potential for painful consequences, e.g., shopping sprees, risky investments), (3) G: Grandiosity or inflated self-esteem (grandiose delusions), (4) F: Flight of ideas / racing thoughts, (5) A: Activity increase (goal-directed or psychomotor agitation), (6) S: Sleep deficit (decreased NEED for sleep, waking refreshed after 2 hours), (7) T: Talkativeness / pressured speech. Treatment of ACUTE SEVERE MANIA requires prompt, aggressive pharmacotherapy: (1) FIRST-LINE REGIMEN FOR SEVERE MANIA: COMBINATION THERAPY with a MOOD STABILIZER (LITHIUM or DIVALPROEX SODIUM / VALPROATE) PLUS A SECOND-GENERATION ATYPICAL ANTIPSYCHOTIC (QUETIAPINE, OLANZAPINE, RISPERIDONE, or ARIPIPRAZOLE). Monotherapy with an antipsychotic or mood stabilizer is acceptable for mild-to-moderate mania, but combination therapy achieves significantly faster and superior control of severe agitation, psychosis, and grandiosity. (2) CRITICAL CONTRAINDICATION: ANTIDEPRESSANT MONOTHERAPY (SSRIs, SNRIs, TCAs) IS STRICTLY CONTRAINDICATED in bipolar disorder because antidepressants can TRIGGER PRECIPITOUS SWITCHING INTO MANIA, ACCELERATE CYCLE ACCELERATION, OR INDUCE MIXED STATES."
      ],
      [
        "Initiation of high-dose oral fluoxetine monotherapy to stabilize his underlying affective dysregulation",
        "Antidepressant monotherapy (fluoxetine) is strictly contraindicated in bipolar disorder because it precipitates acute mania, increases psychosis, and induces rapid cycling."
      ],
      [
        "Oral buspirone monotherapy combined with weekly psychodynamic psychotherapy",
        "Buspirone treats generalized anxiety disorder; it has zero efficacy in acute mania and psychodynamic therapy is ineffective during an acute psychotic manic crisis."
      ],
      [
        "Initiation of low-dose oral methylphenidate to improve concentration and reduce distractibility",
        "Stimulants (methylphenidate, amphetamines) increase synaptic dopamine and norepinephrine, which severely exacerbates mania, agitation, and psychosis."
      ],
      [
        "Administration of oral propranolol and outpatient cognitive behavioral therapy",
        "Propranolol treats akathisia or performance anxiety; acute severe mania requires inpatient hospitalization and mood-stabilizing antipsychotic pharmacotherapy."
      ]
    ],
    "shortestValidSolution": "Decreased sleep + pressured speech + grandiose delusion + reckless spending = Bipolar I acute mania -> Mood stabilizer (Lithium/Valproate) + Second-generation Antipsychotic (Quetiapine/Olanzapine) + NO antidepressants.",
    "necessaryInference": "Select acute mania pharmacotherapy: combination of a mood stabilizer (lithium or valproate) and an atypical antipsychotic (quetiapine, olanzapine) is first-line; antidepressants are strictly contraindicated.",
    "strongestDistractor": "Initiation of high-dose oral fluoxetine monotherapy to stabilize his underlying affective dysregulation",
    "distractorExclusion": "Antidepressants can destabilize bipolar disorder, triggering switch to acute mania or rapid cycling; they must never be used as monotherapy in bipolar illness.",
    "citation": "Goodwin GM, Haddad PM, Ferrier IN, et al. Evidence-based guidelines for treating bipolar disorder: Revised third edition recommendations from the British Association for Psychopharmacology. J Psychopharmacol. 2016;30(6):495-553. PMID: 26976735.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Bipolar I Acute Mania Pharmacotherapy and Antidepressant Avoidance.",
      "distractorExclusionNotes": "Competitor Initiation of high-dose oral fluoxetine monotherap excluded by Antidepressants can destabilize bipolar disorder, triggering.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0741",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Renal",
    "topic": "Testicular Torsion Clinical Emergency and Bilateral Orchidopexy",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old boy is brought to the emergency department with sudden-onset, severe left scrotal pain that began abruptly 2 hours ago while sleeping. The pain is severe, constant, and radiates to his left lower abdomen and groin, accompanied by nausea and two episodes of non-bilious emesis. He has no fever, dysuria, urethral discharge, or history of trauma. Physical examination reveals an exquisitely tender, swollen, erythematous left hemiscrotum. The left testis is retracted, high-riding in the scrotum, and oriented horizontally rather than in its normal vertical axis. Lightly stroking the skin of the inner left thigh elicits no ipsilateral testicular elevation (absent left cremasteric reflex), whereas the right cremasteric reflex is fully intact. Gentle manual elevation of the left scrotum produces no relief and worsens the patient's pain (negative Prehn sign). The emergency department is informed that the sonographer on call will take 75 minutes to arrive to perform a scrotal Doppler ultrasound. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate emergency surgical scrotal exploration with manual detorsion and bilateral orchidopexy, without waiting for confirmatory Doppler ultrasonography",
        "TESTICULAR TORSION is a surgical emergency caused by twisting of the spermatic cord, which leads to venous occlusion, acute testicular engorgement, arterial compromise, and irreversible testicular ischemia and necrosis. It exhibits a bimodal incidence (neonates and post-pubertal adolescents, peak age 12-18). The anatomical predisposing defect is the 'BELL-CLAPPER DEFORMITY' (present in up to 12% of males), where an abnormally high attachment of the tunica vaginalis surrounds the entire testis, epididymis, and distal spermatic cord, allowing the testis to rotate freely within the tunica vaginalis cavity like a bell clapper. Clinical features: SUDDEN-ONSET SEVERE UNILATERAL SCROTAL PAIN, nausea/vomiting, a HIGH-RIDING TESTIS WITH HORIZONTAL LIE, and an ABSENT CREMASTERIC REFLEX (the single most sensitive physical sign, sensitivity > 99%). Elevation of the scrotum fails to relieve pain (negative Prehn sign, distinguishing it from epididymitis, where elevation relieves pain). Testicular viability depends strictly on ISCHEMIA TIME: salvage rates are > 90% if detorsion occurs within 6 HOURS, dropping to < 50% at 12 hours, and < 10% after 24 hours. Crucially: If the clinical suspicion is high (sudden pain, high horizontal testis, absent cremasteric reflex), EMERGENCY SURGICAL EXPLORATION MUST NEVER BE DELAYED TO OBTAIN IMAGING. The patient must be transferred directly to the operating room for: (1) Bilateral scrotal exploration, (2) Detorsion and assessment of viability, and (3) BILATERAL ORCHIDOPEXY (fixation of both the affected and contralateral testes to the dartos fascia, because the bell-clapper deformity is almost always BILATERAL; orchidopexy prevents future torsion of the contralateral solitary testis). Doppler ultrasound is indicated ONLY if the diagnosis is ambiguous or presentation is equivocal."
      ],
      [
        "Wait for the ultrasound technician to arrive to confirm absent Doppler blood flow before obtaining urological consultation",
        "Waiting 75 minutes for ultrasound when symptom onset is already 2 hours ago risks exceeding the critical 6-hour viability window, resulting in permanent testicular necrosis and orchiectomy."
      ],
      [
        "Prescribe oral ciprofloxacin and nonsteroidal anti-inflammatory drugs for presumptive acute epididymitis and re-evaluate in clinic in 48 hours",
        "Epididymitis is gradual in onset, presents with dysuria/fever, intact cremasteric reflex, and positive Prehn sign; treating this patient as epididymitis would result in infarction of the testis."
      ],
      [
        "Perform manual detorsion rotating the left testis from lateral to medial, and discharge if pain improves",
        "Manual detorsion ('open the book') is performed by rotating from MEDIAL TO LATERAL (like opening a book), not lateral to medial; even if successful, immediate surgical exploration and bilateral orchidopexy remain mandatory."
      ],
      [
        "Obtain immediate clean-catch urinalysis and perform a nuclear technetium-99m testicular scan",
        "Urinalysis is normal in torsion; nuclear scans take hours to set up and delay emergency surgical salvage."
      ]
    ],
    "shortestValidSolution": "Sudden severe scrotal pain + high-riding horizontal testis + absent cremasteric reflex = Testicular torsion -> Emergent surgical exploration and BILATERAL orchidopexy (do NOT wait for ultrasound).",
    "necessaryInference": "Manage testicular torsion: high clinical suspicion warrants immediate surgical exploration and bilateral orchidopexy within the 6-hour window; never delay surgery for imaging.",
    "strongestDistractor": "Wait for the ultrasound technician to arrive to confirm absent Doppler blood flow before obtaining urological consultation",
    "distractorExclusion": "Delaying surgery to wait for an ultrasound technician in clear-cut torsion leads to irreversible ischemic necrosis; surgical exploration is immediate.",
    "citation": "Sharp VJ, Kieran K, Arlen AM. Testicular torsion: diagnosis, evaluation, and management. Am Fam Physician. 2013;88(12):835-840. PMID: 24364548.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Testicular Torsion Clinical Emergency and Bilateral Orchidopexy.",
      "distractorExclusionNotes": "Competitor Wait for the ultrasound technician to arrive to co excluded by Delaying surgery to wait for an ultrasound technician in cle.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0742",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Early Lyme Disease Erythema Migrans Clinical Diagnosis and Doxycycline",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old woman presents to her primary care physician in Connecticut in early July with a 4-day history of an expanding skin rash on her right posterior thigh. She reports mild fatigue, low-grade fever, malaise, and generalized myalgias. She recalls walking through tall brush and wooded areas during a hiking trip 10 days ago, though she does not recall seeing or removing a tick. Physical examination reveals an alert woman. Vital signs: temperature 37.8\u00b0C (100.0\u00b0F), blood pressure 118/72 mm Hg, and heart rate 74/min. Examination of the right posterior thigh demonstrates a single, non-pruritic, non-tender, expanding annular erythematous plaque measuring 9 cm in diameter with a distinct central red area, a clear intervening ring of normal skin, and a bright red outer border ('bull's-eye' appearance). Neurological examination is normal with no facial nerve weakness or meningismus. Cardiovascular examination is normal without murmurs or irregular rhythm. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiation of oral doxycycline 100 mg twice daily for 10 to 14 days without obtaining serological testing",
        "LYME DISEASE is a tick-borne spirochetal zoonosis caused by BORRELIA BURGDORFERI, transmitted by the bite of the blacklegged deer tick (IXODES SCAPULARIS in the Northeast/Midwest US, requiring >= 36-48 hours of tick attachment). Clinical stages: (1) EARLY LOCALIZED DISEASE (Stage 1, days to 1 month post-bite): Characterized by ERYTHEMA MIGRANS (EM), occurring in 70-80% of patients. EM is an expanding erythematous macular or annular lesion (diameter >= 5 cm) that typically develops a central clearing ('target' or 'bull's-eye' lesion), accompanied by viral-like systemic symptoms (fatigue, headache, myalgias, arthralgias). Crucially: ERYTHEMA MIGRANS IS A STRICTLY CLINICAL DIAGNOSIS. SEROLOGICAL TESTING (ELISA followed by Western blot) MUST NOT BE PERFORMED IN EARLY LOCALIZED LYME DISEASE. Because the humoral immune response takes 2 to 6 weeks to develop detectable antibodies, serology has a false-negative rate of > 60-70% during the erythema migrans stage. Negative serology during stage 1 falsely reassures clinicians and delays necessary therapy. Therefore, any patient in an endemic area presenting with classic erythema migrans should be treated empirically without testing. First-line therapy is ORAL DOXYCYCLINE (100 mg twice daily for 10-14 days; amoxicillin or cefuroxime axetil are alternatives for pregnant women or children < 8 years). (2) EARLY DISSEMINATED (Stage 2): Multiple secondary EM lesions, bilateral cranial nerve VII (facial) palsy, meningitis, or AV nodal heart block (treated with IV ceftriaxone for high-grade block). (3) LATE LYME (Stage 3, months to years): Migratory asymmetric oligoarthritis (most commonly the knee)."
      ],
      [
        "Order serum enzyme-linked immunosorbent assay (ELISA) and withhold antibiotics until Western blot results return",
        "Serological testing in early localized Lyme disease has a 60-70% false-negative rate because antibodies take weeks to develop; testing is contraindicated and delays curative therapy."
      ],
      [
        "Perform a punch biopsy of the advancing erythematous border for Borrelia culture on Barbour-Stoenner-Kelly medium",
        "Borrelia culture is technically difficult, slow (weeks), insensitive, and unnecessary for classic clinical erythema migrans."
      ],
      [
        "Initiate intravenous ceftriaxone 2 g daily for 28 days via outpatient peripherally inserted central catheter",
        "Intravenous ceftriaxone is reserved for severe neurological Lyme (meningitis, encephalopathy) or high-grade AV block; early localized EM is treated with oral doxycycline."
      ],
      [
        "Administer a single prophylactic dose of oral doxycycline 200 mg and reassure the patient",
        "A single 200-mg dose of doxycycline is used for POST-EXPOSURE PROPHYLAXIS within 72 hours of removing an attached deer tick (> 36 hours), not for active established erythema migrans, which requires a full 10-14 day course."
      ]
    ],
    "shortestValidSolution": "Connecticut hiking + expanding 9-cm target rash ('bull's-eye') = Erythema migrans (Early Lyme disease) -> Clinical diagnosis (NO serology) -> Oral Doxycycline 10-14 days.",
    "necessaryInference": "Diagnose and manage early Lyme disease: erythema migrans is a clinical diagnosis; serology has a high false-negative rate in early infection and should not be ordered; treat with oral doxycycline.",
    "strongestDistractor": "Order serum enzyme-linked immunosorbent assay (ELISA) and withhold antibiotics until Western blot results return",
    "distractorExclusion": "Serology in stage 1 Lyme disease is negative in > 60% of patients; waiting for antibodies delays therapy and allows dissemination.",
    "citation": "Lantos PM, Rumbaugh J, Bockenstedt LK, et al. Clinical Practice Guidelines by the Infectious Diseases Society of America (IDSA), American Academy of Neurology (AAN), and American College of Rheumatology (ACR): 2020 Guidelines for the Prevention, Diagnosis and Treatment of Lyme Disease. Clin Infect Dis. 2021;72(1):e1-e48. PMID: 33251528.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Early Lyme Disease Erythema Migrans Clinical Diagnosis and Doxycycline.",
      "distractorExclusionNotes": "Competitor Order serum enzyme-linked immunosorbent assay (ELI excluded by Serology in stage 1 Lyme disease is negative in > 60% of pat.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0743",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Croup Laryngotracheobronchitis Dexamethasone and Racemic Epinephrine",
    "provisionalDifficulty": 4,
    "stem": "An 18-month-old boy is brought to the emergency department at 2:00 AM by his parents because of a harsh cough and noisy breathing that awoke him from sleep. For the past 2 days, he had mild nasal congestion, rhinorrhea, and low-grade fever. Tonight, his cough became sudden, harsh, and sounded like a barking seal. On physical examination, the child is sitting upright in his mother's arms, alert and interactive, with clear rhinorrhea. Vital signs: temperature 38.2\u00b0C (100.8\u00b0F), heart rate 132/min, respirations 32/min, and oxygen saturation 96% on room air. While calm in his mother's lap, he has no audible respiratory sounds at rest. However, when the physician approaches with a stethoscope, the child begins crying vigorously, producing a loud, harsh, high-pitched inspiratory sound (inspiratory stridor) and mild intercostal retractions, both of which subside completely once he calms down and returns to resting breathing. There is no drooling, no tripod positioning, and pharyngeal examination is normal. An anteroposterior soft-tissue neck radiograph obtained by the triage team demonstrates symmetric subglottic narrowing ('steeple sign'). Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Administration of a single dose of oral dexamethasone (0.15 to 0.60 mg/kg) and observation in the emergency department, reserving nebulized racemic epinephrine for stridor at rest",
        "CROUP (LARYNGOTRACHEOBRONCHITIS) is the most common cause of acute pediatric upper airway obstruction in children aged 6 months to 3 years (peak at 1-2 years), predominantly caused by PARAINFLUENZA VIRUS (types 1 and 2). Infection causes viral inflammation and edema of the subglottic airway (cricoid ring, the narrowest portion of the pediatric airway). The classic presentation is a viral prodrome (rhinorrhea, low-grade fever) followed by the sudden onset of a 'BARKING' SEAL-LIKE COUGH, hoarseness, and INSPIRATORY STRIDOR. The characteristic radiographic finding on AP neck x-ray is the 'STEEPLE SIGN' (symmetric subglottic narrowing of the tracheal air column). Severity is categorized using the Westley Croup Score: (1) MILD CROUP: Barking cough, hoarseness, but NO STRIDOR AT REST (stridor occurs only when agitated or crying), and no retractions; (2) MODERATE-TO-SEVERE CROUP: INSPIRATORY STRIDOR AT REST, suprasternal/intercostal retractions, tachypnea, or agitation. Evidence-based management: (1) SYSTEMIC CORTICOSTEROIDS: A SINGLE DOSE OF DEXAMETHASONE (0.15 to 0.60 mg/kg orally, IM, or IV; max 16 mg) IS RECOMMENDED FOR ALL PATIENTS WITH CROUP, EVEN MILD CASES. Dexamethasone reduces laryngeal mucosal edema, decreases return emergency visits, and shortens hospital stays. (2) NEBULIZED RACEMIC EPINEPHRINE: Stimulates alpha-1 adrenergic receptors in the subglottic mucosa, inducing rapid arteriolar vasoconstriction and shrinking mucosal edema within 10-30 minutes. Racemic epinephrine is INDICATED FOR PATIENTS WITH STRIDOR AT REST, respiratory distress, or retractions. Because the effects of epinephrine wear off in 2 hours ('rebound phenomenon'), patients receiving nebulized epinephrine must be OBSERVED FOR AT LEAST 2 TO 4 HOURS before discharge."
      ],
      [
        "Immediate administration of nebulized racemic epinephrine every 20 minutes for 3 doses, with routine hospital admission to the pediatric ICU",
        "Nebulized racemic epinephrine is indicated for stridor AT REST; this child has mild croup with stridor ONLY during agitation, which is managed with oral dexamethasone alone."
      ],
      [
        "Immediate endotracheal intubation in the emergency department using an uncuffed endotracheal tube",
        "Intubation is required in < 1% of croup cases (severe exhaustion, impending respiratory failure); this child is alert with 96% saturation on room air."
      ],
      [
        "Prescription of oral amoxicillin-clavulanate for 10 days for bacterial tracheitis",
        "Croup is a viral infection (parainfluenza); bacterial tracheitis presents in older children with toxic appearance, high fever, and thick purulent tracheal secretions failing croup therapy."
      ],
      [
        "Prescription of oral diphenhydramine and discharge home without medications",
        "Antihistamines dry mucosal secretions and have no anti-inflammatory benefit in croup; single-dose dexamethasone is proven to reduce complications and should be given to all cases."
      ]
    ],
    "shortestValidSolution": "Barking seal cough + stridor only with agitation (mild croup) + steeple sign on neck x-ray = Croup (Parainfluenza) -> Single-dose oral Dexamethasone (reserve epinephrine for stridor at rest).",
    "necessaryInference": "Manage pediatric croup: all croup patients receive a single dose of dexamethasone; nebulized racemic epinephrine is added only if stridor is present at rest.",
    "strongestDistractor": "Immediate administration of nebulized racemic epinephrine every 20 minutes for 3 doses, with routine hospital admission to the pediatric ICU",
    "distractorExclusion": "Nebulized epinephrine is indicated for moderate-to-severe croup with resting stridor; mild croup with stridor only during agitation requires dexamethasone alone.",
    "citation": "Bjornson CL, Johnson DW. Croup in children. CMAJ. 2013;185(15):1317-1323. PMID: 23939212.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Croup Laryngotracheobronchitis Dexamethasone and Racemic Epinephrine.",
      "distractorExclusionNotes": "Competitor Immediate administration of nebulized racemic epin excluded by Nebulized epinephrine is indicated for moderate-to-severe cr.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0744",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Celiac Disease Diagnostic Pathway tTG-IgA and Duodenal Biopsy",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman presents to her primary care physician with a 9-month history of persistent diarrhea, with 3 to 5 foul-smelling, pale, bulky stools daily. She reports diffuse abdominal bloating, excessive flatulence, and an unintentional 6-kg weight loss over the past 6 months. Physical examination reveals a thin woman (BMI 18.2 kg/m2) with temporal wasting and conjunctival pallor. Examination of her skin reveals an intensely pruritic eruption over the extensor surfaces of both elbows and knees consisting of tiny grouped erythematous papules and excoriated microvesicles (dermatitis herpetiformis). Laboratory evaluation reveals: hemoglobin 9.6 g/dL, MCV 72 fL (microcytic anemia), serum ferritin 8 ng/mL (iron deficiency), serum calcium 8.2 mg/dL, and serum albumin 3.1 g/dL. Total serum IgA concentration is measured at 210 mg/dL (normal 70-400 mg/dL). Which of the following is the most appropriate initial diagnostic testing strategy to confirm this patient's underlying disease?",
    "choices": [
      [
        "Measurement of serum anti-tissue transglutaminase (tTG) IgA antibody concentration, followed by confirmatory upper endoscopy with multiple duodenal biopsies while on a gluten-containing diet",
        "CELIAC DISEASE (gluten-sensitive enteropathy) is an immune-mediated enteropathy triggered by ingestion of GLUTEN (storage proteins in wheat, barley, and rye) in genetically susceptible individuals carrying HLA-DQ2 or HLA-DQ8. Gluten peptides (gliadin) cross the intestinal epithelial barrier, where they are deamidated by the enzyme TISSUE TRANSGLUTAMINASE (tTG). Deamidated gliadin binds with high affinity to HLA-DQ2/DQ8 on antigen-presenting cells, driving a vigorous CD4+ Th1 response that destroys the small bowel architecture. Clinical features: chronic malabsorptive diarrhea, flatulence, weight loss, and nutrient deficiencies\u2014most commonly IRON DEFICIENCY ANEMIA (iron is absorbed in the duodenum, the primary site of celiac injury), folate deficiency, and vitamin D/calcium malabsorption (osteopenia). The pathognomonic cutaneous manifestation is DERMATITIS HERPETIFORMIS (intensely pruritic grouped microvesicles on extensor surfaces, showing granular IgA deposition in dermal papillae on skin biopsy). The DIAGNOSTIC PATHWAY: (1) INITIAL SEROLOGICAL SCREENING: The single best test is SERUM ANTI-TISSUE TRANSGLUTAMINASE IGA (tTG-IgA), which has > 95% sensitivity and specificity. Concurrently, TOTAL SERUM IGA MUST BE MEASURED because selective IgA deficiency is 10- to 15-fold more common in celiac patients (if IgA is deficient, IgA-based tests produce FALSE-NEGATIVE results, requiring IgG-based testing: DGP-IgG or tTG-IgG). (2) CONFIRMATORY TESTING: A positive serology must be confirmed by UPPER ESOPHAGOGASTRODUODENOSCOPY (EGD) WITH MULTIPLE DUODENAL BIOPSIES (at least 1-2 from the duodenal bulb and 4 from the distal duodenum). Biopsy reveals: INTRAEPITHELIAL LYMPHOCYTOSIS, CRYPT HYPERPLASIA, and VILLOUS BLUNTING/ATROPHY (Marsh classification). Crucially: ALL TESTING MUST BE PERFORMED WHILE THE PATIENT IS CONSUMING A GLUTEN-CONTAINING DIET. Initiating a gluten-free diet before testing causes serology to revert to negative and histology to heal, obscuring the diagnosis."
      ],
      [
        "Initiation of a strict empirical gluten-free diet for 6 months and assessing symptomatic resolution without any laboratory or endoscopic testing",
        "Empiric gluten avoidance before diagnostic testing leads to false-negative serologies and healed biopsies, permanently confounding diagnostic certainty for a lifelong disease."
      ],
      [
        "Stool testing for fecal fat concentration and empiric prescription of pancreatic enzyme replacement therapy",
        "Pancreatic enzyme replacement treats exocrine pancreatic insufficiency (chronic pancreatitis); this patient has small bowel mucosal malabsorption with iron deficiency and dermatitis herpetiformis."
      ],
      [
        "Measurement of serum antigliadin antibodies (AGA) and colonoscopy with terminal ileal biopsy",
        "Antigliadin antibodies (AGA) have poor sensitivity/specificity and are obsolete; celiac disease affects the DUODENUM and jejunum, not the colon or terminal ileum."
      ],
      [
        "Fecal calprotectin measurement and barium small bowel follow-through series",
        "Fecal calprotectin screens for inflammatory bowel disease (Crohn disease, ulcerative colitis); celiac disease requires serology (tTG-IgA) and upper endoscopic duodenal biopsy."
      ]
    ],
    "shortestValidSolution": "Bulky malabsorptive diarrhea + iron deficiency anemia + dermatitis herpetiformis = Celiac disease -> Serum anti-tTG IgA + total IgA -> Confirmatory Duodenal Biopsy on gluten diet.",
    "necessaryInference": "Formulate celiac disease diagnostic algorithm: test serum anti-tissue transglutaminase (tTG) IgA with total IgA, followed by confirmatory duodenal biopsy while the patient is consuming gluten.",
    "strongestDistractor": "Initiation of a strict empirical gluten-free diet for 6 months and assessing symptomatic resolution without any laboratory or endoscopic testing",
    "distractorExclusion": "Removing gluten before serology and biopsy normalizes antibody titers and reverses villous blunting, making definitive diagnosis impossible.",
    "citation": "Rubio-Tapia A, Hill ID, Kelly CP, Calderwood AH, Murray JA; American College of Gastroenterology. ACG clinical guidelines: diagnosis and management of celiac disease. Am J Gastroenterol. 2013;108(5):656-676. PMID: 23609613.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Celiac Disease Diagnostic Pathway tTG-IgA and Duodenal Biopsy.",
      "distractorExclusionNotes": "Competitor Initiation of a strict empirical gluten-free diet  excluded by Removing gluten before serology and biopsy normalizes antibo.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0745",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ovarian Torsion Pelvic Ultrasound and Emergent Laparoscopic Detorsion",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old nulliparous woman presents to the emergency department with a 3-hour history of acute, severe, sharp pain in her right lower quadrant and pelvis. The pain awoke her from sleep, was agonizingly intense from onset, and has been accompanied by intractable nausea and three episodes of vomiting. She has no fever, chills, vaginal bleeding, or abnormal vaginal discharge. Her last menstrual period was 2 weeks ago. She was told 6 months ago that she had a 6-cm benign cystic ovarian mass. On physical examination, she is writhing in pain on the gurney. Vital signs: blood pressure 138/84 mm Hg, heart rate 104/min, respirations 20/min, and temperature 37.2\u00b0C (99.0\u00b0F). Abdominal examination reveals focal right lower quadrant and right suprapubic tenderness to palpation with localized voluntary guarding, without generalized rigidity or rebound. Pelvic bimanual examination reveals an exquisitely tender, enlarged right adnexal mass measuring approximately 7 cm; the uterus is normal size, and there is no cervical motion tenderness. Serum quantitative beta-hCG is negative. Transvaginal and transabdominal pelvic Doppler ultrasonography demonstrates an enlarged, edematous right ovary measuring 7.4 x 5.2 cm containing multiple small peripherally displaced follicles ('string of pearls' appearance) with an underlying 5.8-cm cystic mass, and ABSENT VENOUS DOPPLER FLOW with significantly diminished arterial waveforms. The left ovary is normal. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate emergency diagnostic laparoscopy with conservative ovarian detorsion and assessment of tissue viability",
        "OVARIAN TORSION (adnexal torsion) is a gynecological surgical emergency caused by the complete or partial twisting of the ovary and fallopian tube on its infundibulopelvic (suspensory) and utero-ovarian ligaments. This mechanically occludes ovarian venous and lymphatic outflow, causing severe vascular congestion, edema, and progressive arterial thrombosis leading to hemorrhagic infarction and permanent ovarian loss. The primary risk factor is an OVARIAN MASS >= 5 CM (most commonly mature cystic teratomas [dermoids] or benign serous/mucinous cystadenomas; rarely occurs with malignant masses due to fixed pelvic adhesions). Clinical presentation: ACUTE, SUDDEN-ONSET SEVERE UNILATERAL PELVIC/LOWER ABDOMINAL PAIN, typically accompanied by NAUSEA AND VOMITING (present in > 85% of cases due to autonomic peritoneal irritation). PELVIC DOPPLER ULTRASONOGRAPHY is the diagnostic imaging modality of choice, revealing an ENLARGED, EDEMATOUS OVARY (> 4 cm) with peripherally displaced follicles and ABSENT OR DECREASED VENOUS/ARTERIAL BLOOD FLOW. Crucially: NORMAL DOPPLER FLOW DOES NOT RULE OUT TORSION (due to dual ovarian arterial supply from the ovarian artery and uterine artery). The DEFINITIVE MANAGEMENT is IMMEDIATE EMERGENCY DIAGNOSTIC LAPAROSCOPY. In premenopausal and reproductive-aged women, current surgical guidelines mandate CONSERVATIVE OVARIAN DETORSION (unwinding the twisted adnexa) with ovarian preservation, regardless of whether the ovary appears dark, congested, or necrotic ('black-bluish'). Studies conclusively demonstrate that detorted ischemic ovaries regain normal endocrine and follicular function in > 90% of cases. Immediate salpingo-oophorectomy is reserved ONLY for postmenopausal women or ovaries with frank gangrenous friability."
      ],
      [
        "Emergency right salpingo-oophorectomy under general anesthesia because the dark, bluish ovary represents non-viable tissue that will cause septic shock",
        "Routine oophorectomy for ischemic-appearing ovaries is obsolete; ischemic ovaries recover endocrine and reproductive function in > 90% of cases following simple laparoscopic detorsion."
      ],
      [
        "Administration of intravenous broad-spectrum piperacillin-tazobactam for presumptive pelvic inflammatory disease with tubo-ovarian abscess",
        "Pelvic inflammatory disease presents with fever, purulent discharge, bilateral pain, and cervical motion tenderness; acute torsion is a unilateral mechanical vascular twist without infection."
      ],
      [
        "Conservative inpatient observation with intravenous hydration and scheduled repeat pelvic ultrasound in 24 hours",
        "Observing acute ovarian torsion results in total hemorrhagic ovarian necrosis, loss of fertility, and possible peritonitis; emergency laparoscopy is mandatory."
      ],
      [
        "Image-guided percutaneous needle aspiration of the right ovarian cyst to relieve mechanical tension",
        "Percutaneous cyst aspiration does not detorse the twisted vascular pedicle, risks chemical peritonitis if a teratoma leaks, and delays necessary surgery."
      ]
    ],
    "shortestValidSolution": "Sudden severe unilateral pelvic pain + nausea/vomiting + 6-cm cyst + enlarged ovary with absent Doppler flow = Ovarian torsion -> Emergent laparoscopy with CONSERVATIVE DETORSION.",
    "necessaryInference": "Manage ovarian torsion: immediate emergency laparoscopy with conservative detorsion is the standard of care for reproductive-aged women to preserve ovarian function.",
    "strongestDistractor": "Emergency right salpingo-oophorectomy under general anesthesia because the dark, bluish ovary represents non-viable tissue that will cause septic shock",
    "distractorExclusion": "Salpingo-oophorectomy is unnecessary; detorsion preserves future ovarian endocrine and follicular function even when the ovary appears ischemic/bluish.",
    "citation": "American College of Obstetricians and Gynecologists. Adnexal Torsion in Adolescents: ACOG Committee Opinion No. 783. Obstet Gynecol. 2019;134(2):e56-e63. PMID: 31343603.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Ovarian Torsion Pelvic Ultrasound and Emergent Laparoscopic Detorsion.",
      "distractorExclusionNotes": "Competitor Emergency right salpingo-oophorectomy under genera excluded by Salpingo-oophorectomy is unnecessary; detorsion preserves fu.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0746",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Ankylosing Spondylitis Inflammatory Back Pain and Anti-TNF Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old man presents to the rheumatology clinic with a 14-month history of persistent, dull aching low back pain and buttock stiffness. He states that the pain is worst in the early morning upon waking and is accompanied by prolonged lumbar stiffness lasting greater than 45 minutes that makes it difficult to get out of bed. His symptoms improve significantly with physical activity, exercise, and a hot shower, but return whenever he sits at his desk for prolonged periods or lies down to rest. Over the past 3 months, he has had bilateral heel pain at the insertion of the Achilles tendons (enthesitis). Physical examination reveals limited lumbar spine range of motion: Schober test demonstrates only a 2.5-cm increase in lumbar flexion (normal > 5 cm). Tenderness is elicited over both sacroiliac joints with the FABER (Flexion, Abduction, External Rotation) test. Chest expansion during deep inspiration is reduced to 2.0 cm (normal > 4 cm). Laboratory evaluation demonstrates: HLA-B27 positive, ESR 54 mm/hr, C-reactive protein 32 mg/L, and negative rheumatoid factor and anti-CCP antibodies. Anteroposterior pelvic radiography reveals bilateral, symmetric sclerosis, erosions, and joint space narrowing of the sacroiliac joints (bilateral grade 3 sacroiliitis). The patient has experienced only minimal, inadequate symptomatic relief despite taking maximum doses of over-the-counter ibuprofen intermittently. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiation of regular, continuous high-dose prescription nonsteroidal anti-inflammatory drugs (NSAIDs, such as naproxen or indomethacin), with escalation to a tumor necrosis factor-alpha (TNF-alpha) inhibitor if symptoms remain refractory",
        "ANKYLOSING SPONDYLITIS (AS) is a chronic, progressive, seronegative spondyloarthropathy that predominantly affects young men (age < 40), characterized by inflammation of the axial skeleton, entheses, and sacroiliac joints. Pathogenesis is strongly linked to the HLA-B27 major histocompatibility complex (present in > 90% of white patients). The clinical hallmark is INFLAMMATORY BACK PAIN, differentiated from mechanical back pain by: (1) Insidious onset before age 40; (2) Duration >= 3 months; (3) WORST IN THE MORNING with PROLONGED MORNING STIFFNESS (> 30-45 minutes); (4) IMPROVES WITH EXERCISE/ACTIVITY and DOES NOT IMPROVE WITH REST; (5) Frequent nocturnal pain awakening the patient. Characteristic physical findings: reduced lumbar flexion on MODIFIED SCHOBER TEST (< 5 cm increase between marks), REDUCED CHEST EXPANSION (< 2.5 cm due to costovertebral joint ankylosis), and ENTHESITIS (inflammation at tendon/ligament insertions, especially Achilles tendon and plantar fascia). Extraskeletal manifestations: acute anterior uveitis (most common, unilateral painful red eye), apical pulmonary fibrosis, and aortic root dilation with aortic regurgitation. Pelvic radiography demonstrating BILATERAL SACROILIITIS is the diagnostic cornerstone (advancing to syndesmophytes and 'bamboo spine'). Management: (1) FIRST-LINE THERAPY: REGULAR, CONTINUOUS HIGH-DOSE NSAIDS (such as NAPROXEN 500 mg BID, indomethacin, or celecoxib) combined with structured physical therapy and spinal extension exercises. Up to 70-80% of patients achieve substantial relief. (2) SECOND-LINE BIOLOGIC THERAPY: For patients with persistently active disease despite an adequate trial of at least two different NSAIDs at maximum doses, the therapy of choice is a TUMOR NECROSIS FACTOR-ALPHA (TNF-ALPHA) INHIBITOR (ADALIMUMAB, INFLIXIMAB, ETANERCEPT, or certolizumab) or an IL-17 inhibitor (secukinumab). TNF inhibitors dramatically reduce spinal inflammation, improve functional mobility, and prevent progression. Crucially: SYSTEMIC CORTICOSTEROIDS HAVE NO BENEFIT in axial disease, and conventional DMARDs (methotrexate, sulfasalazine) are INEFFECTIVE FOR AXIAL SPINE DISEASE (beneficial only for peripheral arthritis)."
      ],
      [
        "Initiation of oral methotrexate 15 mg weekly monotherapy as the primary disease-modifying agent for axial spine disease",
        "Conventional synthetic DMARDs (methotrexate, sulfasalazine) are completely ineffective for axial spinal disease in ankylosing spondylitis; they are used only for peripheral joint involvement."
      ],
      [
        "Long-term daily oral prednisone 20 mg monotherapy combined with strict bed rest",
        "Systemic corticosteroids are ineffective for axial disease and cause osteoporosis/fractures in AS; bed rest accelerates spinal ankylosis and disability."
      ],
      [
        "Emergent lumbar spine laminectomy and posterior spinal fusion to prevent ankylosis",
        "Surgery is reserved for severe fixed kyphotic deformity (corrective osteotomy) or unstable spine fractures, not initial medical management."
      ],
      [
        "Immediate lumbar epidural corticosteroid injection and cessation of all aerobic physical exercise",
        "Physical therapy and exercise are mandatory non-pharmacological therapies to preserve spinal mobility; epidural injections do not treat systemic sacroiliitis."
      ]
    ],
    "shortestValidSolution": "Young man + morning back stiffness improving with exercise + Achilles enthesitis + bilateral sacroiliitis + HLA-B27 = Ankylosing spondylitis -> First-line: Continuous NSAIDs -> Refractory: TNF-alpha inhibitors.",
    "necessaryInference": "Formulate ankylosing spondylitis therapy: continuous high-dose NSAIDs are first-line; TNF-alpha inhibitors are indicated for NSAID-refractory axial disease; conventional DMARDs (methotrexate) are ineffective for the axial spine.",
    "strongestDistractor": "Initiation of oral methotrexate 15 mg weekly monotherapy as the primary disease-modifying agent for axial spine disease",
    "distractorExclusion": "Methotrexate does not work for axial spinal inflammation in ankylosing spondylitis; TNF-alpha inhibitors are the proven disease-modifying biologics for axial disease.",
    "citation": "Ward MM, Deodhar A, Gensler LS, et al. 2019 Update of the American College of Rheumatology/Spondylitis Association of America/Spondyloarthritis Research and Treatment Network Recommendations for the Treatment of Ankylosing Spondylitis and Nonradiographic Axial Spondyloarthritis. Arthritis Rheumatol. 2019;71(10):1599-1613. PMID: 31436026.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Ankylosing Spondylitis Inflammatory Back Pain and Anti-TNF Therapy.",
      "distractorExclusionNotes": "Competitor Initiation of oral methotrexate 15 mg weekly monot excluded by Methotrexate does not work for axial spinal inflammation in .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0747",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Massive Hemothorax Chest Tube Output and Indications for Thoracotomy",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old man is brought to the trauma center 20 minutes after sustaining a severe crush injury to his right chest in an industrial machinery collapse. On arrival, he is pale, tachypneic, and diaphoretic. Vital signs: blood pressure 82/50 mm Hg, heart rate 136/min, respirations 32/min, and oxygen saturation 88% on a non-rebreather mask with 100% O2. Physical examination reveals extensive ecchymosis and flail movement over the right anterolateral chest wall. Breath sounds are completely absent over the entire right hemithorax, with dullness to percussion over the right mid-to-lower chest fields. Trachea is midline, and neck veins are flat and collapsed. A portable supine chest radiograph demonstrates a complete, dense opacification ('white-out') of the right hemithorax with blunting of the right costophrenic angle and lateral displacement of the lung parenchyma. An emergent 36-French tube thoracostomy (chest tube) is inserted into the right fifth intercostal space in the midaxillary line. Immediately upon insertion, 1,750 mL of gross blood is evacuated into the collection canister. Over the subsequent 60 minutes, an additional 250 mL/hr of dark blood continues to drain. Blood pressure remains 86/52 mm Hg despite transfusion of 2 units of uncrossed packed red blood cells. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for emergency exploratory right thoracotomy",
        "HEMOTHORAX in thoracic trauma is caused by bleeding from disrupted systemic or pulmonary vessels (most commonly laceration of the INTERCOSTAL ARTERIES, INTERNAL MAMMARY ARTERY, or pulmonary parenchyma). A MASSIVE HEMOTHORAX is defined as an accumulation of >= 1,500 ML OF BLOOD (or > 1/3 of the patient's total blood volume) in the pleural cavity. Physical findings feature HYPOVOLEMIC/HEMORRHAGIC SHOCK (hypotension, tachycardia), ABSENT BREATH SOUNDS, DULLNESS TO PERCUSSION (distinguishing it from tension pneumothorax, which features hyperresonance), and FLAT NECK VEINS. Chest radiography shows dense opacification of the hemithorax. Management: (1) RESUSCITATION: Large-bore IV access, activation of massive transfusion protocol (1:1:1 ratio of PRBCs, FFP, and platelets); (2) TUBE THORACOSTOMY: Insertion of a large-bore (28-36 French) chest tube to decompress the thoracic cavity, monitor ongoing blood loss, and allow apposition of pleural surfaces; (3) INDICATIONS FOR EMERGENCY EXPLORATORY THORACOTOMY: Under Advanced Trauma Life Support (ATLS) guidelines, surgical thoracotomy is indicated if: (a) IMMEDIATE INITIAL CHEST TUBE DRAINAGE >= 1,500 ML of blood upon insertion; OR (b) PERSISTENT ONGOING BLEEDING > 200 ML/HR FOR 2 TO 4 CONSECUTIVE HOURS; OR (c) Persistent hemodynamic instability despite vigorous blood resuscitation. Here, the patient had an initial drainage of 1,750 mL followed by ongoing bleeding of 250 mL/hr in persistent shock; IMMEDIATE EXPLORATORY THORACOTOMY IS MANDATORY to achieve definitive surgical hemostasis (clamping/ligating bleeding systemic vessels or repairing pulmonary parenchymal lacerations)."
      ],
      [
        "Clamp the right chest tube immediately to allow intrapleural hematoma tamponade to halt further hemorrhage",
        "Clamping a chest tube in massive hemothorax does not stop arterial bleeding, risks converting hemothorax into an obstructive fibrothorax or tension hemothorax, and masks ongoing exsanguination."
      ],
      [
        "Perform an emergent contrast-enhanced chest CT scan to identify the precise anatomical bleeding vessel",
        "Transferring a hemodynamically unstable trauma patient with persistent shock and ongoing massive thoracic bleeding to CT scanner is a critical error; operative thoracotomy is immediate."
      ],
      [
        "Insert a second right-sided chest tube in the anterior second intercostal space to improve drainage",
        "A second chest tube does not achieve surgical hemostasis of a bleeding intercostal or mammary artery; operative exploration is mandatory."
      ],
      [
        "Administer high-dose intravenous desmopressin (dDAVP) and observe chest tube drainage for 12 hours",
        "Desmopressin stimulates vWF release in uremic bleeding; it has zero efficacy for traumatic arterial laceration in massive hemothorax."
      ]
    ],
    "shortestValidSolution": "Right chest trauma + shock + dullness + chest tube drains 1,750 mL immediately + persistent >200 mL/hr = Massive hemothorax -> Immediate emergency exploratory thoracotomy.",
    "necessaryInference": "Identify indications for emergency thoracotomy in thoracic trauma: initial chest tube drainage >= 1,500 mL, or persistent bleeding > 200 mL/hr for 2-4 hours, or refractory shock.",
    "strongestDistractor": "Clamp the right chest tube immediately to allow intrapleural hematoma tamponade to halt further hemorrhage",
    "distractorExclusion": "Clamping the tube causes tension hemothorax and conceals ongoing life-threatening bleeding; emergency open thoracotomy is required.",
    "citation": "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. PMID: 30080766",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Massive Hemothorax Chest Tube Output and Indications for Thoracotomy.",
      "distractorExclusionNotes": "Competitor Clamp the right chest tube immediately to allow in excluded by Clamping the tube causes tension hemothorax and conceals ong.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0748",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Hematology",
    "topic": "Sickle Cell Acute Chest Syndrome Diagnosis and Transfusion Strategy",
    "provisionalDifficulty": 5,
    "stem": "A 9-year-old boy with homozygous sickle cell disease (HbSS) is admitted to the pediatric ward with a severe vaso-occlusive pain crisis in his lower extremities. On hospital day 2, he develops acute respiratory deterioration with tachypnea, cough, and pleuritic chest pain. Vital signs: temperature 38.8\u00b0C (101.8\u00b0F), blood pressure 104/64 mm Hg, heart rate 128/min, respirations 36/min, and oxygen saturation 86% on room air that only increases to 90% on a non-rebreather mask with 100% O2. Pulmonary examination reveals bronchial breath sounds and crackles over the left lower lung field. Repeat chest radiograph demonstrates a new, dense alveolar consolidation in the left lower lobe that was not present on admission. Laboratory evaluation demonstrates: hemoglobin 6.2 g/dL (baseline 8.5 g/dL), reticulocytes 12%, WBC 22,400/microL with 14% band forms, and platelets 110,000/microL. Arterial blood gas on 100% O2 reveals PaO2 56 mm Hg. Along with supplemental oxygen, intravenous hydration, analgesia, and broad-spectrum intravenous antibiotics (ceftriaxone plus azithromycin), which of the following is the most appropriate next step in hematological management?",
    "choices": [
      [
        "Immediate blood transfusion therapy (emergent automated red blood cell exchange transfusion, or urgent simple transfusion if exchange is unavailable) targeting a reduction in HbS to < 30% and hemoglobin of 10 g/dL",
        "ACUTE CHEST SYNDROME (ACS) is the leading cause of death and intensive care admission in patients with SICKLE CELL DISEASE. It is defined as a NEW PULMONARY INFILTRATE on chest radiography affecting at least one complete lung segment, accompanied by AT LEAST ONE of the following: (1) Fever (>= 38.5\u00b0C), (2) Chest pain, (3) Tachypnea, intercostal retractions, or wheezing/cough, or (4) Hypoxemia (decrease in SpO2 > 3% from baseline or PaO2 < 60 mm Hg). Etiology is multifactorial, involving FAT EMBOLISM from necrotic bone marrow (vaso-occlusive bone infarction), PULMONARY INFECTION (atypical pathogens like Chlamydia pneumoniae and Mycoplasma, as well as Streptococcus pneumoniae and viral infections), and INTRAVASCULAR PULMONARY IN SITU SICKLING AND INFARCTION. Management includes: (1) Supportive care: supplemental oxygen to keep SpO2 > 95%, judicious IV fluids (overhydration easily precipitates pulmonary edema), multimodal analgesia, and incentive spirometry; (2) EMPIRIC BROAD-SPECTRUM ANTIMICROBIALS: Ceftriaxone (or cefotaxime) plus a macrolide (AZITHROMYCIN) to cover atypical pathogens; (3) BLOOD TRANSFUSION THERAPY: Transfusion is the cornerstone of therapy, interrupting the cycle of hypoxemia, sickling, and pulmonary infarction. (a) SIMPLE TRANSFUSION is appropriate for mild-to-moderate ACS with baseline Hb < 9 g/dL. (b) EMERGENT RED BLOOD CELL EXCHANGE TRANSFUSION (erythrocytapheresis) is indicated for SEVERE ACS\u2014manifested by MULTILOBAR INFILTRATES, SEVERE REFRACTORY HYPOXEMIA (PaO2 < 60 mm Hg or SpO2 < 90% despite high-flow O2), or rapid clinical deterioration. Exchange transfusion rapidly replaces sickled HbS with normal donor HbA (TARGETING HBS < 30%) while preventing hyperviscosity (KEEPING TOTAL HEMOGLOBIN <= 10-11 G/DL). Transfusing simple blood to Hb > 11 g/dL in sickle cell disease causes catastrophic hyperviscosity stroke and heart failure."
      ],
      [
        "Vigorous simple blood transfusion of 4 units of packed red blood cells targeting a final hemoglobin of 14 to 15 g/dL",
        "Transfusing sickle cell patients to hemoglobin > 10-11 g/dL causes dangerous hyperviscosity syndrome, triggering stroke, accelerated sickling, and cardiovascular collapse."
      ],
      [
        "Immediate administration of intravenous hydroxyurea 30 mg/kg bolus",
        "Hydroxyurea increases fetal hemoglobin (HbF) over months for long-term chronic prophylaxis; it has zero acute efficacy in acute chest syndrome."
      ],
      [
        "Initiation of high-dose oral deferoxamine monotherapy to chelate excess iron",
        "Deferoxamine is an iron chelator used for chronic transfusion hemosiderosis; it has no role in acute respiratory failure and can cause pulmonary toxicity."
      ],
      [
        "Administration of prophylactic high-dose intravenous heparin anticoagulation without blood transfusion",
        "Anticoagulation does not reverse microvascular sickling or improve oxygenation in ACS; blood transfusion is mandatory to reduce HbS and restore tissue perfusion."
      ]
    ],
    "shortestValidSolution": "Sickle cell patient + new pulmonary infiltrate + fever + severe hypoxemia (SpO2 86%, PaO2 56) = Acute chest syndrome -> Emergent exchange transfusion (target HbS < 30%, Hb <= 10).",
    "necessaryInference": "Formulate acute chest syndrome management in sickle cell disease: requires empiric antibiotics (ceftriaxone + azithromycin), oxygen, and urgent exchange blood transfusion for severe hypoxemia targeting HbS < 30% and Hb <= 10 g/dL.",
    "strongestDistractor": "Vigorous simple blood transfusion of 4 units of packed red blood cells targeting a final hemoglobin of 14 to 15 g/dL",
    "distractorExclusion": "Targeting hemoglobin > 10-11 g/dL in sickle cell disease causes hyperviscosity and catastrophic microvascular occlusion; exchange transfusion targets HbS < 30% with Hb ~10 g/dL.",
    "citation": "Howard J, Hart N, Roberts-Harewood M, et al. Guideline on the management of acute chest syndrome in sickle cell disease. Br J Haematol. 2015;169(4):492-505. PMID: 25772395.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Sickle Cell Acute Chest Syndrome Diagnosis and Transfusion Strategy.",
      "distractorExclusionNotes": "Competitor Vigorous simple blood transfusion of 4 units of pa excluded by Targeting hemoglobin > 10-11 g/dL in sickle cell disease cau.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0749",
    "exam": "Step 2 CK",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Myasthenic Crisis Respiratory Management and Pyridostigmine Holding",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman with a 3-year history of generalized myasthenia gravis presents to the emergency department with acute worsening of generalized muscle weakness and progressive shortness of breath over the past 24 hours. Her home medications include oral pyridostigmine 60 mg four times daily and oral prednisone 10 mg daily. Three days ago, she was prescribed oral ciprofloxacin for an uncomplicated urinary tract infection. On physical examination, she is sitting upright, leaning forward, anxious, and using accessory neck muscles during respiration. She has prominent bilateral ptosis, diplopia, nasal speech, and difficulty clearing oral secretions. Vital signs: blood pressure 144/88 mm Hg, heart rate 112/min, and respirations 28/min with shallow tidal breathing. Oxygen saturation is 94% on room air. Bedside pulmonary mechanics testing reveals: forced vital capacity (FVC) has dropped to 14 mL/kg (normal > 60 mL/kg; critical threshold < 15-20 mL/kg) and maximum negative inspiratory force (NIF) is -18 cm H2O (normal < -60 cm H2O; critical threshold > -20 to -30 cm H2O). Arterial blood gas reveals: pH 7.31, PaCO2 49 mm Hg, and PaO2 78 mm Hg. Which of the following is the most appropriate immediate management strategy?",
    "choices": [
      [
        "Elective endotracheal intubation for mechanical ventilatory support, temporary discontinuation of oral pyridostigmine, and initiation of therapeutic plasma exchange (or IVIG)",
        "MYASTHENIC CRISIS is a life-threatening complication of MYASTHENIA GRAVIS characterized by severe weakness of the respiratory and bulbar musculature leading to acute respiratory failure. It is frequently triggered by INFECTIONS, surgery, pregnancy, emotional stress, tapering of immunosuppression, or EXPOSURE TO CONTRAINDICATED DRUGS that impair neuromuscular transmission\u2014most notably FLUOROQUINOLONES (ciprofloxacin, levofloxacin), AMINOGLYCOSIDES, MACROLIDES, BETA-BLOCKERS, and magnesium. Clinical hallmark: dyspnea, orthopnea, weak cough, inability to clear secretions, and paradoxical abdominal breathing. Crucially: PULSE OXIMETRY IS AN INSENSITIVE AND LATE INDICATOR OF RESPIRATORY FAILURE in neuromuscular weakness because oxygenation remains normal until diaphragm fatigue precipitates sudden hypoventilation, hypercapnia, and catastrophic respiratory arrest. Bedside monitoring of respiratory mechanics is mandatory: (1) FORCED VITAL CAPACITY (FVC) < 15-20 ML/KG, or (2) NEGATIVE INSPIRATORY FORCE (NIF) WORSE THAN -20 TO -30 CM H2O (e.g., -18 cm H2O) are strict, objective indications for ELECTIVE ENDOTRACHEAL INTUBATION. The '20/30/40 rule' indicates intubation when FVC < 20 mL/kg, NIF > -30 cm H2O, or PaCO2 > 40-45 mm Hg. Management: (1) SECURE THE AIRWAY: Elective endotracheal intubation before respiratory arrest; (2) TEMPORARILY HOLD ACETYLCHOLINESTERASE INHIBITORS (PYRIDOSTIGMINE): Pyridostigmine stimulates muscarinic receptors, causing COPIOUS TRACHEOBRONCHIAL SECRETIONS that complicate mechanical ventilation and increase pulmonary infection risk. Furthermore, holding pyridostigmine differentiates myasthenic crisis from cholinergic crisis; (3) RAPID IMMUNOTHERAPY: THERAPEUTIC PLASMA EXCHANGE (PEX) or INTRAVENOUS IMMUNE GLOBULIN (IVIG) are the first-line therapies of choice to remove or neutralize pathogenic anti-AChR autoantibodies, producing clinical improvement within days."
      ],
      [
        "Immediate escalation of oral pyridostigmine to 120 mg every 3 hours and administration of subcutaneous edrophonium",
        "Escalating pyridostigmine stimulates massive muscarinic bronchorrhea, plugging airways with secretions and risking cholinergic crisis; edrophonium is obsolete and dangerous."
      ],
      [
        "Administration of intravenous methylprednisolone 1,000 mg bolus as monotherapy while observing in an unmonitored bed",
        "High-dose corticosteroids can paradoxically cause TRANSIENT WORSENING OF WEAKNESS in myasthenia during the first 7-10 days, precipitating complete respiratory collapse; steroids should be introduced only under PEX/IVIG cover and ICU monitoring."
      ],
      [
        "Application of nocturnal continuous positive airway pressure (CPAP) and discharge on home oxygen",
        "CPAP is ineffective for acute bulbar myasthenic crisis with secretion pooling and FVC < 15 mL/kg; endotracheal intubation is required."
      ],
      [
        "Immediate administration of intravenous magnesium sulfate for neuromuscular stabilization",
        "Magnesium blocks presynaptic acetylcholine release and is STRICTLY CONTRAINDICATED in myasthenia gravis, causing immediate fatal paralysis."
      ]
    ],
    "shortestValidSolution": "Myasthenia + ciprofloxacin trigger + FVC 14 mL/kg + hypercapnia (PaCO2 49) = Myasthenic crisis -> Elective endotracheal intubation + HOLD Pyridostigmine + Plasma exchange/IVIG.",
    "necessaryInference": "Manage myasthenic crisis: intubate when FVC < 15-20 mL/kg or NIF > -20 cm H2O; temporarily hold pyridostigmine to reduce secretions; treat with plasma exchange or IVIG.",
    "strongestDistractor": "Immediate escalation of oral pyridostigmine to 120 mg every 3 hours and administration of subcutaneous edrophonium",
    "distractorExclusion": "Escalating cholinesterase inhibitors creates massive airway secretions and can precipitate cholinergic crisis; intubation and PEX/IVIG are indicated.",
    "citation": "Sanders DB, Wolfe GI, Benatar M, et al. International consensus guidance for management of myasthenia gravis: Executive summary. Neurology. 2016;87(4):419-425. PMID: 27358333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Myasthenic Crisis Respiratory Management and Pyridostigmine Holding.",
      "distractorExclusionNotes": "Competitor Immediate escalation of oral pyridostigmine to 120 excluded by Escalating cholinesterase inhibitors creates massive airway .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0750",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Acute Adrenal Crisis Immediate Hydrocortisone and Resuscitation",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old woman with a 4-year history of primary adrenal insufficiency (Addison disease) maintained on oral hydrocortisone 20 mg daily and fludrocortisone 0.1 mg daily is brought to the emergency department in a state of profound shock. Her family reports that she developed severe vomiting and diarrhea from viral gastroenteritis 36 hours ago and was unable to keep down any oral medications or food. On arrival, she is lethargic, confused, and severely dehydrated. Vital signs: blood pressure 68/40 mm Hg, heart rate 134/min, respirations 22/min, and temperature 38.6\u00b0C (101.5\u00b0F). Physical examination reveals hyperpigmented palmar creases, sunken eyes, dry mucous membranes, and diffuse abdominal tenderness to palpation without rebound or involuntary guarding. Laboratory studies show: sodium 124 mEq/L (normal 135-145 mEq/L), potassium 6.1 mEq/L (normal 3.5-5.0 mEq/L), chloride 90 mEq/L, bicarbonate 16 mEq/L, BUN 42 mg/dL, serum creatinine 1.9 mg/dL, and blood glucose 54 mg/dL. Two large-bore intravenous lines are placed, and rapid infusion of 0.9% normal saline with 5% dextrose is initiated. Blood is drawn for cortisol and ACTH. Which of the following is the most appropriate immediate pharmacological intervention?",
    "choices": [
      [
        "Immediate intravenous bolus of hydrocortisone 100 mg, followed by 50 to 100 mg intravenously every 6 hours",
        "ACUTE ADRENAL CRISIS is an immediately life-threatening endocrine emergency resulting from acute absolute or relative deficiency of glucocorticoids (and mineralocorticoids). It typically occurs in patients with known PRIMARY ADRENAL INSUFFICIENCY (Addison disease) or SECONDARY ADRENAL INSUFFICIENCY who encounter major physiological stress (acute infection, trauma, surgery, gastroenteritis) and FAIL TO INCREASE THEIR BASAL GLUCOCORTICOID DOSE ('stress dosing'), or in patients experiencing abrupt withdrawal of chronic exogenous corticosteroids or bilateral adrenal hemorrhage (Waterhouse-Friderichsen syndrome). Clinical hallmark: PROFOUND HYPOVOLEMIC AND DISTRIBUTIVE SHOCK REFRACTORY TO FLUID RESUSCITATION AND VASOPRESSORS. Glucocorticoids are mandatory to maintain vascular smooth muscle tone and adrenergic receptor responsiveness ('permissive effect'); in cortisol deficiency, vascular tone collapses. Associated features: high fever, severe abdominal pain (mimicking an acute surgical abdomen), severe nausea/vomiting, and classic electrolyte abnormalities in primary adrenal crisis: HYPONATREMIA, HYPERKALEMIA, and HYPOGLYCEMIA (due to impaired gluconeogenesis). Management protocol: (1) IMMEDIATE HIGH-DOSE INTRAVENOUS HYDROCORTISONE: Administer an immediate 100 MG INTRAVENOUS BOLUS OF HYDROCORTISONE, followed by 50-100 mg IV every 6 hours. High-dose hydrocortisone (>= 100 mg/day) provides MAXIMAL GLUCOCORTICOID ACTIVITY and CONCURRENT MINERALOCORTICOID RECEPTOR SATURATION, eliminating the need for separate fludrocortisone during acute resuscitation. Crucially: STEROID ADMINISTRATION MUST NEVER BE DELAYED TO PERFORM COSYNTROPIN STIMULATION TESTING OR AWAIT LABORATORY RESULTS. (Dexamethasone 4 mg IV can be used if diagnostic cosyntropin testing must be performed simultaneously, as dexamethasone does not cross-react with cortisol assays, but hydrocortisone is preferred in known Addison disease); (2) AGGRESSIVE INTRAVENOUS FLUID RESUSCITATION: Infuse 0.9% normal saline with 5% DEXTROSE (D5NS) to correct hypovolemia, hyponatremia, and hypoglycemia."
      ],
      [
        "Perform an immediate 250-mcg cosyntropin stimulation test and withhold corticosteroids until the 60-minute cortisol level returns",
        "Withholding corticosteroids to wait for cosyntropin stimulation results in a patient in refractory adrenal shock causes fatal circulatory collapse and death; treatment is immediate."
      ],
      [
        "Immediate administration of intravenous fludrocortisone 10 mg push and oral potassium chloride",
        "Fludrocortisone is available only as an oral preparation and is unnecessary during acute crisis because high-dose IV hydrocortisone (100 mg) already saturates all mineralocorticoid receptors; potassium is high (6.1) and extra potassium is fatal."
      ],
      [
        "Intravenous norepinephrine infusion monotherapy targeting MAP >= 65 mm Hg without steroid replacement",
        "Vasopressors alone are ineffective in adrenal crisis because vascular smooth muscle requires cortisol to maintain alpha-1 adrenergic responsiveness; without hydrocortisone, shock remains refractory."
      ],
      [
        "Immediate exploratory laparotomy for suspected ruptured visceral aneurysm or perforated hollow viscus",
        "Abdominal pain in adrenal crisis mimics an acute abdomen, but is non-surgical and resolves rapidly within hours of IV hydrocortisone; surgery under acute adrenal failure carries near 100% operative mortality."
      ]
    ],
    "shortestValidSolution": "Addison disease + gastroenteritis + refractory shock (BP 68/40) + low Na (124) + high K (6.1) + low glucose (54) = Adrenal crisis -> Immediate IV Hydrocortisone 100 mg + IV D5NS.",
    "necessaryInference": "Formulate acute adrenal crisis therapy: immediate high-dose IV hydrocortisone (100 mg bolus) and IV D5NS fluid resuscitation; never delay steroid administration for diagnostic testing.",
    "strongestDistractor": "Perform an immediate 250-mcg cosyntropin stimulation test and withhold corticosteroids until the 60-minute cortisol level returns",
    "distractorExclusion": "Waiting for cosyntropin stimulation testing or laboratory confirmation in acute shock is fatal; steroids must be administered immediately.",
    "citation": "Bornstein SR, Allolio B, Arlt W, et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-389. PMID: 26760044.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Adrenal Crisis Immediate Hydrocortisone and Resuscitation.",
      "distractorExclusionNotes": "Competitor Perform an immediate 250-mcg cosyntropin stimulati excluded by Waiting for cosyntropin stimulation testing or laboratory co.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
