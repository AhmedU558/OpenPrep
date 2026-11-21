import os

extra_smle = '''
    # SMLE Pediatrics, Obstetrics & Specialized Medicine (20)
    ("SMLE Pediatrics Neonatal Hyperbilirubinemia Phototherapy BiliTool Nomogram", "Pediatrics", "General Principles",
     "plotting serum total bilirubin on hour-specific Bhutani nomogram and initiating intensive phototherapy to prevent kernicterus",
     "Saudi Pediatric Association Neonatal Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Acute Bronchiolitis Supportive Therapy and Hydration", "Pediatrics", "Respiratory",
     "providing supportive humidified nasal cannula oxygen for SpO2 < 92% and enteral hydration, avoiding routine bronchodilators or steroids",
     "Saudi Pediatric Association Respiratory Protocols", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics G6PD Deficiency Acute Hemolytic Anemia Trigger Avoidance", "Pediatrics", "Hematology",
     "educating family on strict avoidance of fava beans, naphthalene, and oxidant drugs like nitrofurantoin following acute hemolysis",
     "Saudi Hematology Society Pediatric Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Type 1 Diabetes Continuous Glucose Monitoring Multiple Daily Injections", "Pediatrics", "Endocrine",
     "initiating basal-bolus subcutaneous insulin regimen with rapid-acting aspart before meals and long-acting degludec alongside continuous glucose sensor",
     "Saudi Pediatric Endocrinology Group Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Hirschsprung Disease Delayed Meconium Rectal Suction Biopsy", "Surgery", "Gastrointestinal",
     "performing bedside rectal suction biopsy demonstrating absent ganglion cells and hypertrophied nerve fibers in infant failing to pass meconium",
     "Saudi Pediatric Surgery Association Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Congenital Adrenal Hyperplasia Salt-Wasting Hydrocortisone Fludrocortisone", "Pediatrics", "Endocrine",
     "initiating oral hydrocortisone and mineralocorticoid fludrocortisone replacement with salt supplementation for 21-hydroxylase deficiency",
     "Saudi Pediatric Endocrinology Protocols", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Developmental Dysplasia Hip Barlow Ortolani Pavlik Harness", "Pediatrics", "Musculoskeletal",
     "confirming acetabular dysplasia with hip dynamic ultrasound and applying dynamic Pavlik harness before 6 months of age",
     "Saudi Orthopedic Association Pediatric Standards", "https://scfhs.org.sa/"),
    ("SMLE Pediatrics Celiac Disease Pediatric Diagnostic Criteria without Biopsy", "Pediatrics", "Gastrointestinal",
     "diagnosing celiac disease without duodenal biopsy when anti-tTG IgA >= 10 times upper limit of normal with positive endomysial antibodies",
     "Saudi Gastroenterology Association Pediatric Celiac Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Obstetrics Preeclampsia Severe Features Intravenous Magnesium Sulfate", "Obstetrics", "Pregnancy",
     "administering 4 g IV loading dose of magnesium sulfate followed by 1 g/h maintenance infusion and oral labetalol for severe preeclampsia",
     "Saudi Society of Obstetrics and Gynecology Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Obstetrics Postpartum Hemorrhage Active Management Oxytocin and B-Lynch", "Obstetrics", "Pregnancy",
     "administering prophylactic oxytocin 10 IU with delivery of anterior shoulder and performing uterine compression suture (B-Lynch) for refractory atony",
     "Saudi Maternal and Fetal Medicine Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Obstetrics Preterm Premature Rupture of Membranes Latency Antibiotics Betamethasone", "Obstetrics", "Pregnancy",
     "prescribing oral erythromycin for 10 days and intramuscular betamethasone 12 mg 24 hours apart to accelerate fetal lung maturation",
     "Saudi Society of Obstetrics and Gynecology PPROM Protocol", "https://scfhs.org.sa/"),
    ("SMLE Obstetrics Gestational Hypertension Oral Labetalol Ambulatory Management", "Obstetrics", "Pregnancy",
     "initiating oral labetalol 100-200 mg twice daily targeting blood pressure 135/85 mm Hg without excessive reduction impairing uteroplacental perfusion",
     "Saudi Hypertension in Pregnancy Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Neurology Acute Ischemic Stroke Tenecteplase Saudi Stroke Protocol", "Medicine", "Nervous System",
     "administering single IV bolus tenecteplase 0.25 mg/kg within 4.5 hours of ischemic stroke symptom onset following non-contrast CT head",
     "Saudi Stroke Association Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Neurology Multiple Sclerosis Relapsing-Remitting High-Efficacy Ocrelizumab", "Medicine", "Nervous System",
     "initiating humanized anti-CD20 monoclonal antibody ocrelizumab infusions every 6 months to suppress relapse rate and MRI lesion accumulation",
     "Saudi Multiple Sclerosis Chapter Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Neurology Parkinson Disease Levodopa-Carbidopa Motor Fluctuations Entacapone", "Medicine", "Nervous System",
     "adding COMT inhibitor entacapone 200 mg with each levodopa dose to extend dopamine half-life and reduce end-of-dose wearing off",
     "Saudi Neurology Society Movement Disorder Consensus", "https://scfhs.org.sa/"),
    ("SMLE Neurology Status Epilepticus Rapid IV Lorazepam Levetiracetam Protocol", "Medicine", "Nervous System",
     "administering IV lorazepam 0.1 mg/kg followed by IV levetiracetam 60 mg/kg over 10 minutes for generalized convulsive seizure lasting > 5 minutes",
     "Saudi Epilepsy Society Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Rheumatology Rheumatoid Arthritis Methotrexate Subcutaneous Folic Acid", "Medicine", "Musculoskeletal",
     "prescribing oral or subcutaneous methotrexate 15-25 mg once weekly alongside folic acid 5 mg weekly for active inflammatory polyarthritis",
     "Saudi Rheumatology Association RA Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Rheumatology Systemic Lupus Erythematosus Hydroxychloroquine Retinal Screening", "Medicine", "Musculoskeletal",
     "initiating oral hydroxychloroquine 5 mg/kg/day for all SLE patients, arranging baseline and annual retinal visual fields and OCT after 5 years",
     "Saudi Rheumatology Association Lupus Consensus", "https://scfhs.org.sa/"),
    ("SMLE Rheumatology Ankylosing Spondylitis Sacroiliitis TNF Inhibitor Adalimumab", "Medicine", "Musculoskeletal",
     "prescribing subcutaneous adalimumab 40 mg every 2 weeks for persistent inflammatory back pain refractory to maximum tolerated NSAIDs",
     "Saudi Rheumatology Association Axial Spondyloarthritis Guidelines", "https://scfhs.org.sa/"),
    ("SMLE Rheumatology Acute Gout Flare Colchicine vs Short-Course Prednisolone", "Medicine", "Musculoskeletal",
     "prescribing low-dose oral colchicine 1 mg followed by 0.5 mg 1 hour later, or oral prednisolone 30-35 mg daily for 5 days for acute monoarthritis",
     "Saudi Rheumatology Association Gout Management", "https://scfhs.org.sa/")
'''

script_path = os.path.join(os.path.dirname(__file__), "build_mega41_a.py")
with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

# Insert extra_smle before the closing bracket of SMLE_TOPICS
closing_bracket_idx = content.find("]\n\ndef main():")
new_content = content[:closing_bracket_idx] + ",\n" + extra_smle.strip() + "\n" + content[closing_bracket_idx:]

with open(script_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated build_mega41_a.py with 20 extra SMLE topics!")
