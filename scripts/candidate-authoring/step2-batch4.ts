import { CandidateSpec } from './types';

export const step2Batch4: CandidateSpec[] = [
  {
    code: 'op-c-s2-0076',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Acute Limb Ischemia Six Ps and Immediate Anticoagulation',
    subtopic: 'Thromboembolism from Atrial Fibrillation and Surgical Revascularization',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute limb ischemia (6 P\'s: Pain, Pallor, Poikilothermia, Pulselessness, Paresthesia, Paralysis). Sudden cardioembolic occlusion from atrial fibrillation. Immediate management is systemic intravenous heparin bolus and infusion to prevent propagation of thrombus, followed immediately by vascular surgery consultation for emergency revascularization (catheter-directed embolectomy/thrombolysis) within 4-6 hours to prevent irreversible muscle necrosis.',
    citation: 'Gerhard-Herman MD, et al. 2016 AHA/ACC Guideline on the Management of Patients With Lower Extremity Peripheral Artery Disease. Circulation. 2017;135(12):e726-e779. PMID: 27840333.',
    stem:
      'A 68-year-old man presents to the emergency department with sudden, excruciating pain in his right leg and foot that began 2 hours ago. He has a history of long-standing hypertension and chronic non-valvular atrial fibrillation for which he was prescribed apixaban, though he admits to discontinuing it 3 weeks ago due to financial difficulties. Physical examination reveals an irregularly irregular rhythm at 104/min. Examination of the right lower extremity demonstrates pale, cool, marble-like skin from the mid-calf down to the toes (poikilothermia). Sensation to light touch and pinprick is diminished over the right dorsal and plantar foot, and active dorsiflexion of the right great toe is weak (motor grade 3/5). Right femoral arterial pulse is palpable (2+), but right popliteal, posterior tibial, and dorsalis pedis pulses are absent, even with bedside handheld continuous-wave Doppler evaluation. Left lower extremity pulses and neurological examination are completely normal. Which of the following is the most appropriate immediate medical intervention before revascularization?',
    options: [
      {
        text: 'Intravenous bolus of unfractionated heparin followed by continuous therapeutic heparin infusion',
        explanation: 'This patient has acute limb ischemia (ALI) of the right lower extremity, manifesting the classical "6 P\'s": Pain, Pallor, Poikilothermia (coolness), Pulselessness, Paresthesia, and Paralysis/paresis. Given his history of unanticoagulated atrial fibrillation and sudden onset, cardioembolism to the common femoral bifurcation or popliteal artery is the most likely cause. Because skeletal muscle tolerates ischemia for only 4 to 6 hours before irreversible myonecrosis, rhabdomyolysis, and permanent motor loss occur, immediate systemic anticoagulation with an intravenous unfractionated heparin bolus and continuous infusion is mandatory to prevent propagation of the thrombus and protect microvascular distal runoff, while vascular surgery is urgently mobilized for surgical revascularization (Fogarty catheter embolectomy).'
      },
      {
        text: 'Immediate placement of a compressive pneumatic arterial boot on the ischemic extremity',
        explanation: 'Pneumatic compression increases tissue pressure and further compromises already critically diminished microvascular capillary perfusion, accelerating ischemic gangrene.'
      },
      {
        text: 'Oral initiation of high-dose cilostazol and aspirin with outpatient vascular clinic referral',
        explanation: 'Cilostazol is indicated for chronic stable intermittent claudication; it has zero efficacy in acute embolic limb ischemia, where delayed intervention leads to limb amputation.'
      },
      {
        text: 'Performance of bilateral lower extremity arterial duplex ultrasonography prior to any treatment',
        explanation: 'Duplex ultrasound or CT angiography can confirm anatomy, but immediate systemic anticoagulation must not be delayed while awaiting imaging in an extremity with motor/sensory compromise.'
      },
      {
        text: 'Application of warm heating pads directly to the right foot to promote collateral vasodilation',
        explanation: 'Applying direct heat to an ischemic, hypesthetic extremity causes severe full-thickness thermal burns because the tissue cannot dissipate heat through microvascular blood flow.'
      }
    ]
  },
  {
    code: 'op-c-s2-0077',
    exam: 'Step 2 CK',
    subject: 'Surgery',
    system: 'Pregnancy',
    topic: 'Adnexal Torsion Laparoscopic Detorsion and Ovarian Preservation',
    subtopic: 'Acute Pelvic Pain with Doppler Impairment and Viability Assessment',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize ovarian torsion (adnexal torsion): acute severe sudden unilateral pelvic pain, nausea/vomiting, tender adnexal mass. Pelvic ultrasound with Doppler shows enlarged ovary with heterogeneous stroma and decreased/absent venous (and arterial) flow. Gynecologic surgical emergency. Immediate diagnostic and therapeutic laparoscopy with detorsion and ovarian preservation (oophoropexy / cystectomy) is performed regardless of dusky/ischemic appearance, because ovarian tissue has remarkable recovery capacity.',
    citation: 'American College of Obstetricians and Gynecologists. Committee Opinion No. 783: Adnexal Torsion in Adolescents and Women. Obstet Gynecol. 2019;134(2):e56-e63. PMID: 31348247.',
    stem:
      'A 24-year-old woman presents to the emergency department with sudden-onset, severe, sharp right lower quadrant pelvic pain that woke her from sleep 3 hours ago. The pain radiates to her right flank and groin and is associated with repeated retching and non-bilious vomiting. She has no fever, dysuria, or vaginal bleeding. Her last menstrual period was 2 weeks ago, and she uses an intrauterine copper device for contraception. On physical examination, she is writhing in pain. Blood pressure is 134/82 mm Hg, heart rate is 108/min, and temperature is 37.1 C (98.8 F). Abdominal examination reveals localized voluntary guarding and marked tenderness in the right lower quadrant without peritoneal rigidity. Pelvic examination reveals a tender, palpable, mobile 6-cm mass in the right adnexa. Urine pregnancy test is negative. Pelvic ultrasonography with color Doppler reveals an enlarged, edematous right ovary measuring 6.2 x 4.8 cm with peripherally displaced follicles (string-of-pearls appearance) and a 4-cm benign-appearing simple cyst. Color Doppler demonstrates absent venous flow and markedly diminished, high-resistance arterial flow in the right ovary, with a twisted vascular pedicle (whirlpool sign). The left ovary and uterus are completely normal. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Emergent laparoscopy with surgical detorsion and ovarian preservation regardless of intraoperative color',
        explanation: 'This patient has acute adnexal (ovarian) torsion, a gynecologic emergency requiring immediate surgical intervention to salvage the ovary and preserve fertility. Torsion of the infundibulopelvic (suspensory) and utero-ovarian ligaments first occludes the low-pressure venous and lymphatic drainage, causing progressive ovarian edema and stromal congestion, which eventually compromises high-pressure arterial inflow and leads to hemorrhagic infarction. Current ACOG guidelines mandate emergent laparoscopy with simple detorsion and ovarian preservation, even if the ovary appears dark, dusky, bluish-black, or ischemic. Numerous clinical studies demonstrate that >90% of seemingly necrotic ovaries regain functional folliculogenesis and hormone production following detorsion, and fears of dislodging thromboemboli have been disproven.'
      },
      {
        text: 'Emergent open unilateral salpingo-oophorectomy to prevent systemic thromboembolism',
        explanation: 'Routine oophorectomy is outdated and contraindicated in reproductive-aged women unless the ovary is frankly gangrenous and breaking down; simple detorsion is safe and does not cause pulmonary embolism.'
      },
      {
        text: 'Admit to the gynecologic service for 24 hours of intravenous ketorolac and serial Doppler ultrasonography',
        explanation: 'Conservative expectant management of ovarian torsion leads to complete ischemic necrosis, ovarian gangrene, peritonitis, and permanent loss of ovarian function.'
      },
      {
        text: 'Percutaneous ultrasound-guided transvaginal aspiration of the 4-cm ovarian cyst fluid',
        explanation: 'Cyst aspiration does not untwist the twisted ovarian vascular pedicle and delays definitive operative restoration of arterial and venous flow.'
      },
      {
        text: 'Immediate administration of high-dose broad-spectrum intravenous ampicillin, gentamicin, and clindamycin',
        explanation: 'Intravenous triple antibiotics are indicated for tubo-ovarian abscess (TOA) and pelvic inflammatory disease (PID), which presents with fever, purulent cervical discharge, and bilateral tenderness with preserved or increased Doppler vascularity.'
      }
    ]
  },
  {
    code: 'op-c-s2-0078',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Carbon Monoxide Toxicity Co-Oximetry and Hyperbaric Oxygen',
    subtopic: 'Falsely Normal Pulse Oximetry and Specific HBO Indications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize carbon monoxide (CO) poisoning: headache, nausea, confusion, cherry-red skin (rare/post-mortem), normal standard pulse oximetry (cannot distinguish oxyhemoglobin from carboxyhemoglobin). Co-oximetry reveals elevated carboxyhemoglobin (HbCO > 3-5% non-smokers, >10% smokers). Immediate treatment: 100% normobaric oxygen via non-rebreather (reduces half-life from 300 to 90 min). Hyperbaric oxygen (HBO) indications: loss of consciousness, carboxyhemoglobin > 25% (> 15-20% in pregnancy), severe metabolic acidosis, or ischemic ECG changes.',
    citation: 'Rose JJ, et al. Carbon Monoxide Poisoning: Pathogenesis, Management, and Future Directions of Therapy. Am J Respir Crit Care Med. 2017;195(5):596-606. PMID: 27753502.',
    stem:
      'A 32-year-old woman who is 22 weeks pregnant presents to the emergency department after being found confused and somnolent in her apartment during a severe winter storm. She had been operating an unvented portable kerosene space heater inside her closed living room for the past 18 hours. Her husband, who was in the same apartment, reports severe throbbing frontal headache and nausea. On physical examination, she is lethargic but arousable. Temperature is 37.0 C (98.6 F), blood pressure is 108/64 mm Hg, heart rate is 112/min, and respirations are 22/min. Standard transmission pulse oximetry displays an oxygen saturation of 99% on ambient air. Neurological examination reveals disorientation to date and location, mild ataxia, and bilateral brisk reflexes without focal motor deficit. The maternal skin and mucous membranes appear flushed and pink. Arterial blood gas analysis reveals: pH 7.28, PaCO2 30 mm Hg, PaO2 98 mm Hg, and lactate 4.8 mmol/L. Arterial co-oximetry demonstrates a carboxyhemoglobin (COHb) concentration of 18% (normal: < 3% in non-smokers). Continuous electronic fetal monitoring shows a baseline fetal heart rate of 165/min with minimal variability and absent accelerations. In addition to high-flow 100% normobaric oxygen, which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Immediate transfer for hyperbaric oxygen (HBO) therapy',
        explanation: 'This pregnant patient has carbon monoxide (CO) poisoning. Standard pulse oximeters cannot differentiate between carboxyhemoglobin and oxyhemoglobin because both absorb light at 660 nm similarly, falsely reporting 99–100% saturation. Fetal hemoglobin has an even higher affinity for CO than maternal adult hemoglobin, and fetal clearance of CO is substantially slower, placing the fetus at extreme risk for severe hypoxia, neurological injury, and intrauterine demise. Indications for hyperbaric oxygen (HBO) therapy include: (1) loss of consciousness or severe neurological deficits; (2) COHb level > 25%; (3) pregnancy with COHb level > 15–20% (or fetal distress); (4) severe metabolic lactic acidosis (pH < 7.25); and (5) evidence of myocardial ischemia. HBO therapy accelerates CO dissociation (reducing half-life from 300 minutes on room air to ~20 minutes) and reduces long-term cognitive sequelae.'
      },
      {
        text: 'Continue 100% normobaric oxygen via non-rebreather mask alone until carboxyhemoglobin is < 5%',
        explanation: 'While normobaric oxygen is the immediate initial step, pregnant patients with COHb > 15% and fetal tachycardia with loss of variability have an absolute indication for hyperbaric oxygen to prevent irreversible fetal encephalopathy.'
      },
      {
        text: 'Intravenous administration of hydroxocobalamin bolus for empirical cyanide poisoning',
        explanation: 'Hydroxocobalamin is the antidote for cyanide poisoning (typically from burning synthetic plastics or industrial fires); an unvented kerosene heater exclusively generates carbon monoxide.'
      },
      {
        text: 'Immediate emergent Cesarean delivery of the 22-week fetus under spinal anesthesia',
        explanation: 'A 22-week fetus is pre-viable; emergency delivery is contraindicated and maternal stabilization with hyperbaric oxygen is the only intervention that can salvage both mother and fetus.'
      },
      {
        text: 'Discontinue supplemental oxygen and initiate continuous positive airway pressure (CPAP) on room air',
        explanation: 'Breathing room air prolongs carbon monoxide half-life to over 4 to 5 hours, worsening tissue hypoxia and fetal demise.'
      }
    ]
  },
  {
    code: 'op-c-s2-0079',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Respiratory',
    topic: 'Laryngotracheobronchitis Severity and Nebulized Epinephrine',
    subtopic: 'Stridor at Rest and Corticosteroid Synergy',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize croup (laryngotracheobronchitis, parainfluenza virus): barking seal-like cough, inspiratory stridor, hoarseness. AP neck x-ray shows subglottic narrowing (steeple sign). Mild (no stridor at rest): single dose of oral dexamethasone (0.15-0.6 mg/kg). Moderate-to-severe (stridor AT REST, intercostal retractions): NEBULIZED RACEMIC EPINEPHRINE plus oral/IM dexamethasone, followed by 2-4 hours observation for rebound stridor.',
    citation: 'Smith DK, et al. Croup: Diagnosis and Management. Am Fam Physician. 2018;97(9):575-580. PMID: 29763253.',
    stem:
      'A 16-month-old boy is brought to the pediatric emergency department at 2:00 AM by his parents because of a harsh, barking cough and noisy breathing that worsened acutely overnight. Two days earlier, he had clear rhinorrhea and a low-grade fever. On physical examination, the child is anxious and sitting upright in his mother’s lap. Temperature is 38.2 C (100.8 F), heart rate is 142/min, respirations are 38/min, and oxygen saturation is 94% on ambient air. Continuous high-pitched inspiratory stridor is distinctly audible at rest while the child is quiet and not crying. Inspection of the chest reveals moderate suprasternal and subcostal retractions with each inspiratory effort. Oral examination is deferred to avoid agitating the child, but there is no drooling and the child swallows his saliva normally. Anteroposterior soft tissue neck radiography demonstrates symmetric subglottic tracheal narrowing producing a classic "steeple sign," with a normal epiglottic shadow. Which of the following therapeutic combinations is the most appropriate next step in management?',
    options: [
      {
        text: 'Aerosolized racemic epinephrine nebulization combined with a single dose of oral or intramuscular dexamethasone',
        explanation: 'This child has moderate-to-severe croup (laryngotracheobronchitis), most commonly caused by human parainfluenza virus types 1 and 2. The presence of inspiratory stridor AT REST accompanied by intercostal and suprasternal retractions defines moderate-to-severe disease. Standard evidence-based management consists of: (1) nebulized racemic epinephrine (or L-epinephrine), which stimulates alpha-1 adrenergic receptors in the subglottic mucosal vasculature, causing rapid arteriolar vasoconstriction and shrinking subglottic edema within 10–30 minutes; and (2) systemic corticosteroids (oral or IM dexamethasone 0.6 mg/kg), which reduce inflammatory edema and prevent symptom rebound. Patients must be observed for 2 to 4 hours post-epinephrine to ensure stridor does not recur as the adrenergic vasoconstriction wanes.'
      },
      {
        text: 'Oral amoxicillin-clavulanate therapy combined with cool mist humidification therapy alone',
        explanation: 'Croup is viral in origin (antibiotics are ineffective) and randomized controlled trials have shown that mist therapy does not alter clinical outcomes; it does not treat moderate-to-severe resting stridor.'
      },
      {
        text: 'Immediate awake endotracheal intubation in the emergency department using an uncuffed tube',
        explanation: 'Intubation is required in <1% of croup cases and is reserved for imminent respiratory failure (lethargy, exhaustion, cyanosis); nebulized epinephrine and dexamethasone successfully reverse obstruction in >98% of cases.'
      },
      {
        text: 'Inhaled albuterol sulfate nebulization every 20 minutes for three doses',
        explanation: 'Albuterol is a beta-2 agonist that relaxes bronchial smooth muscle in lower airway obstruction (asthma, bronchiolitis); it has no vasoconstrictive effect on subglottic mucosal edema and causes reflex tachycardia.'
      },
      {
        text: 'Intravenous broad-spectrum vancomycin and ceftriaxone for presumed acute epiglottitis',
        explanation: 'Acute epiglottitis presents with high fever, tripod positioning, muffled "hot potato" voice, drooling, and an enlarged "thumbprint sign" on lateral neck film, whereas this child has a steeple sign, barking cough, and swallows secretions.'
      }
    ]
  },
  {
    code: 'op-c-s2-0080',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Primary Biliary Cholangitis Ursodeoxycholic Acid Pharmacotherapy',
    subtopic: 'Cholestatic Liver Enzymes and Delaying Liver Transplantation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize primary biliary cholangitis (PBC): middle-aged female, severe pruritus, fatigue, elevated alkaline phosphatase and GGT, positive antimitochondrial antibodies (AMA). First-line disease-modifying therapy is oral URSODEOXYCHOLIC ACID (UDCA, 13-15 mg/kg/day). UDCA improves biochemical liver enzymes, slows histological progression of ductopenia and fibrosis, and significantly delays the need for liver transplantation.',
    citation: 'Lindor KD, et al. Primary Biliary Cholangitis: 2018 Practice Guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69(1):394-419. PMID: 30070675.',
    stem:
      'A 48-year-old woman presents to the clinic with persistent generalized pruritus for the past 6 months that is particularly debilitating on the soles of her feet and palms of her hands, waking her from sleep. She also reports progressive, overwhelming fatigue that limits her daily activities. Medical history includes Hashimoto thyroiditis managed with levothyroxine. Physical examination reveals excoriations on both forearms and legs, mild scleral icterus, and small, soft, yellowish xanthelasmas near the medial canthi of both eyes. The liver edge is palpated 2 cm below the right costal margin and is firm and non-tender; the spleen is not palpable. Laboratory evaluation demonstrates: alkaline phosphatase 540 U/L (normal: 44–147 U/L), gamma-glutamyl transferase (GGT) 320 U/L (normal: 5–40 U/L), AST 62 U/L, ALT 68 U/L, total bilirubin 2.2 mg/dL with direct bilirubin 1.6 mg/dL, and total cholesterol 320 mg/dL. Serological testing reveals an antimitochondrial antibody (AMA) titer of 1:1,280. Right upper quadrant ultrasonography reveals normal intrahepatic and extrahepatic biliary ducts without gallstones. Which of the following is the most appropriate first-line pharmacotherapeutic agent to halt disease progression and improve transplant-free survival in this patient?',
    options: [
      {
        text: 'Oral ursodeoxycholic acid (13 to 15 mg/kg daily)',
        explanation: 'The patient has primary biliary cholangitis (PBC), an autoimmune cholestatic liver disease characterized by T-cell-mediated granulomatous destruction of small-to-medium intrahepatic interlobular bile ducts. First-line therapy per AASLD and EASL guidelines is oral ursodeoxycholic acid (UDCA) dosed at 13 to 15 mg/kg/day. UDCA is a hydrophilic tertiary bile acid that replaces toxic, hydrophobic endogenous bile acids in the circulating pool, stimulates hepatobiliary secretion, protects cholangiocytes from bile acid-induced apoptosis, and exerts immunomodulatory actions. UDCA normalizes liver biochemistry, slows histological fibrosis progression, and significantly prolongs transplant-free survival.'
      },
      {
        text: 'Oral prednisone pulse therapy for 6 months followed by azathioprine maintenance',
        explanation: 'Systemic immunosuppression with corticosteroids and azathioprine is the standard treatment for autoimmune hepatitis (AIH); in PBC, immunosuppression lacks proven survival benefit and worsens accelerated osteoporosis.'
      },
      {
        text: 'Endoscopic retrograde cholangiopancreatography with balloon dilation of the common bile duct',
        explanation: 'ERCP is indicated for dominant strictures in primary sclerosing cholangitis (PSC) or choledocholithiasis; in PBC, extrahepatic ducts are structurally normal and pathology is restricted to microscopic intrahepatic interlobular ducts.'
      },
      {
        text: 'Oral cholestyramine resin monotherapy administered at 4 grams four times daily',
        explanation: 'Cholestyramine is a bile acid sequestrant that alleviates pruritus, but it has no effect on disease progression, ductular damage, or mortality; it is an adjunctive symptomatic agent, not disease-modifying therapy.'
      },
      {
        text: 'Referral for immediate deceased-donor orthotopic liver transplantation evaluation',
        explanation: 'Liver transplantation is indicated for decompensated end-stage cirrhosis (MELD score >= 15, refractory ascites, encephalopathy) or intractable severe pruritus failing all medical therapies, not newly diagnosed early-stage PBC.'
      }
    ]
  },
  {
    code: 'op-c-s2-0081',
    exam: 'Step 2 CK',
    subject: 'Surgery',
    system: 'General Principles',
    topic: 'Malignant Hyperthermia Dantrolene and Trigger Discontinuation',
    subtopic: 'Hypercarbia Ryanodine Receptor Defect and Masseter Spasm',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize malignant hyperthermia: triggered by volatile inhalational anesthetics (sevoflurane, desflurane) or succinylcholine in patients with RYR1 mutations. Earliest sign is abrupt, unexplained rise in end-tidal CO2 (hypercarbia) refractory to hyperventilation, followed by masseter spasm/generalized rigidity, tachycardia, hyperthermia (late sign), and rhabdomyolysis. Immediate management: 1. Discontinue triggering agents; 2. Hyperventilate with 100% O2; 3. Administer IV DANTROLENE (blocks ryanodine receptor calcium release); 4. Active cooling.',
    citation: 'Rosenberg H, et al. Malignant hyperthermia. Orphanet J Rare Dis. 2015;10:93. PMID: 26242332.',
    stem:
      'A 22-year-old man undergoes general anesthesia for an urgent open reduction and internal fixation of a fractured femur sustained in a skiing accident. Anesthesia is induced with intravenous propofol and succinylcholine, and maintained with inhaled sevoflurane and nitrous oxide in 50% oxygen. Twenty minutes into the operation, the anesthesiologist notes that the patient’s end-tidal CO2 (ETCO2) has risen steadily from 38 mm Hg to 78 mm Hg despite tripling the minute ventilation on the mechanical ventilator. Heart rate increases to 148/min, and blood pressure rises to 174/104 mm Hg. Physical examination reveals generalized, board-like skeletal muscle rigidity and tightly clenched masseter muscles. Over the subsequent 10 minutes, the patient’s core body temperature climbs rapidly from 37.2 C to 40.2 C (104.4 F). Arterial blood gas demonstrates a severe mixed metabolic and respiratory acidosis: pH 7.04, PaCO2 82 mm Hg, PaO2 110 mm Hg, and lactate 12 mmol/L. Serum potassium is markedly elevated at 6.8 mEq/L, and creatine kinase is 28,000 U/L. Which of the following is the most appropriate immediate sequence of interventions?',
    options: [
      {
        text: 'Discontinue sevoflurane immediately, hyperventilate with 100% oxygen, and administer intravenous dantrolene sodium',
        explanation: 'This patient has acute malignant hyperthermia (MH), a pharmacogenetic hypermetabolic crisis triggered by volatile halogenated anesthetics (sevoflurane, desflurane, isoflurane) or depolarizing neuromuscular blockers (succinylcholine). MH is caused by gain-of-function mutations in the skeletal muscle ryanodine receptor (RYR1) or dihydropyridine receptor (CACNA1S), leading to uncontrolled calcium release from the sarcoplasmic reticulum into the cytoplasm. This drives sustained muscle contractions, massive ATP consumption, aerobic exhaustion, and muscle necrosis. The earliest sign is a dramatic rise in end-tidal CO2 refractory to hyperventilation. The mandatory immediate actions are: (1) stop volatile agents immediately; (2) hyperventilate with 100% O2 at high flows; and (3) administer IV dantrolene sodium (2.5 mg/kg IV push, repeated until symptoms subside), which binds the ryanodine receptor and halts calcium efflux.'
      },
      {
        text: 'Administer intravenous succinylcholine bolus to achieve complete skeletal muscle relaxation',
        explanation: 'Succinylcholine is a potent primary trigger of malignant hyperthermia; administering more succinylcholine will accelerate fatal hyperkalemic cardiac arrest.'
      },
      {
        text: 'Administer intravenous calcium gluconate followed by high-dose broad-spectrum vancomycin for septic shock',
        explanation: 'While calcium gluconate treats hyperkalemic ECG changes, calcium infusion can exacerbate intracellular calcium loading in MH; this is a metabolic muscle crisis, not septic shock.'
      },
      {
        text: 'Administer oral bromocriptine via nasogastric tube and intravenous diphenhydramine',
        explanation: 'Bromocriptine is used for neuroleptic malignant syndrome (NMS) caused by dopamine antagonists; it has no role in acute intraoperative volatile-anesthetic-induced malignant hyperthermia.'
      },
      {
        text: 'Increase sevoflurane concentration to deepen general anesthesia and abolish sympathetic hyperactivation',
        explanation: 'Increasing sevoflurane concentration deepens the toxic insult and will cause rapid intraoperative cardiovascular collapse and death.'
      }
    ]
  },
  {
    code: 'op-c-s2-0082',
    exam: 'Step 2 CK',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Placental Abruption versus Uterine Rupture Presentation',
    subtopic: 'Loss of Station Severe Pain and Prior Uterine Scar Disruption',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Distinguish placental abruption from uterine rupture in a laboring woman with a prior Cesarean scar. Placental abruption presents with painful vaginal bleeding, uterine hypertonicity/tachysystole, and dark blood. Uterine rupture presents with sudden severe abdominal pain, cessation of previously regular uterine contractions, palpable fetal parts outside the uterine contour, and loss of fetal station (fetal head recedes upward), accompanied by profound fetal bradycardia. Immediate emergent laparotomy is required.',
    citation: 'American College of Obstetricians and Gynecologists. ACOG Practice Bulletin No. 205: Vaginal Birth After Cesarean Delivery. Obstet Gynecol. 2019;133(2):e110-e127. PMID: 30681543.',
    stem:
      'A 31-year-old woman, gravida 2, para 1, at 39 weeks gestation is undergoing a trial of labor after Cesarean delivery (TOLAC). Her prior delivery was 3 years ago via low-transverse Cesarean delivery for breech presentation. She has been in active labor for 4 hours, and her cervix is 7 cm dilated with the vertex at +1 station. She has an epidural infusion providing good analgesia. Suddenly, she complains of excruciating, "tearing" lower abdominal pain that breaks through her epidural block. Immediately following this event, external tocodynamometry reveals complete cessation of uterine contractions, and intrauterine resting pressure drops to zero. Maternal blood pressure falls to 84/52 mm Hg, and maternal heart rate rises to 124/min. Continuous electronic fetal monitoring reveals sudden, prolonged fetal bradycardia with heart rate dropping to 60/min. Vaginal examination reveals 20 mL of red blood, and the fetal vertex can no longer be palpated at +1 station, having receded superiorly above the pelvic brim (loss of fetal station). Abdominal examination reveals a focal protrusion in the maternal anterior abdominal wall where fetal limbs are palpable directly beneath the maternal skin. Which of the following is the most likely diagnosis?',
    options: [
      {
        text: 'Complete uterine rupture through the prior hysterotomy scar',
        explanation: 'The presentation is classic for complete uterine rupture during a trial of labor after Cesarean delivery (TOLAC). The prior uterine scar is a major structural vulnerability. The pathognomonic clinical hallmarks of uterine rupture are: (1) sudden, severe, breakthrough abdominal pain; (2) abrupt cessation of previously regular uterine contractions; (3) loss of fetal station (recession of the presenting part upward into the peritoneal cavity); (4) palpable fetal parts outside the uterine wall; (5) maternal hemodynamic instability/hypovolemic shock; and (6) profound, persistent fetal bradycardia on electronic fetal monitoring. Uterine rupture is a catastrophic obstetrical emergency requiring immediate emergent laparotomy for fetal delivery and uterine repair or hysterectomy.'
      },
      {
        text: 'Severe concealed placental abruption with retroplacental clot formation',
        explanation: 'Placental abruption causes painful vaginal bleeding and marked uterine hypertonicity/tachysystole (board-like, tensely contracted uterus), whereas uterine rupture causes sudden cessation of contractions, loss of uterine tone, and loss of fetal station.'
      },
      {
        text: 'Rupture of an umbilical vasa previa during spontaneous membrane rupture',
        explanation: 'Vasa previa rupture produces painless vaginal bleeding immediately following membrane rupture, accompanied by rapid fetal exsanguination and fetal sinusoidal rhythm/bradycardia, with completely stable maternal vitals and preserved uterine contractions.'
      },
      {
        text: 'Inversion of the puerperal uterus into the vaginal canal',
        explanation: 'Uterine inversion occurs strictly in the postpartum third stage after delivery of the infant, typically provoked by excessive traction on the umbilical cord, not during active labor with the fetus still in utero.'
      },
      {
        text: 'Chorioamnionitis complicated by intra-amniotic septic shock',
        explanation: 'Chorioamnionitis presents with maternal fever, foul-smelling amniotic fluid, maternal and fetal tachycardia, and uterine tenderness, without loss of fetal station or palpable fetal limbs beneath maternal abdominal skin.'
      }
    ]
  },
  {
    code: 'op-c-s2-0083',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Hematology',
    topic: 'Immune Thrombocytopenia in Children Observation versus Pharmacotherapy',
    subtopic: 'Platelet Cutoffs Mucosal Bleeding and Spontaneous Remission',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize pediatric immune thrombocytopenia (ITP): previously healthy child (ages 2-5) presenting with sudden petechiae/purpura 1-3 weeks after a viral infection. Isolated profound thrombocytopenia with normal Hb and WBC. In children with cutaneous bleeding ONLY (petechiae, purpura, bruising), OBSERVATION ALONE is recommended regardless of platelet count because >70-80% achieve spontaneous complete remission within 6 months. Pharmacotherapy (IVIG or systemic corticosteroids) is reserved for active mucosal bleeding (epistaxis, GI bleeding) or life-threatening hemorrhage.',
    citation: 'Neunert C, et al. American Society of Hematology 2019 guidelines for immune thrombocytopenia. Blood Adv. 2019;3(23):3829-3866. PMID: 31794604.',
    stem:
      'A 3-year-old previously healthy boy is brought to the pediatric clinic by his mother because she noticed widespread pinhead-sized red spots and scattered bruises on his legs and arms that appeared overnight. Two weeks ago, the child had a mild upper respiratory illness that resolved without medication. He is acting playfully and has had no fever, epistaxis, hematuria, melena, joint pain, or headaches. Physical examination reveals an active, alert toddler in no distress. Physical examination is notable for numerous non-blanching petechiae and several small, superficial ecchymoses over his pretibial areas, thighs, and upper arms. Oral cavity examination reveals moist, pink mucous membranes with completely clear gingivae, intact tongue, and no wet purpura or petechiae. There is no lymphadenopathy, and the liver and spleen are not palpable. Complete blood count demonstrates: hemoglobin 13.2 g/dL, white blood cell count 7,400/microL with normal differential, and platelet count 14,000/microL (normal: 150,000–450,000/microL). Peripheral blood smear reveals decreased platelets that are normal-to-large in size, with completely normal erythrocyte and leukocyte morphology. According to current American Society of Hematology (ASH) guidelines, which of the following is the most appropriate management plan?',
    options: [
      {
        text: 'Close clinical observation and counseling on avoidance of contact sports without pharmacotherapy',
        explanation: 'This child has newly diagnosed immune thrombocytopenia (ITP), an autoimmune disorder in which IgG autoantibodies target platelet membrane glycoproteins (GpIIb/IIIa), causing splenic macrophage destruction. Unlike adult ITP (which is chronic and frequently requires pharmacotherapy), pediatric ITP is typically an acute, self-limiting condition following a viral trigger, with >70–80% of children recovering spontaneously within 6 months. Per ASH guidelines, children with isolated cutaneous bleeding alone (petechiae and bruising, with no active mucosal or gastrointestinal bleeding) should be managed with observation alone, regardless of the platelet count. Pharmacotherapy (intravenous immunoglobulin [IVIG] or short-course corticosteroids) is reserved for patients with active mucosal bleeding (epistaxis, hematuria, GI bleeding) or internal hemorrhage.'
      },
      {
        text: 'Immediate transfusion of two units of irradiated, ABO-matched platelets',
        explanation: 'Platelet transfusions in ITP are rapidly destroyed by circulating antiplatelet autoantibodies within minutes to hours; they are strictly reserved for life-threatening intracranial or internal hemorrhage.'
      },
      {
        text: 'Initiation of high-dose oral prednisone (2 to 4 mg/kg daily) for 4 weeks',
        explanation: 'Systemic corticosteroids carry substantial side effects (hypertension, mood swings, growth impairment) and are not indicated in pediatric ITP with skin-only manifestations.'
      },
      {
        text: 'Performance of an emergent bone marrow aspiration and core biopsy',
        explanation: 'Bone marrow biopsy is not required in children with classic presentation of ITP (isolated thrombocytopenia without anemia, leukopenia, bone pain, or organomegaly).'
      },
      {
        text: 'Immediate referral for urgent laparoscopic splenectomy',
        explanation: 'Splenectomy is a second-line or third-line option reserved for chronic refractory ITP persisting beyond 12 months with severe bleeding symptoms, never for acute newly diagnosed disease.'
      }
    ]
  },
  {
    code: 'op-c-s2-0084',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Subarachnoid Hemorrhage Non-Contrast Head CT and Lumbar Puncture',
    subtopic: 'Thunderclap Headache Sensitivity Decline and Xanthochromia',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize subarachnoid hemorrhage (SAH, ruptured saccular berry aneurysm): acute severe "thunderclap" headache peaking within seconds. Non-contrast head CT is initial test (sensitivity > 98% within 6 hours, but drops to ~85% by 24 hours). If non-contrast head CT is negative or equivocal, MANDATORY next step is LUMBAR PUNCTURE. CSF findings in SAH: elevated opening pressure, persistent RBC count across tubes 1 to 4, and XANTHOCHROMIA (yellow supernatant from hemoglobin degradation to bilirubin).',
    citation: 'Connolly ES Jr, et al. Guidelines for the management of aneurysmal subarachnoid hemorrhage. Stroke. 2012;43(6):1711-1737. PMID: 22556195.',
    stem:
      'A 44-year-old woman presents to the emergency department with a sudden, agonizing occipital headache that reached maximum, 10/10 intensity within 30 seconds while she was lifting a heavy box 18 hours ago. She describes it as "the most violent and horrifying headache of my life." The headache has been accompanied by repeated vomiting, neck stiffness, and photophobia. She has a history of cigarette smoking and hypertension. On physical examination, her blood pressure is 162/96 mm Hg and heart rate is 76/min. She is alert and oriented to person, place, and date, but keeps her eyes closed due to light sensitivity. Neurological examination reveals marked resistance to passive neck flexion (nuchal rigidity) without focal cranial nerve palsies, motor weakness, or sensory deficits. A non-contrast head CT scan performed 19 hours after headache onset is reviewed by the attending radiologist and reported as completely normal, with no evidence of subarachnoid hyperdensity, ventricular enlargement, or mass effect. Which of the following is the most appropriate next step in management to confirm or exclude the diagnosis?',
    options: [
      {
        text: 'Perform a diagnostic lumbar puncture with cerebrospinal fluid spectrophotometry to evaluate for xanthochromia',
        explanation: 'This patient has classic symptoms of aneurysmal subarachnoid hemorrhage (SAH) presenting with a "thunderclap" headache peaking within seconds. While modern non-contrast head CT has a sensitivity > 98% within the first 6 hours of headache onset, its sensitivity drops precipitously to ~85% by 24 hours and < 50% by 1 week as subarachnoid red blood cells hemolyze and clear. Therefore, if clinical suspicion for SAH remains high and the head CT is negative or equivocal, a lumbar puncture is mandatory. Hallmarks of SAH on LP: elevated opening pressure, non-clearing erythrocytes from tube 1 to tube 4 (differentiating SAH from a traumatic tap), and xanthochromia (yellow CSF supernatant from oxyhemoglobin enzymatic conversion to bilirubin, appearing >= 6–12 hours after hemorrhage).'
      },
      {
        text: 'Reassure the patient that the normal CT rules out subarachnoid hemorrhage and discharge with oral sumatriptan',
        explanation: 'Discharging a patient with a thunderclap headache after a negative CT without lumbar puncture misses aneurysmal SAH in up to 5–10% of cases, leading to catastrophic recurrent aneurysm re-bleeding and death.'
      },
      {
        text: 'Perform an electroencephalogram (EEG) to evaluate for non-convulsive status epilepticus',
        explanation: 'EEG evaluates seizure activity; it does not diagnose acute intracranial vascular rupture and delays essential diagnostic spinal fluid evaluation.'
      },
      {
        text: 'Administer high-dose intravenous methylprednisolone for suspected status migrainosus',
        explanation: 'Corticosteroids are not indicated for intracranial hemorrhage, and assuming status migrainosus without ruling out SAH in a first-onset explosive thunderclap headache is medical negligence.'
      },
      {
        text: 'Order non-invasive magnetic resonance venography of the head to rule out pseudotumor cerebri',
        explanation: 'Idiopathic intracranial hypertension (pseudotumor cerebri) presents with chronic headache, transient visual obscurations, and papilledema, not sudden-onset thunderclap headache with nuchal rigidity.'
      }
    ]
  },
  {
    code: 'op-c-s2-0085',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Musculoskeletal',
    topic: 'Septic Arthritis of the Pediatric Hip Kocher Criteria and Drainage',
    subtopic: 'Avascular Necrosis Prevention and Arthrocentesis Urgency',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize septic arthritis of the pediatric hip: Kocher criteria (1. Inability to bear weight; 2. Temperature > 38.5 C; 3. ESR > 40 mm/h; 4. WBC > 12,000/microL). Presence of 3-4 criteria gives >90% probability of septic arthritis. Hip is held flexed, abducted, and externally rotated. Ultrasound confirms joint effusion. Emergent surgical arthrocentesis and arthrotomy/drainage is mandatory to prevent increased intracapsular pressure from causing avascular necrosis of the femoral head.',
    citation: 'Kocher MS, et al. Differentiating between septic arthritis and transient synovitis of the hip in children: an evidence-based clinical prediction algorithm. J Bone Joint Surg Am. 1999;81(12):1662-1670. PMID: 10608376.',
    stem:
      'A 4-year-old boy is brought to the emergency department because of acute refusal to walk or bear weight on his right leg since this morning. Yesterday, his parents noticed a mild limp, and he complained of right groin and thigh pain. Medical history is unremarkable except for a mild viral illness 10 days ago. On physical examination, the child appears ill and irritable. Temperature is 38.8 C (101.8 F), heart rate is 132/min, blood pressure is 98/62 mm Hg, and respirations are 24/min. The child refuses to stand. He lies supine with his right hip held in slight flexion, abduction, and external rotation. Any passive internal rotation or extension of the right hip elicits agonizing screams and resistance. The right knee and ankle joints have full, painless range of motion. Laboratory evaluation demonstrates: white blood cell count 16,800/microL with 82% neutrophils, ESR 58 mm/h, and C-reactive protein 6.8 mg/dL (normal: < 0.5 mg/dL). Plain radiography of the right hip is unremarkable with no cortical destruction or fracture. Bedside ultrasonography reveals a significant fluid effusion distending the right hip joint capsule, with no effusion in the left hip. What is the most appropriate next step in management?',
    options: [
      {
        text: 'Emergent needle arthrocentesis and surgical drainage of the right hip joint under sterile conditions',
        explanation: 'This child meets all four Kocher criteria for septic arthritis of the hip: (1) inability to bear weight; (2) temperature > 38.5 C; (3) WBC count > 12,000/microL; and (4) ESR > 40 mm/h. Four of four criteria predict a >90% probability of septic arthritis (differentiating it from benign, self-limited transient synovitis). In the hip, the joint capsule is tightly unyielding. Purulent exudate rapidly increases intracapsular pressure, exceeding femoral epiphyseal capillary perfusion pressure and leading to tamponade of retinacular vessels, causing irreversible avascular necrosis (AVN) of the femoral head and permanent chondrolysis within 12 to 24 hours. Immediate joint aspiration and surgical drainage (arthrotomy or arthroscopic decompression) combined with intravenous antibiotics (covering Staphylococcus aureus) is mandatory.'
      },
      {
        text: 'Oral high-dose ibuprofen therapy and observation at home for transient synovitis of the hip',
        explanation: 'Transient synovitis occurs in well-appearing children who are often afebrile with normal or mildly elevated inflammatory markers and can bear weight; treating a child with 4/4 Kocher criteria with NSAIDs causes permanent hip destruction.'
      },
      {
        text: 'Hospital admission for 48 hours of traction followed by non-weight-bearing physical therapy',
        explanation: 'Buck traction does not decompress purulent intracapsular fluid; delaying surgical drainage results in cartilage lysis and femoral head avascular necrosis.'
      },
      {
        text: 'Magnetic resonance imaging of the pelvis under general anesthesia before considering intervention',
        explanation: 'Bedside ultrasound has already documented a large hip effusion in the presence of 4/4 Kocher criteria; waiting for an MRI delays emergency surgical decompression.'
      },
      {
        text: 'Initiation of oral cephalexin monotherapy and follow-up in the pediatric clinic in 72 hours',
        explanation: 'Oral antibiotics are completely insufficient to penetrate a high-pressure purulent joint space and cannot relieve intracapsular mechanical ischemia.'
      }
    ]
  },
  {
    code: 'op-c-s2-0086',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Cardiovascular',
    topic: 'Chronic Venous Insufficiency Compression Therapy and ABI',
    subtopic: 'Stasis Dermatitis Hemosiderin Deposition and Medial Malleolar Ulcers',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize chronic venous insufficiency (CVI): bilateral pitting edema, aching legs worse with standing and better with elevation, stasis dermatitis, brawny hyperpigmentation (hemosiderin), and ulceration over the medial malleolus. First-line conservative management: leg elevation, exercise, and graduated compression stockings (20-30 mm Hg). Crucial prerequisite: always verify adequate arterial perfusion with Ankle-Brachial Index (ABI > 0.8) before applying compression to avoid ischemic necrosis.',
    citation: 'Eberhardt RT, Raffetto JD. Chronic venous insufficiency. Circulation. 2014;130(4):333-346. PMID: 25052423.',
    stem:
      'A 62-year-old retired assembly-line worker presents to the primary care clinic with a 2-year history of bilateral lower extremity aching, heaviness, and swelling that steadily worsens toward the end of the day after standing and is significantly relieved by elevating his legs above heart level overnight. Physical examination reveals bilateral 2+ pitting pretibial and ankle edema. The skin over the lower third of both shins and ankles appears thickened, taut, and hyperpigmented with a reddish-brown, brawny discoloration (stasis dermatitis and hemosiderin staining). Just superior to the right medial malleolus, there is a shallow, irregularly shaped 2.5-cm ulcer with a moist, red granulation base and clear serous exudate, without purulence or surrounding erythema. Sensation to light touch is intact. Bilateral dorsalis pedis and posterior tibial arterial pulses are strong (2+). Handheld Doppler examination demonstrates an ankle-brachial index (ABI) of 1.05 in the right leg and 1.10 in the left leg. Which of the following is the most appropriate initial foundational therapy for this patient?',
    options: [
      {
        text: 'Graduated compression stockings (20 to 30 mm Hg) combined with scheduled leg elevation',
        explanation: 'This patient has chronic venous insufficiency (CVI) complicated by stasis dermatitis and a classic venous stasis ulcer located over the medial malleolus. CVI is caused by venous valvular incompetence (reflux) or outflow obstruction in the deep and superficial venous systems, leading to ambulatory venous hypertension, extravasation of red blood cells into the dermis (where hemoglobin breakdown forms hemosiderin brawny hyperpigmentation), and tissue breakdown. The cornerstone of conservative therapy is graduated compression stockings (20–30 or 30–40 mm Hg) combined with regular leg elevation above the heart. Compression counteracts venous hypertension, improves venous return, accelerates ulcer healing, and prevents recurrence. Verifying normal arterial perfusion (ABI > 0.8) is essential before applying compression to avoid ischemic necrosis.'
      },
      {
        text: 'Oral furosemide 40 mg daily monotherapy without mechanical compression',
        explanation: 'Loop diuretics do not correct local venous valvular reflux and cause intravascular volume depletion, orthostatic hypotension, and electrolyte disturbances without healing venous ulcers.'
      },
      {
        text: 'Empiric oral cephalexin therapy for 14 days targeting bacterial cellulitis',
        explanation: 'Stasis dermatitis is a non-infectious inflammatory reaction to venous hypertension; unnecessary antibiotics do not heal venous ulcers and promote antimicrobial resistance.'
      },
      {
        text: 'Strict prolonged absolute bed rest with leg dependency below the level of the pelvis',
        explanation: 'Dependent positioning exacerbates venous pooling and venous hypertension, accelerating tissue edema and ulceration; elevation and walking are encouraged.'
      },
      {
        text: 'Emergent surgical ligation and stripping of the bilateral common femoral veins',
        explanation: 'Stripping deep veins (femoral vein) is contraindicated as it obliterates the primary deep venous drainage of the limb; surgical ablation is limited to superficial refluxing veins (great saphenous).'
      }
    ]
  },
  {
    code: 'op-c-s2-0087',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Gastrointestinal',
    topic: 'Acute Mesenteric Ischemia Pain Out of Proportion and CT Angiography',
    subtopic: 'Superior Mesenteric Artery Embolism and Lactic Acidosis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute mesenteric ischemia (AMI): severe, sudden periumbilical abdominal pain out of proportion to physical exam findings (abdomen initially soft, non-tender, non-distended). History of atrial fibrillation or recent MI. Leukocytosis and elevated lactic acidosis indicate bowel infarction. Diagnostic test of choice is CT ANGIOGRAPHY of the abdomen without oral contrast. Emergent revascularization is mandatory to prevent transmural gangrene.',
    citation: 'Bala M, et al. Acute mesenteric ischemia: guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2017;12:38. PMID: 28790995.',
    stem:
      'A 73-year-old woman with a history of hypertension, coronary artery disease, and paroxysmal atrial fibrillation managed with diltiazem presents to the emergency department with sudden, excruciating, constant periumbilical abdominal pain that began 3 hours ago. She has had two loose bowel movements containing dark guaiac-positive stool and has vomited twice. On physical examination, she is crying in severe agony and clutching her abdomen. Temperature is 37.6 C (99.7 F), blood pressure is 154/92 mm Hg, heart rate is 116/min and irregularly irregular, and respirations are 24/min. Despite her extreme pain, palpation of the abdomen reveals that the abdominal wall is soft and completely non-distended, with only minimal, vague tenderness and no involuntary guarding, rebound tenderness, or rigidity. Bowel sounds are hypoactive. Complete blood count reveals a leukocytosis of 18,200/microL with 85% neutrophils. Arterial blood gas demonstrates: pH 7.29, PaCO2 31 mm Hg, PaO2 92 mm Hg, bicarbonate 15 mEq/L, and serum lactate 4.6 mmol/L (normal: < 2.0 mmol/L). Which of the following is the most appropriate next diagnostic study to confirm the diagnosis?',
    options: [
      {
        text: 'Computed tomography angiography (CTA) of the abdomen and pelvis without oral contrast',
        explanation: 'The classic hallmark of acute mesenteric ischemia (AMI) is severe, excruciating abdominal pain "out of proportion" to physical examination findings (an abdomen that is completely soft without peritoneal signs during early ischemia). The most common etiology (>50%) is acute superior mesenteric artery (SMA) thromboembolism originating from the left atrium in patients with atrial fibrillation. As bowel hypoperfusion progresses, mucosal ischemia triggers anaerobic metabolism, causing metabolic lactic acidosis and leukocytosis. Multidetector CT angiography (CTA) without oral contrast (to prevent intraluminal contrast from obscuring vessel wall enhancement) is the imaging modality of choice, with sensitivity and specificity >95% for identifying arterial occlusion and bowel wall hypoenhancement.'
      },
      {
        text: 'Upright plain abdominal radiography to detect pneumoperitoneum',
        explanation: 'Plain abdominal x-rays are completely normal in early ischemia and show findings (pneumatosis intestinalis, portal venous gas) only after transmural bowel infarction and gangrene have occurred.'
      },
      {
        text: 'Upper gastrointestinal endoscopy to evaluate for peptic ulcer perforation',
        explanation: 'Endoscopy cannot visualize mesenteric arterial vasculature and insufflation of gas into an ischemic small bowel risks acute perforation.'
      },
      {
        text: 'Technetium-99m labeled red blood cell scintigraphy for gastrointestinal bleeding',
        explanation: 'RBC scintigraphy localizes slow, obscure lower GI bleeding; it has no role in acute arterial occlusion and delays life-saving vascular imaging.'
      },
      {
        text: 'Abdominal ultrasonography with mesenteric duplex scanning under fasting conditions',
        explanation: 'Duplex ultrasound is technically limited by overlying bowel gas, requires patient cooperation, and misses distal emboli, making it inappropriate for acute emergency evaluation.'
      }
    ]
  },
  {
    code: 'op-c-s2-0088',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Dermatology',
    topic: 'Erysipelas versus Cellulitis Anatomical Level and Streptococcus',
    subtopic: 'Upper Dermis Lymphatics Sharply Demarcated Margins and Group A Strep',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Distinguish erysipelas from cellulitis: Erysipelas involves the upper dermis and superficial cutaneous lymphatics; it presents abruptly with high fever, chills, and bright red, raised, SHARPLY DEMARCATED, indurated plaques (orange-peel appearance). The overwhelming causative organism is Streptococcus pyogenes (Group A Strep). Cellulitis involves the deeper dermis and subcutaneous fat, is poorly demarcated, and has a more indolent onset.',
    citation: 'Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422.',
    stem:
      'A 54-year-old woman presents to the emergency department with sudden-onset high fevers, shaking chills, and a painful, rapidly spreading red rash on her left lower leg that developed over the past 12 hours. On physical examination, her temperature is 39.1 C (102.4 F), blood pressure is 128/78 mm Hg, and heart rate is 106/min. Examination of the left lower extremity reveals a warm, tender, fiery-red, shiny plaque over the anterior pretibial region that is distinctly elevated above the surrounding skin and has clear, sharply demarcated, palpable margins. The skin surface displays mild surface dimpling resembling the skin of an orange (peau d’orange). Several tender, enlarged left inguinal lymph nodes are palpable. Complete blood count demonstrates a leukocytosis of 15,400/microL with 80% neutrophils and 8% band forms. Blood cultures are drawn. Which of the following microbiological pathogens is the most common cause of this specific infection, and what anatomical layer of the skin is primarily involved?',
    options: [
      {
        text: 'Streptococcus pyogenes (Group A Streptococcus) primarily involving the superficial dermis and cutaneous lymphatics',
        explanation: 'This patient has erysipelas, a distinct superficial form of cellulitis. Clinical features that differentiate erysipelas from classic cellulitis include: (1) abrupt onset with prominent systemic toxicity (high fever, chills); (2) bright fiery red color; (3) distinctly raised, sharply demarcated borders separating involved from uninvolved skin; and (4) prominent superficial lymphatic involvement (peau d\'orange texture and regional lymphadenopathy). Histologically, the infection is localized to the upper dermis and superficial lymphatics. The overwhelming causative pathogen (>80–90%) is Streptococcus pyogenes (Group A Streptococcus), followed by other beta-hemolytic streptococci (Groups B, C, G). In contrast, deeper cellulitis involves the deep dermis and subcutaneous fat, has indistinct flat borders, and can be caused by both Streptococci and Staphylococcus aureus.'
      },
      {
        text: 'Staphylococcus aureus primarily involving the deep subcutaneous adipose tissue and fascial planes',
        explanation: 'Deep subcutaneous adipose involvement produces standard cellulitis with flat, indistinct, poorly demarcated margins, rather than sharply raised superficial lymphatic plaques.'
      },
      {
        text: 'Pseudomonas aeruginosa primarily involving the perivascular adventitia of dermal arterioles',
        explanation: 'Pseudomonas causes ecthyma gangrenosum (hemorrhagic bullae rapidly evolving into necrotic black eschars) in neutropenic patients, not classic erysipelas.'
      },
      {
        text: 'Clostridium perfringens primarily causing liquefactive necrosis of skeletal muscle myofibers',
        explanation: 'Clostridium perfringens causes clostridial myonecrosis (gas gangrene), presenting with crepitus, dishwater discharge, severe systemic toxemia, and soft-tissue gas on imaging.'
      },
      {
        text: 'Corynebacterium minutissimum primarily confined to the stratum corneum of intertriginous skin',
        explanation: 'Corynebacterium minutissimum causes erythrasma, a chronic, non-inflammatory brownish-red macular eruption in intertriginous folds that fluoresces coral-red under Wood lamp.'
      }
    ]
  },
  {
    code: 'op-c-s2-0089',
    exam: 'Step 2 CK',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Bipolar I Acute Mania Mood Stabilizer and Antipsychotic Combination',
    subtopic: 'Severe Mania First-Line Regimens and Antidepressant Contraindications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute severe mania in Bipolar I disorder (DIG FAST: Distractibility, Impulsivity/Indiscretion, Grandiosity, Flight of ideas, Activity increase, Sleep deficit, Talkativeness). For acute severe mania with agitation or psychosis, FIRST-LINE therapy is combination therapy with a mood stabilizer (lithium or valproate) PLUS an atypical antipsychotic (quetiapine, aripiprazole, olanzapine, risperidone). Monotherapy is reserved for mild mania. Antidepressants are contraindicated as they precipitate mania or rapid cycling.',
    citation: 'Yatham LN, et al. Canadian Network for Mood and Anxiety Treatments (CANMAT) and International Society for Bipolar Disorders (ISBD) 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018;20(2):97-170. PMID: 29536760.',
    stem:
      'A 27-year-old man is brought to the emergency department by police after he was found at 3:00 AM preaching naked on a highway overpass, shouting that he is an appointed celestial prophet who has unlocked the mathematical secret to unlimited clean energy. His family states that over the past 8 days, he has slept less than 1 hour each night, spent his entire life savings on high-risk lottery tickets, and dismantled his apartment walls to search for electronic transmitters. On examination, he is pacing agitatedly, intensely irritable, and displays rapid, pressured speech that is virtually impossible to interrupt. He exhibits prominent flight of ideas and delusions of grandiosity. Vital signs: blood pressure 144/88 mm Hg, heart rate 110/min, and temperature 37.1 C. Urine toxicology screen is negative for amphetamines, cocaine, cannabis, opioids, and phencyclidine. Routine metabolic panel, thyroid-stimulating hormone, and complete blood count are completely normal. Which of the following pharmacological strategies is the most appropriate initial treatment for this patient’s acute manic episode?',
    options: [
      {
        text: 'Combination therapy with an oral mood stabilizer (lithium or valproate) plus an atypical antipsychotic (such as quetiapine or olanzapine)',
        explanation: 'This patient is experiencing an acute severe manic episode with psychotic features, fulfilling criteria for Bipolar I disorder. Clinical practice guidelines (CANMAT/ISBD, APA) recommend combination therapy consisting of a mood stabilizer (lithium or valproate) PLUS a second-generation (atypical) antipsychotic (such as quetiapine, olanzapine, aripiprazole, or risperidone) as the most effective first-line strategy for severe acute mania. Combination therapy achieves significantly faster antimanic response, higher remission rates, and better control of agitation and psychotic symptoms than monotherapy alone. Monotherapy is reserved only for mild, non-psychotic hypomania or mild mania.'
      },
      {
        text: 'Oral fluoxetine monotherapy titrated to maximal therapeutic dosage',
        explanation: 'Antidepressants (SSRIs) are strictly contraindicated in acute mania because they destabilize mood, aggravate mania, induce rapid cycling, and worsen psychosis.'
      },
      {
        text: 'Oral bupropion combined with scheduled cognitive behavioral therapy',
        explanation: 'Bupropion is an antidepressant that increases dopamine and norepinephrine, exacerbating manic symptoms and psychosis; psychotherapy cannot be utilized during acute psychotic agitation.'
      },
      {
        text: 'Oral lorazepam monotherapy administered around the clock indefinitely',
        explanation: 'Benzodiazepines provide temporary sedation and calming for acute agitation, but they lack intrinsic mood-stabilizing or antimanic properties and do not resolve the underlying bipolar mania.'
      },
      {
        text: 'High-dose oral lamotrigine initiated immediately with rapid titration over 48 hours',
        explanation: 'Lamotrigine is effective for maintenance prevention of bipolar depression, but it has no acute antimanic efficacy, and rapid titration carries a high risk of life-threatening Stevens-Johnson syndrome.'
      }
    ]
  },
  {
    code: 'op-c-s2-0090',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Respiratory',
    topic: 'Neonatal Respiratory Distress Syndrome Exogenous Surfactant',
    subtopic: 'Prematurity Alveolar Surface Tension and Reticulogranular Pattern',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize neonatal respiratory distress syndrome (NRDS): premature infant (< 32 weeks) presenting immediately after birth with grunting, tachypnea, nasal flaring, and intercostal retractions. Chest x-ray shows diffuse, bilateral reticulogranular "ground-glass" appearance with air bronchograms. Caused by surfactant deficiency (dipalmitoylphosphatidylcholine), leading to high alveolar surface tension, atelectasis, and V/Q mismatch. Treatment is nasal CPAP and intratracheal administration of EXOGENOUS NATURAL SURFACTANT.',
    citation: 'Sweet DG, et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome - 2019 Update. Neonatology. 2019;115(4):432-446. PMID: 30974433.',
    stem:
      'A male infant is born at 28 weeks gestation via emergent Cesarean delivery due to persistent non-reassuring fetal heart tracing in a mother who received only one dose of antenatal betamethasone 4 hours prior to delivery. Birth weight is 1,050 g, and 1-minute and 5-minute Apgar scores are 5 and 7, respectively. Within 20 minutes of birth in the neonatal intensive care unit, the neonate develops progressive tachypnea (respiratory rate 78/min), prominent expiratory grunting, severe intercostal and subcostal retractions, and cyanosis. Pulse oximetry displays an oxygen saturation of 79% while breathing ambient air. Physical examination reveals poor air entry bilaterally with diffuse fine crackles. Arterial blood gas on nasal continuous positive airway pressure (CPAP with FiO2 0.50) reveals: pH 7.20, PaCO2 62 mm Hg, PaO2 48 mm Hg, and bicarbonate 19 mEq/L. Chest radiography demonstrates low lung volumes with a diffuse, symmetric, fine reticulogranular ("ground-glass") haziness throughout both lung fields, accompanied by prominent air bronchograms extending into the periphery. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Endotracheal administration of exogenous natural surfactant via catheter with continuation of respiratory support',
        explanation: 'This premature infant has neonatal respiratory distress syndrome (RDS), caused by developmental deficiency of pulmonary surfactant synthesized by type II pneumocytes. Surfactant (primarily dipalmitoylphosphatidylcholine / lecithin) lowers alveolar surface tension at end-expiration (Law of Laplace: P = 2T/r). Lack of surfactant leads to diffuse microatelectasis, non-compliant lungs, ventilation-perfusion mismatch, and hypoxemic respiratory acidosis, producing the classic reticulogranular "ground-glass" appearance with air bronchograms on chest x-ray. Early administration of intratracheal exogenous surfactant (natural porcine or bovine extracts) rapidly restores alveolar stability, reduces work of breathing, decreases oxygen requirements, and lowers the risk of pneumothorax and bronchopulmonary dysplasia.'
      },
      {
        text: 'Initiation of broad-spectrum intravenous ampicillin and gentamicin monotherapy without airway intervention',
        explanation: 'While neonatal sepsis must be considered and covered, antibiotics alone do not correct mechanical alveolar collapse from surfactant deficiency; surfactant replacement is the immediate life-saving intervention.'
      },
      {
        text: 'Intravenous bolus of indomethacin to achieve pharmacologic closure of the ductus arteriosus',
        explanation: 'Indomethacin or ibuprofen closes a hemodynamically significant patent ductus arteriosus (PDA); PDA typically manifests on days 3–4 with hyperdynamic pulses and murmur, not acute RDS within minutes of birth.'
      },
      {
        text: 'Administration of high-frequency oscillatory ventilation on 100% oxygen without surfactant',
        explanation: 'Mechanical ventilation on high FiO2 without surfactant generates high shear stress, causing ventilator-induced lung injury and bronchopulmonary dysplasia; surfactant replacement is the definitive treatment.'
      },
      {
        text: 'Subcutaneous injection of terbutaline sulfate to stimulate endogenous fetal type II pneumocyte maturation',
        explanation: 'Antenatal corticosteroids administered to the mother stimulate surfactant synthesis before birth; postnatal beta-agonists do not induce acute surfactant production.'
      }
    ]
  },
  {
    code: 'op-c-s2-0091',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Musculoskeletal',
    topic: 'Calcium Pyrophosphate Dihydrate Pseudogout Synovial Analysis',
    subtopic: 'Rhomboid Weakly Positive Birefringent Crystals and Chondrocalcinosis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Distinguish CPPD (pseudogout) from gout: Pseudogout commonly affects large joints (knee in >50%, wrist, shoulder) in elderly patients, often triggered by trauma, surgery, or medical illness. Synovial fluid polarized microscopy reveals RHOMBOID-SHAPED, WEAKLY POSITIVELY BIREFRINGENT crystals (blue when parallel to the compensator axis). Plain radiographs demonstrate chondrocalcinosis (linear calcification of articular cartilage or menisci). Treatment is intra-articular corticosteroids, NSAIDs, or colchicine.',
    citation: 'Rosenthal AK, Ryan LM. Calcium Pyrophosphate Deposition Disease. N Engl J Med. 2016;374(26):2575-2584. PMID: 27355536.',
    stem:
      'A 74-year-old woman is evaluated on postoperative day 3 following an elective laparoscopic cholecystectomy for gallstone disease. Over the past 18 hours, she has developed severe, painful swelling and warmth in her right knee that prevents her from bearing weight during physical therapy. She has a history of primary hyperparathyroidism and hemochromatosis. Physical examination reveals an exquisitely tender, warm, swollen right knee with a large, tense joint effusion and limited range of motion due to pain. Temperature is 37.9 C (100.2 F), blood pressure is 134/76 mm Hg, and heart rate is 88/min. Plain radiography of the right knee demonstrates punctate and linear calcifications within the hyaline articular cartilage and fibrocartilaginous medial and lateral menisci (chondrocalcinosis), with no fracture. Diagnostic arthrocentesis yields 35 mL of cloudy, straw-colored synovial fluid with a white blood cell count of 42,000/microL with 86% neutrophils. Polarizing light microscopy of the synovial fluid is performed. Which of the following crystal characteristics confirms the diagnosis?',
    options: [
      {
        text: 'Rhomboid-shaped crystals demonstrating weak positive birefringence that appear blue when aligned parallel to the compensator axis',
        explanation: 'This patient has acute calcium pyrophosphate dihydrate (CPPD) crystal arthritis, historically termed pseudogout. CPPD frequently affects elderly patients and is often triggered by physical trauma, surgery, or underlying metabolic disorders (hemochromatosis, hyperparathyroidism, hypomagnesemia). The knee is the most commonly involved joint (>50% of cases). Radiographs classically demonstrate chondrocalcinosis (calcification of cartilage). Diagnostic synovial fluid analysis under polarizing light microscopy reveals short, rhomboid-shaped crystals that exhibit weak positive birefringence; under the red compensator, crystals aligned parallel to the slow axis appear blue, and those perpendicular appear yellow. In contrast, monosodium urate crystals (gout) are needle-shaped and strongly negatively birefringent (yellow when parallel).'
      },
      {
        text: 'Needle-shaped intracellular crystals demonstrating strong negative birefringence appearing bright yellow when aligned parallel to the compensator',
        explanation: 'Needle-shaped, strongly negatively birefringent crystals (yellow when parallel) are monosodium urate crystals diagnostic of acute gout, typically affecting the 1st MTP joint (podagra).'
      },
      {
        text: 'Envelope-shaped calcium oxalate crystals demonstrating marked birefringence in synovial macrophages',
        explanation: 'Calcium oxalate crystals can deposit in joint fluid in severe end-stage renal disease on dialysis (oxalosis), not classic post-cholecystectomy chondrocalcinosis.'
      },
      {
        text: 'Flat, notched rectangular cholesterol plates displaying multicolored birefringence under non-polarized light',
        explanation: 'Cholesterol crystals are seen in chronic, long-standing rheumatoid arthritis effusions or chronic bursitis, not acute crystal synovitis.'
      },
      {
        text: 'Acellular amorphous hydroxyapatite clumps visible exclusively on Alizarin red S staining',
        explanation: 'Basic calcium phosphate (hydroxyapatite) crystals cause Milwaukee shoulder syndrome (destructive arthropathy); they are ultramicroscopic and do not show rhomboid birefringence.'
      }
    ]
  },
  {
    code: 'op-c-s2-0092',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Nervous System',
    topic: 'Acute Bacterial Meningitis Dexamethasone and Antibiotic Timing',
    subtopic: 'Streptococcus Pneumoniae Sensorineural Hearing Loss Reduction',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute bacterial meningitis: fever, altered mental status, nuchal rigidity. Lumbar puncture shows high opening pressure, WBC > 1,000 (neutrophils), high protein, low glucose. Adjunctive IV DEXAMETHASONE (0.15 mg/kg) must be administered PRIOR TO OR CONCURRENTLY WITH the first dose of empiric antibiotics (vancomycin + ceftriaxone +/- ampicillin). Dexamethasone reduces subarachnoid inflammatory cascade triggered by antibiotic bacteriolysis, significantly reducing sensorineural hearing loss, neurological complications, and mortality in Streptococcus pneumoniae meningitis.',
    citation: 'van de Beek D, et al. Corticosteroids for acute bacterial meningitis. Cochrane Database Syst Rev. 2015;(9):CD004405. PMID: 26362566.',
    stem:
      'A 52-year-old previously healthy man is brought to the emergency department by his wife because of progressive confusion, severe headache, and high fevers that developed over the past 14 hours. On arrival, he is somnolent, disoriented to place and time, and groaning in pain. Temperature is 39.4 C (102.9 F), blood pressure is 108/64 mm Hg, heart rate is 114/min, and respirations are 22/min. Physical examination reveals marked nuchal rigidity with positive Kernig and Brudzinski signs. There are no focal cranial nerve deficits or rash. Funduscopic examination demonstrates sharp optic disc margins without papilledema. Two sets of blood cultures are immediately obtained. The physician prepares to perform an emergent diagnostic lumbar puncture and initiate empiric antimicrobial therapy consisting of intravenous vancomycin and ceftriaxone. To optimize clinical outcomes and reduce neurological morbidity, which of the following interventions should be administered immediately prior to or concurrently with the first dose of intravenous antibiotics?',
    options: [
      {
        text: 'Intravenous dexamethasone (10 mg) administered immediately before or with the first antibiotic dose',
        explanation: 'In adult patients with suspected or proven acute bacterial meningitis, randomized trials and IDSA guidelines strongly recommend adjunctive intravenous dexamethasone (0.15 mg/kg or 10 mg IV every 6 hours for 4 days). Bacteriolytic antibiotics release cell-wall components (peptidoglycan, teichoic acid, endotoxin) into the subarachnoid space, triggering an intense microglial and cytokine cascade (TNF-alpha, IL-1beta) that exacerbates cerebral edema, intracranial hypertension, and cochlear damage. Dexamethasone blunts this inflammatory surge, significantly reducing severe sensorineural hearing loss, long-term focal neurological deficits, and all-cause mortality, particularly in Streptococcus pneumoniae meningitis. Crucially, dexamethasone must be administered prior to or with the first antibiotic dose; giving it after antibiotics have already lysed bacteria confers no clinical benefit.'
      },
      {
        text: 'Intravenous mannitol bolus (1 g/kg) administered over 20 minutes',
        explanation: 'Osmotic diuretics like mannitol are reserved for documented intracranial herniation; routine empiric administration before lumbar puncture causes hypovolemia and is not guideline-recommended.'
      },
      {
        text: 'Intravenous acyclovir administered at 10 mg/kg every 8 hours',
        explanation: 'Acyclovir is indicated for herpes simplex encephalitis (temporal lobe seizures, RBCs in CSF); this patient has classic bacterial meningitis with nuchal rigidity.'
      },
      {
        text: 'Intravenous phenytoin loading dose (20 mg/kg) for seizure prophylaxis',
        explanation: 'Prophylactic anticonvulsants are not indicated in acute bacterial meningitis unless active seizures or status epilepticus occurs.'
      },
      {
        text: 'Postpone all antimicrobial therapy until cerebrospinal fluid cultures have incubated for 24 hours',
        explanation: 'Delaying antibiotics in bacterial meningitis leads to rapid progression to brain herniation, septic shock, and death; immediate treatment is an absolute emergency.'
      }
    ]
  },
  {
    code: 'op-c-s2-0093',
    exam: 'Step 2 CK',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Intrahepatic Cholestasis of Pregnancy Bile Acids and Delivery Timing',
    subtopic: 'Pruritus on Palms and Soles and Stillbirth Risk Stratification',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize intrahepatic cholestasis of pregnancy (ICP): intense pruritus on palms and soles worsening at night, in 2nd/3rd trimester, WITHOUT a primary rash. Diagnostic hallmark is elevated fasting total serum bile acids (>= 10 micromol/L). First-line medical therapy: URSODEOXYCHOLIC ACID (UDCA) to relieve pruritus and lower bile acids. Delivery timing: if bile acids >= 100 micromol/L, deliver at 36 0/7 weeks (high risk of sudden intrauterine fetal demise / stillbirth). If bile acids < 100 micromol/L, deliver at 36-39 weeks.',
    citation: 'Society for Maternal-Fetal Medicine (SMFM). SMFM Consult Series #53: Intrahepatic Cholestasis of Pregnancy. Am J Obstet Gynecol. 2021;224(2):B2-B9. PMID: 33197417.',
    stem:
      'A 29-year-old woman, gravida 2, para 1, at 34 weeks gestation presents to the obstetric triage unit with severe, unremitting itching for the past 10 days that is particularly intense on the palms of her hands and soles of her feet. The pruritus is markedly worse at night, preventing her from sleeping. She reports no abdominal pain, nausea, or fever. Physical examination reveals an alert woman in moderate distress from itching. Vital signs are normal. Dermatological examination reveals multiple linear excoriations over her forearms, shins, palms, and soles; there are no primary erythematous papules, urticarial plaques, bullae, or targetoid lesions. Abdominal examination reveals a non-tender gravid uterus with fundal height consistent with dates. Fetal non-stress test is reactive and reassuring. Laboratory evaluation reveals: AST 88 U/L, ALT 112 U/L, total bilirubin 1.4 mg/dL, and fasting total serum bile acid concentration of 115 micromol/L (normal: < 10 micromol/L). Viral hepatitis panel and right upper quadrant ultrasonography are completely normal. In addition to initiating oral ursodeoxycholic acid for symptom relief, which of the following represents the most appropriate management plan regarding the timing of delivery?',
    options: [
      {
        text: 'Plan delivery at 36 0/7 weeks gestation due to markedly elevated total bile acids exceeding 100 micromol/L',
        explanation: 'This patient has severe intrahepatic cholestasis of pregnancy (ICP), characterized by intense palmoplantar pruritus without primary rash, elevated transaminases, and fasting total serum bile acids >= 10 micromol/L. ICP carries a substantial risk of sudden, unpredictable intrauterine fetal demise (stillbirth), meconium-stained amniotic fluid, and neonatal respiratory distress syndrome, mediated by bile acid-induced fetal cardiac arrhythmias and placental chorionic villous vasoconstriction. Society for Maternal-Fetal Medicine (SMFM) guidelines stratify delivery timing strictly based on peak bile acid levels: when bile acids are >= 100 micromol/L (severe disease), the risk of stillbirth rises sharply, mandating delivery at 36 0/7 weeks gestation (or upon diagnosis if diagnosed later).'
      },
      {
        text: 'Allow pregnancy to proceed to spontaneous labor at 41 weeks gestation as long as non-stress tests remain reactive',
        explanation: 'Awaiting spontaneous labor beyond 36–37 weeks in severe ICP carries unacceptably high rates of sudden stillbirth; non-stress testing cannot reliably predict or prevent sudden fetal demise in ICP.'
      },
      {
        text: 'Perform emergent Cesarean delivery today under general anesthesia without awaiting corticosteroid administration',
        explanation: 'Immediate delivery at 34 weeks is not indicated unless there is non-reassuring fetal status or severe maternal complications; with reassuring fetal testing, antenatal corticosteroids are given and delivery is planned at 36 0/7 weeks.'
      },
      {
        text: 'Initiate oral cholestyramine resin monotherapy and deliver electively at 39 weeks gestation',
        explanation: 'Cholestyramine binds fat-soluble vitamins, exacerbating maternal vitamin K deficiency and coagulopathy, and delaying delivery to 39 weeks with bile acids > 100 micromol/L carries high stillbirth risk.'
      },
      {
        text: 'Perform immediate high-volume plasmapheresis to clear circulating bile acids before term',
        explanation: 'Plasmapheresis is invasive, non-standard, and unproven for ICP; oral ursodeoxycholic acid and planned early delivery at 36 weeks is the evidence-based standard of care.'
      }
    ]
  },
  {
    code: 'op-c-s2-0094',
    exam: 'Step 2 CK',
    subject: 'Obstetrics',
    system: 'Pregnancy',
    topic: 'Ruptured Ectopic Pregnancy Hemorrhagic Shock and FAST Scan',
    subtopic: 'Peritoneal Free Fluid and Emergent Surgical Exploration',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize ruptured ectopic pregnancy: reproductive-aged female presenting with acute severe unilateral lower quadrant pain, syncope/dizziness, peritonitis (rebound, guarding), and hypovolemic shock (hypotension, tachycardia). Bedside Focused Assessment with Sonography for Trauma (FAST) reveals free intraperitoneal fluid in Morrison\'s pouch and the pelvis. Point-of-care urine pregnancy test is positive. This is a surgical emergency. Immediate emergent exploratory laparoscopy or laparotomy with salpingectomy without delaying for quantitative serum beta-hCG.',
    citation: 'American College of Obstetricians and Gynecologists\' Committee on Practice Bulletins—Gynecology. ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy. Obstet Gynecol. 2018;131(3):e91-e103. PMID: 29470343.',
    stem:
      'A 23-year-old woman is brought to the emergency department by ambulance after collapsing in her bathroom. She reports sudden, agonizing, sharp pain in her left lower abdomen that began 1 hour ago, followed by dizziness, shortness of breath, and left shoulder tip pain (Kehr sign). Her last menstrual period was approximately 7 weeks ago, but her cycles are normally irregular. On arrival, she is pale, diaphoretic, and somnolent. Vital signs: blood pressure 76/42 mm Hg, heart rate 136/min, respirations 26/min, and oxygen saturation 96% on ambient air. Physical examination reveals cold, clammy extremities and weak, thready radial pulses. Abdominal examination demonstrates diffuse, exquisite tenderness with marked involuntary guarding, board-like rigidity, and rebound tenderness throughout all quadrants. Pelvic examination is deferred due to severe pain and hemodynamic instability. Rapid urine pregnancy test is positive. Bedside point-of-care ultrasound (FAST examination) demonstrates extensive free fluid in Morrison pouch (hepatorenal space), the splenorenal recess, and a large amount of complex fluid filling the rectouterine pouch (cul-de-sac), with an empty uterine cavity. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Immediate transfer to the operating room for emergent exploratory laparotomy or laparoscopy with left salpingectomy',
        explanation: 'This patient presents with ruptured ectopic pregnancy with hemoperitoneum and profound hypovolemic hemorrhagic shock. Classic features: sudden severe pelvic pain, syncope, peritonitis, subdiaphragmatic blood irritating the phrenic nerve causing referred shoulder pain (Kehr sign), and hemodynamic collapse. Point-of-care ultrasound confirms extensive hemoperitoneum (free fluid in Morrison\'s pouch and pelvis) with an empty uterus in a patient with a positive pregnancy test. Ruptured ectopic pregnancy with hemodynamic instability is an absolute surgical emergency. Immediate transfer to the operating suite for emergent surgical exploration (laparoscopy or laparotomy with salpingectomy) and concurrent aggressive blood product resuscitation is life-saving. Waiting for formal radiology ultrasound or quantitative serum beta-hCG is fatal.'
      },
      {
        text: 'Delay surgery until a formal departmental transvaginal ultrasound and quantitative serum beta-hCG level are completed',
        explanation: 'Delaying surgical intervention in a patient in decompensated hemorrhagic shock to obtain formal imaging or lab values causes exsanguination and cardiac arrest.'
      },
      {
        text: 'Administer intramuscular methotrexate (50 mg/m2) and admit to the intensive care unit for observation',
        explanation: 'Methotrexate is absolutely contraindicated in ruptured ectopic pregnancy, hemodynamic instability, active intra-abdominal bleeding, or peritoneal signs.'
      },
      {
        text: 'Perform an urgent diagnostic uterine dilation and curettage at the bedside',
        explanation: 'D&C evaluates intrauterine contents; performing it in ruptured ectopic pregnancy wastes critical minutes while intra-abdominal tubal hemorrhage continues unchecked.'
      },
      {
        text: 'Administer high-dose intravenous norepinephrine infusion to normalize blood pressure before considering imaging',
        explanation: 'Vasopressors without volume replacement and surgical hemostasis worsen tissue ischemia and fail to halt catastrophic arterial bleeding from the ruptured fallopian tube.'
      }
    ]
  },
  {
    code: 'op-c-s2-0095',
    exam: 'Step 2 CK',
    subject: 'Psychiatry',
    system: 'Behavioral Health',
    topic: 'Psychotic Depression Antidepressant-Antipsychotic Combination',
    subtopic: 'Mood-Congruent Delusions and Electroconvulsive Therapy Indications',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Major Depressive Disorder with Psychotic Features (psychotic depression): severe depressed mood, psychomotor disturbance, and mood-congruent delusions (delusions of guilt, nihilism, poverty, somatic decay) or hallucinations. First-line pharmacotherapy is COMBINATION OF AN ANTIDEPRESSANT (SSRI/SNRI) PLUS AN ATYPICAL ANTIPSYCHOTIC. Antidepressant monotherapy or antipsychotic monotherapy is markedly inferior. Electroconvulsive therapy (ECT) is first-line if severe refusal to eat/drink, severe suicidality, or catatonia.',
    citation: 'Rothschild AJ. Clinical practice. Challenges in the treatment of major depressive disorder with psychotic features. N Engl J Med. 2013;369(17):1624-1631. PMID: 24152261.',
    stem:
      'A 58-year-old woman is brought to the psychiatric emergency clinic by her adult daughter because of severe behavioral changes and profound social withdrawal over the past 6 weeks. The patient has lost 8 kg, sleeps only 2 hours per night, and cries constantly. She refuses to eat, claiming that her internal organs are completely rotten and that eating food will poison her family. She repeatedly insists: "I committed an unforgivable sin 30 years ago that brought a curse on the entire world; the FBI is outside listening through the walls to arrest me." On mental status examination, she appears frail, unkempt, and profoundly cachectic. Her speech is markedly slowed with long response latencies (psychomotor retardation). She exhibits flat affect, severe depressed mood, and fixed, unshakeable somatic and persecutory delusions. She has no prior personal or family psychiatric history. Routine laboratory evaluation, including complete blood count, metabolic panel, TSH, and non-contrast head CT, is entirely normal. Which of the following is the most appropriate initial pharmacological regimen for this patient?',
    options: [
      {
        text: 'Combination therapy with an antidepressant (such as sertraline) plus an atypical antipsychotic (such as olanzapine)',
        explanation: 'This patient meets DSM-5 criteria for Major Depressive Disorder with Psychotic Features (psychotic depression), characterized by severe depression accompanied by mood-congruent somatic and persecutory delusions (delusion of rotting organs/Cotard syndrome, unforgivable guilt). Randomized controlled trials (such as the STOP-PD study) demonstrate that combination therapy with an antidepressant (SSRI or SNRI) PLUS an atypical (second-generation) antipsychotic (e.g., sertraline + olanzapine) is significantly superior to monotherapy with either agent alone. Antidepressant monotherapy or antipsychotic monotherapy yields response rates of only 20–30%, compared to >60–70% for combination therapy. Electroconvulsive therapy (ECT) is also an effective first-line option, particularly when rapid response is required for life-threatening refusal of food/fluids or acute suicidality.'
      },
      {
        text: 'Oral sertraline monotherapy titrated rapidly to 200 mg daily',
        explanation: 'Antidepressant monotherapy is ineffective for psychotic depression, leaving patients actively psychotic, suicidal, and at high risk of death from malnutrition.'
      },
      {
        text: 'Oral haloperidol monotherapy administered at 5 mg twice daily',
        explanation: 'Antipsychotic monotherapy treats the delusional thought process poorly while completely failing to resolve the underlying severe major depressive episode.'
      },
      {
        text: 'Oral buspirone monotherapy targeting somatic anxiety and insomnia',
        explanation: 'Buspirone is a 5-HT1A partial agonist indicated solely for generalized anxiety disorder; it has no efficacy in psychotic depression.'
      },
      {
        text: 'Scheduled outpatient psychodynamic psychotherapy with complete avoidance of psychotropic medications',
        explanation: 'Psychotherapy alone is ineffective for severe psychotic depression and delaying pharmacotherapy or ECT in a starving, actively delusional patient is dangerous.'
      }
    ]
  },
  {
    code: 'op-c-s2-0096',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'Cardiovascular',
    topic: 'Ventricular Septal Defect Eisenmenger Syndrome Prevention',
    subtopic: 'Holosystolic Murmur Pulmonary Hypertension and Surgical Closure',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize ventricular septal defect (VSD): most common congenital heart defect. Harsh holosystolic murmur at left lower sternal border. Small muscular VSDs (loud murmur, asymptomatic) close spontaneously in >75% by age 2. Large perimembranous VSDs (soft murmur, diaphoresis during feeding, failure to thrive, hepatomegaly) cause massive left-to-right shunt. Untreated large VSDs lead to pulmonary vascular remodeling, irreversible pulmonary hypertension, shunt reversal (right-to-left), and cyanosis (Eisenmenger syndrome). Early surgical patch closure prevents Eisenmenger.',
    citation: 'Penny DJ, Vick GW 3rd. Ventricular septal defect. Lancet. 2011;377(9771):1103-1112. PMID: 21183218.',
    stem:
      'A 3-month-old female infant is brought to the pediatric cardiology clinic for evaluation of poor weight gain and rapid breathing. Her mother states that the infant becomes exhausted and diaphoretic during breastfeeds, taking up to 45 minutes to finish a feed and frequently falling asleep before consuming adequate volume. Birth weight was 3,200 g (50th percentile); current weight is 4,100 g (< 3rd percentile, failure to thrive). Physical examination reveals a tachypneic infant (respiratory rate 62/min) with mild subcostal retractions. Cardiac examination reveals a hyperdynamic precordium, a prominent apical impulse, and a grade 3/6 harsh holosystolic murmur heard loudest at the left lower sternal border, accompanied by an early diastolic rumble at the cardiac apex. The second heart sound (S2) is narrowly split with an accentuated pulmonic component (loud P2). The liver is palpated 3 cm below the right costal margin. Transthoracic echocardiogram confirms a large, 8-mm perimembranous ventricular septal defect (VSD) with a pulmonary-to-systemic blood flow ratio (Qp:Qs) of 2.6:1, moderate left atrial and left ventricular dilation, and elevated pulmonary arterial systolic pressure estimated at 48 mm Hg. In addition to initiating oral furosemide and enalapril, which of the following is the definitive long-term intervention to prevent the development of irreversible pulmonary vascular obstructive disease (Eisenmenger syndrome)?',
    options: [
      {
        text: 'Elective surgical patch closure of the defect within the first 6 to 12 months of life',
        explanation: 'This infant has a large perimembranous ventricular septal defect (VSD) with high-volume left-to-right shunting (Qp:Qs = 2.6:1), heart failure (feeding diaphoresis, failure to thrive, hepatomegaly), and early pulmonary hypertension (loud P2). In large VSDs, chronic transmission of systemic arterial pressures and massive blood volume into the pulmonary vascular bed causes medial hypertrophy, intimal proliferation, and irreversible plexiform arteriopathy of pulmonary arterioles. Eventually, pulmonary vascular resistance exceeds systemic vascular resistance, causing shunt reversal (right-to-left shunting), central cyanosis, clubbing, and polycythemia (Eisenmenger syndrome), at which point corrective surgery is fatal and contraindicated. Definitive surgical patch closure within the first 6–12 months of life eliminates the shunt and prevents irreversible Eisenmenger physiology.'
      },
      {
        text: 'Lifelong medical therapy with oral digoxin and diuretics without surgical intervention',
        explanation: 'Medical management (diuretics, ACE inhibitors) treats heart failure symptoms and optimizes nutrition preoperatively, but cannot prevent the progressive remodeling of pulmonary arterioles caused by high shear stress.'
      },
      {
        text: 'Immediate continuous intravenous prostaglandin E1 (alprostadil) infusion',
        explanation: 'Prostaglandin E1 maintains patency of the ductus arteriosus in ductal-dependent congenital heart lesions (transposition, coarctation, hypoplastic left heart); in VSD, a PDA increases pulmonary flooding and worsens heart failure.'
      },
      {
        text: 'Routine watchful waiting until age 10 because all perimembranous defects close spontaneously',
        explanation: 'While small muscular VSDs frequently close spontaneously, large perimembranous VSDs with failure to thrive and pulmonary hypertension rarely close spontaneously and cause irreversible Eisenmenger syndrome if not repaired early.'
      },
      {
        text: 'Heart-lung transplantation as the primary initial surgical procedure',
        explanation: 'Heart-lung transplantation is reserved for advanced, end-stage Eisenmenger syndrome with established irreversible pulmonary vascular remodeling; early VSD patch closure prevents the need for transplantation.'
      }
    ]
  },
  {
    code: 'op-c-s2-0097',
    exam: 'Step 2 CK',
    subject: 'Surgery',
    system: 'Gastrointestinal',
    topic: 'Acute Diverticulitis Complicated versus Uncomplicated Management',
    subtopic: 'Colonic Abscess Percutaneous Drainage and Hinchey Staging',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize acute colonic diverticulitis: left lower quadrant pain, fever, leukocytosis. Abdominal CT with IV contrast is test of choice. Uncomplicated diverticulitis (colonic wall thickening, pericolic fat stranding): oral antibiotics or outpatient observation. Complicated diverticulitis: Hinchey Ia (phlegmon), Ib/II (pericolic or pelvic abscess): abscesses < 3-4 cm managed with IV antibiotics alone; abscesses >= 4 cm require PERCUTANEOUS CT-GUIDED DRAINAGE. Hinchey III/IV (purulent/feculent peritonitis) requires emergent surgery (Hartmann procedure).',
    citation: 'Hall J, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis. Dis Colon Rectum. 2020;63(6):728-747. PMID: 32384404.',
    stem:
      'A 58-year-old man presents to the emergency department with a 4-day history of progressively worsening left lower quadrant abdominal pain, anorexia, and fevers. He was evaluated at an urgent care clinic 2 days ago and started on oral ciprofloxacin and metronidazole, but his symptoms have continued to intensify. On physical examination, he appears uncomfortable and flushed. Temperature is 38.7 C (101.7 F), blood pressure is 126/78 mm Hg, heart rate is 102/min, and respirations are 18/min. Abdominal examination reveals focal, marked tenderness in the left lower quadrant with voluntary guarding and a tender, fullness palpated in the left iliac fossa; there is no diffuse peritonitis, rebound tenderness, or abdominal rigidity. Laboratory studies reveal a leukocytosis of 17,200/microL with 84% neutrophils and elevated CRP of 145 mg/L. Contrast-enhanced CT of the abdomen and pelvis demonstrates sigmoid diverticulosis with marked sigmoid wall thickening, extensive pericolic fat stranding, and a well-circumscribed, ring-enhancing fluid collection containing pockets of air measuring 5.2 x 4.6 cm in the left lower quadrant adjacent to the sigmoid colon (Hinchey stage Ib abscess). There is no free extraluminal gas beneath the diaphragm. Which of the following is the most appropriate next step in management?',
    options: [
      {
        text: 'Percutaneous CT-guided catheter drainage of the pelvic abscess combined with intravenous broad-spectrum antibiotics',
        explanation: 'This patient has complicated acute diverticulitis with a large pericolic/pelvic abscess (Hinchey stage Ib/II). American Society of Colon and Rectal Surgeons (ASCRS) guidelines recommend size-based stratification for diverticular abscesses: small abscesses (< 3–4 cm) can often be managed successfully with intravenous antibiotics alone; however, large abscesses (>= 4 cm in diameter) have low success rates with antibiotics alone and mandate percutaneous CT-guided catheter drainage combined with intravenous broad-spectrum antibiotics. Percutaneous drainage resolves sepsis, controls the local inflammatory phlegmon, avoids emergent stoma creation, and allows the patient to undergo elective single-stage sigmoid resection with primary anastomosis 6–8 weeks later.'
      },
      {
        text: 'Emergent exploratory laparotomy with Hartmann procedure (sigmoid resection and end colostomy)',
        explanation: 'Emergent Hartmann procedure is indicated for free perforation with diffuse peritonitis (Hinchey III purulent or Hinchey IV feculent peritonitis), hemodynamically unstable septic shock, or failure of percutaneous drainage, not for a stable, localized, drainable collection.'
      },
      {
        text: 'Continue oral ciprofloxacin and metronidazole at home for an additional 10 days',
        explanation: 'Continuing oral outpatient antibiotics in a patient who has clinically deteriorated with a 5.2-cm abscess leads to abscess rupture, generalized feculent peritonitis, and septic shock.'
      },
      {
        text: 'Immediate diagnostic colonoscopy to evaluate for mucosal fistulization and malignancy',
        explanation: 'Colonoscopy is strictly contraindicated during acute diverticulitis due to high risk of iatrogenic bowel perforation from air insufflation; diagnostic colonoscopy is delayed for 6–8 weeks after acute resolution.'
      },
      {
        text: 'Administration of intravenous infliximab targeting underlying inflammatory bowel disease',
        explanation: 'Infliximab is a TNF-alpha inhibitor used for Crohn disease; administering it during acute bacterial diverticular abscess causes catastrophic immunosuppressive sepsis and death.'
      }
    ]
  },
  {
    code: 'op-c-s2-0098',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'General Principles',
    topic: 'Exertional Heat Stroke Immediate Cold Water Immersion',
    subtopic: 'Hyperthermia Encephalopathy and Contraindication of Antipyretics',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Distinguish exertional heat stroke (EHS) from heat exhaustion: EHS features core body temperature > 40 C (104 F) PLUS central nervous system dysfunction (delirium, combativeness, ataxia, seizures, coma) in a person exercising in hot/humid weather. Sweating may still be present in exertional heat stroke. Immediate management: WHOLE-BODY ICE WATER IMMERSION (gold standard, cooling rate > 0.15-0.2 C/min) until core temperature reaches 38.3-38.8 C (101-102 F). Antipyretics (acetaminophen, aspirin) are strictly contraindicated because the mechanism is environmental thermoregulatory failure, not hypothalamic set-point elevation, and antipyretics worsen hepatic/renal toxicity.',
    citation: 'Lipman GS, et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2019 Update. Wilderness Environ Med. 2019;30(4S):S47-S59. PMID: 31653556.',
    stem:
      'A 20-year-old military recruit collapses during a vigorous 10-kilometer endurance run in humid, 35 C (95 F) ambient weather. On-site medics find him confused, combative, and disoriented. Upon arrival to the base emergency clinic 15 minutes later, he is comatose (Glasgow Coma Scale: 6, E1V1M4). Physical examination reveals a flushed, profusely sweating young man with hot skin. Rectal thermometry demonstrates a core body temperature of 41.2 C (106.2 F). Blood pressure is 88/50 mm Hg, heart rate is 152/min, and respirations are 28/min. Neurological examination reveals bilateral dilated pupils reactive to light, generalized hyperreflexia, and occasional myoclonic twitches. Point-of-care fingerstick blood glucose is 92 mg/dL. An intravenous line is placed. In addition to airway support and intravenous crystalloid infusion, which of the following is the most appropriate immediate life-saving intervention?',
    options: [
      {
        text: 'Immediate total body ice-water immersion with continuous rectal core temperature monitoring',
        explanation: 'This patient has exertional heat stroke (EHS), defined by core body temperature > 40 C (104 F) accompanied by central nervous system dysfunction (delirium, seizures, coma) occurring during strenuous exertion. In exertional heat stroke, profuse diaphoresis is often present (contrary to non-exertional classic heat stroke, where skin is typically anhidrotic). Rapid, aggressive whole-body cooling is the absolute determinant of survival, reducing mortality from >30% to near zero if implemented within 30 minutes. Cold-water or ice-water immersion provides the most rapid cooling rate (>0.15–0.2 C/min) via direct conductive heat transfer. Cooling is continued until core temperature drops to 38.3–38.8 C (101–102 F) to prevent overshooting into hypothermia.'
      },
      {
        text: 'Intravenous administration of high-dose acetaminophen (1,000 mg) and oral aspirin',
        explanation: 'Antipyretics (acetaminophen, aspirin, NSAIDs) are strictly contraindicated in heat stroke; heat stroke is caused by overwhelming environmental heat load exceeding dissipation capacity, not pyrogen-mediated elevation of the hypothalamic set-point, and antipyretics exacerbate hepatic necrosis and coagulopathy.'
      },
      {
        text: 'Application of room-temperature wet towels and convective fanning alone without cold water',
        explanation: 'Evaporative cooling with fanning and room-temperature mist provides slower cooling rates than ice-water immersion and is reserved for situations where immersion tubs are unavailable or during mass-casualty events.'
      },
      {
        text: 'Intravenous infusion of dantrolene sodium (2.5 mg/kg) targeting ryanodine receptors',
        explanation: 'Dantrolene is the specific antidote for malignant hyperthermia; clinical trials have proven dantrolene ineffective in exertional heat stroke.'
      },
      {
        text: 'Intravenous administration of 20% mannitol to relieve hyperthermic cerebral edema',
        explanation: 'Mannitol induces osmotic diuresis, exacerbating severe hypovolemia and dehydration in heat stroke, and is not recommended acutely.'
      }
    ]
  },
  {
    code: 'op-c-s2-0099',
    exam: 'Step 2 CK',
    subject: 'Medicine',
    system: 'Endocrine',
    topic: 'Hyperosmolar Hyperglycemic State Fluid Resuscitation and Potassium',
    subtopic: 'Profound Fluid Deficit and Insulin Withholding Thresholds',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize Hyperosmolar Hyperglycemic State (HHS): elderly type 2 diabetic, severe hyperglycemia (> 600-1,000 mg/dL), high effective serum osmolality (> 320 mOsm/kg), minimal/absent ketones, and profound dehydration (fluid deficit 8-10 liters) with altered mental status. Management sequence: 1. Aggressive isotonic IV saline (0.9% NaCl) resuscitation is the FIRST and MOST IMPORTANT step; 2. Check potassium before insulin: if potassium < 3.3 mEq/L, WITHHOLD INSULIN and replete potassium first to prevent fatal arrhythmias; if K+ 3.3-5.3, start insulin with potassium repletion.',
    citation: 'Fayfman M, et al. Management of Hyperglycemic Emergencies in Adults: A Consensus Report by the American Diabetes Association and the European Association for the Study of Diabetes. Diabetes Care. 2023;46(10):e164-e182. PMID: 37733479.',
    stem:
      'A 76-year-old woman with a history of type 2 diabetes mellitus is brought to the emergency department by her daughter because of progressive lethargy, confusion, and reduced fluid intake over the past 5 days following a mild urinary tract infection. On physical examination, she is stuporous, opening her eyes only to loud voice commands and withdrawing from painful stimuli. Vital signs: blood pressure 84/52 mm Hg, heart rate 118/min, respirations 18/min, and temperature 37.4 C (99.3 F). Physical examination reveals dry, furrowed oral mucous membranes, deeply sunken eyeballs, and delayed capillary refill (> 4 seconds). Laboratory evaluation reveals: plasma glucose 1,120 mg/dL, serum sodium 132 mEq/L, potassium 3.1 mEq/L (normal: 3.5–5.0 mEq/L), chloride 96 mEq/L, bicarbonate 21 mEq/L, BUN 58 mg/dL, and serum creatinine 2.6 mg/dL (baseline: 0.9 mg/dL). Urinalysis reveals 4+ glucose, trace ketones, and positive leukocyte esterase. Calculated effective serum osmolality is 342 mOsm/kg H2O (normal: 275–295 mOsm/kg H2O). Arterial blood gas demonstrates a pH of 7.36 with normal anion gap. Which of the following is the most appropriate initial management step for this patient?',
    options: [
      {
        text: 'Initiate aggressive intravenous 0.9% normal saline fluid resuscitation and potassium repletion, withholding insulin until potassium is > 3.3 mEq/L',
        explanation: 'This patient has hyperosmolar hyperglycemic state (HHS), characterized by extreme hyperglycemia (> 600 mg/dL), high serum osmolality (> 320 mOsm/kg), altered mental status, and minimal ketosis. Osmotic diuresis causes massive water and electrolyte deficits (fluid deficit typically 8 to 10 liters, or 100–200 mL/kg). The primary initial priority is aggressive intravenous volume resuscitation with 0.9% normal saline (1–2 liters in the first 1–2 hours) to restore intravascular volume and organ perfusion. Crucially, before starting intravenous insulin, the serum potassium must be evaluated. Insulin shifts potassium into cells; if insulin is administered when serum potassium is < 3.3 mEq/L, it can cause catastrophic hypokalemia, cardiac arrest, and respiratory muscle paralysis. Therefore, insulin must be withheld and potassium repleted until serum potassium reaches > 3.3 mEq/L.'
      },
      {
        text: 'Immediate administration of high-dose intravenous regular insulin bolus (0.15 units/kg) followed by continuous infusion',
        explanation: 'Administering insulin before restoring potassium in a patient with serum potassium of 3.1 mEq/L drives potassium into cells, precipitating fatal ventricular arrhythmias and respiratory arrest.'
      },
      {
        text: 'Intravenous infusion of sodium bicarbonate ampules targeting an arterial pH > 7.45',
        explanation: 'Bicarbonate therapy is not indicated in HHS because the patient does not have severe metabolic acidemia (pH is 7.36); bicarbonate worsens hypokalemia and intracellular paradoxical acidosis.'
      },
      {
        text: 'Intravenous infusion of 5% dextrose in water (D5W) at 500 mL/hour to correct hyperosmolality rapidly',
        explanation: 'Rapid infusion of hypotonic D5W without isotonic expansion causes precipitous drops in serum osmolality, precipitating fatal cerebral edema and worsening hypovolemic shock.'
      },
      {
        text: 'Administration of subcutaneous glargine insulin and oral metformin via nasogastric tube',
        explanation: 'Oral antidiabetic agents are strictly contraindicated in acute hyperglycemic emergencies, and metformin in acute renal failure (Cr 2.6) risks fatal lactic acidosis.'
      }
    ]
  },
  {
    code: 'op-c-s2-0100',
    exam: 'Step 2 CK',
    subject: 'Pediatrics',
    system: 'General Principles',
    topic: 'Phenylketonuria Screening and Dietary Phenylalanine Restriction',
    subtopic: 'Mousy Odor Hypopigmentation and Tyrosine Supplementation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize classic phenylketonuria (PKU): autosomal recessive mutation in phenylalanine hydroxylase (PAH), preventing conversion of phenylalanine to tyrosine. Manifestations: severe intellectual disability, microcephaly, seizures, hypopigmentation (fair skin/blonde hair/blue eyes due to lack of tyrosine for melanin), eczema, and a "musty" or "mousy" body odor. Newborn screening detects elevated blood phenylalanine. Management: lifelong diet strictly restricting phenylalanine and supplementing TYROSINE, initiated within the first 7-10 days of life.',
    citation: 'Regier DS, Greene CL. Phenylalanine Hydroxylase Deficiency. In: GeneReviews. 2017. PMID: 20301677.',
    stem:
      'A 9-month-old boy is brought to the pediatric genetics clinic for evaluation of global developmental delay and refractory infantile spasms. He was born at home in a remote rural area and did not undergo newborn metabolic screening. His parents note that he cannot sit without support, does not babble, and has poor eye contact. Physical examination reveals a microcephalic infant with strikingly fair skin, very light blonde hair, and blue eyes, despite both parents and two older siblings having dark brown hair, dark eyes, and Mediterranean olive complexions. Severe, dry, eczematous plaques are present on his cheeks and flexural surfaces. The physician notes a distinct "musty" or "mousy" odor emanating from the infant’s body and wet diaper. Neurological examination reveals generalized hyperreflexia and purposeless athetoid hand movements. Quantitative plasma amino acid chromatography reveals a plasma phenylalanine concentration of 1,480 micromol/L (normal: 30–70 micromol/L) with a markedly reduced plasma tyrosine concentration of 22 micromol/L (normal: 40–100 micromol/L). Genetic testing confirms a homozygous pathogenic loss-of-function mutation in the phenylalanine hydroxylase (PAH) gene. Which of the following dietary management plans is essential to prevent further neurocognitive deterioration in this child?',
    options: [
      {
        text: 'Lifelong strict restriction of dietary phenylalanine combined with essential tyrosine supplementation',
        explanation: 'The child has classic phenylketonuria (PKU), an autosomal recessive inborn error of metabolism caused by deficiency of phenylalanine hydroxylase (PAH). PAH converts phenylalanine to tyrosine using tetrahydrobiopterin (BH4) as a cofactor. Toxic accumulation of phenylalanine and its alternative ketoacid metabolites (phenylacetate, phenylpyruvate, phenyllactate) causes irreversible brain injury, severe intellectual disability, microcephaly, and seizures. Phenylacetate imparts the characteristic "mousy" or "musty" odor. Impaired tyrosine synthesis causes deficiency of melanin (producing fair hair, light eyes, and pale skin) and dopamine. Management requires a lifelong dietary regimen strictly restricting natural protein and phenylalanine while providing synthetic medical foods supplemented with tyrosine (which becomes an essential amino acid).'
      },
      {
        text: 'Complete dietary exclusion of all dietary branched-chain amino acids (leucine, isoleucine, valine)',
        explanation: 'Branched-chain amino acid restriction is the specific dietary therapy for maple syrup urine disease (MSUD), which presents with sweet maple-syrup urine odor and ketoacidosis, not hypopigmented PKU.'
      },
      {
        text: 'A high-protein, ketogenic diet supplemented with high doses of vitamin B6 (pyridoxine)',
        explanation: 'A high-protein diet delivers massive amounts of phenylalanine, which would accelerate severe neurotoxicity and brain damage in PKU.'
      },
      {
        text: 'Dietary elimination of lactose and galactose with initiation of soy-based infant formula',
        explanation: 'Galactose restriction is the treatment for classic galactosemia (GALT deficiency), which presents in the first days of life with cataracts, jaundice, and E. coli sepsis.'
      },
      {
        text: 'High-dose oral copper histidine supplementation and dietary iron restriction',
        explanation: 'Copper supplementation is used for Menkes disease (ATP7A kinky-hair syndrome); PKU is a disorder of phenylalanine catabolism unrelated to copper transport.'
      }
    ]
  }
];
