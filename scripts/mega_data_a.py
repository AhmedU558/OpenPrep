"""
Full 350 Question Generator for OpenPrep
Generates Batches 4, 5, 6, 7 (350 questions: intl-0046 to intl-0395)
"""

import json
import os
import re

TAXONOMY_EXAMS = [
    "Step 1", "Step 2 CK", "Step 3", "PLAB / UKMLA", "AMC", "MCCQE",
    "FCPS", "NLE", "NEET PG", "MRCP", "MRCEM", "SMLE", "HAAD / DHA", "UHS MBBS"
]

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

REFS = {
    "pharm": ("Nursing Pharmacology, 2nd ed., Open RN / NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/NBK595000/"),
    "ethics": ("WMA International Code of Medical Ethics", "https://www.wma.net/policies-post/wma-international-code-of-medical-ethics/"),
    "anatomy": ("OpenStax Anatomy and Physiology 2e", "https://openstax.org/books/anatomy-and-physiology-2e/pages/preface"),
    "cell": ("Molecular Biology of the Cell, 4th ed., NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/NBK21054/"),
    "immune": ("Immunobiology, 5th ed., NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/NBK10757/"),
    "micro": ("Medical Microbiology, 4th ed., NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/NBK7627/"),
    "clinical": ("Clinical Methods, 3rd ed., NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/NBK201/"),
    "acid": ("Merck Manual Professional: Acid-Base Disorders", "https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders"),
    "anemia": ("Merck Manual Professional: Evaluation of Anemia", "https://www.merckmanuals.com/professional/hematology/approach-to-the-patient-with-anemia/evaluation-of-anemia"),
    "stats": ("CDC Principles of Epidemiology, 3rd ed.", "https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/SS1978.pdf"),
    "nice_ckd": ("NICE Guideline NG203: Chronic Kidney Disease Assessment and Management", "https://www.nice.org.uk/guidance/ng203"),
    "nice_asthma": ("NICE Guideline NG80: Asthma Diagnosis, Monitoring and Chronic Asthma Management", "https://www.nice.org.uk/guidance/ng80"),
    "nice_acs": ("NICE Guideline NG185: Acute Coronary Syndromes", "https://www.nice.org.uk/guidance/ng185"),
    "who_trauma": ("WHO Guidelines for Essential Trauma Care", "https://www.who.int/publications/i/item/9241546409"),
    "amc_anthology": ("Australian Medical Council: Anthology of Medical Conditions", "https://www.amc.org.au/examinations/publications/anthology/"),
    "mcc_objectives": ("Medical Council of Canada: Objectives for the Qualifying Examination", "https://mcc.ca/objectives/"),
    "rcuk_als": ("Resuscitation Council UK: Adult Advanced Life Support Guidelines", "https://www.resus.org.uk/library/2021-resuscitation-guidelines/adult-advanced-life-support-guidelines"),
    "merck_endocrine": ("Merck Manual Professional: Approach to the Patient With Endocrine Disorders", "https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/principles-of-endocrinology/approach-to-the-patient-with-endocrine-disorders"),
    "merck_infection": ("Merck Manual Professional: Sepsis and Septic Shock", "https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock"),
    "rcog_gtg": ("RCOG Green-top Guidelines: Severe Pre-eclampsia and Hypertension in Pregnancy", "https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/"),
}

# 25 Clinical Archetypes
DOMAINS_A = [
    {
        "name": "STEMI & Acute Coronary Syndrome", "system": "Cardiovascular", "ref_key": "nice_acs",
        "entity": "acute myocardial infarction", "hallmark": "ST-segment elevation and troponin elevation",
        "primary_drug": "aspirin, P2Y12 inhibitor, and primary PCI",
        "subjects": {"Step 1": "Pharmacology", "NEET PG": "Pathology", "UHS MBBS": "Pathology", "FCPS": "Surgery", "other": "Medicine"},
        "concepts": {
            "Step 1": ("P2Y12 platelet receptor antagonist mechanism", "Reversible allosteric antagonism of the platelet ADP P2Y12 receptor", "Ticagrelor directly and reversibly blocks the P2Y12 receptor, preventing ADP-mediated intracellular signaling and subsequent GPIIb/IIIa activation."),
            "Step 2 CK": ("STEMI primary PCI window and reperfusion triage", "Immediate transfer for primary percutaneous coronary intervention", "Primary PCI is the standard of care for acute STEMI when door-to-balloon time can be achieved within 90 minutes at a PCI center."),
            "Step 3": ("Secondary prevention pharmacotherapy post-MI", "High-intensity statin, beta-blocker, and ACE inhibitor", "Guideline-directed medical therapy following STEMI with reduced LVEF includes dual antiplatelets, high-intensity statin, beta-blocker, and ACE inhibitor."),
            "PLAB / UKMLA": ("NSTEMI risk assessment and invasive angiography", "Inpatient coronary angiography within 72 hours of admission", "NICE guidelines recommend early invasive coronary angiography within 72 hours for intermediate or high-risk NSTEMI patients."),
            "AMC": ("Pre-hospital thrombolysis in remote STEMI presentations", "Immediate intravenous tenecteplase and urgent aeromedical retrieval", "When transfer to primary PCI exceeds 120 minutes from diagnosis, pre-hospital fibrinolysis within 30 minutes improves myocardial salvage."),
            "MCCQE": ("Antianginal therapy in chronic stable angina", "Cardioselective beta-blocker such as metoprolol or bisoprolol", "Beta-blockers decrease myocardial oxygen demand by reducing heart rate and inotropy, serving as first-line chronic antianginal therapy."),
            "FCPS": ("Acute post-infarction ventricular septal defect diagnosis", "Post-infarction acute ventricular septal rupture", "A new harsh holosystolic murmur with thrill at the left sternal border and an oxygen saturation step-up in the right ventricle confirms VSD."),
            "NLE": ("Initial emergency antiplatelet therapy for ACS", "Chewable non-enteric coated aspirin 300 mg", "Chewable non-enteric aspirin achieves rapid antiplatelet inhibition within minutes, reducing cardiovascular mortality by 23% in acute MI."),
            "NEET PG": ("Early microscopic changes in myocardial infarction", "Coagulative necrosis with wavy myocardial fibers", "Between 4 and 12 hours post-infarction, light microscopy reveals early coagulative necrosis with hypereosinophilic wavy myofibers."),
            "MRCP": ("Dual antiplatelet therapy selection in ACS", "Ticagrelor 90 mg twice daily due to superior mortality reduction", "The PLATO trial showed ticagrelor significantly reduced cardiovascular mortality compared to clopidogrel in acute coronary syndrome."),
            "MRCEM": ("Cardiogenic shock identification and emergency resuscitation", "Immediate emergency coronary angiography and revascularization", "Emergency revascularization is the only definitive intervention proven to improve long-term survival in cardiogenic shock complicating MI."),
            "SMLE": ("Inferior STEMI with right ventricular involvement", "Sublingual nitroglycerin due to acute preload reduction", "Right ventricular infarction is preload-dependent; venodilators like nitrates can precipitate profound life-threatening hypotension."),
            "HAAD / DHA": ("Troponin biomarker interpretation in acute injury", "Acute myocardial injury consistent with evolving NSTEMI", "A significant dynamic delta rise in high-sensitivity cardiac troponin above the 99th percentile confirms acute myocardial injury."),
            "UHS MBBS": ("Coronary artery vascular territories and ECG leads", "Left anterior descending artery occlusion", "The left anterior descending artery supplies the anterior wall and septum, producing ST elevation in precordial leads V1 through V4.")
        }
    },
    {
        "name": "Heart Failure with Reduced Ejection Fraction", "system": "Cardiovascular", "ref_key": "nice_acs",
        "entity": "heart failure with reduced ejection fraction", "hallmark": "dyspnea, elevated BNP, S3 gallop, and reduced LVEF < 40%",
        "primary_drug": "ARNI, beta-blocker, MRA, and SGLT2 inhibitor",
        "subjects": {"Step 1": "Physiology", "NEET PG": "Pharmacology", "UHS MBBS": "Medicine", "FCPS": "Medicine", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Neurohormonal activation and BNP physiological actions", "Guanylyl cyclase activation and cyclic GMP elevation", "Brain natriuretic peptide (BNP) binds NPR-A receptors to stimulate particulate guanylyl cyclase, increasing intracellular cGMP and inducing natriuresis."),
            "Step 2 CK": ("Four pillars of guideline-directed medical therapy", "Angiotensin receptor-neprilysin inhibitor, beta-blocker, MRA, and SGLT2 inhibitor", "The four foundational pillars of HFrEF medical therapy synergistically reduce cardiovascular mortality and heart failure hospitalization."),
            "Step 3": ("Implantable cardioverter-defibrillator primary prevention", "Implantable cardioverter-defibrillator (ICD) placement", "Primary prevention ICD is indicated for symptomatic heart failure (NYHA II-III) with LVEF <= 35% despite 3 months of optimal medical therapy."),
            "PLAB / UKMLA": ("Chronic heart failure diagnostic algorithm and BNP", "Serum N-terminal pro-B-type natriuretic peptide (NT-proBNP)", "NICE guidelines recommend measuring serum NT-proBNP as the initial rule-out test in suspected heart failure prior to echocardiography."),
            "AMC": ("Acute decompensated heart failure emergency management", "Intravenous furosemide bolus and sublingual glyceryl trinitrate", "Acute pulmonary edema requires immediate loop diuretic therapy combined with vasodilators to reduce preload and pulmonary congestion."),
            "MCCQE": ("Heart failure self-management and fluid restriction", "Daily morning weight monitoring and flexible diuretic adjustment", "Patient empowerment through daily weight monitoring allows early diuretic titration before overt acute clinical decompensation occurs."),
            "FCPS": ("Cardiac resynchronization therapy indications in HFrEF", "Cardiac resynchronization therapy with defibrillator (CRT-D)", "CRT is indicated in patients with sinus rhythm, LVEF <= 35%, NYHA class II-IV symptoms, and complete left bundle branch block with QRS >= 150 ms."),
            "NLE": ("First-line diuretic for acute pulmonary congestion", "Intravenous loop diuretic such as furosemide 40 to 80 mg", "Intravenous loop diuretics provide rapid venodilation within minutes followed by brisk diuresis to relieve pulmonary alveolar congestion."),
            "NEET PG": ("Sacubitril/valsartan mechanism of action", "Neprilysin inhibition combined with angiotensin II receptor blockade", "Sacubitril inhibits neutral endopeptidase (neprilysin) to prevent natriuretic peptide breakdown, while valsartan blocks AT1 receptors."),
            "MRCP": ("Iron deficiency correction in heart failure", "Intravenous ferric carboxymaltose infusion", "The FAIR-HF and CONFIRM-HF trials proved that intravenous iron improves functional capacity and reduces hospitalizations in heart failure."),
            "MRCEM": ("Flash pulmonary edema non-invasive ventilation", "Continuous positive airway pressure (CPAP) with high-flow oxygen", "Non-invasive positive pressure ventilation rapidly decreases work of breathing and reduces both preload and afterload in pulmonary edema."),
            "SMLE": ("Mineralocorticoid receptor antagonist monitoring", "Serum potassium and estimated glomerular filtration rate", "Spironolactone and eplerenone can cause life-threatening hyperkalemia, requiring baseline and post-initiation potassium and renal monitoring."),
            "HAAD / DHA": ("Beta-blocker initiation criteria in stable heart failure", "Euvolemic state without acute fluid retention or inotropic support", "Beta-blockers must only be initiated or up-titrated in clinically stable, euvolemic patients to prevent precipitating acute decompensation."),
            "UHS MBBS": ("Physical signs of severe congestive heart failure", "Third heart sound (S3 gallop) and hepatojugular reflux", "An S3 gallop reflects sudden deceleration of ventricular inflow during early diastole into an overfilled, noncompliant left ventricle.")
        }
    },
    {
        "name": "Infective Endocarditis", "system": "Cardiovascular", "ref_key": "merck_infection",
        "entity": "infective endocarditis", "hallmark": "fever, new cardiac murmur, bacteremia, and valvular vegetation",
        "primary_drug": "empiric bactericidal intravenous antibiotics",
        "subjects": {"Step 1": "Microbiology", "NEET PG": "Pathology", "UHS MBBS": "Microbiology", "FCPS": "Surgery", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Bacterial adherence factors in native valve endocarditis", "Dextran-mediated binding to fibrin-platelet aggregates", "Viridans group streptococci synthesize extracellular dextrans from sucrose, facilitating high-affinity adherence to platelet-fibrin complexes."),
            "Step 2 CK": ("Modified Duke criteria for definitive clinical diagnosis", "Two major criteria or one major and three minor criteria", "The modified Duke criteria establish definitive infective endocarditis based on bacteremia, echocardiographic vegetations, and vascular signs."),
            "Step 3": ("Antibiotic prophylaxis guidelines for dental procedures", "High-risk cardiac conditions such as prosthetic valves or prior endocarditis", "AHA guidelines restrict antibiotic prophylaxis (oral amoxicillin) exclusively to high-risk patients undergoing gingival manipulation."),
            "PLAB / UKMLA": ("Empiric antimicrobial regimen for native valve endocarditis", "Intravenous ampicillin or flucloxacillin with gentamicin", "NICE and BSAC guidelines recommend empiric bactericidal therapy targeting staphylococci, streptococci, and enterococci while cultures incubate."),
            "AMC": ("Emergency surgical indications in active endocarditis", "Acute severe aortic regurgitation with refractory cardiogenic shock", "Emergency valve replacement surgery is mandatory for acute refractory heart failure, persistent uncontrolled infection, or large vegetations."),
            "MCCQE": ("Vascular and immunologic phenomena differentiation", "Janeway lesions as painless erythematous macules on palms and soles", "Janeway lesions represent septic microemboli (painless), whereas Osler nodes represent immune complex deposits (painful erythematous nodules)."),
            "FCPS": ("Prosthetic valve endocarditis early vs late differentiation", "Coagulase-negative staphylococci within 12 months of implantation", "Early prosthetic valve endocarditis (< 12 months) is predominantly caused by Staphylococcus epidermidis inoculated intraoperatively."),
            "NLE": ("Initial diagnostic investigation in suspected endocarditis", "Three sets of blood cultures drawn from separate venipuncture sites", "Blood cultures must be obtained prior to antimicrobial administration, with separate venipuncture sites to rule out skin contamination."),
            "NEET PG": ("Erythematous macular lesions in infective endocarditis", "Janeway lesions caused by septic microembolization", "Janeway lesions are non-tender, erythematous or hemorrhagic macules on the palms and soles caused by septic microemboli."),
            "MRCP": ("Transesophageal vs transthoracic echocardiography utility", "Transesophageal echocardiography (TEE) for higher spatial resolution", "TEE has vastly superior sensitivity (90–95% vs 60–70%) for detecting vegetations < 5 mm, perivalvular abscesses, and prosthetic valve pathology."),
            "MRCEM": ("Acute aortic valve endocarditis emergency presentation", "Acute severe aortic regurgitation with wide pulse pressure", "Sudden leaflet destruction produces rapid volume overload of the unprepared left ventricle, causing cardiogenic shock and pulmonary edema."),
            "SMLE": ("Enterococcal endocarditis synergistic antimicrobial regimen", "Ampicillin combined with ceftriaxone or gentamicin", "Enterococcus faecalis endocarditis requires dual synergistic bactericidal therapy (ampicillin plus ceftriaxone) to achieve clinical cure."),
            "HAAD / DHA": ("Intravenous drug abuse valve involvement and microbiology", "Tricuspid valve endocarditis caused by Staphylococcus aureus", "Intravenous drug use classically predisposes to right-sided tricuspid valve endocarditis with Staphylococcus aureus and septic pulmonary emboli."),
            "UHS MBBS": ("Peripheral cutaneous stigmata of chronic endocarditis", "Splinter hemorrhages, Roth spots, and Osler nodes", "Immune complex deposition in endocarditis causes painful Osler nodes on finger pads, retinal Roth spots, and glomerulonephritis.")
        }
    },
    {
        "name": "Atrial Fibrillation", "system": "Cardiovascular", "ref_key": "nice_acs",
        "entity": "atrial fibrillation", "hallmark": "irregularly irregular pulse, absent P waves, and stroke risk",
        "primary_drug": "rate control, rhythm control, and direct oral anticoagulation",
        "subjects": {"Step 1": "Physiology", "NEET PG": "Pharmacology", "UHS MBBS": "Medicine", "FCPS": "Medicine", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Pulmonary vein myocardial sleeves as arrhythmogenic triggers", "Ectopic electrical automaticity in pulmonary vein sleeves", "Most paroxysmal atrial fibrillation episodes originate from ectopic rapid focal electrical triggers located within the pulmonary vein sleeves."),
            "Step 2 CK": ("CHA2DS2-VASc stroke risk scoring and DOAC indication", "Direct oral anticoagulant (DOAC) such as apixaban or rivaroxaban", "In non-valvular atrial fibrillation with CHA2DS2-VASc score >= 2 in men or >= 3 in women, DOACs are preferred over warfarin to prevent stroke."),
            "Step 3": ("Rate vs rhythm control in elderly sedentary patients", "Beta-blocker rate control maintaining resting heart rate < 110/min", "The AFFIRM trial proved that lenient rate control (< 110 bpm) is non-inferior to rhythm control in terms of mortality in elderly patients."),
            "PLAB / UKMLA": ("Acute hemodynamically unstable atrial fibrillation triage", "Immediate emergency synchronized electrical cardioversion", "Patients presenting with acute atrial fibrillation with hemodynamic instability (hypotension, angina, pulmonary edema) need urgent cardioversion."),
            "AMC": ("Anticoagulation management before elective cardioversion", "Therapeutic anticoagulation for at least 3 weeks or transesophageal echo", "Cardioversion of atrial fibrillation lasting > 48 hours requires 3 weeks of prior therapeutic anticoagulation to avoid thromboembolism."),
            "MCCQE": ("Post-operative atrial fibrillation risk factors and care", "Correction of postoperative hypokalemia and hypomagnesemia with beta-blockers", "Postoperative atrial fibrillation is commonly precipitated by surgical stress and electrolyte shifts, managed by electrolyte repletion and rate control."),
            "FCPS": ("Catheter ablation indications in symptomatic paroxysmal AF", "Radiofrequency catheter pulmonary vein isolation", "Catheter ablation is indicated for symptomatic paroxysmal atrial fibrillation refractory or intolerant to at least one antiarrhythmic agent."),
            "NLE": ("Physical examination findings in atrial fibrillation", "Irregularly irregular pulse with variable pulse volume and pulse deficit", "Atrial fibrillation produces an irregularly irregular radial pulse with an apical-radial pulse deficit due to variable ventricular filling."),
            "NEET PG": ("Wolff-Parkinson-White syndrome with atrial fibrillation therapy", "Intravenous procainamide or emergency electrical cardioversion", "AV nodal blocking agents (digoxin, verapamil, beta-blockers) are contraindicated in pre-excited AF as they divert conduction down the accessory pathway."),
            "MRCP": ("Left atrial appendage occlusion indications in AF", "Percutaneous left atrial appendage closure (Watchman device)", "Left atrial appendage closure is an alternative for stroke prevention in patients with high thromboembolic risk and absolute contraindications to OAC."),
            "MRCEM": ("Rapid atrial fibrillation with ventricular rate > 150/min", "Intravenous diltiazem or metoprolol for acute rate control", "In hemodynamically stable rapid atrial fibrillation, intravenous beta-blockers or non-dihydropyridine calcium blockers achieve rapid rate control."),
            "SMLE": ("Renal dosing adjustments for direct oral anticoagulants", "Dose reduction of apixaban for serum creatinine >= 1.5 mg/dL with age >= 80", "Apixaban dose is reduced from 5 mg to 2.5 mg twice daily if any 2 of: age >= 80 years, weight <= 60 kg, or serum creatinine >= 1.5 mg/dL."),
            "HAAD / DHA": ("Valvular vs non-valvular atrial fibrillation definition", "Moderate-to-severe mitral stenosis or mechanical prosthetic valve", "Valvular AF is strictly defined by moderate-to-severe rheumatic mitral stenosis or mechanical heart valves, which require warfarin rather than DOACs."),
            "UHS MBBS": ("Electrocardiographic diagnostic criteria for atrial fibrillation", "Absence of discrete P waves with irregular, chaotic fibrillatory waves", "The pathognomonic ECG findings in atrial fibrillation are absent P waves, irregular fibrillatory baseline f-waves, and irregular RR intervals.")
        }
    },
    {
        "name": "Bronchial Asthma", "system": "Respiratory", "ref_key": "nice_asthma",
        "entity": "bronchial asthma", "hallmark": "episodic wheezing, airway hyperresponsiveness, and variable airflow obstruction",
        "primary_drug": "inhaled corticosteroids and beta-2 adrenergic agonists",
        "subjects": {"Step 1": "Immunology", "NEET PG": "Pharmacology", "UHS MBBS": "Physiology", "FCPS": "Medicine", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Type 2 helper T-cell cytokines in airway inflammation", "Interleukin-4, interleukin-5, and interleukin-13 secretion", "Th2 cells drive allergic asthma: IL-4 induces IgE class switching, IL-5 stimulates eosinophil differentiation, and IL-13 promotes mucus secretion."),
            "Step 2 CK": ("Stepwise maintenance therapy in persistent asthma", "Low-dose inhaled corticosteroid combined with formoterol (SMART)", "GINA guidelines recommend low-dose ICS-formoterol as both maintenance and reliever therapy (MART) across moderate persistent asthma steps."),
            "Step 3": ("Severe eosinophilic asthma targeted biologic therapy", "Monoclonal antibody against interleukin-5 (mepolizumab or benralizumab)", "Severe refractory asthma with peripheral eosinophilia benefits from anti-IL-5 biologics, reducing oral corticosteroid requirements and exacerbations."),
            "PLAB / UKMLA": ("Objective diagnostic confirmation of adult asthma", "Fractional exhaled nitric oxide (FeNO) and spirometry with reversibility", "NICE recommends FeNO >= 40 ppb and positive bronchodilator reversibility (FEV1 improvement >= 12% and >= 200 mL) to confirm asthma in adults."),
            "AMC": ("Acute severe asthma management in emergency triage", "Continuous nebulized salbutamol, ipratropium, and systemic prednisolone", "Acute severe asthma (PEF 33–50%, RR >= 25, HR >= 110) requires immediate high-dose nebulized bronchodilators and early systemic corticosteroids."),
            "MCCQE": ("Aspirin-exacerbated respiratory disease pathophysiology", "Overproduction of cysteinyl leukotrienes due to COX-1 inhibition", "Aspirin blocks COX-1, shunting arachidonic acid into the 5-lipoxygenase pathway, generating excessive cysteinyl leukotrienes (LTC4, LTD4, LTE4)."),
            "FCPS": ("Life-threatening asthma features and emergency airway control", "Silent chest, exhaustion, cyanosis, and normal or elevated PaCO2", "A normal or rising PaCO2 (>= 40 mm Hg) in a patient with severe respiratory distress indicates respiratory muscle fatigue and impending arrest."),
            "NLE": ("First-line rescue inhaler for mild intermittent asthma", "Short-acting beta-2 agonist (salbutamol) or as-needed low-dose ICS-formoterol", "Inhaled short-acting beta-2 agonists provide rapid smooth muscle relaxation; contemporary guidance incorporates concurrent inhaled steroids."),
            "NEET PG": ("Sputum cytology in bronchial asthma", "Curschmann spirals and Charcot-Leyden crystals", "Asthma sputum demonstrates Curschmann spirals (mucus plugs containing shed epithelium) and Charcot-Leyden crystals (eosinophil membrane proteins)."),
            "MRCP": ("Omalizumab indications in severe allergic asthma", "Monoclonal anti-IgE antibody for severe persistent IgE-mediated asthma", "Omalizumab binds free circulating IgE, preventing its binding to high-affinity Fc-epsilon-RI receptors on mast cells and basophils."),
            "MRCEM": ("Intravenous magnesium sulfate in severe refractory asthma", "Single intravenous infusion of 1.2 to 2 grams over 20 minutes", "Intravenous magnesium sulfate inhibits smooth muscle calcium influx, promoting bronchodilation in patients with acute severe refractory asthma."),
            "SMLE": ("Inhaler technique assessment and spacer device utility", "Pressurized metered-dose inhaler with a large-volume spacer device", "Using a spacer device with a pMDI slows aerosol velocity and reduces oropharyngeal impaction, increasing lung deposition and reducing candidiasis."),
            "HAAD / DHA": ("Occupational asthma screening and peak flow monitoring", "Serial peak expiratory flow charting on workdays versus rest days", "Occupational asthma is confirmed when serial peak expiratory flow measurements demonstrate reproducible worsening during work periods."),
            "UHS MBBS": ("Spirometric criteria for airway obstruction reversibility", "FEV1 increase of >= 12% and >= 200 mL after 400 mcg salbutamol", "Diagnostic criteria for reversible airway obstruction require an increase in FEV1 of at least 12% and 200 mL following bronchodilator inhalation.")
        }
    },
    {
        "name": "Chronic Obstructive Pulmonary Disease", "system": "Respiratory", "ref_key": "nice_asthma",
        "entity": "chronic obstructive pulmonary disease", "hallmark": "chronic productive cough, progressive dyspnea, and fixed airflow limitation",
        "primary_drug": "inhaled long-acting bronchodilators (LAMA/LABA)",
        "subjects": {"Step 1": "Pathology", "NEET PG": "Pharmacology", "UHS MBBS": "Medicine", "FCPS": "Medicine", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Alpha-1 antitrypsin deficiency and panacinar emphysema", "Unchecked neutrophil elastase destruction of alveolar septa", "Alpha-1 antitrypsin is a serine protease inhibitor; deficiency allows uninhibited neutrophil elastase to break down elastin, causing panacinar emphysema."),
            "Step 2 CK": ("Acute COPD exacerbation guideline management", "Oral prednisone, azithromycin, and nebulized bronchodilators", "Anthonisen criteria (increased dyspnea, sputum volume, and purulence) guide treatment with systemic corticosteroids, antibiotics, and bronchodilators."),
            "Step 3": ("Long-term oxygen therapy survival indications in COPD", "Resting PaO2 <= 55 mm Hg or SaO2 <= 88% on room air", "Long-term domiciliary oxygen therapy (>= 15 hours/day) improves survival in COPD with severe resting chronic hypoxemia (PaO2 <= 55 mm Hg)."),
            "PLAB / UKMLA": ("Non-invasive ventilation in acute hypercapnic respiratory failure", "Bilevel positive airway pressure (BiPAP) with targeted pressures", "NICE guidelines mandate early BiPAP for acute hypercapnic respiratory failure (pH 7.25–7.35, PaCO2 > 6 kPa) refractory to initial medical therapy."),
            "AMC": ("GOLD staging and dual long-acting bronchodilator therapy", "Long-acting muscarinic antagonist plus long-acting beta-agonist (LAMA/LABA)", "GOLD guidelines recommend dual LAMA/LABA combination therapy (e.g., tiotropium/olodaterol) over monotherapy for symptomatic COPD patients."),
            "MCCQE": ("Smoking cessation pharmacotherapy and mortality reduction", "Varenicline, bupropion, or nicotine replacement therapy", "Smoking cessation is the single most effective intervention that alters the rate of decline of FEV1 and decreases mortality in COPD."),
            "FCPS": ("Bullectomy and lung volume reduction surgery criteria", "Severe heterogeneous upper-lobe predominant emphysema with low exercise capacity", "Lung volume reduction surgery improves survival and functional status in patients with severe upper-lobe emphysema and low baseline exercise capacity."),
            "NLE": ("Vaccination recommendations for chronic lung disease", "Annual influenza vaccination and pneumococcal conjugate/polysaccharide vaccine", "Patients with chronic lung disease must receive annual influenza vaccination and pneumococcal immunization to prevent life-threatening exacerbations."),
            "NEET PG": ("Centriacinar versus panacinar emphysema localization", "Centriacinar emphysema affecting upper lobes in cigarette smokers", "Smoking-induced centriacinar (centrilobular) emphysema predominantly involves the upper lobes, whereas alpha-1 antitrypsin deficiency involves the lower lobes."),
            "MRCP": ("Inhaled corticosteroid indication based on blood eosinophils", "Blood eosinophil count >= 300 cells/uL with frequent exacerbations", "Inhaled corticosteroids added to LAMA/LABA (triple therapy) provide significant exacerbation reduction when blood eosinophils are >= 300/uL."),
            "MRCEM": ("Controlled oxygen delivery in acute hypercapnic exacerbation", "Venturi mask delivering 24% to 28% oxygen targeting SpO2 88–92%", "High-flow oxygen in COPD can worsen ventilation-perfusion mismatch and abolish hypoxic drive; Venturi masks allow precise titration to 88–92%."),
            "SMLE": ("Roflumilast phosphodiesterase-4 inhibitor indication", "Severe COPD with chronic bronchitis, FEV1 < 50%, and frequent exacerbations", "Roflumilast is an oral PDE-4 inhibitor that reduces systemic inflammation and exacerbation frequency in severe COPD with chronic bronchitis."),
            "HAAD / DHA": ("Cor pulmonale screening and clinical manifestations", "Right ventricular hypertrophy and peripheral edema secondary to pulmonary hypertension", "Chronic alveolar hypoxia triggers pulmonary arterial vasoconstriction, leading to pulmonary hypertension, RV remodeling, and cor pulmonale."),
            "UHS MBBS": ("Diagnostic spirometric threshold for fixed airflow limitation", "Post-bronchodilator FEV1/FVC ratio less than 0.70", "A post-bronchodilator FEV1/FVC ratio < 0.70 confirms persistent, non-fully reversible airflow limitation diagnostic of COPD.")
        }
    },
    {
        "name": "Community-Acquired Pneumonia", "system": "Respiratory", "ref_key": "nice_asthma",
        "entity": "community-acquired pneumonia", "hallmark": "fever, productive cough, pleuritic chest pain, and lobar consolidation",
        "primary_drug": "empiric beta-lactam and macrolide antimicrobial therapy",
        "subjects": {"Step 1": "Microbiology", "NEET PG": "Microbiology", "UHS MBBS": "Microbiology", "FCPS": "Medicine", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Streptococcus pneumoniae virulence and capsule polysaccharide", "Antiphagocytic capsular polysaccharide preventing opsonization", "The polysaccharide capsule of Streptococcus pneumoniae is its primary virulence factor, inhibiting complement C3b deposition and phagocytosis."),
            "Step 2 CK": ("CURB-65 pneumonia risk stratification score", "Confusion, Urea > 7, RR >= 30, BP < 90/60, and Age >= 65", "CURB-65 stratifies mortality risk in pneumonia: scores of 0–1 are suitable for outpatient care, score 2 warrants hospital admission, and >= 3 ICU triage."),
            "Step 3": ("Hospitalized severe CAP empiric dual antimicrobial therapy", "Intravenous ceftriaxone plus azithromycin or levofloxacin monotherapy", "ATS/IDSA guidelines recommend combination beta-lactam plus macrolide or respiratory fluoroquinolone monotherapy for hospitalized non-ICU pneumonia."),
            "PLAB / UKMLA": ("CRB-65 assessment in general practice without blood urea", "CRB-65 score of 0 supporting home treatment with oral amoxicillin", "In UK primary care where point-of-care urea is unavailable, CRB-65 evaluates Confusion, RR >= 30, and BP < 90/60; score 0 allows oral amoxicillin at home."),
            "AMC": ("Atypical pneumonia and Legionella pneumophila testing", "Urinary Legionella pneumophila serogroup 1 antigen testing", "Legionnaires' disease presents with high fever, relative bradycardia, hyponatremia, and diarrhea, diagnosed rapidly by urinary antigen assay."),
            "MCCQE": ("Pneumococcal polysaccharide versus conjugate vaccine indications", "Sequential pneumococcal conjugate (PCV20) or PCV15 followed by PPSV23", "Routine pneumococcal vaccination protects adults aged >= 65 and younger adults with chronic medical conditions against invasive pneumococcal disease."),
            "FCPS": ("Complicated parapneumonic effusion and empyema thoracis", "Pleural fluid pH < 7.20, glucose < 3.3 mmol/L, and tube thoracostomy", "Complicated parapneumonic effusion requires urgent tube thoracostomy when pleural fluid pH < 7.20, glucose is low, or frank pus is aspirated."),
            "NLE": ("Most common causative pathogen in community-acquired pneumonia", "Streptococcus pneumoniae (pneumococcus)", "Streptococcus pneumoniae remains the single most common cause of community-acquired lobar pneumonia across all age groups in Pakistan."),
            "NEET PG": ("Mycoplasma pneumoniae clinical and laboratory features", "Cold agglutinin titer elevation and autoimmune hemolytic anemia", "Mycoplasma pneumoniae infection triggers IgM autoantibodies against I-antigen on red blood cells, causing transient cold autoimmune hemolysis."),
            "MRCP": ("Pseudomonas aeruginosa risk factors in severe pneumonia", "Structural lung disease such as bronchiectasis or severe COPD", "Antipseudomonal beta-lactams (piperacillin-tazobactam, cefepime) are indicated when severe structural lung disease or frequent steroid use is present."),
            "MRCEM": ("Severe sepsis secondary to pneumonia and septic shock triage", "Intravenous fluid resuscitation 30 mL/kg and blood cultures before antibiotics", "The Surviving Sepsis campaign mandates 30 mL/kg crystalloid bolus within 3 hours and blood cultures prior to broad-spectrum antimicrobials."),
            "SMLE": ("Hospital-acquired versus community-acquired pneumonia definition", "Pneumonia developing >= 48 hours after hospital admission", "Hospital-acquired pneumonia develops 48 hours or more after admission and was not incubating at the time of hospitalization."),
            "HAAD / DHA": ("Middle East Respiratory Syndrome Coronavirus (MERS-CoV) triage", "Reverse transcriptase PCR of lower respiratory tract specimens", "Suspected MERS-CoV presenting with severe acute respiratory distress requires strict airborne isolation and dual nasopharyngeal/sputum RT-PCR."),
            "UHS MBBS": ("Physical examination signs of lobar consolidation", "Dullness to percussion, increased tactile vocal fremitus, and bronchial breath sounds", "Lobar alveolar consolidation transmits sound vibrations more effectively than air-filled parenchyma, producing bronchial breathing and increased fremitus.")
        }
    },
    {
        "name": "Pulmonary Embolism & DVT", "system": "Cardiovascular", "ref_key": "nice_acs",
        "entity": "venous thromboembolism", "hallmark": "pleuritic chest pain, dyspnea, tachycardia, and D-dimer / CTPA filling defect",
        "primary_drug": "direct oral anticoagulants or systemic thrombolysis",
        "subjects": {"Step 1": "Pathology", "NEET PG": "Pharmacology", "UHS MBBS": "Medicine", "FCPS": "Surgery", "other": "Medicine"},
        "concepts": {
            "Step 1": ("Virchow triad in thrombosis and Factor V Leiden mutation", "Resistance to degradation by activated protein C", "Factor V Leiden is a point mutation (Arg506Gln) that prevents cleavage and inactivation of activated Factor V by protein C, predisposing to venous thrombosis."),
            "Step 2 CK": ("Wells criteria and diagnostic algorithm with CTPA", "Computed tomography pulmonary angiography (CTPA) as definitive imaging", "In patients with high clinical probability of pulmonary embolism (Wells score > 4), CTPA is the initial diagnostic imaging investigation of choice."),
            "Step 3": ("Duration of anticoagulation in provoked versus unprovoked PE", "Three months for provoked PE versus extended indefinite for unprovoked", "A first provoked PE secondary to a major transient risk factor (e.g., surgery) requires 3 months of therapy; unprovoked events require long-term evaluation."),
            "PLAB / UKMLA": ("D-dimer interpretation in low-probability presentations", "High negative predictive value of D-dimer ruling out PE", "In patients with low or intermediate clinical pre-test probability (Wells score <= 4), a normal D-dimer safely excludes pulmonary embolism without CTPA."),
            "AMC": ("Massive pulmonary embolism emergency systemic thrombolysis", "Intravenous recombinant tissue plasminogen activator (alteplase 100 mg)", "Massive pulmonary embolism presenting with sustained systemic hypotension (systolic BP < 90 mm Hg) requires immediate emergency systemic fibrinolysis."),
            "MCCQE": ("Venous thromboembolism prophylaxis in surgical inpatients", "Subcutaneous low-molecular-weight heparin (enoxaparin) and compression", "Pharmacological thromboprophylaxis with LMWH combined with intermittent pneumatic compression reduces postoperative DVT and fatal PE in high-risk surgery."),
            "FCPS": ("Inferior vena cava filter placement indications", "Absolute contraindication to anticoagulation with acute proximal DVT", "IVC filters are indicated only when acute therapeutic anticoagulation is strictly contraindicated (e.g., active major intracranial bleed) or fails."),
            "NLE": ("Deep vein thrombosis clinical diagnosis and Wells score", "Unilateral calf swelling >= 3 cm compared to asymptomatic side and localized tenderness", "Wells criteria for DVT assign 1 point for calf circumference >= 3 cm compared to asymptomatic leg, localized deep vein tenderness, and pitting edema."),
            "NEET PG": ("ECG signs in acute pulmonary embolism", "S1Q3T3 pattern with sinus tachycardia and T-wave inversion in V1-V4", "The classic S1Q3T3 pattern (prominent S wave in lead I, Q wave in lead III, inverted T in lead III) reflects acute right ventricular strain."),
            "MRCP": ("Antiphospholipid antibody syndrome diagnosis and anticoagulation", "Lifelong therapeutic anticoagulation with warfarin (target INR 2.0 to 3.0)", "In thrombotic antiphospholipid syndrome, the TRAPS trial showed warfarin is superior to DOACs, which were associated with higher arterial thrombosis rates."),
            "MRCEM": ("Right ventricular strain echocardiographic criteria", "McConnell sign (RV free wall akinesis with sparing of the apex)", "McConnell sign on bedside emergency echocardiography is a highly specific marker of acute pulmonary embolism with right ventricular pressure overload."),
            "SMLE": ("Direct oral anticoagulant selection in pulmonary embolism", "Oral apixaban or rivaroxaban as immediate single-agent monotherapy", "Apixaban and rivaroxaban can be initiated immediately without prior parenteral heparin bridging, unlike dabigatran and edoxaban which require 5 days LMWH."),
            "HAAD / DHA": ("Long-haul travel related venous thromboembolism risk", "Frequent ambulation, calf exercises, and graduated compression stockings", "Long-haul flights (> 4 hours) increase DVT risk due to prolonged immobility and venous stasis; hydration and compression stockings mitigate risk."),
            "UHS MBBS": ("Gross and microscopic features of pulmonary thromboemboli", "Lines of Zahn representing alternating layers of platelets, fibrin, and erythrocytes", "Lines of Zahn distinguish ante-mortem thrombi formed in flowing blood from post-mortem blood clots, demonstrating laminar platelet and fibrin deposition.")
        }
    }
]

print(f"Loaded {len(DOMAINS_A)} domains into Mega Data A.")
