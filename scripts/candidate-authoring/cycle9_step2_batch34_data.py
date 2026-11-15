"""
Step 2 CK Batch 34 (0826-0850) Definitions - Surgery & Trauma
"""

import sys
sys.path.append('scripts/candidate-authoring')
from build_step2_cycle9 import write_ts_batch
from cycle9_authoring_common import validate_item

b34_items = [
  # 0826
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
  # 0827
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
    "citation": "Biffl WL, Fox CJ, Moore EE. The Role of Emergent Thoracotomy in Trauma: A Systematic Review. World J Emerg Surg. 2015;10:23. PMID: 26038437.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma item testing surgical indications for emergent thoracotomy in massive hemothorax.",
      "distractorExclusionNotes": "Excluded CT scan because hemodynamic instability with massive tube output mandates immediate operative exploration.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0828
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
    "citation": "Simon B, Ebert J, Bokhari F, et al. Management of Pulmonary Contusion and Flail Chest: An Eastern Association for the Surgery of Trauma Practice Management Guideline. J Trauma Acute Care Surg. 2012;73(5 Suppl 4):S351-S361. PMID: 23112369.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma physiology item evaluating the primary mechanism of hypoxia in flail chest.",
      "distractorExclusionNotes": "Excluded pendelluft theory in favor of underlying alveolar contusion and ventilation-perfusion mismatch.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0829
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
    "citation": "Coccolini F, Montori G, Catena F, et al. Splenic Trauma: WSES Classification and Guidelines for Adult and Pediatric Patients. World J Emerg Surg. 2017;12:40. PMID: 28828062.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma management algorithm: unstable blunt trauma with positive FAST mandates immediate laparotomy.",
      "distractorExclusionNotes": "Excluded CT scan because hemodynamic instability precludes transport to radiology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0830
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
  }
]
