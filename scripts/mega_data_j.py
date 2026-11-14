"""
Mega Data Part J: Domains 58 to 63 (Nephrology, Metabolic Bone & Plasma Cell Dyscrasias)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_J = [
    # Domain 58: Metabolic Bone Disease
    {
        "id": "domain_58_metabolic_bone",
        "entity": "metabolic bone disease (osteoporosis, osteomalacia, and Paget disease)",
        "hallmark": "acute severe mid-thoracic back pain following minor lifting, point vertebral tenderness, progressive kyphosis, height loss of four centimeters, and DXA T-score -3.2",
        "system": "Musculoskeletal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "RANKL-RANK-OPG pathway and osteoclast-mediated bone resorption",
                "Estrogen deficiency increasing osteoblast RANKL expression, binding RANK on osteoclast precursors to accelerate osteoclastogenesis and bone resorption with reduced osteoprotegerin (OPG) decoy receptor.",
                "Osteoporosis involves normal bone mineralization but decreased bone mass due to unbalanced remodeling; postmenopausal loss of estrogen removes inhibition of RANKL, driving rapid trabecular bone loss."
            ),
            "Step 2 CK": (
                "Dual-energy X-ray absorptiometry (DXA) T-score criteria and bisphosphonate therapy",
                "DXA T-score <= -2.5 at femoral neck or lumbar spine diagnosing osteoporosis; initiating oral bisphosphonates (alendronate) with calcium and vitamin D optimization.",
                "First-line pharmacological treatment for postmenopausal osteoporosis is oral bisphosphonates; patients must take tablets with a full glass of water and remain upright for 30 minutes to prevent esophagitis."
            ),
            "Step 3": (
                "Atypical femoral fractures and osteonecrosis of the jaw monitoring",
                "Considering a 'drug holiday' after 3 to 5 years of bisphosphonate therapy in low-to-moderate risk patients to minimize risks of atypical subtrochanteric femoral fractures and jaw osteonecrosis.",
                "Long-term potent bisphosphonates oversuppress bone turnover; periodic fracture risk reassessment (FRAX score) determines the appropriateness of temporary drug holidays."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on fracture risk assessment (FRAX tool) and screening thresholds",
                "Calculating 10-year major osteoporotic fracture probability using the FRAX tool in women >= 65 years and men >= 75 years (or earlier with risk factors) to guide DXA scanning.",
                "NICE clinical guideline CG146 recommends using FRAX or QFracture before DXA scanning; high-risk scores trigger DXA or direct treatment without imaging in very elderly patients with fragility fractures."
            ),
            "AMC": (
                "Osteomalacia in adults and defective unmineralized osteoid accumulation",
                "Severe vitamin D deficiency causing bone pain, proximal muscle weakness, elevated alkaline phosphatase, low serum calcium and phosphate, and pseudofractures (Looser zones) on X-ray.",
                "Australian guidelines emphasize that osteomalacia is characterized by failure of osteoid matrix mineralization; treatment requires high-dose cholecalciferol (50,000 IU weekly for 8-12 weeks)."
            ),
            "MCCQE": (
                "Secondary causes of osteoporosis workup (Cushing, hyperparathyroidism, multiple myeloma)",
                "Investigating secondary etiologies in men and premenopausal women with fragility fractures: checking serum calcium, PTH, 25-OH vitamin D, TSH, and serum protein electrophoresis.",
                "Canadian medical objectives mandate screening for secondary causes of osteoporosis (e.g., celiac disease, hyperthyroidism, hypogonadism, myeloma) before assuming primary involutional bone loss."
            ),
            "FCPS": (
                "Vertebroplasty versus Kyphoplasty in painful osteoporotic compression fractures",
                "Balloon kyphoplasty or percutaneous vertebroplasty with polymethylmethacrylate (PMMA) cement injection for severe, incapacitating pain refractory to conservative analgesia.",
                "In orthopedic and neurosurgical practice, percutaneous balloon kyphoplasty restores vertebral body height and provides rapid pain relief for acute, unstable compression fractures."
            ),
            "NLE": (
                "Paget disease of bone clinical features and isolated elevated alkaline phosphatase",
                "Increased skull circumference, bone deformities (bowing of tibia), progressive sensorineural hearing loss, and markedly elevated serum alkaline phosphatase with normal calcium and phosphate.",
                "National licensing curricula test Paget disease (osteitis deformans): accelerated disorganized bone remodeling produces bone enlargement, cranial nerve compression, and high-output heart failure."
            ),
            "NEET PG": (
                "Histological mosaic pattern and osteosarcoma transformation in Paget disease",
                "Haphazard 'mosaic' or 'jigsaw puzzle' pattern of lamellar bone with prominent cement lines, and recognition of the 1% lifetime risk of secondary malignant degeneration to osteosarcoma.",
                "NEET PG pathology tests Paget disease histology: prominent basophilic cement lines separating haphazardly arranged bone fragments; new-onset severe bone pain and lytic lesions indicate secondary osteosarcoma."
            ),
            "MRCP": (
                "Teriparatide (recombinant human PTH) versus Denosumab (RANKL inhibitor) pharmacology",
                "Pulsatile daily teriparatide acting as an anabolic agent stimulating new bone formation; denosumab (monoclonal antibody against RANKL) requiring vigilance for rebound vertebral fractures upon discontinuation.",
                "MRCP clinical endocrinology contrasts bone therapies: teriparatide stimulates osteoblastic bone formation directly (max 24-month duration due to osteosarcoma warning); denosumab cannot be stopped abruptly without bridging."
            ),
            "MRCEM": (
                "Emergency management of acute fragility hip fracture in elderly patients",
                "Multimodal analgesia with ultrasound-guided fascia iliaca compartment block, avoidance of systemic opioids, fluid optimization, and surgical fixation within 24-36 hours.",
                "Emergency resuscitation in geriatric hip fractures prioritizes early fascia iliaca nerve blocks to achieve excellent pain relief without opioid-induced delirium, expediting urgent surgical repair."
            ),
            "SMLE": (
                "High prevalence of hypovitaminosis D in the Arabian Peninsula and fortification policies",
                "Screening high-risk populations for vitamin D deficiency despite abundant sunlight due to indoor lifestyle and traditional clothing, prescribing maintenance 1,000-2,000 IU daily.",
                "Saudi clinical guidelines emphasize population-wide screening for vitamin D deficiency, mandating public health food fortification and routine prophylactic supplementation."
            ),
            "HAAD / DHA": (
                "Post-fracture liaison service (FLS) implementation and secondary prevention",
                "Enrolling all fragility fracture patients in a structured Fracture Liaison Service to ensure DXA evaluation, initiation of anti-osteoporotic therapy, and balance/fall prevention training.",
                "UAE health authority standards mandate hospital-based Fracture Liaison Services, achieving over 80% treatment rates for secondary fragility fracture prevention."
            ),
            "UHS MBBS": (
                "Microscopic pathology of osteomalacia versus osteoporosis",
                "Osteomalacia showing excessively wide seams of unmineralized pale osteoid lining trabeculae; osteoporosis showing thin, sparse, attenuated bony trabeculae with normal mineralization.",
                "Undergraduate pathology emphasizes that Von Kossa staining stains mineralized bone black, easily demonstrating the thick, unmineralized osteoid seams pathognomonic of osteomalacia."
            )
        }
    },

    # Domain 59: Renal Tubular Acidosis (RTA)
    {
        "id": "domain_59_renal_tubular_acidosis",
        "entity": "renal tubular acidosis (types 1, 2, and 4)",
        "hallmark": "normal anion gap metabolic acidosis (hyperchloremic), hypokalemia, inability to acidify urine below pH 5.5, and recurrent bilateral nephrocalcinosis",
        "system": "Renal",
        "ref_key": "acid",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Distal intercalated cell H+-ATPase failure in Type 1 RTA",
                "Failure of alpha-intercalated cells in the cortical collecting duct to secrete H+ via apical H+-ATPase or H+/K+-ATPase, preventing luminal acidification and trapping of ammonium (NH4+).",
                "In Type 1 (distal) RTA, inability to excrete hydrogen ions causes systemic acidosis; alkaline urine promotes calcium phosphate precipitation, leading to nephrocalcinosis and recurrent nephrolithiasis."
            ),
            "Step 2 CK": (
                "Diagnostic differentiation: Urine anion gap and response to bicarbonate loading",
                "Positive urine anion gap (Na + K - Cl > 0) in Type 1 RTA reflecting impaired urinary ammonium excretion; fractional excretion of bicarbonate > 15% during bicarbonate infusion in Type 2 RTA.",
                "A normal anion gap metabolic acidosis with a positive urine anion gap points to distal RTA; negative urine anion gap (Na + K - Cl < 0) indicates GI bicarbonate loss (diarrhea) with intact renal ammonium excretion."
            ),
            "Step 3": (
                "Chronic alkali replacement and potassium optimization strategies",
                "High-dose sodium bicarbonate or potassium citrate (to correct acidosis and prevent stone formation) in Type 1 RTA; fludrocortisone and dietary potassium restriction in Type 4 RTA.",
                "Potassium citrate is the treatment of choice in Type 1 RTA because citrate alkalinizes urine and chelates calcium, preventing nephrocalcinosis while simultaneously correcting hypokalemia."
            ),
            "PLAB / UKMLA": (
                "Type 4 RTA association with diabetic nephropathy and hyperkalemia",
                "Hyporeninemic hypoaldosteronism in long-standing diabetic kidney disease causing hyperkalemia and mild normal anion gap metabolic acidosis with intact urine acidification (urine pH < 5.5).",
                "UK clinical guidelines highlight Type 4 RTA as the only hyperkalemic RTA, commonly triggered in diabetics with mild-to-moderate CKD when ACE inhibitors or potassium-sparing diuretics are started."
            ),
            "AMC": (
                "Type 2 (proximal) RTA and association with Fanconi syndrome",
                "Impaired proximal tubular bicarbonate reabsorption accompanied by glucosuria, aminoaciduria, phosphaturia (causing rickets/osteomalacia), and uricosuria (Fanconi syndrome).",
                "Australian nephrology consensus emphasizes that Type 2 RTA occurs commonly secondary to light-chain nephropathy (multiple myeloma) or drugs (tenofovir, ifosfamide), causing generalized proximal dysfunction."
            ),
            "MCCQE": (
                "Autoimmune etiology of Type 1 RTA and association with Sjögren syndrome",
                "Evaluation for underlying Sjögren syndrome, systemic lupus erythematosus, or autoimmune thyroiditis in adult patients presenting with unexplained hypokalemic distal RTA.",
                "Canadian medical objectives stress investigating autoimmune diseases (particularly Sjögren syndrome with anti-Ro/La) in women presenting with unexplained distal RTA and hypokalemic paralysis."
            ),
            "FCPS": (
                "Urological and surgical management of staghorn calculi in Type 1 RTA",
                "Percutaneous nephrolithotomy (PCNL) for large, bilateral calcium phosphate staghorn calculi formed in the persistently alkaline urinary milieu of distal RTA.",
                "In urological practice, stones in Type 1 RTA consist of calcium phosphate (apatite or brushite); open or percutaneous stone clearance must be coupled with lifelong potassium citrate therapy."
            ),
            "NLE": (
                "Clinical comparison of RTA types (Type 1, Type 2, and Type 4)",
                "Type 1 (distal): urine pH > 5.5, hypokalemia, stones common; Type 2 (proximal): urine pH < 5.5 once reset, hypokalemia, rickets; Type 4 (hypoaldo): urine pH < 5.5, hyperkalemia, no stones.",
                "National licensing curricula test the classic RTA differentiation matrix: serum potassium is high only in Type 4; urine pH cannot drop below 5.5 only in Type 1."
            ),
            "NEET PG": (
                "Urine net charge and urinary ammonium excretion calculation",
                "Urine anion gap = (Urine Sodium + Urine Potassium) - Urine Chloride; negative values indicate normal ammonium excretion, while positive values indicate impaired distal H+/NH4+ secretion.",
                "NEET PG nephrology questions heavily test the urine anion gap formula as an indirect bedside surrogate for urinary ammonium (NH4+) excretion in normal anion gap metabolic acidosis."
            ),
            "MRCP": (
                "Drug-induced Type 4 RTA mechanisms (mineralocorticoid receptor antagonists, trimethoprim)",
                "Trimethoprim blocking epithelial sodium channels (ENaC) in the collecting duct, and spironolactone or ACE inhibitors causing functional hypoaldosteronism and severe hyperkalemia.",
                "MRCP clinical pharmacology highlights trimethoprim's chemical similarity to amiloride, blocking luminal ENaC channels and precipitating acute hyperkalemic Type 4 RTA in elderly CKD patients."
            ),
            "MRCEM": (
                "Emergency management of severe hypokalemic quadriparesis in distal RTA",
                "Rapid intravenous potassium chloride infusion with continuous cardiac telemetry to prevent fatal ventricular arrhythmias, correcting potassium before giving large alkali boluses.",
                "In emergency care of severe hypokalemic paralysis from RTA, alkali therapy must never precede potassium repletion, as sodium bicarbonate shifts extracellular potassium into cells, causing cardiac arrest."
            ),
            "SMLE": (
                "Genetic causes of distal RTA in pediatric populations (SLC4A1 and ATP6V0A4 mutations)",
                "Autosomal recessive distal RTA with sensorineural hearing loss (ATP6V1B1 / ATP6V0A4 mutations) in consanguineous families, presenting with failure to thrive and rickets.",
                "In Saudi Arabia where consanguinity rates are high, familial pediatric distal RTA presents with severe metabolic acidosis, growth failure, and progressive sensorineural hearing loss."
            ),
            "HAAD / DHA": (
                "Tenofovir disoproxil fumarate-induced proximal tubular toxicity and monitoring",
                "Monitoring urine protein-to-creatinine ratio, serum phosphate, and glucosuria in patients receiving tenofovir disoproxil, switching to tenofovir alafenamide upon detecting tubulopathy.",
                "UAE HIV and hepatitis B treatment guidelines mandate serial renal surveillance for tenofovir-induced Fanconi syndrome and proximal RTA, utilizing newer prodrugs with lower renal exposure."
            ),
            "UHS MBBS": (
                "Histopathology of nephrocalcinosis in distal renal tubular acidosis",
                "Extensive basophilic calcium phosphate deposits within the tubular lumens, tubular epithelial basement membranes, and interstitial tissue of the renal medulla.",
                "Undergraduate pathology describes nephrocalcinosis: chronic alkaline intraluminal pH in the collecting ducts causes microscopic metastatic calcification and tubulointerstitial fibrosis."
            )
        }
    },

    # Domain 60: Disorders of Water Balance (SIADH vs Diabetes Insipidus)
    {
        "id": "domain_60_water_balance",
        "entity": "syndrome of inappropriate antidiuretic hormone secretion and diabetes insipidus",
        "hallmark": "profound euvolemic hyponatremia (serum sodium 116 mEq/L), confusion, seizures, inappropriate urine concentration (urine osmolality 580 mOsm/kg), and urine sodium 64 mEq/L",
        "system": "Endocrine",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "V2 receptor activation, aquaporin-2 translocation, and volume regulation escape",
                "Excessive arginine vasopressin (ADH) stimulating basolateral V2 receptors in collecting duct principal cells, increasing cAMP and inserting apical aquaporin-2 water channels.",
                "SIADH causes water retention and volume expansion; 'aldosterone escape' and increased ANP/BNP release promote natriuresis, restoring clinically euvolemic state with high urine sodium."
            ),
            "Step 2 CK": (
                "Diagnostic criteria for SIADH and hypertonic 3% saline for acute severe symptoms",
                "Serum osmolality < 275 mOsm/kg, urine osmolality > 100 mOsm/kg, urine sodium > 40 mEq/L in clinically euvolemic patient; 3% hypertonic saline bolus (100 mL) for seizures or coma.",
                "Severe symptomatic hyponatremia (seizures, coma) requires immediate 3% hypertonic saline to raise serum sodium by 4-6 mEq/L within hours, preventing fatal cerebral tentorial herniation."
            ),
            "Step 3": (
                "Osmotic demyelination syndrome (central pontine myelinolysis) prevention guidelines",
                "Limiting sodium correction rate to no more than 8 mEq/L in any 24-hour period (and < 6 mEq/L in high-risk malnourished or alcoholic patients) to avoid fatal pontine demyelination.",
                "Overly rapid correction of chronic hyponatremia causes rapid brain dehydration and osmotic demyelination syndrome, manifesting days later with spastic quadriparesis, dysarthria, and 'locked-in' syndrome."
            ),
            "PLAB / UKMLA": (
                "Investigation of Central versus Nephrogenic Diabetes Insipidus via water deprivation test",
                "Water deprivation test: failure to concentrate urine followed by exogenous desmopressin (DDAVP); > 50% increase in urine osmolality confirms central DI; lack of response indicates nephrogenic DI.",
                "NICE and UK endocrine protocols test polyuria-polydipsia: urine osmolality < 300 mOsm/kg despite hypernatremia confirms diabetes insipidus, differentiated by response to subcutaneous desmopressin."
            ),
            "AMC": (
                "Pharmacological management of Nephrogenic Diabetes Insipidus (lithium-induced)",
                "Discontinuing lithium if feasible, initiating thiazide diuretics (hydrochlorothiazide) with amiloride to block lithium entry via collecting duct ENaC channels.",
                "Australian psychiatric and endocrine guidelines recommend amiloride for lithium-induced nephrogenic DI, which selectively blocks epithelial sodium channels to halt intracellular lithium uptake."
            ),
            "MCCQE": (
                "Small cell lung carcinoma presenting with ectopic ADH secretion",
                "Persistent euvolemic hyponatremia in an elderly smoker, warranting contrast-enhanced chest CT to detect occult small cell neuroendocrine lung carcinoma.",
                "Canadian qualifying objectives emphasize that SIADH is frequently paraneoplastic; finding unexplained euvolemic hyponatremia mandates chest imaging to detect small cell lung cancer."
            ),
            "FCPS": (
                "Post-hypophysectomy triphasic water balance response following pituitary surgery",
                "Triphasic response: initial transient central DI (axonal shock), followed by transient SIADH (uncontrolled release of stored ADH from degenerating posterior pituitary), ending in permanent DI.",
                "Neurosurgical post-pituitary operative management requires rigorous hourly fluid balance monitoring to navigate the predictable triphasic DI-SIADH-DI response and avoid severe sodium swings."
            ),
            "NLE": (
                "Clinical distinction between SIADH, Cerebral Salt Wasting, and Dehydration",
                "SIADH: euvolemic, low serum uric acid and BUN; Cerebral Salt Wasting: hypovolemic with high urine sodium; Dehydration: hypovolemic with low urine sodium (< 20 mEq/L).",
                "National licensing curricula test hyponatremia volume status: clinical volume assessment is paramount; SIADH patients have no edema, normal skin turgor, and low BUN/uric acid."
            ),
            "NEET PG": (
                "Vasopressin V2 receptor antagonists (Tolvaptan and Conivaptan) indications and safety",
                "Tolvaptan (oral selective V2 antagonist) and conivaptan (IV dual V1a/V2 antagonist) promoting aquaresis in euvolemic hyponatremia, with black-box warning regarding liver injury.",
                "NEET PG pharmacology emphasizes vaptans: selective V2 receptor antagonists that block water reabsorption without affecting electrolytes, indicated for SIADH refractory to fluid restriction."
            ),
            "MRCP": (
                "Reset osmostat syndrome in chronic debilitating illnesses and pregnancy",
                "Downward reset of the hypothalamic osmostat threshold where serum sodium is maintained stably low (125-130 mEq/L) while normal renal water excretion and dilution are preserved.",
                "MRCP clinical scenarios test reset osmostat: patients dilute urine normally in response to an oral water load despite baseline hyponatremia; treatment is directed at underlying illness, not water restriction."
            ),
            "MRCEM": (
                "Emergency re-lowering protocol for accidental overcorrection of hyponatremia",
                "Immediate administration of desmopressin (DDAVP 1-2 mcg IV) and infusion of 5% dextrose in water (D5W) to re-lower serum sodium when 24-hour correction exceeds 8-10 mEq/L.",
                "When spontaneous water diuresis causes sodium to rise too rapidly (> 8-10 mEq/L/24h), emergency protocols mandate re-lowering with D5W and DDAVP to abort impending osmotic demyelination."
            ),
            "SMLE": (
                "Head trauma and subarachnoid hemorrhage-induced hyponatremia management",
                "Careful differentiation of SIADH from Cerebral Salt Wasting (CSW) in neurotrauma; CSW features true hypovolemia and requires volume restoration with isotonic or hypertonic saline.",
                "Saudi neuro-intensive care guidelines highlight that restricting fluids in a neurosurgical patient misdiagnosed with SIADH who actually has CSW precipitates cerebral vasospasm and infarction."
            ),
            "HAAD / DHA": (
                "Fluid restriction protocols and pharmacological second-line options in chronic SIADH",
                "First-line fluid restriction to 800-1,000 mL/24h; adding oral urea powder or sodium chloride tablets with low-dose loop diuretics for refractory outpatient management.",
                "UAE endocrine consensus supports oral urea as a safe, effective osmotic aquaretic for chronic SIADH, inducing solute diuresis without risk of hepatotoxicity."
            ),
            "UHS MBBS": (
                "Neuropathology of Central Pontine Myelinolysis (Osmotic Demyelination)",
                "Symmetrical loss of myelin in the central basis pontis with preservation of neuronal cell bodies and axons, accompanied by macrophage infiltration and absence of prominent inflammation.",
                "Undergraduate pathology describes CPM: rapid hypertonic stress causes shrinkage of oligodendrocytes in the compact transverse pontine fibers, causing irreversible myelin sheath breakdown."
            )
        }
    },

    # Domain 61: Nephrolithiasis & Urolithiasis
    {
        "id": "domain_61_nephrolithiasis",
        "entity": "nephrolithiasis and obstructive urolithiasis",
        "hallmark": "sudden-onset excruciating colicky unilateral flank pain radiating to the ipsilateral groin and labium/testis, gross hematuria, and non-contrast CT showing a 7 mm stone at the ureterovesical junction",
        "system": "Renal",
        "ref_key": "acid",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Physicochemical mechanisms of crystal supersaturation and urinary inhibitors",
                "Calcium oxalate crystal nucleation driven by urinary supersaturation, hypercalciuria, hyperoxaluria, and deficiency of endogenous crystallization inhibitors like urinary citrate.",
                "Urinary citrate forms soluble complexes with calcium, inhibiting calcium oxalate crystallization; systemic acidosis stimulates proximal tubular citrate reabsorption, causing hypocitraturia and stones."
            ),
            "Step 2 CK": (
                "Non-contrast helical computed tomography and indications for emergency decompression",
                "Low-dose non-contrast CT of the abdomen and pelvis as the diagnostic imaging modality of choice; emergency ureteral stenting or percutaneous nephrostomy for stone with fever and obstruction.",
                "An obstructed infected kidney (urolithiasis with fever, pyuria, and hydronephrosis) is a surgical emergency requiring immediate decompression via retrograde ureteral stent or percutaneous nephrostomy."
            ),
            "Step 3": (
                "Medical expulsive therapy and 24-hour urine metabolic evaluation",
                "Alpha-1 receptor antagonists (tamsulosin 0.4 mg daily) to facilitate distal ureteral stone passage (< 10 mm); comprehensive 24-hour urine metabolic profile after stone resolution.",
                "Tamsulosin relaxes distal ureteral smooth muscle, increasing spontaneous expulsion rates for stones 5-10 mm; 24-hour urine collection identifies treatable metabolic abnormalities."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on renal colic analgesia and shockwave lithotripsy (ESWL)",
                "First-line analgesia with intravenous or rectal NSAIDs (diclofenac or ketorolac); offering shockwave lithotripsy (ESWL) or ureteroscopy for non-passing stones < 10 mm.",
                "NICE guideline NG118 mandates NSAIDs as the first-line analgesic of choice over opioids for acute renal colic, demonstrating superior pain reduction and fewer adverse effects."
            ),
            "AMC": (
                "Uric acid stones: Radiolucency on plain radiography and urinary alkalinization",
                "Radiolucent stones on plain abdominal X-ray (visible on non-contrast CT) formed in persistently acidic urine (pH < 5.5), successfully dissolved with oral potassium citrate.",
                "Australian guidelines emphasize that pure uric acid calculi are radiolucent on KUB radiographs and can be completely chemolysed non-operatively by alkalinizing urine to pH 6.5-7.0."
            ),
            "MCCQE": (
                "Renal ultrasound in pregnancy for suspected acute nephrolithiasis",
                "Renal ultrasonography as first-line imaging in pregnant women, evaluating for stone visualization, unilateral hydronephrosis, and absence of ureteral jet on color Doppler.",
                "Canadian medical objectives focus on minimizing fetal radiation: ultrasound is the initial modality; transvaginal ultrasound or MRI without gadolinium is considered if diagnosis is uncertain."
            ),
            "FCPS": (
                "Surgical modalities: Extracorporeal Shock Wave Lithotripsy (ESWL) versus PCNL versus URS",
                "Percutaneous nephrolithotomy (PCNL) for renal calculi > 20 mm or staghorn calculi; retrograde intrarenal surgery (RIRS) / ureteroscopy for lower pole stones 10-20 mm.",
                "In urological surgical training, PCNL is the gold standard for large complex stones (> 2 cm); shockwave lithotripsy is contraindicated in pregnancy, bleeding diatheses, and distal obstruction."
            ),
            "NLE": (
                "Three anatomical sites of natural ureteral constriction",
                "Three physiological narrowing sites where calculi most frequently impinge: Ureteropelvic junction (UPJ), crossing of the iliac vessels at the pelvic brim, and Ureterovesical junction (UVJ).",
                "National licensing curricula test ureteral anatomy: the ureterovesical junction (UVJ) is the narrowest point of the entire ureter, representing the most common site of stone impaction."
            ),
            "NEET PG": (
                "Cystine stones: Genetic defect in dibasic amino acid transporter and hexagonal crystals",
                "Mutations in SLC3A1 or SLC7A9 disrupting the proximal tubular COLA transporter (Cystine, Ornithine, Lysine, Arginine), producing pathognomonic hexagonal crystals on urinalysis.",
                "NEET PG questions focus on cystinuria: autosomal recessive defect leading to recurrent childhood staghorn stones, positive sodium cyanide-nitroprusside test, and hexagonal crystals."
            ),
            "MRCP": (
                "Enteric hyperoxaluria following Roux-en-Y gastric bypass or Crohn disease",
                "Malabsorption of fatty acids binding intraluminal calcium (saponification), leaving free unbound oxalate to be hyper-absorbed in the colon, producing severe calcium oxalate stones.",
                "MRCP clinical scenarios test enteric hyperoxaluria: fat malabsorption in ileal resection or bariatric surgery leaves dietary oxalate unbound to calcium, leading to massive renal oxalate stone burdens."
            ),
            "MRCEM": (
                "Emergency point-of-care ultrasound (POCUS) and exclusion of ruptured AAA",
                "POCUS demonstrating unilateral hydronephrosis in renal colic, while simultaneously visualizing the infrarenal abdominal aorta to exclude an expanding or leaking aneurysm in older patients.",
                "In emergency patients over 50 presenting with acute flank pain and hematuria, bedside ultrasound must visualize the abdominal aorta to avoid mistaking a catastrophic ruptured AAA for renal colic."
            ),
            "SMLE": (
                "Hot climate, dehydration, and lifestyle risk factors for recurrent urolithiasis",
                "High ambient temperatures causing chronic concentrated urine and low volume, managed with aggressive fluid intake targeting at least 2.5 to 3 liters of urine output daily.",
                "Saudi clinical guidelines emphasize dietary modification: maintaining high fluid intake, normal dietary calcium (not low calcium), restricted animal protein, and low dietary sodium."
            ),
            "HAAD / DHA": (
                "Dietary calcium restriction myth and paradoxical stone risk increase",
                "Counseling patients that restricting dietary calcium actually increases calcium oxalate stone formation by freeing dietary oxalate for hyper-absorption in the bowel.",
                "UAE health authority guidelines emphasize that maintaining normal dietary calcium intake (1,000-1,200 mg/day) binds oxalate in the intestinal lumen, safely reducing urinary oxalate excretion."
            ),
            "UHS MBBS": (
                "Microscopic morphology and chemical classification of urinary calculi",
                "Calcium oxalate monohydrate (dumbbell-shaped) versus dihydrate (envelope-shaped), magnesium ammonium phosphate struvite (coffin-lid crystals), and uric acid (pleomorphic rhomboids).",
                "Undergraduate pathology details crystal morphology: envelope-shaped calcium oxalate dihydrate crystals and coffin-lid struvite crystals formed by urease-producing Proteus infections."
            )
        }
    },

    # Domain 62: Renovascular Hypertension & Renal Artery Stenosis
    {
        "id": "domain_62_renovascular_htn",
        "entity": "renovascular hypertension and renal artery stenosis",
        "hallmark": "refractory hypertension requiring four antihypertensive medications, continuous epigastric/flank systolic-diastolic bruit, and acute increase in serum creatinine > 35% after starting lisinopril",
        "system": "Renal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Goldblatt kidney model, renin-angiotensin-aldosterone axis, and efferent arteriolar tone",
                "Unilateral renal hypoperfusion stimulating juxtaglomerular apparatus renin release; angiotensin II preferentially constricts efferent arterioles to preserve glomerular filtration rate (GFR).",
                "In bilateral renal artery stenosis (or stenosis in a solitary kidney), GFR is critically dependent on angiotensin II-mediated efferent arteriolar vasoconstriction; ACE inhibitors precipitate acute renal failure."
            ),
            "Step 2 CK": (
                "Fibromuscular dysplasia versus atherosclerotic renal artery stenosis",
                "Atherosclerotic disease affecting proximal ostial artery in older smokers; Fibromuscular dysplasia (FMD) affecting medial layers in young women ('string of beads' on angiography).",
                "Renovascular hypertension accounts for secondary hypertension: FMD typically presents in women under 35 with carotid/renal bruits, successfully cured with percutaneous balloon angioplasty without stenting."
            ),
            "Step 3": (
                "Medical therapy versus renal artery revascularization (ASTRAL and CORAL trial evidence)",
                "Maximizing medical therapy with statins, antiplatelet agents, and careful blood pressure control as first-line strategy for atherosclerotic renal artery stenosis over routine stenting.",
                "Landmark clinical trials (CORAL, ASTRAL) demonstrated that routine renal artery stenting does not confer clinical benefit over optimal medical therapy in stable atherosclerotic renovascular disease."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on secondary hypertension screening and diagnostic Doppler ultrasound",
                "Screening with renal duplex ultrasound or CT/MR angiography in patients with resistant hypertension, flash pulmonary edema, or worsening renal function on ACE inhibitors.",
                "NICE guideline NG136 recommends investigating secondary hypertension in patients under 40 or those with resistant hypertension (uncontrolled on 3 optimal antihypertensive classes)."
            ),
            "AMC": (
                "Flash pulmonary edema (Pickering syndrome) in bilateral renal artery stenosis",
                "Recurrent sudden-onset acute pulmonary edema in a hypertensive patient with preserved left ventricular ejection fraction, representing a primary indication for renal revascularization.",
                "Australian cardiology consensus identifies flash pulmonary edema (Pickering syndrome) in bilateral RAS as a definitive indication for urgent catheter-based renal revascularization."
            ),
            "MCCQE": (
                "Acute renal failure following ACE inhibitor or ARB initiation",
                "Routine measurement of serum creatinine and potassium 1 to 2 weeks after starting ACE inhibitors; a rise in creatinine > 30-35% raises high clinical suspicion for bilateral RAS.",
                "Canadian medical objectives emphasize that an abrupt decline in GFR after starting an ACE inhibitor or ARB is a classic clinical clue unmasking underlying bilateral renal artery stenosis."
            ),
            "FCPS": (
                "Endovascular stenting versus balloon angioplasty operative techniques",
                "Percutaneous transluminal balloon angioplasty without stent placement for fibromuscular dysplasia; balloon-expandable metallic stenting for atherosclerotic ostial lesions.",
                "In interventional radiology and vascular surgery, FMD responds exceptionally well to simple balloon dilation (curing hypertension in > 80%), while atherosclerotic ostial lesions require stents."
            ),
            "NLE": (
                "Clinical physical examination findings in secondary renovascular hypertension",
                "A continuous systolic-diastolic abdominal or epigastric vascular bruit with a high-pitched diastolic component radiating into the flanks.",
                "National licensing curricula test physical signs of secondary hypertension: an abdominal systolic-diastolic bruit has high specificity for hemodynamically significant renal artery stenosis."
            ),
            "NEET PG": (
                "Pathology of Fibromuscular Dysplasia: Medial fibroplasia versus intimal/perimedial types",
                "Medial fibroplasia accounting for 85% of cases, featuring alternating areas of thinned media and fibromuscular ridges containing excessive collagen, creating the 'string of beads' appearance.",
                "NEET PG pathology tests FMD: medial fibroplasia is the most common subtype, characterized by aneurysmal dilation alternating with stenosis, affecting renal, carotid, and vertebral arteries."
            ),
            "MRCP": (
                "Renal vein renin ratio (RVRR) sampling and diagnostic significance",
                "Selective catheterization of both renal veins to measure renin concentrations; an ischemic-to-contralateral renal vein renin ratio >= 1.5 predicts cure following revascularization.",
                "MRCP clinical endocrinology scenarios test renal vein renin ratios: unilateral hypersecretion of renin with contralateral suppression indicates functional unilateral renovascular hypertension."
            ),
            "MRCEM": (
                "Emergency department management of hypertensive emergency with flash pulmonary edema",
                "Immediate intravenous nitroglycerin infusion (high-dose vasodilator), non-invasive positive pressure ventilation (CPAP/BiPAP), and loop diuretics in the resuscitation bay.",
                "Emergency resuscitation in acute hypertensive crisis with flash pulmonary edema prioritizes aggressive afterload reduction using IV nitrates to rapidly offload the left ventricle."
            ),
            "SMLE": (
                "Screening for extra-renal vascular involvement in fibromuscular dysplasia",
                "One-time comprehensive vascular imaging from head to pelvis (CTA or MRA) in any patient diagnosed with FMD to screen for occult intracranial and visceral aneurysms or dissections.",
                "Saudi clinical practice guidelines recommend screening the entire arterial tree in confirmed FMD due to the high co-prevalence of asymptomatic intracranial berry aneurysms."
            ),
            "HAAD / DHA": (
                "Resistant hypertension evaluation algorithms and renal denervation considerations",
                "Excluding white-coat hypertension with 24-hour ambulatory blood pressure monitoring, confirming medication compliance, and screening for obstructive sleep apnea and RAS.",
                "UAE cardiovascular centers establish protocolized resistant hypertension clinics, evaluating refractory patients for catheter-based renal sympathetic denervation in specialized settings."
            ),
            "UHS MBBS": (
                "Microscopic pathology of ischemic renal atrophy and contralateral hypertensive arteriolosclerosis",
                "Stenotic kidney showing diffuse tubular atrophy, interstitial fibrosis, and crowded glomeruli; contralateral non-stenotic kidney showing severe hyaline and hyperplastic arteriolosclerosis.",
                "Undergraduate pathology emphasizes the Goldblatt phenomenon: the ischemic kidney is protected from systemic pressure while the contralateral kidney bears the brunt of malignant hypertensive vascular damage."
            )
        }
    },

    # Domain 63: Multiple Myeloma & Plasma Cell Dyscrasias
    {
        "id": "domain_63_multiple_myeloma",
        "entity": "multiple myeloma and monoclonal gammopathies",
        "hallmark": "punched-out osteolytic bone lesions on skeletal survey, serum creatinine 2.8 mg/dL, normocytic anemia, hypercalcemia 12.4 mg/dL, and elevated monoclonal paraprotein spike",
        "system": "Hematology",
        "ref_key": "anemia",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Neoplastic plasma cell bone marrow proliferation and osteoclast activating factors",
                "Clonal plasma cell expansion in bone marrow producing excessive IL-6 and DKK1 (inhibiting Wnt/osteoblasts) while stimulating RANKL to cause unrestrained osteoclast lytic bone destruction.",
                "Multiple myeloma plasma cells produce monoclonal immunoglobulin (IgG or IgA) and stimulate osteoclasts via RANKL/MIP-1alpha; because osteoblasts are inhibited, bone scans (technetium-99m) are false-negative."
            ),
            "Step 2 CK": (
                "CRAB criteria and initial triplet induction therapy",
                "Fulfillment of CRAB criteria (HyperCalcemia, Renal insufficiency, Anemia, Bone lytic lesions); starting triplet induction with bortezomib, lenalidomide, and dexamethasone (VRd).",
                "Diagnosis of multiple myeloma requires >= 10% clonal bone marrow plasma cells plus CRAB end-organ damage or myeloma-defining biomarkers; standard induction is proteasome inhibitor-based triplet therapy."
            ),
            "Step 3": (
                "Autologous stem cell transplantation (ASCT) and maintenance therapy",
                "Consolidation with high-dose melphalan conditioning followed by autologous hematopoietic stem cell transplantation in transplant-eligible patients, followed by lenalidomide maintenance.",
                "Autologous stem cell transplant significantly improves progression-free and overall survival; alkylating agents (e.g., melphalan) must be avoided prior to stem cell harvest to prevent stem cell toxicity."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on investigating suspected myeloma and whole-body imaging",
                "Screening with serum protein electrophoresis, serum free light chain assay, and urine Bence Jones protein; whole-body low-dose CT or whole-body MRI as preferred imaging over plain X-rays.",
                "NICE guideline NG35 recommends whole-body low-dose CT as first-line imaging for suspected myeloma, offering superior sensitivity over conventional skeletal surveys for detecting small lytic lesions."
            ),
            "AMC": (
                "Monoclonal Gammopathy of Undetermined Significance (MGUS) versus Smoldering Myeloma",
                "MGUS: serum M-protein < 30 g/L, bone marrow clonal plasma cells < 10%, and absence of CRAB symptoms, monitored with annual SPEP and FLC without active cytotoxic therapy.",
                "Australian hematology guidelines detail MGUS surveillance: annual monitoring for malignant progression (approx. 1% annual risk of transforming to symptomatic multiple myeloma)."
            ),
            "MCCQE": (
                "Myeloma cast nephropathy (light-chain nephropathy) pathophysiology and prevention",
                "Excessive monoclonal free light chains filtering across glomeruli, overwhelming proximal reabsorption, and precipitating with Tamm-Horsfall mucoprotein in distal tubules, forming obstructive casts.",
                "Canadian medical objectives emphasize cast nephropathy: light chains are toxic to proximal tubular cells; vigorous hydration and early treatment to lower light chains prevent irreversible end-stage renal disease."
            ),
            "FCPS": (
                "Orthopedic management of impending pathological fractures (Mirels score)",
                "Prophylactic internal fixation or intramedullary rodding for long bone lytic lesions with high Mirels score (>= 8) to prevent catastrophic complete pathological fracture.",
                "In surgical oncology, prophylactic stabilization of weight-bearing long bones (e.g., femur) followed by localized palliative radiation therapy preserves mobility and eliminates fracture pain."
            ),
            "NLE": (
                "Classic laboratory tetrad of Multiple Myeloma (CRAB mnemonic)",
                "HyperCalcemia (stones, groans, psychiatric overtones), Renal failure (cast nephropathy), Anemia (fatigue, pallor), and Bone lytic lesions causing severe bone pain.",
                "National licensing curricula test the CRAB mnemonic, emphasizing that normal bone scans do not exclude multiple myeloma, which requires plain radiographs, CT, or MRI."
            ),
            "NEET PG": (
                "Serum Protein Electrophoresis (SPEP) M-spike and immunofixation",
                "Dense, narrow-based band in the gamma-globulin region on serum protein electrophoresis (M-spike), confirmed as monoclonal IgG kappa or lambda on immunofixation electrophoresis.",
                "NEET PG pathology and biochemistry questions focus on SPEP: an M-spike represents monoclonal paraprotein; urine immunofixation detects free Bence Jones light chains."
            ),
            "MRCP": (
                "AL (Primary) Amyloidosis association and Congo red birefringence",
                "Monoclonal light chains forming insoluble beta-pleated fibrillar sheets depositing in heart, kidneys, and tongue, showing apple-green birefringence under polarized light after Congo red staining.",
                "MRCP clinical scenarios test AL amyloidosis: macroglossia, periorbital ecchymoses ('raccoon eyes'), restrictive cardiomyopathy, and heavy proteinuria complicating plasma cell dyscrasias."
            ),
            "MRCEM": (
                "Emergency management of severe hypercalcemia of malignancy",
                "Aggressive intravenous 0.9% normal saline rehydration (200-300 mL/h), followed by IV bisphosphonates (zoledronic acid) and calcitonin for rapid short-term calcium lowering.",
                "In emergency care of hypercalcemic crisis (calcium > 14 mg/dL), fluid restoration corrects prerenal azotemia; bisphosphonates take 48-72 hours to work, so calcitonin provides rapid acute bridging."
            ),
            "SMLE": (
                "Venous thromboembolism prophylaxis during immunomodulatory drug (IMiD) therapy",
                "Mandatory thromboprophylaxis with low-dose aspirin or low-molecular-weight heparin in all myeloma patients receiving lenalidomide or thalidomide with dexamethasone.",
                "Saudi oncology guidelines enforce VTE prophylaxis protocols because combining immunomodulatory agents with high-dose corticosteroids markedly increases deep vein thrombosis risk."
            ),
            "HAAD / DHA": (
                "Bortezomib-induced peripheral neuropathy screening and subcutaneous administration",
                "Screening for sensorimotor peripheral neuropathy, utilizing subcutaneous rather than intravenous bortezomib to significantly reduce neurotoxicity without sacrificing efficacy.",
                "UAE cancer care quality guidelines mandate subcutaneous administration of bortezomib, which dramatically lowers the incidence of treatment-limiting painful peripheral neuropathy."
            ),
            "UHS MBBS": (
                "Bone marrow aspirate and biopsy cytology of neoplastic plasma cells",
                "Marked increase in atypical plasma cells (> 10-30%) with eccentric 'clock-face' or 'cartwheel' chromatin, abundant basophilic cytoplasm, prominent perinuclear halo, and Mott cells.",
                "Undergraduate hematology describes the neoplastic plasma cell: flame cells, Dutcher bodies (intranuclear inclusions), and Russell bodies (cytoplasmic immunoglobulin inclusions)."
            )
        }
    }
]
