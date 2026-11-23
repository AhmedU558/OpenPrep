"""
Topic Generator for Mega-Batch 77 - Part A
Tracks:
- Batch 371: 100 PLAB / UKMLA (UK) topics (2,700 -> 2,800)
- Batch 372: 100 AMC (Australia) topics (2,700 -> 2,800)
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

PLAB_UKMLA_TOPICS = [
    # 1. Cardiovascular (Medicine, Cardiovascular) - 10
    ("High-Altitude Pulmonary Edema and Right Heart Strain", "Medicine", "Cardiovascular", "immediate descent and supplemental oxygen administration with acetazolamide", "NICE CKS Guidelines", "https://cks.nice.org.uk"),
    ("Patent Ductus Arteriosus Closure Indication in Adolescence", "Pediatrics", "Cardiovascular", "percutaneous transcatheter occlusion with a vascular closure device", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Myxoma of the Right Atrium with Pulmonary Embolization", "Medicine", "Cardiovascular", "urgent surgical resection with cardiopulmonary bypass support", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Subclavian Steal Syndrome with Vertebrobasilar Insufficiency", "Surgery", "Cardiovascular", "endovascular stenting of the proximal subclavian artery stenosis", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Carotid Cavernous Fistula Following Facial Trauma", "Surgery", "Cardiovascular", "endovascular transcatheter coil embolization of the cavernous sinus", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Ectopic Atrial Tachycardia with Tachycardiomyopathy", "Medicine", "Cardiovascular", "catheter radiofrequency ablation of the ectopic atrial focus", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Atherosclerotic Renal Artery Stenosis with Flash Pulmonary Edema", "Medicine", "Cardiovascular", "guideline-directed medical therapy with cautious revascularization evaluation", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Cardiac Fibroma Presenting with Ventricular Arrhythmias", "Pediatrics", "Cardiovascular", "surgical excision and continuous electrophysiological monitoring", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Coronary Artery Ectasia Presenting with Acute Ischemia", "Medicine", "Cardiovascular", "therapeutic systemic anticoagulation and antiplatelet therapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Right Ventricular Dysplasia Arrhythmogenic Cardiomyopathy", "Medicine", "Cardiovascular", "implantable cardioverter-defibrillator placement and beta-blocker therapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 2. Respiratory (Medicine, Respiratory) - 10
    ("Lymphangioleiomyomatosis Presenting with Recurrent Pneumothorax", "Medicine", "Respiratory", "pleurodesis and oral mTOR inhibitor therapy with sirolimus", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Tracheobronchopathia Osteochondroplastica with Stridor", "Medicine", "Respiratory", "bronchoscopic mechanical debridement and conservative airway surveillance", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Pulmonary Alveolar Microlithiasis with Hypoxemia", "Medicine", "Respiratory", "supportive oxygen therapy and consideration for bilateral lung transplantation", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Broncholithiasis with Massive Recurrent Hemoptysis", "Surgery", "Respiratory", "rigid bronchoscopy with lithotripsy or targeted anatomical resection", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Idiopathic Bronchiolitis Obliterans Organizing Pneumonia", "Medicine", "Respiratory", "prolonged tapering oral corticosteroid therapy with clinical monitoring", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Pulmonary Arterial Hypertension Associated with Connective Tissue Disease", "Medicine", "Respiratory", "combination endothelin receptor antagonist and PDE-5 inhibitor therapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Allergic Bronchopulmonary Aspergillosis Flare in Severe Asthma", "Medicine", "Respiratory", "oral itraconazole antifungal therapy combined with systemic corticosteroids", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Tracheobronchial Amyloidosis with Upper Airway Obstruction", "Medicine", "Respiratory", "bronchoscopic laser ablation and external beam radiotherapy", "BTS Guidelines", "https://www.brit-thoracic.org.uk"),
    ("Pleural Mesothelioma with Rapidly Re-accumulating Exudate", "Medicine", "Respiratory", "indwelling pleural catheter placement or talc poudrage pleurodesis", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Chronic Beryllium Disease with Pulmonary Granulomatosis", "Medicine", "Respiratory", "removal from occupational exposure and systemic glucocorticoid therapy", "HSE / BTS Guidelines", "https://www.brit-thoracic.org.uk"),

    # 3. Gastrointestinal (Medicine/Surgery, Gastrointestinal) - 10
    ("Short Bowel Syndrome Complicated by D-Lactic Acidosis", "Medicine", "Gastrointestinal", "oral broad-spectrum non-absorbable antibiotic therapy and restriction of carbohydrates", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Gastric Antral Vascular Ectasia Watermelon Stomach", "Medicine", "Gastrointestinal", "endoscopic argon plasma coagulation of mucosal vascular ectasias", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Microscopic Colitis Collagenous Subtype with Watery Diarrhea", "Medicine", "Gastrointestinal", "oral budesonide induction therapy with gradual dose tapering", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Cronkhite-Canada Syndrome with Protein-Losing Enteropathy", "Medicine", "Gastrointestinal", "systemic nutritional support and high-dose corticosteroid therapy", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Gastrointestinal Stromal Tumor of the Duodenum with Hemorrhage", "Surgery", "Gastrointestinal", "complete surgical resection and oral tyrosine kinase inhibitor imatinib", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Afferent Loop Syndrome Following Gastrojejunostomy", "Surgery", "Gastrointestinal", "surgical revision or endoscopic transgastric drainage of obstructed limb", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Hereditary Hemochromatosis with Liver Fibrosis", "Medicine", "Gastrointestinal", "therapeutic serial venesection targeting serum ferritin below fifty micrograms", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Wilson Disease with Acute Hepatic Decompensation", "Medicine", "Gastrointestinal", "urgent assessment for emergency orthotopic liver transplantation", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Biliary Papillomatosis with Obstructive Jaundice", "Surgery", "Gastrointestinal", "curative surgical resection with clear margins or liver transplantation", "BSG Guidelines", "https://www.bsg.org.uk"),
    ("Colonic Pseudo-Obstruction Ogilvie Syndrome Unresponsive to Neostigmine", "Surgery", "Gastrointestinal", "endoscopic colonoscopic decompression to prevent cecal perforation", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 4. Renal & Genitourinary (Medicine/Surgery, Renal) - 10
    ("Primary Membranous Nephropathy with Nephrotic Syndrome", "Medicine", "Renal", "risk-stratified immunosuppression with rituximab or calcineurin inhibitors", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Light Chain Deposition Disease with Renal Insufficiency", "Medicine", "Renal", "bortezomib-based clone-directed chemotherapy and autologous stem cell harvest", "UK Myeloma Guidelines", "https://www.nice.org.uk/guidance"),
    ("Retroperitoneal Fibrosis Causing Bilateral Ureteral Obstruction", "Surgery", "Renal", "ureteral stent placement and systemic immunosuppression with corticosteroids", "BAUS Guidelines", "https://www.baus.org.uk"),
    ("Medullary Sponge Kidney with Recurrent Nephrolithiasis", "Medicine", "Renal", "high fluid intake, potassium citrate supplementation, and thiazide diuretics", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Renal Cortical Necrosis Following Postpartum Hemorrhage", "Medicine", "Renal", "aggressive supportive intensive care and maintenance renal replacement therapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Dense Deposit Disease C3 Glomerulopathy", "Medicine", "Renal", "anti-complement therapy and mycophenolate mofetil immunosuppression", "UK Renal Association", "https://www.nice.org.uk/guidance"),
    ("Ureteral Stricture Following Pelvic Radiotherapy", "Surgery", "Renal", "endoscopic ureterotomy or surgical ureteral reimplantation with Boari flap", "BAUS Guidelines", "https://www.baus.org.uk"),
    ("Emphysematous Pyelonephritis in Poorly Controlled Diabetes", "Surgery", "Renal", "intravenous broad-spectrum antimicrobials and percutaneous catheter drainage", "BAUS Guidelines", "https://www.baus.org.uk"),
    ("Renal Arteriovenous Malformation with Macroscopic Hematuria", "Surgery", "Renal", "selective catheter super-selective transcatheter arterial embolization", "BAUS Guidelines", "https://www.baus.org.uk"),
    ("Alport Syndrome with Progressive Microhematuria and Proteinuria", "Medicine", "Renal", "early renin-angiotensin system blockade to delay progression to end-stage disease", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 5. Endocrinology (Medicine, Endocrine) - 10
    ("Nelson Syndrome Following Bilateral Adrenalectomy", "Medicine", "Endocrine", "pituitary directed transsphenoidal surgery or stereotactic radiosurgery", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Thyroid Hormone Resistance Syndrome Beta Subtype", "Medicine", "Endocrine", "triiodothyroacetic acid TRIAC therapy and symptom-guided beta blockade", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Multiple Endocrine Neoplasia Type 2B with Medullary Thyroid Cancer", "Surgery", "Endocrine", "early total thyroidectomy with central compartment lymph node clearance", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Autoimmune Polyendocrine Syndrome Type 1 with Hypoparathyroidism", "Medicine", "Endocrine", "activated vitamin D analog calcitriol and oral calcium supplementation", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("Adrenal Myelolipoma with Mass Effect and Hemorrhage", "Surgery", "Endocrine", "laparoscopic retroperitoneal adrenalectomy and supportive resuscitation", "Society for Endocrinology", "https://www.endocrinology.org"),
    ("McCune-Albright Syndrome with Precocious Puberty", "Pediatrics", "Endocrine", "aromatase inhibitor therapy with letrozole and anti-estrogens", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Graves Orbitopathy with Severe Sight-Threatening Optic Neuropathy", "Medicine", "Endocrine", "urgent intravenous methylprednisolone pulse therapy and orbital decompression assessment", "EUGOGO / NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Glucagonoma Syndrome with Necrolytic Migratory Erythema", "Medicine", "Endocrine", "long-acting somatostatin analog octreotide therapy and surgical oncology consultation", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Non-Secretory Pituitary Macroadenoma with Bitemporal Hemianopsia", "Surgery", "Endocrine", "transsphenoidal surgical decompression of the optic chiasm", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Congenital Hyperinsulinism in Infancy Resistant to Diazoxide", "Pediatrics", "Endocrine", "subtotal pancreatectomy and continuous glucagon infusion", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 6. Hematology (Medicine, Hematology) - 10
    ("Paroxysmal Nocturnal Hemoglobinuria with Thrombosis", "Medicine", "Hematology", "complement component C5 inhibitor therapy with eculizumab or ravulizumab", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Acquired Hemophilia A with Severe Spontaneous Hematomas", "Medicine", "Hematology", "activated prothrombin complex concentrate or recombinant factor VIIa with immunosuppression", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Pure Red Cell Aplasia Associated with Thymoma", "Surgery", "Hematology", "complete surgical thymectomy followed by immunosuppressive cyclosporine", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Essential Thrombocythemia with High-Risk Splenomegaly", "Medicine", "Hematology", "cytoreductive therapy with hydroxycarbamide and low-dose daily aspirin", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Cryoglobulinemic Vasculitis with Monoclonal Gammopathy", "Medicine", "Hematology", "rituximab-based B-cell depletion therapy and therapeutic plasmapheresis", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Diamond-Blackfan Anemia Presenting in Infancy", "Pediatrics", "Hematology", "systemic corticosteroid induction therapy and chronic transfusion management", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Atypical Hemolytic Uremic Syndrome with Complement Dysregulation", "Medicine", "Hematology", "immediate anti-C5 monoclonal antibody therapy with eculizumab", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Mast Cell Activation Syndrome with Recurrent Anaphylactoid Reactions", "Medicine", "Hematology", "dual H1 and H2 histamine receptor antagonists with mast cell stabilizers", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Congenital Afibrinogenemia with Intracranial Hemorrhage", "Medicine", "Hematology", "purified human fibrinogen concentrate replacement therapy", "BSH Guidelines", "https://b-s-h.org.uk"),
    ("Heparin-Induced Thrombocytopenia with New Arterial Thrombus", "Medicine", "Hematology", "immediate cessation of heparin and initiation of non-heparin argatroban", "BSH Guidelines", "https://b-s-h.org.uk"),

    # 7. Neurology (Neurology, Nervous System) - 10
    ("Creutzfeldt-Jakob Disease Rapid Neurocognitive Decline", "Neurology", "Nervous System", "palliative multidisciplinary supportive care and symptom alleviation", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Amyotrophic Lateral Sclerosis with Bulbar Involvement", "Neurology", "Nervous System", "disease-modifying therapy with riluzole and non-invasive ventilatory assessment", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Spontaneous Intracranial Hypotension with Orthostatic Headache", "Neurology", "Nervous System", "epidural blood patch administration under radiological fluoroscopic guidance", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Neuromyelitis Optica Spectrum Disorder Seropositive for AQP4", "Neurology", "Nervous System", "acute high-dose intravenous methylprednisolone and long-term rituximab maintenance", "ABN Guidelines", "https://www.theabn.org"),
    ("Stiff Person Syndrome with High Anti-GAD Antibodies", "Neurology", "Nervous System", "high-dose intravenous immunoglobulin and oral GABAergic agent diazepam", "ABN Guidelines", "https://www.theabn.org"),
    ("Anti-LGI1 Autoimmune Encephalitis with Faciobrachial Dystonic Seizures", "Neurology", "Nervous System", "prompt high-dose systemic corticosteroid therapy and plasma exchange", "ABN Guidelines", "https://www.theabn.org"),
    ("Primary Central Nervous System Lymphoma in Immunocompetent Patient", "Neurology", "Nervous System", "high-dose systemic methotrexate-based immunochemotherapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Cerebral Autosomal Dominant Arteriopathy with Subcortical Infarcts", "Neurology", "Nervous System", "aggressive vascular risk factor modification and antiplatelet monotherapy", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Spinal Epidural Abscess with Progressive Paraparesis", "Surgery", "Nervous System", "emergency neurosurgical decompressive laminectomy and intravenous antibiotics", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Ruptured Berry Aneurysm with Subarachnoid Hemorrhage", "Surgery", "Nervous System", "urgent endovascular coil embolization and enteral nimodipine administration", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Relapsing Polychondritis with Auricular and Laryngeal Inflammation", "Medicine", "Musculoskeletal", "systemic corticosteroid induction therapy and immunosuppressive methotrexate", "BSR Guidelines", "https://www.rheumatology.org.uk"),
    ("Calciphylaxis with Non-Healing Ulcerative Skin Lesions", "Medicine", "Dermatology", "intravenous sodium thiosulfate therapy and optimization of calcium-phosphate balance", "BAD Guidelines", "https://www.bad.org.uk"),
    ("Pyoderma Gangrenosum Associated with Inflammatory Bowel Disease", "Medicine", "Dermatology", "systemic oral corticosteroids and TNF-alpha inhibitor infliximab therapy", "BAD Guidelines", "https://www.bad.org.uk"),
    ("Necrotizing Fasciitis of the Perineum Fournier Gangrene", "Surgery", "Musculoskeletal", "immediate extensive surgical debridement and broad-spectrum intravenous antimicrobials", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Eosinophilic Granulomatosis with Polyangiitis Churg-Strauss", "Medicine", "Musculoskeletal", "systemic glucocorticoids combined with interleukin-5 inhibitor mepolizumab", "BSR Guidelines", "https://www.rheumatology.org.uk"),
    ("Diffuse Cutaneous Systemic Sclerosis with Scleroderma Renal Crisis", "Medicine", "Dermatology", "prompt titration of oral angiotensin-converting enzyme inhibitor captopril", "BSR Guidelines", "https://www.rheumatology.org.uk"),
    ("Ehlers-Danlos Syndrome Vascular Type with Arterial Fragility", "Genetics", "Musculoskeletal", "careful blood pressure reduction with celiprolol and avoidance of vascular trauma", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Subacute Cutaneous Lupus Erythematosus Induced by Medications", "Medicine", "Dermatology", "discontinuation of offending pharmacological agent and topical corticosteroids", "BAD Guidelines", "https://www.bad.org.uk"),
    ("Chronic Recurrent Multifocal Osteomyelitis in Children", "Pediatrics", "Musculoskeletal", "non-steroidal anti-inflammatory drugs and intravenous bisphosphonate pamidronate", "BSR Guidelines", "https://www.rheumatology.org.uk"),
    ("Dermatomyositis with Rapidly Progressive Interstitial Lung Disease", "Medicine", "Dermatology", "aggressive combination immunosuppression with pulse steroids and cyclophosphamide", "BSR Guidelines", "https://www.rheumatology.org.uk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Vasa Previa with Premature Rupture of Membranes", "Obstetrics", "Pregnancy", "emergency immediate delivery by category one cesarean section", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Acute Fatty Liver of Pregnancy at Thirty-Six Weeks Gestation", "Obstetrics", "Pregnancy", "prompt maternal stabilization and urgent expedited delivery", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Amniotic Fluid Embolism with Sudden Cardiovascular Collapse", "Obstetrics", "Pregnancy", "immediate high-quality cardiopulmonary resuscitation and perimortem cesarean delivery", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Uterine Inversion Following Third Stage of Labor", "Obstetrics", "Pregnancy", "immediate manual uterine replacement Johnson maneuver before placental separation", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Biliary Atresia Presenting with Persistent Conjugated Hyperbilirubinemia", "Pediatrics", "Gastrointestinal", "urgent exploratory laparotomy and Kasai portoenterostomy before sixty days", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Neuroblastoma with Retroperitoneal Encasement of Great Vessels", "Pediatrics", "General Principles", "multimodal induction chemotherapy followed by delayed surgical excision", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Congenital Diaphragmatic Hernia with Severe Pulmonary Hypoplasia", "Pediatrics", "Respiratory", "immediate endotracheal intubation, gentle ventilation, and delayed anatomical repair", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Midgut Malrotation with Acute Volvulus in a Newborn", "Pediatrics", "Gastrointestinal", "emergency Ladd surgical procedure with counter-clockwise detorsion", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Peripartum Cardiomyopathy with Severely Reduced Ejection Fraction", "Obstetrics", "Pregnancy", "guideline-directed heart failure medical therapy and consideration of bromocriptine", "RCOG Green-top Guidelines", "https://www.rcog.org.uk"),
    ("Transient Tachypnea of the Newborn in Term Elective Cesarean", "Pediatrics", "Respiratory", "supportive oxygen therapy, neutral thermal environment, and monitoring", "NICE Guidelines", "https://www.nice.org.uk/guidance"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Major Depressive Disorder with Psychotic Features in Pregnancy", "Psychiatry", "Behavioral Health", "electroconvulsive therapy with obstetrical and fetal monitoring", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Catatonia Resistant to High-Dose Benzodiazepine Therapy", "Psychiatry", "Behavioral Health", "urgent bilateral electroconvulsive therapy to prevent lethal exhaustion", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Refusal of Life-Saving Blood Products by Gillick-Competent Minor", "Ethics", "General Principles", "referral to the High Court of Justice Family Division for specific issue order", "GMC Guidance", "https://www.gmc-uk.org"),
    ("Delirium Tremens with Visual Hallucinations and Tremor", "Psychiatry", "Behavioral Health", "intravenous diazepam titration under intensive inpatient medical supervision", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Advance Decision to Refuse Treatment ADRT for Ventilatory Support", "Ethics", "General Principles", "upholding valid and applicable refusal in accordance with the Mental Capacity Act", "GMC Guidance", "https://www.gmc-uk.org"),
    ("Disclosing Huntington Disease Genetic Status to At-Risk Relatives", "Ethics", "General Principles", "counseling the patient to disclose voluntarily while respecting confidentiality limits", "GMC Guidance", "https://www.gmc-uk.org"),
    ("Rapid-Cycling Bipolar I Disorder Resistant to Monotherapy", "Psychiatry", "Behavioral Health", "combination therapy with lithium carbonate and second-generation atypical antipsychotic", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Factitious Disorder Imposed on Another Munchausen by Proxy", "Ethics", "General Principles", "immediate safeguarding referral to local children social services", "GMC Guidance", "https://www.gmc-uk.org"),
    ("Post-Traumatic Stress Disorder with Severe Intrusion Symptoms", "Psychiatry", "Behavioral Health", "trauma-focused cognitive behavioral therapy or eye movement desensitization", "NICE Guidelines", "https://www.nice.org.uk/guidance"),
    ("Breach of Confidentiality for Serious Imminent Harm to Third Party", "Ethics", "General Principles", "disclosure of proportionate information to police to protect public safety", "GMC Guidance", "https://www.gmc-uk.org")
]

AMC_TOPICS = [
    # 1. Cardiovascular - 10
    ("Coronary Slow Flow Phenomenon with Refractory Angina", "Medicine", "Cardiovascular", "oral dipyridamole or calcium channel blocker pharmacotherapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Myocardial Bridging Causing Exercise-Induced Ischemia", "Medicine", "Cardiovascular", "first-line beta-blocker therapy and avoidance of nitrates", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Infective Endocarditis Involving Prosthetic Aortic Valve", "Medicine", "Cardiovascular", "intravenous multidrug bactericidal antimicrobials and urgent cardiac surgical evaluation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Aortic Coarctation Presenting in Young Adult with Hypertension", "Surgery", "Cardiovascular", "transcatheter balloon angioplasty with covered stent deployment", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Right Ventricular Myocardial Infarction with Acute Hypotension", "Medicine", "Cardiovascular", "intravenous crystalloid volume loading and strict avoidance of preload-reducing agents", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Subacute Bacterial Endocarditis with Renal Glomerulonephritis", "Medicine", "Cardiovascular", "prolonged targeted intravenous antimicrobial therapy based on blood cultures", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Sinus Venosus Atrial Septal Defect with Partial Anomalous Drainage", "Surgery", "Cardiovascular", "surgical patch repair to re-route pulmonary venous return to left atrium", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Vasospastic Prinzmetal Angina with Transient ST-Segment Elevation", "Medicine", "Cardiovascular", "high-dose calcium channel blocker therapy and cessation of tobacco smoking", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Congenital Long QT Syndrome Type 2 with Syncope", "Medicine", "Cardiovascular", "high-dose nadolol beta blockade and implantable cardioverter-defibrillator consultation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Giant Cell Aortitis Complicated by Ascending Aortic Aneurysm", "Medicine", "Cardiovascular", "high-dose systemic corticosteroid therapy and elective surgical resection", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 2. Respiratory - 10
    ("Silicosis in Australian Engineered Stone Benchtop Fabricator", "Medicine", "Respiratory", "immediate removal from dust exposure, pulmonary rehabilitation, and lung transplant workup", "Safe Work Australia", "https://www.safeworkaustralia.gov.au"),
    ("Pneumocystis Jirovecii Pneumonia in Immunosuppressed Host", "Medicine", "Respiratory", "high-dose intravenous trimethoprim-sulfamethoxazole and adjuvant corticosteroids", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Cryptogenic Organizing Pneumonia Following Viral Illness", "Medicine", "Respiratory", "prolonged course of oral prednisolone with clinical and radiographic monitoring", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Pulmonary Alveolar Proteinosis with Progressive Dyspnea", "Medicine", "Respiratory", "whole lung lavage under general anesthesia with double-lumen endotracheal intubation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Exogenous Lipoid Pneumonia from Chronic Mineral Oil Ingestion", "Medicine", "Respiratory", "discontinuation of mineral oil exposure and aggressive respiratory supportive therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Severe Acute Exacerbation of Bronchiectasis with Pseudomonas", "Medicine", "Respiratory", "intravenous antipseudomonal beta-lactam combined with aminoglycoside therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Primary Ciliary Dyskinesia Kartagener Syndrome in Adolescent", "Pediatrics", "Respiratory", "daily airway clearance physiotherapy, mucolytics, and targeted antimicrobial prophylaxis", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Tracheomalacia with Severe Expiratory Airway Collapse", "Surgery", "Respiratory", "continuous positive airway pressure support or surgical tracheobronchoplasty", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Radiation Pneumonitis Following Breast Cancer Radiotherapy", "Medicine", "Respiratory", "oral prednisone therapy with gradual tapering over several weeks", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Miliary Tuberculosis with Acute Diffuse Pulmonary Infiltrates", "Microbiology", "Respiratory", "four-drug anti-tubercular therapy with rifampicin, isoniazid, pyrazinamide, and ethambutol", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 3. Gastrointestinal - 10
    ("Autoimmune Pancreatitis Type 1 IgG4-Related Disease", "Medicine", "Gastrointestinal", "systemic oral corticosteroid therapy with clinical response monitoring", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Portal Vein Thrombosis in Cirrhosis with Intestinal Ischemia", "Medicine", "Gastrointestinal", "therapeutic low-molecular-weight heparin anticoagulation and surgical evaluation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Campylobacter Enteritis with Severe Bloody Diarrhea", "Microbiology", "Gastrointestinal", "oral azithromycin antimicrobial therapy and oral rehydration therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Colonic Diverticular Abscess Exceeding Four Centimeters", "Surgery", "Gastrointestinal", "percutaneous ultrasound-guided catheter drainage and intravenous antibiotics", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Ischemic Colitis Involving the Splenic Flexure Griffiths Point", "Medicine", "Gastrointestinal", "conservative bowel rest, intravenous crystalloids, and broad-spectrum antibiotics", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Biliary Ascariasis with Acute Biliary Colic", "Medicine", "Gastrointestinal", "anthelmintic therapy with albendazole and endoscopic removal if obstructed", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Short Gut Malabsorption with Trace Element Deficiency", "Medicine", "Gastrointestinal", "parenteral zinc, selenium, and copper micronutrient supplementation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Zenker Diverticulum with Recurrent Aspiration Pneumonia", "Surgery", "Gastrointestinal", "endoscopic or surgical cricopharyngeal myotomy and diverticulectomy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Boerhaave Syndrome Transmural Esophageal Perforation", "Surgery", "Gastrointestinal", "emergency surgical primary esophageal repair and mediastinal debridement", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Small Intestinal Bacterial Overgrowth with Steatorrhea", "Medicine", "Gastrointestinal", "oral non-absorbable antibiotic therapy with rifaximin for fourteen days", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 4. Renal & Genitourinary - 10
    ("Renal Infarction from Atrial Fibrillation Embolization", "Medicine", "Renal", "immediate systemic therapeutic anticoagulation with unfractionated heparin", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Antiglomerular Basement Membrane Disease Goodpasture Syndrome", "Medicine", "Renal", "urgent therapeutic plasmapheresis, pulse methylprednisolone, and cyclophosphamide", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Post-Streptococcal Glomerulonephritis with Fluid Overload", "Pediatrics", "Renal", "sodium and fluid restriction combined with loop diuretic therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Staghorn Calculi with Proteus Mirabilis Infection", "Surgery", "Renal", "percutaneous nephrolithotomy and targeted culture-directed antimicrobial therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Renal Tubular Acidosis Type 1 Distal with Hypokalemia", "Medicine", "Renal", "oral potassium citrate and sodium bicarbonate alkalinization therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Balkan Endemic Nephropathy with Urothelial Carcinoma Risk", "Medicine", "Renal", "regular upper urinary tract surveillance and supportive nephrology care", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Testicular Torsion with Six Hours of Acute Onset Pain", "Surgery", "Renal", "emergency surgical scrotal exploration, bilateral testicular detorsion and orchiopexy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Emphysematous Cystitis in Elderly Diabetic Patient", "Medicine", "Renal", "broad-spectrum intravenous antimicrobial therapy and continuous bladder catheter drainage", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Lupus Nephritis Class IV Diffuse Proliferative", "Medicine", "Renal", "high-dose pulse glucocorticoids combined with intravenous cyclophosphamide or mycophenolate", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Nutcracker Phenomenon Left Renal Vein Compression", "Surgery", "Renal", "conservative surveillance or left renal vein transposition for intractable hematuria", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 5. Endocrinology - 10
    ("Subacute Granulomatous Thyroiditis De Quervain Phase", "Medicine", "Endocrine", "high-dose non-steroidal anti-inflammatory drugs and oral prednisone for refractory pain", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Schmidt Syndrome Autoimmune Polyendocrine Type 2", "Medicine", "Endocrine", "adrenal hormone replacement with hydrocortisone prior to levothyroxine initiation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Pituitary Apoplexy with Visual Field Constriction", "Surgery", "Endocrine", "emergency stress-dose hydrocortisone and urgent transsphenoidal surgical decompression", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Primary Hyperaldosteronism Bilateral Adrenal Hyperplasia", "Medicine", "Endocrine", "mineralocorticoid receptor antagonist therapy with spironolactone or eplerenone", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Medullary Thyroid Cancer in RET Proto-Oncogene Carrier", "Surgery", "Endocrine", "prophylactic total thyroidectomy with central neck lymph node dissection", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Amiodarone-Induced Thyrotoxicosis Type 2 Destructive", "Medicine", "Endocrine", "high-dose oral glucocorticoid therapy and serial thyroid function monitoring", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Ectopic ACTH Secretion from Small Cell Lung Carcinoma", "Medicine", "Endocrine", "adrenal steroidogenesis inhibitor therapy with metyrapone or ketoconazole", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Familial Hypocalciuric Hypercalcemia CASR Mutation", "Genetics", "Endocrine", "clinical reassurance and avoidance of unnecessary surgical parathyroidectomy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Insulinoma Presenting with Whipple Triad Hypoglycemia", "Surgery", "Endocrine", "surgical enucleation of the pancreatic neuroendocrine tumor", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Waterhouse-Friderichsen Syndrome in Meningococcal Sepsis", "Medicine", "Endocrine", "immediate intravenous hydrocortisone resuscitation and broad-spectrum ceftriaxone", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 6. Hematology - 10
    ("Warm Autoimmune Hemolytic Anemia Coombs Positive", "Medicine", "Hematology", "first-line systemic oral prednisolone and folate supplementation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Hereditary Spherocytosis with Severe Recurrent Hemolytic Crises", "Surgery", "Hematology", "elective laparoscopic splenectomy after pneumococcal, meningococcal, and Hib vaccinations", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Cold Agglutinin Disease Induced by Mycoplasma Infection", "Microbiology", "Hematology", "keeping the patient strictly warm and avoidance of cold exposure with rituximab if severe", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Disseminated Intravascular Coagulation in Gram-Negative Sepsis", "Medicine", "Hematology", "aggressive treatment of underlying infection and guided component replacement", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("G6PD Deficiency with Acute Oxidative Hemolysis from Primaquine", "Pharmacology", "Hematology", "discontinuation of primaquine, supportive hydration, and red cell transfusion if symptomatic", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Polycythemia Vera with High Risk of Arterial Thrombosis", "Medicine", "Hematology", "therapeutic phlebotomy targeting hematocrit below forty-five percent and aspirin", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Severe Aplastic Anemia in Young Adult with Matched Sibling", "Medicine", "Hematology", "allogeneic hematopoietic stem cell transplantation from human leukocyte antigen sibling", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Von Willebrand Disease Type 1 with Menorrhagia", "Medicine", "Hematology", "desmopressin DDAVP trial or oral tranexamic acid during menses", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Waldenström Macroglobulinemia with Symptomatic Hyperviscosity", "Medicine", "Hematology", "emergency therapeutic plasmapheresis followed by clone-directed chemoimmunotherapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Thrombotic Thrombocytopenic Purpura with Severe ADAMTS13 Deficiency", "Medicine", "Hematology", "urgent therapeutic plasma exchange and caplacizumab with systemic corticosteroids", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 7. Neurology - 10
    ("Guillain-Barré Syndrome Acute Inflammatory Demyelinating Subtype", "Neurology", "Nervous System", "intravenous immunoglobulin infusion or therapeutic plasma exchange", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Normal Pressure Hydrocephalus with Hakim Triad", "Surgery", "Nervous System", "ventriculoperitoneal shunt surgical placement following positive tap test", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Multiple Sclerosis Acute Relapse with Optic Neuritis", "Neurology", "Nervous System", "high-dose intravenous methylprednisolone for three to five days", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Parkinson Disease with Motor Fluctuations and Wearing Off", "Neurology", "Nervous System", "addition of dopamine agonist or COMT inhibitor entacapone to levodopa regimen", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Status Epilepticus Refractory to First-Line Benzodiazepines", "Neurology", "Nervous System", "intravenous levetiracetam or fosphenytoin second-line anti-seizure therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Myasthenia Gravis Crisis with Impending Respiratory Failure", "Neurology", "Nervous System", "therapeutic plasma exchange and close monitoring of vital capacity and negative inspiratory force", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Herpes Simplex Encephalitis with Temporal Lobe Infiltration", "Neurology", "Nervous System", "immediate high-dose intravenous aciclovir therapy for twenty-one days", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Trigeminal Neuralgia Refractory to Carbamazepine Pharmacotherapy", "Surgery", "Nervous System", "microvascular decompression of the trigeminal nerve root entry zone", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Subacute Combined Degeneration of Spinal Cord B12 Deficiency", "Neurology", "Nervous System", "parenteral hydroxocobalamin intramuscular injections prior to folate supplementation", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Idiopathic Intracranial Hypertension with Papilledema", "Neurology", "Nervous System", "weight loss counseling and oral carbonic anhydrase inhibitor acetazolamide", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Psoriatic Arthritis with Severe Dactylitis and Spondylitis", "Medicine", "Musculoskeletal", "biological DMARD therapy with TNF-alpha inhibitor or IL-17 inhibitor", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Stevens-Johnson Syndrome Toxic Epidermal Necrolysis Overlap", "Medicine", "Dermatology", "transfer to specialized burn unit, supportive intensive care, and IVIG/cyclosporine", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Ankylosing Spondylitis with Inadequate Response to NSAIDs", "Medicine", "Musculoskeletal", "initiation of TNF inhibitor therapy such as adalimumab or infliximab", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Bullous Pemphigoid with Subepidermal Tense Blisters", "Medicine", "Dermatology", "super-potent topical corticosteroid clobetasol or oral systemic prednisolone", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Septic Arthritis of Native Knee Joint with Staph Aureus", "Surgery", "Musculoskeletal", "emergency arthroscopic joint washout and targeted intravenous flucloxacillin", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Systemic Sclerosis with Progressive Raynaud Phenomenon", "Medicine", "Cardiovascular", "oral dihydropyridine calcium channel blocker therapy with nifedipine", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Discoid Lupus Erythematosus with Cicatricial Alopecia", "Medicine", "Dermatology", "potent topical corticosteroids and oral antimalarial hydroxychloroquine", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Compartment Syndrome of Anterior Tibial Compartment", "Surgery", "Musculoskeletal", "emergency decompressive fasciotomy of all four lower limb compartments", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Melanoma In Situ with Positive Biopsy on Trunk", "Surgery", "Dermatology", "wide local excision with five millimeter surgical clearance margin", "Cancer Council Australia", "https://www.cancer.org.au"),
    ("Erythema Nodosum Associated with Primary Sarcoidosis", "Medicine", "Dermatology", "rest, limb elevation, NSAIDs, and treatment of underlying sarcoidosis", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 9. Pediatrics & Obstetrics - 10
    ("Postpartum Hemorrhage Secondary to Uterine Atony", "Obstetrics", "Pregnancy", "bimanual uterine massage and intravenous oxytocin with ergometrine", "RANZCOG Guidelines", "https://ranzcog.edu.au"),
    ("Preeclampsia with Severe Features at Thirty-Four Weeks", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis and blood pressure control with labetalol", "RANZCOG Guidelines", "https://ranzcog.edu.au"),
    ("Intrahepatic Cholestasis of Pregnancy with Intense Pruritus", "Obstetrics", "Pregnancy", "oral ursodeoxycholic acid therapy and planned delivery between 37-38 weeks", "RANZCOG Guidelines", "https://ranzcog.edu.au"),
    ("Neonatal Respiratory Distress Syndrome from Surfactant Deficiency", "Pediatrics", "Respiratory", "exogenous endotracheal surfactant administration and nasal continuous positive airway pressure", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Epiglottitis in Unvaccinated Child with Stridor and Drooling", "Pediatrics", "Respiratory", "immediate senior airway management in theatre and intravenous ceftriaxone", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Kawasaki Disease with High Fever and Strawberry Tongue", "Pediatrics", "Cardiovascular", "intravenous immunoglobulin infusion and high-dose oral aspirin", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Intussusception in Infant with Red Currant Jelly Stools", "Pediatrics", "Gastrointestinal", "air or hydrostatic ultrasound-guided reduction under surgical standby", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Rhesus Isoimmunization in Rh-Negative Primigravida", "Obstetrics", "Pregnancy", "anti-D immunoglobulin administration at twenty-eight and thirty-four weeks", "RANZCOG Guidelines", "https://ranzcog.edu.au"),
    ("Shoulder Dystocia Encountered During Vaginal Delivery", "Obstetrics", "Pregnancy", "immediate execution of McRoberts maneuver and suprapubic pressure application", "RANZCOG Guidelines", "https://ranzcog.edu.au"),
    ("Pyloric Stenosis in Six-Week-Old Infant with Non-Bilious Emesis", "Surgery", "Gastrointestinal", "intravenous fluid resuscitation and electrolyte correction followed by Ramstedt pyloromyotomy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Alcohol Withdrawal Seizure in Emergency Observation", "Psychiatry", "Behavioral Health", "intravenous diazepam titration and high-dose parenteral thiamine replacement", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Bipolar Affective Disorder Acute Manic Episode with Grandiosity", "Psychiatry", "Behavioral Health", "second-generation atypical antipsychotic olanzapine or oral lithium therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Mandatory Notification of Impaired Practitioner in Australia", "Ethics", "General Principles", "mandatory report to Ahpra under national law to protect public safety", "Ahpra Guidelines", "https://www.ahpra.gov.au"),
    ("Capacity Assessment in Patient Refusing Gangrenous Foot Amputation", "Ethics", "General Principles", "structured assessment of patient capacity to understand, retain, and weigh information", "RACGP Guidelines", "https://www.racgp.org.au"),
    ("Anorexia Nervosa with Severe Bradycardia and Hypothermia", "Psychiatry", "Behavioral Health", "urgent involuntary inpatient medical admission and refeeding protocol under mental health act", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Elder Abuse Suspicion in Vulnerable Home Care Setting", "Ethics", "General Principles", "multidisciplinary social work assessment and elder abuse helpline notification", "RACGP Guidelines", "https://www.racgp.org.au"),
    ("Borderline Personality Disorder with Crisis Self-Harm Impulses", "Psychiatry", "Behavioral Health", "crisis stabilization, clear safety planning, and referral for dialectical behavior therapy", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Competence and Consent for Minor Contraceptive Request", "Ethics", "General Principles", "Gillick competence Fraser guidelines verification to provide confidential care", "RACGP Guidelines", "https://www.racgp.org.au"),
    ("Serotonin Syndrome Following SSRI and MAOI Combination", "Pharmacology", "Nervous System", "discontinuation of serotonergic agents, supportive care, and cyproheptadine administration", "Therapeutic Guidelines Australia", "https://www.tg.org.au"),
    ("Notifiable Communicable Disease Notification in Australia", "Microbiology", "General Principles", "immediate statutory notification to state public health authority to enable contact tracing", "Department of Health Australia", "https://www.health.gov.au")
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
    validate_topics(PLAB_UKMLA_TOPICS, "PLAB / UKMLA")
    validate_topics(AMC_TOPICS, "AMC")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega77_topics_a.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 77 Topics Part A\n\n")
        f.write(f"PLAB_UKMLA_TOPICS = {repr(PLAB_UKMLA_TOPICS)}\n\n")
        f.write(f"AMC_TOPICS = {repr(AMC_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
