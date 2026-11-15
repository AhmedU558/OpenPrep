"""
Step 2 CK Batch 34 (0831-0850) Definitions - Surgery & Trauma
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b34_part2 = [
  # 0831
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
  # 0832
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
    "citation": "Bullock MR, Chesnut R, Ghajar J, et al. Surgical Management of Acute Subdural Hematomas. Neurosurgery. 2006;58(3 Suppl):S16-S24. PMID: 16540747.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK trauma/neurosurgery item testing operative criteria for acute subdural hematoma.",
      "distractorExclusionNotes": "Excluded conservative observation because thickness >10 mm and shift >5 mm meet absolute operative criteria.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0833
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
    "citation": "Bala M, Kashuk J, Moore EE, et al. Acute Mesenteric Ischemia: Guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2017;12:38. PMID: 28798803.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK vascular surgery item on acute mesenteric ischemia from SMA embolism.",
      "distractorExclusionNotes": "Excluded conservative observation because acute arterial occlusion requires urgent surgical revascularization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0834
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
  # 0835
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
    "citation": "Taranto D, Annunziata ML, De Sio I, et al. Perforated Peptic Ulcer: Management and Surgical Treatment. Updates Surg. 2020;72(1):9-15. PMID: 32060855.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery emergency on perforated peptic ulcer presenting with pneumoperitoneum and peritonitis.",
      "distractorExclusionNotes": "Excluded endoscopy because air insufflation causes massive contamination and tension pneumoperitoneum.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0836
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
    "citation": "Di Saverio S, Podda M, De Simone B, et al. Diagnosis and Treatment of Acute Appendicitis: 2020 Update of the WSES Jerusalem Guidelines. World J Emerg Surg. 2020;15(1):27. PMID: 32703274.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK general surgery item contrasting immediate appendectomy vs percutaneous drainage for late appendiceal abscess.",
      "distractorExclusionNotes": "Excluded immediate appendectomy due to higher surgical morbidity, ileocecal resection, and fecal fistula rates.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0837
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
  # 0838
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
    "citation": "Kiriyama S, Kozaka K, Takada T, et al. Tokyo Guidelines 2018: Diagnostic Criteria and Severity Grading of Acute Cholangitis (With Videos). J Hepatobiliary Pancreat Sci. 2018;25(1):17-30. PMID: 29308778.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK biliary tract emergency item assessing Reynolds pentad and urgent ERCP decompression.",
      "distractorExclusionNotes": "Excluded open surgery and MRCP because urgent endoscopic decompression is the primary standard of care.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0839
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
  # 0840
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
    "citation": "Atamanalp SS. Sigmoid Volvulus: Diagnosis and Treatment. Chirurgia (Bucur). 2013;108(5):615-619. PMID: 24157103.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK colorectal surgery item testing initial management of uncomplicated sigmoid volvulus.",
      "distractorExclusionNotes": "Excluded emergent surgery because sigmoidoscopic detorsion safely decompresses uncomplicated volvulus.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
]
