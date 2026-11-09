# Step 2 CK Batch 14 Part 1: Items 0326 - 0337
import json

items_b14_p1 = [
  {
    "code": "op-c-s2-0326",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Preeclampsia with Severe Features",
    "subtopic": "Magnesium Sulfate Seizure Prophylaxis and Antihypertensive Thresholds",
    "provisionalDifficulty": 4,
    "stem": "A 29-year-old primigravida at 34 weeks gestation presents to the labor and delivery triage with a 6-hour history of severe, persistent frontal headache unresponsive to acetaminophen and spots before her eyes (scotomata). She has had no vaginal bleeding or leakage of fluid. Her pregnancy has been uncomplicated until now. Physical examination reveals blood pressure of 172/112 mm Hg, heart rate of 82/min, and 3+ bilateral patellar deep tendon reflexes with 2 beats of clonus. The fundal height is 34 cm and fetal heart rate is 142/min with moderate variability. Urinalysis demonstrates 3+ protein. Laboratory evaluation reveals: - Platelets: 92,000/mm3 - AST: 146 U/L - ALT: 158 U/L - Serum creatinine: 1.2 mg/dL (baseline: 0.6 mg/dL). Which of the following is the most appropriate initial medical management for this patient?",
    "choices": [
      ["Intravenous magnesium sulfate infusion and immediate intravenous labetalol or hydralazine", "The patient has preeclampsia with severe features, confirmed by severe hypertension (blood pressure >= 160/110 mm Hg), neurological symptoms (intractable headache, visual scotomata, hyperreflexia/clonus), thrombocytopenia (< 100,000/mm3), transaminitis, and renal insufficiency. Immediate management requires: (1) Intravenous magnesium sulfate (4–6 g loading dose followed by 1–2 g/hr continuous infusion) for seizure prophylaxis (to prevent progression to eclampsia); and (2) Acute antihypertensive therapy with intravenous labetalol, hydralazine, or oral immediate-release nifedipine to lower blood pressure below 160/110 mm Hg within 30 to 60 minutes to prevent maternal hemorrhagic stroke. Once stabilized, delivery is planned because severe preeclampsia at >= 34 weeks gestation is a definitive indication for delivery."],
      ["Urgent oral lisinopril 20 mg to achieve rapid control of the renin-angiotensin-aldosterone axis", "ACE inhibitors (and ARBs) are strictly fetotoxic and contraindicated throughout pregnancy, causing fetal renal dysgenesis, oligohydramnios, pulmonary hypoplasia, and neonatal death."],
      ["Intramuscular phenobarbital loading dose for central nervous system anticonvulsant prophylaxis", "Phenobarbital is not indicated for eclamptic seizure prophylaxis; the Magpie Trial conclusively demonstrated that magnesium sulfate is vastly superior to phenytoin, diazepam, or barbiturates in preventing eclampsia and maternal death."],
      ["Immediate emergent cesarean delivery under general anesthesia prior to medical stabilization", "Emergency delivery before maternal blood pressure control and seizure prophylaxis carries high maternal mortality from intraoperative hemorrhagic stroke or eclamptic convulsions; medical stabilization must occur first."],
      ["Expectant outpatient management with oral methyldopa and weekly maternal laboratory monitoring", "Preeclampsia with severe features at >= 34 weeks gestation requires hospital admission, maternal stabilization, and prompt delivery; outpatient expectant management is contraindicated due to high risk of placental abruption, hepatic rupture, and maternal death."]
    ],
    "shortestValidSolution": "34 weeks pregnant + BP 172/112 + headache/scotomata + low platelets/high AST -> preeclampsia with severe features -> IV magnesium sulfate + IV labetalol/hydralazine.",
    "necessaryInference": "Diagnose preeclampsia with severe features, initiate IV magnesium sulfate for seizure prophylaxis, and treat severe acute hypertension (>= 160/110 mm Hg) with first-line IV agents (labetalol or hydralazine).",
    "strongestDistractor": "Immediate emergent cesarean delivery under general anesthesia prior to medical stabilization",
    "distractorExclusion": "Delivery is indicated at >= 34 weeks, but acute medical stabilization with magnesium sulfate and antihypertensives is mandatory prior to delivery to prevent maternal stroke or seizure.",
    "citation": "American College of Obstetricians and Gynecologists. Gestational Hypertension and Preeclampsia: ACOG Practice Bulletin, Number 222. Obstet Gynecol. 2020;135(6):e237-e260. PMID: 32443111."
  },
  {
    "code": "op-c-s2-0327",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Postpartum Hemorrhage",
    "subtopic": "Uterine Atony and Drug Contraindications (Carboprost in Asthma vs Methylergonovine in Hypertension)",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman with a history of moderate persistent asthma treated with an inhaled corticosteroid-long-acting beta agonist inhaler gives birth to an 4,200-g infant via spontaneous vaginal delivery following a prolonged second stage of labor. Fifteen minutes after delivery of the placenta, the nurse notices brisk, continuous vaginal bleeding with large blood clots. The patient appears pale and lightheaded. Vital signs are: blood pressure 90/58 mm Hg and heart rate 122/min. On physical examination, the uterine fundus is soft, boggy, and palpated 3 cm above the umbilicus. Continuous vigorous bimanual uterine massage is initiated, and an intravenous infusion of oxytocin (40 units in 1,000 mL crystalloid) and intravenous tranexamic acid (1 g) are administered. Despite these interventions, the uterus remains poorly contracted and brisk vaginal bleeding persists. Which of the following is the most appropriate next pharmacologic agent for this patient?",
    "choices": [
      ["Intramuscular methylergonovine maleate", "The patient has postpartum hemorrhage (PPH) secondary to uterine atony (soft, boggy, enlarged uterus), the most common cause of PPH. When oxytocin and bimanual massage fail, second-line uterotonics include methylergonovine, carboprost tromethamine (PGF2-alpha), and misoprostol (PGE1). However, drug selection depends critically on maternal co-morbidities: Carboprost is a prostaglandin F2-alpha analogue that induces potent bronchoconstriction and is strictly contraindicated in patients with asthma. Conversely, methylergonovine is an ergot alkaloid that induces smooth muscle and vascular constriction, causing severe hypertension; it is contraindicated in patients with hypertension or preeclampsia, but is completely safe and effective in this normotensive/hypotensive patient with asthma."],
      ["Intramuscular carboprost tromethamine (15-methyl PGF2-alpha)", "Carboprost tromethamine causes potent bronchial smooth muscle contraction and bronchospasm, and is strictly contraindicated in patients with a history of asthma."],
      ["Sublingual terbutaline sulfate to relax the uterine lower segment", "Terbutaline is a beta-2 adrenergic agonist used as a tocolytic to relax uterine smooth muscle (e.g., in uterine tachysystole or inversion); administering it in postpartum hemorrhage worsens atony and bleeding."],
      ["Intravenous magnesium sulfate infusion to optimize myometrial calcium transport", "Magnesium sulfate is a smooth muscle relaxant that promotes uterine atony and increases postpartum hemorrhage risk; it has zero uterotonic activity."],
      ["Intramuscular ketorolac tromethamine for anti-inflammatory hemodynamic stabilization", "Ketorolac is an NSAID that inhibits cyclooxygenase and platelet aggregation, increasing bleeding risk while providing no uterotonic contractile effect."]
    ],
    "shortestValidSolution": "Postpartum hemorrhage from atony failing oxytocin + patient has ASTHMA -> choose methylergonovine (carboprost is strictly contraindicated in asthma).",
    "necessaryInference": "Navigate the specific contraindications of second-line uterotonics: carboprost causes bronchospasm (contraindicated in asthma); methylergonovine causes vasoconstriction (contraindicated in hypertension). Because the patient has asthma and no hypertension, methylergonovine is the correct choice.",
    "strongestDistractor": "Intramuscular carboprost tromethamine (15-methyl PGF2-alpha)",
    "distractorExclusion": "Carboprost is a prostaglandin F2-alpha analogue that triggers severe bronchospasm and status asthmaticus in patients with asthma.",
    "citation": "American College of Obstetricians and Gynecologists. Postpartum Hemorrhage: ACOG Practice Bulletin, Number 183. Obstet Gynecol. 2017;130(4):e168-e186. PMID: 28937571."
  },
  {
    "code": "op-c-s2-0328",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Ectopic Pregnancy",
    "subtopic": "Methotrexate Medical Management Eligibility Criteria vs Surgical Salpingectomy",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old woman, gravida 2 para 1, presents to the emergency department with mild crampy lower abdominal pain and dark vaginal spotting for 2 days. Her last menstrual period was 6 weeks ago. She has no chronic medical conditions and takes no medications. Vital signs are: blood pressure 122/74 mm Hg, heart rate 72/min, respiratory rate 14/min, and temperature 37.0°C (98.6°F). Physical examination reveals a soft, non-distended abdomen with mild right lower quadrant tenderness without guarding or rebound. Pelvic examination demonstrates a closed cervical os with minimal dark blood in the vaginal vault and mild right adnexal tenderness without a discrete palpable mass. Serum beta-hCG is 2,400 mIU/mL. Transvaginal ultrasonography reveals an empty uterine cavity with an endometrial stripe of 9 mm, a well-defined right adnexal gestational sac measuring 2.4 cm in greatest diameter without cardiac activity, and no free fluid in the cul-de-sac. Complete blood count, serum creatinine, and liver function tests are completely normal. Which of the following is the most appropriate next step in management?",
    "choices": [
      ["Intramuscular methotrexate administration with outpatient beta-hCG surveillance", "The patient has an unruptured tubal ectopic pregnancy (beta-hCG > discriminatory zone of 1,500–2,000 mIU/mL with empty uterus and adnexal gestational sac). Medical management with intramuscular methotrexate (a folic acid antagonist that halts rapidly dividing trophoblastic cells) is indicated for patients meeting strict eligibility criteria: (1) hemodynamically stable, (2) initial serum beta-hCG < 5,000 mIU/mL, (3) ectopic mass size < 3.5 to 4.0 cm, (4) absent embryonic cardiac activity, (5) no signs of tubal rupture or significant hemoperitoneum, and (6) normal baseline renal and hepatic function with reliable patient follow-up."],
      ["Immediate diagnostic and operative laparoscopy with right salpingectomy", "Surgical management (laparoscopic salpingostomy or salpingectomy) is indicated for hemodynamic instability, suspected tubal rupture, contraindications to methotrexate, beta-hCG > 5,000 mIU/mL, or mass size > 3.5–4 cm; because this patient satisfies all medical criteria, methotrexate avoids surgical risks."],
      ["Dilation and curettage to evacuate suspected incomplete uterine miscarriage", "Transvaginal ultrasound demonstrates an empty uterus with a distinct right adnexal gestational sac and an hCG of 2,400 mIU/mL; dilation and curettage does not treat ectopic pregnancy and unnecessarily exposes the patient to intrauterine adhesions."],
      ["Repeat transvaginal ultrasonography and serum beta-hCG in 48 hours without therapy", "Expectant management is reserved only for asymptomatic patients with very low and falling beta-hCG levels (< 200–1,000 mIU/mL); at 2,400 mIU/mL with an adnexal sac, awaiting spontaneous resolution risks tubal rupture."],
      ["Oral mifepristone followed 24 hours later by oral misoprostol", "The combination of mifepristone and misoprostol is approved for medical abortion of intrauterine pregnancies up to 70 days gestation; it is ineffective for tubal ectopic pregnancies and risks fatal tubal rupture."]
    ],
    "shortestValidSolution": "Hemodynamically stable + hCG 2,400 (< 5,000) + ectopic mass 2.4 cm (< 3.5 cm) + no fetal heartbeat -> satisfies criteria for IM methotrexate medical therapy.",
    "necessaryInference": "Apply the evidence-based criteria for medical management of ectopic pregnancy with methotrexate (hemodynamic stability, hCG < 5,000 mIU/mL, mass < 3.5 cm, no fetal heart motion, normal renal/hepatic labs) over surgical salpingectomy.",
    "strongestDistractor": "Immediate diagnostic and operative laparoscopy with right salpingectomy",
    "distractorExclusion": "Surgical salpingectomy is invasive and reserved for patients failing methotrexate criteria (unstable, ruptured, hCG > 5,000, fetal cardiac activity, mass > 3.5-4 cm).",
    "citation": "American College of Obstetricians and Gynecologists. Tubal Ectopic Pregnancy: ACOG Practice Bulletin, Number 193. Obstet Gynecol. 2018;131(3):e91-e103. PMID: 29470343."
  },
  {
    "code": "op-c-s2-0329",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Intrahepatic Cholestasis of Pregnancy",
    "subtopic": "Elevated Total Bile Acids, Ursodeoxycholic Acid, and Delivery Timing",
    "provisionalDifficulty": 4,
    "stem": "A 31-year-old woman, gravida 2 para 1, at 33 weeks gestation presents to the clinic with severe, generalized itching that began 10 days ago. She describes the pruritus as intolerable, particularly on the palms of her hands and soles of her feet, and notes that it worsens markedly at night. She has no rash, but physical examination reveals linear excoriations over her abdomen and extremities. There is no scleral icterus, and her vital signs and blood pressure are normal. Fetal growth is appropriate for gestational age, and non-stress testing is reactive. Laboratory evaluation reveals: - Total bile acids: 48 micromol/L (normal: < 10 micromol/L) - Total bilirubin: 1.4 mg/dL - AST: 84 U/L - ALT: 112 U/L - Platelets: 210,000/mm3. Viral hepatitis serologies are negative. Which of the following is the most appropriate management plan for this patient?",
    "choices": [
      ["Initiate oral ursodeoxycholic acid and plan delivery at 36 to 37 weeks gestation", "The patient has intrahepatic cholestasis of pregnancy (ICP), characterized by intense generalized pruritus predominantly affecting the palms and soles that worsens at night, elevated total serum bile acids (>= 10 micromol/L), and mild transaminitis in the late second or third trimester without primary dermatologic rash. Elevated maternal bile acids cross the placenta and accumulate in fetal tissues, predisposing to sudden intrauterine fetal demise (stillbirth), spontaneous preterm labor, and meconium aspiration. First-line medical therapy is oral ursodeoxycholic acid (UDCA), which displaces toxic hydrophobic bile acids, relieves maternal pruritus, and improves liver biochemistries. To prevent stillbirth, planned delivery is recommended at 36 0/7 to 37 0/7 weeks gestation (or at 34–36 weeks if bile acids are severely elevated >= 100 micromol/L)."],
      ["Topical high-potency fluorinated corticosteroid ointment until delivery at 40 weeks gestation", "Topical corticosteroids are ineffective for cholestatic systemic pruritus and do not lower bile acids; delaying delivery to 40 weeks carries an unacceptably high risk of sudden stillbirth."],
      ["Immediate emergent cesarean delivery under general anesthesia at 33 weeks gestation", "Immediate delivery at 33 weeks causes iatrogenic neonatal respiratory distress syndrome and prematurity complications; unless bile acids exceed 100 micromol/L or fetal compromise occurs, delivery is timed at 36–37 weeks."],
      ["Initiate oral cholestyramine monotherapy and manage expectantly until spontaneous labor", "Cholestyramine is an anion-exchange resin with inferior efficacy compared to UDCA in relieving pruritus, does not reduce fetal stillbirth risk, and binds fat-soluble vitamins, potentially worsening vitamin K deficiency and coagulopathy."],
      ["Administer oral diphenhydramine and reassure the patient that symptoms are physiological", "Pruritus of palms and soles with bile acids of 48 micromol/L is pathologic intrahepatic cholestasis with known stillbirth risk; dismissing it as physiological risks fetal demise."]
    ],
    "shortestValidSolution": "Pruritus of palms/soles worsening at night + bile acids 48 micromol/L (> 10) -> intrahepatic cholestasis of pregnancy -> ursodeoxycholic acid + planned delivery at 36-37 weeks.",
    "necessaryInference": "Identify ICP from nocturnal palmar/plantar pruritus and elevated bile acids, initiate ursodeoxycholic acid, and recognize that delivery is timed at 36-37 weeks to prevent stillbirth.",
    "strongestDistractor": "Topical high-potency fluorinated corticosteroid ointment until delivery at 40 weeks gestation",
    "distractorExclusion": "ICP is a systemic metabolic defect not responsive to topical steroids; allowing pregnancy to proceed to 40 weeks sharply increases the risk of unexpected fetal demise.",
    "citation": "American College of Obstetricians and Gynecologists. Intrahepatic Cholestasis of Pregnancy: ACOG Clinical Consensus No. 2. Obstet Gynecol. 2021;137(4):e101-e108. PMID: 33740243."
  },
  {
    "code": "op-c-s2-0330",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Third-Trimester Vaginal Bleeding",
    "subtopic": "Placenta Previa vs Digital Examination Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman, gravida 3 para 2, at 30 weeks gestation presents to the emergency department after experiencing sudden, painless bright red vaginal bleeding that soaked two sanitary pads 1 hour ago. She denies abdominal pain, contractions, or leakage of fluid. She had two prior uncomplicated cesarean deliveries. Vital signs are: blood pressure 114/72 mm Hg, heart rate 78/min, and respiratory rate 16/min. Abdomen is soft, non-tender, and non-distended without uterine contractions. External fetal monitoring reveals a baseline fetal heart rate of 140/min with moderate variability and no decelerations. A medical student puts on sterile gloves and reaches for lubricant to perform a digital cervical examination to determine cervical dilation. Which of the following is the most appropriate next step in management?",
    "choices": [
      ["Perform transabdominal or transvaginal ultrasonography before any digital examination", "The patient presents with painless, bright red vaginal bleeding in the third trimester, the quintessential presentation of placenta previa. Risk factors include multiparity, advanced maternal age, and prior cesarean deliveries (which predispose to abnormal placental implantation). In any pregnant patient presenting with third-trimester vaginal bleeding whose placental location is unconfirmed, DIGITAL CERVICAL EXAMINATION IS STRICTLY CONTRAINDICATED. Digital probing of the internal os can inadvertently disrupt the placental cotyledons or underlying low-lying vascular sinusoids, triggering torrential, catastrophic maternal exsanguination and fetal demise within minutes. The mandatory first step is ultrasonography to establish placental position."],
      ["Allow the student to perform a gentle digital cervical examination with minimal pressure", "Digital examination—regardless of how gentle—risks poking through the low-lying placenta or disrupting overlying cervical sinuses, triggering catastrophic life-threatening hemorrhage."],
      ["Perform immediate emergent cesarean delivery under general anesthesia", "The patient is hemodynamically stable, the bleeding has slowed, and the fetal heart tracing is Category I (reassuring); immediate emergent delivery is premature before ultrasound evaluation and administration of antenatal corticosteroids for fetal lung maturity."],
      ["Administer subcutaneous terbutaline to prevent potential subclinical uterine contractions", "Tocolytics are not indicated in the absence of documented preterm contractions, and terbutaline causes maternal tachycardia and hypotension, confounding hemodynamic monitoring in bleeding."],
      ["Perform a sterile speculum examination using high-pressure endocervical cytobrush sampling", "Endocervical cytobrush sampling traverses the internal cervical os and can lacerate the placental margin; while careful visual speculum exam can be performed to confirm vaginal bleeding, ultrasound is primary."]
    ],
    "shortestValidSolution": "Painless third-trimester bright red bleeding + prior cesarean -> placenta previa -> ultrasound FIRST, digital cervical exam is strictly contraindicated.",
    "necessaryInference": "Recognize that digital cervical examination in unconfirmed third-trimester bleeding is strictly forbidden due to risk of provoking catastrophic hemorrhage from placenta previa.",
    "strongestDistractor": "Allow the student to perform a gentle digital cervical examination with minimal pressure",
    "distractorExclusion": "Any digital palpation through the cervix can tear the placenta previa and induce uncontrollable maternal-fetal exsanguination.",
    "citation": "Silver RM. Abnormal Placentation: Placenta Previa, Vasa Previa, and Placenta Accreta Spectrum. Obstet Gynecol. 2015;126(3):654-668. PMID: 26244843."
  },
  {
    "code": "op-c-s2-0331",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Shoulder Dystocia Management",
    "subtopic": "McRoberts Maneuver and Suprapubic Pressure vs Fundal Pressure Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old woman with gestational diabetes controlled on diet delivers the fetal head of a 4,400-g male infant at 39 weeks gestation. Immediately after delivery of the head, the fetal chin retracts tightly against the maternal perineum ('turtle sign'). Gentle downward axial traction on the fetal head fails to deliver the anterior shoulder. The obstetric team recognizes a shoulder dystocia and calls for emergency assistance. An overeager obstetrical trainee prepares to climb onto a stool and apply firm, continuous downward fundal pressure on the maternal uterine fundus. Which of the following is the most appropriate next step in the management of this delivery?",
    "choices": [
      ["Prohibit fundal pressure and immediately perform hyperflexion of maternal thighs (McRoberts maneuver) with concurrent suprapubic pressure", "Shoulder dystocia occurs when the anterior fetal shoulder becomes impacted behind the maternal symphysis pubis after delivery of the head. It is an obstetric emergency. FUNDAL PRESSURE IS STRICTLY CONTRAINDICATED because it further wedges the impacted shoulder into the pubic bone, drastically increasing the risk of brachial plexus injury (Erb-Duchenne palsy), clavicular/humeral fractures, and maternal uterine rupture. The correct first-line maneuvers are: (1) McRoberts maneuver: hyperflexion and abduction of the maternal thighs against the abdomen, which flattens the lumbosacral angle, cephalad-rotates the symphysis pubis, and widens the pelvic outlet; combined with (2) Suprapubic pressure: downward and lateral pressure applied over the fetal anterior shoulder to dislodge it under the symphysis."],
      ["Instruct the trainee to apply maximal downward fundal pressure while pulling the fetal head firmly", "Fundal pressure severely impacts the anterior shoulder behind the symphysis pubis, directly causing permanent brachial plexus avulsion, fetal asphyxia, and uterine rupture."],
      ["Perform immediate emergent cesarean delivery without attempting rotational maneuvers", "Emergency abdominal delivery requires Zavanelli maneuver (cephalic replacement), which is a high-risk last-resort procedure attempted only after all transvaginal positional and rotational maneuvers fail."],
      ["Immediately fracture the fetal clavicle bilaterally to decrease the bisacromial diameter", "Intentional clavicular fracture is a destructive last-line rescue maneuver reserved for severe refractory dystocia when McRoberts, suprapubic pressure, rotational maneuvers, and posterior arm delivery fail."],
      ["Administer intravenous oxytocin bolus to augment myometrial expulsive force", "Uterotonic augmentation increases uterine force driving the shoulder harder into the pubic bone, increasing risk of fetal neuropathy and uterine rupture."]
    ],
    "shortestValidSolution": "Turtle sign + impacted shoulder -> shoulder dystocia -> McRoberts maneuver + suprapubic pressure (fundal pressure is strictly contraindicated).",
    "necessaryInference": "Identify shoulder dystocia, prohibit fundal pressure (which worsens impaction and causes brachial plexus avulsion), and execute first-line McRoberts maneuver and suprapubic pressure.",
    "strongestDistractor": "Instruct the trainee to apply maximal downward fundal pressure while pulling the fetal head firmly",
    "distractorExclusion": "Fundal pressure further jams the shoulder against the pubic bone, causing Erb palsy, clavicle fractures, and uterine rupture.",
    "citation": "American College of Obstetricians and Gynecologists. Shoulder Dystocia: ACOG Practice Bulletin, Number 178. Obstet Gynecol. 2017;129(5):e123-e134. PMID: 28437340."
  },
  {
    "code": "op-c-s2-0332",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Intraamniotic Infection (Chorioamnionitis)",
    "subtopic": "Parenteral Broad-Spectrum Antibiotics and Prompt Delivery",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old primigravida at 39 weeks gestation undergoes labor induction for post-dates gestation. She experienced spontaneous rupture of membranes 22 hours ago with clear amniotic fluid. Her cervical dilation has progressed to 6 cm. Over the past 2 hours, her temperature has risen to 38.8°C (101.8°F). On physical examination, blood pressure is 112/68 mm Hg and heart rate is 110/min. Physical examination demonstrates marked uterine fundal tenderness between contractions. Speculum examination reveals purulent, foul-smelling fluid pooling in the posterior vaginal fornix. Continuous fetal heart rate monitoring demonstrates a baseline of 175/min (fetal tachycardia) with moderate variability. There are no decelerations. Maternal leukocyte count is 21,400/mm3. Which of the following is the most appropriate management approach for this patient?",
    "choices": [
      ["Administer intravenous ampicillin and gentamicin and continue augmented labor induction for vaginal delivery", "The patient has intraamniotic infection (clinical chorioamnionitis), defined by maternal fever (>= 38.0°C) plus one or more of: fetal tachycardia (> 160/min), maternal leukocytosis (> 15,000/mm3), purulent cervical discharge, or uterine fundal tenderness. Risk factors include prolonged membrane rupture (> 18 hours) and prolonged labor. The management of intraamniotic infection requires: (1) Immediate initiation of broad-spectrum parenteral antibiotics (intravenous ampicillin plus gentamicin, with clindamycin or metoprolol added if cesarean is performed) to reduce maternal bacteremia and neonatal sepsis; and (2) Prompt delivery via augmentation of labor with oxytocin. Importantly, chorioamnionitis alone is NOT an indication for immediate cesarean delivery; vaginal delivery is preferred unless standard obstetric indications (e.g., non-reassuring fetal tracing, cephalopelvic disproportion) arise."],
      ["Perform immediate emergent cesarean delivery under general anesthesia to minimize fetal infection", "Chorioamnionitis itself is not an indication for emergent cesarean delivery; cesarean in the presence of infected intraamniotic fluid drastically increases maternal pelvic wound infection, peritonitis, and septic pelvic thrombophlebitis."],
      ["Administer intramuscular betamethasone to enhance fetal pulmonary maturity prior to delivery", "Antenatal corticosteroids are indicated for fetal lung maturity up to 36 6/7 weeks; at 39 weeks gestation, lungs are fully mature and steroids provide no benefit while blunting immune response to infection."],
      ["Administer oral tocolytics to halt labor contractions until antibiotic therapy achieves sterilizing blood levels", "Tocolytics are strictly contraindicated in intraamniotic infection; attempting to stop labor in an infected intra-uterine environment leads to overwhelming fetal sepsis, neurological injury, and stillbirth."],
      ["Perform emergent amniocentesis for Gram stain and leukocyte esterase prior to antibiotic initiation", "Clinical criteria (maternal fever, purulent drainage, uterine tenderness, fetal tachycardia) are sufficient to diagnose chorioamnionitis; delaying antibiotics for amniocentesis is unnecessary and harmful."]
    ],
    "shortestValidSolution": "Rupture of membranes > 18 hr + maternal fever + foul fluid + fetal tachycardia -> chorioamnionitis -> IV ampicillin + gentamicin and proceed with vaginal delivery (cesarean not mandatory).",
    "necessaryInference": "Diagnose chorioamnionitis clinically, initiate IV ampicillin and gentamicin immediately, and recognize that labor should be augmented for vaginal delivery rather than reflexively performing a cesarean.",
    "strongestDistractor": "Perform immediate emergent cesarean delivery under general anesthesia to minimize fetal infection",
    "distractorExclusion": "Cesarean delivery is not indicated solely for chorioamnionitis; it significantly increases maternal wound infection and endometritis compared to vaginal delivery.",
    "citation": "American College of Obstetricians and Gynecologists. Committee Opinion No. 712: Intrapartum Management of Intraamniotic Infection. Obstet Gynecol. 2017;130(2):e95-e101. PMID: 28742677."
  },
  {
    "code": "op-c-s2-0333",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Preterm Premature Rupture of Membranes (PPROM)",
    "subtopic": "Latency Antibiotics, Corticosteroids, and Expectant Management < 34 Weeks",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman, gravida 1 para 0, at 30 weeks gestation presents to labor and delivery triage reporting a sudden 'gush' of clear fluid from her vagina 4 hours ago, followed by persistent leaking. She denies contractions, vaginal bleeding, fever, or chills. On sterile speculum examination, a pool of clear fluid is observed in the posterior vaginal fornix; nitrazine paper turns dark blue (pH > 6.5) and fluid air-dried on a glass slide demonstrates arborization (ferning pattern). Her temperature is 36.8°C (98.2°F), blood pressure is 118/72 mm Hg, and maternal pulse is 76/min. The uterus is non-tender and relaxed. Fetal heart rate is 138/min with moderate variability and no decelerations. Tocodynamometry shows no uterine contractions. Transabdominal ultrasound reveals severe oligohydramnios (amniotic fluid index 3.2 cm) with an active fetus in vertex presentation. Which of the following is the most appropriate management strategy for this patient?",
    "choices": [
      ["Administer intramuscular betamethasone, intravenous ampicillin and erythromycin (latency antibiotics), and manage expectantly with inpatient fetal surveillance", "The patient has preterm premature rupture of membranes (PPROM) at 30 weeks gestation, confirmed by pooling, nitrazine positivity, and ferning. In the absence of infection (chorioamnionitis), abruption, or fetal distress, expectant management is indicated for PPROM prior to 34 0/7 weeks to prolong latency and reduce the profound risks of extreme prematurity. Standard bundle of care includes: (1) Antenatal corticosteroids (intramuscular betamethasone) to accelerate fetal lung maturation and reduce neonatal respiratory distress syndrome, intraventricular hemorrhage, and necrotizing enterocolitis; (2) Latency antibiotics (7-day course of IV ampicillin and erythromycin/azithromycin followed by oral amoxicillin and erythromycin), which prolong the latency period, reduce chorioamnionitis, and decrease neonatal morbidity; (3) Intravenous magnesium sulfate for fetal neuroprotection if delivery is anticipated before 32 weeks; and (4) Inpatient monitoring with planned delivery at 34 0/7 weeks."],
      ["Perform immediate labor induction with intravenous oxytocin to eliminate the risk of intrauterine infection", "Immediate delivery at 30 weeks gestation subjects the infant to severe complications of extreme prematurity; in the absence of infection or fetal distress, delivery before 34 weeks is contraindicated."],
      ["Administer continuous oral indomethacin tocolysis until 37 weeks gestation", "Prolonged tocolysis (> 48 hours) is not indicated in PPROM because it masks chorioamnionitis, and indomethacin after 32 weeks or for > 48 hours causes premature closure of the fetal ductus arteriosus and oligohydramnios."],
      ["Perform transcervical amnioinfusion of warmed normal saline to restore amniotic fluid index", "Prophylactic amnioinfusion carries an unacceptably high risk of introducing ascending bacterial pathogens into the ruptured uterine cavity and does not improve neonatal pulmonary outcomes."],
      ["Discharge home on strict bed rest and oral cephalexin with twice-weekly clinic visits", "PPROM requires continuous inpatient hospital admission because of the unpredictable and high risk of sudden umbilical cord prolapse, placental abruption, and fulminant intraamniotic infection."]
    ],
    "shortestValidSolution": "PPROM at 30 weeks without infection -> expectant management until 34 weeks: IM betamethasone + latency antibiotics (ampicillin + erythromycin) + MgSO4 for neuroprotection.",
    "necessaryInference": "Apply the 34-week cutoff for PPROM: prior to 34 weeks without chorioamnionitis, manage expectantly with antenatal corticosteroids and 7-day latency antibiotics rather than immediate delivery.",
    "strongestDistractor": "Perform immediate labor induction with intravenous oxytocin to eliminate the risk of intrauterine infection",
    "distractorExclusion": "Inducing delivery at 30 weeks causes severe prematurity-related death, respiratory distress syndrome, and intraventricular hemorrhage; delivery is delayed to 34 weeks if uninfected.",
    "citation": "American College of Obstetricians and Gynecologists. Prelabor Rupture of Membranes: ACOG Practice Bulletin, Number 217. Obstet Gynecol. 2020;135(3):e80-e97. PMID: 32080050."
  },
  {
    "code": "op-c-s2-0334",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Cervical Insufficiency",
    "subtopic": "Painless Cervical Dilation and Cerclage Placement",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old woman, gravida 2 para 0 aborta 1, at 18 weeks gestation presents for a routine prenatal visit. She has no complaints, vaginal bleeding, pelvic cramping, or loss of fluid. Her obstetrical history is notable for an uncomplicated spontaneous delivery of a previable fetus at 19 weeks gestation during her first pregnancy, which occurred rapidly following sudden, painless rupture of membranes. Her vital signs are normal. Speculum examination reveals clear vaginal discharge with no active bleeding. Transvaginal ultrasonography demonstrates a closed cervix with an endocervical length of 18 mm (normal: > 25 mm) with prominent dynamic funneling of the amniotic membranes into the internal os upon application of transfundal pressure. Fetal anatomical survey is completely normal, with active movements and normal amniotic fluid volume. Which of the following is the most appropriate management to prevent recurrent mid-trimester pregnancy loss in this patient?",
    "choices": [
      ["Perform ultrasound-indicated cervical cerclage placement", "The patient has cervical insufficiency (incompetence), defined by painless cervical dilation and effacement in the second trimester leading to mid-trimester pregnancy loss in the absence of uterine contractions or infection. A history of prior painless second-trimester loss combined with a current transvaginal ultrasound showing a short cervix (< 25 mm) before 24 weeks gestation is a definitive indication for ultrasound-indicated cervical cerclage (placement of a purse-string suture around the cervix, such as McDonald or Shirodkar technique). Cerclage mechanically reinforces the structural integrity of the internal os, significantly reducing the risk of preterm birth before 35 weeks and recurrent previable pregnancy loss."],
      ["Recommend strict bed rest with pelvic elevation throughout the remainder of the pregnancy", "Randomized controlled trials have repeatedly demonstrated that strict bed rest does not decrease preterm birth in cervical insufficiency, but significantly increases the risk of maternal deep venous thrombosis, bone demineralization, and deconditioning."],
      ["Administer intramuscular 17-alpha-hydroxyprogesterone caproate weekly starting immediately", "While vaginal progesterone is used for an incidental short cervix without prior preterm loss, in patients with a history of prior second-trimester loss and a short cervix < 25 mm, cervical cerclage is the definitive intervention with proven efficacy."],
      ["Initiate oral indomethacin tocolytic therapy until 34 weeks gestation", "Prophylactic indomethacin does not reinforce a structurally incompetent cervix and long-term use causes fetal ductus arteriosus constriction, oligohydramnios, and neonatal renal impairment."],
      ["Place a vaginal support pessary without surgical intervention", "Cervical pessaries remain investigational with conflicting trial evidence; in a patient with a prior mid-trimester loss and documented cervical shortening < 20 mm, cerclage is the guideline-recommended standard of care."]
    ],
    "shortestValidSolution": "Prior painless 19-week delivery + current pregnancy at 18 weeks with cervical length 18 mm (< 25 mm) and funneling -> cervical insufficiency -> ultrasound-indicated cervical cerclage.",
    "necessaryInference": "Identify cervical insufficiency based on prior painless mid-trimester loss and current transvaginal cervical shortening < 25 mm, selecting surgical cerclage as the evidence-based management over bed rest or progesterone alone.",
    "strongestDistractor": "Recommend strict bed rest with pelvic elevation throughout the remainder of the pregnancy",
    "distractorExclusion": "Bed rest has no proven efficacy in preventing preterm birth or cervical dilation, and substantially increases the risk of thromboembolism.",
    "citation": "American College of Obstetricians and Gynecologists. Cerclage for the Management of Cervical Incompetence: ACOG Practice Bulletin, Number 142. Obstet Gynecol. 2014;123(2 Pt 1):372-379. PMID: 24451674."
  },
  {
    "code": "op-c-s2-0335",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Hematology",
    "topic": "RhD Alloimmunization Prophylaxis",
    "subtopic": "Kleihauer-Betke Test for Massive Fetomaternal Hemorrhage Dosing",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old Rh(D)-negative woman, gravida 2 para 1, is involved in a moderate-speed motor vehicle collision at 28 weeks gestation. She was a restrained passenger in a vehicle struck on the front fender. She denies abdominal pain, contractions, or vaginal bleeding. Her first child was Rh(D)-positive, and she received Rho(D) immune globulin at that time. Vital signs are: blood pressure 118/70 mm Hg, heart rate 78/min, and temperature 37.0°C (98.6°F). On physical examination, the abdomen is soft and non-tender without seatbelt sign. Continuous cardiotocography demonstrates a reactive fetal heart rate tracing with no decelerations and no uterine contractions over 4 hours. An indirect Coombs test is negative, confirming that she is not alloimmunized. The qualitative rosette screening test for fetomaternal hemorrhage is positive. Which of the following is the most appropriate next step to determine the proper management for this patient?",
    "choices": [
      ["Perform a quantitative Kleihauer-Betke acid elution test to calculate the required dose of Rho(D) immune globulin", "The patient is an Rh(D)-negative, unsensitized pregnant woman who experienced abdominal trauma, which creates significant risk for fetomaternal hemorrhage (fetal red cells entering maternal circulation, triggering maternal anti-D alloimmunization). The standard prophylactic dose of Rho(D) immune globulin (300 mcg / 1,500 IU) neutralizes up to 30 mL of fetal whole blood (or 15 mL of fetal packed red cells). A qualitative screening test (rosette test) detects whether fetomaternal hemorrhage has occurred. When the rosette test is POSITIVE, it indicates that fetomaternal bleeding may exceed the standard 30 mL threshold. The mandatory next step is a quantitative test—either the Kleihauer-Betke acid elution test (or flow cytometry)—to quantify the exact percentage of fetal red cells in maternal circulation and calculate the precise number of additional vials of Rho(D) immune globulin needed."],
      ["Administer the standard 300 mcg dose of Rho(D) immune globulin and discharge home without further testing", "Administering only the standard single 300 mcg vial when a rosette test is positive risks massive underdosing if hemorrhage exceeded 30 mL, resulting in maternal alloimmunization and hemolytic disease in future pregnancies."],
      ["Withhold Rho(D) immune globulin until repeat indirect Coombs antibody screening is performed in 4 weeks", "Delaying Rho(D) immune globulin allows maternal B cells to recognize foreign D antigens and produce irreversible anti-D antibodies; prophylaxis must be given within 72 hours of the fetomaternal hemorrhage."],
      ["Perform emergent cordocentesis to directly sample the fetal hematocrit and Rh status", "Cordocentesis (percutaneous umbilical blood sampling) is an invasive procedure with significant risk of pregnancy loss and actually exacerbates fetomaternal hemorrhage; it is not indicated for maternal trauma screening."],
      ["Administer intravenous immunoglobulin (IVIG) to saturate maternal Fc receptors", "IVIG does not eliminate Rh(D)-positive fetal erythrocytes and is not a substitute for anti-D immunoglobulin in preventing Rh alloimmunization."]
    ],
    "shortestValidSolution": "Rh-negative pregnant woman + trauma + positive rosette test -> quantitative Kleihauer-Betke test to calculate the exact dose of Rho(D) immune globulin.",
    "necessaryInference": "Recognize that a positive rosette screen indicates fetomaternal hemorrhage exceeding baseline, requiring quantitative Kleihauer-Betke testing to determine the required weight-based/volume-based dose of anti-D immune globulin.",
    "strongestDistractor": "Administer the standard 300 mcg dose of Rho(D) immune globulin and discharge home without further testing",
    "distractorExclusion": "Standard 300 mcg covers only up to 30 mL of fetal blood; a positive rosette test indicates massive bleeding that could require multiple vials to prevent maternal sensitization.",
    "citation": "American College of Obstetricians and Gynecologists. Prevention of Rh D Alloimmunization: ACOG Practice Bulletin, Number 181. Obstet Gynecol. 2017;130(2):e57-e70. PMID: 28742673."
  },
  {
    "code": "op-c-s2-0336",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Endocrine",
    "topic": "Polycystic Ovary Syndrome (PCOS) Infertility",
    "subtopic": "Letrozole First-Line Ovulation Induction vs Clomiphene",
    "provisionalDifficulty": 4,
    "stem": "A 27-year-old woman presents to the reproductive endocrinology clinic with inability to conceive for 14 months despite regular, unprotected intercourse. She reports irregular menstrual cycles occurring every 45 to 75 days since menarche at age 13. Her body mass index (BMI) is 31 kg/m2. Physical examination reveals terminal dark hair on her upper lip, chin, and lower abdomen (Ferriman-Gallwey score: 11), moderate facial cystic acne, and velvety hyperpigmented plaques across the posterior neck (acanthosis nigricans). Pelvic ultrasound demonstrates normal uterine morphology and bilateral enlarged ovaries with multiple small subcapsular peripheral follicles ('string of pearls' appearance). Her partner's semen analysis is completely normal, and hysterosalpingography confirms bilateral tubal patency. Serum TSH, prolactin, and 17-hydroxyprogesterone levels are within normal limits. She desires pregnancy. Which of the following is the most effective first-line pharmacologic agent for ovulation induction in this patient?",
    "choices": [
      ["Oral letrozole (aromatase inhibitor)", "The patient has polycystic ovary syndrome (PCOS), meeting the Rotterdam criteria: (1) oligo/anovulation (irregular menses), (2) clinical and/or biochemical hyperandrogenism (hirsutism, acne), and (3) polycystic ovarian morphology on ultrasound. For anovulatory infertility in patients with PCOS, LETROZOLE (a competitive non-steroidal aromatase inhibitor) is the undisputed first-line ovulation induction agent. In the landmark NICHD PPCOS II trial, letrozole demonstrated statistically significant superiority over clomiphene citrate, achieving higher ovulation rates (61.7% vs 48.3%) and higher live-birth rates (27.5% vs 19.1%), particularly in women with BMI > 30 kg/m2, with lower rates of multiple gestation."],
      ["Oral clomiphene citrate (selective estrogen receptor modulator)", "Clomiphene citrate was historically the primary first-line agent, but randomized clinical trials have conclusively proven that letrozole achieves significantly higher cumulative live-birth rates and lower rates of twin pregnancy in PCOS."],
      ["Metformin monotherapy without ovulation-inducing medications", "Metformin improves insulin sensitivity and metabolic parameters in PCOS, but is substantially inferior to letrozole for achieving ovulation and live birth and is no longer recommended as first-line monotherapy for fertility."],
      ["Exogenous gonadotropin injections (recombinant FSH and LH)", "Injectable gonadotropins are second-line therapy for patients who fail first-line oral ovulation induction; they carry high financial cost and high risks of ovarian hyperstimulation syndrome (OHSS) and high-order multiple gestations."],
      ["Combination oral contraceptive pills containing ethinyl estradiol and drospirenone", "Oral contraceptive pills suppress LH/FSH and treat hirsutism and irregular menses in women NOT seeking pregnancy; however, they prevent ovulation and are completely contraindicated when immediate conception is the patient's goal."]
    ],
    "shortestValidSolution": "PCOS patient with anovulatory infertility and BMI 31 -> first-line ovulation induction agent is letrozole (superior live birth rate over clomiphene).",
    "necessaryInference": "Select letrozole over clomiphene citrate as the modern evidence-based first-line ovulation induction agent for PCOS infertility based on landmark randomized trial data (PPCOS II).",
    "strongestDistractor": "Oral clomiphene citrate (selective estrogen receptor modulator)",
    "distractorExclusion": "While clomiphene was historic first-line, modern international guidelines designate letrozole as first-line due to significantly higher live birth rates, particularly in obese women.",
    "citation": "Legro RS, et al. Letrozole versus Clomiphene for Infertility in the Polycystic Ovary Syndrome. N Engl J Med. 2014;371(2):119-129. PMID: 25006718."
  },
  {
    "code": "op-c-s2-0337",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Endometriosis",
    "subtopic": "Clinical Diagnosis, First-Line Hormonal Therapy, and Laparoscopic Excision",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old nulligravida presents with severe, progressive pelvic pain for the past 2 years. She states that her pain begins 2 days before the onset of menses and lasts throughout the menstrual flow (dysmenorrhea). She also reports deep pelvic pain during sexual intercourse (dyspareunia) and sharp, painful bowel movements during her periods (dyschezia). Over-the-counter ibuprofen provides minimal relief. On pelvic examination, there is marked focal tenderness in the posterior vaginal fornix with palpable nodularity along the uterosacral ligaments and a retroverted, fixed uterus. Transvaginal pelvic ultrasonography shows normal-sized ovaries without cystic lesions and a normal endometrial echo. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Initiate combined oral contraceptive pills or oral progestin therapy empirically", "The patient presents with the classic symptom triad of endometriosis: severe dysmenorrhea, deep dyspareunia, and dyschezia, accompanied by physical exam findings of uterosacral ligament nodularity and a fixed, retroverted uterus. Endometriosis occurs when functional endometrial glands and stroma implant outside the uterine cavity (most commonly ovaries, posterior cul-de-sac, and uterosacral ligaments). According to ACOG guidelines, in the absence of an ovarian mass or acute surgical indication, EMPIRIC FIRST-LINE MEDICAL THERAPY with combined hormonal contraceptives or continuous oral progestins (such as norethindrone or levonorgestrel IUD) combined with NSAIDs is the standard initial step. Hormonal suppression induces decidualization and atrophy of ectopic endometrial implants, relieving symptoms in > 80% of patients without requiring invasive surgery."],
      ["Perform immediate diagnostic and therapeutic laparoscopy under general anesthesia", "Diagnostic laparoscopy is the gold standard for definitive histological confirmation and surgical ablation, but is an invasive surgical procedure reserved for patients who fail first-line medical therapy or who desire immediate fertility."],
      ["Prescribe broad-spectrum oral doxycycline and ceftriaxone for chronic pelvic inflammatory disease", "Pelvic inflammatory disease causes cervical motion tenderness, purulent endocervical discharge, and bilateral adnexal fullness, rather than cyclical dysmenorrhea, dyschezia, and discrete uterosacral nodularity."],
      ["Perform an endometrial biopsy to evaluate for chronic endometritis", "Endometrial biopsy samples the intrauterine lining and cannot diagnose extrauterine pelvic endometriosis; it is useless for uterosacral implants."],
      ["Initiate long-term high-dose gonadotropin-releasing hormone (GnRH) antagonist monotherapy without add-back therapy", "GnRH antagonists (e.g., elagolix) are second-line agents for patients failing combined oral contraceptives or progestins; unmonitored monotherapy causes severe hypoestrogenism, vasomotor symptoms, and bone mineral density loss."]
    ],
    "shortestValidSolution": "Dysmenorrhea + dyspareunia + dyschezia + uterosacral nodularity -> endometriosis -> empiric first-line medical therapy with combined oral contraceptives or progestins.",
    "necessaryInference": "Recognize endometriosis from the clinical triad and uterosacral nodularity, and initiate empiric first-line hormonal therapy before resorting to invasive diagnostic laparoscopy.",
    "strongestDistractor": "Perform immediate diagnostic and therapeutic laparoscopy under general anesthesia",
    "distractorExclusion": "While laparoscopy provides definitive histology, ACOG guidelines mandate a trial of non-invasive empiric medical therapy (OCPs/progestins) first before invasive surgery.",
    "citation": "American College of Obstetricians and Gynecologists. Endometriosis: ACOG Practice Bulletin, Number 114. Obstet Gynecol. 2010;116(1):223-236. PMID: 20567191."
  }
]

print(f"Loaded {len(items_b14_p1)} items for Step 2 CK Batch 14 part 1.")
