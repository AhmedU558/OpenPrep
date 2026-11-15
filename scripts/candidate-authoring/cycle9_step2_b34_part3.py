"""
Step 2 CK Batch 34 (0841-0850) Definitions - Surgery & Trauma
"""

import sys
sys.path.append('scripts/candidate-authoring')
from cycle9_authoring_common import validate_item

b34_part3 = [
  # 0841
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
    "citation": "Autenrieth DM, Baumgart DC. Toxic Megacolon. Dig Dis. 2012;30(2):203-210. PMID: 22722438.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK colorectal surgery emergency item on toxic megacolon management and surgical choice.",
      "distractorExclusionNotes": "Excluded colonoscopy because air insufflation causes perforation; subtotal colectomy is the definitive operation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0842
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
  # 0843
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
  # 0844
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
  # 0845
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
  # 0846
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
  # 0847
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
  # 0848
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
    "citation": "Gundogan E, Kayaalp C. Postoperative Fever After Colorectal Surgery. Sisli Etfal Hastan Tip Bul. 2020;54(1):8-13. PMID: 32269472.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK postoperative management item evaluating fever etiology by postoperative day timeline.",
      "distractorExclusionNotes": "Excluded atelectasis because timing (POD 6) and focal abdominal findings point directly to intra-abdominal complication.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  # 0849
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
  # 0850
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
]
