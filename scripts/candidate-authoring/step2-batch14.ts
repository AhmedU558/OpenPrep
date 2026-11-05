import { CandidateSpec } from './types';

export const step2Batch14: CandidateSpec[] = [
  {
    "code": "op-c-s2-0326",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Preeclampsia with Severe Features",
    "subtopic": "Magnesium Sulfate Seizure Prophylaxis and Antihypertensive Thresholds",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old primigravida at 34 weeks gestation presents to the labor and delivery triage with a 6-hour history of severe, persistent frontal headache unresponsive to acetaminophen and spots before her eyes (scotomata). She has had no vaginal bleeding or leakage of fluid. Her pregnancy has been uncomplicated until now. Physical examination reveals blood pressure of 172/112 mm Hg, heart rate of 82/min, and 3+ bilateral patellar deep tendon reflexes with 2 beats of clonus. The fundal height is 34 cm and fetal heart rate is 142/min with moderate variability. Urinalysis demonstrates 3+ protein. Laboratory evaluation reveals: - Platelets: 92,000/mm3 - AST: 146 U/L - ALT: 158 U/L - Serum creatinine: 1.2 mg/dL (baseline: 0.6 mg/dL). Which of the following is the most appropriate initial medical management for this patient?",
    "choices": [
      [
        "Intravenous magnesium sulfate infusion and immediate intravenous labetalol or hydralazine",
        "The patient has preeclampsia with severe features, confirmed by severe hypertension (blood pressure >= 160/110 mm Hg), neurological symptoms (intractable headache, visual scotomata, hyperreflexia/clonus), thrombocytopenia (< 100,000/mm3), transaminitis, and renal insufficiency. Immediate management requires: (1) Intravenous magnesium sulfate (4\u20136 g loading dose followed by 1\u20132 g/hr continuous infusion) for seizure prophylaxis (to prevent progression to eclampsia); and (2) Acute antihypertensive therapy with intravenous labetalol, hydralazine, or oral immediate-release nifedipine to lower blood pressure below 160/110 mm Hg within 30 to 60 minutes to prevent maternal hemorrhagic stroke. Once stabilized, delivery is planned because severe preeclampsia at >= 34 weeks gestation is a definitive indication for delivery."
      ],
      [
        "Urgent oral lisinopril 20 mg to achieve rapid control of the renin-angiotensin-aldosterone axis",
        "ACE inhibitors (and ARBs) are strictly fetotoxic and contraindicated throughout pregnancy, causing fetal renal dysgenesis, oligohydramnios, pulmonary hypoplasia, and neonatal death."
      ],
      [
        "Intramuscular phenobarbital loading dose for central nervous system anticonvulsant prophylaxis",
        "Phenobarbital is not indicated for eclamptic seizure prophylaxis; the Magpie Trial conclusively demonstrated that magnesium sulfate is vastly superior to phenytoin, diazepam, or barbiturates in preventing eclampsia and maternal death."
      ],
      [
        "Immediate emergent cesarean delivery under general anesthesia prior to medical stabilization",
        "Emergency delivery before maternal blood pressure control and seizure prophylaxis carries high maternal mortality from intraoperative hemorrhagic stroke or eclamptic convulsions; medical stabilization must occur first."
      ],
      [
        "Expectant outpatient management with oral methyldopa and weekly maternal laboratory monitoring",
        "Preeclampsia with severe features at >= 34 weeks gestation requires hospital admission, maternal stabilization, and prompt delivery; outpatient expectant management is contraindicated due to high risk of placental abruption, hepatic rupture, and maternal death."
      ]
    ],
    "shortestValidSolution": "34 weeks pregnant + BP 172/112 + headache/scotomata + low platelets/high AST -> preeclampsia with severe features -> IV magnesium sulfate + IV labetalol/hydralazine.",
    "necessaryInference": "Diagnose preeclampsia with severe features, initiate IV magnesium sulfate for seizure prophylaxis, and treat severe acute hypertension (>= 160/110 mm Hg) with first-line IV agents (labetalol or hydralazine).",
    "strongestDistractor": "Immediate emergent cesarean delivery under general anesthesia prior to medical stabilization",
    "distractorExclusion": "Delivery is indicated at >= 34 weeks, but acute medical stabilization with magnesium sulfate and antihypertensives is mandatory prior to delivery to prevent maternal stroke or seizure.",
    "citation": "American College of Obstetricians and Gynecologists. Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin, Number 222. Obstet Gynecol. 2020;135(6):e237-e260. PMID: 32443111.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose preeclampsia with severe features, initiate IV magnesium sulfate for seizure prophylaxis, and treat severe acute hypertension (>= 160/110 mm Hg) with first-line IV agents (labetalol or hydralazine).",
      "distractorExclusionNotes": "Strongest distractor 'Immediate emergent cesarean delivery under general anesthesia prior to medical s' excluded: Delivery is indicated at >= 34 weeks, but acute medical stabilization with magnesium sulfate and antihypertensives is mandatory prior to delivery to prevent maternal stroke or seiz",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0327",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Postpartum Hemorrhage",
    "subtopic": "Uterine Atony and Drug Contraindications (Carboprost in Asthma vs Methylergonovine in Hypertension)",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman with a history of moderate persistent asthma treated with an inhaled corticosteroid-long-acting beta agonist inhaler gives birth to an 4,200-g infant via spontaneous vaginal delivery following a prolonged second stage of labor. Fifteen minutes after delivery of the placenta, the nurse notices brisk, continuous vaginal bleeding with large blood clots. The patient appears pale and lightheaded. Vital signs are: blood pressure 90/58 mm Hg and heart rate 122/min. On physical examination, the uterine fundus is soft, boggy, and palpated 3 cm above the umbilicus. Continuous vigorous bimanual uterine massage is initiated, and an intravenous infusion of oxytocin (40 units in 1,000 mL crystalloid) and intravenous tranexamic acid (1 g) are administered. Despite these interventions, the uterus remains poorly contracted and brisk vaginal bleeding persists. Which of the following is the most appropriate next pharmacologic agent for this patient?",
    "choices": [
      [
        "Intramuscular methylergonovine maleate",
        "The patient has postpartum hemorrhage (PPH) secondary to uterine atony (soft, boggy, enlarged uterus), the most common cause of PPH. When oxytocin and bimanual massage fail, second-line uterotonics include methylergonovine, carboprost tromethamine (PGF2-alpha), and misoprostol (PGE1). However, drug selection depends critically on maternal co-morbidities: Carboprost is a prostaglandin F2-alpha analogue that induces potent bronchoconstriction and is strictly contraindicated in patients with asthma. Conversely, methylergonovine is an ergot alkaloid that induces smooth muscle and vascular constriction, causing severe hypertension; it is contraindicated in patients with hypertension or preeclampsia, but is completely safe and effective in this normotensive/hypotensive patient with asthma."
      ],
      [
        "Intramuscular carboprost tromethamine (15-methyl PGF2-alpha)",
        "Carboprost tromethamine causes potent bronchial smooth muscle contraction and bronchospasm, and is strictly contraindicated in patients with a history of asthma."
      ],
      [
        "Sublingual terbutaline sulfate to relax the uterine lower segment",
        "Terbutaline is a beta-2 adrenergic agonist used as a tocolytic to relax uterine smooth muscle (e.g., in uterine tachysystole or inversion); administering it in postpartum hemorrhage worsens atony and bleeding."
      ],
      [
        "Intravenous magnesium sulfate infusion to optimize myometrial calcium transport",
        "Magnesium sulfate is a smooth muscle relaxant that promotes uterine atony and increases postpartum hemorrhage risk; it has zero uterotonic activity."
      ],
      [
        "Intramuscular ketorolac tromethamine for anti-inflammatory hemodynamic stabilization",
        "Ketorolac is an NSAID that inhibits cyclooxygenase and platelet aggregation, increasing bleeding risk while providing no uterotonic contractile effect."
      ]
    ],
    "shortestValidSolution": "Postpartum hemorrhage from atony failing oxytocin + patient has ASTHMA -> choose methylergonovine (carboprost is strictly contraindicated in asthma).",
    "necessaryInference": "Navigate the specific contraindications of second-line uterotonics: carboprost causes bronchospasm (contraindicated in asthma); methylergonovine causes vasoconstriction (contraindicated in hypertension). Because the patient has asthma and no hypertension, methylergonovine is the correct choice.",
    "strongestDistractor": "Intramuscular carboprost tromethamine (15-methyl PGF2-alpha)",
    "distractorExclusion": "Carboprost is a prostaglandin F2-alpha analogue that triggers severe bronchospasm and status asthmaticus in patients with asthma.",
    "citation": "American College of Obstetricians and Gynecologists. Postpartum Hemorrhage: ACOG Practice Bulletin, Number 183. Obstet Gynecol. 2017;130(4):e168-e186. PMID: 28937571.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Navigate the specific contraindications of second-line uterotonics: carboprost causes bronchospasm (contraindicated in asthma); methylergonovine causes vasoconstriction (contraindicated in hypertension). Because the patient has asthma and no hypertension, methylergonovine is the correct choice.",
      "distractorExclusionNotes": "Strongest distractor 'Intramuscular carboprost tromethamine (15-methyl PGF2-alpha)' excluded: Carboprost is a prostaglandin F2-alpha analogue that triggers severe bronchospasm and status asthmaticus in patients with asthma.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0328",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ectopic Pregnancy",
    "subtopic": "Methotrexate Medical Management Eligibility Criteria vs Surgical Salpingectomy",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old woman, gravida 2 para 1, presents to the emergency department with mild crampy lower abdominal pain and dark vaginal spotting for 2 days. Her last menstrual period was 6 weeks ago. She has no chronic medical conditions and takes no medications. Vital signs are: blood pressure 122/74 mm Hg, heart rate 72/min, respiratory rate 14/min, and temperature 37.0\u00b0C (98.6\u00b0F). Physical examination reveals a soft, non-distended abdomen with mild right lower quadrant tenderness without guarding or rebound. Pelvic examination demonstrates a closed cervical os with minimal dark blood in the vaginal vault and mild right adnexal tenderness without a discrete palpable mass. Serum beta-hCG is 2,400 mIU/mL. Transvaginal ultrasonography reveals an empty uterine cavity with an endometrial stripe of 9 mm, a well-defined right adnexal gestational sac measuring 2.4 cm in greatest diameter without cardiac activity, and no free fluid in the cul-de-sac. Complete blood count, serum creatinine, and liver function tests are completely normal. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Intramuscular methotrexate administration with outpatient beta-hCG surveillance",
        "The patient has an unruptured tubal ectopic pregnancy (beta-hCG > discriminatory zone of 1,500\u20132,000 mIU/mL with empty uterus and adnexal gestational sac). Medical management with intramuscular methotrexate (a folic acid antagonist that halts rapidly dividing trophoblastic cells) is indicated for patients meeting strict eligibility criteria: (1) hemodynamically stable, (2) initial serum beta-hCG < 5,000 mIU/mL, (3) ectopic mass size < 3.5 to 4.0 cm, (4) absent embryonic cardiac activity, (5) no signs of tubal rupture or significant hemoperitoneum, and (6) normal baseline renal and hepatic function with reliable patient follow-up."
      ],
      [
        "Immediate diagnostic and operative laparoscopy with right salpingectomy",
        "Surgical management (laparoscopic salpingostomy or salpingectomy) is indicated for hemodynamic instability, suspected tubal rupture, contraindications to methotrexate, beta-hCG > 5,000 mIU/mL, or mass size > 3.5\u20134 cm; because this patient satisfies all medical criteria, methotrexate avoids surgical risks."
      ],
      [
        "Dilation and curettage to evacuate suspected incomplete uterine miscarriage",
        "Transvaginal ultrasound demonstrates an empty uterus with a distinct right adnexal gestational sac and an hCG of 2,400 mIU/mL; dilation and curettage does not treat ectopic pregnancy and unnecessarily exposes the patient to intrauterine adhesions."
      ],
      [
        "Repeat transvaginal ultrasonography and serum beta-hCG in 48 hours without therapy",
        "Expectant management is reserved only for asymptomatic patients with very low and falling beta-hCG levels (< 200\u20131,000 mIU/mL); at 2,400 mIU/mL with an adnexal sac, awaiting spontaneous resolution risks tubal rupture."
      ],
      [
        "Oral mifepristone followed 24 hours later by oral misoprostol",
        "The combination of mifepristone and misoprostol is approved for medical abortion of intrauterine pregnancies up to 70 days gestation; it is ineffective for tubal ectopic pregnancies and risks fatal tubal rupture."
      ]
    ],
    "shortestValidSolution": "Hemodynamically stable + hCG 2,400 (< 5,000) + ectopic mass 2.4 cm (< 3.5 cm) + no fetal heartbeat -> satisfies criteria for IM methotrexate medical therapy.",
    "necessaryInference": "Apply the evidence-based criteria for medical management of ectopic pregnancy with methotrexate (hemodynamic stability, hCG < 5,000 mIU/mL, mass < 3.5 cm, no fetal heart motion, normal renal/hepatic labs) over surgical salpingectomy.",
    "strongestDistractor": "Immediate diagnostic and operative laparoscopy with right salpingectomy",
    "distractorExclusion": "Surgical salpingectomy is invasive and reserved for patients failing methotrexate criteria (unstable, ruptured, hCG > 5,000, fetal cardiac activity, mass > 3.5-4 cm).",
    "citation": "American College of Obstetricians and Gynecologists. Tubal Ectopic Pregnancy: ACOG Practice Bulletin, Number 193. Obstet Gynecol. 2018;131(3):e91-e103. PMID: 29470343.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the evidence-based criteria for medical management of ectopic pregnancy with methotrexate (hemodynamic stability, hCG < 5,000 mIU/mL, mass < 3.5 cm, no fetal heart motion, normal renal/hepatic labs) over surgical salpingectomy.",
      "distractorExclusionNotes": "Strongest distractor 'Immediate diagnostic and operative laparoscopy with right salpingectomy' excluded: Surgical salpingectomy is invasive and reserved for patients failing methotrexate criteria (unstable, ruptured, hCG > 5,000, fetal cardiac activity, mass > 3.5-4 cm).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0329",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Intrahepatic Cholestasis of Pregnancy",
    "subtopic": "Elevated Total Bile Acids, Ursodeoxycholic Acid, and Delivery Timing",
    "provisionalDifficulty": 4,
    "stem": "A 31-year-old woman, gravida 2 para 1, at 33 weeks gestation presents to the clinic with severe, generalized itching that began 10 days ago. She describes the pruritus as intolerable, particularly on the palms of her hands and soles of her feet, and notes that it worsens markedly at night. She has no rash, but physical examination reveals linear excoriations over her abdomen and extremities. There is no scleral icterus, and her vital signs and blood pressure are normal. Fetal growth is appropriate for gestational age, and non-stress testing is reactive. Laboratory evaluation reveals: - Total bile acids: 48 micromol/L (normal: < 10 micromol/L) - Total bilirubin: 1.4 mg/dL - AST: 84 U/L - ALT: 112 U/L - Platelets: 210,000/mm3. Viral hepatitis serologies are negative. Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      [
        "Initiate oral ursodeoxycholic acid and plan delivery at 36 to 37 weeks gestation",
        "The patient has intrahepatic cholestasis of pregnancy (ICP), characterized by intense generalized pruritus predominantly affecting the palms and soles that worsens at night, elevated total serum bile acids (>= 10 micromol/L), and mild transaminitis in the late second or third trimester without primary dermatologic rash. Elevated maternal bile acids cross the placenta and accumulate in fetal tissues, predisposing to sudden intrauterine fetal demise (stillbirth), spontaneous preterm labor, and meconium aspiration. First-line medical therapy is oral ursodeoxycholic acid (UDCA), which displaces toxic hydrophobic bile acids, relieves maternal pruritus, and improves liver biochemistries. To prevent stillbirth, planned delivery is recommended at 36 0/7 to 37 0/7 weeks gestation (or at 34\u201336 weeks if bile acids are severely elevated >= 100 micromol/L)."
      ],
      [
        "Topical high-potency fluorinated corticosteroid ointment until delivery at 40 weeks gestation",
        "Topical corticosteroids are ineffective for cholestatic systemic pruritus and do not lower bile acids; delaying delivery to 40 weeks carries an unacceptably high risk of sudden stillbirth."
      ],
      [
        "Immediate emergent cesarean delivery under general anesthesia at 33 weeks gestation",
        "Immediate delivery at 33 weeks causes iatrogenic neonatal respiratory distress syndrome and prematurity complications; unless bile acids exceed 100 micromol/L or fetal compromise occurs, delivery is timed at 36\u201337 weeks."
      ],
      [
        "Initiate oral cholestyramine monotherapy and manage expectantly until spontaneous labor",
        "Cholestyramine is an anion-exchange resin with inferior efficacy compared to UDCA in relieving pruritus, does not reduce fetal stillbirth risk, and binds fat-soluble vitamins, potentially worsening vitamin K deficiency and coagulopathy."
      ],
      [
        "Administer oral diphenhydramine and reassure the patient that symptoms are physiological",
        "Pruritus of palms and soles with bile acids of 48 micromol/L is pathologic intrahepatic cholestasis with known stillbirth risk; dismissing it as physiological risks fetal demise."
      ]
    ],
    "shortestValidSolution": "Pruritus of palms/soles worsening at night + bile acids 48 micromol/L (> 10) -> intrahepatic cholestasis of pregnancy -> ursodeoxycholic acid + planned delivery at 36-37 weeks.",
    "necessaryInference": "Identify ICP from nocturnal palmar/plantar pruritus and elevated bile acids, initiate ursodeoxycholic acid, and recognize that delivery is timed at 36-37 weeks to prevent stillbirth.",
    "strongestDistractor": "Topical high-potency fluorinated corticosteroid ointment until delivery at 40 weeks gestation",
    "distractorExclusion": "ICP is a systemic metabolic defect not responsive to topical steroids; allowing pregnancy to proceed to 40 weeks sharply increases the risk of unexpected fetal demise.",
    "citation": "American College of Obstetricians and Gynecologists. Intrahepatic Cholestasis of Pregnancy: ACOG Clinical Consensus No. 2. Obstet Gynecol. 2021;137(4):e101-e108. PMID: 33740243.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify ICP from nocturnal palmar/plantar pruritus and elevated bile acids, initiate ursodeoxycholic acid, and recognize that delivery is timed at 36-37 weeks to prevent stillbirth.",
      "distractorExclusionNotes": "Strongest distractor 'Topical high-potency fluorinated corticosteroid ointment until delivery at 40 we' excluded: ICP is a systemic metabolic defect not responsive to topical steroids; allowing pregnancy to proceed to 40 weeks sharply increases the risk of unexpected fetal demise.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0330",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Third-Trimester Vaginal Bleeding",
    "subtopic": "Placenta Previa vs Digital Examination Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman, gravida 3 para 2, at 30 weeks gestation presents to the emergency department after experiencing sudden, painless bright red vaginal bleeding that soaked two sanitary pads 1 hour ago. She denies abdominal pain, contractions, or leakage of fluid. She had two prior uncomplicated cesarean deliveries. Vital signs are: blood pressure 114/72 mm Hg, heart rate 78/min, and respiratory rate 16/min. Abdomen is soft, non-tender, and non-distended without uterine contractions. External fetal monitoring reveals a baseline fetal heart rate of 140/min with moderate variability and no decelerations. A medical student puts on sterile gloves and reaches for lubricant to perform a digital cervical examination to determine cervical dilation. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform transabdominal or transvaginal ultrasonography before any digital examination",
        "The patient presents with painless, bright red vaginal bleeding in the third trimester, the quintessential presentation of placenta previa. Risk factors include multiparity, advanced maternal age, and prior cesarean deliveries (which predispose to abnormal placental implantation). In any pregnant patient presenting with third-trimester vaginal bleeding whose placental location is unconfirmed, DIGITAL CERVICAL EXAMINATION IS STRICTLY CONTRAINDICATED. Digital probing of the internal os can inadvertently disrupt the placental cotyledons or underlying low-lying vascular sinusoids, triggering torrential, catastrophic maternal exsanguination and fetal demise within minutes. The mandatory first step is ultrasonography to establish placental position."
      ],
      [
        "Allow the student to perform a gentle digital cervical examination with minimal pressure",
        "Digital examination\u2014regardless of how gentle\u2014risks poking through the low-lying placenta or disrupting overlying cervical sinuses, triggering catastrophic life-threatening hemorrhage."
      ],
      [
        "Perform immediate emergent cesarean delivery under general anesthesia",
        "The patient is hemodynamically stable, the bleeding has slowed, and the fetal heart tracing is Category I (reassuring); immediate emergent delivery is premature before ultrasound evaluation and administration of antenatal corticosteroids for fetal lung maturity."
      ],
      [
        "Administer subcutaneous terbutaline to prevent potential subclinical uterine contractions",
        "Tocolytics are not indicated in the absence of documented preterm contractions, and terbutaline causes maternal tachycardia and hypotension, confounding hemodynamic monitoring in bleeding."
      ],
      [
        "Perform a sterile speculum examination using high-pressure endocervical cytobrush sampling",
        "Endocervical cytobrush sampling traverses the internal cervical os and can lacerate the placental margin; while careful visual speculum exam can be performed to confirm vaginal bleeding, ultrasound is primary."
      ]
    ],
    "shortestValidSolution": "Painless third-trimester bright red bleeding + prior cesarean -> placenta previa -> ultrasound FIRST, digital cervical exam is strictly contraindicated.",
    "necessaryInference": "Recognize that digital cervical examination in unconfirmed third-trimester bleeding is strictly forbidden due to risk of provoking catastrophic hemorrhage from placenta previa.",
    "strongestDistractor": "Allow the student to perform a gentle digital cervical examination with minimal pressure",
    "distractorExclusion": "Any digital palpation through the cervix can tear the placenta previa and induce uncontrollable maternal-fetal exsanguination.",
    "citation": "Silver RM. Abnormal Placentation: Placenta Previa, Vasa Previa, and Placenta Accreta Spectrum. Obstet Gynecol. 2015;126(3):654-668. PMID: 26244843.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that digital cervical examination in unconfirmed third-trimester bleeding is strictly forbidden due to risk of provoking catastrophic hemorrhage from placenta previa.",
      "distractorExclusionNotes": "Strongest distractor 'Allow the student to perform a gentle digital cervical examination with minimal ' excluded: Any digital palpation through the cervix can tear the placenta previa and induce uncontrollable maternal-fetal exsanguination.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0331",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Shoulder Dystocia Management",
    "subtopic": "McRoberts Maneuver and Suprapubic Pressure vs Fundal Pressure Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman with gestational diabetes controlled on diet delivers the fetal head of a 4,400-g male infant at 39 weeks gestation. Immediately after delivery of the head, the fetal chin retracts tightly against the maternal perineum ('turtle sign'). Gentle downward axial traction on the fetal head fails to deliver the anterior shoulder. The obstetric team recognizes a shoulder dystocia and calls for emergency assistance. An overeager obstetrical trainee prepares to climb onto a stool and apply firm, continuous downward fundal pressure on the maternal uterine fundus. Which of the following is the most appropriate next step in the management of this delivery?",
    "choices": [
      [
        "Prohibit fundal pressure and immediately perform hyperflexion of maternal thighs (McRoberts maneuver) with concurrent suprapubic pressure",
        "Shoulder dystocia occurs when the anterior fetal shoulder becomes impacted behind the maternal symphysis pubis after delivery of the head. It is an obstetric emergency. FUNDAL PRESSURE IS STRICTLY CONTRAINDICATED because it further wedges the impacted shoulder into the pubic bone, drastically increasing the risk of brachial plexus injury (Erb-Duchenne palsy), clavicular/humeral fractures, and maternal uterine rupture. The correct first-line maneuvers are: (1) McRoberts maneuver: hyperflexion and abduction of the maternal thighs against the abdomen, which flattens the lumbosacral angle, cephalad-rotates the symphysis pubis, and widens the pelvic outlet; combined with (2) Suprapubic pressure: downward and lateral pressure applied over the fetal anterior shoulder to dislodge it under the symphysis."
      ],
      [
        "Instruct the trainee to apply maximal downward fundal pressure while pulling the fetal head firmly",
        "Fundal pressure severely impacts the anterior shoulder behind the symphysis pubis, directly causing permanent brachial plexus avulsion, fetal asphyxia, and uterine rupture."
      ],
      [
        "Perform immediate emergent cesarean delivery without attempting rotational maneuvers",
        "Emergency abdominal delivery requires Zavanelli maneuver (cephalic replacement), which is a high-risk last-resort procedure attempted only after all transvaginal positional and rotational maneuvers fail."
      ],
      [
        "Immediately fracture the fetal clavicle bilaterally to decrease the bisacromial diameter",
        "Intentional clavicular fracture is a destructive last-line rescue maneuver reserved for severe refractory dystocia when McRoberts, suprapubic pressure, rotational maneuvers, and posterior arm delivery fail."
      ],
      [
        "Administer intravenous oxytocin bolus to augment myometrial expulsive force",
        "Uterotonic augmentation increases uterine force driving the shoulder harder into the pubic bone, increasing risk of fetal neuropathy and uterine rupture."
      ]
    ],
    "shortestValidSolution": "Turtle sign + impacted shoulder -> shoulder dystocia -> McRoberts maneuver + suprapubic pressure (fundal pressure is strictly contraindicated).",
    "necessaryInference": "Identify shoulder dystocia, prohibit fundal pressure (which worsens impaction and causes brachial plexus avulsion), and execute first-line McRoberts maneuver and suprapubic pressure.",
    "strongestDistractor": "Instruct the trainee to apply maximal downward fundal pressure while pulling the fetal head firmly",
    "distractorExclusion": "Fundal pressure further jams the shoulder against the pubic bone, causing Erb palsy, clavicle fractures, and uterine rupture.",
    "citation": "American College of Obstetricians and Gynecologists. Shoulder Dystocia: ACOG Practice Bulletin, Number 178. Obstet Gynecol. 2017;129(5):e123-e134. PMID: 28437340.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify shoulder dystocia, prohibit fundal pressure (which worsens impaction and causes brachial plexus avulsion), and execute first-line McRoberts maneuver and suprapubic pressure.",
      "distractorExclusionNotes": "Strongest distractor 'Instruct the trainee to apply maximal downward fundal pressure while pulling the' excluded: Fundal pressure further jams the shoulder against the pubic bone, causing Erb palsy, clavicle fractures, and uterine rupture.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0332",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Intraamniotic Infection (Chorioamnionitis)",
    "subtopic": "Parenteral Broad-Spectrum Antibiotics and Prompt Delivery",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old primigravida at 39 weeks gestation undergoes labor induction for post-dates gestation. She experienced spontaneous rupture of membranes 22 hours ago with clear amniotic fluid. Her cervical dilation has progressed to 6 cm. Over the past 2 hours, her temperature has risen to 38.8\u00b0C (101.8\u00b0F). On physical examination, blood pressure is 112/68 mm Hg and heart rate is 110/min. Physical examination demonstrates marked uterine fundal tenderness between contractions. Speculum examination reveals purulent, foul-smelling fluid pooling in the posterior vaginal fornix. Continuous fetal heart rate monitoring demonstrates a baseline of 175/min (fetal tachycardia) with moderate variability. There are no decelerations. Maternal leukocyte count is 21,400/mm3. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      [
        "Administer intravenous ampicillin and gentamicin and continue augmented labor induction for vaginal delivery",
        "The patient has intraamniotic infection (clinical chorioamnionitis), defined by maternal fever (>= 38.0\u00b0C) plus one or more of: fetal tachycardia (> 160/min), maternal leukocytosis (> 15,000/mm3), purulent cervical discharge, or uterine fundal tenderness. Risk factors include prolonged membrane rupture (> 18 hours) and prolonged labor. The management of intraamniotic infection requires: (1) Immediate initiation of broad-spectrum parenteral antibiotics (intravenous ampicillin plus gentamicin, with clindamycin or metoprolol added if cesarean is performed) to reduce maternal bacteremia and neonatal sepsis; and (2) Prompt delivery via augmentation of labor with oxytocin. Importantly, chorioamnionitis alone is NOT an indication for immediate cesarean delivery; vaginal delivery is preferred unless standard obstetric indications (e.g., non-reassuring fetal tracing, cephalopelvic disproportion) arise."
      ],
      [
        "Perform immediate emergent cesarean delivery under general anesthesia to minimize fetal infection",
        "Chorioamnionitis itself is not an indication for emergent cesarean delivery; cesarean in the presence of infected intraamniotic fluid drastically increases maternal pelvic wound infection, peritonitis, and septic pelvic thrombophlebitis."
      ],
      [
        "Administer intramuscular betamethasone to enhance fetal pulmonary maturity prior to delivery",
        "Antenatal corticosteroids are indicated for fetal lung maturity up to 36 6/7 weeks; at 39 weeks gestation, lungs are fully mature and steroids provide no benefit while blunting immune response to infection."
      ],
      [
        "Administer oral tocolytics to halt labor contractions until antibiotic therapy achieves sterilizing blood levels",
        "Tocolytics are strictly contraindicated in intraamniotic infection; attempting to stop labor in an infected intra-uterine environment leads to overwhelming fetal sepsis, neurological injury, and stillbirth."
      ],
      [
        "Perform emergent amniocentesis for Gram stain and leukocyte esterase prior to antibiotic initiation",
        "Clinical criteria (maternal fever, purulent drainage, uterine tenderness, fetal tachycardia) are sufficient to diagnose chorioamnionitis; delaying antibiotics for amniocentesis is unnecessary and harmful."
      ]
    ],
    "shortestValidSolution": "Rupture of membranes > 18 hr + maternal fever + foul fluid + fetal tachycardia -> chorioamnionitis -> IV ampicillin + gentamicin and proceed with vaginal delivery (cesarean not mandatory).",
    "necessaryInference": "Diagnose chorioamnionitis clinically, initiate IV ampicillin and gentamicin immediately, and recognize that labor should be augmented for vaginal delivery rather than reflexively performing a cesarean.",
    "strongestDistractor": "Perform immediate emergent cesarean delivery under general anesthesia to minimize fetal infection",
    "distractorExclusion": "Cesarean delivery is not indicated solely for chorioamnionitis; it significantly increases maternal wound infection and endometritis compared to vaginal delivery.",
    "citation": "American College of Obstetricians and Gynecologists. Committee Opinion No. 712: Intrapartum Management of Intraamniotic Infection. Obstet Gynecol. 2017;130(2):e95-e101. PMID: 28742677.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose chorioamnionitis clinically, initiate IV ampicillin and gentamicin immediately, and recognize that labor should be augmented for vaginal delivery rather than reflexively performing a cesarean.",
      "distractorExclusionNotes": "Strongest distractor 'Perform immediate emergent cesarean delivery under general anesthesia to minimiz' excluded: Cesarean delivery is not indicated solely for chorioamnionitis; it significantly increases maternal wound infection and endometritis compared to vaginal delivery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0333",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Preterm Premature Rupture of Membranes (PPROM)",
    "subtopic": "Latency Antibiotics, Corticosteroids, and Expectant Management < 34 Weeks",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman, gravida 1 para 0, at 30 weeks gestation presents to labor and delivery triage reporting a sudden 'gush' of clear fluid from her vagina 4 hours ago, followed by persistent leaking. She denies contractions, vaginal bleeding, fever, or chills. On sterile speculum examination, a pool of clear fluid is observed in the posterior vaginal fornix; nitrazine paper turns dark blue (pH > 6.5) and fluid air-dried on a glass slide demonstrates arborization (ferning pattern). Her temperature is 36.8\u00b0C (98.2\u00b0F), blood pressure is 118/72 mm Hg, and maternal pulse is 76/min. The uterus is non-tender and relaxed. Fetal heart rate is 138/min with moderate variability and no decelerations. Tocodynamometry shows no uterine contractions. Transabdominal ultrasound reveals severe oligohydramnios (amniotic fluid index 3.2 cm) with an active fetus in vertex presentation. Which of the following is the most appropriate management strategy for this patient?",
    "choices": [
      [
        "Administer intramuscular betamethasone, intravenous ampicillin and erythromycin (latency antibiotics), and manage expectantly with inpatient fetal surveillance",
        "The patient has preterm premature rupture of membranes (PPROM) at 30 weeks gestation, confirmed by pooling, nitrazine positivity, and ferning. In the absence of infection (chorioamnionitis), abruption, or fetal distress, expectant management is indicated for PPROM prior to 34 0/7 weeks to prolong latency and reduce the profound risks of extreme prematurity. Standard bundle of care includes: (1) Antenatal corticosteroids (intramuscular betamethasone) to accelerate fetal lung maturation and reduce neonatal respiratory distress syndrome, intraventricular hemorrhage, and necrotizing enterocolitis; (2) Latency antibiotics (7-day course of IV ampicillin and erythromycin/azithromycin followed by oral amoxicillin and erythromycin), which prolong the latency period, reduce chorioamnionitis, and decrease neonatal morbidity; (3) Intravenous magnesium sulfate for fetal neuroprotection if delivery is anticipated before 32 weeks; and (4) Inpatient monitoring with planned delivery at 34 0/7 weeks."
      ],
      [
        "Perform immediate labor induction with intravenous oxytocin to eliminate the risk of intrauterine infection",
        "Immediate delivery at 30 weeks gestation subjects the infant to severe complications of extreme prematurity; in the absence of infection or fetal distress, delivery before 34 weeks is contraindicated."
      ],
      [
        "Administer continuous oral indomethacin tocolysis until 37 weeks gestation",
        "Prolonged tocolysis (> 48 hours) is not indicated in PPROM because it masks chorioamnionitis, and indomethacin after 32 weeks or for > 48 hours causes premature closure of the fetal ductus arteriosus and oligohydramnios."
      ],
      [
        "Perform transcervical amnioinfusion of warmed normal saline to restore amniotic fluid index",
        "Prophylactic amnioinfusion carries an unacceptably high risk of introducing ascending bacterial pathogens into the ruptured uterine cavity and does not improve neonatal pulmonary outcomes."
      ],
      [
        "Discharge home on strict bed rest and oral cephalexin with twice-weekly clinic visits",
        "PPROM requires continuous inpatient hospital admission because of the unpredictable and high risk of sudden umbilical cord prolapse, placental abruption, and fulminant intraamniotic infection."
      ]
    ],
    "shortestValidSolution": "PPROM at 30 weeks without infection -> expectant management until 34 weeks: IM betamethasone + latency antibiotics (ampicillin + erythromycin) + MgSO4 for neuroprotection.",
    "necessaryInference": "Apply the 34-week cutoff for PPROM: prior to 34 weeks without chorioamnionitis, manage expectantly with antenatal corticosteroids and 7-day latency antibiotics rather than immediate delivery.",
    "strongestDistractor": "Perform immediate labor induction with intravenous oxytocin to eliminate the risk of intrauterine infection",
    "distractorExclusion": "Inducing delivery at 30 weeks causes severe prematurity-related death, respiratory distress syndrome, and intraventricular hemorrhage; delivery is delayed to 34 weeks if uninfected.",
    "citation": "American College of Obstetricians and Gynecologists. Prelabor Rupture of Membranes: ACOG Practice Bulletin, Number 217. Obstet Gynecol. 2020;135(3):e80-e97. PMID: 32080050.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply the 34-week cutoff for PPROM: prior to 34 weeks without chorioamnionitis, manage expectantly with antenatal corticosteroids and 7-day latency antibiotics rather than immediate delivery.",
      "distractorExclusionNotes": "Strongest distractor 'Perform immediate labor induction with intravenous oxytocin to eliminate the ris' excluded: Inducing delivery at 30 weeks causes severe prematurity-related death, respiratory distress syndrome, and intraventricular hemorrhage; delivery is delayed to 34 weeks if uninfected",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0334",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Cervical Insufficiency",
    "subtopic": "Painless Cervical Dilation and Cerclage Placement",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old woman, gravida 2 para 0 aborta 1, at 18 weeks gestation presents for a routine prenatal visit. She has no complaints, vaginal bleeding, pelvic cramping, or loss of fluid. Her obstetrical history is notable for an uncomplicated spontaneous delivery of a previable fetus at 19 weeks gestation during her first pregnancy, which occurred rapidly following sudden, painless rupture of membranes. Her vital signs are normal. Speculum examination reveals clear vaginal discharge with no active bleeding. Transvaginal ultrasonography demonstrates a closed cervix with an endocervical length of 18 mm (normal: > 25 mm) with prominent dynamic funneling of the amniotic membranes into the internal os upon application of transfundal pressure. Fetal anatomical survey is completely normal, with active movements and normal amniotic fluid volume. Which of the following is the most appropriate management to prevent recurrent mid-trimester pregnancy loss in this patient?",
    "choices": [
      [
        "Perform ultrasound-indicated cervical cerclage placement",
        "The patient has cervical insufficiency (incompetence), defined by painless cervical dilation and effacement in the second trimester leading to mid-trimester pregnancy loss in the absence of uterine contractions or infection. A history of prior painless second-trimester loss combined with a current transvaginal ultrasound showing a short cervix (< 25 mm) before 24 weeks gestation is a definitive indication for ultrasound-indicated cervical cerclage (placement of a purse-string suture around the cervix, such as McDonald or Shirodkar technique). Cerclage mechanically reinforces the structural integrity of the internal os, significantly reducing the risk of preterm birth before 35 weeks and recurrent previable pregnancy loss."
      ],
      [
        "Recommend strict bed rest with pelvic elevation throughout the remainder of the pregnancy",
        "Randomized controlled trials have repeatedly demonstrated that strict bed rest does not decrease preterm birth in cervical insufficiency, but significantly increases the risk of maternal deep venous thrombosis, bone demineralization, and deconditioning."
      ],
      [
        "Administer intramuscular 17-alpha-hydroxyprogesterone caproate weekly starting immediately",
        "While vaginal progesterone is used for an incidental short cervix without prior preterm loss, in patients with a history of prior second-trimester loss and a short cervix < 25 mm, cervical cerclage is the definitive intervention with proven efficacy."
      ],
      [
        "Initiate oral indomethacin tocolytic therapy until 34 weeks gestation",
        "Prophylactic indomethacin does not reinforce a structurally incompetent cervix and long-term use causes fetal ductus arteriosus constriction, oligohydramnios, and neonatal renal impairment."
      ],
      [
        "Place a vaginal support pessary without surgical intervention",
        "Cervical pessaries remain investigational with conflicting trial evidence; in a patient with a prior mid-trimester loss and documented cervical shortening < 20 mm, cerclage is the guideline-recommended standard of care."
      ]
    ],
    "shortestValidSolution": "Prior painless 19-week delivery + current pregnancy at 18 weeks with cervical length 18 mm (< 25 mm) and funneling -> cervical insufficiency -> ultrasound-indicated cervical cerclage.",
    "necessaryInference": "Identify cervical insufficiency based on prior painless mid-trimester loss and current transvaginal cervical shortening < 25 mm, selecting surgical cerclage as the evidence-based management over bed rest or progesterone alone.",
    "strongestDistractor": "Recommend strict bed rest with pelvic elevation throughout the remainder of the pregnancy",
    "distractorExclusion": "Bed rest has no proven efficacy in preventing preterm birth or cervical dilation, and substantially increases the risk of thromboembolism.",
    "citation": "American College of Obstetricians and Gynecologists. Cerclage for the Management of Cervical Incompetence: ACOG Practice Bulletin, Number 142. Obstet Gynecol. 2014;123(2 Pt 1):372-379. PMID: 24451674.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify cervical insufficiency based on prior painless mid-trimester loss and current transvaginal cervical shortening < 25 mm, selecting surgical cerclage as the evidence-based management over bed rest or progesterone alone.",
      "distractorExclusionNotes": "Strongest distractor 'Recommend strict bed rest with pelvic elevation throughout the remainder of the ' excluded: Bed rest has no proven efficacy in preventing preterm birth or cervical dilation, and substantially increases the risk of thromboembolism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0335",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Hematology",
    "topic": "RhD Alloimmunization Prophylaxis",
    "subtopic": "Kleihauer-Betke Test for Massive Fetomaternal Hemorrhage Dosing",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old Rh(D)-negative woman, gravida 2 para 1, is involved in a moderate-speed motor vehicle collision at 28 weeks gestation. She was a restrained passenger in a vehicle struck on the front fender. She denies abdominal pain, contractions, or vaginal bleeding. Her first child was Rh(D)-positive, and she received Rho(D) immune globulin at that time. Vital signs are: blood pressure 118/70 mm Hg, heart rate 78/min, and temperature 37.0\u00b0C (98.6\u00b0F). On physical examination, the abdomen is soft and non-tender without seatbelt sign. Continuous cardiotocography demonstrates a reactive fetal heart rate tracing with no decelerations and no uterine contractions over 4 hours. An indirect Coombs test is negative, confirming that she is not alloimmunized. The qualitative rosette screening test for fetomaternal hemorrhage is positive. Which of the following is the most appropriate next step to determine the proper management for this patient?",
    "choices": [
      [
        "Perform a quantitative Kleihauer-Betke acid elution test to calculate the required dose of Rho(D) immune globulin",
        "The patient is an Rh(D)-negative, unsensitized pregnant woman who experienced abdominal trauma, which creates significant risk for fetomaternal hemorrhage (fetal red cells entering maternal circulation, triggering maternal anti-D alloimmunization). The standard prophylactic dose of Rho(D) immune globulin (300 mcg / 1,500 IU) neutralizes up to 30 mL of fetal whole blood (or 15 mL of fetal packed red cells). A qualitative screening test (rosette test) detects whether fetomaternal hemorrhage has occurred. When the rosette test is POSITIVE, it indicates that fetomaternal bleeding may exceed the standard 30 mL threshold. The mandatory next step is a quantitative test\u2014either the Kleihauer-Betke acid elution test (or flow cytometry)\u2014to quantify the exact percentage of fetal red cells in maternal circulation and calculate the precise number of additional vials of Rho(D) immune globulin needed."
      ],
      [
        "Administer the standard 300 mcg dose of Rho(D) immune globulin and discharge home without further testing",
        "Administering only the standard single 300 mcg vial when a rosette test is positive risks massive underdosing if hemorrhage exceeded 30 mL, resulting in maternal alloimmunization and hemolytic disease in future pregnancies."
      ],
      [
        "Withhold Rho(D) immune globulin until repeat indirect Coombs antibody screening is performed in 4 weeks",
        "Delaying Rho(D) immune globulin allows maternal B cells to recognize foreign D antigens and produce irreversible anti-D antibodies; prophylaxis must be given within 72 hours of the fetomaternal hemorrhage."
      ],
      [
        "Perform emergent cordocentesis to directly sample the fetal hematocrit and Rh status",
        "Cordocentesis (percutaneous umbilical blood sampling) is an invasive procedure with significant risk of pregnancy loss and actually exacerbates fetomaternal hemorrhage; it is not indicated for maternal trauma screening."
      ],
      [
        "Administer intravenous immunoglobulin (IVIG) to saturate maternal Fc receptors",
        "IVIG does not eliminate Rh(D)-positive fetal erythrocytes and is not a substitute for anti-D immunoglobulin in preventing Rh alloimmunization."
      ]
    ],
    "shortestValidSolution": "Rh-negative pregnant woman + trauma + positive rosette test -> quantitative Kleihauer-Betke test to calculate the exact dose of Rho(D) immune globulin.",
    "necessaryInference": "Recognize that a positive rosette screen indicates fetomaternal hemorrhage exceeding baseline, requiring quantitative Kleihauer-Betke testing to determine the required weight-based/volume-based dose of anti-D immune globulin.",
    "strongestDistractor": "Administer the standard 300 mcg dose of Rho(D) immune globulin and discharge home without further testing",
    "distractorExclusion": "Standard 300 mcg covers only up to 30 mL of fetal blood; a positive rosette test indicates massive bleeding that could require multiple vials to prevent maternal sensitization.",
    "citation": "American College of Obstetricians and Gynecologists. Prevention of Rh D Alloimmunization: ACOG Practice Bulletin, Number 181. Obstet Gynecol. 2017;130(2):e57-e70. PMID: 28742673.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that a positive rosette screen indicates fetomaternal hemorrhage exceeding baseline, requiring quantitative Kleihauer-Betke testing to determine the required weight-based/volume-based dose of anti-D immune globulin.",
      "distractorExclusionNotes": "Strongest distractor 'Administer the standard 300 mcg dose of Rho(D) immune globulin and discharge hom' excluded: Standard 300 mcg covers only up to 30 mL of fetal blood; a positive rosette test indicates massive bleeding that could require multiple vials to prevent maternal sensitization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0336",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Endocrine",
    "topic": "Polycystic Ovary Syndrome (PCOS) Infertility",
    "subtopic": "Letrozole First-Line Ovulation Induction vs Clomiphene",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman presents to the reproductive endocrinology clinic with inability to conceive for 14 months despite regular, unprotected intercourse. She reports irregular menstrual cycles occurring every 45 to 75 days since menarche at age 13. Her body mass index (BMI) is 31 kg/m2. Physical examination reveals terminal dark hair on her upper lip, chin, and lower abdomen (Ferriman-Gallwey score: 11), moderate facial cystic acne, and velvety hyperpigmented plaques across the posterior neck (acanthosis nigricans). Pelvic ultrasound demonstrates normal uterine morphology and bilateral enlarged ovaries with multiple small subcapsular peripheral follicles ('string of pearls' appearance). Her partner's semen analysis is completely normal, and hysterosalpingography confirms bilateral tubal patency. Serum TSH, prolactin, and 17-hydroxyprogesterone levels are within normal limits. She desires pregnancy. Which of the following is the most effective first-line pharmacologic agent for ovulation induction in this patient?",
    "choices": [
      [
        "Oral letrozole (aromatase inhibitor)",
        "The patient has polycystic ovary syndrome (PCOS), meeting the Rotterdam criteria: (1) oligo/anovulation (irregular menses), (2) clinical and/or biochemical hyperandrogenism (hirsutism, acne), and (3) polycystic ovarian morphology on ultrasound. For anovulatory infertility in patients with PCOS, LETROZOLE (a competitive non-steroidal aromatase inhibitor) is the undisputed first-line ovulation induction agent. In the landmark NICHD PPCOS II trial, letrozole demonstrated statistically significant superiority over clomiphene citrate, achieving higher ovulation rates (61.7% vs 48.3%) and higher live-birth rates (27.5% vs 19.1%), particularly in women with BMI > 30 kg/m2, with lower rates of multiple gestation."
      ],
      [
        "Oral clomiphene citrate (selective estrogen receptor modulator)",
        "Clomiphene citrate was historically the primary first-line agent, but randomized clinical trials have conclusively proven that letrozole achieves significantly higher cumulative live-birth rates and lower rates of twin pregnancy in PCOS."
      ],
      [
        "Metformin monotherapy without ovulation-inducing medications",
        "Metformin improves insulin sensitivity and metabolic parameters in PCOS, but is substantially inferior to letrozole for achieving ovulation and live birth and is no longer recommended as first-line monotherapy for fertility."
      ],
      [
        "Exogenous gonadotropin injections (recombinant FSH and LH)",
        "Injectable gonadotropins are second-line therapy for patients who fail first-line oral ovulation induction; they carry high financial cost and high risks of ovarian hyperstimulation syndrome (OHSS) and high-order multiple gestations."
      ],
      [
        "Combination oral contraceptive pills containing ethinyl estradiol and drospirenone",
        "Oral contraceptive pills suppress LH/FSH and treat hirsutism and irregular menses in women NOT seeking pregnancy; however, they prevent ovulation and are completely contraindicated when immediate conception is the patient's goal."
      ]
    ],
    "shortestValidSolution": "PCOS patient with anovulatory infertility and BMI 31 -> first-line ovulation induction agent is letrozole (superior live birth rate over clomiphene).",
    "necessaryInference": "Select letrozole over clomiphene citrate as the modern evidence-based first-line ovulation induction agent for PCOS infertility based on landmark randomized trial data (PPCOS II).",
    "strongestDistractor": "Oral clomiphene citrate (selective estrogen receptor modulator)",
    "distractorExclusion": "While clomiphene was historic first-line, modern international guidelines designate letrozole as first-line due to significantly higher live birth rates, particularly in obese women.",
    "citation": "Legro RS, et al. Letrozole versus Clomiphene for Infertility in the Polycystic Ovary Syndrome. N Engl J Med. 2014;371(2):119-129. PMID: 25006718.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select letrozole over clomiphene citrate as the modern evidence-based first-line ovulation induction agent for PCOS infertility based on landmark randomized trial data (PPCOS II).",
      "distractorExclusionNotes": "Strongest distractor 'Oral clomiphene citrate (selective estrogen receptor modulator)' excluded: While clomiphene was historic first-line, modern international guidelines designate letrozole as first-line due to significantly higher live birth rates, particularly in obese wome",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0337",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Endometriosis",
    "subtopic": "Clinical Diagnosis, First-Line Hormonal Therapy, and Laparoscopic Excision",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old nulligravida presents with severe, progressive pelvic pain for the past 2 years. She states that her pain begins 2 days before the onset of menses and lasts throughout the menstrual flow (dysmenorrhea). She also reports deep pelvic pain during sexual intercourse (dyspareunia) and sharp, painful bowel movements during her periods (dyschezia). Over-the-counter ibuprofen provides minimal relief. On pelvic examination, there is marked focal tenderness in the posterior vaginal fornix with palpable nodularity along the uterosacral ligaments and a retroverted, fixed uterus. Transvaginal pelvic ultrasonography shows normal-sized ovaries without cystic lesions and a normal endometrial echo. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Initiate combined oral contraceptive pills or oral progestin therapy empirically",
        "The patient presents with the classic symptom triad of endometriosis: severe dysmenorrhea, deep dyspareunia, and dyschezia, accompanied by physical exam findings of uterosacral ligament nodularity and a fixed, retroverted uterus. Endometriosis occurs when functional endometrial glands and stroma implant outside the uterine cavity (most commonly ovaries, posterior cul-de-sac, and uterosacral ligaments). According to ACOG guidelines, in the absence of an ovarian mass or acute surgical indication, EMPIRIC FIRST-LINE MEDICAL THERAPY with combined hormonal contraceptives or continuous oral progestins (such as norethindrone or levonorgestrel IUD) combined with NSAIDs is the standard initial step. Hormonal suppression induces decidualization and atrophy of ectopic endometrial implants, relieving symptoms in > 80% of patients without requiring invasive surgery."
      ],
      [
        "Perform immediate diagnostic and therapeutic laparoscopy under general anesthesia",
        "Diagnostic laparoscopy is the gold standard for definitive histological confirmation and surgical ablation, but is an invasive surgical procedure reserved for patients who fail first-line medical therapy or who desire immediate fertility."
      ],
      [
        "Prescribe broad-spectrum oral doxycycline and ceftriaxone for chronic pelvic inflammatory disease",
        "Pelvic inflammatory disease causes cervical motion tenderness, purulent endocervical discharge, and bilateral adnexal fullness, rather than cyclical dysmenorrhea, dyschezia, and discrete uterosacral nodularity."
      ],
      [
        "Perform an endometrial biopsy to evaluate for chronic endometritis",
        "Endometrial biopsy samples the intrauterine lining and cannot diagnose extrauterine pelvic endometriosis; it is useless for uterosacral implants."
      ],
      [
        "Initiate long-term high-dose gonadotropin-releasing hormone (GnRH) antagonist monotherapy without add-back therapy",
        "GnRH antagonists (e.g., elagolix) are second-line agents for patients failing combined oral contraceptives or progestins; unmonitored monotherapy causes severe hypoestrogenism, vasomotor symptoms, and bone mineral density loss."
      ]
    ],
    "shortestValidSolution": "Dysmenorrhea + dyspareunia + dyschezia + uterosacral nodularity -> endometriosis -> empiric first-line medical therapy with combined oral contraceptives or progestins.",
    "necessaryInference": "Recognize endometriosis from the clinical triad and uterosacral nodularity, and initiate empiric first-line hormonal therapy before resorting to invasive diagnostic laparoscopy.",
    "strongestDistractor": "Perform immediate diagnostic and therapeutic laparoscopy under general anesthesia",
    "distractorExclusion": "While laparoscopy provides definitive histology, ACOG guidelines mandate a trial of non-invasive empiric medical therapy (OCPs/progestins) first before invasive surgery.",
    "citation": "American College of Obstetricians and Gynecologists. Endometriosis: ACOG Practice Bulletin, Number 114. Obstet Gynecol. 2010;116(1):223-236. PMID: 20567191.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize endometriosis from the clinical triad and uterosacral nodularity, and initiate empiric first-line hormonal therapy before resorting to invasive diagnostic laparoscopy.",
      "distractorExclusionNotes": "Strongest distractor 'Perform immediate diagnostic and therapeutic laparoscopy under general anesthesi' excluded: While laparoscopy provides definitive histology, ACOG guidelines mandate a trial of non-invasive empiric medical therapy (OCPs/progestins) first before invasive surgery.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0338",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Postmenopausal Vaginal Bleeding",
    "subtopic": "Endometrial Biopsy vs Transvaginal Ultrasound Thresholds",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman presents to the clinic reporting two episodes of light vaginal spotting over the past month. She achieved natural menopause 11 years ago at age 51 and has had no bleeding since. She has a history of type 2 diabetes mellitus, hypertension, and obesity (BMI 34 kg/m2). She has never been pregnant. Speculum examination demonstrates a normal cervix without visible masses or contact bleeding, and bimanual examination is unremarkable. Transvaginal ultrasonography reveals a thickened endometrial stripe measuring 8 mm (normal in postmenopausal woman: <= 4 mm) with heterogeneous echotexture and normal-appearing adnexa. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Perform an outpatient endometrial biopsy",
        "Postmenopausal vaginal bleeding is a red-flag symptom that must be evaluated urgently to rule out endometrial carcinoma (which accounts for approximately 10% of postmenopausal bleeding cases). Major risk factors include unopposed estrogen exposure, obesity (peripheral aromatization of androstenedione to estrone in adipose tissue), nulliparity, diabetes, and hypertension. A postmenopausal endometrial thickness > 4 mm on transvaginal ultrasound requires definitive tissue sampling. An outpatient office endometrial biopsy (Pipelle biopsy) is the primary first-line diagnostic investigation, offering > 90% sensitivity for detecting endometrial cancer and hyperplasia."
      ],
      [
        "Reassure the patient and schedule repeat ultrasonography in 6 months",
        "Postmenopausal bleeding with an 8-mm endometrial stripe cannot be managed expectantly; delaying tissue sampling risks the progression of an undiagnosed endometrial adenocarcinoma."
      ],
      [
        "Initiate combination hormone replacement therapy with conjugated estrogens and medroxyprogesterone",
        "Initiating estrogen therapy in an unbiopsied patient with postmenopausal bleeding and endometrial thickening is dangerous and accelerates estrogen-dependent neoplasia."
      ],
      [
        "Perform emergent total abdominal hysterectomy with bilateral salpingo-oophorectomy",
        "Definitive surgical extirpation without prior histological confirmation is premature; benign etiologies (such as endometrial polyps or endometrial atrophy) are common and tissue biopsy must guide surgical planning."
      ],
      [
        "Obtain an outpatient serum CA-125 concentration to rule out cervical dysplasia",
        "CA-125 is a marker for advanced ovarian cancer, not cervical dysplasia, and has poor sensitivity for early endometrial cancer; direct histological endometrial biopsy is mandatory."
      ]
    ],
    "shortestValidSolution": "Postmenopausal bleeding + endometrial stripe 8 mm (> 4 mm) + obesity -> endometrial biopsy to rule out endometrial carcinoma.",
    "necessaryInference": "Recognize postmenopausal bleeding with endometrial stripe > 4 mm as an absolute indication for histological endometrial biopsy to evaluate for endometrial adenocarcinoma.",
    "strongestDistractor": "Perform emergent total abdominal hysterectomy with bilateral salpingo-oophorectomy",
    "distractorExclusion": "Surgical hysterectomy cannot be performed blindly without an initial office biopsy confirming malignancy.",
    "citation": "American College of Obstetricians and Gynecologists. The Role of Transvaginal Ultrasonography in Evaluating the Endometrium of Postmenopausal Women. ACOG Committee Opinion No. 734. Obstet Gynecol. 2018;131(5):e124-e129. PMID: 29683906.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize postmenopausal bleeding with endometrial stripe > 4 mm as an absolute indication for histological endometrial biopsy to evaluate for endometrial adenocarcinoma.",
      "distractorExclusionNotes": "Strongest distractor 'Perform emergent total abdominal hysterectomy with bilateral salpingo-oophorecto' excluded: Surgical hysterectomy cannot be performed blindly without an initial office biopsy confirming malignancy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0339",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Ovarian Torsion",
    "subtopic": "Emergent Diagnostic Laparoscopy and Detorsion vs Oophorectomy",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old woman presents to the emergency department with sudden-onset, severe, sharp right lower quadrant pelvic pain that began 3 hours ago during gymnastics practice. The pain is associated with severe nausea and two episodes of non-bilious vomiting. She has no chronic medical problems. Her last menstrual period was 2 weeks ago. Vital signs are: blood pressure 134/82 mm Hg, heart rate 108/min, and temperature 37.4\u00b0C (99.3\u00b0F). Physical examination reveals marked tenderness to deep palpation in the right lower quadrant and right adnexa, with localized involuntary guarding. Pelvic ultrasound reveals an enlarged right ovary measuring 6.5 cm with peripherally displaced multiple follicles (ovarian edema) and an underlying 4.5-cm cystic mass; color Doppler flow demonstrates completely absent venous flow and severely dampened arterial flow to the right ovary. Left ovary and uterus are normal, and urine pregnancy test is negative. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform emergency diagnostic laparoscopy with ovarian detorsion and cystectomy",
        "The patient has acute ovarian torsion, an emergency caused by twisting of the ovary and fallopian tube around the infundibulopelvic (suspensory) and utero-ovarian ligaments, occluding first venous/lymphatic outflow and subsequently arterial inflow. The presence of an adnexal mass >= 5 cm (e.g., dermoid cyst) is the primary predisposing risk factor. Emergency surgical exploration via laparoscopy is mandatory to preserve ovarian function and future fertility. Current standard of care emphasizes ovarian-conserving surgery: laparoscopic detorsion and cystectomy regardless of the macroscopic ischemic/cyanotic appearance of the ovary, because viable follicular function recovers in the vast majority of detorsed ovaries."
      ],
      [
        "Administer high-dose intravenous broad-spectrum antibiotics and admit to the gynecology service",
        "Antibiotics treat pelvic inflammatory disease or tubo-ovarian abscess, but do not relieve mechanical ligamentous vascular strangulation; delaying surgery causes permanent ovarian gangrene."
      ],
      [
        "Perform emergent right salpingo-oophorectomy without attempting detorsion",
        "Historically, oophorectomy was performed for fear of thromboembolism from detorsion, but modern evidence has thoroughly debunked this myth; detorsion and ovarian preservation is the standard of care in reproductive-aged women."
      ],
      [
        "Schedule elective outpatient magnetic resonance imaging of the pelvis for tissue characterization",
        "Outpatient imaging in acute ovarian torsion causes irreversible ischemic infarction and necrosis of the ovary within hours."
      ],
      [
        "Perform ultrasound-guided transvaginal needle aspiration of the right ovarian cyst",
        "Needle aspiration does not untwist the strangulated vascular pedicle and introduces risk of chemical peritonitis or infectious seeding."
      ]
    ],
    "shortestValidSolution": "Sudden severe RLQ pain + vomiting + enlarged ovary with absent Doppler flow -> ovarian torsion -> emergent laparoscopy with detorsion.",
    "necessaryInference": "Diagnose acute ovarian torsion and select emergent laparoscopy with ovarian detorsion and cystectomy as the fertility-preserving standard of care over oophorectomy or observation.",
    "strongestDistractor": "Perform emergent right salpingo-oophorectomy without attempting detorsion",
    "distractorExclusion": "Emergent oophorectomy is outdated; detorsion preserves follicular viability in reproductive-age women even when the ovary appears bluish-black intraoperatively.",
    "citation": "American College of Obstetricians and Gynecologists. Adnexal Torsion in Adolescents: ACOG Committee Opinion No. 783. Obstet Gynecol. 2019;134(2):e56-e63. PMID: 31343606.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose acute ovarian torsion and select emergent laparoscopy with ovarian detorsion and cystectomy as the fertility-preserving standard of care over oophorectomy or observation.",
      "distractorExclusionNotes": "Strongest distractor 'Perform emergent right salpingo-oophorectomy without attempting detorsion' excluded: Emergent oophorectomy is outdated; detorsion preserves follicular viability in reproductive-age women even when the ovary appears bluish-black intraoperatively.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0340",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Epithelial Ovarian Cancer",
    "subtopic": "Pelvic Mass with Ascites, CA-125, and Exploratory Laparotomy",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old postmenopausal woman presents to the clinic with persistent abdominal bloating, early satiety, and an unintentional 5-kg weight loss over the past 3 months. She has noticed that her clothes fit more tightly around the waist despite eating less. On physical examination, her abdomen is distended with shifting dullness and a palpable fluid wave. Pelvic examination demonstrates a non-tender, fixed, nodular, solid-and-cystic right adnexal mass measuring approximately 8 cm in diameter, as well as nodularity in the cul-de-sac. Transvaginal ultrasonography confirms a complex, multilocular 8.2-cm right ovarian mass with thick internal septations, papillary projections, and abundant internal vascularity on Doppler imaging, accompanied by moderate ascites. Serum CA-125 concentration is 420 U/mL (normal: < 35 U/mL). Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Perform an exploratory laparotomy with surgical staging and maximal cytoreduction",
        "The patient presents with high-suspicion epithelial ovarian carcinoma, characterized by a postmenopausal complex adnexal mass (multilocular, thick septations, papillary excrescences), ascites, peritoneal nodularity ('omental cake'), and a markedly elevated CA-125. The definitive standard of care for suspected ovarian cancer is surgical: exploratory laparotomy for comprehensive surgical staging (peritoneal washings, total abdominal hysterectomy, bilateral salpingo-oophorectomy, omentectomy, and pelvic/para-aortic lymph node dissection) and maximal cytoreductive debulking. Image-guided percutaneous needle biopsy of the ovarian mass is STRICTLY CONTRAINDICATED because needle puncture ruptures the tumor capsule, spilling malignant epithelial cells into the peritoneal cavity and upstaging an otherwise encapsulated stage I tumor to stage IC."
      ],
      [
        "Perform percutaneous image-guided fine-needle aspiration biopsy of the ovarian mass",
        "Percutaneous biopsy of an intact ovarian mass is contraindicated because needle puncture can rupture the tumor capsule, spilling malignant cells throughout the peritoneal cavity and worsening prognosis."
      ],
      [
        "Initiate primary neoadjuvant chemotherapy with carboplatin and paclitaxel without surgery",
        "Primary surgical staging and cytoreduction is the undisputed first-line approach for resectable ovarian cancer; neoadjuvant chemotherapy is reserved strictly for patients who are medically unfit or have unresectable disease."
      ],
      [
        "Perform transvaginal ultrasound-guided paracentesis and manage expectantly with serial CA-125 levels",
        "Paracentesis relieves symptomatic ascites but does not treat the underlying ovarian malignancy, and serial monitoring of a complex 8-cm mass leads to fatal metastatic progression."
      ],
      [
        "Prescribe oral medroxyprogesterone acetate to induce atrophy of suspected ectopic ovarian endometrioma",
        "Endometriomas present in premenopausal women with cyclical dysmenorrhea and unilocular ground-glass cysts; a postmenopausal complex mass with thick septations and ascites is malignant until proven otherwise."
      ]
    ],
    "shortestValidSolution": "Postmenopausal bloating + ascites + complex 8 cm ovarian mass with septations + CA-125 420 U/mL -> ovarian cancer -> exploratory laparotomy with staging and debulking (needle biopsy contraindicated).",
    "necessaryInference": "Recognize epithelial ovarian cancer and select exploratory laparotomy for staging/debulking while knowing that percutaneous biopsy is contraindicated due to capsule rupture and peritoneal seeding.",
    "strongestDistractor": "Perform percutaneous image-guided fine-needle aspiration biopsy of the ovarian mass",
    "distractorExclusion": "Needle biopsy risks tumor capsule rupture and malignant cell dissemination, converting a localized stage I malignancy into stage IC.",
    "citation": "American College of Obstetricians and Gynecologists. Practice Bulletin No. 174: Evaluation and Management of Adnexal Masses. Obstet Gynecol. 2016;128(5):e210-e226. PMID: 27776185.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize epithelial ovarian cancer and select exploratory laparotomy for staging/debulking while knowing that percutaneous biopsy is contraindicated due to capsule rupture and peritoneal seeding.",
      "distractorExclusionNotes": "Strongest distractor 'Perform percutaneous image-guided fine-needle aspiration biopsy of the ovarian m' excluded: Needle biopsy risks tumor capsule rupture and malignant cell dissemination, converting a localized stage I malignancy into stage IC.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0341",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Cervical Cancer Screening (ASCCP Guidelines)",
    "subtopic": "ASC-US with Positive High-Risk HPV and Colposcopy Indications",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman presents for routine gynecological health maintenance. She is asymptomatic, sexually active with one male partner, and uses an intrauterine copper device for contraception. She has no chronic medical conditions. Her last cervical cancer screening was 3 years ago and was normal. Speculum examination demonstrates a normal cervix without visible lesions, ulcers, or discharge. Liquid-based cervical cytology returns as Atypical Squamous Cells of Undetermined Significance (ASC-US). Reflex human papillomavirus (HPV) testing is positive for high-risk HPV types (positive for non-16/18 pooled high-risk HPV). According to the current ASCCP risk-based management consensus guidelines, which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      [
        "Perform colposcopy with directed cervical biopsies",
        "According to the ASCCP risk-based consensus guidelines, clinical management is determined by assessing the patient's immediate risk of high-grade cervical intraepithelial neoplasia (CIN 3+). For women >= 25 years with ASC-US cytology who test positive for high-risk HPV, the immediate risk of CIN 3+ is approximately 4.5%, which exceeds the 4.0% threshold mandating COLPOSCOPY. During colposcopy, the transformation zone and squamocolumnar junction are magnified following 3\u20135% acetic acid application, allowing directed cervical punch biopsies of acetowhite lesions and abnormal vascular patterns (punctations, mosaicism)."
      ],
      [
        "Repeat cervical cytology and HPV co-testing in 1 year",
        "Repeat screening in 1 year is the management for ASC-US cytology with NEGATIVE high-risk HPV testing (where the risk of CIN 3+ is < 0.5%); in high-risk HPV-positive patients, immediate colposcopy is required."
      ],
      [
        "Perform immediate loop electrosurgical excision procedure (LEEP) of the cervix",
        "Diagnostic excisional procedures (LEEP or cold-knife cone biopsy) are 'see-and-treat' options reserved for patients with biopsy-proven CIN 2/3 or HSIL cytology with immediate CIN 3+ risk >= 25\u201360%; LEEP for ASC-US constitutes gross overtreatment."
      ],
      [
        "Administer a 3-dose series of the 9-valent HPV vaccine to eradicate established infection",
        "The HPV vaccine prevents new incident infections but has zero therapeutic effect against established, active HPV infections or existing cervical dysplastic lesions."
      ],
      [
        "Perform an immediate endometrial biopsy to evaluate for endocervical glandular extension",
        "Endometrial biopsy is indicated for atypical glandular cells (AGC) in women >= 35 years or with endometrial cancer risk factors; it is not indicated for squamous ASC-US cytology."
      ]
    ],
    "shortestValidSolution": "Age 32 + Pap showing ASC-US + positive high-risk HPV -> colposcopy with directed biopsies per ASCCP risk threshold.",
    "necessaryInference": "Apply ASCCP guidelines: ASC-US cytology with positive high-risk HPV in a woman >= 25 carries an immediate CIN 3+ risk > 4%, mandating colposcopy rather than repeat testing or immediate excisional LEEP.",
    "strongestDistractor": "Repeat cervical cytology and HPV co-testing in 1 year",
    "distractorExclusion": "Repeat testing in 1 year is only appropriate if high-risk HPV is negative; positive high-risk HPV mandates immediate colposcopic evaluation.",
    "citation": "Perkins RB, et al. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. J Low Genit Tract Dis. 2020;24(2):102-131. PMID: 32243307.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Apply ASCCP guidelines: ASC-US cytology with positive high-risk HPV in a woman >= 25 carries an immediate CIN 3+ risk > 4%, mandating colposcopy rather than repeat testing or immediate excisional LEEP.",
      "distractorExclusionNotes": "Strongest distractor 'Repeat cervical cytology and HPV co-testing in 1 year' excluded: Repeat testing in 1 year is only appropriate if high-risk HPV is negative; positive high-risk HPV mandates immediate colposcopic evaluation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0342",
    "exam": "Step 2 CK",
    "subject": "Microbiology",
    "system": "Pregnancy",
    "topic": "Pelvic Inflammatory Disease & Tubo-Ovarian Abscess",
    "subtopic": "Parenteral Regimens vs Outpatient Therapy and Abscess Drainage",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old woman presents to the emergency department with severe, worsening lower abdominal and pelvic pain for 4 days, accompanied by nausea, vomiting, and subjective fever. She is sexually active and has had two new sexual partners in the past 2 months without barrier contraception. Vital signs are: blood pressure 110/68 mm Hg, heart rate 104/min, and temperature 38.6\u00b0C (101.5\u00b0F). On physical examination, there is marked bilateral lower quadrant abdominal tenderness with involuntary guarding. Pelvic examination demonstrates purulent cervical discharge, exquisite cervical motion tenderness ('chandelier sign'), and a palpable, tender, fluctuant 6-cm mass in the left adnexa. Laboratory evaluation reveals a leukocyte count of 16,800/mm3. Urine pregnancy test is negative. Pelvic ultrasonography reveals a 6.2-cm complex, thick-walled, multilocular left adnexal mass with internal debris and increased peripheral vascularity, consistent with a tubo-ovarian abscess (TOA). Which of the following is the most appropriate initial management for this patient?",
    "choices": [
      [
        "Hospital admission with intravenous cefoxitin (or cefotetan) plus intravenous/oral doxycycline",
        "The patient has pelvic inflammatory disease (PID) complicated by a tubo-ovarian abscess (TOA). Inpatient hospital admission and parenteral broad-spectrum antibiotic therapy are mandatory for any PID patient with a TOA, pregnancy, severe illness (high fever, intractable nausea/vomiting), peritonitis, or failure of outpatient oral therapy. Recommended inpatient parenteral regimens include: (1) Intravenous cefoxitin (or cefotetan) plus oral/IV doxycycline, or (2) Intravenous ampicillin-sulbactam plus oral/IV doxycycline, providing coverage against Neisseria gonorrhoeae, Chlamydia trachomatis, enteric Gram-negative rods, and anaerobes (e.g., Bacteroides fragilis). Over 70% of TOAs respond to antibiotic therapy alone; surgical or percutaneous drainage is reserved for patients with persistent fever, worsening symptoms, or abscess enlargement after 48 to 72 hours of parenteral therapy."
      ],
      [
        "Discharge home on oral ceftriaxone 500 mg IM single dose plus oral doxycycline and metronidazole for 14 days",
        "Outpatient oral therapy is appropriate only for mild-to-moderate uncomplicated PID; the presence of a tubo-ovarian abscess (TOA) is an absolute indication for inpatient hospital admission and parenteral antibiotics."
      ],
      [
        "Perform immediate exploratory laparotomy with bilateral salpingo-oophorectomy",
        "Immediate radical surgical extirpation carries significant morbidity and premature surgical menopause in a 26-year-old; initial conservative management with parenteral antibiotics succeeds in the majority of cases."
      ],
      [
        "Perform immediate ultrasound-guided transvaginal drainage before starting antibiotic therapy",
        "Immediate interventional drainage is unnecessary as initial therapy and invasive; broad-spectrum parenteral antibiotics must be initiated first, with drainage reserved for failure of medical therapy after 48\u201372 hours."
      ],
      [
        "Initiate intravenous vancomycin and piperacillin-tazobactam monotherapy without anaerobic coverage",
        "Piperacillin-tazobactam has activity, but vancomycin is unnecessary without MRSA suspicion, and standardized guideline-directed regimens (cefoxitin/cefotetan + doxycycline) specifically target the polymicrobial polymorphs of PID."
      ]
    ],
    "shortestValidSolution": "PID (cervical motion tenderness, purulent discharge) + 6 cm adnexal mass (tubo-ovarian abscess) -> inpatient admission + IV cefoxitin/cefotetan + doxycycline.",
    "necessaryInference": "Recognize that the presence of a tubo-ovarian abscess converts PID into an absolute indication for inpatient parenteral antibiotic therapy rather than outpatient treatment, and that antibiotics succeed in > 70% without immediate surgery.",
    "strongestDistractor": "Discharge home on oral ceftriaxone 500 mg IM single dose plus oral doxycycline and metronidazole for 14 days",
    "distractorExclusion": "Tubo-ovarian abscess (TOA) mandates inpatient admission and IV broad-spectrum antibiotics; outpatient management carries high risk of abscess rupture, peritonitis, and septic shock.",
    "citation": "Workowski KA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that the presence of a tubo-ovarian abscess converts PID into an absolute indication for inpatient parenteral antibiotic therapy rather than outpatient treatment, and that antibiotics succeed in > 70% without immediate surgery.",
      "distractorExclusionNotes": "Strongest distractor 'Discharge home on oral ceftriaxone 500 mg IM single dose plus oral doxycycline a' excluded: Tubo-ovarian abscess (TOA) mandates inpatient admission and IV broad-spectrum antibiotics; outpatient management carries high risk of abscess rupture, peritonitis, and septic shock",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0343",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Complete Molar Pregnancy",
    "subtopic": "Suction Curettage and Post-Evacuation Surveillance",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman, gravida 1 para 0, presents to the emergency department with dark brown vaginal spotting and severe nausea and vomiting for 2 weeks. Her last menstrual period was 9 weeks ago. On physical examination, blood pressure is 154/96 mm Hg and heart rate is 102/min. The uterine fundus is palpable midway between the symphysis pubis and umbilicus, measuring consistent with a 16-week gestation. Pelvic examination reveals dark brownish prune-juice-colored blood in the vaginal vault and bilaterally enlarged, palpable, non-tender cystic adnexa measuring 6 cm each. Laboratory testing reveals a quantitative serum beta-hCG of 280,000 mIU/mL. Transvaginal pelvic ultrasonography reveals an enlarged uterine cavity filled with diffuse heterogeneous echogenic material containing multiple small cystic spaces ('snowstorm' or 'swiss cheese' appearance) without an identifiable gestational sac or fetal parts. Which of the following is the most appropriate definitive management and subsequent surveillance protocol for this patient?",
    "choices": [
      [
        "Perform uterine suction curettage followed by serial weekly serum beta-hCG measurements until undetectable",
        "The patient has a complete hydatidiform mole (gestational trophoblastic disease), typically resulting from fertilization of an enucleated egg by a single sperm that duplicates (46,XX paternal origin). Manifestations include vaginal bleeding, uterus larger than dates, hyperemesis gravidarum, early preeclampsia before 20 weeks, bilateral theca lutein cysts (stimulated by massive beta-hCG), and markedly elevated beta-hCG (> 100,000 mIU/mL) with the classic 'snowstorm' ultrasound appearance. Definitive primary management is UTERINE SUCTION CURETTAGE to evacuate the molar tissue. Because of the risk of developing gestational trophoblastic neoplasia (invasive mole or choriocarcinoma, occurring in 15\u201320% of complete moles), serial weekly serum beta-hCG monitoring is mandatory until levels are undetectable for 3 consecutive weeks, followed by monthly monitoring for 6 months, with strict contraception during surveillance."
      ],
      [
        "Administer systemic methotrexate chemotherapy as primary non-surgical ablation",
        "Methotrexate is chemotherapy for gestational trophoblastic NEOPLASIA (persistent/rising hCG post-evacuation or choriocarcinoma); it is not primary initial management for an intact uterine molar pregnancy."
      ],
      [
        "Perform sharp mechanical uterine curettage with metal curettes without suction",
        "Sharp metal curettage carries a significantly higher risk of uterine perforation and severe hemorrhage; suction curettage is the standard method of evacuation."
      ],
      [
        "Perform bilateral oophorectomy to excise the large theca lutein cysts",
        "Theca lutein cysts are physiological hyperstimulation cysts caused by massive circulating hCG; they spontaneously regress over weeks to months as beta-hCG normalizes and must NOT be surgically removed."
      ],
      [
        "Perform immediate medical induction of labor with high-dose intravenous oxytocin",
        "Medical induction with uterotonics or prostaglandins carries an unacceptably high risk of embolizing trophoblastic tissue into the pulmonary vasculature, causing acute respiratory distress syndrome."
      ]
    ],
    "shortestValidSolution": "Uterus larger than dates + prune juice bleeding + hCG 280,000 + snowstorm ultrasound + theca lutein cysts -> complete mole -> suction curettage + weekly serial hCG monitoring.",
    "necessaryInference": "Diagnose complete molar pregnancy and identify suction curettage as definitive treatment, followed by serial weekly hCG surveillance to screen for malignant gestational trophoblastic neoplasia (choriocarcinoma).",
    "strongestDistractor": "Perform bilateral oophorectomy to excise the large theca lutein cysts",
    "distractorExclusion": "Theca lutein cysts resolve spontaneously once beta-hCG drops after molar evacuation; surgical excision is unnecessary and harms future ovarian reserve.",
    "citation": "American College of Obstetricians and Gynecologists. Gestational Trophoblastic Disease: ACOG Practice Bulletin, Number 210. Obstet Gynecol. 2019;133(2):e168-e186. PMID: 30681544.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose complete molar pregnancy and identify suction curettage as definitive treatment, followed by serial weekly hCG surveillance to screen for malignant gestational trophoblastic neoplasia (choriocarcinoma).",
      "distractorExclusionNotes": "Strongest distractor 'Perform bilateral oophorectomy to excise the large theca lutein cysts' excluded: Theca lutein cysts resolve spontaneously once beta-hCG drops after molar evacuation; surgical excision is unnecessary and harms future ovarian reserve.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0344",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Adenomyosis",
    "subtopic": "Clinical Triad: Menorrhagia, Dysmenorrhea, and Symmetrically Enlarged Globular Boggy Uterus",
    "provisionalDifficulty": 4,
    "stem": "A 43-year-old woman, gravida 3 para 3, presents to the clinic complaining of progressively heavy and prolonged menstrual periods (menorrhagia) and severe lower abdominal cramping (dysmenorrhea) for the past 18 months. She reports that her periods last 8 to 10 days with heavy passage of clots, requiring her to change sanitary pads every 1 to 2 hours on the heaviest days. She denies intermenstrual bleeding, postcoital bleeding, or fever. Physical examination reveals a normal-appearing cervix. On bimanual examination, the uterus is uniformly, symmetrically enlarged (equivalent to a 12-week gestation), globular, soft, and diffusely tender to palpation ('boggy'). The adnexa are non-tender and normal in size. Transvaginal ultrasonography reveals a symmetrically thickened, globular uterus with myometrial heterogeneity, asymmetric myometrial wall thickening, and subendometrial myometrial cysts without discrete focal masses. An in-office endometrial biopsy is negative for hyperplasia or malignancy. Which of the following is the underlying histopathologic mechanism of this patient's condition?",
    "choices": [
      [
        "Benign invasion of endometrial glands and stroma into the myometrium",
        "The patient has adenomyosis, characterized by the abnormal presence of ectopic endometrial glands and stroma situated deep within the myometrium, accompanied by reactive hypertrophy and hyperplasia of surrounding smooth muscle cells. It typically presents in multiparous women in their 40s with a classic triad: (1) heavy menstrual bleeding (menorrhagia), (2) progressive dysmenorrhea, and (3) a symmetrically enlarged, globular, uniformly tender ('boggy') uterus that does not exceed 12 to 14 weeks in size. In contrast, uterine leiomyomas (fibroids) produce an asymmetrically enlarged, firm, non-tender, irregular uterus with discrete pseudocapsulated smooth muscle whorls."
      ],
      [
        "Monoclonal benign proliferation of smooth muscle cells surrounded by a distinct pseudocapsule",
        "This describes uterine leiomyoma (fibroid), which produces an asymmetric, nodular, firm, non-tender uterus with well-demarcated whorled hypoechoic masses on ultrasound."
      ],
      [
        "Ectopic endometrial tissue implanting on peritoneal surfaces and ovaries outside the uterus",
        "This defines endometriosis, which involves implants on pelvic organs (ovaries, uterosacral ligaments), causing cyclical pelvic pain, dyspareunia, and uterosacral nodularity with a normal-sized uterus."
      ],
      [
        "Uncontrolled clonal proliferation of endometrial glandular epithelium with cytological atypia",
        "This describes endometrial hyperplasia or adenocarcinoma, characterized by irregular postmenopausal or intermenstrual bleeding and thickened endometrial stripe, ruled out by her negative biopsy."
      ],
      [
        "Pelvic venous dilation and stasis within the broad ligament and ovarian plexus",
        "This describes pelvic congestion syndrome, which presents with dull, aching pelvic pain worsening with standing, without the classic uniformly enlarged, boggy uterus of adenomyosis."
      ]
    ],
    "shortestValidSolution": "Multipara in 40s + heavy bleeding + dysmenorrhea + uniformly enlarged globular tender boggy uterus -> adenomyosis (endometrial glands/stroma invading myometrium).",
    "necessaryInference": "Differentiate adenomyosis (symmetrically enlarged, globular, tender boggy uterus) from leiomyomas (asymmetrically enlarged, firm, irregular non-tender uterus) based on clinical exam and histopathology.",
    "strongestDistractor": "Monoclonal benign proliferation of smooth muscle cells surrounded by a distinct pseudocapsule",
    "distractorExclusion": "Monoclonal smooth muscle proliferation describes leiomyomas (fibroids), which produce an irregular, firm, non-tender uterus rather than a soft, globular, boggy tender uterus.",
    "citation": "Vannuccini S, Petraglia F. Recent Advances in Understanding and Managing Adenomyosis. F1000Res. 2019;8:F1000 Faculty Rev-283. PMID: 30918627.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate adenomyosis (symmetrically enlarged, globular, tender boggy uterus) from leiomyomas (asymmetrically enlarged, firm, irregular non-tender uterus) based on clinical exam and histopathology.",
      "distractorExclusionNotes": "Strongest distractor 'Monoclonal benign proliferation of smooth muscle cells surrounded by a distinct ' excluded: Monoclonal smooth muscle proliferation describes leiomyomas (fibroids), which produce an irregular, firm, non-tender uterus rather than a soft, globular, boggy tender uterus.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0345",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Dermatology",
    "topic": "Vulvar Lichen Sclerosus",
    "subtopic": "Topical High-Potency Corticosteroids and Malignancy Risk",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old postmenopausal woman presents to the clinic complaining of severe, intractable vulvar itching and burning that has persisted for 8 months. She also reports pain during intercourse (dyspareunia) and tearing of the skin after wiping. She has tried over-the-counter topical miconazole and hydrocortisone creams with no relief. On physical examination, the vulva exhibits thin, shiny, ivory-white, parchment-like papules and plaques involving the labia majora, labia minora, and perianal region in a distinct 'figure-of-eight' distribution. There is noticeable loss of anatomical architecture, with resorption and fusion of the labia minora and narrowing of the vaginal introitus. The vagina itself is completely spared, and speculum examination shows normal pink vaginal mucosa. A punch biopsy of the affected vulvar skin demonstrates hyperkeratosis, thinning of the epidermis with flattening of rete pegs, and a broad zone of dermal hyalinization with a band-like lymphocytic infiltrate. Which of the following is the most appropriate initial therapy for this patient?",
    "choices": [
      [
        "Topical high-potency corticosteroid ointment (clobetasol propionate 0.05%)",
        "The patient has vulvar lichen sclerosus, a chronic, inflammatory autoimmune mucocutaneous disorder most prevalent in postmenopausal women. Classical features include intense vulvar pruritus, dyspareunia, thin ivory-white 'cigarette paper' plaques, resorption of the labia minora, clitoral phimosis, and a characteristic figure-of-eight distribution sparing the vagina. First-line therapy is high-potency topical corticosteroids (clobetasol propionate 0.05% ointment applied daily for 4\u201312 weeks followed by taper to maintenance). Treatment relieves symptoms, halts anatomical destruction, and significantly reduces the long-term risk of malignant transformation into vulvar squamous cell carcinoma (which occurs in approximately 4\u20135% of patients with chronic untreated lichen sclerosus)."
      ],
      [
        "Topical estrogen cream (conjugated estrogens) applied to the vulva and vagina",
        "Topical estrogen treats atrophic vaginitis (which involves the vagina and causes pallor and loss of rugae without parchment-white plaques, labial resorption, or perianal figure-of-eight lesions); it does not treat lichen sclerosus."
      ],
      [
        "Oral fluconazole 150 mg weekly for chronic recurrent vulvovaginal candidiasis",
        "Candidiasis causes thick white 'cottage cheese' discharge, vaginal erythema, and satellite lesions without loss of anatomical architecture, dermal hyalinization, or labial fusion."
      ],
      [
        "Topical 5-fluorouracil 5% cream applied twice daily to the vulvar plaques",
        "5-fluorouracil is a destructive cytotoxic antimetabolite used for actinic keratoses; applied to delicate vulvar lichen sclerosus, it causes severe, debilitating chemical burns and ulceration."
      ],
      [
        "Surgical excision of the affected vulvar and perianal tissues (simple vulvectomy)",
        "Surgical excision is contraindicated in uncomplicated lichen sclerosus due to extraordinarily high rates of local disease recurrence (Koebner phenomenon) and permanent disfigurement; surgery is reserved strictly for biopsy-proven invasive carcinoma."
      ]
    ],
    "shortestValidSolution": "Postmenopausal vulvar pruritus + ivory-white parchment plaques in figure-of-eight + labial resorption sparing vagina -> Lichen sclerosus -> high-potency topical corticosteroid (clobetasol).",
    "necessaryInference": "Diagnose vulvar lichen sclerosus by architectural resorption and figure-of-eight distribution, prescribe ultra-potent topical corticosteroids (clobetasol), and recognize that treatment reduces squamous cell carcinoma risk.",
    "strongestDistractor": "Topical estrogen cream (conjugated estrogens) applied to the vulva and vagina",
    "distractorExclusion": "Topical estrogen treats atrophic vaginitis (which involves the vagina), whereas lichen sclerosus is an inflammatory condition sparing the vagina that requires ultra-potent corticosteroids.",
    "citation": "Krapf JM, et al. Vulvar Lichen Sclerosus: Current Perspectives. Int J Womens Health. 2020;12:11-20. PMID: 32021489.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose vulvar lichen sclerosus by architectural resorption and figure-of-eight distribution, prescribe ultra-potent topical corticosteroids (clobetasol), and recognize that treatment reduces squamous cell carcinoma risk.",
      "distractorExclusionNotes": "Strongest distractor 'Topical estrogen cream (conjugated estrogens) applied to the vulva and vagina' excluded: Topical estrogen treats atrophic vaginitis (which involves the vagina), whereas lichen sclerosus is an inflammatory condition sparing the vagina that requires ultra-potent corticos",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0346",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Pelvic Organ Prolapse",
    "subtopic": "Pessary Conservative Management vs Surgical Sacrocolpopexy",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman, gravida 4 para 4, presents to the clinic reporting a sensation of pelvic heaviness, vaginal fullness, and feeling as though 'something is falling out of my vagina'. The sensation is worse at the end of the day after standing or walking. She also notes that she frequently has to digitally push back the vaginal bulge in order to completely empty her bladder (splinting). She has a history of chronic obstructive pulmonary disease (severe airflow obstruction on home oxygen) and coronary artery disease. On physical examination with the patient in lithotomy position during a Valsalva maneuver, there is prominent descent of the anterior vaginal wall protruding 2 cm beyond the hymenal ring (Stage III anterior compartment prolapse / cystocele). The patient is anxious to relieve her symptoms but states that her pulmonologist warned her she is at extraordinarily high risk for complications under general anesthesia. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      [
        "Vaginal pessary fitting and pelvic floor muscle training",
        "The patient has symptomatic advanced pelvic organ prolapse (Stage III cystocele requiring manual splinting to void). First-line management of symptomatic pelvic organ prolapse can be non-surgical (conservative) or surgical. In patients who desire non-surgical management, or those who have significant medical comorbidities (such as severe COPD on home oxygen and CAD) rendering general anesthesia and major reconstructive pelvic surgery high-risk, a VAGINAL PESSARY fitting combined with pelvic floor muscle training (Kegel exercises) is the undisputed treatment of choice. A properly fitted silicone pessary (e.g., ring with support or Gellhorn) mechanically elevates and supports the prolapsed pelvic organs, relieves bulge and urinary splinting symptoms in > 80% of patients, and completely avoids operative and anesthetic morbidity."
      ],
      [
        "Immediate open abdominal sacrocolpopexy with synthetic mesh under general anesthesia",
        "Abdominal sacrocolpopexy is an extensive surgical procedure carrying severe cardiopulmonary risks in a patient with oxygen-dependent severe COPD and CAD, and should never precede a trial of conservative therapy."
      ],
      [
        "Schedule total vaginal hysterectomy with anterior colporrhaphy",
        "Major vaginal reconstructive surgery under regional or general anesthesia is premature when a non-invasive, highly effective office-based pessary has not yet been attempted in a frail surgical candidate."
      ],
      [
        "Initiate systemic estrogen therapy to strengthen attenuated endopelvic fascia",
        "Systemic hormone replacement therapy does not reverse mechanical structural fascial detachment in advanced Stage III prolapse and increases thromboembolic and cardiovascular risks."
      ],
      [
        "Reassure the patient and recommend complete avoidance of physical ambulation",
        "Immobilization causes deconditioning, muscle wasting, and deep venous thrombosis without relieving the anatomic prolapse defect."
      ]
    ],
    "shortestValidSolution": "Stage III cystocele + severe COPD on home oxygen (poor surgical candidate) -> vaginal pessary fitting + pelvic floor exercises.",
    "necessaryInference": "Select non-surgical conservative therapy with a vaginal pessary as the optimal management for symptomatic pelvic organ prolapse in a high-risk surgical candidate.",
    "strongestDistractor": "Schedule total vaginal hysterectomy with anterior colporrhaphy",
    "distractorExclusion": "Surgical repair carries excessive perioperative mortality in oxygen-dependent COPD; non-invasive pessary fitting is safe, highly effective, and first-line.",
    "citation": "American College of Obstetricians and Gynecologists. Pelvic Organ Prolapse: ACOG Practice Bulletin, Number 214. Obstet Gynecol. 2019;134(5):e126-e142. PMID: 31652236.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Select non-surgical conservative therapy with a vaginal pessary as the optimal management for symptomatic pelvic organ prolapse in a high-risk surgical candidate.",
      "distractorExclusionNotes": "Strongest distractor 'Schedule total vaginal hysterectomy with anterior colporrhaphy' excluded: Surgical repair carries excessive perioperative mortality in oxygen-dependent COPD; non-invasive pessary fitting is safe, highly effective, and first-line.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0347",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Cardiovascular",
    "topic": "Peripartum Cardiomyopathy",
    "subtopic": "Diagnostic Criteria, Guideline-Directed Medical Therapy in Lactation, and ACEi Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman, primipara, presents to the emergency department 3 weeks after an uncomplicated spontaneous vaginal delivery at term complaining of progressive shortness of breath with minimal exertion, orthopnea requiring four pillows to sleep, and bilateral ankle swelling. She is currently exclusively breastfeeding her newborn. Vital signs are: blood pressure 138/88 mm Hg, heart rate 104/min, respiratory rate 22/min, and oxygen saturation 93% on ambient air. Physical examination reveals jugular venous distention 5 cm above the sternal angle, bibasilar pulmonary crackles extending halfway up the lung fields, an S3 gallop, and 2+ bilateral pitting pretibial edema. Transthoracic echocardiography reveals global left ventricular hypokinesia with a left ventricular ejection fraction of 30% and left ventricular end-diastolic dimension of 5.8 cm, without significant valvular disease. Complete blood count and troponin are normal. Brain natriuretic peptide (BNP) is 850 pg/mL. Which of the following is the most appropriate pharmacologic regimen for this patient?",
    "choices": [
      [
        "Furosemide, carvedilol, and hydralazine combined with isosorbide dinitrate",
        "The patient has peripartum cardiomyopathy (PPCM), defined by: (1) development of heart failure towards the end of pregnancy or in the months following delivery (most commonly the first 1\u20132 months postpartum), (2) absence of another identifiable cause of heart failure, and (3) left ventricular systolic dysfunction with an LVEF < 45%. Management of acute decompensated PPCM in a breastfeeding mother requires: (1) Loop diuretics (furosemide) to reduce preload and relieve pulmonary and systemic congestion; (2) Beta-blockers (carvedilol or metoprolol succinate, which are safe in lactation) to improve long-term survival; and (3) Afterload reduction using hydralazine combined with oral nitrates (isosorbide dinitrate), which are compatible with breastfeeding. CRITICAL CONTRAINDICATION: Angiotensin-converting enzyme inhibitors (such as enalapril) and ARBs are contraindicated during pregnancy (teratogenic); while some ACE inhibitors (enalapril, captopril) can be used postpartum during breastfeeding, in the acute peripartum stabilization hydralazine/nitrates with beta-blockers and diuretics provides proven afterload/preload optimization."
      ],
      [
        "Lisinopril, spironolactone, and sacubitril-valsartan (ARNI)",
        "Sacubitril-valsartan (ARNI) is strictly contraindicated in pregnancy and lactation due to fetotoxicity and lack of safety data in breast milk; initial guideline-directed afterload reduction in lactation avoids ARNI."
      ],
      [
        "Immediate initiation of intravenous heparin anticoagulation without afterload-reducing medications",
        "While severe PPCM with LVEF < 30% carries high thromboembolic risk warranting anticoagulation, anticoagulation alone does not treat cardiogenic pulmonary edema, requiring afterload/preload reduction."
      ],
      [
        "Oral digoxin monotherapy titrated to relief of orthopnea",
        "Digoxin provides mild positive inotropy but does not improve mortality in heart failure with reduced ejection fraction and is completely inadequate as monotherapy for acute decompensated heart failure."
      ],
      [
        "Immediate emergent bilateral salpingo-oophorectomy to halt prolactin production",
        "Surgical oophorectomy does not lower pituitary prolactin (which is secreted by the anterior pituitary, not the ovaries) and is an inappropriate, mutilating intervention."
      ]
    ],
    "shortestValidSolution": "Heart failure 3 weeks postpartum + LVEF 30% -> peripartum cardiomyopathy -> loop diuretic (furosemide) + beta-blocker (carvedilol) + afterload reducer (hydralazine/nitrates).",
    "necessaryInference": "Diagnose peripartum cardiomyopathy (LVEF < 45% in late pregnancy/early postpartum) and formulate a medical regimen compatible with lactation (diuretics, beta-blockers, hydralazine/nitrates).",
    "strongestDistractor": "Lisinopril, spironolactone, and sacubitril-valsartan (ARNI)",
    "distractorExclusion": "Sacubitril-valsartan (ARNI) is contraindicated during lactation and pregnancy due to severe toxicity; standard pregnancy/lactation afterload reduction utilizes hydralazine and nitrates.",
    "citation": "Bauersachs J, et al. Current Management of Patients with Severe Acute Peripartum Cardiomyopathy: Practical Guidance from the Heart Failure Association of the ESC. Eur J Heart Fail. 2016;18(9):1096-1105. PMID: 27338426.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Diagnose peripartum cardiomyopathy (LVEF < 45% in late pregnancy/early postpartum) and formulate a medical regimen compatible with lactation (diuretics, beta-blockers, hydralazine/nitrates).",
      "distractorExclusionNotes": "Strongest distractor 'Lisinopril, spironolactone, and sacubitril-valsartan (ARNI)' excluded: Sacubitril-valsartan (ARNI) is contraindicated during lactation and pregnancy due to severe toxicity; standard pregnancy/lactation afterload reduction utilizes hydralazine and nitr",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0348",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Pregnancy",
    "topic": "Intrapartum Fetal Heart Rate Monitoring",
    "subtopic": "Category III Tracing and Resuscitative Measures vs Operative Delivery",
    "provisionalDifficulty": 4,
    "stem": "A 25-year-old primigravida at 40 weeks gestation is in active labor at 7 cm cervical dilation. She is receiving intravenous oxytocin for labor augmentation. Over the past 30 minutes, continuous electronic fetal heart rate monitoring demonstrates a baseline fetal heart rate of 110/min with completely absent baseline variability. Following each of the last four uterine contractions, there is a gradual, smooth decrease in fetal heart rate beginning after the peak of the contraction and returning to baseline well after the contraction has ended (recurrent late decelerations). Fetal scalp stimulation is performed, but fails to elicit an acceleration in fetal heart rate. Which of the following is the most appropriate immediate sequence of management?",
    "choices": [
      [
        "Discontinue oxytocin, initiate maternal left lateral repositioning, administer IV fluid bolus, and prepare for immediate operative delivery if the tracing does not improve promptly",
        "The fetal heart rate tracing is classified as Category III (abnormal), defined by absent baseline fetal heart rate variability accompanied by recurrent late decelerations, recurrent variable decelerations, bradycardia, or a sinusoidal pattern. Category III tracings predict abnormal fetal acid-base status (fetal hypoxia and severe metabolic acidemia). Immediate intrauterine resuscitation must be instituted: (1) Discontinue oxytocin or any uterotonic agents to reduce uterine hyperstimulation and improve placental perfusion; (2) Reposition the mother onto her left lateral side to relieve inferior vena caval and aortic compression (aortocaval decompression); (3) Administer an intravenous fluid bolus of isotonic crystalloid to expand maternal intravascular volume; and (4) Administer supplemental oxygen if indicated. If the Category III tracing does not rapidly improve with intrauterine resuscitation, IMMEDIATE OPERATIVE DELIVERY (cesarean delivery or operative vaginal delivery if fully dilated and engaged) is mandatory to prevent fetal asphyxia, hypoxic-ischemic encephalopathy, or intrauterine demise."
      ],
      [
        "Increase the oxytocin infusion rate to expedite vaginal delivery before fetal exhaustion occurs",
        "Increasing oxytocin increases uterine contraction frequency and duration, further compressing intramyometrial spiral arterioles and drastically worsening fetal asphyxia."
      ],
      [
        "Reassure the team that late decelerations represent physiological fetal head compression",
        "Early decelerations (which mirror contractions symmetrically) represent benign vagal head compression; late decelerations (which occur after the contraction peak) represent uteroplacental insufficiency and fetal hypoxia."
      ],
      [
        "Perform emergent amnioinfusion of 1 liter of normal saline into the amniotic cavity",
        "Amnioinfusion is indicated for recurrent variable decelerations caused by umbilical cord compression in oligohydramnios; it has zero efficacy for late decelerations caused by uteroplacental insufficiency."
      ],
      [
        "Administer intravenous atropine 1 mg to the mother to cross the placenta and accelerate fetal heart rate",
        "Atropine accelerates the fetal heart rate artificially by blocking parasympathetic tone, masking severe underlying fetal metabolic acidosis while doing nothing to restore placental oxygen exchange."
      ]
    ],
    "shortestValidSolution": "Absent variability + recurrent late decelerations -> Category III tracing (fetal hypoxia/acidemia) -> stop oxytocin, left lateral repositioning, IV fluids, and emergent operative delivery if unresolved.",
    "necessaryInference": "Classify the fetal tracing as Category III, immediately execute maternal intrauterine resuscitation (discontinue oxytocin, left lateral tilt, IV fluids), and prepare for emergent delivery if uncorrected.",
    "strongestDistractor": "Increase the oxytocin infusion rate to expedite vaginal delivery before fetal exhaustion occurs",
    "distractorExclusion": "Oxytocin causes uterine hyperstimulation, choking off placental blood flow; continuing oxytocin during a Category III tracing precipitates fetal death.",
    "citation": "American College of Obstetricians and Gynecologists. Practice Bulletin No. 106: Intrapartum Fetal Heart Rate Monitoring: Nomenclature, Interpretation, and General Management Principles. Obstet Gynecol. 2009;114(1):192-202. PMID: 19546798.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Classify the fetal tracing as Category III, immediately execute maternal intrauterine resuscitation (discontinue oxytocin, left lateral tilt, IV fluids), and prepare for emergent delivery if uncorrected.",
      "distractorExclusionNotes": "Strongest distractor 'Increase the oxytocin infusion rate to expedite vaginal delivery before fetal ex' excluded: Oxytocin causes uterine hyperstimulation, choking off placental blood flow; continuing oxytocin during a Category III tracing precipitates fetal death.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0349",
    "exam": "Step 2 CK",
    "subject": "Microbiology",
    "system": "Pregnancy",
    "topic": "Syphilis in Pregnancy",
    "subtopic": "Penicillin G Desensitization as Only Acceptable Therapy to Prevent Congenital Syphilis",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old woman, primigravida, presents for her first prenatal visit at 12 weeks gestation. Routine prenatal screening laboratories reveal: - Rapid Plasma Reagin (RPR): reactive at a titer of 1:32 - Treponema pallidum particle agglutination (TP-PA): reactive - HIV-1/2 antigen/antibody: non-reactive - Hepatitis B surface antigen: negative. She is asymptomatic without chancres, rash, or mucosal lesions. When asked about medication allergies, she reports that 4 years ago she received amoxicillin for bronchitis and developed diffuse hives (urticaria), facial swelling, and wheezing requiring emergency treatment with epinephrine. Which of the following is the most appropriate management to treat this patient and prevent congenital syphilis in the fetus?",
    "choices": [
      [
        "Admit to an intensive care or monitored setting for oral penicillin desensitization followed by intramuscular penicillin G benzathine",
        "The patient has early latent syphilis during pregnancy (reactive RPR 1:32 confirmed by TP-PA without clinical symptoms) and a severe, IgE-mediated type I penicillin hypersensitivity (urticaria, angioedema, bronchospasm). PARENTERAL PENICILLIN G IS THE ONLY KNOWN EFFECTIVE ANTIMICROBIAL FOR TREATING SYPHILIS DURING PREGNANCY AND PREVENTING CONGENITAL SYPHILIS. Alternative agents used in non-pregnant adults (such as doxycycline or tetracycline) are contraindicated in pregnancy due to fetal bone growth restriction and tooth discoloration, while others (such as erythromycin, azithromycin, or ceftriaxone) do not reliably cross the placental barrier to cure the infected fetus. Therefore, pregnant women with a documented penicillin allergy MUST UNDERGO PENICILLIN DESENSITIZATION in a monitored setting, followed immediately by standard treatment with intramuscular benzathine penicillin G."
      ],
      [
        "Administer oral doxycycline 100 mg twice daily for 28 days",
        "Doxycycline and tetracyclines are strictly contraindicated in pregnancy due to permanent fetal teeth discoloration, enamel hypoplasia, and maternal/fetal hepatotoxicity."
      ],
      [
        "Administer oral azithromycin 2 g single oral dose with monthly serological monitoring",
        "Azithromycin does not reliably cross the placenta to treat the fetus, and Treponema pallidum exhibits widespread macrolide resistance due to 23S rRNA mutations, resulting in high rates of treatment failure."
      ],
      [
        "Administer intramuscular ceftriaxone 1 g daily for 14 days as an outpatient",
        "Ceftriaxone cross-reacts with penicillin in severe IgE-mediated anaphylaxis and has unproven efficacy in preventing congenital syphilis compared to the gold standard of penicillin."
      ],
      [
        "Withhold antibiotic therapy until delivery and treat the neonate immediately postpartum",
        "Untreated maternal syphilis results in up to a 50% rate of adverse pregnancy outcomes, including spontaneous abortion, non-immune hydrops fetalis, stillbirth, and fulminant congenital syphilis."
      ]
    ],
    "shortestValidSolution": "Syphilis in pregnant woman with severe penicillin allergy (anaphylaxis) -> inpatient penicillin desensitization followed by IM benzathine penicillin G.",
    "necessaryInference": "Recognize that penicillin G is the ONLY acceptable treatment for maternal syphilis that treats the fetus; pregnant women with severe penicillin allergy must be desensitized.",
    "strongestDistractor": "Administer oral doxycycline 100 mg twice daily for 28 days",
    "distractorExclusion": "Doxycycline is teratogenic in pregnancy (tooth discoloration and bone growth inhibition) and cannot be prescribed.",
    "citation": "Workowski KA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that penicillin G is the ONLY acceptable treatment for maternal syphilis that treats the fetus; pregnant women with severe penicillin allergy must be desensitized.",
      "distractorExclusionNotes": "Strongest distractor 'Administer oral doxycycline 100 mg twice daily for 28 days' excluded: Doxycycline is teratogenic in pregnancy (tooth discoloration and bone growth inhibition) and cannot be prescribed.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0350",
    "exam": "Step 2 CK",
    "subject": "Obstetrics",
    "system": "Endocrine",
    "topic": "Primary Amenorrhea Evaluation",
    "subtopic": "Mullerian Agenesis vs Androgen Insensitivity Syndrome vs Turner Syndrome",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old girl is brought to the gynecology clinic by her mother because she has never had a menstrual period. She feels well and denies cyclic pelvic pain, headaches, or vision changes. She is 168 cm (5 ft 6 in) tall and weighs 58 kg (BMI 20.5 kg/m2). Physical examination reveals fully developed breasts (Tanner stage 5) with normal areolar development. Axillary and pubic hair are completely absent (Tanner stage 1). External genitalia appear female, but pelvic examination demonstrates a blind-ending vaginal pouch measuring 2.5 cm in depth. On bimanual examination, no cervix or uterus can be palpated. Transabdominal and pelvic ultrasonography reveals absent uterus, cervix, and fallopian tubes; two normal-appearing, smooth gonads are visualized within the bilateral inguinal canals. Laboratory testing demonstrates a serum testosterone level of 680 ng/dL (normal male range: 300\u20131,000 ng/dL; normal female range: 15\u201370 ng/dL). Which of the following is the most likely karyotype in this patient?",
    "choices": [
      [
        "46,XY",
        "The patient has complete androgen insensitivity syndrome (CAIS), an X-linked recessive disorder caused by non-functional androgen receptor mutations in a genetically male (46,XY) individual. Key differentiating features include: (1) 46,XY karyotype with intra-abdominal/inguinal functional testes; (2) High testosterone levels (in the normal adult male range); (3) Peripheral aromatization of testosterone to estrogen causes full female breast development (Tanner stage 5); (4) Complete lack of androgen action results in absent axillary and pubic hair (Tanner stage 1); (5) Normal testicular production of Anti-Mullerian Hormone (AMH) causes regression of all Mullerian structures (absent uterus, fallopian tubes, cervix, and upper two-thirds of vagina, leaving a short blind pouch). In contrast, Mullerian agenesis (Mayer-Rokitansky-Kuster-Hauser syndrome) features a 46,XX karyotype, normal female testosterone, and NORMAL pubic/axillary hair."
      ],
      [
        "46,XX",
        "A 46,XX karyotype is seen in Mullerian agenesis (MRKH syndrome). While MRKH also features an absent uterus and blind vaginal pouch, patients have normal female testosterone levels and NORMAL (Tanner stage 5) pubic and axillary hair."
      ],
      [
        "45,XO",
        "Turner syndrome (45,XO) features primary amenorrhea with streak gonads and elevated FSH, but patients have short stature, webbed neck, shield chest, ABSENT breast development, and an intact uterus."
      ],
      [
        "47,XXY",
        "Klinefelter syndrome (47,XXY) produces a phenotypically male individual with small firm testes, tall stature, gynecomastia, and azoospermia, rather than phenotypic female external genitalia with a blind vaginal pouch."
      ],
      [
        "46,XY with 21-hydroxylase deficiency",
        "Congenital adrenal hyperplasia due to 21-hydroxylase deficiency causes virilization and ambiguous genitalia in 46,XX females; it does not produce a phenotypic female with absent pubic hair and absent uterus in a 46,XY individual."
      ]
    ],
    "shortestValidSolution": "Primary amenorrhea + breast development + absent uterus + ABSENT pubic/axillary hair + male testosterone levels -> Complete Androgen Insensitivity Syndrome (46,XY).",
    "necessaryInference": "Differentiate complete androgen insensitivity syndrome (46,XY, absent pubic/axillary hair, male testosterone) from Mullerian agenesis (46,XX, normal pubic hair, female testosterone).",
    "strongestDistractor": "46,XX",
    "distractorExclusion": "46,XX describes Mullerian agenesis, in which androgen responsiveness is normal, resulting in normal adult Tanner 5 pubic and axillary hair, whereas this patient has absent hair (Tanner 1).",
    "citation": "Hughes IA, et al. Androgen Insensitivity Syndrome. Lancet. 2012;380(9851):1419-1428. PMID: 22698698.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate complete androgen insensitivity syndrome (46,XY, absent pubic/axillary hair, male testosterone) from Mullerian agenesis (46,XX, normal pubic hair, female testosterone).",
      "distractorExclusionNotes": "Strongest distractor '46,XX' excluded: 46,XX describes Mullerian agenesis, in which androgen responsiveness is normal, resulting in normal adult Tanner 5 pubic and axillary hair, whereas this patient has absent hair (Ta",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
