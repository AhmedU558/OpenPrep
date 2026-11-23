"""
Topic Generator for Mega-Batch 77 - Part B
Tracks:
- Batch 373: 100 MCCQE (Canada) topics (2,700 -> 2,800)
- Batch 374: 100 NEET PG (India) topics (2,700 -> 2,800)
- Batch 375: 100 MRCP (UK) topics (2,700 -> 2,800)
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

MCCQE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Anomalous Origin of Left Coronary Artery from Pulmonary Artery ALCAPA", "Pediatrics", "Cardiovascular", "early surgical coronary re-implantation into the ascending aorta", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Spontaneous Coronary Artery Dissection in Postpartum Patient", "Medicine", "Cardiovascular", "conservative inpatient observational management and beta-blocker therapy", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Bicuspid Aortic Valve with Severe Symptomatic Aortic Stenosis", "Surgery", "Cardiovascular", "surgical aortic valve replacement or transcatheter aortic valve implantation", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Cardiac Amyloidosis ATTR Subtype with Heart Failure", "Medicine", "Cardiovascular", "transthyretin tetramer stabilizer therapy with tafamidis", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Wolff-Parkinson-White Syndrome with Pre-Excited Atrial Fibrillation", "Medicine", "Cardiovascular", "emergency synchronized electrical cardioversion or intravenous procainamide", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Infective Endocarditis with Valve Perforation and Cardiogenic Shock", "Surgery", "Cardiovascular", "emergency open heart valve replacement surgery and broad-spectrum antibiotics", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Thoracic Aortic Dissection Stanford Type B Complicated by Malperfusion", "Surgery", "Cardiovascular", "thoracic endovascular aortic repair TEVAR with antihypertensive control", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Constrictive Pericarditis with Severe Right-Sided Diastolic Failure", "Surgery", "Cardiovascular", "radical surgical pericardiectomy following anti-inflammatory trial", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Non-Compaction Cardiomyopathy with Ventricular Thrombus", "Medicine", "Cardiovascular", "long-term systemic therapeutic anticoagulation and heart failure guideline therapy", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),
    ("Cor Triatriatum Sinistrum Presenting with Pulmonary Venous Congestion", "Surgery", "Cardiovascular", "surgical resection of the fibromuscular intra-atrial diaphragm", "Canadian Cardiovascular Society Guidelines", "https://www.ccs.ca"),

    # 2. Respiratory - 10
    ("Blastomycosis with Pulmonary Cavitary Lesions in Canadian Shield", "Medicine", "Respiratory", "oral itraconazole therapy or intravenous liposomal amphotericin B for severe disease", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Alpha-1 Antitrypsin Deficiency with Severe Basilar Emphysema", "Medicine", "Respiratory", "intravenous human alpha-1 proteinase inhibitor augmentation therapy", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Primary Spontaneous Pneumothorax Exceeding Two Centimeters", "Medicine", "Respiratory", "needle aspiration or small-bore chest drain insertion with underwater seal", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Idiopathic Pulmonary Fibrosis with Rapid FVC Decline", "Medicine", "Respiratory", "antifibrotic therapy with pirfenidone or nintedanib to slow disease progression", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Fat Embolism Syndrome Following Bilateral Femoral Fractures", "Medicine", "Respiratory", "supportive critical care oxygenation and early operative orthopedic stabilization", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Cystic Fibrosis with G551D Mutation and Chronic Sinopulmonary Disease", "Pediatrics", "Respiratory", "cystic fibrosis transmembrane conductance regulator potentiator ivacaftor", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Sarcoidosis Stage II with Progressive Pulmonary Dyspnea", "Medicine", "Respiratory", "oral systemic corticosteroid therapy with serial spirometric monitoring", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Hypersensitivity Pneumonitis Hot Tub Lung from Mycobacterium Avium", "Medicine", "Respiratory", "complete cessation of hot tub exposure and systemic corticosteroid taper", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Central Sleep Apnea Cheyne-Stokes Breathing in Advanced Heart Failure", "Medicine", "Respiratory", "optimization of heart failure guideline medical therapy and adaptive servoventilation review", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),
    ("Pulmonary Arteriovenous Malformation in Osler-Weber-Rendu Syndrome", "Surgery", "Respiratory", "percutaneous transcatheter embolotherapy with metallic coils or vascular plugs", "Canadian Thoracic Society Guidelines", "https://cts-sct.ca"),

    # 3. Gastrointestinal - 10
    ("Gastric Variceal Hemorrhage Fundal Location Secondary to Cirrhosis", "Medicine", "Gastrointestinal", "endoscopic cyanoacrylate tissue adhesive glue injection or TIPSS procedure", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Primary Biliary Cholangitis with Elevated Alkaline Phosphatase", "Medicine", "Gastrointestinal", "first-line oral ursodeoxycholic acid therapy titrated to body weight", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Celiac Disease with Severe Malabsorption and Dermatitis Herpetiformis", "Medicine", "Gastrointestinal", "strict lifelong gluten-free diet and oral dapsone for dermatologic symptoms", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Acute Gallstone Pancreatitis with Concurrent Acute Cholangitis", "Surgery", "Gastrointestinal", "urgent endoscopic retrograde cholangiopancreatography with biliary sphincterotomy", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Gastroparesis Diabetica with Refractory Nausea and Early Satiety", "Medicine", "Gastrointestinal", "dietary modification, optimized glycemic control, and oral prokinetic metoclopramide", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Ulcerative Colitis Acute Severe Flare Truelove-Witts Criteria", "Medicine", "Gastrointestinal", "intravenous methylprednisolone pulse therapy and rescue infliximab if refractory", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Eosinophilic Esophagitis with Recurrent Food Impaction", "Medicine", "Gastrointestinal", "swallowed topical fluticasone or budesonide suspension with dietary elimination", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Hereditary Diffuse Gastric Cancer with CDH1 Gene Mutation", "Surgery", "Gastrointestinal", "prophylactic total gastrectomy with Roux-en-Y reconstruction in early adulthood", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Hepatic Adenoma Exceeding Five Centimeters in Woman on Oral Contraceptives", "Surgery", "Gastrointestinal", "discontinuation of oral contraceptives and elective surgical resection", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),
    ("Peutz-Jeghers Syndrome with Small Bowel Intussusception", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy with polypectomy and bowel-sparing reduction", "Canadian Association of Gastroenterology", "https://www.cag-acg.org"),

    # 4. Renal & Genitourinary - 10
    ("Focal Segmental Glomerulosclerosis Primary Tip Variant", "Medicine", "Renal", "high-dose oral prednisone therapy for minimum sixteen weeks", "Canadian Society of Nephrology", "https://www.csnscn.ca"),
    ("IgA Vasculitis Henoch-Schonlein Purpura with Nephritis", "Pediatrics", "Renal", "supportive care, blood pressure control, and corticosteroids for severe nephritis", "Canadian Society of Nephrology", "https://www.csnscn.ca"),
    ("Autosomal Dominant Polycystic Kidney Disease with Rapid Progression", "Medicine", "Renal", "vasopressin V2 receptor antagonist tolvaptan and aggressive blood pressure control", "Canadian Society of Nephrology", "https://www.csnscn.ca"),
    ("Renal Cell Carcinoma T1a Confined to Renal Cortex", "Surgery", "Renal", "nephron-sparing partial nephrectomy with curative intent", "Canadian Urological Association", "https://www.cua.org"),
    ("Posterior Urethral Valves in Male Newborn with Bilateral Hydronephrosis", "Surgery", "Renal", "urgent transurethral endoscopic valve ablation and bladder decompression", "Canadian Urological Association", "https://www.cua.org"),
    ("Renal Fanconi Syndrome Induced by Tenofovir Disoproxil", "Pharmacology", "Renal", "discontinuation of tenofovir disoproxil and transition to tenofovir alafenamide", "Canadian Society of Nephrology", "https://www.csnscn.ca"),
    ("Urolithiasis with Obstructive Pyelonephritis and Sepsis", "Surgery", "Renal", "emergency percutaneous nephrostomy or retrograde ureteral stent placement", "Canadian Urological Association", "https://www.cua.org"),
    ("Membranoproliferative Glomerulonephritis Hepatitis C Associated", "Medicine", "Renal", "direct-acting antiviral therapy targeting hepatitis C virus eradication", "Canadian Society of Nephrology", "https://www.csnscn.ca"),
    ("Priapism Ischemic Low-Flow Refractory to Corporal Aspiration", "Surgery", "Renal", "intracavernosal phenylephrine injection followed by surgical shunt creation", "Canadian Urological Association", "https://www.cua.org"),
    ("Cast Nephropathy Multiple Myeloma with Acute Renal Failure", "Medicine", "Renal", "aggressive intravenous hydration, high-cutoff hemodialysis, and bortezomib therapy", "Canadian Society of Nephrology", "https://www.csnscn.ca"),

    # 5. Endocrinology - 10
    ("Pheochromocytoma Preoperative Alpha-Adrenergic Blockade", "Medicine", "Endocrine", "phenoxybenzamine alpha-blockade titration prior to introducing beta-blocker", "Canadian Journal of Diabetes / Endocrine Guidelines", "https://www.diabetes.ca"),
    ("Primary Hyperparathyroidism with Hypercalcemic Crisis", "Surgery", "Endocrine", "aggressive intravenous saline hydration, calcitonin, zoledronic acid, and parathyroidectomy", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Kallmann Syndrome with Hypogonadotropic Hypogonadism and Anosmia", "Medicine", "Endocrine", "pulsatile GnRH or gonadotropin replacement therapy for fertility induction", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Central Diabetes Insipidus Following Pituitary Resection", "Medicine", "Endocrine", "oral or intranasal desmopressin DDAVP titration guided by urine output", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Cushing Disease ACTH-Secreting Pituitary Microadenoma", "Surgery", "Endocrine", "transsphenoidal selective pituitary microadenomectomy", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Osteomalacia Secondary to Severe Vitamin D Deficiency", "Medicine", "Endocrine", "high-dose oral ergocalciferol or cholecalciferol with calcium supplementation", "Osteoporosis Canada Guidelines", "https://osteoporosis.ca"),
    ("Hypopituitarism Sheehan Syndrome Postpartum Infarction", "Obstetrics", "Endocrine", "lifelong physiological replacement with hydrocortisone, levothyroxine, and estrogens", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Graves Disease Treated with Radioactive Iodine in Childbearing Age", "Medicine", "Endocrine", "mandatory contraception for six months following radioactive iodine administration", "Canadian Endocrine Guidelines", "https://www.endocrine.org"),
    ("Diabetic Ketoacidosis with Severe Hypokalemia on Presentation", "Medicine", "Endocrine", "aggressive potassium repletion prior to initiating intravenous insulin infusion", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),
    ("Hyperosmolar Hyperglycemic State with Profound Dehydration", "Medicine", "Endocrine", "rapid isotonic saline fluid resuscitation followed by weight-based insulin infusion", "Diabetes Canada Clinical Practice Guidelines", "https://www.diabetes.ca"),

    # 6. Hematology - 10
    ("Immune Thrombocytopenia ITP with Severe Mucosal Bleeding", "Medicine", "Hematology", "intravenous immunoglobulin combined with high-dose dexamethasone", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Sickle Cell Anemia with Acute Chest Syndrome", "Medicine", "Hematology", "broad-spectrum antibiotics, oxygen, analgesia, and simple or exchange blood transfusion", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Beta-Thalassemia Major with Transfusional Iron Overload", "Medicine", "Hematology", "daily oral iron chelation therapy with deferasirox or deferiprone", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Chronic Myeloid Leukemia Philadelphia Chromosome Positive", "Medicine", "Hematology", "first-line tyrosine kinase inhibitor therapy with imatinib or dasatinib", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Acute Promyelocytic Leukemia with Disseminated Coagulopathy", "Medicine", "Hematology", "immediate initiation of all-trans retinoic acid ATRA and arsenic trioxide", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Factor V Leiden Heterozygosity with First Unprovoked Deep Vein Thrombosis", "Medicine", "Hematology", "direct oral anticoagulant therapy with apixaban or rivaroxaban for three to six months", "Thrombosis Canada Guidelines", "https://thrombosiscanada.ca"),
    ("Polycythemia Vera with Severe Aquagenic Pruritus", "Medicine", "Hematology", "therapeutic phlebotomy, aspirin, and ruxolitinib or cytoreductive hydroxyurea", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Myelodysplastic Syndrome with 5q Deletion Subtype", "Medicine", "Hematology", "targeted immunomodulatory therapy with oral lenalidomide", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Methemoglobinemia Induced by Topical Benzocaine Spray", "Pharmacology", "Hematology", "intravenous methylene blue administration with high-flow oxygen support", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),
    ("Autoimmune Hemolytic Anemia Warm Subtype Refractory to Steroids", "Medicine", "Hematology", "second-line therapy with monoclonal anti-CD20 antibody rituximab", "Canadian Hematology Guidelines", "https://www.ch-sc.ca"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke Within Three Hours of Symptom Onset", "Neurology", "Nervous System", "intravenous thrombolysis with alteplase or tenecteplase and mechanical thrombectomy evaluation", "Canadian Stroke Best Practices", "https://www.strokebestpractices.ca"),
    ("Basilar Artery Occlusion with Locked-In Syndrome", "Neurology", "Nervous System", "emergency endovascular mechanical thrombectomy to restore posterior circulation", "Canadian Stroke Best Practices", "https://www.strokebestpractices.ca"),
    ("Huntington Disease with Chorea and Neuropsychiatric Symptoms", "Neurology", "Nervous System", "vesicular monoamine transporter-2 inhibitor tetrabenazine or deutetrabenazine", "Canadian Neurological Guidelines", "https://www.cnsfederation.org"),
    ("Wernicke Encephalopathy in Chronic Alcohol Dependence", "Neurology", "Nervous System", "immediate high-dose intravenous thiamine prior to any glucose administration", "Canadian Medical Association Guidelines", "https://www.cma.ca"),
    ("Transient Global Amnesia with Acute Anterograde Memory Loss", "Neurology", "Nervous System", "clinical reassurance, observation, and avoidance of unnecessary interventions", "Canadian Neurological Guidelines", "https://www.cnsfederation.org"),
    ("Restless Legs Syndrome Willis-Ekbom Disease with Iron Deficiency", "Neurology", "Nervous System", "oral or intravenous iron supplementation targeting serum ferritin above seventy-five", "Canadian Sleep Society Guidelines", "https://css-scs.ca"),
    ("Meniere Disease with Recurrent Rotational Vertigo and Hearing Loss", "Medicine", "Nervous System", "dietary sodium restriction, betahistine, and thiazide diuretic maintenance", "Canadian Society of Otolaryngology", "https://www.entcanada.org"),
    ("Temporal Arteritis Giant Cell Arteritis with Sudden Monocular Vision Loss", "Medicine", "Nervous System", "immediate high-dose intravenous methylprednisolone pulse therapy", "Canadian Rheumatology Association", "https://rheum.ca"),
    ("Spinal Cord Compression Secondary to Metastatic Prostate Cancer", "Surgery", "Nervous System", "high-dose intravenous dexamethasone and emergency surgical decompression or radiotherapy", "Canadian Urological Association", "https://www.cua.org"),
    ("Carpal Tunnel Syndrome Refractory to Nocturnal Splinting", "Surgery", "Nervous System", "surgical carpal tunnel release transecting the transverse carpal ligament", "Canadian Orthopaedic Association", "https://coa-aco.org"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Seropositive Erosive Disease", "Medicine", "Musculoskeletal", "combination disease-modifying therapy with weekly oral methotrexate and folic acid", "Canadian Rheumatology Association", "https://rheum.ca"),
    ("Gouty Arthritis Acute Polyarticular Attack in Chronic Kidney Disease", "Medicine", "Musculoskeletal", "intra-articular or systemic corticosteroid therapy avoiding NSAIDs and colchicine", "Canadian Rheumatology Association", "https://rheum.ca"),
    ("Polymyalgia Rheumatica with Symmetrical Shoulder and Hip Girdle Stiffness", "Medicine", "Musculoskeletal", "low-dose oral prednisone therapy with prompt symptom resolution within forty-eight hours", "Canadian Rheumatology Association", "https://rheum.ca"),
    ("Osteomyelitis of Calcaneus with Diabetic Foot Ulcer", "Surgery", "Musculoskeletal", "targeted bone-penetrating intravenous antibiotics and surgical debridement", "Wounds Canada Guidelines", "https://www.woundscanada.ca"),
    ("Adhesive Capsulitis Frozen Shoulder Freezing Phase", "Medicine", "Musculoskeletal", "intra-articular corticosteroid injection followed by structured physical therapy", "Canadian Orthopaedic Association", "https://coa-aco.org"),
    ("Atopic Dermatitis Moderate to Severe Refractory to Topical Steroids", "Medicine", "Dermatology", "targeted biologic therapy with interleukin-4/13 receptor antagonist dupilumab", "Canadian Dermatology Association", "https://dermatology.ca"),
    ("Acne Vulgaris Severe Nodulocystic with Scarring", "Medicine", "Dermatology", "systemic oral isotretinoin therapy under strict pregnancy prevention program", "Canadian Dermatology Association", "https://dermatology.ca"),
    ("Basal Cell Carcinoma Morpheaform Infiltrative Subtype on Facial Nose", "Surgery", "Dermatology", "Mohs micrographic surgery to achieve complete histological margin clearance", "Canadian Dermatology Association", "https://dermatology.ca"),
    ("Pemphigus Vulgaris with Suprabasilar Acantholysis and Flaccid Bullae", "Medicine", "Dermatology", "systemic high-dose corticosteroids combined with rituximab B-cell depletion", "Canadian Dermatology Association", "https://dermatology.ca"),
    ("Lichen Sclerosus of the Anogenital Region in Postmenopausal Woman", "Medicine", "Dermatology", "ultra-potent topical corticosteroid ointment clobetasol propionate maintenance", "Canadian Dermatology Association", "https://dermatology.ca"),

    # 9. Pediatrics & Obstetrics - 10
    ("Ectopic Pregnancy Ampullary Unruptured with Low Beta-hCG", "Obstetrics", "Pregnancy", "intramuscular systemic methotrexate therapy with serial beta-hCG monitoring", "SOGC Clinical Practice Guidelines", "https://www.sogc.org"),
    ("Group B Streptococcus Colonization in Active Labor", "Obstetrics", "Pregnancy", "intravenous penicillin G intrapartum antibiotic prophylaxis every four hours", "SOGC Clinical Practice Guidelines", "https://www.sogc.org"),
    ("Gestational Diabetes Mellitus Failing Dietary Lifestyle Intervention", "Obstetrics", "Pregnancy", "initiation of subcutaneous basal-bolus insulin therapy with glycemic targets", "SOGC Clinical Practice Guidelines", "https://www.sogc.org"),
    ("Croup Laryngotracheobronchitis with Stridor at Rest", "Pediatrics", "Respiratory", "single dose oral dexamethasone and nebulized epinephrine for severe distress", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Bronchiolitis in Infant with Moderate Intercostal Retractions", "Pediatrics", "Respiratory", "supportive nasal suctioning, gentle hydration, and oxygen therapy for saturation below ninety", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Febrile Seizure Simple in Eighteen-Month-Old Toddler", "Pediatrics", "Nervous System", "clinical reassurance, fever management education, and avoidance of routine neuroimaging", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Developmental Dysplasia of the Hip in Six-Week-Old Infant", "Pediatrics", "Musculoskeletal", "ultrasound confirmation and placement of dynamic Pavlik harness splinting", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Henoch-Schonlein Purpura with Palpable Purpura and Abdominal Colic", "Pediatrics", "Dermatology", "supportive analgesia and serial blood pressure and urinalysis surveillance", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Post-Dural Puncture Headache Following Epidural Analgesia", "Obstetrics", "Pregnancy", "conservative hydration and analgesia followed by autologous epidural blood patch", "SOGC Clinical Practice Guidelines", "https://www.sogc.org"),
    ("Meconium Aspiration Syndrome with Severe Persistent Pulmonary Hypertension", "Pediatrics", "Respiratory", "mechanical ventilation, surfactant lavage, and inhaled nitric oxide therapy", "Canadian Paediatric Society Guidelines", "https://cps.ca"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Schizoaffective Disorder Depressive Subtype with Suicidal Ideation", "Psychiatry", "Behavioral Health", "combination therapy with atypical antipsychotic and antidepressant with safety containment", "Canadian Psychiatric Association Guidelines", "https://www.cpa-apc.org"),
    ("Obsessive-Compulsive Disorder Severe with Contamination Compulsions", "Psychiatry", "Behavioral Health", "high-dose selective serotonin reuptake inhibitor and exposure and response prevention", "Canadian Psychiatric Association Guidelines", "https://www.cpa-apc.org"),
    ("Medical Assistance in Dying MAID Eligibility Criteria Assessment", "Ethics", "General Principles", "independent assessment of grievous and irremediable medical condition and voluntary request", "Canadian Medical Association Code of Ethics", "https://www.cma.ca"),
    ("Involuntary Psychiatric Admission under Provincial Mental Health Act", "Ethics", "General Principles", "completion of psychiatric certification based on risk of harm to self or others", "Canadian Psychiatric Association Guidelines", "https://www.cpa-apc.org"),
    ("Substance Use Disorder Opioid Agonist Treatment Induction", "Psychiatry", "Behavioral Health", "buprenorphine-naloxone sublingual induction following mild withdrawal precipitation", "Canadian Centre on Substance Use and Addiction", "https://www.ccsa.ca"),
    ("Informed Consent in Mature Minor Seeking Sexual Health Care", "Ethics", "General Principles", "assessment of mature minor doctrine capacity and preservation of patient autonomy", "Canadian Paediatric Society Guidelines", "https://cps.ca"),
    ("Duty to Warn Identified Third Party of Imminent Threat of Violence", "Ethics", "General Principles", "statutory disclosure to intended victim and law enforcement under Tarasoff doctrine", "Canadian Medical Protective Association CMPA", "https://www.cmpa-acpm.ca"),
    ("Delirium Hyperactive Subtype in Elderly Postoperative Patient", "Psychiatry", "Behavioral Health", "identifying underlying metabolic trigger and non-pharmacological environmental reorientation", "Canadian Geriatrics Society", "https://canadiangeriatrics.ca"),
    ("Generalized Anxiety Disorder Refractory to First-Line SSRI", "Psychiatry", "Behavioral Health", "transition to serotonin-norepinephrine reuptake inhibitor venlafaxine or adjunctive pregabalin", "Canadian Psychiatric Association Guidelines", "https://www.cpa-apc.org"),
    ("Reporting Impaired Driving Due to Syncope or Neurological Deficit", "Ethics", "General Principles", "mandatory statutory reporting to provincial registrar of motor vehicles", "Canadian Medical Association Guidelines", "https://www.cma.ca")
]

NEET_PG_TOPICS = [
    # 1. Cardiovascular - 10
    ("Takayasu Arteritis Involving Aortic Arch Branches Pulseless Disease", "Medicine", "Cardiovascular", "high-dose systemic corticosteroid therapy and biological tocilizumab", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Rheumatic Mitral Stenosis with Wilkin Score Under Eight", "Medicine", "Cardiovascular", "percutaneous transvenous mitral commissurotomy balloon valvotomy", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Eisenmenger Syndrome in Unrepaired Ventricular Septal Defect", "Medicine", "Cardiovascular", "targeted pulmonary arterial hypertension therapy with bosentan and avoidance of pregnancy", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Ebstein Anomaly with Accessory Pathway Pre-Excitation", "Pediatrics", "Cardiovascular", "radiofrequency catheter ablation of accessory pathway and tricuspid valve repair", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Tuberculous Pericarditis with Impending Constriction", "Medicine", "Cardiovascular", "four-drug anti-tubercular therapy combined with adjuvant tapering oral prednisolone", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Aortoarteritis with Renovascular Hypertension in Young Female", "Surgery", "Cardiovascular", "immunosuppressive disease stabilization followed by renal artery angioplasty", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Anterior Wall STEMI with Ventricular Free Wall Rupture", "Surgery", "Cardiovascular", "emergency surgical pericardial patch repair and hemodynamic stabilization", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Syphilitic Aortitis with Coronary Ostial Stenosis and Aneurysm", "Surgery", "Cardiovascular", "intravenous aqueous penicillin G therapy followed by surgical aortic reconstruction", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Cor Triatriatum Dexter Presenting with Cyanosis and Edema", "Surgery", "Cardiovascular", "surgical excision of persistent right sinus venosus valve membrane", "Cardiological Society of India Guidelines", "https://csi.org.in"),
    ("Hypertrophic Obstructive Cardiomyopathy with Systolic Anterior Motion", "Medicine", "Cardiovascular", "first-line beta-blocker therapy or myectomy for severe refractory gradients", "Cardiological Society of India Guidelines", "https://csi.org.in"),

    # 2. Respiratory - 10
    ("Tuberculous Pleural Effusion with High Adenosine Deaminase", "Microbiology", "Respiratory", "standard four-drug anti-tubercular therapy under NTEP protocol", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Endobronchial Tuberculosis with Bronchial Stenosis Risk", "Medicine", "Respiratory", "daily anti-tubercular therapy with adjuvant systemic corticosteroids to prevent fibrosis", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Tropical Pulmonary Eosinophilia Induced by Filarial Infection", "Pharmacology", "Respiratory", "oral diethylcarbamazine DEC therapy for twenty-one days", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Byssinosis Monday Morning Tightness in Textile Mill Worker", "Medicine", "Respiratory", "transfer to dust-free department, bronchodilators, and occupational dust reduction", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Hydatid Cyst of Lung with Rupture into Bronchial Tree", "Surgery", "Respiratory", "surgical enucleation capitonnage combined with oral albendazole coverage", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Kartagener Syndrome with Dextrocardia and Sinus Inversion", "Anatomy", "Respiratory", "chest physiotherapy, prophylactic vaccination, and targeted antibiotic therapy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Kala-Azar Visceral Leishmaniasis with Interstitial Pneumonitis", "Microbiology", "Respiratory", "single-dose intravenous liposomal amphotericin B therapy", "National Vector Borne Disease Control Programme", "https://nvbdcp.gov.in"),
    ("Pulmonary Cryptococcosis in Advanced HIV Infection", "Microbiology", "Respiratory", "intravenous liposomal amphotericin B plus flucytosine induction followed by fluconazole", "NACO HIV Guidelines", "https://naco.gov.in"),
    ("Multidrug-Resistant Tuberculosis Pulmonary Presentation", "Microbiology", "Respiratory", "all-oral bedaquiline-containing multidrug regimen under NTEP guidelines", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Aspiration Lung Abscess with Putrid Anaerobic Sputum", "Microbiology", "Respiratory", "prolonged oral clindamycin or amoxicillin-clavulanate antimicrobial therapy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),

    # 3. Gastrointestinal - 10
    ("Amebic Liver Abscess with Risk of Pericardial Rupture", "Medicine", "Gastrointestinal", "high-dose oral metronidazole followed by luminal agent diloxanide furoate", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Intestinal Tuberculosis Involving Ileo-Cecal Region", "Medicine", "Gastrointestinal", "full course anti-tubercular therapy with close monitoring for stricture formation", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Hydatid Cyst of Liver Rupturing into Biliary Tree", "Surgery", "Gastrointestinal", "endoscopic retrograde biliary clearance followed by definitive cystectomy under albendazole", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Choledochal Cyst Type 1 with Recurrent Cholangitis", "Surgery", "Gastrointestinal", "complete cyst excision with Roux-en-Y hepaticojejunostomy to eliminate malignancy risk", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Typhoid Enteric Fever with Intestinal Perforation", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy with primary closure or loop ileostomy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Extrahepatic Portal Vein Obstruction with Non-Cirrhotic Portal Hypertension", "Surgery", "Gastrointestinal", "endoscopic variceal ligation and surgical meso-Rex bypass evaluation", "Indian Society of Gastroenterology Guidelines", "https://isg.org.in"),
    ("Gallbladder Carcinoma Infiltrating Muscularis Propria T1b", "Surgery", "Gastrointestinal", "radical extended cholecystectomy with regional lymphadenectomy and liver wedge resection", "Indian Society of Gastroenterology Guidelines", "https://isg.org.in"),
    ("Budd-Chiari Syndrome with Inferior Vena Cava Web Obstruction", "Surgery", "Gastrointestinal", "transcatheter balloon angioplasty with stenting across the caval membrane", "Indian Society of Gastroenterology Guidelines", "https://isg.org.in"),
    ("Corrosive Acid Ingestion with Acute Esophageal Necrosis", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy, total gastrectomy, and cervical esophagostomy if perforated", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Congenital Hypertrophic Pyloric Stenosis Hypochloremic Alkalosis", "Surgery", "Gastrointestinal", "preoperative fluid correction with normal saline and potassium before Ramstedt procedure", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),

    # 4. Renal & Genitourinary - 10
    ("Renal Tuberculosis with Autonephrectomy Putty Kidney", "Microbiology", "Renal", "complete anti-tubercular drug therapy followed by elective nephrectomy", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Diffuse Proliferative Glomerulonephritis Lupus Nephritis Class IV", "Medicine", "Renal", "induction therapy with intravenous cyclophosphamide or mycophenolate mofetil and steroids", "Indian Society of Nephrology Guidelines", "https://isn-india.org"),
    ("Urethral Stricture Bulbar Region Secondary to Gonococcal Infection", "Surgery", "Renal", "dorsal onlay buccal mucosal graft urethroplasty", "Urological Society of India Guidelines", "https://usi.org.in"),
    ("Urolithiasis with Endemic Calcium Oxalate Bladder Calculus", "Surgery", "Renal", "transurethral cystolitholapaxy or suprapubic cystolithotomy", "Urological Society of India Guidelines", "https://usi.org.in"),
    ("Polycystic Kidney Disease Autosomal Recessive in Neonate", "Pediatrics", "Renal", "supportive respiratory management, blood pressure control, and dialysis preparation", "Indian Society of Nephrology Guidelines", "https://isn-india.org"),
    ("Renal Angiomyolipoma Exceeding Four Centimeters with Bleeding Risk", "Surgery", "Renal", "prophylactic selective transcatheter renal arterial embolization", "Urological Society of India Guidelines", "https://usi.org.in"),
    ("Chyluria Secondary to Wuchereria Bancrofti Lymphatic Obstruction", "Pharmacology", "Renal", "dietary medium-chain triglyceride substitution, DEC, and silver nitrate instillation", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Genital Tuberculosis Causing Infertility and T-Shaped Uterus", "Obstetrics", "Renal", "six-month anti-tubercular chemotherapy under NTEP guidelines", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Emphysematous Pyelonephritis Class 3 Extensive Renal Gas", "Surgery", "Renal", "broad-spectrum intravenous antibiotics, percutaneous nephrostomy, or urgent nephrectomy", "Urological Society of India Guidelines", "https://usi.org.in"),
    ("Acute Kidney Injury Secondary to Russell Viper Envenomation", "Medicine", "Renal", "immediate polyvalent anti-snake venom ASV administration and hemodialysis support", "National Health Mission Snakebite Guidelines", "https://nhm.gov.in"),

    # 5. Endocrinology - 10
    ("Endemic Goiter with Severe Iodine Deficiency in Sub-Himalayan Belt", "Biochemistry", "Endocrine", "universal iodized salt supplementation and oral potassium iodide drops", "National Iodine Deficiency Disorders Control Programme", "https://nhm.gov.in"),
    ("Fibrocalculous Pancreatic Diabetes in Young Indian Patient", "Medicine", "Endocrine", "basal-bolus insulin therapy and pancreatic enzyme replacement capsules", "Research Society for Study of Diabetes in India RSSDI", "https://www.rssdi.in"),
    ("Sheehan Syndrome with Panhypopituitary Crisis Following Delivery", "Obstetrics", "Endocrine", "stress-dose parenteral hydrocortisone resuscitation followed by levothyroxine", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Primary Hyperparathyroidism Parathyroid Adenoma Localization", "Surgery", "Endocrine", "focused minimally invasive parathyroidectomy guided by Sestamibi SPECT scan", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Congenital Adrenal Hyperplasia 21-Hydroxylase Deficiency Salt-Wasting", "Pediatrics", "Endocrine", "emergency normal saline resuscitation, hydrocortisone, and fludrocortisone replacement", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Papillary Thyroid Carcinoma with Cervical Lymph Node Metastasis", "Surgery", "Endocrine", "total thyroidectomy with central and modified lateral neck compartment dissection", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Diabetic Foot Ulcer Wagner Grade 3 with Deep Abscess", "Surgery", "Endocrine", "urgent surgical incision, drainage, bone debridement, and culture-guided antibiotics", "RSSDI Clinical Practice Guidelines", "https://www.rssdi.in"),
    ("Adrenal Tuberculosis Addison Disease Crisis", "Microbiology", "Endocrine", "intravenous hydrocortisone fluid resuscitation and standard anti-tubercular therapy", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Secondary Hyperparathyroidism Tertiary Phase in Chronic Hemodialysis", "Surgery", "Endocrine", "subtotal parathyroidectomy or total parathyroidectomy with autotransplantation", "Indian Society of Nephrology Guidelines", "https://isn-india.org"),
    ("Klinefelter Syndrome 47,XXY with Gynecomastia and Infertility", "Genetics", "Endocrine", "lifelong intramuscular testosterone enanthate replacement therapy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),

    # 6. Hematology - 10
    ("Beta-Thalassemia Intermedia with Extramedullary Hematopoiesis", "Medicine", "Hematology", "judicious blood transfusion therapy, hydroxyurea, and surgical decompression if cord pressed", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Hemoglobin E Beta-Thalassemia in North-Eastern Indian Region", "Pathology", "Hematology", "regular matched packed red cell transfusion and iron chelation therapy", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Nutritional Megaloblastic Anemia with Severe Thrombocytopenia", "Biochemistry", "Hematology", "intramuscular cyanocobalamin vitamin B12 therapy combined with oral folic acid", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Aplastic Anemia Following Chloramphenicol Pharmacotherapy", "Pharmacology", "Hematology", "allogeneic bone marrow transplantation or antithymocyte globulin with cyclosporine", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Acute Lymphoblastic Leukemia L2 FAB Classification in Child", "Pediatrics", "Hematology", "multidrug induction chemotherapy with vincristine, daunorubicin, and L-asparaginase", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Chronic Lymphocytic Leukemia with Autoimmune Hemolytic Anemia", "Medicine", "Hematology", "systemic glucocorticoids followed by targeted BTK inhibitor ibrutinib", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Blackwater Fever Plasmodium Falciparum Intravascular Hemolysis", "Microbiology", "Hematology", "intravenous artesunate therapy, vigorous hydration, and hemodialysis for acute tubular necrosis", "National Vector Borne Disease Control Programme", "https://nvbdcp.gov.in"),
    ("Dengue Hemorrhagic Fever with Severe Plasma Leakage and Shock", "Microbiology", "Hematology", "meticulous intravenous crystalloid volume titration based on serial hematocrit", "National Vector Borne Disease Control Programme", "https://nvbdcp.gov.in"),
    ("Kasabach-Merritt Phenomenon in Giant Hepatic Hemangioma", "Pediatrics", "Hematology", "systemic corticosteroid therapy, vincristine, and surgical or embolization consultation", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Iron Deficiency Anemia Severe Microcytic Hypochromic in Pregnancy", "Obstetrics", "Hematology", "intravenous ferric carboxymaltose infusion under national Anemia Mukt Bharat", "Anemia Mukt Bharat Guidelines", "https://anemiamuktbharat.info"),

    # 7. Neurology - 10
    ("Neurocysticercosis with Multiple Ring-Enhancing Lesions and Seizures", "Microbiology", "Nervous System", "albendazole anthelmintic therapy co-administered with oral dexamethasone and anti-seizure drugs", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Tuberculous Meningitis Stage II with Basal Exudates and Infarcts", "Microbiology", "Nervous System", "four-drug anti-tubercular therapy combined with high-dose intravenous dexamethasone", "National TB Elimination Programme Guidelines", "https://tbcindia.gov.in"),
    ("Japanese Encephalitis with Bilateral Thalamic Hyperintensities", "Microbiology", "Nervous System", "intensive neurocritical supportive care, intracranial pressure reduction, and seizure control", "National Vector Borne Disease Control Programme", "https://nvbdcp.gov.in"),
    ("Pott Spine with Cold Abscess and Neurological Paraplegia", "Surgery", "Nervous System", "emergency anterior surgical cord decompression and anti-tubercular therapy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Rabies Encephalitis Following Stray Canine Exposure", "Microbiology", "Nervous System", "palliative sedation and analgesia with prevention via post-exposure prophylaxis", "National Rabies Control Programme", "https://ncdc.gov.in"),
    ("Subacute Sclerosing Panencephalitis SSPE Following Measles", "Microbiology", "Nervous System", "intraventricular interferon-alpha and oral inosine pranobex supportive therapy", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Acute Disseminated Encephalomyelitis Following Viral Illness", "Neurology", "Nervous System", "high-dose intravenous methylprednisolone pulse therapy for five days", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Wilson Disease with Wing-Beating Tremor and Kayser-Fleischer Rings", "Biochemistry", "Nervous System", "oral copper chelation with D-penicillamine or trientine with pyridoxine supplementation", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Cerebral Venous Sinus Thrombosis in Postpartum Indian Female", "Neurology", "Nervous System", "therapeutic dose low-molecular-weight heparin anticoagulation regardless of hemorrhage", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Guillain-Barré Syndrome Acute Motor Axonal Neuropathy AMAN Subtype", "Neurology", "Nervous System", "early intravenous immunoglobulin infusion or plasmapheresis with respiratory monitoring", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Lepromatous Leprosy with Multibacillary Skin Infiltration", "Microbiology", "Dermatology", "WHO multidrug therapy with rifampicin, clofazimine, and dapsone for twelve months", "National Leprosy Eradication Programme", "https://nlep.nic.in"),
    ("Tuberculoid Leprosy with Thickened Ulnar Nerve and Sensory Loss", "Microbiology", "Dermatology", "six-month paucibacillary multidrug therapy with rifampicin and dapsone", "National Leprosy Eradication Programme", "https://nlep.nic.in"),
    ("Scrub Typhus with Eschar and Multiorgan Dysfunction Syndrome", "Microbiology", "General Principles", "immediate intravenous or oral doxycycline antimicrobial therapy", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Mycetoma Madura Foot with Discharging Sinuses and Grains", "Microbiology", "Musculoskeletal", "deep tissue biopsy, long-term oral co-trimoxazole/dapsone or antifungal surgery", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Pemphigus Foliaceus with Fogo Selvagem Superficial Blistering", "Medicine", "Dermatology", "oral systemic corticosteroids and immunosuppressive azathioprine or rituximab", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Donovanosis Granuloma Inguinale Beefy Red Ulcers", "Microbiology", "Dermatology", "oral azithromycin once weekly until complete epithelial re-epithelialization", "NACO STI Guidelines", "https://naco.gov.in"),
    ("Chikungunya Chronic Arthropathy with Persistent Synovitis", "Microbiology", "Musculoskeletal", "non-steroidal anti-inflammatory drugs and disease-modifying hydroxychloroquine", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Rickets Nutritional Vitamin D Deficiency in Infant", "Biochemistry", "Musculoskeletal", "stoss therapy with high-dose oral cholecalciferol and oral calcium supplementation", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Psoriasis Generalized Pustular Von Zumbusch Type", "Medicine", "Dermatology", "hospitalization, supportive fluid balance, and systemic oral retinoid acitretin", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Ankylosing Spondylitis with Bamboo Spine and Sacroiliitis", "Medicine", "Musculoskeletal", "physiotherapy, continuous NSAIDs, and TNF-alpha biological inhibitors", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),

    # 9. Pediatrics & Obstetrics - 10
    ("Severe Acute Malnutrition SAM with Nutritional Edema Kwashiorkor", "Pediatrics", "General Principles", "starter F-75 therapeutic formula feeding and empiric broad-spectrum antibiotic", "National Health Mission Nutrition Guidelines", "https://nhm.gov.in"),
    ("Neonatal Tetanus Presenting with Trismus and Opisthotonos", "Pediatrics", "Nervous System", "tetanus immunoglobulin, intravenous metronidazole, sedation, and supportive intensive care", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Congenital Rubella Syndrome Triad Cataract, PDA, Sensorineural Deafness", "Pediatrics", "General Principles", "supportive multidisciplinary surgical repair, hearing aids, and pediatric surveillance", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Ruptured Ectopic Pregnancy in Peripheral Community Health Centre", "Obstetrics", "Pregnancy", "emergency intravenous fluid resuscitation and immediate exploratory laparotomy", "National Health Mission Maternal Health", "https://nhm.gov.in"),
    ("Eclampsia with Tonic-Clonic Convulsions at Primary Health Centre", "Obstetrics", "Pregnancy", "intravenous and intramuscular loading dose of magnesium sulfate Pritchard regimen", "National Health Mission Maternal Health", "https://nhm.gov.in"),
    ("Obstructed Labor with Impending Bandl Ring Uterine Rupture", "Obstetrics", "Pregnancy", "immediate tocolysis, intravenous fluid resuscitation, and emergency cesarean delivery", "National Health Mission Maternal Health", "https://nhm.gov.in"),
    ("Neonatal Sepsis Early-Onset with Klebsiella Pneumoniae", "Pediatrics", "General Principles", "intravenous ampicillin combined with gentamicin or amikacin based on sensitivity", "Indian Academy of Pediatrics Guidelines", "https://iapindia.org"),
    ("Postpartum Hemorrhage Managed by Uterine Balloon Tamponade", "Obstetrics", "Pregnancy", "Bakri balloon insertion and intravenous oxytocin infusion for uterine atony", "National Health Mission Maternal Health", "https://nhm.gov.in"),
    ("Congenital Syphilis with Snuffles and Pseudoparalysis of Parrot", "Pediatrics", "General Principles", "intravenous aqueous crystalline penicillin G for ten consecutive days", "NACO STI Guidelines", "https://naco.gov.in"),
    ("Anencephaly Diagnosed on Second Trimester Ultrasound", "Obstetrics", "Pregnancy", "medical termination of pregnancy counseling under amended MTP Act", "Ministry of Health and Family Welfare Guidelines", "https://mohfw.gov.in"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Organophosphate Pesticide Poisoning with Cholinergic Toxidrome", "Pharmacology", "Nervous System", "intravenous atropine titration until respiratory secretions dry and pralidoxime", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Aluminium Phosphide Celphos Poisoning with Cardiogenic Shock", "Pharmacology", "Cardiovascular", "gastric lavage with coconut oil, intravenous magnesium, and supportive ICU care", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Dhat Syndrome Cultural Bound Anxiety in Young Adult", "Psychiatry", "Behavioral Health", "culturally sensitive psychoeducation, sex counseling, and low-dose SSRI therapy", "Indian Psychiatric Society Guidelines", "https://indianpsychiatricsociety.org"),
    ("Medical Termination of Pregnancy MTP Act Provisions Beyond 20 Weeks", "Ethics", "General Principles", "statutory opinion of two registered medical practitioners up to twenty-four weeks", "Ministry of Health and Family Welfare Guidelines", "https://mohfw.gov.in"),
    ("Pre-Conception and Pre-Natal Diagnostic Techniques PC-PNDT Act", "Ethics", "General Principles", "strict statutory prohibition of sex determination and mandatory registration of machines", "Ministry of Health and Family Welfare Guidelines", "https://mohfw.gov.in"),
    ("Delirium Tremens in Decompensated Alcoholic Liver Disease", "Psychiatry", "Behavioral Health", "short-acting benzodiazepine oxazepam or lorazepam titration and nutritional support", "Indian Psychiatric Society Guidelines", "https://indianpsychiatricsociety.org"),
    ("Postpartum Psychosis with Infanticidal Command Hallucinations", "Psychiatry", "Behavioral Health", "emergency psychiatric hospitalization, safety separation of infant, and atypical antipsychotics", "Indian Psychiatric Society Guidelines", "https://indianpsychiatricsociety.org"),
    ("Kangaroo Mother Care KMC for Low Birth Weight Newborn", "Pediatrics", "General Principles", "continuous skin-to-skin contact and exclusive breastfeeding to prevent hypothermia", "National Health Mission Newborn Health", "https://nhm.gov.in"),
    ("Informed Consent for Autopsy in Medico-Legal Death Investigation", "Ethics", "General Principles", "police inquest requisition under Section 174 CrPC superseding next-of-kin objection", "AIIMS Clinical Practice Protocols", "https://www.aiims.edu"),
    ("Universal Immunization Programme UIP Pentavalent Vaccine Schedule", "Pediatrics", "General Principles", "intramuscular administration at six, ten, and fourteen weeks of age", "Universal Immunization Programme Guidelines", "https://nhm.gov.in")
]

MRCP_TOPICS = [
    # 1. Cardiovascular - 10
    ("Marfan Syndrome with Ascending Aortic Root Aneurysm", "Genetics", "Cardiovascular", "prophylactic beta-blocker or ARB therapy and valve-sparing aortic root replacement", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Left Ventricular Free Wall Pseudoaneurysm Following Myocardial Infarction", "Surgery", "Cardiovascular", "urgent emergency open surgical repair to prevent catastrophic rupture", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Severe Tricuspid Regurgitation in Carcinoid Heart Disease", "Medicine", "Cardiovascular", "somatostatin analogs and surgical tricuspid valve replacement with bioprosthesis", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Cardiac Sarcoidosis Presenting with Complete Atrioventricular Block", "Medicine", "Cardiovascular", "high-dose systemic corticosteroids combined with dual-chamber pacemaker or ICD", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Patent Foramen Ovale with Cryptogenic Stroke in Young Adult", "Neurology", "Cardiovascular", "percutaneous transcatheter closure of patent foramen ovale", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Severe Aortic Regurgitation with Left Ventricular End-Systolic Dimension 50mm", "Surgery", "Cardiovascular", "surgical aortic valve replacement before irreversible myocardial dysfunction occurs", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Non-ST Elevation Myocardial Infarction in Frail Multimorbid Elderly", "Medicine", "Cardiovascular", "individualized invasive coronary angiography with dual antiplatelet therapy", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Biventricular Failure in AL Amyloidosis with High Free Light Chains", "Medicine", "Cardiovascular", "daratumumab-based clone-directed immunochemotherapy and supportive diuresis", "UK Myeloma Forum Guidelines", "https://www.ukmf.org.uk"),
    ("Peripartum Cardiomyopathy Presenting with Acute Pulmonary Edema", "Obstetrics", "Cardiovascular", "intravenous loop diuretics, hydralazine-nitrate vasodilatation, and bromocriptine", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),
    ("Subclavian Artery Aneurysm in Thoracic Outlet Syndrome", "Surgery", "Cardiovascular", "surgical cervical rib resection and vascular reconstruction", "Royal College of Physicians Guidelines", "https://www.rcplondon.ac.uk"),

    # 2. Respiratory - 10
    ("Allergic Bronchopulmonary Aspergillosis in Cystic Fibrosis", "Medicine", "Respiratory", "oral itraconazole antifungal therapy combined with high-dose corticosteroid taper", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Pulmonary Langerhans Cell Histiocytosis in Young Cigarette Smoker", "Medicine", "Respiratory", "complete smoking cessation and close radiological surveillance", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Chronic Thromboembolic Pulmonary Hypertension CTEPH Operable Disease", "Surgery", "Respiratory", "curative bilateral pulmonary endarterectomy under deep hypothermic circulatory arrest", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Pleural Empyema with Loculated Frank Purulent Collection", "Surgery", "Respiratory", "intrapleural tissue plasminogen activator and DNase or surgical video-assisted thoracoscopic drainage", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Silicoproteinosis Following Rapid High-Concentration Dust Exposure", "Medicine", "Respiratory", "bronchoscopic therapeutic whole-lung lavage and aggressive supportive care", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Birt-Hogg-Dube Syndrome with Multiple Basilar Pulmonary Cysts", "Genetics", "Respiratory", "pleurodesis for recurrent pneumothorax and renal surveillance for oncocytoma", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Tracheobronchomegaly Mounier-Kuhn Syndrome with Bronchiectasis", "Medicine", "Respiratory", "postural drainage, airway clearance techniques, and targeted antimicrobials", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Desquamative Interstitial Pneumonia Associated with Heavy Tobacco Smoking", "Medicine", "Respiratory", "immediate smoking cessation and oral corticosteroid therapy", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Nontuberculous Mycobacterial Pulmonary Disease Mycobacterium Xenopi", "Microbiology", "Respiratory", "triple antimicrobial therapy with rifampicin, ethambutol, and clarithromycin", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Goodpasture Anti-GBM Disease with Diffuse Alveolar Hemorrhage", "Medicine", "Respiratory", "immediate daily plasmapheresis, pulse methylprednisolone, and cyclophosphamide", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),

    # 3. Gastrointestinal - 10
    ("Primary Sclerosing Cholangitis with Dominant Common Bile Duct Stricture", "Medicine", "Gastrointestinal", "endoscopic retrograde balloon dilatation and brush cytology for cholangiocarcinoma", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Autoimmune Hepatitis Type 2 Positive for Anti-LKM1", "Medicine", "Gastrointestinal", "systemic oral prednisolone induction combined with azathioprine maintenance", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Hereditary Hemochromatosis C282Y Homozygote with Cirrhosis", "Medicine", "Gastrointestinal", "weekly therapeutic phlebotomy until serum ferritin drops below fifty micrograms", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Refractory Celiac Disease Type 2 with Aberrant T-Cell Clones", "Medicine", "Gastrointestinal", "total parenteral nutrition, systemic budesonide, and cladribine chemotherapy", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Gastric Carcinoid Neuroendocrine Tumor Type 1 in Atrophic Gastritis", "Medicine", "Gastrointestinal", "endoscopic surveillance and endoscopic mucosal resection for polyps exceeding one centimeter", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Whipple Disease Presenting with Oculomasticatory Myorhythmia", "Microbiology", "Gastrointestinal", "initial intravenous ceftriaxone for fourteen days followed by oral co-trimoxazole for one year", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Hereditary Pancreatitis PRSS1 Mutation with Calcific Disease", "Genetics", "Gastrointestinal", "pancreatic enzyme replacement, pain management, and endoscopic stone extraction", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Short Bowel Syndrome with Severe Hyperoxaluria and Nephrolithiasis", "Medicine", "Gastrointestinal", "low-oxalate diet, oral calcium carbonate with meals, and high fluid intake", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Spontaneous Bacterial Peritonitis Resistant to Third-Generation Cephalosporins", "Microbiology", "Gastrointestinal", "escalation to intravenous carbapenem therapy based on local hospital resistance", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Dieulafoy Lesion of the Proximal Stomach with Arterial Spurter", "Surgery", "Gastrointestinal", "endoscopic hemoclip application or band ligation of the aberrant submucosal vessel", "BSG Guidelines", "https://www.bsg.org.uk"),

    # 4. Renal & Genitourinary - 10
    ("Granulomatosis with Polyangiitis GPA with Rapidly Progressive Glomerulonephritis", "Medicine", "Renal", "induction immunosuppression with rituximab or cyclophosphamide plus high-dose steroids", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Cryoglobulinemic Glomerulonephritis Type II Associated with Hepatitis C", "Medicine", "Renal", "direct-acting antiviral therapy combined with rituximab for severe renal involvement", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Renal Amyloidosis AA Subtype Complicating Rheumatoid Arthritis", "Medicine", "Renal", "aggressive control of underlying chronic inflammatory drive with anti-TNF or anti-IL-6", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Fabry Disease with Proteinuria and Left Ventricular Hypertrophy", "Genetics", "Renal", "enzyme replacement therapy with agalsidase or oral chaperone migalastat", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Renal Tubular Acidosis Type 2 Proximal Fanconi Syndrome", "Medicine", "Renal", "high-dose oral sodium bicarbonate, potassium citrate, and phosphate supplementation", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Atheroembolic Renal Disease Following Coronary Angiography", "Medicine", "Renal", "discontinuation of anticoagulation, supportive statin therapy, and blood pressure control", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Eosinophilic Granulomatous Interstitial Nephritis Induced by PPIs", "Pharmacology", "Renal", "discontinuation of offending proton pump inhibitor and oral corticosteroid trial", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Bartter Syndrome Type 1 with Hypokalemic Hypochloremic Metabolic Alkalosis", "Genetics", "Renal", "high potassium and sodium chloride supplementation with oral indomethacin", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("C3 Glomerulopathy Isolated Glomerular C3 Deposition", "Medicine", "Renal", "mycophenolate mofetil immunosuppression and consideration of complement inhibitors", "UK Renal Association Guidelines", "https://www.renal.org"),
    ("Renal Vein Thrombosis in Membranous Glomerulopathy with Flank Pain", "Medicine", "Renal", "full therapeutic anticoagulation with low-molecular-weight heparin or warfarin", "UK Renal Association Guidelines", "https://www.renal.org"),

    # 5. Endocrinology - 10
    ("Cushing Disease Recurrent Following Transsphenoidal Adenomectomy", "Surgery", "Endocrine", "stereotactic radiosurgery or medical steroidogenesis inhibition with ketoconazole", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Autoimmune Hypophysitis Presenting with Diabetes Insipidus and Panhypopituitarism", "Medicine", "Endocrine", "high-dose oral glucocorticoid therapy and physiological hormone replacement", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Parathyroid Carcinoma with Severe Life-Threatening Hypercalcemia", "Surgery", "Endocrine", "en bloc surgical parathyroidectomy with ipsilateral thyroid lobectomy and cinacalcet", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Pseudohypoparathyroidism Type 1A Albright Hereditary Osteodystrophy", "Genetics", "Endocrine", "oral calcium carbonate supplementation combined with active vitamin D analog calcitriol", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Adrenocortical Carcinoma with Virilization and Cortisol Hypersecretion", "Surgery", "Endocrine", "open radical surgical resection followed by adjuvant mitotane therapy", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Thyroid Storm Resistant to First-Line Thionamides", "Medicine", "Endocrine", "therapeutic plasmapheresis or emergency total thyroidectomy under ICU care", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Insulin Autoimmune Syndrome Hirata Disease Hypoglycemia", "Medicine", "Endocrine", "frequent small low-carbohydrate meals and oral corticosteroid immunosuppression", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Acromegaly Inadequately Controlled Post-Transsphenoidal Surgery", "Medicine", "Endocrine", "somatostatin receptor ligand pasireotide or growth hormone receptor antagonist pegvisomant", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Gitelman Syndrome with Hypokalemia, Hypomagnesemia, and Hypocalciuria", "Genetics", "Endocrine", "lifelong oral magnesium and potassium chloride supplementation", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Pendred Syndrome with Sensorineural Hearing Loss and Goiter", "Genetics", "Endocrine", "levothyroxine replacement if hypothyroid, hearing amplification, and cochlear implants", "Society for Endocrinology", "https://www.endocrinology.org"),

    # 6. Hematology - 10
    ("Primary Myelofibrosis with Massive Splenomegaly and JAK2 V617F", "Medicine", "Hematology", "JAK1/2 tyrosine kinase inhibitor ruxolitinib and stem cell transplant consultation", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Systemic Mastocytosis with D816V KIT Mutation and Anaphylaxis", "Medicine", "Hematology", "targeted kinase inhibitor avapritinib or midostaurin and prophylactic epinephrine auto-injectors", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Castleman Disease Multicentric HHV-8 Negative Idiopathic Subtype", "Medicine", "Hematology", "anti-interleukin-6 monoclonal antibody siltuximab or rituximab therapy", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Hemophagocytic Lymphohistiocytosis HLH in Adult Sepsis", "Medicine", "Hematology", "immunosuppressive protocol with dexamethasone, etoposide, and intrathecal methotrexate", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Relapsed Diffuse Large B-Cell Lymphoma After Autologous Stem Cell Transplant", "Medicine", "Hematology", "CD19-directed chimeric antigen receptor CAR-T cell therapy", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Severe Congenital Neutropenia Kostmann Syndrome with ELANE Mutation", "Pediatrics", "Hematology", "daily recombinant granulocyte colony-stimulating factor G-CSF therapy", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Waldenström Macroglobulinemia with Cryoglobulinemic Neuropathy", "Medicine", "Hematology", "BTK inhibitor ibrutinib combined with rituximab and plasmapheresis if hyperviscous", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Acquired Hemophilia A with Severe Retroperitoneal Hematoma", "Medicine", "Hematology", "bypassing agents rFVIIa or FEIBA with cyclophosphamide-prednisolone immunosuppression", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Hypereosinophilic Syndrome with Endomyocardial Fibrosis", "Medicine", "Hematology", "imatinib for FIP1L1-PDGFRA positive or high-dose corticosteroids", "British Society for Haematology", "https://b-s-h.org.uk"),
    ("Post-Transfusion Purpura Severe Thrombocytopenia One Week Post-Transfusion", "Medicine", "Hematology", "intravenous immunoglobulin infusion and therapeutic plasma exchange avoiding platelet transfusions", "British Society for Haematology", "https://b-s-h.org.uk"),

    # 7. Neurology - 10
    ("Progressive Supranuclear Palsy with Vertical Gaze Palsy and Falls", "Neurology", "Nervous System", "multidisciplinary supportive palliative care, physical therapy, and fall prevention", "Association of British Neurologists", "https://www.theabn.org"),
    ("Multiple System Atrophy MSA-Autonomic Variant Shy-Drager Syndrome", "Neurology", "Nervous System", "fludrocortisone, midodrine, elastic compression stockings, and physical reconditioning", "Association of British Neurologists", "https://www.theabn.org"),
    ("Inclusion Body Myositis with Asymmetric Deep Finger Flexor Weakness", "Neurology", "Nervous System", "supportive physical and occupational therapy with surveillance for dysphagia", "Association of British Neurologists", "https://www.theabn.org"),
    ("Lambert-Eaton Myasthenic Syndrome Associated with Small Cell Lung Cancer", "Neurology", "Nervous System", "3,4-diaminopyridine amifampridine therapy and oncology chemotherapy", "Association of British Neurologists", "https://www.theabn.org"),
    ("Autoimmune Encephalitis with Anti-NMDA Receptor Antibodies", "Neurology", "Nervous System", "high-dose pulse steroids, IVIG, plasma exchange, and screening for ovarian teratoma", "Association of British Neurologists", "https://www.theabn.org"),
    ("Duchenne Muscular Dystrophy in Six-Year-Old Boy", "Pediatrics", "Nervous System", "daily oral corticosteroid therapy to preserve ambulation and cardiopulmonary monitoring", "Association of British Neurologists", "https://www.theabn.org"),
    ("Mitochondrial Encephalomyopathy with Lactic Acidosis and Stroke MELAS", "Genetics", "Nervous System", "intravenous L-arginine during acute stroke-like episodes and coenzyme Q10", "Association of British Neurologists", "https://www.theabn.org"),
    ("Spinal Muscular Atrophy Type 1 Werdnig-Hoffmann Disease", "Pediatrics", "Nervous System", "survival motor neuron gene replacement therapy with onasemnogene abeparvovec or nusinersen", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Huntington Disease with Early Behavioral Disinhibition and Chorea", "Neurology", "Nervous System", "atypical antipsychotic olanzapine or VMAT-2 inhibitor tetrabenazine with genetic counseling", "Association of British Neurologists", "https://www.theabn.org"),
    ("Miller Fisher Syndrome Triad of Ophthalmoplegia, Ataxia, and Areflexia", "Neurology", "Nervous System", "intravenous immunoglobulin therapy and continuous cardiac and respiratory monitoring", "Association of British Neurologists", "https://www.theabn.org"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Anti-Synthetase Syndrome with Mechanic Hands and Interstitial Lung Disease", "Medicine", "Musculoskeletal", "combination immunosuppression with corticosteroids and mycophenolate mofetil or tacrolimus", "British Society for Rheumatology", "https://www.rheumatology.org.uk"),
    ("Eosinophilic Fasciitis Shulman Syndrome with Groove Sign", "Medicine", "Musculoskeletal", "high-dose oral systemic corticosteroid therapy combined with methotrexate", "British Society for Rheumatology", "https://www.rheumatology.org.uk"),
    ("Erythema Elevatum Diutinum Chronic Leukocytoclastic Vasculitis", "Medicine", "Dermatology", "first-line oral dapsone therapy with routine G6PD and hematological monitoring", "British Association of Dermatologists", "https://www.bad.org.uk"),
    ("Sweet Syndrome Acute Febrile Neutrophilic Dermatosis", "Medicine", "Dermatology", "oral systemic corticosteroid therapy with rapid resolution of skin lesions", "British Association of Dermatologists", "https://www.bad.org.uk"),
    ("Behcet Disease with Recurrent Genital Aphthous Ulcers and Anterior Uveitis", "Medicine", "Dermatology", "oral colchicine, topical corticosteroids, and anti-TNF biologics for severe ocular disease", "British Society for Rheumatology", "https://www.rheumatology.org.uk"),
    ("Sjogren Syndrome with Severe Keratoconjunctivitis Sicca and Xerostomia", "Medicine", "Musculoskeletal", "preservative-free artificial tears, oral pilocarpine, and regular lymphoma screening", "British Society for Rheumatology", "https://www.rheumatology.org.uk"),
    ("Necrobiosis Lipoidica Diabeticorum with Ulceration on Pretibial Shins", "Medicine", "Dermatology", "potent topical or intralesional corticosteroids and wound barrier protection", "British Association of Dermatologists", "https://www.bad.org.uk"),
    ("Mucha-Habermann Disease Pityriasis Lichenoides et Varioliformis Acuta", "Medicine", "Dermatology", "oral erythromycin or doxycycline anti-inflammatory therapy and phototherapy", "British Association of Dermatologists", "https://www.bad.org.uk"),
    ("Granuloma Annulare Generalized Disseminated Form", "Medicine", "Dermatology", "narrowband ultraviolet B phototherapy or oral hydroxychloroquine", "British Association of Dermatologists", "https://www.bad.org.uk"),
    ("Keratoacanthoma with Rapid Growth on Sun-Exposed Dorsal Forearm", "Surgery", "Dermatology", "complete excisional biopsy to histologically exclude invasive squamous cell carcinoma", "British Association of Dermatologists", "https://www.bad.org.uk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Twin-to-Twin Transfusion Syndrome Stage III at Twenty Weeks", "Obstetrics", "Pregnancy", "fetoscopic selective laser photocoagulation of anastomotic placental vessels", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Severe Intrauterine Growth Restriction with Absent End-Diastolic Flow", "Obstetrics", "Pregnancy", "maternal corticosteroid course, intensive computerized CTG, and planned expedited delivery", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Postpartum Thyroiditis with Thyrotoxic Phase at Three Months Post-Delivery", "Obstetrics", "Endocrine", "symptomatic beta-blocker therapy with propranolol and avoidance of thionamides", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Hirschsprung Disease in Newborn Failing to Pass Meconium", "Pediatrics", "Gastrointestinal", "rectal washouts, diagnostic rectal suction biopsy, and definitive pull-through surgery", "Royal College of Paediatrics and Child Health", "https://www.rcpch.ac.uk"),
    ("Necrotizing Enterocolitis Stage IIB in Premature Infant", "Pediatrics", "Gastrointestinal", "bowel rest, parenteral nutrition, broad-spectrum antibiotics, and serial abdominal radiographs", "Royal College of Paediatrics and Child Health", "https://www.rcpch.ac.uk"),
    ("Pertussis Whooping Cough in Unvaccinated Six-Month-Old Infant", "Pediatrics", "Respiratory", "oral clarithromycin or azithromycin macrolide therapy and infant isolation", "UKHSA / RCPCH Guidelines", "https://www.rcpch.ac.uk"),
    ("Biliary Atresia Triad of Clay Stools, Dark Urine, and Jaundice", "Pediatrics", "Gastrointestinal", "urgent Kasai hepatoportoenterostomy performed before sixty days of postnatal life", "Royal College of Paediatrics and Child Health", "https://www.rcpch.ac.uk"),
    ("Primary Congenital Glaucoma with Epiphora and Photophobia", "Pediatrics", "Nervous System", "emergency surgical goniotomy or trabeculotomy to preserve vision", "Royal College of Paediatrics and Child Health", "https://www.rcpch.ac.uk"),
    ("Cervical Incompetence with Silent Dilatation at Eighteen Weeks", "Obstetrics", "Pregnancy", "emergency rescue transvaginal McDonald or Shirodkar cervical cerclage", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Placenta Percreta with Bladder Wall Invasion on MRI", "Obstetrics", "Pregnancy", "planned elective cesarean hysterectomy with multidisciplinary surgical team", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Treatment-Resistant Schizophrenia Failing Two Adequate Antipsychotic Trials", "Psychiatry", "Behavioral Health", "initiation of clozapine therapy under mandatory absolute neutrophil monitoring registry", "Royal College of Psychiatrists Guidelines", "https://www.rcpsych.ac.uk"),
    ("Neuroleptic Malignant Syndrome with Severe Rigidity and Hyperthermia", "Psychiatry", "Behavioral Health", "immediate cessation of dopamine antagonists, intensive ICU hydration, and dantrolene or bromocriptine", "Royal College of Psychiatrists Guidelines", "https://www.rcpsych.ac.uk"),
    ("Deputyship Application under Mental Capacity Act for Advanced Dementia", "Ethics", "General Principles", "formal application to the Court of Protection for property and welfare deputyship", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Living Will Advance Statement Requesting No Antibiotics for Terminal Aspiration", "Ethics", "General Principles", "abiding by legally valid advance refusal of life-sustaining treatment", "GMC Good Medical Practice", "https://www.gmc-uk.org"),
    ("Fitness to Fly Assessment with Pneumothorax History", "Medicine", "General Principles", "mandatory waiting period of seven days post-resolution with radiographic confirmation", "Civil Aviation Authority / BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Notifiable Disease Reporting for Viral Hemorrhagic Fever", "Microbiology", "General Principles", "immediate statutory notification to the proper officer at UK Health Security Agency", "UKHSA Guidelines", "https://www.gov.uk/government/organisations/uk-health-security-agency"),
    ("Clinical Trials Informed Consent in Phase 1 Escalation Study", "Ethics", "General Principles", "rigorous independent ethics committee review and verified participant comprehension", "Health Research Authority Guidelines", "https://www.hra.nhs.uk"),
    ("Munchausen Syndrome Adult Factitious Disorder with Recurrent Surgeries", "Psychiatry", "Behavioral Health", "supportive non-punitive confrontation, psychiatric liaison, and central hospital record flagging", "Royal College of Psychiatrists Guidelines", "https://www.rcpsych.ac.uk"),
    ("Persistent Depressive Disorder Dysthymia with Chronic Low Mood", "Psychiatry", "Behavioral Health", "combination psychotherapy with cognitive behavioral therapy and long-term SSRI maintenance", "Royal College of Psychiatrists Guidelines", "https://www.rcpsych.ac.uk"),
    ("Confidentiality in Suspected Gunshot Wound Presentation", "Ethics", "General Principles", "statutory duty to immediately report gunshot injuries to police for public safety", "GMC Good Medical Practice", "https://www.gmc-uk.org")
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
    validate_topics(MCCQE_TOPICS, "MCCQE")
    validate_topics(NEET_PG_TOPICS, "NEET PG")
    validate_topics(MRCP_TOPICS, "MRCP")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega77_topics_b.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 77 Topics Part B\n\n")
        f.write(f"MCCQE_TOPICS = {repr(MCCQE_TOPICS)}\n\n")
        f.write(f"NEET_PG_TOPICS = {repr(NEET_PG_TOPICS)}\n\n")
        f.write(f"MRCP_TOPICS = {repr(MRCP_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
