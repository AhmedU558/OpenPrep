import { CandidateSpec } from './types';

export const step1Batch31: CandidateSpec[] = [
  {
    "code": "op-c-s1-0751",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Malignant Hyperphenylalaninemia and Dihydropteridine Reductase Deficiency",
    "provisionalDifficulty": 5,
    "stem": "A 4-month-old male infant is evaluated for developmental delay, microcephaly, and progressive axial hypotonia with limb hypertonia. Neonatal dried blood spot screening was positive for elevated phenylalanine, and he was promptly placed on a strict phenylalanine-restricted dietary formula with tyrosine supplementation at 10 days of life. Despite maintaining normal plasma phenylalanine levels on follow-up, he now exhibits persistent generalized developmental regression, poor head control, choreoathetosis, and bouts of hyperthermia without evidence of infection. Serum prolactin is elevated at 74 ng/mL (normal < 20 ng/mL). Which of the following enzymatic deficiencies accounts for this infant's refractory neurological deterioration despite dietary phenylalanine restriction?",
    "choices": [
      [
        "Dihydropteridine reductase (DHPR) deficiency impairing regeneration of tetrahydrobiopterin (BH4)",
        "Malignant hyperphenylalaninemia is caused by a deficiency in TETRAHYDROBIOPTERIN (BH4) synthesis or recycling, most commonly due to DIHYDROPTERIDINE REDUCTASE (DHPR) deficiency. Phenylalanine hydroxylase (PAH) requires BH4 as an obligatory cofactor to convert phenylalanine to tyrosine. However, BH4 is also the cofactor for TYROSINE HYDROXYLASE (converting tyrosine to L-DOPA, essential for dopamine and norepinephrine synthesis) and TRYPTOPHAN HYDROXYLASE (converting tryptophan to 5-HTP, essential for serotonin synthesis). While dietary phenylalanine restriction normalizes plasma phenylalanine and prevents phenylalanine-mediated neurotoxicity, it does NOT restore central dopamine and serotonin synthesis. Deficient dopamine synthesis in the tuberoinfundibular pathway removes tonic inhibition on lactotrophs, leading to HYPERPROLACTINEMIA, while striatal dopamine deficiency causes progressive severe hypotonia, dystonia, and movement disorders. Treatment requires BH4 supplementation, levodopa/carbidopa, and 5-hydroxytryptophan."
      ],
      [
        "Classic phenylalanine hydroxylase (PAH) homozygous null deletion",
        "Classic PKU (PAH deficiency) presents with musty odor and intellectual disability if untreated, but responds completely to dietary phenylalanine restriction with normal prolactin levels and no central monoamine deficiency."
      ],
      [
        "Dopamine beta-hydroxylase deficiency",
        "Dopamine beta-hydroxylase converts dopamine to norepinephrine; deficiency causes severe orthostatic hypotension and ptosis without hyperphenylalaninemia or hyperprolactinemia."
      ],
      [
        "Phenylethanolamine N-methyltransferase (PNMT) deficiency",
        "PNMT converts norepinephrine to epinephrine in the adrenal medulla; its deficiency does not affect phenylalanine metabolism, central serotonin, or prolactin."
      ],
      [
        "Homogentisate 1,2-dioxygenase deficiency",
        "Homogentisate dioxygenase deficiency causes alkaptonuria (ochronosis, dark urine on standing, arthropathy), not infantile hyperphenylalaninemia or hyperprolactinemia."
      ]
    ],
    "shortestValidSolution": "Normal Phe on diet + progressive neurological regression + hyperprolactinemia = BH4 / Dihydropteridine reductase deficiency (failure of dopamine/serotonin cofactor).",
    "necessaryInference": "Differentiate classic PKU (PAH defect; diet responsive) from BH4 deficiency (DHPR defect; central monoamine failure and hyperprolactinemia despite dietary control).",
    "strongestDistractor": "Classic phenylalanine hydroxylase (PAH) homozygous null deletion",
    "distractorExclusion": "Classic PAH deficiency responds fully to dietary phenylalanine control; persistent deterioration with hyperprolactinemia indicates BH4 deficiency affecting dopamine synthesis.",
    "citation": "Scriver CR. The PAH gene, phenylketonuria, and a paradigm shift. Hum Mutat. 2007;28(9):831-845. PMID: 17464971.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Malignant Hyperphenylalaninemia and Dihydropteridine Reductase Deficiency.",
      "distractorExclusionNotes": "Competitor Classic phenylalanine hydroxylase (PAH) homozygous excluded by Classic PAH deficiency responds fully to dietary phenylalani.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0752",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Respiratory",
    "topic": "Right-to-Left Intracardiac Shunt vs V/Q Mismatch 100% Oxygen Response",
    "provisionalDifficulty": 5,
    "stem": "A 32-year-old woman is admitted to the intensive care unit with acute hypoxemic respiratory failure following multiple traumatic long-bone fractures. Her arterial blood gas on ambient air shows: pH 7.45, PaCO2 32 mm Hg, PaO2 48 mm Hg, and calculated alveolar-arterial (A-a) oxygen gradient 62 mm Hg (expected < 15 mm Hg). Administration of 100% supplemental oxygen via a non-rebreather mask for 20 minutes results in a repeat PaO2 of 54 mm Hg without significant improvement. Bedside agitated saline echocardiography (bubble study) demonstrates dense microbubbles appearing in the left atrium within 1 cardiac cycle following right atrial opacification. Which of the following physiological principles explains why this patient's severe hypoxemia fails to correct with 100% supplemental oxygen?",
    "choices": [
      [
        "Deoxygenated mixed venous blood entirely bypasses ventilated alveolar units, directly mixing into systemic arterial circulation (true right-to-left shunt)",
        "Hypoxemia with an elevated A-a oxygen gradient can arise from V/Q mismatch, diffusion impairment, or true right-to-left shunt. In V/Q MISMATCH (e.g., COPD, pulmonary embolism, atelectasis), poorly ventilated alveoli have low V/Q ratios; administering 100% inspired oxygen massively increases alveolar PO2 in moderately ventilated units, dramatically increasing dissolved O2 and hemoglobin saturation, correcting PaO2 (typically > 300 mm Hg). In contrast, in a TRUE RIGHT-TO-LEFT SHUNT (either intracardiac, such as a patent foramen ovale or Eisenmenger syndrome, or intrapulmonary, such as arteriovenous malformations or complete alveolar collapse), deoxygenated mixed venous blood bypasses ventilated lung units completely. 100% O2 cannot contact this shunted blood. Because the blood passing through ventilated alveoli is already 100% saturated, it can only dissolve a negligible amount of additional O2 (0.003 mL O2/dL/mm Hg), which is easily overwhelmed by the desaturated shunted blood, resulting in refractory hypoxemia (minimal PaO2 rise)."
      ],
      [
        "Severe alveolar-capillary membrane thickening exceeding the diffusion capacity of molecular oxygen",
        "Diffusion limitation (e.g., pulmonary fibrosis) is readily overcome by 100% O2 because the massive alveolar-to-capillary PO2 gradient drives oxygen diffusion across the thickened membrane."
      ],
      [
        "Marked compensatory leftward shift of the oxyhemoglobin dissociation curve mediated by acute respiratory alkalosis",
        "Respiratory alkalosis increases hemoglobin oxygen affinity (shifts curve left), which slightly aids loading in the lungs; it does not prevent PaO2 from rising with 100% O2."
      ],
      [
        "Massive microvascular pulmonary vasodilation increasing dead space ventilation to 80%",
        "Dead space ventilation (high V/Q) affects CO2 elimination, causing hypercapnia, not refractory hypoxemia with early saline contrast shunting."
      ],
      [
        "Inhibition of peripheral arterial chemoreceptors by hyperoxia causing immediate alveolar hypoventilation",
        "Hyperoxic hypoventilation can occur in severe hypercapnic COPD ('loss of hypoxic drive'), but it does not produce immediate intracardiac microbubble transit or refractory PaO2 <= 54 mm Hg on 100% O2."
      ]
    ],
    "shortestValidSolution": "Refractory hypoxemia on 100% O2 + bubble study positive at 1 beat = True right-to-left shunt (shunted venous blood bypasses ventilated alveoli).",
    "necessaryInference": "Distinguish V/Q mismatch (corrects with 100% O2) from true right-to-left shunt (fails to correct with 100% O2 due to complete bypass of ventilated alveolar gas).",
    "strongestDistractor": "Severe alveolar-capillary membrane thickening exceeding the diffusion capacity of molecular oxygen",
    "distractorExclusion": "Diffusion limitation is overcome by high inspired PO2 widening the diffusion gradient; true shunt completely bypasses gas exchange.",
    "citation": "Petersson J, Glenny RW. Gas exchange and ventilation-perfusion relationships in the lung. Eur Respir J. 2014;44(4):1023-1041. PMID: 25034567.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Right-to-Left Intracardiac Shunt vs V/Q Mismatch 100% Oxygen Response.",
      "distractorExclusionNotes": "Competitor Severe alveolar-capillary membrane thickening exce excluded by Diffusion limitation is overcome by high inspired PO2 wideni.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0753",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Class IC Antiarrhythmics Use-Dependence and QRS Widening at High Heart Rates",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with paroxysmal atrial fibrillation and normal left ventricular systolic function is initiated on flecainide for rhythm control. Before discharge, he undergoes an exercise stress treadmill test to evaluate drug safety. At a baseline resting heart rate of 62/min, his ECG shows normal sinus rhythm with a QRS duration of 92 msec. As exercise progresses and his heart rate increases to 148/min, his QRS duration progressively widens to 142 msec, returning to 96 msec during the post-exercise recovery period. Which of the following biophysical properties of flecainide explains this exercise-induced QRS prolongation?",
    "choices": [
      [
        "Slow dissociation kinetics from the open and inactivated states of cardiac voltage-gated sodium channels (use-dependence)",
        "Class I antiarrhythmic agents block voltage-gated sodium (Nav1.5) channels, reducing Phase 0 depolarization velocity (dV/dt) and slowing intraventricular conduction. Class IC agents (flecainide, propafenone) have the SLOWEST binding and unbinding kinetics: they bind during depolarization and dissociate very slowly during diastole. At normal resting heart rates, the prolonged diastolic interval allows partial drug unbinding. However, at higher heart rates (tachycardia or exercise), the diastolic recovery time between consecutive action potentials is markedly shortened. Consequently, flecainide molecules accumulate on the sodium channels with each successive beat, leading to progressive sodium channel blockade, slowed conduction velocity, and progressive QRS WIDENING\u2014a phenomenon termed USE-DEPENDENCE. In contrast, Class III agents (potassium channel blockers) exhibit REVERSE USE-DEPENDENCE, where QT prolongation is most pronounced at slow heart rates."
      ],
      [
        "Rapid dissociation from resting sodium channels combined with selective prolongation of phase 3 repolarization (reverse use-dependence)",
        "Reverse use-dependence is characteristic of Class III potassium channel blockers (sotalol, dofetilide), causing greatest action potential prolongation and QT widening at slow heart rates, not exercise-induced QRS widening."
      ],
      [
        "Selective inhibition of the transient outward potassium current (Ito) in mid-myocardial M cells",
        "Ito inhibition affects Phase 1 early repolarization and is involved in Brugada syndrome dynamics, not rate-dependent QRS widening during exercise."
      ],
      [
        "Competitive antagonism of beta-1 adrenergic receptors causing rate-dependent AV nodal conduction delay",
        "Flecainide has minimal beta-blocking activity (unlike propafenone), and beta blockade prolongs the PR interval (AV conduction), not the QRS duration."
      ],
      [
        "Voltage-dependent blockade of L-type calcium channels causing conduction delay in the His-Purkinje system",
        "L-type calcium channel blockade is the mechanism of Class IV antiarrhythmics (verapamil, diltiazem), which act predominantly on SA and AV nodes without widening the QRS."
      ]
    ],
    "shortestValidSolution": "Flecainide QRS widening with tachycardia/exercise = Class IC use-dependence -> Slow Na+ channel dissociation leads to channel blockade accumulation at high rates.",
    "necessaryInference": "Recognize use-dependence of Class IC antiarrhythmics: slow dissociation from Nav1.5 channels causes cumulative blockade and QRS widening during tachycardia.",
    "strongestDistractor": "Rapid dissociation from resting sodium channels combined with selective prolongation of phase 3 repolarization (reverse use-dependence)",
    "distractorExclusion": "Reverse use-dependence is seen with Class III potassium blockers (worse at bradycardia); Class IC sodium blockers show use-dependence (worse at tachycardia).",
    "citation": "Echt DS, Liebson PR, Mitchell LB, et al. Mortality and morbidity in patients receiving encainide, flecainide, or placebo. The Cardiac Arrhythmia Suppression Trial. N Engl J Med. 1991;324(12):781-788. PMID: 1900101.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Class IC Antiarrhythmics Use-Dependence and QRS Widening at High Heart Rates.",
      "distractorExclusionNotes": "Competitor Rapid dissociation from resting sodium channels co excluded by Reverse use-dependence is seen with Class III potassium bloc.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0754",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Neisseria Gonorrhoeae Antigenic Variation via pilS-pilE Recombination",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old man presents with a 2-day history of severe dysuria and copious, purulent urethral discharge. Urethral swab reveals intracellular Gram-negative diplococci within polymorphonuclear leukocytes. He is successfully treated with intramuscular ceftriaxone. Two months later, he returns with identical symptoms following sexual intercourse with a new partner. He asks why his immune system failed to provide protective immunity against recurrent infection despite mounting a vigorous antibody response during his initial illness. Which of the following molecular mechanisms directly enables this pathogen to evade host immunological memory and cause recurrent mucosal infections?",
    "choices": [
      [
        "High-frequency non-reciprocal homologous recombination transferring sequence cassettes from silent pilS genes into the expressed pilE locus",
        "Neisseria gonorrhoeae evades long-term protective immunity through ANTIGENIC AND PHASE VARIATION of its surface structures, most notably TYPE IV PILI. Pili are major adhesins required for mucosal attachment and initial colonization. The gonococcal genome contains a single active expression locus, PILE, and multiple transcriptionally silent loci, PILS, which lack promoters and ribosome binding sites but contain variable coding sequences. Through non-reciprocal homologous recombination (gene conversion), diverse variable minicassettes from pilS are systematically recombined into the pilE expression locus. This continually generates antigenically novel pilin proteins that escape neutralization by pre-existing host anti-pilin antibodies, preventing effective immune memory and facilitating recurrent infections. N. gonorrhoeae also undergoes phase variation of Opa (opacity) proteins via slipped-strand mispairing of CTCTT pentanucleotide repeats."
      ],
      [
        "Spontaneous point mutations in the capsule polysaccharide biosynthetic operon altering capsular serotype",
        "Neisseria gonorrhoeae is famously unencapsulated (unlike Neisseria meningitidis, which has a polysaccharide capsule with diverse serogroups)."
      ],
      [
        "Lysogenic bacteriophage transduction transferring novel outer membrane protein A (OmpA) variants",
        "Pilin variation in N. gonorrhoeae is mediated by intragenomic homologous gene conversion between endogenous pilS and pilE loci, not bacteriophage transduction."
      ],
      [
        "Site-specific DNA inversion of promoter sequences driven by Hin recombinase",
        "Site-specific flagellar phase variation via Hin invertase occurs in Salmonella typhimurium (H1 vs H2 flagellin), not in gonococcal pili."
      ],
      [
        "Acquisition of plasmid-encoded beta-lactamase genes via high-frequency conjugation",
        "Plasmid conjugation mediates penicillin resistance; it does not alter surface pilin antigenic identity or evade host antibody recognition."
      ]
    ],
    "shortestValidSolution": "Recurrent gonorrhea + failure of humoral immunity = Pilus antigenic variation -> Homologous recombination of silent pilS cassettes into expressed pilE locus.",
    "necessaryInference": "Identify the genetic mechanism of Neisseria gonorrhoeae antigenic variation: non-reciprocal gene conversion between silent pilS loci and the active pilE locus.",
    "strongestDistractor": "Spontaneous point mutations in the capsule polysaccharide biosynthetic operon altering capsular serotype",
    "distractorExclusion": "N. gonorrhoeae lacks a capsule entirely; N. meningitidis is encapsulated, whereas gonococcus relies on pilin and Opa protein variation.",
    "citation": "Hagblom P, Segal E, Billyard E, So M. Intragenic recombination leads to pilus antigenic variation in Neisseria gonorrhoeae. Nature. 1985;315(6015):156-158. PMID: 2860558.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Neisseria Gonorrhoeae Antigenic Variation via pilS-pilE Recombination.",
      "distractorExclusionNotes": "Competitor Spontaneous point mutations in the capsule polysac excluded by N. gonorrhoeae lacks a capsule entirely; N. meningitidis is .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0755",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Renal",
    "topic": "Minimal Change Disease Loss of Glomerular Polyanion Charge Barrier",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy presents with sudden-onset generalized periorbital edema, abdominal distension, and frothy urine. Physical examination reveals pitting pretibial edema and ascites. Urinalysis demonstrates 4+ protein with no red blood cells or cellular casts. Quantitative 24-hour urine collection reveals 4.8 g of protein, composed almost entirely of albumin (> 90%), with negligible transferrin, IgG, or macroglobulins (highly selective proteinuria). Serum albumin is 1.8 g/dL and total cholesterol is 340 mg/dL. Renal biopsy shows completely normal glomeruli on light microscopy and negative immunofluorescence. Which of the following biophysical alterations in the glomerular filtration barrier directly accounts for this patient's selective albuminuria?",
    "choices": [
      [
        "Cytokine-mediated loss of negatively charged heparan sulfate proteoglycans from the glomerular basement membrane and podocyte glycocalyx",
        "MINIMAL CHANGE DISEASE (MCD) is the leading cause of nephrotic syndrome in children. It is mediated by T-cell dysregulation producing circulating permeability cytokines (such as IL-13) that injure glomerular visceral epithelial cells (PODOCYTES). The normal glomerular filtration barrier consists of fenestrated endothelium, the glomerular basement membrane (GBM), and podocyte foot processes bridged by slit diaphragms. The GBM and podocyte foot processes are coated with polyanionic glycoproteins rich in HEPARAN SULFATE and sialic acid, creating a strong NEGATIVE CHARGE BARRIER. Because serum ALBUMIN has an effective molecular radius of 3.6 nm and carries a strong net negative charge at physiological pH (isoelectric point 4.7), it is electrostatically repelled by the anionic barrier despite being small enough to pass mechanically. In MCD, systemic cytokine release causes loss of negative polyanionic charges and diffuse podocyte foot process effacement. The loss of negative charge allows polyanionic albumin to selectively cross the barrier (SELECTIVE PROTEINURIA), while larger proteins (IgG, radius 5.5 nm) remain mechanically excluded."
      ],
      [
        "Physical disruption and detachment of podocyte foot processes from the basement membrane creating large denuded fenestrations",
        "Detachment of podocytes with denuded basement membrane and sclerosis describes Focal Segmental Glomerulosclerosis (FSGS), which produces NON-SELECTIVE proteinuria (allowing IgG and IgM to leak)."
      ],
      [
        "Subepithelial deposition of IgG4 autoantibodies targeting the M-type phospholipase A2 receptor (PLA2R)",
        "Anti-PLA2R subepithelial immune complex deposition causes Membranous Nephropathy in adults, characterized by diffuse GBM thickening and spike-and-dome pattern."
      ],
      [
        "Mutations in the NPHS1 gene encoding nephrin abolishing slit diaphragm structural integrity",
        "NPHS1 mutations cause congenital nephrotic syndrome of the Finnish type, a refractory genetic disease presenting at birth, not corticosteroid-responsive pediatric MCD."
      ],
      [
        "Deposition of subendothelial C3 complement fragments via alternate complement pathway activation",
        "Subendothelial immune/complement deposits occur in MPGN or lupus nephritis, producing nephritic/nephrotic features with hypocomplementemia, not MCD."
      ]
    ],
    "shortestValidSolution": "Pediatric nephrotic syndrome + normal light microscopy + selective albuminuria = Minimal change disease -> Loss of negatively charged heparan sulfate.",
    "necessaryInference": "Differentiate charge-selective vs size-selective proteinuria: MCD causes loss of negative polyanionic heparan sulfate charges, selectively leaking albumin.",
    "strongestDistractor": "Physical disruption and detachment of podocyte foot processes from the basement membrane creating large denuded fenestrations",
    "distractorExclusion": "Denuded bare basement membrane and detachment occur in FSGS with non-selective proteinuria; MCD features charge loss and intact mechanical size barrier.",
    "citation": "Vivarelli M, Massella L, Ruggiero B, Emma F. Minimal Change Disease. Clin J Am Soc Nephrol. 2017;12(2):332-345. PMID: 27940460.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Minimal Change Disease Loss of Glomerular Polyanion Charge Barrier.",
      "distractorExclusionNotes": "Competitor Physical disruption and detachment of podocyte foo excluded by Denuded bare basement membrane and detachment occur in FSGS .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0756",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Pyruvate Dehydrogenase Deficiency and Purely Ketogenic Amino Acids",
    "provisionalDifficulty": 5,
    "stem": "A 6-month-old male infant presents with severe developmental delay, hypotonia, microcephaly, and recurrent episodes of tachypnea triggered by mild viral illnesses. Laboratory evaluation reveals persistent severe lactic acidosis (serum lactate 7.8 mmol/L, normal < 2.0 mmol/L) and elevated blood pyruvate (0.42 mmol/L, normal < 0.1 mmol/L) with a normal lactate-to-pyruvate ratio. Serum alanine is markedly increased. Enzymatic assay confirms congenital deficiency of the E1 alpha subunit of the pyruvate dehydrogenase (PDH) complex. To prevent further neurotoxic lactic acid accumulation while providing calories for brain development, he is transitioned to a specialized ketogenic diet. Which of the following amino acids can be safely included in this patient's nutritional regimen because its catabolism cannot yield pyruvate or drive lactic acid production?",
    "choices": [
      [
        "Leucine and lysine",
        "The PYRUVATE DEHYDROGENASE (PDH) complex converts pyruvate to acetyl-CoA, linking glycolysis to the citric acid cycle. When PDH is deficient, pyruvate accumulates and shunts into LACTATE (via lactate dehydrogenase) and ALANINE (via alanine transaminase), causing life-threatening congenital lactic acidosis and neurological injury. Management requires a KETOGENIC DIET containing high fats and strictly PURELY KETOGENIC AMINO ACIDS. The only two purely ketogenic amino acids are LEUCINE and LYSINE. Their catabolism yields only acetyl-CoA and acetoacetate (ketone bodies), completely bypassing pyruvate and providing an alternative, non-glycolytic energy substrate for the brain without worsening lactic acidosis. In contrast, glucogenic amino acids (e.g., alanine, serine, cysteine, glycine) catabolize to pyruvate or citric acid cycle intermediates, which can convert to oxaloacetate and phosphoenolpyruvate, fueling gluconeogenesis and generating more pyruvate."
      ],
      [
        "Alanine and serine",
        "Alanine is transaminated directly into pyruvate by ALT, directly worsening lactic acidosis in PDH deficiency."
      ],
      [
        "Methionine and valine",
        "Methionine and valine are glucogenic amino acids that metabolize to propionyl-CoA and succinyl-CoA, fueling oxaloacetate synthesis."
      ],
      [
        "Phenylalanine and tyrosine",
        "Phenylalanine and tyrosine are both glucogenic and ketogenic (yielding fumarate and acetoacetate), not purely ketogenic."
      ],
      [
        "Aspartate and asparagine",
        "Aspartate and asparagine are glucogenic amino acids that metabolize to oxaloacetate, capable of feeding gluconeogenesis and pyruvate flux."
      ]
    ],
    "shortestValidSolution": "Pyruvate dehydrogenase deficiency + lactic acidosis -> Treat with purely ketogenic amino acids: Leucine and Lysine (yield acetyl-CoA/ketones, bypassing pyruvate).",
    "necessaryInference": "Identify purely ketogenic amino acids (leucine and lysine) as the only amino acids whose catabolism cannot yield pyruvate or worsen lactic acidosis in PDH deficiency.",
    "strongestDistractor": "Alanine and serine",
    "distractorExclusion": "Alanine directly transaminates to pyruvate, worsening lactic acidosis; only leucine and lysine are purely ketogenic.",
    "citation": "Brown GK, Otero LJ, LeGris M, Brown RM. Pyruvate dehydrogenase deficiency. J Med Genet. 1994;31(11):875-879. PMID: 7853374.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Pyruvate Dehydrogenase Deficiency and Purely Ketogenic Amino Acids.",
      "distractorExclusionNotes": "Competitor Alanine and serine excluded by Alanine directly transaminates to pyruvate, worsening lactic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0757",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Nervous System",
    "topic": "Inhaled Anesthetics Blood:Gas Partition Coefficient vs MAC",
    "provisionalDifficulty": 5,
    "stem": "A 45-year-old man undergoes general anesthesia for an elective laparoscopic cholecystectomy. The anesthesiologist compares two volatile inhaled anesthetics: Agent X, which has a blood:gas partition coefficient of 0.47 and a minimum alveolar concentration (MAC) of 6.0%, and Agent Y, which has a blood:gas partition coefficient of 2.40 and a MAC of 0.75%. Which of the following statements correctly compares the clinical pharmacokinetic and pharmacodynamic properties of Agent X relative to Agent Y?",
    "choices": [
      [
        "Agent X has a much faster rate of induction and recovery, but significantly lower anesthetic potency than Agent Y",
        "The pharmacokinetics of inhaled anesthetics are governed by two fundamental physical constants: (1) BLOOD:GAS PARTITION COEFFICIENT reflects solubility in blood. An agent with LOW blood:gas solubility (Agent X = 0.47, such as nitrous oxide or desflurane) dissolves poorly in blood; the blood compartment saturates rapidly, allowing alveolar partial pressure to equilibrate quickly with arterial and brain partial pressures, resulting in RAPID INDUCTION AND RAPID EMERGENCE/RECOVERY. Conversely, high blood:gas solubility (Agent Y = 2.40, like halothane) means the blood acts as a large reservoir, taking a long time to saturate and delaying brain equilibration (slow induction and recovery). (2) MINIMUM ALVEOLAR CONCENTRATION (MAC) is the alveolar concentration at 1 atm that prevents movement in 50% of patients exposed to a surgical incision. MAC is INVERSELY PROPORTIONAL to POTENCY (1/MAC = potency). Because Agent X has a high MAC (6.0%), it has LOW POTENCY, requiring high concentrations; Agent Y has a low MAC (0.75%), meaning it is HIGHLY POTENT."
      ],
      [
        "Agent X has a slower rate of induction but significantly higher anesthetic potency than Agent Y",
        "Low blood:gas solubility speeds induction (does not slow it), and higher MAC signifies lower potency."
      ],
      [
        "Agent X has both a faster rate of induction and higher anesthetic potency than Agent Y",
        "Agent X has faster induction due to low blood:gas coefficient, but LOWER potency because its MAC (6.0%) is much higher than Agent Y (0.75%)."
      ],
      [
        "Agent X requires a higher partial pressure to achieve anesthesia because of rapid hepatic clearance by CYP2E1",
        "MAC is an intrinsic biophysical property related to lipid solubility (Meyer-Overton correlation); inhaled anesthetic depth depends on brain partial pressure, not hepatic CYP metabolism."
      ],
      [
        "Agent Y equilibrates rapidly with brain tissue because high blood solubility accelerates alveolar washout",
        "High blood solubility slows alveolar and brain equilibration because the agent dissolves heavily in pulmonary capillary blood before building up alveolar and arterial tension."
      ]
    ],
    "shortestValidSolution": "Low blood:gas partition coefficient (0.47) = Fast induction/recovery; High MAC (6.0%) = Low potency (Agent X vs Y).",
    "necessaryInference": "Correlate inhaled anesthetic parameters: blood:gas partition coefficient determines speed of induction/recovery (inversely), while MAC determines potency (inversely).",
    "strongestDistractor": "Agent X has both a faster rate of induction and higher anesthetic potency than Agent Y",
    "distractorExclusion": "MAC is inversely related to potency; a higher MAC (6.0% vs 0.75%) means lower potency, not higher potency.",
    "citation": "Eger EI 2nd. Characteristics of anesthetic agents used for induction and maintenance of general anesthesia. Am J Health Syst Pharm. 2004;61(20 Suppl 4):S3-S10. PMID: 15552634.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Inhaled Anesthetics Blood:Gas Partition Coefficient vs MAC.",
      "distractorExclusionNotes": "Competitor Agent X has both a faster rate of induction and hi excluded by MAC is inversely related to potency; a higher MAC (6.0% vs 0.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0758",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Gastrointestinal",
    "topic": "Superior Mesenteric Artery Syndrome Duodenal Compression",
    "provisionalDifficulty": 4,
    "stem": "A 16-year-old girl with severe anorexia nervosa experiences a rapid 14-kg weight loss over 3 months. She presents with severe postprandial epigastric pain, early satiety, nausea, and bilious vomiting that begins approximately 30 minutes after eating. Physical examination reveals profound emaciation (BMI 14.8 kg/m2) and a scaphoid abdomen with succussion splash. Her symptoms improve markedly when she lies prone or brings her knees to her chest in the knee-chest position. Abdominal CT with intravenous and oral contrast demonstrates marked distension of the stomach and first and second parts of the duodenum, with abrupt, sharp extrinsic compression of the third part of the duodenum. Between which two anatomical vascular structures is the duodenum compressed in this patient?",
    "choices": [
      [
        "Superior mesenteric artery anteriorly and abdominal aorta posteriorly",
        "SUPERIOR MESENTERIC ARTERY (SMA) SYNDROME (Wilkie syndrome) occurs when the THIRD (HORIZONTAL) PART OF THE DUODENUM is compressed between the ABDOMINAL AORTA posteriorly and the SUPERIOR MESENTERIC ARTERY anteriorly. Normally, the mesenteric fat pad surrounding the SMA cushions and maintains an aortomesenteric angle between 38\u00b0 and 56\u00b0 (and an aortomesenteric distance > 10 mm). In situations of severe, rapid weight loss (anorexia nervosa, severe burns, malabsorption, cancer cachexia, or spinal surgery), loss of the intervening retroperitoneal mesenteric fat pad narrows the aortomesenteric angle to < 22\u00b0 and distance to < 8 mm. This acutely compresses the transverse duodenum as it crosses transversely anterior to the aorta and L3 vertebra, causing mechanical small bowel obstruction (postprandial bilious vomiting, pain). The prone or knee-chest position relieves symptoms by pulling the small bowel mesentery and SMA anteriorly away from the aorta."
      ],
      [
        "Celiac trunk superiorly and splenic vein inferiorly",
        "The celiac trunk arises above the pancreas (at T12); it does not compress the third part of the duodenum."
      ],
      [
        "Inferior mesenteric artery anteriorly and inferior vena cava posteriorly",
        "The inferior mesenteric artery arises at L3 but courses inferolaterally to supply the hindgut; it does not compress the transverse duodenum."
      ],
      [
        "Portal vein anteriorly and hepatic artery posteriorly",
        "The portal vein and proper hepatic artery run within the hepatoduodenal ligament anterior to the epiploic foramen of Winslow, superior to the first part of the duodenum."
      ],
      [
        "Renal vein anteriorly and left renal artery posteriorly",
        "The left renal vein runs between the SMA and aorta (the 'nutcracker' anatomy, causing left renal vein entrapment syndrome/hematuria), but does not cause duodenal obstruction."
      ]
    ],
    "shortestValidSolution": "Rapid weight loss + postprandial bilious vomiting relieved by knee-chest position + duodenal obstruction = SMA syndrome (duodenum compressed between SMA and aorta).",
    "necessaryInference": "Identify superior mesenteric artery syndrome: loss of mesenteric fat pad narrows aortomesenteric angle, compressing the 3rd (horizontal) part of the duodenum against the aorta.",
    "strongestDistractor": "Renal vein anteriorly and left renal artery posteriorly",
    "distractorExclusion": "The left renal vein is compressed between SMA and aorta in nutcracker syndrome (hematuria, left flank/pelvic pain), whereas SMA syndrome compresses the duodenum.",
    "citation": "Merrett ND, Wilson RB, Cosman P, Biankin AV. Superior mesenteric artery syndrome: diagnosis and treatment strategies. J Gastrointest Surg. 2009;13(2):287-292. PMID: 18810579.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Superior Mesenteric Artery Syndrome Duodenal Compression.",
      "distractorExclusionNotes": "Competitor Renal vein anteriorly and left renal artery poster excluded by The left renal vein is compressed between SMA and aorta in n.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0759",
    "exam": "Step 1",
    "subject": "Immunology",
    "system": "Hematology",
    "topic": "Immune Checkpoint Blockade PD-1 vs CTLA-4 Reversal of T-Cell Exhaustion",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old man with metastatic cutaneous malignant melanoma refractory to standard dacarbazine chemotherapy is enrolled in a clinical trial evaluating monoclonal antibody therapy. He receives pembrolizumab. Over the next 12 weeks, follow-up PET-CT imaging demonstrates a 65% reduction in hepatic and pulmonary metastases, accompanied by robust CD8+ cytotoxic T-lymphocyte infiltration into the tumor stroma on repeat core biopsy. Which of the following molecular interactions is specifically interrupted by this therapeutic monoclonal antibody to restore antitumor T-cell effector function?",
    "choices": [
      [
        "Binding of the inhibitory receptor PD-1 on antigen-experienced cytotoxic T cells to its ligands PD-L1/PD-L2 on tumor cells",
        "In chronic viral infections and cancer, persistent exposure to tumor antigens drives CD8+ cytotoxic T cells into a dysfunctional state termed T-CELL EXHAUSTION. Exhausted T cells progressively upregulate inhibitory surface receptors, most notably PROGRAMMED CELL DEATH PROTEIN 1 (PD-1). Tumor cells frequently evade immune destruction by upregulating PROGRAMMED DEATH-LIGAND 1 (PD-L1) on their cell surface (often in response to host interferon-gamma). When tumor PD-L1 binds PD-1 on CD8+ T cells, it recruits the phosphatase SHP-2, which dephosphorylates CD28 and T-cell receptor (TCR) proximal signaling molecules (such as ZAP-70), shutting down T-cell proliferation, cytokine secretion (IL-2, IFN-gamma), and cytotoxic granzyme/perforin release. Monoclonal antibodies targeting PD-1 (PEMBROLIZUMAB, NIVOLUMAB) or PD-L1 (atezolizumab, durvalumab) block this inhibitory axis, REVERSING T-CELL EXHAUSTION and restoring tumor-directed cytotoxicity in the peripheral tumor microenvironment. In contrast, CTLA-4 blockade (IPILIMUMAB) acts earlier during T-cell priming in secondary lymphoid organs by outcompeting CD28 for B7-1/B7-2 (CD80/CD86)."
      ],
      [
        "Binding of CTLA-4 on naive T cells to CD80/CD86 costimulatory ligands on dendritic cells during initial priming",
        "CTLA-4 blockade (ipilimumab) acts during initial T-cell priming in regional lymph nodes by preventing B7 binding; pembrolizumab specifically targets PD-1 in the peripheral tumor bed."
      ],
      [
        "Binding of vascular endothelial growth factor (VEGF) to VEGFR-2 on tumor vascular endothelium",
        "VEGF-VEGFR-2 blockade is the mechanism of bevacizumab, an antiangiogenic agent, not an immune checkpoint inhibitor."
      ],
      [
        "Binding of tumor necrosis factor-alpha (TNF-alpha) to TNFR1 on tumor-infiltrating macrophages",
        "Anti-TNF therapy (infliximab, adalimumab) suppresses inflammation in autoimmune diseases; blocking TNF does not activate antitumor CD8+ cytotoxic responses."
      ],
      [
        "Engagement of CD40 ligand (CD40L) on helper T cells with CD40 on antigen-presenting dendritic cells",
        "CD40-CD40L interaction is a positive costimulatory signal that activates dendritic cells and promotes B-cell class switching; blocking it would impair, not stimulate, immunity."
      ]
    ],
    "shortestValidSolution": "Pembrolizumab melanoma response = PD-1 blockade -> Prevents PD-1/PD-L1 interaction in tumor microenvironment, reversing CD8+ T-cell exhaustion.",
    "necessaryInference": "Differentiate checkpoint inhibitors: pembrolizumab blocks PD-1 (reversing peripheral effector T-cell exhaustion), while ipilimumab blocks CTLA-4 (enhancing priming in lymph nodes).",
    "strongestDistractor": "Binding of CTLA-4 on naive T cells to CD80/CD86 costimulatory ligands on dendritic cells during initial priming",
    "distractorExclusion": "CTLA-4 inhibition (ipilimumab) acts at the priming stage in lymph nodes, whereas pembrolizumab blocks PD-1 on exhausted effector T cells at the tumor site.",
    "citation": "Ribas A, Wolchok JD. Cancer immunotherapy using checkpoint blockade. Science. 2018;359(6382):1350-1355. PMID: 29567705.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Immune Checkpoint Blockade PD-1 vs CTLA-4 Reversal of T-Cell Exhaustion.",
      "distractorExclusionNotes": "Competitor Binding of CTLA-4 on naive T cells to CD80/CD86 co excluded by CTLA-4 inhibition (ipilimumab) acts at the priming stage in .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0760",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Renal",
    "topic": "Tubuloglomerular Feedback Macula Densa NKCC2 and Adenosine Constriction",
    "provisionalDifficulty": 5,
    "stem": "A 24-year-old healthy male volunteer participates in a clinical renal physiology study. While maintaining normal hydration, he receives an intravenous infusion of hypertonic saline that acutely increases single-nephron glomerular filtration rate (SNGFR), delivering an increased fluid and sodium chloride load through the loop of Henle to the distal nephron. Within 90 seconds, renal micropuncture demonstrates an automatic reduction in glomerular capillary hydrostatic pressure (PGC) and restoration of SNGFR toward baseline. Which of the following signaling cascades within the juxtaglomerular apparatus directly mediates this acute autoregulatory reduction in single-nephron GFR?",
    "choices": [
      [
        "Increased NaCl uptake by macula densa NKCC2 cotransporters stimulates basolateral ATP and adenosine release, activating A1 receptors to constrict the afferent arteriole",
        "TUBULOGLOMERULAR FEEDBACK (TGF) is a negative feedback mechanism within the juxtaglomerular apparatus that stabilizes single-nephron GFR and distal solute delivery. The MACULA DENSA cells in the initial portion of the distal convoluted tubule sense the luminal concentration of NaCl. When GFR increases, the increased tubular flow delivers a higher NaCl load to the macula densa. Increased luminal NaCl stimulates uptake via the apical Na+-K+-2Cl- COTRANSPORTER (NKCC2). Increased intracellular Na+ and Cl- stimulates basolateral release of ATP into the interstitium, which is rapidly hydrolyzed by ecto-5'-nucleotidase to ADENOSINE. Adenosine binds ADENOSINE A1 RECEPTORS on extraglomerular mesangial cells and vascular smooth muscle cells of the adjacent AFFERENT ARTERIOLE. This triggers a Gq/Gi signaling cascade, elevating intracellular calcium and inducing AFFERENT ARTERIOLAR VASOCONSTRICTION. Constriction of the afferent arteriole lowers glomerular capillary hydrostatic pressure (PGC), restoring GFR to baseline. Concurrently, macula densa signaling suppresses renin release from granular cells."
      ],
      [
        "Decreased NaCl delivery to the macula densa stimulates local cyclooxygenase-2 (COX-2) to release prostaglandin E2, constricting the efferent arteriole",
        "Decreased NaCl delivery stimulates COX-2 and PGE2/PGI2, which causes afferent arteriolar DILATATION and stimulates renin release, not vasoconstriction."
      ],
      [
        "Direct stretch activation of endothelin-1 receptors on the efferent arteriole causing efferent vasodilatation",
        "Efferent vasodilatation would lower GFR, but TGF acts via macula densa adenosine-mediated AFFERENT vasoconstriction."
      ],
      [
        "Nitric oxide synthase-1 (NOS1) overactivation in the medullary collecting duct triggering systemic natriuresis",
        "NOS1 produces nitric oxide, which is a vasodilator that blunts TGF; it does not mediate afferent arteriolar constriction."
      ],
      [
        "Angiotensin II binding to AT2 receptors on the podocyte slit diaphragm closing filtration slits",
        "Podocyte filtration slits are regulated by nephrin/podocin cytoskeletal elements, not direct AT2 receptor-mediated mechanical closure."
      ]
    ],
    "shortestValidSolution": "Increased distal NaCl delivery -> Macula densa NKCC2 uptake -> ATP/Adenosine release -> Afferent arteriole constriction via A1 receptors -> Lowers GFR (TGF).",
    "necessaryInference": "Trace tubuloglomerular feedback: macula densa senses high luminal NaCl via NKCC2, releasing adenosine/ATP to constrict the afferent arteriole and normalize GFR.",
    "strongestDistractor": "Decreased NaCl delivery to the macula densa stimulates local cyclooxygenase-2 (COX-2) to release prostaglandin E2, constricting the efferent arteriole",
    "distractorExclusion": "Decreased NaCl delivery signals low volume/perfusion, stimulating COX-2/prostaglandins to DILATE the afferent arteriole and increase renin.",
    "citation": "Schnermann J. Juxtaglomerular cell complex in the regulation of renal function. Am J Physiol Renal Physiol. 2003;285(4):F565-F576. PMID: 12954589.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Tubuloglomerular Feedback Macula Densa NKCC2 and Adenosine Constriction.",
      "distractorExclusionNotes": "Competitor Decreased NaCl delivery to the macula densa stimul excluded by Decreased NaCl delivery signals low volume/perfusion, stimul.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0761",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Hematology",
    "topic": "Hereditary Spherocytosis Cytoskeletal Defect and EMA Binding",
    "provisionalDifficulty": 4,
    "stem": "A 14-year-old boy presents with scleral icterus and fatigue following a viral upper respiratory infection. He has a history of pigmented gallstones requiring laparoscopic cholecystectomy at age 11. His mother underwent splenectomy during adolescence. Physical examination reveals conjunctival pallor and moderate splenomegaly extending 4 cm below the left costal margin. Laboratory studies show: hemoglobin 9.4 g/dL, MCV 78 fL, MCHC 37.8 g/dL (normal 32-36 g/dL), reticulocytes 8.4%, total bilirubin 3.6 mg/dL, direct bilirubin 0.4 mg/dL, and elevated serum lactate dehydrogenase. Peripheral blood smear demonstrates dense, round erythrocytes lacking central pallor. Flow cytometry reveals markedly decreased eosin-5-maleimide (EMA) fluorescence binding to erythrocytes. Which of the following molecular abnormalities is the underlying cause of this patient's hemolytic disorder?",
    "choices": [
      [
        "Genetic defect in erythrocyte membrane cytoskeletal scaffolding proteins (ankyrin, spectrin, or band 3) causing loss of membrane surface area",
        "HEREDITARY SPHEROCYTOSIS is the most common inherited hemolytic anemia in Northern Europeans, typically inherited in an autosomal dominant fashion. Mutations in RBC membrane cytoskeletal tethering proteins\u2014most commonly ANKYRIN (ANK1), followed by BAND 3 (SLC4A1), BETA-SPECTRIN, or PROTEIN 4.2\u2014disrupt the mechanical linkage between the lipid bilayer and the underlying spectrin cytoskeleton. This causes spontaneous shedding of membrane lipid microvesicles, progressively REDUCING SURFACE AREA-TO-VOLUME RATIO. As surface area is lost while intracellular hemoglobin content remains constant, the cell is forced to assume the minimum surface area geometry: a sphere. Spherocytes are rigid, unyielding, and have an ELEVATED MEAN CORPUSCULAR HEMOGLOBIN CONCENTRATION (MCHC > 36 g/dL). Spherocytes cannot deform to squeeze through the narrow endothelial slits of the splenic red pulp (cords of Billroth), where they are selectively trapped and phagocytosed by splenic macrophages (extravascular hemolysis). The eosin-5-maleimide (EMA) binding test detects reduced band 3/cytoskeletal protein density by flow cytometry, confirming the diagnosis."
      ],
      [
        "Somatic mutation in the PIGA gene causing loss of glycosylphosphatidylinositol (GPI) membrane anchor proteins",
        "PIGA mutations cause Paroxysmal Nocturnal Hemoglobinuria (PNH), characterized by intravascular complement-mediated hemolysis (loss of CD55/CD59), thrombosis, and negative Coombs test, without spherocytes."
      ],
      [
        "Missense mutation in the beta-globin gene substituting valine for glutamic acid at codon 6",
        "Beta-globin Glu6Val mutation causes Sickle Cell Disease (HbS), characterized by sickle-shaped RBCs on smear, vaso-occlusive crises, and normal MCHC."
      ],
      [
        "Congenital deficiency of glucose-6-phosphate dehydrogenase (G6PD) causing oxidative Heinz body formation",
        "G6PD deficiency causes episodic intravascular and extravascular hemolysis with bite cells and Heinz bodies on crystal violet stain, not hereditary spherocytosis with elevated MCHC."
      ],
      [
        "Warm-reacting IgG autoantibodies directed against Rh blood group surface antigens",
        "Warm autoimmune hemolytic anemia (AIHA) causes secondary spherocytes on smear, but the direct antiglobulin (Coombs) test is positive and the condition is acquired, without a familial autosomal dominant history or abnormal EMA flow cytometry."
      ]
    ],
    "shortestValidSolution": "Gallstones in teen + splenomegaly + high MCHC + spherocytes + decreased EMA binding = Hereditary spherocytosis -> Ankyrin/spectrin cytoskeletal defect.",
    "necessaryInference": "Identify hereditary spherocytosis: cytoskeletal protein defects (ankyrin, spectrin, band 3) lead to membrane vesicle shedding, reduced surface area-to-volume ratio, and elevated MCHC.",
    "strongestDistractor": "Warm-reacting IgG autoantibodies directed against Rh blood group surface antigens",
    "distractorExclusion": "Warm AIHA produces secondary spherocytes via splenic macrophage partial phagocytosis, but has a positive direct Coombs test and normal EMA binding, without dominant family history.",
    "citation": "Perrotta S, Gallagher PG, Mohandas N. Hereditary spherocytosis. Lancet. 2008;372(9647):1411-1426. PMID: 18940465.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hereditary Spherocytosis Cytoskeletal Defect and EMA Binding.",
      "distractorExclusionNotes": "Competitor Warm-reacting IgG autoantibodies directed against  excluded by Warm AIHA produces secondary spherocytes via splenic macroph.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0762",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Segmented RNA Viruses Reassortment and Antigenic Shift",
    "provisionalDifficulty": 5,
    "stem": "An epidemiologist investigates the emergence of a novel influenza A pandemic strain that exhibits widespread human-to-human transmission and resistance to pre-existing population immunity. Genomic sequencing confirms that the novel strain contains hemagglutinin (H2) derived from an avian viral strain and neuraminidase (N2) derived from a circulating human viral strain. This rapid, complete replacement of major surface envelope glycoprotein genes occurs when two distinct viral strains coinfect the same host cell. Which of the following viral structural characteristics is an absolute requirement for this genetic process to take place?",
    "choices": [
      [
        "A segmented ribonucleic acid (RNA) genome allowing physical exchange of intact genomic segments",
        "The emergence of novel pandemic influenza strains occurs via ANTIGENIC SHIFT, which produces abrupt, major genetic alterations in hemagglutinin (HA) or neuraminidase (NA). Antigenic shift occurs through REASSORTMENT (genetic shuffling), which requires a SEGMENTED GENOME. When two distinct strains of a segmented virus coinfect a single host cell (e.g., swine co-infected by avian and human influenza viruses), newly synthesized parental genomic RNA segments are randomly packaged into progeny virions. The resulting reassortant virion can acquire an entirely novel hemagglutinin segment to which the human population has no herd immunity, driving global pandemics. The major human segmented RNA viruses can be remembered by the mnemonic 'BOAR': Bunyaviridae, Orthomyxoviridae (influenza: 8 segments), Arenaviridae, and Reoviridae (rotavirus: 11 segments). In contrast, ANTIGENIC DRIFT occurs in both segmented and non-segmented viruses via minor point mutations introduced by error-prone viral RNA-dependent RNA polymerase, causing seasonal epidemics."
      ],
      [
        "A circular double-stranded DNA genome capable of homologous rolling-circle replication",
        "Rolling-circle replication occurs in circular DNA viruses (e.g., papillomaviruses); it does not mediate antigenic shift or genome reassortment."
      ],
      [
        "A positive-sense single-stranded RNA genome that directly undergoes host ribosomal frameshifting",
        "Ribosomal frameshifting is used by coronaviruses and retroviruses to produce alternative polyproteins; it does not allow physical gene reassortment between viruses."
      ],
      [
        "An icosahedral capsid containing reverse transcriptase and integrase enzymes",
        "Reverse transcription and integration are features of Retroviridae (HIV); influenza is an enveloped helical RNA virus without integrase."
      ],
      [
        "A non-segmented negative-sense RNA genome that undergoes copy-choice template switching during replication",
        "Copy-choice recombination can occur in non-segmented viruses (e.g., coronaviruses), but true reassortment of intact genes requires a segmented RNA genome."
      ]
    ],
    "shortestValidSolution": "Influenza antigenic shift / pandemic strain = Reassortment -> Requires a segmented RNA genome (BOAR viruses).",
    "necessaryInference": "Identify viral reassortment: coinfection of a host cell by two distinct strains allows physical swapping of genomic RNA segments, an event restricted to segmented viruses (Orthomyxo).",
    "strongestDistractor": "A non-segmented negative-sense RNA genome that undergoes copy-choice template switching during replication",
    "distractorExclusion": "Copy-choice recombination occurs between homologous RNA templates, but antigenic shift in influenza is driven by reassortment of discrete segmented RNA chromosomes.",
    "citation": "Webster RG, Bean WJ, Gorman OT, Chambers TM, Kawaoka Y. Evolution and ecology of influenza A viruses. Microbiol Rev. 1992;56(1):152-179. PMID: 1579108.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Segmented RNA Viruses Reassortment and Antigenic Shift.",
      "distractorExclusionNotes": "Competitor A non-segmented negative-sense RNA genome that und excluded by Copy-choice recombination occurs between homologous RNA temp.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0763",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Endocrine",
    "topic": "Propylthiouracil vs Methimazole Peripheral 5'-Deiodinase Inhibition",
    "provisionalDifficulty": 5,
    "stem": "A 28-year-old woman is admitted to the intensive care unit in thyroid storm triggered by an acute pelvic infection. She is febrile to 39.8\u00b0C (103.6\u00b0F), tachycardic at 154/min, delirious, and profusely diaphoretic. Free T4 is 5.8 ng/dL (normal 0.8-1.8 ng/dL) and TSH is < 0.01 microU/mL. Along with supportive intravenous hydration and propranolol, she is immediately treated with high-dose propylthiouracil (PTU). Which of the following pharmacodynamic properties provides propylthiouracil with a unique therapeutic advantage over methimazole in the acute management of life-threatening thyroid storm?",
    "choices": [
      [
        "Inhibition of peripheral 5'-deiodinase enzyme blocking the extrathyroidal conversion of thyroxine (T4) to active triiodothyronine (T3)",
        "Both PROPYLTHIOURACIL (PTU) and METHIMAZOLE are thionamides that inhibit THYROID PEROXIDASE (TPO), the enzyme that catalyzes the oxidation of iodide (I- to I0), organification of iodine into tyrosine residues on thyroglobulin, and coupling of monoiodotyrosine (MIT) and diiodotyrosine (DIT). However, preformed colloid stores of T4 and T3 in the follicular lumens mean that intrathyroidal synthesis blockade takes days to weeks to deplete circulating thyroid hormone. PROPYLTHIOURACIL has the unique additional pharmacodynamic effect of INHIBITING PERIPHERAL 5'-DEIODINASE, the extrathyroidal enzyme responsible for converting inactive circulating prohormone thyroxine (T4) into the biologically active hormone TRIIODOTHYRONINE (T3). Because T3 has 4 to 5 times greater affinity and potency at nuclear thyroid receptors than T4, rapid inhibition of peripheral conversion acutely blunts the systemic hypermetabolic crisis in THYROID STORM. Methimazole does NOT inhibit peripheral 5'-deiodinase. (PTU is also preferred in the first trimester of pregnancy due to methimazole teratogenicity [aplasia cutis, choanal atresia], while methimazole is preferred outside of pregnancy/storm due to PTU's black-box warning for severe fulminant hepatotoxicity)."
      ],
      [
        "Allosteric activation of hepatic CYP3A4 accelerating systemic clearance of circulating thyroid hormones",
        "Thionamides do not induce hepatic cytochrome P450 enzymes; thyroid hormone metabolism is mediated by peripheral and hepatic deiodinases."
      ],
      [
        "Direct competitive blockade of the pituitary thyrotropin-releasing hormone (TRH) receptor",
        "Thionamides do not antagonize TRH receptors; in primary hyperthyroidism, TRH and TSH are already fully suppressed by negative feedback."
      ],
      [
        "Inhibition of the basolateral sodium-iodide symporter (NIS) in thyroid follicular epithelial cells",
        "Inhibition of the NIS symporter is the mechanism of competitive anions (perchlorate, pertechnetate, thiocyanate), not thionamides."
      ],
      [
        "Immediate disruption of lysosomal proteolysis of thyroglobulin releasing intact iodothyronines into colloid",
        "Inhibition of thyroglobulin proteolysis and thyroid hormone release is mediated by high-dose inorganic IODIDE (the Wolff-Chaikoff effect / Lugol solution or potassium iodide), not PTU."
      ]
    ],
    "shortestValidSolution": "Thyroid storm + rapid clinical control = PTU over methimazole -> PTU inhibits peripheral 5'-deiodinase (converts T4 to active T3).",
    "necessaryInference": "Distinguish thionamides in thyroid storm: both block TPO organification, but only propylthiouracil additionally inhibits peripheral 5'-deiodinase conversion of T4 to T3.",
    "strongestDistractor": "Immediate disruption of lysosomal proteolysis of thyroglobulin releasing intact iodothyronines into colloid",
    "distractorExclusion": "Inhibition of thyroid hormone release from colloid is the mechanism of potassium iodide (Lugol solution), which is given >= 1 hour AFTER thionamides in thyroid storm.",
    "citation": "Cooper DS. Antithyroid drugs. N Engl J Med. 2005;352(9):905-917. PMID: 15744002.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Propylthiouracil vs Methimazole Peripheral 5'-Deiodinase Inhibition.",
      "distractorExclusionNotes": "Competitor Immediate disruption of lysosomal proteolysis of t excluded by Inhibition of thyroid hormone release from colloid is the me.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0764",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Zellweger Syndrome Peroxisomal Biogenesis Defect and VLCFA Accumulation",
    "provisionalDifficulty": 5,
    "stem": "A 3-week-old female infant is evaluated for severe generalized hypotonia ('floppy infant'), poor feeding, and epileptic seizures. Physical examination reveals distinctive dysmorphic craniofacial features, including a high prominent forehead, wide-open anterior and posterior fontanelles, hypertelorism, epicanthal folds, and micrognathia. Abdominal examination demonstrates prominent hepatomegaly, and funduscopic examination reveals retinal dystrophy and optic nerve atrophy. Brain MRI shows bilateral polymicrogyria, periventricular pseudocysts, and delayed myelination. Biochemical profiling demonstrates marked elevation of plasma very long-chain fatty acids (VLCFAs, including C26:0 and C26:1) and phytanic acid, with undetectable plasmalogen levels. Genetic testing confirms an autosomal recessive mutation in the PEX1 gene. Which of the following subcellular organelles is functionally absent or defective in this infant's condition?",
    "choices": [
      [
        "Peroxisomes responsible for alpha-oxidation and beta-oxidation of branched and very long-chain fatty acids",
        "ZELLWEGER SYNDROME is an autosomal recessive PEROXISOMAL BIOGENESIS DISORDER caused by mutations in PEX genes (most commonly PEX1), which encode PEROXINS\u2014proteins required for peroxisomal assembly, membrane protein import, and matrix enzyme translocation. Without functional peroxisomes, the cell cannot perform critical peroxisomal metabolic pathways: (1) BETA-OXIDATION OF VERY LONG-CHAIN FATTY ACIDS (VLCFAs, chain lengths > 22 carbons, e.g., hexacosanoic acid C26:0). Unlike short- and medium-chain fatty acids which are oxidized in mitochondria, VLCFAs must undergo initial chain-shortening beta-oxidation within peroxisomes before mitochondrial entry. VLCFAs accumulate systemically, disrupting neuronal membrane lipid composition, causing severe leukodystrophy, polymicrogyria, hypotonia, and early death. (2) ALPHA-OXIDATION OF BRANCHED-CHAIN FATTY ACIDS, such as phytanic acid (derived from dietary chlorophyll); phytanic acid accumulation impairs neuronal and cardiac conduction. (3) PLASMALOGEN SYNTHESIS (ether phospholipids critical for myelin sheath integrity); plasmalogens are markedly depleted."
      ],
      [
        "Lysosomes responsible for enzymatic degradation of sphingomyelin and gangliosides",
        "Lysosomal storage disorders (e.g., Niemann-Pick, Tay-Sachs) cause sphingolipid accumulation with cherry-red macular spots, not VLCFA accumulation or PEX mutations."
      ],
      [
        "Mitochondria responsible for short- and medium-chain fatty acid carnitine shuttle-dependent oxidation",
        "Mitochondria oxidize short- and medium-chain fatty acids via the carnitine shuttle; VLCFAs cannot be metabolized by mitochondria without initial peroxisomal processing."
      ],
      [
        "Endoplasmic reticulum responsible for N-linked glycosylation and apolipoprotein B synthesis",
        "ER dysfunction causes congenital disorders of glycosylation or abetalipoproteinemia (acanthocytosis, lipid malabsorption), not VLCFA elevation."
      ],
      [
        "Golgi apparatus responsible for mannose-6-phosphate tagging of lysosomal hydrolases",
        "Defective M6P tagging in the Golgi causes I-cell disease (mucolipidosis II) due to GlcNAc phosphotransferase deficiency, characterized by coarse facial features and joint contractures."
      ]
    ],
    "shortestValidSolution": "Floppy infant + high forehead + hepatomegaly + high VLCFAs + PEX1 mutation = Zellweger syndrome -> Defective peroxisomal biogenesis.",
    "necessaryInference": "Trace VLCFA metabolism: peroxisomes are obligatory for beta-oxidation of very long-chain fatty acids (>22 carbons) and alpha-oxidation of phytanic acid; PEX mutations cause Zellweger syndrome.",
    "strongestDistractor": "Mitochondria responsible for short- and medium-chain fatty acid carnitine shuttle-dependent oxidation",
    "distractorExclusion": "Mitochondria cannot oxidize VLCFAs directly; peroxisomes perform the initial beta-oxidation of VLCFAs (C24-C26) down to octanoyl-CoA before mitochondrial transfer.",
    "citation": "Wanders RJ, Waterham HR. Biochemistry of mammalian peroxisomes revisited. Annu Rev Biochem. 2006;75:295-332. PMID: 16756494.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Zellweger Syndrome Peroxisomal Biogenesis Defect and VLCFA Accumulation.",
      "distractorExclusionNotes": "Competitor Mitochondria responsible for short- and medium-cha excluded by Mitochondria cannot oxidize VLCFAs directly; peroxisomes per.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0765",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Nervous System",
    "topic": "Amyotrophic Lateral Sclerosis Combined UMN and LMN Degeneration",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man presents with progressive weakness and muscle wasting that began in his right hand 8 months ago and has now spread to his right arm and both legs. He reports frequent painful muscle cramps and difficulty buttoning his shirts and turning door keys. On neurological examination, he has marked intrinsic hand muscle atrophy, prominent widespread fasciculations in his biceps, deltoids, and quadriceps, and 3/5 muscle strength in his right upper extremity. Paradoxically, his right biceps and brachioradialis reflexes are brisk (3+), patellar reflexes are hyperactive (4+) with sustained clonus, and there is an extensor plantar response (positive Babinski sign) on the right. Sensation to light touch, pinprick, vibration, and proprioception is completely intact, and extraocular eye movements and bowel/bladder control are preserved. Which of the following pathological processes accounts for this patient's concurrent presentation of upper and lower motor neuron signs without sensory deficits?",
    "choices": [
      [
        "Degeneration of both the anterior horn motor neurons in the spinal cord and the corticospinal tract axons arising from the motor cortex",
        "AMYOTROPHIC LATERAL SCLEROSIS (ALS) is a progressive neurodegenerative disease characterized by the simultaneous degeneration of both LOWER MOTOR NEURONS (LMNs) in the spinal anterior horns and brainstem motor nuclei (cranial nerves V, VII, IX, X, XII) and UPPER MOTOR NEURONS (UMNs) in the precentral gyrus (primary motor cortex) and lateral corticospinal tracts. The classic clinical hallmark is the CONCURRENT PRESENCE OF BOTH UMN AND LMN SIGNS in the same limb or body region without sensory or autonomic impairment: (1) LMN destruction causes muscle weakness, prominent muscle atrophy, loss of tone, and spontaneous firing of dying motor units termed FASCICULATIONS and fibrillations. (2) UMN destruction causes hyperreflexia, spasticity, clonus, and extensor plantar responses (positive Babinski sign). Sensation is completely spared because posterior columns and spinothalamic tracts are unaffected. Extraocular motor nuclei (CN III, IV, VI in the oculomotor complex) and the Onuf nucleus (controlling anal/urethral sphincters) are characteristically spared. Familial ALS (10%) is frequently associated with mutations in SOD1 (superoxide dismutase 1), C9orf72 (hexanucleotide repeat expansion), or TARDBP (encoding TDP-43). Neuropathology reveals bunina bodies and ubiquitin/TDP-43-positive inclusions."
      ],
      [
        "Autoimmune demyelination of the central nervous system white matter with oligoclonal bands",
        "Multiple sclerosis causes upper motor neuron signs and sensory symptoms that fluctuate over time (relapsing-remitting) with optic neuritis, not pure combined UMN/LMN hand atrophy and fasciculations."
      ],
      [
        "Degeneration of the posterior columns and spinocerebellar tracts secondary to Friedreich ataxia",
        "Friedreich ataxia causes prominent sensory ataxia, loss of vibration/proprioception, and loss of deep tendon reflexes (hyporeflexia), with hypertrophic cardiomyopathy."
      ],
      [
        "Selective autoimmune destruction of acetylcholine receptors at the postsynaptic neuromuscular junction",
        "Myasthenia gravis causes fluctuating, fatigable motor weakness with prominent ptosis and diplopia, without fasciculations, muscle atrophy, hyperreflexia, or Babinski sign."
      ],
      [
        "Isolated degeneration of spinal cord anterior horn alpha-motor neurons due to SMN1 mutation",
        "Spinal muscular atrophy (SMA) causes isolated lower motor neuron degeneration (flaccidity, absent reflexes, fasciculations), lacking upper motor neuron hyperreflexia or Babinski signs."
      ]
    ],
    "shortestValidSolution": "Muscle atrophy + fasciculations (LMN) combined with hyperreflexia + positive Babinski (UMN) + normal sensation = Amyotrophic lateral sclerosis (ALS).",
    "necessaryInference": "Recognize ALS as the simultaneous loss of spinal anterior horn cells (LMN signs: atrophy, fasciculations) and corticospinal tracts (UMN signs: spasticity, hyperreflexia, Babinski) with sensory sparing.",
    "strongestDistractor": "Isolated degeneration of spinal cord anterior horn alpha-motor neurons due to SMN1 mutation",
    "distractorExclusion": "SMN1 mutations (spinal muscular atrophy) produce pure lower motor neuron findings with hyporeflexia, lacking the prominent upper motor neuron hyperreflexia and Babinski signs of ALS.",
    "citation": "Rowland LP, Shneider NA. Amyotrophic lateral sclerosis. N Engl J Med. 2001;344(22):1688-1700. PMID: 11386269.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Amyotrophic Lateral Sclerosis Combined UMN and LMN Degeneration.",
      "distractorExclusionNotes": "Competitor Isolated degeneration of spinal cord anterior horn excluded by SMN1 mutations (spinal muscular atrophy) produce pure lower .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0766",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Acute Arteriovenous Fistula Guyton Cardiac Output and Venous Return Hemodynamics",
    "provisionalDifficulty": 5,
    "stem": "A 48-year-old man with end-stage renal disease secondary to diabetic nephropathy undergoes surgical creation of a left radiocephalic arteriovenous (AV) fistula in preparation for long-term hemodialysis. Within 48 hours following the establishment of a large-volume surgical shunt between the radial artery and cephalic vein, he undergoes hemodynamic evaluation. Which of the following alterations in total peripheral resistance (TPR), venous return curve, and cardiac operating point on a Guyton vascular and cardiac function diagram is expected as a direct consequence of this acute arteriovenous fistula?",
    "choices": [
      [
        "Decreased total peripheral resistance shifting the vascular function curve upward and to the right, establishing a new equilibrium point at higher cardiac output and elevated right atrial pressure",
        "On a Guyton cardiac and vascular function diagram, cardiac output (CO) and venous return (VR) are plotted against right atrial pressure (RAP). Creation of a large ARTERIOVENOUS (AV) FISTULA creates a low-resistance, high-capacitance shunt that connects high-pressure arterial circulation directly into low-pressure venous circulation, bypassing high-resistance arteriolar capillary beds. This produces an immediate, marked REDUCTION IN TOTAL PERIPHERAL RESISTANCE (TPR). Lower TPR decreases afterload on the heart, allowing a greater volume of blood to flow rapidly back to the right atrium, which dramatically INCREASES VENOUS RETURN. On the Guyton diagram: (1) The VASCULAR FUNCTION (VENOUS RETURN) CURVE shifts UPWARD and ROTATES TO THE RIGHT (steeper slope) because less driving pressure is lost across resistance vessels. (2) Mean systemic filling pressure (MSFP, the x-axis intercept where flow is zero) remains initially unchanged before compensatory fluid retention. (3) The intersection of the vascular function curve and the cardiac function curve shifts to a NEW EQUILIBRIUM OPERATING POINT characterized by a SUBSTANTIALLY ELEVATED CARDIAC OUTPUT and a SLIGHTLY ELEVATED RIGHT ATRIAL PRESSURE. Over time, high-output heart failure can develop."
      ],
      [
        "Increased total peripheral resistance rotating the vascular function curve downward and to the left, decreasing cardiac output",
        "An AV fistula decreases (not increases) total peripheral resistance by providing an extra low-resistance parallel circuit."
      ],
      [
        "Selective upward shift of the cardiac function curve without any alteration in the slope or position of the vascular function curve",
        "Upward shift of the cardiac function curve occurs with positive inotropes (digoxin, dobutamine); an AV fistula primarily alters vascular resistance and venous return."
      ],
      [
        "Parallel leftward displacement of mean systemic filling pressure resulting in reduced right atrial pressure and decreased stroke volume",
        "Leftward displacement of MSFP occurs with acute hemorrhage or venodilation; an AV fistula increases venous return and increases right atrial pressure."
      ],
      [
        "Isolated suppression of myocardial contractility rotating the cardiac function curve downward with unchanged vascular resistance",
        "Myocardial contractility is not acutely suppressed by an AV fistula; cardiac output increases markedly due to afterload reduction and increased venous preload."
      ]
    ],
    "shortestValidSolution": "Large AV fistula = Lowers TPR -> Increases venous return -> Rotates vascular curve upward/right -> New operating point at high CO and elevated RAP.",
    "necessaryInference": "Apply Guyton hemodynamics to an AV fistula: parallel resistance circuit decreases TPR, shifting the venous return curve upward/right, yielding higher cardiac output and right atrial pressure.",
    "strongestDistractor": "Increased total peripheral resistance rotating the vascular function curve downward and to the left, decreasing cardiac output",
    "distractorExclusion": "Adding a parallel circuit in hemodynamics always reduces total systemic resistance, increasing (not decreasing) venous return and cardiac output.",
    "citation": "Guyton AC. Determination of cardiac output by equating venous return curves with cardiac response curves. Physiol Rev. 1955;35(1):123-129. PMID: 14356926.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Acute Arteriovenous Fistula Guyton Cardiac Output and Venous Return Hemodynamics.",
      "distractorExclusionNotes": "Competitor Increased total peripheral resistance rotating the excluded by Adding a parallel circuit in hemodynamics always reduces tot.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0767",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Organophosphate Poisoning Atropine vs Pralidoxime Mechanisms",
    "provisionalDifficulty": 5,
    "stem": "A 42-year-old commercial agricultural worker is brought to the emergency department after accidentally spraying himself with an organophosphate insecticide without protective equipment. He presents with profuse salivation, lacrimation, diaphoresis, involuntary defecation, vomiting, and severe respiratory distress with audible bilateral wheezing. Vital signs: blood pressure 92/58 mm Hg, heart rate 42/min, and respirations 32/min. Physical examination reveals pinpoint pupils (miosis) and diffuse skeletal muscle fasciculations followed by progressive flaccid weakness of his intercostal muscles and diaphragm. He is immediately administered intravenous atropine, which resolves his bradycardia, bronchorrhea, and salivation, but he remains severely weak with worsening diaphragmatic paralysis. Which of the following therapeutic agents is required to restore muscle strength and reverse his neuromuscular paralysis?",
    "choices": [
      [
        "Pralidoxime (2-PAM) which acts as a nucleophile to cleave the organophosphate covalent bond and regenerate active acetylcholinesterase at both muscarinic and nicotinic synapses",
        "ORGANOPHOSPHATES (e.g., malathion, parathion, sarin) are irreversible inhibitors of ACETYLCHOLINESTERASE (AChE). They phosphorylate the serine hydroxyl group in the enzyme's catalytic triad, causing massive synaptic accumulation of acetylcholine at both MUSCARINIC and NICOTINIC receptors. (1) Muscarinic overstimulation produces the 'DUMBBELSS' toxidrome: Defecation, Urination, Miosis, Bronchorrhea/Bronchospasm, Bradycardia, Emesis, Lacrimation, Salivation/Sweating. ATROPINE is a competitive antagonist at MUSCARINIC receptors only. It rapidly reverses life-threatening bradycardia, bronchorrhea, and bronchospasm, but it has ZERO ACTIVITY at NICOTINIC acetylcholine receptors. (2) Nicotinic overstimulation at the neuromuscular junction causes muscle fasciculations followed by persistent depolarization blockade and flaccid paralysis of respiratory muscles. To treat neuromuscular weakness, PRALIDOXIME (2-PAM) must be administered. Pralidoxime is a high-affinity nucleophilic oxime that attacks the phosphorylated acetylcholinesterase complex, cleaving the phosphate-enzyme covalent bond and REGENERATING ACTIVE ACETYLCHOLINESTERASE at both muscarinic and nicotinic junctions. Pralidoxime must be given before 'aging' occurs (chemical dealkylation of the organophosphate-enzyme bond, rendering AChE permanently refractory)."
      ],
      [
        "Physostigmine which competitively inhibits peripheral acetylcholinesterase to prevent acetylcholine receptor desensitization",
        "Physostigmine is itself an acetylcholinesterase inhibitor used to treat anticholinergic poisoning (atropine overdose); administering it in organophosphate toxicity would be fatal."
      ],
      [
        "Neostigmine which selectively stimulates nicotinic motor endplate channels to overcome neuromuscular blockade",
        "Neostigmine inhibits AChE and would exacerbate acetylcholine accumulation, deepening depolarizing neuromuscular paralysis."
      ],
      [
        "Succinylcholine which competes with excess acetylcholine at postjunctional nicotinic receptors",
        "Succinylcholine is a depolarizing neuromuscular blocker that is metabolized by pseudocholinesterase (which organophosphates also inhibit); giving it causes prolonged apnea."
      ],
      [
        "Scopolamine which provides central muscarinic blockade with potent peripheral nicotinic receptor antagonism",
        "Scopolamine is an antimuscarinic agent with central penetration (like atropine); it has no effect on nicotinic neuromuscular receptors."
      ]
    ],
    "shortestValidSolution": "Organophosphate poisoning: Atropine reverses muscarinic (bronchorrhea, bradycardia) but NOT nicotinic (muscle paralysis) -> Pralidoxime regenerates AChE at nicotinic NMJ.",
    "necessaryInference": "Differentiate atropine from pralidoxime in organophosphate poisoning: atropine blocks muscarinic receptors only, while pralidoxime cleaves the organophosphate bond to regenerate active AChE at nicotinic motor endplates.",
    "strongestDistractor": "Neostigmine which selectively stimulates nicotinic motor endplate channels to overcome neuromuscular blockade",
    "distractorExclusion": "Neostigmine is an AChE inhibitor; adding more AChE inhibition to organophosphate toxicity worsens neuromuscular blockade and accelerates death.",
    "citation": "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008;371(9612):597-607. PMID: 18280330.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Organophosphate Poisoning Atropine vs Pralidoxime Mechanisms.",
      "distractorExclusionNotes": "Competitor Neostigmine which selectively stimulates nicotinic excluded by Neostigmine is an AChE inhibitor; adding more AChE inhibitio.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0768",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Gastrointestinal",
    "topic": "Hirschsprung Disease Neural Crest Migration Failure and Aganglionosis",
    "provisionalDifficulty": 4,
    "stem": "A 3-day-old male full-term newborn has not passed meconium since birth. His abdomen is markedly distended, and he develops bilious emesis. Digital rectal examination reveals a snug, tight anal sphincter; upon withdrawal of the examining finger, there is an explosive expulsion of gas and liquid stool with transient relief of abdominal distension ('squirt sign'). Abdominal radiography reveals massively dilated loops of colon with an absence of rectal air. Contrast enema demonstrates a narrow, spastic rectum and distal sigmoid colon with a sharp transition zone leading into a markedly dilated proximal sigmoid and descending colon. Rectal suction biopsy taken 3 cm above the pectinate line reveals an absence of ganglion cells on hematoxylin-eosin staining and prominent hypertrophied non-myelinated nerve trunks with intense acetylcholinesterase staining. Failure of which of the following embryological processes is responsible for this newborn's condition?",
    "choices": [
      [
        "Craniocaudal migration of neural crest cells into the distal hindgut wall between weeks 8 and 12 of gestation",
        "HIRSCHSPRUNG DISEASE (congenital aganglionic megacolon) is caused by the failure of NEURAL CREST CELLS to complete their normal craniocaudal migration along the developing gastrointestinal tract during embryogenesis (weeks 8 to 12). Enteric neurons originate from vagal neural crest precursors that migrate rostrocaudally from the pharynx to the distal hindgut; the RECTUM is the final segment colonized. Arrest of migration results in congenital absence of enteric parasympathetic ganglion cells in both the SUBMUCOSAL (MEISSNER) PLEXUS (which regulates mucosal secretion and blood flow) and the MYENTERIC (AUERBACH) PLEXUS (located between circular and longitudinal muscle layers, regulating peristalsis). Because the aganglionic distal segment lacks inhibitory nitrergic and VIP-ergic motor neurons, the circular smooth muscle remains TONICALLY CONSTRICTED and fails to relax. This causes functional mechanical bowel obstruction (failure to pass meconium within 48 hours, squirt sign, narrow spastic rectum). The proximal normal colon dilates under upstream pressure (megacolon). Up to 50% of familial cases involve loss-of-function mutations in the RET PROTO-ONCOGENE."
      ],
      [
        "Ventral budding of the endodermal diverticulum from the primitive foregut tube",
        "Ventral foregut budding gives rise to the liver, gallbladder, and ventral pancreatic bud, not the enteric nervous system."
      ],
      [
        "Recanalization of the intestinal lumen following epithelial proliferation during the 8th embryonic week",
        "Failure of recanalization causes duodenal or intestinal ATRESIA (associated with Down syndrome and double-bubble sign), not functional aganglionosis."
      ],
      [
        "Counterclockwise 270-degree rotation of the midgut loop around the superior mesenteric artery axis",
        "Abnormal midgut rotation causes intestinal malrotation with Ladd bands and midgut volvulus, not distal rectal aganglionosis."
      ],
      [
        "Fusion of the dorsal and ventral pancreatic ducts during second-trimester organogenesis",
        "Failure of pancreatic duct fusion causes pancreas divisum, an anatomical variant that can predispose to chronic pancreatitis."
      ]
    ],
    "shortestValidSolution": "Failure to pass meconium + squirt sign + absent ganglion cells on rectal suction biopsy = Hirschsprung disease -> Failure of neural crest cell migration into distal hindgut.",
    "necessaryInference": "Trace Hirschsprung disease embryology: arrest of craniocaudal neural crest migration leaves the distal rectum aganglionic (absent Auerbach and Meissner plexuses), causing tonic constriction.",
    "strongestDistractor": "Recanalization of the intestinal lumen following epithelial proliferation during the 8th embryonic week",
    "distractorExclusion": "Failure of recanalization leads to true mechanical luminal occlusion (duodenal atresia), whereas Hirschsprung is a neurogenic functional obstruction due to absent ganglion cells.",
    "citation": "Amiel J, Sproat-Emison E, Garcia-Barcelo M, et al. Hirschsprung disease, associated syndromes and genetics: a review. J Med Genet. 2008;45(1):1-14. PMID: 17965226.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hirschsprung Disease Neural Crest Migration Failure and Aganglionosis.",
      "distractorExclusionNotes": "Competitor Recanalization of the intestinal lumen following e excluded by Failure of recanalization leads to true mechanical luminal o.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0769",
    "exam": "Step 1",
    "subject": "Microbiology",
    "system": "General Principles",
    "topic": "Shiga and Shiga-like Toxins 28S rRNA Cleavage and Ribosome Inactivation",
    "provisionalDifficulty": 5,
    "stem": "A 5-year-old girl is hospitalized with acute bloody diarrhea, crampy abdominal pain, and low-grade fever that began 4 days after eating an undercooked hamburger at a family picnic. Over the next 48 hours, her urine output drops precipitously to < 0.3 mL/kg/hr. Physical examination reveals extreme pallor, petechiae on her lower extremities, and lethargy. Laboratory evaluation demonstrates: hemoglobin 6.8 g/dL, platelet count 28,000/microL, serum creatinine 3.8 mg/dL, and elevated indirect bilirubin and LDH. Peripheral blood smear confirms microangiopathic hemolytic anemia with numerous helmet cells and fragmented schistocytes. Stool culture on sorbitol-MacConkey (SMAC) agar yields colorless colonies, confirming enterohemorrhagic Escherichia coli (EHEC O157:H7). Which of the following molecular mechanisms directly mediates the cellular cytotoxicity of the primary exotoxin produced by this bacterium?",
    "choices": [
      [
        "Specific enzymatic depurination of a single adenine base from the 28S ribosomal RNA of the eukaryotic 60S ribosomal subunit",
        "Enterohemorrhagic Escherichia coli (EHEC, including serotype O157:H7) and Shigella dysenteriae produce SHIGA TOXIN (Stx1 and Stx2 / Shiga-like toxins). Shiga toxin is an AB5-multimeric exotoxin. The five B subunits bind the neutral glycolipid globotriaosylceramide (Gb3) receptor, which is abundantly expressed on intestinal epithelial cells and RENAL GLOMERULAR ENDOTHELIAL CELLS. Following receptor-mediated endocytosis, the catalytic A subunit translocates into the cytosol. The A subunit acts as an N-GLYCOSIDASE that specifically cleaves a SINGLE ADENINE RESIDUE (adenine-4324) from the 28S rRNA of the eukaryotic 60S RIBOSOMAL SUBUNIT. This irreversible depurination prevents the binding of elongation factor-1 (EF-1) and aminoacyl-tRNA to the ribosome, completely HALTING HOST CELLULAR PROTEIN SYNTHESIS and triggering apoptosis. In the kidney, glomerular endothelial damage exposes subendothelial collagen, triggering platelet activation and microthrombi formation, consuming platelets and shearing erythrocytes (HEMOLYTIC UREMIC SYNDROME: thrombocytopenia, microangiopathic hemolytic anemia, acute kidney injury). Antibiotics are contraindicated because they induce the lambdoid bacteriophage lytic cycle, increasing toxin release and worsening HUS risk."
      ],
      [
        "ADP-ribosylation of the alpha-stimulatory (Gs) subunit of adenylate cyclase causing chloride hypersecretion",
        "Gs ADP-ribosylation is the mechanism of enterotoxigenic E. coli (ETEC) heat-labile toxin (LT) and cholera toxin, producing profuse watery diarrhea without schistocytes or renal failure."
      ],
      [
        "Cleavage of the exocytic SNARE protein synaptobrevin preventing neurotransmitter vesicle fusion",
        "Synaptobrevin cleavage is mediated by tetanus toxin and botulinum toxin types B, D, F, G, causing neuromuscular spastic or flaccid paralysis."
      ],
      [
        "Lecithinase activity disrupting eukaryotic plasma membranes via enzymatic hydrolysis of phosphatidylcholine",
        "Lecithinase (alpha-toxin) is a phospholipase C produced by Clostridium perfringens, causing gas gangrene and clostridial myonecrosis with hemolysis."
      ],
      [
        "Inactivation of host elongation factor-2 (EF-2) via NAD+-dependent ADP-ribosylation",
        "Inactivation of EF-2 via ADP-ribosylation is the mechanism of Diphtheria toxin and Pseudomonas exotoxin A; Shiga toxin does not ADP-ribosylate EF-2, but depurinates 28S rRNA."
      ]
    ],
    "shortestValidSolution": "EHEC O157:H7 + bloody diarrhea + HUS (schistocytes, low platelets, renal failure) = Shiga-like toxin -> Depurinates 28S rRNA in 60S ribosome, halting protein synthesis.",
    "necessaryInference": "Differentiate bacterial protein synthesis toxins: Shiga/Shiga-like toxins depurinate 28S rRNA of the 60S subunit, whereas Diphtheria/Pseudomonas ADP-ribosylate EF-2.",
    "strongestDistractor": "Inactivation of host elongation factor-2 (EF-2) via NAD+-dependent ADP-ribosylation",
    "distractorExclusion": "Diphtheria toxin and Pseudomonas exotoxin A inactivate EF-2 by ADP-ribosylation; Shiga-like toxin specifically depurinates adenine in the 28S rRNA of the 60S ribosome.",
    "citation": "Tarr PI, Gordon CA, Chandler WL. Shiga-toxin-producing Escherichia coli and haemolytic uraemic syndrome. Lancet. 2005;365(9464):1073-1086. PMID: 15781103.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Shiga and Shiga-like Toxins 28S rRNA Cleavage and Ribosome Inactivation.",
      "distractorExclusionNotes": "Competitor Inactivation of host elongation factor-2 (EF-2) vi excluded by Diphtheria toxin and Pseudomonas exotoxin A inactivate EF-2 .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0770",
    "exam": "Step 1",
    "subject": "Biochemistry",
    "system": "General Principles",
    "topic": "Hereditary Orotic Aciduria vs OTC Deficiency Pyrimidine Metabolism",
    "provisionalDifficulty": 5,
    "stem": "A 14-month-old boy is brought for severe failure to thrive, physical growth retardation, and developmental delay. Complete blood count reveals: hemoglobin 6.2 g/dL, MCV 112 fL (normal 70-86 fL), reticulocyte count 0.8%, WBC 3,800/microL, and platelets 110,000/microL. Peripheral blood smear demonstrates marked anisopoikilocytosis, macro-ovalocytes, and hypersegmented neutrophils (> 5 lobes). Serum vitamin B12, serum folate, and RBC folate concentrations are well within normal reference ranges. Extensive oral and parenteral supplementation with vitamin B12 and folinic acid produces no hematological response. Urinalysis demonstrates massive excretion of orotic acid with needle-shaped birefringent crystals. Serum ammonia and blood urea nitrogen concentrations are completely normal. Which of the following enzymes is deficient in this patient?",
    "choices": [
      [
        "Uridine 5'-monophosphate (UMP) synthase (orotate phosphoribosyltransferase and OMP decarboxylase)",
        "HEREDITARY OROTIC ACIDURIA is an autosomal recessive inborn error of DE NOVO PYRIMIDINE SYNTHESIS caused by deficiency of UMP SYNTHASE. UMP synthase is a bifunctional enzyme containing two catalytic domains: orotate phosphoribosyltransferase (which adds PRPP to orotic acid to form OMP) and orotidine-5'-monophosphate decarboxylase (which decarboxylates OMP to UMP). Deficiency of either domain leads to massive accumulation of upstream OROTIC ACID, which precipitates in urine as needle-shaped crystals. Because pyrimidines (thymidine, cytidine, uridine) cannot be synthesized, rapidly dividing hematopoietic precursors cannot replicate DNA, leading to REFRACTORY MEGALOBLASTIC ANEMIA that is completely unresponsive to vitamin B12 and folate. Crucially, Hereditary Orotic Aciduria is distinguished from ORNITHINE TRANSCARBAMYLASE (OTC) DEFICIENCY (the most common urea cycle disorder, which also produces severe orotic aciduria due to carbamoyl phosphate overflow into pyrimidine synthesis) by the presence of a NORMAL SERUM AMMONIA and MEGALOBLASTIC ANEMIA (OTC deficiency causes severe life-threatening HYPERAMMONEMIA with encephalopathy, but normal blood counts). Treatment of hereditary orotic aciduria is ORAL URIDINE, which is converted to UMP by uridine kinase, bypassing the block and providing negative feedback on CPS-II to suppress orotate production."
      ],
      [
        "Ornithine transcarbamylase (OTC) in the mitochondrial urea cycle",
        "OTC deficiency causes massive orotic aciduria, but is characterized by severe hyperammonemia, respiratory alkalosis, vomiting, and lethargy, without megaloblastic anemia."
      ],
      [
        "Carbamoyl phosphate synthetase I (CPS-I) in hepatic mitochondria",
        "CPS-I deficiency causes severe hyperammonemia without orotic aciduria (because carbamoyl phosphate is not formed)."
      ],
      [
        "Dihydroorotate dehydrogenase located on the inner mitochondrial membrane",
        "Dihydroorotate dehydrogenase converts dihydroorotate to orotate (inhibited by leflunomide); its deficiency would not cause accumulation of downstream orotic acid."
      ],
      [
        "Adenosine deaminase (ADA) in the purine salvage pathway",
        "Adenosine deaminase deficiency causes Severe Combined Immunodeficiency (SCID) due to toxic dATP accumulation in lymphocytes, not orotic aciduria or isolated megaloblastic anemia."
      ]
    ],
    "shortestValidSolution": "Megaloblastic anemia refractory to B12/folate + high urine orotic acid + NORMAL ammonia = Hereditary orotic aciduria -> UMP synthase deficiency (treat with uridine).",
    "necessaryInference": "Differentiate hereditary orotic aciduria from OTC deficiency: UMP synthase deficiency causes megaloblastic anemia with normal ammonia, whereas OTC deficiency causes severe hyperammonemia without anemia.",
    "strongestDistractor": "Ornithine transcarbamylase (OTC) in the mitochondrial urea cycle",
    "distractorExclusion": "OTC deficiency shunts carbamoyl phosphate into pyrimidines, producing high orotic acid, but presents with life-threatening hyperammonemic coma, not normoammonemic megaloblastic anemia.",
    "citation": "Nyhan WL. Inborn errors of purine and pyrimidine metabolism. Mol Genet Metab. 2005;86(1-2):25-33. PMID: 16183325.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Hereditary Orotic Aciduria vs OTC Deficiency Pyrimidine Metabolism.",
      "distractorExclusionNotes": "Competitor Ornithine transcarbamylase (OTC) in the mitochondr excluded by OTC deficiency shunts carbamoyl phosphate into pyrimidines, .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0771",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Pregnancy",
    "topic": "Pudendal Nerve Course and Ischial Spine Landmark for Block",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old primigravida at 39 weeks of gestation is in the second stage of labor and is preparing for an operative vaginal delivery with vacuum extraction requiring a mediolateral episiotomy. To provide rapid, effective somatic perineal anesthesia without motor block of the lower extremities or hemodynamic instability, the obstetrician performs a transvaginal bilateral pudendal nerve block. The physician palpates an internal bony landmark transvaginally and infiltrates 10 mL of 1% lidocaine immediately posterior and inferior to this bony projection, piercing the sacrospinous ligament. Which of the following anatomical bony landmarks is used to guide the needle for this anesthetic block?",
    "choices": [
      [
        "Ischial spine",
        "The PUDENDAL NERVE arises from the anterior rami of sacral spinal nerves S2, S3, and S4. It provides primary sensory innervation to the external genitalia and perineum (inferior rectal nerve, perineal nerve, dorsal nerve of penis/clitoris) and motor innervation to the external urethral and anal sphincters and deep perineal muscles. The pudendal nerve has a complex anatomical trajectory: it exits the greater pelvis through the GREATER SCIATIC FORAMEN (inferior to the piriformis muscle), crosses over the SACROSPINOUS LIGAMENT immediately medial and posterior to the ISCHIAL SPINE, and then re-enters the lesser pelvis through the LESSER SCIATIC FORAMEN to course within the pudendal (Alcock) canal on the lateral wall of the ischioanal fossa. During vaginal delivery, a PUDENDAL NERVE BLOCK is performed transvaginally: the physician's index and middle fingers palpate the prominent ISCHIAL SPINE through the lateral vaginal fornix, and a long needle (with a Trumpet guide) is passed through the sacrospinous ligament just medial and posterior to the ischial spine to anesthetize the pudendal nerve."
      ],
      [
        "Ischial tuberosity",
        "The ischial tuberosity is the weight-bearing bony prominence of the pelvis where the hamstring muscles originate; it is lateral and inferior to the pudendal nerve."
      ],
      [
        "Pubic tubercle",
        "The pubic tubercle gives attachment to the inguinal ligament; it is far anterior to the pudendal nerve."
      ],
      [
        "Posterior superior iliac spine",
        "The posterior superior iliac spine (PSIS) is a landmark for bone marrow biopsy and lumbar puncture; it is on the posterior iliac crest, far superior to the perineum."
      ],
      [
        "Iliopectineal eminence",
        "The iliopectineal eminence marks the junction of the ilium and pubis along the pelvic brim; it is superior and anterior to the pudendal canal."
      ]
    ],
    "shortestValidSolution": "Perineal anesthesia for episiotomy = Transvaginal pudendal nerve block -> Palpate ischial spine and pierce sacrospinous ligament.",
    "necessaryInference": "Locate the anatomical landmark for a pudendal nerve block: the ischial spine guides injection through the sacrospinous ligament near the lesser sciatic notch.",
    "strongestDistractor": "Ischial tuberosity",
    "distractorExclusion": "The ischial tuberosity is an external landmark for sitting and hamstring origin; the internal transvaginal landmark is the ischial spine.",
    "citation": "Shafik A, Doss SH. Pudendal canal: surgical anatomy and clinical implications. Am Surg. 1999;65(2):176-180. PMID: 9926792.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Pudendal Nerve Course and Ischial Spine Landmark for Block.",
      "distractorExclusionNotes": "Competitor Ischial tuberosity excluded by The ischial tuberosity is an external landmark for sitting a.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0772",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "General Principles",
    "topic": "Aminoglycoside Resistance via Enzymatic Modification",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man hospitalized in the intensive care unit for ventilator-associated pneumonia develops worsening septic shock. Sputum cultures yield Pseudomonas aeruginosa. The isolate was initially susceptible to tobramycin, but repeat susceptibility testing 10 days later reveals high-level resistance to tobramycin, gentamicin, and amikacin (MIC > 64 mcg/mL). Molecular analysis of the resistant isolate demonstrates the presence of a plasmid-encoded periplasmic aminoglycoside acetyltransferase [AAC(6')]. Which of the following biochemical mechanisms directly accounts for the emergence of bacterial resistance in this clinical strain?",
    "choices": [
      [
        "Enzymatic transfer of an acetyl group to specific amino or hydroxyl residues on the periplasmic aminoglycoside molecule, preventing its binding to the 30S ribosomal subunit",
        "AMINOGLYCOSIDES (gentamicin, tobramycin, amikacin) are polycationic bactericidal antibiotics that bind the 16S rRNA of the 30S RIBOSOMAL SUBUNIT. This causes misreading of mRNA codons, premature termination of translation, and incorporation of aberrant toxic proteins into bacterial membranes. In aerobic Gram-negative bacilli (such as Pseudomonas aeruginosa and Enterobacteriaceae), the MOST COMMON AND CLINICALLY SIGNIFICANT MECHANISM OF HIGH-LEVEL RESISTANCE is bacterial synthesis of AMINOGLYCOSIDE-MODIFYING ENZYMES (AMEs). These plasmid- or transposon-encoded enzymes are located in the periplasmic space and catalyze covalent chemical modification of the aminoglycoside molecule: (1) ACETYLATION via aminoglycoside acetyltransferases (AAC), (2) ADENYLATION via nucleotidyltransferases (ANT), or (3) PHOSPHORYLATION via phosphotransferases (APH). These enzymatic modifications add bulky, charged functional groups to the antibiotic, abolishing its electrostatic affinity for the negatively charged 30S ribosomal target, preventing ribosomal binding and protein synthesis arrest."
      ],
      [
        "Point mutation in the chromosomal rpoB gene altering the beta-subunit of RNA polymerase",
        "rpoB mutations confer high-level resistance to RIFAMPIN, not aminoglycosides."
      ],
      [
        "Acquisition of the vanA gene cluster replacing terminal D-Ala-D-Ala peptidoglycan precursors with D-Ala-D-Lac",
        "Replacement of D-Ala-D-Ala with D-Ala-D-Lac is the mechanism of high-level VANCOMYCIN resistance in Enterococci (VRE)."
      ],
      [
        "Chromosomal upregulation of the MexAB-OprM multidrug efflux pump via nalC mutation",
        "Efflux pumps can contribute to multidrug resistance, but the question explicitly describes plasmid-encoded aminoglycoside acetyltransferase [AAC(6')], which mediates direct chemical modification."
      ],
      [
        "Somatic point mutation in DNA gyrase subunit A (gyrA) preventing quinolone binding",
        "gyrA mutations confer resistance to FLUOROQUINOLONES (ciprofloxacin, levofloxacin), not aminoglycosides."
      ]
    ],
    "shortestValidSolution": "High-level aminoglycoside resistance in Pseudomonas with AAC(6') = Enzymatic modification (acetylation/adenylation/phosphorylation) prevents 30S ribosomal binding.",
    "necessaryInference": "Identify bacterial aminoglycoside resistance mechanisms: periplasmic enzymatic chemical modification (acetyltransferases, phosphotransferases) prevents binding to the 30S ribosome.",
    "strongestDistractor": "Chromosomal upregulation of the MexAB-OprM multidrug efflux pump via nalC mutation",
    "distractorExclusion": "Efflux pumps reduce drug concentration, but plasmid-encoded AAC(6') represents covalent chemical modification of the drug, the primary high-level aminoglycoside resistance mechanism.",
    "citation": "Ramirez MS, Tolmasky ME. Aminoglycoside modifying enzymes. Drug Resist Updat. 2010;13(6):151-171. PMID: 20888286.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Aminoglycoside Resistance via Enzymatic Modification.",
      "distractorExclusionNotes": "Competitor Chromosomal upregulation of the MexAB-OprM multidr excluded by Efflux pumps reduce drug concentration, but plasmid-encoded .",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0773",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Dermatology",
    "topic": "Pemphigus Vulgaris vs Bullous Pemphigoid Acantholysis and Desmoglein",
    "provisionalDifficulty": 5,
    "stem": "A 46-year-old woman presents with painful, persistent oral erosions that have prevented her from eating solid food for 2 months. Over the past 2 weeks, multiple flaccid, thin-walled blisters have erupted across her scalp, face, and chest. Many blisters rupture easily under light touch, leaving raw, weeping, painful denuded erosions. Lateral mechanical pressure applied to uninvolved skin adjacent to a lesion causes the epidermis to slide and shear away from the underlying dermis (positive Nikolsky sign). Skin biopsy of an intact blister margin reveals suprabasal intraepidermal acantholysis with a preserved, intact single layer of basal keratinocytes adhering to the basement membrane ('tombstone' appearance). Direct immunofluorescence demonstrates intercellular deposition of IgG and C3 in a delicate 'net-like' or 'chicken-wire' pattern throughout the epidermis. Which of the following molecular targets is bound by the autoantibodies in this patient's disease?",
    "choices": [
      [
        "Desmoglein-3 and desmoglein-1 transmembrane cadherin proteins of epidermal desmosomes",
        "PEMPHIGUS VULGARIS (PV) is an autoimmune intraepidermal blistering disease caused by IgG autoantibodies (primarily IgG4) directed against DESMOGLEIN-3 (expressed in basal/suprabasal epidermis and mucosal epithelium) and DESMOGLEIN-1 (expressed in upper epidermis). Desmogleins are calcium-dependent cadherin transmembrane glycoproteins that form DESMOSOMES, the intercellular junctions that mechanically bridge adjacent keratinocytes. Antibody binding directly disrupts desmosomal adhesion and activates intracellular apoptotic signaling, causing keratinocytes to separate from each other\u2014a process termed ACANTHOLYSIS. Because autoantibodies target desmosomes above the basement membrane, acantholysis occurs SUPRABASALLY. The basal keratinocytes remain attached to the basement membrane via intact HEMIDESMOSOMES, creating the pathognomonic 'TOMBSTONE' appearance. Blisters are intraepidermal, thin-walled, FLACCID, and rupture easily, producing positive NIKOLSKY and Asboe-Hansen signs, with prominent MUCOSAL INVOLVEMENT. Direct immunofluorescence reveals intercellular 'CHICKEN-WIRE' IgG deposition. In contrast, BULLOUS PEMPHIGOID involves autoantibodies against HEMIDESMOSOMES (BP180/BP230), creating SUBEPIDERMAL, TENSE blisters with negative Nikolsky sign and rare mucosal involvement."
      ],
      [
        "BP180 (type XVII collagen) and BP230 dystonin of the dermoepidermal hemidesmosome complex",
        "Anti-hemidesmosome autoantibodies (BP180/BP230) cause Bullous Pemphigoid, characterized by tense, deep subepidermal blisters, negative Nikolsky sign, and linear basement membrane immunofluorescence."
      ],
      [
        "Epidermal transglutaminase (eTG) triggering subepidermal microabscesses at dermal papillae tips",
        "Anti-transglutaminase IgA antibodies cause Dermatitis Herpetiformis (associated with celiac disease), characterized by intensely pruritic vesicles on extensor surfaces."
      ],
      [
        "Type VII collagen anchoring fibrils linking the lamina densa to the papillary dermis",
        "Autoantibodies to type VII collagen cause Epidermolysis Bullosa Acquisita, characterized by mechanobullous fragility in trauma-prone areas, without flaccid acantholytic mucosal bullae."
      ],
      [
        "Alpha-6 beta-4 integrin heterodimers mediating basement membrane anchorage",
        "Anti-alpha6beta4 integrin antibodies cause cicatricial (mucous membrane) pemphigoid with severe scarring conjunctivitis, not acantholytic pemphigus vulgaris."
      ]
    ],
    "shortestValidSolution": "Flaccid blisters + oral erosions + positive Nikolsky + tombstone acantholysis + chicken-wire IgG = Pemphigus vulgaris -> Anti-desmoglein-1/3 (desmosomes).",
    "necessaryInference": "Differentiate pemphigus vulgaris (anti-desmoglein, desmosomes, intraepidermal acantholysis, flaccid bullae, positive Nikolsky) from bullous pemphigoid (anti-hemidesmosome, subepidermal, tense bullae, negative Nikolsky).",
    "strongestDistractor": "BP180 (type XVII collagen) and BP230 dystonin of the dermoepidermal hemidesmosome complex",
    "distractorExclusion": "Hemidesmosome antibodies cause bullous pemphigoid (tense blisters, negative Nikolsky); desmosome antibodies cause pemphigus vulgaris (flaccid blisters, positive Nikolsky).",
    "citation": "Stanley JR, Amagai M. Pemphigus, bullous impetigo, and the staphylococcal scalded-skin syndrome. N Engl J Med. 2006;355(17):1800-1810. PMID: 17065641.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Pemphigus Vulgaris vs Bullous Pemphigoid Acantholysis and Desmoglein.",
      "distractorExclusionNotes": "Competitor BP180 (type XVII collagen) and BP230 dystonin of t excluded by Hemidesmosome antibodies cause bullous pemphigoid (tense bli.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0774",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Endocrine",
    "topic": "Bone Remodeling RANKL-RANK Signaling and Osteoprotegerin Decoy Receptor",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old postmenopausal woman with severe osteoporosis (lumbar T-score -3.4) and a history of a fragility fracture of the distal radius is initiated on denosumab. Every 6 months, she receives a subcutaneous injection of this monoclonal antibody. Follow-up dual-energy x-ray absorptiometry (DEXA) at 18 months demonstrates a 7.2% increase in lumbar spine bone mineral density and a marked reduction in serum C-telopeptide (CTX), a biochemical marker of bone resorption. Which of the following physiological proteins does denosumab directly mimic to suppress osteoclastogenesis and prevent bone resorption?",
    "choices": [
      [
        "Osteoprotegerin (OPG) which acts as a soluble decoy receptor binding RANKL to block its interaction with RANK",
        "Bone remodeling is finely coordinated by the RANK / RANKL / OSTEOPROTEGERIN (OPG) signaling axis between osteoblasts and osteoclasts: (1) Osteoblasts and marrow stromal cells express RECEPTOR ACTIVATOR OF NUCLEAR FACTOR-KAPPA B LIGAND (RANKL) on their cell surface. (2) RANKL binds its cognate receptor, RANK, on the surface of osteoclast precursor cells and mature osteoclasts. RANK activation stimulates NF-kappa B and NFATc1 transcription factors, driving osteoclast differentiation, fusion into multinucleated mature osteoclasts, activation of ruffled borders, and suppression of osteoclast apoptosis, promoting BONE RESORPTION. (3) Osteoblasts also synthesize and secrete OSTEOPROTEGERIN (OPG). OPG is a soluble glycoprotein that acts as a PHYSIOLOGICAL DECOY RECEPTOR: it binds extracellular RANKL with high affinity, physically preventing RANKL from interacting with RANK. By sequestering RANKL, OPG suppresses osteoclast formation and decreases bone resorption. DENOSUMAB is a fully human monoclonal antibody that binds and neutralizes RANKL, functioning as a PHARMACOLOGICAL MIMIC OF OSTEOPROTEGERIN. Estrogen maintains bone mass primarily by stimulating osteoblast OPG production and downregulating RANKL; estrogen withdrawal after menopause reduces OPG, tipping the ratio in favor of RANKL-driven osteoclast bone resorption."
      ],
      [
        "Fibroblast growth factor-23 (FGF-23) which downregulates renal sodium-phosphate cotransporters",
        "FGF-23 is secreted by osteocytes to promote renal phosphate excretion; it does not block RANKL or mimic osteoprotegerin."
      ],
      [
        "Macrophage colony-stimulating factor (M-CSF) which drives monocyte differentiation",
        "M-CSF is required along with RANKL to stimulate osteoclast precursors; denosumab blocks RANKL, it does not mimic M-CSF."
      ],
      [
        "Parathyroid hormone-related peptide (PTHrP) which activates osteoblast adenylate cyclase",
        "PTHrP stimulates osteoblasts to UP-REGULATE RANKL and suppress OPG, INCREASING bone resorption (as seen in humoral hypercalcemia of malignancy)."
      ],
      [
        "Sclerostin which inhibits Wnt/beta-catenin signaling in osteoblasts",
        "Sclerostin (secreted by osteocytes) inhibits osteoblast bone formation; romosozumab is an anti-sclerostin antibody, whereas denosumab targets RANKL."
      ]
    ],
    "shortestValidSolution": "Denosumab osteoporosis mechanism = Neutralizes RANKL -> Mimics Osteoprotegerin (OPG decoy receptor) to halt osteoclastogenesis.",
    "necessaryInference": "Detail the RANK/RANKL/OPG pathway: osteoprotegerin acts as a soluble decoy receptor that binds RANKL, blocking osteoclast activation; denosumab is a pharmacological mimic of OPG.",
    "strongestDistractor": "Parathyroid hormone-related peptide (PTHrP) which activates osteoblast adenylate cyclase",
    "distractorExclusion": "PTHrP increases bone resorption by upregulating RANKL and reducing OPG; denosumab has the opposite effect, mimicking OPG to shut down resorption.",
    "citation": "Khosla S. Minireview: the OPG/RANKL/RANK system. Endocrinology. 2001;142(12):5050-5055. PMID: 11713196.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating Bone Remodeling RANKL-RANK Signaling and Osteoprotegerin Decoy Receptor.",
      "distractorExclusionNotes": "Competitor Parathyroid hormone-related peptide (PTHrP) which  excluded by PTHrP increases bone resorption by upregulating RANKL and re.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0775",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Hematology",
    "topic": "5-Fluorouracil vs Methotrexate Thymidylate Synthase Covalent Ternary Complex",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man with metastatic colorectal adenocarcinoma receives combination systemic chemotherapy with FOLFOX (folinic acid [leucovorin], 5-fluorouracil [5-FU], and oxaliplatin). During consultation, he asks about the role of folinic acid in his chemotherapy regimen. He is familiar with a family member receiving methotrexate who was given folinic acid to 'rescue' healthy cells from bone marrow toxicity. The oncologist explains that in his specific colorectal cancer protocol, folinic acid is co-administered for an entirely different pharmacological purpose. Which of the following statements correctly explains the biochemical role of folinic acid (leucovorin) when administered in combination with 5-fluorouracil?",
    "choices": [
      [
        "It provides excess 5,10-methylenetetrahydrofolate to stabilize the covalent ternary inhibitory complex between 5-FdUMP and thymidylate synthase, significantly potentiating 5-FU cytotoxicity",
        "5-FLUOROURACIL (5-FU) is a pyrimidine analog antimetabolite. It is converted intracellularly to 5-FLUORO-2'-DEOXYURIDINE-5'-MONOPHOSPHATE (5-FdUMP). 5-FdUMP acts as a false substrate that binds THYMIDYLATE SYNTHASE (TS), the rate-limiting enzyme that catalyzes the methylation of dUMP to dTMP (essential for de novo thymidine synthesis and DNA replication). For thymidylate synthase to function, it requires the cofactor 5,10-METHYLENETETRAHYDROFOLATE (CH2-THF). When 5-FdUMP binds TS in the presence of 5,10-methylenetetrahydrofolate, the fluorine atom at carbon 5 cannot be abstracted. This traps the enzyme, cofactor, and inhibitor in a STABLE, COVALENT TERNARY COMPLEX, irreversibly inactivating thymidylate synthase ('thymineless death'). FOLINIC ACID (LEUCOVORIN) is metabolized directly to 5,10-methylenetetrahydrofolate without requiring dihydrofolate reductase. By supplying supra-physiological levels of the folate cofactor, leucovorin STABILIZES AND ENHANCES TERNARY COMPLEX FORMATION, substantially ENHANCING (POTENTIATING) 5-FU cytotoxicity. Crucially, this is the exact opposite of its role with METHOTREXATE: methotrexate inhibits DIHYDROFOLATE REDUCTASE (DHFR), depleting tetrahydrofolate, and leucovorin serves as a RESCUE AGENT to replenish reduced folate downstream of DHFR to protect normal host tissues."
      ],
      [
        "It serves as a competitive substrate for dihydropyrimidine dehydrogenase (DPD) to slow 5-FU hepatic degradation",
        "Dihydropyrimidine dehydrogenase metabolizes 5-FU to inactive metabolites; leucovorin does not inhibit DPD."
      ],
      [
        "It rescues healthy gastrointestinal and bone marrow cells from 5-FU toxicity by bypassing thymidylate synthase",
        "Leucovorin rescues cells from METHOTREXATE toxicity (bypassing DHFR), but it POTENTIATES 5-FU toxicity in both tumor and host cells."
      ],
      [
        "It directly phosphorylates 5-FU into 5-FUTP to accelerate its incorporation into host ribosomal RNA",
        "5-FU incorporation into RNA is mediated by uridine phosphorylase and kinase, not leucovorin."
      ],
      [
        "It selectively inhibits ribonucleotide reductase, starving tumor cells of all deoxyribonucleotides",
        "Ribonucleotide reductase is inhibited by hydroxyurea, not folinic acid."
      ]
    ],
    "shortestValidSolution": "Leucovorin with 5-FU = Supplies 5,10-CH2-THF to potentiate ternary complex with thymidylate synthase (enhances cytotoxicity, unlike MTX rescue).",
    "necessaryInference": "Contrast leucovorin's mechanism: with methotrexate, leucovorin rescues host cells by bypassing DHFR; with 5-FU, leucovorin potentiates toxicity by stabilizing the TS-FdUMP covalent complex.",
    "strongestDistractor": "It rescues healthy gastrointestinal and bone marrow cells from 5-FU toxicity by bypassing thymidylate synthase",
    "distractorExclusion": "Leucovorin rescues host cells from methotrexate (bypassing DHFR), but potentiates and enhances 5-FU cytotoxicity by stabilizing thymidylate synthase inhibition.",
    "citation": "Longley DB, Harkin DP, Johnston PG. 5-fluorouracil: mechanisms of action and clinical strategies. Nat Rev Cancer. 2003;3(5):330-338. PMID: 12724731.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 1 basic science item evaluating 5-Fluorouracil vs Methotrexate Thymidylate Synthase Covalent Ternary Complex.",
      "distractorExclusionNotes": "Competitor It rescues healthy gastrointestinal and bone marro excluded by Leucovorin rescues host cells from methotrexate (bypassing D.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
