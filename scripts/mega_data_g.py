"""
Mega Data Part G: Domains 39 to 44 (Surgical Emergencies, Trauma & Critical Care)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_G = [
    # Domain 39: Acute Appendicitis & Diverticulitis
    {
        "id": "domain_39_surgical_abdomen",
        "entity": "acute appendicitis and acute diverticulitis",
        "hallmark": "periumbilical pain migrating to the right lower quadrant, localized tenderness at McBurney point, involuntary guarding, and rebound tenderness",
        "system": "Gastrointestinal",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Visceral versus somatic pain neuroanatomy and appendiceal innervation",
                "Initial dull, poorly localized periumbilical visceral pain mediated by T10 sympathetic splanchnic afferents, shifting to sharp localized RLQ somatic pain upon parietal peritoneal irritation.",
                "Obstruction of the appendiceal lumen (by fecalith or lymphoid hyperplasia) causes distension transmitted via T10 visceral afferents; serosal inflammation irritates somatic nerves producing McBurney tenderness."
            ),
            "Step 2 CK": (
                "Diagnostic imaging strategies in adults, pregnant women, and children",
                "Graded compression ultrasound first-line in children and pregnant women (followed by MRI if equivocal); contrast-enhanced CT abdomen/pelvis in non-pregnant adults.",
                "In non-pregnant adults with atypical presentation, IV contrast CT has > 95% sensitivity and specificity; ultrasound is preferred in children and pregnancy to eliminate ionizing radiation."
            ),
            "Step 3": (
                "Outpatient conservative management of uncomplicated diverticulitis",
                "Oral antibiotics (e.g., ciprofloxacin plus metronidazole or amoxicillin-clavulanate) or observational clear liquid diet in immunocompetent patients without systemic toxicity.",
                "Current clinical guidelines support selective non-antibiotic outpatient management for mild, uncomplicated diverticulitis (Hinchey stage 1a) in stable, immunocompetent patients."
            ),
            "PLAB / UKMLA": (
                "Laparoscopic appendicectomy and NHS emergency surgical pathway",
                "Immediate preoperative IV fluids, analgesia, single-dose broad-spectrum IV antibiotics, and urgent laparoscopic appendicectomy within 24 hours.",
                "NICE quality standards prioritize prompt laparoscopic appendicectomy for acute uncomplicated appendicitis, reducing surgical site infection and hospital stay."
            ),
            "AMC": (
                "Diverticular abscess management and percutaneous drainage indications",
                "Pelvic or paracolic diverticular abscess > 3-4 cm (Hinchey stage 1b/2) requiring CT-guided percutaneous drainage alongside IV antibiotics before interval surgery.",
                "Australian surgical consensus recommends image-guided percutaneous catheter drainage for large diverticular abscesses, converting emergency Hartmann procedures into elective resections."
            ),
            "MCCQE": (
                "Pelvic inflammatory disease and ectopic pregnancy as right lower quadrant mimickers",
                "Mandatory urine or serum beta-hCG and pelvic examination in all women of reproductive age presenting with RLQ pain to rule out ruptured ectopic pregnancy.",
                "Canadian medical objectives emphasize that pregnancy testing is essential in all reproductive-age females with abdominal pain prior to any radiological or operative intervention."
            ),
            "FCPS": (
                "Hartmann procedure versus primary resection with anastomosis in perforated diverticulitis",
                "Emergency Hartmann procedure (sigmoid resection and end colostomy) for purulent or feculent peritonitis (Hinchey stages 3 and 4) in hemodynamically unstable patients.",
                "In emergency surgical practice, generalized peritonitis from perforated diverticulitis requires immediate resuscitation and Hartmann resection to achieve definitive source control."
            ),
            "NLE": (
                "Clinical physical examination signs of peritoneal irritation",
                "Rovsing sign (RLQ pain on LLQ palpation), Psoas sign (pain on passive right hip extension), and Obturator sign (pain on passive internal hip rotation).",
                "National licensing curricula test eponymous signs of appendicitis: Rovsing sign demonstrates peritoneal continuity; Psoas sign indicates retrocecal; Obturator indicates pelvic location."
            ),
            "NEET PG": (
                "Hinchey classification of diverticulitis and CT staging",
                "Hinchey stage 1 (pericolic phlegmon/abscess), stage 2 (distant retroperitoneal/pelvic abscess), stage 3 (generalized purulent peritonitis), stage 4 (feculent peritonitis).",
                "NEET PG surgery heavily tests the Hinchey CT grading system, where stages 1-2 are managed conservatively or with percutaneous drainage, while stages 3-4 require laparotomy."
            ),
            "MRCP": (
                "Interval colonoscopy after acute diverticulitis to rule out occult neoplasia",
                "Scheduling complete optical colonoscopy 6 to 8 weeks after complete clinical resolution of complicated diverticulitis to exclude occult colorectal carcinoma.",
                "MRCP clinical guidelines mandate interval colonoscopy following complicated diverticulitis because perforation and inflammatory strictures can mask underlying colon cancer."
            ),
            "MRCEM": (
                "Emergency resuscitation in septic shock secondary to ruptured appendicitis",
                "Immediate crystalloid fluid challenge, IV piperacillin-tazobactam within 1 hour, source control notification to surgical team, and critical care transfer.",
                "Emergency department resuscitation of generalized peritonitis focuses on rapid fluid restoration, empiric broad-spectrum coverage, and expediting transfer to the operating room."
            ),
            "SMLE": (
                "Management of appendiceal phlegmon or well-circumscribed abscess",
                "Non-operative management with IV antibiotics and percutaneous drainage if needed, followed by interval appendicectomy only if recurrent symptoms occur.",
                "Saudi surgical guidelines support non-operative conservative management for acute appendiceal inflammatory mass/phlegmon, reserving surgery for failed medical treatment."
            ),
            "HAAD / DHA": (
                "Enhanced Recovery After Surgery (ERAS) protocols in acute appendicectomy",
                "Early postoperative mobilization, multimodal opioid-sparing analgesia, and early oral fluid resumption facilitating same-day or next-day discharge.",
                "UAE surgical quality standards enforce ERAS pathways for laparoscopic appendicectomy, minimizing postoperative ileus and reducing narcotic dependence."
            ),
            "UHS MBBS": (
                "Gross and microscopic pathology of acute gangrenous and suppurative appendicitis",
                "Transmural neutrophilic infiltration penetrating through the muscularis propria into the subserosa, accompanied by vascular thrombosis and ischemic mucosal ulceration.",
                "Undergraduate pathology strictly defines acute appendicitis histologically: neutrophils must invade the muscularis propria; mucosal inflammation alone is insufficient."
            )
        }
    },

    # Domain 40: Mechanical Bowel Obstruction & Volvulus
    {
        "id": "domain_40_bowel_obstruction",
        "entity": "mechanical bowel obstruction and volvulus",
        "hallmark": "colicky abdominal pain, profuse bilious vomiting, abdominal distension, high-pitched tinkling bowel sounds, and failure to pass flatus or stool",
        "system": "Gastrointestinal",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Pathophysiology of third-space fluid sequestration and hypochloremic metabolic alkalosis",
                "Obstruction leading to intraluminal fluid accumulation, venous congestion, and prolonged emesis causing significant loss of gastric hydrochloric acid and volume contraction.",
                "Persistent proximal obstruction with vomiting causes hypokalemic, hypochloremic metabolic alkalosis with paradoxical aciduria as kidneys exchange hydrogen for sodium reabsorption."
            ),
            "Step 2 CK": (
                "Distinguishing adhesive small bowel obstruction from closed-loop strangulation",
                "Identification of fever, persistent localized severe pain, tachycardia, and leukocytosis indicating impending or established bowel ischemia/strangulation requiring immediate laparotomy.",
                "Uncomplicated adhesive SBO can be managed initially with nasogastric decompression and fluid resuscitation, but signs of strangulation (closed-loop) mandate emergency operative exploration."
            ),
            "Step 3": (
                "Water-soluble contrast (Gastrografin) challenge protocol in SBO",
                "Oral administration of 100 mL Gastrografin followed by abdominal radiograph at 8 to 24 hours; progression of contrast into the cecum predicts successful non-operative resolution.",
                "Gastrografin challenge serves dual diagnostic and therapeutic roles: drawing intraluminal water to reduce bowel edema while predicting need for surgery if contrast does not reach the colon within 24 hours."
            ),
            "PLAB / UKMLA": (
                "Sigmoid volvulus management with endoscopic detorsion and decompression",
                "Rigid or flexible sigmoidoscopy with flatus tube insertion for endoscopic decompression and untwisting of uncomplicated sigmoid volvulus.",
                "UK guidelines recommend endoscopic decompression with flatus tube placement as first-line therapy for non-gangrenous sigmoid volvulus, followed by elective semi-elective resection."
            ),
            "AMC": (
                "Cecal volvulus versus sigmoid volvulus radiographic differentiation",
                "Cecal volvulus demonstrating kidney-shaped or comma-shaped loop displaced to the left upper quadrant, requiring emergency laparotomy and right hemicolectomy.",
                "Australian surgical consensus distinguishes sigmoid volvulus ('coffee-bean' sign arising from pelvis) from cecal volvulus, which requires upfront surgical resection due to high perforation rates."
            ),
            "MCCQE": (
                "Strangulated inguinal or femoral hernia presenting as bowel obstruction",
                "Careful physical examination of all hernia orifices (inguinal, femoral, umbilical, incisional) in any patient presenting with symptoms of mechanical obstruction.",
                "Canadian medical objectives stress examining the groin in elderly patients with bowel obstruction; femoral hernias have a high incidence of strangulation requiring emergency surgery."
            ),
            "FCPS": (
                "Damage control laparotomy and temporary abdominal closure in gangrenous obstruction",
                "Resection of non-viable bowel without primary anastomosis, leaving the abdomen open with negative-pressure wound therapy for re-exploration at 24-48 hours.",
                "In patients with extensive bowel infarction, severe acidosis, and coagulopathy, damage control surgery with delayed reconstruction prevents intraoperative physiological collapse."
            ),
            "NLE": (
                "Radiological differentiation between small and large bowel obstruction",
                "Small bowel showing central loops with plicae circulares (valvulae conniventes traversing the full diameter); large bowel showing peripheral loops with haustra traversing only part of the width.",
                "National licensing curricula test plain abdominal radiographs: small bowel loops display central transverse plicae circulares spanning the full lumen width; colon shows peripheral haustra."
            ),
            "NEET PG": (
                "Coffee-bean sign and mesenteric swirl sign on computed tomography",
                "Sigmoid volvulus showing the pathognomonic closed-loop 'coffee-bean' sign with two air-filled compartments, and mesenteric twist ('whirl sign') on CT.",
                "NEET PG radiology and surgery emphasize the 'coffee-bean' sign of sigmoid volvulus, originating from the pelvis with apex pointing toward the right upper quadrant."
            ),
            "MRCP": (
                "Acute colonic pseudo-obstruction (Ogilvie syndrome) and neostigmine therapy",
                "Massive cecal dilatation (> 10-12 cm) without mechanical obstruction in hospitalized patients, treated with IV neostigmine under cardiac monitoring.",
                "MRCP clinical medicine tests Ogilvie syndrome: parasympathetic dysfunction treated with neostigmine (acetylcholinesterase inhibitor), requiring atropine at bedside for bradycardia."
            ),
            "MRCEM": (
                "Immediate nasogastric decompression and fluid resuscitation protocol",
                "Placement of a wide-bore (16-18 French) Salem sump nasogastric tube to low continuous suction and vigorous crystalloid rehydration.",
                "Emergency resuscitation in high-grade bowel obstruction prioritizes active NG decompression to prevent pulmonary aspiration and electrolyte-balanced fluid replacement."
            ),
            "SMLE": (
                "Management of gallstone ileus and Rigler triad",
                "Rigler triad on imaging: small bowel obstruction, pneumobilia (gas in biliary tree), and ectopic radiopaque gallstone in the right iliac fossa (terminal ileum).",
                "Saudi licensing scenarios test gallstone ileus resulting from cholecystoduodenal fistula, treated by emergency enterolithotomy to extract the impacted stone."
            ),
            "HAAD / DHA": (
                "Malignant large bowel obstruction and self-expanding metallic stenting (SEMS)",
                "Placement of an endoscopic self-expanding metallic stent as a bridge to elective oncologic surgery in obstructing left-sided colorectal cancer.",
                "UAE health standards utilize colonic stenting as a safe bridge to surgery in obstructing colorectal cancer, avoiding emergency stoma creation."
            ),
            "UHS MBBS": (
                "Pathophysiological stages of bowel strangulation and transmural infarction",
                "Venous occlusion leading to hemorrhagic congestion, progressive mucosal ischemia, bacterial translocation, and full-thickness transmural gangrene with perforation.",
                "Undergraduate pathology emphasizes that mechanical strangulation initially impedes low-pressure venous return while arterial inflow persists, producing marked hemorrhagic infarction."
            )
        }
    },

    # Domain 41: Acute Biliary Tract Emergencies
    {
        "id": "domain_41_acute_biliary",
        "entity": "acute cholecystitis and ascending cholangitis",
        "hallmark": "Charcot triad (fever, jaundice, right upper quadrant pain) progressing to Reynolds pentad with hypotension and altered mental status",
        "system": "Gastrointestinal",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of the cystic duct, Triangle of Calot, and critical view of safety",
                "Identification of the Triangle of Calot (bounded by cystic duct, common hepatic duct, and inferior liver surface) containing the cystic artery, requiring the critical view of safety.",
                "During laparoscopic cholecystectomy, obtaining Strasberg's Critical View of Safety (clearing hepatocystic triangle and detaching cystic plate) is mandatory to prevent common bile duct injury."
            ),
            "Step 2 CK": (
                "Ultrasound findings in acute cholecystitis and emergency ERCP indications",
                "Sonographic Murphy sign, gallbladder wall thickening > 4 mm, and pericholecystic fluid confirming cholecystitis; urgent ERCP decompression for ascending cholangitis.",
                "Tokyo Guidelines recommend urgent biliary decompression via endoscopic retrograde cholangiopancreatography (ERCP) within 24 hours for acute ascending cholangitis."
            ),
            "Step 3": (
                "Timing of laparoscopic cholecystectomy in acute cholecystitis",
                "Early laparoscopic cholecystectomy performed within 72 hours of symptom onset (or during the index hospital admission) to reduce overall complications and hospitalization.",
                "Clinical evidence supports early cholecystectomy over delayed elective surgery, as index admission operation minimizes hospital stays without increasing conversion rates."
            ),
            "PLAB / UKMLA": (
                "Tokyo Guidelines grading and management of acute cholangitis",
                "Prompt IV broad-spectrum antibiotics, crystalloid resuscitation, and emergency biliary drainage for moderate-to-severe (Grade II/III) acute cholangitis.",
                "UK practice adopts the Tokyo Guidelines 2018 (TG18): Grade III cholangitis features organ dysfunction requiring urgent ERCP biliary stenting or sphincterotomy."
            ),
            "AMC": (
                "Percutaneous cholecystostomy tube placement in high-risk surgical candidates",
                "Ultrasound-guided percutaneous transhepatic cholecystostomy drainage in critically ill or elderly septic patients unfit for general anesthesia.",
                "Australian guidelines recommend percutaneous cholecystostomy as a bridge or definitive therapy in septic patients with severe acute cholecystitis and prohibitive surgical risk."
            ),
            "MCCQE": (
                "Biliary colic versus acute cholecystitis clinical differentiation",
                "Biliary colic pain is episodic and resolves within 4-6 hours with normal inflammatory markers; cholecystitis pain is continuous, lasting > 6 hours with fever and leukocytosis.",
                "Canadian medical objectives emphasize distinguishing self-limited biliary colic from acute cholecystitis, where persistent cystic duct obstruction triggers transmural inflammation."
            ),
            "FCPS": (
                "Iatrogenic bile duct injury classification (Bismuth and Strasberg)",
                "Immediate intraoperative recognition of major common bile duct transection (Strasberg type E), managed by Roux-en-Y hepaticojejunostomy by an experienced hepatobiliary surgeon.",
                "Major bile duct transection requires specialist repair using a tension-free Roux-en-Y hepaticojejunostomy; primary end-to-end anastomosis carries unacceptably high stricture rates."
            ),
            "NLE": (
                "Clinical significance of Charcot triad and Reynolds pentad",
                "Charcot triad (fever, RUQ pain, jaundice) identifying acute cholangitis; progression to Reynolds pentad (adding hypotension and confusion) signifying life-threatening suppurative shock.",
                "National licensing curricula emphasize Reynolds pentad as a medical emergency requiring intensive care resuscitation and emergency endoscopic biliary decompression."
            ),
            "NEET PG": (
                "HIDA cholescintigraphy mechanism and failure of gallbladder visualization",
                "Technetium-99m labeled hepatic iminodiacetic acid (HIDA) excreted into bile; non-visualization of the gallbladder with normal bowel transit confirms cystic duct obstruction.",
                "NEET PG nuclear medicine and surgery identify HIDA cholescintigraphy as the most sensitive and specific diagnostic test for acute cholecystitis when ultrasound is equivocal."
            ),
            "MRCP": (
                "Primary Sclerosing Cholangitis (PSC) association with ulcerative colitis",
                "Multifocal intra- and extrahepatic bile duct strictures and dilatations ('beaded' appearance on MRCP) strongly linked to HLA-DRB1 and ulcerative colitis, carrying high cholangiocarcinoma risk.",
                "MRCP gastroenterology tests PSC: classic 'beaded' biliary tree on MRCP, elevated alkaline phosphatase in a patient with IBD, and annual screening for cholangiocarcinoma with CA 19-9."
            ),
            "MRCEM": (
                "Emergency stabilization of acute ascending cholangitis with septic shock",
                "Immediate crystalloid fluid challenge, IV piperacillin-tazobactam within 1 hour, norepinephrine titration for MAP >= 65 mm Hg, and immediate GI consultation for ERCP.",
                "In emergency care, ascending cholangitis presenting with Reynolds pentad carries near 100% mortality without immediate decompression; antibiotics alone cannot clear obstructed infected bile."
            ),
            "SMLE": (
                "Acalculous cholecystitis in critically ill ICU patients",
                "Severe gallbladder distension, thickened wall, and pericholecystic fluid without calculi in patients with extensive trauma, burns, sepsis, or prolonged total parenteral nutrition.",
                "Saudi clinical practice recognizes acalculous cholecystitis in intensive care patients driven by gallbladder stasis and ischemia, treated with prompt percutaneous cholecystostomy."
            ),
            "HAAD / DHA": (
                "Choledocholithiasis risk stratification and pre-cholecystectomy ERCP",
                "High-risk criteria (common bile duct stone on ultrasound, total bilirubin > 4 mg/dL, or cholangitis) warranting preoperative ERCP stone extraction.",
                "UAE health standards apply ASGE risk stratification: high-risk choledocholithiasis requires upfront ERCP, while intermediate risk warrants pre- or intraoperative MRCP or cholangiogram."
            ),
            "UHS MBBS": (
                "Pathology of cholesterol versus pigment gallstones",
                "Yellow crystalline cholesterol stones formed by bile supersaturated with cholesterol; black pigment stones composed of calcium bilirubinate associated with chronic hemolysis.",
                "Undergraduate pathology classifies gallstones: radiolucent cholesterol stones arise from excess biliary cholesterol and stasis; radiopaque black pigment stones occur in sickle cell and thalassemia."
            )
        }
    },

    # Domain 42: Acute Aortic Syndromes & Ruptured AAA
    {
        "id": "domain_42_aortic_syndromes",
        "entity": "acute aortic dissection and ruptured abdominal aortic aneurysm",
        "hallmark": "sudden-onset tearing chest pain radiating to the interscapular region, asymmetric bilateral arm blood pressure difference > 20 mm Hg, and widened mediastinum",
        "system": "Cardiovascular",
        "ref_key": "who_trauma",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Cystic medial degeneration and intimal tear pathophysiology",
                "Intimal tear allowing systemic arterial blood to enter the aortic media, cleaving the laminar planes to create a false lumen driven by cystic medial necrosis and elastolysis.",
                "Chronic hypertension and genetic connective tissue disorders (Marfan syndrome fibrillin-1 mutations, Ehlers-Danlos COL3A1) weaken the aortic media, precipitating dissection."
            ),
            "Step 2 CK": (
                "Stanford classification and immediate medical vs surgical pathway",
                "Stanford Type A (involving ascending aorta) requiring emergency open surgical repair; Stanford Type B (descending aorta only) managed medically with anti-impulse therapy.",
                "Type A dissection carries 1-2% hourly mortality from tamponade or aortic rupture, requiring emergent cardiothoracic repair; uncomplicated Type B is managed in ICU with medical pressure control."
            ),
            "Step 3": (
                "Targeted anti-impulse therapy using intravenous beta-blockers",
                "Initial intravenous beta-blocker (esmolol or labetalol) to decrease aortic shear stress (dP/dt) and heart rate < 60/min before administering vasodilators like nicardipine.",
                "Vasodilators must never be administered before beta-blockade, as reflex tachycardia increases the force of left ventricular ejection (dP/dt), worsening dissection propagation."
            ),
            "PLAB / UKMLA": (
                "Emergency ultrasound identification of ruptured AAA and NHS screening program",
                "Bedside point-of-care ultrasound demonstrating infrarenal aortic diameter > 5.5 cm with surrounding hematoma, mandating immediate vascular surgical intervention.",
                "UK NHS Abdominal Aortic Aneurysm Screening Programme invites men at age 65; aneurysms >= 5.5 cm or expanding > 1 cm/year require elective vascular repair."
            ),
            "AMC": (
                "Permissive hypotension in ruptured abdominal aortic aneurysm resuscitation",
                "Targeting a systolic blood pressure of 80 to 90 mm Hg (mean arterial pressure 50-60 mm Hg) to maintain cerebral perfusion while preventing clot disruption prior to surgery.",
                "Australian trauma and vascular protocols enforce permissive hypotension for ruptured AAA, avoiding aggressive fluid resuscitation that exacerbates internal hemorrhage."
            ),
            "MCCQE": (
                "Complications of Type A dissection including acute aortic regurgitation and cardiac tamponade",
                "Retrograde dissection into the aortic root causing acute severe aortic valve insufficiency, coronary ostial occlusion (inferior STEMI), or hemopericardium and tamponade.",
                "Canadian qualifying objectives emphasize that acute aortic dissection can present as an inferior STEMI (right coronary involvement); thrombolysis is catastrophic and fatal."
            ),
            "FCPS": (
                "Emergency endovascular aneurysm repair (EVAR) versus open repair for ruptured AAA",
                "Emergency endovascular aneurysm repair (rEVAR) under local/regional anesthesia when anatomically suitable, reducing perioperative morbidity compared to open laparotomy.",
                "Modern vascular surgery utilizes EVAR with bifurcated graft placement for ruptured AAA when preoperative CTA shows suitable proximal infrarenal aortic neck anatomy."
            ),
            "NLE": (
                "Triad of ruptured abdominal aortic aneurysm",
                "Classic clinical triad: severe sudden abdominal or back pain, pulsatile expansile abdominal mass, and hypotension or circulatory collapse.",
                "National licensing curricula test the ruptured AAA triad; elderly patients presenting with acute back pain and hypotension must be assumed to have ruptured AAA until ruled out."
            ),
            "NEET PG": (
                "Debakey versus Stanford classification systems of aortic dissection",
                "DeBakey Type I (ascending + descending), Type II (ascending only), Type III (descending only); Stanford Type A covers DeBakey I and II, Stanford Type B corresponds to DeBakey III.",
                "NEET PG cardiovascular surgery tests the correlation between Stanford and DeBakey systems, where any involvement of the ascending aorta defines Stanford Type A."
            ),
            "MRCP": (
                "Complicated Stanford Type B dissection and Thoracic Endovascular Aortic Repair (TEVAR)",
                "Indications for TEVAR in Type B dissection: malperfusion syndrome (renal, mesenteric, lower limb ischemia), persistent refractory pain, refractory hypertension, or rapid aneurysm expansion.",
                "MRCP vascular guidelines indicate TEVAR for complicated Type B dissection, covering the primary entry tear to induce false lumen thrombosis and restore true lumen perfusion."
            ),
            "MRCEM": (
                "Emergency department diagnostic pathway and non-contrast CT versus CTA",
                "Immediate computed tomography angiography (CTA) of the chest, abdomen, and pelvis with ECG gating as the definitive imaging modality of choice in stable patients.",
                "In unstable patients unable to travel to CT scanner, bedside transesophageal echocardiography or point-of-care ultrasound should be performed directly in resuscitation bay."
            ),
            "SMLE": (
                "Thresholds for elective abdominal aortic aneurysm repair",
                "Elective repair indicated for asymptomatic infrarenal AAA diameter >= 5.5 cm in men, >= 5.0 cm in women, or rapid expansion > 0.5 cm in 6 months.",
                "Saudi cardiovascular guidelines recommend elective repair based on diameter and growth rate, balancing the risk of rupture against operative mortality."
            ),
            "HAAD / DHA": (
                "Iatrogenic catheter-induced aortic dissection during coronary angiography",
                "Immediate recognition of vigorous contrast staining along the aortic root during cardiac catheterization, requiring prompt catheter withdrawal and surgical consultation.",
                "UAE interventional cardiology quality metrics track catheter-induced dissection, requiring immediate imaging and stabilization to prevent coronary occlusion."
            ),
            "UHS MBBS": (
                "Gross pathology of abdominal aortic aneurysm and mural thrombus",
                "Fusiform dilation of the infrarenal abdominal aorta with intraluminal laminated mural thrombus, thinning of the aortic wall, and extensive atheromatous ulceration.",
                "Undergraduate pathology emphasizes that AAA most commonly occurs between the renal arteries and aortic bifurcation, driven by advanced atherosclerosis and matrix metalloproteinases."
            )
        }
    },

    # Domain 43: Major Trauma & ATLS Resuscitation
    {
        "id": "domain_43_major_trauma",
        "entity": "major poly-trauma and ATLS primary survey",
        "hallmark": "unresponsive blunt trauma patient with tracheal deviation to the left, absent breath sounds on the right, distended neck veins, and profound hypotension",
        "system": "General Principles",
        "ref_key": "atls_trauma",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of tension pneumothorax and compression of the superior and inferior vena cava",
                "One-way valve mechanism trapping intrapleural air, shifting mediastinum to the opposite side and compressing the inferior vena cava, severely reducing venous return and cardiac output.",
                "Tension pneumothorax produces obstructive shock primarily by mechanical compression of the thoracic great veins (IVC/SVC) and right atrium, collapsing ventricular preload."
            ),
            "Step 2 CK": (
                "Immediate needle decompression before chest tube insertion",
                "Immediate emergency needle decompression using a large-bore cannula (14-gauge) in the 5th intercostal space anterior to the mid-axillary line, followed by formal tube thoracostomy.",
                "ATLS 10th edition updates the primary needle decompression site from the 2nd intercostal space midclavicular line to the 5th intercostal space slightly anterior to midaxillary line."
            ),
            "Step 3": (
                "Massive transfusion protocol (MTP) and balanced blood product ratios",
                "Activation of MTP administering packed red blood cells, fresh frozen plasma, and platelets in a balanced 1:1:1 ratio alongside early tranexamic acid (TXA) within 3 hours.",
                "Evidence-based resuscitation (PROPPR trial) proves that 1:1:1 balanced ratio transfusion reduces 24-hour exsanguination mortality and prevents acute trauma coagulopathy."
            ),
            "PLAB / UKMLA": (
                "Tranexamic acid (TXA) in major trauma (CRASH-2 trial evidence)",
                "Intravenous tranexamic acid 1 g bolus over 10 minutes followed by 1 g infusion over 8 hours administered within 3 hours of injury for significant bleeding.",
                "UK trauma networks mandate TXA administration within 3 hours of trauma; giving TXA beyond 3 hours increases mortality due to paradoxical thrombotic complications."
            ),
            "AMC": (
                "Focused Assessment with Sonography for Trauma (FAST) four acoustic windows",
                "Bedside ultrasound evaluating hepatorenal (Morison pouch), splenorenal, suprapubic (pelvic), and pericardial windows for free intraperitoneal or pericardial fluid.",
                "Australian trauma protocols rely on FAST to direct unstable blunt trauma patients: positive free fluid with hypotension mandates immediate emergency exploratory laparotomy."
            ),
            "MCCQE": (
                "Traumatic brain injury management and cerebral perfusion pressure optimization",
                "Maintaining mean arterial pressure >= 80 mm Hg and systolic BP >= 100-110 mm Hg to support cerebral perfusion pressure (CPP = MAP - ICP) above 60 mm Hg.",
                "Canadian neurotrauma guidelines prioritize avoiding secondary brain insults (hypotension with SBP < 100 mm Hg and hypoxia with SpO2 < 90%), which double TBI mortality."
            ),
            "FCPS": (
                "Damage control laparotomy (DCL) triad of death management",
                "Rapid intraoperative packing and temporary abdominal closure to interrupt the lethal triad of hypothermia, severe metabolic acidosis, and coagulopathy.",
                "DCL avoids definitive prolonged reconstruction; its sole goal is rapid control of surgical hemorrhage and contamination followed by resuscitation in the intensive care unit."
            ),
            "NLE": (
                "ATLS Primary Survey sequential mnemonic ABCDE",
                "Systematic priority order: Airway maintenance with cervical spine protection, Breathing and ventilation, Circulation with hemorrhage control, Disability, and Exposure/Environment.",
                "National licensing curricula emphasize that trauma evaluation must follow the rigid ABCDE sequence without proceeding to subsequent steps until the preceding step is secured."
            ),
            "NEET PG": (
                "Beck triad and pulsus paradoxus in cardiac tamponade",
                "Beck triad: muffled heart sounds, jugular venous distension, and hypotension; confirmed by pericardial effusion on subxiphoid FAST and treated with pericardiocentesis.",
                "NEET PG trauma questions test Beck triad and pulsus paradoxus (> 10 mm Hg drop in systolic blood pressure during inspiration), pathognomonic of cardiac tamponade."
            ),
            "MRCP": (
                "Trauma-induced coagulopathy (TIC) and viscoelastic testing (TEG/ROTEM)",
                "Thromboelastography (TEG) or rotational thromboelastometry (ROTEM) guiding targeted administration of cryoprecipitate (fibrinogen), platelets, and factor concentrates.",
                "MRCP acute medicine emphasizes goal-directed transfusion guided by viscoelastic assays, identifying early hyperfibrinolysis and hypofibrinogenemia in polytrauma."
            ),
            "MRCEM": (
                "Pelvic fracture stabilization with pelvic binder and external compression",
                "Immediate application of a commercial pelvic circumferential compression device (binder) centered over the greater trochanters to reduce pelvic volume and tamponade bleeding.",
                "In open-book pelvic fractures (AP compression), life-threatening bleeding is retroperitoneal venous; prompt binder placement closes the pelvic ring and reduces hemorrhage."
            ),
            "SMLE": (
                "Cervical spine clearance protocols (NEXUS and Canadian C-Spine Rule)",
                "Clearing cervical spine clinically only if patient is alert, non-intoxicated, has no midline cervical tenderness, no distracting injuries, and no focal neurological deficits.",
                "Saudi emergency protocols use NEXUS criteria: any violation requires multi-detector CT cervical spine from occiput to T1 with sagittal and coronal reconstructions."
            ),
            "HAAD / DHA": (
                "Pre-hospital trauma triage and destination policies for Level 1 trauma centers",
                "Direct transport of major trauma patients (GCS <= 13, SBP < 90, RR < 10 or > 29, flail chest, or pelvic instability) to designated Level 1 trauma facilities.",
                "UAE trauma registry guidelines mandate bypassing non-specialized hospitals to ensure polytrauma patients receive trauma team activation at accredited trauma centers."
            ),
            "UHS MBBS": (
                "Pathology of blast injuries (primary, secondary, tertiary, and quaternary)",
                "Primary blast injury caused by supersonic shock wave overpressure damaging air-fluid interfaces, resulting in tympanic membrane rupture, blast lung, and bowel perforation.",
                "Undergraduate forensic pathology and surgery categorize blast trauma: primary injury directly affects gas-containing viscera (lungs, ears, gut) due to barotrauma."
            )
        }
    },

    # Domain 44: Thermal Burns & Inhalation Injury
    {
        "id": "domain_44_burns",
        "entity": "thermal burns and acute inhalation injury",
        "hallmark": "singed facial hair, carbonaceous sputum, progressive hoarseness, stridor, and full-thickness circumferential burns over thirty percent of total body surface area",
        "system": "Dermatology",
        "ref_key": "who_burns",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Systemic capillary leak and Jackson burn wound zones",
                "Massive release of histamine, bradykinin, and prostaglandins causing systemic capillary hyperpermeability; local burn wound features zone of coagulation, stasis, and hyperemia.",
                "Burns > 20% TBSA induce systemic capillary leakage leading to intravascular fluid depletion, marked tissue edema, and burn shock requiring massive crystalloid resuscitation."
            ),
            "Step 2 CK": (
                "Parkland formula fluid resuscitation and urine output titration",
                "Calculating 4 mL x weight (kg) x %TBSA (second- and third-degree only) of lactated Ringer solution over 24 hours (half given in first 8 hours), titrated to urine output 0.5 mL/kg/h.",
                "The Parkland formula estimates initial fluid requirements; fluid titration must be continuously guided by physiological response (adult target urine output 0.5 to 1.0 mL/kg/h)."
            ),
            "Step 3": (
                "Carbon monoxide and cyanide toxicity in closed-space smoke inhalation",
                "Administration of 100% high-flow normobaric oxygen for carbon monoxide poisoning (carboxyhemoglobin), and intravenous hydroxocobalamin for concomitant cyanide toxicity.",
                "Smoke inhalation victims from enclosed structural fires face co-intoxication: carboxyhemoglobin reduces oxygen delivery; cyanide inhibits mitochondrial cytochrome oxidase producing lactic acidosis."
            ),
            "PLAB / UKMLA": (
                "Early endotracheal intubation indications in thermal inhalation injury",
                "Immediate prophylactic endotracheal intubation before upper airway edema worsens in patients with facial burns, singed nasal hairs, carbonaceous sputum, and stridor.",
                "UK burn guidelines mandate early intubation before laryngeal edema completely obstructs the airway; waiting for blood gas abnormalities can lead to catastrophic airway loss."
            ),
            "AMC": (
                "Emergency escharotomy for circumferential full-thickness torso and limb burns",
                "Performance of longitudinal mid-axial escharotomy through the insensitive full-thickness burn eschar to relieve thoracic restriction or extremity compartment syndrome.",
                "Circumferential full-thickness burns form a leathery, unyielding eschar; emergency escharotomy is life-saving to restore ventilation (torso) or arterial pulses (extremities)."
            ),
            "MCCQE": (
                "Rule of Nines for calculating total body surface area (%TBSA)",
                "Head 9%, each upper limb 9%, anterior torso 18%, posterior torso 18%, each lower limb 18%, and perineum 1% (excluding superficial first-degree erythema).",
                "Canadian medical objectives test the Rule of Nines: accurate TBSA calculation is essential because overestimation leads to fluid overload (pulmonary edema) and underestimation causes shock."
            ),
            "FCPS": (
                "Early tangential excision and autologous skin grafting",
                "Early surgical excision of necrotic burn eschar down to viable bleeding dermis or fascia within 3 to 7 days, followed by split-thickness skin autografting.",
                "Modern surgical management of deep partial- and full-thickness burns prioritizes early tangential excision and coverage, dramatically reducing burn wound sepsis and mortality."
            ),
            "NLE": (
                "Topical antimicrobial agents for burn wounds and their adverse effects",
                "Silver sulfadiazine (causes transient leukopenia), mafenide acetate (penetrates eschar but causes metabolic acidosis via carbonic anhydrase inhibition), and silver nitrate.",
                "National licensing curricula test topical burn agents: Mafenide acetate causes metabolic acidosis and painful application; Silver sulfadiazine is painless but causes neutropenia."
            ),
            "NEET PG": (
                "Curling ulcer pathophysiology and stress ulcer prophylaxis",
                "Severe burn trauma inducing severe gastric mucosal ischemia due to hypovolemia, leading to acute deep perforating stress ulcers in the stomach and duodenum (Curling ulcer).",
                "NEET PG pathology and surgery distinguish Curling ulcer (acute stress ulcer resulting from severe burn trauma) from Cushing ulcer (associated with severe head injury and hyperacidity)."
            ),
            "MRCP": (
                "Invasive burn wound sepsis and Pseudomonas aeruginosa bacteremia",
                "Systemic signs of infection, black discoloration of previously healthy burn margins, and ecthyma gangrenosum lesions caused by Pseudomonas aeruginosa requiring IV antipseudomonals.",
                "MRCP clinical infectious disease highlights burn wound sepsis: Pseudomonas aeruginosa is a major pathogen producing elastase and exotoxin A, causing systemic sepsis and graft loss."
            ),
            "MRCEM": (
                "Initial emergency stabilization and avoidance of hypothermia in major burns",
                "Stopping the burning process, removing smoldering clothing, covering wounds with clean dry sheets, and maintaining environmental heating to prevent hypothermia.",
                "Emergency resuscitation in major burns cautions against applying cold wet dressings or ice, which induce rapid hypothermia, vasoconstriction, and deepen burn injury."
            ),
            "SMLE": (
                "Chemical and electrical burn injury specific management protocols",
                "Copious irrigation with water for chemical burns (at least 30-60 minutes); continuous telemetry monitoring and screening for rhabdomyolysis in high-voltage electrical injuries.",
                "Saudi burn guidelines emphasize that electrical burns produce extensive deep muscle necrosis and myoglobinuria requiring aggressive fluid resuscitation targeting urine output 1-2 mL/kg/h."
            ),
            "HAAD / DHA": (
                "Transfer criteria to a designated specialized burn center",
                "Transferring partial-thickness burns >= 10% TBSA, burns involving face, hands, feet, genitalia, perineum, major joints, electrical/chemical burns, or inhalation injury.",
                "UAE health authority standards mandate immediate stabilization and protocolized transfer to specialized burn centers for patients meeting American Burn Association transfer criteria."
            ),
            "UHS MBBS": (
                "Histological depth classification of burn injury",
                "First-degree (epidermis only), second-degree superficial partial (papillary dermis with blisters), deep partial (reticular dermis), third-degree full-thickness (entire dermis and appendages destroyed).",
                "Undergraduate pathology and forensic medicine classify burn depth: third-degree burns destroy pain receptors (anesthetic to light touch) and require skin grafting to heal."
            )
        }
    }
]
