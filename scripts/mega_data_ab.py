"""
Mega Data Part AB: Domains 170 to 175 (Pediatric Orthopedics, Neonatal Critical Care, Dermatologic Oncology, HIV Opportunistic, Environmental Emergencies, Disaster Triage)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_AB = [
    # Domain 170: Pediatric Orthopedics & Hip Disorders
    {
        "id": "domain_170_pediatric_orthopedics",
        "entity": "Pediatric hip pathology: Developmental dysplasia of the hip (DDH), Slipped capital femoral epiphysis (SCFE), and Septic arthritis",
        "hallmark": "Barlow and Ortolani signs with asymmetrical skin folds (DDH); dull groin pain, limp, and obligate external rotation upon hip flexion in an overweight adolescent (SCFE); or acute inability to bear weight with high fever and Kocher criteria (septic arthritis)",
        "system": "Musculoskeletal",
        "ref_key": "peds_ortho",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Surgery",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomical and biomechanical failure of the femoral physis in Slipped Capital Femoral Epiphysis",
                "Shearing displacement of the femoral neck anteriorly and superiorly relative to the epiphysis through the hypertrophic zone of the proximal femoral growth plate.",
                "During pubertal growth spurts, vertical orientation of the physis and mechanical loading in overweight adolescents exceed physeal shear strength, displacing the epiphysis posteriorly and medially."
            ),
            "Step 2 CK": (
                "Slipped Capital Femoral Epiphysis (SCFE): Diagnostic radiography and emergency in situ pin fixation",
                "AP and frog-leg lateral pelvic radiographs demonstrating Kline line failing to intersect the lateral femoral epiphysis, requiring immediate non-weightbearing and emergent in situ single-screw pin fixation.",
                "Attempting forceful closed reduction is strictly contraindicated as it stretches and tears retinacular vessels running along the femoral neck, precipitating avascular necrosis of the femoral head."
            ),
            "Step 3": (
                "Developmental Dysplasia of the Hip (DDH): Ultrasonography screening and Pavlik harness therapy",
                "Serial clinical examination with Barlow (provocative dislocation) and Ortolani (reduction) maneuvers, confirmed by hip dynamic ultrasound at 4-6 weeks, treated with a dynamic Pavlik harness.",
                "The Pavlik harness maintains the hip in flexion (90-100 degrees) and controlled abduction, centering the cartilaginous femoral head deeply within the acetabulum to stimulate normal concentric remodeling."
            ),
            "PLAB / UKMLA": (
                "Kocher criteria for differentiating septic arthritis from transient synovitis of the hip",
                "Evaluating 4 criteria: non-weightbearing on affected side, oral temperature > 38.5 C, ESR > 40 mm/hr, and WBC > 12,000/uL; presence of 4 criteria gives a > 90% probability of septic arthritis.",
                "Septic arthritis is an orthopedic surgical emergency requiring urgent arthrocentesis and emergent surgical washout/arthrotomy to prevent irreversible chondrolysis and permanent hip deformity."
            ),
            "AMC": (
                "Legg-Calvé-Perthes disease: Idiopathic avascular necrosis of the femoral head in young boys",
                "Self-limiting avascular necrosis of the capital femoral epiphysis in boys aged 4-8 years presenting with an insidious, painless or mildly painful limp and limited hip internal rotation and abduction.",
                "Radiographs progress through necrosis, fragmentation, reossification, and remodeling; containment of the femoral head within the spherical acetabulum prevents permanent mushroom-shaped deformity."
            ),
            "MCCQE": (
                "Nursemaid elbow (radial head subluxation): Mechanism of injury and reduction maneuvers",
                "Sudden longitudinal traction on an extended and pronated forearm in a toddler, causing the annular ligament to slip over the radial head into the radiohumeral joint, reduced by hyperpronation or supination-flexion.",
                "In young children, the radial head is cartilaginous and smaller than the radial neck; gentle hyperpronation of the flexed elbow snaps the trapped annular ligament back into place, with immediate symptom relief."
            ),
            "FCPS": (
                "Congenital Talipes Equinovarus (Clubfoot): Ponseti conservative serial casting method",
                "Correcting CAVE deformities (Cavus, Adductus, Varus, Equinus) through weekly gentle manual manipulation and serial long-leg plaster casting, followed by percutaneous Achilles tenotomy in > 80% of cases.",
                "The Ponseti method addresses abnormal tarsal joint alignment without aggressive extensive surgical release, achieving a flexible, plantigrade, pain-free foot with long-term success rates exceeding 95%."
            ),
            "NLE": (
                "Genu varum (bow legs) versus Genu valgum (knock knees): Physiological development and Rickets",
                "Physiological genu varum is normal until age 2 years, transitioning to physiological genu valgum with peak at age 3-4 years, normalizing by age 7; pathological varum suggests nutritional rickets or Blount disease.",
                "Nutritional vitamin D deficiency rickets impairs chondrocyte apoptosis and osteoid mineralization at the physis, causing cupping, fraying, and widening of the metaphysis with persistent symmetrical bowing."
            ),
            "NEET PG": (
                "Osteochondritis dissecans and Osgood-Schlatter disease: Traction apophysitis pathology",
                "Repetitive quadriceps contraction pulling on the patellar tendon insertion at the tibial tubercle apophysis in active adolescent athletes, presenting with localized swelling and tenderness over the tibial tubercle.",
                "Osgood-Schlatter disease is a self-limiting traction microtrauma of the secondary ossification center; management is conservative with activity modification, ice, NSAIDs, and hamstring stretching."
            ),
            "MRCP": (
                "Transient synovitis (toxic synovitis) of the hip: Natural history and conservative management",
                "Benign, self-limiting sterile reactive hip synovitis developing 1-2 weeks after a viral upper respiratory illness in a child aged 3-10 years, managed with rest and oral NSAIDs, resolving within 7-10 days.",
                "Careful ultrasound rules out joint effusion exceeding criteria; absence of fever and normal inflammatory markers differentiate transient synovitis from aggressive bacterial septic arthritis."
            ),
            "MRCEM": (
                "Emergency arthrocentesis in suspected pediatric septic arthritis of the hip",
                "Ultrasound-guided needle aspiration of the hip joint under sterile conditions in the operating theater or procedure room, analyzing synovial fluid for cell count, Gram stain, and bacterial culture.",
                "Confirming cloudy synovial fluid with leukocytosis (> 50,000/uL with > 75% polymorphonuclear neutrophils) mandates immediate intravenous flucloxacillin or cefazolin and formal surgical drainage."
            ),
            "SMLE": (
                "Scoliosis screening: Adams forward bend test, scoliometer evaluation, and Cobb angle",
                "Adams forward bend test demonstrating thoracic or lumbar rotational asymmetry (rib hump), confirmed on standing full-spine radiography with Cobb angle measurement.",
                "Curves between 25 and 40 degrees in growing adolescents are treated with rigid thoracolumbosacral orthosis (TLSO) bracing to arrest progression; Cobb angles > 45-50 degrees require posterior spinal fusion."
            ),
            "HAAD / DHA": (
                "Salter-Harris physeal fracture classification and prognostic growth arrest risks",
                "Grading growth plate injuries from Type I (transverse physeal slip) to Type V (compression/crush injury of physis); Types III, IV, and V involve the articular surface and carry high growth arrest risks.",
                "Salter-Harris Type IV fractures cross the epiphysis, physis, and metaphysis, producing bony bridge formation across the physis that causes progressive angular limb deformity without anatomic reduction."
            ),
            "UHS MBBS": (
                "Anatomy of the hip joint blood supply and vulnerability to pediatric avascular necrosis",
                "The capital femoral epiphysis receives its predominant arterial blood supply from the lateral epiphyseal branches of the medial femoral circumflex artery running within retinacular fibers along the femoral neck.",
                "Displacement in SCFE or tamponade from tense joint effusion in septic arthritis compresses these fragile retinacular vessels, compromising epiphyseal arterial perfusion and causing femoral head necrosis."
            )
        }
    },

    # Domain 171: Neonatal Critical Care & Resuscitation
    {
        "id": "domain_171_neonatal_critical_care",
        "entity": "Neonatal resuscitation, meconium aspiration syndrome, and hypoxic-ischemic encephalopathy",
        "hallmark": "apneic or gasping newborn with heart rate < 100 bpm requiring positive pressure ventilation (NRP), severe respiratory distress with coarse patchy infiltrates and hyperinflation (meconium aspiration), or lethargy and seizures post-asphyxia (HIE)",
        "system": "Respiratory",
        "ref_key": "neonatology_resuscitation",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Pediatrics",
            "FCPS": "Pediatrics",
            "UHS MBBS": "Pediatrics",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Physiological transition from fetal to neonatal circulation and pulmonary vascular resistance",
                "First breath and umbilical cord clamping causing lung aeration, dramatic rise in alveolar oxygen tension, and profound fall in pulmonary vascular resistance, closing the foramen ovale and ductus arteriosus.",
                "Removal of the low-resistance placental circuit elevates systemic vascular resistance; lung expansion stimulates endothelial nitric oxide and prostacyclin production, dilating the pulmonary vascular bed."
            ),
            "Step 2 CK": (
                "Neonatal Resuscitation Program (NRP): Initial steps, positive pressure ventilation, and chest compressions",
                "Warm, dry, stimulate; if heart rate < 100 bpm or gasping/apnea, initiate Positive Pressure Ventilation (PPV) with room air (21% O2) within 60 seconds; initiate chest compressions if HR remains < 60 bpm despite effective PPV.",
                "Effective ventilation of the lungs is the single most critical step in neonatal resuscitation; starting resuscitation with 100% oxygen in term infants increases oxidative stress and neonatal mortality."
            ),
            "Step 3": (
                "Therapeutic hypothermia protocol for Moderate-to-Severe Hypoxic-Ischemic Encephalopathy (HIE)",
                "Initiating controlled whole-body cooling to 33.5 C within 6 hours of birth for 72 hours, followed by slow rewarming at 0.5 C per hour in term infants with signs of asphyxia and encephalopathy.",
                "Therapeutic hypothermia suppresses the secondary energy failure phase, reduces apoptotic neuronal cascades, lowers cerebral metabolic demand, and decreases death and severe cerebral palsy by 25-30%."
            ),
            "PLAB / UKMLA": (
                "Meconium aspiration syndrome (MAS): Pathophysiology, chemical pneumonitis, and surfactant deactivation",
                "Intrauterine fetal distress triggering gasping and meconium passage; inhaled meconium causes mechanical airway obstruction, severe chemical pneumonitis, and direct inactivation of pulmonary surfactant.",
                "Ball-valve obstruction produces localized air trapping, alveolar overdistension, and high pneumothorax risks; secondary surfactant degradation requires mechanical ventilation, sedation, and surfactant replacement."
            ),
            "AMC": (
                "Persistent Pulmonary Hypertension of the Newborn (PPHN): Inhaled nitric oxide therapy",
                "Failure of pulmonary vascular resistance to drop at birth, causing suprasystemic pulmonary pressures, right-to-left shunting through ductus arteriosus/foramen ovale, treated with inhaled nitric oxide (iNO).",
                "Pre-ductal (right hand) versus post-ductal (lower extremity) pulse oximetry gradient > 5-10% confirms right-to-left ductal shunting; inhaled NO selectively dilates ventilated pulmonary arterioles."
            ),
            "MCCQE": (
                "Neonatal hypoglycemia screening, target glucose thresholds, and intravenous dextrose therapy",
                "Screening at-risk neonates (SGA, LGA, infant of diabetic mother); threshold for intervention is plasma glucose < 2.2 mmol/L (< 40 mg/dL) in the first 4 hours or < 2.6 mmol/L (< 45 mg/dL) thereafter, treated with IV 10% dextrose.",
                "Hyperinsulinism in infants of diabetic mothers suppresses gluconeogenesis and glycogenolysis; persistent neuroglycopenia risks permanent occipital cerebral injury, visual impairment, and epilepsy."
            ),
            "FCPS": (
                "Transient Tachypnea of the Newborn (TTN): Delayed fetal lung liquid resorption and fluid clearance",
                "Elective cesarean delivery without labor resulting in delayed clearance of fetal alveolar fluid by epithelial sodium channels (ENaC), presenting with tachypnea, prominent interlobar fluid on CXR, resolving in 24-48 hours.",
                "Labor contractions stimulate fetal catecholamine and cortisol release, triggering pulmonary epithelial transition from active chloride/fluid secretion to active sodium and fluid reabsorption via ENaC channels."
            ),
            "NLE": (
                "Apgar score components, scoring criteria at 1 and 5 minutes, and clinical significance",
                "Scoring Appearance (color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration (0 to 2 points each); assesses immediate extrauterine transition, not for resuscitation decisions.",
                "Resuscitation must proceed immediately based on heart rate and respiration without waiting for the 1-minute Apgar score; a low 5-minute Apgar score correlates with long-term neurological prognosis."
            ),
            "NEET PG": (
                "Retinopathy of Prematurity (ROP): Oxygen toxicity pathogenesis, screening criteria, and anti-VEGF",
                "Phase 1 hyperoxia halts normal retinal vascularization; phase 2 relative hypoxia in non-vascularized retina drives massive VEGF overproduction, inducing pathological neovascularization and retinal detachment.",
                "Screening indicated for infants born <= 30 weeks gestation or birth weight <= 1,500 grams; treated with laser photocoagulation or intravitreal anti-VEGF antibodies (bevacizumab/ranibizumab)."
            ),
            "MRCP": (
                "Bronchopulmonary dysplasia (BPD): Definition, ventilatory barotrauma, and caffeine citrate",
                "Requirement for supplemental oxygen at 36 weeks postmenstrual age in very preterm infants due to arrested alveolar and microvascular development from mechanical barotrauma, volutrauma, and oxygen toxicity.",
                "Early administration of caffeine citrate (methylxanthine stimulating central respiratory drive) significantly reduces apnea of prematurity, shortens mechanical ventilation duration, and lowers BPD incidence."
            ),
            "MRCEM": (
                "Neonatal pneumothorax emergency recognition and cold-light transillumination",
                "Sudden acute desaturation, bradycardia, and unilateral hyperresonance in an infant on positive pressure ventilation; bedside fiberoptic transillumination reveals a large hyperilluminant halo, relieved by needle thoracentesis.",
                "Tension pneumothorax causes immediate mediastinal shift and caval compression, producing acute cardiovascular collapse; immediate needle decompression at the 2nd intercostal space midclavicular line is life-saving."
            ),
            "SMLE": (
                "Surfactant replacement therapy in Neonatal Respiratory Distress Syndrome (RDS)",
                "Exogenous animal-derived surfactant (poractant alfa / beractant) administered via endotracheal tube or minimally invasive surfactant therapy (MIST) in premature infants with surfactant deficiency.",
                "Surfactant lowers alveolar surface tension, preventing end-expiratory alveolar collapse (atelectasis); early replacement within 2 hours of life significantly reduces pneumothorax, pulmonary interstitial emphysema, and mortality."
            ),
            "HAAD / DHA": (
                "Universal newborn hearing screening (UNHS): Automated ABR and Otoacoustic emissions (OAE)",
                "Screening all newborns prior to hospital discharge using Automated Auditory Brainstem Response (A-ABR) or Transient Evoked Otoacoustic Emissions (TEOAE) to detect congenital sensorineural hearing loss.",
                "Outer hair cells of the cochlea generate otoacoustic emissions in response to sound; identifying hearing impairment before 3 months allows intervention by 6 months, optimizing speech and language development."
            ),
            "UHS MBBS": (
                "Physiological versus pathological neonatal jaundice: Bilirubin thresholds and phototherapy",
                "Pathological jaundice appears within the first 24 hours of life, rises > 5 mg/dL/day, or involves direct conjugated bilirubin > 1 mg/dL; physiological jaundice appears at 2-3 days and resolves by 10-14 days.",
                "Unconjugated bilirubin crosses the blood-brain barrier, depositing in the basal ganglia and cranial nerve nuclei (kernicterus); intensive blue phototherapy (wavelength 460-490 nm) converts bilirubin to excretable lumirubin."
            )
        }
    },

    # Domain 172: Dermatologic Oncology & Cutaneous Lymphomas
    {
        "id": "domain_172_derm_oncology",
        "entity": "Cutaneous neoplasms: Basal cell carcinoma (BCC), Squamous cell carcinoma (SCC), and Mycosis fungoides",
        "hallmark": "pearly translucent papule with rolled borders and telangiectasias (BCC); hyperkeratotic ulcerated non-healing plaque on sun-exposed ear/lip (SCC); or chronic recalcitrant erythematous patches with epidermal tropism (mycosis fungoides)",
        "system": "Dermatology",
        "ref_key": "derm_oncology",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Medicine",
            "FCPS": "Surgery",
            "UHS MBBS": "Medicine",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Molecular oncogenesis of Basal Cell Carcinoma: Sonic Hedgehog signaling and PTCH1 mutations",
                "Inactivating loss-of-function mutations in the PTCH1 tumor suppressor gene disinhibiting the Smoothened (SMO) transmembrane protein, driving continuous GLI1 transcription factor nuclear translocation.",
                "Dysregulated Sonic Hedgehog pathway activity drives uncontrolled basal keratinocyte proliferation; targeted oral SMO inhibitors (vismodegib, sonidegib) achieve high response rates in advanced BCC."
            ),
            "Step 2 CK": (
                "Mohs micrographic surgery: Indications, histological technique, and margin tissue conservation",
                "Indicated for high-risk cutaneous malignancies (BCC and SCC) located on cosmetically sensitive 'mask areas' of the face (H-zone), recurrent tumors, or aggressive histological subtypes (morpheaform BCC).",
                "Mohs surgery examines 100% of the peripheral and deep surgical margins horizontally via intraoperative frozen sections, maximizing healthy tissue preservation while achieving the lowest recurrence rates (< 1-2%)."
            ),
            "Step 3": (
                "Mycosis fungoides (Cutaneous T-cell Lymphoma): Patch/plaque stage and topical / phototherapy",
                "Clonal epidermotropic proliferation of neoplastic CD4+ T-lymphocytes presenting as indolent patches and plaques in sun-shielded areas, managed with topical corticosteroids, topical nitrogen mustard, and narrowband UVB.",
                "Progression through patch, plaque, and tumor stages reflects evolving T-cell clonal expansion; early stage IA/IB disease has an indolent natural history and normal life expectancy with skin-directed therapy."
            ),
            "PLAB / UKMLA": (
                "Cutaneous Squamous Cell Carcinoma (cSCC) high-risk clinicopathological features",
                "Tumor diameter > 2 cm, depth > 4 mm, perineural invasion, poorly differentiated histology, immunosuppression (organ transplant recipients), and recurrence warranting wide surgical excision margins (>= 6-10 mm).",
                "Immunosuppressed solid organ transplant recipients have an 80- to 100-fold increased risk of aggressive cSCC driven by UV radiation and beta-papillomaviruses, with elevated metastatic potential."
            ),
            "AMC": (
                "Keratoacanthoma clinical presentation, rapid growth, and distinction from invasive cSCC",
                "Dome-shaped, symmetric erythematous nodule with a central hyperkeratotic crateriform horn plug that grows rapidly over 4-8 weeks, followed by spontaneous involution, treated by complete surgical excision.",
                "Because histological differentiation between keratoacanthoma and well-differentiated squamous cell carcinoma is notoriously difficult on partial biopsy, complete excision with clear margins is standard."
            ),
            "MCCQE": (
                "Actinic keratosis: Precancerous dysplastic pathology and field-directed therapies",
                "Rough, erythematous, sandpaper-textured scaly macules on sun-damaged skin showing partial-thickness epidermal atypia, treated with cryotherapy (isolated) or topical 5-fluorouracil/imiquimod (field cancerization).",
                "Actinic keratosis represents intraepidermal keratinocyte dysplasia with a 0.1-1% annual risk of malignant transformation into invasive squamous cell carcinoma; field therapy treats subclinical dysplastic clones."
            ),
            "FCPS": (
                "Basal cell carcinoma histological subtypes: Nodular, Superficial, Morpheaform (Infiltrative)",
                "Nodular BCC (islands of basaloid cells with peripheral palisading and retraction artifact); Superficial BCC (buds from epidermis); Morpheaform BCC (thin, infiltrative strands in dense fibrous stroma).",
                "Morpheaform (sclerotic) BCC mimics a scar, lacks distinct clinical borders, and deeply invades subfascial structures, mandating Mohs micrographic surgery rather than standard simple excision."
            ),
            "NLE": (
                "Clinical distinction between Basal Cell Carcinoma and cutaneous Squamous Cell Carcinoma",
                "BCC presents as a shiny, pearly, translucent papule with telangiectasias, rolled borders, and central rodent ulceration; SCC presents as a firm, hyperkeratotic, crusted, erythematous plaque or ulcer.",
                "BCC is the most common human cancer, has virtually zero metastatic potential (< 0.01%), but causes extensive local tissue destruction; SCC carries a definitive risk of regional lymph node metastasis."
            ),
            "NEET PG": (
                "Histological hallmarks of Mycosis Fungoides: Pautrier microabscesses and Sézary syndrome",
                "Collections of atypical convoluted (cerebriform) CD4+ T-lymphocytes within the epidermis (Pautrier microabscesses); Sézary syndrome is the leukemic variant characterized by erythroderma, lymphadenopathy, and circulating Sézary cells.",
                "Sézary cells have characteristic hyperconvoluted, grooved, cerebriform nuclei seen on peripheral blood smears, expressing CD3 and CD4 with loss of mature T-cell surface markers (CD7 and CD26)."
            ),
            "MRCP": (
                "Merkel cell carcinoma: Neuroendocrine pathology, polyomavirus etiology, and pembrolizumab",
                "Rapidly growing, violaceous, painless cutaneous nodule on sun-exposed head/neck in elderly patients, associated with Merkel Cell Polyomavirus (MCPyV), expressing cytokeratin 20 (CK20) in a perinuclear dot pattern.",
                "Merkel cell carcinoma is an extraordinarily aggressive neuroendocrine carcinoma with early lymphatic dissemination; immune checkpoint inhibition with anti-PD-1 (pembrolizumab/avelumab) is first-line therapy."
            ),
            "MRCEM": (
                "Marjolin ulcer: Aggressive squamous cell carcinoma arising in chronic non-healing scars",
                "Malignant transformation of a chronic, non-healing burn scar, venous stasis ulcer, or chronic osteomyelitis draining sinus into an aggressive, poorly differentiated squamous cell carcinoma.",
                "Chronic inflammatory tissue turnover and persistent avascular scarring create an immunologically privileged site permitting malignant transformation; Marjolin ulcers have high metastatic rates (up to 30%)."
            ),
            "SMLE": (
                "Sun protection counseling: UV radiation types, sunscreen SPF, and broad-spectrum coverage",
                "Recommending daily application of broad-spectrum sunscreen (protecting against UVA and UVB) with Sun Protection Factor (SPF) >= 30, reapplied every 2 hours, along with protective clothing and shade.",
                "UVB (290-320 nm) causes direct DNA pyrimidine dimer formation and sunburn; UVA (320-400 nm) penetrates deeper into the dermis, generating reactive oxygen species driving photoaging and carcinogenesis."
            ),
            "HAAD / DHA": (
                "Field cancerization management in actinic keratoses: Topical 5-Fluorouracil protocols",
                "Applying topical 5-fluorouracil 5% cream twice daily for 2 to 4 weeks, producing expected inflammatory erythema, vesiculation, and erosion as it selectively induces apoptosis in rapidly dividing dysplastic cells.",
                "5-FU inhibits thymidylate synthase, starving dysplastic keratinocytes of thymidine for DNA synthesis; educating patients about the expected acute inflammatory reaction ensures compliance and therapeutic success."
            ),
            "UHS MBBS": (
                "Anatomy of the epidermis and cells of origin in cutaneous malignancies",
                "Stratum basale (stem cells giving rise to Basal Cell Carcinoma and melanocytes yielding Melanoma); Stratum spinosum (keratinocytes giving rise to Squamous Cell Carcinoma); Dermis (Merkel cells).",
                "The epidermis is an avascular stratified squamous epithelium; invasion through the basement membrane into the vascularized papillary dermis marks the transition from in situ to invasive carcinoma."
            )
        }
    },

    # Domain 173: Clinical Virology & Opportunistic Infections in HIV
    {
        "id": "domain_173_hiv_opportunistic",
        "entity": "Advanced HIV infection, CD4-stratified opportunistic infections, and IRIS",
        "hallmark": "exertional dyspnea, dry cough, and bilateral diffuse perihilar infiltrates in CD4 < 200 (PCP); multiple focal ring-enhancing brain lesions in CD4 < 100 (Toxoplasma); or headache, fever, and positive India ink in CD4 < 100 (Cryptococcus)",
        "system": "General Principles",
        "ref_key": "hiv_opportunistic",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "HIV cellular viral entry: gp120 binding, CD4 receptor, and CCR5/CXCR4 coreceptors",
                "Viral envelope glycoprotein gp120 binds the host CD4 receptor, inducing a conformational change that enables secondary binding to chemokine coreceptors (CCR5 on macrophages, CXCR4 on T-cells).",
                "Chemokine coreceptor engagement exposes the gp41 transmembrane fusion peptide, driving viral-host lipid bilayer fusion; individuals homozygous for the delta-32 CCR5 mutation are resistant to HIV-1 infection."
            ),
            "Step 2 CK": (
                "Pneumocystis jirovecii pneumonia: Diagnostic silver stain and corticosteroid indications",
                "Bilateral ground-glass infiltrates with elevated LDH, diagnosed by direct silver methenamine staining of induced sputum/BAL, treated with high-dose IV co-trimoxazole and adjunctive corticosteroids.",
                "Adjunctive corticosteroids (oral prednisone) are mandatory when arterial pO2 < 70 mm Hg or A-a gradient >= 35 mm Hg on room air, blunting severe inflammatory respiratory failure caused by antibiotic-induced fungal lysis."
            ),
            "Step 3": (
                "Immune Reconstitution Inflammatory Syndrome (IRIS): Unmasking versus paradoxical presentation",
                "Paradoxical worsening of a pre-existing treated infection or acute unmasking of a subclinical occult opportunistic infection (e.g., TB, cryptococcal meningitis) within weeks of initiating potent antiretroviral therapy (ART).",
                "Rapid recovery of CD4+ T-lymphocyte numbers and antigen-specific cellular immunity unleashes a massive cytokine storm against microbial antigens; managed by continuing ART and adding systemic corticosteroids."
            ),
            "PLAB / UKMLA": (
                "Primary antimicrobial prophylaxis thresholds based on absolute CD4 lymphocyte counts",
                "Trimethoprim-sulfamethoxazole for Pneumocystis jirovecii pneumonia and Toxoplasma gondii prophylaxis at CD4 < 200/uL; azithromycin for Mycobacterium avium complex (MAC) in patients not on immediate ART at CD4 < 50/uL.",
                "Co-trimoxazole (one double-strength tablet daily) provides dual prophylaxis against both PCP pneumonia and toxoplasmosis reactivation; prophylaxis is discontinued when CD4 counts sustain > 200/uL for > 3 months on ART."
            ),
            "AMC": (
                "Cerebral toxoplasmosis versus Primary CNS Lymphoma (PCNSL) neuroimaging differentiation",
                "Multiple ring-enhancing lesions with surrounding vasogenic edema in the basal ganglia and corticomedullary junction (Toxoplasma gondii, treated empirically with pyrimethamine-sulfadiazine).",
                "PCNSL typically presents as a solitary, periventricular, subependymal lesion showing uniform contrast enhancement and positive EBV DNA PCR in the CSF; lack of clinical response to toxoplasma therapy prompts brain biopsy."
            ),
            "MCCQE": (
                "Cryptococcal meningitis: Lumbar puncture opening pressure, India ink, and amphotericin B induction",
                "Subacute headache and fever with markedly elevated CSF opening pressure (> 250 mm H2O) and encapsulated budding yeast on India ink, treated with liposomal amphotericin B plus flucytosine for 2 weeks.",
                "Elevated intracranial pressure is the leading cause of early mortality in cryptococcal meningitis; daily therapeutic lumbar punctures are required until opening pressure normalizes, followed by oral fluconazole consolidation."
            ),
            "FCPS": (
                "Cytomegalovirus (CMV) retinitis and gastrointestinal ulceration in advanced AIDS",
                "Painless loss of vision with 'pizza-pie' fundoscopy (perivascular retinal hemorrhages with granular white retinal necrosis) in CD4 < 50/uL, treated with intravenous or intravitreal ganciclovir/valganciclovir.",
                "Untreated CMV retinitis rapidly leads to full-thickness retinal necrosis and rhegmatogenous retinal detachment; regular ophthalmology surveillance is essential until CD4 counts rise > 100/uL on effective ART."
            ),
            "NLE": (
                "Post-exposure prophylaxis (PEP) for occupational HIV exposure: Timing and regimen",
                "Initiating a 28-day three-drug antiretroviral regimen (e.g., tenofovir, emtricitabine, plus dolutegravir) as soon as possible, ideally within 2 hours and strictly within 72 hours of occupational needlestick exposure.",
                "Early antiretroviral administration blocks local viral reverse transcription and dendritic cell migration, preventing establishment of irreversible systemic latent viral reservoirs in regional lymph nodes."
            ),
            "NEET PG": (
                "Progressive Multifocal Leukoencephalopathy (PML): JC virus and non-enhancing white matter lesions",
                "Reactivation of JC polyomavirus in oligodendrocytes in CD4 < 200/uL causing demyelination, presenting with focal deficits and non-enhancing asymmetric white matter lesions without mass effect on MRI.",
                "Unlike toxoplasmosis or lymphoma, PML lesions lack mass effect and do not demonstrate contrast enhancement or perilesional edema; there is no specific antiviral therapy; immune reconstitution with ART is vital."
            ),
            "MRCP": (
                "Antiretroviral classes and high-yield drug-specific adverse effects",
                "Tenofovir disoproxil fumarate (nephrotoxicity, Fanconi syndrome, bone density loss); efavirenz (vivid dreams, neuropsychiatric symptoms); abacavir (severe hypersensitivity in HLA-B*5701 carriers).",
                "Screening for HLA-B*5701 before prescribing abacavir is legally mandatory; tenofovir alafenamide (TAF) delivers higher intracellular active diphosphate levels with significantly lower renal and bone toxicity than TDF."
            ),
            "MRCEM": (
                "Acute HIV seroconversion syndrome (Primary HIV infection) presentation and RNA testing",
                "Mononucleosis-like illness with fever, diffuse non-pruritic maculopapular rash, pharyngitis, lymphadenopathy, and mouth ulcers, with negative 4th-generation antibody test and high viral load on HIV RNA PCR.",
                "During the initial 'eclipse/window period' (first 10-14 days), anti-HIV antibodies and p24 antigen may be below detection limits; plasma HIV RNA viral load PCR detects millions of viral copies/mL."
            ),
            "SMLE": (
                "Pre-Exposure Prophylaxis (PrEP) protocols and safety monitoring in high-risk individuals",
                "Daily oral tenofovir disoproxil fumarate plus emtricitabine (TDF/FTC) for individuals at high risk of HIV acquisition, requiring documented negative HIV test and normal renal function before starting.",
                "Confirming HIV-negative status prior to initiating PrEP is essential; taking dual-nucleoside PrEP in unrecognized established HIV infection rapidly selects for viral resistance mutations (e.g., M184V)."
            ),
            "HAAD / DHA": (
                "Prevention of mother-to-child transmission (PMTCT) of HIV during pregnancy and delivery",
                "Universal maternal ART throughout pregnancy, elective cesarean section at 38 weeks if maternal viral load > 1,000 copies/mL, infant post-exposure zidovudine prophylaxis, and formula feeding.",
                "Adherence to maternal combination ART suppressing viral load to undetectable levels (< 50 copies/mL) near delivery reduces vertical perinatal transmission rates from 25-30% down to less than 0.5-1%."
            ),
            "UHS MBBS": (
                "Oral manifestations of HIV infection: Oral candidiasis versus Oral hairy leukoplakia",
                "Oral thrush (erythematous base with curd-like white pseudomembranous plaques that scrape off, revealing bleeding mucosa); Oral hairy leukoplakia (non-scrapable white corrugations on lateral tongue, caused by EBV).",
                "Oral candidiasis is caused by Candida albicans fungal overgrowth and scrapes away easily with a tongue blade; oral hairy leukoplakia is an opportunistic epithelial hyperkeratosis driven by Epstein-Barr virus."
            )
        }
    },

    # Domain 174: Environmental & Wilderness Emergencies
    {
        "id": "domain_174_wilderness_emergencies",
        "entity": "Accidental hypothermia, heat stroke versus heat exhaustion, and high-altitude illnesses",
        "hallmark": "core temperature > 40 C with altered mental status and anhidrosis/diaphoresis (heat stroke); core temperature < 30 C with shivering cessation, bradycardia, and Osborn J waves (hypothermia); or ataxia and stupor at altitude (HACE)",
        "system": "General Principles",
        "ref_key": "wilderness_emergencies",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Medicine",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Electrophysiological alterations in hypothermia: Osborn (J) wave and cardiac arrhythmias",
                "Delayed epicardial repolarization producing a prominent positive deflection at the QRS-ST junction (Osborn J wave), progressive sinus bradycardia, PR/QT prolongation, and cold-induced ventricular fibrillation.",
                "Hypothermia depresses myocardial pacemaker conduction velocity and prolongs refractory periods; mechanical agitation of the patient can trigger refractory ventricular fibrillation."
            ),
            "Step 2 CK": (
                "Heat stroke versus heat exhaustion distinction and evaporative / cold-water immersion cooling",
                "Heat stroke requires core body temperature > 40 C with central nervous system dysfunction (confusion, delirium, seizures), treated with immediate whole-body cold-water immersion cooling.",
                "Heat exhaustion maintains intact mental status with core temperature < 40 C; heat stroke carries up to 30-50% mortality from rhabdomyolysis and DIC if rapid cooling to < 39 C is not achieved within 30 minutes."
            ),
            "Step 3": (
                "High-Altitude Cerebral Edema (HACE) and Pulmonary Edema (HAPE) emergency protocols",
                "Immediate descent of at least 500-1,000 meters, supplemental oxygen, hyperbaric portable chamber (Gamow bag), dexamethasone for HACE, and oral nifedipine or tadalafil for HAPE.",
                "HACE is caused by hypobaric hypoxia-induced cerebral vasodilation and capillary leakage; HAPE is caused by uneven hypoxic pulmonary vasoconstriction driving patchy capillary stress failure and alveolar hemorrhage."
            ),
            "PLAB / UKMLA": (
                "Accidental hypothermia: Swiss staging system and active internal core rewarming",
                "Classifying hypothermia (Stage I conscious/shivering > 32 C; Stage II lethargic/shivering ceases 28-32 C; Stage III unconscious < 28 C; Stage IV arrest), using ECMO/cardiopulmonary bypass for Stage IV.",
                "Cold-induced metabolic depression protects the brain during prolonged arrest ('nobody is dead until warm and dead'); successful neurologically intact resuscitation is achievable with extracorporeal rewarming."
            ),
            "AMC": (
                "Venomous snakebites: Antivenom administration, pressure immobilization bandaging, and coagulopathy",
                "Applying a firm pressure immobilization bandage (PIB) over the entire bitten limb at 40-70 mm Hg and immobilizing the splint, performing serial coagulopathy monitoring (20WBCT), and administering specific antivenom.",
                "Australian elapid venoms (brown, tiger, taipan) travel primarily via lymphatic channels; pressure immobilization delays systemic systemic lymph absorption without compromising arterial perfusion; incision or tourniquets are contraindicated."
            ),
            "MCCQE": (
                "Frostbite injury staging, rapid water bath rewarming, and avoidance of refreezing",
                "Rapid rewarming in a circulating warm water bath (37-39 C) for 15-30 minutes only after all risk of refreezing is eliminated; refreezing thawed tissue causes catastrophic microvascular thrombosis.",
                "Ice crystals form in the extracellular fluid, drawing water out of cells and causing intracellular dehydration and microvascular endothelial damage; dry heat or vigorous rubbing causes mechanical tissue loss."
            ),
            "FCPS": (
                "Near-drowning (submersion injury): Fresh water versus salt water and secondary ARDS",
                "Submersion causing laryngospasm, profound hypoxemia, alveolar surfactant washout, pulmonary capillary stress failure, and secondary acute respiratory distress syndrome, requiring positive end-expiratory pressure (PEEP).",
                "Both fresh and salt water aspiration produce identical clinical pathophysiology dominated by severe hypoxic lung injury; asymptomatic patients require a minimum 6-8 hour observation period for late pulmonary edema."
            ),
            "NLE": (
                "Lightning strike injuries: Lichtenberg figures, keraunoparalysis, and reverse triage",
                "Direct current flashover producing pathognomonic ferning feather-like skin lesions (Lichtenberg figures), transient lower limb paralysis (keraunoparalysis), and cardiac arrest requiring reverse triage.",
                "Reverse triage prioritizes lightning strike victims who appear clinically dead (in respiratory arrest or ventricular fibrillation) because aggressive immediate CPR achieves high rates of neurological recovery."
            ),
            "NEET PG": (
                "Altitude illness prophylaxis: Acetazolamide mechanism of action and acclimatization",
                "Carbonic anhydrase inhibition in the proximal renal tubule inducing mild bicarbonate diuresis and metabolic acidosis, stimulating central chemoreceptors to sustain hyperventilation and arterial oxygenation.",
                "Starting oral acetazolamide 24 hours prior to ascent accelerates physiological acclimatization, preventing acute mountain sickness (headache, nausea, insomnia) during rapid ascent above 2,500 meters."
            ),
            "MRCP": (
                "Rhabdomyolysis in exertional heat illness: Creatine kinase thresholds and bicarbonate hydration",
                "Massive release of skeletal muscle intracellular contents (potassium, myoglobin, phosphate, CK > 10,000 U/L), managed with aggressive isotonic crystalloid rehydration maintaining urine output > 200-300 mL/hr.",
                "Intraluminal myoglobin precipitates in the acidic environment of the distal nephron; fluid expansion maintains high tubular flow to flush casts and prevent pigment nephropathy acute renal failure."
            ),
            "MRCEM": (
                "Severe hypothermia cardiac arrest: Prolonged resuscitation and defibrillation thresholds",
                "Withholding intravenous epinephrine and limiting defibrillation attempts to 3 shocks while core temperature remains < 30 C; full advanced life support resumed once active rewarming elevates core temperature > 30 C.",
                "At severe hypothermic temperatures (< 30 C), the myocardium is refractory to antiarrhythmics and defibrillation, and hepatic drug metabolism is suspended, causing dangerous accumulation of epinephrine."
            ),
            "SMLE": (
                "Scorpion envenomation: Autonomic storm, myocarditis, and antivenom therapy",
                "Alpha-toxins prolonging sodium channel opening causing massive autonomic storm (acetylcholine and catecholamine surge: hypertension, salivation, priapism, pulmonary edema), treated with antivenom and prazosin.",
                "Scorpion venom triggers intense peripheral vasoconstriction and direct toxic cardiomyopathy, leading to acute cardiogenic pulmonary edema in young children; alpha-1 antagonist (prazosin) relieves afterload."
            ),
            "HAAD / DHA": (
                "Occupational heat stress prevention: Wet Bulb Globe Temperature (WBGT) and rest-work cycles",
                "Measuring WBGT combining temperature, humidity, wind velocity, and radiant heat to mandate structured work-rest cycles (e.g., 45 minutes rest per hour when WBGT > 32 C) and mandatory fluid hydration.",
                "High ambient humidity severely impairs evaporative cooling via eccrine sweating (the primary thermoregulatory mechanism in hot environments); exceeding threshold WBGT rapidly drives fatal heat stroke."
            ),
            "UHS MBBS": (
                "Physiological mechanisms of human thermoregulation in hot and cold environments",
                "Preoptic anterior hypothalamus acts as the central thermostat; heat dissipation mediated by cutaneous vasodilation and sweating (sympathetic cholinergic); heat conservation mediated by vasoconstriction and shivering.",
                "Shivering thermogenesis increases basal metabolic heat production by up to 300-500%; when core temperature drops below 30-32 C, shivering ceases, leading to accelerated hypothermic decompensation."
            )
        }
    },

    # Domain 175: Global Disaster Preparedness, Triage & Mass Casualty Incidents
    {
        "id": "domain_175_disaster_triage",
        "entity": "Mass casualty incident (MCI) triage, chemical / CBRNE emergencies, and blast injury patterns",
        "hallmark": "Simple Triage and Rapid Treatment (START) color-coded tagging (Green, Yellow, Red, Black); acute cholinergic hypersecretion in chemical nerve agent attack; or tympanic membrane rupture with blast lung",
        "system": "General Principles",
        "ref_key": "disaster_triage",
        "subjects": {
            "Step 1": "Ethics",
            "NEET PG": "Medicine",
            "FCPS": "Medicine",
            "UHS MBBS": "Ethics",
            "other": "Ethics"
        },
        "concepts": {
            "Step 1": (
                "Biomedical ethics in disaster medicine: Utilitarian resource allocation versus individual autonomy",
                "Shift from standard individual-centered deontology to utilitarian public health ethics, aiming to maximize the greatest good and save the maximum number of salvageable human lives with limited resources.",
                "In a catastrophic mass casualty event where demand overwhelms healthcare capacity, scarce critical care resources (ventilators, blood units) are allocated based on clinical survivability rather than first-come first-served."
            ),
            "Step 2 CK": (
                "Simple Triage and Rapid Treatment (START) algorithm execution in primary field triage",
                "Assessing ambulatory status (Green), respirations (> 30/min = Red), perfusion (radial pulse absent / cap refill > 2s = Red), and mental status (cannot follow commands = Red; can follow = Yellow); apnea after opening airway = Black.",
                "START triage categorizes each patient in under 30 seconds; patients requiring immediate life-saving airway or hemorrhage control receive a Red tag and immediate evacuation to definitive surgical care."
            ),
            "Step 3": (
                "Blast injury physics and classification: Primary, Secondary, Tertiary, and Quaternary mechanisms",
                "Primary (overpressure wave damaging air-filled organs: blast lung, eardrum perforation); Secondary (flying debris/shrapnel); Tertiary (body propelled against objects); Quaternary (burns, toxic fumes).",
                "Blast lung is the leading cause of initial mortality among survivors of explosive detonations, characterized by alveolar-capillary disruption, hemothorax, air embolism, and acute respiratory failure."
            ),
            "PLAB / UKMLA": (
                "Chemical, Biological, Radiological, and Nuclear (CBRNE) decontamination and zoning",
                "Establishing strict Hot (contamination), Warm (decontamination), and Cold (clean triage/treatment) zones, with mandatory personal protective equipment (PPE Level C/A) prior to receiving contaminated victims.",
                "Failure to decontaminate victims outside the hospital facility results in secondary contamination of emergency department personnel, closing acute care resuscitation bays and disabling the receiving hospital."
            ),
            "AMC": (
                "Organophosphate nerve agent (Sarin, VX) emergency medical countermeasure protocol",
                "Immediate administration of high-dose auto-injector atropine (to block lethal muscarinic bronchorrhea and bradycardia), pralidoxime (oxime reactivation of AChE), and diazepam/midazolam for seizures.",
                "Nerve agents are potent organophosphates designed for rapid skin and respiratory penetration; Mark I autoinjectors provide rapid intramuscular antidotal delivery in the warm/cold zone before advanced airway access."
            ),
            "MCCQE": (
                "Hospital Incident Command System (HICS) structure and emergency disaster activation",
                "Adopting standardized command hierarchy (Incident Commander, Operations, Planning, Logistics, Finance) to coordinate internal bed surge capacity, emergency personnel recall, and clear communication.",
                "HICS establishes a manageable span of control (3 to 7 subordinates per supervisor) and standardized nomenclature, preventing institutional chaos and communication breakdowns during external disaster surges."
            ),
            "FCPS": (
                "Damage control resuscitation in mass casualty trauma: Hemorrhage control and temporary shunting",
                "Abbreviated initial surgical intervention prioritizing immediate mechanical bleeding control, temporary intravascular shunting, packing, and temporary abdominal closure, deferring complex reconstruction.",
                "Damage control surgery interrupts the lethal triad of hypothermia, acidosis, and coagulopathy, allowing the surgical team to rapidly stabilize multiple critical casualties during high-volume surges."
            ),
            "NLE": (
                "The four triage color categories in mass casualty incidents: Green, Yellow, Red, and Black",
                "Red (Immediate / Priority 1: life-threatening but salvageable); Yellow (Delayed / Priority 2: serious, non-immediate); Green (Minimal / Priority 3: walking wounded); Black (Expectant / Deceased: dead or unsalvageable).",
                "Accurate color tagging ensures that available surgical and critical care transport assets are immediately directed to Priority 1 (Red) patients whose survival depends directly on emergency intervention within minutes."
            ),
            "NEET PG": (
                "Radiation disaster triage: Acute Radiation Syndrome (ARS) phases and absolute lymphocyte count",
                "Hematopoietic syndrome (1-6 Gy); Gastrointestinal syndrome (6-20 Gy); Neurovascular syndrome (> 20 Gy); absolute lymphocyte depletion at 48 hours is the most accurate clinical biodosimeter.",
                "A rapid precipitous drop in the peripheral absolute lymphocyte count within the first 24 to 48 hours indicates severe whole-body ionizing radiation exposure (> 4-6 Gy), guiding granulocyte colony-stimulating factor (G-CSF) use."
            ),
            "MRCP": (
                "Anthrax (Bacillus anthracis) as a biological weapon: Inhalation anthrax and ciprofloxacin",
                "Inhalation of aerosolized endospores causing hemorrhagic mediastinitis with prominent mediastinal widening on chest radiography, pleural effusions, and bacteremia, treated with IV ciprofloxacin plus clindamycin.",
                "Anthrax lethal toxin and edema toxin destroy mediastinal lymph nodes and macrophages, causing necrotizing hemorrhagic mediastinitis; clindamycin is added to immediately arrest ribosomal toxin synthesis."
            ),
            "MRCEM": (
                "Mass casualty emergency department surge: Reverse triage and rapid discharge protocols",
                "Executing immediate structured reverse triage in hospital wards and ED to identify stable inpatients who can be safely discharged home or transferred to step-down facilities to create acute bed capacity.",
                "Discharging inpatients with low risk of short-term deterioration rapidly generates acute staffed monitored bed capacity within 60-90 minutes, absorbing sudden influxes of critical trauma victims."
            ),
            "SMLE": (
                "Crush syndrome in structural collapse disasters: Hyperkalemic arrest prevention and fluid resuscitation",
                "Initiating aggressive intravenous normal saline fluid resuscitation (1-1.5 L/hr) prior to extricating pinned limbs to prevent sudden hyperkalemic cardiac arrest and acute tubular necrosis upon reperfusion.",
                "Reperfusion of crushed skeletal muscle abruptly releases massive loads of intracellular potassium, myoglobin, and lactic acid into the systemic circulation; pre-release hydration dilutes toxins and protects kidneys."
            ),
            "HAAD / DHA": (
                "Public health syndromic surveillance systems for early detection of bioterrorism outbreaks",
                "Automated real-time monitoring of emergency department chief complaints, over-the-counter medication sales, and school absenteeism to detect statistical spikes indicative of intentional aerosol pathogen release.",
                "Syndromic surveillance identifies anomalous clusters days before clinical laboratory identification of exotic pathogens (e.g., Francisella tularensis, Yersinia pestis), triggering early public health quarantine."
            ),
            "UHS MBBS": (
                "Tympanic membrane rupture as an index of blast injury severity and secondary organ damage",
                "The tympanic membrane is the human organ most sensitive to explosive barotrauma (rupturing at pressures as low as 5 psi / 35 kPa); presence of rupture mandates inpatient screening for occult blast lung injury.",
                "While blast lung requires higher blast wave overpressures (> 40 psi), an intact eardrum does not completely exclude blast lung; however, bilateral eardrum rupture strongly indicates high-energy overpressure exposure."
            )
        }
    }
]
