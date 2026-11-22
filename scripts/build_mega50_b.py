"""
Topic builder for Mega-Batch 50 Part B:
- Batch 238: 100 HAAD / DHA topics (1,400 -> 1,500) [All 11 international tracks >= 1.5k!]
- Batch 239: 100 PLAB / UKMLA topics (1,500 -> 1,600)
- Batch 240: 100 AMC topics (1,500 -> 1,600)
"""

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

# 100 HAAD / DHA Topics
HAAD_DHA_RAW = [
    # General Medicine, Cardiology & Endocrinology (25)
    ("HAAD DHA Cardiology Non-ST Elevation ACS Invasive Risk Assessment GRACE Score", "Medicine", "Cardiovascular",
     "initiating aspirin, ticagrelor, and subcutaneous fondaparinux with coronary angiography within 24 hours for GRACE score > 140",
     "DHA Cardiology Clinical Guidelines", "https://www.dha.gov.ae/"),
    ("HAAD DHA Cardiology Heart Failure Reduced Ejection Fraction HFrEF Quadruple Medical Therapy", "Medicine", "Cardiovascular",
     "prescribing sacubitril/valsartan, dapagliflozin, bisoprolol, and eplerenone for patient with symptomatic HFrEF LVEF <= 35%",
     "DoH Abu Dhabi Cardiovascular Guidelines", "https://www.doh.gov.ae/"),
    ("HAAD DHA Cardiology Atrial Fibrillation Stroke Prevention CHA2DS2-VASc Direct Oral Anticoagulant", "Medicine", "Cardiovascular",
     "prescribing oral rivaroxaban 20 mg once daily with meal for non-valvular atrial fibrillation with CHA2DS2-VASc score >= 2",
     "DHA Clinical Practice Standards for Atrial Fibrillation", "https://www.dha.gov.ae/"),
    ("HAAD DHA Cardiology Hypertensive Urgency Asymptomatic Extreme BP Outpatient Oral Amlodipine", "Medicine", "Cardiovascular",
     "reinitiating or up-titrating oral amlodipine 5 to 10 mg daily with outpatient review in 48 hours while avoiding rapid IV reduction",
     "DoH Abu Dhabi Hypertension Management Guidelines", "https://www.doh.gov.ae/"),
    ("HAAD DHA Cardiology Post-PCI Dual Antiplatelet Therapy DAPT Stent Thrombosis Ticagrelor", "Medicine", "Cardiovascular",
     "maintaining dual antiplatelet therapy with aspirin 81 mg and ticagrelor 90 mg twice daily for minimum 12 months after drug-eluting stent",
     "UAE Unified Healthcare Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Cardiology Acute Aortic Dissection Stanford Type B Medical Therapy Esmolol Infusion", "Medicine", "Cardiovascular",
     "infusing IV esmolol targeting heart rate < 60 bpm and systolic BP 100 to 120 mm Hg prior to adding IV sodium nitroprusside",
     "DoH Abu Dhabi Acute Vascular Protocols", "https://www.doh.gov.ae/"),
    ("HAAD DHA Cardiology Infective Endocarditis Prophylaxis High-Risk Dental Extraction Amoxicillin", "Medicine", "Cardiovascular",
     "prescribing single oral dose of amoxicillin 2 g 30 to 60 minutes prior to procedure in patient with prosthetic cardiac valve",
     "DHA Clinical Practice Guidelines on Endocarditis", "https://www.dha.gov.ae/"),
    ("HAAD DHA Endocrinology Type 2 Diabetes Established Atherosclerotic Disease GLP-1 Receptor Agonist", "Medicine", "Endocrine",
     "initiating subcutaneous dulaglutide 1.5 mg once weekly to reduce major adverse cardiovascular events in established CAD",
     "Emirates Diabetes Society Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Endocrinology Diabetic Ketoacidosis DKA Normal Saline and Potassium Replacement Protocol", "Medicine", "Endocrine",
     "infusing IV 0.9% normal saline at 1,000 mL/h and verifying potassium > 3.3 mmol/L before commencing IV regular insulin 0.1 U/kg/h",
     "DHA Endocrine Emergency Standards", "https://www.dha.gov.ae/"),
    ("HAAD DHA Endocrinology Hyperosmolar Hyperglycemic State HHS Hydration Rate Serum Osmolality", "Medicine", "Endocrine",
     "administering cautious IV crystalloids to reduce calculated effective serum osmolality by 3 to 8 mOsm/kg/h to avoid cerebral edema",
     "DoH Abu Dhabi Acute Diabetes Care Protocols", "https://www.doh.gov.ae/"),
    ("HAAD DHA Endocrinology Secondary Hyperparathyroidism CKD Cinacalcet Calcimimetic Therapy", "Medicine", "Endocrine",
     "prescribing oral cinacalcet 30 mg daily titrated against intact PTH while monitoring serum calcium to prevent hypocalcemia",
     "UAE Society of Nephrology CKD-MBD Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Endocrinology Primary Hypothyroidism Subclinical Pregnancy TSH Threshold Levothyroxine", "Medicine", "Endocrine",
     "initiating oral levothyroxine in pregnant patient with serum TSH > 4.0 mIU/L or TSH > 2.5 mIU/L with positive anti-TPO antibodies",
     "DHA Antenatal Endocrine Guidelines", "https://www.dha.gov.ae/"),
    ("HAAD DHA Endocrinology Cushing Disease Pituitary ACTH Adenoma Transsphenoidal Resection", "Surgery", "Endocrine",
     "referring for pituitary dynamic contrast MRI and transsphenoidal adenomectomy as first-line curative therapy for Cushing disease",
     "DoH Abu Dhabi Pituitary Care Standards", "https://www.doh.gov.ae/"),
    ("HAAD DHA Endocrinology Adrenal Insufficiency Primary Addison Long-Term Hydrocortisone Fludrocortisone", "Medicine", "Endocrine",
     "prescribing divided daily oral hydrocortisone (15-25 mg) combined with morning oral fludrocortisone 0.05 to 0.1 mg",
     "Emirates Diabetes Society Adrenal Consensus", "https://mohap.gov.ae/"),
    ("HAAD DHA Gastroenterology Chronic Hepatitis B Viral Load Suppression Tenofovir Alafenamide", "Medicine", "Gastrointestinal",
     "initiating tenofovir alafenamide (TAF) 25 mg once daily with reduced risk of renal and bone mineral density toxicity",
     "Emirates Gastroenterology Society Viral Hepatitis Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Gastroenterology Gastroesophageal Reflux Disease GERD Alarm Features Endoscopy", "Medicine", "Gastrointestinal",
     "arranging prompt upper gastrointestinal endoscopy for new-onset dyspepsia with progressive dysphagia or unintentional weight loss",
     "DHA Gastroenterology Practice Standards", "https://www.dha.gov.ae/"),
    ("HAAD DHA Gastroenterology Helicobacter Pylori Triple vs Bismuth Quadruple Eradication", "Microbiology", "Gastrointestinal",
     "prescribing 14-day bismuth quadruple therapy (PPI, bismuth subcitrate, metronidazole, tetracycline) in region with high clarithromycin resistance",
     "UAE Unified Health Guidelines on H. Pylori", "https://mohap.gov.ae/"),
    ("HAAD DHA Gastroenterology Barrett Esophagus High-Grade Dysplasia Endoscopic Radiofrequency Ablation", "Surgery", "Gastrointestinal",
     "performing endoscopic mucosal resection of visible nodular lesions followed by circumferential radiofrequency ablation of flat Barrett mucosa",
     "DoH Abu Dhabi Gastrointestinal Oncology Standards", "https://www.doh.gov.ae/"),
    ("HAAD DHA Gastroenterology Acute Severe Colitis Truelove and Witts Criteria IV Hydrocortisone", "Medicine", "Gastrointestinal",
     "admitting to hospital for IV hydrocortisone 100 mg four times daily with surgical review and day-3 response assessment for infliximab",
     "Emirates Gastroenterology Society IBD Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Nephrology IgA Nephropathy Persistent Proteinuria SGLT2 Inhibitor and Budesonide", "Medicine", "Renal",
     "optimizing maximally tolerated ACE inhibitor/ARB, adding dapagliflozin, and considering targeted-release oral budesonide for proteinuria > 1 g/day",
     "UAE Society of Nephrology Glomerular Disease Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Nephrology Rhabdomyolysis Acute Kidney Injury Vigorous Saline Hydration Target Urine", "Medicine", "Renal",
     "infusing IV isotonic saline at 400 to 500 mL/h targeting urine output >= 200 to 300 mL/h to prevent intratubular myoglobin cast precipitation",
     "DoH Abu Dhabi Nephrology and Critical Care Standards", "https://www.doh.gov.ae/"),
    ("HAAD DHA Respiratory Asthma Step 3 GINA Low-Dose Inhaled Corticosteroid Formoterol SMART Regimen", "Medicine", "Respiratory",
     "prescribing low-dose budesonide/formoterol maintenance and reliever therapy (MART) as preferred single inhaler regimen",
     "Emirates Thoracic Society Asthma Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Respiratory Idiopathic Pulmonary Fibrosis High-Resolution CT Nintedanib Antifibrotic", "Medicine", "Respiratory",
     "initiating oral nintedanib 150 mg twice daily with hepatic enzyme monitoring to slow disease progression in confirmed IPF",
     "DHA Respiratory Specialty Guidance", "https://www.dha.gov.ae/"),
    ("HAAD DHA Respiratory Community-Acquired Pneumonia Outpatient Amoxicillin-Clavulanate and Azithromycin", "Medicine", "Respiratory",
     "prescribing oral amoxicillin-clavulanate 1 g twice daily combined with azithromycin 500 mg daily for outpatients with chronic comorbidities",
     "UAE National Antimicrobial Guidelines", "https://mohap.gov.ae/"),
    ("HAAD DHA Respiratory Pulmonary Thromboembolism Intermediate-High Risk Anticoagulation Low Molecular Weight Heparin", "Medicine", "Respiratory",
     "initiating therapeutic subcutaneous enoxaparin 1 mg/kg twice daily with continuous hemodynamic monitoring in submassive PE",
     "DoH Abu Dhabi Venous Thromboembolism Guidance", "https://www.doh.gov.ae/")
]
"""
PLAB and AMC topics will be appended via helper script.
"""
print("HAAD/DHA base ready.")
