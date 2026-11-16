# scripts/write_mega25_part_b.py
"""
Generates scripts/mega25_part_b.py with 250 high-yield clinical topics:
- 50 NLE Part 2 (batch-intl-113, intl-10423 to intl-10472)
- 100 MRCEM (batch-intl-114, intl-10473 to intl-10572)
- 100 SMLE (batch-intl-115, intl-10573 to intl-10672)
"""

content = '''# scripts/mega25_part_b.py
# 250 clinically authentic topics for Mega-Batch 25 (Part B)
# Covers: NLE Part 2 (50), MRCEM (100), SMLE (100)

TOPICS_PART_B = [
    # -------------------------------------------------------------------------
    # NLE Part 2 (50 questions: intl-10423 to intl-10472)
    # Pakistan National Licensing Examination Clinical Disciplines
    # -------------------------------------------------------------------------
    {"exam": "nle", "subject": "Pharmacology", "system": "Cardiovascular", "topic": "ACE inhibitors mechanism of action, bradykinin accumulation cough and angioedema risk"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Cardiovascular", "topic": "Beta-blocker cardioselectivity metoprolol vs non-selective propranolol bronchospasm warning"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Cardiovascular", "topic": "Digoxin toxicity cardiac glycoside visual disturbance blurred yellow vision and hyperkalemia"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Renal", "topic": "Loop diuretics furosemide thick ascending limb Na-K-2Cl cotransporter inhibition and ototoxicity"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Renal", "topic": "Thiazide diuretics hydrochlorothiazide distal convoluted tubule Na-Cl inhibition and hypercalcemia"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Endocrine", "topic": "Metformin biguanide mechanism mitochondrial complex 1 inhibition and lactic acidosis risk"},
    {"exam": "nle", "subject": "Pharmacology", "system": "Endocrine", "topic": "Sulfonylureas glimepiride ATP-sensitive potassium channel closure and hypoglycemia risk"},
    {"exam": "nle", "subject": "Pharmacology", "system": "General Principles", "topic": "Penicillins beta-lactam ring transpeptidase inhibition and hypersensitivity type 1 reactions"},
    {"exam": "nle", "subject": "Pharmacology", "system": "General Principles", "topic": "Aminoglycosides gentamicin 30S ribosomal subunit inhibition nephrotoxicity and ototoxicity"},
    {"exam": "nle", "subject": "Pharmacology", "system": "General Principles", "topic": "Fluoroquinolones ciprofloxacin DNA gyrase topoisomerase II inhibition tendon rupture caution"},

    {"exam": "nle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Acute ST-elevation myocardial infarction anterior wall V1-V4 LAD occlusion primary PCI timing"},
    {"exam": "nle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Atrial fibrillation stroke risk stratification CHA2DS2-VASc score and direct oral anticoagulation"},
    {"exam": "nle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Essential hypertension first-line monotherapy guidelines based on age and ethnic group"},
    {"exam": "nle", "subject": "Medicine", "system": "Respiratory", "topic": "Community-acquired pneumonia CURB-65 severity score guiding outpatient vs inpatient admission"},
    {"exam": "nle", "subject": "Medicine", "system": "Respiratory", "topic": "Bronchial asthma acute severe attack peak expiratory flow under 50 percent nebulized salbutamol-ipratropium"},
    {"exam": "nle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Gastroesophageal reflux disease alarm symptoms requiring urgent esophagogastroduodenoscopy"},
    {"exam": "nle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Acute viral hepatitis B acute infection surface antigen HBsAg and IgM anti-HBc diagnostic role"},
    {"exam": "nle", "subject": "Medicine", "system": "Endocrine", "topic": "Type 2 diabetes mellitus initial management lifestyle plus metformin and HbA1c monitoring"},
    {"exam": "nle", "subject": "Medicine", "system": "Endocrine", "topic": "Primary hypothyroidism Hashimoto thyroiditis elevated TSH low free T4 and levothyroxine replacement"},
    {"exam": "nle", "subject": "Medicine", "system": "Renal", "topic": "Urinary tract infection acute uncomplicated cystitis in young female empirical nitrofurantoin"},

    {"exam": "nle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Acute appendicitis McBurney point tenderness Rovsing sign and Alvarado score criteria"},
    {"exam": "nle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Acute cholecystitis ultrasonographic sonographic Murphy sign gallbladder wall thickening"},
    {"exam": "nle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Inguinal hernia indirect vs direct anatomical relationship to inferior epigastric vessels"},
    {"exam": "nle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Small bowel obstruction adhesive etiology abdominal X-ray multiple air-fluid levels"},
    {"exam": "nle", "subject": "Surgery", "system": "General Principles", "topic": "Surgical site infection CDC classification superficial, deep incisional, and organ space"},
    {"exam": "nle", "subject": "Surgery", "system": "Cardiovascular", "topic": "Peripheral arterial disease intermittent claudication ankle-brachial index ABI under 0.9"},
    {"exam": "nle", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Colles fracture distal radius dorsal displacement dinner fork deformity closed reduction"},
    {"exam": "nle", "subject": "Surgery", "system": "General Principles", "topic": "Burns Parkland formula fluid resuscitation in thermal burns 4 mL per kg per percent TBSA"},
    {"exam": "nle", "subject": "Surgery", "system": "Renal", "topic": "Acute urinary retention in benign prostatic hyperplasia Foley catheterization and tamsulosin"},
    {"exam": "nle", "subject": "Surgery", "system": "General Principles", "topic": "Preoperative assessment ASA physical status classification risk stratification before elective surgery"},

    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Normal antenatal care schedule WHO model ultrasound dating and routine iron-folic acid"},
    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Antepartum hemorrhage placenta previa painless bright red vaginal bleeding and avoidance of digital exam"},
    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Antepartum hemorrhage placental abruption painful dark uterine bleeding and hypertonic uterus"},
    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Gestational diabetes mellitus oral glucose tolerance test screening at 24-28 weeks gestation"},
    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Preeclampsia diagnostic criteria hypertension with proteinuria or end-organ dysfunction after 20 weeks"},
    {"exam": "nle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Active management of third stage of labor routine intramuscular oxytocin for PPH prevention"},
    {"exam": "nle", "subject": "Obstetrics", "system": "General Principles", "topic": "Pelvic inflammatory disease clinical diagnosis cervical motion tenderness and doxycycline-ceftriaxone"},
    {"exam": "nle", "subject": "Obstetrics", "system": "General Principles", "topic": "Cervical cancer screening Pap smear cervical cytology and high-risk HPV DNA testing guidelines"},
    {"exam": "nle", "subject": "Obstetrics", "system": "General Principles", "topic": "Polycystic ovary syndrome Rotterdam criteria hyperandrogenism, ovulatory dysfunction, polycystic ovaries"},
    {"exam": "nle", "subject": "Obstetrics", "system": "General Principles", "topic": "Combined oral contraceptive pill contraindications smoking over age 35, migraine with aura, history of DVT"},

    {"exam": "nle", "subject": "Pediatrics", "system": "General Principles", "topic": "Expanded Programme on Immunization EPI schedule Pakistan birth doses BCG, OPV-0, Hepatitis B"},
    {"exam": "nle", "subject": "Pediatrics", "system": "General Principles", "topic": "Neonatal jaundice physiologic vs pathologic criteria jaundice appearing within first 24 hours"},
    {"exam": "nle", "subject": "Pediatrics", "system": "General Principles", "topic": "Acute watery diarrhea in toddler dehydration assessment WHO Plan A, Plan B, and Plan C oral rehydration"},
    {"exam": "nle", "subject": "Pediatrics", "system": "Respiratory", "topic": "Pneumonia in child under 5 years tachypnea chest indrawing WHO IMNCI clinical guidelines"},
    {"exam": "nle", "subject": "Pediatrics", "system": "Nervous System", "topic": "Febrile seizure simple vs complex criteria brief generalized seizure under 15 minutes"},
    {"exam": "nle", "subject": "Ethics", "system": "General Principles", "topic": "Doctor-patient confidentiality exceptions mandatory reporting of communicable diseases and gunshot wounds"},
    {"exam": "nle", "subject": "Ethics", "system": "General Principles", "topic": "Medical negligence tort law four elements duty of care, breach of duty, causation, damages"},
    {"exam": "nle", "subject": "Ethics", "system": "General Principles", "topic": "Patient autonomy and right to refuse blood transfusion in competent adult Jehovah's Witness"},
    {"exam": "nle", "subject": "Biostatistics", "system": "General Principles", "topic": "Study designs randomized controlled trial vs cohort study vs case-control study relative hierarchy"},
    {"exam": "nle", "subject": "Biostatistics", "system": "General Principles", "topic": "Type I alpha error false positive vs Type II beta error false negative in hypothesis testing"},

    # -------------------------------------------------------------------------
    # MRCEM (100 questions: intl-10473 to intl-10572)
    # Royal College of Emergency Medicine Primary & Intermediate Focus
    # -------------------------------------------------------------------------
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Cardiac arrest ALS algorithm shockable rhythm VF/pVT amiodarone timing after third shock"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Cardiac arrest non-shockable rhythm PEA/asystole 4Hs and 4Ts reversible cause identification"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Hemodynamically unstable supraventricular tachycardia synchronized electrical cardioversion energy"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Hemodynamically stable regular narrow complex SVT modified Valsalva maneuver followed by adenosine"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Acute pulmonary embolism high risk with hemodynamic collapse systemic thrombolysis with alteplase"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Cardiac tamponade Beck triad and emergency ultrasound-guided subxiphoid pericardiocentesis"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Severe aortic stenosis presentation with exertional syncope avoidance of aggressive nitrates"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Acute decompensated heart failure with cardiogenic shock norepinephrine vs dobutamine selection"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Right ventricular infarction inferior STEMI hypotension worsened by nitroglycerin fluid bolus rescue"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Torsades de pointes polymorphic ventricular tachycardia prolonged QT intravenous magnesium sulfate"},

    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Tension pneumothorax clinical diagnosis emergent finger thoracostomy vs needle thoracocentesis"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Massive hemothorax emergent chest tube placement and thoracotomy criteria over 1500 mL initial drainage"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Near-fatal asthma silent chest exhaustion emergent rapid sequence intubation with ketamine"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Acute smoke inhalation thermal supraglottic injury prophylactic early endotracheal intubation"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Foreign body airway obstruction adult choking conscious back blows and abdominal thrusts"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Cannot intubate cannot oxygenate CICO crisis emergency front-of-neck access scalpel bougie cricothyroidotomy"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Flail chest paradoxical chest wall movement analgesia multimodal thoracic epidural and ventilation"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "High altitude pulmonary edema descent oxygen and oral nifedipine or hyperbaric chamber"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Acute epiglottitis in adult thumbprint sign on lateral neck X-ray airway precautions and ceftriaxone"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Respiratory", "topic": "Acute anaphylaxis severe airway compromise intramuscular adrenaline 1:1000 0.5 mg anterolateral thigh"},

    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Polytrauma ATLS primary survey pelvic binder placement for open-book pelvic fracture"},
    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Knee dislocation high energy popliteal artery injury ankle-brachial index and CT angiography"},
    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Posterior hip dislocation shortened internally rotated leg emergent closed reduction within 6 hours"},
    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Anterior shoulder dislocation Kocher vs Cunningham technique closed reduction and neurovascular check"},
    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Scaphoid fracture clinical anatomical snuffbox tenderness initial normal X-ray immobilization and repeat MRI"},
    {"exam": "mrcem", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Open fracture wound coverage intravenous cefazolin and tetanus toxoid booster timing"},
    {"exam": "mrcem", "subject": "Surgery", "system": "General Principles", "topic": "Damage control resuscitation balanced blood product transfusion 1:1:1 PRBC, FFP, platelets and tranexamic acid"},
    {"exam": "mrcem", "subject": "Surgery", "system": "General Principles", "topic": "Trauma-induced coagulopathy viscoelastic testing thromboelastography TEG guiding targeted blood products"},
    {"exam": "mrcem", "subject": "Surgery", "system": "General Principles", "topic": "Blast injury primary blast wave hollow organ rupture blast lung vs secondary shrapnel injuries"},
    {"exam": "mrcem", "subject": "Surgery", "system": "General Principles", "topic": "Stab wound to anterior abdomen hemodynamic instability emergent exploratory laparotomy"},

    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Severe traumatic brain injury Glasgow Coma Scale under 8 rapid sequence intubation and target PaCO2 35-40"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Epidural hematoma lucid interval middle meningeal artery laceration biconvex lens on head CT"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Subdural hematoma bridging cortical veins crescentic hyperdense collection crossing suture lines"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Traumatic subarachnoid hemorrhage vs aneurysm rupture CT sensitivity within 6 hours of headache onset"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Spinal cord injury acute presentation neurogenic shock hypotension with bradycardia intravenous vasopressors"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Brown-Sequard syndrome hemicord hemisection ipsilateral motor/vibration loss and contralateral pain/temperature loss"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Central cord syndrome hyperextension injury in cervical spondylosis upper extremity motor weakness greater than lower"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Wernicke encephalopathy acute confusion, ataxia, ophthalmoplegia intravenous thiamine before glucose"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Transient ischemic attack ABCD2 risk stratification and urgent secondary stroke prevention within 24 hours"},
    {"exam": "mrcem", "subject": "Neurology", "system": "Nervous System", "topic": "Malignant middle cerebral artery infarction signs of uncal herniation and emergent decompressive hemicraniectomy"},

    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Opioid overdose severe respiratory depression intravenous naloxone titration to restore adequate breathing"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Tricyclic antidepressant overdose QRS prolongation over 100 ms intravenous sodium bicarbonate therapy"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Carbon monoxide poisoning cherry red skin carboxyhemoglobin level high-flow normobaric vs hyperbaric oxygen"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Cyanide toxicity industrial fire exposure lactic acidosis hydroxocobalamin antidote administration"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Iron acute poisoning in toddler severe vomiting and shock deferoxamine chelation and vin rose urine"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Digoxin toxicity cardiac arrhythmias and hyperkalemia digoxin-specific antibody Fab fragments indication"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Ethylene glycol poisoning calcium oxalate crystals in urine fomepizole and urgent hemodialysis"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Serotonin syndrome Hunter criteria clonus, hyperthermia, tremor cyproheptadine and sedation"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Neuroleptic malignant syndrome lead-pipe rigidity, hyperthermia, elevated CK dantrolene and bromocriptine"},
    {"exam": "mrcem", "subject": "Pharmacology", "system": "General Principles", "topic": "Lithium toxicity acute on chronic coarse tremor ataxia and emergent hemodialysis threshold"},

    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Septic shock Surviving Sepsis Campaign hour-1 bundle blood cultures, broad-spectrum antibiotics, lactate, crystalloid"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Severe hypothermia core temperature under 28 degrees active internal rewarming and ECMO resuscitation"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Exertional heat stroke core body temperature over 40 degrees with CNS dysfunction cold water immersion"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Near-drowning freshwater vs saltwater hypoxia management and mechanical ventilation with PEEP"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Electrical injury high voltage entrance and exit burns extensive deep muscle necrosis and rhabdomyolysis"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Rhabdomyolysis crush injury serum creatine kinase aggressive intravenous fluid resuscitation and urine alkalization"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Severe hyperkalemia ECG peaked T waves, widened QRS intravenous calcium gluconate for membrane stabilization"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Severe symptomatic hyponatremia seizures 3 percent hypertonic saline 100 mL bolus and sodium rise limit"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Decompression sickness the bends joint pains and neurologic symptoms hyperbaric chamber recompression"},
    {"exam": "mrcem", "subject": "Medicine", "system": "General Principles", "topic": "Snake envenomation hemotoxic vs neurotoxic Russell viper vs krait polyvalent antivenom administration"},

    {"exam": "mrcem", "subject": "Pediatrics", "system": "Respiratory", "topic": "Pediatric croup laryngotracheobronchitis barking cough stridor single dose oral dexamethasone and nebulized adrenaline"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Respiratory", "topic": "Pediatric foreign body airway obstruction infant back blows and chest thrusts avoidance of blind finger sweeps"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Cardiovascular", "topic": "Pediatric septic shock fluid-refractory shock peripheral cold shock epinephrine infusion vs warm shock norepinephrine"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Nervous System", "topic": "Status epilepticus in pediatric patient buccal midazolam pre-hospital and intravenous levetiracetam/phenytoin"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Cardiovascular", "topic": "Supraventricular tachycardia in infant heart rate over 220 rapid IV push adenosine with saline flush"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "General Principles", "topic": "Pediatric non-accidental trauma skeletal survey multiple fractures of varying ages and child protection referral"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Renal", "topic": "Hemolytic uremic syndrome classic Shiga toxin-producing E. coli avoidance of antibiotics and platelets"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Cardiovascular", "topic": "Tetralogy of Fallot hypercyanotic tet spell knee-chest position oxygen and intravenous morphine/propranolol"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Musculoskeletal", "topic": "Nursemaid elbow radial head subluxation hyperpronation technique for immediate reduction"},
    {"exam": "mrcem", "subject": "Pediatrics", "system": "Endocrine", "topic": "Diabetic ketoacidosis in child cerebral edema risk cautious fluid rehydration avoiding rapid osmolar drops"},

    {"exam": "mrcem", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Major trauma in pregnancy maternal resuscitation left lateral tilt to relieve aortocaval compression"},
    {"exam": "mrcem", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Perimortem Cesarean section PMCS within 4 minutes of maternal cardiac arrest in pregnancy over 20 weeks"},
    {"exam": "mrcem", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Eclampsia generalized tonic-clonic seizure intravenous magnesium sulfate loading and maintenance infusion"},
    {"exam": "mrcem", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Emergency delivery precipitate labor crowning delivery of fetal head and checking for nuchal cord"},
    {"exam": "mrcem", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Cord prolapse obstetric emergency elevate presenting part manual elevation and emergency Cesarean"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Point-of-care ultrasound eFAST exam identification of hemoperitoneum in right upper quadrant Morrison pouch"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Boerhaave syndrome spontaneous esophageal rupture left pleural effusion and emergent surgical repair"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Acute lower GI bleed hemodynamically unstable red cell transfusion and urgent catheter angiography"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Strangulated femoral hernia groin lump with bowel obstruction urgent emergency laparotomy"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Acute sigmoid diverticulitis with perforation Hinchey stage III/IV Hartmann procedure"},

    {"exam": "mrcem", "subject": "Medicine", "system": "Musculoskeletal", "topic": "Acute gouty arthritis severely inflamed first MTP joint colchicine vs NSAID vs intra-articular steroid"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Musculoskeletal", "topic": "Necrotizing fasciitis LRINEC score pain out of proportion to exam emergent surgical debridement"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Musculoskeletal", "topic": "Flexor tenosynovitis Kanavel four cardinal signs and emergency surgical drainage and sheath washout"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Dermatology", "topic": "Toxic epidermal necrolysis Nikolsky sign positive over 30 percent body surface area transfer to burn ICU"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Dermatology", "topic": "Meningococcemia fulminant purpura fulminans immediate intravenous ceftriaxone or benzylpenicillin"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Endocrine", "topic": "Hypoglycemia in sulfonylurea overdose octreotide somatostatin analog to prevent recurrent hypoglycemia"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Endocrine", "topic": "Acute adrenal crisis refractory hypotension despite fluids intravenous hydrocortisone bolus"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Endocrine", "topic": "Severe hypocalcemia post-thyroidectomy tetany and QTc prolongation intravenous calcium gluconate"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Hematology", "topic": "Massive transfusion protocol complication hypocalcemia secondary to citrate toxicity"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Hematology", "topic": "Warfarin-associated life-threatening intracranial hemorrhage four-factor prothrombin complex concentrate PCC and vitamin K"},

    {"exam": "mrcem", "subject": "Ethics", "system": "General Principles", "topic": "Mental Capacity Act assessment in emergency department patient refusing life-saving medical treatment"},
    {"exam": "mrcem", "subject": "Ethics", "system": "General Principles", "topic": "Advanced decision to refuse treatment ADRT validity and applicability in emergency resuscitation"},
    {"exam": "mrcem", "subject": "Ethics", "system": "General Principles", "topic": "Major incident triage sieve and sort categorization priority P1 immediate P2 urgent P3 delayed"},
    {"exam": "mrcem", "subject": "Ethics", "system": "General Principles", "topic": "Verification of death clinical signs and confirmation protocol in emergency department"},
    {"exam": "mrcem", "subject": "Ethics", "system": "General Principles", "topic": "Needlestick injury contaminated sharp exposure post-exposure prophylaxis PEP timing within 72 hours"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Wellens syndrome deeply inverted or biphasic T waves in V2-V3 critical proximal LAD stenosis"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "de Winter ECG pattern upsloping ST depression and tall symmetrical T waves in precordial leads"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Brugada syndrome type 1 coved ST-segment elevation in V1-V2 and risk of ventricular fibrillation"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Posterior STEMI precordial ST depression with tall R waves in V1-V3 confirmed by posterior leads V7-V9"},
    {"exam": "mrcem", "subject": "Medicine", "system": "Cardiovascular", "topic": "Wolff-Parkinson-White syndrome with atrial fibrillation avoidance of AV nodal blockers electrical cardioversion"},

    # -------------------------------------------------------------------------
    # SMLE (100 questions: intl-10573 to intl-10672)
    # Saudi Medical Licensure Examination Primary & Clinical Focus
    # -------------------------------------------------------------------------
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Sickle cell anemia vaso-occlusive painful crisis intravenous hydration multimodal analgesia and hydroxyurea"},
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Sickle cell acute chest syndrome diagnostic criteria exchange transfusion indications and incentive spirometry"},
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Sickle cell aplastic crisis secondary to parvovirus B19 reticulocytopenia packed red cell transfusion"},
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Sickle cell acute splenic sequestration crisis in infant sudden splenomegaly and hypovolemic shock"},
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Premarital screening program hemoglobin electrophoresis identification of beta-thalassemia and sickle carriers"},
    {"exam": "smle", "subject": "Medicine", "system": "Hematology", "topic": "Glucose-6-phosphate dehydrogenase deficiency hemolytic crisis after fava beans and avoidance of oxidant medications"},
    {"exam": "smle", "subject": "Medicine", "system": "General Principles", "topic": "Middle East Respiratory Syndrome coronavirus MERS-CoV airborne droplet isolation and RT-PCR confirmation"},
    {"exam": "smle", "subject": "Medicine", "system": "General Principles", "topic": "Hajj and Umrah pilgrim health meningococcal quadrivalent ACWY vaccination requirement and heat illness surveillance"},
    {"exam": "smle", "subject": "Medicine", "system": "General Principles", "topic": "Brucellosis raw camel milk ingestion chronic relapsing fever rose bengal plate test and dual antimicrobial regimen"},
    {"exam": "smle", "subject": "Medicine", "system": "General Principles", "topic": "Cutaneous leishmaniasis oriental sore sandy soil exposure intralesional sodium stibogluconate therapy"},

    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Type 2 diabetes mellitus high prevalence Saudi population lifestyle modification GLP-1 receptor agonist initiation"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Diabetic nephropathy microalbuminuria screening urine albumin-to-creatinine ratio and SGLT2 inhibitor therapy"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Diabetic retinopathy non-proliferative vs proliferative annual dilated funduscopic examination and panretinal photocoagulation"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Diabetic foot ulcer Wagner classification off-loading pressure arterial Doppler and targeted debridement"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Metabolic syndrome NCEP ATP III criteria waist circumference, triglycerides, HDL, blood pressure, fasting glucose"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Vitamin D deficiency widespread sunny climate Paradox 25-OH vitamin D testing and high-dose cholecalciferol repletion"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Primary hyperparathyroidism solitary parathyroid adenoma sestamibi scan and minimally invasive parathyroidectomy"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Graves disease thyrotoxicosis radioactive iodine ablation vs antithyroid methimazole therapy in pregnancy"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Papillary thyroid carcinoma fine needle aspiration nuclear grooves Orphan Annie eyes and total thyroidectomy"},
    {"exam": "smle", "subject": "Medicine", "system": "Endocrine", "topic": "Adrenal incidentaloma workup 1 mg overnight dexamethasone suppression, metanephrines, and aldosterone-renin ratio"},

    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Atherosclerotic cardiovascular disease ASCVD 10-year risk estimation high-intensity atorvastatin therapy"},
    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Heart failure with reduced ejection fraction four pillars ARNI, beta-blocker, MRA, and SGLT2 inhibitor"},
    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Non-ST elevation myocardial infarction TIMI risk score early invasive strategy within 24 hours"},
    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Secondary hypertension young adult fibromuscular dysplasia renal artery stenosis angioplasty"},
    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Infective endocarditis antibiotic prophylaxis in high-risk cardiac lesions prior to dental extraction"},
    {"exam": "smle", "subject": "Medicine", "system": "Cardiovascular", "topic": "Pericarditis acute post-viral concave ST elevation PR depression ibuprofen and colchicine dual therapy"},
    {"exam": "smle", "subject": "Medicine", "system": "Respiratory", "topic": "Asthma Gina step-up therapy low-dose ICS-formoterol as preferred reliever and controller"},
    {"exam": "smle", "subject": "Medicine", "system": "Respiratory", "topic": "Chronic obstructive pulmonary disease GOLD classification long-acting bronchodilator LAMA plus LABA"},
    {"exam": "smle", "subject": "Medicine", "system": "Respiratory", "topic": "Pulmonary tuberculosis primary presentation apical cavitation positive AFB sputum culture and 4-drug RIPE regimen"},
    {"exam": "smle", "subject": "Medicine", "system": "Respiratory", "topic": "Latent tuberculosis infection interferon-gamma release assay IGRA positivity 3-month rifapentine plus isoniazid"},

    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Nonalcoholic fatty liver disease NAFLD fibrosis-4 FIB-4 score calculation and weight loss lifestyle management"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Hepatitis C virus chronic infection pan-genotypic direct-acting antiviral therapy sofosbuvir-velpatasvir"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Ulcerative colitis mild to moderate left-sided disease oral and topical mesalamine induction"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Crohn disease ileocecal presentation magnetic resonance enterography and budesonide vs biologic infliximab"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Colorectal cancer screening average-risk adult colonoscopy every 10 years starting at age 45"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Irritable bowel syndrome Rome IV criteria abdominal pain relieved by defecation dietary FODMAP restriction"},
    {"exam": "smle", "subject": "Medicine", "system": "Gastrointestinal", "topic": "Gastroesophageal reflux disease PPI therapy failure high-resolution esophageal manometry and 24-hour pH study"},
    {"exam": "smle", "subject": "Medicine", "system": "Renal", "topic": "Chronic kidney disease KDIGO staging eGFR and albuminuria guiding SGLT2 inhibitor and ACE inhibitor"},
    {"exam": "smle", "subject": "Medicine", "system": "Renal", "topic": "Nephrotic syndrome in adults membranous nephropathy workup anti-PLA2R antibodies and 24h proteinuria"},
    {"exam": "smle", "subject": "Medicine", "system": "Renal", "topic": "Renal stone disease calcium oxalate stones non-contrast spiral CT and oral potassium citrate alkalinization"},

    {"exam": "smle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Acute calculous cholecystitis laparoscopic cholecystectomy early timing within 72 hours of admission"},
    {"exam": "smle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Bariatric surgery indications BMI over 40 or BMI over 35 with obesity-related co-morbidities laparoscopic sleeve gastrectomy"},
    {"exam": "smle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Acute lower gastrointestinal bleeding colonoscopy vs CT mesenteric angiography hemodynamically unstable"},
    {"exam": "smle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Perianal abscess emergent surgical incision and drainage avoidance of simple antibiotic therapy alone"},
    {"exam": "smle", "subject": "Surgery", "system": "Gastrointestinal", "topic": "Anal fissure chronic presentation lateral internal sphincterotomy vs topical diltiazem/nitroglycerin ointment"},
    {"exam": "smle", "subject": "Surgery", "system": "Cardiovascular", "topic": "Varicose veins great saphenous vein incompetence duplex ultrasound and endovenous thermal ablation"},
    {"exam": "smle", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Anterior cruciate ligament tear Lachman test pivot shift test and arthroscopic reconstruction"},
    {"exam": "smle", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Meniscal tear McMurray test joint line tenderness MRI knee and conservative management vs arthroscopy"},
    {"exam": "smle", "subject": "Surgery", "system": "Musculoskeletal", "topic": "Motor vehicle accident blunt abdominal trauma FAST positive for fluid emergent exploratory laparotomy"},
    {"exam": "smle", "subject": "Surgery", "system": "Renal", "topic": "Testicular torsion sudden acute scrotal pain absent cremasteric reflex urgent surgical exploration and orchidopexy"},

    {"exam": "smle", "subject": "Pediatrics", "system": "General Principles", "topic": "Developmental milestones at 12 months walking with support pincer grasp first words and separation anxiety"},
    {"exam": "smle", "subject": "Pediatrics", "system": "General Principles", "topic": "Well-child care screening for developmental delay Ages and Stages Questionnaire ASQ application"},
    {"exam": "smle", "subject": "Pediatrics", "system": "General Principles", "topic": "Saudi Ministry of Health pediatric immunization schedule hexavalent vaccine and pneumococcal conjugate"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Respiratory", "topic": "Foreign body aspiration in 2-year-old peanut lodgment unilateral wheeze and urgent bronchoscopy"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Respiratory", "topic": "Acute otitis media in young child amoxicillin high-dose first-line antibiotic indications"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Gastrointestinal", "topic": "Celiac disease in child anti-tissue transglutaminase IgA antibody titers and duodenal biopsy confirmation"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Gastrointestinal", "topic": "Gastroenteritis oral rehydration solution home therapy zinc supplementation for 14 days WHO guideline"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Hematology", "topic": "Iron deficiency anemia in toddler excessive cow milk consumption oral ferrous sulfate supplementation"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Nervous System", "topic": "Pediatric febrile status epilepticus intravenous lorazepam followed by levetiracetam infusion"},
    {"exam": "smle", "subject": "Pediatrics", "system": "Endocrine", "topic": "Growth hormone deficiency short stature delayed bone age on hand radiograph and provocative GH testing"},

    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Antenatal screening for fetal aneuploidy first-trimester combined screening nuchal translucency and free beta-hCG"},
    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Recurrent pregnancy loss antiphospholipid syndrome testing lupus anticoagulant and anticardiolipin"},
    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Gestational hypertension diagnostic blood pressure monitoring without proteinuria after 20 weeks"},
    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Group B Streptococcus screening at 36-37 weeks rectovaginal swab and intrapartum ampicillin prophylaxis"},
    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Vaginal birth after Cesarean VBAC candidacy criteria spontaneous labor vs elective repeat Cesarean"},
    {"exam": "smle", "subject": "Obstetrics", "system": "Pregnancy", "topic": "Fetal growth restriction estimated fetal weight under 10th percentile umbilical artery Doppler surveillance"},
    {"exam": "smle", "subject": "Obstetrics", "system": "General Principles", "topic": "Abnormal uterine bleeding FIGO PALM-COEIN classification workup in perimenopausal woman"},
    {"exam": "smle", "subject": "Obstetrics", "system": "General Principles", "topic": "Endometriosis chronic pelvic pain dysmenorrhea transvaginal ultrasound and laparoscopy diagnosis"},
    {"exam": "smle", "subject": "Obstetrics", "system": "General Principles", "topic": "Ectopic pregnancy tubal unruptured beta-hCG under 5000 criteria for intramuscular methotrexate"},
    {"exam": "smle", "subject": "Obstetrics", "system": "General Principles", "topic": "Postmenopausal bleeding transvaginal ultrasound endometrial thickness over 4 mm endometrial biopsy"},

    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Major depressive disorder DSM-5 diagnostic criteria SSRI escitalopram first-line pharmacotherapy"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Generalized anxiety disorder GAD-7 screening score cognitive behavioral therapy and SSRI/SNRI"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Panic disorder recurrent unexpected panic attacks agoraphobia and SSRI with short-term benzodiazepine"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Bipolar I disorder acute mania presentation second-generation antipsychotic plus mood stabilizer lithium"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Schizophrenia positive and negative symptoms atypical antipsychotic olanzapine metabolic monitoring"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Post-traumatic stress disorder intrusion symptoms avoidance trauma-focused CBT and sertraline"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Somatic symptom disorder multiple distressing physical symptoms regular scheduled visits and reassurance"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Substance use disorder amphetamine/captagon toxicity paranoid psychosis and supportive care with antipsychotics"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Postpartum depression Edinburgh Postnatal Depression Scale screening and supportive psychotherapy"},
    {"exam": "smle", "subject": "Psychiatry", "system": "Behavioral Health", "topic": "Delirium acute fluctuating altered mental status underlying trigger identification and non-pharmacologic protocols"},

    {"exam": "smle", "subject": "Neurology", "system": "Nervous System", "topic": "Migraine headache with aura triptan abortive therapy and topiramate/propranolol preventive indications"},
    {"exam": "smle", "subject": "Neurology", "system": "Nervous System", "topic": "Cluster headache unilateral orbital pain autonomic symptoms 100 percent normobaric high-flow oxygen abortive"},
    {"exam": "smle", "subject": "Neurology", "system": "Nervous System", "topic": "Bell palsy peripheral facial nerve lower motor neuron weakness oral prednisolone within 72 hours and eye care"},
    {"exam": "smle", "subject": "Neurology", "system": "Nervous System", "topic": "Carpal tunnel syndrome median nerve compression Tinel and Phalen signs wrist splinting in neutral"},
    {"exam": "smle", "subject": "Neurology", "system": "Nervous System", "topic": "Diabetic peripheral neuropathy symmetrical stocking-glove sensory loss duloxetine or pregabalin therapy"},
    {"exam": "smle", "subject": "Medicine", "system": "Dermatology", "topic": "Atopic dermatitis infantile vs childhood presentation topical emollients and low-potency topical corticosteroids"},
    {"exam": "smle", "subject": "Medicine", "system": "Dermatology", "topic": "Acne vulgaris moderate papulopustular topical retinoid plus benzoyl peroxide and oral doxycycline"},
    {"exam": "smle", "subject": "Medicine", "system": "Dermatology", "topic": "Alopecia areata patchy hair loss exclamation mark hairs intralesional triamcinolone acetonide"},
    {"exam": "smle", "subject": "Medicine", "system": "Dermatology", "topic": "Vitiligo depigmented macules Wood lamp examination topical calcineurin inhibitor and phototherapy"},
    {"exam": "smle", "subject": "Medicine", "system": "Dermatology", "topic": "Tinea corporis annular scaly plaque with central clearing topical terbinafine or clotrimazole"},

    {"exam": "smle", "subject": "Ethics", "system": "General Principles", "topic": "Informed consent Saudi healthcare law legal age of medical consent and emergency exceptions"},
    {"exam": "smle", "subject": "Ethics", "system": "General Principles", "topic": "Patient confidentiality and privacy electronic medical record access audit and data protection"},
    {"exam": "smle", "subject": "Ethics", "system": "General Principles", "topic": "End-of-life care do-not-resuscitate DNR national policy consensus and family counseling"},
    {"exam": "smle", "subject": "Ethics", "system": "General Principles", "topic": "Reporting child abuse and neglect national child protection center mandatory referral obligations"},
    {"exam": "smle", "subject": "Ethics", "system": "General Principles", "topic": "Medical error disclosure open and honest communication with patient and clinical incident reporting"},
    {"exam": "smle", "subject": "Biostatistics", "system": "General Principles", "topic": "Incidence rate vs prevalence rate definitions and application in Saudi epidemiology surveys"},
    {"exam": "smle", "subject": "Biostatistics", "system": "General Principles", "topic": "Relative risk vs odds ratio interpretation in cohort and case-control observational studies"},
    {"exam": "smle", "subject": "Biostatistics", "system": "General Principles", "topic": "Confidence intervals 95 percent interpretation and statistical significance without p-value"},
    {"exam": "smle", "subject": "Biostatistics", "system": "General Principles", "topic": "Levels of prevention primary immunization vs secondary screening vs tertiary rehabilitation"},
    {"exam": "smle", "subject": "Biostatistics", "system": "General Principles", "topic": "Herd immunity threshold calculation based on basic reproduction number R0 in public health"}
]

if __name__ == '__main__':
    print(f"Total topics in Mega-Batch 25 Part B: {len(TOPICS_PART_B)}")
    exam_counts = {}
    for t in TOPICS_PART_B:
        exam_counts[t['exam']] = exam_counts.get(t['exam'], 0) + 1
    print("Breakdown by exam:", exam_counts)
'''

with open('scripts/mega25_part_b.py', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully created scripts/mega25_part_b.py")
