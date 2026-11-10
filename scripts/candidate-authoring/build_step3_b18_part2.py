import json

items_s3_b18_part2 = [
  {
    "code": "op-c-s3-0439",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Transfusion Reaction Cross-Coverage Emergency Protocol",
    "subtopic": "Immediate Transfusion Cessation, Clerical Check, Hemolytic Workup, Hydration",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old woman with diffuse large B-cell lymphoma is receiving a transfusion of packed red blood cells (PRBCs) on the hematology-oncology ward for symptomatic anemia (hemoglobin 6.6 g/dL). Approximately 15 minutes after the transfusion begins (after 40 mL of blood has infused), the cross-covering resident is urgently called to the bedside because the patient has developed acute chills, rigors, nausea, and severe, aching bilateral flank and lower back pain. Vital signs demonstrate blood pressure of 88/54 mm Hg (baseline 124/76 mm Hg), heart rate of 124/min, respiratory rate of 24/min, and oral temperature of 38.9 C (102.0 F; baseline 36.8 C). Physical examination reveals a diaphoretic, anxious woman with flushed skin and no wheezing, stridor, or urticaria. An indwelling Foley catheter drains 20 mL of dark reddish-brown, tea-colored urine.\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediately stop the blood transfusion, disconnect the blood tubing from the intravenous cannula, maintain intravenous access with a fresh infusion of 0.9% normal saline, perform a bedside clerical verification check of all unit labels and patient identifiers, and notify the blood bank while sending blood and urine samples for direct antiglobulin testing, free plasma hemoglobin, and repeat crossmatching",
        "Acute Hemolytic Transfusion Reaction (AHTR) is a life-threatening medical emergency carrying high mortality from shock, disseminated intravascular coagulation (DIC), and acute renal failure, predominantly caused by clerical ABO-incompatibility errors: (1) PATHOPHYSIOLOGY: Preformed recipient IgM or IgG isohemagglutinins (e.g., recipient anti-A antibodies reacting with transfused donor A erythrocytes) bind foreign A or B surface antigens, activating the classical complement cascade to completion (membrane attack complex, C5b-9). This triggers massive intravascular hemolysis, releasing free hemoglobin and stroma into the plasma, accompanied by a massive surge of anaphylatoxins (C3a, C5a) that induce severe hypotension, vasodilation, and bronchospasm. Free hemoglobin binds plasma haptoglobin (depleting it), and excess uncomplexed hemoglobin filters across glomeruli into tubular fluid, producing dark reddish-brown hemoglobinuria and acute tubular necrosis (ATN). (2) MANDATORY EMERGENCY SEQUENCE (AABB GUIDELINES): (a) STEP 1: IMMEDIATELY STOP THE TRANSFUSION. The severity of AHTR is directly proportional to the volume of incompatible blood infused; stopping the infusion instantly limits antigen load. (b) STEP 2: DISCONNECT TUBING AND MAINTAIN IV ACCESS: Disconnect the entire blood administration set from the IV hub (do not flush blood remaining in the tubing into the patient) and initiate rapid IV crystalloid infusion (0.9% normal saline) to maintain renal perfusion, urine output (> 100 mL/h), and blood pressure. (c) STEP 3: CLERICAL VERIFICATION CHECK: Perform an immediate bedside verification of the patient's identification wristband, the blood product bag label, and compatibility paperwork to identify clerical mislabeling. (d) STEP 4: LABORATORY NOTIFICATION AND SAMPLES: Send the remaining blood product bag, fresh recipient EDTA blood, and fresh urine to the blood bank for repeat ABO/Rh typing, repeat crossmatch, Direct Antiglobulin Test (DAT / Coombs), plasma free hemoglobin, and serum haptoglobin."
      ],
      [
        "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
        "Slowing the transfusion is an egregious error in acute hemolytic reaction; continuing incompatible blood infusion dramatically accelerates complement-mediated intravascular hemolysis, DIC, and death."
      ],
      [
        "Administer intramuscular epinephrine 0.3 mg and nebulized albuterol for presumed severe anaphylactic transfusion reaction",
        "Anaphylaxis causes bronchospasm, stridor, and angioedema without dark red hemoglobinuria or flank pain; flank pain, fever, and tea-colored urine indicate acute intravascular hemolysis, requiring transfusion cessation and fluid resuscitation."
      ],
      [
        "Flush the remaining blood in the intravenous tubing into the patient with 50 mL of sterile water, then disconnect",
        "Flushing the tubing pushes incompatible red blood cells into the circulation, worsening hemolysis, and sterile water causes severe local osmotic lysis of host erythrocytes."
      ],
      [
        "Administer intravenous furosemide 80 mg bolus immediately to force diuresis before administering any intravenous fluids",
        "Loop diuretics in a hypotensive patient (BP 88/54) with hemoglobinuria exacerbate prerenal intravascular hypoperfusion, accelerating acute tubular necrosis; aggressive isotonic saline hydration is mandatory."
      ]
    ],
    "rationale": "Acute hemolytic transfusion reaction (AHTR) is an emergency caused by ABO incompatibility. Infused antibodies trigger complement-mediated intravascular hemolysis, presenting with fever, chills, hypotension, flank pain, and dark reddish-brown hemoglobinuria. Immediate protocol: (1) STOP the transfusion immediately; (2) Disconnect tubing from the IV hub (do not flush tubing blood into patient) and run normal saline to maintain urine output and BP; (3) Perform bedside clerical check of patient ID and blood unit labels; (4) Notify blood bank and send unit + fresh recipient blood/urine for repeat typing, DAT (Coombs), free hemoglobin, and haptoglobin.",
    "metadata": {
      "shortSolution": "Fever, hypotension, flank pain, and red-brown urine during PRBC transfusion is an acute hemolytic reaction; immediately stop transfusion, disconnect tubing, run normal saline, perform clerical check, and send hemolytic workup to blood bank.",
      "competingChoice": "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
      "exclusionFinding": "Slowing the rate in acute hemolytic reaction allows lethal volumes of incompatible blood to infuse; the transfusion must be stopped immediately.",
      "pedagogicalValue": "Mastering the emergency protocol for acute hemolytic transfusion reaction: immediate cessation, line disconnection, IV hydration, clerical check, and sending blood/urine for DAT and repeat crossmatch.",
      "citations": [
        "Vlaar APJ, Celis S, Addas-Carvalho M, et al. An international consensus definition of acute transfusion reactions: report of the ISBT Working Party on Haemovigilance. Vox Sang. 2024;119(1):15-28. PMID: 37943567.",
        "Delaney M, Wendel S, Bercovitz RS, et al. Transfusion reactions: prevention, diagnosis, and treatment. Lancet. 2016;388(10061):2825-2836. PMID: 27083327."
      ]
    },
    "critique": {
      "shortestValidSolution": "Transfusion reaction with flank pain + hypotension + dark urine -> stop transfusion immediately, disconnect line, infuse normal saline, perform clerical check, send blood/urine to blood bank.",
      "strongestCompetitor": "Slow the transfusion rate to 25 mL/hour, administer intravenous diphenhydramine 50 mg and acetaminophen 650 mg, and resume normal transfusion once chills subside",
      "exclusionFinding": "Continuing or slowing the transfusion during acute hemolysis is fatal; immediate cessation and disconnection are mandatory.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0440",
    "exam": "Step 3",
    "subject": "Geriatrics",
    "system": "General Principles",
    "topic": "Inpatient Fall Evaluation Protocol",
    "subtopic": "Post-Fall Assessment Algorithm, Cervical Spine/Hip Trauma, Avoiding Restraints",
    "provisionalDifficulty": 4,
    "stem": "An 79-year-old man who is hospitalized on the medical ward on day 2 for treatment of acute pyelonephritis with intravenous ceftriaxone is discovered lying on the floor beside his hospital bed at 2:30 AM by a nursing assistant. The bed rails were raised, and his call light was on the bedside table. The cross-covering resident is immediately paged to evaluate the patient. On arrival, the patient is conscious, lying supine on the linoleum floor. He is oriented to person and hospital, but is uncertain how he got to the floor, stating, 'I think I was trying to get to the bathroom.' He complains of pain in his right hip and right shoulder. Vital signs taken while supine on the floor demonstrate blood pressure of 134/78 mm Hg, heart rate of 82/min, respiratory rate of 16/min, and oxygen saturation of 97% on room air. The nursing assistant asks whether they should quickly lift the patient back into bed before the physician examines him.\n\nWhich of the following represents the most appropriate immediate post-fall clinical evaluation protocol for this patient?",
    "choices": [
      [
        "Perform an immediate on-the-floor physical assessment of the head, cervical spine, right hip/extremities, and neurological status to rule out acute fracture or spinal injury prior to moving the patient, followed by log-roll transfer to bed, orthostatic vital signs, and a comprehensive medication review",
        "Inpatient falls occur in approximately 3% to 5% of hospital admissions, with up to 25% resulting in physical injury (fractures, subdural hematomas, lacerations): (1) IMMEDIATE POST-FALL ASSESSMENT ON THE FLOOR: Moving an acutely fallen patient into bed before assessing for spinal or skeletal trauma can cause catastrophic displacement of an unstable cervical spine fracture or displaced femoral neck fracture. Guidelines (VA National Center for Patient Safety Fall Protocol) mandate: (a) Assess vital signs and level of consciousness immediately; (b) Examine head and neck for trauma or cervical spine tenderness; (c) Inspect extremities for deformities, shortening, or external rotation (indicative of hip fracture); (d) Perform a focused neurological examination (pupils, symmetry, motor function). (2) SAFE TRANSFER: If no cervical spine or hip fracture is suspected, assist the patient back to bed safely using appropriate mechanical lifting devices or slide boards with assistance (log-rolling if indicated). (3) POST-FALL SYSTEMATIC INVESTIGATION: Once stabilized in bed: (a) Measure orthostatic vital signs (supine and standing BP/HR) to detect orthostatic hypotension; (b) Check fingerstick blood glucose and review telemetry for transient arrhythmias/syncope; (c) Comprehensive medication review to identify contributing agents (sedatives, antihypertensives, anticholinergics, diuretics); and (d) Root-cause assessment (e.g., urgency/nocturia from pyelonephritis, lack of accessible urinal, footwear). (4) PHYSICAL RESTRAINT WARNING: Ordering physical restraints after a fall is strongly condemned by CMS and Joint Commission standards because restraints increase fall-related mortality, strangulation, combativeness, and pressure ulcers."
      ],
      [
        "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
        "Moving the patient prior to examining for hip or spinal injury risks displacing acute fractures, and applying physical restraints increases delirium, combativeness, and serious fall-related injury."
      ],
      [
        "Transport the patient immediately for emergent whole-body computed tomography (pan-scan) without performing a bedside physical examination",
        "Routine whole-body CT scanning without localized physical exam findings represents massive, unnecessary radiation exposure and delays focused clinical care."
      ],
      [
        "Administer intramuscular lorazepam 2 mg to calm the patient and prevent him from attempting to stand up again",
        "Benzodiazepines severely worsen sedation, cognitive confusion, and ataxia, dramatically increasing the risk of subsequent catastrophic fall injuries."
      ],
      [
        "Document the event in the chart and reassure the patient, deferring physical examination until morning rounds",
        "Deferring physical assessment after an unwitnessed fall risks missing occult femoral neck fractures or evolving intracranial hemorrhage, representing serious substandard care."
      ]
    ],
    "rationale": "Following an inpatient fall, the patient must be assessed immediately ON THE FLOOR before moving, to rule out head/cervical spine trauma or hip fractures (shortened, externally rotated leg) that could be displaced by improper transfer. Once cleared and safely moved to bed, post-fall evaluation includes: orthostatic vitals, focused neuro check, glucose check, telemetry review, and medication reconciliation (deprescribing sedatives/antihypertensives). Physical restraints are strictly prohibited as they increase fall injuries and mortality.",
    "metadata": {
      "shortSolution": "Inpatient fall evaluation requires immediate on-the-floor trauma/spine/hip assessment before moving the patient to bed, followed by orthostatics and medication review; avoid physical restraints.",
      "competingChoice": "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
      "exclusionFinding": "Moving before examination risks displacing hip or spinal fractures; physical restraints are condemned by CMS and increase fall-related mortality.",
      "pedagogicalValue": "Mastering the inpatient post-fall protocol: on-the-floor primary survey for fracture/spine injury before transfer, followed by orthostatics, medication review, and avoiding restraints.",
      "citations": [
        "Bouldin ED, Andresen EM, Dunton NE, et al. Complexities of measuring hospital fall rates: an analysis of the National Database of Nursing Quality Indicators. J Patient Saf. 2013;9(4):187-194. PMID: 23644485.",
        "Ganz DA, Huang C, Saliba D, Shier V. Preventing Falls in Hospitals: A Toolkit for Improving Quality of Care. Agency for Healthcare Research and Quality (AHRQ). Publication No. 13-0015-EF. 2013. NLM ID: 101614728."
      ]
    },
    "critique": {
      "shortestValidSolution": "Inpatient fall -> assess on floor for hip/spine/head trauma before transfer to bed; check orthostatics and meds; avoid restraints.",
      "strongestCompetitor": "Immediately lift the patient into bed using four staff members before examining the patient, and apply bilateral wrist restraints to prevent further falls",
      "exclusionFinding": "Moving before examination risks displacing fractures; physical restraints increase fall injuries and are prohibited.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0441",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Postoperative Oliguria and Point-of-Care Bladder Ultrasound",
    "subtopic": "Mechanical Catheter Obstruction, Acute Urinary Retention, Fluid Challenge Stewardship",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man who underwent an elective open right hemicolectomy 8 hours ago is admitted to the surgical step-down unit. He has an indwelling Foley urinary catheter connected to a gravity drainage bag. At 1:30 AM, the cross-covering resident is paged because the patient's urine output has dropped to zero over the past 3 hours (total urine output 0 mL over 3 hours; preceding hourly outputs were 45 mL, 40 mL, and 35 mL). He has received 2,000 mL of intravenous lactated Ringer solution since the beginning of surgery. He complains of moderate lower abdominal fullness and discomfort. Vital signs demonstrate blood pressure of 142/86 mm Hg, heart rate of 92/min, respiratory rate of 16/min, and oxygen saturation of 98% on room air. Physical examination reveals a clean abdominal dressing with no active bleeding. Palpation of the lower abdomen reveals dullness to percussion and a smooth, firm, rounded, tender fullness in the suprapubic area extending 4 cm above the pubic symphysis. The Foley catheter tubing is inspected and shows no visible urine flow into the drainage bag. The nurse asks if a 1,000-mL intravenous normal saline bolus and intravenous furosemide 40 mg should be administered for presumed postoperative acute tubular necrosis.\n\nWhich of the following represents the most appropriate immediate diagnostic and therapeutic step for this patient?",
    "choices": [
      [
        "Perform an immediate bedside point-of-care bladder ultrasound (POCUS) to assess for acute urinary retention, and flush the Foley catheter with 30 to 50 mL of sterile saline (or replace the catheter) to relieve mechanical catheter occlusion",
        "Postoperative Oliguria (urine output < 0.5 mL/kg/h) is an exceedingly common cross-coverage problem. (1) POST-RENAL OBSTRUCTION AS FIRST PRIORITY: Before diagnosing prerenal azotemia or intrinsic acute tubular necrosis (ATN), the clinician MUST ALWAYS FIRST RULE OUT MECHANICAL POST-RENAL OUTFLOW OBSTRUCTION. In hospitalized patients with indwelling Foley catheters, sudden, abrupt cessation of urine output (dropping abruptly from 40 mL/h to zero) is overwhelmingly caused by MECHANICAL CATHETER MALFUNCTION (tubing kinking, intraluminal blood clot, mucous plug, sediment occlusion, or catheter tip displacement into the prostatic urethra). (2) POINT-OF-CARE BLADDER ULTRASOUND (POCUS): A bedside bladder ultrasound scan rapidly provides an objective, non-invasive measurement of retained intravesical volume. A retained bladder volume > 300 to 500 mL (with a catheter in place) definitively establishes acute urinary retention secondary to catheter outflow obstruction. (3) DEFINITIVE RELIEF: The immediate management is to gently flush and aspirate the Foley catheter with 30 to 50 mL of sterile saline using aseptic technique to dislodge intraluminal obstructing clots or sediment. If resistance is met or flow cannot be restored, the catheter must be immediately removed and replaced. (4) DANGER OF BLIND FLUID BOLUSES AND DIURETICS: Administering large IV fluid boluses (1,000 mL saline) to a patient with an obstructed bladder causes dangerous, agonizing bladder overdistension, detrusor rupture, and acute hypertension. Administering loop diuretics (furosemide) increases urine production into an occluded bladder, exponentially worsening intravesical pressure and pain."
      ],
      [
        "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
        "Giving an intravenous fluid bolus to a patient with mechanical catheter obstruction and a palpable suprapubic bladder mass accelerates bladder overdistension, risks bladder rupture, and worsens pain."
      ],
      [
        "Administer intravenous furosemide 40 mg to force renal tubular diuresis and test tubular responsiveness",
        "Administering a loop diuretic against a mechanically obstructed Foley catheter causes rapid massive urine accumulation behind the obstruction, causing extreme pain and bladder barotrauma."
      ],
      [
        "Order an emergent non-contrast renal CT scan to rule out acute bilateral ureteral transection",
        "Bilateral ureteral transection during hemicolectomy is exceedingly rare; the presence of an obstructed, palpable bladder points to an infravesical/catheter problem, which is diagnosed bedside with ultrasound."
      ],
      [
        "Initiate a continuous intravenous dopamine infusion at 'renal dose' (2 mcg/kg/min) to dilate renal arterioles",
        "'Renal-dose' dopamine has been proven completely ineffective in multiple randomized controlled trials (ANZICS trial); it does not improve renal perfusion or urine output and increases tachyarrhythmias."
      ]
    ],
    "rationale": "Sudden-onset complete anuria (dropping abruptly to 0 mL/h) in a patient with a Foley catheter and suprapubic fullness is mechanical catheter obstruction (clot, kinking, sediment plug) until proven otherwise. Bedside bladder ultrasound (POCUS) confirms retained bladder volume (> 300-500 mL). Flushing the catheter with 30-50 mL of sterile saline or replacing the catheter immediately restores outflow. Giving IV fluid boluses or furosemide to an obstructed bladder is dangerous and causes bladder overdistension and severe pain. Renal-dose dopamine is proven ineffective.",
    "metadata": {
      "shortSolution": "Postoperative patient with sudden zero urine output, suprapubic fullness, and Foley catheter has mechanical catheter obstruction; confirm with bedside bladder ultrasound and flush/replace catheter before giving fluids or diuretics.",
      "competingChoice": "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
      "exclusionFinding": "Infusing fluids into a patient with mechanical catheter outflow obstruction and palpable bladder fullness causes severe bladder barotrauma and pain.",
      "pedagogicalValue": "Mastering cross-coverage of sudden postoperative anuria: always rule out mechanical catheter obstruction with bedside bladder ultrasound before giving fluids or diuretics.",
      "citations": [
        "Bellomo R, Ronco C, Kellum JA, et al. Acute renal failure - definition, outcome measures, animal models, fluid therapy and information technology needs: the Second International Consensus Conference of the Acute Dialysis Quality Initiative (ADQI) Group. Crit Care. 2004;8(4):R204-R212. PMID: 15312219.",
        "Klotz L. How to manage acute urinary retention. Can Fam Physician. 1999;45:1207-1212. PMID: 10349195."
      ]
    },
    "critique": {
      "shortestValidSolution": "Sudden anuria + Foley in place + suprapubic fullness -> bedside bladder ultrasound + flush/replace Foley (relieve mechanical obstruction); avoid fluids/diuretics.",
      "strongestCompetitor": "Administer a rapid intravenous infusion of 1,000 mL of 0.9% normal saline over 30 minutes to treat presumed prerenal azotemia",
      "exclusionFinding": "Giving fluid boluses against an obstructed Foley causes bladder overdistension and pain; relieving the obstruction is the first step.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0442",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Massive Pulmonary Embolism in Early Postoperative Patients",
    "subtopic": "Systemic Thrombolysis Contraindications, Catheter-Directed Thrombectomy, Surgical Embolectomy",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman who underwent an elective open sigmoid colectomy for recurrent diverticulitis 36 hours ago is recovering on the surgical floor. She suddenly develops severe shortness of breath, diaphoresis, and syncope when attempting to sit on the edge of the bed. On arrival of the rapid response team, she is pale, tachypneic, and cool to the touch. Vital signs demonstrate blood pressure of 78/48 mm Hg, heart rate of 128/min, respiratory rate of 32/min, and oxygen saturation of 86% on ambient air, which improves only to 90% on a 100% non-rebreather mask. Physical examination reveals distended jugular veins, a loud pulmonic component of S2, and clear lungs bilaterally. The surgical abdominal incision is clean with no active external bleeding. Bedside transthoracic echocardiography reveals severe right ventricular dilation with hypokinesis (McConnell sign) and a flattened interventricular septum bowing into the left ventricle (D-shaped left ventricle), consistent with acute cor pulmonale and massive pulmonary embolism. Infusion of isotonic crystalloids (500 mL) fails to improve her blood pressure (BP remains 80/50 mm Hg). Norepinephrine infusion is initiated. The surgical team notes that she is only 36 hours post-major abdominal surgery.\n\nWhich of the following represents the most appropriate reperfusion strategy for this patient's massive pulmonary embolism?",
    "choices": [
      [
        "Emergent catheter-directed mechanical thrombectomy (or surgical pulmonary embolectomy), withholding full-dose systemic intravenous thrombolysis due to the absolute contraindication of major abdominal surgery within the past 2 weeks",
        "Massive (High-Risk) Pulmonary Embolism is defined by sustained systemic hypotension (systolic BP < 90 mm Hg for > 15 minutes, or requiring inotropes/vasopressors, or cardiac arrest) caused by acute right ventricular failure: (1) SYSTEMIC THROMBOLYSIS CONTRAINDICATIONS (AHA / CHEST / ESC GUIDELINES): In unselected massive PE, full-dose intravenous systemic thrombolytic therapy (e.g., alteplase 100 mg IV over 2 hours) is first-line. However, MAJOR SURGERY WITHIN THE PRECEDING 14 DAYS IS AN ABSOLUTE CONTRAINDICATION TO FULL-DOSE SYSTEMIC THROMBOLYSIS. In a patient 36 hours post-open bowel resection, systemic thrombolytic therapy will rapidly dissolve hemostatic surgical ligatures and clots on mesenteric vascular pedicles, precipitating catastrophic, uncontrollable intra-abdominal exsanguination, hemorrhagic shock, and death in > 50% of cases. (2) REPERFUSION ALTERNATIVES (INTERVENTIONAL / SURGICAL): When systemic thrombolysis is contraindicated or has failed: (a) CATHETER-DIRECTED MECHANICAL THROMBECTOMY (CDT): Large-bore aspiration catheter thrombectomy or mechanical maceration (e.g., FlowTriever or Indigo systems) can extract large saddle clots from the main pulmonary arteries through femoral venous access with minimal bleeding risk; (b) SURGICAL PULMONARY EMBOLECTOMY: Performed via median sternotomy on cardiopulmonary bypass to manually open the pulmonary trunk and extract clots. Both modalities rapidly reduce RV afterload and restore cardiac output without exposing the surgical abdomen to systemic fibrinolysis."
      ],
      [
        "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
        "Systemic full-dose thrombolysis is absolutely contraindicated 36 hours post-major open abdominal surgery; it causes massive, fatal intra-abdominal mesenteric hemorrhage."
      ],
      [
        "Therapeutic anticoagulation with subcutaneous low-molecular-weight heparin monotherapy as standalone conservative therapy",
        "Massive PE with refractory shock (BP 78/48 on norepinephrine) has a mortality > 50% within hours; anticoagulation alone does not dissolve obstructing clots or restore cardiac output."
      ],
      [
        "Immediate placement of an inferior vena cava (IVC) filter in the cardiac catheterization laboratory without attempting pulmonary reperfusion",
        "IVC filters prevent future lower-extremity emboli but do not relieve the acute massive pulmonary arterial obstruction causing right ventricular collapse and shock."
      ],
      [
        "Administer high-dose inhaled nitric oxide and continue observation in the step-down unit",
        "Inhaled nitric oxide provides modest pulmonary vasodilation but cannot relieve anatomical obstruction of main pulmonary arteries in massive PE with cardiogenic shock."
      ]
    ],
    "rationale": "Massive pulmonary embolism presents with persistent hypotension (systolic BP < 90 mm Hg) and acute RV failure. While systemic thrombolysis is first-line in general, recent major surgery within 14 days (here 36 hours post-colectomy) is an absolute contraindication to full-dose systemic thrombolytic therapy due to extreme risk of fatal intra-abdominal hemorrhage. Guidelines (AHA/ESC/CHEST) mandate emergent catheter-directed mechanical thrombectomy (aspiration/maceration) or surgical pulmonary embolectomy on cardiopulmonary bypass when systemic thrombolysis is contraindicated.",
    "metadata": {
      "shortSolution": "Massive PE with shock 36 hours post-colectomy cannot receive systemic thrombolysis (absolute contraindication: major surgery < 14 days); requires emergent catheter-directed thrombectomy or surgical embolectomy.",
      "competingChoice": "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
      "exclusionFinding": "Systemic thrombolysis within 14 days of major surgery causes catastrophic intra-abdominal hemorrhage; catheter-directed thrombectomy or surgical embolectomy is mandatory.",
      "pedagogicalValue": "Recognizing contraindications to systemic thrombolysis in massive PE (recent major surgery < 14 days) and selecting catheter-directed thrombectomy or surgical embolectomy.",
      "citations": [
        "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31504429.",
        "Jaff MR, McMurtry MS, Archer SL, et al. Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension: a scientific statement from the American Heart Association. Circulation. 2011;123(16):1788-1830. PMID: 21422387."
      ]
    },
    "critique": {
      "shortestValidSolution": "Massive PE with shock + recent surgery (36h post-colectomy) -> catheter-directed thrombectomy or surgical embolectomy (systemic thrombolysis is contraindicated).",
      "strongestCompetitor": "Immediate intravenous infusion of full-dose systemic alteplase (100 mg over 2 hours) combined with full-dose therapeutic heparin",
      "exclusionFinding": "Recent major surgery (< 14 days) is an absolute contraindication to systemic thrombolysis due to fatal bleeding.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0443",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Venous Thromboembolism Prophylaxis in Severe Renal Impairment",
    "subtopic": "Unfractionated Heparin vs LMWH Bioaccumulation, eGFR < 30 mL/min, Bleeding Risk",
    "provisionalDifficulty": 5,
    "stem": "An 74-year-old man with end-stage renal disease secondary to hypertensive nephrosclerosis (stage 5 non-dialysis chronic kidney disease; estimated GFR 18 mL/min/1.73 m2, baseline serum creatinine 4.1 mg/dL) is admitted to the general medical ward for treatment of acute bacterial cellulitis with intravenous vancomycin. He is largely bedbound during this acute illness. Physical examination reveals an alert, frail man with localized erythema and edema over the left forearm. Vital signs are normal. Complete blood count demonstrates hemoglobin of 9.2 g/dL and platelet count of 180,000/mm3. Baseline coagulation parameters are normal (INR 1.0, aPTT 28 seconds). The patient has no active bleeding or history of heparin-induced thrombocytopenia. The admitting resident plans to order pharmacologic thromboprophylaxis to prevent hospital-acquired deep vein thrombosis.\n\nAccording to current American College of Chest Physicians (CHEST) and American Society of Hematology (ASH) guidelines, which of the following represents the preferred pharmacologic venous thromboembolism (VTE) prophylaxis regimen for this patient?",
    "choices": [
      [
        "Subcutaneous low-dose unfractionated heparin (UFH; 5,000 units subcutaneously every 8 to 12 hours), which is preferred over low-molecular-weight heparin in patients with severe renal impairment (eGFR < 30 mL/min) because UFH is cleared primarily by the reticuloendothelial system rather than the kidneys",
        "Venous Thromboembolism (VTE) prophylaxis in hospitalized medically ill patients requires careful consideration of renal elimination kinetics: (1) ELIMINATION OF LOW-MOLECULAR-WEIGHT HEPARINS (LMWH: enoxaparin, dalteparin): LMWH molecules are eliminated almost exclusively (> 80-90%) by renal GLOMERULAR FILTRATION. In patients with severe renal impairment (estimated GFR < 30 mL/min/1.73 m2), renal clearance of LMWH drops precipitously, leading to progressive PHARMACOKINETIC BIOACCUMULATION of anti-Xa activity. Multiple clinical trials and meta-analyses prove that administering standard-dose or unadjusted LMWH in severe renal failure nearly quadruples the risk of catastrophic major bleeding (e.g., retroperitoneal hemorrhage, fatal gastrointestinal bleeding) without providing superior antithrombotic efficacy. (2) ELIMINATION OF UNFRACTIONATED HEPARIN (UFH): Unfractionated heparin is a heterogeneous mixture of glycosaminoglycans cleared primarily by a rapid, saturable cellular mechanism involving ENDOTHELIAL CELLS AND MACROPHAGES OF THE RETICULOENDOTHELIAL SYSTEM, followed by hepatic depolymerization; renal clearance plays only a minor, non-saturable secondary role at very high doses. (3) GUIDELINE RECOMMENDATION: For hospitalized patients with severe renal impairment (eGFR < 30 mL/min), current CHEST and ASH guidelines STRONGLY PREFER LOW-DOSE UNFRACTIONATED HEPARIN (UFH 5,000 units SC q8h or q12h) over LMWH. If enoxaparin must be used when UFH is strictly unavailable, dose reduction (e.g., 30 mg SC once daily instead of 40 mg daily) and mandatory anti-Xa trough monitoring are required."
      ],
      [
        "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
        "Enoxaparin is renally cleared; administering 40 mg daily in eGFR 18 mL/min leads to severe drug accumulation and a nearly 4-fold increase in major bleeding complications."
      ],
      [
        "Oral rivaroxaban 10 mg daily as preferred oral thromboprophylaxis",
        "Direct oral factor Xa inhibitors are renally eliminated and are not approved for routine medical VTE prophylaxis in stage 5 CKD; they carry high bleeding risks without monitoring."
      ],
      [
        "Subcutaneous fondaparinux 2.5 mg daily as first-line synthetic thromboprophylaxis",
        "Fondaparinux is 100% renally excreted and carries an absolute FDA contraindication in severe renal impairment (eGFR < 30 mL/min) due to catastrophic major hemorrhage risks."
      ],
      [
        "Withhold all mechanical and pharmacological thromboprophylaxis because renal failure provides natural auto-anticoagulation",
        "Uremia causes platelet dysfunction but does NOT protect against venous thromboembolism; bedbound hospitalized patients with CKD have high rates of fatal pulmonary embolism and require prophylaxis."
      ]
    ],
    "rationale": "In hospitalized patients with severe renal impairment (eGFR < 30 mL/min), unfractionated heparin (UFH 5,000 units SC q8-12h) is preferred over low-molecular-weight heparin (enoxaparin) for VTE prophylaxis. LMWH is cleared renally (> 80%), causing pharmacokinetic bioaccumulation and quadrupling major bleeding risk in advanced renal failure. UFH is cleared by endothelial cells and the reticuloendothelial system, making its clearance independent of renal function. Fondaparinux is 100% renally cleared and is absolutely contraindicated for eGFR < 30.",
    "metadata": {
      "shortSolution": "VTE prophylaxis in severe renal failure (eGFR 18 mL/min) requires subcutaneous unfractionated heparin (UFH 5,000 U q8-12h); avoid LMWH (enoxaparin) to prevent renal drug bioaccumulation and bleeding.",
      "competingChoice": "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
      "exclusionFinding": "Enoxaparin accumulates in renal failure (eGFR < 30) due to renal excretion, quadrupling major bleeding; UFH is cleared by reticuloendothelial cells and is preferred.",
      "pedagogicalValue": "Understanding the clearance pathways of anticoagulants: LMWH/fondaparinux accumulate in renal failure (eGFR < 30), making subcutaneous UFH the preferred agent for VTE prophylaxis.",
      "citations": [
        "Schünemann HJ, Cushman M, Burnett AE, et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: prophylaxis for hospitalized and nonhospitalized medical patients. Blood Adv. 2018;2(22):3198-3225. PMID: 30482763.",
        "Lim W, Dentali F, Eikelboom JW, Crowther MA. Meta-analysis: low-molecular-weight heparin and bleeding in patients with severe renal insufficiency. Ann Intern Med. 2006;144(9):673-684. PMID: 16670137."
      ]
    },
    "critique": {
      "shortestValidSolution": "VTE prophylaxis in severe CKD (eGFR < 30) -> subcutaneous unfractionated heparin (UFH 5,000 U q8-12h) avoids renal bioaccumulation.",
      "strongestCompetitor": "Subcutaneous enoxaparin 40 mg once daily, as low-molecular-weight heparins require no dose adjustment or pharmacokinetic precautions in renal failure",
      "exclusionFinding": "Enoxaparin bioaccumulates in renal failure and quadruples major bleeding; UFH is cleared reticuloendothelially.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0444",
    "exam": "Step 3",
    "subject": "Psychiatry",
    "system": "Nervous System",
    "topic": "Postoperative Delirium and Psychosis in Parkinson Disease",
    "subtopic": "Avoidance of Typical Antipsychotics, Dopamine Antagonism Dangers, Quetiapine and Pimavanserin",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a 7-year history of Parkinson disease managed with oral carbidopa-levodopa (25/100 mg four times daily) and pramipexole (0.5 mg three times daily) undergoes elective open repair of an incarcerated inguinal hernia under general anesthesia. On postoperative night 1, the cross-covering resident is called to the bedside because the patient has become agitated, fearful, and is experiencing vivid visual hallucinations, insisting that 'black insects are crawling all over the walls and ceiling.' Physical examination reveals a frightened, tremulous man who is disoriented to time and place. Vital signs demonstrate blood pressure of 132/78 mm Hg, heart rate of 84/min, respiratory rate of 18/min, and temperature of 37.2 C (99.0 F). Neurological examination shows bilateral resting pill-rolling tremors, mild cogwheel rigidity, and no focal cranial nerve deficits. Serum electrolytes, blood glucose, and urinalysis are normal. The bedside surgical nurse has drawn up 5 mg of haloperidol into a syringe and asks for authorization to administer it intravenously to control his agitated hallucinations.\n\nWhich of the following explains why intravenous haloperidol is strictly contraindicated in this patient, and what is the preferred pharmacological strategy if non-pharmacological de-escalation fails?",
    "choices": [
      [
        "Haloperidol exerts potent dopamine D2 receptor antagonism in the striatum, which precipitates acute catastrophic motor deterioration, severe Parkinsonian 'off' crisis, neuroleptic malignant syndrome, or irreversible rigidity; if medication is necessary, low-dose quetiapine or pimavanserin is the preferred agent",
        "Management of psychosis and delirium in Parkinson Disease (PD) is exceptionally challenging due to conflicting neurochemical systems: (1) PATHOPHYSIOLOGY OF PD PSYCHOSIS: Parkinson disease is characterized by chronic dopaminergic depletion in the striatum (causing motor parkinsonism) combined with relative mesolimbic and cortical hyper-reactivity, often aggravated by dopaminergic medications (especially dopamine receptor agonists like pramipexole and ropinirole). Visual hallucinations are characteristically well-formed and non-threatening initially, but become distressing and paranoid during acute hospital stressors (surgery, infection, opioids). (2) ABSOLUTE CONTRAINDICATION TO TYPICAL ANTIPSYCHOTICS: First-generation antipsychotics (HALOPERIDOL, fluphenazine) and certain second-generation antipsychotics with high D2 affinity (RISPERIDONE, OLANZAPINE) POTENTLY BLOCK DOPAMINE D2 RECEPTORS IN THE DORSAL STRIATUM. In a patient with baseline Parkinson disease, administering haloperidol completely shuts down remaining striatal dopaminergic neurotransmission, precipitating: (a) Catastrophic, irreversible akinesia and 'lead-pipe' rigidity; (b) Complete inability to swallow or breathe, leading to fatal aspiration; (c) Neuroleptic Malignant Syndrome (NMS); and (d) Marked increase in 30-day mortality. Haloperidol is STRICTLY CONTRAINDICATED in Parkinson disease. (3) FIRST-LINE MEDICAL MANAGEMENT: (a) Identify and treat underlying triggers (infection, pain, opioids, urinary retention); (b) Taper or discontinue high-potency adjunctive antiparkinsonian drugs with high psychotogenic potential (first stop anticholinergics, then amantadine, then dopamine agonists like pramipexole, preserving carbidopa-levodopa); (c) IF ANTIPSYCHOTIC PHARMACOTHERAPY IS UNREASONABLY AVOIDABLE: LOW-DOSE QUETIAPINE (12.5 to 25 mg at bedtime; minimal D2 affinity, fast dissociation) OR PIMAVANSERIN (a selective 5-HT2A inverse agonist that possesses ZERO DOPAMINE RECEPTOR AFFINITY) are the ONLY guideline-recommended antipsychotics in Parkinson disease."
      ],
      [
        "Haloperidol induces massive central acetylcholine depletion causing acute cholinergic crisis; intravenous atropine should be administered instead",
        "Haloperidol is a dopamine receptor antagonist, not an anticholinergic; it exacerbates dopamine deficiency in Parkinson disease, and atropine is not indicated."
      ],
      [
        "Administer intravenous haloperidol combined with intravenous diphenhydramine to fully neutralize any extrapyramidal motor risks",
        "Diphenhydramine is a potent anticholinergic that worsens delirium, cognitive decline, and urinary retention; it cannot prevent haloperidol-induced Parkinsonian crisis and is contraindicated."
      ],
      [
        "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
        "Risperidone has potent dose-dependent striatal dopamine D2 receptor blockade that severely worsens motor parkinsonism and rigidity, behaving similarly to haloperidol."
      ],
      [
        "Immediately triple the dose of oral pramipexole to enhance central dopaminergic tone and resolve the hallucinations",
        "Pramipexole is a dopamine receptor agonist that directly causes visual hallucinations; increasing pramipexole will severely exacerbate psychosis and delirium."
      ]
    ],
    "rationale": "In Parkinson disease, psychotic hallucinations are exacerbated by surgery, infection, or dopamine agonists. First-generation antipsychotics (haloperidol) and high-potency second-generation agents (risperidone) are strictly contraindicated because potent striatal dopamine D2 receptor blockade triggers acute catastrophic motor freezing, severe rigidity, aspiration, and neuroleptic malignant syndrome. Management involves non-pharmacologic care, tapering dopamine agonists (pramipexole), and if medication is unavoidable, selecting low-dose quetiapine (low D2 affinity) or pimavanserin (selective 5-HT2A inverse agonist with zero dopamine receptor affinity).",
    "metadata": {
      "shortSolution": "Haloperidol is contraindicated in Parkinson disease because potent D2 blockade precipitates severe motor crisis and rigidity; if needed, use low-dose quetiapine or pimavanserin (no dopamine blockade).",
      "competingChoice": "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
      "exclusionFinding": "Risperidone potently blocks striatal D2 receptors and severely worsens motor Parkinsonism; quetiapine or pimavanserin is the only approved choice.",
      "pedagogicalValue": "Mastering antipsychotic selection in Parkinson disease: haloperidol is strictly contraindicated due to D2-blockade motor collapse; quetiapine or pimavanserin is preferred.",
      "citations": [
        "Cummings J, Isaacson S, Mills R, et al. Pimavanserin for patients with Parkinson's disease psychosis: a randomised, placebo-controlled phase 3 trial. Lancet. 2014;383(9916):533-540. PMID: 24183448.",
        "Seppi K, Ray Chaudhuri K, Coelho M, et al. Update on treatments for nonmotor symptoms of Parkinson's disease-an evidence-based medicine review. Mov Disord. 2019;34(2):180-198. PMID: 30652384."
      ]
    },
    "critique": {
      "shortestValidSolution": "Parkinson delirium/hallucinations -> avoid haloperidol (D2 blockade causes motor collapse); use low-dose quetiapine or pimavanserin.",
      "strongestCompetitor": "Administer high-dose intravenous risperidone 4 mg as a safe alternative with no motor adverse effects",
      "exclusionFinding": "Risperidone potently blocks D2 receptors and worsens rigidity; quetiapine and pimavanserin are the evidence-based choices.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0445",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Central Venous Catheter (CVC) Occlusion and Alteplase Instillation",
    "subtopic": "Intraluminal Fibrin Thrombosis, Avoidance of Forceful Flushing, tPA Dwell Technique",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old woman with metastatic breast cancer receiving cyclic outpatient chemotherapy is admitted to the medical ward for management of neutropenic fever. She has a right subclavian tunneled silicone central venous catheter (PowerLine port) placed 4 months ago. When the registered nurse attempts to administer intravenous cefepime through the port, the infusion pump alarms for high upstream occlusion pressure. On examination of the catheter, the nurse can flush 5 mL of normal saline with mild resistance, but cannot aspirate any blood from the catheter lumen (withdrawal occlusion / 'one-way valve' phenomenon). Changing the patient's arm and head position, having her cough, and deep inspiration fail to restore blood aspiration. The overlying skin is clean, non-tender, and without swelling or erythema. The nurse picks up a 10-mL syringe and prepares to forcefully flush the line with 20 mL of heparinized saline under high manual syringe pressure to 'blow open the obstruction.'\n\nWhich of the following represents the most appropriate immediate intervention to manage this catheter occlusion?",
    "choices": [
      [
        "Instruct the nurse to immediately stop forceful manual flushing, and instill 2 mg (in 2 mL) of recombinant tissue plasminogen activator (alteplase / tPA) into the catheter lumen, allowing it to dwell for 30 to 120 minutes before aspirating",
        "Central Venous Catheter (CVC) Occlusion is the most common non-infectious catheter complication, occurring in up to 25% of long-term lines: (1) PATHOPHYSIOLOGY OF THROMBOTIC OCCLUSION: Over 60% of catheter occlusions are caused by INTRALUMINAL THROMBUS OR A FIBRIN SLEEVE/TAIL at the catheter tip. A fibrin tail acts as a classic 'ONE-WAY CHECK VALVE': it permits fluid infusion (as positive infusion pressure displaces the flap outward away from the lumen) but collapses inward over the catheter orifice during negative aspiration pressure, preventing blood return. (2) CATASTROPHIC DANGER OF FORCEFUL MANUAL FLUSHING: Attempting to forcefully flush an obstructed catheter using high manual plunger pressure is DANGEROUSLY CONTRAINDICATED. Forceful flushing generates extreme intraluminal hydrostatic pressures exceeding 50 to 100 psi (especially with small syringes). This causes: (a) Catheter rupture, fracture, and plastic fragment embolization into the right ventricle or pulmonary artery; (b) Extravasation of irritating infusate into the mediastinum or subcutaneous space; and (c) Embolization of large, infected, or sterile fibrin clots into the pulmonary arterial circulation, causing acute pulmonary embolism. (3) FIRST-LINE EVIDENCE-BASED RESTORATION PROTOCOL (COOL TRIAL): Recombinant tissue plasminogen activator (ALTEPLASE / tPA; Cathflo Activase) is the definitive, FDA-approved thrombolytic of choice. Standard protocol: (a) Instill 2.0 mg of alteplase (reconstituted in 2.0 mL of sterile water to match the internal priming volume of the catheter lumen); (b) Allow alteplase to DWELL within the catheter lumen for 30 to 120 minutes to bind and enzymatically digest fibrin clots; (c) Aspirate the dwell volume (containing alteplase and degraded clot fragments) and discard; (d) Flush with normal saline. This achieves catheter clearance in > 85-90% of cases, avoiding line replacement."
      ],
      [
        "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
        "Forceful flushing with a small syringe generates extreme hydrostatic pressure (> 50 psi), causing catheter rupture, plastic fracture embolization, or pulmonary thromboembolism."
      ],
      [
        "Immediately remove the tunneled port under local anesthesia and insert a temporary femoral venous catheter",
        "Invasive removal of a functional tunneled port is completely premature; > 85% of thrombotic catheter occlusions are successfully cleared non-invasively with intraluminal alteplase dwell."
      ],
      [
        "Infuse 1,000 units of unfractionated heparin into the catheter lumen and flush it through into the systemic circulation",
        "Heparin prevents new clot formation but does not dissolve pre-existing fibrin clots; pushing heparin into the circulation fails to clear the obstruction and causes systemic anticoagulation."
      ],
      [
        "Instill 2 mL of 0.1 N hydrochloric acid into the catheter lumen and leave it indefinitely",
        "Hydrochloric acid is used specifically for low-pH drug precipitates (e.g., vancomycin), not for thrombotic fibrin occlusion, and risks catheter degradation."
      ]
    ],
    "rationale": "CVC occlusion with ability to infuse but inability to aspirate represents a fibrin sheath or intraluminal thrombus acting as a one-way valve. Forceful manual flushing is strictly contraindicated because high hydrostatic pressure can rupture the catheter or dislodge emboli into the pulmonary circulation. The evidence-based standard of care is instilling 2 mg (2 mL) of alteplase (tPA) into the catheter lumen, allowing it to dwell for 30 to 120 minutes, followed by aspiration and saline flush (COOL trial). This restores patency in > 85% of occluded lines without requiring catheter removal.",
    "metadata": {
      "shortSolution": "Central line with one-way withdrawal occlusion from a fibrin clot requires instillation of 2 mg alteplase (tPA) dwell for 30-120 minutes; avoid forceful flushing to prevent catheter rupture and embolization.",
      "competingChoice": "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
      "exclusionFinding": "Small syringes generate extreme hydrostatic pressures that cause catheter rupture and embolization; forceful flushing is strictly contraindicated.",
      "pedagogicalValue": "Recognizing the pathophysiology of catheter fibrin sleeves and knowing that intraluminal alteplase (tPA) dwell is the treatment of choice while forceful flushing is contraindicated.",
      "citations": [
        "Baskin KM, Jimenez RM, Cahill AM, et al. CVC-related venous thrombosis in children and adults. J Vasc Interv Radiol. 2009;20(7 Suppl):S275-S280. PMID: 19560010.",
        "Deitcher SR, Fesen MR, Kiproff PM, et al. Safety and efficacy of alteplase for restoring patency in occluded central venous access devices: results of the Cardiovascular Thrombolytic to Open Occluded Lines (COOL) trial. J Clin Oncol. 2002;20(1):317-324. PMID: 11773185."
      ]
    },
    "critique": {
      "shortestValidSolution": "CVC withdrawal occlusion (fibrin sheath) -> instill alteplase (tPA 2 mg) dwell for 30-120 min; stop forceful manual flushing (rupture risk).",
      "strongestCompetitor": "Authorise forceful manual flushing with a 3-mL syringe filled with 0.9% normal saline to physically dislodge the obstructing clot",
      "exclusionFinding": "Forceful flushing causes catheter rupture and clot embolization; tPA dwell dissolves the fibrin clot non-invasively.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0446",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Surgical Wound Dehiscence Without Evisceration",
    "subtopic": "Fascial Integrity Assessment, Sterile Saline Dressings, Avoidance of Blind Bedside Suturing",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man who underwent an open exploratory laparotomy and Hartmann procedure for perforated diverticulitis 5 days ago is recovering on the surgical floor. He has a history of poorly controlled type 2 diabetes mellitus, obesity (BMI 36 kg/m2), and chronic obstructive pulmonary disease. While coughing vigorously this morning, he felt a sudden 'pop' and tearing sensation along his midline abdominal incision, followed by a sudden gush of clear, pink, salmon-colored serosanguinous fluid soaking through his abdominal dressings. The surgical resident removes the dressing to inspect the incision. The superficial skin and subcutaneous adipose tissue have separated along an 8-cm segment of the midline incision. On careful sterile digital examination using sterile gloves, the deep rectus aponeurotic fascia is found to be intact, with no bowel loops, omentum, or peritoneal contents visible or protruding through the defect (absence of evisceration). Vital signs demonstrate blood pressure of 132/80 mm Hg, heart rate of 84/min, and temperature of 37.4 C. Physical examination shows a soft abdomen with mild expected perilesional tenderness and no peritoneal signs.\n\nWhich of the following represents the most appropriate initial management for this patient's wound complication?",
    "choices": [
      [
        "Apply sterile, moist saline-soaked gauze dressings to the wound, support the abdomen with an abdominal binder, advise the patient to avoid strenuous coughing or Valsalva maneuvers, and arrange for secondary healing or delayed primary closure, withholding emergency laparotomy",
        "Postoperative Wound Dehiscence is the separation of the margins of a surgical wound, occurring in 1% to 3% of abdominal surgeries: (1) RISK FACTORS: Malnutrition, obesity, advanced age, diabetes mellitus, systemic corticosteroids, intra-abdominal hypertension (vigorous coughing, retching, COPD, ileus), and surgical site infection. (2) PATHOGNOMONIC SIGN: The sudden, copious leakage of SALMON-COLORED (SEROSANGUINOUS) FLUID from an abdominal wound on postoperative days 4 to 8 is the classic hallmark of wound breakdown. (3) CRUCIAL TRIAGE - EVISCERATION VERSUS DEHISCENCE WITHOUT EVISCERATION: (a) WOUND EVISCERATION: Rupture of BOTH the fascial closure and the peritoneum, with protrusion of intra-abdominal viscera (bowel loops, omentum) out through the skin incision. Evisceration is an ABSOLUTE SURGICAL EMERGENCY requiring immediate covering with sterile moist saline sponges and emergent return to the operating room for exploratory laparotomy and fascial reconstruction. (b) DEHISCENCE WITHOUT EVISCERATION (SUPERFICIAL DEHISCENCE): In this patient, careful sterile examination confirms that the DEEP FASCIA IS INTACT, and no intra-abdominal contents protrude. Emergency laparotomy is NOT INDICATED. (4) MANAGEMENT OF SUPERFICIAL DEHISCENCE: (a) Local wound care with sterile moist saline dressings (or negative-pressure wound therapy [wound VAC]) to promote granulation tissue; (b) Application of an elastic abdominal binder to splint the incision and reduce tension; (c) Cough suppression and stool softeners to prevent spikes in intra-abdominal pressure; and (d) Healing by secondary intention or delayed secondary surgical closure once clean granulation tissue is established. (5) BEDSIDE SUTURING CONTRAINDICATION: Blindly placing deep sutures into an open, separated wound at the bedside is dangerous because it risks puncturing unseen underlying bowel and introduces foreign material into a contaminated wound."
      ],
      [
        "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
        "Emergent re-operation is indicated exclusively for complete fascial rupture with visceral evisceration; in superficial dehiscence with an intact deep fascia, emergency surgery is unnecessary and overly invasive."
      ],
      [
        "Blindly re-approximate the separated wound margins at the bedside using 1-0 polypropylene interrupted retention sutures without local anesthesia",
        "Blind bedside deep suturing risks catastrophic bowel perforation and fistula formation, causes severe pain, and traps bacteria within contaminated subcutaneous tissue."
      ],
      [
        "Pack the open wound with dry sterile gauze sponges and apply a rigid adhesive pressure dressing changed once weekly",
        "Dry gauze desiccates exposed tissues, causes mechanical damage during removal, and weekly dressing changes promote bacterial infection; moist saline dressings changed regularly are required."
      ],
      [
        "Administer intravenous vancomycin, piperacillin-tazobactam, and metronidazole for 14 days for presumed intra-abdominal sepsis",
        "Superficial mechanical dehiscence without fever, erythema, purulence, or peritoneal signs is a mechanical complication, not a systemic bacterial infection; systemic antibiotics are not indicated."
      ]
    ],
    "rationale": "Surgical wound separation presenting with salmon-colored serosanguinous fluid is wound dehiscence. Clinical triage hinges on fascial integrity: (1) Complete fascial rupture with protruding viscera (evisceration) is an emergency requiring emergent OR return. (2) Superficial dehiscence with INTACT deep fascia (as in this patient) does NOT require emergency laparotomy. Management involves sterile moist saline-soaked gauze dressings (or wound VAC), an abdominal binder to support the wall, avoiding straining, and allowing secondary intention healing or delayed primary closure. Blind bedside suturing is contraindicated.",
    "metadata": {
      "shortSolution": "Superficial wound dehiscence with intact fascia (no evisceration) requires moist saline dressings, abdominal binder, and secondary healing; emergency laparotomy is reserved for fascial evisceration.",
      "competingChoice": "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
      "exclusionFinding": "Emergency laparotomy is indicated only when the deep fascia ruptures with visceral evisceration; intact fascia is managed conservatively with moist dressings.",
      "pedagogicalValue": "Differentiating surgical wound dehiscence with intact fascia (conservative moist dressings, binder) from complete fascial evisceration (emergent OR return).",
      "citations": [
        "Sandy-Hodgetts K, Leslie GD, Lewin G. Surgical wound dehiscence: a conceptual framework for clinical practice. J Wound Care. 2018;27(3):119-126. PMID: 29533722.",
        "van Ramshorst GH, Nieuwenhuizen J, Hop WC, et al. Abdominal wound dehiscence in adults: development and validation of a risk model. World J Surg. 2010;34(1):20-27. PMID: 19898894."
      ]
    },
    "critique": {
      "shortestValidSolution": "Wound dehiscence with intact fascia (no evisceration) -> moist saline dressings + abdominal binder + secondary healing; withhold emergency surgery.",
      "strongestCompetitor": "Immediately return the patient to the operating room for emergent exploratory laparotomy and mesh placement",
      "exclusionFinding": "Emergency laparotomy is reserved for fascial breakdown with evisceration; intact fascia requires conservative wound care.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0447",
    "exam": "Step 3",
    "subject": "Anesthesiology",
    "system": "Nervous System",
    "topic": "Post-Dural Puncture Headache (PDPH) and Epidural Blood Patch",
    "subtopic": "Postural Orthostatic Cephalea, CSF Leakage Kinetics, Autologous Blood Patch",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old primigravida woman who underwent an uncomplicated elective repeat Cesarean delivery under epidural anesthesia 48 hours ago is recovering on the postpartum ward. During epidural catheter placement by a trainee, an accidental dural puncture ('wet tap') occurred with an 18-gauge Tuohy needle, but the catheter was resited successfully. This morning upon attempting to sit up in bed to nurse her newborn, she developed an excruciating, incapacitating, throbbing bifrontal and occipital headache radiating to her neck and shoulders. She describes that the headache is completely agonizing (10/10) when sitting or standing, but completely disappears within 5 to 10 minutes whenever she lies completely flat in the supine position. She also reports mild photophobia, nausea, and muffled hearing (tinnitus). Physical examination demonstrates an uncomfortable woman lying flat in bed. Vital signs are normal, and she is afebrile. Neurological examination is completely normal: pupils are reactive, cranial nerves are intact, motor and sensory exams are normal, and there is no papilledema or nuchal rigidity when supine. Conservative management with aggressive oral and intravenous hydration, oral acetaminophen, oral caffeine, and bed rest was initiated 24 hours ago, but her headache recurs with unbearable intensity whenever she attempts to stand.\n\nWhich of the following represents the most effective definitive therapeutic intervention for this patient's condition?",
    "choices": [
      [
        "Perform an autologous epidural blood patch (injecting 15 to 20 mL of the patient's own sterile venous blood into the epidural space at or near the level of the dural puncture)",
        "Post-Dural Puncture Headache (PDPH) is a classic iatrogenic complication resulting from intentional or accidental perforation of the dura mater during spinal anesthesia, diagnostic lumbar puncture, or epidural placement: (1) PATHOPHYSIOLOGY: Cerebrospinal fluid leaks continuously through the persistent dural-arachnoid puncture hole into the epidural space at a rate faster than choroid plexus CSF production (normal CSF production is ~0.35 mL/min or 500 mL/day). This causes intracranial CSF hypovolemia and low intracranial pressure. When the patient assumes an upright posture, the brain sags downward within the cranial vault, placing traction on pain-sensitive anchoring structures (the tentorium cerebelli, dural falx, and sensory branches of cranial nerves V, IX, X). Compensatory cerebral and meningeal venodilation also contributes to throbbing pain. (2) PATHOGNOMONIC CLINICAL HALLMARK: An intensely POSTURAL / ORTHOSTATIC HEADACHE that worsens significantly within 15 minutes of sitting or standing and resolves or improves markedly within 15 to 30 minutes of lying supine. Auditory symptoms (tinnitus, hearing loss) occur due to endolymphatic sac pressure changes. (3) DEFINITIVE THERAPY (THE AUTOLOGOUS EPIDURAL BLOOD PATCH): While mild PDPH can be managed conservatively for 24 to 48 hours (bed rest, hydration, caffeine, NSAIDs), an AUTOLOGOUS EPIDURAL BLOOD PATCH (EBP) is the DEFINITIVE GOLD STANDARD OF CARE for severe, incapacitating PDPH or cases refractory to conservative therapy. Protocol: Under strict aseptic technique, 15 to 20 mL of the patient's own autologous blood is drawn from an antecubital vein and injected into the epidural space at or adjacent to the level of the dural puncture. The blood spreads several spinal segments cephalad and caudad, forming a gelatinous fibrin clot that mechanically plugs the dural tear, immediately halting further CSF leak and restoring normal intracranial CSF pressure within minutes (> 85-95% immediate success rate)."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 1,000 mg daily for 3 days to suppress meningeal inflammation",
        "PDPH is a mechanical CSF leak causing downward brain traction, not an autoimmune or inflammatory condition; corticosteroids provide zero therapeutic benefit and delay definitive mechanical repair."
      ],
      [
        "Perform a repeat lumbar puncture in the lateral decubitus position to inject 20 mL of preservative-free normal saline into the intrathecal space",
        "Intrathecal saline injection provides only transient (minutes to hours) pressure restoration and introduces a second dural puncture hole, doubling the CSF leak rate."
      ],
      [
        "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
        "Triptans are 5-HT1B/1D agonists for vascular migraine; multiple randomized trials have shown that triptans are completely ineffective for mechanical low-pressure post-dural puncture headaches."
      ],
      [
        "Perform emergent bilateral surgical superficial temporal artery ligation",
        "Superficial temporal artery ligation has no role in low-CSF-pressure orthostatic headaches and represents an inappropriate, mutilating surgical intervention."
      ]
    ],
    "rationale": "Post-Dural Puncture Headache (PDPH) is caused by persistent CSF leakage through a dural puncture hole (often from large-bore Tuohy needles), causing low intracranial pressure and downward traction on pain-sensitive meningeal structures when upright. The hallmark is an incapacitating orthostatic headache (severe upright, disappears flat). While initial hydration, caffeine, and NSAIDs are trialed, the definitive gold standard for severe or refractory PDPH is an AUTOLOGOUS EPIDURAL BLOOD PATCH (injecting 15-20 mL of sterile autologous venous blood into the epidural space). The injected blood forms a mechanical clot sealing the dural defect, resolving symptoms in > 90% of patients. Steroids and triptans are ineffective.",
    "metadata": {
      "shortSolution": "Severe postural headache disappearing when supine 48 hours post-epidural wet tap is PDPH; refractory to conservative therapy, the definitive gold-standard treatment is an autologous epidural blood patch.",
      "competingChoice": "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
      "exclusionFinding": "Triptans are ineffective for mechanical low-pressure CSF leaks; an autologous epidural blood patch is required to physically seal the dural hole.",
      "pedagogicalValue": "Recognizing the orthostatic hallmark of PDPH and knowing that an autologous epidural blood patch is the definitive therapy for severe or refractory cases.",
      "citations": [
        "Russell R, Groves N, Wharton M. Obstetric post-dural puncture headache: guidelines from the Obstetric Anaesthetists' Association. Anaesthesia. 2018;73(7):806-817. PMID: 29770850.",
        "Kwak KH. Post-dural puncture headache. Korean J Anesthesiol. 2017;70(2):136-143. PMID: 28392842."
      ]
    },
    "critique": {
      "shortestValidSolution": "Severe postural headache post-dural puncture (worse upright, better flat) -> autologous epidural blood patch (15-20 mL blood seals dural hole).",
      "strongestCompetitor": "Initiate oral sumatriptan 100 mg twice daily as first-line therapy for acute dural migraine",
      "exclusionFinding": "Triptans are ineffective for mechanical CSF leaks; epidural blood patch physically seals the defect.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0448",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertensive Emergency vs Hypertensive Urgency Cross-Coverage",
    "subtopic": "Acute End-Organ Damage Triage, Titratable IV Antihypertensives, Controlled Blood Pressure Reduction",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man presents to the emergency department at 11:00 PM with severe shortness of breath, orthopnea, and chest tightness that began 2 hours ago. He has a history of essential hypertension but has not taken his prescribed amlodipine or hydrochlorothiazide for 3 weeks because he ran out of medication. On physical examination, he is in acute respiratory distress, sitting upright and diaphoretic. Vital signs demonstrate blood pressure of 218/124 mm Hg, heart rate of 118/min, respiratory rate of 28/min, and oxygen saturation of 88% on ambient air, which improves to 93% on a non-rebreather mask. Bilateral diffuse inspiratory crackles are auscultated throughout both lower and mid-lung fields, accompanied by an S3 gallop and jugular venous distension to 10 cm H2O. Neurological examination is completely normal with no focal deficits or altered mental status. Chest radiograph demonstrates cardiomegaly, bilateral fluffy alveolar infiltrates in a bat-wing distribution, and prominent vascular cephalization, confirming acute cardiogenic pulmonary edema. Serum creatinine is 1.2 mg/dL.\n\nWhich of the following represents the most appropriate initial pharmacological strategy for this patient?",
    "choices": [
      [
        "Classify as a hypertensive emergency and administer intravenous titratable vasodilators (e.g., intravenous nitroglycerin infusion combined with intravenous nicardipine or clevidipine) alongside intravenous loop diuretics, targeting a controlled reduction in mean arterial pressure of approximately 20% to 25% within the first hour",
        "Severe blood pressure elevations are categorized into two fundamentally distinct clinical entities based on the PRESENCE OR ABSENCE OF ACUTE TARGET ORGAN DAMAGE: (1) HYPERTENSIVE URGENCY: Severe blood pressure elevation (typically systolic BP >= 180 mm Hg or diastolic BP >= 120 mm Hg) WITHOUT objective evidence of acute, ongoing target organ damage. Management consists of oral antihypertensive medications (e.g., amlodipine, clonidine, or captopril) with blood pressure reduction over 24 to 48 hours in the outpatient setting; rapid intravenous reduction is NOT indicated and can precipitate cerebral or myocardial hypoperfusion. (2) HYPERTENSIVE EMERGENCY: Severe blood pressure elevation WITH OBJECTIVE, ACUTE END-ORGAN INJURY: acute cardiogenic pulmonary edema, acute coronary syndrome, aortic dissection, hypertensive encephalopathy, acute ischemic stroke, or acute kidney injury. This patient has acute cardiogenic pulmonary edema (severe dyspnea, crackles, S3 gallop, radiographic pulmonary edema), representing a TRUE HYPERTENSIVE EMERGENCY. (3) MANAGEMENT PRINCIPLES (ACC/AHA GUIDELINES): (a) ROUTE: Requires IMMEDIATE INTRAVENOUS TITRATABLE ANTIHYPERTENSIVE THERAPY in an ICU or step-down setting. (b) AGENT SELECTION: In acute pulmonary edema, INTRAVENOUS NITROGLYCERIN (sublingually then continuous IV infusion, potent venodilator that reduces preload and pulmonary capillary wedge pressure) COMBINED WITH an IV arteriolar vasodilator (NICARDIPINE or CLEVIDIPINE) and IV LOOP DIURETICS (furosemide) is the preferred regimen. (Beta-blockers like labetalol are relatively contraindicated in acute decompensated heart failure with pulmonary edema due to negative inotropic effects). (c) TARGET RATE: To prevent cerebral and coronary autoregulatory hypoperfusion, reduce Mean Arterial Pressure (MAP) by NO MORE THAN 20% TO 25% within the first hour, then toward 160/100 mm Hg over the subsequent 2 to 6 hours (except in acute aortic dissection, where rapid reduction to SBP < 120 mm Hg within 20 minutes is mandatory)."
      ],
      [
        "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
        "Acute pulmonary edema with S3 gallop and diffuse crackles constitutes acute target organ damage, defining a hypertensive emergency; managing this as urgency with oral agents risks fatal hypoxemic respiratory arrest."
      ],
      [
        "Administer a rapid intravenous bolus of hydralazine 20 mg targeting an immediate normalization of blood pressure to 120/80 mm Hg within 10 minutes",
        "Hydralazine boluses have an unpredictable, prolonged duration of action and cause reflex sympathetic tachycardia that increases myocardial oxygen consumption; precipitous normalization causes stroke and myocardial infarction."
      ],
      [
        "Administer immediate intravenous labetalol 40 mg bolus as first-line monotherapy for acute pulmonary edema",
        "Beta-blockers (labetalol) exert acute negative inotropic effects that can further depress left ventricular systolic function in acute decompensated heart failure with pulmonary edema; vasodilators (nitroglycerin/nicardipine) are preferred."
      ],
      [
        "Administer oral sublingual nifedipine 10 mg capsule bitten and swallowed for rapid blood pressure lowering",
        "Sublingual short-acting nifedipine causes uncontrollable, precipitous hypotension resulting in fatal cerebral ischemia and myocardial infarction; it carries an FDA warning and is strictly prohibited."
      ]
    ],
    "rationale": "Hypertensive emergency is defined by severe hypertension (BP >= 180/120 mm Hg) with acute target organ damage (here, acute cardiogenic pulmonary edema). It requires ICU admission and immediate titratable intravenous therapy (IV nitroglycerin to reduce preload, combined with IV nicardipine/clevidipine and IV furosemide). MAP should be lowered by 20-25% in the first hour to prevent ischemic organ hypoperfusion. Labetalol is avoided in acute pulmonary edema due to negative inotropy. Sublingual nifedipine is dangerous and prohibited.",
    "metadata": {
      "shortSolution": "BP 218/124 with acute pulmonary edema is a hypertensive emergency; requires titratable IV vasodilators (nitroglycerin/nicardipine) to reduce MAP by 20-25% in the first hour.",
      "competingChoice": "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
      "exclusionFinding": "Acute pulmonary edema represents acute target organ damage, which defines a hypertensive emergency requiring immediate IV therapy, not outpatient oral therapy.",
      "pedagogicalValue": "Distinguishing hypertensive emergency (end-organ damage present, IV therapy, 20-25% MAP reduction in 1st hour) from urgency, and choosing vasodilators over beta-blockers in pulmonary edema.",
      "citations": [
        "Whelton PK, Carey RM, Aronow WS, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146255.",
        "van den Born BJ, Lip GYH, Brguljan-Hitij J, et al. ESC Council on hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019;5(1):37-46. PMID: 30165588."
      ]
    },
    "critique": {
      "shortestValidSolution": "BP 218/124 + acute pulmonary edema = hypertensive emergency -> titratable IV vasodilators (nitroglycerin/nicardipine) targeting 20-25% MAP drop in 1 hour.",
      "strongestCompetitor": "Classify as hypertensive urgency and administer oral amlodipine 10 mg with a plan to discharge home after 2 hours of observation",
      "exclusionFinding": "Pulmonary edema is acute target organ damage, defining an emergency requiring immediate IV treatment.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0449",
    "exam": "Step 3",
    "subject": "Surgery",
    "system": "Endocrine",
    "topic": "Post-Thyroidectomy Acute Hypocalcemia Management",
    "subtopic": "Transient Parathyroid Devascularization, Chvostek and Trousseau Signs, IV Calcium Gluconate",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman who underwent an uncomplicated total thyroidectomy for multinodular goiter 24 hours ago is recovering on the surgical ward. At 4:00 AM, the cross-covering resident is called because the patient has developed tingling and numbness around her mouth (circumoral paresthesias) and painful cramping in both hands. Physical examination reveals an anxious woman. When a blood pressure cuff on her right arm is inflated to 20 mm Hg above her systolic pressure for 3 minutes, her right wrist and metacarpophalangeal joints involuntarily flex with extension of the interphalangeal joints and adduction of the thumb (positive Trousseau sign). Tapping gently over the facial nerve anterior to the ear tragus produces ipsilateral contraction of the facial muscles (positive Chvostek sign). Vital signs demonstrate blood pressure of 122/76 mm Hg and heart rate of 88/min. A 12-lead ECG reveals sinus rhythm with marked prolongation of the corrected QT interval (QTc 510 ms). Emergent laboratory evaluation demonstrates:\n- Total serum calcium: 6.6 mg/dL (normal 8.5 to 10.2 mg/dL)\n- Serum albumin: 4.0 g/dL (normal 3.5 to 5.0 g/dL)\n- Ionized calcium: 0.82 mmol/L (normal 1.15 to 1.33 mmol/L)\n- Serum magnesium: 2.0 mg/dL (normal 1.7 to 2.2 mg/dL)\n- Serum phosphate: 5.4 mg/dL (elevated; normal 2.5 to 4.5 mg/dL)\n\nWhich of the following represents the most appropriate immediate medical management for this patient?",
    "choices": [
      [
        "Administer intravenous calcium gluconate (1 to 2 g in 50 to 100 mL of 5% dextrose infused over 10 to 20 minutes) with continuous cardiac telemetry monitoring, followed by maintenance oral calcium carbonate and oral calcitriol",
        "Acute Hypocalcemia is a well-recognized complication occurring in up to 10% to 30% of patients following total thyroidectomy, caused by transient ischemia, devascularization, surgical trauma, or inadvertent excision of the parathyroid glands during thyroid lobe dissection: (1) PATHOPHYSIOLOGY AND NEUROMUSCULAR HYPEREXCITABILITY: Extracellular calcium ions stabilize neuronal and muscle cell membranes by blocking sodium channels. In severe hypocalcemia, this stabilizing effect is lost, dramatically lowering the threshold for action potential generation and provoking spontaneous, repetitive firing of peripheral nerves. (2) CLINICAL HALLMARKS: (a) Circumoral and digital paresthesias; (b) Neuromuscular irritability: Chvostek sign (facial twitching upon percussion of CN VII) and Trousseau sign (carpopedal spasm induced by cuff inflation; more sensitive and specific than Chvostek); (c) Tetany, laryngospasm, seizures, and ECG QTc prolongation (predisposing to torsades de pointes ventricular tachycardia). (3) IMMEDIATE EMERGENCY PHARMACOTHERAPY: (a) INTRAVENOUS CALCIUM GLUCONATE: Symptomatic acute hypocalcemia (ionized Ca < 0.9 mmol/L, tetany, QTc prolongation) is an emergency requiring IMMEDIATE INTRAVENOUS CALCIUM GLUCONATE (1-2 g of 10% calcium gluconate [equivalent to 90-180 mg elemental calcium] infused over 10-20 minutes). CALCIUM GLUCONATE IS PREFERRED OVER CALCIUM CHLORIDE because calcium chloride causes severe tissue necrosis and thrombophlebitis if extravasation occurs; calcium chloride is reserved for cardiac arrest via central lines. (b) ORAL CONSOLIDATION: Once acute tetany is relieved, initiate high-dose oral calcium (calcium carbonate 1,000-2,000 mg three times daily) COMBINED WITH ORAL CALCITRIOL (1,25-dihydroxyvitamin D, 0.25-0.5 mcg twice daily), which is essential to stimulate active intestinal calcium absorption in the presence of postoperative hypoparathyroidism."
      ],
      [
        "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
        "Intravenous calcium chloride is highly caustic and sclerosing; infusing it through a peripheral hand vein carries severe risks of peripheral thrombophlebitis and catastrophic full-thickness skin necrosis if extravasation occurs; calcium gluconate is preferred."
      ],
      [
        "Administer oral calcium carbonate 500 mg monotherapy once daily and recheck serum calcium in 48 hours",
        "Oral calcium monotherapy is completely inadequate for acute symptomatic hypocalcemia with QTc prolongation and tetany, and without calcitriol, oral calcium absorption is poor in hypoparathyroidism."
      ],
      [
        "Administer intravenous magnesium sulfate 2 g bolus as primary standalone therapy without calcium",
        "Serum magnesium is normal (2.0 mg/dL); while hypomagnesemia causes hypocalcemia, giving magnesium when levels are normal does not treat the acute profound calcium deficit."
      ],
      [
        "Return the patient emergently to the operating room for surgical exploration of the neck incision",
        "The patient has hypocalcemic tetany from transient parathyroid stunning, not a compressive postoperative neck hematoma (wound is non-tense, breathing is uncompromised); re-operation is unnecessary and harmful."
      ]
    ],
    "rationale": "Post-total thyroidectomy hypocalcemia results from transient ischemia or inadvertent removal of parathyroid glands. Manifestations include circumoral paresthesias, Trousseau sign (carpopedal spasm), Chvostek sign, and QTc prolongation. Symptomatic hypocalcemia with QTc prolongation is an emergency requiring immediate IV calcium gluconate (1-2 g over 10-20 min; preferred over calcium chloride because it avoids tissue necrosis if extravasated). Follow with oral calcium and calcitriol (active vitamin D to stimulate gut absorption).",
    "metadata": {
      "shortSolution": "Post-thyroidectomy tetany with Trousseau sign, QTc 510 ms, and Ca 6.6 mg/dL requires immediate IV calcium gluconate (1-2 g) on telemetry, followed by oral calcium and calcitriol.",
      "competingChoice": "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
      "exclusionFinding": "Calcium chloride causes severe peripheral thrombophlebitis and skin necrosis if extravasated; calcium gluconate is preferred for peripheral infusion.",
      "pedagogicalValue": "Mastering the treatment of post-thyroidectomy acute hypocalcemia: IV calcium gluconate for acute tetany/QTc prolongation, followed by oral calcium and calcitriol.",
      "citations": [
        "Orloff LA, Wiseman SM, Bernet VJ, et al. American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid. 2018;28(7):831-841. PMID: 29848194.",
        "Cooper MS, Gittoes NJ. Diagnosis and management of hypocalcaemia. BMJ. 2008;336(7656):1298-1302. PMID: 18535072."
      ]
    },
    "critique": {
      "shortestValidSolution": "Post-thyroidectomy tetany + QTc prolongation (Ca 6.6) -> immediate IV calcium gluconate, then oral calcium + calcitriol.",
      "strongestCompetitor": "Administer an immediate intravenous bolus of 10% calcium chloride 10 mL via a small 22-gauge peripheral hand vein",
      "exclusionFinding": "Calcium chloride causes severe tissue necrosis on extravasation; calcium gluconate is the peripheral drug of choice.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s3-0450",
    "exam": "Step 3",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Contrast-Associated Acute Kidney Injury (CA-AKI) Prevention",
    "subtopic": "Isotonic Saline Hydration, Ineffectiveness of N-Acetylcysteine/Bicarbonate, PRESERVE Trial",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with a 15-year history of type 2 diabetes mellitus, hypertension, and stage 3b chronic kidney disease (baseline serum creatinine 2.1 mg/dL, estimated GFR 32 mL/min/1.73 m2) is scheduled to undergo an elective contrast-enhanced computed tomography (CT) angiography of the chest and abdomen to evaluate a suspected thoracic aortic aneurysm. He has no history of heart failure and takes metformin (which was withheld 24 hours ago) and amlodipine. Physical examination reveals normal blood pressure (130/78 mm Hg), normal jugular venous pressure, clear lungs, and no peripheral edema. The medical resident inquires about the optimal pharmacological strategy to prevent contrast-associated acute kidney injury (CA-AKI).\n\nBased on landmark randomized clinical trial evidence (the PRESERVE trial) and current KDIGO/ACR guidelines, which of the following represents the most appropriate, evidence-based preventive strategy for this high-risk patient?",
    "choices": [
      [
        "Intravenous volume expansion with isotonic crystalloids (0.9% normal saline at 1 to 1.5 mL/kg/hour for 3 to 12 hours prior to and 6 to 12 hours following contrast administration), while withholding oral N-acetylcysteine and intravenous sodium bicarbonate",
        "Contrast-Associated Acute Kidney Injury (CA-AKI; historically contrast-induced nephropathy) is defined as an abrupt decline in renal function occurring within 48 hours of intravascular iodinated radiocontrast administration. (1) PATHOPHYSIOLOGY: Iodinated contrast triggers intense renal medullary vasoconstriction (endothelin and adenosine release with decreased nitric oxide), causing profound ischemic injury to metabolically active thick ascending limbs and proximal tubules, compounded by direct tubular epithelial cell cytotoxicity and reactive oxygen species generation. (2) EVIDENCE-BASED INTRAVENOUS EXPANSION: Intravenous volume expansion with ISOTONIC CRYSTALLOIDS (0.9% normal saline or lactated Ringer solution) is the ONLY intervention proven to consistently reduce CA-AKI. Hydration expands intravascular volume, suppresses the renin-angiotensin-aldosterone axis, dilutes contrast medium in the tubular lumen, promotes tubular contrast transit, and prevents medullary vasoconstriction. (3) THE LANDMARK PRESERVE TRIAL (NEJM 2018): For years, oral N-acetylcysteine (an antioxidant) and intravenous sodium bicarbonate (to alkalinize tubular urine) were widely utilized based on small, flawed historical studies. The landmark double-blind randomized PRESERVE trial (involving > 5,000 high-risk patients with CKD undergoing angiography) definitively tested sodium bicarbonate vs sodium chloride, and oral N-acetylcysteine vs placebo. The trial proved that NEITHER SODIUM BICARBONATE NOR N-ACETYL CYSTEINE REDUCED THE INCIDENCE OF AKI, THE NEED FOR DIALYSIS, OR 90-DAY MORTALITY compared to standard isotonic normal saline and placebo. Current KDIGO and American College of Radiology (ACR) guidelines explicitly recommend AGAINST routine N-acetylcysteine or routine sodium bicarbonate, establishing ISOTONIC SALINE AS THE PRIMARY EVIDENCE-BASED PROPHYLAXIS."
      ],
      [
        "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
        "The landmark PRESERVE trial (> 5,000 patients) proved that neither N-acetylcysteine nor sodium bicarbonate reduces contrast-induced AKI or mortality compared to isotonic saline; their routine use is contrary to guidelines."
      ],
      [
        "Administer intravenous furosemide 40 mg 1 hour prior to contrast injection to ensure high tubular flow rates",
        "Forced diuresis with furosemide causes intravascular volume depletion, worsening renal medullary vasoconstriction and significantly INCREASING the incidence of contrast nephropathy."
      ],
      [
        "Administer prophylactic oral theophylline 200 mg twice daily as an adenosine receptor antagonist",
        "Theophylline has narrow therapeutic margins, significant cardiac arrhythmogenic toxicity, and lacks consistent clinical trial support; it is not recommended by KDIGO."
      ],
      [
        "Perform prophylactic hemodialysis immediately following completion of the CT angiogram",
        "Prophylactic hemodialysis removes contrast but causes transient hemodynamic instability that worsens renal ischemia, and clinical trials prove it provides zero benefit while increasing complications."
      ]
    ],
    "rationale": "Contrast-associated acute kidney injury (CA-AKI) in patients with CKD is prevented by intravenous hydration with isotonic crystalloids (0.9% normal saline or lactated Ringer's) before and after contrast administration. The landmark PRESERVE trial (> 5,000 patients) definitively proved that neither oral N-acetylcysteine nor IV sodium bicarbonate reduces AKI, death, or dialysis compared to normal saline. Forced diuresis with furosemide worsens AKI. Prophylactic hemodialysis is ineffective and harmful.",
    "metadata": {
      "shortSolution": "High-risk CKD patient receiving iodinated contrast requires IV volume expansion with 0.9% normal saline; PRESERVE trial proved N-acetylcysteine and sodium bicarbonate provide no benefit.",
      "competingChoice": "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
      "exclusionFinding": "The PRESERVE trial proved N-acetylcysteine and sodium bicarbonate do not reduce CA-AKI compared to normal saline; guidelines recommend against them.",
      "pedagogicalValue": "Mastering evidence-based prevention of contrast-associated AKI: isotonic crystalloid hydration is proven effective, while N-acetylcysteine and sodium bicarbonate are ineffective (PRESERVE trial).",
      "citations": [
        "Weisbord SD, Gallagher M, Jneid H, et al. Outcomes after Angiography with Sodium Bicarbonate and Acetylcysteine. N Engl J Med. 2018;378(7):603-614. PMID: 29130794.",
        "Davenport MS, Perazella MA, Yee J, et al. Use of Intravenous Iodinated Contrast Media in Patients with Kidney Disease: Consensus Statements from the American College of Radiology and the National Kidney Foundation. Radiology. 2020;294(3):660-668. PMID: 31961247."
      ]
    },
    "critique": {
      "shortestValidSolution": "High-risk CKD undergoing contrast -> IV isotonic normal saline hydration; N-acetylcysteine and bicarbonate are ineffective (PRESERVE trial).",
      "strongestCompetitor": "Administer oral N-acetylcysteine 1,200 mg twice daily for 48 hours combined with intravenous sodium bicarbonate infusion",
      "exclusionFinding": "The PRESERVE trial proved NAC and bicarbonate provide zero benefit over saline.",
      "verdict": "PASS"
    }
  }
]
