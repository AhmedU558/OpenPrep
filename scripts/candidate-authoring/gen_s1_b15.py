import json

# Generator for Step 1 Batch 15 (op-c-s1-0351 to 0375)
# Focus: Renal Physiology, Tubular Transport, Glomerulonephritis, Nephrolithiasis

items = [
  # 0351
  {
    "code": "op-c-s1-0351",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Type 1 Distal Renal Tubular Acidosis H+-ATPase Failure",
    "subtopic": "Collecting Duct Acidification Failure & Medullary Nephrocalcinosis",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman with a history of primary Sj\u00f6gren syndrome presents to the clinic with progressive generalized muscle weakness, fatigue, and dull bilateral flank discomfort. Physical examination reveals dry oral mucosa and mild bilateral costovertebral angle tenderness without peripheral edema.\n\nSerum laboratory evaluation reveals:\n- Sodium: 140 mEq/L\n- Potassium: 2.8 mEq/L\n- Chloride: 114 mEq/L\n- Bicarbonate: 14 mEq/L\n- Blood urea nitrogen: 18 mg/dL\n- Creatinine: 1.1 mg/dL\n- Calcium: 9.4 mg/dL\n\nArterial blood gas demonstrates:\n- pH: 7.28\n- PaCO2: 30 mm Hg\n- PaO2: 96 mm Hg\n- HCO3-: 14 mEq/L\n\nSimultaneous clean-catch urinalysis demonstrates:\n- Urine pH: 6.8\n- Specific gravity: 1.015\n- Protein: trace\n- Glucose: negative\n- White blood cells: 2-3/hpf\n- Red blood cells: 0-1/hpf\n\nSpot urine electrolytes reveal:\n- Sodium: 42 mEq/L\n- Potassium: 38 mEq/L\n- Chloride: 56 mEq/L\n\nRenal ultrasound demonstrates bilateral diffuse medullary hyperechogenicity with acoustic shadowing consistent with nephrocalcinosis and multiple small non-obstructing calculi. Which of the following transport mechanisms is primarily defective in this patient's renal tubules?",
    "choices": [
        [
            "Apical proton extrusion via H+-ATPase and H+/K+-ATPase in alpha-intercalated cells of the collecting duct",
            "The clinical presentation requires calculating two critical physiological parameters: (1) Serum anion gap: AG = Na - (Cl + HCO3) = 140 - (114 + 14) = 12 mEq/L (normal anion gap metabolic acidosis). (2) Urine anion gap: UAG = (Na + K) - Cl = (42 + 38) - 56 = +24 mEq/L. A positive UAG in the setting of normal AG metabolic acidosis indicates impaired renal ammonium (NH4+) excretion. Furthermore, the urine pH is inappropriately alkaline at 6.8 despite severe systemic acidemia (arterial pH 7.28). This triad\u2014normal AG metabolic acidosis, hypokalemia (2.8 mEq/L), urine pH > 5.5, positive UAG, and medullary nephrocalcinosis in an autoimmune patient (Sj\u00f6gren syndrome)\u2014is diagnostic of Type 1 (distal) Renal Tubular Acidosis. Type 1 RTA is caused by failure of alpha-intercalated cells in the collecting duct to secrete protons into the lumen via apical H+-ATPase and H+/K+-ATPase. Alkaline tubular urine and chronic acidosis-induced proximal citrate reabsorption (hypocitraturia) promote calcium phosphate precipitation, producing diffuse medullary nephrocalcinosis."
        ],
        [
            "Apical sodium-hydrogen antiporter (NHE3) mediated bicarbonate reabsorption in proximal convoluted tubule cells",
            "Impairment of proximal NHE3 or carbonic anhydrase causes Type 2 (proximal) RTA. While Type 2 RTA also causes normal AG metabolic acidosis and hypokalemia, the proximal tubule defect allows intact distal collecting ducts to acidify urine below pH 5.5 once serum bicarbonate drops below the reduced transport threshold, and it does not cause nephrocalcinosis."
        ],
        [
            "Cortical collecting duct principal cell responsiveness to aldosterone mediated by the mineralocorticoid receptor",
            "Defects in aldosterone production or mineralocorticoid receptor responsiveness cause Type 4 (hyperkalemic) RTA, which characteristically features hyperkalemia (potassium > 5.0 mEq/L), not the severe hypokalemia (2.8 mEq/L) seen here."
        ],
        [
            "Sodium-potassium-2-chloride (NKCC2) cotransport in the thick ascending limb of the loop of Henle",
            "Defects in NKCC2 cause Bartter syndrome, which presents with hypokalemic metabolic ALKALOSIS and elevated renin/aldosterone, not metabolic acidosis with a positive urine anion gap."
        ],
        [
            "Distal convoluted tubule apical thiazide-sensitive sodium-chloride cotransport (NCCT)",
            "Defects in NCCT cause Gitelman syndrome, which presents with hypokalemic metabolic ALKALOSIS and hypocalciuria, not metabolic acidosis and nephrocalcinosis."
        ]
    ],
    "shortestValidSolution": "Serum AG = 12 (normal AG) + Urine AG = +24 (impaired NH4+ excretion) + Urine pH 6.8 with systemic acidemia + nephrocalcinosis = Type 1 distal RTA (alpha-intercalated H+-ATPase failure).",
    "necessaryInference": "Independently calculate serum and urine anion gaps from raw values, recognize distal acidification failure (urine pH > 5.5 during acidemia), and identify collecting duct alpha-intercalated H+-ATPase failure.",
    "strongestDistractor": "Apical sodium-hydrogen antiporter (NHE3) mediated bicarbonate reabsorption in proximal convoluted tubule cells",
    "distractorExclusion": "Type 2 RTA preserves distal acidification (urine pH < 5.5 during severe acidemia) and does not develop medullary nephrocalcinosis.",
    "citation": "Batlle D, Haque SK. Genetic causes and mechanisms of distal renal tubular acidosis. Nat Rev Nephrol. 2012;8(8):483-497. PMID: 22710408."
},
  # 0352
  {
    "code": "op-c-s1-0352",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Type 2 Proximal Renal Tubular Acidosis and Fanconi Syndrome",
    "subtopic": "Fractional Excretion of Bicarbonate Surge with Proximal Generalized Transport Failure",
    "provisionalDifficulty": 4,
    "stem": "A 46-year-old man with multiple myeloma treated with bortezomib and dexamethasone presents with progressive generalized bone pain, proximal muscle weakness, and polyuria. Laboratory evaluation reveals: - Serum Sodium: 138 mEq/L - Serum Potassium: 3.1 mEq/L - Serum Chloride: 112 mEq/L - Serum Bicarbonate: 15 mEq/L (normal anion gap metabolic acidosis: AG = 11) - Serum Phosphorus: 1.8 mg/dL (marked hypophosphatemia) - Blood Glucose: 92 mg/dL (fasting, normal) Urinalysis reveals glycosuria (3+ glucose despite normal blood glucose), generalized aminoaciduria, phosphaturia, and beta-2 microglobulinuria. While in the baseline acidemic state (bicarbonate 15 mEq/L), his urine pH is 5.2. However, when an intravenous infusion of sodium bicarbonate is administered to restore serum bicarbonate to normal (24 mEq/L), his urine pH surges to 7.8 and fractional excretion of bicarbonate rises dramatically to 22% (normal < 5%). Which of the following renal segments and cellular mechanisms is primarily defective in this patient?",
    "choices": [
      ["Proximal convoluted tubule; generalized reabsorptive failure of bicarbonate, phosphate, glucose, and amino acids (Fanconi syndrome)", "Correct. Type 2 (proximal) Renal Tubular Acidosis (pRTA) is caused by impaired reabsorption of filtered bicarbonate in the PROXIMAL CONVOLUTED TUBULE (which normally reabsorbs ~80-85% of filtered HCO3- via apical NHE3, luminal carbonic anhydrase IV, and basolateral Na+/HCO3- cotransporter NBCe1). In adults, it is most commonly acquired secondary to MULTIPLE MYELOMA (toxic light-chain deposition causing proximal tubular injury, FANCONI SYNDROME). Fanconi syndrome features generalized proximal tubular transport failure: defective reabsorption of HCO3- (pRTA), phosphate (hypophosphatemic rickets/osteomalacia), glucose (normoglycemic glycosuria), amino acids (generalized aminoaciduria), and low-molecular-weight proteins (beta-2 microglobulin). CRUCIAL ACID-BASE DIFFERENTIATING CONCEPT: In proximal RTA, when plasma HCO3- drops below the lowered proximal threshold, the distal collecting duct remains fully functional and ACIDIFIES THE URINE TO PH < 5.5. However, when systemic bicarbonate is replenished to normal with an IV bicarbonate infusion, the defective proximal tubule is overwhelmed, causing MASSIVE BICARBONATE WASTING (fractional excretion of HCO3- > 15-20%) and a surge in urine pH to > 7.5."],
      ["Thick ascending limb of Henle; defective medullary hypertonicity generation secondary to light-chain Tamm-Horsfall cast precipitation", "Myeloma cast nephropathy affects the distal nephron with intratubular obstruction by light chains and Tamm-Horsfall protein, causing acute kidney injury, not Fanconi syndrome or isolated proximal bicarbonate wasting."],
      ["Cortical collecting duct; impaired principal cell sodium reabsorption mediated by epithelial sodium channels (ENaC)", "ENaC impairment causes Type 4 RTA or pseudohypoaldosteronism with hyperkalemia, not generalized glycosuria, phosphaturia, or hypokalemic Fanconi syndrome."],
      ["Distal convoluted tubule; defective magnesium reabsorption mediated by transient receptor potential melastatin 6 (TRPM6)", "TRPM6 defects cause isolated familial hypomagnesemia with secondary hypocalcemia, not generalized proximal transport failure or bicarbonate wasting."],
      ["Medullary collecting duct; deficient aquaporin-2 water channel apical membrane insertion", "Aquaporin-2 defects cause nephrogenic diabetes insipidus with hypernatremia, without glycosuria, aminoaciduria, or bicarbonate wasting."]
    ],
    "shortestValidSolution": "Normal AG acidosis + glycosuria with normal blood sugar + hypophosphatemia + FE-HCO3 > 20% on IV bicarb -> Proximal RTA / Fanconi syndrome.",
    "necessaryInference": "Normoglycemic glycosuria + phosphaturia + aminoaciduria + normal AG acidosis = Fanconi syndrome (proximal tubule). In proximal RTA, urine pH can drop < 5.5 during acidemia, but IV bicarbonate infusion causes massive fractional excretion of bicarbonate (> 15-20%).",
    "strongestDistractor": "Thick ascending limb of Henle; defective medullary hypertonicity generation secondary to light-chain Tamm-Horsfall cast precipitation",
    "distractorExclusion": "Light chain cast nephropathy causes tubular obstruction and renal failure, whereas light chain toxicity directly damaging proximal tubule cells causes Fanconi syndrome.",
    "citation": "Foreman JW. Fanconi syndrome. Pediatr Clin North Am. 2019;66(1):159-167. PMID: 30454740."
  },
  # 0353
  {
    "code": "op-c-s1-0353",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Type 4 Renal Tubular Acidosis Hypoaldosteronism",
    "subtopic": "Hyperkalemia-Induced Suppression of Proximal Ammoniagenesis and Normal Anion Gap Acidosis",
    "provisionalDifficulty": 4,
    "stem": "A 62-year-old man with a 20-year history of poorly controlled type 2 diabetes mellitus and baseline diabetic nephropathy (stage 3b chronic kidney disease; eGFR 38 mL/min/1.73 m2) is evaluated during a routine clinic visit. He has mild peripheral edema. Vital signs reveal blood pressure 152/94 mm Hg and heart rate 68/min. Laboratory evaluation reveals: - Serum Sodium: 136 mEq/L - Serum Potassium: 5.9 mEq/L (marked hyperkalemia) - Serum Chloride: 110 mEq/L - Serum Bicarbonate: 17 mEq/L (normal anion gap metabolic acidosis: AG = 9) - Blood Urea Nitrogen: 38 mg/dL - Serum Creatinine: 2.1 mg/dL Urinalysis demonstrates a urine pH of 5.1 (consistently < 5.5). Spot urine electrolytes reveal: Sodium 38 mEq/L, Potassium 16 mEq/L, and Chloride 32 mEq/L (positive urine anion gap: +22 mEq/L). Plasma renin activity is low, and serum aldosterone concentration is markedly reduced (hyporeninemic hypoaldosteronism). Which of the following pathophysiological mechanisms directly mediates the systemic metabolic acidosis in this condition?",
    "choices": [
      ["Hyperkalemia-induced intracellular alkalosis in proximal tubular cells directly suppressing glutamine deamination and ammonium (NH4+) synthesis", "Correct. Type 4 Renal Tubular Acidosis (hyperkalemic RTA) is the most common form of RTA in clinical practice, typically occurring in older patients with diabetic nephropathy who develop HYPORENINEMIC HYPOALDOSTERONISM (diabetic microvascular damage to the juxtaglomerular apparatus reduces renin, secondarily reducing aldosterone). Normally, aldosterone stimulates ENaC sodium reabsorption in principal cells (creating a lumen-negative potential that drives K+ and H+ excretion) and directly activates H+-ATPase in intercalated cells. Aldosterone deficiency or resistance causes HYPERKALEMIA. CRITICAL USMLE STEP 1 MECHANISTIC TRAP: The primary driver of metabolic acidosis in Type 4 RTA is not distal proton pump failure, but rather HYPERKALEMIA ITSELF. High extracellular K+ drives potassium into proximal tubular cells in exchange for protons, creating intracellular alkalosis. INTRACELLULAR ALKALOSIS DIRECTLY INHIBITS PHOSPHATE-DEPENDENT GLUTAMINASE, suppressing the deamination of glutamine and crippling RENAL AMMONIAGENESIS. Because NH3/NH4+ is the primary urinary buffer for acid excretion, loss of ammonium buffer limits daily acid excretion, generating a normal anion gap metabolic acidosis. Distal intercalated cells retain the ability to pump protons against a concentration gradient, so URINE PH REMAINS ACIDIC (pH < 5.5)."],
      ["Apical loss of the hydrogen-potassium antiporter (H+/K+-ATPase) in cortical collecting duct principal cells", "H+/K+-ATPase resides in alpha-intercalated cells, not principal cells, and its primary defect causes hypokalemic Type 1 RTA, not hyperkalemic Type 4 RTA."],
      ["Defective basolateral sodium-bicarbonate cotransport (NBCe1) in proximal convoluted tubular cells", "NBCe1 defects cause Type 2 proximal RTA with hypokalemia and severe bicarbonate wasting, not hyperkalemic hypoaldosteronism."],
      ["Massive accumulation of circulating unmeasured endogenous ketoacid anions (beta-hydroxybutyrate)", "Ketoacid accumulation causes high anion gap metabolic acidosis with high anion gap (> 12), whereas Type 4 RTA is a normal anion gap (hyperchloremic) acidosis."],
      ["Competitive inhibition of the thick ascending limb NKCC2 cotransporter by organic uremic retention solutes", "NKCC2 inhibition causes Bartter-like hypokalemic alkalosis, not hyperkalemic metabolic acidosis."]
    ],
    "shortestValidSolution": "Diabetic nephropathy + hyperkalemia + normal AG acidosis + urine pH < 5.5 + low renin/aldosterone -> Type 4 RTA (hyperkalemia suppresses proximal ammoniagenesis).",
    "necessaryInference": "Hyperkalemia + normal anion gap acidosis + low renin/aldosterone in a diabetic = Type 4 RTA. The mechanism of acidosis is hyperkalemia-induced intracellular alkalosis suppressing proximal tubular glutaminase and ammonium (NH4+) generation.",
    "strongestDistractor": "Apical loss of the hydrogen-potassium antiporter (H+/K+-ATPase) in cortical collecting duct principal cells",
    "distractorExclusion": "Type 4 RTA is driven by aldosterone deficiency and hyperkalemia-mediated ammoniagenesis failure, not primary intercalated cell proton pump defects (which cause Type 1 RTA).",
    "citation": "Batlle DC, Arruda JA, Kurtzman NA. Hyperkalemic distal renal tubular acidosis associated with obstructive uropathy. N Engl J Med. 1981;304(7):373-380. PMID: 7453744."
  },
  # 0354
  {
    "code": "op-c-s1-0354",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Bartter Syndrome vs Gitelman Syndrome Molecular Transport Defects",
    "subtopic": "Loop Diuretic Mimic (NKCC2 / Hypercalciuria) vs Thiazide Mimic (NCCT / Hypocalciuria)",
    "provisionalDifficulty": 4,
    "stem": "An 18-year-old man is evaluated for recurrent episodes of severe muscle cramps, carpopedal spasms, and generalized fatigue. He is normotensive with blood pressure 114/72 mm Hg. Serum chemistry demonstrates: - Sodium: 137 mEq/L - Potassium: 2.6 mEq/L (marked hypokalemia) - Chloride: 92 mEq/L - Bicarbonate: 32 mEq/L (metabolic alkalosis) - Magnesium: 1.2 mg/dL (normal: 1.7-2.2 mg/dL; marked hypomagnesemia) Plasma renin activity and serum aldosterone concentrations are both markedly elevated. Screen for surreptitious diuretic use is completely negative. 24-hour urine collection reveals marked HYPOCALCIURIA (urinary calcium excretion < 1.0 mg/kg/day; markedly reduced). Genetic testing identifies an autosomal recessive loss-of-function mutation in the SLC12A3 gene on chromosome 16. Which of the following nephron segments and specific apical transport proteins is defective in this patient?",
    "choices": [
      ["Distal convoluted tubule; thiazide-sensitive sodium-chloride cotransporter (NCCT) (Gitelman syndrome)", "Correct. Master the classic USMLE Step 1 distinction between Bartter syndrome and Gitelman syndrome: Both are autosomal recessive disorders presenting with HYPOKALEMIC, HYPOCHLOREMIC METABOLIC ALKALOSIS, normal/low blood pressure, and secondary hyperreninemic hyperaldosteronism mimicking chronic diuretic abuse. (1) GITELMAN SYNDROME (present in this patient) is caused by loss-of-function mutations in SLC12A3 encoding the apical THIAZIDE-SENSITIVE SODIUM-CHLORIDE COTRANSPORTER (NCCT) in the DISTAL CONVOLUTED TUBULE (DCT). It mimics chronic THIAZIDE DIURETIC therapy. Classic differentiating hallmarks: Onset in late childhood or adulthood, SEVERE HYPOMAGNESEMIA (DCT is a major site of active magnesium reabsorption via TRPM6), and CRUCIALLY, MARKED HYPOCALCIURIA. In the DCT, NCCT inhibition lowers intracellular sodium, driving basolateral 3Na+/Ca2+ exchange and stimulating apical TRPV5 calcium channels, markedly enhancing calcium reabsorption. (2) In contrast, BARTTER SYNDROME affects the THICK ASCENDING LIMB of the loop of Henle (mutations in NKCC2, ROMK, or ClC-Kb), mimicking a LOOP DIURETIC (furosemide). Hallmarks: Onset in infancy with polyhydramnios, nephrocalcinosis, and HYPERCALCIURIA (loss of lumen-positive potential prevents paracellular calcium reabsorption)."],
      ["Thick ascending limb of Henle; bumetanide-sensitive sodium-potassium-2-chloride cotransporter (NKCC2) (Bartter syndrome)", "Bartter syndrome affects the thick ascending limb NKCC2 cotransporter, mimicking loop diuretics and causing HYPERCALCIURIA and nephrocalcinosis, directly contradicting the hypocalciuria in this patient."],
      ["Cortical collecting duct; amiloride-sensitive epithelial sodium channel (ENaC)", "ENaC mutations causing loss-of-function lead to pseudohypoaldosteronism Type 1 (salt wasting, hyperkalemia, acidosis), while activating mutations cause Liddle syndrome (hypertension)."],
      ["Proximal convoluted tubule; apical sodium-hydrogen exchanger 3 (NHE3)", "NHE3 defects impair proximal bicarbonate and sodium reabsorption, causing metabolic acidosis (proximal RTA), not hypokalemic metabolic alkalosis."],
      ["Medullary collecting duct; basolateral chloride-bicarbonate anion exchanger (AE1)", "AE1 mutations cause Type 1 distal RTA (hyperchloremic metabolic acidosis with nephrocalcinosis), not metabolic alkalosis with hypocalciuria."]
    ],
    "shortestValidSolution": "Hypokalemic metabolic alkalosis + normal BP + hypomagnesemia + HYPOCALCIURIA -> Gitelman syndrome (NCCT in distal convoluted tubule).",
    "necessaryInference": "Normotensive hypokalemic metabolic alkalosis with elevated renin/aldosterone narrows to Bartter vs Gitelman. Marked hypocalciuria and late-onset hypomagnesemia definitively confirm Gitelman syndrome (NCCT cotransporter defect in DCT, mimicking a thiazide).",
    "strongestDistractor": "Thick ascending limb of Henle; bumetanide-sensitive sodium-potassium-2-chloride cotransporter (NKCC2) (Bartter syndrome)",
    "distractorExclusion": "Bartter syndrome impairs NKCC2 in the loop of Henle and causes hypercalciuria (loop diuretic mimic), whereas Gitelman syndrome causes hypocalciuria (thiazide mimic).",
    "citation": "Knoers NV, Levtchenko EN. Gitelman syndrome. Orphanet J Rare Dis. 2008;3:22. PMID: 18667063."
  },
  # 0355
  {
    "code": "op-c-s1-0355",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Renal",
    "topic": "Liddle Syndrome Constitutive ENaC Activation",
    "subtopic": "PY-Motif Deletion Impairing Nedd4-2 Ubiquitination and Amiloride Responsiveness",
    "provisionalDifficulty": 4,
    "stem": "A 17-year-old girl is evaluated for severe, treatment-resistant hypertension. Her blood pressure is 178/104 mm Hg. Physical examination is otherwise unremarkable. Laboratory evaluation demonstrates: - Serum Sodium: 144 mEq/L - Serum Potassium: 2.7 mEq/L (severe hypokalemia) - Serum Bicarbonate: 33 mEq/L (metabolic alkalosis) - Serum Aldosterone: < 2 ng/dL (suppressed; normal: 4-30 ng/dL) - Plasma Renin Activity: < 0.2 ng/mL/hr (suppressed; normal: 1.0-4.0 ng/mL/hr) 24-hour urine collection confirms renal potassium wasting. A trial of spironolactone produces no reduction in blood pressure and fails to correct her hypokalemia. However, administration of oral amiloride results in rapid normalization of blood pressure, correction of hypokalemia, and resolution of metabolic alkalosis. Genetic testing demonstrates a heterozygous deletion of the cytoplasmic C-terminal PY-motif in the beta subunit of the epithelial sodium channel (ENaC). This mutation causes pseudohyperaldosteronism by which of the following molecular mechanisms?",
    "choices": [
      ["Impairing binding of the ubiquitin ligase Nedd4-2, preventing normal ENaC internalization and causing constitutive channel retention at the apical membrane", "Correct. Liddle syndrome is an autosomal dominant form of monogenic hypertension characterized by PSEUDOHYPERALDOSTERONISM: early-onset severe hypertension, hypokalemia, and metabolic alkalosis, with MARKEDLY SUPPRESSED PLASMA RENIN AND ALDOSTERONE. It is caused by gain-of-function mutations in the SCNN1B or SCNN1G genes encoding the beta or gamma subunits of the EPITHELIAL SODIUM CHANNEL (ENaC) in principal cells of the cortical collecting duct. In normal physiology, active ENaC channels on the apical membrane are recognized by the E3 ubiquitin ligase NEDD4-2, which binds to a specific proline-rich 'PY-motif' (PPxY) on the channel's cytoplasmic C-terminus. Nedd4-2 polyubiquitinates ENaC, triggering clathrin-mediated endocytosis and lysosomal degradation. In Liddle syndrome, deletions or missense mutations in the PY-motif PREVENT NEDD4-2 BINDING. Lacking ubiquitination, ENaC channels escape internalization and REMAIN CONSTITUTIVELY HYPERACTIVE AT THE APICAL MEMBRANE, driving massive uninhibited sodium and water reabsorption (volume expansion, hypertension, suppression of renin/aldosterone) and generating a persistent lumen-negative electrical potential that drives excessive K+ and H+ excretion into urine. Spironolactone is completely ineffective because the mineralocorticoid receptor is already turned off; AMILORIDE OR TRIAMTERENE IS DEFINITIVE THERAPY because they directly plug the open ENaC pore."],
      ["Constitutive transactivation of the mineralocorticoid receptor by normal circulating cortisol concentrations", "Cortisol activation of mineralocorticoid receptors occurs in Apparent Mineralocorticoid Excess (AME; 11-beta-HSD2 deficiency) or licorice ingestion, which responds to spironolactone/dexamethasone, not direct ENaC blockers."],
      ["Autosomal dominant overexpression of 11-beta-hydroxylase causing massive excess of 11-deoxycorticosterone", "11-beta-hydroxylase DEFICIENCY causes congenital adrenal hyperplasia with virilization, not a clean C-terminal PY-motif deletion in ENaC."],
      ["Ectopic chimeric duplication fusing the ACTH-responsive CYP11B1 promoter to the aldosterone synthase coding sequence", "This describes Glucocorticoid-Remediable Aldosteronism (GRA), which features HIGH aldosterone that is suppressed by dexamethasone, not suppressed aldosterone."],
      ["Constitutive activating mutation in renal vascular V2 vasopressin receptors driving aquaporin-2 translocation", "Activating V2 mutations cause nephrogenic syndrome of inappropriate antidiuresis (euvolemic hyponatremia), not hypokalemic hypertension."]
    ],
    "shortestValidSolution": "Hypertension + hypokalemic alkalosis + low renin + low aldosterone + responsive to amiloride (not spironolactone) -> Liddle syndrome (impaired Nedd4-2 ubiquitination leaves ENaC open).",
    "necessaryInference": "Hypertension + hypokalemic alkalosis with suppressed renin and suppressed aldosterone = Pseudohyperaldosteronism. Response to amiloride but resistance to spironolactone confirms Liddle syndrome: loss of ENaC PY-motif prevents Nedd4-2 ubiquitination and degradation.",
    "strongestDistractor": "Constitutive transactivation of the mineralocorticoid receptor by normal circulating cortisol concentrations",
    "distractorExclusion": "Cortisol-mediated MR transactivation describes 11-beta-HSD2 deficiency (Apparent Mineralocorticoid Excess), which is responsive to spironolactone, whereas Liddle syndrome is aldosterone-independent and responds to amiloride.",
    "citation": "Shimkets RA, Warnock DG, Bositis CM, et al. Liddle's syndrome: heritable human hypertension caused by mutations in the beta subunit of the epithelial sodium channel. Cell. 1994;79(3):407-414. PMID: 7954808."
  }
]

print(f"Loaded {len(items)} items for part 1 of Batch 15.")
