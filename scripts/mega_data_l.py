"""
Mega Data Part L: Domains 70 to 75 (Endocrinology, Infectious Disease, & Women's Health)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_L = [
    # Domain 70: Multiple Endocrine Neoplasia (MEN 1, MEN 2A, MEN 2B)
    {
        "id": "domain_70_men_syndromes",
        "entity": "Multiple Endocrine Neoplasia syndromes and RET proto-oncogene",
        "hallmark": "recurrent peptic ulceration, hypercalcemia from parathyroid hyperplasia, bilateral adrenal medullary masses, or mucosal neuromas with marfanoid habitus",
        "system": "Endocrine",
        "ref_key": "merck_endocrine",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "MEN1 menin tumor suppressor vs RET receptor tyrosine kinase gain-of-function",
                "Germline inactivating mutation in MEN1 (encoding menin on chromosome 11q13) versus gain-of-function RET proto-oncogene point mutation on chromosome 10q11.2.",
                "MEN 1 involves the 3 Ps (pituitary, parathyroid, pancreas) caused by menin loss, whereas MEN 2A/2B result from activating RET receptor tyrosine kinase mutations."
            ),
            "Step 2 CK": (
                "Prophylactic thyroidectomy timing and biochemical screening in RET carriers",
                "Genetic counseling with RET sequencing and early prophylactic total thyroidectomy prior to 1 to 5 years of age depending on codon mutation risk tier.",
                "Medullary thyroid carcinoma develops universally in MEN 2; prophylactic total thyroidectomy with central node evaluation prevents early metastatic spread."
            ),
            "Step 3": (
                "Long-term endocrine surveillance and ambulatory screening protocols",
                "Annual biochemical surveillance with serum calcium, intact PTH, gastrin, prolactin, and fractionated plasma metanephrines in confirmed mutation carriers.",
                "Multidisciplinary lifelong endocrine surveillance allows early detection of functional adenomas and prevents life-threatening pheochromocytoma crises."
            ),
            "PLAB / UKMLA": (
                "Exclusion of pheochromocytoma prior to surgical resection in MEN",
                "Measuring 24-hour urinary or plasma free metanephrines to rule out pheochromocytoma before performing neck exploration or abdominal surgery.",
                "Operating on patients with undiagnosed pheochromocytoma during parathyroidectomy or thyroidectomy precipitates catastrophic intraoperative hypertensive crises."
            ),
            "AMC": (
                "Cascade genetic testing and family screening in Multiple Endocrine Neoplasia",
                "Referral to specialized clinical genetics services for cascade familial mutation testing and dedicated pedigree risk assessment.",
                "First-degree relatives of individuals with confirmed MEN mutations have a 50% autosomal dominant inheritance risk requiring structured genetic counseling."
            ),
            "MCCQE": (
                "Initial medical stabilization with alpha-adrenergic blockade for pheochromocytoma",
                "Initiating oral phenoxybenzamine (alpha-blockade) followed by beta-blockade once adequate alpha-blockade is established.",
                "Alpha-blockade must always precede beta-blockade in pheochromocytoma to avoid unopposed alpha-receptor vasoconstriction and fatal hypertensive storm."
            ),
            "FCPS": (
                "Surgical strategy for subtotal parathyroidectomy and transcervical thymectomy",
                "Subtotal (3.5 gland) parathyroidectomy or total parathyroidectomy with heterotopic forearm autotransplantation and bilateral cervical thymectomy.",
                "Parathyroid disease in MEN 1 involves multiglandular hyperplasia; thymectomy removes supernumerary parathyroid glands and prevents thymic neuroendocrine tumors."
            ),
            "NLE": (
                "Clinical triad recognition of MEN 1 (3 Ps: Parathyroid, Pancreas, Pituitary)",
                "Investigating for parathyroid adenoma/hyperplasia, pancreatic neuroendocrine tumor (gastrinoma/insulinoma), and pituitary prolactinoma.",
                "The classic triad of MEN type 1 comprises primary hyperparathyroidism, pancreatic islet neuroendocrine tumors, and anterior pituitary adenomas."
            ),
            "NEET PG": (
                "Medullary thyroid carcinoma and amyloid stroma on calcitonin staining",
                "Medullary thyroid carcinoma characterized by sheets of polygonal cells in an amyloid-rich stroma staining positive with Congo red and calcitonin.",
                "MTC arises from parafollicular C cells derived from the neural crest; tumor cells secrete calcitonin which deposits as extracellular amyloid fibrils."
            ),
            "MRCP": (
                "Preoperative somatostatin analog therapy and DOTATATE PET staging",
                "Gallium-68 DOTATATE PET-CT imaging to localize somatostatin receptor-expressing neuroendocrine metastases followed by PRRT evaluation.",
                "68Ga-DOTATATE PET provides superior diagnostic sensitivity for identifying occult gastroenteropancreatic neuroendocrine tumors and distant metastases."
            ),
            "MRCEM": (
                "Emergency management of severe hypercalcemic crisis in hyperparathyroidism",
                "Aggressive intravenous 0.9% normal saline rehydration followed by intravenous bisphosphonate (zoledronic acid) therapy.",
                "Hypercalcemic crisis requires vigorous volume expansion with isotonic saline to restore glomerular filtration and enhance calciuresis before antiresorptive therapy."
            ),
            "SMLE": (
                "MEN 2B phenotypic recognition with mucosal neuromas and marfanoid habitus",
                "Recognizing the clinical triad of mucosal neuromas, marfanoid body habitus, and gastrointestinal ganglioneuromatosis indicative of MEN 2B.",
                "MEN 2B features distinct physical signs including tongue and mucosal neuromas, prominent corneal nerves, and intestinal ganglioneuromas, lacking parathyroid disease."
            ),
            "HAAD / DHA": (
                "Screening protocols for Zollinger-Ellison syndrome in recurrent ulceration",
                "Serum gastrin measurement while fasting off PPI therapy, followed by secretin stimulation testing if gastrin levels are non-diagnostic.",
                "Gastrinoma in MEN 1 produces severe refractory peptic ulcer disease; secretin paradoxically stimulates gastrin release from gastrinoma cells."
            ),
            "UHS MBBS": (
                "Autosomal dominant inheritance and common clinical features of MEN 1",
                "Primary hyperparathyroidism presenting with nephrolithiasis and hypercalcemia as the earliest and most frequent manifestation.",
                "Hyperparathyroidism is the initial and most common manifestation in >95% of patients with MEN 1, presenting typically in the third decade of life."
            )
        }
    },

    # Domain 71: Tropical & Vector-Borne Infections (Malaria & Dengue)
    {
        "id": "domain_71_malaria_dengue",
        "entity": "Plasmodium falciparum malaria and severe Dengue virus infection",
        "hallmark": "cyclic high fevers with rigors, severe retro-orbital headache, marked thrombocytopenia, bleeding diathesis, and hemoconcentration with plasma leakage",
        "system": "General Principles",
        "ref_key": "merck_infection",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Microbiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "PfEMP-1 cytoadherence and antibody-dependent enhancement in Flavivirus",
                "PfEMP-1 mediated microvascular sequestration of parasitized RBCs on CD36/ICAM-1, and antibody-dependent enhancement mediated by cross-reactive anti-E antibodies.",
                "P. falciparum erythrocyte membrane protein 1 mediates endothelial cytoadherence avoiding splenic clearance; secondary dengue infection leads to catastrophic plasma leak via ADE."
            ),
            "Step 2 CK": (
                "Parenteral artesunate for severe malaria and judicious fluid resuscitation in dengue",
                "Immediate intravenous artesunate therapy for severe falciparum malaria and precise isotonic fluid titration to manage dengue capillary leakage.",
                "Intravenous artesunate significantly reduces mortality compared to quinine in severe malaria; dengue with warning signs requires careful isotonic crystalloid titration."
            ),
            "Step 3": (
                "Pre-travel chemoprophylaxis counseling and mosquito vector prevention",
                "Prescribing atovaquone-proguanil or doxycycline pre-travel chemoprophylaxis with DEET repellents and permethrin-treated bed nets.",
                "Guideline-directed prophylaxis matched to regional chloroquine resistance patterns prevents severe imported mosquito-borne parasitic and viral infections."
            ),
            "PLAB / UKMLA": (
                "Urgent thick and thin blood films in returned travelers with fever",
                "Requesting emergency thick and thin peripheral blood films and rapid diagnostic malaria antigen tests with immediate infectious diseases notification.",
                "Any febrile traveler returning from an endemic malaria zone within one year must be investigated urgently with blood films to rule out lethal falciparum infection."
            ),
            "AMC": (
                "Severe malaria clinical indicators and critical care management",
                "Identifying features of severe malaria including impaired consciousness, metabolic acidosis, parasitemia > 2%, and initiating ICU admission.",
                "Severe malaria carries high case fatality; prompt critical care admission and intravenous artesunate resuscitation prevent multiorgan failure."
            ),
            "MCCQE": (
                "Dengue warning signs and monitoring hematocrit for hemoconcentration",
                "Monitoring for abdominal pain, persistent vomiting, mucosal bleeding, and rising hematocrit with rapid platelet drop indicating critical plasma leakage.",
                "Dengue enters the critical phase during defervescence (days 3-7); hemoconcentration (hematocrit rise > 20%) reflects severe plasma leakage requiring inpatient fluid support."
            ),
            "FCPS": (
                "Artemisinin-based combination therapies and G6PD screening prior to primaquine",
                "Administering artemether-lumefantrine and screening for glucose-6-phosphate dehydrogenase deficiency before prescribing primaquine for hypnozoite radical cure.",
                "Primaquine clears liver hypnozoites in P. vivax/ovale but causes severe acute intravascular hemolysis in G6PD-deficient individuals."
            ),
            "NLE": (
                "First-line oral antimalarial treatment for uncomplicated falciparum malaria",
                "Oral artemether-lumefantrine (ACT) or dihydroartemisinin-piperaquine as national first-line therapy for chloroquine-resistant falciparum.",
                "Artemisinin-based combination therapy is the worldwide and national standard of care for uncomplicated P. falciparum malaria to ensure high cure rates."
            ),
            "NEET PG": (
                "Morphological ring forms, crescent gametocytes, and NS1 antigen detection",
                "Identifying delicate ring forms with double chromatin dots and banana-shaped gametocytes on peripheral smear, and dengue NS1 viral antigen ELISA.",
                "P. falciparum exhibits applique forms and crescent gametocytes; Dengue NS1 antigen is detectable in serum from day 1 to day 9 of illness before IgM seroconversion."
            ),
            "MRCP": (
                "Differentiating severe dengue shock syndrome from severe bacterial sepsis",
                "Recognizing selective vascular permeability with pleural effusions and ascites without cardiac compromise, treated with careful colloid/crystalloid support.",
                "Dengue shock syndrome results from transient cytokine-mediated endothelial hyperpermeability rather than structural endothelial injury seen in septic shock."
            ),
            "MRCEM": (
                "Rapid fluid bolus in dengue shock syndrome and avoidance of invasive procedures",
                "Administering an emergency 10-20 mL/kg isotonic crystalloid bolus over 30-60 minutes while avoiding intramuscular injections and unguided central access.",
                "In profound dengue shock, prompt volume replacement restores intravascular perfusion; intramuscular injections cause massive hematomas due to profound coagulopathy."
            ),
            "SMLE": (
                "Malaria species differentiation and clinical significance of Duffy antigen",
                "Recognizing resistance of Duffy antigen-negative individuals to Plasmodium vivax erythrocyte invasion.",
                "Plasmodium vivax requires the Duffy blood group surface antigen (chemokine receptor) for erythrocyte invasion; Duffy-negative populations are naturally resistant."
            ),
            "HAAD / DHA": (
                "Mandatory communicable disease notification and vector control reporting",
                "Submitting mandatory statutory communicable disease electronic notification within 24 hours to municipal public health authorities.",
                "Malaria and Dengue are reportable Class A/B communicable diseases requiring swift epidemiological contact tracing and local vector eradication measures."
            ),
            "UHS MBBS": (
                "Pathophysiology of cyclic paroxysms and blackwater fever",
                "Massive synchronous schizont rupture causing cyclic pyrexia, and severe intravascular hemolysis producing hemoglobinuria (blackwater fever).",
                "Malarial paroxysms coincide with rupture of mature erythrocytic schizonts releasing pyrogens; heavy parasitemia and quinine use can trigger massive hemoglobinuria."
            )
        }
    },

    # Domain 72: Enteric Fever (Typhoid) & Intestinal Perforation
    {
        "id": "domain_72_enteric_fever",
        "entity": "Enteric fever (Salmonella enterica serovar Typhi) and terminal ileal perforation",
        "hallmark": "step-ladder remittent pyrexia, relative bradycardia (Faget sign), transient blanching rose spots on the trunk, and sudden acute peritonitis from ileal ulceration",
        "system": "Gastrointestinal",
        "ref_key": "merck_infection",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Salmonella Typhi Vi capsular antigen, macrophage survival, and Peyer patch necrosis",
                "Invasion of specialized microfold (M) cells, macrophage survival via type III secretion systems, and hyperplasia of lymphoid tissue in Peyer patches.",
                "Salmonella Typhi invades intestinal M cells and multiplies within reticuloendothelial macrophages; hypertrophied Peyer patches undergo ischemic necrosis and ulceration."
            ),
            "Step 2 CK": (
                "Blood culture timing, ceftriaxone or azithromycin therapy, and surgical consultation",
                "Obtaining blood cultures during the first week of fever and initiating intravenous ceftriaxone or oral azithromycin with surgical consultation if acute peritonitis develops.",
                "Blood cultures have the highest diagnostic sensitivity (60-80%) in the first week of illness; third-generation cephalosporins overcome fluoroquinolone-resistant strains."
            ),
            "Step 3": (
                "Chronic Salmonella gallbladder carriage eradication and public health surveillance",
                "Extended 4 to 6-week oral ciprofloxacin or cholecystectomy for persistent biliary asymptomatic typhoid carrier status.",
                "Salmonella Typhi persists indefinitely in the gallstones and gallbladder biliary mucosa of 1-4% of patients; chronic carriers pose major community transmission hazards."
            ),
            "PLAB / UKMLA": (
                "Diagnostic workup in returned travelers with fever and abdominal discomfort",
                "Urgent blood and stool cultures, full blood count showing leukopenia, and prompt empirical intravenous third-generation cephalosporin.",
                "Typhoid fever is a life-threatening differential in travelers returning from South Asia; leukopenia or normal WBC despite severe sepsis is a classic diagnostic clue."
            ),
            "AMC": (
                "Vaccination strategies with Ty21a oral and Vi polysaccharide injectable vaccines",
                "Recommending oral live-attenuated Ty21a or intramuscular injectable Vi capsular polysaccharide vaccine prior to high-risk travel.",
                "Typhoid vaccines confer 50-80% protective efficacy; oral Ty21a requires four alternating-day doses, while injectable Vi vaccine requires a single booster every 2-3 years."
            ),
            "MCCQE": (
                "Recognizing Faget sign (temperature-pulse dissociation) and rose spots",
                "Recognizing relative bradycardia despite high pyrexia (sphygmothermic dissociation) and faint salmon-colored macules on the anterior trunk.",
                "Faget sign and evanescent rose spots are key clinical markers that raise high suspicion of Salmonella Typhi infection in endemic or travel settings."
            ),
            "FCPS": (
                "Emergency surgical management of acute typhoid intestinal perforation",
                "Aggressive fluid resuscitation, intravenous antibiotics, and emergency exploratory laparotomy with primary repair or loop ileostomy for ileal perforation.",
                "Typhoid perforation occurs classically in the antimesenteric border of the terminal ileum during the third week of illness; early exteriorization or repair reduces mortality."
            ),
            "NLE": (
                "First-line medical management of extensively drug-resistant (XDR) typhoid",
                "Administering intravenous meropenem combined with oral azithromycin for extensively drug-resistant (XDR) Salmonella Typhi strains.",
                "XDR Salmonella Typhi is resistant to chloramphenicol, ampicillin, co-trimoxazole, fluoroquinolones, and ceftriaxone; carbapenems and azithromycin are life-saving."
            ),
            "NEET PG": (
                "Widal test interpretation and peak sensitivity of bone marrow cultures",
                "Bone marrow culture providing the highest diagnostic yield (>90%) even after prior antibiotic administration, and Widal test showing rising anti-TO/anti-TH titers.",
                "Bone marrow aspirate culture remains positive in >90% of cases even after empirical antibiotic therapy; Widal agglutination requires paired acute-convalescent sera."
            ),
            "MRCP": (
                "Mechanisms of multidrug resistance (MDR) and ceftriaxone-resistant plasmid AmpC",
                "Plasmid-mediated blaCTX-M-15 extended-spectrum beta-lactamase gene acquisition conferring resistance to third-generation cephalosporins.",
                "XDR Salmonella Typhi acquired an IncY plasmid harboring blaCTX-M-15 and qnrS, conferring resistance to cephalosporins and quinolones."
            ),
            "MRCEM": (
                "Early identification of acute pneumoperitoneum on erect chest radiography",
                "Obtaining an immediate upright chest radiograph demonstrating free subdiaphragmatic air indicative of visceral perforation.",
                "Rigid 'board-like' abdomen with absent bowel sounds and subdiaphragmatic crescent gas on erect chest X-ray confirms secondary peritonitis requiring immediate surgery."
            ),
            "SMLE": (
                "Antibiotic therapy selection based on regional antimicrobial sensitivity patterns",
                "Initiating empirical intravenous ceftriaxone or oral azithromycin while awaiting local culture and minimum inhibitory concentration (MIC) reports.",
                "Fluoroquinolone resistance is widespread worldwide; empirical monotherapy with ciprofloxacin is no longer recommended for enteric fever without sensitivity data."
            ),
            "HAAD / DHA": (
                "Food-handler screening and clearance protocols following typhoid infection",
                "Requiring three consecutive negative stool cultures collected at least 48 hours after antibiotic cessation before returning to food-handling employment.",
                "Statutory public health standards prohibit recovering typhoid patients from working in food preparation until documented bacteriological clearance is established."
            ),
            "UHS MBBS": (
                "Pathological staging of typhoid fever across four successive weeks",
                "Week 1 bacteremia and hyperplasia, Week 2 necrosis and ulceration, Week 3 perforation and hemorrhage, Week 4 resolution.",
                "Salmonella Typhi follows a classical 4-week clinical course: bacteremic incubation (wk 1), Peyer patch necrosis (wk 2), ulcer perforation/bleeding (wk 3), and healing (wk 4)."
            )
        }
    },

    # Domain 73: Spirochetal Infections (Syphilis & Lyme Disease)
    {
        "id": "domain_73_spirochetes",
        "entity": "Treponema pallidum (Syphilis) and Borrelia burgdorferi (Lyme disease)",
        "hallmark": "painless indurated genital chancre, diffuse copper-colored palmar/plantar maculopapular rash, expanding erythema migrans, or tabetic neurosyphilis with Argyll Robertson pupils",
        "system": "General Principles",
        "ref_key": "merck_infection",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Microbiology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Darkfield microscopy of spirochetes and endarteritis obliterans pathology",
                "Visualization of corkscrew-motile spirochetes on darkfield microscopy and obliterative endarteritis with prominent perivascular plasma cell infiltrate.",
                "Treponema pallidum cannot be cultured in vitro; histopathology classically shows proliferative endarteritis surrounded by an intense plasma cell collar."
            ),
            "Step 2 CK": (
                "Serological algorithm (nontreponemal RPR/VDRL vs treponemal EIA) and penicillin G",
                "Reverse-sequence or traditional serological testing followed by intramuscular benzathine penicillin G for primary, secondary, or early latent syphilis.",
                "A single dose of 2.4 million units IM benzathine penicillin G cures early syphilis; neurosyphilis mandates continuous IV aqueous crystalline penicillin G."
            ),
            "Step 3": (
                "Monitoring serological response with quantitative nontreponemal titers",
                "Measuring serial quantitative RPR or VDRL titers at 6 and 12 months to confirm a fourfold (two-dilution) decline indicating treatment success.",
                "Treponemal tests usually remain positive for life; nontreponemal quantitative titers (RPR) reflect disease activity and monitor response to penicillin therapy."
            ),
            "PLAB / UKMLA": (
                "Management of pregnant patients with positive syphilis serology",
                "Immediate hospital desensitization and treatment with intramuscular benzathine penicillin G to prevent catastrophic congenital syphilis.",
                "Penicillin is the only proven therapy that crosses the placenta to prevent congenital syphilis; penicillin-allergic pregnant patients must undergo desensitization."
            ),
            "AMC": (
                "Clinical recognition and oral doxycycline therapy for early Lyme erythema migrans",
                "Clinical diagnosis of erythema migrans (bull's-eye lesion) following tick bite and immediate treatment with oral doxycycline for 14 to 21 days.",
                "Early localized Lyme disease with typical erythema migrans does not require serological confirmation; clinical recognition and prompt doxycycline therapy prevent dissemination."
            ),
            "MCCQE": (
                "Jarisch-Herxheimer reaction pathophysiology and patient counseling",
                "Anticipating acute fever, rigors, tachycardia, and transient worsening of rash within 24 hours of initiating penicillin due to spirochetal endotoxin-like release.",
                "Jarisch-Herxheimer reaction is an acute inflammatory response to massive spirochetal lysis; patients must be reassured and managed with supportive antipyretics."
            ),
            "FCPS": (
                "Diagnostic lumbar puncture and cerebrospinal fluid criteria for neurosyphilis",
                "Lumbar puncture demonstrating CSF pleocytosis (>5 WBC/mcL), elevated protein, and positive CSF-VDRL establishing neurosyphilis.",
                "Neurosyphilis can occur at any stage; a reactive CSF-VDRL is highly specific for neurosyphilis and requires 10-14 days of IV aqueous penicillin G."
            ),
            "NLE": (
                "Clinical differentiation between primary syphilitic chancre and chancroid",
                "Differentiating painless, indurated single chancre with non-tender adenopathy (syphilis) from painful, non-indurated ragged ulcers with suppurative buboes (chancroid).",
                "Primary syphilis presents with a solitary painless indurated ulcer (Hunterian chancre); chancroid caused by Haemophilus ducreyi presents with painful necrotic ulcers."
            ),
            "NEET PG": (
                "Argyll Robertson pupils and tabes dorsalis dorsal column degeneration",
                "Bilateral small irregular pupils that accommodate to near vision but do not react to light ('prostitute's pupil'), with sensory ataxia and lancinating pains.",
                "Argyll Robertson pupil results from pretectal midbrain lesions in tertiary neurosyphilis; tabes dorsalis causes progressive demyelination of spinal dorsal columns."
            ),
            "MRCP": (
                "Cardiovascular syphilis: thoracic aortic aneurysm and coronary ostial stenosis",
                "Vasa vasorum endarteritis leading to medial elastic lamina destruction, tree-bark ascending aortic calcification, and aortic valve insufficiency.",
                "Tertiary cardiovascular syphilis causes obliterative endarteritis of aortic vasa vasorum, predisposing to saccular ascending thoracic aortic aneurysms."
            ),
            "MRCEM": (
                "Lyme carditis with fluctuating high-grade AV conduction block",
                "Continuous cardiac telemetry and intravenous ceftriaxone for Lyme carditis presenting with third-degree atrioventricular heart block.",
                "Early disseminated Borrelia burgdorferi infection can invade cardiac conduction tissue causing fluctuating AV block; temporary pacing and IV ceftriaxone are indicated."
            ),
            "SMLE": (
                "Congenital syphilis clinical manifestations and maternal screening",
                "Universal first-trimester maternal screening, identifying snuffles, hepatosplenomegaly, saddle nose, Hutchinson teeth, and sabre shins.",
                "Early congenital syphilis presents with rhinitis (snuffles), bullous rash, and periostitis; late congenital syphilis features Hutchinson triad (notched teeth, interstitial keratitis, nerve deafness)."
            ),
            "HAAD / DHA": (
                "Pre-marital and employment infectious disease screening standards",
                "Mandatory automated treponemal chemiluminescence immunoassay screening with confirmatory RPR testing under national health authority regulations.",
                "Health authority pre-marital and residency visa screening mandates treponemal antibody screening to detect latent syphilis and initiate prompt curative therapy."
            ),
            "UHS MBBS": (
                "Stages of acquired syphilis and characteristic lesions",
                "Primary chancre, secondary generalized rash with condylomata lata, latent asymptomatic phase, and tertiary gummatous and neurovascular lesions.",
                "Acquired syphilis progresses through primary (chancre), secondary (rash, condyloma lata), latent, and tertiary (gumma, aortitis, neurosyphilis) stages."
            )
        }
    },

    # Domain 74: Ectopic Pregnancy & First-Trimester Bleeding
    {
        "id": "domain_74_ectopic_pregnancy",
        "entity": "Tubal ectopic pregnancy and acute first-trimester rupture",
        "hallmark": "amenorrhea, unilateral acute iliac fossa pain, vaginal spotting, cervical motion tenderness, and adnexal mass with fluid in the pouch of Douglas",
        "system": "Pregnancy",
        "ref_key": "rcog_gtg",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Obstetrics",
            "FCPS": "Surgery",
            "UHS MBBS": "Obstetrics",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of the fallopian tube ampulla and peritoneal gutters in hemoperitoneum",
                "Ampulla of the fallopian tube as the most common implantation site (80%), with blood pooling in the rectouterine pouch (pouch of Douglas) and paracolic gutters.",
                "The ampullary portion of the fallopian tube is the most frequent fertilization and ectopic implantation site; ruptured ectopic produces hemoperitoneum irritating the subdiaphragmatic peritoneum."
            ),
            "Step 2 CK": (
                "Beta-hCG discriminatory zone and transvaginal ultrasound correlation",
                "Correlating serum quantitative beta-hCG with transvaginal ultrasonography; an empty uterine cavity with beta-hCG above 1,500-2,000 mIU/mL indicates ectopic pregnancy.",
                "The discriminatory zone is the serum beta-hCG threshold at which an intrauterine gestational sac must be visualized; failure to see an IUP above this level strongly suggests ectopic pregnancy."
            ),
            "Step 3": (
                "Medical methotrexate criteria vs surgical salpingectomy indications",
                "Administering systemic intramuscular methotrexate if hemodynamically stable with unruptured mass < 3.5 cm, beta-hCG < 5,000 mIU/mL, and absent embryonic cardiac activity.",
                "Single-dose intramuscular methotrexate (50 mg/m2) is highly effective for unruptured ectopic pregnancies meeting strict hemodynamic, ultrasonic, and biochemical criteria."
            ),
            "PLAB / UKMLA": (
                "NICE Guideline NG126: Ectopic pregnancy and miscarriage assessment pathway",
                "Arranging urgent same-day referral to an Early Pregnancy Assessment Unit (EPAU) for transvaginal ultrasound and serial serum hCG measurements 48 hours apart.",
                "NICE guidelines mandate structured assessment in an EPAU with transvaginal ultrasound and paired 48-hour hCG to differentiate viable pregnancy, miscarriage, and ectopic."
            ),
            "AMC": (
                "Emergency management of ruptured ectopic pregnancy with hemorrhagic shock",
                "Immediate large-bore venous access, cross-matching packed red cells, uncrossed O-negative transfusion, and emergency operative laparoscopy or laparotomy.",
                "Hypotension, peritonitis, and adnexal tenderness in a woman of reproductive age signify ruptured ectopic pregnancy requiring immediate surgical control of bleeding."
            ),
            "MCCQE": (
                "Anti-D immunoglobulin administration in Rh-negative non-sensitized women",
                "Administering intramuscular Anti-D immune globulin to all Rhesus D-negative non-sensitized women presenting with ectopic pregnancy or first-trimester bleeding.",
                "Fetomaternal hemorrhage during ectopic pregnancy or miscarriage can sensitize Rh-negative mothers; anti-D immunoglobulin administration prevents future hemolytic disease of the newborn."
            ),
            "FCPS": (
                "Laparoscopic salpingectomy vs salpingostomy techniques and follow-up",
                "Performing laparoscopic salpingectomy for ruptured or severely damaged tubes, or linear salpingostomy with serial postoperative hCG monitoring if tube preservation is prioritized.",
                "Salpingostomy preserves the tube but carries an 8% risk of persistent trophoblastic tissue requiring serial hCG monitoring until levels become undetectable."
            ),
            "NLE": (
                "Risk factors for tubal ectopic pregnancy: prior PID and pelvic surgery",
                "Identifying prior pelvic inflammatory disease (PID / Chlamydia trachomatis), prior ectopic pregnancy, tubal surgery, and intrauterine device in situ as primary risk factors.",
                "Prior salpingitis causes chronic tubal endosalpingeal deciliation and adhesions, delaying ovum transport and greatly increasing ectopic implantation risk."
            ),
            "NEET PG": (
                "Arias-Stella reaction and decidual cast without chorionic villi",
                "Arias-Stella reaction showing hypersecretory atypical endometrial glandular cells, and passage of a decidual cast lacking chorionic villi.",
                "Arias-Stella reaction represents progesterone-induced endometrial nuclear enlargement mimicking adenocarcinoma; absence of chorionic villi on curettage excludes intrauterine abortion."
            ),
            "MRCP": (
                "Serial serum beta-hCG trajectory: normal doubling vs ectopic plateau",
                "Recognizing that a suboptimal hCG rise (< 35-53% over 48 hours) or a plateau indicates non-viable or ectopic pregnancy requiring structured clinical follow-up.",
                "In viable early intrauterine pregnancy, serum hCG rises by at least 35-50% every 48 hours; abnormal doubling or plateauing patterns warrant close ectopic surveillance."
            ),
            "MRCEM": (
                "Focused Assessment with Sonography for Trauma (FAST) in ruptured ectopic shock",
                "Performing bedside point-of-care ultrasound (POCUS/FAST) showing free fluid in Morison's pouch and pouch of Douglas, expediting direct transfer to the operating theater.",
                "In an unstable female patient of reproductive age with abdominal pain, free peritoneal fluid on bedside ultrasound confirms hemoperitoneum and mandates immediate surgery without waiting for lab hCG."
            ),
            "SMLE": (
                "Methotrexate protocol: day 4 and day 7 beta-hCG monitoring and success criteria",
                "Measuring serum beta-hCG on days 4 and 7 post-methotrexate, confirming at least a 15% reduction between day 4 and day 7 indicating therapeutic efficacy.",
                "Beta-hCG often rises slightly by day 4 due to trophoblast lysis; a decline of >=15% between day 4 and day 7 confirms successful medical resolution."
            ),
            "HAAD / DHA": (
                "Diagnostic exclusion of heterotopic pregnancy in assisted reproductive technology (ART)",
                "Maintaining high index of suspicion for heterotopic pregnancy (coexistent intrauterine and ectopic gestations) in patients conceiving via in vitro fertilization (IVF).",
                "Heterotopic pregnancy incidence rises from 1 in 30,000 naturally to 1 in 100-500 following IVF; visualizing an intrauterine sac does not rule out concurrent ectopic in ART patients."
            ),
            "UHS MBBS": (
                "Cardinal clinical features of unruptured vs ruptured tubal gestation",
                "Amenorrhea, localized unilateral lower quadrant ache in unruptured ectopic versus sudden agonizing pain, shoulder-tip pain (Kehr sign), and collapse in rupture.",
                "Shoulder-tip pain (Kehr sign) results from phrenic nerve irritation (C3-C5 dermatomes) caused by pooled blood in the subdiaphragmatic peritoneal space."
            )
        }
    },

    # Domain 75: Gynecologic Oncology, Cervical Dysplasia & Screening
    {
        "id": "domain_75_cervical_dysplasia",
        "entity": "Cervical intraepithelial neoplasia (CIN) and high-risk Human Papillomavirus (HPV)",
        "hallmark": "post-coital or intermenstrual vaginal bleeding, persistent high-risk HPV infection (types 16/18), acetowhite epithelial changes, and atypical vascular patterns on colposcopy",
        "system": "Pregnancy",
        "ref_key": "rcog_gtg",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "HPV E6 (p53 degradation) and E7 (Rb inactivation) viral oncoprotein mechanisms",
                "Viral oncoprotein E6 binding and promoting ubiquitin-mediated degradation of p53, while viral oncoprotein E7 binds and inactivates retinoblastoma (Rb) protein releasing E2F.",
                "High-risk HPV types 16 and 18 integrate into host DNA; E6 inactivates p53 preventing apoptosis, while E7 dissociates Rb from E2F driving uncontrolled cell cycle progression into S-phase."
            ),
            "Step 2 CK": (
                "ASCCP guidelines: HPV 16/18 triage, colposcopy indications, and LEEP excision",
                "Immediate colposcopy for HPV-16 or HPV-18 positivity, and performing Loop Electrosurgical Excision Procedure (LEEP) for confirmed high-grade squamous intraepithelial lesions (CIN 2/3).",
                "ASCCP guidelines recommend immediate colposcopy for high-risk HPV 16 or 18 regardless of cytology; histological CIN 2/3 requires excisional therapy to prevent progression to invasive carcinoma."
            ),
            "Step 3": (
                "Post-treatment surveillance and nonavalent HPV vaccination counseling",
                "Annual co-testing (HPV and cytology) for at least 25 years following excisional treatment for CIN 2/3, and recommending nonavalent HPV vaccination up to age 45.",
                "Women treated for high-grade cervical dysplasia remain at increased long-term risk of invasive disease for at least 25 years; catch-up HPV vaccination provides broad cross-protection."
            ),
            "PLAB / UKMLA": (
                "NHS Cervical Screening Programme: primary high-risk HPV testing algorithm",
                "Primary high-risk HPV testing; if HPV negative, return to routine 3 or 5-yearly recall; if HPV positive, perform reflex cytology and refer to colposcopy if cytology is abnormal.",
                "The NHS cervical screening programme uses primary hrHPV screening; cytology is performed only as a reflex test on hrHPV-positive samples to triage immediate colposcopy."
            ),
            "AMC": (
                "National Cervical Screening Program Australia: self-collection and 5-yearly HPV tests",
                "Five-yearly primary HPV testing starting at age 25, offering universal self-collected vaginal swab options for eligible screening participants.",
                "Australia transitioned to 5-yearly HPV testing with universal self-collection access, achieving superior population screening coverage and cancer prevention."
            ),
            "MCCQE": (
                "Canadian Cervical Screening Guidelines: age thresholds and management of ASCUS",
                "Initiating cervical screening at age 25 to 29 and performing reflex HPV testing for atypical squamous cells of undetermined significance (ASCUS).",
                "Screening before age 25 is not recommended due to high prevalence of transient HPV infections and risks of unnecessary excisional procedures causing future cervical insufficiency."
            ),
            "FCPS": (
                "FIGO staging of invasive cervical carcinoma and radical hysterectomy indications",
                "Clinical and radiological FIGO staging, performing radical hysterectomy with bilateral pelvic lymphadenectomy (Wertheim operation) for stage IA2 to IB2 disease.",
                "Early-stage invasive cervical cancer (FIGO IA2-IB2) is treated surgically with radical hysterectomy; locally advanced disease (stage IIB and beyond) is treated with concurrent chemoradiotherapy."
            ),
            "NLE": (
                "Transformation zone anatomy, squamocolumnar junction, and Pap smear technique",
                "Sampling the cervical transformation zone (squamocolumnar junction) using a cervical brush and spatula for liquid-based cytology preparation.",
                "The cervical transformation zone where columnar endocervical epithelium undergoes squamous metaplasia is the primary site of HPV infection and neoplastic dysplasia."
            ),
            "NEET PG": (
                "Koilocytic atypia on Pap smear and microinvasive squamous cell carcinoma depth",
                "Identifying koilocytes with nuclear enlargement, hyperchromasia, and perinuclear cytoplasmic halos, and microinvasion defined as stromal invasion <= 3 mm in depth.",
                "Koilocytosis is pathognomonic of productive HPV infection; microinvasive squamous cell carcinoma is defined by FIGO as invasion measuring <= 3 mm in depth."
            ),
            "MRCP": (
                "Management of locally advanced cervical cancer with concurrent chemoradiotherapy",
                "Definitive external beam radiation therapy with concurrent weekly cisplatin chemotherapy followed by intracavitary brachytherapy for stage IIB to IVA carcinoma.",
                "Concurrent cisplatin-based chemoradiotherapy is the international standard of care for locally advanced cervical cancer, improving overall survival compared to radiation alone."
            ),
            "MRCEM": (
                "Emergency management of torrential vaginal hemorrhage in advanced cervical cancer",
                "Emergency airway, breathing, circulation resuscitation, vaginal packing with tranexamic acid, and urgent interventional radiology uterine artery embolization.",
                "Exophytic fungating cervical tumors can produce exsanguinating hemorrhage; emergency vaginal packing and transcatheter arterial embolization achieve rapid hemostasis."
            ),
            "SMLE": (
                "Nonavalent HPV vaccine schedule and target populations",
                "Administering a 2-dose series (months 0 and 6-12) for adolescents aged 9 to 14, or a 3-dose series (months 0, 1-2, and 6) for individuals aged 15 and older.",
                "The 9-valent HPV vaccine covers types 6, 11 (anogenital warts) and types 16, 18, 31, 33, 45, 52, 58 (preventing >90% of cervical carcinomas)."
            ),
            "HAAD / DHA": (
                "Colposcopic features of high-grade cervical dysplasia and Schiller test",
                "Identifying dense acetowhite epithelium with coarse punctation and atypical mosaic vascular patterns, and iodine-negative lesions on Schiller Lugol test.",
                "Dysplastic high-grade lesions have high nuclear-to-cytoplasmic ratios and depleted glycogen, causing dense acetowhitening after 5% acetic acid and failing to take up brown Lugol iodine."
            ),
            "UHS MBBS": (
                "Histopathological grading of CIN 1, CIN 2, and CIN 3",
                "CIN 1 (dysplasia confined to lower 1/3 of epithelium), CIN 2 (lower 2/3), and CIN 3 / carcinoma in situ (full-thickness dysplastic epithelial involvement).",
                "Cervical intraepithelial neoplasia is graded by the vertical extent of undifferentiated basal-type atypical cells: lower third (CIN 1), two-thirds (CIN 2), or full-thickness (CIN 3)."
            )
        }
    }
]
