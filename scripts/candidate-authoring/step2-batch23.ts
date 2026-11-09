import { CandidateSpec } from './types';

export const step2Batch23: CandidateSpec[] = [
  {
    "code": "op-c-s2-0551",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Giant Cell Arteritis Immediate Glucocorticoids Prior to Biopsy",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman presents with a severe, throbbing right temporal headache that has worsened over 2 weeks. She reports pain in her jaw muscles when chewing meat (jaw claudication) and transient episodes of blurred vision in her right eye over the past 24 hours. Physical examination reveals an exquisitely tender, thickened, nodular, pulseless right temporal artery and bilateral scalp tenderness when brushing her hair. Funduscopic examination shows mild optic disc pallor and edema in the right eye. Laboratory studies show: ESR 98 mm/h (markedly elevated; normal < 30 mm/h), C-reactive protein 42 mg/L (elevated; normal < 5 mg/L), and platelet count 480,000/microL. A temporal artery biopsy is requested, but the vascular surgery team cannot perform the procedure until tomorrow afternoon. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Initiate immediate high-dose intravenous methylprednisolone (or high-dose oral prednisone) without waiting for the temporal artery biopsy",
        "Giant cell arteritis (temporal arteritis) is a rheumatologic emergency in patients >50 years presenting with new headache, jaw claudication (most specific symptom), scalp tenderness, and elevated inflammatory markers (ESR > 50-100 mm/h). The most devastating complication is PERMANENT UNILATERAL OR BILATERAL BLINDNESS due to anterior ischemic optic neuropathy (occlusion of the posterior ciliary arteries). When GCA is suspected (especially with impending visual symptoms e.g. amaurosis fugax or disc edema), the ABSOLUTE FIRST STEP is IMMEDIATE HIGH-DOSE GLUCOCORTICOIDS (IV pulse methylprednisolone 1 g/day if visual symptoms are present, or oral prednisone 1 mg/kg/day). Glucocorticoid therapy must NEVER BE DELAYED for biopsy. Pathologic inflammatory changes on temporal artery biopsy persist for up to 2-4 weeks after steroid initiation, so treatment will not invalidate the biopsy."
      ],
      [
        "Defer glucocorticoid therapy until the temporal artery biopsy specimen is obtained to avoid false-negative histopathology",
        "Delaying glucocorticoids for biopsy carries an unacceptably high risk of irreversible blindness in the contralateral eye within 24-48 hours."
      ],
      [
        "Perform an immediate lumbar puncture to rule out cryptococcal meningitis",
        "Temporal artery tenderness, jaw claudication, and disc pallor point decisively to vascular arteritis, not meningitis; LP unnecessarily delays urgent steroid therapy."
      ],
      [
        "Initiate oral methotrexate monotherapy and schedule an outpatient temporal artery duplex ultrasound",
        "Methotrexate is an adjunct for relapses; acute visual-threat GCA requires immediate high-dose glucocorticoids to preserve vision."
      ],
      [
        "Administer low-dose oral prednisone (15 mg/day) and recheck ESR in 1 week",
        "Low-dose prednisone (15 mg) is the treatment for isolated Polymyalgia Rheumatica; GCA requires high-dose corticosteroids (60 mg/day or IV pulse) to prevent blindness."
      ]
    ],
    "shortestValidSolution": "Age > 50 + jaw claudication + tender temporal artery + visual blurring + ESR 98 = GCA -> immediate high-dose corticosteroids BEFORE biopsy (prevents blindness).",
    "necessaryInference": "Prioritize emergency vision preservation in giant cell arteritis: initiate high-dose steroids immediately without waiting for temporal artery biopsy.",
    "strongestDistractor": "Defer glucocorticoid therapy until the temporal artery biopsy specimen is obtained to avoid false-negative histopathology",
    "distractorExclusion": "Histopathology remains diagnostic for up to 2-4 weeks after initiating steroids; withholding therapy causes permanent ischemic blindness.",
    "citation": "Salvarani C, et al. Polymyalgia rheumatica and giant-cell arteritis. N Engl J Med. 2012;367(8):729-735. PMID: 22913683.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0552",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Polymyalgia Rheumatica Low-Dose Prednisone Response",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman presents with severe aching pain and stiffness in her neck, bilateral shoulders, and hips that has worsened over the past month. She reports that her stiffness is severe upon waking, lasting for >90 minutes, making it difficult to put on her coat or rise from a low chair. She denies muscle weakness, jaw claudication, headaches, or visual changes. Physical examination reveals normal muscle strength (5/5 in all proximal and distal muscle groups once pain is overcome) and active range of motion of the shoulders is limited by pain; there is no joint swelling, tenderness, or muscle atrophy. Laboratory evaluation shows: ESR 72 mm/h, CRP 28 mg/L, and normal serum creatine kinase (78 U/L; normal 30-200 U/L). Rheumatoid factor and anti-CCP antibodies are negative. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Low-dose oral prednisone (12.5 to 20 mg daily)",
        "Polymyalgia rheumatica (PMR) is an inflammatory disorder of older adults (>50 years) characterized by: (1) Bilateral aching and MORNING STIFFNESS >45 minutes affecting the pelvic and shoulder girdles and neck; (2) Normal muscle strength on objective testing (pain limits motion, but true weakness is absent); (3) Marked elevation of acute phase reactants (ESR > 40-50 mm/h, high CRP); and (4) COMPLETELY NORMAL CREATINE KINASE (distinguishing PMR from polymyositis/dermatomyositis). The hallmark of PMR is a DRAMATIC, PROMPT CLINICAL RESPONSE to LOW-DOSE ORAL GLUCOCORTICOIDS (prednisone 12.5-20 mg/day), with >70% symptom relief typically observed within 48 to 72 hours. Lack of dramatic response to low-dose prednisone should prompt diagnostic reconsideration."
      ],
      [
        "High-dose intravenous methylprednisolone (1,000 mg daily for 3 days)",
        "High-dose IV steroids are reserved for giant cell arteritis with visual involvement, not uncomplicated isolated PMR."
      ],
      [
        "Oral methotrexate monotherapy without corticosteroids",
        "Methotrexate is an adjunct for refractory or relapsing PMR; low-dose prednisone is the universally recommended first-line therapy."
      ],
      [
        "Oral celecoxib (NSAID) and intensive outpatient physical therapy",
        "NSAIDs provide inadequate relief for PMR and fail to suppress systemic inflammation; low-dose corticosteroids are required."
      ],
      [
        "Oral azathioprine combined with monthly intravenous immunoglobulin",
        "Azathioprine and IVIG are used for inflammatory myopathies, not uncomplicated polymyalgia rheumatica."
      ]
    ],
    "shortestValidSolution": "Age > 50 + shoulder/hip girdle morning stiffness > 45 min + normal CK + ESR 72 = Polymyalgia Rheumatica -> Low-dose oral prednisone (15-20 mg/day).",
    "necessaryInference": "Identify polymyalgia rheumatica (normal CK, high ESR, aching stiffness) and recognize its diagnostic prompt response to low-dose oral prednisone.",
    "strongestDistractor": "High-dose intravenous methylprednisolone (1,000 mg daily for 3 days)",
    "distractorExclusion": "High-dose IV steroids are indicated for giant cell arteritis (cranial symptoms/vision loss); PMR without GCA responds rapidly to low-dose oral prednisone (15-20 mg).",
    "citation": "Dejaco C, et al. 2015 Recommendations for the management of polymyalgia rheumatica. Ann Rheum Dis. 2015;74(10):1799-1807. PMID: 26359488.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0553",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "GPA Induction Therapy Rituximab vs Cyclophosphamide",
    "provisionalDifficulty": 5,
    "stem": "A 52-year-old man presents with chronic recurrent bloody nasal discharge, nasal bridge collapse ('saddle-nose' deformity), bilateral hearing loss, and a persistent cough productive of bloody sputum. Over the past 2 weeks, he has developed dark urine and lower extremity swelling. Blood pressure is 156/94 mm Hg. Chest CT demonstrates multiple thick-walled cavitary nodules in both lungs. Laboratory evaluation reveals: serum creatinine 3.6 mg/dL (baseline 1.0 mg/dL), BUN 48 mg/dL, and a strongly positive cytoplasmic antineutrophil cytoplasmic antibody (c-ANCA) with high-titer anti-proteinase 3 (anti-PR3) antibodies. Urinalysis demonstrates 3+ blood, dysmorphic RBCs, and red blood cell casts. Renal biopsy confirms pauci-immune crescentic necrotizing glomerulonephritis. Which of the following represents the standard first-line remission induction therapy for this patient?",
    "choices": [
      [
        "Rituximab (anti-CD20 monoclonal antibody) or cyclophosphamide, combined with high-dose glucocorticoids",
        "Granulomatosis with polyangiitis (GPA, formerly Wegener granulomatosis) is a severe, life-threatening small-vessel necrotizing vasculitis characterized by PR3-ANCA (c-ANCA), upper/lower respiratory granulomas (cavitary lung nodules, saddle nose, chronic sinusitis), and pauci-immune crescentic glomerulonephritis. Remission induction for organ- or life-threatening GPA (active glomerulonephritis or pulmonary hemorrhage) requires aggressive immunosuppression: HIGH-DOSE GLUCOCORTICOIDS (intravenous pulse methylprednisolone followed by oral prednisone) COMBINED WITH EITHER: (1) RITUXIMAB (anti-CD20 B-cell depleting antibody; RAVE trial showed non-inferiority to cyclophosphamide, and superiority for relapsing disease); or (2) INTRAVENOUS/ORAL CYCLOPHOSPHAMIDE. Rituximab is generally preferred due to avoidance of cyclophosphamide-induced gonadal failure and bladder toxicity."
      ],
      [
        "Oral methotrexate combined with low-dose oral prednisone",
        "Methotrexate is restricted to non-severe, non-organ-threatening GPA (sinusitis without renal or alveolar involvement); crescentic GN requires rituximab or cyclophosphamide."
      ],
      [
        "Oral azathioprine monotherapy",
        "Azathioprine is effective for REMISSION MAINTENANCE, but is significantly inferior and inadequate for acute induction of severe renal/pulmonary GPA."
      ],
      [
        "Intravenous immunoglobulin alone without corticosteroids",
        "IVIG alone does not induce remission in necrotizing crescentic vasculitis and is reserved for refractory adjuvant therapy."
      ],
      [
        "Long-term oral trimethoprim-sulfamethoxazole monotherapy",
        "TMP-SMX reduces upper airway relapses in quiescent localized disease, but has zero efficacy for induction of life-threatening crescentic glomerulonephritis."
      ]
    ],
    "shortestValidSolution": "Cavitary lung nodules + saddle nose + c-ANCA (PR3) + crescentic GN = Severe GPA -> Induction with Rituximab (or cyclophosphamide) + high-dose corticosteroids.",
    "necessaryInference": "Select guideline induction therapy for organ-threatening GPA (RAVE trial): rituximab or cyclophosphamide combined with high-dose glucocorticoids.",
    "strongestDistractor": "Oral methotrexate combined with low-dose oral prednisone",
    "distractorExclusion": "Methotrexate is indicated only for mild, non-organ-threatening disease; active necrotizing crescentic GN requires rituximab or cyclophosphamide to prevent renal failure.",
    "citation": "Stone JH, et al. Rituximab versus cyclophosphamide for ANCA-associated vasculitis (RAVE trial). N Engl J Med. 2010;363(3):221-232. PMID: 20647199.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0554",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Respiratory",
    "topic": "EGPA Churg-Strauss Eosinophilia and Mononeuritis Multiplex",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman with a 10-year history of severe adult-onset asthma and chronic allergic rhinosinusitis presents with numbness and weakness in her feet. Over the past week, she developed acute right foot drop (inability to dorsiflex the right ankle) followed 3 days later by acute left wrist drop (inability to extend the left wrist). Physical examination reveals scattered palpable purpura on her lower legs, expiratory wheezing bilaterally, and asymmetric sensorimotor deficits consistent with mononeuritis multiplex. Laboratory evaluation demonstrates: WBC count 16,800/microL with 38% eosinophils (absolute eosinophil count 6,380/microL; markedly elevated, normal < 500/microL), serum IgE 1,450 IU/mL, and positive perinuclear antineutrophil cytoplasmic antibodies (p-ANCA / anti-myeloperoxidase [anti-MPO]). Chest radiograph demonstrates transient, migratory pulmonary opacities. Which of the following is the diagnosis?",
    "choices": [
      [
        "Eosinophilic granulomatosis with polyangiitis (EGPA / Churg-Strauss syndrome)",
        "Eosinophilic granulomatosis with polyangiitis (EGPA, formerly Churg-Strauss) is a necrotizing small-vessel vasculitis characterized by three distinct phases: (1) ALLERGIC PHASE: severe, difficult-to-control asthma and allergic rhinitis; (2) EOSINOPHILIC PHASE: marked peripheral blood eosinophilia (>1,000/microL or >10%), tissue eosinophilic infiltration, and fleeting pulmonary infiltrates; and (3) VASCULITIC PHASE: small-to-medium vessel necrotizing vasculitis, characteristically presenting with MONONEURITIS MULTIPLEX (asymmetric axonal neuropathy affecting named nerves, e.g. peroneal nerve foot drop and radial nerve wrist drop, due to ischemic necrosis of the vasa nervorum). Approximately 40-50% of patients are positive for p-ANCA (anti-MPO). Systemic glucocorticoids are the cornerstone of treatment."
      ],
      [
        "Granulomatosis with polyangiitis (GPA)",
        "GPA features chronic sinusitis and cavitary nodules, but is PR3-ANCA positive and does NOT feature severe peripheral eosinophilia (>30%) or long-standing asthma."
      ],
      [
        "Microscopic polyangiitis (MPA)",
        "MPA is p-ANCA positive and causes glomerulonephritis/pulmonary hemorrhage, but characteristically lacks severe asthma, allergic rhinitis, and massive hypereosinophilia."
      ],
      [
        "Idiopathic hypereosinophilic syndrome (HES)",
        "HES features eosinophilia and end-organ damage (endomyocardial fibrosis), but lacks necrotizing vasculitis, mononeuritis multiplex, and p-ANCA positivity."
      ],
      [
        "Allergic bronchopulmonary aspergillosis (ABPA)",
        "ABPA features asthma, eosinophilia, and high IgE, but causes central bronchiectasis and does NOT cause systemic small-vessel vasculitis or mononeuritis multiplex."
      ]
    ],
    "shortestValidSolution": "Severe asthma + massive eosinophilia (>1,000) + mononeuritis multiplex (foot/wrist drop) + p-ANCA (MPO) = EGPA (Churg-Strauss syndrome).",
    "necessaryInference": "Identify EGPA (Churg-Strauss) by its pathognomonic triad: asthma, marked peripheral eosinophilia, and vasculitic mononeuritis multiplex with p-ANCA.",
    "strongestDistractor": "Granulomatosis with polyangiitis (GPA)",
    "distractorExclusion": "GPA is c-ANCA (PR3) positive and lacks the prominent asthma and severe peripheral blood eosinophilia (>1,000/microL) that define EGPA.",
    "citation": "Groh M, et al. Eosinophilic granulomatosis with polyangiitis (Churg-Strauss) (EGPA) Consensus Task Force recommendations for evaluation and management. Eur J Intern Med. 2015;26(7):545-553. PMID: 26188394.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0555",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Microscopic Polyangiitis Pulmonary-Renal Syndrome",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man presents with hemoptysis, shortness of breath, and fatigue. He has no prior history of asthma, chronic sinusitis, or nasal polyps. Physical examination reveals blood pressure 158/92 mm Hg, bilateral pulmonary crackles, and mild lower extremity edema without skin lesions. Chest radiography demonstrates bilateral diffuse alveolar infiltrates consistent with pulmonary hemorrhage. Laboratory studies show: hemoglobin 8.4 g/dL, serum creatinine 4.1 mg/dL (baseline 1.1 mg/dL), BUN 54 mg/dL, and normal eosinophil count. Urinalysis demonstrates 3+ blood, dysmorphic red blood cells, and red blood cell casts. Serologic evaluation reveals a positive perinuclear antineutrophil cytoplasmic antibody (p-ANCA) with high-titer antibodies targeting myeloperoxidase (anti-MPO); anti-GBM, anti-PR3, and ANA titers are completely negative. Renal biopsy reveals pauci-immune necrotizing crescentic glomerulonephritis without granulomatous inflammation. Which of the following is the diagnosis?",
    "choices": [
      [
        "Microscopic polyangiitis (MPA)",
        "Microscopic polyangiitis (MPA) is a necrotizing small-vessel vasculitis that predominantly targets the kidneys and lungs. Unlike GPA, MPA is characteristically associated with P-ANCA (ANTI-MYELOPEROXIDASE / MPO) and LAUGHS AT GRANULOMAS: there are NO granulomas on biopsy, NO cavitary pulmonary nodules, and NO upper respiratory tract destructive lesions (no sinusitis, no saddle nose). Unlike EGPA, there is NO ASTHMA and NO EOSINOPHILIA. MPA typically presents as a PULMONARY-RENAL SYNDROME (diffuse alveolar hemorrhage and rapidly progressive crescentic glomerulonephritis with a pauci-immune immunofluorescence pattern). Treatment requires remission induction with rituximab or cyclophosphamide plus high-dose glucocorticoids."
      ],
      [
        "Granulomatosis with polyangiitis (GPA)",
        "GPA features necrotizing granulomatous inflammation, destructive upper respiratory tract disease, cavitary lung nodules, and c-ANCA (anti-PR3) positivity."
      ],
      [
        "Anti-glomerular basement membrane (Goodpasture) disease",
        "Goodpasture disease causes pulmonary-renal syndrome, but is mediated by anti-GBM antibodies producing linear IgG on immunofluorescence, whereas MPA is p-ANCA positive with pauci-immune staining."
      ],
      [
        "Eosinophilic granulomatosis with polyangiitis (EGPA)",
        "EGPA features asthma, allergic rhinitis, and peripheral hypereosinophilia, all of which are absent in this patient."
      ],
      [
        "Cryoglobulinemic vasculitis",
        "Cryoglobulinemic vasculitis is associated with hepatitis C, palpable purpura, and severe hypocomplementemia (low C4), whereas complement is normal in MPA."
      ]
    ],
    "shortestValidSolution": "Pulmonary-renal syndrome + p-ANCA (anti-MPO) + pauci-immune crescentic GN + NO asthma + NO granulomas = Microscopic polyangiitis (MPA).",
    "necessaryInference": "Distinguish MPA (p-ANCA / anti-MPO, no granulomas, no asthma) from GPA (c-ANCA / anti-PR3, granulomas, cavitary nodules) and Goodpasture (anti-GBM).",
    "strongestDistractor": "Anti-glomerular basement membrane (Goodpasture) disease",
    "distractorExclusion": "Goodpasture disease features circulating anti-GBM antibodies and linear immunofluorescence; this patient has p-ANCA (anti-MPO) antibodies and pauci-immune histology.",
    "citation": "Kallenberg CG. The reconstruction of ANCA-associated vasculitis: from phenotypes to genotypes. Autoimmun Rev. 2014;13(4-5):417-422. PMID: 24424177.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0556",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Gastrointestinal",
    "topic": "Polyarteritis Nodosa Hepatitis B Mesenteric Angiography",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man with chronic hepatitis B infection presents with severe, crampy postprandial abdominal pain ('abdominal angina'), 15-lb weight loss over 2 months, and bilateral leg numbness. Over the past 3 days, he developed severe right testicle pain. Blood pressure is 168/104 mm Hg. Physical examination reveals livedo reticularis on both thighs, tender right testicular swelling without epididymitis, and asymmetric wrist drop. Urinalysis shows mild proteinuria without RBC casts or hematuria; serum creatinine is 2.2 mg/dL. ANCA serologies (p-ANCA and c-ANCA) and ANA are negative. Mesenteric catheter angiography demonstrates multiple small aneurysms and focal stenoses ('string of beads') involving the branching visceral arteries of the mesentery and kidneys. Which of the following is the diagnosis?",
    "choices": [
      [
        "Polyarteritis nodosa (PAN)",
        "Polyarteritis nodosa (PAN) is a systemic necrotizing vasculitis of medium-sized muscular arteries that characteristically SPARES THE PULMONARY CIRCULATION. It has a strong epidemiologic link with CHRONIC HEPATITIS B INFECTION (up to 30% of cases). Classic clinical manifestations include: (1) Mesenteric ischemia / postprandial abdominal angina with severe weight loss; (2) Renal artery involvement causing renovascular hypertension and renal insufficiency (without glomerulonephritis or RBC casts, because glomeruli are small vessels); (3) Neurologic ischemia presenting as mononeuritis multiplex; (4) Testicular pain/ischemia (orchitis); and (5) Dermatologic lesions (livedo reticularis, subcutaneous nodules, digital ischemia). Diagnostic hallmark on mesenteric/renal angiography is MULTIPLE MICROANEURYSMS AND ARTERIAL STENOSES ('rosary sign' or 'string of beads')."
      ],
      [
        "Granulomatosis with polyangiitis (GPA)",
        "GPA involves small vessels, affects the respiratory tract and kidneys (causing crescentic glomerulonephritis with RBC casts), and is c-ANCA positive."
      ],
      [
        "Eosinophilic granulomatosis with polyangiitis (EGPA)",
        "EGPA causes mononeuritis multiplex, but occurs in patients with severe asthma and marked peripheral blood hypereosinophilia."
      ],
      [
        "Henoch-Sch\u00f6nlein purpura (IgA vasculitis)",
        "IgA vasculitis is a small-vessel leukocytoclastic vasculitis seen in children/young adults with palpable purpura, arthritis, abdominal pain, and IgA nephropathy."
      ],
      [
        "Thromboangiitis obliterans (Buerger disease)",
        "Buerger disease is a non-atherosclerotic segmental inflammatory occlusive disease of small- and medium-sized arteries of the extremities in heavy young smokers."
      ]
    ],
    "shortestValidSolution": "Hepatitis B + abdominal angina + testicular pain + livedo reticularis + mesenteric microaneurysms on angiography = Polyarteritis nodosa (PAN).",
    "necessaryInference": "Identify polyarteritis nodosa (PAN): medium-vessel vasculitis associated with hepatitis B, sparing the lungs, causing mesenteric ischemia and microaneurysms.",
    "strongestDistractor": "Granulomatosis with polyangiitis (GPA)",
    "distractorExclusion": "GPA is a small-vessel vasculitis featuring pulmonary cavitary nodules, sinus destruction, and c-ANCA, whereas PAN is a medium-vessel vasculitis sparing the lungs.",
    "citation": "Hernandez-Rodriguez J, et al. Description of 161 patients with polyarteritis nodosa: comparison of hepatitis B virus-related and non-virus-related cases. Medicine (Baltimore). 2014;93(26):e190. PMID: 25415124.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0557",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Beh\u00e7et Syndrome Oral and Genital Aphthae Pathergy",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old man of Turkish descent presents with painful mouth sores that have recurred every few months for 2 years. He reports that each episode involves multiple painful, shallow ulcers with a yellow-gray base and erythematous halo on the buccal mucosa and tongue, resolving spontaneously after 10-14 days. Over the past 6 months, he has also experienced recurrent, deeply painful ulcers on his scrotum that leave scars upon healing. Over the past week, he has noticed pain, redness, and photophobia in his left eye. Slit-lamp examination reveals anterior uveitis with hypopyon (layering of white blood cells in the anterior chamber). A needle-stick injury performed 48 hours ago for routine venipuncture shows an erythematous pustule at the puncture site (positive pathergy test). Which of the following is the diagnosis?",
    "choices": [
      [
        "Beh\u00e7et syndrome (Beh\u00e7et disease)",
        "Beh\u00e7et syndrome is a chronic, relapsing systemic inflammatory disorder classified as a variable-vessel vasculitis (affecting veins and arteries of all sizes). It has high prevalence along the ancient 'Silk Road' (Mediterranean, Middle East, Central/East Asia) and is strongly associated with HLA-B51. The cardinal clinical features are: (1) RECURRENT PAINFUL ORAL APHTHOUS ULCERS (mandatory criterion; occurring at least 3 times in a 12-month period); (2) RECURRENT PAINFUL GENITAL ULCERS (scrotal/vulvar, often deep and scarring); (3) OCULAR MANIFESTATIONS (anterior uveitis with hypopyon, posterior uveitis, retinal vasculitis that can lead to rapid blindness); (4) CUTANEOUS LESIONS (erythema nodosum, acneiform papulopustular lesions); and (5) POSITIVE PATHERGY TEST (development of an erythematous papule or sterile pustule >=2 mm at 24-48 hours following sterile needle prick). Systemic glucocorticoids and immunosuppressive agents (e.g., azathioprine, TNF inhibitors) are required."
      ],
      [
        "Systemic lupus erythematosus (SLE)",
        "SLE causes oral ulcers, but they are typically painless; genital ulcers and anterior hypopyon uveitis are distinctly uncharacteristic of lupus."
      ],
      [
        "Herpes simplex virus type 2 (HSV-2) infection",
        "HSV causes grouped vesicular genital lesions on an erythematous base, but does not cause recurrent oral aphthae, retinal vasculitis, or pathergy."
      ],
      [
        "Reiter syndrome / Reactive arthritis",
        "Reactive arthritis causes urethritis, conjunctivitis, and painless circinate balanitis, not deep painful scarring scrotal ulcers or hypopyon uveitis."
      ],
      [
        "Crohn disease with extraintestinal manifestations",
        "Crohn disease causes aphthous oral ulcers and erythema nodosum, but does not cause sterile pustular pathergy or scarring genital ulcers."
      ]
    ],
    "shortestValidSolution": "Recurrent oral aphthae (>=3x/yr) + painful scrotal ulcers + anterior hypopyon uveitis + positive pathergy test = Beh\u00e7et syndrome.",
    "necessaryInference": "Recognize the clinical hallmark triad of Beh\u00e7et syndrome: recurrent oral aphthae, painful genital ulcers, and ocular inflammation (hypopyon uveitis) with pathergy.",
    "strongestDistractor": "Systemic lupus erythematosus (SLE)",
    "distractorExclusion": "Lupus oral ulcers are typically painless and located on the hard palate, whereas Beh\u00e7et causes exquisitely painful oral and scarring genital aphthae with pathergy.",
    "citation": "Hatemi G, et al. 2018 update of the EULAR recommendations for the management of Beh\u00e7et's syndrome. Ann Rheum Dis. 2018;77(6):808-818. PMID: 29625968.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0558",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Systemic Sclerosis Diffuse vs Limited Serology",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman presents with severe thickening and tightness of the skin on her fingers, forearms, chest, and abdomen that has developed rapidly over the past 4 months. She also reports severe Raynaud phenomenon and progressive shortness of breath on exertion. Physical examination reveals hidebound, sclerotic skin extending proximal to the elbows and knees and involving the trunk. Bilateral inspiratory Velcro crackles are heard at the lung bases. High-resolution chest CT demonstrates bilateral basilar ground-glass opacities and traction bronchiectasis consistent with non-specific interstitial pneumonia (NSIP). Pulmonary function tests show a restrictive defect with FVC 58% predicted and DLCO 44% predicted. Which of the following autoantibody profiles is most specifically associated with this patient's subtype of disease?",
    "choices": [
      [
        "Anti-topoisomerase I (anti-Scl-70) and anti-RNA polymerase III antibodies",
        "Systemic sclerosis (scleroderma) is classified into two major clinical subsets based on the extent of skin involvement: (1) DIFFUSE CUTANEOUS SYSTEMIC SCLEROSIS (dcSSc): skin thickening extends PROXIMAL to the elbows and knees and involves the TRUNK/TORSO. Characterized by rapid progression, early and severe visceral organ involvement (interstitial lung disease / NSIP, scleroderma renal crisis), and is specifically associated with ANTI-TOPOISOMERASE I (anti-Scl-70) antibodies (associated with severe pulmonary fibrosis) and ANTI-RNA POLYMERASE III antibodies (associated with rapid skin disease and high risk of Scleroderma Renal Crisis); (2) LIMITED CUTANEOUS SYSTEMIC SCLEROSIS (lcSSc / CREST syndrome): skin thickening restricted to the face and distal extremities (distal to elbows and knees). Characterized by late development of pulmonary arterial hypertension (PAH) and is specifically associated with ANTI-CENTROMERE ANTIBODIES."
      ],
      [
        "Anti-centromere antibodies (ACA)",
        "Anti-centromere antibodies are highly specific for LIMITED cutaneous systemic sclerosis (CREST syndrome), which spares the trunk and proximal extremities."
      ],
      [
        "Anti-Smith (anti-Sm) and anti-double-stranded DNA (anti-dsDNA) antibodies",
        "Anti-Sm and anti-dsDNA antibodies are highly specific serologic markers for systemic lupus erythematosus (SLE), not systemic sclerosis."
      ],
      [
        "Anti-cyclic citrullinated peptide (anti-CCP) and rheumatoid factor",
        "Anti-CCP antibodies are pathognomonic for rheumatoid arthritis, which causes destructive erosive synovitis rather than systemic fibrosis."
      ],
      [
        "Anti-histidyl-tRNA synthetase (anti-Jo-1) antibodies",
        "Anti-Jo-1 antibodies are specific for the antisynthetase syndrome in inflammatory myopathies (polymyositis/dermatomyositis with mechanic's hands)."
      ]
    ],
    "shortestValidSolution": "Skin thickening proximal to elbows/knees and involving trunk + interstitial lung disease (NSIP) = Diffuse systemic sclerosis -> Anti-Scl-70 (topoisomerase I).",
    "necessaryInference": "Differentiate diffuse cutaneous systemic sclerosis (anti-Scl-70 / anti-RNA polymerase III, trunk involvement, ILD) from limited systemic sclerosis (anti-centromere, distal only).",
    "strongestDistractor": "Anti-centromere antibodies (ACA)",
    "distractorExclusion": "Anti-centromere antibodies are diagnostic of limited cutaneous systemic sclerosis (CREST syndrome), whereas this patient has diffuse trunk involvement and ILD.",
    "citation": "van den Hoogen F, et al. 2013 classification criteria for systemic sclerosis. Ann Rheum Dis. 2013;72(11):1747-1755. PMID: 24092682.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0559",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Scleroderma Renal Crisis ACE Inhibitor Therapy Avoid Steroids",
    "provisionalDifficulty": 5,
    "stem": "A 49-year-old woman with diffuse cutaneous systemic sclerosis and anti-RNA polymerase III antibodies presents to the emergency department with acute severe headache, blurry vision, and shortness of breath. She was prescribed oral prednisone 30 mg daily 2 weeks ago by a community provider for worsening joint stiffness. Blood pressure is 214/118 mm Hg (baseline 116/74 mm Hg). Funduscopic examination reveals bilateral flame hemorrhages, cotton-wool spots, and optic disc edema (grade IV hypertensive retinopathy). Laboratory studies demonstrate: serum creatinine 3.8 mg/dL (baseline 0.8 mg/dL), BUN 44 mg/dL, hemoglobin 8.8 g/dL, platelet count 64,000/microL, and LDH 890 U/L. Peripheral blood smear reveals numerous schistocytes (microangiopathic hemolytic anemia). Urinalysis shows 1+ protein and mild hematuria without active casts. Which of the following is the most appropriate immediate medical intervention?",
    "choices": [
      [
        "Immediate administration of an oral angiotensin-converting enzyme (ACE) inhibitor, such as captopril, titrated to normalize blood pressure",
        "This patient is experiencing SCLERODERMA RENAL CRISIS (SRC), a life-threatening complication occurring in ~10-15% of patients with diffuse systemic sclerosis, strongly associated with anti-RNA polymerase III antibodies and triggered by MODERATE-TO-HIGH DOSE GLUCOCORTICOIDS (prednisone >= 15 mg/day). SRC is driven by acute renal vascular endothelial injury and severe hyperreninemic vasoconstriction, causing sudden-onset malignant hypertension, acute renal failure, and microangiopathic hemolytic anemia (MAHA with schistocytes and thrombocytopenia). The ABSOLUTE FIRST-LINE, LIFE-SAVING THERAPY IS PROMPT ADMINISTRATION OF AN ACE INHIBITOR (typically short-acting oral CAPTOPRIL, titrated rapidly to control blood pressure). ACE inhibitors block the renin-angiotensin cascade, reversing renal ischemia and dramatically reducing mortality. Even if serum creatinine transiently increases, ACE inhibitors MUST BE CONTINUED. Glucocorticoids are strictly contraindicated."
      ],
      [
        "Intravenous pulse methylprednisolone (1,000 mg daily) to suppress acute vascular autoimmune inflammation",
        "High-dose glucocorticoids are a known direct trigger of scleroderma renal crisis and exacerbate renal vasospasm; steroids must be avoided."
      ],
      [
        "Urgent bilateral renal artery percutaneous angioplasty with drug-eluting stent placement",
        "The vascular lesion in SRC involves intrarenal arcuate and interlobular arterioles, not the main renal arteries; stenting is ineffective and contraindicated."
      ],
      [
        "Immediate therapeutic plasma exchange (plasmapheresis) combined with intravenous rituximab",
        "Plasma exchange is indicated for thrombotic thrombocytopenic purpura (TTP), but SRC is driven by hyperreninemia and responds decisively to ACE inhibitors."
      ],
      [
        "Intravenous nitroprusside infusion monotherapy while withholding all renin-angiotensin-aldosterone system blockers",
        "Vasodilators alone without RAAS blockade fail to reverse the underlying intrarenal hyperreninemia; ACE inhibitors are mandatory for renal survival."
      ]
    ],
    "shortestValidSolution": "Diffuse systemic sclerosis + steroid exposure + malignant HTN (214/118) + acute renal failure + schistocytes = Scleroderma Renal Crisis -> Immediate ACE inhibitor (Captopril).",
    "necessaryInference": "Identify scleroderma renal crisis (triggered by glucocorticoids; malignant HTN, MAHA, renal failure) and select immediate ACE inhibition as the life-saving treatment.",
    "strongestDistractor": "Intravenous pulse methylprednisolone (1,000 mg daily) to suppress acute vascular autoimmune inflammation",
    "distractorExclusion": "Glucocorticoids are a primary precipitant of scleroderma renal crisis; adding high-dose steroids worsens renal ischemia and drastically accelerates mortality.",
    "citation": "Steen VD, Medsger TA Jr. Long-term outcomes of scleroderma renal crisis. Ann Intern Med. 2000;133(8):600-603. PMID: 11033587.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0560",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Renal",
    "topic": "Lupus Nephritis Class IV Proliferative Mycophenolate Mofetil",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old African American woman with systemic lupus erythematosus presents with worsening bilateral facial puffiness and ankle edema. Blood pressure is 154/96 mm Hg. Physical examination reveals an erythematous malar rash and 3+ pitting lower extremity edema. Laboratory evaluation demonstrates: serum creatinine 2.4 mg/dL (baseline 0.7 mg/dL), serum albumin 2.6 g/dL, C3 complement 42 mg/dL (markedly decreased; normal 90-180 mg/dL), C4 complement 6 mg/dL (markedly decreased; normal 16-47 mg/dL), and anti-dsDNA antibody titer 1:640 (strongly positive). Urinalysis shows 3+ protein, 3+ blood, dysmorphic RBCs, and red blood cell casts; 24-hour urine protein excretion is 3.8 g. Renal biopsy confirms Class IV diffuse proliferative lupus nephritis with extensive subendothelial immune complex deposits ('wire-loop' lesions) and cellular crescents. Which of the following represents the standard first-line induction immunosuppressive regimen for this patient?",
    "choices": [
      [
        "Mycophenolate mofetil (or intravenous cyclophosphamide) combined with high-dose systemic glucocorticoids",
        "Class III (focal) and Class IV (diffuse proliferative) lupus nephritis represent severe, aggressively progressive immune complex-mediated glomerulonephritides associated with high anti-dsDNA titers, profound hypocomplementemia (low C3 and C4), nephritic/nephrotic syndrome, and rapid progression to end-stage renal disease if untreated. The standard first-line remission induction therapy consists of: HIGH-DOSE GLUCOCORTICOIDS (intravenous pulse methylprednisolone followed by oral prednisone) COMBINED WITH EITHER: (1) MYCOPHENOLATE MOFETIL (MMF; preferred, particularly in African American and Hispanic patients due to equal/superior efficacy and superior safety profile compared to cyclophosphamide); OR (2) INTRAVENOUS CYCLOPHOSPHAMIDE (NIH or Euro-Lupus regimen). Hydroxychloroquine should be continued as background therapy."
      ],
      [
        "Oral hydroxychloroquine monotherapy combined with low-dose oral prednisone (10 mg daily)",
        "Hydroxychloroquine is essential background therapy for SLE, but is completely inadequate as monotherapy for active Class IV proliferative nephritis."
      ],
      [
        "Oral methotrexate monotherapy combined with dietary sodium restriction",
        "Methotrexate is used for lupus arthritis and cutaneous disease, but is ineffective and contraindicated for active proliferative glomerulonephritis."
      ],
      [
        "Therapeutic plasma exchange monotherapy without systemic immunosuppressive agents",
        "Plasma exchange is not standard induction for proliferative lupus nephritis and does not halt progressive glomerular crescent formation."
      ],
      [
        "Oral azathioprine monotherapy combined with high-dose loop diuretics",
        "Azathioprine is effective for REMISSION MAINTENANCE in lupus nephritis, but is significantly inferior to MMF or cyclophosphamide for acute induction."
      ]
    ],
    "shortestValidSolution": "SLE + nephritic/nephrotic syndrome + low C3/C4 + anti-dsDNA + Class IV proliferative GN = Induction with Mycophenolate Mofetil (or cyclophosphamide) + high-dose steroids.",
    "necessaryInference": "Select guideline induction therapy for Class IV diffuse proliferative lupus nephritis: mycophenolate mofetil (or cyclophosphamide) plus high-dose glucocorticoids.",
    "strongestDistractor": "Oral azathioprine monotherapy combined with high-dose loop diuretics",
    "distractorExclusion": "Azathioprine is reserved for maintenance therapy after remission is achieved; it is demonstrably inferior to mycophenolate mofetil for acute induction of Class IV nephritis.",
    "citation": "Fanouriakis A, et al. 2019 update of the Joint European League Against Rheumatism and European Renal Association-European Dialysis and Transplant Association (EULAR/ERA-EDTA) recommendations for the management of lupus nephritis. Ann Rheum Dis. 2020;79(6):713-723. PMID: 32220882.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0561",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "General Principles",
    "topic": "Drug-Induced Lupus Hydralazine Anti-Histone Antibodies",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with refractory hypertension and heart failure with reduced ejection fraction presents with polyarthralgia, low-grade fevers, pleuritic chest pain, and fatigue over the past 3 weeks. His medications were adjusted 5 months ago to include hydralazine 100 mg three times daily and isosorbide dinitrate, in addition to carvedilol and furosemide. Physical examination reveals warm, tender, and mildly swollen wrists and MCP joints bilaterally, and a pericardial friction rub; there is no malar rash, discoid lesion, or oral ulcers. Laboratory evaluation shows: ANA titer 1:640 (diffuse homogeneous pattern), anti-histone antibodies strongly positive, anti-dsDNA antibodies negative, and anti-Smith (anti-Sm) antibodies negative. Complement levels (C3 and C4) and serum creatinine are normal; urinalysis shows no protein, blood, or casts. Which of the following is the most appropriate management step?",
    "choices": [
      [
        "Discontinue hydralazine; symptoms and serologies will resolve over several weeks to months",
        "Drug-induced lupus erythematosus (DILE) is an autoimmune condition triggered by chronic exposure to certain medications, classically HYDRALAZINE, PROCAINAMIDE, ISONIAZID, MINOCYCLINE, and ANTI-TNF AGENTS. Clinical manifestations include fever, arthralgias/arthritis, serositis (pleuritis, pericarditis), and myalgias. Key differences from idiopathic SLE: (1) Sparing of major visceral organs (kidneys and central nervous system are rarely involved); (2) Serology shows POSITIVE ANTI-HISTONE ANTIBODIES in >95% of cases; (3) Anti-dsDNA and anti-Sm antibodies are characteristically NEGATIVE; and (4) Serum complement levels (C3/C4) are typically NORMAL. The definitive management is DISCONTINUATION OF THE OFFENDING DRUG. Symptoms typically improve within days to weeks, and autoantibodies gradually normalize."
      ],
      [
        "Initiate oral cyclophosphamide induction therapy for 6 months while continuing hydralazine",
        "Cyclophosphamide is reserved for life-threatening idiopathic SLE organ involvement; DILE is managed by simply stopping the offending medication."
      ],
      [
        "Continue hydralazine and initiate high-dose intravenous pulse methylprednisolone",
        "Continuing the causative drug perpetuates autoantibody generation and clinical flares; drug discontinuation is the primary intervention."
      ],
      [
        "Perform an urgent percutaneous renal biopsy to assess for occult lupus nephritis",
        "Renal involvement is exceedingly rare in classic drug-induced lupus (urinalysis and creatinine are completely normal); biopsy is not indicated."
      ],
      [
        "Prescribe lifelong oral hydroxychloroquine and add oral methotrexate",
        "Lifelong DMARD therapy is unnecessary; drug-induced lupus resolves spontaneously following withdrawal of the offending agent."
      ]
    ],
    "shortestValidSolution": "Hydralazine + arthralgias + serositis + anti-histone positive + anti-dsDNA negative + normal complement = Drug-Induced Lupus -> Discontinue offending drug.",
    "necessaryInference": "Differentiate drug-induced lupus (anti-histone, spares kidneys/CNS, normal complement) from idiopathic SLE, and identify drug cessation as curative.",
    "strongestDistractor": "Prescribe lifelong oral hydroxychloroquine and add oral methotrexate",
    "distractorExclusion": "Drug-induced lupus is completely reversible upon cessation of the offending agent (hydralazine); lifelong systemic immunosuppressive therapy is inappropriate.",
    "citation": "Vaglio A, et al. Drug-induced lupus: the role of anti-histone antibodies and pharmacogenomics. Autoimmun Rev. 2018;17(4):340-349. PMID: 29427833.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0562",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Hematology",
    "topic": "Antiphospholipid Syndrome Mixing Study and Anticoagulation",
    "provisionalDifficulty": 5,
    "stem": "A 31-year-old woman presents to the clinic for evaluation of a right lower extremity deep vein thrombosis confirmed on duplex ultrasound. Her past medical history is notable for three consecutive unexplained spontaneous miscarriages at 10, 11, and 13 weeks of gestation, and one episode of transient right eye monocular visual loss (amaurosis fugax) 1 year ago. Physical examination reveals livedo reticularis on both lower extremities. Routine coagulation studies demonstrate: prothrombin time (PT) 12.0 seconds (INR 1.0), activated partial thromboplastin time (aPTT) 54 seconds (prolonged; reference 25-35 seconds). A 1:1 mixing study with normal pooled plasma fails to correct the prolonged aPTT (remains 50 seconds). Dilute Russell viper venom time (dRVVT) is markedly prolonged and corrects upon addition of excess phospholipids. Platelet count is 110,000/microL. Which of the following is the most appropriate long-term management strategy for this patient?",
    "choices": [
      [
        "Long-term anticoagulation with adjusted-dose therapeutic warfarin (target INR 2.0 to 3.0)",
        "This patient meets clinical and laboratory criteria for ANTIPHOSPHOLIPID SYNDROME (APS): (1) Clinical criteria: Vascular thrombosis (DVT, TIA) and obstetric morbidity (>=3 consecutive spontaneous miscarriages before 10th week, or fetal loss >=10th week); (2) Laboratory criteria: Lupus anticoagulant (prolonged phospholipid-dependent coagulation time like aPTT that FAILS TO CORRECT on 1:1 mixing study, demonstrating an INHIBITOR rather than a factor deficiency, and corrects with excess phospholipid in dRVVT), anticardiolipin antibodies, or anti-beta-2-glycoprotein-I antibodies confirmed on >=2 occasions >=12 weeks apart. For secondary thromboprophylaxis in patients with thrombotic APS, LONG-TERM THERAPEUTIC ANTICOAGULATION WITH WARFARIN (target INR 2.0-3.0) is the guideline-recommended standard of care. Landmark clinical trials (e.g., TRAPS trial) demonstrated that DOACs (e.g., rivaroxaban) are inferior to warfarin in high-risk triple-positive APS, causing significantly higher rates of recurrent arterial thromboembolism."
      ],
      [
        "Lifelong anticoagulation with oral rivaroxaban (direct factor Xa inhibitor) monotherapy",
        "Direct oral anticoagulants (rivaroxaban) showed higher rates of arterial thrombotic events compared to warfarin in high-risk APS trials (TRAPS trial); warfarin is preferred."
      ],
      [
        "Single-agent antiplatelet therapy with low-dose oral aspirin (81 mg daily) alone",
        "Aspirin alone is inadequate for secondary prevention in thrombotic APS with a proven DVT; systemic therapeutic anticoagulation is mandatory."
      ],
      [
        "Intravenous factor VIII concentrate infusion to correct the prolonged partial thromboplastin time",
        "The prolonged aPTT is an in vitro artifact caused by antiphospholipid antibodies interfering with assay reagents; there is no factor VIII deficiency, and the patient is hypercoagulable."
      ],
      [
        "Serial monthly intravenous immunoglobulin (IVIG) infusions without systemic anticoagulants",
        "IVIG does not prevent recurrent macrovascular thrombosis in thrombotic APS; therapeutic anticoagulation with warfarin is the cornerstone of therapy."
      ]
    ],
    "shortestValidSolution": "Recurrent miscarriages + DVT + livedo reticularis + prolonged aPTT not correcting on 1:1 mixing (inhibitor) + dRVVT confirmed = APS -> Long-term Warfarin (INR 2-3).",
    "necessaryInference": "Identify antiphospholipid syndrome (mixing study failure, dRVVT correction) and recognize that warfarin (not DOACs) is the established standard for thrombotic APS.",
    "strongestDistractor": "Lifelong anticoagulation with oral rivaroxaban (direct factor Xa inhibitor) monotherapy",
    "distractorExclusion": "The TRAPS trial demonstrated that DOACs (rivaroxaban) are inferior to warfarin in high-risk APS, conferring an excess risk of arterial thrombosis.",
    "citation": "Pengo V, et al. Rivaroxaban vs warfarin in high-risk patients with antiphospholipid syndrome (TRAPS trial). Blood. 2018;132(13):1365-1371. PMID: 30002145.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0563",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Sj\u00f6gren Syndrome Lymphoma Risk Salivary Gland Enlargement",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old woman with a 6-year history of primary Sj\u00f6gren syndrome managed with artificial tears and pilocarpine presents for routine follow-up. She reports persistent dry mouth, dry eyes, and chronic fatigue. Over the past 2 months, she has noticed progressive, painless swelling on the left side of her face beneath the angle of the jaw. She also reports low-grade fevers and a 10-lb unintentional weight loss. Physical examination reveals firm, non-tender, persistent enlargement of the left parotid gland measuring 3.5 cm, and non-tender left anterior cervical lymphadenopathy. Laboratory studies show: new monoclonal IgG kappa peak on serum protein electrophoresis (SPEP), marked hypocomplementemia with C4 4 mg/dL (previously normal 22 mg/dL), and persistent high-titer anti-Ro/SSA and anti-La/SSB antibodies. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "B-cell non-Hodgkin lymphoma (extranodal marginal zone / MALT lymphoma)",
        "Patients with primary Sj\u00f6gren syndrome have a markedly elevated risk (approximately 30- to 40-fold higher than the general population) of developing B-CELL NON-HODGKIN LYMPHOMA, most commonly EXTRANODAL MARGINAL ZONE B-CELL LYMPHOMA (MALT lymphoma) affecting the salivary glands, or diffuse large B-cell lymphoma (DLBCL). The driving pathophysiology is chronic, uninhibited polyclonal B-cell stimulation progressing to monoclonal neoplastic proliferation. Clinical and laboratory 'red flags' for lymphoma transformation in Sj\u00f6gren syndrome include: (1) Persistent, painless, firm, often unilateral or asymmetric PAROTID OR SUBMANDIBULAR GLAND ENLARGEMENT; (2) Persistent lymphadenopathy, splenomegaly, or 'B symptoms' (fever, weight loss, night sweats); (3) Development of a MONOCLONAL GAMMOPATHY on SPEP/UPEP; (4) New profound HYPOCOMPLEMENTEMIA (particularly low C4); and (5) Cryoglobulinemic vasculitis (purpura). Prompt biopsy of the enlarged parotid gland or lymph node is required."
      ],
      [
        "Acute bacterial suppurative parotitis caused by Staphylococcus aureus",
        "Bacterial parotitis presents acutely with exquisite unilateral pain, erythema, fever, and purulent drainage from Stensen duct, not indolent painless mass and low C4."
      ],
      [
        "Benign pleomorphic adenoma of the left parotid gland",
        "Pleomorphic adenoma is a benign salivary tumor, but does not explain B symptoms, monoclonal gammopathy, or profound hypocomplementemia (low C4)."
      ],
      [
        "Sialolithiasis with secondary obstructive mechanical sialadenitis",
        "Sialolithiasis causes episodic, acute, colicky pain and swelling exacerbated immediately before and during meals, without systemic B symptoms or monoclonal spikes."
      ],
      [
        "Systemic sarcoidosis with bilateral uveoparotid fever (Heerfordt syndrome)",
        "Heerfordt syndrome causes facial nerve palsy, uveitis, and parotitis, but is non-caseating granulomatous disease without high-titer anti-SSA or MALT lymphoma risk."
      ]
    ],
    "shortestValidSolution": "Sj\u00f6gren syndrome + persistent firm parotid mass + B symptoms + monoclonal gammopathy + low C4 = B-cell non-Hodgkin lymphoma (MALT lymphoma).",
    "necessaryInference": "Recognize the ~30-40x increased risk of B-cell non-Hodgkin (MALT) lymphoma in Sj\u00f6gren syndrome signaled by parotid enlargement, low C4, and monoclonal gammopathy.",
    "strongestDistractor": "Acute bacterial suppurative parotitis caused by Staphylococcus aureus",
    "distractorExclusion": "Suppurative parotitis presents with intense local warmth, acute severe pain, and pus milked from Stensen duct, unlike the painless, indolent lymphomatous transformation seen here.",
    "citation": "Brito-Zeron P, et al. Sj\u00f6gren syndrome. Lancet. 2016;388(10041):340-352. PMID: 27067755.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0564",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Ankylosing Spondylitis Sacroiliitis NSAIDs First Line",
    "provisionalDifficulty": 5,
    "stem": "A 27-year-old man presents with chronic low back pain and buttock stiffness that has persisted for 8 months. The pain is most severe in the morning upon waking, accompanied by lumbar stiffness lasting >60 minutes that improves significantly with a morning run or warm shower, but worsens after prolonged sitting at his desk. Over the past 2 months, he has also experienced severe heel pain at the insertion of the Achilles tendon (enthesitis). Physical examination demonstrates tenderness over the bilateral sacroiliac joints, restricted lumbar flexion (modified Schober test reveals 2.5 cm expansion; normal > 5 cm), and decreased chest expansion (2.0 cm; normal > 4 cm). Plain pelvic radiography reveals bilateral sclerosis and erosions of the sacroiliac joints (sacroiliitis). Laboratory studies show elevated ESR and CRP, and positive HLA-B27. Which of the following is the most appropriate initial pharmacologic therapy?",
    "choices": [
      [
        "Continuous oral nonsteroidal anti-inflammatory drugs (NSAIDs), such as naproxen or celecoxib, combined with a structured physical therapy program",
        "Ankylosing spondylitis (AS) is a chronic inflammatory seronegative spondyloarthropathy characterized by: (1) INFLAMMATORY BACK PAIN: age < 40 years, insidious onset >3 months, morning stiffness >30-60 minutes that IMPROVES WITH EXERCISE/ACTIVITY and DOES NOT IMPROVE WITH REST; (2) Sacroiliitis on imaging (erosions, sclerosis, joint space narrowing); (3) Enthesitis (inflammation at tendon/ligament bone insertions, e.g., Achilles tendonitis, plantar fasciitis); (4) Reduced spinal mobility (positive Schober test) and limited chest expansion (<2.5 cm due to costovertebral involvement); and (5) Strong association with HLA-B27. According to ACR/EULAR guidelines, FIRST-LINE PHARMACOLOGIC THERAPY IS CONTINUOUS, REGULAR DOSING OF ORAL NSAIDs (e.g., naproxen, celecoxib, indomethacin) alongside home exercise/physical therapy. If patients fail or are intolerant to >=2 different NSAIDs at maximum tolerated doses, TNF inhibitors (e.g., adalimumab, infliximab) or IL-17 inhibitors (e.g., secukinumab) are indicated."
      ],
      [
        "Oral systemic glucocorticoids (prednisone 40 mg daily) as maintenance monotherapy",
        "Systemic glucocorticoids have poor efficacy in axial spondyloarthritis, are not recommended for maintenance, and carry high long-term toxicity."
      ],
      [
        "Oral methotrexate monotherapy",
        "Methotrexate and conventional synthetic DMARDs (sulfasalazine) have ZERO proven efficacy for axial disease (sacroiliitis/spine) in ankylosing spondylitis."
      ],
      [
        "Immediate initiation of tumor necrosis factor (TNF) inhibitor therapy without a trial of NSAIDs",
        "Biologic TNF inhibitors are second-line agents reserved for patients who have inadequate response, contraindications, or intolerance to continuous NSAID therapy."
      ],
      [
        "Bed rest and avoidance of all aerobic physical exercise to prevent vertebral microfractures",
        "Prolonged bed rest and immobility accelerate spinal fusion and worsen stiffness; regular aerobic exercise and posture training are mandatory."
      ]
    ],
    "shortestValidSolution": "Age < 40 + inflammatory back pain improving with exercise + Achilles enthesitis + sacroiliitis on X-ray = Ankylosing spondylitis -> First-line continuous NSAIDs.",
    "necessaryInference": "Select first-line management for active axial ankylosing spondylitis: regular continuous NSAIDs and exercise; recognize conventional DMARDs lack axial efficacy.",
    "strongestDistractor": "Oral methotrexate monotherapy",
    "distractorExclusion": "Methotrexate is ineffective for axial spine and sacroiliac joint involvement in ankylosing spondylitis; NSAIDs are first-line, followed by TNF or IL-17 inhibitors.",
    "citation": "Ward MM, et al. 2019 Update of the American College of Rheumatology/Spondylitis Association of America/Spondyloarthritis Research and Treatment Network Recommendations for the Treatment of Ankylosing Spondylitis. Arthritis Rheumatol. 2019;71(10):1599-1613. PMID: 31436026.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0565",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Psoriatic Arthritis Dactylitis DIP Involvement",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old man presents with painful swelling of multiple fingers and toes that has worsened over the past 4 months. Physical examination reveals diffuse, uniform, sausage-like swelling of the entire right third finger and left second toe (dactylitis). There is marked tenderness and swelling localized to the distal interphalangeal (DIP) joints of both hands, with notable sparing of the metacarpophalangeal joints. Examination of the fingernails reveals multiple small punctate pits and distal yellowish-brown discoloration ('oil-drop' sign) with onycholysis. Scattered well-demarcated erythematous plaques with thick silvery scales are present on the extensor surfaces of both elbows. Plain radiographs of the hands demonstrate periarticular new bone formation and classic 'pencil-in-cup' deformities of the distal interphalangeal joints. Rheumatoid factor and anti-CCP antibodies are negative. Which of the following is the diagnosis?",
    "choices": [
      [
        "Psoriatic arthritis (PsA)",
        "Psoriatic arthritis (PsA) is an inflammatory spondyloarthropathy affecting ~15-30% of patients with cutaneous psoriasis. Key distinguishing clinical and radiographic features include: (1) DACTYLITIS ('sausage digits'): uniform swelling of an entire digit due to concurrent tenosynovitis and joint inflammation (characteristic of seronegative spondyloarthropathies); (2) DISTAL INTERPHALANGEAL (DIP) JOINT INVOLVEMENT: PsA classically targets the DIP joints (unlike rheumatoid arthritis, which typically spares the DIPs and targets MCP/PIP joints); (3) NAIL CHANGES: nail pitting, onycholysis, and subungual hyperkeratosis correlate strongly with DIP arthritis; (4) ENTHESITIS: inflammation at insertions of tendons/ligaments (e.g. Achilles tendon); and (5) RADIOGRAPHIC FEATURES: periarticular new bone formation, enthesophytes, and classic 'PENCIL-IN-CUP' DEFORMITY (erosion of the proximal joint surface producing a sharp 'pencil' that invaginates into the widened 'cup' of the adjacent phalanx). RF and anti-CCP are negative."
      ],
      [
        "Rheumatoid arthritis (RA)",
        "Rheumatoid arthritis characteristically SPARES the distal interphalangeal (DIP) joints, targets MCP/PIP joints symmetrically, causes pure bone erosions without new bone formation, and is RF/anti-CCP positive."
      ],
      [
        "Primary nodal osteoarthritis (Heberden nodes)",
        "Osteoarthritis causes DIP enlargement (Heberden nodes), but lacks inflammatory dactylitis, silvery scaly plaques, nail oil-drop signs, and pencil-in-cup erosions."
      ],
      [
        "Tophaceous gouty arthritis",
        "Chronic tophaceous gout causes asymmetric erosive arthritis with punched-out lesions and overhanging bony edges, but does not produce dactylitis or psoriatic skin/nail plaques."
      ],
      [
        "Systemic sclerosis (scleroderma)",
        "Systemic sclerosis causes acro-osteolysis and sclerodactyly with skin thickening, not DIP destructive pencil-in-cup changes or inflammatory dactylitis."
      ]
    ],
    "shortestValidSolution": "Psoriatic plaques + dactylitis (sausage digit) + DIP joint arthritis + nail pitting + pencil-in-cup X-ray = Psoriatic arthritis.",
    "necessaryInference": "Distinguish psoriatic arthritis from rheumatoid arthritis: PsA targets DIP joints, causes dactylitis and pencil-in-cup deformity, and is associated with nail pitting.",
    "strongestDistractor": "Rheumatoid arthritis (RA)",
    "distractorExclusion": "Rheumatoid arthritis targets MCP and PIP joints while characteristically sparing DIP joints; DIP involvement and dactylitis point decisively to psoriatic arthritis.",
    "citation": "Ritchlin CT, et al. Psoriatic arthritis. N Engl J Med. 2017;376(10):957-970. PMID: 28273019.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0566",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Reactive Arthritis Post-Chlamydial Triad and NSAIDs",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old man presents with acute pain, warmth, and marked swelling of his right knee and left ankle that developed over the past 5 days. Three weeks ago, he was treated for dysuria and clear urethral discharge following unprotected sexual intercourse. Two days ago, he developed bilateral ocular redness, irritation, and foreign body sensation without purulent discharge. Physical examination reveals an erythematous, warm, large effusion of the right knee, left Achilles tendon tenderness, and bilateral conjunctival injection. Inspection of the glans penis reveals painless, erythematous superficial erosions with a serpiginous border (circinate balanitis), and the soles of both feet demonstrate hyperkeratotic, pustular papules on an erythematous base (keratoderma blennorrhagica). Arthrocentesis of the right knee reveals clear yellow fluid: WBC count 24,000/microL with 65% neutrophils; crystal examination is negative and synovial fluid Gram stain and culture show no organisms. Which of the following is the most appropriate initial therapy?",
    "choices": [
      [
        "Oral nonsteroidal anti-inflammatory drugs (NSAIDs) at anti-inflammatory doses",
        "Reactive arthritis is an asymmetric seronegative oligoarthritis that develops 1 to 4 weeks following a mucosal infection, most commonly GENITOURINARY (Chlamydia trachomatis) or GASTROINTESTINAL (Salmonella, Shigella, Campylobacter, Yersinia). It is strongly linked to HLA-B27. The classic triad ('can't see, can't pee, can't climb a tree') includes: (1) Asymmetric inflammatory oligoarthritis predominantly affecting large lower extremity joints and entheses (Achilles tendonitis); (2) Ocular inflammation (sterile conjunctivitis or anterior uveitis); and (3) Urethritis/cervicitis. Pathognomonic mucocutaneous findings include CIRCINATE BALANITIS (painless erosions on glans) and KERATODERMA BLENNORRHAGICA (vesiculopustular, hyperkeratotic lesions on soles/palms). Synovial fluid is STERILE (reactive, not infectious). FIRST-LINE TREATMENT FOR ACUTE ARTHRITIS IS HIGH-DOSE ORAL NSAIDs. If the triggering genitourinary Chlamydia infection has not yet been eradicated, doxycycline should be administered to treat the primary urethral infection, but antibiotic therapy does not accelerate resolution of the sterile joint arthritis."
      ],
      [
        "Intravenous vancomycin and ceftriaxone for 4 weeks for presumed gonococcal septic arthritis",
        "Synovial fluid is culture-negative with WBC < 50,000, and pathognomonic circinate balanitis/keratoderma confirm sterile reactive arthritis, not septic arthritis."
      ],
      [
        "Immediate intra-articular corticosteroid injection into the knee without prior trial of oral therapy",
        "Systemic oral NSAIDs are first-line; local steroid injections are reserved for monoarthritis refractory to NSAIDs once infection is definitively ruled out."
      ],
      [
        "Oral methotrexate combined with adalimumab (TNF inhibitor) as initial remission therapy",
        "Biologics and DMARDs are second-line agents reserved for chronic reactive arthritis lasting >3-6 months that fails NSAID therapy."
      ],
      [
        "Lifelong suppressive oral acyclovir therapy for genital herpes simplex infection",
        "Circinate balanitis is a sterile manifestation of reactive arthritis, not HSV; acyclovir has no therapeutic role."
      ]
    ],
    "shortestValidSolution": "Post-chlamydial urethritis + sterile conjunctivitis + asymmetric oligoarthritis + circinate balanitis + keratoderma blennorrhagica = Reactive arthritis -> First-line NSAIDs.",
    "necessaryInference": "Recognize reactive arthritis (sterile post-chlamydial or enteric oligoarthritis, circinate balanitis, keratoderma blennorrhagica) and select NSAIDs as first-line therapy.",
    "strongestDistractor": "Intravenous vancomycin and ceftriaxone for 4 weeks for presumed gonococcal septic arthritis",
    "distractorExclusion": "Synovial fluid is sterile and mucocutaneous findings (circinate balanitis, keratoderma blennorrhagica) identify reactive arthritis, which is treated with NSAIDs.",
    "citation": "Schmitt SK. Reactive arthritis. Infect Dis Clin North Am. 2017;31(2):265-277. PMID: 28366578.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0567",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Enteropathic Arthritis IBD Pauciarticular vs Axial NSAID Avoidance",
    "provisionalDifficulty": 5,
    "stem": "A 29-year-old woman with a 4-year history of Crohn disease characterized by ileocolonic inflammation presents with painful swelling of her right knee and left ankle that began 10 days ago. Concurrently, she has experienced an exacerbation of her gastrointestinal disease, with 6 to 8 daily episodes of bloody diarrhea, crampy lower abdominal pain, and a 6-lb weight loss. Physical examination demonstrates active swelling, warmth, and tender effusions of the right knee and left tibiotalar joint; there is no spinal tenderness or sacroiliac pain. Abdominal examination reveals diffuse lower quadrant tenderness without rebound. Laboratory studies show: hemoglobin 10.2 g/dL, ESR 58 mm/h, and fecal calprotectin 620 microg/g (markedly elevated). Arthrocentesis of the right knee yields non-purulent inflammatory fluid with 18,000 WBC/microL and negative crystals and cultures. Which of the following is the most appropriate management approach for this patient's joint symptoms?",
    "choices": [
      [
        "Optimize treatment of the underlying Crohn disease flare (e.g., systemic glucocorticoids or biologic anti-TNF therapy) and avoid nonsteroidal anti-inflammatory drugs (NSAIDs)",
        "Enteropathic arthritis is an inflammatory spondyloarthropathy associated with inflammatory bowel disease (Crohn disease and ulcerative colitis). Peripheral arthritis occurs in two distinct clinical patterns: (1) TYPE 1 (PAUCIARTICULAR / OLIGOARTICULAR): involves <5 joints (asymmetric, predilection for large lower extremity weight-bearing joints like knees and ankles). Crucially, TYPE 1 PERIPHERAL ARTHRITIS STRONGLY PARALLELS INTESTINAL DISEASE ACTIVITY. Effective treatment and control of the underlying bowel inflammation (e.g. systemic corticosteroids, TNF inhibitors like infliximab/adalimumab) DIRECTLY INDUCES REMISSION OF THE ARTHRITIS; (2) TYPE 2 (POLYARTICULAR): involves >=5 small joints (symmetric, hands) and runs an independent course discordant from bowel flares; and (3) AXIAL ARTHRITIS (sacroiliitis/spondylitis): also runs an independent clinical course. Crucially, ORAL NSAIDs SHOULD GENERALLY BE AVOIDED OR USED WITH EXTREME CAUTION in IBD patients, as NSAIDs inhibit protective prostaglandins in the gut mucosa and frequently trigger severe gastrointestinal disease relapses."
      ],
      [
        "Initiate high-dose oral indomethacin (NSAID) three times daily for 4 weeks to resolve peripheral joint synovitis",
        "NSAIDs inhibit gastrointestinal mucosal prostaglandins and are well-documented triggers of acute severe flares of inflammatory bowel disease."
      ],
      [
        "Perform urgent total synovectomy of the right knee joint to prevent irreversible articular cartilage destruction",
        "Enteropathic peripheral arthritis is non-erosive and non-deforming; surgical synovectomy is inappropriate and medically contraindicated."
      ],
      [
        "Prescribe oral hydroxychloroquine and order pelvic radiographs to assess for subclinical sacroiliitis",
        "Hydroxychloroquine is ineffective for IBD enteropathic arthritis; Type 1 oligoarthritis resolves when the underlying gut flare is treated."
      ],
      [
        "Initiate oral allopurinol monotherapy titrated to achieve a serum uric acid level < 6 mg/dL",
        "Synovial fluid analysis demonstrates absence of urate crystals; this is an enteropathic immune arthritis, not gout."
      ]
    ],
    "shortestValidSolution": "Crohn flare + concurrent oligoarthritis of knee/ankle (Type 1 enteropathic) = Treat underlying bowel flare (steroids/anti-TNF); avoid NSAIDs (trigger IBD flares).",
    "necessaryInference": "Manage enteropathic arthritis: Type 1 oligoarthritis parallels bowel disease activity; treat the underlying IBD and avoid NSAIDs which exacerbate colitis.",
    "strongestDistractor": "Initiate high-dose oral indomethacin (NSAID) three times daily for 4 weeks to resolve peripheral joint synovitis",
    "distractorExclusion": "NSAIDs disrupt mucosal integrity by inhibiting protective prostaglandins and frequently trigger or worsen severe flares of Crohn disease.",
    "citation": "Orchard TR, et al. Peripheral arthritis in inflammatory bowel disease: definition of subtypes. Gut. 1998;42(3):386-391. PMID: 9570899.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0568",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Rheumatoid Arthritis Methotrexate First Line and Pre-Treatment Screening",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old woman presents with persistent pain, swelling, and morning stiffness in both hands for the past 3 months. She states that her stiffness lasts for nearly 2 hours every morning before partially easing with warm water. Physical examination reveals bilateral, symmetric, spongy ('doughy') swelling and tenderness of the second and third metacarpophalangeal (MCP) joints and proximal interphalangeal (PIP) joints of both hands, as well as both wrists. The distal interphalangeal (DIP) joints are entirely normal. Laboratory evaluation demonstrates: high-titer cyclic citrullinated peptide (anti-CCP) antibodies (>250 U/mL), positive rheumatoid factor (RF), ESR 64 mm/h, and CRP 32 mg/L. Complete blood count, serum creatinine, and liver enzymes are within normal limits. Hand radiographs demonstrate soft tissue swelling and subtle periarticular osteopenia without cortical bone erosions. Which of the following is the most appropriate next step in the pharmacologic management of this patient?",
    "choices": [
      [
        "Initiate oral methotrexate combined with folic acid supplementation, after obtaining a baseline chest radiograph and screening for hepatitis B, hepatitis C, and latent tuberculosis",
        "Rheumatoid arthritis (RA) is a chronic inflammatory symmetric polyarthritis characteristically targeting MCP, PIP, and wrist joints while SPARING distal interphalangeal (DIP) joints. Anti-CCP antibodies possess >95% specificity for RA and predict erosive disease progression. Early intervention with a conventional synthetic DISEASE-MODIFYING ANTIRHEUMATIC DRUG (csDMARD) within 3 months of symptom onset is vital to prevent irreversible joint destruction and radiographic erosions. METHOTREXATE IS THE UNIVERSALLY RECOMMENDED FIRST-LINE csDMARD OF CHOICE (ACR/EULAR guidelines). Key management requirements: (1) Concomitant FOLIC ACID (1 mg daily) must be co-prescribed to minimize gastrointestinal, hematologic, and mucosal adverse effects; (2) PRE-TREATMENT SCREENING: baseline liver function tests, complete blood count, serum creatinine, CHEST RADIOGRAPH (to evaluate for pre-existing pulmonary fibrosis or infection, as MTX can cause hypersensitivity pneumonitis), and screening for HEPATITIS B, HEPATITIS C, and LATENT TUBERCULOSIS (mandatory before initiating immunosuppression)."
      ],
      [
        "Prescribe oral prednisone (20 mg daily) as lifelong maintenance monotherapy without initiating a DMARD",
        "Glucocorticoids are useful only as temporary 'bridge' therapy for symptom relief while DMARDs take effect; steroids do NOT prevent long-term bone erosions."
      ],
      [
        "Initiate immediate combination biologic therapy with an anti-TNF agent and an anti-IL-6 receptor antagonist",
        "Biologics are reserved for patients with inadequate response to csDMARDs (methotrexate); combining two biologic agents drastically increases fatal infection risk and is contraindicated."
      ],
      [
        "Initiate oral hydroxychloroquine monotherapy without baseline laboratory testing or infectious screening",
        "Hydroxychloroquine is reserved for mild, non-erosive disease; high-titer anti-CCP and multiple swollen joints require methotrexate to prevent erosive destruction."
      ],
      [
        "Advise as-needed over-the-counter ibuprofen and defer disease-modifying agents until bone erosions are visible on repeat radiography",
        "Waiting for bone erosions to appear on radiographs before starting DMARDs causes permanent, irreversible joint disability; DMARDs must be started early."
      ]
    ],
    "shortestValidSolution": "Symmetric MCP/PIP polyarthritis + morning stiffness > 1 hr + anti-CCP positive = RA -> First-line Methotrexate (+ folic acid) with baseline CXR and viral/TB screening.",
    "necessaryInference": "Select methotrexate as the standard first-line DMARD for rheumatoid arthritis, and identify required baseline safety screening (CXR, LFTs, hepatitis B/C, TB).",
    "strongestDistractor": "Prescribe oral prednisone (20 mg daily) as lifelong maintenance monotherapy without initiating a DMARD",
    "distractorExclusion": "Systemic glucocorticoid monotherapy does not halt progressive radiographic joint erosion in RA and carries severe long-term toxicity; csDMARDs (methotrexate) are mandatory.",
    "citation": "Smolen JS, et al. EULAR recommendations for the management of rheumatoid arthritis with synthetic and biological disease-modifying antirheumatic drugs: 2019 update. Ann Rheum Dis. 2020;79(6):685-699. PMID: 31969328.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0569",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Rheumatoid Arthritis Atlantoaxial Subluxation Preoperative Screening",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old woman with a 14-year history of severe, seropositive rheumatoid arthritis is scheduled to undergo elective total knee arthroplasty under general endotracheal anesthesia. Over the past 6 months, she has reported mild neck stiffness and intermittent numbness and tingling radiating down both arms when bending her head forward. She has no bowel or bladder incontinence. Physical examination reveals severe ulnar deviation, swan-neck deformities of the fingers, and symmetric knee deformities. Neurologic examination demonstrates hyperreflexia (3+ patellar and Achilles reflexes bilaterally) and an equivocal Hoffmann sign on the right. Which of the following diagnostic studies is most critical to perform prior to her surgical procedure?",
    "choices": [
      [
        "Flexion and extension plain radiographs of the cervical spine to assess for atlantoaxial subluxation",
        "Severe, long-standing rheumatoid arthritis frequently involves the CERVICAL SPINE (in up to 30-50% of patients with long-standing erosive disease). The hallmark pathology is chronic synovial pannus inflammation destroying the TRANSVERSE LIGAMENT OF THE ATLAS (odontoid process) and alar ligaments, resulting in ATLANTOAXIAL SUBLUXATION (instability of C1 on C2). During endotracheal intubation, neck extension and manipulation can cause posterior displacement of the odontoid process into the spinal canal, leading to ACUTE CERVICAL SPINAL CORD COMPRESSION, QUADRIPLEGIA, OR FATAL MEDULLARY/BRAINSTEM INFARCTION. Preoperative screening with CERVICAL SPINE RADIOGRAPHS IN NEUTRAL, FLEXION, AND EXTENSION positions is mandatory in RA patients (especially those with peripheral erosions, neurologic symptoms, or hyperreflexia) to measure the anterior atlantodental interval (AADI). An AADI > 3 mm indicates instability, and >8-10 mm warrants neurosurgical stabilization prior to elective surgery."
      ],
      [
        "Preoperative pulmonary function testing with arterial blood gas analysis and diffusion capacity",
        "While RA can cause interstitial lung disease, screening for life-threatening cervical cord compression during endotracheal intubation is the immediate priority."
      ],
      [
        "Echocardiography with bubble study to evaluate for patent foramen ovale",
        "Bubble study is used for suspected paradoxical embolism, not for preoperative airway and spinal stabilization in severe RA."
      ],
      [
        "Electromyography and nerve conduction studies of the bilateral upper extremities to rule out carpal tunnel syndrome",
        "EMG/NCS detects peripheral entrapment neuropathy, but cannot assess the lethal threat of cervical atlantoaxial subluxation during neck extension for intubation."
      ],
      [
        "Serum rheumatoid factor and anti-CCP titers to assess acute disease activity",
        "Serologic titers confirm diagnosis but do not correlate with dynamic biomechanical stability of the cervical spine during airway manipulation."
      ]
    ],
    "shortestValidSolution": "Long-standing severe RA + hyperreflexia + neck manipulation for endotracheal intubation = Risk of atlantoaxial subluxation -> Flexion-extension cervical spine X-rays.",
    "necessaryInference": "Recognize the lethal risk of atlantoaxial subluxation in rheumatoid arthritis undergoing intubation and select flexion-extension cervical spine radiographs.",
    "strongestDistractor": "Electromyography and nerve conduction studies of the bilateral upper extremities to rule out carpal tunnel syndrome",
    "distractorExclusion": "EMG assesses peripheral median neuropathy but misses life-threatening cervical cord transection during endotracheal neck extension; cervical radiographs are mandatory.",
    "citation": "Gillick JL, et al. Rheumatoid arthritis of the cervical spine: a review of the pathogenesis and management. Neurosurg Focus. 2017;43(5):E7. PMID: 29088960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0570",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Septic Arthritis vs Gout Arthrocentesis and Empiric Vancomycin",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with a history of hypertension and obesity presents to the emergency department with acute, excruciating pain, erythema, and massive swelling of his right knee that woke him from sleep 8 hours ago. He cannot bear weight. Temperature is 38.6 C (101.5 F), blood pressure is 142/88 mm Hg, and pulse is 108/min. Physical examination reveals an exquisitely tender, tense right knee effusion with marked overlying erythema and heat; active and passive range of motion is severely restricted by pain. Immediate arthrocentesis is performed, yielding 35 mL of opaque, purulent synovial fluid. Synovial fluid analysis reveals: WBC count 88,000/microL with 94% neutrophils, and glucose 24 mg/dL (serum glucose 105 mg/dL). Polarized light microscopy reveals a few intracellular negatively birefringent needle-shaped crystals, but the Gram stain shows numerous gram-positive cocci in clusters. Which of the following is the most appropriate immediate medical intervention?",
    "choices": [
      [
        "Initiate immediate intravenous vancomycin (plus or minus ceftriaxone) and consult orthopedic surgery for emergent joint drainage",
        "This patient has ACUTE SEPTIC ARTHRITIS (most commonly caused by Staphylococcus aureus), which represents an orthopedic emergency. Delay in treatment leads to irreversible cartilage destruction and osteonecrosis within 24 to 48 hours. Key teaching point: THE IDENTIFICATION OF MONOSODIUM URATE CRYSTALS DOES NOT RULE OUT CONCURRENT SEPTIC ARTHRITIS! Gout and septic arthritis frequently COEXIST in up to 1.5-5% of cases (the acute gout flare may be triggered by joint sepsis, or crystals may be released from existing tophi). Whenever synovial fluid WBC exceeds 50,000/microL with >90% PMNs and bacteria are identified on Gram stain, the primary diagnosis is SEPTIC ARTHRITIS. Management requires: (1) Immediate blood cultures and synovial cultures; (2) IMMEDIATE INTRAVENOUS EMPIRIC ANTIBIOTICS (vancomycin to cover MRSA, plus third-generation cephalosporin e.g. ceftriaxone if gram-negative risk exists); and (3) URGENT ORTHOPEDIC SURGERY CONSULTATION FOR EMERGENCY JOINT DECOMPRESSION/DRAINAGE (arthroscopic lavage or open arthrotomy)."
      ],
      [
        "Administer high-dose oral colchicine and intramuscular ketorolac, withholding antibiotics pending final synovial cultures",
        "Withholding antibiotics in the presence of 88,000 WBC and gram-positive cocci will lead to chondrolysis and rapid joint destruction within 24-48 hours."
      ],
      [
        "Inject 80 mg of triamcinolone acetonide intra-articularly to suppress crystal-induced acute synovitis",
        "Intra-articular steroid injection into an actively infected septic joint causes catastrophic acceleration of bacterial proliferation and tissue necrosis."
      ],
      [
        "Initiate oral allopurinol monotherapy (300 mg daily) to lower serum uric acid levels acutely",
        "Allopurinol has no role in acute joint inflammation and starting it during an acute flare worsens inflammatory mobilization; crystal presence here is superseded by sepsis."
      ],
      [
        "Discharge the patient with oral cephalexin and schedule an outpatient rheumatology clinic follow-up in 1 week",
        "Septic arthritis requires emergency hospitalization, intravenous bactericidal antibiotics, and urgent joint drainage, not outpatient oral therapy."
      ]
    ],
    "shortestValidSolution": "Purulent synovial fluid + WBC 88,000 (>90% PMNs) + Gram-positive cocci in clusters = Septic arthritis -> Immediate IV Vancomycin + emergent orthopedic drainage.",
    "necessaryInference": "Recognize that urate crystals do not rule out concurrent septic arthritis; purulent fluid with gram-positive cocci requires immediate IV antibiotics and emergent drainage.",
    "strongestDistractor": "Administer high-dose oral colchicine and intramuscular ketorolac, withholding antibiotics pending final synovial cultures",
    "distractorExclusion": "Synovial fluid Gram stain confirms bacterial infection; treating solely for gout with colchicine/NSAIDs while withholding antibiotics leads to permanent joint destruction.",
    "citation": "Mathews CJ, et al. Management of septic arthritis: a systematic review. Ann Rheum Dis. 2007;66(4):440-445. PMID: 17170043.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0571",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Pseudogout CPPD Rhomboid Crystals and Hemochromatosis",
    "provisionalDifficulty": 5,
    "stem": "A 67-year-old man presents with acute swelling, redness, and pain in his right knee for the past 2 days. He has a history of type 2 diabetes mellitus, mild erectile dysfunction, and asymptomatic elevated liver enzymes. Physical examination reveals an erythematous, warm right knee with a moderate effusion, and hyperpigmented 'bronze' skin on his face and forearms. Plain radiography of the right knee demonstrates linear, punctate calcification of the articular hyaline cartilage and menisci (chondrocalcinosis). Arthrocentesis is performed: synovial fluid WBC is 28,000/microL with 72% neutrophils. Polarized light microscopy reveals weakly positively birefringent, rhomboid-shaped crystals (appearing blue when aligned parallel to the slow axis of the red compensator). Gram stain and cultures are negative. Which of the following underlying systemic conditions should be investigated in this patient?",
    "choices": [
      [
        "Hereditary hemochromatosis (check serum ferritin and transferrin saturation)",
        "Calcium pyrophosphate dihydrate (CPPD) crystal deposition disease (pseudogout) is an acute crystalline arthropathy characteristically affecting older adults and most commonly involving the KNEE (over 50% of cases), wrist, or shoulder. Cardinal diagnostic features are: (1) Synovial fluid polarized light microscopy demonstrating WEAKLY POSITIVELY BIREFRINGENT, RHOMBOID-SHAPED CRYSTALS (blue when parallel to compensator); and (2) Plain radiographs showing CHONDROCALCINOSIS (calcification of cartilage). While most CPPD is idiopathic and age-related, secondary CPPD occurs in younger patients or patients with associated metabolic disorders: (1) HEREDITARY HEMOCHROMATOSIS (iron overload; suggested here by 'bronze diabetes', hepatomegaly, and erectile dysfunction); (2) PRIMARY HYPERPARATHYROIDISM (hypercalcemia); (3) HYPOMAGNESEMIA; and (4) HYPOPHOSPHATASIA. Diagnostic evaluation requires measuring SERUM IRON, TOTAL IRON-BINDING CAPACITY (transferrin saturation > 45%), and SERUM FERRITIN."
      ],
      [
        "Systemic lupus erythematosus (check anti-dsDNA and complement C3/C4 levels)",
        "SLE does not cause calcium pyrophosphate crystal deposition or chondrocalcinosis."
      ],
      [
        "Lead poisoning (check blood lead level and 24-hour urinary lead excretion)",
        "Lead poisoning causes saturnine gout (urate crystal deposition due to renal tubular injury), not calcium pyrophosphate pseudogout."
      ],
      [
        "Ankylosing spondylitis (check HLA-B27 allele typing)",
        "HLA-B27 is linked to seronegative spondyloarthropathies and axial sacroiliitis, not crystalline pyrophosphate chondrocalcinosis."
      ],
      [
        "Adult-onset Still disease (check serum ferritin to confirm extreme hyperferritinemia > 10,000 ng/mL)",
        "Still disease causes high spiking fevers, salmon-pink evanescent rash, and non-crystalline polyarthritis, not chondrocalcinosis with rhomboid crystals."
      ]
    ],
    "shortestValidSolution": "Chondrocalcinosis + weakly positively birefringent rhomboid crystals (CPPD) + bronze diabetes = Investigate underlying hereditary hemochromatosis (iron/ferritin).",
    "necessaryInference": "Identify CPPD (pseudogout; rhomboid positively birefringent crystals, chondrocalcinosis) and recognize its high-yield association with hereditary hemochromatosis.",
    "strongestDistractor": "Systemic lupus erythematosus (check anti-dsDNA and complement C3/C4 levels)",
    "distractorExclusion": "SLE causes non-erosive Jaccoud-type arthropathy without crystal deposition; chondrocalcinosis with rhomboid crystals points specifically to CPPD/hemochromatosis.",
    "citation": "Rosenthal AK, Ryan LM. Calcium pyrophosphate deposition disease. N Engl J Med. 2016;374(26):2575-2584. PMID: 27355536.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0572",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Acute Gout Flare in CKD Glucocorticoids vs NSAID Contraindication",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man presents to the urgent care clinic with severe pain, swelling, and redness in his left first metatarsophalangeal (MTP) joint (podagra) that began acutely 12 hours ago. He cannot put weight on his left foot or tolerate the touch of a bedsheet. His past medical history is notable for stage 4 chronic kidney disease (baseline serum creatinine 3.1 mg/dL, estimated GFR 22 mL/min/1.73 m2), congestive heart failure (ejection fraction 35%), and hypertension. Physical examination reveals an exquisitely tender, erythematous, swollen left first MTP joint. Polarized light microscopy of joint aspirate confirms intracellular, strongly negatively birefringent, needle-shaped monosodium urate crystals. Which of the following is the most appropriate medical therapy for this patient's acute flare?",
    "choices": [
      [
        "Oral or intra-articular glucocorticoids (e.g., oral prednisone 30-35 mg daily for 5 days or intra-articular triamcinolone)",
        "Acute gout management requires rapid anti-inflammatory therapy. The three standard first-line options for acute gout flares are: (1) NSAIDs (e.g., indomethacin, naproxen); (2) Oral colchicine; and (3) Systemic or intra-articular GLUCOCORTICOIDS. In patients with CHRONIC KIDNEY DISEASE (eGFR < 30 mL/min), heart failure, or active peptic ulcer disease: (1) NSAIDs ARE STRICTLY CONTRAINDICATED because they inhibit renal prostaglandins, precipitating acute renal failure and fluid retention; (2) COLCHICINE IS CONTRAINDICATED (or requires extreme dose reduction) in severe renal impairment due to impaired clearance leading to fatal neuromyopathy and bone marrow suppression. Therefore, GLUCOCORTICOIDS (oral prednisone 30-35 mg/day with a short taper over 5-10 days, or intra-articular triamcinolone injection) ARE THE FIRST-LINE THERAPY OF CHOICE in patients with moderate-to-severe renal impairment or heart failure."
      ],
      [
        "High-dose oral indomethacin (50 mg three times daily for 7 days)",
        "NSAIDs are strictly contraindicated in stage 4 CKD (eGFR 22) and heart failure due to risk of acute hemodynamically mediated kidney injury."
      ],
      [
        "High-dose oral colchicine (1.2 mg followed by 0.6 mg every hour until diarrhea occurs)",
        "Colchicine accumulates in severe CKD, producing life-threatening fatal toxicity (neuromyopathy, rhabdomyolysis, cytopenias); hourly dosing is obsolete and toxic."
      ],
      [
        "Immediate initiation of oral allopurinol (300 mg daily) without anti-inflammatory coverage",
        "Allopurinol has no anti-inflammatory action and starting it during an acute flare mobilizes urate crystals, dramatically prolonging and worsening the flare."
      ],
      [
        "Intravenous rasburicase infusion administered as a single dose",
        "Rasburicase (recombinant urate oxidase) is indicated for tumor lysis syndrome prophylaxis in hematologic malignancy, not for acute outpatient gouty podagra."
      ]
    ],
    "shortestValidSolution": "Acute gout flare (podagra) + Stage 4 CKD (eGFR 22) = NSAIDs and Colchicine contraindicated -> Use Glucocorticoids (oral prednisone or intra-articular).",
    "necessaryInference": "Select glucocorticoids for acute gout flares in patients with severe chronic kidney disease (eGFR < 30 mL/min) where NSAIDs and colchicine are contraindicated.",
    "strongestDistractor": "High-dose oral indomethacin (50 mg three times daily for 7 days)",
    "distractorExclusion": "NSAIDs cause renal afferent arteriolar vasoconstriction, carrying an unacceptably high risk of irreversible acute renal failure in stage 4 CKD.",
    "citation": "FitzGerald GA, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32391934.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0573",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Chronic Gout Allopurinol Initiation with Anti-Inflammatory Prophylaxis",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man presents to the clinic 3 weeks after recovering from his third acute gout flare of the past 12 months. He has no joint pain today. Physical examination reveals firm, nodular, painless deposits on his bilateral olecranon bursae and along the helices of both ears (tophi). Laboratory studies show: serum uric acid 9.4 mg/dL (elevated; normal < 6.8 mg/dL), serum creatinine 1.0 mg/dL, and normal liver enzymes. He is eager to start urate-lowering therapy to prevent future flares and dissolve his tophi. Which of the following represents the most appropriate strategy for initiating urate-lowering therapy in this patient?",
    "choices": [
      [
        "Initiate low-dose allopurinol (100 mg daily) with concomitant low-dose colchicine (or low-dose NSAID) prophylaxis, titrating allopurinol monthly to achieve a serum urate < 5 mg/dL",
        "Urate-lowering therapy (ULT) is indicated in patients with gout who have: (1) >=2 flares per year; (2) Tophi on examination; (3) Radiographic joint damage from gout; or (4) Gout with CKD stage >=3 or nephrolithiasis. ALLOPURINOL (a xanthine oxidase inhibitor) is the guideline-recommended first-line agent. Two critical management principles: (1) START LOW AND TITRATE SLOW: Initiate allopurinol at 100 mg daily (or 50 mg in CKD) and titrate the dose every 2-4 weeks until the target serum urate level is reached (<6.0 mg/dL for general gout, or <5.0 mg/dL for severe tophaceous gout); (2) CONCOMITANT ANTI-INFLAMMATORY PROPHYLAXIS: Rapid reduction in serum urate destabilizes existing microtophi, shedding crystals and triggering MOBILIZATION FLARES. Therefore, concomitant anti-inflammatory prophylaxis (low-dose colchicine 0.5-0.6 mg daily or low-dose NSAID) MUST BE CO-PRESCRIBED for at least 3-6 months when starting allopurinol."
      ],
      [
        "Initiate high-dose allopurinol (600 mg daily) immediately without anti-inflammatory prophylaxis to rapidly clear tophaceous deposits",
        "Rapid, unprophylaxed urate lowering causes dramatic crystal mobilization, triggering severe, disabling acute polyarticular gout flares."
      ],
      [
        "Withhold all urate-lowering therapy until the patient experiences a fourth acute flare, and treat only with intermittent courses of prednisone",
        "Patients with tophi and frequent flares require definitive urate-lowering therapy to prevent progressive joint destruction and chronic tophaceous gout."
      ],
      [
        "Prescribe allopurinol monotherapy titrated solely to clinical flare frequency, without measuring follow-up serum uric acid levels",
        "Guidelines mandate a treat-to-target approach: serum urate must be monitored and suppressed below <6 mg/dL (or <5 mg/dL with tophi) to dissolve crystal stores."
      ],
      [
        "Initiate oral probenecid monotherapy without obtaining a baseline 24-hour urine uric acid excretion",
        "Probenecid is a second-line uricosuric agent that increases nephrolithiasis risk and is inferior to xanthine oxidase inhibitors like allopurinol in tophaceous disease."
      ]
    ],
    "shortestValidSolution": "Frequent gout flares + tophi + uric acid 9.4 = Allopurinol (titrated to target <5-6 mg/dL) + concomitant low-dose colchicine prophylaxis (prevents mobilization flares).",
    "necessaryInference": "Apply guideline management for chronic tophaceous gout: initiate allopurinol with concomitant anti-inflammatory prophylaxis to prevent mobilization flares.",
    "strongestDistractor": "Initiate high-dose allopurinol (600 mg daily) immediately without anti-inflammatory prophylaxis to rapidly clear tophaceous deposits",
    "distractorExclusion": "Starting high-dose allopurinol without anti-inflammatory prophylaxis triggers acute urate mobilization flares due to rapid dissolution of crystal surfaces.",
    "citation": "FitzGerald GA, et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020;72(6):744-760. PMID: 32391934.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0574",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Dermatomyositis Age-Appropriate Malignancy Screening",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old woman presents with progressive difficulty climbing stairs, getting out of deep chairs, and combing her hair over the past 3 months. She also reports an itchy facial rash. Physical examination reveals symmetric proximal muscle weakness (3/5 strength in hip flexors and shoulder abductors bilaterally; distal strength is 5/5). Skin examination shows a violaceous, purplish discoloration and edema surrounding both upper eyelids (heliotrope rash), and erythematous, scaly papules overlying the dorsal aspects of the metacarpophalangeal and interphalangeal joints bilaterally (Gottron papules). Laboratory studies demonstrate: serum creatine kinase 3,850 U/L (normal 30-200 U/L), aldolase 24 U/L (normal < 8 U/L), and strongly positive anti-transcriptional intermediary factor 1-gamma (anti-TIF1-gamma) autoantibodies. In addition to initiating systemic glucocorticoids, which of the following is the most critical next step in management?",
    "choices": [
      [
        "Perform comprehensive age- and sex-appropriate malignancy screening (including pelvic examination, transvaginal ultrasound, mammography, chest/abdomen/pelvis CT, and colonoscopy)",
        "This patient has DERMATOMYOSITIS, an inflammatory myopathy characterized by: (1) Proximal, symmetric muscle weakness; (2) Elevated muscle enzymes (CK, aldolase); and (3) Pathognomonic cutaneous signs: HELIOTROPE RASH (violaceous periorbital erythema/edema), GOTTRON PAPULES (violaceous papules over MCP/PIP/DIP joints), and Gottron sign (macular erythema over extensor joints). The critical clinical principle in adult dermatomyositis is its strong association with INTERNAL MALIGNANCY (occurring as a PARANEOPLASTIC SYNDROME in up to 15-30% of adult cases). Malignancy risk is particularly high in patients >50 years and those with ANTI-TIF1-GAMMA or ANTI-NXP-2 antibodies. Common associated malignancies include OVARIAN CANCER (highest relative risk in women), breast, lung, colorectal, and pancreatic carcinomas. Guidelines mandate COMPREHENSIVE AGE-APPROPRIATE CANCER SCREENING at diagnosis and annually for at least 3 years."
      ],
      [
        "Perform an urgent muscle biopsy of the clinically strongest muscle (e.g. gastrocnemius) to minimize patient morbidity",
        "Biopsies must target an affected, moderately weak muscle (e.g., quadriceps or deltoid); sampling an unaffected strong muscle yields a false-negative result."
      ],
      [
        "Discontinue all current medications and initiate therapeutic plasma exchange for presumed statin myopathy",
        "Gottron papules and heliotrope rash are pathognomonic for dermatomyositis and do not occur in statin-induced myopathy."
      ],
      [
        "Order serial echocardiograms and initiate lifelong oral hydroxychloroquine monotherapy without cancer workup",
        "Hydroxychloroquine treats skin rash only, not proximal myopathy; failing to screen for underlying occult malignancy overlooks a fatal paraneoplastic tumor."
      ],
      [
        "Prescribe oral pyridostigmine and perform repetitive nerve stimulation to evaluate the neuromuscular junction",
        "Pyridostigmine is indicated for myasthenia gravis, which causes fluctuating ocular/bulbar weakness with normal CK and lacks cutaneous signs."
      ]
    ],
    "shortestValidSolution": "Proximal weakness + heliotrope rash + Gottron papules + high CK + anti-TIF1-gamma = Dermatomyositis -> Age-appropriate malignancy screening (paraneoplastic).",
    "necessaryInference": "Recognize dermatomyositis (heliotrope rash, Gottron papules, proximal weakness, anti-TIF1-gamma) and its critical mandate for comprehensive malignancy screening.",
    "strongestDistractor": "Order serial echocardiograms and initiate lifelong oral hydroxychloroquine monotherapy without cancer workup",
    "distractorExclusion": "Fails to recognize that adult-onset dermatomyositis is a paraneoplastic syndrome in up to 30% of patients; omitting cancer screening overlooks treatable early-stage malignancies.",
    "citation": "Callen JP. Dermatomyositis. Lancet. 2000;355(9197):53-57. PMID: 10615903.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0575",
    "exam": "Step 2 CK",
    "subject": "Medicine",
    "system": "Musculoskeletal",
    "topic": "Inclusion Body Myositis Distal Finger Flexors vs Polymyositis",
    "provisionalDifficulty": 5,
    "stem": "A 69-year-old man presents with progressive weakness and muscle thinning in his hands and legs over the past 2 years. He reports frequent tripping and falling because his knees suddenly 'give way' when walking down stairs. He also has difficulty turning keys in door locks and opening jars. Physical examination reveals asymmetric weakness and marked atrophy of the deep finger flexors (flexor digitorum profundus; 3/5 strength) and wrist flexors, as well as pronounced bilateral quadriceps atrophy with 3/5 knee extension strength; shoulder abductor and pelvic girdle strength is relatively preserved (4+/5). Sensation and cranial nerves are intact. Serum creatine kinase is mildly elevated at 420 U/L (normal 30-200 U/L). Autoantibodies against cytosolic 5'-nucleotidase 1A (anti-cN1A) are positive. A muscle biopsy is performed. Which of the following histopathologic findings is most characteristic of this patient's condition?",
    "choices": [
      [
        "Basophilic rimmed vacuoles within muscle fibers, endomysial lymphocytic infiltrates invading non-necrotic fibers, and intracellular amyloid inclusions",
        "INCLUSION BODY MYOSITIS (IBM) is the most common idiopathic inflammatory myopathy in patients OVER 50 YEARS OF AGE. Unlike polymyositis and dermatomyositis, IBM possesses distinct clinical and pathologic features: (1) ASYMMETRIC, INDOLENT PROGRESSION over months to years; (2) CHARACTERISTIC DISTAL-AND-PROXIMAL PATTERN: selectively targets DEEP FINGER FLEXORS (weak grip, inability to turn keys or open jars) and QUADRICEPS (knee buckling, frequent falls walking down stairs); (3) MILD CK ELEVATION (<1,000 U/L, whereas PM/DM often exceed 5,000 U/L); (4) Strongly linked to ANTI-cN1A ANTIBODIES; (5) HISTOPATHOLOGIC TRIAD: (a) Endomysial mononuclear inflammation with CD8+ T cells invading non-necrotic fibers; (b) BASOPHILIC RIMMED VACUOLES (vacuoles lined with granular basophilic material on Gomori trichrome stain); and (c) INTRACELLULAR ACCUMULATION OF AMYLOID-LIKE PROTEINS (tau, ubiquitin, beta-amyloid). Crucially, IBM is CHARACTERISTICALLY REFRACTORY TO GLUCOCORTICOIDS and conventional immunosuppressants."
      ],
      [
        "Perivascular and interfascicular inflammation with perifascicular muscle fiber atrophy",
        "Perifascicular atrophy and perivascular CD4+ T cell inflammation are pathognomonic for DERMATOMYOSITIS, not inclusion body myositis."
      ],
      [
        "Endomysial mononuclear infiltrates invading non-necrotic fibers without vacuoles or amyloid deposits",
        "Isolated endomysial inflammation without rimmed vacuoles or amyloid is characteristic of POLYMYOSITIS, which causes symmetric proximal weakness and responds to steroids."
      ],
      [
        "Extensive myofiber necrosis with minimal inflammatory infiltrate and prominent muscle regeneration",
        "Necrotizing autoimmune myopathy (NAM) features marked myofiber necrosis with minimal inflammation and is associated with anti-SRP or anti-HMGCR antibodies."
      ],
      [
        "Non-caseating granulomas surrounding muscle fibers with Multinucleated giant cells",
        "Granulomatous myositis is seen in systemic sarcoidosis or tuberculosis, not inclusion body myositis."
      ]
    ],
    "shortestValidSolution": "Age > 50 + asymmetric deep finger flexor weakness + quadriceps atrophy + mild CK + anti-cN1A = Inclusion Body Myositis -> Basophilic rimmed vacuoles.",
    "necessaryInference": "Distinguish inclusion body myositis (elderly, finger flexor/quadriceps weakness, refractory to steroids) by its biopsy finding: basophilic rimmed vacuoles.",
    "strongestDistractor": "Endomysial mononuclear infiltrates invading non-necrotic fibers without vacuoles or amyloid deposits",
    "distractorExclusion": "Pure endomysial infiltrates without rimmed vacuoles define polymyositis (symmetric proximal weakness); IBM characteristically shows basophilic rimmed vacuoles and amyloid deposits.",
    "citation": "Greenberg SA. Inclusion body myositis: clinical features and pathogenesis. Nat Rev Rheumatol. 2019;15(5):257-272. PMID: 30872810.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield Step 2 CK rheumatology/autoimmune clinical management item requiring diagnostic differentiation and evidence-based pharmacotherapy.",
      "distractorExclusionNotes": "Distractors represent closely competing autoimmune conditions, contraindications in renal/hepatic failure, or inappropriate immunosuppressive regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
