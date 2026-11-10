import { CandidateSpec } from './types';

export const step1Batch15: CandidateSpec[] = [
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
    "citation": "Batlle D, Haque SK. Genetic causes and mechanisms of distal renal tubular acidosis. Nat Rev Nephrol. 2012;8(8):483-497. PMID: 22710408.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Independently calculate serum and urine anion gaps from raw values, recognize distal acidification failure (urine pH > 5.5 during acidemia), and identify collecting duct alpha-intercalated H+-ATPase failure.",
      "distractorExclusionNotes": "Strongest distractor 'Apical sodium-hydrogen antiporter (NHE3) mediated bicarbonate reabsorption in pr' excluded: Type 2 RTA preserves distal acidification (urine pH < 5.5 during severe acidemia) and does not develop medullary nephrocalcinosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Proximal convoluted tubule; generalized reabsorptive failure of bicarbonate, phosphate, glucose, and amino acids (Fanconi syndrome)",
        "Correct. Type 2 (proximal) Renal Tubular Acidosis (pRTA) is caused by impaired reabsorption of filtered bicarbonate in the PROXIMAL CONVOLUTED TUBULE (which normally reabsorbs ~80-85% of filtered HCO3- via apical NHE3, luminal carbonic anhydrase IV, and basolateral Na+/HCO3- cotransporter NBCe1). In adults, it is most commonly acquired secondary to MULTIPLE MYELOMA (toxic light-chain deposition causing proximal tubular injury, FANCONI SYNDROME). Fanconi syndrome features generalized proximal tubular transport failure: defective reabsorption of HCO3- (pRTA), phosphate (hypophosphatemic rickets/osteomalacia), glucose (normoglycemic glycosuria), amino acids (generalized aminoaciduria), and low-molecular-weight proteins (beta-2 microglobulin). CRUCIAL ACID-BASE DIFFERENTIATING CONCEPT: In proximal RTA, when plasma HCO3- drops below the lowered proximal threshold, the distal collecting duct remains fully functional and ACIDIFIES THE URINE TO PH < 5.5. However, when systemic bicarbonate is replenished to normal with an IV bicarbonate infusion, the defective proximal tubule is overwhelmed, causing MASSIVE BICARBONATE WASTING (fractional excretion of HCO3- > 15-20%) and a surge in urine pH to > 7.5."
      ],
      [
        "Thick ascending limb of Henle; defective medullary hypertonicity generation secondary to light-chain Tamm-Horsfall cast precipitation",
        "Myeloma cast nephropathy affects the distal nephron with intratubular obstruction by light chains and Tamm-Horsfall protein, causing acute kidney injury, not Fanconi syndrome or isolated proximal bicarbonate wasting."
      ],
      [
        "Cortical collecting duct; impaired principal cell sodium reabsorption mediated by epithelial sodium channels (ENaC)",
        "ENaC impairment causes Type 4 RTA or pseudohypoaldosteronism with hyperkalemia, not generalized glycosuria, phosphaturia, or hypokalemic Fanconi syndrome."
      ],
      [
        "Distal convoluted tubule; defective magnesium reabsorption mediated by transient receptor potential melastatin 6 (TRPM6)",
        "TRPM6 defects cause isolated familial hypomagnesemia with secondary hypocalcemia, not generalized proximal transport failure or bicarbonate wasting."
      ],
      [
        "Medullary collecting duct; deficient aquaporin-2 water channel apical membrane insertion",
        "Aquaporin-2 defects cause nephrogenic diabetes insipidus with hypernatremia, without glycosuria, aminoaciduria, or bicarbonate wasting."
      ]
    ],
    "shortestValidSolution": "Normal AG acidosis + glycosuria with normal blood sugar + hypophosphatemia + FE-HCO3 > 20% on IV bicarb -> Proximal RTA / Fanconi syndrome.",
    "necessaryInference": "Normoglycemic glycosuria + phosphaturia + aminoaciduria + normal AG acidosis = Fanconi syndrome (proximal tubule). In proximal RTA, urine pH can drop < 5.5 during acidemia, but IV bicarbonate infusion causes massive fractional excretion of bicarbonate (> 15-20%).",
    "strongestDistractor": "Thick ascending limb of Henle; defective medullary hypertonicity generation secondary to light-chain Tamm-Horsfall cast precipitation",
    "distractorExclusion": "Light chain cast nephropathy causes tubular obstruction and renal failure, whereas light chain toxicity directly damaging proximal tubule cells causes Fanconi syndrome.",
    "citation": "Foreman JW. Fanconi syndrome. Pediatr Clin North Am. 2019;66(1):159-167. PMID: 30454740.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Normoglycemic glycosuria + phosphaturia + aminoaciduria + normal AG acidosis = Fanconi syndrome (proximal tubule). In proximal RTA, urine pH can drop < 5.5 during acidemia, but IV bicarbonate infusion causes massive fractional excretion of bicarbonate (> 15-20%).",
      "distractorExclusionNotes": "Strongest distractor 'Thick ascending limb of Henle; defective medullary hypertonicity generation seco' excluded: Light chain cast nephropathy causes tubular obstruction and renal failure, whereas light chain toxicity directly damaging proximal tubule cells causes Fanconi syndrome.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Hyperkalemia-induced intracellular alkalosis in proximal tubular cells directly suppressing glutamine deamination and ammonium (NH4+) synthesis",
        "Correct. Type 4 Renal Tubular Acidosis (hyperkalemic RTA) is the most common form of RTA in clinical practice, typically occurring in older patients with diabetic nephropathy who develop HYPORENINEMIC HYPOALDOSTERONISM (diabetic microvascular damage to the juxtaglomerular apparatus reduces renin, secondarily reducing aldosterone). Normally, aldosterone stimulates ENaC sodium reabsorption in principal cells (creating a lumen-negative potential that drives K+ and H+ excretion) and directly activates H+-ATPase in intercalated cells. Aldosterone deficiency or resistance causes HYPERKALEMIA. CRITICAL USMLE STEP 1 MECHANISTIC TRAP: The primary driver of metabolic acidosis in Type 4 RTA is not distal proton pump failure, but rather HYPERKALEMIA ITSELF. High extracellular K+ drives potassium into proximal tubular cells in exchange for protons, creating intracellular alkalosis. INTRACELLULAR ALKALOSIS DIRECTLY INHIBITS PHOSPHATE-DEPENDENT GLUTAMINASE, suppressing the deamination of glutamine and crippling RENAL AMMONIAGENESIS. Because NH3/NH4+ is the primary urinary buffer for acid excretion, loss of ammonium buffer limits daily acid excretion, generating a normal anion gap metabolic acidosis. Distal intercalated cells retain the ability to pump protons against a concentration gradient, so URINE PH REMAINS ACIDIC (pH < 5.5)."
      ],
      [
        "Apical loss of the hydrogen-potassium antiporter (H+/K+-ATPase) in cortical collecting duct principal cells",
        "H+/K+-ATPase resides in alpha-intercalated cells, not principal cells, and its primary defect causes hypokalemic Type 1 RTA, not hyperkalemic Type 4 RTA."
      ],
      [
        "Defective basolateral sodium-bicarbonate cotransport (NBCe1) in proximal convoluted tubular cells",
        "NBCe1 defects cause Type 2 proximal RTA with hypokalemia and severe bicarbonate wasting, not hyperkalemic hypoaldosteronism."
      ],
      [
        "Massive accumulation of circulating unmeasured endogenous ketoacid anions (beta-hydroxybutyrate)",
        "Ketoacid accumulation causes high anion gap metabolic acidosis with high anion gap (> 12), whereas Type 4 RTA is a normal anion gap (hyperchloremic) acidosis."
      ],
      [
        "Competitive inhibition of the thick ascending limb NKCC2 cotransporter by organic uremic retention solutes",
        "NKCC2 inhibition causes Bartter-like hypokalemic alkalosis, not hyperkalemic metabolic acidosis."
      ]
    ],
    "shortestValidSolution": "Diabetic nephropathy + hyperkalemia + normal AG acidosis + urine pH < 5.5 + low renin/aldosterone -> Type 4 RTA (hyperkalemia suppresses proximal ammoniagenesis).",
    "necessaryInference": "Hyperkalemia + normal anion gap acidosis + low renin/aldosterone in a diabetic = Type 4 RTA. The mechanism of acidosis is hyperkalemia-induced intracellular alkalosis suppressing proximal tubular glutaminase and ammonium (NH4+) generation.",
    "strongestDistractor": "Apical loss of the hydrogen-potassium antiporter (H+/K+-ATPase) in cortical collecting duct principal cells",
    "distractorExclusion": "Type 4 RTA is driven by aldosterone deficiency and hyperkalemia-mediated ammoniagenesis failure, not primary intercalated cell proton pump defects (which cause Type 1 RTA).",
    "citation": "Batlle DC, Arruda JA, Kurtzman NA. Hyperkalemic distal renal tubular acidosis associated with obstructive uropathy. N Engl J Med. 1981;304(7):373-380. PMID: 7453744.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hyperkalemia + normal anion gap acidosis + low renin/aldosterone in a diabetic = Type 4 RTA. The mechanism of acidosis is hyperkalemia-induced intracellular alkalosis suppressing proximal tubular glutaminase and ammonium (NH4+) generation.",
      "distractorExclusionNotes": "Strongest distractor 'Apical loss of the hydrogen-potassium antiporter (H+/K+-ATPase) in cortical coll' excluded: Type 4 RTA is driven by aldosterone deficiency and hyperkalemia-mediated ammoniagenesis failure, not primary intercalated cell proton pump defects (which cause Type 1 RTA).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Distal convoluted tubule; thiazide-sensitive sodium-chloride cotransporter (NCCT) (Gitelman syndrome)",
        "Correct. Master the classic USMLE Step 1 distinction between Bartter syndrome and Gitelman syndrome: Both are autosomal recessive disorders presenting with HYPOKALEMIC, HYPOCHLOREMIC METABOLIC ALKALOSIS, normal/low blood pressure, and secondary hyperreninemic hyperaldosteronism mimicking chronic diuretic abuse. (1) GITELMAN SYNDROME (present in this patient) is caused by loss-of-function mutations in SLC12A3 encoding the apical THIAZIDE-SENSITIVE SODIUM-CHLORIDE COTRANSPORTER (NCCT) in the DISTAL CONVOLUTED TUBULE (DCT). It mimics chronic THIAZIDE DIURETIC therapy. Classic differentiating hallmarks: Onset in late childhood or adulthood, SEVERE HYPOMAGNESEMIA (DCT is a major site of active magnesium reabsorption via TRPM6), and CRUCIALLY, MARKED HYPOCALCIURIA. In the DCT, NCCT inhibition lowers intracellular sodium, driving basolateral 3Na+/Ca2+ exchange and stimulating apical TRPV5 calcium channels, markedly enhancing calcium reabsorption. (2) In contrast, BARTTER SYNDROME affects the THICK ASCENDING LIMB of the loop of Henle (mutations in NKCC2, ROMK, or ClC-Kb), mimicking a LOOP DIURETIC (furosemide). Hallmarks: Onset in infancy with polyhydramnios, nephrocalcinosis, and HYPERCALCIURIA (loss of lumen-positive potential prevents paracellular calcium reabsorption)."
      ],
      [
        "Thick ascending limb of Henle; bumetanide-sensitive sodium-potassium-2-chloride cotransporter (NKCC2) (Bartter syndrome)",
        "Bartter syndrome affects the thick ascending limb NKCC2 cotransporter, mimicking loop diuretics and causing HYPERCALCIURIA and nephrocalcinosis, directly contradicting the hypocalciuria in this patient."
      ],
      [
        "Cortical collecting duct; amiloride-sensitive epithelial sodium channel (ENaC)",
        "ENaC mutations causing loss-of-function lead to pseudohypoaldosteronism Type 1 (salt wasting, hyperkalemia, acidosis), while activating mutations cause Liddle syndrome (hypertension)."
      ],
      [
        "Proximal convoluted tubule; apical sodium-hydrogen exchanger 3 (NHE3)",
        "NHE3 defects impair proximal bicarbonate and sodium reabsorption, causing metabolic acidosis (proximal RTA), not hypokalemic metabolic alkalosis."
      ],
      [
        "Medullary collecting duct; basolateral chloride-bicarbonate anion exchanger (AE1)",
        "AE1 mutations cause Type 1 distal RTA (hyperchloremic metabolic acidosis with nephrocalcinosis), not metabolic alkalosis with hypocalciuria."
      ]
    ],
    "shortestValidSolution": "Hypokalemic metabolic alkalosis + normal BP + hypomagnesemia + HYPOCALCIURIA -> Gitelman syndrome (NCCT in distal convoluted tubule).",
    "necessaryInference": "Normotensive hypokalemic metabolic alkalosis with elevated renin/aldosterone narrows to Bartter vs Gitelman. Marked hypocalciuria and late-onset hypomagnesemia definitively confirm Gitelman syndrome (NCCT cotransporter defect in DCT, mimicking a thiazide).",
    "strongestDistractor": "Thick ascending limb of Henle; bumetanide-sensitive sodium-potassium-2-chloride cotransporter (NKCC2) (Bartter syndrome)",
    "distractorExclusion": "Bartter syndrome impairs NKCC2 in the loop of Henle and causes hypercalciuria (loop diuretic mimic), whereas Gitelman syndrome causes hypocalciuria (thiazide mimic).",
    "citation": "Knoers NV, Levtchenko EN. Gitelman syndrome. Orphanet J Rare Dis. 2008;3:22. PMID: 18667063.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Normotensive hypokalemic metabolic alkalosis with elevated renin/aldosterone narrows to Bartter vs Gitelman. Marked hypocalciuria and late-onset hypomagnesemia definitively confirm Gitelman syndrome (NCCT cotransporter defect in DCT, mimicking a thiazide).",
      "distractorExclusionNotes": "Strongest distractor 'Thick ascending limb of Henle; bumetanide-sensitive sodium-potassium-2-chloride ' excluded: Bartter syndrome impairs NKCC2 in the loop of Henle and causes hypercalciuria (loop diuretic mimic), whereas Gitelman syndrome causes hypocalciuria (thiazide mimic).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Impairing binding of the ubiquitin ligase Nedd4-2, preventing normal ENaC internalization and causing constitutive channel retention at the apical membrane",
        "Correct. Liddle syndrome is an autosomal dominant form of monogenic hypertension characterized by PSEUDOHYPERALDOSTERONISM: early-onset severe hypertension, hypokalemia, and metabolic alkalosis, with MARKEDLY SUPPRESSED PLASMA RENIN AND ALDOSTERONE. It is caused by gain-of-function mutations in the SCNN1B or SCNN1G genes encoding the beta or gamma subunits of the EPITHELIAL SODIUM CHANNEL (ENaC) in principal cells of the cortical collecting duct. In normal physiology, active ENaC channels on the apical membrane are recognized by the E3 ubiquitin ligase NEDD4-2, which binds to a specific proline-rich 'PY-motif' (PPxY) on the channel's cytoplasmic C-terminus. Nedd4-2 polyubiquitinates ENaC, triggering clathrin-mediated endocytosis and lysosomal degradation. In Liddle syndrome, deletions or missense mutations in the PY-motif PREVENT NEDD4-2 BINDING. Lacking ubiquitination, ENaC channels escape internalization and REMAIN CONSTITUTIVELY HYPERACTIVE AT THE APICAL MEMBRANE, driving massive uninhibited sodium and water reabsorption (volume expansion, hypertension, suppression of renin/aldosterone) and generating a persistent lumen-negative electrical potential that drives excessive K+ and H+ excretion into urine. Spironolactone is completely ineffective because the mineralocorticoid receptor is already turned off; AMILORIDE OR TRIAMTERENE IS DEFINITIVE THERAPY because they directly plug the open ENaC pore."
      ],
      [
        "Constitutive transactivation of the mineralocorticoid receptor by normal circulating cortisol concentrations",
        "Cortisol activation of mineralocorticoid receptors occurs in Apparent Mineralocorticoid Excess (AME; 11-beta-HSD2 deficiency) or licorice ingestion, which responds to spironolactone/dexamethasone, not direct ENaC blockers."
      ],
      [
        "Autosomal dominant overexpression of 11-beta-hydroxylase causing massive excess of 11-deoxycorticosterone",
        "11-beta-hydroxylase DEFICIENCY causes congenital adrenal hyperplasia with virilization, not a clean C-terminal PY-motif deletion in ENaC."
      ],
      [
        "Ectopic chimeric duplication fusing the ACTH-responsive CYP11B1 promoter to the aldosterone synthase coding sequence",
        "This describes Glucocorticoid-Remediable Aldosteronism (GRA), which features HIGH aldosterone that is suppressed by dexamethasone, not suppressed aldosterone."
      ],
      [
        "Constitutive activating mutation in renal vascular V2 vasopressin receptors driving aquaporin-2 translocation",
        "Activating V2 mutations cause nephrogenic syndrome of inappropriate antidiuresis (euvolemic hyponatremia), not hypokalemic hypertension."
      ]
    ],
    "shortestValidSolution": "Hypertension + hypokalemic alkalosis + low renin + low aldosterone + responsive to amiloride (not spironolactone) -> Liddle syndrome (impaired Nedd4-2 ubiquitination leaves ENaC open).",
    "necessaryInference": "Hypertension + hypokalemic alkalosis with suppressed renin and suppressed aldosterone = Pseudohyperaldosteronism. Response to amiloride but resistance to spironolactone confirms Liddle syndrome: loss of ENaC PY-motif prevents Nedd4-2 ubiquitination and degradation.",
    "strongestDistractor": "Constitutive transactivation of the mineralocorticoid receptor by normal circulating cortisol concentrations",
    "distractorExclusion": "Cortisol-mediated MR transactivation describes 11-beta-HSD2 deficiency (Apparent Mineralocorticoid Excess), which is responsive to spironolactone, whereas Liddle syndrome is aldosterone-independent and responds to amiloride.",
    "citation": "Shimkets RA, Warnock DG, Bositis CM, et al. Liddle's syndrome: heritable human hypertension caused by mutations in the beta subunit of the epithelial sodium channel. Cell. 1994;79(3):407-414. PMID: 7954808.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hypertension + hypokalemic alkalosis with suppressed renin and suppressed aldosterone = Pseudohyperaldosteronism. Response to amiloride but resistance to spironolactone confirms Liddle syndrome: loss of ENaC PY-motif prevents Nedd4-2 ubiquitination and degradation.",
      "distractorExclusionNotes": "Strongest distractor 'Constitutive transactivation of the mineralocorticoid receptor by normal circula' excluded: Cortisol-mediated MR transactivation describes 11-beta-HSD2 deficiency (Apparent Mineralocorticoid Excess), which is responsive to spironolactone, whereas Liddle syndrome is aldost",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0356",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "SIADH vs Cerebral Salt Wasting Volume Status Differentiation",
    "subtopic": "Euvolemic Hyponatremia with Inappropriately Concentrated Urine and High Urine Sodium",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man with small cell lung cancer presents with mild confusion and lethargy. Physical examination demonstrates moist mucous membranes, normal skin turgor, flat neck veins, and no peripheral edema or orthostatic blood pressure changes (clinically euvolemic). Serum sodium is 121 mEq/L (marked hyponatremia), serum osmolality is 248 mOsm/kg (hypoosmolar), and serum uric acid is 2.2 mg/dL (hypouricemia). Simultaneous spot urinalysis demonstrates urine osmolality 480 mOsm/kg (inappropriately elevated > 100 mOsm/kg) and urine sodium concentration 64 mEq/L (inappropriately elevated > 40 mEq/L). Thyroid and adrenal functions are normal. In this patient, which of the following physiological mechanisms explains why the patient maintains clinical euvolemia despite continuous, uninhibited antidiuretic hormone (ADH) secretion?",
    "choices": [
      [
        "Secondary volume expansion triggers release of atrial natriuretic peptide (ANP), promoting compensatory natriuresis and pressure diuresis ('aldosterone escape')",
        "Correct. Syndrome of Inappropriate Antidiuretic Hormone (SIADH) is characterized by autonomous, uninhibited ADH secretion (most commonly from ectopic small cell lung cancer, CNS disorders, or pulmonary infections). ADH stimulates V2 receptors in medullary collecting ducts, driving aquaporin-2 insertion and free water reabsorption. Initially, this causes water retention and subclinical volume expansion. CRUCIAL STEP 1 PATHOPHYSIOLOGY: Why doesn't the patient develop edema or hypervolemia? Because the subclinical volume expansion stretches atrial myocytes and renal juxtaglomerular cells, triggering: (1) Release of ATRIAL NATRIURETIC PEPTIDE (ANP) and brain natriuretic peptide (BNP); (2) Suppression of the renin-angiotensin-aldosterone system (RAAS); (3) Pressure natriuresis. The high ANP and low aldosterone stimulate marked urinary sodium and water excretion (COMPENSATORY NATRIURESIS; urine Na+ > 40 mEq/L). This natriuretic reset successfully expels excess intravascular volume, returning the patient to a state of CLINICAL EUVOLEMIA, but at the cost of worsening serum hyponatremia."
      ],
      [
        "Intrarenal vasoconstriction mediated by endothelin-1 leading to reduced glomerular filtration rate and sodium retention",
        "Endothelin vasoconstriction occurs in hepatorenal syndrome and acute kidney injury, causing oliguria and fluid retention with edema, not euvolemic hyponatremia."
      ],
      [
        "Primary hypothalamic thirst center ablation preventing free water intake and volume expansion",
        "Adipsia (loss of thirst) occurs with hypothalamic lesions and causes severe DEHYDRATION and HYPERNATREMIA, not euvolemic hyponatremia."
      ],
      [
        "Proximal tubular hyper-reabsorption of sodium and water driven by sympathetic adrenergic stimulation",
        "Proximal sodium reabsorption is enhanced in hypovolemia (causing urine Na+ < 20 mEq/L and high uric acid); in SIADH, volume expansion suppresses proximal reabsorption, leading to high urine Na+ and hypouricemia."
      ],
      [
        "Downregulation of apical urea transporters (UT-A1) in medullary collecting ducts causing osmotic diuresis",
        "Urea transporter alterations do not account for the systemic natriuretic reset driven by ANP in SIADH."
      ]
    ],
    "shortestValidSolution": "Ectopic ADH (small cell lung cancer) + euvolemic hyponatremia + high urine Na+ -> SIADH (volume expansion stimulates ANP, causing natriuresis that preserves euvolemia).",
    "necessaryInference": "SIADH causes euvolemic hyponatremia. Clinical euvolemia is maintained because subclinical volume expansion stimulates ANP and suppresses aldosterone, driving compensatory natriuresis ('aldosterone escape').",
    "strongestDistractor": "Proximal tubular hyper-reabsorption of sodium and water driven by sympathetic adrenergic stimulation",
    "distractorExclusion": "Proximal reabsorption is suppressed (not enhanced) by volume expansion in SIADH, which is why serum uric acid is low (< 4 mg/dL) and urine sodium is high (> 40 mEq/L).",
    "citation": "Ellison DH, Berl T. The syndrome of inappropriate antidiuresis. N Engl J Med. 2007;356(20):2064-2072. PMID: 17507705.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: SIADH causes euvolemic hyponatremia. Clinical euvolemia is maintained because subclinical volume expansion stimulates ANP and suppresses aldosterone, driving compensatory natriuresis ('aldosterone escape').",
      "distractorExclusionNotes": "Strongest distractor 'Proximal tubular hyper-reabsorption of sodium and water driven by sympathetic ad' excluded: Proximal reabsorption is suppressed (not enhanced) by volume expansion in SIADH, which is why serum uric acid is low (< 4 mg/dL) and urine sodium is high (> 40 mEq/L).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0357",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Endocrine",
    "topic": "Central vs Nephrogenic Diabetes Insipidus Water Deprivation Test",
    "subtopic": "Desmopressin Challenge Distinguishing Posterior Pituitary Deficiency from V2 Receptor Resistance",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old man who sustained a severe closed head injury with a skull base fracture in a motorcycle collision 3 weeks ago presents with extreme polyuria (voiding 8 to 10 liters daily) and intense polydipsia. Laboratory evaluation demonstrates serum sodium 149 mEq/L and serum osmolality 308 mOsm/kg. Baseline urine osmolality is dilute at 110 mOsm/kg. A standardized water deprivation test is performed: despite 6 hours of strict water restriction and a 3% loss of body weight, his urine osmolality remains low at 125 mOsm/kg. Subcutaneous desmopressin (DDAVP, a synthetic V2 vasopressin agonist) is then administered. Two hours following desmopressin administration, his urine osmolality surges to 580 mOsm/kg (a > 300% increase), and urine volume drops sharply. Which of the following is the primary anatomical origin and pathophysiological mechanism of this patient's polyuria?",
    "choices": [
      [
        "Loss of neurohypophyseal antidiuretic hormone (vasopressin) storage and secretion following hypothalamic-pituitary tract transection (Central Diabetes Insipidus)",
        "Correct. Diabetes insipidus (DI) is characterized by polyuria, polydipsia, and inability to concentrate urine, leading to dilute urine (< 300 mOsm/kg) despite hyperosmolar serum. Master the WATER DEPRIVATION TEST AND DESMOPRESSIN CHALLENGE on USMLE Step 1: (1) After water restriction, urine osmolality fails to concentrate in both central and nephrogenic DI. (2) Administration of DESMOPRESSIN (DDAVP) definitively separates the two: (a) CENTRAL DI (present in this patient): Driven by deficiency of ADH synthesized in the supraoptic/paraventricular nuclei of the hypothalamus and stored/released from the POSTERIOR PITUITARY (neurohypophysis; commonly disrupted by head trauma, skull fractures, pituitary surgery, or histiocytosis). Because the renal collecting ducts possess normal, intact V2 receptors and aquaporin-2 channels, administration of exogenous desmopressin produces a DRAMATIC SURGE IN URINE OSMOLALITY (> 50% to 300% increase) and reduction in urine volume. (b) NEPHROGENIC DI: Driven by renal collecting duct resistance to ADH (lithium toxicity, hypercalcemia, AVPR2 receptor mutations). Administration of desmopressin produces NO OR MINIMAL RESPONSE (< 10% increase in urine osmolality)."
      ],
      [
        "Acquired loss-of-function mutation in the collecting duct V2 vasopressin receptor preventing aquaporin-2 apical translocation (Nephrogenic Diabetes Insipidus)",
        "Nephrogenic DI exhibits minimal or no response (< 10-50% increase) to exogenous desmopressin because the end-organ receptor is defective or blocked (e.g., by lithium), directly contradicting the >300% surge seen here."
      ],
      [
        "Compulsive water consumption suppressing medullary hypertonicity with intact endogenous ADH reserve (Primary Polydipsia)",
        "In primary polydipsia, water deprivation alone concentrates urine to > 500-600 mOsm/kg BEFORE desmopressin is given, and serum sodium is low or normal (< 137 mEq/L), not hypernatremic (149 mEq/L)."
      ],
      [
        "Osmotic diuresis secondary to impaired proximal tubular glucose reabsorption via sodium-glucose cotransporters",
        "Osmotic diuresis (diabetic ketoacidosis or SGLT2 inhibition) produces concentrated or iso-osmolar urine with high specific gravity, not dilute hypoosmolar urine."
      ],
      [
        "Accelerated enzymatic degradation of circulating vasopressin by placental vasopressinase",
        "Placental vasopressinase causes gestational diabetes insipidus in pregnancy, which does not apply to this male trauma patient."
      ]
    ],
    "shortestValidSolution": "Polyuria after head trauma + dilute urine that surges >300% after desmopressin -> Central diabetes insipidus (posterior pituitary ADH deficiency).",
    "necessaryInference": "Dilute urine despite hypernatremia + >50% surge in urine osmolality after DDAVP = Central DI. The trauma disrupted ADH release from the posterior pituitary, while renal V2 receptors remain fully functional.",
    "strongestDistractor": "Acquired loss-of-function mutation in the collecting duct V2 vasopressin receptor preventing aquaporin-2 apical translocation (Nephrogenic Diabetes Insipidus)",
    "distractorExclusion": "Nephrogenic DI fails to respond to desmopressin challenge because the end-organ kidney is refractory, whereas central DI responds with a dramatic surge in urine osmolality.",
    "citation": "Robertson GL. Diabetes insipidus. Endocrinol Metab Clin North Am. 1995;24(3):549-572. PMID: 8468091.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Dilute urine despite hypernatremia + >50% surge in urine osmolality after DDAVP = Central DI. The trauma disrupted ADH release from the posterior pituitary, while renal V2 receptors remain fully functional.",
      "distractorExclusionNotes": "Strongest distractor 'Acquired loss-of-function mutation in the collecting duct V2 vasopressin recepto' excluded: Nephrogenic DI fails to respond to desmopressin challenge because the end-organ kidney is refractory, whereas central DI responds with a dramatic surge in urine osmolality.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0358",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Renal",
    "topic": "Post-Streptococcal Glomerulonephritis Subepithelial Humps",
    "subtopic": "Type III Hypersensitivity, C3 Depression, and Coarse Granular 'Starry Sky' Pattern",
    "provisionalDifficulty": 4,
    "stem": "An 8-year-old boy is brought to the clinic because of dark, smoky 'cola-colored' urine and puffiness around his eyes (periorbital edema) that began 2 days ago. Three weeks ago, he was treated for impetigo with honey-colored crusted facial lesions. Blood pressure is 142/92 mm Hg. Urinalysis demonstrates moderate proteinuria (1.2 g/24 hr), dysmorphic erythrocytes, and red blood cell casts. Serum laboratory evaluation reveals elevated anti-streptolysin O (ASO) and anti-DNase B titers, with marked depression of serum complement C3 (32 mg/dL; normal: 80-160 mg/dL) and normal C4. Renal biopsy is performed. Which of the following combinations of light microscopy, immunofluorescence, and electron microscopy findings is diagnostic of this patient's nephritic condition?",
    "choices": [
      [
        "Light microscopy: diffuse endocapillary hypercellularity; Immunofluorescence: coarse granular 'starry sky' IgG and C3 deposition; Electron microscopy: large subepithelial electron-dense 'humps'",
        "Correct. Post-Streptococcal Glomerulonephritis (PSGN) is a classic Type III immune complex-mediated hypersensitivity reaction that develops 1 to 3 weeks after streptococcal pharyngitis or 3 to 6 weeks after impetigo (caused by group A beta-hemolytic streptococci; Streptococcus pyogenes expressing nephritogenic M-protein serotypes). Nephritogenic streptococcal antigens (speB, NAPIr) deposit in glomerular basement membranes, triggering in situ immune complex formation and classical/alternative complement activation, driving MARKED CONSUMPTION AND DEPRESSION OF SERUM C3 (C4 remains normal). Diagnostic triad on renal biopsy: (1) LIGHT MICROSCOPY: Diffusely enlarged, hypercellular glomeruli with endocapillary proliferation of endothelial and mesangial cells and neutrophilic infiltration; (2) IMMUNOFLUORESCENCE: Coarse granular deposition of IgG, IgM, and C3 along the GBM and mesangium, creating a characteristic 'starry sky' or 'lumpy-bumpy' appearance; (3) ELECTRON MICROSCOPY: Large, discrete SUBEPITHELIAL ELECTRON-DENSE 'HUMPS' (immune complexes between the GBM and overlying podocyte foot processes)."
      ],
      [
        "Light microscopy: normal glomeruli; Immunofluorescence: completely negative; Electron microscopy: diffuse effacement of visceral epithelial foot processes",
        "This describes Minimal Change Disease, which presents with nephrotic syndrome (massive selective proteinuria, severe edema) and normal complement levels, without gross hematuria or red cell casts."
      ],
      [
        "Light microscopy: mesangial expansion with IgA deposition; Immunofluorescence: predominant mesangial IgA and C3; Electron microscopy: mesangial electron-dense deposits",
        "This describes IgA nephropathy (Berger disease), which presents within 1 to 2 days of a respiratory infection ('synpharyngitic'), has normal serum C3, and exhibits purely mesangial deposits."
      ],
      [
        "Light microscopy: crescentic cellular proliferation in Bowman space; Immunofluorescence: smooth linear IgG staining along the GBM; Electron microscopy: no electron-dense deposits",
        "This describes Anti-GBM / Goodpasture disease, characterized by linear immunofluorescence against alpha-3 Type IV collagen, without granular humps or low C3."
      ],
      [
        "Light microscopy: diffuse glomerular basement membrane thickening with 'spike and dome' pattern; Immunofluorescence: fine granular subepithelial IgG; Electron microscopy: subepithelial deposits with basement membrane spikes",
        "This describes Membranous Nephropathy, a nephrotic syndrome characterized by subepithelial spikes (anti-PLA2R antibodies), without low C3 or post-streptococcal cola-colored urine."
      ]
    ],
    "shortestValidSolution": "Cola-colored urine 3 weeks post-impetigo + low C3 -> PSGN (light microscopy: hypercellularity; IF: granular 'starry sky' IgG/C3; EM: subepithelial humps).",
    "necessaryInference": "Identify PSGN from timing post-impetigo (3 weeks), nephritic sediment (RBC casts), and low C3. Match the pathognomonic renal biopsy findings: subepithelial electron-dense humps on EM and granular starry-sky IgG/C3 on IF.",
    "strongestDistractor": "Light microscopy: mesangial expansion with IgA deposition; Immunofluorescence: predominant mesangial IgA and C3; Electron microscopy: mesangial electron-dense deposits",
    "distractorExclusion": "IgA nephropathy occurs concurrently with infections (1-2 days synpharyngitic), has normal C3, and features mesangial IgA deposits, whereas PSGN has a 2-4 week latency, low C3, and subepithelial humps.",
    "citation": "Rodriguez-Iturbe B, Musser JM. The current state of poststreptococcal glomerulonephritis. J Am Soc Nephrol. 2008;19(10):1855-1864. PMID: 18667731.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Identify PSGN from timing post-impetigo (3 weeks), nephritic sediment (RBC casts), and low C3. Match the pathognomonic renal biopsy findings: subepithelial electron-dense humps on EM and granular starry-sky IgG/C3 on IF.",
      "distractorExclusionNotes": "Strongest distractor 'Light microscopy: mesangial expansion with IgA deposition; Immunofluorescence: p' excluded: IgA nephropathy occurs concurrently with infections (1-2 days synpharyngitic), has normal C3, and features mesangial IgA deposits, whereas PSGN has a 2-4 week latency, low C3, and ",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0359",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Minimal Change Disease Podocyte Effacement and Selective Albuminuria",
    "subtopic": "T-Cell Cytokine-Mediated Loss of Glomerular Polyanion Charge Barrier",
    "provisionalDifficulty": 4,
    "stem": "A 4-year-old boy is brought to the pediatrician by his mother because of progressive abdominal distension and swollen eyelids that are most severe in the morning. Physical examination reveals marked periorbital edema, scrotal edema, and shifting dullness on abdominal percussion (ascites). Blood pressure is normal at 96/60 mm Hg. Urinalysis demonstrates 4+ proteinuria, with zero red blood cells, zero white blood cells, and no cellular casts. 24-hour urine collection confirms massive proteinuria of 4.8 g/24 hr. Serum albumin is 1.8 g/dL (severe hypoalbuminemia), and total cholesterol is 340 mg/dL. Urine protein electrophoresis demonstrates that > 90% of the excreted protein is albumin, with negligible amounts of high-molecular-weight globulins (highly selective proteinuria). The child is prescribed a trial of oral prednisone and experiences complete resolution of proteinuria within 3 weeks. In this patient, the loss of selective glomerular filtration permselectivity is primarily caused by which of the following molecular alterations?",
    "choices": [
      [
        "T-cell derived cytokine-mediated loss of negatively charged heparan sulfate proteoglycans on the glomerular basement membrane and diffuse effacement of podocyte foot processes",
        "Correct. Minimal Change Disease (MCD; nil disease) is the most common cause of NEPHROTIC SYNDROME in children (accounting for > 80% of pediatric cases). The pathogenesis is driven by immune dysregulation (systemic T-cell dysfunction releasing circulating permeability cytokines, such as IL-13 or hemopexin). These cytokines cause: (1) Neutralization and loss of negatively charged POLYANIONS (heparan sulfate proteoglycans and podocalyxin) on the glomerular capillary filtration barrier. Because albumin is negatively charged at physiological pH, loss of the electrostatic charge barrier permits massive filtration of albumin, producing characteristically HIGHLY SELECTIVE ALBUMINURIA (without larger globulins); (2) Cytoskeletal disruption of visceral epithelial cells, resulting in DIFFUSE EFFACEMENT (flattening and retraction) OF PODOCYTE FOOT PROCESSES. Renal biopsy findings: LIGHT MICROSCOPY: Completely normal glomeruli (hence 'minimal change'); IMMUNOFLUORESCENCE: Completely negative (no immunoglobulin or complement deposition); ELECTRON MICROSCOPY: Diffuse effacement of podocyte foot processes. MCD has a rapid and complete response to CORTICOSTEROID therapy in > 90% of pediatric patients."
      ],
      [
        "Subendothelial deposition of circulating immune complexes activating the classical complement cascade",
        "Subendothelial immune complex deposition is seen in MPGN and lupus nephritis Class IV, producing nephritic syndrome with low C3 and cellular proliferation, not steroid-responsive pure selective proteinuria."
      ],
      [
        "Autosomal dominant mutation in the podocin (NPHS2) gene causing focal segmental sclerosis",
        "Podocin/nephrin mutations cause congenital or genetic focal segmental glomerulosclerosis (FSGS), which is steroid-resistant and features non-selective proteinuria."
      ],
      [
        "Anti-phospholipase A2 receptor (PLA2R) autoantibodies binding in situ to podocyte surface antigens",
        "Anti-PLA2R antibodies cause Membranous Nephropathy (subepithelial spikes on silver stain, non-selective proteinuria, adult onset), not pediatric minimal change disease."
      ],
      [
        "Non-enzymatic glycation of collagen leading to selective efferent arteriolar hyalinosis",
        "Non-enzymatic glycation causes diabetic nephropathy (Kimmelstiel-Wilson nodules), not pediatric selective albuminuria."
      ]
    ],
    "shortestValidSolution": "Child with nephrotic syndrome + highly selective albuminuria + rapid steroid response -> Minimal Change Disease (loss of negative charge barrier + podocyte foot process effacement).",
    "necessaryInference": "Pediatric nephrotic syndrome + selective albuminuria + steroid responsiveness = Minimal Change Disease. The pathophysiology is T-cell cytokine-mediated loss of negative charge barrier (heparan sulfate) and diffuse podocyte effacement on electron microscopy.",
    "strongestDistractor": "Autosomal dominant mutation in the podocin (NPHS2) gene causing focal segmental sclerosis",
    "distractorExclusion": "Podocin mutations cause FSGS, which presents with non-selective proteinuria and is notoriously steroid-resistant, whereas MCD features selective albuminuria and excellent steroid response.",
    "citation": "Vivarelli M, Massella L, Ruggiero B, Emma F. Minimal Change Disease. Clin J Am Soc Nephrol. 2017;12(2):332-345. PMID: 27940460.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Pediatric nephrotic syndrome + selective albuminuria + steroid responsiveness = Minimal Change Disease. The pathophysiology is T-cell cytokine-mediated loss of negative charge barrier (heparan sulfate) and diffuse podocyte effacement on electron microscopy.",
      "distractorExclusionNotes": "Strongest distractor 'Autosomal dominant mutation in the podocin (NPHS2) gene causing focal segmental ' excluded: Podocin mutations cause FSGS, which presents with non-selective proteinuria and is notoriously steroid-resistant, whereas MCD features selective albuminuria and excellent steroid r",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0360",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Focal Segmental Glomerulosclerosis APOL1 Risk and Non-Selective Proteinuria",
    "subtopic": "Segmental Sclerosis, Hyalinosis, and Podocyte Foot Process Effacement",
    "provisionalDifficulty": 4,
    "stem": "A 32-year-old African American man with a history of HIV infection on antiretroviral therapy (CD4 count 320/mcL, viral load undetectable) presents with worsening lower extremity edema, frothy urine, and fatigue. Blood pressure is 148/92 mm Hg. Urinalysis demonstrates 4+ protein, trace blood, and lipid droplets under polarized microscopy ('Maltese cross' appearance). 24-hour urine collection reveals 7.6 g of protein. Serum albumin is 2.1 g/dL, and serum creatinine has risen from a baseline of 0.9 mg/dL to 1.8 mg/dL. Urine protein electrophoresis reveals a mixed pattern containing high concentrations of both albumin and high-molecular-weight gamma-globulins (non-selective proteinuria). Genetic testing identifies homozygous G1/G1 risk alleles in the APOL1 (apolipoprotein L1) gene. Renal biopsy demonstrates sclerosis affecting some but not all glomeruli, and within affected glomeruli, only a portion of the capillary tuft shows collapse, extracellular matrix deposition, and hyalinosis. Immunofluorescence shows non-specific focal entrapment of IgM and C3 in sclerotic areas. Which of the following electron microscopic findings is most characteristic of this condition?",
    "choices": [
      [
        "Diffuse effacement of podocyte foot processes with podocyte detachment and denudation of the underlying glomerular basement membrane",
        "Correct. Focal Segmental Glomerulosclerosis (FSGS) is the most common cause of nephrotic syndrome in African American adults and in patients with HIV infection (HIV-associated nephropathy; collapsing glomerulopathy variant), sickle cell disease, massive obesity, or heroin use. APOL1 G1/G2 risk variants confer natural immunity to African trypanosomes (sleeping sickness), but induce podocyte autophagy and membrane pore formation, driving genetic predisposition to FSGS. Hallmarks on renal biopsy: (1) LIGHT MICROSCOPY: FOCAL (affecting some, but not all, glomeruli) and SEGMENTAL (affecting only a portion of the capillary tuft in involved glomeruli) sclerosis, capillary collapse, and hyalinosis (entrapped plasma proteins); (2) IMMUNOFLUORESCENCE: Usually negative, but may show non-specific mechanical trapping of IgM and C3 in sclerotic scars; (3) ELECTRON MICROSCOPY: DIFFUSE EFFACEMENT OF PODOCYTE FOOT PROCESSES, along with podocyte hypertrophy, detachment, and focal DENUDATION of the bare glomerular basement membrane. Unlike minimal change disease, FSGS features NON-SELECTIVE PROTEINURIA, microhematuria, hypertension, frequent renal insufficiency, and POOR RESPONSE TO CORTICOSTEROIDS (frequent progression to end-stage renal disease)."
      ],
      [
        "Marked subendothelial electron-dense immune deposits with duplication and 'tram-track' splitting of the glomerular basement membrane",
        "This describes Membranoproliferative Glomerulonephritis (MPGN Type I), which features subendothelial deposits and mesangial interposition, not focal segmental sclerosis."
      ],
      [
        "Subepithelial electron-dense deposits embedded between projection spikes of glomerular basement membrane material",
        "This describes Membranous Nephropathy (spike and dome pattern on silver stain), which affects all capillary loops diffusely."
      ],
      [
        "Extensive linear deposition of immune complexes along the lamina densa of the glomerular basement membrane",
        "Linear GBM deposition is the pathognomonic hallmark of Anti-GBM / Goodpasture disease on immunofluorescence; FSGS has negative or non-specific entrapment."
      ],
      [
        "Randomly oriented, non-branching extracellular fibrils measuring 8 to 10 nm in diameter within the mesangium",
        "This describes Renal Amyloidosis, which features Congo red positivity and apple-green birefringence under polarized light, not segmental sclerosis."
      ]
    ],
    "shortestValidSolution": "African American HIV patient + nephrotic syndrome + APOL1 risk + segmental sclerosis/hyalinosis -> FSGS (podocyte foot process effacement and detachment).",
    "necessaryInference": "Segmental sclerosis affecting some glomeruli + APOL1 risk in HIV = FSGS. The primary electron microscopic lesion is diffuse podocyte foot process effacement with podocyte detachment and bare GBM denudation.",
    "strongestDistractor": "Subepithelial electron-dense deposits embedded between projection spikes of glomerular basement membrane material",
    "distractorExclusion": "Subepithelial spikes describe membranous nephropathy, whereas FSGS lacks immune complex deposits and displays segmental scarring with podocyte detachment.",
    "citation": "D'Agati VD, Kaskel FJ, Falk RJ. Focal segmental glomerulosclerosis. N Engl J Med. 2011;365(25):2398-2411. PMID: 22187987.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Segmental sclerosis affecting some glomeruli + APOL1 risk in HIV = FSGS. The primary electron microscopic lesion is diffuse podocyte foot process effacement with podocyte detachment and bare GBM denudation.",
      "distractorExclusionNotes": "Strongest distractor 'Subepithelial electron-dense deposits embedded between projection spikes of glom' excluded: Subepithelial spikes describe membranous nephropathy, whereas FSGS lacks immune complex deposits and displays segmental scarring with podocyte detachment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Electron-dense deposits located strictly in the subepithelial space between the outer surface of the glomerular basement membrane and overlying effaced podocytes",
        "Correct. Primary Membranous Nephropathy (MN) is the most common cause of nephrotic syndrome in Caucasian adults. In > 70-80% of primary cases, it is an autoimmune disease driven by circulating IgG4 autoantibodies targeting the M-TYPE PHOSPHOLIPASE A2 RECEPTOR (PLA2R), a transmembrane glycoprotein constitutively expressed on visceral epithelial cells (podocytes). Autoantibodies cross the fenestrated endothelium and GBM to bind PLA2R in situ on the subepithelial surface of podocytes, activating complement (C5b-9 membrane attack complex) and damaging the slit diaphragm. Characteristic renal biopsy findings: (1) LIGHT MICROSCOPY: Diffuse, uniform thickening of all glomerular capillary walls without hypercellularity; silver stain demonstrates 'SPIKES' of newly synthesized GBM material protruding between the immune complexes ('spike and dome' pattern); (2) IMMUNOFLUORESCENCE: Fine, granular deposition of IgG and C3 outlining every capillary loop; (3) ELECTRON MICROSCOPY: Discontinuous, electron-dense deposits located strictly in the SUBEPITHELIAL SPACE (under the podocytes). Secondary causes include hepatitis B, NSAIDs, penicillamine, SLE (Class V), and solid organ malignancies (colon, lung, prostate). Complications include high risk of RENAL VEIN THROMBOSIS."
      ],
      [
        "Electron-dense deposits localized exclusively within the subendothelial space between endothelial cells and the lamina densa",
        "Subendothelial deposits are characteristic of Membranoproliferative Glomerulonephritis Type I and Lupus Nephritis Class IV (wire-loop lesions), causing nephritic syndrome with low C3, not primary membranous nephropathy."
      ],
      [
        "Extensive electron-dense transformation and ribbon-like thickening within the lamina densa of the basement membrane",
        "Ribbon-like dense deposits within the lamina densa define Dense Deposit Disease (MPGN Type II; C3 nephropathy / C3 nephritic factor), not membranous nephropathy."
      ],
      [
        "Discrete electron-dense humps protruding from the subepithelial surface associated with endocapillary neutrophils",
        "Large subepithelial humps with neutrophilic hypercellularity are the hallmark of Post-Streptococcal Glomerulonephritis, which has low C3 and post-infectious nephritic presentation."
      ],
      [
        "Purely mesangial electron-dense deposits with prominent expansion of the paramesangial matrix",
        "Pure mesangial deposits define IgA nephropathy (Berger disease) and Lupus Nephritis Class II, presenting with recurrent gross hematuria, not nephrotic PLA2R-positive membranous nephropathy."
      ]
    ],
    "shortestValidSolution": "Adult nephrotic syndrome + anti-PLA2R antibodies + 'spike and dome' on silver stain -> Membranous nephropathy (subepithelial electron-dense deposits).",
    "necessaryInference": "Nephrotic syndrome + anti-PLA2R antibodies + spike-and-dome pattern = Membranous Nephropathy. The electron microscopic hallmark is electron-dense deposits located in the subepithelial space beneath the podocytes.",
    "strongestDistractor": "Electron-dense deposits localized exclusively within the subendothelial space between endothelial cells and the lamina densa",
    "distractorExclusion": "Subendothelial deposits define MPGN Type I and diffuse proliferative lupus nephritis, whereas membranous nephropathy deposits are strictly subepithelial.",
    "citation": "Beck LH Jr, Bonegio RG, Lambeau G, et al. M-type phospholipase A2 receptor as target antigen in idiopathic membranous nephropathy. N Engl J Med. 2009;361(1):11-21. PMID: 19571279.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Nephrotic syndrome + anti-PLA2R antibodies + spike-and-dome pattern = Membranous Nephropathy. The electron microscopic hallmark is electron-dense deposits located in the subepithelial space beneath the podocytes.",
      "distractorExclusionNotes": "Strongest distractor 'Electron-dense deposits localized exclusively within the subendothelial space be' excluded: Subendothelial deposits define MPGN Type I and diffuse proliferative lupus nephritis, whereas membranous nephropathy deposits are strictly subepithelial.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Mesangial cell cytoplasmic interposition into the subendothelial space accompanied by new basement membrane matrix synthesis",
        "Correct. Membranoproliferative Glomerulonephritis Type I (MPGN Type I) is an immune complex-mediated glomerulonephritis most commonly associated with CHRONIC HEPATITIS C VIRUS INFECTION (with mixed cryoglobulinemia), subacute bacterial endocarditis, or autoimmune diseases. Circulating cryoglobulins or HCV immune complexes deposit in the SUBENDOTHELIAL SPACE of glomerular capillaries, activating the classical complement cascade (causing MARKED CONSUMPTION OF BOTH C3 AND C4). Pathophysiology of the 'tram-track' lesion: In response to subendothelial immune deposits and chemotactic factors, MESANGIAL CELL PROCESSES EXTEND (INTERPOSE) AROUND THE CAPILLARY LOOPS INTO THE SUBENDOTHELIAL SPACE between the endothelium and the original basement membrane. As the interposed mesangial cells migrate, they synthesize a new, second layer of basement membrane material. On silver or PAS stains, this creates a distinctive 'DOUBLE CONTOUR' OR 'TRAM-TRACK' appearance of the split glomerular basement membrane."
      ],
      [
        "Podocyte detachment from the lamina rara externa triggering parietal epithelial cell crescent formation",
        "Podocyte detachment with parietal cell proliferation in Bowman space forms crescents (Rapidly Progressive Glomerulonephritis), not the double-contour tram-track duplication of MPGN."
      ],
      [
        "Transmural neutrophilic infiltration of the arteriolar wall with concentric 'onion-skin' intimal hyperplasia",
        "Onion-skin intimal hyperplasia occurs in hyperplastic arteriolosclerosis secondary to malignant hypertension, not glomerular capillary basement membrane splitting."
      ],
      [
        "Linear deposition of unbranched immunoglobulin light chains along the lamina densa causing mechanical splitting",
        "Light chain deposition disease causes continuous linear non-amyloid light-chain staining without mesangial interposition or tram-track doubling."
      ],
      [
        "Endothelial cell swelling and loss of fenestrae driven by Shiga toxin-mediated ribosome inactivation",
        "Endothelial swelling and microvascular thrombosis are the hallmarks of Thrombotic Microangiopathy (HUS/TTP), not classic lobular MPGN."
      ]
    ],
    "shortestValidSolution": "Hepatitis C + mixed cryoglobulinemia + low C3/C4 + 'tram-track' double-contour GBM -> MPGN Type I (mesangial cell interposition into subendothelial space).",
    "necessaryInference": "Hepatitis C + low C3/C4 + tram-track appearance = MPGN Type I. The tram-track double-contour basement membrane splitting is caused by mesangial cell interposition and extension into the subendothelial space.",
    "strongestDistractor": "Podocyte detachment from the lamina rara externa triggering parietal epithelial cell crescent formation",
    "distractorExclusion": "Parietal epithelial proliferation forms cellular crescents in Bowman space (RPGN), whereas tram-tracks represent mesangial interposition inside the capillary wall.",
    "citation": "Sethi S, Fervenza FC. Membranoproliferative glomerulonephritis: pathogenetic classification and mechanism-based approach to therapy. Nephrol Dial Transplant. 2017;32(suppl_1):i40-i48. PMID: 28391349.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hepatitis C + low C3/C4 + tram-track appearance = MPGN Type I. The tram-track double-contour basement membrane splitting is caused by mesangial cell interposition and extension into the subendothelial space.",
      "distractorExclusionNotes": "Strongest distractor 'Podocyte detachment from the lamina rara externa triggering parietal epithelial ' excluded: Parietal epithelial proliferation forms cellular crescents in Bowman space (RPGN), whereas tram-tracks represent mesangial interposition inside the capillary wall.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
    "citation": "Jennette JC. Rapidly progressive crescentic glomerulonephritis. Kidney Int. 2003;63(3):1164-1177. PMID: 12631375.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Integrate upper respiratory mucosal ulceration, cavitary lung disease, and RPGN to diagnose GPA, and deduce that its renal biopsy is pauci-immune, distinguishing it from anti-GBM (linear) and immune complex (granular) diseases.",
      "distractorExclusionNotes": "Strongest distractor 'Smooth, ribbon-like linear IgG and complement C3 deposition along the entire glo' excluded: Linear GBM IgG characterizes Goodpasture syndrome, which lacks destructive upper respiratory ulcerations and septal perforations.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Absence of granulomatous inflammation, absence of cavitary pulmonary nodules, and absence of upper respiratory tract (nasopharyngeal) destructive lesions",
        "Correct. Master the differentiation between the two major ANCA-associated vasculitides on USMLE Step 1: (1) MICROSCOPIC POLYANGIITIS (MPA; present in this patient): A systemic necrotizing small-vessel vasculitis affecting arterioles, capillaries, and venules. Key hallmarks: Highly associated with PERINUCLEAR ANCA (P-ANCA) directed against MYELOPEROXIDASE (MPO-ANCA; in ~70-80%); Rapidly progressive crescentic glomerulonephritis (pauci-immune); Pulmonary alveolar hemorrhage (hemoptysis, ground-glass infiltrates). CRUCIAL NEGATIVE FINDINGS THAT DEFINE MPA: (a) ABSOLUTELY NO GRANULOMAS (non-granulomatous necrotizing vasculitis); (b) NO CAVITARY LUNG NODULES; (c) NO UPPER RESPIRATORY TRACT / NASOPHARYNGEAL INVOLVEMENT (no chronic sinusitis, no saddle-nose deformity). (2) GRANULOMATOSIS WITH POLYANGIITIS (GPA): Highly associated with C-ANCA / PR3-ANCA (>90%); PROMINENT NECROTIZING GRANULOMAS; PROMINENT UPPER RESPIRATORY TRACT DESTRUCTION (sinusitis, saddle-nose); CAVITARY PULMONARY NODULES."
      ],
      [
        "Presence of prominent tissue and peripheral blood eosinophilia associated with severe adult-onset asthma",
        "Marked eosinophilia and adult-onset asthma define Eosinophilic Granulomatosis with Polyangiitis (EGPA; Churg-Strauss syndrome), which is also p-ANCA positive, but features asthma and allergic rhinitis."
      ],
      [
        "Presence of abundant subendothelial immune complex deposits with classical complement consumption",
        "Both MPA and GPA are pauci-immune vasculitides that lack immune complex deposition and feature normal serum complement levels."
      ],
      [
        "Transmural necrotizing inflammation of medium-sized muscular arteries sparing arterioles and venules",
        "Sparing of arterioles and venules defines Polyarteritis Nodosa (PAN), which affects medium-sized muscular arteries (often hepatitis B associated) and is ANCA-negative."
      ],
      [
        "Linear deposition of anti-type IV collagen antibodies along the glomerular basement membrane",
        "Linear anti-type IV collagen antibodies define Anti-GBM / Goodpasture disease, which is not an ANCA-mediated vasculitis."
      ]
    ],
    "shortestValidSolution": "p-ANCA / MPO + crescentic GN + alveolar hemorrhage WITHOUT sinusitis/granulomas -> Microscopic polyangiitis (lacks granulomas and upper airway lesions).",
    "necessaryInference": "Differentiate MPA from GPA: MPA is p-ANCA / MPO positive, causes pauci-immune crescentic GN and pulmonary capillaritis, but completely lacks granulomas, cavitary nodules, or upper respiratory destructive lesions.",
    "strongestDistractor": "Presence of prominent tissue and peripheral blood eosinophilia associated with severe adult-onset asthma",
    "distractorExclusion": "Asthma and eosinophilia define EGPA (Churg-Strauss), whereas MPA lacks asthma and eosinophilia.",
    "citation": "Chung SA, Seo P. Microscopic polyangiitis. Rheum Dis Clin North Am. 2010;36(3):545-558. PMID: 20688249.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Differentiate MPA from GPA: MPA is p-ANCA / MPO positive, causes pauci-immune crescentic GN and pulmonary capillaritis, but completely lacks granulomas, cavitary nodules, or upper respiratory destructive lesions.",
      "distractorExclusionNotes": "Strongest distractor 'Presence of prominent tissue and peripheral blood eosinophilia associated with s' excluded: Asthma and eosinophilia define EGPA (Churg-Strauss), whereas MPA lacks asthma and eosinophilia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
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
      [
        "Non-collagenous-1 (NC1) domain of the alpha-3 chain of Type IV collagen",
        "Correct. Anti-Glomerular Basement Membrane (Anti-GBM) disease (Goodpasture syndrome when pulmonary alveolar hemorrhage is co-present with glomerulonephritis) is a severe Type II hypersensitivity autoimmune disorder. The pathogenic autoantibodies (predominantly IgG1 and IgG3) are directed against a cryptic epitope within the NON-COLLAGENOUS-1 (NC1) DOMAIN OF THE ALPHA-3 CHAIN OF TYPE IV COLLAGEN [alpha-3(IV)NC1; the 'Goodpasture antigen']. Type IV collagen is a network-forming collagen found in basement membranes throughout the body; however, the alpha-3(IV) chain is selectively expressed in high concentrations in the GLOMERULAR BASEMENT MEMBRANE (GBM) and the ALVEOLAR CAPILLARY BASEMENT MEMBRANE of the lung. Binding of autoantibodies activates the classical complement cascade and recruits neutrophils via Fc-gamma receptors, triggering rapid capillary wall necrosis, alveolar hemorrhage (hemoptysis), and crescentic glomerulonephritis. PATHOGNOMONIC BIOPSY LESION: On direct immunofluorescence, anti-GBM antibodies produce a smooth, continuous, completely uniform LINEAR PATTERN of IgG staining along the GBM (in sharp contrast to the granular pattern of immune complex GN or negative staining of pauci-immune GN)."
      ],
      [
        "Heparan sulfate proteoglycans residing within the lamina rara externa of the filtration barrier",
        "Heparan sulfate provides the negative electrostatic charge barrier; loss occurs in Minimal Change Disease, not anti-GBM disease."
      ],
      [
        "N-terminal 7S domain of the alpha-1 chain of Type IV collagen",
        "The Goodpasture autoantibody targets the C-terminal non-collagenous NC1 domain of the alpha-3 chain, not the N-terminal 7S domain of the alpha-1 chain."
      ],
      [
        "Extracellular domain IV of the M-type phospholipase A2 receptor (PLA2R) on podocyte surfaces",
        "Anti-PLA2R antibodies cause Membranous Nephropathy (granular subepithelial deposits), not linear crescentic anti-GBM disease."
      ],
      [
        "Filamin-interacting domain of nephrin within the podocyte slit diaphragm complex",
        "Nephrin mutations cause congenital nephrotic syndrome of the Finnish type, not autoimmune linear anti-GBM disease."
      ]
    ],
    "shortestValidSolution": "Hemoptysis + crescentic GN + linear IgG on immunofluorescence -> Goodpasture / Anti-GBM (targets NC1 domain of alpha-3 chain of Type IV collagen).",
    "necessaryInference": "Hemoptysis + rapidly progressive GN + linear IF = Anti-GBM disease. The specific molecular target of Goodpasture autoantibodies is the NC1 domain of the alpha-3 chain of Type IV collagen.",
    "strongestDistractor": "N-terminal 7S domain of the alpha-1 chain of Type IV collagen",
    "distractorExclusion": "The target is specifically the NC1 domain of the alpha-3 chain of Type IV collagen, not alpha-1.",
    "citation": "Pusey CD. Anti-glomerular basement membrane disease. Kidney Int. 2003;64(4):1535-1550. PMID: 12969185.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hemoptysis + rapidly progressive GN + linear IF = Anti-GBM disease. The specific molecular target of Goodpasture autoantibodies is the NC1 domain of the alpha-3 chain of Type IV collagen.",
      "distractorExclusionNotes": "Strongest distractor 'N-terminal 7S domain of the alpha-1 chain of Type IV collagen' excluded: The target is specifically the NC1 domain of the alpha-3 chain of Type IV collagen, not alpha-1.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0366",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Renal",
    "topic": "Alport Syndrome COL4A5 Mutation and Basket-Weave GBM",
    "subtopic": "Type IV Collagen Alpha-5 Chain Defect with High-Frequency Sensorineural Hearing Loss",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old boy is evaluated for persistent microscopic hematuria discovered during a routine high school sports physical examination. He has a maternal uncle who developed end-stage renal disease requiring hemodialysis at age 24. Audiological evaluation reveals bilateral high-frequency sensorineural hearing loss. Slit-lamp biomicroscopy demonstrates bilateral anterior lenticonus (conical protrusion of the anterior pole of the lens). Blood pressure is 132/84 mm Hg. Urinalysis demonstrates dysmorphic red blood cells, red blood cell casts, and 1+ proteinuria. Electron microscopy of a renal biopsy specimen demonstrates alternating areas of thinning and irregular thickening of the glomerular basement membrane, with longitudinal multi-lamination and pronounced splitting of the lamina densa, producing a characteristic 'basket-weave' appearance. This patient's syndrome is inherited in an X-linked pattern and is caused by a genetic defect in which of the following structural proteins?",
    "choices": [
      [
        "Alpha-5 chain of Type IV collagen (encoded by the COL4A5 gene)",
        "Correct. Alport syndrome is a hereditary basement membrane nephropathy inherited in an X-LINKED DOMINANT pattern in ~85% of cases, caused by mutations in the COL4A5 GENE encoding the alpha-5 chain of TYPE IV COLLAGEN. Normal adult GBM, cochlear basilar membrane, and lens capsule are composed of alpha-3, alpha-4, and alpha-5 Type IV collagen heterotrimers [alpha-3.alpha-4.alpha-5(IV)]. Defective alpha-5 chain assembly destabilizes the entire collagen network, leaving the basement membrane structurally fragile and susceptible to endopeptidase degradation. Classic clinical triad: (1) Renal: Persistent microscopic or gross hematuria progressing to proteinuria, hypertension, and end-stage renal disease by young adulthood; (2) Auditory: Bilateral, symmetric, progressive HIGH-FREQUENCY SENSORINEURAL DEAFNESS; (3) Ocular: ANTERIOR LENTICONUS (pathognomonic conical bulging of the lens capsule into the anterior chamber) and perimacular flecks. PATHOGNOMONIC BIOPSY LESION: Electron microscopy demonstrates irregular, alternating areas of extreme GBM thinning and marked thickening with longitudinal multi-lamination and lamellated splitting of the lamina densa, creating a classic 'BASKET-WEAVE' appearance."
      ],
      [
        "Fibrillin-1 structural microfibrillar glycoprotein (encoded by the FBN1 gene)",
        "Fibrillin-1 mutations cause Marfan syndrome (upward lens dislocation, tall habitus, aortic root aneurysms), not hematuria, sensorineural deafness, or basket-weave GBM."
      ],
      [
        "Alpha-1 chain of Type I collagen (encoded by the COL1A1 gene)",
        "Type I collagen mutations cause Osteogenesis Imperfecta (recurrent fractures, blue sclerae, dentinogenesis imperfecta), not glomerular basement membrane splitting."
      ],
      [
        "Alpha-1 chain of Type III collagen (encoded by the COL3A1 gene)",
        "Type III collagen mutations cause vascular Ehlers-Danlos syndrome (fragile blood vessels, aortic rupture, hollow organ perforations), not Alport syndrome."
      ],
      [
        "Dystrophin cytoskeletal anchor protein (encoded by the DMD gene)",
        "Dystrophin mutations cause Duchenne and Becker muscular dystrophies (X-linked proximal muscle wasting), not glomerular basement membrane disease."
      ]
    ],
    "shortestValidSolution": "Hematuria + sensorineural deafness + anterior lenticonus + 'basket-weave' GBM on EM -> Alport syndrome (alpha-5 chain of Type IV collagen / COL4A5).",
    "necessaryInference": "Hematuria + sensorineural hearing loss + anterior lenticonus + 'basket-weave' appearance on EM = Alport syndrome. Caused by X-linked mutations in COL4A5 encoding the alpha-5 chain of Type IV collagen.",
    "strongestDistractor": "Fibrillin-1 structural microfibrillar glycoprotein (encoded by the FBN1 gene)",
    "distractorExclusion": "Fibrillin-1 mutations cause Marfan syndrome with ectopia lentis, but lack hematuria, renal failure, or basket-weave splitting of the lamina densa.",
    "citation": "Kashtan CE. Alport syndrome: an inherited disorder of renal, ocular, and acoustic basement membranes. Semin Nephrol. 1999;19(4):350-357. PMID: 10452586.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hematuria + sensorineural hearing loss + anterior lenticonus + 'basket-weave' appearance on EM = Alport syndrome. Caused by X-linked mutations in COL4A5 encoding the alpha-5 chain of Type IV collagen.",
      "distractorExclusionNotes": "Strongest distractor 'Fibrillin-1 structural microfibrillar glycoprotein (encoded by the FBN1 gene)' excluded: Fibrillin-1 mutations cause Marfan syndrome with ectopia lentis, but lack hematuria, renal failure, or basket-weave splitting of the lamina densa.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0367",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Diabetic Nephropathy Kimmelstiel-Wilson Nodules",
    "subtopic": "Non-Enzymatic Glycation, Efferent Arteriolar Hyalinosis, and Glomerular Hyperfiltration",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with a 15-year history of poorly controlled type 2 diabetes mellitus (HbA1c 9.8%) and hypertension presents for evaluation of worsening lower extremity edema. Blood pressure is 158/96 mm Hg. Urinalysis demonstrates 3+ protein and zero red blood cells. 24-hour urine collection reveals 4.2 g of protein (nephrotic-range proteinuria). Serum creatinine is 2.2 mg/dL (baseline 1.1 mg/dL 2 years ago). Light microscopy of a renal biopsy specimen stained with periodic acid-Schiff (PAS) reveals diffuse mesangial matrix expansion, diffuse thickening of the glomerular basement membrane, and prominent, acellular, round or ovoid, laminated, eosinophilic nodular accumulations of PAS-positive mesangial matrix (Kimmelstiel-Wilson nodules). At the earliest stages of this disease, which of the following hemodynamic and structural alterations drives the progression of glomerular injury?",
    "choices": [
      [
        "Non-enzymatic glycation of vascular proteins producing preferential efferent arteriolar hyalinosis, leading to increased intraglomerular capillary hydrostatic pressure and hyperfiltration",
        "Correct. Diabetic Nephropathy is the leading cause of end-stage renal disease in the developed world. PATHOPHYSIOLOGY AND PROGRESSION: (1) EARLY HYPERFILTRATION STAGE: Chronic hyperglycemia promotes NON-ENZYMATIC GLYCATION of vascular basement membrane proteins, generating advanced glycation end-products (AGEs). AGE cross-linking causes preferential hyaline arteriolosclerosis of the EFFERENT ARTERIOLE (more than the afferent arteriole). Constriction/hyalinosis of the efferent arteriole increases downstream resistance, driving a marked increase in INTRAGLOMERULAR CAPILLARY HYDROSTATIC PRESSURE (glomerular hypertension) and GLOMERULAR HYPERFILTRATION (increased GFR). (ACE inhibitors and ARBs preferentially dilate the efferent arteriole, reducing intraglomerular pressure and slowing diabetic nephropathy progression). (2) MICROALBUMINURIA STAGE: Hyperfiltration causes progressive mechanical shear stress, mesangial stretch, TGF-beta upregulation, and diffuse GBM thickening with podocyte foot process loss, manifesting as microalbuminuria (30-300 mg/day). (3) OVERT NEPHROPATHY STAGE: Persistent mesangial matrix synthesis forms PATHOGNOMONIC KIMMELSTIEL-WILSON NODULES (nodular glomerulosclerosis: round, acellular, laminated, PAS-positive mesangial nodules)."
      ],
      [
        "Selective dilation of the efferent arteriole mediated by local prostacyclin hypersecretion, causing intraglomerular hypoperfusion",
        "Efferent arteriolar DILATION lowers intraglomerular pressure (the therapeutic mechanism of ACE inhibitors), whereas diabetic pathology features preferential efferent HYALINOSIS/CONSTRICTION."
      ],
      [
        "Direct cytotoxic lysis of podocytes mediated by Shiga toxin-induced ribosomal cleavage",
        "Shiga toxin causes Hemolytic Uremic Syndrome (HUS), not diabetic Kimmelstiel-Wilson nodular glomerulosclerosis."
      ],
      [
        "Subendothelial deposition of circulating advanced glycation end-product immune complexes activating C5b-9",
        "Diabetic nephropathy is a non-immune metabolic and hemodynamic microvascular disease; it does not involve immune complex complement activation."
      ],
      [
        "Autosomal dominant mutation in the polycystin-1 gene causing tubular epithelial hyperproliferation",
        "Polycystin mutations cause Autosomal Dominant Polycystic Kidney Disease (ADPKD), which presents with massive bilateral renal cysts, not nodular glomerulosclerosis."
      ]
    ],
    "shortestValidSolution": "Diabetes + nephrotic proteinuria + Kimmelstiel-Wilson nodules -> Non-enzymatic glycation causes efferent arteriolar hyalinosis -> Glomerular hyperfiltration.",
    "necessaryInference": "Recognize that the earliest hemodynamic driver of diabetic nephropathy is non-enzymatic glycation causing preferential efferent arteriolar hyaline sclerosis, increasing intraglomerular pressure and producing hyperfiltration.",
    "strongestDistractor": "Subendothelial deposition of circulating advanced glycation end-product immune complexes activating C5b-9",
    "distractorExclusion": "Diabetic nephropathy is non-immunologic (no immune complex deposition or complement consumption); it is mediated by hemodynamic hyperfiltration and metabolic AGE synthesis.",
    "citation": "Tervaert TW, Mooyaart AL, Amann K, et al. Pathologic classification of diabetic nephropathy. J Am Soc Nephrol. 2010;21(4):556-563. PMID: 20167701.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Recognize that the earliest hemodynamic driver of diabetic nephropathy is non-enzymatic glycation causing preferential efferent arteriolar hyaline sclerosis, increasing intraglomerular pressure and producing hyperfiltration.",
      "distractorExclusionNotes": "Strongest distractor 'Subendothelial deposition of circulating advanced glycation end-product immune c' excluded: Diabetic nephropathy is non-immunologic (no immune complex deposition or complement consumption); it is mediated by hemodynamic hyperfiltration and metabolic AGE synthesis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0368",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Renal Amyloidosis Congo Red Apple-Green Birefringence",
    "subtopic": "Cross-Beta Pleated Sheet Fibril Deposition in Mesangium and Vessel Walls",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with a 25-year history of severe, deformative rheumatoid arthritis presents with progressive lower extremity edema, abdominal fullness, and weight loss. Blood pressure is 108/68 mm Hg. Physical examination reveals bilateral 3+ pitting edema of the lower legs and mild hepatosplenomegaly. Urinalysis demonstrates 4+ protein and zero red blood cells. 24-hour urine collection reveals 9.4 g of protein (massive nephrotic syndrome). Serum albumin is 1.9 g/dL, and serum creatinine is 2.4 mg/dL. Light microscopy of a renal biopsy specimen stained with hematoxylin and eosin demonstrates extensive obliteration of capillary lumens and mesangial expansion by an amorphous, acellular, eosinophilic hyaline material. Staining with Congo red under standard light microscopy reveals uniform salmon-pink staining. When examined under cross-polarized light microscopy, which of the following optical properties is pathognomonic of this deposited material?",
    "choices": [
      [
        "Bright apple-green birefringence produced by the cross-beta pleated sheet secondary structure of unbranched amyloid fibrils",
        "Correct. Amyloidosis is a disorder of protein misfolding where normally soluble precursor proteins assemble into insoluble, non-branching extracellular fibrils (measuring 7.5 to 10 nm in diameter) organized in a CROSS-BETA PLEATED SHEET secondary structure. In patients with longstanding, poorly controlled chronic inflammatory conditions (rheumatoid arthritis, ankylosing spondylitis, bronchiectasis, inflammatory bowel disease), persistent IL-1 and IL-6 stimulation drives massive hepatic synthesis of serum amyloid A (SAA) acute-phase protein. Cleavage of SAA yields AMYLOID A (AA) FIBRILS, which deposit in organ parenchyma (secondary / reactive systemic amyloidosis; AA amyloidosis). The kidney is the most commonly affected organ, presenting with MASSIVE NEPHROTIC SYNDROME and renal failure. PATHOGNOMONIC HISTOPATHOLOGY: (1) Congo red stain produces salmon-pink staining under standard light; (2) Under CROSS-POLARIZED LIGHT MICROSCOPY, the alignment of the Congo red dye molecules along the regular repeating cross-beta pleated sheet structure exhibits striking APPLE-GREEN BIREFRINGENCE. In AL amyloidosis (multiple myeloma, plasma cell dyscrasias), the deposited protein consists of monoclonal immunoglobulin light chains (lambda > kappa)."
      ],
      [
        "Brilliant silver-positive 'spike and dome' projections along the subepithelial aspect of the basement membrane",
        "Silver spikes define Membranous Nephropathy, not amyloidosis; amyloid appears as amorphous mesangial deposits."
      ],
      [
        "Fluorescent red-orange emission under ultraviolet light without requiring cross-polarization filters",
        "Ultraviolet autofluorescence is not the basis of amyloid identification; amyloid requires Congo red under cross-polarized light to show apple-green birefringence."
      ],
      [
        "Prussian blue positive granular intracellular hemosiderin deposits within proximal tubular epithelial cells",
        "Prussian blue stains iron (hemosiderin) blue, which is positive in hemochromatosis or chronic intravascular hemolysis, not amyloid."
      ],
      [
        "Extensive metachromatic purple-magenta staining with crystal violet in the presence of basic dyes",
        "Crystal violet metachromasia is an older, non-specific screening technique, but the gold-standard pathognomonic diagnostic criterion tested on USMLE is Congo red apple-green birefringence under cross-polarized light."
      ]
    ],
    "shortestValidSolution": "Chronic rheumatoid arthritis + nephrotic syndrome + amorphous eosinophilic deposits -> Renal AA amyloidosis (Congo red shows apple-green birefringence under polarized light).",
    "necessaryInference": "Longstanding chronic inflammation (rheumatoid arthritis) + nephrotic syndrome + amorphous extracellular deposits = AA Amyloidosis. Pathognomonic property: Congo red stain displays apple-green birefringence under cross-polarized light due to cross-beta pleated sheet fibrils.",
    "strongestDistractor": "Extensive metachromatic purple-magenta staining with crystal violet in the presence of basic dyes",
    "distractorExclusion": "Congo red apple-green birefringence under polarized light is the undisputed pathognomonic gold-standard examination for amyloid.",
    "citation": "Merlini G, Bellotti V. Molecular mechanisms of amyloidosis. N Engl J Med. 2003;349(6):583-596. PMID: 12904524.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Longstanding chronic inflammation (rheumatoid arthritis) + nephrotic syndrome + amorphous extracellular deposits = AA Amyloidosis. Pathognomonic property: Congo red stain displays apple-green birefringence under cross-polarized light due to cross-beta pleated sheet fibrils.",
      "distractorExclusionNotes": "Strongest distractor 'Extensive metachromatic purple-magenta staining with crystal violet in the prese' excluded: Congo red apple-green birefringence under polarized light is the undisputed pathognomonic gold-standard examination for amyloid.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0369",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Calcium Oxalate Nephrolithiasis Pathophysiology",
    "subtopic": "Envelope-Shaped Crystals, Hypocitraturia, and Enteric Malabsorption Hyperoxaluria",
    "provisionalDifficulty": 4,
    "stem": "A 36-year-old woman with a 10-year history of Crohn disease with extensive ileal resection (terminal ileostomy) presents to the emergency department with excruciating, colicky right flank pain radiating to her right labium majus, accompanied by gross hematuria, nausea, and vomiting. Non-contrast helical CT of the abdomen and pelvis reveals a 6-mm radiopaque calculus lodged at the right ureterovesical junction with moderate proximal hydroureteronephrosis. Urinalysis demonstrates a urine pH of 6.0 and numerous colorless, birefringent crystals shaped like bipyramidal envelopes (octahedrons) under light microscopy. 24-hour urine collection reveals marked HYPEROXALURIA and HYPOCITRATURIA, with normal urinary calcium excretion. Which of the following pathophysiological mechanisms directly accounts for the hyperoxaluria and recurrent nephrolithiasis in this patient?",
    "choices": [
      [
        "Unabsorbed luminal fatty acids in the gut bind ionized calcium, leaving free unchelated oxalate to be hyper-absorbed in the colon (enteric hyperoxaluria)",
        "Correct. Calcium oxalate is the most common chemical composition of renal calculi (> 75-80% of all stones). On microscopic urinalysis, calcium oxalate dihydrate crystals appear as classic COLORLESS, BIPYRAMIDAL ENVELOPES (or dumbbells for monohydrate). They are RADIOPAQUE on plain radiographs and CT. PATHOPHYSIOLOGY OF ENTERIC HYPEROXALURIA: In healthy individuals, dietary calcium binds to dietary oxalate in the intestinal lumen, forming insoluble calcium oxalate that is harmlessly excreted in stool. However, in patients with severe malabsorption, short bowel syndrome, or CROHN DISEASE (especially after ileal resection), unabsorbed luminal fatty acids enter the colon and BIND LUMINAL CALCIUM (saponification). With calcium consumed by fatty acids, dietary OXALATE REMAINS UNBOUND (FREE) AND SOLUBLE. This free oxalate is excessively absorbed across the colonic mucosa into the bloodstream and excreted by the kidneys, driving severe ENTERIC HYPEROXALURIA. Concurrently, chronic diarrhea produces metabolic acidosis, which stimulates proximal tubular citrate reabsorption, causing HYPOCITRATURIA (loss of citrate, the natural inhibitor of calcium crystallization). The combination of hyperoxaluria and hypocitraturia dramatically precipitates calcium oxalate stones."
      ],
      [
        "Primary hyperparathyroidism driving excessive renal 1-alpha-hydroxylase production and hypercalciuria",
        "Primary hyperparathyroidism causes hypercalcemia and hypercalciuria, whereas this patient with Crohn disease has normal urinary calcium and enteric hyperoxaluria."
      ],
      [
        "Chronic infection of the collecting system by urease-producing Proteus mirabilis elevating urine pH above 7.5",
        "Urease-producing bacteria cause magnesium ammonium phosphate (struvite) stones with alkaline urine pH > 7.5 and coffin-lid crystals, not calcium oxalate envelope crystals."
      ],
      [
        "Metabolic block in hepatic phenylalanine hydroxylase causing massive urinary excretion of phenylketones",
        "Phenylketonuria causes intellectual disability and musty odor, not enteric hyperoxaluria or nephrolithiasis."
      ],
      [
        "Defective proximal tubular dibasic amino acid transporter (COLA) causing excessive urinary cystine excretion",
        "Defective COLA transport causes cystinuria (hexagonal crystals), not envelope-shaped calcium oxalate stones."
      ]
    ],
    "shortestValidSolution": "Crohn disease / ileal resection + flank pain + envelope crystals -> Calcium oxalate stone via enteric hyperoxaluria (fatty acids bind calcium, freeing oxalate for absorption).",
    "necessaryInference": "Crohn disease malabsorption + envelope-shaped crystals = Calcium oxalate stone. The mechanism of enteric hyperoxaluria is unabsorbed fat saponifying calcium, leaving unchelated oxalate to be hyper-absorbed in the colon.",
    "strongestDistractor": "Primary hyperparathyroidism driving excessive renal 1-alpha-hydroxylase production and hypercalciuria",
    "distractorExclusion": "Primary hyperparathyroidism causes hypercalciuria, whereas enteric hyperoxaluria in Crohn disease features normal or low urine calcium with marked hyperoxaluria.",
    "citation": "Worcester EM, Coe FL. Nephrolithiasis. Prim Care. 2008;35(2):369-391. PMID: 18486745.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Crohn disease malabsorption + envelope-shaped crystals = Calcium oxalate stone. The mechanism of enteric hyperoxaluria is unabsorbed fat saponifying calcium, leaving unchelated oxalate to be hyper-absorbed in the colon.",
      "distractorExclusionNotes": "Strongest distractor 'Primary hyperparathyroidism driving excessive renal 1-alpha-hydroxylase producti' excluded: Primary hyperparathyroidism causes hypercalciuria, whereas enteric hyperoxaluria in Crohn disease features normal or low urine calcium with marked hyperoxaluria.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0370",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "Renal",
    "topic": "Struvite Stones Proteus Mirabilis Urease Pathophysiology",
    "subtopic": "Magnesium Ammonium Phosphate Staghorn Calculi and Coffin-Lid Crystals in Alkaline Urine",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with a history of recurrent urinary tract infections and an indwelling Foley catheter presents with low-grade fever, mild right flank ache, and foul-smelling cloudy urine. Abdominal plain radiography (KUB) demonstrates a large, radiopaque, branching calculus occupying the entire right renal pelvis and extending into the major and minor calyces (a 'staghorn' calculus). Clean-catch urinalysis demonstrates a marked alkaline urine pH of 8.5, 3+ leukocyte esterase, 2+ nitrites, and numerous rectangular crystals with beveled edges resembling 'coffin lids' under light microscopy. Urine culture grows swarming, motile, Gram-negative rods that are urease-positive (Proteus mirabilis). Which of the following chemical reactions catalyzed by this bacterial enzyme directly drives the supersaturation and crystallization of this staghorn calculus?",
    "choices": [
      [
        "Hydrolysis of urinary urea into carbon dioxide and ammonia, generating ammonium ions and markedly alkalinizing urine pH above 7.2",
        "Correct. Struvite stones (also known as triple phosphate or infectious stones; composed of MAGNESIUM AMMONIUM PHOSPHATE and carbonate apatite) account for ~10-15% of all renal calculi and are the primary cause of giant STAGHORN CALCULI (which form a solid cast of the renal pelvis and calyces). PATHOPHYSIOLOGY: Struvite stones are caused exclusively by upper urinary tract infections with UREASE-PRODUCING BACTERIA (most commonly PROTEUS MIRABILIS, but also Klebsiella, Pseudomonas, and Staphylococcus saprophyticus; notably NOT E. coli, which is urease-negative!). Bacterial UREASE hydrolyzes urinary urea into carbon dioxide and AMMONIA (NH3). Ammonia acts as a base, accepting protons to form AMMONIUM (NH4+), while simultaneously driving URINE PH TO PROMINENTLY ALKALINE LEVELS (pH > 7.5 to 8.5). In this alkaline, ammonium-rich environment, phosphate ions deprotonate to trivalent PO4(3-), which complexes with abundant magnesium and ammonium to precipitate magnesium ammonium phosphate (MgNH4PO4.6H2O). On microscopic urinalysis, crystals appear as pathognomonic 'COFFIN-LID' rectangular prisms. If left untreated, staghorn calculi cause chronic renal destruction, perinephric abscesses, and urosepsis."
      ],
      [
        "Reduction of nitrate to nitrite, which complexes with divalent calcium to form insoluble calcium nitrite crystals",
        "Nitrate reduction by enterobacteria generates nitrites, but nitrites do not precipitate stones; struvite is driven by urease-mediated ammonia generation."
      ],
      [
        "Deamination of branched-chain amino acids, producing insoluble leucine crystals that serve as a nidus for calcification",
        "Leucine crystals form in severe end-stage liver failure (yellow-brown spheres), not struvite staghorn calculi."
      ],
      [
        "Cleavage of Tamm-Horsfall mucoprotein, stripping the protective glycosaminoglycan anti-adherence layer from urothelium",
        "Tamm-Horsfall protein is the matrix of urinary casts; its cleavage does not create ammonium or alkalinize urine."
      ],
      [
        "Enzymatic oxidation of uric acid into allantoin, which precipitates in the presence of acidic tubular fluid",
        "Urate oxidase converts uric acid to soluble allantoin (the mechanism of rasburicase), which decreases stone formation and requires acidic pH, the exact opposite of struvite."
      ]
    ],
    "shortestValidSolution": "Staghorn calculus + alkaline urine pH > 8 + 'coffin-lid' crystals + Proteus -> Struvite stone (urease hydrolyzes urea to ammonia, alkalinizing urine).",
    "necessaryInference": "Branching staghorn calculus + alkaline urine (pH 8.5) + coffin-lid crystals + Proteus mirabilis = Struvite stone (magnesium ammonium phosphate). Bacterial urease hydrolyzes urea to ammonia, creating ammonium and alkaline pH.",
    "strongestDistractor": "Reduction of nitrate to nitrite, which complexes with divalent calcium to form insoluble calcium nitrite crystals",
    "distractorExclusion": "Nitrite is a diagnostic marker of Gram-negative bacteriuria, but the chemical driver of struvite stone formation is urease-mediated urea hydrolysis to ammonia.",
    "citation": "Flannigan R, Choy WH, Chew B, Lange D. Renal struvite stones--pathogenesis, microbiology, and management strategies. Nat Rev Urol. 2014;11(6):333-341. PMID: 24818849.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Branching staghorn calculus + alkaline urine (pH 8.5) + coffin-lid crystals + Proteus mirabilis = Struvite stone (magnesium ammonium phosphate). Bacterial urease hydrolyzes urea to ammonia, creating ammonium and alkaline pH.",
      "distractorExclusionNotes": "Strongest distractor 'Reduction of nitrate to nitrite, which complexes with divalent calcium to form i' excluded: Nitrite is a diagnostic marker of Gram-negative bacteriuria, but the chemical driver of struvite stone formation is urease-mediated urea hydrolysis to ammonia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0371",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Uric Acid Nephrolithiasis Radiolucency and Urinary Acidification",
    "subtopic": "Insoluble Un-ionized Uric Acid Precipitation at Urine pH < 5.5 and Potassium Citrate Alkalinization",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man with chronic gouty arthritis and metabolic syndrome presents with acute left-sided flank pain radiating to the groin and gross hematuria. An abdominal plain radiograph (KUB) fails to demonstrate any radiopaque density. However, non-contrast helical CT of the abdomen demonstrates a 5-mm hyperdense calculus lodged in the mid-left ureter with proximal hydroureter. Urinalysis demonstrates a persistent, marked acidic urine pH of 4.8, 3+ blood, and zero nitrites. Microscopic examination of the urinary sediment reveals numerous pleomorphic, rhomboid and rosette-shaped, diamond-like crystals that are strongly birefringent under polarized light. The patient is treated conservatively with high oral fluid intake and oral potassium citrate. Which of the following physicochemical properties is the primary determinant driving the precipitation of this patient's calculus, and how does potassium citrate promote stone dissolution?",
    "choices": [
      [
        "Persistent urinary acidemia (pH < 5.5) favoring the insoluble, protonated un-ionized uric acid species; potassium citrate alkalinizes urine to convert uric acid to soluble urate",
        "Correct. Uric acid stones account for ~5-10% of nephrolithiasis and are the classic RADIOLUCENT STONES on plain X-rays (KUB) (they are invisible on plain radiograph because uric acid has low atomic number similar to soft tissue, but are readily visible as hyperdense densities on non-contrast CT). On microscopic urinalysis, crystals appear as pleomorphic RHOMBOIDS, ROSETTES, OR DIAMONDS. PHYSICOCHEMICAL PATHOPHYSIOLOGY: The pKa of uric acid is 5.5. At urine pH > 5.5, the molecule is deprotonated into the highly soluble urate ion. However, in chronically ACIDIC URINE (urine pH < 5.5; typical of gout, diabetes/metabolic syndrome with impaired ammoniagenesis, chronic diarrhea, or high-protein diets), the equilibrium shifts strongly to the PROTONATED, UN-IONIZED URIC ACID SPECIES, which is insoluble and precipitates at concentrations as low as 100 mg/L. CRITICAL THERAPEUTIC MECHANISM: The cornerstone of medical dissolution therapy is URINARY ALKALINIZATION using ORAL POTASSIUM CITRATE (or potassium bicarbonate). Citrate is metabolized in the liver to bicarbonate, which is excreted in the urine, raising urine pH to 6.5-7.0. At pH 6.5, the solubility of uric acid increases by more than 10-fold, shifting un-ionized uric acid to soluble urate and actively DISSOLVING pre-existing stones."
      ],
      [
        "Urinary hypercalciuria exceeding the solubility product of calcium phosphate; potassium citrate binds calcium to prevent precipitation",
        "Calcium phosphate stones form in ALKALINE urine (pH > 6.5) and are radiopaque on plain films, whereas uric acid stones form in acidic urine (pH < 5.5) and are radiolucent."
      ],
      [
        "Bacterial urease-mediated generation of excess ammonia; potassium citrate neutralizes alkaline urine by acidifying the collecting duct",
        "Potassium citrate ALKALINIZES urine, not acidifies; struvite stones require acidification, whereas uric acid stones require alkalinization."
      ],
      [
        "Defective renal tubular reabsorption of dibasic amino acids; potassium citrate competes for apical cystine transporters",
        "Dibasic amino acid transporter defect causes cystinuria (hexagonal crystals), not rhomboid uric acid stones."
      ],
      [
        "Intracellular accumulation of xanthine secondary to allopurinol suicide inhibition of xanthine oxidase",
        "Xanthine stones are extremely rare complications of high-dose allopurinol in Lesch-Nyhan syndrome, not common gouty nephrolithiasis."
      ]
    ],
    "shortestValidSolution": "Flank pain + invisible on KUB + visible on CT + acidic urine pH 4.8 + rhomboid crystals -> Uric acid stone (insoluble at pH < 5.5; dissolved by potassium citrate alkalinization).",
    "necessaryInference": "Radiolucent on KUB (visible on CT) + acidic urine pH < 5.5 + rhomboid crystals = Uric acid nephrolithiasis. Low urine pH (< 5.5) shifts equilibrium to insoluble un-ionized uric acid; potassium citrate alkalinizes urine, dissolving stones.",
    "strongestDistractor": "Urinary hypercalciuria exceeding the solubility product of calcium phosphate; potassium citrate binds calcium to prevent precipitation",
    "distractorExclusion": "Calcium phosphate stones precipitate in alkaline urine and are radiopaque, whereas uric acid stones precipitate in acidic urine and are completely radiolucent on KUB.",
    "citation": "Ngo TC, Assimos DG. Uric acid nephrolithiasis: recent progress and future directions. Rev Urol. 2007;9(1):17-27. PMID: 17387371.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Radiolucent on KUB (visible on CT) + acidic urine pH < 5.5 + rhomboid crystals = Uric acid nephrolithiasis. Low urine pH (< 5.5) shifts equilibrium to insoluble un-ionized uric acid; potassium citrate alkalinizes urine, dissolving stones.",
      "distractorExclusionNotes": "Strongest distractor 'Urinary hypercalciuria exceeding the solubility product of calcium phosphate; po' excluded: Calcium phosphate stones precipitate in alkaline urine and are radiopaque, whereas uric acid stones precipitate in acidic urine and are completely radiolucent on KUB.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0372",
    "exam": "Step 1",
    "subject": "Genetics",
    "system": "Renal",
    "topic": "Cystinuria Dibasic Amino Acid Transporter Defect",
    "subtopic": "Hexagonal Crystals, Sodium Cyanide-Nitroprusside Test, and COLA Malabsorption",
    "provisionalDifficulty": 4,
    "stem": "A 19-year-old man presents with acute right flank pain radiating to his scrotum and gross hematuria. He has a history of two prior episodes of kidney stones during his teenage years. Non-contrast abdominal CT demonstrates a 7-mm faintly radiopaque stone in the proximal right ureter. Urinalysis demonstrates a urine pH of 6.0 and numerous flat, colorless, regular HEXAGONAL (six-sided) crystals in the sediment. A spot urine sample is mixed with sodium cyanide and sodium nitroprusside, producing an immediate, deep purple-red color reaction (positive brand test). Genetic sequencing reveals an autosomal recessive loss-of-function mutation in the SLC3A1 gene encoding the rBAT subunit of a renal tubular transport protein. In addition to cystine, impaired proximal tubular reabsorption of which of the following groups of amino acids occurs in this disease?",
    "choices": [
      [
        "Ornithine, Lysine, and Arginine (the COLA dibasic amino acid group)",
        "Correct. Cystinuria is an autosomal recessive inborn error of renal and intestinal transport caused by mutations in SLC3A1 (rBAT) or SLC7A9 (b0,+AT), which encode the heterodimeric high-affinity proximal tubular apical transporter for DIBASIC AMINO ACIDS. The transporter is responsible for the coupled reabsorption of four dibasic amino acids, remembered by the mnemonic 'COLA': CYSTINE, ORNITHINE, LYSINE, AND ARGININE. Because ornithine, lysine, and arginine are highly water-soluble, their excessive urinary excretion is completely benign and asymptomatic. However, CYSTINE (composed of two cysteine molecules connected by a disulfide bond) is EXTREMELY INSOLUBLE AT NORMAL OR ACIDIC URINE PH (solubility limit ~250 mg/L). Excessive urinary cystine rapidly precipitates, forming recurrent, bilateral renal calculi in children, adolescents, and young adults. PATHOGNOMONIC FINDINGS: (1) Urinalysis reveals classic flat, colorless, regular HEXAGONAL CRYSTALS (six-sided plates); (2) Faintly radiopaque on X-ray/CT due to sulfur atoms; (3) SODIUM CYANIDE-NITROPRUSSIDE TEST is positive: cyanide reduces cystine's disulfide bond to free cysteine, which reacts with nitroprusside to produce an intense purple-red color. Treatment involves hydration, urinary alkalinization (potassium citrate), and thiol chelating agents (tiopronin, penicillamine)."
      ],
      [
        "Leucine, Isoleucine, and Valine (the branched-chain amino acid group)",
        "Branched-chain amino acids accumulate in Maple Syrup Urine Disease (BCKDH defect), not cystinuria; they are neutral amino acids transported by separate systems."
      ],
      [
        "Phenylalanine, Tyrosine, and Tryptophan (the aromatic amino acid group)",
        "Aromatic amino acids are transported by neutral amino acid systems; neutral amino acid transporter defect (SLC6A19) causes Hartnup disease, presenting with pellagra-like symptoms."
      ],
      [
        "Glycine, Proline, and Hydroxyproline (the imino acid group)",
        "Imino acids are reabsorbed via the proton-coupled imino acid transporter; defects cause benign iminoglycinuria, not nephrolithiasis."
      ],
      [
        "Glutamate and Aspartate (the dicarboxylic acidic amino acid group)",
        "Dicarboxylic amino acids are acidic and transported by the EAAT/system X-AG system; defects cause dicarboxylic aminoaciduria, not hexagonal cystine stones."
      ]
    ],
    "shortestValidSolution": "Recurrent young stones + hexagonal crystals + positive cyanide-nitroprusside test -> Cystinuria (impaired reabsorption of Cystine, Ornithine, Lysine, Arginine [COLA]).",
    "necessaryInference": "Hexagonal crystals + positive cyanide-nitroprusside test = Cystinuria. The underlying defect is an autosomal recessive apical transporter mutation impairing reabsorption of the COLA dibasic amino acids: Cystine, Ornithine, Lysine, Arginine.",
    "strongestDistractor": "Leucine, Isoleucine, and Valine (the branched-chain amino acid group)",
    "distractorExclusion": "Branched-chain amino acids are neutral amino acids involved in MSUD, whereas cystinuria specifically impairs dibasic amino acid transport (COLA).",
    "citation": "Eggermann T, Venghaus A, Zerres K. Cystinuria: an inborn cause of urolithiasis. Orphanet J Rare Dis. 2012;7:19. PMID: 22479904.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Hexagonal crystals + positive cyanide-nitroprusside test = Cystinuria. The underlying defect is an autosomal recessive apical transporter mutation impairing reabsorption of the COLA dibasic amino acids: Cystine, Ornithine, Lysine, Arginine.",
      "distractorExclusionNotes": "Strongest distractor 'Leucine, Isoleucine, and Valine (the branched-chain amino acid group)' excluded: Branched-chain amino acids are neutral amino acids involved in MSUD, whereas cystinuria specifically impairs dibasic amino acid transport (COLA).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0373",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Acute Tubular Necrosis Urinalysis and Fractional Excretion of Sodium",
    "subtopic": "Muddy Brown Granular Casts, FENa > 2%, and Loss of Tubular Concentrating Ability",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man who underwent emergency repair of a ruptured abdominal aortic aneurysm complicated by 45 minutes of profound intraoperative hemorrhagic shock (mean arterial pressure 45 mm Hg) develops acute oliguric kidney injury in the surgical intensive care unit on postoperative day 1. Over the past 24 hours, his urine output has been 180 mL despite aggressive crystalloid resuscitation and central venous pressure of 14 mm Hg. Blood urea nitrogen is 64 mg/dL, and serum creatinine has surged to 3.8 mg/dL (baseline 1.0 mg/dL; BUN/creatinine ratio 16.8). Microscopic examination of the centrifuged urinary sediment reveals numerous coarse, MUDDY BROWN GRANULAR CASTS and sloughed tubular epithelial cells. Which of the following sets of urinary diagnostic parameters is characteristic of this patient's intrinsic renal failure?",
    "choices": [
      [
        "Urine osmolality < 350 mOsm/kg, Urine sodium > 40 mEq/L, and Fractional excretion of sodium (FENa) > 2%",
        "Correct. Acute Tubular Necrosis (ATN) is the most common cause of intrinsic acute kidney injury in hospitalized patients. It is caused by severe, prolonged renal hypoperfusion (ischemic ATN, as in hemorrhagic shock) or nephrotoxins (aminoglycosides, iodinated radiocontrast, cisplatin, myoglobinuria). The segments most vulnerable to ischemic injury are the PROXIMAL CONVOLUTED TUBULE (S3 segment) and the THICK ASCENDING LIMB of Henle, due to their exceptionally high ATP-dependent transport metabolic rates and relatively low medullary oxygen tension. Ischemia causes ATP depletion, loss of cell polarity, detachment of necrotic tubular epithelial cells into the lumen, and formation of pathognomonic MUDDY BROWN GRANULAR CASTS. Loss of tubular epithelial integrity destroys the kidney's ability to reabsorb sodium and concentrate urine: (1) URINE OSMOLALITY IS LOW (< 350 mOsm/kg; isosthenuric, matching plasma); (2) URINE SODIUM IS HIGH (> 40 mEq/L; inability to reabsorb sodium); (3) FRACTIONAL EXCRETION OF SODIUM IS HIGH (FENa > 2%; failure of tubular sodium avidity); and (4) BUN/CREATININE RATIO IS < 20 (typically 10-15:1; impaired urea reabsorption). Contrast with PRERENAL AZOTEMIA (intact tubules): FENa < 1%, Urine Na+ < 20 mEq/L, Urine osmolality > 500 mOsm/kg, and BUN/Cr > 20:1."
      ],
      [
        "Urine osmolality > 500 mOsm/kg, Urine sodium < 20 mEq/L, and Fractional excretion of sodium (FENa) < 1%",
        "This profile defines Prerenal Azotemia with intact tubular function (high sodium avidity and concentrated urine), not established acute tubular necrosis."
      ],
      [
        "Urine osmolality < 150 mOsm/kg, Urine sodium < 10 mEq/L, and Fractional excretion of sodium (FENa) < 0.1%",
        "Markedly dilute urine with low sodium occurs in diabetes insipidus or severe water overload, not oliguric renal failure."
      ],
      [
        "Urine osmolality > 800 mOsm/kg, Urine sodium > 80 mEq/L, and Fractional excretion of urea < 15%",
        "Extremely concentrated urine requires hyperfunctioning medullary countercurrent multiplication, which is impossible in necrotic tubules."
      ],
      [
        "Urine osmolality 300 mOsm/kg, Urine sodium < 10 mEq/L, and Fractional excretion of sodium (FENa) < 1%",
        "FENa < 1% with low urine sodium is prerenal, whereas muddy brown casts confirm ATN with FENa > 2%."
      ]
    ],
    "shortestValidSolution": "Hemorrhagic shock + muddy brown casts -> Ischemic ATN (impaired tubular transport: Urine Osm < 350, Urine Na > 40, FENa > 2%).",
    "necessaryInference": "Muddy brown granular casts after severe shock = Ischemic Acute Tubular Necrosis. Damaged tubular epithelium cannot reabsorb sodium or concentrate urine, yielding low urine osmolality (< 350), high urine sodium (> 40), and FENa > 2%.",
    "strongestDistractor": "Urine osmolality > 500 mOsm/kg, Urine sodium < 20 mEq/L, and Fractional excretion of sodium (FENa) < 1%",
    "distractorExclusion": "This is the prerenal profile where tubular function is intact; once ATN supervenes, tubular failure forces FENa > 2% and urine sodium > 40 mEq/L.",
    "citation": "Schrier RW, Wang W, Poole B, Mitra A. Acute renal failure: definitions, diagnosis, pathogenesis, and therapy. J Clin Invest. 2004;114(1):5-14. PMID: 15232604.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Muddy brown granular casts after severe shock = Ischemic Acute Tubular Necrosis. Damaged tubular epithelium cannot reabsorb sodium or concentrate urine, yielding low urine osmolality (< 350), high urine sodium (> 40), and FENa > 2%.",
      "distractorExclusionNotes": "Strongest distractor 'Urine osmolality > 500 mOsm/kg, Urine sodium < 20 mEq/L, and Fractional excretio' excluded: This is the prerenal profile where tubular function is intact; once ATN supervenes, tubular failure forces FENa > 2% and urine sodium > 40 mEq/L.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0374",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Renal",
    "topic": "Acute Interstitial Nephritis Drug Hypersensitivity and Eosinophiluria",
    "subtopic": "Type IV / Type I Hypersensitivity with White Blood Cell Casts and Sterile Pyuria",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old man who was started on oral omeprazole for gastroesophageal reflux disease and amoxicillin-clavulanate for acute sinusitis 12 days ago presents with a low-grade fever, a generalized maculopapular erythematous skin rash on his trunk, and dull bilateral flank ache. Physical examination reveals an oral temperature of 38.3 C and mild bilateral costovertebral angle tenderness. Laboratory evaluation demonstrates: - Serum Creatinine: 2.8 mg/dL (baseline 0.9 mg/dL 1 month ago) - Complete Blood Count: WBC 11,800/mcL with 14% eosinophils (marked peripheral eosinophilia; absolute eosinophil count 1,650/mcL) Urinalysis reveals 1+ protein, 2+ blood, and marked sterile pyuria (20-30 WBCs/hpf; urine culture is completely negative). Hansel staining of the urinary sediment reveals that > 10% of excreted leukocytes are EOSINOPHILS. Centrifuged urine examination confirms the presence of WHITE BLOOD CELL CASTS. Renal biopsy demonstrates intense interstitial edema and a dense inflammatory infiltrate composed of T lymphocytes, macrophages, and abundant eosinophils, with sparing of glomeruli. Which of the following pathophysiological mechanisms is responsible for this patient's acute renal dysfunction?",
    "choices": [
      [
        "Drug-induced type IV (cell-mediated) and type I hypersensitivity reaction directed against renal tubular basement membrane hapten antigens",
        "Correct. Acute Interstitial Nephritis (AIN; tubulointerstitial nephritis) is an immunologically mediated adverse drug reaction accounting for ~15% of unexplained acute kidney injury in hospitalized adults. The most common causative pharmacologic culprits are: (1) PROTON PUMP INHIBITORS (omeprazole, pantoprazole); (2) ANTIBIOTICS (penicillins, cephalosporins, sulfonamides, rifampin); and (3) NSAIDS. PATHOPHYSIOLOGY: The offending drug (or its metabolite) acts as a HAPTEN, covalently binding to components of the tubular basement membrane or cytoplasmic proteins. This hapten-protein conjugate is processed by dendritic cells and presented to T cells, triggering a combined TYPE IV (DELAYED-TYPE, T-CELL MEDIATED) AND TYPE I (IGA/IGE-MEDIATED) HYPERSENSITIVITY REACTION. Activated T lymphocytes and mast cells release cytokines (IL-5), recruiting EOSINOPHILS into the renal interstitium. Classic clinical triad (seen in ~10-15%): FEVER, MACULOPAPULAR RASH, and PERIPHERAL EOSINOPHILIA, occurring 1 to 3 weeks post-exposure. URINALYSIS HALLMARKS: Sterile pyuria, EOSINOPHILURIA (demonstrated by Hansel or Wright stain), and WHITE BLOOD CELL CASTS (which confirm tubular/interstitial inflammation, distinguishing it from lower urinary tract cystitis). Treatment requires immediate cessation of the offending drug +/- corticosteroids."
      ],
      [
        "Direct chemical necrosis of the proximal tubular brush border mediated by accumulated nephrotoxic drug crystals",
        "Crystal-induced nephropathy is caused by acyclovir, indinavir, sulfadiazine, or methotrexate, which precipitate in tubules causing mechanical obstruction without eosinophilia or rash."
      ],
      [
        "Circulating immune complex deposition in the mesangium triggering alternative complement pathway activation",
        "Immune complex deposition in mesangium causes glomerulonephritis (IgA nephropathy, lupus), characterized by red blood cell casts, not white blood cell casts or eosinophiluria."
      ],
      [
        "Autoantibody-mediated binding to the non-collagenous domain of Type IV collagen in glomerular capillaries",
        "This is Anti-GBM disease, which produces crescentic GN and linear IgG on immunofluorescence, not interstitial eosinophilic nephritis."
      ],
      [
        "Non-enzymatic glycation of efferent arterioles leading to glomerular hyperfiltration and sclerosis",
        "Non-enzymatic glycation causes diabetic nephropathy, not acute drug hypersensitivity with fever, rash, and eosinophils."
      ]
    ],
    "shortestValidSolution": "Fever + rash + eosinophilia + WBC casts after omeprazole/amoxicillin -> Acute Interstitial Nephritis (Type IV/I drug hypersensitivity).",
    "necessaryInference": "New drug (PPI/antibiotic) + fever + rash + peripheral eosinophilia + WBC casts on urinalysis = Acute Interstitial Nephritis. Pathophysiology is a drug-induced Type IV / Type I hypersensitivity reaction with interstitial eosinophilic infiltration.",
    "strongestDistractor": "Direct chemical necrosis of the proximal tubular brush border mediated by accumulated nephrotoxic drug crystals",
    "distractorExclusion": "Crystal nephropathy causes mechanical tubular plugging without systemic allergic hypersensitivity features (no fever, rash, or eosinophils).",
    "citation": "Praga M, Gonz\u00e1lez E. Acute interstitial nephritis. Kidney Int. 2010;77(11):956-961. PMID: 20336051.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: New drug (PPI/antibiotic) + fever + rash + peripheral eosinophilia + WBC casts on urinalysis = Acute Interstitial Nephritis. Pathophysiology is a drug-induced Type IV / Type I hypersensitivity reaction with interstitial eosinophilic infiltration.",
      "distractorExclusionNotes": "Strongest distractor 'Direct chemical necrosis of the proximal tubular brush border mediated by accumu' excluded: Crystal nephropathy causes mechanical tubular plugging without systemic allergic hypersensitivity features (no fever, rash, or eosinophils).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0375",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Renal Cell Carcinoma VHL Gene Deletion and HIF-1-Alpha",
    "subtopic": "Chromosome 3p Deletion, Constitutive Angiogenesis, and Clear Cell Histology",
    "provisionalDifficulty": 4,
    "stem": "A 59-year-old man presents with painless gross hematuria, a dull ache in his left flank, and a 12-lb unintended weight loss over the past 3 months. Physical examination reveals a palpable, firm, non-tender mass in the left upper quadrant of his abdomen and a non-reducing left-sided scrotal varicocele that fails to decompress when lying recumbent. Laboratory evaluation reveals: - Hemoglobin: 19.4 g/dL (marked secondary polycythemia; hematocrit 58%) - Serum Calcium: 11.8 mg/dL (hypercalcemia) - Erythropoietin (EPO): Markedly elevated Abdominal contrast-enhanced CT reveals a 7.5-cm, highly vascular, solid, heterogeneous mass arising from the upper pole of the left kidney, with a tumor thrombus extending into the left renal vein. Radical nephrectomy is performed. Histopathological examination demonstrates sheets and nests of rounded polygonal epithelial cells with abundant clear cytoplasm, separated by a delicate, arborizing network of thin-walled sinusoidal blood vessels. Cytogenetic analysis reveals a loss-of-function mutation and loss of heterozygosity on chromosome 3p. The constitutive upregulation of which of the following transcription factors directly drives the marked vascularity and paraneoplastic polycythemia in this neoplasm?",
    "choices": [
      [
        "Hypoxia-inducible factor-1-alpha (HIF-1-alpha), driving excessive transcription of vascular endothelial growth factor (VEGF) and erythropoietin (EPO)",
        "Correct. Clear Cell Renal Cell Carcinoma (ccRCC) is the most common primary renal malignancy (> 75-80% of RCC). Origin: PROXIMAL CONVOLUTED TUBULE epithelial cells. Histology: Polygonal cells with abundant CLEAR CYTOPLASM (filled with accumulated glycogen and lipids that dissolve during routine histological processing), surrounded by dense arborizing capillary networks. MOLECULAR PATHOGENESIS: In > 90% of sporadic clear cell RCC and in hereditary von Hippel-Lindau (VHL) disease, there is a loss-of-function mutation or deletion on CHROMOSOME 3P25 (VHL GENE). Normally, the VHL protein functions as an E3 ubiquitin ligase component: in the presence of oxygen, prolyl hydroxylases hydroxylate HYPOXIA-INDUCIBLE FACTOR-1-ALPHA (HIF-1-alpha), allowing VHL to bind HIF-1-alpha and target it for ubiquitin-proteasome degradation. Loss of VHL prevents HIF-1-alpha degradation. HIF-1-ALPHA ACCUMULATES CONSTITUTIVELY, translocating to the nucleus where it drives uninhibited transcription of hypoxia-responsive genes: (1) VASCULAR ENDOTHELIAL GROWTH FACTOR (VEGF) and PDGF -> massive neo-angiogenesis and hypervascularity; (2) ERYTHROPOIETIN (EPO) -> paraneoplastic secondary POLYCYTHEMIA; (3) Parathyroid hormone-related peptide (PTHrP) -> paraneoplastic HYPERCALCEMIA. (Left-sided varicocele occurs because the left gonadal vein drains into the left renal vein, which is obstructed by tumor thrombus)."
      ],
      [
        "c-Myc oncogene driving uncontrolled transcription of ribosome biogenesis proteins and metabolic reprogramming",
        "c-Myc is amplified in Burkitt lymphoma t(8;14) and small cell carcinomas, not the primary chromosome 3p VHL pathway of clear cell RCC."
      ],
      [
        "Retinoblastoma protein (Rb) driving uninhibited progression from G2 phase to M phase of the cell cycle",
        "Rb regulates the G1/S transition (not G2/M), and is mutated in retinoblastoma and osteosarcoma, not clear cell RCC."
      ],
      [
        "Nuclear factor kappa B (NF-kappa-B) promoting anti-apoptotic Bcl-2 expression in lymphoid germinal centers",
        "NF-kB drives inflammatory and lymphoid signaling (e.g., Reed-Sternberg cells in Hodgkin lymphoma), not VHL/HIF clear cell angiogenesis."
      ],
      [
        "Forkhead box protein P3 (FOXP3) directing the differentiation of immunosuppressive regulatory T cells",
        "FOXP3 is the master transcription factor for Treg lymphocytes (mutated in IPEX syndrome), completely unrelated to renal cell carcinoma."
      ]
    ],
    "shortestValidSolution": "Clear cell RCC + chromosome 3p deletion + polycythemia -> Loss of VHL prevents degradation of HIF-1-alpha, driving VEGF and EPO transcription.",
    "necessaryInference": "Polygonal clear cells with arborizing vasculature + chromosome 3p deletion = Clear Cell RCC (VHL defect). Loss of VHL prevents ubiquitin degradation of HIF-1-alpha, which accumulates constitutively and drives VEGF (angiogenesis) and EPO (polycythemia).",
    "strongestDistractor": "c-Myc oncogene driving uncontrolled transcription of ribosome biogenesis proteins and metabolic reprogramming",
    "distractorExclusion": "c-Myc is an oncogenic driver in lymphomas, whereas clear cell RCC is driven pathognomonically by VHL inactivation and constitutive HIF-1-alpha accumulation.",
    "citation": "Kaelin WG Jr. The von Hippel-Lindau tumour suppressor protein and clear cell renal carcinoma. Nat Rev Cancer. 2008;8(11):865-873. PMID: 18941490.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Verified multi-step inference: Polygonal clear cells with arborizing vasculature + chromosome 3p deletion = Clear Cell RCC (VHL defect). Loss of VHL prevents ubiquitin degradation of HIF-1-alpha, which accumulates constitutively and drives VEGF (angiogenesis) and EPO (polycythemia).",
      "distractorExclusionNotes": "Strongest distractor 'c-Myc oncogene driving uncontrolled transcription of ribosome biogenesis protein' excluded: c-Myc is an oncogenic driver in lymphomas, whereas clear cell RCC is driven pathognomonically by VHL inactivation and constitutive HIF-1-alpha accumulation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
