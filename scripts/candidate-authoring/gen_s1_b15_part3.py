import json

items_b15_p3 = [
  # 0361
  {
    "code": "op-c-s1-0361",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Membranous Nephropathy Anti-PLA2R Antibodies and Spike and Dome",
    "subtopic": "Subepithelial In Situ Immune Complex Formation and Glomerular Basement Membrane Spikes",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old Caucasian man presents with progressive bilateral lower extremity edema, facial puffiness, and frothy urine. Blood pressure is 142/88 mm Hg. Urinalysis demonstrates 4+ proteinuria, with zero red blood cells and zero cellular casts. 24-hour urine collection reveals 8.2 g of protein. Serum albumin is 2.2 g/dL, total cholesterol is 380 mg/dL, and serum creatinine is 1.1 mg/dL. Serological testing is strongly positive for circulating autoantibodies against the M-type phospholipase A2 receptor (PLA2R). Periodic acid-methenamine silver (PAM) stain of a renal biopsy specimen demonstrates diffuse thickening of the capillary loops with prominent silver-positive projections protruding outward from the basement membrane into the subepithelial space ('spike and dome' pattern). Immunofluorescence demonstrates fine granular IgG4 and C3 deposition along all glomerular capillary loops. Which of the following electron microscopic findings is diagnostic of this condition?",
    "choices": [
      ["Electron-dense deposits located strictly in the subepithelial space between the outer surface of the glomerular basement membrane and overlying effaced podocytes", "Correct. Primary Membranous Nephropathy (MN) is the most common cause of nephrotic syndrome in Caucasian adults. In > 70-80% of primary cases, it is an autoimmune disease driven by circulating IgG4 autoantibodies targeting the M-TYPE PHOSPHOLIPASE A2 RECEPTOR (PLA2R), a transmembrane glycoprotein constitutively expressed on visceral epithelial cells (podocytes). Autoantibodies cross the fenestrated endothelium and GBM to bind PLA2R in situ on the subepithelial surface of podocytes, activating complement (C5b-9 membrane attack complex) and damaging the slit diaphragm. Characteristic renal biopsy findings: (1) LIGHT MICROSCOPY: Diffuse, uniform thickening of all glomerular capillary walls without hypercellularity; silver stain demonstrates 'SPIKES' of newly synthesized GBM material protruding between the immune complexes ('spike and dome' pattern); (2) IMMUNOFLUORESCENCE: Fine, granular deposition of IgG and C3 outlining every capillary loop; (3) ELECTRON MICROSCOPY: Discontinuous, electron-dense deposits located strictly in the SUBEPITHELIAL SPACE (under the podocytes). Secondary causes include hepatitis B, NSAIDs, penicillamine, SLE (Class V), and solid organ malignancies (colon, lung, prostate). Complications include high risk of RENAL VEIN THROMBOSIS."],
      ["Electron-dense deposits localized exclusively within the subendothelial space between endothelial cells and the lamina densa", "Subendothelial deposits are characteristic of Membranoproliferative Glomerulonephritis Type I and Lupus Nephritis Class IV (wire-loop lesions), causing nephritic syndrome with low C3, not primary membranous nephropathy."],
      ["Extensive electron-dense transformation and ribbon-like thickening within the lamina densa of the basement membrane", "Ribbon-like dense deposits within the lamina densa define Dense Deposit Disease (MPGN Type II; C3 nephropathy / C3 nephritic factor), not membranous nephropathy."],
      ["Discrete electron-dense humps protruding from the subepithelial surface associated with endocapillary neutrophils", "Large subepithelial humps with neutrophilic hypercellularity are the hallmark of Post-Streptococcal Glomerulonephritis, which has low C3 and post-infectious nephritic presentation."],
      ["Purely mesangial electron-dense deposits with prominent expansion of the paramesangial matrix", "Pure mesangial deposits define IgA nephropathy (Berger disease) and Lupus Nephritis Class II, presenting with recurrent gross hematuria, not nephrotic PLA2R-positive membranous nephropathy."]
    ],
    "shortestValidSolution": "Adult nephrotic syndrome + anti-PLA2R antibodies + 'spike and dome' on silver stain -> Membranous nephropathy (subepithelial electron-dense deposits).",
    "necessaryInference": "Nephrotic syndrome + anti-PLA2R antibodies + spike-and-dome pattern = Membranous Nephropathy. The electron microscopic hallmark is electron-dense deposits located in the subepithelial space beneath the podocytes.",
    "strongestDistractor": "Electron-dense deposits localized exclusively within the subendothelial space between endothelial cells and the lamina densa",
    "distractorExclusion": "Subendothelial deposits define MPGN Type I and diffuse proliferative lupus nephritis, whereas membranous nephropathy deposits are strictly subepithelial.",
    "citation": "Beck LH Jr, Bonegio RG, Lambeau G, et al. M-type phospholipase A2 receptor as target antigen in idiopathic membranous nephropathy. N Engl J Med. 2009;361(1):11-21. PMID: 19571279."
  },
  # 0362
  {
    "code": "op-c-s1-0362",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Membranoproliferative Glomerulonephritis Tram-Track Basement Membrane",
    "subtopic": "Subendothelial Immune Deposits with Mesangial Interposition and GBM Splitting",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old woman with a 10-year history of chronic hepatitis C virus infection presents with hematuria, lower extremity edema, and purpuric papules on both lower legs. Laboratory evaluation demonstrates: - Serum Creatinine: 1.9 mg/dL - Serum Albumin: 2.7 g/dL - 24-hour urine protein: 3.8 g - Serum Complement C3: 38 mg/dL (markedly depressed; normal 80-160 mg/dL) - Serum Complement C4: 6 mg/dL (markedly depressed; normal 16-48 mg/dL) - Cryoglobulins: Strongly positive (mixed cryoglobulinemia) Light microscopy of a renal biopsy stained with periodic acid-Schiff (PAS) and silver stain demonstrates enlarged, hypercellular, lobular glomeruli with marked mesangial proliferation. The glomerular capillary walls show striking duplication and double-contour basement membrane splitting, creating a classic 'tram-track' appearance. Which of the following cellular processes directly produces this 'tram-track' double-contour appearance on light microscopy?",
    "choices": [
      ["Mesangial cell cytoplasmic interposition into the subendothelial space accompanied by new basement membrane matrix synthesis", "Correct. Membranoproliferative Glomerulonephritis Type I (MPGN Type I) is an immune complex-mediated glomerulonephritis most commonly associated with CHRONIC HEPATITIS C VIRUS INFECTION (with mixed cryoglobulinemia), subacute bacterial endocarditis, or autoimmune diseases. Circulating cryoglobulins or HCV immune complexes deposit in the SUBENDOTHELIAL SPACE of glomerular capillaries, activating the classical complement cascade (causing MARKED CONSUMPTION OF BOTH C3 AND C4). Pathophysiology of the 'tram-track' lesion: In response to subendothelial immune deposits and chemotactic factors, MESANGIAL CELL PROCESSES EXTEND (INTERPOSE) AROUND THE CAPILLARY LOOPS INTO THE SUBENDOTHELIAL SPACE between the endothelium and the original basement membrane. As the interposed mesangial cells migrate, they synthesize a new, second layer of basement membrane material. On silver or PAS stains, this creates a distinctive 'DOUBLE CONTOUR' OR 'TRAM-TRACK' appearance of the split glomerular basement membrane."],
      ["Podocyte detachment from the lamina rara externa triggering parietal epithelial cell crescent formation", "Podocyte detachment with parietal cell proliferation in Bowman space forms crescents (Rapidly Progressive Glomerulonephritis), not the double-contour tram-track duplication of MPGN."],
      ["Transmural neutrophilic infiltration of the arteriolar wall with concentric 'onion-skin' intimal hyperplasia", "Onion-skin intimal hyperplasia occurs in hyperplastic arteriolosclerosis secondary to malignant hypertension, not glomerular capillary basement membrane splitting."],
      ["Linear deposition of unbranched immunoglobulin light chains along the lamina densa causing mechanical splitting", "Light chain deposition disease causes continuous linear non-amyloid light-chain staining without mesangial interposition or tram-track doubling."],
      ["Endothelial cell swelling and loss of fenestrae driven by Shiga toxin-mediated ribosome inactivation", "Endothelial swelling and microvascular thrombosis are the hallmarks of Thrombotic Microangiopathy (HUS/TTP), not classic lobular MPGN."]
    ],
    "shortestValidSolution": "Hepatitis C + mixed cryoglobulinemia + low C3/C4 + 'tram-track' double-contour GBM -> MPGN Type I (mesangial cell interposition into subendothelial space).",
    "necessaryInference": "Hepatitis C + low C3/C4 + tram-track appearance = MPGN Type I. The tram-track double-contour basement membrane splitting is caused by mesangial cell interposition and extension into the subendothelial space.",
    "strongestDistractor": "Podocyte detachment from the lamina rara externa triggering parietal epithelial cell crescent formation",
    "distractorExclusion": "Parietal epithelial proliferation forms cellular crescents in Bowman space (RPGN), whereas tram-tracks represent mesangial interposition inside the capillary wall.",
    "citation": "Sethi S, Fervenza FC. Membranoproliferative glomerulonephritis: pathogenetic classification and mechanism-based approach to therapy. Nephrol Dial Transplant. 2017;32(suppl_1):i40-i48. PMID: 28391349."
  },
  # 0363
  {
    "code": "op-c-s1-0363",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Granulomatosis with Polyangiitis Immunofluorescence",
    "subtopic": "Pauci-Immune Crescentic Glomerulonephritis without Immune Deposits",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man presents with a 4-month history of progressive nasal congestion, purulent rhinorrhea, recurrent epistaxis, and mild hemoptysis. He has completed three separate outpatient courses of oral amoxicillin-clavulanate for presumed refractory bacterial sinusitis without clinical improvement. Over the past 2 weeks, he notes bilateral lower extremity swelling, gross tea-colored urine, and generalized malaise.\n\nOn physical examination, temperature is 37.8\u00b0C (100.0\u00b0F), blood pressure is 152/94 mm Hg, and pulse is 84/min. Anterior rhinoscopy reveals extensive friable mucosal ulcerations, crusting, and a focal cartilaginous perforation of the anterior nasal septum. Chest auscultation reveals crackles at both lung bases. Bilateral 2+ pretibial pitting edema is present.\n\nLaboratory findings:\n- Serum creatinine: 3.1 mg/dL (baseline was 0.9 mg/dL 6 months ago)\n- Blood urea nitrogen: 38 mg/dL\n- Urinalysis: 3+ blood, 2+ protein; microscopic examination reveals numerous dysmorphic red blood cells and RBC casts\n- Chest computed tomography: Multiple bilateral thick-walled cavitary nodules and patchy ground-glass infiltrates\n\nAn urgent percutaneous renal biopsy is performed, demonstrating extensive glomerular crescent formation with segmental fibrinoid necrosis. Which of the following immunofluorescence microscopic patterns on this patient's renal biopsy is most characteristic of his underlying disorder?",
    "choices": [
        [
            "Pauci-immune pattern with virtually absent or trace, non-specific staining for IgG, IgM, IgA, and complement C3",
            "The clinical triad of necrotizing destructive upper respiratory lesions (persistent purulent rhinosinusitis, mucosal ulceration, septal perforation), lower respiratory cavitary lesions with hemoptysis, and rapidly progressive glomerulonephritis (RPGN with dysmorphic RBCs, RBC casts, and rapid rise in creatinine) is classic for Granulomatosis with Polyangiitis (GPA, formerly Wegener granulomatosis). GPA is an ANCA-associated small-vessel necrotizing vasculitis driven by autoantibodies against proteinase 3 (PR3-ANCA / cytoplasmic c-ANCA). The hallmark histopathology of ANCA-associated glomerulonephritis is necrotizing crescentic glomerulonephritis with a 'pauci-immune' immunofluorescence pattern\u2014meaning there is virtually NO significant deposition of immunoglobulins (IgG, IgM, IgA) or complement components along the glomerular basement membrane or in the mesangium, differentiating it from immune-complex or anti-GBM mediated glomerulonephritis."
        ],
        [
            "Smooth, ribbon-like linear IgG and complement C3 deposition along the entire glomerular basement membrane",
            "Linear IgG deposition along the GBM is diagnostic of Anti-Glomerular Basement Membrane (anti-GBM) disease (Goodpasture syndrome). While Goodpasture also causes pulmonary hemorrhage and RPGN (pulmonary-renal syndrome), it does NOT cause destructive upper respiratory mucosal disease or nasal septal perforation."
        ],
        [
            "Coarse, granular 'lumpy-bumpy' deposition of IgG and complement C3 in the capillary loops and mesangium",
            "Coarse granular subepithelial immune complex deposition is characteristic of post-streptococcal glomerulonephritis (PSGN), which presents with hematuria and edema after pharyngitis or impetigo, not chronic destructive necrotizing cavitary pulmonary lesions."
        ],
        [
            "Subendothelial electron-dense immune deposits with mesangial cellular interposition creating a 'tram-track' appearance",
            "Subendothelial immune complex deposits with mesangial interposition and GBM splitting (tram-tracks) define Membranoproliferative Glomerulonephritis (MPGN Type 1), typically associated with hepatitis C and cryoglobulinemia, not destructive cavitary airway disease."
        ],
        [
            "Predominant IgA and C3 deposition confined to the glomerular mesangial matrix",
            "Mesangial IgA deposition is diagnostic of IgA nephropathy (Berger disease) or Henoch-Sch\u00f6nlein purpura (IgA vasculitis), which present with recurrent gross hematuria following upper respiratory infections or palpable purpura, not destructive necrotizing pulmonary cavitations."
        ]
    ],
    "shortestValidSolution": "Destructive upper airway ulceration/septal perforation + pulmonary cavitary nodules + rapidly progressive glomerulonephritis = GPA (ANCA vasculitis) -> renal biopsy is pauci-immune (absent/scant Ig and C3 on IF).",
    "necessaryInference": "Integrate upper respiratory mucosal ulceration, cavitary lung disease, and RPGN to diagnose GPA, and deduce that its renal biopsy is pauci-immune, distinguishing it from anti-GBM (linear) and immune complex (granular) diseases.",
    "strongestDistractor": "Smooth, ribbon-like linear IgG and complement C3 deposition along the entire glomerular basement membrane",
    "distractorExclusion": "Linear GBM IgG characterizes Goodpasture syndrome, which lacks destructive upper respiratory ulcerations and septal perforations.",
    "citation": "Jennette JC. Rapidly progressive crescentic glomerulonephritis. Kidney Int. 2003;63(3):1164-1177. PMID: 12631375."
},
  # 0364
  {
    "code": "op-c-s1-0364",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Renal",
    "topic": "Microscopic Polyangiitis p-ANCA / MPO-ANCA",
    "subtopic": "Pauci-Immune Necrotizing Vasculitis Without Granulomas or Nasopharyngeal Involvement",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man presents with fatigue, low-grade fevers, non-productive cough, and dark tea-colored urine over the past 3 weeks. He has no history of chronic sinusitis, rhinitis, or nasal discharge, and examination of his ears, nose, and throat is completely normal. Chest CT demonstrates patchy, non-cavitary ground-glass infiltrates in both lower lobes consistent with alveolar hemorrhage; there are no pulmonary nodules or granulomas. Laboratory evaluation reveals: - Serum Creatinine: 3.4 mg/dL (baseline 1.0 mg/dL) - Urinalysis: 3+ blood, 2+ protein, and numerous dysmorphic RBCs and red blood cell casts Indirect immunofluorescence of serum neutrophils reveals a perinuclear staining pattern (p-ANCA), and ELISA confirms high-titer antibodies directed against myeloperoxidase (MPO-ANCA). Renal biopsy confirms a pauci-immune necrotizing and crescentic glomerulonephritis without immune complex deposition. Which of the following features best distinguishes this patient's disease (microscopic polyangiitis) from granulomatosis with polyangiitis (GPA)?",
    "choices": [
      ["Absence of granulomatous inflammation, absence of cavitary pulmonary nodules, and absence of upper respiratory tract (nasopharyngeal) destructive lesions", "Correct. Master the differentiation between the two major ANCA-associated vasculitides on USMLE Step 1: (1) MICROSCOPIC POLYANGIITIS (MPA; present in this patient): A systemic necrotizing small-vessel vasculitis affecting arterioles, capillaries, and venules. Key hallmarks: Highly associated with PERINUCLEAR ANCA (P-ANCA) directed against MYELOPEROXIDASE (MPO-ANCA; in ~70-80%); Rapidly progressive crescentic glomerulonephritis (pauci-immune); Pulmonary alveolar hemorrhage (hemoptysis, ground-glass infiltrates). CRUCIAL NEGATIVE FINDINGS THAT DEFINE MPA: (a) ABSOLUTELY NO GRANULOMAS (non-granulomatous necrotizing vasculitis); (b) NO CAVITARY LUNG NODULES; (c) NO UPPER RESPIRATORY TRACT / NASOPHARYNGEAL INVOLVEMENT (no chronic sinusitis, no saddle-nose deformity). (2) GRANULOMATOSIS WITH POLYANGIITIS (GPA): Highly associated with C-ANCA / PR3-ANCA (>90%); PROMINENT NECROTIZING GRANULOMAS; PROMINENT UPPER RESPIRATORY TRACT DESTRUCTION (sinusitis, saddle-nose); CAVITARY PULMONARY NODULES."],
      ["Presence of prominent tissue and peripheral blood eosinophilia associated with severe adult-onset asthma", "Marked eosinophilia and adult-onset asthma define Eosinophilic Granulomatosis with Polyangiitis (EGPA; Churg-Strauss syndrome), which is also p-ANCA positive, but features asthma and allergic rhinitis."],
      ["Presence of abundant subendothelial immune complex deposits with classical complement consumption", "Both MPA and GPA are pauci-immune vasculitides that lack immune complex deposition and feature normal serum complement levels."],
      ["Transmural necrotizing inflammation of medium-sized muscular arteries sparing arterioles and venules", "Sparing of arterioles and venules defines Polyarteritis Nodosa (PAN), which affects medium-sized muscular arteries (often hepatitis B associated) and is ANCA-negative."],
      ["Linear deposition of anti-type IV collagen antibodies along the glomerular basement membrane", "Linear anti-type IV collagen antibodies define Anti-GBM / Goodpasture disease, which is not an ANCA-mediated vasculitis."]
    ],
    "shortestValidSolution": "p-ANCA / MPO + crescentic GN + alveolar hemorrhage WITHOUT sinusitis/granulomas -> Microscopic polyangiitis (lacks granulomas and upper airway lesions).",
    "necessaryInference": "Differentiate MPA from GPA: MPA is p-ANCA / MPO positive, causes pauci-immune crescentic GN and pulmonary capillaritis, but completely lacks granulomas, cavitary nodules, or upper respiratory destructive lesions.",
    "strongestDistractor": "Presence of prominent tissue and peripheral blood eosinophilia associated with severe adult-onset asthma",
    "distractorExclusion": "Asthma and eosinophilia define EGPA (Churg-Strauss), whereas MPA lacks asthma and eosinophilia.",
    "citation": "Chung SA, Seo P. Microscopic polyangiitis. Rheum Dis Clin North Am. 2010;36(3):545-558. PMID: 20688249."
  },
  # 0365
  {
    "code": "op-c-s1-0365",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Renal",
    "topic": "Anti-Glomerular Basement Membrane Disease Goodpasture Antigen",
    "subtopic": "Linear IgG Staining Against Non-Collagenous Domain of Alpha-3 Type IV Collagen",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old previously healthy man presents to the emergency department with hemoptysis, shortness of breath, and dark red urine over the past 48 hours. Physical examination reveals tachypnea, pale conjunctivae, and bilateral diffuse pulmonary crackles. Urinalysis demonstrates 3+ blood, 2+ protein, and numerous dysmorphic erythrocytes and red blood cell casts. Serum creatinine is 4.6 mg/dL (rapidly progressive renal failure). Serum complement C3 and C4 levels are normal, and serological testing for c-ANCA and p-ANCA is negative. Renal biopsy demonstrates cellular crescents in 80% of glomeruli. Direct immunofluorescence microscopy reveals a smooth, unbroken, continuous LINEAR RIBBON of IgG and C3 deposition outlining all glomerular capillary basement membranes. In this disease, the pathogenic autoantibodies are directed against which of the following specific extracellular matrix molecular targets?",
    "choices": [
      ["Non-collagenous-1 (NC1) domain of the alpha-3 chain of Type IV collagen", "Correct. Anti-Glomerular Basement Membrane (Anti-GBM) disease (Goodpasture syndrome when pulmonary alveolar hemorrhage is co-present with glomerulonephritis) is a severe Type II hypersensitivity autoimmune disorder. The pathogenic autoantibodies (predominantly IgG1 and IgG3) are directed against a cryptic epitope within the NON-COLLAGENOUS-1 (NC1) DOMAIN OF THE ALPHA-3 CHAIN OF TYPE IV COLLAGEN [alpha-3(IV)NC1; the 'Goodpasture antigen']. Type IV collagen is a network-forming collagen found in basement membranes throughout the body; however, the alpha-3(IV) chain is selectively expressed in high concentrations in the GLOMERULAR BASEMENT MEMBRANE (GBM) and the ALVEOLAR CAPILLARY BASEMENT MEMBRANE of the lung. Binding of autoantibodies activates the classical complement cascade and recruits neutrophils via Fc-gamma receptors, triggering rapid capillary wall necrosis, alveolar hemorrhage (hemoptysis), and crescentic glomerulonephritis. PATHOGNOMONIC BIOPSY LESION: On direct immunofluorescence, anti-GBM antibodies produce a smooth, continuous, completely uniform LINEAR PATTERN of IgG staining along the GBM (in sharp contrast to the granular pattern of immune complex GN or negative staining of pauci-immune GN)."],
      ["Heparan sulfate proteoglycans residing within the lamina rara externa of the filtration barrier", "Heparan sulfate provides the negative electrostatic charge barrier; loss occurs in Minimal Change Disease, not anti-GBM disease."],
      ["N-terminal 7S domain of the alpha-1 chain of Type IV collagen", "The Goodpasture autoantibody targets the C-terminal non-collagenous NC1 domain of the alpha-3 chain, not the N-terminal 7S domain of the alpha-1 chain."],
      ["Extracellular domain IV of the M-type phospholipase A2 receptor (PLA2R) on podocyte surfaces", "Anti-PLA2R antibodies cause Membranous Nephropathy (granular subepithelial deposits), not linear crescentic anti-GBM disease."],
      ["Filamin-interacting domain of nephrin within the podocyte slit diaphragm complex", "Nephrin mutations cause congenital nephrotic syndrome of the Finnish type, not autoimmune linear anti-GBM disease."]
    ],
    "shortestValidSolution": "Hemoptysis + crescentic GN + linear IgG on immunofluorescence -> Goodpasture / Anti-GBM (targets NC1 domain of alpha-3 chain of Type IV collagen).",
    "necessaryInference": "Hemoptysis + rapidly progressive GN + linear IF = Anti-GBM disease. The specific molecular target of Goodpasture autoantibodies is the NC1 domain of the alpha-3 chain of Type IV collagen.",
    "strongestDistractor": "N-terminal 7S domain of the alpha-1 chain of Type IV collagen",
    "distractorExclusion": "The target is specifically the NC1 domain of the alpha-3 chain of Type IV collagen, not alpha-1.",
    "citation": "Pusey CD. Anti-glomerular basement membrane disease. Kidney Int. 2003;64(4):1535-1550. PMID: 12969185."
  }
]

print(f"Loaded {len(items_b15_p3)} items for Batch 15 part 3.")
