"""
Mega Data Part I: Domains 51 to 57 (Rheumatology, Connective Tissue & Degenerative Neurology)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_I = [
    # Domain 51: Gout, Pseudogout & Crystal Arthropathies
    {
        "id": "domain_51_crystal_arthropathy",
        "entity": "acute gout and calcium pyrophosphate dihydrate deposition disease",
        "hallmark": "acute severe monoarthritis of the first metatarsophalangeal joint (podagra), erythema, warmth, and synovial fluid needle-shaped negatively birefringent crystals",
        "system": "Musculoskeletal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Biochemistry",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Monosodium urate crystal polarization and PRPP synthetase hyperactivity",
                "Monosodium urate needle-shaped crystals showing strong negative birefringence under polarized light (yellow when parallel to slow ray), driven by PRPP synthetase gain-of-function or HGPRT deficiency.",
                "In gout, needle-shaped urate crystals phagocytosed by neutrophils activate the NLRP3 inflammasome, triggering IL-1beta release; under polarized microscopy, crystals are bright yellow when parallel to the compensator axis."
            ),
            "Step 2 CK": (
                "Acute flare management versus chronic urate-lowering therapy initiation",
                "Treating acute flare with NSAIDs (indomethacin), oral colchicine, or intra-articular corticosteroids; initiating allopurinol along with anti-inflammatory prophylaxis only after acute flare subsides.",
                "Acute gout flares are managed with anti-inflammatory agents; initiating or changing allopurinol dose during an acute attack is avoided because rapid serum urate fluctuations prolong the attack."
            ),
            "Step 3": (
                "Treat-to-target serum urate thresholds and cardiovascular safety",
                "Titrating allopurinol to maintain serum uric acid < 6.0 mg/dL (< 360 mcmol/L) or < 5.0 mg/dL in severe tophaceous gout, screening for HLA-B*5801 in high-risk ancestral groups.",
                "Long-term management requires treat-to-target titration of allopurinol with colchicine flare prophylaxis for 3-6 months; HLA-B*5801 screening prevents severe allopurinol hypersensitivity syndrome."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on gout diagnosis and treat-to-target allopurinol management",
                "Diagnosing gout via clinical presentation or synovial fluid analysis, starting allopurinol treat-to-target strategy with annual serum urate monitoring once the target is reached.",
                "NICE guideline NG219 recommends offering urate-lowering therapy to all patients with confirmed gout after their first flare, aiming for serum urate below 360 mcmol/L."
            ),
            "AMC": (
                "Pseudogout (CPPD) radiographic chondrocalcinosis and rhomboid crystal morphology",
                "Positively birefringent rhomboid-shaped crystals (blue when parallel to slow ray) and punctate chondrocalcinosis of knee menisci or triangular fibrocartilage of wrist on plain radiograph.",
                "Australian rheumatology guidelines emphasize diagnosing CPPD (pseudogout) via synovial aspiration (rhomboid crystals with positive birefringence) and screening for hemochromatosis or hyperparathyroidism."
            ),
            "MCCQE": (
                "Arthrocentesis to rule out septic arthritis in acute hot swollen joint",
                "Mandatory urgent synovial fluid aspiration (cell count, Gram stain, culture, polarized microscopy) in any acute monoarthritis to exclude concomitant septic arthritis.",
                "Canadian medical objectives emphasize that synovial fluid analysis is required because septic arthritis and crystal arthritis can co-exist and cannot be differentiated clinically."
            ),
            "FCPS": (
                "Surgical management of ulcerated or disabling gouty tophi",
                "Surgical excision or curettage of massive, ulcerating, or nerve-compressing tophi causing intractable skin breakdown or carpal tunnel syndrome.",
                "Surgical intervention in gout is reserved for tophi causing mechanical nerve entrapment, joint tendon rupture, or persistent draining sinus infections unresponsive to medical therapy."
            ),
            "NLE": (
                "Clinical distinction between gout, pseudogout, and septic arthritis",
                "Gout affecting first MTP joint with negative birefringence; pseudogout affecting large joints (knee) with positive birefringence; septic arthritis having synovial WBC > 50,000/mcL.",
                "National licensing curricula test crystal characteristics: gout features needle-shaped yellow crystals (parallel axis); pseudogout shows rhomboid blue crystals (parallel axis)."
            ),
            "NEET PG": (
                "Colchicine mechanism of action and tubulin polymerization inhibition",
                "Colchicine binding to tubulin dimers, inhibiting microtubule polymerization and blocking neutrophil chemotaxis, phagocytosis, and degranulation.",
                "NEET PG pharmacology emphasizes that colchicine arrests cell division in metaphase by disrupting spindle microtubules and inhibits neutrophil leukotriene B4 production."
            ),
            "MRCP": (
                "Febuxostat in chronic kidney disease and cardiovascular safety profile",
                "Febuxostat as a non-purine selective xanthine oxidase inhibitor for patients intolerant of allopurinol or with severe renal impairment, with vigilance for cardiovascular mortality.",
                "MRCP clinical pharmacology highlights febuxostat for patients with allopurinol hypersensitivity or advanced CKD (eGFR < 30 mL/min), requiring no renal dose adjustment."
            ),
            "MRCEM": (
                "Emergency exclusion of septic arthritis and synovial fluid interpretation",
                "Immediate bedside arthrocentesis; synovial fluid white blood cell count > 50,000/mcL with > 90% polymorphonuclear cells mandates immediate orthopedic consultation and IV antibiotics.",
                "In emergency care, an acute red swollen joint must be treated as septic arthritis until synovial fluid analysis definitively proves crystals and negative bacterial cultures."
            ),
            "SMLE": (
                "Dietary and lifestyle modifications in hyperuricemic metabolic syndrome",
                "Weight reduction, smoking cessation, limiting red meat, organ meats, high-fructose corn syrup, and purine-rich seafood while maintaining adequate hydration.",
                "Saudi clinical practice guidelines emphasize lifestyle modifications alongside pharmacotherapy, avoiding high-fructose beverages which directly increase uric acid production."
            ),
            "HAAD / DHA": (
                "Pharmacogenetic screening for HLA-B*5801 in Asian populations",
                "Testing for HLA-B*5801 allele in individuals of Southeast Asian and African descent prior to starting allopurinol to prevent Stevens-Johnson syndrome.",
                "UAE healthcare quality guidelines endorse pharmacogenetic testing for HLA-B*5801 in high-risk ancestral groups to eliminate allopurinol-induced severe cutaneous adverse reactions."
            ),
            "UHS MBBS": (
                "Pathology of gouty tophi and foreign body giant cell reaction",
                "Aggregates of urate crystals surrounded by an intense inflammatory zone containing lymphocytes, histiocytes, and multinucleated foreign body giant cells.",
                "Undergraduate pathology describes the tophus: crystalline urate cores dissolved during routine alcohol fixation surrounded by palisading macrophages and foreign body giant cells."
            )
        }
    },

    # Domain 52: Systemic Sclerosis (Scleroderma) & Raynaud
    {
        "id": "domain_52_scleroderma",
        "entity": "systemic sclerosis (scleroderma) and Raynaud phenomenon",
        "hallmark": "triphasic color changes in fingers (pallor, cyanosis, erythema) triggered by cold, skin thickening proximal to MCP joints, sclerodactyly, and telangiectasias",
        "system": "Musculoskeletal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Endothelial injury, TGF-beta signaling, and extensive tissue fibrosis",
                "Microvascular endothelial injury with intimal proliferation and hyperactive TGF-beta signaling stimulating fibroblasts to produce excessive collagen types I and III.",
                "Systemic sclerosis pathogenesis involves immune activation, severe microvascular obliteration, and TGF-beta/PDGF-driven fibroblast hyperactivation causing widespread cutaneous and visceral fibrosis."
            ),
            "Step 2 CK": (
                "Scleroderma renal crisis management and strict avoidance of beta-blockers",
                "New-onset severe hypertension and acute kidney injury (scleroderma renal crisis) managed immediately with high-dose ACE inhibitors (captopril); corticosteroids are strictly avoided.",
                "High-dose corticosteroids are the leading trigger for scleroderma renal crisis; immediate initiation of ACE inhibitors reverses hyperreninemic renal vasospasm and saves the kidneys."
            ),
            "Step 3": (
                "Screening for pulmonary arterial hypertension and interstitial lung disease",
                "Annual screening with transthoracic echocardiogram, pulmonary function testing (monitoring DLCO and FVC), and high-resolution chest CT for interstitial lung disease.",
                "Pulmonary involvement is the leading cause of mortality in systemic sclerosis: isolated reduction in DLCO suggests pulmonary arterial hypertension; restrictive spirometry suggests ILD."
            ),
            "PLAB / UKMLA": (
                "CREST syndrome features and anti-centromere antibody association",
                "Limited cutaneous systemic sclerosis characterized by Calcinosis, Raynaud phenomenon, Esophageal dysmotility, Sclerodactyly, Telangiectasia, linked to anti-centromere antibodies.",
                "NICE and BSR guidelines correlate antibody profiles: anti-centromere antibodies signify limited cutaneous disease (CREST); anti-topoisomerase I (anti-Scl-70) signifies diffuse disease."
            ),
            "AMC": (
                "Pharmacological management of severe Raynaud phenomenon and digital ulcers",
                "Oral dihydropyridine calcium channel blockers (nifedipine) as first-line therapy, escalating to oral phosphodiesterase-5 inhibitors (sildenafil) or IV iloprost for refractory ulcers.",
                "Australian guidelines recommend oral nifedipine for primary and secondary Raynaud; refractory ischemic digital ulcers require PDE-5 inhibitors or prostacyclin analogue infusions."
            ),
            "MCCQE": (
                "Primary versus secondary Raynaud phenomenon differentiation",
                "Primary Raynaud (Raynaud disease) occurs in young women without digital ulcers, normal nailfold capillaroscopy, and negative ANA; secondary Raynaud has abnormal capillaroscopy and positive ANA.",
                "Canadian medical objectives highlight nailfold capillaroscopy: dilated, tortuous, or dropped-out capillary loops strongly indicate an underlying systemic connective tissue disorder."
            ),
            "FCPS": (
                "Surgical sympathectomy and management of gangrenous digital ulcers",
                "Digital or thoracoscopic sympathectomy in patients with refractory digital ischemia and progressive gangrene failing aggressive medical vasodilator therapy.",
                "In reconstructive and vascular surgery, microvascular adventitial sympathectomy relieves persistent digital vasospasm, facilitating healing of ischemic scleroderma ulcers."
            ),
            "NLE": (
                "Esophageal dysmotility pathophysiology and barium swallow 'stovepipe' esophagus",
                "Smooth muscle atrophy and collagenous fibrosis of the lower two-thirds of the esophagus causing incompetent lower esophageal sphincter, severe GERD, and aperistalsis.",
                "National licensing curricula test scleroderma esophagus: smooth muscle replacement by fibrous tissue produces dysphagia to both solids and liquids and severe peptic strictures."
            ),
            "NEET PG": (
                "Autoantibody specificities: Anti-Scl-70 versus Anti-RNA Polymerase III",
                "Anti-Scl-70 (anti-topoisomerase I) associated with diffuse cutaneous scleroderma and pulmonary fibrosis; anti-RNA polymerase III associated with rapidly progressive skin thickening and renal crisis.",
                "NEET PG rheumatology heavily tests autoantibodies: anti-RNA polymerase III is strongly linked to scleroderma renal crisis and concurrent malignancy; anti-centromere predicts CREST syndrome."
            ),
            "MRCP": (
                "Cyclophosphamide versus Mycophenolate Mofetil in scleroderma-associated ILD",
                "Mycophenolate mofetil as preferred first-line disease-modifying therapy for active scleroderma interstitial lung disease, demonstrating equal efficacy and superior safety over cyclophosphamide.",
                "Landmark Scleroderma Lung Studies (SLS I & II) proved that mycophenolate mofetil stabilizes lung function in progressive scleroderma ILD with significantly lower toxicity than cyclophosphamide."
            ),
            "MRCEM": (
                "Emergency recognition of acute scleroderma renal crisis with encephalopathy",
                "Severe encephalopathy, microangiopathic hemolytic anemia, acute oliguric renal failure, and malignant hypertension requiring aggressive titratable oral captopril in the ICU.",
                "Emergency treatment of scleroderma renal crisis requires rapidly restoring renal perfusion via ACE inhibition; intravenous nitroprusside can be added for hypertensive encephalopathy."
            ),
            "SMLE": (
                "Gastric Antral Vascular Ectasia (GAVE) 'watermelon stomach' and argon plasma coagulation",
                "Longitudinal red stripes radiating from the pylorus on endoscopy ('watermelon stomach') causing chronic occult iron deficiency anemia, treated with endoscopic argon plasma coagulation.",
                "Saudi gastroenterology guidelines highlight GAVE in systemic sclerosis patients presenting with refractory iron deficiency, successfully treated by serial endoscopic laser/plasma coagulation."
            ),
            "HAAD / DHA": (
                "Multidisciplinary organ surveillance program for systemic sclerosis",
                "Coordinated annual multidisciplinary evaluation encompassing cardiology (echo/BNP), pulmonology (HRCT/PFTs), nephrology (BP/urinalysis), and rheumatology.",
                "UAE specialized centers establish comprehensive scleroderma surveillance clinics to detect subclinical pulmonary hypertension and renal crisis prior to irreversible damage."
            ),
            "UHS MBBS": (
                "Histopathology of cutaneous sclerosis and vascular obliteration",
                "Massive dermal collagen accumulation with replacement of subcutaneous fat, loss of skin appendages (hair follicles and sweat glands), and onion-skin concentric intimal hyperplasia of arteries.",
                "Undergraduate pathology identifies the diagnostic skin biopsy features: thick bundles of hyalinized collagen obliterating the dermo-epidermal junction and perivascular lymphocytic infiltrate."
            )
        }
    },

    # Domain 53: Sjögren Syndrome & Inflammatory Myopathies
    {
        "id": "domain_53_sjogren_myopathy",
        "entity": "Sjögren syndrome and polymyositis / dermatomyositis",
        "hallmark": "symmetric proximal muscle weakness, violaceous heliotrope rash on upper eyelids, Gottron papules over MCP joints, severe dry eyes (xerophthalmia), and dry mouth (xerostomia)",
        "system": "Musculoskeletal",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Immunology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "CD4+ T-cell periductal exocrine infiltration versus CD8+ endomysial muscle attack",
                "Sjögren syndrome featuring lymphocytic infiltration of salivary/lacrimal glands; Polymyositis featuring CD8+ cytotoxic T cells invading MHC class I-expressing muscle fibers (endomysial inflammation).",
                "Immunologically, Dermatomyositis is driven by CD4+ T cells and complement MAC complexes targeting perimysial capillaries; Polymyositis features CD8+ T cells directly injuring endomysial myofibers."
            ),
            "Step 2 CK": (
                "Diagnostic autoantibody panels and muscle biopsy confirmation",
                "Anti-Ro/SSA and anti-La/SSB antibodies in Sjögren syndrome; anti-Jo-1 (histidyl-tRNA synthetase) and elevated serum creatine kinase in inflammatory myopathies, confirmed by muscle biopsy.",
                "Definitive diagnosis of inflammatory myopathy requires elevated muscle enzymes (CK, aldolase), EMG showing fibrillations, and muscle biopsy; initial treatment is high-dose systemic corticosteroids."
            ),
            "Step 3": (
                "Occult malignancy screening in adult dermatomyositis and lymphoma risk in Sjögren",
                "Age-appropriate malignancy screening (CT chest/abdomen/pelvis, mammography, colonoscopy) in dermatomyositis; monitoring for non-Hodgkin B-cell lymphoma in Sjögren patients with parotid enlargement.",
                "Adult dermatomyositis is a paraneoplastic condition in up to 20-30% of cases (ovarian, lung, gastrointestinal cancers); Sjögren syndrome carries a 40-fold increased risk of marginal zone MALT lymphoma."
            ),
            "PLAB / UKMLA": (
                "Schirmer test and ocular lubricating therapy in primary Sjögren syndrome",
                "Schirmer test demonstrating < 5 mm wetting of filter paper at 5 minutes, confirming severe aqueous tear deficiency, treated with artificial tears, ocular lubricants, and pilocarpine.",
                "UK guidelines recommend tear break-up time and Schirmer test to quantify keratoconjunctivitis sicca, prescribing topical carboxymethylcellulose and oral muscarinic agonists (pilocarpine)."
            ),
            "AMC": (
                "Antisynthetase syndrome features (anti-Jo-1, mechanic's hands, ILD, arthritis)",
                "Clinical triad of inflammatory myositis, interstitial lung disease, non-erosive arthritis, Raynaud phenomenon, and hyperkeratotic fissuring of palmar finger surfaces ('mechanic's hands').",
                "Australian rheumatology guidelines emphasize recognizing the antisynthetase syndrome linked to anti-tRNA synthetase antibodies, where interstitial lung disease dictates long-term survival."
            ),
            "MCCQE": (
                "Neonatal lupus erythematosus and maternal anti-Ro/SSA antibodies",
                "Transplacental passage of maternal anti-Ro/SSA antibodies causing congenital complete heart block, diffuse cutaneous neonatal lupus rash, and transient thrombocytopenia.",
                "Canadian obstetric and pediatric guidelines mandate fetal echocardiographic surveillance between 16 and 26 weeks in pregnant women with anti-Ro/SSA antibodies to detect congenital AV block."
            ),
            "FCPS": (
                "Surgical muscle biopsy technique (vastus lateralis or deltoid)",
                "Open surgical muscle biopsy of a moderately weak muscle (avoiding severely atrophied muscle or sites of recent EMG needles) to prevent sampling artifact.",
                "Proper muscle biopsy technique requires selecting a clinically affected muscle (e.g., quadriceps or deltoid) with pre-procedure MRI guidance to identify active muscle edema and avoid fibrotic end-stage tissue."
            ),
            "NLE": (
                "Pathognomonic cutaneous signs of Dermatomyositis",
                "Heliotrope rash (violaceous periorbital edema), Gottron papules (violaceous scaly plaques over knuckles), and shawl sign (erythema across upper back and shoulders).",
                "National licensing curricula test pathognomonic dermatology: Gottron papules over MCP and IP joints distinguish dermatomyositis from systemic lupus erythematosus, which spares the knuckles."
            ),
            "NEET PG": (
                "Chisholm-Mason histological grading of labial minor salivary gland biopsy",
                "Focus score >= 1 (defined as an aggregate of at least 50 mononuclear inflammatory cells per 4 mm2 of glandular tissue) fulfilling American-European criteria for Sjögren syndrome.",
                "NEET PG pathology tests the diagnostic gold standard for Sjögren syndrome: labial minor salivary gland biopsy demonstrating focal lymphocytic sialadenitis with a focus score >= 1."
            ),
            "MRCP": (
                "Inclusion Body Myositis (IBM) clinical features and corticosteroid resistance",
                "Elderly man presenting with asymmetric distal muscle weakness (finger flexors, quadriceps), rimmed vacuoles on muscle biopsy, and complete resistance to systemic corticosteroids.",
                "MRCP clinical neurology contrasts IBM with polymyositis: IBM affects older adults (> 50 years), involves distal finger flexors early, shows cytoplasmic rimmed vacuoles, and does not respond to steroids."
            ),
            "MRCEM": (
                "Emergency airway and ventilatory compromise in severe acute polymyositis",
                "Pharyngeal muscle weakness causing severe dysphagia, recurrent aspiration pneumonia, and diaphragmatic muscle weakness requiring ICU admission and non-invasive or invasive ventilatory support.",
                "Emergency resuscitation in acute fulminant inflammatory myopathy requires serial forced vital capacity (FVC) and negative inspiratory force (NIF) monitoring to anticipate respiratory muscle failure."
            ),
            "SMLE": (
                "Oral pilocarpine and cevimeline therapy for severe xerostomia",
                "Prescribing parasympathomimetic muscarinic receptor agonists (pilocarpine or cevimeline) to stimulate residual salivary and lacrimal secretion in patients without severe asthma or glaucoma.",
                "Saudi clinical guidelines recommend muscarinic agonists for refractory dry mouth, counseling patients regarding potential cholinergic side effects like diaphoresis and urinary frequency."
            ),
            "HAAD / DHA": (
                "Extensive paraneoplastic screening algorithms in newly diagnosed dermatomyositis",
                "Mandatory whole-body PET-CT or CT chest/abdomen/pelvis, pelvic ultrasound, and CA-125 in women over 40 presenting with dermatomyositis.",
                "UAE health authority standards mandate immediate comprehensive oncological screening for all adult dermatomyositis patients, repeating surveillance annually for at least 3 years."
            ),
            "UHS MBBS": (
                "Histological differentiation between Polymyositis and Dermatomyositis",
                "Dermatomyositis showing perivascular and interfascicular perimysial inflammation with perifascicular atrophy; Polymyositis showing diffuse endomysial lymphocytic invasion of individual muscle fibers.",
                "Undergraduate pathology highlights: perifascicular atrophy is pathognomonic for dermatomyositis (ischemia from capillary damage); endomysial infiltration characterizes polymyositis."
            )
        }
    },

    # Domain 54: Multiple Sclerosis & Demyelinating Disease
    {
        "id": "domain_54_multiple_sclerosis",
        "entity": "multiple sclerosis and central nervous system demyelination",
        "hallmark": "monocular painful visual loss (optic neuritis), relative afferent pupillary defect, electrical sensation shooting down spine on neck flexion (Lhermitte sign), and internuclear ophthalmoplegia",
        "system": "Nervous System",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Autoimmune oligodendrocyte destruction and myelin basic protein reactivity",
                "Autoreactive CD4+ Th1 and Th17 cells crossing the blood-brain barrier to attack myelin basic protein and proteolipid protein, inducing oligodendrocyte apoptosis and astrocytic gliosis.",
                "Multiple sclerosis involves perivenular inflammatory cuffs of autoreactive T cells and macrophages that selectively strip the myelin sheath in the central nervous system, sparing peripheral nerves."
            ),
            "Step 2 CK": (
                "McDonald diagnostic criteria (dissemination in time and space) and acute steroid management",
                "Demonstration of central demyelinating lesions separated in time and anatomical space on MRI; acute relapse treated with high-dose intravenous methylprednisolone (1 g daily for 3-5 days).",
                "Acute MS exacerbations are treated with IV methylprednisolone to accelerate recovery; disease-modifying therapies (e.g., ocrelizumab, natalizumab) are initiated for long-term relapse reduction."
            ),
            "Step 3": (
                "Disease-modifying therapies (DMT) selection and monitoring for progressive multifocal leukoencephalopathy",
                "Selecting high-efficacy disease-modifying therapies (anti-CD20 ocrelizumab or integrin blocker natalizumab) with routine anti-JC virus antibody index monitoring to prevent PML.",
                "Long-term MS management utilizes early high-efficacy DMTs; natalizumab requires strict stratifying of PML risk using anti-JC virus serology and treatment duration."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for acute relapse management and symptom control (spasticity, fatigue)",
                "Managing spasticity with oral baclofen or gabapentin, addressing heat-induced fatigue (Uhthoff phenomenon), and prescribing oral methylprednisolone 500 mg for acute relapses.",
                "NICE guideline NG220 recommends oral methylprednisolone (500 mg daily for 5 days) as an equally effective community alternative to IV steroids for disabling acute relapses."
            ),
            "AMC": (
                "Internuclear ophthalmoplegia (INO) neuroanatomy and medial longitudinal fasciculus lesion",
                "Demyelinating lesion of the medial longitudinal fasciculus (MLF) causing impaired adduction of the ipsilateral eye with horizontal nystagmus of the contralateral abducting eye on lateral gaze.",
                "Australian clinical neurology emphasizes that bilateral internuclear ophthalmoplegia in a young adult is virtually pathognomonic for multiple sclerosis due to MLF demyelination."
            ),
            "MCCQE": (
                "Optic neuritis clinical presentation and relative afferent pupillary defect (Marcus Gunn pupil)",
                "Painful eye movements, central scotoma, decreased color vision (red desaturation), and a positive Marcus Gunn pupil demonstrating paradoxical dilation during the swinging flashlight test.",
                "Canadian medical objectives focus on optic neuritis as the presenting sign of MS: high-dose IV corticosteroids hasten visual recovery, whereas low-dose oral prednisone increases recurrence."
            ),
            "FCPS": (
                "Neuromyelitis Optica Spectrum Disorder (NMOSD) and Aquaporin-4 autoantibodies",
                "Longitudinally extensive transverse myelitis (>= 3 vertebral segments) and bilateral optic neuritis associated with anti-aquaporin-4 (AQP4-IgG) autoantibodies, treated with eculizumab or rituximab.",
                "NMOSD is a distinct astrocytopathy driven by anti-AQP4 antibodies; standard MS therapies (beta-interferon, fingolimod) can dramatically exacerbate NMOSD attacks."
            ),
            "NLE": (
                "Cerebrospinal fluid findings: Oligoclonal bands and elevated IgG index",
                "Presence of two or more cerebrospinal fluid-restricted oligoclonal IgG bands absent in matching serum, and elevated IgG synthesis rate indicating intrathecal humoral activation.",
                "National licensing curricula test CSF in MS: oligoclonal bands are detected in > 90% of patients and, under 2017 McDonald criteria, can substitute for dissemination in time."
            ),
            "NEET PG": (
                "Charcot neurologic triad in multiple sclerosis",
                "Charcot triad of multiple sclerosis: scanning speech (dysarthria), intention tremor, and nystagmus, reflecting extensive cerebellar and brainstem white matter demyelination.",
                "NEET PG neurology highlights Charcot triad (SIN: Scanning speech, Intention tremor, Nystagmus) as the classic clinical triad of chronic cerebellar demyelination in MS."
            ),
            "MRCP": (
                "Tumefactive demyelinating lesions versus high-grade glioma differentiation",
                "Large solitary demyelinating brain lesion (> 2 cm) with incomplete 'horseshoe' open-ring enhancement pointing toward cortical gray matter on contrast-enhanced MRI.",
                "MRCP clinical neuroradiology tests tumefactive MS: incomplete open-ring enhancement distinguishes it from glioblastoma or brain abscess (which typically show complete closed rings)."
            ),
            "MRCEM": (
                "Emergency management of acute transverse myelitis with urinary retention",
                "Urgent MRI of the whole spine, bladder catheterization for neurogenic urinary retention, and immediate high-dose IV methylprednisolone (1 g daily) followed by emergency plasma exchange if refractory.",
                "In acute transverse myelitis, rapid spinal cord compression must be excluded by emergency MRI; rapid escalation to plasma exchange is indicated for steroid-refractory motor deficits."
            ),
            "SMLE": (
                "Family planning and pregnancy management in multiple sclerosis",
                "Relapse rates decrease during the third trimester of pregnancy due to immune tolerance but increase in the first 3 months postpartum, requiring safe pre-pregnancy DMT adjustments.",
                "Saudi clinical guidelines emphasize that MS does not impair fertility or increase congenital malformations; glatiramer acetate can be safely continued during pregnancy if clinically indicated."
            ),
            "HAAD / DHA": (
                "Vitamin D supplementation and environmental risk factor modification",
                "Maintaining optimal serum 25-hydroxyvitamin D levels (> 75-100 nmol/L), smoking cessation counseling, and managing metabolic comorbidities to retard neurodegeneration.",
                "UAE neurology guidelines recommend high-dose vitamin D supplementation in patients with MS, given strong epidemiological evidence linking vitamin D deficiency to higher relapse rates."
            ),
            "UHS MBBS": (
                "Gross and microscopic pathology of multiple sclerosis plaques",
                "Sharply circumscribed, gray-tan, glassy plaques in periventricular white matter; microscopy reveals loss of myelin with relative preservation of axons and reactive gemistocytic astrocytes.",
                "Undergraduate pathology describes MS plaques: Luxol fast blue staining shows stark demyelination with lipid-laden foamy macrophages clearing myelin debris in active plaques."
            )
        }
    },

    # Domain 55: Movement Disorders (Parkinson & Essential Tremor)
    {
        "id": "domain_55_parkinson_tremor",
        "entity": "Parkinson disease and essential tremor",
        "hallmark": "asymmetric 4-6 Hz resting pill-rolling tremor, cogwheel rigidity, bradykinesia with progressive decrement on finger tapping, and postural instability with festinating gait",
        "system": "Nervous System",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Pharmacology",
            "NEET PG": "Pharmacology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Substantia nigra pars compacta dopaminergic loss and alpha-synuclein Lewy bodies",
                "Loss of neuromelanin-pigmented dopaminergic neurons in the substantia nigra pars compacta and presence of intracellular eosinophilic inclusions containing alpha-synuclein (Lewy bodies).",
                "Motor symptoms of Parkinson disease emerge after approximately 60-80% of substantia nigra dopaminergic neurons are lost, disrupting the direct and indirect basal ganglia motor pathways."
            ),
            "Step 2 CK": (
                "First-line pharmacotherapy: Levodopa-carbidopa versus dopamine receptor agonists",
                "Levodopa combined with peripheral dopa decarboxylase inhibitor (carbidopa) as the most potent symptomatic therapy, or non-ergot dopamine agonists (pramipexole, ropinirole) in younger patients.",
                "Levodopa-carbidopa is the most effective therapy for motor symptoms; in patients under 60, dopamine agonists are often considered initially to delay the onset of levodopa-induced motor fluctuations."
            ),
            "Step 3": (
                "Management of motor fluctuations (wearing-off, on-off phenomenon) and dyskinesias",
                "Adding COMT inhibitors (entacapone), MAO-B inhibitors (rasagiline), or amantadine for peak-dose dyskinesias, and evaluating for deep brain stimulation (STN or GPi).",
                "Long-term Parkinson disease is complicated by motor fluctuations ('wearing-off') and peak-dose choreiform dyskinesias; deep brain stimulation of the subthalamic nucleus provides robust motor control."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for Parkinson disease diagnosis and Parkinsonian plus differentiation",
                "Clinical diagnosis based on UK Brain Bank criteria; evaluating for red flags (early falls, autonomic failure, poor levodopa response) indicating atypical parkinsonian syndromes.",
                "NICE guideline NG71 recommends specialist referral within 6 weeks for suspected Parkinson disease, using DaTscan (SPECT dopamine transporter imaging) when essential tremor cannot be differentiated."
            ),
            "AMC": (
                "Essential tremor clinical features, alcohol responsiveness, and first-line therapy",
                "Bilateral postural and kinetic 8-12 Hz hand tremor worsening with intentional movement and improved by alcohol, treated first-line with oral propranolol or primidone.",
                "Australian guidelines contrast Parkinson disease (unilateral resting tremor) with Essential tremor (bilateral action/postural tremor with autosomal dominant inheritance, treated with propranolol)."
            ),
            "MCCQE": (
                "Drug-induced parkinsonism and distinguishing features from idiopathic disease",
                "Symmetric rigidity and bradykinesia developing within weeks of starting dopamine receptor antagonists (metoclopramide, prochlorperazine, haloperidol), treated with dose reduction or discontinuation.",
                "Canadian medical objectives emphasize that drug-induced parkinsonism presents with rapid onset and symmetric signs, responding to anticholinergics (benztropine) rather than levodopa."
            ),
            "FCPS": (
                "Deep brain stimulation (DBS) surgical targets and patient selection criteria",
                "High-frequency electrical stimulation of the subthalamic nucleus (STN) or globus pallidus internus (GPi) in patients with motor fluctuations who retain robust levodopa responsiveness.",
                "DBS surgery requires documented positive motor response to levodopa; patients with significant cognitive impairment, atypical parkinsonism, or severe depression are poor candidates."
            ),
            "NLE": (
                "Cardinal motor signs of Parkinson disease (TRAP mnemonic)",
                "Tremor at rest, Rigidity (lead-pipe and cogwheel), Akinesia/Bradykinesia, and Postural instability causing frequent backward falls (pull test).",
                "National licensing curricula test the cardinal TRAP motor manifestations, emphasizing that bradykinesia must be present alongside at least one of tremor or rigidity to establish diagnosis."
            ),
            "NEET PG": (
                "Progressive Supranuclear Palsy (PSP) clinical triad and 'hummingbird' sign",
                "Vertical supranuclear gaze palsy (downward gaze impaired first), early prominent backward falls, axial rigidity, and midbrain atrophy resembling a hummingbird on sagittal MRI.",
                "NEET PG neurology heavily tests PSP: tauopathy presenting with pseudobulbar affect, frontotemporal dementia, vertical gaze palsy, and characteristic midbrain tegmental atrophy."
            ),
            "MRCP": (
                "Multiple System Atrophy (MSA) subtypes and autonomic failure",
                "Severe early orthostatic hypotension, erectile dysfunction, urinary incontinence, combined with cerebellar ataxia (MSA-C) or parkinsonism (MSA-P), showing 'hot cross bun' sign in pons.",
                "MRCP clinical scenarios test Multiple System Atrophy: alpha-synuclein oligodendroglial cytoplasmic inclusions causing severe dysautonomia and symmetrical parkinsonism unresponsive to levodopa."
            ),
            "MRCEM": (
                "Acute parkinsonian crisis (acute dopaminergic withdrawal syndrome)",
                "Severe rigidity, hyperthermia, delirium, and elevated creatine kinase resembling NMS triggered by abrupt cessation or omission of dopaminergic medications during hospital admission.",
                "Emergency medicine protocols mandate never abruptly stopping levodopa in hospitalized patients; acute dopaminergic withdrawal produces life-threatening akinetic crises and rhabdomyolysis."
            ),
            "SMLE": (
                "Dementia with Lewy Bodies (DLB) clinical tetrad and neuroleptic sensitivity",
                "Fluctuating cognition, well-formed recurrent visual hallucinations, spontaneous parkinsonism, and extreme adverse reactions to dopamine receptor antagonists.",
                "Saudi clinical guidelines emphasize that DLB features cognitive decline prior to or within 1 year of motor parkinsonism; antipsychotics provoke fatal rigidity and are strictly avoided."
            ),
            "HAAD / DHA": (
                "Multidisciplinary rehabilitation and fall prevention in advanced Parkinson disease",
                "Targeted physiotherapy for gait freezing (visual and auditory cueing techniques), speech therapy (Lee Silverman Voice Treatment), and occupational home safety assessments.",
                "UAE health standards enforce comprehensive neuro-rehabilitation protocols to maintain ambulation, prevent falls, and treat swallowing difficulties in chronic parkinsonism."
            ),
            "UHS MBBS": (
                "Microscopic pathology and immunohistochemistry of the Lewy body",
                "Concentric, round intracytoplasmic neuronal inclusions with a dense eosinophilic core and clear peripheral halo, staining strongly positive for alpha-synuclein and ubiquitin.",
                "Undergraduate pathology highlights that Lewy bodies in the substantia nigra consist of aggregated alpha-synuclein filaments, accompanied by reactive astrogliosis and neuromelanin phagocytosis."
            )
        }
    },

    # Domain 56: Amyotrophic Lateral Sclerosis (ALS)
    {
        "id": "domain_56_als",
        "entity": "amyotrophic lateral sclerosis and motor neuron disorders",
        "hallmark": "coexisting spasticity with hyperreflexia and Babinski sign alongside asymmetric distal hand muscle atrophy, weakness, and diffuse visible fasciculations",
        "system": "Nervous System",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Pathology",
            "NEET PG": "Pathology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Superoxide dismutase 1 (SOD1) mutations and TDP-43 proteinopathy",
                "Degeneration of upper motor neurons in the primary motor cortex (corticospinal tract) and lower motor neurons in the anterior horn of the spinal cord, driven by TDP-43 aggregates.",
                "ALS pathogenesis involves glutamate excitotoxicity and abnormal aggregation of hyperphosphorylated TDP-43 (TAR DNA-binding protein 43), with familial forms linked to SOD1 and C9orf72 hexanucleotide repeats."
            ),
            "Step 2 CK": (
                "Diagnostic criteria: Simultaneous upper and lower motor neuron signs with normal sensory exam",
                "Electromyography (EMG) showing active denervation (fibrillations, positive sharp waves) and chronic reinnervation across multiple body regions, with completely preserved sensory nerve conduction.",
                "Diagnosis of ALS requires concurrent UMN and LMN deficits in the absence of sensory or sphincter abnormalities; normal sensory nerve action potentials on EMG confirm isolated motor system disease."
            ),
            "Step 3": (
                "Disease-modifying therapy with riluzole and non-invasive ventilation (NIV)",
                "Initiating oral riluzole (glutamate release inhibitor) to prolong survival by 2-3 months, and timely non-invasive positive pressure ventilation (BiPAP) when FVC drops below 50%.",
                "Non-invasive ventilation provides significant survival and quality of life benefits in ALS; nutritional support via percutaneous endoscopic gastrostomy (PEG) is indicated before FVC falls below 50%."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines for multidisciplinary care and respiratory support in MND",
                "Coordinated multidisciplinary motor neurone disease team care, regular spirometry (FVC monitoring), and early discussions regarding advance care planning and feeding gastrostomy.",
                "NICE guideline NG42 prioritizes early non-invasive ventilation for orthopnea or FVC < 50%, alongside proactive communication regarding end-of-life wishes and ventilatory withdrawal."
            ),
            "AMC": (
                "Bulbar-onset ALS versus spinal-onset ALS presentation and prognosis",
                "Bulbar onset presenting with progressive dysarthria, dysphagia, tongue atrophy, and fasciculations, carrying a faster progression rate and higher risk of early aspiration pneumonia.",
                "Australian neurology consensus notes that bulbar-onset ALS occurs more frequently in older women, requiring aggressive speech and swallow rehabilitation and early PEG placement."
            ),
            "MCCQE": (
                "Cervical spondylotic myelopathy as a key treatable mimicker of ALS",
                "Cervical spinal cord compression causing UMN signs in the legs and LMN signs in the arms, distinguished by sensory dermatomal deficits, neck pain, and compressive findings on cervical MRI.",
                "Canadian medical objectives mandate urgent cervical spine MRI in suspected ALS to exclude surgically decompressive cervical spondylotic myelopathy or syringomyelia."
            ),
            "FCPS": (
                "Percutaneous endoscopic gastrostomy (PEG) timing and anesthesia considerations",
                "Placement of PEG under local anesthesia and mild sedation while FVC is > 50% predicted to avoid acute post-procedure respiratory failure or prolonged mechanical ventilation.",
                "In surgical and gastroenterology practice, delaying gastrostomy until respiratory failure is advanced (FVC < 50%) significantly increases perioperative mortality, necessitating radiologic gastrostomy (RIG)."
            ),
            "NLE": (
                "Clinical distinction between Upper versus Lower Motor Neuron signs",
                "Upper motor neuron signs: hyperreflexia, spasticity, clonus, positive Babinski; Lower motor neuron signs: flaccid paralysis, muscle atrophy, fasciculations, absent reflexes.",
                "National licensing curricula test motor signs: ALS is unique in presenting with simultaneous coexistence of brisk deep tendon reflexes alongside marked wasting and fasciculations in the same limb."
            ),
            "NEET PG": (
                "C9orf72 hexanucleotide repeat expansion in familial ALS and frontotemporal dementia",
                "GGGGCC hexanucleotide repeat expansion in the non-coding region of C9orf72 gene, presenting with combined motor neuron disease and behavioral-variant frontotemporal dementia.",
                "NEET PG genetics and neurology highlight C9orf72 as the most common genetic cause of both familial and sporadic ALS, creating dipeptide repeat proteins that disrupt nuclear export."
            ),
            "MRCP": (
                "Multifocal Motor Neuropathy (MMN) with conduction block as a treatable ALS mimic",
                "Pure motor asymmetric distal weakness with anti-GM1 ganglioside antibodies, partial motor conduction blocks on nerve conduction studies, responsive to intravenous immunoglobulin (IVIG).",
                "MRCP clinical scenarios test MMN: pure lower motor neuron weakness that mimics spinal-onset ALS but demonstrates electrophysiological motor conduction block and responds dramatically to IVIG."
            ),
            "MRCEM": (
                "Emergency management of acute respiratory failure and tracheostomy dilemmas in ALS",
                "Immediate non-invasive positive pressure ventilation (BiPAP), treatment of mucous plugging with mechanical insufflation-exsufflation (cough assist), and advance directive review.",
                "In emergency acute respiratory decompensation, non-invasive ventilation is first-line; invasive mechanical ventilation via endotracheal intubation requires urgent discussion of patient goals of care."
            ),
            "SMLE": (
                "Pseudobulbar affect (emotional lability) and dextromethorphan-quinidine therapy",
                "Pathological, involuntary laughing or crying episodes incongruent with true mood, successfully managed with combination dextromethorphan-quinidine or low-dose tricyclics.",
                "Saudi clinical practice guidelines recognize pseudobulbar affect in motor neuron disease, utilizing dextromethorphan-quinidine to suppress uncoordinated corticobulbar emotional release."
            ),
            "HAAD / DHA": (
                "Palliative care integration and end-of-life symptom management in MND",
                "Early palliative care referral, managing dyspnea and terminal secretions with titrated subcutaneous morphine and glycopyrronium, ensuring compassionate dignified end-of-life care.",
                "UAE healthcare standards mandate integrated palliative pathways for neurodegenerative conditions, providing proactive home-based respiratory support and symptom palliation."
            ),
            "UHS MBBS": (
                "Histopathology of the spinal cord anterior horns and corticospinal tracts in ALS",
                "Severe loss and shrinkage of large alpha-motor neurons in the anterior gray horns with Bunina bodies (eosinophilic inclusions), alongside myelin loss in lateral corticospinal tracts.",
                "Undergraduate pathology describes spinal cord changes in ALS: Wallerian degeneration and sclerosis of the lateral columns with marked reduction in anterior horn cell density."
            )
        }
    },

    # Domain 57: Normal Pressure Hydrocephalus & Reversible Dementias
    {
        "id": "domain_57_nph_dementia",
        "entity": "normal pressure hydrocephalus and reversible cognitive decline",
        "hallmark": "classic triad of progressive magnetic gait apraxia, urge urinary incontinence, and subcortical cognitive impairment ('wacky, wobbly, and wet')",
        "system": "Nervous System",
        "ref_key": "clinical",
        "subjects": {
            "Step 1": "Physiology",
            "NEET PG": "Radiology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Medicine"
        },
        "concepts": {
            "Step 1": (
                "Impaired arachnoid granulation CSF resorption and periventricular white matter stretching",
                "Decreased compliance of arachnoid villi impairing cerebrospinal fluid resorption into dural venous sinuses, causing intermittent CSF pressure waves that stretch paracentral corticospinal fibers.",
                "In NPH, episodic pulse pressure elevations dilate the cerebral ventricles, mechanically stretching sacral motor fibers that control the legs and bladder within the corona radiata."
            ),
            "Step 2 CK": (
                "Diagnostic high-volume lumbar puncture (tap test) and surgical shunting indications",
                "Removal of 30 to 50 mL of CSF during a diagnostic lumbar puncture with pre- and post-tap quantitative gait assessment; significant gait improvement predicts positive ventriculoperitoneal shunt response.",
                "The CSF tap test has high positive predictive value (> 90%); dramatic improvement in walking speed and stride length confirms diagnosis and justifies ventriculoperitoneal (VP) shunt placement."
            ),
            "Step 3": (
                "Comprehensive reversible dementia screening and nutritional deficiency management",
                "Routine laboratory workup including serum TSH, vitamin B12, methylmalonic acid, syphilis serology (RPR), and structural brain MRI to exclude surgically treatable subdural hematoma.",
                "Every patient evaluated for cognitive decline warrants a reversible dementia workup; correcting severe B12 deficiency (subacute combined degeneration) or hypothyroidism restores cognitive baseline."
            ),
            "PLAB / UKMLA": (
                "NICE guidelines on dementia assessment and distinguishing Alzheimer disease from NPH",
                "Alzheimer disease characterized by early prominent episodic memory loss and hippocampal atrophy; NPH characterized by early prominent gait apraxia ('feet glued to the floor') preceding memory loss.",
                "UK dementia guidelines emphasize chronological symptom evolution: gait disturbance is the earliest and most responsive symptom in NPH, whereas gait is preserved until late stages in Alzheimer disease."
            ),
            "AMC": (
                "Ventriculoperitoneal (VP) shunt complications: Overdrainage versus subdural hematoma",
                "Low-pressure postural headaches and bridging vein tearing causing subdural hematoma from chronic CSF overdrainage, managed with programmable valve pressure adjustments.",
                "Australian neurosurgical consensus highlights adjustable programmable shunt valves, allowing non-invasive titration of opening pressure to treat subdural collections without surgical revision."
            ),
            "MCCQE": (
                "Gait apraxia physical examination features in NPH",
                "Slow, wide-based, short-stepped shuffling gait with decreased step height ('magnetic gait') and difficulty with turns, while foot movements remain normal when seated or lying down.",
                "Canadian qualifying objectives emphasize testing gait: in NPH, the patient has profound difficulty walking but can readily demonstrate reciprocal kicking or bicycling movements when supine."
            ),
            "FCPS": (
                "Neurosurgical operative management: Ventriculoperitoneal versus Lumboperitoneal shunting",
                "Placement of a programmable ventriculoperitoneal (VP) shunt using stereotactic or laparoscopic abdominal assistance to achieve controlled physiological CSF diversion.",
                "VP shunting is the definitive surgical standard for NPH; laparoscopic placement of the distal peritoneal catheter confirms correct positioning and reduces pseudocyst formation."
            ),
            "NLE": (
                "Adams-Hakim clinical triad of Normal Pressure Hydrocephalus",
                "The classical triad: Gait disturbance (earliest sign), Urinary incontinence (urge incontinence due to uninhibited detrusor contractions), and Cognitive impairment (subcortical psychomotor slowing).",
                "National licensing curricula test the 'wet, wacky, and wobbly' triad, emphasizing that gait disturbance is the most sensitive and responsive component to surgical shunting."
            ),
            "NEET PG": (
                "Radiographic signs on neuroimaging: Evans index and callosal angle",
                "Evans index > 0.3 (ratio of maximum frontal horn width to maximum inner skull diameter), acute callosal angle (< 90 degrees), and disproportionately enlarged subarachnoid space hydrocephalus (DESH).",
                "NEET PG neuroradiology heavily tests NPH neuroimaging: DESH sign (ventriculomegaly with tight high-convexity sulci and dilated Sylvian fissures) strongly predicts excellent shunt responsiveness."
            ),
            "MRCP": (
                "Subacute Combined Degeneration of the spinal cord and elevated methylmalonic acid",
                "Vitamin B12 deficiency presenting with sensory ataxia (dorsal column loss), spastic paraparesis (corticospinal tract loss), and elevated methylmalonic acid and homocysteine levels.",
                "MRCP clinical scenarios test vitamin B12 deficiency: serum B12 can be borderline normal; elevated methylmalonic acid confirms cellular deficiency requiring immediate intramuscular cobalamin."
            ),
            "MRCEM": (
                "Emergency recognition of acute VP shunt malfunction and infection",
                "Severe headache, vomiting, lethargy, sunsetting eyes, and peritonitis or shunt tract erythema in a shunted patient, requiring urgent non-contrast head CT and shunt reservoir tap.",
                "In emergency evaluation of suspected VP shunt failure, head CT compares ventricular size with post-op baseline; tapping the shunt reservoir under sterile conditions assesses pressure and rules out infection."
            ),
            "SMLE": (
                "Neurosyphilis (General Paresis and Tabes Dorsalis) and aqueous penicillin G therapy",
                "Argyll Robertson pupils (accommodate but do not react to light), progressive dementia, tabetic lightning pains, and positive CSF VDRL, treated with IV aqueous crystalline penicillin G for 14 days.",
                "Saudi clinical guidelines emphasize screening for syphilis in unexplained progressive cognitive or gait impairment, treating confirmed neurosyphilis with high-dose intravenous aqueous penicillin."
            ),
            "HAAD / DHA": (
                "Cognitive assessment tools and validated screening instruments (MoCA vs MMSE)",
                "Administering the Montreal Cognitive Assessment (MoCA) as a more sensitive instrument than the MMSE for detecting subcortical and executive dysfunction characteristic of NPH.",
                "UAE health standards prioritize the MoCA test for early cognitive decline screening due to its comprehensive evaluation of executive function, visual spatial skills, and attention."
            ),
            "UHS MBBS": (
                "Cerebrospinal fluid physiology: Production, circulation, and normal opening pressure",
                "CSF produced by the choroid plexuses (approx. 500 mL/day), flowing through the ventricular system into the subarachnoid space, exhibiting normal opening pressure (70-200 mm H2O) on lumbar puncture.",
                "Undergraduate physiology and pathology emphasize that despite marked ventricular enlargement, baseline lumbar puncture opening pressure in NPH remains strictly within the normal reference range."
            )
        }
    }
]
