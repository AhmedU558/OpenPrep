import { CandidateSpec } from './types';

export const step2Batch29: CandidateSpec[] = [
  {
    "code": "op-c-s2-0701",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Amiodarone-Induced Thyrotoxicosis Type 1 vs Type 2 Differentiation",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with ischemic cardiomyopathy (left ventricular ejection fraction 30%) and prior sustained ventricular tachycardia managed with chronic oral amiodarone therapy presents with a 4-week history of worsening palpitations, heat intolerance, tremor, and progressive fatigue. He also notes new-onset exertional dyspnea and bilateral ankle swelling. Physical examination reveals an anxious, thin man with a fine tremor of outstretched hands. Vital signs: blood pressure 152/78 mm Hg, heart rate 118/min (irregularly irregular, consistent with new-onset atrial fibrillation), and oxygen saturation 97% on ambient air. Thyroid examination reveals a normal-sized, non-tender thyroid gland without palpable nodules, goiter, or audible bruits. Cardiovascular examination demonstrates tachycardia with an irregularly irregular rhythm and an S3 gallop. Laboratory evaluation reveals:\n- Serum TSH: < 0.01 mIU/L (normal: 0.4–4.0 mIU/L)\n- Free thyroxine (free T4): 4.1 ng/dL (normal: 0.8–1.8 ng/dL)\n- Total triiodothyronine (total T3): 242 ng/dL (normal: 80–200 ng/dL)\n- TSH receptor antibodies (TRAb): negative\n- Thyroid peroxidase (TPO) antibodies: negative\n- Serum interleukin-6 (IL-6): markedly elevated at 28 pg/mL (normal: < 5 pg/mL)\nTwenty-four-hour radioactive iodine uptake (RAIU) is measured at 1.1% (markedly suppressed). Color-flow Doppler ultrasonography of the thyroid gland demonstrates a normal thyroid volume without nodules and a complete absence of parenchymal vascular flow (Pattern 0, avascular thyroid parenchyma). Which of the following is the most appropriate initial pharmacological management?",
    "choices": [
      [
        "Initiate high-dose oral prednisone therapy",
        "This patient presents with TYPE 2 AMIODARONE-INDUCED THYROTOXICOSIS (AIT Type 2), a drug-induced DESTRUCTIVE SUBACUTE THYROIDITIS caused by direct amiodarone cytotoxicity on thyroid follicular cells, leading to unregulated release of preformed thyroid hormones into the circulation. Differentiating Type 1 from Type 2 AIT is a critical clinical decision because their pathogeneses and therapies are completely divergent: (1) PATHOPHYSIOLOGY: Type 1 AIT is an iodine-induced hyperthyroidism (Jod-Basedow phenomenon) occurring in patients with underlying autonomous nodular goiter or latent Graves disease, where excessive iodine from amiodarone stimulates de novo hormone synthesis. Type 2 AIT is a destructive chemical thyroiditis in an otherwise normal gland without underlying thyroid disease. (2) DIAGNOSTIC DIFFERENTIATION: Twenty-four-hour RAIU is typically low in both types in iodine-replete regions (due to massive iodine saturation from amiodarone). Therefore, COLOR-FLOW DOPPLER ULTRASONOGRAPHY IS THE DECISIVE DIFFERENTIATOR: Type 1 demonstrates hypervascularity (Pattern I–III, increased flow due to active synthesis), whereas Type 2 demonstrates COMPLETE ABSENCE OF INTRATHYROIDAL VASCULAR FLOW (Pattern 0, avascular parenchyma reflecting follicular necrosis). Markedly elevated serum IL-6 also strongly supports destructive thyroiditis (Type 2). (3) TREATMENT: Because Type 2 AIT is a self-limited destructive process rather than true hyperthyroidism with de novo synthesis, thionamides are ineffective. The first-line therapy is HIGH-DOSE SYSTEMIC GLUCOCORTICOIDS (ORAL PREDNISONE 40 mg daily for 2–4 weeks, followed by a gradual taper over 2–3 months), which stabilizes membranes and suppresses inflammatory cytotoxicity. In contrast, Type 1 AIT is treated with high-dose antithyroid thionamides (e.g., methimazole 40 mg daily) and potassium perchlorate to block iodine uptake."
      ],
      [
        "Initiate high-dose oral methimazole therapy combined with potassium perchlorate",
        "Methimazole (a thionamide that inhibits thyroid peroxidase) and potassium perchlorate are the treatment of choice for Type 1 AIT (active de novo synthesis in a hypervascular gland), but are ineffective in Type 2 AIT, which is an avascular destructive thyroiditis with no new hormone synthesis."
      ],
      [
        "Administer therapeutic high-dose radioactive iodine-131 ablation",
        "Radioactive iodine therapy is completely ineffective because the thyroid gland is saturated with iodine from amiodarone, resulting in a negligible uptake of 1.1% that prevents therapeutic radioiodine concentration."
      ],
      [
        "Discontinue amiodarone immediately without administering any additional thyroid-directed pharmacotherapy",
        "Because amiodarone has an extremely long elimination half-life of 50 to 100 days due to extensive adipose tissue storage, simply discontinuing the drug will not control acute thyrotoxicosis, which exacerbates heart failure and arrhythmia; active glucocorticoid therapy is mandatory."
      ],
      [
        "Perform emergent total thyroidectomy under general anesthesia",
        "Thyroidectomy is reserved for cases of severe thyrotoxicosis refractory to combined high-dose medical therapy (steroids plus thionamides) or rapidly worsening hemodynamics; medical management with oral prednisone is the mandatory initial step."
      ]
    ],
    "shortestValidSolution": "Amiodarone thyrotoxicosis + avascular thyroid on color Doppler + high IL-6 = Type 2 AIT (destructive thyroiditis) -> Oral prednisone.",
    "necessaryInference": "Differentiate Type 1 from Type 2 amiodarone-induced thyrotoxicosis using color-flow Doppler ultrasound (avascular = Type 2); treat destructive thyroiditis with oral glucocorticoids, not thionamides.",
    "strongestDistractor": "Initiate high-dose oral methimazole therapy combined with potassium perchlorate",
    "distractorExclusion": "Thionamides block de novo thyroid peroxidase hormone synthesis and treat Type 1 AIT (hypervascular goiter); they are ineffective in Type 2 AIT because the mechanism is follicular cell destruction and release of preformed hormone.",
    "citation": "Bogazzi F, Bartalena L, Martino E. Approach to the patient with amiodarone-induced thyrotoxicosis. J Clin Endocrinol Metab. 2010;95(6):2529-2535. PMID: 20525904.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK endocrinology/cardiology item requiring differential diagnosis of amiodarone-induced thyrotoxicosis using color-flow Doppler and selection of glucocorticoids for Type 2 destructive thyroiditis vs thionamides for Type 1.",
      "distractorExclusionNotes": "Methimazole targets active de novo synthesis (Type 1 AIT); RAI-131 fails due to iodine pool saturation; amiodarone withdrawal alone fails due to 100-day half-life; thyroidectomy is reserved for refractory crises.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0702",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Massive Pulmonary Embolism Hemodynamic Instability and Systemic Thrombolysis",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old woman is brought to the emergency department after collapsing at home. She underwent a left total hip arthroplasty 10 days ago. On arrival, she is lethargic, cold, and diaphoretic. Vital signs: blood pressure 74/42 mm Hg, heart rate 138/min, respirations 34/min, and oxygen saturation 84% on ambient air that improves to 89% on high-flow non-rebreather mask. Physical examination reveals elevated jugular venous distension to the angle of the jaw, an accentuated pulmonic component of the second heart sound (P2), and clear lung fields bilaterally. Bedside echocardiography demonstrates a massively dilated right ventricle with severe systolic dysfunction, flattening of the interventricular septum into the left ventricle ('D-shaped' septum), and moderate tricuspid regurgitation. An immediate 1-liter bolus of intravenous normal saline is infused, but her blood pressure remains 76/44 mm Hg. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate intravenous systemic thrombolytic therapy with recombinant tissue plasminogen activator (alteplase)",
        "PULMONARY EMBOLISM (PE) is risk-stratified based on hemodynamic stability and right ventricular (RV) dysfunction: (1) MASSIVE (HIGH-RISK) PE is defined by acute PE presenting with SUSTAINED HYPOTENSION (systolic blood pressure < 90 mm Hg or drop in SBP >= 40 mm Hg from baseline for > 15 minutes, or requiring vasopressors) not caused by hypovolemia, sepsis, or arrhythmia, or presenting in CARDIAC ARREST. In massive PE, acute mechanical occlusion of >= 50% of the pulmonary arterial bed abruptly increases RV afterload, precipitating acute RV failure (cor pulmonale), bowing of the interventricular septum, left ventricular underfilling, and cardiogenic shock. For patients with MASSIVE PE AND HEMODYNAMIC INSTABILITY without absolute contraindications to anticoagulation/thrombolysis, the definitive first-line therapy is IMMEDIATE SYSTEMIC THROMBOLYSIS with intravenous ALTEPLASE (rt-PA 100 mg infused over 2 hours, or 50 mg push in cardiac arrest). Systemic thrombolysis rapidly dissolves the obstructing clot, acutely reducing pulmonary vascular resistance, decompressing the right ventricle, and restoring systemic cardiac output and arterial blood pressure. (2) SUBMASSIVE (INTERMEDIATE-RISK) PE has RV strain or biomarker elevation without systemic hypotension, managed primarily with parenteral anticoagulation; systemic thrombolysis is reserved for clinical deterioration."
      ],
      [
        "Therapeutic anticoagulation with subcutaneous low-molecular-weight heparin (enoxaparin) monotherapy",
        "Anticoagulation alone prevents further thrombus propagation but does not rapidly dissolve the obstructing embolus; in hemodynamically unstable massive PE, systemic thrombolysis is mandatory."
      ],
      [
        "Placement of an emergent inferior vena cava (IVC) filter followed by observation",
        "IVC filters prevent future emboli but do not relieve existing hemodynamic collapse; inserting a filter while in shock delays life-saving thrombolysis and does not treat acute shock."
      ],
      [
        "Aggressive continuous intravenous fluid resuscitation with 4 liters of normal saline over 2 hours",
        "Aggressive volume loading in acute RV failure worsens RV chamber dilation, exacerbates interventricular septal flattening, further compresses the LV, and worsens cardiogenic shock."
      ],
      [
        "Urgent transfer for elective surgical pulmonary thromboendarterectomy in 48 hours",
        "Pulmonary thromboendarterectomy is the treatment for CHRONIC thromboembolic pulmonary hypertension (CTEPH), not acute life-threatening massive PE in shock."
      ]
    ],
    "shortestValidSolution": "Post-op hip replacement + shock (BP 74/42) + severe acute RV failure on echo = Massive PE -> Immediate systemic thrombolysis with IV alteplase.",
    "necessaryInference": "Stratify pulmonary embolism: massive PE with persistent hypotension requires immediate systemic thrombolytic therapy (alteplase) to relieve acute RV obstructive shock.",
    "strongestDistractor": "Therapeutic anticoagulation with subcutaneous low-molecular-weight heparin (enoxaparin) monotherapy",
    "distractorExclusion": "Anticoagulation alone is standard for hemodynamically stable PE, but is insufficient for massive PE in shock, which requires rapid active clot lysis with thrombolytics.",
    "citation": "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31504429.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Massive Pulmonary Embolism Hemodynamic Instability and Systemic Thrombolysis.",
      "distractorExclusionNotes": "Competitor Therapeutic anticoagulation with subcutaneous low- excluded by Anticoagulation alone is standard for hemodynamically stable.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0703",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Acute Variceal Bleeding Octreotide Ceftriaxone and Early Endoscopy",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with decompensated alcoholic cirrhosis and known esophageal varices presents to the emergency department with massive hematemesis. On arrival, he is pale, diaphoretic, and confused. Vital signs: blood pressure 84/52 mm Hg, heart rate 124/min, and oxygen saturation 96% on 2 L nasal cannula. Physical examination reveals spider angiomas, palmar erythema, and moderate abdominal ascites. Laboratory evaluation shows: hemoglobin 7.2 g/dL, platelets 54,000/microL, and INR 1.8. Two large-bore 16-gauge peripheral intravenous lines are placed, and fluid resuscitation is initiated along with packed red blood cell transfusion targeting a restrictive hemoglobin threshold of 7 to 8 g/dL. Which of the following combination medical regimens should be immediately initiated before emergent diagnostic and therapeutic upper endoscopy?",
    "choices": [
      [
        "Intravenous octreotide infusion and intravenous ceftriaxone antibiotic prophylaxis",
        "ACUTE ESOPHAGEAL VARICEAL BLEEDING is a life-threatening complication of portal hypertension in cirrhotic patients, associated with a 15-20% 6-week mortality. Management follows a structured multimodal protocol: (1) RESUSCITATION: Large-bore IV access and RESTRICTIVE TRANSFUSION STRATEGY (targeting hemoglobin 7-8 g/dL; over-transfusion elevates portal venous pressure and precipitates rebound variceal bleeding). (2) VASOACTIVE MEDICATION: INTRAVENOUS OCTREOTIDE (somatostatin analog) should be started immediately (50 mcg IV bolus followed by 50 mcg/hr continuous infusion for 2-5 days). Octreotide inhibits the release of vasodilatory peptides (e.g., glucagon), causing selective SPLANCHNIC ARTERIAL VASOCONSTRICTION, which reduces portal venous inflow and dramatically lowers portal and variceal pressures. (3) PROPHYLACTIC ANTIBIOTICS: Cirrhotic patients with GI bleeding have high rates of bacterial infection (spontaneous bacterial peritonitis, bacteremia, pneumonia) and early rebleeding. INTRAVENOUS CEFTRIAXONE (1 g daily for up to 7 days) significantly reduces bacterial infections, reduces variceal rebleeding rates, and improves overall survival. (4) EMERGENT ESOPHAGOGASTRODUODENOSCOPY (EGD) within 12 hours for ENDOSCOPIC VARICEAL LIGATION (banding). If bleeding is refractory, transjugular intrahepatic portosystemic shunt (TIPS) is indicated."
      ],
      [
        "Oral propranolol and intravenous pantoprazole infusion monotherapy",
        "Non-selective beta-blockers (propranolol, nadolol) are used for PRIMARY and SECONDARY prophylaxis in stable patients, but are STRICTLY CONTRAINDICATED in acute active variceal hemorrhage because they blunt compensatory tachycardia and worsen hypotension."
      ],
      [
        "Intravenous tranexamic acid and subcutaneous vitamin K1 (phytonadione)",
        "Tranexamic acid has no proven mortality benefit in variceal bleeding; vitamin K is ineffective for reversing coagulopathy of severe end-stage liver failure and delays vital therapy."
      ],
      [
        "Immediate insertion of a Sengstaken-Blakemore balloon tamponade tube as initial first-line therapy",
        "Balloon tamponade is a rescue bridge reserved for massive refractory exsanguinating hemorrhage when endoscopy fails, not initial first-line medical therapy due to high perforation risk."
      ],
      [
        "Intravenous regular insulin infusion and fresh frozen plasma transfusion targeting INR < 1.1",
        "Liberal plasma transfusion overloads intravascular volume, exacerbating portal hypertension; target INR correction is not recommended in acute cirrhosis management."
      ]
    ],
    "shortestValidSolution": "Cirrhosis + massive variceal hematemesis = Resuscitate (Hb target 7-8) + IV Octreotide (splanchnic vasoconstriction) + IV Ceftriaxone (infection/rebleeding prophylaxis) + Early EGD.",
    "necessaryInference": "Formulate acute variceal hemorrhage management: initiate IV octreotide and prophylactic IV ceftriaxone immediately prior to emergent endoscopy; avoid beta-blockers during acute hemorrhage.",
    "strongestDistractor": "Oral propranolol and intravenous pantoprazole infusion monotherapy",
    "distractorExclusion": "Beta-blockers (propranolol) are used for secondary prevention after recovery; they are contraindicated during acute shock because they prevent compensatory tachycardia.",
    "citation": "Garcia-Tsao G, Abraldes JG, Berzigotti A, Bosch J. Portal hypertensive bleeding in cirrhosis: Risk stratification, diagnosis, and management: 2016 practice guidance by the American Association for the Study of Liver Diseases. Hepatology. 2017;65(1):310-335. PMID: 27786365.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Variceal Bleeding Octreotide Ceftriaxone and Early Endoscopy.",
      "distractorExclusionNotes": "Competitor Oral propranolol and intravenous pantoprazole infu excluded by Beta-blockers (propranolol) are used for secondary preventio.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0704",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Severe Hyperkalemia with ECG Changes Membrane Stabilization",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with end-stage renal disease on hemodialysis presents to the emergency department after missing his last two scheduled dialysis sessions. He reports progressive generalized muscle weakness, fatigue, and palpitations. Physical examination reveals an alert man with flaccid weakness of his lower extremities (strength 3/5) and diminished deep tendon reflexes. Blood pressure is 148/88 mm Hg and heart rate is 46/min. An immediate 12-lead ECG demonstrates symmetric, tall, peaked T waves across all precordial leads, flattening and disappearance of P waves, prolonged PR interval, and widening of the QRS complex to 148 msec with a sinoventricular rhythm. Stat laboratory evaluation confirms serum potassium of 8.2 mEq/L (normal 3.5-5.0 mEq/L) and serum calcium of 9.1 mg/dL. Which of the following is the most appropriate initial pharmacological intervention?",
    "choices": [
      [
        "Immediate intravenous calcium gluconate (or calcium chloride) to stabilize cardiac myocyte membranes",
        "SEVERE HYPERKALEMIA (serum K+ > 6.5 mEq/L, or any level associated with ECG CHANGES) is a medical emergency requiring rapid, staged therapy: (1) STEP 1: CARDIAC MEMBRANE STABILIZATION. In hyperkalemia, elevated extracellular potassium lowers the resting membrane potential (making it less negative, closer to threshold), which inactivates fast voltage-gated sodium channels, slowing intraventricular conduction (QRS widening, peaked T waves, sine wave, asystole/VF). The IMMEDIATE FIRST-LINE INTERVENTION is INTRAVENOUS CALCIUM (10 mL of 10% CALCIUM GLUCONATE, or calcium chloride via central access). Extracellular calcium antagonizes the toxic electrophysiological effects of hyperkalemia on cardiac conduction by shifting the threshold potential to a less negative value, restoring the normal electrical difference between resting and threshold potentials. Calcium takes effect within 1-3 minutes and stabilizes the myocardium for 30-60 minutes. Crucially, CALCIUM DOES NOT LOWER SERUM POTASSIUM. (2) STEP 2: SHIFT POTASSIUM INTO CELLS (acting within 15-30 min): IV regular insulin (10 units) plus 50% dextrose (25 g D50), nebulized albuterol (10-20 mg), and IV sodium bicarbonate (if metabolic acidosis is present). (3) STEP 3: ELIMINATE POTASSIUM FROM THE BODY: Loop diuretics (furosemide), potassium binders (patiromer, sodium zirconium cyclosilicate), or EMERGENT HEMODIALYSIS (definitive removal in ESRD)."
      ],
      [
        "Immediate intravenous regular insulin 10 units with 50% dextrose bolus",
        "Insulin shifts potassium into cells but takes 15-30 minutes to act; in the presence of life-threatening ECG changes (QRS widening), IV calcium must be given first to prevent immediate cardiac arrest."
      ],
      [
        "Immediate administration of oral sodium zirconium cyclosilicate (Lokelma) 10 g slurry",
        "Oral potassium binders eliminate potassium via the GI tract over hours; they have zero role in the immediate emergent stabilization of acute hyperkalemic cardiotoxicity."
      ],
      [
        "Subcutaneous injection of terbutaline and continuous intravenous sodium bicarbonate infusion",
        "Beta-agonists and bicarbonate shift potassium into cells over 30 minutes, but do not provide immediate membrane stabilization against ventricular fibrillation."
      ],
      [
        "Emergent placement of a femoral hemodialysis catheter without any prior medical therapy",
        "Hemodialysis is the definitive method to clear potassium in ESRD, but preparing and initiating dialysis takes 30-60 minutes; immediate IV calcium and insulin/dextrose must be given while dialysis is prepared."
      ]
    ],
    "shortestValidSolution": "K+ 8.2 with peaked T waves and QRS widening = Severe hyperkalemia with cardiotoxicity -> Immediate IV Calcium gluconate (membrane stabilization) BEFORE insulin/dextrose.",
    "necessaryInference": "Sequence hyperkalemia management: when ECG changes (peaked T, wide QRS) are present, immediate IV calcium gluconate is mandatory to stabilize cardiac membranes before shifting or removing potassium.",
    "strongestDistractor": "Immediate intravenous regular insulin 10 units with 50% dextrose bolus",
    "distractorExclusion": "Insulin/dextrose is the crucial second step to shift potassium intracellularly, but IV calcium must be administered first to stabilize cardiac membranes against fatal arrhythmias.",
    "citation": "Weisberg LS. Management of severe hyperkalemia. Crit Care Med. 2008;36(12):3246-3251. PMID: 18936701.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Severe Hyperkalemia with ECG Changes Membrane Stabilization.",
      "distractorExclusionNotes": "Competitor Immediate intravenous regular insulin 10 units wit excluded by Insulin/dextrose is the crucial second step to shift potassi.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0705",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Infective Endocarditis Duke Criteria and Initial Empiric Regimen",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man presents with a 3-week history of remittent fevers, night sweats, anorexia, and a 4-kg weight loss. He has a history of severe mitral valve prolapse with regurgitation. Ten days ago, he noticed painless, non-tender, erythematous macules on the palms of both hands and soles of his feet. Physical examination reveals a temperature of 38.8\u00b0C (101.8\u00b0F), blood pressure 118/74 mm Hg, and pulse 96/min. Conjunctival examination reveals subconjunctival flame-shaped hemorrhages. Cardiovascular examination demonstrates a new, harsh, holosystolic murmur heard best at the cardiac apex radiating to the left axilla. Funduscopic examination reveals retinal hemorrhages with pale, white centers. Before starting antimicrobial therapy, three separate sets of blood cultures are drawn from different venipuncture sites over 1 hour. Transthoracic echocardiography demonstrates a 12-mm mobile, oscillating vegetation on the posterior mitral valve leaflet with severe regurgitation. Which of the following initial intravenous empiric antibiotic regimens is most appropriate for this patient while blood culture results are pending?",
    "choices": [
      [
        "Vancomycin monotherapy (or vancomycin plus ceftriaxone) targeting staphylococci, streptococci, and enterococci",
        "INFECTIVE ENDOCARDITIS (IE) is diagnosed using the MODIFIED DUKE CRITERIA, requiring 2 major criteria, 1 major + 3 minor, or 5 minor criteria. This patient fulfills Duke criteria with: (1) Major: Positive echocardiogram showing a mobile mitral vegetation; (2) Major: New regurgitant murmur; (3) Minor: Fever >= 38.0\u00b0C; (4) Minor: Predisposing heart condition (mitral valve prolapse); (5) Minor: Vascular phenomena (Janeway lesions [painless erythematous palmar/plantar macules], conjunctival hemorrhages); (6) Minor: Immunologic phenomena (Roth spots [retinal hemorrhages with pale centers]). In NATIVE VALVE ENDOCARDITIS (NVE), the most common causative organisms are Staphylococcus aureus, viridans group streptococci (Streptococcus mutans, mitis, oralis), Enterococcus faecalis, and coagulase-negative staphylococci. While awaiting definitive microbiological identification and sensitivities from the 3 sets of blood cultures, initial EMPIRIC THERAPY FOR NATIVE VALVE ENDOCARDITIS must cover methicillin-resistant S. aureus (MRSA), streptococci, and enterococci. The recommended first-line empiric regimen is INTRAVENOUS VANCOMYCIN MONOTHERAPY (or vancomycin combined with ceftriaxone or ampicillin-sulbactam). In contrast, PROSTHETIC VALVE ENDOCARDITIS (PVE within 12 months of valve surgery) requires triple coverage: VANCOMYCIN + GENTAMICIN + RIFAMPIN (rifampin penetrates biofilm on prosthetic hardware, added after blood is cleared)."
      ],
      [
        "Vancomycin plus gentamicin plus rifampin",
        "Triple therapy with vancomycin, gentamicin, and oral rifampin is the standard empiric regimen for PROSTHETIC VALVE ENDOCARDITIS (PVE), not native valve endocarditis."
      ],
      [
        "Oral amoxicillin-clavulanate outpatient therapy",
        "Infective endocarditis requires prolonged, high-dose intravenous bactericidal therapy; oral outpatient antibiotics are entirely inadequate."
      ],
      [
        "Intravenous piperacillin-tazobactam plus ciprofloxacin",
        "This regimen targets Gram-negative pseudomonal nosocomial infections; native valve endocarditis is predominantly caused by Gram-positive cocci (Staph, Strep, Enterococcus)."
      ],
      [
        "Intravenous fluconazole plus amphotericin B",
        "Fungal endocarditis (Candida, Aspergillus) is rare, occurring primarily in indwelling lines, parenteral nutrition, or post-cardiac surgery; empiric antifungal coverage is not indicated for community-acquired native valve IE."
      ]
    ],
    "shortestValidSolution": "Native valve endocarditis + mobile mitral vegetation + Janeway lesions + Roth spots = Native valve IE -> Empiric IV Vancomycin (covers MRSA, Strep, Enterococcus).",
    "necessaryInference": "Select empiric antimicrobial regimens for infective endocarditis: native valve endocarditis requires IV vancomycin; prosthetic valve endocarditis requires vancomycin + gentamicin + rifampin.",
    "strongestDistractor": "Vancomycin plus gentamicin plus rifampin",
    "distractorExclusion": "Rifampin and gentamicin are added to vancomycin for prosthetic valve endocarditis to penetrate prosthetic biofilm; native valve endocarditis uses vancomycin monotherapy or vancomycin + ceftriaxone.",
    "citation": "Baddour LM, Wilson WR, Bayer AS, et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications: A Scientific Statement for Healthcare Professionals From the American Heart Association. Circulation. 2015;132(15):1435-1486. PMID: 26373316.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Infective Endocarditis Duke Criteria and Initial Empiric Regimen.",
      "distractorExclusionNotes": "Competitor Vancomycin plus gentamicin plus rifampin excluded by Rifampin and gentamicin are added to vancomycin for prosthet.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0706",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Intussusception Diagnosis and Air-Contrast Enema Reduction",
    "provisionalDifficulty": 4,
    "stem": "An 8-month-old previously healthy boy is brought to the emergency department by his parents for sudden, severe paroxysmal abdominal pain. During these episodes, which occur every 15 to 20 minutes, the infant screams inconsolably, draws his legs up toward his abdomen, and appears pale and diaphoretic. Between episodes, he appears subdued and somnolent. Two hours ago, he had a bowel movement containing dark red blood mixed with mucus ('currant jelly stool') and had two episodes of non-bilious emesis. Physical examination reveals an afebrile infant. Abdominal palpation between paroxysms reveals a tubular, sausage-shaped, non-tender mass in the right upper quadrant, with an empty right lower quadrant (Dance sign). There is no abdominal distension, rebound tenderness, or voluntary guarding. Plain abdominal radiography shows no pneumoperitoneum or signs of perforation. Transverse abdominal ultrasonography demonstrates a classic multilayered 'target' or 'doughnut' sign measuring 3.2 cm in the hepatic flexure. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Non-operative pneumatic (air) or hydrostatic (water-soluble contrast) enema reduction under fluoroscopic or sonographic guidance",
        "INTUSSUSCEPTION is the most common cause of intestinal obstruction in infants between 6 and 36 months of age, most frequently involving the invagination (telescoping) of the terminal ileum into the cecum (ILEOCOLIC INTUSSUSCEPTION). Most cases (> 90%) in young infants are idiopathic, triggered by viral gastrointestinal or respiratory illnesses (e.g., adenovirus) that cause hypertrophied Peyer patches serving as a pathological lead point. Older children (> 2 years) are more likely to have anatomical lead points (Meckel diverticulum, Henoch-Sch\u00f6nlein purpura intramural hematoma, intestinal polyp, Burkitt lymphoma). The classic triad is episodic colicky abdominal pain (drawing legs to abdomen), a sausage-shaped right upper quadrant mass, and 'CURRANT JELLY' STOOLS (mixture of sloughed ischemic mucosa, blood, and mucus). ABDOMINAL ULTRASONOGRAPHY is the diagnostic modality of choice, demonstrating a 'target' or 'doughnut' sign in transverse section and a 'pseudokidney' sign in longitudinal section. In the absence of contraindications (peritonitis, bowel perforation, or prolonged hemodynamic instability), the FIRST-LINE DIAGNOSTIC AND THERAPEUTIC PROCEDURE is NON-OPERATIVE PNEUMATIC (AIR) OR HYDROSTATIC CONTRAST ENEMA REDUCTION under fluoroscopic or ultrasound guidance, which achieves successful reduction in 80-90% of cases. Immediate SURGICAL REDUCTION / LAPAROTOMY is indicated ONLY IF: signs of peritonitis/perforation are present, hemodynamic shock is unresponsive to fluid resuscitation, or non-operative enema reduction fails after multiple attempts."
      ],
      [
        "Immediate exploratory laparotomy with manual bowel reduction and appendectomy",
        "Surgical laparotomy is reserved for patients with bowel perforation, peritonitis, shock, or failed pneumatic/hydrostatic enema reduction; performing surgery first exposes the infant to unnecessary operative morbidity."
      ],
      [
        "Administration of oral polyethylene glycol laxative and close outpatient observation",
        "Laxatives are strictly contraindicated in mechanical bowel obstruction and could precipitate perforation."
      ],
      [
        "Flexible sigmoidoscopy with cold biopsy of the rectosigmoid junction to rule out Hirschsprung disease",
        "Sigmoidoscopy does not reach the right upper quadrant ileocolic intussusception and provides no therapeutic reduction; Hirschsprung presents in the newborn period with failure to pass meconium."
      ],
      [
        "Technetium-99m pertechnetate scintigraphy (Meckel scan) prior to any intervention",
        "A Meckel scan detects ectopic gastric mucosa, but acute intussusception is an emergency requiring immediate air enema reduction to relieve intestinal ischemia, not delayed nuclear imaging."
      ]
    ],
    "shortestValidSolution": "Infant with episodic screaming + sausage-shaped RUQ mass + currant jelly stool + target sign on US = Intussusception -> Non-operative pneumatic (air) enema reduction.",
    "necessaryInference": "Formulate intussusception management: in hemodynamically stable infants without peritonitis or perforation, non-operative pneumatic (air) or hydrostatic enema is the primary diagnostic and therapeutic procedure.",
    "strongestDistractor": "Immediate exploratory laparotomy with manual bowel reduction and appendectomy",
    "distractorExclusion": "Laparotomy is reserved for perforation, peritonitis, or failed air enema; stable infants should always undergo non-operative pneumatic reduction first.",
    "citation": "Applegate KE. Intussusception in children: evidence-based diagnosis and treatment. Pediatr Radiol. 2009;39 Suppl 2:S140-S143. PMID: 19308376.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Intussusception Diagnosis and Air-Contrast Enema Reduction.",
      "distractorExclusionNotes": "Competitor Immediate exploratory laparotomy with manual bowel excluded by Laparotomy is reserved for perforation, peritonitis, or fail.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0707",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Preeclampsia with Severe Features Magnesium Sulfate and Delivery Timing",
    "provisionalDifficulty": 5,
    "stem": "A 31-year-old primigravida at 34 weeks of gestation presents to the labor and delivery triage unit with a 24-hour history of severe, persistent throbbing frontal headache and blurry vision with bright spots (scotoma) that has not responded to acetaminophen. She also reports new-onset right upper quadrant abdominal pain. Vital signs: blood pressure 174/114 mm Hg, heart rate 86/min, and respirations 18/min. Repeat blood pressure 15 minutes later is 176/112 mm Hg. Physical examination reveals 3+ generalized pitting pretibial edema and brisk 4+ patellar reflexes with 3 beats of unsustained clonus. Abdominal examination demonstrates marked tenderness to palpation over the right upper quadrant without rebound. Laboratory studies show: platelets 68,000/microL, serum creatinine 1.4 mg/dL (baseline 0.6 mg/dL), AST 240 U/L, ALT 210 U/L, and urine protein-to-creatinine ratio 1.2 mg/mg. Fetal heart rate tracing is Category 1. Which of the following is the most appropriate immediate medical and obstetrical management strategy for this patient?",
    "choices": [
      [
        "Initiation of intravenous magnesium sulfate for eclampsia seizure prophylaxis, intravenous labetalol or hydralazine for acute severe hypertension, and planned delivery",
        "PREECLAMPSIA WITH SEVERE FEATURES is diagnosed when a pregnant patient (>= 20 weeks of gestation) with new-onset hypertension (systolic BP >= 140 mm Hg or diastolic BP >= 90 mm Hg) develops either: (1) Severe blood pressure elevation (systolic >= 160 mm Hg or diastolic >= 110 mm Hg on two occasions >= 15 min apart); OR (2) Evidence of maternal end-organ dysfunction: thrombocytopenia (platelets < 100,000/microL), renal insufficiency (creatinine > 1.1 mg/dL or doubling), impaired liver function (AST/ALT >= 2x ULN) or severe persistent RUQ/epigastric pain, pulmonary edema, or new-onset persistent neurological/cerebral symptoms (severe headache, visual scotomata, hyperreflexia/clonus). Management requires three simultaneous pillars: (1) SEIZURE PROPHYLAXIS: INTRAVENOUS MAGNESIUM SULFATE (4-6 g IV loading dose over 20-30 min followed by 1-2 g/hr continuous infusion) is the gold standard to prevent eclamptic seizures, continued intrapartum and for 24 hours postpartum. (2) ACUTE ANTIHYPERTENSIVE THERAPY: For severe-range blood pressures (>= 160/110 mm Hg), INTRAVENOUS LABETALOL, INTRAVENOUS HYDRALAZINE, or ORAL FAST-ACTING NIFEDIPINE must be administered promptly to reduce the risk of maternal hemorrhagic stroke (target BP 140-150 / 90-100 mm Hg; avoid precipitous drops that compromise placental perfusion). (3) DELIVERY TIMING: The only definitive cure is delivery. In preeclampsia WITH SEVERE FEATURES at >= 34 WEEKS OF GESTATION (or at any gestational age with HELLP syndrome, eclampsia, pulmonary edema, DIC, or non-reassuring fetal status), IMMEDIATE DELIVERY IS INDICATED regardless of bishop score (induction of labor or cesarean delivery for standard obstetrical indications). In contrast, preeclampsia WITHOUT severe features is delivered at 37 weeks."
      ],
      [
        "Immediate administration of intravenous labetalol and magnesium sulfate, with expectant outpatient management until 37 weeks of gestation",
        "Expectant management beyond 34 weeks in preeclampsia with severe features carries high maternal-fetal mortality (hepatic rupture, stroke, abruptio placentae); delivery is indicated at >= 34 weeks."
      ],
      [
        "Immediate administration of intravenous diazepam boluses for seizure prophylaxis and oral captopril for blood pressure control",
        "Benzodiazepines are second-line for refractory seizures; magnesium sulfate is the proven first-line agent for eclampsia prophylaxis; ACE inhibitors (captopril) are strictly teratogenic and contraindicated in pregnancy."
      ],
      [
        "Immediate emergency emergent cesarean section under general anesthesia before initiating any antihypertensive or anticonvulsant therapy",
        "Emergency operative delivery without prior blood pressure control and seizure prophylaxis risks maternal intraoperative eclamptic seizure, stroke, and anesthetic complications; medical stabilization must occur first."
      ],
      [
        "Intravenous dexamethasone for HELLP syndrome reversal, with planned discharge once transaminases normalize",
        "Corticosteroids do not reverse preeclampsia pathophysiology or improve maternal outcomes; delivery is the only definitive treatment for severe preeclampsia/HELLP."
      ]
    ],
    "shortestValidSolution": "Preeclampsia with severe features (BP 174/114, headache, low platelets, high LFTs) at 34 weeks = IV Magnesium sulfate + IV Labetalol/Hydralazine + Delivery at >= 34 weeks.",
    "necessaryInference": "Manage preeclampsia with severe features: administer IV magnesium sulfate (seizure prophylaxis), urgent IV antihypertensives (labetalol/hydralazine), and proceed with delivery at >= 34 weeks.",
    "strongestDistractor": "Immediate administration of intravenous labetalol and magnesium sulfate, with expectant outpatient management until 37 weeks of gestation",
    "distractorExclusion": "Preeclampsia with severe features is delivered at >= 34 weeks; only mild preeclampsia without severe features is managed expectantly until 37 weeks.",
    "citation": "American College of Obstetricians and Gynecologists. Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin, Number 222. Obstet Gynecol. 2020;135(6):e237-e260. PMID: 32443079.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Preeclampsia with Severe Features Magnesium Sulfate and Delivery Timing.",
      "distractorExclusionNotes": "Competitor Immediate administration of intravenous labetalol  excluded by Preeclampsia with severe features is delivered at >= 34 week.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0708",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Tension Pneumothorax Clinical Diagnosis and Immediate Decompression",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old unrestrained driver is brought to the trauma center following a high-speed motor vehicle collision. On arrival, he is in severe respiratory distress, cyanotic, and combative. Vital signs: blood pressure 72/40 mm Hg, heart rate 144/min, respirations 38/min, and oxygen saturation 78% on a non-rebreather mask with 100% O2. Physical examination reveals absent breath sounds over the entire right hemithorax, hyperresonance to percussion over the right chest, marked jugular venous distension, and visible deviation of the trachea to the left side. The patient's blood pressure drops to 66/38 mm Hg, and his pulse becomes thready. The radiology technician arrives at the bedside with a portable chest x-ray machine to take an upright chest radiograph. Which of the following is the most appropriate immediate action?",
    "choices": [
      [
        "Immediate needle decompression of the right hemithorax (at the second intercostal space in the midclavicular line or fifth intercostal space in the anterior axillary line), followed immediately by tube thoracostomy",
        "TENSION PNEUMOTHORAX is an immediately life-threatening surgical emergency caused by a 'one-way valve' mechanical air leak in the visceral or parietal pleura (from penetrating trauma, rib fracture laceration, blast injury, or mechanical positive-pressure ventilation). Air enters the pleural space during inspiration but cannot exit during expiration. Progressive intrapleural air accumulation creates positive intrathoracic pressure, collapsing the ipsilateral lung and shifting the mediastinum (trachea and heart) toward the CONTRALATERAL side. This compresses the vena cava and right atrium, severely OBSTRUCTING VENOUS RETURN to the heart. The resulting acute reduction in cardiac preload leads to profound OBSTRUCTIVE SHOCK (severe hypotension, compensatory tachycardia) and hypoxemia. The classic physical signs are UNILATERAL ABSENT BREATH SOUNDS, HYPERRESONANCE TO PERCUSSION, JUGULAR VENOUS DISTENSION, and TRACHEAL DEVIATION AWAY from the affected side. Crucially: TENSION PNEUMOTHORAX IS A STRICTLY CLINICAL DIAGNOSIS. Diagnostic imaging (portable chest radiography or CT) MUST NEVER DELAY TREATMENT. The immediate life-saving intervention is IMMEDIATE NEEDLE DECOMPRESSION using a large-bore (14-16 gauge) angiocatheter inserted into the right hemithorax\u2014traditionally at the 2nd intercostal space in the midclavicular line, or as recommended in modern ATLS guidelines, at the 4th/5th intercostal space in the anterior/mid-axillary line. Decompression converts a tension pneumothorax into a simple open pneumothorax, instantly relieving vena caval compression and restoring cardiac output. This must be followed immediately by definitive TUBE THORACOSTOMY (chest tube placement)."
      ],
      [
        "Allow the radiology technician to obtain the portable chest radiograph immediately to confirm pneumothorax size before intervention",
        "Obtaining diagnostic imaging in suspected tension pneumothorax is a critical error; waiting for a chest radiograph in an unstable patient can result in immediate cardiac arrest."
      ],
      [
        "Immediate endotracheal rapid sequence intubation with high positive-pressure ventilation to improve oxygenation",
        "Positive-pressure ventilation in tension pneumothorax forces more air into the pleural space, accelerating mediastinal shift, worsening obstructive shock, and causing immediate circulatory collapse."
      ],
      [
        "Immediate pericardiocentesis via a subxiphoid approach to decompress suspected cardiac tamponade",
        "Cardiac tamponade causes JVD and hypotension (Beck triad), but lungs are clear with equal breath sounds and no hyperresonance; this patient has right-sided hyperresonance, absent breath sounds, and tracheal deviation."
      ],
      [
        "Emergent exploratory laparotomy to evaluate for massive intra-abdominal hemoperitoneum",
        "The patient's shock is obstructive due to thoracic tension physiology, not hemoperitoneum; performing laparotomy without decompressing the chest would be fatal."
      ]
    ],
    "shortestValidSolution": "Trauma + shock (BP 72/40) + absent breath sounds + hyperresonance + tracheal deviation = Tension pneumothorax -> Immediate needle decompression BEFORE any x-ray.",
    "necessaryInference": "Recognize tension pneumothorax: a purely clinical diagnosis requiring immediate needle decompression and chest tube placement; never delay for radiographic confirmation.",
    "strongestDistractor": "Allow the radiology technician to obtain the portable chest radiograph immediately to confirm pneumothorax size before intervention",
    "distractorExclusion": "Waiting for an x-ray in tension pneumothorax with shock is a fatal error; clinical decompression must occur immediately.",
    "citation": "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th ed. Chicago, IL: American College of Surgeons; 2018. PMID: 30080766",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Tension Pneumothorax Clinical Diagnosis and Immediate Decompression.",
      "distractorExclusionNotes": "Competitor Allow the radiology technician to obtain the porta excluded by Waiting for an x-ray in tension pneumothorax with shock is a.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0709",
    "exam": "Step 2 CK",
    "subject": "Neurology",
    "system": "Nervous System",
    "topic": "Acute Ischemic Stroke Thrombolysis Eligibility and Thrombectomy Window",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old right-handed man is brought to the emergency department by emergency medical services 75 minutes after the sudden onset of right facial droop, right arm and leg paralysis, and severe global aphasia. His symptoms began witnessed at 10:15 AM while eating breakfast; arrival at the hospital is 11:30 AM. He has a history of hypertension and osteoarthritis. He takes lisinopril 20 mg daily. Vital signs: blood pressure 168/94 mm Hg, heart rate 82/min, respirations 16/min, and blood glucose 118 mg/dL. Neurological examination reveals dense right hemiplegia, right homonymous hemianopia, and complete global aphasia (National Institutes of Health Stroke Scale [NIHSS] score of 18). Emergent non-contrast head CT demonstrates no intracranial hemorrhage, mass effect, or early signs of major territorial infarction (Alberta Stroke Program Early CT Score [ASPECTS] is 10). CT angiography of the head and neck demonstrates an acute, complete occlusion of the M1 segment of the left middle cerebral artery. Which of the following is the most appropriate management plan?",
    "choices": [
      [
        "Initiation of intravenous thrombolysis (alteplase or tenecteplase) immediately, followed by urgent transfer to the interventional suite for mechanical thrombectomy",
        "ACUTE ISCHEMIC STROKE management requires rapid, protocolized decision-making based on time windows and imaging: (1) INTRAVENOUS THROMBOLYSIS: Intravenous recombinant tissue plasminogen activator (ALTEPLASE 0.9 mg/kg or TENECTEPLASE 0.25 mg/kg) is recommended for patients presenting within 3 HOURS (and up to 4.5 HOURS in eligible patients) of symptom onset with disabling neurological deficits, provided non-contrast head CT rules out intracranial hemorrhage and there are no absolute contraindications (e.g., active internal bleeding, recent intracranial surgery/trauma within 3 months, severe uncontrolled BP > 185/110 mm Hg, therapeutic anticoagulation with elevated INR or DOAC use). Here, the patient presented at 75 minutes (well within the 4.5-hour window), non-contrast CT is normal, and blood pressure is < 185/110 mm Hg. Therefore, intravenous thrombolysis should be initiated IMMEDIATELY without delay. (2) ENDOVASCULAR MECHANICAL THROMBECTOMY (EVT): In patients with an acute LARGE VESSEL OCCLUSION (LVO) in the anterior circulation (internal carotid artery or M1 segment of the middle cerebral artery), mechanical thrombectomy provides dramatic functional benefit and reduces mortality. Thrombectomy is indicated within 6 HOURS of symptom onset, and up to 24 HOURS in selected patients with salvageable penumbra based on CT perfusion or MRI (DAWN and DEFUSE-3 criteria). Crucially, ELIGIBILITY FOR THROMBECTOMY DOES NOT PRECLUDE THROMBOLYSIS: patients presenting within 4.5 hours with an anterior LVO should receive BOTH intravenous thrombolysis AND urgent mechanical thrombectomy ('BRIDGING THERAPY'). IV thrombolysis should be infused immediately while the interventional team and catheterization suite are mobilized, without waiting to observe a clinical response to thrombolysis."
      ],
      [
        "Withhold intravenous thrombolysis and proceed directly to mechanical thrombectomy alone because large vessel occlusions never recanalize with thrombolysis",
        "Large vessel occlusions recanalize with IV thrombolytics in 10-20% of cases before catheterization; guidelines recommend bridging therapy (administering IV thrombolysis while mobilizing thrombectomy), not withholding it."
      ],
      [
        "Immediate administration of oral aspirin 325 mg and clopidogrel 300 mg dual antiplatelet therapy",
        "Aspirin and antiplatelet agents must be HELD for 24 hours following intravenous thrombolysis to prevent secondary hemorrhagic transformation; early antiplatelets do not recanalize occluded large vessels."
      ],
      [
        "Intravenous heparin infusion bolus targeting a partial thromboplastin time (PTT) of 60 to 80 seconds",
        "Therapeutic heparin anticoagulation in acute ischemic stroke increases intracranial hemorrhage without improving neurological outcomes; it is strictly avoided."
      ],
      [
        "Aggressive blood pressure reduction with intravenous nicardipine to target systolic blood pressure < 120 mm Hg",
        "Excessive blood pressure lowering reduces cerebral perfusion pressure across the ischemic penumbra, worsening infarct expansion; blood pressure should only be lowered to < 185/110 mm Hg to allow safe thrombolysis."
      ]
    ],
    "shortestValidSolution": "Acute stroke at 75 min + M1 MCA occlusion + no hemorrhage on CT = Immediate IV thrombolysis (alteplase/tenecteplase) + Urgent mechanical thrombectomy (bridging therapy).",
    "necessaryInference": "Formulate acute ischemic stroke therapy: administer IV thrombolysis within 4.5 hours and perform mechanical thrombectomy within 24 hours for anterior large vessel occlusions.",
    "strongestDistractor": "Withhold intravenous thrombolysis and proceed directly to mechanical thrombectomy alone because large vessel occlusions never recanalize with thrombolysis",
    "distractorExclusion": "Guidelines mandate bridging therapy: eligible patients presenting within 4.5 hours with large vessel occlusion should receive IV thrombolytic infusion immediately without delaying thrombectomy.",
    "citation": "Powers WJ, Rabinstein AA, Ackerson T, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke: 2019 Update to the 2018 Guidelines. Stroke. 2019;50(12):e344-e418. PMID: 31662037.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Ischemic Stroke Thrombolysis Eligibility and Thrombectomy Window.",
      "distractorExclusionNotes": "Competitor Withhold intravenous thrombolysis and proceed dire excluded by Guidelines mandate bridging therapy: eligible patients prese.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0710",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "General Principles",
    "topic": "Neuroleptic Malignant Syndrome vs Serotonin Syndrome Management",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man with treatment-resistant schizophrenia is hospitalized following the initiation of high-potency oral haloperidol 10 mg daily combined with intramuscular haloperidol decanoate. On hospital day 4, he becomes increasingly confused, mute, and unresponsive. Physical examination reveals an obtunded, profusely diaphoretic man. Vital signs: temperature 40.2\u00b0C (104.4\u00b0F), blood pressure 178/104 mm Hg (with marked lability, dropping to 110/68 mm Hg an hour later), heart rate 128/min, and respirations 26/min. Neurological examination reveals extreme, generalized muscular resistance throughout the full range of motion of his upper and lower extremities ('lead-pipe rigidity'). Deep tendon reflexes are 1+ bilaterally with down-going toes; there is no ocular clonus, spontaneous clonus, or shivering. Laboratory evaluation demonstrates: WBC 18,400/microL with 82% neutrophils, serum creatine kinase (CK) 48,000 U/L (normal 30-200 U/L), serum AST 140 U/L, and serum creatinine 2.4 mg/dL. Which of the following is the most appropriate initial management step for this patient?",
    "choices": [
      [
        "Immediate discontinuation of haloperidol, aggressive supportive care with intravenous isotonic fluids and active external cooling, and administration of dantrolene or bromocriptine",
        "NEUROLEPTIC MALIGNANT SYNDROME (NMS) is an idiosyncratic, life-threatening neurological emergency triggered by DOPAMINE D2 RECEPTOR ANTAGONISTS (most commonly first-generation high-potency antipsychotics like haloperidol and fluphenazine, but also second-generation antipsychotics and antiemetics like metoclopramide, or abrupt withdrawal of levodopa/dopamine agonists). Central D2 receptor blockade in the hypothalamus impairs thermoregulation, driving extreme hyperthermia, while nigrostriatal D2 blockade causes profound skeletal muscle rigidity. Diagnostic tetrad of NMS includes: (1) HYPERTHERMIA (temperature often > 40\u00b0C); (2) SEVERE MUSCLE RIGIDITY ('LEAD-PIPE' RIGIDITY, generalized resistance across all muscle groups); (3) AUTONOMIC INSTABILITY (tachycardia, labile blood pressure, profuse diaphoresis, tachypnea); (4) ALTERED MENTAL STATUS (confusion, catatonia, stupor, coma). Laboratory findings: MASSIVE CK ELEVATION (often > 10,000-50,000 U/L) from rhabdomyolysis, leukocytosis, and acute kidney injury from myoglobinuria. Management: (1) IMMEDIATELY DISCONTINUE ALL ANTIPSYCHOTICS; (2) Aggressive supportive care in an ICU: aggressive IV crystalloid hydration to prevent myoglobinuric renal failure and active external cooling (cooling blankets, ice packs); (3) Specific medical pharmacotherapy for moderate-to-severe cases: DANTROLENE (a Ryanodine receptor antagonist that inhibits sarcoplasmic reticulum calcium release in skeletal muscle, reversing rigidity and hyperthermia) and/or BROMOCRIPTINE or AMANTADINE (dopamine receptor agonists to overcome central D2 blockade). Benzodiazepines (lorazepam) help control agitation and hyperarousal."
      ],
      [
        "Immediate administration of intravenous cyproheptadine and high-dose fentanyl infusion",
        "Cyproheptadine is a 5-HT2A antagonist used for SEROTONIN SYNDROME; serotonin syndrome features neuromuscular HYPERREACTIVITY (hyperreflexia, clonus, tremor), whereas NMS features HYPOREFLEXIA and lead-pipe rigidity."
      ],
      [
        "Immediate administration of intramuscular flumazenil to reverse suspected benzodiazepine toxicity",
        "Flumazenil is a benzodiazepine receptor antagonist that can trigger intractable withdrawal seizures in tolerant patients; it has no role in NMS."
      ],
      [
        "Switch oral haloperidol to high-dose intravenous chlorpromazine to sedate the patient",
        "Chlorpromazine is another dopamine D2 antagonist; administering more neuroleptics in NMS would be catastrophic and fatal."
      ],
      [
        "Perform an emergent lumbar puncture followed by broad-spectrum empiric ceftriaxone, vancomycin, and ampicillin",
        "The patient has classic NMS with lead-pipe rigidity, massive CK (48k), and autonomic instability after initiating haloperidol; while CNS infection can be considered, stopping the neuroleptic and treating NMS is the immediate lifesaving priority."
      ]
    ],
    "shortestValidSolution": "Haloperidol day 4 + high fever (40.2\u00b0C) + lead-pipe rigidity + CK 48k + autonomic lability = Neuroleptic malignant syndrome -> Stop antipsychotic + ICU cooling/IV fluids + Dantrolene/Bromocriptine.",
    "necessaryInference": "Differentiate NMS from serotonin syndrome: NMS features lead-pipe rigidity and hyporeflexia with massive CK elevation treated with dantrolene/bromocriptine; serotonin syndrome features hyperreflexia, clonus, and tremor treated with cyproheptadine.",
    "strongestDistractor": "Immediate administration of intravenous cyproheptadine and high-dose fentanyl infusion",
    "distractorExclusion": "Cyproheptadine treats serotonin syndrome (characterized by clonus, hyperreflexia, and shivering); NMS is treated with dopamine agonists (bromocriptine) and dantrolene.",
    "citation": "Strawn JR, Keck PE Jr, Caroff SN. Neuroleptic malignant syndrome. Am J Psychiatry. 2007;164(6):870-876. PMID: 17541044.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Neuroleptic Malignant Syndrome vs Serotonin Syndrome Management.",
      "distractorExclusionNotes": "Competitor Immediate administration of intravenous cyprohepta excluded by Cyproheptadine treats serotonin syndrome (characterized by c.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0711",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Endocrine",
    "topic": "Diabetic Ketoacidosis Fluid Resuscitation and Potassium Management",
    "provisionalDifficulty": 5,
    "stem": "A 21-year-old woman with type 1 diabetes mellitus presents to the emergency department with nausea, persistent vomiting, diffuse abdominal pain, and rapid, deep breathing for 18 hours. She ran out of insulin 3 days ago. On physical examination, she is lethargic and markedly dehydrated with dry mucous membranes and fruity, acetone-scented breath. Vital signs: blood pressure 92/56 mm Hg, heart rate 126/min, respirations 32/min (Kussmaul breathing), and temperature 37.1\u00b0C. Point-of-care blood glucose is 486 mg/dL. Arterial blood gas demonstrates: pH 7.12, PaCO2 18 mm Hg, PaO2 96 mm Hg, and calculated bicarbonate 6 mEq/L. Serum chemistries reveal: sodium 131 mEq/L, potassium 3.1 mEq/L, chloride 98 mEq/L, BUN 36 mg/dL, and serum creatinine 1.6 mg/dL. Serum beta-hydroxybutyrate is markedly elevated at 6.4 mmol/L, and urine dipstick shows 4+ ketones. An immediate 1-liter bolus of 0.9% normal saline is initiated. Which of the following is the most appropriate next step regarding insulin and electrolyte management?",
    "choices": [
      [
        "Hold intravenous insulin, administer intravenous potassium chloride (20-30 mEq/hr) until serum potassium is > 3.3 mEq/L, and continue vigorous intravenous isotonic fluid resuscitation",
        "DIABETIC KETOACIDOSIS (DKA) management requires strict adherence to a physiological protocol: (1) FLUID RESUSCITATION: Patients typically have a 5-6 liter fluid deficit from osmotic diuresis. Initial resuscitation requires 1-1.5 L/hr of 0.9% normal saline (or balanced crystalloid) for the first 1-2 hours to restore effective circulating arterial volume. (2) POTASSIUM MANAGEMENT: This is the most CRITICAL AND POTENTIALLY FATAL STEP in DKA. Total body potassium is ALWAYS SEVERELY DEPLETED in DKA (due to osmotic diuresis and urinary ketoacid excretion). However, serum potassium is often normal or elevated at presentation because acidosis and insulin deficiency shift potassium out of cells. When insulin is administered, it drives potassium back into cells via Na+/K+-ATPase, while rehydration dilutes extracellular potassium and promotes urinary excretion. IF SERUM POTASSIUM IS < 3.3 MEQ/L, INTRAVENOUS INSULIN MUST BE HELD IMMEDIATELY. Administering insulin to a patient with K+ < 3.3 mEq/L will drive potassium precipitously lower, triggering fatal cardiac arrhythmias (ventricular fibrillation/asystole) and respiratory muscle arrest. Potassium chloride (20-30 mEq/hr) must be infused with IV fluids until serum potassium rises above 3.3 mEq/L before starting insulin. Once K+ is 3.3-5.2 mEq/L, insulin can be initiated (0.1 units/kg/hr) while co-infusing 20-30 mEq K+ per liter of IV fluid. (3) DEXTROSE ADDITION: When serum glucose drops below 200 mg/dL, 5% dextrose (D5W or D5 1/2NS) MUST BE ADDED to the IV fluids while continuing insulin to prevent hypoglycemia and allow continued ketoacidosis clearance until the anion gap closes."
      ],
      [
        "Immediately start a continuous intravenous regular insulin infusion at 0.14 units/kg/hr without potassium supplementation",
        "Starting insulin when potassium is < 3.3 mEq/L will drive potassium into cells, triggering fatal cardiac arrhythmias or respiratory arrest."
      ],
      [
        "Administer an immediate intravenous bolus of 100 mEq sodium bicarbonate to correct arterial pH < 7.15",
        "Bicarbonate therapy in DKA does not improve morbidity or mortality and can worsen hypokalemia, delay ketone clearance, and cause paradoxical CSF acidosis; it is reserved only for pH < 6.9."
      ],
      [
        "Initiate subcutaneous glargine insulin 40 units and oral potassium citrate tablets",
        "Severe DKA requires continuous intravenous regular insulin infusion and IV potassium; oral/subcutaneous administration is unreliable due to gastric stasis and dehydration."
      ],
      [
        "Switch normal saline to sterile water infusion and administer intravenous furosemide to clear hyperglycemia",
        "Sterile water causes fatal intravascular hemolysis; furosemide would worsen severe hypovolemic shock and hypokalemia."
      ]
    ],
    "shortestValidSolution": "DKA with K+ 3.1 mEq/L = HOLD insulin + IV potassium chloride until K+ > 3.3 mEq/L + IV saline fluids (prevent fatal hypokalemic cardiac arrest).",
    "necessaryInference": "Formulate DKA potassium rules: never start insulin if serum potassium is < 3.3 mEq/L; replenish potassium first to prevent fatal hypokalemic arrhythmias.",
    "strongestDistractor": "Immediately start a continuous intravenous regular insulin infusion at 0.14 units/kg/hr without potassium supplementation",
    "distractorExclusion": "Starting insulin before replenishing potassium when K < 3.3 mEq/L causes precipitous hypokalemia and fatal cardiac arrhythmias.",
    "citation": "Kitabchi AE, Umpierrez GE, Miles JM, Fisher JN. Hyperglycemic crises in adult patients with diabetes. Diabetes Care. 2009;32(7):1335-1343. PMID: 19564476.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Diabetic Ketoacidosis Fluid Resuscitation and Potassium Management.",
      "distractorExclusionNotes": "Competitor Immediately start a continuous intravenous regular excluded by Starting insulin before replenishing potassium when K < 3.3 .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0712",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Giant Cell Arteritis Corticosteroids Before Temporal Artery Biopsy",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman presents with a 2-week history of severe, persistent throbbing right temporal headache and scalp tenderness when brushing her hair. Over the past 5 days, she has experienced severe fatigue, generalized achiness in her shoulder and pelvic girdles, and painful jaw fatigue while chewing meat and tough foods ('jaw claudication') that forces her to stop eating. This morning, she experienced a transient 10-minute episode of painless vision loss in her right eye ('amaurosis fugax') that spontaneously resolved. Physical examination reveals a thickened, tender, minimally pulsatile right temporal artery. Visual acuity is 20/25 in both eyes, and funduscopic examination is currently normal. Laboratory evaluation demonstrates: ESR 108 mm/hr (normal < 30 mm/hr), C-reactive protein 48 mg/L (normal < 5 mg/L), and mild normocytic anemia (hemoglobin 10.4 g/dL). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate initiation of high-dose systemic corticosteroid therapy (intravenous methylprednisolone or high-dose oral prednisone) before obtaining a temporal artery biopsy",
        "GIANT CELL (TEMPORAL) ARTERITIS (GCA) is a large- and medium-vessel granulomatous vasculitis predominantly affecting elderly adults (> 50 years of age). It selectively targets the cranial branches of the external and internal carotid arteries (superficial temporal, ophthalmic, posterior ciliary, and vertebral arteries) as well as the aorta. The clinical hallmark includes: new-onset throbbing headache, scalp tenderness, JAW CLAUDICATION (painful masseter muscle fatigue during chewing, the single most specific clinical feature of GCA), polymyalgia rheumatica (shoulder/hip morning stiffness), and markedly elevated inflammatory markers (ESR > 50-100 mm/hr, CRP). The most devastating complication of GCA is PERMANENT, IRREVERSIBLE VISION LOSS due to anterior ischemic optic neuropathy (AION) caused by occlusion of the posterior ciliary arteries. Episodes of amaurosis fugax are warning herald signs of imminent permanent blindness. Therefore: WHEN GCA IS CLINICALLY SUSPECTED, IMMEDIATE HIGH-DOSE SYSTEMIC CORTICOSTEROID THERAPY (IV methylprednisolone 1,000 mg daily for visual symptoms, or oral prednisone 60 mg daily) MUST BE STARTED IMMEDIATELY. Treatment MUST NEVER BE DELAYED to obtain diagnostic imaging or temporal artery biopsy. High-dose steroids prevent contralateral blindness. Furthermore, TEMPORAL ARTERY BIOPSY (the gold standard, showing segmental granulomatous inflammation with multinucleated giant cells and internal elastic lamina fragmentation) REMAINS DIAGNOSTIC FOR UP TO 2 TO 4 WEEKS after corticosteroid initiation because histopathological features resolve very slowly."
      ],
      [
        "Delay corticosteroid therapy until a unilateral temporal artery biopsy can be performed in 48 hours to preserve histopathological accuracy",
        "Delaying corticosteroid therapy pending biopsy is a catastrophic error that risks irreversible permanent blindness; histopathology remains diagnostic for several weeks on steroids."
      ],
      [
        "Perform an emergent lumbar puncture to exclude subarachnoid hemorrhage and fungal meningitis",
        "The patient has classic features of GCA with jaw claudication, scalp tenderness, and ESR 108; lumbar puncture is unnecessary and delays urgent vision-saving steroids."
      ],
      [
        "Initiate oral methotrexate monotherapy and schedule outpatient rheumatology consultation in 2 weeks",
        "Methotrexate is a steroid-sparing agent for maintenance; it has a slow onset of weeks to months and provides zero acute protection against ischemic optic neuropathy."
      ],
      [
        "Prescribe high-dose oral sumatriptan for acute temporal migraine relief and re-evaluate ESR in 1 month",
        "Sumatriptan is a 5-HT1B/1D vasoconstrictor used for migraines; it is ineffective in arteritis and could exacerbate ischemic blindness in inflamed cranial arteries."
      ]
    ],
    "shortestValidSolution": "Elderly woman + temporal headache + jaw claudication + amaurosis fugax + ESR 108 = Giant cell arteritis -> Immediate high-dose steroids BEFORE temporal artery biopsy.",
    "necessaryInference": "Formulate giant cell arteritis management: start high-dose corticosteroids immediately upon clinical suspicion to prevent irreversible ischemic blindness; never delay steroids for biopsy.",
    "strongestDistractor": "Delay corticosteroid therapy until a unilateral temporal artery biopsy can be performed in 48 hours to preserve histopathological accuracy",
    "distractorExclusion": "Waiting for biopsy risks permanent blindness; corticosteroids do not alter temporal artery biopsy histology for up to 2-4 weeks.",
    "citation": "Salvarani C, Cantini F, Hunder GG. Polymyalgia rheumatica and giant-cell arteritis. Lancet. 2008;372(9634):234-245. PMID: 18640460.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Giant Cell Arteritis Corticosteroids Before Temporal Artery Biopsy.",
      "distractorExclusionNotes": "Competitor Delay corticosteroid therapy until a unilateral te excluded by Waiting for biopsy risks permanent blindness; corticosteroid.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0713",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Acute Epiglottitis Airway Protection in Operating Room",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old unimmunized boy is brought to the emergency department by his parents for acute, rapidly progressive difficulty breathing, high fever, and severe sore throat that began 8 hours ago. On physical examination, the child appears toxic, anxious, and pale. He is sitting upright, leaning forward with his neck hyperextended and his chin thrust forward, supporting himself on his hands (classic 'tripod' position). He is drooling saliva continuously and refuses to swallow or speak. Vital signs: temperature 39.8\u00b0C (103.6\u00b0F), heart rate 158/min, respirations 36/min with prominent inspiratory stridor, intercostal retractions, and oxygen saturation 91% on room air. The emergency department resident prepares to depress the child's tongue with a wooden blade to inspect the posterior oropharynx. Which of the following is the most appropriate immediate action?",
    "choices": [
      [
        "Immediately cancel the oral examination, keep the child calm in the parent's arms, mobilize the anesthesiology and otolaryngology teams, and transfer the patient directly to the operating room for definitive endotracheal intubation",
        "ACUTE EPIGLOTTITIS is a life-threatening pediatric airway emergency characterized by rapid, severe cellulitis and edema of the supraglottic structures (epiglottis, aryepiglottic folds, arytenoids). Classically caused by HAEMOPHILUS INFLUENZAE TYPE B (Hib) in unimmunized children, or Streptococcus pneumoniae, Staphylococcus aureus, and Group A Strep in immunized populations. The clinical presentation is rapid, toxic, and dramatic: high fever, severe dysphagia, DROOLING, muffled 'hot potato' voice, INSPIRATORY STRIDOR, and the 'TRIPOD' OR 'SNIFFING' POSITION (sitting upright, neck hyperextended to maximize airway diameter). The most critical principle in managing suspected epiglottitis is: AVOID ANY AGITATION OR DIRECT ORAL MANIPULATION. Attempting to visualize the posterior pharynx with a tongue depressor, performing rigid oral swabs, forcing the child to lie flat, or attempting painful IV placement can trigger ACUTE LARYNGOSPASM AND IMMEDIATE, COMPLETE AIRWAY OBSTRUCTION. Management: (1) Keep the child completely calm, undisturbed, in the parent's lap; (2) Provide humidified blow-by oxygen; (3) Immediately notify an experienced senior ANESTHESIOLOGIST AND OTOLARYNGOLOGIST (ENT); (4) Transfer the child directly to the OPERATING ROOM for direct visualization of the cherry-red, swollen epiglottis under controlled inhalation general anesthesia and immediate ENDOTRACHEAL INTUBATION. Surgical airway (tracheostomy or cricothyrotomy) equipment must be opened and ready at the bedside. Only after the airway is secured are IV access, blood cultures, and IV antibiotics (ceftriaxone plus vancomycin) initiated."
      ],
      [
        "Perform the tongue blade examination rapidly under good lighting to confirm the diagnosis before transferring to the ICU",
        "Direct oral examination with a tongue blade can trigger fatal acute laryngospasm and complete airway obstruction in epiglottitis."
      ],
      [
        "Obtain immediate portable soft-tissue lateral neck radiography in the emergency department to evaluate for the 'thumbprint' sign",
        "Lateral neck radiographs demonstrate the classic 'thumbprint' sign, but unstable children with severe respiratory distress and stridor must never be sent for imaging or delayed for x-rays; airway management takes absolute precedence."
      ],
      [
        "Administer nebulized racemic epinephrine and high-dose oral dexamethasone, then observe in the emergency department",
        "Nebulized racemic epinephrine and dexamethasone are first-line for CROUP (subglottic edema / barking cough), but are entirely ineffective for acute bacterial epiglottitis (supraglottic bacterial phlegmon)."
      ],
      [
        "Place the child in a supine position and obtain immediate peripheral intravenous access and blood cultures",
        "Forcing a child with epiglottitis into the supine position causes the swollen epiglottis to fall backward over the laryngeal inlet, causing immediate fatal asphyxiation."
      ]
    ],
    "shortestValidSolution": "Unimmunized child + high fever + drooling + tripod position + inspiratory stridor = Epiglottitis -> No oral exam / no agitation -> Transfer directly to OR for intubation.",
    "necessaryInference": "Manage pediatric acute epiglottitis: avoid oral exams, tongue blades, or agitation; secure the airway immediately in the operating room with ENT and anesthesia present.",
    "strongestDistractor": "Obtain immediate portable soft-tissue lateral neck radiography in the emergency department to evaluate for the 'thumbprint' sign",
    "distractorExclusion": "Imaging is useful only in mild, stable cases; in an unstable, drooling, stridorous child, waiting for x-rays risks fatal airway occlusion.",
    "citation": "Sobol SE, Zapata S. Epiglottitis and croup. Otolaryngol Clin North Am. 2008;41(3):551-566. PMID: 18435998.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Epiglottitis Airway Protection in Operating Room.",
      "distractorExclusionNotes": "Competitor Obtain immediate portable soft-tissue lateral neck excluded by Imaging is useful only in mild, stable cases; in an unstable.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0714",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Mesenteric Ischemia CT Angiography and Revascularization",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old woman with a history of permanent atrial fibrillation and severe peripheral artery disease presents to the emergency department with sudden-onset, agonizing periumbilical abdominal pain that began 3 hours ago. She has had two episodes of vomiting and one loose bowel movement with positive fecal occult blood. She describes the pain as 10/10 and screams whenever her abdomen is touched, but repeated physical examination reveals a soft, non-distended abdomen with normal active bowel sounds and completely ABSENT PERITONEAL SIGNS (no involuntary guarding, rigidity, or rebound tenderness). Her pain is striking because the severe distress is completely out of proportion to the benign abdominal findings. Vital signs: blood pressure 156/92 mm Hg, heart rate 118/min (irregularly irregular), and respirations 24/min. Laboratory evaluation shows: WBC 18,200/microL with 18% band forms, serum lactate 4.2 mmol/L (normal < 2.0 mmol/L), and normal serum amylase and lipase. Which of the following is the most appropriate next diagnostic step?",
    "choices": [
      [
        "Immediate intravenous contrast-enhanced computed tomography angiography (CTA) of the abdomen and pelvis",
        "ACUTE MESENTERIC ISCHEMIA (AMI) is a vascular surgical emergency with high mortality (> 50%). It is most commonly caused by ACUTE ARTERIAL EMBOLISM to the SUPERIOR MESENTERIC ARTERY (SMA, 50% of cases), typically dislodging from a cardiac source (atrial fibrillation, left ventricular mural thrombus, or infective endocarditis). Less common etiologies include acute mesenteric arterial thrombosis (overlying atherosclerotic plaques), non-occlusive mesenteric ischemia (NOMI, from low-flow states/shock), and mesenteric venous thrombosis. The classic clinical hallmark is SEVERE, AGONIZING PERIUMBILICAL ABDOMINAL PAIN COMPLETELY OUT OF PROPORTION TO PHYSICAL EXAMINATION FINDINGS (a soft, non-tender abdomen without rebound or guarding). As bowel wall ischemia progresses to transmural infarction and gangrene, metabolic lactic acidosis, severe leukocytosis, third-spacing, and frank peritonitis (rigidity, rebound) develop. The DIAGNOSTIC MODALITY OF CHOICE is IMMEDIATE INTRAVENOUS CONTRAST-ENHANCED COMPUTED TOMOGRAPHY ANGIOGRAPHY (CTA) OF THE ABDOMEN AND PELVIS. CTA has > 95% sensitivity, rapidly demonstrating arterial filling defects, lack of bowel wall enhancement, mesenteric stranding, pneumatosis intestinalis, or portomesenteric venous gas. Once diagnosed, emergent systemic heparin anticoagulation, broad-spectrum antibiotics, and IMMEDIATE SURGICAL REVASCULARIZATION (embolectomy, bypass) or ENDOVASCULAR REVASCULARIZATION are indicated. If signs of frank peritonitis are present, emergent exploratory laparotomy is required."
      ],
      [
        "Plain abdominal upright and supine radiography to evaluate for free air and bowel gas pattern",
        "Plain radiographs are normal in early mesenteric ischemia and insensitive, showing abnormalities only after transmural bowel necrosis and perforation have already occurred."
      ],
      [
        "Diagnostic colonoscopy to evaluate for ischemic mucosal changes in the sigmoid colon",
        "Colonoscopy is used for ISCHEMIC COLITIS (watershed areas like splenic flexure), not acute small bowel mesenteric ischemia; colonoscopy carries high risk of bowel perforation in acute ischemia."
      ],
      [
        "Urgent transabdominal mesenteric duplex ultrasound of the celiac and mesenteric vessels",
        "Duplex ultrasound is operator-dependent, technically obscured by overlying bowel gas, and cannot evaluate distal SMA branches or assess bowel viability; CTA is far superior."
      ],
      [
        "Technetium-99m labeled red blood cell scintigraphy to localize active gastrointestinal bleeding",
        "Tagged RBC scan is used for obscure lower gastrointestinal bleeding; it does not evaluate arterial patency or acute mesenteric ischemia."
      ]
    ],
    "shortestValidSolution": "Atrial fibrillation + agonizing 10/10 pain out of proportion + elevated lactate + soft abdomen = Acute mesenteric ischemia -> Immediate CT Angiography (CTA) of abdomen/pelvis.",
    "necessaryInference": "Recognize acute mesenteric ischemia: severe pain out of proportion to exam in a patient with atrial fibrillation; diagnose immediately with contrast-enhanced CT angiography.",
    "strongestDistractor": "Plain abdominal upright and supine radiography to evaluate for free air and bowel gas pattern",
    "distractorExclusion": "Plain films are normal in early ischemia and only show late perforation; contrast CTA is the diagnostic gold standard for early arterial occlusion.",
    "citation": "Klar E, Rahmanian PB, Bolder U, et al. Acute mesenteric ischemia: a vascular emergency. Dtsch Arztebl Int. 2012;109(14):249-256. PMID: 22532824.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Mesenteric Ischemia CT Angiography and Revascularization.",
      "distractorExclusionNotes": "Competitor Plain abdominal upright and supine radiography to  excluded by Plain films are normal in early ischemia and only show late .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0715",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Postpartum Hemorrhage Uterine Atony Medical and Mechanical Management",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old primiparous woman delivers a 4,200-g infant vaginally after a prolonged second stage of labor complicated by chorioamnionitis and oxytocin augmentation. Ten minutes after spontaneous expulsion of the placenta, the nurse notes brisk, continuous vaginal bleeding. Estimated blood loss since delivery has reached 1,200 mL. Physical examination reveals an enlarged, soft, boggy, poorly contracted uterus that extends 3 cm superior to the umbilicus. Inspection of the placenta confirms that it was expelled completely with intact cotyledons, and careful speculum examination of the cervix, vagina, and perineum reveals no lacerations or hematomas. Vital signs: blood pressure 88/54 mm Hg, heart rate 124/min, and oxygen saturation 98% on room air. Bimanual uterine massage is initiated immediately, and a rapid intravenous infusion of oxytocin is started, but the uterus remains soft and boggy with persistent heavy bleeding. The patient has a history of severe persistent asthma requiring daily inhaled fluticasone and frequent albuterol rescue. Which of the following second-line uterotonic medications is most appropriate for this patient?",
    "choices": [
      [
        "Intramuscular methylergonovine or sublingual misoprostol, while strictly avoiding carboprost tromethamine",
        "POSTPARTUM HEMORRHAGE (PPH) is defined as cumulative blood loss >= 1,000 mL or bleeding accompanied by signs of hypovolemia within 24 hours of delivery. The most common cause (> 70-80% of cases) is UTERINE ATONY, failure of the myometrium to contract and compress spiral arterioles. Risk factors include uterine overdistension (macrosomia, polyhydramnios, multiples), prolonged labor, chorioamnionitis, and multiparity. Management follows a rapid, escalating protocol: (1) FIRST-LINE: Bimanual uterine massage and INTRAVENOUS OXYTOCIN. (2) SECOND-LINE UTEROTONICS have CRITICAL CONTRAINDICATIONS THAT MUST BE MEMORIZED: (a) METHYLERGONOVINE (Methergine): ergot alkaloid causing smooth muscle constriction. CONTRAINDICATED IN HYPERTENSION OR PREECLAMPSIA because it causes severe vasoconstriction and hypertensive stroke; safe in asthma. (b) CARBOPROST TROMETHAMINE (Hemabate, 15-methyl PGF2-alpha): prostaglandin F2-alpha analog. STRICTLY CONTRAINDICATED IN PATIENTS WITH ASTHMA because it causes potent, life-threatening bronchospasm. (c) MISOPROSTOL (Cytotec, PGE1 analog): can be given sublingually or rectally; safe in hypertension and asthma. (d) TRANEXAMIC ACID (TXA): antifibrinolytic administered within 3 hours. (3) MECHANICAL AND SURGICAL INTERVENTIONS: Intrauterine balloon tamponade (Bakri balloon), uterine artery embolization, surgical B-Lynch compression sutures, uterine artery ligation, or emergent hysterectomy."
      ],
      [
        "Intramuscular carboprost tromethamine (PGF2-alpha)",
        "Carboprost tromethamine is a prostaglandin F2-alpha analog that causes potent, life-threatening bronchoconstriction; it is strictly contraindicated in patients with asthma."
      ],
      [
        "Subcutaneous terbutaline injection and intravenous nitroglycerin infusion",
        "Terbutaline and nitroglycerin are TOCOLYTICS that relax the uterus; administering them would abolish remaining myometrial tone and accelerate exsanguination."
      ],
      [
        "Immediate exploratory laparotomy for emergency total abdominal hysterectomy",
        "Hysterectomy is the final resort for refractory bleeding after medical therapy, intrauterine balloon tamponade, and compression sutures fail; moving straight to hysterectomy in a young primipara without attempting second-line uterotonics and balloon tamponade is premature."
      ],
      [
        "Administration of intravenous magnesium sulfate and high-dose furosemide",
        "Magnesium sulfate is a smooth muscle relaxant that promotes uterine atony and worsens hemorrhage; furosemide exacerbates hypovolemic shock."
      ]
    ],
    "shortestValidSolution": "Postpartum hemorrhage due to uterine atony + severe asthma = Avoid Carboprost (causes bronchospasm) -> Use Methylergonovine or Misoprostol + Balloon tamponade.",
    "necessaryInference": "Formulate second-line uterotonic selection: carboprost tromethamine (PGF2-alpha) is contraindicated in asthma; methylergonovine is contraindicated in hypertension; misoprostol is safe in both.",
    "strongestDistractor": "Intramuscular carboprost tromethamine (PGF2-alpha)",
    "distractorExclusion": "Carboprost tromethamine is a potent bronchoconstrictor strictly contraindicated in patients with reactive airway disease/asthma.",
    "citation": "Committee on Practice Bulletins-Obstetrics. Practice Bulletin No. 183: Postpartum Hemorrhage. Obstet Gynecol. 2017;130(4):e168-e186. PMID: 28937618.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Postpartum Hemorrhage Uterine Atony Medical and Mechanical Management.",
      "distractorExclusionNotes": "Competitor Intramuscular carboprost tromethamine (PGF2-alpha) excluded by Carboprost tromethamine is a potent bronchoconstrictor stric.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0716",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Thrombotic Thrombocytopenic Purpura Plasma Exchange and Avoid Platelets",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman presents to the emergency department with a 2-day history of fatigue, generalized petechiae, and epistaxis. During the interview, she becomes confused, disoriented to time, and exhibits expressive word-finding difficulty that fluctuates in severity. On physical examination, she has conjunctival pallor and scattered petechiae and purpura over her arms and lower extremities. Vital signs: temperature 38.2\u00b0C (100.8\u00b0F), blood pressure 138/84 mm Hg, heart rate 94/min, and respirations 16/min. Laboratory evaluation demonstrates: hemoglobin 7.4 g/dL, platelet count 14,000/microL, WBC 7,800/microL, serum creatinine 1.8 mg/dL (baseline 0.8 mg/dL), total bilirubin 3.8 mg/dL (indirect 3.2 mg/dL), and serum LDH 1,840 U/L (normal 140-280 U/L). Prothrombin time (PT/INR) and activated partial thromboplastin time (aPTT) are completely normal, and fibrinogen is 340 mg/dL (normal). Direct Coombs test is negative. Peripheral blood smear reveals numerous fragmented erythrocytes (schistocytes, 4-5 per high-power field) with marked polychromasia. While awaiting ADAMTS13 activity results, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate initiation of therapeutic plasma exchange (PEX) combined with systemic corticosteroids, while strictly avoiding platelet transfusions",
        "THROMBOTIC THROMBOCYTOPENIC PURPURA (TTP) is a life-threatening hematological emergency caused by severe deficiency (< 10% activity) of ADAMTS13, a plasma metalloproteinase that cleaves ULTRALARGE VON WILLEBRAND FACTOR (ULvWF) multimers. Deficiency is most commonly acquired due to an IgG autoantibody inhibitor against ADAMTS13. Without cleavage, uncleaved ULvWF multimers tether to endothelial surfaces and spontaneously bind and activate platelets under high shear stress in the microcirculation. This produces widespread MICROVASCULAR PLATELET THROMBI that occlude arterioles and capillaries, shearing passing erythrocytes (MICROANGIOPATHIC HEMOLYTIC ANEMIA, MAHA with prominent schistocytes) and consuming platelets (SEVERE THROMBOCYTOPENIA). The classic diagnostic pentad includes: (1) Thrombocytopenia, (2) Microangiopathic hemolytic anemia (high LDH, indirect bilirubin, schistocytes, negative Coombs), (3) Neurological symptoms (fluctuating confusion, headache, stroke, seizures), (4) Renal insufficiency (mild to moderate), and (5) Fever. Only the dyad of thrombocytopenia and MAHA is required to initiate treatment. Crucially: COAGULATION STUDIES (PT, aPTT, fibrinogen) ARE COMPLETELY NORMAL because TTP is a pure platelet consumptive process without systemic coagulation cascade activation (differentiating it from Disseminated Intravascular Coagulation, DIC). The immediate definitive therapy is EMERGENT THERAPEUTIC PLASMA EXCHANGE (PEX). PEX removes the autoantibody inhibitor and replenishes active ADAMTS13 from donor plasma. HIGH-DOSE CORTICOSTEROIDS and CAPLACIZUMAB (anti-vWF nanobody) are co-administered. Crucially: PLATELET TRANSFUSIONS ARE STRICTLY CONTRAINDICATED in TTP because infusing platelets fuels further microvascular platelet thrombosis ('adding fuel to the fire'), precipitating acute myocardial infarction, stroke, and sudden death."
      ],
      [
        "Immediate transfusion of two units of apheresis platelets to prevent life-threatening intracranial hemorrhage",
        "Platelet transfusions are strictly contraindicated in TTP because they fuel microvascular thrombosis, accelerating tissue infarction, stroke, and death; they are reserved only for life-threatening catastrophic hemorrhage."
      ],
      [
        "Initiation of intravenous heparin infusion and cryoprecipitate transfusion for suspected DIC",
        "Coagulation parameters (PT, PTT, fibrinogen) are completely normal in TTP, ruling out DIC; heparin provides no benefit and cryoprecipitate worsens microvascular thrombosis by adding more vWF."
      ],
      [
        "Administration of intravenous immune globulin (IVIG) monotherapy and high-dose oral eltrombopag",
        "IVIG and thrombopoietin agonists are used for Immune Thrombocytopenia (ITP); they are completely ineffective for TTP and do not replace ADAMTS13."
      ],
      [
        "Immediate bilateral nephrectomy and hemodialysis for hemolytic uremic syndrome",
        "Nephrectomy is never indicated; this patient has adult TTP with fluctuating neurological signs, requiring emergent plasma exchange."
      ]
    ],
    "shortestValidSolution": "Schistocytes + severe thrombocytopenia (14k) + fluctuating neurological confusion + normal PT/PTT = TTP -> Emergent Plasma Exchange (PEX) + Steroids + STRICTLY AVOID platelets.",
    "necessaryInference": "Formulate TTP therapy: immediate therapeutic plasma exchange and corticosteroids are mandatory; platelet transfusions are strictly contraindicated due to risk of accelerated microvascular thrombosis.",
    "strongestDistractor": "Immediate transfusion of two units of apheresis platelets to prevent life-threatening intracranial hemorrhage",
    "distractorExclusion": "Platelet transfusions fuel the microvascular thrombotic cascade in TTP and are contraindicated except in immediately fatal exsanguination.",
    "citation": "Joly BS, Coppo P, Veyradier A. Thrombotic thrombocytopenic purpura. Blood. 2017;129(21):2836-2846. PMID: 28416507.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Thrombotic Thrombocytopenic Purpura Plasma Exchange and Avoid Platelets.",
      "distractorExclusionNotes": "Competitor Immediate transfusion of two units of apheresis pl excluded by Platelet transfusions fuel the microvascular thrombotic casc.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0717",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Superior Vena Cava Syndrome Diagnosis and Endovascular Stenting",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 45-pack-year smoking history presents with a 3-week history of progressive shortness of breath, facial puffiness, and swelling of his neck and both arms. He states that when he bends forward or raises both arms above his head for 1 minute, he experiences severe facial congestion, cyanosis, and lightheadedness (positive Pemberton sign). Physical examination reveals prominent facial and periorbital edema, plethoric conjunctivae, dilated tortuous collateral veins across his anterior chest and abdominal wall, and bilateral jugular venous distension without inspiratory collapse. Chest CT with intravenous contrast reveals a 5.5-cm spiculated right upper lobe lung mass invading the middle mediastinum and causing high-grade (90%) extrinsic compression and intraluminal thrombosis of the superior vena cava. Which of the following is the most appropriate and rapid intervention to provide immediate symptomatic relief of superior vena caval obstruction?",
    "choices": [
      [
        "Percutaneous endovascular superior vena cava stent placement",
        "SUPERIOR VENA CAVA (SVC) SYNDROME is caused by mechanical obstruction of venous blood flow through the superior vena cava back to the right atrium. More than 60-80% of cases are malignant in etiology, most commonly SMALL CELL LUNG CANCER, NON-SMALL CELL LUNG CANCER, and NON-HODGKIN LYMPHOMA. Benign causes (20-40%) are increasingly common due to thrombosis or stenosis from indwelling central venous catheters and pacemaker/defibrillator leads. Symptoms arise from venous hypertension in the head, neck, and upper extremities: facial edema, neck swelling, arm edema, dyspnea, cough, hoarseness, and dilated superficial collateral veins over the anterior chest wall. Bending forward or raising both arms above the head for 1 minute increases intrathoracic pressure and worsens facial plethora and stridor (PEMBERTON SIGN). While historic management relied primarily on emergent radiotherapy, modern interventional practice recognizes that PERCUTANEOUS ENDOVASCULAR CAVAL STENT PLACEMENT (with or without catheter-directed thrombolysis) provides the FASTEST, SAFEST, AND MOST EFFECTIVE SYMPTOMATIC RELIEF, with clinical improvement occurring within 24 to 48 hours in > 95% of patients. Concurrently, histological diagnosis must be obtained to guide definitive systemic chemotherapy (for small cell lung cancer or lymphoma) or targeted radiation therapy."
      ],
      [
        "Immediate emergency surgical median sternotomy with superior vena cava Dacron bypass grafting",
        "Surgical bypass is an invasive major operation reserved for refractory benign catheter-related disease or stent failure; endovascular stenting is the minimally invasive standard of care."
      ],
      [
        "High-dose intravenous loop diuretic monotherapy (furosemide 120 mg IV daily) and fluid restriction",
        "Diuretics do not relieve mechanical caval occlusion, can cause intravascular volume depletion, and worsen venous thrombosis; they provide minimal relief."
      ],
      [
        "Immediate subcutaneous enoxaparin anticoagulation monotherapy and outpatient oncology follow-up in 3 weeks",
        "Anticoagulation alone will not reopen severe extrinsic compression from a 5.5-cm lung mass and delays vital structural stenting and cancer staging."
      ],
      [
        "Urgent tracheostomy for upper airway protection",
        "Tracheostomy does not relieve superior vena cava venous hypertension and carries severe bleeding risks due to engorged cervical veins; stenting resolves upper airway congestion."
      ]
    ],
    "shortestValidSolution": "Facial swelling + dilated chest collateral veins + Pemberton sign + mediastinal lung mass occluding SVC = SVC syndrome -> Endovascular SVC stenting provides rapid immediate relief.",
    "necessaryInference": "Select management for superior vena cava syndrome: endovascular stenting provides the fastest, most effective symptom relief for high-grade mechanical obstruction.",
    "strongestDistractor": "High-dose intravenous loop diuretic monotherapy (furosemide 120 mg IV daily) and fluid restriction",
    "distractorExclusion": "Diuretics do not relieve extrinsic compression and can worsen low-flow thrombosis; stenting rapidly restores venous return.",
    "citation": "Rowell NP, Gleeson FV. Steroids, radiotherapy, chemotherapy and stents for superior vena caval obstruction in carcinoma of the bronchus: a systematic review. Clin Oncol (R Coll Radiol). 2002;14(5):338-347. PMID: 12463321.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Superior Vena Cava Syndrome Diagnosis and Endovascular Stenting.",
      "distractorExclusionNotes": "Competitor High-dose intravenous loop diuretic monotherapy (f excluded by Diuretics do not relieve extrinsic compression and can worse.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0718",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Neonatal Respiratory Distress Syndrome vs TTN Exogenous Surfactant",
    "provisionalDifficulty": 4,
    "stem": "A male infant is delivered by emergent cesarean section at 29 weeks of gestation to a 24-year-old mother due to placental abruption. The mother did not receive antenatal corticosteroids. At 15 minutes of life, the neonate develops progressive respiratory distress characterized by tachypnea (respirations 82/min), prominent intercostal and subcostal retractions, expiratory grunting, and nasal flaring. Oxygen saturation is 82% on room air. Physical examination reveals poor air entry bilaterally with diffuse fine crackles. Chest radiography demonstrates uniformly decreased lung volumes with diffuse, bilateral, reticulogranular 'ground-glass' opacities and prominent air bronchograms. Administration of continuous positive airway pressure (CPAP) at 6 cm H2O with 40% supplemental oxygen fails to maintain oxygen saturation above 88%, and repeat arterial blood gas shows respiratory acidosis with PaO2 46 mm Hg and PaCO2 58 mm Hg. Which of the following is the definitive therapeutic intervention for this infant's underlying condition?",
    "choices": [
      [
        "Endotracheal administration of exogenous natural surfactant",
        "NEONATAL RESPIRATORY DISTRESS SYNDROME (RDS / hyaline membrane disease) is caused by a DEFICIENCY OF PULMONARY SURFACTANT in premature infants, synthesized by alveolar TYPE II PNEUMOCYTES. Surfactant consists predominantly of dipalmitoylphosphatidylcholine (lecithin) and surfactant-associated proteins (SP-A, B, C, D). Synthesis accelerates markedly after 32 weeks of gestation, reaching functional maturity at ~35 weeks. Without adequate surfactant, ALVEOLAR SURFACE TENSION IS HIGH, leading to progressive diffuse microatelectasis on expiration, decreased lung compliance, ventilation-perfusion mismatch, and hypoxemia. Expiratory grunting represents the infant's compensatory attempt to maintain positive end-expiratory pressure (PEEP) against a partially closed glottis. Classic chest radiography shows LOW LUNG VOLUMES with DIFFUSE RETICULOGRANULAR 'GROUND-GLASS' INFILTRATES and AIR BRONCHOGRAMS. Management includes nasal CPAP for mild-to-moderate disease. When CPAP fails (worsening acidosis, high FiO2 requirements > 30-40%), the DEFINITIVE THERAPY IS ENDOTRACHEAL ADMINISTRATION OF EXOGENOUS NATURAL SURFACTANT (poractant alfa, calfactant, or beractant). Exogenous surfactant rapidly decreases alveolar surface tension, opens atelectatic alveoli, improves functional residual capacity, and decreases neonatal mortality. In contrast, TRANSIENT TACHYPNEA OF THE NEWBORN (TTN) occurs in term/late-preterm infants delivered by cesarean section due to delayed resorption of fetal lung fluid, showing fluid in the interlobar fissures and clearing within 24-48 hours with supportive care alone."
      ],
      [
        "Inhaled nitric oxide therapy targeting persistent pulmonary hypertension",
        "Inhaled nitric oxide is a pulmonary vasodilator used for persistent pulmonary hypertension of the newborn (PPHN) in near-term/term infants, not surfactant deficiency in RDS."
      ],
      [
        "Intravenous broad-spectrum ampicillin and gentamicin monotherapy for congenital pneumonia",
        "Antibiotics are routinely administered empirically while blood cultures are pending, but antibiotics alone do not resolve high alveolar surface tension; surfactant is the definitive therapy."
      ],
      [
        "Intravenous infusion of dexamethasone to accelerate neonatal lung maturation",
        "Antenatal corticosteroids are given to the MOTHER prior to preterm delivery to accelerate fetal lung maturity; postnatal steroids do not acutely treat RDS and carry significant neurodevelopmental risks."
      ],
      [
        "Extracorporeal membrane oxygenation (ECMO) cannulation",
        "ECMO is contraindicated in premature infants < 34 weeks of gestation or < 2 kg due to fatal intraventricular hemorrhage risks with systemic heparinization."
      ]
    ],
    "shortestValidSolution": "Preterm infant (29 wks) + grunting + reticulogranular ground-glass with air bronchograms on CXR = RDS -> Endotracheal exogenous surfactant.",
    "necessaryInference": "Differentiate neonatal respiratory conditions: RDS (premature, low volumes, ground-glass, air bronchograms) requires exogenous surfactant; TTN (cesarean term, perihilar streaking/fissure fluid) is self-limited.",
    "strongestDistractor": "Inhaled nitric oxide therapy targeting persistent pulmonary hypertension",
    "distractorExclusion": "Nitric oxide treats PPHN in term infants; RDS in a 29-week preterm infant is driven by surfactant deficiency and requires endotracheal surfactant replacement.",
    "citation": "Sweet DG, Carnielli V, Greisen G, et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome - 2019 Update. Neonatology. 2019;115(4):432-446. PMID: 30974433.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Neonatal Respiratory Distress Syndrome vs TTN Exogenous Surfactant.",
      "distractorExclusionNotes": "Competitor Inhaled nitric oxide therapy targeting persistent  excluded by Nitric oxide treats PPHN in term infants; RDS in a 29-week p.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0719",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Septic Shock Resuscitation Surviving Sepsis Hour-1 Bundle",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman is brought to the emergency department from a long-term care facility with severe lethargy, chills, and productive cough for 2 days. On examination, she is obtunded, diaphoretic, and has cool, clammy extremities with mottled skin over her knees. Vital signs: blood pressure 72/42 mm Hg (mean arterial pressure 52 mm Hg), heart rate 132/min, respirations 28/min, and temperature 39.4\u00b0C (103.0\u00b0F). Oxygen saturation is 92% on 4 L nasal cannula. Right lower lobe crackles and bronchial breath sounds are auscultated. Laboratory studies show: WBC 24,800/microL with 22% band forms, serum lactate 4.8 mmol/L, serum creatinine 2.4 mg/dL (baseline 0.9 mg/dL), and blood glucose 142 mg/dL. Two sets of peripheral blood cultures are drawn immediately. According to the Surviving Sepsis Campaign guidelines, which of the following represents the most appropriate initial resuscitation protocol?",
    "choices": [
      [
        "Administration of 30 mL/kg of intravenous balanced crystalloid fluid within 3 hours, initiation of broad-spectrum intravenous antibiotics within 1 hour, and infusion of norepinephrine as the first-line vasopressor if mean arterial pressure remains < 65 mm Hg despite fluid loading",
        "SEPTIC SHOCK is defined as a subset of sepsis in which underlying circulatory and cellular/metabolic abnormalities are profound enough to substantially increase mortality (persisting hypotension requiring vasopressors to maintain MAP >= 65 mm Hg AND serum lactate > 2 mmol/L despite adequate volume resuscitation). The SURVIVING SEPSIS CAMPAIGN HOUR-1 BUNDLE establishes a rapid, evidence-based resuscitation framework: (1) MEASURE SERUM LACTATE immediately (re-measure within 2-4 hours if elevated to guide resuscitation). (2) OBTAIN BLOOD CULTURES prior to starting antimicrobials (at least two sets, without delaying antibiotics by > 45 minutes). (3) ADMINISTER BROAD-SPECTRUM INTRAVENOUS ANTIMICROBIALS WITHIN 1 HOUR of recognition (e.g., vancomycin plus cefepime or piperacillin-tazobactam). (4) RAPID FLUID RESUSCITATION: Administer at least 30 ML/KG OF INTRAVENOUS CRYSTALLOID (balanced crystalloids like lactated Ringer's preferred over normal saline) within the first 3 hours for sepsis-induced hypoperfusion or lactate >= 4.0 mmol/L. (5) VASOPRESSOR THERAPY: If the patient remains hypotensive during or following initial fluid resuscitation, initiate VASOPRESSORS immediately to target a MEAN ARTERIAL PRESSURE (MAP) >= 65 MM HG. NOREPINEPHRINE is the FIRST-LINE VASOPRESSOR OF CHOICE (potent alpha-1 vasoconstriction with modest beta-1 inotropic support). Epinephrine or vasopressin (0.03 units/min) can be added if MAP remains inadequate on moderate-to-high doses of norepinephrine. Dopamine is not recommended due to high tachyarrhythmia risks."
      ],
      [
        "Administration of intravenous dopamine as the initial vasopressor of choice and 100 mL of 20% albumin bolus",
        "Dopamine is no longer recommended as first-line vasopressor due to increased tachyarrhythmias and excess mortality compared to norepinephrine; albumin bolus is second-line after crystalloids."
      ],
      [
        "Immediate endotracheal intubation, intravenous phenylephrine infusion, and oral azithromycin monotherapy",
        "Phenylephrine causes pure alpha-1 vasoconstriction without beta-1 inotropic support, reducing stroke volume; oral monotherapy is entirely inadequate for septic shock."
      ],
      [
        "Administration of 500 mL of normal saline over 4 hours and waiting 24 hours for blood culture results before starting antibiotics",
        "Waiting for blood cultures or providing minimal fluid (500 mL over 4 hrs) in septic shock with lactate 4.8 causes multi-organ failure and death; 30 mL/kg crystalloid and empiric antibiotics within 1 hr are mandatory."
      ],
      [
        "Immediate administration of intravenous hydrocortisone 200 mg bolus prior to any fluid administration",
        "Corticosteroids are indicated ONLY as an adjunctive therapy in refractory septic shock failing high-dose vasopressors and fluid resuscitation, never prior to fluids."
      ]
    ],
    "shortestValidSolution": "Septic shock (MAP 52, lactate 4.8) = Surviving Sepsis Bundle -> Blood cultures + Broad-spectrum IV antibiotics within 1 hr + 30 mL/kg crystalloids + Norepinephrine first-line (MAP >= 65).",
    "necessaryInference": "Apply Surviving Sepsis Campaign guidelines: administer 30 mL/kg IV crystalloids, broad-spectrum IV antibiotics within 1 hour, and use norepinephrine as the first-line vasopressor to target MAP >= 65 mm Hg.",
    "strongestDistractor": "Administration of intravenous dopamine as the initial vasopressor of choice and 100 mL of 20% albumin bolus",
    "distractorExclusion": "Norepinephrine is the first-line vasopressor of choice; dopamine carries higher rates of tachyarrhythmias and increased mortality.",
    "citation": "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143. PMID: 34605781.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Septic Shock Resuscitation Surviving Sepsis Hour-1 Bundle.",
      "distractorExclusionNotes": "Competitor Administration of intravenous dopamine as the init excluded by Norepinephrine is the first-line vasopressor of choice; dopa.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0720",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Acute Compartment Syndrome Clinical Diagnosis and Emergency Fasciotomy",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man is hospitalized following a motorcycle crash in which he sustained a closed, displaced midshaft fracture of the right tibia and fibula. The fracture was temporarily immobilized in a posterior plaster splint. Six hours later, he reports excruciating, worsening pain in his right leg that has become completely refractory to multiple doses of intravenous morphine. Physical examination reveals an extremely tense, 'wooden-hard' anterior compartment of the right lower leg. Passive plantar flexion of the right foot and passive flexion of the right great toe elicit agonizing, scream-inducing pain in the anterior compartment. Sensation to light touch and pinprick is diminished in the first dorsal web space between the great and second toes. Distal dorsalis pedis and posterior tibial arterial pulses remain strong and easily palpable (2+ bilaterally). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate measurement of intracompartmental pressures (or emergent transfer directly to the operating room for decompressive fasciotomy of all four lower extremity compartments)",
        "ACUTE COMPARTMENT SYNDROME (ACS) is an orthopedic surgical emergency that occurs when tissue pressure within a closed non-elastic osteofascial compartment exceeds capillary perfusion pressure, leading to microvascular compromise, muscle ischemia, and irreversible tissue necrosis. ACS is most commonly associated with FRACTURES OF THE TIBIAL SHAFT (which contain the tight anterior compartment). Clinical presentation is characterized by the classic '6 Ps': Pain out of proportion, Paresthesias, Pallor, Poikilothermia, Pulselessness, and Paralysis. Crucially: (1) PAIN OUT OF PROPORTION TO THE INJURY and PAIN WITH PASSIVE STRETCH of the muscles within the affected compartment are the EARLIEST AND MOST SENSITIVE CLINICAL SIGNS. (2) PARESTHESIAS (in the distribution of nerves traversing the compartment\u2014e.g., DEEP PERONEAL NERVE sensory loss in the FIRST WEB SPACE in anterior compartment syndrome) indicate early nerve ischemia. (3) PULSELESSNESS AND PARALYSIS ARE LATE, OMINOUS FINDINGS indicating irreversible tissue necrosis. PALPABLE PULSES DO NOT RULE OUT COMPARTMENT SYNDROME because intracompartmental pressure exceeds capillary pressure (20-30 mm Hg) long before exceeding systolic arterial pressure (120 mm Hg). Diagnosis is confirmed clinically or by measuring intracompartmental pressures: an absolute compartment pressure > 30 mm Hg, or a DELTA PRESSURE (Diastolic blood pressure minus compartment pressure) < 30 MM HG confirms ACS. The definitive emergent treatment is IMMEDIATE EMERGENCY DECOMPRESSIVE FASCIOTOMY of all four compartments (anterior, lateral, superficial posterior, deep posterior) of the lower leg. Delaying fasciotomy beyond 6-8 hours causes permanent muscle fibrosis, Volkmann contracture, nerve injury, and amputation."
      ],
      [
        "Reassure the patient that intact distal pulses confirm adequate perfusion, elevate the extremity on three pillows, and increase intravenous opioids",
        "Intact pulses are common in early compartment syndrome; elevating the limb reduces arterial inflow pressure and accelerates muscle ischemia; delaying fasciotomy leads to permanent ischemic necrosis."
      ],
      [
        "Apply a circumferential fiberglass cast over the splint to stabilize the fracture fragments rigidly",
        "Applying a rigid circumferential cast traps swelling within the closed space, dramatically increasing compartment pressure and causing rapid total limb gangrene."
      ],
      [
        "Perform an emergent lower extremity arterial duplex ultrasound to evaluate for popliteal artery occlusion",
        "Distal pulses are intact and the pathophysiology is elevated osteofascial compartment pressure, not macrovascular arterial occlusion; waiting for ultrasound delays emergent fasciotomy."
      ],
      [
        "Administer high-dose intravenous methylprednisolone and apply ice packs to reduce soft tissue swelling",
        "Steroids and ice are completely ineffective for osteofascial hypertension; cryotherapy causes cutaneous vasoconstriction and accelerates tissue necrosis."
      ]
    ],
    "shortestValidSolution": "Tibial fracture + pain out of proportion + pain with passive stretch + first web space numbness + intact pulses = Acute compartment syndrome -> Emergent decompressive fasciotomy of all 4 compartments.",
    "necessaryInference": "Recognize acute compartment syndrome: pain with passive stretch and paresthesias are early signs; palpable distal pulses do NOT rule out ACS; immediate decompressive fasciotomy is required.",
    "strongestDistractor": "Reassure the patient that intact distal pulses confirm adequate perfusion, elevate the extremity on three pillows, and increase intravenous opioids",
    "distractorExclusion": "Palpable pulses persist until late gangrene; compartment pressure exceeds capillary pressure long before arterial pressure; relying on pulses causes catastrophic limb loss.",
    "citation": "Via AG, Oliva F, Spoliti M, Maffulli N. Acute compartment syndrome. Muscles Ligaments Tendons J. 2015;5(1):18-22. PMID: 25825682.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Acute Compartment Syndrome Clinical Diagnosis and Emergency Fasciotomy.",
      "distractorExclusionNotes": "Competitor Reassure the patient that intact distal pulses con excluded by Palpable pulses persist until late gangrene; compartment pre.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0721",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Clostridioides Difficile Infection First-Line Oral Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman is hospitalized for 10 days for healthcare-associated pneumonia treated with intravenous ceftriaxone and levofloxacin. Three days after completing her antimicrobial course, she develops watery diarrhea with 8 to 10 loose bowel movements daily, accompanied by lower abdominal cramping, low-grade fever, and anorexia. Vital signs: temperature 38.3\u00b0C (101.0\u00b0F), blood pressure 118/72 mm Hg, and heart rate 94/min. Physical examination reveals mild diffuse lower abdominal tenderness without guarding or rebound. Laboratory evaluation demonstrates: WBC 14,800/microL with 78% neutrophils and serum creatinine 1.1 mg/dL (baseline 0.9 mg/dL). Stool nucleic acid amplification testing (NAAT) is positive for Clostridioides difficile toxin genes. Which of the following is the most appropriate first-line antimicrobial therapy for this patient's initial episode of C. difficile infection?",
    "choices": [
      [
        "Oral fidaxomicin (or oral vancomycin)",
        "CLOSTRIDIOIDES DIFFICILE INFECTION (CDI) is the leading cause of healthcare-associated infectious diarrhea, triggered by antibiotic disruption of the normal colonic microbiota (most frequently fluoroquinolones, cephalosporins, clindamycin, and penicillins). Disease severity is classified by IDSA/SHEA guidelines: (1) NON-SEVERE CDI: WBC <= 15,000/microL and serum creatinine <= 1.5 mg/dL; (2) SEVERE CDI: WBC >= 15,000/microL OR serum creatinine > 1.5 mg/dL; (3) FULMINANT CDI: hypotension, shock, ileus, or toxic megacolon. For an INITIAL EPISODE of CDI (both non-severe and severe), updated guidelines recommend ORAL FIDAXOMICIN (200 mg orally twice daily for 10 days) as the preferred first-line agent, with ORAL VANCOMYCIN (125 mg orally four times daily for 10 days) as an acceptable first-line alternative. Fidaxomicin is a bactericidal macrocyclic RNA polymerase inhibitor with narrow-spectrum activity that spares normal bowel microbiota, resulting in significantly LOWER RECURRENCE RATES compared to vancomycin. Crucially: INTRAVENOUS VANCOMYCIN IS COMPLETELY INEFFECTIVE FOR CDI because vancomycin is not absorbed across the gut and is not excreted into bile, achieving ZERO luminal concentration in the colon. Oral metronidazole is no longer recommended as first-line therapy due to inferior cure rates. Fulminant CDI requires oral vancomycin (higher dose 500 mg QID) plus intravenous metronidazole (to penetrate via mucosal capillary diffusion) and surgical evaluation."
      ],
      [
        "Intravenous vancomycin 1 g every 12 hours",
        "Intravenous vancomycin does not penetrate into the colonic lumen (no biliary or mucosal secretion) and is completely ineffective for C. difficile colitis."
      ],
      [
        "Oral metronidazole 500 mg three times daily",
        "Oral metronidazole was historically first-line for non-severe CDI, but is no longer recommended due to high treatment failure and recurrence rates compared to fidaxomicin or oral vancomycin."
      ],
      [
        "Intravenous ciprofloxacin combined with oral loperamide antidiarrheal therapy",
        "Ciprofloxacin is a high-risk trigger for CDI; antimotility agents (loperamide) are strictly contraindicated because they cause toxin retention and precipitate toxic megacolon."
      ],
      [
        "Immediate fecal microbiota transplantation (FMT) via colonoscopy",
        "Fecal microbiota transplantation is indicated for RECURRENT CDI (at least two recurrences, i.e., 3rd episode), not for an initial episode of CDI."
      ]
    ],
    "shortestValidSolution": "Post-antibiotic diarrhea + positive C. difficile NAAT = Initial C. difficile infection -> Oral Fidaxomicin or Oral Vancomycin (IV vancomycin has zero colonic penetration).",
    "necessaryInference": "Select first-line therapy for C. difficile colitis: oral fidaxomicin or oral vancomycin; intravenous vancomycin is ineffective due to lack of colonic luminal excretion.",
    "strongestDistractor": "Intravenous vancomycin 1 g every 12 hours",
    "distractorExclusion": "Intravenous vancomycin is not secreted into the gastrointestinal lumen and fails to treat C. difficile colitis; oral administration is mandatory.",
    "citation": "Johnson S, Lavergne V, Skinner AM, et al. Clinical Practice Guideline by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA): 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Clostridioides Difficile Infection First-Line Oral Therapy.",
      "distractorExclusionNotes": "Competitor Intravenous vancomycin 1 g every 12 hours excluded by Intravenous vancomycin is not secreted into the gastrointest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0722",
    "exam": "Step 2 CK",
    "subject": "Neurology",
    "system": "General Principles",
    "topic": "Status Epilepticus Staged Pharmacological Algorithm",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman with a history of idiopathic generalized epilepsy is brought to the emergency department by ambulance in continuous generalized tonic-clonic convulsions. Paramedics witnessed seizure onset 18 minutes ago, and she has experienced continuous convulsive activity without regaining consciousness. On arrival, she is actively convulsing with rhythmic jerking of all four extremities, head deviation, and jaw clenching with tongue biting. Vital signs: blood pressure 158/94 mm Hg, heart rate 136/min, respirations 24/min, and oxygen saturation 93% on high-flow O2 via non-rebreather. Point-of-care capillary blood glucose is 112 mg/dL. Two peripheral intravenous lines are placed. Which of the following is the most appropriate first-line pharmacological agent to administer immediately?",
    "choices": [
      [
        "Intravenous lorazepam 4 mg (or intramuscular midazolam 10 mg)",
        "CONVULSIVE STATUS EPILEPTICUS is a neurological emergency defined as continuous seizure activity lasting >= 5 MINUTES, or >= 2 discrete seizures without complete recovery of consciousness between them. The American Epilepsy Society (AES) treatment algorithm establishes a strict, time-based, staged protocol: (1) PHASE 1: INITIAL THERAPY (0-5 to 20 minutes): FIRST-LINE TREATMENT IS AN INTRAVENOUS BENZODIAZEPINE. The preferred agents are INTRAVENOUS LORAZEPAM (0.1 mg/kg, typically 4 mg IV bolus, repeatable once at 5-10 min) or INTRAMUSCULAR MIDAZOLAM (10 mg IM, especially if IV access is delayed or in the prehospital setting), or intravenous diazepam. Benzodiazepines are potent allosteric modulators of GABA-A receptors, rapidly terminating seizure activity in 60-70% of cases. (2) PHASE 2: SECOND-LINE URGENT THERAPY (20 to 40 minutes): If seizures continue despite adequate benzodiazepine dosing, an intravenous NON-SEDATING ANTIEPILEPTIC DRUG must be infused immediately: INTRAVENOUS LEVETIRACETAM (60 mg/kg, max 4,500 mg), INTRAVENOUS FOSPHENYTOIN (20 mg PE/kg, max 1,500 mg PE), or INTRAVENOUS VALPROATE SODIUM (40 mg/kg, max 3,000 mg). (3) PHASE 3: REFRACTORY STATUS EPILEPTICUS (> 40 minutes): If seizures persist, endotracheal intubation and continuous general anesthetic infusions (PROPOFOL, MIDAZOLAM, or PENTOBARBITAL/KETAMINE) with continuous electroencephalographic (cEEG) monitoring targeting burst suppression are mandatory."
      ],
      [
        "Intravenous levetiracetam infusion 60 mg/kg monotherapy",
        "Levetiracetam is an effective second-line antiepileptic drug infused after benzodiazepines, but IV benzodiazepines (lorazepam) are the mandatory first-line therapy to abort active status epilepticus rapidly."
      ],
      [
        "Intravenous phenytoin 100 mg push via rapid peripheral bolus",
        "Phenytoin must never be given as a rapid push due to severe cardiac arrhythmias and hypotension (propylene glycol toxicity); fosphenytoin is preferred, and both are second-line agents after benzodiazepines."
      ],
      [
        "Immediate rapid sequence intubation with intravenous succinylcholine and general anesthesia",
        "Intubation and general anesthesia are reserved for refractory status epilepticus after failing benzodiazepines and second-line antiepileptics; succinylcholine causes hyperkalemia and masks motor seizures without stopping cerebral epileptiform activity."
      ],
      [
        "Subcutaneous insulin infusion and intravenous 3% hypertonic saline",
        "Blood glucose is normal (112 mg/dL) and there is no acute hyponatremia; these interventions do not terminate status epilepticus."
      ]
    ],
    "shortestValidSolution": "Continuous seizure > 5 minutes = Status epilepticus -> Immediate First-Line: IV Lorazepam (or IM Midazolam) -> Second-Line: IV Levetiracetam/Fosphenytoin/Valproate.",
    "necessaryInference": "Sequence status epilepticus pharmacotherapy: first-line therapy is an IV benzodiazepine (lorazepam) or IM midazolam; second-line is IV levetiracetam, fosphenytoin, or valproate.",
    "strongestDistractor": "Intravenous levetiracetam infusion 60 mg/kg monotherapy",
    "distractorExclusion": "Levetiracetam is second-line; benzodiazepines (lorazepam) act immediately on GABA-A receptors and are the mandatory first-line intervention.",
    "citation": "Glauser T, Shinnar S, Gloss D, et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus in Children and Adults: Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016;16(1):48-61. PMID: 26900382.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Status Epilepticus Staged Pharmacological Algorithm.",
      "distractorExclusionNotes": "Competitor Intravenous levetiracetam infusion 60 mg/kg monoth excluded by Levetiracetam is second-line; benzodiazepines (lorazepam) ac.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0723",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "STEMI with Cardiogenic Shock Primary PCI Door-to-Balloon",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man presents to a primary percutaneous coronary intervention (PCI)-capable cardiac center with a 2-hour history of severe, crushing substernal chest pressure, profuse diaphoresis, and shortness of breath. On arrival, he is pale, cold, and confused. Vital signs: blood pressure 78/48 mm Hg, heart rate 116/min, respirations 28/min, and oxygen saturation 88% on room air. Cardiovascular examination reveals an S3 gallop, elevated jugular venous distension, and bilateral bibasilar wet crackles extending halfway up both lung fields. A 12-lead ECG demonstrates 4-mm convex ST-segment elevation in leads V1 through V5 with reciprocal ST-depression in leads II, III, and aVF, confirming an acute extensive anterior ST-elevation myocardial infarction (STEMI) complicated by cardiogenic shock. Which of the following is the most appropriate definitive reperfusion strategy for this patient?",
    "choices": [
      [
        "Immediate transfer to the cardiac catheterization laboratory for emergent primary percutaneous coronary intervention (PCI)",
        "ACUTE STEMI COMPLICATED BY CARDIOGENIC SHOCK is a critical medical emergency carrying a mortality of 40-50%. The SHOCK trial conclusively demonstrated that EMERGENT REVASCULARIZATION WITH PRIMARY PERCUTANEOUS CORONARY INTERVENTION (PCI) or emergency coronary artery bypass grafting (CABG) significantly improves long-term survival compared to initial medical stabilization. In a PCI-capable center, PRIMARY PCI IS THE REPERFUSION STRATEGY OF CHOICE and must be performed as rapidly as possible (DOOR-TO-BALLOON TIME < 90 MINUTES). Crucially: Even if the patient presents beyond the standard 12-hour window of symptom onset, PRIMARY PCI REMAINS MANDATORY AT ANY TIME POINT IF CARDIOGENIC SHOCK, refractory ischemia, or hemodynamic instability is present. Fibrinolytic therapy (alteplase, tenecteplase) is markedly LESS EFFECTIVE in cardiogenic shock because severe hypotension, high systemic vascular resistance, and metabolic acidosis impair coronary thrombus penetration and drug efficacy. Fibrinolysis is reserved ONLY for patients at non-PCI-capable centers where transfer time for PCI would exceed 120 minutes. Concurrently, medical stabilization for cardiogenic shock involves invasive hemodynamic monitoring, inotropic/vasopressor support (norepinephrine, dobutamine), and consideration of temporary mechanical circulatory support (intra-aortic balloon pump [IABP], Impella microaxial pump, or venoarterial ECMO)."
      ],
      [
        "Immediate administration of intravenous tenecteplase thrombolytic therapy to avoid delays in catheterization lab mobilization",
        "Fibrinolytics are significantly less effective in cardiogenic shock due to severe hypoperfusion; in a PCI-capable center, primary PCI is the gold standard reperfusion modality."
      ],
      [
        "Elective medical therapy in the coronary care unit with intravenous nitroglycerin and delayed elective angiography in 72 hours",
        "Nitroglycerin is strictly contraindicated in hypotension/shock (BP 78/48) as it reduces preload and precipitates cardiovascular collapse; revascularization must not be delayed."
      ],
      [
        "Administration of oral metoprolol tartrate 50 mg to reduce myocardial oxygen demand",
        "Oral or IV beta-blockers are strictly contraindicated in acute heart failure or cardiogenic shock because negative inotropic effects worsen pump failure and accelerate cardiac arrest."
      ],
      [
        "Initiation of intravenous unfractionated heparin and broad-spectrum antibiotics with observation",
        "Anticoagulation alone does not recanalize the occluded left anterior descending artery; mechanical PCI reperfusion is mandatory to salvage myocardium and reverse shock."
      ]
    ],
    "shortestValidSolution": "Anterior STEMI + Cardiogenic shock (BP 78/48, crackles, cold extremities) = Emergent Primary Percutaneous Coronary Intervention (PCI) door-to-balloon < 90 min.",
    "necessaryInference": "Formulate STEMI reperfusion: in a PCI-capable center, emergent primary PCI is the definitive treatment for STEMI, especially when complicated by cardiogenic shock (fibrinolysis is far less effective).",
    "strongestDistractor": "Immediate administration of intravenous tenecteplase thrombolytic therapy to avoid delays in catheterization lab mobilization",
    "distractorExclusion": "Systemic thrombolytic efficacy is markedly diminished in cardiogenic shock; primary PCI provides vastly superior revascularization and survival.",
    "citation": "O'Gara PT, Kushner FG, Ascheim DD, et al. 2013 ACCF/AHA guideline for the management of ST-elevation myocardial infarction: a report of the American College of Cardiology Foundation/American Heart Association Task Force on Practice Guidelines. Circulation. 2013;127(4):e362-e425. PMID: 23247304.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating STEMI with Cardiogenic Shock Primary PCI Door-to-Balloon.",
      "distractorExclusionNotes": "Competitor Immediate administration of intravenous tenectepla excluded by Systemic thrombolytic efficacy is markedly diminished in car.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0724",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ectopic Pregnancy Methotrexate Eligibility vs Laparoscopy",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman (gravida 2, para 1) presents to the emergency department with a 2-day history of light vaginal spotting and mild, dull right lower quadrant abdominal pain. Her last menstrual period was 6 weeks ago. She has a history of pelvic inflammatory disease treated 3 years ago. On physical examination, she is alert, comfortable, and in no acute distress. Vital signs: blood pressure 124/76 mm Hg, heart rate 72/min, and respirations 14/min. Abdominal examination reveals mild tenderness to deep palpation in the right lower quadrant without peritoneal signs (no rebound, involuntary guarding, or rigidity). Pelvic examination demonstrates a closed cervical os with minimal dark blood in the vaginal vault and mild right adnexal fullness without cervical motion tenderness. Serum quantitative human chorionic gonadotropin (beta-hCG) is 2,450 mIU/mL. Transvaginal ultrasonography reveals an empty uterine cavity with an endometrial stripe of 10 mm, a normal left ovary, and a distinct 2.4-cm well-circumscribed gestational sac containing a yolk sac without fetal cardiac activity located within the right fallopian tube. There is no free fluid in the pouch of Douglas. Complete blood count and renal/hepatic panels are completely normal. Which of the following is the most appropriate management strategy for this patient?",
    "choices": [
      [
        "Intramuscular methotrexate therapy with serial monitoring of serum quantitative beta-hCG on days 4 and 7",
        "ECTOPIC PREGNANCY occurs in approximately 1-2% of pregnancies, with > 95% implanting in the fallopian tube (most commonly the ampulla). Early unruptured ectopic pregnancy can be managed MEDICALLY with METHOTREXATE (a folate antimetabolite that inhibits dihydrofolate reductase, halting rapid DNA synthesis in dividing trophoblastic tissue) or SURGICALLY with LAPAROSCOPIC SALPINGOSTOMY OR SALPINGECTOMY. To be eligible for MEDICAL MANAGEMENT WITH METHOTREXATE, the patient must meet STRICT ELIGIBILITY CRITERIA: (1) HEMODYNAMIC STABILITY (normal blood pressure, heart rate, no syncope); (2) UNRUPTURED ectopic mass with NO active intra-abdominal hemorrhage; (3) Serum quantitative BETA-HCG < 5,000 MIU/ML; (4) Gestational sac diameter < 3.5-4.0 CM; (5) ABSENCE OF EMBRYONIC CARDIAC ACTIVITY; and (6) Reliable patient willing and able to comply with post-treatment follow-up. Absolute contraindications to methotrexate include breastfeeding, immunodeficiency, preexisting hepatic/renal disease, active peptic ulcer, or pulmonary disease. Here, the patient meets all criteria (stable, unruptured, beta-hCG 2,450, mass 2.4 cm, no cardiac activity, normal labs). Treatment involves INTRAMUSCULAR METHOTREXATE (single-dose or two-dose protocol). Serial serum beta-hCG is drawn on DAY 4 AND DAY 7: a decrease in beta-hCG of >= 15% between days 4 and 7 indicates successful treatment, followed by weekly monitoring until undetectable (< 5 mIU/mL). In contrast, SURGICAL MANAGEMENT (LAPAROSCOPY) is mandatory if the patient is hemodynamically unstable, has signs of rupture/hemoperitoneum, beta-hCG > 5,000, fetal cardiac motion, or mass > 3.5 cm."
      ],
      [
        "Immediate exploratory laparotomy with right salpingo-oophorectomy",
        "Laparotomy and oophorectomy are excessively invasive for a stable, unruptured 2.4-cm ectopic pregnancy eligible for medical therapy; oophorectomy removes the normal ovary unnecessarily."
      ],
      [
        "Expectant management with repeat serum beta-hCG in 48 hours because ectopic pregnancies frequently resorb spontaneously",
        "Expectant management is reserved only for asymptomatic patients with very low and spontaneously declining beta-hCG (< 1,000 mIU/mL); at 2,450 mIU/mL, active medical treatment is required."
      ],
      [
        "Dilation and curettage (D&C) followed by oral misoprostol",
        "D&C evacuates the uterine cavity; it does not treat an extrauterine tubal ectopic pregnancy and carries risks of uterine perforation."
      ],
      [
        "Oral mifepristone followed by sublingual misoprostol",
        "Mifepristone and misoprostol are used for medical abortion of INTRAUTERINE pregnancies; they are completely ineffective for tubal ectopic pregnancies."
      ]
    ],
    "shortestValidSolution": "Hemodynamically stable + unruptured ectopic < 3.5 cm (2.4 cm) + beta-hCG < 5,000 (2,450) + no fetal heart motion = Intramuscular Methotrexate with day 4 and 7 beta-hCG.",
    "necessaryInference": "Select candidates for medical management of ectopic pregnancy: hemodynamic stability, beta-hCG < 5,000 mIU/mL, mass < 3.5 cm, and absence of fetal cardiac activity indicate intramuscular methotrexate.",
    "strongestDistractor": "Immediate exploratory laparotomy with right salpingo-oophorectomy",
    "distractorExclusion": "Surgical intervention is reserved for ruptured ectopic, hemodynamic instability, or failure/contraindication to methotrexate; stable patients meeting criteria should receive methotrexate.",
    "citation": "American College of Obstetricians and Gynecologists' Committee on Practice Bulletins\u2014Gynecology. ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018;131(3):e91-e103. PMID: 29470343.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Ectopic Pregnancy Methotrexate Eligibility vs Laparoscopy.",
      "distractorExclusionNotes": "Competitor Immediate exploratory laparotomy with right salpin excluded by Surgical intervention is reserved for ruptured ectopic, hemo.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0725",
    "exam": "Step 2 CK",
    "subject": "Psychiatry",
    "system": "General Principles",
    "topic": "Serotonin Syndrome Hunter Criteria and Cyproheptadine Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman with major depressive disorder and chronic migraine headaches is brought to the emergency department for acute agitation, confusion, and shivering that began 4 hours ago. Her home medications include sertraline 150 mg daily and sumatriptan as needed. Yesterday, she was prescribed linezolid 600 mg twice daily for a complicated soft tissue abscess. On arrival, she is pacing, anxious, and disoriented to place and time. Physical examination reveals an agitated, tremulous woman with profuse diaphoresis and bilateral mydriasis (dilated pupils) with normal light reactivity. Vital signs: temperature 39.2\u00b0C (102.6\u00b0F), blood pressure 168/98 mm Hg, heart rate 128/min, and respirations 24/min. Neurological examination demonstrates bilateral hyperreflexia (4+ patellar and Achilles reflexes), spontaneous bilateral ocular clonus (continuous rhythmic side-to-side eye oscillations), and 5 beats of inducible ankle clonus bilaterally. There is coarse bilateral tremor and prominent shivering, with increased lower extremity muscle tone that is easily overcome. Bowel sounds are hyperactive. Complete blood count and serum creatine kinase (CK 420 U/L) are mildly elevated. Which of the following is the most appropriate management strategy?",
    "choices": [
      [
        "Immediate discontinuation of all serotonergic agents, supportive care with intravenous fluids and benzodiazepines (lorazepam) for agitation, and administration of cyproheptadine for moderate-to-severe symptoms",
        "SEROTONIN SYNDROME is a potentially life-threatening toxidrome caused by excessive central and peripheral serotonergic agonism, predominantly mediated by 5-HT2A and 5-HT1A receptors. It typically results from combining multiple serotonergic agents: SSRIs (sertraline), SNRIs, MAO inhibitors, tricyclic antidepressants, triptans (sumatriptan), tramadol, MDMA (ecstasy), St. John's wort, or LINEZOLID (an oxazolidinone antibiotic that possesses potent, reversible non-selective MAO-A/B inhibitory activity). Diagnosis is made using the HUNTER TOXICITY CRITERIA, which requires exposure to a serotonergic agent PLUS one of the following: (1) Spontaneous clonus; (2) Inducible clonus with agitation or diaphoresis; (3) Ocular clonus with agitation or diaphoresis; (4) Tremor and hyperreflexia; or (5) Hypertonia and temperature > 38\u00b0C with ocular or inducible clonus. Neuromuscular signs are characteristically GREATER IN THE LOWER EXTREMITIES than the upper extremities, dominated by HYPERREFLEXIA AND CLONUS. Management: (1) IMMEDIATELY DISCONTINUE ALL SEROTONERGIC DRUGS; (2) INTRAVENOUS BENZODIAZEPINES (lorazepam) are the mainstay of therapy, used to control agitation, blunten autonomic hyperactivity, and reduce muscle contractions; (3) Supportive care: aggressive cooling (cooling blankets), IV crystalloids; (4) Specific antidote: CYPROHEPTADINE, a first-generation antihistamine with potent 5-HT2A ANTAGONIST properties, is indicated for moderate-to-severe cases refractory to benzodiazepines. Antipyretics (acetaminophen) are completely ineffective because the hyperthermia is driven by muscular rigidity, not hypothalamic set-point elevation."
      ],
      [
        "Immediate administration of intramuscular haloperidol and intravenous bromocriptine",
        "Haloperidol is an antipsychotic with antimuscarinic and antidopaminergic properties that impairs thermoregulation and can worsen serotonin toxicity; bromocriptine treats NMS, not serotonin syndrome."
      ],
      [
        "Administration of intravenous flumazenil to reverse central benzodiazepine receptor down-regulation",
        "Flumazenil is a benzodiazepine antagonist that precipitates withdrawal seizures; benzodiazepines are the PRIMARY TREATMENT to calm neuromuscular hyperreactivity in serotonin syndrome."
      ],
      [
        "Immediate treatment with oral dantrolene monotherapy and oral high-dose acetaminophen",
        "Dantrolene treats malignant hyperthermia and NMS, with no proven efficacy in serotonin syndrome; acetaminophen is ineffective because hyperthermia is muscular, not hypothalamic."
      ],
      [
        "Perform an emergent lumbar puncture followed by empiric vancomycin and acyclovir",
        "The patient has classic serotonin syndrome meeting Hunter criteria (spontaneous ocular clonus, hyperreflexia, linezolid + sertraline + triptan); stopping serotonergics and giving lorazepam/cyproheptadine is the priority."
      ]
    ],
    "shortestValidSolution": "Sertraline + Sumatriptan + Linezolid = Serotonin syndrome (ocular clonus, hyperreflexia, hyperthermia) -> Stop serotonergics + IV Lorazepam + Cyproheptadine (5-HT2A antagonist).",
    "necessaryInference": "Diagnose and manage serotonin syndrome: recognizes Hunter criteria (spontaneous or ocular clonus with hyperreflexia) triggered by linezolid + SSRI; treat with benzodiazepines and cyproheptadine.",
    "strongestDistractor": "Immediate administration of intramuscular haloperidol and intravenous bromocriptine",
    "distractorExclusion": "Bromocriptine is a dopamine agonist used for NMS; administering it in serotonin syndrome is inappropriate and haloperidol can worsen hyperthermia.",
    "citation": "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005;352(11):1112-1120. PMID: 15784664.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK clinical management item evaluating Serotonin Syndrome Hunter Criteria and Cyproheptadine Therapy.",
      "distractorExclusionNotes": "Competitor Immediate administration of intramuscular haloperi excluded by Bromocriptine is a dopamine agonist used for NMS; administer.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
