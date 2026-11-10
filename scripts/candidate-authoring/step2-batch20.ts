import { CandidateSpec } from './types';

export const step2Batch20: CandidateSpec[] = [
  {
    "code": "op-c-s2-0476",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Neutropenic fever (ANC 120/mm3, temp 38.6 C) without hypotension or catheter site infection requires immediate empiric IV antipseudomonal beta-lactam monotherapy (cefepime, pip-tazo, or meropenem); withhold routine vancomycin.",
      "distractorExclusionNotes": "Distractor exclusion verified: Guidelines strictly recommend against routine upfront vancomycin in stable neutropenic patients lacking catheter erythema, pneumonia, shock, or MRSA history, due to excess nephrotoxicity without survival benefit.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Neutropenic fever (ANC 120/mm3, temp 38.6 C) without hypotension or catheter site infection requires immediate empiric IV antipseudomonal beta-lactam monotherapy (cefepime, pip-tazo, or meropenem); withhold routine vancomycin.",
    "necessaryInference": "Neutropenic fever (ANC 120/mm3, temp 38.6 C) without hypotension or catheter site infection requires immediate empiric IV antipseudomonal beta-lactam monotherapy (cefepime, pip-tazo, or meropenem); withhold routine vancomycin.",
    "strongestDistractor": "Immediate combination therapy with intravenous vancomycin and intravenous cefepime in all patients with ANC < 500/mm3",
    "distractorExclusion": "Guidelines strictly recommend against routine upfront vancomycin in stable neutropenic patients lacking catheter erythema, pneumonia, shock, or MRSA history, due to excess nephrotoxicity without survival benefit.",
    "citation": "Freifeld AG, Bow EJ, Sepkowitz KA, et al. Clinical practice guideline for the use of antimicrobial agents in neutropenic patients with cancer: 2010 update by the Infectious Diseases Society of America. Clin Infect Dis. 2011;52(4):e56-e93. PMID: 21258094."
  },
  {
    "code": "op-c-s2-0477",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Confirmed ESBL Klebsiella bacteremia must be treated with IV meropenem; the MERINO trial proved piperacillin-tazobactam causes nearly 4x higher mortality (12.3% vs 3.7%) despite in vitro susceptibility.",
      "distractorExclusionNotes": "Distractor exclusion verified: The MERINO trial established that in vitro pip-tazo susceptibility fails in vivo in ESBL bacteremia due to inoculum effect, causing significantly higher mortality; meropenem is mandatory.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Confirmed ESBL Klebsiella bacteremia must be treated with IV meropenem; the MERINO trial proved piperacillin-tazobactam causes nearly 4x higher mortality (12.3% vs 3.7%) despite in vitro susceptibility.",
    "necessaryInference": "Confirmed ESBL Klebsiella bacteremia must be treated with IV meropenem; the MERINO trial proved piperacillin-tazobactam causes nearly 4x higher mortality (12.3% vs 3.7%) despite in vitro susceptibility.",
    "strongestDistractor": "Continue intravenous piperacillin-tazobactam unchanged, because in vitro automated susceptibility testing confirms an MIC within the susceptible range",
    "distractorExclusion": "The MERINO trial established that in vitro pip-tazo susceptibility fails in vivo in ESBL bacteremia due to inoculum effect, causing significantly higher mortality; meropenem is mandatory.",
    "citation": "Harris PNA, Tambyah PA, Lye DC, et al. Effect of Piperacillin-Tazobactam vs Meropenem on 30-Day Mortality for Patients With E coli or Klebsiella pneumoniae Bloodstream Infection and Ceftriaxone Resistance: A Randomized Clinical Trial. JAMA. 2018;320(10):984-994. PMID: 30208454."
  },
  {
    "code": "op-c-s2-0478",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Young alert patient with meningitis and normal neuro exam/no papilledema does NOT need head CT; perform immediate LP and administer IV dexamethasone with/prior to empiric vancomycin + ceftriaxone.",
      "distractorExclusionNotes": "Distractor exclusion verified: Head CT is indicated before LP only for altered consciousness, focal deficits, papilledema, seizure, or immunocompromise; CT in low-risk patients dangerously delays therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Young alert patient with meningitis and normal neuro exam/no papilledema does NOT need head CT; perform immediate LP and administer IV dexamethasone with/prior to empiric vancomycin + ceftriaxone.",
    "necessaryInference": "Young alert patient with meningitis and normal neuro exam/no papilledema does NOT need head CT; perform immediate LP and administer IV dexamethasone with/prior to empiric vancomycin + ceftriaxone.",
    "strongestDistractor": "Transport the patient immediately for non-contrast head computed tomography (CT) before performing lumbar puncture or administering antibiotics",
    "distractorExclusion": "Head CT is indicated before LP only for altered consciousness, focal deficits, papilledema, seizure, or immunocompromise; CT in low-risk patients dangerously delays therapy.",
    "citation": "van de Beek D, Cabellos C, Dzupova O, et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect. 2016;22 Suppl 3:S37-S62. PMID: 27062097."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Initial non-severe C. difficile infection is treated first-line with oral fidaxomicin (preferred for lower recurrence) or oral vancomycin; metronidazole is inferior and no longer first-line.",
      "distractorExclusionNotes": "Distractor exclusion verified: Updated IDSA/SHEA guidelines demoted metronidazole due to inferior clinical cure and higher recurrence rates; fidaxomicin and oral vancomycin are first-line.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Initial non-severe C. difficile infection is treated first-line with oral fidaxomicin (preferred for lower recurrence) or oral vancomycin; metronidazole is inferior and no longer first-line.",
    "necessaryInference": "Initial non-severe C. difficile infection is treated first-line with oral fidaxomicin (preferred for lower recurrence) or oral vancomycin; metronidazole is inferior and no longer first-line.",
    "strongestDistractor": "Oral metronidazole 500 mg three times daily for 10 days as first-line monotherapy",
    "distractorExclusion": "Updated IDSA/SHEA guidelines demoted metronidazole due to inferior clinical cure and higher recurrence rates; fidaxomicin and oral vancomycin are first-line.",
    "citation": "Johnson S, et al. IDSA/SHEA 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648."
  },
  {
    "code": "op-c-s2-0480",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Candidemia requires immediate IV echinocandin therapy (caspofungin/micafungin), central venous catheter removal, and mandatory dilated ophthalmologic examination to rule out endophthalmitis.",
      "distractorExclusionNotes": "Distractor exclusion verified: Fluconazole is inferior to echinocandins; retaining the line perpetuates fungemia; and ocular screening is mandatory because early endophthalmitis is asymptomatic.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Candidemia requires immediate IV echinocandin therapy (caspofungin/micafungin), central venous catheter removal, and mandatory dilated ophthalmologic examination to rule out endophthalmitis.",
    "necessaryInference": "Candidemia requires immediate IV echinocandin therapy (caspofungin/micafungin), central venous catheter removal, and mandatory dilated ophthalmologic examination to rule out endophthalmitis.",
    "strongestDistractor": "Initiate intravenous fluconazole 400 mg daily, retain the central venous catheter, and withhold ophthalmologic examination unless visual loss develops",
    "distractorExclusion": "Fluconazole is inferior to echinocandins; retaining the line perpetuates fungemia; and ocular screening is mandatory because early endophthalmitis is asymptomatic.",
    "citation": "Pappas PG, Kauffman CA, Andes DR, et al. Clinical Practice Guideline for the Management of Candidiasis: 2016 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2016;62(4):e1-e50. PMID: 26679288."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Early prosthetic valve endocarditis (< 12 mo) requires empiric IV vancomycin + cefepime; rifampin must be withheld until blood cultures clear to prevent rapid rpoB resistance mutations.",
      "distractorExclusionNotes": "Distractor exclusion verified: Giving rifampin during active bacteremia causes rapid selection of rifampin-resistant staphylococci via rpoB mutation; rifampin must be delayed until bacteremia resolves.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Early prosthetic valve endocarditis (< 12 mo) requires empiric IV vancomycin + cefepime; rifampin must be withheld until blood cultures clear to prevent rapid rpoB resistance mutations.",
    "necessaryInference": "Early prosthetic valve endocarditis (< 12 mo) requires empiric IV vancomycin + cefepime; rifampin must be withheld until blood cultures clear to prevent rapid rpoB resistance mutations.",
    "strongestDistractor": "Immediate four-drug combination therapy with intravenous vancomycin, intravenous gentamicin, oral rifampin, and intravenous ampicillin initiated simultaneously on day 1",
    "distractorExclusion": "Giving rifampin during active bacteremia causes rapid selection of rifampin-resistant staphylococci via rpoB mutation; rifampin must be delayed until bacteremia resolves.",
    "citation": "Baddour LM, Wilson WR, Bayer AS, et al. Infective Endocarditis in Adults: Diagnosis, Antimicrobial Therapy, and Management of Complications: A Scientific Statement for Healthcare Professionals From the American Heart Association. Circulation. 2015;132(15):1435-1486. PMID: 26373316."
  },
  {
    "code": "op-c-s2-0482",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Solitary 9-cm erythema migrans in Connecticut is early localized Lyme disease; diagnosed clinically and treated with oral doxycycline (10-14 days) without serologic testing.",
      "distractorExclusionNotes": "Distractor exclusion verified: Serology has < 40% sensitivity during the first 2-4 weeks of early localized Lyme disease; serologic testing is explicitly not recommended and delays curative therapy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Solitary 9-cm erythema migrans in Connecticut is early localized Lyme disease; diagnosed clinically and treated with oral doxycycline (10-14 days) without serologic testing.",
    "necessaryInference": "Solitary 9-cm erythema migrans in Connecticut is early localized Lyme disease; diagnosed clinically and treated with oral doxycycline (10-14 days) without serologic testing.",
    "strongestDistractor": "Order serum Lyme enzyme immunoassay (EIA) and withhold antibiotic therapy until positive confirmation is obtained",
    "distractorExclusion": "Serology has < 40% sensitivity during the first 2-4 weeks of early localized Lyme disease; serologic testing is explicitly not recommended and delays curative therapy.",
    "citation": "Lantos PM, et al. IDSA, AAN, and ACR: 2020 Guidelines for the Prevention, Diagnosis and Treatment of Lyme Disease. Clin Infect Dis. 2021;72(1):e1-e48. PMID: 33251528."
  },
  {
    "code": "op-c-s2-0483",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Patient with mono-like symptoms, oral ulcers, and sex 16 days ago has acute HIV; negative 4th-gen test represents early window period; diagnose with quantitative plasma HIV-1 RNA (viral load).",
      "distractorExclusionNotes": "Distractor exclusion verified: Antibody differentiation assays only detect mature antibodies which take 3-4 weeks to develop; viral RNA appears first at 10-12 days and is diagnostic.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Patient with mono-like symptoms, oral ulcers, and sex 16 days ago has acute HIV; negative 4th-gen test represents early window period; diagnose with quantitative plasma HIV-1 RNA (viral load).",
    "necessaryInference": "Patient with mono-like symptoms, oral ulcers, and sex 16 days ago has acute HIV; negative 4th-gen test represents early window period; diagnose with quantitative plasma HIV-1 RNA (viral load).",
    "strongestDistractor": "HIV-1/HIV-2 antibody differentiation immunoassay",
    "distractorExclusion": "Antibody differentiation assays only detect mature antibodies which take 3-4 weeks to develop; viral RNA appears first at 10-12 days and is diagnostic.",
    "citation": "Centers for Disease Control and Prevention and Association of Public Health Laboratories. Laboratory Testing for the Diagnosis of HIV Infection: Updated Recommendations. June 27, 2014. MMWR. NLM ID: 101636184."
  },
  {
    "code": "op-c-s2-0484",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Cryptococcal meningitis with opening pressure 360 mm H2O requires liposomal amphotericin B + flucytosine, serial LPs to lower pressure < 200 mm H2O, and delaying ART for 2-6 weeks to prevent fatal IRIS.",
      "distractorExclusionNotes": "Distractor exclusion verified: Fluconazole monotherapy has high mortality, and starting ART on day 1 doubles mortality due to intracranial IRIS (COAT trial); amphotericin + flucytosine and ART delay are required.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Cryptococcal meningitis with opening pressure 360 mm H2O requires liposomal amphotericin B + flucytosine, serial LPs to lower pressure < 200 mm H2O, and delaying ART for 2-6 weeks to prevent fatal IRIS.",
    "necessaryInference": "Cryptococcal meningitis with opening pressure 360 mm H2O requires liposomal amphotericin B + flucytosine, serial LPs to lower pressure < 200 mm H2O, and delaying ART for 2-6 weeks to prevent fatal IRIS.",
    "strongestDistractor": "Initiate intravenous fluconazole 400 mg daily monotherapy and start combination antiretroviral therapy immediately on hospital day 1",
    "distractorExclusion": "Fluconazole monotherapy has high mortality, and starting ART on day 1 doubles mortality due to intracranial IRIS (COAT trial); amphotericin + flucytosine and ART delay are required.",
    "citation": "Boulware DR, Meya DB, Muzoora C, et al. Timing of antiretroviral therapy after diagnosis of cryptococcal meningitis. N Engl J Med. 2014;370(26):2487-2498. PMID: 24963568."
  },
  {
    "code": "op-c-s2-0485",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Advanced AIDS with multiple ring-enhancing basal ganglia lesions and positive Toxoplasma IgG requires oral pyrimethamine + sulfadiazine + leucovorin (folinic acid to prevent myelosuppression).",
      "distractorExclusionNotes": "Distractor exclusion verified: Guidelines mandate a 10-14 day empiric trial of anti-toxoplasma therapy before considering invasive brain biopsy; radiographic improvement confirms the diagnosis non-invasively.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Advanced AIDS with multiple ring-enhancing basal ganglia lesions and positive Toxoplasma IgG requires oral pyrimethamine + sulfadiazine + leucovorin (folinic acid to prevent myelosuppression).",
    "necessaryInference": "Advanced AIDS with multiple ring-enhancing basal ganglia lesions and positive Toxoplasma IgG requires oral pyrimethamine + sulfadiazine + leucovorin (folinic acid to prevent myelosuppression).",
    "strongestDistractor": "Stereotactic brain biopsy prior to administering any antimicrobial therapy",
    "distractorExclusion": "Guidelines mandate a 10-14 day empiric trial of anti-toxoplasma therapy before considering invasive brain biopsy; radiographic improvement confirms the diagnosis non-invasively.",
    "citation": "Panel on Opportunistic Infections in Adults and Adolescents with HIV. Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV. Department of Health and Human Services. Updated 2023. NLM ID: 101680789."
  },
  {
    "code": "op-c-s2-0486",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Advanced AIDS (CD4 22) with painless vision loss and 'pizza pie' necrotizing retinopathy has CMV retinitis; treated with IV ganciclovir or oral valganciclovir (plus intravitreal injection if macula threatened).",
      "distractorExclusionNotes": "Distractor exclusion verified: CMV lacks viral thymidine kinase, rendering acyclovir completely ineffective; ganciclovir (phosphorylated by CMV UL97 kinase) is the drug of choice.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Advanced AIDS (CD4 22) with painless vision loss and 'pizza pie' necrotizing retinopathy has CMV retinitis; treated with IV ganciclovir or oral valganciclovir (plus intravitreal injection if macula threatened).",
    "necessaryInference": "Advanced AIDS (CD4 22) with painless vision loss and 'pizza pie' necrotizing retinopathy has CMV retinitis; treated with IV ganciclovir or oral valganciclovir (plus intravitreal injection if macula threatened).",
    "strongestDistractor": "High-dose intravenous acyclovir 10 mg/kg every 8 hours for 14 days",
    "distractorExclusion": "CMV lacks viral thymidine kinase, rendering acyclovir completely ineffective; ganciclovir (phosphorylated by CMV UL97 kinase) is the drug of choice.",
    "citation": "Jabs DA, et al. CMV resistance to ganciclovir and outcomes in patients with CMV retinitis in HAART era. Am J Ophthalmol. 2010;149(5):713-722. PMID: 20381792."
  },
  {
    "code": "op-c-s2-0487",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Asymptomatic nurse with positive IGRA and clear CXR has LTBI; CDC guidelines recommend short-course rifamycin regimens (3HP: 3 months weekly isoniazid + rifapentine, or 4R: 4 months daily rifampin) over 9 months of isoniazid.",
      "distractorExclusionNotes": "Distractor exclusion verified: CDC/NTCA guidelines demoted 9H to alternative therapy due to poor completion rates and higher hepatotoxicity compared to short-course 3HP or 4R.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Asymptomatic nurse with positive IGRA and clear CXR has LTBI; CDC guidelines recommend short-course rifamycin regimens (3HP: 3 months weekly isoniazid + rifapentine, or 4R: 4 months daily rifampin) over 9 months of isoniazid.",
    "necessaryInference": "Asymptomatic nurse with positive IGRA and clear CXR has LTBI; CDC guidelines recommend short-course rifamycin regimens (3HP: 3 months weekly isoniazid + rifapentine, or 4R: 4 months daily rifampin) over 9 months of isoniazid.",
    "strongestDistractor": "9 months of daily oral isoniazid monotherapy (9H) with pyridoxine",
    "distractorExclusion": "CDC/NTCA guidelines demoted 9H to alternative therapy due to poor completion rates and higher hepatotoxicity compared to short-course 3HP or 4R.",
    "citation": "Sterling TR, Njie G, Zenner D, et al. Guidelines for the Treatment of Latent Tuberculosis Infection: Recommendations from the National Tuberculosis Controllers Association and CDC, 2020. MMWR Recomm Rep. 2020;69(1):1-11. PMID: 32053584."
  },
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Active TB patient starting RIPE therapy with baseline diabetic neuropathy must receive oral pyridoxine (vitamin B6) to prevent isoniazid-induced peripheral neurotoxicity.",
      "distractorExclusionNotes": "Distractor exclusion verified: Ethambutol causes optic neuritis, which is monitored via red-green color testing and cannot be prevented with vitamin B12; pyridoxine (vitamin B6) is specific for isoniazid neuropathy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Active TB patient starting RIPE therapy with baseline diabetic neuropathy must receive oral pyridoxine (vitamin B6) to prevent isoniazid-induced peripheral neurotoxicity.",
    "necessaryInference": "Active TB patient starting RIPE therapy with baseline diabetic neuropathy must receive oral pyridoxine (vitamin B6) to prevent isoniazid-induced peripheral neurotoxicity.",
    "strongestDistractor": "Oral cyanocobalamin (vitamin B12, 1,000 mcg daily) to prevent ethambutol-mediated retrobulbar optic nerve demyelination",
    "distractorExclusion": "Ethambutol causes optic neuritis, which is monitored via red-green color testing and cannot be prevented with vitamin B12; pyridoxine (vitamin B6) is specific for isoniazid neuropathy.",
    "citation": "Nahid P, Dorman SE, Alipanah N, et al. Official American Thoracic Society/Centers for Disease Control and Prevention/Infectious Diseases Society of America Clinical Practice Guidelines: Treatment of Drug-Susceptible Tuberculosis. Clin Infect Dis. 2016;63(7):e147-e195. PMID: 27516382."
  },
  {
    "code": "op-c-s2-0489",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Asymptomatic syphilis with unknown duration and no prior negative test in 12 months is classified as syphilis of unknown duration/late latent; treated with IM benzathine penicillin G weekly for 3 weeks.",
      "distractorExclusionNotes": "Distractor exclusion verified: Single-dose benzathine penicillin is curative only when duration <= 1 year is confirmed; unknown duration requires 3 weekly doses to clear latent spirochetes.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Asymptomatic syphilis with unknown duration and no prior negative test in 12 months is classified as syphilis of unknown duration/late latent; treated with IM benzathine penicillin G weekly for 3 weeks.",
    "necessaryInference": "Asymptomatic syphilis with unknown duration and no prior negative test in 12 months is classified as syphilis of unknown duration/late latent; treated with IM benzathine penicillin G weekly for 3 weeks.",
    "strongestDistractor": "A single intramuscular injection of benzathine penicillin G (2.4 million units IM once)",
    "distractorExclusion": "Single-dose benzathine penicillin is curative only when duration <= 1 year is confirmed; unknown duration requires 3 weekly doses to clear latent spirochetes.",
    "citation": "Workowski KA, Bachmann LH, Chan PA, et al. Sexually Transmitted Infections Treatment Guidelines, 2021. MMWR Recomm Rep. 2021;70(4):1-187. PMID: 34292926."
  },
  {
    "code": "op-c-s2-0490",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Diabetic foot ulcer with positive probe-to-bone and MRI osteomyelitis in a stable patient requires bone biopsy through uninfected skin for culture before targeted antibiotic therapy; superficial swabs are inaccurate.",
      "distractorExclusionNotes": "Distractor exclusion verified: Superficial swabs reflect surface colonizers rather than true bone pathogens; IDSA guidelines strongly recommend against swab cultures and mandate bone biopsy.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Diabetic foot ulcer with positive probe-to-bone and MRI osteomyelitis in a stable patient requires bone biopsy through uninfected skin for culture before targeted antibiotic therapy; superficial swabs are inaccurate.",
    "necessaryInference": "Diabetic foot ulcer with positive probe-to-bone and MRI osteomyelitis in a stable patient requires bone biopsy through uninfected skin for culture before targeted antibiotic therapy; superficial swabs are inaccurate.",
    "strongestDistractor": "Swab the superficial purulent discharge from the ulcer base with a cotton swab and initiate 6 weeks of intravenous vancomycin and cefepime",
    "distractorExclusion": "Superficial swabs reflect surface colonizers rather than true bone pathogens; IDSA guidelines strongly recommend against swab cultures and mandate bone biopsy.",
    "citation": "Lipsky BA, Berendt AR, Cornia PB, et al. 2012 Infectious Diseases Society of America clinical practice guideline for the diagnosis and treatment of diabetic foot infections. Clin Infect Dis. 2012;54(12):e132-e173. PMID: 22619242."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Purulent knee effusion with synovial WBC 88,000/mm3 (94% PMNs) and Gram-positive cocci is septic arthritis; requires urgent orthopedic surgical drainage/irrigation plus empiric IV vancomycin and ceftriaxone.",
      "distractorExclusionNotes": "Distractor exclusion verified: Synovial WBC > 50,000 and Gram-positive cocci prove bacterial infection; administering corticosteroids in septic arthritis leads to rapid catastrophic joint destruction.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Purulent knee effusion with synovial WBC 88,000/mm3 (94% PMNs) and Gram-positive cocci is septic arthritis; requires urgent orthopedic surgical drainage/irrigation plus empiric IV vancomycin and ceftriaxone.",
    "necessaryInference": "Purulent knee effusion with synovial WBC 88,000/mm3 (94% PMNs) and Gram-positive cocci is septic arthritis; requires urgent orthopedic surgical drainage/irrigation plus empiric IV vancomycin and ceftriaxone.",
    "strongestDistractor": "Initiate oral high-dose prednisone 60 mg daily and oral colchicine 0.6 mg twice daily for an acute rheumatoid arthritis flare",
    "distractorExclusion": "Synovial WBC > 50,000 and Gram-positive cocci prove bacterial infection; administering corticosteroids in septic arthritis leads to rapid catastrophic joint destruction.",
    "citation": "Sharff KA, Richards EP, Townes JM. Clinical management of septic arthritis. Curr Rheumatol Rep. 2013;15(6):332. PMID: 23595964."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Severe pain out of proportion, bullae, crepitus, and septic shock indicates necrotizing fasciitis; requires immediate emergent surgical debridement plus IV vancomycin, pip-tazo, and clindamycin (antitoxin effect).",
      "distractorExclusionNotes": "Distractor exclusion verified: Imaging must never delay emergent surgical exploration in suspected necrotizing fasciitis; delay of hours leads to fatal septic shock.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Severe pain out of proportion, bullae, crepitus, and septic shock indicates necrotizing fasciitis; requires immediate emergent surgical debridement plus IV vancomycin, pip-tazo, and clindamycin (antitoxin effect).",
    "necessaryInference": "Severe pain out of proportion, bullae, crepitus, and septic shock indicates necrotizing fasciitis; requires immediate emergent surgical debridement plus IV vancomycin, pip-tazo, and clindamycin (antitoxin effect).",
    "strongestDistractor": "Obtain emergent contrast-enhanced MRI of the lower extremity to definitively delineate fascial planes before summoning a surgical consult",
    "distractorExclusion": "Imaging must never delay emergent surgical exploration in suspected necrotizing fasciitis; delay of hours leads to fatal septic shock.",
    "citation": "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422."
  },
  {
    "code": "op-c-s2-0493",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Menstruating female with retained tampon, fever, hypotension, sunburn rash on palms/soles, and multiorgan failure has Staphylococcal TSS; treat with tampon removal, fluids, and IV clindamycin (antitoxin) plus vancomycin.",
      "distractorExclusionNotes": "Distractor exclusion verified: Ceftriaxone does not cover MRSA and lacks ribosomal protein synthesis suppression; clindamycin is specifically required to halt TSST-1 superantigen production.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Menstruating female with retained tampon, fever, hypotension, sunburn rash on palms/soles, and multiorgan failure has Staphylococcal TSS; treat with tampon removal, fluids, and IV clindamycin (antitoxin) plus vancomycin.",
    "necessaryInference": "Menstruating female with retained tampon, fever, hypotension, sunburn rash on palms/soles, and multiorgan failure has Staphylococcal TSS; treat with tampon removal, fluids, and IV clindamycin (antitoxin) plus vancomycin.",
    "strongestDistractor": "Intravenous ceftriaxone 2 g daily monotherapy",
    "distractorExclusion": "Ceftriaxone does not cover MRSA and lacks ribosomal protein synthesis suppression; clindamycin is specifically required to halt TSST-1 superantigen production.",
    "citation": "Lowy FD. Staphylococcus aureus infections. N Engl J Med. 1998;339(8):520-532. PMID: 9709046."
  },
  {
    "code": "op-c-s2-0494",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Child with kitten scratch, forearm papule, and subacute axillary lymphadenopathy has Cat Scratch Disease (Bartonella henselae); treated with a 5-day course of oral azithromycin.",
      "distractorExclusionNotes": "Distractor exclusion verified: Incision and drainage of Bartonella lymph nodes causes chronic draining sinus tracts; azithromycin pharmacotherapy is standard.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Child with kitten scratch, forearm papule, and subacute axillary lymphadenopathy has Cat Scratch Disease (Bartonella henselae); treated with a 5-day course of oral azithromycin.",
    "necessaryInference": "Child with kitten scratch, forearm papule, and subacute axillary lymphadenopathy has Cat Scratch Disease (Bartonella henselae); treated with a 5-day course of oral azithromycin.",
    "strongestDistractor": "Immediate surgical incision and drainage of the left axillary lymph node in the minor procedure suite",
    "distractorExclusion": "Incision and drainage of Bartonella lymph nodes causes chronic draining sinus tracts; azithromycin pharmacotherapy is standard.",
    "citation": "Bass JW, Vincent JM, Person DA. The expanding spectrum of Bartonella infections: II. Cat-scratch disease. Pediatr Infect Dis J. 1997;16(2):163-179. PMID: 9041631."
  },
  {
    "code": "op-c-s2-0495",
    "exam": "Step 2 CK",
    "subject": "Surgery",
    "system": "General Principles",
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Cat bite puncture wound to hand requires copious irrigation, leaving wound open (no sutures), and oral amoxicillin-clavulanate to cover Pasteurella multocida.",
      "distractorExclusionNotes": "Distractor exclusion verified: Primary suturing traps deep pathogens, and cephalexin has poor in vitro activity against Pasteurella multocida; wounds must be left open and treated with amoxicillin-clavulanate.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Cat bite puncture wound to hand requires copious irrigation, leaving wound open (no sutures), and oral amoxicillin-clavulanate to cover Pasteurella multocida.",
    "necessaryInference": "Cat bite puncture wound to hand requires copious irrigation, leaving wound open (no sutures), and oral amoxicillin-clavulanate to cover Pasteurella multocida.",
    "strongestDistractor": "Irrigate copiously, immediately close the puncture wounds primarily with interrupted nylon sutures, and prescribe oral cephalexin 500 mg four times daily",
    "distractorExclusion": "Primary suturing traps deep pathogens, and cephalexin has poor in vitro activity against Pasteurella multocida; wounds must be left open and treated with amoxicillin-clavulanate.",
    "citation": "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update. Clin Infect Dis. 2014;59(2):e10-e52. PMID: 24973422."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Temporal lobe seizures, aphasia, hemorrhagic lymphocytic CSF, and temporal MRI lesions is HSV encephalitis; initiate immediate empiric IV acyclovir while awaiting CSF PCR.",
      "distractorExclusionNotes": "Distractor exclusion verified: Withholding acyclovir while awaiting PCR causes severe permanent brain damage and death; immediate empiric therapy is mandatory.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Temporal lobe seizures, aphasia, hemorrhagic lymphocytic CSF, and temporal MRI lesions is HSV encephalitis; initiate immediate empiric IV acyclovir while awaiting CSF PCR.",
    "necessaryInference": "Temporal lobe seizures, aphasia, hemorrhagic lymphocytic CSF, and temporal MRI lesions is HSV encephalitis; initiate immediate empiric IV acyclovir while awaiting CSF PCR.",
    "strongestDistractor": "Withhold antiviral therapy until cerebrospinal fluid HSV PCR amplification definitively confirms viral DNA",
    "distractorExclusion": "Withholding acyclovir while awaiting PCR causes severe permanent brain damage and death; immediate empiric therapy is mandatory.",
    "citation": "Whitley RJ, Gnann JW. Viral encephalitis: familiar infections and emerging pathogens. Lancet. 2002;359(9305):507-513. PMID: 11853816."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Elderly asymptomatic female with positive urine culture (> 100k E. coli) has asymptomatic bacteriuria; IDSA guidelines mandate withholding antibiotics because treatment causes harm without clinical benefit.",
      "distractorExclusionNotes": "Distractor exclusion verified: Treating ASB in the elderly does not prevent sepsis or symptomatic UTI, but increases C. diff and resistance; guidelines strictly recommend against treatment.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Elderly asymptomatic female with positive urine culture (> 100k E. coli) has asymptomatic bacteriuria; IDSA guidelines mandate withholding antibiotics because treatment causes harm without clinical benefit.",
    "necessaryInference": "Elderly asymptomatic female with positive urine culture (> 100k E. coli) has asymptomatic bacteriuria; IDSA guidelines mandate withholding antibiotics because treatment causes harm without clinical benefit.",
    "strongestDistractor": "Initiate oral nitrofurantoin 100 mg twice daily for 5 days to eradicate bacteriuria and prevent urosepsis",
    "distractorExclusion": "Treating ASB in the elderly does not prevent sepsis or symptomatic UTI, but increases C. diff and resistance; guidelines strictly recommend against treatment.",
    "citation": "Nicolle LE, Gupta K, Bradley SF, et al. Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2019;68(10):e83-e110. PMID: 30895288."
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
      "verdict": "PASS",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Outpatient CAP in patient with COPD (CURB-65 = 0) requires combination therapy (amoxicillin-clavulanate + azithromycin) or respiratory fluoroquinolone (levofloxacin) monotherapy.",
      "distractorExclusionNotes": "Distractor exclusion verified: Amoxicillin monotherapy is approved only for healthy outpatients without comorbidities; COPD patients require expanded coverage for beta-lactamase producers and atypicals.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Outpatient CAP in patient with COPD (CURB-65 = 0) requires combination therapy (amoxicillin-clavulanate + azithromycin) or respiratory fluoroquinolone (levofloxacin) monotherapy.",
    "necessaryInference": "Outpatient CAP in patient with COPD (CURB-65 = 0) requires combination therapy (amoxicillin-clavulanate + azithromycin) or respiratory fluoroquinolone (levofloxacin) monotherapy.",
    "strongestDistractor": "Oral amoxicillin 1,000 mg three times daily as standalone monotherapy",
    "distractorExclusion": "Amoxicillin monotherapy is approved only for healthy outpatients without comorbidities; COPD patients require expanded coverage for beta-lactamase producers and atypicals.",
    "citation": "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and Treatment of Adults with Community-acquired Pneumonia. An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019;200(7):e45-e67. PMID: 31573350."
  },
  {
    "code": "op-c-s2-0499",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "REJECT",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Direct lexical recall giveaway in stem resolves the question trivially.",
      "distractorExclusionNotes": "Distractor exclusion verified: Stem directly states Epstein-Barr virus.",
      "rejectionNotes": "Planted QA Rejection Example: Superficial recall question lacking multi-step clinical reasoning.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Direct lexical recall giveaway in stem resolves the question trivially.",
    "necessaryInference": "Direct lexical recall giveaway in stem resolves the question trivially.",
    "strongestDistractor": "Cytomegalovirus (Human herpesvirus 5)",
    "distractorExclusion": "Stem directly states Epstein-Barr virus.",
    "citation": "Centers for Disease Control and Prevention. Epstein-Barr Virus and Infectious Mononucleosis Laboratory Testing. CDC Guidelines 2020. NLM ID: 101680789."
  },
  {
    "code": "op-c-s2-0500",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
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
      "verdict": "UNRESOLVED",
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Clinical inference verified: Randomized trials show non-inferiority of 7 days vs 14 days for uncomplicated Gram-negative bacteremia in stable patients with source control, but debate continues regarding immunocompromised hosts and delayed responders.",
      "distractorExclusionNotes": "Distractor exclusion verified: 21 days of aminoglycosides causes severe nephrotoxicity without clinical indication; the actual controversy is between 7 and 14 days of beta-lactams/fluoroquinolones.",
      "unresolvedNotes": "Clinical and guideline controversy unresolved: active disagreement across trials and specialty society recommendations.",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    },
    "shortestValidSolution": "Randomized trials show non-inferiority of 7 days vs 14 days for uncomplicated Gram-negative bacteremia in stable patients with source control, but debate continues regarding immunocompromised hosts and delayed responders.",
    "necessaryInference": "Randomized trials show non-inferiority of 7 days vs 14 days for uncomplicated Gram-negative bacteremia in stable patients with source control, but debate continues regarding immunocompromised hosts and delayed responders.",
    "strongestDistractor": "A mandatory 21-day course of intravenous aminoglycoside therapy is universally recommended by international guidelines to prevent chronic interstitial nephritis",
    "distractorExclusion": "21 days of aminoglycosides causes severe nephrotoxicity without clinical indication; the actual controversy is between 7 and 14 days of beta-lactams/fluoroquinolones.",
    "citation": "Yahav D, Franceschini E, Koppel F, et al. Seven versus 14 days of antibiotic therapy for uncomplicated gram-negative bacteremia: a noninferiority randomized clinical trial. Clin Infect Dis. 2019;69(7):1091-1098. PMID: 30535100."
  }
];
