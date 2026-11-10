import json

items_s2_b20_part2 = [
  {
    "code": "op-c-s2-0488",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Active Pulmonary Tuberculosis Treatment and Toxicity Mitigation",
    "subtopic": "RIPE Quadruple Therapy, Pyridoxine Co-Administration, Ethambutol Optic Neuritis",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man who recently emigrated from an endemic region presents with a 6-week history of productive cough with blood-streaked sputum, drenching night sweats, subjective fevers, and an unintentional 7-kg (15-lb) weight loss. Sputum acid-fast bacillus (AFB) smear demonstrates 3+ acid-fast rods, and nucleic acid amplification testing (NAAT) is positive for Mycobacterium tuberculosis with no mutations conferring rifampin or isoniazid resistance. A chest radiograph demonstrates a 3.5-cm thick-walled cavitary lesion in the right lung apex with surrounding nodular infiltrates. Standard quadruple antimicrobial therapy is initiated with rifampin, isoniazid, pyrazinamide, and ethambutol (RIPE regimen). The patient has a history of poorly controlled type 2 diabetes mellitus and mild baseline diabetic sensory neuropathy in his toes.\n\nWhich of the following adjunctive interventions is essential to prescribe concomitantly with this quadruple therapy regimen?",
    "choices": [
      [
        "Oral pyridoxine (vitamin B6, 25 to 50 mg daily) to prevent isoniazid-induced peripheral neurotoxicity",
        "The standard initial intensive phase of therapy for drug-susceptible pulmonary tuberculosis consists of 2 months of four drugs: RIFAMPIN (inhibits bacterial DNA-dependent RNA polymerase), ISONIAZID (inhibits mycolic acid synthesis via KatG-activated InhA inhibition), PYRAZINAMIDE (disrupts mycobacterial membrane transport at acidic pH), and ETHAMBUTOL (inhibits arabinosyl transferase in cell wall synthesis), followed by a 4-month continuation phase of rifampin and isoniazid (total 6 months). (1) ISONIAZID NEUROTOXICITY AND PYRIDOXINE: Isoniazid competitively inhibits pyridoxine phosphokinase, the enzyme responsible for converting dietary pyridoxine (vitamin B6) into its active coenzyme form, pyridoxal-5-phosphate. Furthermore, isoniazid forms inactive hydrazone complexes with pyridoxal phosphate, accelerating its renal clearance. Pyridoxal phosphate is an indispensable cofactor for glutamic acid decarboxylase, which synthesizes GABA, and for neuronal sphingolipid and myelin synthesis. Depletion of active vitamin B6 manifests clinically as symmetric, painful, 'stocking-glove' sensory peripheral neuropathy, ataxia, and rarely seizures. (2) ADJUNCTIVE PYRIDOXINE INDICATION: Routine co-administration of oral pyridoxine (vitamin B6, 25-50 mg daily) completely prevents isoniazid-induced neuropathy and is MANDATORY in patients with underlying risk factors: diabetes mellitus, chronic kidney disease, alcoholism, malnutrition, HIV infection, pregnancy, and pre-existing neuropathy. (3) ETHAMBUTOL TOXICITY: Requires baseline and monthly visual acuity and red-green color discrimination testing (Ishihara plates) to screen for retrobulbar optic neuritis."
      ],
      [
        "Oral cyanocobalamin (vitamin B12, 1,000 mcg daily) to prevent ethambutol-mediated retrobulbar optic nerve demyelination",
        "Cyanocobalamin does not prevent ethambutol optic toxicity, which is dose-dependent and mediated by mitochondrial copper/zinc chelation; ethambutol requires visual screening, while vitamin B6 is used for isoniazid."
      ],
      [
        "Oral allopurinol 300 mg daily to prevent pyrazinamide-induced asymptomatic hyperuricemia",
        "Pyrazinamide inhibits renal uric acid secretion causing asymptomatic hyperuricemia in most patients, which is self-limited and requires no therapy; allopurinol is indicated only if frank clinical gouty arthritis develops."
      ],
      [
        "Intravenous N-acetylcysteine daily to prevent rifampin-mediated intrinsic hepatocyte necrosis",
        "N-acetylcysteine treats acetaminophen overdose; it has no role in preventing rifamycin hepatotoxicity, which is monitored with serial baseline and follow-up liver function tests."
      ],
      [
        "High-dose oral prednisone 60 mg daily for 8 weeks to improve mycobacterial clearance in cavitary pulmonary disease",
        "Corticosteroids have proven survival benefit exclusively in tuberculous meningitis and tuberculous pericarditis; routine adjunctive steroids are not indicated in uncomplicated pulmonary tuberculosis."
      ]
    ],
    "rationale": "Active tuberculosis is treated with RIPE (rifampin, isoniazid, pyrazinamide, ethambutol). Isoniazid depletes active pyridoxine (vitamin B6) by inhibiting pyridoxine phosphokinase and accelerating renal excretion of pyridoxal phosphate, leading to severe peripheral neuropathy. Co-administration of oral pyridoxine (vitamin B6, 25-50 mg daily) is mandatory, especially in high-risk patients (diabetes, alcoholism, malnutrition, renal disease, pregnancy) to prevent neuropathy.",
    "metadata": {
      "shortSolution": "Active TB patient starting RIPE therapy with baseline diabetic neuropathy must receive oral pyridoxine (vitamin B6) to prevent isoniazid-induced peripheral neurotoxicity.",
      "competingChoice": "Oral cyanocobalamin (vitamin B12, 1,000 mcg daily) to prevent ethambutol-mediated retrobulbar optic nerve demyelination",
      "exclusionFinding": "Ethambutol causes optic neuritis, which is monitored via red-green color testing and cannot be prevented with vitamin B12; pyridoxine (vitamin B6) is specific for isoniazid neuropathy.",
      "pedagogicalValue": "Mastering the biochemical mechanism and prevention of isoniazid-induced neuropathy using oral pyridoxine (vitamin B6).",
      "citations": [
        "Nahid P, Dorman SE, Alipanah N, et al. Official American Thoracic Society/Centers for Disease Control and Prevention/Infectious Diseases Society of America Clinical Practice Guidelines: Treatment of Drug-Susceptible Tuberculosis. Clin Infect Dis. 2016;63(7):e147-e195. PMID: 27516382.",
        "Steichen O, Martinez-Almoyna L, De Broucker T. Isoniazid induced neuropathy: consider prevention. Rev Mal Respir. 2006;23(2 Pt 1):157-160. PMID: 16788439."
      ]
    },
    "critique": {
      "shortestValidSolution": "Active TB on RIPE + diabetes/neuropathy -> add oral pyridoxine (vitamin B6) to prevent INH-induced peripheral neuropathy.",
      "strongestCompetitor": "Oral cyanocobalamin (vitamin B12, 1,000 mcg daily) to prevent ethambutol-mediated retrobulbar optic nerve demyelination",
      "exclusionFinding": "Ethambutol optic toxicity is monitored with Ishihara plates and not prevented with B12; INH neuropathy requires vitamin B6.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0489",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Syphilis Clinical Staging and Stage-Specific Penicillin Regimens",
    "subtopic": "Primary/Secondary vs Late Latent vs Neurosyphilis, Penicillin Formulations",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man presents to the clinic for a routine sexual health checkup. He is completely asymptomatic and denies fever, rash, genital lesions, visual disturbances, or neurological symptoms. He reports multiple sexual encounters with male partners over the past year. Physical examination is entirely normal: no skin rashes on the trunk, palms, or soles; no mucous patches or condyloma lata; and no lymphadenopathy. Neurological and ophthalmologic examinations are unremarkable. Routine nontreponemal screening reveals a reactive serum rapid plasma reagin (RPR) at a titer of 1:32, and confirmatory Treponema pallidum particle agglutination (TP-PA) testing is reactive. Review of the electronic medical record and public health registry reveals no prior history of syphilis and no documented negative nontreponemal test within the past 12 months. The patient cannot recall whether he had any transient genital sores or rashes over the preceding several years.\n\nAccording to current Centers for Disease Control and Prevention (CDC) sexually transmitted infections treatment guidelines, which of the following represents the most appropriate antimicrobial regimen for this patient?",
    "choices": [
      [
        "Intramuscular benzathine penicillin G (2.4 million units IM once weekly for 3 consecutive weeks; total 7.2 million units)",
        "Syphilis is a multistage systemic infection caused by the spirochete Treponema pallidum. Clinical staging dictates the specific formulation, route, and duration of antimicrobial therapy: (1) EARLY SYPHILIS (duration <= 1 year): Encompasses Primary syphilis (solitary painless chancre), Secondary syphilis (diffuse maculopapular rash involving palms/soles, condyloma lata, generalized lymphadenopathy), and Early Latent syphilis (asymptomatic seropositivity with a documented negative serology or documented exposure within the preceding 12 months). TREATMENT: A SINGLE INTRAMUSCULAR DOSE of long-acting BENZATHINE PENICILLIN G (2.4 million units IM). (2) LATE LATENT SYPHILIS OR SYPHILIS OF UNKNOWN DURATION: Defined as asymptomatic seropositivity when infection occurred > 1 year ago, or when the duration of infection cannot be definitively verified (as in this patient, who has no prior tests within 12 months and no clear timeline). In late latent infection, treponemal replication is exceedingly slow; maintaining treponemicidal penicillin levels for an extended period is required to eradicate latent organisms. TREATMENT: INTRAMUSCULAR BENZATHINE PENICILLIN G (2.4 million units IM once weekly for 3 consecutive weeks, total 7.2 million units). (Note: If any dose is missed by > 7-9 days, the entire 3-week course must be restarted). (3) NEUROSYPHILIS / OCULAR SYPHILIS: Requires continuous INTRAVENOUS AQUEOUS CRYSTALLINE PENICILLIN G (18-24 million units daily IV for 10-14 days); intramuscular benzathine penicillin does not achieve treponemicidal levels in the cerebrospinal fluid."
      ],
      [
        "A single intramuscular injection of benzathine penicillin G (2.4 million units IM once)",
        "A single injection of benzathine penicillin G is curative only for early syphilis (duration <= 1 year); because this patient has syphilis of unknown duration, single-dose therapy carries high failure rates, and 3 weekly doses are mandatory."
      ],
      [
        "Intravenous aqueous crystalline penicillin G (4 million units every 4 hours for 14 days)",
        "Intravenous aqueous penicillin is reserved for neurosyphilis, ocular syphilis, or otosyphilis; in an asymptomatic patient with normal neurological and eye exams, lumbar puncture and IV therapy are not indicated."
      ],
      [
        "Oral amoxicillin 500 mg three times daily plus oral probenecid for 14 days",
        "Oral amoxicillin has erratic pharmacokinetics in late latent syphilis; parenteral benzathine penicillin G is the standard of care recommended by the CDC."
      ],
      [
        "Intramuscular procaine penicillin G 1.2 million units daily for 7 days",
        "Procaine penicillin G is a short-acting daily formulation that does not provide the sustained treponemicidal levels achieved by long-acting benzathine penicillin G."
      ]
    ],
    "rationale": "Syphilis of unknown duration (or late latent syphilis > 1 year) requires intramuscular benzathine penicillin G (2.4 million units IM once weekly for 3 consecutive weeks; total 7.2 million units) to maintain treponemicidal levels against slowly replicating spirochetes (CDC STI guidelines). A single IM dose is used only for early syphilis (<= 1 year: primary, secondary, early latent). IV aqueous penicillin G is reserved for neurosyphilis or ocular syphilis.",
    "metadata": {
      "shortSolution": "Asymptomatic syphilis with unknown duration and no prior negative test in 12 months is classified as syphilis of unknown duration/late latent; treated with IM benzathine penicillin G weekly for 3 weeks.",
      "competingChoice": "A single intramuscular injection of benzathine penicillin G (2.4 million units IM once)",
      "exclusionFinding": "Single-dose benzathine penicillin is curative only when duration <= 1 year is confirmed; unknown duration requires 3 weekly doses to clear latent spirochetes.",
      "pedagogicalValue": "Differentiating stage-specific penicillin regimens: single IM benzathine penicillin dose for early syphilis (<= 1 year) vs 3 weekly IM doses for late latent/unknown duration.",
      "citations": [
        "Workowski KA, Bachmann LH, Chan PA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926.",
        "Hook EW 3rd, Peeling RW. Syphilis. Lancet. 2017;389(10078):1550-1557. PMID: 27993382."
      ]
    },
    "critique": {
      "shortestValidSolution": "Syphilis of unknown duration -> IM benzathine penicillin G (2.4 million units weekly x 3 weeks).",
      "strongestCompetitor": "A single intramuscular injection of benzathine penicillin G (2.4 million units IM once)",
      "exclusionFinding": "Single dose is for confirmed early syphilis (<= 1 year); unknown duration mandates 3 weekly doses.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0490",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Diabetic Foot Osteomyelitis and Diagnostic Stewardship",
    "subtopic": "Probe-to-Bone Test, Bone Biopsy Gold Standard, Superficial Swab Inaccuracy",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man with a 15-year history of poorly controlled type 2 diabetes mellitus complicated by dense peripheral sensory neuropathy and peripheral artery disease presents to the outpatient wound clinic for evaluation of a chronic plantar ulcer beneath the right first metatarsal head that has been present for 8 weeks. He denies fever, chills, or new pain. On physical examination, there is a 2.2-cm circular ulcer with surrounding thick hyperkeratotic callus and minimal seropurulent discharge, without ascending cellulitis or fluctuance. The patient feels no discomfort during palpation. The clinician gently introduces a sterile, blunt metal probe into the ulcer base; the probe palpates a hard, gritty, solid surface with no intervening soft tissue (positive probe-to-bone test). Plain radiographs of the right foot reveal cortical irregularity, periosteal reaction, and focal osteolysis involving the head of the first metatarsal bone, highly suggestive of osteomyelitis. Contrast-enhanced MRI confirms cortical bone disruption and marrow edema consistent with osteomyelitis.\n\nWhich of the following represents the most appropriate next step to guide definitive antimicrobial therapy for this patient?",
    "choices": [
      [
        "Perform a percutaneous or operative bone biopsy through uninfected skin to obtain bone tissue for histological evaluation and quantitative microbiological cultures, withholding prolonged targeted antibiotic therapy until culture results are available",
        "Diabetic Foot Osteomyelitis (DFO) is a major complication of chronic neuropathic ulcers, carrying high risks of progressive tissue necrosis and lower-extremity amputation. (1) CLINICAL DIAGNOSIS: The 'Probe-to-Bone' (PTB) test has an exceptionally high positive predictive value (> 85-90%) in high-risk patients; when a sterile metal probe encounters a hard, gritty bony surface, osteomyelitis is virtually certain. Plain radiography and MRI provide anatomical confirmation. (2) MICROBIOLOGICAL STEWARDSHIP AND THE GOLD STANDARD (IDSA / IWGDF GUIDELINES): The definitive gold standard for guiding antimicrobial selection in DFO is a PERCUTANEOUS (OR OPERATIVE) BONE BIOPSY obtained through intact, cleansed skin or sterile operative field. Bone tissue undergoes histological analysis (confirming marrow osteonecrosis and polymorphonuclear infiltration) and aerobic, anaerobic, and fungal microbiological cultures. (3) DANGER OF SUPERFICIAL SWAB CULTURES: Superficial wound swabs, drainage swabs, or sinus tract swabs merely reflect superficial colonizing flora (e.g., coagulase-negative staphylococci, Corynebacterium species, Enterobacterales) rather than the true deep pathogens invading the bone matrix. Treating DFO based on superficial swabs results in inappropriate, ineffective antibiotic therapy, drug toxicity, and treatment failure. (4) CLINICAL STABILITY AND ANTIBIOTIC TIMING: In a clinically stable, non-septic patient with no systemic signs of toxicity, severe ischemia, or rapidly spreading soft-tissue infection, ANTIBIOTIC THERAPY SHOULD BE SAFELY HELD FOR SEVERAL DAYS until a bone biopsy is performed. Pre-biopsy antibiotics severely reduce the culture yield of bone specimens from > 70% to < 30%."
      ],
      [
        "Swab the superficial purulent discharge from the ulcer base with a cotton swab and initiate 6 weeks of intravenous vancomycin and cefepime",
        "Superficial wound swabs sample surface colonizers rather than true bone pathogens; treating based on superficial swabs leads to inappropriate antibiotic selection, resistant superinfections, and treatment failure."
      ],
      [
        "Immediate urgent transmetatarsal amputation of the right forefoot without attempting conservative bone biopsy or antimicrobial therapy",
        "Surgical amputation is reserved for severe gangrene, necrotizing infection, or extensive bone destruction refractory to therapy; conservative medical-surgical management guided by bone biopsy preserves limb function."
      ],
      [
        "Initiate oral ciprofloxacin 750 mg twice daily monotherapy for 6 months based on radiological findings alone",
        "Empiric fluoroquinolone monotherapy without microbiological identification frequently fails due to widespread staphylococcal and gram-negative resistance and exposes the patient to severe tendon and neurotoxicity."
      ],
      [
        "Administer hyperbaric oxygen therapy daily for 40 sessions as primary standalone curative treatment",
        "Hyperbaric oxygen is an adjunctive therapy with equivocal evidence; it does not replace the requirement for bone biopsy, pathogen-directed antimicrobial therapy, and proper mechanical offloading."
      ]
    ],
    "rationale": "In diabetic foot ulcers, a positive probe-to-bone test and MRI showing cortical erosion establish the diagnosis of osteomyelitis. Guidelines (IDSA/IWGDF) mandate that superficial wound swabs should NOT be used to guide therapy because they reflect skin colonizers rather than deep bone pathogens. The gold standard is a percutaneous bone biopsy (obtained through uninfected skin) for histology and quantitative culture. In a hemodynamically stable patient without spreading cellulitis, antibiotics should be withheld until the bone biopsy is obtained to ensure accurate pathogen identification and targeted therapy.",
    "metadata": {
      "shortSolution": "Diabetic foot ulcer with positive probe-to-bone and MRI osteomyelitis in a stable patient requires bone biopsy through uninfected skin for culture before targeted antibiotic therapy; superficial swabs are inaccurate.",
      "competingChoice": "Swab the superficial purulent discharge from the ulcer base with a cotton swab and initiate 6 weeks of intravenous vancomycin and cefepime",
      "exclusionFinding": "Superficial swabs reflect surface colonizers rather than true bone pathogens; IDSA guidelines strongly recommend against swab cultures and mandate bone biopsy.",
      "pedagogicalValue": "Understanding the diagnostic gold standard for diabetic foot osteomyelitis (bone biopsy through uninfected skin) and why superficial ulcer swabs are unreliable.",
      "citations": [
        "Lipsky BA, Berendt AR, Cornia PB, et al. 2012 Infectious Diseases Society of America clinical practice guideline for the diagnosis and treatment of diabetic foot infections. Clin Infect Dis. 2012;54(12):e132-e173. PMID: 22619242.",
        "Senneville E, Lipsky BA, Abbas ZG, et al. Diagnosis of infection in the foot in patients with diabetes: which tests to order? Diabetes Metab Res Rev. 2020;36 Suppl 1:e3284. PMID: 32176442."
      ]
    },
    "critique": {
      "shortestValidSolution": "Diabetic foot osteomyelitis (probe-to-bone+, MRI+) in stable patient -> bone biopsy for culture before antibiotics; avoid superficial swabs.",
      "strongestCompetitor": "Swab the superficial purulent discharge from the ulcer base with a cotton swab and initiate 6 weeks of intravenous vancomycin and cefepime",
      "exclusionFinding": "Superficial swabs sample colonizing flora, not bone pathogens; bone biopsy is the definitive diagnostic standard.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0491",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Native Joint Septic Arthritis",
    "subtopic": "Synovial Fluid Analysis, Urgent Surgical Drainage, Empiric Vancomycin and Ceftriaxone",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old woman with rheumatoid arthritis managed with weekly oral methotrexate and low-dose prednisone presents to the emergency department with sudden, severe right knee pain, swelling, and inability to bear weight that began 18 hours ago. She denies recent trauma, sexual activity, or tick bites. On physical examination, she appears in acute distress. Vital signs show blood pressure of 128/76 mm Hg, heart rate of 108/min, respiratory rate of 18/min, and temperature of 38.8 C (101.8 F). The right knee is markedly swollen with a large, tense effusion, erythematous, and warm to touch. Any passive or active range of motion of the knee is severely restricted due to excruciating pain. Other joints show mild chronic symmetrical rheumatoid changes without acute inflammation. Emergent bedside arthrocentesis is performed, yielding 45 mL of turbid, purulent yellowish-green synovial fluid. Laboratory analysis of the synovial fluid reveals:\n- White blood cell count: 88,000/mm3 with 94% polymorphonuclear neutrophils (PMNs)\n- Polarized light microscopy: Negative for monosodium urate and calcium pyrophosphate crystals\n- Gram stain: Gram-positive cocci in clusters visible\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Urgent orthopedic surgical joint decompression and irrigation (arthrotomy or arthroscopy) combined with immediate empiric intravenous vancomycin and ceftriaxone",
        "Acute Native Joint Septic Arthritis is an orthopedic emergency that leads to irreversible articular cartilage destruction within 24 to 48 hours if untreated. Pathophysiology involves bacterial proliferation within the synovial fluid, triggering intense leukocyte recruitment; polymorphonuclear leukocyte lysosomal enzymes (elastase, collagenase) and high intra-articular pressure rapidly dissolve articular hyaline cartilage. (1) DIAGNOSIS: Synovial fluid leukocyte count > 50,000 cells/mm3 with > 90% neutrophils is virtually diagnostic of septic arthritis (and counts can exceed 100,000/mm3). The presence of gram-positive cocci in clusters strongly implicates Staphylococcus aureus (the most common cause across all age groups). (2) MANDATORY EMERGENCY DRAINAGE: Mechanical evacuation of infected purulent fluid and debris is PARAMOUNT. Repeated needle aspiration can be considered for easily accessible joints (like the knee) in select patients, but URGENT ORTHOPEDIC SURGICAL CONSULTATION FOR FORMAL ARTHROSCOPIC OR OPEN ARTHROTOMY DEBRIDEMENT AND IRRIGATION is standard of care, especially in immunocompromised hosts (methotrexate/prednisone), when large purulent effusions are present, or when loculations prevent complete needle emptying. (3) EMPIRIC ANTIMICROBIAL REGIMEN: Immediate intravenous bactericidal coverage covering methicillin-resistant Staphylococcus aureus (MRSA) and gram-negative bacilli is initiated: INTRAVENOUS VANCOMYCIN (15-20 mg/kg IV q8-12h) PLUS a third-generation cephalosporin (e.g., CEFTRIAXONE 2 g IV daily) or cefepime."
      ],
      [
        "Initiate oral high-dose prednisone 60 mg daily and oral colchicine 0.6 mg twice daily for an acute rheumatoid arthritis flare",
        "Synovial fluid WBC of 88,000/mm3 with 94% neutrophils and visible gram-positive cocci in clusters proves bacterial septic arthritis; treating with immunosuppressive corticosteroids leads to fulminant joint destruction and fatal septicemia."
      ],
      [
        "Administer a single intra-articular injection of triamcinolone acetonide 40 mg into the right knee joint space",
        "Injecting intra-articular corticosteroids into an actively infected septic joint suppresses local immune defenses, accelerating rapid total cartilage destruction and osteomyelitis."
      ],
      [
        "Prescribe oral cephalexin 500 mg four times daily as outpatient therapy and arrange physical therapy in 1 week",
        "Oral beta-lactam therapy is completely inadequate for acute septic arthritis; hospitalization, emergent surgical drainage, and high-dose intravenous bactericidal therapy are mandatory."
      ],
      [
        "Apply a rigid plaster cylinder cast to immobilize the knee for 4 weeks with no drainage",
        "Immobilizing an infected, purulent joint without drainage allows proteolytic enzymes and elevated compartment pressure to completely digest the articular cartilage, causing permanent ankylosis and disability."
      ]
    ],
    "rationale": "Acute native joint septic arthritis presents with fever, joint warmth, and severe pain with passive motion. Synovial fluid WBC > 50,000/mm3 with > 90% PMNs and positive Gram stain is diagnostic. Management requires urgent mechanical joint decompression and irrigation (arthroscopy or arthrotomy) to remove destructive leukocyte enzymes, combined with immediate empiric IV vancomycin and ceftriaxone. Intra-articular or systemic corticosteroids are strictly contraindicated.",
    "metadata": {
      "shortSolution": "Purulent knee effusion with synovial WBC 88,000/mm3 (94% PMNs) and Gram-positive cocci is septic arthritis; requires urgent orthopedic surgical drainage/irrigation plus empiric IV vancomycin and ceftriaxone.",
      "competingChoice": "Initiate oral high-dose prednisone 60 mg daily and oral colchicine 0.6 mg twice daily for an acute rheumatoid arthritis flare",
      "exclusionFinding": "Synovial WBC > 50,000 and Gram-positive cocci prove bacterial infection; administering corticosteroids in septic arthritis leads to rapid catastrophic joint destruction.",
      "pedagogicalValue": "Recognizing the diagnostic criteria of septic arthritis (synovial WBC > 50,000/mm3, > 90% PMNs) and the necessity of urgent surgical drainage plus empiric IV vancomycin/ceftriaxone.",
      "citations": [
        "Sharff KA, Richards EP, Townes JM. Clinical management of septic arthritis. Curr Rheumatol Rep. 2013;15(6):332. PMID: 23595964.",
        "Horowitz DL, Katzap E, Horowitz S, Barilla-LaBarca ML. Approach to septic arthritis. Am Fam Physician. 2011;84(6):653-660. PMID: 21916390."
      ]
    },
    "critique": {
      "shortestValidSolution": "Purulent joint + synovial WBC 88,000 (94% PMNs) + gram-positive cocci -> urgent surgical joint irrigation/drainage + IV vancomycin and ceftriaxone.",
      "strongestCompetitor": "Initiate oral high-dose prednisone 60 mg daily and oral colchicine 0.6 mg twice daily for an acute rheumatoid arthritis flare",
      "exclusionFinding": "Gram-positive cocci and synovial WBC > 50,000 prove bacterial septic arthritis; steroids are strictly contraindicated.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0492",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Musculoskeletal",
    "topic": "Necrotizing Fasciitis and Clindamycin Antitoxin Therapy",
    "subtopic": "Type II Streptococcal Infection, Pain Out of Proportion, Immediate Surgical Debridement",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old previously healthy woman presents to the emergency department with excruciating pain in her left lower leg that began 12 hours ago after sustaining a superficial scratch on a rose thorn. She describes the pain as unbearable (10/10) and throbbing. On physical examination, she is pale, diaphoretic, and in agonizing distress. Vital signs reveal blood pressure of 86/52 mm Hg, heart rate of 132/min, respiratory rate of 28/min, and temperature of 39.4 C (102.9 F). Examination of the left lower extremity reveals diffuse mild erythema and wooden edema extending from the ankle to the mid-calf. There are two small violaceous hemorrhagic bullae over the anterior tibial crest. Palpation of the leg produces exquisite, agonizing pain that extends well beyond the visible margins of cutaneous erythema (pain out of proportion). Palpable crepitus is felt along the deep fascia. Laboratory evaluation reveals:\n- White blood cell count: 28,400/mm3 with 22% bands\n- Serum sodium: 126 mEq/L\n- Serum creatinine: 2.2 mg/dL (baseline 0.8 mg/dL)\n- Serum glucose: 210 mg/dL\n- Serum lactate: 5.8 mmol/L\n- Laboratory Risk Indicator for Necrotizing Fasciitis (LRINEC) score: 9 (high risk >= 6)\n\nWhich of the following represents the most appropriate immediate definitive management sequence for this patient?",
    "choices": [
      [
        "Immediate emergent surgical exploration and aggressive operative debridement, accompanied by rapid intravenous crystalloid resuscitation and broad-spectrum antimicrobial therapy with intravenous vancomycin, piperacillin-tazobactam, and clindamycin",
        "Necrotizing Fasciitis is a rapidly progressive, life-threatening bacterial infection of the deep subcutaneous tissue and fascia characterized by extensive microvascular thrombosis and liquefactive necrosis. (1) CLASSIFICATION: Type I (polymicrobial: mixed aerobes/anaerobes, common in diabetics) and Type II (monomicrobial: Group A Streptococcus [Streptococcus pyogenes], commonly in previously healthy patients following minor trauma). (2) CLINICAL HALLMARKS: (a) PAIN DISPROPORTIONATE TO PHYSICAL FINDINGS: The most reliable early clinical sign, caused by occlusion of nutrient vessels traveling through the deep fascia to superficial nerves; (b) Rapid clinical progression over hours with wooden skin induration, bullae (violaceous/hemorrhagic), skin anesthesia (from cutaneous nerve infarction), crepitus, and septic shock; (c) High LRINEC score (>= 6) with leukocytosis, hyponatremia, hyperglycemia, and elevated creatinine. (3) SURGERY IS PARAMOUNT: Emergent surgical exploration and aggressive operative fasciotomy/debridement of necrotic tissue is the SINGLE MOST IMPORTANT DETERMINANT OF SURVIVAL. Antibiotics cannot penetrate thrombosed, necrotic, non-perfused fascia; delaying surgical consultation for advanced imaging (CT/MRI) is a fatal mistake. (4) THE ESSENTIAL ROLE OF CLINDAMYCIN: In addition to broad-spectrum bactericidal therapy (vancomycin + piperacillin-tazobactam), INTRAVENOUS CLINDAMYCIN (600 to 900 mg IV q8h) MUST BE INCLUDED. In high-inoculum streptococcal infections, bacteria enter the stationary growth phase where penicillin-binding proteins (PBPs) are downregulated (the 'Eagle phenomenon'), rendering beta-lactams ineffective. Clindamycin binds the bacterial 50S ribosomal subunit, halting translation and shutting down production of lethal bacterial toxins (streptococcal pyrogenic exotoxins A and B [SPE-A, SPE-B], streptolysin O) that drive toxic shock and tissue necrosis."
      ],
      [
        "Obtain emergent contrast-enhanced MRI of the lower extremity to definitively delineate fascial planes before summoning a surgical consult",
        "Necrotizing fasciitis is a clinical diagnosis; waiting for MRI causes severe delays of several hours, during which bacterial necrosis advances at centimeters per hour, leading to fatal septic shock."
      ],
      [
        "Administer intravenous cefazolin 2 g every 8 hours monotherapy and observe in the step-down unit for 24 hours",
        "Cefazolin monotherapy fails to cover anaerobes, gram-negative rods, and MRSA, and lacks the protein synthesis inhibition of clindamycin needed to shut down streptococcal exotoxin production."
      ],
      [
        "Perform bedside needle aspiration of the hemorrhagic bullae and withhold antibiotics until Gram stain results are finalized",
        "Fluid aspiration of superficial bullae does not evaluate deep fascial necrosis and delaying antibiotics in septic shock with lactate 5.8 mmol/L dramatically increases mortality."
      ],
      [
        "Initiate outpatient oral amoxicillin-clavulanate 875 mg twice daily and apply warm compresses to the lower extremity",
        "Oral antibiotics are completely ineffective for necrotizing soft tissue infections in septic shock; immediate ICU admission, resuscitation, and emergent surgical fasciotomy are required."
      ]
    ],
    "rationale": "Necrotizing fasciitis presents with severe pain out of proportion to exam findings, rapid progression, bullae, crepitus, and septic shock (LRINEC score >= 6). Emergent surgical exploration and debridement is the most important life-saving intervention (imaging should not delay surgery). Broad-spectrum antibiotics (vancomycin + pip-tazo) must be combined with intravenous clindamycin, which inhibits the bacterial 50S ribosome to suppress streptococcal pyrogenic exotoxin synthesis and overcome the 'Eagle effect' (beta-lactam ineffectiveness in high bacterial burdens).",
    "metadata": {
      "shortSolution": "Severe pain out of proportion, bullae, crepitus, and septic shock indicates necrotizing fasciitis; requires immediate emergent surgical debridement plus IV vancomycin, pip-tazo, and clindamycin (antitoxin effect).",
      "competingChoice": "Obtain emergent contrast-enhanced MRI of the lower extremity to definitively delineate fascial planes before summoning a surgical consult",
      "exclusionFinding": "Imaging must never delay emergent surgical exploration in suspected necrotizing fasciitis; delay of hours leads to fatal septic shock.",
      "pedagogicalValue": "Recognizing necrotizing fasciitis (pain out of proportion, high LRINEC score) and knowing that immediate surgery is paramount, with clindamycin added for its exotoxin-suppressing mechanism.",
      "citations": [
        "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422.",
        "Wong CH, Khin LW, Heng KS, et al. The LRINEC (Laboratory Risk Indicator for Necrotizing Fasciitis) score: a tool for distinguishing necrotizing fasciitis from other soft tissue infections. Crit Care Med. 2004;32(7):1535-1541. PMID: 15241098."
      ]
    },
    "critique": {
      "shortestValidSolution": "Pain out of proportion + bullae + crepitus -> emergent surgical exploration/debridement + IV vancomycin + pip-tazo + clindamycin (antitoxin).",
      "strongestCompetitor": "Obtain emergent contrast-enhanced MRI of the lower extremity to definitively delineate fascial planes before summoning a surgical consult",
      "exclusionFinding": "MRI delays emergent surgical debridement; necrotizing fasciitis is a clinical surgical emergency.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0493",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Staphylococcal Toxic Shock Syndrome (TSS)",
    "subtopic": "Superantigen TSST-1, Erythroderma with Desquamation, Clindamycin Antitoxin Role",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old previously healthy woman presents to the emergency department with sudden high fever, chills, vomiting, profuse watery diarrhea, severe muscle aches, and lightheadedness that began 12 hours ago. She is currently on day 3 of her menstrual cycle and has been utilizing high-absorbency intravaginal tampons. Physical examination reveals an acutely ill, confused, and somnolent woman. Vital signs demonstrate blood pressure of 82/46 mm Hg, heart rate of 136/min, respiratory rate of 24/min, and temperature of 39.6 C (103.3 F). Physical examination reveals a diffuse, blanching, macular erythematous rash resembling a severe sunburn that involves the face, neck, trunk, and extremities, prominently including the palms and soles. Bilateral conjunctival injection and strawberry red tongue with prominent papillae are present. Pelvic examination reveals a retained, foul-smelling vaginal tampon, which is immediately removed, and hyperemic vaginal mucosa without adnexal masses. Laboratory evaluation reveals:\n- Platelet count: 72,000/mm3\n- Serum creatinine: 2.1 mg/dL\n- Total bilirubin: 2.8 mg/dL\n- Serum creatine kinase (CK): 1,850 U/L\n- Blood cultures drawn at admission show no growth at 24 hours\n\nIn addition to aggressive intravenous crystalloid resuscitation, which of the following represents the most appropriate antimicrobial regimen for this patient?",
    "choices": [
      [
        "Intravenous clindamycin PLUS intravenous vancomycin (or cefazolin if methicillin-susceptible)",
        "Staphylococcal Toxic Shock Syndrome (TSS) is an acute, life-threatening toxin-mediated illness caused by strains of Staphylococcus aureus producing Toxic Shock Syndrome Toxin-1 (TSST-1) or enterotoxins. (1) PATHOPHYSIOLOGY OF SUPERANTIGENS: TSST-1 functions as a potent SUPERANTIGEN: it bypasses normal antigen processing by directly cross-linking the invariant beta-chain of the T-cell receptor (TCR) to the alpha-chain of MHC class II molecules on antigen-presenting cells outside the antigen-binding groove. This leads to non-specific, polyclonal activation of up to 20% to 30% of all circulating T cells (compared to 0.01% in normal antigen presentation), triggering a catastrophic surge of pro-inflammatory cytokines (TNF-alpha, IL-1, IL-2, interferon-gamma) causing capillary leak, diffuse vasodilation, refractory shock, and multiorgan failure. (2) DIAGNOSTIC CRITERIA (CDC): (a) Fever (temp >= 38.9 C); (b) Hypotension (systolic BP < 90 mm Hg); (c) Diffuse macular erythroderma; (d) Desquamation 1 to 2 weeks after illness onset (predominantly on palms and soles); and (e) Multisystem involvement of >= 3 organ systems (GI, muscular, renal, hepatic, hematologic, CNS). Note: Blood cultures are characteristically NEGATIVE in staphylococcal TSS (< 5% positive) because the disease is driven by localized mucosal toxin production, not bacteremia. (3) MANAGEMENT: (a) Immediate removal of the source (tampon, nasal packing, abscess drainage); (b) Aggressive IV crystalloid resuscitation; (c) ANTIMICROBIAL REGIMEN: Intravenous CLINDAMYCIN (ribosomal 50S protein synthesis inhibitor that suppresses TSST-1 transcription and toxin synthesis) COMBINED WITH an anti-staphylococcal agent (VANCOMYCIN for MRSA coverage, or CEFAZOLIN/OXACILLIN for MSSA)."
      ],
      [
        "Intravenous ceftriaxone 2 g daily monotherapy",
        "Ceftriaxone does not cover MRSA, lacks activity against staphylococcal superantigen production, and does not provide ribosomal protein synthesis suppression; clindamycin is mandatory."
      ],
      [
        "Oral doxycycline 100 mg twice daily as standalone outpatient therapy",
        "TSS is a medical emergency with refractory septic shock and multiorgan failure; outpatient oral therapy is catastrophic and ineffective."
      ],
      [
        "Intravenous immunoglobulin (IVIG) as standalone monotherapy without antibiotics or fluid resuscitation",
        "While IVIG can be considered an adjunctive rescue therapy to neutralize superantigens in refractory shock, it does not replace fluid resuscitation, source removal, or antimicrobial therapy."
      ],
      [
        "High-dose intravenous methylprednisolone 1,000 mg daily with no antimicrobial agents",
        "Corticosteroids do not eradicate Staph aureus or suppress ongoing toxin production from a retained nidus; fluid resuscitation and clindamycin-based antibiotics are the primary therapy."
      ]
    ],
    "rationale": "Toxic Shock Syndrome (TSS) is triggered by S. aureus TSST-1 superantigen, which cross-links TCR and MHC class II, activating up to 20% of T cells and causing massive cytokine release. Signs: fever, hypotension, diffuse sunburn erythroderma (involving palms/soles, which later desquamate), and multiorgan dysfunction; blood cultures are typically negative. Treatment requires source removal (tampon), aggressive fluid resuscitation, and IV clindamycin (which blocks ribosomal protein synthesis to shut down TSST-1 toxin production) plus vancomycin/cefazolin.",
    "metadata": {
      "shortSolution": "Menstruating female with retained tampon, fever, hypotension, sunburn rash on palms/soles, and multiorgan failure has Staphylococcal TSS; treat with tampon removal, fluids, and IV clindamycin (antitoxin) plus vancomycin.",
      "competingChoice": "Intravenous ceftriaxone 2 g daily monotherapy",
      "exclusionFinding": "Ceftriaxone does not cover MRSA and lacks ribosomal protein synthesis suppression; clindamycin is specifically required to halt TSST-1 superantigen production.",
      "pedagogicalValue": "Mastering the mechanism of superantigens (cross-linking TCR to MHC II) and the mandatory role of clindamycin to halt toxin synthesis in Toxic Shock Syndrome.",
      "citations": [
        "Lowy FD. Staphylococcus aureus infections. N Engl J Med. 1998;339(8):520-532. PMID: 9709046.",
        "Schlievert PM, Davis CC. Device-associated toxic shock syndrome. Clin Microbiol Rev. 2020;33(3):e00032-19. PMID: 32376664."
      ]
    },
    "critique": {
      "shortestValidSolution": "Tampon + sunburn rash on palms/soles + shock -> Staph TSS treated with tampon removal + fluids + IV clindamycin (antitoxin) + vancomycin.",
      "strongestCompetitor": "Intravenous ceftriaxone 2 g daily monotherapy",
      "exclusionFinding": "Ceftriaxone lacks toxin suppression; clindamycin is required to inhibit bacterial protein synthesis of TSST-1.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0494",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Infectious Disease",
    "topic": "Cat Scratch Disease (Bartonella henselae)",
    "subtopic": "Primary Inoculation Papule, Regional Subacute Lymphadenopathy, Azithromycin Course",
    "provisionalDifficulty": 4,
    "stem": "A 10-year-old boy is brought to the pediatric outpatient clinic by his mother because of a swollen, tender lump under his left armpit that has been growing over the past 2 weeks. He also reports mild low-grade fever and malaise. The mother mentions that the family adopted an energetic 8-week-old kitten 4 weeks ago that frequently scratches the boy during play. Physical examination reveals an active child in no distress. Vital signs show temperature of 38.0 C (100.4 F), heart rate of 88/min, and blood pressure of 104/64 mm Hg. Examination of the left axilla reveals a 3.5-cm, solitary, firm, tender, movable lymph node with overlying faint erythema and warmth, without fluctuance. On the left dorsal forearm, there is a non-tender, 4-mm, crusted erythematous papule at the site of a prior scratch. The remainder of the physical examination, including the spleen, liver, and other lymph node basins, is normal. Complete blood count shows mild leukocytosis (WBC 11,200/mm3) with normal differential. Serum enzyme immunoassay (EIA) for Bartonella henselae IgM and IgG is positive.\n\nWhich of the following represents the most appropriate management approach for this patient?",
    "choices": [
      [
        "Oral azithromycin (10 mg/kg on day 1, followed by 5 mg/kg once daily on days 2 through 5) to accelerate lymph node regression",
        "Cat Scratch Disease (CSD) is caused by Bartonella henselae, a fastidious, pleomorphic, facultative intracellular gram-negative rod transmitted primarily via the scratch or bite of young domestic kittens (which harbor the flea vector Ctenocephalides felis). (1) CLINICAL COURSE: (a) Primary inoculation lesion: A small (2-5 mm), non-tender, non-pruritic erythematous papule or pustule develops at the scratch site within 3 to 10 days; (b) Regional lymphadenopathy: Develops 1 to 3 weeks later in the lymphatic basin draining the inoculation site (most commonly axillary, epitrochlear, or cervical). Nodes are typically large (1-5 cm), tender, and firm, occasionally suppurating (10-15%). Systemic signs (fever, malaise, headache) are mild. (2) DIAGNOSIS: Serology (Bartonella henselae indirect immunofluorescence or EIA) has high specificity; PCR can confirm atypical disease. (3) PHARMACOTHERAPY (AAP RED BOOK / IDSA GUIDELINES): While mild CSD is self-limited and resolves spontaneously over 2 to 4 months in immunocompetent hosts, a double-blind randomized placebo-controlled trial demonstrated that a 5-DAY COURSE OF ORAL AZITHROMYCIN (10 mg/kg day 1, then 5 mg/kg days 2-5) significantly accelerates the reduction of lymph node volume by > 80% within the first 30 days and shortens the duration of symptoms. Azithromycin is the treatment of choice for typical CSD. (4) CONTRAINDICATION TO SURGICAL EXCISION/INCISION: Incision and drainage of non-fluctuant lymph nodes is strictly avoided because it causes chronic draining sinus tracts and cosmetic scarring; needle aspiration is indicated only if the node becomes tense and painful with frank suppuration."
      ],
      [
        "Immediate surgical incision and drainage of the left axillary lymph node in the minor procedure suite",
        "Incision and drainage of cat scratch lymphadenopathy is strictly contraindicated because it causes intractable chronic sinus tract formation and scarring; needle aspiration is preferred only if fluctuant."
      ],
      [
        "Oral amoxicillin 500 mg three times daily for 14 days",
        "Amoxicillin has zero clinical efficacy against Bartonella henselae; azithromycin is the drug of choice proven to accelerate node resolution."
      ],
      [
        "Immediate complete surgical axillary lymph node dissection to rule out Hodgkin lymphoma",
        "History of kitten scratch, primary inoculation papule, and positive Bartonella serology definitively establish cat scratch disease; invasive surgical lymphadenectomy is unnecessary and causes lymphedema."
      ],
      [
        "Intravenous vancomycin and ceftriaxone for 21 days for presumed acute bacterial lymphadenitis",
        "Acute pyogenic lymphadenitis (Staph/Strep) presents acutely over 24-48 hours with high fever and cellulitis, unlike the subacute, indolent 2-week course of cat scratch disease with a primary papule."
      ]
    ],
    "rationale": "Cat scratch disease (Bartonella henselae) presents with a primary inoculation papule at the scratch site followed 1-3 weeks later by regional subacute lymphadenopathy. Serology confirms the diagnosis. While self-limited in immunocompetent patients, randomized trials prove that a 5-day course of oral azithromycin significantly accelerates lymph node volume reduction and symptom resolution. Incision and drainage is contraindicated due to sinus tract formation.",
    "metadata": {
      "shortSolution": "Child with kitten scratch, forearm papule, and subacute axillary lymphadenopathy has Cat Scratch Disease (Bartonella henselae); treated with a 5-day course of oral azithromycin.",
      "competingChoice": "Immediate surgical incision and drainage of the left axillary lymph node in the minor procedure suite",
      "exclusionFinding": "Incision and drainage of Bartonella lymph nodes causes chronic draining sinus tracts; azithromycin pharmacotherapy is standard.",
      "pedagogicalValue": "Recognizing the presentation of Cat Scratch Disease (inoculation papule, subacute regional lymphadenopathy) and knowing that oral azithromycin accelerates node regression.",
      "citations": [
        "Bass JW, Vincent JM, Person DA. The expanding spectrum of Bartonella infections: II. Cat-scratch disease. Pediatr Infect Dis J. 1997;16(2):163-179. PMID: 9041631.",
        "Klotz SA, Ianas V, Elliott SP. Cat-scratch disease. Am Fam Physician. 2011;83(2):152-155. PMID: 21250824."
      ]
    },
    "critique": {
      "shortestValidSolution": "Kitten scratch + primary papule + axillary lymphadenopathy -> Cat scratch disease treated with oral azithromycin (5 days).",
      "strongestCompetitor": "Immediate surgical incision and drainage of the left axillary lymph node in the minor procedure suite",
      "exclusionFinding": "Incision and drainage produces chronic sinus tracts; medical treatment with azithromycin is preferred.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0495",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "Infectious Disease",
    "topic": "Animal Bite Wound Management (Cat Bite)",
    "subtopic": "Pasteurella multocida, Deep Puncture Wound, Amoxicillin-Clavulanate, Avoidance of Primary Closure",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old woman presents to the urgent care clinic 6 hours after being bitten on the dorsum of her right hand by her domestic house cat while attempting to place the cat into a travel carrier. Physical examination reveals two deep, narrow puncture wounds over the third metacarpophalangeal joint with surrounding mild erythema and tenderness. Range of motion of all fingers is fully preserved without pain on passive extension of the digits, and there is no tenderness along the flexor tendon sheaths (absence of Kanavel cardinal signs). Neurovascular examination is intact. Vital signs are normal, and her last tetanus booster was 3 years ago.\n\nWhich of the following represents the most appropriate wound care and antimicrobial management strategy for this patient?",
    "choices": [
      [
        "Perform copious wound irrigation with isotonic saline, leave the puncture wounds open to heal by secondary intention (avoiding primary suture closure), and initiate a 3- to 5-day prophylactic course of oral amoxicillin-clavulanate",
        "Animal bite wound management requires understanding species-specific anatomy and microbiology: (1) MICROBIOLOGY OF CAT BITES: Cat mouths harbor virulent oral commensals, predominantly PASTEURELLA MULTOCIDA (a small, facultative anaerobic, encapsulated gram-negative coccobacillus present in > 90% of cat bites), along with Streptococcus species, Staphylococcus aureus, and oral anaerobes (Fusobacterium, Bacteroides). Pasteurella produces a rapid-onset, intensely inflammatory, destructive cellulitis typically developing within 12 to 24 hours of injury, with a high propensity to cause tenosynovitis, septic arthritis, and osteomyelitis. (2) ANATOMY OF CAT BITES: Domestic cats possess long, slender, extremely sharp canine teeth that act as natural hypodermic needles, inoculating bacteria deep into poorly vascularized avascular structures (periosteum, joint capsule, tendon sheaths), particularly on the dorsum of the hand where tendons lie superficial. (3) WOUND CLOSURE RULES: Cat puncture wounds and wounds on the hands or feet MUST NEVER BE CLOSED PRIMARILY with sutures. Suturing traps virulent inoculated bacteria within deep anaerobic tissue planes, exponentially increasing the risk of compartment syndrome, tenosynovitis, and necrotizing infection. Wounds should be thoroughly cleansed, irrigated copiously with saline, and LEFT OPEN TO HEAL BY SECONDARY INTENTION. (4) ANTIMICROBIAL PROPHYLAXIS: High-risk bite wounds (all cat bites, hand bites, puncture wounds) require prophylactic antibiotics. ORAL AMOXICILLIN-CLAVULANATE (875/125 mg twice daily for 3-5 days) is the FIRST-LINE REGIMEN OF CHOICE because the aminopenicillin provides potent bactericidal coverage against Pasteurella multocida while the clavulanate beta-lactamase inhibitor covers beta-lactamase-producing Staph aureus and anaerobes. (Note: Cephalexin, erythromycin, and clindamycin have POOR activity against Pasteurella multocida and must NEVER be used as monotherapy)."
      ],
      [
        "Irrigate copiously, immediately close the puncture wounds primarily with interrupted nylon sutures, and prescribe oral cephalexin 500 mg four times daily",
        "Suturing cat bites traps bacteria in deep tissue spaces causing tenosynovitis, and cephalexin has notoriously poor activity against Pasteurella multocida, leading to rapid treatment failure."
      ],
      [
        "Perform immediate surgical debridement of the metacarpophalangeal joint capsule in the operating room and administer intravenous vancomycin monotherapy",
        "In the absence of active tenosynovitis or joint involvement, operative debridement is overly invasive; oral amoxicillin-clavulanate prophylaxis and copious irrigation are adequate."
      ],
      [
        "Prescribe oral clindamycin 300 mg three times daily as first-line monotherapy, and apply a tight compressive bandage",
        "Clindamycin lacks adequate activity against Pasteurella multocida; amoxicillin-clavulanate is the first-line antibiotic of choice for animal bites."
      ],
      [
        "Irrigate the wound, withhold all antibiotics, and instruct the patient to return only if erythema or purulent drainage appears",
        "Cat bite puncture wounds carry a high infection rate (> 50-80%); guidelines universally mandate antimicrobial prophylaxis with amoxicillin-clavulanate for all cat bites."
      ]
    ],
    "rationale": "Cat bites inoculate Pasteurella multocida into deep tissues via sharp canine teeth, rapidly causing destructive cellulitis and tenosynovitis. Management requires: (1) Copious irrigation, (2) Leaving puncture wounds open to heal by secondary intention (primary closure is contraindicated because it traps bacteria), and (3) Prophylactic oral amoxicillin-clavulanate for 3-5 days (covers Pasteurella, Staph, Strep, and anaerobes). Cephalexin and clindamycin lack reliable Pasteurella coverage.",
    "metadata": {
      "shortSolution": "Cat bite puncture wound to hand requires copious irrigation, leaving wound open (no sutures), and oral amoxicillin-clavulanate to cover Pasteurella multocida.",
      "competingChoice": "Irrigate copiously, immediately close the puncture wounds primarily with interrupted nylon sutures, and prescribe oral cephalexin 500 mg four times daily",
      "exclusionFinding": "Primary suturing traps deep pathogens, and cephalexin has poor in vitro activity against Pasteurella multocida; wounds must be left open and treated with amoxicillin-clavulanate.",
      "pedagogicalValue": "Mastering animal bite management: avoiding primary closure of puncture wounds, recognizing Pasteurella multocida, and choosing amoxicillin-clavulanate over cephalexin.",
      "citations": [
        "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422.",
        "Bula-Rudas FJ, Olcott JL. Human and Animal Bites. Pediatr Rev. 2018;39(10):490-500. PMID: 30275032."
      ]
    },
    "critique": {
      "shortestValidSolution": "Cat bite puncture -> copious irrigation + leave wound open (no sutures) + oral amoxicillin-clavulanate (Pasteurella coverage).",
      "strongestCompetitor": "Irrigate copiously, immediately close the puncture wounds primarily with interrupted nylon sutures, and prescribe oral cephalexin 500 mg four times daily",
      "exclusionFinding": "Suturing traps bacteria in deep hand spaces; cephalexin lacks Pasteurella activity.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0496",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Nervous System",
    "topic": "Herpes Simplex Virus (HSV-1) Encephalitis",
    "subtopic": "Temporal Lobe Predilection, CSF Hemorrhagic Pleocytosis, Immediate Intravenous Acyclovir",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old previously healthy woman is brought to the emergency department by her husband due to a 3-day history of acute personality change, bizarre behavior, fever, and progressive confusion. Her husband states she became disoriented, began smelling an intense, foul, burning odor that was not present (olfactory hallucinations), and had a 2-minute episode of unresponsiveness with repetitive lip-smacking and right arm jerking. On physical examination, she is lethargic, disoriented to time and place, and exhibits fluent but nonsensical speech with frequent paraphasic errors (receptive aphasia). Cranial nerves are intact, and motor strength is 5/5 throughout without focal weakness. Neck flexion reveals mild nuchal rigidity. Vital signs show blood pressure of 134/82 mm Hg, heart rate of 94/min, respiratory rate of 18/min, and temperature of 38.9 C (102.0 F). Brain MRI reveals asymmetric hyperintensity and swelling restricted to the medial temporal and inferior frontal lobes on T2-weighted and FLAIR sequences, with patchy cortical petechial hemorrhage. Lumbar puncture demonstrates an opening pressure of 210 mm H2O. Cerebrospinal fluid analysis shows:\n- White blood cell count: 180/mm3 (88% lymphocytes)\n- Red blood cell count: 420/mm3 (elevated in tube 1 and tube 4)\n- Protein: 92 mg/dL\n- Glucose: 64 mg/dL (serum glucose 108 mg/dL)\n- Gram stain: Negative for bacteria\n\nWhich of the following represents the most appropriate immediate medical intervention for this patient?",
    "choices": [
      [
        "Immediate initiation of intravenous acyclovir (10 mg/kg every 8 hours) while awaiting cerebrospinal fluid HSV polymerase chain reaction (PCR) results",
        "Herpes Simplex Virus-1 (HSV-1) Encephalitis is the most common cause of fatal sporadic viral encephalitis in immunocompetent adults, resulting from retrograde transmission of reactivated virus along the olfactory or trigeminal nerve pathways to the frontal and temporal lobes. (1) CLINICAL AND RADIOLOGICAL HALLMARKS: Acute onset of fever, headache, altered mental status, focal seizures (often temporal lobe seizures with olfactory hallucinations or automatisms like lip smacking), and focal neurocognitive deficits (aphasia, memory loss). Brain MRI characteristically reveals asymmetric T2/FLAIR hyperintensity and edema involving the INFERIOR FRONTAL AND MEDIAL TEMPORAL LOBES, often accompanied by microhemorrhages. (2) CSF FINDINGS: Lymphocytic pleocytosis (typically 50-500 WBC/mm3), elevated protein, normal or mildly decreased glucose, and CHARACTERISTICALLY ELEVATED RED BLOOD CELLS (hemorrhagic lymphocytic pleocytosis) reflecting necrotizing viral angiitis. (3) DIAGNOSTIC TESTING: Cerebrospinal fluid HSV Polymerase Chain Reaction (PCR) is the diagnostic test of choice with > 95% sensitivity and specificity; however, viral PCR can be falsely negative in the first 24 to 48 hours of infection. (4) TIME-CRITICAL EMPIRIC THERAPY: Untreated HSV encephalitis carries a catastrophic mortality exceeding 70%, and survivors suffer devastating permanent cognitive and memory impairment. IMMEDIATE INTRAVENOUS ACYCLOVIR (10 mg/kg IV q8h for 14-21 days) MUST BE INITIATED EMPIRICALLY AS SOON AS HSV ENCEPHALITIS IS SUSPECTED, BEFORE awaiting PCR confirmation. If initial PCR is negative within the first 48 hours but suspicion remains high, acyclovir should be continued and lumbar puncture repeated in 3 to 7 days."
      ],
      [
        "Withhold antiviral therapy until cerebrospinal fluid HSV PCR amplification definitively confirms viral DNA",
        "Delaying acyclovir to await PCR results carries catastrophic mortality and severe irreversible neurological destruction; empiric acyclovir must be started immediately."
      ],
      [
        "Administer intravenous ganciclovir 5 mg/kg every 12 hours for presumed cytomegalovirus encephalitis",
        "Ganciclovir is used for CMV (which presents in severely immunocompromised AIDS patients with CD4 < 50), whereas HSV-1 is the predominant cause in immunocompetent adults and responds selectively to acyclovir."
      ],
      [
        "Administer oral valacyclovir 1 g three times daily as outpatient therapy and arrange follow-up in 48 hours",
        "Oral antivirals achieve insufficient cerebrospinal fluid concentrations for necrotizing central nervous system infection; high-dose parenteral intravenous acyclovir in an inpatient setting is mandatory."
      ],
      [
        "Initiate intravenous vancomycin, ampicillin, and ceftriaxone monotherapy with no antiviral coverage",
        "CSF showing lymphocytic pleocytosis with elevated RBCs and temporal lobe MRI lesions strongly indicates HSV encephalitis; omitting acyclovir leads to fatal viral necrosis."
      ]
    ],
    "rationale": "HSV-1 encephalitis causes acute fever, focal temporal lobe seizures (olfactory hallucinations, lip-smacking), aphasia, and asymmetric temporal/frontal lobe hyperintensity on MRI. CSF shows lymphocytic pleocytosis with elevated RBCs (necrotizing encephalitis). CSF HSV PCR is the gold standard diagnostic test, but immediate empiric IV acyclovir (10 mg/kg q8h) must be started immediately without waiting for PCR results, as early treatment reduces mortality from 70% to < 20%.",
    "metadata": {
      "shortSolution": "Temporal lobe seizures, aphasia, hemorrhagic lymphocytic CSF, and temporal MRI lesions is HSV encephalitis; initiate immediate empiric IV acyclovir while awaiting CSF PCR.",
      "competingChoice": "Withhold antiviral therapy until cerebrospinal fluid HSV PCR amplification definitively confirms viral DNA",
      "exclusionFinding": "Withholding acyclovir while awaiting PCR causes severe permanent brain damage and death; immediate empiric therapy is mandatory.",
      "pedagogicalValue": "Recognizing the clinical/radiological features of HSV encephalitis (temporal lobe localization, CSF RBCs) and knowing that immediate empiric IV acyclovir is mandatory.",
      "citations": [
        "Whitley RJ, Gnann JW. Viral encephalitis: familiar infections and emerging pathogens. Lancet. 2002;359(9305):507-513. PMID: 11853816.",
        "Tunkel AR, Glaser CA, Bloch KC, et al. The management of encephalitis: clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008;47(3):303-327. PMID: 18582201."
      ]
    },
    "critique": {
      "shortestValidSolution": "Temporal lobe seizures + aphasia + CSF RBCs/lymphocytes -> HSV encephalitis treated with immediate empiric IV acyclovir.",
      "strongestCompetitor": "Withhold antiviral therapy until cerebrospinal fluid HSV PCR amplification definitively confirms viral DNA",
      "exclusionFinding": "Awaiting PCR results delays life-saving therapy; empiric IV acyclovir must be started immediately.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0497",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Asymptomatic Bacteriuria Diagnostic Stewardship",
    "subtopic": "Restricted Screening Indications, Pregnancy, Urological Mucosal Bleeding",
    "provisionalDifficulty": 4,
    "stem": "An 81-year-old woman residing in a skilled nursing facility is seen for a routine medical review. She has a history of vascular dementia, osteoarthritis, and type 2 diabetes mellitus. She is fully ambulatory with a walker and reports feeling well. She has no fever, chills, dysuria, urinary frequency, urgency, suprapubic discomfort, or flank pain. Her chronic baseline cognitive impairment is unchanged. Vital signs are normal: blood pressure 128/78 mm Hg, heart rate 72/min, and temperature 36.8 C (98.2 F). Physical examination reveals a soft, non-tender abdomen without suprapubic fullness or costovertebral angle tenderness. As part of an annual institutional intake order set, a clean-catch urine specimen was collected. Urinalysis demonstrates:\n- Leukocyte esterase: Moderate\n- Nitrites: Positive\n- White blood cells: 25-30/high-power field\n- Red blood cells: 1-2/high-power field\n- Quantitative urine culture: > 100,000 colony-forming units/mL of pan-susceptible Escherichia coli\n\nAccording to current Infectious Diseases Society of America (IDSA) and US Preventive Services Task Force (USPSTF) guidelines, which of the following represents the most appropriate management approach for this patient?",
    "choices": [
      [
        "Withhold antimicrobial therapy and provide reassurance, as screening and treatment of asymptomatic bacteriuria are not indicated in this clinical setting",
        "Asymptomatic Bacteriuria (ASB) is defined as isolation of a specified quantitative count of bacteria (>= 100,000 CFU/mL of a single organism) in an appropriately collected urine specimen from an individual WITHOUT symptoms or signs attributable to a urinary tract infection (no dysuria, frequency, fever, suprapubic pain). (1) EPIDEMIOLOGY: ASB is exceedingly common, present in up to 20-50% of elderly institutionalized women, 100% of patients with long-term indwelling catheters, and 10-15% of diabetic individuals. (2) EVIDENCE-BASED STEWARDSHIP (IDSA GUIDELINES): Extensive randomized controlled trials have demonstrated that treating ASB in elderly individuals, catheterized patients, or diabetic patients DOES NOT reduce the incidence of symptomatic UTI, does not prevent bacteremia or renal failure, does not improve survival, and does not improve cognitive status or continence. Conversely, treating ASB significantly INCREASES adverse drug events, promotes colonization with multidrug-resistant pathogens (ESBL, CRE), and significantly increases the incidence of Clostridioides difficile colitis. (3) THE ONLY TWO CLEARLY DEFINED INDICATIONS FOR SCREENING AND TREATING ASB: (a) PREGNANT WOMEN: Screened at 12 to 16 weeks gestation; untreated ASB leads to acute pyelonephritis in 20-30% of pregnancies and increases risks of preterm labor, low birth weight, and perinatal mortality. (b) PATIENTS UNDERGOING ENDOSCOPIC UROLOGICAL PROCEDURES WITH ANTICIPATED MUCOSAL BLEEDING (e.g., transurethral resection of prostate [TURP]): Antibiotic treatment prevents procedure-induced bacteremia and septic shock. In all other populations, screening and treating ASB is STRONGLY DISCOURAGED."
      ],
      [
        "Initiate oral nitrofurantoin 100 mg twice daily for 5 days to eradicate bacteriuria and prevent urosepsis",
        "Treating asymptomatic bacteriuria in the elderly provides no clinical benefit, does not prevent urosepsis, and increases risks of Clostridioides difficile and multidrug-resistant superinfections."
      ],
      [
        "Initiate oral trimethoprim-sulfamethoxazole one double-strength tablet twice daily for 3 days",
        "Antimicrobial therapy is contraindicated in asymptomatic bacteriuria outside of pregnancy or urological surgery; pyuria (WBCs in urine) is a normal accompaniment of ASB and is not an indication for antibiotics."
      ],
      [
        "Insert an indwelling Foley catheter to ensure continuous bladder drainage and prevent urinary stasis",
        "Indwelling urinary catheters rapidly become colonized with bacterial biofilms and are the leading cause of catheter-associated UTIs and secondary bloodstream infections."
      ],
      [
        "Order a renal and bladder ultrasound to rule out obstructive uropathy before initiating antibiotics",
        "In an asymptomatic patient with normal renal function, imaging is unnecessary and represents low-value, wasteful care."
      ]
    ],
    "rationale": "Asymptomatic bacteriuria (>= 100,000 CFU/mL in an asymptomatic patient) is extremely common in elderly women. IDSA guidelines establish that screening and treating ASB does NOT reduce UTIs or mortality, but increases C. difficile infections and antimicrobial resistance. Pyuria is an expected finding in ASB and does not warrant treatment. The only two validated indications for screening and treating ASB are: (1) Pregnancy (prevents pyelonephritis and preterm birth), and (2) Urological procedures with anticipated mucosal bleeding (prevents procedural bacteremia).",
    "metadata": {
      "shortSolution": "Elderly asymptomatic female with positive urine culture (> 100k E. coli) has asymptomatic bacteriuria; IDSA guidelines mandate withholding antibiotics because treatment causes harm without clinical benefit.",
      "competingChoice": "Initiate oral nitrofurantoin 100 mg twice daily for 5 days to eradicate bacteriuria and prevent urosepsis",
      "exclusionFinding": "Treating ASB in the elderly does not prevent sepsis or symptomatic UTI, but increases C. diff and resistance; guidelines strictly recommend against treatment.",
      "pedagogicalValue": "Mastering antimicrobial stewardship in asymptomatic bacteriuria: pyuria does not equal UTI, and treatment is restricted strictly to pregnancy and mucosal urological procedures.",
      "citations": [
        "Nicolle LE, Gupta K, Bradley SF, et al. Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2019;68(10):e83-e110. PMID: 30895288.",
        "US Preventive Services Task Force. Screening for Asymptomatic Bacteriuria in Adults: US Preventive Services Task Force Recommendation Statement. JAMA. 2019;322(12):1188-1194. PMID: 31549140."
      ]
    },
    "critique": {
      "shortestValidSolution": "Asymptomatic bacteriuria in elderly woman -> withhold antibiotics (treatment restricted to pregnancy and urological surgery).",
      "strongestCompetitor": "Initiate oral nitrofurantoin 100 mg twice daily for 5 days to eradicate bacteriuria and prevent urosepsis",
      "exclusionFinding": "Treating ASB provides zero clinical benefit and increases C. diff and antibiotic resistance.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0498",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "Outpatient Community-Acquired Pneumonia (CAP) with Comorbidities",
    "subtopic": "Beta-Lactam plus Macrolide vs Respiratory Fluoroquinolone, CURB-65 Triage",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man presents to the primary care clinic with a 4-day history of worsening cough productive of thick rust-colored sputum, right-sided pleuritic chest pain, and subjective fevers. His medical history includes moderate chronic obstructive pulmonary disease (COPD) managed with an inhaled tiotropium and albuterol inhaler, and essential hypertension managed with amlodipine. He has not received antibiotics in the past 6 months. Physical examination reveals an alert, cooperative man in mild respiratory discomfort. Vital signs show blood pressure of 132/78 mm Hg, heart rate of 92/min, respiratory rate of 20/min, temperature of 38.4 C (101.1 F), and oxygen saturation of 94% on ambient room air. Chest examination reveals dullness to percussion and bronchial breath sounds with inspiratory crackles over the right lower lung base. Blood urea nitrogen is 14 mg/dL. He is fully oriented (confusion absent). His calculated CURB-65 score is 0. A two-view chest radiograph reveals a distinct alveolar consolidation in the right lower lobe, confirming community-acquired pneumonia.\n\nAccording to American Thoracic Society (ATS) and Infectious Diseases Society of America (IDSA) guidelines, which of the following represents the most appropriate outpatient antimicrobial regimen for this patient?",
    "choices": [
      [
        "Oral amoxicillin-clavulanate (875/125 mg twice daily) PLUS oral azithromycin (500 mg on day 1, then 250 mg daily for 4 days), OR oral levofloxacin (750 mg daily) monotherapy",
        "Community-Acquired Pneumonia (CAP) treatment is guided by clinical site of care triage and patient comorbidity status. (1) SITE-OF-CARE TRIAGE (CURB-65 SCORE): (a) Confusion = 1 pt; (b) Urea (BUN > 19 mg/dL) = 1 pt; (c) Respiratory rate >= 30/min = 1 pt; (d) Blood pressure (SBP < 90 or DBP <= 60 mm Hg) = 1 pt; (e) Age >= 65 years = 1 pt. With a CURB-65 score of 0, outpatient management is clinically appropriate. (2) PATIENT STRATIFICATION AND EMPIRIC REGIMENS (ATS/IDSA GUIDELINES): (a) Healthy outpatients WITHOUT comorbidities (no chronic heart, lung, liver, or renal disease, diabetes, or immunosuppression): Monotherapy with oral AMOXICILLIN (1 g TID), DOXYCYCLINE (100 mg BID), or a macrolide (if local pneumococcal macrolide resistance is < 25%). (b) Outpatients WITH chronic comorbidities (such as COPD, heart failure, diabetes, alcoholism, chronic kidney disease): Patients with comorbidities have higher risks of infection with beta-lactamase-producing organisms (Haemophilus influenzae, Moraxella catarrhalis), gram-negative enteric bacilli, and macrolide-resistant Streptococcus pneumoniae. Therefore, guidelines MANDATE: (1) COMBINATION THERAPY: An oral beta-lactam with enhanced coverage (high-dose amoxicillin-clavulanate 875/125 mg BID or cefpodoxime/cefuroxime) PLUS an agent covering atypicals (oral AZITHROMYCIN, clarithromycin, or DOXYCYCLINE); OR (2) RESPIRATORY FLUOROQUINOLONE MONOTHERAPY: Oral LEVOFLOXACIN (750 mg daily) or MOXIFLOXACIN (400 mg daily)."
      ],
      [
        "Oral amoxicillin 1,000 mg three times daily as standalone monotherapy",
        "Amoxicillin monotherapy is reserved strictly for healthy outpatients without comorbidities; patients with COPD require broader coverage covering beta-lactamase-producing H. influenzae and atypicals."
      ],
      [
        "Oral azithromycin 500 mg day 1 followed by 250 mg daily on days 2 through 5 as standalone monotherapy",
        "Macrolide monotherapy is inadequate in patients with comorbidities and carries high failure rates due to widespread (> 30%) Streptococcus pneumoniae macrolide resistance."
      ],
      [
        "Immediate hospital admission to the intensive care unit for intravenous vancomycin and piperacillin-tazobactam",
        "CURB-65 score is 0 and oxygen saturation is 94%; ICU admission and broad-spectrum anti-MRSA/antipseudomonal therapy represent massive overtreatment."
      ],
      [
        "Oral ciprofloxacin 500 mg twice daily as standalone respiratory monotherapy",
        "Ciprofloxacin is not a 'respiratory' fluoroquinolone; it has poor activity against Streptococcus pneumoniae and should never be used to treat community-acquired pneumonia."
      ]
    ],
    "rationale": "In outpatient CAP, patients with chronic comorbidities (COPD, diabetes, heart failure, renal disease) require broader empiric coverage than healthy patients. ATS/IDSA guidelines recommend either: (1) Combination therapy with an oral beta-lactam (amoxicillin-clavulanate or cefpodoxime) PLUS a macrolide (azithromycin) or doxycycline (to cover S. pneumoniae, H. influenzae, M. catarrhalis, and atypicals); OR (2) Monotherapy with a respiratory fluoroquinolone (levofloxacin or moxifloxacin). Amoxicillin or macrolide monotherapy is inadequate in comorbidities.",
    "metadata": {
      "shortSolution": "Outpatient CAP in patient with COPD (CURB-65 = 0) requires combination therapy (amoxicillin-clavulanate + azithromycin) or respiratory fluoroquinolone (levofloxacin) monotherapy.",
      "competingChoice": "Oral amoxicillin 1,000 mg three times daily as standalone monotherapy",
      "exclusionFinding": "Amoxicillin monotherapy is approved only for healthy outpatients without comorbidities; COPD patients require expanded coverage for beta-lactamase producers and atypicals.",
      "pedagogicalValue": "Stratifying outpatient CAP treatment: healthy patients receive amoxicillin/doxycycline, while patients with comorbidities (COPD) require beta-lactam + macrolide or respiratory fluoroquinolone.",
      "citations": [
        "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019;200(7):e45-e67. PMID: 31573350.",
        "Lim WS, Baudouin SV, George RC, et al. BTS guidelines for the management of community acquired pneumonia in adults: update 2009. Thorax. 2009;64 Suppl 3:iii1-iii55. PMID: 19783532."
      ]
    },
    "critique": {
      "shortestValidSolution": "Outpatient CAP + COPD (comorbidity) -> amoxicillin-clavulanate + azithromycin OR levofloxacin monotherapy.",
      "strongestCompetitor": "Oral amoxicillin 1,000 mg three times daily as standalone monotherapy",
      "exclusionFinding": "Amoxicillin monotherapy is restricted to healthy patients; COPD requires combination therapy or respiratory fluoroquinolone.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0499",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Superficial Diagnostic Association of Mononucleosis",
    "subtopic": "Planted QA Rejection Example - Unacceptable Direct Recall and Recognition Giveaway",
    "provisionalDifficulty": 2,
    "stem": "A 19-year-old college student presents to the student health center with a 5-day history of fatigue, sore throat, and swollen glands in his neck. Physical examination demonstrates exudative tonsillitis and posterior cervical lymphadenopathy. A rapid heterophile antibody latex agglutination test is positive, confirming the diagnosis of infectious mononucleosis caused by Epstein-Barr virus.\n\nWhich of the following viruses is the causative agent of this patient's infectious mononucleosis?",
    "choices": [
      [
        "Epstein-Barr virus (Human herpesvirus 4)",
        "The question explicitly stated that the patient has infectious mononucleosis caused by Epstein-Barr virus in the vignette stem, making this choice an immediate lexical giveaway that tests zero clinical inference."
      ],
      [
        "Cytomegalovirus (Human herpesvirus 5)",
        "Cytomegalovirus causes a heterophile-negative mononucleosis-like syndrome, but the stem gave away the diagnosis directly."
      ],
      [
        "Herpes simplex virus type 1",
        "Herpes simplex virus type 1 causes gingivostomatitis, herpes labialis, and temporal lobe encephalitis."
      ],
      [
        "Varicella-zoster virus (Human herpesvirus 3)",
        "Varicella-zoster virus causes chickenpox upon primary infection and herpes zoster upon reactivation."
      ],
      [
        "Human herpesvirus 8 (Kaposi sarcoma herpesvirus)",
        "Human herpesvirus 8 is the oncogenic cause of Kaposi sarcoma, primary effusion lymphoma, and multicentric Castleman disease."
      ]
    ],
    "rationale": "PLANTED QA REJECTION ITEM: This candidate item exhibits an unacceptable direct giveaway in the clinical vignette (the stem directly reveals 'confirming the diagnosis of infectious mononucleosis caused by Epstein-Barr virus') and tests a trivial 1-step factual association ('Which of the following viruses is the causative agent...'). It requires zero clinical reasoning, raw lab interpretation, or differential diagnosis. It violates the core mandate for difficulty, multi-step inference, and distractor plausibility.",
    "metadata": {
      "shortSolution": "Direct lexical recall giveaway in stem resolves the question trivially.",
      "competingChoice": "Cytomegalovirus (Human herpesvirus 5)",
      "exclusionFinding": "Stem directly states Epstein-Barr virus.",
      "pedagogicalValue": "Planted QA Rejection Example to test quality screening pipelines.",
      "citations": [
        "Centers for Disease Control and Prevention. Epstein-Barr Virus and Infectious Mononucleosis Laboratory Testing. CDC Guidelines 2020. NLM ID: 101680789."
      ]
    },
    "critique": {
      "shortestValidSolution": "Stem gives away the answer in the text ('caused by Epstein-Barr virus'). Trivial recall bypasses all reasoning.",
      "strongestCompetitor": "Cytomegalovirus (Human herpesvirus 5)",
      "exclusionFinding": "Answer was revealed verbatim in the vignette stem.",
      "verdict": "REJECT"
    }
  },
  {
    "code": "op-c-s2-0500",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Duration of Antibiotic Therapy for Uncomplicated Gram-Negative Bacteremia",
    "subtopic": "Unresolved Clinical Controversy - 7-Day vs 14-Day Treatment Duration in Enterobacterales Bacteremia",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old woman with a history of hypertension and uncomplicated recurrent cystitis is hospitalized with acute pyelonephritis and bacteremia. Initial blood cultures drawn at admission grow a pan-susceptible strain of Escherichia coli. She is treated with intravenous ceftriaxone 1 g daily. Over the next 48 hours, her fever completely defers, flank tenderness resolves, vital signs normalize, and she is eating comfortably. Repeat blood cultures drawn 48 hours after starting ceftriaxone confirm clearance of bacteremia with no growth at 5 days. Renal ultrasound shows normal kidneys without nephrolithiasis, perinephric abscess, or hydronephrosis. Today is hospital day 5; she is completely asymptomatic, afebrile, and eager to return home. The medical team discusses whether to transition her to oral step-down therapy with ciprofloxacin to complete a total antimicrobial duration of 7 days versus a traditional 14-day course.\n\nWhich of the following reflects the current state of clinical evidence and unresolved clinical debate regarding the duration of antibiotic therapy for uncomplicated Gram-negative bacteremia?",
    "choices": [
      [
        "Multiple randomized trials (e.g., Yahav et al. and the SHORTEN trial) demonstrate clinical non-inferiority of a 7-day course compared to a 14-day course in hemodynamically stable patients who achieve rapid clinical source control, but controversy persists regarding its safety in patients with immunosuppression, delayed defervescence, or high-virulence species",
        "The duration of antibiotic therapy for uncomplicated Gram-negative bloodstream infections (Enterobacterales bacteremia, most commonly originating from a urinary or biliary source) represents a major active clinical controversy and shifting paradigm in infectious diseases: (1) TRADITIONAL DOGMA (14 DAYS): Historically, guidelines and clinical practice mandated 14 consecutive days of antimicrobial therapy for all Gram-negative bacteremias based on observational studies and fear of relapse, metastatic seeding, or recurrent pyelonephritis. (2) RECENT RANDOMIZED CONTROLLED NON-INFERIORITY TRIALS (7 DAYS): Landmark multicenter randomized controlled trials (such as Yahav et al., Lancet Infect Dis 2019; the Italian bacteremia trial, von Dach et al., Ann Intern Med 2020) randomized patients with Enterobacterales bacteremia who were afebrile and hemodynamically stable for >= 48 hours to either 7 days or 14 days of antibiotic therapy. The trials demonstrated that 7 days was NON-INFERIOR to 14 days for 90-day clinical cure, all-cause mortality, and bacteremic relapse, while offering the substantial advantages of shorter hospital stays, fewer drug adverse events, and reduced selective pressure for antimicrobial resistance. (3) THE UNRESOLVED CLINICAL CONTROVERSY: Despite trial evidence, major international guidelines (such as IDSA and ESCMID) and expert clinicians acknowledge that this trial evidence CANNOT be universally extrapolated to all bacteremic patients. Significant ongoing clinical controversy and expert disagreement exist regarding: (a) Exclusion of immunocompromised hosts (neutropenia, solid organ transplant, high-dose steroids), who were systematically excluded from the non-inferiority trials; (b) Patients with slow clinical defervescence (> 72 hours to achieve clinical stability); (c) High-risk organisms (e.g., Pseudomonas aeruginosa, Serratia marcescens, or multidrug-resistant pathogens); and (d) Unrecognized anatomical persistence (e.g., occult microabscesses). Consequently, whether a 7-day course should be considered the universal standard of care or restricted only to low-risk, rapid responders remains actively debated in the literature."
      ],
      [
        "A mandatory 21-day course of intravenous aminoglycoside therapy is universally recommended by international guidelines to prevent chronic interstitial nephritis",
        "Aminoglycosides carry severe nephrotoxicity and ototoxicity and are never used as a prolonged 21-day monotherapy for uncomplicated bacteremia."
      ],
      [
        "Oral step-down therapy is strictly contraindicated for Gram-negative bacteremia regardless of clinical improvement or microbiological susceptibilities",
        "Multiple landmark clinical trials and IDSA guidelines strongly endorse oral step-down therapy with high-bioavailability agents (fluoroquinolones, TMP-SMX) once clinical stability is established."
      ],
      [
        "A single 24-hour dose of intravenous carbapenem is proven equally effective to a 14-day antibiotic course",
        "A 24-hour antibiotic course is completely inadequate for systemic bloodstream infections and leads to rapid microbiological relapse and septic shock."
      ],
      [
        "All patients with Gram-negative bacteremia require lifelong antibiotic suppression to prevent recurrent bacteremic seeding",
        "Lifelong antibiotic suppression is reserved for unresectable infected foreign bodies or vascular grafts, not uncomplicated acute pyelonephritis bacteremia."
      ]
    ],
    "rationale": "UNRESOLVED CLINICAL CONTROVERSY ITEM: The optimal duration of antibiotic therapy for uncomplicated Gram-negative bacteremia (Enterobacterales from a urinary source with documented clearance) is actively debated. Recent multicenter randomized controlled trials (Yahav et al., Lancet ID 2019; von Dach et al., Ann Intern Med 2020) demonstrated non-inferiority of 7 days versus 14 days in stable, afebrile patients with source control, significantly reducing hospital length of stay and adverse effects. However, whether 7 days is safe in patients with delayed defervescence, immunosuppression, or non-E. coli species remains controversial, and clinical consensus on universal adoption continues to evolve.",
    "metadata": {
      "shortSolution": "Randomized trials show non-inferiority of 7 days vs 14 days for uncomplicated Gram-negative bacteremia in stable patients with source control, but debate continues regarding immunocompromised hosts and delayed responders.",
      "competingChoice": "A mandatory 21-day course of intravenous aminoglycoside therapy is universally recommended by international guidelines to prevent chronic interstitial nephritis",
      "exclusionFinding": "21 days of aminoglycosides causes severe nephrotoxicity without clinical indication; the actual controversy is between 7 and 14 days of beta-lactams/fluoroquinolones.",
      "pedagogicalValue": "Understanding the evidence and controversy surrounding short-course (7 days) vs standard-course (14 days) antibiotic therapy for uncomplicated Gram-negative bacteremia.",
      "citations": [
        "Yahav D, Franceschini E, Koppel F, et al. Seven versus 14 days of antibiotic therapy for uncomplicated gram-negative bacteremia: a noninferiority randomized clinical trial. Clin Infect Dis. 2019;69(7):1091-1098. PMID: 30535100.",
        "von Dach E, Albrich WC, Brunel AS, et al. Effect of C-Reactive Protein-Guided Antibiotic Duration in Patients with Gram-Negative Bacteremia: A Randomized Clinical Trial. JAMA. 2020;323(21):2160-2169. PMID: 32484534."
      ]
    },
    "critique": {
      "shortestValidSolution": "Active clinical controversy: 7-day vs 14-day duration for uncomplicated Gram-negative bacteremia; trials show non-inferiority in low-risk patients, but debate persists for complex/delayed responders.",
      "strongestCompetitor": "A mandatory 21-day course of intravenous aminoglycoside therapy is universally recommended by international guidelines to prevent chronic interstitial nephritis",
      "exclusionFinding": "21-day aminoglycoside is unsupported and toxic; genuine controversy is 7 vs 14 days.",
      "verdict": "UNRESOLVED"
    }
  }
]
