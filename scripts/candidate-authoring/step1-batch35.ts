import { CandidateSpec } from './types';

export const step1Batch35: CandidateSpec[] = [
  {
    "code": "op-c-s1-0851",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "SCID IL-2RG Common Gamma Chain vs Adenosine Deaminase Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 3-month-old male infant presents with chronic candidal diaper dermatitis, persistent oral thrush, intractable watery diarrhea with failure to thrive, and severe Pneumocystis jirovecii pneumonia. Complete blood count reveals severe lymphopenia with an absolute lymphocyte count of 420/uL (normal > 3,000/uL). Flow cytometry demonstrates absent T cells (CD3+ < 1%) and absent natural killer cells (CD16+/CD56+ < 1%), but normal or elevated numbers of immature B cells (CD19+ 92%). Serum IgG, IgA, and IgM levels are all profoundly diminished. Chest radiography confirms the complete absence of a thymic shadow. Which of the following molecular defects accounts for this patient's T(-) B(+) NK(-) severe combined immunodeficiency (SCID)?",
    "choices": [
      [
        "X-linked mutation in the IL2RG gene encoding the common gamma chain shared by interleukin receptors",
        "X-LINKED SEVERE COMBINED IMMUNODEFICIENCY (X-SCID) accounts for approx. 50% of all SCID cases and is caused by pathogenic mutations in the IL2RG gene on chromosome Xq13.1. This gene encodes the COMMON GAMMA CHAIN (gamma-c, CD132) shared by cytokine receptors for IL-2, IL-4, IL-7, IL-9, IL-15, and IL-21. Defective IL-7 signaling halts thymic T-cell differentiation (causing profound T-cell absence and absent thymic shadow), while defective IL-15 signaling prevents natural killer (NK) cell development. B cells are present in normal numbers (T- B+ NK- phenotype) because early B-cell ontogeny does not require the common gamma chain, but B cells are functionally inert and cannot produce antibodies due to the lack of T-cell help. In contrast, ADENOSINE DEAMINASE (ADA) deficiency causes T(-) B(-) NK(-) SCID due to toxic dATP accumulation in all lymphocytes."
      ],
      [
        "Autosomal recessive deficiency of adenosine deaminase causing intracellular accumulation of deoxyadenosine",
        "Adenosine deaminase (ADA) deficiency causes autosomal recessive SCID with a T(-) B(-) NK(-) phenotype because toxic dATP accumulation causes apoptosis in all lymphocyte lineages, including B cells."
      ],
      [
        "Bruton tyrosine kinase (BTK) mutation arresting B-cell differentiation at the pre-B stage",
        "BTK deficiency causes X-linked agammaglobulinemia, characterized by absent B cells (CD19/CD20 = 0) with completely normal T-cell and NK-cell numbers."
      ],
      [
        "Microdeletion of chromosome 22q11.2 causing failure of third and fourth pharyngeal pouch development",
        "DiGeorge syndrome (22q11.2 deletion) causes thymic hypoplasia with variable T-cell deficiency, but B cells and NK cells are normal, and patients typically exhibit hypocalcemia and conotruncal cardiac anomalies."
      ],
      [
        "Mutation in the RAG1 or RAG2 genes impairing V(D)J somatic recombination in antigen receptors",
        "RAG1/RAG2 mutations cause autosomal recessive SCID with a T(-) B(-) NK(+) phenotype, as V(D)J recombination is required for both T-cell receptors and B-cell immunoglobulins, but not NK cells."
      ]
    ],
    "shortestValidSolution": "Severe infections + absent thymic shadow + T(-) B(+) NK(-) phenotype = X-linked SCID (IL2RG common gamma chain defect).",
    "necessaryInference": "Use the T(-) B(+) NK(-) flow cytometry pattern to distinguish X-linked common gamma chain SCID from ADA deficiency (T- B- NK-) and RAG deficiency (T- B- NK+).",
    "strongestDistractor": "Autosomal recessive deficiency of adenosine deaminase causing intracellular accumulation of deoxyadenosine",
    "distractorExclusion": "ADA deficiency is toxic to all lymphoid lineages, producing a T(-) B(-) NK(-) phenotype; this patient has preserved B cells (T- B+ NK-), diagnostic of IL2RG.",
    "citation": "Buckley RH. Molecular defects in human severe combined immunodeficiency and approaches to immune reconstitution. Annu Rev Immunol. 2004;22:625-655. PMID: 15032591.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology question differentiating SCID molecular subtypes using flow cytometric T/B/NK cell markers.",
      "distractorExclusionNotes": "Excluded ADA (T- B- NK-), RAG (T- B- NK+), and BTK (isolated B-cell failure) based on the T- B+ NK- profile.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0852",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "X-Linked Agammaglobulinemia Bruton Tyrosine Kinase Pre-B Cell Arrest",
    "provisionalDifficulty": 4,
    "stem": "A 9-month-old male infant presents with his third episode of acute otitis media and second episode of lobar Streptococcus pneumoniae pneumonia in the past 4 months. He was healthy until 6 months of age, when recurrent sinopulmonary bacterial infections began. Physical examination reveals absent pharyngeal lymphoid tissue (scanty, nearly invisible tonsils) and no palpable cervical lymph nodes despite active purulent bacterial infection. Serum immunoglobulin quantification reveals: IgG 45 mg/dL (normal 300-1,000 mg/dL), IgA < 5 mg/dL, and IgM 12 mg/dL. Peripheral blood flow cytometry demonstrates completely normal numbers of mature CD3+ T lymphocytes and CD16+/CD56+ NK cells, but CD19+ and CD20+ B lymphocytes are virtually undetectable (< 0.1%). Which of the following cellular developmental stages is arrested in this patient's bone marrow?",
    "choices": [
      [
        "Pre-B cell stage due to failure of light-chain gene rearrangement mediated by Bruton tyrosine kinase",
        "X-LINKED AGAMMAGLOBULINEMIA (XLA / BRUTON AGAMMAGLOBULINEMIA) is caused by loss-of-function mutations in the BTK gene on chromosome Xq22.1, which encodes BRUTON TYROSINE KINASE, a non-receptor cytoplasmic tyrosine kinase. In bone marrow B-cell lymphopoiesis, pre-B cell receptor signaling via BTK is essential for survival, allelic exclusion, and transition from the PRE-B CELL STAGE (heavy chain rearranged and expressed with surrogate light chains) to the IMMATURE B CELL STAGE (rearrangement of kappa/lambda light chains). Defective BTK causes complete maturation arrest at the pre-B stage, leading to apoptotic clearance in the marrow. Consequently, NO MATURE B CELLS (CD19-/CD20-) enter peripheral blood, secondary lymphoid organs lack germinal centers (hypoplastic tonsils, absent lymph nodes), and all immunoglobulin isotypes are profoundly depleted after maternal IgG wanes at 6 months."
      ],
      [
        "Pro-B cell stage due to failure of immunoglobulin heavy-chain D-to-J gene segment rearrangement",
        "Heavy-chain D-to-J rearrangement occurs in early pro-B cells and requires RAG1/RAG2 recombinases; BTK acts downstream at the pre-B stage after heavy-chain assembly."
      ],
      [
        "Mature naive B-cell stage due to failure of CD40-mediated class-switch recombination in lymph nodes",
        "Arrest at the mature naive B-cell stage occurs in Hyper-IgM syndrome (CD40L defect), where B-cell numbers are normal but class-switching fails."
      ],
      [
        "Plasmablast stage due to impaired somatic hypermutation mediated by activation-induced cytidine deaminase",
        "Defects in activation-induced cytidine deaminase (AID) prevent somatic hypermutation and class-switching, causing autosomal recessive Hyper-IgM syndrome with normal B-cell counts."
      ],
      [
        "Common lymphoid progenitor stage due to failure of IL-7 receptor alpha-chain signaling cascades",
        "Common lymphoid progenitor failure impairs both T and B cell lineage development, producing SCID rather than isolated B-cell deficiency."
      ]
    ],
    "shortestValidSolution": "Infant male + absent tonsils + absent B cells (CD19 < 0.1%) + all Igs low = Bruton agammaglobulinemia (maturation arrest at pre-B cell stage).",
    "necessaryInference": "Map BTK signaling defect specifically to developmental arrest at the pre-B cell stage in bone marrow.",
    "strongestDistractor": "Mature naive B-cell stage due to failure of CD40-mediated class-switch recombination in lymph nodes",
    "distractorExclusion": "In CD40L Hyper-IgM syndrome, mature naive B cells are normal in number (CD19+ normal); XLA has complete absence of peripheral B cells.",
    "citation": "Conley ME, Dobbs AK, Farmer DM, et al. Primary B cell immunodeficiencies: comparisons and contrasts. Annu Rev Immunol. 2009;27:199-227. PMID: 19302039.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology question on B-cell lymphopoiesis stages and BTK kinase signaling.",
      "distractorExclusionNotes": "Excluded Hyper-IgM (normal B-cell numbers) and pro-B RAG defects based on pre-B stage arrest and hypoplastic lymphoid tissue.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0853",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Hyper-IgM Syndrome CD40L Defect and Class-Switch Recombination Failure",
    "provisionalDifficulty": 5,
    "stem": "A 10-month-old male infant presents with persistent fever, tachypnea, and diffuse bilateral interstitial infiltrates. Bronchoalveolar lavage demonstrates cyst walls of Pneumocystis jirovecii on methenamine silver staining. He also has a history of recurrent severe Cryptosporidium parvum watery diarrhea and recurrent otitis media. Physical examination reveals normal pharyngeal tonsils and palpable cervical lymph nodes. Complete blood count shows absolute neutrophil count of 450/uL (severe neutropenia), normal absolute lymphocyte count, and normal numbers of circulating CD19+ B lymphocytes. Immunoglobulin quantification demonstrates: serum IgM markedly elevated at 480 mg/dL (normal 40-140 mg/dL), serum IgG profoundly decreased at 38 mg/dL, and serum IgA undetectable. Flow cytometry demonstrates absent expression of CD154 on activated helper T cells. Which of the following molecular interactions is disrupted in this patient?",
    "choices": [
      [
        "Engagement of CD40 on B cells and macrophages by CD40L (CD154) on activated CD4+ T helper cells",
        "X-LINKED HYPER-IgM SYNDROME is caused by mutations in the CD40LG gene on the X chromosome, which encodes CD40 LIGAND (CD40L / CD154), a transmembrane protein expressed on activated CD4+ T helper cells. CD40L binds constitutively expressed CD40 on B cells, dendritic cells, and macrophages. In B cells, CD40-CD40L costimulation activates NF-kappa-B and upregulates ACTIVATION-INDUCED CYTIDINE DEAMINASE (AID), driving IMMUNOGLOBULIN CLASS-SWITCH RECOMBINATION (from IgM/IgD to IgG, IgA, and IgE) and somatic hypermutation. Without CD40L, B cells secrete only IgM (normal/elevated IgM, profoundly low IgG/IgA/IgE). In macrophages, lack of CD40L engagement prevents macrophage activation and cytokine production, severely impairing CELL-MEDIATED IMMUNITY and predisposing to opportunistic infections (Pneumocystis jirovecii, Cryptosporidium) and chronic neutropenia."
      ],
      [
        "Interaction between B7-1/B7-2 (CD80/CD86) on antigen-presenting cells and CD28 on naive T cells",
        "B7-CD28 interaction provides essential costimulation for naive T-cell activation; blockade impairs general T-cell activation without the isolated Hyper-IgM phenotype."
      ],
      [
        "Binding of programmed death ligand-1 (PD-L1) to PD-1 on exhausted cytotoxic T lymphocytes",
        "PD-1/PD-L1 is an inhibitory checkpoint pathway involved in immune tolerance and tumor evasion, not B-cell class-switch recombination."
      ],
      [
        "Engagement of fas ligand (CD178) with fas receptor (CD95) during lymphocyte apoptosis",
        "Fas-FasL mutations cause Autoimmune Lymphoproliferative Syndrome (ALPS), characterized by non-malignant lymphadenopathy, splenomegaly, and double-negative (CD4- CD8-) T cells."
      ],
      [
        "Interaction of LFA-1 (CD11a/CD18) with intercellular adhesion molecule-1 (ICAM-1)",
        "LFA-1/ICAM-1 mediates leukocyte adhesion and extravasation; mutations cause Leukocyte Adhesion Deficiency Type 1, presenting with delayed umbilical cord separation and neutrophilia."
      ]
    ],
    "shortestValidSolution": "Pneumocystis + Cryptosporidium + high IgM with absent IgG/IgA + absent CD154 = X-linked Hyper-IgM syndrome (CD40L defect).",
    "necessaryInference": "Link CD40L (CD154) on T cells to dual pathology: impaired B-cell class switching (high IgM) and impaired macrophage activation (Pneumocystis/Cryptosporidium).",
    "strongestDistractor": "Interaction between B7-1/B7-2 (CD80/CD86) on antigen-presenting cells and CD28 on naive T cells",
    "distractorExclusion": "B7-CD28 is the initial T-cell costimulatory signal; CD40-CD40L specifically drives B-cell class-switch recombination and macrophage microbicidal activation.",
    "citation": "Lee WI, Torgerson TR, Schumacher MJ, et al. Molecular analysis of a large cohort of patients with the hyper immunoglobulin M (IgM) syndrome. Blood. 2005;105(2):731-736. PMID: 15358621.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology question on CD40-CD40L costimulation, class-switch recombination, and opportunistic infection susceptibility.",
      "distractorExclusionNotes": "Excluded B7-CD28, Fas-FasL (ALPS), and integrin adhesion based on CD154 absence and opportunistic Pneumocystis/Cryptosporidium infection.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0854",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Common Variable Immunodeficiency Defective Plasma Cell Differentiation",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents with a 4-year history of recurrent bacterial sinopulmonary infections (recurrent Streptococcus pneumoniae and Haemophilus influenzae sinusitis and bronchitis), chronic diarrhea with Giardia lamblia cysts in stool, and persistent fatigue. High-resolution chest CT demonstrates bilateral cylindrical bronchiectasis in the lower lobes. Abdominal examination reveals splenomegaly. Serum immunoglobulin quantification reveals: IgG 160 mg/dL (normal 700-1,600 mg/dL), IgA 18 mg/dL (normal 70-400 mg/dL), and IgM 24 mg/dL (normal 40-230 mg/dL). Isohemagglutinin titers are undetectable, and she fails to mount specific antibody responses following immunization with tetanus toxoid and 23-valent pneumococcal polysaccharide vaccines. Peripheral blood flow cytometry demonstrates completely normal numbers of circulating CD19+ B lymphocytes and CD3+ T lymphocytes. Which of the following immunopathological mechanisms is the hallmark of this condition?",
    "choices": [
      [
        "Impaired terminal differentiation of mature B cells into immunoglobulin-secreting plasma cells",
        "COMMON VARIABLE IMMUNODEFICIENCY (CVID) is the most common clinically significant primary antibody deficiency disorder diagnosed in young adults. The fundamental immunopathogenesis is HETEROGENEOUS DEFECTIVE TERMINAL DIFFERENTIATION OF MATURE B CELLS INTO PLASMA CELLS. In contrast to XLA (where B cells are absent), patients with CVID have NORMAL OR NEAR-NORMAL NUMBERS OF CIRCULATING B CELLS (CD19+/CD20+), but these B cells fail to differentiate into antibody-secreting plasma cells and switched memory B cells. This leads to marked hypogammaglobulinemia (typically IgG > 2 SD below mean plus low IgA and/or IgM) and absent vaccine antibody responses. Clinical features include recurrent sinopulmonary infections, bronchiectasis, Giardia enteritis, autoimmune cytopenias, splenomegaly, and non-caseating granulomatous disease."
      ],
      [
        "Premature apoptosis of common lymphoid progenitors in the fetal liver and bone marrow",
        "Apoptosis of common lymphoid progenitors causes SCID, with severe lymphopenia affecting both T and B lineages, presenting in early infancy."
      ],
      [
        "Complete failure of thymic epithelial stroma to support negative selection of autoreactive T cells",
        "Thymic selection failure causes autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy (APECED / APS-1 due to AIRE mutations), not hypogammaglobulinemia."
      ],
      [
        "Selective deletion of immunoglobulin heavy chain constant region gamma genes on chromosome 14",
        "Specific constant region deletions cause isolated subclass deficiencies, not pan-hypogammaglobulinemia involving IgG, IgA, and IgM."
      ],
      [
        "Inability of follicular dendritic cells to capture antigen-complement complexes via CR1/CR2 receptors",
        "While FDC trapping assists affinity maturation, CVID is driven by intrinsic B-cell and T-follicular helper signaling defects (e.g., TACI, ICOS, CD19 mutations) blocking plasma cell maturation."
      ]
    ],
    "shortestValidSolution": "Young adult + bronchiectasis + Giardia + low IgG/IgA/IgM + NORMAL B-cell count = CVID (defective plasma cell differentiation).",
    "necessaryInference": "Contrast CVID (normal B-cell numbers, defective plasma cell maturation, adult onset) with XLA (absent B cells, infant onset).",
    "strongestDistractor": "Premature apoptosis of common lymphoid progenitors in the fetal liver and bone marrow",
    "distractorExclusion": "B-cell progenitors develop normally in CVID; the defect is isolated to terminal plasma cell differentiation in peripheral lymphoid organs.",
    "citation": "Cunningham-Rundles C. How I treat common variable immune deficiency. Blood. 2010;116(1):7-15. PMID: 20332369.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology item evaluating CVID immunopathogenesis and distinguishing it from XLA and SCID.",
      "distractorExclusionNotes": "Excluded XLA and SCID progenitor defects because circulating B cells are normal in number but cannot form plasma cells.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0855",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Selective IgA Deficiency Mucosal Immunity and Anaphylaxis to Blood Products",
    "provisionalDifficulty": 4,
    "stem": "A 22-year-old woman with a history of recurrent mild sinopulmonary infections, allergic rhinitis, and celiac disease undergoes an urgent packed red blood cell transfusion following traumatic blood loss in a motor vehicle collision. Within 3 minutes of initiating the transfusion, she abruptly develops severe dyspnea, wheezing, diffuse urticaria, facial angioedema, and profound hypotension with blood pressure dropping to 72/40 mm Hg. The blood unit is cross-match compatible (O negative donor to O negative recipient) and shows no signs of hemolysis, bacterial contamination, or clerical mismatch. Serum immunoglobulin quantification performed after acute stabilization reveals: serum IgA < 1.0 mg/dL (normal 70-400 mg/dL), with completely normal serum IgG (1,150 mg/dL) and normal serum IgM (140 mg/dL). High-titer anti-IgA antibodies of the IgE isotype are detected in the patient's serum. Which of the following immunological mechanisms accounts for her life-threatening transfusion reaction?",
    "choices": [
      [
        "Pre-formed anti-IgA IgE antibodies cross-link Fc-epsilon-RI receptors on mast cells upon exposure to donor plasma IgA",
        "SELECTIVE IgA DEFICIENCY is the most common primary immunodeficiency (prevalence ~1:600). Patients have profoundly low or undetectable serum and secretory IgA with normal IgG and IgM. Because these patients have never been exposed to endogenous IgA, the immune system views foreign IgA as an exogenous antigen. Up to 40% of patients with absolute IgA deficiency produce CLASS-SWITCHED ANTI-IgA ANTIBODIES (predominantly IgG or IgE). When exposed to donor blood products (RBCs, platelets, plasma) containing even minute traces of donor IgA, recipient anti-IgA IgE antibodies cross-link FC-EPSILON-RI RECEPTORS on mast cells and basophils, triggering immediate degranulation, histamine and leukotriene release, and life-threatening ANAPHYLAXIS. Such patients require washed RBCs or blood products from IgA-deficient donors."
      ],
      [
        "Pre-formed anti-HLA class I antibodies activating donor complement via the classical pathway",
        "Anti-HLA antibodies cause febrile non-hemolytic transfusion reactions (FNHTR) or Transfusion-Related Acute Lung Injury (TRALI), not immediate IgA-mediated anaphylactic shock."
      ],
      [
        "Recipient ABO isohemagglutinins binding donor erythrocyte carbohydrates provoking intravascular hemolysis",
        "ABO mismatch causes acute hemolytic transfusion reaction (fever, flank pain, hemoglobinuria, DIC), but the blood was cross-match compatible O-negative to O-negative."
      ],
      [
        "Donor anti-leukocyte antibodies binding recipient pulmonary capillary endothelium",
        "Donor anti-leukocyte antibodies causing pulmonary capillary leak is the mechanism of TRALI, presenting with non-cardiogenic pulmonary edema without diffuse urticaria or anti-IgA antibodies."
      ],
      [
        "Passive transfer of donor IgE antibodies against dietary peanut allergens in donor plasma",
        "Passive transfer of donor food allergies can occasionally occur, but the presence of recipient anti-IgA antibodies proves recipient sensitization to donor IgA."
      ]
    ],
    "shortestValidSolution": "Anaphylaxis to blood transfusion + history of celiac/sinopulmonary infections + low IgA with normal IgG/M = Selective IgA deficiency (anti-IgA antibodies).",
    "necessaryInference": "Recognize that absolute IgA deficiency generates anti-IgA antibodies that trigger immediate mast cell degranulation upon receiving IgA-containing blood.",
    "strongestDistractor": "Pre-formed anti-HLA class I antibodies activating donor complement via the classical pathway",
    "distractorExclusion": "Anti-HLA antibodies cause FNHTR (fever, chills); anti-IgA IgE antibodies provoke immediate Type I anaphylactic shock with wheezing and hypotension.",
    "citation": "Latiff AH et al. The clinical significance of immunoglobulin A deficiency. Ann Clin Biochem. PMID: 17362578.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology item on selective IgA deficiency, anti-IgA sensitization, and transfusion-mediated anaphylaxis.",
      "distractorExclusionNotes": "Excluded TRALI, FNHTR, and ABO hemolytic mismatch based on compatible O-negative units and anti-IgA IgE cross-linking.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0856",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Wiskott-Aldrich Syndrome WASp Actin Cytoskeleton and Microthrombocytopenia",
    "provisionalDifficulty": 5,
    "stem": "A 14-month-old boy presents with bleeding following routine circumcised wound care, recurrent petechiae, severe flexural atopic eczema, and recurrent encapsulated bacterial sinopulmonary infections. Complete blood count reveals: hemoglobin 10.8 g/dL, white blood cell count 8,200/uL, and platelet count 28,000/uL (normal 150,000-450,000/uL). Peripheral blood smear confirms severe thrombocytopenia with strikingly SMALL, ATROPHIC PLATELETS (mean platelet volume 5.8 fL, normal 7.5-11.5 fL). Serum immunoglobulin profiling demonstrates low IgM, elevated IgA, and markedly elevated IgE. Genetic analysis confirms an X-linked mutation in the WAS gene. Which of the following cellular processes is directly dependent on the Wiskott-Aldrich syndrome protein (WASp) and fails in this disorder?",
    "choices": [
      [
        "Relaying intracellular signals from cell-surface receptors to Arp2/3-mediated actin cytoskeleton remodeling",
        "WISKOTT-ALDRICH SYNDROME (WAS) is an X-LINKED RECESSIVE disorder caused by mutations in the WAS gene, which encodes the Wiskott-Aldrich syndrome protein (WASp). WASp is expressed exclusively in hematopoietic cells and functions as a molecular bridge linking small Rho-family GTPases (Cdc42 and Rac) to the ARP2/3 COMPLEX. Arp2/3 nucleates branched ACTIN FILAMENT POLYMERIZATION, which is required for: (1) Megakaryocyte proplatelet formation and platelet budding (causing MICROTHROMBOCYTOPENIA with abnormally small platelets, the pathognomonic finding); (2) T-cell immunological synapse formation and receptor capping; and (3) Leukocyte chemotaxis, adhesion, and phagocytosis. Patients present with the classic triad: THROMBOCYTOPENIA WITH SMALL PLATELETS, ECZEMA, and RECURRENT INFECTIONS, with characteristic low IgM and high IgA/IgE."
      ],
      [
        "Targeting lysosomal hydrolases to the inner membrane through mannose-6-phosphate tagging",
        "Mannose-6-phosphate tagging failure is the mechanism of I-cell disease (mucolipidosis II), causing coarse facial features, skeletal abnormalities, and elevated plasma lysosomal enzymes."
      ],
      [
        "Assembly of the NADPH oxidase multi-protein complex in phagolysosomal membranes",
        "NADPH oxidase failure causes Chronic Granulomatous Disease, characterized by recurrent infections with catalase-positive organisms without microthrombocytopenia or eczema."
      ],
      [
        "Translocation of cytoplasmic NF-kappa-B into the nucleus following I-kappa-B phosphorylation",
        "NF-kappa-B essential modulator (NEMO / IKK-gamma) mutations cause anhidrotic ectodermal dysplasia with immunodeficiency, not microthrombocytopenia."
      ],
      [
        "DNA double-strand break repair through homologous recombination and non-homologous end-joining",
        "DNA double-strand break repair failure causes Ataxia-Telangiectasia (ATM mutation) or Nijmegen breakage syndrome, characterized by cerebellar ataxia and oculocutaneous telangiectasias."
      ]
    ],
    "shortestValidSolution": "Eczema + recurrent infections + MICROTHROMBOCYTOPENIA (small platelets) = Wiskott-Aldrich syndrome (WASp actin cytoskeleton / Arp2/3 defect).",
    "necessaryInference": "Map microthrombocytopenia (low MPV) and WASp to Arp2/3-mediated actin cytoskeletal remodeling.",
    "strongestDistractor": "DNA double-strand break repair through homologous recombination and non-homologous end-joining",
    "distractorExclusion": "DNA repair defect causes Ataxia-Telangiectasia (ataxia, telangiectasia, high AFP); WASp regulates actin polymerization and platelet budding.",
    "citation": "Ochs HD, Thrasher AJ. The Wiskott-Aldrich syndrome. J Allergy Clin Immunol. 2006;117(4):725-738. PMID: 16630926.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/genetics item testing WASp actin nucleation signaling and small platelet morphology.",
      "distractorExclusionNotes": "Excluded I-cell, CGD, and ATM mechanisms based on pathognomonic microthrombocytopenia and Arp2/3 actin assembly.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0857",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Nervous System",
    "topic": "Ataxia-Telangiectasia ATM Kinase and DNA Double-Strand Break Repair Failure",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old girl is evaluated for progressive clumsiness and frequent falls. Neurological examination reveals marked truncal and gait ataxia, horizontal nystagmus, dysmetria, and slurred speech. Physical examination reveals fine, branching, prominent capillary dilations on her bulbar conjunctivae and pinnae (oculocutaneous telangiectasias). She has a history of multiple recurrent episodes of sinus and bacterial lung infections requiring hospitalization. Laboratory evaluation reveals marked elevation of serum alpha-fetoprotein (AFP 148 ng/mL, normal < 10 ng/mL) and deficiency of IgA and IgG2. Cultured patient fibroblasts demonstrate extreme hypersensitivity to ionizing radiation, with frequent non-homologous chromosomal translocations involving chromosomes 7 and 14. Which of the following molecular functions is carried out by the protein mutated in this autosomal recessive disorder?",
    "choices": [
      [
        "Serine/threonine kinase that senses DNA double-strand breaks and coordinates p53 cell-cycle arrest",
        "ATAXIA-TELANGIECTASIA is an autosomal recessive neurodegenerative immunodeficiency caused by mutations in the ATM GENE on chromosome 11q22.3. The ATM protein is a master SERINE/THREONINE PROTEIN KINASE belonging to the PI3K-related kinase (PIKK) family. When DNA DOUBLE-STRAND BREAKS (DSBs) occur (e.g., from ionizing radiation, free radicals, or physiological V(D)J recombination), ATM senses the breaks and rapidly phosphorylates key downstream substrates, including p53 (Ser15), Chk2, and BRCA1. This activates G1/S and G2/M CELL-CYCLE CHECKPOINTS and initiates homologous recombination or non-homologous end-joining (NHEJ). ATM deficiency leads to defective DNA repair, neurodegeneration (PURKINJE CELL ATROPHY -> cerebellar ataxia), OCULOCUTANEOUS TELANGIECTASIAS, MARKEDLY ELEVATED ALPHA-FETOPROTEIN (AFP), IgA deficiency, extreme IONIZING RADIATION SENSITIVITY, and high risk of hematologic malignancies."
      ],
      [
        "DNA helicase unwinding damaged DNA during nucleotide excision repair of pyrimidine dimers",
        "Nucleotide excision repair defects cause Xeroderma Pigmentosum, characterized by extreme ultraviolet (UV) sensitivity, skin freckling, and skin cancers, not cerebellar ataxia."
      ],
      [
        "DNA mismatch repair endonuclease recognizing base-base mismatches and insertion-deletion loops",
        "Mismatch repair defects (MSH2, MLH1) cause Lynch syndrome (hereditary non-polyposis colorectal cancer) with microsatellite instability."
      ],
      [
        "Transcriptional transactivator mediating negative selection of autoreactive thymocytes",
        "Autoimmune regulator (AIRE) mutations cause APECED / APS-1, presenting with candidiasis, hypoparathyroidism, and Addison disease."
      ],
      [
        "Endoplasmic reticulum chaperone promoting correct folding of multi-pass transmembrane receptors",
        "Chaperone defects do not coordinate DNA damage checkpoints or cause extreme radiation hypersensitivity and elevated AFP."
      ]
    ],
    "shortestValidSolution": "Cerebellar ataxia + telangiectasias + elevated AFP + ionizing radiation sensitivity = ATM kinase defect (DNA double-strand break repair).",
    "necessaryInference": "Map ATM kinase to sensing DNA double-strand breaks and phosphorylating p53 for cell cycle arrest.",
    "strongestDistractor": "DNA helicase unwinding damaged DNA during nucleotide excision repair of pyrimidine dimers",
    "distractorExclusion": "Nucleotide excision repair (XP) fixes UV-induced thymine dimers; ATM fixes ionizing-radiation-induced DNA double-strand breaks.",
    "citation": "Savitsky K, Bar-Shira A, Gilad S, et al. A single ataxia telangiectasia gene with a product similar to PI-3 kinase. Science. 1995;268(5218):1749-1753. PMID: 7792600.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 genetics/neurology item on ATM kinase signaling, DNA double-strand breaks, and diagnostic elevated AFP.",
      "distractorExclusionNotes": "Excluded nucleotide excision repair (XP) and mismatch repair (Lynch) based on double-strand break repair and ataxia/AFP phenotype.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0858",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Chronic Granulomatous Disease NADPH Oxidase and Catalase-Positive Pathogens",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old boy presents with high fever, right upper quadrant abdominal pain, and hepatomegaly. Contrast-enhanced CT reveals a 4-cm multiloculated hepatic abscess, and blood and purulent aspirate cultures grow Staphylococcus aureus. His medical history is notable for recurrent cervical lymphadenitis caused by Serratia marcescens at age 14 months and Aspergillus fumigatus pneumonia at age 2 years. Flow cytometry using dihydrorhodamine 123 (DHR) fails to demonstrate any increase in green fluorescence following stimulation of the patient's neutrophils with phorbol myristate acetate (PMA). Nitroblue tetrazolium (NBT) dye reduction assay also remains completely negative (colorless). Which of the following biochemical reactions is defective in this patient's phagocytes?",
    "choices": [
      [
        "Conversion of molecular oxygen to superoxide anion by the phagocytic NADPH oxidase complex",
        "CHRONIC GRANULOMATOUS DISEASE (CGD) is an inborn error of phagocyte microbicidal function, most commonly inherited as an X-LINKED RECESSIVE defect in CYBB encoding gp91phox (the catalytic beta subunit of cytochrome b558 in the NADPH OXIDASE complex). NADPH oxidase transfers electrons from NADPH to molecular oxygen (O2) to generate SUPEROXIDE ANIONS (O2-), initiating the respiratory burst that subsequently yields hydrogen peroxide (H2O2) and hypochlorous acid (HOCl via myeloperoxidase). When infected with catalase-negative organisms, phagocytes can utilize bacterial-derived H2O2 to generate microbicidal HOCl. However, CATALASE-POSITIVE ORGANISMS (Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens, Nocardia, Aspergillus) destroy their own H2O2, leaving CGD phagocytes powerless to kill them, provoking granuloma formation and recurrent abscesses."
      ],
      [
        "Oxidation of chloride ions to hypochlorous acid by neutrophil myeloperoxidase in azurophilic granules",
        "Myeloperoxidase (MPO) deficiency impairs HOCl generation, but the respiratory burst itself is intact, so DHR and NBT tests are completely NORMAL."
      ],
      [
        "Reduction of hydrogen peroxide to water and oxygen by endogenous macrophage catalase",
        "Host catalase breaks down H2O2; its absence does not cause CGD (bacterial catalase destroys bacterial H2O2, which prevents host killing)."
      ],
      [
        "Degradation of microbial peptidoglycan by primary lysosomal acid hydrolases",
        "Lysosomal acid hydrolase defects cause lysosomal storage diseases (e.g., Gaucher, Tay-Sachs), not CGD."
      ],
      [
        "Generation of nitric oxide from L-arginine by inducible nitric oxide synthase",
        "iNOS generates nitric oxide to form reactive nitrogen species; it does not generate the superoxide anion measured by DHR or NBT."
      ]
    ],
    "shortestValidSolution": "Recurrent S. aureus/Serratia/Aspergillus + negative DHR/NBT test = Chronic granulomatous disease (NADPH oxidase fails to make superoxide).",
    "necessaryInference": "Map failed DHR fluorescence to NADPH oxidase failure to generate superoxide anion (O2-).",
    "strongestDistractor": "Oxidation of chloride ions to hypochlorous acid by neutrophil myeloperoxidase in azurophilic granules",
    "distractorExclusion": "MPO deficiency has normal superoxide production and normal DHR/NBT reduction; CGD impairs the initial NADPH oxidase superoxide step.",
    "citation": "Phipatanakul W et al. Cyclosporine Treatment of Intractable Colitis in Chronic Granulomatous Disease. Pediatr Asthma Allergy Immunol. PMID: 22328803.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/microbiology item on the phagocytic respiratory burst, NADPH oxidase subunits, and catalase-positive pathogen susceptibility.",
      "distractorExclusionNotes": "Excluded MPO deficiency (normal DHR/NBT) and iNOS mechanisms based on failed superoxide generation and DHR negativity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0859",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Leukocyte Adhesion Deficiency Type 1 CD18 Beta-2 Integrin Extravasation Defect",
    "provisionalDifficulty": 5,
    "stem": "A 3-week-old male infant is brought to the pediatric hospitalist because his umbilical cord stump has failed to separate. Physical examination reveals an intact, dry umbilical cord stump surrounded by an erythematous abdominal wall without purulent drainage. Two days later, he develops severe, necrotic omphalitis and peritonitis. Complete blood count reveals marked leukocytosis with an absolute neutrophil count of 68,000/uL (normal 2,000-8,000/uL). Despite this massive peripheral neutrophilia, biopsy of the inflamed necrotic periumbilical subcutaneous tissue demonstrates complete absence of neutrophils in the extravascular space. Flow cytometry confirms absent leukocyte cell-surface expression of CD18. Which of the following steps of leukocyte extravasation is directly defective in this patient?",
    "choices": [
      [
        "Firm adhesion and arrest on vascular endothelium mediated by beta-2 integrin binding to ICAM-1",
        "LEUKOCYTE ADHESION DEFICIENCY TYPE 1 (LAD-1) is an autosomal recessive disorder caused by mutations in the ITGB2 gene on chromosome 21q22.3, which encodes the CD18 (BETA-2 INTEGRIN) COMMON SUBUNIT. CD18 heterodimerizes with CD11a (to form LFA-1), CD11b (Mac-1 / CR3), and CD11c to create functional beta-2 integrins on leukocytes. During leukocyte extravasation: (1) Selectins mediate initial marginal rolling (defective in LAD-2 due to absence of Sialyl Lewis X); (2) Chemokines trigger high-affinity integrin conformational activation; and (3) BETA-2 INTEGRINS BIND TO ICAM-1 (CD54) on activated endothelium, mediating TIGHT ADHESION AND ARREST. In LAD-1, neutrophils roll normally but CANNOT FIRMLY ADHERE OR EXTRAVASATE into infected tissues. Consequently, patients present with: (1) DELAYED UMBILICAL CORD SEPARATION (> 30 days), (2) MARKED PERIPHERAL NEUTROPHILIA, and (3) RECURRENT NECROTIC INFECTIONS WITH ABSENCE OF PUS (NO NEUTROPHILS IN TISSUE)."
      ],
      [
        "Low-affinity initial leukocyte rolling along post-capillary venules mediated by P-selectin and E-selectin",
        "Leukocyte rolling is mediated by selectins interacting with carbohydrate ligands (Sialyl Lewis X); defects in Sialyl Lewis X cause LAD Type 2."
      ],
      [
        "Transendothelial diapedesis mediated by homophilic platelet-endothelial cell adhesion molecule-1 (PECAM-1) binding",
        "PECAM-1 (CD31) mediates the subsequent transendothelial diapedesis step between endothelial junctions, downstream of integrin-mediated tight arrest."
      ],
      [
        "Directional migration through tissue along a chemical gradient mediated by formyl-peptide and C5a receptors",
        "Chemotaxis occurs after extravasation; in LAD-1, neutrophils cannot leave the intravascular space due to lack of firm adhesion."
      ],
      [
        "Intraphagosomal microbial killing mediated by oxygen-dependent myeloperoxidase catalysis",
        "Microbial killing occurs after phagocytosis; LAD-1 neutrophils have normal respiratory burst and killing capacity if they reach the target."
      ]
    ],
    "shortestValidSolution": "Delayed cord separation + massive neutrophilia + ABSENCE OF PUS in tissue + low CD18 = LAD-1 (failure of firm adhesion via beta-2 integrins/ICAM-1).",
    "necessaryInference": "Map CD18 deficiency to the specific extravasation step of firm adhesion and stable arrest via ICAM-1 binding.",
    "strongestDistractor": "Low-affinity initial leukocyte rolling along post-capillary venules mediated by P-selectin and E-selectin",
    "distractorExclusion": "Selectin-mediated rolling is defective in LAD-2 (Sialyl Lewis X defect); LAD-1 is a defect in CD18 beta-2 integrin tight adhesion.",
    "citation": "De Ponti A et al. A pro-tumorigenic function of S100A8/A9 in carcinogen-induced hepatocellular carcinoma. Cancer Lett. PMID: 26404752.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/pathology item dissecting the stages of leukocyte extravasation and beta-2 integrin biology.",
      "distractorExclusionNotes": "Excluded LAD-2 selectin rolling and PECAM-1 diapedesis based on CD18-mediated tight endothelial arrest.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0860",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Chediak-Higashi Syndrome LYST Lysosomal Trafficking Giant Azurophilic Granules",
    "provisionalDifficulty": 4,
    "stem": "A 2-year-old boy presents with high fever, recurrent cutaneous staphylococcal furunculosis, and progressive peripheral sensory neuropathy. Physical examination reveals fair skin, silvery-metallic sheen to his blonde hair, light blue irides, and horizontal nystagmus (partial oculocutaneous albinism). Complete blood count reveals mild neutropenia, thrombocytopenia, and anemia. Peripheral blood smear examination reveals giant, round, peroxidase-positive azurophilic granules within the cytoplasm of neutrophils, eosinophils, and lymphocytes. Diagnostic genetic sequencing confirms an autosomal recessive mutation in the LYST (CHS1) gene. Which of the following cellular processes is defective in this disorder?",
    "choices": [
      [
        "Endosomal and lysosomal vesicle trafficking, fusion, and exocytosis in granulated cells",
        "CHEDIAK-HIGASHI SYNDROME is an autosomal recessive disorder caused by loss-of-function mutations in the LYST GENE (lysosomal trafficking regulator). The LYST protein regulates intracellular vesicle docking, membrane fusion, and fission. Defective LYST leads to unregulated, pathological membrane fusion of primary lysosomes, forming GIANT, ABNORMAL LYSOSOMES AND AZUROPHILIC GRANULES in all granulated cells. The multisystem clinical manifestations reflect this transport defect: (1) Giant granules in neutrophils cannot dock or fuse with phagosomes to form phagolysosomes, causing IMPAIRED MICROBICIDAL KILLING and recurrent pyogenic infections; (2) Inability of melanocytes to transfer melanin-containing melanosomes to keratinocytes causes PARTIAL OCULOCUTANEOUS ALBINISM (silvery hair, photophobia); (3) Defective platelet dense granules causes bleeding diathesis; and (4) Impaired neuronal axonal transport causes PROGRESSIVE PERIPHERAL NEUROPATHY."
      ],
      [
        "Phagosomal acidification mediated by vacuolar-type H+-ATPase proton pumps",
        "Vacuolar H+-ATPase acidifies lysosomes; its isolated defect does not cause giant fused granules or oculocutaneous albinism."
      ],
      [
        "Superoxide generation by the membrane-bound cytochrome b558 electron transport chain",
        "Cytochrome b558 defect causes Chronic Granulomatous Disease, which has normal granule size and morphology on peripheral blood smear."
      ],
      [
        "Polymerization of globular actin into filamentous networks at the leading edge of migrating cells",
        "Actin polymerization defect causes Wiskott-Aldrich syndrome (WASp mutation), characterized by microthrombocytopenia and eczema, not giant granules."
      ],
      [
        "Post-translational mannose-6-phosphate tagging of lysosomal hydrolases in the cis-Golgi network",
        "Mannose-6-phosphate tagging defect causes I-cell disease (GlcNAc phosphotransferase defect), causing coarse facies and skeletal dysostosis."
      ]
    ],
    "shortestValidSolution": "Partial oculocutaneous albinism + neuropathy + giant azurophilic granules in neutrophils = Chediak-Higashi syndrome (LYST lysosomal trafficking defect).",
    "necessaryInference": "Map giant azurophilic granules and partial albinism to defective lysosomal/melanosomal vesicle trafficking governed by the LYST gene.",
    "strongestDistractor": "Post-translational mannose-6-phosphate tagging of lysosomal hydrolases in the cis-Golgi network",
    "distractorExclusion": "I-cell disease impairs M6P enzyme sorting to lysosomes; Chediak-Higashi impairs vesicle trafficking and membrane fusion (LYST), creating giant granules.",
    "citation": "Introne W et al. Clinical, molecular, and cell biological aspects of Chediak-Higashi syndrome. Mol Genet Metab. PMID: 10527680.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/hematology item on LYST protein function, melanosome transfer, and giant lysosomal fusion pathology.",
      "distractorExclusionNotes": "Excluded I-cell, CGD, and WAS based on classic giant peroxidase-positive azurophilic granules and partial albinism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0861",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Dermatology",
    "topic": "Hyper-IgE Job Syndrome STAT3 Defect and TH17 Lineage Differentiation",
    "provisionalDifficulty": 5,
    "stem": "A 5-year-old boy presents with severe, chronic pruriginous eczematoid dermatitis, coarse facial features with a prominent forehead and broad nasal bridge, and multiple painless, non-erythematous fluctuant skin abscesses ('cold abscesses') on his scalp and trunk that yield abundant Staphylococcus aureus on aspiration. His dental examination reveals two complete rows of teeth due to failure of primary tooth exfoliation (retained deciduous teeth). He has a history of recurrent S. aureus pneumonias that resolved leaving residual thin-walled, air-filled cavities (pneumatoceles). Laboratory evaluation reveals: absolute neutrophil count normal, serum IgE markedly elevated at 8,400 IU/mL (normal < 100 IU/mL), and normal serum IgG, IgA, and IgM. In vitro T-cell differentiation assays demonstrate failure of naive CD4+ T cells to differentiate into IL-17-producing helper T cells (TH17). Which of the following transcription factors is mutated in this autosomal dominant disorder?",
    "choices": [
      [
        "Signal transducer and activator of transcription 3 (STAT3) carrying dominant-negative mutations",
        "AUTOSOMAL DOMINANT HYPER-IgE SYNDROME (JOB SYNDROME) is caused by dominant-negative mutations in the STAT3 GENE on chromosome 17q21. STAT3 is the critical transcription factor downstream of IL-6, IL-21, and IL-23 signaling required to differentiate naive CD4+ T cells into T-HELPER 17 (TH17) CELLS. TH17 cells secrete IL-17 and IL-22, which stimulate epithelial cells to produce antimicrobial peptides (beta-defensins) and secrete G-CSF and CXCL8 to RECRUIT NEUTROPHILS to cutaneous and mucosal surfaces. Defective TH17 differentiation impairs neutrophil recruitment, explaining the lack of classic inflammatory warmth and erythema in cutaneous infections ('COLD STAPHYLOCOCCAL ABSCESSES'). Clinical hallmarks include: (1) Severe eczema, (2) 'Cold' staph abscesses, (3) Recurrent pneumonias with PNEUMATOCELES, (4) Coarse facies with retained primary teeth, and (5) ASTRONOMICALLY ELEVATED SERUM IgE."
      ],
      [
        "Forkhead box protein P3 (FOXP3) carrying loss-of-function missense mutations",
        "FOXP3 mutations cause IPEX syndrome (Immune dysregulation, Polyendocrinopathy, Enteropathy, X-linked) due to absence of regulatory T (Treg) cells, presenting with neonatal type 1 diabetes and severe diarrhea."
      ],
      [
        "Autoimmune regulator (AIRE) zinc-finger transcription factor",
        "AIRE mutations cause Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy (APECED / APS-1), characterized by chronic mucocutaneous candidiasis and hypoparathyroidism."
      ],
      [
        "T-box expressed in T cells (T-bet) driving interferon-gamma expression",
        "T-bet is the master transcription factor for TH1 differentiation; its deficiency impairs cell-mediated immunity against mycobacteria, not Job syndrome."
      ],
      [
        "GATA-binding protein 3 (GATA3) driving interleukin-4 and interleukin-5 expression",
        "GATA3 is the master transcription factor for TH2 differentiation; haploinsufficiency causes HDR syndrome (hypoparathyroidism, deafness, renal dysplasia)."
      ]
    ],
    "shortestValidSolution": "Eczema + cold staph abscesses + retained primary teeth + pneumatoceles + massive IgE = Job syndrome (STAT3 mutation -> failure of TH17 differentiation).",
    "necessaryInference": "Link STAT3 transcription factor failure to impaired TH17 lineage differentiation, defective neutrophil recruitment (cold abscesses), and hyper-IgE.",
    "strongestDistractor": "Forkhead box protein P3 (FOXP3) carrying loss-of-function missense mutations",
    "distractorExclusion": "FOXP3 defect causes IPEX syndrome (Treg deficiency, neonatal diabetes, intractable diarrhea); STAT3 defect causes Hyper-IgE Job syndrome.",
    "citation": "Holland SM, DeLeo FR, Elloumi HZ, et al. STAT3 mutations in the hyper-IgE syndrome. N Engl J Med. 2007;357(16):1608-1619. PMID: 17881745.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/genetics item connecting STAT3 dominant-negative mutations to TH17 development and neutrophil recruitment failure.",
      "distractorExclusionNotes": "Excluded FOXP3 (IPEX), AIRE (APS-1), and T-bet based on classic pneumatoceles, retained teeth, and cold abscesses.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0862",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Terminal Complement C5-C9 Deficiency and Invasive Neisseria Susceptibility",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old college student presents with high fever, severe headache, photophobia, and a petechial rash over his lower extremities. Lumbar puncture demonstrates turbid CSF with 4,200 white blood cells/uL (94% neutrophils), elevated protein, decreased glucose, and Gram-negative kidney bean-shaped intracellular diplococci on Gram stain, confirmed as Neisseria meningitidis serogroup B. He has a documented history of Neisseria meningitidis bacteremia at age 14 and disseminated gonococcal infection at age 17. Serum complement analysis demonstrates completely normal total hemolytic classical complement activity (CH50) and normal alternative pathway activity (AH50), but a specialized assay for terminal complement complex assembly shows 0% functional activity. Flow cytometry confirms normal cell-surface expression of CD55 and CD59. Which of the following complement proteins is most likely deficient in this patient?",
    "choices": [
      [
        "Complement component C7, C8, or C9 (terminal membrane attack complex components)",
        "DEFICIENCIES OF TERMINAL COMPLEMENT COMPONENTS (C5, C6, C7, C8, or C9) prevent the assembly of the MEMBRANE ATTACK COMPLEX (MAC / C5b-9). MAC forms a 10-nanometer transmembrane pore in the outer membrane of Gram-negative bacteria, dissipating the proton motive gradient and provoking osmotic lysis. While thick-peptidoglycan Gram-positive bacteria and encapsulated organisms are readily cleared by C3b-mediated opsonization and phagocytosis, NEISSERIA SPECIES (Neisseria meningitidis and Neisseria gonorrhoeae) have thin cell walls with lipooligosaccharide (LOS) and are UNIQUELY DEPENDENT ON MAC-MEDIATED LYSIS for effective host defense. Patients with terminal complement deficiencies have a 1,000- to 10,000-fold increased risk of recurrent invasive Neisserial infections, but have normal immunity against other pyogenic bacteria."
      ],
      [
        "Complement component C1q or C1s (classical pathway initiation components)",
        "Early classical complement deficiencies (C1, C2, C4) impair immune complex clearance, strongly predisposing to Systemic Lupus Erythematosus (SLE) and encapsulated pyogenic infections, not isolated Neisserial vulnerability."
      ],
      [
        "Complement component C3 (central convertase substrate)",
        "C3 deficiency impairs both opsonization and MAC assembly, predisposing to recurrent life-threatening infections with all pyogenic encapsulated bacteria (Streptococcus pneumoniae, Haemophilus influenzae) and severe membranoproliferative glomerulonephritis."
      ],
      [
        "Alternative pathway Factor D or Properdin (alternative convertase stabilizers)",
        "Properdin deficiency is X-linked and predisposes to meningococcal disease, but causes a profoundly abnormal alternative pathway (AH50) assay, whereas this patient has a normal AH50 with an isolated terminal MAC defect."
      ],
      [
        "Mannose-binding lectin-associated serine protease 2 (MASP-2)",
        "MASP-2 deficiency impairs the lectin complement activation pathway, which typically causes mild or asymptomatic vulnerability to respiratory tract infections."
      ]
    ],
    "shortestValidSolution": "Recurrent invasive Neisseria meningitidis/gonorrhoeae infections = Terminal complement (C5-C9) deficiency (failure to form MAC).",
    "necessaryInference": "Recognize that Neisseria species are uniquely dependent on terminal MAC (C5b-9) osmotic lysis for host defense.",
    "strongestDistractor": "Complement component C3 (central convertase substrate)",
    "distractorExclusion": "C3 deficiency causes severe recurrent infections with encapsulated pyogenic bacteria (pneumococcus/Hib) and lupus-like disease; C5-C9 causes isolated Neisseria vulnerability.",
    "citation": "Ram S, Lewis LA, Rice PA. Infections of people with complement deficiencies and patients who have received eculizumab. Clin Microbiol Rev. 2010;23(4):740-780. PMID: 20930072.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/microbiology item testing complement activation pathways and the unique bactericidal role of MAC against Neisseria.",
      "distractorExclusionNotes": "Excluded C1/C2/C4 (SLE risk) and C3 (pyogenic encapsulated bacteria) based on isolated recurrent invasive Neisserial disease.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0863",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "General Principles",
    "topic": "Hereditary Angioedema C1 Inhibitor Deficiency Bradykinin and Kallikrein Axis",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman presents to the emergency department with severe, painless swelling of her lips, tongue, and face that began 6 hours after a routine dental extraction. Over the past hour, she has developed inspiratory stridor and severe crampy abdominal pain with vomiting. She has experienced similar episodes of facial and limb swelling since adolescence, typically triggered by minor trauma or emotional stress. Physical examination reveals tense, non-pitting edema of the face and oropharynx without urticaria, pruritus, or wheezing. Her blood pressure is 118/74 mm Hg. Epinephrine, diphenhydramine, and methylprednisolone are administered immediately, but produce ZERO clinical improvement. Serum laboratory evaluation reveals normal serum tryptase, normal C1q, but markedly decreased serum C4 (4 mg/dL, normal 15-45 mg/dL) and low functional C1 inhibitor (C1-INH) activity. Which of the following vasoactive mediators is the direct driver of mucosal and subcutaneous edema in this disorder?",
    "choices": [
      [
        "Bradykinin generated by unchecked plasma kallikrein cleavage of high-molecular-weight kininogen",
        "HEREDITARY ANGIOEDEMA (HAE) is an autosomal dominant condition caused by deficiency (Type I, 85%) or dysfunction (Type II, 15%) of C1 INHIBITOR (C1-INH, encoded by SERPING1). C1-INH is a serine protease inhibitor (serpin) that physiological regulates two distinct cascades: (1) The complement classical pathway (inhibiting C1r and C1s; unchecked C1s cleaves C4 and C2, explaining the chronically LOW SERUM C4 that serves as the best screening test); and (2) The KALLIKREIN-KININ SYSTEM (inhibiting activated factor XII and plasma kallikrein). Unchecked kallikrein cleaves high-molecular-weight kininogen (HMWK) to liberate massive amounts of BRADYKININ. Bradykinin acts on endothelial B2 receptors, driving vascular permeability and angioedema. Because this process is kinin-mediated rather than histamine-mediated, it manifests WITHOUT URTICARIA OR PRURITUS and is COMPLETELY REFRACTORY TO EPINEPHRINE, ANTIHISTAMINES, AND CORTICOSTEROIDS."
      ],
      [
        "Histamine released from mast cell granules via IgE-dependent Fc-epsilon-RI cross-linking",
        "Histamine-mediated angioedema is an allergic (type I) response characterized by urticaria, pruritus, and rapid response to epinephrine and antihistamines, unlike HAE."
      ],
      [
        "Prostaglandin D2 synthesized by activated mucosal eosinophils via cyclooxygenase-2",
        "Prostaglandin D2 participates in allergic asthma and mast cell activation; it does not drive hereditary C1-INH deficiency angioedema."
      ],
      [
        "Leukotriene C4 and D4 generated by 5-lipoxygenase in basophils",
        "Cysteinyl leukotrienes mediate bronchoconstriction and vascular permeability in asthma and anaphylaxis; they do not mediate HAE."
      ],
      [
        "Tumor necrosis factor-alpha released from tissue-resident dendritic cells",
        "TNF-alpha is a pro-inflammatory cytokine driving fever, acute-phase reactants, and septic shock, not acute paroxysmal kinin-mediated angioedema."
      ]
    ],
    "shortestValidSolution": "Recurrent facial swelling + NO urticaria + refractory to epinephrine/steroids + low C4 = Hereditary Angioedema (C1-INH deficiency -> excess Bradykinin).",
    "necessaryInference": "Recognize that HAE is mediated by bradykinin (via kallikrein), which explains the absence of urticaria and total resistance to epinephrine and antihistamines.",
    "strongestDistractor": "Histamine released from mast cell granules via IgE-dependent Fc-epsilon-RI cross-linking",
    "distractorExclusion": "Histamine causes urticaria, pruritus, and responds to epinephrine/antihistamines; bradykinin produces non-pruritic edema refractory to anti-allergic therapy.",
    "citation": "Zuraw BL. Clinical practice. Hereditary angioedema. N Engl J Med. 2008;359(10):1027-1036. PMID: 18768946.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/pharmacology item differentiating bradykinin-mediated hereditary angioedema from histamine-mediated allergic angioedema.",
      "distractorExclusionNotes": "Excluded histamine and leukotrienes based on low C4, lack of pruritus/urticaria, and refractoriness to epinephrine and steroids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0864",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Paroxysmal Nocturnal Hemoglobinuria PIGA Mutation and GPI Anchor CD55/CD59",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman presents with severe fatigue, episodic dark red-brown morning urine, and acute, severe right upper quadrant pain. Abdominal Doppler ultrasound demonstrates acute thrombosis of the hepatic veins and inferior vena cava (Budd-Chiari syndrome). Laboratory evaluation reveals: hemoglobin 7.8 g/dL, reticulocytes 9.2%, haptoglobin undetectable (< 5 mg/dL), lactate dehydrogenase markedly elevated at 2,850 U/L (normal < 250 U/L), and negative direct and indirect antiglobulin (Coombs) tests. Urinalysis demonstrates heavy hemosiderinuria. Flow cytometry of peripheral blood erythrocytes and granulocytes confirms the absence of glycosylphosphatidylinositol-anchored proteins (GPI-APs). Which of the following regulatory proteins is normally anchored by GPI and directly prevents assembly of the terminal membrane attack complex on autologous erythrocytes?",
    "choices": [
      [
        "CD59 (membrane inhibitor of reactive lysis / MAC-inhibitory protein)",
        "PAROXYSMAL NOCTURNAL HEMOGLOBINURIA (PNH) is an acquired clonal hematopoietic stem cell disorder caused by a somatic mutation in the X-linked PIGA GENE (phosphatidylinositol glycan class A). PIGA is essential for the first step in the biosynthesis of GLYCOSYLPHOSPHATIDYLINOSITOL (GPI) ANCHORS, which tether proteins to cell membranes. PNH cells lack all GPI-anchored proteins, including two critical complement-regulatory proteins: (1) CD55 (Decay-Accelerating Factor / DAF), which accelerates the dissociation of C3 and C5 convertases; and (2) CD59 (MAC-INHIBITORY PROTEIN / MIRL), which directly binds C8 and C9, preventing the polymerization of C9 into the TERMINAL MEMBRANE ATTACK COMPLEX (MAC). Absence of CD59 permits unregulated, spontaneous complement-mediated intravascular hemolysis (exacerbated at night during mild respiratory acidosis). Hemoglobinuria, nitric oxide depletion (causing smooth muscle spasm, dysphagia, erectile dysfunction), and life-threatening VENOUS THROMBOSIS (Budd-Chiari syndrome) characterize PNH."
      ],
      [
        "CD46 (membrane cofactor protein / MCP mediating factor I cleavage)",
        "CD46 (MCP) is a transmembrane glycoprotein, not a GPI-anchored protein; its expression is normal in PNH."
      ],
      [
        "Complement receptor 1 (CR1 / CD35) on erythrocyte membranes",
        "CR1 is an integral transmembrane protein that binds C3b/C4b to transport immune complexes; it is not anchored via a GPI linkage."
      ],
      [
        "Factor H circulating fluid-phase complement regulatory glycoprotein",
        "Factor H is a soluble plasma glycoprotein produced by the liver, not a cell-surface GPI-anchored membrane protein."
      ],
      [
        "Vitronectin (S-protein) binding soluble C5b-7 complexes in plasma",
        "Vitronectin is a circulating plasma protein that prevents insertion of fluid-phase terminal complement complexes, not a cellular GPI-anchored protein."
      ]
    ],
    "shortestValidSolution": "Coombs-negative hemolytic anemia + dark morning urine + Budd-Chiari thrombosis = PNH (PIGA mutation -> loss of GPI-anchored CD59 [MAC inhibitor]).",
    "necessaryInference": "Identify CD59 as the specific GPI-anchored protein that binds C8/C9 to prevent MAC assembly on autologous host cells.",
    "strongestDistractor": "CD46 (membrane cofactor protein / MCP mediating factor I cleavage)",
    "distractorExclusion": "CD46 is a transmembrane protein that remains normal in PNH; CD55 and CD59 are uniquely tethered by GPI anchors and lost in PNH.",
    "citation": "Röth A et al. Real-World Effectiveness and Safety of Ravulizumab in Patients With Paroxysmal Nocturnal Hemoglobinuria: Evidence From the International PNH Registry. Am J Hematol. PMID: 41795103.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 immunology/hematology item on PIGA somatic mutations, GPI anchor biology, and CD59 terminal complement regulation.",
      "distractorExclusionNotes": "Excluded transmembrane (CD46, CR1) and fluid-phase (Factor H, vitronectin) regulators based on GPI-anchor linkage of CD59.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0865",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Hematology",
    "topic": "Duffy Blood Group Antigen Receptor and Plasmodium Vivax Resistance",
    "provisionalDifficulty": 4,
    "stem": "An epidemiological survey in West and Central Africa reveals that over 95% of the indigenous population exhibits natural resistance to blood-stage infection with Plasmodium vivax, despite frequent exposure to the bite of infected Anopheles mosquitoes. In contrast, infection rates with Plasmodium falciparum remain exceptionally high in the same geographic region. Genetic analysis demonstrates that resistant individuals carry a homozygous promoter mutation (c.-67T>C in the GATA-1 binding box) of the ACKR1 gene encoding the Duffy antigen receptor for chemokines (DARC), resulting in a null Fy(a-b-) phenotype on erythrocytes while preserving endothelial expression. Which of the following biological processes explains this selective resistance to Plasmodium vivax?",
    "choices": [
      [
        "Merozoite surface Duffy-binding protein (PvDBP) requires the erythrocyte Duffy glycoprotein for junction formation and red cell invasion",
        "PLASMODIUM VIVAX (and Plasmodium knowlesi) merozoites require interaction with the erythrocyte DUFFY ANTIGEN RECEPTOR FOR CHEMOKINES (DARC / ACKR1 / CD234) to successfully invade human red blood cells. The merozoite secretes DUFFY-BINDING PROTEIN (PvDBP) from its micronemes, which binds with high affinity to the extracellular N-terminal domain of the Duffy glycoprotein, establishing an irreversible junction required for actin-myosin-driven invasion. Individuals who are DUFFY-NEGATIVE (Fy[a-b-]), highly prevalent in sub-Saharan and West Africa due to a protective GATA-box promoter mutation, lack DARC on erythrocyte surfaces. Consequently, P. vivax merozoites cannot bind or penetrate red blood cells, rendering these individuals COMPLETELY RESISTANT TO P. VIVAX MALARIA. In contrast, Plasmodium falciparum uses multiple redundant alternative receptors (glycophorins A, B, C) and readily invades Duffy-negative cells."
      ],
      [
        "Duffy-negative erythrocytes possess enhanced intracellular levels of reduced glutathione that kill ingested trophozoites",
        "Glutathione enhances parasite survival; G6PD deficiency impairs glutathione and confers resistance, but Duffy resistance is purely an entry-receptor block."
      ],
      [
        "The Duffy glycoprotein serves as an obligatory channel for intraerythrocytic export of parasite-derived hemozoin pigment",
        "Hemozoin is formed by parasite biocrystallization of toxic heme within its food vacuole, not exported through erythrocyte Duffy channels."
      ],
      [
        "DARC expression is required for surface display of PfEMP-1 mediating microvascular endothelial cytoadherence",
        "PfEMP-1 is expressed exclusively by Plasmodium FALCIPARUM and mediates cytoadherence via CD36 and ICAM-1, not P. vivax."
      ],
      [
        "Absence of the Duffy antigen stimulates pre-erythrocytic complement-mediated lysis of sporozoites in the liver",
        "DARC is expressed on erythrocytes, not hepatocytes; Duffy-negative individuals are fully infected by sporozoites in the liver, but the merozoites cannot enter red cells."
      ]
    ],
    "shortestValidSolution": "Duffy-negative (Fy[a-b-]) erythrocytes lack DARC receptor -> P. vivax PvDBP cannot bind -> complete resistance to P. vivax malaria.",
    "necessaryInference": "Map Duffy antigen (DARC) to the obligate entry receptor for Plasmodium vivax merozoite invasion.",
    "strongestDistractor": "DARC expression is required for surface display of PfEMP-1 mediating microvascular endothelial cytoadherence",
    "distractorExclusion": "PfEMP-1 cytoadherence is unique to P. falciparum; P. vivax uses Duffy exclusively as an erythrocyte invasion receptor.",
    "citation": "Miller LH, Mason SJ, Clyde DF, et al. The resistance factor to Plasmodium vivax in blacks. The Duffy-blood-group genotype, FyFy. N Engl J Med. 1976;295(6):302-304. PMID: 778616.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/genetics item on malaria host-pathogen interactions and Duffy antigen receptor-mediated invasion.",
      "distractorExclusionNotes": "Excluded P. falciparum PfEMP-1 cytoadherence and glutathione mechanisms based on DARC-PvDBP entry junction biology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0866",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "CCR5 Delta-32 Mutation and HIV-1 Coreceptor Binding Resistance",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old hemophilia patient who received repeated unheated factor VIII concentrates in the early 1980s from donors subsequently confirmed to have died of AIDS remains persistently seronegative for HIV-1 antibodies and has undetectable plasma HIV-1 RNA on repeated testing. In vitro infection assays demonstrate that his isolated peripheral blood CD4+ T lymphocytes and macrophages are completely resistant to infection by primary viral isolates of R5 (macrophage-tropic) HIV-1, but remain susceptible to laboratory-adapted X4 (T-cell-tropic) strains. Genetic sequencing of the patient's chemokine receptor genes reveals a homozygous 32-base-pair deletion in the CCR5 gene (CCR5-delta-32). Which of the following viral glycoproteins normally interacts with this host coreceptor to mediate viral membrane fusion?",
    "choices": [
      [
        "Viral surface envelope glycoprotein gp120 following conformational change induced by CD4 binding",
        "HIV-1 entry into host target cells is a multi-step process: (1) The VIRAL SURFACE GLYCOPROTEIN gp120 binds to the primary host receptor, CD4; (2) CD4 binding induces a critical conformational change in gp120 that exposes a conserved coreceptor-binding loop; (3) gp120 binds to a host 7-transmembrane CHEMOKINE CORECEPTOR: either CCR5 (predominant in early transmission; macrophage-tropic / R5 viruses) or CXCR4 (predominant in late disease; T-cell-tropic / X4 viruses); (4) Coreceptor engagement triggers insertion of the hydrophobic fusion peptide of the TRANSMEMBRANE GLYCOPROTEIN gp41 into the host cell membrane, driving viral and host membrane fusion. Individuals homozygous for the CCR5-delta-32 DELETION produce a truncated, non-functional receptor that never reaches the cell surface, conferring nearly complete RESISTANCE TO INFECTION BY R5 HIV-1 STRAINS."
      ],
      [
        "Viral transmembrane glycoprotein gp41 binding directly to the chemokine receptor before CD4 contact",
        "gp41 mediates membrane fusion after coreceptor binding; it does not bind CCR5 directly, and CD4 binding is an obligatory initial requirement."
      ],
      [
        "Capsid protein p24 interacting with cytoplasmic host cyclophilin A during uncoating",
        "p24 forms the viral conical capsid and interacts with cyclophilin A during uncoating; it has no role in initial cell-surface receptor binding."
      ],
      [
        "Matrix protein p17 binding to host membrane phosphatidylinositol 4,5-bisphosphate",
        "p17 forms the inner matrix shell of the viral envelope and aids nuclear import; it does not bind external chemokine coreceptors."
      ],
      [
        "Viral accessory protein Nef down-regulating host cell-surface MHC class I molecules",
        "Nef down-regulates CD4 and MHC class I to evade cytotoxic T cells; it does not mediate viral attachment or coreceptor entry."
      ]
    ],
    "shortestValidSolution": "CCR5-delta-32 homozygosity -> absent CCR5 coreceptor -> HIV gp120 cannot bind after CD4 contact -> resistance to R5 HIV-1.",
    "necessaryInference": "Sequence the HIV entry steps: gp120 binds CD4 -> conformational change -> gp120 binds CCR5 -> gp41 mediates fusion.",
    "strongestDistractor": "Viral transmembrane glycoprotein gp41 binding directly to the chemokine receptor before CD4 contact",
    "distractorExclusion": "gp120 binds the coreceptor after CD4 engagement; gp41 mediates fusion downstream of coreceptor engagement.",
    "citation": "Liu R, Paxton WA, Choe S, et al. Homozygous defect in HIV-1 coreceptor accounts for resistance of some multiply-exposed persons to infection. Cell. 1996;86(3):367-377. PMID: 8756719.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/virology item detailing the molecular stages of HIV entry and CCR5-delta-32 resistance.",
      "distractorExclusionNotes": "Excluded gp41 (fusion peptide), p24 (capsid), and Nef based on sequential gp120-CD4-CCR5 binding dynamics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0867",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Hematology",
    "topic": "Epstein-Barr Virus Latency Membrane Protein 1 and CD40 Molecular Mimicry",
    "provisionalDifficulty": 5,
    "stem": "A 10-year-old boy from equatorial East Africa presents with a rapidly expanding, painless, massive destructive mass of his right mandible. Biopsy of the mass reveals sheets of uniform, medium-sized lymphoid cells with round nuclei, coarsely clumped chromatin, and multiple nucleoli, interspersed with benign tingible-body macrophages containing apoptotic cellular debris, producing a characteristic 'starry-sky' histological appearance. Fluorescence in situ hybridization (FISH) confirms a t(8;14)(q24;q32) chromosomal translocation. In vitro molecular virology studies demonstrate that Epstein-Barr virus (EBV) infects B cells and immortalizes them through the expression of Latent Membrane Protein 1 (LMP1). Which of the following host immune receptors is constitutively mimicked by LMP1 to drive continuous B-cell proliferation and survival?",
    "choices": [
      [
        "CD40 receptor acting through TNF receptor-associated factors (TRAFs) to constitutively activate NF-kappa-B and MAPK",
        "EPSTEIN-BARR VIRUS (EBV) drives B-cell transformation and immortalization primarily via LATENT MEMBRANE PROTEIN 1 (LMP1). LMP1 functions as a CONSTITUTIVELY ACTIVE MOLECULAR MIMIC OF CD40. In normal B cells, CD40 requires binding to CD40L (CD154) on helper T cells to induce oligomerization. In contrast, LMP1 self-aggregates in the host plasma membrane independently of any ligand. Its cytoplasmic C-terminal activation regions (CTAR1 and CTAR2) recruit TNF RECEPTOR-ASSOCIATED FACTORS (TRAFs), constitutively activating the NF-KAPPA-B, JNK/AP-1, and MAPK pathways. This upregulates anti-apoptotic proteins (BCL-2, Mcl-1) and stimulates cell-cycle entry, driving clonal B-cell expansion. In endemic Burkitt lymphoma, malaria-induced immunosuppression permits uncontrolled expansion of EBV-infected B cells, dramatically increasing the likelihood of an erroneous AID-mediated t(8;14) MYC-IgH translocation."
      ],
      [
        "Interleukin-2 receptor alpha chain (CD25) stimulating constitutive JAK-STAT3 phosphorylation",
        "CD25 is the high-affinity IL-2 receptor alpha subunit upregulated on activated T cells, not the target mimicked by EBV LMP1 in B cells."
      ],
      [
        "B-cell receptor (surface IgM) activating spleen tyrosine kinase (Syk) and Bruton tyrosine kinase",
        "EBV Latent Membrane Protein 2A (LMP2A) mimics the B-cell receptor (providing survival signals without antigen), whereas LMP1 mimics CD40."
      ],
      [
        "Fas receptor (CD95) recruiting Fas-associated death domain (FADD) proteins",
        "Fas engagement triggers caspase activation and apoptosis; LMP1 promotes survival by inhibiting apoptosis through NF-kappa-B."
      ],
      [
        "Chemokine receptor CXCR4 driving directed homing to bone marrow stromal cell-derived factor-1",
        "CXCR4 regulates lymphocyte homing and metastasis, not the constitutive proliferative costimulatory signal mimicked by LMP1."
      ]
    ],
    "shortestValidSolution": "EBV LMP1 = constitutive molecular mimic of CD40 -> recruits TRAFs -> activates NF-kappa-B/MAPK -> B-cell immortalization.",
    "necessaryInference": "Differentiate EBV oncogenic latency proteins: LMP1 mimics CD40 (NF-kB/survival), while LMP2A mimics the B-cell receptor.",
    "strongestDistractor": "B-cell receptor (surface IgM) activating spleen tyrosine kinase (Syk) and Bruton tyrosine kinase",
    "distractorExclusion": "LMP2A mimics the B-cell receptor; LMP1 specifically mimics CD40 costimulation to activate TRAF and NF-kappa-B.",
    "citation": "Young LS, Rickinson AB. Epstein-Barr virus: 40 years on. Nat Rev Cancer. 2004;4(10):757-768. PMID: 15510157.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/pathology item on EBV viral oncogenesis and LMP1 molecular mimicry of host CD40 signaling.",
      "distractorExclusionNotes": "Excluded LMP2A (BCR mimic), Fas (death receptor), and CD25 based on LMP1 TRAF-mediated CD40 signaling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0868",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Cytomegalovirus UL97 Kinase Ganciclovir Monophosphorylation and Resistance",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old man with end-stage renal disease undergoes deceased-donor renal transplantation. Three months later, while receiving immunosuppressive therapy with tacrolimus, mycophenolate mofetil, and prednisone, he develops high fever, leukopenia, and worsening graft dysfunction. Quantitative PCR demonstrates a high cytomegalovirus (CMV) viral load of 850,000 copies/mL. Intravenous ganciclovir therapy is initiated. Cellular pharmacology analysis demonstrates that ganciclovir is an acyclic nucleoside analogue of 2'-deoxyguanosine that requires three sequential phosphorylation steps to become active: the initial, rate-limiting monophosphorylation is catalyzed by a viral protein kinase, followed by di- and triphosphorylation by host cellular kinases. Which of the following viral gene products catalyzes this essential initial monophosphorylation of ganciclovir in CMV-infected cells?",
    "choices": [
      [
        "UL97 viral serine/threonine protein kinase (phosphotransferase)",
        "GANCICLOVIR is a guanosine analogue prodrug used for cytomegalovirus (CMV) infections. To inhibit viral replication, ganciclovir must be converted intracellularly to its active form, ganciclovir triphosphate. Crucially, human cytomegalovirus (unlike HSV and VZV) DOES NOT ENCODE A THYMIDINE KINASE. Instead, the rate-limiting initial monophosphorylation of ganciclovir in CMV-infected cells is catalyzed by the VIRAL UL97 SERINE/THREONINE KINASE (phosphotransferase). Once monophosphorylated, host cellular kinases convert it to ganciclovir triphosphate, which competitively inhibits viral DNA polymerase (UL54) and terminates DNA chain elongation. Mutations in the UL97 GENE (e.g., M460V, H520Q, C592G) prevent ganciclovir monophosphorylation and are the primary cause of GANCICLOVIR RESISTANCE in clinical practice."
      ],
      [
        "Viral thymidine kinase encoded by the UL23 gene locus",
        "Herpes simplex virus (HSV) and varicella-zoster virus (VZV) encode thymidine kinase (TK) to monophosphorylate acyclovir and ganciclovir; CMV lacks thymidine kinase entirely."
      ],
      [
        "Viral DNA-dependent DNA polymerase encoded by the UL54 gene",
        "UL54 encodes CMV DNA polymerase, which is the downstream target inhibited by ganciclovir triphosphate, not the monophosphorylating kinase."
      ],
      [
        "Viral ribonucleotide reductase large catalytic subunit",
        "Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides; it is not the kinase responsible for ganciclovir activation."
      ],
      [
        "Viral major capsid protein assembly protease encoded by UL80",
        "UL80 is a maturational protease that cleaves the viral scaffold protein during capsid assembly, with no kinase activity."
      ]
    ],
    "shortestValidSolution": "CMV lacks thymidine kinase -> ganciclovir monophosphorylation requires CMV UL97 kinase -> UL97 mutations cause ganciclovir resistance.",
    "necessaryInference": "Contrast CMV (uses UL97 kinase) with HSV/VZV (uses thymidine kinase) for nucleoside analogue monophosphorylation.",
    "strongestDistractor": "Viral thymidine kinase encoded by the UL23 gene locus",
    "distractorExclusion": "CMV lacks viral thymidine kinase (the target in HSV/VZV); it uniquely utilizes the UL97 phosphotransferase.",
    "citation": "Lurain NS, Chou S. Cytomegalovirus drug resistance. Clin Microbiol Rev. 2010;23(4):689-712. PMID: 20930070.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/pharmacology item on CMV viral enzyme kinetics, nucleoside activation, and UL97 drug resistance.",
      "distractorExclusionNotes": "Excluded HSV thymidine kinase (UL23) and DNA polymerase (UL54) based on UL97-specific phosphotransferase catalysis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0869",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Gastrointestinal",
    "topic": "Hepatitis B Virus Reverse Transcription of Pregenomic RNA and cccDNA",
    "provisionalDifficulty": 5,
    "stem": "An investigator studies the replication cycle of hepatitis B virus (HBV) in primary human hepatocyte cultures. After the enveloped virion enters the hepatocyte via the sodium taurocholate cotransporting polypeptide (NTCP) receptor, the partially double-stranded relaxed circular DNA (rcDNA) genome is released into the cytoplasm and transported to the nucleus. Inside the nucleus, host cellular repair enzymes convert rcDNA into covalently closed circular DNA (cccDNA), which forms a stable viral minichromosome. Cellular RNA polymerase II then transcribes cccDNA into several viral mRNAs, including a greater-than-genome-length transcript known as pregenomic RNA (pgRNA). Which of the following enzymatic events occurs inside the newly assembled viral nucleocapsid in the cytoplasm to generate new viral genomic DNA?",
    "choices": [
      [
        "Viral reverse transcriptase copies pregenomic RNA into negative-strand DNA and subsequently synthesizes partial positive-strand DNA",
        "HEPATITIS B VIRUS (Hepadnaviridae) is a unique partially double-stranded DNA virus that replicates through an RNA INTERMEDIATE via REVERSE TRANSCRIPTION. In the hepatocyte nucleus, host DNA repair enzymes convert relaxed circular DNA (rcDNA) into COVALENTLY CLOSED CIRCULAR DNA (cccDNA), which persists indefinitely as an episomal minichromosome. Host RNA polymerase II transcribes cccDNA into PREGENOMIC RNA (pgRNA). pgRNA is packaged into assembling capsids in the cytoplasm along with the VIRAL DNA POLYMERASE (which possesses reverse transcriptase, RNA-dependent DNA polymerase, and RNase H activities). Inside the capsid, the polymerase reverse-transcribes pgRNA into a FULL-LENGTH COMPLEMENTARY NEGATIVE-STRAND DNA, degrades the pgRNA template via RNase H, and then uses a leftover RNA primer to synthesize a PARTIAL POSITIVE-STRAND DNA, yielding mature rcDNA."
      ],
      [
        "Host cellular DNA polymerase alpha replicates both strands simultaneously via semi-conservative leading and lagging strand synthesis",
        "HBV does not replicate via host DNA polymerase; its genome is replicated by its own viral reverse transcriptase inside cytoplasmic capsids."
      ],
      [
        "Viral RNA-dependent RNA polymerase replicates pregenomic RNA into double-stranded RNA replication intermediates",
        "Replication via an RNA-dependent RNA polymerase producing dsRNA intermediates is characteristic of RNA viruses (e.g., Reoviridae, Coronaviridae), not HBV."
      ],
      [
        "Host topoisomerase II cleaves cccDNA into linear fragments that integrate into the host genome to initiate rolling-circle DNA replication",
        "HBV does not require integration for viral replication (cccDNA acts as the template), and it does not use rolling-circle replication."
      ],
      [
        "Viral integrase inserts the linear double-stranded DNA copy into transcriptionally active host chromosomal loci",
        "Retroviruses (e.g., HIV) require integrase to integrate proviral DNA into host chromosomes; HBV does not encode an integrase and does not require integration for virion assembly."
      ]
    ],
    "shortestValidSolution": "HBV = DNA virus with RNA intermediate -> host RNA pol II transcribes cccDNA to pgRNA -> viral reverse transcriptase makes rcDNA inside capsid.",
    "necessaryInference": "Map the unique replication cycle of Hepadnaviridae: DNA -> RNA intermediate (pgRNA) -> Reverse transcription to DNA inside capsid.",
    "strongestDistractor": "Viral integrase inserts the linear double-stranded DNA copy into transcriptionally active host chromosomal loci",
    "distractorExclusion": "Retroviruses use integrase to insert proviral DNA; HBV replication occurs episomally via cccDNA without requiring viral integrase.",
    "citation": "Seeger C, Mason WS. Molecular biology of hepatitis B virus infection. Virology. 2015;479-480:672-686. PMID: 25759099.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/virology item detailing the hepadnavirus replication cycle, cccDNA persistence, and reverse transcription.",
      "distractorExclusionNotes": "Excluded retroviral integrase and host DNA polymerase based on viral reverse transcriptase copying pgRNA inside cytoplasmic capsids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0870",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Gastrointestinal",
    "topic": "Hepatitis D Virus Subviral Satellite Dependence on HBsAg Envelope Coating",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old man who is a chronic carrier of hepatitis B virus (HBsAg positive for 8 years, HBeAg negative, anti-HBe positive, with normal ALT) presents with acute jaundice, dark urine, and severe fatigue. Laboratory evaluation reveals an acute dramatic spike in serum ALT to 2,140 U/L and total bilirubin to 8.2 mg/dL. Serological testing reveals newly positive anti-HDV IgM and detectable HDV RNA. Liver biopsy demonstrates severe acute lobular necroinflammatory activity with eosinophilic hepatocellular degeneration. Molecular virology confirms that hepatitis D virus (HDV) is a defective single-stranded circular negative-sense RNA subviral agent that cannot complete its life cycle or cause secondary infection in the absence of helper virus functions. Which of the following specific structural components must be provided by hepatitis B virus to enable HDV virion assembly, envelope coating, and subsequent hepatocyte entry?",
    "choices": [
      [
        "Hepatitis B surface antigen (HBsAg) proteins forming the outer envelope lipid bilayer",
        "HEPATITIS D VIRUS (HDV / Delta agent) is a DEFECTIVE, replication-incompetent subviral satellite virus. Its genome is a tiny, circular, single-stranded negative-sense RNA that encodes a single structural protein: the HEPATITIS DELTA ANTIGEN (HDAg: small-HDAg for replication, large-HDAg for packaging). HDV has NO GENES FOR ENVELOPE PROTEINS. Inside an infected hepatocyte, HDV RNA replicates autonomously using host RNA polymerase II. However, to assemble mature infectious virions that can bud from the host cell and infect adjacent hepatocytes, HDV STRICTLY REQUIRES THE COATING OF ITS RIBONUCLEOPROTEIN CORE BY HEPATITIS B SURFACE ANTIGEN (HBsAg). Because HBsAg binds the sodium taurocholate cotransporting polypeptide (NTCP) receptor on human hepatocytes, HDV cannot enter or infect cells without HBsAg."
      ],
      [
        "Hepatitis B core antigen (HBcAg) forming the icosahedral nucleocapsid shell",
        "HDV packages its circular RNA inside its own Hepatitis Delta Antigen (HDAg), not HBcAg; it utilizes only HBsAg for its outer coat."
      ],
      [
        "Hepatitis B e antigen (HBeAg) functioning as an extracellular immunosuppressive decoy",
        "HBeAg is a secreted non-structural protein derived from precore/core processing; it is not incorporated into HDV virions."
      ],
      [
        "Hepatitis B viral reverse transcriptase providing RNA-dependent DNA polymerase activity",
        "HDV replicates its RNA genome using host cellular RNA polymerase II, which acts as an RNA-dependent RNA polymerase; it does not use HBV reverse transcriptase."
      ],
      [
        "Hepatitis B X protein (HBx) transactivating host anti-apoptotic survival pathways",
        "While HBx transactivates viral transcription in HBV, it is not an obligatory structural or enzymatic requirement for HDV packaging."
      ]
    ],
    "shortestValidSolution": "HDV is a defective satellite virus that requires Hepatitis B surface antigen (HBsAg) for outer envelope coating and cell entry.",
    "necessaryInference": "Identify HBsAg as the specific structural component hijacked by HDV for virion assembly and NTCP receptor engagement.",
    "strongestDistractor": "Hepatitis B core antigen (HBcAg) forming the icosahedral nucleocapsid shell",
    "distractorExclusion": "HDV uses its own internal protein (HDAg) to form its ribonucleoprotein core; it requires only the surface antigen (HBsAg) for its outer envelope.",
    "citation": "Hughes SA, Wedemeyer H, Harrison PM. Hepatitis delta virus. Lancet. 2011;378(9785):73-85. PMID: 21511329.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/virology item on subviral satellite biology and hepatitis D dependence on HBsAg envelope coating.",
      "distractorExclusionNotes": "Excluded HBcAg (HDV uses HDAg for core) and HBV reverse transcriptase (HDV uses host RNA pol II) based on HBsAg envelope requirement.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0871",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Human Papillomavirus E6 and E7 Oncoproteins p53 and pRb Inactivation",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old woman with a 15-year history of cigarette smoking and inconsistent cervical screening presents with postcoital bleeding and foul-smelling vaginal discharge. Pelvic examination reveals an exophytic, ulcerated, friable mass on the posterior ectocervix measuring 3.5 cm. Cervical punch biopsy confirms invasive squamous cell carcinoma. Polymerase chain reaction (PCR) testing confirms the presence of high-risk human papillomavirus (HPV) type 16 DNA integrated into the host genome. Molecular oncogenesis studies demonstrate that high-risk HPV drives malignant transformation via two viral oncoproteins, E6 and E7. Which of the following pairs correctly pairs each viral oncoprotein with its specific host tumor suppressor target and molecular mechanism of inactivation?",
    "choices": [
      [
        "E6 binds E6AP ubiquitin ligase to degrade p53; E7 binds and inactivates pRb, releasing active E2F transcription factors",
        "HIGH-RISK HUMAN PAPILLOMAVIRUSES (HPV types 16, 18, 31, 33) drive cervical, anogenital, and oropharyngeal carcinogenesis through the coordinated action of two viral oncoproteins: (1) E6 ONCOPROTEIN binds to the host ubiquitin ligase E6-ASSOCIATED PROTEIN (E6AP). The E6-E6AP complex binds the tumor suppressor p53, polyubiquitinating it and directing it to the 26S PROTEASOME FOR DEGRADATION. Loss of p53 abolishes DNA-damage cell-cycle arrest and apoptosis. (2) E7 ONCOPROTEIN binds to the hypophosphorylated active form of the RETINOBLASTOMA PROTEIN (pRb). Binding disrupts the pRb-E2F complex, RELEASING FREE E2F TRANSCRIPTION FACTORS that drive transcription of cyclin E, cyclin A, and thymidine kinase, forcing the cell through the G1/S CHECKPOINT into uncontrolled S-phase DNA synthesis."
      ],
      [
        "E6 phosphorylates pRb causing its nuclear translocation; E7 acts as a direct inhibitor of cyclin-dependent kinase inhibitor p16",
        "E7 inactivates pRb; inactivation of pRb causes compensatory, marked overexpression of p16 (INK4a), which serves as a clinical biomarker for high-risk HPV."
      ],
      [
        "E6 cleaves the extracellular domain of epidermal growth factor receptor; E7 binds and degrades p53 via caspases",
        "E6 degrades p53 via the proteasome, not E7; E7 targets pRb."
      ],
      [
        "E6 inhibits the catalytic subunit of telomerase reverse transcriptase; E7 blocks MYC transcription",
        "E6 actually ACTIVATES telomerase (hTERT) to maintain telomere length; it does not inhibit telomerase."
      ],
      [
        "E6 binds and sequesters the mismatch repair protein MSH2; E7 cleaves adenomatous polyposis coli (APC)",
        "HPV oncoproteins do not specifically target MSH2 or APC; their classic well-characterized targets are p53 (E6) and pRb (E7)."
      ]
    ],
    "shortestValidSolution": "High-risk HPV: E6 degrades p53 (via ubiquitin/E6AP); E7 inhibits pRb (releasing E2F to drive G1/S progression).",
    "necessaryInference": "Remember the numbered pairing: E6 -> 6 has a loop like 5 in p53 (E6 destroys p53); E7 -> pRb (root is 7 letters; E7 inhibits Rb releasing E2F).",
    "strongestDistractor": "E6 phosphorylates pRb causing its nuclear translocation; E7 acts as a direct inhibitor of cyclin-dependent kinase inhibitor p16",
    "distractorExclusion": "E7 inhibits pRb, which leads to massive OVEREXPRESSION of p16 due to loss of negative feedback, not p16 inhibition.",
    "citation": "Doorbar J, Quint W, Banks L, et al. The biology and life-cycle of human papillomaviruses. Vaccine. 2012;30 Suppl 5:F55-F70. PMID: 23199966.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/pathology item on high-risk HPV viral oncoproteins E6 and E7, and their respective tumor suppressor targets.",
      "distractorExclusionNotes": "Excluded swapped targets and p16 inhibition based on E6-p53 degradation and E7-pRb dissociation releasing E2F.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0872",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Hematology",
    "topic": "Parvovirus B19 P Antigen Globoside and Erythroid Progenitor Cytotoxicity",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old boy with homozygous sickle cell disease (HbSS) is brought to the emergency department with profound weakness, lethargy, pallor, and dyspnea on minimal exertion. Physical examination reveals an extremely pale, tachycardic child with a systolic ejection murmur, but no splenomegaly. Laboratory evaluation demonstrates an acute drop in hemoglobin from his baseline of 8.6 g/dL to 3.4 g/dL. His reticulocyte count is shockingly depressed at 0.1% (normal for HbSS: 8-15%, absolute reticulocytes < 10,000/uL). Bone marrow aspiration reveals giant proerythroblasts with prominent intranuclear viral inclusion bodies and complete arrest of erythropoiesis, with normal myeloid and megakaryocytic lineages. Serum PCR is positive for Parvovirus B19 DNA. Which of the following host cell-surface molecules acts as the primary receptor for Parvovirus B19 attachment and cellular entry?",
    "choices": [
      [
        "Blood group P antigen (globoside / tetrahexosylceramide) on erythroid progenitor cells",
        "PARVOVIRUS B19 is a non-enveloped, single-stranded DNA virus (the smallest DNA virus). It exhibits strict tropism for HUMAN ERYTHROID PROGENITOR CELLS (erythroblasts, BFU-E, CFU-E). The primary cellular receptor for Parvovirus B19 attachment is the BLOOD GROUP P ANTIGEN (GLOBOSIDE, a neutral glycosphingolipid). Individuals who lack the P antigen (p phenotype, rare autosomal recessive) are completely resistant to Parvovirus B19 infection. Once bound to globoside, coreceptors (alpha-5-beta-1 integrin) facilitate viral internalization. The non-structural protein 1 (NS1) of the virus arrests host cells in the G2/M phase and triggers apoptosis. In patients with chronic hemolytic anemias (sickle cell, hereditary spherocytosis), destruction of erythroid progenitors causes a temporary complete shutdown of red cell production, resulting in life-threatening APLASTIC CRISIS (marked anemia with RETICULOCYTOPENIA)."
      ],
      [
        "Glycophorin A sialoglycoprotein on mature unnucleated erythrocytes",
        "Glycophorin A is the erythrocyte receptor for Plasmodium falciparum EBA-175 and influenza virus, not Parvovirus B19."
      ],
      [
        "Duffy antigen receptor for chemokines (DARC) on normocytic reticulocytes",
        "DARC is the receptor for Plasmodium vivax merozoite invasion, not Parvovirus B19."
      ],
      [
        "Transferrin receptor 1 (CD71) mediating endocytosis of ferric iron",
        "CD71 is expressed on erythroid precursors, but Parvovirus B19 attachment is mediated specifically by the P antigen (globoside)."
      ],
      [
        "Erythropoietin receptor coupled to Janus kinase 2 on committed CFU-E cells",
        "Erythropoietin binds the EpoR to stimulate erythropoiesis, but Parvovirus B19 does not bind EpoR for cellular entry."
      ]
    ],
    "shortestValidSolution": "Sickle cell + severe anemia with RETICULOCYTOPENIA + giant proerythroblasts = Parvovirus B19 aplastic crisis -> binds P antigen (globoside).",
    "necessaryInference": "Identify blood group P antigen (globoside) as the essential cell-surface receptor for Parvovirus B19 erythroid tropism.",
    "strongestDistractor": "Transferrin receptor 1 (CD71) mediating endocytosis of ferric iron",
    "distractorExclusion": "While CD71 is abundant on erythroid precursors, Parvovirus B19 specifically requires the P antigen (globoside) for cellular entry.",
    "citation": "Brown KE, Anderson SM, Young NS. Erythrocyte P antigen: cellular receptor for B19 parvovirus. Science. 1993;262(5130):114-117. PMID: 8211117.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/hematology item on Parvovirus B19 aplastic crisis in hemoglobinopathies and P antigen globoside receptor tropism.",
      "distractorExclusionNotes": "Excluded glycophorin A (P. falciparum), Duffy (P. vivax), and CD71 based on globoside P-antigen specificity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0873",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Gastrointestinal",
    "topic": "Clostridioides Difficile Toxins A and B Rho GTPase Glucosylation Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old woman develops profuse, foul-smelling watery diarrhea (8-10 episodes per day), crampy abdominal pain, fever (38.8 C), and marked leukocytosis (white blood cell count 26,000/uL with 88% neutrophils) 10 days after completing a course of clindamycin for an aspiration pneumonia. Sigmoidoscopy reveals diffuse hyperemic colonic mucosa covered by discrete, punctate, yellowish-white mucosal plaques. Microscopic examination of the plaques reveals inflammatory pseudomembranes composed of fibrin, mucin, necrotic colonic epithelial cells, and dense neutrophil infiltration ('volcano lesions'). Stool PCR is positive for Clostridioides difficile toxin genes. Molecular analysis indicates that C. difficile virulence is mediated by Toxin A (enterotoxin) and Toxin B (cytotoxin). Which of the following biochemical mechanisms accounts for the cytotoxicity and disruption of the intestinal epithelial barrier caused by these toxins?",
    "choices": [
      [
        "Monoglucosylation of low-molecular-weight Rho-family GTPases (Rho, Rac, Cdc42) using UDP-glucose as a substrate",
        "CLOSTRIDIOIDES DIFFICILE produces two large clostridial glucosylating toxins: TOXIN A (TcdA, enterotoxin) and TOXIN B (TcdB, potent cytotoxin). Both toxins enter colonic enterocytes via receptor-mediated endocytosis, followed by low-pH-induced pore formation and autoproteolytic release of their N-terminal glucosyltransferase catalytic domain into the host cytosol. The toxins catalyze the MONOGLUCOSYLATION OF RHO-FAMILY SMALL GTPases (RhoA, Rac1, and Cdc42) at a conserved threonine residue (Thr-37 in RhoA), utilizing intracellular UDP-GLUCOSE as the sugar donor. Glucosylation permanently locks Rho GTPases in an inactive conformation. Because Rho GTPases control actin dynamics and tight junction assembly, their inactivation triggers: (1) COLLAPSE OF THE ACTIN CYTOSKELETON, (2) LOSS OF TIGHT JUNCTION INTEGRITY (zonula occludens breakdown with severe fluid leak and watery diarrhea), and (3) ENTEROCYTE APOPTOSIS with massive neutrophil recruitment and pseudomembrane formation."
      ],
      [
        "ADP-ribosylation of the alpha-subunit of Gs proteins stimulating constitutive adenylyl cyclase activity",
        "ADP-ribosylation of Gs causing constitutive cAMP activation is the mechanism of Vibrio cholerae cholera toxin and ETEC heat-labile toxin (LT)."
      ],
      [
        "Cleavage of the 28S ribosomal RNA of the 60S eukaryotic ribosomal subunit halting translation",
        "Cleaving 28S rRNA to halt translation is the mechanism of Shiga toxin (Shigella dysenteriae) and Shiga-like toxins (EHEC)."
      ],
      [
        "Proteolytic cleavage of synaptobrevin (VAMP) preventing exocytic neurotransmitter vesicle release",
        "Synaptobrevin cleavage is the mechanism of Clostridium tetani (tetanospasmin) and Clostridium botulinum toxins."
      ],
      [
        "Lecithinase activity hydrolyzing phosphatidylcholine and sphingomyelin in cell membranes",
        "Lecithinase (alpha-toxin, phospholipase C) causing gas gangrene is produced by Clostridium perfringens, not C. difficile."
      ]
    ],
    "shortestValidSolution": "Clostridioides difficile Toxins A & B = UDP-glucosyltransferases -> glucosylate Rho/Rac/Cdc42 GTPases -> actin cytoskeleton collapse & tight junction breakdown.",
    "necessaryInference": "Map C. difficile toxins A and B to UDP-glucosylation of Rho-family GTPases resulting in actin filament disassembly.",
    "strongestDistractor": "ADP-ribosylation of the alpha-subunit of Gs proteins stimulating constitutive adenylyl cyclase activity",
    "distractorExclusion": "Cholera toxin and ETEC LT ADP-ribosylate Gs; C. difficile toxins specifically glucosylates Rho GTPases using UDP-glucose.",
    "citation": "Voth DE, Ballard JD. Clostridium difficile toxins: mechanism of action and role in disease. Clin Microbiol Rev. 2005;18(2):247-263. PMID: 15831824.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/pathology item on C. difficile glucosylating toxins, Rho GTPase inactivation, and pseudomembranous colitis.",
      "distractorExclusionNotes": "Excluded cholera toxin (Gs ADP-ribosylation), Shiga toxin (28S rRNA), and C. perfringens lecithinase based on Rho UDP-glucosylation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0874",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Respiratory",
    "topic": "Pseudomonas Aeruginosa Exotoxin A Elongation Factor 2 ADP-Ribosylation",
    "provisionalDifficulty": 4,
    "stem": "A 42-year-old man with severe extensive third-degree burns covering 45% of his total body surface area is hospitalized in the burn intensive care unit. On hospital day 12, he develops high fevers, worsening tachycardia, hypotension, and green-pigmented, sweet grape-like smelling purulent drainage from his burn wounds. Examination reveals scattered necrotic cutaneous lesions with central black eschar surrounded by an erythematous halo (ecthyma gangrenosum). Blood cultures grow an oxidase-positive, non-lactose-fermenting Gram-negative rod that produces a blue-green pyocyanin pigment. The major virulence factor responsible for tissue necrosis in this organism is Exotoxin A. Which of the following biochemical mechanisms describes the enzymatic action of Pseudomonas aeruginosa Exotoxin A inside host cells?",
    "choices": [
      [
        "ADP-ribosylation of diphthamide residues on eukaryotic elongation factor 2 (EF-2), halting protein synthesis",
        "PSEUDOMONAS AERUGINOSA produces multiple virulence factors, but its most potent lethal factor is EXOTOXIN A. Exotoxin A is an AB toxin that binds to the host alpha-2-macroglobulin receptor (LRP1) via its B subunit and undergoes endocytosis. Inside the host cytosol, the catalytic A subunit catalyzes the ADP-RIBOSYLATION OF ELONGATION FACTOR 2 (EF-2). Specifically, it transfers an ADP-ribose moiety from NAD+ onto DIPHTHAMIDE (a post-translationally modified histidine residue unique to EF-2). This covalent modification permanently inactivates EF-2, preventing ribosome translocation and COMPLETELY HALTING HOST CELL PROTEIN SYNTHESIS, leading to rapid cell death and tissue necrosis (as seen in ecthyma gangrenosum). This mechanism is MOLECULARLY IDENTICAL to that of DIPHTHERIA TOXIN produced by Corynebacterium diphtheriae."
      ],
      [
        "Ribosomal RNA N-glycosylase activity cleaving a single adenine from the 28S rRNA sarcin-ricin loop",
        "Cleaving adenine from 28S rRNA describes Shiga toxin and ricin, not Pseudomonas Exotoxin A."
      ],
      [
        "Direct ADP-ribosylation of the inhibitory G-protein alpha-subunit (Gi), locking it in an inactive state",
        "ADP-ribosylation of Gi to prevent adenylyl cyclase inhibition is the mechanism of Bordetella pertussis pertussis toxin."
      ],
      [
        "Zinc-dependent endopeptidase cleavage of vesicle-associated membrane proteins in motor neurons",
        "Cleavage of synaptobrevin/VAMP is the mechanism of tetanus and botulinum neurotoxins, not Pseudomonas Exotoxin A."
      ],
      [
        "Pore-forming cholesterol-dependent cytolysin disrupting eukaryotic plasma membrane integrity",
        "Pore-forming cytolysins include listeriolysin O and streptolysin O; Pseudomonas Exotoxin A is an intracellular enzyme that inhibits translation."
      ]
    ],
    "shortestValidSolution": "Pseudomonas Exotoxin A = ADP-ribosylates Elongation Factor 2 (EF-2) -> halts protein synthesis -> cell death (identical to Diphtheria toxin).",
    "necessaryInference": "Recognize that Pseudomonas Exotoxin A shares an identical molecular mechanism with Diphtheria toxin: ADP-ribosylation of EF-2.",
    "strongestDistractor": "Ribosomal RNA N-glycosylase activity cleaving a single adenine from the 28S rRNA sarcin-ricin loop",
    "distractorExclusion": "Shiga toxin cleaves 28S rRNA; Pseudomonas Exotoxin A and Diphtheria toxin specifically ADP-ribosylate diphthamide on EF-2.",
    "citation": "Iglewski BH et al. Mechanism of action of Pseudomonas aeruginosa exotoxin Aiadenosine diphosphate-ribosylation of mammalian elongation factor 2 in vitro and in vivo. Infect Immun. PMID: 188760.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology item on Pseudomonas Exotoxin A enzymatic action and its functional identity to Diphtheria toxin.",
      "distractorExclusionNotes": "Excluded Shiga toxin (28S rRNA), pertussis toxin (Gi ADP-ribosylation), and neurotoxins based on EF-2 ADP-ribosylation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0875",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Respiratory",
    "topic": "Corynebacterium Diphtheriae Toxin Heparin-Binding EGF Receptor Entry",
    "provisionalDifficulty": 4,
    "stem": "A 5-year-old unimmunized girl recently immigrated from an area with low vaccination coverage presents with severe sore throat, fever, hoarseness, and painful bilateral cervical lymphadenopathy producing a prominent 'bull-neck' appearance. Physical examination reveals a thick, leathery, grayish-brown pseudomembrane firmly adherent to the posterior pharyngeal wall, uvula, and bilateral tonsillar pillars. Attempted gentle scraping of the membrane elicits profuse bleeding. 12-lead ECG reveals prolonged PR interval and frequent premature ventricular complexes (myocarditis). Gram stain of pharyngeal swabs demonstrates Gram-positive pleomorphic club-shaped rods arranged in angular V- or L-shaped clumps ('Chinese characters') that stain metachromatic with methylene blue (Albert stain). Which of the following host cell-surface receptors mediates the binding and receptor-mediated endocytosis of the B subunit of diphtheria toxin?",
    "choices": [
      [
        "Heparin-binding epidermal growth factor-like precursor (HB-EGF)",
        "CORYNEBACTERIUM DIPHTHERIAE produces DIPHTHERIA TOXIN, an AB exotoxin encoded by the tox gene carried by a temperate lysogenic bacteriophage (CORYNEPHAGE BETA). The toxin is synthesized as a single polypeptide that is cleaved into an A (catalytic) and B (binding) subunit linked by a disulfide bridge. The B SUBUNIT binds specifically to the HEPARIN-BINDING EPIDERMAL GROWTH FACTOR-LIKE PRECURSOR (HB-EGF / pro-HB-EGF), a cell-surface receptor widely expressed on myocardial cells, peripheral nerve Schwann cells, and mucosal epithelium. Receptor engagement triggers receptor-mediated endocytosis. Acidification of the endosome induces a conformational change that translocates the A catalytic subunit into the cytosol, where it ADP-RIBOSYLATES DIPHTHAMIDE ON ELONGATION FACTOR 2 (EF-2), halting protein synthesis. High HB-EGF expression in the myocardium and peripheral nerves explains the lethal complications: TOXIC MYOCARDITIS (conduction block) and NEUROPATHY (cranial nerve palsies, soft palate paralysis)."
      ],
      [
        "Low-density lipoprotein receptor-related protein 1 (LRP1 / CD91)",
        "LRP1 is the host receptor for Pseudomonas Exotoxin A, not diphtheria toxin (which uses HB-EGF)."
      ],
      [
        "Ganglioside GM1 on intestinal brush border microvillus membranes",
        "Ganglioside GM1 is the receptor for Vibrio cholerae cholera toxin and E. coli heat-labile enterotoxin."
      ],
      [
        "Polysialic acid on neural cell adhesion molecules (NCAM)",
        "NCAM polysialic acid mediates neuronal plasticity and cell migration; it does not serve as the diphtheria toxin receptor."
      ],
      [
        "Toll-like receptor 4 (TLR4) complexed with myeloid differentiation factor 2",
        "TLR4-MD2 recognizes Gram-negative lipopolysaccharide (endotoxin), not the protein B subunit of diphtheria exotoxin."
      ]
    ],
    "shortestValidSolution": "Bull neck + adherent bleeding pseudomembrane + myocarditis = Diphtheria toxin (binds HB-EGF receptor -> ADP-ribosylates EF-2).",
    "necessaryInference": "Identify heparin-binding EGF-like growth factor (HB-EGF) as the specific host receptor for diphtheria toxin cellular entry.",
    "strongestDistractor": "Low-density lipoprotein receptor-related protein 1 (LRP1 / CD91)",
    "distractorExclusion": "LRP1 is the receptor for Pseudomonas Exotoxin A; diphtheria toxin specifically binds HB-EGF (abundant on myocardium and Schwann cells).",
    "citation": "Holmes RK. Biology and molecular epidemiology of diphtheria toxin and the tox gene. J Infect Dis. 2000;181 Suppl 1:S156-S167. PMID: 10657208.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 microbiology/pathology item on C. diphtheriae pathogenesis, HB-EGF receptor tropism, and myocarditis complications.",
      "distractorExclusionNotes": "Excluded LRP1 (Pseudomonas Exotoxin A receptor) and GM1 (cholera toxin) based on HB-EGF diphtheria receptor biology.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
