"""
Topic Generator for Mega-Batch 80 - Part B
Tracks:
- Batch 388: 100 NLE (Pakistan) topics (2,800 -> 2,900)
- Batch 389: 100 MRCEM (Emergency) topics (2,800 -> 2,900)
- Batch 390: 100 SMLE (Saudi Arabia) topics (2,800 -> 2,900)
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

NLE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Essential Hypertension Stage 1 Initial Presentation in Basic Health Unit", "Medicine", "Cardiovascular", "lifestyle dietary sodium restriction, weight loss, and low-dose amlodipine or enalapril", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Stable Angina Pectoris in Primary Health Care Clinic Punjab", "Medicine", "Cardiovascular", "sublingual nitroglycerin as needed, daily low-dose aspirin, and oral atenolol or bisoprolol", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Suspected Acute Myocardial Infarction in Rural Tehsil Headquarter Hospital", "Medicine", "Cardiovascular", "immediate chewable aspirin 300 mg, sublingual nitrates, oxygen, and emergency ambulance transfer", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Heart Failure with Bilateral Pedal Edema in District Hospital", "Medicine", "Cardiovascular", "oral furosemide diuretic titration, ACE inhibitor enalapril, and salt restriction", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Rheumatic Fever Secondary Prevention Following Initial Attack", "Pharmacology", "Cardiovascular", "intramuscular benzathine penicillin G every three to four weeks for at least five years", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Venous Insufficiency with Stasis Dermatitis and Ankle Ulcer", "Medicine", "Cardiovascular", "graduated compression stockings, leg elevation, and regular saline wound dressings", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Varicose Veins Uncomplicated in Multiparous Female in Sindh", "Surgery", "Cardiovascular", "conservative compression therapy and referral for ultrasound-guided foam sclerotherapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Atrial Fibrillation Rate Control in District Headquarter Hospital", "Medicine", "Cardiovascular", "oral beta-blocker metoprolol or non-dihydropyridine CCB diltiazem for rate control", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Postural Hypotension in Elderly Diabetic Patient in Community Clinic", "Medicine", "Cardiovascular", "reviewing antihypertensive medications, adequate fluid intake, and gradual position changes", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Superficial Thrombophlebitis of Long Saphenous Vein Below Knee", "Medicine", "Cardiovascular", "warm compresses, oral NSAIDs for pain, and walking without bed rest", "PMDC National Guidelines", "https://pmdc.pk"),

    # 2. Respiratory - 10
    ("Pulmonary Tuberculosis Drug-Susceptible in Rural Punjab DOTS Center", "Microbiology", "Respiratory", "two months of four-drug HRZE followed by four months of two-drug HR under direct observation", "National TB Control Program Pakistan", "https://ntp.gov.pk"),
    ("Bronchial Asthma Moderate Persistent in Outpatient Tehsil Clinic", "Medicine", "Respiratory", "daily low-dose inhaled corticosteroid budesonide combined with formoterol MART therapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Bronchitis Viral Presentation in Adult in Primary Care", "Medicine", "Respiratory", "supportive symptom management with oral fluids, paracetamol, and avoiding unindicated antibiotics", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Community-Acquired Pneumonia Mild in Ambulatory Adult in KP", "Microbiology", "Respiratory", "oral amoxicillin 500 mg three times daily for five days or oral clarithromycin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Laryngitis with Hoarseness Following Viral Upper Respiratory Infection", "Medicine", "Respiratory", "complete voice rest, steam inhalation, hydration, and reassurance without antibiotics", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Bronchitis in Heavy Hookah Smoker in Rural Clinic", "Medicine", "Respiratory", "smoking cessation counseling, inhaled salbutamol bronchodilator, and annual influenza vaccination", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Allergic Rhinitis Seasonal with Sneezing and Clear Rhinorrhea", "Medicine", "Respiratory", "intranasal corticosteroid spray fluticasone daily and oral non-sedating antihistamine", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Sinusitis Bacterial Mild Presenting After Viral Cold", "Microbiology", "Respiratory", "nasal saline irrigation, intranasal corticosteroid, and oral amoxicillin if symptoms exceed ten days", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Tonsillitis Acute Streptococcal with Centor Score 4", "Microbiology", "Respiratory", "oral phenoxymethylpenicillin penicillin V for ten days or oral azithromycin if allergic", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Foreign Body Sensation in Throat Following Fish Ingestion", "Surgery", "Respiratory", "careful oropharyngeal indirect laryngoscopic examination and emergency ENT referral if impacted", "PMDC National Guidelines", "https://pmdc.pk"),

    # 3. Gastrointestinal - 10
    ("Acute Gastroenteritis with Mild Dehydration in Adult in Sindh", "Medicine", "Gastrointestinal", "oral rehydration salts ORS solution, zinc supplementation, and light home diet", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Typhoid Fever Enteric Presentation in Tehsil Hospital", "Microbiology", "Gastrointestinal", "blood cultures followed by oral cefixime or oral azithromycin for 10 to 14 days", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Amoebic Dysentery with Trophozoites in Stool Microscopy", "Microbiology", "Gastrointestinal", "oral metronidazole 400 mg three times daily for five to seven days and oral rehydration", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Giardiasis with Chronic Malabsorptive Diarrhea in Child", "Microbiology", "Gastrointestinal", "single-dose oral tinidazole 50 mg/kg or metronidazole course for five days", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Gastroesophageal Reflux Disease Mild in Outpatient Clinic", "Medicine", "Gastrointestinal", "lifestyle dietary modification, weight loss, and oral omeprazole 20 mg once daily", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Duodenal Ulcer Helicobacter Pylori Positive in District Hospital", "Microbiology", "Gastrointestinal", "14-day triple eradication therapy PPI omeprazole, amoxicillin, and clarithromycin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Viral Hepatitis A Uncomplicated in School-Age Child", "Microbiology", "Gastrointestinal", "supportive outpatient care, adequate caloric nutrition, hydration, and hand hygiene counseling", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Hepatitis B Chronic Asymptomatic Surface Antigen Positive Carrier", "Microbiology", "Gastrointestinal", "baseline liver function tests, viral DNA quantification, and counseling on transmission routes", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Hepatitis C Seropositive Anti-HCV Screening in Primary Care", "Microbiology", "Gastrointestinal", "confirmatory HCV RNA PCR testing and direct-acting antiviral DAA therapy under national program", "National Hepatitis Elimination Program Pakistan", "https://nhsrc.gov.pk"),
    ("Irritable Bowel Syndrome Diarrhea-Predominant in Young Female", "Medicine", "Gastrointestinal", "dietary low-FODMAP counseling, lifestyle stress reduction, and oral loperamide PRN", "PMDC National Guidelines", "https://pmdc.pk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Cystitis Uncomplicated in Non-Pregnant Adult Female in THQ", "Microbiology", "Renal", "oral ciprofloxacin 250 mg twice daily for three days or oral fosfomycin single dose", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Pyelonephritis Mild Managed in Rural Health Centre", "Microbiology", "Renal", "oral ciprofloxacin or intramuscular ceftriaxone dose followed by oral antibiotic course", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Asymptomatic Bacteriuria in Pregnant Female in Antenatal Clinic", "Microbiology", "Pregnancy", "targeted oral cephalexin or amoxicillin-clavulanate for 5 to 7 days to prevent pyelonephritis", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Ureteral Calculus Four Millimeter Distal Stone with Colicky Pain", "Medicine", "Renal", "oral NSAID diclofenac analgesia, oral hydration, and outpatient conservative observation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Benign Prostatic Hyperplasia Mild LUTS in Senior Male", "Medicine", "Renal", "lifestyle fluid management, avoiding nighttime diuretics, and oral alpha-blocker tamsulosin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Scrotal Pain Epididymo-Orchitis in Sexually Active Male", "Microbiology", "Renal", "intramuscular ceftriaxone single dose plus oral doxycycline for 14 days and scrotal support", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Microscopic Hematuria Asymptomatic Isolated on Routine Urine Dipstick", "Medicine", "Renal", "repeat urine analysis, exclusion of UTI and menstruation, and renal ultrasound if persistent", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Chronic Kidney Disease Stage 3 Diagnosed on Serum Creatinine in DHQ", "Medicine", "Renal", "blood pressure optimization with ACE inhibitor enalapril and dietary protein moderation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Nocturnal Enuresis Primary Monosymptomatic in 7-Year-Old Child", "Pediatrics", "Renal", "parental reassurance, fluid restriction before bedtime, reward charts, and enuresis alarm", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Hydrocele Primary Vaginal in Adult Male in Outpatient Clinic", "Surgery", "Renal", "transillumination confirmation and elective surgical hydrocelectomy Jaboulay/Lord repair", "PMDC National Guidelines", "https://pmdc.pk"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Newly Diagnosed in Rural Punjab Primary Care", "Medicine", "Endocrine", "lifestyle exercise, medical nutrition therapy, and starting oral metformin 500 mg daily", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Type 2 Diabetes Inadequately Controlled HbA1c 8.6% on Metformin", "Medicine", "Endocrine", "adding second-line oral sulfonylurea glimepiride or DPP-4 inhibitor vildagliptin", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Diabetic Foot Ulcer Superficial Wagner Grade 1 in Outpatient Clinic", "Surgery", "Dermatology", "wound offloading, sharp debridement, topical antiseptics, and broad-spectrum antibiotics", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Primary Hypothyroidism Overt Presentation in Female in KP", "Medicine", "Endocrine", "daily morning oral levothyroxine 50 to 100 mcg taken on empty stomach with water", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Simple Diffuse Endemic Goitre in Adolescent Female from Northern Areas", "Medicine", "Endocrine", "ensuring iodized salt consumption and adequate dietary iodine supplementation", "National Nutrition Survey Pakistan", "https://nhsrc.gov.pk"),
    ("Hypoglycemia Episode in Known Diabetic on Glibenclamide", "Medicine", "Endocrine", "immediate oral simple carbohydrates glucose water and reviewing medication dosages", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Obesity Class I with Increased Waist Circumference in Urban Practice", "Medicine", "Endocrine", "caloric restriction, 150 minutes of weekly moderate aerobic exercise, and behavioral therapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Cushingoid Facies from Unregulated Quack Corticosteroid Formulation", "Pharmacology", "Endocrine", "gradual tapering of exogenous steroid to prevent adrenal crisis and patient education", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Vitamin D Deficiency Symptomatic Generalized Body Aches in Multan", "Biochemistry", "Endocrine", "oral cholecalciferol 200,000 IU single dose or 50,000 IU weekly for four weeks", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Polycystic Ovary Syndrome PCOS with Hirsutism and Oligomenorrhea", "Medicine", "Endocrine", "weight reduction, combined oral contraceptive pills, and oral metformin for insulin resistance", "PMDC National Guidelines", "https://pmdc.pk"),

    # 6. Hematology - 10
    ("Iron Deficiency Anemia Moderate in Multiparous Female in Sindh", "Medicine", "Hematology", "oral ferrous sulfate 200 mg daily along with vitamin C and dietary iron counseling", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Beta Thalassemia Minor Screening in Pre-Marital Couple in Punjab", "Genetics", "Hematology", "hemoglobin electrophoresis showing HbA2 > 3.5% and genetic counseling", "National Thalassemia Prevention Programme Pakistan", "https://nhsrc.gov.pk"),
    ("Malaria Plasmodium Vivax Uncomplicated in Balochistan Clinic", "Microbiology", "Hematology", "oral chloroquine course for three days followed by 14 days of primaquine for radical cure", "National Malaria Control Program Pakistan", "https://nhsrc.gov.pk"),
    ("Falciparum Malaria Uncomplicated in District Thatta Sindh", "Microbiology", "Hematology", "oral artemisinin combination therapy ACT artemether-lumefantrine for three days", "National Malaria Control Program Pakistan", "https://nhsrc.gov.pk"),
    ("Dengue Fever Classic Febrile Illness during Post-Monsoon Season", "Microbiology", "Hematology", "paracetamol analgesia, oral fluid therapy, and avoiding aspirin/NSAIDs to prevent bleeding", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Dengue with Warning Signs Abdominal Pain and Persistent Vomiting", "Microbiology", "Hematology", "admission to dengue HDU for protocolized intravenous isotonic crystalloid titration", "National Dengue Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Megaloblastic Anemia Macrocytic Presentation in Strict Vegetarian", "Medicine", "Hematology", "intramuscular vitamin B12 injections combined with oral folic acid supplementation", "PMDC National Guidelines", "https://pmdc.pk"),
    ("G6PD Deficiency Hemolytic Episode Following Fava Bean Ingestion", "Genetics", "Hematology", "supportive hydration, stopping oxidative triggers, and blood transfusion if severe anemia", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Idiopathic Thrombocytopenic Purpura ITP Mild in Child in Primary Care", "Pediatrics", "Hematology", "reassurance, observation without steroids, and avoiding trauma/contact sports", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Blood Transfusion Reaction Febrile Non-Hemolytic in Ward", "Medicine", "Hematology", "stopping transfusion immediately, maintaining IV access, and administering paracetamol", "PMDC National Guidelines", "https://pmdc.pk"),

    # 7. Neurology - 10
    ("Acute Tension-Type Headache in Stressed University Student", "Medicine", "Nervous System", "reassurance, stress management counseling, and oral paracetamol or ibuprofen PRN", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Migraine Headache Moderate Acute Attack in Outpatient Clinic", "Medicine", "Nervous System", "oral NSAID naproxen or sumatriptan combined with antiemetic metoclopramide", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Bell Palsy Idiopathic Peripheral Facial Palsy at Day Two", "Medicine", "Nervous System", "oral prednisolone 50 mg daily for ten days, artificial tears, and eye patching at night", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Febrile Convulsion Simple in Two-Year-Old Child in BHU", "Pediatrics", "Nervous System", "identifying fever source, parental reassurance, antipyretic paracetamol, and sponge bathing", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Generalized Tonic-Clonic Seizure First Episode in Rural Area", "Medicine", "Nervous System", "ensuring airway in recovery position, avoiding object insertion in mouth, and referral", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Ischemic Stroke Presentation at Rural Tehsil Headquarter", "Medicine", "Nervous System", "emergency oxygenation, avoiding acute BP lowering, chewable aspirin, and transfer", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Benign Paroxysmal Positional Vertigo BPPV with Positive Dix-Hallpike", "Medicine", "Nervous System", "performing bedside Epley canalith repositioning maneuver with rapid symptom relief", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Sciatica Radicular Pain from Lumbar Strain in Manual Laborer", "Medicine", "Nervous System", "short period of relative rest, oral NSAIDs, gentle mobility, and physical therapy", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Carpal Tunnel Syndrome Mild in Multiparous Housewife in Lahore", "Medicine", "Nervous System", "neutral wrist splinting at night, ergonomic counseling, and local steroid injection", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Trigeminal Neuralgia Classic Presentation in Elderly Female", "Medicine", "Nervous System", "oral carbamazepine 100 mg twice daily titrated to control sharp lancinating pain", "PMDC National Guidelines", "https://pmdc.pk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Scabies Infestation in School-Going Children in Congested Household", "Microbiology", "Dermatology", "topical 5% permethrin cream applied neck to toes and treating all household contacts", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Tinea Pedis Athlete Foot with Interdigital Maceration and Itching", "Microbiology", "Dermatology", "topical terbinafine or clotrimazole cream twice daily for two to four weeks", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Impetigo Contagiosa Honey-Colored Crusted Lesions on Child Face", "Microbiology", "Dermatology", "gentle crust removal with soap and water and topical fusidic acid or mupirocin ointment", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Cutaneous Leishmaniasis Oriental Sore in Rural Balochistan", "Microbiology", "Dermatology", "intralesional or intramuscular meglumine antimoniate sodium stibogluconate injections", "National Leishmaniasis Control Guidelines Pakistan", "https://nhsrc.gov.pk"),
    ("Acne Vulgaris Moderate Papulopustular in Adolescent Male", "Medicine", "Dermatology", "topical benzoyl peroxide combined with topical retinoid and oral doxycycline", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Atopic Eczema Flexural in Two-Year-Old Child in Primary Clinic", "Medicine", "Dermatology", "liberal daily application of white soft paraffin emollients and 1% hydrocortisone cream", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Sprain of Lateral Ankle Inversion Injury RICE Protocol", "Surgery", "Musculoskeletal", "rest, ice application, elastic compression wrap, elevation RICE, and oral analgesia", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Closed Colles Fracture Distal Radius Following Fall on Outstretched Hand", "Surgery", "Musculoskeletal", "closed manipulation under hematoma block and below-elbow plaster of Paris cast", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Osteoarthritis of the Knee Mild to Moderate in Elderly Female", "Medicine", "Musculoskeletal", "quadriceps strengthening exercises, weight reduction, and oral paracetamol or topical NSAIDs", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Plantar Fasciitis Heel Pain Worse with First Steps in Morning", "Medicine", "Musculoskeletal", "plantar fascia stretching exercises, cushioned footwear, and short-term oral NSAIDs", "PMDC National Guidelines", "https://pmdc.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Routine Antenatal Care First Trimester Visit in Rural Punjab", "Obstetrics", "Pregnancy", "folic acid 400 mcg daily, blood group screening, hemoglobin, and baseline BP check", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Tetanus Toxoid TT Vaccination Schedule for Pregnant Female in BHU", "Obstetrics", "Pregnancy", "two doses of tetanus toxoid administered at least four weeks apart during pregnancy", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Iron and Folic Acid Supplementation in Second and Third Trimester", "Obstetrics", "Pregnancy", "daily oral elemental iron 60 mg and folic acid 400 mcg throughout pregnancy", "National Health Services Guidelines", "https://nhsrc.gov.pk"),
    ("Postpartum Hemorrhage Prevention Active Management of Third Stage", "Obstetrics", "Pregnancy", "intramuscular oxytocin 10 units immediately after delivery of anterior shoulder/baby", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Preeclampsia Screening Blood Pressure 145/95 and Proteinuria in RHC", "Obstetrics", "Pregnancy", "urgent referral to THQ/DHQ hospital for labetalol, magnesium sulfate, and monitoring", "PMDC National Guidelines", "https://pmdc.pk"),
    ("EPI Vaccination BCG and Polio Zero Dose at Birth in Pakistan", "Pediatrics", "General Principles", "intradermal BCG vaccine right deltoid and bivalent oral polio drops OPV at birth", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("EPI Vaccination Pentavalent First Dose at Six Weeks of Age", "Pediatrics", "General Principles", "intramuscular pentavalent DTP-HepB-Hib, pneumococcal PCV, and oral rotavirus drops", "National Expanded Programme on Immunization", "https://epi.gov.pk"),
    ("Measles Infection with Koplik Spots and Maculopapular Rash in Infant", "Pediatrics", "General Principles", "two high doses of oral vitamin A on consecutive days and supportive hydration", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Neonatal Jaundice Physiological on Day Three of Life in Primary Care", "Pediatrics", "Gastrointestinal", "reassurance, promoting frequent exclusive breastfeeding, and monitoring for danger signs", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Exclusive Breastfeeding Counseling for Primiparous Mother in BHU", "Pediatrics", "General Principles", "exclusive breastfeeding on demand for the first six months without water or supplements", "National Infant and Young Child Feeding Strategy", "https://nhsrc.gov.pk"),

    # 10. Psychiatry, Ethics & Forensic Medicine - 10
    ("Major Depressive Disorder Moderate in Primary Health Care KP", "Psychiatry", "Behavioral Health", "supportive counseling, behavioral activation, and oral SSRI fluoxetine 20 mg daily", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Generalized Anxiety Disorder with Chronic Palpitations and Worry", "Psychiatry", "Behavioral Health", "reassurance, deep breathing relaxation exercises, and oral SSRI sertraline", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Acute Panic Attack Presentation in Tehsil Hospital Emergency", "Psychiatry", "Behavioral Health", "calm verbal reassurance, breathing into cupped hands, and short-term alprazolam PRN", "PMDC National Guidelines", "https://pmdc.pk"),
    ("Informed Consent for Minor Surgical Wound Suturing in Adult", "Ethics", "General Principles", "explaining procedure, local anesthetic risks, and obtaining voluntary verbal or written consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Doctor-Patient Confidentiality with Relatives Inquiring Diagnosis", "Ethics", "General Principles", "maintaining patient privacy and refusing disclosure without explicit patient consent", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Medical Certification of Cause of Death MCCD Completion in THQ", "Ethics", "General Principles", "accurately recording immediate, antecedent, and underlying morbid cause of death", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Medico-Legal Examination of Hurt Physical Assault Injury in BHU", "Ethics", "General Principles", "detailed examination, accurate measurement, documenting injury classification under Qisas and Diyat", "PMDC Forensic Medicine Guidelines", "https://pmdc.pk"),
    ("Prescription Writing Standards and Avoidance of Polypharmacy", "Ethics", "General Principles", "writing legible generic names, clear dosages, duration, and patient counseling", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Reporting Suspected Domestic Abuse in Rural Primary Clinic", "Ethics", "General Principles", "ensuring immediate patient safety, confidential care, and referral to social welfare", "PMDC Code of Ethics", "https://pmdc.pk"),
    ("Safe Drinking Water Boiling Education for Cholera Prevention", "Ethics", "General Principles", "educating community on rolling boiling of drinking water for at least five minutes", "National Health Services Guidelines", "https://nhsrc.gov.pk")
]

MRCEM_TOPICS = [
    # 1. Resuscitation & Shock - 10
    ("Cardiac Arrest with Ventricular Fibrillation Shockable Algorithm in ED", "Medicine", "Cardiovascular", "immediate unsynchronized electrical defibrillation shock 200J followed by CPR for two minutes", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Cardiac Arrest with Asystole Non-Shockable Rhythm Management", "Medicine", "Cardiovascular", "immediate high-quality CPR 30 to 2, IV adrenaline 1mg every 3 to 5 minutes, and reversible causes", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Septic Shock Refractory to 30 ml/kg Crystalloids in Resus Bay", "Medicine", "Cardiovascular", "early initiation of norepinephrine peripheral/central infusion targeting MAP >= 65 mm Hg", "Surviving Sepsis Campaign Guidelines", "https://rcem.ac.uk"),
    ("Anaphylactic Shock with Stridor and Hypotension Post-Antibiotic", "Medicine", "Cardiovascular", "immediate intramuscular adrenaline 0.5 mg 1 in 1000 in anterolateral thigh and oxygen", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Hypovolemic Hemorrhagic Shock Grade IV from Major Pelvic Trauma", "Surgery", "Cardiovascular", "activating major hemorrhage protocol MHP, pelvic binder application, and tranexamic acid 1g IV", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Cardiac Tamponade Traumatic with Beck Triad in Emergency Room", "Surgery", "Cardiovascular", "immediate emergency resuscitative thoracotomy or subxiphoid ultrasound-guided pericardiocentesis", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Cardiogenic Shock from Acute Massive Anterior Myocardial Infarction", "Medicine", "Cardiovascular", "urgent emergency coronary angiography, inotropic support with dobutamine, and mechanical support", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Neurogenic Shock Following Acute Cervical Spinal Cord Injury", "Medicine", "Cardiovascular", "intravenous fluid resuscitation combined with vasopressor norepinephrine to maintain perfusion", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Massive Pulmonary Embolism with Cardiac Arrest or Sustained Hypotension", "Medicine", "Cardiovascular", "immediate intravenous thrombolysis with tenecteplase or alteplase 50 mg bolus", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Hyperkalemic Cardiac Arrest Potassium 8.2 with Sine Wave Rhythm", "Medicine", "Renal", "immediate intravenous calcium chloride 10% 10ml bolus, insulin-dextrose, and sodium bicarbonate", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),

    # 2. Acute Airway & Respiratory - 10
    ("Acute Severe Asthma Life-Threatening with Silent Chest and Exhaustion", "Medicine", "Respiratory", "back-to-back salbutamol and ipratropium, IV magnesium sulfate 2g, and rapid sequence intubation", "BTS/SIGN Asthma Guidelines", "https://rcem.ac.uk"),
    ("Tension Pneumothorax Traumatic with Deviated Trachea in Resus", "Surgery", "Respiratory", "immediate emergency needle thoracostomy in 2nd or 5th intercostal space followed by chest drain", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Acute Epiglottitis with Stridor and Drooling in Emergency Department", "Surgery", "Respiratory", "immediate senior anesthetic and ENT presence, avoiding oral exam, and inhalational induction in OR", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Acute Pulmonary Edema Flash Hypertensive with SpO2 82%", "Medicine", "Cardiovascular", "high-flow CPAP non-invasive ventilation, IV glyceryl trinitrate infusion, and IV furosemide", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Severe Foreign Body Airway Obstruction Complete in Adult", "Medicine", "Respiratory", "alternating five back blows and five abdominal thrusts Heimlich maneuver until cleared", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Smoke Inhalation Injury with Facial Burns and Singed Nasal Hairs", "Surgery", "Respiratory", "early prophylactic endotracheal intubation before progressive laryngeal edema obstructs airway", "RCEM Burns Guidelines", "https://rcem.ac.uk"),
    ("Acute COPD Exacerbation with Decompensated Hypercapnic Acidosis", "Medicine", "Respiratory", "controlled oxygen targeting 88-92%, bronchodilators, and non-invasive bilevel ventilation NIV", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Massive Hemoptysis Exceeding 200ml per Hour in Resuscitation Bay", "Surgery", "Respiratory", "positioning bleeding side down, endotracheal intubation with large tube, and urgent bronchial angiography", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Open Pneumothorax Sucking Chest Wound from Penetrating Injury", "Surgery", "Respiratory", "three-sided occlusive flutter-valve dressing followed by chest tube placement at separate site", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Massive Subcutaneous Emphysema Following Tracheal Rupture", "Surgery", "Respiratory", "urgent bronchoscopic airway evaluation, awake fiberoptic intubation, and cardiothoracic consultation", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),

    # 3. Acute Trauma - 10
    ("Traumatic Brain Injury TBI Severe GCS 6 with Blown Right Pupil", "Surgery", "Nervous System", "rapid sequence intubation, neuroprotection, IV hypertonic 3% saline or mannitol, and emergency CT", "RCEM Head Injury Guidelines", "https://rcem.ac.uk"),
    ("Unstable Pelvic Ring Fracture with Severe Retroperitoneal Hemorrhage", "Surgery", "Cardiovascular", "immediate application of commercial pelvic circumferential compression device and pelvic angioembolization", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Acute Traumatic Hemothorax Draining 1600ml Blood Immediately", "Surgery", "Respiratory", "activating major hemorrhage protocol and emergency surgical thoracotomy", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Penetrating Abdominal Trauma with Omental Evisceration and Shock", "Surgery", "Gastrointestinal", "immediate broad-spectrum IV antibiotics, moist sterile dressings, and emergency exploratory laparotomy", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Acute Traumatic Compartment Syndrome of the Lower Leg", "Surgery", "Musculoskeletal", "urgent emergent four-compartment fasciotomy within hours to prevent ischemic myonecrosis", "RCEM Orthopedic Guidelines", "https://rcem.ac.uk"),
    ("Complete Traumatic Amputation of Hand at Wrist Level", "Surgery", "Musculoskeletal", "direct pressure bleeding control, wrapping amputated part in saline gauze in ice-water bag, and plastics", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Major Burn Injury 40% TBSA Second and Third Degree in Adult", "Surgery", "Dermatology", "Parkland formula fluid resuscitation 4ml x kg x %TBSA using warm Hartmann solution and analgesia", "RCEM Burns Guidelines", "https://rcem.ac.uk"),
    ("Traumatic Asphyxia with Facial Petechiae and Conjunctival Hemorrhages", "Medicine", "Cardiovascular", "high-flow oxygen, airway protection, head-up positioning, and excluding occult thoracic injury", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Near-Hanging Presentation with Cervical Spine Instability", "Surgery", "Nervous System", "in-line cervical spinal stabilization, airway securement, and CT angiography of neck vessels", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),
    ("Crush Syndrome Following Prolonged Entrapment with Dark Urine", "Medicine", "Renal", "aggressive intravenous isotonic saline volume loading 1 to 1.5 L/hr before extrication", "RCEM Trauma Guidelines", "https://rcem.ac.uk"),

    # 4. Acute Toxicology & Environmental - 10
    ("Paracetamol Acetaminophen Overdose Acute Ingestion at 8 Hours", "Pharmacology", "Gastrointestinal", "immediate intravenous N-acetylcysteine NAC infusion protocol based on nomogram", "TOXBASE UK National Poisons Information Service", "https://www.toxbase.org"),
    ("Opioid Overdose Heroin Ingestion with Respiratory Depression RR 4", "Pharmacology", "Nervous System", "bag-valve-mask ventilatory support and titrated intravenous or intramuscular naloxone", "RCEM Toxicology Guidelines", "https://rcem.ac.uk"),
    ("Tricyclic Antidepressant TCA Toxicity with QRS Widening 140ms", "Pharmacology", "Cardiovascular", "immediate intravenous 8.4% sodium bicarbonate boluses 1 to 2 mmol/kg until QRS narrows", "TOXBASE Guidelines", "https://www.toxbase.org"),
    ("Organophosphate Poisoning Presentation with Bronchorrhea and Miosis", "Pharmacology", "Nervous System", "intravenous atropine double-dose titration until bronchial secretions clear and pralidoxime", "RCEM Toxicology Guidelines", "https://rcem.ac.uk"),
    ("Carbon Monoxide Poisoning Severe Carboxyhemoglobin 32% with Syncope", "Medicine", "General Principles", "immediate 100% normobaric oxygen via non-rebreather mask and evaluation for hyperbaric oxygen", "RCEM Toxicology Guidelines", "https://rcem.ac.uk"),
    ("Beta-Blocker Toxicity Massive Ingestion with Refractory Bradycardia", "Pharmacology", "Cardiovascular", "high-dose insulin euglycemia therapy HIE, IV glucagon, and IV lipid emulsion therapy", "TOXBASE Guidelines", "https://www.toxbase.org"),
    ("Calcium Channel Blocker Overdose Verapamil with Profound Shock", "Pharmacology", "Cardiovascular", "intravenous calcium chloride, high-dose insulin therapy HIE, and vasopressor norepinephrine", "TOXBASE Guidelines", "https://www.toxbase.org"),
    ("Severe Accidental Hypothermia Core Temperature 26C in Cardiac Arrest", "Medicine", "General Principles", "prolonged CPR, veno-arterial ECMO rewarming, and withholding warm death declaration until re-warmed", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Exertional Heat Stroke Core Body Temperature 41.2C with Delirium", "Medicine", "General Principles", "immediate whole-body ice-water immersion cooling targeting core temperature under 39C", "RCEM Environmental Guidelines", "https://rcem.ac.uk"),
    ("Cocaine-Induced Acute Coronary Syndrome with Severe Hypertension", "Pharmacology", "Cardiovascular", "intravenous benzodiazepines lorazepam/diazepam, nitroglycerin, and strict avoidance of beta-blockers", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),

    # 5. Acute Neurology & Psychiatry - 10
    ("Status Epilepticus Convulsive Ongoing Beyond Five Minutes", "Medicine", "Nervous System", "intravenous lorazepam 4mg or buccal midazolam followed by IV levetiracetam 60 mg/kg loading", "RCEM Seizure Guidelines", "https://rcem.ac.uk"),
    ("Acute Ischemic Stroke Wake-Up Presentation within Thrombectomy Window", "Medicine", "Nervous System", "emergency CT brain with CT perfusion and urgent transfer for endovascular thrombectomy", "RCEM Stroke Guidelines", "https://rcem.ac.uk"),
    ("Subarachnoid Hemorrhage Suspected Thunderclap Headache CT Negative at 14 Hours", "Medicine", "Nervous System", "diagnostic lumbar puncture for CSF spectrophotometric xanthochromia detection", "RCEM Headache Guidelines", "https://rcem.ac.uk"),
    ("Acute Bacterial Meningitis in Adult with Purpuric Non-Blanching Rash", "Microbiology", "Nervous System", "immediate intravenous ceftriaxone 2g, vancomycin, and dexamethasone 10mg within 30 minutes", "RCEM Infection Guidelines", "https://rcem.ac.uk"),
    ("Cauda Equina Syndrome with New Urinary Retention and Bilateral Sciatica", "Surgery", "Nervous System", "emergency urgent whole spine emergency MRI scan within hours and immediate spinal surgical transfer", "RCEM Spinal Guidelines", "https://rcem.ac.uk"),
    ("Acute Angle-Closure Glaucoma with Fixed Dilated Pupil and Eye Pain", "Surgery", "Nervous System", "intravenous acetazolamide 500 mg, topical timolol, topical apraclonidine, and topical pilocarpine", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Acute Dystonic Reaction from Metoclopramide Oculogyric Crisis", "Pharmacology", "Nervous System", "intravenous or intramuscular procyclidine 5 to 10 mg with rapid symptom resolution", "RCEM Toxicology Guidelines", "https://rcem.ac.uk"),
    ("Acute Behavioral Disturbance Violent Agitation in Emergency Department", "Psychiatry", "Behavioral Health", "de-escalation, verbal engagement, and rapid tranquilization with oral or IM olanzapine/haloperidol", "RCEM Psychiatry Guidelines", "https://rcem.ac.uk"),
    ("Active Suicidal Ideation with High Lethality Plan in ED", "Psychiatry", "Behavioral Health", "constant one-to-one nursing supervision, secure environment, and urgent psychiatric assessment", "RCEM Mental Health Guidelines", "https://rcem.ac.uk"),
    ("Delirium Tremens Severe Alcohol Withdrawal with Hallucinations", "Psychiatry", "Behavioral Health", "symptom-triggered oral or IV diazepam/chlordiazepoxide and high-dose intravenous Pabrinex thiamine", "RCEM Toxicology Guidelines", "https://rcem.ac.uk"),

    # 6. Acute Medicine & Sepsis - 10
    ("Meningococcemia with Septic Shock and Widespread Purpura Fulminans", "Microbiology", "General Principles", "immediate intravenous ceftriaxone 2g, rapid crystalloid resuscitation, and vasopressor support", "RCEM Sepsis Guidelines", "https://rcem.ac.uk"),
    ("Necrotizing Fasciitis of Thigh with Dishwater Pus and Crepitus", "Surgery", "General Principles", "emergency surgical radical debridement, broad-spectrum IV meropenem/vancomycin/clindamycin", "RCEM Sepsis Guidelines", "https://rcem.ac.uk"),
    ("Acute Aortic Dissection Stanford Type A with Syncope and Unequal Pulses", "Surgery", "Cardiovascular", "immediate CT aortic angiogram, IV labetalol to lower BP, and emergency cardiothoracic transfer", "RCEM Cardiovascular Guidelines", "https://rcem.ac.uk"),
    ("Boerhaave Syndrome Spontaneous Esophageal Rupture Following Emesis", "Surgery", "Gastrointestinal", "emergency broad-spectrum antibiotics, IV fluid resuscitation, and emergent surgical primary repair", "RCEM Gastrointestinal Guidelines", "https://rcem.ac.uk"),
    ("Acute Mesenteric Ischemia with Pain Out of Proportion to Physical Exam", "Surgery", "Gastrointestinal", "urgent biphasic CT mesenteric angiography and immediate surgical or interventional revascularization", "RCEM Gastrointestinal Guidelines", "https://rcem.ac.uk"),
    ("Diabetic Ketoacidosis DKA with Blood Glucose 28 and pH 7.05", "Medicine", "Endocrine", "0.9% normal saline resuscitation, fixed-rate insulin 0.1 units/kg/hr, and potassium replacement", "RCEM Endocrine Guidelines", "https://rcem.ac.uk"),
    ("Hyperosmolar Hyperglycemic State HHS with Serum Osmolality 355", "Medicine", "Endocrine", "gradual isotonic fluid replacement over 48 hours, monitoring sodium, and delayed low-dose insulin", "RCEM Endocrine Guidelines", "https://rcem.ac.uk"),
    ("Acute Adrenal Crisis with Unexplained Refractory Hypotension in ED", "Medicine", "Endocrine", "immediate intravenous hydrocortisone 100 mg bolus and rapid normal saline infusion", "RCEM Endocrine Guidelines", "https://rcem.ac.uk"),
    ("Thyroid Storm with Hyperpyrexia 40.5C, Tachycardia 160, and Agitation", "Medicine", "Endocrine", "IV propranolol, propylthiouracil PTU, Lugol iodine one hour later, and IV hydrocortisone", "RCEM Endocrine Guidelines", "https://rcem.ac.uk"),
    ("Severe Symptomatic Hyponatremia Sodium 112 with Seizures", "Medicine", "Endocrine", "immediate bolus of 100 to 150 ml of 3% hypertonic saline over 20 minutes to raise sodium by 5 mmol/L", "RCEM Electrolyte Guidelines", "https://rcem.ac.uk"),

    # 7. Pediatric Emergencies - 10
    ("Pediatric Cardiac Arrest with Asystole Pediatric Advanced Life Support", "Pediatrics", "Cardiovascular", "PALS CPR 15 to 2, bag-valve-mask ventilation with 100% oxygen, and IV/IO adrenaline 10 mcg/kg", "Resuscitation Council UK PALS Guidelines", "https://www.resus.org.uk"),
    ("Severe Pediatric Dehydration from Gastroenteritis with Sunken Eyes", "Pediatrics", "Gastrointestinal", "rapid intravenous fluid bolus 20 ml/kg of 0.9% normal saline or Plasmalyte over 10-20 minutes", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Acute Pediatric Strangling Croup with Severe Sternal Retractions", "Pediatrics", "Respiratory", "nebulized adrenaline 1:1000 5ml, oral or IV dexamethasone 0.6 mg/kg, and calm reassurance", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Pediatric Status Epilepticus Lasting Ten Minutes in Emergency", "Pediatrics", "Nervous System", "buccal midazolam 0.5 mg/kg or IV lorazepam 0.1 mg/kg followed by IV levetiracetam 40 mg/kg", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Pediatric Sepsis with Prolonged Capillary Refill and Tachycardia", "Pediatrics", "General Principles", "high-flow oxygen, IV/IO access, blood cultures, empirical broad-spectrum IV ceftriaxone within 1 hr", "RCEM Pediatric Sepsis Guidelines", "https://rcem.ac.uk"),
    ("Pediatric Ingestion of Button Battery Lodged in Esophagus", "Surgery", "Gastrointestinal", "emergency rigid endoscopic removal within two hours to prevent fatal aorto-esophageal fistula", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Pediatric Ingestion of Multiple Rare-Earth Magnets in Toddler", "Surgery", "Gastrointestinal", "urgent pediatric surgical consultation and imaging to prevent bowel perforation and necrosis", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Non-Accidental Injury Physical Abuse with Multiple Skeletal Fractures", "Pediatrics", "General Principles", "admitting child to safe pediatric ward, notifying child safeguarding lead, and skeletal survey", "RCEM Child Protection Guidelines", "https://rcem.ac.uk"),
    ("Neonatal Sepsis in Twelve-Day-Old Infant with Hypothermia 35.8C", "Pediatrics", "General Principles", "full septic workup blood, urine, CSF and immediate IV ampicillin combined with cefotaxime/gentamicin", "RCEM Pediatric Guidelines", "https://rcem.ac.uk"),
    ("Supraventricular Tachycardia in Infant Heart Rate 260 with Poor Perfusion", "Pediatrics", "Cardiovascular", "ice-water bag to infant face diving reflex followed by rapid IV adenosine 0.1 mg/kg or DC shock", "Resuscitation Council UK PALS Guidelines", "https://www.resus.org.uk"),

    # 8. Obstetric & Gynecologic Emergencies - 10
    ("Ruptured Ectopic Pregnancy with Severe Pelvic Pain and Hemoperitoneum", "Surgery", "Pregnancy", "immediate fluid resuscitation, blood crossmatch, and urgent emergency exploratory laparoscopy/laparotomy", "RCEM Obstetric Guidelines", "https://rcem.ac.uk"),
    ("Eclamptic Seizure in 36-Week Pregnant Female in Emergency Department", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate 4g loading dose over 15 minutes followed by 1g/hr infusion", "RCEM Obstetric Guidelines", "https://rcem.ac.uk"),
    ("Postpartum Hemorrhage Severe Massive Loss in Delivery Room", "Obstetrics", "Pregnancy", "fundal uterine massage, IV oxytocin, ergometrine, carboprost, tranexamic acid, and intrauterine balloon", "RCOG Guidelines", "https://rcem.ac.uk"),
    ("Perimortem Cesarean Section Resuscitative Hysterotomy in Arrest", "Surgery", "Pregnancy", "resuscitative hysterotomy delivery within four minutes of cardiac arrest if gestation >= 20 weeks", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Ovarian Torsion with Acute Severe Lower Quadrant Pain and Vomiting", "Surgery", "Pregnancy", "urgent emergency gynecological laparoscopy for detorsion and ovarian preservation", "RCEM Gynecologic Guidelines", "https://rcem.ac.uk"),
    ("Severe Pelvic Inflammatory Disease PID with Tubo-Ovarian Abscess", "Microbiology", "Pregnancy", "intravenous ceftriaxone, doxycycline, and metronidazole with gynecological admission", "RCEM Gynecologic Guidelines", "https://rcem.ac.uk"),
    ("Placental Abruption with Painful Tense Woody Uterus at 35 Weeks", "Obstetrics", "Pregnancy", "continuous fetal monitoring, large-bore IV access, blood crossmatch, and emergency delivery", "RCOG Guidelines", "https://rcem.ac.uk"),
    ("Hyperemesis Gravidarum with Severe Dehydration and Ketosis", "Medicine", "Pregnancy", "intravenous normal saline with potassium, parenteral thiamine Pabrinex, and antiemetic ondansetron", "RCOG Guidelines", "https://rcem.ac.uk"),
    ("Acute Bartholin Gland Abscess with Severe Vulvar Pain", "Surgery", "Pregnancy", "incision and drainage under local anesthesia with Word catheter placement or marsupialization", "RCEM Gynecologic Guidelines", "https://rcem.ac.uk"),
    ("Post-Coital Vaginal Vault Laceration with Active Arterial Bleeding", "Surgery", "Pregnancy", "speculum visualization under good illumination and primary surgical suture repair of laceration", "RCEM Gynecologic Guidelines", "https://rcem.ac.uk"),

    # 9. Acute Ophthalmology & ENT - 10
    ("Central Retinal Artery Occlusion CRAO Sudden Painless Vision Loss", "Medicine", "Nervous System", "ocular massage, anterior chamber paracentesis, and urgent hyperbaric oxygen/stroke evaluation", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Chemical Eye Injury Alkaline Splash to Cornea in Industrial Worker", "Surgery", "Dermatology", "immediate copious eye irrigation with at least 1 to 2 liters of normal saline until neutral pH 7.0-7.4", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Orbital Cellulitis with Proptosis, Chemosis, and Painful Opthalmoplegia", "Microbiology", "Nervous System", "urgent contrast-enhanced orbital CT scan and intravenous high-dose broad-spectrum ceftriaxone/vancomycin", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Globe Rupture Traumatic Open Globe Injury Following Blunt Trauma", "Surgery", "Nervous System", "rigid eye shield placement, avoiding pressure/drops, antiemetics, and emergency ophthalmology repair", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Hyphema Traumatic Layering of Blood in Anterior Chamber", "Surgery", "Nervous System", "head-of-bed elevation 30 degrees, rigid eye shield, topical cycloplegics, and daily IOP monitoring", "RCEM Ophthalmic Guidelines", "https://rcem.ac.uk"),
    ("Epistaxis Severe Posterior Bleeding Uncontrolled with Anterior Packing", "Surgery", "Respiratory", "posterior epistaxis balloon catheter insertion or Foley catheter tamponade and urgent ENT admission", "RCEM ENT Guidelines", "https://rcem.ac.uk"),
    ("Peritonsillar Abscess Quinsy with Trismus and Uvular Deviation", "Surgery", "Respiratory", "needle aspiration or incision and drainage under local anesthesia and intravenous dexamethasone/antibiotics", "RCEM ENT Guidelines", "https://rcem.ac.uk"),
    ("Ludwig Angina Bilateral Submandibular Space Infection with Tongue Elevation", "Surgery", "Respiratory", "immediate fiberoptic nasal awake intubation, broad-spectrum IV antibiotics, and surgical decompression", "RCEM ENT Guidelines", "https://rcem.ac.uk"),
    ("Malignant Necrotizing Otitis Externa in Elderly Diabetic Patient", "Microbiology", "Nervous System", "high-resolution CT temporal bone and prolonged high-dose intravenous anti-pseudomonal ciprofloxacin", "RCEM ENT Guidelines", "https://rcem.ac.uk"),
    ("Nasal Bone Fracture with Bilateral Septal Hematoma", "Surgery", "Respiratory", "immediate bilateral surgical incision and drainage of septal hematoma to prevent saddle-nose deformity", "RCEM ENT Guidelines", "https://rcem.ac.uk"),

    # 10. Medicolegal & Resuscitation Ethics - 10
    ("Valid Advance Decision to Refuse Treatment ADRT Presented During Cardiac Arrest", "Ethics", "General Principles", "verifying written signed documented refusal of CPR and honoring patient autonomy", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Competent Adult Refusing Life-Saving Emergency Blood Transfusion", "Ethics", "General Principles", "confirming mental capacity, explaining fatal consequences, respecting refusal, and using alternatives", "RCEM Ethics Guidelines", "https://rcem.ac.uk"),
    ("Emergency Department Treatment under Common Law for Incapacitated Patient", "Ethics", "General Principles", "acting in patient best interests to preserve life and health under Mental Capacity Act", "General Medical Council Guidance", "https://www.gmc-uk.org"),
    ("Termination of Resuscitation in Asystolic Medical Cardiac Arrest", "Ethics", "General Principles", "discontinuing resuscitation after 20 minutes of ALS in absence of hypothermia, poisoning, or shockable rhythm", "Resuscitation Council UK Guidelines", "https://www.resus.org.uk"),
    ("Preservation of Forensic Evidence in Suspected Sexual Assault in ED", "Ethics", "General Principles", "early referral to specialized SARC Sexual Assault Referral Centre and careful chain-of-custody documentation", "RCEM Forensic Guidelines", "https://rcem.ac.uk"),
    ("Mandatory Notification of Notifiable Infectious Diseases in Emergency", "Ethics", "General Principles", "prompt statutory notification of suspected meningococcal disease or measles to public health authorities", "UK Health Security Agency Guidelines", "https://www.gov.uk/government/organisations/uk-health-security-agency"),
    ("Restraint and De-escalation for Patient with Excited Delirium and Extreme Agitation", "Ethics", "Behavioral Health", "proportional minimal restraint, early pharmacological sedation, and intensive physiologic monitoring", "RCEM Restraint Guidelines", "https://rcem.ac.uk"),
    ("Organ Donation Referral in Potential Brain Stem Dead Trauma Patient", "Ethics", "General Principles", "early notification to Specialist Nurse for Organ Donation SNOD prior to withdrawal discussions", "RCEM Organ Donation Guidelines", "https://rcem.ac.uk"),
    ("Management of Severely Intoxicated Patient Requesting Self-Discharge", "Ethics", "General Principles", "assessing temporary incapacity from intoxication, ensuring safe environment, and duty of care protection", "RCEM Clinical Guidelines", "https://rcem.ac.uk"),
    ("Major Incident Response Primary Triage Sieve in Emergency Department", "Ethics", "General Principles", "rapid physiological categorization into Priority 1 Immediate, Priority 2 Urgent, Priority 3 Delayed, Expectant", "RCEM Major Incident Guidelines", "https://rcem.ac.uk")
]

SMLE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Acute Coronary Syndrome STEMI in King Faisal Specialist Hospital", "Medicine", "Cardiovascular", "immediate primary percutaneous coronary intervention PCI within 90 minutes of arrival", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),
    ("Atherosclerotic Cardiovascular Disease Secondary Prevention in Saudi Patient", "Medicine", "Cardiovascular", "high-intensity statin atorvastatin 80 mg daily, low-dose aspirin, and lifestyle modification", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),
    ("Atrial Fibrillation Stroke Prevention with High CHA2DS2-VASc in Riyadh", "Medicine", "Cardiovascular", "direct oral anticoagulant apixaban 5mg twice daily and beta-blocker rate control", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Heart Failure with Reduced Ejection Fraction Stage C in Jeddah", "Medicine", "Cardiovascular", "quadruple GDMT sacubitril-valsartan, empagliflozin, bisoprolol, and spironolactone", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),
    ("Severe Native Aortic Valve Stenosis with Exertional Angina in KFMC", "Surgery", "Cardiovascular", "transcatheter aortic valve implantation TAVI or surgical aortic valve replacement", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),
    ("Acute Viral Pericarditis Initial Episode in Saudi University Hospital", "Medicine", "Cardiovascular", "oral ibuprofen 600 mg three times daily combined with oral colchicine for three months", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Unprovoked Proximal Deep Vein Thrombosis in King Khalid Hospital", "Medicine", "Cardiovascular", "oral direct oral anticoagulant rivaroxaban or apixaban for at least six months", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Submassive Pulmonary Embolism with Right Ventricular Dysfunction", "Medicine", "Cardiovascular", "therapeutic low-molecular-weight heparin enoxaparin and close ICU hemodynamic monitoring", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Hypertensive Emergency with Acute Left Ventricular Failure in ED", "Medicine", "Cardiovascular", "intravenous nitroglycerin infusion, IV loop diuretic, and non-invasive CPAP support", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),
    ("Hypertrophic Obstructive Cardiomyopathy with Systolic Anterior Motion", "Medicine", "Cardiovascular", "oral beta-blocker monotherapy and strict avoidance of vasodilators and dihydropyridines", "Saudi Heart Association Guidelines", "https://saudi-heart.com"),

    # 2. Respiratory - 10
    ("Middle East Respiratory Syndrome Coronavirus MERS-CoV Infection in Riyadh", "Microbiology", "Respiratory", "strict airborne infection isolation precautions, RT-PCR testing, and supportive intensive care", "Saudi Ministry of Health Guidelines", "https://www.moh.gov.sa"),
    ("Severe Acute Asthma Exacerbation in Adult Saudi Patient", "Medicine", "Respiratory", "nebulized salbutamol and ipratropium, systemic oral prednisolone, and oxygenation", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("COPD Acute Exacerbation with Purulent Sputum and Increased Dyspnea", "Medicine", "Respiratory", "inhaled bronchodilators, short-course systemic glucocorticoids, and oral amoxicillin-clavulanate", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Community-Acquired Pneumonia Severe CURB-65 Score 3 in Saudi ED", "Medicine", "Respiratory", "hospital admission and intravenous ceftriaxone combined with intravenous azithromycin", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Primary Spontaneous Pneumothorax Large Over 2cm in Young Male", "Surgery", "Respiratory", "simple needle aspiration or small-bore pigtail catheter intercostal drain insertion", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Pleural Effusion Tuberculous Exudative with High ADA in Al-Khobar", "Microbiology", "Respiratory", "diagnostic thoracentesis confirming elevated adenosine deaminase and four-drug anti-TB therapy", "Saudi Ministry of Health Guidelines", "https://www.moh.gov.sa"),
    ("Obstructive Sleep Apnea Severe in Obese Saudi Patient with Daytime Somnolence", "Medicine", "Respiratory", "overnight diagnostic polysomnography and auto-titrating continuous positive airway pressure", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Bronchiectasis with Pseudomonas Aeruginosa Colonization in Sputum", "Microbiology", "Respiratory", "airway clearance techniques, chest physiotherapy, and inhaled colistin or ciprofloxacin", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Idiopathic Pulmonary Fibrosis IPF Presentation in 66-Year-Old Male", "Medicine", "Respiratory", "high-resolution CT confirming definite UIP pattern and antifibrotic pirfenidone or nintedanib", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),
    ("Solitary Pulmonary Nodule Indeterminate Eight Millimeter Size on CT", "Medicine", "Respiratory", "contrast-enhanced chest CT follow-up at 3 months or PET-CT based on risk assessment", "Saudi Thoracic Society Guidelines", "https://saudithoracic.com"),

    # 3. Gastrointestinal - 10
    ("Metabolic Dysfunction-Associated Steatohepatitis MASH in Saudi Patient", "Medicine", "Gastrointestinal", "structured lifestyle weight reduction 7 to 10%, GLP-1 receptor agonist, and vitamin E", "Saudi Association for the Study of Liver Diseases (SASLT)", "https://saslt.net"),
    ("Bleeding Peptic Ulcer Forrest Ib Oozing in King Abdulaziz Medical City", "Surgery", "Gastrointestinal", "endoscopic dual therapy hemoclipping and thermal coagulation plus high-dose IV omeprazole", "Saudi Gastroenterology Association Guidelines", "https://sga.org.sa"),
    ("Ulcerative Colitis Severe Acute Flare Truelove-Witts Criteria", "Medicine", "Gastrointestinal", "intravenous hydrocortisone 100 mg four times daily and rescue infliximab if refractory on day 3", "Saudi Gastroenterology Association Guidelines", "https://sga.org.sa"),
    ("Crohn Disease Active Moderate Ileocecal Disease in Young Saudi", "Medicine", "Gastrointestinal", "oral budesonide induction followed by maintenance with subcutaneous anti-TNF adalimumab", "Saudi Gastroenterology Association Guidelines", "https://sga.org.sa"),
    ("Acute Calculous Cholecystitis Moderate Grade in Riyadh Hospital", "Surgery", "Gastrointestinal", "intravenous antibiotics, fluid resuscitation, and early laparoscopic cholecystectomy within 72 hours", "Saudi Surgical Association Guidelines", "https://ssa.med.sa"),
    ("Acute Gallstone Pancreatitis with Concomitant Acute Cholangitis", "Surgery", "Gastrointestinal", "urgent endoscopic retrograde cholangiopancreatography ERCP with sphincterotomy within 24 hours", "Saudi Gastroenterology Association Guidelines", "https://sga.org.sa"),
    ("Chronic Hepatitis B High Viral Load HBeAg Positive in Saudi Resident", "Microbiology", "Gastrointestinal", "long-term first-line oral antiviral therapy with tenofovir alafenamide or entecavir", "Saudi Association for the Study of Liver Diseases (SASLT)", "https://saslt.net"),
    ("Cirrhosis with Spontaneous Bacterial Peritonitis SBP in KFMC", "Microbiology", "Gastrointestinal", "intravenous ceftriaxone 2g daily combined with intravenous albumin 1.5 g/kg on day 1", "Saudi Association for the Study of Liver Diseases (SASLT)", "https://saslt.net"),
    ("Celiac Disease Presentation with Iron Deficiency Anemia in Young Female", "Immunology", "Gastrointestinal", "serum anti-tTG IgA confirmation, duodenal endoscopy biopsy, and strict gluten-free diet", "Saudi Gastroenterology Association Guidelines", "https://sga.org.sa"),
    ("National Colorectal Cancer Screening in Average-Risk 45-Year-Old Saudi", "Medicine", "Gastrointestinal", "annual fecal immunochemical test FIT or screening colonoscopy every ten years", "Saudi Ministry of Health Guidelines", "https://www.moh.gov.sa"),

    # 4. Renal & Genitourinary - 10
    ("Diabetic Kidney Disease with Macroalbuminuria in Saudi Diabetic", "Medicine", "Renal", "SGLT2 inhibitor dapagliflozin, ACE inhibitor ramipril, and non-steroidal MRA finerenone", "Saudi Society of Nephrology and Transplantation", "https://ssnt-med.com"),
    ("Acute Kidney Injury Stage 2 from Pre-Renal Dehydration and NSAID Use", "Medicine", "Renal", "immediate cessation of nephrotoxic drugs, isotonic crystalloid rehydration, and monitoring", "Saudi Society of Nephrology and Transplantation", "https://ssnt-med.com"),
    ("Nephrotic Syndrome Adult Minimal Change Disease in Riyadh Hospital", "Medicine", "Renal", "oral high-dose prednisolone 1 mg/kg daily for 8 to 16 weeks and loop diuretics for edema", "Saudi Society of Nephrology and Transplantation", "https://ssnt-med.com"),
    ("IgA Nephropathy with Persistent Proteinuria Exceeding One Gram Daily", "Medicine", "Renal", "optimized maximally tolerated RAS blockade and targeted oral budesonide formulation", "Saudi Society of Nephrology and Transplantation", "https://ssnt-med.com"),
    ("Ureteral Calculus Six Millimeter Obstructing Calculus with Renal Colic", "Medicine", "Renal", "oral NSAID analgesia, medical expulsive therapy tamsulosin, and outpatient urology follow-up", "Saudi Urological Association Guidelines", "https://sua.org.sa"),
    ("Acute Pyelonephritis Uncomplicated in Non-Pregnant Saudi Female", "Microbiology", "Renal", "oral ciprofloxacin or cefpodoxime for 7 to 10 days after urine culture collection", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Benign Prostatic Hyperplasia with Moderate LUTS and Large Prostate", "Surgery", "Renal", "combination therapy with alpha-1 blocker tamsulosin and 5-alpha reductase inhibitor dutasteride", "Saudi Urological Association Guidelines", "https://sua.org.sa"),
    ("Gross Hematuria Asymptomatic in Sixty-Year-Old Saudi Smoker", "Surgery", "Renal", "urgent urology referral for diagnostic flexible cystoscopy and multiphasic CT urography", "Saudi Urological Association Guidelines", "https://sua.org.sa"),
    ("Testicular Torsion Suspected in 15-Year-Old in Emergency Department", "Surgery", "Renal", "immediate emergency scrotal exploration and bilateral orchidopexy without delay for ultrasound", "Saudi Urological Association Guidelines", "https://sua.org.sa"),
    ("Severe Hyperkalemia Potassium 6.9 with Wide QRS Complexes in ED", "Medicine", "Renal", "immediate intravenous calcium gluconate membrane stabilization followed by insulin-dextrose", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),

    # 5. Endocrine - 10
    ("Type 2 Diabetes Mellitus Inadequately Controlled HbA1c 9.2% with Obesity", "Medicine", "Endocrine", "metformin combined with dual GIP/GLP-1 receptor agonist tirzepatide and lifestyle", "Saudi Diabetes Clinical Practice Guidelines", "https://scfhs.org.sa"),
    ("Diabetic Ketoacidosis DKA Moderate in Young Adult Type 1 Diabetic", "Medicine", "Endocrine", "intravenous isotonic saline rehydration, regular insulin infusion 0.1 units/kg/hr, and potassium", "Saudi Diabetes Clinical Practice Guidelines", "https://scfhs.org.sa"),
    ("Hyperosmolar Hyperglycemic State HHS in Elderly Patient in Riyadh", "Medicine", "Endocrine", "aggressive isotonic fluid resuscitation, monitoring osmolality, and low-dose insulin", "Saudi Diabetes Clinical Practice Guidelines", "https://scfhs.org.sa"),
    ("Graves Disease Hyperthyroidism First Episode in Young Saudi Female", "Medicine", "Endocrine", "oral methimazole antithyroid therapy combined with propranolol symptom control", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),
    ("Primary Hypothyroidism Overt Presentation with TSH 25 in KFMC", "Medicine", "Endocrine", "oral levothyroxine replacement therapy 1.6 mcg/kg daily titrated to euthyroid TSH range", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),
    ("Primary Hyperparathyroidism with Recurrent Nephrolithiasis", "Surgery", "Endocrine", "focused minimally invasive parathyroidectomy following sestamibi SPECT-CT localization", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),
    ("Cushing Disease Secondary to Pituitary ACTH-Secreting Adenoma", "Surgery", "Endocrine", "transsphenoidal surgical pituitary adenomectomy performed by experienced skull-base neurosurgeon", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),
    ("Primary Adrenal Insufficiency Addison Disease Acute Presentation", "Medicine", "Endocrine", "immediate intravenous hydrocortisone 100 mg bolus, saline rehydration, and fludrocortisone maintenance", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),
    ("Papillary Thyroid Carcinoma 1.8cm Nodule Bethesda VI in Jeddah", "Surgery", "Endocrine", "total thyroidectomy or thyroid lobectomy followed by levothyroxine TSH suppression", "Saudi Surgical Association Guidelines", "https://ssa.med.sa"),
    ("Severe Vitamin D Deficiency with Secondary Hyperparathyroidism in Riyadh", "Biochemistry", "Endocrine", "oral cholecalciferol 50,000 IU weekly for eight weeks followed by daily maintenance", "Saudi Endocrine Society Guidelines", "https://ses.org.sa"),

    # 6. Hematology - 10
    ("Sickle Cell Disease Vaso-Occlusive Pain Crisis in Eastern Province", "Medicine", "Hematology", "rapid parenteral opioid analgesia within 30 minutes, IV hydration, and hydroxyurea maintenance", "Saudi Ministry of Health Guidelines", "https://www.moh.gov.sa"),
    ("Beta Thalassemia Major Transfusion-Dependent in Saudi Child", "Genetics", "Hematology", "regular leukoreduced packed red blood cell transfusions and oral iron chelation deferasirox", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Premarital Screening National Program Sickle Cell Trait Couple in Saudi", "Genetics", "General Principles", "genetic counseling regarding 25% risk of major hemoglobinopathy and reproductive options", "Saudi Ministry of Health Premarital Screening Program", "https://www.moh.gov.sa"),
    ("Immune Thrombocytopenia ITP in Adult with Platelets 12,000 and Purpura", "Medicine", "Hematology", "oral high-dose dexamethasone 40 mg daily for four days or oral prednisone 1 mg/kg", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Thrombotic Thrombocytopenic Purpura TTP Presentation in KFMC", "Medicine", "Hematology", "urgent therapeutic plasma exchange TPE combined with glucocorticoids and caplacizumab", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Chronic Myeloid Leukemia CML BCR-ABL1 Positive Chronic Phase", "Pharmacology", "Hematology", "second-generation tyrosine kinase inhibitor dasatinib or nilotinib oral therapy", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Multiple Myeloma Newly Diagnosed Transplant-Eligible in Riyadh", "Medicine", "Hematology", "quadruplet induction daratumumab, bortezomib, lenalidomide, dexamethasone D-VRd", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Heparin-Induced Thrombocytopenia HIT Type II Confirmation in KAMC", "Pharmacology", "Hematology", "immediate cessation of all heparin and initiation of non-heparin direct thrombin inhibitor argatroban", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),
    ("Disseminated Intravascular Coagulation from Septic Shock in ICU", "Pathology", "Hematology", "aggressive antimicrobial treatment of sepsis and targeted platelet/cryoprecipitate transfusions", "Saudi Critical Care Society Guidelines", "https://sccs.med.sa"),
    ("Warfarin Overanticoagulation with Major GI Bleed and INR 8.2", "Pharmacology", "Hematology", "immediate intravenous 4-factor prothrombin complex concentrate PCC and IV vitamin K 10mg", "Saudi Society of Hematology Guidelines", "https://ssha.org.sa"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke within Three Hours in Stroke Centre Riyadh", "Medicine", "Nervous System", "intravenous tenecteplase thrombolysis and endovascular thrombectomy assessment", "Saudi Stroke Association Guidelines", "https://saudistroke.com"),
    ("Subarachnoid Hemorrhage Fisher Grade 3 Hunt-Hess II in KAMC", "Surgery", "Nervous System", "digital subtraction angiography with endovascular coil embolization and oral nimodipine", "Saudi Stroke Association Guidelines", "https://saudistroke.com"),
    ("Status Epilepticus Refractory to First-Line Benzodiazepines in ED", "Medicine", "Nervous System", "intravenous levetiracetam 60 mg/kg or fosphenytoin loading and airway protection", "Saudi Epilepsy Society Guidelines", "https://saudiepilepsy.org"),
    ("Parkinson Disease Initial Presentation with Motor Impairment in Senior", "Medicine", "Nervous System", "levodopa-carbidopa therapy or dopamine agonist pramipexole and physiotherapy", "Saudi Neurological Society Guidelines", "https://sns.med.sa"),
    ("Multiple Sclerosis Relapsing-Remitting Acute Relapse in Young Saudi", "Medicine", "Nervous System", "intravenous high-dose methylprednisolone 1000 mg daily for three to five days", "Saudi Multiple Sclerosis Chapter Guidelines", "https://sns.med.sa"),
    ("Bacterial Meningitis Suspected in Adult in Emergency Department", "Microbiology", "Nervous System", "immediate intravenous ceftriaxone 2g twice daily combined with vancomycin and dexamethasone", "SCFHS Saudi Clinical Guidelines", "https://scfhs.org.sa"),
    ("Temporal Arteritis Giant Cell Arteritis with Jaw Claudication in KFMC", "Medicine", "Nervous System", "immediate high-dose oral prednisolone 60 mg daily to prevent permanent visual loss", "Saudi Rheumatology Association Guidelines", "https://sra.med.sa"),
    ("Guillain-Barre Syndrome Acute Flaccid Quadriparesis in Riyadh", "Medicine", "Nervous System", "intravenous immunoglobulin IVIG 2 g/kg over five days and forced vital capacity monitoring", "Saudi Neurological Society Guidelines", "https://sns.med.sa"),
    ("Migraine Headache Episodic Moderate to Severe Attack in Primary Care", "Medicine", "Nervous System", "oral triptan sumatriptan 50 to 100 mg combined with naproxen sodium and antiemetic", "Saudi Neurological Society Guidelines", "https://sns.med.sa"),
    ("Normal Pressure Hydrocephalus with Hakim-Adams Triad in Senior", "Surgery", "Nervous System", "high-volume lumbar puncture tap test followed by ventriculoperitoneal shunt placement", "Saudi Neurological Society Guidelines", "https://sns.med.sa"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Seropositive Polyarthritis in Saudi Female", "Medicine", "Musculoskeletal", "early disease-modifying antirheumatic drug oral methotrexate with folic acid bridge", "Saudi Rheumatology Association Guidelines", "https://sra.med.sa"),
    ("Systemic Lupus Erythematosus SLE with Active Proliferative Lupus Nephritis", "Medicine", "Renal", "intravenous pulse methylprednisolone combined with mycophenolate mofetil induction", "Saudi Rheumatology Association Guidelines", "https://sra.med.sa"),
    ("Ankylosing Spondylitis HLA-B27 Positive Axial Presentation in Riyadh", "Medicine", "Musculoskeletal", "continuous oral NSAID therapy, physical therapy, and anti-TNF biologic if inadequate response", "Saudi Rheumatology Association Guidelines", "https://sra.med.sa"),
    ("Acute Gout Flare First MTP Joint Podagra in Saudi Male", "Medicine", "Musculoskeletal", "oral NSAID or low-dose colchicine and postponing urate-lowering medication changes", "Saudi Rheumatology Association Guidelines", "https://sra.med.sa"),
    ("Septic Arthritis Native Knee Joint in Emergency Department", "Microbiology", "Musculoskeletal", "immediate arthrocentesis with synovial fluid analysis and targeted intravenous vancomycin/ceftriaxone", "Saudi Orthopaedic Association Guidelines", "https://soa.org.sa"),
    ("Severe Osteoporosis with T-score Minus 3.4 and Vertebral Compression", "Medicine", "Musculoskeletal", "bone anabolic subcutaneous teriparatide or romosozumab followed by antiresorptive therapy", "Saudi Osteoporosis Society Guidelines", "https://scfhs.org.sa"),
    ("Psoriasis Vulgaris Moderate to Severe Plaque Disease in Jeddah", "Medicine", "Dermatology", "IL-17 inhibitor secukinumab or IL-23 inhibitor guselkumab targeted biologic therapy", "Saudi Society of Dermatology and Dermatologic Surgery", "https://ssdds.org.sa"),
    ("Atopic Dermatitis Moderate to Severe Refractory to Topical Steroids", "Medicine", "Dermatology", "subcutaneous dupilumab IL-4/IL-13 receptor antagonist and liberal ceramide emollients", "Saudi Society of Dermatology and Dermatologic Surgery", "https://ssdds.org.sa"),
    ("Stevens-Johnson Syndrome SJS from Allopurinol in Saudi Patient", "Medicine", "Dermatology", "immediate cessation of offending drug, transfer to burn ICU, and supportive barrier care", "Saudi Society of Dermatology and Dermatologic Surgery", "https://ssdds.org.sa"),
    ("Malignant Melanoma Breslow Depth 2.2mm Ulcerated on Lower Limb", "Surgery", "Dermatology", "wide local excision with two-centimeter margins and sentinel lymph node biopsy", "Saudi Surgical Association Guidelines", "https://ssa.med.sa"),

    # 9. Pediatrics & Obstetrics - 10
    ("Gestational Diabetes Mellitus GDM Diagnosed at 26 Weeks in Riyadh", "Obstetrics", "Pregnancy", "nutritional medical counseling, home glucose monitoring, and insulin if fasting > 95 mg/dL", "Saudi Obstetric and Gynaecological Society (SOGS)", "https://sogs.org.sa"),
    ("Preeclampsia with Severe Features at 34 Weeks Gestation in Jeddah", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis, blood pressure control with labetalol, and delivery", "SOGS Guidelines", "https://sogs.org.sa"),
    ("Ectopic Pregnancy Unruptured Hemodynamically Stable in KFMC", "Obstetrics", "Pregnancy", "transvaginal ultrasound confirmation and single-dose intramuscular methotrexate protocol", "SOGS Guidelines", "https://sogs.org.sa"),
    ("Postpartum Hemorrhage Primary Secondary to Uterine Atony", "Obstetrics", "Pregnancy", "uterine massage, intravenous oxytocin infusion, carboprost/misoprostol, and balloon tamponade", "SOGS Guidelines", "https://sogs.org.sa"),
    ("Neonatal Respiratory Distress Syndrome RDS in Preterm Infant", "Pediatrics", "Respiratory", "early nasal CPAP, endotracheal natural surfactant administration, and thermal support", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),
    ("Neonatal Jaundice within First 24 Hours of Life in Saudi Hospital", "Pediatrics", "Gastrointestinal", "urgent total and direct serum bilirubin measurement, blood group Coombs test, and phototherapy", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),
    ("Acute Viral Croup Mild to Moderate in Two-Year-Old in ED", "Pediatrics", "Respiratory", "single dose of oral dexamethasone 0.15 mg/kg or 0.6 mg/kg and calm parent reassurance", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),
    ("Febrile Neutropenia in Pediatric Oncology Patient in KFSH&RC", "Pediatrics", "Hematology", "immediate intravenous broad-spectrum anti-pseudomonal beta-lactam cefepime within 30 minutes", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),
    ("Kawasaki Disease Diagnostic Criteria at Day Six of Fever in Child", "Pediatrics", "Cardiovascular", "single high-dose intravenous immunoglobulin IVIG 2 g/kg and high-dose oral aspirin", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),
    ("Type 1 Diabetes Mellitus New Onset in 8-Year-Old Saudi Child", "Pediatrics", "Endocrine", "multiple daily insulin injections or insulin pump therapy, diabetic education, and CGM", "Saudi Pediatric Association Guidelines", "https://spa.med.sa"),

    # 10. Psychiatry & Ethics - 10
    ("Major Depressive Disorder Severe in Outpatient Clinic Riyadh", "Psychiatry", "Behavioral Health", "evidence-based cognitive behavioral therapy CBT combined with oral SSRI escitalopram", "Saudi Psychiatric Association Guidelines", "https://spa.org.sa"),
    ("Bipolar I Disorder Acute Manic Episode in King Khalid Hospital", "Psychiatry", "Behavioral Health", "oral mood stabilizer lithium or valproate combined with oral atypical antipsychotic", "Saudi Psychiatric Association Guidelines", "https://spa.org.sa"),
    ("Generalized Anxiety Disorder Moderate Impairing Daily Functioning", "Psychiatry", "Behavioral Health", "psychoeducation, cognitive behavioral therapy, and oral selective serotonin reuptake inhibitor", "Saudi Psychiatric Association Guidelines", "https://spa.org.sa"),
    ("Schizophrenia First Episode Psychosis in Young Saudi Male", "Psychiatry", "Behavioral Health", "oral atypical antipsychotic risperidone or aripiprazole and psychosocial rehabilitation", "Saudi Psychiatric Association Guidelines", "https://spa.org.sa"),
    ("Informed Consent for Major Elective Bariatric Surgery in Saudi Arabia", "Ethics", "General Principles", "multidisciplinary comprehensive counseling on dietary changes, surgical risks, and written consent", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Patient Medical Confidentiality and Refusal of Disclosure to Family", "Ethics", "General Principles", "strict maintenance of medical confidentiality and refusal to disclose without patient authorization", "Saudi Ministry of Health Code of Ethics", "https://www.moh.gov.sa"),
    ("End-of-Life DNR Directives under Saudi Fatwa and Medical Regulations", "Ethics", "General Principles", "multidisciplinary documentation of terminal futility in accordance with Saudi national DNR guidelines", "Saudi Council of Senior Scholars Fatwa on DNR", "https://www.moh.gov.sa"),
    ("Brain Death Determination for Deceased Organ Procurement in Saudi", "Ethics", "General Principles", "strict clinical testing protocol by authorized multidisciplinary committee under SCOT regulations", "Saudi Center for Organ Transplantation (SCOT)", "https://scot.gov.sa"),
    ("Hajj Pilgrim Preventive Health Requirements and Meningococcal Vaccine", "Ethics", "General Principles", "quadrivalent meningococcal ACWY conjugate vaccination proof and seasonal influenza vaccine", "Saudi Ministry of Health Hajj Health Requirements", "https://www.moh.gov.sa"),
    ("National Cardiovascular Screening Program for Saudi Adults", "Medicine", "General Principles", "screening blood pressure, fasting lipid profile, HbA1c, and cardiovascular risk stratification", "Saudi Ministry of Health Guidelines", "https://www.moh.gov.sa")
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
    validate_topics(NLE_TOPICS, "NLE")
    validate_topics(MRCEM_TOPICS, "MRCEM")
    validate_topics(SMLE_TOPICS, "SMLE")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega80_topics_b.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 80 Topics Part B\n\n")
        f.write(f"NLE_TOPICS = {repr(NLE_TOPICS)}\n\n")
        f.write(f"MRCEM_TOPICS = {repr(MRCEM_TOPICS)}\n\n")
        f.write(f"SMLE_TOPICS = {repr(SMLE_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
