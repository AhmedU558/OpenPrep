"""
Mega Data Part Q: Domains 101 to 107 (Gyn-Onc, Obstetrics, Genetics/Metabolism, Neonatology, Vascular & Thoracic)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_Q = [
    # Domain 101: Gynecologic Oncology & Pelvic Masses
    {
        "id": "domain_101_gyn_onc",
        "entity": "Epithelial ovarian carcinoma and postmenopausal endometrial cancer",
        "hallmark": "insidious abdominal distension, early satiety, pelvic pressure, elevated serum CA-125, complex adnexal mass with septations on transvaginal ultrasound, or abnormal postmenopausal uterine bleeding with thickened endometrial stripe",
        "system": "General Principles",
        "ref_key": "gyn_onc",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "BRCA1/2 mutations, p53 alterations, and serous tubal intraepithelial carcinoma",
                "High-grade serous ovarian carcinoma originating in the fimbriated end of the fallopian tube with TP53 mutations and impaired homologous recombination DNA repair.",
                "Epithelial ovarian cancers frequently arise from serous tubal intraepithelial carcinoma (STIC) lesions with TP53 loss; germline BRCA1/2 defects indicate eligibility for PARP inhibitors (olaparib)."
            ),
            "Step 2 CK": (
                "Postmenopausal bleeding evaluation via transvaginal ultrasound and endometrial biopsy",
                "Immediate transvaginal pelvic ultrasound to assess endometrial thickness (threshold > 4 mm) followed by office Pipelle endometrial biopsy to rule out adenocarcinoma.",
                "Any postmenopausal uterine bleeding is considered malignant until proven otherwise; an endometrial stripe > 4 mm mandates prompt histopathological sampling."
            ),
            "Step 3": (
                "Genetic risk assessment and risk-reducing bilateral salpingo-oophorectomy",
                "Recommending prophylactic risk-reducing bilateral salpingo-oophorectomy (RRSO) by age 35 to 40 in BRCA1 carriers who have completed childbearing.",
                "RRSO decreases ovarian and fallopian tube cancer risk by 80-90% and substantially reduces all-cause mortality in confirmed BRCA pathogenic variant carriers."
            ),
            "PLAB / UKMLA": (
                "Urgent two-week wait referral criteria for suspected gynecological cancer",
                "Initiating an urgent two-week wait suspected cancer pathway referral for women >= 55 years presenting with unexplained postmenopausal bleeding.",
                "NICE guidelines mandate urgent two-week cancer pathway referral for women aged 55 and older with postmenopausal bleeding to expedite early-stage curative resection."
            ),
            "AMC": (
                "Risk of Malignancy Index (RMI) calculation in postmenopausal pelvic masses",
                "Calculating the Risk of Malignancy Index (RMI = Ultrasound score x Menopausal score x Serum CA-125) to triage pelvic masses to specialized gynecological oncologists.",
                "RMI combines multilocular ultrasound features, solid areas, ascites, bilateral lesions, and postmenopausal status with CA-125 to determine oncological referral necessity."
            ),
            "MCCQE": (
                "Surgical staging and debulking principles in advanced epithelial ovarian cancer",
                "Total abdominal hysterectomy, bilateral salpingo-oophorectomy, omentectomy, peritoneal washings, and maximal cytoreductive effort to achieve zero gross residual disease.",
                "Optimal cytoreduction (<1 cm residual, ideally microscopic zero) is the single most significant independent prognostic factor influencing survival in advanced ovarian cancer."
            ),
            "FCPS": (
                "Lynch syndrome (HNPCC) screening in young women with endometrial carcinoma",
                "Routine immunohistochemical mismatch repair (MMR) protein staining (MLH1, MSH2, MSH6, PMS2) on all resected endometrial carcinoma specimens.",
                "Lynch syndrome confers a 40-60% lifetime risk of endometrial cancer, frequently preceding colorectal malignancy; universal MMR screening identifies families requiring surveillance."
            ),
            "NLE": (
                "CA-125 limitations in premenopausal women and distinction from endometriosis",
                "Recognizing that serum CA-125 lacks specificity in premenopausal patients due to elevation in endometriosis, adenomyosis, PID, and uterine leiomyomas.",
                "In premenopausal women, CA-125 is frequently elevated by benign peritoneal inflammatory conditions; it is far more reliable for monitoring postmenopausal masses and therapeutic response."
            ),
            "NEET PG": (
                "Psammoma bodies and Call-Exner bodies in ovarian histopathology",
                "Concentric laminated calcifications (psammoma bodies) in serous cystadenocarcinoma versus microfollicular Call-Exner bodies in granulosa cell tumors.",
                "Serous papillary carcinomas feature dystrophic calcifications forming psammoma bodies; granulosa cell tumors show Call-Exner bodies and produce inhibin leading to endometrial hyperplasia."
            ),
            "MRCP": (
                "Malignant ascites management and hypercalcemia of malignancy in ovarian cancer",
                "Therapeutic paracentesis with albumin replacement and evaluation for PTHrP-mediated humoral hypercalcemia of malignancy in clear cell carcinoma.",
                "Clear cell ovarian carcinomas frequently produce parathyroid hormone-related protein (PTHrP), causing severe symptomatic hypercalcemia requiring bisphosphonates or denosumab."
            ),
            "MRCEM": (
                "Emergency presentation of ovarian torsion superimposed on benign cystic teratoma",
                "Immediate transvaginal color Doppler ultrasound demonstrating absent or decreased ovarian stromal vascular flow followed by emergent diagnostic laparoscopy.",
                "Mature cystic teratomas (dermoids) are the most frequent culprit for ovarian torsion; timely laparoscopic detorsion and cystectomy salvage ovarian endocrine and reproductive function."
            ),
            "SMLE": (
                "Granulosa cell tumor surveillance using serum inhibin B and anti-Müllerian hormone",
                "Serial measurement of serum inhibin B and anti-Müllerian hormone (AMH) as highly sensitive tumor markers for recurrence of adult granulosa cell tumors.",
                "Granulosa cell tumors are sex cord-stromal tumors with late indolent recurrences (often > 10 years); inhibin B and AMH rise months before clinical or radiographic relapse."
            ),
            "HAAD / DHA": (
                "Human papillomavirus (HPV) co-testing and colposcopy referral algorithm",
                "Referral for immediate colposcopic-directed cervical biopsy for persistent high-risk HPV genotype 16 or 18 detection regardless of normal cytology.",
                "HPV-16 and HPV-18 drive the majority of cervical squamous and adenocarcinomas; immediate colposcopy is warranted even when liquid-based cytology is negative."
            ),
            "UHS MBBS": (
                "Classification of ovarian tumors and Krukenberg tumor pathology",
                "Bilateral metastatic mucin-secreting signet-ring cell adenocarcinoma to the ovaries, most commonly arising from primary gastric signet-ring cell carcinoma.",
                "Krukenberg tumors represent transcoelomic or lymphatic metastasis from gastrointestinal primaries (notably diffuse gastric cancer); signet ring cells displace the nucleus peripherally."
            )
        }
    },

    # Domain 102: High-Risk Obstetrics & Placental Disorders
    {
        "id": "domain_102_placental_disorders",
        "entity": "Placenta previa, placenta accreta spectrum, and acute placental abruption",
        "hallmark": "painless bright red third-trimester vaginal bleeding in placenta previa versus painful dark vaginal bleeding with hypertonic uterine contractions in placental abruption, or ultrasound loss of the retroplacental clear space with turbulent lacunae",
        "system": "Pregnancy",
        "ref_key": "obgyn",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Obstetrics",
            "FCPS": "Obstetrics",
            "UHS MBBS": "Obstetrics",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "Decidual deficiency, trophoblastic myometrial invasion, and Nitabuch layer absence",
                "Absence of the normal decidua basalis and Nitabuch fibrinoid layer allowing direct anchoring villous attachment into the underlying uterine myometrium.",
                "Placenta accreta spectrum results from defective decidualization following prior uterine surgery (cesarean delivery, curettage); chorionic villi invade into (increta) or through (percreta) the myometrium."
            ),
            "Step 2 CK": (
                "Contraindication to digital pelvic examination in unexplained third-trimester bleeding",
                "Strict avoidance of digital vaginal examination until transvaginal ultrasonography confirms placental location relative to the internal cervical os.",
                "Digital cervical examination in undiagnosed placenta previa can puncture the maternal cotyledons or tear the placenta from the lower uterine segment, causing catastrophic hemorrhage."
            ),
            "Step 3": (
                "Multidisciplinary scheduled delivery planning for placenta accreta spectrum",
                "Scheduled cesarean delivery with planned cesarean hysterectomy at 34 0/7 to 35 6/7 weeks without attempting manual placental removal.",
                "Attempting to separate an abnormally adherent placenta precipitates massive postpartum hemorrhage; leaving the placenta in situ and proceeding directly to hysterectomy minimizes mortality."
            ),
            "PLAB / UKMLA": (
                "Anti-D immunoglobulin administration for fetomaternal hemorrhage in rhesus-negative mothers",
                "Administering anti-D immunoglobulin within 72 hours of any bleeding episode in non-sensitized Rh-negative mothers and performing a Kleihauer-Betke test.",
                "Vaginal bleeding or abruption risks fetomaternal transfusion; the Kleihauer-Betke acid elution assay quantifies fetal red blood cells in maternal circulation to calculate necessary anti-D dose."
            ),
            "AMC": (
                "Emergency resuscitation and category 1 cesarean for severe placental abruption",
                "Immediate crystalloid resuscitation, activation of massive transfusion protocol, and urgent category 1 cesarean section for fetal distress or maternal coagulopathy.",
                "Abruption induces severe concealed retroplacental hematoma, consumptive coagulopathy (DIC via tissue factor release), and rapid fetal hypoxia requiring immediate surgical evacuation."
            ),
            "MCCQE": (
                "Uterine rupture signs in trials of labor after cesarean (TOLAC)",
                "Sudden loss of fetal station, cessation of uterine contractions, acute severe abdominal pain, and prolonged fetal bradycardia.",
                "The most reliable indicator of uterine rupture during trial of labor after cesarean delivery is abnormal fetal heart rate decelerations or prolonged bradycardia, often followed by maternal shock."
            ),
            "FCPS": (
                "Conservative non-extractive management vs balloon occlusion in placenta percreta",
                "Preoperative placement of prophylactic internal iliac artery balloon catheters and intraoperative cell salvage during cesarean delivery for placenta percreta.",
                "Endovascular balloon occlusion of the hypogastric or common iliac arteries substantially diminishes intraoperative blood loss during pelvic dissection of percreta invading the bladder."
            ),
            "NLE": (
                "Bedside distinction between placenta previa and placental abruption",
                "Painless bright red bleeding with soft non-tender uterus in previa versus painful dark clotted bleeding with woody hard hypertonic uterus in abruption.",
                "Uterine tone is a critical bedside differentiator: abruption causes continuous high baseline intrauterine pressure with excruciating tenderness; previa produces a relaxed, nontender abdomen."
            ),
            "NEET PG": (
                "Couvelaire uterus (uteroplacental apoplexy) pathology and myometrial ecchymosis",
                "Extensive myometrial interstitial extravasation of blood dissecting through uterine muscle fibers into the broad ligament and peritoneal cavity.",
                "Couvelaire uterus results from severe retroplacental hemorrhage dissecting through myometrial planes; it causes uterine atony and coagulopathy but does not universally mandate hysterectomy."
            ),
            "MRCP": (
                "Consumptive coagulopathy and Disseminated Intravascular Coagulation in abruption",
                "Severe hypofibrinogenemia (< 150 mg/dL), elevated D-dimer, thrombocytopenia, and prolonged prothrombin time driven by release of placental tissue factor.",
                "Abrupted decidua releases massive amounts of tissue factor into maternal venous circulation, initiating the extrinsic coagulation cascade, fibrin consumption, and life-threatening DIC."
            ),
            "MRCEM": (
                "Massive transfusion protocol activation and tranexamic acid in obstetric hemorrhage",
                "Immediate administration of 1:1:1 packed red blood cells, fresh frozen plasma, and platelets, alongside intravenous tranexamic acid within 3 hours of bleeding onset.",
                "The WOMAN trial demonstrated that tranexamic acid (1 g IV over 10 min) significantly reduces death due to bleeding in obstetric hemorrhage when administered within 3 hours."
            ),
            "SMLE": (
                "Corticosteroid administration for fetal lung maturity before 34 weeks in previa",
                "Intramuscular betamethasone (two doses of 12 mg 24 hours apart) to accelerate fetal surfactant production before planned early preterm delivery.",
                "Antenatal corticosteroids significantly decrease neonatal respiratory distress syndrome, intraventricular hemorrhage, and neonatal mortality in bleeding placenta previa requiring early delivery."
            ),
            "HAAD / DHA": (
                "Ultrasound criteria for low-lying placenta vs marginal and complete placenta previa",
                "Transvaginal measurement of the placental edge: low-lying placenta when distance is 11-20 mm from the internal os; previa when the edge is <= 10 mm or covers the os.",
                "Second-trimester placenta previa frequently resolves as the lower uterine segment elongates (trophotropism); transvaginal ultrasound at 32 weeks determines definitive delivery route."
            ),
            "UHS MBBS": (
                "Vasa previa pathogenesis, velamentous cord insertion, and Apt test",
                "Aberrant fetal vessels coursing through the membranes over the internal cervical os unsupported by Wharton jelly, detectable by Apt alkali denaturation test.",
                "Rupture of membranes in vasa previa tears fetal vessels, causing rapid fetal exsanguination; the Apt test distinguishes alkali-resistant fetal hemoglobin (pink) from maternal adult hemoglobin."
            )
        }
    },

    # Domain 103: Pediatric Inborn Errors of Metabolism
    {
        "id": "domain_103_inborn_metabolism",
        "entity": "Inborn errors of metabolism (PKU, MSUD, MCAD, and Galactosemia)",
        "hallmark": "neonatal feeding intolerance, lethargy, encephalopathy, seizures, developmental regression, metabolic acidosis with elevated anion gap, hyperammonemia, non-ketotic hypoglycemia, or cataracts with hepatomegaly",
        "system": "General Principles",
        "ref_key": "genetics",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Biochemistry",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Biochemistry",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Phenylalanine hydroxylase deficiency, BH4 cofactor defects, and tyrosine essentiality",
                "Deficiency of phenylalanine hydroxylase (PAH) or its cofactor tetrahydrobiopterin (BH4) resulting in phenylalanine accumulation and tyrosine becoming an essential amino acid.",
                "Classical PKU causes severe intellectual disability, musty/mousy odor, and hypopigmentation (decreased melanin from tyrosine deficiency); BH4 deficiency also impairs dopamine and serotonin synthesis."
            ),
            "Step 2 CK": (
                "MCAD deficiency: hypoketotic hypoglycemia during fasting and catabolic illness",
                "Medium-chain acyl-CoA dehydrogenase deficiency causing impaired beta-oxidation, nonketotic hypoglycemia, dicarboxylic aciduria, and hyperammonemia during fasting.",
                "Children with MCAD deficiency cannot metabolize 6-to-12-carbon fatty acids into acetyl-CoA; fasting leads to sudden lethargy, seizures, or sudden infant death without ketones."
            ),
            "Step 3": (
                "Dietary management and newborn screening confirmation in Maple Syrup Urine Disease",
                "Immediate elimination of dietary branched-chain amino acids (leucine, isoleucine, valine) and emergency hemodialysis for acute hyperleucinemic encephalopathy.",
                "MSUD involves deficiency of the branched-chain alpha-ketoacid dehydrogenase complex; elevated leucine is directly neurotoxic, causing cerebral edema and sweet burnt-sugar urine odor."
            ),
            "PLAB / UKMLA": (
                "Classical Galactosemia presentation with E. coli neonatal sepsis and cataracts",
                "Deficiency of galactose-1-phosphate uridylyltransferase (GALT) presenting with jaundice, hepatomegaly, bilateral oil-droplet cataracts, and severe Escherichia coli bacteremia.",
                "Accumulation of galactose-1-phosphate causes hepatic and renal tubular dysfunction, while galactitol accumulates in the lens; impaired bactericidal activity predisposes to fulminant E. coli sepsis."
            ),
            "AMC": (
                "Hyperammonemia without acidosis in Ornithine Transcarbamylase (OTC) deficiency",
                "X-linked urea cycle defect causing severe hyperammonemia, low blood urea nitrogen, elevated urine orotic acid, and absence of metabolic ketoacidosis.",
                "OTC deficiency is the most common urea cycle disorder; excess carbamoyl phosphate shunts into pyrimidine synthesis, resulting in massive urinary orotic acid excretion."
            ),
            "MCCQE": (
                "Emergency stabilization of acute neonatal metabolic decompensation",
                "Stopping all oral protein intake, starting intravenous 10% dextrose with electrolytes to halt catabolism, and administering nitrogen scavengers (sodium benzoate/phenylbutyrate).",
                "Acute metabolic decompensation requires suppression of endogenous protein catabolism via high-caloric dextrose infusion alongside pharmacologic ammonium excretion."
            ),
            "FCPS": (
                "Carnitine cycle defects and primary carnitine uptake deficiency",
                "SLC22A5 transporter mutation preventing cellular carnitine uptake, presenting with progressive dilated cardiomyopathy, hypotonia, and low plasma free carnitine.",
                "Primary carnitine deficiency impairs long-chain fatty acid entry into mitochondrial matrix via carnitine palmitoyltransferase (CPT); high-dose oral L-carnitine reverses cardiomyopathy."
            ),
            "NLE": (
                "Maternal PKU syndrome and congenital fetal malformations",
                "Strict maternal preconceptional dietary phenylalanine restriction to prevent microcephaly, congenital heart disease (cardiac septal defects), and facial dysmorphism.",
                "Elevated maternal phenylalanine crosses the placenta and acts as a potent teratogen; strict dietary adherence before conception is vital to protect the developing fetus."
            ),
            "NEET PG": (
                "Alkaptonuria, homogentisic acid oxidase deficiency, and ochronosis",
                "Deficiency of homogentisic acid dioxygenase leading to homogentisic acid accumulation, urine darkening on oxidation, blue-black connective tissue pigmentation, and arthritis.",
                "Alkaptonuria is an autosomal recessive disorder of tyrosine degradation; oxidized homogentisate polymerizes into dark pigment depositing in large joint cartilages (ochronotic arthropathy)."
            ),
            "MRCP": (
                "Late-onset Glycogen Storage Disease Type II (Pompe disease) and enzyme replacement",
                "Acid alpha-glucosidase (lysosomal maltase) deficiency presenting with slowly progressive limb-girdle myopathy, diaphragmatic weakness, and respiratory failure.",
                "Pompe disease leads to lysosomal glycogen accumulation; late-onset forms present in adulthood with respiratory failure, responsive to recombinant human acid alpha-glucosidase (alglucosidase alfa)."
            ),
            "MRCEM": (
                "Emergency management of acute hyperammonemic encephalopathy in the ED",
                "Immediate administration of intravenous arginine hydrochloride, sodium phenylacetate/benzoate, and emergency continuous renal replacement therapy (CRRT).",
                "Ammonia levels > 200 umol/L cause rapid astrocyte swelling, intracranial hypertension, and brain herniation; hemodialysis/CRRT is the most effective clearance modality."
            ),
            "SMLE": (
                "Dietary counseling and avoidance of artificial sweeteners (aspartame) in PKU",
                "Lifelong avoidance of phenylalanine-containing proteins and aspartame (methyl ester of phenylalanine-aspartic acid dipeptide) with medical amino acid formula supplementation.",
                "Aspartame is hydrolyzed in the gut to release free phenylalanine; patients with PKU must check all processed foods and medications for aspartame warnings."
            ),
            "HAAD / DHA": (
                "Expanded newborn screening protocols using tandem mass spectrometry (MS/MS)",
                "Dried blood spot Guthrie card screening at 24 to 48 hours of life utilizing tandem mass spectrometry to detect amino acidopathies, organic acidemias, and fatty acid oxidation defects.",
                "Tandem mass spectrometry permits simultaneous multiphasic quantification of amino acids and acylcarnitines, enabling presymptomatic detection and dietary rescue."
            ),
            "UHS MBBS": (
                "Urine ferric chloride test and reducing substances in inborn errors",
                "Ferric chloride reagent turning green in phenylketonuria, and non-glucose reducing substances detected by Clinitest (negative dipstick glucose) in galactosemia.",
                "Traditional bedside tests: ferric chloride detects phenylpyruvate (transaminated phenylalanine); urine dipstick (glucose oxidase) is negative while Benedict test is positive in galactosemia."
            )
        }
    },

    # Domain 104: Pediatric Genetic Syndromes & Dysmorphology
    {
        "id": "domain_104_genetic_syndromes",
        "entity": "Common genetic syndromes (Down, Turner, Fragile X, and 22q11.2 deletion)",
        "hallmark": "dysmorphic features including epicanthal folds, single palmar crease, webbed neck, shield chest, long face with large everted ears, cleft palate, conotruncal heart defects, and intellectual disability or sensorineural hearing loss",
        "system": "General Principles",
        "ref_key": "genetics",
        "subjects": {
            "Step 1": "Genetics",
            "NEET PG": "Genetics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Trisomy 21 non-disjunction vs Robertsonian translocation and maternal age risk",
                "Meiotic non-disjunction during maternal meiosis I (95% of cases) versus unbalanced Robertsonian translocation (der(14;21)) independent of maternal age.",
                "Meiotic non-disjunction strongly correlates with advanced maternal age; Robertsonian translocations carrier parents have substantial recurrence risks requiring karyotypic parental testing."
            ),
            "Step 2 CK": (
                "Health supervision and screening guidelines for children with Down syndrome",
                "Screening with echocardiography at birth (AV canal defect), thyroid function tests annually, screening for celiac disease, and monitoring for atlantoaxial instability.",
                "Complete atrioventricular septal defect occurs in 40% of Down syndrome infants; regular screening for hypothyroidism, duodenal atresia, and acute leukemia (ALL/AMKL) is mandatory."
            ),
            "Step 3": (
                "Cardiovascular evaluation and aortic dissection risk in Turner syndrome (45,X)",
                "Serial echocardiography and cardiac MRI to evaluate bicuspid aortic valve, aortic coarctation, and aortic root dilation with aortic size index (ASI) monitoring.",
                "Aortic dissection is the leading cause of premature death in Turner syndrome; risk is magnified by bicuspid aortic valve, coarctation, hypertension, and pregnancy."
            ),
            "PLAB / UKMLA": (
                "First-trimester combined screening protocol for aneuploidy in NHS pregnancy care",
                "Measurement of fetal nuchal translucency (NT) on ultrasound combined with maternal serum pregnancy-associated plasma protein-A (PAPP-A) and free beta-hCG at 11-14 weeks.",
                "In Down syndrome, fetal nuchal translucency is increased, free beta-hCG is elevated, and serum PAPP-A is significantly reduced during the first trimester."
            ),
            "AMC": (
                "Fragile X syndrome CGG trinucleotide expansion and FMR1 gene hypermethylation",
                "CGG repeat expansion (> 200 repeats) in the 5' untranslated region of FMR1 leading to DNA hypermethylation, transcriptional silencing, and FMRP protein loss.",
                "Fragile X is the most common inherited cause of intellectual disability and autism; features include macroorchidism, long narrow face, large ears, and hyperflexible joints."
            ),
            "MCCQE": (
                "22q11.2 deletion syndrome (DiGeorge) features: CATCH-22 and immunodeficiency",
                "Microdeletion on chromosome 22q11.2 resulting in third and fourth pharyngeal pouch maldevelopment, thymic hypoplasia (T-cell deficiency), and severe neonatal hypocalcemia.",
                "Features include Conotruncal cardiac anomalies (Tetralogy of Fallot, truncus arteriosus), Abnormal facies, Thymic aplasia, Cleft palate, and Hypocalcemia from parathyroid hypoplasia."
            ),
            "FCPS": (
                "Klinefelter syndrome (47,XXY) endocrinology and hypergonadotropic hypogonadism",
                "Testicular dysgenesis with Leydig cell atrophy, low serum testosterone, markedly elevated LH and FSH, gynecomastia, and azoospermia.",
                "Klinefelter syndrome presents in adolescence or adulthood with tall eunuchoid proportions, sparse body hair, small firm testes, and increased risk of male breast carcinoma."
            ),
            "NLE": (
                "Prenatal ultrasound soft markers for aneuploidy and genetic counseling",
                "Identifying echogenic intracardiac focus, choroid plexus cysts, thickened nuchal fold, pyelectasis, and hypoplastic nasal bone warranting non-invasive prenatal testing (NIPT).",
                "Ultrasound soft markers indicate heightened aneuploidy risk; cell-free fetal DNA (NIPT) provides > 99% sensitivity and low false-positive rates for trisomy 21."
            ),
            "NEET PG": (
                "Edward syndrome (Trisomy 18) vs Patau syndrome (Trisomy 13) clinical distinction",
                "Rocker-bottom feet, clenched fists with overlapping fingers, and micrognathia in Trisomy 18 versus holoprosencephaly, microphthalmia, and polydactyly in Trisomy 13.",
                "Edward syndrome displays prominent occiput, low-set ears, and severe cardiac defects; Patau syndrome features midline fusion defects (cleft lip/palate, proboscis) with very poor survival."
            ),
            "MRCP": (
                "Prader-Willi vs Angelman syndrome: genomic imprinting on chromosome 15q11-q13",
                "Maternal imprinting with paternal deletion causing Prader-Willi (hyperphagia, obesity) versus paternal imprinting with maternal deletion causing Angelman (happy puppet, ataxia).",
                "Genomic imprinting involves epigenetic gene silencing; absence of active paternal 15q11-q13 genes results in Prader-Willi, whereas absence of maternal UBE3A causes Angelman syndrome."
            ),
            "MRCEM": (
                "Neonatal seizure presentation secondary to hypocalcemic tetany in DiGeorge syndrome",
                "Urgent intravenous calcium gluconate under continuous cardiac monitoring for hypocalcemic seizures caused by parathyroid gland aplasia.",
                "Neonates with DiGeorge syndrome frequently present within the first week of life with intractable seizures and tetany due to profound hypocalcemia from absent parathyroid tissue."
            ),
            "SMLE": (
                "Premature ovarian failure and hormone replacement therapy in Turner syndrome",
                "Accelerated oocyte atresia leading to streak gonads, absent secondary sexual characteristics, elevated FSH, and requirement for pubertal induction with estrogen.",
                "Turner syndrome requires gradual estrogen titration beginning at age 11-12 to induce breast development and uterine growth, followed by cyclic progesterone to maintain bone mineral density."
            ),
            "HAAD / DHA": (
                "Pre-implantation genetic testing (PGT-M) in couples with known single-gene defects",
                "In vitro fertilization with embryo biopsy at the blastocyst stage (trophectoderm) to identify embryos free of monogenic mutations prior to uterine transfer.",
                "PGT-M prevents transmission of autosomal dominant, recessive, or X-linked disorders (e.g., cystic fibrosis, Huntington, beta-thalassemia) without elective termination."
            ),
            "UHS MBBS": (
                "Karyotyping technique and G-banding in the diagnosis of chromosomal abnormalities",
                "Peripheral blood lymphocyte culture arrested in metaphase with colchicine, treated with hypotonic saline, and stained with Giemsa (G-banding) to evaluate band resolution.",
                "Standard metaphase cytogenetics detects numerical aneuploidies and structural translocations >= 5 megabases; fluorescence in situ hybridization (FISH) is required for microdeletions."
            )
        }
    },

    # Domain 105: Neonatal Respiratory Emergencies
    {
        "id": "domain_105_neonatal_respiratory",
        "entity": "Neonatal respiratory distress syndrome (NRDS), TTN, and Meconium aspiration syndrome",
        "hallmark": "tachypnea, grunting, nasal flaring, subcostal retractions, cyanosis, ground-glass reticulogranular infiltrates with air bronchograms on chest radiograph, or coarse patchy infiltrates with hyperinflation",
        "system": "Respiratory",
        "ref_key": "neonatology",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Dipalmitoylphosphatidylcholine deficiency, alveolar surface tension, and atelectasis",
                "Deficiency of pulmonary surfactant (dipalmitoylphosphatidylcholine produced by type II pneumocytes) leading to increased surface tension, diffuse microatelectasis, and low compliance.",
                "According to the law of Laplace (P = 2T/r), surfactant lowers surface tension proportionately as alveolar radius decreases, preventing end-expiratory collapse and maintaining FRC."
            ),
            "Step 2 CK": (
                "Exogenous surfactant administration and nasal CPAP in premature neonates",
                "Early application of continuous positive airway pressure (CPAP) and endotracheal administration of bovine or porcine surfactant for persistent oxygen requirement.",
                "Surfactant replacement therapy rapidly restores alveolar stability, improves functional residual capacity, decreases ventilation-perfusion mismatch, and lowers mortality."
            ),
            "Step 3": (
                "Prevention and screening for Bronchopulmonary Dysplasia (BPD) and Retinopathy of Prematurity",
                "Targeting conservative oxygen saturation limits (91-95%), gentle lung-protective ventilation, and systematic dilated retinal ophthalmological examinations.",
                "Prolonged hyperoxia and barotrauma/volutrauma in very preterm neonates arrest alveolar and pulmonary vascular development, causing BPD and abnormal retinal vessel proliferation."
            ),
            "PLAB / UKMLA": (
                "Transient Tachypnea of the Newborn (TTN) etiology and self-limiting clinical course",
                "Delayed resorption of fetal alveolar lung fluid following cesarean section without labor, resolving spontaneously within 24 to 72 hours with supportive oxygen.",
                "Epithelial sodium channels (ENaC) normally clear lung fluid during vaginal labor stimulated by maternal catecholamines; absence of labor leads to fluid retention in interlobar fissures."
            ),
            "AMC": (
                "Meconium Aspiration Syndrome (MAS) pathophysiology, chemical pneumonitis, and PPHN",
                "Intrauterine fetal distress triggering meconium passage, acute mechanical airway obstruction, chemical pneumonitis, surfactant inactivation, and persistent pulmonary hypertension.",
                "Meconium causes ball-valve small airway obstruction, alveolar hyperinflation, and severe chemical inflammation, predisposing to pulmonary air leaks (pneumothorax) and severe hypoxemia."
            ),
            "MCCQE": (
                "Persistent Pulmonary Hypertension of the Newborn (PPHN) and inhaled nitric oxide",
                "Failure of normal postnatal pulmonary vascular resistance drop leading to right-to-left shunting across the ductus arteriosus and foramen ovale, treated with inhaled nitric oxide.",
                "PPHN causes severe labile hypoxemia with pre- and post-ductal oxygen saturation gradients (> 10%); inhaled nitric oxide selectively dilates pulmonary vasculature without systemic hypotension."
            ),
            "FCPS": (
                "Congenital Diaphragmatic Hernia (CDH) resuscitation: avoiding bag-mask ventilation",
                "Immediate endotracheal intubation in the delivery room, placement of a continuous-suction nasogastric tube, and strict avoidance of face mask bag ventilation.",
                "Bag-mask ventilation pushes air into the herniated stomach and intestines within the hemithorax, acutely compressing the hypoplastic lungs and worsening mediastinal shift."
            ),
            "NLE": (
                "Chest radiographic patterns distinguishing NRDS, TTN, and Meconium Aspiration",
                "Diffuse reticulogranular ground-glass pattern with air bronchograms in NRDS, fluid in interlobar fissures in TTN, and patchy fluffy infiltrates with hyperinflation in MAS.",
                "Radiographic differentiation is definitive: NRDS shows diffuse bell-shaped hypoaerated thorax with air bronchograms; TTN shows perihilar streaking and hyperinflation; MAS shows coarse consolidation."
            ),
            "NEET PG": (
                "Lecithin-to-Sphingomyelin (L/S) ratio and phosphatidylglycerol in amniotic fluid",
                "Amniotic fluid lecithin/sphingomyelin ratio >= 2.0 and the presence of phosphatidylglycerol indicating mature fetal surfactant production and low NRDS risk.",
                "Lecithin (phosphatidylcholine) synthesis increases dramatically after 34 weeks gestation while sphingomyelin remains constant; an L/S ratio < 1.5 indicates high risk of neonatal respiratory failure."
            ),
            "MRCP": (
                "Necrotizing Enterocolitis (NEC) in premature infants: pneumatosis intestinalis",
                "Ischemic bowel necrosis, abdominal distension, bloody stools, and pathognomonic gas within the bowel wall (pneumatosis intestinalis) on abdominal cross-table radiograph.",
                "NEC stems from prematurity, enteral formula feeding, and bacterial colonization; gas-forming bacteria invade the ischemic mucosa, creating subserosal intramural bubbles."
            ),
            "MRCEM": (
                "Neonatal resuscitation algorithm: dry, warm, stimulate, and positive pressure ventilation",
                "Immediate drying and warming, clearing secretions if obstructed, and initiating positive pressure ventilation (PPV) with room air (21% O2) if heart rate is < 100/min.",
                "In term and late preterm neonates, resuscitation begins with 21% oxygen; effective positive pressure ventilation is the single most critical step in establishing spontaneous respiration."
            ),
            "SMLE": (
                "Antenatal magnesium sulfate for fetal neuroprotection before 32 weeks gestation",
                "Administering intravenous magnesium sulfate infusion to mothers in imminent preterm delivery (< 32 weeks) to decrease the risk of cerebral palsy.",
                "Magnesium sulfate stabilizes neuronal membranes, improves cerebral perfusion, and reduces excitotoxic NMDA receptor activation, significantly lowering the incidence of disabling cerebral palsy."
            ),
            "HAAD / DHA": (
                "Targeted pulse oximetry screening for Critical Congenital Heart Disease (CCHD)",
                "Postnatal pulse oximetry screening on the right hand and either foot at 24 hours of life; failing if SpO2 < 90% or > 3% difference between pre- and post-ductal measurements.",
                "CCHD screening identifies ductal-dependent lesions (hypoplastic left heart, transposition of great arteries, coarctation) before ductus arteriosus closure causes cardiogenic collapse."
            ),
            "UHS MBBS": (
                "Structure and function of fetal circulation: ductus venosus, foramen ovale, and ductus arteriosus",
                "Oxygenated umbilical venous blood shunting through the ductus venosus to bypass the liver, crossing the foramen ovale to the left atrium, and ductus arteriosus bypassing the lungs.",
                "At birth, clamping of the umbilical cord increases systemic vascular resistance while lung expansion drops pulmonary vascular resistance, closing the foramen ovale and reversing ductal flow."
            )
        }
    },

    # Domain 106: Vascular Surgery & Peripheral Arterial Disease
    {
        "id": "domain_106_vascular_surgery",
        "entity": "Peripheral arterial disease, acute limb ischemia, and carotid artery stenosis",
        "hallmark": "intermittent claudication, rest pain relieved by dependency, non-healing ischemic ulcers, the 6 P's of acute ischemia (pain, pallor, pulselessness, paresthesias, poikilothermia, paralysis), or transient ischemic attack with carotid bruit",
        "system": "Cardiovascular",
        "ref_key": "vascular",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Ankle-Brachial Index (ABI) pathophysiology and medial arterial calcification",
                "Ratio of highest ankle systolic pressure to highest brachial systolic pressure; ABI <= 0.90 confirms arterial stenosis, while ABI > 1.40 indicates non-compressible calcified vessels.",
                "Mönckeberg medial calcific sclerosis in diabetics and chronic kidney disease makes peripheral arteries rigid and incompressible, falsely elevating Doppler systolic pressures."
            ),
            "Step 2 CK": (
                "Acute limb ischemia emergency management: systemic heparin and surgical revascularization",
                "Immediate intravenous unfractionated heparin bolus followed by urgent surgical thromboembolectomy (Fogarty catheter) or catheter-directed thrombolysis.",
                "Acute embolic occlusion (commonly cardiac in origin from atrial fibrillation) requires immediate anticoagulation to prevent clot propagation, followed by prompt revascularization within 6 hours."
            ),
            "Step 3": (
                "Supervised exercise therapy and pharmacotherapy (cilostazol) in stable claudication",
                "Prescribing a formal 12-week supervised exercise therapy program, high-intensity statin, antiplatelet therapy, and a trial of cilostazol for symptom improvement.",
                "Supervised walking exercise promotes collateral vessel recruitment and enhances muscle mitochondrial oxidative capacity; cilostazol (PDE-3 inhibitor) improves pain-free walking distance."
            ),
            "PLAB / UKMLA": (
                "Urgent referral criteria for Critical Limb-Threatening Ischemia (CLTI)",
                "Arranging same-day or within 24-hour vascular surgery assessment for rest pain lasting > 2 weeks or gangrenous/ulcerated ischemic tissue loss.",
                "Critical limb-threatening ischemia represents end-stage peripheral artery disease with impending tissue necrosis; urgent arterial revascularization is mandatory to avert major limb amputation."
            ),
            "AMC": (
                "Carotid endarterectomy (CEA) indications in symptomatic vs asymptomatic stenosis",
                "Recommending carotid endarterectomy for symptomatic patients with 70% to 99% internal carotid artery stenosis within 14 days of transient ischemic attack or non-disabling stroke.",
                "Randomized trials (NASCET/ECST) demonstrated significant absolute risk reduction of recurrent stroke with early CEA in symptomatic high-grade stenosis performed by experienced surgeons."
            ),
            "MCCQE": (
                "Diagnostic differentiation between neurogenic and vascular claudication",
                "Vascular claudication triggered predictably by walking and rapidly relieved by standing still, versus neurogenic claudication relieved by lumbar spine flexion (sitting or leaning on cart).",
                "Neurogenic claudication stems from spinal canal stenosis; spinal flexion widens the anteroposterior diameter of the canal and neural foramina, relieving radicular ischemic nerve root compression."
            ),
            "FCPS": (
                "Abdominal Aortic Aneurysm (AAA) screening, surveillance, and repair thresholds",
                "Elective repair indicated when maximum infrarenal aortic diameter reaches >= 5.5 cm in men, >= 5.0 cm in women, or exhibits rapid expansion (> 1.0 cm per year).",
                "Annual ultrasound surveillance is recommended for aneurysms 4.0 to 4.9 cm and semi-annual for 5.0 to 5.4 cm; endovascular aneurysm repair (EVAR) or open graft repair prevents rupture."
            ),
            "NLE": (
                "Clinical distinction between arterial, venous, and neuropathic lower extremity ulcers",
                "Arterial ulcers on distal toes/malleoli with punched-out borders and pale bases versus venous ulcers over the medial malleolus with irregular margins and hemosiderin staining.",
                "Arterial ulcers are painful, dry, and accompanied by absent pulses and dependent rubor; venous ulcers are exudative, shallow, and improve with leg elevation and compression therapy."
            ),
            "NEET PG": (
                "Thromboangiitis obliterans (Buerger disease) pathology and tobacco cessation",
                "Segmental, non-atherosclerotic, highly inflammatory transmural vasculitis of small- and medium-sized arteries with neutrophil microabscesses in young male smokers.",
                "Buerger disease affects distal neurovascular bundles in cigarette smokers; complete, permanent cessation of all tobacco and nicotine products is the only intervention that arrests amputation."
            ),
            "MRCP": (
                "Subclavian steal syndrome pathophysiology and retrograde vertebral artery flow",
                "Severe proximal subclavian artery stenosis resulting in retrograde blood flow down the ipsilateral vertebral artery to supply the arm during exercise, causing vertebrobasilar ischemia.",
                "Upper extremity exertion draws cerebral perfusion retrograde into the arm via the circle of Willis and vertebral artery, triggering transient dizziness, ataxia, syncope, and asymmetric arm pulses."
            ),
            "MRCEM": (
                "Compartment syndrome following lower extremity revascularization: emergent fasciotomy",
                "Immediate four-compartment lower leg surgical fasciotomy (anterolateral and posteromedial incisions) when post-ischemic reperfusion tissue pressure rises within 30 mm Hg of diastolic BP.",
                "Reperfusion of prolonged ischemic skeletal muscle triggers massive capillary endothelial leakage, tissue edema, and compartment tamponade; delay in decompression causes muscle necrosis."
            ),
            "SMLE": (
                "Dual antiplatelet therapy vs rivaroxaban vascular dose in peripheral artery disease",
                "Combining low-dose rivaroxaban (2.5 mg twice daily) with low-dose aspirin (100 mg daily) based on the COMPASS trial to reduce major adverse cardiovascular and limb events.",
                "The COMPASS and VOYAGER PAD trials proved that dual pathway inhibition (aspirin plus low-dose factor Xa inhibitor) significantly reduces ischemic amputations and cardiovascular death."
            ),
            "HAAD / DHA": (
                "Endovascular aneurysm repair (EVAR) surveillance and Endoleak classification",
                "Lifelong contrast CT or duplex ultrasound surveillance to detect Type I (attachment cuff leak) and Type II (retrograde flow from lumbar/inferior mesenteric branches) endoleaks.",
                "Type I and Type III endoleaks represent direct systemic pressurization of the aneurysm sac and require immediate secondary intervention, whereas small Type II leaks are observed."
            ),
            "UHS MBBS": (
                "Anatomy of the femoral triangle and Fogarty embolectomy catheter technique",
                "Femoral artery exposure at the groin, transverse arteriotomy, and advancement of a balloon-tipped Fogarty catheter past the embolus with balloon inflation and gentle withdrawal.",
                "The femoral artery lies within the femoral sheath lateral to the femoral vein and medial to the femoral nerve; Fogarty balloon embolectomy under local anesthesia rapidly clears occluding thrombus."
            )
        }
    },

    # Domain 107: Thoracic Surgery, Mediastinal Masses & Pleural Disorders
    {
        "id": "domain_107_thoracic_surgery",
        "entity": "Mediastinal masses, spontaneous pneumothorax, and complex pleural empyema",
        "hallmark": "chest fullness, persistent cough, dyspnea, sudden unilateral pleuritic chest pain with hyperresonance and absent breath sounds, or loculated parapneumonic effusion with pleural fluid pH < 7.20 and low glucose",
        "system": "Respiratory",
        "ref_key": "thoracic",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomical compartmentalization of mediastinal masses: 4 T's of the anterior mediastinum",
                "Anterior mediastinal localization characteristic of Thymoma, Teratoma (germ cell tumor), Thyroid (retrosternal goiter), and 'Terrible' Lymphoma.",
                "Middle mediastinum houses lymphadenopathy, pericardial cysts, and bronchogenic cysts; posterior mediastinum contains neurogenic tumors (schwannoma, neurofibroma) along the sympathetic chain."
            ),
            "Step 2 CK": (
                "Management of secondary vs primary spontaneous pneumothorax and chest tube criteria",
                "Immediate tube thoracostomy (chest drain) for large (> 2 cm) or clinically unstable pneumothoraces, followed by surgical pleurodesis for persistent air leak or recurrence.",
                "Primary spontaneous pneumothorax (apical subpleural bleb rupture in tall young males) can be managed with aspiration if small; secondary pneumothorax (COPD) mandates formal intercostal drainage."
            ),
            "Step 3": (
                "Thoracoscopic (VATS) wedge resection and mechanical pleurodesis for recurrent pneumothorax",
                "Video-assisted thoracoscopic surgery (VATS) apical wedge resection of subpleural blebs combined with parietal pleural abrasion or talc poudrage.",
                "Surgical intervention significantly reduces the 50% lifetime recurrence risk of spontaneous pneumothorax to < 5% by obliterating the pleural potential space."
            ),
            "PLAB / UKMLA": (
                "Parapneumonic effusion staging and indications for intercostal drainage according to BTS",
                "Pleural fluid pH < 7.20, glucose < 3.4 mmol/L, elevated LDH (> 1000 IU/L), or positive microbiological culture defining empyema requiring prompt chest tube drainage.",
                "British Thoracic Society (BTS) guidelines mandate immediate tube drainage for complicated parapneumonic effusions and empyema; antibiotics alone fail due to pleural loculation."
            ),
            "AMC": (
                "Tension pneumothorax emergency identification and needle thoracostomy site",
                "Clinical diagnosis based on tracheal deviation, absent unilateral breath sounds, and hypotension, managed by immediate needle thoracostomy in the 2nd intercostal space midclavicular line or 4th/5th space anterior axillary line.",
                "Tension pneumothorax is a clinical emergency: positive intrapleural pressure compresses the vena cava, reducing venous return and causing immediate obstructive shock; never await chest radiography."
            ),
            "MCCQE": (
                "Light's criteria for differentiating pleural exudates from transudates",
                "Exudate confirmed if pleural/serum protein ratio > 0.5, pleural/serum LDH ratio > 0.6, or pleural LDH > two-thirds upper limit of normal serum LDH.",
                "Transudates arise from imbalanced hydrostatic or oncotic pressure (heart failure, cirrhosis, nephrotic syndrome); exudates result from increased capillary permeability (infection, malignancy, pulmonary embolism)."
            ),
            "FCPS": (
                "Intrapleural fibrinolytic therapy (tPA plus DNase) in organized loculated empyema",
                "Twice-daily intrapleural instillation of tissue plasminogen activator (alteplase 10 mg) and recombinant human deoxyribonuclease (dornase alfa 5 mg) for 3 days.",
                "The MIST-2 trial proved that combined tPA and DNase cleaves fibrin bands and reduces fluid viscosity, dramatically improving radiographic clearance and avoiding open thoracotomy."
            ),
            "NLE": (
                "Thymoma association with Myasthenia Gravis and pure red cell aplasia",
                "Evaluation for autoimmune acetylcholine receptor antibodies in all patients with anterior mediastinal masses and consideration of complete thymectomy.",
                "Approximately 15% of myasthenia gravis patients have a thymoma, while 30-50% of thymoma patients have myasthenia; thymectomy improves myasthenic symptoms and eliminates malignant potential."
            ),
            "NEET PG": (
                "Superior Vena Cava (SVC) syndrome clinical manifestations and emergency management",
                "Facial plethora, periorbital edema, distended neck and thoracic superficial veins (Pemberton sign), managed with head elevation, dexamethasone, and urgent endovascular stenting.",
                "Malignancy (small cell lung cancer, non-Hodgkin lymphoma) causes extrinsic SVC compression; endovascular stenting provides immediate, durable relief of life-threatening cerebral and laryngeal edema."
            ),
            "MRCP": (
                "Malignant pleural mesothelioma: asbestos exposure latency and histological subtypes",
                "Pleural thickening with calcified plaques and nodular encased lung following a 30 to 50-year latency period after occupational amphibole asbestos exposure.",
                "Mesothelioma stains positively for calretinin, WT-1, and cytokeratin 5/6; epithelioid histology confers superior survival compared to sarcomatoid and biphasic variants."
            ),
            "MRCEM": (
                "Safe triangle boundaries for intercostal chest drain insertion",
                "Insertion in the 4th or 5th intercostal space within the safe triangle bounded by the anterior border of latissimus dorsi, lateral border of pectoralis major, and apex below the axilla.",
                "The safe triangle minimizes damage to major neurovascular structures, the long thoracic nerve, internal mammary artery, and intra-abdominal viscera (liver, spleen) below the diaphragm."
            ),
            "SMLE": (
                "Diagnostic approach to solitary pulmonary nodule (Fleischner Society guidelines)",
                "Stratification based on nodule size, solid vs subsolid attenuation, and patient risk factors (smoking history) to determine repeat low-dose CT interval vs PET-CT or biopsy.",
                "Fleischner guidelines guide surveillance: solid nodules < 6 mm in high-risk patients require optional 12-month CT, while nodules > 8 mm warrant contrast CT, PET scan, or tissue resection."
            ),
            "HAAD / DHA": (
                "Thoracoscopic decortication timing in chronic organizing fibropurulent empyema",
                "Surgical decortication via VATS or open thoracotomy to peel off the thick restrictive visceral pleural peel and re-expand the trapped lung when chest tube drainage fails.",
                "In stage III chronic empyema, fibroblasts deposit dense collagen over the visceral pleura, entrapping the lung; timely decortication restores pulmonary mechanics and eradicates chronic sepsis."
            ),
            "UHS MBBS": (
                "Intercostal neurovascular bundle anatomy and thoracentesis needle positioning",
                "Passing the thoracentesis needle immediately superior to the lower rib margin to avoid lacerating the vein, artery, and nerve traveling along the subcostal groove.",
                "From superior to inferior, the neurovascular bundle is arranged as VAN (Vein, Artery, Nerve) tucked beneath the costal groove of the upper rib; inserting above the lower rib prevents hemothorax."
            )
        }
    }
]
