import { CandidateSpec } from './types';

export const step2Batch34: CandidateSpec[] = [
  {
    "code": "op-c-s2-0826",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Respiratory",
    "topic": "Tension Pneumothorax Immediate Needle Decompression Before Radiography",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old man is brought to the emergency department following a high-speed motor vehicle collision. On arrival, he is in severe respiratory distress, agitated, and cyanotic. Blood pressure is 74/42 mm Hg, heart rate is 138/min, and oxygen saturation is 78% on a high-flow nonrebreather mask. Physical examination reveals absent breath sounds over the right hemithorax, marked hyperresonance to percussion on the right, distended neck veins, and tracheal deviation toward the left side. The patient's hypoxia and hypotension worsen over the next 60 seconds. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate needle thoracostomy followed by tube thoracostomy",
        "This patient exhibits classic hemodynamic and physical examination signs of a tension pneumothorax: severe respiratory failure, profound hypotension with shock, unilateral absent breath sounds with hyperresonance, jugular venous distension from obstructed venous return, and contralateral tracheal deviation. Tension pneumothorax is an immediate clinical diagnosis that requires urgent decompression without delaying for diagnostic chest radiography or point-of-care ultrasound. Immediate decompression is performed via needle thoracostomy (ideally in the second intercostal space in the midclavicular line or fifth intercostal space in the anterior axillary line) or emergent finger thoracostomy, immediately followed by definitive tube thoracostomy (chest tube insertion)."
      ],
      [
        "Emergent portable anteroposterior chest radiography at the bedside",
        "Delaying treatment to obtain radiographic confirmation of tension pneumothorax in an unstable, hypotensive patient risks imminent cardiac arrest due to complete obstruction of inferior vena cava inflow."
      ],
      [
        "Endotracheal intubation with positive-pressure mechanical ventilation",
        "Initiating positive-pressure mechanical ventilation before relieving tension pneumothorax increases intrathoracic pressure, exacerbating hemodynamic collapse and precipitating pulseless electrical activity arrest."
      ],
      [
        "Rapid intravenous infusion of two liters of warmed isotonic crystalloid",
        "Fluid resuscitation does not correct the mechanical obstruction of cardiac filling caused by severe intrathoracic tension and mediastinal shift."
      ],
      [
        "Subxiphoid pericardiocentesis under focused echocardiographic guidance",
        "Pericardiocentesis treats cardiac tamponade, which presents with distant heart sounds and clear lungs rather than unilateral hyperresonance and absent breath sounds."
      ]
    ],
    "shortestValidSolution": "Unilateral absent breath sounds + hyperresonance + tracheal deviation + shock = tension pneumothorax -> immediate needle decompression before imaging.",
    "necessaryInference": "Recognize tension pneumothorax as a purely clinical emergency requiring immediate decompression before any imaging.",
    "strongestDistractor": "Emergent portable anteroposterior chest radiography at the bedside",
    "distractorExclusion": "Bedside imaging introduces fatal delays in hemodynamically unstable tension pneumothorax; physical diagnosis is sufficient and mandates decompression.",
    "citation": "Roberts DJ, Leigh-Smith S, Faris PD, et al. Clinical Presentation of Patients With Tension Pneumothorax: A Systematic Review. Ann Surg. 2015;261(6):1068-1078. PMID: 25563887.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma surgery emergency item distinguishing immediate decompression from radiographic delays in tension pneumothorax.",
      "distractorExclusionNotes": "Excluded portable CXR because clinical tension pneumothorax with shock requires instant decompression without radiographic delay.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0827",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Massive Hemothorax Indications for Emergent Exploratory Thoracotomy",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old man is brought to the trauma center after sustaining a penetrating stab wound to the left anterior chest wall at the fourth intercostal space. On presentation, he is pale and diaphoretic. Blood pressure is 82/50 mm Hg, heart rate is 126/min, and respiratory rate is 28/min. Breath sounds are markedly diminished over the left base with dullness to percussion. A 32-French tube thoracostomy is placed in the left fifth intercostal space, with an immediate return of 1,650 mL of dark red blood. Despite rapid transfusion of two units of uncrossed packed red blood cells, his blood pressure remains 86/52 mm Hg, and the chest drain yields an additional 250 mL of blood over the subsequent 30 minutes. Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Transfer to the operating room for emergent exploratory thoracotomy",
        "Indications for emergent surgical thoracotomy in thoracic trauma include an immediate chest tube output exceeding 1,500 mL of blood upon initial insertion, or ongoing continuous output exceeding 200 mL/hr for 2 to 4 consecutive hours, or persistent hemodynamic instability refractory to blood resuscitation. This patient meets multiple criteria: initial evacuation of 1,650 mL, persistent blood drainage of 250 mL in 30 minutes, and refractory hypotension. Immediate exploratory thoracotomy (typically via an anterolateral approach) is required to identify and control surgical sources of bleeding, such as injuries to the internal mammary artery, intercostal vessels, or great pulmonary vasculature."
      ],
      [
        "Placement of a second large-bore chest tube in the left apical region",
        "Placing an additional tube thoracostomy only drains blood but does not achieve hemostasis when major vascular laceration causes massive hemorrhage."
      ],
      [
        "Performance of contrast-enhanced computed tomography of the chest",
        "Transporting a persistently hypotensive trauma patient with active massive thoracic bleeding to CT scan is contraindicated and delays life-saving operative control."
      ],
      [
        "Immediate bedside subxiphoid pericardial window in the trauma bay",
        "Pericardial window is used to diagnose occult cardiac injury with hemopericardium, not to control massive ongoing parenchymal or systemic vascular thoracic bleeding."
      ],
      [
        "Administration of intravenous tranexamic acid and clamping the tube",
        "Clamping a chest tube in massive ongoing hemothorax converts an evacuated hemothorax into a hypertensive clotted hemothorax with tension physiology, risking cardiac arrest."
      ]
    ],
    "shortestValidSolution": "Initial tube output > 1500 mL + ongoing bleeding > 200 mL/hr + shock = massive hemothorax -> emergent operating room thoracotomy.",
    "necessaryInference": "Apply established surgical criteria for emergent thoracotomy in penetrating thoracic trauma.",
    "strongestDistractor": "Performance of contrast-enhanced computed tomography of the chest",
    "distractorExclusion": "CT imaging is unsafe in persistently hypotensive trauma patients requiring immediate operative hemostasis.",
    "citation": "Poillucci G et al. The role of emergency resuscitative thoracotomy in blunt trauma: a systematic review. Minerva Surg. PMID: 40576609.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma item testing surgical indications for emergent thoracotomy in massive hemothorax.",
      "distractorExclusionNotes": "Excluded CT scan because hemodynamic instability with massive tube output mandates immediate operative exploration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0828",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Respiratory",
    "topic": "Flail Chest Underlying Pulmonary Contusion and Mechanical Ventilation",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old unrestrained driver is involved in a severe frontal motor vehicle crash with steering wheel impact. On examination, he has shallow, tachypneic breathing at 34/min. Blood pressure is 118/76 mm Hg, heart rate is 112/min, and oxygen saturation is 84% on ambient air, improving to 89% with high-flow oxygen. Inspection of the chest reveals a segmental area of the left anterior chest wall that paradoxically moves inward during inspiration and outward during expiration. Chest radiography confirms three adjacent ribs fractured in two places each, with underlying patchy opacification of the left pulmonary parenchyma. Arterial blood gas shows pH 7.26, PaCO2 54 mm Hg, and PaO2 56 mm Hg. Which of the following is the primary pathophysiological cause of this patient's acute respiratory failure?",
    "choices": [
      [
        "Alveolar hemorrhage and edema from underlying pulmonary contusion",
        "Flail chest occurs when three or more contiguous ribs are fractured in two or more places, creating an uncoupled, floating segment that moves paradoxically. However, the primary cause of hypoxia and respiratory failure in flail chest is NOT the paradoxical chest wall motion itself or mediastinal shifting; rather, it is the underlying pulmonary contusion with alveolar hemorrhage, capillary disruption, edema, and severe ventilation-perfusion mismatch. Management focuses on adequate analgesia (e.g., thoracic epidural), aggressive pulmonary toilet, and endotracheal intubation with positive-pressure ventilation when respiratory failure supervenes."
      ],
      [
        "Pendelluft gas exchange shifting back and forth between lungs",
        "The historical pendelluft theory (interpulmonary gas shuttling) has been disproven as a significant contributor to hypoxia compared to the underlying alveolar damage of pulmonary contusion."
      ],
      [
        "Direct mechanical laceration of the pericardial sac and myocardium",
        "Myocardial laceration presents with hemopericardium, tamponade, or dysrhythmias rather than isolated progressive hypoxemic and hypercapnic respiratory failure."
      ],
      [
        "Reflex spasm of intercostal musculature impairing diaphragmatic excursion",
        "Intercostal muscle spasm contributes to splinting and shallow breathing but is secondary; it does not account for the extensive patchy alveolar opacification and severe shunt."
      ],
      [
        "Complete avulsion of the left mainstem bronchus with airway collapse",
        "Tracheobronchial rupture causes massive subcutaneous emphysema, continuous large air leaks on chest drainage, and pneumomediastinum, rather than isolated paradoxical wall segment."
      ]
    ],
    "shortestValidSolution": "Flail chest paradoxical motion + hypoxia = underlying pulmonary contusion alveolar edema causing primary respiratory failure.",
    "necessaryInference": "Distinguish the secondary visible biomechanics of flail chest from the primary physiological driver of gas-exchange failure (pulmonary contusion).",
    "strongestDistractor": "Pendelluft gas exchange shifting back and forth between lungs",
    "distractorExclusion": "Pendelluft shuttling has been experimentally disproven; contusion and parenchymal shunt drive hypoxemia.",
    "citation": "Simon B et al. Management of pulmonary contusion and flail chest: an Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. PMID: 23114493.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma physiology item evaluating the primary mechanism of hypoxia in flail chest.",
      "distractorExclusionNotes": "Excluded pendelluft theory in favor of underlying alveolar contusion and ventilation-perfusion mismatch.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0829",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Blunt Abdominal Trauma Hemodynamic Instability and Operative Laparotomy",
    "provisionalDifficulty": 4,
    "stem": "A 40-year-old man arrives at the emergency department after falling 25 feet from a construction scaffold onto hard ground. He is pale, cool, and minimally responsive. Blood pressure is 78/44 mm Hg, heart rate is 132/min, and respiratory rate is 24/min. Focused assessment with sonography for trauma (FAST) demonstrates free fluid in the hepatorenal space (Morison pouch) and splenorenal recess. His blood pressure transiently rises to 88/52 mm Hg following one unit of packed red blood cells, but rapidly drops back to 76/40 mm Hg. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for exploratory laparotomy",
        "In blunt abdominal trauma, hemodynamic instability (persistent hypotension despite initial blood resuscitation) accompanied by a positive FAST examination demonstrating free peritoneal fluid is a definitive indication for immediate exploratory laparotomy. The patient cannot safely undergo computed tomography (CT) of the abdomen and pelvis because transport to the scanner carries an unacceptable risk of circulatory arrest from uncontrolled intra-abdominal hemorrhage (most commonly splenic rupture, liver laceration, or mesenteric avulsion)."
      ],
      [
        "Transport to the radiology suite for contrast-enhanced CT of abdomen",
        "Transporting an unstable trauma patient with persistent shock to the CT suite is unsafe; CT scanning is strictly reserved for hemodynamically stable patients."
      ],
      [
        "Diagnostic peritoneal lavage to quantify red blood cell count",
        "Diagnostic peritoneal lavage (DPL) is redundant and causes unnecessary delay when FAST has already established the presence of intra-abdominal free fluid."
      ],
      [
        "Selective hepatic and splenic transcatheter angioembolization",
        "Angioembolization is indicated for stable patients with contrast blush on CT scan, not for hypotensive patients requiring rapid open surgical control."
      ],
      [
        "Repeat focused assessment with sonography for trauma after one hour",
        "Repeating ultrasound after an hour in an unstable bleeding patient would result in fatal hemorrhagic shock."
      ]
    ],
    "shortestValidSolution": "Blunt trauma + persistent hypotension + positive FAST = immediate operating room exploratory laparotomy.",
    "necessaryInference": "Recognize that hemodynamic instability with hemoperitoneum bypasses all imaging directly to the operating room.",
    "strongestDistractor": "Transport to the radiology suite for contrast-enhanced CT of abdomen",
    "distractorExclusion": "CT imaging requires hemodynamic stability; unstable patients with positive FAST require immediate laparotomy.",
    "citation": "Coccolini F et al. Splenic trauma: WSES classification and guidelines for adult and pediatric patients. World J Emerg Surg. PMID: 28828034.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma management algorithm: unstable blunt trauma with positive FAST mandates immediate laparotomy.",
      "distractorExclusionNotes": "Excluded CT scan because hemodynamic instability precludes transport to radiology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0830",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Penetrating Neck Trauma Zone II Hard Signs Mandating Emergent Exploration",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man presents to the trauma bay with a stab wound to Zone II of the right neck (between the cricoid cartilage and angle of the mandible). On examination, he is alert but anxious. Blood pressure is 102/64 mm Hg, and heart rate is 108/min. Physical examination reveals an actively expanding hematoma on the right lateral neck with an audible bruit and palpable thrill. There is mild stridor upon inspiration. He has no focal neurological deficits. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate surgical neck exploration in the operating room",
        "Penetrating neck trauma is evaluated according to anatomical zones (Zone I: clavicle to cricoid; Zone II: cricoid to angle of mandible; Zone III: angle of mandible to skull base) and the presence of 'hard signs' of vascular or aerodigestive injury. Hard signs include: active arterial bleeding, expanding or pulsatile hematoma, audible bruit or palpable thrill, absent distal pulse, stridor, or profound neurological deficit. The presence of hard signs (here, an actively expanding hematoma with bruit/thrill and airway compromise) mandates immediate airway control and emergent surgical exploration in the operating room without prior diagnostic imaging (such as CT angiography)."
      ],
      [
        "Bedside Doppler ultrasound evaluation of right carotid artery flow",
        "Bedside ultrasonography delays definitive operative intervention in a patient exhibiting unequivocal hard signs of arterial laceration."
      ],
      [
        "Emergency computed tomographic angiography of the neck vessels",
        "CTA is the preferred imaging modality for hemodynamically stable patients without hard signs (soft signs or asymptomatic penetrating injury), but is bypassed when hard signs are present."
      ],
      [
        "Local wound exploration and bedside primary suture wound closure",
        "Probing or closing penetrating neck wounds outside the operating room is contraindicated as it may dislodge an unstable clot and induce catastrophic hemorrhage."
      ],
      [
        "Direct laryngoscopy and rigid esophagoscopy under local anesthesia",
        "Endoscopic staging of aerodigestive tract is reserved for stable patients undergoing workup, not for active expanding vascular hematomas."
      ]
    ],
    "shortestValidSolution": "Zone II penetrating neck wound + expanding hematoma with bruit/stridor = hard signs -> immediate operative neck exploration.",
    "necessaryInference": "Differentiate hard signs mandating immediate surgical exploration from soft signs evaluated by CT angiography.",
    "strongestDistractor": "Emergency computed tomographic angiography of the neck vessels",
    "distractorExclusion": "CTA is indicated for soft signs or asymptomatic wounds; hard signs mandate immediate surgical exploration.",
    "citation": "Sperry JL, Moore EE, Coimbra R, et al. Western Trauma Association Critical Decisions in Trauma: Penetrating Neck Trauma. J Trauma Acute Care Surg. 2013;75(6):936-940. PMID: 24256663.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma surgery item distinguishing hard vs soft signs in penetrating neck trauma.",
      "distractorExclusionNotes": "Excluded CTA because hard signs of vascular injury mandate immediate operating room exploration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0831",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Epidural Hematoma Middle Meningeal Artery Injury and Emergent Craniotomy",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old man is brought to the emergency department after being struck on the right side of the head with a baseball bat. He briefly lost consciousness for 2 minutes, but subsequently awakened, was alert, and conversed normally. Two hours later while in the observation unit, he develops a severe headache, nausea, and vomiting, followed by rapid deterioration in mental status. On examination, he responds only to painful stimuli, his right pupil is 6 mm and nonreactive to light, and his left pupil is 3 mm and reactive. Left upper and lower extremity motor strength is 2/5 with hyperreflexia and an extensor plantar response. Emergent non-contrast head computed tomography shows a biconvex, hyperdense extra-axial collection in the right temporoparietal region that does not cross cranial suture lines, associated with 8 mm of midline shift. Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Immediate transfer to the operating room for emergent craniotomy",
        "This patient exhibits the classic clinical presentation of an acute epidural hematoma: head trauma to the pterion resulting in laceration of the middle meningeal artery, a classic 'lucid interval', followed by rapid neurological decompensation due to expanding intracranial hemorrhage and uncal herniation (ipsilateral oculomotor nerve compression causing a dilated, fixed pupil and contralateral hemiparesis from cerebral peduncle compression). The non-contrast head CT pathognomonically demonstrates a lenticular/biconvex hyperdense collection limited by cranial sutures. Emergent surgical evacuation via craniotomy is required to relieve mass effect and prevent fatal brainstem compression."
      ],
      [
        "Intravenous infusion of 20% mannitol and transfer to the neuro-ICU",
        "Mannitol is a temporizing hyperosmolar agent to reduce intracranial pressure while preparing the operating room, but medical therapy alone cannot substitute for definitive surgical evacuation."
      ],
      [
        "Placement of an external ventricular drain at the bedside for CSF release",
        "An external ventricular drain relieves hydrocephalus but cannot evacuate a clotted extra-axial arterial epidural hematoma."
      ],
      [
        "Emergent catheter-based cerebral angiography and middle meningeal embolization",
        "Endovascular embolization is sometimes used in chronic or subacute subdural collections, but acute epidural hematoma with herniation requires immediate open surgical decompression."
      ],
      [
        "Repeat non-contrast head computed tomography in two hours to assess progression",
        "Waiting for repeat imaging in an actively herniating patient with anisocoria and midline shift leads to irreversible brainstem ischemia and death."
      ]
    ],
    "shortestValidSolution": "Pterion trauma + lucid interval + dilated pupil + biconvex CT collection = epidural hematoma -> emergent operating room craniotomy.",
    "necessaryInference": "Recognize uncal herniation complicating middle meningeal artery epidural hematoma requiring immediate surgical craniotomy.",
    "strongestDistractor": "Intravenous infusion of 20% mannitol and transfer to the neuro-ICU",
    "distractorExclusion": "Hyperosmolar therapy is an adjunct, not a definitive treatment; mass effect from arterial epidural hematoma mandates surgical evacuation.",
    "citation": "Bullock MR, Chesnut R, Ghajar J, et al. Surgical Management of Acute Epidural Hematomas. Neurosurgery. 2006;58(3 Suppl):S7-S15. PMID: 16540746.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neurotrauma item assessing uncal herniation from acute epidural hematoma requiring emergent craniotomy.",
      "distractorExclusionNotes": "Excluded medical therapy alone because acute uncal herniation mandates emergent operative decompression.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0832",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Nervous System",
    "topic": "Acute Subdural Hematoma Bridging Vein Tearing and Surgical Decompression",
    "provisionalDifficulty": 4,
    "stem": "An 82-year-old woman with atrial fibrillation on apixaban falls from standing height, striking her occiput on a tile floor. She presents with progressive lethargy and confusion. Glasgow Coma Scale score is 11 (E3, V3, M5). Blood pressure is 158/88 mm Hg, and heart rate is 72/min. Non-contrast head CT reveals a crescent-shaped, concave hyperdense extra-axial collection overlying the left cerebral hemisphere that crosses suture lines, measuring 14 mm in maximal thickness with 7 mm of midline shift and effacement of the left lateral ventricle and basal cisterns. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate anticoagulant reversal and emergent decompressive craniotomy",
        "Acute subdural hematoma (SDH) results from tearing of bridging cortical veins, commonly seen in elderly patients with brain atrophy or on anticoagulation. Indications for surgical evacuation (craniotomy or decompressive hemicraniectomy) in acute SDH include hematoma thickness > 10 mm, midline shift > 5 mm, or GCS drop of >= 2 points from presentation, especially with effacement of basal cisterns. In an anticoagulated patient on a direct factor Xa inhibitor (apixaban), rapid reversal (using andexanet alfa or 4-factor prothrombin complex concentrate) should be initiated immediately alongside emergent operative evacuation."
      ],
      [
        "Observation in the neuro-intensive care unit with serial hourly examinations",
        "Observation is appropriate only for stable patients with hematoma thickness < 10 mm and midline shift < 5 mm without significant neurological impairment."
      ],
      [
        "Bedside twist-drill burr hole trephination under local anesthesia",
        "Twist-drill burr holes are utilized for chronic liquefied subdural hematomas, whereas acute subdural hematomas contain thick clotted blood requiring formal craniotomy."
      ],
      [
        "High-dose intravenous dexamethasone to reduce perilesional vasogenic edema",
        "Glucocorticoids have no proven efficacy in acute traumatic brain injury or subdural hematoma and are associated with increased mortality (CRASH trial)."
      ],
      [
        "Emergent lumbar puncture to measure intracranial opening pressure",
        "Lumbar puncture in the presence of mass effect, midline shift, and cistern effacement precipitates fatal transtentorial or tonsillar brain herniation."
      ]
    ],
    "shortestValidSolution": "Elderly fall + apixaban + crescent CT >10 mm thickness + 7 mm shift = acute SDH -> reverse anticoagulation and emergent craniotomy.",
    "necessaryInference": "Apply neurosurgical size/shift thresholds (>10 mm thickness, >5 mm shift) mandating operative evacuation in acute subdural hematoma.",
    "strongestDistractor": "Observation in the neuro-intensive care unit with serial hourly examinations",
    "distractorExclusion": "Conservative observation is unsafe when hematoma thickness exceeds 10 mm and midline shift exceeds 5 mm with mental status depression.",
    "citation": "Yokobori S et al. Neuroprotective effect of preoperatively induced mild hypothermia as determined by biomarkers and histopathological estimation in a rat subdural hematoma decompression model. J Neurosurg. PMID: 23140154.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma/neurosurgery item testing operative criteria for acute subdural hematoma.",
      "distractorExclusionNotes": "Excluded conservative observation because thickness >10 mm and shift >5 mm meet absolute operative criteria.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0833",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Acute Mesenteric Ischemia Superior Mesenteric Artery Embolism Management",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man with a history of permanent atrial fibrillation non-adherent to anticoagulation presents with sudden-onset, agonizing periumbilical abdominal pain of 4 hours' duration. He has had multiple episodes of vomiting and loose bowel movements. On physical examination, the abdomen is soft, flat, and non-distended, with mild subjective tenderness to deep palpation, but no involuntary guarding, rigidity, or rebound tenderness. Bowel sounds are hyperactive. Blood pressure is 144/86 mm Hg, and heart rate is 114/min irregularly irregular. Laboratory evaluation reveals WBC 18,500/mm3, D-dimer 3,800 ng/mL, and serum lactate 3.4 mmol/L (normal < 2.0 mmol/L). Computed tomographic angiography (CTA) of the abdomen demonstrates an abrupt filling defect in the mid-portion of the superior mesenteric artery with patent proximal trunk. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Intravenous unfractionated heparin and emergent surgical exploration with embolectomy",
        "Acute mesenteric ischemia (AMI) most commonly results from an embolus to the superior mesenteric artery (SMA) originating from cardiac mural thrombi in atrial fibrillation. The classic hallmark is severe abdominal pain out of proportion to physical examination findings (soft, non-tender abdomen early in the course). CTA of the abdomen and pelvis is the diagnostic test of choice. Once confirmed, immediate intravenous unfractionated heparin should be started to prevent propagation of thrombus, followed by emergent laparotomy for surgical embolectomy and assessment of bowel viability (resection of non-viable bowel with planned second-look laparotomy)."
      ],
      [
        "Intravenous fluids, bowel rest, and broad-spectrum antibiotics with serial abdominal exams",
        "Conservative management of acute arterial thromboembolic mesenteric ischemia results in transmural bowel infarction, perforation, peritonitis, septic shock, and death."
      ],
      [
        "Diagnostic colonoscopy to assess ischemic mucosal changes in the colon",
        "Colonoscopy is used for colonic ischemia (ischemic colitis), which typically affects watershed zones (splenic flexure); it cannot evaluate the small intestine supplied by the SMA and risks perforation."
      ],
      [
        "Elective catheter-directed thrombolysis over the next 48 hours in interventional radiology",
        "Thrombolysis over 48 hours is too slow when intestinal infarction is imminent, especially with elevated lactate suggesting established early bowel ischemia."
      ],
      [
        "Immediate exploratory laparotomy with total proctocolectomy and end ileostomy",
        "Total proctocolectomy is unnecessary and inappropriate; SMA emboli typically spare the proximal jejunum and left colon, requiring embolectomy and targeted bowel resection."
      ]
    ],
    "shortestValidSolution": "Atrial fibrillation + pain out of proportion + lactate + CTA SMA filling defect = acute mesenteric ischemia -> heparin + emergent embolectomy.",
    "necessaryInference": "Recognize SMA embolic occlusion requiring immediate anticoagulation and surgical embolectomy before transmural necrosis ensues.",
    "strongestDistractor": "Intravenous fluids, bowel rest, and broad-spectrum antibiotics with serial abdominal exams",
    "distractorExclusion": "Bowel rest and observation lead to fatal transmural gangrene and perforation in acute SMA arterial occlusion.",
    "citation": "Bala M et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World J Emerg Surg. PMID: 36261857.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK vascular surgery item on acute mesenteric ischemia from SMA embolism.",
      "distractorExclusionNotes": "Excluded conservative observation because acute arterial occlusion requires urgent surgical revascularization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0834",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Strangulated Small Bowel Obstruction Clinical Signs and Emergent Laparotomy",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old woman with a history of prior hysterectomy and appendectomy presents with 24 hours of colicky abdominal pain, bilious emesis, and obstipation. On arrival, abdominal radiography reveals multiple dilated small bowel loops with air-fluid levels and an absence of colonic gas. Over the subsequent 6 hours while receiving intravenous fluids and nasogastric decompression, her pain transforms from intermittent cramping to severe, constant, localized right lower quadrant pain. Her temperature rises to 38.6 C (101.5 F), heart rate increases to 118/min, and blood pressure is 106/66 mm Hg. Physical examination now demonstrates localized involuntary guarding and rebound tenderness in the right lower abdomen. Serum lactate is 3.1 mmol/L, and WBC is 16,800/mm3. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for exploratory laparotomy",
        "While uncomplicated adhesive small bowel obstruction (SBO) can often be managed conservatively with nasogastric decompression and intravenous fluid resuscitation, the development of 'cardinal signs of strangulation' mandates emergent exploratory laparotomy. Signs of strangulated bowel obstruction include: progression to unremitting constant pain, fever, tachycardia, localized peritoneal signs (involuntary guarding and rebound tenderness), leukocytosis, and metabolic acidosis with elevated serum lactate. Strangulation indicates compromised mesenteric blood supply leading to bowel ischemia, necrosis, and impending perforation."
      ],
      [
        "Administration of oral water-soluble contrast (Gastrografin) with follow-up films",
        "Water-soluble contrast challenges are used for diagnosing and predicting resolution of uncomplicated adhesive SBO; they are contraindicated when peritonitis or bowel strangulation is suspected."
      ],
      [
        "Placement of a rectal tube and flexible sigmoidoscopy for colonic decompression",
        "Rectal tube decompression is used for sigmoid volvulus or acute colonic pseudo-obstruction (Ogilvie syndrome), not small bowel mechanical obstruction with strangulation."
      ],
      [
        "Increase nasogastric tube suction and continue conservative therapy for 24 hours",
        "Persisting with non-operative management in the setting of localized peritonitis, fever, and lactic acidosis leads to transmural infarction, perforation, and overwhelming sepsis."
      ],
      [
        "Performance of contrast-enhanced magnetic resonance enterography",
        "MR enterography is useful for staging luminal Crohn disease in stable ambulatory patients, not for diagnosing acute surgical strangulated obstruction."
      ]
    ],
    "shortestValidSolution": "SBO + progression to constant pain + fever + peritonitis + elevated lactate = strangulation -> emergent exploratory laparotomy.",
    "necessaryInference": "Differentiate uncomplicated adhesive small bowel obstruction from strangulated obstruction requiring immediate surgery.",
    "strongestDistractor": "Administration of oral water-soluble contrast (Gastrografin) with follow-up films",
    "distractorExclusion": "Gastrografin challenge is contraindicated when peritonitis or bowel strangulation is suspected.",
    "citation": "Ten Broek RPG, Krielen P, Di Saverio S, et al. Bologna Guidelines for Diagnosis and Management of Adhesive Small Bowel Obstruction (ASBO): 2017 Update of the Evidence-Based Guidelines. World J Emerg Surg. 2018;13:24. PMID: 29946347.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery item evaluating clinical criteria for strangulated small bowel obstruction.",
      "distractorExclusionNotes": "Excluded Gastrografin protocol because signs of strangulation/peritonitis require immediate laparotomy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0835",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Perforated Peptic Ulcer Subdiaphragmatic Free Air and Omental Patch Repair",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man with a history of heavy chronic naproxen use for osteoarthritis presents with sudden-onset, excruciating epigastric pain that began 2 hours prior to arrival. He describes the pain as instantaneous and tearing, rapidly spreading across the entire abdomen. On examination, he lies completely motionless on the stretcher with knees flexed, grimacing with any bed movement. Blood pressure is 108/68 mm Hg, and heart rate is 116/min. Abdominal examination reveals a scaphoid, completely rigid, board-like abdomen with severe generalized tenderness, involuntary guarding, and diffuse rebound tenderness. Upright chest radiography reveals a crescent of free air under the right hemidiaphragm. Following intravenous fluid resuscitation and broad-spectrum antibiotics, which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Emergent exploratory laparotomy with Graham omental patch repair",
        "This patient presents with acute generalized peritonitis secondary to a perforated peptic ulcer, confirmed by pneumoperitoneum (subdiaphragmatic free air on upright chest radiograph) and a classic rigid, 'board-like' abdomen. Perforated peptic ulcer is a surgical emergency. Following immediate resuscitation with intravenous crystalloids, broad-spectrum empiric antibiotics, and intravenous proton pump inhibitors, the patient requires emergent exploratory laparotomy (or laparoscopy) with primary closure of the ulcer perforation reinforced by an omental pedicle graft (Graham patch repair) and thorough peritoneal lavage."
      ],
      [
        "Emergent upper gastrointestinal endoscopy with hemoclip application",
        "Upper endoscopy is contraindicated in perforated peptic ulcer because insufflation of air into the lumen dramatically increases pneumoperitoneum, drives enteric contamination, and worsens tension pneumoperitoneum."
      ],
      [
        "Non-operative management with continuous nasogastric suction and intravenous PPI",
        "Conservative management (Taylor approach) is reserved only for rare, highly selected, stable patients with sealed perforations on water-soluble gastroduodenography, not acute generalized peritonitis."
      ],
      [
        "Percutaneous CT-guided drainage of subdiaphragmatic collection",
        "Percutaneous drainage is appropriate for localized, contained abscesses, not free generalized intraperitoneal perforation with diffuse peritonitis."
      ],
      [
        "Emergency partial gastrectomy with Billroth II gastrojejunostomy reconstruction",
        "Emergency gastrectomy is excessively morbid and unnecessary for typical benign duodenal/pre-pyloric peptic perforations, which are definitively managed with simple omental patch repair."
      ]
    ],
    "shortestValidSolution": "Sudden severe pain + board-like rigidity + subdiaphragmatic free air = perforated peptic ulcer -> emergent Graham patch repair.",
    "necessaryInference": "Recognize that acute hollow viscus perforation with diffuse peritonitis mandates emergent operative Graham patch repair and contraindicates endoscopy.",
    "strongestDistractor": "Emergent upper gastrointestinal endoscopy with hemoclip application",
    "distractorExclusion": "Endoscopy is strictly contraindicated due to risk of worsening peritoneal contamination and tension pneumoperitoneum from air insufflation.",
    "citation": "Pardue K et al. Pearls, Pitfalls, and Complications of Surgical Management for Peptic Ulcer Disease. Surg Clin North Am. PMID: 42933418.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery emergency on perforated peptic ulcer presenting with pneumoperitoneum and peritonitis.",
      "distractorExclusionNotes": "Excluded endoscopy because air insufflation causes massive contamination and tension pneumoperitoneum.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0836",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Appendiceal Phlegmon and Abscess Percutaneous Drainage and Interval Surgery",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man presents with 7 days of right lower quadrant abdominal pain, anorexia, and subjective fevers. He reports that his pain was severe 5 days ago, followed by temporary mild relief, but has since evolved into a persistent, dull ache. On examination, he is hemodynamically stable: blood pressure is 124/78 mm Hg, heart rate is 84/min, and temperature is 38.1 C (100.6 F). Physical examination reveals a palpable, tender, firm mass in the right lower quadrant without generalized peritonitis or involuntary guarding. Contrast-enhanced CT of the abdomen and pelvis demonstrates a 4.5-cm fluid collection with peripheral rim enhancement in the right iliac fossa adjacent to a thickened appendix, consistent with a walled-off appendiceal abscess. Which of the following is the most appropriate initial management strategy?",
    "choices": [
      [
        "Intravenous antibiotics and CT-guided percutaneous abscess drainage",
        "Patients presenting with delayed acute appendicitis (>5 to 7 days after symptom onset) often have a walled-off perforation forming an inflammatory phlegmon or periappendiceal abscess. In a hemodynamically stable patient without generalized peritonitis, immediate appendectomy is associated with high rates of complication (fistula formation, conversion to open surgery, extensive ileocecal resection) due to dense adhesions and friable inflamed tissue. The standard of care is non-operative management with intravenous broad-spectrum antibiotics and CT-guided percutaneous catheter drainage for collections >= 3-4 cm, followed by interval appendectomy in 6 to 8 weeks."
      ],
      [
        "Emergent exploratory laparotomy with right hemicolectomy and ileocolic anastomosis",
        "Right hemicolectomy is unnecessarily extensive and aggressive for a contained, drainable benign appendiceal abscess in a stable patient."
      ],
      [
        "Immediate laparoscopic appendectomy with intraoperative drain placement",
        "Immediate surgery through dense inflammatory tissue in late appendiceal phlegmon dramatically increases rates of inadvertent enterotomy, cecal perforation, and bowel resection."
      ],
      [
        "Colonoscopy to evaluate for cecal neoplasm and perform transcolonic drainage",
        "Colonoscopy in the acute phase of severe periappendiceal inflammation carries a high risk of colonic perforation and is not indicated."
      ],
      [
        "Oral ciprofloxacin and metronidazole outpatient therapy with bed rest",
        "Outpatient oral therapy is inadequate for a 4.5-cm rim-enhancing abscess, which requires inpatient parenteral antibiotics and image-guided percutaneous source control."
      ]
    ],
    "shortestValidSolution": "Symptoms >5 days + RLQ mass + 4.5 cm abscess + stable = appendiceal abscess -> IV antibiotics + percutaneous drainage + interval surgery.",
    "necessaryInference": "Recognize that contained appendiceal abscess presenting late (>5 days) in a stable patient requires percutaneous drainage over immediate appendectomy.",
    "strongestDistractor": "Immediate laparoscopic appendectomy with intraoperative drain placement",
    "distractorExclusion": "Immediate surgery on late inflamed phlegmon carries high morbidity and enterotomy risk; percutaneous drainage with interval appendectomy is superior.",
    "citation": "Podda M et al. Diagnosis and Treatment of Acute Appendicitis: 2025 Edition of the World Society of Emergency Surgery Jerusalem Guidelines. JAMA Surg. PMID: 41604201.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery item contrasting immediate appendectomy vs percutaneous drainage for late appendiceal abscess.",
      "distractorExclusionNotes": "Excluded immediate appendectomy due to higher surgical morbidity, ileocecal resection, and fecal fistula rates.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0837",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Acute Acalculous Cholecystitis Percutaneous Cholecystostomy Decompression",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man remains in the surgical intensive care unit on day 14 following an emergency coronary artery bypass graft complicated by cardiogenic shock, prolonged mechanical ventilation, and total parenteral nutrition. Over the past 24 hours, he develops new fever, worsening leukocytosis (WBC 22,400/mm3), and refractory hypotension requiring escalation of norepinephrine. Physical examination is limited due to sedation, but palpation of the right upper quadrant elicits grimacing and abdominal wall tensing. Bedside right upper quadrant ultrasound shows a distended gallbladder with 5-mm wall thickening, marked pericholecystic fluid, and mucosal sloughing, without intraluminal gallstones or common bile duct dilation. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Bedside percutaneous cholecystostomy tube placement under ultrasound guidance",
        "Acute acalculous cholecystitis (AAC) is a life-threatening necrotizing condition that predominantly affects critically ill, hospitalized patients (e.g., severe sepsis, trauma, major surgery, prolonged TPN) secondary to gallbladder ischemia and biliary stasis. Ultrasound findings include gallbladder wall thickening (>3 mm), pericholecystic fluid, distension, and absence of gallstones. In critically ill, hemodynamically unstable patients who are prohibitive surgical candidates for general anesthesia, bedside percutaneous cholecystostomy under ultrasound/fluoroscopic guidance is the treatment of choice to provide immediate source control and biliary decompression."
      ],
      [
        "Emergent open cholecystectomy in the operating room under general anesthesia",
        "Emergent open cholecystectomy carries prohibitive operative mortality in a critically ill patient with multi-organ failure and refractory shock when percutaneous drainage is feasible."
      ],
      [
        "Intravenous broad-spectrum antibiotics alone without any procedural intervention",
        "Antibiotics alone provide inadequate source control for acute acalculous cholecystitis, which rapidly progresses to gangrene, empyema, and perforation without decompression."
      ],
      [
        "Endoscopic retrograde cholangiopancreatography with biliary sphincterotomy",
        "ERCP evaluates the common bile duct; it does not directly decompress the obstructed or ischemic gallbladder lumen in acalculous cholecystitis."
      ],
      [
        "Nuclear cholescintigraphy (HIDA scan) with morphine augmentation",
        "HIDA scan is unnecessary when ultrasound already confirms classic anatomical findings of acalculous cholecystitis, and transport/delays are unsafe in septic shock."
      ]
    ],
    "shortestValidSolution": "ICU patient + sepsis + distended gallbladder with thick wall/fluid/no stones = acalculous cholecystitis -> percutaneous cholecystostomy.",
    "necessaryInference": "Recognize acute acalculous cholecystitis in an ICU patient and select percutaneous cholecystostomy over high-risk surgery.",
    "strongestDistractor": "Emergent open cholecystectomy in the operating room under general anesthesia",
    "distractorExclusion": "Open cholecystectomy carries prohibitive mortality in unstable ICU patients; percutaneous drainage provides safe, immediate bedside decompression.",
    "citation": "Barie PS, Eachempati SR. Acute Acalculous Cholecystitis. Gastroenterol Clin North Am. 2010;39(2):343-357. PMID: 20478490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK critical care surgery item testing management of acute acalculous cholecystitis in an unstable patient.",
      "distractorExclusionNotes": "Excluded surgical cholecystectomy because bedside percutaneous cholecystostomy is the standard bridge for high-risk ICU patients.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0838",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Acute Ascending Cholangitis Reynolds Pentad and Urgent Biliary Decompression",
    "provisionalDifficulty": 4,
    "stem": "A 74-year-old woman is brought to the emergency department with severe right upper quadrant abdominal pain, high fever, and shaking chills for 12 hours. Her family reports that she became progressively confused and disoriented over the past 4 hours. On examination, she is lethargic, sclerae are deeply icteric, and there is marked tenderness to palpation in the right upper quadrant with involuntary guarding. Blood pressure is 82/48 mm Hg, heart rate is 128/min, temperature is 39.4 C (102.9 F), and respiratory rate is 24/min. Laboratory studies show total bilirubin 6.8 mg/dL, direct bilirubin 5.2 mg/dL, alkaline phosphatase 540 U/L, AST 180 U/L, ALT 165 U/L, and WBC 24,000/mm3 with 18% bands. Bedside ultrasound demonstrates choledocholithiasis with common bile duct dilation to 13 mm. Following rapid intravenous crystalloid resuscitation and initiation of broad-spectrum antibiotics, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Urgent endoscopic retrograde cholangiopancreatography for biliary decompression",
        "This patient presents with acute ascending cholangitis with Reynolds pentad: Charcot triad (fever, jaundice, right upper quadrant pain) plus hypotension (shock) and altered mental status. Reynolds pentad signifies acute suppurative cholangitis with high mortality due to sepsis. The pathophysiology involves biliary outflow obstruction (choledocholithiasis) with bacterial superinfection and elevated intrabiliary pressure driving bactobilia into the hepatic venous circulation. Following aggressive resuscitation and intravenous broad-spectrum antibiotics, urgent biliary decompression via endoscopic retrograde cholangiopancreatography (ERCP) with biliary sphincterotomy and/or stent placement is the definitive life-saving intervention."
      ],
      [
        "Immediate transfer to the operating room for emergency open choledochotomy",
        "Open surgical common bile duct exploration carries significantly higher morbidity and mortality than endoscopic retrograde decompression and is reserved only for failed ERCP."
      ],
      [
        "Elective cholecystectomy during the same hospital admission once afebrile",
        "Elective cholecystectomy removes the gallbladder reservoir but fails to relieve the life-threatening septic common bile duct obstruction."
      ],
      [
        "Magnetic resonance cholangiopancreatography to map biliary anatomy",
        "MRCP is a purely diagnostic imaging study; delaying biliary decompression to obtain an MRCP in septic shock from suppurative cholangitis is life-threatening."
      ],
      [
        "High-dose intravenous methylprednisolone to reduce common bile duct edema",
        "Corticosteroids have no role in bacterial ascending cholangitis and worsen immunosuppression in active sepsis."
      ]
    ],
    "shortestValidSolution": "Fever + jaundice + RUQ pain + shock + confusion = Reynolds pentad ascending cholangitis -> urgent ERCP biliary decompression.",
    "necessaryInference": "Recognize suppurative ascending cholangitis with Reynolds pentad mandating urgent ERCP over surgical exploration or diagnostic MRCP.",
    "strongestDistractor": "Immediate transfer to the operating room for emergency open choledochotomy",
    "distractorExclusion": "ERCP is the gold standard decompression modality; open surgery is much more morbid and reserved for endoscopic failures.",
    "citation": "Yokoe M et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis (with videos). J Hepatobiliary Pancreat Sci. PMID: 29032636.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK biliary tract emergency item assessing Reynolds pentad and urgent ERCP decompression.",
      "distractorExclusionNotes": "Excluded open surgery and MRCP because urgent endoscopic decompression is the primary standard of care.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0839",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Infected Pancreatic Necrosis Step-Up Approach Minimally Invasive Management",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man is hospitalized for severe necrotizing gallstone pancreatitis. At week 4 of hospitalization, after showing initial stabilization, he develops new spiking fevers to 39.0 C (102.2 F), worsening abdominal pain, leukocytosis (WBC 21,000/mm3), and new organ dysfunction. Contrast-enhanced CT scan of the abdomen reveals walled-off pancreatic necrosis (WOPN) measuring 12 cm in the lesser sac, containing multiple bubbles of extraluminal retroperitoneal gas. Blood cultures are drawn, and intravenous meropenem is started. Which of the following is the most appropriate next step in the surgical management of this patient?",
    "choices": [
      [
        "Percutaneous catheter or endoscopic transluminal drainage of the collection",
        "This patient has infected walled-off pancreatic necrosis (WOPN), evidenced by clinical deterioration, sepsis, and gas bubbles within retroperitoneal necrosis on CT. The current gold standard for infected necrotizing pancreatitis is the 'step-up approach'. Rather than immediate open surgical necrosectomy (which carries high morbidity and mortality), the step-up approach begins with broad-spectrum antibiotics (such as carbapenems that penetrate pancreatic tissue) and minimally invasive drainage (percutaneous catheter drainage or endoscopic ultrasound-guided transluminal cystogastrostomy). If the patient fails to improve clinically after 72 hours, treatment steps up to minimally invasive surgical necrosectomy (e.g., video-assisted retroperitoneal debridement [VARD] or endoscopic necrosectomy)."
      ],
      [
        "Immediate open transperitoneal pancreatic necrosectomy with packing",
        "Early open surgical necrosectomy was demonstrated by the PANTER trial to result in significantly higher rates of major complications, new-onset organ failure, incisional hernias, and death compared to the step-up approach."
      ],
      [
        "Observation on intravenous antibiotics alone without mechanical drainage",
        "Intravenous antibiotics alone are insufficient for large collections of infected walled-off necrotic debris; source control through drainage is essential."
      ],
      [
        "Emergency total pancreatectomy with splenectomy and Roux-en-Y reconstruction",
        "Total pancreatectomy is excessively radical, causing brittle pancreatogenic diabetes and complete exocrine insufficiency, and is contraindicated."
      ],
      [
        "Endoscopic retrograde pancreatography with transpapillary pancreatic stent placement",
        "Transpapillary stenting addresses main pancreatic duct disruptions, but cannot drain a massive 12-cm thick retroperitoneal necrotic cavity."
      ]
    ],
    "shortestValidSolution": "Necrotizing pancreatitis week 4 + gas in necrosis = infected WOPN -> step-up approach with percutaneous/endoscopic drainage.",
    "necessaryInference": "Apply the evidence-based step-up approach for infected walled-off pancreatic necrosis over open necrosectomy.",
    "strongestDistractor": "Immediate open transperitoneal pancreatic necrosectomy with packing",
    "distractorExclusion": "Open necrosectomy has significantly higher mortality and morbidity; minimally invasive step-up drainage is the proven superior strategy.",
    "citation": "van Santvoort HC, Besselink MG, Bakker OJ, et al. A Step-Up Approach or Open Necrosectomy for Necrotizing Pancreatitis. N Engl J Med. 2010;362(16):1491-1502. PMID: 20410514.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery item evaluating the step-up approach for infected walled-off pancreatic necrosis.",
      "distractorExclusionNotes": "Excluded immediate open necrosectomy based on Landmark PANTER trial evidence proving superiority of step-up drainage.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0840",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Sigmoid Volvulus Endoscopic Detorsion Followed by Elective Resection",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old institutionalized man with advanced Parkinson disease and chronic constipation presents with 3 days of progressive, painless abdominal distension, obstipation, and nausea. On physical examination, the abdomen is massively distended and tympanitic to percussion, but soft, non-tender, and without guarding, rigidity, or rebound. Vital signs are normal. Abdominal radiography reveals a markedly dilated, inverted U-shaped loop of bowel without haustra projecting from the pelvis toward the right upper quadrant ('coffee-bean sign'). Laboratory studies, including serum lactate and WBC count, are normal. Which of the following is the most appropriate initial management step?",
    "choices": [
      [
        "Flexible sigmoidoscopy for endoscopic detorsion and rectal tube placement",
        "Sigmoid volvulus occurs when a redundant sigmoid colon twists around its mesentery, causing closed-loop large-bowel obstruction, most commonly in elderly, institutionalized patients with chronic constipation. In hemodynamically stable patients without signs of peritonitis, perforation, or bowel gangrene (normal lactate, soft non-tender abdomen), the initial treatment of choice is endoscopic detorsion and decompression via flexible sigmoidoscopy (or rigid proctoscopy), followed by placement of a temporary rectal tube to maintain patency. Because the recurrence rate after detorsion alone approaches 50% to 70%, definitive semi-elective sigmoid resection is recommended during the same hospital admission once the colon is decompressed."
      ],
      [
        "Emergent open exploratory laparotomy with Hartmann resection",
        "Emergent Hartmann resection is reserved for patients presenting with peritonitis, bowel gangrene, perforation, or failed endoscopic detorsion."
      ],
      [
        "High-volume oral polyethylene glycol bowel preparation solution",
        "Administering oral bowel preparation in complete mechanical closed-loop volvulus precipitates cecal or sigmoid perforation."
      ],
      [
        "Intravenous neostigmine infusion under continuous cardiac telemetry",
        "Neostigmine is indicated for acute colonic pseudo-obstruction (Ogilvie syndrome), not mechanical mechanical torsion of the sigmoid colon."
      ],
      [
        "Percutaneous transabdominal needle aspiration of the dilated colonic loop",
        "Needle aspiration across the abdominal wall risks uncontained fecal spillage, peritonitis, and colonic tearing."
      ]
    ],
    "shortestValidSolution": "Elderly + chronic constipation + massive distension + coffee-bean sign + no peritonitis = sigmoid volvulus -> flexible sigmoidoscopy detorsion.",
    "necessaryInference": "Select endoscopic detorsion as initial therapy for uncomplicated sigmoid volvulus before definitive resection.",
    "strongestDistractor": "Emergent open exploratory laparotomy with Hartmann resection",
    "distractorExclusion": "Hartmann resection is reserved for strangulation, gangrene, or failed endoscopic detorsion; stable uncomplicated cases undergo sigmoidoscopic decompression first.",
    "citation": "Atamanalp SS et al. Sigmoid volvulus with 25 episodes. Rev Esp Enferm Dig. PMID: 39087664.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK colorectal surgery item testing initial management of uncomplicated sigmoid volvulus.",
      "distractorExclusionNotes": "Excluded emergent surgery because sigmoidoscopic detorsion safely decompresses uncomplicated volvulus.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0841",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Toxic Megacolon in Ulcerative Colitis Indications for Subtotal Colectomy",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman with severe ulcerative colitis flares is admitted to the hospital. Despite 72 hours of high-dose intravenous methylprednisolone, broad-spectrum antibiotics, and bowel rest, she deteriorates. Her temperature is 39.2 C (102.6 F), heart rate is 134/min, blood pressure is 86/52 mm Hg, and respiratory rate is 26/min. Abdominal examination reveals a silent, distended abdomen with diffuse rebound tenderness and muscular guarding. Plain abdominal radiography demonstrates transverse colon dilation to 7.8 cm with loss of haustral markings and mucosal thumbprinting. Serum lactate is 3.8 mmol/L, and WBC is 26,500/mm3 with 22% bands. Which of the following is the most appropriate next step in surgical management?",
    "choices": [
      [
        "Subtotal colectomy with end ileostomy and Hartmann pouch",
        "Toxic megacolon is an acute, life-threatening non-obstructive dilation of the colon (>6 cm, most easily measured in the transverse colon) accompanied by systemic toxicity (fever, tachycardia, leukocytosis, altered mental status). In severe ulcerative colitis or C. difficile infection failing medical therapy (or with signs of impending/free perforation, peritonitis, or refractory septic shock), the surgical procedure of choice is subtotal (total abdominal) colectomy with end ileostomy and preservation of the rectum (Hartmann pouch or mucous fistula). Proctocolectomy with pelvic pouch (IPAA) is strictly contraindicated in the acute septic setting due to high pelvic sepsis, nerve damage, and pouch failure rates."
      ],
      [
        "Total proctocolectomy with ileal pouch-anal anastomosis (IPAA)",
        "Pelvic dissection and ileal pouch creation are contraindicated in acute toxic colitis with peritonitis and sepsis; restorative surgery is deferred until the patient has fully recovered."
      ],
      [
        "Emergent colonoscopy with endoscopic decompression and rectal tube insertion",
        "Colonoscopy is strictly contraindicated in toxic megacolon due to the extreme friability and paper-thin colonic wall, which carries an imminent risk of perforation."
      ],
      [
        "Intravenous infliximab infusion with continuation of high-dose steroids",
        "Rescue medical therapy (infliximab or cyclosporine) cannot be initiated in a patient exhibiting generalized peritonitis, refractory septic shock, and colonic dilation >7.5 cm failing initial therapy."
      ],
      [
        "Percutaneous cecostomy tube decompression under fluoroscopic guidance",
        "Percutaneous cecostomy is obsolete and does not address the transmural necrosis, gangrene, or systemic endotoxemia of toxic megacolon."
      ]
    ],
    "shortestValidSolution": "Severe UC flare + colon >6 cm + septic shock + peritonitis = toxic megacolon -> emergent subtotal colectomy with end ileostomy.",
    "necessaryInference": "Recognize toxic megacolon failing medical therapy and select subtotal colectomy over total proctocolectomy or contraindicated colonoscopy.",
    "strongestDistractor": "Emergent colonoscopy with endoscopic decompression and rectal tube insertion",
    "distractorExclusion": "Colonoscopy is strictly contraindicated due to high risk of bowel perforation in toxic megacolon.",
    "citation": "Autenrieth DM et al. Toxic megacolon. Inflamm Bowel Dis. PMID: 22009735.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK colorectal surgery emergency item on toxic megacolon management and surgical choice.",
      "distractorExclusionNotes": "Excluded colonoscopy because air insufflation causes perforation; subtotal colectomy is the definitive operation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0842",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Ruptured Abdominal Aortic Aneurysm Hemodynamic Instability Management",
    "provisionalDifficulty": 4,
    "stem": "A 72-year-old man with a 40 pack-year smoking history and known 5.2-cm infrarenal abdominal aortic aneurysm presents with sudden-onset, excruciating mid-abdominal pain radiating straight through to his back, accompanied by syncope. On arrival, he is pale, diaphoresis is noted, and he is minimally responsive. Blood pressure is 74/42 mm Hg, heart rate is 122/min, and peripheral pulses are thready. Abdominal examination demonstrates a prominent, tender, pulsatile mass palpated superior to the umbilicus, with flank ecchymosis on the left (Grey Turner sign). Bedside ultrasound confirms an infrarenal aortic diameter of 6.8 cm with retroperitoneal hematoma. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for emergent aneurysm repair",
        "The triad of sudden severe abdominal/back pain, hypotension/shock, and a pulsatile abdominal mass is diagnostic of a ruptured abdominal aortic aneurysm (AAA). In a hemodynamically unstable patient with clinical or bedside ultrasound confirmation, there must be NO DELAY for computed tomographic angiography (CTA). The patient must be immediately transported to the operating room for emergent repair (open surgical clamping or emergent endovascular aneurysm repair [EVAR] in suitable candidates). Permissive hypotension (targeting systolic BP 80-100 mm Hg) is maintained until proximal vascular control is established to prevent dislodging the retroperitoneal tamponading clot."
      ],
      [
        "Immediate transport to the radiology suite for contrast-enhanced CTA",
        "Obtaining a CTA in an unstable patient with classic ruptured AAA introduces fatal delays and frequently results in circulatory arrest in the scanner."
      ],
      [
        "Aggressive crystalloid fluid resuscitation targeting systolic BP > 130 mm Hg",
        "Aggressive fluid resuscitation targeting normal or high blood pressures dilutes clotting factors and pops the retroperitoneal clot tamponade, exacerbating fatal hemorrhage."
      ],
      [
        "Diagnostic laparoscopy to evaluate for mesenteric ischemia or infarction",
        "Laparoscopy is contraindicated in vascular collapse and cannot obtain proximal aortic vascular control."
      ],
      [
        "Intravenous nitroprusside infusion to reduce peak aortic wall shear stress",
        "Vasodilators like nitroprusside cause catastrophic circulatory collapse in a patient already in profound hemorrhagic shock from aortic rupture."
      ]
    ],
    "shortestValidSolution": "Back pain + pulsatile mass + hypotension = ruptured AAA -> immediate transfer to operating room for repair.",
    "necessaryInference": "Recognize that unstable ruptured AAA requires immediate operating room transfer without CTA delay and with permissive hypotension.",
    "strongestDistractor": "Immediate transport to the radiology suite for contrast-enhanced CTA",
    "distractorExclusion": "CTA is only for hemodynamically stable patients; unstable patients must be rushed directly to the operating room.",
    "citation": "Chaikof EL, Dalman RL, Eskandari MK, et al. The Society for Vascular Surgery Practice Guidelines on the Care of Patients With an Abdominal Aortic Aneurysm. J Vasc Surg. 2018;67(1):2-77.e2. PMID: 29268916.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK vascular surgery emergency item testing management priorities in ruptured AAA.",
      "distractorExclusionNotes": "Excluded CTA because hemodynamic instability precludes transport away from the resuscitation/OR suite.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0843",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Acute Arterial Limb Ischemia Anticoagulation and Urgent Revascularization",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman presents to the emergency department with sudden, severe pain in her right lower leg that began 3 hours ago. On examination, the right leg below the knee is cold, pale, and mottled. Sensation is diminished over the dorsum and plantar aspect of the right foot, but motor strength in the ankle and toes is preserved (4+/5). Capillary refill in the right foot is prolonged (>4 seconds). Femoral pulse is palpable, but popliteal, dorsalis pedis, and posterior tibial pulses are absent by palpation and handheld Doppler. The contralateral left leg has palpable pulses and normal sensation. Which of the following is the most appropriate immediate next step in management?",
    "choices": [
      [
        "Intravenous bolus and continuous infusion of unfractionated heparin",
        "This patient presents with acute limb ischemia (ALI) of the right lower extremity, characterized by the '6 Ps': pain, pallor, poikilothermia (coldness), pulselessness, paresthesias, and paralysis (motor loss). Her presentation represents a viable to marginally threatened limb (Rutherford Category IIa: mild sensory loss, intact motor function, inaudible arterial Doppler). The immediate mandatory medical intervention is full-dose intravenous anticoagulation with an unfractionated heparin bolus followed by continuous infusion. Heparin prevents propagation of the thrombus, protects distal microvascular runoff beds, and reduces ischemic progression while urgent revascularization (catheter-directed thrombolysis or surgical embolectomy) is arranged."
      ],
      [
        "Placement of a warming blanket and hot packs over the affected right foot",
        "Applying external heat to an ischemic limb increases metabolic demand in tissue with compromised oxygen delivery, causing accelerated tissue necrosis and burn injury."
      ],
      [
        "Elevation of the right leg above the level of the heart on pillows",
        "Elevating an ischemic limb decreases arterial hydrostatic perfusion pressure, significantly worsening distal tissue ischemia; the limb should be placed in a dependent position."
      ],
      [
        "Performance of outpatient lower extremity arterial duplex ultrasonography",
        "Outpatient testing is inappropriately delayed for acute limb ischemia, which leads to irreversible neuromuscular damage within 4 to 6 hours without intervention."
      ],
      [
        "High-dose oral aspirin and clopidogrel with observation for 24 hours",
        "Antiplatelet therapy alone is inadequate for acute arterial thromboembolism; therapeutic heparin anticoagulation and urgent revascularization are mandatory."
      ]
    ],
    "shortestValidSolution": "Sudden cold, pale leg + absent pulses + sensory loss = acute limb ischemia -> immediate IV unfractionated heparin.",
    "necessaryInference": "Identify acute arterial limb ischemia and administer immediate IV heparin to prevent thrombus propagation prior to revascularization.",
    "strongestDistractor": "High-dose oral aspirin and clopidogrel with observation for 24 hours",
    "distractorExclusion": "Oral antiplatelets are insufficient for acute thromboembolic occlusion; therapeutic IV heparin is required immediately.",
    "citation": "Gerhard-Herman MD, Gornik HL, Barrett C, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779. PMID: 27840333.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK vascular surgery item on acute limb ischemia initial management priorities.",
      "distractorExclusionNotes": "Excluded elevation and warming blankets because they worsen ischemia; IV heparin is the immediate standard.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0844",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Gastrointestinal",
    "topic": "Abdominal Compartment Syndrome Bladder Pressure and Decompressive Surgery",
    "provisionalDifficulty": 5,
    "stem": "A 35-year-old man is in the surgical intensive care unit following a damage-control laparotomy, splenectomy, and massive transfusion protocol (18 units of PRBCs, 16 units of FFP) for severe gunshot wounds to the abdomen. Over the past 4 hours, his abdomen has become massively distended and tense ('rock-hard'). Mechanical ventilator peak airway pressures have climbed from 22 to 44 cm H2O, with PaO2/FiO2 ratio dropping to 140. Urine output drops to 8 mL/hr over 2 consecutive hours. Blood pressure is 88/54 mm Hg on norepinephrine. Intra-abdominal pressure (IAP) measured via transurethral bladder catheter transducer is 28 mm Hg (normal < 12 mm Hg). Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Emergent bedside or operating room decompressive laparotomy",
        "Abdominal compartment syndrome (ACS) is defined as a sustained intra-abdominal pressure (IAP) > 20 mm Hg (measured via a urinary bladder catheter transducer) associated with new-onset organ dysfunction or failure (respiratory compromise with elevated peak pressures, oliguria from renal vein compression and decreased GFR, and hemodynamic collapse from inferior vena cava compression). When medical management (sedation, neuromuscular blockade, gastric/rectal decompression, fluid restriction) is insufficient or when IAP exceeds 25 mm Hg with organ failure, the definitive life-saving treatment is emergent surgical decompression via laparotomy, leaving the abdomen open with temporary negative-pressure abdominal dressing."
      ],
      [
        "Aggressive intravenous infusion of three liters of 5% albumin solution",
        "Infusing additional fluid worsens visceral edema, tissue third-spacing, and intrabdominal hypertension, accelerating multi-organ failure."
      ],
      [
        "High-dose intravenous loop diuretic therapy with furosemide boluses",
        "Diuretics worsen hemodynamic collapse in patients with impaired venous return and decreased cardiac preload secondary to IVC compression."
      ],
      [
        "Conversion from volume-controlled to high-frequency oscillatory ventilation",
        "Changing ventilatory mode does not relieve the underlying mechanical pressure of tense ascites and bowel edema on the diaphragm and vasculature."
      ],
      [
        "Placement of bilateral percutaneous nephrostomy tubes for renal decompression",
        "Nephrostomy tubes treat intrinsic ureteral obstruction, not the extrinsic renal parenchymal and venous compression caused by abdominal hypertension."
      ]
    ],
    "shortestValidSolution": "Tense abdomen + peak pressures + oliguria + bladder pressure >20 mm Hg = ACS -> emergent decompressive laparotomy.",
    "necessaryInference": "Diagnose abdominal compartment syndrome by elevated bladder pressure with multi-organ failure and select emergent decompressive laparotomy.",
    "strongestDistractor": "Aggressive intravenous infusion of three liters of 5% albumin solution",
    "distractorExclusion": "Further fluid loading exacerbates visceral edema and worsens abdominal compartment syndrome.",
    "citation": "Kirkpatrick AW, Roberts DJ, De Waele J, et al. Intra-Abdominal Hypertension and the Abdominal Compartment Syndrome: Updated Consensus Definitions and Clinical Practice Guidelines. Intensive Care Med. 2013;39(7):1190-1206. PMID: 23673399.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK critical care surgery item assessing diagnosis and definitive decompression in abdominal compartment syndrome.",
      "distractorExclusionNotes": "Excluded fluid resuscitation and diuretics because mechanical surgical decompression is definitively required.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0845",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Circumferential Extremity Full-Thickness Burn and Bedside Escharotomy",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old industrial worker sustains full-thickness, circumferential burns to his entire right upper extremity in an electrical flash explosion. Four hours after injury, during active fluid resuscitation, he complains of severe, progressively worsening pain in his right forearm and hand that is refractory to intravenous fentanyl. On physical examination, the skin of the right forearm is leathery, dry, and charred. The forearm compartments are tense and woody to palpation. Active finger extension is severely limited, and passive extension of the fingers elicits excruciating pain. Sensation to light touch and two-point discrimination is diminished in the digits. Radial and ulnar pulses are no longer palpable and are barely audible on bedside Doppler ultrasound. Which of the following is the most appropriate immediate intervention?",
    "choices": [
      [
        "Urgent bedside escharotomy along medial and lateral lines of the forearm",
        "Full-thickness (third-degree) burns form a rigid, inelastic, leathery layer of coagulated necrotic dermis called eschar. When burns are circumferential around an extremity, ongoing edema during fluid resuscitation creates a tourniquet effect, raising interstitial pressure and producing compartment syndrome. Cardinal signs include severe pain out of proportion, pain with passive stretch, tense woody compartments, paresthesias, and loss of distal Doppler pulses. The immediate, limb-saving intervention is an urgent bedside escharotomy, which involves longitudinal incisions through the rigid eschar (medial and lateral aspects of the forearm) down into subcutaneous fat until healthy, viable tissue herniates, relieving pressure."
      ],
      [
        "Immediate full-thickness operative fasciotomy of all forearm fascial compartments",
        "Fasciotomy incises the deep muscular fascia and is reserved for cases where compartment pressures remain elevated (>30 mm Hg) after adequate escharotomy has been completed."
      ],
      [
        "Application of topical silver sulfadiazine cream and tight elastic compressive wraps",
        "Applying elastic compressive wraps increases extrinsic pressure on an already compromised compartment, accelerating tissue necrosis."
      ],
      [
        "Immediate reduction of intravenous crystalloid fluid resuscitation rate by 50%",
        "Reducing fluid resuscitation in major burns compromises systemic organ perfusion and promotes acute tubular necrosis; fluid rates must follow Parkland/physiologic targets."
      ],
      [
        "Elevation of the right arm on pillows above the level of the clavicle",
        "Excessive limb elevation reduces perfusion pressure across compromised microvascular beds and worsens ischemic injury in compartment syndrome."
      ]
    ],
    "shortestValidSolution": "Circumferential burn + tense limb + pain on passive stretch + loss of pulses = burn compartment syndrome -> bedside escharotomy.",
    "necessaryInference": "Differentiate escharotomy (incising rigid eschar to subcutaneous fat) as first-line treatment for circumferential burn compartment syndrome.",
    "strongestDistractor": "Immediate full-thickness operative fasciotomy of all forearm fascial compartments",
    "distractorExclusion": "Escharotomy is the primary bedside procedure for burn eschar restriction; fasciotomy is reserved for persistent high pressures after escharotomy.",
    "citation": "Orgill DP, Piccolo N. Escharotomy and Decompressive Therapies in Burns. J Burn Care Res. 2009;30(5):759-768. PMID: 19692906.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK burn surgery item assessing recognition and management of burn-induced extremity compartment syndrome.",
      "distractorExclusionNotes": "Excluded fasciotomy as initial step because incising the restrictive eschar relieves the superficial constriction first.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0846",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Necrotizing Fasciitis Clinical Hallmarks and Emergent Surgical Debridement",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man with poorly controlled type 2 diabetes mellitus presents with 24 hours of rapidly worsening redness, swelling, and severe pain in his left lower leg following a minor scratch. He appears toxic and diaphoretic. Blood pressure is 84/50 mm Hg, heart rate is 126/min, temperature is 39.1 C (102.4 F), and respiratory rate is 24/min. Physical examination of the left calf reveals an ill-defined area of dusky, purplish erythema with bullae containing violaceous hemorrhagic fluid. The calf is exquisitely tender, with severe pain extending well beyond the visible margin of erythema. Palpation reveals soft tissue crepitus. Laboratory studies show WBC 28,400/mm3 with 16% bands, serum sodium 128 mEq/L, serum glucose 340 mg/dL, and serum lactate 4.2 mmol/L. Following blood cultures, broad-spectrum antibiotics, and fluid resuscitation, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for emergent surgical debridement",
        "Necrotizing fasciitis is a surgical emergency characterized by rapid, aggressive destruction of subcutaneous tissue and fascia with profound systemic toxicity. Diagnostic hallmarks include severe pain out of proportion to physical findings, tenderness extending beyond visible erythematous borders, hemorrhagic bullae, skin necrosis/dusky discoloration, crepitus (gas in soft tissues), and septic shock with laboratory risk indicator for necrotizing fasciitis (LRINEC) abnormalities (hyponatremia, extreme leukocytosis, hyperglycemia, elevated lactate). The cornerstone of treatment is immediate, aggressive, extensive surgical debridement in the operating room; delaying surgery for imaging or awaiting antibiotic response leads to overwhelming sepsis and death."
      ],
      [
        "Magnetic resonance imaging of the lower extremity with intravenous gadolinium",
        "Obtaining an MRI introduces fatal procedural delays in an unstable patient with clinical signs of necrotizing soft-tissue infection."
      ],
      [
        "Observation on intravenous vancomycin and piperacillin-tazobactam for 24 hours",
        "Antibiotics alone cannot penetrate thrombosed, necrotic fascial microvasculature; surgery is essential for source control."
      ],
      [
        "Bedside needle aspiration of bullae fluid for urgent Gram stain and culture",
        "Aspirating bullae may yield bacteria but delays transport to the operating room and does not achieve definitive tissue debridement."
      ],
      [
        "Hyperbaric oxygen therapy initiated prior to any invasive surgical intervention",
        "Hyperbaric oxygen is an adjunctive therapy used only after comprehensive surgical debridement has been successfully accomplished."
      ]
    ],
    "shortestValidSolution": "Severe pain beyond erythema + hemorrhagic bullae + crepitus + septic shock = necrotizing fasciitis -> emergent surgical debridement.",
    "necessaryInference": "Recognize that clinical signs of necrotizing fasciitis mandate immediate surgical exploration and debridement without imaging delays.",
    "strongestDistractor": "Magnetic resonance imaging of the lower extremity with intravenous gadolinium",
    "distractorExclusion": "Imaging delays are fatal in necrotizing fasciitis; immediate operative exploration is diagnostic and therapeutic.",
    "citation": "Stevens DL, Bisno AL, Chambers HF, et al. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2014;59(2):147-159. PMID: 24947530.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK surgery/infectious disease emergency item testing recognition and operative urgency in necrotizing fasciitis.",
      "distractorExclusionNotes": "Excluded MRI because clinical findings of crepitus, hemorrhagic bullae, and shock demand immediate surgery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0847",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Fournier Gangrene Perineal Necrotizing Infection and Wide Resection",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old obese man with uncontrolled type 2 diabetes mellitus presents to the emergency department with excruciating perineal and scrotal pain, chills, and lethargy for 24 hours. Vital signs show blood pressure 86/52 mm Hg, heart rate 130/min, and temperature 39.3 C (102.8 F). Examination reveals a tense, swollen scrotum with patches of black necrotic skin extending onto the perineum and perianal region. Palpation demonstrates marked tenderness, foul-smelling 'dishwater' discharge from a small ulceration, and palpable crepitus across the perineum. Point-of-care ultrasound confirms extensive gas tracking along the dartos and Colles fascial planes. Following initiation of fluid resuscitation and intravenous vancomycin, cefepime, and metronidazole, which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Immediate transfer to the operating room for radical surgical debridement",
        "Fournier gangrene is a necrotizing fasciitis of the perineal, genital, and perianal regions, typically polymicrobial (synergistic aerobic and anaerobic bacteria), occurring frequently in diabetic, obese, or immunocompromised males. It spreads rapidly along Dartos, Colles, and Scarpa fascias. Clinical hallmarks include severe perineal pain, cutaneous necrosis, crepitus from gas-producing organisms, foul exudate, and rapid septic shock. Fournier gangrene carries a mortality rate of 20% to 40%. The definitive, life-saving therapy is immediate, radical surgical debridement of all non-viable tissue in the operating room, combined with broad-spectrum parenteral antibiotics and hemodynamic resuscitation."
      ],
      [
        "Urgent outpatient sitz baths, oral ciprofloxacin, and close clinic follow-up",
        "Outpatient conservative care in Fournier gangrene is rapidly fatal due to aggressive fascial spread and septic shock."
      ],
      [
        "Placement of an indwelling urethral catheter and observation in the ICU",
        "Urethral catheterization protects the urinary tract but provides no source control for extensive perineal tissue necrosis."
      ],
      [
        "Performance of contrast-enhanced pelvic MRI to determine surgical margins",
        "MRI causes critical delays; surgical exploration cannot wait for imaging when crepitus and cutaneous gangrene are clinically established."
      ],
      [
        "Elective bilateral orchiectomy scheduled for the next routine operating list",
        "The testes receive blood supply from the gonadal arteries within the retroperitoneum and are usually spared; radical debridement focuses on fascia, not routine orchiectomy."
      ]
    ],
    "shortestValidSolution": "Scrotal/perineal necrosis + crepitus + septic shock = Fournier gangrene -> immediate radical surgical debridement.",
    "necessaryInference": "Identify Fournier gangrene as a surgical emergency requiring immediate wide operative debridement and distinguish testis sparing.",
    "strongestDistractor": "Performance of contrast-enhanced pelvic MRI to determine surgical margins",
    "distractorExclusion": "Delaying surgery for MRI in necrotizing perineal infection leads to rapid mortality; direct surgical exploration is required.",
    "citation": "Chernyadyev SA, Ufimtseva MA, Vishnevskaya IF, et al. Fournier's Gangrene: Literature Review and Clinical Cases. Urol Int. 2018;101(1):91-97. PMID: 29949811.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK urology/general surgery item testing recognition and urgent surgical treatment of Fournier gangrene.",
      "distractorExclusionNotes": "Excluded MRI imaging because clinical crepitus and gangrene require immediate operating room debridement.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0848",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Postoperative Fever Timing and Evaluation of Deep Intra-Abdominal Abscess",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man is postoperative day 6 following an elective low anterior resection with primary colorectal anastomosis for rectal adenocarcinoma. He was recovering well and tolerating a soft diet until today, when he develops new lower abdominal pain, anorexia, and a temperature spike to 38.8 C (101.8 F). Blood pressure is 114/72 mm Hg, heart rate is 104/min, and respiratory rate is 18/min. Physical examination reveals mild lower abdominal distension with significant localized tenderness and involuntary guarding in the left lower quadrant and suprapubic region. The surgical midline incision is clean, dry, and intact with no erythema or purulent drainage. Laboratory evaluation reveals WBC 17,200/mm3 with 12% bands. Chest radiography shows clear lung fields without consolidation or atelectasis. Urinalysis is negative for leukocyte esterase and nitrites. Which of the following is the most appropriate next step in diagnosis?",
    "choices": [
      [
        "Contrast-enhanced computed tomography of the abdomen and pelvis",
        "The timing of postoperative fever guides diagnostic evaluation ('5 Ws': Wind/atelectasis days 1-2, Water/UTI day 3, Wound/SSI days 5-7, Walking/DVT-PE days 5+, Wonder drugs anytime). On postoperative day 6 following low anterior colorectal resection, new fever, leukocytosis, and localized peritonitis strongly suggest a deep surgical site infection, anastomotic leak, or intra-abdominal pelvic abscess. Contrast-enhanced CT of the abdomen and pelvis (ideally with oral/rectal water-soluble and intravenous contrast) is the gold standard diagnostic test to detect anastomotic breakdown, extraluminal gas, and drainable fluid collections."
      ],
      [
        "Reassurance and incentive spirometry for postoperative atelectasis",
        "Atelectasis presents in the first 24 to 48 hours postoperatively; fever on postoperative day 6 with localized peritonitis cannot be attributed to atelectasis."
      ],
      [
        "Repeat urine culture and empiric ciprofloxacin for catheter-associated UTI",
        "The urinalysis is entirely negative, and catheter-associated UTI does not explain localized peritoneal guarding in the left lower quadrant."
      ],
      [
        "Bilateral lower extremity venous duplex ultrasound as sole initial test",
        "While DVT can cause fever on day 6, it does not explain localized abdominal tenderness, guarding, and anorexia after colorectal anastomosis."
      ],
      [
        "Immediate exploratory laparotomy without preoperative axial imaging",
        "In a hemodynamically stable patient without septic shock or free rupture, CT imaging is essential to define anatomy, localize collections, and guide percutaneous vs surgical drainage."
      ]
    ],
    "shortestValidSolution": "Post-op day 6 + fever + LLQ tenderness after colorectal resection = deep collection/anastomotic leak -> contrast CT abdomen/pelvis.",
    "necessaryInference": "Apply postoperative fever timeline to suspect deep surgical site infection/anastomotic leak on day 6 and order CT imaging.",
    "strongestDistractor": "Reassurance and incentive spirometry for postoperative atelectasis",
    "distractorExclusion": "Atelectasis occurs on days 1-2; new day 6 fever with localized peritonitis indicates deep surgical complication.",
    "citation": "Ishizawa T et al. First clinical implementation of histotripsy for liver tumors in Japan. Glob Health Med. PMID: 42959238.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK postoperative management item evaluating fever etiology by postoperative day timeline.",
      "distractorExclusionNotes": "Excluded atelectasis because timing (POD 6) and focal abdominal findings point directly to intra-abdominal complication.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0849",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Cardiovascular",
    "topic": "Postoperative Pulmonary Embolism Anticoagulation After Hip Arthroplasty",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman is postoperative day 5 following an elective right total hip arthroplasty. She was receiving subcutaneous enoxaparin 30 mg daily for venous thromboembolism prophylaxis. This morning, she develops sudden-onset right-sided pleuritic chest pain and shortness of breath while ambulating with physical therapy. On physical examination, she appears distressed and tachypneic. Vital signs show blood pressure 118/74 mm Hg, heart rate 116/min regular, respiratory rate 28/min, and oxygen saturation 88% on ambient air, improving to 94% on 4 L/min via nasal cannula. Chest auscultation reveals clear breath sounds bilaterally. Electrocardiogram reveals sinus tachycardia with S1Q3T3 pattern. Computed tomographic pulmonary angiography (CTPA) confirms filling defects in the right main and interlobar pulmonary arteries with normal right ventricular size. Serum creatinine is 0.9 mg/dL. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Therapeutic weight-based low-molecular-weight heparin or direct oral anticoagulant",
        "This patient has developed a symptomatic, confirmed acute pulmonary embolism (PE) following major orthopedic surgery despite routine low-dose prophylaxis. In a hemodynamically stable patient without right ventricular strain (submassive) or hypotension (massive), the primary treatment is immediate full therapeutic-dose anticoagulation. Options include weight-based therapeutic low-molecular-weight heparin (e.g., enoxaparin 1 mg/kg every 12 hours) or an approved direct oral anticoagulant (e.g., apixaban or rivaroxaban loading). Full anticoagulation halts thrombus extension and allows endogenous fibrinolysis to dissolve the clot."
      ],
      [
        "Immediate systemic thrombolytic therapy with intravenous alteplase",
        "Systemic thrombolysis is indicated only for massive (high-risk) PE with hemodynamic instability/shock, and is contraindicated shortly after major surgery due to severe bleeding risks."
      ],
      [
        "Placement of an inferior vena cava filter without anticoagulation",
        "IVC filters are indicated only when there is an absolute contraindication to therapeutic anticoagulation or recurrent PE despite documented therapeutic anticoagulation."
      ],
      [
        "Emergent surgical pulmonary embolectomy under cardiopulmonary bypass",
        "Surgical embolectomy is reserved for massive PE in shock when systemic thrombolysis is absolutely contraindicated or has failed."
      ],
      [
        "Increase subcutaneous enoxaparin prophylaxis from 30 mg to 40 mg daily",
        "Prophylactic doses (even 40 mg daily) are completely inadequate for treating established, active acute pulmonary embolism."
      ]
    ],
    "shortestValidSolution": "Post-op hip replacement + sudden pleuritic pain + tachycardia + CTPA filling defect = PE -> therapeutic anticoagulation.",
    "necessaryInference": "Distinguish prophylaxis failure requiring therapeutic-dose anticoagulation from indications for thrombolysis or IVC filters.",
    "strongestDistractor": "Placement of an inferior vena cava filter without anticoagulation",
    "distractorExclusion": "IVC filters are reserved for absolute contraindications to anticoagulation; therapeutic anticoagulation is the primary treatment.",
    "citation": "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism Developed in Collaboration With the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603. PMID: 31504429.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK postoperative complication item assessing management of pulmonary embolism after orthopedic surgery.",
      "distractorExclusionNotes": "Excluded IVC filter and thrombolysis because the patient is stable and has no absolute contraindication to anticoagulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0850",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "General Principles",
    "topic": "Postoperative Fascial Dehiscence Sterile Dressing and Emergent Re-Closure",
    "provisionalDifficulty": 4,
    "stem": "A 65-year-old obese man with chronic obstructive pulmonary disease and malnutrition is postoperative day 7 following an exploratory laparotomy and sigmoid colectomy for perforated diverticulitis. After a severe coughing fit this morning, he felt a sudden 'popping' sensation in his midline abdominal incision, accompanied by a sudden gush of clear, pink-tinged fluid that soaked his surgical dressings and hospital gown. On physical examination, blood pressure is 126/80 mm Hg, and heart rate is 88/min. Upon removing the dressing, the skin sutures have separated in the mid-abdomen, with copious serosanguineous ('salmon-pink') drainage pooling. Through the separated edges, small bowel loops are visibly herniating into the subcutaneous plane beneath the skin. Which of the following is the most appropriate immediate management?",
    "choices": [
      [
        "Cover the wound with sterile saline-moistened gauze and prepare for emergent operative repair",
        "Wound dehiscence with acute fascial disruption typically presents around postoperative days 5 to 8, often precipitated by increased intra-abdominal pressure (e.g., coughing, straining) in patients with risk factors (obesity, malnutrition, COPD, wound infection). The classic pathognomonic hallmark is copious, serosanguineous ('salmon-pink') discharge soaking surgical dressings. Visible bowel herniation indicates full-thickness fascial dehiscence (evisceration). Immediate management is covering the exposed viscera with sterile saline-moistened dressings to prevent bowel desiccation and necrosis, followed by emergent return to the operating room for surgical exploration, debridement, and definitive fascial re-closure."
      ],
      [
        "Bedside primary wound re-approximation using nylon sutures under local anesthesia",
        "Bedside skin closure traps infected fluid, fails to re-approximate the retracted fascia, and risks inadvertent bowel puncture with needle passage."
      ],
      [
        "Application of negative-pressure wound therapy directly over the open wound and bowel",
        "Applying negative-pressure therapy directly onto exposed intestinal loops causes enteric fistulization, bowel necrosis, and perforation."
      ],
      [
        "Manual reduction of protruding bowel loops followed by placement of an abdominal binder",
        "Forceful manual reduction of viscera through a tight fascial defect without anesthesia risks bowel laceration, strangulation, and sepsis."
      ],
      [
        "Prescribe oral cephalexin and order outpatient follow-up in the wound care clinic",
        "Outpatient management of fascial disruption and bowel herniation results in catastrophic peritonitis, bowel gangrene, and death."
      ]
    ],
    "shortestValidSolution": "Popping sensation + salmon-pink drainage + visible bowel = fascial dehiscence -> sterile saline gauze + emergent operating room repair.",
    "necessaryInference": "Recognize fascial dehiscence and evisceration, apply sterile saline-moistened dressings immediately, and return to the OR.",
    "strongestDistractor": "Bedside primary wound re-approximation using nylon sutures under local anesthesia",
    "distractorExclusion": "Bedside skin closure cannot repair retracted fascia and risks bowel puncture; formal operating room re-closure is required.",
    "citation": "van Ramshorst GH, Nieuwenhuizen J, Hop WC, et al. Abdominal Wound Dehiscence in Adults: Development and Validation of a Risk Model. World J Surg. 2010;34(1):20-27. PMID: 19898894.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery complication item on fascial dehiscence/evisceration management.",
      "distractorExclusionNotes": "Excluded bedside closure and binders because sterile coverage and emergent OR fascial repair are mandatory.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
