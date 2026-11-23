"""
Topic Generator for Mega-Batch 79 - Part A
Tracks:
- Batch 381: 100 HAAD / DHA (UAE) topics (2,700 -> 2,800) [HISTORIC: ALL 11 INTERNATIONAL TRACKS AT 2,800 COMPLETE!]
- Batch 382: 100 PLAB / UKMLA (UK) topics (2,800 -> 2,900) [2.9k Wave Launched!]
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

HAAD_DHA_TOPICS = [
    # 1. Cardiovascular - 10
    ("Metabolic Syndrome with Atherosclerotic CAD in UAE Resident", "Medicine", "Cardiovascular", "high-intensity statin atorvastatin, lifestyle modification, and targeted ACE inhibitor", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Non-ST Elevation Myocardial Infarction NSTEMI High Risk", "Medicine", "Cardiovascular", "early invasive coronary angiography within 24 hours, dual antiplatelet therapy, and heparin", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Heart Failure with Reduced Ejection Fraction HFrEF Stage C", "Medicine", "Cardiovascular", "quadruple guideline-directed medical therapy ARNI, beta-blocker, MRA, and SGLT2 inhibitor", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Paroxysmal Atrial Fibrillation with High CHA2DS2-VASc Score", "Medicine", "Cardiovascular", "direct oral anticoagulant apixaban or rivaroxaban and beta-blocker rate control", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Hypertrophic Cardiomyopathy with Left Ventricular Outflow Obstruction", "Medicine", "Cardiovascular", "oral beta-blocker monotherapy or mavacamten and avoidance of vasodilators/diuretics", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Aortic Stenosis Severe Symptomatic with Syncope in Elderly Patient", "Surgery", "Cardiovascular", "transcatheter aortic valve implantation TAVI or surgical aortic valve replacement", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Hypertensive Emergency with Acute Pulmonary Edema", "Medicine", "Cardiovascular", "intravenous nitroglycerin infusion, IV loop diuretic, and non-invasive ventilation", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Acute Pericarditis Idiopathic Post-Viral Presentation", "Medicine", "Cardiovascular", "high-dose oral ibuprofen combined with oral colchicine for three months", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Deep Vein Thrombosis Iliofemoral Unprovoked", "Medicine", "Cardiovascular", "therapeutic oral direct oral anticoagulant DOAC therapy for at least three to six months", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Submassive Pulmonary Embolism with Right Ventricular Strain", "Medicine", "Cardiovascular", "therapeutic weight-adjusted low-molecular-weight heparin and close hemodynamic monitoring", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 2. Respiratory - 10
    ("Middle East Respiratory Syndrome Coronavirus MERS-CoV Severe", "Microbiology", "Respiratory", "strict airborne isolation, supportive care, and RT-PCR diagnostic confirmation", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Acute Severe Asthma Exacerbation in Adult", "Medicine", "Respiratory", "nebulized salbutamol and ipratropium, systemic oral prednisolone, and supplemental oxygen", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("COPD Acute Exacerbation Anthonisen Type 1", "Medicine", "Respiratory", "short-acting bronchodilators, short-course systemic corticosteroid, and oral amoxicillin-clavulanate", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Community-Acquired Pneumonia Severe CURB-65 Score 3", "Medicine", "Respiratory", "intravenous ceftriaxone combined with intravenous azithromycin and urgent hospital admission", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Latent Tuberculosis Infection Screening in Expatriate Worker", "Microbiology", "Respiratory", "interferon-gamma release assay IGRA followed by four months of daily oral rifampin", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Spontaneous Primary Pneumothorax Moderate Size Symptomatic", "Surgery", "Respiratory", "simple needle aspiration or small-bore chest tube thoracostomy insertion", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Pleural Effusion Exudative from Parapneumonic Process", "Medicine", "Respiratory", "diagnostic thoracentesis with pleural fluid analysis and tube drainage if pH under 7.2", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Obstructive Sleep Apnea Severe with Daytime Somnolence", "Medicine", "Respiratory", "polysomnography confirmation and continuous positive airway pressure CPAP titration", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Bronchiectasis with Chronic Pseudomonas Colonization", "Microbiology", "Respiratory", "regular chest physiotherapy, sputum clearance, and inhaled colistin or ciprofloxacin", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Solitary Pulmonary Nodule Indeterminate Eight Millimeter Size", "Medicine", "Respiratory", "high-resolution contrast-enhanced chest CT scan and multidisciplinary nodule review", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 3. Gastrointestinal - 10
    ("Metabolic Dysfunction-Associated Steatohepatitis MASH with Fibrosis", "Medicine", "Gastrointestinal", "structured lifestyle weight reduction, pioglitazone or GLP-1 receptor agonist, and resmetirom", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Peptic Ulcer Bleeding Forrest IIa Non-Bleeding Visible Vessel", "Surgery", "Gastrointestinal", "endoscopic dual therapy hemoclipping and thermal coagulation plus high-dose IV omeprazole", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Ulcerative Colitis Acute Severe Presentation Truelove-Witts Criteria", "Medicine", "Gastrointestinal", "intravenous hydrocortisone, close surgical co-monitoring, and rescue infliximab if refractory", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Crohn Disease Ileocecal Inflammatory Phenotype", "Medicine", "Gastrointestinal", "induction with oral budesonide followed by maintenance with subcutaneous anti-TNF biologic", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Calculous Cholecystitis Mild to Moderate Grade", "Surgery", "Gastrointestinal", "intravenous antibiotics, fluid resuscitation, and early laparoscopic cholecystectomy within 72 hours", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Acute Gallstone Pancreatitis with Cholangitis", "Surgery", "Gastrointestinal", "urgent endoscopic retrograde cholangiopancreatography ERCP with sphincterotomy within 24 hours", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Chronic Hepatitis B Infection High Viral Load HBeAg Positive", "Microbiology", "Gastrointestinal", "oral tenofovir disoproxil or entecavir long-term antiviral monotherapy", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Cirrhosis with Spontaneous Bacterial Peritonitis SBP", "Microbiology", "Gastrointestinal", "intravenous cefotaxime or ceftriaxone combined with intravenous albumin infusion", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Celiac Disease Adult Presentation with Malabsorption and Diarrhea", "Medicine", "Gastrointestinal", "strict life-long gluten-free diet and nutritional micronutrient replenishment", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Esophageal Achalasia Presentation with Dysphagia to Solids and Liquids", "Surgery", "Gastrointestinal", "pneumatic balloon dilatation, peroral endoscopic myotomy POEM, or laparoscopic Heller myotomy", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 4. Renal & Genitourinary - 10
    ("Diabetic Kidney Disease Stage 3 with Persistent Macroalbuminuria", "Medicine", "Renal", "SGLT2 inhibitor dapagliflozin, ACE inhibitor ramipril, and non-steroidal MRA finerenone", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Kidney Injury KDIGO Stage 2 Secondary to Dehydration and NSAIDs", "Medicine", "Renal", "cessation of nephrotoxic drugs, intravenous isotonic saline hydration, and monitoring", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Nephrotic Syndrome Adult Minimal Change Disease", "Medicine", "Renal", "oral high-dose prednisolone therapy for 8 to 16 weeks and loop diuretics for edema", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("IgA Nephropathy with Persistent Proteinuria Exceeding One Gram Daily", "Medicine", "Renal", "optimized maximally tolerated RAS blockade and targeted oral budesonide formulation", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Renal Colic Acute Secondary to Six Millimeter Ureteral Calculus", "Surgery", "Renal", "oral NSAID analgesia, medical expulsive therapy tamsulosin, or urgent ureteroscopy if refractory", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Acute Pyelonephritis Uncomplicated in Young Non-Pregnant Female", "Microbiology", "Renal", "oral ciprofloxacin or oral cefpodoxime for 7 to 10 days after urine culture collection", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Autosomal Dominant Polycystic Kidney Disease Rapidly Progressing", "Genetics", "Renal", "vasopressin V2 receptor antagonist tolvaptan, aggressive blood pressure control, and high water intake", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Benign Prostatic Hyperplasia with Moderate LUTS and Enlarged Gland", "Surgery", "Renal", "combination therapy with alpha-1 blocker tamsulosin and 5-alpha reductase inhibitor finasteride", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Urinary Bladder Cancer Non-Muscle Invasive High-Grade T1", "Surgery", "Renal", "transurethral resection of bladder tumor TURBT followed by intravesical BCG immunotherapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Severe Hyperkalemia Potassium 6.8 with Peaked T Waves", "Medicine", "Renal", "immediate intravenous calcium gluconate membrane stabilization followed by insulin-glucose", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 5. Endocrine & Metabolic - 10
    ("Type 2 Diabetes Mellitus Uncontrolled HbA1c 9.5% with Obesity", "Medicine", "Endocrine", "metformin combined with dual GIP/GLP-1 receptor agonist tirzepatide and lifestyle", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Diabetic Ketoacidosis DKA Moderate in Adult Type 1 Diabetic", "Medicine", "Endocrine", "intravenous isotonic fluid resuscitation, continuous regular insulin infusion, and potassium repletion", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Hyperosmolar Hyperglycemic State HHS with Severe Dehydration", "Medicine", "Endocrine", "aggressive isotonic crystalloid rehydration, electrolyte correction, and low-dose insulin", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Graves Disease Hyperthyroidism Initial Clinical Presentation", "Medicine", "Endocrine", "oral methimazole antithyroid therapy combined with propranolol symptom control", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Primary Hypothyroidism Symptomatic with Elevated TSH 18", "Medicine", "Endocrine", "oral levothyroxine replacement therapy titrated to achieve euthyroid TSH range", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Primary Hyperparathyroidism with Hypercalcemia and Nephrolithiasis", "Surgery", "Endocrine", "focused minimally invasive parathyroidectomy after sestamibi scan localization", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Cushing Disease Secondary to ACTH-Secreting Pituitary Microadenoma", "Surgery", "Endocrine", "transsphenoidal surgical resection of pituitary adenoma by experienced neurosurgeon", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Primary Adrenal Insufficiency Addison Disease Acute Presentation", "Medicine", "Endocrine", "immediate high-dose intravenous hydrocortisone, normal saline infusion, and fludrocortisone maintenance", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Papillary Thyroid Carcinoma Low-Risk 1.5cm Nodule Bethesda VI", "Surgery", "Endocrine", "total thyroidectomy or thyroid lobectomy followed by levothyroxine TSH suppression", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Severe Vitamin D Deficiency with Secondary Hyperparathyroidism", "Biochemistry", "Endocrine", "oral cholecalciferol 50,000 IU weekly for eight weeks followed by daily maintenance", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 6. Hematology - 10
    ("Thalassemia Major Beta with Transfusion-Dependent Anemia in Child", "Genetics", "Hematology", "regular packed red cell transfusions and oral iron chelation deferasirox", "UAE National Thalassemia Guidelines", "https://mohap.gov.ae"),
    ("Sickle Cell Disease Vaso-Occlusive Pain Crisis in Adult", "Medicine", "Hematology", "rapid parenteral opioid analgesia, intravenous hydration, and hydroxyurea maintenance", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Iron Deficiency Anemia Severe Secondary to Menorrhagia", "Medicine", "Hematology", "intravenous iron carboxymaltose infusion and gynecological evaluation", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Vitamin B12 Deficiency Macrocytic Anemia with Neuropathy", "Medicine", "Hematology", "intramuscular cyanocobalamin replacement injections and sensory monitoring", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Immune Thrombocytopenia ITP Platelets 12,000 with Mucosal Bleeding", "Medicine", "Hematology", "oral high-dose dexamethasone or prednisone and intravenous immunoglobulin IVIG", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Thrombotic Thrombocytopenic Purpura TTP Presentation", "Medicine", "Hematology", "urgent therapeutic plasma exchange TPE combined with systemic glucocorticoids and caplacizumab", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Chronic Myeloid Leukemia CML BCR-ABL1 Positive Chronic Phase", "Pharmacology", "Hematology", "oral second-generation tyrosine kinase inhibitor dasatinib or nilotinib", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Multiple Myeloma Newly Diagnosed Transplant-Eligible", "Medicine", "Hematology", "quadruplet induction daratumumab, bortezomib, lenalidomide, and dexamethasone D-VRd", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Heparin-Induced Thrombocytopenia HIT Type II Confirmation", "Pharmacology", "Hematology", "immediate cessation of all heparin and initiation of non-heparin anticoagulant argatroban", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Disseminated Intravascular Coagulation DIC from Severe Sepsis", "Pathology", "Hematology", "aggressive antimicrobial treatment of underlying infection and targeted blood component therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within Three Hours of Onset", "Medicine", "Nervous System", "intravenous alteplase or tenecteplase thrombolysis and endovascular thrombectomy assessment", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Subarachnoid Hemorrhage Fisher Grade 3 Hunt-Hess II", "Surgery", "Nervous System", "digital subtraction angiography with endovascular coil embolization and nimodipine", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Status Epilepticus Refractory to First-Line Benzodiazepines", "Medicine", "Nervous System", "intravenous levetiracetam or fosphenytoin infusion and intensive airway support", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Parkinson Disease with Motor Fluctuations and Wearing-Off", "Pharmacology", "Nervous System", "fractionating levodopa doses, adding entacapone COMT inhibitor, or dopamine agonist", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Multiple Sclerosis Relapsing-Remitting Acute Exacerbation", "Medicine", "Nervous System", "intravenous high-dose methylprednisolone 1 gram daily for three to five days", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Myasthenia Gravis with Impending Respiratory Crisis", "Medicine", "Nervous System", "urgent therapeutic plasma exchange or intravenous immunoglobulin and ICU admission", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Guillain-Barre Syndrome with Progressive Ascending Weakness", "Medicine", "Nervous System", "intravenous immunoglobulin IVIG 2 g/kg over five days and respiratory vital capacity tracking", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Migraine Headache Episodic with Frequent Disabling Attacks", "Medicine", "Nervous System", "prophylactic oral propranolol, topiramate, or subcutaneous CGRP antagonist erenumab", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Normal Pressure Hydrocephalus with Classic Hakim-Adams Triad", "Surgery", "Nervous System", "high-volume lumbar puncture tap test followed by ventriculoperitoneal shunt placement", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Temporal Lobe Epilepsy with Drug-Resistant Mesial Temporal Sclerosis", "Surgery", "Nervous System", "video-EEG monitoring and evaluation for anterior temporal lobectomy surgical resection", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Active Seropositive Presentation", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug methotrexate combined with short-course steroid bridge", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Systemic Lupus Erythematosus SLE with Active Proliferative Lupus Nephritis", "Medicine", "Renal", "intravenous pulse methylprednisolone combined with mycophenolate mofetil or cyclophosphamide", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Ankylosing Spondylitis HLA-B27 Positive with Axial Symptoms", "Medicine", "Musculoskeletal", "regular physical therapy and continuous oral NSAID therapy followed by anti-TNF biologic", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Gouty Arthritis First MTP Joint Podagra", "Medicine", "Musculoskeletal", "oral NSAID naproxen or low-dose colchicine and postponing urate-lowering changes", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Septic Arthritis Native Knee Joint Presentation", "Microbiology", "Musculoskeletal", "immediate arthrocentesis with synovial fluid analysis and targeted intravenous antibiotics", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Osteoporosis Severe with T-score Minus 3.2 and Vertebral Fracture", "Medicine", "Musculoskeletal", "bone anabolic therapy subcutaneous teriparatide or romosozumab followed by antiresorptive", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Psoriasis Vulgaris Moderate to Severe Plaque Disease", "Medicine", "Dermatology", "IL-17 inhibitor secukinumab or IL-23 inhibitor guselkumab targeted biologic therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Atopic Dermatitis Moderate to Severe Refractory to Topical Steroids", "Medicine", "Dermatology", "subcutaneous dupilumab IL-4/IL-13 receptor antagonist and liberal emollient application", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Stevens-Johnson Syndrome Toxic Epidermal Necrolysis Overlap", "Medicine", "Dermatology", "immediate withdrawal of offending medication, transfer to specialized burn unit, and IVIG", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Malignant Melanoma Breslow Depth 1.8mm Non-Ulcerated", "Surgery", "Dermatology", "wide local excision with two-centimeter margins and sentinel lymph node biopsy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 9. Pediatrics & Obstetrics - 10
    ("Gestational Diabetes Mellitus GDM Diagnosed at 26 Weeks", "Obstetrics", "Pregnancy", "nutritional medical counseling, home glucose monitoring, and insulin if above targets", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Severe Preeclampsia at 34 Weeks Gestation with Headache", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, labetalol, and planned delivery", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Ectopic Pregnancy Unruptured Hemodynamically Stable Low hCG", "Obstetrics", "Pregnancy", "single-dose intramuscular methotrexate protocol with serial beta-hCG monitoring", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Premature Rupture of Membranes PROM at 32 Weeks Gestation", "Obstetrics", "Pregnancy", "intramuscular betamethasone course, latency oral erythromycin/ampicillin, and expectant care", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Postpartum Hemorrhage Secondary to Genital Tract Laceration", "Obstetrics", "Pregnancy", "direct surgical repair of cervical/vaginal laceration under adequate visualization and anesthesia", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Neonatal Respiratory Distress Syndrome RDS in Preterm Infant", "Pediatrics", "Respiratory", "early nasal CPAP, endotracheal natural surfactant administration, and thermal support", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Viral Croup Mild to Moderate in Two-Year-Old", "Pediatrics", "Respiratory", "single dose of oral dexamethasone 0.15 to 0.6 mg/kg and parental calm reassurance", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Febrile Neutropenia in Pediatric Oncology Patient", "Pediatrics", "Hematology", "immediate broad-spectrum anti-pseudomonal beta-lactam cefepime or piperacillin-tazobactam", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Kawasaki Disease Complete Diagnostic Criteria at Day Six of Fever", "Pediatrics", "Cardiovascular", "single high-dose intravenous immunoglobulin IVIG 2 g/kg and high-dose oral aspirin", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Type 1 Diabetes Mellitus New Onset in Seven-Year-Old Child", "Pediatrics", "Endocrine", "multiple daily insulin injections or insulin pump therapy, diabetic education, and CGM", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Major Depressive Disorder Severe with Psychotic Features", "Psychiatry", "Behavioral Health", "combination atypical antipsychotic and antidepressant therapy or electroconvulsive therapy ECT", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Bipolar I Disorder Acute Manic Episode with Grandiosity", "Psychiatry", "Behavioral Health", "oral mood stabilizer lithium or valproate combined with oral atypical antipsychotic", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Generalized Anxiety Disorder Moderate Impairing Daily Work", "Psychiatry", "Behavioral Health", "evidence-based cognitive behavioral therapy CBT combined with oral SSRI escitalopram", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Schizophrenia First Episode Psychosis in Young Adult", "Psychiatry", "Behavioral Health", "oral atypical antipsychotic risperidone or aripiprazole and psychosocial rehabilitation", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Premarital Screening Mandatory in UAE Sickle Cell Hemoglobinopathy", "Genetics", "General Principles", "genetic counseling regarding reproductive risks, partner screening, and preimplantation options", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Informed Consent for Elective Bariatric Surgery in UAE", "Ethics", "General Principles", "multidisciplinary comprehensive counseling on dietary changes, surgical risks, and written consent", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Medical Confidentiality and Sharing Patient Records with Employer", "Ethics", "General Principles", "strict refusal to disclose protected medical information without explicit signed consent", "UAE Federal Medical Liability Law", "https://mohap.gov.ae"),
    ("End-of-Life DNR Directives under UAE Federal Law", "Ethics", "General Principles", "multidisciplinary documentation of terminal futility and adherence to UAE DNR legislation", "UAE Federal Medical Liability Law", "https://mohap.gov.ae"),
    ("Cardiovascular Primary Prevention National Screening Program in UAE", "Medicine", "General Principles", "screening blood pressure, fasting lipids, HbA1c, and calculation of atherosclerotic risk", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Colorectal Cancer National Screening Colonoscopy at Age Forty", "Medicine", "Gastrointestinal", "screening colonoscopy every ten years starting at age 40 for average-risk individuals", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae")
]

PLAB_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute Coronary Syndrome STEMI Emergency Presentation", "Medicine", "Cardiovascular", "immediate primary percutaneous coronary intervention PCI within 120 minutes of diagnosis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Stable Angina Pectoris Refractory to First-Line Beta-Blocker", "Medicine", "Cardiovascular", "adding dihydropyridine calcium channel blocker amlodipine or long-acting nitrate", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Atrial Fibrillation Acute Onset Hemodynamically Unstable", "Medicine", "Cardiovascular", "emergency synchronized electrical DC cardioversion under sedation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Heart Failure NYHA Class III with EF 30%", "Medicine", "Cardiovascular", "sacubitril-valsartan, bisoprolol, spironolactone, and dapagliflozin quadruple therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hypertension Stage 2 in Type 2 Diabetic Patient", "Medicine", "Cardiovascular", "angiotensin-converting enzyme inhibitor ACEi ramipril titrated to target below 130/80", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Infective Endocarditis on Native Aortic Valve", "Microbiology", "Cardiovascular", "taking three sets of blood cultures from separate sites prior to empiric IV antibiotics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Thoracic Aortic Dissection Type B Uncomplicated", "Medicine", "Cardiovascular", "intravenous labetalol infusion targeting systolic BP 100 to 120 and close ICU monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Severe Peripheral Arterial Disease with Critical Limb Ischemia", "Surgery", "Cardiovascular", "urgent vascular surgical referral for endovascular revascularization or bypass surgery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cardiac Arrest with Ventricular Fibrillation ALS Protocol", "Medicine", "Cardiovascular", "immediate unsynchronized defibrillation shock 200J followed by 2 minutes CPR", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Deep Vein Thrombosis Provoked Following Long-Haul Flight", "Medicine", "Cardiovascular", "direct oral anticoagulant apixaban or rivaroxaban for three months duration", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 2. Respiratory - 10
    ("Suspected Pulmonary Embolism with High Wells Score", "Medicine", "Respiratory", "immediate therapeutic anticoagulation and urgent CT pulmonary angiogram CTPA", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Exacerbation of Asthma in NHS Emergency Department", "Medicine", "Respiratory", "back-to-back salbutamol nebulizers with ipratropium, oral prednisolone, and oxygen", "BTS/SIGN British Guideline on Asthma Management", "https://www.brit-thoracic.org.uk"),
    ("Acute Exacerbation of COPD with Severe Respiratory Acidosis", "Medicine", "Respiratory", "controlled oxygen therapy, bronchodilators, and non-invasive ventilation NIV", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Community-Acquired Pneumonia Moderate Severity CURB-65 Score 2", "Medicine", "Respiratory", "hospital admission and oral or IV amoxicillin combined with clarithromycin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Lung Cancer with Two-Week Wait Referral Criteria", "Medicine", "Respiratory", "urgent two-week wait fast-track referral for contrast-enhanced chest CT scan", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Idiopathic Pulmonary Fibrosis IPF Presentation with Basal Crackles", "Medicine", "Respiratory", "high-resolution CT HRCT demonstrating UIP pattern and antifibrotic pirfenidone", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Pleural Effusion Unilateral Exudative with Suspected Malignancy", "Medicine", "Respiratory", "diagnostic thoracic ultrasound-guided thoracentesis and pleural fluid cytology", "BTS Pleural Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Spontaneous Pneumothorax Large Over Two Centimeters in Stable Patient", "Surgery", "Respiratory", "simple needle aspiration with 16-18G cannula followed by intercostal drain if failed", "BTS Pleural Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Bronchiectasis with Frequent Bacterial Exacerbations", "Microbiology", "Respiratory", "regular chest physiotherapy, sputum culture-directed antibiotics, and long-term azithromycin", "BTS Bronchiectasis Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Sarcoidosis Stage II with Bilateral Hilar Lymphadenopathy", "Medicine", "Respiratory", "clinical surveillance for asymptomatic non-progressive disease or oral prednisolone", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 3. Gastrointestinal - 10
    ("Acute Upper Gastrointestinal Bleeding Rockall Score High", "Medicine", "Gastrointestinal", "urgent therapeutic upper endoscopy within 24 hours following hemodynamic resuscitation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Crohn Disease Active Ileal Exacerbation in Young Adult", "Medicine", "Gastrointestinal", "systemic oral prednisolone course and consideration of azathioprine or biologics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ulcerative Colitis Proctosigmoiditis Mild to Moderate Flare", "Medicine", "Gastrointestinal", "topical rectal 5-aminosalicylate mesalazine suppository or enema combined with oral mesalazine", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Appendicitis Confirmed on Clinical and Ultrasound Findings", "Surgery", "Gastrointestinal", "intravenous antibiotics and prompt laparoscopic appendicectomy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Diverticulitis Uncomplicated Hinchey Stage Ia", "Medicine", "Gastrointestinal", "oral analgesia, clear fluid diet, and watchful waiting without routine antibiotics", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Coeliac Disease Presentation with Iron Deficiency and Lethargy", "Immunology", "Gastrointestinal", "serological anti-tissue transglutaminase tTG IgA and duodenal biopsy confirmation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Gastroesophageal Reflux Disease GERD Refractory to Once-Daily PPI", "Medicine", "Gastrointestinal", "optimizing PPI to twice-daily dosing before meals and lifestyle modification", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Alcoholic Liver Disease Decompensated with Jaundice and Ascites", "Medicine", "Gastrointestinal", "complete alcohol abstinence, nutrition support, spironolactone, and diagnostic paracentesis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Biliary Cholangitis PBC Positive Anti-Mitochondrial Antibodies", "Medicine", "Gastrointestinal", "long-term oral ursodeoxycholic acid UDCA 13 to 15 mg/kg daily therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Colorectal Cancer Suspected with Iron Deficiency Anemia in Male", "Surgery", "Gastrointestinal", "two-week wait urgent referral for diagnostic colonoscopy and FIT testing", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Kidney Injury Stage 3 Secondary to Sepsis and ACE Inhibitor", "Medicine", "Renal", "stopping ACE inhibitor, aggressive crystalloid fluid resuscitation, and treating sepsis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Kidney Disease Stage G4A3 with eGFR 22 and Proteinuria", "Medicine", "Renal", "nephrology specialist referral, SGLT2 inhibitor, and blood pressure control below 120", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Renal Stone Five Millimeter Distal Ureteric with Normal Kidney Function", "Surgery", "Renal", "oral NSAID diclofenac, alpha-blocker tamsulosin, and outpatient observation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Recurrent Urinary Tract Infection in Postmenopausal Woman", "Microbiology", "Renal", "vaginal topical estrogen therapy, behavioral advice, and post-coital prophylaxis if needed", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Bacterial Prostatitis with High Fever and Perineal Pain", "Microbiology", "Renal", "oral ciprofloxacin or ofloxacin for 14 to 28 days following urine cultures", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Benign Prostatic Enlargement with Severe Lower Urinary Tract Symptoms", "Surgery", "Renal", "combination alpha-1 antagonist tamsulosin and 5-alpha reductase inhibitor finasteride", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Visible Hematuria in Sixty-Year-Old Smoker without Infection", "Surgery", "Renal", "urgent two-week wait suspected cancer pathway referral for flexible cystoscopy and renal ultrasound", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Minimal Change Nephropathy in Child Presenting with Periorbital Edema", "Pediatrics", "Renal", "oral prednisolone 60 mg/m2 daily for four weeks followed by tapering alternate-day regimen", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Testicular Torsion Suspected in Sixteen-Year-Old Adolescent", "Surgery", "Renal", "immediate emergency surgical exploration and bilateral orchidopexy without delay for imaging", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hyperkalemia Severe with ECG Widening of QRS Complex", "Medicine", "Renal", "immediate intravenous 10% calcium gluconate 10ml over 5 minutes and insulin-dextrose infusion", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Inadequately Controlled on Metformin", "Medicine", "Endocrine", "adding SGLT2 inhibitor empagliflozin or dapagliflozin if cardiovascular/renal risk present", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Diabetic Ketoacidosis DKA Protocolized Management in NHS Hospital", "Medicine", "Endocrine", "fixed-rate intravenous insulin infusion 0.1 units/kg/hr alongside isotonic saline and potassium", "Joint British Diabetes Societies Guidelines", "https://www.nice.org.uk"),
    ("Hyperthyroidism Toxic Multinodular Goitre in Elderly Female", "Medicine", "Endocrine", "carbimazole titration symptom control followed by definitive radioactive iodine 131-I", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Hypothyroidism Initial Diagnosis with TSH 24", "Medicine", "Endocrine", "daily oral levothyroxine starting at 1.6 mcg/kg daily or 25-50 mcg in elderly/cardiac disease", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Addisonian Adrenal Crisis Presentation in Primary Care", "Medicine", "Endocrine", "immediate intramuscular or intravenous hydrocortisone 100 mg bolus and urgent emergency transfer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Primary Hyperparathyroidism with Recurrent Renal Calculi", "Surgery", "Endocrine", "surgical referral for focused parathyroidectomy following localization scans", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cushing Syndrome Suspected in Patient with Hypertension and Striae", "Medicine", "Endocrine", "overnight low-dose dexamethasone suppression test or 24-hour urinary free cortisol collection", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Prolactinoma Microadenoma Presenting with Galactorrhea and Amenorrhea", "Medicine", "Endocrine", "oral dopamine agonist cabergoline therapy and endocrine monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hypocalcemia Acute Symptomatic with Positive Chvostek Sign", "Medicine", "Endocrine", "intravenous 10% calcium gluconate 10 to 20 ml infusion over 10 minutes with cardiac monitoring", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Obesity Class III with Comorbidities Refractory to Lifestyle", "Medicine", "Endocrine", "weekly subcutaneous GLP-1 receptor agonist semaglutide or referral for bariatric surgery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia in Postmenopausal Woman", "Medicine", "Hematology", "two-week wait urgent referral for upper endoscopy and colonoscopy to rule out occult cancer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Immune Thrombocytopenia ITP in Adult with Platelets 15,000", "Medicine", "Hematology", "oral prednisolone 1 mg/kg daily or high-dose dexamethasone and monitoring", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Multiple Myeloma Suspected with Bone Pain, Anemia, and Hypercalcemia", "Pathology", "Hematology", "serum free light chain assay, serum protein electrophoresis, and whole-body low-dose CT", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Sickle Cell Disease Acute Chest Syndrome in NHS Emergency Department", "Medicine", "Hematology", "oxygenation, pain relief, empiric macrolide/cephalosporin antibiotics, and exchange transfusion", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Warfarin Anticoagulation Reversal for Life-Threatening Bleed", "Pharmacology", "Hematology", "immediate intravenous prothrombin complex concentrate PCC and intravenous phytomenadione vitamin K", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Lymphocytic Leukemia Binet Stage A Asymptomatic", "Medicine", "Hematology", "watch and wait watchful surveillance strategy without immediate cytotoxic therapy", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Pernicious Anemia Diagnosed with Positive Anti-Intrinsic Factor Antibodies", "Medicine", "Hematology", "intramuscular hydroxocobalamin 1 mg three times weekly for two weeks then every three months", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Hemophilia A Severe with Acute Hemarthrosis", "Medicine", "Hematology", "immediate recombinant factor VIII replacement concentrate infusion to reach 100% activity", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Acute Promyelocytic Leukemia APL Suspected with Pancytopenia", "Medicine", "Hematology", "immediate initiation of all-trans retinoic acid ATRA while awaiting genetic confirmation", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Neutropenic Sepsis Suspected in Cancer Chemotherapy Patient", "Microbiology", "Hematology", "immediate intravenous piperacillin-tazobactam within one hour of arrival without waiting for bloods", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within 4.5 Hours in NHS Hyperacute Stroke Unit", "Medicine", "Nervous System", "intravenous thrombolysis with alteplase and thrombectomy referral for large vessel occlusion", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Transient Ischemic Attack TIA High Risk ABCD2 Score 5", "Medicine", "Nervous System", "immediate aspirin 300 mg daily and urgent specialist stroke clinic assessment within 24 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Subarachnoid Hemorrhage Presentation with Sudden Thunderclap Headache", "Surgery", "Nervous System", "immediate non-contrast CT head scan within 6 hours or lumbar puncture after 12 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Bacterial Meningitis Suspected in Adult in General Practice", "Microbiology", "Nervous System", "immediate intramuscular or intravenous benzylpenicillin or ceftriaxone before emergency transfer", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("First Unprovoked Generalized Tonic-Clonic Seizure in Adult", "Medicine", "Nervous System", "urgent referral to first seizure clinic within two weeks and driving safety advice", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Parkinson Disease Newly Diagnosed with Motor Impairment", "Medicine", "Nervous System", "specialist neurology referral for levodopa or dopamine agonist initiation", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Multiple Sclerosis Suspected with Optic Neuritis Episode", "Medicine", "Nervous System", "urgent MRI brain and whole spine with contrast and neurology outpatient referral", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Temporal Arteritis Giant Cell Arteritis with Jaw Claudication", "Medicine", "Nervous System", "immediate high-dose oral prednisolone 60 mg daily to prevent permanent visual loss", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Guillain-Barre Syndrome Acute Presentation with Areflexia", "Medicine", "Nervous System", "urgent admission, spirometry vital capacity tracking, and IVIG or plasma exchange", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cauda Equina Syndrome Suspected with Saddle Anesthesia and Urinary Retention", "Surgery", "Nervous System", "emergency urgent whole spine emergency MRI scan within hours and spinal surgical referral", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Suspected with Bilateral MCP Joint Swelling", "Medicine", "Musculoskeletal", "urgent rheumatology referral and initiation of combination csDMARD therapy with methotrexate", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Polymyalgia Rheumatica Presentation with Bilateral Shoulder Girdle Stiffness", "Medicine", "Musculoskeletal", "oral prednisolone 15 mg daily with dramatic symptom resolution within 48 to 72 hours", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Septic Arthritis Suspected in Hot Swollen Knee Joint", "Microbiology", "Musculoskeletal", "urgent synovial fluid aspiration for microscopy and culture prior to starting empiric IV flucloxacillin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Gout Flare in Patient with Renal Impairment", "Medicine", "Musculoskeletal", "oral low-dose colchicine 500 mcg or short-course oral prednisolone avoiding NSAIDs", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Osteoarthritis of the Knee Refractory to Topical NSAIDs and Exercise", "Medicine", "Musculoskeletal", "oral paracetamol or low-dose oral codeine and intra-articular corticosteroid injection", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Suspected Melanoma with ABCDE Changes on Pigmented Lesion", "Surgery", "Dermatology", "two-week wait urgent referral to dermatology for complete excisional biopsy with 2mm margin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Atopic Eczema Severe Exacerbation in Adult", "Medicine", "Dermatology", "potent topical corticosteroid betamethasone valerate combined with intensive emollients", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Psoriasis Plaque Disease Mild to Moderate on Extensor Surfaces", "Medicine", "Dermatology", "once-daily topical combination of potent corticosteroid and vitamin D analogue calcipotriol", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Scabies Infestation Presentation with Nocturnal Pruritus in Family", "Microbiology", "Dermatology", "topical 5% permethrin cream applied to whole body including treatment of all household contacts", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ankylosing Spondylitis Suspected with Inflammatory Back Pain", "Medicine", "Musculoskeletal", "MRI of sacroiliac joints demonstrating active sacroiliitis and regular NSAID therapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Severe Preeclampsia at 35 Weeks with Hyperreflexia and Proteinuria", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate infusion for seizure prophylaxis and planned delivery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Ectopic Pregnancy Suspected in Hemodynamically Stable Patient", "Obstetrics", "Pregnancy", "transvaginal ultrasound TVUS and serial serum quantitative beta-hCG assessment", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Gestational Diabetes Screening at 24 to 28 Weeks Gestation", "Obstetrics", "Pregnancy", "75g two-hour oral glucose tolerance test OGTT with diagnostic thresholds", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Postpartum Hemorrhage Primary Secondary to Uterine Atony", "Obstetrics", "Pregnancy", "uterine massage, bimanual compression, IV oxytocin infusion, and ergometrine or carboprost", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Neonatal Jaundice within First 24 Hours of Life", "Pediatrics", "Gastrointestinal", "urgent serum bilirubin measurement, direct antiglobulin Coombs test, and immediate phototherapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Bronchiolitis in Four-Month-Old Infant with Mild Recession", "Pediatrics", "Respiratory", "supportive care, fractional feeding, nasal suctioning, and minimal handling without bronchodilators", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Croup Laryngotracheobronchitis Mild to Moderate in Toddler", "Pediatrics", "Respiratory", "single oral dose of soluble dexamethasone 0.15 mg/kg and reassuring guidance", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Febrile Convulsion Simple First Episode in Eighteen-Month-Old", "Pediatrics", "Nervous System", "identifying infection source, parental reassurance, antipyretics, and seizure safety advice", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Non-Accidental Injury Child Protection Safeguarding Suspected", "Ethics", "General Principles", "admitting child to pediatric ward for safety, urgent senior consultation, and safeguarding referral", "GMC Safeguarding Guidance", "https://www.gmc-uk.org"),
    ("Intussusception Suspected in Nine-Month-Old Infant with Red Currant Jelly Stool", "Surgery", "Gastrointestinal", "abdominal ultrasound confirmation and air or contrast therapeutic enema reduction", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Disorder Moderate in NHS General Practice", "Psychiatry", "Behavioral Health", "evidence-based high-intensity psychological intervention CBT or oral SSRI sertraline", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Severe Agoraphobia and Panic Disorder in Young Adult", "Psychiatry", "Behavioral Health", "cognitive behavioral therapy CBT and oral selective serotonin reuptake inhibitor", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Acute Psychotic Episode Presentation under Mental Health Act Assessment", "Psychiatry", "Behavioral Health", "formal assessment under Section 2 of Mental Health Act for assessment and treatment", "General Medical Council Guidance", "https://www.gmc-uk.org"),
    ("Bipolar Affective Disorder Acute Depressive Phase", "Psychiatry", "Behavioral Health", "oral quetiapine, olanzapine with fluoxetine, or lurasidone avoiding antidepressant monotherapy", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Anorexia Nervosa Severe with Low BMI 13 and Bradycardia", "Psychiatry", "Behavioral Health", "urgent medical inpatient admission under MARSIPAN guidelines for careful refeeding", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Patient Refusing Life-Saving Blood Transfusion as Jehovah's Witness", "Ethics", "General Principles", "respecting patient autonomy and refusal of treatment if competent with valid advance directive", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Confidentiality Breach Request by Police without Judicial Warrant", "Ethics", "General Principles", "refusing medical disclosure unless required by law, court order, or to prevent serious imminent harm", "GMC Confidentiality Guidance", "https://www.gmc-uk.org"),
    ("Informed Consent and Capacity Assessment under Mental Capacity Act 2005", "Ethics", "General Principles", "presuming capacity unless proven otherwise and assessing ability to understand, retain, weigh, communicate", "GMC Consent Guidance", "https://www.gmc-uk.org"),
    ("Breaking Bad News of Terminal Malignancy SPIKES Protocol", "Ethics", "General Principles", "applying SPIKES protocol setting, perception, invitation, knowledge, empathy, strategy", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Fitness to Drive Notification to DVLA for Severe Epilepsy", "Ethics", "General Principles", "advising patient not to drive and notifying DVLA if patient refuses to comply after warning", "GMC Fitness to Drive Guidance", "https://www.gmc-uk.org")
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
    validate_topics(HAAD_DHA_TOPICS, "HAAD / DHA")
    validate_topics(PLAB_TOPICS, "PLAB / UKMLA")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega79_topics_a.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 79 Topics Part A\n\n")
        f.write(f"HAAD_DHA_TOPICS = {repr(HAAD_DHA_TOPICS)}\n\n")
        f.write(f"PLAB_TOPICS = {repr(PLAB_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
