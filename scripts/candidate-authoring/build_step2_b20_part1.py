import json

items_s2_b20_part1 = [
  {
    "code": "op-c-s2-0476",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Neutropenic Fever and Initial Empiric Monotherapy",
    "subtopic": "Absolute Neutrophil Count Thresholds, Antipseudomonal Beta-Lactams, Vancomycin Indications",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man with acute myeloid leukemia undergoes induction chemotherapy with cytarabine and daunorubicin (7+3 regimen). On day 10 post-chemotherapy, he develops chills and diaphoresis. Vital signs demonstrate blood pressure of 118/74 mm Hg, heart rate of 98/min, respiratory rate of 18/min, and an oral temperature of 38.6 C (101.5 F). Physical examination reveals a peripherally inserted central catheter (PICC) in the right basilic vein that is clean and intact without erythema, tenderness, or purulent drainage. Examination of the oral cavity reveals mild mucositis without ulcerations. The lungs are clear to auscultation, and the abdomen is soft and non-tender without peritoneal signs. Rectal examination is deliberately withheld. Laboratory evaluation reveals:\n- Hemoglobin: 8.4 g/dL\n- White blood cell count: 400/mm3\n- Absolute neutrophil count (ANC): 120/mm3 (reference > 1,500/mm3)\n- Platelet count: 24,000/mm3\n- Serum creatinine: 0.8 mg/dL\n- Serum lactate: 1.1 mmol/L\n\nTwo sets of blood cultures (one from the PICC line and one from a peripheral vein) and a clean-catch urine culture are obtained. Which of the following represents the most appropriate initial antimicrobial management for this patient?",
    "choices": [
      [
        "Immediate intravenous monotherapy with an antipseudomonal beta-lactam agent (e.g., cefepime 2 g every 8 hours, piperacillin-tazobactam 4.5 g every 6 hours, or meropenem 1 g every 8 hours), withholding upfront vancomycin",
        "Neutropenic Fever is defined by the Infectious Diseases Society of America (IDSA) as: (1) Fever: A single oral temperature >= 38.3 C (101.0 F) OR a sustained temperature >= 38.0 C (100.4 F) over a 1-hour period; AND (2) Neutropenia: An Absolute Neutrophil Count (ANC) < 500 cells/mm3, OR an ANC expected to decrease to < 500 cells/mm3 within 48 hours. Neutropenic patients lack the capacity to mount a robust inflammatory response; localized signs of infection (erythema, pus, radiographic consolidation) are typically absent, and bacteremia can rapidly progress to fatal septic shock within hours. FIRST-LINE ANTIMICROBIAL REGIMEN: Immediate administration (within 60 minutes of presentation) of INTRAVENOUS ANTIPSEUDOMONAL BETA-LACTAM MONOTHERAPY is the mandatory standard of care. Acceptable first-line monotherapy agents include: (a) CEFEPIME (2 g IV q8h), (b) PIPERACILLIN-TAZOBACTAM (4.5 g IV q6h), or (c) MEROPENEM (1 g IV q8h). Ceftriaxone and ertapenem are STRICTLY INADEQUATE because they lack Pseudomonas aeruginosa activity. INDICATIONS FOR UPFRONT VANCOMYCIN: Routine addition of vancomycin to initial empiric therapy is NOT recommended because trials demonstrate no survival advantage while significantly increasing nephrotoxicity and vancomycin-resistant enterococci (VRE) selection. Vancomycin is added upfront ONLY for specific clinical indications: (1) Hemodynamic instability or septic shock; (2) Obvious catheter-related infection (erythema, purulence); (3) Radiographically confirmed pneumonia; (4) Clinically suspected serious skin/soft-tissue infection; or (5) Known prior colonization with MRSA."
      ],
      [
        "Immediate combination therapy with intravenous vancomycin and intravenous cefepime in all patients with ANC < 500/mm3",
        "Routine upfront vancomycin in hemodynamically stable neutropenic fever without catheter site infection, pneumonia, or MRSA colonization provides no survival benefit and increases renal toxicity."
      ],
      [
        "Oral ciprofloxacin 750 mg twice daily plus amoxicillin-clavulanate 875 mg twice daily as outpatient therapy",
        "Oral outpatient therapy is reserved exclusively for low-risk neutropenic fever (MASCC risk score >= 21, anticipated neutropenia < 7 days); leukemia induction patients have prolonged profound neutropenia (> 7 days) and require inpatient IV therapy."
      ],
      [
        "Intravenous ceftriaxone 2 g daily plus intravenous metronidazole 500 mg every 8 hours",
        "Ceftriaxone lacks activity against Pseudomonas aeruginosa, a lethal pathogen in neutropenic patients that causes rapid vascular invasion and ecthyma gangrenosum; antipseudomonal coverage is mandatory."
      ],
      [
        "Withhold all antimicrobial therapy until preliminary blood culture results return from the laboratory in 24 to 48 hours",
        "Withholding antibiotics in neutropenic fever carries a catastrophic mortality exceeding 50% due to rapid progression of occult pseudomonal or enteric bacteremia; empiric treatment within 60 minutes is mandatory."
      ]
    ],
    "rationale": "Neutropenic fever (temp >= 38.3 C or >= 38.0 C for 1 hour with ANC < 500/mm3) is a medical emergency requiring empiric IV antipseudomonal beta-lactam monotherapy (cefepime, pip-tazo, or meropenem) within 60 minutes. Upfront vancomycin is not routinely recommended unless specific indications are present (hemodynamic instability, skin/catheter infection, pneumonia, or known MRSA colonization), as it increases nephrotoxicity without improving mortality (IDSA guidelines). Ceftriaxone lacks antipseudomonal activity and is contraindicated.",
    "metadata": {
      "shortSolution": "Neutropenic fever (ANC 120/mm3, temp 38.6 C) without hypotension or catheter site infection requires immediate empiric IV antipseudomonal beta-lactam monotherapy (cefepime, pip-tazo, or meropenem); withhold routine vancomycin.",
      "competingChoice": "Immediate combination therapy with intravenous vancomycin and intravenous cefepime in all patients with ANC < 500/mm3",
      "exclusionFinding": "Guidelines strictly recommend against routine upfront vancomycin in stable neutropenic patients lacking catheter erythema, pneumonia, shock, or MRSA history, due to excess nephrotoxicity without survival benefit.",
      "pedagogicalValue": "Knowing the definition of neutropenic fever, the mandatory antipseudomonal monotherapy choices, and the specific restricted indications for adding vancomycin.",
      "citations": [
        "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011;52(4):e56-e93. PMID: 21258094.",
        "Klastersky J, de Naurois J, Rolston K, et al. Management of febrile neutropaenia: ESMO Clinical Practice Guidelines. Ann Oncol. 2016;27(suppl 5):v111-v118. PMID: 27664247."
      ]
    },
    "critique": {
      "shortestValidSolution": "Neutropenic fever (ANC 120, temp 38.6 C) -> IV antipseudomonal beta-lactam monotherapy (cefepime/pip-tazo/meropenem); withhold upfront vancomycin.",
      "strongestCompetitor": "Immediate combination therapy with intravenous vancomycin and intravenous cefepime in all patients with ANC < 500/mm3",
      "exclusionFinding": "Routine upfront vancomycin is not indicated without shock, catheter infection, pneumonia, or MRSA; monotherapy is first-line.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0477",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Extended-Spectrum Beta-Lactamase (ESBL) Bacteremia and the MERINO Trial",
    "subtopic": "Meropenem Superiority, Piperacillin-Tazobactam Inadequacy, Carbapenem Stewardship",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old woman with a history of recurrent urinary tract infections, neurogenic bladder managed with intermittent catheterization, and stage 3 chronic kidney disease is hospitalized with acute pyelonephritis and urosepsis. Initial blood cultures drawn at admission grow a gram-negative rod identified 36 hours later as Klebsiella pneumoniae. Antimicrobial susceptibility testing reveals:\n- Ampicillin: Resistant\n- Ceftriaxone: Resistant (MIC >= 32 mcg/mL)\n- Ceftazidime: Resistant (MIC >= 16 mcg/mL)\n- Cefepime: Resistant (MIC >= 16 mcg/mL)\n- Piperacillin-tazobactam: Susceptible (MIC = 8/4 mcg/mL; susceptible breakpoint <= 16/4 mcg/mL)\n- Meropenem: Susceptible (MIC <= 0.25 mcg/mL)\n- Levofloxacin: Resistant\n- Trimethoprim-sulfamethoxazole: Resistant\n- Confirmatory phenotypic testing: Positive for Extended-Spectrum Beta-Lactamase (ESBL) production\n\nThe patient is currently receiving intravenous piperacillin-tazobactam 3.375 g every 6 hours initiated in the emergency department. She remains febrile at 38.2 C (100.8 F) with persistent costovertebral angle tenderness.\n\nBased on landmark randomized clinical trial evidence (the MERINO trial), which of the following represents the most appropriate antimicrobial management for this patient's bloodstream infection?",
    "choices": [
      [
        "Switch antimicrobial therapy to intravenous meropenem (1 g every 8 hours, adjusted for renal function), as carbapenems demonstrate superior survival compared to piperacillin-tazobactam in ESBL bacteremia",
        "Extended-Spectrum Beta-Lactamases (ESBLs, primarily CTX-M, SHV, and TEM variants) are plasmid-mediated bacterial enzymes produced by Enterobacterales (most commonly Klebsiella pneumoniae and Escherichia coli) that hydrolyze penicillins, cephalosporins (including third- and fourth-generation cephalosporins like ceftriaxone and cefepime), and aztreonam, while sparing carbapenems. THE LANDMARK MERINO TRIAL (JAMA 2018): Historically, in vitro testing frequently reported ESBL-producing isolates as 'susceptible' to piperacillin-tazobactam, leading clinicians to use pip-tazo for carbapenem-sparing stewardship. The multicenter randomized MERINO trial directly tested this strategy in patients with bloodstream infections caused by ceftriaxone-resistant E. coli or K. pneumoniae: (1) Mortality Endpoint: 30-day all-cause mortality was 12.3% in the piperacillin-tazobactam group compared to 3.7% in the meropenem group (a statistically significant risk difference of 8.6%). (2) Clinical Cure: Piperacillin-tazobactam failed to meet non-inferiority criteria and was associated with lower clinical resolution and higher rates of microbiological persistence. (3) Mechanism: In vivo, high bacterial inocula ('inoculum effect') and hyperproduction of beta-lactamases overwhelm the inhibitory capacity of tazobactam, causing clinical failure despite in vitro susceptibility. CURRENT GUIDELINES (IDSA AND ESCMID): For all serious infections (especially bacteremia and severe pyelonephritis) caused by ESBL-producing Enterobacterales, CARBAPENEMS (meropenem 1 g IV q8h or ertapenem 1 g IV q24h) ARE THE UNDISPUTED FIRST-LINE THERAPY OF CHOICE. Piperacillin-tazobactam should NOT be used for ESBL bacteremia regardless of reported in vitro MIC."
      ],
      [
        "Continue intravenous piperacillin-tazobactam unchanged, because in vitro automated susceptibility testing confirms an MIC within the susceptible range",
        "The MERINO trial proved that using piperacillin-tazobactam for ESBL bacteremia based on in vitro susceptibility nearly quadruples 30-day mortality (12.3% vs 3.7%) compared to meropenem; pip-tazo is clinically inadequate."
      ],
      [
        "Switch to high-dose intravenous cefepime 2 g every 8 hours via continuous infusion to overcome the elevated MIC",
        "Cefepime is hydrolyzed by CTX-M and other ESBL enzymes; using cefepime for ESBL bacteremia carries high treatment failure rates and is strongly discouraged by IDSA guidelines."
      ],
      [
        "Switch to intravenous colistin (polymyxin E) monotherapy to preserve carbapenem stewardship in the hospital",
        "Polymyxins carry severe nephrotoxicity and neurotoxicity and are inferior to carbapenems; they are reserved strictly for carbapenem-resistant Enterobacterales (CRE), not ESBL."
      ],
      [
        "Switch to oral nitrofurantoin 100 mg twice daily for 5 days to complete therapy enterally",
        "Nitrofurantoin achieves therapeutic concentrations only in lower urinary tract bladder urine; it achieves negligible tissue and serum levels and is completely contraindicated in pyelonephritis and bacteremia."
      ]
    ],
    "rationale": "Extended-spectrum beta-lactamase (ESBL)-producing Enterobacterales hydrolyze penicillins and cephalosporins. Although some ESBL strains test 'susceptible' in vitro to piperacillin-tazobactam, the landmark MERINO trial proved that piperacillin-tazobactam is significantly inferior to meropenem, resulting in nearly four-fold higher 30-day mortality (12.3% vs 3.7%). The 'inoculum effect' in bacteremia overwhelms tazobactam inhibition. IDSA and ESCMID guidelines mandate carbapenems (meropenem, ertapenem) as the first-line therapy of choice for serious ESBL infections and bacteremia, regardless of pip-tazo in vitro MICs.",
    "metadata": {
      "shortSolution": "Confirmed ESBL Klebsiella bacteremia must be treated with IV meropenem; the MERINO trial proved piperacillin-tazobactam causes nearly 4x higher mortality (12.3% vs 3.7%) despite in vitro susceptibility.",
      "competingChoice": "Continue intravenous piperacillin-tazobactam unchanged, because in vitro automated susceptibility testing confirms an MIC within the susceptible range",
      "exclusionFinding": "The MERINO trial established that in vitro pip-tazo susceptibility fails in vivo in ESBL bacteremia due to inoculum effect, causing significantly higher mortality; meropenem is mandatory.",
      "pedagogicalValue": "Mastering the MERINO trial findings: carbapenems (meropenem) are mandatory for ESBL bacteremia; piperacillin-tazobactam should not be used despite reported in vitro susceptibility.",
      "citations": [
        "Harris PNA, Tambyah PA, Lye DC, et al. Effect of Piperacillin-Tazobactam vs Meropenem on 30-Day Mortality for Patients With E coli or Klebsiella pneumoniae Bloodstream Infection and Ceftriaxone Resistance: A Randomized Clinical Trial. JAMA. 2018;320(10):984-994. PMID: 30208454.",
        "Tamma PD, Aitken SL, Bonomo RA, et al. Infectious Diseases Society of America Guidance on the Treatment of Extended-Spectrum beta-lactamase Producing Enterobacterales (ESBL-E), Carbapenem-Resistant Enterobacterales (CRE), and Pseudomonas aeruginosa with Difficult-to-Treat Resistance (DTR-P. aeruginosa). Clin Infect Dis. 2021;72(7):e169-e183. PMID: 33106864."
      ]
    },
    "critique": {
      "shortestValidSolution": "ESBL Klebsiella bacteremia -> switch from pip-tazo to IV meropenem (MERINO trial proved 4x lower mortality with carbapenem).",
      "strongestCompetitor": "Continue intravenous piperacillin-tazobactam unchanged, because in vitro automated susceptibility testing confirms an MIC within the susceptible range",
      "exclusionFinding": "In vitro pip-tazo susceptibility fails in vivo in ESBL bacteremia (inoculum effect); MERINO trial proved pip-tazo increases mortality.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0478",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Acute Bacterial Meningitis Emergency Algorithm",
    "subtopic": "CT Indications Prior to LP, Dexamethasone Timing, Empiric Antibiotic Sequence",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old previously healthy man is brought to the emergency department by his college roommate due to severe headache, high fever, and extreme neck stiffness that developed over the past 8 hours. On physical examination, he is alert and fully oriented to person, place, and time (Glasgow Coma Scale score 15: E4V5M6). Cranial nerves II through XII are completely normal. Pupillary reflexes are briskly reactive bilaterally, and funduscopic examination reveals sharp, crisp optic disc margins with spontaneous venous pulsations present bilaterally. Motor strength is 5/5 in all extremities without pronator drift. Meningeal signs are markedly positive: flexion of the neck provokes involuntary flexion of the hips and knees (Brudzinski sign), and resistance is encountered when attempting to extend the knee with the hip flexed to 90 degrees (Kernig sign). There is no rash, petechiae, or focal neurological deficit. Vital signs show blood pressure of 128/78 mm Hg, heart rate of 106/min, respiratory rate of 20/min, and temperature of 39.2 C (102.6 F).\n\nWhich of the following represents the most appropriate immediate sequence of interventions for this patient?",
    "choices": [
      [
        "Draw two sets of blood cultures, immediately perform an emergent diagnostic lumbar puncture, and promptly administer intravenous dexamethasone alongside empiric intravenous vancomycin and ceftriaxone",
        "Acute Bacterial Meningitis is an extreme medical emergency carrying high mortality and catastrophic neurological morbidity without rapid intervention. (1) INDICATIONS FOR HEAD CT PRIOR TO LUMBAR PUNCTURE: A common clinical misconception is that all patients with suspected meningitis require head CT before LP. Guidelines (IDSA) mandate that head CT before LP is indicated ONLY in the presence of specific 'high-risk' criteria: (a) Immunocompromise (HIV, transplant, immunosuppressive therapy); (b) History of CNS disease (stroke, mass, focal infection); (c) New-onset seizure within 1 week; (d) Papilledema (blurred disc margins, absent venous pulsations); (e) Abnormal level of consciousness (obtundation, coma); or (f) Focal neurological deficits (e.g., hemiparesis, dilated non-reactive pupil, facial droop). Because this patient is fully alert (GCS 15), immunocompetent, has a completely normal neurological examination, and exhibits crisp optic discs with spontaneous venous pulsations, HEAD CT IS NOT INDICATED AND WILL ONLY HARMFULLY DELAY LIFE-SAVING THERAPY. (2) SEQUENCE OF CARE: In low-risk patients: (a) Draw blood cultures; (b) Perform immediate bedside lumbar puncture; and (c) Immediately administer intravenous dexamethasone (0.15 mg/kg, 10 mg) concomitantly with or 10-20 minutes PRIOR to the first dose of empiric antibiotics (vancomycin 15-20 mg/kg + ceftriaxone 2 g IV). Dexamethasone suppresses subarachnoid space inflammation triggered by bactericidal antibiotic-induced bacterial cell lysis, significantly reducing hearing loss and mortality in Streptococcus pneumoniae meningitis. If dexamethasone is given after antibiotics, its protective anti-inflammatory benefit is completely lost."
      ],
      [
        "Transport the patient immediately for non-contrast head computed tomography (CT) before performing lumbar puncture or administering antibiotics",
        "Routine head CT in an alert patient with normal neuro exam and no papilledema causes an unacceptable delay of 2 to 4 hours in antimicrobial administration, dramatically increasing mortality and neurological injury."
      ],
      [
        "Administer intravenous vancomycin and ceftriaxone immediately, deferring dexamethasone until CSF Gram stain confirms Streptococcus pneumoniae",
        "Administering dexamethasone after antibiotics have already been infused provides zero clinical benefit because bacterial lysis and cytokine cascades have already been initiated; dexamethasone must be given prior to or with the first antibiotic dose."
      ],
      [
        "Perform lumbar puncture, administer intravenous ampicillin monotherapy, and withhold all cephalosporins due to enterococcal concerns",
        "Ampicillin is added to vancomycin and ceftriaxone only in patients > 50 years of age or immunocompromised individuals to cover Listeria monocytogenes; ampicillin monotherapy fails to cover penicillin-resistant pneumococci or Neisseria meningitidis."
      ],
      [
        "Administer oral ciprofloxacin 750 mg single dose and discharge home with close outpatient follow-up in 24 hours",
        "Oral ciprofloxacin is post-exposure chemoprophylaxis for asymptomatic close contacts of meningococcal meningitis; active bacterial meningitis requires immediate emergent hospitalization and high-dose IV bactericidal therapy."
      ]
    ],
    "rationale": "In acute bacterial meningitis, head CT prior to lumbar puncture is indicated ONLY if high-risk features are present: immunocompromise, CNS disease history, new seizures, papilledema, altered mental status, or focal neurological deficits. In an alert patient with a normal exam and no papilledema, LP should be performed immediately without CT. Dexamethasone (10 mg IV) must be given prior to or with the first dose of empiric IV vancomycin and ceftriaxone to reduce pneumococcal mortality and sensorineural hearing loss; giving dexamethasone after antibiotics is ineffective.",
    "metadata": {
      "shortSolution": "Young alert patient with meningitis and normal neuro exam/no papilledema does NOT need head CT; perform immediate LP and administer IV dexamethasone with/prior to empiric vancomycin + ceftriaxone.",
      "competingChoice": "Transport the patient immediately for non-contrast head computed tomography (CT) before performing lumbar puncture or administering antibiotics",
      "exclusionFinding": "Head CT is indicated before LP only for altered consciousness, focal deficits, papilledema, seizure, or immunocompromise; CT in low-risk patients dangerously delays therapy.",
      "pedagogicalValue": "Recognizing when head CT before LP is NOT indicated in meningitis, and mastering the timing of adjunctive dexamethasone (given prior to or with first antibiotic dose).",
      "citations": [
        "van de Beek D, Cabellos C, Dzupova O, et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect. 2016;22 Suppl 3:S37-S62. PMID: 27062097.",
        "Tunkel AR, Hartman BJ, Kaplan SL, et al. Practice guidelines for the management of bacterial meningitis. Clin Infect Dis. 2004;39(9):1267-1284. PMID: 15494903."
      ]
    },
    "critique": {
      "shortestValidSolution": "Alert patient + normal neuro exam + no papilledema -> LP immediately without CT; give IV dexamethasone before/with vancomycin + ceftriaxone.",
      "strongestCompetitor": "Transport the patient immediately for non-contrast head computed tomography (CT) before performing lumbar puncture or administering antibiotics",
      "exclusionFinding": "CT before LP is only indicated for focal deficits, coma, papilledema, seizures, or immunocompromise; routine CT delays life-saving antibiotics.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0479",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Clostridioides difficile Infection (CDI) Modern First-Line Regimens",
    "subtopic": "Fidaxomicin Superiority, Oral Vancomycin, Metronidazole Obsolescence",
    "provisionalDifficulty": 4,
    "stem": "A 65-year-old woman presents to the clinic with a 5-day history of 6 to 8 watery, non-bloody bowel movements daily accompanied by lower abdominal cramping and low-grade fever. Two weeks ago, she completed a 10-day course of oral clindamycin prescribed by her dentist for a severe dental abscess. On physical examination, she appears mildly dehydrated. Vital signs demonstrate blood pressure of 118/72 mm Hg, heart rate of 88/min, respiratory rate of 16/min, and temperature of 37.8 C (100.0 F). The abdomen is soft with mild, diffuse lower quadrant tenderness to palpation without rebound, guarding, or distension. Stool toxin nucleic acid amplification test (NAAT) combined with enzyme immunoassay (EIA) is positive for Clostridioides difficile toxin A and B. Laboratory evaluation reveals:\n- White blood cell count: 9,400/mm3 (normal < 15,000/mm3)\n- Serum creatinine: 0.9 mg/dL (baseline 0.8 mg/dL)\n- Serum albumin: 3.8 g/dL\n\nWhich of the following represents the preferred first-line pharmacological regimen for this initial episode of non-severe Clostridioides difficile infection?",
    "choices": [
      [
        "Oral fidaxomicin (200 mg twice daily for 10 days) or oral vancomycin (125 mg four times daily for 10 days)",
        "Clostridioides difficile Infection (CDI) is an anaerobic, spore-forming, toxin-producing bacterium that colonizes the colon following disruption of normal intestinal microbiota by broad-spectrum antimicrobials (most classically clindamycin, fluoroquinolones, cephalosporins). (1) DISEASE SEVERITY STRATIFICATION (IDSA/SHEA): (a) NON-SEVERE: WBC < 15,000 cells/mm3 AND serum creatinine < 1.5 mg/dL; (b) SEVERE: WBC >= 15,000 cells/mm3 OR serum creatinine >= 1.5 mg/dL; (c) FULMINANT: Hypotension, septic shock, ileus, or toxic megacolon. (2) FIRST-LINE THERAPY (IDSA/SHEA 2021 UPDATED GUIDELINES): (a) FIDAXOMICIN: Oral fidaxomicin (200 mg twice daily for 10 days) is the PREFERRED FIRST-LINE AGENT for initial non-severe and severe CDI. Fidaxomicin is a macrocyclic bactericidal RNA polymerase inhibitor with narrow-spectrum activity against C. diff that spares normal Bacteroides intestinal commensals. Landmark randomized clinical trials proved that while fidaxomicin and vancomycin achieve equivalent initial clinical cure rates (~88%), FIDAXOMICIN SIGNIFICANTLY REDUCES RECURRENCE RATES by ~45% (recurrence ~15% vs ~25% for vancomycin). (b) ORAL VANCOMYCIN: Oral vancomycin (125 mg four times daily for 10 days) is the primary acceptable alternative when fidaxomicin is unavailable. (3) METRONIDAZOLE OBSOLESCENCE: Oral metronidazole is INFERIOR to oral vancomycin and fidaxomicin in clinical cure and recurrence; current guidelines state metronidazole should only be used if fidaxomicin and oral vancomycin are strictly unavailable."
      ],
      [
        "Oral metronidazole 500 mg three times daily for 10 days as first-line monotherapy",
        "Oral metronidazole has demonstrated clear inferiority in clinical cure and higher recurrence rates compared to vancomycin and fidaxomicin; it is no longer recommended as first-line therapy by IDSA/SHEA."
      ],
      [
        "Intravenous vancomycin 1,000 mg every 12 hours infused slowly over 60 minutes",
        "Intravenous vancomycin is eliminated by glomerular filtration into urine and is not excreted into the colonic lumen; IV vancomycin achieves undetectable fecal concentrations and has zero efficacy in CDI."
      ],
      [
        "Oral loperamide 4 mg initially followed by 2 mg after each loose stool, with close observation",
        "Antimotility agents (loperamide) prevent toxin clearance, prolong mucosal contact with C. diff toxins, and can precipitate fatal toxic megacolon; they are strictly contraindicated."
      ],
      [
        "Immediate colonoscopic fecal microbiota transplantation (FMT)",
        "Fecal microbiota transplantation is reserved for multiple recurrent CDI (at least two prior recurrences failing targeted antibiotic therapy), not an initial first episode of CDI."
      ]
    ],
    "rationale": "Clostridioides difficile infection (CDI) is diagnosed by stool toxin testing. The 2021 IDSA/SHEA guidelines establish oral fidaxomicin (200 mg BID x 10 days) as the preferred first-line agent for initial CDI (non-severe and severe) because it achieves equivalent clinical cure to oral vancomycin (125 mg QID x 10 days) while significantly reducing recurrent CDI rates. Metronidazole is inferior and no longer first-line. IV vancomycin is not secreted into the colon and is completely ineffective. Antimotility agents are contraindicated.",
    "metadata": {
      "shortSolution": "Initial non-severe C. difficile infection is treated first-line with oral fidaxomicin (preferred for lower recurrence) or oral vancomycin; metronidazole is inferior and no longer first-line.",
      "competingChoice": "Oral metronidazole 500 mg three times daily for 10 days as first-line monotherapy",
      "exclusionFinding": "Updated IDSA/SHEA guidelines demoted metronidazole due to inferior clinical cure and higher recurrence rates; fidaxomicin and oral vancomycin are first-line.",
      "pedagogicalValue": "Knowing the updated first-line therapy for C. difficile: oral fidaxomicin (preferred) or oral vancomycin; metronidazole is obsolete as first-line therapy.",
      "citations": [
        "Johnson S, Lavergne V, Skinner AM, et al. Clinical Practice Guideline by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA): 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648.",
        "Louie TJ, Miller MA, Mullane KM, et al. Fidaxomicin versus vancomycin for Clostridium difficile infection. N Engl J Med. 2011;364(5):422-431. PMID: 21288078."
      ]
    },
    "critique": {
      "shortestValidSolution": "Initial non-severe CDI -> oral fidaxomicin (preferred) or oral vancomycin; avoid metronidazole.",
      "strongestCompetitor": "Oral metronidazole 500 mg three times daily for 10 days as first-line monotherapy",
      "exclusionFinding": "Metronidazole is clinically inferior and no longer recommended as first-line therapy by IDSA/SHEA.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0480",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Candidemia and Catheter-Related Fungal Bloodstream Infections",
    "subtopic": "Echinocandin Superiority, Mandatory Dilated Funduscopy, Central Venous Line Removal",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man who underwent an emergent exploratory laparotomy and bowel resection for perforated diverticulitis 12 days ago remains in the surgical intensive care unit. He has a right internal jugular central venous catheter in place and has been receiving total parenteral nutrition (TPN) and broad-spectrum intravenous piperacillin-tazobactam for 10 days. Today, he develops a new fever of 38.8 C (101.8 F) and sinus tachycardia at 116/min. Blood pressure is 108/68 mm Hg. Two sets of peripheral blood cultures drawn at the time of fever demonstrate budding yeast with pseudohyphae on preliminary Gram stain, identified 24 hours later as Candida albicans. The patient is alert, comfortable, and denies visual symptoms or eye pain.\n\nWhich of the following represents the most appropriate initial management sequence for this patient's bloodstream infection?",
    "choices": [
      [
        "Initiate intravenous echinocandin therapy (e.g., caspofungin, micafungin, or anidulafungin), remove the indwelling central venous catheter, and perform a mandatory dilated ophthalmologic examination within the first week of therapy",
        "Candidemia (Candida bloodstream infection) carries a 30-day mortality approaching 30-40%. Major risk factors include: central venous catheters, total parenteral nutrition (TPN), broad-spectrum antibiotic exposure, recent abdominal surgery, and prolonged ICU stay. (1) FIRST-LINE EMPIRIC PHARMACOTHERAPY (IDSA GUIDELINES): An ECHINOCANDIN (caspofungin 70 mg loading dose then 50 mg daily, micafungin 100 mg daily, or anidulafungin 200 mg loading dose then 100 mg daily) is the RECOMMENDED FIRST-LINE EMPIRIC AGENT for candidemia in both non-neutropenic and neutropenic adults. Echinocandins inhibit (1,3)-beta-D-glucan synthase in the fungal cell wall, are fungicidal against Candida species, and have superior clinical efficacy compared to fluconazole. Transition (step-down) to oral fluconazole is considered only after 5 to 7 days if the patient is clinically stable, blood cultures have cleared, and the isolate is confirmed fluconazole-susceptible. (2) CENTRAL VENOUS CATHETER REMOVAL: The central catheter serves as the primary nidus for intraluminal fungal biofilm formation and sustained seeded bacteremia; guidelines strongly mandate immediate removal of existing central venous catheters. (3) MANDATORY DILATED OPHTHALMOLOGIC EXAMINATION: Candida exhibits high hematogenous tropism for the richly vascularized choroid and retina, causing Candida chorioretinitis or endophthalmitis in 5% to 15% of candidemia cases. Because ocular involvement is often asymptomatic in early stages, a DILATED FUNDUSCOPIC EXAMINATION BY AN OPHTHALMOLOGIST IS MANDATORY within the first week of candidemia diagnosis. If chorioretinitis or endophthalmitis is present, treatment requires prolonged high-dose systemic amphotericin B plus flucytosine or fluconazole, and intravitreal antifungal injections, as echinocandins do not penetrate the vitreous body."
      ],
      [
        "Initiate intravenous fluconazole 400 mg daily, retain the central venous catheter, and withhold ophthalmologic examination unless visual loss develops",
        "Fluconazole is inferior to echinocandins for initial candidemia; retaining the central catheter leads to persistent fungal biofilms and fungemia; and early Candida endophthalmitis is often asymptomatic, making dilated eye exam mandatory."
      ],
      [
        "Instill an amphotericin B 'antibiotic lock' into the central venous catheter lumen and continue parenteral nutrition unchanged",
        "Catheter lock therapy is completely ineffective for fungal bloodstream infections; guidelines mandate immediate mechanical catheter removal."
      ],
      [
        "Initiate oral voriconazole 200 mg twice daily as standalone monotherapy without removing the catheter",
        "Voriconazole is used primarily for invasive Aspergillus; it has significant hepatotoxicity, visual hallucinations, and drug-drug interactions, and is not first-line for candidemia."
      ],
      [
        "Treat with intravenous caspofungin for 48 hours and stop therapy as soon as fever defers, without repeating blood cultures",
        "Candidemia requires a minimum of 14 days of antifungal therapy calculated from the date of the FIRST NEGATIVE blood culture to prevent metastatic fungal abscesses and endocarditis."
      ]
    ],
    "rationale": "Candidemia carries high mortality. First-line therapy is an echinocandin (caspofungin, micafungin, anidulafungin) over fluconazole (IDSA guidelines). Management mandates two critical adjuncts: (1) Immediate removal of indwelling central venous catheters (biofilm source), and (2) Dilated ophthalmologic examination within 1 week of diagnosis to rule out Candida chorioretinitis/endophthalmitis (asymptomatic in early stages; echinocandins have poor vitreous penetration, requiring change to fluconazole or amphotericin B). Treatment duration is a minimum of 14 days after the first negative blood culture.",
    "metadata": {
      "shortSolution": "Candidemia requires immediate IV echinocandin therapy (caspofungin/micafungin), central venous catheter removal, and mandatory dilated ophthalmologic examination to rule out endophthalmitis.",
      "competingChoice": "Initiate intravenous fluconazole 400 mg daily, retain the central venous catheter, and withhold ophthalmologic examination unless visual loss develops",
      "exclusionFinding": "Fluconazole is inferior to echinocandins; retaining the line perpetuates fungemia; and ocular screening is mandatory because early endophthalmitis is asymptomatic.",
      "pedagogicalValue": "Mastering the triad of candidemia management: echinocandin first-line, central line removal, and mandatory dilated ophthalmologic screening.",
      "citations": [
        "Pappas PG, Kauffman CA, Andes DR, et al. Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2016;62(4):e1-e50. PMID: 26679288.",
        "Marr KA. Invasive Candida Infections: The Changing Epidemiology. Oncology (Williston Park). 2004;18(14 Suppl 13):9-14. PMID: 15648833."
      ]
    },
    "critique": {
      "shortestValidSolution": "Candidemia -> IV echinocandin + remove central catheter + mandatory dilated ophthalmologic exam within 1 week.",
      "strongestCompetitor": "Initiate intravenous fluconazole 400 mg daily, retain the central venous catheter, and withhold ophthalmologic examination unless visual loss develops",
      "exclusionFinding": "Fluconazole is inferior to echinocandins; catheter removal is mandatory; dilated eye exam is required even if asymptomatic.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0481",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Cardiovascular",
    "topic": "Infective Endocarditis Empiric Regimens",
    "subtopic": "Native vs Prosthetic Valve, Timing of Rifampin, Staphylococcal Biofilm Eradication",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man presents to the emergency department with a 2-week history of low-grade fever, chills, night sweats, anorexia, and fatigue. He underwent surgical aortic valve replacement with a mechanical bileaflet prosthetic valve 8 months ago. Physical examination reveals an alert man with pale conjunctivae. Vital signs demonstrate blood pressure of 124/76 mm Hg, heart rate of 96/min, respiratory rate of 18/min, and temperature of 38.5 C (101.3 F). Cardiac auscultation reveals crisp mechanical valve closure clicks accompanied by a new grade 3/6 early diastolic murmur heard best at the right upper sternal border. Inspection of the hands reveals splinter hemorrhages under two fingernails and non-tender erythematous macules on the palms (Janeway lesions). Transesophageal echocardiography (TEE) reveals an 11-mm oscillating vegetation attached to the prosthetic aortic valve sewing ring with mild paravalvular regurgitation. Three separate sets of blood cultures are drawn from different venipuncture sites over a 1-hour period.\n\nWhich of the following represents the most appropriate empiric antimicrobial regimen while awaiting blood culture results?",
    "choices": [
      [
        "Intravenous vancomycin PLUS intravenous cefepime (or gentamicin), withholding rifampin until blood cultures become sterile",
        "Prosthetic Valve Endocarditis (PVE) occurring within 12 months of valve surgery (early PVE) is predominantly caused by healthcare-associated pathogens inoculated during the perioperative period: methicillin-resistant coagulase-negative staphylococci (Staphylococcus epidermidis, > 30-40%), Staphylococcus aureus (20%), gram-negative bacilli, and enterococci. (1) EMPIRIC REGIMEN FOR PROSTHETIC VALVE ENDOCARDITIS: Guidelines (AHA and ESC) recommend combination empiric therapy covering MRSA, MRSE, and hospital-acquired gram-negative bacilli: (a) INTRAVENOUS VANCOMycin (15-20 mg/kg IV q8-12h targeting a trough 15-20 mcg/mL or AUC 400-600) PLUS (b) INTRAVENOUS CEFEPIME (or an aminoglycoside like GENTAMICIN). (2) THE CRITICAL RATIONALE FOR WITHHOLDING RIFAMPIN INITIALLY: Rifampin has exceptional penetration into staphylococcal foreign-body biofilms, which is critical for curing prosthetic valve infections. However, RIFAMPIN MUST NEVER BE INITIATED EMPIRICALLY OR WHILE ACTIVE BACTEREMIA IS PRESENT. If rifampin is administered while high concentrations of circulating bacteria are present in the bloodstream, staphylococci develop rapid, high-level single-step point mutations in the rpoB gene, conferring irreversible rifampin resistance within 24 to 48 hours. Therefore, AHA guidelines mandate: Rifampin (300 mg orally or IV q8h) is added ONLY AFTER blood cultures have become completely sterile and the pathogen is confirmed as a staphylococcal species."
      ],
      [
        "Immediate four-drug combination therapy with intravenous vancomycin, intravenous gentamicin, oral rifampin, and intravenous ampicillin initiated simultaneously on day 1",
        "Administering rifampin while blood cultures are actively positive rapidly breeds high-level rifampin resistance via rpoB mutations, ruining the biofilm-penetrating drug."
      ],
      [
        "Intravenous ampicillin-sulbactam monotherapy, as prosthetic valve endocarditis is predominantly caused by viridans group streptococci",
        "Viridans streptococci cause late native valve endocarditis (> 12 months); prosthetic valves < 12 months are dominated by methicillin-resistant staphylococci (MRSE/MRSA) which are completely resistant to ampicillin-sulbactam."
      ],
      [
        "Oral linezolid 600 mg twice daily combined with oral ciprofloxacin 750 mg twice daily",
        "Bactericidal parenteral therapy is mandatory in endocarditis; bacteriostatic oral agents like linezolid have high failure rates in prosthetic valve infections and cannot overcome foreign-body biofilms."
      ],
      [
        "Withhold all antibiotics until blood cultures identify the specific bacterial organism and susceptibility profile in 48 to 72 hours",
        "Prosthetic valve endocarditis with an 11-mm vegetation and paravalvular regurgitation carries a high risk of rapid valve dehiscence, root abscess, and embolization; empiric treatment after blood cultures is mandatory."
      ]
    ],
    "rationale": "Early prosthetic valve endocarditis (< 12 months post-surgery) is predominantly caused by methicillin-resistant staphylococci (Staph epidermidis, Staph aureus) and gram-negative bacilli. Empiric therapy requires IV vancomycin plus cefepime (or gentamicin). Although rifampin is an essential biofilm-active agent for staphylococcal prosthetic endocarditis, AHA guidelines mandate that rifampin must NOT be started empirically or while active bacteremia persists, because staphylococci rapidly develop single-step rpoB mutations causing rifampin resistance. Rifampin is added only after bacteremia has cleared and staphylococcal infection is confirmed.",
    "metadata": {
      "shortSolution": "Early prosthetic valve endocarditis (< 12 mo) requires empiric IV vancomycin + cefepime; rifampin must be withheld until blood cultures clear to prevent rapid rpoB resistance mutations.",
      "competingChoice": "Immediate four-drug combination therapy with intravenous vancomycin, intravenous gentamicin, oral rifampin, and intravenous ampicillin initiated simultaneously on day 1",
      "exclusionFinding": "Giving rifampin during active bacteremia causes rapid selection of rifampin-resistant staphylococci via rpoB mutation; rifampin must be delayed until bacteremia resolves.",
      "pedagogicalValue": "Recognizing the empiric regimen for early prosthetic valve endocarditis and the critical principle of withholding rifampin until blood cultures become sterile.",
      "citations": [
        "Baddour LM, Wilson WR, Bayer AS, et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications: A Scientific Statement for Healthcare Professionals From the American Heart Association. Circulation. 2015;132(15):1435-1486. PMID: 26373316.",
        "Habib G, Lancellotti P, Antunes MJ, et al. 2015 ESC Guidelines for the management of infective endocarditis. Eur Heart J. 2015;36(44):3075-3128. PMID: 26320109."
      ]
    },
    "critique": {
      "shortestValidSolution": "Prosthetic valve IE (< 12 mo) -> empiric IV vancomycin + cefepime; delay rifampin until blood cultures clear (prevent rpoB resistance).",
      "strongestCompetitor": "Immediate four-drug combination therapy with intravenous vancomycin, intravenous gentamicin, oral rifampin, and intravenous ampicillin initiated simultaneously on day 1",
      "exclusionFinding": "Rifampin during active staphylococcal bacteremia breeds rapid rpoB resistance; it must be added only after blood is sterile.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0482",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Lyme Disease Clinical Stages and Diagnostic Stewardship",
    "subtopic": "Early Localized vs Disseminated, Serological Testing Indications, Oral Doxycycline",
    "provisionalDifficulty": 4,
    "stem": "A 34-year-old landscape architect presents to an outpatient clinic in suburban Connecticut in late June with a 4-day history of an expanding skin lesion on his right posterior thigh. He also reports mild generalized fatigue, low-grade fever, and headache. He recalls removing a tiny, dark tick from his leg approximately 8 days ago after working in dense brush. Physical examination reveals an alert man in no distress. Vital signs show blood pressure of 122/76 mm Hg, heart rate of 74/min, and temperature of 37.8 C (100.0 F). Examination of the right posterior thigh reveals an erythematous, circular, non-tender, non-pruritic macule measuring 9 cm in diameter with a sharp outer border and central clearing ('bull's-eye' or targetoid appearance). The remainder of the skin examination is clear. Neurological examination, including cranial nerves, motor, sensory, and reflexes, is completely normal. Cardiac auscultation reveals normal S1 and S2 with regular rate and rhythm and no murmurs.\n\nWhich of the following represents the most appropriate diagnostic and therapeutic approach for this patient?",
    "choices": [
      [
        "Diagnose early localized Lyme disease clinically and initiate oral doxycycline (100 mg twice daily for 10 to 14 days) without ordering Lyme serologic testing",
        "Lyme disease is a tick-borne spirochetal infection caused by Borrelia burgdorferi, transmitted by the blacklegged tick (Ixodes scapularis in the Northeast/Midwest US). (1) CLINICAL STAGES: (a) Early Localized (days to weeks): Characterized by a solitary ERYTHEMA MIGRANS (EM) rash (expanding erythematous macule/patch >= 5 cm, often with central clearing) accompanied by viral-like symptoms; (b) Early Disseminated (weeks to months): Multiple secondary EM lesions, Lyme neuroborreliosis (unilateral or bilateral facial nerve palsy [CN VII], lymphocytic meningitis), and Lyme carditis (AV conduction block, myopericarditis); (c) Late Disease (months to years): Asymmetric, migratory, monoarticular or oligoarticular arthritis (most commonly the knee). (2) DIAGNOSTIC STEWARDSHIP (CDC / IDSA GUIDELINES): Serological testing (two-tiered testing: enzyme immunoassay [EIA] followed by Western blot or second EIA) has a notoriously POOR SENSITIVITY (< 30-40%) during early localized disease because the IgM/IgG antibody response requires 2 to 6 weeks to develop. Therefore, in an endemic region, the presence of an erythema migrans lesion >= 5 cm is SUFFICIENT TO ESTABLISH A DEFINITIVE CLINICAL DIAGNOSIS. SEROLOGIC TESTING SHOULD NOT BE PERFORMED because a negative test is falsely reassuring and delays curative treatment. (3) TREATMENT: Oral DOXYCYCLINE (100 mg twice daily for 10-14 days) is first-line; oral amoxicillin or cefuroxime axetil are first-line alternatives in pregnant women or young children."
      ],
      [
        "Order serum Lyme enzyme immunoassay (EIA) and withhold antibiotic therapy until positive confirmation is obtained",
        "Lyme serology has < 40% sensitivity in early localized disease; waiting for antibodies delays treatment and risks bacterial dissemination to the heart and nervous system."
      ],
      [
        "Perform a 4-mm punch biopsy of the erythema migrans lesion for fungal culture and potassium hydroxide (KOH) examination",
        "Erythema migrans is a clinical diagnosis; tinea corporis presents with scaly, pruritic borders and positive KOH, unlike the smooth, asymptomatic, rapidly expanding lesion of Lyme disease."
      ],
      [
        "Admit to the hospital for intravenous ceftriaxone 2 g daily for 28 days and continuous cardiac telemetry",
        "Intravenous ceftriaxone is reserved for early disseminated Lyme disease with advanced heart block (PR > 300 ms, second/third-degree AV block) or CNS meningitis; early localized disease is treated with oral doxycycline."
      ],
      [
        "Administer a single prophylactic dose of oral doxycycline 200 mg and schedule outpatient follow-up",
        "A single dose of doxycycline is post-exposure chemoprophylaxis given within 72 hours of removing an engorged deer tick before any rash appears; established erythema migrans requires a full 10-14 day therapeutic course."
      ]
    ],
    "rationale": "Early localized Lyme disease presents with solitary erythema migrans (>= 5 cm) after an Ixodes tick bite in an endemic area. Serologic testing (two-tiered EIA and Western blot) has poor sensitivity (< 40%) in the first 2-4 weeks because antibodies take time to form. Guidelines (IDSA/CDC) mandate that erythema migrans in an endemic area is a clinical diagnosis: serologic testing is not recommended, and oral doxycycline (100 mg BID x 10-14 days) should be initiated immediately. Single-dose doxycycline is prophylaxis for tick bites, not treatment for established erythema migrans.",
    "metadata": {
      "shortSolution": "Solitary 9-cm erythema migrans in Connecticut is early localized Lyme disease; diagnosed clinically and treated with oral doxycycline (10-14 days) without serologic testing.",
      "competingChoice": "Order serum Lyme enzyme immunoassay (EIA) and withhold antibiotic therapy until positive confirmation is obtained",
      "exclusionFinding": "Serology has < 40% sensitivity during the first 2-4 weeks of early localized Lyme disease; serologic testing is explicitly not recommended and delays curative therapy.",
      "pedagogicalValue": "Recognizing that early localized Lyme disease (erythema migrans >= 5 cm) is a clinical diagnosis where serology is not recommended due to high false-negative rates.",
      "citations": [
        "Lantos PM, Rumbaugh J, Bockenstedt LK, et al. Clinical Practice Guidelines by the Infectious Diseases Society of America (IDSA), American Academy of Neurology (AAN), and American College of Rheumatology (ACR): 2020 Guidelines for the Prevention, Diagnosis and Treatment of Lyme Disease. Clin Infect Dis. 2021;72(1):e1-e48. PMID: 33251528.",
        "Steere AC. Lyme disease. N Engl J Med. 2001;345(2):115-125. PMID: 11450660."
      ]
    },
    "critique": {
      "shortestValidSolution": "Erythema migrans (9 cm) in endemic area -> clinical diagnosis of Lyme disease; give oral doxycycline (10-14 days) without serology.",
      "strongestCompetitor": "Order serum Lyme enzyme immunoassay (EIA) and withhold antibiotic therapy until positive confirmation is obtained",
      "exclusionFinding": "Serology has < 40% sensitivity in early Lyme and is contraindicated because false-negative results delay treatment.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0483",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Acute Retroviral Syndrome (Acute HIV Infection)",
    "subtopic": "Diagnostic Testing Sequence, Antigen/Antibody Window Period, HIV Viral Load",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old man presents to the student health clinic with a 6-day history of high fever, severe sore throat, painful swallowing, diffuse body aches, and fatigue. Two days ago, he noticed a non-pruritic pink rash across his chest and back. He reports engaging in condomless receptive anal intercourse with a new male partner 16 days ago. Physical examination demonstrates an uncomfortable, febrile man. Vital signs reveal blood pressure of 118/74 mm Hg, heart rate of 102/min, and temperature of 38.9 C (102.0 F). Oropharyngeal examination reveals pharyngeal erythema without tonsillar exudates, and two small (2-mm), shallow, well-demarcated, painful ulcers on the buccal mucosa. Tender, non-tender cervical, axillary, and inguinal lymphadenopathy is palpable. Dermatologic examination reveals a diffuse, erythematous maculopapular rash on the trunk and upper extremities. Point-of-care rapid heterophile antibody test (monospot) is negative. A standard rapid 4th-generation HIV-1/2 antigen/antibody immunoassay is reported as non-reactive (negative).\n\nWhich of the following is the most appropriate next diagnostic test to establish the diagnosis?",
    "choices": [
      [
        "Plasma HIV-1 RNA quantitative nucleic acid testing (viral load)",
        "Acute Retroviral Syndrome (Acute HIV Infection) occurs 2 to 4 weeks after viral transmission, coinciding with a massive burst of viral replication and widespread dissemination throughout lymphoid tissue. (1) CLINICAL PRESENTATION: Resembles infectious mononucleosis: high fever, pharyngitis, generalized lymphadenopathy, maculopapular trunk rash, arthralgias, and pathognomonic PAINFUL MUCOCUTANEOUS ORAL OR GENITAL ULCERS. (2) DIAGNOSTIC TESTING WINDOW AND KINETICS (CDC TESTING ALGORITHM): (a) Viral RNA (via quantitative RT-PCR viral load) becomes detectable in plasma FIRST, typically within 10 to 12 days after exposure, reaching extremely high levels (often > 100,000 to > 10,000,000 copies/mL). (b) HIV p24 antigen becomes detectable around day 14 to 17; (c) HIV-1/2 antibodies become detectable later, around day 20 to 30 (seroconversion window). (3) DIAGNOSTIC DILEMMA: During the earliest stages of acute infection (the 'eclipse phase' and early seroconversion), antibody titers are absent, and even the 4th-generation combination antigen/antibody test can be falsely negative or indeterminate if p24 antigen levels have not crossed detection thresholds or are bound in early immune complexes. Therefore, when acute HIV is clinically suspected, guidelines mandate ordering a QUANTITATIVE PLASMA HIV-1 RNA ASSAY (VIRAL LOAD). A dramatically elevated viral load (> 100,000 copies/mL) confirms acute HIV infection and mandates immediate initiation of combination antiretroviral therapy."
      ],
      [
        "HIV-1/HIV-2 antibody differentiation immunoassay",
        "The antibody differentiation assay detects mature IgG antibodies; when the 4th-generation screening test is negative, antibody differentiation will also be negative because antibodies have not yet developed."
      ],
      [
        "Western blot for HIV-1 antibodies",
        "Western blot detects mature antibodies and is obsolete in CDC diagnostic algorithms; it has a long window period (28-45 days) and will be falsely negative during acute retroviral syndrome."
      ],
      [
        "Epstein-Barr virus viral capsid antigen (VCA) IgM and IgG serology",
        "While EBV causes infectious mononucleosis, it does not explain painful mucocutaneous shallow ulcerations, and condomless intercourse 16 days ago strongly points to acute HIV, which must be ruled out with viral load."
      ],
      [
        "Repeat the rapid 4th-generation HIV antigen/antibody test in 6 months with no interim testing",
        "Delaying evaluation for 6 months misses the critical opportunity to initiate immediate antiretroviral therapy, protect the immune system, and prevent transmission during the peak infectious phase."
      ]
    ],
    "rationale": "Acute HIV infection presents 2-4 weeks post-exposure with a mononucleosis-like illness (fever, pharyngitis, rash, lymphadenopathy) plus painful mucocutaneous oral ulcers. During the early window period, 4th-generation antigen/antibody tests can be negative because antibodies develop at 3-4 weeks. Plasma HIV-1 RNA (viral load) becomes detectable first (at 10-12 days) and is massively elevated (> 100,000 copies/mL). Quantitative plasma HIV RNA PCR is the mandatory test to diagnose acute HIV when screening tests are negative.",
    "metadata": {
      "shortSolution": "Patient with mono-like symptoms, oral ulcers, and sex 16 days ago has acute HIV; negative 4th-gen test represents early window period; diagnose with quantitative plasma HIV-1 RNA (viral load).",
      "competingChoice": "HIV-1/HIV-2 antibody differentiation immunoassay",
      "exclusionFinding": "Antibody differentiation assays only detect mature antibodies which take 3-4 weeks to develop; viral RNA appears first at 10-12 days and is diagnostic.",
      "pedagogicalValue": "Understanding the diagnostic window periods for HIV and recognizing that quantitative HIV-1 RNA viral load is required to diagnose acute HIV infection during the seronegative phase.",
      "citations": [
        "Centers for Disease Control and Prevention and Association of Public Health Laboratories. Laboratory Testing for the Diagnosis of HIV Infection: Updated Recommendations. June 27, 2014. MMWR. NLM ID: 101636184.",
        "Saag MS, Gandhi RT, Hoy JF, et al. Antiretroviral Drugs for Treatment and Prevention of HIV Infection in Adults: 2020 Recommendations of the International Antiviral Society-USA Panel. JAMA. 2020;324(16):1651-1669. PMID: 33052386."
      ]
    },
    "critique": {
      "shortestValidSolution": "Acute HIV suspicion + negative 4th gen test -> plasma HIV-1 RNA viral load (detectable at 10-12 days).",
      "strongestCompetitor": "HIV-1/HIV-2 antibody differentiation immunoassay",
      "exclusionFinding": "Antibody differentiation is falsely negative during early seroconversion; viral RNA PCR detects high-titer viremia before antibody production.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0484",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Cryptococcal Meningitis in Advanced HIV Infection",
    "subtopic": "Induction Pharmacotherapy, Serial Lumbar Punctures, ART Delay Window",
    "provisionalDifficulty": 5,
    "stem": "A 38-year-old man with advanced HIV infection (CD4+ T-cell count 32/mm3) who has been non-adherent to antiretroviral therapy presents to the emergency department with a 2-week history of dull, continuous bifrontal headache, malaise, low-grade fevers, and mild confusion. On physical examination, he is lethargic but oriented to person and year. Cranial nerve examination reveals a right abducens (CN VI) nerve palsy with diplopia on right lateral gaze. Meningeal signs (neck stiffness) are minimal and subtle. Vital signs show blood pressure of 116/74 mm Hg, heart rate of 78/min, and temperature of 38.1 C (100.6 F). Non-contrast head CT reveals normal brain parenchyma without mass lesions, hydrocephalus, or midline shift. Lumbar puncture performed in the lateral decubitus position demonstrates an opening pressure of 360 mm H2O (markedly elevated; normal <= 200 mm H2O). Cerebrospinal fluid (CSF) analysis reveals:\n- Total nucleated cells: 68/mm3 (88% lymphocytes)\n- Protein: 124 mg/dL\n- Glucose: 28 mg/dL (serum glucose 102 mg/dL; CSF/serum ratio 0.27)\n- Cryptococcal capsular antigen (CrAg) lateral flow assay: Positive at a titer of 1:1,024\n- India ink preparation: Encapsulated round budding yeasts visible\n\nWhich of the following represents the most appropriate management sequence for this patient?",
    "choices": [
      [
        "Initiate induction therapy with intravenous liposomal amphotericin B plus oral flucytosine for at least 2 weeks, perform serial therapeutic lumbar punctures to lower opening pressure < 200 mm H2O, and delay antiretroviral therapy (ART) initiation for 2 to 6 weeks",
        "Cryptococcal Meningitis is caused by the encapsulated environmental yeast Cryptococcus neoformans, predominantly occurring in patients with advanced immunosuppression (CD4+ count < 100/mm3). (1) THREE-PHASE ANTIMICROBIAL REGIMEN (IDSA GUIDELINES): (a) INDUCTION: Liposomal amphotericin B (3-4 mg/kg IV daily) PLUS oral flucytosine (100 mg/kg daily in 4 divided doses) for a minimum of 2 weeks. Amphotericin binds fungal membrane ergosterol, while flucytosine enters fungal cells and is converted to 5-fluorouracil, inhibiting DNA and protein synthesis. Flucytosine significantly accelerates CSF fungal clearance and reduces mortality. (b) CONSOLIDATION: Oral fluconazole (400-800 mg daily) for 8 weeks; (c) MAINTENANCE: Low-dose oral fluconazole (200 mg daily) for at least 1 year and until CD4 > 100 for >= 3 months on ART. (2) INTRACRANIAL PRESSURE CONTROL: Cryptococcal capsular polysaccharide (glucuronoxylomannan) mechanically plugs the arachnoid villi, preventing CSF resorption and generating severe intracranial hypertension (opening pressure > 250-350 mm H2O, causing CN VI palsy). Elevated pressure must be aggressively relieved with DAILY SERIAL THERAPEUTIC LUMBAR PUNCTURES until opening pressure normalizes (< 200 mm H2O or 50% reduction). Shunting is reserved for persistent failure. (3) TIMING OF ART INITIATION: Landmark randomized trials (COAT trial) proved that initiating ART immediately (within the first 2 weeks) DOUBLES MORTALITY due to catastrophic intracranial Immune Reconstitution Inflammatory Syndrome (IRIS). ART MUST BE SAFELY DELAYED FOR 2 TO 6 WEEKS until induction antifungal therapy has cleared the fungal burden."
      ],
      [
        "Initiate intravenous fluconazole 400 mg daily monotherapy and start combination antiretroviral therapy immediately on hospital day 1",
        "Fluconazole monotherapy is fungistatic with slow CSF clearance and high mortality compared to amphotericin B plus flucytosine; immediate ART initiation doubles mortality from intracranial IRIS (COAT trial)."
      ],
      [
        "Administer intravenous liposomal amphotericin B monotherapy and insert an immediate permanent ventriculoperitoneal shunt on day 1",
        "Permanent shunting during acute active high-titer cryptococcal infection leads to fungal biofilm colonization and shunt obstruction; serial lumbar punctures are the primary modality to manage elevated opening pressure."
      ],
      [
        "Administer high-dose intravenous dexamethasone 10 mg every 6 hours to reduce cerebral fungal inflammation",
        "The landmark CryptoDex trial demonstrated that routine adjunctive dexamethasone does not reduce mortality, significantly slows CSF fungal clearance, and markedly increases severe adverse events and disability."
      ],
      [
        "Administer oral flucytosine monotherapy for 6 weeks, avoiding amphotericin B due to nephrotoxicity concerns",
        "Flucytosine monotherapy rapidly breeds high-level fungal resistance via mutations in cytosine permease within days; it must always be combined with amphotericin B."
      ]
    ],
    "rationale": "Cryptococcal meningitis in advanced AIDS requires a three-part management strategy: (1) Induction therapy with IV liposomal amphotericin B plus flucytosine for at least 2 weeks (superior fungal clearance and survival over fluconazole). (2) Management of high intracranial pressure (opening pressure > 250 mm H2O) using serial daily therapeutic lumbar punctures to remove CSF until pressure drops < 200 mm H2O. (3) Delaying antiretroviral therapy (ART) for 2 to 6 weeks, because starting ART within 2 weeks nearly doubles mortality from intracranial immune reconstitution inflammatory syndrome (IRIS; COAT trial). Dexamethasone is harmful (CryptoDex trial).",
    "metadata": {
      "shortSolution": "Cryptococcal meningitis with opening pressure 360 mm H2O requires liposomal amphotericin B + flucytosine, serial LPs to lower pressure < 200 mm H2O, and delaying ART for 2-6 weeks to prevent fatal IRIS.",
      "competingChoice": "Initiate intravenous fluconazole 400 mg daily monotherapy and start combination antiretroviral therapy immediately on hospital day 1",
      "exclusionFinding": "Fluconazole monotherapy has high mortality, and starting ART on day 1 doubles mortality due to intracranial IRIS (COAT trial); amphotericin + flucytosine and ART delay are required.",
      "pedagogicalValue": "Mastering cryptococcal meningitis: amphotericin + flucytosine induction, serial LPs for opening pressure > 200 mm H2O, and delaying ART for 2-6 weeks.",
      "citations": [
        "Boulware DR, Meya DB, Muzoora C, et al. Timing of antiretroviral therapy after diagnosis of cryptococcal meningitis. N Engl J Med. 2014;370(26):2487-2498. PMID: 24963568.",
        "Perfect JR, Dismukes WE, Dromer F, et al. Clinical practice guidelines for the management of cryptococcal disease: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2010;50(3):291-322. PMID: 20047480."
      ]
    },
    "critique": {
      "shortestValidSolution": "Cryptococcal meningitis (CrAg+, pressure 360) -> amphotericin B + flucytosine + serial LPs + delay ART 2-6 weeks (COAT trial).",
      "strongestCompetitor": "Initiate intravenous fluconazole 400 mg daily monotherapy and start combination antiretroviral therapy immediately on hospital day 1",
      "exclusionFinding": "Immediate ART doubles mortality from intracranial IRIS; amphotericin + flucytosine is superior to fluconazole.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0485",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Toxoplasma gondii Encephalitis in AIDS",
    "subtopic": "Multiple Ring-Enhancing Lesions, Pyrimethamine-Sulfadiazine, Leucovorin Rescue",
    "provisionalDifficulty": 5,
    "stem": "A 41-year-old man with advanced HIV infection who has been lost to medical follow-up for 3 years is brought to the emergency department by his brother due to a 10-day history of progressive left-sided weakness, dull headache, and lethargy. This morning, he experienced a 2-minute focal motor seizure involving the left arm with secondary generalization. On physical examination, he is somnolent but arousable. Vital signs reveal blood pressure of 126/78 mm Hg, heart rate of 84/min, and temperature of 38.0 C (100.4 F). Neurological examination demonstrates left-sided spastic hemiparesis (motor strength 2/5 in left upper extremity, 3/5 in left lower extremity) with hyperactive left deep tendon reflexes and an extensor plantar response (positive Babinski sign) on the left. Contrast-enhanced brain MRI reveals multiple (four) discrete, rounded, ring-enhancing lesions located within the right basal ganglia, right frontoparietal cortex, and left thalamus, with prominent surrounding vasogenic edema and a 4-mm midline shift. Laboratory evaluation reveals a CD4+ T-cell count of 48/mm3 and positive serum Toxoplasma IgG antibody titers.\n\nWhich of the following represents the most appropriate initial pharmacological therapy for this patient?",
    "choices": [
      [
        "Oral pyrimethamine, oral sulfadiazine, and oral leucovorin (folinic acid)",
        "Toxoplasma Encephalitis is the most common cause of focal central nervous system mass lesions in patients with advanced HIV infection (CD4+ T-lymphocyte count < 100/mm3). (1) CLINICAL AND RADIOLOGICAL FINDINGS: Subacute headache, focal neurological deficits (hemiparesis, cranial neuropathies), seizures, and altered mental status. Contrast-enhanced MRI classically demonstrates MULTIPLE, bilateral, ring-enhancing lesions with surrounding vasogenic edema, with a predilection for the basal ganglia, corticomedullary junction, and thalamus. (2) FIRST-LINE REGIMEN (CDC/IDSA/NIH GUIDELINES): (a) PYRIMETHAMINE: A potent competitive dihydrofolate reductase (DHFR) inhibitor; (b) SULFADIAZINE: A sulfonamide competitive dihydropteroate synthase inhibitor. The combination provides synergistic sequential blockade of microbial tetrahydrofolic acid synthesis. (c) LEUCOVORIN (FOLINIC ACID): Pyrimethamine inhibits human mammalian DHFR to a lesser extent; however, high therapeutic dosing produces severe dose-dependent bone marrow suppression (megaloblastic anemia, leukopenia, thrombocytopenia). LEUCOVORIN (folinic acid) supplies fully reduced 5-formyl-tetrahydrofolate directly to human mammalian cells (which possess folate uptake mechanisms), completely bypassing DHFR inhibition and preventing catastrophic myelosuppression. Note: Folic acid cannot be substituted because it requires DHFR for activation. (3) SECOND-LINE ALTERNATIVE: For patients with severe sulfa allergy, pyrimethamine PLUS clindamycin (plus leucovorin) is the primary regimen. (4) PRIMARY CNS LYMPHOMA (PCNSL) DIFFERENTIATION: PCNSL (associated with Epstein-Barr virus) typically presents as a solitary, periventricular, strongly enhancing lesion. An empiric 2-week trial of anti-toxoplasma therapy is standard: clinical and radiographic improvement confirms toxoplasmosis, avoiding the need for stereotactic brain biopsy."
      ],
      [
        "High-dose intravenous trimethoprim-sulfamethoxazole monotherapy with oral folic acid (vitamin B9)",
        "While TMP-SMX is an acceptable second-line alternative, combining it with regular folic acid does not rescue host bone marrow because folic acid requires intact DHFR; leucovorin (reduced folinic acid) is specifically required."
      ],
      [
        "Stereotactic brain biopsy prior to administering any antimicrobial therapy",
        "Multiple ring-enhancing lesions in a Toxoplasma-IgG-positive AIDS patient warrant an empiric 2-week trial of pyrimethamine-sulfadiazine; brain biopsy is reserved for lesions that fail to regress after 10-14 days."
      ],
      [
        "Intravenous liposomal amphotericin B and oral flucytosine for fungal mass lesions",
        "Amphotericin B and flucytosine treat Cryptococcus neoformans, which presents with diffuse meningoencephalitis and elevated opening pressure, rarely producing multiple ring-enhancing parenchymal lesions."
      ],
      [
        "Intravenous ganciclovir and foscarnet for suspected viral encephalitis",
        "Ganciclovir and foscarnet treat Cytomegalovirus (CMV), which causes periventricular ependymitis or retinitis, not discrete multi-focal ring-enhancing basal ganglia abscesses."
      ]
    ],
    "rationale": "Toxoplasma encephalitis in advanced HIV (CD4 < 100) presents with focal deficits, seizures, and multiple ring-enhancing lesions in the basal ganglia. First-line therapy is oral pyrimethamine plus sulfadiazine, combined with leucovorin (folinic acid). Leucovorin is mandatory to prevent pyrimethamine-induced bone marrow suppression (megaloblastic anemia, neutropenia) by directly providing reduced tetrahydrofolate to human cells (folic acid cannot be used because it requires DHFR). A 2-week empiric trial is standard before considering brain biopsy.",
    "metadata": {
      "shortSolution": "Advanced AIDS with multiple ring-enhancing basal ganglia lesions and positive Toxoplasma IgG requires oral pyrimethamine + sulfadiazine + leucovorin (folinic acid to prevent myelosuppression).",
      "competingChoice": "Stereotactic brain biopsy prior to administering any antimicrobial therapy",
      "exclusionFinding": "Guidelines mandate a 10-14 day empiric trial of anti-toxoplasma therapy before considering invasive brain biopsy; radiographic improvement confirms the diagnosis non-invasively.",
      "pedagogicalValue": "Knowing the first-line therapy for Toxoplasma encephalitis (pyrimethamine + sulfadiazine + leucovorin) and the specific role of leucovorin (folinic acid, not folic acid) in preventing myelosuppression.",
      "citations": [
        "Panel on Opportunistic Infections in Adults and Adolescents with HIV. Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV. Department of Health and Human Services. Updated 2023. NLM ID: 101680789.",
        "Luft BJ, Remington JS. Toxoplasmic encephalitis in patients with the acquired immunodeficiency syndrome. N Engl J Med. 1992;327(23):1643-1648. PMID: 1359411."
      ]
    },
    "critique": {
      "shortestValidSolution": "AIDS + multiple ring-enhancing lesions + Toxo IgG+ -> oral pyrimethamine + sulfadiazine + leucovorin (folinic acid).",
      "strongestCompetitor": "Stereotactic brain biopsy prior to administering any antimicrobial therapy",
      "exclusionFinding": "Empiric medical therapy is first-line; stereotactic brain biopsy is reserved for lesions failing a 2-week trial.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0486",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Cytomegalovirus (CMV) Retinitis in Advanced AIDS",
    "subtopic": "Painless Visual Loss, 'Pizza Pie' Retinopathy, Ganciclovir, Blindness Prevention",
    "provisionalDifficulty": 4,
    "stem": "A 35-year-old man with advanced HIV infection who has declined antiretroviral therapy presents to the clinic with a 2-week history of painless, progressive blurring of vision and seeing 'floating black cobwebs and flashing lights' in his left eye. He denies eye pain, redness, discharge, or headache. On physical examination, he appears thin and cachectic. Vital signs are normal. Visual acuity is 20/20 in the right eye and 20/200 in the left eye. Pupillary examination reveals a left relative afferent pupillary defect. Anterior slit-lamp examination is completely normal with clear corneas and quiet anterior chambers bilaterally. Dilated indirect ophthalmoscopy of the left eye reveals extensive, full-thickness, fluffy white granular perivascular retinal infiltrates accompanied by extensive, dense flame-shaped intraretinal hemorrhages following the vascular arcades ('pizza pie' or 'cottage cheese and ketchup' retinopathy) with retinal edema approaching the macula. Examination of the right eye is currently unremarkable. Recent laboratory studies show a CD4+ T-cell count of 22/mm3 (reference > 500/mm3) and plasma HIV RNA of 480,000 copies/mL.\n\nWhich of the following represents the most appropriate initial pharmacological therapy to prevent irreversible bilateral blindness in this patient?",
    "choices": [
      [
        "Intravenous ganciclovir (or oral valganciclovir), with consideration of intravitreal ganciclovir injections if immediate macular threat is present",
        "Cytomegalovirus (CMV) Retinitis is the leading cause of viral blindness in patients with advanced acquired immunodeficiency syndrome, occurring almost exclusively at CD4+ T-lymphocyte counts < 50/mm3. (1) CLINICAL PRESENTATION: Painless visual blurring, floaters, flashing lights (photopsias), and scotomas. The absence of eye pain and normal anterior chamber (lack of uveitis or redness) distinguishes CMV retinitis from acute angle-closure glaucoma, keratitis, or anterior uveitis. (2) PATHOGNOMONIC OPHTHALMOSCOPIC APPEARANCE: Full-thickness necrotizing retinitis characterized by yellowish-white, fluffy, granular perivascular retinal infiltrates accompanied by extensive intraretinal hemorrhages, classically described as a 'PIZZA PIE' or 'COTTAGE CHEESE AND KETCHUP' fundus. Retinal detachment occurs in up to 30% of patients due to full-thickness retinal tears. (3) FIRST-LINE THERAPY (IDSA/CDC GUIDELINES): (a) SYSTEMIC THERAPY: Oral VALGANCICLOVIR (900 mg twice daily for 21 days induction, then 900 mg daily maintenance) for non-immediate sight-threatening peripheral lesions, OR Intravenous GANCICLOVIR (5 mg/kg IV q12h). Ganciclovir is a nucleoside analogue that inhibits viral DNA polymerase following phosphorylation by the viral UL97 protein kinase. (b) INTRAVITREAL INJECTIONS: For lesions immediately threatening the macula or optic nerve (sight-threatening within 1,500 microns of the fovea), INTRAVITREAL GANCICLOVIR OR FOSCARNET INJECTIONS are combined with systemic therapy to achieve immediate high local drug concentrations. (4) SECOND-LINE AGENTS: Intravenous FOSCARNET (direct DNA polymerase pyrophosphate-binding inhibitor) or CIDOFOVIR are used for ganciclovir resistance (UL97 mutations) or severe neutropenia."
      ],
      [
        "High-dose intravenous acyclovir 10 mg/kg every 8 hours for 14 days",
        "Acyclovir lacks adequate potency against CMV because CMV lacks thymidine kinase required for initial acyclovir monophosphorylation; acyclovir is completely ineffective for CMV retinitis."
      ],
      [
        "Intravitreal pegaptanib or ranibizumab injections monthly for presumed wet macular degeneration",
        "Anti-VEGF therapy treats choroidal neovascularization, not viral necrotizing retinitis; omitting antiviral therapy results in rapid total retinal necrosis and bilateral blindness."
      ],
      [
        "Oral trimethoprim-sulfamethoxazole double-strength twice daily and systemic corticosteroids",
        "TMP-SMX treats Toxoplasma chorioretinitis (which typically presents with vitritis ['headlight in the fog'] and smaller retinal scars); it has zero activity against CMV."
      ],
      [
        "Immediate initiation of antiretroviral therapy without administering any antiviral therapy",
        "Starting ART without controlling CMV replication triggers catastrophic immune reconstitution uveitis (IRU) and does not arrest ongoing viral retinal destruction; antiviral therapy is mandatory."
      ]
    ],
    "rationale": "CMV retinitis occurs at CD4 < 50/mm3, presenting with painless vision loss, floaters, and pathognomonic 'pizza pie' retinopathy (granular white perivascular retinal infiltrates with dense hemorrhages). Ganciclovir/valganciclovir is the first-line therapy (inhibits CMV DNA polymerase). Intravitreal injections are added for lesions near the macula. Acyclovir is ineffective because CMV lacks thymidine kinase. Systemic antiviral induction must be started immediately to prevent permanent blindness.",
    "metadata": {
      "shortSolution": "Advanced AIDS (CD4 22) with painless vision loss and 'pizza pie' necrotizing retinopathy has CMV retinitis; treated with IV ganciclovir or oral valganciclovir (plus intravitreal injection if macula threatened).",
      "competingChoice": "High-dose intravenous acyclovir 10 mg/kg every 8 hours for 14 days",
      "exclusionFinding": "CMV lacks viral thymidine kinase, rendering acyclovir completely ineffective; ganciclovir (phosphorylated by CMV UL97 kinase) is the drug of choice.",
      "pedagogicalValue": "Recognizing the funduscopic features of CMV retinitis ('pizza pie' infiltrates/hemorrhages) and knowing ganciclovir/valganciclovir is the treatment of choice while acyclovir is ineffective.",
      "citations": [
        "Jabs DA, Martin BK, Forman MS; Cytomegalovirus Retinitis and Viral Resistance Study Group. Cytomegalovirus resistance to ganciclovir and clinical outcomes of patients with cytomegalovirus retinitis in the era of highly active antiretroviral therapy. Am J Ophthalmol. 2010;149(5):713-722.e1. PMID: 20381792.",
        "Panel on Opportunistic Infections in Adults and Adolescents with HIV. Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV. CDC, NIH, HIVMA/IDSA. 2023. NLM ID: 101680789."
      ]
    },
    "critique": {
      "shortestValidSolution": "CD4 < 50 + painless floaters + 'pizza pie' retinopathy -> CMV retinitis treated with ganciclovir/valganciclovir.",
      "strongestCompetitor": "High-dose intravenous acyclovir 10 mg/kg every 8 hours for 14 days",
      "exclusionFinding": "Acyclovir is ineffective against CMV (lacks thymidine kinase); ganciclovir is required.",
      "verdict": "PASS"
    }
  },
  {
    "code": "op-c-s2-0487",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Infectious Disease",
    "topic": "Latent Tuberculosis Infection (LTBI) Modern Short-Course Regimens",
    "subtopic": "3HP vs 4R vs 9H, Completion Rates, Hepatotoxicity Risk Mitigation",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman presents to the employee health clinic for pre-employment screening as a newly hired registered nurse. She is completely asymptomatic, denies cough, hemoptysis, fevers, night sweats, or weight loss, and has no chronic medical conditions. She emigrated from the Philippines 4 years ago. An interferon-gamma release assay (IGRA; QuantiFERON-TB Gold Plus) is positive. A two-view posterior-anterior and lateral chest radiograph demonstrates clear lung parenchyma without infiltrates, cavitary lesions, calcified granulomas, or hilar lymphadenopathy. Baseline hepatic panel shows serum alanine aminotransferase (ALT) of 18 U/L and aspartate aminotransferase (AST) of 22 U/L (both normal). The diagnosis of Latent Tuberculosis Infection (LTBI) is established.\n\nAccording to current Centers for Disease Control and Prevention (CDC) and National Tuberculosis Controllers Association (NTCA) guidelines, which of the following represents the preferred first-line pharmacological treatment regimen for this patient?",
    "choices": [
      [
        "A modern short-course rifamycin-based regimen: 3 months of once-weekly oral isoniazid PLUS rifapentine (3HP) or 4 months of daily oral rifampin monotherapy (4R)",
        "Latent Tuberculosis Infection (LTBI) is defined by evidence of Mycobacterium tuberculosis infection (positive tuberculin skin test or interferon-gamma release assay [IGRA]) with active disease ruled out by absence of symptoms and normal chest radiography. (1) PARADIGM SHIFT IN LTBI TREATMENT (CDC / NTCA 2020 GUIDELINES): Historically, 9 months of daily oral isoniazid monotherapy (9H) was standard. However, 9H suffered from very poor real-world completion rates (< 50-60%) and significant risks of drug-induced hepatotoxicity. (2) PREFERRED FIRST-LINE REGIMENS: The CDC and NTCA now STRONGLY PREFER SHORT-COURSE RIFAMYCIN-BASED REGIMENS over 6 to 9 months of isoniazid: (a) 3HP REGIMEN: 3 months of once-weekly oral isoniazid PLUS oral rifapentine taken with directly observed therapy or self-administered therapy (12 total doses). Landmark randomized clinical trials (PREVENT TB trial) proved 3HP has equivalent efficacy to 9H in preventing active TB, with significantly higher treatment completion rates (> 85-90%) and lower hepatotoxicity rates. (b) 4R REGIMEN: 4 months of daily oral rifampin monotherapy (120 total doses). Proven equally effective with the lowest rate of hepatotoxicity of all LTBI regimens. (c) 3HR REGIMEN: 3 months of daily isoniazid plus rifampin. (3) ISONIAZID MONOTHERAPY (6H or 9H): Now categorized as an ALTERNATIVE regimen reserved only for patients who cannot tolerate rifamycins or have significant drug-drug interactions (e.g., certain antiretroviral or immunosuppressive medications)."
      ],
      [
        "9 months of daily oral isoniazid monotherapy (9H) with pyridoxine",
        "While historically common, 9 months of isoniazid is now designated as an alternative regimen due to significantly lower completion rates (< 60%) and higher hepatotoxicity compared to short-course rifamycin regimens (3HP or 4R)."
      ],
      [
        "Standard 4-drug combination therapy with rifampin, isoniazid, pyrazinamide, and ethambutol (RIPE) for 2 months",
        "Four-drug RIPE therapy is indicated exclusively for active tuberculosis disease; treating latent infection with RIPE exposes the patient to severe unnecessary toxicity (hyperuricemia, optic neuritis, hepatotoxicity)."
      ],
      [
        "Observation without pharmacological therapy, performing annual screening chest radiographs",
        "Without preventative therapy, approximately 5% to 10% of immunocompetent individuals with LTBI will reactivate to active, infectious, destructive tuberculosis during their lifetime; treatment is strongly recommended."
      ],
      [
        "Oral levofloxacin 750 mg daily for 6 months as first-line monotherapy",
        "Fluoroquinolone monotherapy is reserved strictly for documented contacts of multidrug-resistant tuberculosis (MDR-TB); it is not approved for routine drug-susceptible LTBI."
      ]
    ],
    "rationale": "Latent TB infection (LTBI) is diagnosed by positive IGRA/TST with normal chest radiograph and no symptoms. Current CDC/NTCA guidelines strongly recommend short-course rifamycin-based regimens as first-line: (1) 3 months of once-weekly isoniazid plus rifapentine (3HP), or (2) 4 months of daily rifampin (4R). These short regimens have equivalent efficacy to 9 months of isoniazid (9H), but achieve significantly higher completion rates (> 85% vs < 60%) and lower rates of drug-induced hepatotoxicity. 9 months of isoniazid is now an alternative regimen.",
    "metadata": {
      "shortSolution": "Asymptomatic nurse with positive IGRA and clear CXR has LTBI; CDC guidelines recommend short-course rifamycin regimens (3HP: 3 months weekly isoniazid + rifapentine, or 4R: 4 months daily rifampin) over 9 months of isoniazid.",
      "competingChoice": "9 months of daily oral isoniazid monotherapy (9H) with pyridoxine",
      "exclusionFinding": "CDC/NTCA guidelines demoted 9H to alternative therapy due to poor completion rates and higher hepatotoxicity compared to short-course 3HP or 4R.",
      "pedagogicalValue": "Mastering updated CDC guidelines for latent TB: short-course rifamycin regimens (3HP or 4R) are preferred over 9 months of isoniazid due to higher completion and lower liver toxicity.",
      "citations": [
        "Sterling TR, Njie G, Zenner D, et al. Guidelines for the Treatment of Latent Tuberculosis Infection: Recommendations from the National Tuberculosis Controllers Association and CDC, 2020. MMWR Recomm Rep. 2020;69(1):1-11. PMID: 32053584.",
        "Sterling TR, Villarino ME, Borisov AS, et al. Three months of weekly rifapentine and isoniazid for M. tuberculosis infection. N Engl J Med. 2011;365(23):2155-2166. PMID: 22150035."
      ]
    },
    "critique": {
      "shortestValidSolution": "LTBI (positive IGRA, normal CXR) -> preferred first-line is short-course rifamycin (3HP: 3 mo weekly INH+rifapentine or 4R: 4 mo daily rifampin).",
      "strongestCompetitor": "9 months of daily oral isoniazid monotherapy (9H) with pyridoxine",
      "exclusionFinding": "CDC guidelines prioritize 3HP and 4R over 9H due to superior adherence and lower hepatotoxicity.",
      "verdict": "PASS"
    }
  }
]
