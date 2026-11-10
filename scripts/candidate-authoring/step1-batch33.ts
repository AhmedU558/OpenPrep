import { CandidateSpec } from './types';

export const step1Batch33: CandidateSpec[] = [
  {
    "code": "op-c-s1-0801",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "SGLT2 Inhibitor Renal Tubuloglomerular Feedback Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with type 2 diabetes mellitus and chronic kidney disease stage 3a (estimated GFR 55 mL/min/1.73 m2, urine albumin-to-creatinine ratio 320 mg/g) initiates therapy with empagliflozin. At a 3-week follow-up visit, laboratory testing shows an acute decrease in estimated GFR to 48 mL/min/1.73 m2, followed by stabilization at subsequent visits. Serial microradiographic hemodynamic studies demonstrate a significant reduction in intraglomerular capillary hydrostatic pressure and single-nephron hyperfiltration. Which of the following physiological events directly initiates this adaptive renal hemodynamic response to sodium-glucose cotransporter 2 (SGLT2) inhibition?",
    "choices": [
      [
        "Increased solute delivery of sodium and chloride to the macula densa causing adenosine-mediated afferent vasoconstriction",
        "SGLT2 inhibitors block sodium and glucose reabsorption in the early proximal tubule (S1 segment). This increases downstream delivery of sodium and chloride to the macula densa of the juxtaglomerular apparatus. Macula densa uptake via NKCC2 stimulates local ATP consumption and breakdown to adenosine. Adenosine binds to vascular smooth muscle A1 receptors, triggering afferent arteriolar vasoconstriction via tubuloglomerular feedback (TGF). This reduces intraglomerular capillary hydrostatic pressure, single-nephron hyperfiltration, and albuminuria, causing a transient initial eGFR dip followed by long-term preservation of renal function."
      ],
      [
        "Selective antagonism of angiotensin II type 1 receptors on post-glomerular efferent arterioles causing efferent vasodilation",
        "Efferent arteriolar vasodilation is the mechanism of ACE inhibitors and ARBs; SGLT2 inhibitors act on the afferent arteriole via tubuloglomerular feedback at the macula densa."
      ],
      [
        "Profound inhibition of brush-border carbonic anhydrase leading to severe proximal tubular bicarbonate and potassium wasting",
        "Carbonic anhydrase inhibition in the proximal tubule is the mechanism of acetazolamide, not SGLT2 inhibitors, and produces proximal renal tubular acidosis without restorative tubuloglomerular afferent tone."
      ],
      [
        "Direct stimulation of endothelin-1 release from renal medullary interstitial cells causing cortical vasoconstriction",
        "Endothelin-1 causes intense vasoconstriction and renal fibrosis; SGLT2 inhibitors suppress rather than stimulate endothelin pathways."
      ],
      [
        "Complete suppression of central hypothalamic antidiuretic hormone secretion from the posterior pituitary gland",
        "SGLT2 inhibitors produce an osmotic diuresis via glycosuria and natriuresis; they do not alter central posterior pituitary vasopressin synthesis or secretion."
      ]
    ],
    "shortestValidSolution": "SGLT2 inhibition -> distal Na+/Cl- delivery to macula densa -> adenosine release -> afferent arteriolar vasoconstriction (TGF) -> decreased intraglomerular pressure.",
    "necessaryInference": "Recognize that proximal transport blockade increases solute delivery to the macula densa, restoring tubuloglomerular feedback and afferent tone.",
    "strongestDistractor": "Selective antagonism of angiotensin II type 1 receptors on post-glomerular efferent arterioles causing efferent vasodilation",
    "distractorExclusion": "Efferent vasodilation is caused by RAAS blockers; SGLT2 inhibitors restore afferent vasoconstriction via adenosine release from the macula densa.",
    "citation": "McGill JB et al. Impact of Simultaneous Initiation of Finerenone and Empagliflozin on Albuminuria Irrespective of Baseline HbA1c Levels: A Participant-Level Exploratory Analysis of the Randomised CONFIDENCE Trial. Diabetes Obes Metab. PMID: 42297748.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 renal pharmacology item assessing the tubuloglomerular feedback mechanism of SGLT2 inhibitors.",
      "distractorExclusionNotes": "Excluded RAAS efferent vasodilation because SGLT2 inhibitors act on the afferent arteriole via macula densa adenosine signalling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0802",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Sacubitril-Valsartan Neprilysin Cleavage Substrates and Bradykinin Dynamics",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with heart failure with reduced ejection fraction (NYHA class III, LVEF 28%) is switched from enalapril to sacubitril/valsartan. The physician strictly enforces a mandatory 36-hour washout period after the last dose of enalapril before initiating the new combination therapy. During the first two weeks of therapy, circulating levels of atrial natriuretic peptide (ANP), B-type natriuretic peptide (BNP), and substance P increase, while plasma N-terminal pro-BNP (NT-proBNP) levels decline. Which of the following physiological mechanisms explains both the mandatory washout period and the observed divergence between BNP and NT-proBNP concentrations?",
    "choices": [
      [
        "Neprilysin degrades both natriuretic peptides and bradykinin while NT-proBNP is cleared via renal excretion without neprilysin cleavage",
        "Sacubitril is a prodrug whose active metabolite (sacubitrilat) inhibits NEPRILYSIN (neutral endopeptidase). Neprilysin degrades vasoactive peptides including ANP, BNP, bradykinin, adrenomedullin, and substance P, but does NOT cleave NT-proBNP. Because both ACE and neprilysin degrade bradykinin, co-administration causes massive bradykinin accumulation and life-threatening ANGIOEDEMA, requiring a 36-hour washout. Because sacubitril prevents BNP degradation, circulating BNP levels rise pharmacologically; conversely, NT-proBNP is cleared renally without neprilysin cleavage and accurately reflects declining ventricular filling pressures."
      ],
      [
        "Neprilysin selectively hydrolyzes angiotensin I while valsartan blocks angiotensin II degradation causing acute aldosterone suppression",
        "Neprilysin can degrade angiotensin II, but its therapeutic benefit derives from enhancing natriuretic peptides and bradykinin; valsartan blocks AT1 receptors, not peptide degradation."
      ],
      [
        "Sacubitril directly stimulates ventricular natriuretic peptide gene transcription while inhibiting renal tubular sodium-potassium ATPase",
        "Sacubitril inhibits neutral endopeptidase (enzymatic breakdown); it does not activate cardiac transcription factors or directly inhibit Na+/K+-ATPase."
      ],
      [
        "Valsartan enhances hepatic clearance of NT-proBNP while sacubitril inhibits neutral endopeptidase cleavage of active BNP only",
        "NT-proBNP is cleared primarily by renal filtration and passive tissue excretion, not hepatic uptake; valsartan has no direct effect on NT-proBNP clearance."
      ],
      [
        "Neprilysin inhibition selectively prevents clearance of endothelin-1 leading to paradoxical coronary vasoconstriction if ACE is present",
        "While neprilysin can degrade endothelin-1, the catastrophic toxicity of combining ACE inhibitors with neprilysin inhibitors is angioedema driven by bradykinin accumulation, not endothelin vasoconstriction."
      ]
    ],
    "shortestValidSolution": "Neprilysin degrades natriuretic peptides + bradykinin; combined with ACEi -> angioedema (36h washout). Neprilysin cleaves BNP but not NT-proBNP -> BNP rises while NT-proBNP falls.",
    "necessaryInference": "Differentiate neprilysin degradation of active BNP and bradykinin from non-enzymatic renal elimination of NT-proBNP.",
    "strongestDistractor": "Neprilysin selectively hydrolyzes angiotensin I while valsartan blocks angiotensin II degradation causing acute aldosterone suppression",
    "distractorExclusion": "The washout is mandated by dual bradykinin breakdown inhibition causing angioedema; NT-proBNP is not a neprilysin substrate.",
    "citation": "McMurray JJ, Packer M, Desai AS, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure. N Engl J Med. 2014;371(11):993-1004. PMID: 25176015.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular pharmacology question requiring synthesis of neprilysin enzymatic substrates and biomarker interpretation.",
      "distractorExclusionNotes": "Excluded endothelin and AT1 degradation options because dual bradykinin inactivation and selective BNP cleavage drive the clinical phenomena.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0803",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Ivabradine Hyperpolarization-Activated Cyclic Nucleotide-Gated Channel Kinetics",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old woman with chronic stable angina and heart failure with reduced ejection fraction (LVEF 32%) remains symptomatic with exertional angina despite optimal medical therapy with carvedilol 25 mg twice daily, lisinopril, and spironolactone. Her resting heart rate is 84/min in normal sinus rhythm, and blood pressure is 114/72 mm Hg. Addition of ivabradine is considered to reduce heart rate without worsening ventricular inotropy or blood pressure. Electrophysiological analysis of sinoatrial nodal pacemaker cells demonstrates selective blockade of hyperpolarization-activated cyclic nucleotide-gated (HCN) channels. Which of the following alterations in the sinoatrial pacemaker action potential accounts for ivabradine's therapeutic action?",
    "choices": [
      [
        "Decreased slope of spontaneous phase 4 diastolic depolarization without altering phase 0 or phase 3 repolarization",
        "Ivabradine selectively inhibits the hyperpolarization-activated 'funny' current (If) conducted by HCN4 channels in the sinoatrial node. The funny current carries mixed inward Na+ and K+ currents activated at hyperpolarized potentials (-40 to -65 mV), driving PHASE 4 SPONTANEOUS DIASTOLIC DEPOLARIZATION. By slowing the rate of phase 4 depolarization, ivabradine prolongs the time required to reach the threshold potential (-40 mV), selectively reducing heart rate (negative chronotropy) without altering phase 0 upstroke (L-type Ca2+ current), repolarization duration (phase 3 K+ currents), or myocardial contractility (inotropy)."
      ],
      [
        "Prolongation of phase 0 depolarization velocity mediated by state-dependent blockade of voltage-gated fast sodium channels",
        "Phase 0 slowing via fast sodium channel blockade is characteristic of Class I antiarrhythmics (e.g., flecainide, quinidine), which act on His-Purkinje and ventricular myocytes, not SA node pacemaker cells."
      ],
      [
        "Inhibition of phase 2 plateau duration mediated by selective blockade of L-type calcium channels in ventricular myocardium",
        "Phase 2 plateau inhibition and negative inotropy occur with non-dihydropyridine calcium channel blockers (diltiazem, verapamil), which ivabradine avoids."
      ],
      [
        "Shortening of phase 3 repolarization via accelerated activation of delayed rectifier potassium currents in atrial tissue",
        "Accelerating phase 3 repolarization would shorten the action potential duration and potentially increase heart rate, whereas ivabradine does not affect delayed rectifier K+ currents."
      ],
      [
        "Selective uncoupling of beta-1 adrenergic receptors from stimulatory G-protein alpha subunits in cardiac conducting tissue",
        "Uncoupling or blocking beta-1 receptors is the mechanism of beta-blockers, which also reduce myocardial contractility (negative inotropy) and blood pressure."
      ]
    ],
    "shortestValidSolution": "Ivabradine blocks HCN (funny current) -> slows phase 4 spontaneous diastolic depolarization -> isolated negative chronotropy without negative inotropy.",
    "necessaryInference": "Map HCN channel inhibition to phase 4 diastolic depolarization in SA nodal action potential.",
    "strongestDistractor": "Inhibition of phase 2 plateau duration mediated by selective blockade of L-type calcium channels in ventricular myocardium",
    "distractorExclusion": "Ivabradine has no effect on myocardial calcium channels and preserves ventricular contractility (inotropy).",
    "citation": "Swedberg K, Komajda M, Bhm M, et al. Ivabradine and outcomes in chronic heart failure (SHIFT): a randomised placebo-controlled study. Lancet. 2010;376(9744):875-885. PMID: 20801500.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular physiology item testing pacemaker electrophysiology and HCN funny current kinetics.",
      "distractorExclusionNotes": "Excluded class I sodium and class IV calcium mechanisms because ivabradine acts purely on phase 4 slope.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0804",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "PCSK9 Monoclonal Antibody Low-Density Lipoprotein Receptor Recycling",
    "provisionalDifficulty": 4,
    "stem": "A 44-year-old man with familial hypercholesterolemia (baseline LDL-C 290 mg/dL) experiences recurrent coronary revascularization despite maximally tolerated atorvastatin and ezetimibe therapy. His physician adds evolocumab to his medical regimen. Four weeks later, repeat lipid profiling reveals a 62% reduction in serum LDL cholesterol concentrations. Cellular analysis of hepatocytes demonstrates a substantial increase in cell-surface low-density lipoprotein receptor (LDL-R) density without any significant increase in LDL-R mRNA transcription. Which of the following molecular mechanisms directly explains how evolocumab increases hepatocyte LDL receptor expression?",
    "choices": [
      [
        "Prevention of PCSK9-mediated endosomal and lysosomal targeting and degradation of internalized LDL receptors",
        "Proprotein convertase subtilisin/kexin type 9 (PCSK9) binds extracellularly to the epidermal growth factor-like repeat A (EGF-A) domain of LDL receptors on hepatocytes. When LDL and PCSK9 are internalized with LDL-R via clathrin-coated pits, PCSK9 prevents the receptor from undergoing a conformational change required to release LDL in acidic endosomes, directing the receptor to LYSOSOMAL DEGRADATION instead of recycling. Monoclonal antibodies against PCSK9 (evolocumab, alirocumab) bind circulating PCSK9 and prevent its binding to LDL-R. Consequently, internalized LDL receptors can recycle back to the hepatocyte cell surface up to 150 times, dramatically accelerating clearance of circulating LDL particles."
      ],
      [
        "Competitive inhibition of HMG-CoA reductase leading to sterol regulatory element-binding protein 2 activation",
        "Competitive inhibition of HMG-CoA reductase and SREBP-2 transcriptional upregulation of LDL-R is the mechanism of statins, which increases LDL-R mRNA, unlike evolocumab."
      ],
      [
        "Selective antagonism of Niemann-Pick C1-Like 1 (NPC1L1) transporter in enterocyte brush-border membranes",
        "NPC1L1 inhibition is the mechanism of ezetimibe, which reduces intestinal cholesterol absorption rather than preventing hepatic receptor degradation."
      ],
      [
        "Activation of peroxisome proliferator-activated receptor alpha (PPAR-alpha) stimulating lipoprotein lipase synthesis",
        "PPAR-alpha activation is the mechanism of fibrates (gemfibrozil, fenofibrate), which lowers triglycerides by upregulating lipoprotein lipase."
      ],
      [
        "Direct allosteric activation of ATP-binding cassette transporter A1 (ABCA1) accelerating reverse cholesterol transport",
        "ABCA1 mediates cellular cholesterol efflux to apoA-I to form nascent HDL particles; it does not regulate hepatic LDL-R recycling or lysosomal degradation."
      ]
    ],
    "shortestValidSolution": "Evolocumab blocks PCSK9 -> prevents lysosomal degradation of internalized LDL-R -> allows LDL-R to recycle to cell surface -> enhanced LDL clearance.",
    "necessaryInference": "Recognize post-translational recycling of LDL receptors versus transcriptional upregulation by statins.",
    "strongestDistractor": "Competitive inhibition of HMG-CoA reductase leading to sterol regulatory element-binding protein 2 activation",
    "distractorExclusion": "Statins upregulate LDL-R mRNA via SREBP-2; PCSK9 inhibitors do not alter transcription but prevent post-endocytic lysosomal degradation.",
    "citation": "Sabatine MS, Giugliano RP, Keech AC, et al. Evolocumab and Clinical Outcomes in Patients with Cardiovascular Disease. N Engl J Med. 2017;376(18):1713-1722. PMID: 28304224.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 biochemistry/pharmacology item on receptor trafficking and PCSK9 lysosomal degradation.",
      "distractorExclusionNotes": "Excluded transcriptional SREBP-2 induction based on prompt noting unchanged LDL-R mRNA transcription.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0805",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Endocrine",
    "topic": "Dual SGLT1 and SGLT2 Inhibitor Sotagliflozin Intestinal Glucose Absorption",
    "provisionalDifficulty": 5,
    "stem": "A 54-year-old man with type 1 diabetes mellitus and chronic systolic heart failure participates in a clinical trial comparing sotagliflozin to selective SGLT2 inhibitors. Unlike selective SGLT2 inhibitors, sotagliflozin demonstrates potent dual inhibition of both sodium-glucose cotransporter 2 (SGLT2) in the kidney and sodium-glucose cotransporter 1 (SGLT1) in the gastrointestinal tract. Following ingestion of a standardized mixed carbohydrate meal, pharmacokinetic and gut hormone profiling shows delayed postprandial glycemic excursions accompanied by a substantial increase in postprandial circulating glucagon-like peptide-1 (GLP-1) and peptide YY (PYY) concentrations. Which of the following intestinal mechanisms accounts for the augmented incretin secretion observed with dual SGLT1/SGLT2 inhibition?",
    "choices": [
      [
        "Inhibition of apical SGLT1 in the proximal small intestine delivers unabsorbed glucose to distal ileal and colonic L-cells",
        "SGLT1 is the primary apical transporter responsible for sodium-dependent glucose and galactose absorption in the duodenum and jejunum. Dual SGLT1/SGLT2 inhibition with sotagliflozin inhibits proximal enterocyte glucose uptake, causing unabsorbed luminal carbohydrates to transit distally into the terminal ileum and colon. There, the high carbohydrate load directly stimulates enteroendocrine L-CELLS and undergoes colonic bacterial fermentation into short-chain fatty acids (SCFAs), triggering robust secretion of GLP-1 and PYY. This delays gastric emptying and promotes satiety while reducing postprandial glucose excursions."
      ],
      [
        "Direct allosteric activation of dipeptidyl peptidase-4 (DPP-4) resistance on circulating native GLP-1 peptides",
        "Sotagliflozin inhibits sodium-glucose cotransporters and has no direct enzymatic interaction with DPP-4; DPP-4 inhibitors (gliptins) prevent GLP-1 degradation."
      ],
      [
        "Selective blockade of basolateral GLUT2 transporters preventing hexose exit from proximal enterocytes into portal blood",
        "GLUT2 is a facilitative glucose transporter on the basolateral enterocyte membrane; sotagliflozin does not inhibit GLUT2, which is structurally and mechanistically distinct from SGLT1."
      ],
      [
        "Accelerated brush-border disaccharidase cleavage of dietary maltose and sucrose in the jejunum",
        "Disaccharidases (maltase, sucrase) are targeted by alpha-glucosidase inhibitors (acarbose, miglitol); sotagliflozin blocks active monosaccharide transport via SGLT1, not disaccharide hydrolysis."
      ],
      [
        "Stimulation of gastric parietal cell histamine H2 receptors triggering rapid gastric emptying and nutrient delivery",
        "Histamine H2 receptors regulate gastric acid secretion, and enhanced gastric emptying would accelerate postprandial glucose spikes rather than blunting them."
      ]
    ],
    "shortestValidSolution": "SGLT1 inhibition in proximal bowel -> unabsorbed glucose reaches distal ileum -> L-cells stimulated -> increased GLP-1 and PYY release.",
    "necessaryInference": "Link proximal enterocyte glucose transport blockade to distal ileal L-cell nutrient exposure and incretin release.",
    "strongestDistractor": "Selective blockade of basolateral GLUT2 transporters preventing hexose exit from proximal enterocytes into portal blood",
    "distractorExclusion": "Sotagliflozin selectively inhibits apical SGLT1 and SGLT2, not basolateral facilitative GLUT2.",
    "citation": "Bhatt DL, Szarek M, Steg PG, et al. Sotagliflozin in Patients with Diabetes and Recent Worsening Heart Failure. N Engl J Med. 2021;384(2):117-128. PMID: 33200892.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 gastrointestinal/endocrine pharmacology item testing the gut-endocrine axis and SGLT1 incretin physiology.",
      "distractorExclusionNotes": "Excluded GLUT2 and disaccharidase options; intestinal SGLT1 blockade delays absorption and directs hexoses to ileal L-cells.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0806",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Nonsteroidal Mineralocorticoid Receptor Antagonist Finerenone Selectivity",
    "provisionalDifficulty": 4,
    "stem": "A 60-year-old man with type 2 diabetes mellitus and chronic kidney disease stage 3b with macroalbuminuria receives lisinopril and empagliflozin. To provide additional kidney and cardiovascular protection, finerenone is added to his treatment regimen. The physician notes that compared to older steroidal mineralocorticoid receptor antagonists (spironolactone and eplerenone), finerenone exhibits high selectivity for the mineralocorticoid receptor with negligible binding to androgen, progesterone, or glucocorticoid receptors. Which of the following adverse clinical effects is substantially less likely to occur with finerenone compared to spironolactone as a direct consequence of this pharmacological selectivity?",
    "choices": [
      [
        "Painful gynecomastia and erectile dysfunction due to androgen receptor antagonism",
        "Spironolactone is a steroidal mineralocorticoid receptor antagonist with significant off-target affinity for androgen receptors (acting as an antagonist) and progesterone receptors (acting as an agonist), causing gynecomastia, breast tenderness, erectile dysfunction, and menstrual irregularities. FINERENONE is a non-steroidal mineralocorticoid receptor antagonist with high selectivity for the mineralocorticoid receptor and minimal to no affinity for androgen or progesterone receptors. Consequently, endocrine side effects such as gynecomastia and sexual dysfunction occur at rates comparable to placebo with finerenone."
      ],
      [
        "Acute hyperkalemia and life-threatening cardiac conduction arrhythmias",
        "Hyperkalemia is an on-target consequence of mineralocorticoid receptor blockade in cortical collecting tubules and remains a key adverse effect of finerenone requiring serum potassium monitoring."
      ],
      [
        "Refractory prerenal azotemia and severe intravascular volume contraction",
        "Volume contraction can occur with all natriuretic agents, but is not an off-target steroid-receptor-mediated effect spared by non-steroidal selectivity."
      ],
      [
        "Severe hypomagnesemia and refractory neuromuscular irritability",
        "Hypomagnesemia is typically caused by loop or thiazide diuretics; mineralocorticoid receptor antagonists tend to conserve rather than waste divalent cations."
      ],
      [
        "Cushingoid adiposity and hypothalamic-pituitary-adrenal axis suppression",
        "Neither spironolactone nor finerenone acts as a glucocorticoid receptor agonist to induce Cushingoid features or suppress the HPA axis."
      ]
    ],
    "shortestValidSolution": "Finerenone is non-steroidal with no affinity for androgen/progesterone receptors -> avoids spironolactone-induced gynecomastia and sexual dysfunction.",
    "necessaryInference": "Differentiate steroidal cross-reactivity with sex steroid receptors from non-steroidal selective mineralocorticoid antagonism.",
    "strongestDistractor": "Acute hyperkalemia and life-threatening cardiac conduction arrhythmias",
    "distractorExclusion": "Hyperkalemia is an on-target effect of MR blockade that still occurs with finerenone; gynecomastia is the off-target antiandrogenic effect avoided by finerenone.",
    "citation": "Mentz RJ et al. Efficacy and safety of finerenone in patients with chronic kidney disease and type 2 diabetes by diuretic use: A FIDELITY analysis. Eur J Heart Fail. PMID: 39823276.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 renal/endocrine pharmacology question on receptor selectivity and structural steroid-dependence.",
      "distractorExclusionNotes": "Excluded hyperkalemia because it is an on-target class effect; gynecomastia reflects off-target androgen antagonism avoided by finerenone.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0807",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Tolvaptan V2 Receptor Antagonism Aquaporin-2 Water Permeability Dynamics",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man with autosomal dominant polycystic kidney disease (ADPKD) and rapidly progressive decline in renal function initiates therapy with tolvaptan. Following drug administration, he experiences a marked increase in daily urine output from 1.8 L/day to 6.2 L/day, with a concurrent decrease in urine osmolality from 540 mOsm/kg to 120 mOsm/kg, while serum sodium rises from 138 mEq/L to 142 mEq/L. Renal tubular cell physiology studies confirm selective competitive blockade of vasopressin V2 receptors. Which of the following cellular events in medullary collecting duct principal cells is directly inhibited by tolvaptan?",
    "choices": [
      [
        "cAMP-dependent protein kinase A phosphorylation and apical exocytosis of aquaporin-2 water channels",
        "Vasopressin normally binds basolateral V2 RECEPTORS on renal collecting duct principal cells, activating Gs, adenylyl cyclase, and cyclic AMP (cAMP) generation. Elevated cAMP activates PROTEIN KINASE A (PKA), which phosphorylates intracellular vesicles containing AQUAPORIN-2 (AQP2) water channels, promoting their exocytic insertion into the apical (luminal) membrane. TOLVAPTAN is a selective competitive V2 receptor antagonist that blocks this signaling pathway, preventing AQP2 insertion and rendering the apical membrane impermeable to water. This causes profound aquaresis (free water excretion without electrolyte loss), reducing urine osmolality and slowing cyst proliferation in ADPKD."
      ],
      [
        "Basolateral insertion of constitutively expressed aquaporin-3 and aquaporin-4 water channels",
        "Aquaporin-3 and -4 are constitutively expressed on the basolateral membrane of principal cells and are not acutely regulated by V2 receptor phosphorylation cascades."
      ],
      [
        "Direct transcriptional upregulation of epithelial sodium channels (ENaC) in cortical principal cells",
        "ENaC expression and apical membrane insertion are regulated primarily by aldosterone via mineralocorticoid receptors, not directly by V2 aquaresis."
      ],
      [
        "Inositol 1,4,5-trisphosphate-mediated intracellular calcium release and vascular smooth muscle contraction",
        "IP3-mediated calcium release and smooth muscle contraction are downstream of vasopressin V1a receptors, whereas tolvaptan selectively targets V2 receptors."
      ],
      [
        "Active sodium and chloride cotransport across the apical membrane of the thick ascending limb of Henle",
        "Thick ascending limb Na-K-2Cl cotransport is mediated by NKCC2, the target of loop diuretics, not collecting duct V2 receptors."
      ]
    ],
    "shortestValidSolution": "Tolvaptan blocks basolateral V2 -> inhibits cAMP/PKA -> prevents apical insertion of aquaporin-2 -> water impermeability and aquaresis.",
    "necessaryInference": "Map V2 receptor signaling to PKA-mediated exocytic insertion of apical aquaporin-2 channels.",
    "strongestDistractor": "Basolateral insertion of constitutively expressed aquaporin-3 and aquaporin-4 water channels",
    "distractorExclusion": "Aquaporin-3 and -4 are constitutive on the basolateral membrane; only apical aquaporin-2 is regulated by V2-cAMP-PKA exocytosis.",
    "citation": "Torres VE, Chapman AB, Devuyst O, et al. Tolvaptan in patients with autosomal dominant polycystic kidney disease. N Engl J Med. 2012;367(25):2407-2418. PMID: 23121377.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 renal physiology and pharmacology question on V2 receptor second-messenger signaling and aquaporin trafficking.",
      "distractorExclusionNotes": "Excluded basolateral aquaporins (AQP3/4 are constitutive) and V1a IP3/Ca2+ signaling based on V2 receptor selectivity.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0808",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Endocrine",
    "topic": "Vasopressin Receptor Subtype G-Protein Coupling V1a versus V2 Signaling",
    "provisionalDifficulty": 5,
    "stem": "An investigator studies the distinct physiological actions of arginine vasopressin (AVP) on isolated vascular smooth muscle cells and renal inner medullary collecting duct epithelial cells. In vascular smooth muscle preparations, administration of AVP triggers rapid cell contraction within seconds, accompanied by a sharp rise in cytosolic free calcium that is blocked by intracellular chelation of inositol 1,4,5-trisphosphate. In contrast, application of AVP to collecting duct epithelial cells produces no change in cytosolic calcium but stimulates a 6-fold increase in cyclic adenosine monophosphate (cAMP) production. Which of the following pairs correctly identifies the primary G-protein alpha subunit coupled to each vasopressin receptor subtype in these respective tissues?",
    "choices": [
      [
        "Vascular smooth muscle: Gq subunit; Medullary collecting duct: Gs subunit",
        "Vasopressin mediates its diverse physiological effects through distinct G-protein-coupled receptor subtypes. V1a RECEPTORS (predominant on vascular smooth muscle cells) are coupled to Gq PROTEINS; activation of phospholipase C-beta (PLC) generates inositol 1,4,5-trisphosphate (IP3) and diacylglycerol (DAG), releasing calcium from the sarcoplasmic reticulum and activating protein kinase C to induce intense VASOCONSTRICTION. In contrast, V2 RECEPTORS (predominant on collecting duct principal cells and vascular endothelial cells) are coupled to Gs PROTEINS; activation of adenylyl cyclase stimulates cAMP production and PKA activation to promote aquaporin-2 apical insertion and von Willebrand factor exocytosis."
      ],
      [
        "Vascular smooth muscle: Gs subunit; Medullary collecting duct: Gi subunit",
        "Gs coupling in vascular smooth muscle stimulates PKA and causes vasodilation (e.g., beta-2 agonists), opposite to AVP-induced vasoconstriction."
      ],
      [
        "Vascular smooth muscle: Gi subunit; Medullary collecting duct: Gq subunit",
        "Gi coupling inhibits adenylyl cyclase, whereas collecting duct AVP signaling markedly increases cAMP; V2 is Gs-coupled, not Gq-coupled."
      ],
      [
        "Vascular smooth muscle: G12/13 subunit; Medullary collecting duct: Gi subunit",
        "G12/13 primarily regulates Rho-mediated actin cytoskeletal remodeling; it does not drive the rapid IP3-dependent calcium spike of V1a receptors."
      ],
      [
        "Vascular smooth muscle: Gq subunit; Medullary collecting duct: Gi subunit",
        "While V1a is correctly Gq-coupled, V2 stimulates adenylyl cyclase via Gs, not Gi (which would decrease cAMP)."
      ]
    ],
    "shortestValidSolution": "V1a = Gq -> PLC -> IP3/DAG -> Ca2+ -> vasoconstriction; V2 = Gs -> adenylyl cyclase -> cAMP -> PKA -> aquaporin-2 insertion.",
    "necessaryInference": "Map V1a to Gq (calcium/constriction) and V2 to Gs (cAMP/aquaporin trafficking).",
    "strongestDistractor": "Vascular smooth muscle: Gq subunit; Medullary collecting duct: Gi subunit",
    "distractorExclusion": "V2 activates adenylyl cyclase via Gs to increase cAMP, whereas Gi would inhibit adenylyl cyclase and decrease cAMP.",
    "citation": "Birnbaumer M. Vasopressin receptors. Trends Endocrinol Metab. 2000;11(10):406-410. PMID: 11091117.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 endocrine and cellular physiology item testing G-protein second messenger pathways for V1a and V2 receptors.",
      "distractorExclusionNotes": "Excluded Gi/Gs mismatches; collecting duct cells generate cAMP (Gs), while vascular cells generate IP3/Ca2+ (Gq).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0809",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Acetazolamide Choroid Plexus Cerebrospinal Fluid Secretion Inhibition",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old obese woman (BMI 36 kg/m2) presents with a 2-month history of daily pulsatile headaches, transient visual obscurations, and horizontal diplopia. Funduscopic examination reveals bilateral papilledema, and visual field testing demonstrates enlargement of the blind spot. Brain MRI with MR venography shows an empty sella turcica and normal cerebral venous sinuses without thrombosis or mass lesion. Lumbar puncture in the lateral decubitus position demonstrates an opening pressure of 340 mm H2O with normal cerebrospinal fluid (CSF) cell count, glucose, and protein. The patient is diagnosed with idiopathic intracranial hypertension (pseudotumor cerebri) and prescribed oral acetazolamide. Which of the following biochemical mechanisms accounts for acetazolamide's ability to lower intracranial pressure in this patient?",
    "choices": [
      [
        "Inhibition of carbonic anhydrase in choroid plexus epithelial cells decreasing apical bicarbonate and fluid secretion",
        "Idiopathic intracranial hypertension is characterized by elevated intracranial pressure without ventriculomegaly or intracranial mass. First-line medical therapy is ACETAZOLAMIDE, a reversible inhibitor of CARBONIC ANHYDRASE. In the CHOROID PLEXUS epithelium, carbonic anhydrase catalyzes the reversible hydration of CO2 to H2CO3, which dissociates into H+ and HCO3-. Bicarbonate is transported across the apical membrane into the cerebral ventricles, creating an osmotic gradient that drives sodium and water movement to form CSF. Inhibition of choroid plexus carbonic anhydrase reduces CSF production by up to 50%, directly lowering intracranial pressure and protecting vision."
      ],
      [
        "Osmotic extraction of water from cerebral parenchyma into the systemic circulation via an intact blood-brain barrier",
        "Osmotic extraction of free water across the blood-brain barrier is the mechanism of intravenous mannitol or hypertonic saline, not oral acetazolamide."
      ],
      [
        "Blockade of arachnoid villi sodium-potassium-2-chloride cotransporters enhancing passive CSF venous resorption",
        "Acetazolamide acts on carbonic anhydrase to reduce CSF secretion at the choroid plexus, rather than modifying arachnoid villi NKCC transporters."
      ],
      [
        "Selective dilation of cerebral cortical arterioles mediated by localized perivascular hypercapnic acidosis",
        "Cerebral arteriolar dilation would increase cerebral blood volume and increase intracranial pressure, whereas acetazolamide decreases intracranial pressure by reducing CSF volume."
      ],
      [
        "Direct down-regulation of aquaporin-4 water channels in astrocytic end-feet surrounding cerebral capillaries",
        "Aquaporin-4 is targeted in neuromyelitis optica and cerebral edema research, but is not the pharmacological target of acetazolamide."
      ]
    ],
    "shortestValidSolution": "Acetazolamide inhibits choroid plexus carbonic anhydrase -> decreased HCO3- and fluid transport into ventricles -> reduced CSF production -> decreased ICP.",
    "necessaryInference": "Connect carbonic anhydrase inhibition in the choroid plexus to reduced apical HCO3- secretion and decreased CSF production rate.",
    "strongestDistractor": "Osmotic extraction of water from cerebral parenchyma into the systemic circulation via an intact blood-brain barrier",
    "distractorExclusion": "Mannitol produces osmotic extraction of parenchymal water; acetazolamide reduces active CSF secretion at the choroid plexus.",
    "citation": "Wall M, McDermott MP, Kieburtz KD, et al. Effect of acetazolamide on visual function in patients with idiopathic intracranial hypertension and mild visual loss: the Idiopathic Intracranial Hypertension Treatment Trial (IIHTT). JAMA. 2014;311(16):1641-1651. PMID: 24756514.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pharmacology and neurophysiology question on CSF dynamics and choroid plexus transport.",
      "distractorExclusionNotes": "Excluded osmotic dehydrating agents (mannitol) and cerebral vasodilation based on choroid plexus carbonic anhydrase inhibition.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0810",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Loop Diuretic Macula Densa NKCC2 Inhibition and Hyperreninemia Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man with acute decompensated heart failure receives high-dose intravenous furosemide. Over the next 4 hours, he achieves 2.4 L of diuresis. Serial plasma hormone testing demonstrates a dramatic 5-fold rise in plasma renin activity (PRA) and circulating angiotensin II levels, despite remaining clinically euvolemic with a stable blood pressure of 124/76 mm Hg. Physiological analysis reveals that loop diuretics stimulate renin secretion not only via systemic baroreceptor unloading, but also via a direct, intrarenal cellular mechanism located at the juxtaglomerular apparatus. Which of the following cellular events at the macula densa accounts for this direct stimulation of renin release by furosemide?",
    "choices": [
      [
        "Inhibition of luminal NKCC2 cotransporters prevents macula densa solute uptake, mimicking severe distal hypoperfusion",
        "The macula densa senses tubular fluid NaCl concentration via the apical Na+-K+-2Cl- cotransporter (NKCC2). Under normal conditions, high luminal NaCl uptake triggers ATP breakdown to adenosine, which suppresses renin release from adjacent juxtaglomerular (granular) cells. FUROSEMIDE directly inhibits NKCC2 in both the thick ascending limb AND the macula densa. By blocking macula densa sodium and chloride entry, furosemide prevents intracellular signaling and 'tricks' macula densa cells into perceiving zero luminal flow/hypoperfusion. This relieves tonic adenosine inhibition and triggers local prostaglandin (PGE2) release, directly stimulating juxtaglomerular granular cells to synthesize and exocytose RENIN."
      ],
      [
        "Direct stimulation of renal sympathetic nerve beta-1 adrenergic receptors on juxtaglomerular cells",
        "Sympathetic activation can stimulate renin release via beta-1 receptors, but this is a neural reflex to systemic hypovolemia, not the direct intrarenal macula densa cellular action of furosemide."
      ],
      [
        "Selective blockade of potassium-sparing epithelial sodium channels in the cortical collecting duct",
        "Epithelial sodium channels (ENaC) are located in the late distal tubule and collecting duct, not the macula densa; blocking ENaC is the mechanism of amiloride and triamterene."
      ],
      [
        "Inhibition of basolateral sodium-potassium ATPase in proximal convoluted tubule brush-border cells",
        "Furosemide does not inhibit the Na+/K+-ATPase in proximal tubules; its primary pharmacological target is the luminal NKCC2 cotransporter."
      ],
      [
        "Enhancement of intrarenal atrial natriuretic peptide receptor-A guanylyl cyclase activity",
        "ANP suppresses renin release; loop diuretics do not stimulate ANP receptors."
      ]
    ],
    "shortestValidSolution": "Furosemide blocks NKCC2 on macula densa -> cell senses falsely zero Na+/Cl- uptake -> COX-2/PGE2 activation -> direct renin release from JG cells.",
    "necessaryInference": "Recognize that NKCC2 is expressed on macula densa cells and its pharmacological blockade directly simulates distal tubular hypoperfusion.",
    "strongestDistractor": "Direct stimulation of renal sympathetic nerve beta-1 adrenergic receptors on juxtaglomerular cells",
    "distractorExclusion": "Sympathetic beta-1 stimulation is an extra-renal reflex, whereas the question specifically identifies the intrarenal macula densa cellular mechanism.",
    "citation": "Oppermann M et al. Renal function in mice with targeted disruption of the A isoform of the Na-K-2Cl co-transporter. J Am Soc Nephrol. PMID: 17215439.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 renal physiology and pharmacology question dissecting macula densa sensing and renin regulation.",
      "distractorExclusionNotes": "Excluded neural beta-1 reflex because the prompt specifies the direct macula densa NKCC2 cellular mechanism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0811",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Thiazide Diuretic Distal Tubule Calcium Reabsorption Mechanism",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old man with recurrent calcium oxalate nephrolithiasis and idiopathic hypercalciuria (24-hour urine calcium 380 mg, normal < 250 mg) is prescribed hydrochlorothiazide 25 mg daily. At a 6-week follow-up, repeat 24-hour urine collection reveals a significant reduction in urine calcium to 160 mg, accompanied by a mild rise in serum calcium from 9.4 mg/dL to 9.9 mg/dL. Physiological studies of distal convoluted tubule (DCT) epithelial cells demonstrate that inhibition of the apical sodium-chloride cotransporter (NCC) drives calcium reabsorption. Which of the following cellular transport mechanisms directly accounts for the increased basolateral calcium efflux in DCT cells treated with thiazide diuretics?",
    "choices": [
      [
        "Decreased intracellular sodium concentration enhances basolateral sodium-calcium exchanger (NCX1) activity",
        "Thiazide diuretics inhibit the apical Na+-Cl- cotransporter (NCC) in the early distal convoluted tubule. By blocking apical sodium entry, thiazides lower intracellular Na+ concentration in DCT epithelial cells. This creates a steeper electrochemical gradient for sodium entry across the basolateral membrane, dramatically stimulating the basolateral 3Na+/1Ca2+ EXCHANGER (NCX1). Enhanced NCX1 activity pumps calcium out of the cell into the interstitium and peritubular capillaries, lowering intracellular free calcium. This steepens the chemical gradient driving luminal calcium entry across apical TRPV5 channels, producing hypocalciuria."
      ],
      [
        "Direct allosteric activation of apical calcium-sensing receptors (CaSR) by luminal thiazide molecules",
        "Thiazides inhibit NCC; they do not act as direct allosteric agonists of the calcium-sensing receptor (CaSR)."
      ],
      [
        "Disruption of the medullary interstitial hyperosmolar gradient dissipating paracellular calcium driving forces",
        "Disruption of the medullary gradient and dissipation of lumen-positive transepithelial potential is the mechanism of loop diuretics, which causes hypercalciuria, not hypocalciuria."
      ],
      [
        "Upregulation of proximal tubular sodium-proton antiporters (NHE3) mediated by systemic metabolic acidosis",
        "Thiazides cause mild metabolic alkalosis (not acidosis), and while mild volume contraction increases passive proximal calcium reabsorption, direct active DCT reabsorption is driven by basolateral NCX1."
      ],
      [
        "Selective stimulation of 1-alpha-hydroxylase in DCT cells enhancing local 1,25-dihydroxyvitamin D synthesis",
        "Renal 1-alpha-hydroxylase is located primarily in the proximal tubule and is regulated by PTH and FGF23, not by thiazide NCC inhibition."
      ]
    ],
    "shortestValidSolution": "Thiazide blocks NCC -> drops intracellular Na+ in DCT -> drives basolateral Na+/Ca2+ exchanger (NCX1) -> hypocalciuria.",
    "necessaryInference": "Map NCC apical blockade to reduced intracellular Na+ and enhanced basolateral NCX1 calcium extrusion.",
    "strongestDistractor": "Upregulation of proximal tubular sodium-proton antiporters (NHE3) mediated by systemic metabolic acidosis",
    "distractorExclusion": "Thiazides induce metabolic alkalosis, and active DCT hypocalciuria is directly mediated by basolateral NCX1 exchange.",
    "citation": "Muiesan ML et al. Challenges and Perspectives in Optimising the Treatment of Arterial Hypertension: Role of the Ramipril-Amlodipine-Hydrochlorothiazide Single-Pill Combination. High Blood Press Cardiovasc Prev. PMID: 41779342.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 renal pharmacology item on distal tubular divalent ion transport and thiazide hypocalciuria.",
      "distractorExclusionNotes": "Excluded loop diuretic lumen-positive potential and metabolic acidosis mechanisms based on DCT NCX1 energetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0812",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Aliskiren Direct Renin Inhibition Plasma Renin Activity versus Concentration",
    "provisionalDifficulty": 5,
    "stem": "A 55-year-old man with primary hypertension is enrolled in a clinical pharmacology trial evaluating the direct renin inhibitor aliskiren. Four weeks after initiating daily oral therapy, his blood pressure decreases from 154/96 mm Hg to 132/82 mm Hg. Specialized endocrine laboratory evaluation reveals a profound 80% decrease in plasma renin activity (PRA) alongside a dramatic 4-fold increase in immunoreactive plasma renin concentration (PRC). Which of the following physiological principles accounts for the striking divergence between plasma renin activity and plasma renin concentration during aliskiren therapy?",
    "choices": [
      [
        "Competitive active-site blockade suppresses enzymatic angiotensinogen cleavage while loss of negative feedback stimulates renin release",
        "ALISKIREN binds directly to the catalytically active site of circulating RENIN, competitively preventing it from cleaving its endogenous substrate, angiotensinogen, into angiotensin I. PLASMA RENIN ACTIVITY (PRA) measures the functional enzymatic capacity of plasma to generate angiotensin I in vitro, which is markedly suppressed by aliskiren. However, downstream suppression of angiotensin II and aldosterone relieves tonic negative feedback on juxtaglomerular cells (mediated via AT1 receptors). Consequently, juxtaglomerular cells synthesize and secrete massive amounts of immunoreactive renin enzyme into the circulation, producing a dramatic surge in total PLASMA RENIN CONCENTRATION (PRC)."
      ],
      [
        "Direct inhibition of hepatic angiotensinogen transcription coupled with accelerated renal clearance of active renin",
        "Aliskiren does not inhibit hepatic angiotensinogen synthesis, and renal excretion of renin is not accelerated."
      ],
      [
        "Selective antagonism of vascular angiotensin II type 2 receptors triggering compensatory adrenal renin exocytosis",
        "Renin is synthesized and secreted by juxtaglomerular granular cells of the kidney, not the adrenal gland; aliskiren acts directly on the renin enzyme."
      ],
      [
        "Irreversible covalent inactivation of renal angiotensin-converting enzyme accompanied by profound bradykinin accumulation",
        "Covalent inactivation of ACE and bradykinin accumulation describe ACE inhibitors, which increase both PRA and PRC, unlike the enzymatic dissociation seen with aliskiren."
      ],
      [
        "Allosteric stimulation of prorenin receptor dimerization causing selective functional uncoupling of circulating aldosterone",
        "Aliskiren blocks the catalytic pocket of renin; it does not uncouple aldosterone from its receptor via prorenin receptor dimerization."
      ]
    ],
    "shortestValidSolution": "Aliskiren blocks renin active site -> enzymatic PRA drops. Loss of Ang II negative feedback -> JG cells secrete more renin enzyme -> immunoreactive PRC surges.",
    "necessaryInference": "Differentiate functional enzymatic cleavage (PRA) from total immunoreactive protein quantity (PRC) under interrupted negative feedback.",
    "strongestDistractor": "Irreversible covalent inactivation of renal angiotensin-converting enzyme accompanied by profound bradykinin accumulation",
    "distractorExclusion": "ACE inhibitors increase both PRA and PRC; aliskiren uniquely suppresses enzymatic PRA while elevating immunoreactive PRC.",
    "citation": "Toole J et al. Heart Failure With Reduced and Preserved Ejection Fraction: A Review of Guideline Directed Medical Therapy. Int J Angiol. PMID: 42992303.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular endocrinology/pharmacology item evaluating RAAS feedback loops and biomarker divergence.",
      "distractorExclusionNotes": "Excluded ACEi mechanisms because PRA and PRC diverge uniquely under direct active-site enzyme inhibition.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0813",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Pindolol Intrinsic Sympathomimetic Activity Resting versus Exercise Effects",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old man with mild hypertension and resting sinus bradycardia (heart rate 50/min) is evaluated for antihypertensive therapy. His physician wishes to avoid worsening his resting bradycardia while providing adequate blood pressure control. The patient is prescribed pindolol, a non-selective beta-blocker with intrinsic sympathomimetic activity (ISA). During an exercise treadmill test, his resting heart rate is maintained at 58/min, but his peak exercise heart rate achieves only 122/min (compared to 165/min off medication). Which of the following pharmacological mechanisms best explains why pindolol preserves resting heart rate while blunting peak exercise heart rate?",
    "choices": [
      [
        "Partial beta-receptor agonism produces low-grade baseline stimulation but competitively prevents full catecholamine activation",
        "PINDOLOL is a PARTIAL AGONIST at beta-1 and beta-2 adrenergic receptors possessing INTRINSIC SYMPATHOMIMETIC ACTIVITY (ISA). At rest, when endogenous sympathetic tone and circulating catecholamines are low, pindolol binds beta receptors and exerts weak intrinsic stimulation (partial agonist effect), thereby preventing severe resting bradycardia. In contrast, during intense exercise, when massive surges of endogenous norepinephrine and epinephrine compete for the same receptors, pindolol acts as a COMPETITIVE ANTAGONIST against full agonists, preventing maximal receptor activation and blunting the peak heart rate and blood pressure response."
      ],
      [
        "Selective antagonism of cardiac beta-1 receptors coupled with allosteric activation of post-junctional alpha-1 receptors",
        "Pindolol is non-selective (blocks beta-1 and beta-2) and does not act as an allosteric agonist on alpha-1 adrenergic receptors."
      ],
      [
        "Direct inhibition of sinus node inward rectifier potassium currents with preservation of delayed rectifiers",
        "Pindolol acts on beta-adrenergic G-protein-coupled receptors, not via direct modulation of inward rectifier potassium channels."
      ],
      [
        "State-dependent blockade of ventricular L-type calcium channels active only at depolarized membrane voltages",
        "State-dependent L-type calcium channel blockade is the mechanism of verapamil and diltiazem, not partial beta-agonists."
      ],
      [
        "Preferential stimulation of vagal parasympathetic tone at rest that undergoes fatigue during strenuous exercise",
        "Pindolol does not stimulate central or peripheral muscarinic/vagal pathways; its effect is entirely receptor-intrinsic partial beta-agonism."
      ]
    ],
    "shortestValidSolution": "Pindolol is a partial beta-agonist (ISA) -> weak agonist at rest (avoids bradycardia) but competitive antagonist against high catecholamines during exercise.",
    "necessaryInference": "Apply partial agonist receptor theory to varying levels of endogenous agonist tone (rest vs exercise).",
    "strongestDistractor": "Selective antagonism of cardiac beta-1 receptors coupled with allosteric activation of post-junctional alpha-1 receptors",
    "distractorExclusion": "Pindolol is a non-selective partial beta agonist; it has no alpha-1 agonist properties.",
    "citation": "Frishman WH et al. Beta-Adrenergic Receptor Blockers in Hypertension: Alive and Well. Prog Cardiovasc Dis. PMID: 27984052.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 autonomic pharmacology item testing partial agonist dynamics under baseline versus stimulated sympathetic tone.",
      "distractorExclusionNotes": "Excluded pure antagonist and calcium channel options based on classical partial agonism (ISA) characteristics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0814",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Clonidine Abrupt Withdrawal Rebound Hypertension Pathophysiology",
    "provisionalDifficulty": 4,
    "stem": "A 56-year-old man who has taken high-dose oral clonidine (0.3 mg three times daily) for refractory hypertension abruptly discontinues the medication when he runs out of pills while traveling. Thirty-six hours after his last dose, he presents to the emergency department with severe headache, profuse diaphoresis, palpitation, tremor, and extreme anxiety. His blood pressure is 228/124 mm Hg and heart rate is 128/min in sinus tachycardia. Plasma catecholamine levels reveal markedly elevated norepinephrine (2,100 pg/mL, normal < 500 pg/mL). Which of the following receptor alterations accounts for the severe rebound hypertensive crisis precipitated by abrupt clonidine cessation?",
    "choices": [
      [
        "Sudden loss of presynaptic alpha-2 receptor agonism unleashes massive norepinephrine release onto upregulated postsynaptic alpha-1 receptors",
        "Clonidine is a centrally acting ALPHA-2 ADRENERGIC AGONIST. It stimulates presynaptic alpha-2 receptors in the rostral ventrolateral medulla and sympathetic nerve terminals, which couple to Gi proteins to inhibit adenylyl cyclase, open potassium channels, and inhibit exocytic release of norepinephrine. Chronic clonidine therapy chronically down-regulates endogenous sympathetic outflow, leading to compensatory UP-REGULATION AND HYPERSENSITIVITY OF POSTSYNAPTIC ALPHA-1 AND BETA-1 ADRENERGIC RECEPTORS. When clonidine is abruptly withdrawn, presynaptic inhibition is instantly lost, resulting in a massive, uninhibited surge of norepinephrine acting on supersensitive postsynaptic receptors, provoking hypertensive crisis."
      ],
      [
        "Irreversible desensitization of vascular smooth muscle endothelial nitric oxide synthase enzymes",
        "Clonidine withdrawal is mediated by central and peripheral sympathoexcitation, not direct inactivation of eNOS."
      ],
      [
        "Rapid internalization and degradation of vascular angiotensin II type 1 receptors in arteriolar beds",
        "Internalization of AT1 receptors would lower blood pressure rather than precipitating a hypertensive emergency."
      ],
      [
        "Acute activation of adrenal medullary phenylethanolamine N-methyltransferase by glucocorticoid surges",
        "While adrenal epinephrine release may occur, the primary driver is the massive release of norepinephrine from central and peripheral sympathetic terminals."
      ],
      [
        "Selective uncoupling of renal dopamine DA1 receptors from stimulatory G-protein alpha subunits",
        "Clonidine acts on alpha-2 adrenergic receptors; it does not alter renal dopamine DA1 receptor G-protein coupling."
      ]
    ],
    "shortestValidSolution": "Clonidine withdrawal -> loss of presynaptic alpha-2 inhibition -> surge of norepinephrine hitting upregulated postsynaptic alpha-1/beta-1 receptors -> hypertensive crisis.",
    "necessaryInference": "Synthesize presynaptic Gi inhibition with chronic postsynaptic receptor supersensitivity to explain rebound crisis.",
    "strongestDistractor": "Acute activation of adrenal medullary phenylethanolamine N-methyltransferase by glucocorticoid surges",
    "distractorExclusion": "The crisis is driven by massive release of norepinephrine from disinhibited sympathetic terminals acting on supersensitive postsynaptic receptors.",
    "citation": "Houston MC et al. Abrupt discontinuation of antihypertensive therapy. South Med J. PMID: 6116286.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 autonomic pharmacology question on alpha-2 presynaptic autoreceptors and receptor supersensitivity.",
      "distractorExclusionNotes": "Excluded renin, eNOS, and dopamine mechanisms based on classical presynaptic sympathetic disinhibition.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0815",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Renal",
    "topic": "Fenoldopam DA1 Receptor Agonism Hypertensive Emergency Renal Hemodynamics",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with hypertensive nephrosclerosis presents in hypertensive emergency with a blood pressure of 230/130 mm Hg, serum creatinine elevated to 2.4 mg/dL (baseline 1.2 mg/dL), and bilateral flame hemorrhages on funduscopy. Intravenous fenoldopam infusion is initiated to achieve controlled blood pressure reduction while preserving renal perfusion. Within 30 minutes, his blood pressure declines to 175/100 mm Hg, while renal plasma flow increases by 35% and urinary sodium excretion doubles. Cellular analysis shows that fenoldopam acts as a selective dopamine DA1 receptor agonist. Which of the following intracellular signaling cascades is directly stimulated by fenoldopam in renal cortical arterioles?",
    "choices": [
      [
        "Gs-protein activation of adenylyl cyclase stimulating cyclic AMP accumulation and protein kinase A activation",
        "FENOLDOPAM is a selective post-synaptic DOPAMINE DA1 RECEPTOR AGONIST with minimal or no alpha- or beta-adrenergic affinity. DA1 receptors are Gs-PROTEIN-COUPLED receptors expressed on renal, mesenteric, coronary, and cerebral arterial smooth muscle. Ligand binding activates ADENYLYL CYCLASE, generating CYCLIC AMP (cAMP) and activating PROTEIN KINASE A (PKA). PKA phosphorylates and inactivates myosin light-chain kinase (MLCK) while stimulating calcium extrusion and uptake into the sarcoplasmic reticulum. This produces profound arteriolar vasodilation, selectively improving renal cortical blood flow, promoting natriuresis and diuresis, and protecting renal function during hypertensive emergencies."
      ],
      [
        "Gi-protein-mediated suppression of adenylyl cyclase leading to opening of inward-rectifying potassium channels",
        "Gi-protein coupling inhibits adenylyl cyclase and reduces cAMP (as seen with dopamine D2 or alpha-2 receptors), which does not mediate fenoldopam's DA1 arteriolar vasodilation."
      ],
      [
        "Gq-protein activation of phospholipase C generating inositol 1,4,5-trisphosphate and diacylglycerol",
        "Gq activation generates IP3 and DAG to increase intracellular calcium, causing vasoconstriction (as seen with alpha-1 or AT1 receptors), opposite to fenoldopam."
      ],
      [
        "Direct stimulation of soluble guanylyl cyclase by non-enzymatic generation of intracellular nitric oxide",
        "Direct stimulation of soluble guanylyl cyclase is the mechanism of nitroglycerin, sodium nitroprusside, or riociguat, not fenoldopam."
      ],
      [
        "Selective opening of ATP-sensitive potassium channels in vascular smooth muscle cell membranes",
        "Opening K_ATP channels is the mechanism of minoxidil and diazoxide, not the G-protein receptor-mediated action of fenoldopam."
      ]
    ],
    "shortestValidSolution": "Fenoldopam = selective DA1 agonist -> Gs-protein -> adenylyl cyclase -> cAMP -> PKA -> renal arteriolar vasodilation + natriuresis.",
    "necessaryInference": "Map DA1 dopamine receptor activation to Gs-protein adenylyl cyclase-cAMP signaling and renal vasodilation.",
    "strongestDistractor": "Direct stimulation of soluble guanylyl cyclase by non-enzymatic generation of intracellular nitric oxide",
    "distractorExclusion": "Sodium nitroprusside acts via cGMP/nitric oxide; fenoldopam is a selective DA1 agonist acting via Gs and cAMP.",
    "citation": "Murphy MB, Murray C, Shorten GD. Fenoldopam: a selective peripheral dopamine-receptor agonist for the treatment of severe hypertension. N Engl J Med. 2001;345(21):1548-1557. PMID: 11794223.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular/renal pharmacology question evaluating dopamine receptor second messengers in hypertensive crisis.",
      "distractorExclusionNotes": "Excluded nitroprusside (cGMP) and minoxidil (K_ATP) mechanisms based on DA1 Gs-adenylyl cyclase coupling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0816",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Nesiritide Recombinant B-Type Natriuretic Peptide Guanylyl Cyclase Mechanism",
    "provisionalDifficulty": 4,
    "stem": "A 64-year-old man with severe ischemic cardiomyopathy is hospitalized with acutely decompensated heart failure and marked orthopnea. Right heart catheterization demonstrates an elevated pulmonary capillary wedge pressure (PCWP) of 28 mm Hg, central venous pressure (CVP) of 16 mm Hg, and cardiac index of 1.8 L/min/m2. An intravenous infusion of nesiritide (recombinant human B-type natriuretic peptide) is initiated. Within 60 minutes, PCWP declines to 18 mm Hg with significant relief of dyspnea, while systemic vascular resistance decreases moderately. Which of the following molecular targets directly mediates the hemodynamic actions of nesiritide on venous and arterial vascular smooth muscle?",
    "choices": [
      [
        "Particulate (membrane-bound) guanylyl cyclase-A receptor stimulating intracellular cyclic GMP synthesis",
        "NESIRITIDE is a recombinant form of human B-type natriuretic peptide (BNP). BNP binds to the extracellular domain of the PARTICULATE (MEMBRANE-BOUND) GUANYLYL CYCLASE-A RECEPTOR (NPR-A). Receptor binding activates its intrinsic intracellular guanylyl cyclase catalytic domain, converting GTP to CYCLIC GMP (cGMP). Elevated cGMP activates PROTEIN KINASE G (PKG), which phosphorylates phospholamban, stimulates Ca2+ uptake into the sarcoplasmic reticulum, and opens calcium-activated K+ channels. This produces potent venous and arteriolar smooth muscle relaxation, significantly increasing venous capacitance, reducing cardiac preload (PCWP), and improving dyspnea."
      ],
      [
        "Soluble cytosolic guanylyl cyclase stimulated by spontaneous transnitrosylation of heme iron",
        "Soluble guanylyl cyclase is activated by nitric oxide (NO) and drugs such as nitroglycerin, nitroprusside, and riociguat, not peptide hormones like BNP that bind membrane-bound NPR-A."
      ],
      [
        "Basolateral V2 vasopressin receptors stimulating adenylyl cyclase and cyclic AMP accumulation",
        "V2 receptors respond to vasopressin and couple to Gs/cAMP in collecting duct cells, whereas natriuretic peptides act via cGMP and antagonize vasopressin actions."
      ],
      [
        "Endothelial prostaglandin I2 receptors coupled to Gs proteins and protein kinase A activation",
        "Prostacyclin (PGI2) acts on IP receptors via Gs/cAMP; nesiritide acts on NPR-A via cGMP."
      ],
      [
        "Inhibition of vascular phosphodiesterase-5 preventing degradation of endogenously produced cyclic GMP",
        "PDE-5 inhibitors (e.g., sildenafil) prevent cGMP breakdown; nesiritide directly synthesizes cGMP via membrane-bound guanylyl cyclase activation."
      ]
    ],
    "shortestValidSolution": "Nesiritide = recombinant BNP -> binds membrane-bound guanylyl cyclase-A (NPR-A) -> increases cGMP -> venous dilation -> reduced PCWP.",
    "necessaryInference": "Distinguish membrane-bound (particulate) guanylyl cyclase (NPR-A) from soluble cytosolic guanylyl cyclase (NO targets).",
    "strongestDistractor": "Soluble cytosolic guanylyl cyclase stimulated by spontaneous transnitrosylation of heme iron",
    "distractorExclusion": "Soluble guanylyl cyclase is the target of nitric oxide; natriuretic peptides bind membrane-bound (particulate) guanylyl cyclase receptors (NPR-A).",
    "citation": "O'Connor CM, Starling RC, Hernandez AF, et al. Effect of nesiritide in patients with acute decompensated heart failure. N Engl J Med. 2011;365(1):32-43. PMID: 21732835.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular pharmacology question distinguishing particulate from soluble guanylyl cyclases.",
      "distractorExclusionNotes": "Excluded soluble GC and PDE-5 inhibition based on receptor topology (transmembrane particulate NPR-A).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0817",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Respiratory",
    "topic": "Bosentan Dual Endothelin Receptor Antagonism Pulmonary Arterial Hypertension",
    "provisionalDifficulty": 5,
    "stem": "A 36-year-old woman with idiopathic pulmonary arterial hypertension (PAH, WHO functional class III) presents with severe exertional dyspnea and syncope. Echocardiography shows severe right ventricular hypertrophy and flattening of the interventricular septum during systole. Mean pulmonary arterial pressure on right heart catheterization is 48 mm Hg with a normal pulmonary capillary wedge pressure of 10 mm Hg. She is prescribed oral bosentan. Before initiating therapy and monthly thereafter, liver function tests must be monitored due to hepatic clearance concerns. Which of the following receptor profiles describes the primary pharmacological mechanism by which bosentan lowers pulmonary vascular resistance?",
    "choices": [
      [
        "Competitive dual antagonism of both endothelin ETA and ETB receptors on pulmonary vascular smooth muscle and endothelium",
        "Endothelin-1 (ET-1) is a potent 21-amino-acid vasoconstrictor and vascular smooth muscle mitogen that plays a central role in the pathogenesis of pulmonary arterial hypertension. ET-1 acts on two G-protein-coupled receptor subtypes: ETA receptors (located on vascular smooth muscle, mediating intense vasoconstriction and proliferation via Gq) and ETB receptors (located on endothelial cells and smooth muscle, mediating vasodilation via NO/prostacyclin but also vasoconstriction and ET-1 clearance). BOSENTAN is a non-selective, competitive DUAL ENDOTHELIN RECEPTOR ANTAGONIST that blocks both ETA and ETB receptors, reversing pulmonary vasoconstriction and remodeling."
      ],
      [
        "Selective antagonism of prostacyclin IP receptors blocking downstream adenylyl cyclase activation",
        "Blocking prostacyclin IP receptors would cause vasoconstriction; PAH therapy aims to stimulate IP receptors (e.g., epoprostenol, treprostinil, selexipag)."
      ],
      [
        "Direct chemical donation of nitric oxide to stimulate vascular soluble guanylyl cyclase",
        "Nitric oxide donation describes nitrates or inhaled NO; bosentan is a peptide-receptor antagonist of endothelin."
      ],
      [
        "Selective blockade of voltage-dependent L-type calcium channels on precapillary pulmonary arterioles",
        "Calcium channel blockers (e.g., amlodipine, diltiazem) block L-type calcium channels, but bosentan specifically targets endothelin receptors."
      ],
      [
        "Inhibition of thromboxane A2 synthase preventing platelet aggregation and arteriolar spasm",
        "Inhibition of thromboxane A2 synthase is not the target of bosentan, which competitively inhibits endothelin G-protein-coupled receptors."
      ]
    ],
    "shortestValidSolution": "Bosentan = competitive dual ETA and ETB receptor antagonist -> blocks endothelin-1 vasoconstriction/remodeling -> lowers PVR in PAH.",
    "necessaryInference": "Identify bosentan as a dual endothelin receptor antagonist (ETA and ETB).",
    "strongestDistractor": "Selective blockade of voltage-dependent L-type calcium channels on precapillary pulmonary arterioles",
    "distractorExclusion": "Calcium channel blockers block L-type calcium channels; bosentan competitively inhibits endothelin receptors ETA and ETB.",
    "citation": "Rubin LJ, Badesch DB, Barst RJ, et al. Bosentan therapy for pulmonary arterial hypertension. N Engl J Med. 2002;346(12):896-903. PMID: 11907289.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 respiratory/cardiovascular pharmacology question on endothelin signaling and receptor pharmacology in PAH.",
      "distractorExclusionNotes": "Excluded prostacyclin, NO, and calcium channel mechanisms based on dual ETA/ETB endothelin receptor antagonism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0818",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Riociguat Soluble Guanylyl Cyclase Stimulation and Nitric Oxide Synergy",
    "provisionalDifficulty": 5,
    "stem": "A 50-year-old man with inoperable chronic thromboembolic pulmonary hypertension (CTEPH) is evaluated for targeted pulmonary vasodilator therapy. Endothelial biopsy studies in CTEPH reveal severe endothelial dysfunction characterized by profound depletion of endogenous nitric oxide (NO) synthase activity. The patient is prescribed riociguat. In vitro pharmacokinetic and enzyme kinetics studies demonstrate that riociguat lowers pulmonary vascular resistance through a dual mechanism involving soluble guanylyl cyclase (sGC). Which of the following statements correctly describes riociguat's biochemical mechanism of action on soluble guanylyl cyclase?",
    "choices": [
      [
        "Directly stimulates sGC independently of nitric oxide while allosterically sensitizing sGC to residual endogenous nitric oxide",
        "Endothelial damage in pulmonary hypertension depletes endogenous nitric oxide (NO). Traditional nitrates require enzymatic conversion to NO, and PDE-5 inhibitors require basal cGMP generation to be effective. RIOCIGUAT overcomes this limitation through a unique dual mode of action on SOLUBLE GUANYLYL CYCLASE (sGC): (1) It DIRECTLY STIMULATES sGC to produce cGMP in the complete absence of endogenous NO by binding to an allosteric non-heme site, and (2) It ALLOSTERICALLY STABILIZES the NO-sGC binding conformation, sensitizing sGC to low, sub-physiological concentrations of endogenous NO. Co-administration with nitrates or PDE-5 inhibitors is strictly contraindicated due to severe, refractory hypotension."
      ],
      [
        "Cleaves phosphodiester bonds within cyclic GMP to accelerate its enzymatic breakdown into 5'-GMP",
        "Cleaving phosphodiester bonds describes phosphodiesterase activity; riociguat stimulates cGMP production, not its breakdown."
      ],
      [
        "Binds exclusively to the catalytic domain of particulate guanylyl cyclase-A mimicking atrial natriuretic peptide",
        "Membrane-bound particulate guanylyl cyclase is activated by natriuretic peptides (ANP, BNP), whereas riociguat acts selectively on soluble cytosolic guanylyl cyclase."
      ],
      [
        "Acts as a pure competitive substrate for endothelial nitric oxide synthase to accelerate peroxynitrite formation",
        "L-arginine is the substrate for eNOS; riociguat acts downstream on soluble guanylyl cyclase and does not generate cytotoxic peroxynitrite."
      ],
      [
        "Competitively blocks prostacyclin IP receptors in pulmonary arterial smooth muscle",
        "Riociguat has no interaction with prostacyclin IP receptors; it acts intracellularly on soluble guanylyl cyclase."
      ]
    ],
    "shortestValidSolution": "Riociguat directly stimulates soluble guanylyl cyclase (NO-independent) + sensitizes sGC to endogenous NO -> increases cGMP -> vasodilation.",
    "necessaryInference": "Identify the dual mechanism of sGC stimulation: direct NO-independent activation plus allosteric sensitization to NO.",
    "strongestDistractor": "Binds exclusively to the catalytic domain of particulate guanylyl cyclase-A mimicking atrial natriuretic peptide",
    "distractorExclusion": "Riociguat targets cytosolic soluble guanylyl cyclase, not transmembrane particulate guanylyl cyclase-A.",
    "citation": "Ghofrani HA, D'Armini AM, Grimminger F, et al. Riociguat for the treatment of chronic thromboembolic pulmonary hypertension. N Engl J Med. 2013;369(4):319-329. PMID: 23883377.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pharmacology item examining soluble guanylyl cyclase activation mechanisms in states of endothelial NO depletion.",
      "distractorExclusionNotes": "Excluded particulate GC and phosphodiesterase breakdown; riociguat synthesizes cGMP via soluble guanylyl cyclase.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0819",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Selexipag Selective Non-Prostanoid Prostacyclin IP Receptor Agonism",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old woman with systemic sclerosis-associated pulmonary arterial hypertension (PAH) experiences worsening functional limitations on combination ambrisentan and tadalafil. Her physician decides to target the prostacyclin pathway. Rather than prescribing parenteral prostacyclin analogues (epoprostenol or treprostinil), which bind multiple prostanoid receptor subtypes (including EP1, EP3, and DP1 receptors) and cause significant off-target gastrointestinal cramping and systemic flushing, the physician prescribes oral selexipag. Which of the following pharmacological properties distinguishes selexipag and its active metabolite (ACT-333679) from traditional prostanoids?",
    "choices": [
      [
        "Non-prostanoid chemical structure providing high selectivity for the prostacyclin IP receptor over other prostanoid receptors",
        "Traditional prostacyclin analogues (epoprostenol, treprostinil, iloprost) are prostanoid molecules that bind the prostacyclin IP receptor to stimulate Gs/cAMP vasodilation, but also cross-react with other prostanoid receptors (EP1, EP2, EP3, EP4, DP1, FP). Off-target activation of EP1 and EP3 receptors triggers gastrointestinal smooth muscle contraction (nausea, cramping, diarrhea) and paradoxical vasoconstriction. SELEXIPAG and its active diphenylpyrazine metabolite (ACT-333679) are NON-PROSTANOID SELECTIVE IP RECEPTOR AGONISTS. Their distinct chemical scaffold provides high functional selectivity for the human IP receptor, maximizing cAMP-mediated pulmonary vasodilation while minimizing off-target prostanoid receptor adverse effects."
      ],
      [
        "Direct inhibition of phosphodiesterase-5 preventing enzymatic breakdown of cyclic GMP in vascular smooth muscle",
        "PDE-5 inhibition is the mechanism of sildenafil and tadalafil, which the patient was already receiving, not selexipag."
      ],
      [
        "Irreversible covalent inactivation of endothelin ETA receptors on pulmonary smooth muscle",
        "Endothelin receptor antagonism is the mechanism of ambrisentan, bosentan, and macitentan, not prostacyclin agonists."
      ],
      [
        "Allosteric activation of endothelial nitric oxide synthase enhancing local L-citrulline generation",
        "Selexipag acts downstream on vascular smooth muscle IP receptors via Gs and adenylyl cyclase; it does not directly activate eNOS."
      ],
      [
        "Selective blockade of thromboxane prostanoid (TP) receptors preventing platelet aggregation",
        "Selexipag is an agonist at prostacyclin IP receptors, not an antagonist at thromboxane TP receptors."
      ]
    ],
    "shortestValidSolution": "Selexipag is a non-prostanoid selective IP receptor agonist -> avoids off-target EP1/EP3/DP1 activation -> Gs/cAMP pulmonary vasodilation.",
    "necessaryInference": "Recognize that selexipag is a non-prostanoid selective IP receptor agonist that avoids off-target cross-reactivity.",
    "strongestDistractor": "Direct inhibition of phosphodiesterase-5 preventing enzymatic breakdown of cyclic GMP in vascular smooth muscle",
    "distractorExclusion": "Tadalafil inhibits PDE-5; selexipag targets the prostacyclin IP receptor via a non-prostanoid scaffold.",
    "citation": "Channick R et al. Effects of macitentan and selexipag across prognostic age groups in patients with pulmonary arterial hypertension. JHLT Open. PMID: 40144855.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular pharmacology item on prostanoid versus non-prostanoid IP receptor selectivity.",
      "distractorExclusionNotes": "Excluded PDE-5 and endothelin blockers because selexipag is a selective prostacyclin IP receptor agonist.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0820",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Milrinone Phosphodiesterase-3 Inhibition Inotropic and Vasodilator Dynamics",
    "provisionalDifficulty": 4,
    "stem": "A 58-year-old woman with end-stage non-ischemic dilated cardiomyopathy is admitted to the cardiac intensive care unit with acute cardiogenic shock and low cardiac output refractory to oral medications. A continuous intravenous infusion of milrinone is initiated. Over the subsequent 2 hours, her cardiac index rises from 1.6 to 2.4 L/min/m2, pulmonary capillary wedge pressure drops from 26 to 16 mm Hg, and systemic vascular resistance falls from 1,800 to 1,100 dynes-sec/cm5. Which of the following biochemical actions of milrinone directly accounts for this simultaneous combination of positive cardiac inotropy and systemic arteriolar vasodilation?",
    "choices": [
      [
        "Inhibition of PDE-3 increases cAMP, enhancing sarcoplasmic calcium influx in myocytes while promoting relaxation in vascular smooth muscle",
        "MILRINONE is a selective PHOSPHODIESTERASE-3 (PDE-3) INHIBITOR. In cardiac myocytes, PDE-3 inhibition prevents cAMP breakdown, elevating intracellular cyclic AMP. Elevated cAMP activates Protein Kinase A (PKA), which phosphorylates L-type calcium channels and phospholamban, enhancing sarcoplasmic reticulum Ca2+ uptake and release, producing POSITIVE INOTROPY and positive lusitropy (accelerated relaxation). In contrast, in vascular smooth muscle cells, elevated cAMP activates PKA to phosphorylate and inhibit myosin light chain kinase (MLCK) while stimulating potassium channels and Ca2+ efflux, producing ARTERIOLAR AND VENOUS VASODILATION ('inodilator' effect, reducing both afterload and preload)."
      ],
      [
        "Direct stimulation of beta-1 adrenergic receptors coupled to Gs proteins and extracellular calcium entry",
        "Milrinone acts intracellularly to inhibit PDE-3; it does not bind or stimulate cell-surface beta-1 adrenergic receptors (unlike dobutamine)."
      ],
      [
        "Selective opening of voltage-gated fast sodium channels prolonging phase 0 depolarization velocity",
        "Opening fast sodium channels would accelerate depolarization or act as an antiarrhythmic; it is not the mechanism of milrinone."
      ],
      [
        "Inhibition of cardiac sodium-potassium ATPase leading to intracellular sodium accumulation",
        "Inhibition of Na+/K+-ATPase is the mechanism of digoxin (cardiac glycosides), not phosphodiesterase inhibitors."
      ],
      [
        "Degradation of vascular cyclic GMP preventing activation of protein kinase G in resistance vessels",
        "Degradation of cGMP would cause vasoconstriction; milrinone prevents cAMP degradation and promotes vasodilation."
      ]
    ],
    "shortestValidSolution": "Milrinone blocks PDE-3 -> increases cAMP -> in heart: Ca2+ influx (positive inotropy); in vessels: MLCK inhibition (vasodilation).",
    "necessaryInference": "Contrast the divergent functional consequences of elevated cAMP in cardiac myocytes (increased Ca2+/contractility) versus vascular smooth muscle (relaxation).",
    "strongestDistractor": "Direct stimulation of beta-1 adrenergic receptors coupled to Gs proteins and extracellular calcium entry",
    "distractorExclusion": "Dobutamine directly stimulates beta-1 receptors; milrinone acts downstream by preventing enzymatic cAMP breakdown by PDE-3.",
    "citation": "Packer M, Carver JR, Rodeheffer RJ, et al. Effect of oral milrinone on mortality in severe chronic heart failure. The PROMISE Study Research Group. N Engl J Med. 1991;325(21):1468-1475. PMID: 1944425.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular pharmacology item on PDE-3 second messenger dynamics in heart versus vasculature.",
      "distractorExclusionNotes": "Excluded beta-1 agonists (dobutamine) and digoxin (Na+/K+-ATPase) based on intracellular PDE-3 inhibition.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0821",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Digoxin Sodium-Potassium ATPase Inhibition and Potassium-Dependent Toxicity",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman with heart failure with reduced ejection fraction and atrial fibrillation treated with digoxin and furosemide is brought to the emergency department with nausea, vomiting, yellow-tinted blurred vision (xanthopsia), and severe weakness. ECG reveals atrial tachycardia with 2:1 atrioventricular block and frequent bidirectional ventricular premature beats. Serum chemistry reveals potassium of 2.8 mEq/L (normal 3.5-5.0 mEq/L), serum creatinine of 1.4 mg/dL, and a toxic serum digoxin level of 3.4 ng/mL (therapeutic 0.5-0.9 ng/mL). Which of the following physiological principles explains why hypokalemia dramatically increases myocardial sensitivity to digoxin toxicity?",
    "choices": [
      [
        "Extracellular potassium competitively displaces digoxin from the phosphorylated basolateral Na+/K+-ATPase pump",
        "DIGOXIN binds specifically to the extracellular face of the phosphorylated conformation (E2-P) of the basolateral Na+/K+-ATPase pump in myocardial membranes. Extracellular K+ competes with digoxin for this binding site. In HYPOKALEMIA (frequently induced by loop diuretics like furosemide), reduced extracellular potassium concentration decreases competition, allowing MORE DIGOXIN TO BIND AND INHIBIT THE Na+/K+-ATPase. This intracellularly accumulates Na+, reduces Ca2+ extrusion via the 3Na+/1Ca2+ exchanger (NCX), and massively overloads sarcoplasmic reticulum calcium stores, triggering delayed afterdepolarizations (DADs), triggered arrhythmias, and xanthopsia."
      ],
      [
        "Low extracellular potassium stimulates rapid endocytosis and degradation of myocardial sodium-calcium exchangers",
        "Hypokalemia does not cause endocytosis or degradation of NCX exchangers; it alters competitive binding at the Na+/K+-ATPase."
      ],
      [
        "Hypokalemia accelerates hepatic cytochrome P450 3A4 metabolism of digoxin into cardiotoxic aglycone metabolites",
        "Digoxin is excreted primarily unchanged by the kidneys via P-glycoprotein, not extensively metabolized by hepatic CYP3A4."
      ],
      [
        "Low serum potassium directly opens delayed rectifier potassium channels shortening the ventricular refractory period",
        "Hypokalemia reduces delayed rectifier K+ channel conductance, which prolongs the QT interval and increases arrhythmia risk, but does not explain increased drug-receptor affinity."
      ],
      [
        "Hypokalemia induces hyperpolarization of the resting membrane potential rendering the SA node refractory to acetylcholine",
        "Digoxin enhances central vagal tone to slow AV nodal conduction; hypokalemia does not make the SA node refractory to acetylcholine."
      ]
    ],
    "shortestValidSolution": "K+ competitively displaces digoxin from Na+/K+-ATPase -> hypokalemia removes competition -> increased digoxin binding and toxicity.",
    "necessaryInference": "Map potassium competitive antagonism at the Na+/K+-ATPase E2-P binding site to diuretic-induced digoxin toxicity.",
    "strongestDistractor": "Low serum potassium directly opens delayed rectifier potassium channels shortening the ventricular refractory period",
    "distractorExclusion": "The direct pharmacological interaction is competition between K+ and digoxin for the extracellular binding pocket of Na+/K+-ATPase.",
    "citation": "Gheorghiade M, Adams KF Jr, Colucci WS. Digoxin in the management of cardiovascular disorders. Circulation. 2004;109(24):2959-2964. PMID: 15210613.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 pharmacology and ion-transport physiology item testing competitive binding at the Na+/K+-ATPase.",
      "distractorExclusionNotes": "Excluded CYP metabolism and channel gating options; K+ directly competes with digoxin for enzyme binding.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0822",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Class 1C Antiarrhythmic Flecainide Use-Dependence and QRS Complex Widening",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with structurally normal heart and recurrent paroxysmal atrial fibrillation begins therapy with oral flecainide. Baseline 12-lead ECG in sinus rhythm shows a resting heart rate of 62/min and a normal QRS complex duration of 88 msec. The patient undergoes a Bruce protocol exercise treadmill stress test to assess drug safety. As his heart rate increases from 62/min to 154/min at peak exercise, serial ECG tracings show progressive, rate-dependent prolongation of the QRS complex duration to 138 msec, which promptly normalizes back to 92 msec during post-exercise recovery. Which of the following electrophysiological properties of flecainide explains this marked exercise-induced QRS widening?",
    "choices": [
      [
        "Slow channel dissociation kinetics from voltage-gated fast sodium channels producing marked use-dependence at fast rates",
        "CLASS 1C ANTIARRHYTHMICS (flecainide, propafenone) bind avidly to open/inactivated voltage-gated fast sodium channels during phase 0 depolarization. Crucially, Class 1C agents exhibit VERY SLOW DISSOCIATION KINETICS (tau > 10 seconds) during diastole. At normal resting heart rates, the diastolic interval is sufficiently long to permit drug unbinding. However, at rapid heart rates (e.g., during exercise or tachycardia), the shortened diastolic interval prevents drug dissociation before the next action potential arrives. Consequently, sodium channel blockade accumulates with each beat ('USE-DEPENDENCE'), progressively depressing phase 0 Vmax, slowing conduction velocity through the His-Purkinje system, and widening the QRS complex."
      ],
      [
        "Rapid dissociation kinetics from sodium channels leading to reverse use-dependence at slow heart rates",
        "Rapid dissociation kinetics (tau < 1 second) and minimal QRS widening are characteristic of Class 1B agents (lidocaine, mexiletine), whereas reverse use-dependence is a feature of Class III potassium channel blockers."
      ],
      [
        "Selective rate-dependent blockade of L-type calcium channels in the atrioventricular node",
        "Calcium channel blockade slows AV nodal conduction (prolonging the PR interval), but does not widen the QRS complex in the ventricular myocardium."
      ],
      [
        "Preferential inhibition of delayed rectifier potassium channels prolonging the ventricular effective refractory period",
        "Inhibiting delayed rectifier potassium channels prolongs repolarization and the QT interval (Class III effect), not ventricular depolarization (QRS complex)."
      ],
      [
        "Allosteric opening of inward rectifier potassium channels accelerating phase 4 diastolic current",
        "Opening inward rectifier potassium channels hyperpolarizes the resting potential and does not slow phase 0 conduction or widen the QRS complex."
      ]
    ],
    "shortestValidSolution": "Class 1C (flecainide) has slow unbinding kinetics -> accumulates at faster heart rates (use-dependence) -> slows conduction -> widens QRS.",
    "necessaryInference": "Map slow dissociation kinetics of Class 1C agents to rate-dependent channel accumulation and progressive QRS widening.",
    "strongestDistractor": "Rapid dissociation kinetics from sodium channels leading to reverse use-dependence at slow heart rates",
    "distractorExclusion": "Rapid dissociation describes Class 1B agents; flecainide has the slowest unbinding kinetics, producing classic forward use-dependence.",
    "citation": "Echt DS, Liebson PR, Mitchell LB, et al. Mortality and morbidity in patients receiving encainide, flecainide, or placebo. The Cardiac Arrhythmia Suppression Trial. N Engl J Med. 1991;324(12):781-788. PMID: 1900101.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 electrophysiology and antiarrhythmic pharmacology item evaluating use-dependence and channel dissociation kinetics.",
      "distractorExclusionNotes": "Excluded Class 1B rapid dissociation and Class III reverse use-dependence based on 1C slow dissociation and QRS widening.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0823",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Endocrine",
    "topic": "Amiodarone Multichannel Electrophysiology and Thyroid Hormone Homology",
    "provisionalDifficulty": 4,
    "stem": "A 68-year-old man with ischemic heart failure and recurrent ventricular tachycardia begins chronic therapy with oral amiodarone. His physician counsels him regarding the drug's unusually broad pharmacological profile and high risk of organ toxicities. The physician explains that amiodarone contains approximately 37% iodine by weight and shares striking structural homology with thyroxine (T4). In peripheral tissues and the anterior pituitary gland, amiodarone and its active metabolite desethylamiodarone inhibit the enzymatic conversion of T4 to active triiodothyronine (T3). Which of the following peripheral enzymes is directly inhibited by amiodarone to cause this biochemical alteration?",
    "choices": [
      [
        "Iodothyronine 5'-deiodinase (types 1 and 2 deiodinases)",
        "Amiodarone is an iodinated benzofuran derivative structurally homologous to thyroxine (T4). In peripheral tissues and the pituitary, amiodarone and desethylamiodarone inhibit IODOTHYRONINE 5'-DEIODINASE (specifically types 1 and 2 deiodinases), which catalyze the conversion of T4 into the biologically active hormone triiodothyronine (T3). This produces a characteristic biochemical pattern: elevated serum total and free T4, decreased serum total and free T3, and elevated reverse T3 (rT3). In addition, amiodarone exerts intrinsic thyroid receptor antagonism and can cause both hypothyroidism (via the Wolff-Chaikoff effect) and thyrotoxicosis (via Jod-Basedow or destructive thyroiditis)."
      ],
      [
        "Thyroid peroxidase in follicular apical membranes",
        "Thyroid peroxidase (TPO) oxidizes iodide and organifies it onto thyroglobulin; it is the target of thionamides (methimazole, PTU), not the peripheral 5'-deiodinase inhibited by amiodarone."
      ],
      [
        "Sodium-iodide symporter (NIS) in basolateral follicular membranes",
        "The sodium-iodide symporter is competitively inhibited by anions like perchlorate and pertechnetate, not by amiodarone."
      ],
      [
        "Hepatic UDP-glucuronosyltransferase conjugating thyroid metabolites",
        "UDP-glucuronosyltransferase glucuronidates T4 and bilirubin; it is not the primary target responsible for peripheral T4-to-T3 conversion blockade."
      ],
      [
        "Thyroglobulin endopeptidase in follicular lysosomes",
        "Lysosomal endopeptidases cleave T4/T3 from colloid thyroglobulin; they are regulated by TSH, not directly inhibited by amiodarone."
      ]
    ],
    "shortestValidSolution": "Amiodarone resembles T4 -> inhibits peripheral 5'-deiodinase -> blocks T4 to T3 conversion -> high free T4, low free T3, high rT3.",
    "necessaryInference": "Identify 5'-deiodinase as the peripheral enzyme blocked by amiodarone leading to impaired T4 to T3 activation.",
    "strongestDistractor": "Thyroid peroxidase in follicular apical membranes",
    "distractorExclusion": "TPO is blocked by methimazole and PTU; amiodarone's primary peripheral effect on thyroid metabolism is 5'-deiodinase inhibition.",
    "citation": "Basaria S, Cooper DS. Amiodarone and the thyroid. Am J Med. 2005;118(7):706-714. PMID: 15989900.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 endocrine pharmacology item on amiodarone structural homology and deiodinase enzyme inhibition.",
      "distractorExclusionNotes": "Excluded TPO (methimazole target) and NIS symporter based on peripheral 5'-deiodinase mechanism.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0824",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Class III Dofetilide Selective IKr Blockade and Reverse Use-Dependence",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man with persistent atrial fibrillation is admitted to the hospital for elective chemical cardioversion with dofetilide. Hospital protocol mandates continuous telemetry monitoring for a minimum of 3 days. Before the second dose, the telemetry monitor alarms for marked QT interval prolongation (QTc 540 msec) during a period of nocturnal sinus bradycardia with a heart rate of 42/min. Shortly thereafter, he develops polymorphic ventricular tachycardia that twists around the isoelectric baseline (torsades de pointes). Cellular electrophysiology confirms selective blockade of the rapid delayed rectifier potassium current (IKr). Which of the following biophysical properties of dofetilide accounts for the paradoxical accentuation of action potential prolongation and arrhythmia risk at slower heart rates?",
    "choices": [
      [
        "Reverse use-dependence where channel dissociation increases at higher rates and drug binding is maximal during prolonged diastole",
        "DOFETILIDE is a pure, highly selective CLASS III ANTIARRHYTHMIC that blocks the rapid delayed rectifier potassium current (IKr, encoded by hERG/KCNH2). Like many Class III agents, dofetilide displays REVERSE USE-DEPENDENCE: its blocking efficacy and action potential duration (APD) prolongation are GREATEST AT SLOW HEART RATES and least at rapid heart rates. At slow heart rates, prolonged diastolic intervals allow complete recovery and deep binding to closed/inactivated states, while the absence of frequent repolarizing currents prolongs phase 3 repolarization. This excessive APD prolongation at slow rates triggers early afterdepolarizations (EADs) mediated by L-type calcium channels, provoking TORSADES DE POINTES."
      ],
      [
        "Forward use-dependence where repetitive activation traps drug molecules within the open channel pore",
        "Forward use-dependence (seen with Class 1C agents) increases drug block at faster heart rates, whereas dofetilide exhibits reverse use-dependence maximal at slow rates."
      ],
      [
        "Selective blockade of inward rectifier Kir2.1 channels active exclusively during phase 4 depolarization",
        "Kir2.1 conducts the resting IK1 current, which maintains resting potential; dofetilide selectively blocks IKr (phase 3 delayed rectifier)."
      ],
      [
        "Acceleration of transient outward potassium current (Ito) inactivation in epicardial myocytes",
        "Ito mediates phase 1 early repolarization and is unaffected by dofetilide, which selectively blocks IKr."
      ],
      [
        "Direct agonism of voltage-gated calcium channels during phase 2 plateau",
        "Dofetilide does not stimulate calcium channels; calcium-mediated EADs are a secondary consequence of delayed repolarization from IKr block."
      ]
    ],
    "shortestValidSolution": "Dofetilide blocks IKr with reverse use-dependence -> maximal effect at slow heart rates -> excessive QT prolongation -> EADs and Torsades.",
    "necessaryInference": "Map reverse use-dependence of Class III IKr blockers to bradycardia-triggered QT prolongation and torsades de pointes.",
    "strongestDistractor": "Forward use-dependence where repetitive activation traps drug molecules within the open channel pore",
    "distractorExclusion": "Forward use-dependence characterizes Class 1C sodium blockers; Class III potassium blockers exhibit reverse use-dependence.",
    "citation": "Torp-Pedersen C, Moller M, Bloch-Thomsen PE, et al. Dofetilide in patients with congestive heart failure and left ventricular-dysfunction. Danish Investigations of Arrhythmia and Mortality on Dofetilide Study Group. N Engl J Med. 1999;341(12):857-865. PMID: 10486417.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 electrophysiology question contrasting reverse use-dependence of Class III agents with forward use-dependence.",
      "distractorExclusionNotes": "Excluded forward use-dependence and IK1/Ito channels based on selective IKr kinetics and bradycardia-induced TdP.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0825",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Ranolazine Late Sodium Current Inhibition Diastolic Wall Tension Kinetics",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with refractory chronic stable angina pectoris continues to experience exertional substernal chest pressure despite maximally tolerated doses of metoprolol succinate, amlodipine, and isosorbide mononitrate. His resting blood pressure is 108/68 mm Hg and heart rate is 56/min. Ranolazine is added to his medical regimen. Four weeks later, he reports significant improvement in exercise tolerance without any change in resting heart rate or blood pressure. Cardiac cellular physiology demonstrates that ranolazine exerts its anti-anginal effects by selectively inhibiting the late inward sodium current (late INa). Which of the following downstream cellular events directly accounts for ranolazine's ability to relieve myocardial ischemia without altering systemic hemodynamics?",
    "choices": [
      [
        "Reduced intracellular sodium accumulation prevents reverse-mode sodium-calcium exchanger (NCX) calcium overload, lowering diastolic wall tension",
        "During myocardial ischemia, voltage-gated sodium channels fail to inactivate completely, leading to a pathologically enhanced LATE INWARD SODIUM CURRENT (late INa). Intracellular Na+ accumulation drives the sodium-calcium exchanger (NCX) into REVERSE MODE (or inhibits forward mode), pumping Ca2+ into the cytosol and sarcoplasmic reticulum. Intracellular calcium overload impairs myocyte relaxation, markedly increasing DIASTOLIC WALL TENSION and compressing intramyocardial coronary capillaries, worsening microvascular ischemia. RANOLAZINE selectively inhibits late INa, preventing Na+ and Ca2+ overload, reducing diastolic wall tension and oxygen demand without altering heart rate, inotropy, or blood pressure."
      ],
      [
        "Direct stimulation of endothelial nitric oxide synthase increasing epicardial coronary artery diameter",
        "Ranolazine does not act via eNOS or direct epicardial vasodilation; its benefit is metabolic/energetic via late sodium current inhibition."
      ],
      [
        "Competitive antagonism of vascular alpha-1 adrenergic receptors reducing systemic vascular resistance",
        "Ranolazine has minimal alpha-adrenergic blocking activity at therapeutic doses and does not alter systemic vascular resistance or blood pressure."
      ],
      [
        "Selective inhibition of mitochondrial carnitine palmitoyltransferase-1 shifting metabolism to glucose oxidation",
        "CPT-1 inhibition is the proposed mechanism of perhexiline, not ranolazine; earlier hypotheses regarding ranolazine fatty acid oxidation have been superseded by late INa blockade."
      ],
      [
        "Allosteric activation of myocardial sarcoplasmic reticulum calcium ATPase (SERCA2a) pumps",
        "Ranolazine reduces cytosolic Ca2+ overload secondary to late sodium current inhibition, rather than directly stimulating SERCA2a allosterically."
      ]
    ],
    "shortestValidSolution": "Ranolazine blocks late INa -> reduces intracellular Na+ -> prevents reverse NCX Ca2+ overload -> lowers diastolic wall tension -> improves microvascular perfusion.",
    "necessaryInference": "Link late sodium current inhibition to reduced NCX-mediated calcium overload and decreased diastolic wall tension.",
    "strongestDistractor": "Selective inhibition of mitochondrial carnitine palmitoyltransferase-1 shifting metabolism to glucose oxidation",
    "distractorExclusion": "CPT-1 inhibition is the mechanism of perhexiline; ranolazine's primary anti-ischemic mechanism is selective late INa inhibition.",
    "citation": "Gutierrez JA et al. Effects of Ranolazine in Patients With Chronic Angina in Patients With and Without Percutaneous Coronary Intervention for Acute Coronary Syndrome: Observations From the MERLIN-TIMI 36 Trial. Clin Cardiol. PMID: 26059896.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 cardiovascular pharmacology item on late sodium current dynamics and myocardial calcium handling.",
      "distractorExclusionNotes": "Excluded CPT-1 metabolic shift and direct SERCA activation based on established late INa-NCX energetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
