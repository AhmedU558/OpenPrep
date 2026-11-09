# Step 2 CK Batch 14 Part 2: Items 0338 - 0350
import json

items_b14_p2 = [
  {
    "code": "op-c-s2-0338",
    "exam": "Step 2 CK",
    "subject": "Gynecologic Oncology",
    "system": "Pregnancy",
    "topic": "Postmenopausal Vaginal Bleeding",
    "subtopic": "Endometrial Biopsy vs Transvaginal Ultrasound Thresholds",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old woman presents to the clinic reporting two episodes of light vaginal spotting over the past month. She achieved natural menopause 11 years ago at age 51 and has had no bleeding since. She has a history of type 2 diabetes mellitus, hypertension, and obesity (BMI 34 kg/m2). She has never been pregnant. Speculum examination demonstrates a normal cervix without visible masses or contact bleeding, and bimanual examination is unremarkable. Transvaginal ultrasonography reveals a thickened endometrial stripe measuring 8 mm (normal in postmenopausal woman: <= 4 mm) with heterogeneous echotexture and normal-appearing adnexa. Which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Perform an outpatient endometrial biopsy", "Postmenopausal vaginal bleeding is a red-flag symptom that must be evaluated urgently to rule out endometrial carcinoma (which accounts for approximately 10% of postmenopausal bleeding cases). Major risk factors include unopposed estrogen exposure, obesity (peripheral aromatization of androstenedione to estrone in adipose tissue), nulliparity, diabetes, and hypertension. A postmenopausal endometrial thickness > 4 mm on transvaginal ultrasound requires definitive tissue sampling. An outpatient office endometrial biopsy (Pipelle biopsy) is the primary first-line diagnostic investigation, offering > 90% sensitivity for detecting endometrial cancer and hyperplasia."],
      ["Reassure the patient and schedule repeat ultrasonography in 6 months", "Postmenopausal bleeding with an 8-mm endometrial stripe cannot be managed expectantly; delaying tissue sampling risks the progression of an undiagnosed endometrial adenocarcinoma."],
      ["Initiate combination hormone replacement therapy with conjugated estrogens and medroxyprogesterone", "Initiating estrogen therapy in an unbiopsied patient with postmenopausal bleeding and endometrial thickening is dangerous and accelerates estrogen-dependent neoplasia."],
      ["Perform emergent total abdominal hysterectomy with bilateral salpingo-oophorectomy", "Definitive surgical extirpation without prior histological confirmation is premature; benign etiologies (such as endometrial polyps or endometrial atrophy) are common and tissue biopsy must guide surgical planning."],
      ["Obtain an outpatient serum CA-125 concentration to rule out cervical dysplasia", "CA-125 is a marker for advanced ovarian cancer, not cervical dysplasia, and has poor sensitivity for early endometrial cancer; direct histological endometrial biopsy is mandatory."]
    ],
    "shortestValidSolution": "Postmenopausal bleeding + endometrial stripe 8 mm (> 4 mm) + obesity -> endometrial biopsy to rule out endometrial carcinoma.",
    "necessaryInference": "Recognize postmenopausal bleeding with endometrial stripe > 4 mm as an absolute indication for histological endometrial biopsy to evaluate for endometrial adenocarcinoma.",
    "strongestDistractor": "Perform emergent total abdominal hysterectomy with bilateral salpingo-oophorectomy",
    "distractorExclusion": "Surgical hysterectomy cannot be performed blindly without an initial office biopsy confirming malignancy.",
    "citation": "American College of Obstetricians and Gynecologists. The Role of Transvaginal Ultrasonography in Evaluating the Endometrium of Postmenopausal Women. ACOG Committee Opinion No. 734. Obstet Gynecol. 2018;131(5):e124-e129. PMID: 29683906."
  },
  {
    "code": "op-c-s2-0339",
    "exam": "Step 2 CK",
    "subject": "Gynecology & Emergency Medicine",
    "system": "Pregnancy",
    "topic": "Ovarian Torsion",
    "subtopic": "Emergent Diagnostic Laparoscopy and Detorsion vs Oophorectomy",
    "provisionalDifficulty": 4,
    "stem": "A 24-year-old woman presents to the emergency department with sudden-onset, severe, sharp right lower quadrant pelvic pain that began 3 hours ago during gymnastics practice. The pain is associated with severe nausea and two episodes of non-bilious vomiting. She has no chronic medical problems. Her last menstrual period was 2 weeks ago. Vital signs are: blood pressure 134/82 mm Hg, heart rate 108/min, and temperature 37.4°C (99.3°F). Physical examination reveals marked tenderness to deep palpation in the right lower quadrant and right adnexa, with localized involuntary guarding. Pelvic ultrasound reveals an enlarged right ovary measuring 6.5 cm with peripherally displaced multiple follicles (ovarian edema) and an underlying 4.5-cm cystic mass; color Doppler flow demonstrates completely absent venous flow and severely dampened arterial flow to the right ovary. Left ovary and uterus are normal, and urine pregnancy test is negative. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform emergency diagnostic laparoscopy with ovarian detorsion and cystectomy", "The patient has acute ovarian torsion, an emergency caused by twisting of the ovary and fallopian tube around the infundibulopelvic (suspensory) and utero-ovarian ligaments, occluding first venous/lymphatic outflow and subsequently arterial inflow. The presence of an adnexal mass >= 5 cm (e.g., dermoid cyst) is the primary predisposing risk factor. Emergency surgical exploration via laparoscopy is mandatory to preserve ovarian function and future fertility. Current standard of care emphasizes ovarian-conserving surgery: laparoscopic detorsion and cystectomy regardless of the macroscopic ischemic/cyanotic appearance of the ovary, because viable follicular function recovers in the vast majority of detorsed ovaries."],
      ["Administer high-dose intravenous broad-spectrum antibiotics and admit to the gynecology service", "Antibiotics treat pelvic inflammatory disease or tubo-ovarian abscess, but do not relieve mechanical ligamentous vascular strangulation; delaying surgery causes permanent ovarian gangrene."],
      ["Perform emergent right salpingo-oophorectomy without attempting detorsion", "Historically, oophorectomy was performed for fear of thromboembolism from detorsion, but modern evidence has thoroughly debunked this myth; detorsion and ovarian preservation is the standard of care in reproductive-aged women."],
      ["Schedule elective outpatient magnetic resonance imaging of the pelvis for tissue characterization", "Outpatient imaging in acute ovarian torsion causes irreversible ischemic infarction and necrosis of the ovary within hours."],
      ["Perform ultrasound-guided transvaginal needle aspiration of the right ovarian cyst", "Needle aspiration does not untwist the strangulated vascular pedicle and introduces risk of chemical peritonitis or infectious seeding."]
    ],
    "shortestValidSolution": "Sudden severe RLQ pain + vomiting + enlarged ovary with absent Doppler flow -> ovarian torsion -> emergent laparoscopy with detorsion.",
    "necessaryInference": "Diagnose acute ovarian torsion and select emergent laparoscopy with ovarian detorsion and cystectomy as the fertility-preserving standard of care over oophorectomy or observation.",
    "strongestDistractor": "Perform emergent right salpingo-oophorectomy without attempting detorsion",
    "distractorExclusion": "Emergent oophorectomy is outdated; detorsion preserves follicular viability in reproductive-age women even when the ovary appears bluish-black intraoperatively.",
    "citation": "American College of Obstetricians and Gynecologists. Adnexal Torsion in Adolescents: ACOG Committee Opinion No. 783. Obstet Gynecol. 2019;134(2):e56-e63. PMID: 31343606."
  },
  {
    "code": "op-c-s2-0340",
    "exam": "Step 2 CK",
    "subject": "Gynecologic Oncology",
    "system": "Pregnancy",
    "topic": "Epithelial Ovarian Cancer",
    "subtopic": "Pelvic Mass with Ascites, CA-125, and Exploratory Laparotomy",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old postmenopausal woman presents to the clinic with persistent abdominal bloating, early satiety, and an unintentional 5-kg weight loss over the past 3 months. She has noticed that her clothes fit more tightly around the waist despite eating less. On physical examination, her abdomen is distended with shifting dullness and a palpable fluid wave. Pelvic examination demonstrates a non-tender, fixed, nodular, solid-and-cystic right adnexal mass measuring approximately 8 cm in diameter, as well as nodularity in the cul-de-sac. Transvaginal ultrasonography confirms a complex, multilocular 8.2-cm right ovarian mass with thick internal septations, papillary projections, and abundant internal vascularity on Doppler imaging, accompanied by moderate ascites. Serum CA-125 concentration is 420 U/mL (normal: < 35 U/mL). Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Perform an exploratory laparotomy with surgical staging and maximal cytoreduction", "The patient presents with high-suspicion epithelial ovarian carcinoma, characterized by a postmenopausal complex adnexal mass (multilocular, thick septations, papillary excrescences), ascites, peritoneal nodularity ('omental cake'), and a markedly elevated CA-125. The definitive standard of care for suspected ovarian cancer is surgical: exploratory laparotomy for comprehensive surgical staging (peritoneal washings, total abdominal hysterectomy, bilateral salpingo-oophorectomy, omentectomy, and pelvic/para-aortic lymph node dissection) and maximal cytoreductive debulking. Image-guided percutaneous needle biopsy of the ovarian mass is STRICTLY CONTRAINDICATED because needle puncture ruptures the tumor capsule, spilling malignant epithelial cells into the peritoneal cavity and upstaging an otherwise encapsulated stage I tumor to stage IC."],
      ["Perform percutaneous image-guided fine-needle aspiration biopsy of the ovarian mass", "Percutaneous biopsy of an intact ovarian mass is contraindicated because needle puncture can rupture the tumor capsule, spilling malignant cells throughout the peritoneal cavity and worsening prognosis."],
      ["Initiate primary neoadjuvant chemotherapy with carboplatin and paclitaxel without surgery", "Primary surgical staging and cytoreduction is the undisputed first-line approach for resectable ovarian cancer; neoadjuvant chemotherapy is reserved strictly for patients who are medically unfit or have unresectable disease."],
      ["Perform transvaginal ultrasound-guided paracentesis and manage expectantly with serial CA-125 levels", "Paracentesis relieves symptomatic ascites but does not treat the underlying ovarian malignancy, and serial monitoring of a complex 8-cm mass leads to fatal metastatic progression."],
      ["Prescribe oral medroxyprogesterone acetate to induce atrophy of suspected ectopic ovarian endometrioma", "Endometriomas present in premenopausal women with cyclical dysmenorrhea and unilocular ground-glass cysts; a postmenopausal complex mass with thick septations and ascites is malignant until proven otherwise."]
    ],
    "shortestValidSolution": "Postmenopausal bloating + ascites + complex 8 cm ovarian mass with septations + CA-125 420 U/mL -> ovarian cancer -> exploratory laparotomy with staging and debulking (needle biopsy contraindicated).",
    "necessaryInference": "Recognize epithelial ovarian cancer and select exploratory laparotomy for staging/debulking while knowing that percutaneous biopsy is contraindicated due to capsule rupture and peritoneal seeding.",
    "strongestDistractor": "Perform percutaneous image-guided fine-needle aspiration biopsy of the ovarian mass",
    "distractorExclusion": "Needle biopsy risks tumor capsule rupture and malignant cell dissemination, converting a localized stage I malignancy into stage IC.",
    "citation": "American College of Obstetricians and Gynecologists. Practice Bulletin No. 174: Evaluation and Management of Adnexal Masses. Obstet Gynecol. 2016;128(5):e210-e226. PMID: 27776185."
  },
  {
    "code": "op-c-s2-0341",
    "exam": "Step 2 CK",
    "subject": "Gynecology",
    "system": "Pregnancy",
    "topic": "Cervical Cancer Screening (ASCCP Guidelines)",
    "subtopic": "ASC-US with Positive High-Risk HPV and Colposcopy Indications",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman presents for routine gynecological health maintenance. She is asymptomatic, sexually active with one male partner, and uses an intrauterine copper device for contraception. She has no chronic medical conditions. Her last cervical cancer screening was 3 years ago and was normal. Speculum examination demonstrates a normal cervix without visible lesions, ulcers, or discharge. Liquid-based cervical cytology returns as Atypical Squamous Cells of Undetermined Significance (ASC-US). Reflex human papillomavirus (HPV) testing is positive for high-risk HPV types (positive for non-16/18 pooled high-risk HPV). According to the current ASCCP risk-based management consensus guidelines, which of the following is the most appropriate next step in the clinical management of this patient?",
    "choices": [
      ["Perform colposcopy with directed cervical biopsies", "According to the ASCCP risk-based consensus guidelines, clinical management is determined by assessing the patient's immediate risk of high-grade cervical intraepithelial neoplasia (CIN 3+). For women >= 25 years with ASC-US cytology who test positive for high-risk HPV, the immediate risk of CIN 3+ is approximately 4.5%, which exceeds the 4.0% threshold mandating COLPOSCOPY. During colposcopy, the transformation zone and squamocolumnar junction are magnified following 3–5% acetic acid application, allowing directed cervical punch biopsies of acetowhite lesions and abnormal vascular patterns (punctations, mosaicism)."],
      ["Repeat cervical cytology and HPV co-testing in 1 year", "Repeat screening in 1 year is the management for ASC-US cytology with NEGATIVE high-risk HPV testing (where the risk of CIN 3+ is < 0.5%); in high-risk HPV-positive patients, immediate colposcopy is required."],
      ["Perform immediate loop electrosurgical excision procedure (LEEP) of the cervix", "Diagnostic excisional procedures (LEEP or cold-knife cone biopsy) are 'see-and-treat' options reserved for patients with biopsy-proven CIN 2/3 or HSIL cytology with immediate CIN 3+ risk >= 25–60%; LEEP for ASC-US constitutes gross overtreatment."],
      ["Administer a 3-dose series of the 9-valent HPV vaccine to eradicate established infection", "The HPV vaccine prevents new incident infections but has zero therapeutic effect against established, active HPV infections or existing cervical dysplastic lesions."],
      ["Perform an immediate endometrial biopsy to evaluate for endocervical glandular extension", "Endometrial biopsy is indicated for atypical glandular cells (AGC) in women >= 35 years or with endometrial cancer risk factors; it is not indicated for squamous ASC-US cytology."]
    ],
    "shortestValidSolution": "Age 32 + Pap showing ASC-US + positive high-risk HPV -> colposcopy with directed biopsies per ASCCP risk threshold.",
    "necessaryInference": "Apply ASCCP guidelines: ASC-US cytology with positive high-risk HPV in a woman >= 25 carries an immediate CIN 3+ risk > 4%, mandating colposcopy rather than repeat testing or immediate excisional LEEP.",
    "strongestDistractor": "Repeat cervical cytology and HPV co-testing in 1 year",
    "distractorExclusion": "Repeat testing in 1 year is only appropriate if high-risk HPV is negative; positive high-risk HPV mandates immediate colposcopic evaluation.",
    "citation": "Perkins RB, et al. 2019 ASCCP Risk-Based Management Consensus Guidelines for Abnormal Cervical Cancer Screening Tests and Cancer Precursors. J Low Genit Tract Dis. 2020;24(2):102-131. PMID: 32243307."
  },
  {
    "code": "op-c-s2-0342",
    "exam": "Step 2 CK",
    "subject": "Gynecology & Infectious Disease",
    "system": "Pregnancy",
    "topic": "Pelvic Inflammatory Disease & Tubo-Ovarian Abscess",
    "subtopic": "Parenteral Regimens vs Outpatient Therapy and Abscess Drainage",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old woman presents to the emergency department with severe, worsening lower abdominal and pelvic pain for 4 days, accompanied by nausea, vomiting, and subjective fever. She is sexually active and has had two new sexual partners in the past 2 months without barrier contraception. Vital signs are: blood pressure 110/68 mm Hg, heart rate 104/min, and temperature 38.6°C (101.5°F). On physical examination, there is marked bilateral lower quadrant abdominal tenderness with involuntary guarding. Pelvic examination demonstrates purulent cervical discharge, exquisite cervical motion tenderness ('chandelier sign'), and a palpable, tender, fluctuant 6-cm mass in the left adnexa. Laboratory evaluation reveals a leukocyte count of 16,800/mm3. Urine pregnancy test is negative. Pelvic ultrasonography reveals a 6.2-cm complex, thick-walled, multilocular left adnexal mass with internal debris and increased peripheral vascularity, consistent with a tubo-ovarian abscess (TOA). Which of the following is the most appropriate initial management for this patient?",
    "choices": [
      ["Hospital admission with intravenous cefoxitin (or cefotetan) plus intravenous/oral doxycycline", "The patient has pelvic inflammatory disease (PID) complicated by a tubo-ovarian abscess (TOA). Inpatient hospital admission and parenteral broad-spectrum antibiotic therapy are mandatory for any PID patient with a TOA, pregnancy, severe illness (high fever, intractable nausea/vomiting), peritonitis, or failure of outpatient oral therapy. Recommended inpatient parenteral regimens include: (1) Intravenous cefoxitin (or cefotetan) plus oral/IV doxycycline, or (2) Intravenous ampicillin-sulbactam plus oral/IV doxycycline, providing coverage against Neisseria gonorrhoeae, Chlamydia trachomatis, enteric Gram-negative rods, and anaerobes (e.g., Bacteroides fragilis). Over 70% of TOAs respond to antibiotic therapy alone; surgical or percutaneous drainage is reserved for patients with persistent fever, worsening symptoms, or abscess enlargement after 48 to 72 hours of parenteral therapy."],
      ["Discharge home on oral ceftriaxone 500 mg IM single dose plus oral doxycycline and metronidazole for 14 days", "Outpatient oral therapy is appropriate only for mild-to-moderate uncomplicated PID; the presence of a tubo-ovarian abscess (TOA) is an absolute indication for inpatient hospital admission and parenteral antibiotics."],
      ["Perform immediate exploratory laparotomy with bilateral salpingo-oophorectomy", "Immediate radical surgical extirpation carries significant morbidity and premature surgical menopause in a 26-year-old; initial conservative management with parenteral antibiotics succeeds in the majority of cases."],
      ["Perform immediate ultrasound-guided transvaginal drainage before starting antibiotic therapy", "Immediate interventional drainage is unnecessary as initial therapy and invasive; broad-spectrum parenteral antibiotics must be initiated first, with drainage reserved for failure of medical therapy after 48–72 hours."],
      ["Initiate intravenous vancomycin and piperacillin-tazobactam monotherapy without anaerobic coverage", "Piperacillin-tazobactam has activity, but vancomycin is unnecessary without MRSA suspicion, and standardized guideline-directed regimens (cefoxitin/cefotetan + doxycycline) specifically target the polymicrobial polymorphs of PID."]
    ],
    "shortestValidSolution": "PID (cervical motion tenderness, purulent discharge) + 6 cm adnexal mass (tubo-ovarian abscess) -> inpatient admission + IV cefoxitin/cefotetan + doxycycline.",
    "necessaryInference": "Recognize that the presence of a tubo-ovarian abscess converts PID into an absolute indication for inpatient parenteral antibiotic therapy rather than outpatient treatment, and that antibiotics succeed in > 70% without immediate surgery.",
    "strongestDistractor": "Discharge home on oral ceftriaxone 500 mg IM single dose plus oral doxycycline and metronidazole for 14 days",
    "distractorExclusion": "Tubo-ovarian abscess (TOA) mandates inpatient admission and IV broad-spectrum antibiotics; outpatient management carries high risk of abscess rupture, peritonitis, and septic shock.",
    "citation": "Workowski KA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926."
  },
  {
    "code": "op-c-s2-0343",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Complete Molar Pregnancy",
    "subtopic": "Suction Curettage and Post-Evacuation Surveillance",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman, gravida 1 para 0, presents to the emergency department with dark brown vaginal spotting and severe nausea and vomiting for 2 weeks. Her last menstrual period was 9 weeks ago. On physical examination, blood pressure is 154/96 mm Hg and heart rate is 102/min. The uterine fundus is palpable midway between the symphysis pubis and umbilicus, measuring consistent with a 16-week gestation. Pelvic examination reveals dark brownish prune-juice-colored blood in the vaginal vault and bilaterally enlarged, palpable, non-tender cystic adnexa measuring 6 cm each. Laboratory testing reveals a quantitative serum beta-hCG of 280,000 mIU/mL. Transvaginal pelvic ultrasonography reveals an enlarged uterine cavity filled with diffuse heterogeneous echogenic material containing multiple small cystic spaces ('snowstorm' or 'swiss cheese' appearance) without an identifiable gestational sac or fetal parts. Which of the following is the most appropriate definitive management and subsequent surveillance protocol for this patient?",
    "choices": [
      ["Perform uterine suction curettage followed by serial weekly serum beta-hCG measurements until undetectable", "The patient has a complete hydatidiform mole (gestational trophoblastic disease), typically resulting from fertilization of an enucleated egg by a single sperm that duplicates (46,XX paternal origin). Manifestations include vaginal bleeding, uterus larger than dates, hyperemesis gravidarum, early preeclampsia before 20 weeks, bilateral theca lutein cysts (stimulated by massive beta-hCG), and markedly elevated beta-hCG (> 100,000 mIU/mL) with the classic 'snowstorm' ultrasound appearance. Definitive primary management is UTERINE SUCTION CURETTAGE to evacuate the molar tissue. Because of the risk of developing gestational trophoblastic neoplasia (invasive mole or choriocarcinoma, occurring in 15–20% of complete moles), serial weekly serum beta-hCG monitoring is mandatory until levels are undetectable for 3 consecutive weeks, followed by monthly monitoring for 6 months, with strict contraception during surveillance."],
      ["Administer systemic methotrexate chemotherapy as primary non-surgical ablation", "Methotrexate is chemotherapy for gestational trophoblastic NEOPLASIA (persistent/rising hCG post-evacuation or choriocarcinoma); it is not primary initial management for an intact uterine molar pregnancy."],
      ["Perform sharp mechanical uterine curettage with metal curettes without suction", "Sharp metal curettage carries a significantly higher risk of uterine perforation and severe hemorrhage; suction curettage is the standard method of evacuation."],
      ["Perform bilateral oophorectomy to excise the large theca lutein cysts", "Theca lutein cysts are physiological hyperstimulation cysts caused by massive circulating hCG; they spontaneously regress over weeks to months as beta-hCG normalizes and must NOT be surgically removed."],
      ["Perform immediate medical induction of labor with high-dose intravenous oxytocin", "Medical induction with uterotonics or prostaglandins carries an unacceptably high risk of embolizing trophoblastic tissue into the pulmonary vasculature, causing acute respiratory distress syndrome."]
    ],
    "shortestValidSolution": "Uterus larger than dates + prune juice bleeding + hCG 280,000 + snowstorm ultrasound + theca lutein cysts -> complete mole -> suction curettage + weekly serial hCG monitoring.",
    "necessaryInference": "Diagnose complete molar pregnancy and identify suction curettage as definitive treatment, followed by serial weekly hCG surveillance to screen for malignant gestational trophoblastic neoplasia (choriocarcinoma).",
    "strongestDistractor": "Perform bilateral oophorectomy to excise the large theca lutein cysts",
    "distractorExclusion": "Theca lutein cysts resolve spontaneously once beta-hCG drops after molar evacuation; surgical excision is unnecessary and harms future ovarian reserve.",
    "citation": "American College of Obstetricians and Gynecologists. Gestational Trophoblastic Disease: ACOG Practice Bulletin, Number 210. Obstet Gynecol. 2019;133(2):e168-e186. PMID: 30681544."
  },
  {
    "code": "op-c-s2-0344",
    "exam": "Step 2 CK",
    "subject": "Gynecology",
    "system": "Pregnancy",
    "topic": "Adenomyosis",
    "subtopic": "Clinical Triad: Menorrhagia, Dysmenorrhea, and Symmetrically Enlarged Globular Boggy Uterus",
    "provisionalDifficulty": 4,
    "stem": "A 43-year-old woman, gravida 3 para 3, presents to the clinic complaining of progressively heavy and prolonged menstrual periods (menorrhagia) and severe lower abdominal cramping (dysmenorrhea) for the past 18 months. She reports that her periods last 8 to 10 days with heavy passage of clots, requiring her to change sanitary pads every 1 to 2 hours on the heaviest days. She denies intermenstrual bleeding, postcoital bleeding, or fever. Physical examination reveals a normal-appearing cervix. On bimanual examination, the uterus is uniformly, symmetrically enlarged (equivalent to a 12-week gestation), globular, soft, and diffusely tender to palpation ('boggy'). The adnexa are non-tender and normal in size. Transvaginal ultrasonography reveals a symmetrically thickened, globular uterus with myometrial heterogeneity, asymmetric myometrial wall thickening, and subendometrial myometrial cysts without discrete focal masses. An in-office endometrial biopsy is negative for hyperplasia or malignancy. Which of the following is the underlying histopathologic mechanism of this patient's condition?",
    "choices": [
      ["Benign invasion of endometrial glands and stroma into the myometrium", "The patient has adenomyosis, characterized by the abnormal presence of ectopic endometrial glands and stroma situated deep within the myometrium, accompanied by reactive hypertrophy and hyperplasia of surrounding smooth muscle cells. It typically presents in multiparous women in their 40s with a classic triad: (1) heavy menstrual bleeding (menorrhagia), (2) progressive dysmenorrhea, and (3) a symmetrically enlarged, globular, uniformly tender ('boggy') uterus that does not exceed 12 to 14 weeks in size. In contrast, uterine leiomyomas (fibroids) produce an asymmetrically enlarged, firm, non-tender, irregular uterus with discrete pseudocapsulated smooth muscle whorls."],
      ["Monoclonal benign proliferation of smooth muscle cells surrounded by a distinct pseudocapsule", "This describes uterine leiomyoma (fibroid), which produces an asymmetric, nodular, firm, non-tender uterus with well-demarcated whorled hypoechoic masses on ultrasound."],
      ["Ectopic endometrial tissue implanting on peritoneal surfaces and ovaries outside the uterus", "This defines endometriosis, which involves implants on pelvic organs (ovaries, uterosacral ligaments), causing cyclical pelvic pain, dyspareunia, and uterosacral nodularity with a normal-sized uterus."],
      ["Uncontrolled clonal proliferation of endometrial glandular epithelium with cytological atypia", "This describes endometrial hyperplasia or adenocarcinoma, characterized by irregular postmenopausal or intermenstrual bleeding and thickened endometrial stripe, ruled out by her negative biopsy."],
      ["Pelvic venous dilation and stasis within the broad ligament and ovarian plexus", "This describes pelvic congestion syndrome, which presents with dull, aching pelvic pain worsening with standing, without the classic uniformly enlarged, boggy uterus of adenomyosis."]
    ],
    "shortestValidSolution": "Multipara in 40s + heavy bleeding + dysmenorrhea + uniformly enlarged globular tender boggy uterus -> adenomyosis (endometrial glands/stroma invading myometrium).",
    "necessaryInference": "Differentiate adenomyosis (symmetrically enlarged, globular, tender boggy uterus) from leiomyomas (asymmetrically enlarged, firm, irregular non-tender uterus) based on clinical exam and histopathology.",
    "strongestDistractor": "Monoclonal benign proliferation of smooth muscle cells surrounded by a distinct pseudocapsule",
    "distractorExclusion": "Monoclonal smooth muscle proliferation describes leiomyomas (fibroids), which produce an irregular, firm, non-tender uterus rather than a soft, globular, boggy tender uterus.",
    "citation": "Vannuccini S, Petraglia F. Recent Advances in Understanding and Managing Adenomyosis. F1000Res. 2019;8:F1000 Faculty Rev-283. PMID: 30918627."
  },
  {
    "code": "op-c-s2-0345",
    "exam": "Step 2 CK",
    "subject": "Gynecology & Dermatology",
    "system": "Dermatology",
    "topic": "Vulvar Lichen Sclerosus",
    "subtopic": "Topical High-Potency Corticosteroids and Malignancy Risk",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old postmenopausal woman presents to the clinic complaining of severe, intractable vulvar itching and burning that has persisted for 8 months. She also reports pain during intercourse (dyspareunia) and tearing of the skin after wiping. She has tried over-the-counter topical miconazole and hydrocortisone creams with no relief. On physical examination, the vulva exhibits thin, shiny, ivory-white, parchment-like papules and plaques involving the labia majora, labia minora, and perianal region in a distinct 'figure-of-eight' distribution. There is noticeable loss of anatomical architecture, with resorption and fusion of the labia minora and narrowing of the vaginal introitus. The vagina itself is completely spared, and speculum examination shows normal pink vaginal mucosa. A punch biopsy of the affected vulvar skin demonstrates hyperkeratosis, thinning of the epidermis with flattening of rete pegs, and a broad zone of dermal hyalinization with a band-like lymphocytic infiltrate. Which of the following is the most appropriate initial therapy for this patient?",
    "choices": [
      ["Topical high-potency corticosteroid ointment (clobetasol propionate 0.05%)", "The patient has vulvar lichen sclerosus, a chronic, inflammatory autoimmune mucocutaneous disorder most prevalent in postmenopausal women. Classical features include intense vulvar pruritus, dyspareunia, thin ivory-white 'cigarette paper' plaques, resorption of the labia minora, clitoral phimosis, and a characteristic figure-of-eight distribution sparing the vagina. First-line therapy is high-potency topical corticosteroids (clobetasol propionate 0.05% ointment applied daily for 4–12 weeks followed by taper to maintenance). Treatment relieves symptoms, halts anatomical destruction, and significantly reduces the long-term risk of malignant transformation into vulvar squamous cell carcinoma (which occurs in approximately 4–5% of patients with chronic untreated lichen sclerosus)."],
      ["Topical estrogen cream (conjugated estrogens) applied to the vulva and vagina", "Topical estrogen treats atrophic vaginitis (which involves the vagina and causes pallor and loss of rugae without parchment-white plaques, labial resorption, or perianal figure-of-eight lesions); it does not treat lichen sclerosus."],
      ["Oral fluconazole 150 mg weekly for chronic recurrent vulvovaginal candidiasis", "Candidiasis causes thick white 'cottage cheese' discharge, vaginal erythema, and satellite lesions without loss of anatomical architecture, dermal hyalinization, or labial fusion."],
      ["Topical 5-fluorouracil 5% cream applied twice daily to the vulvar plaques", "5-fluorouracil is a destructive cytotoxic antimetabolite used for actinic keratoses; applied to delicate vulvar lichen sclerosus, it causes severe, debilitating chemical burns and ulceration."],
      ["Surgical excision of the affected vulvar and perianal tissues (simple vulvectomy)", "Surgical excision is contraindicated in uncomplicated lichen sclerosus due to extraordinarily high rates of local disease recurrence (Koebner phenomenon) and permanent disfigurement; surgery is reserved strictly for biopsy-proven invasive carcinoma."]
    ],
    "shortestValidSolution": "Postmenopausal vulvar pruritus + ivory-white parchment plaques in figure-of-eight + labial resorption sparing vagina -> Lichen sclerosus -> high-potency topical corticosteroid (clobetasol).",
    "necessaryInference": "Diagnose vulvar lichen sclerosus by architectural resorption and figure-of-eight distribution, prescribe ultra-potent topical corticosteroids (clobetasol), and recognize that treatment reduces squamous cell carcinoma risk.",
    "strongestDistractor": "Topical estrogen cream (conjugated estrogens) applied to the vulva and vagina",
    "distractorExclusion": "Topical estrogen treats atrophic vaginitis (which involves the vagina), whereas lichen sclerosus is an inflammatory condition sparing the vagina that requires ultra-potent corticosteroids.",
    "citation": "Krapf JM, et al. Vulvar Lichen Sclerosus: Current Perspectives. Int J Womens Health. 2020;12:11-20. PMID: 32021489."
  },
  {
    "code": "op-c-s2-0346",
    "exam": "Step 2 CK",
    "subject": "Gynecology",
    "system": "Pregnancy",
    "topic": "Pelvic Organ Prolapse",
    "subtopic": "Pessary Conservative Management vs Surgical Sacrocolpopexy",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old woman, gravida 4 para 4, presents to the clinic reporting a sensation of pelvic heaviness, vaginal fullness, and feeling as though 'something is falling out of my vagina'. The sensation is worse at the end of the day after standing or walking. She also notes that she frequently has to digitally push back the vaginal bulge in order to completely empty her bladder (splinting). She has a history of chronic obstructive pulmonary disease (severe airflow obstruction on home oxygen) and coronary artery disease. On physical examination with the patient in lithotomy position during a Valsalva maneuver, there is prominent descent of the anterior vaginal wall protruding 2 cm beyond the hymenal ring (Stage III anterior compartment prolapse / cystocele). The patient is anxious to relieve her symptoms but states that her pulmonologist warned her she is at extraordinarily high risk for complications under general anesthesia. Which of the following is the most appropriate next step in the management of this patient?",
    "choices": [
      ["Vaginal pessary fitting and pelvic floor muscle training", "The patient has symptomatic advanced pelvic organ prolapse (Stage III cystocele requiring manual splinting to void). First-line management of symptomatic pelvic organ prolapse can be non-surgical (conservative) or surgical. In patients who desire non-surgical management, or those who have significant medical comorbidities (such as severe COPD on home oxygen and CAD) rendering general anesthesia and major reconstructive pelvic surgery high-risk, a VAGINAL PESSARY fitting combined with pelvic floor muscle training (Kegel exercises) is the undisputed treatment of choice. A properly fitted silicone pessary (e.g., ring with support or Gellhorn) mechanically elevates and supports the prolapsed pelvic organs, relieves bulge and urinary splinting symptoms in > 80% of patients, and completely avoids operative and anesthetic morbidity."],
      ["Immediate open abdominal sacrocolpopexy with synthetic mesh under general anesthesia", "Abdominal sacrocolpopexy is an extensive surgical procedure carrying severe cardiopulmonary risks in a patient with oxygen-dependent severe COPD and CAD, and should never precede a trial of conservative therapy."],
      ["Schedule total vaginal hysterectomy with anterior colporrhaphy", "Major vaginal reconstructive surgery under regional or general anesthesia is premature when a non-invasive, highly effective office-based pessary has not yet been attempted in a frail surgical candidate."],
      ["Initiate systemic estrogen therapy to strengthen attenuated endopelvic fascia", "Systemic hormone replacement therapy does not reverse mechanical structural fascial detachment in advanced Stage III prolapse and increases thromboembolic and cardiovascular risks."],
      ["Reassure the patient and recommend complete avoidance of physical ambulation", "Immobilization causes deconditioning, muscle wasting, and deep venous thrombosis without relieving the anatomic prolapse defect."]
    ],
    "shortestValidSolution": "Stage III cystocele + severe COPD on home oxygen (poor surgical candidate) -> vaginal pessary fitting + pelvic floor exercises.",
    "necessaryInference": "Select non-surgical conservative therapy with a vaginal pessary as the optimal management for symptomatic pelvic organ prolapse in a high-risk surgical candidate.",
    "strongestDistractor": "Schedule total vaginal hysterectomy with anterior colporrhaphy",
    "distractorExclusion": "Surgical repair carries excessive perioperative mortality in oxygen-dependent COPD; non-invasive pessary fitting is safe, highly effective, and first-line.",
    "citation": "American College of Obstetricians and Gynecologists. Pelvic Organ Prolapse: ACOG Practice Bulletin, Number 214. Obstet Gynecol. 2019;134(5):e126-e142. PMID: 31652236."
  },
  {
    "code": "op-c-s2-0347",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Cardiology",
    "system": "Cardiovascular",
    "topic": "Peripartum Cardiomyopathy",
    "subtopic": "Diagnostic Criteria, Guideline-Directed Medical Therapy in Lactation, and ACEi Contraindication",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old woman, primipara, presents to the emergency department 3 weeks after an uncomplicated spontaneous vaginal delivery at term complaining of progressive shortness of breath with minimal exertion, orthopnea requiring four pillows to sleep, and bilateral ankle swelling. She is currently exclusively breastfeeding her newborn. Vital signs are: blood pressure 138/88 mm Hg, heart rate 104/min, respiratory rate 22/min, and oxygen saturation 93% on ambient air. Physical examination reveals jugular venous distention 5 cm above the sternal angle, bibasilar pulmonary crackles extending halfway up the lung fields, an S3 gallop, and 2+ bilateral pitting pretibial edema. Transthoracic echocardiography reveals global left ventricular hypokinesia with a left ventricular ejection fraction of 30% and left ventricular end-diastolic dimension of 5.8 cm, without significant valvular disease. Complete blood count and troponin are normal. Brain natriuretic peptide (BNP) is 850 pg/mL. Which of the following is the most appropriate pharmacologic regimen for this patient?",
    "choices": [
      ["Furosemide, carvedilol, and hydralazine combined with isosorbide dinitrate", "The patient has peripartum cardiomyopathy (PPCM), defined by: (1) development of heart failure towards the end of pregnancy or in the months following delivery (most commonly the first 1–2 months postpartum), (2) absence of another identifiable cause of heart failure, and (3) left ventricular systolic dysfunction with an LVEF < 45%. Management of acute decompensated PPCM in a breastfeeding mother requires: (1) Loop diuretics (furosemide) to reduce preload and relieve pulmonary and systemic congestion; (2) Beta-blockers (carvedilol or metoprolol succinate, which are safe in lactation) to improve long-term survival; and (3) Afterload reduction using hydralazine combined with oral nitrates (isosorbide dinitrate), which are compatible with breastfeeding. CRITICAL CONTRAINDICATION: Angiotensin-converting enzyme inhibitors (such as enalapril) and ARBs are contraindicated during pregnancy (teratogenic); while some ACE inhibitors (enalapril, captopril) can be used postpartum during breastfeeding, in the acute peripartum stabilization hydralazine/nitrates with beta-blockers and diuretics provides proven afterload/preload optimization."],
      ["Lisinopril, spironolactone, and sacubitril-valsartan (ARNI)", "Sacubitril-valsartan (ARNI) is strictly contraindicated in pregnancy and lactation due to fetotoxicity and lack of safety data in breast milk; initial guideline-directed afterload reduction in lactation avoids ARNI."],
      ["Immediate initiation of intravenous heparin anticoagulation without afterload-reducing medications", "While severe PPCM with LVEF < 30% carries high thromboembolic risk warranting anticoagulation, anticoagulation alone does not treat cardiogenic pulmonary edema, requiring afterload/preload reduction."],
      ["Oral digoxin monotherapy titrated to relief of orthopnea", "Digoxin provides mild positive inotropy but does not improve mortality in heart failure with reduced ejection fraction and is completely inadequate as monotherapy for acute decompensated heart failure."],
      ["Immediate emergent bilateral salpingo-oophorectomy to halt prolactin production", "Surgical oophorectomy does not lower pituitary prolactin (which is secreted by the anterior pituitary, not the ovaries) and is an inappropriate, mutilating intervention."]
    ],
    "shortestValidSolution": "Heart failure 3 weeks postpartum + LVEF 30% -> peripartum cardiomyopathy -> loop diuretic (furosemide) + beta-blocker (carvedilol) + afterload reducer (hydralazine/nitrates).",
    "necessaryInference": "Diagnose peripartum cardiomyopathy (LVEF < 45% in late pregnancy/early postpartum) and formulate a medical regimen compatible with lactation (diuretics, beta-blockers, hydralazine/nitrates).",
    "strongestDistractor": "Lisinopril, spironolactone, and sacubitril-valsartan (ARNI)",
    "distractorExclusion": "Sacubitril-valsartan (ARNI) is contraindicated during lactation and pregnancy due to severe toxicity; standard pregnancy/lactation afterload reduction utilizes hydralazine and nitrates.",
    "citation": "Bauersachs J, et al. Current Management of Patients with Severe Acute Peripartum Cardiomyopathy: Practical Guidance from the Heart Failure Association of the ESC. Eur J Heart Fail. 2016;18(9):1096-1105. PMID: 27338426."
  },
  {
    "code": "op-c-s2-0348",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Gynecology",
    "system": "Pregnancy",
    "topic": "Intrapartum Fetal Heart Rate Monitoring",
    "subtopic": "Category III Tracing and Resuscitative Measures vs Operative Delivery",
    "provisionalDifficulty": 4,
    "stem": "A 25-year-old primigravida at 40 weeks gestation is in active labor at 7 cm cervical dilation. She is receiving intravenous oxytocin for labor augmentation. Over the past 30 minutes, continuous electronic fetal heart rate monitoring demonstrates a baseline fetal heart rate of 110/min with completely absent baseline variability. Following each of the last four uterine contractions, there is a gradual, smooth decrease in fetal heart rate beginning after the peak of the contraction and returning to baseline well after the contraction has ended (recurrent late decelerations). Fetal scalp stimulation is performed, but fails to elicit an acceleration in fetal heart rate. Which of the following is the most appropriate immediate sequence of management?",
    "choices": [
      ["Discontinue oxytocin, initiate maternal left lateral repositioning, administer IV fluid bolus, and prepare for immediate operative delivery if the tracing does not improve promptly", "The fetal heart rate tracing is classified as Category III (abnormal), defined by absent baseline fetal heart rate variability accompanied by recurrent late decelerations, recurrent variable decelerations, bradycardia, or a sinusoidal pattern. Category III tracings predict abnormal fetal acid-base status (fetal hypoxia and severe metabolic acidemia). Immediate intrauterine resuscitation must be instituted: (1) Discontinue oxytocin or any uterotonic agents to reduce uterine hyperstimulation and improve placental perfusion; (2) Reposition the mother onto her left lateral side to relieve inferior vena caval and aortic compression (aortocaval decompression); (3) Administer an intravenous fluid bolus of isotonic crystalloid to expand maternal intravascular volume; and (4) Administer supplemental oxygen if indicated. If the Category III tracing does not rapidly improve with intrauterine resuscitation, IMMEDIATE OPERATIVE DELIVERY (cesarean delivery or operative vaginal delivery if fully dilated and engaged) is mandatory to prevent fetal asphyxia, hypoxic-ischemic encephalopathy, or intrauterine demise."],
      ["Increase the oxytocin infusion rate to expedite vaginal delivery before fetal exhaustion occurs", "Increasing oxytocin increases uterine contraction frequency and duration, further compressing intramyometrial spiral arterioles and drastically worsening fetal asphyxia."],
      ["Reassure the team that late decelerations represent physiological fetal head compression", "Early decelerations (which mirror contractions symmetrically) represent benign vagal head compression; late decelerations (which occur after the contraction peak) represent uteroplacental insufficiency and fetal hypoxia."],
      ["Perform emergent amnioinfusion of 1 liter of normal saline into the amniotic cavity", "Amnioinfusion is indicated for recurrent variable decelerations caused by umbilical cord compression in oligohydramnios; it has zero efficacy for late decelerations caused by uteroplacental insufficiency."],
      ["Administer intravenous atropine 1 mg to the mother to cross the placenta and accelerate fetal heart rate", "Atropine accelerates the fetal heart rate artificially by blocking parasympathetic tone, masking severe underlying fetal metabolic acidosis while doing nothing to restore placental oxygen exchange."]
    ],
    "shortestValidSolution": "Absent variability + recurrent late decelerations -> Category III tracing (fetal hypoxia/acidemia) -> stop oxytocin, left lateral repositioning, IV fluids, and emergent operative delivery if unresolved.",
    "necessaryInference": "Classify the fetal tracing as Category III, immediately execute maternal intrauterine resuscitation (discontinue oxytocin, left lateral tilt, IV fluids), and prepare for emergent delivery if uncorrected.",
    "strongestDistractor": "Increase the oxytocin infusion rate to expedite vaginal delivery before fetal exhaustion occurs",
    "distractorExclusion": "Oxytocin causes uterine hyperstimulation, choking off placental blood flow; continuing oxytocin during a Category III tracing precipitates fetal death.",
    "citation": "American College of Obstetricians and Gynecologists. Practice Bulletin No. 106: Intrapartum Fetal Heart Rate Monitoring: Nomenclature, Interpretation, and General Management Principles. Obstet Gynecol. 2009;114(1):192-202. PMID: 19546798."
  },
  {
    "code": "op-c-s2-0349",
    "exam": "Step 2 CK",
    "subject": "Obstetrics & Infectious Disease",
    "system": "Pregnancy",
    "topic": "Syphilis in Pregnancy",
    "subtopic": "Penicillin G Desensitization as Only Acceptable Therapy to Prevent Congenital Syphilis",
    "provisionalDifficulty": 4,
    "stem": "A 23-year-old woman, primigravida, presents for her first prenatal visit at 12 weeks gestation. Routine prenatal screening laboratories reveal: - Rapid Plasma Reagin (RPR): reactive at a titer of 1:32 - Treponema pallidum particle agglutination (TP-PA): reactive - HIV-1/2 antigen/antibody: non-reactive - Hepatitis B surface antigen: negative. She is asymptomatic without chancres, rash, or mucosal lesions. When asked about medication allergies, she reports that 4 years ago she received amoxicillin for bronchitis and developed diffuse hives (urticaria), facial swelling, and wheezing requiring emergency treatment with epinephrine. Which of the following is the most appropriate management to treat this patient and prevent congenital syphilis in the fetus?",
    "choices": [
      ["Admit to an intensive care or monitored setting for oral penicillin desensitization followed by intramuscular penicillin G benzathine", "The patient has early latent syphilis during pregnancy (reactive RPR 1:32 confirmed by TP-PA without clinical symptoms) and a severe, IgE-mediated type I penicillin hypersensitivity (urticaria, angioedema, bronchospasm). PARENTERAL PENICILLIN G IS THE ONLY KNOWN EFFECTIVE ANTIMICROBIAL FOR TREATING SYPHILIS DURING PREGNANCY AND PREVENTING CONGENITAL SYPHILIS. Alternative agents used in non-pregnant adults (such as doxycycline or tetracycline) are contraindicated in pregnancy due to fetal bone growth restriction and tooth discoloration, while others (such as erythromycin, azithromycin, or ceftriaxone) do not reliably cross the placental barrier to cure the infected fetus. Therefore, pregnant women with a documented penicillin allergy MUST UNDERGO PENICILLIN DESENSITIZATION in a monitored setting, followed immediately by standard treatment with intramuscular benzathine penicillin G."],
      ["Administer oral doxycycline 100 mg twice daily for 28 days", "Doxycycline and tetracyclines are strictly contraindicated in pregnancy due to permanent fetal teeth discoloration, enamel hypoplasia, and maternal/fetal hepatotoxicity."],
      ["Administer oral azithromycin 2 g single oral dose with monthly serological monitoring", "Azithromycin does not reliably cross the placenta to treat the fetus, and Treponema pallidum exhibits widespread macrolide resistance due to 23S rRNA mutations, resulting in high rates of treatment failure."],
      ["Administer intramuscular ceftriaxone 1 g daily for 14 days as an outpatient", "Ceftriaxone cross-reacts with penicillin in severe IgE-mediated anaphylaxis and has unproven efficacy in preventing congenital syphilis compared to the gold standard of penicillin."],
      ["Withhold antibiotic therapy until delivery and treat the neonate immediately postpartum", "Untreated maternal syphilis results in up to a 50% rate of adverse pregnancy outcomes, including spontaneous abortion, non-immune hydrops fetalis, stillbirth, and fulminant congenital syphilis."]
    ],
    "shortestValidSolution": "Syphilis in pregnant woman with severe penicillin allergy (anaphylaxis) -> inpatient penicillin desensitization followed by IM benzathine penicillin G.",
    "necessaryInference": "Recognize that penicillin G is the ONLY acceptable treatment for maternal syphilis that treats the fetus; pregnant women with severe penicillin allergy must be desensitized.",
    "strongestDistractor": "Administer oral doxycycline 100 mg twice daily for 28 days",
    "distractorExclusion": "Doxycycline is teratogenic in pregnancy (tooth discoloration and bone growth inhibition) and cannot be prescribed.",
    "citation": "Workowski KA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926."
  },
  {
    "code": "op-c-s2-0350",
    "exam": "Step 2 CK",
    "subject": "Gynecology & Endocrinology",
    "system": "Endocrine",
    "topic": "Primary Amenorrhea Evaluation",
    "subtopic": "Mullerian Agenesis vs Androgen Insensitivity Syndrome vs Turner Syndrome",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old girl is brought to the gynecology clinic by her mother because she has never had a menstrual period. She feels well and denies cyclic pelvic pain, headaches, or vision changes. She is 168 cm (5 ft 6 in) tall and weighs 58 kg (BMI 20.5 kg/m2). Physical examination reveals fully developed breasts (Tanner stage 5) with normal areolar development. Axillary and pubic hair are completely absent (Tanner stage 1). External genitalia appear female, but pelvic examination demonstrates a blind-ending vaginal pouch measuring 2.5 cm in depth. On bimanual examination, no cervix or uterus can be palpated. Transabdominal and pelvic ultrasonography reveals absent uterus, cervix, and fallopian tubes; two normal-appearing, smooth gonads are visualized within the bilateral inguinal canals. Laboratory testing demonstrates a serum testosterone level of 680 ng/dL (normal male range: 300–1,000 ng/dL; normal female range: 15–70 ng/dL). Which of the following is the most likely karyotype in this patient?",
    "choices": [
      ["46,XY", "The patient has complete androgen insensitivity syndrome (CAIS), an X-linked recessive disorder caused by non-functional androgen receptor mutations in a genetically male (46,XY) individual. Key differentiating features include: (1) 46,XY karyotype with intra-abdominal/inguinal functional testes; (2) High testosterone levels (in the normal adult male range); (3) Peripheral aromatization of testosterone to estrogen causes full female breast development (Tanner stage 5); (4) Complete lack of androgen action results in absent axillary and pubic hair (Tanner stage 1); (5) Normal testicular production of Anti-Mullerian Hormone (AMH) causes regression of all Mullerian structures (absent uterus, fallopian tubes, cervix, and upper two-thirds of vagina, leaving a short blind pouch). In contrast, Mullerian agenesis (Mayer-Rokitansky-Kuster-Hauser syndrome) features a 46,XX karyotype, normal female testosterone, and NORMAL pubic/axillary hair."],
      ["46,XX", "A 46,XX karyotype is seen in Mullerian agenesis (MRKH syndrome). While MRKH also features an absent uterus and blind vaginal pouch, patients have normal female testosterone levels and NORMAL (Tanner stage 5) pubic and axillary hair."],
      ["45,XO", "Turner syndrome (45,XO) features primary amenorrhea with streak gonads and elevated FSH, but patients have short stature, webbed neck, shield chest, ABSENT breast development, and an intact uterus."],
      ["47,XXY", "Klinefelter syndrome (47,XXY) produces a phenotypically male individual with small firm testes, tall stature, gynecomastia, and azoospermia, rather than phenotypic female external genitalia with a blind vaginal pouch."],
      ["46,XY with 21-hydroxylase deficiency", "Congenital adrenal hyperplasia due to 21-hydroxylase deficiency causes virilization and ambiguous genitalia in 46,XX females; it does not produce a phenotypic female with absent pubic hair and absent uterus in a 46,XY individual."]
    ],
    "shortestValidSolution": "Primary amenorrhea + breast development + absent uterus + ABSENT pubic/axillary hair + male testosterone levels -> Complete Androgen Insensitivity Syndrome (46,XY).",
    "necessaryInference": "Differentiate complete androgen insensitivity syndrome (46,XY, absent pubic/axillary hair, male testosterone) from Mullerian agenesis (46,XX, normal pubic hair, female testosterone).",
    "strongestDistractor": "46,XX",
    "distractorExclusion": "46,XX describes Mullerian agenesis, in which androgen responsiveness is normal, resulting in normal adult Tanner 5 pubic and axillary hair, whereas this patient has absent hair (Tanner 1).",
    "citation": "Hughes IA, et al. Androgen Insensitivity Syndrome. Lancet. 2012;380(9851):1419-1428. PMID: 22698698."
  }
]

print(f"Loaded {len(items_b14_p2)} items for Step 2 CK Batch 14 part 2.")
