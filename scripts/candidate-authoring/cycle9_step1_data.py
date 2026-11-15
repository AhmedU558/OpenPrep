"""
Cycle 9 Step 1 Batch 33 & 34 Generator
"""

import json
from cycle9_authoring_common import validate_item

b33_specs = [
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
        "citation": "Heerspink HJL, Perkins BA, Fitchett DH, et al. Sodium Glucose Cotransporter 2 Inhibitors in the Treatment of Diabetes Mellitus: Cardiovascular and Kidney Effects, Potential Mechanisms, and Clinical Applications. Circulation. 2016;134(10):752-772. PMID: 27470933.",
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
    }
]

print("Loaded 5 initial specs. Validating...")
for s in b33_specs:
    errs = validate_item(s)
    if errs:
        print(f"Error in {s['code']}: {errs}")
print("Validation complete.")
