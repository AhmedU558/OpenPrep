import { CandidateSpec } from './types';

export const step1Batch25: CandidateSpec[] = [
  {
    "code": "op-c-s1-0601",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Aortic Stenosis Left Ventricular Pressure-Volume Loop Shift",
    "provisionalDifficulty": 5,
    "stem": "A 71-year-old man undergoes cardiac catheterization during evaluation of progressive exertional dyspnea and lightheadedness. Physical examination reveals a harsh, late-peaking systolic ejection murmur at the right second intercostal space that radiates to both carotids, with a soft and single second heart sound. Carotid pulse examination demonstrates parvus et tardus. Left ventricular catheterization demonstrates a peak left ventricular systolic pressure of 210 mm Hg with a simultaneous ascending aortic peak systolic pressure of 120 mm Hg. Left ventricular end-diastolic pressure is 24 mm Hg. Which of the following alterations on a left ventricular pressure-volume loop is most characteristic of this patient's underlying condition compared to a normal heart?",
    "choices": [
      [
        "Marked elevation of peak left ventricular systolic pressure with increased area of the loop and increased end-systolic elastance slope",
        "Aortic stenosis increases left ventricular afterload, requiring high systolic intraventricular pressures to overcome the fixed valvular gradient, markedly increasing peak systolic pressure and shifting the isovolumetric contraction and ejection phases upward."
      ],
      [
        "Rightward shift of the end-systolic volume point with loss of distinct isovolumetric contraction and relaxation phases",
        "Loss of true isovolumetric phases occurs in acute mitral or aortic regurgitation due to continuous retrograde or transvalvular leak during pressure changes, not aortic stenosis."
      ],
      [
        "Primary rightward displacement of the end-diastolic volume point with a decrease in peak systolic ventricular pressure",
        "Rightward displacement of EDV with decreased peak systolic pressure is characteristic of dilated cardiomyopathy with systolic failure, not concentric hypertrophy from aortic stenosis."
      ],
      [
        "Leftward and downward shift of the entire pressure-volume loop with unchanged stroke volume and reduced pulse pressure",
        "Leftward and downward shift describes pure hypovolemic underfilling with preserved myocardial contractility, whereas aortic stenosis markedly increases peak LV pressure."
      ],
      [
        "Immediate widening of the width of the pressure-volume loop accompanied by an acute decrease in left ventricular end-diastolic pressure",
        "Widening of loop width represents increased stroke volume, whereas critical aortic stenosis typically maintains or reduces stroke volume while substantially increasing end-diastolic filling pressures."
      ]
    ],
    "shortestValidSolution": "High LV peak systolic pressure (210) vs aortic (120) = AS -> PV loop shows marked upward shift of peak systolic pressure curve.",
    "necessaryInference": "Recognize that severe outflow tract resistance generates high intraventricular pressures to maintain forward flow, shifting the systolic portion of the LV PV loop upward.",
    "strongestDistractor": "Rightward shift of the end-systolic volume point with loss of distinct isovolumetric contraction and relaxation phases",
    "distractorExclusion": "Loss of isovolumetric periods characterizes severe valvular regurgitation (mitral/aortic regurgitation), whereas aortic stenosis preserves both isovolumetric contraction and relaxation phases.",
    "citation": "Otto CM, Prendergast B. Aortic-valve stenosis--from patients at risk to severe valve obstruction. N Engl J Med. 2014;371(8):744-756. PMID: 25140960.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Advanced cardiovascular hemodynamics requiring quantitative interpretation of LV-aortic pressure gradient and pressure-volume loop topology.",
      "distractorExclusionNotes": "Distractors feature regurgitant valvular lesions, systolic dilated failure, and volume depletion PV loop shifts.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0602",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Acute Mitral Regurgitation Hemodynamic Pressure-Volume Loop",
    "provisionalDifficulty": 5,
    "stem": "A 56-year-old man arrives at the emergency department 3 hours after experiencing sudden-onset severe dyspnea and crushing retrosternal chest pain. Blood pressure is 92/64 mm Hg and heart rate is 118/min. Physical examination reveals crackles across all lung fields, a hyperdynamic apical impulse, and a harsh, decrescendo holosystolic murmur at the cardiac apex that does not radiate prominently to the axilla. Pulmonary artery catheterization shows a pulmonary capillary wedge pressure tracing with towering 'v' waves reaching 55 mm Hg. Transthoracic echocardiography demonstrates rupture of the posteromedial papillary muscle. Which of the following alterations is most prominently observed on this patient's left ventricular pressure-volume loop?",
    "choices": [
      [
        "Absence of true isovolumetric contraction and relaxation phases with a reduced forward stroke volume despite increased total stroke volume",
        "Acute mitral regurgitation allows retrograde ejection into the compliant-restricted left atrium as soon as LV pressure exceeds LA pressure, eliminating true isovolumetric contraction; retrograde filling during early diastole similarly eliminates true isovolumetric relaxation."
      ],
      [
        "Marked rightward displacement of the end-diastolic pressure-volume relationship without any change in isovolumetric contraction duration",
        "Preserved isovolumetric contraction does not occur in acute MR because retrograde flow into the low-pressure left atrium begins immediately upon myocardial activation."
      ],
      [
        "Prolonged isovolumetric relaxation phase due to elevated left ventricular peak systolic pressure and delayed aortic valve closure",
        "Isovolumetric relaxation is eliminated, not prolonged, because rapid decompression of the left ventricle into both aorta and left atrium leads to premature aortic valve closure."
      ],
      [
        "Leftward displacement of the end-diastolic volume point with isolated elevation of left ventricular end-systolic volume",
        "Acute MR causes volume overload that increases left ventricular end-diastolic volume due to regurgitant volume returning from the left atrium in diastole, not leftward displacement."
      ],
      [
        "Decreased slope of the end-systolic elastance line reflecting acute intrinsic cardiomyocyte sarcomeric contractile depression",
        "Sarcomeric contractility is initially preserved or hyperdynamic due to sympathetic compensatory drive and afterload reduction, though forward stroke volume drops."
      ]
    ],
    "shortestValidSolution": "Papillary muscle rupture + acute MR + towering v waves -> Elimination of isovolumetric contraction/relaxation on PV loop.",
    "necessaryInference": "Understand that when the mitral valve is incompetent, there is no phase where all four cardiac valves are closed simultaneously; retrograde ejection begins immediately.",
    "strongestDistractor": "Marked rightward displacement of the end-diastolic pressure-volume relationship without any change in isovolumetric contraction duration",
    "distractorExclusion": "Isovolumetric phases cannot exist when mitral incompetence permits retrograde ventricular emptying into the low-pressure atrium during initial systolic contraction.",
    "citation": "Gaasch WH, Meyer TE. Left ventricular response to mitral regurgitation: implications for management. Circulation. 2008;118(5):589-598. PMID: 18663098.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests deep mechanical physiology of pressure-volume loop dynamics in acute regurgitant valvular disruption.",
      "distractorExclusionNotes": "Distractors falsely assume intact isovolumetric phases or primary myocardial contractility failure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0603",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Hypertrophic Cardiomyopathy Dynamic Outflow Obstruction Maneuvers",
    "provisionalDifficulty": 5,
    "stem": "A 19-year-old collegiate basketball player is evaluated after experiencing recurrent episodes of presyncope during intense conditioning drills. His father died suddenly at age 34 during a recreational tennis match. Blood pressure is 124/78 mm Hg and heart rate is 68/min. Cardiac auscultation reveals a harsh crescendo-decrescendo systolic murmur heard best along the left lower sternal border that does not radiate to the carotid arteries. Bedside physiological testing reveals that the intensity of the murmur increases substantially when the patient performs the strain phase of the Valsalva maneuver and decreases noticeably when the patient squats. Which of the following hemodynamic mechanisms explains the intensification of the murmur during the Valsalva maneuver?",
    "choices": [
      [
        "Decreased venous return reduces left ventricular end-diastolic volume, narrowing the left ventricular outflow tract and worsening dynamic anterior mitral leaflet obstruction",
        "The Valsalva strain phase increases intrathoracic pressure and decreases venous return; smaller LV cavity diameter brings the hypertrophied interventricular septum closer to the anterior mitral leaflet (systolic anterior motion [SAM]), worsening dynamic obstruction and murmur intensity."
      ],
      [
        "Increased systemic vascular resistance increases left ventricular afterload, forcing the hypertrophied septum toward the mitral apparatus",
        "Increased systemic vascular resistance (such as during handgrip or squatting) increases LV afterload and cavity size, which widens the LVOT and decreases murmur intensity, opposite to the Valsalva maneuver."
      ],
      [
        "Reflex vagal stimulation decelerates atrioventricular conduction, prolonging ventricular ejection time across the pulmonic valve",
        "The murmur of HCM is generated by turbulent flow across the left ventricular outflow tract, not the pulmonic valve, and Valsalva strain causes tachycardia via baroreceptor unloading, not vagal bradycardia."
      ],
      [
        "Increased right ventricular filling causes bulging of the interventricular septum into the left ventricle via ventricular interdependence",
        "Valsalva strain reduces filling in both ventricles; septal displacement into the LV occurs during abrupt inspiration in cardiac tamponade, not during the strain phase of Valsalva in HCM."
      ],
      [
        "Acute reduction in myocardial contractility reduces peak aortic pressure, accentuating the retrograde transaortic flow velocity",
        "Sympathetic tone increases during Valsalva strain; contractility increases, and the murmur is generated by anterograde turbulent outflow tract obstruction, not retrograde transaortic flow."
      ]
    ],
    "shortestValidSolution": "Valsalva strain -> decreased venous return -> smaller LV cavity -> worsened SAM dynamic LVOT obstruction -> louder murmur.",
    "necessaryInference": "Synthesize the impact of loading conditions on the left ventricular geometry in hypertrophic cardiomyopathy: smaller LV volume accentuates dynamic outflow tract obstruction.",
    "strongestDistractor": "Increased systemic vascular resistance increases left ventricular afterload, forcing the hypertrophied septum toward the mitral apparatus",
    "distractorExclusion": "Increased SVR increases afterload and expands LV chamber dimension, which pushes the mitral leaflet away from the septum, softening the murmur.",
    "citation": "Maron BJ. Clinical Course and Management of Hypertrophic Cardiomyopathy. N Engl J Med. 2018;379(7):655-668. PMID: 30110588.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Deduces the exact mechanical and geometric relationship between preload, afterload, cavity dimension, and murmur intensity in HCM.",
      "distractorExclusionNotes": "Distractors confuse loading maneuvers (squatting vs Valsalva) or invoke right-sided/pulmonic mechanisms.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0604",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Cardiac Tamponade Pulsus Paradoxus & Pericardial Hemodynamics",
    "provisionalDifficulty": 4,
    "stem": "A 48-year-old woman with metastatic breast cancer presents to the acute oncology unit with worsening lethargy, tachypnea, and lightheadedness. Blood pressure is 88/60 mm Hg during expiration and drops to 72/52 mm Hg during quiet inspiration. Heart rate is 124/min. Physical examination demonstrates marked jugular venous distention with distant, muffled heart sounds. An indwelling central venous pressure catheter displays an elevated mean right atrial pressure of 19 mm Hg with prominent x-descents but an absent or severely blunted y-descent. Which of the following pathophysiological mechanisms directly accounts for the blunted y-descent observed on this patient's venous pressure tracing?",
    "choices": [
      [
        "High intrapericardial pressure equalizes diastolic intracardiac chamber pressures and impedes rapid passive ventricular filling across the tricuspid valve during early diastole",
        "The y-descent corresponds to passive ventricular filling following tricuspid valve opening. In cardiac tamponade, elevated pericardial pressure restricts early diastolic chamber expansion, halting rapid inflow and blunting or abolishing the y-descent."
      ],
      [
        "Severe tricuspid regurgitation causes massive retrograde systolic volume waves that obliterate the normal atrial relaxation trough",
        "Tricuspid regurgitation blunts or reverses the x-descent by causing large systolic cv waves, whereas the y-descent in TR is typically steep and rapid."
      ],
      [
        "Failure of atrial myocardial contraction due to pericardial stretch leads to loss of the active end-diastolic atrial kick",
        "Loss of atrial contraction abolishes the a-wave (as seen in atrial fibrillation), but does not account for the early diastolic blunting of the y-descent."
      ],
      [
        "Excessive sympathetic stimulation accelerates isovolumetric relaxation, causing premature ventricular ejection into the pulmonary trunk",
        "Isovolumetric relaxation occurs prior to atrioventricular valve opening and does not involve ventricular ejection, which is a systolic event."
      ],
      [
        "Selective pulmonary vascular constriction elevates right ventricular afterload, preventing right atrial emptying during ventricular systole",
        "Atrial emptying during ventricular systole constitutes the x-descent (atrial relaxation and downward displacement of the tricuspid annulus), which remains preserved in tamponade."
      ]
    ],
    "shortestValidSolution": "Tamponade (muffled sounds, JVD, pulsus paradoxus) -> intrapericardial pressure limits early diastolic ventricular filling -> blunted y-descent.",
    "necessaryInference": "Link the hemodynamic events of the jugular venous waveform to pericardial constraints: early passive diastolic filling (y-descent) is blocked by fluid compression.",
    "strongestDistractor": "Severe tricuspid regurgitation causes massive retrograde systolic volume waves that obliterate the normal atrial relaxation trough",
    "distractorExclusion": "Tricuspid regurgitation obliterates the systolic x-descent and accentuates the diastolic y-descent, exactly the opposite pattern of cardiac tamponade.",
    "citation": "Spodick DH. Acute cardiac tamponade. N Engl J Med. 2003;349(7):684-690. PMID: 12917306.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires correlating central venous waveform components (a, c, x, v, y) with pericardial fluid physics and intracardiac pressure equalization.",
      "distractorExclusionNotes": "Distractors confuse x vs y descent mechanics and contrast tamponade with constrictive pericarditis or valvular regurgitation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0605",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Constrictive Pericarditis Dip-and-Plateau Ventricular Tracing",
    "provisionalDifficulty": 5,
    "stem": "A 62-year-old man who underwent mediastinal radiation therapy 15 years ago for Hodgkin lymphoma presents with progressive abdominal distention, bilateral lower-extremity edema, and dyspnea on exertion. Blood pressure is 114/74 mm Hg and heart rate is 76/min. Jugular venous examination demonstrates marked elevation that paradoxically increases during inspiration (Kussmaul sign), along with prominent, rapid 'y' descents. A high-pitched sound is heard early in diastole shortly after S2 along the left sternal border. Diagnostic right and left heart catheterization demonstrates equalization of end-diastolic pressures in all four cardiac chambers and a distinct 'dip-and-plateau' (square root sign) waveform on right and left ventricular diastolic pressure tracings. Which of the following physiological events corresponds to the 'plateau' phase of this ventricular waveform?",
    "choices": [
      [
        "Abrupt cessation of ventricular filling in mid-to-late diastole when the expanding myocardium encounters the rigid, non-compliant fibrotic pericardium",
        "In constrictive pericarditis, early diastolic filling is rapid and unimpeded (forming the dip and prominent y-descent), but filling abruptly halts in mid-diastole when the cardiac volume reaches the rigid constraint of the encased pericardium, producing the plateau."
      ],
      [
        "Sustained isovolumetric contraction against an elevated systemic vascular resistance prior to opening of the aortic valve",
        "Isovolumetric contraction occurs in systole between mitral valve closure and aortic valve opening, whereas the dip-and-plateau is an entirely diastolic pressure phenomenon."
      ],
      [
        "Prolonged myocardial relaxation resulting from impaired sarcoplasmic reticulum Ca2+-ATPase (SERCA2a) reuptake kinetics",
        "SERCA2a impairment causes slow, delayed diastolic relaxation (seen in ischemic heart disease or heart failure with preserved ejection fraction), which eliminates the rapid early diastolic dip."
      ],
      [
        "Retrograde flow of blood from the pulmonary trunk into the right ventricle through an incompetent pulmonic valve",
        "Pulmonic regurgitation causes diastolic volume overload of the right ventricle but does not cause equalized four-chamber end-diastolic pressures or a bilateral square-root sign."
      ],
      [
        "Dynamic outflow tract obstruction during peak ventricular ejection caused by systolic anterior motion of the tricuspid valve",
        "Outflow tract obstruction is a systolic event, whereas the square root sign is an intracardiac ventricular filling pressure tracing occurring purely during diastole."
      ]
    ],
    "shortestValidSolution": "Constrictive pericarditis (Kussmaul sign, pericardial knock, square-root sign) -> plateau = abrupt halt of mid-diastolic filling by rigid pericardium.",
    "necessaryInference": "Differentiate constrictive pericarditis from tamponade: early diastole is unimpeded in constriction (steep dip), but mid-to-late filling abruptly hits a rigid shell (plateau).",
    "strongestDistractor": "Prolonged myocardial relaxation resulting from impaired sarcoplasmic reticulum Ca2+-ATPase (SERCA2a) reuptake kinetics",
    "distractorExclusion": "SERCA2a dysfunction characterizes restrictive cardiomyopathy with impaired early relaxation (slow y-descent), whereas constriction has rapid early relaxation followed by rigid halt.",
    "citation": "Welch TD, et al. Constrictive pericarditis: modern risk assessment and clinical outcomes. Circulation. 2014;130(22):1924-1932. PMID: 25301844.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates clinical findings (radiation history, knock, Kussmaul) with catheterization pressure curves (square root sign).",
      "distractorExclusionNotes": "Distractors confuse systolic vs diastolic phases or conflate constriction with restrictive cardiomyopathy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0606",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Tetralogy of Fallot Squatting Hemodynamics & Shunt Reversal",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy is brought to the pediatric clinic after an episode of severe cyanosis, irritability, and rapid breathing that occurred while running at the playground. His mother notes that when this happens, he instinctively squats down, which leads to gradual resolution of his blue coloration over several minutes. Cardiac auscultation reveals a normal S1, an intensely loud single S2, and a harsh, crescendo-decrescendo systolic ejection murmur at the left upper sternal border that diminishes during the cyanotic spell. Which of the following hemodynamic shifts is directly produced by squatting to terminate this hypercyanotic episode?",
    "choices": [
      [
        "Increased systemic vascular resistance elevates left ventricular afterload, decreasing right-to-left shunting across the ventricular septal defect and promoting pulmonary blood flow",
        "Squatting compresses femoral and popliteal arteries, increasing systemic vascular resistance (SVR). Increased SVR raises left ventricular systolic pressure relative to right ventricular pressure, reversing or diminishing right-to-left shunting across the non-restrictive VSD and diverting right ventricular outflow across the stenotic infundibulum into the pulmonary circulation."
      ],
      [
        "Decreased systemic venous return relieves right ventricular volume overload, allowing relaxation of the infundibular spasm",
        "Squatting actually increases venous return by compressing splanchnic and lower-extremity veins; the primary therapeutic benefit arises from the dramatic increase in arterial systemic vascular resistance."
      ],
      [
        "Acute lowering of pulmonary vascular resistance through passive pulmonary capillary recruitment bypasses the infundibular obstruction",
        "Pulmonary vascular resistance is unchanged or fixed; the obstruction in Tetralogy of Fallot is anatomical and dynamic subpulmonic infundibular stenosis, which cannot be bypassed via capillary recruitment."
      ],
      [
        "Reflex parasympathetic activation selectively dilates the right ventricular outflow tract via muscarinic receptor stimulation",
        "The right ventricular infundibulum has no direct parasympathetic vasodilatory innervation; dynamic spasm is mediated by catecholamines acting on beta-1 adrenergic receptors."
      ],
      [
        "Left-to-right shunting through a patent ductus arteriosus is restored by acute elevation of pulmonary artery diastolic pressure",
        "In a 4-year-old child, the ductus arteriosus is physiologically and anatomically closed (ligamentum arteriosum); flow shifts occur across the large ventricular septal defect."
      ]
    ],
    "shortestValidSolution": "Tet spell in TOF -> squatting increases SVR -> raises LV pressure above RV -> reduces right-to-left shunt -> forces blood into lungs.",
    "necessaryInference": "Apply parallel vascular resistance principles to congenital heart defects: increasing downstream systemic resistance forces right ventricular blood across the pulmonary vascular bed.",
    "strongestDistractor": "Decreased systemic venous return relieves right ventricular volume overload, allowing relaxation of the infundibular spasm",
    "distractorExclusion": "Squatting compresses systemic veins, increasing (not decreasing) venous return; the key therapeutic hemodynamic mechanism is arterial afterload augmentation.",
    "citation": "Bailliard F, Anderson RH. Tetralogy of Fallot. Orphanet J Rare Dis. 2009;4:2. PMID: 19144126.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "High-yield congenital heart physiology requiring deductive reasoning regarding resistance circuits and shunt hemodynamics.",
      "distractorExclusionNotes": "Distractors falsely assume venous decompression, parasympathetic infundibular dilation, or ductal patency in a 4-year-old.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0607",
    "exam": "Step 1",
    "subject": "Anatomy",
    "system": "Cardiovascular",
    "topic": "Coarctation of the Aorta Collateral Circulation Pathways",
    "provisionalDifficulty": 4,
    "stem": "A 26-year-old man is evaluated for asymptomatic hypertension discovered during an occupational health screening. Blood pressure is 172/92 mm Hg in the right upper extremity, 170/90 mm Hg in the left upper extremity, and 108/68 mm Hg in the right lower extremity. Bilateral femoral pulses are diminished and delayed compared to the radial pulses. Chest radiography reveals symmetrical, scalloped cortical erosions along the inferior margins of the third through eighth ribs bilaterally ('rib notching'). Which of the following arterial anastomotic pathways directly accounts for the vascular remodeling that produces these radiologic findings?",
    "choices": [
      [
        "Internal thoracic arteries anastomosing with anterior intercostal arteries, which supply retrograde flow into dilated posterior intercostal arteries",
        "Post-ductal coarctation obstructs descending aortic flow; collateral bypass routes recruit branches of the subclavian arteries (internal thoracic arteries) anastomosing with anterior intercostals, which send dilated, tortuous retrograde flow into posterior intercostals (branches of the descending aorta), eroding the inferior costal grooves."
      ],
      [
        "Vertebral arteries anastomosing directly with the anterior spinal artery to supply the segmental lumbar collateral network",
        "The anterior spinal artery receives radicular vessels but carries minimal volume relative to systemic lower-body perfusion and does not course along the costal ribs."
      ],
      [
        "Superior epigastric arteries anastomosing with inferior mesenteric branches to bypass the aortic bifurcation",
        "Superior epigastric arteries anastomose with inferior epigastric arteries (external iliac) within the rectus sheath, which supplies lower abdominal wall flow but does not erode thoracic ribs."
      ],
      [
        "Lateral thoracic arteries anastomosing directly with the celiac trunk via phrenic and diaphragmatic branches",
        "Lateral thoracic branches supply axillary and chest wall tissue; they do not form direct macrovascular anastomoses with visceral intra-abdominal trunks like the celiac axis."
      ],
      [
        "Thyrocervical trunk branches anastomosing with bronchial arteries to provide retrograde flow into the pulmonary circulation",
        "Bronchial collateralization occurs in pulmonary atresia or severe Tetralogy of Fallot (MAPCAs), not post-ductal aortic coarctation supplying systemic descending aortic flow."
      ]
    ],
    "shortestValidSolution": "Coarctation of aorta + rib notching = Subclavian -> Internal thoracic -> Anterior intercostals -> Posterior intercostals -> Descending aorta.",
    "necessaryInference": "Trace the exact anatomical collateral route bypassing an aortic coarctation: tortuous, dilated posterior intercostal arteries run in the subcostal groove and cause rib notching.",
    "strongestDistractor": "Superior epigastric arteries anastomosing with inferior mesenteric branches to bypass the aortic bifurcation",
    "distractorExclusion": "The epigastric anastomosis (superior to inferior epigastric) traverses the rectus abdominis sheath and does not contact the posterior ribs.",
    "citation": "Torok RD, et al. Coarctation of the Aorta: Management from Infancy to Adulthood. World J Pediatr Congenit Heart Surg. 2015;6(1):106-117. PMID: 25556200.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Precise multi-vessel anatomical mapping of systemic collateral circuits in aortic coarctation.",
      "distractorExclusionNotes": "Distractors describe other collateral pathways (epigastric, spinal, bronchial) that do not contact thoracic rib architecture.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0608",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Patent Ductus Arteriosus Pharmacologic Closure Mechanisms",
    "provisionalDifficulty": 4,
    "stem": "A premature female infant born at 27 weeks gestation experiences worsening respiratory distress and episodes of apnea on her fourth day of life. Blood pressure is 66/28 mm Hg with a widened pulse pressure. Physical examination demonstrates bounding peripheral pulses, an active precordium, and a continuous, machine-like murmur heard best at the left infraclavicular area. Echocardiography demonstrates a large patent ductus arteriosus with left-to-right shunting and left atrial dilation. Intravenous administration of indomethacin is initiated. Which of the following biochemical mechanisms is directly responsible for the therapeutic effect of this medication?",
    "choices": [
      [
        "Inhibition of cyclooxygenase enzymes halts the synthesis of prostaglandin E2, removing local vasodilation and inducing smooth muscle constriction of the ductal wall",
        "In utero and in premature infants, patency of the ductus arteriosus is maintained by circulating and locally produced prostaglandin E2 (PGE2) acting on EP4 receptors; indomethacin or ibuprofen inhibits COX-1 and COX-2, decreasing PGE2 synthesis and promoting ductal closure."
      ],
      [
        "Direct stimulation of endothelin-1 type B receptors induces nitric oxide-mediated vasoconstriction of the muscular media",
        "Endothelin-1 type B receptor activation on vascular endothelium primarily stimulates nitric oxide release causing vasodilation, whereas ETA receptors mediate vasoconstriction."
      ],
      [
        "Blockade of voltage-gated L-type calcium channels prevents calcium influx into vascular smooth muscle cells",
        "Calcium channel blockade causes smooth muscle relaxation and vasodilation (hypotension), which would counteract ductal closure."
      ],
      [
        "Phosphodiesterase-5 inhibition elevates intracellular cyclic guanosine monophosphate (cGMP) in the pulmonary vasculature",
        "PDE-5 inhibitors (e.g., sildenafil) promote vascular smooth muscle relaxation and are used to treat pulmonary arterial hypertension, not to close a PDA."
      ],
      [
        "Competitive antagonism of alpha-1 adrenergic receptors prevents systemic arterial vasoconstriction",
        "Alpha-1 receptor stimulation causes vasoconstriction; antagonism would induce vasodilation and fails to stimulate ductal constriction."
      ]
    ],
    "shortestValidSolution": "Premature infant + machine murmur + bounding pulses = PDA -> Indomethacin blocks COX -> Decreases PGE2 -> Ductal closure.",
    "necessaryInference": "Correlate neonatal pharmacology with developmental physiology: PGE2 keeps ductus open; COX inhibitors reduce PGE2 to close it.",
    "strongestDistractor": "Direct stimulation of endothelin-1 type B receptors induces nitric oxide-mediated vasoconstriction of the muscular media",
    "distractorExclusion": "Endothelin-1 is an endogenous vasoconstrictor via ETA receptors, but indomethacin does not act as an endothelin receptor agonist.",
    "citation": "Benitz WE. Patent Ductus Arteriosus in Preterm Infants. Pediatrics. 2016;137(1):e20153730. PMID: 26644481.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular pharmacology of prostanoid synthesis regulation and ductal vascular biology.",
      "distractorExclusionNotes": "Distractors feature vasodilator mechanisms (PDE-5, calcium channel blockade, alpha blockade) that would worsen patency.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0609",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Congenital Long-QT Syndrome Type 1 Potassium Channel Defect",
    "provisionalDifficulty": 5,
    "stem": "A 12-year-old girl is brought to the emergency department after losing consciousness abruptly while participating in a competitive 200-meter freestyle swimming event. She was retrieved from the pool by lifeguards, who noted spontaneous breathing and pulse resumption within 45 seconds without chest compressions. Her baseline 12-lead ECG recorded in the emergency department reveals normal sinus rhythm at 62/min and a corrected QT interval (QTc) of 510 ms (normal < 440 ms) with broad-based, symmetrical T waves. Genetic testing identifies a heterozygous missense mutation in the KCNQ1 gene. Which of the following cardiac ion currents is primarily impaired as a consequence of this genetic mutation?",
    "choices": [
      [
        "Slow delayed-rectifier potassium current (IKs) responsible for phase 3 myocardial repolarization during sympathetic stimulation",
        "KCNQ1 encodes the pore-forming alpha subunit of the Kv7.1 channel mediating the slow delayed-rectifier potassium current (IKs). Loss-of-function prolongs phase 3 repolarization and the QT interval; because IKs is normally augmented by beta-adrenergic stimulation, events typically occur during swimming or intense exertion."
      ],
      [
        "Rapid delayed-rectifier potassium current (IKr) mediating baseline ventricular repolarization encoded by KCNH2",
        "IKr is encoded by KCNH2 (HERG) and represents Long-QT syndrome type 2 (LQT2), which classically triggers arrhythmias during auditory stimuli (alarm clocks, doorbells), not swimming."
      ],
      [
        "Inward-rectifier potassium current (IK1) responsible for maintaining the resting membrane potential during phase 4",
        "IK1 is encoded by KCNJ2 and causes Andersen-Tawil syndrome (LQT7), which presents with dysmorphic physical features, periodic paralysis, and prominent U waves."
      ],
      [
        "Transient outward potassium current (Ito) mediating early phase 1 repolarization following peak sodium influx",
        "Ito mediates phase 1 notch repolarization and is implicated in Brugada syndrome, not exertional syncope with classical broad-based QTc prolongation."
      ],
      [
        "ATP-sensitive potassium current (KATP) mediating ischemic preconditioning and coronary vasodilation",
        "KATP channels open in response to cellular metabolic depletion (low ATP) and do not mediate inherited long-QT syndromes."
      ]
    ],
    "shortestValidSolution": "Syncope while swimming + QTc 510 ms + KCNQ1 mutation = LQT1 -> Impaired slow delayed-rectifier K+ current (IKs).",
    "necessaryInference": "Differentiate long-QT syndromes by trigger and molecular current: swimming + KCNQ1 = LQT1 = IKs impairment.",
    "strongestDistractor": "Rapid delayed-rectifier potassium current (IKr) mediating baseline ventricular repolarization encoded by KCNH2",
    "distractorExclusion": "IKr is encoded by KCNH2 (LQT2), which triggers with sudden auditory stimuli rather than exercise or swimming.",
    "citation": "Schwartz PJ, et al. Congenital long QT syndrome: from the bedside to the bench and back. Circ Arrhythm Electrophysiol. 2012;5(4):868-877. PMID: 22895603.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests electrophysiological ion channel physics and genetic correlation with clinical situational triggers (swimming).",
      "distractorExclusionNotes": "Distractors specify alternative potassium currents (IKr, IK1, Ito, KATP) with distinct genetics and clinical presentations.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0610",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Brugada Syndrome Cardiac Sodium Channel Electrophysiology",
    "provisionalDifficulty": 4,
    "stem": "A 38-year-old Southeast Asian man is brought to the emergency department after experiencing nocturnal convulsive syncope witnessed by his wife. He has no prior medical history and takes no medications. On arrival, he is awake, alert, and asymptomatic with normal vital signs. A 12-lead ECG reveals an incomplete right bundle branch block pattern with coved, convex ST-segment elevation of 3 mm followed by negative T waves in leads V1 and V2 ('type 1 Brugada pattern'). Echocardiography reveals normal biventricular dimensions and preserved systolic function without structural heart disease. The underlying condition is most commonly linked to a loss-of-function mutation in which of the following cardiac ion channel subunits?",
    "choices": [
      [
        "Pore-forming alpha subunit of the voltage-gated cardiac sodium channel Nav1.5 encoded by SCN5A",
        "Brugada syndrome is an inherited channelopathy most commonly caused by loss-of-function mutations in SCN5A (encoding the cardiac Nav1.5 sodium channel alpha subunit), causing reduced phase 0 depolarization velocity and transmural voltage gradients in the right ventricular outflow tract epicardium."
      ],
      [
        "Beta-1 regulatory subunit of the L-type voltage-dependent calcium channel encoded by CACNB1",
        "CACNA1C or CACNB2 loss-of-function mutations can rarely cause short-QT syndrome or Brugada-like variants, but SCN5A Nav1.5 alpha subunit mutations are the classic, high-prevalence etiology tested on USMLE."
      ],
      [
        "Accessory beta subunit of the hyperpolarization-activated cyclic nucleotide-gated channel HCN4",
        "HCN4 mutations impair the sinoatrial node pacemaker funny current (If), causing familial sinus bradycardia or sick sinus syndrome, not coved ST elevation in V1-V2."
      ],
      [
        "Ryanodine receptor 2 (RyR2) intracellular calcium-release channel in the sarcoplasmic reticulum",
        "RyR2 mutations cause catecholaminergic polymorphic ventricular tachycardia (CPVT), which presents with exercise-induced bidirectional VT with a completely normal baseline resting ECG."
      ],
      [
        "Inward-rectifier potassium channel Kir2.1 alpha subunit encoded by the KCNJ2 gene",
        "KCNJ2 mutations cause Andersen-Tawil syndrome (LQT7) with dysmorphic features and prominent U waves, not type 1 Brugada ECG pattern."
      ]
    ],
    "shortestValidSolution": "Nocturnal syncope + coved ST elevation in V1-V2 (Brugada) = SCN5A loss-of-function -> Nav1.5 cardiac sodium channel.",
    "necessaryInference": "Identify the characteristic type 1 Brugada pattern (coved ST elevation in V1-V2 with negative T waves) and link to SCN5A loss of sodium channel function.",
    "strongestDistractor": "Ryanodine receptor 2 (RyR2) intracellular calcium-release channel in the sarcoplasmic reticulum",
    "distractorExclusion": "RyR2 mutations cause CPVT triggered by emotional stress or exercise with a normal baseline ECG, unlike the resting coved ST changes of Brugada syndrome.",
    "citation": "Antzelevitch C, et al. Brugada syndrome: from cell to bedside. Curr Probl Cardiol. 2016;41(1):7-57. PMID: 26671757.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires connecting clinical history (nocturnal syncope in Asian male) and pathognomonic ECG pattern to SCN5A sodium channel defect.",
      "distractorExclusionNotes": "Distractors feature channelopathies causing CPVT, sinus node dysfunction, or Andersen-Tawil syndrome.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0611",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Digoxin Toxicity Electrophysiology & Transporter Inhibition",
    "provisionalDifficulty": 5,
    "stem": "A 74-year-old woman with chronic atrial fibrillation and heart failure with reduced ejection fraction is evaluated for progressive nausea, anorexia, blurred vision with yellow halos around objects, and palpitations over the past 4 days. Her current medications include digoxin, furosemide, lisinopril, and carvedilol. Blood pressure is 102/66 mm Hg and heart rate is 54/min with frequent irregular premature beats. Laboratory studies reveal serum potassium 5.8 mEq/L (normal 3.5-5.0 mEq/L), serum creatinine 2.1 mg/dL, and a serum digoxin concentration of 3.8 ng/mL (therapeutic 0.5-0.9 ng/mL). ECG reveals sinus bradycardia with ventricular bigeminy and scooping of the ST segments. Which of the following electrophysiological mechanisms directly triggers the ventricular ectopic activity observed in this patient?",
    "choices": [
      [
        "Inhibition of the sarcolemmal Na+/K+-ATPase increases intracellular sodium, reducing NCX-mediated calcium extrusion and triggering delayed afterdepolarizations",
        "Digoxin binds the extracellular alpha subunit of sarcolemmal Na+/K+-ATPase, inhibiting it. Intracellular Na+ rises, decreasing the inward Na+ gradient driving the 3Na+/1Ca2+ exchanger (NCX), which elevates intracellular Ca2+. Sarcoplasmic reticulum Ca2+ overload causes spontaneous diastolic calcium waves activating transient inward currents, producing delayed afterdepolarizations (DADs) and ventricular bigeminy."
      ],
      [
        "Direct activation of sarcoplasmic reticulum ryanodine channels causes immediate depletion of junctional calcium stores during phase 0",
        "Digoxin does not directly stimulate ryanodine receptors; Ca2+ accumulation occurs secondary to reduced trans-sarcolemmal extrusion via the Na+/Ca2+ exchanger."
      ],
      [
        "Selective blockade of the inward L-type calcium current prolongs ventricular phase 2 plateau and triggers early afterdepolarizations",
        "Blockade of L-type calcium channels (e.g., verapamil) shortens the action potential plateau and suppresses DADs, whereas early afterdepolarizations (EADs) are triggered by long QT and potassium channel blockade."
      ],
      [
        "Stimulation of cardiac beta-1 adrenergic receptors increases intracellular cAMP and opens hyperpolarization-activated pacemaker channels",
        "Digoxin increases vagal (parasympathetic) tone at the AV node and central baroreceptors; it does not act as a beta-1 adrenergic agonist."
      ],
      [
        "Accelerated outward delayed-rectifier potassium conductance hyperpolarizes Purkinje fibers and prevents phase 4 automaticity",
        "Hyperpolarization stabilizes membrane potential and suppresses ectopy, whereas digoxin causes partial depolarization and spontaneous oscillatory DADs."
      ]
    ],
    "shortestValidSolution": "Digoxin toxicity + high K+ + ventricular bigeminy = Na+/K+-ATPase inhibition -> increased intracellular Ca2+ -> delayed afterdepolarizations (DADs).",
    "necessaryInference": "Differentiate afterdepolarizations: digoxin causes delayed afterdepolarizations (DADs) via intracellular calcium overload, distinct from EADs caused by long QT.",
    "strongestDistractor": "Selective blockade of the inward L-type calcium current prolongs ventricular phase 2 plateau and triggers early afterdepolarizations",
    "distractorExclusion": "Early afterdepolarizations (EADs) occur during phase 2 or 3 in long QT syndrome, whereas digoxin toxicity characteristically causes delayed afterdepolarizations (DADs) in phase 4.",
    "citation": "Yang EH, et al. Digoxin Toxicity: A Review. J Intensive Care Med. 2012;27(4):223-234. PMID: 21436170.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Comprehensive molecular electrophysiology of cardiac glycosides and cellular arrhythmogenesis.",
      "distractorExclusionNotes": "Distractors confuse DADs with EADs, beta-agonist mechanisms, or L-type channel blockade.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0612",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Adenosine Electrophysiological Mechanism in Supraventricular Tachycardia",
    "provisionalDifficulty": 4,
    "stem": "A 28-year-old woman presents to the emergency department complaining of sudden-onset rapid heart fluttering, lightheadedness, and throat tightness that began while climbing stairs. Blood pressure is 108/72 mm Hg. A 12-lead ECG displays a regular, narrow-complex tachycardia at a rate of 190/min with no visible P waves, consistent with atrioventricular nodal reentrant tachycardia (AVNRT). Carotid sinus massage fails to alter the rhythm. A rapid intravenous bolus of adenosine (6 mg) is administered through a large-bore antecubital vein followed by a saline flush. Within 15 seconds, the rhythm abruptly converts to normal sinus rhythm at 72/min. Which of the following intracellular signaling cascades mediates this rapid termination of tachycardia at the atrioventricular node?",
    "choices": [
      [
        "Activation of A1 adenosine G protein-coupled receptors stimulates Gi, decreasing intracellular cAMP, opening inward-rectifier K+ channels, and inhibiting L-type Ca2+ channels",
        "Adenosine binds cell-surface A1 purinergic receptors linked to Gi proteins. Gi activation inhibits adenylyl cyclase (lowering cAMP) and directly opens acetylcholine/adenosine-activated inward rectifier K+ channels (IKAdo), causing profound nodal hyperpolarization and blunting L-type Ca2+ current, transiently blocking AV nodal conduction."
      ],
      [
        "Activation of A2A receptors coupled to Gs stimulates adenylyl cyclase, opening hyperpolarization-activated cyclic nucleotide-gated channels",
        "A2A receptor activation increases cAMP via Gs and mediates coronary arteriolar vasodilation; A1 receptors on AV nodal tissue couple to Gi to suppress conduction."
      ],
      [
        "Stimulation of vascular smooth muscle purinergic P2X receptors triggers rapid intracellular inositol trisphosphate (IP3) generation",
        "P2X receptors are ligand-gated ion channels responsive to ATP, not adenosine, and do not mediate AV nodal electrophysiological slowing."
      ],
      [
        "Blockade of voltage-gated Nav1.5 channels prolongs the effective refractory period in the ventricular His-Purkinje conduction system",
        "Adenosine has negligible direct effects on ventricular Nav1.5 channels; its therapeutic antiarrhythmic actions are localized to the sinoatrial and atrioventricular nodes."
      ],
      [
        "Noncompetitive inhibition of acetylcholinesterase elevates synaptic acetylcholine concentrations to stimulate muscarinic M3 receptors",
        "Adenosine acts as a direct purinergic agonist at A1 receptors; it has no acetylcholinesterase inhibitor activity."
      ]
    ],
    "shortestValidSolution": "Adenosine bolus terminates AVNRT = A1 receptor coupled to Gi -> Opens K+ channels (hyperpolarization) + decreases cAMP/Ca2+ at AV node.",
    "necessaryInference": "Identify adenosine's specific receptor and second-messenger mechanism: A1 receptor via Gi opens outward K+ channels and suppresses L-type Ca2+ current.",
    "strongestDistractor": "Activation of A2A receptors coupled to Gs stimulates adenylyl cyclase, opening hyperpolarization-activated cyclic nucleotide-gated channels",
    "distractorExclusion": "A2A receptors couple to Gs to cause coronary vasodilation (used in cardiac stress testing), whereas AV nodal suppression is mediated by A1 receptors coupled to Gi.",
    "citation": "Layland J, et al. The role of adenosine in the cardiovascular system. Am J Cardiovasc Drugs. 2014;14(2):83-96. PMID: 24203305.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Differentiates purinergic receptor subtypes (A1 vs A2A vs P2X) and exact G-protein effector coupling at nodal tissue.",
      "distractorExclusionNotes": "Distractors confuse A1 Gi nodal effects with A2A Gs vascular effects or sodium channel blockade.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0613",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Class IC Antiarrhythmic Flecainide Use-Dependence Kinetics",
    "provisionalDifficulty": 5,
    "stem": "A 58-year-old man with paroxysmal atrial fibrillation and a structurally normal heart is prescribed oral flecainide for maintenance of sinus rhythm. Six months later, he undergoes an exercise stress test on a treadmill to evaluate fitness. At rest, his heart rate is 64/min and the QRS complex duration is 92 ms (normal < 100 ms). During peak exercise, his heart rate increases to 148/min, and the QRS complex duration widens to 138 ms without evidence of ischemic ST-segment depression or bundle branch block. Following 10 minutes of recovery, the heart rate returns to 68/min and the QRS duration normalizes to 94 ms. Which of the following biophysical properties of flecainide best accounts for this rate-dependent electrocardiographic phenomenon?",
    "choices": [
      [
        "Extremely slow dissociation kinetics from open and inactivated voltage-gated cardiac sodium channels produces cumulative channel blockade at higher heart rates (use-dependence)",
        "Class IC agents (flecainide, propafenone) bind avidly to fast voltage-gated Na+ channels and exhibit very slow dissociation kinetics (tau_recovery > 10 seconds). At fast heart rates, the diastolic interval is too short for drug unbinding, leading to progressive accumulation of blocked channels, slowed phase 0 conduction velocity, and rate-dependent QRS widening (use-dependence)."
      ],
      [
        "Selective blockade of the inward rectifying potassium current causes preferential action potential prolongation at elevated pacing rates",
        "Potassium channel blockers (Class III) exhibit reverse use-dependence, where QT prolongation is most marked at slow heart rates, not high heart rates."
      ],
      [
        "Voltage-dependent activation of delayed-rectifier potassium channels accelerates repolarization during sympathetic adrenergic excess",
        "Accelerating repolarization would shorten action potential duration and would not widen the QRS complex, which is a measure of ventricular depolarization velocity."
      ],
      [
        "Rapid dissociation kinetics from closed resting sodium channels prevents drug accumulation across shortened cardiac cycles",
        "Rapid dissociation kinetics is the hallmark of Class IB agents (lidocaine, mexiletine), which minimizes conduction slowing and prevents QRS widening."
      ],
      [
        "Competitive inhibition of beta-1 adrenergic receptors attenuates intracellular cAMP production selectively at peak exercise",
        "Flecainide has minimal beta-blocking activity (unlike propafenone); beta blockade slows heart rate but does not widen QRS complexes in a rate-dependent manner."
      ]
    ],
    "shortestValidSolution": "Flecainide causes QRS widening at high heart rates during exercise = Class IC slow dissociation from Na+ channels -> marked use-dependence.",
    "necessaryInference": "Distinguish antiarrhythmic kinetics: Class IC has the slowest dissociation kinetics (tau > 10s), manifesting classic use-dependence (QRS widening at faster rates).",
    "strongestDistractor": "Rapid dissociation kinetics from closed resting sodium channels prevents drug accumulation across shortened cardiac cycles",
    "distractorExclusion": "Rapid dissociation kinetics is the defining property of Class IB antiarrhythmics (lidocaine), explaining why they do not widen the QRS complex.",
    "citation": "Dan GA, et al. Antiarrhythmic drugs--clinical use and clinical decision making: a consensus document. Europace. 2018;20(5):731-732an. PMID: 29432556.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests quantitative biophysical concepts of drug-receptor unbinding kinetics and use-dependence on ECG intervals.",
      "distractorExclusionNotes": "Distractors describe Class IB rapid kinetics, Class III reverse use-dependence, or beta-blockade.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0614",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Class III Antiarrhythmic Reverse Use-Dependence & Torsades Risk",
    "provisionalDifficulty": 5,
    "stem": "A 64-year-old woman with persistent atrial fibrillation is admitted to the hospital to initiate oral dofetilide for pharmacological cardioversion. Continuous telemetry monitoring is established. Baseline ECG demonstrates atrial fibrillation with a ventricular rate of 110/min and a QTc interval of 420 ms. Twelve hours after the third dose, spontaneous sinus rhythm is restored, but her resting heart rate slows to 48/min due to sinus bradycardia. Simultaneous telemetry reveals marked prolongation of the QTc interval to 540 ms, accompanied by episodes of polymorphic ventricular tachycardia displaying twisting of the QRS complexes around the isoelectric line. Which of the following biophysical mechanisms explains why this patient experienced the greatest QT prolongation and proarrhythmic risk at slower heart rates?",
    "choices": [
      [
        "Blockade of the rapid delayed-rectifier potassium current (IKr) exhibits reverse use-dependence, prolonging action potential duration most prominently at slower heart rates",
        "Class III antiarrhythmics (dofetilide, sotalol) block the rapid delayed-rectifier K+ channel (IKr). They exhibit reverse use-dependence: at slow heart rates, the prolonged cardiac cycle allows greater fractional drug-channel interaction while physiological inward-rectifying currents are diminished, maximizing action potential duration, QT prolongation, and risk of early afterdepolarizations triggering torsades de pointes."
      ],
      [
        "Excessive use-dependent accumulation of blocked sodium channels slows phase 0 depolarization velocity during periods of profound bradycardia",
        "Use-dependent sodium channel blockade is accentuated at fast heart rates (Class IC), not at slow heart rates."
      ],
      [
        "Bradycardia-induced upregulation of the transient outward potassium current (Ito) abbreviates phase 1 repolarization",
        "Abbreviating phase 1 would shorten, rather than prolong, the action potential and would not promote torsades de pointes."
      ],
      [
        "Suppression of the inward sodium-calcium exchanger prevents diastolic calcium unloading during prolonged diastole",
        "IKr blockers do not primarily inhibit the sodium-calcium exchanger; prolonged action potential plateau allows L-type calcium channels to reactivate (early afterdepolarizations)."
      ],
      [
        "Downregulation of sarcoplasmic reticulum calcium-ATPase (SERCA2a) reduces systolic calcium transient amplitudes",
        "SERCA2a downregulation impairs diastolic relaxation (heart failure), but does not cause reverse use-dependent electrophysiological QT prolongation."
      ]
    ],
    "shortestValidSolution": "Dofetilide (Class III) + bradycardia + QTc 540 ms + torsades = Reverse use-dependence of IKr potassium channel blockade.",
    "necessaryInference": "Recognize reverse use-dependence: Class III drugs prolong action potentials most at slow heart rates, creating the greatest danger of EADs and torsades during bradycardia.",
    "strongestDistractor": "Excessive use-dependent accumulation of blocked sodium channels slows phase 0 depolarization velocity during periods of profound bradycardia",
    "distractorExclusion": "Sodium channel use-dependence is maximal at high heart rates (tachycardia), whereas reverse use-dependence of potassium channels is maximal at slow heart rates (bradycardia).",
    "citation": "Roden DM. Drug-induced prolongation of the QT interval. N Engl J Med. 2004;350(10):1013-1022. PMID: 14999113.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Contrasts use-dependence vs reverse use-dependence in the genesis of drug-induced torsades de pointes.",
      "distractorExclusionNotes": "Distractors confuse sodium channel use-dependence, SERCA2a, or Ito current changes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0615",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Sodium Nitroprusside Cyanide Toxicity Cellular Mechanism",
    "provisionalDifficulty": 5,
    "stem": "A 66-year-old man with severe acute aortic dissection is admitted to the intensive care unit. To achieve tight blood pressure control, a continuous intravenous infusion of sodium nitroprusside is administered at 8 microg/kg/min along with intravenous labetalol. Thirty-six hours into the infusion, the patient becomes increasingly confused, agitated, and tachypneic. Arterial blood gas shows: pH 7.18, PaCO2 26 mm Hg, PaO2 102 mm Hg, and serum bicarbonate 10 mEq/L. Serum lactate is markedly elevated at 11.2 mmol/L. Venous blood gas drawn from a central venous catheter demonstrates an abnormally high central venous oxygen saturation (ScvO2) of 88% (normal 65-75%). Which of the following mitochondrial enzymes is directly inhibited by the toxic metabolite responsible for this patient's clinical state?",
    "choices": [
      [
        "Cytochrome c oxidase (Complex IV) inhibited by binding of free cyanide to ferric iron (Fe3+)",
        "Sodium nitroprusside releases nitric oxide along with 5 cyanide ions per molecule. Cyanide binds with high affinity to ferric iron (Fe3+) in cytochrome c oxidase (Complex IV) of the mitochondrial electron transport chain, blocking oxygen utilization; tissues cannot extract oxygen, causing elevated venous oxygen saturation (ScvO2 > 85%) and severe lactic acidosis."
      ],
      [
        "NADH dehydrogenase (Complex I) inhibited by competitive displacement of flavin mononucleotide cofactors",
        "Complex I is inhibited by rotenone, piericidin A, and metformin (at high doses), not by cyanide ions generated from nitroprusside metabolism."
      ],
      [
        "Succinate dehydrogenase (Complex II) inhibited by structural mimicry of endogenous dicarboxylic acids",
        "Succinate dehydrogenase (Complex II) is inhibited by malonate; it contains iron-sulfur clusters but does not bind cyanide."
      ],
      [
        "ATP synthase (Complex V) inhibited by blockade of the proton-conducting Fo subunit channel",
        "ATP synthase (Complex V) is blocked by oligomycin, halting proton translocation, distinct from the Complex IV inhibition caused by cyanide."
      ],
      [
        "Pyruvate dehydrogenase complex inhibited by covalent modification of lipoic acid sulfhydryl residues",
        "Arsenic inhibits the pyruvate dehydrogenase complex by binding lipoic acid sulfhydryl groups, not cyanide from sodium nitroprusside."
      ]
    ],
    "shortestValidSolution": "High-dose nitroprusside + severe lactic acidosis + high venous O2 sat (88%) = Cyanide toxicity -> Cytochrome c oxidase (Complex IV) Fe3+ inhibition.",
    "necessaryInference": "Interpret the high venous O2 saturation (tissues cannot extract oxygen despite adequate delivery) as classical histotoxic hypoxia from cyanide inhibition of Complex IV.",
    "strongestDistractor": "Pyruvate dehydrogenase complex inhibited by covalent modification of lipoic acid sulfhydryl residues",
    "distractorExclusion": "Lipoic acid sulfhydryl cross-linking is the specific mechanism of arsenic toxicity, whereas cyanide specifically coordinates ferric heme in Complex IV.",
    "citation": "Hall AH, et al. Cyanide poisoning: an update on pharmacology and management. Emerg Med Clin North Am. 2014;32(1):191-201. PMID: 24275176.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates clinical toxicology (nitroprusside infusion), acid-base physiology (lactic acidosis with high ScvO2), and mitochondrial biochemistry.",
      "distractorExclusionNotes": "Distractors list other electron transport chain inhibitors (rotenone, malonate, oligomycin) and arsenic.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0616",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Hydralazine-Induced Lupus Erythematosus Pharmacogenetics",
    "provisionalDifficulty": 4,
    "stem": "A 52-year-old woman with chronic kidney disease and refractory hypertension managed with hydralazine, amlodipine, and metoprolol presents with a 6-week history of low-grade fevers, fatigue, symmetrical arthralgias involving both wrists and proximal interphalangeal joints, and pleuritic chest pain. Physical examination demonstrates bilateral wrist synovitis and a pericardial friction rub. Laboratory evaluation reveals antinuclear antibodies (ANA) positive at a titer of 1:640 (homogeneous pattern) and high-titer anti-histone antibodies (>8.0 units, normal < 1.0). Antibodies against double-stranded DNA (anti-dsDNA) and anti-Smith are negative. Genetic testing demonstrates that this patient is homozygous for an allele encoding a slow-metabolizing variant of which of the following hepatic enzymes?",
    "choices": [
      [
        "N-acetyltransferase 2 (NAT2) responsible for Phase II acetylation of aromatic amine and hydrazine drugs",
        "Hydralazine is metabolized in the liver via Phase II acetylation by N-acetyltransferase 2 (NAT2). Individuals who are homozygous slow acetylators accumulate higher concentrations of parent hydralazine and its reactive macromolecular adducts, dramatically increasing the risk of drug-induced lupus erythematosus characterized by anti-histone antibodies."
      ],
      [
        "Cytochrome P450 2D6 (CYP2D6) mediating oxidative dealkylation of lipophilic basic compounds",
        "CYP2D6 metabolizes codeine, metoprolol, and tamoxifen; it is not the primary determinant of hydralazine clearance or drug-induced lupus."
      ],
      [
        "Thiopurine S-methyltransferase (TPMT) catalyzing S-methylation of heterocyclic thiopurines",
        "TPMT metabolizes 6-mercaptopurine and azathioprine; its deficiency leads to fatal myelosuppression with thiopurines, not drug-induced lupus."
      ],
      [
        "Uridine 5'-diphospho-glucuronosyltransferase 1A1 (UGT1A1) conjugating lipophilic bilirubin into glucuronides",
        "UGT1A1 deficiency causes Gilbert or Crigler-Najjar syndromes and predisposes to irinotecan toxicity, not hydralazine lupus."
      ],
      [
        "Dihydropyrimidine dehydrogenase (DPD) mediating rate-limiting catabolism of fluoropyrimidine antimetabolites",
        "DPD deficiency causes severe neurotoxicity and myelosuppression upon exposure to 5-fluorouracil or capecitabine."
      ]
    ],
    "shortestValidSolution": "Hydralazine + fever/arthralgias/pleurisy + anti-histone Abs = Drug-induced lupus -> Slow acetylator via N-acetyltransferase 2 (NAT2).",
    "necessaryInference": "Correlate drug-induced lupus with pharmacogenetic metabolism: hydralazine undergoes hepatic Phase II acetylation via NAT2; slow acetylators accumulate drug.",
    "strongestDistractor": "Cytochrome P450 2D6 (CYP2D6) mediating oxidative dealkylation of lipophilic basic compounds",
    "distractorExclusion": "CYP2D6 metabolizes metoprolol (which the patient takes), but metoprolol does not cause anti-histone lupus; hydralazine is cleared by NAT2.",
    "citation": "Vaglio A, et al. Drug-induced lupus: pathogenesis and clinical features. Nat Rev Rheumatol. 2018;14(5):269-279. PMID: 29622809.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests classical pharmacogenetics of phase II drug metabolism linked to autoimmune presentation.",
      "distractorExclusionNotes": "Distractors feature CYP2D6, TPMT, UGT1A1, and DPD, which govern other well-known pharmacogenetic syndromes.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0617",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Carvedilol Hemodynamic Receptor Binding Profile",
    "provisionalDifficulty": 5,
    "stem": "A 61-year-old man with ischemic cardiomyopathy and a left ventricular ejection fraction of 28% is started on carvedilol as part of guideline-directed medical therapy. Invasive hemodynamic monitoring performed during drug titration reveals a dose-dependent decrease in mean arterial pressure, a reduction in systemic vascular resistance (afterload), a reduction in pulmonary capillary wedge pressure (preload), and a decrease in heart rate, with preservation of stroke volume. Which of the following receptor binding profiles accurately explains this combined vasodilatory and cardioprotective hemodynamic response?",
    "choices": [
      [
        "Competitive antagonism of vascular alpha-1 adrenergic receptors combined with nonselective beta-1 and beta-2 adrenergic receptor blockade",
        "Carvedilol is a nonselective third-generation beta-blocker that competitively antagonizes beta-1 and beta-2 receptors while simultaneously blocking vascular smooth muscle alpha-1 receptors, producing peripheral vasodilation (reduced afterload and preload) while protecting the myocardium against catecholamine toxicity."
      ],
      [
        "Selective beta-1 adrenergic blockade with intrinsic sympathomimetic partial agonist activity at vascular beta-2 receptors",
        "Beta-blockers with intrinsic sympathomimetic activity (ISA) like pindolol or acebutolol are contraindicated in heart failure because partial agonism increases adverse cardiac events."
      ],
      [
        "Selective beta-1 adrenergic blockade accompanied by endothelial nitric oxide synthase (eNOS) stimulation",
        "Nebivolol is the beta-1 selective blocker that stimulates endothelial nitric oxide synthase (eNOS) via beta-3 receptor agonism, distinct from carvedilol's alpha-1 antagonism."
      ],
      [
        "Direct vascular smooth muscle ATP-sensitive potassium channel opening combined with selective cardiac beta-1 antagonism",
        "KATP channel opening is the mechanism of minoxidil and nicorandil, not carvedilol."
      ],
      [
        "Selective alpha-2 adrenergic receptor agonism in the medullary vasomotor center reducing central sympathetic outflow",
        "Central alpha-2 agonism is the mechanism of clonidine and methyldopa, which do not possess direct peripheral beta-blocking properties."
      ]
    ],
    "shortestValidSolution": "Carvedilol in HFrEF = Nonselective beta-blocker (beta-1 + beta-2) + alpha-1 adrenergic antagonist (vasodilation).",
    "necessaryInference": "Distinguish 3rd-generation beta-blockers: carvedilol provides alpha-1 mediated vasodilation; nebivolol provides eNOS/NO-mediated vasodilation.",
    "strongestDistractor": "Selective beta-1 adrenergic blockade accompanied by endothelial nitric oxide synthase (eNOS) stimulation",
    "distractorExclusion": "Stimulation of eNOS is the specific vasodilatory mechanism of nebivolol, whereas carvedilol causes vasodilation via competitive alpha-1 adrenergic antagonism.",
    "citation": "Packer M, et al. Effect of carvedilol on survival in severe chronic heart failure. N Engl J Med. 2001;344(22):1651-1658. PMID: 11386263.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Requires precise discrimination between third-generation beta-blocker mechanisms (carvedilol vs nebivolol vs labetalol).",
      "distractorExclusionNotes": "Distractors feature nebivolol's eNOS mechanism, ISA drugs, KATP openers, or central alpha-2 agonists.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0618",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Dobutamine Inotropic vs Chronotropic Gs Signaling Thresholds",
    "provisionalDifficulty": 5,
    "stem": "A 68-year-old man is admitted to the cardiac intensive care unit with acute decompensated heart failure and cardiogenic shock following an extensive anterior myocardial infarction. Blood pressure is 82/58 mm Hg, heart rate is 96/min, and cardiac index is severely depressed at 1.6 L/min/m2 (normal > 2.2). Pulmonary capillary wedge pressure is 26 mm Hg. A continuous intravenous infusion of dobutamine is initiated at a low-to-moderate rate (5 microg/kg/min). Within 30 minutes, cardiac output increases substantially with a modest decrease in systemic vascular resistance and minimal change in heart rate (98/min). Which of the following intracellular biochemical pathways mediates this predominant inotropic enhancement over chronotropic acceleration?",
    "choices": [
      [
        "Preferential stimulation of myocardial beta-1 adrenergic receptors coupled to Gs, increasing adenylyl cyclase activity, intracellular cAMP, and protein kinase A-mediated phosphorylation of phospholamban and L-type calcium channels",
        "Dobutamine is a synthetic catecholamine with predominant beta-1 agonist activity. It stimulates Gs to activate adenylyl cyclase, raising cAMP and activating protein kinase A (PKA). PKA phosphorylates L-type Ca2+ channels (increasing Ca2+ influx and contractility) and phospholamban (accelerating SERCA2a Ca2+ reuptake and relaxation), providing strong inotropy with mild vasodilatory balance (beta-2 > alpha-1) and minimal tachycardia at lower doses."
      ],
      [
        "Selective inhibition of type III phosphodiesterase prevents breakdown of cyclic adenosine monophosphate in vascular and cardiac myocytes",
        "PDE-3 inhibition is the mechanism of milrinone, an inodilator, not the direct adrenergic receptor agonist dobutamine."
      ],
      [
        "Activation of vascular alpha-1 adrenergic receptors coupled to Gq stimulates phospholipase C and inositol trisphosphate-mediated vasoconstriction",
        "Alpha-1 stimulation causes vasoconstriction, which would increase afterload and systemic vascular resistance, opposite to dobutamine's profile."
      ],
      [
        "Direct binding to cardiac troponin C increases its calcium-binding affinity without altering intracellular cyclic nucleotide levels",
        "Calcium sensitization of troponin C is the mechanism of levosimendan, an experimental inotrope, not the catecholamine dobutamine."
      ],
      [
        "Stimulation of myocardial beta-3 adrenergic receptors coupled to Gi promotes nitric oxide release and blunts chronotropy",
        "Beta-3 stimulation mediates negative inotropy and metabolic lipolysis; dobutamine operates via beta-1 Gs activation."
      ]
    ],
    "shortestValidSolution": "Dobutamine in cardiogenic shock = Beta-1 agonist via Gs -> Adenylyl cyclase -> cAMP -> PKA phosphorylation of Ca2+ channels/phospholamban.",
    "necessaryInference": "Recognize the intracellular signaling mechanism of dobutamine: beta-1 Gs adenylyl cyclase pathway enhancing both contractility (inotropy) and relaxation (lusitropy).",
    "strongestDistractor": "Selective inhibition of type III phosphodiesterase prevents breakdown of cyclic adenosine monophosphate in vascular and cardiac myocytes",
    "distractorExclusion": "Milrinone is a PDE-3 inhibitor; dobutamine is a direct beta-adrenergic receptor agonist.",
    "citation": "Francis GS, et al. Inotropic agents in the treatment of heart failure. J Am Coll Cardiol. 2014;63(20):2069-2078. PMID: 24657688.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular pharmacology of inotropic therapy in cardiogenic shock, distinguishing direct adrenergic agonists from PDE inhibitors.",
      "distractorExclusionNotes": "Distractors feature milrinone (PDE-3), levosimendan (calcium sensitizer), or alpha-1 vasoconstriction.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0619",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Ivabradine Sinoatrial Node Pacemaker Current Inhibition",
    "provisionalDifficulty": 4,
    "stem": "A 65-year-old man with chronic heart failure with reduced ejection fraction (LVEF 30%) remains symptomatic (NYHA class III) with a resting sinus heart rate of 82/min despite maximally tolerated doses of carvedilol, sacubitril/valsartan, spironolactone, and dapagliflozin. His blood pressure is 108/68 mm Hg. The cardiologist adds oral ivabradine to his regimen. Six weeks later, his resting heart rate decreases to 64/min while his blood pressure, left ventricular contractility, and PR interval remain unchanged. Which of the following electrophysiological channels is selectively inhibited by this medication?",
    "choices": [
      [
        "Hyperpolarization-activated cyclic nucleotide-gated (HCN) channels in the sinoatrial node, reducing the slope of spontaneous phase 4 diastolic depolarization",
        "Ivabradine selectively inhibits hyperpolarization-activated cyclic nucleotide-gated (HCN) channels responsible for the mixed inward Na+/K+ 'funny' current (If) in sinoatrial nodal pacemaker cells. This slows the rate of spontaneous phase 4 diastolic depolarization, decreasing heart rate without affecting myocardial contractility, ventricular repolarization, or systemic vascular resistance."
      ],
      [
        "T-type voltage-gated calcium channels mediating the late phase 4 depolarization threshold in AV nodal myocytes",
        "T-type Ca2+ channels (Cav3.1/Cav3.2) contribute to late pacemaker depolarization, but are blocked by mibefradil, not ivabradine."
      ],
      [
        "L-type voltage-gated calcium channels responsible for the upstroke of the sinoatrial node action potential",
        "L-type calcium channels (Cav1.2) are blocked by diltiazem and verapamil, which reduce myocardial contractility (negative inotropy) and slow AV conduction, unlike ivabradine."
      ],
      [
        "Slow delayed-rectifier potassium channels mediating phase 3 repolarization of atrial myocardium",
        "Inhibiting delayed-rectifier K+ channels prolongs repolarization and the QT interval (Class III effect); ivabradine has no effect on repolarization."
      ],
      [
        "Fast voltage-gated sodium channels in atrial myocardium suppressing phase 0 depolarization velocity",
        "Fast Na+ channels mediate phase 0 in working myocardium (Class I antiarrhythmics); nodal pacemaker action potentials lack fast phase 0 sodium currents."
      ]
    ],
    "shortestValidSolution": "Ivabradine lowers heart rate without lowering BP or contractility = Selective inhibition of HCN funny channels (If) in SA node.",
    "necessaryInference": "Identify ivabradine's unique mechanism: pure negative chronotropy via SA node HCN channel (If) blockade with zero effect on inotropy or blood pressure.",
    "strongestDistractor": "L-type voltage-gated calcium channels responsible for the upstroke of the sinoatrial node action potential",
    "distractorExclusion": "Non-dihydropyridine calcium channel blockers inhibit L-type calcium channels, causing negative inotropy and hypotension, which ivabradine does not produce.",
    "citation": "Swedberg K, et al. Ivabradine and outcomes in chronic heart failure (SHIFT). Lancet. 2010;376(9744):875-885. PMID: 20801500.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Contrasts pure sinus node funny channel inhibition from calcium channel and beta-blocker pharmacology.",
      "distractorExclusionNotes": "Distractors feature L-type, T-type calcium channels, potassium repolarizing channels, or fast sodium channels.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0620",
    "exam": "Step 1",
    "subject": "Pharmacology",
    "system": "Cardiovascular",
    "topic": "Sacubitril/Valsartan Dual Neurohormonal Modulation Mechanisms",
    "provisionalDifficulty": 5,
    "stem": "A 59-year-old woman with chronic heart failure with reduced ejection fraction (LVEF 25%) is switched from lisinopril to sacubitril/valsartan. Lisinopril is stopped 36 hours prior to the first dose of the new medication. Following 3 months of therapy, she reports significant improvement in exercise tolerance. Repeat echocardiography reveals an increase in LVEF to 34% and reduced left ventricular end-diastolic volume. Laboratory monitoring shows an increase in circulating atrial natriuretic peptide (ANP) and bradykinin, with normal renal function. Which of the following enzymatic targets is directly inhibited by the sacubitril component of this drug combination?",
    "choices": [
      [
        "Neprilysin (neutral endopeptidase), preventing the enzymatic degradation of endogenous natriuretic peptides, bradykinin, and adrenomedullin",
        "Sacubitril is a prodrug whose active metabolite (sacubitrilat) inhibits neprilysin, a neutral endopeptidase responsible for the degradation of vasoactive peptides including ANP, BNP, CNP, and bradykinin. Elevated natriuretic peptides promote natriuresis, vasodilation, and antifibrotic remodeling. Neprilysin also degrades angiotensin II, necessitating co-administration with an ARB (valsartan)."
      ],
      [
        "Angiotensin-converting enzyme (ACE), blocking the conversion of angiotensin I to bioactive angiotensin II",
        "ACE is inhibited by drugs like lisinopril; concurrent use with sacubitril is contraindicated due to severe angioedema risk, requiring a mandatory 36-hour washout."
      ],
      [
        "Endothelin-converting enzyme, blocking the generation of mature endothelin-1 from big endothelin",
        "Endothelin-converting enzyme inhibitors (e.g., daglutril) are experimental agents and are not the target of sacubitril."
      ],
      [
        "Renin, preventing the rate-limiting cleavage of circulating angiotensinogen to angiotensin I",
        "Renin is directly inhibited by aliskiren, not sacubitril."
      ],
      [
        "Phosphodiesterase-5 (PDE-5), preventing the enzymatic hydrolysis of cyclic guanosine monophosphate",
        "PDE-5 is inhibited by sildenafil and tadalafil, which act downstream of natriuretic peptide/NO signaling, not neprilysin."
      ]
    ],
    "shortestValidSolution": "Sacubitril component of ARNI = Neprilysin inhibitor -> Prevents breakdown of ANP, BNP, and bradykinin.",
    "necessaryInference": "Identify the target of sacubitril (neprilysin) and understand why a 36-hour washout from ACE inhibitors is mandatory (both raise bradykinin, risking angioedema).",
    "strongestDistractor": "Angiotensin-converting enzyme (ACE), blocking the conversion of angiotensin I to bioactive angiotensin II",
    "distractorExclusion": "ACE is the target of lisinopril; combining an ACE inhibitor with sacubitril is strictly contraindicated due to synergistic accumulation of bradykinin causing severe angioedema.",
    "citation": "McMurray JJ, et al. Angiotensin-neprilysin inhibition versus enalapril in heart failure (PARADIGM-HF). N Engl J Med. 2014;371(11):993-1004. PMID: 25176015.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Evaluates the dual-mechanism neurohormonal pharmacology of ARNI therapy and the biochemical basis for the ACEi washout requirement.",
      "distractorExclusionNotes": "Distractors list ACE, renin, endothelin-converting enzyme, and PDE-5.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0621",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Cardiovascular",
    "topic": "Patent Foramen Ovale Paradoxical Embolism Hemodynamics",
    "provisionalDifficulty": 5,
    "stem": "A 34-year-old woman presents to the emergency department with acute right-sided hemiparesis and facial droop that developed abruptly while straining during a bowel movement. Brain MRI demonstrates an acute ischemic infarction in the left middle cerebral artery territory. Duplex ultrasound of the lower extremities demonstrates an occlusive deep venous thrombosis involving the right popliteal and superficial femoral veins. Transthoracic echocardiography with intravenous agitated saline (bubble study) demonstrates the rapid appearance of microbubbles in the left atrium within two cardiac cycles following the release phase of a provocative Valsalva maneuver. Which of the following embryological and physiological events explains this paradoxical embolic phenomenon?",
    "choices": [
      [
        "Failure of fusion between the septum primum and septum secundum allows transient right-to-left shunting when right atrial pressure exceeds left atrial pressure during Valsalva release",
        "A patent foramen ovale (PFO) occurs when the septum primum and septum secundum fail to fuse after birth. Normally, higher left atrial pressure keeps the flap closed. However, straining (Valsalva release) transiently elevates right atrial pressure above left atrial pressure, opening the flap and allowing a venous thromboembolus to cross directly into systemic arterial circulation (paradoxical embolus)."
      ],
      [
        "Excessive resorption of the septum primum creates a widely non-restrictive ostium secundum defect with permanent left-to-right shunting",
        "Ostium secundum ASD results from excessive resorption of the septum primum or deficient septum secundum, but ASDs feature continuous, fixed left-to-right shunts without flap-valve mechanics."
      ],
      [
        "Complete failure of endocardial cushion development in the lower interatrial septum producing an ostium primum defect",
        "Ostium primum ASD involves endocardial cushion defects (associated with Down syndrome) and cleft mitral valve, not an isolated flap-valve PFO."
      ],
      [
        "Persistence of the left superior vena cava draining directly into the left atrium produces permanent obligatory systemic desaturation",
        "Persistent left SVC draining to the left atrium causes cyanosis and is an unroofed coronary sinus variant, not a common transient right-to-left shunt."
      ],
      [
        "Premature closure of the foramen ovale in utero leading to right ventricular hypoplasia and subsequent retrograde left-to-right flow",
        "Premature foramen ovale closure in utero causes hypoplastic right heart syndrome or fetal demise, not adult paradoxical embolism."
      ]
    ],
    "shortestValidSolution": "DVT + stroke during Valsalva + bubbles in LA < 3 cycles = PFO -> Incomplete fusion of septum primum and septum secundum.",
    "necessaryInference": "Differentiate PFO (failure of septum primum and secundum to fuse, forming a valve-like flap opened by Valsalva) from true atrial septal defects (tissue absence).",
    "strongestDistractor": "Excessive resorption of the septum primum creates a widely non-restrictive ostium secundum defect with permanent left-to-right shunting",
    "distractorExclusion": "Ostium secundum ASD involves permanent anatomical deficiency with fixed split S2 and continuous left-to-right shunt, unlike the transient pressure-dependent flap of PFO.",
    "citation": "Saver JL, et al. Long-Term Outcomes of Patent Foramen Ovale Closure or Medical Therapy after Stroke. N Engl J Med. 2017;377(11):1022-1032. PMID: 28902587.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Integrates embryology, intracardiac pressure dynamics during Valsalva, and clinical neurology/vascular pathology.",
      "distractorExclusionNotes": "Distractors confuse PFO with true ASDs (secundum, primum), persistent left SVC, or in utero closure.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0622",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Cardiovascular",
    "topic": "Aortic Dissection Stanford Type A Pathogenesis & Histology",
    "provisionalDifficulty": 4,
    "stem": "A 54-year-old man presents to the emergency department with sudden-onset, agonizing retrosternal chest pain that he describes as 'tearing' and radiating directly between his shoulder blades. Blood pressure is 188/104 mm Hg in the right arm and 142/84 mm Hg in the left arm. A soft, early diastolic decrescendo murmur is heard along the right sternal border. Contrast-enhanced chest CT confirms a Stanford type A aortic dissection originating 1.5 cm above the aortic valve and propagating into the aortic arch. Emergency surgical resection of the ascending aorta is performed. Histopathologic examination of the excised aortic wall most likely demonstrates which of the following microscopic changes?",
    "choices": [
      [
        "Fragmentation of elastic lamellae and loss of vascular smooth muscle cells in the tunica media with accumulation of basophilic ground substance (cystic medial necrosis)",
        "The primary predisposing histopathology for Stanford type A aortic dissection is cystic medial necrosis (degeneration), characterized by fragmentation of elastin fibers, loss of vascular smooth muscle cells, and extracellular accumulation of basophilic mucoid/proteoglycan ground substance in the tunica media, weakening wall tensile strength."
      ],
      [
        "Transmural granulomatous inflammation with multinucleated giant cells and disruption of the internal elastic lamina",
        "Transmural granulomatous inflammation with giant cells defines Giant Cell Arteritis or Takayasu arteritis, which typically affects temporal/cranial or subclavian branches in specific demographic cohorts."
      ],
      [
        "Transmural necrotizing inflammation with prominent fibrinoid necrosis and sparing of the internal elastic lamina",
        "Fibrinoid necrosis is characteristic of Polyarteritis Nodosa (PAN), which affects medium-sized muscular visceral arteries and spares the aorta."
      ],
      [
        "Dense adventitial fibrotic thickening with lymphoplasmacytic cuffing around the vasa vasorum leading to obliterative endarteritis",
        "Obliterative endarteritis of the vasa vasorum with 'tree-bark' appearance defines syphilitic (luetic) aortitis, which primarily causes ascending aortic aneurysms rather than acute Stanford A dissection."
      ],
      [
        "Extensive lipid-laden foam cell accumulation within the fibrous cap of an eroded calcified subintimal plaque",
        "Atherosclerosis involves the tunica intima and predisposes to abdominal aortic aneurysms or penetrating atherosclerotic ulcers, but classic ascending aortic dissection arises from medial degeneration."
      ]
    ],
    "shortestValidSolution": "Tearing chest pain + unequal arm BPs + aortic regurgitation = Stanford A dissection -> Cystic medial necrosis (elastin fragmentation, smooth muscle loss).",
    "necessaryInference": "Identify the primary microscopic lesion of the aortic media predisposing to acute dissection: cystic medial degeneration (elastin breakdown, smooth muscle apoptosis, basophilic ground substance).",
    "strongestDistractor": "Dense adventitial fibrotic thickening with lymphoplasmacytic cuffing around the vasa vasorum leading to obliterative endarteritis",
    "distractorExclusion": "Obliterative endarteritis of the vasa vasorum defines tertiary syphilitic aortitis, which typically presents with thoracic aortic aneurysm rather than acute spontaneous dissection.",
    "citation": "Nienaber CA, et al. Aortic dissection. Nat Rev Dis Primers. 2016;2:16053. PMID: 27552504.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Demands histological discrimination between cystic medial necrosis, vasculitides (GCA, PAN), syphilitic aortitis, and atherosclerosis.",
      "distractorExclusionNotes": "Distractors describe giant cell arteritis, polyarteritis nodosa, syphilitic aortitis, and atherosclerosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0623",
    "exam": "Step 1",
    "subject": "Physiology",
    "system": "Cardiovascular",
    "topic": "Coronary Blood Flow Autoregulation & Metabolic Vasodilators",
    "provisionalDifficulty": 5,
    "stem": "A medical student is studying coronary microvascular physiology in an isolated working mammalian heart preparation. During periods of increased cardiac work induced by rapid pacing and adrenergic stimulation, coronary blood flow increases fourfold to match myocardial oxygen consumption, maintaining an exceptionally high myocardial oxygen extraction ratio (75-80%). Pharmacologic administration of an adenosine receptor antagonist blunts this exercise-induced hyperemic response by approximately 35%. Which of the following biochemical reactions is the primary source of the extracellular adenosine that mediates this physiological metabolic vasodilation?",
    "choices": [
      [
        "Dephosphorylation of cytosolic AMP by 5'-nucleotidase during periods of high myocardial ATP hydrolysis",
        "Under high myocardial workload, rapid ATP consumption exceeds mitochondrial resynthesis, elevating intracellular ADP and AMP. Cytosolic 5'-nucleotidase dephosphorylates 5'-AMP into adenosine, which exits cardiomyocytes via equilibrative nucleoside transporters into the interstitial space to bind vascular A2A receptors, stimulating vasodilation."
      ],
      [
        "Direct hydrolytic cleavage of S-adenosylmethionine by glycine N-methyltransferase in vascular endothelium",
        "S-adenosylmethionine (SAM) metabolism yields S-adenosylhomocysteine and homocysteine; it is not the rapid metabolic source of adenosine during myocardial work."
      ],
      [
        "Oxidative deamination of adenine by adenosine deaminase located within the mitochondrial matrix",
        "Adenosine deaminase breaks down adenosine into inosine (inactivating it); it does not synthesize adenosine from adenine."
      ],
      [
        "Enzymatic degradation of cyclic guanosine monophosphate (cGMP) by phosphodiesterase-5",
        "PDE-5 degrades cGMP to 5'-GMP, which has no relationship to adenosine generation."
      ],
      [
        "Decarboxylation of histidine to histamine by mast cell L-histidine decarboxylase",
        "Histamine release is an inflammatory mediator, not the physiological metabolic autoregulatory vasodilator in exercising myocardium."
      ]
    ],
    "shortestValidSolution": "Exercise coronary vasodilation = High ATP breakdown -> High AMP -> 5'-nucleotidase dephosphorylates AMP to adenosine.",
    "necessaryInference": "Link myocardial metabolic demand to vascular tone: ATP breakdown produces AMP, which is converted to adenosine by 5'-nucleotidase to dilate coronary arterioles.",
    "strongestDistractor": "Oxidative deamination of adenine by adenosine deaminase located within the mitochondrial matrix",
    "distractorExclusion": "Adenosine deaminase catabolizes adenosine to inosine (terminating its signaling); it does not synthesize adenosine.",
    "citation": "Duncker DJ, Bache RJ. Regulation of coronary blood flow during exercise. Physiol Rev. 2008;88(3):1009-1086. PMID: 18626066.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests cellular bioenergetics of nucleotide degradation and local metabolic autoregulation in the coronary circulation.",
      "distractorExclusionNotes": "Distractors feature adenosine catabolism, SAM methylation, PDE-5, or histamine.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0624",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Cardiovascular",
    "topic": "Myocardial Hibernation vs Stunning Functional Recovery",
    "provisionalDifficulty": 4,
    "stem": "A 66-year-old man with triple-vessel coronary artery disease and chronic angina presents for evaluation. Echocardiography demonstrates severe anterior and apical wall hypokinesis with a left ventricular ejection fraction of 32%. A dobutamine stress echocardiogram reveals viable myocardium with marked improvement in regional wall motion in the hypokinetic segments during low-dose dobutamine infusion. An 18F-fluorodeoxyglucose (FDG) PET-CT scan demonstrates matched reduction in resting perfusion with preserved or increased FDG uptake in the anterior and apical myocardium ('metabolic-perfusion mismatch'). Three months after undergoing successful coronary artery bypass grafting (CABG), repeat echocardiography demonstrates complete normalization of anterior wall motion and improvement of LVEF to 52%. Which of the following pathophysiological terms best describes the preoperative state of this patient's myocardium?",
    "choices": [
      [
        "Hibernating myocardium, representing chronic reversible contractile dysfunction secondary to sustained baseline hypoperfusion that recovers following surgical revascularization",
        "Hibernating myocardium refers to chronic, persistent myocardial contractile dysfunction caused by chronically reduced resting coronary blood flow. Cardiomyocytes downregulate contractile function and switch metabolism to anaerobic glycolysis (seen as preserved FDG uptake on PET) to match oxygen supply and avoid necrosis; function is restored upon revascularization."
      ],
      [
        "Stunned myocardium, representing prolonged post-ischemic contractile dysfunction that persists for days despite fully restored resting coronary blood flow",
        "Stunned myocardium refers to transient, reversible mechanical dysfunction that persists after a brief, acute ischemic insult despite complete and timely restoration of baseline coronary perfusion (e.g., post-successful PCI for STEMI)."
      ],
      [
        "Myocardial scar, characterized by irreversible dense collagenous replacement of necrotic myocytes refractory to metabolic revascularization",
        "Myocardial scar is non-viable tissue showing fixed defects on both perfusion and FDG PET imaging with no contractile reserve during dobutamine challenge."
      ],
      [
        "Ischemic preconditioning, representing short repeated sublethal episodes of ischemia that protect myocytes against subsequent prolonged infarction",
        "Ischemic preconditioning is an endogenous protective signaling cascade (via adenosine and KATP channels), not a chronic hypokinetic state demonstrated on resting echocardiography."
      ],
      [
        "Contraction band necrosis, reflecting hypercontraction and reperfusion injury caused by massive calcium influx into lethally damaged cardiomyocytes",
        "Contraction band necrosis is a histopathologic hallmark of irreversible lethal reperfusion injury after acute myocardial infarction."
      ]
    ],
    "shortestValidSolution": "Chronic ischemia + FDG PET mismatch (viable) + wall motion normalizes post-CABG = Hibernating myocardium.",
    "necessaryInference": "Differentiate hibernating from stunned myocardium: hibernation is chronic hypoperfusion restored by revascularization; stunning is transient dysfunction despite already restored perfusion.",
    "strongestDistractor": "Stunned myocardium, representing prolonged post-ischemic contractile dysfunction that persists for days despite fully restored resting coronary blood flow",
    "distractorExclusion": "Stunned myocardium has restored baseline perfusion but delayed mechanical recovery; hibernating myocardium has reduced resting flow that requires revascularization to recover.",
    "citation": "Camici PG, et al. Stunning, hibernation, and assessment of myocardial viability. Circulation. 2008;117(1):103-114. PMID: 18172050.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Tests nuclear medicine imaging physiology (FDG-PET perfusion mismatch) and functional definition of myocardial viability.",
      "distractorExclusionNotes": "Distractors differentiate stunning, scar, preconditioning, and contraction band necrosis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s1-0625",
    "exam": "Step 1",
    "subject": "Pathology",
    "system": "Cardiovascular",
    "topic": "Transthyretin Cardiac Amyloidosis Microscopic Pathology",
    "provisionalDifficulty": 5,
    "stem": "An 76-year-old man presents with progressive exertional dyspnea, orthopnea, bilateral lower-extremity edema, and bilateral carpal tunnel syndrome that was surgically released 6 years ago. Physical examination reveals elevated jugular venous pressure, bilateral pitting ankle edema, and an S4 gallop. A 12-lead ECG demonstrates sinus rhythm with low voltage in the limb leads (< 5 mm amplitude) despite echocardiography revealing severe concentric left ventricular wall thickening (interventricular septum 18 mm) with a 'sparkling' granular myocardial texture and biatrial enlargement. An endomyocardial biopsy is performed. Which of the following histopathological staining characteristics confirms the definitive diagnosis in this patient?",
    "choices": [
      [
        "Amorphous extracellular eosinophilic deposits that exhibit bright apple-green birefringence under cross-polarized light microscopy after Congo red staining",
        "Cardiac amyloidosis (transthyretin [ATTR] or AL) is characterized by extracellular deposition of insoluble fibrillar protein aggregates in the myocardial interstitium. On light microscopy, it appears as amorphous, extracellular eosinophilic material on H&E; Congo red staining produces a pathognomonic bright apple-green birefringence when viewed under cross-polarized light."
      ],
      [
        "Intracellular coarse golden-brown granules that stain intensely Prussian blue within surviving cardiomyocytes",
        "Prussian blue staining detects hemosiderin (iron) deposition in hemochromatosis, an intracellular process distinct from extracellular amyloid fibrils."
      ],
      [
        "Periodic acid-Schiff (PAS)-positive, diastase-resistant cytoplasmic granules located within endocardial histiocytes",
        "PAS-positive, diastase-resistant granules characterize Whipple disease (Tropheryma whipplei) or alpha-1 antitrypsin globules, not cardiac amyloidosis."
      ],
      [
        "Dense intracellular lipid vacuoles that stain bright red with Oil Red O located within subsarcolemmal mitochondrial clusters",
        "Oil Red O stains neutral lipids in fatty acid oxidation disorders or carnitine palmitoyltransferase deficiency, not fibrillar amyloid."
      ],
      [
        "Large basophilic intranuclear inclusions surrounded by a clear halo located within cardiac endothelial cells",
        "Basophilic intranuclear inclusions with clear halos define viral cytopathic effect (e.g., CMV or adenovirus myocarditis), not amyloid cardiomyopathy."
      ]
    ],
    "shortestValidSolution": "Low voltage ECG + thick sparkling LV on echo + carpal tunnel history = Amyloidosis -> Congo red apple-green birefringence under polarized light.",
    "necessaryInference": "Recognize the classic mismatch between low voltage on ECG and marked ventricular thickening on echocardiogram as pathognomonic for infiltrative amyloidosis.",
    "strongestDistractor": "Intracellular coarse golden-brown granules that stain intensely Prussian blue within surviving cardiomyocytes",
    "distractorExclusion": "Prussian blue identifies iron in hemochromatosis, which accumulates intracellularly within myocytes rather than extracellularly in the interstitial matrix.",
    "citation": "Ruberg FL, et al. Transthyretin Amyloid Cardiomyopathy: JACC State-of-the-Art Review. J Am Coll Cardiol. 2019;73(22):2872-2891. PMID: 31171334.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Correlates clinical presentation (carpal tunnel + heart failure), discordance between ECG voltage and echo thickness, and histological birefringence.",
      "distractorExclusionNotes": "Distractors feature Prussian blue (hemochromatosis), PAS (Whipple), Oil Red O (lipid myopathy), and viral inclusions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
