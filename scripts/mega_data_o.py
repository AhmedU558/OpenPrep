"""
Mega Data Part O: Domains 89 to 94 (Orthopedics, Trauma & Sports Medicine)
Each domain provides specific concepts for all 14 international exams.
"""

DOMAINS_O = [
    # Domain 89: Acute Compartment Syndrome & Fasciotomy
    {
        "id": "domain_89_compartment_syndrome",
        "entity": "Acute compartment syndrome and emergent surgical fasciotomy",
        "hallmark": "severe pain out of proportion to injury, pain exacerbated by passive muscle stretch, tense wooden swelling, paresthesias, and intracompartmental pressure within 30 mm Hg of diastolic pressure (delta-P <= 30 mm Hg)",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of the four lower leg fascial compartments and microvascular perfusion threshold",
                "Anterior, lateral, superficial posterior, and deep posterior compartments enclosed by unyielding deep fascia, where rising tissue pressure compromises capillary perfusion pressure.",
                "Elevated interstitial tissue pressure compresses thin-walled venules, reducing the arteriovenous pressure gradient and causing capillary collapse, tissue ischemia, and muscle necrosis."
            ),
            "Step 2 CK": (
                "Emergent measurement of compartment pressure and urgent two-incision four-compartment fasciotomy",
                "Measuring needle compartmental pressure (Stryker device) and performing emergent two-incision four-compartment fasciotomy when delta pressure (diastolic BP minus compartment pressure) is <= 30 mm Hg.",
                "Irreversible muscle necrosis and permanent nerve injury occur after 6 to 8 hours of sustained compartment ischemia; emergency full decompression of all four compartments is mandatory."
            ),
            "Step 3": (
                "Prevention of Volkmann ischemic contracture and late rhabdomyolysis complications",
                "Aggressive isotonic fluid resuscitation, monitoring for myoglobinuria and acute kidney injury, and delayed wound closure (or split-thickness skin grafting) once swelling subsides.",
                "Reperfusion following fasciotomy washes massive amounts of myoglobin, potassium, and lactic acid into the systemic circulation; vigorous alkaline diuresis prevents pigment nephropathy."
            ),
            "PLAB / UKMLA": (
                "The 6 Ps of compartment syndrome and early clinical sensitivity of passive stretch",
                "Recognizing that severe pain exacerbated by passive stretching of the compartment muscles is the earliest and most sensitive sign, whereas pulselessness and pallor are late ominous signs.",
                "Waiting for pulselessness or pallor before diagnosing compartment syndrome results in irreversible muscle necrosis; peripheral arterial pulses persist because systolic pressure exceeds compartment pressure."
            ),
            "AMC": (
                "Management of circumferential casts or constrictive dressings in suspected compartment syndrome",
                "Immediately bivalving the circumferential plaster cast, splitting the underlying cotton padding down to bare skin, and maintaining the limb at heart level (avoiding elevation).",
                "Splitting the cast reduces compartmental pressure by 50-65%; elevating the limb above heart level is contraindicated as it reduces arterial perfusion pressure, worsening ischemia."
            ),
            "MCCQE": (
                "High-risk fracture patterns predisposing to compartment syndrome",
                "Recognizing high risk in tibial shaft fractures, forearm fractures (supracondylar humerus or radius/ulna), high-energy crush injuries, and reperfusion after prolonged arterial ischemia.",
                "Tibial diaphyseal fractures are the single most common cause of acute compartment syndrome; clinical vigilance and serial neurovascular examinations are essential."
            ),
            "FCPS": (
                "Surgical anatomy of two-incision four-compartment release (anterolateral and posteromedial)",
                "Anterolateral incision decompressing anterior and lateral compartments (identifying superficial peroneal nerve), and posteromedial incision decompressing superficial and deep posterior compartments.",
                "The posteromedial incision must release the deep posterior fascia (tibialis posterior and flexor digitorum longus) from the tibia; incomplete release risks late claw-toe deformities."
            ),
            "NLE": (
                "The 6 Ps mnemonic in clinical assessment of limb ischemia and compartment syndrome",
                "Pain out of proportion, Paresthesias, Pallor, Poikilothermia, Pulselessness, and Paralysis.",
                "Paresthesias and hypoesthesia in the distribution of traversing nerves (e.g., deep peroneal nerve webspace between 1st and 2nd toes) indicate nerve ischemia within the compartment."
            ),
            "NEET PG": (
                "Deep peroneal nerve sensory distribution and Whitesides needle manometer technique",
                "Sensory loss in the first dorsal web space indicating deep peroneal nerve compression in the anterior compartment, and Whitesides technique using a mercury manometer and saline column.",
                "The deep peroneal nerve traverses the anterior leg compartment; sensory loss between the great and second toes is the earliest neurological deficit of anterior compartment syndrome."
            ),
            "MRCP": (
                "Rhabdomyolysis biomarkers: serum creatine kinase, myoglobinuria, and urine dipstick discrepancy",
                "Markedly elevated serum creatine kinase (> 10,000-50,000 U/L) and urine dipstick testing positive for blood in the complete absence of red blood cells on microscopic examination.",
                "Urine dipstick orthotolidine reagent detects the heme moiety of both myoglobin and hemoglobin; a strongly positive dipstick for 'blood' with zero microscopic RBCs confirms myoglobinuria."
            ),
            "MRCEM": (
                "Emergency bedside decompression when fasciotomy is delayed during transfer",
                "Removing all constricting bandages, maintaining the limb strictly neutral at heart level, administering aggressive crystalloid fluids, and arranging immediate surgical transfer.",
                "Neither elevation (which drops perfusion pressure) nor dependency (which increases venous congestion) is safe; keeping the limb at heart level optimizes capillary perfusion pressure."
            ),
            "SMLE": (
                "Vacuum-assisted closure (VAC) and delayed closure techniques post-fasciotomy",
                "Applying negative-pressure wound therapy (wound VAC) to fasciotomy open wounds, with progressive dermatotraction (vessel-loop shoelace technique) prior to delayed primary closure.",
                "Wound VAC maintains tissue microcirculation, prevents skin edge retraction, and removes exudate, allowing successful delayed primary skin closure without requiring extensive skin grafts."
            ),
            "HAAD / DHA": (
                "Postoperative neurovascular charting protocols in orthopedics and traumatology",
                "Mandatory hourly neurovascular observations (pain score, passive stretch, capillary refill, peripheral sensation, and motor function) for the first 24-48 hours post-fracture fixation.",
                "Standardized nursing neurovascular observation protocols ensure early identification of impending compartment syndrome, preventing delayed intervention and catastrophic limb loss."
            ),
            "UHS MBBS": (
                "Contents of the anterior compartment of the leg",
                "Tibialis anterior, extensor hallucis longus, extensor digitorum longus, peroneus tertius, deep peroneal nerve, and anterior tibial artery/veins.",
                "The anterior compartment is the most frequent site of leg compartment syndrome; its boundary is rigid anteriorly (crural fascia), posteriorly (interosseous membrane), and medially (tibia)."
            )
        }
    },

    # Domain 90: Osteomyelitis & Septic Arthritis
    {
        "id": "domain_90_bone_joint_infection",
        "entity": "Acute and Chronic osteomyelitis, Brodie abscess, and Septic arthritis",
        "hallmark": "acute monoarticular joint erythema, severe swelling, inability to bear weight, refusal to move limb (pseudoparalysis), fever, synovial fluid WBC > 50,000/mcL with > 75-90% PMNs, or localized focal bony tenderness with periosteal reaction",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Microbiology",
            "NEET PG": "Microbiology",
            "FCPS": "Surgery",
            "UHS MBBS": "Pathology",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Hematogenous metaphyseal seeding in children vs epiphyseal vessels in neonates",
                "Slow, sluggish blood flow in non-anastomosing capillary loops in the metaphysis of growing long bones in children predisposing to hematogenous Staphylococcus aureus seeding.",
                "In children older than 1 year, the avascular growth plate (physis) acts as a physical barrier preventing metaphyseal osteomyelitis from crossing into the epiphysis and joint cavity."
            ),
            "Step 2 CK": (
                "Emergency arthrocentesis before antibiotics and urgent surgical joint washout",
                "Performing immediate diagnostic joint aspiration (arthrocentesis) for synovial fluid analysis followed by urgent surgical arthroscopic or open joint drainage and IV antibiotics.",
                "Septic arthritis is an orthopedic emergency; lysosomal enzymes released by dying polymorphonuclear leukocytes destroy articular hyaline cartilage within 24 to 48 hours if not evacuated."
            ),
            "Step 3": (
                "Monitoring ESR and CRP trajectory to assess treatment response and oral switch",
                "Serial measurement of C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR), switching to high-bioavailability oral antibiotics once afebrile and CRP declines by > 50%.",
                "CRP rises within 6-8 hours of infection and falls rapidly (half-life 19 hours) upon effective source control; ESR responds much more slowly and remains elevated for weeks."
            ),
            "PLAB / UKMLA": (
                "Kocher criteria for differentiating pediatric septic arthritis from transient synovitis",
                "Evaluating the four Kocher criteria: inability to bear weight, fever > 38.5 C, ESR > 40 mm/hr, and peripheral WBC > 12,000/mcL (4/4 positive yields 99% probability of septic arthritis).",
                "Kocher criteria differentiate benign, self-limiting transient synovitis (irritable hip) from life-threatening bacterial septic arthritis requiring emergency surgical arthrotomy."
            ),
            "AMC": (
                "Synovial fluid analysis: WBC count, polymorphonuclear percentage, and Gram stain",
                "Synovial fluid leukocyte count > 50,000/mcL (> 50 x 10^9/L) with > 85-90% neutrophils, low synovial glucose, and positive Gram stain establishing acute bacterial arthritis.",
                "Normal synovial fluid has WBC < 200/mcL; inflammatory arthritis (gout, RA) yields 2,000-50,000/mcL, while purulent bacterial joint infection characteristically exceeds 50,000-100,000/mcL."
            ),
            "MCCQE": (
                "Microbiology of osteomyelitis in sickle cell disease: Salmonella vs S. aureus",
                "Recognizing Salmonella species as a uniquely prevalent cause of osteomyelitis in sickle cell disease (alongside Staphylococcus aureus), treating with third-generation cephalosporins.",
                "Sickle cell patients experience microvascular bowel infarction allowing Salmonella translocation, coupled with functional hyposplenism and expanded avascular bone marrow."
            ),
            "FCPS": (
                "Chronic osteomyelitis pathology: Sequestrum, Involucrum, and Cloaca",
                "Surgical debridement of necrotic devitalized bone (sequestrum) surrounded by a sheath of new reactive periosteal bone (involucrum) with draining cortical sinus tracts (cloaca).",
                "Avascular sequestra harbor bacteria in sessile biofilms protected from systemic antibiotics; definitive cure requires surgical sequestrectomy, saucerization, and dead-space management."
            ),
            "NLE": (
                "Commonest causative organisms across patient populations",
                "Staphylococcus aureus overall; Group B Streptococcus in neonates; Neisseria gonorrhoeae in sexually active young adults; Pseudomonas aeruginosa in puncture wounds through sneakers.",
                "Disseminated gonococcal infection presents as migratory polyarthralgias, tenosynovitis, and vesiculopustular skin lesions, or purulent monoarthritis."
            ),
            "NEET PG": (
                "Brodie abscess radiology and Marjolin ulcer in long-standing discharging sinus",
                "Brodie abscess presenting as a well-circumscribed lytic radiolucency with a sclerotic rim in the metaphysis, and squamous cell carcinoma (Marjolin ulcer) arising in chronic sinus tracts.",
                "Brodie abscess represents subacute hematogenous pyogenic osteomyelitis; chronic discharging osteomyelitic sinus tracts carry an elevated risk of malignant transformation into squamous carcinoma."
            ),
            "MRCP": (
                "Vertebral osteomyelitis and discitis: lumbar spine predilection and MRI findings",
                "Contrast-enhanced MRI demonstrating loss of intervertebral disc height, T1 hypointensity, T2 hyperintensity, and enhancement across two contiguous vertebrae and the intervening disc.",
                "Unlike spinal metastatic carcinoma which typically spares the intervertebral disc, hematogenous pyogenic discitis/osteomyelitis directly destroys the avascular disc space and adjacent endplates."
            ),
            "MRCEM": (
                "Emergency ultrasound in pediatric hip pain: effusion detection",
                "Bedside point-of-care hip ultrasound measuring capsular distension (> 2 mm asymmetry between hips or anterior joint capsule distance > 5 mm) indicating joint effusion.",
                "Ultrasound is the most sensitive non-invasive modality for detecting hip joint effusions in children; visual confirmation guides ultrasound-guided needle aspiration."
            ),
            "SMLE": (
                "Empiric antibiotic regimens for pediatric vs adult septic arthritis",
                "Intravenous cefazolin or vancomycin (if MRSA suspected) for adults, and cefazolin plus ceftriaxone for neonates and infants under 3 months to cover Gram-negative enteric rods.",
                "Antimicrobial selection must cover Staphylococcus aureus in all age groups, with additional coverage for Kingella kingae in young toddlers and Gram-negatives in neonates."
            ),
            "HAAD / DHA": (
                "Prosthetic joint infection (PJI) diagnostic criteria and biofilm management",
                "Synovial fluid aspiration with alpha-defensin biomarker assay, treating with two-stage exchange arthroplasty with antibiotic-impregnated cement spacers for late chronic infections.",
                "Biofilms formed on metallic hardware by coagulase-negative staphylococci resist antibiotic penetration; mature infections (> 4 weeks) mandate complete hardware removal for eradication."
            ),
            "UHS MBBS": (
                "Radiological changes of acute osteomyelitis over time",
                "Normal plain radiographs during the first 10 to 14 days, followed by soft tissue swelling, focal osteopenia, periosteal reaction (elevation), and cortical bone destruction.",
                "Plain X-rays require at least 30-50% bone mineral loss before lytic lesions appear; early negative radiographs do not exclude acute osteomyelitis, requiring MRI for confirmation."
            )
        }
    },

    # Domain 91: Knee Ligamentous & Meniscal Injuries
    {
        "id": "domain_91_knee_injuries",
        "entity": "Anterior cruciate ligament (ACL), Posterior cruciate (PCL), Medial collateral (MCL), and Meniscal tears",
        "hallmark": "audible 'pop' during non-contact deceleration or twisting injury, rapid gross hemarthrosis within 1-2 hours, positive Lachman test, joint-line tenderness, knee locking, and positive McMurray test",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of ACL attachments and the 'Unhappy Triad' of O'Donoghue",
                "ACL originating from the posterior lateral femoral condyle inserting on the anterior intercondylar tibia; Unhappy Triad classically involving ACL, MCL, and medial (or lateral in acute) meniscus.",
                "The anterior cruciate ligament prevents anterior translation of the tibia relative to the femur; lateral blow to the knee with external rotation produces the classic multi-ligament triad injury."
            ),
            "Step 2 CK": (
                "Lachman test as the most sensitive clinical examination and diagnostic knee MRI",
                "Performing the Lachman test (at 20-30 degrees knee flexion) as the most sensitive physical examination for ACL tear, followed by non-contrast MRI of the knee to assess concurrent chondral/meniscal injury.",
                "The Lachman test has superior sensitivity (85-95%) compared to the anterior drawer test because hamstring spasm and posterior meniscal wedge effect do not impede tibial translation at 20 degrees."
            ),
            "Step 3": (
                "Conservative pre-habilitation vs surgical ACL reconstruction with autografts",
                "Initial reduction of effusion, restoring full range of motion with intensive physical therapy, followed by arthroscopic ACL reconstruction using bone-patellar tendon-bone or hamstring tendon autograft.",
                "Performing early ACL reconstruction on a stiff, swollen knee dramatically increases the risk of postoperative arthrofibrosis (cyclops lesion); pre-habilitation restores knee range of motion."
            ),
            "PLAB / UKMLA": (
                "Ottawa Knee Rules for selective radiographic imaging in acute knee trauma",
                "Requesting knee radiographs only if: age >= 55, isolated patellar tenderness, fibular head tenderness, inability to flex knee to 90 degrees, or inability to bear weight for 4 steps.",
                "The Ottawa Knee Rules boast nearly 100% sensitivity for detecting clinically significant knee fractures, safely reducing unnecessary emergency department radiographs by over 25%."
            ),
            "AMC": (
                "Differentiating ACL hemarthrosis from meniscal injury by timing of joint effusion",
                "Recognizing that ACL tears cause rapid tense hemarthrosis within 1 to 2 hours (due to middle genicular artery rupture), whereas isolated meniscal tears produce insidious swelling over 24 hours.",
                "Tense hemarthrosis developing within hours of a twisting knee injury has a >70% positive predictive value for acute ACL tear or patellar dislocation."
            ),
            "MCCQE": (
                "Physical examination maneuvers for meniscal tears: McMurray and Thessaly tests",
                "Joint-line tenderness, Thessaly test (dynamic rotation at 20 degrees flexion), and McMurray test demonstrating a palpable or audible click with pain during knee extension and rotation.",
                "Joint-line tenderness is the most sensitive physical sign for meniscal tears; the Thessaly test reproduces dynamic shear stress across the fibrocartilaginous meniscus."
            ),
            "FCPS": (
                "Surgical management of bucket-handle meniscal tears: repair vs partial meniscectomy",
                "Arthroscopic meniscal repair using inside-out or all-inside suture techniques for tears in the vascular peripheral 'red-red' zone, preserving meniscal shock absorption.",
                "The peripheral third of the meniscus has rich microvascular supply (red-red zone) with high healing capacity; central avascular (white-white) tears lack blood supply and require partial excision."
            ),
            "NLE": (
                "Physical examination of collateral ligaments: Varus and Valgus stress testing",
                "Valgus stress testing at 30 degrees knee flexion isolating the medial collateral ligament (MCL), and Varus stress testing isolating the lateral collateral ligament (LCL).",
                "Testing collateral ligaments at 30 degrees of flexion unlocks the posterior capsule and cruciate ligaments, allowing isolated evaluation of collateral ligament laxity."
            ),
            "NEET PG": (
                "Segond fracture on plain radiography as pathognomonic marker of ACL tear",
                "Avulsion fracture of the lateral tibial plateau (Segond fracture) at the site of insertion of the anterolateral ligament, highly pathognomonic for concurrent complete ACL tear.",
                "Segond fracture results from excessive internal rotation and varus stress; its presence on an anteroposterior knee radiograph is associated with ACL rupture in >90% of cases."
            ),
            "MRCP": (
                "Posterior cruciate ligament (PCL) injury mechanisms: dashboard injury and posterior sag sign",
                "Direct posterior force applied to the proximal tibia with the knee in 90 degrees flexion ('dashboard injury'), presenting with posterior sag sign and positive posterior drawer test.",
                "PCL tears are often clinically subtle without massive hemarthrosis; resting the knee at 90 degrees reveals posterior displacement (sag) of the tibial tuberosity compared to the femoral condyles."
            ),
            "MRCEM": (
                "Emergency joint aspiration (arthrocentesis) for tense traumatic knee hemarthrosis",
                "Performing diagnostic and therapeutic arthrocentesis under sterile technique to relieve painful intra-articular pressure and inspect for fat globules (lipohemarthrosis).",
                "Presence of floating fat droplets (lipohemarthrosis) in aspirated bloody joint fluid indicates marrow fat extrusion through an occult intra-articular fracture (e.g., tibial plateau or patella)."
            ),
            "SMLE": (
                "Conservative non-operative management protocol for isolated Grade I and II MCL tears",
                "Hinged knee brace locked in extension for walking, early progressive functional range of motion, and physical therapy, avoiding surgical repair.",
                "The medial collateral ligament is extra-articular with excellent vascular supply; isolated Grade I and II sprains heal reliably without surgery within 4 to 6 weeks."
            ),
            "HAAD / DHA": (
                "Return-to-sport criteria following ACL reconstruction and functional testing",
                "Minimum 9 to 12 months post-reconstruction, complete restoration of quadriceps/hamstring strength (> 90% limb symmetry index), and passing standardized hop test batteries.",
                "Premature return to cutting and pivoting sports before 9-12 months carries a high rate of graft re-rupture; objective biomechanical limb symmetry testing minimizes secondary injury."
            ),
            "UHS MBBS": (
                "Fibrocartilaginous anatomy and vascular zones of the medial vs lateral meniscus",
                "Medial meniscus is C-shaped and firmly anchored to the deep MCL (making it less mobile and more prone to injury), while lateral meniscus is circular (O-shaped) and more mobile.",
                "Attachment of the medial meniscus to the medial collateral ligament limits its excursion during rotational stress, explaining why medial meniscal tears are significantly more common than lateral."
            )
        }
    },

    # Domain 92: Pediatric Fractures & Supracondylar Humerus
    {
        "id": "domain_92_pediatric_fractures",
        "entity": "Pediatric physeal fractures (Salter-Harris) and Supracondylar humerus fracture",
        "hallmark": "acute elbow swelling following a fall on an outstretched hand (FOOSH), anterior humeral line missing the capitellum, posterior fat pad sign, absent radial pulse, and median/anterior interosseous nerve deficit",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Pediatrics"
        },
        "concepts": {
            "Step 1": (
                "Physeal zones of growth plate and anterior humeral line radiographic geometry",
                "The hypertrophic zone of the physis is the mechanically weakest layer where Salter-Harris fractures propagate, and the anterior humeral line must bisect the middle third of the capitellum.",
                "In children, ligaments and joint capsules are stronger than the cartilaginous growth plate; mechanical trauma preferentially causes physeal fractures rather than ligamentous sprains."
            ),
            "Step 2 CK": (
                "Emergency closed reduction and percutaneous K-wire pinning for displaced supracondylar fractures",
                "Immediate orthopedic consultation for urgent closed reduction and percutaneous Kirschner wire (K-wire) cross-pinning for Gartland type II and III displaced supracondylar fractures.",
                "Supracondylar humerus fractures are orthopedic emergencies in children due to close proximity to the brachial artery and median nerve; prompt pinning prevents neurovascular compromise and malunion."
            ),
            "Step 3": (
                "Monitoring for Volkmann ischemic contracture and brachial artery entrapment",
                "Serial neurovascular monitoring of radial pulse, capillary refill, and passive finger extension, proceeding to emergent surgical exploration if perfusion is absent after closed reduction.",
                "Ischemia of the deep flexor compartment of the forearm (flexor digitorum profundus and flexor pollicis longus) leads to irreversible fibroblastic muscle contracture and claw-hand deformity."
            ),
            "PLAB / UKMLA": (
                "Salter-Harris classification mnemonic: SALTR (Same, Above, Lower, Through, Rammed)",
                "Classifying physeal fractures: Type I (Straight across physis), Type II (Above physis into metaphysis), Type III (Lower into epiphysis), Type IV (Through all three), Type V (Rammed/crush).",
                "Salter-Harris Type II is the commonest pediatric growth plate fracture (features Thurston-Holland metaphyseal fragment); Types III, IV, and V involve the articular surface and risk growth arrest."
            ),
            "AMC": (
                "Recognition of Anterior Interosseous Nerve (AIN) neuropraxia: 'OK' sign test",
                "Testing the anterior interosseous nerve (motor branch of median nerve) by asking the child to make an 'OK' sign (pincer grasp of index finger and thumb flexors).",
                "AIN neuropraxia prevents distal flexion of the thumb (FPL) and index finger (FDP), producing a flat pad-to-pad pinch rather than a circular tip-to-tip 'OK' gesture."
            ),
            "MCCQE": (
                "Radiological identification of the posterior fat pad sign (sail sign)",
                "Visualizing a radiolucent triangular lucency anteriorly ('sail sign') and any visualization of a posterior fat pad on lateral elbow radiograph indicating occult intra-articular fracture.",
                "The posterior fat pad is normally hidden inside the deep olecranon fossa; an intra-articular fracture hemarthrosis distends the joint capsule, displacing the posterior fat pad into view."
            ),
            "FCPS": (
                "Cubitus varus (Gunstock deformity) pathophysiology and lateral closing-wedge osteotomy",
                "Malunion of supracondylar fractures resulting from medial collapse and internal rotation tilt producing cubitus varus, corrected with lateral closing-wedge humeral osteotomy.",
                "Cubitus varus is a cosmetic deformity caused by imperfect reduction rather than physeal growth arrest, as the distal humeral physis contributes only 15-20% of longitudinal humeral growth."
            ),
            "NLE": (
                "Differentiating incomplete pediatric fractures: Torus (buckle), Greenstick, and Bowing",
                "Torus fracture (cortical buckling due to axial compression) versus Greenstick fracture (incomplete fracture with cortical breach on tension side and intact plastic bend on compression side).",
                "Pediatric bone has high collagen content and thick, metabolically active periosteum, allowing plastic deformation and buckle fractures without complete cortical disruption."
            ),
            "NEET PG": (
                "CRITOE mnemonic for ossification centers of the elbow in pediatric radiographs",
                "Capitellum (1 yr), Radial head (3 yr), Internal/medial epicondyle (5 yr), Trochlea (7 yr), Olecranon (9 yr), External/lateral epicondyle (11 yr).",
                "Knowledge of ossification timing is critical for detecting avulsion fractures, particularly medial epicondyle avulsion which can be mistakenly interpreted as an un-united epiphysis."
            ),
            "MRCP": (
                "Nursemaid's elbow (subluxation of the radial head) and manual reduction technique",
                "Axial traction on an extended and pronated arm causing subluxation of the annular ligament into the radiohumeral joint, reduced by gentle supination and flexion with thumb pressure on the radial head.",
                "In toddlers under 4-5 years, the annular ligament is thin and pliable; a sudden pull on the wrist causes the ligament to slip over the cartilaginous radial head into the joint space."
            ),
            "MRCEM": (
                "Management of the 'pink and pulseless' hand in supracondylar fracture",
                "If the radial pulse is absent but the hand is warm, pink, with capillary refill < 2 seconds, immediate gentle closed reduction is performed; if still pulseless after reduction, vascular exploration is indicated.",
                "Brachial artery spasm or kinking over the proximal fracture spike is common; anatomical closed reduction and stabilization frequently restores palpable radial pulses without open arteriotomy."
            ),
            "SMLE": (
                "Immobilization protocol for uncomplicated torus (buckle) fractures of the distal radius",
                "Treating simple pediatric distal radial torus fractures with a removable volar splint or short arm cast for 3 weeks, without requiring routine repeat radiographs.",
                "Torus fractures are intrinsically stable compression injuries with zero risk of displacement; rigid prolonged immobilization is unnecessary and simple splinting provides excellent recovery."
            ),
            "HAAD / DHA": (
                "Child abuse (non-accidental injury) skeletal survey: corner fractures and posterior rib fractures",
                "Identifying metaphyseal corner fractures (bucket-handle fractures), posterior rib fractures, and multiple fractures of varying healing stages as high-specificity markers of physical abuse.",
                "Metaphyseal chip fractures result from sudden forceful pulling or twisting of limbs; their presence in non-ambulatory infants mandates immediate multidisciplinary safeguarding protection."
            ),
            "UHS MBBS": (
                "Anatomy of the supracondylar region and relationship to the neurovascular bundle",
                "Thin bone between the coronoid fossa anteriorly and olecranon fossa posteriorly, with the brachial artery and median nerve passing anteriorly over the brachialis muscle.",
                "Posterior displacement of the distal fracture fragment causes the sharp proximal humeral spike to thrust anteriorly, directly lacerating or entrapping the adjacent brachial artery and median nerve."
            )
        }
    },

    # Domain 93: Shoulder Dislocation & Rotator Cuff Pathology
    {
        "id": "domain_93_shoulder_injuries",
        "entity": "Anterior and Posterior shoulder dislocation, Bankart/Hill-Sachs lesions, and Rotator cuff tears",
        "hallmark": "flattening of the deltoid contour ('squared-off' shoulder), prominent acromion, arm held in slight abduction and external rotation, axillary nerve hypoesthesia over the regimental badge area, or painful arc with inability to abduct",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Anatomy of the glenohumeral labrum, SITS muscles, and axillary nerve course around the surgical neck",
                "Glenoid labrum deepening the shallow fossa, Supraspinatus/Infraspinatus/Teres minor/Subscapularis dynamic stabilization, and axillary nerve traversing the quadrangular space around the surgical neck.",
                "The axillary nerve winds intimately around the surgical neck of the humerus beneath the inferior glenohumeral joint capsule; anterior inferior dislocation directly stretches this nerve."
            ),
            "Step 2 CK": (
                "Closed reduction techniques (Milch, Stimson, Cunningham) and post-reduction neurovascular verification",
                "Performing emergent closed reduction using gentle traction-countertraction or Cunningham/Milch maneuvers under procedural sedation, documenting pre- and post-reduction axillary nerve function.",
                "Prompt reduction minimizes articular cartilage compressive ischemia and neurovascular traction; testing cutaneous sensation over the lateral deltoid ('regimental badge area') verifies nerve integrity."
            ),
            "Step 3": (
                "Recurrent shoulder instability: Bankart lesion, Hill-Sachs deformity, and Bristow-Latarjet surgery",
                "Investigating recurrent dislocations for anteroinferior labral tear (Bankart) and posterolateral humeral head compression fracture (Hill-Sachs), indicating Latarjet coracoid transfer for bony glenoid loss.",
                "Young active patients (< 20 years) have a >70-90% recurrence rate after initial dislocation; significant anterior glenoid bone loss (> 20-25%) mandates bone graft transfer (Latarjet procedure)."
            ),
            "PLAB / UKMLA": (
                "Posterior shoulder dislocation after seizures or electrocution and lightbulb sign on radiograph",
                "Recognizing posterior dislocation following epileptic seizure or electrical shock, presenting with arm held in internal rotation and adduction with 'lightbulb sign' on AP radiograph.",
                "Simultaneous violent contraction of all shoulder musculature overcomes external rotators, forcing the humeral head posteriorly; missing posterior dislocations on standard AP radiographs is common without axillary/Y views."
            ),
            "AMC": (
                "Physical examination tests for rotator cuff integrity: Drop arm, Empty can, and Hornblower tests",
                "Evaluating supraspinatus tear with the Empty Can (Jobe) test and Drop Arm test, infraspinatus with resisted external rotation, and subscapularis with the Lift-Off (Gerber) or Belly-Press test.",
                "Supraspinatus initiates the first 15 degrees of abduction and stabilizes the humeral head against the glenoid; full-thickness tears cause sudden drop of the arm when lowered past 90 degrees."
            ),
            "MCCQE": (
                "Subacromial impingement syndrome and Neer/Hawkins-Kennedy diagnostic tests",
                "Painful arc between 60 and 120 degrees of active abduction, positive Neer impingement sign, and positive Hawkins-Kennedy test indicating subacromial bursitis and supraspinatus tendonitis.",
                "Repetitive overhead elevation compresses the supraspinatus tendon and subacromial bursa against the coracoacromial arch, causing chronic microvascular ischemic tendinopathy."
            ),
            "FCPS": (
                "Arthroscopic Bankart repair vs open Latarjet coracoid transfer biomechanics",
                "Arthroscopic suture anchor labral refixation for isolated soft-tissue Bankart lesions, and coracoid osteotomy with conjoint tendon transfer through subscapularis (Latarjet) for critical glenoid bone loss.",
                "The Latarjet procedure provides a 'triple-blocking' effect: restoring glenoid bone surface, providing a dynamic conjoint tendon muscular sling in abduction/external rotation, and reinforcing the capsule."
            ),
            "NLE": (
                "Clinical presentation of anterior shoulder dislocation: 'squared-off' shoulder and empty glenoid",
                "Loss of normal rounded lateral deltoid contour, prominent acromion process, palpable humeral head in the subcoracoid space, and inability to touch the opposite shoulder (Dugas sign).",
                "Anterior dislocation accounts for >95% of shoulder dislocations; the displaced humeral head rests anteriorly and inferiorly beneath the coracoid process."
            ),
            "NEET PG": (
                "Trough line, rim sign, and reverse Hill-Sachs lesion in posterior shoulder dislocation",
                "Anterior humeral head impaction fracture (reverse Hill-Sachs / McLaughlin lesion), vacant glenoid sign, and vertical trough line on anteroposterior radiograph in posterior dislocation.",
                "In posterior dislocation, the anterior aspect of the humeral head impacts against the posterior glenoid rim, producing an indentation fracture (McLaughlin lesion) that causes recurrent instability."
            ),
            "MRCP": (
                "Adhesive capsulitis (Frozen shoulder) stages and association with diabetes and thyroid disease",
                "Progressive insidious loss of both active AND passive glenohumeral range of motion in all planes (especially external rotation), strongly associated with diabetes mellitus and hypothyroidism.",
                "Unlike rotator cuff tears where passive range of motion is fully preserved, adhesive capsulitis is characterized by dense fibrotic thickening and contracture of the joint capsule restricting passive movement."
            ),
            "MRCEM": (
                "Axillary view or scapular Y-view importance in verifying concentric glenohumeral reduction",
                "Obtaining a true axillary or scapular Y-view radiograph pre- and post-reduction to definitively confirm that the humeral head is centered within the glenoid fossa.",
                "Standard anteroposterior radiographs can deceptively appear normal in posterior dislocation or subtle subluxation; orthogonal axillary or Velpeau views provide unequivocal anatomical orientation."
            ),
            "SMLE": (
                "Conservative management and rehabilitation progression for partial rotator cuff tears",
                "Subacromial corticosteroid injection for acute inflammation, followed by rotator cuff strengthening physical therapy and periscapular stabilization exercises.",
                "Non-operative therapy is successful in >75% of partial or atraumatic degenerative rotator cuff tears; surgery is indicated if pain and functional disability persist after 3 to 6 months."
            ),
            "HAAD / DHA": (
                "Post-reduction immobilization: internal vs external rotation bracing debate",
                "Immobilizing in a standard sling for 1 to 2 weeks followed by guided physical therapy, avoiding prolonged rigid immobilization to prevent secondary joint stiffness.",
                "While external rotation bracing was historically hypothesized to improve labral coaptation, large randomized trials show equivalent recurrence rates to conventional comfortable sling wear."
            ),
            "UHS MBBS": (
                "Shoulder joint stability factors: dynamic vs static stabilizers",
                "Static stabilizers (glenoid labrum, glenohumeral ligaments, joint capsule, negative intra-articular pressure) and dynamic stabilizers (rotator cuff muscles and long head of biceps).",
                "The glenohumeral joint trades structural stability for extreme multi-axial mobility, possessing the greatest range of motion of any joint in the human body, predisposing to recurrent dislocation."
            )
        }
    },

    # Domain 94: Hip Fractures & Femoral Head Osteonecrosis
    {
        "id": "domain_94_hip_fractures",
        "entity": "Femoral neck vs Intertrochanteric hip fractures and Avascular necrosis (AVN)",
        "hallmark": "elderly patient after a fall presenting with a shortened and externally rotated lower extremity, inability to bear weight, severe groin/hip pain, and disruption of Shenton line on pelvic radiography",
        "system": "Musculoskeletal",
        "ref_key": "orthopedics",
        "subjects": {
            "Step 1": "Anatomy",
            "NEET PG": "Surgery",
            "FCPS": "Surgery",
            "UHS MBBS": "Anatomy",
            "other": "Surgery"
        },
        "concepts": {
            "Step 1": (
                "Arterial blood supply to the femoral head and intracapsular vs extracapsular fracture anatomy",
                "Medial circumflex femoral artery giving off ascending retinacular branches supplying the femoral head, traversing intracapsularly beneath the periosteum of the femoral neck.",
                "Intracapsular femoral neck fractures shear the retinacular vessels of the medial circumflex femoral artery, predisposing to high rates of femoral head avascular necrosis and nonunion."
            ),
            "Step 2 CK": (
                "Surgical strategy: hemiarthroplasty/total hip for displaced neck fractures vs cephalomedullary nail for intertrochanteric",
                "Performing hemiarthroplasty or total hip arthroplasty for displaced intracapsular neck fractures in elderly patients, and sliding hip screw or cephalomedullary nail for extracapsular intertrochanteric fractures.",
                "Displaced intracapsular fractures have poor healing potential; replacing the femoral head prevents nonunion and AVN, while extracapsular intertrochanteric fractures have rich blood supply and heal with internal fixation."
            ),
            "Step 3": (
                "Early surgical fixation within 24 to 48 hours to reduce perioperative mortality and delirium",
                "Expediting medical optimization and performing definitive surgical fixation within 24 to 48 hours of admission to drastically lower risks of pressure ulcers, pneumonia, VTE, and 30-day mortality.",
                "Delaying hip fracture surgery beyond 48 hours in frail elderly patients is independently associated with doubled 30-day mortality, severe delirium, and decubitus ulcer complications."
            ),
            "PLAB / UKMLA": (
                "NICE Guideline CG124: Orthogeriatric multidisciplinary care and fascia iliaca nerve block",
                "Administering a pre-operative ultrasound-guided fascia iliaca compartment nerve block for analgesia, reducing systemic opioid requirements and risk of postoperative delirium.",
                "Fascia iliaca nerve block anesthetizes the femoral, lateral cutaneous, and obturator nerves, providing superior non-opioid pain relief in acute fractured neck of femur."
            ),
            "AMC": (
                "Garden classification of intracapsular femoral neck fractures",
                "Garden I (incomplete/impacted valgus), Garden II (complete non-displaced), Garden III (complete partially displaced), and Garden IV (completely displaced with lost trabecular alignment).",
                "Garden stages I and II have intact retinacular vessels and can be preserved with internal screw fixation; stages III and IV disrupt blood supply and mandate arthroplasty in elderly patients."
            ),
            "MCCQE": (
                "Risk factors for non-traumatic avascular necrosis of the femoral head",
                "Identifying chronic high-dose systemic corticosteroid therapy, chronic excessive alcohol intake, sickle cell disease, systemic lupus erythematosus, and decompression sickness (Caisson disease).",
                "Corticosteroids and chronic alcoholism cause bone marrow fat embolization and microvascular thrombosis, leading to ischemic death of osteocytes in the subchondral femoral head."
            ),
            "FCPS": (
                "Surgical management of early pre-collapse avascular necrosis: Core decompression vs total hip",
                "Performing core decompression with bone marrow aspirate concentrate (BMAC) for pre-collapse Ficat stage I/II AVN, versus total hip arthroplasty once subchondral crescent sign and collapse occur.",
                "Core decompression reduces elevated intraosseous pressure and stimulates neovascularization; once articular collapse occurs (Ficat III/IV), total hip replacement is the only definitive option."
            ),
            "NLE": (
                "Differentiating femoral neck from intertrochanteric fractures by external rotation deformity",
                "Moderate external rotation and mild shortening in intracapsular neck fractures (constrained by capsule) versus severe external rotation (foot resting on bed) and marked shortening in extracapsular fractures.",
                "Extracapsular fractures occur outside the fibrous capsule where strong pull of the iliopsoas and gluteal muscles rotates the distal shaft unobstructed, causing extreme deformity."
            ),
            "NEET PG": (
                "Shenton line disruption, crescent sign on plain radiography, and MRI sensitivity in early AVN",
                "Loss of continuity of Shenton's parabolic line on pelvis radiograph, subchondral fracture (crescent sign), and MRI 'double-line sign' on T2-weighted imaging for early osteonecrosis.",
                "MRI is the gold standard for diagnosing early pre-radiographic avascular necrosis, showing a focal serpiginous line of low signal intensity with a high-intensity inner hyperemic zone."
            ),
            "MRCP": (
                "Legg-Calve-Perthes disease vs Slipped Capital Femoral Epiphysis (SCFE)",
                "Differentiating idiopathic avascular necrosis of the femoral head in young boys aged 4-8 (Perthes) from posteromedial slippage of the femoral epiphysis in obese adolescents aged 11-14 (SCFE).",
                "Perthes disease presents with painless limp and insidious flattening of the femoral head; SCFE presents with hip or referred knee pain and obligatory external rotation on passive hip flexion."
            ),
            "MRCEM": (
                "Assessment of occult hip fracture with negative plain radiographs: urgent MRI or CT",
                "Obtaining an immediate coronal MRI (or thin-slice CT if MRI unavailable) for elderly patients unable to bear weight with persistent groin pain despite normal initial plain radiographs.",
                "Up to 5-10% of hip fractures in osteoporotic elderly individuals are radiographically occult on initial X-rays; early MRI detects occult trabecular fractures, avoiding delayed displaced fracture."
            ),
            "SMLE": (
                "Venous thromboembolism (VTE) prophylaxis protocols following hip fracture surgery",
                "Administering low-molecular-weight heparin (enoxaparin) or direct oral anticoagulants (apixaban/rivaroxaban) for at least 28 to 35 days postoperatively, combined with intermittent pneumatic compression.",
                "Hip fracture surgery carries the highest risk of postoperative deep vein thrombosis and fatal pulmonary embolism among all surgical procedures, mandating extended 35-day thromboprophylaxis."
            ),
            "HAAD / DHA": (
                "Secondary prevention of osteoporotic fractures: DXA scanning and bisphosphonate initiation",
                "Arranging dual-energy X-ray absorptiometry (DXA) bone mineral density testing and initiating intravenous zoledronic acid or oral alendronate during post-acute fracture rehabilitation.",
                "A fragility hip fracture establishes the clinical diagnosis of severe osteoporosis; initiating antiresorptive therapy halves the risk of sustaining a catastrophic contralateral hip fracture."
            ),
            "UHS MBBS": (
                "Shenton line and Ward triangle in proximal femoral trabecular architecture",
                "Shenton line as a smooth continuous parabolic arc drawn along the inferior border of the superior pubic ramus and inferior margin of the femoral neck.",
                "Ward's triangle is a naturally radiolucent area of weakness between the principal compressive and tensile trabecular systems of the femoral neck, where osteoporotic fractures typically initiate."
            )
        }
    }
]
