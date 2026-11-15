"""
Mega Data Part AA: Domains 164 to 169 (Inborn Errors of Metabolism, Clinical Genetics, Vascular Emergencies, Interventional Cardiology, Urologic Oncology, Gynecologic Oncology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_AA = [
    # Domain 164: Inborn Errors of Metabolism
    {
        "id": "domain_164_inborn_errors_metabolism",
        "entity": "Inborn errors of metabolism: Urea cycle disorders, Galactosemia, Glycogen storage diseases, and Maple syrup urine disease",
        "hallmark": "hyperammonemic encephalopathy with respiratory alkalosis in a neonate (OTC deficiency), cataracts and E. coli sepsis on lactose feeds (galactosemia), severe fasting hypoglycemia with massive hepatomegaly (von Gierke), or sweet maple syrup odor of urine with ketoacidosis (MSUD)",
        "system": "General Principles",
        "ref_key": "metab_genetics",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Biochemistry",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Biochemistry",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Ornithine transcarbamylase (OTC) deficiency molecular genetics and biochemical differentiation",
                "X-linked recessive defect in mitochondrial ornithine transcarbamylase accumulating carbamoyl phosphate shunted into pyrimidine synthesis, producing marked orotic aciduria and hyperammonemia.",
                "Differentiated from autosomal recessive carbamoyl phosphate synthetase I (CPS I) deficiency by elevated urine orotic acid; hyperammonemia stimulates the medullary respiratory center, causing respiratory alkalosis."
            ),
            "Step 2 CK": (
                "Classic galactosemia clinical presentation, Escherichia coli sepsis, and dietary management",
                "Galactose-1-phosphate uridyltransferase (GALT) deficiency presenting with jaundice, hepatomegaly, bilateral oil-droplet cataracts, and E. coli neonatal sepsis upon milk ingestion, treated by soy-based lactose-free formula.",
                "Accumulation of galactose-1-phosphate causes hepatic and renal tubular dysfunction; reduction of galactose by aldose reductase to galactitol inside the lens capsule causes osmotic swelling and nuclear cataracts."
            ),
            "Step 3": (
                "Von Gierke disease (Glycogen Storage Disease Type I) metabolic therapy with uncooked cornstarch",
                "Glucose-6-phosphatase deficiency causing severe fasting hypoglycemia, lactic acidosis, hyperuricemia, and hyperlipidemia, managed with continuous nighttime feeds and daytime uncooked cornstarch.",
                "Uncooked cornstarch is a complex slowly digested carbohydrate that provides steady enteric glucose release over 4-6 hours, preventing nocturnal hypoglycemia and blunting lactic acid surges."
            ),
            "PLAB / UKMLA": (
                "Maple Syrup Urine Disease (MSUD): Branched-chain alpha-ketoacid dehydrogenase complex defect",
                "Deficiency of branched-chain alpha-ketoacid dehydrogenase (BCKDH) causing accumulation of leucine, isoleucine, and valine, producing sweet maple syrup urine odor, encephalopathy, and ketonuria.",
                "High neurotoxic levels of leucine and its ketoacid derivatives cross the blood-brain barrier, impairing cerebral amino acid transport and neurotransmitter synthesis, causing rapid cerebral edema and seizures."
            ),
            "AMC": (
                "Medium-Chain Acyl-CoA Dehydrogenase (MCAD) deficiency and fasting hypoketotic hypoglycemia",
                "Inability to oxidize 6- to 12-carbon fatty acids during fasting, leading to severe hypoketotic hypoglycemia, dicarboxylic aciduria, lethargy, and seizures, managed with frequent feeds and avoiding fasts.",
                "During prolonged fasting, beta-oxidation is arrested; hepatic gluconeogenesis depletes glucose without generating acetyl-CoA needed for ketone body synthesis, leaving tissues without energy substrates."
            ),
            "MCCQE": (
                "Acute neonatal hyperammonemia emergency medical management and nitrogen scavenger therapy",
                "Immediate cessation of all enteral protein, intravenous 10% dextrose infusion with insulin to promote anabolism, and administration of nitrogen scavengers (intravenous sodium phenylacetate and sodium benzoate).",
                "Sodium benzoate conjugates with glycine to form hippurate; phenylacetate conjugates with glutamine to form phenylacetylglutamine; both bypass the blocked urea cycle to excrete waste nitrogen renally."
            ),
            "FCPS": (
                "Pompe disease (Glycogen Storage Disease Type II): Acid alpha-glucosidase (acid maltase) defect",
                "Lysosomal acid alpha-glucosidase deficiency accumulating glycogen in lysosomes, presenting with profound generalized hypotonia, massive cardiomegaly (HOCM), and heart failure, treated with alglucosidase alfa.",
                "Unlike other glycogen storage diseases, Pompe disease is a lysosomal storage disorder with normal blood glucose and glycogen structure; enzyme replacement therapy halts progressive hypertrophic cardiomyopathy."
            ),
            "NLE": (
                "Phenylketonuria (PKU) biochemical defect, clinical features, and lifelong dietary therapy",
                "Autosomal recessive phenylalanine hydroxylase (PAH) deficiency accumulating neurotoxic phenylalanine, causing intellectual disability, musty/mousy body odor, fair skin, and eczema.",
                "Mandatory newborn screening allows immediate introduction of a phenylalanine-restricted, tyrosine-supplemented diet; phenylalanine is an essential amino acid, but excess levels competitively inhibit myelin synthesis."
            ),
            "NEET PG": (
                "Homocystinuria versus Marfan syndrome clinical, biochemical, and genetic distinction",
                "Homocystinuria features downward and inward (inferonasal) lens subluxation, intellectual disability, and life-threatening thromboembolism due to cystathionine beta-synthase deficiency (responsive to pyridoxine/B6).",
                "Marfan syndrome features upward and outward (superotemporal) lens subluxation, normal intellect, and aortic dissection caused by dominant mutations in the FBN1 fibrillin-1 gene on chromosome 15."
            ),
            "MRCP": (
                "Alkaptonuria: Homogentisic acid oxidase deficiency and ochronotic arthropathy",
                "Defect in homogentisate 1,2-dioxygenase accumulating homogentisic acid that oxidizes to dark pigment, causing urine darkening upon prolonged standing, black-blue connective tissue pigmentation, and arthritis.",
                "Polymerized homogentisic acid pigment deposits irreversibly in articular cartilage of the spine and large weight-bearing joints (ochronosis), producing dense intervertebral disc calcification and severe arthropathy."
            ),
            "MRCEM": (
                "Emergency resuscitation and hemodialysis in neonatal hyperammonemic coma",
                "Serum ammonia levels > 500 mcmol/L (or refractory > 400 mcmol/L) warranting emergency continuous venovenous hemodialysis (CVVHD) to prevent irreversible excitotoxic cerebral damage.",
                "Ammonia freely traverses the blood-brain barrier and is converted by astrocytes into glutamine, producing severe osmotic astrocyte swelling, brain edema, and fatal uncal herniation without rapid dialytic clearance."
            ),
            "SMLE": (
                "Universal expanded newborn screening tandem mass spectrometry for metabolic diseases",
                "Utilizing electrospray ionization tandem mass spectrometry (MS/MS) on dried blood spot cards to profile amino acids and acylcarnitines, detecting > 40 metabolic disorders presymptomatically.",
                "Early newborn detection before clinical decompensation prevents intellectual disability and sudden metabolic crisis in disorders like MCAD deficiency, PKU, and glutaric aciduria type 1."
            ),
            "HAAD / DHA": (
                "Biotinidase deficiency: Clinical manifestations, screening, and lifelong oral biotin therapy",
                "Defective recycling of free biotin cofactor for carboxylases (pyruvate, propionyl-CoA, acetyl-CoA carboxylase), causing seizures, ataxia, alopecia, and periorificial dermatitis, cured by oral biotin.",
                "Biotin is an indispensable prosthetic group for carboxylases involved in gluconeogenesis, fatty acid synthesis, and amino acid catabolism; daily oral biotin therapy completely prevents all clinical manifestations."
            ),
            "UHS MBBS": (
                "Cori disease (GSD Type III) versus McArdle disease (GSD Type V) enzyme defects",
                "Cori disease is caused by debranching enzyme (alpha-1,6-glucosidase) deficiency accumulating limit dextrin; McArdle disease is muscle glycogen phosphorylase deficiency causing exercise intolerance and myoglobinuria.",
                "McArdle disease affects skeletal muscle selectively, featuring painful muscle cramps and 'second-wind phenomenon' during exercise without hypoglycemia; blood lactate fails to rise after ischemic forearm exercise."
            )
        }
    },

    # Domain 165: Clinical Genetics & Dysmorphology
    {
        "id": "domain_165_clinical_genetics",
        "entity": "Chromosomal aneuploidies, sex chromosome disorders, and microdeletion syndromes",
        "hallmark": "upslanting palpebral fissures, single transverse palmar crease, and atrioventricular septal defect (Down syndrome); short stature, webbed neck, streak ovaries, and coarctation of aorta in female (Turner syndrome); or macroorchidism and long narrow face (Fragile X)",
        "system": "General Principles",
        "ref_key": "clin_genetics",
        "subjects": {
            "Step 1": "Genetics",
            "NEET PG": "Genetics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Genetics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Cytogenetic mechanisms of Down syndrome: Meiotic non-disjunction versus Robertsonian translocation",
                "95% of cases caused by maternal meiotic non-disjunction (meiosis I); 4% caused by unbalanced Robertsonian translocation involving chromosomes 14 and 21; 1% caused by post-zygotic mitotic mosaicism.",
                "Advanced maternal age significantly increases meiotic non-disjunction risk; in parental balanced 14;21 translocation carriers, the theoretical recurrence risk in subsequent pregnancies is substantially higher."
            ),
            "Step 2 CK": (
                "Prenatal screening algorithms for fetal aneuploidy: First-trimester combined screening and cfDNA",
                "First-trimester screening (nuchal translucency, PAPP-A, free beta-hCG) combined with cell-free fetal DNA (cfDNA / NIPT) from maternal plasma achieving > 99% detection rates for trisomy 21.",
                "Positive non-invasive prenatal screening tests require definitive diagnostic confirmation with chorionic villus sampling (weeks 10-13) or amniocentesis (weeks 15+) for karyotype or chromosomal microarray."
            ),
            "Step 3": (
                "Turner syndrome (45,X): Cardiovascular surveillance, hormone replacement, and fertility counseling",
                "Baseline and serial screening for bicuspid aortic valve and coarctation of the aorta using cardiac MRI, combined with growth hormone in childhood and estrogen/progestin pubertal replacement.",
                "Aortic root dilatation and aortic dissection carry high mortality in Turner syndrome, especially during pregnancy; spontaneous conception is rare due to streak gonads, requiring donor oocyte IVF."
            ),
            "PLAB / UKMLA": (
                "Klinefelter syndrome (47,XXY): Clinical presentation, hypergonadotropic hypogonadism, and testosterone",
                "Tall stature, eunuchoid body proportions, small firm testes, gynecomastia, azoospermia, elevated LH and FSH with low testosterone, treated with lifelong testosterone replacement therapy.",
                "Meiotic non-disjunction introduces a supernumerary X chromosome; hyalinization of seminiferous tubules destroys Sertoli and Leydig cells, predisposing to metabolic syndrome, osteoporosis, and male breast cancer."
            ),
            "AMC": (
                "Fragile X syndrome: FMR1 CGG trinucleotide repeat expansion and genetic anticipation",
                "Trinucleotide repeat expansion (> 200 CGG repeats) in the 5' untranslated region of the FMR1 gene on the X chromosome causing transcriptional gene silencing via DNA hypermethylation.",
                "FMRP is an RNA-binding protein essential for synaptic plasticity; full mutation causes intellectual disability, large prominent ears, macroorchidism post-puberty, and autism spectrum behaviors."
            ),
            "MCCQE": (
                "Prader-Willi versus Angelman syndromes: Genomic imprinting on chromosome 15q11-q13",
                "Maternal imprinting with loss of paternal 15q11-q13 expression produces Prader-Willi syndrome (hyperphagia, severe obesity, hypogonadism); loss of maternal UBE3A expression produces Angelman ('happy puppet').",
                "Uniparental disomy (UPD: maternal UPD in Prader-Willi; paternal UPD in Angelman) or microdeletion of the 15q11-q13 locus explains the divergent phenotypes despite involving the identical chromosomal locus."
            ),
            "FCPS": (
                "Edward syndrome (Trisomy 18) versus Patau syndrome (Trisomy 13) clinical distinction",
                "Trisomy 18 presents with prominent occiput, micrognathia, low-set ears, clenched hands with overlapping fingers, and rocker-bottom feet; Trisomy 13 presents with holoprosencephaly, microphthalmia, and polydactyly.",
                "Both trisomies carry grim prognoses with median survival < 1-2 weeks; prenatal ultrasound reveals severe intrauterine growth restriction, polyhydramnios, and complex congenital cardiac anomalies."
            ),
            "NLE": (
                "Down syndrome associated systemic anomalies and health supervision guidelines",
                "Congenital heart disease in 50% (atrioventricular septal defect / endocardial cushion defect), duodenal atresia, Hirschsprung disease, celiac disease, early-onset Alzheimer disease, and childhood ALL/AMKL.",
                "Regular screening for hypothyroidism (annual TSH), celiac disease, obstructive sleep apnea, and cervical spine flexion/extension radiographs for atlantoaxial instability is clinically mandated."
            ),
            "NEET PG": (
                "Cri-du-chat syndrome (5p deletion) and Williams syndrome (7q11.23 deletion) genetics",
                "Terminal deletion of the short arm of chromosome 5 (5p-) causing high-pitched cat-like cry, microcephaly, and cardiac defects; Williams syndrome (7q microdeletion, elastin gene) features 'elfin' facies and supravalvular aortic stenosis.",
                "Williams syndrome individuals exhibit an outgoing 'cocktail party' personality, extreme empathy, hypercalcemia in infancy, and supravalvular aortic stenosis driven by hemizygous ELN elastin gene deletion."
            ),
            "MRCP": (
                "Huntington disease: CAG trinucleotide repeat expansion and striatal caudate atrophy",
                "Autosomal dominant neurodegenerative disorder with >= 36 CAG repeats encoding a polyglutamine tract in the huntingtin gene on chromosome 4p16, showing profound atrophy of the caudate nucleus on MRI.",
                "Paternal transmission is prone to significant repeat expansion (anticipation); mutant huntingtin protein aggregates trigger excitotoxic NMDA receptor death in striatal GABAergic medium spiny neurons."
            ),
            "MRCEM": (
                "Marfan syndrome: Fibrillin-1 mutation and acute aortic dissection presentation",
                "Mutations in the FBN1 gene on chromosome 15q21 causing defective extracellular microfibrils and dysregulated TGF-beta signaling, predisposing to cystic medial necrosis and acute Stanford Type A aortic dissection.",
                "Beta-adrenergic blockers (or angiotensin receptor blockers like losartan) reduce hemodynamic pulsatile wall shear stress, significantly slowing aortic root enlargement in diagnosed patients."
            ),
            "SMLE": (
                "Pre-marital genetic carrier screening for hemoglobinopathies: Thalassemia and Sickle Cell",
                "Mandatory national pre-marital screening utilizing complete blood count and high-performance liquid chromatography (HPLC) to identify asymptomatic beta-thalassemia and sickle cell trait carriers.",
                "Couples where both partners carry beta-thalassemia trait receive comprehensive genetic counseling regarding the 25% risk of conceiving an infant with transfusion-dependent thalassemia major."
            ),
            "HAAD / DHA": (
                "Consanguinity and autosomal recessive genetic risk counseling in clinical practice",
                "Counseling first-cousin couples sharing 1/8th (12.5%) of their genome about increased baseline risks of homozygous expression of rare recessive alleles, recommending expanded carrier screening panels.",
                "Consanguinity does not alter autosomal dominant or chromosomal aneuploidy rates, but significantly elevates the incidence of rare inborn errors of metabolism, sensorineural deafness, and congenital anomalies."
            ),
            "UHS MBBS": (
                "Mendelian inheritance patterns: Autosomal dominant, recessive, and X-linked characteristics",
                "Autosomal dominant traits appear in consecutive generations (vertical transmission, 50% risk to offspring); autosomal recessive traits appear in siblings (horizontal transmission, 25% risk from carrier parents).",
                "X-linked recessive disorders affect hemizygous males almost exclusively, transmitted by carrier mothers; father-to-son transmission is impossible because fathers contribute their Y chromosome to sons."
            )
        }
    },

    # Domain 166: Vascular Surgery & Aortic Emergencies
    {
        "id": "domain_166_vascular_emergencies",
        "entity": "Ruptured abdominal aortic aneurysm (AAA), acute mesenteric ischemia, and critical limb ischemia",
        "hallmark": "pulsatile abdominal mass with hypotension and severe flank/back pain (ruptured AAA); severe abdominal pain out of proportion to exam findings in atrial fibrillation (acute mesenteric ischemia); or 6 Ps of acute arterial limb occlusion",
        "system": "Cardiovascular",
        "ref_key": "vasc_emergencies",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Histopathology and matrix metalloproteinase remodeling in abdominal aortic aneurysms",
                "Chronic inflammatory transmural infiltration, loss of vascular smooth muscle cells via apoptosis, and degradation of structural elastin and collagen by matrix metalloproteinases (MMP-2, MMP-9).",
                "Thinning of the tunica media and fragmentation of the internal elastic lamina weaken the aortic wall; Laplace law (Wall Tension = Pressure x Radius) dictates exponential rupture risk as diameter expands."
            ),
            "Step 2 CK": (
                "Ruptured abdominal aortic aneurysm: Permissive hypotension and immediate EVAR / open repair",
                "Targeting permissive hypotension (systolic BP 80-90 mm Hg to prevent clot dislodgement) while immediately transferring the patient directly to the operating room for emergency EVAR or open surgical repair.",
                "Overzealous fluid resuscitation increases blood pressure, disrupting the retroperitoneal contained hematoma and converting a contained leak into catastrophic free intra-abdominal exsanguination."
            ),
            "Step 3": (
                "Screening recommendations and elective surgical repair criteria for abdominal aortic aneurysms",
                "One-time screening ultrasound for men aged 65-75 with a history of tobacco smoking; elective repair indicated when maximal diameter >= 5.5 cm (or >= 5.0 cm in women) or rapid growth > 1.0 cm/year.",
                "USPSTF and international surgical guidelines confirm screening ultrasound significantly reduces aneurysm-related mortality; elective repair before reaching 5.5 cm limits perioperative mortality to < 1-3%."
            ),
            "PLAB / UKMLA": (
                "Acute mesenteric ischemia: Clinical presentation, CT angiography, and emergency laparotomy",
                "Severe sudden periumbilical pain out of proportion to benign abdominal examination in a patient with atrial fibrillation, diagnosed by biphasic CT angiography, treated with surgical embolectomy.",
                "Cardiac thromboembolism lodges predominantly in the superior mesenteric artery (SMA) just distal to the middle colic branch; metabolic acidosis and elevated serum lactate signify irreversible transmural infarction."
            ),
            "AMC": (
                "Acute limb ischemia emergency management: Heparinization and Fogarty catheter thromboembolectomy",
                "Immediate systemic unfractionated heparin bolus to prevent thrombus propagation, followed by urgent surgical cutdown and Fogarty balloon catheter thromboembolectomy within 6 hours.",
                "Skeletal muscle tolerates complete ischemia for only 4-6 hours; delays beyond 6 hours lead to irreversible muscle infarction, myoglobinuria, compartment syndrome, and required limb amputation."
            ),
            "MCCQE": (
                "Chronic peripheral arterial disease (PAD): Ankle-Brachial Index (ABI) and supervised exercise",
                "Measuring resting Ankle-Brachial Index (normal 0.90-1.30; PAD <= 0.90; severe ischemia < 0.40); initial therapy consists of risk factor control, statin, antiplatelet, and a 12-week supervised exercise program.",
                "Supervised exercise therapy stimulates angiogenesis and collateral circulation development in the calf musculature, significantly increasing pain-free walking distance non-invasively."
            ),
            "FCPS": (
                "Endovascular Aneurysm Repair (EVAR) complications: Endoleak classification and management",
                "Type I endoleak (inadequate seal at proximal or distal graft attachment) and Type III endoleak (graft structural defect) require immediate intervention; Type II endoleak (retrograde lumbar/IMA flow) requires monitoring.",
                "Type I endoleaks expose the native aneurysm sac to direct systemic arterial pressure, retaining high rupture risk; urgent endovascular balloon molding or extension cuff deployment is mandatory."
            ),
            "NLE": (
                "The 6 Ps of acute arterial occlusion and differentiation from deep vein thrombosis",
                "Pain, Pallor, Pulselessness, Paresthesias, Poikilothermia (coldness), and Paralysis indicating sudden mechanical arterial blockage, contrasting with the swelling, erythema, and warmth of acute DVT.",
                "Paresthesias and loss of light touch sensation are the earliest clinical signs of peripheral nerve ischemia; motor paralysis represents advanced, deep neuromuscular injury requiring immediate intervention."
            ),
            "NEET PG": (
                "Thromboangiitis obliterans (Buerger disease): Pathology, demographic profile, and smoking cessation",
                "Non-atherosclerotic segmental, highly cellular inflammatory and thrombosing vasculitis affecting small- and medium-sized arteries and veins of extremities in young heavy tobacco smokers; absolute smoking cessation is the only cure.",
                "Histopathology reveals a highly cellular intraluminal thrombus containing polymorphonuclear neutrophils with microabscesses, while the internal elastic lamina and vessel architecture remain preserved."
            ),
            "MRCP": (
                "Renal artery stenosis: Atherosclerotic versus fibromuscular dysplasia and ACE inhibitor crisis",
                "Severe refractory hypertension with sudden rise in serum creatinine > 30-50% following initiation of an ACE inhibitor in bilateral renal artery stenosis, or fibromuscular dysplasia ('string-of-beads') in a young female.",
                "In bilateral renal artery stenosis, glomerular filtration rate depends on angiotensin II-mediated efferent arteriolar constriction; blocking angiotensin II causes catastrophic loss of intraglomerular perfusion pressure."
            ),
            "MRCEM": (
                "Acute thoracic aortic dissection: Stanford Type A versus Type B emergency stratification",
                "Stanford Type A (involving ascending aorta, requiring immediate emergency open surgical graft replacement); Stanford Type B (limited to descending aorta distal to left subclavian, managed with medical anti-impulse therapy).",
                "Type A dissection carries a 1-2% mortality rate per hour due to imminent intrapericardial rupture causing fatal tamponade, coronary malperfusion (inferior STEMI), or acute severe aortic regurgitation."
            ),
            "SMLE": (
                "Critical limb ischemia: Rest pain, ischemic ulceration, and arterial revascularization",
                "Rest pain waking the patient at night, improved by hanging the foot over the bed (gravity-dependent perfusion), non-healing arterial ulcers, or gangrene, requiring urgent surgical or endovascular revascularization.",
                "Critical limb-threatening ischemia represents end-stage peripheral artery disease; failure to establish arterial inline flow to the foot leads to progressive tissue necrosis and major below- or above-knee amputation."
            ),
            "HAAD / DHA": (
                "Duplex ultrasound surveillance protocols following endovascular aneurysm repair (EVAR)",
                "Contrast-enhanced ultrasound (CEUS) or CT angiography performed at 1, 6, and 12 months post-EVAR and annually thereafter to assess aneurysm sac shrinkage, graft migration, and occult endoleaks.",
                "Unlike open surgical repair, EVAR requires lifelong morphological surveillance because late endoleaks or graft structural displacement can silently repressurize the aneurysm sac, risking late rupture."
            ),
            "UHS MBBS": (
                "Surgical anatomy of the abdominal aorta and its major visceral branches",
                "The abdominal aorta begins at the aortic hiatus of the diaphragm (T12) and bifurcates into common iliac arteries at L4; celiac trunk (T12), SMA (L1), renal arteries (L1-L2), IMA (L3).",
                "Most abdominal aortic aneurysms (90-95%) are infrarenal, originating between the renal arteries (L1-L2) and the aortic bifurcation (L4), allowing proximal cross-clamping without compromising renal perfusion."
            )
        }
    },

    # Domain 167: Interventional Cardiology & Structural Heart
    {
        "id": "domain_167_interventional_cardiology",
        "entity": "Structural heart interventions, post-infarction mechanical complications, and coronary perforation",
        "hallmark": "sudden catastrophic hemodynamic collapse with new harsh holosystolic murmur 3-5 days post-STEMI (VSR or papillary muscle rupture), severe symptomatic mitral regurgitation in prohibitive surgical risk (TEER), or tamponade during PCI",
        "system": "Cardiovascular",
        "ref_key": "interventional_cardio",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Myocardial infarction healing timeline and post-infarction mechanical rupture pathology",
                "Coagulative necrosis and extensive neutrophilic infiltration (days 1-3) followed by macrophage phagocytosis and soft granulation tissue formation (days 3-7), predisposing to mechanical wall rupture.",
                "Lytic enzymes released by infiltrating macrophages digest necrotic extracellular collagen matrices before new scar collagen is deposited, creating maximum structural fragility at days 3 to 7 post-infarct."
            ),
            "Step 2 CK": (
                "Differentiating ventricular septal rupture from acute papillary muscle rupture post-MI",
                "VSR features an oxygen step-up in right ventricular blood and a harsh holosystolic murmur with thrill at the left sternal border; papillary muscle rupture features acute mitral regurgitation without oxygen step-up.",
                "Both present with abrupt cardiogenic shock and pulmonary edema 3-5 days after transmural MI; emergency echocardiography confirms the lesion, and intra-aortic balloon pump (IABP) unloads the left ventricle."
            ),
            "Step 3": (
                "Transcatheter Edge-to-Edge Repair (TEER / MitraClip) in severe functional mitral regurgitation",
                "Deploying a mechanical cobalt-chromium clip across the regurgitant mitral leaflets via transfemoral transseptal access to create a dual-orifice valve in heart failure patients refractory to GDMT.",
                "The COAPT trial demonstrated that TEER significantly reduces heart failure hospitalizations and 2-year mortality in patients with symptomatic severe secondary mitral regurgitation on maximal medical therapy."
            ),
            "PLAB / UKMLA": (
                "Left Atrial Appendage Occlusion (LAAO / Watchman device) in non-valvular atrial fibrillation",
                "Percutaneous transcatheter deployment of an occlusive nitinol plug in the left atrial appendage for patients with non-valvular atrial fibrillation and high thromboembolic risk with contraindications to long-term oral anticoagulation.",
                "Over 90% of cardiac thrombi in non-valvular atrial fibrillation originate in the left atrial appendage; mechanical exclusion provides stroke prevention comparable to warfarin while eliminating chronic bleeding risk."
            ),
            "AMC": (
                "Coronary artery perforation during percutaneous coronary intervention (PCI): Ellis classification",
                "Ellis Type III perforation (frank jet of contrast extravasation into the pericardium) requiring immediate prolonged balloon inflation, protamine heparin reversal, covered stent deployment, and emergency pericardiocentesis.",
                "Extravasation from an epicardial coronary artery rapidly fills the pericardial space with 100-200 mL of blood, producing catastrophic pericardial tamponade and electromechanical dissociation within minutes."
            ),
            "MCCQE": (
                "Cardiogenic shock post-PCI: Right ventricular myocardial infarction and volume resuscitation",
                "Inferior STEMI with hypotension, clear lung fields, and elevated jugular venous pressure, requiring right-sided ECG (V4R ST elevation), treated with IV isotonic crystalloid boluses and avoidance of nitrates.",
                "Right ventricular infarction depends critically on right ventricular end-diastolic filling pressure (preload) to maintain cardiac output; nitrates and diuretics precipitate precipitous, life-threatening hypotension."
            ),
            "FCPS": (
                "Emergency surgical repair of acute post-infarction ventricular septal defect (VSR)",
                "Aggressive afterload reduction with an intra-aortic balloon pump or Impella mechanical support, followed by emergency or urgent surgical patch exclusion utilizing bovine pericardium.",
                "Medical therapy alone for post-infarct VSR carries > 90% in-hospital mortality; mechanical circulatory support stabilizes hemodynamics and allows myocardial tissue borders to consolidate prior to definitive repair."
            ),
            "NLE": (
                "Free wall rupture versus pseudoaneurysm post-myocardial infarction",
                "Free wall rupture leads to immediate hemopericardium, cardiac tamponade, electromechanical dissociation, and sudden death; pseudoaneurysm is a contained rupture lined by adherent pericardium with high late rupture risk.",
                "A true ventricular aneurysm involves all 3 layers of the attenuated fibrotic ventricular wall with wide neck; a pseudoaneurysm is an incomplete rupture contained only by parietal pericardium with a narrow neck."
            ),
            "NEET PG": (
                "Anatomy and arterial blood supply of the cardiac papillary muscles",
                "Posteromedial papillary muscle has a single blood supply from the posterior descending artery (PDA), making it highly vulnerable to rupture in inferior STEMI; anterolateral muscle has dual supply (LAD and LCx).",
                "Because the anterolateral papillary muscle receives collateral perfusion from both the left anterior descending and circumflex arteries, complete ischemic necrosis and rupture are extraordinarily rare."
            ),
            "MRCP": (
                "Transcatheter Aortic Valve Implantation (TAVR) complications: Paravalvular leak and conduction blocks",
                "Screening for high-degree atrioventricular block requiring permanent pacemaker insertion (due to mechanical compression of the His bundle traversing the membranous septum) and paravalvular aortic regurgitation.",
                "The atrioventricular conduction bundle passes directly beneath the non-coronary and right coronary aortic cusps; radial expansion of transcatheter stent frames traumatizes conduction tissue."
            ),
            "MRCEM": (
                "Cardiac arrest secondary to acute cardiac tamponade: Emergency bedside pericardiocentesis",
                "Subxiphoid needle insertion angled at 45 degrees toward the left shoulder under continuous echocardiographic guidance, aspirating non-clotting pericardial blood to relieve cardiac compression.",
                "Removing as little as 20 to 50 mL of fluid from a acutely pressurized pericardial space drops intrapericardial pressure below right ventricular diastolic pressure, restoring venous return and cardiac output."
            ),
            "SMLE": (
                "Dual antiplatelet therapy (DAPT) duration and bleeding risk post-drug eluting stent (DES)",
                "Standard 12 months of DAPT (aspirin plus ticagrelor or clopidogrel) for acute coronary syndromes, shortened to 1-3 months in patients at high bleeding risk (PRECISE-DAPT score >= 25).",
                "Premature DAPT cessation within the first 30 days is the single most powerful predictor of catastrophic acute stent thrombosis, presenting with sudden-onset massive STEMI and high mortality."
            ),
            "HAAD / DHA": (
                "Patent Foramen Ovale (PFO) closure for cryptogenic stroke: ROPE score and indications",
                "Percutaneous transcatheter PFO closure in patients aged <= 60 years with cryptogenic ischemic stroke and high Risk of Paradoxical Embolism (ROPE) score, especially in the presence of an atrial septal aneurysm.",
                "Randomized clinical trials (RESPECT, CLOSE) prove that PFO device closure combined with antiplatelet therapy provides significant reduction in recurrent ischemic stroke compared to medical antiplatelet therapy alone."
            ),
            "UHS MBBS": (
                "Anatomy of the interatrial septum and landmarks for transcatheter transseptal puncture",
                "Puncturing the thin fibrous fossa ovalis in the posterior-inferior region of the interatrial septum under intracardiac or transesophageal echocardiography, avoiding the anterior aorta and posterior atrial wall.",
                "The fossa ovalis is the remanent of the fetal foramen ovale; anterior misplacement risks puncturing the aortic root, whereas superior misplacement risks entering the pericardial reflection, causing hemopericardium."
            )
        }
    },

    # Domain 168: Urological Oncology & Reconstructive Urology
    {
        "id": "domain_168_uro_oncology",
        "entity": "Renal cell carcinoma (RCC), bladder urothelial carcinoma, and prostate adenocarcinoma",
        "hallmark": "classic triad of flank pain, palpable abdominal mass, and hematuria (RCC); painless gross hematuria in an older smoker (bladder cancer); or elevated serum PSA with firm hard nodular prostate on DRE",
        "system": "Renal",
        "ref_key": "uro_oncology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Clear cell renal cell carcinoma molecular genetics: Von Hippel-Lindau (VHL) and HIF-1alpha",
                "Loss of 3p harboring the VHL tumor suppressor gene preventing ubiquitination of hypoxia-inducible factor 1-alpha (HIF-1alpha), driving constitutive hypersecretion of VEGF and PDGF.",
                "Abundant lipid and glycogen dissolved during standard paraffin processing yield optically clear cytoplasm on histology; tumor cells have prominent vascular networks and high susceptibility to anti-VEGF TKIs."
            ),
            "Step 2 CK": (
                "Diagnostic evaluation and initial surgical staging of painless gross hematuria in adults",
                "Full urological evaluation including contrast-enhanced multiphase CT urography and flexible cystoscopy to rule out urothelial carcinoma and renal parenchymal malignancy.",
                "Painless gross hematuria carries up to a 10-20% probability of an underlying urinary tract malignancy; negative urinalysis or infection treatment does not eliminate the requirement for formal cystoscopic inspection."
            ),
            "Step 3": (
                "Non-muscle-invasive bladder cancer (NMIBC): Transurethral resection and intravesical BCG therapy",
                "Complete transurethral resection of bladder tumor (TURBT) followed by intravesical Bacillus Calmette-Guérin (BCG) immunotherapy for high-risk non-muscle-invasive disease to prevent recurrence.",
                "BCG binds fibronectin on urothelial cells, triggering a massive cell-mediated immune response with interferon-gamma and cytotoxic T-cell recruitment that destroys residual neoplastic urothelial clones."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for prostate cancer: Multiparametric MRI prior to targeted prostate biopsy",
                "Performing multiparametric magnetic resonance imaging (mpMRI) reported by PI-RADS scoring prior to biopsy, followed by targeted transperineal or transrectal MRI-ultrasound fusion biopsy.",
                "Pre-biopsy mpMRI reduces overdiagnosis of clinically insignificant indolent tumors while significantly increasing detection of clinically significant high-grade (Gleason score >= 7) adenocarcinoma."
            ),
            "AMC": (
                "Muscle-invasive bladder cancer (MIBC): Neoadjuvant cisplatin chemotherapy and radical cystectomy",
                "Neoadjuvant cisplatin-based combination chemotherapy (e.g., gemcitabine-cisplatin or MVAC) followed by radical cystectomy with bilateral pelvic lymphadenectomy and urinary diversion.",
                "Neoadjuvant cisplatin chemotherapy eradicates micrometastatic disease and downstages primary bladder tumors, translating to an absolute 5-8% overall survival advantage at 5 years over cystectomy alone."
            ),
            "MCCQE": (
                "Testicular germ cell tumors: Serum tumor markers (AFP, beta-hCG, LDH) and radical inguinal orchiectomy",
                "Painless firm testicular mass in a young male warranting scrotal ultrasound and serum tumor markers, followed by radical inguinal orchiectomy without trans-scrotal incisional biopsy.",
                "Scrotal biopsy violates the normal anatomical lymph drainage (which flows to retroperitoneal para-aortic nodes), redirecting tumor metastasis into the superficial inguinal lymph nodes."
            ),
            "FCPS": (
                "Partial nephrectomy (nephron-sparing surgery) indications and warm ischemia time targets",
                "Elective partial nephrectomy for T1a renal tumors (<= 4 cm) preserving renal parenchymal function, minimizing warm ischemia time to < 20-25 minutes to avoid ischemic nephron injury.",
                "Partial nephrectomy provides oncologic equivalence to radical nephrectomy while preserving functional renal mass, significantly reducing long-term cardiovascular events and chronic kidney disease."
            ),
            "NLE": (
                "Clinical distinction between Seminoma and Non-Seminomatous Testicular Germ Cell Tumors",
                "Seminomas are highly radiosensitive and chemosensitive with normal serum alpha-fetoprotein (AFP); elevated serum AFP is pathognomonic for non-seminomatous elements (yolk sac component).",
                "Beta-hCG can be mildly elevated in seminomas (produced by syncytiotrophoblastic cells); an elevated AFP level automatically excludes a diagnosis of pure seminoma and dictates non-seminoma protocols."
            ),
            "NEET PG": (
                "Paraneoplastic syndromes associated with renal cell carcinoma (Stauffer syndrome and erythrocytosis)",
                "Erythrocytosis from ectopic erythropoietin secretion, hypercalcemia from PTHrP secretion, and reversible hepatic dysfunction without liver metastases (Stauffer syndrome) in clear cell RCC.",
                "Stauffer syndrome is characterized by elevated alkaline phosphatase, prolonged prothrombin time, and hepatosplenomegaly, mediated by tumor-derived interleukin-6, resolving completely after nephrectomy."
            ),
            "MRCP": (
                "Metastatic castration-resistant prostate cancer (mCRPC): Androgen receptor signaling inhibitors",
                "Disease progression despite medical or surgical castration (serum testosterone < 50 ng/dL), managed with novel antiandrogens (enzalutamide, apalutamide) or CYP17A1 inhibitors (abiraterone with prednisone).",
                "Abiraterone acetate irreversibly inhibits 17alpha-hydroxylase and C17,20-lyase, blocking androgen biosynthesis in the testes, adrenal glands, and within prostate tumor tissues; prednisone prevents mineralocorticoid excess."
            ),
            "MRCEM": (
                "Priapism emergency management: Ischemic (low-flow) versus non-ischemic (high-flow) differentiation",
                "Ischemic priapism (painful, rigid corpora cavernosa with flaccid glans, hypoxic/acidotic blood gas: pO2 < 30, pH < 7.25), treated with cavernous aspiration and intracavernosal phenylephrine.",
                "Ischemic priapism is a compartment syndrome of the penis; intracavernosal phenylephrine (alpha-1 agonist) induces cavernous smooth muscle contraction, evacuating stagnant blood and restoring arterial flow."
            ),
            "SMLE": (
                "Gleason grading system and International Society of Urological Pathology (ISUP) Grade Groups",
                "Prostate adenocarcinoma architecture graded on glandular differentiation: Grade Group 1 (Gleason 3+3=6), Grade Group 2 (3+4=7), Grade Group 3 (4+3=7), Grade Group 4 (8), Grade Group 5 (9-10).",
                "The primary (most prevalent) and secondary (second most prevalent) histological patterns are summed; presence of pattern 4 (cribriform glands) distinguishes favorable Grade Group 2 from aggressive Grade Group 3."
            ),
            "HAAD / DHA": (
                "Screening guidelines for prostate cancer: Shared decision-making and PSA velocity/density",
                "Shared decision-making regarding PSA screening in men aged 50-69 years (or age 45 with family history or African ancestry), evaluating PSA density and free-to-total PSA ratio (< 10% indicates high risk).",
                "A low percentage of free circulating PSA (< 10-15%) strongly correlates with aggressive malignant disease, whereas higher free PSA is seen in benign prostatic hyperplasia, avoiding unnecessary biopsy."
            ),
            "UHS MBBS": (
                "Surgical anatomy of the prostate and anatomical zones: Peripheral versus Transition zone",
                "Over 70% of prostate adenocarcinomas arise in the peripheral zone (accessible to digital rectal examination palpation), whereas benign prostatic hyperplasia arises in the central transition zone around the urethra.",
                "Transition zone hyperplasia mechanically compresses the prostatic urethra early, producing lower urinary tract obstructive symptoms; peripheral zone tumors grow outward silently without urinary obstruction."
            )
        }
    },

    # Domain 169: Gynecologic Oncology
    {
        "id": "domain_169_gyn_oncology",
        "entity": "Cervical carcinoma, high-grade serous ovarian carcinoma, and endometrial adenocarcinoma",
        "hallmark": "postcoital vaginal bleeding or watery discharge with exophytic cervical lesion, progressive abdominal distension with pelvic mass, ascites, and CA-125 > 500 U/mL, or postmenopausal bleeding",
        "system": "Pregnancy",
        "ref_key": "gyn_oncology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Obstetrics",
            "FCPS": "Obstetrics",
            "UHS MBBS": "Obstetrics",
            "other": "Obstetrics"
        },
        "concepts": {
            "Step 1": (
                "High-risk human papillomavirus (HPV 16 and 18) oncogenes: E6 and E7 molecular mechanisms",
                "Viral E6 oncoprotein promotes ubiquitination and proteasomal degradation of p53 tumor suppressor; viral E7 oncoprotein binds and inactivates retinoblastoma (Rb) protein, disinhibiting E2F transcription.",
                "Inactivation of Rb allows uncontrolled cell cycle transition from G1 to S phase; degradation of p53 disables apoptosis and DNA damage checkpoint repair, driving genomic instability and cervical carcinogenesis."
            ),
            "Step 2 CK": (
                "Diagnostic evaluation of postmenopausal vaginal bleeding: Excluding endometrial cancer",
                "Immediate transvaginal ultrasonography to assess endometrial stripe thickness; endometrial thickness > 4 mm or persistent bleeding mandates outpatient pipelle endometrial biopsy.",
                "Postmenopausal bleeding carries a 10% risk of underlying endometrial adenocarcinoma; an endometrial stripe <= 4 mm on TVUS has a > 99% negative predictive value, safely excluding cancer."
            ),
            "Step 3": (
                "High-grade serous ovarian carcinoma: Primary debulking surgery and platinum-based chemotherapy",
                "Maximal cytoreductive debulking surgery aiming for complete macroscopic resection (R0) followed by intravenous/intraperitoneal carboplatin and paclitaxel plus maintenance PARP inhibitor for BRCA mutations.",
                "Complete cytoreduction to zero visible macroscopic residual disease is the single most powerful prognostic factor for overall survival in advanced stage III/IV ovarian cancer."
            ),
            "PLAB / UKMLA": (
                "Cervical screening program: High-risk HPV primary screening and colposcopy referral",
                "Primary testing for high-risk HPV (hrHPV); if hrHPV is positive, reflex cytology is performed; women with positive hrHPV and abnormal cytology are referred for colposcopy within 2 to 6 weeks.",
                "NICE guidelines established primary hrHPV screening to increase cervical intraepithelial neoplasia (CIN) detection sensitivity; colposcopy applies acetic acid and Lugol iodine to target punch biopsies."
            ),
            "AMC": (
                "Cervical cancer clinical staging (FIGO) and treatment for locally advanced disease",
                "Concurrent chemoradiation therapy (external beam radiotherapy with concurrent weekly cisplatin and intracavitary brachytherapy) for locally advanced stage IIB to IVA cervical carcinoma.",
                "FIGO stage IIB disease exhibits parametrial invasion, precluding radical hysterectomy; definitive concurrent chemoradiotherapy achieves superior locoregional control and survival over primary surgery."
            ),
            "MCCQE": (
                "Gestational trophoblastic disease: Hydatidiform mole presentation, beta-hCG, and suction curettage",
                "Vaginal bleeding, uterus size larger than gestational dates, hyperemesis, preeclampsia < 20 weeks, and 'snowstorm' appearance on ultrasound with beta-hCG > 100,000 mIU/mL, treated with suction curettage.",
                "Complete mole (46,XX, paternal disomy from empty ovum) carries a 15-20% risk of persistent gestational trophoblastic neoplasia; serial weekly serum quantitative beta-hCG monitoring is mandatory until normal."
            ),
            "FCPS": (
                "Surgical staging of endometrial cancer: Total hysterectomy and sentinel lymph node mapping",
                "Total extrafascial hysterectomy, bilateral salpingo-oophorectomy, and retroperitoneal sentinel lymph node mapping using cervical indocyanine green (ICG) fluorescence.",
                "Sentinel node mapping accurately stages regional pelvic and para-aortic nodal basins while avoiding the severe lower-extremity lymphedema associated with routine systematic full lymphadenectomy."
            ),
            "NLE": (
                "Risk of Malignancy Index (RMI) for pelvic masses: Ultrasound score, menopausal status, and CA-125",
                "Calculating RMI = Ultrasound score x Menopausal score x serum CA-125 (U/mL); an RMI score > 200 warrants urgent referral to a specialized gynecologic oncology surgical unit.",
                "Multilocular cysts, solid areas, metastases, ascites, and bilateral lesions each contribute to the ultrasound score; combined with elevated CA-125 in postmenopausal women, RMI has > 80% sensitivity."
            ),
            "NEET PG": (
                "Histopathological hallmarks of ovarian neoplasms: Call-Exner bodies, Psammoma bodies, and Schiller-Duval",
                "Call-Exner bodies (granulosa cells around eosinophilic fluid) in granulosa cell tumors; psammoma bodies in serous cystadenocarcinoma; Schiller-Duval bodies in yolk sac (endodermal sinus) tumors.",
                "Granulosa cell tumors secrete estrogen, causing precocious puberty in children or endometrial hyperplasia/bleeding in postmenopausal women, and express the biochemical marker inhibin."
            ),
            "MRCP": (
                "PARP inhibitors (Olaparib, Niraparib) in BRCA-mutated ovarian cancer: Synthetic lethality",
                "Inhibiting poly(ADP-ribose) polymerase (PARP) in tumor cells with defective homologous recombination DNA repair (BRCA1/BRCA2 mutations), causing lethal accumulation of double-strand DNA breaks.",
                "Synthetic lethality exploits pre-existing genetic DNA repair defects; PARP inhibition converts single-strand breaks into collapsed replication forks that homologous recombination-deficient cells cannot repair."
            ),
            "MRCEM": (
                "Severe neutropenic sepsis during gynecologic chemotherapy: Emergency empiric management",
                "Immediate blood cultures and administration of intravenous antipseudomonal beta-lactam monotherapy (piperacillin-tazobactam or cefepime) within 60 minutes for fever >= 38.3 C with ANC < 500/uL.",
                "Patients receiving myelosuppressive platinum-taxane regimens lack neutrophils to form local inflammatory exudates; unchecked bacteremia leads to septic shock and multi-organ failure within hours."
            ),
            "SMLE": (
                "HPV vaccination schedule and prevention of cervical, vulvar, and oropharyngeal cancer",
                "Administering 9-valent recombinant HPV vaccine (covering HPV types 6, 11, 16, 18, 31, 33, 45, 52, 58) as a 2-dose series (months 0 and 6-12) for adolescents aged 9-14 years.",
                "Vaccinating boys and girls prior to sexual debut provides high neutralizing antibody titers, virtually eliminating high-grade cervical dysplasia and protecting against anogenital warts and HPV-related cancers."
            ),
            "HAAD / DHA": (
                "Lynch syndrome (Hereditary Non-Polyposis Colorectal Cancer) gynecological surveillance",
                "Screening women with germline DNA mismatch repair mutations (MLH1, MSH2, MSH6, PMS2) with annual endometrial biopsy and transvaginal ultrasound starting at age 30-35 years.",
                "Women with Lynch syndrome harbor a 40-60% lifetime risk of endometrial cancer (often presenting earlier than colorectal cancer) and a 10-12% risk of ovarian cancer, warranting prophylactic hysterectomy at age 40."
            ),
            "UHS MBBS": (
                "Gross pathology and hormonal production in functional ovarian sex cord-stromal tumors",
                "Granulosa-theca cell tumors produce estrogen (yellowish cut surface due to lipid-laden lutein cells); Sertoli-Leydig cell tumors produce testosterone (causing defeminization and virilization).",
                "Sertoli-Leydig cell tumors (arrhenoblastomas) cause rapid voice deepening, clitoromegaly, temporal balding, and oligomenorrhea in young women; serum testosterone is elevated with normal DHEA-S."
            )
        }
    }
]
