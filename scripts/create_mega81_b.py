"""
Topic Generator for Mega-Batch 81 - Part B
Tracks:
- Batch 393: 100 PLAB / UKMLA (UK) topics (2,900 -> 3,000) [HISTORIC: 3,000 QUESTION CEILING SMASHED!]
- Batch 394: 100 AMC (Australia) topics (2,900 -> 3,000)
- Batch 395: 100 MCCQE (Canada) topics (2,900 -> 3,000)
"""

import sys
import os

TAXONOMY_SUBJECTS = {
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Immunology", "Genetics", "Ethics", "Biostatistics",
    "Medicine", "Surgery", "Pediatrics", "Obstetrics", "Neurology",
    "Psychiatry", "Geriatrics"
}

TAXONOMY_SYSTEMS = {
    "Cardiovascular", "Dermatology", "Renal", "Pregnancy", "Respiratory",
    "General Principles", "Gastrointestinal", "Hematology", "Musculoskeletal",
    "Endocrine", "Nervous System", "Behavioral Health"
}

PLAB_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute ST-Elevation Myocardial Infarction Emergency Presentation in AMU", "Medicine", "Cardiovascular", "immediate primary percutaneous coronary intervention PCI within 120 minutes of diagnosis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Stable Angina Pectoris Inadequately Controlled on First-Line Beta-Blocker", "Medicine", "Cardiovascular", "adding dihydropyridine calcium channel blocker amlodipine or long-acting nitrate", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Atrial Fibrillation Acute Onset Hemodynamically Unstable in ED", "Medicine", "Cardiovascular", "emergency synchronized electrical DC cardioversion under conscious sedation", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Chronic Heart Failure with Reduced Ejection Fraction Stage C", "Medicine", "Cardiovascular", "sacubitril-valsartan, bisoprolol, spironolactone, and dapagliflozin quadruple therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hypertension Stage 2 in Type 2 Diabetic Patient in NHS Clinic", "Medicine", "Cardiovascular", "angiotensin-converting enzyme inhibitor ACEi ramipril titrated to target below 130/80", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Infective Endocarditis on Native Aortic Valve in NHS Hospital", "Microbiology", "Cardiovascular", "taking three sets of blood cultures from separate sites prior to empiric IV antibiotics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Thoracic Aortic Dissection Type B Uncomplicated in Vascular Unit", "Medicine", "Cardiovascular", "intravenous labetalol infusion targeting systolic BP 100 to 120 and close ICU monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Severe Peripheral Arterial Disease with Critical Limb Ischemia in NHS", "Surgery", "Cardiovascular", "urgent vascular surgical referral for endovascular revascularization or bypass surgery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cardiac Arrest with Ventricular Fibrillation ALS Protocol in London Hospital", "Medicine", "Cardiovascular", "immediate unsynchronized defibrillation shock 200J followed by 2 minutes CPR", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Deep Vein Thrombosis Provoked Following Long-Haul Flight in UK Traveler", "Medicine", "Cardiovascular", "direct oral anticoagulant apixaban or rivaroxaban for three months duration", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 2. Respiratory - 10
    ("Suspected Pulmonary Embolism with High Wells Score in Emergency Decision Unit", "Medicine", "Respiratory", "immediate therapeutic anticoagulation and urgent CT pulmonary angiogram CTPA", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Exacerbation of Asthma in NHS Emergency Department Resus Bay", "Medicine", "Respiratory", "back-to-back salbutamol nebulizers with ipratropium, oral prednisolone, and oxygen", "BTS/SIGN British Guideline on Asthma Management", "https://www.brit-thoracic.org.uk"),
    ("Acute Exacerbation of COPD with Severe Respiratory Acidosis in Cambridge", "Medicine", "Respiratory", "controlled oxygen therapy, bronchodilators, and non-invasive ventilation NIV", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Community-Acquired Pneumonia Moderate Severity CURB-65 Score 2 in Ward", "Medicine", "Respiratory", "hospital admission and oral or IV amoxicillin combined with clarithromycin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Lung Cancer with Two-Week Wait Referral Criteria in Primary Care", "Medicine", "Respiratory", "urgent two-week wait fast-track referral for contrast-enhanced chest CT scan", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Idiopathic Pulmonary Fibrosis IPF Presentation with Basal Crackles in Oxford", "Medicine", "Respiratory", "high-resolution CT HRCT demonstrating UIP pattern and antifibrotic pirfenidone", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Pleural Effusion Unilateral Exudative with Suspected Malignancy in St Thomas", "Medicine", "Respiratory", "diagnostic thoracic ultrasound-guided thoracentesis and pleural fluid cytology", "BTS Pleural Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Spontaneous Pneumothorax Large Over Two Centimeters in Stable Patient in AMU", "Surgery", "Respiratory", "simple needle aspiration with 16-18G cannula followed by intercostal drain if failed", "BTS Pleural Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Bronchiectasis with Frequent Bacterial Exacerbations in Birmingham", "Microbiology", "Respiratory", "regular chest physiotherapy, sputum culture-directed antibiotics, and long-term azithromycin", "BTS Bronchiectasis Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Sarcoidosis Stage II with Bilateral Hilar Lymphadenopathy in Manchester", "Medicine", "Respiratory", "clinical surveillance for asymptomatic non-progressive disease or oral prednisolone", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 3. Gastrointestinal - 10
    ("Acute Upper Gastrointestinal Bleeding Rockall Score High in London", "Medicine", "Gastrointestinal", "urgent therapeutic upper endoscopy within 24 hours following hemodynamic resuscitation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Crohn Disease Active Ileal Exacerbation in Young Adult in NHS Trust", "Medicine", "Gastrointestinal", "systemic oral prednisolone course and consideration of azathioprine or biologics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ulcerative Colitis Proctosigmoiditis Mild to Moderate Flare in General Practice", "Medicine", "Gastrointestinal", "topical rectal 5-aminosalicylate mesalazine suppository or enema combined with oral mesalazine", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Appendicitis Confirmed on Clinical and Ultrasound Findings in ED", "Surgery", "Gastrointestinal", "intravenous antibiotics and prompt laparoscopic appendicectomy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Diverticulitis Uncomplicated Hinchey Stage Ia in Primary Care", "Medicine", "Gastrointestinal", "oral analgesia, clear fluid diet, and watchful waiting without routine antibiotics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Coeliac Disease Presentation with Iron Deficiency and Lethargy in Cambridge", "Immunology", "Gastrointestinal", "serological anti-tissue transglutaminase tTG IgA and duodenal biopsy confirmation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Gastroesophageal Reflux Disease GERD Refractory to Once-Daily PPI in Oxford", "Medicine", "Gastrointestinal", "optimizing PPI to twice-daily dosing before meals and lifestyle modification", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Alcoholic Liver Disease Decompensated with Jaundice and Ascites in Edinburgh", "Medicine", "Gastrointestinal", "complete alcohol abstinence, nutrition support, spironolactone, and diagnostic paracentesis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Biliary Cholangitis PBC Positive Anti-Mitochondrial Antibodies in Cardiff", "Medicine", "Gastrointestinal", "long-term oral ursodeoxycholic acid UDCA 13 to 15 mg/kg daily therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Colorectal Cancer Suspected with Iron Deficiency Anemia in Male in NHS", "Surgery", "Gastrointestinal", "two-week wait urgent referral for diagnostic colonoscopy and FIT testing", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Kidney Injury Stage 3 Secondary to Sepsis and ACE Inhibitor in AMU", "Medicine", "Renal", "stopping ACE inhibitor, aggressive crystalloid fluid resuscitation, and treating sepsis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Kidney Disease Stage G4A3 with eGFR 22 and Proteinuria in Renal Clinic", "Medicine", "Renal", "nephrology specialist referral, SGLT2 inhibitor, and blood pressure control below 120", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Renal Stone Five Millimeter Distal Ureteric with Normal Kidney Function in ED", "Surgery", "Renal", "oral NSAID diclofenac, alpha-blocker tamsulosin, and outpatient observation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Recurrent Urinary Tract Infection in Postmenopausal Woman in General Practice", "Microbiology", "Renal", "vaginal topical estrogen therapy, behavioral advice, and post-coital prophylaxis if needed", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Bacterial Prostatitis with High Fever and Perineal Pain in Urology", "Microbiology", "Renal", "oral ciprofloxacin or ofloxacin for 14 to 28 days following urine cultures", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Benign Prostatic Enlargement with Severe Lower Urinary Tract Symptoms in NHS", "Surgery", "Renal", "combination alpha-1 antagonist tamsulosin and 5-alpha reductase inhibitor finasteride", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Visible Hematuria in Sixty-Year-Old Smoker without Infection in London", "Surgery", "Renal", "urgent two-week wait suspected cancer pathway referral for flexible cystoscopy and renal ultrasound", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Minimal Change Nephropathy in Child Presenting with Periorbital Edema in Trust", "Pediatrics", "Renal", "oral prednisolone 60 mg/m2 daily for four weeks followed by tapering alternate-day regimen", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Testicular Torsion Suspected in Sixteen-Year-Old Adolescent in Emergency", "Surgery", "Renal", "immediate emergency surgical exploration and bilateral orchidopexy without delay for imaging", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hyperkalemia Severe with ECG Widening of QRS Complex in Resus Bay", "Medicine", "Renal", "immediate intravenous 10% calcium gluconate 10ml over 5 minutes and insulin-dextrose infusion", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Inadequately Controlled on Metformin in Primary Care", "Medicine", "Endocrine", "adding SGLT2 inhibitor empagliflozin or dapagliflozin if cardiovascular/renal risk present", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Diabetic Ketoacidosis DKA Protocolized Management in NHS Trust Hospital", "Medicine", "Endocrine", "fixed-rate intravenous insulin infusion 0.1 units/kg/hr alongside isotonic saline and potassium", "Joint British Diabetes Societies Guidelines", "https://www.nice.org.uk"),
    ("Hyperthyroidism Toxic Multinodular Goitre in Elderly Female in St Thomas", "Medicine", "Endocrine", "carbimazole titration symptom control followed by definitive radioactive iodine 131-I", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Hypothyroidism Initial Diagnosis with TSH 24 in General Practice", "Medicine", "Endocrine", "daily oral levothyroxine starting at 1.6 mcg/kg daily or 25-50 mcg in elderly/cardiac disease", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Addisonian Adrenal Crisis Presentation in Primary Care Clinic Birmingham", "Medicine", "Endocrine", "immediate intramuscular or intravenous hydrocortisone 100 mg bolus and urgent emergency transfer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Hyperparathyroidism with Recurrent Renal Calculi in Cambridge", "Surgery", "Endocrine", "surgical referral for focused parathyroidectomy following localization scans", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cushing Syndrome Suspected in Patient with Hypertension and Striae in Oxford", "Medicine", "Endocrine", "overnight low-dose dexamethasone suppression test or 24-hour urinary free cortisol collection", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Prolactinoma Microadenoma Presenting with Galactorrhea and Amenorrhea in London", "Medicine", "Endocrine", "oral dopamine agonist cabergoline therapy and endocrine monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hypocalcemia Acute Symptomatic with Positive Chvostek Sign in AMU", "Medicine", "Endocrine", "intravenous 10% calcium gluconate 10 to 20 ml infusion over 10 minutes with cardiac monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Obesity Class III with Comorbidities Refractory to Lifestyle in NHS", "Medicine", "Endocrine", "weekly subcutaneous GLP-1 receptor agonist semaglutide or referral for bariatric surgery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia in Postmenopausal Woman in General Practice London", "Medicine", "Hematology", "two-week wait urgent referral for upper endoscopy and colonoscopy to rule out occult cancer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Immune Thrombocytopenia ITP in Adult with Platelets 15,000 in Manchester", "Medicine", "Hematology", "oral prednisolone 1 mg/kg daily or high-dose dexamethasone and monitoring", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Multiple Myeloma Suspected with Bone Pain, Anemia, and Hypercalcemia in NHS", "Pathology", "Hematology", "serum free light chain assay, serum protein electrophoresis, and whole-body low-dose CT", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Sickle Cell Disease Acute Chest Syndrome in NHS Emergency Department London", "Medicine", "Hematology", "oxygenation, pain relief, empiric macrolide/cephalosporin antibiotics, and exchange transfusion", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Warfarin Anticoagulation Reversal for Life-Threatening Bleed in Resus", "Pharmacology", "Hematology", "immediate intravenous prothrombin complex concentrate PCC and intravenous phytomenadione vitamin K", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Lymphocytic Leukemia Binet Stage A Asymptomatic in Birmingham", "Medicine", "Hematology", "watch and wait watchful surveillance strategy without immediate cytotoxic therapy", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Pernicious Anemia Diagnosed with Positive Anti-Intrinsic Factor Antibodies in UK", "Medicine", "Hematology", "intramuscular hydroxocobalamin 1 mg three times weekly for two weeks then every three months", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hemophilia A Severe with Acute Hemarthrosis in Regional Hemophilia Centre", "Medicine", "Hematology", "immediate recombinant factor VIII replacement concentrate infusion to reach 100% activity", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Acute Promyelocytic Leukemia APL Suspected with Pancytopenia in NHS", "Medicine", "Hematology", "immediate initiation of all-trans retinoic acid ATRA while awaiting genetic confirmation", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Neutropenic Sepsis Suspected in Cancer Chemotherapy Patient in Oncology Ward", "Microbiology", "Hematology", "immediate intravenous piperacillin-tazobactam within one hour of arrival without waiting for bloods", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within 4.5 Hours in NHS Hyperacute Stroke Unit London", "Medicine", "Nervous System", "intravenous thrombolysis with alteplase and thrombectomy referral for large vessel occlusion", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Transient Ischemic Attack TIA High Risk ABCD2 Score 5 in TIA Clinic", "Medicine", "Nervous System", "immediate aspirin 300 mg daily and urgent specialist stroke clinic assessment within 24 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Subarachnoid Hemorrhage Presentation with Sudden Thunderclap Headache in ED", "Surgery", "Nervous System", "immediate non-contrast CT head scan within 6 hours or lumbar puncture after 12 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Bacterial Meningitis Suspected in Adult in General Practice UK", "Microbiology", "Nervous System", "immediate intramuscular or intravenous benzylpenicillin or ceftriaxone before emergency transfer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("First Unprovoked Generalized Tonic-Clonic Seizure in Adult in Oxford", "Medicine", "Nervous System", "urgent referral to first seizure clinic within two weeks and driving safety advice", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Parkinson Disease Newly Diagnosed with Motor Impairment in Cambridge", "Medicine", "Nervous System", "specialist neurology referral for levodopa or dopamine agonist initiation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Multiple Sclerosis Suspected with Optic Neuritis Episode in Edinburgh", "Medicine", "Nervous System", "urgent MRI brain and whole spine with contrast and neurology outpatient referral", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Temporal Arteritis Giant Cell Arteritis with Jaw Claudication in Birmingham", "Medicine", "Nervous System", "immediate high-dose oral prednisolone 60 mg daily to prevent permanent visual loss", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Guillain-Barre Syndrome Acute Presentation with Areflexia in Cardiff", "Medicine", "Nervous System", "urgent admission, spirometry vital capacity tracking, and IVIG or plasma exchange", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cauda Equina Syndrome Suspected with Saddle Anesthesia and Urinary Retention in ED", "Surgery", "Nervous System", "emergency urgent whole spine emergency MRI scan within hours and spinal surgical referral", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Suspected with Bilateral MCP Joint Swelling in London", "Medicine", "Musculoskeletal", "urgent rheumatology referral and initiation of combination csDMARD therapy with methotrexate", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Polymyalgia Rheumatica Presentation with Bilateral Shoulder Girdle Stiffness in UK", "Medicine", "Musculoskeletal", "oral prednisolone 15 mg daily with dramatic symptom resolution within 48 to 72 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Septic Arthritis Suspected in Hot Swollen Knee Joint in AMU", "Microbiology", "Musculoskeletal", "urgent synovial fluid aspiration for microscopy and culture prior to starting empiric IV flucloxacillin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Gout Flare in Patient with Renal Impairment in Primary Care", "Medicine", "Musculoskeletal", "oral low-dose colchicine 500 mcg or short-course oral prednisolone avoiding NSAIDs", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Osteoarthritis of the Knee Refractory to Topical NSAIDs and Exercise in NHS", "Medicine", "Musculoskeletal", "oral paracetamol or low-dose oral codeine and intra-articular corticosteroid injection", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Melanoma with ABCDE Changes on Pigmented Lesion in Dermatology", "Surgery", "Dermatology", "two-week wait urgent referral to dermatology for complete excisional biopsy with 2mm margin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Atopic Eczema Severe Exacerbation in Adult in General Practice UK", "Medicine", "Dermatology", "potent topical corticosteroid betamethasone valerate combined with intensive emollients", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Psoriasis Plaque Disease Mild to Moderate on Extensor Surfaces in NHS", "Medicine", "Dermatology", "once-daily topical combination of potent corticosteroid and vitamin D analogue calcipotriol", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Scabies Infestation Presentation with Nocturnal Pruritus in Family in London", "Microbiology", "Dermatology", "topical 5% permethrin cream applied to whole body including treatment of all household contacts", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ankylosing Spondylitis Suspected with Inflammatory Back Pain in Manchester", "Medicine", "Musculoskeletal", "MRI of sacroiliac joints demonstrating active sacroiliitis and regular NSAID therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Severe Preeclampsia at 35 Weeks with Hyperreflexia and Proteinuria in London", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate infusion for seizure prophylaxis and planned delivery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ectopic Pregnancy Suspected in Hemodynamically Stable Patient in Trust", "Obstetrics", "Pregnancy", "transvaginal ultrasound TVUS and serial serum quantitative beta-hCG assessment", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Gestational Diabetes Screening at 24 to 28 Weeks Gestation in NHS", "Obstetrics", "Pregnancy", "75g two-hour oral glucose tolerance test OGTT with diagnostic thresholds", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Postpartum Hemorrhage Primary Secondary to Uterine Atony in Labour Ward", "Obstetrics", "Pregnancy", "uterine massage, bimanual compression, IV oxytocin infusion, and ergometrine or carboprost", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Neonatal Jaundice within First 24 Hours of Life in Neonatal Unit", "Pediatrics", "Gastrointestinal", "urgent serum bilirubin measurement, direct antiglobulin Coombs test, and immediate phototherapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Bronchiolitis in Four-Month-Old Infant with Mild Recession in Pediatric Ward", "Pediatrics", "Respiratory", "supportive care, fractional feeding, nasal suctioning, and minimal handling without bronchodilators", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Croup Laryngotracheobronchitis Mild to Moderate in Toddler in ED", "Pediatrics", "Respiratory", "single oral dose of soluble dexamethasone 0.15 mg/kg and reassuring guidance", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Febrile Convulsion Simple First Episode in Eighteen-Month-Old in General Practice", "Pediatrics", "Nervous System", "identifying infection source, parental reassurance, antipyretics, and seizure safety advice", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Non-Accidental Injury Child Protection Safeguarding Suspected in Pediatric ED", "Ethics", "General Principles", "admitting child to pediatric ward for safety, urgent senior consultation, and safeguarding referral", "GMC Safeguarding Guidance", "https://www.gmc-uk.org"),
    ("Intussusception Suspected in Nine-Month-Old Infant with Red Currant Jelly Stool in Trust", "Surgery", "Gastrointestinal", "abdominal ultrasound confirmation and air or contrast therapeutic enema reduction", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Disorder Moderate in NHS General Practice London", "Psychiatry", "Behavioral Health", "evidence-based high-intensity psychological intervention CBT or oral SSRI sertraline", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Severe Agoraphobia and Panic Disorder in Young Adult in Cambridge", "Psychiatry", "Behavioral Health", "cognitive behavioral therapy CBT and oral selective serotonin reuptake inhibitor", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Psychotic Episode Presentation under Mental Health Act Assessment in Trust", "Psychiatry", "Behavioral Health", "formal assessment under Section 2 of Mental Health Act for assessment and treatment", "General Medical Council Guidance", "https://www.gmc-uk.org"),
    ("Bipolar Affective Disorder Acute Depressive Phase in Birmingham", "Psychiatry", "Behavioral Health", "oral quetiapine, olanzapine with fluoxetine, or lurasidone avoiding antidepressant monotherapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Anorexia Nervosa Severe with Low BMI 13 and Bradycardia in Adolescent Unit", "Psychiatry", "Behavioral Health", "urgent medical inpatient admission under MARSIPAN guidelines for careful refeeding", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Patient Refusing Life-Saving Blood Transfusion as Jehovah Witness in NHS", "Ethics", "General Principles", "respecting patient autonomy and refusal of treatment if competent with valid advance directive", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Confidentiality Breach Request by Police without Judicial Warrant in UK", "Ethics", "General Principles", "refusing medical disclosure unless required by law, court order, or to prevent serious imminent harm", "GMC Confidentiality Guidance", "https://www.gmc-uk.org"),
    ("Informed Consent and Capacity Assessment under Mental Capacity Act 2005 in Trust", "Ethics", "General Principles", "presuming capacity unless proven otherwise and assessing ability to understand, retain, weigh, communicate", "GMC Consent Guidance", "https://www.gmc-uk.org"),
    ("Breaking Bad News of Terminal Malignancy SPIKES Protocol in Oncology", "Ethics", "General Principles", "applying SPIKES protocol setting, perception, invitation, knowledge, empathy, strategy", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Fitness to Drive Notification to DVLA for Severe Epilepsy in Oxford", "Ethics", "General Principles", "advising patient not to drive and notifying DVLA if patient refuses to comply after warning", "GMC Fitness to Drive Guidance", "https://www.gmc-uk.org")
]

AMC_TOPICS = [
    # 1. Cardiovascular - 10
    ("Suspected Acute Coronary Syndrome in Australian Rural ED Victoria", "Medicine", "Cardiovascular", "serial high-sensitivity troponin assays, 12-lead ECG, and aspirin 300 mg administration", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Atrial Fibrillation with Moderate Stroke Risk in Primary Care Sydney", "Medicine", "Cardiovascular", "direct oral anticoagulant apixaban or rivaroxaban and rate control with metoprolol", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Heart Failure with Reduced Ejection Fraction in General Practice Melbourne", "Medicine", "Cardiovascular", "quadruple therapy ARNI sacubitril-valsartan, bisoprolol, empagliflozin, and spironolactone", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Hypertension Uncontrolled on ACE Inhibitor Monotherapy in Brisbane", "Medicine", "Cardiovascular", "adding dihydropyridine calcium channel blocker amlodipine or thiazide-like diuretic indapamide", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Infective Endocarditis Duke Criteria Positive on Native Valve in Adelaide", "Microbiology", "Cardiovascular", "targeted intravenous high-dose bactericidal antibiotics based on blood cultures", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Abdominal Aortic Aneurysm Screening Finding 5.8cm Diameter in Perth", "Surgery", "Cardiovascular", "urgent referral to vascular surgery for endovascular aneurysm repair EVAR assessment", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Pericarditis Post-Viral in Young Australian Athlete in Melbourne", "Medicine", "Cardiovascular", "oral ibuprofen 600 mg three times daily combined with colchicine 500 mcg daily", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Deep Vein Thrombosis Post-Orthopedic Surgery in Sydney Hospital", "Medicine", "Cardiovascular", "oral rivaroxaban or apixaban therapeutic anticoagulation for three months", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Supraventricular Tachycardia Acute Presentation in Emergency Brisbane", "Medicine", "Cardiovascular", "modified Valsalva maneuver followed by rapid intravenous adenosine bolus", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Syncope from Severe Degenerative Calcaneal Aortic Stenosis in Adelaide", "Medicine", "Cardiovascular", "transthoracic echocardiogram confirmation and cardiothoracic consultation for TAVI", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 2. Respiratory - 10
    ("Acute Severe Asthma Flare in Australian Emergency Department Melbourne", "Medicine", "Respiratory", "frequent inhaled salbutamol and ipratropium via spacer/nebulizer and oral prednisolone", "National Asthma Council Australia Guidelines", "https://www.nationalasthma.org.au"),
    ("COPD Acute Exacerbation with Purulent Sputum and Increased Dyspnea in Sydney", "Medicine", "Respiratory", "inhaled bronchodilators, oral prednisolone 30 to 50 mg daily for five days, and oral amoxicillin", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Community-Acquired Pneumonia Non-Severe in Rural Victoria Practice", "Microbiology", "Respiratory", "oral amoxicillin combined with oral doxycycline or clarithromycin for atypical coverage", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Suspected Pulmonary Embolism with Pleuritic Chest Pain in Perth", "Medicine", "Respiratory", "pre-test probability assessment with Wells score followed by CT pulmonary angiogram", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Spontaneous Pneumothorax Small Under Two Centimeters in Stable Patient Brisbane", "Medicine", "Respiratory", "conservative observation, supplemental oxygen if needed, and repeat chest x-ray", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Chronic Cough Over Eight Weeks in Non-Smoker Adult in Adelaide", "Medicine", "Respiratory", "systematic evaluation for upper airway cough syndrome, cough-variant asthma, and GERD", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Obstructive Sleep Apnea with High Epworth Sleepiness Score in Sydney", "Medicine", "Respiratory", "diagnostic sleep study polysomnography and continuous positive airway pressure trial", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Bronchiectasis with Hemophilus Influenzae Sputum Culture in Melbourne", "Microbiology", "Respiratory", "airway clearance techniques, chest physiotherapy, and targeted oral amoxicillin-clavulanate", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Pleural Effusion Unilateral Exudative in Sixty-Year-Old in Brisbane", "Medicine", "Respiratory", "diagnostic ultrasound-guided thoracentesis with pleural fluid analysis and cytology", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Silicosis in Australian Engineered Stone Benchtop Worker in Queensland", "Pathology", "Respiratory", "occupational cessation, high-resolution CT chest, and referral for respiratory surveillance", "Royal Australasian College of Physicians Guidelines", "https://www.racp.edu.au"),

    # 3. Gastrointestinal - 10
    ("Acute Peptic Ulcer Hemorrhage with Hematemesis in Melbourne", "Medicine", "Gastrointestinal", "intravenous fluid resuscitation, IV high-dose omeprazole, and gastroscopy within 24 hours", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Crohn Disease Active Colonic Inflammation in Sydney Teaching Hospital", "Medicine", "Gastrointestinal", "oral systemic corticosteroids for induction followed by biologic anti-TNF therapy", "Gastroenterological Society of Australia (GESA) Guidelines", "https://www.gesa.org.au"),
    ("Ulcerative Colitis Mild to Moderate Flare in Distal Colon in Brisbane", "Medicine", "Gastrointestinal", "rectal mesalazine suppository or enema combined with oral 5-ASA therapy", "GESA Guidelines", "https://www.gesa.org.au"),
    ("Acute Calculous Cholecystitis in Australian Regional Base Hospital", "Surgery", "Gastrointestinal", "intravenous fluids, IV ampicillin/gentamicin or ceftriaxone, and early laparoscopic cholecystectomy", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Diverticulitis Uncomplicated Left Lower Quadrant Pain in Adelaide", "Medicine", "Gastrointestinal", "clear liquid diet, oral analgesia, and expectant observation without routine antibiotics", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Celiac Disease Adult Presentation with Bloating and Microcytic Anemia in Perth", "Immunology", "Gastrointestinal", "anti-tTG IgA serology followed by gastroscopy with duodenal biopsies", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Gastroesophageal Reflux Disease GERD Symptomatic in Melbourne General Practice", "Medicine", "Gastrointestinal", "trial of once-daily oral proton pump inhibitor esomeprazole or pantoprazole for 4 to 8 weeks", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Cirrhosis Decompensated with Moderate Ascites in Brisbane Hospital", "Medicine", "Gastrointestinal", "dietary sodium restriction and oral spironolactone with furosemide titration", "GESA Guidelines", "https://www.gesa.org.au"),
    ("National Bowel Cancer Screening Program Positive FOBT in 55-Year-Old Sydney", "Medicine", "Gastrointestinal", "referral for diagnostic colonoscopy within 120 days of positive fecal occult blood test", "Cancer Council Australia Guidelines", "https://www.cancer.org.au"),
    ("Acute Pancreatitis Mild from Alcohol in Regional Victorian Hospital", "Medicine", "Gastrointestinal", "aggressive intravenous fluid hydration with Ringer lactate, multimodal analgesia, and early oral feeding", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 4. Renal & Genitourinary - 10
    ("Acute Kidney Injury KDIGO Stage 1 in Dehydrated Elderly Patient in Adelaide", "Medicine", "Renal", "stopping nephrotoxic medications ACEi/NSAIDs, volume rehydration, and monitoring", "Kidney Health Australia Guidelines", "https://kidney.org.au"),
    ("Chronic Kidney Disease CKD Stage 3b with Albuminuria in Melbourne", "Medicine", "Renal", "SGLT2 inhibitor dapagliflozin, ACE inhibitor ramipril, and cardiovascular risk reduction", "Kidney Health Australia Guidelines", "https://kidney.org.au"),
    ("Acute Uncomplicated Cystitis in Non-Pregnant Female in Sydney General Practice", "Microbiology", "Renal", "oral trimethoprim 300 mg daily for three days or oral cephalexin 500 mg twice daily", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Pyelonephritis Mild to Moderate Managed in Outpatient Setting Perth", "Microbiology", "Renal", "oral ciprofloxacin or oral amoxicillin-clavulanate after urine culture collection", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Benign Prostatic Hyperplasia with Voiding Lower Urinary Tract Symptoms Brisbane", "Medicine", "Renal", "oral alpha-1 blocker prazosin or tamsulosin and review after six weeks", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Renal Colic Acute Secondary to Ureteral Calculus in Adelaide ED", "Medicine", "Renal", "intravenous or oral NSAID indomethacin/ketorolac and non-contrast low-dose CT KUB", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Painless Macroscopic Hematuria in Fifty-Year-Old Smoker in Sydney", "Surgery", "Renal", "urgent urology referral for flexible cystoscopy and CT intravenous pyelogram CT IVP", "Urological Society of Australia and New Zealand Guidelines", "https://www.usanz.org.au"),
    ("Testicular Swelling Painful with Absent Cremasteric Reflex in Melbourne", "Surgery", "Renal", "urgent emergency scrotal surgical exploration within 6 hours without awaiting ultrasound", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Minimal Change Disease in Young Adult Presenting with Edema in Perth", "Medicine", "Renal", "oral high-dose prednisolone therapy and referral to nephrology for renal biopsy", "Kidney Health Australia Guidelines", "https://kidney.org.au"),
    ("Hyperkalemia Moderate with Potassium 6.2 in CKD Patient in Brisbane", "Medicine", "Renal", "dietary potassium restriction, loop diuretic, and oral sodium zirconium cyclosilicate", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Newly Diagnosed in Australian General Practice Melbourne", "Medicine", "Endocrine", "lifestyle intervention, metformin titration, and cardiovascular risk assessment", "RACGP Diabetes Management Guidelines", "https://www.racgp.org.au"),
    ("Type 2 Diabetes with Established Cardiovascular Disease in Sydney", "Medicine", "Endocrine", "adding SGLT2 inhibitor empagliflozin or GLP-1 receptor agonist liraglutide to metformin", "RACGP Diabetes Management Guidelines", "https://www.racgp.org.au"),
    ("Diabetic Ketoacidosis Presentation in Regional Emergency Department Victoria", "Medicine", "Endocrine", "intravenous 0.9% normal saline rehydration, fixed-rate insulin infusion, and potassium replacement", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Subclinical Hypothyroidism with TSH 8.5 and Positive TPO Antibodies in Adelaide", "Medicine", "Endocrine", "repeat thyroid function tests in 6 to 8 weeks and trial of oral levothyroxine if symptomatic", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Graves Disease Hyperthyroidism First Episode in Perth Patient Clinic", "Medicine", "Endocrine", "oral carbimazole titration therapy combined with propranolol for tremor and palpitations", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Primary Hyperparathyroidism Incidental Hypercalcemia Finding in Brisbane", "Medicine", "Endocrine", "measurement of 24-hour urinary calcium and referral for neck sestamibi/ultrasound localization", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Addison Disease Autoimmune Primary Adrenal Insufficiency in Sydney", "Medicine", "Endocrine", "oral hydrocortisone in divided daily doses combined with oral fludrocortisone", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Cushing Syndrome Screening in Patient with Proximal Muscle Weakness Melbourne", "Medicine", "Endocrine", "overnight 1 mg dexamethasone suppression test or 24-hour urinary free cortisol", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Osteoporosis Postmenopausal with T-Score Minus 2.8 in General Practice Adelaide", "Medicine", "Endocrine", "oral weekly alendronate or annual IV zoledronic acid alongside calcium and vitamin D", "RACGP Osteoporosis Guidelines", "https://www.racgp.org.au"),
    ("Severe Obesity BMI 38 with Sleep Apnea and Fatty Liver in Perth", "Medicine", "Endocrine", "comprehensive lifestyle intervention, medical pharmacotherapy, or referral for bariatric surgery", "RACGP Clinical Guidelines", "https://www.racgp.org.au"),

    # 6. Hematology - 10
    ("Microcytic Anemia from Menorrhagia in Australian General Practice Sydney", "Medicine", "Hematology", "oral ferrous sulfate on alternate days or intravenous ferric carboxymaltose if intolerant", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Vitamin B12 Deficiency Neuropathy in Vegan Patient in Melbourne", "Medicine", "Hematology", "intramuscular hydroxocobalamin injections 1 mg alternate days for two weeks then quarterly", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Immune Thrombocytopenia ITP Platelets 18,000 without Severe Bleeding Brisbane", "Medicine", "Hematology", "oral prednisolone 1 mg/kg daily or observation if platelets over 30,000 and asymptomatic", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Suspected Acute Leukemia with Pancytopenia and Blast Cells in Adelaide", "Pathology", "Hematology", "immediate urgent referral to tertiary hematology unit for bone marrow aspirate and biopsy", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Hereditary Hemochromatosis Homozygous C282Y High Ferritin in Perth", "Genetics", "Hematology", "therapeutic venesection phlebotomy to achieve target serum ferritin 50 to 100 mcg/L", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Warfarin Over-Anticoagulation INR 6.5 without Active Bleeding Melbourne", "Pharmacology", "Hematology", "withholding warfarin, monitoring INR, and oral low-dose vitamin K 1 to 2 mg if high risk", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Neutropenic Sepsis Post-Chemotherapy in Melbourne Cancer Centre Hospital", "Microbiology", "Hematology", "immediate intravenous piperacillin-tazobactam within 30 minutes of presentation", "eviQ Australian Cancer Guidelines", "https://www.eviq.org.au"),
    ("Multiple Myeloma Presentation with Bone Pain and Elevated Protein Gap Sydney", "Pathology", "Hematology", "serum and urine protein electrophoresis, free light chain assay, and bone imaging", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Sickle Cell Trait Presentation in Migrant Athlete with Hematuria Brisbane", "Genetics", "Hematology", "hydration, exclusion of papillary necrosis and renal medullary carcinoma, and reassurance", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Disseminated Intravascular Coagulation in Obstetric Sepsis in Adelaide", "Pathology", "Hematology", "urgent delivery/source control, intravenous broad-spectrum antimicrobials, and cryoprecipitate", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke Presentation within Three Hours in Adelaide Hospital", "Medicine", "Nervous System", "urgent non-contrast CT brain, tele-stroke review, and intravenous tenecteplase thrombolysis", "Stroke Foundation Australia Guidelines", "https://informme.org.au"),
    ("Transient Ischemic Attack Low Risk ABCD2 Score 2 in Melbourne", "Medicine", "Nervous System", "initiating aspirin 100 mg daily, statin, and outpatient stroke clinic review within 7 days", "Stroke Foundation Australia Guidelines", "https://informme.org.au"),
    ("First Generalized Tonic-Clonic Seizure in 22-Year-Old in Sydney", "Medicine", "Nervous System", "neurology specialist referral, EEG, MRI brain, and strict driving restriction for six months", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Parkinson Disease Initial Presentation with Resting Tremor in Sydney Clinic", "Medicine", "Nervous System", "neurology specialist consultation for levodopa-carbidopa or dopamine agonist trial", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Multiple Sclerosis Presentation with Unilateral Optic Neuritis in Brisbane", "Medicine", "Nervous System", "ophthalmology review, MRI brain/orbits with gadolinium, and high-dose methylprednisolone", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Bacterial Meningitis Suspected in Regional General Practice Victoria", "Microbiology", "Nervous System", "immediate intramuscular or intravenous ceftriaxone or benzylpenicillin and emergency transfer", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Temporal Arteritis Giant Cell Arteritis with Jaw Claudication in Melbourne Hospital", "Medicine", "Nervous System", "immediate high-dose oral prednisolone 50 to 60 mg daily and urgent temporal artery biopsy", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Guillain-Barre Syndrome Symmetrical Progressive Lower Limb Weakness Perth", "Medicine", "Nervous System", "urgent admission, close monitoring of forced vital capacity, and intravenous immunoglobulin", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Migraine Headache Acute Moderate Attack in General Practice Adelaide", "Medicine", "Nervous System", "oral triptan sumatriptan or zolmitriptan combined with soluble aspirin or naproxen", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Bell Palsy Idiopathic Acute Peripheral Facial Paralysis in Sydney", "Medicine", "Nervous System", "oral prednisolone 50 mg daily for ten days, eye lubrication drops, and night eye taping", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Symmetrical Polyarthritis in Brisbane Clinic", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug methotrexate combined with low-dose steroid bridge", "Australian Rheumatology Association Guidelines", "https://rheumatology.org.au"),
    ("Septic Arthritis Suspected in Hot Effused Knee Joint in Melbourne ED", "Microbiology", "Musculoskeletal", "urgent joint aspiration for synovial microscopy/culture prior to starting IV flucloxacillin", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Gouty Arthritis First MTP Joint Podagra in Sydney Patient Clinic", "Medicine", "Musculoskeletal", "oral NSAID or low-dose colchicine 500 mcg twice daily and deferring urate-lowering changes", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Osteoarthritis of the Hip with Moderate Functional Restriction Adelaide", "Medicine", "Musculoskeletal", "structured exercise therapy, weight management, and oral paracetamol or topical NSAIDs", "RACGP Clinical Guidelines", "https://www.racgp.org.au"),
    ("Polymyalgia Rheumatica in 72-Year-Old Woman with Morning Stiffness Perth", "Medicine", "Musculoskeletal", "oral prednisolone 15 mg daily with rapid clinical response expected within 72 hours", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Melanoma Suspected on Sun-Exposed Skin in Queensland Resident Clinic", "Surgery", "Dermatology", "complete diagnostic excisional biopsy with 2mm clinical margins oriented along skin tension lines", "Cancer Council Australia Guidelines", "https://www.cancer.org.au"),
    ("Basal Cell Carcinoma Nodular on Forehead in Australian Farmer Brisbane", "Surgery", "Dermatology", "surgical excision with four-millimeter clear surgical margins and histological examination", "Cancer Council Australia Guidelines", "https://www.cancer.org.au"),
    ("Atopic Dermatitis Moderate in Child in Melbourne Clinic Practice", "Medicine", "Dermatology", "liberal emollient application twice daily and topical methylprednisolone/hydrocortisone ointment", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Psoriasis Plaque Disease Mild to Moderate on Elbows and Knees Sydney", "Medicine", "Dermatology", "topical calcipotriol combined with betamethasone dipropionate ointment applied once daily", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Scabies Infestation in Family Living in Remote Indigenous Community NT", "Microbiology", "Dermatology", "topical 5% permethrin cream or oral ivermectin with simultaneous treatment of all contacts", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),

    # 9. Pediatrics & Obstetrics - 10
    ("Antenatal Care Screening for Gestational Diabetes Mellitus Melbourne", "Obstetrics", "Pregnancy", "75g oral glucose tolerance test OGTT performed between 24 and 28 weeks gestation", "RANZCOG Clinical Guidelines", "https://ranzcog.edu.au"),
    ("Preeclampsia with Severe Features at 34 Weeks Gestation Sydney", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, blood pressure control with labetalol, and delivery", "RANZCOG Clinical Guidelines", "https://ranzcog.edu.au"),
    ("Ectopic Pregnancy Unruptured Stable Low hCG in Melbourne ED Clinic", "Obstetrics", "Pregnancy", "transvaginal ultrasound confirmation and single-dose intramuscular methotrexate protocol", "RANZCOG Clinical Guidelines", "https://ranzcog.edu.au"),
    ("Postpartum Hemorrhage Secondary to Uterine Atony in Delivery Suite Brisbane", "Obstetrics", "Pregnancy", "fundal uterine massage, intravenous oxytocin infusion, and intramuscular ergometrine", "RANZCOG Clinical Guidelines", "https://ranzcog.edu.au"),
    ("Neonatal Jaundice within First 24 Hours of Life in Sydney Hospital Ward", "Pediatrics", "Gastrointestinal", "urgent serum total and conjugated bilirubin measurement, Coombs test, and intensive phototherapy", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Viral Bronchiolitis in Three-Month-Old Infant with Tachypnea Perth", "Pediatrics", "Respiratory", "supportive care, small frequent feeds, minimal handling, and supplemental oxygen if SpO2 < 92%", "Royal Children's Hospital Melbourne Guidelines", "https://www.rch.org.au"),
    ("Croup Mild to Moderate in Two-Year-Old in Royal Children Hospital", "Pediatrics", "Respiratory", "single dose of oral dexamethasone 0.15 mg/kg or oral prednisolone 1 mg/kg", "Royal Children's Hospital Melbourne Guidelines", "https://www.rch.org.au"),
    ("Febrile Convulsion Simple First Occurrence in 18-Month-Old Infant Adelaide", "Pediatrics", "Nervous System", "reassurance, thorough examination to identify fever focus, and parent education on seizure safety", "Royal Children's Hospital Melbourne Guidelines", "https://www.rch.org.au"),
    ("Childhood Immunization National Schedule Twelve-Month Vaccines Sydney", "Pediatrics", "General Principles", "MMR vaccine, meningococcal ACWY vaccine, and pneumococcal conjugate booster", "Australian National Immunisation Program", "https://www.health.gov.au"),
    ("Intussusception Suspected in 8-Month-Old Infant with Intermittent Colic Brisbane", "Surgery", "Gastrointestinal", "ultrasound confirmation of target sign and pneumatic air-enema reduction by radiologist", "Royal Children's Hospital Melbourne Guidelines", "https://www.rch.org.au"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Episode Moderate in Australian General Practice Perth", "Psychiatry", "Behavioral Health", "Mental Health Treatment Plan referral for Medicare-subsidized CBT and oral SSRI sertraline", "RACGP Mental Health Guidelines", "https://www.racgp.org.au"),
    ("Generalized Anxiety Disorder Moderate Impairing Daily Function Melbourne", "Psychiatry", "Behavioral Health", "psychoeducation, cognitive behavioral therapy CBT, and oral SSRI escitalopram", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Acute Mania Bipolar I Disorder Involuntary Assessment in Victoria Clinic", "Psychiatry", "Behavioral Health", "assessment under Mental Health and Wellbeing Act and oral atypical antipsychotic with mood stabilizer", "Australian Therapeutic Guidelines (eTG)", "https://www.tg.org.au"),
    ("Anorexia Nervosa Severe in Adolescent with Medical Instability Sydney", "Psychiatry", "Behavioral Health", "urgent medical admission to pediatric ward for monitored slow nutritional rehabilitation", "Royal Children's Hospital Melbourne Guidelines", "https://www.rch.org.au"),
    ("Indigenous Health Cultural Safety and Gap Closing in Primary Care NT", "Ethics", "General Principles", "culturally safe holistic communication, Aboriginal Health Worker partnership, and PBS Co-payment", "RACGP Aboriginal and Torres Strait Islander Health Guidelines", "https://www.racgp.org.au"),
    ("Mandatory Reporting of Suspected Child Abuse in New South Wales Sydney", "Ethics", "General Principles", "mandatory notification to Child Protection Helpline and ensuring immediate physical safety", "Australian Medical Association Guidelines", "https://www.ama.com.au"),
    ("Medical Confidentiality Request by Employer Regarding Diagnosis Brisbane", "Ethics", "General Principles", "maintaining confidentiality and refusing disclosure without explicit signed patient consent", "Australian Privacy Principles (APP)", "https://www.oaic.gov.au"),
    ("Advance Care Directive and End-of-Life Palliative Goals of Care Adelaide", "Ethics", "General Principles", "honoring valid advance health directive and aligning medical goals with patient values", "Australian Commission on Safety and Quality in Health Care", "https://www.safetyandquality.gov.au"),
    ("Informed Consent for Elective Surgical Procedure in Competent Adult Perth", "Ethics", "General Principles", "explaining material risks, benefits, alternatives, and obtaining voluntary written consent", "Australian Medical Council Guidelines", "https://www.amc.org.au"),
    ("Fitness to Drive Assessment Commercial Driver with Obstructive Sleep Apnea Melbourne", "Ethics", "General Principles", "conditional license pending compliance with CPAP and specialist respiratory review", "Austroads Assessing Fitness to Drive Guidelines", "https://austroads.com.au")
]

MCCQE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute ST-Elevation Myocardial Infarction in Toronto General Hospital", "Medicine", "Cardiovascular", "immediate primary percutaneous coronary intervention PCI within 90 to 120 minutes of first contact", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Non-ST Elevation ACS High Risk in Montreal General Hospital ED", "Medicine", "Cardiovascular", "early invasive angiography, dual antiplatelet therapy, and therapeutic fondaparinux/enoxaparin", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Atrial Fibrillation Stroke Prevention CHADS-65 Canadian Algorithm Calgary", "Medicine", "Cardiovascular", "direct oral anticoagulant DOAC therapy if age 65 or older or CHADS2 risk factor present", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Heart Failure with Reduced Ejection Fraction Canadian Guidelines Vancouver", "Medicine", "Cardiovascular", "quadruple GDMT ARNI sacubitril-valsartan, beta-blocker, SGLT2 inhibitor, and MRA", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Hypertension Management Canadian Consensus Hypertension Canada Ottawa", "Medicine", "Cardiovascular", "first-line therapy with ACE inhibitor, ARB, dihydropyridine CCB, or thiazide/thiazide-like diuretic", "Hypertension Canada Guidelines", "https://hypertension.ca"),
    ("Infective Endocarditis Native Mitral Valve in Canadian Hospital Halifax", "Microbiology", "Cardiovascular", "drawing three sets of blood cultures prior to empiric bactericidal IV antimicrobial therapy", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Severe Peripheral Arterial Disease with Claudication at 50 Meters Edmonton", "Medicine", "Cardiovascular", "supervised exercise program, high-intensity statin, aspirin, and smoking cessation counseling", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Deep Vein Thrombosis Provoked Following Knee Arthroscopy Toronto", "Medicine", "Cardiovascular", "oral DOAC apixaban or rivaroxaban therapeutic anticoagulation for three months", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),
    ("Cardiac Syncope from Intermittent Third-Degree AV Block Montreal", "Medicine", "Cardiovascular", "urgent hospital admission, continuous telemetry monitoring, and dual-chamber pacemaker placement", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),
    ("Acute Pericarditis Initial Episode in Canadian Family Practice Calgary", "Medicine", "Cardiovascular", "high-dose oral ibuprofen 600 to 800 mg three times daily combined with colchicine", "Canadian Cardiovascular Society Guidelines", "https://ccs.ca"),

    # 2. Respiratory - 10
    ("Asthma Acute Exacerbation Canadian Thoracic Society Guidelines Vancouver", "Medicine", "Respiratory", "frequent inhaled short-acting beta-2 agonist with ipratropium and systemic oral prednisone", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("COPD Acute Exacerbation with Increased Dyspnea and Purulence Ottawa", "Medicine", "Respiratory", "inhaled bronchodilators, oral prednisone 50 mg daily for five days, and targeted antibiotics", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Community-Acquired Pneumonia Outpatient Management in Adult Halifax", "Microbiology", "Respiratory", "oral amoxicillin high-dose or combination amoxicillin-clavulanate plus azithromycin/doxycycline", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Pulmonary Embolism Suspected Canadian Emergency Department Toronto", "Medicine", "Respiratory", "pre-test probability assessment with Wells score followed by CT pulmonary angiogram CTPA", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),
    ("Spontaneous Primary Pneumothorax Moderate Size in Young Smoker Montreal", "Surgery", "Respiratory", "simple needle aspiration or small-bore pigtail catheter thoracostomy drainage", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Solitary Pulmonary Nodule Ten Millimeter Spiculated on Low-Dose CT Calgary", "Surgery", "Respiratory", "urgent multidisciplinary respirology-thoracic surgery referral for PET-CT and biopsy", "Canadian Association of Thoracic Surgeons Guidelines", "https://thoracicsurgery.ca"),
    ("Pleural Effusion Unilateral Exudative in Toronto Hospital Ward", "Medicine", "Respiratory", "diagnostic thoracentesis with pleural fluid LDH, protein, cell count, and cytology", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Obstructive Sleep Apnea with Severe Daytime Somnolence in Calgary Clinic", "Medicine", "Respiratory", "level 1 overnight laboratory polysomnography and auto-titrating CPAP therapy", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Idiopathic Pulmonary Fibrosis Presentation in 68-Year-Old Vancouver", "Medicine", "Respiratory", "high-resolution CT HRCT confirming UIP pattern and initiation of antifibrotic nintedanib", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Tuberculosis Pulmonary Active Cavitary Disease in Vancouver Clinic", "Microbiology", "Respiratory", "airborne isolation and standard four-drug regimen isoniazid, rifampin, pyrazinamide, ethambutol", "Canadian Tuberculosis Standards", "https://cts-sct.ca"),

    # 3. Gastrointestinal - 10
    ("Upper Gastrointestinal Bleeding from Bleeding Peptic Ulcer Montreal", "Medicine", "Gastrointestinal", "intravenous crystalloid resuscitation, IV proton pump inhibitor infusion, and gastroscopy", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Crohn Disease Active Moderate Ileocolonic Disease in Montreal Hospital", "Medicine", "Gastrointestinal", "oral budesonide induction followed by biologic anti-TNF or anti-IL-12/23 maintenance", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Ulcerative Colitis Proctitis Mild Flare in Canadian Primary Care Toronto", "Medicine", "Gastrointestinal", "topical 5-ASA mesalazine 1g suppository once daily at bedtime for four to six weeks", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Acute Appendicitis Confirmed by Low-Dose Abdominal CT in ED Calgary", "Surgery", "Gastrointestinal", "intravenous antibiotics and prompt laparoscopic appendectomy", "Canadian Association of General Surgeons Guidelines", "https://cags-accg.ca"),
    ("Acute Cholecystitis Calculous in Halifax Teaching Hospital Ward", "Surgery", "Gastrointestinal", "intravenous fluid resuscitation, broad-spectrum antibiotics, and early laparoscopic cholecystectomy", "Canadian Association of General Surgeons Guidelines", "https://cags-accg.ca"),
    ("Acute Diverticulitis Uncomplicated Left Lower Quadrant Pain in Clinic Ottawa", "Medicine", "Gastrointestinal", "clear liquid diet, oral analgesia, and expectant observation without routine antibiotics", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Celiac Disease Suspected in Adult with Recurrent Diarrhea and Anemia Vancouver", "Immunology", "Gastrointestinal", "serum anti-tTG IgA while on normal gluten-containing diet followed by confirmatory biopsy", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Cirrhosis with Ascites and Peripheral Edema in Edmonton Clinic Practice", "Medicine", "Gastrointestinal", "sodium-restricted diet 2g daily and combination oral spironolactone and furosemide", "Canadian Association for the Study of the Liver Guidelines", "https://liver.ca"),
    ("Colorectal Cancer Screening in Average-Risk 52-Year-Old Canadian Toronto", "Medicine", "Gastrointestinal", "fecal immunochemical test FIT every two years starting at age 50", "Canadian Task Force on Preventive Health Care", "https://canadiantaskforce.ca"),
    ("Clostridioides Difficile Infection Severe First Episode in Ottawa Hospital", "Microbiology", "Gastrointestinal", "oral fidaxomicin 200 mg twice daily for ten days or oral vancomycin 125 mg four times daily", "Association of Medical Microbiology and Infectious Disease Canada", "https://ammi.ca"),

    # 4. Renal & Genitourinary - 10
    ("Acute Kidney Injury Stage 2 from Pre-Renal Volume Depletion Montreal", "Medicine", "Renal", "stopping nephrotoxic drugs, aggressive isotonic fluid administration, and monitoring", "Canadian Society of Nephrology Guidelines", "https://csnscn.ca"),
    ("Diabetic Nephropathy with Progressive Albuminuria in Canadian Patient Calgary", "Medicine", "Renal", "SGLT2 inhibitor empagliflozin, ACE inhibitor ramipril, and non-steroidal MRA finerenone", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),
    ("Acute Cystitis Uncomplicated in Non-Pregnant Canadian Woman Vancouver", "Microbiology", "Renal", "oral nitrofurantoin 100 mg twice daily for five days or fosfomycin 3g single dose", "Canadian Association of Emergency Physicians Guidelines", "https://caep.ca"),
    ("Acute Pyelonephritis in Non-Pregnant Adult Female Halifax", "Microbiology", "Renal", "oral ciprofloxacin 500 mg twice daily for seven days after obtaining urine culture", "AMMI Canada Guidelines", "https://ammi.ca"),
    ("Benign Prostatic Hyperplasia Moderate LUTS in Primary Care Toronto", "Medicine", "Renal", "oral alpha-1 adrenergic antagonist tamsulosin 0.4 mg daily and lifestyle advice", "Canadian Urological Association Guidelines", "https://www.cua.org"),
    ("Ureteral Calculus Acute Renal Colic Five Millimeter Stone Edmonton", "Medicine", "Renal", "oral NSAID ketorolac or naproxen, medical expulsive therapy tamsulosin, and outpatient follow-up", "Canadian Urological Association Guidelines", "https://www.cua.org"),
    ("Gross Hematuria Asymptomatic in Sixty-Year-Old Canadian Ottawa", "Surgery", "Renal", "urgent urology referral for flexible cystoscopy and multiphasic CT urography", "Canadian Urological Association Guidelines", "https://www.cua.org"),
    ("Testicular Torsion in Seventeen-Year-Old Adolescent in ED Montreal", "Surgery", "Renal", "immediate emergency surgical scrotal exploration and bilateral orchiopexy", "Canadian Urological Association Guidelines", "https://www.cua.org"),
    ("Minimal Change Disease in Young Canadian Adult with Nephrotic Edema Calgary", "Medicine", "Renal", "oral high-dose prednisone 1 mg/kg daily for 8 to 16 weeks and nephrology referral", "Canadian Society of Nephrology Guidelines", "https://csnscn.ca"),
    ("Severe Hyperkalemia Potassium 6.7 with Peaked T Waves in ED Toronto", "Medicine", "Renal", "immediate intravenous calcium gluconate membrane stabilization followed by insulin-dextrose", "Canadian Association of Emergency Physicians Guidelines", "https://caep.ca"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Management Diabetes Canada Guidelines Vancouver", "Medicine", "Endocrine", "individualized lifestyle counseling, metformin initiation, and target HbA1c below 7.0%", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),
    ("Type 2 Diabetes with Clinical Atherosclerotic Cardiovascular Disease Ottawa", "Medicine", "Endocrine", "adding SGLT2 inhibitor or GLP-1 receptor agonist with proven cardiovascular benefit", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),
    ("Diabetic Ketoacidosis Protocol Management in Canadian ICU Halifax", "Medicine", "Endocrine", "aggressive isotonic saline hydration, continuous intravenous insulin 0.1 units/kg/hr, and KCl", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),
    ("Primary Hypothyroidism Initial Presentation with TSH 22 Edmonton", "Medicine", "Endocrine", "oral levothyroxine replacement therapy 1.6 mcg/kg daily titrated to normalize TSH", "Canadian Society of Endocrinology and Metabolism Guidelines", "https://endocrinology.ca"),
    ("Graves Disease Hyperthyroidism First Presentation in Family Medicine Toronto", "Medicine", "Endocrine", "oral methimazole antithyroid therapy combined with propranolol symptom control", "Canadian Society of Endocrinology and Metabolism Guidelines", "https://endocrinology.ca"),
    ("Primary Hyperparathyroidism with Hypercalcemia and Osteopenia Montreal", "Surgery", "Endocrine", "surgical referral for focused parathyroidectomy following sestamibi localization", "Canadian Society of Endocrinology and Metabolism Guidelines", "https://endocrinology.ca"),
    ("Addison Disease Primary Adrenal Insufficiency Maintenance Calgary", "Medicine", "Endocrine", "oral hydrocortisone in divided daily doses combined with oral fludrocortisone", "Canadian Society of Endocrinology and Metabolism Guidelines", "https://endocrinology.ca"),
    ("Cushing Syndrome Suspected Clinical Workup in Canadian Practice Vancouver", "Medicine", "Endocrine", "overnight 1 mg dexamethasone suppression test or 24-hour urinary free cortisol excretion", "Canadian Society of Endocrinology and Metabolism Guidelines", "https://endocrinology.ca"),
    ("Osteoporosis Management Osteoporosis Canada Guidelines Ottawa", "Medicine", "Endocrine", "oral alendronate or risedronate antiresorptive therapy, calcium, and vitamin D3", "Osteoporosis Canada Clinical Guidelines", "https://osteoporosis.ca"),
    ("Severe Obesity Canadian Adult Clinical Practice Guidelines Halifax", "Medicine", "Endocrine", "multicomponent lifestyle intervention, GLP-1 receptor agonist liraglutide/semaglutide, or bariatric surgery", "Obesity Canada Clinical Practice Guidelines", "https://obesitycanada.ca"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia in Canadian Male over Fifty Years Toronto", "Medicine", "Hematology", "diagnostic gastroscopy and colonoscopy to exclude occult gastrointestinal malignancy", "Canadian Association of Gastroenterology Guidelines", "https://www.cag-acg.org"),
    ("Vitamin B12 Deficiency with Subacute Combined Degeneration Montreal", "Medicine", "Hematology", "intramuscular cyanocobalamin 1000 mcg daily for one week then weekly then monthly", "Canadian Medical Association Guidelines", "https://www.cma.ca"),
    ("Immune Thrombocytopenia ITP in Adult with Platelets 14,000 Calgary", "Medicine", "Hematology", "oral dexamethasone 40 mg daily for four days or oral prednisone 1 mg/kg daily", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),
    ("Acute Myeloid Leukemia Suspected with Circulating Myeloblasts Vancouver", "Medicine", "Hematology", "urgent tertiary hematology referral for bone marrow aspiration, cytogenetics, and flow cytometry", "Canadian Hematology Society Guidelines", "https://canadianhematologysociety.org"),
    ("Hereditary Hemochromatosis Diagnosis and Management in Canada Ottawa", "Genetics", "Hematology", "HFE genetic testing and therapeutic phlebotomy to maintain serum ferritin under 100 mcg/L", "Canadian Association for the Study of the Liver Guidelines", "https://liver.ca"),
    ("Direct Oral Anticoagulant Reversal for Life-Threatening Bleed Halifax", "Pharmacology", "Hematology", "specific reversal agent idarucizumab for dabigatran or andexanet alfa/PCC for factor Xa inhibitors", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),
    ("Neutropenic Fever in Canadian Cancer Patient Post-Chemotherapy Edmonton", "Microbiology", "Hematology", "immediate intravenous piperacillin-tazobactam or cefepime within 60 minutes of arrival", "AMMI Canada Guidelines", "https://ammi.ca"),
    ("Multiple Myeloma Presentation with CRAB Features in Ottawa Clinic", "Medicine", "Hematology", "serum protein electrophoresis, serum free light chains, skeletal survey, and hematology review", "Canadian Hematology Society Guidelines", "https://canadianhematologysociety.org"),
    ("Sickle Cell Disease Vaso-Occlusive Pain Crisis in Toronto ED Ward", "Medicine", "Hematology", "rapid parenteral opioid analgesia within 30 minutes, hydration, and incentive spirometry", "Canadian Hemoglobinopathy Association Guidelines", "https://canhaem.org"),
    ("Heparin-Induced Thrombocytopenia HIT Type II Confirmation Montreal", "Pharmacology", "Hematology", "immediate discontinuation of all heparin, anti-PF4 testing, and argatroban anticoagulation", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke Canadian Stroke Best Practice Recommendations Calgary", "Medicine", "Nervous System", "intravenous alteplase/tenecteplase thrombolysis within 4.5 hours and endovascular thrombectomy assessment", "Canadian Stroke Best Practices", "https://www.strokebestpractices.ca"),
    ("Transient Ischemic Attack High Risk ABCD2 Score 6 in ED Vancouver", "Medicine", "Nervous System", "immediate dual antiplatelet therapy aspirin plus clopidogrel and urgent carotid imaging", "Canadian Stroke Best Practices", "https://www.strokebestpractices.ca"),
    ("First Unprovoked Seizure in Adult in Canadian Primary Care Ottawa", "Medicine", "Nervous System", "neurology specialist referral, EEG, MRI brain, and advice on driving suspension per provincial law", "Canadian Neurological Sciences Federation Guidelines", "https://cnsf.org"),
    ("Parkinson Disease Initial Therapy in Canadian Senior Halifax", "Medicine", "Nervous System", "levodopa-carbidopa therapy or dopamine agonist pramipexole and physiotherapy referral", "Canadian Guidelines on Parkinson Disease", "https://cnsf.org"),
    ("Multiple Sclerosis Presentation with Optic Neuritis in Montreal Clinic", "Medicine", "Nervous System", "high-dose intravenous methylprednisolone 1000 mg daily for three days and MRI brain", "Canadian Neurological Sciences Federation Guidelines", "https://cnsf.org"),
    ("Bacterial Meningitis Suspected in Canadian Emergency Room Edmonton", "Microbiology", "Nervous System", "immediate intravenous ceftriaxone combined with vancomycin and dexamethasone", "AMMI Canada Guidelines", "https://ammi.ca"),
    ("Giant Cell Arteritis Temporal Arteritis in 74-Year-Old Canadian Toronto", "Medicine", "Nervous System", "immediate high-dose oral prednisone 50 to 60 mg daily to prevent permanent visual loss", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Guillain-Barre Syndrome Symmetrical Ascending Weakness in ED Calgary", "Medicine", "Nervous System", "hospital admission, vital capacity tracking, and intravenous immunoglobulin IVIG course", "Canadian Neurological Sciences Federation Guidelines", "https://cnsf.org"),
    ("Migraine Acute Attack Management in Canadian Family Practice Vancouver", "Medicine", "Nervous System", "oral triptan almotriptan or eletriptan combined with naproxen sodium", "Canadian Headache Society Guidelines", "https://headachesociety.ca"),
    ("Normal Pressure Hydrocephalus with Gait Ataxia and Urinary Incontinence Ottawa", "Surgery", "Nervous System", "large-volume diagnostic lumbar puncture and neurosurgical evaluation for VP shunt", "Canadian Neurological Sciences Federation Guidelines", "https://cnsf.org"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Diagnosis Canadian Rheumatology Association Halifax", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug methotrexate combined with short-course steroid bridge", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Septic Arthritis Native Knee Joint in Canadian Emergency Room Montreal", "Microbiology", "Musculoskeletal", "urgent arthrocentesis with synovial fluid analysis and targeted intravenous antibiotics", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Acute Gouty Arthritis First MTP Joint in Canadian Clinic Edmonton", "Medicine", "Musculoskeletal", "oral NSAID naproxen or colchicine 1.2 mg followed by 0.6 mg one hour later", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Osteoarthritis of the Knee Conservative Management in Canada Calgary", "Medicine", "Musculoskeletal", "structured exercise, weight management, and oral acetaminophen or topical NSAIDs", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Polymyalgia Rheumatica Presentation with Shoulder Girdle Stiffness Vancouver", "Medicine", "Musculoskeletal", "oral prednisone 15 to 20 mg daily with prompt dramatic clinical improvement", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),
    ("Melanoma Suspected on Back of Canadian Patient Toronto", "Surgery", "Dermatology", "complete diagnostic excisional biopsy with 1 to 2 mm margins and histopathology", "Canadian Dermatology Association Guidelines", "https://dermatology.ca"),
    ("Basal Cell Carcinoma Nodular on Cheek of Canadian Farmer Ottawa", "Surgery", "Dermatology", "complete surgical excision with 4mm margins or Mohs micrographic surgery", "Canadian Dermatology Association Guidelines", "https://dermatology.ca"),
    ("Atopic Dermatitis Moderate in Child in Canadian Pediatric Clinic Halifax", "Medicine", "Dermatology", "liberal daily ceramide-based emollients and topical low-to-mid potency corticosteroids", "Canadian Dermatology Association Guidelines", "https://dermatology.ca"),
    ("Psoriasis Plaque Disease Mild to Moderate on Elbows and Scalp Montreal", "Medicine", "Dermatology", "topical combination of betamethasone dipropionate and calcipotriol applied once daily", "Canadian Dermatology Association Guidelines", "https://dermatology.ca"),
    ("Ankylosing Spondylitis with Inflammatory Back Pain in Young Canadian Calgary", "Medicine", "Musculoskeletal", "continuous oral NSAID therapy, physical therapy, and anti-TNF biologic if inadequate response", "Canadian Rheumatology Association Guidelines", "https://rheum.ca"),

    # 9. Pediatrics & Obstetrics - 10
    ("Gestational Diabetes Screening SOGC Clinical Guidelines Vancouver", "Obstetrics", "Pregnancy", "50g glucose challenge test GCT at 24 to 28 weeks followed by 75g OGTT if 7.8 to 11.0 mmol/L", "Society of Obstetricians and Gynaecologists of Canada (SOGC)", "https://sogc.org"),
    ("Preeclampsia with Severe Features SOGC Guidelines Toronto", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, labetalol, and delivery if >= 34 weeks", "SOGC Guidelines", "https://sogc.org"),
    ("Ectopic Pregnancy Unruptured Hemodynamically Stable SOGC Montreal", "Obstetrics", "Pregnancy", "transvaginal ultrasound and single-dose intramuscular methotrexate protocol", "SOGC Guidelines", "https://sogc.org"),
    ("Postpartum Hemorrhage Secondary to Uterine Atony in Canadian Hospital Calgary", "Obstetrics", "Pregnancy", "fundal uterine massage, intravenous oxytocin infusion, and intramuscular carboprost/ergonovine", "SOGC Guidelines", "https://sogc.org"),
    ("Neonatal Jaundice within First 24 Hours Canadian Paediatric Society Ottawa", "Pediatrics", "Gastrointestinal", "urgent total and direct bilirubin measurement, blood group Coombs test, and phototherapy", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Acute Viral Bronchiolitis in Four-Month-Old Canadian Paediatric Society Halifax", "Pediatrics", "Respiratory", "supportive care, gentle nasal suctioning, hydration, and avoiding routine bronchodilators/steroids", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Croup Mild to Moderate in Toddler in Canadian Emergency Department Edmonton", "Pediatrics", "Respiratory", "single oral dose of dexamethasone 0.15 mg/kg or 0.6 mg/kg and discharge reassurance", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Febrile Seizure Simple in Two-Year-Old Canadian Paediatric Society Vancouver", "Pediatrics", "Nervous System", "reassurance, thorough physical examination to identify focus, and education on seizure care", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Childhood Immunization Canadian Public Health Vaccination Schedule Toronto", "Pediatrics", "General Principles", "routine vaccination against rotavirus, DTaP-IPV-Hib, MMR, and varicella at recommended intervals", "Public Health Agency of Canada", "https://www.canada.ca"),
    ("Intussusception Suspected in Seven-Month-Old Canadian Infant Montreal", "Surgery", "Gastrointestinal", "abdominal ultrasound demonstration of target sign followed by pneumatic air-contrast enema reduction", "Canadian Paediatric Society Guidelines", "https://cps.ca"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Episode CANMAT Guidelines in Canadian Family Practice Calgary", "Psychiatry", "Behavioral Health", "first-line oral selective serotonin reuptake inhibitor escitalopram/sertraline and CBT", "Canadian Network for Mood and Anxiety Treatments (CANMAT)", "https://canmat.org"),
    ("Generalized Anxiety Disorder First-Line CANMAT Therapy Vancouver", "Psychiatry", "Behavioral Health", "evidence-based cognitive behavioral therapy CBT and oral SSRI or SNRI duloxetine/venlafaxine", "CANMAT Guidelines", "https://canmat.org"),
    ("Bipolar I Disorder Acute Manic Episode CANMAT Management Ottawa", "Psychiatry", "Behavioral Health", "oral lithium or divalproex combined with atypical antipsychotic quetiapine or aripiprazole", "CANMAT Guidelines", "https://canmat.org"),
    ("Anorexia Nervosa Severe in Canadian Adolescent in Specialized Unit Halifax", "Psychiatry", "Behavioral Health", "medical stabilization, structured nutritional refeeding, and family-based therapy FBT", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Medical Assistance in Dying MAID Eligibility Assessment in Canada Toronto", "Ethics", "General Principles", "verifying grievous and irremediable medical condition, voluntary request, and informed consent per federal law", "Canadian Medical Association MAID Guidelines", "https://www.cma.ca"),
    ("Indigenous Cultural Safety and Truth and Reconciliation in Canadian Healthcare Edmonton", "Ethics", "General Principles", "practicing culturally safe trauma-informed care and respecting Indigenous health autonomy", "Truth and Reconciliation Commission Calls to Action", "https://www.rcaanc-cirnac.gc.ca"),
    ("Substitute Decision Maker and Hierarchy of Consent in Ontario Montreal", "Ethics", "General Principles", "obtaining consent from legally designated substitute decision maker in accordance with provincial hierarchy", "College of Physicians and Surgeons of Ontario Guidelines", "https://www.cpso.on.ca"),
    ("Mandatory Child Protection Reporting to Children's Aid Society Calgary", "Ethics", "General Principles", "immediate statutory duty to report suspected child physical or sexual abuse to CAS", "Canadian Medical Protective Association (CMPA)", "https://www.cmpa-acpm.ca"),
    ("Physician-Patient Confidentiality and Public Safety Exceptions Vancouver", "Ethics", "General Principles", "breaching confidentiality only when necessary to prevent imminent serious bodily harm or death", "Canadian Medical Protective Association (CMPA)", "https://www.cmpa-acpm.ca"),
    ("Reporting Medically Unfit Drivers to Provincial Ministry of Transportation Ottawa", "Ethics", "General Principles", "statutory duty to report medical conditions impairing safe driving to provincial transportation authority", "Canadian Medical Association Driving Guidelines", "https://www.cma.ca")
]

def validate_topics(topics, exam_name):
    print(f"Validating {len(topics)} topics for {exam_name}...")
    assert len(topics) == 100, f"Expected 100 topics for {exam_name}, got {len(topics)}"
    seen_titles = set()
    for idx, item in enumerate(topics):
        title, subject, system, hallmark, ref_label, ref_url = item
        assert title not in seen_titles, f"Duplicate title in {exam_name} #{idx}: {title}"
        seen_titles.add(title)
        assert subject in TAXONOMY_SUBJECTS, f"Invalid subject '{subject}' in {exam_name} #{idx}"
        assert system in TAXONOMY_SYSTEMS, f"Invalid system '{system}' in {exam_name} #{idx}"
        assert len(hallmark) >= 20, f"Hallmark too short in {exam_name} #{idx}"
        assert ref_url.startswith("https://"), f"Invalid URL in {exam_name} #{idx}: {ref_url}"
    print(f"  All 100 topics for {exam_name} validated successfully!")

if __name__ == "__main__":
    validate_topics(PLAB_TOPICS, "PLAB / UKMLA")
    validate_topics(AMC_TOPICS, "AMC")
    validate_topics(MCCQE_TOPICS, "MCCQE")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega81_topics_b.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 81 Topics Part B\n\n")
        f.write(f"PLAB_TOPICS = {repr(PLAB_TOPICS)}\n\n")
        f.write(f"AMC_TOPICS = {repr(AMC_TOPICS)}\n\n")
        f.write(f"MCCQE_TOPICS = {repr(MCCQE_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
