"""
Adds 10 final topics each to PLAB and AMC in build_mega39_b.py to reach 100 each.
"""

PLAB_FINAL_10 = [
    ("PLAB Psychiatry Bipolar I Disorder Lithium Monitoring Renal and Thyroid Function", "Psychiatry", "Behavioral Health",
     "patient established on oral lithium carbonate for bipolar disorder, performing 3-monthly serum lithium level monitoring (target 0.6-0.8 mmol/L) and 6-monthly serum creatinine and thyroid function tests per NICE CG185",
     "NICE Guideline CG185: Bipolar disorder: assessment and management", "https://www.nice.org.uk/guidance/cg185"),
    ("PLAB Psychiatry Schizophrenia Clozapine Indications Agranulocytosis Monitoring", "Psychiatry", "Behavioral Health",
     "patient with treatment-resistant schizophrenia failing two antipsychotic trials including an atypical agent, initiating oral clozapine under mandatory Central Non-Interventional Clozapine Monitoring Service registration",
     "NICE Guideline CG178: Psychosis and schizophrenia in adults: management", "https://www.nice.org.uk/guidance/cg178"),
    ("PLAB Psychiatry Anorexia Nervosa SCOFF Questionnaire and Refeeding Syndrome Prevention", "Psychiatry", "Behavioral Health",
     "young female with BMI 14.5 kg/m2, bradycardia, and hypokalemia admitted for nutritional rehabilitation, initiating low-calorie starter feeds with prophylactic phosphate, potassium, and thiamine per NICE NG69",
     "NICE Guideline NG69: Eating disorders: recognition and treatment", "https://www.nice.org.uk/guidance/ng69"),
    ("PLAB Psychiatry Generalized Anxiety Disorder GAD-7 Score Stepped Care Model", "Psychiatry", "Behavioral Health",
     "excessive uncontrollable worry about various everyday matters for 8 months with GAD-7 score 16, offering low-intensity psychological intervention followed by SSRI (sertraline) or individual CBT per NICE CG113",
     "NICE Guideline CG113: Generalised anxiety disorder and panic disorder in adults", "https://www.nice.org.uk/guidance/cg113"),
    ("PLAB Pediatrics Kawasaki Disease Intravenous Immunoglobulin and High-Dose Aspirin", "Pediatrics", "Cardiovascular",
     "child with high fever for 6 days, strawberry tongue, polymorphic rash, bilateral conjunctival injection, cervical adenopathy, and indurated hands, administering IVIG 2 g/kg single infusion and high-dose oral aspirin",
     "NICE Clinical Knowledge Summaries: Kawasaki disease", "https://cks.nice.org.uk/"),
    ("PLAB Pediatrics Meningococcal Disease Pre-Hospital Intramuscular Benzylpenicillin", "Pediatrics", "General Principles",
     "suspected meningococcal disease in primary care setting with non-blanching purpuric petechial rash, administering immediate urgent intramuscular or intravenous benzylpenicillin before emergency ambulance transfer",
     "NICE Guideline CG102: Meningitis (bacterial) and meningococcal septicaemia", "https://www.nice.org.uk/guidance/cg102"),
    ("PLAB Pediatrics Infantile Hypertrophic Pyloric Stenosis Hypochloremic Metabolic Alkalosis", "Pediatrics", "Gastrointestinal",
     "4-week-old male infant with projectile non-bilious vomiting, palpable olive-shaped epigastric mass, and serum chemistry showing hypochloremic hypokalemic metabolic alkalosis, correcting dehydration prior to Ramstedt pyloromyotomy",
     "British Association of Paediatric Surgeons (BAPS) Guidelines", "https://www.baps.org.uk/"),
    ("PLAB Pediatrics Intussusception Ultrasound Target Sign and Pneumatic Reduction", "Pediatrics", "Gastrointestinal",
     "8-month-old infant presenting with paroxysmal colicky crying, drawing legs up to abdomen, vomiting, and passage of redcurrant jelly stools, arranging urgent ultrasound-guided pneumatic air enema reduction",
     "Royal College of Paediatrics and Child Health (RCPCH) Emergency Clinical Guidance", "https://www.rcpch.ac.uk/"),
    ("PLAB Pediatrics Neonatal Hypoglycemia Thresholds Enteral Feeds vs IV Glucose", "Pediatrics", "Endocrine",
     "asymptomatic newborn with blood glucose 1.8 mmol/L at 2 hours of life, administering early supplementary feeding followed by repeat glucose measurement at 30 minutes, or IV 10% dextrose if refractory",
     "British Association of Perinatal Medicine (BAPM) Neonatal Hypoglycaemia Framework", "https://www.bapm.org/"),
    ("PLAB Pediatrics Developmental Dysplasia of the Hip Barlow and Ortolani Screening", "Pediatrics", "Musculoskeletal",
     "routine 6-week infant physical examination identifying asymmetrical thigh skin folds and positive Ortolani clunk on left hip abduction, organizing urgent pediatric hip ultrasound before 8 weeks of age",
     "NICE Clinical Knowledge Summaries: Developmental dysplasia of the hip", "https://cks.nice.org.uk/")
]

AMC_FINAL_10 = [
    # AMC Final 10: Pediatrics, Mental Health & Ethics (10)
    ("AMC Pediatrics Kawasaki Disease IVIG and High-Dose Aspirin Echocardiography", "Pediatrics", "Cardiovascular",
     "child with 6 days of unremitting high fever, bilateral bulbar conjunctivitis, cracked lips, strawberry tongue, and polymorphous rash, administering IVIG 2 g/kg and high-dose aspirin to prevent coronary artery aneurysms",
     "Royal Children's Hospital Melbourne Clinical Practice Guidelines: Kawasaki disease", "https://www.rch.org.au/"),
    ("AMC Pediatrics Henoch-Schonlein Purpura HSP Renal Involvement Urinalysis Protocol", "Pediatrics", "Renal",
     "child presenting with palpable purpura on buttocks and extensor lower legs, colicky abdominal pain, and arthralgia, performing baseline urinalysis and blood pressure with scheduled repeat monitoring for glomerulonephritis",
     "Royal Children's Hospital Melbourne Clinical Practice Guidelines: HSP", "https://www.rch.org.au/"),
    ("AMC Pediatrics Slipped Upper Femoral Epiphysis SUFE Emergent Cannulated Screw Fixation", "Surgery", "Musculoskeletal",
     "obese 12-year-old adolescent presenting with knee pain, limp, and obligatory external rotation on passive hip flexion, pelvis radiograph showing posteromedial slippage of femoral epiphysis, organizing urgent surgical pinning",
     "Australian Paediatric Orthopaedic Society (APOS) SUFE Clinical Practice Standards", "https://www.apos.org.au/"),
    ("AMC Pediatrics Developmental Dysplasia of the Hip Pavlik Harness Splinting", "Pediatrics", "Musculoskeletal",
     "infant diagnosed with unstable hip on Barlow test confirmed by ultrasound demonstrating alpha angle < 60 degrees, referring to pediatric orthopedics for fitting of a dynamic Pavlik harness splint",
     "Royal Children's Hospital Melbourne Clinical Practice Guidelines: DDH", "https://www.rch.org.au/"),
    ("AMC Mental Health Major Depression RANZCP Clinical Practice Guidelines SSRI Choice", "Psychiatry", "Behavioral Health",
     "adult presenting with pervasive depressed mood, anhedonia, and sleep disturbance, prescribing first-line oral escitalopram or sertraline and providing psychoeducation regarding 2-4 week therapeutic onset latency per RANZCP",
     "Royal Australian and New Zealand College of Psychiatrists (RANZCP) Clinical Practice Guidelines for Mood Disorders", "https://www.ranzcp.org/"),
    ("AMC Mental Health Bipolar Disorder Lithium Carbonate Therapy Therapeutic Trough Monitoring", "Psychiatry", "Behavioral Health",
     "patient with bipolar I disorder maintained on oral lithium carbonate, scheduling regular 12-hour trough serum lithium level monitoring (target 0.6-0.8 mmol/L) and routine eGFR/TSH testing every 6 months",
     "RANZCP Bipolar Disorder Clinical Practice Guidelines", "https://www.ranzcp.org/"),
    ("AMC Mental Health Schizophrenia Clozapine Mandatory Blood Monitoring Protocol AUST R", "Psychiatry", "Behavioral Health",
     "patient with treatment-refractory schizophrenia commencing oral clozapine, registering with the Clozapine Patient Monitoring System (CPMS) and performing weekly full blood counts for the first 18 weeks",
     "RANZCP Psychosis and Schizophrenia Guidelines", "https://www.ranzcp.org/"),
    ("AMC Mental Health Anorexia Nervosa Medical Admission Criteria and Refeeding Syndrome", "Psychiatry", "Behavioral Health",
     "adolescent with severe anorexia nervosa presenting with heart rate 38 bpm, postural systolic BP drop > 20 mm Hg, and BMI 13.8 kg/m2, requiring immediate medical hospital admission to prevent catastrophic refeeding syndrome",
     "National Eating Disorders Collaboration (NEDC) Australian Clinical Practice Guidelines", "https://www.nedc.com.au/"),
    ("AMC Ethics Notifiable Conditions State Public Health Reporting Timelines Australia", "Ethics", "General Principles",
     "diagnosing acute invasive meningococcal disease or acute hepatitis A, notifying the relevant state or territory public health unit by telephone immediately within 24 hours under public health legislation",
     "Communicable Diseases Network Australia (CDNA) National Notifiable Diseases", "https://www.health.gov.au/"),
    ("AMC Ethics Medical Negligence Four Legal Elements Duty Breach Causation Damages", "Ethics", "General Principles",
     "analyzing medical malpractice claim in Australian civil law: establishing the four essential legal elements of duty of care, breach of standard of care (peer professional opinion), factual causation (Civil Liability Act), and compensable damages",
     "Civil Liability Act 2002 (State and Territory Tort Law Reform)", "https://www.legislation.gov.au/")
]

def append_final():
    with open("scripts/build_mega39_b.py", "r", encoding="utf-8") as f:
        content = f.read()

    insertion = f"\n\nPLAB_TOPICS += {repr(PLAB_FINAL_10)}\n\nAMC_TOPICS += {repr(AMC_FINAL_10)}\n\n"
    target = "def main():"
    new_content = content.replace(target, insertion + target)

    with open("scripts/build_mega39_b.py", "w", encoding="utf-8") as f:
        f.write(new_content)

    print("Successfully appended final 10 topics to build_mega39_b.py!")

if __name__ == "__main__":
    append_final()
