"""
Topic Generator for Mega-Batch 81 - Part A
Tracks:
- Batch 391: 100 UHS MBBS (Pakistan) topics (2,800 -> 2,900) [HISTORIC: ALL 11 INTERNATIONAL TRACKS AT 2,900 COMPLETE!]
- Batch 392: 100 HAAD / DHA (UAE) topics (2,800 -> 2,900)
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

UHS_MBBS_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute Anterior Wall Myocardial Infarction in Mayo Hospital Lahore", "Medicine", "Cardiovascular", "immediate chewable aspirin 300 mg, sublingual nitrates, and emergency primary PCI", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Mitral Stenosis Rheumatic with Atrial Fibrillation in Services Hospital", "Medicine", "Cardiovascular", "therapeutic oral anticoagulation with warfarin and beta-blocker rate control", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Hypertensive Urgency with Blood Pressure 190/110 without Target Organ Damage", "Medicine", "Cardiovascular", "gradual blood pressure lowering over 24 to 48 hours using oral amlodipine or captopril", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Heart Failure with Reduced Ejection Fraction NYHA Class III in Jinnah Hospital", "Medicine", "Cardiovascular", "guideline-directed medical therapy with ARNI, bisoprolol, spironolactone, and dapagliflozin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Infective Endocarditis Native Aortic Valve Duke Criteria Positive", "Microbiology", "Cardiovascular", "three sets of blood cultures followed by targeted intravenous ceftriaxone and vancomycin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Cardiac Tamponade Traumatic Beck Triad in Sir Ganga Ram Hospital", "Surgery", "Cardiovascular", "immediate emergency subxiphoid pericardiocentesis under ultrasound guidance", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Pericarditis Post-Infectious with Friction Rub in Nishtar Hospital", "Medicine", "Cardiovascular", "oral ibuprofen 600 mg three times daily combined with oral colchicine for three months", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Deep Vein Thrombosis Iliofemoral Unprovoked in Allied Hospital Faisalabad", "Medicine", "Cardiovascular", "therapeutic low-molecular-weight heparin bridged to oral direct oral anticoagulant DOAC", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Atrial Flutter with Rapid Ventricular Response 150/min in Ward", "Medicine", "Cardiovascular", "rate control with intravenous verapamil or beta-blocker and elective synchronized cardioversion", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Aortic Regurgitation Chronic Severe with Water-Hammer Pulse", "Medicine", "Cardiovascular", "echocardiographic monitoring of left ventricular end-systolic dimension and surgical valve replacement", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 2. Respiratory - 10
    ("Pulmonary Tuberculosis Cavitary Active Disease in Mayo Hospital", "Microbiology", "Respiratory", "standard four-drug fixed-dose regimen isoniazid, rifampicin, pyrazinamide, ethambutol for two months", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Acute Severe Bronchial Asthma Exacerbation in Emergency Ward Lahore", "Medicine", "Respiratory", "frequent nebulized salbutamol and ipratropium, intravenous hydrocortisone, and high-flow oxygen", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("COPD Acute Exacerbation Anthonisen Type 1 in Services Hospital", "Medicine", "Respiratory", "nebulized bronchodilators, short-course systemic oral prednisolone, and oral amoxicillin-clavulanate", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Community-Acquired Pneumonia Lobar Consolidation CURB-65 Score 2", "Medicine", "Respiratory", "hospital admission and intravenous ceftriaxone combined with oral or IV clarithromycin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Primary Spontaneous Pneumothorax Moderate Size in Tall Thin Male", "Surgery", "Respiratory", "simple needle aspiration in second intercostal space or small-bore intercostal chest tube insertion", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Pleural Effusion Tuberculous Exudative with High ADA in Jinnah Hospital", "Microbiology", "Respiratory", "diagnostic thoracentesis confirming elevated adenosine deaminase and anti-tubercular therapy", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Bronchiectasis with Recurrent Sputum Production and Hemoptysis in Multan", "Medicine", "Respiratory", "chest physiotherapy, active cycle of breathing techniques, and culture-directed oral antibiotics", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Lung Abscess Aspiration-Induced with Foul-Smelling Purulent Sputum", "Microbiology", "Respiratory", "prolonged course of intravenous ampicillin-sulbactam or clindamycin for 4 to 6 weeks", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Respiratory Distress Syndrome ARDS Severe Berlin Criteria", "Medicine", "Respiratory", "lung-protective mechanical ventilation with low tidal volume 6 ml/kg and prone positioning", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Hydatid Disease of the Right Lung Intact Unruptured Cyst", "Surgery", "Respiratory", "cyst enucleation capitonnage Barrett technique under perioperative oral albendazole coverage", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 3. Gastrointestinal - 10
    ("Bleeding Peptic Ulcer Forrest IIa Non-Bleeding Visible Vessel in Mayo Hospital", "Surgery", "Gastrointestinal", "endoscopic dual therapy hemoclipping and thermal coagulation plus high-dose IV omeprazole infusion", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Appendicitis Classic Presentation with McBurney Tenderness", "Surgery", "Gastrointestinal", "intravenous fluids, broad-spectrum prophylactic antibiotics, and prompt laparoscopic appendectomy", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Calculous Cholecystitis with Positive Murphy Sign in Lahore", "Surgery", "Gastrointestinal", "intravenous fluid resuscitation, broad-spectrum antibiotics, and early laparoscopic cholecystectomy", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Pancreatitis Biliary Etiology with Severe Epigastric Pain", "Surgery", "Gastrointestinal", "vigorous intravenous fluid hydration, multimodal analgesia, and index admission cholecystectomy", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Hepatic Cirrhosis with Decompensated Ascites in Services Hospital", "Medicine", "Gastrointestinal", "dietary sodium restriction 2g daily and combination oral spironolactone and furosemide", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Bleeding Esophageal Varices in Cirrhotic Patient in Jinnah Hospital", "Medicine", "Gastrointestinal", "intravenous terlipressin, prophylactic IV ceftriaxone, and urgent endoscopic variceal band ligation", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Pyogenic Liver Abscess Klebsiella Pneumoniae in Ganga Ram Hospital", "Microbiology", "Gastrointestinal", "ultrasound-guided percutaneous pigtail catheter drainage and targeted intravenous ceftriaxone", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Intestinal Obstruction from Strangulated Inguinal Hernia in Multan", "Surgery", "Gastrointestinal", "emergency fluid resuscitation, nasogastric decompression, and immediate surgical exploration", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Enteric Perforation in Typhoid Fever Second Week of Illness", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and primary double-layer closure of ileal perforation", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Celiac Disease Adult Presentation with Malabsorption and Weight Loss", "Immunology", "Gastrointestinal", "serum anti-tissue transglutaminase IgA, confirmatory duodenal biopsy, and strict gluten-free diet", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Kidney Injury Stage 2 Pre-Renal from Severe Dehydration in Lahore", "Medicine", "Renal", "stopping nephrotoxic agents, aggressive isotonic normal saline resuscitation, and monitoring", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Chronic Kidney Disease Stage G4 with Secondary Hyperparathyroidism", "Medicine", "Renal", "dietary phosphate restriction, oral calcium acetate binder, and active vitamin D calcitriol", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Nephrotic Syndrome Steroid-Sensitive in 6-Year-Old Child in Children Hospital", "Pediatrics", "Renal", "oral prednisolone 60 mg/m2 daily for six weeks followed by alternate-day tapering course", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Post-Streptococcal Glomerulonephritis APSGN in 8-Year-Old Lahore", "Pediatrics", "Renal", "fluid and dietary sodium restriction, oral loop diuretic furosemide, and blood pressure control", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Pyelonephritis Uncomplicated in Young Non-Pregnant Female", "Microbiology", "Renal", "oral ciprofloxacin or intramuscular ceftriaxone followed by oral cephalosporin course", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Ureteral Calculus Five Millimeter Distal Stone with Severe Colic", "Medicine", "Renal", "oral NSAID diclofenac analgesia, medical expulsive therapy tamsulosin, and oral hydration", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Benign Prostatic Hyperplasia with Acute Urinary Retention in 68-Year-Old", "Surgery", "Renal", "immediate per-urethral Foley catheterization, starting oral tamsulosin, and trial without catheter", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Testicular Torsion Suspected in 16-Year-Old Adolescent in Emergency", "Surgery", "Renal", "immediate emergency scrotal exploration and bilateral orchidopexy without delay for imaging", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Painless Gross Hematuria in 62-Year-Old Smoker in Ganga Ram Hospital", "Surgery", "Renal", "urgent urology referral for flexible cystoscopy and contrast-enhanced CT urography", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Hyperkalemia Severe Potassium 6.8 with Peaked T Waves in Mayo ED", "Medicine", "Renal", "immediate intravenous 10% calcium gluconate 10ml over 5 minutes followed by insulin-glucose", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Uncontrolled HbA1c 8.8% in Primary Care Lahore", "Medicine", "Endocrine", "lifestyle intervention, metformin titration, and adding second-line oral sitagliptin/glimepiride", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Diabetic Ketoacidosis DKA Moderate in 22-Year-Old Type 1 Diabetic in Services", "Medicine", "Endocrine", "intravenous 0.9% normal saline resuscitation, continuous regular insulin infusion, and KCl", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Hyperosmolar Hyperglycemic State HHS in Elderly Female in Mayo Hospital", "Medicine", "Endocrine", "aggressive isotonic crystalloid rehydration, monitoring serum osmolality, and low-dose insulin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Graves Disease Hyperthyroidism First Presentation with Diffuse Goitre", "Medicine", "Endocrine", "oral carbimazole 20 to 30 mg daily combined with propranolol for palpitations and tremor", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Primary Hypothyroidism Overt Presentation with TSH 24 in Multan", "Medicine", "Endocrine", "daily morning oral levothyroxine 1.6 mcg/kg taken on empty stomach with plain water", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Primary Hyperparathyroidism Incidental Hypercalcemia in Faisalabad", "Surgery", "Endocrine", "measurement of 24-hour urinary calcium and referral for neck sestamibi scan localization", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Cushing Disease Pituitary ACTH-Secreting Adenoma in Jinnah Hospital", "Surgery", "Endocrine", "transsphenoidal surgical resection of pituitary adenoma by experienced neurosurgeon", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Primary Adrenal Insufficiency Addison Disease Acute Presentation", "Medicine", "Endocrine", "immediate intravenous hydrocortisone 100 mg bolus, normal saline infusion, and fludrocortisone", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Solitary Thyroid Nodule 2cm Bethesda VI Malignant on FNAC in Services", "Surgery", "Endocrine", "total thyroidectomy with central compartment lymph node dissection and radioactive iodine review", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Severe Nutritional Vitamin D Deficiency Rickets in Toddler in Lahore", "Pediatrics", "Endocrine", "oral cholecalciferol 60,000 IU weekly for six weeks followed by daily maintenance and calcium", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia Severe Secondary to Menorrhagia in Ganga Ram", "Medicine", "Hematology", "intravenous iron sucrose or ferric carboxymaltose infusion and gynecological evaluation", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Beta Thalassemia Major in 2-Year-Old Child in Children Hospital Lahore", "Pediatrics", "Hematology", "regular leukoreduced packed red blood cell transfusions and oral iron chelation deferasirox", "National Thalassemia Prevention Programme Pakistan", "https://nhsrc.gov.pk"),
    ("Megaloblastic Anemia Nutritional Vitamin B12 Deficiency in Vegetarian", "Medicine", "Hematology", "intramuscular cyanocobalamin 1000 mcg injections alternate days for two weeks then monthly", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Immune Thrombocytopenic Purpura ITP in 7-Year-Old Child in Lahore", "Pediatrics", "Hematology", "observation for mild cutaneous purpura or oral prednisolone for significant mucosal bleeding", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Falciparum Malaria Uncomplicated Presentation in Mayo Hospital Lahore", "Microbiology", "Hematology", "oral artemisinin-based combination therapy artemether-lumefantrine for three days", "National Malaria Control Program Pakistan", "https://nhsrc.gov.pk"),
    ("Dengue Fever Classic Febrile Presentation with Leukopenia in Lahore", "Microbiology", "Hematology", "oral paracetamol analgesia, oral fluid rehydration therapy, and strict avoidance of NSAIDs", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Dengue Shock Syndrome with Severe Thrombocytopenia and Hypotension", "Microbiology", "Hematology", "judicious protocolized intravenous crystalloid resuscitation in dedicated dengue high-dependency unit", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Hemophilia A Moderate with Traumatic Knee Hemarthrosis in Multan", "Medicine", "Hematology", "intravenous recombinant factor VIII concentrate infusion targeting 50 to 100% activity", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Lymphoblastic Leukemia ALL in 5-Year-Old Child in Children Hospital", "Pediatrics", "Hematology", "multi-agent induction chemotherapy vincristine, prednisolone, L-asparaginase, daunorubicin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Warfarin Overanticoagulation with INR 7.5 and No Active Bleeding", "Pharmacology", "Hematology", "withholding warfarin doses, monitoring INR, and oral low-dose vitamin K 1 to 2.5 mg", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within 3 Hours of Onset in Mayo Hospital", "Medicine", "Nervous System", "urgent non-contrast CT brain, tele-stroke review, and intravenous alteplase thrombolysis", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Bacterial Meningitis Community-Acquired in Adult in Services Hospital", "Microbiology", "Nervous System", "immediate intravenous ceftriaxone 2g twice daily combined with vancomycin and dexamethasone", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Tuberculous Meningitis TBM Stage II in Young Female in Jinnah Hospital", "Microbiology", "Nervous System", "four-drug anti-tubercular therapy HRZE combined with high-dose tapering systemic steroids", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Status Epilepticus Ongoing Generalized Convulsion in Emergency Room", "Medicine", "Nervous System", "intravenous diazepam 10mg or lorazepam 4mg followed by IV levetiracetam 60 mg/kg loading", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Bell Palsy Acute Peripheral Facial Nerve Paralysis at Day Two in Lahore", "Medicine", "Nervous System", "oral prednisolone 50 mg daily for ten days, eye lubrication drops, and night eye patching", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Migraine Headache Moderate Acute Attack in Medical Outpatient Clinic", "Medicine", "Nervous System", "oral triptan sumatriptan 50 to 100 mg combined with naproxen and antiemetic metoclopramide", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Parkinson Disease Initial Presentation with Resting Tremor in Senior", "Medicine", "Nervous System", "dopaminergic therapy with oral levodopa-carbidopa or dopamine agonist pramipexole", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Febrile Convulsion Simple First Occurrence in 20-Month-Old Infant", "Pediatrics", "Nervous System", "reassurance, identifying infection source, paracetamol antipyretic, and seizure safety advice", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Guillain-Barre Syndrome Acute Ascending Symmetric Weakness in Lahore", "Medicine", "Nervous System", "hospital admission, forced vital capacity monitoring, and intravenous immunoglobulin IVIG course", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Trigeminal Neuralgia Classic Lancinating Facial Pain in Elderly Female", "Medicine", "Nervous System", "oral carbamazepine 100 mg twice daily titrated to achieve effective pain suppression", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Symmetrical Small Joint Polyarthritis", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug oral methotrexate with folic acid bridge", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Septic Arthritis Native Knee Joint Presentation in Emergency Ward", "Microbiology", "Musculoskeletal", "urgent arthrocentesis with synovial fluid analysis and targeted intravenous ceftriaxone/vancomycin", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Gout Flare First MTP Joint Podagra in 50-Year-Old Male", "Medicine", "Musculoskeletal", "oral NSAID indomethacin or low-dose colchicine and postponing urate-lowering changes", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Osteoarthritis of the Knee Bilateral with Moderate Functional Deficit", "Medicine", "Musculoskeletal", "quadriceps strengthening exercises, weight reduction, and oral paracetamol or topical NSAIDs", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Closed Fracture of Both Bones Forearm in 8-Year-Old in Orthopedics", "Surgery", "Musculoskeletal", "closed reduction under sedation and above-elbow plaster of Paris cast immobilization", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Anterior Shoulder Dislocation Following Sports Injury in College Student", "Surgery", "Musculoskeletal", "closed reduction under intravenous sedation and broad arm sling immobilization for two weeks", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Scabies Infestation in Family Living in Congested House in Lahore", "Microbiology", "Dermatology", "topical 5% permethrin cream applied neck to toes and treating all household contacts", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Psoriasis Vulgaris Chronic Plaque Disease on Extensor Surfaces", "Medicine", "Dermatology", "topical combination of potent corticosteroid clobetasol and calcipotriol ointment", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Atopic Dermatitis Moderate Flexural Eczema in Child in OPD", "Medicine", "Dermatology", "liberal daily ceramide-based emollients and topical 1% hydrocortisone cream for flares", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Cutaneous Leishmaniasis Oriental Sore on Forearm in Quetta Traveler", "Microbiology", "Dermatology", "intralesional meglumine antimoniate sodium stibogluconate injections twice weekly", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Routine Antenatal Care Tetanus Toxoid Vaccination in Ganga Ram", "Obstetrics", "Pregnancy", "two doses of tetanus toxoid administered at least four weeks apart during pregnancy", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Severe Preeclampsia at 35 Weeks with Headache and Hyperreflexia", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, labetalol, and planned delivery", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Postpartum Hemorrhage Secondary to Uterine Atony in Delivery Room", "Obstetrics", "Pregnancy", "active uterine fundal massage, intravenous oxytocin infusion, and intramuscular ergometrine", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Ectopic Pregnancy Unruptured Stable Low hCG in Ganga Ram Hospital", "Obstetrics", "Pregnancy", "transvaginal ultrasound confirmation and single-dose intramuscular methotrexate protocol", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Neonatal Jaundice Physiological on Day Three of Life in Newborn Unit", "Pediatrics", "Gastrointestinal", "reassurance, promoting frequent exclusive breastfeeding, and daily clinical observation", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Diarrhea with Severe Dehydration WHO Plan C in 9-Month-Old", "Pediatrics", "Gastrointestinal", "immediate intravenous Ringer lactate fluid resuscitation 100 ml/kg per WHO protocol", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Viral Bronchiolitis in 3-Month-Old Infant with Mild Tachypnea", "Pediatrics", "Respiratory", "supportive care, small frequent feeds, gentle nasal suctioning, and minimal handling", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Croup Laryngotracheobronchitis Mild to Moderate in Toddler", "Pediatrics", "Respiratory", "single dose of oral soluble dexamethasone 0.15 mg/kg and calm parent reassurance", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Childhood Immunization EPI Schedule BCG and OPV Zero Dose at Birth", "Pediatrics", "General Principles", "intradermal BCG vaccine right deltoid and bivalent oral polio drops OPV at birth", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Exclusive Breastfeeding Promotion for Primiparous Mother in Lahore", "Pediatrics", "General Principles", "exclusive breastfeeding on demand for the first six months without water or supplements", "National Infant and Young Child Feeding Strategy", "https://nhsrc.gov.pk"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Disorder Moderate in Medical OPD Services Hospital", "Psychiatry", "Behavioral Health", "evidence-based supportive counseling, behavioral activation, and oral SSRI sertraline", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Generalized Anxiety Disorder with Chronic Worry and Somatic Tension", "Psychiatry", "Behavioral Health", "psychoeducation, cognitive behavioral techniques, and oral SSRI escitalopram", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Acute Panic Attack Presentation in Emergency Room of Mayo Hospital", "Psychiatry", "Behavioral Health", "calm verbal reassurance, breathing into paper bag, and short-term oral benzodiazepine", "UHS Lahore Clinical Guidelines", "https://www.uhs.edu.pk"),
    ("Informed Consent for Elective Inguinal Hernia Repair in Adult Male", "Ethics", "General Principles", "explaining surgical risks, mesh repair benefits, complications, and written consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Doctor-Patient Confidentiality with Employer Requesting Medical File", "Ethics", "General Principles", "strict maintenance of medical confidentiality and refusal to disclose without signed consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Medical Certification of Cause of Death MCCD Completion in Hospital", "Ethics", "General Principles", "recording immediate cause, antecedent cause, and underlying morbid cause of death accurately", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Breaking Bad News of Inoperable Malignancy SPIKES Protocol in Lahore", "Ethics", "General Principles", "applying SPIKES protocol setting, perception, invitation, knowledge, empathy, strategy", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Refusal of Chemotherapy by Competent Adult with Curable Lymphoma", "Ethics", "General Principles", "explaining consequences, exploring reasons for refusal, and respecting competent autonomy", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Reporting Suspected Child Physical Abuse in Pediatric Emergency", "Ethics", "General Principles", "ensuring immediate child safety, multi-specialty evaluation, and child protection referral", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Safe Water and Sanitation WASH Education for Enteric Fever Prevention", "Ethics", "General Principles", "community education on boiling drinking water, hand hygiene, and food sanitation", "National Health Services Guidelines", "https://nhsrc.gov.pk")
]

HAAD_DHA_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute ST-Elevation Myocardial Infarction in SSMC Abu Dhabi", "Medicine", "Cardiovascular", "immediate primary percutaneous coronary intervention PCI within 90 minutes of medical contact", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Stable Angina Pectoris Refractory to Beta-Blocker in Dubai Hospital", "Medicine", "Cardiovascular", "adding dihydropyridine calcium channel blocker amlodipine or long-acting nitrate", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Heart Failure with Preserved Ejection Fraction HFpEF in Tawam Hospital", "Medicine", "Cardiovascular", "SGLT2 inhibitor empagliflozin or dapagliflozin and loop diuretic titration for congestion", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Atrial Fibrillation Post-Cardioversion Anticoagulation Management", "Medicine", "Cardiovascular", "therapeutic oral anticoagulation with DOAC apixaban for at least four weeks post-procedure", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Hypertensive Emergency with Acute Aortic Dissection in Rashid Hospital", "Medicine", "Cardiovascular", "intravenous labetalol or esmolol targeting systolic BP 100 to 120 and heart rate below 60", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Severe Symptomatic Aortic Stenosis in 76-Year-Old in Cleveland Clinic Abu Dhabi", "Surgery", "Cardiovascular", "transcatheter aortic valve implantation TAVI after multidisciplinary heart team review", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Pericarditis Idiopathic Recurrent Episode in Abu Dhabi", "Medicine", "Cardiovascular", "oral NSAID ibuprofen combined with colchicine for six months or anti-IL-1 rilonacept", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Deep Vein Thrombosis Provoked Post-Travel in Dubai Resident", "Medicine", "Cardiovascular", "direct oral anticoagulant rivaroxaban or apixaban therapeutic course for three months", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Hypertrophic Cardiomyopathy with High Risk of Sudden Cardiac Death", "Medicine", "Cardiovascular", "primary prevention implantable cardioverter-defibrillator ICD placement", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Peripheral Arterial Disease with Claudication Distance 100 Meters", "Medicine", "Cardiovascular", "supervised exercise program, high-intensity statin atorvastatin, and daily aspirin", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 2. Respiratory - 10
    ("Severe Acute Asthma Attack in Adult in Rashid Hospital ED", "Medicine", "Respiratory", "frequent nebulized salbutamol and ipratropium, systemic oral prednisolone, and oxygenation", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("COPD Exacerbation with Acute Respiratory Acidosis in Dubai", "Medicine", "Respiratory", "controlled oxygen therapy, bronchodilators, and non-invasive positive pressure ventilation NIV", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Community-Acquired Pneumonia Severe CURB-65 Score 3 in SSMC", "Medicine", "Respiratory", "hospital admission and intravenous ceftriaxone combined with intravenous azithromycin", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Middle East Respiratory Syndrome MERS-CoV Suspected in Al Ain", "Microbiology", "Respiratory", "strict airborne infection isolation precautions, RT-PCR testing, and supportive intensive care", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Spontaneous Primary Pneumothorax Moderate Size in Young Expat", "Surgery", "Respiratory", "simple needle aspiration or small-bore chest tube thoracostomy insertion", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Pleural Effusion Exudative from Parapneumonic Process in Dubai Hospital", "Medicine", "Respiratory", "diagnostic thoracentesis with pleural fluid analysis and chest tube drainage if pH < 7.2", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Obstructive Sleep Apnea Severe in Obese UAE Resident with Hypersomnolence", "Medicine", "Respiratory", "polysomnography confirmation and auto-titrating continuous positive airway pressure CPAP", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Bronchiectasis with Pseudomonas Aeruginosa Sputum Colonization", "Microbiology", "Respiratory", "regular airway clearance physiotherapy and inhaled colistin or ciprofloxacin therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Idiopathic Pulmonary Fibrosis IPF Presentation in 67-Year-Old in Abu Dhabi", "Medicine", "Respiratory", "high-resolution CT confirming UIP pattern and oral antifibrotic pirfenidone or nintedanib", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Solitary Pulmonary Nodule Indeterminate Eight Millimeter Size on CT", "Medicine", "Respiratory", "high-resolution contrast-enhanced chest CT scan and multidisciplinary nodule review", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 3. Gastrointestinal - 10
    ("Metabolic Dysfunction-Associated Steatohepatitis MASH with Advanced Fibrosis", "Medicine", "Gastrointestinal", "structured lifestyle weight reduction 7 to 10%, GLP-1 receptor agonist, and resmetirom", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Bleeding Duodenal Ulcer Forrest Ia Active Arterial Jet in Dubai", "Surgery", "Gastrointestinal", "urgent endoscopic dual therapy hemoclipping and thermal coagulation plus high-dose IV omeprazole", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Ulcerative Colitis Acute Severe Presentation Truelove-Witts in SSMC", "Medicine", "Gastrointestinal", "intravenous hydrocortisone 100 mg four times daily and rescue infliximab if refractory on day 3", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Crohn Disease Ileal Inflammatory Phenotype in Young Adult in Abu Dhabi", "Medicine", "Gastrointestinal", "oral budesonide induction followed by maintenance with subcutaneous anti-TNF biologic", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Calculous Cholecystitis Moderate Grade in Dubai Hospital", "Surgery", "Gastrointestinal", "intravenous antibiotics, fluid resuscitation, and early laparoscopic cholecystectomy within 72 hours", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Acute Gallstone Pancreatitis with Cholangitis in Rashid Hospital", "Surgery", "Gastrointestinal", "urgent endoscopic retrograde cholangiopancreatography ERCP with sphincterotomy within 24 hours", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Chronic Hepatitis B High Viral Load HBeAg Positive in Expat Screening", "Microbiology", "Gastrointestinal", "long-term first-line oral antiviral therapy with tenofovir alafenamide or entecavir", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Cirrhosis with Spontaneous Bacterial Peritonitis SBP in Tawam Hospital", "Microbiology", "Gastrointestinal", "intravenous ceftriaxone 2g daily combined with intravenous albumin 1.5 g/kg on day 1", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Celiac Disease Presentation with Iron Deficiency Anemia in Young Female", "Immunology", "Gastrointestinal", "serum anti-tTG IgA confirmation, duodenal endoscopy biopsy, and strict gluten-free diet", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("National Colorectal Cancer Screening Colonoscopy at Age Forty in UAE", "Medicine", "Gastrointestinal", "screening colonoscopy every ten years starting at age 40 for average-risk individuals", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 4. Renal & Genitourinary - 10
    ("Diabetic Kidney Disease Stage 3 with Persistent Macroalbuminuria in UAE", "Medicine", "Renal", "SGLT2 inhibitor dapagliflozin, ACE inhibitor ramipril, and non-steroidal MRA finerenone", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Kidney Injury KDIGO Stage 2 from Pre-Renal Dehydration and NSAIDs", "Medicine", "Renal", "immediate cessation of nephrotoxic drugs, isotonic crystalloid rehydration, and monitoring", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Nephrotic Syndrome Adult Minimal Change Disease in Abu Dhabi", "Medicine", "Renal", "oral high-dose prednisolone 1 mg/kg daily for 8 to 16 weeks and loop diuretics for edema", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("IgA Nephropathy with Proteinuria Exceeding One Gram Daily in Dubai", "Medicine", "Renal", "optimized maximally tolerated RAS blockade and targeted oral budesonide formulation", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Ureteral Calculus Six Millimeter Obstructing Calculus with Renal Colic", "Medicine", "Renal", "oral NSAID analgesia, medical expulsive therapy tamsulosin, and outpatient urology follow-up", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Acute Pyelonephritis Uncomplicated in Non-Pregnant Female in SSMC", "Microbiology", "Renal", "oral ciprofloxacin or cefpodoxime for 7 to 10 days after urine culture collection", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Benign Prostatic Hyperplasia with Moderate LUTS and Large Prostate", "Surgery", "Renal", "combination therapy with alpha-1 blocker tamsulosin and 5-alpha reductase inhibitor finasteride", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Gross Hematuria Asymptomatic in Sixty-Year-Old Smoker in Dubai Hospital", "Surgery", "Renal", "urgent urology referral for diagnostic flexible cystoscopy and multiphasic CT urography", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Testicular Torsion Suspected in 15-Year-Old in Rashid Hospital ED", "Surgery", "Renal", "immediate emergency scrotal exploration and bilateral orchidopexy without delay for ultrasound", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Severe Hyperkalemia Potassium 6.9 with Peaked T Waves in Abu Dhabi ED", "Medicine", "Renal", "immediate intravenous calcium gluconate membrane stabilization followed by insulin-dextrose", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Uncontrolled HbA1c 9.4% with Obesity in Dubai", "Medicine", "Endocrine", "metformin combined with dual GIP/GLP-1 receptor agonist tirzepatide and lifestyle", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Diabetic Ketoacidosis DKA Moderate in Adult Type 1 Diabetic in SSMC", "Medicine", "Endocrine", "intravenous isotonic fluid resuscitation, continuous regular insulin infusion, and potassium repletion", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Hyperosmolar Hyperglycemic State HHS in Elderly Patient in Abu Dhabi", "Medicine", "Endocrine", "aggressive isotonic crystalloid rehydration, monitoring osmolality, and low-dose insulin", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Graves Disease Hyperthyroidism First Episode in Young Female in Dubai", "Medicine", "Endocrine", "oral methimazole antithyroid therapy combined with propranolol symptom control", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Primary Hypothyroidism Overt Presentation with TSH 22 in Tawam Hospital", "Medicine", "Endocrine", "oral levothyroxine replacement therapy 1.6 mcg/kg daily titrated to euthyroid TSH range", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Primary Hyperparathyroidism with Hypercalcemia and Nephrolithiasis", "Surgery", "Endocrine", "focused minimally invasive parathyroidectomy after sestamibi SPECT-CT localization", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Cushing Disease Pituitary ACTH-Secreting Adenoma in Cleveland Clinic", "Surgery", "Endocrine", "transsphenoidal surgical pituitary adenomectomy performed by experienced skull-base neurosurgeon", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Primary Adrenal Insufficiency Addison Disease Acute Presentation", "Medicine", "Endocrine", "immediate intravenous hydrocortisone 100 mg bolus, saline rehydration, and fludrocortisone maintenance", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Papillary Thyroid Carcinoma 1.6cm Nodule Bethesda VI in Dubai Hospital", "Surgery", "Endocrine", "total thyroidectomy or thyroid lobectomy followed by levothyroxine TSH suppression", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Severe Vitamin D Deficiency with Secondary Hyperparathyroidism in UAE", "Biochemistry", "Endocrine", "oral cholecalciferol 50,000 IU weekly for eight weeks followed by daily maintenance", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 6. Hematology - 10
    ("Beta Thalassemia Major Transfusion-Dependent in UAE Pediatric Clinic", "Genetics", "Hematology", "regular leukoreduced packed red blood cell transfusions and oral iron chelation deferasirox", "UAE National Thalassemia Guidelines", "https://mohap.gov.ae"),
    ("Sickle Cell Disease Vaso-Occlusive Pain Crisis in Adult in Dubai", "Medicine", "Hematology", "rapid parenteral opioid analgesia within 30 minutes, IV hydration, and hydroxyurea maintenance", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Iron Deficiency Anemia Severe Secondary to Menorrhagia in SSMC", "Medicine", "Hematology", "intravenous iron carboxymaltose infusion and gynecological evaluation", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Vitamin B12 Deficiency Macrocytic Anemia with Neuropathy in Abu Dhabi", "Medicine", "Hematology", "intramuscular cyanocobalamin replacement injections and sensory monitoring", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Immune Thrombocytopenia ITP Platelets 14,000 with Purpura in Dubai", "Medicine", "Hematology", "oral high-dose dexamethasone 40 mg daily for four days or oral prednisone 1 mg/kg", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Thrombotic Thrombocytopenic Purpura TTP Presentation in Tawam Hospital", "Medicine", "Hematology", "urgent therapeutic plasma exchange TPE combined with glucocorticoids and caplacizumab", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Chronic Myeloid Leukemia CML BCR-ABL1 Positive in Abu Dhabi", "Pharmacology", "Hematology", "second-generation tyrosine kinase inhibitor dasatinib or nilotinib oral therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Multiple Myeloma Newly Diagnosed Transplant-Eligible in Dubai", "Medicine", "Hematology", "quadruplet induction daratumumab, bortezomib, lenalidomide, dexamethasone D-VRd", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Heparin-Induced Thrombocytopenia HIT Type II Confirmation in SSMC", "Pharmacology", "Hematology", "immediate cessation of all heparin and initiation of non-heparin direct thrombin inhibitor argatroban", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Disseminated Intravascular Coagulation from Severe Sepsis in Rashid ICU", "Pathology", "Hematology", "aggressive antimicrobial treatment of sepsis and targeted platelet/cryoprecipitate transfusions", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within Three Hours of Onset in Rashid Hospital", "Medicine", "Nervous System", "intravenous alteplase or tenecteplase thrombolysis and endovascular thrombectomy assessment", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Subarachnoid Hemorrhage Fisher Grade 3 Hunt-Hess II in SSMC", "Surgery", "Nervous System", "digital subtraction angiography with endovascular coil embolization and oral nimodipine", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Status Epilepticus Refractory to First-Line Benzodiazepines in Dubai ED", "Medicine", "Nervous System", "intravenous levetiracetam 60 mg/kg or fosphenytoin loading and airway protection", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Parkinson Disease Initial Presentation with Motor Impairment in Abu Dhabi", "Medicine", "Nervous System", "levodopa-carbidopa therapy or dopamine agonist pramipexole and physiotherapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Multiple Sclerosis Relapsing-Remitting Acute Exacerbation in Tawam", "Medicine", "Nervous System", "intravenous high-dose methylprednisolone 1000 mg daily for three to five days", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Bacterial Meningitis Suspected in Adult in Dubai Hospital Emergency", "Microbiology", "Nervous System", "immediate intravenous ceftriaxone 2g twice daily combined with vancomycin and dexamethasone", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Temporal Arteritis Giant Cell Arteritis with Jaw Claudication in SSMC", "Medicine", "Nervous System", "immediate high-dose oral prednisolone 60 mg daily to prevent permanent visual loss", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Guillain-Barre Syndrome Acute Flaccid Quadriparesis in Cleveland Clinic", "Medicine", "Nervous System", "intravenous immunoglobulin IVIG 2 g/kg over five days and forced vital capacity monitoring", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Migraine Headache Episodic Moderate to Severe Attack in Primary Care", "Medicine", "Nervous System", "oral triptan sumatriptan 50 to 100 mg combined with naproxen sodium and antiemetic", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Normal Pressure Hydrocephalus with Hakim-Adams Triad in Senior in Dubai", "Surgery", "Nervous System", "high-volume lumbar puncture tap test followed by ventriculoperitoneal shunt placement", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Seropositive Polyarthritis in Dubai", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug oral methotrexate with folic acid bridge", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Systemic Lupus Erythematosus SLE with Active Lupus Nephritis in SSMC", "Medicine", "Renal", "intravenous pulse methylprednisolone combined with mycophenolate mofetil induction", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Ankylosing Spondylitis HLA-B27 Positive Axial Presentation in Abu Dhabi", "Medicine", "Musculoskeletal", "continuous oral NSAID therapy, physical therapy, and anti-TNF biologic if inadequate response", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Gout Flare First MTP Joint Podagra in Dubai Resident", "Medicine", "Musculoskeletal", "oral NSAID or low-dose colchicine and postponing urate-lowering medication changes", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Septic Arthritis Native Knee Joint in Emergency Department Tawam", "Microbiology", "Musculoskeletal", "immediate arthrocentesis with synovial fluid analysis and targeted intravenous vancomycin/ceftriaxone", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Severe Osteoporosis with T-score Minus 3.3 and Vertebral Compression", "Medicine", "Musculoskeletal", "bone anabolic subcutaneous teriparatide or romosozumab followed by antiresorptive therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Psoriasis Vulgaris Moderate to Severe Plaque Disease in Abu Dhabi", "Medicine", "Dermatology", "IL-17 inhibitor secukinumab or IL-23 inhibitor guselkumab targeted biologic therapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Atopic Dermatitis Moderate to Severe Refractory to Topical Steroids", "Medicine", "Dermatology", "subcutaneous dupilumab IL-4/IL-13 receptor antagonist and liberal ceramide emollients", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Stevens-Johnson Syndrome SJS from Allopurinol in Rashid Burn Unit", "Medicine", "Dermatology", "immediate cessation of offending drug, transfer to burn ICU, and supportive barrier care", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Malignant Melanoma Breslow Depth 2.0mm Ulcerated in Dubai Hospital", "Surgery", "Dermatology", "wide local excision with two-centimeter margins and sentinel lymph node biopsy", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 9. Pediatrics & Obstetrics - 10
    ("Gestational Diabetes Mellitus GDM Diagnosed at 26 Weeks in Latifa Hospital", "Obstetrics", "Pregnancy", "nutritional medical counseling, home glucose monitoring, and insulin if fasting > 95 mg/dL", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Preeclampsia with Severe Features at 34 Weeks Gestation in Abu Dhabi", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, blood pressure control with labetalol, and delivery", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Ectopic Pregnancy Unruptured Hemodynamically Stable in SSMC", "Obstetrics", "Pregnancy", "transvaginal ultrasound confirmation and single-dose intramuscular methotrexate protocol", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Postpartum Hemorrhage Primary Secondary to Uterine Atony in Dubai", "Obstetrics", "Pregnancy", "uterine massage, intravenous oxytocin infusion, carboprost/misoprostol, and balloon tamponade", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Neonatal Respiratory Distress Syndrome RDS in Preterm Infant in Latifa", "Pediatrics", "Respiratory", "early nasal CPAP, endotracheal natural surfactant administration, and thermal support", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Neonatal Jaundice within First 24 Hours of Life in Tawam Hospital", "Pediatrics", "Gastrointestinal", "urgent total and direct serum bilirubin measurement, blood group Coombs test, and phototherapy", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Acute Viral Croup Mild to Moderate in Two-Year-Old in Rashid ED", "Pediatrics", "Respiratory", "single dose of oral dexamethasone 0.15 mg/kg or 0.6 mg/kg and calm parent reassurance", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Febrile Neutropenia in Pediatric Oncology Patient in Tawam Hospital", "Pediatrics", "Hematology", "immediate intravenous broad-spectrum anti-pseudomonal beta-lactam cefepime within 30 minutes", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Kawasaki Disease Diagnostic Criteria at Day Six of Fever in SSMC", "Pediatrics", "Cardiovascular", "single high-dose intravenous immunoglobulin IVIG 2 g/kg and high-dose oral aspirin", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Type 1 Diabetes Mellitus New Onset in 8-Year-Old Child in Dubai", "Pediatrics", "Endocrine", "multiple daily insulin injections or insulin pump therapy, diabetic education, and CGM", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Disorder Severe in Outpatient Clinic Abu Dhabi", "Psychiatry", "Behavioral Health", "evidence-based cognitive behavioral therapy CBT combined with oral SSRI escitalopram", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Bipolar I Disorder Acute Manic Episode in Dubai Hospital", "Psychiatry", "Behavioral Health", "oral mood stabilizer lithium or valproate combined with oral atypical antipsychotic", "DHA Clinical Practice Guidelines", "https://www.dha.gov.ae"),
    ("Generalized Anxiety Disorder Moderate Impairing Daily Functioning in UAE", "Psychiatry", "Behavioral Health", "psychoeducation, cognitive behavioral therapy, and oral selective serotonin reuptake inhibitor", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Schizophrenia First Episode Psychosis in Young Adult in SSMC", "Psychiatry", "Behavioral Health", "oral atypical antipsychotic risperidone or aripiprazole and psychosocial rehabilitation", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Informed Consent for Major Elective Bariatric Surgery in UAE", "Ethics", "General Principles", "multidisciplinary comprehensive counseling on dietary changes, surgical risks, and written consent", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Patient Medical Confidentiality and Refusal of Disclosure to Employer", "Ethics", "General Principles", "strict maintenance of medical confidentiality and refusal to disclose without signed consent", "UAE Federal Medical Liability Law", "https://mohap.gov.ae"),
    ("End-of-Life DNR Directives under UAE Federal Law and Medical Regulations", "Ethics", "General Principles", "multidisciplinary documentation of terminal futility in accordance with UAE national DNR legislation", "UAE Federal Medical Liability Law", "https://mohap.gov.ae"),
    ("Premarital Screening Mandatory in UAE Sickle Cell and Thalassemia", "Genetics", "General Principles", "genetic counseling regarding reproductive risks, partner screening, and preimplantation options", "UAE MOHAP National Guidelines", "https://mohap.gov.ae"),
    ("Cardiovascular Primary Prevention National Screening Program in UAE", "Medicine", "General Principles", "screening blood pressure, fasting lipids, HbA1c, and calculation of atherosclerotic risk", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae"),
    ("Medical Certification of Cause of Death Completion under UAE Regulations", "Ethics", "General Principles", "accurately recording immediate cause, antecedent cause, and underlying cause of death", "DOH Abu Dhabi Clinical Guidelines", "https://www.doh.gov.ae")
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
    validate_topics(UHS_MBBS_TOPICS, "UHS MBBS")
    validate_topics(HAAD_DHA_TOPICS, "HAAD / DHA")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega81_topics_a.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 81 Topics Part A\n\n")
        f.write(f"UHS_MBBS_TOPICS = {repr(UHS_MBBS_TOPICS)}\n\n")
        f.write(f"HAAD_DHA_TOPICS = {repr(HAAD_DHA_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
