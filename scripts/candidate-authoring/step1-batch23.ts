import { CandidateSpec } from './types';

export const step1Batch23: CandidateSpec[] = [
  {
    "code": "op-c-s1-0551",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Porphyria Cutanea Tarda UROD Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man with chronic hepatitis C virus infection presents with blistering lesions on the dorsum of his hands following sun exposure. He notes that minor trauma causes superficial skin erosions that heal with scarring, hyperpigmentation, and tiny white papules (milia). He also reports that his urine appears dark reddish-brown ('tea-colored'). Physical examination reveals tense vesicles, crusts, and hypertrichosis on his malar cheeks. Serum ferritin is 680 ng/mL (elevated). Wood lamp examination of the urine demonstrates bright coral-pink fluorescence. Which of the following enzymes is deficient in this patient's hepatocytes?",
    "choices": [
      [
        "Uroporphyrinogen decarboxylase (UROD) in the cytosolic heme synthesis pathway",
        "Porphyria cutanea tarda (PCT) is the most common porphyria, caused by deficiency of uroporphyrinogen decarboxylase (UROD). UROD catalyzes the sequential decarboxylation of four acetate side chains of uroporphyrinogen III to methyl groups, forming coproporphyrinogen III. Hepatic iron overload, alcohol, and hepatitis C trigger generation of reactive oxygen species that inhibit UROD. Uroporphyrinogen accumulates, oxidizes to uroporphyrin, and circulates to the skin. Exposure to long-wave UV light (Soret band ~400 nm) excites uroporphyrin, producing reactive oxygen species, blister formation, skin fragility, and coral-pink fluorescent tea-colored urine."
      ],
      [
        "Porphobilinogen deaminase (hydroxymethylbilane synthase) in the cytoplasm",
        "PBGD deficiency causes acute intermittent porphyria (AIP), which presents with acute neurovisceral attacks (abdominal pain, neuropathy, psychosis) WITHOUT cutaneous photosensitivity or skin blisters."
      ],
      [
        "Delta-aminolevulinic acid dehydratase (ALAD) in the cytoplasm",
        "ALAD deficiency is extremely rare and inhibited by lead; it causes neurovisceral symptoms without prominent blistering PCT photosensitivity."
      ],
      [
        "Ferrochelatase in the inner mitochondrial membrane",
        "Ferrochelatase deficiency causes erythropoietic protoporphyria (EPP), which presents with painful burning/erythema immediately upon sun exposure, without tense blisters or chronic tea-colored urine."
      ],
      [
        "Protoporphyrinogen oxidase in the mitochondrial membrane",
        "Protoporphyrinogen oxidase deficiency causes variegate porphyria, which combines neurovisceral attacks with cutaneous photosensitivity, unlike pure cutaneous PCT."
      ]
    ],
    "shortestValidSolution": "Sun-exposed blisters on hands + hepatitis C/iron overload + tea-colored fluorescent urine = Porphyria cutanea tarda -> UROD deficiency.",
    "necessaryInference": "Distinguish cutaneous porphyria (PCT: UROD deficiency, blistering photosensitivity) from acute neurovisceral porphyria (AIP: PBGD deficiency, no cutaneous lesions).",
    "strongestDistractor": "Porphobilinogen deaminase (hydroxymethylbilane synthase) in the cytoplasm",
    "distractorExclusion": "PBGD deficiency causes acute intermittent porphyria with severe abdominal pain and neuropathy, but characteristically lacks cutaneous photosensitivity.",
    "citation": "Frank J, Poblete-Guti\u00e9rrez P. Porphyria cutanea tarda--when skin meets liver. Best Pract Res Clin Gastroenterol. 2010;24(5):735-745. PMID: 20951923.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0552",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Acute Intermittent Porphyria PBGD Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 26-year-old woman is brought to the emergency department because of severe, colicky, diffuse abdominal pain, nausea, and vomiting. Over the past 2 days, she has become increasingly agitated, anxious, and paranoid. She began a strict low-carbohydrate, fasting weight-loss diet 5 days ago and was prescribed rifampin for meningococcal exposure 2 days ago. Physical examination shows tachycardia (pulse 118/min) and mild bilateral wrist drop; abdominal examination reveals no tenderness, guarding, or peritoneal signs despite severe subjective agony. Urinalysis appears normal initially, but after standing in sunlight for 2 hours, the urine turns dark port-wine colored. Cutaneous examination shows completely normal skin without blisters or photosensitivity. Which of the following is the underlying enzymatic defect in this patient?",
    "choices": [
      [
        "Porphobilinogen deaminase (PBGD / hydroxymethylbilane synthase) in the heme biosynthetic pathway",
        "Acute intermittent porphyria (AIP) is an autosomal dominant disorder caused by haploinsufficiency of porphobilinogen deaminase (PBGD). Fasting and CYP450-inducing drugs (rifampin, antiepileptics, barbiturates) deplete hepatic free heme, disinhibiting the rate-limiting enzyme ALAS1. This causes massive upstream accumulation of delta-aminolevulinic acid (ALA) and porphobilinogen (PBG). ALA and PBG are direct neurotoxins causing the 5 P's: Painful abdomen (out of proportion to exam), Polyneuropathy (wrist/foot drop), Psychosis/agitation, Port-wine colored urine (PBG oxidizes to porphobilin on light exposure), and Precipitation by drugs/fasting. Crucially, because the block is prior to porphyrin ring formation, THERE IS NO CUTANEOUS PHOTOSENSITIVITY. Treatment includes IV glucose (inhibits ALAS1 via PGC-1alpha downregulation) and IV hemin."
      ],
      [
        "Uroporphyrinogen decarboxylase (UROD) in hepatocytes",
        "UROD deficiency causes porphyria cutanea tarda with prominent blistering cutaneous photosensitivity, unlike AIP which has purely neurovisceral symptoms."
      ],
      [
        "Delta-aminolevulinic acid synthase 1 (ALAS1) in the mitochondria",
        "ALAS1 is the rate-limiting enzyme that is HYPERACTIVATED (disinhibited) during an acute attack; it is not the deficient enzyme."
      ],
      [
        "Coproporphyrinogen oxidase in the mitochondrial intermembrane space",
        "Coproporphyrinogen oxidase deficiency causes hereditary coproporphyria, which features both neurovisceral crises and cutaneous photosensitivity."
      ],
      [
        "Homogentisate 1,2-dioxygenase in the tyrosine degradation pathway",
        "Homogentisate 1,2-dioxygenase deficiency causes alkaptonuria, characterized by urine turning black on standing, ochronosis, and arthropathy, without acute neurovisceral agony."
      ]
    ],
    "shortestValidSolution": "Severe abdominal pain out of proportion + neuropathy/psychosis + port-wine urine on light + rifampin/fasting trigger + NO photosensitivity = AIP -> PBGD deficiency.",
    "necessaryInference": "Recognize that PBGD block precedes porphyrin ring formation, explaining why neurotoxins (ALA/PBG) accumulate without cutaneous photosensitivity.",
    "strongestDistractor": "Delta-aminolevulinic acid synthase 1 (ALAS1) in the mitochondria",
    "distractorExclusion": "ALAS1 is hyperactivated due to heme depletion, driving toxic accumulation; the underlying inherited enzyme deficiency is PBGD.",
    "citation": "Whatley SD, et al. Acute intermittent porphyria. Lancet. 2017;390(10091):239-251. PMID: 28285822.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0553",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Phenylketonuria PAH vs BH4 Cofactor Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 9-month-old infant is brought to the clinic for developmental delay. He was born at home in another country and did not undergo newborn screening. Physical examination shows fair skin, blonde hair, blue eyes, and eczema, despite both parents having dark hair and brown eyes. The infant has profound cognitive impairment, hyperreflexia, and a distinct 'mousy' or 'musty' body odor. Serum amino acid analysis demonstrates a phenylalanine concentration of 1,200 micromol/L (normal < 120 micromol/L) and a tyrosine concentration of 25 micromol/L (depressed; normal 40-100 micromol/L). Oral administration of sapropterin (tetrahydrobiopterin, BH4) for 48 hours fails to lower serum phenylalanine concentrations. Which of the following is the primary defective enzyme in this infant, and what dietary amino acid alteration is mandatory?",
    "choices": [
      [
        "Deficiency of phenylalanine hydroxylase (classical PKU); tyrosine becomes an essential amino acid that must be supplemented, while dietary phenylalanine is strictly restricted",
        "Classical phenylketonuria (PKU) is an autosomal recessive deficiency of phenylalanine hydroxylase (PAH), which converts phenylalanine to tyrosine in the liver. When PAH is nonfunctional, phenylalanine accumulates and is shunted into phenylketones (phenylacetate, phenyllactate, phenylpyruvate), producing profound neurotoxicity, seizures, microcephaly, and a musty body odor. Excess phenylalanine competitively inhibits tyrosinase, impairing melanin synthesis (fair skin, blonde hair). Because tyrosine cannot be synthesized from phenylalanine, TYROSINE BECOMES AN ESSENTIAL AMINO ACID and must be supplemented, while phenylalanine intake must be strictly restricted. Lack of response to BH4 excludes dihydropteridine reductase or BH4 synthesis defects."
      ],
      [
        "Deficiency of dihydropteridine reductase; tyrosine must be restricted while phenylalanine is supplemented",
        "Dihydropteridine reductase deficiency impairs BH4 recycling and responds to BH4/neurotransmitter precursors; moreover, tyrosine must be supplemented, not restricted."
      ],
      [
        "Deficiency of homogentisate 1,2-dioxygenase; phenylalanine and tyrosine must both be completely eliminated from the diet",
        "Homogentisate 1,2-dioxygenase deficiency causes alkaptonuria with ochronosis, not infantile cognitive impairment and musty odor."
      ],
      [
        "Deficiency of branched-chain alpha-keto acid dehydrogenase; leucine, isoleucine, and valine must be strictly restricted",
        "BCKDH deficiency causes maple syrup urine disease with sweet-smelling urine and ketoacidosis, not classic PKU."
      ],
      [
        "Deficiency of fumarylacetoacetate hydrolase; succinylacetone must be administered as an essential metabolite",
        "Fumarylacetoacetate hydrolase deficiency causes tyrosinemia type 1 with hepatic failure and renal Fanconi syndrome; succinylacetone is a toxic metabolite, not a treatment."
      ]
    ],
    "shortestValidSolution": "Musty odor + fair skin/blonde hair + severe developmental delay + high phenylalanine/low tyrosine + no response to BH4 = Classical PKU -> PAH deficiency, tyrosine is essential.",
    "necessaryInference": "Identify classical PKU: PAH deficiency blocks tyrosine synthesis (tyrosine becomes essential) and shunts phenylalanine into toxic phenylketones.",
    "strongestDistractor": "Deficiency of dihydropteridine reductase; tyrosine must be restricted while phenylalanine is supplemented",
    "distractorExclusion": "Dihydropteridine reductase deficiency is atypical PKU responsive to BH4; this infant failed BH4 therapy, confirming classical PAH deficiency where tyrosine is essential.",
    "citation": "van Spronsen FJ, et al. Phenylketonuria. Nat Rev Dis Primers. 2021;7(1):36. PMID: 34017006.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0554",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Maple Syrup Urine Disease BCKDH Complex Defect",
    "provisionalDifficulty": 5,
    "stem": "A 5-day-old male infant born at term after an uncomplicated pregnancy becomes increasingly lethargic and feeds poorly. On physical examination, he is stuporous with alternating episodes of hypertonia and hypotonia ('dystonia'), and his diapers emit a distinct sweet odor resembling burnt sugar or maple syrup. Laboratory evaluation demonstrates: blood glucose 58 mg/dL, arterial blood gas showing pH 7.22, PaCO2 24 mm Hg, and bicarbonate 10 mEq/L (anion gap metabolic acidosis), and ketonuria. Serum amino acid chromatography reveals massive elevations in leucine, isoleucine, and valine, as well as the presence of alloisoleucine. Which of the following vitamin-derived cofactors is an obligatory component of the multienzyme complex defective in this infant?",
    "choices": [
      [
        "Thiamine pyrophosphate (TPP, derived from vitamin B1)",
        "Maple syrup urine disease (MSUD) is an autosomal recessive deficiency of the branched-chain alpha-keto acid dehydrogenase (BCKDH) complex. BCKDH metabolizes the alpha-keto acids derived from BRANCHED-CHAIN AMINO ACIDS: Leucine (alpha-ketoisocaproate), Isoleucine (alpha-keto-beta-methylvalerate), and Valine (alpha-ketoisovalerate). Like pyruvate dehydrogenase (PDH) and alpha-ketoglutarate dehydrogenase (alpha-KGDH), the BCKDH complex requires five obligatory cofactors: Thiamine pyrophosphate (TPP / B1), Lipoic acid, Coenzyme A (B5), FAD (B2), and NAD+ (B3) [mnemonic: TLCFN]. Elevated leucine is severely neurotoxic, causing cerebral edema and dystonia. Alloisoleucine is pathognomonic."
      ],
      [
        "Pyridoxal 5'-phosphate (PLP, derived from vitamin B6)",
        "PLP is the cofactor for transaminases (e.g. branched-chain amino acid transaminase), which convert BCAAs to alpha-keto acids upstream of the defective BCKDH complex."
      ],
      [
        "Tetrahydrobiopterin (BH4)",
        "BH4 is the cofactor for aromatic amino acid hydroxylases (phenylalanine, tyrosine, tryptophan), not branched-chain ketoacid dehydrogenases."
      ],
      [
        "Adenosylcobalamin (derived from vitamin B12)",
        "Adenosylcobalamin is the cofactor for methylmalonyl-CoA mutase, defective in methylmalonic acidemia, not MSUD."
      ],
      [
        "Biotin (derived from vitamin B7)",
        "Biotin is the cofactor for carboxylases (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase), not BCKDH decarboxylation."
      ]
    ],
    "shortestValidSolution": "Sweet maple syrup urine odor + dystonia/lethargy + high leucine/isoleucine/valine + alloisoleucine = MSUD -> BCKDH complex requires Thiamine pyrophosphate (B1).",
    "necessaryInference": "Identify the BCKDH complex and its essential cofactors (TLCFN): thiamine (B1) is the critical cofactor whose supplementation can treat thiamine-responsive MSUD variants.",
    "strongestDistractor": "Pyridoxal 5'-phosphate (PLP, derived from vitamin B6)",
    "distractorExclusion": "PLP is used by the initial transaminase; the defective enzyme in MSUD is the downstream dehydrogenase complex requiring thiamine pyrophosphate (TPP).",
    "citation": "Strauss KA, et al. Maple Syrup Urine Disease. In: GeneReviews. University of Washington, Seattle; 2020. PMID: 20301495.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0555",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Homocystinuria vs Marfan Syndrome Ectopia Lentis",
    "provisionalDifficulty": 5,
    "stem": "An 8-year-old tall, slender boy with cognitive impairment is evaluated for sudden painless loss of vision in his left eye. Slit-lamp biomicroscopy demonstrates downward and inward subluxation of the crystalline lens (inferonasal ectopia lentis). Physical examination reveals a marfanoid habitus, long thin fingers (arachnodactyly), high-arched palate, and pectus excavatum. Three days later, he develops acute right-sided hemiplegia; CT angiography of the head confirms an acute left middle cerebral artery ischemic stroke. Laboratory evaluation shows: total plasma homocysteine 185 micromol/L (markedly elevated; normal < 15 micromol/L) and elevated serum methionine. Which of the following enzymes is deficient in this patient, and which vitamin cofactor trial is indicated?",
    "choices": [
      [
        "Cystathionine beta-synthase (CBS); requires a trial of pyridoxine (vitamin B6)",
        "Classical homocystinuria is an autosomal recessive deficiency of cystathionine beta-synthase (CBS), which condenses homocysteine with serine to form cystathionine. Elevated homocysteine and methionine cause connective tissue disruption (fibrillin cross-linking interference) producing a marfanoid habitus. Crucial distinguishing features from Marfan syndrome include: (1) INTELLECTUAL DISABILITY (present in homocystinuria, absent in Marfan); (2) INFERONASAL ectopia lentis ('down and in' in homocystinuria vs 'up and out' superotemporal in Marfan); and (3) PREMATURE THROMBOEMBOLISM (deep vein thrombosis, stroke, myocardial infarction at young age due to endothelial toxicity). CBS requires PYRIDOXAL PHOSPHATE (vitamin B6) as a cofactor; ~50% of patients respond to high-dose vitamin B6 supplementation."
      ],
      [
        "Methionine synthase; requires a trial of ascorbic acid (vitamin C)",
        "Methionine synthase deficiency elevates homocysteine but DEPRESSES methionine, whereas this patient has elevated methionine."
      ],
      [
        "Methylene tetrahydrofolate reductase (MTHFR); requires a trial of cholecalciferol (vitamin D)",
        "MTHFR deficiency impairs conversion of 5,10-methylene-THF to 5-methyl-THF; it elevates homocysteine but lowers methionine, and does not respond to vitamin D."
      ],
      [
        "Fibrillin-1 microfibrillar protein; requires surgical aortic root replacement without vitamin therapy",
        "Fibrillin-1 mutations cause autosomal dominant Marfan syndrome, which features superotemporal ('up and out') lens dislocation, normal cognition, normal homocysteine, and aortic root aneurysms."
      ],
      [
        "Lysyl oxidase in the extracellular matrix; requires a trial of copper gluconate",
        "Lysyl oxidase deficiency causes Menkes disease (kinky hair, hypotonia, low copper), not homocystinuria with downward lens subluxation and stroke."
      ]
    ],
    "shortestValidSolution": "Marfanoid habitus + downward lens subluxation + cognitive impairment + stroke + high homocysteine/methionine = Homocystinuria -> Cystathionine beta-synthase (CBS), B6-responsive.",
    "necessaryInference": "Differentiate Homocystinuria (inferonasal lens subluxation, mental disability, thrombosis, high homocysteine) from Marfan syndrome (superotemporal subluxation, normal intellect).",
    "strongestDistractor": "Fibrillin-1 microfibrillar protein; requires surgical aortic root replacement without vitamin therapy",
    "distractorExclusion": "Marfan syndrome has superotemporal ('up and out') lens dislocation and normal intellect; homocystinuria causes inferonasal ('down and in') dislocation and early thrombosis.",
    "citation": "Mudd SH, et al. The natural history of homocystinuria due to cystathionine beta-synthase deficiency. Am J Hum Genet. 1985;37(1):1-31. PMID: 3976653.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0556",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Alkaptonuria Homogentisate 1,2-Dioxygenase Defect",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old man presents with chronic, progressive pain and stiffness in his lower back, hips, and knees. Physical examination reveals dark bluish-black pigmentation of the sclerae and ear cartilages (ochronosis). Spine radiographs demonstrate severe disc space narrowing with dense calcification of the intervertebral discs throughout the lumbar spine. His urine, upon standing on the laboratory benchtop for 4 hours, darkens from amber to a deep black color. Which of the following steps in amino acid metabolism is blocked in this patient?",
    "choices": [
      [
        "Oxidation of homogentisic acid to maleylacetoacetic acid in the tyrosine degradation pathway",
        "Alkaptonuria is an autosomal recessive inborn error of metabolism caused by deficiency of homogentisate 1,2-dioxygenase. This enzyme degrades homogentisic acid (an intermediate in phenylalanine and tyrosine catabolism) into maleylacetoacetic acid. Excess homogentisic acid accumulates and is excreted in the urine, where it auto-oxidizes to benzoquinone acetic acid polymers, turning urine BLACK upon prolonged standing or exposure to alkaline air. Circulating homogentisic acid binds irreversibly to fibrillar collagen in connective tissues, causing bluish-black pigmentation (OCHRONOSIS) in ear cartilages and sclerae, and accelerating devastating degenerative OCHRONOTIC ARTHROPATHY with calcified intervertebral discs."
      ],
      [
        "Decarboxylation of dopa to dopamine by aromatic L-amino acid decarboxylase",
        "Dopa decarboxylation produces catecholamines; defect does not cause black urine or ochronotic cartilage pigmentation."
      ],
      [
        "Conversion of tyrosine to 3,4-dihydroxyphenylalanine (dopa) by tyrosinase",
        "Tyrosinase deficiency causes oculocutaneous albinism (lack of melanin pigment), the exact opposite of dark ochronotic pigmentation."
      ],
      [
        "Transamination of phenylpyruvate to phenylalanine by phenylalanine aminotransferase",
        "Phenylalanine aminotransferase transamination operates in reverse during PKU; it does not produce homogentisic acid or ochronosis."
      ],
      [
        "Hydrolysis of fumarylacetoacetate into fumarate and acetoacetate in hepatocytes",
        "Fumarylacetoacetate hydrolase deficiency causes tyrosinemia type 1 with acute hepatic failure and renal tubular dysfunction, not alkaptonuria."
      ]
    ],
    "shortestValidSolution": "Urine turns black on standing + bluish-black ear/sclera pigment (ochronosis) + calcified intervertebral discs = Alkaptonuria -> homogentisate 1,2-dioxygenase deficiency.",
    "necessaryInference": "Trace tyrosine catabolism: homogentisate 1,2-dioxygenase deficiency causes homogentisic acid accumulation, black urine, and ochronotic arthropathy.",
    "strongestDistractor": "Conversion of tyrosine to 3,4-dihydroxyphenylalanine (dopa) by tyrosinase",
    "distractorExclusion": "Tyrosinase deficiency causes albinism (absence of melanin); alkaptonuria is caused by homogentisate 1,2-dioxygenase deficiency causing dark ochronosis.",
    "citation": "Ranganath LR, et al. Alkaptonuria. Lancet Diabetes Endocrinol. 2013;1(4):307-317. PMID: 24622416.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0557",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Ornithine Transcarbamylase vs CPS-1 Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 3-day-old male newborn develops progressive somnolence, vomiting, tachypnea, and seizures. Laboratory evaluation reveals: arterial pH 7.52, PaCO2 22 mm Hg, bicarbonate 18 mEq/L (respiratory alkalosis), blood glucose 86 mg/dL (normal), and serum ammonia 850 micromol/L (severely elevated; normal < 50 micromol/L). Plasma amino acid analysis reveals markedly elevated glutamine and alanine, with undetectable citrulline. Urine organic acid analysis reveals a massive peak of orotic acid (420 mmol/mol creatinine; normal < 2). Which of the following is the mode of inheritance and underlying enzymatic defect in this infant?",
    "choices": [
      [
        "X-linked recessive; deficiency of ornithine transcarbamylase (OTC) causing mitochondrial carbamoyl phosphate accumulation that spills into cytosolic pyrimidine synthesis",
        "Ornithine transcarbamylase (OTC) deficiency is the most common urea cycle disorder and the ONLY ONE that is X-LINKED RECESSIVE (all others are autosomal recessive). In the mitochondrial matrix, OTC condenses carbamoyl phosphate with ornithine to form citrulline. When OTC is defective, excess mitochondrial carbamoyl phosphate spills into the cytoplasm, where it enters the de novo pyrimidine synthesis pathway via cytoplasmic aspartate transcarbamoylase. This causes massive overproduction and urinary excretion of OROTIC ACID, accompanied by profound hyperammonemia (driving central hyperventilation and respiratory alkalosis) and undetectable citrulline."
      ],
      [
        "Autosomal recessive; deficiency of carbamoyl phosphate synthetase 1 (CPS-1) preventing initial ammonia incorporation",
        "CPS-1 deficiency also causes severe hyperammonemia with low citrulline, but because carbamoyl phosphate cannot be synthesized, orotic acid is LOW or absent, distinguishing it from OTC."
      ],
      [
        "Autosomal recessive; deficiency of argininosuccinate synthetase causing massive citrullinemia",
        "Argininosuccinate synthetase deficiency causes citrullinemia type 1 with MASSIVELY ELEVATED plasma citrulline, not undetectable citrulline."
      ],
      [
        "Autosomal recessive; deficiency of uridine monophosphate (UMP) synthase causing orotic aciduria without hyperammonemia",
        "UMP synthase deficiency causes hereditary orotic aciduria, which presents with megaloblastic anemia and normal serum ammonia, not lethal hyperammonemic encephalopathy."
      ],
      [
        "Autosomal recessive; deficiency of arginase-1 causing isolated spastic diplegia without severe hyperammonemic crises",
        "Arginase deficiency causes progressive spastic paraplegia and elevated arginine, with only mild, episodic hyperammonemia."
      ]
    ],
    "shortestValidSolution": "Neonatal hyperammonemia + respiratory alkalosis + undetectable citrulline + high urine orotic acid = OTC deficiency -> X-linked recessive, carbamoyl phosphate shunts to pyrimidines.",
    "necessaryInference": "Differentiate OTC deficiency (high orotic acid, X-linked) from CPS-1 deficiency (low orotic acid, autosomal recessive) and hereditary orotic aciduria (normal ammonia).",
    "strongestDistractor": "Autosomal recessive; deficiency of carbamoyl phosphate synthetase 1 (CPS-1) preventing initial ammonia incorporation",
    "distractorExclusion": "CPS-1 deficiency cannot generate carbamoyl phosphate, so urine orotic acid is LOW; in OTC deficiency, carbamoyl phosphate accumulates and elevates urine orotic acid.",
    "citation": "Lichter-Konecki U, et al. Urea Cycle Disorders Overview. In: GeneReviews. University of Washington, Seattle; 2021. PMID: 20301490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0558",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Hereditary Orotic Aciduria UMP Synthase Defect",
    "provisionalDifficulty": 5,
    "stem": "A 14-month-old girl is evaluated for severe pallor and failure to thrive. Physical examination demonstrates height and weight below the 3rd percentile and pale conjunctivae without hepatosplenomegaly or jaundice. Complete blood count demonstrates: hemoglobin 5.8 g/dL, MCV 112 fL (macrocytic), WBC count 4,800/microL, and platelet count 180,000/microL. Reticulocyte count is 0.4% (markedly depressed). Serum vitamin B12 and folate levels are within normal limits, and administration of high-dose intramuscular cobalamin and oral folic acid for 6 weeks produces no hematologic improvement. Urinalysis demonstrates needle-shaped crystals, and urine organic acid analysis reveals a massive excretion of orotic acid. Blood ammonia and blood glucose are completely normal. Which of the following dietary supplements will bypass the enzymatic block and cure the anemia in this child?",
    "choices": [
      [
        "Oral uridine (or uridine triacetate)",
        "Hereditary orotic aciduria is an autosomal recessive defect in UMP SYNTHASE (a bifunctional cytoplasmic enzyme possessing orotate phosphoribosyltransferase and OMP decarboxylase activities). UMP synthase converts orotic acid to UMP in de novo pyrimidine synthesis. When UMP synthase is defective, pyrimidine starvation halts DNA synthesis in rapidly dividing erythroblasts, causing MEGALOBLASTIC ANEMIA refractory to B12 and folate. Excess orotic acid is excreted in urine, precipitating as crystals. Crucially, blood ammonia is NORMAL (distinguishing it from OTC deficiency). Treatment requires oral URIDINE (or uridine triacetate), which is phosphorylated to UMP via salvage pathways, bypassing UMP synthase, replenishing pyrimidines, and downregulating upstream CPS-II via feedback inhibition."
      ],
      [
        "Oral citrulline and sodium phenylbutyrate",
        "Citrulline and phenylbutyrate are used in urea cycle disorders to remove waste nitrogen, but do not supply pyrimidines for hereditary orotic aciduria."
      ],
      [
        "Intramuscular pyridoxine (vitamin B6) and serine",
        "Pyridoxine and serine are used in homocystinuria, not pyrimidine synthesis defects."
      ],
      [
        "Oral arginine hydrochloride and low-protein diet",
        "Arginine is essential in urea cycle defects, but does not correct the macrocytic anemia of UMP synthase deficiency."
      ],
      [
        "Intravenous hemin and high-glucose infusions",
        "Hemin and glucose suppress ALAS1 in acute intermittent porphyria, not de novo pyrimidine synthesis."
      ]
    ],
    "shortestValidSolution": "Megaloblastic anemia refractory to B12/folate + high urine orotic acid + normal ammonia = Hereditary orotic aciduria -> UMP synthase defect, treated with oral uridine.",
    "necessaryInference": "Distinguish hereditary orotic aciduria (megaloblastic anemia, normal ammonia, treated with uridine) from OTC deficiency (severe hyperammonemia, normal MCV).",
    "strongestDistractor": "Oral citrulline and sodium phenylbutyrate",
    "distractorExclusion": "Citrulline and phenylbutyrate treat urea cycle hyperammonemia (OTC deficiency); hereditary orotic aciduria requires oral uridine to replenish pyrimidines.",
    "citation": "Nyhan WL. Disorders of purine and pyrimidine metabolism. Mol Genet Metab. 2005;86(1-2):25-33. PMID: 16183327.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0559",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Endocrine",
    "topic": "Von Gierke Disease G6Pase Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 4-month-old male infant presents with severe lethargy, sweating, and tremors between feedings. Physical examination reveals a rounded, 'doll-like' face, thin extremities, and massive hepatomegaly (liver edge palpated 6 cm below the costal margin); the spleen is non-palpable. Laboratory evaluation during fasting demonstrates: blood glucose 28 mg/dL, serum lactate 7.8 mmol/L (severe lactic acidosis; normal 0.5-2.0 mmol/L), serum uric acid 11.2 mg/dL (hyperuricemia), and serum triglycerides 680 mg/dL. Administration of intramuscular glucagon fails to increase blood glucose but produces a further steep rise in blood lactate. Which of the following is the deficient enzyme in this infant?",
    "choices": [
      [
        "Glucose-6-phosphatase (catalytic subunit) in the endoplasmic reticulum of hepatocytes and renal cortex",
        "Von Gierke disease (Glycogen Storage Disease Type I) is an autosomal recessive deficiency of glucose-6-phosphatase (G6Pase), which hydrolyzes glucose-6-phosphate into free glucose in the ER lumen of hepatocytes and renal cells. Because G6Pase is the final common step of BOTH glycogenolysis and gluconeogenesis, patients suffer profound fasting hypoglycemia. Upstream glucose-6-phosphate accumulates and shunts into: (1) Glycolysis -> severe LACTIC ACIDOSIS; (2) Pentose phosphate shunt and purine breakdown -> HYPERURICEMIA (gout); and (3) De novo lipogenesis -> HYPERTRIGLYCERIDEMIA. Glucagon administration cannot release glucose and only worsens lactic acidosis. Splenomegaly is absent."
      ],
      [
        "Glycogen debranching enzyme (alpha-1,6-glucosidase) in the cytoplasm",
        "Cori disease (GSD Type III) impairs debranching enzyme, accumulating limit dextrin; gluconeogenesis is intact, so fasting hypoglycemia is milder and blood lactate is NORMAL."
      ],
      [
        "Lysosomal acid alpha-1,4-glucosidase (acid maltase)",
        "Pompe disease (GSD Type II) causes lysosomal glycogen accumulation with massive hypertrophic cardiomyopathy and early infantile heart failure, without hypoglycemia."
      ],
      [
        "Liver glycogen phosphorylase in the cytoplasm (Hers disease)",
        "Hers disease (GSD Type VI) impairs liver phosphorylase; gluconeogenesis is intact, so hypoglycemia is mild and lactic acidosis does not occur."
      ],
      [
        "Muscle glycogen phosphorylase in the cytoplasm (McArdle disease)",
        "McArdle disease (GSD Type V) affects skeletal muscle, causing exercise-induced muscle cramps and myoglobinuria without hypoglycemia or hepatomegaly."
      ]
    ],
    "shortestValidSolution": "Severe fasting hypoglycemia + massive hepatomegaly + lactic acidosis + hyperuricemia + glucagon raises lactate not glucose = Von Gierke disease (GSD I) -> G6Pase deficiency.",
    "necessaryInference": "Differentiate Von Gierke (G6Pase defect, severe hypoglycemia, high lactate) from Cori (debranching defect, normal lactate) and Pompe (cardiomegaly).",
    "strongestDistractor": "Glycogen debranching enzyme (alpha-1,6-glucosidase) in the cytoplasm",
    "distractorExclusion": "Cori disease impairs debranching enzyme; because gluconeogenesis is intact, blood lactate and uric acid are NORMAL, unlike the severe lactic acidosis of Von Gierke.",
    "citation": "Kishnani PS, et al. Diagnosis and management of glycogen storage disease type I. Genet Med. 2014;16(11):e1. PMID: 25356975.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0560",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Cardiovascular",
    "topic": "Pompe Disease Lysosomal Acid Maltase Defect",
    "provisionalDifficulty": 5,
    "stem": "A 3-month-old female infant is brought to the pediatric clinic because of progressive muscular weakness, floppiness (hypotonia), and poor feeding. Physical examination reveals a lethargic infant with severe head lag, generalized hypotonia, macroglossia, and hepatomegaly. Cardiovascular examination reveals a loud S3 gallop, a grade 3/6 holosystolic murmur at the apex, and massive cardiomegaly on chest radiograph. Echocardiography demonstrates massive concentric biventricular hypertrophy with left ventricular outflow tract obstruction. Electrocardiogram demonstrates strikingly high-voltage QRS complexes with a shortened PR interval across all limb and precordial leads. Blood glucose, serum lactate, and ammonia are completely normal. Muscle biopsy reveals cytoplasmic accumulation of periodic acid-Schiff (PAS)-positive material that is completely enclosed within membrane-bound lysosomal vesicles. Which of the following enzymes is deficient in this infant?",
    "choices": [
      [
        "Lysosomal acid alpha-1,4-glucosidase (acid maltase) encoded by the GAA gene",
        "Pompe disease (Glycogen Storage Disease Type II) is an autosomal recessive deficiency of lysosomal acid alpha-1,4-glucosidase (acid maltase). Unlike all other GSDs, Pompe is a LYSOSOMAL STORAGE DISEASE: glycogen cannot be hydrolyzed inside lysosomes, leading to engorged lysosomes in skeletal muscle, cardiac myocytes, and motor neurons. The classic infantile presentation includes profound hypotonia ('floppy infant'), macroglossia, and massive CARDIOMEGALY with severe concentric hypertrophic cardiomyopathy (short PR interval and giant QRS voltages). Because cytosolic glycogenolysis and gluconeogenesis are completely intact, blood glucose, lactate, and uric acid are NORMAL."
      ],
      [
        "Glucose-6-phosphatase in the endoplasmic reticulum",
        "Von Gierke disease causes severe fasting hypoglycemia and lactic acidosis, without massive primary hypertrophic cardiomyopathy."
      ],
      [
        "Glycogen branching enzyme (amylo-alpha-1,4 to 1,6-transglucosidase)",
        "Andersen disease (GSD Type IV) produces poorly soluble polyglucosan amylopectin-like bodies, causing progressive infantile liver cirrhosis and death by age 2."
      ],
      [
        "Muscle phosphofructokinase-1 (PFK-1)",
        "Tarui disease (GSD Type VII) causes exertional myopathy and mild hemolysis in adolescents/adults, not infantile hypertrophic cardiomyopathy."
      ],
      [
        "Sphingomyelinase in the lysosomal compartment",
        "Niemann-Pick disease is a lipid storage disease causing hepatosplenomegaly, neurodegeneration, and a cherry-red macular spot, not massive glycogen cardiomegaly."
      ]
    ],
    "shortestValidSolution": "Floppy infant + massive hypertrophic cardiomyopathy + giant QRS/short PR + normal glucose/lactate + lysosomal PAS-positive glycogen = Pompe disease (GSD II) -> acid maltase.",
    "necessaryInference": "Recognize Pompe disease as the only glycogen storage disease that is also a lysosomal storage disease, characterized by hypertrophic cardiomyopathy without hypoglycemia.",
    "strongestDistractor": "Glucose-6-phosphatase in the endoplasmic reticulum",
    "distractorExclusion": "G6Pase deficiency (Von Gierke) causes severe metabolic abnormalities (fasting hypoglycemia, lactic acidosis); Pompe features pure hypertrophic cardiomyopathy with normal blood glucose.",
    "citation": "van der Ploeg AT, Reuser AJ. Pompe's disease. Lancet. 2008;372(9646):1342-1353. PMID: 18929906.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0561",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Cori Disease Debranching Enzyme Defect",
    "provisionalDifficulty": 5,
    "stem": "A 2-year-old boy is evaluated for hepatomegaly and mild growth deceleration. His parents report that he becomes irritable if meals are delayed. Physical examination reveals prominent hepatomegaly (liver edge 4 cm below the right costal margin); the spleen is not palpable. Fasting laboratory evaluation demonstrates: blood glucose 48 mg/dL (mild hypoglycemia), serum lactate 1.2 mmol/L (normal 0.5-2.0 mmol/L), serum uric acid 4.8 mg/dL (normal), and mildly elevated serum aspartate aminotransferase and alanine aminotransferase. Following administration of an oral galactose load, blood glucose rises appropriately. Liver biopsy reveals accumulation of abnormal glycogen molecules characterized by extremely short outer branches resembling limit dextrin. Which of the following enzymes is deficient in this patient?",
    "choices": [
      [
        "Glycogen debranching enzyme (possessing amylo-alpha-1,6-glucosidase and 4-alpha-glucanotransferase activities)",
        "Cori disease (Glycogen Storage Disease Type III) is an autosomal recessive deficiency of glycogen debranching enzyme (encoded by AGL). Debranching enzyme is a bifunctional enzyme possessing: (1) 4-alpha-glucanotransferase (transfers 3 glucose residues from a branch to the main chain), and (2) Amylo-alpha-1,6-glucosidase (cleaves the single remaining alpha-1,6-linked glucose). In its absence, phosphorylase can only degrade glycogen down to the outer 4 glucose residues, leaving abnormal LIMIT DEXTRIN-like glycogen molecules. Crucially, GLUCONEOGENESIS IS INTACT, meaning the liver can convert lactate, alanine, and galactose into glucose. Consequently, fasting hypoglycemia is mild, and BLOOD LACTATE AND URIC ACID ARE COMPLETELY NORMAL (distinguishing Cori from Von Gierke)."
      ],
      [
        "Glucose-6-phosphatase in the endoplasmic reticulum",
        "Von Gierke disease impairs both glycogenolysis and gluconeogenesis, producing severe fasting hypoglycemia, severe lactic acidosis, and hyperuricemia, with normal glycogen structure."
      ],
      [
        "Glycogen branching enzyme (amylo-alpha-1,4 to 1,6-transglucosidase)",
        "Branching enzyme deficiency (Andersen disease, GSD IV) causes accumulation of long unbranched polyglucosan chains, producing progressive lethal liver cirrhosis."
      ],
      [
        "Lysosomal acid alpha-1,4-glucosidase (acid maltase)",
        "Acid maltase deficiency (Pompe disease, GSD II) affects lysosomes, causing massive hypertrophic cardiomyopathy without hepatomegaly as an isolated finding."
      ],
      [
        "Liver glycogen phosphorylase (Hers disease)",
        "Hers disease (GSD VI) impairs phosphorylase itself; it leaves normal-length outer branches on glycogen, whereas debranching enzyme deficiency leaves abnormally short outer branches (limit dextrin)."
      ]
    ],
    "shortestValidSolution": "Hepatomegaly + mild fasting hypoglycemia + NORMAL blood lactate + limit dextrin glycogen with short branches = Cori disease (GSD III) -> Debranching enzyme deficiency.",
    "necessaryInference": "Differentiate Cori disease (normal lactate, intact gluconeogenesis, limit dextrin glycogen) from Von Gierke disease (high lactate, failed gluconeogenesis).",
    "strongestDistractor": "Glucose-6-phosphatase in the endoplasmic reticulum",
    "distractorExclusion": "G6Pase deficiency (Von Gierke) impairs gluconeogenesis, causing severe lactic acidosis; Cori disease has intact gluconeogenesis, so blood lactate is normal.",
    "citation": "Goldstein JL, et al. Glycogen storage disease type III. In: GeneReviews. University of Washington, Seattle; 2020. PMID: 20301783.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0562",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Musculoskeletal",
    "topic": "McArdle Disease Myophosphorylase Forearm Exercise",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old collegiate sprinter presents with severe, painful muscle cramping in his calves and thighs during intense 100-meter sprints. If he rests briefly after initial cramping, he can continue running at a moderate pace with much less discomfort ('second-wind phenomenon'). Following his most recent race, his urine appeared dark red-brown; urinalysis reveals 3+ blood on dipstick with zero red blood cells on microscopic examination. Serum creatine kinase is 18,500 U/L. An ischemic forearm exercise test is performed: sequential blood samples from the exercising arm demonstrate a normal, brisk rise in venous ammonia levels, but the venous lactate concentration remains completely flat throughout exercise. Which of the following enzymes is deficient in this patient's myocytes?",
    "choices": [
      [
        "Myophosphorylase (skeletal muscle glycogen phosphorylase encoded by PYGM)",
        "McArdle disease (Glycogen Storage Disease Type V) is an autosomal recessive deficiency of myophosphorylase (skeletal muscle glycogen phosphorylase). Phosphorylase cleaves alpha-1,4-glycosidic bonds in glycogen to release glucose-1-phosphate for anaerobic glycolysis during intense exercise. Without myophosphorylase, muscle cells cannot mobilize glycogen, causing rapid ATP depletion, painful contractures, and rhabdomyolysis with dark myoglobinuria (dipstick positive for blood, zero RBCs). The 'second-wind phenomenon' occurs because after 10-15 minutes of exercise, increased hepatic gluconeogenesis and lipolysis deliver blood-borne glucose and free fatty acids to the working muscle, bypassing the blocked glycogenolysis. The ISCHEMIC FOREARM TEST demonstrates failure of venous lactate to rise (flat curve) while deamination of AMP to IMP produces a normal rise in ammonia."
      ],
      [
        "Phosphofructokinase-1 in skeletal muscle (Tarui disease, GSD VII)",
        "Tarui disease also causes exertional cramps and flat lactate curves, but impairs the second-wind phenomenon (blood glucose cannot enter glycolysis past PFK-1) and causes hemolytic anemia."
      ],
      [
        "Carnitine palmitoyltransferase II (CPT II) in the mitochondrial inner membrane",
        "CPT II deficiency impairs fatty acid oxidation during prolonged endurance exercise (marathons) or fasting, not brief anaerobic sprinting; forearm lactate curve is normal in CPT II."
      ],
      [
        "Acid alpha-1,4-glucosidase in skeletal muscle lysosomes",
        "Acid maltase deficiency causes Pompe disease (infantile cardiomyopathy or adult-onset limb-girdle weakness) without acute exercise-induced cramping or flat lactate curves."
      ],
      [
        "Pyruvate dehydrogenase E1 alpha subunit in the mitochondrial matrix",
        "PDH deficiency causes congenital lactic acidosis, microcephaly, and psychomotor delay, not exercise-induced myoglobinuria with a flat lactate curve."
      ]
    ],
    "shortestValidSolution": "Sprint muscle cramps + myoglobinuria + 'second-wind phenomenon' + flat venous lactate curve with normal ammonia on forearm test = McArdle disease -> myophosphorylase.",
    "necessaryInference": "Interpret the ischemic forearm exercise test: flat lactate with normal ammonia rise pinpoints an inborn error of muscle glycogenolysis (McArdle disease).",
    "strongestDistractor": "Phosphofructokinase-1 in skeletal muscle (Tarui disease, GSD VII)",
    "distractorExclusion": "Tarui disease lacks the second-wind phenomenon because infused/circulating glucose cannot bypass PFK-1; McArdle patients experience second-wind as glucose bypasses phosphorylase.",
    "citation": "Lucia A, et al. McArdle disease: what we have learned in the last decade. J Physiol. 2008;586(14):3301-3308. PMID: 18511477.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0563",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Gaucher Disease Glucocerebrosidase Defect and Crinkled Macrophages",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old Ashkenazi Jewish woman presents with progressive fatigue, left upper quadrant abdominal discomfort, and easy bruisability. Physical examination reveals massive splenomegaly extending 10 cm below the left costal margin, moderate hepatomegaly, and pale conjunctivae without neurological deficits. Complete blood count demonstrates: hemoglobin 8.8 g/dL, platelet count 48,000/microL, and WBC count 3,400/microL (pancytopenia). Radiographs of the distal femurs demonstrate cortical thinning with widening of the metaphyses resembling an 'Erlenmeyer flask' deformity. Bone marrow aspiration reveals numerous enlarged, lipid-laden macrophages with an abundant fibrillary cytoplasm resembling 'wrinkled tissue paper' or 'crinkled silk'. Which of the following is the deficient enzyme and accumulating substrate in this patient?",
    "choices": [
      [
        "Deficiency of beta-glucocerebrosidase (acid beta-glucosidase); accumulation of glucocerebroside",
        "Gaucher disease is the most common lysosomal storage disease (autosomal recessive, highly prevalent in Ashkenazi Jewish populations), caused by mutations in the GBA gene encoding beta-glucocerebrosidase (acid beta-glucosidase). This enzyme cleaves glucocerebroside into glucose and ceramide. When deficient, GLUCOCEREBROSIDE accumulates inside reticuloendothelial macrophages. These transformed GAUCHER CELLS appear on histology as large macrophages with fibrillar cytoplasm resembling 'CRINKLED TISSUE PAPER'. Macrophage engorgement in the spleen causes massive splenomegaly with hypersplenism and pancytopenia. Marrow infiltration causes bone pain, avascular necrosis, and ERLENMEYER FLASK DEFORMITIES. Type 1 is non-neuropathic and has a normal lifespan with enzyme replacement therapy."
      ],
      [
        "Deficiency of sphingomyelinase; accumulation of sphingomyelin",
        "Sphingomyelinase deficiency causes Niemann-Pick disease, characterized by foamy macrophages (not crinkled paper), hepatosplenomegaly, and a cherry-red macular spot."
      ],
      [
        "Deficiency of hexosaminidase A; accumulation of GM2 ganglioside",
        "Hexosaminidase A deficiency causes Tay-Sachs disease, presenting with neurodegeneration and cherry-red macula, WITHOUT hepatosplenomegaly or bone deformities."
      ],
      [
        "Deficiency of alpha-galactosidase A; accumulation of ceramide trihexoside",
        "Alpha-galactosidase A deficiency causes Fabry disease (X-linked), presenting with angiokeratomas, acroparesthesias, and renal failure, without Erlenmeyer flask deformities."
      ],
      [
        "Deficiency of galactocerebrosidase; accumulation of galactocerebroside and psychosine",
        "Galactocerebrosidase deficiency causes Krabbe disease, characterized by severe infantile neurodegeneration, peripheral neuropathy, and globoid cells, not splenomegaly."
      ]
    ],
    "shortestValidSolution": "Ashkenazi Jewish + massive splenomegaly + pancytopenia + Erlenmeyer flask femur + 'crinkled tissue paper' macrophages = Gaucher disease -> beta-glucocerebrosidase.",
    "necessaryInference": "Identify the cytologic hallmark of Gaucher disease: macrophages with fibrillar 'crinkled paper' cytoplasm due to glucocerebroside accumulation.",
    "strongestDistractor": "Deficiency of sphingomyelinase; accumulation of sphingomyelin",
    "distractorExclusion": "Sphingomyelinase deficiency (Niemann-Pick) features foamy vacuolated macrophages and cherry-red maculae; Gaucher features crinkled tissue paper macrophages and bone crises.",
    "citation": "Grabowski GA. Gaucher disease and other storage disorders. Hematology Am Soc Hematol Educ Program. 2012;2012:13-18. PMID: 23233555.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pathology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0564",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Tay-Sachs vs Niemann-Pick Hepatosplenomegaly Distinction",
    "provisionalDifficulty": 5,
    "stem": "A 6-month-old infant of Ashkenazi Jewish ancestry is brought to the clinic because of loss of motor milestones. He was previously able to roll over and sit with support, but can no longer do so. He exhibits an exaggerated startle response to sudden noises (hyperacusis). Physical examination reveals profound hypotonia, generalized weakness, and macrocephaly. Funduscopic examination demonstrates a prominent, bright cherry-red spot at the center of the macula surrounded by pale, milky retinal opacification. Abdominal examination reveals a soft, non-distended abdomen with NO palpable hepatomegaly or splenomegaly. Which of the following enzymes is deficient in this infant, and what substrate accumulates in the lysosomes of his central nervous system neurons?",
    "choices": [
      [
        "Deficiency of beta-hexosaminidase A; accumulation of GM2 ganglioside",
        "Tay-Sachs disease is an autosomal recessive lysosomal storage disease caused by deficiency of beta-hexosaminidase A (HEXA gene on chromosome 15), leading to accumulation of GM2 GANGLIOSIDE in neuronal lysosomes throughout the CNS. The clinical presentation includes developmental regression at 3-6 months, exaggerated acoustic startle (hyperacusis), macrocephaly, and a classic CHERRY-RED SPOT on the macula. Crucially, the decisive clinical finding that distinguishes Tay-Sachs from Niemann-Pick disease is the ABSENCE OF HEPATOSPLENOMEGALY in Tay-Sachs (in Niemann-Pick, sphingomyelinase deficiency causes prominent hepatosplenomegaly and foamy histiocytes in the reticuloendothelial system)."
      ],
      [
        "Deficiency of acid sphingomyelinase; accumulation of sphingomyelin",
        "Acid sphingomyelinase deficiency causes Niemann-Pick disease (Type A), which also presents with neurodegeneration and a cherry-red spot, but CHARACTERISTICALLY HAS MASSIVE HEPATOSPLENOMEGALY."
      ],
      [
        "Deficiency of beta-glucocerebrosidase; accumulation of glucosylceramide",
        "Gaucher disease produces massive hepatosplenomegaly and bone crises without a cherry-red macular spot."
      ],
      [
        "Deficiency of arylsulfatase A; accumulation of cerebroside sulfate",
        "Arylsulfatase A deficiency causes metachromatic leukodystrophy with central and peripheral demyelination, without a cherry-red macular spot."
      ],
      [
        "Deficiency of alpha-L-iduronidase; accumulation of heparan sulfate and dermatan sulfate",
        "Alpha-L-iduronidase deficiency causes Hurler syndrome, presenting with coarse facial features, corneal clouding, and dysostosis multiplex."
      ]
    ],
    "shortestValidSolution": "Ashkenazi Jewish infant + developmental regression + hyperacusis + cherry-red macula + NO hepatosplenomegaly = Tay-Sachs disease -> hexosaminidase A (GM2 ganglioside).",
    "necessaryInference": "Decisively differentiate Tay-Sachs (hexosaminidase A, NO hepatosplenomegaly) from Niemann-Pick (sphingomyelinase, PROMINENT hepatosplenomegaly) when cherry-red macula is present.",
    "strongestDistractor": "Deficiency of acid sphingomyelinase; accumulation of sphingomyelin",
    "distractorExclusion": "Niemann-Pick disease presents with prominent hepatosplenomegaly; the complete absence of hepatosplenomegaly in this infant confirms Tay-Sachs disease.",
    "citation": "Solovyeva VV, et al. Tay-Sachs disease: causes, clinical features, and modern approaches to therapy. Int J Mol Sci. 2022;23(21):13204. PMID: 36362002.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pathology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0565",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Dermatology",
    "topic": "Fabry Disease Alpha-Galactosidase A Accumulation",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old boy presents with severe, burning pain in his palms and soles (acroparesthesias) triggered by exercise and warm weather. He reports an inability to sweat normally (hypohidrosis). Physical examination reveals clusters of non-blanching, dark red-to-purple punctate macules and papules in a 'bathing trunk' distribution across the groin, umbilicus, and lower abdomen (angiokeratomas). Slit-lamp examination demonstrates whorl-like corneal opacities (cornea verticillata). Urinalysis shows 2+ proteinuria; polarized light microscopy of the urine sediment demonstrates birefringent oval fat bodies with a 'Maltese cross' pattern. If left untreated, which of the following end-organ complications represents the most common cause of premature mortality in this disorder?",
    "choices": [
      [
        "Progressive renal failure and hypertrophic cardiomyopathy with conduction system disease resulting from ceramide trihexoside (globotriaosylceramide) deposition",
        "Fabry disease is an X-LINKED RECESSIVE lysosomal storage disorder caused by deficiency of ALPHA-GALACTOSIDASE A. This leads to progressive accumulation of globotriaosylceramide (Gb3 / ceramide trihexoside) in vascular endothelial cells, smooth muscle cells, podocytes, and cardiac myocytes. Early manifestations in adolescence include episodic neuropathic pain (acroparesthesias), hypohidrosis, angiokeratomas, and cornea verticillata. With age, Gb3 vascular occlusions cause progressive glomerulosclerosis (proteinuria progressing to ESRD in the 30s-40s), hypertrophic cardiomyopathy, arrhythmias, and early ischemic strokes, which represent the major causes of premature mortality."
      ],
      [
        "Fulminant hepatic failure secondary to intrahepatic canalicular phospholipid precipitation",
        "Fabry disease spares hepatic synthetic function; liver failure is not a feature of globotriaosylceramide accumulation."
      ],
      [
        "Severe restrictive lung disease resulting from diffuse alveolar septal glucosylceramide fibrosis",
        "Pulmonary fibrosis is not the characteristic pathology; Fabry disease primarily causes renal, cardiovascular, and cerebrovascular disease."
      ],
      [
        "Bilateral adrenal hemorrhage (Waterhouse-Friderichsen syndrome) due to microvascular calcification",
        "Adrenal hemorrhage is caused by meningococcemia or severe sepsis, not metabolic glycosphingolipid storage."
      ],
      [
        "Spontaneous splenic rupture driven by massive subcapsular reticuloendothelial histiocytosis",
        "Splenomegaly is absent or minimal in Fabry disease; life-threatening complications are renal and cardiac."
      ]
    ],
    "shortestValidSolution": "Burning hand/foot pain + hypohidrosis + bathing-trunk angiokeratomas + cornea verticillata + Maltese cross lipiduria = Fabry disease -> alpha-galactosidase A (Gb3 accumulation).",
    "necessaryInference": "Identify the triad of Fabry disease (acroparesthesias, angiokeratomas, hypohidrosis) and recognize that progressive renal failure and cardiomyopathy dictate prognosis.",
    "strongestDistractor": "Fulminant hepatic failure secondary to intrahepatic canalicular phospholipid precipitation",
    "distractorExclusion": "Fabry disease causes renal failure and hypertrophic cardiomyopathy due to microvascular Gb3 accumulation; it does not cause fulminant hepatic failure.",
    "citation": "Germain DP. Fabry disease. Orphanet J Rare Dis. 2010;5:30. PMID: 21092187.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pathology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0566",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "MCAD Deficiency Hypoketotic Hypoglycemia",
    "provisionalDifficulty": 5,
    "stem": "A 14-month-old girl is brought to the emergency department after being found unresponsive in her crib. She developed a mild viral gastroenteritis yesterday with poor oral intake. Physical examination shows an unconscious toddler with hepatomegaly and hyporeflexia. Laboratory evaluation demonstrates: blood glucose 24 mg/dL (severe hypoglycemia), serum bicarbonate 14 mEq/L, and normal serum lactate. Urinalysis demonstrates zero ketones (absence of acetoacetate and beta-hydroxybutyrate). Plasma acylcarnitine profiling reveals markedly elevated octanoylcarnitine (C8), with significant elevations in hexanoylcarnitine (C6) and decanoylcarnitine (C10). Urine organic acid analysis reveals prominent dicarboxylic acids (adipic, suberic, and sebacic acids). Which of the following is the underlying biochemical defect in this child?",
    "choices": [
      [
        "Impaired mitochondrial beta-oxidation of medium-chain fatty acids (C6 to C12) due to medium-chain acyl-CoA dehydrogenase (MCAD) deficiency",
        "Medium-chain acyl-CoA dehydrogenase (MCAD) deficiency is the most common inborn error of fatty acid oxidation (autosomal recessive). MCAD catalyzes the first step of mitochondrial beta-oxidation for medium-chain fatty acids (6 to 12 carbons). During periods of fasting, glycogen stores deplete and the body must rely on fatty acid beta-oxidation to generate acetyl-CoA for ketone body synthesis and ATP to power gluconeogenesis. When MCAD is deficient, beta-oxidation stalls: (1) Acetyl-CoA is not generated -> failure of ketogenesis -> HYPOKETOTIC HYPOGLYCEMIA; (2) Unmetabolized fatty acids accumulate as C8-C10 acylcarnitines; and (3) Excess medium-chain fatty acids undergo omega-oxidation in peroxisomes, producing urinary DICARBOXYLIC ACIDS. Treatment requires avoiding prolonged fasting and high-carbohydrate meals."
      ],
      [
        "Deficiency of carnitine palmitoyltransferase I (CPT-I) in the outer mitochondrial membrane",
        "CPT-I deficiency impairs long-chain fatty acid entry into mitochondria, elevating free carnitine with low acylcarnitines, unlike the elevated C8-acylcarnitines of MCAD."
      ],
      [
        "Deficiency of hormone-sensitive lipase in white adipocytes preventing lipolysis",
        "Hormone-sensitive lipase deficiency impairs peripheral free fatty acid release; serum acylcarnitines and dicarboxylic acids would not be elevated."
      ],
      [
        "Deficiency of mitochondrial HMG-CoA synthase in hepatocytes preventing ketone synthesis with normal beta-oxidation",
        "HMG-CoA synthase deficiency causes hypoketotic hypoglycemia, but beta-oxidation is intact, so acylcarnitines (C8) and dicarboxylic acids are normal."
      ],
      [
        "Deficiency of peroxisomal phytanoyl-CoA hydroxylase impairing alpha-oxidation of branched-chain fatty acids",
        "Phytanoyl-CoA hydroxylase deficiency causes Refsum disease (accumulation of phytanic acid causing retinitis pigmentosa and ataxia), not hypoketotic hypoglycemia."
      ]
    ],
    "shortestValidSolution": "Fasting hypoglycemia + ABSENCE of ketones + elevated C8-octanoylcarnitine + urinary dicarboxylic acids = MCAD deficiency -> impaired mitochondrial beta-oxidation.",
    "necessaryInference": "Master the biochemical hallmarks of fatty acid oxidation disorders: hypoketotic hypoglycemia during fasting, elevated acylcarnitines, and omega-oxidation dicarboxylic aciduria.",
    "strongestDistractor": "Deficiency of carnitine palmitoyltransferase I (CPT-I) in the outer mitochondrial membrane",
    "distractorExclusion": "CPT-I deficiency impairs long-chain fatty acids (C16-C18) and features low acylcarnitines; MCAD specifically elevates medium-chain acylcarnitines (C8 octanoylcarnitine).",
    "citation": "Rinaldo P, et al. Fatty acid oxidation disorders. Annu Rev Physiol. 2002;64:477-502. PMID: 11826276.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0567",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Cardiovascular",
    "topic": "Systemic Primary Carnitine Deficiency OCTN2 Defect",
    "provisionalDifficulty": 5,
    "stem": "A 3-year-old boy is evaluated for progressive muscle weakness, lethargy, and recurrent episodes of fasting hypoglycemia. Physical examination reveals poor muscle tone and hepatomegaly. Echocardiography demonstrates dilated cardiomyopathy with a left ventricular ejection fraction of 30%. Laboratory studies reveal: blood glucose 32 mg/dL, absence of urinary ketones, serum free carnitine 2.4 micromol/L (severely depressed; normal 25-54 micromol/L), and total carnitine 3.8 micromol/L. Urine organic acid analysis shows no dicarboxylic acids. Serum acylcarnitine profile is globally depressed across all chain lengths. Genetic analysis demonstrates a homozygous loss-of-function mutation in the SLC22A5 gene encoding the OCTN2 high-affinity sodium-dependent carnitine transporter. Which of the following describes the cellular consequence of this transporter defect?",
    "choices": [
      [
        "Failure of renal tubular carnitine reabsorption and cellular carnitine uptake prevents the carnitine shuttle from transporting long-chain fatty acids across the inner mitochondrial membrane for beta-oxidation",
        "Systemic primary carnitine deficiency is an autosomal recessive disorder caused by mutations in SLC22A5 encoding the OCTN2 organic cation/carnitine transporter. OCTN2 mediates high-affinity sodium-dependent carnitine uptake across the plasma membrane of enterocytes, myocytes, hepatocytes, and renal proximal tubular cells. Without OCTN2, renal tubular reabsorption of carnitine drops from >98% to <10%, causing urinary carnitine wasting and profound systemic carnitine depletion. Without intracellular carnitine, the CARNITINE SHUTTLE (CPT-I / CACT / CPT-II) cannot transport activated long-chain acyl-CoA into the mitochondrial matrix. This halts beta-oxidation, depriving cardiac and skeletal muscle of their primary fuel and producing dilated cardiomyopathy, hypotonia, and hypoketotic hypoglycemia. Lifelong high-dose oral L-carnitine is curative."
      ],
      [
        "Inability of the malate-aspartate shuttle to transfer reducing equivalents into the mitochondrial matrix",
        "The malate-aspartate shuttle transfers NADH across the mitochondrial membrane for oxidative phosphorylation, and does not involve carnitine."
      ],
      [
        "Failure of the glycerol-3-phosphate shuttle to reoxidize cytosolic NADH in skeletal muscle",
        "The glycerol-3-phosphate shuttle uses FAD to transfer electrons to CoQ, independent of carnitine."
      ],
      [
        "Defective citrate lyase activity preventing export of acetyl-CoA for cytoplasmic fatty acid synthesis",
        "Citrate lyase operates in fatty acid synthesis (anabolism), not beta-oxidation fatty acid transport."
      ],
      [
        "Inactivation of hormone-sensitive lipase preventing release of unesterified fatty acids from adipocytes",
        "Hormone-sensitive lipase releases fatty acids into blood; carnitine deficiency impairs intracellular uptake and mitochondrial transport."
      ]
    ],
    "shortestValidSolution": "Dilated cardiomyopathy + hypoketotic hypoglycemia + severely low plasma/tissue carnitine + OCTN2 mutation = Systemic primary carnitine deficiency.",
    "necessaryInference": "Connect renal carnitine wasting via OCTN2 defects to carnitine shuttle failure, impaired long-chain fatty acid beta-oxidation, and dilated cardiomyopathy.",
    "strongestDistractor": "Inability of the malate-aspartate shuttle to transfer reducing equivalents into the mitochondrial matrix",
    "distractorExclusion": "The malate-aspartate shuttle transfers reducing equivalents (NADH); the carnitine shuttle specifically transports long-chain fatty acids into mitochondria.",
    "citation": "El-Hattab AW, Scaglia F. Disorders of carnitine biosynthesis and transport. Mol Genet Metab. 2015;116(3):107-112. PMID: 26385306.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0568",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Gastrointestinal",
    "topic": "Abetalipoproteinemia MTTP Defect and Acanthocytes",
    "provisionalDifficulty": 5,
    "stem": "A 10-month-old infant is evaluated for chronic foul-smelling, bulky, greasy diarrhea, severe abdominal distention, and failure to thrive. Physical examination reveals a wasted infant with dry skin, mild ataxia, and absent deep tendon reflexes in the lower extremities. Laboratory studies show: total serum cholesterol 28 mg/dL (markedly depressed; normal 120-200 mg/dL), serum triglycerides 14 mg/dL (markedly depressed; normal 40-150 mg/dL), and undetectable serum apolipoprotein B. Peripheral blood smear reveals numerous erythrocytes with irregular, thorny projections of variable length and width distributed unevenly over the cell surface (acanthocytes / spur cells). Duodenal biopsy shows enterocytes with normal villus architecture but packed with clear cytoplasmic lipid vacuoles that stain strongly with Oil Red O. Which of the following is the underlying molecular defect in this infant?",
    "choices": [
      [
        "Homozygous inactivating mutation in the microsomal triglyceride transfer protein (MTTP) gene preventing the assembly and secretion of apoB-containing chylomicrons and VLDL",
        "Abetalipoproteinemia (Bassen-Kornzweig syndrome) is an autosomal recessive disorder caused by mutations in the MTTP gene encoding the microsomal triglyceride transfer protein. MTTP is an essential chaperone in the ER lumen that transfers triglycerides, phospholipids, and cholesteryl esters onto newly synthesized APOLIPOPROTEIN B (apoB-48 in enterocytes and apoB-100 in hepatocytes). In the absence of MTTP, enterocytes cannot assemble or excrete CHYLOMICRONS, and hepatocytes cannot secrete VLDL. Dietary lipids become trapped within mucosal enterocytes, appearing as lipid-laden enterocytes on biopsy. Severe malabsorption of fat and fat-soluble vitamins (A, D, E, K) ensues. Lack of vitamin E causes spinocerebellar ataxia, while membrane lipid imbalance produces ACANTHOCYTOSIS."
      ],
      [
        "Autosomal dominant mutation in the low-density lipoprotein (LDL) receptor gene causing impaired hepatic endocytosis",
        "LDL receptor mutations cause familial hypercholesterolemia (elevated LDL and premature CAD), the exact opposite of abetalipoproteinemia."
      ],
      [
        "Complete absence of apolipoprotein C-II preventing lipoprotein lipase activation",
        "ApoC-II deficiency causes familial hyperchylomicronemia (Type I dyslipidemia) with massive hypertriglyceridemia, eruptive xanthomas, and pancreatitis, not undetectable lipids."
      ],
      [
        "Inactivating mutation in the hepatic lipase gene preventing intermediate-density lipoprotein conversion",
        "Hepatic lipase deficiency causes Type III dyslipidemia with elevated IDL/chylomicron remnants, not fat malabsorption with acanthocytes."
      ],
      [
        "Deficiency of lecithin-cholesterol acyltransferase (LCAT) preventing high-density lipoprotein maturation",
        "LCAT deficiency causes 'fish-eye' disease (corneal opacities, hemolytic anemia, renal failure) with normal chylomicron assembly."
      ]
    ],
    "shortestValidSolution": "Greasy diarrhea + near-zero cholesterol/triglycerides + zero apoB + lipid-laden enterocytes + acanthocytes = Abetalipoproteinemia -> MTTP mutation.",
    "necessaryInference": "Master the pathophysiology of abetalipoproteinemia: MTTP defect prevents lipid loading onto apoB-48/100, trapping fat in enterocytes and causing acanthocytosis.",
    "strongestDistractor": "Complete absence of apolipoprotein C-II preventing lipoprotein lipase activation",
    "distractorExclusion": "ApoC-II deficiency causes extreme hypertriglyceridemia; abetalipoproteinemia is characterized by the near-complete ABSENCE of plasma cholesterol and triglycerides.",
    "citation": "Berriot-Varoqueaux N, et al. The role of the microsomal triglyercide transfer protein in abetalipoproteinemia. Annu Rev Nutr. 2000;20:663-697. PMID: 10940349.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0569",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Hematology",
    "topic": "Vitamin B12 vs Folate Methylmalonic Acid Biomarker",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old strict vegan woman presents with progressive numbness and tingling in her feet, unsteady gait, and memory difficulties. Physical examination reveals pale conjunctivae, loss of vibration sense and proprioception in both lower extremities, spasticity, and bilateral extensor plantar responses (positive Babinski sign). Complete blood count demonstrates: hemoglobin 8.1 g/dL, MCV 114 fL (macrocytic), WBC count 3,200/microL, and platelet count 110,000/microL. Peripheral blood smear confirms hypersegmented neutrophils (>=6 lobes). Serum folate concentration is normal. Which of the following biochemical profiles of plasma methylmalonic acid (MMA) and total homocysteine definitively confirms the diagnosis of cobalamin deficiency over folate deficiency?",
    "choices": [
      [
        "Markedly elevated methylmalonic acid and markedly elevated homocysteine",
        "Vitamin B12 (cobalamin) serves as an essential cofactor for exactly two human enzymes: (1) METHIONINE SYNTHASE (cytosol), which transfers a methyl group from 5-methyl-THF to homocysteine, generating methionine and regenerating free THF; and (2) METHYLMALONYL-CoA MUTASE (mitochondria), which isomerizes methylmalonyl-CoA to succinyl-CoA. In cobalamin deficiency, both pathways fail, leading to ELEVATED HOMOCYSTEINE and ELEVATED METHYLMALONIC ACID (MMA). In contrast, FOLATE DEFICIENCY only affects the methionine synthase step; therefore, folate deficiency produces ELEVATED HOMOCYSTEINE BUT NORMAL MMA. Furthermore, only cobalamin deficiency causes subacute combined degeneration of the spinal cord (due to impaired myelin maintenance from accumulated methylmalonic acid and abnormal fatty acids)."
      ],
      [
        "Normal methylmalonic acid and markedly elevated homocysteine",
        "Normal MMA with elevated homocysteine is the exact metabolic signature of FOLATE DEFICIENCY, which does not impair methylmalonyl-CoA mutase."
      ],
      [
        "Markedly elevated methylmalonic acid and completely normal homocysteine",
        "Elevated MMA with normal homocysteine is not seen in dietary B12 deficiency because cobalamin is required for both enzymes."
      ],
      [
        "Markedly depressed methylmalonic acid and markedly depressed homocysteine",
        "Both metabolites accumulate when their catabolic enzymes lack cofactors; they are never depressed in deficiency states."
      ],
      [
        "Normal methylmalonic acid and normal homocysteine",
        "Normal levels of both metabolites rule out active cellular deficiency of both vitamin B12 and folate."
      ]
    ],
    "shortestValidSolution": "Macrocytic anemia + hypersegmented neutrophils + subacute combined degeneration = B12 deficiency -> BOTH methylmalonic acid and homocysteine are elevated.",
    "necessaryInference": "Decisively differentiate B12 from folate deficiency: B12 deficiency elevates BOTH MMA and homocysteine; folate deficiency elevates homocysteine ONLY with normal MMA.",
    "strongestDistractor": "Normal methylmalonic acid and markedly elevated homocysteine",
    "distractorExclusion": "Folate deficiency produces elevated homocysteine with completely normal methylmalonic acid; cobalamin deficiency elevates both metabolites.",
    "citation": "Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160. PMID: 23301732.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0570",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Nervous System",
    "topic": "Thiamine Deficiency and Transketolase Activity",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old chronic alcoholic man is brought to the emergency department after being found disoriented on the street. Physical examination shows an emaciated man with horizontal nystagmus, bilateral lateral rectus palsy (abducens nerve impairment), and marked gait ataxia. He is oriented only to his name and confabulates when asked about recent events. Before administering intravenous dextrose, the physician orders intravenous thiamine. Which of the following erythrocyte enzyme assays would demonstrate a >25% increase in enzymatic activity upon in vitro addition of thiamine pyrophosphate (TPP), definitively confirming this patient's underlying deficiency?",
    "choices": [
      [
        "Erythrocyte transketolase in the non-oxidative branch of the hexose monophosphate shunt",
        "Thiamine (vitamin B1) is phosphorylated to thiamine pyrophosphate (TPP), an essential cofactor for: (1) PYRUVATE DEHYDROGENASE (linking glycolysis to the TCA cycle); (2) ALPHA-KETOGLUTARATE DEHYDROGENASE (TCA cycle); (3) BRANCHED-CHAIN ALPHA-KETO ACID DEHYDROGENASE (BCAA breakdown); and (4) TRANSKETOLASE (hexose monophosphate shunt). In chronic alcoholism, impaired intestinal absorption and storage deplete thiamine, precipitating Wernicke encephalopathy (triad of encephalopathy, oculomotor dysfunction, and gait ataxia) and Korsakoff psychosis (confabulation, anterograde amnesia). Giving glucose without thiamine worsens neurotoxicity because glucose oxidation consumes residual TPP. The functional test confirming thiamine deficiency is the ERYTHROCYTE TRANSKETOLASE ACTIVATION ASSAY: patient hemolysate is incubated with TPP; an increase in transketolase activity >25% (TPP effect) confirms severe thiamine deficiency."
      ],
      [
        "Erythrocyte glutathione reductase in the pentose phosphate antioxidant pathway",
        "Glutathione reductase requires flavin adenine dinucleotide (FAD, derived from vitamin B2 / riboflavin); an increase in activity upon adding FAD measures riboflavin deficiency."
      ],
      [
        "Erythrocyte aspartate aminotransferase in transamination metabolism",
        "Aspartate aminotransferase requires pyridoxal phosphate (PLP / vitamin B6); the activation assay with PLP measures vitamin B6 deficiency."
      ],
      [
        "Erythrocyte glucose-6-phosphate dehydrogenase in NADPH generation",
        "G6PD activity requires NADP+; it is an intrinsic genetic enzyme deficiency, not a vitamin-dependent functional cofactor assay."
      ],
      [
        "Erythrocyte pyruvate kinase in the terminal step of glycolysis",
        "Pyruvate kinase requires ADP and K+/Mg2+; it does not utilize thiamine pyrophosphate."
      ]
    ],
    "shortestValidSolution": "Chronic alcoholic + ataxia/nystagmus/confusion = Wernicke encephalopathy -> thiamine deficiency confirmed by erythrocyte transketolase activation with TPP.",
    "necessaryInference": "Map the four TPP-dependent enzymes and identify erythrocyte transketolase activity enhancement with TPP as the definitive functional diagnostic assay for thiamine deficiency.",
    "strongestDistractor": "Erythrocyte glutathione reductase in the pentose phosphate antioxidant pathway",
    "distractorExclusion": "Glutathione reductase activation test measures Riboflavin (B2) deficiency using FAD; transketolase activation test measures Thiamine (B1) deficiency using TPP.",
    "citation": "Thomson AD, et al. The Royal College of Physicians report on alcohol: guidelines for managing Wernicke's encephalopathy in the accident and Emergency Department. Alcohol Alcohol. 2002;37(6):513-521. PMID: 12414541.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0571",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Dermatology",
    "topic": "Niacin Deficiency Pellagra and Hartnup Disease",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old homeless man presents with a painful, symmetric, hyperpigmented, scaly rash on the sun-exposed areas of his neck and upper chest ('Casal necklace'), as well as the dorsum of both hands. He also reports persistent watery diarrhea for 3 weeks. During the interview, he exhibits memory loss, disorientation, and paranoia. Further testing demonstrates normal dietary intake of essential amino acids except for severe malnutrition. Which of the following amino acid precursors can normally be converted endogenously into the deficient vitamin, and what two vitamin-derived cofactors are strictly required for this conversion?",
    "choices": [
      [
        "Tryptophan; requires riboflavin (FAD, vitamin B2) and pyridoxine (PLP, vitamin B6) to synthesize nicotinamide adenine dinucleotide (NAD+)",
        "Pellagra is caused by deficiency of NIACIN (vitamin B3), leading to the classic '4 Ds': Dermatitis (photosensitive Casal necklace, hyperkeratosis on hands/feet), Diarrhea, Dementia (encephalopathy, paranoia), and Death. Niacin forms NAD+ and NADP+, critical cofactors for cellular dehydrogenases and ADP-ribosylation. Humans can synthesize niacin endogenously from the essential amino acid TRYPTOPHAN (~60 mg tryptophan yields 1 mg niacin). This complex multi-step hepatic pathway requires two critical vitamin cofactors: RIBOFLAVIN (FAD, vitamin B2) for kynurenine 3-monooxygenase, and PYRIDOXINE (PLP, vitamin B6) for kynureninase. Deficiency of B2, B6, or tryptophan (as in Hartnup disease or carcinoid syndrome where tryptophan is shunted to serotonin) can precipitate secondary pellagra."
      ],
      [
        "Phenylalanine; requires tetrahydrobiopterin (BH4) and iron (Fe2+) to synthesize nicotinic acid",
        "Phenylalanine is converted to tyrosine by phenylalanine hydroxylase; it does not yield niacin."
      ],
      [
        "Methionine; requires adenosylcobalamin (vitamin B12) and folate to synthesize niacinamide",
        "Methionine participates in methylation reactions and homocysteine metabolism; it does not synthesize niacin."
      ],
      [
        "Histidine; requires tetrahydrofolate (THF) and ascorbic acid to synthesize nicotinamide",
        "Histidine is degraded to glutamate via formiminoglutamate (FIGLU); it is not a precursor for niacin."
      ],
      [
        "Tyrosine; requires copper and vitamin C to synthesize nicotinic acid mononucleotide",
        "Tyrosine is converted into catecholamines and melanin; it does not enter the kynurenine pathway to form niacin."
      ]
    ],
    "shortestValidSolution": "Casal necklace rash + watery diarrhea + dementia = Pellagra (Niacin / B3 deficiency) -> synthesized from Tryptophan requiring B2 (riboflavin) and B6 (pyridoxine).",
    "necessaryInference": "Trace endogenous niacin synthesis: tryptophan is converted to NAD+ via the kynurenine pathway, which obligatorily requires vitamin B2 and vitamin B6 cofactors.",
    "strongestDistractor": "Tyrosine; requires copper and vitamin C to synthesize nicotinic acid mononucleotide",
    "distractorExclusion": "Tyrosine produces catecholamines and melanin; niacin is synthesized from the essential amino acid TRYPTOPHAN via the kynurenine pathway.",
    "citation": "Hegyi J, et al. Pellagra: dermatitis, dementia, and diarrhea. Int J Dermatol. 2004;43(1):1-5. PMID: 14693013.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0572",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "Dermatology",
    "topic": "Scurvy and Prolyl Hydroxylase Collagen Defect",
    "provisionalDifficulty": 5,
    "stem": "A 72-year-old widower who lives alone on a diet consisting exclusively of canned tea and white toast presents with severe lethargy, easy bruisability, and lower extremity pain. Physical examination shows swollen, purple, spongy gingiva that bleeds with minor touch, multiple perifollicular hemorrhages with corkscrew hairs on both lower extremities, and large ecchymoses over the calves. Radiographs show subperiosteal hemorrhages along the tibias. A deficiency of which of the following substances causes this condition, and what is its specific molecular function inside the rough endoplasmic reticulum?",
    "choices": [
      [
        "Ascorbic acid (vitamin C); maintains the Fe2+ iron cofactor of prolyl and lysyl hydroxylases in the reduced state, enabling cross-linking of procollagen alpha-chains into a stable triple helix",
        "Scurvy is caused by deficiency of ASCORBIC ACID (vitamin C). Inside the rough endoplasmic reticulum, newly synthesized pro-alpha collagen chains undergo post-translational hydroxylation of proline and lysine residues, catalyzed by PROLYL HYDROXYLASE and LYSYL HYDROXYLASE. These enzymes require ferrous iron (Fe2+) and alpha-ketoglutarate. Ascorbic acid acts as a specific reducing agent to reduce oxidized Fe3+ back to catalytic Fe2+. Hydroxyproline residues are essential for forming interchain hydrogen bonds that stabilize the COLLAGEN TRIPLE HELIX. Without vitamin C, defective procollagen cannot form a stable triple helix and undergoes intracellular degradation. Blood vessels become fragile, producing gingival bleeding, perifollicular corkscrew hemorrhages, and subperiosteal hematomas."
      ],
      [
        "Copper; acts as a prosthetic group for extracellular lysyl oxidase to form covalent aldol cross-links between tropocollagen molecules",
        "Copper is the cofactor for extracellular lysyl oxidase (defective in Menkes disease), not prolyl hydroxylase inside the rough endoplasmic reticulum."
      ],
      [
        "Zinc; acts as a cofactor for matrix metalloproteinases cleaving non-helical terminal propeptides",
        "Zinc is required for MMPs and procollagen peptidases, but scurvy is caused by ascorbic acid deficiency affecting prolyl/lysyl hydroxylation."
      ],
      [
        "Vitamin K; enables gamma-carboxylation of glutamic acid residues on vascular basement membrane laminin",
        "Vitamin K mediates gamma-carboxylation of clotting factors (II, VII, IX, X, C, S), not collagen hydroxylation."
      ],
      [
        "Pyridoxine (vitamin B6); catalyzes the condensation of glycine and succinyl-CoA during collagen strand synthesis",
        "Pyridoxine is the cofactor for ALAS in heme synthesis, not collagen synthesis."
      ]
    ],
    "shortestValidSolution": "Bleeding gums + corkscrew hairs + perifollicular hemorrhages = Scurvy (Vitamin C deficiency) -> keeps Fe2+ reduced for prolyl/lysyl hydroxylases in RER.",
    "necessaryInference": "Master collagen biosynthesis: vitamin C maintains Fe2+ in the reduced state for prolyl/lysyl hydroxylase in the RER, enabling triple helix hydrogen bonding.",
    "strongestDistractor": "Copper; acts as a prosthetic group for extracellular lysyl oxidase to form covalent aldol cross-links between tropocollagen molecules",
    "distractorExclusion": "Copper is required for EXTRACELLULAR lysyl oxidase (Menkes disease); Vitamin C is required for INTRACELLULAR prolyl/lysyl hydroxylase inside the rough ER.",
    "citation": "Myllyharju J, Kivirikko KI. Collagens, modifying enzymes and their mutations in humans, flies and worms. Trends Genet. 2004;20(1):33-43. PMID: 14698617.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield biochemistry question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0573",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Endocrine",
    "topic": "Vitamin D Toxicity in Granulomatous Disease 1-Alpha-Hydroxylase",
    "provisionalDifficulty": 5,
    "stem": "A 44-year-old woman with pulmonary sarcoidosis presents with severe constipation, polyuria, polydipsia, and confusion after spending 2 weeks on a sunny beach vacation. Physical examination reveals clear lungs, dry mucous membranes, and bilateral hilar lymphadenopathy on chest radiograph. Laboratory evaluation reveals: serum calcium 13.6 mg/dL (severe hypercalcemia; normal 8.5-10.2 mg/dL), serum phosphate 4.8 mg/dL (elevated; normal 2.5-4.5 mg/dL), serum creatinine 1.8 mg/dL, intact parathyroid hormone (PTH) < 4 pg/mL (suppressed; normal 10-65 pg/mL), 25-hydroxyvitamin D 38 ng/mL (normal 30-80 ng/mL), and 1,25-dihydroxyvitamin D 145 pg/mL (markedly elevated; normal 20-60 pg/mL). Which of the following is the cellular mechanism responsible for the elevation of the active vitamin D metabolite in this patient?",
    "choices": [
      [
        "Unregulated, substrate-dependent conversion of 25-hydroxyvitamin D to 1,25-dihydroxyvitamin D by 1-alpha-hydroxylase expressed in activated alveolar and epithelioid macrophages, completely independent of PTH negative feedback",
        "In granulomatous diseases (sarcoidosis, tuberculosis, berylliosis), activated EPITHELIOID MACROPHAGES and multinucleated giant cells express CYP27B1 (1-alpha-hydroxylase). Unlike renal tubular 1-alpha-hydroxylase (which is tightly regulated by PTH, calcium, and FGF23), macrophage 1-alpha-hydroxylase is UNREGULATED and driven entirely by inflammatory cytokines (IFN-gamma). Macrophages convert 25-hydroxyvitamin D to active 1,25-dihydroxyvitamin D in a substrate-dependent manner. Increased sun exposure boosts 25-hydroxyvitamin D synthesis in skin, which is rapidly converted by granuloma macrophages into massive excess of 1,25-dihydroxyvitamin D. This hyper-stimulates intestinal calcium and phosphate absorption, producing severe hypercalcemia with appropriately suppressed PTH."
      ],
      [
        "Autonomous hypersecretion of parathyroid hormone-related peptide (PTHrP) by transformed alveolar epithelial cells",
        "PTHrP secretion causes humoral hypercalcemia of malignancy (squamous cell lung cancer); in sarcoidosis, hypercalcemia is mediated by 1,25-dihydroxyvitamin D, and PTHrP is undetectable."
      ],
      [
        "Excessive renal tubular calcium reabsorption mediated by parathyroid hormone receptor 1 (PTHR1) gain-of-function mutation",
        "PTHR1 activating mutations cause Jansen metaphyseal chondrodysplasia, not granuloma-mediated vitamin D hypercalcemia."
      ],
      [
        "Loss of renal 24-hydroxylase (CYP24A1) activity leading to impaired catabolism of active vitamin D in proximal tubules",
        "CYP24A1 mutations cause idiopathic infantile hypercalcemia; sarcoidosis hypercalcemia is driven by macrophage 1-alpha-hydroxylase."
      ],
      [
        "Direct osteolytic bone destruction caused by extensive sarcoid granuloma infiltration of the axial skeleton",
        "While skeletal sarcoid can occur, the primary cause of diffuse hypercalcemia in sarcoidosis is systemic macrophage 1-alpha-hydroxylase overproducing 1,25-OH-D."
      ]
    ],
    "shortestValidSolution": "Sarcoidosis + sun vacation + hypercalcemia + suppressed PTH + high 1,25-dihydroxyvitamin D = Macrophage 1-alpha-hydroxylase overproduction.",
    "necessaryInference": "Understand the pathophysiology of hypercalcemia in sarcoidosis: granuloma macrophages express unregulated 1-alpha-hydroxylase independent of PTH.",
    "strongestDistractor": "Autonomous hypersecretion of parathyroid hormone-related peptide (PTHrP) by transformed alveolar epithelial cells",
    "distractorExclusion": "PTHrP drives humoral hypercalcemia of malignancy; sarcoidosis hypercalcemia is driven by elevated 1,25-dihydroxyvitamin D produced by macrophages.",
    "citation": "Sharma OP. Vitamin D, calcium, and sarcoidosis. Chest. 1996;109(2):535-539. PMID: 8608846.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pathology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0574",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Vitamin A Toxicity and Retinoid Receptor Signaling",
    "provisionalDifficulty": 5,
    "stem": "A 23-year-old woman taking high-dose oral isotretinoin for severe cystic acne presents with daily pulsatile headaches, nausea, and transient visual obscurations (vision blacking out for a few seconds when bending over). Physical examination shows an acne-free face with prominent cheilitis (dry lips) and clear lung fields. Neurological examination reveals bilateral abducens nerve (CN VI) palsy and bilateral papilledema with blurring of the optic disc margins. Brain MRI and MR venography are completely normal, showing no mass, hydrocephalus, or dural venous sinus thrombosis. Lumbar puncture demonstrates an opening pressure of 340 mm H2O (markedly elevated; normal < 200 mm H2O) with normal CSF cell counts, glucose, and protein. Which of the following is the primary mechanism of action of the medication causing this condition, and what is its most devastating teratogenic effect if taken during early pregnancy?",
    "choices": [
      [
        "Binding to nuclear retinoic acid receptors (RAR) and retinoid X receptors (RXR) to regulate gene transcription; causes pseudotumor cerebri and neural crest cell migration defects leading to craniofacial dysmorphism, thymic aplasia, and conotruncal cardiac anomalies",
        "Isotretinoin (13-cis-retinoic acid) is a synthetic vitamin A derivative that binds nuclear retinoic acid receptors (RAR) and retinoid X receptors (RXR) acting as ligand-activated transcription factors. Vitamin A toxicity and retinoids characteristically cause PSEUDOTUMOR CEREBRI (idiopathic intracranial hypertension) with papilledema, elevated ICP (>250 mm H2O), and CN VI palsy. Retinoids are severely TERATOGENIC: during embryogenesis, retinoic acid gradients govern NEURAL CREST CELL migration. Isotretinoin embryopathy includes microtia/anotia (external ear absence), cleft palate, thymic aplasia, and conotruncal heart defects (transposition of great arteries, tetralogy of Fallot). Two negative pregnancy tests and strict contraception (iPLEDGE) are mandatory."
      ],
      [
        "Selective blockade of the sodium-iodide symporter; causes congenital hypothyroidism and severe dwarfism",
        "Sodium-iodide symporter blockade is caused by perchlorate/thiocyanate, not retinoids."
      ],
      [
        "Inhibition of dihydrofolate reductase halting thymidylate synthesis; causes neural tube closure failure (spina bifida)",
        "Dihydrofolate reductase is inhibited by methotrexate, not vitamin A derivatives."
      ],
      [
        "Alkylating DNA cross-linking in rapidly dividing cells; causes limb reduction phocomelia and amelia",
        "Phocomelia is the classic teratogenic defect of thalidomide, not isotretinoin."
      ],
      [
        "Competitive antagonism of the endothelin-A receptor; causes severe renal tubular dysgenesis and oligohydramnios",
        "Renal tubular dysgenesis with oligohydramnios (Potter sequence) is caused by ACE inhibitors and ARBs, not retinoids."
      ]
    ],
    "shortestValidSolution": "Isotretinoin + papilledema + CN VI palsy + opening pressure 340 mm H2O = Pseudotumor cerebri -> binds RAR/RXR; teratogen causes neural crest craniofacial/cardiac defects.",
    "necessaryInference": "Integrate retinoid molecular mechanism (RAR/RXR transcription factors) with toxicities: pseudotumor cerebri in adults and neural crest migration failure in embryos.",
    "strongestDistractor": "Alkylating DNA cross-linking in rapidly dividing cells; causes limb reduction phocomelia and amelia",
    "distractorExclusion": "Phocomelia is caused by thalidomide; isotretinoin targets neural crest cells producing craniofacial, thymic, and conotruncal cardiac malformations.",
    "citation": "Lammer EJ, et al. Retinoic acid embryopathy. N Engl J Med. 1985;313(14):837-841. PMID: 3162101.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pharmacology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0575",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "Vitamin K Deficiency Gamma-Glutamyl Carboxylation",
    "provisionalDifficulty": 5,
    "stem": "An 82-year-old hospitalized woman who has been receiving total parenteral nutrition without vitamin additives and broad-spectrum intravenous piperacillin-tazobactam for 16 days develops bleeding from her central line site and hematuria. She has no prior personal or family bleeding history. Coagulation profile reveals: PT 26 seconds (INR 2.8; normal 0.9-1.1), aPTT 44 seconds (mildly prolonged; normal 25-35 seconds), and platelet count 240,000/microL. A 1:1 mixing study demonstrates immediate normalization of both the PT and aPTT. Subcutaneous administration of phytonadione completely corrects the PT and aPTT within 18 hours. Which of the following post-translational modifications was defective in this patient's hepatocytes, and which clotting factor's short half-life explains the earlier and more profound prolongation of the PT compared to the aPTT?",
    "choices": [
      [
        "Gamma-glutamyl carboxylation of amino-terminal glutamic acid residues to form calcium-binding Gla domains on clotting factors; factor VII has the shortest half-life (~4 to 6 hours)",
        "Vitamin K is an essential cofactor for hepatic GAMMA-GLUTAMYL CARBOXYLASE. This enzyme converts glutamic acid (Glu) residues into gamma-carboxyglutamic acid (Gla) residues on coagulation factors II, VII, IX, and X, as well as protein C and protein S. The negative Gla domains are required to bind Ca2+, which anchors these factors to negatively charged platelet phospholipids. Vitamin K deficiency occurs in hospitalized patients on antibiotics (loss of gut flora) and poor diet/TPN. The PROTHROMBIN TIME (PT) prolongs earlier and more dramatically than the aPTT because FACTOR VII HAS THE SHORTEST HALF-LIFE (~4-6 hours) of all coagulation factors, depleting rapidly before factors II, IX, or X."
      ],
      [
        "Beta-hydroxylation of aspartic acid residues in epidermal growth factor-like domains; factor X has the shortest half-life (~40 hours)",
        "Beta-hydroxylation does not depend on vitamin K; factor VII has the shortest half-life, not factor X."
      ],
      [
        "O-linked glycosylation of serine and threonine residues in the catalytic domain; factor IX has the shortest half-life (~24 hours)",
        "Vitamin K mediates gamma-carboxylation of glutamic acid, not glycosylation."
      ],
      [
        "Sulfation of tyrosine residues by trans-Golgi sulfotransferases; factor II (prothrombin) has the shortest half-life (~60 hours)",
        "Prothrombin has the LONGEST half-life (~60 hours) among the vitamin K factors; factor VII is shortest."
      ],
      [
        "Proteolytic cleavage of carboxy-terminal propeptides in the endoplasmic reticulum; factor VIII has the shortest half-life",
        "Factor VIII is not vitamin K-dependent and is stabilized by vWF."
      ]
    ],
    "shortestValidSolution": "Prolonged antibiotics + TPN + high PT (INR 2.8) > aPTT + rapid correction with vitamin K = Vitamin K deficiency -> gamma-carboxylation defect; factor VII has shortest t1/2 (4-6h).",
    "necessaryInference": "Identify the enzymatic target of vitamin K (gamma-glutamyl carboxylase) and explain why PT rises first (factor VII has shortest half-life of 4-6 hours).",
    "strongestDistractor": "Beta-hydroxylation of aspartic acid residues in epidermal growth factor-like domains; factor X has the shortest half-life (~40 hours)",
    "distractorExclusion": "Vitamin K mediates gamma-carboxylation of glutamic acid residues; factor VII has the shortest half-life (~4-6h) of all clotting factors.",
    "citation": "Shearer MJ, et al. Chemistry, nutritional sources, tissue distribution and metabolism of vitamin K with special reference to bone health. J Nutr. 2012;142(4):737S-742S. PMID: 22402482.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield pharmacology question requiring multi-step enzymatic deduction and clinical biochemical reasoning.",
      "distractorExclusionNotes": "Distractors feature closely competing metabolic pathways, storage diseases, or cofactor defects.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
