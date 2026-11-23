"""
Topic Generator for Mega-Batch 78 - Part A
Tracks:
- Batch 376: 100 FCPS (Pakistan) topics (2,700 -> 2,800)
- Batch 377: 100 NLE (Pakistan) topics (2,700 -> 2,800)
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

FCPS_TOPICS = [
    # 1. Cardiovascular - 10
    ("Takayasu Arteritis with Occlusion of Subclavian Artery", "Surgery", "Cardiovascular", "corticosteroid immunosuppression followed by bypass grafting or endovascular angioplasty", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Ventricular Septal Rupture Following Acute Anterior STEMI", "Surgery", "Cardiovascular", "intra-aortic balloon pump counterpulsation and urgent surgical patch repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Mitral Stenosis Critical with Left Atrial Appendage Thrombus", "Medicine", "Cardiovascular", "therapeutic warfarin anticoagulation and closed or open surgical mitral commissurotomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Aortic Root Dissection Stanford Type A with Tamponade", "Surgery", "Cardiovascular", "emergency median sternotomy with ascending aortic and hemiarch replacement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Infective Endocarditis on Native Tricuspid Valve in Injection Drug User", "Medicine", "Cardiovascular", "targeted intravenous high-dose bactericidal antimicrobials based on blood cultures", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Sinus of Valsalva Aneurysm Rupturing into Right Ventricle", "Surgery", "Cardiovascular", "emergency surgical patch closure with cardiopulmonary bypass support", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Subacute Constrictive Pericarditis Secondary to Tuberculosis", "Surgery", "Cardiovascular", "four-drug anti-tubercular therapy combined with radical pericardiectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Refractory Cardiogenic Shock from Massive Myocardial Infarction", "Medicine", "Cardiovascular", "emergency percutaneous coronary intervention and veno-arterial ECMO mechanical support", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Coarctation of Aorta in Adult with Refractory Upper Extremity Hypertension", "Surgery", "Cardiovascular", "transcatheter endovascular covered stent placement across coarctation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Coronary Artery Fistula Draining into Coronary Sinus", "Surgery", "Cardiovascular", "transcatheter transcatheter coil embolization or surgical ligation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 2. Respiratory - 10
    ("Extensive Drug-Resistant Tuberculosis Pulmonary Presentation", "Microbiology", "Respiratory", "novel BPaL regimen bedaquiline, pretomanid, and linezolid under national TB program", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Bronchopleural Fistula Following Right Pneumonectomy", "Surgery", "Respiratory", "urgent pleural drainage, bronchoscopic spigot occlusion, or surgical muscle transposition", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tension Pneumothorax Following Central Venous Catheter Insertion", "Surgery", "Respiratory", "immediate emergency needle thoracostomy followed by intercostal tube placement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Massive Hemoptysis Exceeding Six Hundred Milliliters in 24 Hours", "Surgery", "Respiratory", "bronchial artery embolization after rigid bronchoscopic localization", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tracheal Stenosis Following Prolonged Endotracheal Intubation", "Surgery", "Respiratory", "bronchoscopic balloon dilatation or tracheal resection with end-to-end anastomosis", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hydatid Disease of the Lung with Intact Cyst Echinococcosis", "Surgery", "Respiratory", "cyst enucleation capitonnage Barrett technique under albendazole coverage", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pulmonary Aspergilloma Monod Sign in Pre-Existing Cavity", "Surgery", "Respiratory", "anatomical pulmonary lobectomy and perioperative oral antifungal therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Acute Respiratory Distress Syndrome ARDS with Refractory Hypoxemia", "Medicine", "Respiratory", "prone positioning, lung-protective low tidal volume ventilation, and neuromuscular blockade", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Congenital Lobar Emphysema in Two-Month-Old Infant", "Surgery", "Respiratory", "emergency emergency surgical thoracotomy and lobectomy of affected pulmonary lobe", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Pulmonary Sequestration Intralobar with Recurrent Pneumonias", "Surgery", "Respiratory", "surgical lobectomy with identification and safe division of systemic feeding artery", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 3. Gastrointestinal - 10
    ("Corrosive Pyloric Stricture Following Acid Ingestion", "Surgery", "Gastrointestinal", "distal gastrectomy with Billroth II reconstruction or loop gastrojejunostomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Choledochal Cyst Todani Type IV with Hepatic Duct Dilatation", "Surgery", "Gastrointestinal", "extrahepatic cyst excision with Roux-en-Y hepaticojejunostomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Bleeding Duodenal Ulcer Forrest Ia with Active Arterial Jet", "Surgery", "Gastrointestinal", "endoscopic dual therapy hemoclip and thermal coagulation or surgical under-running", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Volvulus of the Sigmoid Colon with Impending Gangrene", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and Hartmann procedure with sigmoid resection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Liver Hydatid Cyst Grade CE2 with Daughter Vesicles", "Surgery", "Gastrointestinal", "PAIR percutaneous aspiration, injection, re-aspiration or surgical cystectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Necrotizing Pancreatitis with Infected Pancreatic Necrosis", "Surgery", "Gastrointestinal", "step-up approach percutaneous drainage followed by retroperitoneal necrosectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Carcinoma of the Head of Pancreas Resectable T2N0M0", "Surgery", "Gastrointestinal", "classic pancreaticoduodenectomy Whipple procedure with clear surgical margins", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Gastrointestinal Stromal Tumor GIST of the Stomach Exceeding 5cm", "Surgery", "Gastrointestinal", "laparoscopic wedge resection with negative gross margins and adjuvant imatinib", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Fecal Fistula Enterocutaneous High-Output Following Appendectomy", "Surgery", "Gastrointestinal", "correction of fluid and electrolytes, wound care, total parenteral nutrition, and delayed repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Splenic Rupture Grade IV Following Blunt Abdominal Trauma", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and total splenectomy with postsplenectomy vaccination", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 4. Renal & Genitourinary - 10
    ("Renal Cell Carcinoma with Thrombus Extension into Inferior Vena Cava", "Surgery", "Renal", "radical nephrectomy with cavoatrial thrombectomy on cardiopulmonary bypass", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Posterior Urethral Rupture Following Pelvic Ring Fracture", "Surgery", "Renal", "suprapubic catheter insertion and delayed definitive optical or open urethroplasty", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Emphysematous Pyelonephritis Huang-Tseng Class 4 Bilateral", "Surgery", "Renal", "urgent bilateral percutaneous nephrostomy drainage and aggressive broad-spectrum antibiotics", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Urolithiasis with Complete Ureteral Obstruction and Anuria", "Surgery", "Renal", "emergency double-J ureteral stenting or percutaneous nephrostomy placement", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Transitional Cell Carcinoma of Urinary Bladder Muscle-Invasive T2", "Surgery", "Renal", "radical cystectomy with pelvic lymph node dissection and ileal conduit", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Fournier Gangrene Involving Scrotum and Perineal Tissues", "Surgery", "Renal", "emergency radical surgical debridement, broad-spectrum antibiotics, and wound vacuum therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Testicular Seminoma Clinical Stage I Confined to Testis", "Surgery", "Renal", "radical inguinal orchiectomy followed by surveillance or single-dose carboplatin", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("High-Flow Non-Ischemic Priapism Following Perineal Trauma", "Surgery", "Renal", "super-selective catheter embolization of the cavernosal arterial fistula", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Vesicovaginal Fistula Following Obstructed Labor", "Surgery", "Renal", "delayed transvaginal fistula repair with interposition Martius bulbocavernosus flap", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Renal Tuberculosis with Extensive Cavitation and Caliceal Stricture", "Surgery", "Renal", "full course anti-tubercular chemotherapy followed by reconstructive ureterocalicostomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 5. Endocrinology - 10
    ("Pheochromocytoma Surgical Resection Intraoperative Hypertensive Crisis", "Pharmacology", "Endocrine", "intravenous phentolamine or sodium nitroprusside rapid titration", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Follicular Thyroid Carcinoma with Vascular Capsular Invasion", "Surgery", "Endocrine", "completion total thyroidectomy followed by radioactive iodine ablation and TSH suppression", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Insulinoma of Pancreatic Tail Presenting with Neuroglycopenic Episodes", "Surgery", "Endocrine", "laparoscopic distal pancreatectomy or surgical tumor enucleation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Cushing Disease Pituitary Corticotrope Adenoma", "Surgery", "Endocrine", "endoscopic endonasal transsphenoidal pituitary microadenoma resection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Toxic Multinodular Goiter with Substernal Intrathoracic Extension", "Surgery", "Endocrine", "euthyroid preparation followed by total thyroidectomy via cervical incision", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Primary Hyperparathyroidism with Brown Tumors of Bone", "Surgery", "Endocrine", "surgical excision of hyperfunctioning parathyroid adenoma", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Diabetic Foot Gangrene Wagner Grade 4 with Sepsis", "Surgery", "Endocrine", "emergent below-knee amputation, intravenous broad-spectrum antimicrobials, and glucose control", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Adrenal Cortical Carcinoma Exceeding 10cm Infiltrating Kidney", "Surgery", "Endocrine", "en bloc radical adrenalectomy with ipsilateral nephrectomy and lymphadenectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Medullary Thyroid Cancer in MEN 2A with Pheochromocytoma", "Surgery", "Endocrine", "laparoscopic adrenalectomy prior to performing total thyroidectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Thyroid Storm Following Inadequate Preoperative Antithyroid Preparation", "Medicine", "Endocrine", "intravenous hydrocortisone, propylthiouracil, potassium iodide, and esmolol infusion", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 6. Hematology - 10
    ("Massive Blood Transfusion Induced Coagulopathy and Hypocalcemia", "Medicine", "Hematology", "empiric 1:1:1 component resuscitation protocol and intravenous calcium gluconate", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Aplastic Anemia Very Severe in Young Patient", "Medicine", "Hematology", "allogeneic bone marrow transplantation from HLA-matched sibling donor", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hemophilia A with Factor VIII Inhibitor Developing Hemarthrosis", "Medicine", "Hematology", "recombinant factor VIIa or activated prothrombin complex concentrate bypass therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Idiopathic Thrombocytopenic Purpura ITP with Life-Threatening Intracranial Hemorrhage", "Medicine", "Hematology", "emergency platelet transfusion, intravenous immunoglobulin, and pulse methylprednisolone", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Thrombotic Thrombocytopenic Purpura TTP with Microangiopathy", "Medicine", "Hematology", "urgent daily therapeutic plasma exchange combined with high-dose corticosteroids", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Sickle Cell Disease Presenting with Acute Splenic Sequestration Crisis", "Pediatrics", "Hematology", "judicious emergency packed red cell transfusion and hydration to restore circulation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Chronic Lymphocytic Leukemia with Autoimmune Hemolytic Anemia Evans Syndrome", "Medicine", "Hematology", "systemic glucocorticoid pulse therapy and second-line anti-CD20 rituximab", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Promyelocytic Leukemia with Severe Disseminated Intravascular Coagulation", "Medicine", "Hematology", "immediate administration of all-trans retinoic acid ATRA and aggressive platelet support", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Beta-Thalassemia Major with Symptomatic Hypersplenism and Leucopenia", "Surgery", "Hematology", "elective open or laparoscopic splenectomy following comprehensive vaccination", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Heparin-Induced Thrombocytopenia Type 2 with Venous Limb Gangrene", "Pharmacology", "Hematology", "immediate cessation of heparin and initiation of direct thrombin inhibitor argatroban", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 7. Neurology - 10
    ("Acute Epidural Hematoma Lucid Interval with Blown Pupil", "Surgery", "Nervous System", "emergency neurosurgical craniotomy and hematoma evacuation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acute Subdural Hematoma with Midline Shift Exceeding 10mm", "Surgery", "Nervous System", "urgent decompressive hemicraniectomy and evacuation of subdural clot", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Ruptured Anterior Communicating Artery Aneurysm Hunt-Hess Grade 3", "Surgery", "Nervous System", "endovascular coil embolization or surgical aneurysm clipping within 24 hours", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Glioblastoma Multiforme Frontal Lobe with Marked Mass Effect", "Surgery", "Nervous System", "maximal safe neurosurgical resection followed by temozolomide chemoradiotherapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Spinal Extradural Tuberculous Abscess with Progressive Paraplegia", "Surgery", "Nervous System", "emergency decompressive laminectomy, abscess drainage, and anti-tubercular therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Acoustic Neuroma Vestibular Schwannoma Exceeding 3cm", "Surgery", "Nervous System", "microsurgical retrosigmoid or translabyrinthine craniotomy and tumor excision", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Cerebellar Hemangioblastoma in Von Hippel-Lindau Disease", "Surgery", "Nervous System", "suboccipital craniectomy with complete surgical excision of the mural nodule", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Brain Abscess Otogenic Origin Temporal Lobe", "Surgery", "Nervous System", "burr hole aspiration or excision combined with targeted intravenous antibiotics", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Myasthenia Gravis Crisis with Impending Respiratory Arrest", "Neurology", "Nervous System", "urgent therapeutic plasmapheresis or intravenous immunoglobulin and mechanical ventilation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Normal Pressure Hydrocephalus Hakim-Adams Triad", "Surgery", "Nervous System", "ventriculoperitoneal shunt surgical placement following high-volume tap test", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Open Tibial Fracture Gustilo-Anderson Grade IIIB", "Surgery", "Musculoskeletal", "emergency operative wound debridement, external fixation, and soft-tissue flap coverage", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Compartment Syndrome of the Forearm Volkmann Impending Ischemia", "Surgery", "Musculoskeletal", "emergency volar and dorsal decompressive fasciotomy of forearm compartments", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Developmental Dysplasia of Hip in Child Over Two Years", "Surgery", "Musculoskeletal", "open reduction of hip joint combined with femoral shortening and pelvic osteotomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Osteosarcoma of the Distal Femur Metaphysis Without Metastases", "Surgery", "Musculoskeletal", "neoadjuvant systemic chemotherapy followed by limb-salvage wide resection", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Giant Cell Tumor of Bone Epiphysis of Distal Radius", "Surgery", "Musculoskeletal", "intralesional extended curettage with high-speed burring and cementation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tuberculous Dactylitis Spina Ventosa in Pediatric Hand", "Microbiology", "Musculoskeletal", "standard four-drug anti-tubercular chemotherapy and functional splinting", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Scald Burn Involving 40% Total Body Surface Area in Child", "Surgery", "Dermatology", "Parkland formula crystalloid resuscitation and early tangential excision with grafting", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Squamous Cell Carcinoma Arising in Chronic Burn Scar Marjolin Ulcer", "Surgery", "Dermatology", "wide local surgical excision with two-centimeter clearance margin and graft", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Melanoma Breslow Depth 3mm on Plantar Foot", "Surgery", "Dermatology", "wide local excision with two-centimeter margin and sentinel lymph node biopsy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Necrotizing Fasciitis of Upper Limb with Crepitus and Sepsis", "Surgery", "Musculoskeletal", "immediate radical surgical debridement of all necrotic fascia and skin", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Eclampsia with Persistent Convulsions in Active Labor", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate infusion and emergency operative delivery", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Placenta Previa Major with Severe Recurrent Antepartum Hemorrhage", "Obstetrics", "Pregnancy", "emergency cesarean delivery with senior obstetrician and blood products crossmatched", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Uterine Rupture in Trial of Labor After Cesarean TOLAC", "Obstetrics", "Pregnancy", "immediate exploratory laparotomy, fetal delivery, and uterine repair or hysterectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Postpartum Hemorrhage from Cervical Laceration Following Precipitous Labor", "Obstetrics", "Pregnancy", "examination under anesthesia and immediate surgical repair of cervical tear", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Tracheoesophageal Fistula with Esophageal Atresia Gross Type C", "Surgery", "Respiratory", "head-up positioning, continuous pouch suction, and primary surgical repair with fistulectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Congenital Diaphragmatic Hernia Bochdalek Foramen Left Side", "Surgery", "Respiratory", "gentle mechanical ventilation, nasogastric decompression, and delayed surgical repair", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Intestinal Malrotation with Acute Midgut Volvulus in Newborn", "Surgery", "Gastrointestinal", "emergency Ladd procedure with detorsion, band division, and appendectomy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Hirschsprung Disease Long-Segment Aganglionosis in Infant", "Surgery", "Gastrointestinal", "leveling colostomy followed by definitive endorectal pull-through procedure", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Anorectal Malformation High Type with Rectovestibular Fistula", "Surgery", "Gastrointestinal", "divided sigmoid colostomy in neonatal period followed by posterior sagittal anorectoplasty", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Wilms Tumor Nephroblastoma Confined to Kidney Stage I", "Surgery", "General Principles", "radical nephroureterectomy followed by adjuvant vincristine and dactinomycin chemotherapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Informed Consent for Surgery in Emergency Unconscious Patient", "Ethics", "General Principles", "emergency doctrine treatment authorization to preserve life without family delay", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Organ Transplantation Commercial Donor Solicitation Prohibited", "Ethics", "General Principles", "strict adherence to Transplantation of Human Organs and Tissues Act prohibitions", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Professional Impairment and Substance Dependency in Surgical Resident", "Ethics", "General Principles", "immediate relief of clinical duties and confidential referral to medical health committee", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Refusal of Cesarean Section for Fetal Distress by Competent Mother", "Ethics", "General Principles", "respecting competent maternal refusal while providing continuous fetal monitoring and support", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Medical Negligence Allegation with Retained Surgical Sponge", "Ethics", "General Principles", "res ipsa loquitur doctrine documentation, corrective surgery, and institutional disclosure", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Acute Delirium Tremens with Hyperthermia in Surgical Ward", "Psychiatry", "Behavioral Health", "intravenous diazepam titration, high-dose thiamine, and fluid resuscitation", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Schizoaffective Disorder with Command Hallucinations for Self-Harm", "Psychiatry", "Behavioral Health", "involuntary inpatient psychiatric admission and second-generation antipsychotic therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Severe Major Depressive Episode with Catatonia Post-Surgery", "Psychiatry", "Behavioral Health", "intravenous lorazepam challenge followed by bilateral electroconvulsive therapy", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Bipolar I Mania Acute Agitation in Medical Emergency", "Psychiatry", "Behavioral Health", "intramuscular haloperidol combined with lorazepam in a quiet secure environment", "CPSP Clinical Practice Guidelines", "https://www.cpsp.edu.pk"),
    ("Breach of Confidentiality for Highly Communicable Epidemic Disease", "Ethics", "General Principles", "mandatory statutory reporting to provincial health department for public safety", "Pakistan Medical and Dental Council Code", "https://pmdc.pk")
]

NLE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Essential Hypertension Stage 2 in Diabetic Pakistani Patient", "Medicine", "Cardiovascular", "first-line combination therapy with ACE inhibitor and dihydropyridine calcium channel blocker", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Coronary Syndrome STEMI in District Headquarter Hospital", "Medicine", "Cardiovascular", "immediate loading dose aspirin, clopidogrel, and intravenous streptokinase thrombolysis", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Stable Angina Pectoris with Exertional Symptoms", "Medicine", "Cardiovascular", "first-line beta-blocker therapy, sublingual glyceryl trinitrate, and high-intensity statin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Pulmonary Edema in Decompensated Heart Failure", "Medicine", "Cardiovascular", "intravenous furosemide bolus, supplemental oxygen, and intravenous nitroglycerin infusion", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Atrial Fibrillation with Rapid Ventricular Response in Rural Clinic", "Medicine", "Cardiovascular", "rate control with oral or intravenous beta-blocker and thromboembolic risk assessment", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Infective Endocarditis Prophylaxis Indications in Dental Extraction", "Medicine", "Cardiovascular", "oral amoxicillin two grams administered thirty to sixty minutes before procedure", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Deep Vein Thrombosis of Femoral Vein in Tehsil Hospital", "Medicine", "Cardiovascular", "therapeutic low-molecular-weight heparin overlapping with oral warfarin anticoagulation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Primary Prevention of Cardiovascular Disease with Statins", "Medicine", "Cardiovascular", "ten-year cardiovascular risk assessment and atorvastatin therapy for high risk", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Hypovolemic Shock Secondary to Acute Gastrointestinal Hemorrhage", "Medicine", "Cardiovascular", "rapid intravenous resuscitation with two large-bore cannulas and normal saline", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Cardiac Arrest with Ventricular Fibrillation in Emergency Room", "Medicine", "Cardiovascular", "immediate unsynchronized electrical defibrillation and high-quality chest compressions", "PMDC National Guidelines", "https://pmdc.pk"),

    # 2. Respiratory - 10
    ("Pulmonary Tuberculosis New Sputum Smear Positive Case", "Microbiology", "Respiratory", "six-month daily regimen with 2HRZE followed by 4HR under direct observation DOTS", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Acute Severe Asthma Exacerbation in Basic Health Unit", "Medicine", "Respiratory", "nebulized salbutamol with ipratropium bromide and oral systemic prednisolone", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Community-Acquired Pneumonia CURB-65 Score 3 in DHQ Hospital", "Medicine", "Respiratory", "admission and intravenous ceftriaxone combined with oral or intravenous azithromycin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Obstructive Pulmonary Disease Acute Exacerbation", "Medicine", "Respiratory", "controlled oxygen therapy, nebulized bronchodilators, oral prednisolone, and amoxicillin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Pleural Effusion Massive Unilateral with Tracheal Shift", "Surgery", "Respiratory", "therapeutic thoracocentesis with drainage limited to 1.5 liters per session", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Spontaneous Pneumothorax Moderate Size in Young Male", "Surgery", "Respiratory", "intercostal chest drain tube insertion in the fifth intercostal space anterior axillary line", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Aspiration Pneumonia in Elderly Bedridden Patient", "Medicine", "Respiratory", "intravenous ampicillin-sulbactam or oral amoxicillin-clavulanate covering anaerobes", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Occupational Coal Worker Pneumoconiosis Anthracosis", "Medicine", "Respiratory", "cessation of dust exposure, supportive bronchodilator therapy, and smoking cessation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Bronchiolitis in Six-Month-Old Infant in Rural Setting", "Pediatrics", "Respiratory", "supportive humidified oxygen, frequent small feeds, and minimal handling", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Stridor in Two-Year-Old Child with Viral Croup", "Pediatrics", "Respiratory", "single dose oral dexamethasone and close observation for airway compromise", "PMDC National Guidelines", "https://pmdc.pk"),

    # 3. Gastrointestinal - 10
    ("Acute Appendicitis with Localized Right Lower Quadrant Guarding", "Surgery", "Gastrointestinal", "emergency appendectomy following intravenous fluid resuscitation and antibiotics", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Cholecystitis with Positive Murphy Sign in Rural DHQ", "Surgery", "Gastrointestinal", "intravenous fluids, bowel rest, analgesics, antibiotics, and early cholecystectomy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Enteric Typhoid Fever Uncomplicated in Community Clinic", "Microbiology", "Gastrointestinal", "oral azithromycin or cefixime antimicrobial therapy for ten to fourteen days", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Extensively Drug-Resistant XDR Typhoid Fever in Sindh Region", "Microbiology", "Gastrointestinal", "intravenous meropenem or oral azithromycin based on microbiological sensitivity", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Acute Viral Hepatitis A with Acute Liver Injury in Child", "Microbiology", "Gastrointestinal", "conservative supportive care, adequate hydration, nutrition, and hygiene precautions", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Cirrhosis with Gross Ascites and Peripheral Edema", "Medicine", "Gastrointestinal", "dietary sodium restriction and combination spironolactone with furosemide diuresis", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Variceal Bleeding in Decompensated Cirrhosis", "Medicine", "Gastrointestinal", "intravenous terlipressin, prophylactic ceftriaxone, and urgent endoscopic variceal band ligation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Perforated Peptic Ulcer with Generalized Peritonitis", "Surgery", "Gastrointestinal", "emergency resuscitation, intravenous broad-spectrum antibiotics, and Graham patch closure", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Strangulated Inguinal Hernia with Severe Groin Pain", "Surgery", "Gastrointestinal", "emergency surgical exploration, hernia reduction, bowel viability assessment, and repair", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Amebic Dysentery with Bloody Mucoid Stool in Basic Health Unit", "Microbiology", "Gastrointestinal", "oral metronidazole therapy followed by diloxanide furoate luminal eradication", "PMDC National Guidelines", "https://pmdc.pk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Pyelonephritis Uncomplicated in Young Non-Pregnant Female", "Medicine", "Renal", "oral ciprofloxacin or co-amoxiclav for seven to ten days with adequate hydration", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Glomerulonephritis Following Streptococcal Pharyngitis in Child", "Pediatrics", "Renal", "fluid and sodium restriction, loop diuretics for fluid overload, and penicillin course", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Renal Colic Secondary to Ureteral Calculus Under Five Millimeters", "Medicine", "Renal", "adequate oral hydration, NSAID analgesia, and alpha-blocker tamsulosin for expulsion", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Urinary Retention in Elderly Male with Benign Prostatic Hyperplasia", "Surgery", "Renal", "emergency urethral catheterization and initiation of alpha-blocker therapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Kidney Disease Stage 4 with Hyperkalemia and Anemia", "Medicine", "Renal", "dietary potassium restriction, oral sodium bicarbonate, and erythropoietin stimulating agents", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Kidney Injury Prerenal Azotemia Secondary to Dehydration", "Medicine", "Renal", "prompt intravenous isotonic saline fluid resuscitation and urine output monitoring", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Testicular Torsion in Adolescent Presenting at Four Hours", "Surgery", "Renal", "emergency surgical exploration, bilateral detorsion, and testicular fixation orchiopexy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Urinary Tract Infection in Pregnancy at Twenty-Four Weeks", "Obstetrics", "Renal", "oral nitrofurantoin or cephalexin antimicrobial therapy for seven days", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Nephrotic Syndrome Minimal Change Disease in Four-Year-Old", "Pediatrics", "Renal", "oral prednisolone induction therapy at standard dosage for six weeks", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Catheter-Associated Urinary Tract Infection in Hospitalized Patient", "Microbiology", "Renal", "catheter removal or replacement and culture-directed antimicrobial therapy", "PMDC National Guidelines", "https://pmdc.pk"),

    # 5. Endocrinology - 10
    ("Type 2 Diabetes Mellitus Newly Diagnosed with HbA1c 8.2%", "Medicine", "Endocrine", "lifestyle modification and first-line oral metformin titration", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Diabetic Ketoacidosis Presentation in Tehsil Hospital", "Medicine", "Endocrine", "intravenous fluid resuscitation, regular insulin infusion, and potassium replacement", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Hypoglycemia in Elderly Diabetic Patient on Glibenclamide", "Medicine", "Endocrine", "intravenous dextrose administration and switching to safer lower-risk hypoglycemic agent", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Primary Hypothyroidism with Elevated TSH and Fatigue", "Medicine", "Endocrine", "oral levothyroxine replacement therapy titrated to normal serum TSH levels", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Graves Disease Hyperthyroidism in Young Female", "Medicine", "Endocrine", "oral carbimazole antithyroid drug therapy and propranolol for tremor and palpitations", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Simple Diffuse Endemic Goiter in Northern Pakistan", "Biochemistry", "Endocrine", "universal use of iodized table salt and nutritional education", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Acute Adrenal Insufficiency Crisis in Previously Diagnosed Patient", "Medicine", "Endocrine", "immediate intravenous hydrocortisone bolus and normal saline fluid resuscitation", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Gestational Diabetes Mellitus Diagnosed on Oral Glucose Tolerance Test", "Obstetrics", "Endocrine", "dietary medical nutrition therapy and blood glucose self-monitoring targets", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Diabetic Neuropathy with Distal Symmetrical Burning Pain", "Medicine", "Endocrine", "tight glycemic control and neuropathic analgesia with pregabalin or duloxetine", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),
    ("Cushing Syndrome Induced by Over-the-Counter Corticosteroid Creams", "Medicine", "Endocrine", "gradual tapering of exogenous topical steroid under medical supervision to avoid crisis", "Pakistan Endocrine Society Guidelines", "https://pes.org.pk"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia in Multiparous Female in Basic Health Unit", "Medicine", "Hematology", "oral ferrous sulfate with dietary counseling and ascorbic acid supplementation", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Beta-Thalassemia Trait Carrier Screening in Premarital Counseling", "Genetics", "Hematology", "complete blood count, Hb electrophoresis, and hemoglobinopathy partner screening", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Megaloblastic Anemia Secondary to Nutritional B12 Deficiency", "Medicine", "Hematology", "intramuscular hydroxocobalamin replacement and oral folic acid supplementation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Malaria Plasmodium Vivax Infection in Rural Punjab", "Microbiology", "Hematology", "oral chloroquine combined with fourteen-day primaquine radical cure for hypnozoites", "National Malaria Control Program Pakistan", "https://nhsrc.gov.pk"),
    ("Malaria Plasmodium Falciparum Uncomplicated Infection", "Microbiology", "Hematology", "oral artemisinin-based combination therapy artemether-lumefantrine for three days", "National Malaria Control Program Pakistan", "https://nhsrc.gov.pk"),
    ("Dengue Fever Classic Presentation with Leukopenia and Thrombocytopenia", "Microbiology", "Hematology", "paracetamol analgesia, oral rehydration therapy, and strict avoidance of aspirin/NSAIDs", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Thrombocytopenia in Dengue Shock Syndrome with Bleeding", "Microbiology", "Hematology", "judicious intravenous crystalloid titration and packed red cell or platelet transfusion if indicated", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Hemolytic Disease of Newborn Rh Incompatibility Prevention", "Obstetrics", "Hematology", "anti-D immunoglobulin administration to Rh-negative mother within 72 hours of delivery", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Idiopathic Thrombocytopenic Purpura ITP in Seven-Year-Old Child", "Pediatrics", "Hematology", "observation for mild bleeding or oral prednisolone for significant mucosal bleeding", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Warfarin Overanticoagulation with INR 7.0 and No Bleeding", "Pharmacology", "Hematology", "withholding warfarin doses, monitoring INR, and oral low-dose vitamin K if indicated", "PMDC National Guidelines", "https://pmdc.pk"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke Presentation at Rural Tehsil Hospital", "Medicine", "Nervous System", "urgent transfer to tertiary stroke center, supportive airway care, and aspirin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Generalized Tonic-Clonic Seizure in Emergency Room", "Medicine", "Nervous System", "intravenous diazepam or lorazepam titration and oxygenation in lateral recovery position", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Bacterial Meningitis in Adult in District Hospital", "Microbiology", "Nervous System", "immediate empirical intravenous ceftriaxone combined with vancomycin and dexamethasone", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Tuberculous Meningitis in Young Adult in Outpatient Clinic", "Microbiology", "Nervous System", "four-drug anti-tubercular therapy combined with adjuvant tapering oral prednisolone", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Bell Palsy Idiopathic Facial Nerve Paralysis at Day Two", "Medicine", "Nervous System", "oral prednisolone therapy for ten days combined with eye lubrication and patching", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Migraine Headache Acute Moderate to Severe Attack", "Medicine", "Nervous System", "oral triptan sumatriptan combined with NSAID and antiemetic metoclopramide", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Parkinson Disease Initial Presentation with Resting Tremor", "Medicine", "Nervous System", "dopaminergic therapy with levodopa-carbidopa or dopamine agonist pramipexole", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Febrile Convulsion Simple in Two-Year-Old Child in Primary Care", "Pediatrics", "Nervous System", "parental reassurance, antipyretic paracetamol, and counseling on fever management", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Head Injury Concussion Following Road Traffic Accident", "Surgery", "Nervous System", "Canadian CT Head Rule assessment, neurological observation, and gradual rest protocol", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Organophosphate Toxicity Presentation with Miosis and Bronchospasm", "Pharmacology", "Nervous System", "intravenous atropine titration to clear bronchial secretions and pralidoxime", "PMDC National Guidelines", "https://pmdc.pk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Closed Fracture of Both Bones Forearm in Eight-Year-Old", "Surgery", "Musculoskeletal", "closed reduction under sedation and above-elbow plaster of Paris cast immobilization", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Anterior Shoulder Dislocation Following Sports Injury", "Surgery", "Musculoskeletal", "closed reduction under intravenous sedation and broad arm sling immobilization", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Osteoarthritis of Knee with Mild to Moderate Functional Impairment", "Medicine", "Musculoskeletal", "quadriceps strengthening exercises, weight reduction, and paracetamol or topical NSAIDs", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Scabies Infestation in Family Living in Congested Housing", "Microbiology", "Dermatology", "topical 5% permethrin cream applied neck down and simultaneous treatment of all contacts", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Tinea Corporis Ringworm Infection on Trunk", "Microbiology", "Dermatology", "topical antifungal cream clotrimazole or terbinafine applied twice daily for two weeks", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Atopic Eczema Flare in Six-Year-Old Child", "Medicine", "Dermatology", "liberal bland emollient moisturizers and short-course mild topical hydrocortisone", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Burn Injury Partial Thickness Scald Covering 10% TBSA in Adult", "Surgery", "Dermatology", "copious cooling with clean tap water, silver sulfadiazine dressing, and oral fluids", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Cutaneous Leishmaniasis Oriental Sore in Khyber Pakhtunkhwa", "Microbiology", "Dermatology", "intralesional or intramuscular meglumine antimoniate sodium stibogluconate", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Impetigo Contagiosa Honey-Colored Crusted Lesions on Face", "Microbiology", "Dermatology", "topical mupirocin 2% ointment or oral co-amoxiclav for widespread lesions", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Gout Acute Monoarthritis of First Metatarsophalangeal Joint", "Medicine", "Musculoskeletal", "oral NSAIDs or low-dose colchicine and postponement of allopurinol until attack resolves", "PMDC National Guidelines", "https://pmdc.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Routine Antenatal Care Tetanus Toxoid Vaccination Schedule", "Obstetrics", "Pregnancy", "two doses of tetanus toxoid administered at least four weeks apart during pregnancy", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Postpartum Hemorrhage Secondary to Uterine Atony in BHU", "Obstetrics", "Pregnancy", "fundal uterine massage and intramuscular or intravenous oxytocin administration", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Severe Preeclampsia at Thirty-Six Weeks in THQ Hospital", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis and hydralazine blood pressure control", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Normal Labor Active Stage Delay Management", "Obstetrics", "Pregnancy", "partograph plotting, amniotomy, and cautious oxytocin augmentation if contractions inadequate", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Diarrhea with Moderate Dehydration Some Dehydration in Child", "Pediatrics", "Gastrointestinal", "oral rehydration salts ORS solution administration and oral zinc supplementation for 14 days", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Acute Diarrhea with Severe Dehydration and Lethargy in Infant", "Pediatrics", "Gastrointestinal", "immediate intravenous Ringer lactate fluid resuscitation under WHO Plan C", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("EPI Vaccine Schedule Oral Polio Vaccine Zero Dose at Birth", "Pediatrics", "General Principles", "oral bivalent polio vaccine drops administered along with BCG vaccine at birth", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Measles Infection with Koplik Spots and Maculopapular Rash", "Pediatrics", "General Principles", "high-dose vitamin A administration for two consecutive days and supportive care", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Neonatal Jaundice Physiological on Day Three of Life", "Pediatrics", "Gastrointestinal", "encouragement of frequent exclusive breastfeeding and clinical observation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Exclusive Breastfeeding Promotion and Weaning Education", "Pediatrics", "General Principles", "exclusive breastfeeding for the first six months followed by age-appropriate complementary foods", "National Infant and Young Child Feeding Strategy", "https://nhsrc.gov.pk"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Major Depressive Disorder Moderate in Primary Health Care", "Psychiatry", "Behavioral Health", "oral selective serotonin reuptake inhibitor fluoxetine or sertraline and counseling", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Generalized Anxiety Disorder with Chronic Worry and Somatic Tension", "Psychiatry", "Behavioral Health", "psychoeducation, cognitive behavioral techniques, and oral SSRI therapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Informed Consent for Surgical Procedure in Competent Adult", "Ethics", "General Principles", "explaining risks, benefits, alternatives, and obtaining voluntary written consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Patient Confidentiality with Family Demanding Medical Disclosure", "Ethics", "General Principles", "maintaining confidentiality and refusing disclosure without explicit patient consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Doctor-Patient Relationship and Prohibition of Gifts from Pharma", "Ethics", "General Principles", "strict prohibition of financial incentives or expensive gifts influencing prescribing", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Medical Certification of Cause of Death MCCD Completion", "Ethics", "General Principles", "recording immediate cause, antecedent cause, and underlying cause of death accurately", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Acute Panic Attack Presentation in Emergency Room", "Psychiatry", "Behavioral Health", "reassurance, breathing retraining in paper bag, and short-term oral benzodiazepine if severe", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Postpartum Depression Mild to Moderate at Six Weeks", "Psychiatry", "Behavioral Health", "supportive counseling, family involvement, and breastfeeding-compatible sertraline", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Reporting Domestic Violence and Physical Abuse in Primary Care", "Ethics", "General Principles", "ensuring immediate patient safety, confidential documentation, and referral to support services", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Water and Sanitation Hygiene WASH Education for Diarrhea Prevention", "Ethics", "General Principles", "community education on handwashing with soap, safe water boiling, and sanitary toilets", "National Health Services Guidelines", "https://nhsrc.gov.pk")
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
    validate_topics(FCPS_TOPICS, "FCPS")
    validate_topics(NLE_TOPICS, "NLE")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega78_topics_a.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 78 Topics Part A\n\n")
        f.write(f"FCPS_TOPICS = {repr(FCPS_TOPICS)}\n\n")
        f.write(f"NLE_TOPICS = {repr(NLE_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
