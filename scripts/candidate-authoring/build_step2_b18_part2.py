import json

items_s2_b18_part2 = [
  {
    "code": "op-c-s2-0439",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Prolonged Mechanical Ventilation and Tracheostomy Timing",
    "subtopic": "Ventilator Dependence, Airway Management, Timing Indications",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with severe chronic obstructive pulmonary disease (COPD) and coronary artery disease remains intubated in the intensive care unit on day 12 following emergent repair of a ruptured abdominal aortic aneurysm complicated by septic shock and acute respiratory distress syndrome. Over the past 4 days, shock has resolved and vasopressors have been discontinued. However, daily spontaneous breathing trials (SBTs) via a T-piece have consistently failed within 15 to 20 minutes due to severe tachypnea (respiratory rate 38/min), accessory muscle use, and rapid shallow breathing index (RSBI) exceeding 135 breaths/min/L. Arterial blood gas during the failed trial shows pH 7.28, PaCO2 58 mm Hg, PaO2 68 mm Hg on FiO2 0.40. His Glasgow Coma Scale score is 11 (opens eyes to voice, follows simple commands intermittently). The intensive care team anticipates he will require prolonged mechanical ventilatory support for at least an additional 2 to 3 weeks due to severe respiratory muscle weakness and underlying lung disease.\n\nWhich of the following represents the most appropriate next step in the airway management of this patient?",
    "choices": [
      [
        "Perform a percutaneous dilatational tracheostomy to facilitate pulmonary toilet, reduce airway resistance, and accelerate weaning from mechanical ventilation",
        "Tracheostomy is indicated for patients who require prolonged mechanical ventilation when weaning cannot be achieved within 10 to 14 days and ventilatory support is anticipated to be required for an extended period. Compared to prolonged endotracheal intubation, tracheostomy offers significant clinical advantages: (1) marked reduction in dead space and airway resistance, facilitating spontaneous breathing work, (2) improved clearance of tracheobronchial secretions (enhanced pulmonary toilet), (3) elimination of laryngeal and vocal cord injury from trans-laryngeal tube pressure, (4) reduction in sedation requirements, which promotes active physical therapy and delirium reduction, and (5) enhanced patient comfort, potential for oral communication with a speaking valve, and oral nutrition. Clinical trials and guidelines (such as the TracMan trial and CHEST/ATS guidelines) support performing tracheostomy around 10 to 14 days when weaning failure is evident and prolonged ventilation is anticipated."
      ],
      [
        "Maintain translaryngeal endotracheal intubation for an additional 14 days before considering surgical airway placement",
        "Prolonged translaryngeal intubation beyond 14 days markedly increases the incidence of severe laryngeal trauma, vocal cord ulceration, and tracheal stenosis without offering any clinical benefit."
      ],
      [
        "Perform immediate extubation to ambient room air with no non-invasive ventilatory support despite failing the spontaneous breathing trial",
        "Extubation following a failed spontaneous breathing trial and RSBI > 105 results in acute respiratory decompensation, hypoxemic arrest, and emergent reintubation."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 250 mg every 6 hours to immediately resolve diaphragmatic muscle weakness",
        "Systemic corticosteroids are not indicated for prolonged ventilator dependence or ICU-acquired weakness and exacerbate myopathy and hyperglycemia."
      ],
      [
        "Initiate continuous deep intravenous neuromuscular blockade to minimize spontaneous breathing effort and patient work of breathing",
        "Deep neuromuscular blockade causes profound disuse diaphragm atrophy and critical illness myopathy, further prolonging ventilator dependence."
      ]
    ],
    "rationale": "In critically ill patients requiring mechanical ventilation, prolonged translaryngeal endotracheal intubation (> 10-14 days) is associated with significant complications, including laryngeal ulceration, vocal cord paralysis, subglottic stenosis, ventilator-associated pneumonia, and patient discomfort requiring heavy sedation. When a patient demonstrates persistent failure of spontaneous breathing trials and is anticipated to require prolonged ventilatory support (typically > 14 days), tracheostomy (percutaneous dilatational or open surgical) is the procedure of choice. Tracheostomy reduces work of breathing by decreasing airway resistance and anatomical dead space, dramatically improves secretion clearance, allows for marked reduction in sedative infusions, accelerates liberation from mechanical ventilation, and allows earlier ambulation and physical therapy.",
    "metadata": {
      "shortSolution": "Patient intubated for 12 days with persistent SBT failure and anticipated prolonged ventilation (2-3 weeks); guidelines recommend tracheostomy at 10-14 days to reduce airway resistance, enhance suctioning, and minimize sedative requirements.",
      "competingChoice": "Maintain translaryngeal endotracheal intubation for an additional 14 days before considering surgical airway placement",
      "exclusionFinding": "Prolonging translaryngeal intubation to 26 days dramatically elevates risk of subglottic stenosis, vocal cord necrosis, and tracheal perforation; tracheostomy is indicated at 10-14 days.",
      "pedagogicalValue": "Recognizing the optimal window for tracheostomy in prolonged mechanical ventilation (10-14 days) reduces airway injury and facilitates weaning.",
      "citations": [
        "Young D, Harrison DA, Cuthbertson BH, Rowan K; TracMan Collaborators. Effect of early vs late tracheostomy or no tracheostomy on mortality in adult patients requiring mechanical ventilation: a randomized clinical trial. JAMA. 2013;309(20):2121-2129. PMID: 23695482.",
        "MacIntyre NR. Weaning and extubation. In: Brochard L, Slutsky AS, eds. Mechanical Ventilation. Springer; 2020:341-356. NLM ID: 101768402."
      ]
    },
    "critique": {
      "shortestValidSolution": "Patient intubated 12 days, failing SBTs, needing > 2-3 weeks more support -> perform tracheostomy.",
      "strongestCompetitor": "Maintain translaryngeal endotracheal intubation for an additional 14 days before considering surgical airway placement",
      "decisiveExclusion": "Translaryngeal intubation > 14 days causes tracheal stenosis and vocal cord necrosis; tracheostomy is indicated at 10-14 days for anticipated prolonged ventilation.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0440",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Transfusion-Related Acute Lung Injury (TRALI)",
    "subtopic": "Pathophysiology, Donor Antibodies, Non-Cardiogenic Pulmonary Edema",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman with acute myeloid leukemia undergoes induction chemotherapy. She receives 2 units of packed red blood cells and 1 unit of apheresis platelets for severe thrombocytopenia (platelet count 8,000/mm3) and anemia (hemoglobin 6.8 g/dL). Three hours after completing the platelet transfusion, she develops acute severe shortness of breath, chills, and tachypnea. Vital signs reveal blood pressure of 92/58 mm Hg, heart rate of 122/min, respiratory rate of 32/min, temperature of 38.6 C (101.5 F), and oxygen saturation of 82% while breathing ambient air, which improves only to 88% on a 100% non-rebreather face mask. Physical examination reveals an agitated, diaphoretic woman with diffuse bilateral inspiratory crackles throughout all lung fields. Jugular venous pressure is 5 cm H2O (normal <= 8 cm H2O). Cardiac auscultation reveals tachycardia with normal S1 and S2 and no gallops or murmurs. Extremities are warm without peripheral edema. Chest radiograph reveals new, extensive bilateral fluffy alveolar infiltrates with normal cardiac silhouette and absence of vascular redistribution or Kerley B lines. Laboratory evaluation shows:\n- Plasma B-type natriuretic peptide (BNP): 64 pg/mL (normal < 100 pg/mL)\n- White blood cell count: 1,800/mm3 (decreased from pre-transfusion baseline of 4,200/mm3)\n- Arterial blood gas on 100% non-rebreather mask: pH 7.31, PaCO2 33 mm Hg, PaO2 56 mm Hg\n\nWhich of the following is the most likely underlying pathophysiologic mechanism responsible for this patient's acute respiratory decompensation?",
    "choices": [
      [
        "Donor anti-HLA or anti-human neutrophil antigen (HNA) antibodies activating recipient pulmonary capillary neutrophils, causing endothelial injury and microvascular leak",
        "Transfusion-Related Acute Lung Injury (TRALI) is the leading cause of transfusion-related mortality. The pathophysiology operates via a two-hit mechanism: (1) First hit: Underlying clinical inflammation (infection, leukemia, surgery) induces priming of pulmonary vascular endothelial cells and sequestration of neutrophils within the pulmonary microvasculature. (2) Second hit: The transfusion of plasma-containing blood products (most commonly high-plasma products like FFP and apheresis platelets from multiparous female donors) containing high-titer donor antibodies directed against recipient Human Leukocyte Antigens (anti-HLA class I or II) or Human Neutrophil Antigens (anti-HNA). These antibodies bind and trigger massive neutrophil activation, releasing reactive oxygen species, proteases, and inflammatory cytokines. This causes profound capillary endothelial destruction, loss of vascular barrier integrity, and alveolar flooding with proteinaceous exudate (non-cardiogenic pulmonary edema) within 6 hours of transfusion. Key clinical hallmarks that distinguish TRALI from circulatory overload (TACO) include: acute hypoxemia (PaO2/FiO2 <= 300), fever/chills, transient acute neutropenia (due to pulmonary margination of neutrophils), normal or low jugular venous pressure, normal BNP, and absence of cardiomegaly or peripheral edema."
      ],
      [
        "Acute hydrostatic volume overload exceeding left ventricular compliance and causing elevated pulmonary capillary wedge pressure",
        "Transfusion-associated circulatory overload (TACO) presents with elevated JVP, S3 gallop, marked elevation of BNP (> 400 pg/mL), hypertension, and rapid response to diuresis, all of which are absent in this patient with normal JVP and BNP of 64 pg/mL."
      ],
      [
        "Preformed recipient ABO antibodies triggering rapid complement-mediated intravascular hemolysis of donor erythrocytes",
        "Acute hemolytic transfusion reaction causes flank pain, acute hemoglobinuria, DIC, and positive direct antiglobulin test, not isolated severe hypoxemic non-cardiogenic pulmonary edema with neutropenia."
      ],
      [
        "Anaphylactic reaction mediated by preformed anti-IgA antibodies against transfused donor IgA in an IgA-deficient recipient",
        "Severe anaphylaxis causes bronchospasm, stridor, urticaria, angioedema, and severe hypotension, but does not present with fever, diffuse bilateral alveolar infiltrates, and acute transient neutropenia."
      ],
      [
        "Transfusion-transmitted bacterial sepsis resulting from platelet bag contamination with gram-negative endotoxin",
        "While platelet sepsis causes high fever and profound refractory hypotension, TRALI is specifically defined by acute severe non-cardiogenic pulmonary infiltrates and profound transient neutropenia mediated by anti-HLA/HNA antibodies."
      ]
    ],
    "rationale": "Transfusion-Related Acute Lung Injury (TRALI) is defined as acute onset of hypoxemic respiratory failure with bilateral pulmonary infiltrates occurring during or within 6 hours of transfusion of plasma-containing blood products, in the absence of left atrial hypertension. The mechanism involves donor anti-HLA or anti-HNA antibodies reacting against recipient neutrophils sequestered in pulmonary capillaries (two-hit hypothesis), causing neutrophil activation, protease release, and capillary endothelial destruction leading to non-cardiogenic pulmonary edema. The transient drop in circulating leukocyte count reflects pulmonary sequestration. Treatment is supportive (protective mechanical ventilation); diuretics are ineffective and potentially harmful due to relative intravascular hypovolemia.",
    "metadata": {
      "shortSolution": "Acute respiratory distress and bilateral alveolar infiltrates 3 hours after platelet transfusion with normal JVP, normal BNP (64 pg/mL), fever, and acute drop in WBCs represents TRALI; caused by donor anti-HLA or anti-HNA antibodies activating recipient pulmonary neutrophils.",
      "competingChoice": "Acute hydrostatic volume overload exceeding left ventricular compliance and causing elevated pulmonary capillary wedge pressure",
      "exclusionFinding": "Normal BNP (64 pg/mL), normal JVP (5 cm H2O), hypotension, fever, and acute transient drop in WBCs rule out hydrostatic volume overload (TACO) and establish non-cardiogenic TRALI.",
      "pedagogicalValue": "Differentiating TRALI (immune non-cardiogenic capillary leak from donor anti-HLA/HNA antibodies, normal BNP/JVP) from TACO (hydrostatic fluid overload, elevated BNP/JVP, hypertension) is critical because diuretics are indicated for TACO but worsen TRALI.",
      "citations": [
        "Semple JW, Rebetz J, Kapur R. Transfusion-related acute lung injury: a reason to be careful. Nat Rev Immunol. 2018;18(6):369-378. PMID: 29556017.",
        "Vlaar APJ, Toy P, Fung M, et al. A consensus definition of transfusion-related acute lung injury. Lancet Haematol. 2019;6(11):e574-e583. PMID: 31563509."
      ]
    },
    "critique": {
      "shortestValidSolution": "Pulmonary edema within 6h of platelet transfusion + normal BNP (64) + low JVP + fever + neutropenia -> TRALI due to donor anti-HLA/HNA antibodies.",
      "strongestCompetitor": "Acute hydrostatic volume overload exceeding left ventricular compliance and causing elevated pulmonary capillary wedge pressure",
      "exclusionFinding": "Normal BNP, low JVP, fever, and absence of cardiomegaly exclude TACO (hydrostatic overload).",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0441",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Transfusion-Associated Circulatory Overload (TACO)",
    "subtopic": "Hydrostatic Pulmonary Edema, Diagnostic Criteria vs TRALI, Diuretic Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old man with end-stage renal disease on maintenance hemodialysis, chronic heart failure with preserved ejection fraction (HFpEF, baseline LVEF 55%), and severe coronary artery disease is admitted to the hospital with symptomatic severe anemia (hemoglobin 6.4 g/dL). Over the course of 3 hours, he receives 2 units of packed red blood cells. Toward the end of the second unit, he becomes severely tachypneic, orthopneic, and anxious. Vital signs demonstrate blood pressure of 188/104 mm Hg, heart rate of 114/min, respiratory rate of 30/min, and oxygen saturation of 85% while breathing ambient air. Physical examination reveals an uncomfortable man sitting upright. Jugular venous distension is present at 12 cm H2O with prominent v waves. Cardiac auscultation reveals an S3 gallop and a grade 2/6 holosystolic murmur at the apex. Bilateral diffuse crackles are auscultated extending through the mid-to-upper lung fields, and 2+ pitting pretibial edema is noted bilaterally. Chest radiography demonstrates cardiomegaly, cephalization of pulmonary vessels, and prominent perihilar alveolar infiltrates with bilateral pleural effusions.\n\nWhich of the following sets of findings most strongly distinguishes this patient's condition from transfusion-related acute lung injury (TRALI)?",
    "choices": [
      [
        "Marked elevation of post-transfusion N-terminal pro-BNP (ratio > 1.5 of baseline), elevated systolic blood pressure, elevated jugular venous pressure, and clinical resolution with intravenous loop diuretic therapy",
        "Transfusion-Associated Circulatory Overload (TACO) is a hydrostatic, non-immune cardiogenic pulmonary edema resulting from acute volume overload in patients with compromised cardiovascular or renal reserve (e.g., elderly, chronic kidney disease, heart failure). Key features distinguishing TACO from TRALI: (1) HEMODYNAMICS: TACO characteristically presents with HYPERTENSION (often marked, systolic BP > 160 mm Hg) due to intravascular hypervolemia and sympathetic surge, whereas TRALI typically presents with normotension or hypotension. (2) JUGULAR VENOUS PRESSURE: TACO exhibits prominent JVD, S3 gallop, and peripheral edema; TRALI exhibits normal or low JVP. (3) BIOMARKERS: Post-transfusion BNP or NT-proBNP is markedly elevated (post/pre ratio > 1.5, absolute NT-proBNP often > 4,000 pg/mL); in TRALI, BNP remains baseline or only minimally elevated. (4) TEMPERATURE: TACO is usually afebrile; TRALI frequently presents with fever (> 38 C). (5) RESPONSE TO THERAPY: TACO responds dramatically to intravenous loop diuretics (e.g., furosemide) or emergent ultrafiltration/dialysis, with reduction in preload; in TRALI, diuretics have no beneficial effect and worsen hypotension."
      ],
      [
        "Transient severe leukopenia, marked fever (> 38.5 C), acute hypotension, and lack of response to intravenous loop diuretic therapy",
        "These features (leukopenia, fever, hypotension, and refractoriness to diuretics) are classic for TRALI (immune-mediated non-cardiogenic capillary leak), exactly the opposite of TACO."
      ],
      [
        "Elevated serum tryptase concentration, prominent wheezing on pulmonary examination, and rapid response to intramuscular epinephrine",
        "Elevated tryptase, wheezing, and responsiveness to epinephrine characterize an IgA- or allergen-mediated anaphylactic reaction, not TACO."
      ],
      [
        "Presence of microangiopathic hemolytic anemia with schistocytes on peripheral smear and acute direct antiglobulin test (Coombs) positivity",
        "Schistocytes and Coombs positivity indicate acute immune hemolytic transfusion reaction, not hydrostatic pulmonary edema."
      ],
      [
        "Positive blood cultures grew Serratia marcescens from both the patient and the transfused blood bag remnant",
        "Bacterial contamination of the transfused unit causes septic shock with fever, rigors, and cardiovascular collapse, not hydrostatic overload with JVD and S3 gallop."
      ]
    ],
    "rationale": "Transfusion-Associated Circulatory Overload (TACO) is hydrostatic pulmonary edema caused by excessive volume or too-rapid transfusion, predominantly occurring in patients with pre-existing heart failure or renal failure. Diagnostic criteria require new or worsening respiratory distress within 12 hours of transfusion accompanied by objective signs of fluid overload: hypertension, jugular venous distension, S3 gallop, peripheral edema, radiographic vascular congestion/cardiomegaly, elevated BNP/NT-proBNP (> 1.5x pre-transfusion baseline), and positive fluid balance. Unlike TRALI, which is non-cardiogenic and often hypotensive with fever, TACO improves with aggressive diuresis or hemodialytic ultrafiltration.",
    "metadata": {
      "shortSolution": "Hypertension (188/104), JVD (12 cm H2O), S3 gallop, cardiomegaly, marked NT-proBNP rise, and diuresis response identify TACO (cardiogenic hydrostatic edema) over TRALI (non-cardiogenic immune leak).",
      "competingChoice": "Transient severe leukopenia, marked fever (> 38.5 C), acute hypotension, and lack of response to intravenous loop diuretic therapy",
      "exclusionFinding": "These are the diagnostic hallmarks of TRALI, whereas this patient has severe hypertension, JVD, S3 gallop, and cardiomegaly indicating TACO.",
      "pedagogicalValue": "Recognizing TACO features (hypertension, elevated JVP, S3, high BNP, diuresis response) is essential for selecting urgent diuresis instead of fluid restriction or inotropes.",
      "citations": [
        "Wiersum-Osselton JC, Whitaker BI, Biemans D, et al. Revised international surveillance definition for transfusion-associated circulatory overload: a report from the ISBT working party on haemovigilance. Vox Sang. 2019;114(7):738-744. PMID: 31448408.",
        "Klanderman RB, Bosboom JJ, Migdady I, et al. Transfusion-associated circulatory overload-a systematic review of diagnostic biomarkers. Transfus Med Rev. 2019;33(3):187-196. PMID: 31103328."
      ]
    },
    "critique": {
      "shortestValidSolution": "Post-transfusion orthopnea + BP 188/104 + JVD + S3 + cardiomegaly -> TACO distinguished by high BNP, hypertension, JVD, and diuresis response.",
      "strongestCompetitor": "Transient severe leukopenia, marked fever (> 38.5 C), acute hypotension, and lack of response to intravenous loop diuretic therapy",
      "exclusionFinding": "Leukopenia, fever, and hypotension are features of TRALI, whereas TACO features hypertension, JVD, S3 gallop, and high BNP.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0442",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Severe Accidental Hypothermia and Active Internal Rewarming",
    "subtopic": "Osborn J-waves, Arrhythmia Vulnerability, Core Temperature Targets",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man who is unhoused is discovered unconscious in an abandoned warehouse during a winter blizzard. Ambient temperature is -6 C (21 F). On arrival in the emergency department, he is unresponsive to painful stimuli. Vital signs show a core body temperature of 26.2 C (79.2 F) measured with an indwelling esophageal temperature probe, blood pressure of 72/40 mm Hg, heart rate of 34/min, and respiratory rate of 6/min. Pupils are sluggishly reactive to light. Deep tendon reflexes are absent. Electrocardiogram (ECG) reveals sinus bradycardia at 34/min, marked prolongation of the PR and QTc intervals, and prominent positive deflections at the J-point (junction between the QRS complex and ST segment) across leads II, III, aVF, and V4-V6 (Osborn J-waves). Laboratory studies reveal arterial pH 7.21, serum potassium 3.6 mEq/L, and blood glucose 110 mg/dL.\n\nWhich of the following represents the most appropriate initial management strategy for this patient?",
    "choices": [
      [
        "Initiate active internal (core) rewarming using warmed, humidified oxygen (42 C to 46 C), warmed intravenous isotonic crystalloids (40 C to 42 C), and body cavity lavage (e.g., closed thoracic or bladder lavage), while avoiding rough physical movement",
        "Severe accidental hypothermia is defined by a core body temperature < 28 C (< 82.4 F). At this critical temperature threshold, the myocardium is exceedingly irritable and prone to refractory ventricular fibrillation or asystole triggered by minimal mechanical disturbance (rough movement, aggressive catheter manipulation). Management principles include: (1) CAREFUL HANDLING: The patient must be handled very gently to avoid inducing fatal ventricular arrhythmias. (2) ACTIVE CORE (INTERNAL) REWARMING: Passive external rewarming is completely inadequate for severe hypothermia. Rewarming must be directed internally to prevent 'rewarming shock' and 'core temperature afterdrop' (where peripheral vasodilation returns cold, acidemic blood from extremities to the heart, precipitating cardiac arrest). Modalities include: humidified warmed oxygen (42 C-46 C), warmed intravenous normal saline (40 C-42 C), and heated closed-system thoracic, bladder, or peritoneal irrigation. For hemodynamically unstable patients or cardiac arrest, extracorporeal membrane oxygenation (ECMO) or cardiopulmonary bypass (CPB) is the definitive method of choice. (3) PHYSIOLOGIC BRADYCARDIAC TOLERANCE: Hypothermia-induced sinus bradycardia is a normal physiological metabolic depression, not primary conduction disease; it is refractory to atropine and transcutaneous pacing (which may trigger ventricular fibrillation). As the core temperature rises above 32 C, spontaneous heart rate and cardiac output normalize."
      ],
      [
        "Immediate intravenous administration of atropine 1 mg followed by emergent transcutaneous electrical cardiac pacing to correct sinus bradycardia",
        "Hypothermic bradycardia is physiologic due to decreased metabolic demand; atropine is completely ineffective, and electrical pacing wires can mechanical trigger intractable ventricular fibrillation in the irritable myocardium."
      ],
      [
        "Passive external rewarming using standard hospital cotton blankets alone with room temperature intravenous fluids",
        "Passive rewarming relies entirely on endogenous shivering thermogenesis; at core temperatures < 30 C, shivering ceases, and passive warming alone is completely ineffective and fatal."
      ],
      [
        "Rapid immersion of the patient's extremities in a 45 C hot water bath (active peripheral rewarming)",
        "Active peripheral rewarming causes massive peripheral vasodilation, resulting in severe hypotension ('rewarming shock') and shunt of cold, acidemic blood back to the heart ('afterdrop'), provoking ventricular fibrillation."
      ],
      [
        "Emergent infusion of high-dose intravenous epinephrine (1 mg every 3 minutes) to restore normal mean arterial pressure",
        "In severe hypothermia, vasopressors are poorly metabolized, accumulate to toxic levels, and induce refractory ventricular arrhythmias; rewarming is the primary treatment for hypothermic hypotension."
      ]
    ],
    "rationale": "Severe accidental hypothermia (core temperature < 28 C) causes profound bradycardia, hypotension, respiratory depression, and ECG Osborn (J) waves due to altered myocardial action potential repolarization kinetics. At this temperature, the cold myocardium is extraordinarily irritable. Management requires gentle handling (avoiding rough movement that triggers ventricular fibrillation) and active core rewarming (warmed humidified O2, warmed IV fluids, cavity lavage, or ECMO). Atropine and pacing are contraindicated and ineffective for hypothermic bradycardia. Peripheral warming must be avoided initially to prevent core temperature afterdrop and rewarming collapse.",
    "metadata": {
      "shortSolution": "Core temperature 26.2 C (< 28 C, severe hypothermia) with Osborn J-waves requires active core rewarming (warmed humidified O2, warmed IV fluids, cavity lavage) and gentle handling; avoid pacing, atropine, or active peripheral warming.",
      "competingChoice": "Immediate intravenous administration of atropine 1 mg followed by emergent transcutaneous electrical cardiac pacing to correct sinus bradycardia",
      "exclusionFinding": "Hypothermic bradycardia is physiologic and unresponsive to atropine; electrical pacing triggers intractable ventricular fibrillation in the severely hypothermic, irritable heart.",
      "pedagogicalValue": "Understanding the management of severe hypothermia: active internal rewarming, avoidance of rough movement, and recognizing that hypothermic bradycardia resolves with warming and must not be paced.",
      "citations": [
        "Brown DJ, Brugger H, Boyd J, Paal P. Accidental hypothermia. N Engl J Med. 2012;367(20):1930-1938. PMID: 23150960.",
        "Dow J, Giesbrecht GG, Danzl DF, et al. Wilderness Medical Society Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update. Wilderness Environ Med. 2019;30(4S):S47-S69. PMID: 31740329."
      ]
    },
    "critique": {
      "shortestValidSolution": "Core temp 26.2 C + Osborn J-waves -> severe hypothermia requires active internal core rewarming and gentle handling; pacing/atropine are contraindicated.",
      "strongestCompetitor": "Immediate intravenous administration of atropine 1 mg followed by emergent transcutaneous electrical cardiac pacing to correct sinus bradycardia",
      "exclusionFinding": "Atropine and pacing are ineffective and trigger ventricular fibrillation in hypothermic myocardium.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0443",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Respiratory",
    "topic": "Smoke Inhalation Injury and Concomitant Cyanide Poisoning",
    "subtopic": "Airway Protection Thresholds, Carbon Monoxide, Hydroxocobalamin Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old man is rescued by firefighters from an enclosed apartment fire and brought to the emergency department. He was trapped in an enclosed bedroom for approximately 25 minutes. On initial assessment, he is conscious but lethargic, coughing repeatedly, and complaining of severe throat pain. Vital signs demonstrate blood pressure of 102/64 mm Hg, heart rate of 124/min, respiratory rate of 28/min, and oxygen saturation of 99% while breathing 100% oxygen via a non-rebreather mask. Physical examination reveals soot deposits around the nares and mouth, singed nasal vibrissae, blistering of the oral mucosa, and hoarseness when speaking. Bilateral breath sounds reveal scattered expiratory wheezes without crackles. Arterial blood gas on 100% oxygen shows:\n- pH: 7.18\n- PaCO2: 28 mm Hg\n- PaO2: 240 mm Hg\n- Serum bicarbonate: 11 mEq/L\n- Serum lactate: 12.8 mmol/L (elevated; normal < 2.0 mmol/L)\n- Carboxyhemoglobin: 16% (elevated; normal non-smoker < 2%)\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Immediate endotracheal intubation to secure the airway before progressive supraglottic edema occurs, followed by intravenous administration of hydroxocobalamin",
        "This patient exhibits classic features of severe smoke inhalation injury with concomitant cyanide poisoning from an enclosed space fire: (1) AIRWAY MANAGEMENT: Thermal injury to the upper airway causes delayed, rapid-onset, massive supraglottic edema that can obliterate the laryngeal lumen within hours. Indications for immediate prophylactic endotracheal intubation include: hoarseness, stridor, singed facial/nasal hairs, carbonaceous sputum, blistering of the oropharynx, and deep facial burns. Waiting for airway compromise often results in a 'cannot intubate, cannot oxygenate' emergency requiring surgical cricothyroidotomy. (2) CYANIDE TOXICITY: Synthetic materials (plastics, upholstery, wool, polyurethane) release hydrogen cyanide gas upon combustion. Cyanide binds to ferric iron (Fe3+) in mitochondrial cytochrome c oxidase (complex IV), halting oxidative phosphorylation and aerobic ATP production. This shifts metabolism to anaerobic glycolysis, generating profound, severe lactic acidosis (lactate > 8-10 mmol/L) with high mixed venous oxygen saturation. (3) ANTIDOTE: Hydroxocobalamin is the first-line antidote; it rapidly complexes with cyanide to form non-toxic cyanocobalamin (vitamin B12), which is safely excreted in the urine. Unlike sodium nitrite, hydroxocobalamin does not induce methemoglobinemia, making it completely safe in patients with concurrent carbon monoxide poisoning (whose oxygen delivery is already severely compromised by carboxyhemoglobin)."
      ],
      [
        "Continuous 100% oxygen administration via non-rebreather mask, intravenous sodium bicarbonate boluses, and observation for airway compromise",
        "Waiting for respiratory failure before intubating is disastrous because thermal airway edema progresses rapidly, preventing subsequent visualization of vocal cords; bicarbonate does not treat the underlying cyanide inhibition of cytochrome oxidase."
      ],
      [
        "Immediate administration of intravenous sodium nitrite and sodium thiosulfate, deferring intubation until mental status deteriorates",
        "Sodium nitrite induces methemoglobinemia to bind cyanide; however, methemoglobinemia further decreases oxygen carrying capacity in patients with concomitant carbon monoxide poisoning, which can be fatal. Hydroxocobalamin is preferred, and airway must be secured immediately."
      ],
      [
        "Immediate emergent transfer to a hyperbaric oxygen chamber before securing the patient's airway with endotracheal intubation",
        "Hyperbaric oxygen is secondary and must never take precedence over immediate airway protection; transporting an unsecured, swelling airway into a hyperbaric chamber can lead to asphyxiation."
      ],
      [
        "Administration of aerosolized albuterol and intravenous methylprednisolone 125 mg, withholding intubation unless PaCO2 rises above 50 mm Hg",
        "Systemic corticosteroids provide no benefit in acute inhalation injury, increase infection risk, and fail to prevent fatal mechanical airway obstruction from mucosal edema."
      ]
    ],
    "rationale": "Smoke inhalation in an enclosed structure presents two immediate lethal threats: (1) Thermal supraglottic airway injury leading to rapid upper airway edema and occlusion. Physical signs (hoarseness, singed vibrissae, soot in mouth, mucosal blistering) mandate immediate proactive endotracheal intubation before laryngeal distortion prevents tube passage. (2) Cyanide poisoning from combustion of synthetic nitrogen-containing polymers. Cyanide inhibits mitochondrial cytochrome c oxidase, causing profound lactic acidosis (lactate > 8-10 mmol/L). First-line antidote is IV hydroxocobalamin, which chelates cyanide without generating methemoglobinemia (unlike nitrites, which worsen tissue hypoxia in the setting of carboxyhemoglobinemia).",
    "metadata": {
      "shortSolution": "Enclosed fire victim with hoarseness, soot, oral blisters, severe lactic acidosis (12.8 mmol/L), and carboxyhemoglobin (16%) requires immediate intubation for impending airway edema and IV hydroxocobalamin for cyanide poisoning.",
      "competingChoice": "Immediate administration of intravenous sodium nitrite and sodium thiosulfate, deferring intubation until mental status deteriorates",
      "exclusionFinding": "Sodium nitrite creates methemoglobinemia which severely worsens oxygen-carrying capacity in the presence of carbon monoxide poisoning; hydroxocobalamin is first-line, and airway protection cannot be deferred.",
      "pedagogicalValue": "Recognizing early indications for prophylactic intubation in smoke inhalation (hoarseness, mucosal blisters) and selecting hydroxocobalamin over nitrites for cyanide poisoning when concomitant carbon monoxide toxicity is present.",
      "citations": [
        "Bebarta VS, Brittain M, Chan A, et al. Cyanide and smoke inhalation. In: Shannon MW, Borron SW, Burns MJ, eds. Haddad and Winchester's Clinical Management of Poisoning and Drug Overdose. 4th ed. Saunders Elsevier; 2007:1231-1242. NLM ID: 101314981.",
        "Gorguner M, Akgun M. Acute inhalation injury. Eurasian J Med. 2010;42(1):28-35. PMID: 25610115."
      ]
    },
    "critique": {
      "shortestValidSolution": "Smoke inhalation + hoarseness/soot + lactate 12.8 -> immediate intubation (airway edema) + IV hydroxocobalamin (cyanide antidote safe with elevated carboxyhemoglobin).",
      "strongestCompetitor": "Immediate administration of intravenous sodium nitrite and sodium thiosulfate, deferring intubation until mental status deteriorates",
      "exclusionFinding": "Nitrites induce methemoglobinemia which compounds carboxyhemoglobin hypoxia; intubation cannot wait for airway collapse.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0444",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Acute Chest Syndrome in Sickle Cell Disease",
    "subtopic": "Clinical Recognition, Respiratory Decompensation, Exchange Transfusion Criteria",
    "provisionalDifficulty": 5,
    "stem": "A 22-year-old man with sickle cell anemia (HbSS) is admitted to the hospital for management of a severe vaso-occlusive pain crisis involving his bilateral femurs and lower back. He is treated with intravenous morphine, intravenous hydration with 5% dextrose in 0.45% saline, and oral incentive spirometry. On hospital day 2, he develops acute shortness of breath, pleuritic left-sided chest pain, and cough productive of blood-tinged sputum. Vital signs reveal blood pressure of 118/72 mm Hg, heart rate of 118/min, respiratory rate of 32/min, temperature of 38.9 C (102.0 F), and oxygen saturation of 86% while breathing ambient air, which increases only to 89% on 4 L/min via nasal cannula. Physical examination reveals bronchial breath sounds and crackles over the left lower lung base. Baseline hemoglobin from 2 days ago was 8.6 g/dL; repeat laboratory evaluation shows:\n- Hemoglobin: 6.1 g/dL\n- White blood cell count: 24,500/mm3 with 14% bands\n- Platelet count: 110,000/mm3 (decreased from 280,000/mm3)\n- Arterial blood gas on 50% Venturi mask: pH 7.34, PaCO2 32 mm Hg, PaO2 54 mm Hg\n- Chest radiograph: New, dense alveolar consolidation in the left lower lobe\n\nEmpiric intravenous ceftriaxone, oral azithromycin, and high-flow supplemental oxygen are initiated. Which of the following represents the most appropriate next step in management?",
    "choices": [
      [
        "Perform urgent automated red blood cell exchange transfusion (erythrocytapheresis) targeting a hemoglobin S level < 30% and total hemoglobin of 10 to 11 g/dL",
        "Acute Chest Syndrome (ACS) is the leading cause of mortality in sickle cell disease. It is defined as a NEW PULMONARY INFILTRATE on chest radiography accompanied by fever (temp >= 38.5 C), chest pain, tachypnea, cough, or hypoxemia. Pathophysiology involves a vicious cycle of vaso-occlusion, hypoventilation, microvascular sickling in pulmonary capillaries, and fat embolization from infarcted bone marrow, complicated by bacterial or viral infection. INDICATIONS FOR TRANSFUSION: (1) SIMPLE BLOOD TRANSFUSION: Indicated for mild-to-moderate ACS with mild hypoxemia and low hemoglobin (< 9 g/dL) when total Hb will not exceed 10-11 g/dL. (2) URGENT RED BLOOD CELL EXCHANGE TRANSFUSION (ERYTHROCYTAPHERESIS): Mandated for SEVERE ACS defined by: (a) PaO2 < 60 mm Hg on supplemental oxygen (severe hypoxemia), (b) rapidly progressive multilobar infiltrates, (c) concurrent neurologic deficit/stroke, (d) hemodynamic instability, or (e) failure to improve on simple transfusion. Exchange transfusion rapidly reduces HbS percentage (< 30%) while preventing hyperviscosity (which occurs if total Hb is pushed > 10-11 g/dL with simple transfusions in patients with baseline high sickled cell burden)."
      ],
      [
        "Administer 3 units of packed red blood cells via simple transfusion to achieve a target hemoglobin of 13.0 g/dL",
        "Simple transfusion to a hemoglobin > 10-11 g/dL markedly increases whole-blood viscosity without adequately reducing HbS percentage, precipitating widespread fatal vaso-occlusive crisis and stroke."
      ],
      [
        "Administer high-dose intravenous methylprednisolone 125 mg every 6 hours to reduce pulmonary capillary inflammation",
        "Corticosteroids shorten acute chest syndrome duration but cause severe, catastrophic rebound vaso-occlusive pain crises and readmission; they are strongly discouraged in routine ACS guidelines."
      ],
      [
        "Withhold all blood transfusions and escalate intravenous morphine infusions while encouraging aggressive incentive spirometry",
        "Severe hypoxemia (PaO2 54 mm Hg on 50% FiO2) with dropped hemoglobin to 6.1 g/dL represents life-threatening ACS; withholding transfusion results in fatal respiratory arrest and multiorgan failure."
      ],
      [
        "Immediate initiation of oral hydroxyurea 20 mg/kg daily with titration based on weekly absolute neutrophil counts",
        "Hydroxyurea is maintenance preventative therapy to increase HbF over months; it has no role in the acute management of life-threatening acute chest syndrome."
      ]
    ],
    "rationale": "Acute Chest Syndrome (ACS) is a life-threatening complication of sickle cell anemia defined by a new radiographic infiltrate plus fever, respiratory symptoms, or hypoxemia. Severe ACS is defined by PaO2 < 60 mm Hg on supplemental O2, multilobar disease, or rapid clinical deterioration. Severe ACS is an absolute indication for emergent red blood cell exchange transfusion (erythrocytapheresis) to rapidly reduce HbS concentration to < 30% without raising total hemoglobin above 10-11 g/dL (to prevent fatal hyperviscosity). Simple transfusion is inadequate for severe hypoxemia, and corticosteroids are avoided due to severe rebound sickling crises.",
    "metadata": {
      "shortSolution": "Sickle cell patient with new pulmonary infiltrate, fever, severe hypoxemia (PaO2 54 mm Hg on 50% O2), and rapid drop in Hb (6.1 g/dL) has severe acute chest syndrome requiring urgent exchange transfusion targeting HbS < 30%.",
      "competingChoice": "Administer 3 units of packed red blood cells via simple transfusion to achieve a target hemoglobin of 13.0 g/dL",
      "exclusionFinding": "Simple transfusion pushing Hb to 13 g/dL causes fatal hyperviscosity; severe hypoxemia (PaO2 < 60) mandates exchange transfusion targeting HbS < 30% and Hb 10-11 g/dL.",
      "pedagogicalValue": "Identifying the clinical threshold (PaO2 < 60 mm Hg) requiring emergent exchange transfusion rather than simple transfusion in sickle cell acute chest syndrome.",
      "citations": [
        "Howard J, Hart N, Roberts-Harewood M, et al. Guideline on the management of acute chest syndrome in sickle cell disease. Br J Haematol. 2015;169(4):492-505. PMID: 25773822.",
        "Yawn BP, Buchanan GR, Afenyi-Annan AN, et al. Management of sickle cell disease: summary of the 2014 evidence-based report by expert panel members. JAMA. 2014;312(10):1033-1048. PMID: 25203083."
      ]
    },
    "critique": {
      "shortestValidSolution": "ACS + PaO2 54 on 50% O2 (< 60 mm Hg) + Hb drop to 6.1 -> severe ACS requiring emergent exchange transfusion (target HbS < 30%, Hb 10-11).",
      "strongestCompetitor": "Administer 3 units of packed red blood cells via simple transfusion to achieve a target hemoglobin of 13.0 g/dL",
      "exclusionFinding": "Targeting Hb > 10-11 g/dL in sickle cell causes hyperviscosity crisis; exchange transfusion is required for PaO2 < 60.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0445",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Fat Embolism Syndrome (FES)",
    "subtopic": "Diagnostic Triad, Petechial Rash, Supportive Critical Care",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is admitted to the orthopedic trauma service following a high-speed motorcycle collision resulting in closed fractures of the right femur and right tibia. He undergoes closed reduction and skeletal traction while awaiting definitive intramedullary nailing scheduled for the following morning. Approximately 36 hours after the injury, the nurse calls the physician because the patient has become increasingly confused, combative, and disoriented to time and place. Vital signs demonstrate blood pressure of 118/74 mm Hg, heart rate of 126/min, respiratory rate of 28/min, temperature of 38.4 C (101.1 F), and oxygen saturation of 88% while breathing ambient air. Physical examination reveals an agitated man with bilateral fine crackles on chest auscultation. Careful inspection of the skin reveals non-palpable, pinpoint petechial hemorrhages distributed across the bilateral axillae, anterior chest wall, and subconjunctival spaces. Neurologic examination shows disorientation without focal motor or sensory deficits. Laboratory studies show:\n- Hemoglobin: 10.2 g/dL (decreased from 13.8 g/dL at admission)\n- Platelet count: 85,000/mm3 (decreased from 240,000/mm3 at admission)\n- Arterial blood gas on 4 L/min nasal cannula: pH 7.46, PaCO2 31 mm Hg, PaO2 58 mm Hg\n- Chest radiography: Bilateral diffuse patchy alveolar and interstitial infiltrates ('snowstorm' pattern)\n\nWhich of the following represents the most appropriate management approach for this patient's acute condition?",
    "choices": [
      [
        "Initiate aggressive supportive care with supplemental oxygen, lung-protective mechanical ventilation if hypoxemia progresses, and early surgical fracture stabilization",
        "Fat Embolism Syndrome (FES) is a life-threatening systemic complication occurring 24 to 72 hours after long-bone fractures (femur, tibia) or orthopedic pelvic surgery. Pathophysiology involves two processes: (1) Mechanical disruption: Marrow fat droplets enter ruptured venules and travel to the pulmonary microvasculature, physically occluding capillaries. (2) Biochemical toxicity: Circulating lipases hydrolyze neutral fat into toxic free fatty acids (FFAs), provoking intense endothelial damage, capillary leak, platelet activation, and microvascular hemorrhage. DIAGNOSTIC TRIAD (GURD CRITERIA): (1) RESPIRATORY COMPROMISE (hypoxemia, dyspnea, bilateral snowstorm infiltrates) - earliest and most frequent manifestation (> 95%); (2) NEUROLOGIC DYSFUNCTION (confusion, lethargy, encephalopathy, agitation) - typically transient; and (3) PETECHIAL RASH (axillae, neck, upper chest, conjunctiva) - present in only 20-50% of cases, but PATHOGNOMONIC when observed alongside the other findings. Associated laboratory findings include thrombocytopenia and acute drop in hemoglobin. MANAGEMENT: Treatment is STRICTLY SUPPORTIVE. There is no specific pharmacological antidote (systemic steroids, heparin, and alcohol infusions have proven ineffective or harmful). Supportive critical care focuses on maintaining oxygenation (high-flow O2 or lung-protective mechanical ventilation), maintaining hemodynamic stability, and prompt operative fracture stabilization, which prevents further marrow embolization."
      ],
      [
        "Immediate full-dose therapeutic anticoagulation with intravenous unfractionated heparin bolus and infusion",
        "Therapeutic anticoagulation is indicated for venous thromboembolism but has no role in fat embolism syndrome and significantly increases hemorrhage risks from orthopedic trauma."
      ],
      [
        "Immediate administration of high-dose systemic methylprednisolone 30 mg/kg to suppress systemic free fatty acid toxicity",
        "High-dose systemic corticosteroids have not demonstrated mortality benefit in established FES and increase infectious complications in surgical trauma patients."
      ],
      [
        "Immediate systemic intravenous thrombolysis with alteplase 100 mg infused over 2 hours",
        "Thrombolytic therapy dissolves fibrin clots, not mechanical marrow fat droplets, and is catastrophic in a patient with acute fractures due to fatal internal bleeding."
      ],
      [
        "Performance of emergent lumbar puncture followed by empiric intravenous ceftriaxone, vancomycin, and ampicillin",
        "Petechial rash in trauma with long-bone fractures is pathognomonic of fat embolism; bacterial meningitis does not account for the orthopedic trauma, snowstorm lung infiltrates, and severe hypoxemia."
      ]
    ],
    "rationale": "Fat Embolism Syndrome (FES) typically occurs 24-72 hours following long-bone or pelvic fractures. It presents with the classic triad of (1) acute hypoxemic respiratory failure with bilateral infiltrates, (2) neurologic deficits/encephalopathy, and (3) a characteristic petechial rash in a vest-like distribution (axillae, neck, conjunctivae). Laboratory features include sudden thrombocytopenia and anemia. Management is strictly supportive (oxygenation, mechanical ventilation if necessary, hemodynamic maintenance) alongside early surgical fracture stabilization. Heparin, thrombolytics, and steroids have no proven therapeutic role in established FES.",
    "metadata": {
      "shortSolution": "Young male 36 hours post femur/tibia fractures with confusion, hypoxemia, bilateral infiltrates, and axillary/conjunctival petechiae has Fat Embolism Syndrome; management is supportive oxygenation/ventilation and early fracture fixation.",
      "competingChoice": "Immediate full-dose therapeutic anticoagulation with intravenous unfractionated heparin bolus and infusion",
      "exclusionFinding": "FES involves fat droplets and free fatty acid toxicity, not fibrin thrombi; therapeutic heparin offers no benefit and increases hemorrhage risk in recent fractures.",
      "pedagogicalValue": "Recognizing the pathognomonic triad of Fat Embolism Syndrome (hypoxemia, encephalopathy, axillary petechial rash) 24-72 hours after orthopedic trauma and understanding that management is supportive.",
      "citations": [
        "Stein PD, Yaekoub AY, Matta F, Kleerekoper M. Fat embolism syndrome. Am J Med Sci. 2008;336(6):472-477. PMID: 19092320.",
        "Kosova E, Bergmark B, Piazza G. Fat embolism syndrome. Circulation. 2015;131(3):317-320. PMID: 25601951."
      ]
    },
    "critique": {
      "shortestValidSolution": "Long bone fracture + 36h delay + confusion + hypoxemia + axillary petechial rash -> Fat Embolism Syndrome managed with supportive care and early fracture stabilization.",
      "strongestCompetitor": "Immediate full-dose therapeutic anticoagulation with intravenous unfractionated heparin bolus and infusion",
      "exclusionFinding": "Heparin does not treat fat emboli and risks major hemorrhage in traumatic fractures.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0446",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Malignant Pleural Mesothelioma",
    "subtopic": "Asbestos Exposure, Diagnostic Modality, Immunohistochemical Markers",
    "provisionalDifficulty": 5,
    "stem": "A 69-year-old man presents to the clinic with a 4-month history of progressive shortness of breath on exertion and dull, non-pleuritic right-sided chest wall pain. He has also noted an unintentional 6-kg (13-lb) weight loss. His occupational history reveals 28 years of employment as a commercial shipyard pipefitter and insulation installer. He has a 10 pack-year smoking history but quit 30 years ago. Physical examination demonstrates dullness to percussion and diminished breath sounds over the entire lower half of the right hemithorax with asymmetry and contraction of the right chest wall. Contrast-enhanced computed tomography (CT) of the chest reveals extensive, circumferential nodular pleural thickening involving the mediastinal, diaphragmatic, and costal pleura of the right lung, encasing the lung parenchyma, with loss of right hemithorax volume and a moderate right pleural effusion. Bilateral calcified diaphragmatic plaques are noted. Thoracentesis yields 800 mL of serosanguinous exudative pleural fluid; cytological examination shows atypical reactive mesothelial cells but is non-diagnostic for malignancy.\n\nWhich of the following is the most appropriate next step to establish a definitive diagnosis in this patient?",
    "choices": [
      [
        "Perform video-assisted thoracoscopic surgery (VATS) with multiple deep pleural biopsies for histological and immunohistochemical evaluation",
        "Malignant Pleural Mesothelioma (MPM) is an aggressive neoplasm of the mesothelial lining strongly associated with occupational asbestos exposure (latency period typically 20 to 50 years). Key diagnostic considerations include: (1) CLINICAL PRESENTATION: Insidious onset of dyspnea, dull non-pleuritic chest wall pain (reflecting parietal pleural and chest wall infiltration), weight loss, and hemithorax contraction. (2) RADIOGRAPHIC FINDINGS: Nodular, circumferential pleural thickening (> 1 cm) encasing the hemithorax, involvement of mediastinal and diaphragmatic pleural surfaces, pleural effusions, and calcified pleural plaques (evidence of past asbestos exposure). (3) DIAGNOSTIC LIMITATION OF CYTOLOGY: Pleural fluid cytology has poor diagnostic sensitivity (typically < 30%) for mesothelioma and cannot reliably differentiate benign reactive mesothelial proliferation from malignant pleural invasion. (4) GOLD STANDARD DIAGNOSTIC MODALITY: Video-Assisted Thoracoscopic Surgery (VATS) with multiple deep pleural biopsies that sample both pleural and subpleural tissue to demonstrate invasive growth into underlying fat or skeletal muscle. (5) IMMUNOHISTOCHEMISTRY: Definitive histological diagnosis requires a panel of positive mesothelial markers (calretinin, WT1, cytokeratin 5/6, D2-40) and negative adenocarcinoma markers (carcinoembryonic antigen [CEA], Claudin-4, TTF-1)."
      ],
      [
        "Repeat thoracentesis in 2 weeks for repeat pleural fluid cytology and flow cytometry",
        "Repeat pleural fluid cytology has an extremely low diagnostic yield for mesothelioma and delays definitive histological diagnosis and staging."
      ],
      [
        "Serum measurement of soluble mesothelin-related peptides (SMRP) to confirm mesothelioma non-invasively",
        "Serum mesothelin is a tumor biomarker with insufficient sensitivity and specificity to serve as a standalone diagnostic modality without histological tissue confirmation."
      ],
      [
        "Empiric initiation of combination systemic chemotherapy with pemetrexed and cisplatin without tissue biopsy",
        "Initiating cytotoxic chemotherapy without histological and immunohistochemical confirmation of malignancy is a severe violation of clinical standards of care."
      ],
      [
        "Perform bronchoscopy with transbronchial lung biopsy and endobronchial ultrasound (EBUS)",
        "Mesothelioma is a primary pleural tumor; transbronchial parenchymal biopsies do not sample the parietal/visceral pleura and have negligible yield for diagnosing mesothelioma."
      ]
    ],
    "rationale": "Malignant Pleural Mesothelioma (MPM) is strongly linked to asbestos exposure with a decades-long latency. CT imaging shows circumferential nodular pleural thickening encasing the lung. Pleural fluid cytology is notoriously insensitive (< 30%) and cannot evaluate stromal invasion. Definitive diagnosis requires thoracoscopic (VATS) pleural biopsy, which provides adequate tissue to evaluate tissue invasion and perform diagnostic immunohistochemistry (calretinin+, WT-1+, CK 5/6+ positive; CEA- negative).",
    "metadata": {
      "shortSolution": "Shipyard worker with asbestos plaques, circumferential nodular pleural thickening, and non-diagnostic pleural cytology requires VATS deep pleural biopsy to prove tissue invasion and establish immunohistochemical diagnosis (calretinin+, WT-1+).",
      "competingChoice": "Repeat thoracentesis in 2 weeks for repeat pleural fluid cytology and flow cytometry",
      "exclusionFinding": "Pleural fluid cytology has < 30% sensitivity and cannot confirm tissue invasion; VATS pleural biopsy is the diagnostic gold standard.",
      "pedagogicalValue": "Understanding the diagnostic pathway for malignant mesothelioma: recognizing the limitations of pleural cytology and the requirement for thoracoscopic tissue biopsy for definitive diagnosis.",
      "citations": [
        "Scherpereel A, Opitz I, Berghmans T, et al. ERS/ESTS/EACTS/ESTRO guidelines for the management of malignant pleural mesothelioma. Eur Respir J. 2020;55(6):1900953. PMID: 32198207.",
        "Kindler HL, Ismaila N, Armato SG 3rd, et al. Treatment of Malignant Pleural Mesothelioma: American Society of Clinical Oncology Clinical Practice Guideline. J Clin Oncol. 2018;36(13):1343-1373. PMID: 29341834."
      ]
    },
    "critique": {
      "shortestValidSolution": "Shipyard worker + circumferential pleural encasement + negative cytology -> VATS pleural biopsy is gold standard to establish tissue diagnosis.",
      "strongestCompetitor": "Repeat thoracentesis in 2 weeks for repeat pleural fluid cytology and flow cytometry",
      "exclusionFinding": "Cytology cannot demonstrate stromal invasion and has < 30% sensitivity in mesothelioma; thoracoscopic biopsy is mandatory.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0447",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Pneumocystis jirovecii Pneumonia (PJP) with Adjunctive Corticosteroids",
    "subtopic": "Arterial Oxygenation Thresholds, A-a Gradient, TMP-SMX Therapy",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old man who is newly diagnosed with HIV infection presents to the emergency department with a 3-week history of progressive shortness of breath, non-productive dry cough, and low-grade fevers. He has not engaged in outpatient care or antiretroviral therapy. Physical examination demonstrates an ill-appearing, tachypneic man in mild respiratory distress with oral candidiasis (thrush). Vital signs show blood pressure of 116/72 mm Hg, heart rate of 110/min, respiratory rate of 28/min, temperature of 38.3 C (100.9 F), and oxygen saturation of 87% while breathing ambient air. Chest auscultation reveals faint bilateral dry crackles. Laboratory evaluation shows:\n- CD4+ T-lymphocyte count: 42/mm3 (reference > 500/mm3)\n- Serum lactate dehydrogenase (LDH): 510 U/L (elevated; normal < 220 U/L)\n- Arterial blood gas while breathing ambient air (FiO2 0.21) at sea level (PB 760 mm Hg):\n  - pH: 7.47\n  - PaCO2: 28 mm Hg\n  - PaO2: 62 mm Hg\n  - Calculated alveolar-arterial (A-a) oxygen gradient: 52 mm Hg (normal <= 15 mm Hg)\n- Chest radiography: Bilateral, symmetrical, diffuse perihilar interstitial and ground-glass opacities\n\nInduced sputum examination with direct fluorescent antibody testing confirms Pneumocystis jirovecii trophic forms and cysts. In addition to intravenous trimethoprim-sulfamethoxazole (TMP-SMX), which of the following represents the most appropriate immediate pharmacotherapy for this patient?",
    "choices": [
      [
        "Initiate intravenous prednisone or methylprednisolone prior to or concomitantly with trimethoprim-sulfamethoxazole",
        "Pneumocystis jirovecii pneumonia (PJP) is a fungal opportunistic infection predominantly affecting HIV-infected individuals with CD4+ counts < 200/mm3. When antimicrobial therapy (TMP-SMX) is initiated, rapid microbial lysis releases large quantities of fungal wall antigens, triggering an intense acute inflammatory response within alveolar spaces. This inflammatory surge can cause paradoxical deterioration in pulmonary gas exchange, severe respiratory failure, and death within the first 48 to 72 hours of treatment. LANDMARK CLINICAL INDICATION FOR ADJUNCTIVE CORTICOSTEROIDS: In HIV-associated PJP, adjunctive systemic corticosteroids (oral prednisone or IV methylprednisolone) provide a proven, dramatic 50% reduction in mortality and mechanical ventilation when initiated prior to or concomitantly with antimicrobial therapy in MODERATE-TO-SEVERE DISEASE defined by: (1) Arterial blood gas PaO2 < 70 mm Hg breathing room air, OR (2) Alveolar-arterial (A-a) oxygen gradient >= 35 mm Hg. Because this patient has a PaO2 of 62 mm Hg (and an A-a gradient of 52 mm Hg), he meets both objective criteria for immediate adjunctive corticosteroid therapy (typically prednisone 40 mg twice daily for 5 days, then tapered over 21 days)."
      ],
      [
        "Withhold corticosteroids and administer intravenous pentamidine monotherapy to avoid further immunosuppression in a patient with advanced HIV",
        "Pentamidine is a second-line agent with substantial nephrotoxicity and hypoglycemia; TMP-SMX is first-line, and withholding corticosteroids in moderate-to-severe PJP (PaO2 < 70) significantly increases mortality."
      ],
      [
        "Initiate immediate antiretroviral therapy (bictegravir-emtricitabine-tenofovir alafenamide) within the first 24 hours of hospital admission",
        "In PJP, initiating ART within 2 weeks of starting antimicrobial therapy reduces progression and death, but initiating it within the first 24-48 hours before stabilizing acute gas exchange risks severe pulmonary immune reconstitution inflammatory syndrome (IRIS)."
      ],
      [
        "Administer aerosolized pentamidine 300 mg daily via nebulizer rather than systemic therapy to minimize systemic adverse reactions",
        "Aerosolized pentamidine is used exclusively for prophylaxis in patients intolerant of oral TMP-SMX; it is completely ineffective for treating acute active PJP infection."
      ],
      [
        "Administer intravenous echinocandin therapy (caspofungin) as first-line monotherapy to target beta-glucan synthesis",
        "Echinocandins have activity only against the cyst form of Pneumocystis (not trophic forms) and are never used as standalone therapy for acute PJP."
      ]
    ],
    "rationale": "In HIV-associated Pneumocystis jirovecii pneumonia, initiation of TMP-SMX causes rapid fungal death and alveolar inflammation that paradoxically worsens hypoxemia. Adjunctive systemic corticosteroids (prednisone/methylprednisolone) started before or with TMP-SMX reduce respiratory failure and mortality by 50% in patients with moderate-to-severe disease. Objective criteria for adjunctive corticosteroids are: (1) PaO2 < 70 mm Hg on room air, or (2) Alveolar-arterial (A-a) gradient >= 35 mm Hg. This patient has PaO2 of 62 mm Hg and A-a gradient of 52 mm Hg, mandating immediate corticosteroid administration.",
    "metadata": {
      "shortSolution": "HIV patient with PJP and room air PaO2 < 70 mm Hg (PaO2 62) or A-a gradient >= 35 mm Hg (52 mm Hg) has moderate-to-severe PJP; guidelines mandate adjunctive systemic corticosteroids with TMP-SMX to prevent mortality.",
      "competingChoice": "Withhold corticosteroids and administer intravenous pentamidine monotherapy to avoid further immunosuppression in a patient with advanced HIV",
      "exclusionFinding": "Withholding corticosteroids when PaO2 < 70 mm Hg doubles mortality in PJP due to microbial lysis-induced alveolar inflammation; corticosteroids are life-saving.",
      "pedagogicalValue": "Mastering the two arterial blood gas thresholds for adjunctive corticosteroids in PJP: PaO2 < 70 mm Hg or A-a gradient >= 35 mm Hg.",
      "citations": [
        "Briel M, Bucher HC, Boscacci R, Furrer H. Adjunctive corticosteroids for Pneumocystis jirovecii pneumonia in patients with HIV-infection. Cochrane Database Syst Rev. 2006;(3):CD006150. PMID: 16856118.",
        "Kaplan JE, Benson C, Holmes KK, et al. Guidelines for prevention and treatment of opportunistic infections in HIV-infected adults and adolescents. MMWR Recomm Rep. 2009;58(RR-4):1-207. PMID: 19357635."
      ]
    },
    "critique": {
      "shortestValidSolution": "PJP + PaO2 62 mm Hg (< 70) / A-a gradient 52 (>= 35) -> add adjunctive corticosteroids (prednisone) to TMP-SMX.",
      "strongestCompetitor": "Withhold corticosteroids and administer intravenous pentamidine monotherapy to avoid further immunosuppression in a patient with advanced HIV",
      "exclusionFinding": "PaO2 < 70 mm Hg is an evidence-based indication for steroids; withholding them increases mortality by 50%.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0448",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Acute Exacerbation of Idiopathic Pulmonary Fibrosis (AE-IPF)",
    "subtopic": "Diagnostic Criteria, HRCT Ground-Glass Opacities, High-Dose Pulse Corticosteroids",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a 3-year history of idiopathic pulmonary fibrosis (IPF) managed with oral pirfenidone presents to the emergency department with a 10-day history of acutely worsening dyspnea and cough. Prior to this episode, he was able to ambulate 2 blocks with 2 L/min nasal cannula oxygen. On arrival, he is in severe respiratory distress, unable to speak in full sentences. Vital signs reveal blood pressure of 134/82 mm Hg, heart rate of 116/min, respiratory rate of 34/min, temperature of 37.6 C (99.7 F), and oxygen saturation of 82% while breathing 6 L/min via nasal cannula, which improves to 88% on a high-flow nasal cannula at 50 L/min and FiO2 0.60. Bilateral end-inspiratory velcro-like crackles are heard throughout both lungs. High-resolution computed tomography (HRCT) of the chest reveals extensive, new, bilateral ground-glass opacities and areas of consolidation superimposed on pre-existing subpleural, basal-predominant honeycombing and traction bronchiectasis (usual interstitial pneumonia pattern). There is no pulmonary embolism on CT pulmonary angiography. Transthoracic echocardiography demonstrates an LVEF of 60%, normal left atrial size, and no signs of left heart failure. Microbiologic evaluation, including blood cultures, sputum Gram stain, respiratory viral PCR panel, and urinary antigens for Streptococcus pneumoniae and Legionella, are negative.\n\nWhich of the following represents the most appropriate initial pharmacological therapy for this patient's acute deterioration?",
    "choices": [
      [
        "High-dose intravenous pulse methylprednisolone (e.g., 500 to 1,000 mg daily for 3 days) accompanied by broad-spectrum empiric antimicrobial coverage",
        "Acute Exacerbation of Idiopathic Pulmonary Fibrosis (AE-IPF) is defined by international consensus guidelines (ATS/ERS/JRS/ALAT) by: (1) Pre-existing or concurrent diagnosis of IPF; (2) Acute worsening or development of dyspnea typically of < 1 month duration; (3) Computed tomography with new bilateral ground-glass abnormality and/or consolidation superimposed on a background pattern consistent with usual interstitial pneumonia (UIP); and (4) Deterioration not fully explained by cardiac failure or fluid overload. PATHOPHYSIOLOGY: AE-IPF represents acute diffuse alveolar damage (DAD) superimposed on chronic fibroproliferative remodeling, carrying a catastrophic in-hospital mortality exceeding 50%. MANAGEMENT: Although high-level randomized controlled trial evidence is limited due to the rarity and severity of the condition, international clinical guidelines universally recommend: (1) High-dose intravenous pulse corticosteroids (methylprednisolone 500-1,000 mg/day for 3 consecutive days, followed by a slow oral taper) to suppress the acute fibroinflammatory cascade, and (2) Empiric broad-spectrum antimicrobial therapy (e.g., anti-pseudomonal beta-lactam plus atypical coverage) while awaiting comprehensive microbiological culture results, given the difficulty of definitively excluding occult tracheobronchial or alveolar infection."
      ],
      [
        "Immediate doubling of the maintenance oral pirfenidone dose and discharge with home oxygen titration",
        "Pirfenidone is an antifibrotic agent that slows long-term FVC decline; dose escalation has zero efficacy in acute diffuse alveolar damage, and the patient is in severe respiratory failure requiring ICU admission."
      ],
      [
        "Intravenous loop diuretic therapy with continuous furosemide infusion to reduce hydrostatic pulmonary capillary pressure",
        "Echocardiogram confirms normal left atrial pressure and normal systolic/diastolic function without fluid overload; diuresis will provoke prerenal azotemia and systemic hypoperfusion."
      ],
      [
        "Initiation of intravenous unfractionated heparin infusion for presumed microvascular pulmonary arterial in situ thrombosis",
        "CT angiogram excluded pulmonary embolism; therapeutic anticoagulation does not treat diffuse alveolar damage and has been shown to increase mortality in IPF."
      ],
      [
        "Administration of oral cyclophosphamide monotherapy without corticosteroids to induce rapid B-cell immunosuppression",
        "Cyclophosphamide monotherapy has no proven efficacy in AE-IPF, takes weeks to exert immunosuppressive effects, and carries severe risks of bone marrow suppression and opportunistic infections."
      ]
    ],
    "rationale": "Acute Exacerbation of Idiopathic Pulmonary Fibrosis (AE-IPF) is an acute, clinically significant respiratory deterioration (< 1 month) characterized by new bilateral ground-glass opacities on HRCT superimposed on a background UIP pattern, in the absence of infection, PE, or heart failure. It pathologically corresponds to acute diffuse alveolar damage (DAD) on top of pulmonary fibrosis. Despite poor prognosis, international guidelines recommend prompt treatment with high-dose intravenous pulse methylprednisolone (500-1,000 mg/day for 3 days) and broad-spectrum empiric antibiotics while awaiting culture confirmation.",
    "metadata": {
      "shortSolution": "IPF patient with acute dyspnea (< 1 month), new bilateral ground-glass opacities superimposed on UIP, and infection/PE/heart failure excluded has AE-IPF; treated with high-dose pulse methylprednisolone and empiric antibiotics.",
      "competingChoice": "Intravenous loop diuretic therapy with continuous furosemide infusion to reduce hydrostatic pulmonary capillary pressure",
      "exclusionFinding": "Echocardiogram confirms normal left atrial pressure and normal LV function; AE-IPF is acute non-hydrostatic diffuse alveolar damage.",
      "pedagogicalValue": "Recognizing the diagnostic criteria and immediate therapy (high-dose pulse steroids + empiric antibiotics) for acute exacerbations of idiopathic pulmonary fibrosis.",
      "citations": [
        "Collard HR, Ryerson CJ, Corte TJ, et al. Acute exacerbation of idiopathic pulmonary fibrosis. An international working group report. Am J Respir Crit Care Med. 2016;194(3):265-275. PMID: 27299520.",
        "Raghu G, Remy-Jardin M, Richeldi L, et al. Idiopathic pulmonary fibrosis (an update) and progressive pulmonary fibrosis in adults: An official ATS/ERS/JRS/ALAT clinical practice guideline. Am J Respir Crit Care Med. 2022;205(9):e18-e47. PMID: 35486072."
      ]
    },
    "critique": {
      "shortestValidSolution": "IPF + acute dyspnea + new ground glass on HRCT + PE/CHF excluded -> AE-IPF treated with high-dose IV pulse methylprednisolone.",
      "strongestCompetitor": "Intravenous loop diuretic therapy with continuous furosemide infusion to reduce hydrostatic pulmonary capillary pressure",
      "exclusionFinding": "Normal echo and absence of left heart failure exclude hydrostatic edema; this is acute diffuse alveolar damage.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0449",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Post-Extubation Stridor and the Cuff Leak Test",
    "subtopic": "Laryngeal Edema, Quantitative Leak Assessment, Corticosteroid Prophylaxis",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old woman with severe asthma was intubated 6 days ago for hypercapnic respiratory failure following status asthmaticus. Over the past 48 hours, bronchospasm has completely resolved with intravenous methylprednisolone and inhaled bronchodilators. She is now alert, following commands, and breathes comfortably on minimal pressure support ventilation (PEEP 5 cm H2O, pressure support 5 cm H2O, FiO2 0.30). Arterial blood gas demonstrates pH 7.42, PaCO2 38 mm Hg, and PaO2 92 mm Hg. A 30-minute spontaneous breathing trial is successful with a rapid shallow breathing index (RSBI) of 42. Because the patient had a difficult, traumatic intubation with a size 8.0 mm endotracheal tube and is female, the critical care team performs a quantitative cuff leak test prior to planned extubation. With the cuff deflated, the measured leak volume is 75 mL (which is 14% of her delivered inspiratory tidal volume of 520 mL; normal reassuring cuff leak is > 110 mL or > 24% of tidal volume).\n\nWhich of the following represents the most appropriate management strategy prior to extubating this patient?",
    "choices": [
      [
        "Delay extubation and administer intravenous dexamethasone (e.g., 5 mg every 6 hours for at least 12 to 24 hours) followed by repeat cuff leak assessment",
        "Post-extubation stridor is a severe, life-threatening complication resulting from laryngeal edema caused by mechanical compression, mucosal ischemia, and trauma from translaryngeal endotracheal tubes. (1) RISK FACTORS: Female sex, prolonged intubation (> 36 hours), large endotracheal tube diameter relative to laryngeal anatomy, and traumatic or difficult intubation. (2) CUFF LEAK TEST: Evaluates the presence of air leak around a deflated endotracheal tube cuff during positive pressure ventilation. A cuff leak < 110 mL (or < 15-24% of inspired tidal volume) indicates significant peritubular mucosal edema and high risk of post-extubation stridor and reintubation. (3) MANAGEMENT OF A FAILED CUFF LEAK TEST: Randomized clinical trials and ATS/CHEST guidelines establish that delayed extubation combined with a course of intravenous corticosteroids (e.g., dexamethasone 5 mg IV every 6 hours for at least 12 to 24 hours, or methylprednisolone 20-40 mg every 4 hours for 4 doses) significantly reduces laryngeal mucosal edema, post-extubation stridor, and reintubation rates. Corticosteroids require several hours (minimum 4-12 hours) to downregulate inflammatory mediator expression and reduce interstitial fluid accumulation; therefore, a single dose immediately before extubation is ineffective."
      ],
      [
        "Proceed with immediate extubation followed by a single dose of oral prednisone 20 mg",
        "A single dose of steroid given at or after extubation is completely ineffective because genomic anti-inflammatory effects require hours to manifest, leaving the patient at high risk for acute upper airway obstruction."
      ],
      [
        "Proceed with immediate extubation and administer continuous nebulized albuterol to prevent laryngeal edema",
        "Albuterol is a selective beta-2 agonist that relaxes lower airway bronchial smooth muscle; it has zero efficacy on supraglottic or laryngeal mucosal edema."
      ],
      [
        "Perform an emergent open surgical tracheostomy today, as a failed cuff leak test indicates irreversible tracheal damage",
        "Laryngeal edema from intubation is a transient inflammatory process that typically resolves within 24 to 48 hours of corticosteroid therapy; tracheostomy is completely unnecessary and overly invasive."
      ],
      [
        "Exchange the current 8.0 mm endotracheal tube over a bougie for a 6.0 mm tube and immediately extubate",
        "Exchanging the endotracheal tube causes further mechanical mucosal trauma and airway abrasion, exacerbating laryngeal swelling and stridor."
      ]
    ],
    "rationale": "Laryngeal edema after endotracheal intubation can cause post-extubation stridor and emergency reintubation. In high-risk patients (female sex, prolonged intubation, traumatic intubation, large tube size), a quantitative cuff leak test is performed. A low cuff leak (< 110 mL or < 15-24% of tidal volume) identifies patients at high risk for stridor. Management requires delaying extubation and administering a multi-dose course of intravenous corticosteroids (e.g., dexamethasone 5 mg IV every 6 hours for 12-24 hours) prior to planned extubation to allow time for mucosal edema reduction.",
    "metadata": {
      "shortSolution": "High-risk female patient with low cuff leak volume (75 mL; < 110 mL) has laryngeal edema; extubation should be delayed to administer IV dexamethasone for 12-24 hours prior to repeat evaluation.",
      "competingChoice": "Proceed with immediate extubation followed by a single dose of oral prednisone 20 mg",
      "exclusionFinding": "A single steroid dose at extubation does not have time to reduce mucosal swelling; multi-dose IV corticosteroids administered 12-24 hours prior to extubation are required.",
      "pedagogicalValue": "Understanding the significance of a failed cuff leak test (< 110 mL) and the requirement for multi-dose intravenous corticosteroid therapy initiated 12-24 hours prior to extubation.",
      "citations": [
        "Kuriyama A, Jackson JL, Kamei J. Performance of the cuff leak test in predicting postextubation airway complications: a systematic review and meta-analysis. Crit Care. 2020;24(1):640. PMID: 33168051.",
        "Schmidt GA, Girard TD, Kress JP, et al. Official Executive Summary of an American Thoracic Society/American College of Chest Physicians Clinical Practice Guideline: Liberation from Mechanical Ventilation in Critically Ill Adults. Am J Respir Crit Care Med. 2017;195(1):115-119. PMID: 27762608."
      ]
    },
    "critique": {
      "shortestValidSolution": "Failed cuff leak test (75 mL < 110 mL) -> delay extubation and give IV dexamethasone for 12-24 hours.",
      "strongestCompetitor": "Proceed with immediate extubation followed by a single dose of oral prednisone 20 mg",
      "exclusionFinding": "Single dose at extubation is ineffective; genomic steroid action requires 12-24 hours of pre-treatment to reduce laryngeal edema.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0450",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Spontaneous Bacterial Peritonitis (SBP) and Prevention of Hepatorenal Syndrome",
    "subtopic": "Diagnostic Paracentesis Criteria, Ceftriaxone, Intravenous Albumin Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with decompensated alcoholic cirrhosis and large-volume ascites presents to the emergency department with abdominal pain, low-grade fever, and progressive confusion over the past 24 hours. Vital signs demonstrate blood pressure of 96/60 mm Hg, heart rate of 104/min, respiratory rate of 20/min, and temperature of 38.2 C (100.8 F). Physical examination reveals scleral icterus, palmar erythema, asterixis, and a distended, tense abdomen with shifting dullness and diffuse mild abdominal tenderness without peritoneal rigidity. Laboratory evaluation reveals:\n- Serum sodium: 129 mEq/L\n- Serum creatinine: 1.8 mg/dL (baseline 0.9 mg/dL 1 month ago)\n- Total bilirubin: 4.8 mg/dL\n- International normalized ratio (INR): 1.9\n\nDiagnostic paracentesis is promptly performed, yielding cloudy peritoneal fluid. Ascitic fluid analysis reveals:\n- Total nucleated cell count: 820/mm3\n- Polymorphonuclear neutrophils (PMN): 72% (absolute PMN count: 590/mm3)\n- Total protein: 0.8 g/dL\n- Albumin: 0.3 g/dL\n\nIntravenous empiric ceftriaxone 2 g daily is initiated. Which of the following represents the most appropriate additional pharmacotherapy to improve survival and prevent renal impairment in this patient?",
    "choices": [
      [
        "Administer intravenous 25% human albumin at 1.5 g/kg within 6 hours of diagnosis, followed by 1.0 g/kg on hospital day 3",
        "Spontaneous Bacterial Peritonitis (SBP) is diagnosed by an ascitic fluid absolute polymorphonuclear neutrophil (PMN) count >= 250/mm3, even in the absence of positive cultures. SBP triggers intense systemic arterial vasodilation mediated by nitric oxide and cytokine release, causing profound effective arterial underfilling, severe renal vasoconstriction, and acute hepatorenal syndrome (HRS-AKI), which occurs in over 30% of SBP cases and is the primary driver of mortality. LANDMARK TRIAL FINDINGS (SORT TRIAL): In patients with SBP, the administration of intravenous human albumin (1.5 g/kg within 6 hours of diagnosis, followed by 1.0 g/kg on day 3) in combination with antibiotics reduces the incidence of hepatorenal syndrome from 33% to 10% and significantly reduces hospital mortality from 29% to 10%. BENEFIT IS GREATEST in high-risk patients with: (1) Serum creatinine >= 1.0 mg/dL, (2) Blood urea nitrogen >= 30 mg/dL, or (3) Total bilirubin >= 4.0 mg/dL. This patient has both acute kidney injury (creatinine 1.8 mg/dL) and hyperbilirubinemia (bilirubin 4.8 mg/dL), making albumin administration life-saving."
      ],
      [
        "Administer continuous intravenous midodrine and subcutaneous octreotide immediately",
        "Midodrine and octreotide (or terlipressin/norepinephrine) combined with albumin are indicated for the treatment of established hepatorenal syndrome (HRS-AKI), not as initial prophylaxis during acute SBP treatment."
      ],
      [
        "Infuse 3 liters of 0.9% normal saline over 12 hours to expand effective circulating intravascular volume",
        "Large volumes of normal saline worsen ascites, peripheral edema, and portal hypertension, and risk hyperchloremic metabolic acidosis; oncotic expansion with 25% albumin is specifically required."
      ],
      [
        "Administer intravenous furosemide 80 mg and spironolactone 200 mg to treat tense ascites",
        "Diuretics are strictly contraindicated during acute SBP and acute kidney injury because they further deplete effective circulating volume and accelerate progressive renal failure."
      ],
      [
        "Administer oral lactulose and rifaximin while withholding all intravenous volume expanders",
        "Lactulose and rifaximin treat hepatic encephalopathy but do not prevent the acute effective arterial underfilling and hepatorenal syndrome precipitated by SBP."
      ]
    ],
    "rationale": "Spontaneous bacterial peritonitis (SBP) is diagnosed by ascitic fluid absolute PMN count >= 250/mm3. SBP provokes massive splanchnic and systemic arterial vasodilation, leading to renal hypoperfusion and hepatorenal syndrome (HRS-AKI). Landmark clinical trials establish that intravenous albumin (1.5 g/kg at diagnosis, followed by 1.0 g/kg on day 3) combined with third-generation cephalosporins (ceftriaxone) reduces renal impairment from 33% to 10% and mortality from 29% to 10%, especially in patients with creatinine >= 1.0 mg/dL, BUN >= 30 mg/dL, or bilirubin >= 4.0 mg/dL.",
    "metadata": {
      "shortSolution": "Cirrhotic with SBP (PMN 590/mm3), creatinine 1.8 mg/dL, and bilirubin 4.8 mg/dL requires IV human albumin (1.5 g/kg on day 1, 1.0 g/kg on day 3) plus antibiotics to prevent hepatorenal syndrome and reduce mortality.",
      "competingChoice": "Infuse 3 liters of 0.9% normal saline over 12 hours to expand effective circulating intravascular volume",
      "exclusionFinding": "Normal saline causes severe volume expansion of third-space ascites without expanding oncotic arterial volume; 25% human albumin is specifically proven to prevent HRS.",
      "pedagogicalValue": "Recognizing the mandatory indication for intravenous albumin (1.5 g/kg day 1, 1.0 g/kg day 3) in SBP to prevent hepatorenal syndrome in high-risk cirrhotic patients.",
      "citations": [
        "Sort P, Navasa M, Arroyo V, et al. Effect of intravenous albumin on renal impairment and mortality in patients with cirrhosis and spontaneous bacterial peritonitis. N Engl J Med. 1999;341(6):403-409. PMID: 10432325.",
        "Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, Evaluation, and Management of Ascites and Hepatocellular Carcinoma: 2021 Practice Guidance by the American Association for the Study of Liver Diseases. Hepatology. 2021;74(2):1014-1048. PMID: 33942342."
      ]
    },
    "critique": {
      "shortestValidSolution": "SBP (PMN 590) + Cr 1.8 + Bilirubin 4.8 -> give IV albumin (1.5 g/kg day 1, 1.0 g/kg day 3) to prevent hepatorenal syndrome.",
      "strongestCompetitor": "Infuse 3 liters of 0.9% normal saline over 12 hours to expand effective circulating intravascular volume",
      "exclusionFinding": "Crystalloid worsens ascites and fails to provide oncotic pressure; IV albumin is specifically proven to reduce mortality and renal failure.",
      "verdict": "PASS"
    }
  }
]
