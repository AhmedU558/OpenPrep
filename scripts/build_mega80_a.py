"""
Topic Generator for Mega-Batch 80 - Part A
Tracks:
- Batch 386: 100 MRCP (UK) topics (2,800 -> 2,900)
- Batch 387: 100 FCPS (Pakistan) topics (2,800 -> 2,900)
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

MRCP_TOPICS = [
    # 1. Cardiovascular - 10
    ("Bicuspid Aortic Valve with Severe Regurgitation and Ascending Aorta 52mm", "Medicine", "Cardiovascular", "surgical aortic valve replacement and concomitant ascending aortic aneurysm repair", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Arrhythmogenic Right Ventricular Cardiomyopathy ARVC in Young Male", "Medicine", "Cardiovascular", "cardiac magnetic resonance CMR imaging, antiarrhythmic therapy, and implantable cardioverter-defibrillator", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Left Ventricular Non-Compaction Cardiomyopathy with Systolic Dysfunction", "Medicine", "Cardiovascular", "guideline-directed heart failure medical therapy and oral anticoagulation to prevent thromboembolism", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Wolff-Parkinson-White Syndrome with Pre-Excited Atrial Fibrillation", "Medicine", "Cardiovascular", "immediate synchronized electrical DC cardioversion or intravenous procainamide/ibutilide", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Post-Cardiac Injury Syndrome Dressler Syndrome Two Weeks Post-MI", "Medicine", "Cardiovascular", "oral high-dose aspirin or ibuprofen combined with oral colchicine for three months", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Cardiac Amyloidosis ATTR Transthyretin Wild-Type in Elderly Patient", "Medicine", "Cardiovascular", "technetium-99m pyrophosphate PYP bone scintigraphy and targeted tafamidis therapy", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Refractory Vasospastic Prinzmetal Angina with ST Elevation", "Medicine", "Cardiovascular", "high-dose calcium channel blocker diltiazem/amlodipine combined with long-acting nitrate", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Orthostatic Hypotension Neurogenic in Pure Autonomic Failure", "Medicine", "Cardiovascular", "fludrocortisone volume expansion, midodrine alpha-1 agonist, and physical counter-pressure maneuvers", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Tricuspid Regurgitation Severe Functional Secondary to Pulmonary Hypertension", "Medicine", "Cardiovascular", "loop diuretic therapy combined with targeted pulmonary vasodilator therapy for WHO Group 1", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Subclavian Steal Syndrome with Vertebrobasilar Ischemia and Arm Claudication", "Medicine", "Cardiovascular", "percutaneous transluminal angioplasty with endovascular stenting of subclavian artery", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 2. Respiratory - 10
    ("Pulmonary Alveolar Proteinosis PAP Presenting with Dyspnea and Crazy Paving", "Medicine", "Respiratory", "bronchoalveolar lavage milky fluid and therapeutic whole-lung lavage under general anesthesia", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Eosinophilic Granulomatosis with Polyangiitis EGPA Churg-Strauss Syndrome", "Immunology", "Respiratory", "systemic glucocorticoid pulse therapy combined with cyclophosphamide or mepolizumab anti-IL-5", "BTS Vasculitis Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Lymphangioleiomyomatosis LAM in Reproductive-Age Female with Chylothorax", "Medicine", "Respiratory", "high-resolution CT demonstrating thin-walled cysts and mTOR inhibitor sirolimus therapy", "BTS Rare Lung Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Cryptogenic Organizing Pneumonia COP with Subpleural Consolidations", "Medicine", "Respiratory", "transbronchial lung biopsy and prompt course of oral systemic corticosteroids", "BTS Interstitial Lung Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Hypersensitivity Pneumonitis Chronic Farmer Lung with Fibrotic Changes", "Immunology", "Respiratory", "strict antigen avoidance, occupational protection, and oral corticosteroid trial", "BTS Interstitial Lung Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Allergic Bronchopulmonary Aspergillosis ABPA in Severe Asthmatic", "Immunology", "Respiratory", "oral systemic prednisolone combined with oral itraconazole antifungal therapy", "BTS Asthma Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Severe Community-Acquired Legionella Pneumophila Serogroup 1", "Microbiology", "Respiratory", "urinary Legionella antigen testing and high-dose intravenous levofloxacin or azithromycin", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Malignant Pleural Mesothelioma with Extensive Pleural Thickening", "Pathology", "Respiratory", "thoracoscopic pleural biopsy for histology, systemic pemetrexed/cisplatin, and palliative drainage", "BTS Pleural Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Tracheobronchomalacia Severe Dynamic Airway Collapse Exceeding 70%", "Medicine", "Respiratory", "dynamic flexible bronchoscopy assessment, CPAP stent therapy, or surgical tracheobronchoplasty", "BTS Airway Disease Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Nontuberculous Mycobacterial NTM Lung Disease Mycobacterium Avium Complex", "Microbiology", "Respiratory", "three-drug antimicrobial regimen clarithromycin, rifampin, and ethambutol for at least 12 months", "BTS NTM Guidelines", "https://www.brit-thoracic.org.uk"),

    # 3. Gastrointestinal - 10
    ("Autoimmune Hepatitis Type 1 with High IgG and Anti-Smooth Muscle Antibodies", "Medicine", "Gastrointestinal", "oral prednisolone induction combined with azathioprine steroid-sparing maintenance", "British Society of Gastroenterology (BSG) Guidelines", "https://www.bsg.org.uk"),
    ("Primary Sclerosing Cholangitis PSC Associated with Ulcerative Colitis", "Medicine", "Gastrointestinal", "MRCP magnetic resonance cholangiopancreatography showing beaded ducts and annual surveillance colonoscopy", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Wilson Disease Presenting with Neuropsychiatric Symptoms and Kayser-Fleischer Rings", "Genetics", "Gastrointestinal", "serum ceruloplasmin, 24-hour urine copper, and copper chelation with penicillamine or trientine", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Eosinophilic Esophagitis EoE with Solid Food Dysphagia and Food Impaction", "Immunology", "Gastrointestinal", "topical swallowed fluticasone or budesonide orodispersible tablets and elimination diet", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Microscopic Colitis Collagenous Colitis with Chronic Watery Diarrhea", "Medicine", "Gastrointestinal", "colonoscopy with multiple mucosal biopsies and oral budesonide 9 mg daily course", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Gastric Antral Vascular Ectasia GAVE Watermelon Stomach with Chronic Anemia", "Medicine", "Gastrointestinal", "endoscopic argon plasma coagulation APC ablation of ectatic antral vessels", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Hereditary Hemochromatosis HFE C282Y with Hepatic Cirrhosis Risk", "Genetics", "Gastrointestinal", "regular therapeutic phlebotomy to achieve target serum ferritin 50 to 100 mcg/L", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Short Bowel Syndrome Post-Mesenteric Infarction with Severe Malabsorption", "Surgery", "Gastrointestinal", "total parenteral nutrition TPN, oral rehydration solution, and GLP-2 analogue teduglutide", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Small Intestinal Bacterial Overgrowth SIBO with Positive Lactulose Breath Test", "Microbiology", "Gastrointestinal", "oral non-absorbable antibiotic rifaximin 550 mg three times daily for 14 days", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Spontaneous Bacterial Peritonitis SBP Recurrence Secondary Prophylaxis", "Microbiology", "Gastrointestinal", "long-term daily oral ciprofloxacin 500 mg or norfloxacin 400 mg prophylaxis", "BSG Guidelines", "https://www.bsg.org.uk"),

    # 4. Renal & Genitourinary - 10
    ("Anti-GBM Glomerulonephritis Goodpasture Syndrome with Pulmonary Hemorrhage", "Immunology", "Renal", "immediate urgent therapeutic plasma exchange TPE, pulse methylprednisolone, and cyclophosphamide", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Membranous Nephropathy Primary with Positive Anti-PLA2R Antibodies", "Immunology", "Renal", "quantifying proteinuria and risk stratification followed by rituximab targeted anti-CD20 therapy", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("ANCA-Associated Vasculitis Granulomatosis with Polyangiitis GPA Renal", "Immunology", "Renal", "induction with intravenous rituximab or cyclophosphamide combined with pulsed glucocorticoids", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Focal Segmental Glomerulosclerosis FSGS Adult Nephrotic Syndrome", "Medicine", "Renal", "genetic testing for APOL1, high-dose oral prednisolone, and calcineurin inhibitor if resistant", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Atheroembolic Renal Disease Cholesterol Embolization Following Angiography", "Pathology", "Renal", "supportive medical management, cessation of anticoagulation, statin therapy, and BP control", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Lupus Nephritis ISN/RPS Class IV Diffuse Proliferative", "Immunology", "Renal", "renal biopsy confirmation and induction with mycophenolate mofetil or cyclophosphamide plus steroids", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Type 1 Renal Tubular Acidosis Distal RTA with Hypokalemic Nephrocalcinosis", "Biochemistry", "Renal", "oral potassium citrate or sodium bicarbonate alkali replacement therapy", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Type 2 Renal Tubular Acidosis Proximal RTA with Fanconi Syndrome", "Biochemistry", "Renal", "high-dose oral alkali therapy, potassium supplementation, and phosphate repletion", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Type 4 Renal Tubular Acidosis Hyperkalemic Hyporeninemic Hypoaldosteronism", "Biochemistry", "Renal", "low-potassium diet, loop diuretic furosemide, and oral fludrocortisone if refractory", "UK Kidney Association Guidelines", "https://ukkidney.org"),
    ("Fabry Disease Nephropathy with Proteinuria and Acroparesthesias", "Genetics", "Renal", "alpha-galactosidase A enzyme measurement, GLA sequencing, and enzyme replacement therapy", "UK Kidney Association Guidelines", "https://ukkidney.org"),

    # 5. Endocrine - 10
    ("Syndrome of Inappropriate Antidiuretic Hormone SIADH from Small Cell Lung Cancer", "Medicine", "Endocrine", "fluid restriction below 800 to 1000 ml daily and oral urea or vasopressin receptor antagonist", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Central Diabetes Insipidus Post-Pituitary Adenoma Surgery", "Medicine", "Endocrine", "water deprivation test confirmation and oral or intranasal desmopressin DDAVP titration", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Multiple Endocrine Neoplasia Type 1 MEN1 with Recurrent Hypercalcemia", "Genetics", "Endocrine", "subtotal parathyroidectomy and screening for enteropancreatic neuroendocrine tumors and prolactinoma", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Multiple Endocrine Neoplasia Type 2A MEN2A with RET Mutation", "Genetics", "Endocrine", "prophylactic total thyroidectomy and plasma metanephrines screening before surgical intervention", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Subacute Granulomatous De Quervain Thyroiditis Post-Viral Painful Neck", "Medicine", "Endocrine", "oral high-dose NSAID or oral prednisolone for pain and propranolol for transient hyperthyroidism", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Riedel Thyroiditis Presentation with Woody Hard Fixed Thyroid Mass", "Medicine", "Endocrine", "core needle biopsy excluding anaplastic carcinoma and systemic tamoxifen or glucocorticoid therapy", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Autoimmune Polyglandular Syndrome Type 1 APS-1 with AIRE Mutation", "Genetics", "Endocrine", "chronic mucocutaneous candidiasis therapy, hydrocortisone for Addison, and calcium/calcitriol", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Pituitary Apoplexy with Sudden Severe Headache and Bitemporal Hemianopia", "Surgery", "Endocrine", "emergency intravenous high-dose hydrocortisone 100 mg bolus and urgent neurosurgical transsphenoidal decompression", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),
    ("Severe Hypertriglyceridemia Exceeding 10 mmol/L with Eruptive Xanthomas", "Biochemistry", "Endocrine", "oral fibrate fenofibrate therapy, low-fat diet, omega-3 fatty acids, and avoiding acute pancreatitis", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Glucagonoma Presentation with Necrolytic Migratory Erythema and Diabetes", "Medicine", "Endocrine", "serum glucagon level measurement, multiphase abdominal CT, and subcutaneous octreotide therapy", "Society for Endocrinology UK Guidelines", "https://www.endocrinology.org"),

    # 6. Hematology - 10
    ("Paroxysmal Nocturnal Hemoglobinuria PNH with Intravascular Hemolysis", "Medicine", "Hematology", "flow cytometry demonstrating CD55 and CD59 deficiency and complement C5 inhibitor eculizumab", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Cold Agglutinin Disease Autoimmune Hemolytic Anemia IgM-Mediated", "Immunology", "Hematology", "keeping patient warm, avoiding unheated infusions, and targeted anti-CD20 rituximab therapy", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Warm Autoimmune Hemolytic Anemia IgG-Mediated with Positive DAT", "Immunology", "Hematology", "oral prednisolone 1 mg/kg daily with gradual taper and folate supplementation", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Essential Thrombocythemia JAK2 V617F Positive High-Risk Patient", "Medicine", "Hematology", "cytoreductive therapy with oral hydroxycarbamide hydroxyurea combined with low-dose aspirin", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Polycythemia Vera JAK2 V617F Positive with Hematocrit 58%", "Medicine", "Hematology", "therapeutic venesection phlebotomy targeting hematocrit below 45% and low-dose daily aspirin", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Primary Myelofibrosis with Massive Splenomegaly and Leukoerythroblastosis", "Medicine", "Hematology", "JAK1/JAK2 inhibitor ruxolitinib therapy and allogeneic stem cell transplantation evaluation", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Hairy Cell Leukemia with Pancytopenia and Splenomegaly", "Medicine", "Hematology", "bone marrow biopsy showing TRAP positive cells and purine nucleoside analogue cladribine", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Waldenstrom Macroglobulinemia with Serum Hyperviscosity Syndrome", "Medicine", "Hematology", "urgent therapeutic plasmapheresis to lower IgM levels followed by rituximab-based chemoimmunotherapy", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Acquired Hemophilia A with Spontaneous Extensive Soft Tissue Hematomas", "Immunology", "Hematology", "recombinant activated factor VII rFVIIa or activated prothrombin complex FEIBA and immunosuppression", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),
    ("Antiphospholipid Syndrome APS Catastrophic CAPS with Multi-Organ Failure", "Immunology", "Hematology", "triple therapy therapeutic anticoagulation with heparin, high-dose corticosteroids, and plasma exchange", "British Society for Haematology Guidelines", "https://b-s-h.org.uk"),

    # 7. Neurology - 10
    ("Amyotrophic Lateral Sclerosis ALS Motor Neurone Disease Upper and Lower Signs", "Medicine", "Nervous System", "electromyography EMG confirmation, multidisciplinary team referral, and oral riluzole 50 mg twice daily", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Progressive Supranuclear Palsy PSP with Vertical Gaze Palsy and Early Falls", "Medicine", "Nervous System", "multidisciplinary neurological rehabilitation, walking aids, speech therapy, and swallowing assessment", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Multiple System Atrophy MSA with Severe Autonomic Failure and Parkinsonism", "Medicine", "Nervous System", "supportive management of postural hypotension, urinary symptoms, and physical therapy", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Huntington Disease with Chorea and Cognitive Decline in 38-Year-Old", "Genetics", "Nervous System", "HTT gene CAG repeat expansion testing, genetic counseling, and tetrabenazine for chorea", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Creutzfeldt-Jakob Disease Sporadic Rapidly Progressive Dementia with Myoclonus", "Pathology", "Nervous System", "MRI brain showing cortical ribboning, CSF RT-QuIC positivity, and palliative supportive care", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Autoimmune Encephalitis Anti-NMDA Receptor in Young Female with Teratoma", "Immunology", "Nervous System", "pelvic MRI/ultrasound for ovarian teratoma removal, IV pulse steroids, and plasma exchange/IVIG", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Idiopathic Intracranial Hypertension IIH in Young Overweight Female", "Medicine", "Nervous System", "lumbar puncture opening pressure over 25 cm H2O, weight loss, and oral acetazolamide", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Trigeminal Neuralgia Classic V2/V3 Distribution Electric Shocks", "Medicine", "Nervous System", "first-line oral carbamazepine or oxcarbazepine titrated to effect and MRI brain", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Chronic Inflammatory Demyelinating Polyneuropathy CIDP Progressive Over 2 Months", "Medicine", "Nervous System", "nerve conduction studies showing demyelination and maintenance IVIG or oral prednisolone", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),
    ("Lambert-Eaton Myasthenic Syndrome LEMS with Proximal Weakness Improving on Effort", "Immunology", "Nervous System", "anti-P/Q-type voltage-gated calcium channel antibodies, CT chest for small cell cancer, and 3,4-DAP", "Royal College of Physicians UK Guidelines", "https://www.mrcpuk.org"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Systemic Sclerosis Diffuse Cutaneous SSc with Rapid Skin Thickening", "Immunology", "Musculoskeletal", "anti-Scl-70 topoisomerase I antibody testing, baseline HRCT chest, and oral mycophenolate mofetil", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Scleroderma Renal Crisis with Sudden Severe Hypertension and AKI", "Medicine", "Renal", "immediate aggressive ACE inhibitor captopril titration and avoidance of systemic corticosteroids", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Dermatomyositis with Gottron Papules and Proximal Muscle Weakness", "Immunology", "Musculoskeletal", "elevated creatine kinase, muscle MRI/biopsy, systemic oral prednisolone, and age-appropriate cancer screen", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Polymyositis Presentation with Symmetrical Proximal Muscle Weakness", "Immunology", "Musculoskeletal", "oral high-dose prednisolone combined with methotrexate or azathioprine maintenance", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Sjogren Syndrome Primary with Severe Keratoconjunctivitis Sicca and Xerostomia", "Immunology", "Musculoskeletal", "anti-Ro/SSA and anti-La/SSB antibodies, artificial tears, saliva substitutes, and pilocarpine", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Behcet Disease with Recurrent Oral Aphthae, Genital Ulcers, and Anterior Uveitis", "Immunology", "Musculoskeletal", "topical triamcinolone for ulcers, systemic azathioprine, and anti-TNF infliximab for ocular disease", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Adult-Onset Still Disease AOSD with Quotidian Fevers and Salmon Rash", "Immunology", "Musculoskeletal", "massively elevated serum ferritin, oral NSAIDs or systemic glucocorticoids, and IL-1 anakinra", "British Society for Rheumatology Guidelines", "https://rheumatology.org.uk"),
    ("Pemphigus Foliaceus with Superficial Crusts and Flaccid Bullae", "Immunology", "Dermatology", "anti-desmoglein-1 autoantibody detection and topical high-potency or systemic corticosteroids", "British Association of Dermatologists Guidelines", "https://www.bad.org.uk"),
    ("Bullous Pemphigoid Tense Subepidermal Bullae in Elderly Patient", "Immunology", "Dermatology", "anti-BP180/BP230 antibodies and high-potency topical clobetasol propionate cream therapy", "British Association of Dermatologists Guidelines", "https://www.bad.org.uk"),
    ("Pyoderma Gangrenosum Associated with Active Ulcerative Colitis", "Immunology", "Dermatology", "systemic oral prednisolone or cyclosporine and treating the underlying inflammatory bowel disease", "British Association of Dermatologists Guidelines", "https://www.bad.org.uk"),

    # 9. Infectious Diseases & Public Health - 10
    ("HIV-1 Infection Newly Diagnosed Treatment-Naive in NHS Clinic", "Microbiology", "General Principles", "immediate initiation of three-drug antiretroviral therapy ART with integrase strand transfer inhibitor", "British HIV Association (BHIVA) Guidelines", "https://www.bhiva.org"),
    ("Pneumocystis Jirovecii Pneumonia PCP in Advanced HIV CD4 Below 200", "Microbiology", "Respiratory", "high-dose intravenous co-trimoxazole trimethoprim-sulfamethoxazole and adjunctive prednisolone", "BHIVA Guidelines", "https://www.bhiva.org"),
    ("Cerebral Toxoplasmosis in HIV Patient with Ring-Enhancing Lesions", "Microbiology", "Nervous System", "oral pyrimethamine combined with sulfadiazine and folinic acid rescue therapy", "BHIVA Guidelines", "https://www.bhiva.org"),
    ("Cryptococcal Meningitis in Immunocompromised Host with Elevated ICP", "Microbiology", "Nervous System", "intravenous liposomal amphotericin B combined with oral flucytosine and therapeutic lumbar punctures", "BHIVA Guidelines", "https://www.bhiva.org"),
    ("Infectious Mononucleosis Epstein-Barr Virus EBV with Exudative Tonsillitis", "Microbiology", "General Principles", "supportive rest, analgesia, hydration, and strict avoidance of contact sports to prevent splenic rupture", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Lyme Disease Early Localized Stage with Erythema Migrans Rash", "Microbiology", "Dermatology", "oral doxycycline 100 mg twice daily for 21 days based on classic clinical appearance without serology", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Invasive Aspergillosis in Prolonged Severe Neutropenia", "Microbiology", "Respiratory", "serum galactomannan testing, chest CT halo sign, and intravenous voriconazole or isavuconazole", "British Society for Antimicrobial Chemotherapy Guidelines", "https://bsac.org.uk"),
    ("Severe Falciparum Malaria with Impaired Consciousness in UK Traveler", "Microbiology", "General Principles", "immediate intravenous artesunate 2.4 mg/kg at 0, 12, and 24 hours under intensive care supervision", "UK Malaria Guidelines", "https://www.gov.uk/government/organisations/uk-health-security-agency"),
    ("Enteric Typhoid Fever Salmonella Typhi with Step-Ladder Pyrexia", "Microbiology", "Gastrointestinal", "blood cultures, intravenous ceftriaxone 2g daily or oral azithromycin for resistant strains", "UK Health Security Agency Guidelines", "https://www.gov.uk/government/organisations/uk-health-security-agency"),
    ("Clostridioides Difficile Infection Recurrent Multiple Episodes", "Microbiology", "Gastrointestinal", "oral fidaxomicin pulse-taper regimen or evaluation for fecal microbiota transplantation FMT", "NICE Clinical Guidelines", "https://www.nice.org.uk"),

    # 10. Ethics, Palliative & Clinical Pharmacology - 10
    ("Palliative Symptom Control for Refractory Breathlessness in Terminal Cancer", "Pharmacology", "Respiratory", "low-dose oral or subcutaneous morphine titration and fan therapy or calm reassurance", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Opioid-Induced Constipation in Advanced Palliative Care", "Pharmacology", "Gastrointestinal", "regular stimulant laxative senna plus stool softener docusate or peripherally acting PAMORA", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Anticipatory Prescribing for End-of-Life Care Five Key Symptoms", "Medicine", "General Principles", "prescribing PRN subcutaneous medication for pain, breathlessness, nausea, agitation, and secretions", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Digoxin Toxicity Precipitated by Clarithromycin Co-Prescription", "Pharmacology", "Cardiovascular", "stopping digoxin, checking serum potassium and ECG, and administering digoxin-specific Fab fragments", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Serotonin Syndrome Precipitated by SSRI and Tramadol Interaction", "Pharmacology", "Nervous System", "immediate discontinuation of serotonergic agents, supportive cooling, and oral cyproheptadine", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Neuroleptic Malignant Syndrome NMS from Haloperidol with Rigidity", "Pharmacology", "Nervous System", "immediate neuroleptic cessation, aggressive hydration, intensive cooling, and bromocriptine/dantrolene", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Lithium Toxicity Acute on Chronic with Ataxia and Tremor", "Pharmacology", "Nervous System", "normal saline volume resuscitation, serial lithium levels, and hemodialysis if severe neurological signs", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Methotrexate Toxicity with Severe Mucositis and Pancytopenia", "Pharmacology", "Hematology", "immediate intravenous folinic acid leucovorin rescue and alkalinized intravenous hydration", "NICE Clinical Guidelines", "https://www.nice.org.uk"),
    ("Advance Decision to Refuse Treatment ADRT Validity Assessment under MCA 2005", "Ethics", "General Principles", "verifying that ADRT is valid, applicable to current situation, in writing, signed, and witnessed", "General Medical Council Guidance", "https://www.gmc-uk.org"),
    ("Withholding Cardiopulmonary Resuscitation DNACPR Decision Making", "Ethics", "General Principles", "timely discussion with patient or family and documenting clear clinical rationale on standard form", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk")
]

FCPS_TOPICS = [
    # 1. Cardiovascular - 10
    ("Rheumatic Mitral Stenosis with Severe Pulmonary Hypertension in Mayo Hospital", "Medicine", "Cardiovascular", "percutaneous transvenous mitral commissurotomy PTMC or open surgical mitral valve replacement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Aortic Root Abscess in Prosthetic Valve Endocarditis at PIMS", "Surgery", "Cardiovascular", "emergency radical aortic root debridement, reconstruction, and homograft/prosthetic replacement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Coronary Artery Bypass Grafting CABG in Triple Vessel Disease with Low EF", "Surgery", "Cardiovascular", "on-pump coronary artery bypass grafting with left internal mammary artery to LAD anastomosis", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tetralogy of Fallot Hypercyanotic Tet Spell in Toddler in JPMC", "Surgery", "Cardiovascular", "knee-chest positioning, supplemental oxygen, subcutaneous morphine, and IV beta-blocker", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Patent Ductus Arteriosus Large with Left-to-Right Shunt in Lahore", "Surgery", "Cardiovascular", "transcatheter ductal coil or device closure or surgical double ligation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Cardiac Myxoma Left Atrial with Prolapse and Mitral Inflow Obstruction", "Surgery", "Cardiovascular", "emergency median sternotomy with complete full-thickness surgical excision of atrial septum base", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Constrictive Pericarditis Calcified Tuberculous in Services Hospital", "Surgery", "Cardiovascular", "radical anterolateral pericardiectomy with complete phrenic nerve preservation under TB coverage", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Abdominal Aortic Aneurysm Rupturing in Elderly Male in Civil Hospital", "Surgery", "Cardiovascular", "emergency exploratory laparotomy, proximal aortic cross-clamping, and Dacron graft interposition", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Iliofemoral Arterial Embolism with Pale Cold Lower Limb", "Surgery", "Cardiovascular", "emergency femoral arteriotomy and Fogarty balloon catheter embolectomy with fasciotomy review", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Arteriovenous Fistula Radiocephalic Brescia-Cimino Maturation Failure", "Surgery", "Cardiovascular", "duplex ultrasound mapping followed by surgical revision or balloon angioplasty maturation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 2. Respiratory - 10
    ("Multidrug-Resistant Tuberculosis MDR-TB with Cavitary Consolidation", "Microbiology", "Respiratory", "longer oral all-oral bedaquiline-containing regimen under National TB Control Program", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Hydatid Cyst of the Right Lower Lobe Rupturing into Bronchus", "Surgery", "Respiratory", "thoracotomy, cystotomy with removal of laminated membrane, capitonnage, and albendazole", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Chronic Empyema Thoracis with Trapped Lung in Lady Reading Hospital", "Surgery", "Respiratory", "open thoracotomy or VATS pulmonary decortication and intercostal chest tube drainage", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tracheobronchial Foreign Body Betel Nut Aspiration in 3-Year-Old", "Surgery", "Respiratory", "emergency rigid bronchoscopy under general anesthesia for foreign body extraction", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Bronchogenic Carcinoma Squamous Cell Centrally Located Resectable T2N1", "Surgery", "Respiratory", "anatomical left upper lobectomy with mediastinal lymph node dissection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pulmonary Arteriovenous Malformation with Paradoxical Embolic Stroke", "Surgery", "Cardiovascular", "transcatheter endovascular coil embolization of the feeding pulmonary segmental artery", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Massive Pleural Effusion Tuberculous in Young Male in Nishtar Hospital", "Microbiology", "Respiratory", "therapeutic thoracentesis with gradual drainage avoiding re-expansion edema and anti-TB therapy", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Diaphragmatic Rupture Traumatic Blunt Following Road Traffic Accident", "Surgery", "Respiratory", "exploratory laparotomy with reduction of herniated viscera and non-absorbable suture repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Mediastinal Teratoma Anterior Mediastinum with Calcification", "Surgery", "Respiratory", "complete surgical excision via median sternotomy or video-assisted thoracoscopic surgery", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Flail Chest with Severe Pulmonary Contusion in Polytrauma Patient", "Surgery", "Respiratory", "adequate regional analgesia with thoracic epidural, pulmonary toilet, and positive-pressure ventilation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 3. Gastrointestinal - 10
    ("Carcinoma Esophagus Middle Third Locally Advanced Resectable", "Surgery", "Gastrointestinal", "neoadjuvant chemoradiotherapy followed by subtotal esophagectomy with gastric conduit reconstruction", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Gastric Adenocarcinoma Antral T3N1M0 in Mayo Hospital Lahore", "Surgery", "Gastrointestinal", "radical subtotal gastrectomy with D2 lymphadenectomy and Roux-en-Y gastrojejunostomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Liver Abscess Pyogenic Klebsiella Pneumoniae in Diabetic Patient", "Microbiology", "Gastrointestinal", "ultrasound-guided percutaneous pigtail catheter drainage and targeted intravenous third-generation cephalosporin", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hepatic Hydatid Cyst Multivesicular Grade CE2 in Civil Hospital", "Surgery", "Gastrointestinal", "open or laparoscopic total pericystectomy with hypertonic saline scolicidal protection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Choledocholithiasis with Charcot Triad Acute Cholangitis in PIMS", "Surgery", "Gastrointestinal", "emergency ERCP with endoscopic biliary sphincterotomy and basket stone clearance", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Carcinoma Head of Pancreas Resectable with Obstructive Jaundice", "Surgery", "Gastrointestinal", "pancreaticoduodenectomy Whipple procedure with retroperitoneal soft-tissue margin clearance", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Small Bowel Obstruction from Adhesive Bands with Signs of Strangulation", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy, adhesiolysis, and resection of gangrenous small intestine", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Sigmoid Volvulus with Failed Endoscopic Derotation in Elderly Male", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and Hartmann procedure with sigmoid colon resection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Ulcerative Colitis Toxic Megacolon Refractory to Intravenous Steroids", "Surgery", "Gastrointestinal", "emergency subtotal colectomy with end ileostomy and preservation of rectal stump", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Bile Duct Injury Strasberg Type E Complete Transection During Cholecystectomy", "Surgery", "Gastrointestinal", "delayed Roux-en-Y hepaticojejunostomy by expert hepatobiliary surgeon after sepsis control", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 4. Renal & Genitourinary - 10
    ("Renal Cell Carcinoma Clear Cell 6cm Lower Pole Confined to Kidney", "Surgery", "Renal", "robotic or open partial nephrectomy with warm ischemia and negative surgical margins", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Staghorn Calculus Complete Struvite in Female with Proteus UTI", "Surgery", "Renal", "percutaneous nephrolithotomy PCNL combined with culture-directed targeted antimicrobials", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Urethral Stricture Bulbar Traumatic Long-Segment in Young Male", "Surgery", "Renal", "substitution urethroplasty using buccal mucosal graft BMG through perineal approach", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Bladder Exstrophy in Newborn Infant in Children's Hospital Lahore", "Surgery", "Renal", "staged functional bladder closure with pelvic osteotomy and posterior rectus fascia repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hypospadias Distal Penile with Ventral Curvature Chordee", "Surgery", "Renal", "tubularized incised plate TIP urethroplasty Snodgrass repair at 6 to 18 months of age", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Testicular Teratoma Non-Seminomatous Germ Cell Tumor Confined", "Surgery", "Renal", "radical high inguinal orchiectomy with early spermatic cord vascular control at deep ring", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pelviureteric Junction PUJ Obstruction Congenital in Young Adult", "Surgery", "Renal", "dismembered Anderson-Hynes pyeloplasty via laparoscopic or open retroperitoneal approach", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Fournier Gangrene Extensive Involving Scrotum, Perineum, and Abdominal Wall", "Surgery", "Renal", "radical surgical debridement, broad-spectrum triple antibiotics, and diverting colostomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Vesicovaginal Fistula Trigeminal Complex Following Obstructed Labor", "Surgery", "Renal", "delayed transvaginal fistula repair with interposition Martius bulbocavernosus fat graft", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Renal Allograft Acute Cellular Rejection with Oliguria and Graft Tenderness", "Medicine", "Renal", "allograft biopsy confirmation and high-dose intravenous pulse methylprednisolone 500 mg daily", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 5. Endocrine - 10
    ("Multinodular Goitre Huge Retrosternal Compressing Trachea", "Surgery", "Endocrine", "total thyroidectomy via cervical collar incision with sternotomy instruments on standby", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Papillary Thyroid Carcinoma Bethesda VI with Lateral Neck Node Metastases", "Surgery", "Endocrine", "total thyroidectomy with central compartment and ipsilateral modified radical neck dissection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Medullary Thyroid Carcinoma Sporadic Calcitonin 1800 pg/ml", "Surgery", "Endocrine", "total thyroidectomy with bilateral central and lateral neck compartment dissection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Anaplastic Thyroid Carcinoma Presenting with Rapid Stridor and Airway Compromise", "Surgery", "Endocrine", "emergency tracheostomy or stenting, palliative radiation, and targeted therapy if BRAF mutated", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Primary Hyperparathyroidism Single Left Inferior Adenoma Sestamibi Positive", "Surgery", "Endocrine", "minimally invasive radio-guided parathyroidectomy with intraoperative PTH monitoring", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Secondary Hyperparathyroidism Tertiary Autonomous in End-Stage Renal Disease", "Surgery", "Endocrine", "subtotal parathyroidectomy 3.5 glands or total parathyroidectomy with forearm autotransplantation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Adrenal Cortical Carcinoma 9cm Mass with Hormone Secretion", "Surgery", "Endocrine", "open transabdominal radical adrenalectomy with en-bloc resection and negative margins", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pheochromocytoma Right Adrenal Mass Preoperative Preparation", "Pharmacology", "Endocrine", "alpha-adrenergic blockade with phenoxybenzamine for 14 days followed by beta-blocker addition", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Insulinoma Solitary 1.5cm Pancreatic Body Hypoglycemic Whipple Triad", "Surgery", "Endocrine", "laparoscopic intraoperative ultrasound localization and surgical enucleation of the tumor", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pituitary Macroadenoma Non-Functioning with Bitemporal Visual Field Defect", "Surgery", "Endocrine", "endoscopic endonasal transsphenoidal surgical resection with visual pathway preservation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 6. Hematology - 10
    ("Beta Thalassemia Major with Massive Splenomegaly and Hypersplenism", "Surgery", "Hematology", "preoperative pneumococcal/meningococcal vaccination followed by total splenectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Idiopathic Thrombocytopenic Purpura ITP Refractory to Steroids and Rituximab", "Surgery", "Hematology", "laparoscopic splenectomy with search and removal of accessory spleens", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hodgkin Lymphoma Nodular Sclerosis Stage IIA in Services Hospital", "Medicine", "Hematology", "multi-agent chemotherapy ABVD doxorubicin, bleomycin, vinblastine, dacarbazine for 4 to 6 cycles", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Diffuse Large B-Cell Lymphoma DLBCL Stage III in PIMS Islamabad", "Medicine", "Hematology", "chemoimmunotherapy R-CHOP rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Promyelocytic Leukemia APL Presentation with Coagulopathy", "Medicine", "Hematology", "all-trans retinoic acid ATRA combined with arsenic trioxide ATO and cryoprecipitate", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Chronic Lymphocytic Leukemia with Autoimmune Hemolytic Anemia AIHA", "Medicine", "Hematology", "systemic glucocorticoid therapy oral prednisolone 1 mg/kg daily and targeted therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Aplastic Anemia Severe in 19-Year-Old in Armed Forces Bone Marrow Transplant Centre", "Medicine", "Hematology", "allogeneic matched sibling donor bone marrow transplantation with conditioning regimen", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Sickle Cell Beta Thalassemia Vaso-Occlusive Pain in Quetta Patient", "Medicine", "Hematology", "rapid opioid analgesia, vigorous hydration, hydroxyurea, and exchange transfusion if acute chest", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Myelodysplastic Syndrome MDS with 5q Deletion and Refractory Anemia", "Pharmacology", "Hematology", "oral immunomodulatory therapy lenalidomide to induce transfusion independence and cytogenetic remission", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Disseminated Intravascular Coagulation in Postpartum Sepsis", "Medicine", "Hematology", "aggressive source control, broad-spectrum antibiotics, and platelet/fresh frozen plasma replacement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 7. Neurology - 10
    ("Glioblastoma Multiforme WHO Grade 4 Right Frontal Lobe", "Surgery", "Nervous System", "maximal safe surgical resection followed by concurrent temozolomide chemoradiotherapy Stupp protocol", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acoustic Neuroma Vestibular Schwannoma 3cm Compressing Brainstem", "Surgery", "Nervous System", "retrosigmoid or translabyrinthine microsurgical excision with facial nerve neuromonitoring", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Spinal Cord Meningioma Thoracic Spine Intradural Extramedullary", "Surgery", "Nervous System", "thoracic laminectomy and complete microsurgical resection Simpson Grade 1", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Cervical Spondylotic Myelopathy with Hyperreflexia and Spastic Gait", "Surgery", "Nervous System", "anterior cervical discectomy and fusion ACDF or posterior cervical laminectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Lumbar Disc Herniation L4-L5 with Foot Drop and Sciatica", "Surgery", "Nervous System", "urgent lumbar microdiscectomy to decompress compressed L5 traversing nerve root", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Subarachnoid Hemorrhage Aneurysmal Anterior Communicating Artery", "Surgery", "Nervous System", "endovascular Guglielmi detachable coiling or microsurgical pterional clipping", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Subdural Hematoma Traumatic with 8mm Midline Shift", "Surgery", "Nervous System", "emergency large decompressive trauma craniotomy, clot evacuation, and duraplasty", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Chronic Subdural Hematoma in Elderly Patient with Progressive Confusion", "Surgery", "Nervous System", "two burr hole craniostomy trephination, irrigation, and closed subdural drain placement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Congenital Hydrocephalus in Three-Month-Old with Bulging Fontanelle", "Surgery", "Nervous System", "ventriculoperitoneal shunt placement or endoscopic third ventriculostomy ETV", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Brain Abscess Otogenic Right Temporal Lobe from Chronic Otitis Media", "Surgery", "Nervous System", "burr hole aspiration or craniotomy excision combined with high-dose intravenous triple antibiotics", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 8. Musculoskeletal - 10
    ("Osteosarcoma Distal Femur Metaphyseal Sunburst Appearance in Teenager", "Surgery", "Musculoskeletal", "neoadjuvant systemic chemotherapy followed by wide limb-salvage resection and endoprosthesis", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Ewing Sarcoma Diaphyseal Onion-Skin Periosteal Reaction in Child", "Surgery", "Musculoskeletal", "multi-agent induction chemotherapy vincristine, doxorubicin, cyclophosphamide and surgical resection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Giant Cell Tumor of Bone Epiphyseal Distal Radius Campanacci Grade 3", "Surgery", "Musculoskeletal", "extended intralesional curettage with burring, phenolization, and polymethylmethacrylate cementation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Chronic Osteomyelitis of Tibia with Sequestrum and Involucrum", "Surgery", "Musculoskeletal", "radical surgical sequestrectomy, saucerization, antibiotic-loaded cement beads, and soft tissue coverage", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tuberculous Spondylodiscitis Pott Spine with Paraplegia in Mayo Hospital", "Surgery", "Musculoskeletal", "emergency anterior surgical debridement, spinal cord decompression, fusion, and 12-month anti-TB therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Compartment Syndrome Acute Anterior Tibial Compartment Following Fracture", "Surgery", "Musculoskeletal", "emergency complete two-incision four-compartment fasciotomy within six hours", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Developmental Dysplasia of the Hip DDH in Ten-Month-Old Infant", "Surgery", "Musculoskeletal", "closed or open hip reduction under general anesthesia and hip spica cast immobilization", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Congenital Talipes Equinovarus CTEV Clubfoot in Newborn Infant", "Surgery", "Musculoskeletal", "serial weekly Ponseti manipulation and casting followed by percutaneous Achilles tenotomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Femoral Neck Fracture Garden Type IV Displaced in 72-Year-Old", "Surgery", "Musculoskeletal", "bipolar hemiarthroplasty or total hip arthroplasty to enable early postoperative mobilization", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Septic Arthritis Native Hip Joint in Two-Year-Old Infant in Lahore", "Surgery", "Musculoskeletal", "emergency emergency arthrotomy and joint washout to prevent avascular necrosis of femoral head", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Placenta Previa Major Grade IV with Active Vaginal Bleeding at 34 Weeks", "Obstetrics", "Pregnancy", "emergency cesarean delivery with blood cross-matched and consultant obstetrician present", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Placenta Accreta Spectrum PAS Invading Uterine Serosa and Bladder", "Obstetrics", "Pregnancy", "planned multidisciplinary cesarean hysterectomy with internal iliac artery balloon catheters", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Preeclampsia with HELLP Syndrome at 32 Weeks Gestation", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, blood pressure control, and planned delivery", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Eclamptic Seizures Active in Labor Room of Services Hospital", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate loading dose 4g followed by maintenance infusion and airway management", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Obstructed Labor with Impending Uterine Rupture Bandl Ring", "Surgery", "Pregnancy", "immediate tocolysis, urgent fluid resuscitation, and emergency cesarean section", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Postpartum Hemorrhage Secondary to Refractory Uterine Atony", "Surgery", "Pregnancy", "uterine compression B-Lynch suture, uterine artery ligation, or subtotal hysterectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Esophageal Atresia with Distal Tracheoesophageal Fistula TEF in Newborn", "Surgery", "Gastrointestinal", "primary thoracotomy fistula division and end-to-end esophageal anastomosis", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Congenital Diaphragmatic Hernia Bochdalek Type in Neonate with Scaphoid Abdomen", "Surgery", "Respiratory", "gentle mechanical ventilation avoiding barotrauma, inhaled nitric oxide, and delayed surgical repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hirschsprung Disease Long Segment Aganglionosis in Newborn Infant", "Surgery", "Gastrointestinal", "rectal washouts followed by transanal endorectal pull-through De La Torre-Mondragon procedure", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Biliary Atresia Type III Kasai Hepatoportoenterostomy Before 60 Days", "Surgery", "Gastrointestinal", "early Kasai hepatoportoenterostomy to establish biliary drainage and prevent cirrhosis", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 10. Ethics & Postgraduate Professionalism - 10
    ("Informed Consent for High-Risk Major Whipple Surgery in CPSP Candidate", "Ethics", "General Principles", "comprehensive documentation of mortality risks, pancreatic leak, alternatives, and voluntary consent", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Medical Error Disclosure Inadvertent Bile Duct Clipping During Cholecystectomy", "Ethics", "General Principles", "prompt transparent disclosure to patient and family, honest apology, and immediate corrective surgery", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Confidentiality Breach Refusal Family Demanding HIV Status Disclosure", "Ethics", "General Principles", "strict maintenance of medical confidentiality and refusal to disclose without patient authorization", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Postgraduate Trainee Duty Hours and Supervision Standards under CPSP", "Ethics", "General Principles", "adherence to structured training logbook, consultant supervision, and fatigue management", "CPSP Training Guidelines", "https://www.cpsp.edu.pk"),
    ("Refusal of Blood Transfusion in Minor Child by Relatives", "Ethics", "General Principles", "seeking urgent judicial emergency protective order to administer life-saving transfusion in child best interest", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Brain Death Determination for Deceased Organ Procurement in Pakistan", "Ethics", "General Principles", "two clinical examinations six hours apart by authorized panel under HOTA 2010 regulations", "Human Organ Transplant Authority (HOTA)", "https://www.cpsp.edu.pk"),
    ("End-of-Life Withdrawal of Non-Beneficial Life Support in Brain Dead Patient", "Ethics", "General Principles", "multidisciplinary consensus, family counseling on terminal futility, and compassionate palliative care", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Financial Conflict of Interest Rejection of Pharmaceutical Sponsorship", "Ethics", "General Principles", "declining personal financial inducements or gifts that compromise evidence-based prescribing", "CPSP Code of Ethics", "https://www.cpsp.edu.pk"),
    ("Clinical Audit and Morbidity Mortality Conference Participation", "Ethics", "General Principles", "open no-blame educational review of surgical complications to improve patient safety systems", "CPSP Training Guidelines", "https://www.cpsp.edu.pk"),
    ("Research Ethics and Institutional Review Board IRB Approval in Fellowship", "Ethics", "General Principles", "prospective ethical committee approval, patient informed consent, and data integrity adherence", "CPSP Research Guidelines", "https://www.cpsp.edu.pk")
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
    validate_topics(MRCP_TOPICS, "MRCP")
    validate_topics(FCPS_TOPICS, "FCPS")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega80_topics_a.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 80 Topics Part A\n\n")
        f.write(f"MRCP_TOPICS = {repr(MRCP_TOPICS)}\n\n")
        f.write(f"FCPS_TOPICS = {repr(FCPS_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
