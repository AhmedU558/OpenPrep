"""
Mega Data Part V: Domains 133 to 138 (Upper GI Surgery, HPB Surgery, Colorectal Surgery, Bariatric Surgery, Endocrine Surgery, Soft Tissue Sarcomas)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_V = [
    # Domain 133: Upper GI Surgery & Esophageal / Gastric Malignancy
    {
        "id": "domain_133_upper_gi_surgery",
        "entity": "Esophageal carcinoma, gastric adenocarcinoma, and surgical resection",
        "hallmark": "progressive dysphagia first to solids then liquids, unintended weight loss, early satiety, Virchow node, or postprandial epigastric pain",
        "system": "Gastrointestinal",
        "ref_key": "surgical_oncology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Esophageal cancer histological subtype epidemiology and molecular oncogenesis",
                "Adenocarcinoma arising from Barrett metaplasia in the distal esophagus linked to GERD and obesity, versus squamous cell carcinoma in proximal/mid-esophagus linked to alcohol and tobacco.",
                "Intestinal metaplasia with goblet cells replaces stratified squamous epithelium under acid reflux; diffuse gastric carcinoma involves CDH1 mutations causing loss of cell-cell adhesion molecule E-cadherin."
            ),
            "Step 2 CK": (
                "Staging and neoadjuvant chemoradiation (CROSS trial) before esophagectomy",
                "Neoadjuvant chemoradiation therapy (carboplatin and paclitaxel with concurrent radiotherapy) followed by planned transthoracic (Ivor Lewis) esophagectomy for locally advanced esophageal cancer.",
                "Multimodal CROSS trial protocol significantly improves complete microscopic resection (R0) rates and pathological complete response, conferring a definitive overall survival advantage over surgery alone."
            ),
            "Step 3": (
                "Management of early vs late dumping syndrome following gastric resection",
                "Dietary modification with small frequent meals, low simple carbohydrates, high protein, and separation of solids and liquids, supplemented by acarbose or octreotide for refractory symptoms.",
                "Early dumping results from rapid hyperosmolar chyme entry into the jejunum causing fluid shifts and vasomotor collapse; late dumping involves rapid glucose absorption triggering rebound hyperinsulinemic hypoglycemia."
            ),
            "PLAB / UKMLA": (
                "NICE urgent suspected cancer referral criteria for persistent upper GI symptoms",
                "Urgent direct-access upper gastrointestinal endoscopy within 2 weeks for any patient presenting with dysphagia or age >= 55 years with persistent dyspepsia and weight loss.",
                "NICE NG12 guidelines mandate 2-week-wait endoscopy referral for dysphagia of any age, ensuring early detection of resectable luminal esophageal or gastric malignancies."
            ),
            "AMC": (
                "Preoperative staging laparoscopy for locally advanced gastric cancer",
                "Staging laparoscopy with peritoneal washings prior to neoadjuvant therapy or definitive resection to exclude radiologically occult peritoneal micrometastases.",
                "Computed tomography has low sensitivity for subtle peritoneal carcinomatosis (< 5 mm); detecting occult peritoneal disease spares patients futile morbid laparotomies and directs care toward systemic therapy."
            ),
            "MCCQE": (
                "Post-esophagectomy anastomotic leak: clinical signs and diagnostic confirmation",
                "Unexplained persistent tachycardia, new atrial fibrillation, pleural effusion with dark drain output, and mediastinal widening confirmed on CT esophagogram with water-soluble contrast.",
                "Tachycardia (> 100-120 bpm) is the earliest and most sensitive sign of intrathoracic anastomotic dehiscence; prompt CT with oral Gastrografin identifies extravasation and guides urgent intervention."
            ),
            "FCPS": (
                "D2 lymphadenectomy in radical gastrectomy for gastric adenocarcinoma",
                "En bloc resection of perigastric lymph nodes (stations 1 to 6) and celiac artery branch nodal basins (stations 7 to 12) without routine splenectomy or pancreatectomy.",
                "CPSP and international surgical oncological consensus confirm D2 lymph node dissection yields superior locoregional disease control and accurate pathological staging when performed in high-volume specialized units."
            ),
            "NLE": (
                "Endoscopic biopsy protocol for suspicious gastric mucosal ulcerations",
                "Obtaining multiple mucosal biopsies (at least 6 to 8 biopsies) from the ulcer margin and base to exclude malignancy in every non-healing gastric ulcer.",
                "Gastric ulcers carry a 4-7% risk of underlying adenocarcinoma; visual endoscopic inspection alone cannot reliably distinguish benign peptic ulcer disease from malignant ulcerated carcinoma."
            ),
            "NEET PG": (
                "Signet ring cell gastric adenocarcinoma pathology and diffuse linitis plastica",
                "Loss of E-cadherin expression (CDH1 mutation) leading to diffusely infiltrative signet ring cells containing abundant intracellular mucin displacing the nucleus to the cell periphery.",
                "Diffuse-type gastric cancer causes fibrous thickening and rigidity of the entire stomach wall ('leather bottle' stomach or linitis plastica); it is not associated with H. pylori or antecedent gastritis."
            ),
            "MRCP": (
                "Gastrointestinal stromal tumor (GIST) immunohistochemistry and tyrosine kinase therapy",
                "Immunohistochemical positivity for KIT (CD117) and DOG1 driven by activating mutations in c-KIT or PDGFRA, treated with the selective tyrosine kinase inhibitor imatinib.",
                "GISTs arise from interstitial cells of Cajal in the muscularis propria; adjuvant or neoadjuvant imatinib dramatically improves progression-free survival in high-risk or unresectable tumors."
            ),
            "MRCEM": (
                "Boerhaave syndrome (spontaneous esophageal perforation) emergency identification",
                "Mackler triad (repeated forceful vomiting, severe lower retrosternal chest pain, and subcutaneous emphysema) accompanied by left hydropneumothorax, confirmed with water-soluble contrast esophagogram.",
                "Barogenic full-thickness tear typically occurs in the left posterolateral distal esophagus; early surgical repair within 24 hours is paramount to avert lethal mediastinitis and septic shock."
            ),
            "SMLE": (
                "Perioperative nutritional prehabilitation and enteral feeding in oncologic surgery",
                "Implementing preoperative oral nutritional supplementation with immunonutrition (arginine, omega-3, nucleotides) for 7 days before major upper GI oncologic resection.",
                "Preoperative nutritional optimization significantly reduces postoperative infectious complications, wound dehiscence, and anastomotic failure in malnourished cancer patients."
            ),
            "HAAD / DHA": (
                "Helicobacter pylori eradication as definitive therapy for gastric MALT lymphoma",
                "Triple or quadruple anti-Helicobacter pylori antimicrobial eradication therapy as first-line curative treatment for stage IE low-grade gastric MALT lymphoma.",
                "Gastric MALT lymphoma is an antigen-driven B-cell proliferation dependent on chronic H. pylori stimulation; complete histological tumor regression occurs in > 75% of localized cases following bacterial eradication."
            ),
            "UHS MBBS": (
                "Clinical distinction between mechanical obstruction and motility disorder in dysphagia",
                "Progressive dysphagia initially limited to solid foods progressing to liquids indicates mechanical obstruction (carcinoma, stricture), whereas simultaneous solid and liquid dysphagia indicates motility disorder (achalasia).",
                "Luminal structural narrowing impairs solid bolus transit while fluids pass freely until severe stenosis occurs; neuromuscular incoordination impairs liquid and solid bolus transport simultaneously."
            )
        }
    },

    # Domain 134: Hepato-Pancreato-Biliary (HPB) Surgery & Whipple Procedure
    {
        "id": "domain_134_hpb_surgery",
        "entity": "Pancreatic ductal adenocarcinoma, periampullary tumors, and pancreaticoduodenectomy",
        "hallmark": "painless jaundice, palpable non-tender gallbladder (Courvoisier sign), pruritus, acholic stools, dark tea-colored urine, weight loss, or dull epigastric pain radiating to the back",
        "system": "Gastrointestinal",
        "ref_key": "hpb_surgery",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics of pancreatic ductal adenocarcinoma: KRAS and SMAD4",
                "Activating point mutations in codon 12 of the KRAS oncogene combined with inactivating mutations in CDKN2A, TP53, and SMAD4 (DPC4) tumor suppressor genes.",
                "Over 90% of pancreatic carcinomas harbor constitutive KRAS GTPase activation driving downstream MAPK/ERK signaling; loss of SMAD4 correlates with widespread metastatic dissemination."
            ),
            "Step 2 CK": (
                "Diagnostic triphasic CT imaging and double-duct sign in pancreatic cancer",
                "Multidetector triphasic pancreas-protocol CT demonstrating an ill-defined hypoattenuating mass in the pancreatic head with simultaneous dilation of the common bile duct and main pancreatic duct.",
                "The double-duct sign on cross-sectional imaging strongly suggests a pancreatic head or periampullary neoplasm compressing both the biliary tree and the duct of Wirsung, requiring surgical oncology consultation."
            ),
            "Step 3": (
                "Pancreatic exocrine insufficiency and enzyme replacement post-Whipple procedure",
                "Prescribing enteric-coated pancreatic enzyme replacement therapy (lipase, protease, amylase) taken during meals, combined with proton pump inhibitor therapy to optimize duodenal pH.",
                "Pancreaticoduodenectomy reduces functional parenchyma and disrupts gastrin-cholecystokinin feedback loops; inadequate enzyme dosing leads to profound malabsorption, steatorrhea, and weight loss."
            ),
            "PLAB / UKMLA": (
                "Postoperative pancreatic fistula (POPF) diagnostic criteria by ISGPS definition",
                "Measuring drain fluid amylase concentration > 3 times the upper normal institutional serum amylase limit on or after postoperative day 3.",
                "International Study Group of Pancreatic Surgery (ISGPS) consensus defines biochemical leak vs clinically relevant POPF (Grade B/C) causing sepsis, prolonged drain placement, or re-exploration."
            ),
            "AMC": (
                "Vascular resectability criteria for pancreatic head adenocarcinoma",
                "Classifying tumors as resectable when there is absence of distant metastases, no celiac axis or SMA contact, and <= 180-degree abutment of the superior mesenteric vein or portal vein without contour deformity.",
                "Arterial encasement (> 180 degrees) of the SMA or celiac axis denotes locally advanced unresectable disease; venous involvement alone may undergo en bloc resection with vascular reconstruction."
            ),
            "MCCQE": (
                "Acute cholangitis in malignant biliary obstruction: Charcot triad and Reynolds pentad",
                "Emergency resuscitation with intravenous broad-spectrum antibiotics and urgent endoscopic retrograde cholangiopancreatography (ERCP) for biliary decompression and stenting.",
                "Reynolds pentad (fever, jaundice, RUQ pain, hypotension, and altered mental status) indicates suppurative ascending cholangitis requiring emergent decompression within 12-24 hours to prevent fatal septic shock."
            ),
            "FCPS": (
                "Whipple procedure (pancreaticoduodenectomy) reconstruction sequence",
                "Performing en bloc resection of pancreatic head, duodenum, proximal jejunum, and gallbladder, followed by pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy/duodenojejunostomy.",
                "The pancreatic anastomosis is the critical Achilles' heel of the procedure; end-to-side duct-to-mucosa pancreaticojejunostomy minimizes leak rates and preserves enteral reconstruction integrity."
            ),
            "NLE": (
                "Courvoisier law and clinical distinction in obstructive jaundice",
                "A palpable, enlarged, non-tender gallbladder in the presence of painless jaundice indicates malignant obstruction of the biliary tree rather than gallstone disease.",
                "Chronic gallstone inflammation causes gallbladder wall fibrotic contracture, preventing significant dilation; gradual distal malignant obstruction causes high biliary backpressure and painless gallbladder distension."
            ),
            "NEET PG": (
                "Tumor markers and IgG4 distinction in autoimmune pancreatitis vs carcinoma",
                "Marked elevation of serum IgG4 (> 2 times upper limit) and sausage-shaped diffuse pancreatic enlargement on imaging indicating autoimmune pancreatitis rather than adenocarcinoma.",
                "Type 1 autoimmune pancreatitis mimics pancreatic carcinoma clinically and radiologically; it demonstrates rapid morphological and functional resolution with oral systemic corticosteroid therapy."
            ),
            "MRCP": (
                "Biliary stenting in palliative management of unresectable pancreatic cancer",
                "Deploying a self-expanding metal stent (SEMS) across the malignant common bile duct stricture via ERCP to achieve long-term biliary patency and relieve pruritus.",
                "Metal stents provide significantly longer patency rates and fewer re-interventions compared to plastic stents in patients with expected survival exceeding 3-4 months."
            ),
            "MRCEM": (
                "Sentinel bleed and post-pancreatectomy hemorrhage (PPH) emergency management",
                "Immediate computed tomography angiography (CTA) and transcatheter arterial embolization (TAE) for delayed gastrointestinal or drain bleeding from the gastroduodenal artery stump.",
                "Delayed hemorrhage (> 24 hours post-op) often stems from arterial erosion by a pancreatic leak; a minor herald bleed warrants urgent endovascular intervention before cataclysmic exsanguinating hemorrhage."
            ),
            "SMLE": (
                "Neoadjuvant FOLFIRINOX for borderline resectable pancreatic adenocarcinoma",
                "Administering neoadjuvant multi-agent chemotherapy (fluorouracil, leucovorin, irinotecan, oxaliplatin) to downstage vascular involvement and eradicate occult micrometastases prior to resection.",
                "Modern high-volume consensus protocols achieve higher R0 resection margins and median survival exceeding 30 months in borderline resectable tumors treated with induction systemic chemotherapy."
            ),
            "HAAD / DHA": (
                "Surveillance protocols for high-risk individuals with familial pancreatic cancer risk",
                "Annual magnetic resonance cholangiopancreatography (MRCP) and endoscopic ultrasound (EUS) beginning at age 50 (or 10 years earlier than youngest affected relative) in BRCA2 or CDKN2A carriers.",
                "International Cancer of the Pancreas Screening (CAPS) guidelines recommend combined MRCP/EUS surveillance to detect high-grade pancreatic intraepithelial neoplasia (PanIN) or T1N0 invasive carcinomas."
            ),
            "UHS MBBS": (
                "Differential diagnosis of periampullary neoplasms by anatomic origin",
                "Distinguishing pancreatic head carcinoma, ampullary carcinoma, distal common bile duct cholangiocarcinoma, and duodenal adenocarcinoma based on location and clinical behavior.",
                "Ampullary carcinoma has the most favorable prognosis among periampullary tumors because early intraluminal biliary obstruction prompts earlier clinical presentation with fluctuating jaundice."
            )
        }
    },

    # Domain 135: Colorectal Surgery, IBD Surgical Management & Diverticular Disease
    {
        "id": "domain_135_colorectal_surgery",
        "entity": "Colorectal adenocarcinoma, ulcerative colitis surgical management, and complicated diverticulitis",
        "hallmark": "change in bowel habits, hematochezia or occult GI bleeding, tenesmus, iron deficiency anemia in elderly male/postmenopausal female, or acute left lower quadrant peritonitis",
        "system": "Gastrointestinal",
        "ref_key": "colorectal",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Adenoma-carcinoma sequence versus microsatellite instability molecular pathways",
                "Sequential mutation of APC tumor suppressor (chromosomal instability) followed by KRAS activation and TP53 loss, versus DNA mismatch repair gene mutations (MLH1, MSH2) causing microsatellite instability.",
                "The classic Vogelstein CIN pathway accounts for 85% of sporadic colorectal cancers; microsatellite instability (MSI-H) characterizes Lynch syndrome and sporadic hypermethylation of the MLH1 promoter."
            ),
            "Step 2 CK": (
                "Total mesorectal excision (TME) and neoadjuvant therapy for locally advanced rectal cancer",
                "Neoadjuvant chemoradiation (or total neoadjuvant therapy - TNT) followed by radical sharp total mesorectal excision (TME) with clear circumferential resection margins (> 1 mm).",
                "Rectal cancer carries high locoregional recurrence risks; sharp dissection along the embryological holy plane of Heald removes the intact mesorectal envelope containing draining lymph nodes and tumor deposits."
            ),
            "Step 3": (
                "Surgical management of refractory ulcerative colitis: restorative proctocolectomy",
                "Restorative proctocolectomy with ileal pouch-anal anastomosis (IPAA / J-pouch) as the definitive curative surgical intervention for medically refractory ulcerative colitis or colonic dysplasia.",
                "Total proctocolectomy removes the entire diseased mucosal target organ, permanently eliminating cancer risk while preserving anal sphincter continence and avoiding a permanent end ileostomy."
            ),
            "PLAB / UKMLA": (
                "Management of complicated diverticulitis by Hinchey classification",
                "Intravenous antibiotics and percutaneous drain placement for Hinchey II (pelvic abscess > 4 cm), versus emergency Hartmann procedure (sigmoid resection and end colostomy) for Hinchey III/IV generalized peritonitis.",
                "NICE guidelines prioritize image-guided percutaneous drainage for large walled-off diverticular abscesses, reserving emergency laparotomy and colostomy for purulent or feculent generalized peritonitis."
            ),
            "AMC": (
                "Post-polypectomy surveillance colonoscopy intervals based on polyp pathology",
                "Recommending repeat surveillance colonoscopy in 3 years for high-risk findings (>= 3 adenomas, adenoma >= 10 mm, villous histology, or high-grade dysplasia) versus 5-10 years for 1-2 small tubular adenomas.",
                "Australian National Health and Medical Research Council (NHMRC) guidelines risk-stratify post-polypectomy surveillance to optimize colorectal cancer prevention while minimizing unnecessary invasive procedures."
            ),
            "MCCQE": (
                "Colorectal anastomotic leak: clinical manifestation and diagnostic imaging",
                "Unexplained fever, persistent tachycardia, oliguria, peritonitis, or fecal/purulent drainage occurring on postoperative days 5 to 7, confirmed by contrast-enhanced abdominal CT with rectal water-soluble contrast.",
                "Anastomotic dehiscence is a catastrophic surgical complication; early CT imaging with rectal contrast identifies extraluminal gas or fluid collections and distinguishes small contained leaks from generalized peritonitis."
            ),
            "FCPS": (
                "Complete mesocolic excision (CME) and central vascular ligation (CVL) in colon cancer",
                "Sharp surgical dissection in the embryologic mesocolic plane with central vascular ligation at the origin of mesenteric feeding vessels to retrieve >= 12 regional lymph nodes.",
                "CME mirrors total mesorectal excision principles by preserving the integrity of the mesocolic fascial envelope and harvesting maximal regional lymph nodes for precise oncologic staging and local control."
            ),
            "NLE": (
                "Clinical distinction between right-sided and left-sided colorectal carcinomas",
                "Right-sided (cecal/ascending) tumors present with exophytic mass, occult gastrointestinal bleeding, and microcytic iron deficiency anemia, whereas left-sided tumors present with 'apple-core' napkin-ring annular constriction and altered bowel habits.",
                "The cecum has a large caliber and liquid contents, allowing large exophytic tumors to bleed chronically without obstruction; the descending colon has smaller caliber and solid feces, producing early obstructive symptoms."
            ),
            "NEET PG": (
                "Familial adenomatous polyposis (FAP) genetics, extracolonic features, and timing of colectomy",
                "Autosomal dominant mutation in APC tumor suppressor on chromosome 5q21, developing > 100 adenomatous polyps with 100% colorectal cancer penetrance by age 40, requiring prophylactic colectomy in early adulthood.",
                "Gardner syndrome variants exhibit osteomas of the mandible, desmoid tumors, and congenital hypertrophy of retinal pigment epithelium (CHRPE); screening sigmoidoscopy begins at age 10-12 years."
            ),
            "MRCP": (
                "Pouchitis pathogenesis, clinical diagnosis, and antimicrobial pharmacotherapy",
                "Episodes of increased stool frequency, pelvic cramping, urgency, and tenesmus in a patient with a J-pouch, managed first-line with a 14-day course of oral ciprofloxacin or metronidazole.",
                "Pouchitis is an idiopathic inflammatory recurrence in the ileal reservoir affecting up to 50% of IPAA patients; the prompt response to ciprofloxacin confirms the pathogenic role of luminal bacterial dysbiosis."
            ),
            "MRCEM": (
                "Toxic megacolon in severe inflammatory or infectious colitis",
                "Transverse colonic dilation > 6 cm on plain abdominal radiography with fever, tachycardia, leukocytosis, and hemodynamic instability, requiring urgent IV fluids, broad-spectrum antibiotics, and surgical consultation.",
                "Antimotility agents, opioids, and colonoscopy are strictly contraindicated due to perforation risk; failure to improve within 24-48 hours on medical therapy necessitates emergency subtotal colectomy with end ileostomy."
            ),
            "SMLE": (
                "Enhanced Recovery After Surgery (ERAS) protocols in major colorectal resections",
                "Implementing preoperative carbohydrate loading, multimodal opioid-sparing analgesia, early postoperative enteral feeding, and mobilization within 24 hours without routine nasogastric decompression.",
                "ERAS clinical pathways reduce surgical stress response, decrease postoperative ileus duration, shorten hospital length of stay by 2-3 days, and lower cardiopulmonary and wound complication rates."
            ),
            "HAAD / DHA": (
                "Population-based colorectal cancer screening modalities and guidelines",
                "Screening asymptomatic average-risk individuals beginning at age 45 using annual fecal immunochemical testing (FIT) or screening colonoscopy every 10 years.",
                "Department of Health standards endorse beginning screening at age 45 due to rising incidence of early-onset colorectal neoplasia; positive FIT testing mandates diagnostic optical colonoscopy without delay."
            ),
            "UHS MBBS": (
                "Colorectal cancer staging: Dukes classification compared with TNM system",
                "Dukes A (confined to bowel wall, T1-T2 N0), Dukes B (invading muscularis propria into pericolic fat, T3-T4 N0), Dukes C (regional lymph node metastasis, any T N1-N2), and Dukes D (distant organ metastases, M1).",
                "Adjuvant 5-fluorouracil/oxaliplatin systemic chemotherapy is universally indicated for stage III (Dukes C) node-positive colon cancer to eradicate systemic micrometastases and improve overall survival."
            )
        }
    },

    # Domain 136: Bariatric & Metabolic Surgery
    {
        "id": "domain_136_bariatric_metabolic",
        "entity": "Severe obesity, Roux-en-Y gastric bypass (RYGB), and sleeve gastrectomy",
        "hallmark": "BMI >= 40 kg/m2 (or BMI >= 35 kg/m2 with major obesity-related comorbidities such as T2DM, OSA, hypertension) refractory to non-surgical lifestyle interventions",
        "system": "Endocrine",
        "ref_key": "bariatric",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Neuroendocrine gut hormone alterations following Roux-en-Y gastric bypass",
                "Exaggerated postprandial release of glucagon-like peptide-1 (GLP-1) and peptide YY (PYY) from distal L-cells combined with suppression of gastric fundal ghrelin secretion.",
                "Rapid nutrient delivery directly into the Roux limb triggers dramatic incretin release, improving pancreatic beta-cell insulin secretion and inducing satiety independent of mechanical restriction."
            ),
            "Step 2 CK": (
                "Internal hernia through mesenteric defects following laparoscopic RYGB",
                "Intermittent crampy postprandial abdominal pain, nausea, and vomiting with a mesenteric 'swirl sign' on contrast-enhanced CT, requiring prompt diagnostic laparoscopy.",
                "Weight loss reduces mesenteric fat, widening potential Petersen space and jejunojejunostomy mesenteric defects; herniated bowel can rapidly develop closed-loop obstruction, ischemia, and infarction."
            ),
            "Step 3": (
                "Lifelong micronutrient supplementation requirements following malabsorptive bariatric surgery",
                "Prescribing daily comprehensive multivitamin, elemental iron, calcium citrate with vitamin D, vitamin B12 (sublingual or IM), and copper to prevent hematological and metabolic bone disorders.",
                "Bypassing the duodenum and proximal jejunum impairs absorption of iron, calcium, and fat-soluble vitamins; calcium citrate is preferred over calcium carbonate due to absent gastric acid required for dissolution."
            ),
            "PLAB / UKMLA": (
                "Post-sleeve gastrectomy staple line leak identification and emergency intervention",
                "Sustained unexplained tachycardia (> 120 bpm) within 48 to 72 hours postoperatively as the most reliable early indicator of proximal staple line gastric leak.",
                "Fever, pain, and peritonitis may be blunted in obese patients; tachycardia warrants urgent contrast CT or diagnostic laparoscopy, drainage, and endoscopic stenting or operative repair."
            ),
            "AMC": (
                "Marginal ulceration at gastrojejunostomy anastomosis: etiology and therapy",
                "Stomal ulceration precipitated by tobacco smoking, NSAID consumption, or ischemia, managed with high-dose proton pump inhibitors, sucralfate suspension, and smoking cessation.",
                "Marginal ulcers develop on the jejunal side of the anastomosis exposed to gastric acid; refractory ulcers require testing for Helicobacter pylori and gastrogastric fistula."
            ),
            "MCCQE": (
                "Wernicke encephalopathy following prolonged vomiting after bariatric surgery",
                "Acute onset of mental status confusion, horizontal nystagmus, and gait ataxia following weeks of persistent hyperemesis, treated with immediate intravenous thiamine before any glucose infusion.",
                "Thiamine (vitamin B1) body stores deplete within 2-3 weeks of vomiting; infusing intravenous dextrose without thiamine exacerbates metabolic failure in the cerebral mammillary bodies, risking permanent Korsakoff syndrome."
            ),
            "FCPS": (
                "Anatomic principles of laparoscopic sleeve gastrectomy",
                "Resection of approximately 80% of the greater gastric curvature along a 36 to 40 French bougie starting 2 to 6 cm proximal to the pylorus and extending to the angle of His.",
                "Calibrating the gastric tube along a bougie ensures adequate gastric volume reduction while preserving lower esophageal sphincter function and avoiding stricture at the incisura angularis."
            ),
            "NLE": (
                "Consensus indications and contraindications for metabolic bariatric surgery",
                "Indicated for BMI >= 40 kg/m2 or BMI >= 35 kg/m2 with severe obesity-related comorbidities (diabetes, severe OSA); contraindicated in active substance abuse, severe unstable psychiatric disease, or non-compliance.",
                "Metabolic bariatric surgery provides durable excess weight loss (> 60-70%) and achieves high rates of type 2 diabetes remission compared to medical management alone."
            ),
            "NEET PG": (
                "Anatomic sites of micronutrient absorption altered by bariatric reconstruction",
                "Duodenum and proximal jejunum are the primary sites for active absorption of elemental iron and calcium, which are bypassed in Roux-en-Y gastric bypass.",
                "Fat-soluble vitamins (A, D, E, K) require biliary and pancreatic enzyme mixing in the common channel; vitamin B12 absorption requires intrinsic factor binding in the stomach and receptor-mediated uptake in the terminal ileum."
            ),
            "MRCP": (
                "Late post-bariatric hyperinsulinemic hypoglycemia (nesidioblastosis)",
                "Severe postprandial neuroglycopenic symptoms (confusion, diaphoresis, syncope) occurring 1 to 3 hours after carbohydrate ingestion due to excessive GLP-1-mediated insulin hypersecretion.",
                "Differentiated from insulinoma by symptom occurrence exclusively postprandially without fasting hypoglycemia; initial therapy involves dietary restriction of refined carbohydrates and acarbose."
            ),
            "MRCEM": (
                "Acute gastric remnant distension following Roux-en-Y gastric bypass",
                "Severe epigastric pain, left upper quadrant tympany, persistent hiccupping, and tachycardia, requiring emergency percutaneous or operative transabdominal tube decompression.",
                "The excluded gastric remnant has no proximal outlet; mechanical obstruction of the biliopancreatic limb leads to massive closed-loop dilation, gastric rupture, and catastrophic peritonitis."
            ),
            "SMLE": (
                "Venous thromboembolism prophylaxis guidelines in metabolic bariatric surgery",
                "Administering weight-adjusted low-molecular-weight heparin (e.g., enoxaparin 40 mg twice daily) combined with intraoperative pneumatic compression devices and early ambulation.",
                "Severe obesity and laparoscopic pneumoperitoneum increase deep vein thrombosis and pulmonary embolism risks; chemical thromboprophylaxis is continued for 10-14 days post-discharge in high-risk patients."
            ),
            "HAAD / DHA": (
                "Multidisciplinary pre-bariatric surgical evaluation requirements",
                "Mandatory evaluation by a multidisciplinary team including bariatric surgeon, certified clinical dietitian, clinical psychologist, and medical endocrinologist prior to surgical approval.",
                "Comprehensive psychological and dietary screening ensures patient readiness, addresses disordered eating patterns, and establishes nutritional compliance essential for long-term postoperative success."
            ),
            "UHS MBBS": (
                "Classification of bariatric surgical procedures by physiological mechanism",
                "Classifying operations into purely restrictive (sleeve gastrectomy, adjustable gastric banding) versus combined restrictive and malabsorptive/metabolic (Roux-en-Y gastric bypass, biliopancreatic diversion).",
                "Restrictive procedures decrease caloric intake by limiting reservoir volume; combined procedures alter gastrointestinal transit, reduce mucosal absorption surface, and modulate systemic neurohormonal satiety pathways."
            )
        }
    },

    # Domain 137: Endocrine Surgery (Thyroid, Parathyroid, Adrenal)
    {
        "id": "domain_137_endocrine_surgery",
        "entity": "Primary hyperparathyroidism, thyroid carcinoma, and adrenal pheochromocytoma",
        "hallmark": "hypercalcemia with elevated or inappropriately normal PTH, solitary thyroid nodule with microcalcifications, or paroxysmal headache, sweating, and tachycardia with hypertension",
        "system": "Endocrine",
        "ref_key": "endocrine_surgery",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Molecular genetics of thyroid neoplasms: BRAF V600E and RET proto-oncogene",
                "BRAF V600E point mutations and RET/PTC rearrangements characteristic of papillary thyroid carcinoma, versus germline RET proto-oncogene activating mutations in medullary thyroid carcinoma.",
                "BRAF V600E mutation activates the MAPK signaling cascade and correlates with aggressive extrathyroidal extension; medullary carcinoma originates from neuroendocrine C-cells producing calcitonin."
            ),
            "Step 2 CK": (
                "Consensus surgical indications for parathyroidectomy in asymptomatic primary hyperparathyroidism",
                "Serum calcium > 1.0 mg/dL above normal, T-score < -2.5 at any skeletal site, eGFR < 60 mL/min, 24-hour urinary calcium > 400 mg/day, or patient age < 50 years.",
                "International workshop guidelines recommend parathyroidectomy in asymptomatic patients meeting any single criterion to halt progressive osteopenia, nephrolithiasis, and cardiovascular morbidity."
            ),
            "Step 3": (
                "Post-thyroidectomy vocal cord paralysis and hypocalcemia management",
                "Distinguishing unilateral recurrent laryngeal nerve palsy (hoarseness) from bilateral palsy (acute inspiratory stridor requiring reintubation), and managing hypocalcemia with oral calcium carbonate and calcitriol.",
                "Transient or permanent hypoparathyroidism from devascularization of parathyroid glands leads to neuromuscular excitability (Chvostek and Trousseau signs); active calcitriol ensures adequate enteral calcium absorption."
            ),
            "PLAB / UKMLA": (
                "Bethesda classification of thyroid nodules and fine-needle aspiration (FNAC) pathway",
                "Performing ultrasound-guided fine-needle aspiration cytology for suspicious thyroid nodules and selecting surgical lobectomy or total thyroidectomy for Bethesda V (suspicious) or VI (malignant).",
                "The Bethesda System standardizes cytological malignancy risk; Bethesda II (benign) has < 3% risk and warrants clinical/ultrasound surveillance without surgical excision."
            ),
            "AMC": (
                "Preoperative pharmacological preparation for adrenal pheochromocytoma resection",
                "Administering non-competitive alpha-adrenergic blockade (phenoxybenzamine) for 10-14 days first, followed by beta-adrenergic blockade only after adequate alpha blockade is established.",
                "Initiating beta-blockers prior to alpha-blockade leaves alpha-mediated vasoconstriction unopposed, precipitating catastrophic hypertensive crisis and acute pulmonary edema."
            ),
            "MCCQE": (
                "Emergency bedside evacuation of post-thyroidectomy tension neck hematoma",
                "Immediate bedside opening of surgical neck incision sutures and evacuation of tension hematoma to relieve tracheal compression prior to attempting formal endotracheal intubation.",
                "An expanding compressive hematoma causes acute upper airway obstruction; bedside decompression relieves life-threatening laryngeal venous congestion and secures the airway before re-exploration in theater."
            ),
            "FCPS": (
                "Minimally invasive parathyroidectomy with intraoperative parathyroid hormone (IOPTH) monitoring",
                "Utilizing preoperative 99mTc-sestamibi SPECT and high-resolution ultrasound for localization, followed by focused excision confirming a > 50% drop in IOPTH from baseline at 10 minutes (Miami criterion).",
                "Intraoperative PTH has a half-life of 3-5 minutes; a > 50% decrease 10 minutes after single adenoma excision confirms complete biochemical cure with > 98% accuracy."
            ),
            "NLE": (
                "Clinical and pathological hallmarks of papillary thyroid carcinoma",
                "Painless solitary thyroid nodule with cervical lymphadenopathy; microscopic examination reveals ground-glass nuclei (Orphan Annie eyes), nuclear pseudo-inclusions, and psammoma bodies.",
                "Papillary thyroid carcinoma is the most common thyroid malignancy (85%); it exhibits prominent lymphatic spread to regional cervical nodes but has an excellent 10-year survival rate exceeding 90%."
            ),
            "NEET PG": (
                "Multiple Endocrine Neoplasia (MEN) syndromes classification and gene loci",
                "MEN 1 (pituitary adenoma, parathyroid hyperplasia, pancreatic neuroendocrine tumor; MEN1 menin gene on 11q13) versus MEN 2A and 2B (medullary thyroid cancer and pheochromocytoma; RET proto-oncogene on 10q11).",
                "MEN 2B is distinguished from MEN 2A by the presence of mucosal neuromas, intestinal ganglioneuromatosis, and marfanoid habitus without primary hyperparathyroidism."
            ),
            "MRCP": (
                "Medullary thyroid carcinoma biochemical surveillance and genetic screening",
                "Measuring baseline serum calcitonin and carcinoembryonic antigen (CEA) for tumor burden monitoring, and performing germline RET proto-oncogene sequencing in all patients and first-degree relatives.",
                "Detection of hereditary RET mutations guides prophylactic total thyroidectomy in infancy or early childhood depending on the specific mutation risk tier (e.g., M918T highest risk)."
            ),
            "MRCEM": (
                "Acute hypercalcemic crisis emergency resuscitation and medical stabilization",
                "Aggressive volume expansion with intravenous isotonic normal saline (200-300 mL/hr) followed by intravenous zoledronic acid and subcutaneous calcitonin for rapid short-term calcium lowering.",
                "Severe hypercalcemia (> 14 mg/dL) induces profound nephrogenic diabetes insipidus and hypovolemia; saline rehydration restores GFR and calciuresis before bisphosphonate-mediated osteoclast inhibition takes effect."
            ),
            "SMLE": (
                "Diagnostic workup for incidental adrenal mass (adrenal incidentaloma)",
                "Screening every adrenal incidentaloma with a 1-mg overnight dexamethasone suppression test, 24-hour urinary or plasma free metanephrines, and aldosterone-to-renin ratio (if hypertensive).",
                "Endocrine Society guidelines require exclusion of subclinical Cushing syndrome, pheochromocytoma, and primary hyperaldosteronism before determining surgical resection versus serial imaging."
            ),
            "HAAD / DHA": (
                "Indications for radioactive iodine (I-131) remnant ablation in differentiated thyroid cancer",
                "Administering adjuvant radioactive iodine (RAI) following total thyroidectomy in patients with high-risk differentiated thyroid cancer (gross extrathyroidal extension, primary tumor > 4 cm, or distant metastases).",
                "Radioactive iodine destroys residual normal thyroid tissue and microscopic neoplastic deposits, facilitating sensitive serum thyroglobulin monitoring and reducing recurrence rates."
            ),
            "UHS MBBS": (
                "Surgical anatomy and relations of the recurrent and superior laryngeal nerves",
                "Recurrent laryngeal nerve innervates all intrinsic laryngeal muscles except the cricothyroid (innervated by the external branch of the superior laryngeal nerve, which runs with the superior thyroid artery).",
                "Injury to the external branch of the superior laryngeal nerve causes loss of high-pitch vocal frequency and vocal fatigue; injury to the recurrent laryngeal nerve causes hoarseness or airway obstruction."
            )
        }
    },

    # Domain 138: Soft Tissue Sarcomas & Melanoma Surgical Oncology
    {
        "id": "domain_138_soft_tissue_sarcoma",
        "entity": "Extremity soft tissue sarcoma and malignant cutaneous melanoma",
        "hallmark": "painless enlarging deep subfascial soft tissue mass > 5 cm in extremity, or asymmetrical pigmented skin lesion with irregular borders, color variation, and diameter > 6 mm (ABCDE criteria)",
        "system": "Musculoskeletal",
        "ref_key": "sarcoma",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Translocation cytogenetics and oncogene fusions in soft tissue sarcomas",
                "Reciprocal chromosomal translocations producing pathognomonic chimeric fusion proteins: t(X;18)(p11;q11) SS18-SSX in synovial sarcoma, and t(11;22)(q24;q12) EWSR1-FLI1 in Ewing sarcoma.",
                "Ewing sarcoma cells express high levels of surface CD99 (MIC2); liposarcoma is characterized by MDM2 and CDK4 gene amplifications on chromosome 12q that neutralize p53-mediated growth arrest."
            ),
            "Step 2 CK": (
                "Diagnostic imaging and biopsy protocol for suspected extremity soft tissue sarcoma",
                "Contrast-enhanced magnetic resonance imaging (MRI) of the limb followed by image-guided core needle biopsy oriented strictly along the longitudinal axis of the planned definitive resection.",
                "Transverse biopsy incisions contaminate multiple tissue compartments, mandating wider margins or amputation; MRI delineates neurovascular involvement and muscular compartment fascial planes."
            ),
            "Step 3": (
                "Surgical wide local excision margins for malignant melanoma based on Breslow thickness",
                "Excising melanoma in situ with 0.5 cm margins, <= 1.0 mm depth with 1.0 cm margins, 1.01-2.0 mm depth with 1-2 cm margins, and > 2.0 mm depth with 2.0 cm clear margins.",
                "Surgical oncological consensus establishes standardized radial skin excision margins down to muscular fascia; sentinel lymph node biopsy is simultaneously indicated for Breslow thickness >= 1.0 mm (or >= 0.8 mm with ulceration)."
            ),
            "PLAB / UKMLA": (
                "Indications and technique for sentinel lymph node biopsy (SLNB) in cutaneous melanoma",
                "Performing dual-agent lymphatic mapping with technetium-99m sulfur colloid and blue dye with SLNB in patients with stage pT1b to pT4b melanoma (Breslow thickness >= 1.0 mm or 0.8-1.0 mm with ulceration).",
                "NICE melanoma guidelines mandate SLNB for accurate regional nodal staging, prognostic stratification, and selection of patients for adjuvant targeted therapy or immunotherapy."
            ),
            "AMC": (
                "Limb-sparing surgery with adjuvant radiation therapy in high-grade extremity sarcomas",
                "Wide local compartmental resection achieving negative surgical margins combined with preoperative or postoperative external beam radiation therapy, providing survival equivalent to amputation.",
                "Limb-salvage protocols preserve functional extremity anatomy while achieving > 85-90% local disease control rates without compromising overall survival compared to radical amputation."
            ),
            "MCCQE": (
                "Targeted kinase inhibition for BRAF V600-mutated metastatic melanoma",
                "Initiating combination targeted therapy with a BRAF inhibitor (dabrafenib) and MEK inhibitor (trametinib) for advanced unresectable or metastatic melanoma harboring BRAF V600E/K mutations.",
                "Dual MAPK pathway inhibition prevents paradoxical reactivation of ERK signaling, producing rapid tumor response rates (> 65-70%) and prolonging progression-free survival compared to monotherapy."
            ),
            "FCPS": (
                "Surgical margin classification and fascial barrier concepts in sarcoma resection",
                "Achieving an R0 resection with a 1-2 cm three-dimensional cuff of normal muscle or an intact resistant fascial/periosteal boundary to minimize local recurrence risk.",
                "Dense collagenous fascia, epineurium, and periosteum serve as natural anatomic barriers to sarcoma infiltration; microscopic positive margins (R1) require re-excision or adjuvant radiation therapy."
            ),
            "NLE": (
                "Red flag clinical features warranting urgent two-week referral for soft tissue lumps",
                "Any soft tissue mass that is larger than 5 cm in diameter, increasing in size, painful, or situated deep to the deep investing muscular fascia.",
                "Benign lipomas and cysts are typically small and subcutaneous; subfascial location and dimensions > 5 cm indicate high probability of soft tissue sarcoma until proven otherwise."
            ),
            "NEET PG": (
                "Histological subtypes and molecular features of liposarcoma",
                "Well-differentiated and dedifferentiated liposarcomas characterized by giant marker ring chromosomes containing amplified MDM2 and CDK4 genes; myxoid liposarcoma exhibits t(12;16) FUS-DDIT3 translocation.",
                "Myxoid liposarcomas demonstrate a characteristic 'chicken-wire' delicate plexiform capillary network on histology and have a propensity for non-pulmonary extrapulmonary fat metastasis."
            ),
            "MRCP": (
                "Immune checkpoint inhibition for advanced or unresectable metastatic melanoma",
                "Administering anti-PD-1 monoclonal antibodies (pembrolizumab or nivolumab) alone or in combination with anti-CTLA-4 (ipilimumab) as first-line therapy for metastatic melanoma.",
                "Blocking inhibitory immune checkpoint receptors releases T-cell anti-tumor cytotoxicity, producing durable long-term complete remissions in a significant proportion of advanced melanoma patients."
            ),
            "MRCEM": (
                "Retroperitoneal sarcoma presentation and emergency evaluation",
                "Abdominal-pelvic contrast-enhanced CT demonstrating a massive retroperitoneal soft tissue mass displacing visceral organs without intrinsic gastrointestinal mucosal ulceration.",
                "Retroperitoneal sarcomas grow silently to massive sizes (> 15-20 cm) before presenting with vague flank fullness, lower extremity edema from IVC compression, or acute bowel obstruction."
            ),
            "SMLE": (
                "Dermoscopic diagnostic algorithms (ABCDE and 3-point checklist) in melanoma",
                "Applying dermatoscopy to detect asymmetry, atypical pigment network, and blue-white veil, distinguishing early in situ melanoma from benign melanocytic nevi.",
                "Dermoscopic examination significantly enhances diagnostic accuracy compared to naked-eye visual assessment alone, avoiding unnecessary excisions while capturing early thin melanomas."
            ),
            "HAAD / DHA": (
                "Excisional biopsy standard versus incisional biopsy in suspicious cutaneous pigmented lesions",
                "Performing complete narrow-margin (1-3 mm) excisional biopsy with elliptical closure oriented along skin tension lines rather than partial shave or punch biopsy.",
                "Complete excisional biopsy preserves microarchitecture for precise Breslow thickness and ulceration evaluation, which dictate subsequent wide local excision margins and SLNB indications."
            ),
            "UHS MBBS": (
                "Breslow thickness versus Clark levels in prognostic stratification of melanoma",
                "Breslow vertical tumor thickness measured in millimeters from the epidermal granular layer to the deepest infiltrating malignant cell is the single most powerful prognostic predictor of survival.",
                "Clark anatomical levels of dermal invasion (levels I to V) have been superseded by Breslow depth in international AJCC staging because numerical depth correlates precisely with metastasis and mortality."
            )
        }
    }
]
