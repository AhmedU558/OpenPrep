# Step 2 CK Batch 13 Part 2: Items 0313 - 0325
import json

items_b13_p2 = [
  {
    "code": "op-c-s2-0313",
    "exam": "Step 2 CK",
    "subject": "Critical Care Medicine",
    "system": "General Principles",
    "topic": "Septic Shock Vasopressor Selection",
    "subtopic": "Norepinephrine First-Line vs Dopamine Tachyarrhythmias",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old woman is admitted to the intensive care unit with severe urosepsis caused by multidrug-resistant Escherichia coli. Despite the administration of 30 mL/kg of intravenous balanced crystalloids over 2 hours and broad-spectrum antibiotics, she remains hypotensive. Current vital signs are: blood pressure 82/46 mm Hg (mean arterial pressure 58 mm Hg), heart rate 116/min and regular, respiratory rate 22/min, and temperature 38.6°C (101.5°F). Her extremities are warm with bounding peripheral pulses and brisk capillary refill. Serum lactate is 4.2 mmol/L. The central venous pressure is 10 mm Hg. Which of the following is the most appropriate next step in the hemodynamic management of this patient?",
    "choices": [
      ["Initiate intravenous norepinephrine infusion titrated to a mean arterial pressure >= 65 mm Hg", "The patient has septic shock refractory to initial fluid resuscitation (persistent hypotension with MAP < 65 mm Hg and hyperlactatemia despite 30 mL/kg fluid loading). According to the Surviving Sepsis Campaign guidelines, norepinephrine is the undisputed first-line vasopressor of choice. Norepinephrine possesses potent alpha-1 adrenergic agonism (causing systemic vasoconstriction to elevate vascular tone and MAP) with modest beta-1 adrenergic activity (supporting heart rate and stroke volume). Compared to dopamine, norepinephrine demonstrates superior efficacy in reversing shock, significantly lower rates of tachyarrhythmias, and reduced all-cause mortality."],
      ["Initiate intravenous dopamine infusion titrated to renal dose to improve glomerular filtration", "Dopamine was historically used in shock, but large randomized trials (SOAP II) demonstrated that dopamine causes significantly more arrhythmias (atrial fibrillation, ventricular tachycardia) and higher mortality compared to norepinephrine. 'Renal-dose' dopamine has been thoroughly debunked and is ineffective."],
      ["Administer an additional 3 liters of normal saline boluses to achieve a central venous pressure > 15 mm Hg", "Excessive fluid administration after initial 30 mL/kg loading causes fluid overload, pulmonary edema, prolonged mechanical ventilation, and increased mortality without improving perfusion."],
      ["Initiate intravenous epinephrine monotherapy as the primary inotrope and vasopressor", "Epinephrine is a secondary, second-line vasopressor reserved for shock refractory to norepinephrine; as a first-line agent, it causes excessive tachycardia, peripheral vasoconstriction, and transient hyperlactatemia via aerobic beta-2 stimulation."],
      ["Initiate intravenous phenylephrine infusion to achieve pure vascular afterload increase", "Phenylephrine is a pure alpha-1 agonist with no beta-1 inotropic activity. It causes reflex bradycardia and can decrease stroke volume and cardiac output; it is reserved for patients with severe tachycardia or arrhythmias where norepinephrine is contraindicated."]
    ],
    "shortestValidSolution": "Septic shock with persistent hypotension after 30 mL/kg crystalloids -> first-line vasopressor is norepinephrine (target MAP >= 65 mm Hg).",
    "necessaryInference": "Select norepinephrine over dopamine, phenylephrine, or epinephrine as the evidence-backed first-line vasopressor for fluid-refractory septic shock based on lower arrhythmia rates and mortality.",
    "strongestDistractor": "Initiate intravenous dopamine infusion titrated to renal dose to improve glomerular filtration",
    "distractorExclusion": "Dopamine increases arrhythmic events and mortality compared to norepinephrine, and renal-dose dopamine has no proven clinical benefit.",
    "citation": "Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143. PMID: 34605781."
  },
  {
    "code": "op-c-s2-0314",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Cardiovascular",
    "topic": "Hypertensive Emergency with Acute Pulmonary Edema",
    "subtopic": "Intravenous Vasodilators vs Harm of Pure Beta-Blockade",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man presents to the emergency department with acute severe shortness of breath that awoke him from sleep 1 hour ago. He has a history of long-standing hypertension but stopped taking his medications 3 weeks ago due to financial difficulties. On arrival, he is in marked respiratory distress, sitting bolt upright, and coughing up pink, frothy sputum. Vital signs are: blood pressure 224/128 mm Hg, heart rate 118/min, respiratory rate 32/min, and oxygen saturation 84% on ambient air. Physical examination reveals diffuse bilateral crackles extending to the apices, an S3 gallop, and distended neck veins. Arterial blood gas demonstrates acute hypoxemic respiratory failure. Portable chest radiograph confirms severe pulmonary edema with cephalization of pulmonary vasculature and bat-wing alveolar opacities. Which of the following is the most appropriate immediate medical management?",
    "choices": [
      ["Initiate noninvasive positive-pressure ventilation, sublingual or intravenous nitroglycerin, and intravenous furosemide", "The patient is experiencing a hypertensive emergency manifested by acute cardiogenic pulmonary edema (flash pulmonary edema). The immediate treatment goal is rapid reduction of left ventricular afterload and preload to alleviate pulmonary capillary wedge pressure. Noninvasive positive-pressure ventilation (CPAP or BiPAP) immediately improves oxygenation, recruits fluid-filled alveoli, and reduces both preload and afterload. Intravenous nitroglycerin provides potent venodilation (reducing preload) and at higher doses arteriolar dilation (reducing afterload), while intravenous loop diuretics (furosemide) provide early venodilation and subsequent diuresis. This triad rapidly relieves pulmonary congestion and stabilizes hemodynamics."],
      ["Administer intravenous labetalol 20 mg bolus every 10 minutes to rapidly lower blood pressure", "Beta-blockers (such as labetalol or metoprolol) are strictly contraindicated in acute decompensated heart failure with pulmonary edema; suppressing myocardial contractility worsens forward cardiac output and precipitates cardiogenic shock."],
      ["Administer intravenous hydralazine 20 mg bolus to achieve rapid arteriolar vasodilatation", "Hydralazine has an unpredictable onset and duration of action and induces significant reflex tachycardia, increasing myocardial oxygen demand; it is not recommended for acute pulmonary edema."],
      ["Initiate intravenous nitroprusside infusion combined with oral carvedilol therapy", "While nitroprusside is a potent vasodilator, adding oral carvedilol (a beta-blocker) acutely suppresses left ventricular function and exacerbates acute pulmonary edema."],
      ["Perform emergency transesophageal echocardiography prior to initiating pharmacotherapy", "Diagnostic echocardiography is helpful once stabilized, but delaying afterload reduction and respiratory support in a drowning, hypoxemic patient with acute pulmonary edema is life-threatening."]
    ],
    "shortestValidSolution": "Hypertensive emergency (BP 224/128) + flash pulmonary edema -> NIPPV + IV nitroglycerin + IV furosemide (avoid beta-blockers).",
    "necessaryInference": "Differentiate management of hypertensive pulmonary edema (venodilators + afterload reducers + NIPPV) from other hypertensive emergencies (e.g., dissection where beta-blockers are mandatory), recognizing that beta-blockers acutely worsen pulmonary edema.",
    "strongestDistractor": "Administer intravenous labetalol 20 mg bolus every 10 minutes to rapidly lower blood pressure",
    "distractorExclusion": "Labetalol and other beta-blockers acutely reduce myocardial inotropy, worsening left ventricular decompensation and cardiogenic pulmonary edema.",
    "citation": "Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248. PMID: 29146535."
  },
  {
    "code": "op-c-s2-0315",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Respiratory",
    "topic": "Massive Pulmonary Embolism",
    "subtopic": "Systemic Thrombolysis for Hemodynamically Unstable PE",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old woman who underwent an elective total knee arthroplasty 8 days ago presents to the emergency department with acute-onset severe dyspnea, pleuritic chest pain, and lightheadedness. While being escorted to the triage room, she experiences a witnessed syncopal episode. On arrival in the resuscitation bay, she is pale, diaphoretic, and confused. Vital signs are: blood pressure 76/44 mm Hg, heart rate 132/min, respiratory rate 30/min, and oxygen saturation 86% on a high-flow nonrebreather mask. Physical examination reveals cold, clammy extremities, prominent jugular venous distention, and an accentuated pulmonic component of the second heart sound (P2). Bedside echocardiography demonstrates acute right ventricular dilation with hypokinesia of the right ventricular free wall and sparing of the apex (McConnell sign), with paradoxical septal flattening into the left ventricle during diastole. She has no history of stroke, head trauma, or active bleeding. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Administer systemic intravenous thrombolysis with recombinant tissue plasminogen activator (alteplase)", "The patient has a massive (high-risk) pulmonary embolism defined by acute PE complicated by sustained hypotension (systolic BP < 90 mm Hg for > 15 minutes), cardiogenic shock, and echocardiographic signs of acute right ventricular strain. In hemodynamically unstable massive PE without absolute contraindications to anticoagulation/thrombolysis, immediate systemic intravenous thrombolytic therapy (e.g., alteplase 100 mg over 2 hours) is indicated to rapidly dissolve the obstructing thromboembolus, reduce right ventricular afterload, restore pulmonary perfusion, and prevent fatal circulatory arrest."],
      ["Initiate therapeutic subcutaneous low-molecular-weight heparin and admit to telemetry", "LMWH or unfractionated heparin alone is standard therapy for hemodynamically STABLE (low-risk or intermediate-risk) PE, but does not provide immediate clot dissolution and has unacceptably high mortality when used as monotherapy in unstable massive PE."],
      ["Perform urgent computed tomography pulmonary angiography to definitively quantify clot burden", "Transporting a severely hypotensive, unstable patient in shock to the radiology scanner is dangerous and contraindicated when bedside echocardiography and clinical presentation confirm massive PE."],
      ["Administer a rapid 2-liter intravenous bolus of normal saline to correct hypotension", "Aggressive fluid boluses in acute right ventricular failure overstretch the RV free wall, worsen ischemia, and exacerbate leftward septal shift, further compromising left ventricular filling and worsening shock."],
      ["Administer intravenous inferior vena cava filter placement as primary revascularization", "IVC filters prevent future lower extremity emboli from reaching the lungs, but do not dissolve the existing obstructing central thrombus causing cardiogenic shock."]
    ],
    "shortestValidSolution": "Post-op dyspnea + syncope + persistent hypotension (BP 76/44) + RV strain/McConnell sign -> massive PE -> immediate systemic thrombolysis (alteplase).",
    "necessaryInference": "Classify pulmonary embolism as massive based on hemodynamic shock (SBP < 90 mm Hg), mandating systemic thrombolysis over standard anticoagulation or delayed CT scanning.",
    "strongestDistractor": "Initiate therapeutic subcutaneous low-molecular-weight heparin and admit to telemetry",
    "distractorExclusion": "Heparin monotherapy prevents new clot formation but does not rapidly lyse existing thrombi, leading to high mortality in hemodynamically unstable massive PE.",
    "citation": "Konstantinides SV, et al. 2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism. Eur Heart J. 2020;41(4):543-603. PMID: 31504429."
  },
  {
    "code": "op-c-s2-0316",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Neurosurgery",
    "system": "Nervous System",
    "topic": "Traumatic Brain Injury & Intracranial Pressure",
    "subtopic": "Osmotic Therapy (Hypertonic Saline/Mannitol) vs Steroid Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old male motorcyclist is brought to the emergency department following a high-speed collision. He was not wearing a helmet. On initial assessment, he does not open his eyes to voice or pain, produces incomprehensible sounds, and demonstrates decerebrate (extensor) posturing in response to noxious stimulation (Glasgow Coma Scale score: 4). He is immediately intubated for airway protection. Vital signs are: blood pressure 184/92 mm Hg, heart rate 50/min, and respiratory rate 12/min on mechanical ventilation. His right pupil is 6 mm and non-reactive to light, while the left pupil is 3 mm and briskly reactive. A non-contrast head CT reveals a large right-sided acute epidural hematoma with a 12-mm midline shift and compression of the ipsilateral lateral ventricle. While the neurosurgeon is in transit to the operating room for emergency craniotomy, which of the following is the most appropriate immediate medical intervention to reduce intracranial pressure?",
    "choices": [
      ["Intravenous administration of hypertonic (3%) saline or mannitol", "The patient exhibits severe traumatic brain injury with uncal transtentorial herniation (ipsilateral fixed dilated pupil from CN III compression, contralateral extensor posturing) and the Cushing triad (hypertension, bradycardia, irregular respirations) reflecting critically elevated intracranial pressure (ICP). While preparing for emergent operative craniotomy, immediate osmotic therapy with intravenous hypertonic saline (3% or 23.4%) or mannitol is the standard of care to draw water from the brain parenchyma into the intravascular space, rapidly lowering ICP and improving cerebral perfusion pressure."],
      ["Intravenous administration of high-dose dexamethasone 20 mg bolus", "Corticosteroids are strictly contraindicated in traumatic brain injury. The landmark CRASH randomized controlled trial demonstrated that high-dose corticosteroids in acute TBI increase mortality and worsen neurological outcomes."],
      ["Initiate aggressive prolonged hyperventilation targeting a PaCO2 of 20 to 25 mm Hg", "Severe hyperventilation induces intense cerebral vasoconstriction, causing profound cerebral ischemia and secondary brain infarction. If used at all, mild brief hyperventilation (PaCO2 30–35 mm Hg) is reserved strictly for acute herniation crisis for minutes, not prolonged severe hypocapnia."],
      ["Administer intravenous labetalol to aggressively normalize blood pressure to 120/80 mm Hg", "Hypertension in Cushing triad is a vital physiological compensatory reflex to maintain cerebral perfusion pressure (CPP = MAP - ICP). Lowering blood pressure in acute severe ICP elevation precipitates fatal cerebral hypoperfusion."],
      ["Place the patient in the Trendelenburg position to enhance cerebral venous filling pressure", "Trendelenburg position elevates cerebral venous pressure and increases ICP; patients with elevated ICP must be positioned with the head of the bed elevated 30 degrees to optimize jugular venous drainage."]
    ],
    "shortestValidSolution": "Severe TBI + uncal herniation (blown pupil, extensor posturing) + Cushing triad -> osmotic therapy (hypertonic saline or mannitol) prior to emergent craniotomy.",
    "necessaryInference": "Select osmotic agents (hypertonic saline or mannitol) for acute herniation while recognizing that corticosteroids are proven to increase mortality in TBI (CRASH trial).",
    "strongestDistractor": "Intravenous administration of high-dose dexamethasone 20 mg bolus",
    "distractorExclusion": "Corticosteroids reduce vasogenic edema in brain tumors, but are contraindicated in acute traumatic brain injury because they increase mortality.",
    "citation": "Carney N, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2017;80(1):6-15. PMID: 27654000."
  },
  {
    "code": "op-c-s2-0317",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Toxicology",
    "system": "General Principles",
    "topic": "Cyanide Poisoning in Smoke Inhalation",
    "subtopic": "Hydroxocobalamin Antidote vs Nitrite Dyshemoglobinemia Risk",
    "provisionalDifficulty": 4,
    "stem": "A 40-year-old firefighter is brought to the emergency department after becoming trapped in a burning industrial warehouse containing synthetic plastics and furniture. On extraction, he was found in respiratory arrest and received bag-valve-mask ventilation. In the emergency department, he is stuporous. Vital signs are: blood pressure 82/46 mm Hg, heart rate 130/min, and respiratory rate 28/min on a mechanical ventilator with 100% FiO2. Physical examination reveals extensive soot around the nares and mouth, but no external cutaneous burns. Arterial blood gas demonstrates severe metabolic acidosis: pH 7.12, PaCO2 28 mm Hg, PaO2 120 mm Hg, and serum bicarbonate 9 mEq/L. Serum lactate is 14.5 mmol/L. Co-oximetry reveals a carboxyhemoglobin level of 18%. Which of the following is the most appropriate immediate pharmacologic antidote for this patient?",
    "choices": [
      ["Intravenous hydroxocobalamin infusion", "The patient has acute cyanide toxicity secondary to smoke inhalation from synthetic materials (plastics, polyurethane, wool). Cyanide inhibits cytochrome c oxidase (complex IV) of the mitochondrial electron transport chain, arresting aerobic ATP production and causing severe lactic acidosis (lactate > 8–10 mmol/L in smoke inhalation is highly sensitive and specific for cyanide poisoning). Hydroxocobalamin is the preferred first-line antidote; it directly chelates cyanide to form non-toxic cyanocobalamin (vitamin B12), which is safely excreted in the urine. Unlike sodium nitrite, hydroxocobalamin does not induce methemoglobinemia, making it completely safe in victims with concurrent carbon monoxide poisoning (COHb 18%) who cannot tolerate reduced oxygen-carrying capacity."],
      ["Intravenous sodium nitrite followed by sodium thiosulfate infusion", "Sodium nitrite induces methemoglobinemia (Fe2+ to Fe3+), which binds cyanide to form cyanmethemoglobin. However, in smoke inhalation with concurrent carbon monoxide poisoning, creating methemoglobinemia further drastically compromises blood oxygen-carrying capacity, precipitating lethal tissue hypoxia; nitrites are contraindicated in smoke inhalation."],
      ["Intravenous deferoxamine infusion to chelate toxic heavy metal combustion products", "Deferoxamine chelates iron in acute iron poisoning; it has no affinity for cyanide and does not reverse mitochondrial cytochrome c oxidase inhibition."],
      ["Intravenous calcium disodium EDTA infusion for acute inorganic chemical chelation", "Calcium disodium EDTA chelates lead and other heavy metals, having no therapeutic efficacy in cyanide toxicity."],
      ["Intravenous pralidoxime bolus to reactivate phosphorylated acetylcholinesterase enzymes", "Pralidoxime (2-PAM) reactivates acetylcholinesterase in organophosphate nerve agent or pesticide poisoning, not cyanide poisoning."]
    ],
    "shortestValidSolution": "Smoke inhalation (plastics) + profound lactic acidosis (lactate 14.5) + concurrent COHb -> cyanide poisoning -> IV hydroxocobalamin (avoids methemoglobinemia of nitrites).",
    "necessaryInference": "Recognize cyanide toxicity by smoke inhalation + massive lactic acidosis, and select hydroxocobalamin over sodium nitrite because concurrent carbon monoxide renders nitrite-induced methemoglobinemia potentially fatal.",
    "strongestDistractor": "Intravenous sodium nitrite followed by sodium thiosulfate infusion",
    "distractorExclusion": "Sodium nitrite induces methemoglobinemia; combining methemoglobinemia with existing carboxyhemoglobin causes catastrophic loss of oxygen carrying capacity and death.",
    "citation": "Hall AH, et al. Hydroxocobalamin for the Treatment of Cyanide Poisoning: A Systematic Review. Clin Toxicol (Phila). 2010;48(1):1-14. PMID: 20041749."
  },
  {
    "code": "op-c-s2-0318",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "General Principles",
    "topic": "Exertional Heat Stroke",
    "subtopic": "Ice-Water Immersion Cooling vs Antipyretics Ineffectiveness",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old military recruit collapses during basic training after completing a 10-mile march carrying a heavy pack on a humid summer day (ambient temperature 36°C [96.8°F], relative humidity 75%). On arrival at the medical tent, he is unresponsive to verbal stimuli, agitated, and combative to physical touch. Physical examination reveals flushed, hot, profusely diaphoretic skin and profound confusion. Vital signs are: core rectal temperature 41.2°C (106.2°F), blood pressure 92/54 mm Hg, heart rate 144/min, and respiratory rate 26/min. Point-of-care fingerstick blood glucose is 92 mg/dL. The attending physician prepares to initiate emergent whole-body cooling. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform immediate whole-body cold- or ice-water immersion", "The patient has exertional heat stroke, characterized by core hyperthermia (> 40°C [104°F]) accompanied by central nervous system dysfunction (encephalopathy, confusion, coma) occurring during strenuous physical activity in hot/humid conditions. (Note: sweat is frequently present in exertional heat stroke, contrary to classic non-exertional heat stroke). Exertional heat stroke carries high mortality from systemic inflammatory response, rhabdomyolysis, and multi-organ failure. The gold standard and single most effective intervention is rapid whole-body ice-water immersion (conductive cooling), which provides the fastest cooling rates (~0.15–0.35°C/min) and dramatically reduces morbidity and mortality when initiated within 30 minutes."],
      ["Administer intravenous acetaminophen 1,000 mg to reset the hypothalamic thermal setpoint", "Antipyretics (acetaminophen, NSAIDs) act on prostaglandin synthesis to lower an elevated hypothalamic set-point in pyrogen-mediated fever; they are completely ineffective in heat stroke (where the hypothalamic setpoint is normal and thermoregulation has failed) and can worsen hepatic and renal injury."],
      ["Administer intravenous dantrolene sodium to inhibit sarcoplasmic calcium release", "Dantrolene is the specific therapy for malignant hyperthermia (ryanodine receptor defect induced by volatile anesthetics or succinylcholine); randomized trials have demonstrated no benefit in environmental or exertional heat stroke."],
      ["Apply evaporative mist cooling with fans while awaiting transfer to a tertiary hospital", "Evaporative cooling with mist and fans is the primary method for non-exertional (classic) heat stroke in elderly patients, but ice-water immersion has vastly superior cooling velocity and is mandatory for exertional heat stroke in young athletes/recruits."],
      ["Administer high-dose intravenous dexamethasone to reduce systemic cerebral edema", "Corticosteroids have no proven efficacy in lowering core temperature or treating thermal injury in heat stroke and increase the risk of secondary infections and gastrointestinal ulceration."]
    ],
    "shortestValidSolution": "Recruit marching in heat + core temp 41.2°C + delirium -> exertional heat stroke -> immediate whole-body ice-water immersion (antipyretics are ineffective).",
    "necessaryInference": "Recognize that heat stroke involves thermoregulatory failure rather than a reset hypothalamic set-point (rendering antipyretics useless), and that ice-water immersion is the first-line therapy for exertional heat stroke.",
    "strongestDistractor": "Administer intravenous acetaminophen 1,000 mg to reset the hypothalamic thermal setpoint",
    "distractorExclusion": "Acetaminophen acts on fever caused by pyrogens; heat stroke is failure of heat dissipation with a normal setpoint, so antipyretics do not work and cause hepatotoxicity.",
    "citation": "Lipman GS, et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update. Wilderness Environ Med. 2019;30(4S):S33-S46. PMID: 31668897."
  },
  {
    "code": "op-c-s2-0319",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine",
    "system": "Cardiovascular",
    "topic": "Severe Accidental Hypothermia",
    "subtopic": "Active Internal Rewarming and Prevention of Ventricular Fibrillation",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man who is experiencing homelessness is found unresponsive in an abandoned alley during a winter blizzard. On arrival in the emergency department, he is comatose with a Glasgow Coma Scale score of 3. Vital signs measured with a low-reading esophageal thermistor probe are: core body temperature 26.2°C (79.2°F), blood pressure 68/38 mm Hg, heart rate 28/min and irregular, and respiratory rate 4/min. Physical examination reveals cold, rigid extremities and fixed, dilated pupils. The cardiac monitor displays severe sinus bradycardia with prominent J waves (Osborn waves) at the junction of the QRS complex and ST segment. While moving the patient from the stretcher, a technician accidentally bumps the bed forcefully. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      ["Gentle handling and initiation of active internal core rewarming with warmed intravenous fluids and humidified oxygen", "The patient has severe accidental hypothermia (core temperature < 28°C [82.4°F]) with Osborn (J) waves and profound cardiorespiratory depression. Hypothermic myocardium is extremely irritable and prone to fatal ventricular fibrillation (VF) triggered by minimal mechanical disturbance; therefore, meticulous and gentle handling is mandatory. Active internal core rewarming—using warmed IV crystalloids (40–42°C), heated humidified oxygen, and in severe cases thoracic/peritoneal cavity lavage or extracorporeal membrane oxygenation (ECMO)—is required to restore cardiac stability. Bradycardia and hypotension are physiologic responses to decreased metabolic rate; vasopressors and transcutaneous pacing are ineffective and can trigger refractory VF."],
      ["Immediate transcutaneous cardiac pacing to correct life-threatening sinus bradycardia", "Cardiac pacing in severe hypothermia is ineffective on cold myocardium and carries a very high risk of precipitating intractable ventricular fibrillation."],
      ["Intravenous administration of atropine 1 mg bolus to reverse parasympathetic hypertonia", "Hypothermic bradycardia is a physiological adaptation to reduced tissue oxygen consumption, not excessive vagal tone; atropine is ineffective and predisposes to arrhythmias as the patient warms."],
      ["Rapid aggressive external rewarming with hot water bottles applied to the extremities", "Aggressive active external rewarming of extremities induces peripheral vasodilation, causing 'rewarming shock' (pooling of cold, acidotic blood in extremities that returns to the core, causing afterdrop and circulatory arrest)."],
      ["Pronouncement of death due to fixed dilated pupils, profound coma, and hypothermia", "Patients with profound hypothermia can appear clinically dead (fixed pupils, absent pulses, rigid muscles) yet achieve complete neurological recovery after rewarming ('no one is dead until warm and dead')."]
    ],
    "shortestValidSolution": "Core temp 26.2°C + Osborn (J) waves + bradycardia -> severe accidental hypothermia -> gentle handling (avoid VF) + active internal core rewarming.",
    "necessaryInference": "Recognize that hypothermic hearts are irritable (mechanical jarring precipitates VF), bradycardia is physiologic, and active core rewarming must precede peripheral warming or resuscitation decisions.",
    "strongestDistractor": "Immediate transcutaneous cardiac pacing to correct life-threatening sinus bradycardia",
    "distractorExclusion": "Pacing cold myocardium fails to capture and mechanically provokes refractory ventricular fibrillation; core rewarming restores heart rate naturally.",
    "citation": "Brown DJ, et al. Accidental Hypothermia. N Engl J Med. 2012;367(20):1930-1938. PMID: 23150960."
  },
  {
    "code": "op-c-s2-0320",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Ophthalmology",
    "system": "Nervous System",
    "topic": "Acute Angle-Closure Glaucoma",
    "subtopic": "Topical and Systemic Pressure-Lowering Therapy Followed by Iridotomy",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old Asian woman presents to the emergency department with sudden severe right eye pain, a frontal headache, nausea, and vomiting that began 2 hours ago while sitting in a dimly lit movie theater. She describes seeing rainbow-colored halos around streetlights on her drive home. Physical examination of the right eye reveals conjunctival injection with ciliary flush, a cloudy, steamy cornea, and a mid-dilated, fixed pupil that does not react to light. Visual acuity in the right eye is reduced to hand motion. Tonometry reveals an intraocular pressure of 58 mm Hg in the right eye and 16 mm Hg in the left eye. Which of the following is the most appropriate initial medical regimen while ophthalmology is consulted for definitive laser iridotomy?",
    "choices": [
      ["Topical timolol, apraclonidine, and pilocarpine eyedrops combined with systemic acetazolamide", "The patient has acute angle-closure glaucoma (AACG) triggered by pupillary dilation in dim light, causing pupillary block and acute obstruction of trabecular outflow in an anatomically narrow anterior chamber. Intraocular pressure (IOP) is severely elevated (> 50 mm Hg). Immediate medical therapy requires a multi-agent regimen to lower IOP: (1) topical beta-blockers (timolol) to decrease aqueous humor production, (2) topical alpha-2 agonists (apraclonidine) to reduce production and enhance uveoscleral outflow, (3) systemic carbonic anhydrase inhibitors (oral/IV acetazolamide) to suppress aqueous synthesis, and (4) topical muscarinic agonists (pilocarpine 1–2%) to induce miosis and pull the iris away from the trabecular meshwork (typically effective once IOP is < 40–50 mm Hg). Definitive cure is bilateral laser peripheral iridotomy."],
      ["Topical atropine and cyclopentolate eyedrops to achieve maximal cycloplegia", "Mydriatics and cycloplegics (such as atropine, cyclopentolate, or scopolamine) dilate the pupil and bunch the iris into the iridocorneal angle, completely blocking aqueous outflow and causing permanent vision loss in angle-closure glaucoma."],
      ["Topical high-dose prednisolone acetate eyedrops administered every 15 minutes", "Topical corticosteroids treat anterior uveitis (iritis), which presents with miosis and ciliary flush with normal or low IOP; in glaucoma, steroids do not relieve pupillary block and can raise IOP."],
      ["Oral valacyclovir 1,000 mg three times daily for acute viral anterior keratitis", "Herpetic keratoconjunctivitis presents with dendritic corneal ulcers and foreign body sensation without acute mid-dilated pupil, steamy cornea, or massive IOP elevation to 58 mm Hg."],
      ["Emergency bedside lateral canthotomy and inferior cantholysis of the right orbit", "Lateral canthotomy is the emergency treatment for orbital compartment syndrome (e.g., retrobulbar hematoma following facial trauma causing proptosis and elevated IOP), not acute pupillary block glaucoma."]
    ],
    "shortestValidSolution": "Movie theater darkness + severe eye pain + rainbow halos + steamy cornea + fixed mid-dilated pupil (IOP 58 mm Hg) -> acute angle-closure glaucoma -> timolol, apraclonidine, pilocarpine, and acetazolamide.",
    "necessaryInference": "Recognize angle-closure glaucoma from the clinical triad and trigger (dim light pupillary dilation), and assemble the multi-target medical therapy to lower IOP before definitive laser peripheral iridotomy.",
    "strongestDistractor": "Topical atropine and cyclopentolate eyedrops to achieve maximal cycloplegia",
    "distractorExclusion": "Atropine causes pupillary dilation (mydriasis), which further closes the iridocorneal angle and converts an acute crisis into permanent blindness.",
    "citation": "Weinreb RN, et al. Primary Open-Angle Glaucoma. Nat Rev Dis Primers. 2016;2:16067. PMID: 27654490."
  },
  {
    "code": "op-c-s2-0321",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Gastroenterology",
    "system": "Gastrointestinal",
    "topic": "Caustic Alkali Ingestion",
    "subtopic": "Contraindication of Neutralization/Emesis and Timing of Endoscopy",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old boy is brought to the emergency department by his parents 45 minutes after accidentally drinking an unknown quantity of a liquid drain cleaner containing concentrated sodium hydroxide (lye). The child is crying, drooling copiously, and refusing to swallow. Physical examination reveals erythematous, ulcerated oral mucosa and edema of the lips and tongue. Vital signs are: blood pressure 98/62 mm Hg, heart rate 136/min, respiratory rate 24/min, and oxygen saturation 98% on room air. The lungs are clear without stridor. The parents state that on the way to the hospital, a neighbor advised them to make the child drink vinegar to neutralize the alkaline cleaner. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      ["Maintain airway, keep NPO with IV hydration, and perform esophagogastroduodenoscopy within 12 to 24 hours", "The child ingested a caustic alkali (sodium hydroxide/drain cleaner), which causes liquefactive necrosis of the esophagus and stomach, penetrating deeply into tissues. Management requires securing the airway, keeping nil per os (NPO), fluid resuscitation, and performing flexible esophagogastroduodenoscopy (EGD) within the first 12 to 24 hours to assess the depth and extent of mucosal injury (Zargar classification). Neutralizing agents (such as vinegar or citrus juice) are strictly contraindicated because the acid-base exothermic chemical reaction generates significant heat, producing severe secondary thermal burns. Emesis and gastric lavage are contraindicated because they re-expose the esophagus to the caustic substance and increase perforation risk."],
      ["Administer oral dilute acetic acid (vinegar) to chemically neutralize the alkaline base", "Chemical neutralization with weak acid triggers a vigorous exothermic reaction, releasing substantial thermal energy that produces severe secondary coagulative and burn necrosis throughout the esophagus."],
      ["Administer syrup of ipecac to induce immediate emesis of the ingested drain cleaner", "Inducing emesis re-exposes the esophageal and pharyngeal mucosa to the caustic chemical and increases the risk of aspiration into the respiratory tract and esophageal rupture."],
      ["Insert a nasogastric tube to perform activated charcoal administration and gastric lavage", "Blind nasogastric tube insertion or gastric lavage carries a high risk of mechanically perforating the friable, necrotic esophageal wall, and charcoal does not bind caustic alkalis and obscures endoscopic visualization."],
      ["Delay endoscopy until 7 days post-ingestion to allow initial mucosal healing to occur", "After 24–48 hours, the esophageal wall undergoes intense tissue sloughing and collagen degradation with maximum wall thinning, creating a high-risk 'vulnerable window' (days 3–14) where endoscopy frequently causes iatrogenic perforation."]
    ],
    "shortestValidSolution": "Drain cleaner (alkali) ingestion + drooling + oral burns -> NPO, IV fluids, and EGD within 12-24 hours (neutralization and emesis are strictly contraindicated).",
    "necessaryInference": "Recognize that caustic ingestion causes liquefactive necrosis; chemical neutralization produces exothermic burns, emesis causes re-exposure injury, and EGD must occur within 12-24 hours before wall sloughing creates perforation risk.",
    "strongestDistractor": "Administer oral dilute acetic acid (vinegar) to chemically neutralize the alkaline base",
    "distractorExclusion": "Neutralizing an alkali with an acid produces an exothermic reaction that adds thermal injury to chemical necrosis, causing devastating full-thickness perforation.",
    "citation": "Chibishev A, et al. Acute Caustic Ingestion: Management and Complications. Med Arch. 2014;68(5):345-349. PMID: 25568587."
  },
  {
    "code": "op-c-s2-0322",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Oncology",
    "system": "Nervous System",
    "topic": "Malignant Spinal Cord Compression",
    "subtopic": "Immediate High-Dose Glucocorticoids Prior to Imaging and Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with metastatic prostate cancer presents to the emergency department with severe, progressive mid-thoracic back pain for 2 weeks that has become constant and worsens when lying flat in bed. Over the past 12 hours, he has noticed progressive weakness and heaviness in both legs and experienced an episode of urinary incontinence. On physical examination, there is point tenderness to percussion over the T6 and T7 spinous processes. Motor strength is 3/5 in the hip flexors and knee extensors bilaterally, with 4/5 strength in ankle dorsiflexion. Deep tendon reflexes are 3+ at the patella and Achilles tendons bilaterally, with bilateral sustained ankle clonus and upgoing toes (Babinski sign). Sensation to pinprick is diminished below the level of the xiphoid process (T7 dermatome). Bedside post-void bladder ultrasound reveals 550 mL of retained urine. Which of the following is the most appropriate immediate intervention?",
    "choices": [
      ["Administer high-dose intravenous dexamethasone immediately while arranging emergent whole-spine MRI", "The patient has acute metastatic epidural spinal cord compression (MESCC), an oncologic emergency characterized by localized back pain, progressive motor weakness, upper motor neuron signs (hyperreflexia, Babinski), a sensory level, and autonomic dysfunction (urinary retention/overflow incontinence). The single most crucial determinant of final functional outcome is pretreatment neurological status: once paraplegia develops, recovery is rare. High-dose intravenous glucocorticoids (dexamethasone 10 to 16 mg IV bolus) must be administered immediately upon clinical suspicion before imaging or surgery. Dexamethasone reduces vasogenic tumor edema, preserves microvascular spinal perfusion, and alleviates pain. Emergent whole-spine MRI followed by radiation therapy or surgical decompression is then performed."],
      ["Obtain emergent non-contrast CT scan of the thoracic spine before initiating pharmacotherapy", "CT imaging is inferior to MRI for visualizing soft tissue epidural tumor and thecal sac compression; moreover, holding corticosteroids until imaging is completed causes unnecessary irreversible spinal cord ischemia."],
      ["Administer intravenous zoledronic acid to stabilize osteolytic spinal bone metastases", "Bisphosphonates prevent future skeletal-related events in bone metastases, but have zero effect on acute thecal sac compression and do not relieve spinal cord edema."],
      ["Perform emergency lumbar puncture to analyze CSF cytology for leptomeningeal disease", "Lumbar puncture in the presence of complete epidural cord block is contraindicated because it lowers pressure below the block, potentially precipitating spinal cord herniation and immediate paraplegia."],
      ["Initiate oral bicalutamide and leuprolide therapy to achieve acute androgen deprivation", "GnRH agonists cause a transient initial surge in luteinizing hormone and testosterone ('tumor flare'), which can exacerbate cord compression and accelerate permanent paralysis unless preceded by prolonged antiandrogen blockade."]
    ],
    "shortestValidSolution": "Prostate cancer + back pain + bilateral leg weakness + T7 sensory level + urinary retention -> cord compression -> immediate high-dose IV dexamethasone + emergent MRI.",
    "necessaryInference": "Prioritize immediate IV dexamethasone upon clinical suspicion of spinal cord compression before transport to imaging, knowing that delay risks permanent non-ambulatory status.",
    "strongestDistractor": "Obtain emergent non-contrast CT scan of the thoracic spine before initiating pharmacotherapy",
    "distractorExclusion": "Imaging must never delay the immediate administration of intravenous glucocorticoids in suspected acute epidural spinal cord compression.",
    "citation": "Lawton AJ, et al. Assessment and Management of Patients with Metastatic Spinal Cord Compression: A Summary of NICE Guidance. Lancet Oncol. 2019;20(2):e93-e104. PMID: 30712809."
  },
  {
    "code": "op-c-s2-0323",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Gastroenterology",
    "system": "Gastrointestinal",
    "topic": "Acute Cholangitis (Reynolds Pentad)",
    "subtopic": "Emergent Biliary Decompression via ERCP vs Delayed Surgery",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman presents to the emergency department with severe right upper quadrant abdominal pain, high fever, and shaking chills for 18 hours. Her family notes that she became progressively confused and lethargic this morning. On physical examination, she appears toxic, jaundiced, and obtunded. Vital signs are: blood pressure 82/48 mm Hg, heart rate 124/min, respiratory rate 24/min, and temperature 39.4°C (102.9°F). Abdominal examination reveals scleral icterus and marked tenderness to palpation in the right upper quadrant with voluntary guarding, without rebound tenderness. Laboratory studies demonstrate: - Leukocytes: 19,800/mm3 with 18% bands - Total bilirubin: 6.8 mg/dL - Alkaline phosphatase: 480 U/L - AST: 142 U/L - ALT: 168 U/L - Serum lactate: 3.8 mmol/L. An ultrasound of the right upper quadrant reveals choledocholithiasis with a 12-mm common bile duct dilation and intrahepatic biliary ductal dilatation. Despite aggressive crystalloid resuscitation and intravenous piperacillin-tazobactam, she remains hypotensive. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform emergent endoscopic retrograde cholangiopancreatography (ERCP) for biliary decompression", "The patient has severe, life-threatening acute cholangitis presenting with the Reynolds pentad: Charcot triad (fever, jaundice, right upper quadrant pain) plus hypotension (shock) and altered mental status. Obstruction of the common bile duct by a gallstone (choledocholithiasis) leads to marked elevation of biliary intraductal pressure, causing translocation of bacteria across the hepatic parenchyma into the systemic venous circulation (biliary sepsis). In patients with toxic, suppurative cholangitis who fail to respond rapidly to fluid resuscitation and broad-spectrum IV antibiotics, emergent biliary decompression—most commonly via ERCP with sphincterotomy and biliary drainage/stenting—is mandatory. Without decompression, mortality approaches 100%."],
      ["Schedule elective laparoscopic cholecystectomy for the next open surgical operating suite", "Cholecystectomy removes the gallbladder but does not decompress the obstructed common bile duct in acute suppurative cholangitis and is associated with high mortality in septic shock."],
      ["Perform emergent open surgical choledochotomy with T-tube drainage under general anesthesia", "Surgical decompression of the biliary tree in patients with severe suppurative cholangitis carries significantly higher morbidity and mortality compared to minimally invasive endoscopic decompression via ERCP."],
      ["Administer intravenous ursodeoxycholic acid to dissolve the obstructing choledocholithiasis", "Ursodeoxycholic acid is a chronic oral bile acid used for medical dissolution of small radiolucent gallstones over months; it has zero efficacy in acute obstructive suppurative cholangitis."],
      ["Obtain an urgent magnetic resonance cholangiopancreatography (MRCP) to map the biliary tree", "Diagnostic MRCP delays life-saving therapeutic decompression when ultrasound and laboratory findings already establish the diagnosis of choledocholithiasis and acute cholangitis."]
    ],
    "shortestValidSolution": "Fever + jaundice + RUQ pain + shock + confusion (Reynolds pentad) + dilated CBD -> severe acute cholangitis -> emergent ERCP for biliary decompression.",
    "necessaryInference": "Recognize the Reynolds pentad as an emergency requiring urgent biliary decompression via ERCP rather than diagnostic MRCP or surgical cholecystectomy.",
    "strongestDistractor": "Schedule elective laparoscopic cholecystectomy for the next open surgical operating suite",
    "distractorExclusion": "Cholecystectomy addresses gallbladder stones but fails to relieve the common bile duct obstruction driving life-threatening biliary sepsis.",
    "citation": "Kiriyama S, et al. Tokyo Guidelines 2018: Diagnostic Criteria and Severity Assessment of Acute Cholangitis. J Hepatobiliary Pancreat Sci. 2018;25(1):17-30. PMID: 29205594."
  },
  {
    "code": "op-c-s2-0324",
    "exam": "Step 2 CK",
    "subject": "Vascular Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Limb Ischemia",
    "subtopic": "Immediate Anticoagulation (Heparin) Followed by Emergent Revascularization",
    "provisionalDifficulty": 4,
    "stem": "A 71-year-old man with a history of permanent atrial fibrillation who discontinued his oral apixaban 2 weeks ago presents to the emergency department with sudden-onset, severe pain in his left leg that began 3 hours ago. He states that his left foot feels completely numb and cold. On physical examination, the left lower extremity is pale and marble-cool from the mid-calf down to the toes. Neurological examination of the left foot demonstrates absent sensation to light touch and pinprick over the dorsum and plantar surface, and inability to wiggle his toes or dorsiflex the ankle. Dorsalis pedis and posterior tibial pulses are absent to palpation and non-audible on Doppler examination, while the popliteal and femoral pulses are bounding (2+). Sensation, motor strength, and pulses in the right lower extremity are normal. Which of the following is the most appropriate immediate next step in the management of this patient?",
    "choices": [
      ["Administer an immediate intravenous bolus of unfractionated heparin followed by continuous infusion", "The patient presents with acute limb ischemia (ALI) of the left lower extremity secondary to a cardiogenic thromboembolism lodged in the popliteal or tibial trifurcation. He exhibits the classic '6 Ps': Pain, Pallor, Poikilothermia (coolness), Pulselessness, Paresthesia (numbness), and Paralysis (loss of motor function). The presence of motor deficit (inability to dorsiflex or wiggle toes) indicates Category IIb (immediately threatened limb) per Rutherford classification, requiring emergent revascularization within 4 to 6 hours to prevent irreversible muscle necrosis and amputation. The immediate first step is intravenous unfractionated heparin bolus and infusion, which halts thrombus propagation, prevents microvascular thrombosis in distal runoff vessels, and protects collateral channels while the patient is prepped for emergent surgical thromboembolectomy or catheter-directed thrombolysis."],
      ["Obtain outpatient duplex ultrasonography of the left lower extremity arterial tree", "Outpatient ultrasound creates a disastrous delay for a patient with an immediately threatened ischemic limb (motor loss and sensory anesthesia); irreversible neuromuscular damage occurs within 6 hours."],
      ["Elevate the left lower extremity above the level of the heart to reduce ischemic edema", "Limb elevation decreases arterial perfusion pressure across the occlusion, worsening tissue ischemia; the limb should be kept dependent or flat to facilitate collateral perfusion."],
      ["Administer oral clopidogrel 300 mg monotherapy and observe for 24 hours in the observation unit", "Antiplatelet monotherapy is completely inadequate for acute embolic occlusion of a major artery and observing an immediately threatened limb results in limb gangrene."],
      ["Place a warm thermal heating blanket directly around the left foot to promote vasodilation", "Applying direct heat to an ischemic, anesthetic extremity causes thermal burn injury and increases local metabolic demand without restoring arterial blood flow, accelerating tissue gangrene."]
    ],
    "shortestValidSolution": "AFib off anticoagulation + acute cold, numb, paralyzed foot (6 Ps) + absent Doppler pulses -> acute limb ischemia (Rutherford IIb) -> immediate IV heparin bolus/infusion followed by emergent revascularization.",
    "necessaryInference": "Recognize Rutherford IIb immediately threatened limb (motor loss + sensory deficit) and prioritize immediate systemic heparinization to halt clot propagation before surgical revascularization.",
    "strongestDistractor": "Obtain outpatient duplex ultrasonography of the left lower extremity arterial tree",
    "distractorExclusion": "Delaying therapy for vascular lab ultrasound in an immediately threatened limb (paralysis/paresthesia) causes irreversible ischemic neuromuscular necrosis within 6 hours.",
    "citation": "Gerhard-Herman MD, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779. PMID: 27840333."
  },
  {
    "code": "op-c-s2-0325",
    "exam": "Step 2 CK",
    "subject": "Emergency Medicine & Endocrinology",
    "system": "Endocrine",
    "topic": "Thyroid Storm",
    "subtopic": "Multimodal Sequence: Beta-Blocker, PTU, Iodine (Delayed), and Glucocorticoids",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman with a history of Graves disease who has been non-compliant with methimazole presents to the emergency department with severe agitation, confusion, and palpitations 24 hours after undergoing an uncomplicated tooth extraction. On arrival, she is tremulous, delirious, and profusely diaphoretic. Vital signs are: blood pressure 168/76 mm Hg, heart rate 158/min (irregularly irregular, consistent with atrial fibrillation), respiratory rate 26/min, and core temperature 40.2°C (104.4°F). Physical examination reveals marked exophthalmos, a diffusely enlarged non-tender thyroid goiter with an audible systolic bruit, diffuse bibasilar pulmonary crackles, and a 2+ bilateral pretibial pitting edema. Laboratory testing demonstrates an undetectable TSH (< 0.01 microU/mL) and free T4 of 5.8 ng/dL. The Burch-Wartofsky Point Scale score is 65, confirming thyroid storm. Which of the following represents the correct sequence and pharmacotherapy required for this patient?",
    "choices": [
      ["Administer intravenous propranolol, followed by propylthiouracil, followed 1 hour later by potassium iodide (Lugol solution), and intravenous hydrocortisone", "Thyroid storm is a life-threatening hypermetabolic state requiring immediate multimodal pharmacotherapy administered in a strict, specific sequence: (1) Beta-blockers (propranolol IV) to control adrenergic hyperactivity and block peripheral T4-to-T3 conversion; (2) Thionamides (propylthiouracil [PTU] or methimazole) to block new thyroid hormone synthesis via thyroid peroxidase inhibition (PTU also blocks peripheral T4-to-T3 conversion); (3) Inorganic iodine (Lugol solution or saturated solution of potassium iodide [SSKI]) to inhibit thyroid hormone release via the Wolff-Chaikoff effect; and (4) Glucocorticoids (IV hydrocortisone) to reduce peripheral conversion and treat potential relative adrenal insufficiency. CRITICAL PHARMACOLOGIC TIMING: Iodine must be administered AT LEAST 1 HOUR AFTER thionamide therapy; giving iodine first provides additional substrate for thyroid hormone synthesis, exacerbating the storm (Jod-Basedow phenomenon)."],
      ["Administer high-dose Lugol iodine solution immediately, followed 2 hours later by propylthiouracil and levothyroxine", "Administering inorganic iodine before thionamide blockade provides rich iodide substrate to the hyperactive thyroid gland, synthesizing massive amounts of new thyroid hormone and worsening thyroid storm."],
      ["Administer intravenous radioiodine (I-131) ablation therapy immediately to destroy hyperactive thyroid follicular cells", "Radioactive iodine ablation in acute thyroid storm causes radiation thyroiditis, releasing stored thyroid hormones into the bloodstream and triggering fatal cardiovascular collapse."],
      ["Administer intravenous amiodarone infusion to convert atrial fibrillation to normal sinus rhythm", "Amiodarone contains 37% iodine by weight and is heavily metabolized to release massive iodine loads, worsening thyrotoxicosis and inducing refractory arrhythmias in Graves disease."],
      ["Initiate immediate therapeutic plasma exchange as first-line monotherapy without antithyroid medications", "Plasmapheresis is a third-line rescue therapy reserved strictly for patients refractory to full medical management or with severe thionamide-induced agranulocytosis or hepatotoxicity."]
    ],
    "shortestValidSolution": "Graves disease + fever (40.2°C) + AFib + delirium (Burch-Wartofsky 65) -> thyroid storm -> propranolol + PTU + iodine (Lugol's) delayed >= 1 hr + hydrocortisone.",
    "necessaryInference": "Apply the mandatory sequential rule of thyroid storm: beta-blocker first, thionamide second, inorganic iodine delayed at least 1 hour after thionamide to prevent Jod-Basedow substrate-driven hormone synthesis, plus hydrocortisone.",
    "strongestDistractor": "Administer high-dose Lugol iodine solution immediately, followed 2 hours later by propylthiouracil and levothyroxine",
    "distractorExclusion": "Giving iodine before thionamides fuels new thyroid hormone synthesis (Jod-Basedow effect), triggering fatal exacerbation of thyrotoxic crisis.",
    "citation": "Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid. 2016;26(10):1343-1421. PMID: 27521067."
  }
]

print(f"Loaded {len(items_b13_p2)} items for Step 2 CK Batch 13 part 2.")
