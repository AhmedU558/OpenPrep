import { CandidateSpec } from './types';

export const step1Batch3: CandidateSpec[] = [
  {
    code: 'op-c-s1-0051',
    exam: 'Step 1',
    subject: 'Biochemistry',
    system: 'Hematology',
    topic: 'Pyruvate Kinase Deficiency Erythrocyte Energy Failure',
    subtopic: 'Glycolytic Pathway and Hemolytic Anemia',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize chronic hemolytic anemia, splenomegaly, and echinocytes without Heinz bodies or spherocytes. Mature erythrocytes lack mitochondria and rely exclusively on glycolysis for ATP generation. Pyruvate kinase deficiency leads to failure of the Na+/K+ ATPase, loss of membrane deformability, and splenic red pulp macrophage destruction.',
    citation: 'Grace RF, et al. Pyruvate kinase deficiency. Lancet. 2018;391(10137):2272-2283. PMID: 29555416.',
    stem:
      'A 19-year-old man presents to the student health center with persistent fatigue and mild scleral icterus. He reports recurrent episodes of jaundice and dark urine during viral infections since childhood. Physical examination reveals conjunctival pallor and a palpable spleen tip 3 cm below the left costal margin. Laboratory studies demonstrate a hemoglobin of 8.9 g/dL, reticulocyte count of 8.2%, total bilirubin of 3.8 mg/dL with indirect bilirubin of 3.2 mg/dL, and elevated lactate dehydrogenase. Direct antiglobulin (Coombs) testing is negative. Peripheral blood smear reveals normocytic normochromic erythrocytes with irregularly spaced, thorny spicules across the cell membranes (echinocytes) and polychromasia, without Heinz bodies or bite cells. Hemoglobin electrophoresis is normal. Erythrocyte enzyme testing demonstrates normal glucose-6-phosphate dehydrogenase activity. Which of the following biochemical derangements is the primary pathophysiological basis for the premature destruction of this patient’s erythrocytes?',
    options: [
      {
        text: 'Failure of primary active cation transport across the erythrocyte plasma membrane',
        explanation: 'Pyruvate kinase catalyzes the conversion of phosphoenolpyruvate to pyruvate in the final step of glycolysis, generating ATP. Because mature red blood cells lack mitochondria, they depend entirely on anaerobic glycolysis for ATP. Depletion of ATP causes failure of the Na+/K+-ATPase and Ca2+-ATPase pumps, resulting in intracellular potassium loss, cellular dehydration, loss of biconcave deformability, and premature destruction within splenic red pulp cords.'
      },
      {
        text: 'Inability to maintain reduced glutathione against endogenous oxidant stress',
        explanation: 'This describes glucose-6-phosphate dehydrogenase (G6PD) deficiency, in which impaired NADPH generation through the hexose monophosphate shunt leads to oxidant-induced hemoglobin precipitation (Heinz bodies) and episodic bite cell formation, which are absent here.'
      },
      {
        text: 'Impaired cytoskeletal-plasma membrane vertical tethering by protein band 4.1',
        explanation: 'This mechanism underlies hereditary spherocytosis or hereditary elliptocytosis, caused by defects in ankyrin, band 3, spectrin, or band 4.1, leading to progressive microvesiculation, spherocyte formation, and osmotic fragility rather than echinocytes.'
      },
      {
        text: 'Defective glycosylphosphatidylinositol anchor synthesis on the clonal stem cell membrane',
        explanation: 'This describes paroxysmal nocturnal hemoglobinuria caused by somatic PIGA gene mutations, leading to absence of CD55 and CD59 and complement-mediated intravascular lysis, rather than inherited chronic extravascular hemolytic anemia.'
      },
      {
        text: 'Abnormal accumulation of intermediate metabolites within the pentose phosphate shunt',
        explanation: 'Metabolic intermediate accumulation in the pentose phosphate pathway does not cause hemolytic anemia; red cell survival depends on glycolytic ATP production and adequate reducing equivalents (NADPH).'
      }
    ]
  },
  {
    code: 'op-c-s1-0052',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Renal',
    topic: 'Alport Syndrome Type IV Collagen Basement Membrane Defect',
    subtopic: 'Glomerular Basement Membrane Ultrastructure',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Identify X-linked hematuria, family history of premature ESRD in maternal uncles, and progressive high-frequency sensorineural hearing loss. Electron microscopy reveals alternating thinning and thickening with multi-lamellation (basket-weave appearance) of the glomerular basement membrane due to COL4A5 mutations encoding the alpha-5 chain of type IV collagen.',
    citation: 'Kashtan CE. Alport syndrome: an overview of phenotype and genotype. Pediatr Nephrol. 2004;19(6):604-612. PMID: 15108034.',
    stem:
      'A 16-year-old boy is brought to the nephrology clinic due to persistent microscopic hematuria discovered during a pre-sports physical examination. He has also noticed difficulty understanding conversations in noisy classrooms over the past year. Audiometry reveals bilateral high-frequency sensorineural hearing loss. Family history is notable for a maternal uncle who developed end-stage kidney disease at age 24 and required renal transplantation. Blood pressure is 134/86 mm Hg. Urinalysis reveals 2+ protein, 3+ blood, and 15–20 dysmorphic red blood cells per high-power field, along with several red blood cell casts. Serum creatinine is 1.2 mg/dL. Renal biopsy is performed. Light microscopy demonstrates focal segmental glomerulosclerosis with interstitial foam cells. Immunofluorescence is negative for immune complexes. Which of the following ultrastructural findings on electron microscopy is most characteristic of this patient’s underlying condition?',
    options: [
      {
        text: 'Irregular thinning alternating with thickened, split lamina densa displaying a basket-weave appearance',
        explanation: 'Alport syndrome is most commonly inherited as an X-linked dominant disorder due to mutations in the COL4A5 gene encoding the alpha-5 chain of type IV collagen. Electron microscopy classically demonstrates longitudinal splitting and multi-lamellation of the lamina densa alternating with areas of membrane attenuation, creating a characteristic basket-weave appearance.'
      },
      {
        text: 'Subepithelial electron-dense deposits with intervening spike-like projections of basement membrane',
        explanation: 'Subepithelial humps and spike-and-dome projections characterize membranous nephropathy, which typically presents with nephrotic syndrome in adults without sensorineural hearing loss or X-linked inheritance.'
      },
      {
        text: 'Widespread effacement of visceral epithelial cell foot processes with normal basement membrane thickness',
        explanation: 'Diffuse podocyte foot process effacement with a structurally normal basement membrane is diagnostic of minimal change disease, which presents as steroid-responsive pure nephrotic syndrome without sensorineural hearing loss.'
      },
      {
        text: 'Marked subendothelial electron-dense deposits with circumferential mesangial cell interposition',
        explanation: 'Subendothelial immune complex deposits with mesangial interposition and double-contour tram-track duplication characterize type I membranoproliferative glomerulonephritis (MPGN).'
      },
      {
        text: 'Amorphous non-branching extracellular fibrillar deposits demonstrating apple-green birefringence',
        explanation: 'Amorphous fibrillar deposits with apple-green birefringence under polarized light after Congo red staining characterize renal amyloidosis, seen in systemic amyloidosis rather than hereditary collagenopathies.'
      }
    ]
  },
  {
    code: 'op-c-s1-0053',
    exam: 'Step 1',
    subject: 'Genetics',
    system: 'Behavioral Health',
    topic: 'Fragile X Syndrome FMR1 Trinucleotide Repeat Epigenetics',
    subtopic: 'Gene Silencing and Non-Mendelian Inheritance',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 85,
    shortestValidSolution:
      'Recognize intellectual disability, macroorchidism, long face, large everted ears, and hypermobile joints. Caused by CGG trinucleotide expansion (>200 repeats) in the 5\' untranslated region of the FMR1 gene, which triggers DNA hypermethylation of the promoter and transcriptional silencing.',
    citation: 'Hagerman RJ, et al. Fragile X syndrome. Nat Rev Dis Primers. 2017;3:17065. PMID: 28960184.',
    stem:
      'A 17-year-old male is evaluated for cognitive impairment and social anxiety. He attends special education classes and has a history of motor and speech delays. Physical examination reveals an elongated facial structure with a prominent mandible, large protruding ears, hyperflexible finger joints, and bilateral testicular volume exceeding 35 mL (normal adult: 15–25 mL). Neurological exam demonstrates repetitive motor mannerisms and gaze avoidance. Cytogenetic analysis reveals constriction near the terminal end of the long arm of the X chromosome. Molecular genetic analysis confirms an expansion of cytosine-guanine-guanine (CGG) trinucleotide repeats exceeding 230 units in the relevant gene locus. Which of the following molecular events directly causes the loss of gene product expression in this patient?',
    options: [
      {
        text: 'Cytosine hypermethylation within the gene promoter leading to transcriptional silencing',
        explanation: 'Fragile X syndrome results from an unstable CGG repeat expansion (>200 repeats, full mutation) in the 5\' untranslated region of the FMR1 gene on chromosome Xq27.3. This massive expansion leads to DNA methyltransferase-mediated hypermethylation of CpG islands in the FMR1 promoter, causing heterochromatin formation and transcriptional silencing of the fragile X mental retardation protein (FMRP).'
      },
      {
        text: 'Premature stop codon generation triggering nonsense-mediated messenger RNA decay',
        explanation: 'Trinucleotide repeats in non-coding regions (like the 5\' UTR of FMR1) do not alter the reading frame to generate premature stop codons; silencing occurs epigenetically via promoter hypermethylation.'
      },
      {
        text: 'Nuclear retention of aberrantly expanded pre-messenger RNA aggregates containing CUG repeats',
        explanation: 'Nuclear sequestration of expanded CUG repeat-containing RNA that mis-splices downstream pre-mRNAs is the toxic RNA gain-of-function mechanism characteristic of myotonic dystrophy type 1, not Fragile X syndrome.'
      },
      {
        text: 'Defective post-translational proteolytic cleavage of a membrane-anchored precursor protein',
        explanation: 'Defective precursor cleavage is seen in disorders such as Alzheimer disease (APP cleavage) or cystic fibrosis maturation defects, not in trinucleotide repeat epigenetic silencing.'
      },
      {
        text: 'Constitutive activation of a receptor tyrosine kinase via ligand-independent dimerization',
        explanation: 'Constitutive receptor tyrosine kinase activation occurs in achondroplasia (FGFR3) and various oncogenic transformations (RET, EGFR), not in Fragile X syndrome.'
      }
    ]
  },
  {
    code: 'op-c-s1-0054',
    exam: 'Step 1',
    subject: 'Immunology',
    system: 'Nervous System',
    topic: 'Guillain-Barre Syndrome Molecular Mimicry and Histopathology',
    subtopic: 'Peripheral Nerve Demyelination Mechanisms',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Identify acute ascending flaccid paralysis following a diarrheal illness (Campylobacter jejuni). Pathogenesis involves molecular mimicry between lipooligosaccharides (LOS) and peripheral nerve gangliosides (e.g., GM1/GD1a), resulting in endoneurial lymphocytic and macrophage infiltration with segmental demyelination.',
    citation: 'Willison HJ, Jacobs BC, van Doorn PA. Guillain-Barré syndrome. Lancet. 2016;388(10045):717-727. PMID: 26948435.',
    stem:
      'A 32-year-old man presents to the emergency department with progressive bilateral leg weakness and numbness that began 4 days ago and has now ascended to involve both hands and arms. Two weeks earlier, he had a self-limiting illness characterized by fever, crampy abdominal pain, and watery-to-bloody diarrhea. Neurological examination reveals symmetric 2/5 strength in the lower extremities, 3/5 strength in the upper extremities, bilateral absent patellar and Achilles reflexes, and diminished vibration sense distally. Lumbar puncture reveals a cerebrospinal fluid opening pressure of 140 mm H2O, protein level of 165 mg/dL, and a white blood cell count of 2/microL. Nerve conduction studies demonstrate markedly prolonged distal latencies, reduced conduction velocities, and conduction blocks. If a biopsy of an affected peripheral nerve root were performed, which of the following histopathological patterns would be observed?',
    options: [
      {
        text: 'Endoneurial lymphocytic infiltration and macrophage-mediated segmental demyelination',
        explanation: 'The clinical vignette describes Guillain-Barré syndrome (acute inflammatory demyelinating polyradiculoneuropathy, AIDP) following Campylobacter jejuni enteritis. Immune responses against bacterial lipooligosaccharide cross-react with peripheral nerve gangliosides (molecular mimicry), eliciting T-cell activation and recruitment of macrophages that penetrate the basement membrane of Schwann cells to strip myelin lamellae, producing segmental demyelination.'
      },
      {
        text: 'Episodic necrotizing transmural vasculitis of the epineurial arterioles with ischemic axonal loss',
        explanation: 'This describes mononeuritis multiplex secondary to systemic necrotizing vasculitis (e.g., polyarteritis nodosa), which causes asymmetric, step-wise multifocal nerve infarctions rather than symmetric ascending polyradiculoneuropathy with albuminocytologic dissociation.'
      },
      {
        text: 'Onion-bulb concentric Schwann cell lamellations surrounding severely hypertrophied nerve fascicles',
        explanation: 'Concentric Schwann cell cytoplasmic proliferation (onion-bulb formation) reflects repetitive cycles of demyelination and remyelination seen in chronic hereditary neuropathies like Charcot-Marie-Tooth disease type 1A or untreated CIDP, not acute GBS.'
      },
      {
        text: 'Subsarcolemmal accumulation of abnormal mitochondria producing ragged-red muscle fibers',
        explanation: 'Ragged-red fibers on Gomori trichrome stain reflect mitochondrial myopathies (e.g., MELAS, MERRF) characterized by proximal muscle weakness, lactic acidosis, and encephalopathy without nerve conduction block.'
      },
      {
        text: 'Extensive anterior horn motor neuron vacuolization and bunina body accumulation',
        explanation: 'Anterior horn cell degeneration with Bunina bodies is the hallmark of amyotrophic lateral sclerosis (ALS), which features combined upper and lower motor neuron signs without sensory impairment or elevated CSF protein.'
      }
    ]
  },
  {
    code: 'op-c-s1-0055',
    exam: 'Step 1',
    subject: 'Biochemistry',
    system: 'General Principles',
    topic: 'Carbon Monoxide versus Cyanide Cellular Respiration Inhibition',
    subtopic: 'Electron Transport Chain and Hemoglobin Oxygen Dynamics',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 89,
    shortestValidSolution:
      'Distinguish CO from cyanide toxicity. Both can occur in house fire smoke. In cyanide poisoning, cyanide binds ferric iron (Fe3+) in cytochrome c oxidase (complex IV), blocking ATP production without altering hemoglobin oxygen binding; thus PaO2, SaO2, and arterial O2 content are normal, but tissue extraction fails, resulting in abnormally high mixed venous PO2 and severe lactic acidosis.',
    citation: 'Hall AH, et al. Cyanide poisoning: an update on epidemiology, toxicokinetics, and medical management. Clin Toxicol. 2011;49(9):777-789. PMID: 22074360.',
    stem:
      'A 44-year-old firefighter is brought to the emergency department after being rescued from a burning industrial warehouse containing burning plastic and polyurethane materials. He was found unconscious in a smoke-filled room. Physical examination reveals an unresponsive man with flushed skin and tachypnea. Blood pressure is 85/50 mm Hg, pulse is 128/min, and respirations are 32/min. Capillary blood gas demonstrates severe metabolic acidosis with an elevated anion gap: pH 7.12, PaCO2 24 mm Hg, PaO2 96 mm Hg, and lactate 14 mmol/L (normal: < 2.0 mmol/L). Pulse oximetry displays an oxygen saturation of 98%. Co-oximetry reveals a carboxyhemoglobin fraction of 3% (normal: < 5% in non-smokers). Central venous blood gas sampled from the superior vena cava shows a central venous oxygen saturation (ScvO2) of 88% (normal: 70–75%). Which of the following describes the cellular mechanism underlying this patient’s elevated central venous oxygen saturation?',
    options: [
      {
        text: 'Inhibition of mitochondrial ferric iron in complex IV preventing tissue oxygen extraction',
        explanation: 'The patient exhibits cyanide toxicity from combustion of synthetic nitrogenous materials. Cyanide avidly binds the ferric (Fe3+) iron atom of cytochrome a3 in cytochrome c oxidase (complex IV) of the mitochondrial electron transport chain. This halts oxidative phosphorylation, forcing anaerobic glycolysis and massive lactic acidosis. Because tissues are unable to extract and utilize oxygen, systemic venous blood remains abnormally oxygenated, resulting in high mixed venous oxygen saturation.'
      },
      {
        text: 'Allosteric alteration of hemoglobin causing severe leftward shifting of the dissociation curve',
        explanation: 'A leftward shift with high-affinity trapping of oxygen occurs in carbon monoxide poisoning (via binding to ferrous Fe2+ heme), but the co-oximetry carboxyhemoglobin level is normal (3%), excluding CO as the primary driver.'
      },
      {
        text: 'Oxidation of ferrous iron to ferric iron within hemoglobin producing functional hypoxemia',
        explanation: 'Oxidation of Fe2+ to Fe3+ produces methemoglobinemia, which imparts a chocolate-brown blood appearance, pulse oximetry saturation near 85%, and elevated methemoglobin fraction on co-oximetry.'
      },
      {
        text: 'Uncoupling of oxidative phosphorylation via dissipation of the inner mitochondrial proton gradient',
        explanation: 'Chemical uncouplers (e.g., 2,4-dinitrophenol, high-dose salicylates) increase oxygen consumption and heat generation rather than preventing tissue oxygen extraction, typically resulting in low mixed venous oxygen saturation.'
      },
      {
        text: 'Direct competitive antagonism of the nicotinic acetylcholine receptor at the neuromuscular junction',
        explanation: 'Nicotinic receptor blockade causes flaccid paralysis and hypoventilation leading to respiratory acidosis and profound arterial hypoxemia, inconsistent with normal PaO2 and high ScvO2.'
      }
    ]
  },
  {
    code: 'op-c-s1-0056',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Cardiovascular',
    topic: 'Transfusion-Associated Hemosiderosis Myocardial Pathology',
    subtopic: 'Iron Overload Cardiomyopathy and Hepcidin Regulation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Identify beta-thalassemia major requiring chronic transfusions leading to secondary hemochromatosis. Iron accumulation in cardiac myocytes causes dilated or restrictive cardiomyopathy. Prussian blue staining reveals blue hemosiderin granules within the perinuclear cytoplasm of cardiac myocytes.',
    citation: 'Wood JC. Guidelines for the management of iron overload in thalassemia. Pediatr Hematol Oncol. 2014;31(4):307-316. PMID: 24707886.',
    stem:
      'A 22-year-old woman with transfusion-dependent beta-thalassemia major presents with progressive dyspnea on exertion, orthopnea, and bilateral ankle swelling. She admits to poor adherence with her subcutaneous deferoxamine chelation therapy over the past 3 years. Physical examination reveals bronze cutaneous hyperpigmentation, jugular venous distension to the angle of the jaw, an S3 gallop, and 3+ pitting lower extremity edema. Echocardiography reveals biatrial enlargement, severe left ventricular global hypokinesis, and a left ventricular ejection fraction of 28%. An endomyocardial biopsy is performed. Which of the following histopathological staining patterns on biopsy is diagnostic of this patient’s cardiomyopathy?',
    options: [
      {
        text: 'Dense intracellular accumulation of blue-staining iron granules on Prussian blue reaction',
        explanation: 'Secondary hemochromatosis (transfusion hemosiderosis) results from chronic erythrocyte transfusions exceeding the body’s iron excretion capacity. Excess free iron generates hydroxyl free radicals (Fenton reaction), causing lipid peroxidation and myocardial necrosis. Histopathologically, potassium ferrocyanide (Prussian blue) reacts with ferric iron (Fe3+) in hemosiderin to form ferric ferrocyanide, appearing as dark blue intracellular granules.'
      },
      {
        text: 'Apple-green birefringent interstitial deposits under polarized light with Congo red stain',
        explanation: 'Congo red staining with apple-green birefringence identifies cardiac amyloidosis, characterized by insoluble immunoglobulin light-chain or transthyretin fibril deposition, not iron overload.'
      },
      {
        text: 'Periodic acid-Schiff diastase-resistant cytoplasmic inclusions within adjacent vascular smooth muscle',
        explanation: 'PAS-positive, diastase-resistant globules in hepatocytes indicate alpha-1 antitrypsin deficiency; they do not characterize myocardial iron overload.'
      },
      {
        text: 'Extensive bands of interstitial collagen with myocyte disarray and hyperchromatic bizarre nuclei',
        explanation: 'Myocardial fiber disarray and bizarre hyperchromatic nuclei characterize hypertrophic cardiomyopathy (mutations in MYH7, MYBPC3), an inherited structural cardiomyopathy unrelated to transfusion.'
      },
      {
        text: 'Non-caseating granulomatous inflammation containing multinucleated Langhans-type giant cells',
        explanation: 'Non-caseating granulomas in myocardium characterize cardiac sarcoidosis, an immune-mediated disorder distinct from hemosiderin-mediated oxidative injury.'
      }
    ]
  },
  {
    code: 'op-c-s1-0057',
    exam: 'Step 1',
    subject: 'Biochemistry',
    system: 'Dermatology',
    topic: 'Hartnup Disease Neutral Amino Acid Transporter Defect',
    subtopic: 'Tryptophan Metabolism and Pellagra-Like Dermatosis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize photosensitive scaly dermatitis, intermittent cerebellar ataxia, and urinary neutral aminoaciduria (tryptophan, leucine, isoleucine) without generalized Fanconi syndrome. Hartnup disease is caused by defective SLC6A19 transporter in renal proximal tubules and enterocytes, leading to niacin deficiency because tryptophan is a precursor for NAD/NADP synthesis.',
    citation: 'Broer S. Apical neutral amino acid transport in epithelial cells. Physiol Rev. 2008;88(1):249-286. PMID: 18195088.',
    stem:
      'A 6-year-old boy is brought to the pediatric clinic due to an intermittent red, scaly, hyperpigmented rash on his face, neck, and the dorsum of both hands that consistently worsens after playing outdoors during sunny afternoons. His parents also report that he has developed unsteadiness while walking and occasional mood swings over the past several months. Neurological examination reveals broad-based gait ataxia and intentional tremor. Routine serum chemistries and complete blood count are within normal limits. Urinalysis reveals normal glucose, protein, and sediment; however, qualitative urinary chromatography reveals marked excretion of neutral amino acids (alanine, valine, isoleucine, leucine, phenylalanine, tyrosine, and tryptophan) with normal excretion of basic amino acids and proline. Symptoms dramatically improve following oral supplementation with nicotinamide. Which of the following transport mechanisms is genetically defective in this child?',
    options: [
      {
        text: 'Apical sodium-dependent neutral amino acid transporter in proximal tubular and intestinal enterocytes',
        explanation: 'Hartnup disease is an autosomal recessive disorder caused by mutations in the SLC6A19 gene encoding the B0AT1 sodium-dependent neutral amino acid transporter located on the apical brush border of proximal renal tubular cells and small intestinal enterocytes. Impaired reabsorption and absorption of tryptophan starves the kynurenine pathway, which synthesizes ~50% of the body’s nicotinamide adenine dinucleotide (NAD+/NADP+). This causes pellagra-like photosensitive rash, ataxia, and dementia, responsive to high-protein diet and nicotinamide.'
      },
      {
        text: 'Basolateral dibasic amino acid exchanger mediating cystine and arginine transport',
        explanation: 'Mutations in SLC3A1 or SLC7A9 disrupt the dibasic amino acid transporter (COLA: cystine, ornithine, lysine, arginine), causing cystinuria and recurrent hexagonal cystine kidney stones without pellagra or ataxia.'
      },
      {
        text: 'Lysosomal cystine carrier protein responsible for amino acid efflux into the cytoplasm',
        explanation: 'This describes cystinosis (CTNS gene mutation), an autosomal recessive lysosomal storage disease causing renal Fanconi syndrome, rickets, and corneal cystine crystals.'
      },
      {
        text: 'Endothelial neutral amino acid carrier mediating blood-brain barrier transport of large branch-chains',
        explanation: 'LAT1 (SLC7A5) mediates transport across the blood-brain barrier; its primary defect is not the cause of systemic neutral aminoaciduria and photosensitive pellagra-like dermatosis.'
      },
      {
        text: 'Vesicular monoamine transporter regulating catecholamine storage in presynaptic terminals',
        explanation: 'VMAT2 (SLC18A2) packaging defects lead to infantile parkinsonism, dystonia, and autonomic instability without renal aminoaciduria or photosensitivity.'
      }
    ]
  },
  {
    code: 'op-c-s1-0058',
    exam: 'Step 1',
    subject: 'Immunology',
    system: 'Hematology',
    topic: 'Paroxysmal Nocturnal Hemoglobinuria Complement Regulatory Proteins',
    subtopic: 'GPI Anchor Biosynthesis and Flow Cytometry',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Identify Coombs-negative hemolytic anemia with nocturnal dark urine and hepatic vein thrombosis (Budd-Chiari syndrome). Caused by somatic PIGA mutation in hematopoietic stem cells, preventing glycosylphosphatidylinositol (GPI) anchor synthesis and resulting in loss of decay-accelerating factor (CD55) and membrane attack complex inhibitor (CD59).',
    citation: 'Brodsky RA. Paroxysmal nocturnal hemoglobinuria. Blood. 2014;124(18):2804-2811. PMID: 25237200.',
    stem:
      'A 34-year-old woman presents to the emergency department with severe right upper quadrant abdominal pain and abdominal distension for 3 days. She reports a 6-month history of progressive fatigue and passing dark, reddish-brown urine primarily with her first morning void. Physical examination reveals scleral icterus, tender hepatomegaly, and moderate ascites. Doppler ultrasonography of the abdomen reveals acute thrombosis of the right and middle hepatic veins (Budd-Chiari syndrome). Laboratory evaluation demonstrates hemoglobin 7.6 g/dL, platelet count 92,000/microL, absolute reticulocyte count 185,000/microL, total bilirubin 4.2 mg/dL with indirect predominance, lactate dehydrogenase 1,480 U/L, and undetectable serum haptoglobin. The direct antiglobulin test is negative. Flow cytometric analysis of peripheral blood granulocytes and erythrocytes is performed. Deficiency of which of the following cell surface proteins confirms the diagnosis?',
    options: [
      {
        text: 'Glycosylphosphatidylinositol-anchored complement regulators CD55 and CD59',
        explanation: 'Paroxysmal nocturnal hemoglobinuria (PNH) is caused by an acquired somatic mutation in the X-linked PIGA gene in hematopoietic stem cells, which impairs synthesis of the glycosylphosphatidylinositol (GPI) lipid anchor. Consequently, cells lack GPI-anchored surface proteins, most notably CD55 (decay-accelerating factor, which destabilizes C3 and C5 convertases) and CD59 (membrane inhibitor of reactive lysis, which blocks C9 binding and membrane attack complex formation). Unchecked complement activation produces intravascular hemolysis and a severe prothrombotic state.'
      },
      {
        text: 'Transmembrane calcium-activated phospholipid scramblase mediating phosphatidylserine externalization',
        explanation: 'Phosphatidylserine externalization is an early marker of apoptosis and platelet procoagulant activation; its deficiency is seen in Scott syndrome (bleeding disorder), not complement-mediated hemolytic thrombosis.'
      },
      {
        text: 'Erythrocyte cytoskeletal junctional complex proteins ankyrin-1 and beta-spectrin',
        explanation: 'Ankyrin and spectrin mutations cause hereditary spherocytosis, an extravascular hemolytic anemia characterized by positive osmotic fragility and spherocytes, lacking hepatic vein thrombosis.'
      },
      {
        text: 'Endothelial cell surface thrombomodulin receptor complexes binding protein C',
        explanation: 'Thrombomodulin defects increase thrombosis risk but are not detected on flow cytometry of peripheral blood granulocytes and do not produce Coombs-negative intravascular hemolysis.'
      },
      {
        text: 'Complement receptor type 1 (CD35) responsible for circulating immune complex clearance',
        explanation: 'CD35 mediates immune complex clearance by binding C3b/C4b on erythrocytes; it is a transmembrane protein whose isolated absence does not cause PNH.'
      }
    ]
  },
  {
    code: 'op-c-s1-0059',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Nervous System',
    topic: 'Lambert-Eaton Myasthenic Syndrome Presynaptic Calcium Channel Autoantibodies',
    subtopic: 'Neuromuscular Junction Electrophysiology and Paraneoplasia',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize proximal muscle weakness that improves with exercise, hyporeflexia, autonomic dysfunction (dry mouth, erectile dysfunction), and heavy smoking history. High-frequency repetitive nerve stimulation shows an incremental response (>100% increase in CMAP). Caused by autoantibodies against presynaptic P/Q-type voltage-gated calcium channels, highly associated with small cell lung carcinoma.',
    citation: 'Titulaer MJ, et al. Lambert-Eaton myasthenic syndrome: from clinical characteristics to therapeutic strategies. Lancet Neurol. 2011;10(12):1098-1107. PMID: 22094130.',
    stem:
      'A 61-year-old man presents with a 4-month history of difficulty climbing stairs and rising from low armchairs. He also reports persistent dry mouth, reduced sweating, and new-onset erectile dysfunction. He has a 40-pack-year smoking history. Physical examination reveals 3/5 strength in the bilateral hip flexors and shoulder abductors. Deep tendon reflexes are 1+ at the patella and biceps bilaterally; however, after the patient is asked to contract his quadriceps vigorously for 10 seconds, repeat patellar reflex testing shows enhancement to 2+. Repetitive nerve stimulation at low frequency (3 Hz) demonstrates a 15% decremental compound muscle action potential (CMAP) amplitude, whereas high-frequency stimulation (30 Hz) or post-exercise testing elicits a 220% incremental increase in CMAP amplitude. A chest CT reveals a 3.5-cm hilar mass with mediastinal lymphadenopathy. Which of the following is the direct molecular target of the pathogenic autoantibodies responsible for this patient’s neuromuscular symptoms?',
    options: [
      {
        text: 'Presynaptic P/Q-type voltage-gated calcium channels impairing acetylcholine vesicle exocytosis',
        explanation: 'Lambert-Eaton myasthenic syndrome (LEMS) is a paraneoplastic autoimmune disorder most frequently associated with small cell lung cancer. IgG autoantibodies target presynaptic P/Q-type voltage-gated calcium channels, impairing calcium influx and acetylcholine packet release. High-frequency repetitive nerve stimulation causes intracellular calcium accumulation, overcoming the blockade and leading to characteristic post-exercise facilitation (incremental CMAP response).'
      },
      {
        text: 'Postsynaptic nicotinic acetylcholine receptors at the muscle motor endplate inducing complement lysis',
        explanation: 'Antibodies to postsynaptic nicotinic acetylcholine receptors cause myasthenia gravis, which presents with fatigable weakness (worsening with exercise), prominent ocular/bulbar symptoms, preserved autonomic function, and decremental response on repetitive stimulation without exercise facilitation.'
      },
      {
        text: 'Presynaptic synaptobrevin and SNAP-25 cleavage preventing SNARE complex assembly',
        explanation: 'Cleavage of SNARE proteins (synaptobrevin, SNAP-25) is the mechanism of botulinum toxin, causing acute descending flaccid paralysis with fixed dilated pupils, rather than a chronic paraneoplastic syndrome with post-exercise facilitation.'
      },
      {
        text: 'Postsynaptic muscle-specific receptor tyrosine kinase (MuSK) disrupting receptor clustering',
        explanation: 'MuSK autoantibodies cause an atypical form of myasthenia gravis with prominent facial, bulbar, and respiratory muscle involvement, without post-exercise reflex augmentation or small cell lung cancer association.'
      },
      {
        text: 'Voltage-gated potassium channels in peripheral nerve axons producing neuromyotonia',
        explanation: 'Antibodies against voltage-gated potassium channels (e.g., CASPR2, LGI1) cause Isaacs syndrome (neuromyotonia) or limbic encephalitis, presenting with continuous muscle twitching, myokymia, and hyperreflexia.'
      }
    ]
  },
  {
    code: 'op-c-s1-0060',
    exam: 'Step 1',
    subject: 'Genetics',
    system: 'Nervous System',
    topic: 'Tuberous Sclerosis Complex mTOR Pathway Hyperactivation',
    subtopic: 'Hamartin-Tuberin Tumor Suppressor Function',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Identify subependymal nodules, cortical tubers, facial angiofibromas, ash-leaf spots, and renal angiomyolipomas. Caused by loss-of-function mutations in TSC1 (hamartin) or TSC2 (tuberin), which normally form a GAP complex that hydrolyzes Rheb-GTP to Rheb-GDP. Loss of function leads to constitutive Rheb-GTP activation of mTOR complex 1 (mTORC1).',
    citation: 'Henske EP, et al. Tuberous sclerosis complex. Nat Rev Dis Primers. 2016;2:16035. PMID: 27226234.',
    stem:
      'A 9-year-old girl is brought to the clinic for evaluation of refractory focal seizures and cognitive deficits. Dermatological examination reveals multiple hypopigmented macules across her trunk that illuminate prominently under a Wood lamp, several reddish-brown papules distributed symmetrically across her cheeks and nasolabial folds (angiofibromas), and a leathery, pebbled plaque over her lumbosacral region (shagreen patch). Brain MRI demonstrates subependymal calcified nodules lining the lateral ventricles and cortical tubers. Abdominal ultrasonography reveals bilateral, well-circumscribed, echogenic cortical renal lesions composed of mature adipose tissue, smooth muscle, and thick-walled dysplastic blood vessels (angiomyolipomas). Genetic analysis reveals a loss-of-function mutation in a gene encoding a GTPase-activating protein. Constitutive activation of which of the following downstream signaling molecules directly drives tumor growth in this patient?',
    options: [
      {
        text: 'Mechanistic target of rapamycin complex 1 promoting protein translation and cell growth',
        explanation: 'Tuberous sclerosis complex is caused by loss-of-function mutations in TSC1 (hamartin) or TSC2 (tuberin). The hamartin-tuberin complex functions as a GTPase-activating protein (GAP) for Rheb (Ras homolog enriched in brain). Inactivation of this complex leaves Rheb persistently GTP-bound, which constitutively activates mTOR complex 1 (mTORC1), driving uncontrolled protein synthesis, cell proliferation, and hamartoma formation. Everolimus/sirolimus (mTOR inhibitors) are used clinically to shrink these lesions.'
      },
      {
        text: 'Hypoxia-inducible factor 1-alpha leading to overexpression of vascular endothelial growth factor',
        explanation: 'HIF-1alpha stabilization occurs when the von Hippel-Lindau (VHL) ubiquitin ligase is mutated, leading to clear cell renal cell carcinomas, pheochromocytomas, and hemangioblastomas, not tuberous sclerosis.'
      },
      {
        text: 'Constitutive sonic hedgehog signaling driving basal cell proliferation',
        explanation: 'Aberrant Sonic hedgehog signaling due to PTCH1 mutations causes Gorlin syndrome (nevoid basal cell carcinoma syndrome), characterized by multiple basal cell carcinomas and odontogenic keratocysts.'
      },
      {
        text: 'Cyclin-dependent kinase 4 hyperactivation secondary to loss of CDKN2A tumor suppression',
        explanation: 'Loss of CDKN2A (p16) dysregulates CDK4/6-mediated Rb phosphorylation, predisposing to familial melanoma and pancreatic adenocarcinoma, not tuberous hamartomas.'
      },
      {
        text: 'Nuclear factor-kappa B nuclear translocation driven by RET proto-oncogene activation',
        explanation: 'RET proto-oncogene gain-of-function drives MEN 2A/2B and medullary thyroid carcinoma through MAPK and PI3K/Akt signaling, not hamartin/tuberin-related benign hamartomatosis.'
      }
    ]
  },
  {
    code: 'op-c-s1-0061',
    exam: 'Step 1',
    subject: 'Microbiology',
    system: 'Nervous System',
    topic: 'Cryptococcus Neoformans Polysaccharide Capsule Virulence',
    subtopic: 'Fungal Meningoencephalitis in Immunocompromised Host',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize subacute headache, fever, and confusion in an HIV patient with CD4 < 100/microL. CSF shows high opening pressure and narrow-based budding yeast. Mucicarmine or India ink highlights the thick glucuronoxylomannan polysaccharide capsule, which inhibits phagocytosis.',
    citation: 'Rajasingham R, et al. Global burden of disease of HIV-associated cryptococcal meningitis: an updated analysis. Lancet Infect Dis. 2017;17(8):873-881. PMID: 28483415.',
    stem:
      'A 38-year-old man with advanced HIV infection (CD4+ T-cell count: 42/microL) presents to the emergency department with a 2-week history of progressively worsening headache, low-grade fevers, malaise, and intermittent nausea. Neurological examination reveals mild neck stiffness and bilateral papilledema without focal motor deficits. Lumbar puncture is performed, revealing an opening pressure of 290 mm H2O (normal: 80–200 mm H2O). Analysis of the cerebrospinal fluid (CSF) reveals clear fluid with a protein concentration of 110 mg/dL, glucose of 30 mg/dL (concurrent serum glucose: 105 mg/dL), and a leukocyte count of 75/microL with 92% lymphocytes. An India ink preparation of the CSF reveals round-to-oval budding yeast cells surrounded by wide, clear halos that stain bright red with mucicarmine. Which of the following virulence factors possessed by this organism is primarily responsible for preventing alveolar macrophage phagocytosis during initial inhalation?',
    options: [
      {
        text: 'Thick antiphagocytic capsule composed primarily of glucuronoxylomannan',
        explanation: 'Cryptococcus neoformans is an encapsulated, opportunistic yeast acquired via inhalation of pigeon guano. Its major virulence factor is an extensive polysaccharide capsule composed predominantly of glucuronoxylomannan (GXM). The capsule is negatively charged and antiphagocytic, shielding cell-wall pathogen-associated molecular patterns from macrophage pattern-recognition receptors and inhibiting leukocyte migration and complement activation.'
      },
      {
        text: 'Extracellular cord factor trehalose 6,6-dimycolate inducing serpentine growth',
        explanation: 'Trehalose 6,6-dimycolate (cord factor) is a glycolipid virulence factor of Mycobacterium tuberculosis that inhibits phagolysosomal fusion and induces TNF-alpha release, not a fungal capsule.'
      },
      {
        text: 'Filamentous hemagglutinin and pertactin promoting respiratory ciliary adhesion',
        explanation: 'Filamentous hemagglutinin and pertactin are surface adhesins of Bordetella pertussis that mediate adherence to ciliated respiratory epithelial cells, not opportunistic yeast pathogens.'
      },
      {
        text: 'Thermotolerant dimorphic conversion from mycelial mold to intracellular yeast',
        explanation: 'While endemic fungi (Histoplasma, Blastomyces, Coccidioides) exhibit thermal dimorphism (mold in environment, yeast in tissue), Cryptococcus exists solely as an encapsulated yeast in both nature and host tissues (monomorphic).'
      },
      {
        text: 'Cell surface lipophosphoglycan inhibiting phagolysosome maturation in histiocytes',
        explanation: 'Lipophosphoglycan (LPG) and gp63 protect the protozoan parasite Leishmania within macrophage phagolysosomes, not fungal yeast cells.'
      }
    ]
  },
  {
    code: 'op-c-s1-0062',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Respiratory',
    topic: 'Alpha-1 Antitrypsin Deficiency Hepatic Misfolding and Emphysema',
    subtopic: 'Endoplasmic Reticulum Polymerization and Panacinar Destruction',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize early-onset lower lobe panacinar emphysema in a young non-smoker with hepatic dysfunction. Caused by Glu342Lys mutation in SERPINA1 (PiZZ genotype), producing misfolded AAT that polymerizes and accumulates in the endoplasmic reticulum of hepatocytes (PAS-positive diastase-resistant globules), leading to low circulating levels and uninhibited neutrophil elastase destruction of lower lung acini.',
    citation: 'Stoller JK, Aboussouan LS. A review of alpha1-antitrypsin deficiency. Am J Respir Crit Care Med. 2012;185(3):246-259. PMID: 21960536.',
    stem:
      'A 35-year-old man presents to the pulmonary clinic with a 9-month history of progressive shortness of breath during exertion and a chronic, non-productive cough. He has never smoked cigarettes and has no known occupational toxic exposures. Physical examination reveals decreased breath sounds bilaterally and prolonged expiratory phase, along with mild scleral icterus. Serum alanine aminotransferase (ALT) is 68 U/L and aspartate aminotransferase (AST) is 62 U/L. Pulmonary function testing reveals a reduced FEV1/FVC ratio (0.54) with marked reduction in diffusing capacity for carbon monoxide (DLCO). High-resolution chest CT demonstrates bilateral, diffuse panacinar emphysema with severe basilar predominance. A percutaneous liver biopsy is obtained. Light microscopy reveals round, eosinophilic cytoplasmic inclusions within periportal hepatocytes that stain brightly with periodic acid-Schiff (PAS) and persist following treatment with diastase. Which of the following cellular processes directly causes the hepatic accumulation of this protein?',
    options: [
      {
        text: 'Misfolded glycoprotein loop-sheet polymerization within the rough endoplasmic reticulum',
        explanation: 'Alpha-1 antitrypsin (AAT) deficiency (most commonly homozygous PiZZ, due to a Glu342Lys mutation) results in conformational alteration of the serpin protein. The reactive loop of one molecule inserts into the beta-sheet of another, creating insoluble polymers that cannot be processed through the Golgi and become trapped within the rough endoplasmic reticulum of hepatocytes. This manifests as PAS-positive, diastase-resistant globules. The systemic absence of circulating AAT permits unopposed neutrophil elastase degradation of alveolar elastin, causing panacinar emphysema.'
      },
      {
        text: 'Lysosomal accumulation of unesterified cholesterol due to defective lipid export',
        explanation: 'Lysosomal accumulation of unesterified cholesterol and sphingomyelin occurs in Niemann-Pick disease type C (NPC1/NPC2 mutations), leading to hepatosplenomegaly and vertical supranuclear gaze palsy.'
      },
      {
        text: 'Peroxisomal enzyme deficiency preventing very long-chain fatty acid beta-oxidation',
        explanation: 'Defective peroxisomal beta-oxidation of very long-chain fatty acids characterizes X-linked adrenoleukodystrophy (ABCD1 mutation) or Zellweger syndrome, not serpin-associated emphysema.'
      },
      {
        text: 'Impaired copper-transporting P-type ATPase failure of biliary excretion',
        explanation: 'Defective ATP7B P-type ATPase causes copper accumulation in hepatocytes and basal ganglia in Wilson disease, which is identified by rhodanine or copper stains, not PAS diastase-resistant inclusions.'
      },
      {
        text: 'Autoimmune lysosomal enzymatic degradation within Kupffer cell phagosomes',
        explanation: 'Kupffer cells are resident hepatic macrophages that clear debris and pathogens; AAT polymers accumulate specifically within the endoplasmic reticulum of hepatocytes, not Kupffer lysosomes.'
      }
    ]
  },
  {
    code: 'op-c-s1-0063',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Hematology',
    topic: 'Warfarin-Induced Skin Necrosis Protein C Degradation Kinetics',
    subtopic: 'Anticoagulant Dynamics and Microvascular Thrombosis',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 89,
    shortestValidSolution:
      'Identify acute necrotic skin lesions on the breasts/thighs within 2-5 days of initiating warfarin without heparin bridging, especially in a patient with underlying protein C deficiency. Protein C has a very short half-life (~6-8 hours) compared to factors II (prothrombin ~60-72 hrs) and X (~40 hrs), producing a transient procoagulant window where clotting factors remain active while endogenous anticoagulant protein C is depleted.',
    citation: 'Nazarian RM, et al. Warfarin-induced skin necrosis. J Am Acad Dermatol. 2009;61(2):325-332. PMID: 19615543.',
    stem:
      'A 42-year-old woman is admitted to the hospital with acute deep venous thrombosis of the left femoral vein. She is started on high-dose oral warfarin therapy without concurrent parenteral anticoagulation. On hospital day 3, she develops severe pain and dark violaceous, demarcated, purpuric plaques over her breasts, thighs, and buttocks. Over the next 24 hours, the lesions rapidly evolve into large bullae followed by central cutaneous necrosis and eschar formation. Coagulation profile reveals a prothrombin time (PT) of 18 seconds (INR 1.8) and an activated partial thromboplastin time (aPTT) of 34 seconds. Punch biopsy of the purpuric margin demonstrates widespread microthrombi within superficial and deep dermal venules and capillaries, accompanied by extensive hemorrhagic infarction of the overlying epidermis and subcutis, without significant vasculitic inflammation. Which of the following physiological principles explains the development of microvascular thrombosis in this patient?',
    options: [
      {
        text: 'Rapid clearance of protein C due to its markedly shorter half-life relative to factors II and X',
        explanation: 'Warfarin inhibits vitamin K epoxide reductase (VKORC1), blocking gamma-carboxylation of clotting factors II, VII, IX, X and natural anticoagulant proteins C and S. Protein C has a very short biological half-life (~6 to 8 hours), comparable to factor VII (~6 hours), whereas factor X (~40 hours) and prothrombin (factor II, ~60–72 hours) have much longer half-lives. During the first 48–72 hours of unbridged warfarin therapy, protein C activity plummets while procoagulant factors II and X remain fully active, creating a transient, paradoxically hypercoagulable state that precipitates microvascular dermal thrombosis.'
      },
      {
        text: 'Immune-complex mediated activation of platelet factor 4 causing widespread consumptive coagulopathy',
        explanation: 'This describes heparin-induced thrombocytopenia (HIT), an IgG-mediated reaction against PF4-heparin complexes causing venous and arterial thrombosis; this patient received warfarin monotherapy, not heparin.'
      },
      {
        text: 'Direct toxic endothelial cell detachment caused by high supratherapeutic peak drug concentrations',
        explanation: 'Warfarin does not exert direct cytotoxic or necrotizing effects on endothelial cells; the skin necrosis is entirely microthrombotic in nature due to transient coagulation imbalance.'
      },
      {
        text: 'Inhibition of antithrombin-mediated neutralization of activated factor X and thrombin',
        explanation: 'Antithrombin neutralizes factor Xa and thrombin and is potentiated by heparin; warfarin acts on vitamin K-dependent synthesis and does not inhibit antithrombin.'
      },
      {
        text: 'Selective blockade of tissue factor pathway inhibitor synthesis in dermal capillary beds',
        explanation: 'Tissue factor pathway inhibitor (TFPI) is synthesized by endothelial cells independent of vitamin K carboxylation; its regulation is unaffected by warfarin.'
      }
    ]
  },
  {
    code: 'op-c-s1-0064',
    exam: 'Step 1',
    subject: 'Genetics',
    system: 'Endocrine',
    topic: 'Multiple Endocrine Neoplasia Type 2 RET Receptor Tyrosine Kinase',
    subtopic: 'Proto-Oncogene Gain of Function and Neural Crest Tumors',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Identify medullary thyroid carcinoma (calcitonin-secreting parafollicular C cells) and pheochromocytoma (chromaffin cells). Both derive from the neural crest. Caused by gain-of-function germline mutations in the RET proto-oncogene, which encodes a receptor tyrosine kinase.',
    citation: 'Wells SA Jr, et al. Revised American Thyroid Association guidelines for the management of medullary thyroid carcinoma. Thyroid. 2015;25(6):567-610. PMID: 25810047.',
    stem:
      'A 29-year-old woman presents to the clinic with episodic palpitations, diaphoresis, and pounding headaches. Her blood pressure is 185/110 mm Hg and heart rate is 112/min. Physical examination reveals a non-tender, firm nodule in the left lobe of the thyroid gland. Twenty-four-hour urinary excretion of metanephrines and normetanephrines is markedly elevated. Serum calcium is 11.2 mg/dL (normal: 8.5–10.5 mg/dL) and intact parathyroid hormone is elevated at 98 pg/mL (normal: 15–65 pg/mL). Fine-needle aspiration biopsy of the thyroid nodule demonstrates round-to-polygonal cells arranged in nests surrounded by amorphous, acellular stroma that stains positively with Congo red and shows apple-green birefringence under polarized light. Genetic counseling identifies a familial germline missense mutation. Which of the following best describes the protein class and signaling mechanism of the mutated gene product?',
    options: [
      {
        text: 'Receptor tyrosine kinase exhibiting ligand-independent constitutive phosphorylation',
        explanation: 'This patient has multiple endocrine neoplasia type 2A (MEN 2A), characterized by medullary thyroid carcinoma (calcitonin/amyloid-producing C cells), pheochromocytoma, and primary hyperparathyroidism. MEN 2A is caused by germline gain-of-function missense mutations in the RET proto-oncogene on chromosome 10q11.2. RET encodes a cell-surface receptor tyrosine kinase whose mutation results in ligand-independent receptor dimerization, autophosphorylation, and constitutive downstream signaling (via MAPK and PI3K/Akt pathways).'
      },
      {
        text: 'G-protein coupled receptor alpha subunit exhibiting impaired GTPase catalytic activity',
        explanation: 'Activating mutations in GNAS1 (Gs-alpha subunit) impairing GTPase activity cause McCune-Albright syndrome, manifesting with precocious puberty, café-au-lait spots, and polyostotic fibrous dysplasia.'
      },
      {
        text: 'Nuclear hormone receptor transcription factor regulating lipid and glucose metabolism',
        explanation: 'Nuclear receptors (e.g., PPAR-gamma, thyroid hormone receptor) act as ligand-activated transcription factors, not proto-oncogenic cell-surface tyrosine kinases linked to MEN 2.'
      },
      {
        text: 'Tumor suppressor scaffold protein regulating Menin-mediated histone methylation',
        explanation: 'The MEN1 gene on chromosome 11q13 encodes menin, a tumor suppressor involved in transcriptional regulation whose loss of function causes MEN 1 (parathyroid, pituitary, and pancreatic neuroendocrine tumors).'
      },
      {
        text: 'Dual-specificity phosphatase terminating downstream mitogen-activated protein kinase cascades',
        explanation: 'DUSP phosphatases dephosphorylate MAPKs to attenuate signaling; RET is the upstream kinase driver, not a negative regulator phosphatase.'
      }
    ]
  },
  {
    code: 'op-c-s1-0065',
    exam: 'Step 1',
    subject: 'Immunology',
    system: 'General Principles',
    topic: 'Hyper-IgM Syndrome CD40 Ligand Class-Switch Recombination',
    subtopic: 'T-B Lymphocyte Interaction and Germinal Center Defect',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize recurrent sinopulmonary bacterial infections and opportunistic infections (Pneumocystis jirovecii, Cryptosporidium) in a male infant. Serum shows markedly low IgG, IgA, and IgE, with elevated or normal IgM. Caused by X-linked CD40L (CD154) deficiency on activated CD4+ T helper cells, preventing B-cell class-switch recombination and somatic hypermutation in germinal centers.',
    citation: 'Davies EG, Thrasher AJ. Update on the hyper immunoglobulin M syndromes. Br J Haematol. 2010;149(2):167-180. PMID: 20201948.',
    stem:
      'A 14-month-old boy is admitted to the hospital with severe respiratory distress, hypoxia, and fever. Chest radiography reveals bilateral diffuse ground-glass infiltrates, and bronchoalveolar lavage demonstrates cyst forms of Pneumocystis jirovecii. Medical history is notable for three prior episodes of Streptococcus pneumoniae otitis media and persistent watery diarrhea associated with Cryptosporidium parvum. Physical examination reveals tonsillar hypoplasia and absent palpable peripheral lymph nodes. Laboratory studies reveal: total white blood cell count 6,800/microL with absolute neutrophil count 800/microL, serum IgG 45 mg/dL (normal: 350–1,200 mg/dL), serum IgA 8 mg/dL (normal: 20–100 mg/dL), serum IgE < 2 IU/mL (normal: 10–60 IU/mL), and serum IgM 380 mg/dL (normal: 30–120 mg/dL). Peripheral blood flow cytometry demonstrates normal numbers of circulating CD19+ B cells and CD3+ T cells. Which of the following molecular interactions is defective in this child?',
    options: [
      {
        text: 'CD154 on activated T helper lymphocytes binding CD40 on antigen-primed B lymphocytes',
        explanation: 'Hyper-IgM syndrome is most commonly an X-linked recessive immunodeficiency caused by mutations in the CD40L (CD154) gene expressed on activated CD4+ T cells. Interaction of CD40L with CD40 on B cells is required for activation of activation-induced cytidine deaminase (AID), driving immunoglobulin class-switch recombination and germinal center maturation. Without CD40-CD40L costimulation, B cells cannot switch from IgM to IgG, IgA, or IgE. Impaired CD40L-CD40 macrophage interaction also impairs cell-mediated immunity against intracellular and opportunistic organisms (Pneumocystis, Cryptosporidium).'
      },
      {
        text: 'Interleukin-2 receptor gamma chain binding common cytokine signaling subunits',
        explanation: 'Mutations in the common gamma chain (IL2RG) cause X-linked severe combined immunodeficiency (SCID), characterized by absence of T cells and NK cells (T- B+ NK- phenotype), rather than normal T and B cell numbers with isolated class-switching failure.'
      },
      {
        text: 'Bruton tyrosine kinase signaling downstream of the pre-B cell receptor complex',
        explanation: 'X-linked agammaglobulinemia (BTK mutation) arrests B-cell development in the bone marrow, resulting in virtually absent circulating CD19+ B cells and profound deficiency of all immunoglobulin isotypes, including IgM.'
      },
      {
        text: 'Fas receptor (CD95) trimerization inducing caspase-mediated lymphocyte apoptosis',
        explanation: 'Defective Fas/FasL apoptosis causes autoimmune lymphoproliferative syndrome (ALPS), characterized by massive non-malignant lymphadenopathy, splenomegaly, and autoimmune cytopenias, rather than hypogammaglobulinemia.'
      },
      {
        text: 'Major histocompatibility complex class II transactivator (CIITA) driving HLA-DP/DQ/DR expression',
        explanation: 'Mutations in CIITA cause Bare Lymphocyte Syndrome type II (MHC class II deficiency), producing severe CD4+ T-cell lymphopenia and combined immunodeficiency.'
      }
    ]
  },
  {
    code: 'op-c-s1-0066',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Renal',
    topic: 'Lithium-Induced Nephrogenic Diabetes Insipidus ENaC Uptake',
    subtopic: 'Principal Cell Intracellular Signaling and Aquaporin Regulation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Identify polyuria, polydipsia, hypernatremia, and dilute urine unresponsive to desmopressin in a patient taking lithium for bipolar disorder. Lithium enters collecting duct principal cells via the epithelial sodium channel (ENaC), inhibiting glycogen synthase kinase 3beta (GSK3beta) and downregulating vasopressin-induced aquaporin-2 gene expression and translocation. Amiloride treats this by competitively blocking ENaC.',
    citation: 'Bao H, et al. Lithium-induced nephrogenic diabetes insipidus. Am J Physiol Renal Physiol. 2012;302(6):F631-F638. PMID: 22189947.',
    stem:
      'A 48-year-old man with bipolar I disorder maintained on chronic lithium carbonate therapy for 12 years presents with persistent polyuria (voiding 6–8 liters daily) and unquenchable thirst. He wakes 4–5 times per night to urinate and drink water. Physical examination reveals dry oral mucosa and decreased skin turgor. Laboratory evaluation reveals: serum sodium 152 mEq/L, serum potassium 4.1 mEq/L, serum creatinine 1.4 mg/dL, serum lithium level 0.9 mEq/L (therapeutic range: 0.6–1.2 mEq/L), serum osmolality 315 mOsm/kg H2O, and urine osmolality 145 mOsm/kg H2O. Following administration of 2 mcg of subcutaneous desmopressin (dDAVP), repeat urine osmolality at 2 hours is 155 mOsm/kg H2O. Which of the following represents the molecular mechanism by which this patient’s psychiatric medication causes his renal tubular defect?',
    options: [
      {
        text: 'Entry via epithelial sodium channels with intracellular inhibition of glycogen synthase kinase 3beta',
        explanation: 'Lithium freely passes through apical epithelial sodium channels (ENaC) into medullary collecting duct principal cells, where it accumulates because it cannot be extruded efficiently by the basolateral Na+/K+-ATPase. Intracellular lithium inhibits glycogen synthase kinase 3beta (GSK3beta) and adenylyl cyclase, impairing cAMP generation downstream of V2 vasopressin receptors. This reduces aquaporin-2 synthesis and vesicular apical membrane insertion, rendering collecting ducts impermeable to water (nephrogenic DI). Amiloride blocks ENaC, preventing lithium entry.'
      },
      {
        text: 'Direct competitive antagonism of the basolateral vasopressin V2 receptor binding pocket',
        explanation: 'Lithium does not function as a competitive receptor antagonist at the V2 receptor binding pocket (which is the mechanism of vaptans like tolvaptan); rather, it enters the cell and disrupts intracellular signaling cascades.'
      },
      {
        text: 'Selective destruction of the central hypothalamic osmoreceptors in the organum vasculosum',
        explanation: 'Hypothalamic osmoreceptor destruction causes central diabetes insipidus, which responds dramatically to desmopressin administration with a >50% increase in urine osmolality, unlike this patient’s fixed dilute urine.'
      },
      {
        text: 'Osmotic diuresis induced by excessive excretion of unabsorbed lithium salts in the loop of Henle',
        explanation: 'Lithium concentrations in tubular fluid are millimolar and completely insufficient to generate significant osmotic force; polyuria is purely water diuresis from collecting duct water impermeability.'
      },
      {
        text: 'Blockade of the sodium-potassium-2-chloride cotransporter in the thick ascending limb',
        explanation: 'NKCC2 blockade is the mechanism of loop diuretics (furosemide), which impairs corticomedullary gradient creation but does not specifically cause refractory vasopressin-resistant water diuresis.'
      }
    ]
  },
  {
    code: 'op-c-s1-0067',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Gastrointestinal',
    topic: 'Celiac Disease Duodenal Histopathology and Transglutaminase',
    subtopic: 'HLA-DQ2/DQ8 Presentation and Deamidated Gliadin Peptides',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 86,
    shortestValidSolution:
      'Recognize chronic diarrhea, weight loss, iron deficiency anemia, and dermatitis herpetiformis. Duodenal biopsy demonstrates intraepithelial lymphocytosis, crypt hyperplasia, and villous atrophy. Tissue transglutaminase deamidates dietary gliadin, creating negatively charged peptides that bind HLA-DQ2/DQ8 on antigen-presenting cells with high affinity.',
    citation: 'Lebwohl B, et al. Celiac disease. Lancet. 2018;391(10115):70-81. PMID: 28760445.',
    stem:
      'A 31-year-old woman presents to the gastroenterology clinic with an 8-month history of foul-smelling, bulky stools that float in the toilet bowl, accompanied by a 6-kg unintentional weight loss and generalized fatigue. She also has an intensely pruritic rash consisting of clustered vesicles on her elbows and knees. Laboratory evaluation reveals a microcytic anemia (hemoglobin: 9.8 g/dL, MCV: 72 fL), low serum ferritin, and low serum 25-hydroxyvitamin D. Esophagogastroduodenoscopy is performed, revealing scalloping and blunting of duodenal mucosal folds. Microscopic examination of duodenal mucosal biopsies demonstrates marked intraepithelial CD8+ T-lymphocytosis (>25 lymphocytes per 100 enterocytes), crypt elongation and hyperplasia, and diffuse blunting and flattening of intestinal villi. Which of the following biochemical modifications by an endogenous enzyme is essential for triggering this patient’s mucosal inflammatory response?',
    options: [
      {
        text: 'Deamidation of glutamine residues in dietary gliadin by tissue transglutaminase',
        explanation: 'Celiac disease is an immune-mediated enteropathy triggered by ingestion of gluten in genetically susceptible individuals carrying HLA-DQ2 or HLA-DQ8. In the lamina propria, tissue transglutaminase (tTG) deamidates neutral glutamine residues in gliadin peptides into negatively charged glutamic acid. These negatively charged deamidated gliadin peptides fit into the positively charged peptide-binding groove of HLA-DQ2/DQ8 molecules on dendritic cells, triggering robust CD4+ T helper cell activation, interferon-gamma secretion, and mucosal destruction.'
      },
      {
        text: 'Phosphorylation of serine residues in dietary casein by brush-border alkaline phosphatase',
        explanation: 'Casein phosphorylation is not involved in celiac pathogenesis; brush-border alkaline phosphatase hydrolyzes monophosphate esters and does not mediate gluten antigenicity.'
      },
      {
        text: 'Hydrolysis of terminal galactose-beta-1,4-glucose glycosidic bonds by mucosal lactase',
        explanation: 'Deficiency of lactase causes osmotic diarrhea and flatulence due to unabsorbed lactose fermentation by colonic bacteria, with completely normal duodenal biopsy architecture.'
      },
      {
        text: 'Enteropeptidase-mediated cleavage of trypsinogen into active proteolytic trypsin',
        explanation: 'Enteropeptidase is required for pancreatic zymogen activation; its deficiency causes generalized protein malabsorption and edema (kwashiorkor-like state), not celiac sprue.'
      },
      {
        text: 'Sulfation of mucosal mucin polysaccharides by Golgi-resident sulfotransferases',
        explanation: 'Mucin sulfation maintains protective mucus layer viscoelasticity; it is not the enzymatic trigger for gluten-induced enterocyte apoptosis.'
      }
    ]
  },
  {
    code: 'op-c-s1-0068',
    exam: 'Step 1',
    subject: 'Genetics',
    system: 'Nervous System',
    topic: 'Ataxia-Telangiectasia DNA Double-Strand Break Repair Defect',
    subtopic: 'ATM Kinase Signaling and Radiosensitivity',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 89,
    shortestValidSolution:
      'Recognize progressive cerebellar ataxia in early childhood, conjunctival and cutaneous telangiectasias, recurrent sinopulmonary infections (IgA deficiency), elevated serum alpha-fetoprotein (AFP), and high sensitivity to ionizing radiation. Caused by mutations in the ATM gene, which encodes a serine/threonine kinase essential for detecting double-strand DNA breaks and coordinating non-homologous end joining (NHEJ) and homologous recombination.',
    citation: 'Rothblum-Oviatt C, et al. Ataxia telangiectasia: a review. Orphanet J Rare Dis. 2016;11(1):159. PMID: 27884168.',
    stem:
      'A 5-year-old boy is brought to the pediatric neurology clinic due to worsening coordination problems. His parents noted that he began walking late at 18 months, and his gait has become increasingly wobbly and unsteady over the past 2 years. He has had four episodes of severe bacterial pneumonia requiring hospitalization. Physical examination reveals marked truncal and limb ataxia, slurred scanning speech, and prominent branching, dilated capillary loops across his bulbar conjunctivae and the pinnas of both ears. Laboratory evaluation demonstrates marked elevation of serum alpha-fetoprotein (AFP: 142 ng/mL, normal: < 10 ng/mL) and profound deficiency of serum IgA and IgE. Cultured peripheral blood lymphocytes exposed to low-dose ionizing radiation in vitro exhibit extensive chromosomal breakages, chromatid exchanges, and fail to arrest at the G1/S cell cycle checkpoint. The protein absent in this child normally functions as which of the following?',
    options: [
      {
        text: 'A serine/threonine protein kinase coordinating cellular responses to DNA double-strand breaks',
        explanation: 'Ataxia-telangiectasia is an autosomal recessive disorder caused by mutations in the ATM gene on chromosome 11q22. ATM encodes a large serine/threonine kinase that senses DNA double-strand breaks induced by ionizing radiation or oxidative stress. Upon activation, ATM phosphorylates p53, Chk2, and BRCA1 to arrest the cell cycle at G1/S for repair or induce apoptosis. Defective ATM leads to defective non-homologous end joining, profound radiation sensitivity, progressive cerebellar Purkinje cell degeneration (ataxia), oculocutaneous telangiectasias, immunodeficiency, and lymphoid malignancy risk.'
      },
      {
        text: 'A transcription-coupled nucleotide excision repair endonuclease resolving thymine dimers',
        explanation: 'Nucleotide excision repair defects (mutations in XPA through XPG) cause xeroderma pigmentosum, characterized by extreme photosensitivity, dry parchment-like skin, and high risk of cutaneous ultraviolet-induced skin cancers.'
      },
      {
        text: 'A mismatch repair protein recognizing single base-pair insertion-deletion loops',
        explanation: 'DNA mismatch repair defects (MSH2, MLH1, MSH6, PMS2) cause Lynch syndrome (hereditary nonpolyposis colorectal cancer) with microsatellite instability, without cerebellar ataxia or telangiectasias.'
      },
      {
        text: 'A nuclear helicase resolving complex secondary structures during DNA replication fork progression',
        explanation: 'RecQ DNA helicase mutations cause Bloom syndrome (BLM) or Werner syndrome (WRN), presenting with dwarfism, photosensitive butterfly rash, or premature aging, not elevated AFP with cerebellar ataxia.'
      },
      {
        text: 'A microbicidal nicotinamide adenine dinucleotide phosphate oxidase subunit in phagolysosomes',
        explanation: 'Defects in NADPH oxidase subunits cause chronic granulomatous disease (CGD), presenting with recurrent catalase-positive bacterial and fungal granulomas without telangiectasias or elevated AFP.'
      }
    ]
  },
  {
    code: 'op-c-s1-0069',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'General Principles',
    topic: 'Methotrexate and Leucovorin Biochemical Rescue Mechanism',
    subtopic: 'Tetrahydrofolate Depletion and Pyrimidine Synthesis Blockade',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize high-dose methotrexate toxicity (mucositis, myelosuppression, acute kidney injury). MTX competitively inhibits dihydrofolate reductase (DHFR). Leucovorin (folinic acid / N5-formyl-THF) rescues normal cells because it is converted directly to tetrahydrofolate without requiring DHFR, bypassing the blocked enzymatic step.',
    citation: 'Howard SC, et al. Preventing and managing toxicities of high-dose methotrexate. Oncologist. 2016;21(12):1471-1482. PMID: 27511905.',
    stem:
      'A 17-year-old male with high-grade osteosarcoma of the distal femur receives an adjuvant chemotherapy regimen that includes high-dose intravenous methotrexate (12 g/m2) with aggressive intravenous hydration and urinary alkalinization. Twenty-four hours following completion of the infusion, routine serum monitoring reveals a delayed methotrexate clearance level of 18 micromol/L. To prevent lethal bone marrow suppression and gastrointestinal mucosal ulceration, intravenous leucovorin (folinic acid) rescue therapy is immediately initiated at high doses. Which of the following biochemical statements correctly explains why leucovorin rescues host tissues from methotrexate toxicity?',
    options: [
      {
        text: 'It provides a reduced folate form that bypasses the inhibited dihydrofolate reductase reaction',
        explanation: 'Methotrexate competitively inhibits dihydrofolate reductase (DHFR), preventing the conversion of dihydrofolate (DHF) to tetrahydrofolate (THF). This depletes intracellular N5,N10-methylene-THF, arresting thymidylate synthase (dUMP to dTMP) and purine biosynthesis. Leucovorin (folinic acid, N5-formyl-THF) does not require reduction by DHFR; it is converted directly to THF derivatives intracellularly, thereby replenishing the reduced folate pool and bypassing the metabolic block in non-cancerous cells.'
      },
      {
        text: 'It acts as an allosteric activator of dihydrofolate reductase overcoming competitive drug binding',
        explanation: 'Leucovorin does not allosterically reactivate DHFR; DHFR remains fully bound and inhibited by methotrexate. Leucovorin acts downstream as a metabolic bypass product.'
      },
      {
        text: 'It stimulates renal tubular organic anion transporters accelerating urinary drug excretion',
        explanation: 'Urinary alkalinization (sodium bicarbonate) and the recombinant enzyme glucarpidase promote methotrexate elimination, not leucovorin.'
      },
      {
        text: 'It directly cleaves methotrexate into inactive glutamate and pteroate metabolites',
        explanation: 'Direct enzymatic cleavage of extracellular methotrexate into glutamate and DAMPA is performed by glucarpidase (carboxypeptidase G2), a specialized rescue agent used in severe renal failure.'
      },
      {
        text: 'It competitively displaces methotrexate from intracellular polyglutamylation enzymes',
        explanation: 'Both methotrexate and folates undergo polyglutamylation by folylpolyglutamate synthetase; displacement from this enzyme is not the mechanism of metabolic rescue.'
      }
    ]
  },
  {
    code: 'op-c-s1-0070',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Gastrointestinal',
    topic: 'Primary Biliary Cholangitis Pyruvate Dehydrogenase Autoantigen',
    subtopic: 'Interlobular Bile Duct Destruction and Antimitochondrial Antibodies',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize middle-aged woman with severe pruritus, fatigue, xanthelasmas, elevated alkaline phosphatase, and positive antimitochondrial antibodies (AMA). Histology shows granulomatous destruction of medium/small interlobular bile ducts (florid duct lesion). The primary antigenic target is the E2 subunit of the pyruvate dehydrogenase multienzyme complex (PDC-E2).',
    citation: 'Lleo A, et al. Primary biliary cholangitis. Lancet. 2020;396(10266):1915-1926. PMID: 33308474.',
    stem:
      'A 46-year-old woman presents to her primary care physician with a 7-month history of worsening generalized pruritus, most severe on the palms and soles, and debilitating fatigue. She has a history of Hashimoto thyroiditis managed with levothyroxine. Physical examination reveals excoriations on both arms, mild scleral icterus, and bilateral soft, yellow plaques on the inner canthe of her upper eyelids (xanthelasmas). Laboratory testing reveals: total bilirubin 2.4 mg/dL, direct bilirubin 1.8 mg/dL, alkaline phosphatase 480 U/L (normal: 44–147 U/L), AST 58 U/L, and ALT 64 U/L. Serum total cholesterol is 310 mg/dL. Serology is positive for antimitochondrial antibodies (AMA) at a titer of 1:640. Percutaneous liver biopsy demonstrates dense lymphocytic and histiocytic infiltration surrounding and destroying interlobular bile ducts, with focal non-caseating granuloma formation (florid duct lesion). The primary autoantigen targeted in this patient’s disease is an essential component of which of the following cellular enzymatic complexes?',
    options: [
      {
        text: 'Pyruvate dehydrogenase multienzyme complex localized to the inner mitochondrial matrix',
        explanation: 'Primary biliary cholangitis (PBC) is an autoimmune disease characterized by immune-mediated granulomatous destruction of intrahepatic, small-to-medium interlobular bile ducts. In >95% of patients, highly specific antimitochondrial antibodies (AMA) are directed against the dihydrolipoyl transacetylase (E2) subunit of the pyruvate dehydrogenase complex (PDC-E2) located on the inner mitochondrial membrane.'
      },
      {
        text: 'Microsomal cytochrome P450 2D6 localized to the hepatic smooth endoplasmic reticulum',
        explanation: 'Antibodies to liver-kidney microsome type 1 (anti-LKM1), which target cytochrome P450 2D6, are characteristic of autoimmune hepatitis type 2, which presents with acute or chronic hepatitis rather than interlobular ductopenia.'
      },
      {
        text: 'Nuclear envelope lamin B receptor maintaining hepatocyte nuclear chromatin organization',
        explanation: 'Anti-lamin antibodies can be seen in systemic lupus erythematosus or certain atypical autoimmune states, not classical PBC with florid duct lesions.'
      },
      {
        text: 'Canalicular bile salt export pump maintaining transcellular bile acid transport',
        explanation: 'Mutations in BSEP (ABCB11) cause progressive familial intrahepatic cholestasis type 2 (PFIC2), a genetic pediatric cholestatic disorder without antimitochondrial antibodies or granulomatous duct destruction.'
      },
      {
        text: 'Peroxisomal phytanoyl-CoA hydroxylase catalyzing alpha-oxidation of branched fatty acids',
        explanation: 'Deficiency of phytanoyl-CoA hydroxylase causes Refsum disease, presenting with retinitis pigmentosa, ataxia, polyneuropathy, and ichthyosis, not cholestatic autoimmune liver disease.'
      }
    ]
  },
  {
    code: 'op-c-s1-0071',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Hematology',
    topic: 'Bernard-Soulier Syndrome Platelet Glycoprotein Complex Defect',
    subtopic: 'Platelet Adhesion and Ristocetin Agglutination Testing',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Identify lifelong mucocutaneous bleeding, prolonged bleeding time, thrombocytopenia with giant platelets, and failure of ristocetin-induced platelet agglutination that does NOT correct with normal plasma. Bernard-Soulier syndrome is caused by deficiency of glycoprotein Ib-IX-V (vWF receptor). In contrast, von Willebrand disease corrects with normal plasma.',
    citation: 'Savoia A, et al. Bernard-Soulier syndrome. Semin Thromb Hemost. 2013;39(4):396-403. PMID: 23625478.',
    stem:
      'A 19-year-old woman presents with severe epistaxis and heavy menorrhagia requiring oral iron supplementation. She has a lifelong history of recurrent easy bruising and gingival bleeding. Her parents are first cousins. Physical examination reveals multiple petechiae on her lower extremities and ecchymoses on her forearms. Complete blood count reveals: hemoglobin 10.4 g/dL, platelet count 42,000/microL (normal: 150,000–400,000/microL), and normal leukocyte count. Peripheral blood smear demonstrates markedly enlarged, giant platelets roughly the diameter of neighboring erythrocytes. Coagulation profile shows: PT 12 seconds, aPTT 31 seconds, and bleeding time markedly prolonged at 15 minutes. Platelet aggregometry demonstrates normal aggregation responses to ADP, collagen, and epinephrine; however, addition of ristocetin fails to elicit agglutination. Addition of normal donor plasma fails to correct the abnormal ristocetin aggregation response. Which of the following platelet surface components is deficient or dysfunctional in this patient?',
    options: [
      {
        text: 'Glycoprotein Ib-IX-V surface complex mediating subendothelial von Willebrand factor adhesion',
        explanation: 'Bernard-Soulier syndrome is an autosomal recessive bleeding disorder caused by deficiency or dysfunction of the platelet glycoprotein Ib-IX-V (GpIb-IX-V) complex, the primary receptor for subendothelial von Willebrand factor (vWF). Because the platelet receptor itself is missing, platelets cannot adhere to subendothelial collagen. Hallmarks include thrombocytopenia with giant platelets and failure of ristocetin agglutination that cannot be corrected by mixing with normal plasma (which supplies normal vWF, proving the platelet receptor is defective).'
      },
      {
        text: 'Glycoprotein IIb/IIIa integrin heterodimer mediating fibrinogen-dependent cross-linking',
        explanation: 'Deficiency of GpIIb/IIIa (integrin alphaIIb-beta3) causes Glanzmann thrombasthenia, which features defective aggregation in response to ADP, collagen, and epinephrine, but completely normal agglutination in response to ristocetin, and normal platelet count and size.'
      },
      {
        text: 'Dense granule nucleotide transporter responsible for adenosine diphosphate release',
        explanation: 'Dense granule storage pool disorders (e.g., Hermansky-Pudlak, Chediak-Higashi) impair secondary aggregation responses to ADP and collagen without causing giant platelets or absent ristocetin agglutination.'
      },
      {
        text: 'Endothelial multimeric von Willebrand factor cleaving metalloproteinase ADAMTS13',
        explanation: 'Severe ADAMTS13 deficiency causes thrombotic thrombocytopenic purpura (TTP), characterized by microangiopathic hemolytic anemia, severe thrombocytopenia, neurologic symptoms, and schistocytes, not lifelong giant-platelet bleeding.'
      },
      {
        text: 'Thromboxane A2 synthase in platelet endoplasmic reticulum generating proaggregatory eicosanoids',
        explanation: 'Thromboxane synthase deficiency or aspirin inhibition impairs arachidonic acid-induced platelet aggregation, but ristocetin agglutination remains normal.'
      }
    ]
  },
  {
    code: 'op-c-s1-0072',
    exam: 'Step 1',
    subject: 'Anatomy',
    system: 'Nervous System',
    topic: 'Horner Syndrome Postganglionic Internal Carotid Plexus Lesion',
    subtopic: 'Oculosympathetic Pathway Anatomy and Pharmacologic Localization',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 89,
    shortestValidSolution:
      'Recognize Horner syndrome (ptosis, miosis, anhidrosis). Distinguish 1st order (central/hypothalamus/brainstem), 2nd order (preganglionic/ciliospinal center of Budge to superior cervical ganglion, e.g., Pancoast tumor), and 3rd order (postganglionic, along internal carotid artery). In postganglionic internal carotid dissection, facial sweating is preserved on the cheek/jaw because external carotid plexus fibers branch off earlier at the superior cervical ganglion.',
    citation: 'Martin TJ. Horner syndrome: a clinical review. Optom Vis Sci. 2018;95(6):526-538. PMID: 29846303.',
    stem:
      'A 41-year-old man presents to the emergency department with sudden, severe right-sided neck and retro-orbital pain following a minor motor vehicle collision in which he experienced abrupt neck hyperextension. On physical examination, his right pupil measures 2.5 mm in ambient light while his left pupil measures 4.5 mm; in dim light, the anisocoria increases significantly. He has 2 mm of right upper eyelid ptosis and mild elevation of the right lower eyelid (upside-down ptosis). Anhidrosis is restricted strictly to the right forehead and eyebrow, while sweating over his right lower face, cheek, and jaw is completely preserved and symmetric with the left side. Extraocular movements and visual acuity are intact. Instillation of topical 10% cocaine drops in both eyes fails to dilate the right pupil. Forty-eight hours later, instillation of topical 1% hydroxyamphetamine dilates the left pupil normally but fails to dilate the right pupil. Which of the following anatomical structures is the precise site of injury in this patient?',
    options: [
      {
        text: 'Postganglionic sympathetic axons traversing the adventitia of the internal carotid artery',
        explanation: 'The patient has Horner syndrome (ptosis, miosis, localized anhidrosis) caused by acute internal carotid artery dissection. The sympathetic pathway consists of 3 neurons: first-order (hypothalamus to C8-T2 ciliospinal center of Budge), second-order (preganglionic, sympathetic trunk to superior cervical ganglion), and third-order (postganglionic). Third-order sudomotor fibers travel along the external carotid artery to supply the lower face, whereas fibers supplying the eye and upper forehead travel along the internal carotid artery. Thus, internal carotid dissection spares lower facial sweating. Hydroxyamphetamine releases stored norepinephrine from third-order terminals; failure to dilate confirms a postganglionic (third-order) lesion.'
      },
      {
        text: 'Preganglionic sympathetic fibers traversing the pulmonary apex within the sympathetic chain',
        explanation: 'Second-order preganglionic lesions (e.g., Pancoast apical lung tumor) produce complete hemifacial anhidrosis involving the entire ipsilateral face, and hydroxyamphetamine would cause normal pupil dilation because third-order postganglionic axons remain intact.'
      },
      {
        text: 'First-order central sympathetic tract descending through the lateral medullary tegmentum',
        explanation: 'First-order central lesions (e.g., Wallenberg lateral medullary stroke) cause complete hemibody/hemifacial anhidrosis, vertigo, ataxia, and contralateral pain/temperature loss, and dilate with hydroxyamphetamine.'
      },
      {
        text: 'Parasympathetic preganglionic fibers arising from the Edinger-Westphal nucleus',
        explanation: 'Edinger-Westphal parasympathetic lesions cause an abnormally dilated, unreactive pupil (mydriasis) and loss of accommodation, exactly opposite to Horner syndrome.'
      },
      {
        text: 'Somatic motor fibers traveling within the superior division of the oculomotor nerve',
        explanation: 'Superior oculomotor nerve lesions cause complete severe ptosis (levator palpebrae) and superior rectus palsy, without miosis or forehead anhidrosis.'
      }
    ]
  },
  {
    code: 'op-c-s1-0073',
    exam: 'Step 1',
    subject: 'Pharmacology',
    system: 'Endocrine',
    topic: 'Thionamide Teratogenicity and Hepatotoxicity Profiles',
    subtopic: 'Propylthiouracil versus Methimazole Mechanism and Adverse Effects',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Differentiate PTU and methimazole. Both inhibit thyroid peroxidase. PTU additionally inhibits peripheral 5\'-deiodinase. PTU is preferred in the 1st trimester of pregnancy because methimazole is associated with embryopathy (aplasia cutis, choanal atresia). However, PTU carries a black-box warning for severe idiosyncratic fulminant hepatic necrosis, making methimazole preferred in the 2nd/3rd trimesters and non-pregnant adults.',
    citation: 'Alexander EK, et al. 2017 Guidelines of the American Thyroid Association for the diagnosis and management of thyroid disease during pregnancy and the postpartum. Thyroid. 2017;27(3):315-389. PMID: 28056694.',
    stem:
      'A 26-year-old woman who is 8 weeks pregnant presents to the obstetric clinic with heat intolerance, tremor, weight loss, and palpitations. Laboratory testing reveals suppressed TSH (<0.01 microU/mL) and elevated free thyroxine (free T4: 3.4 ng/dL). Thyroid-stimulating immunoglobulin serology is strongly positive, confirming Graves disease. Her physician initiates oral propylthiouracil (PTU) therapy instead of methimazole. Four weeks later, her hyperthyroid symptoms have improved, but she develops nausea, anorexia, and right upper quadrant abdominal tenderness. Laboratory evaluation reveals: AST 1,420 U/L, ALT 1,680 U/L, total bilirubin 6.8 mg/dL with direct bilirubin 5.1 mg/dL, and an INR of 2.1. Viral hepatitis serologies and abdominal ultrasonography are unremarkable. Which of the following pharmacological rationales explains the initial selection of this specific antithyroid agent, and what is its associated severe black-box warning?',
    options: [
      {
        text: 'Avoidance of first-trimester methimazole embryopathy balanced against the risk of fulminant hepatic necrosis',
        explanation: 'Propylthiouracil (PTU) is strictly preferred during the first trimester of pregnancy because methimazole is associated with teratogenic congenital malformations, including aplasia cutis congenita, choanal atresia, and tracheoesophageal fistula. However, PTU carries an FDA black-box warning for severe, unpredictable, idiosyncratic fulminant hepatic necrosis and liver failure. For this reason, guidelines recommend switching patients from PTU to methimazole at the beginning of the second trimester.'
      },
      {
        text: 'Superior fetal placental transfer blocking thyroid storm balanced against reversible agranulocytosis',
        explanation: 'PTU has higher protein binding and less placental transfer than methimazole (which is beneficial, not detrimental); furthermore, both agents cause agranulocytosis at similar rates (~0.2-0.5%).'
      },
      {
        text: 'Selective destruction of thyroid follicular cells balanced against pulmonary alveolar hemorrhage',
        explanation: 'Thionamides inhibit thyroid peroxidase and do not ablate follicular cells (which is the mechanism of radioactive iodine I-131, contraindicated in pregnancy).'
      },
      {
        text: 'Rapid irreversible inhibition of the sodium-iodide symporter balanced against acute tubular necrosis',
        explanation: 'The sodium-iodide symporter is inhibited by competitive monovalent anions (perchlorate, pertechnetate), not thionamides, which act on thyroid peroxidase.'
      },
      {
        text: 'Prevention of peripheral thyroxine conversion balanced against prolonged QT syndrome arrhythmias',
        explanation: 'While PTU does inhibit peripheral 5\'-deiodinase (unlike methimazole), QT prolongation is not the black-box warning or rationale for first-trimester selection.'
      }
    ]
  },
  {
    code: 'op-c-s1-0074',
    exam: 'Step 1',
    subject: 'Pathology',
    system: 'Musculoskeletal',
    topic: 'Ankylosing Spondylitis Enthesitis and Axial Skeleton Remodeling',
    subtopic: 'HLA-B27 Mediated Inflammation and Syndesmophyte Formation',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 87,
    shortestValidSolution:
      'Recognize chronic lower back pain in a young man with morning stiffness > 30 minutes improving with exercise, bilateral sacroiliitis, enthesitis (Achilles tendon tenderness), and HLA-B27 positivity. Pathogenesis begins as chronic inflammation at the site of tendon/ligament insertion into bone (enthesitis), triggering erosion, chondroid metaplasia, and endochondral ossification that forms vertical syndesmophytes (bamboo spine).',
    citation: 'Sieper J, Poddubnyy D. Axial spondyloarthritis. Lancet. 2017;390(10090):73-84. PMID: 28110981.',
    stem:
      'A 24-year-old man presents with a 1-year history of dull, aching lower back pain and stiffness. The stiffness is most severe upon waking in the morning, lasts for over an hour, and improves significantly with walking and vigorous physical activity but worsens with rest. Over the past 3 months, he has also experienced severe pain and tenderness at the back of both heels during walking. Physical examination reveals limited lumbar spine flexion on the Schober test (expansion of 2 cm; normal: > 5 cm), tenderness over both sacroiliac joints, and tenderness at the insertion of the bilateral Achilles tendons. Pelvic radiography demonstrates bilateral symmetric joint space narrowing and subchondral sclerosis of the sacroiliac joints. Serum testing is positive for HLA-B27 and negative for rheumatoid factor and antinuclear antibodies. Which of the following pathological processes represents the primary initial lesion in this patient’s skeletal disease?',
    options: [
      {
        text: 'Chronic inflammation at tendon, ligament, and capsule insertions into cortical bone (enthesitis)',
        explanation: 'Ankylosing spondylitis is the prototypic axial spondyloarthritis strongly associated with HLA-B27. The primary pathological hallmark is enthesitis—inflammation at the sites where tendons, ligaments, and joint capsules insert into bone (e.g., Achilles tendon insertion, plantar fascia, annulus fibrosus). Inflammation leads to subchondral bone erosion followed by repair with chondroid metaplasia and new bone formation, producing vertical bony bridges across intervertebral spaces (syndesmophytes) and fusion (bamboo spine).'
      },
      {
        text: 'Synovial pannus proliferation invading articular cartilage with marginal bony erosions',
        explanation: 'Hypertrophic inflammatory synovial pannus is the hallmark of rheumatoid arthritis, which affects peripheral diarthrodial joints symmetrically (MCP, PIP, wrists) and spares the sacroiliac joints.'
      },
      {
        text: 'Progressive mechanical degradation of articular cartilage with subchondral osteophyte formation',
        explanation: 'Focal articular cartilage fibrillation with eburnation and marginal osteophyte formation characterizes osteoarthritis, which worsens with activity and improves with rest, lacking enthesitis.'
      },
      {
        text: 'Deposition of monosodium urate crystals triggering neutrophil activation in synovial fluid',
        explanation: 'Monosodium urate crystal deposition characterizes gout, presenting as acute, exquisitely painful monoarthritis (podagra), not chronic bilateral symmetric sacroiliitis and syndesmophyte fusion.'
      },
      {
        text: 'Osteoclastic bone resorption followed by disorganized osteoblastic woven bone deposition',
        explanation: 'Disorganized woven and lamellar bone remodeling with mosaic pattern (cement lines) is the hallmark of Paget disease of bone, driven by osteoclast dysregulation rather than HLA-B27 autoimmunity.'
      }
    ]
  },
  {
    code: 'op-c-s1-0075',
    exam: 'Step 1',
    subject: 'Biochemistry',
    system: 'General Principles',
    topic: 'Maple Syrup Urine Disease Thiamine Cofactor Requirement',
    subtopic: 'Branched-Chain Alpha-Keto Acid Dehydrogenase Complex',
    provisionalDifficulty: 'Hard',
    estimatedDifficultyPercent: 88,
    shortestValidSolution:
      'Recognize infant with poor feeding, lethargy, dystonia, sweet burnt-sugar odor in diaper, and elevated leucine/isoleucine/valine. Caused by deficiency of branched-chain alpha-ketoacid dehydrogenase (BCKDH), a mitochondrial multi-enzyme complex requiring 5 cofactors: Thiamine pyrophosphate (TPP, B1), Lipoic acid, CoA (B5), FAD (B2), and NAD+ (B3) ("Tender Loving Care For Nancy"). Certain genetic subtypes respond to high-dose thiamine supplementation.',
    citation: 'Strauss KA, et al. Branched-chain alpha-ketoacid dehydrogenase deficiency. In: GeneReviews. 2020. PMID: 20301495.',
    stem:
      'A 6-day-old male infant is brought to the emergency department for poor feeding, somnolence, and vomiting. Physical examination reveals an irritable, lethargic neonate with alternating hypertonia and hypotonia, and bicycling movements of the lower extremities. The nurse notes that the infant’s wet diaper has a distinct sweet odor resembling maple syrup or caramelized sugar. Laboratory evaluation reveals: venous pH 7.21, bicarbonate 11 mEq/L, anion gap 22 mEq/L, and elevated serum ammonia of 95 micromol/L (normal: < 50 micromol/L). Plasma amino acid analysis reveals markedly elevated concentrations of leucine, isoleucine, and valine, along with the presence of alloisoleucine. Following stabilization and dietary restriction of branched-chain amino acids, the geneticist recommends initiating high-dose trial therapy with an essential water-soluble vitamin cofactor. This cofactor functions as a prosthetic group for which of the following enzymatic subunits?',
    options: [
      {
        text: 'E1 alpha-ketoacid decarboxylase requiring thiamine pyrophosphate for covalent intermediate formation',
        explanation: 'Maple syrup urine disease (MSUD) results from deficiency of the mitochondrial branched-chain alpha-ketoacid dehydrogenase (BCKDH) complex, which degrades leucine, isoleucine, and valine. BCKDH is structurally analogous to pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase, consisting of three subunits (E1 decarboxylase, E2 transacylase, E3 dehydrogenase) requiring five cofactors: Thiamine pyrophosphate (TPP, B1), Lipoic acid, CoA (B5), FAD (B2), and NAD+ (B3). Mutations in the E1 subunit often impair TPP binding affinity; high-dose thiamine supplementation stabilizes the enzyme and restores partial catalytic activity in thiamine-responsive variants.'
      },
      {
        text: 'E2 transacylase requiring lipoamide for acyl-group transfer to coenzyme A',
        explanation: 'Lipoic acid (lipoamide) is the prosthetic group for the E2 core subunit; while essential, it is not a dietary vitamin and does not form the basis of vitamin-responsive MSUD.'
      },
      {
        text: 'E3 dihydrolipoyl dehydrogenase requiring pyridoxal 5-phosphate for transamination',
        explanation: 'The E3 subunit uses FAD and NAD+ to reoxidize lipoamide; pyridoxal phosphate (PLP, B6) is used by upstream cytosolic transaminases (branched-chain aminotransferase), not the E3 complex.'
      },
      {
        text: 'Biotin-dependent carboxylase catalyzing anaplerotic oxaloacetate replenishment',
        explanation: 'Biotin (B7) is a cofactor for carboxylases (pyruvate carboxylase, propionyl-CoA carboxylase, acetyl-CoA carboxylase); its deficiency causes propionic acidemia or holocarboxylase deficiency, not MSUD.'
      },
      {
        text: 'Tetrahydrobiopterin-dependent hydroxylase converting branched ketoacids into propionyl-CoA',
        explanation: 'Tetrahydrobiopterin (BH4) is a cofactor for aromatic amino acid hydroxylases (phenylalanine, tyrosine, tryptophan hydroxylases) and nitric oxide synthase, not branched-chain amino acid metabolism.'
      }
    ]
  }
];
