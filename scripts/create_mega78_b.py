"""
Topic Generator for Mega-Batch 78 - Part B
Tracks:
- Batch 378: 100 MRCEM (Emergency) topics (2,700 -> 2,800)
- Batch 379: 100 SMLE (Saudi Arabia) topics (2,700 -> 2,800)
- Batch 380: 100 UHS MBBS (Pakistan) topics (2,700 -> 2,800)
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

MRCEM_TOPICS = [
    # 1. Resuscitation & Cardiovascular - 10
    ("Cardiac Arrest with PEA Following Massive Pulmonary Embolism", "Medicine", "Cardiovascular", "immediate bolus tenecteplase thrombolysis during cardiopulmonary resuscitation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Ventricular Fibrillation Refractory to Three Defibrillation Shocks", "Medicine", "Cardiovascular", "intravenous amiodarone three hundred milligrams bolus and dual sequential defibrillation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Cardiogenic Shock Secondary to Acute Mitral Papillary Muscle Rupture", "Surgery", "Cardiovascular", "emergency endotracheal intubation, intra-aortic balloon pump, and surgical valve repair", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Aortic Dissection Stanford Type A with Pericardial Tamponade", "Surgery", "Cardiovascular", "immediate cardiothoracic surgical transfer and controlled pericardial drainage only if in extremis", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Wide-Complex Monomorphic Ventricular Tachycardia with Hemodynamic Stability", "Medicine", "Cardiovascular", "intravenous procainamide or amiodarone infusion with synchronized cardioversion standby", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Symptomatic Bradycardia Complete Heart Block with Hypotension", "Medicine", "Cardiovascular", "immediate transcutaneous electrical pacing followed by transvenous wire placement", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Hypertensive Emergency with Acute Aortic Dissection", "Medicine", "Cardiovascular", "intravenous labetalol or esmolol titration targeting systolic blood pressure below 120", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Right Ventricular Infarction with Severe Nitrate-Induced Hypotension", "Medicine", "Cardiovascular", "immediate rapid intravenous crystalloid fluid boluses and avoidance of all nitrates", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Cardiac Tamponade from Malignant Pericardial Effusion with Pulsus Paradoxus", "Surgery", "Cardiovascular", "urgent ultrasound-guided subxiphoid pericardiocentesis with drain placement", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Decompensated Heart Failure with Flash Pulmonary Edema and Hypoxemia", "Medicine", "Cardiovascular", "non-invasive continuous positive airway pressure and intravenous nitrate infusion", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 2. Resuscitation & Respiratory - 10
    ("Tension Pneumothorax with Severe Tracheal Deviation and Cyanosis", "Surgery", "Respiratory", "immediate emergency thoracostomy finger thoracostomy or large-bore cannula insertion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Life-Threatening Acute Asthma with Silent Chest and Exhaustion", "Medicine", "Respiratory", "intravenous magnesium sulfate, continuous nebulized salbutamol, and intravenous hydrocortisone", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Massive Hemothorax Exceeding 1500ml on Intercostal Drainage", "Surgery", "Respiratory", "immediate autotransfusion resuscitation and emergency exploratory thoracotomy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Acute Epiglottitis with Impending Upper Airway Obstruction", "Pediatrics", "Respiratory", "immediate mobilization of difficult airway team, inhalational induction in theatre", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Inhalational Smoke Injury with Carbonaceous Sputum and Stridor", "Surgery", "Respiratory", "early proactive endotracheal intubation before progressive glottic edema develops", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Flail Chest with Underlying Pulmonary Contusion and Hypoxemic Failure", "Surgery", "Respiratory", "positive pressure ventilation, epidural analgesia, and surgical rib fixation review", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Foreign Body Airway Obstruction with Complete Airway Occlusion in Adult", "Medicine", "Respiratory", "five back blows followed by five abdominal thrusts Heimlich maneuver", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Community-Acquired Legionella Pneumonia with Septic Shock", "Microbiology", "Respiratory", "high-flow nasal cannula oxygen, intravenous levofloxacin, and lung-protective ventilation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Tracheostomy Decannulation Acute False Lumen Tract Emergency", "Surgery", "Respiratory", "emergency endotracheal oral intubation or fiberoptic tracheostomy re-insertion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Hypercapnic Respiratory Failure in Severe COPD Exacerbation", "Medicine", "Respiratory", "urgent initiation of non-invasive bi-level positive airway pressure BiPAP", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 3. Trauma & Surgery - 10
    ("Pelvic Fracture Open-Book Type with Hemodynamic Collapse", "Surgery", "Musculoskeletal", "immediate application of commercial pelvic circumferential binder at greater trochanters", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Traumatic Hemoperitoneum FAST Positive with Persistent Shock", "Surgery", "Gastrointestinal", "immediate transfer to operating theatre for emergency damage-control laparotomy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Penetrating Zone II Neck Injury with Expanding Pulsatile Hematoma", "Surgery", "Cardiovascular", "immediate definitive surgical neck exploration in theatre without radiological delay", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Traumatic Cardiac Arrest from Penetrating Thoracic Stab Wound", "Surgery", "Cardiovascular", "emergency resuscitative clamshell thoracotomy within ten minutes of arrest", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Traumatic Acute Epidural Hematoma with Rapid Neurological Deterioration", "Surgery", "Nervous System", "emergency neurosurgical burr-hole decompression or formal craniotomy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Traumatic Limb Threatening Ischemia Following Knee Dislocation", "Surgery", "Cardiovascular", "immediate closed joint reduction followed by CT angiography and popliteal repair", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Retrobulbar Hematoma Following Orbital Trauma with Elevated IOP", "Surgery", "Nervous System", "emergency bedside lateral canthotomy and inferior cantholysis to decompress orbit", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Open Diaphragmatic Rupture Following Blunt Abdominal Deceleration", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and primary non-absorbable diaphragmatic repair", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Crush Injury of Lower Extremities with Impending Crush Syndrome", "Surgery", "Musculoskeletal", "aggressive intravenous isotonic saline volume resuscitation prior to extrication", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Open Tibial Fracture Gustilo Type IIIC with Transected Posterior Tibial Artery", "Surgery", "Musculoskeletal", "immediate vascular shunting, skeletal external fixation, and soft tissue coverage", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 4. Toxicology & Environmental - 10
    ("Massive Paracetamol Acetaminophen Overdose Beyond 24 Hours", "Pharmacology", "Gastrointestinal", "immediate intravenous N-acetylcysteine infusion and liver transplant liaison", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Tricyclic Antidepressant Overdose with QRS Prolongation Over 160ms", "Pharmacology", "Cardiovascular", "intravenous hypertonic sodium bicarbonate boluses targeting arterial pH above 7.50", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Toxic Alcohol Ingestion Ethylene Glycol with High Anion Gap Acidosis", "Pharmacology", "Renal", "intravenous fomepizole or ethanol infusion and urgent emergency hemodialysis", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Cyanide Poisoning in Smoke Inhalation with High Lactate", "Pharmacology", "General Principles", "immediate intravenous hydroxocobalamin Cyanokit administration with 100% oxygen", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Accidental Hypothermia with Core Temperature 25C and VF Arrest", "Medicine", "Cardiovascular", "extracorporeal membrane oxygenation ECMO cardiopulmonary bypass rewarming", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Exertional Heat Stroke with Hyperthermia 41C and Altered Mental Status", "Medicine", "General Principles", "immediate whole-body ice-water immersion cooling to core temperature 38.5C", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Calcium Channel Blocker Overdose Verapamil with Refractory Shock", "Pharmacology", "Cardiovascular", "high-dose insulin euglycemia therapy, intravenous calcium gluconate, and lipid emulsion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Beta-Blocker Toxicity Propranolol with Severe Bradycardia and Seizures", "Pharmacology", "Cardiovascular", "intravenous glucagon bolus and infusion, high-dose insulin, and pacing", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Organophosphate Nerve Agent Exposure with Profuse Secretions", "Pharmacology", "Nervous System", "high-dose intravenous atropine doubled every five minutes until chest clear", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Anaphylaxis with Refractory Bronchospasm and Shock", "Immunology", "General Principles", "intramuscular adrenaline 0.5mg every five minutes and aggressive fluid boluses", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 5. Neurology & Sepsis - 10
    ("Acute Refractory Status Epilepticus Beyond 30 Minutes", "Neurology", "Nervous System", "general anesthesia with propofol or midazolam infusion and continuous EEG", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Meningococcal Septicemia with Purpura Fulminans and Shock", "Microbiology", "General Principles", "immediate intravenous ceftriaxone, aggressive fluid resuscitation, and inotropes", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Spinal Epidural Hematoma Following Lumbar Puncture with Paraparesis", "Surgery", "Nervous System", "emergency MRI spine and decompressive laminectomy within six hours", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Basilar Artery Thrombosis with Impending Brainstem Infarction", "Neurology", "Nervous System", "emergency endovascular mechanical thrombectomy up to 24 hours from onset", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Septic Shock Refractory to Crystalloids Requiring Vasopressors", "Medicine", "General Principles", "first-line norepinephrine infusion via central line targeting MAP 65 mm Hg", "Surviving Sepsis Campaign Guidelines", "https://www.sccm.org"),
    ("Necrotizing Soft Tissue Infection of Perineum with Crepitus", "Surgery", "Musculoskeletal", "immediate extensive surgical debridement and broad-spectrum antimicrobial therapy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Intracerebral Hemorrhage on DOAC Anticoagulation", "Neurology", "Nervous System", "immediate specific DOAC reversal with idarucizumab or andexanet alfa and BP control", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Pituitary Apoplexy with Severe Headache and Bitemporal Field Loss", "Surgery", "Endocrine", "stress-dose intravenous hydrocortisone and emergency transsphenoidal decompression", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Dystonic Reaction Following Intravenous Metoclopramide", "Pharmacology", "Nervous System", "intravenous procyclidine or benztropine anticholinergic administration", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Subarachnoid Hemorrhage Fisher Grade 3 with Sudden Thunderclap Headache", "Surgery", "Nervous System", "urgent non-contrast CT head, oral nimodipine, and neurosurgical transfer", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 6. Pediatrics Emergency - 10
    ("Pediatric Septic Shock with Cold Extremities and Delayed Capillary Refill", "Pediatrics", "General Principles", "twenty milliliters per kilogram isotonic fluid boluses and early epinephrine infusion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Status Epilepticus in Child Refractory to First-Line Benzodiazepines", "Pediatrics", "Nervous System", "intravenous levetiracetam or phenytoin infusion over twenty minutes", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Foreign Body Ingestion Button Battery Impacted in Mid-Esophagus", "Pediatrics", "Gastrointestinal", "emergent endoscopic removal within two hours to prevent perforation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Pediatric Diabetic Ketoacidosis with Cerebral Edema Warning Signs", "Pediatrics", "Endocrine", "hypertonic 3% saline or intravenous mannitol and reduction of fluid infusion rate", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Pediatric Anaphylaxis in Ten-Kilogram Infant", "Pediatrics", "General Principles", "intramuscular adrenaline 0.15mg into anterolateral thigh and oxygen", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Neonatal Shock Duct-Dependent Congenital Heart Disease", "Pediatrics", "Cardiovascular", "immediate continuous intravenous prostaglandin E1 alprostadil infusion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Intussusception in Eight-Month-Old with Lethargy and Currant Jelly Stool", "Pediatrics", "Gastrointestinal", "ultrasound-guided pneumatic or hydrostatic enema reduction under surgical standby", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Supraventricular Tachycardia in Infant Heart Rate 280/min", "Pediatrics", "Cardiovascular", "ice to facial bridge vagal maneuver followed by rapid intravenous adenosine", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Non-Accidental Injury Suspicion with Multiple Skeletal Fractures", "Pediatrics", "General Principles", "immediate hospital admission, skeletal survey, and child safeguarding referral", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Neonatal Purulent Meningitis with Bulging Fontanelle", "Pediatrics", "Nervous System", "immediate lumbar puncture, intravenous ampicillin and cefotaxime therapy", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 7. Obstetrics & Gynecology Emergency - 10
    ("Ruptured Ectopic Pregnancy with Hemoperitoneum and Profound Shock", "Obstetrics", "Pregnancy", "immediate high-volume blood transfusion and emergency exploratory laparotomy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Preeclampsia at Term with Visual Disturbance and Epigastric Pain", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate loading and maintenance with emergency delivery", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Postpartum Hemorrhage Primary 1500ml Unresponsive to Oxytocin", "Obstetrics", "Pregnancy", "ergometrine, carboprost, misoprostol, and intrauterine balloon tamponade", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Ovarian Torsion with Acute Pelvic Pain and Absent Doppler Flow", "Surgery", "Renal", "emergency diagnostic laparoscopy and detorsion with ovarian preservation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Cord Prolapse Encountered in Active Labor with Ruptured Membranes", "Obstetrics", "Pregnancy", "manual elevation of presenting part and emergency category one cesarean section", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Amniotic Fluid Embolism Presenting with Sudden Coagulopathy and Arrest", "Obstetrics", "Pregnancy", "immediate CPR, perimortem cesarean delivery if pregnant, and factor replacement", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Ruptured Tubo-Ovarian Abscess with Diffuse Peritonitis", "Surgery", "Renal", "emergency laparoscopy or laparotomy, abscess drainage, and broad-spectrum antibiotics", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Traumatic Placental Abruption Following Motor Vehicle Collision", "Obstetrics", "Pregnancy", "emergency continuous cardiotocography monitoring and urgent delivery if distressed", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Hyperemesis Gravidarum with Severe Wernicke Encephalopathy Risk", "Obstetrics", "Pregnancy", "intravenous thiamine replacement prior to starting intravenous dextrose fluids", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Pelvic Inflammatory Disease Severe with High Fever and Toxic Appearance", "Medicine", "Renal", "inpatient admission, intravenous ceftriaxone, doxycycline, and metronidazole", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 8. Metabolic & Endocrine Emergency - 10
    ("Hyperkalemia Severe 8.2 mmol/L with Sinusoidal ECG Changes", "Medicine", "Endocrine", "immediate intravenous calcium gluconate followed by insulin-dextrose and salbutamol", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Thyroid Storm with Hyperpyrexia, Agitation, and Tachyarrhythmia", "Medicine", "Endocrine", "propylthiouracil, potassium iodide, intravenous hydrocortisone, and esmolol", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Myxedema Coma in Elderly Patient with Hypothermia and Hypoventilation", "Medicine", "Endocrine", "intravenous hydrocortisone followed by loading dose intravenous levothyroxine", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Acute Hyponatremia 108 mmol/L with Active Seizures", "Medicine", "Endocrine", "prompt bolus of 100ml hypertonic 3% saline over ten minutes repeated up to three times", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Hypercalcemic Crisis with Serum Calcium 4.2 mmol/L and Lethargy", "Medicine", "Endocrine", "vigorous intravenous normal saline hydration, calcitonin, and zoledronic acid", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Euglycemic Diabetic Ketoacidosis Induced by SGLT2 Inhibitor", "Medicine", "Endocrine", "intravenous dextrose fluids combined with continuous insulin infusion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Adrenal Crisis Following Abrupt Steroid Cessation", "Medicine", "Endocrine", "immediate intravenous hydrocortisone 100mg bolus and normal saline resuscitation", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Hypocalcemic Tetany with Prolonged QTc and Laryngeal Spasm", "Medicine", "Endocrine", "slow intravenous infusion of ten percent calcium gluconate under cardiac monitoring", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Lactic Acidosis Secondary to Metformin Accumulation in AKI", "Medicine", "Endocrine", "urgent continuous venovenous hemodiafiltration for metformin and acid clearance", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Refeeding Syndrome with Profound Hypophosphatemia and Muscle Weakness", "Medicine", "Endocrine", "intravenous sodium glycerophosphate replacement and slowing of refeeding caloric rate", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 9. Environmental, Bites & Stings - 10
    ("European Adder Vipera Berus Envenomation with Expanding Edema", "Medicine", "General Principles", "limb immobilization at heart level, analgesia, and specific ViperaTAb antivenom", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Deep Frostbite of Fingers with Cyanosis and Blisters", "Surgery", "Dermatology", "rapid active rewarming in circulating water 37-39C and iloprost infusion", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("High-Altitude Cerebral Edema HACE with Ataxia and Coma", "Medicine", "Nervous System", "immediate emergency descent, supplemental oxygen, and high-dose dexamethasone", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Decompression Sickness Type II with Paraplegia Following Scuba Diving", "Medicine", "Nervous System", "high-flow normobaric 100% oxygen and urgent transfer to hyperbaric recompression facility", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Near-Drowning Submersion with Severe Hypoxemia and Bilateral Infiltrates", "Medicine", "Respiratory", "early endotracheal intubation, high PEEP ventilation, and active warming", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Electrical Injury High-Voltage with Extensive Deep Muscle Necrosis", "Surgery", "Musculoskeletal", "aggressive fluid resuscitation targeting urine output 1-2 ml/kg/hr and fasciotomy", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Marine Sting from Weever Fish with Excruciating Foot Pain", "Medicine", "General Principles", "hot water immersion 40-45C to denature heat-labile venom and analgesia", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Chemical Eye Injury Concentrated Alkali Splash with Limbal Blanching", "Surgery", "General Principles", "immediate copious irrigation with normal saline until ocular surface pH normalizes", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Severe Carbon Monoxide Poisoning in Pregnant Patient with 25% COHb", "Medicine", "General Principles", "immediate hyperbaric oxygen therapy to prevent fetal hypoxia and neurological injury", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Acute Radiation Syndrome High-Dose Whole Body Exposure", "Medicine", "Hematology", "protective reverse isolation, cytokine G-CSF support, and fluid-electrolyte resuscitation", "RCEM Guidelines", "https://rcem.ac.uk"),

    # 10. Medicolegal & Clinical Governance - 10
    ("Competent Patient Refusing Blood Products in Severe Trauma", "Ethics", "General Principles", "respecting patient autonomy, documenting decision, and utilizing non-blood resuscitation", "RCEM Clinical Governance Guidelines", "https://rcem.ac.uk"),
    ("Needlestick Injury from Hepatitis B Unknown Source in ED Nurse", "Microbiology", "General Principles", "immediate wound washing, accelerated hepatitis B vaccine booster, and source testing", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Major Incident Response Mass Casualty Triage Sieve Protocol", "Surgery", "General Principles", "rapid categorical triage into Priority 1 Immediate, Priority 2 Urgent, Priority 3 Delayed", "RCEM Major Incident Guidelines", "https://rcem.ac.uk"),
    ("Safeguarding Vulnerable Adult with Unexplained Pressure Ulcers and Malnutrition", "Ethics", "General Principles", "formal statutory safeguarding adult referral and multidisciplinary hospital admission", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Restraint and De-Escalation in Severely Aggressive Psychotic Patient", "Psychiatry", "Behavioral Health", "verbal de-escalation, minimal proportional physical restraint, and rapid tranquilization", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Emergency Department Crowding and Corridor Care Safety Management", "Medicine", "General Principles", "full capacity protocol activation, rapid offload, and clinical escalation to hospital executive", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Disclosing Fatal Clinical Misadventure to Bereaved Relatives", "Ethics", "General Principles", "duty of candour open disclosure, compassionate communication, and coronial referral", "GMC Guidance", "https://www.gmc-uk.org"),
    ("Management of Presumed Drug Courier Body Packer in Emergency", "Medicine", "Gastrointestinal", "whole-gut lavage with polyethylene glycol and urgent surgical consultation if toxic", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Child Presenting with Unexplained Subdural Hematoma and Retinal Hemorrhages", "Pediatrics", "Nervous System", "urgent multi-agency child protection referral and ophthalmological photographic survey", "RCEM Guidelines", "https://rcem.ac.uk"),
    ("Capacity Assessment in Intoxicated Head Injured Patient Demanding Discharge", "Ethics", "General Principles", "assessment under common law doctrine of necessity to detain for life-saving investigation", "RCEM Guidelines", "https://rcem.ac.uk")
]

SMLE_TOPICS = [
    # 1. Cardiovascular - 10
    ("Atherosclerotic Coronary Artery Disease in Saudi Diabetic Patient", "Medicine", "Cardiovascular", "guideline-directed medical therapy, high-intensity rosuvastatin, and SGLT2 inhibitor", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Acute STEMI Door-to-Balloon Strategy in Riyadh Tertiary Center", "Medicine", "Cardiovascular", "primary percutaneous coronary intervention within ninety minutes of medical contact", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Rheumatic Mitral Regurgitation with Severe Left Ventricular Dilatation", "Surgery", "Cardiovascular", "surgical mitral valve repair or replacement before ejection fraction drops below sixty", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Hypertensive Emergency with Acute Pulmonary Edema in SMLE Candidate Review", "Medicine", "Cardiovascular", "intravenous nitroglycerin infusion combined with intravenous loop diuretic furosemide", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Atrial Fibrillation with High Stroke Risk in Saudi Elderly Female", "Medicine", "Cardiovascular", "direct oral anticoagulant therapy with apixaban or rivaroxaban based on renal function", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Hypertrophic Cardiomyopathy with Family History of Sudden Cardiac Death", "Medicine", "Cardiovascular", "implantable cardioverter-defibrillator placement and genetic counseling for relatives", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Infective Endocarditis on Bicuspid Aortic Valve with Streptococcus Viridans", "Medicine", "Cardiovascular", "intravenous benzylpenicillin or ceftriaxone monotherapy for four weeks", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Abdominal Aortic Aneurysm Exceeding 5.5cm in Asymptomatic Male", "Surgery", "Cardiovascular", "elective endovascular aneurysm repair EVAR or open surgical graft replacement", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),
    ("Constrictive Pericarditis Secondary to Old Tuberculosis Infection", "Surgery", "Cardiovascular", "surgical pericardiectomy stripping of fibrotic calcified pericardium", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Patent Ductus Arteriosus in Young Saudi Adult with Left Heart Volume Overload", "Pediatrics", "Cardiovascular", "percutaneous transcatheter device closure of the ductus arteriosus", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),

    # 2. Respiratory - 10
    ("Middle East Respiratory Syndrome Coronavirus MERS-CoV Infection", "Microbiology", "Respiratory", "strict airborne isolation, supportive intensive care, and infection prevention reporting", "Saudi Ministry of Health Guidelines", "https://moh.gov.sa"),
    ("Community-Acquired Pneumonia Severe CURB-65 Score 4 in Hajj Pilgrim", "Medicine", "Respiratory", "intravenous piperacillin-tazobactam combined with levofloxacin and isolation", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Pulmonary Tuberculosis in Expatriate Worker Pre-Employment Screening", "Microbiology", "Respiratory", "standard four-drug anti-tubercular therapy and mandatory public health notification", "Saudi Ministry of Health Guidelines", "https://moh.gov.sa"),
    ("Bronchial Asthma Uncontrolled on High-Dose ICS-LABA", "Medicine", "Respiratory", "add-on biological therapy with anti-IgE omalizumab or anti-IL-5 mepolizumab", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Chronic Obstructive Pulmonary Disease with Frequent Acute Exacerbations", "Medicine", "Respiratory", "triple inhaler therapy with LAMA, LABA, and inhaled corticosteroid", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Idiopathic Pulmonary Fibrosis with Honeycombing on High-Resolution CT", "Medicine", "Respiratory", "oral antifibrotic therapy with pirfenidone or nintedanib to slow progression", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Pulmonary Embolism Intermediate-High Risk with Right Ventricular Strain", "Medicine", "Respiratory", "therapeutic low-molecular-weight heparin anticoagulation and close hemodynamic observation", "Saudi Heart Association Guidelines", "https://saudi-heart.org"),
    ("Obstructive Sleep Apnea Severe with Daytime Somnolence in Obese Patient", "Medicine", "Respiratory", "nocturnal continuous positive airway pressure CPAP and bariatric surgery review", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Sarcoidosis with Bilateral Hilar Lymphadenopathy and Erythema Nodosum", "Medicine", "Respiratory", "conservative observation or short course of oral corticosteroids for disabling symptoms", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),
    ("Bronchiectasis with Chronic Pseudomonas Colonization in Saudi Adult", "Microbiology", "Respiratory", "long-term inhaled colistin or tobramycin maintenance and chest physiotherapy", "Saudi Thoracic Society Guidelines", "https://saudithoracic.org"),

    # 3. Gastrointestinal - 10
    ("Non-Alcoholic Steatohepatitis NASH Cirrhosis with Portal Hypertension", "Medicine", "Gastrointestinal", "weight reduction, GLP-1 receptor agonist therapy, and hepatocellular carcinoma screening", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Hepatocellular Carcinoma Single Lesion 3cm in Well-Compensated Cirrhosis", "Surgery", "Gastrointestinal", "surgical liver resection or percutaneous radiofrequency ablation with curative intent", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Choledocholithiasis with Acute Ascending Cholangitis Charcot Triad", "Surgery", "Gastrointestinal", "intravenous broad-spectrum antibiotics and emergency endoscopic biliary decompression", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Colorectal Adenocarcinoma Obstructing the Sigmoid Colon", "Surgery", "Gastrointestinal", "emergency self-expanding metallic stent placement or Hartmann procedure resection", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),
    ("Crohn Disease Ileocolonic Active Stricturing Phenotype", "Medicine", "Gastrointestinal", "early biologics with anti-TNF infliximab and endoscopic balloon dilatation of stricture", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Celiac Disease with Iron Deficiency Anemia in Young Saudi Female", "Medicine", "Gastrointestinal", "strict lifelong gluten-free diet and oral iron supplementation", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Acute Pancreatitis Severe Necrotizing with Walled-Off Necrosis", "Surgery", "Gastrointestinal", "conservative step-up management with endoscopic transmural necrosectomy if infected", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Gastric Cancer Intestinal Type Infiltrating Subserosa T3N1", "Surgery", "Gastrointestinal", "perioperative FLOT chemotherapy and radical subtotal or total gastrectomy with D2 dissection", "Saudi Oncology Society Guidelines", "https://sos.org.sa"),
    ("Achalasia Cardia Classic Type II with Dysphagia to Solids and Liquids", "Surgery", "Gastrointestinal", "laparoscopic Heller myotomy with partial fundoplication or peroral endoscopic myotomy", "Saudi Gastroenterology Association", "https://sga.org.sa"),
    ("Hepatic Hydatid Cyst CE1 Unilocular with Hydatid Sand", "Surgery", "Gastrointestinal", "PAIR technique percutaneous aspiration and scolicidal injection under albendazole cover", "Saudi Gastroenterology Association", "https://sga.org.sa"),

    # 4. Renal & Genitourinary - 10
    ("Diabetic Kidney Disease with Macroalbuminuria in Saudi Type 2 Diabetic", "Medicine", "Renal", "SGLT2 inhibitor dapagliflozin combined with maximum tolerated dose ACE inhibitor", "Saudi Society of Nephrology and Transplantation", "https://ssnt.org.sa"),
    ("Lupus Nephritis Class IV with Active Glomerular Crescents", "Medicine", "Renal", "induction immunosuppression with mycophenolate mofetil and pulse methylprednisolone", "Saudi Society of Nephrology and Transplantation", "https://ssnt.org.sa"),
    ("Renal Stone Calcium Oxalate Exceeding 20mm in Renal Pelvis", "Surgery", "Renal", "percutaneous nephrolithotomy PCNL under general anesthesia", "Saudi Urological Association", "https://sua.org.sa"),
    ("Benign Prostatic Hyperplasia with Severe Lower Urinary Tract Symptoms", "Surgery", "Renal", "transurethral resection of prostate TURP or laser enucleation", "Saudi Urological Association", "https://sua.org.sa"),
    ("Autosomal Dominant Polycystic Kidney Disease in Young Saudi Male", "Genetics", "Renal", "rigorous blood pressure control below 120/80 and high fluid intake with tolvaptan evaluation", "Saudi Society of Nephrology and Transplantation", "https://ssnt.org.sa"),
    ("Renal Cell Carcinoma Clear Cell Subtype Confined to Kidney T1b", "Surgery", "Renal", "nephron-sparing partial nephrectomy with laparoscopic approach", "Saudi Urological Association", "https://sua.org.sa"),
    ("Acute Interstitial Nephritis Induced by Over-the-Counter Analgesic Use", "Pharmacology", "Renal", "immediate cessation of offending drug and oral corticosteroid therapy", "Saudi Society of Nephrology and Transplantation", "https://ssnt.org.sa"),
    ("Testicular Torsion with Severe Acute Scrotal Pain in Adolescent", "Surgery", "Renal", "emergency surgical scrotal exploration, detorsion, and bilateral orchiopexy", "Saudi Urological Association", "https://sua.org.sa"),
    ("Chronic Hemodialysis Arteriovenous Fistula Thrombosis", "Surgery", "Renal", "urgent surgical thrombectomy or endovascular balloon angioplasty to salvage access", "Saudi Society of Nephrology and Transplantation", "https://ssnt.org.sa"),
    ("Bladder Urothelial Carcinoma Non-Muscle Invasive High Grade Ta", "Surgery", "Renal", "transurethral resection of bladder tumor followed by intravesical BCG immunotherapy", "Saudi Urological Association", "https://sua.org.sa"),

    # 5. Endocrinology - 10
    ("Type 2 Diabetes Mellitus with Severe Obesity BMI 42 in Saudi Patient", "Medicine", "Endocrine", "metabolic bariatric surgery laparoscopic sleeve gastrectomy and GLP-1 agonist", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Hyperosmolar Hyperglycemic State with Blood Glucose Exceeding 45 mmol/L", "Medicine", "Endocrine", "gradual aggressive normal saline rehydration followed by low-dose insulin infusion", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Papillary Thyroid Microcarcinoma Confined to Right Thyroid Lobe", "Surgery", "Endocrine", "active ultrasound surveillance or thyroid lobectomy without routine neck dissection", "Saudi Oncology Society Guidelines", "https://sos.org.sa"),
    ("Primary Hyperparathyroidism with Osteoporosis and Hypercalciuria", "Surgery", "Endocrine", "minimally invasive parathyroidectomy guided by preoperative sestamibi localization", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Pituitary Prolactinoma Macroadenoma with Galactorrhea and Headache", "Medicine", "Endocrine", "dopamine agonist therapy with oral cabergoline titrated to prolactin normalization", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Adrenal Incidentaloma 4.5cm with Hounsfield Units Exceeding 20", "Surgery", "Endocrine", "laparoscopic adrenalectomy due to high risk of adrenocortical malignancy", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),
    ("Congenital Adrenal Hyperplasia 21-Hydroxylase Deficiency in Saudi Neonate", "Pediatrics", "Endocrine", "immediate fluid-electrolyte resuscitation and lifelong hydrocortisone/fludrocortisone", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Subacute Thyroiditis De Quervain Phase with Anterior Neck Tenderness", "Medicine", "Endocrine", "oral NSAIDs for mild symptoms or prednisolone taper for severe refractory pain", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Vitamin D Deficiency Severe with Hypocalcemia in Covered Saudi Female", "Biochemistry", "Endocrine", "high-dose oral cholecalciferol 50,000 IU weekly for eight weeks and calcium", "Saudi Diabetes and Endocrine Society", "https://sdes.org.sa"),
    ("Diabetic Foot Ulcer with Probe-to-Bone Positive Osteomyelitis", "Surgery", "Endocrine", "targeted broad-spectrum bone-penetrating antibiotics, surgical debridement, and offloading", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),

    # 6. Hematology - 10
    ("Sickle Cell Disease Vaso-Occlusive Pain Crisis in Saudi Eastern Province", "Medicine", "Hematology", "rapid opioid analgesia, intravenous hydration, supplemental oxygen, and incentive spirometry", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Sickle Cell Disease with Acute Splenic Sequestration in Toddler", "Pediatrics", "Hematology", "emergency careful packed red blood cell transfusion and hemodynamic stabilization", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Beta-Thalassemia Major with High Ferritin Requiring Iron Chelation", "Pediatrics", "Hematology", "daily oral iron chelation therapy with deferasirox and regular transfusion therapy", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("G6PD Deficiency Favism Crisis Following Fava Bean Ingestion", "Pediatrics", "Hematology", "supportive hydration, cessation of fava beans, and packed red cell transfusion if severe", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Immune Thrombocytopenia ITP in Adult with Platelets 12,000 and Petechiae", "Medicine", "Hematology", "oral dexamethasone 40mg daily for four days or oral prednisolone taper", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Deep Vein Thrombosis Following Bariatric Surgery Prophylaxis", "Surgery", "Hematology", "weight-adjusted low-molecular-weight heparin thromboprophylaxis and early ambulation", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),
    ("Multiple Myeloma Newly Diagnosed Transplant-Eligible in Saudi Adult", "Medicine", "Hematology", "induction therapy with bortezomib, lenalidomide, and dexamethasone VRd", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Hereditary Thrombophilia Factor V Leiden with Recurrent Venous Thrombosis", "Medicine", "Hematology", "indefinite direct oral anticoagulant DOAC therapy with apixaban or rivaroxaban", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Aplastic Anemia Acquired Severe in Young Saudi Adult", "Medicine", "Hematology", "allogeneic hematopoietic stem cell transplantation from matched sibling donor", "Saudi Society of Hematology", "https://ssha.org.sa"),
    ("Hemophilia B Christmas Disease with Spontaneous Knee Hemarthrosis", "Medicine", "Hematology", "recombinant factor IX concentrate infusion to achieve fifty percent target activity", "Saudi Society of Hematology", "https://ssha.org.sa"),

    # 7. Neurology - 10
    ("Acute Ischemic Stroke with NIHSS 14 Within Three Hours of Onset", "Neurology", "Nervous System", "intravenous recombinant tissue plasminogen activator alteplase and thrombectomy workup", "Saudi Stroke Association Guidelines", "https://saudistroke.com"),
    ("Multiple Sclerosis Relapsing-Remitting Active Disease with Optic Neuritis", "Neurology", "Nervous System", "intravenous methylprednisolone pulse therapy followed by disease-modifying therapy", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Parkinson Disease Initial Motor Symptoms Interfering with Daily Living", "Neurology", "Nervous System", "initiation of levodopa-carbidopa or dopamine receptor agonist therapy", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Generalized Epilepsy with Juvenile Myoclonic Epilepsy Pattern", "Neurology", "Nervous System", "first-line oral sodium valproate in males or levetiracetam in females of childbearing age", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Guillain-Barré Syndrome with Rising Arterial PCO2 and Vital Capacity Decline", "Neurology", "Nervous System", "intravenous immunoglobulin infusion and proactive elective endotracheal intubation", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Myasthenia Gravis with Bulbar Weakness and Dysphagia", "Neurology", "Nervous System", "oral pyridostigmine acetylcholinesterase inhibitor combined with oral prednisolone", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Normal Pressure Hydrocephalus Hakim Triad in Elderly Saudi Male", "Surgery", "Nervous System", "ventriculoperitoneal shunting following confirmatory CSF tap test improvement", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Spinal Epidural Abscess Presenting with Thoracic Back Pain and Fever", "Surgery", "Nervous System", "urgent MRI spine, blood cultures, emergency surgical decompression, and antibiotics", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Idiopathic Intracranial Hypertension in Obese Female with Papilledema", "Neurology", "Nervous System", "weight loss lifestyle program and oral carbonic anhydrase inhibitor acetazolamide", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),
    ("Alzheimer Dementia Mild to Moderate Cognitive Impairment", "Neurology", "Nervous System", "cholinesterase inhibitor donepezil or rivastigmine and family caregiver education", "Saudi Neurological Society Guidelines", "https://sns.org.sa"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Early Seropositive Symmetrical Polyarthritis", "Medicine", "Musculoskeletal", "combination disease-modifying therapy with methotrexate and short-course bridging steroids", "Saudi Osteoporosis and Rheumatism Society", "https://sors.org.sa"),
    ("Ankylosing Spondylitis with Bilateral Grade 3 Sacroiliitis on MRI", "Medicine", "Musculoskeletal", "continuous NSAID therapy and initiation of biologic TNF-alpha inhibitor", "Saudi Osteoporosis and Rheumatism Society", "https://sors.org.sa"),
    ("Systemic Lupus Erythematosus Active Flare with Malar Rash and Arthritis", "Medicine", "Musculoskeletal", "oral hydroxychloroquine maintenance combined with short-course oral prednisolone", "Saudi Osteoporosis and Rheumatism Society", "https://sors.org.sa"),
    ("Psoriasis Vulgaris Severe Plaque Type Covering 15% Body Surface Area", "Medicine", "Dermatology", "biologic therapy with IL-17 inhibitor secukinumab or IL-23 inhibitor risankizumab", "Saudi Society of Dermatology", "https://ssda.org.sa"),
    ("Atopic Dermatitis Moderate to Severe in Saudi Adolescent", "Medicine", "Dermatology", "targeted biological therapy with dupilumab and liberal emollient barrier creams", "Saudi Society of Dermatology", "https://ssda.org.sa"),
    ("Alopecia Areata Severe Patchy Loss of Scalp Hair", "Medicine", "Dermatology", "intralesional triamcinolone acetonide injections or oral JAK inhibitor baricitinib", "Saudi Society of Dermatology", "https://ssda.org.sa"),
    ("Osteoporosis with T-Score -3.2 and Recent Vertebral Compression Fracture", "Medicine", "Musculoskeletal", "subcutaneous teriparatide anabolic therapy followed by antiresorptive zoledronic acid", "Saudi Osteoporosis and Rheumatism Society", "https://sors.org.sa"),
    ("Septic Arthritis of Native Knee Joint with Methicillin-Resistant Staph Aureus", "Surgery", "Musculoskeletal", "emergency arthroscopic joint washout and intravenous vancomycin therapy", "Saudi Surgical Society Guidelines", "https://saudisurgical.org"),
    ("Anterior Cruciate Ligament Rupture with Pivot Shift in Young Athlete", "Surgery", "Musculoskeletal", "arthroscopic autologous hamstring or patellar tendon ACL reconstruction", "Saudi Orthopaedic Association", "https://soa.org.sa"),
    ("Femoral Neck Fracture Displaced Garden Stage IV in Active Elderly", "Surgery", "Musculoskeletal", "urgent total hip arthroplasty within twenty-four to forty-eight hours", "Saudi Orthopaedic Association", "https://soa.org.sa"),

    # 9. Pediatrics & Obstetrics - 10
    ("Gestational Diabetes Mellitus Refractory to Dietary Modification", "Obstetrics", "Pregnancy", "subcutaneous basal-bolus insulin therapy with fasting glucose target below 95", "Saudi Ministry of Health Maternal Health", "https://moh.gov.sa"),
    ("Severe Preeclampsia at Thirty-Five Weeks Gestation in Tertiary Center", "Obstetrics", "Pregnancy", "intravenous magnesium sulfate seizure prophylaxis and planned cesarean delivery", "Saudi Ministry of Health Maternal Health", "https://moh.gov.sa"),
    ("Postpartum Hemorrhage Secondary to Genital Tract Laceration", "Obstetrics", "Pregnancy", "prompt examination under anesthesia and surgical repair of vaginal wall tear", "Saudi Ministry of Health Maternal Health", "https://moh.gov.sa"),
    ("Rhesus Isoimmunization Prevention in Non-Sensitized Rh-Negative Mother", "Obstetrics", "Pregnancy", "anti-D immunoglobulin administration at twenty-eight weeks and within 72 hours post-delivery", "Saudi Ministry of Health Maternal Health", "https://moh.gov.sa"),
    ("Congenital Hypothyroidism Detected on Saudi National Newborn Screening", "Pediatrics", "Endocrine", "immediate initiation of oral levothyroxine tablets crushed in breast milk", "Saudi National Newborn Screening Programme", "https://moh.gov.sa"),
    ("Croup Acute Laryngotracheobronchitis with Stridor at Rest", "Pediatrics", "Respiratory", "single dose oral dexamethasone and nebulized adrenaline for severe obstruction", "Saudi Pediatric Association Guidelines", "https://spa.org.sa"),
    ("Bronchiolitis in Infant with Moderate Subcostal Retractions", "Pediatrics", "Respiratory", "supportive therapy with nasal saline suctioning, hydration, and humidified oxygen", "Saudi Pediatric Association Guidelines", "https://spa.org.sa"),
    ("Kawasaki Disease with Prolonged High Fever and Cervical Adenopathy", "Pediatrics", "Cardiovascular", "intravenous immunoglobulin infusion 2g/kg and high-dose oral aspirin therapy", "Saudi Pediatric Association Guidelines", "https://spa.org.sa"),
    ("Neonatal Respiratory Distress Syndrome from Surfactant Deficiency", "Pediatrics", "Respiratory", "exogenous natural surfactant administration via endotracheal tube and nasal CPAP", "Saudi Pediatric Association Guidelines", "https://spa.org.sa"),
    ("Febrile Seizure Simple in Eighteen-Month-Old Toddler", "Pediatrics", "Nervous System", "parental reassurance, fever management education, and avoidance of anticonvulsants", "Saudi Pediatric Association Guidelines", "https://spa.org.sa"),

    # 10. Psychiatry, Ethics & Public Health - 10
    ("Major Depressive Disorder Severe in Postpartum Saudi Mother", "Psychiatry", "Behavioral Health", "breastfeeding-safe selective serotonin reuptake inhibitor sertraline and psychotherapy", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Generalized Anxiety Disorder Impairing Professional Functioning", "Psychiatry", "Behavioral Health", "cognitive behavioral therapy combined with oral escitalopram pharmacotherapy", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Informed Consent for Surgical Intervention under Saudi Law", "Ethics", "General Principles", "voluntary written consent from competent adult without requirement of guardian permission", "Saudi Ministry of Health Regulations", "https://moh.gov.sa"),
    ("Premarital Screening Program Mandatory for Sickle Cell and Thalassemia", "Ethics", "General Principles", "mandatory premarital genetic screening and non-directive counseling on reproductive risk", "Saudi Premarital Screening Programme", "https://moh.gov.sa"),
    ("End-of-Life Care and Do Not Resuscitate DNR Protocol under Islamic Bioethics", "Ethics", "General Principles", "consensus fatwa documentation of DNR order signed by three consultant physicians", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Patient Confidentiality and Electronic Health Record Access Control", "Ethics", "General Principles", "strict prohibition of viewing medical records of non-assigned patients without justification", "Saudi Ministry of Health Regulations", "https://moh.gov.sa"),
    ("Hajj Mass Gathering Health Regulations and Meningococcal Vaccination", "Microbiology", "General Principles", "mandatory quadrivalent meningococcal vaccination ACWY for all domestic and international pilgrims", "Saudi Ministry of Health Hajj Guidelines", "https://moh.gov.sa"),
    ("Bipolar I Disorder Acute Manic Episode with Grandiosity and Insomnia", "Psychiatry", "Behavioral Health", "second-generation atypical antipsychotic quetiapine or mood stabilizer valproate", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Obsessive-Compulsive Disorder with Religious Scrupulosity Obsessions", "Psychiatry", "Behavioral Health", "culturally sensitive cognitive behavioral therapy and high-dose SSRI therapy", "Saudi Commission for Health Specialties Guidelines", "https://scfhs.org.sa"),
    ("Reporting Child Maltreatment and Abuse to National Child Protection Center", "Ethics", "General Principles", "mandatory immediate reporting of suspected physical or neglect abuse to child protection helpline 1919", "Saudi National Family Safety Program", "https://nfsp.gov.sa")
]

UHS_MBBS_TOPICS = [
    # 1. Cardiovascular - 10
    ("Mitral Stenosis Rheumatic Etiology with Malar Flush and Opening Snap", "Medicine", "Cardiovascular", "percutaneous transvenous mitral commissurotomy PTMC or surgical commissurotomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Inferior STEMI with Third-Degree Atrioventricular Block", "Medicine", "Cardiovascular", "immediate primary PCI or streptokinase thrombolysis and temporary transvenous pacing", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Subacute Bacterial Endocarditis with Osler Nodes and Roth Spots", "Microbiology", "Cardiovascular", "blood cultures prior to antimicrobials followed by prolonged intravenous penicillin-gentamicin", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Aortic Regurgitation with Collapsing Waterhammer Pulse and Wide Pulse Pressure", "Medicine", "Cardiovascular", "afterload reduction with ACE inhibitors and elective surgical aortic valve replacement", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Ventricular Septal Defect Congenital with Left-to-Right Shunting", "Pediatrics", "Cardiovascular", "surgical patch closure if hemodynamically significant or pulmonary hypertension develops", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Hypertensive Emergency with Acute Left Ventricular Failure", "Medicine", "Cardiovascular", "intravenous nitroglycerin infusion, furosemide, and non-invasive positive pressure ventilation", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Atrial Septal Defect Secundum Type with Fixed Split Second Heart Sound", "Medicine", "Cardiovascular", "percutaneous transcatheter Amplatzer septal occluder device closure", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Coarctation of Aorta with Radiofemoral Delay and Rib Notching", "Surgery", "Cardiovascular", "balloon angioplasty with endovascular stent placement or surgical resection", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Cardiac Tamponade Beck Triad Hypotension, Muffled Sounds, JVD", "Surgery", "Cardiovascular", "emergency ultrasound-guided subxiphoid pericardiocentesis with needle aspiration", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Deep Vein Thrombosis Involving Iliofemoral Segment with Phlegmasia", "Surgery", "Cardiovascular", "low-molecular-weight heparin anticoagulation and catheter-directed thrombolysis consideration", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 2. Respiratory - 10
    ("Pulmonary Tuberculosis with Cavitary Apical Lesions on Chest Radiograph", "Microbiology", "Respiratory", "standard four-drug fixed-dose combination therapy under DOTS strategy for six months", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Tuberculous Pleural Effusion with Exudative Lymphocytic Fluid", "Microbiology", "Respiratory", "complete course of anti-tubercular therapy and therapeutic pleural aspiration for dyspnea", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Bronchial Asthma Acute Severe Attack with PEFR Below 50%", "Medicine", "Respiratory", "continuous nebulized beta-2 agonists, ipratropium, high-flow oxygen, and IV hydrocortisone", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Community-Acquired Pneumonia with Rust-Colored Sputum Streptococcus", "Microbiology", "Respiratory", "oral or intravenous amoxicillin-clavulanate combined with macrolide clarithromycin", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Bronchiectasis with Tram-Track Sign and Finger Clubbing", "Medicine", "Respiratory", "daily chest physiotherapy with postural drainage, mucolytics, and targeted antibiotics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Tension Pneumothorax with Hyperresonance and Tracheal Deviation", "Surgery", "Respiratory", "immediate emergency needle decompression in second intercostal space followed by chest tube", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Chronic Cor Pulmonale Secondary to Chronic Obstructive Pulmonary Disease", "Medicine", "Respiratory", "long-term domiciliary oxygen therapy, optimized bronchodilators, and loop diuretics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Lung Abscess Right Lower Lobe Secondary to Aspiration", "Microbiology", "Respiratory", "prolonged oral clindamycin or co-amoxiclav therapy for four to six weeks", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Bronchogenic Carcinoma Small Cell Type with Superior Vena Cava Syndrome", "Medicine", "Respiratory", "emergency mediastinal radiation therapy or combination platinum-based chemotherapy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Empyema Thoracis with Frank Pus on Thoracocentesis", "Surgery", "Respiratory", "closed tube thoracostomy with underwater seal and intravenous broad-spectrum antimicrobials", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 3. Gastrointestinal - 10
    ("Acute Appendicitis Classic Presentation with McBurney Point Tenderness", "Surgery", "Gastrointestinal", "emergency appendectomy open or laparoscopic following fluid resuscitation", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Intestinal Perforation in Enteric Typhoid Fever at Terminal Ileum", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy with primary double-layer closure or exteriorization", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Calculous Cholecystitis with Positive Sonographic Murphy Sign", "Surgery", "Gastrointestinal", "intravenous fluids, antibiotics, analgesics, and laparoscopic cholecystectomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Bleeding Esophageal Varices in Hepatitis C Cirrhosis", "Medicine", "Gastrointestinal", "intravenous octreotide infusion, broad-spectrum antibiotics, and endoscopic band ligation", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Intestinal Obstruction Secondary to Postoperative Adhesions", "Surgery", "Gastrointestinal", "nasogastric tube decompression, IV fluid resuscitation, and surgery if strangulation signs", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Hydatid Cyst of Liver with Water-Lily Sign on Ultrasound", "Surgery", "Gastrointestinal", "preoperative oral albendazole followed by PAIR drainage or open cystectomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Duodenal Ulcer Perforation with Free Gas Under Diaphragm", "Surgery", "Gastrointestinal", "emergency exploratory laparotomy and Graham omental patch repair with peritoneal lavage", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Carcinoma of the Esophagus Squamous Cell Mid-Thoracic", "Surgery", "Gastrointestinal", "neoadjuvant chemoradiotherapy followed by subtotal esophagectomy with gastric pull-up", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Liver Abscess Amebic Presentation with Anchovy Sauce Pus", "Microbiology", "Gastrointestinal", "oral metronidazole 800mg thrice daily for ten days and therapeutic aspiration if large", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Congenital Hypertrophic Pyloric Stenosis in Six-Week Male Infant", "Surgery", "Gastrointestinal", "fluid resuscitation and hypochloremic alkalosis correction followed by Ramstedt pyloromyotomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 4. Renal & Genitourinary - 10
    ("Acute Post-Streptococcal Glomerulonephritis with Smoky Cola-Colored Urine", "Pediatrics", "Renal", "bed rest, dietary salt restriction, loop diuretic furosemide, and oral penicillin", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Nephrotic Syndrome Minimal Change Glomerulonephritis in Child", "Pediatrics", "Renal", "oral prednisolone induction at 60mg per square meter daily for six consecutive weeks", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Renal Failure Post-Renal Obstructive Calculus Anuria", "Surgery", "Renal", "emergency bilateral double-J stenting or percutaneous nephrostomy to restore urine flow", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Benign Prostatic Hyperplasia with Recurrent Acute Urinary Retention", "Surgery", "Renal", "transurethral resection of the prostate TURP following preliminary catheterization", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Renal Cell Carcinoma Triad Flank Pain, Hematuria, and Palpable Mass", "Surgery", "Renal", "radical nephrectomy including Gerota fascia, adrenal gland, and regional lymph nodes", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Ureteral Calculus 8mm Impacted at Vesicoureteral Junction", "Surgery", "Renal", "ureterorenoscopy URS with holmium laser lithotripsy and stent placement", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Testicular Torsion with Sudden Onset Severe Scrotal Pain and Negative Prehn Sign", "Surgery", "Renal", "emergency scrotal exploration within six hours, detorsion, and bilateral orchiopexy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Carcinoma of the Urinary Bladder Muscle-Invasive Transitional Cell", "Surgery", "Renal", "radical cystectomy with bilateral pelvic lymphadenectomy and urinary diversion", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Chronic Renal Failure with Uremic Encephalopathy and Pericardial Friction Rub", "Medicine", "Renal", "emergency hemodialysis via temporary central venous dialysis catheter", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Renal Tuberculosis with Sterile Pyuria and Frequency of Micturition", "Microbiology", "Renal", "full six to nine-month anti-tubercular therapy to eradicate Mycobacterium tuberculosis", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 5. Endocrinology - 10
    ("Diabetic Ketoacidosis with Kussmaul Breathing and Fruity Breath Odor", "Medicine", "Endocrine", "intravenous normal saline resuscitation, regular insulin infusion, and potassium replacement", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Hyperosmolar Non-Ketotic Coma in Elderly Type 2 Diabetic", "Medicine", "Endocrine", "gradual isotonic fluid resuscitation, low-dose insulin infusion, and electrolyte monitoring", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Thyrotoxicosis Graves Disease with Exophthalmos and Pretibial Myxedema", "Medicine", "Endocrine", "antithyroid carbimazole therapy, beta-blocker propranolol, and radioactive iodine review", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Primary Hypothyroidism Hashimoto Thyroiditis with High TSH", "Medicine", "Endocrine", "lifelong oral levothyroxine replacement therapy with titration to normal serum TSH", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Papillary Thyroid Carcinoma Single Nodule with Microcalcifications", "Surgery", "Endocrine", "total thyroidectomy with central compartment lymph node dissection and radioiodine", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Primary Hyperparathyroidism with Osteitis Fibrosa Cystica and Renal Stones", "Surgery", "Endocrine", "surgical excision of solitary hyperfunctioning parathyroid adenoma", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Cushing Syndrome ACTH-Dependent Pituitary Adenoma", "Surgery", "Endocrine", "transsphenoidal surgical resection of the pituitary microadenoma", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Pheochromocytoma with Paroxysmal Hypertension, Headache, and Diaphoresis", "Surgery", "Endocrine", "preoperative alpha-adrenergic blockade with phenoxybenzamine followed by laparoscopic adrenalectomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Diabetic Foot Ulcer with Wet Gangrene and Ascending Cellulitis", "Surgery", "Endocrine", "emergency radical surgical debridement, broad-spectrum antibiotics, and glycemic control", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Addison Disease Autoimmune Adrenalitis with Hyperpigmentation and Hypotension", "Medicine", "Endocrine", "lifelong oral hydrocortisone combined with oral fludrocortisone replacement", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 6. Hematology - 10
    ("Beta-Thalassemia Major with Cooley Facies and Hepatosplenomegaly", "Pediatrics", "Hematology", "regular leukocyte-depleted packed red cell transfusions and daily oral iron chelation", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Iron Deficiency Anemia Severe with Microcytic Hypochromic Blood Film", "Medicine", "Hematology", "oral ferrous sulfate tablets with vitamin C and dietary investigation for occult blood", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Megaloblastic Anemia with Hypersegmented Neutrophils and Peripheral Neuropathy", "Medicine", "Hematology", "intramuscular cyanocobalamin vitamin B12 therapy combined with oral folic acid", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Aplastic Anemia Pancytopenia with Hypocellular Fat-Replaced Marrow", "Medicine", "Hematology", "bone marrow transplantation or antithymocyte globulin with cyclosporine immunosuppression", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Lymphoblastic Leukemia L1 FAB Type in Five-Year-Old Child", "Pediatrics", "Hematology", "multi-agent induction chemotherapy with vincristine, prednisolone, and L-asparaginase", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Chronic Myeloid Leukemia with Marked Splenomegaly and Philadelphia Chromosome", "Medicine", "Hematology", "targeted tyrosine kinase inhibitor imatinib mesylate oral therapy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Hemophilia A Factor VIII Deficiency with Recurrent Hemarthrosis", "Medicine", "Hematology", "recombinant factor VIII replacement therapy and avoid all intramuscular injections", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Immune Thrombocytopenic Purpura with Severe Cutaneous Petechiae and Purpura", "Medicine", "Hematology", "systemic oral corticosteroids and intravenous immunoglobulin for severe mucosal bleeding", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Multiple Myeloma CRAB Criteria Bone Pain, Renal Failure, Anemia, Hypercalcemia", "Medicine", "Hematology", "triplet chemotherapy with bortezomib, thalidomide, and dexamethasone VTD protocol", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Disseminated Intravascular Coagulation in Gram-Negative Septicemia", "Medicine", "Hematology", "vigorous treatment of sepsis, fresh frozen plasma, cryoprecipitate, and platelet transfusions", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 7. Neurology - 10
    ("Acute Bacterial Meningitis Neisseria Meningitidis with Petechial Rash", "Microbiology", "Nervous System", "intravenous ceftriaxone 2g twice daily combined with intravenous dexamethasone", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Tuberculous Meningitis Stage III with Coma and Cranial Nerve Palsies", "Microbiology", "Nervous System", "four-drug anti-tubercular therapy combined with high-dose intravenous dexamethasone", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Ischemic Stroke Middle Cerebral Artery Territory within 4.5 Hours", "Medicine", "Nervous System", "intravenous recombinant tissue plasminogen activator alteplase thrombolysis", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Subarachnoid Hemorrhage Ruptured Berry Aneurysm of Circle of Willis", "Surgery", "Nervous System", "urgent non-contrast CT head, oral nimodipine, and endovascular coiling or surgical clipping", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Extradural Hematoma Middle Meningeal Artery Tear with Lucid Interval", "Surgery", "Nervous System", "emergency neurosurgical burr-hole evacuation and craniotomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Status Epilepticus Continuous Seizures for Twenty Minutes in Emergency", "Medicine", "Nervous System", "intravenous diazepam or lorazepam followed by intravenous phenytoin infusion", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Guillain-Barré Syndrome Ascending Symmetrical Flaccid Quadriparesis", "Neurology", "Nervous System", "intravenous immunoglobulin infusion or plasmapheresis with forced vital capacity monitoring", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Myasthenia Gravis with Fatigable Bilateral Ptosis and Diplopia", "Neurology", "Nervous System", "oral pyridostigmine bromide therapy, oral prednisolone, and elective thymectomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Parkinson Disease Resting Pill-Rolling Tremor, Rigidity, and Bradykinesia", "Medicine", "Nervous System", "levodopa combined with peripheral decarboxylase inhibitor carbidopa", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Brain Abscess Frontal Lobe Secondary to Chronic Paranasal Sinusitis", "Surgery", "Nervous System", "burr-hole drainage or surgical excision combined with six weeks of intravenous antibiotics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 8. Musculoskeletal & Dermatology - 10
    ("Rheumatoid Arthritis Symmetrical Polyarthritis with Morning Stiffness", "Medicine", "Musculoskeletal", "disease-modifying antirheumatic drug methotrexate combined with folic acid", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Ankylosing Spondylitis Sacroiliitis with HLA-B27 Positivity", "Medicine", "Musculoskeletal", "daily non-steroidal anti-inflammatory drugs, spinal physical therapy, and anti-TNF biologics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Osteomyelitis of Proximal Tibia Metaphysis in Eight-Year-Old", "Surgery", "Musculoskeletal", "intravenous cloxacillin or flucloxacillin and surgical subperiosteal drilling if no response", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Septic Arthritis Native Hip Joint in Infant with Pseudoparalysis", "Surgery", "Musculoskeletal", "emergency arthrotomy joint washout and drainage with targeted intravenous antibiotics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Colles Fracture of Distal Radius Dinner-Fork Deformity", "Surgery", "Musculoskeletal", "closed reduction under regional hematoma block and below-elbow cast immobilization", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Anterior Dislocation of Shoulder Joint Following Abduction External Rotation", "Surgery", "Musculoskeletal", "closed reduction using Kocher or Hippocratic technique and sling immobilization", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Compartment Syndrome Anterior Tibial Compartment with Severe Pain on Passive Stretch", "Surgery", "Musculoskeletal", "emergency operative decompressive fasciotomy of all four leg compartments", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Scabies Infestation with Burrows in Interdigital Web Spaces", "Microbiology", "Dermatology", "topical 5% permethrin lotion applied to entire body below chin with simultaneous family treatment", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Pemphigus Vulgaris with Flaccid Bullae and Positive Nikolsky Sign", "Medicine", "Dermatology", "high-dose systemic oral corticosteroids combined with steroid-sparing azathioprine", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Leprosy Lepromatous Type with Lionine Facies and Globi of Acid-Fast Bacilli", "Microbiology", "Dermatology", "WHO multidrug therapy rifampicin, clofazimine, and dapsone for twelve months", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 9. Pediatrics & Obstetrics - 10
    ("Severe Acute Malnutrition Marasmus with Gross Muscle Wasting and Alert Facies", "Pediatrics", "General Principles", "careful therapeutic feeding with F-75 milk diet to prevent refeeding syndrome", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Kwashiorkor with Nutritional Edema, Flaky Paint Dermatosis, and Flag Sign Hair", "Pediatrics", "General Principles", "gradual nutritional rehabilitation with therapeutic diet, zinc, and broad-spectrum antibiotics", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Neonatal Tetanus in Unvaccinated Home Delivery with Risus Sardonicus", "Pediatrics", "Nervous System", "equine or human tetanus immunoglobulin, IV metronidazole, sedation, and supportive ICU care", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Acute Gastroenteritis with Severe Dehydration and Sunken Fontanelle", "Pediatrics", "Gastrointestinal", "immediate intravenous Ringer lactate resuscitation 100ml/kg under WHO Plan C guidelines", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Eclampsia with Tonic-Clonic Seizures in Primigravida at 34 Weeks", "Obstetrics", "Pregnancy", "intravenous and intramuscular loading dose magnesium sulfate Pritchard regimen and delivery", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Placenta Previa Complete Type IV with Painless Bright Red Vaginal Bleeding", "Obstetrics", "Pregnancy", "hospitalization, bed rest, blood crossmatched, and elective or emergency cesarean section", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Abruptio Placentae Accidental Hemorrhage with Woody Hard Tender Uterus", "Obstetrics", "Pregnancy", "urgent intravenous fluid resuscitation, continuous fetal monitoring, and emergency delivery", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Postpartum Hemorrhage Primary Secondary to Uterine Atony", "Obstetrics", "Pregnancy", "bimanual uterine compression massage, intravenous oxytocin infusion, and ergometrine", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Ectopic Pregnancy Ruptured with Acute Hemoperitoneum and Shoulder Tip Pain", "Obstetrics", "Pregnancy", "emergency intravenous fluid resuscitation and immediate exploratory laparotomy with salpingectomy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Vesicovaginal Fistula Following Prolonged Obstructed Labor", "Surgery", "Renal", "conservative catheter drainage if fresh or delayed surgical repair after tissue healing", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),

    # 10. Psychiatry, Ethics & Forensic Medicine - 10
    ("Schizophrenia Paranoid Type with Persecutory Delusions and Auditory Hallucinations", "Psychiatry", "Behavioral Health", "second-generation atypical antipsychotic risperidone or olanzapine oral therapy", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Bipolar Affective Disorder Severe Mania with Flight of Ideas and Hyperactivity", "Psychiatry", "Behavioral Health", "mood stabilizer lithium carbonate or sodium valproate combined with antipsychotic", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Organophosphate Insecticide Poisoning with Pinpoint Pupils and Secretions", "Pharmacology", "Nervous System", "intravenous atropine titration to therapeutic atropinization and pralidoxime", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Corrosive Acid Ingestion Burns of Lips, Oral Cavity, and Esophagus", "Surgery", "Gastrointestinal", "supportive airway maintenance, analgesia, and avoid all induced vomiting or gastric lavage", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Snakebite Russell Viper Envenomation with Non-Clotting Blood", "Medicine", "Hematology", "immediate intravenous polyvalent anti-snake venom ASV administration and supportive care", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Drowning Postmortem Findings with Froth at Mouth and Diatoms in Bone Marrow", "Pathology", "General Principles", "comprehensive forensic autopsy documenting inhalation of fluid and diatom recovery", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Hanging Death with Oblique Incomplete Ligature Mark Above Thyroid Cartilage", "Pathology", "General Principles", "forensic differentiation between suicidal hanging and homicidal strangulation", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Firearm Injury Contact Shot with Muzzle Impression and Carbon Soot", "Surgery", "General Principles", "wound debridement, forensic preservation of clothing and ballistic evidence, and surgery", "UHS MBBS Final Professional Guidelines", "https://uhs.edu.pk"),
    ("Medical Negligence Res Ipsa Loquitur Left Mop in Abdomen Following Cesarean", "Ethics", "General Principles", "professional misconduct liability, civil compensation, and corrective surgical intervention", "Pakistan Medical and Dental Council Code", "https://pmdc.pk"),
    ("Professional Secrecy and Privileged Communication in Medico-Legal Examination", "Ethics", "General Principles", "statutory duty to assist court of law while maintaining ethical confidentiality standards", "Pakistan Medical and Dental Council Code", "https://pmdc.pk")
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
    validate_topics(MRCEM_TOPICS, "MRCEM")
    validate_topics(SMLE_TOPICS, "SMLE")
    validate_topics(UHS_MBBS_TOPICS, "UHS MBBS")
    
    out_file = os.path.join(os.path.dirname(__file__), "mega78_topics_b.py")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("# Generated Mega-Batch 78 Topics Part B\n\n")
        f.write(f"MRCEM_TOPICS = {repr(MRCEM_TOPICS)}\n\n")
        f.write(f"SMLE_TOPICS = {repr(SMLE_TOPICS)}\n\n")
        f.write(f"UHS_MBBS_TOPICS = {repr(UHS_MBBS_TOPICS)}\n")
    print(f"Successfully wrote {out_file}!")
