import { CandidateSpec } from './types';

export const step2Batch26: CandidateSpec[] = [
  {
    "code": "op-c-s2-0626",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Neonatal Hyperbilirubinemia Phototherapy Indications",
    "provisionalDifficulty": 4,
    "stem": "A 48-hour-old term male infant (gestational age 39 weeks, birth weight 3,400 g) born via uncomplicated spontaneous vaginal delivery to a blood group O-positive mother is evaluated in the newborn nursery for progressive jaundice extending from his face down to his abdomen and lower thighs. The infant is exclusively breastfed and has had 3 wet diapers and 2 meconium stools over the past 24 hours. Physical examination reveals marked cephalocaudal dermal icterus. Vital signs are normal. Complete blood count shows: hemoglobin 16.8 g/dL, hematocrit 51%, and reticulocyte count 4.8%. Blood group analysis shows the infant is blood group A-positive with a positive direct antiglobulin (Coombs) test. Total serum bilirubin is 18.6 mg/dL with a direct (conjugated) bilirubin of 0.6 mg/dL. Based on the American Academy of Pediatrics nomogram, the phototherapy threshold for a 48-hour infant with neurotoxicity risk factors is 13.0 mg/dL, and the exchange transfusion threshold is 19.5 mg/dL. Which of the following is the most appropriate immediate management?",
    "choices": [
      [
        "Initiate intensive continuous phototherapy immediately and recheck total serum bilirubin in 4 to 6 hours",
        "This infant has ISOIMMUNE HEMOLYTIC HYPERBILIRUBINEMIA secondary to ABO incompatibility (O mother, A infant, positive Coombs test). Unconjugated bilirubin is lipid-soluble and can cross the immature blood-brain barrier to bind neurons in the basal ganglia, auditory nerve, and brainstem nuclei, causing BILIRUBIN-INDUCED NEUROLOGIC DYSFUNCTION (BIND) and permanent KERNICTERUS (choreoathetoid cerebral palsy, sensorineural hearing loss, upward gaze palsy). According to AAP guidelines, when the total serum bilirubin (18.6 mg/dL) exceeds the phototherapy threshold (13.0 mg/dL) but remains below the exchange transfusion threshold (19.5 mg/dL), INTENSIVE CONTINUOUS PHOTOTHERAPY is the mandatory immediate treatment. Phototherapy uses blue-green light (wavelength 460-490 nm) to convert toxic insoluble unconjugated bilirubin into water-soluble photoisomers (lumirubin) that are excreted in bile and urine without requiring hepatic glucuronidation. Rechecking bilirubin in 4-6 hours is required to confirm a declining trajectory."
      ],
      [
        "Perform emergent bedside double-volume exchange transfusion via umbilical vein catheterization",
        "Exchange transfusion is indicated when bilirubin exceeds the exchange threshold (>=19.5 mg/dL) or when acute bilirubin encephalopathy signs appear (lethargy, retrocollis, high-pitched cry); 18.6 mg/dL is managed with intensive phototherapy first."
      ],
      [
        "Discontinue breastfeeding immediately and feed specialized extensively hydrolyzed casein formula for 72 hours",
        "Breastfeeding should be supported and encouraged (or supplemented with mother's expressed breast milk); completely stopping breastfeeding is unnecessary and counterproductive."
      ],
      [
        "Administer oral phenobarbital monotherapy to induce hepatic uridine diphosphate glucuronosyltransferase",
        "Phenobarbital takes several days to induce UGT1A1 enzyme activity and causes significant neonatal sedation, making it ineffective and inappropriate for acute hyperbilirubinemia."
      ],
      [
        "Administer intravenous albumin infusion alone to bind free serum bilirubin and discharge home with follow-up in 48 hours",
        "Albumin infusion does not eliminate bilirubin; discharging an infant with hemolytic jaundice and bilirubin 18.6 mg/dL without phototherapy risks irreversible kernicterus."
      ]
    ],
    "shortestValidSolution": "48-hr infant + Coombs pos ABO incompatibility + bilirubin 18.6 (phototherapy threshold 13.0, exchange 19.5) = Severe hemolytic jaundice -> Intensive phototherapy.",
    "necessaryInference": "Apply AAP hyperbilirubinemia thresholds to select intensive phototherapy over premature exchange transfusion or stopping breastfeeding.",
    "strongestDistractor": "Perform emergent bedside double-volume exchange transfusion via umbilical vein catheterization",
    "distractorExclusion": "Exchange transfusion is reserved for bilirubin exceeding the exchange threshold (>=19.5 mg/dL) or signs of encephalopathy; 18.6 mg/dL meets criteria for intensive phototherapy.",
    "citation": "Kemper AR, Newman TB, Slaughter JL, et al. Clinical practice guideline revision: management of hyperbilirubinemia in the newborn infant 35 or more weeks of gestation. Pediatrics. 2022;150(3):e2022058859. PMID: 35927519.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing application of AAP phototherapy versus exchange transfusion nomogram thresholds in ABO hemolytic disease.",
      "distractorExclusionNotes": "Distractors feature premature invasive exchange transfusion, inappropriate breastfeeding cessation, delayed phenobarbital, and unsafe outpatient discharge.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0627",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "General Principles",
    "topic": "Early-Onset Neonatal Sepsis Empiric Antimicrobial Regimen",
    "provisionalDifficulty": 4,
    "stem": "A 14-hour-old term male infant is evaluated in the nursery for poor feeding, hypothermia, and grunting respirations. He was born at 39 weeks of gestation to a 26-year-old primigravida whose prenatal records show unknown Group B Streptococcus (GBS) colonization status. Spontaneous rupture of membranes occurred 22 hours prior to delivery, and maternal intrapartum temperature peaked at 38.4 C (101.1 F); no intrapartum antibiotics were administered. On examination, the infant is lethargic with mottled extremities and weak suck. Temperature is 35.8 C (96.4 F), blood pressure is 58/34 mm Hg, pulse is 174/min, and respirations are 68/min with intercostal retractions and audible expiratory grunting. Complete blood count shows: white blood cell count 3,200/microL with 28% band forms (immature-to-total neutrophil ratio 0.42), hemoglobin 15.2 g/dL, and platelet count 110,000/microL. Blood and urine cultures and lumbar puncture are performed. Which of the following is the most appropriate empiric antimicrobial regimen to initiate immediately?",
    "choices": [
      [
        "Intravenous ampicillin plus intravenous gentamicin to cover Group B Streptococcus, Escherichia coli, and Listeria monocytogenes",
        "This infant has EARLY-ONSET NEONATAL SEPSIS (onset < 72 hours of life). Risk factors include maternal chorioamnionitis (intrapartum fever >= 38.0 C), prolonged rupture of membranes (>18 hours), and lack of intrapartum GBS prophylaxis. Clinical presentation in neonates is subtle and includes hypothermia (< 36.0 C) or fever, lethargy, poor feeding, respiratory distress (grunting, tachypnea, retractions), and leukopenia with a high immature-to-total (I:T) neutrophil ratio (>0.20). The most common etiologic pathogens are GROUP B STREPTOCOCCUS (Streptococcus agalactiae, ~40%), ESCHERICHIA COLI (~30%), and LISTERIA MONOCYTOGENES. Guideline-directed empiric antimicrobial therapy is INTRAVENOUS AMPICILLIN PLUS AN AMINOGLYCOSIDE (GENTAMICIN). Ampicillin covers GBS, Enterococcus, and Listeria monocytogenes (which is inherently resistant to all cephalosporins). Gentamicin provides synergistic bactericidal activity against gram-negative bacilli, especially E. coli. Ceftriaxone is contraindicated in neonates because it displaces bilirubin from albumin (increasing kernicterus risk) and precipitates with intravenous calcium."
      ],
      [
        "Intravenous ceftriaxone monotherapy to provide high central nervous system penetration",
        "Ceftriaxone is contraindicated in neonates because it binds albumin, displacing bilirubin to cause kernicterus, and precipitates with calcium salts in biliary and renal sludging."
      ],
      [
        "Intravenous vancomycin plus intravenous piperacillin-tazobactam as initial empiric therapy",
        "Vancomycin and piperacillin-tazobactam represent late-onset nosocomial coverage; they are not indicated for early-onset community-acquired neonatal sepsis and miss Listeria."
      ],
      [
        "Oral amoxicillin-clavulanate with close observation in the intermediate care nursery",
        "Oral antibiotics are completely inadequate for fulminant neonatal bacteremia and sepsis, which requires immediate parenteral bactericidal therapy."
      ],
      [
        "Intravenous acyclovir monotherapy pending viral cerebrospinal fluid polymerase chain reaction testing",
        "While neonatal HSV can cause sepsis-like presentations, it typically manifests at 5-11 days of life; early-onset sepsis at 14 hours is overwhelming bacterial infection."
      ]
    ],
    "shortestValidSolution": "14-hr infant + maternal fever + PROM 22 hrs + hypothermia + I:T ratio 0.42 = Early neonatal sepsis -> IV Ampicillin + Gentamicin.",
    "necessaryInference": "Select guideline-directed empiric therapy for early-onset neonatal sepsis (ampicillin + gentamicin) covering GBS, E. coli, and Listeria, avoiding ceftriaxone.",
    "strongestDistractor": "Intravenous ceftriaxone monotherapy to provide high central nervous system penetration",
    "distractorExclusion": "Ceftriaxone is contraindicated in newborns because it displaces bilirubin from albumin (promoting kernicterus) and lacks activity against Listeria monocytogenes.",
    "citation": "Puopolo KM, Benitz WE, Zaoutis TE, et al. Management of neonates born at >=35 0/7 weeks' gestation with suspected or proven early-onset sepsis. Pediatrics. 2018;142(6):e20182894. PMID: 30455342.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing recognition of early-onset neonatal sepsis, pathogen spectrum, and guideline antibiotic choice (ampicillin + gentamicin).",
      "distractorExclusionNotes": "Distractors feature contraindicated neonatal ceftriaxone, hospital-acquired late-onset regimens, oral therapy, and isolated antiviral treatment.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0628",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Intussusception Diagnosis and Pneumatic Air Enema Reduction",
    "provisionalDifficulty": 4,
    "stem": "An 8-month-old male infant is brought to the emergency department because of episodic severe abdominal pain for 12 hours. During these episodes, which occur every 15 to 20 minutes, he suddenly screams, turns pale, and pulls his knees tightly to his chest for several minutes, after which he appears exhausted and unusually somnolent. Over the past 2 hours, he had two episodes of non-bilious vomiting and passed a bowel movement containing dark red, gelatinous blood and mucus ('currant jelly' stool). Physical examination during a quiet period shows an uncomfortable infant with a soft, non-distended abdomen; a sausage-shaped mass is palpated in the right upper quadrant, with emptiness appreciated in the right lower quadrant (Dance sign). There are no signs of peritonitis. Point-of-care abdominal ultrasonography reveals a target-like tubular mass with concentric alternating echogenic and hypoechoic rings ('donut sign'). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform pneumatic (air-contrast) or hydrostatic fluoroscopic enema reduction",
        "This infant exhibits classic presentation of ILEOCOLIC INTUSSUSCEPTION, the most common cause of intestinal obstruction in children aged 6 to 36 months. Pathogenesis involves invagination (telescoping) of a proximal bowel segment (intussuscipiens) into an adjacent distal segment (intussusceptum), typically at the ileocecal junction. In infants, >75% are idiopathic, triggered by hypertrophied Peyer patches following a viral infection (adenovirus, rotavirus). Clinical triad (present in <50%): (1) Severe, episodic colicky abdominal pain with legs drawn to chest; (2) Sausage-shaped abdominal mass with emptiness in RLQ (Dance sign); and (3) 'Currant jelly' stools (mucosal sloughing and venous congestion). Ultrasound is the diagnostic study of choice ('target' or 'donut' sign). In a hemodynamically stable patient WITHOUT PERITONITIS OR PERFORATION, the immediate diagnostic and therapeutic intervention is PNEUMATIC (AIR) OR HYDROSTATIC (BARIUM/SALINE) ENEMA REDUCTION under fluoroscopic or sonographic guidance, which achieves successful reduction in >85-90% of cases."
      ],
      [
        "Transfer immediately to the operating suite for emergency exploratory laparotomy and bowel resection",
        "Immediate surgical exploration is indicated only for patients with hemodynamic instability, peritonitis, frank bowel necrosis, or perforation, or when pneumatic enema fails."
      ],
      [
        "Administer oral polyethylene glycol solution and prescribe an outpatient course of oral metronidazole",
        "Laxatives and oral antibiotics are dangerous and strictly contraindicated; increasing intraluminal propulsion in complete mechanical telescoping causes bowel perforation."
      ],
      [
        "Perform urgent diagnostic upper gastrointestinal contrast series with small bowel follow-through",
        "Upper GI series is the diagnostic test for malrotation with midgut volvulus, not ileocolic intussusception which is diagnosed by ultrasound and treated by enema."
      ],
      [
        "Order a technetium-99m pertechnetate scintigraphy scan to localize ectopic gastric mucosa",
        "Meckel scan identifies bleeding Meckel diverticula, which can act as a pathological lead point, but acute reduction of the obstructing intussusception takes absolute priority."
      ]
    ],
    "shortestValidSolution": "8-month-old + episodic colic + currant jelly stool + sausage mass + US target sign = Intussusception -> Air-contrast enema reduction.",
    "necessaryInference": "Select non-operative pneumatic/hydrostatic enema as both first-line diagnosis and definitive reduction for stable intussusception without peritonitis.",
    "strongestDistractor": "Transfer immediately to the operating suite for emergency exploratory laparotomy and bowel resection",
    "distractorExclusion": "Surgery is reserved for peritonitis, perforation, or failed non-operative enema reduction; stable patients undergo pneumatic enema first.",
    "citation": "Kelley-Quon LI, Arthur LG, Williams RF, et al. Management of intussusception in children: a systematic review. J Pediatr Surg. 2021;56(3):587-596. PMID: 33158525.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item testing recognition of intussusception and the indication for fluoroscopic/pneumatic enema reduction.",
      "distractorExclusionNotes": "Distractors feature premature open surgery in stable patients, dangerous oral cathartics, upper GI contrast series, and delayed nuclear scintigraphy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0629",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Infantile Hypertrophic Pyloric Stenosis Preoperative Resuscitation",
    "provisionalDifficulty": 5,
    "stem": "A 4-week-old first-born male infant is brought to the emergency department with persistent, forceful, non-bilious vomiting immediately after every feeding for the past 5 days. His mother states that he demands to nurse eagerly after vomiting ('hungry vomiter'). Physical examination shows a lethargic, dehydrated infant with sunken fontanelles, dry oral mucosa, and decreased skin turgor. A firm, mobile, olive-sized mass is palpated in the right upper abdomen just lateral to the rectus abdominis muscle. Abdominal ultrasonography reveals pyloric muscle thickness of 4.5 mm (normal < 3 mm) and pyloric channel length of 17 mm (normal < 14 mm). Serum chemistry demonstrates: sodium 130 mEq/L, potassium 2.9 mEq/L, chloride 84 mEq/L, and bicarbonate 34 mEq/L. Blood urea nitrogen is 28 mg/dL, and serum creatinine is 0.7 mg/dL. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Administer intravenous isotonic saline with potassium repletion to correct dehydration and hypochloremic alkalosis prior to surgery",
        "This infant presents with classic INFANTILE HYPERTROPHIC PYLORIC STENOSIS (IHPS), characterized by hypertrophy of the circular pyloric smooth muscle causing gastric outlet obstruction. Hallmark presentation: first-born male, 3-6 weeks of age, projectile non-bilious vomiting, persistent hunger, and palpable 'olive' mass. Repeated loss of gastric hydrochloric acid (HCl) produces a pathognomonic HYPOCHLOREMIC, HYPOKALEMIC METABOLIC ALKALOSIS: loss of H+ and Cl- triggers renal bicarbonate retention and aldosterone-driven urinary potassium/hydrogen wasting. Although Ramstedt pyloromyotomy is the definitive surgical cure, IHPS IS A MEDICAL RESUSCITATION EMERGENCY, NOT A SURGICAL EMERGENCY. Administering general anesthesia to an uncorrected alkalotic infant carries severe risks of central respiratory depression, postoperative apnea, cardiac arrhythmias, and hypovolemic arrest. Therefore, PREOPERATIVE FLUID AND ELECTROLYTE NORMALIZATION (IV isotonic saline bolus followed by D5 0.45% saline + KCl until serum chloride > 100 mEq/L, bicarbonate < 30 mEq/L, and potassium normalizes) is MANDATORY prior to surgery."
      ],
      [
        "Transfer immediately to the operating room for emergent Ramstedt pyloromyotomy under general anesthesia",
        "Operating before correcting severe hypochloremic alkalosis and hypovolemia significantly increases the risk of life-threatening intraoperative cardiac arrest and prolonged postoperative apnea."
      ],
      [
        "Pass a small-bore nasojejunal feeding tube and initiate continuous elemental infant formula feeds",
        "Enteral feeding across a severely stenotic pylorus is impossible, delays necessary electrolyte correction, and increases pulmonary aspiration risk."
      ],
      [
        "Administer high-dose oral atropine sulfate to achieve pharmacologic smooth muscle relaxation",
        "Medical therapy with oral or IV atropine is unpredictable, has significant anticholinergic side effects, and is inferior to surgical pyloromyotomy."
      ],
      [
        "Infuse intravenous sodium bicarbonate to correct the metabolic imbalance and urine alkalinization",
        "The patient is already severely alkalotic (bicarbonate 34 mEq/L); infusing sodium bicarbonate would exacerbate life-threatening alkalemia and tetany."
      ]
    ],
    "shortestValidSolution": "4-week-old + projectile non-bilious emesis + olive mass + Cl 84, K 2.9, HCO3 34 = Pyloric stenosis -> IV Saline + KCl correction BEFORE surgery.",
    "necessaryInference": "Recognize that pyloric stenosis is a medical resuscitation emergency where electrolyte normalization must precede surgical pyloromyotomy.",
    "strongestDistractor": "Transfer immediately to the operating room for emergent Ramstedt pyloromyotomy under general anesthesia",
    "distractorExclusion": "Performing general anesthesia in uncorrected metabolic alkalosis risks severe intraoperative arrhythmias and prolonged postoperative central apnea.",
    "citation": "Hernanz-Schulman M. Infantile hypertrophic pyloric stenosis. Radiology. 2003;227(2):319-331. PMID: 12732696.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric surgery item testing prioritization of electrolyte resuscitation over immediate operative repair in hypertrophic pyloric stenosis.",
      "distractorExclusionNotes": "Distractors feature premature operative intervention in uncorrected alkalosis, nasojejunal feeds, atropine, and paradoxical bicarbonate infusion.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0630",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Hirschsprung Disease Rectal Suction Biopsy Confirmatory Testing",
    "provisionalDifficulty": 5,
    "stem": "A 36-hour-old full-term male newborn has not passed meconium since birth. Over the past 8 hours, he has developed progressive abdominal distension and two episodes of bilious (dark green) vomiting. Physical examination shows a distended, tympanitic abdomen with high-pitched bowel sounds. Digital rectal examination reveals tight anal sphincter tone; withdrawal of the examining finger produces an explosive expulsion of gas and liquid foul-smelling stool ('squirt sign' or 'blast sign'), with immediate temporary relief of abdominal distension. Abdominal radiography reveals distended loops of small and large bowel with air-fluid levels and a complete absence of air in the rectum. A contrast enema demonstrates a narrow, spastic rectosigmoid transition zone with marked proximal colonic dilation. Which of the following is the gold standard confirmatory diagnostic procedure for this condition?",
    "choices": [
      [
        "Full-thickness or rectal suction biopsy demonstrating complete absence of ganglion cells in the submucosal and myenteric plexuses",
        "This newborn has classic HIRSCHSPRUNG DISEASE (congenital aganglionic megacolon), caused by the failure of neural crest-derived neuroblasts to migrate cranio-caudally into the distal bowel between the 5th and 12th weeks of gestation. This results in an absence of parasympathetic ganglion cells in the SUBMUCOSAL (MEISSNER) and MYENTERIC (AUERBACH) PLEXUSES, beginning at the internal anal sphincter and extending proximally for a variable distance (rectosigmoid in 80% of cases). The aganglionic segment cannot relax, producing functional obstruction, proximal dilation (megacolon), bilious vomiting, and failure to pass meconium within 48 hours. Digital rectal exam releases built-up pressure (the pathognomonic 'blast sign'). The GOLD STANDARD CONFIRMATORY DIAGNOSTIC TEST is RECTAL SUCTION BIOPSY (taken at least 2 cm above the dentate line), which demonstrates an ABSENCE OF GANGLION CELLS and hypertrophied, acetylcholinesterase-positive nerve trunks."
      ],
      [
        "Serum quantitative sweat chloride testing utilizing pilocarpine iontophoresis",
        "Sweat chloride testing confirms cystic fibrosis, which causes meconium ileus (microcolon, inspissated meconium), not Hirschsprung aganglionosis."
      ],
      [
        "Abdominal computed tomography with oral and intravenous contrast to visualize the mesenteric vascular pedicle",
        "Contrast enema and rectal biopsy are the diagnostic mainstays; CT exposes the neonate to ionizing radiation without providing histological diagnosis."
      ],
      [
        "Upper gastrointestinal fluoroscopic contrast series to evaluate the position of the ligament of Treitz",
        "Upper GI series is diagnostic for intestinal malrotation with midgut volvulus, which presents with acute bilious emesis but normal passage of meconium."
      ],
      [
        "Anorectal manometry showing normal reflexive internal anal sphincter relaxation upon balloon inflation",
        "In Hirschsprung disease, the rectoanal inhibitory reflex is ABSENT (internal sphincter fails to relax); finding normal relaxation excludes Hirschsprung."
      ]
    ],
    "shortestValidSolution": "No meconium in 36 hrs + bilious emesis + blast sign on DRE + narrow transition zone = Hirschsprung -> Rectal suction biopsy (absent ganglion cells).",
    "necessaryInference": "Select rectal suction biopsy as the gold standard confirmatory test demonstrating absent neural crest ganglion cells in Hirschsprung disease.",
    "strongestDistractor": "Anorectal manometry showing normal reflexive internal anal sphincter relaxation upon balloon inflation",
    "distractorExclusion": "Normal internal sphincter relaxation on manometry rules OUT Hirschsprung disease; confirmation requires rectal suction biopsy showing aganglionosis.",
    "citation": "Langer JC, Rollins MD, Vasudevan SA, et al. Hirschsprung disease: American Pediatric Surgical Association outcomes and clinical trials committee review. J Pediatr Surg. 2017;52(6):881-889. PMID: 28242080.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing recognition of Hirschsprung disease presentation, contrast findings, and gold standard rectal suction biopsy.",
      "distractorExclusionNotes": "Distractors feature cystic fibrosis testing (meconium ileus), unnecessary abdominal CT, upper GI series for volvulus, and paradoxical normal manometry.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0631",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Midgut Volvulus with Malrotation Ladd Procedure",
    "provisionalDifficulty": 4,
    "stem": "A 2-week-old full-term female infant is brought to the emergency department with sudden-onset, forceful bilious (dark green) vomiting and abdominal tenderness for 4 hours. She had been feeding well on infant formula since birth and passed meconium on day 1. Temperature is 37.8 C (100.0 F), blood pressure is 74/46 mm Hg, pulse is 168/min, and respirations are 36/min. Physical examination shows a distressed infant with a firm, distended, and diffusely tender abdomen with guarding and erythema of the abdominal wall. Stool guaiac test is positive for occult blood. Plain abdominal radiography demonstrates a dilated stomach and proximal duodenum with a paucity of distal bowel gas ('double-bubble' with minimal distal air). Fluid resuscitation with isotonic crystalloid is initiated immediately. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform an emergent exploratory laparotomy with Ladd procedure (untwisting volvulus, dividing Ladd bands, and widening mesentery)",
        "This infant presents with INTESTINAL MALROTATION COMPLICATED BY MIDGUT VOLVULUS, a true life-threatening pediatric surgical emergency. During normal embryonic development (weeks 4-10), the midgut herniates into the umbilical cord and undergoes a 270-degree counterclockwise rotation around the superior mesenteric artery (SMA). Failure of normal rotation leaves a narrow mesenteric base, allowing the entire midgut to twist clockwise around the SMA. This causes mechanical bowel obstruction and, critically, acute vascular strangulation of the mesenteric arterial flow, leading to rapid transmural intestinal ischemia, necrosis, gangrene, and death within hours. Findings of PERITONITIS (guarding, abdominal wall erythema, hematochezia/occult blood) in an infant with bilious vomiting signify STRANGULATED, ISCHEMIC BOWEL and mandate IMMEDIATE SURGICAL EXPLORATION (EMERGENT LAPAROTOMY) without wasting time on upper GI contrast fluoroscopy. The surgical treatment of choice is the LADD PROCEDURE: detorsion of the volvulus counterclockwise, surgical division of peritoneal Ladd bands crossing the duodenum, widening of the mesenteric base, positioning the small bowel on the right and cecum on the left, and appendectomy."
      ],
      [
        "Perform an urgent barium contrast enema to reduce the bowel obstruction under fluoroscopic control",
        "Contrast enema is used for intussusception; midgut volvulus with vascular strangulation requires surgical detorsion, and enemas are ineffective and risk perforation."
      ],
      [
        "Order an elective upper gastrointestinal series with small bowel follow-through for tomorrow morning",
        "Awaiting elective imaging in midgut volvulus with peritoneal signs leads to complete midgut infarction, short bowel syndrome, and fatal septic shock."
      ],
      [
        "Pass a nasogastric tube to suction, initiate total parenteral nutrition, and observe for 48 hours",
        "Conservative management of active midgut volvulus leads to 100% bowel necrosis and infant mortality; emergent surgical intervention is mandatory."
      ],
      [
        "Perform urgent bedside percutaneous needle paracentesis to relieve intra-abdominal pressure",
        "Needle paracentesis does not relieve vascular torsion around the SMA and risks puncturing distended, ischemic, gangrenous loops of bowel."
      ]
    ],
    "shortestValidSolution": "2-week-old + acute bilious emesis + abdominal guarding + occult blood = Midgut volvulus with peritonitis -> Emergent Ladd procedure.",
    "necessaryInference": "Recognize signs of intestinal strangulation in midgut volvulus requiring immediate operative exploration (Ladd procedure) without delaying for diagnostics.",
    "strongestDistractor": "Perform an urgent barium contrast enema to reduce the bowel obstruction under fluoroscopic control",
    "distractorExclusion": "Enema reduction is for intussusception; midgut volvulus with peritoneal signs represents mesenteric vascular compromise requiring emergency surgical laparotomy.",
    "citation": "Applegate KE, Anderson JM, Klatte EC. Intestinal malrotation in children: a problem-solving approach to the upper gastrointestinal series. Radiographics. 2006;26(5):1485-1500. PMID: 16973777.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency surgery item testing recognition of midgut volvulus with strangulation and indication for immediate Ladd procedure.",
      "distractorExclusionNotes": "Distractors feature intussusception enema reduction, catastrophic imaging delays, conservative observational management, and dangerous paracentesis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0632",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Laryngotracheobronchitis Croup Inhaled Epinephrine and Dexamethasone",
    "provisionalDifficulty": 4,
    "stem": "A 16-month-old boy is brought to the emergency department at 2:00 AM by his parents because of sudden-onset noisy breathing, a hoarse cry, and a harsh, barking cough that sounds like a seal. Over the preceding 2 days, he had mild clear rhinorrhea and a low-grade fever. Vital signs show: temperature 38.2 C (100.8 F), blood pressure 96/60 mm Hg, pulse 138/min, and respirations 36/min. Pulse oximetry is 96% on room air. Physical examination reveals an alert child who is sitting comfortably in his mother's lap. He has a harsh barking cough, mild suprasternal retractions, and prominent inspiratory stridor that is clearly audible while he is resting quietly. Neck and chest auscultation reveals transmitted upper airway sounds without wheezing or crackles. The pharynx is mildly erythematous without tonsillar exudate, uvular deviation, or drooling. An anteroposterior soft tissue neck radiograph demonstrates subglottic narrowing ('steeple sign'). Which of the following is the most appropriate immediate medical management?",
    "choices": [
      [
        "Administer single-dose oral or intramuscular dexamethasone and nebulized racemic epinephrine with 2 to 3 hours of observation",
        "This child has MODERATE-TO-SEVERE CROUP (acute laryngotracheobronchitis), most commonly caused by PARAINFLUENZA VIRUS (type 1). Viral infection leads to subglottic inflammation and circumferential mucosal edema of the cricoid cartilage region (the narrowest part of the pediatric airway), manifested on AP neck radiography as the 'STEEPLE SIGN' (tapered subglottic narrowing). Clinical features include barking cough, hoarseness, and inspiratory stridor. Croup severity is classified based on stridor: (1) Mild: stridor only with agitation; (2) Moderate: STRIDOR AT REST with mild-to-moderate chest wall retractions; (3) Severe: stridor at rest with marked retractions, lethargy, or agitation. Guideline-directed management for croup with STRIDOR AT REST consists of: (1) SYSTEMIC CORTICOSTEROIDS: a single dose of DEXAMETHASONE (0.15-0.60 mg/kg orally or IM), which reduces subglottic mucosal edema via anti-inflammatory action (onset 1-2 hours); PLUS (2) NEBULIZED RACEMIC EPINEPHRINE (or L-epinephrine), which stimulates alpha-1 adrenergic receptors on mucosal arterioles causing rapid vasoconstriction and immediate airway caliber improvement (onset 10-30 minutes). Because epinephrine's effect wanes after 2 hours, patients must be observed for at least 2-3 hours to monitor for REBOUND STRIDOR before discharge."
      ],
      [
        "Administer oral amoxicillin-clavulanate for 10 days and discharge immediately with a cool mist humidifier",
        "Croup is viral in etiology (parainfluenza); antibiotics have no efficacy, and humidified air/mist therapy has been disproved in clinical trials."
      ],
      [
        "Perform urgent direct laryngoscopy and endotracheal intubation in the emergency department",
        "Intubation is reserved strictly for impending respiratory failure (cyanosis, lethargy, silent chest); intubation in moderate croup without medical trial causes airway trauma and subglottic stenosis."
      ],
      [
        "Initiate nebulized albuterol every 20 minutes for 3 doses and administer intravenous methylprednisolone",
        "Albuterol is a beta-2 agonist that relaxes bronchial smooth muscle in lower airway asthma/bronchospasm; it has no effect on subglottic cricoid mucosal edema in croup."
      ],
      [
        "Prescribe oral codeine-containing cough suppressants and discharge home with close pediatric follow-up",
        "Narcotic cough suppressants cause central respiratory depression in infants with airway compromise and are strictly contraindicated."
      ]
    ],
    "shortestValidSolution": "16-month-old + seal bark cough + stridor at rest + steeple sign = Moderate/severe croup -> Dexamethasone + Nebulized epinephrine + observation.",
    "necessaryInference": "Identify stridor at rest as the threshold indicating dual therapy with dexamethasone and nebulized racemic epinephrine plus observation for rebound.",
    "strongestDistractor": "Initiate nebulized albuterol every 20 minutes for 3 doses and administer intravenous methylprednisolone",
    "distractorExclusion": "Albuterol treats bronchial lower-airway bronchospasm (asthma); croup is subglottic mucosal edema requiring alpha-adrenergic vasoconstriction with epinephrine.",
    "citation": "Bjornson C, Russell KF, Vandermeer B, et al. Nebulized epinephrine for croup in children. Cochrane Database Syst Rev. 2013;(10):CD006619. PMID: 24114247.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing management of croup based on Westley severity score (stridor at rest requiring racemic epinephrine + dexamethasone).",
      "distractorExclusionNotes": "Distractors feature ineffective antibiotics, disproven cool mist, lower-airway bronchodilators (albuterol), premature intubation, and contraindicated cough sedatives.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0633",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Acute Viral Bronchiolitis Supportive Management",
    "provisionalDifficulty": 4,
    "stem": "A 4-month-old female infant is brought to the outpatient clinic during late December because of coughing, wheezing, and difficulty breathing for 3 days. Her illness began with clear rhinorrhea, sneezing, and low-grade fevers. Physical examination reveals an alert infant in mild respiratory distress with nasal flaring and mild subcostal and intercostal retractions. Temperature is 38.0 C (100.4 F), blood pressure 88/54 mm Hg, pulse 142/min, and respirations 54/min. Pulse oximetry is 95% on ambient room air. Lung auscultation demonstrates diffuse bilateral expiratory wheezes and fine end-inspiratory crackles throughout all lung fields. Cardiovascular and abdominal examinations are normal. The infant is nursing well without vomiting and producing normal wet diapers. Nasopharyngeal viral multiplex PCR confirms respiratory syncytial virus (RSV). Which of the following is the most appropriate management according to current American Academy of Pediatrics clinical practice guidelines?",
    "choices": [
      [
        "Provide supportive care with nasal bulb suctioning, maintain adequate hydration, and educate parents on respiratory warning signs",
        "This infant has ACUTE VIRAL BRONCHIOLITIS, the most common lower respiratory tract infection in infants under 12 months of age, predominantly caused by RESPIRATORY SYNCYTIAL VIRUS (RSV). Pathophysiology involves viral necrosis of bronchiolar ciliated epithelial cells, lymphocytic infiltration, submucosal edema, and sloughing of debris with excessive mucus production causing widespread airway obstruction. Clinical features include a viral upper respiratory prodrome followed by tachypnea, wheezing, crackles, and retractions. Current American Academy of Pediatrics (AAP) guidelines recommend SUPPORTIVE CARE AS THE SOLE REQUIRED MANAGEMENT for stable bronchiolitis: (1) Gentle upper airway NASAL SUCTIONING to relieve obstruction; (2) Ensuring ADEQUATE HYDRATION (oral nursing or isotonic IV fluids if intake is impaired); and (3) MONITORING oxygenation. Randomized clinical trials have established that BRONCHODILATORS (albuterol), SYSTEMIC CORTICOSTEROIDS, HYPERTONIC SALINE, and ANTIMICROBIALS DO NOT improve clinical outcomes, reduce hospital admissions, or shorten disease duration, and are ROUTINELY NOT RECOMMENDED."
      ],
      [
        "Administer a therapeutic trial of nebulized albuterol and continue if clinical response is observed",
        "AAP guidelines explicitly state that clinicians should not administer albuterol to infants with bronchiolitis because randomized trials show no impact on disease resolution."
      ],
      [
        "Prescribe a 5-day course of oral prednisolone combined with oral azithromycin",
        "Systemic corticosteroids and macrolides do not reduce hospital admissions or symptom duration in viral bronchiolitis and expose infants to drug toxicities."
      ],
      [
        "Administer monthly palivizumab intramuscular injections for acute treatment of the established RSV infection",
        "Palivizumab is a monoclonal antibody used strictly for PROPHYLAXIS in high-risk premature infants; it has ZERO efficacy as a treatment for active established RSV infection."
      ],
      [
        "Admit to the pediatric intensive care unit and initiate continuous non-invasive positive pressure ventilation",
        "Hospitalization and mechanical ventilation are unnecessary for a stable infant who is feeding well with normal oxygen saturation (95%) and mild retractions."
      ]
    ],
    "shortestValidSolution": "4-month-old + RSV + wheezing + feeding well + SpO2 95% = Bronchiolitis -> Supportive care (suctioning + hydration; NO bronchodilators/steroids).",
    "necessaryInference": "Apply AAP bronchiolitis guideline recommendations avoiding unnecessary bronchodilators, steroids, and antibiotics in favor of supportive care.",
    "strongestDistractor": "Administer a therapeutic trial of nebulized albuterol and continue if clinical response is observed",
    "distractorExclusion": "AAP clinical practice guidelines explicitly advise against albuterol trials in bronchiolitis due to lack of efficacy and risk of tachycardia and tremor.",
    "citation": "Ralston SL, Lieberthal AS, Meissner HC, et al. Clinical practice guideline: the diagnosis, management, and prevention of bronchiolitis. Pediatrics. 2014;134(5):e1474-e1502. PMID: 25349312.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing adherence to AAP evidence-based guidelines for viral bronchiolitis (supportive care versus disproven medications).",
      "distractorExclusionNotes": "Distractors feature guideline-discouraged bronchodilator trials, ineffective corticosteroids/antibiotics, prophylactic palivizumab misuse, and unnecessary PICU admission.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0634",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Acute Epiglottitis Airway Protection in Operating Room",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old unimmunized boy whose parents declined standard childhood vaccinations is brought to the emergency department because of high fever, difficulty breathing, and severe throat pain that started acutely 6 hours ago. On arrival, the boy appears toxic, pale, and anxious. He is sitting upright, leaning forward on his outstretched arms with his neck hyperextended and chin thrust forward ('tripod position'). He is breathing through an open mouth with continuous pooling and drooling of saliva. He refuses to speak, but when coaxed, his voice sounds muffled ('hot potato voice'). Vital signs are: temperature 39.8 C (103.6 F), blood pressure 104/64 mm Hg, pulse 162/min, and respirations 38/min. Soft inspiratory stridor is heard over the trachea. Physical examination reveals intercostal retractions without wheezing. Which of the following represents the most appropriate immediate management?",
    "choices": [
      [
        "Keep the child calm in his parent's arms and arrange immediate transfer to the operating room for endotracheal intubation by an experienced team",
        "This patient exhibits life-threatening ACUTE EPIGLOTTITIS (supraglottitis), a bacterial cellulitis of the epiglottis, aryepiglottic folds, and surrounding tissues, classically caused by HAEMOPHILUS INFLUENZAE TYPE B (Hib, in unimmunized children) or Streptococcus pyogenes/Streptococcus pneumoniae. Rapid progressive edema can cause complete, fatal airway occlusion within minutes. Classic presentation: acute high fever, toxic appearance, TRIPOD POSITION (sniffing posture), DROOLING (dysphagia for secretions), MUFFLED VOICE, and inspiratory stridor. The MOST CRITICAL RULE is: DO NOT AGITATE THE CHILD. Any invasive procedure in the emergency department\u2014such as pharyngeal inspection with a tongue depressor, pharyngeal swabbing, intravenous line placement, or supine positioning\u2014can trigger acute laryngospasm, complete airway collapse, and fatal cardiac arrest. The immediate action is to KEEP THE CHILD CALM in the parent's arms with humidified blow-by oxygen, and IMMEDIATELY MOBILIZE AN AIRWAY TEAM (anesthesiologist, pediatric intensivist, otolaryngologist) to transfer the child directly to the OPERATING ROOM for controlled inhalational induction and ENDOTRACHEAL INTUBATION, with surgical tracheostomy equipment prepared."
      ],
      [
        "Depress the tongue with a wooden blade under direct headlight visualization to inspect the posterior oropharynx",
        "Direct visualization of the pharynx in the ED with a tongue depressor precipitates fatal laryngospasm and total acute airway obstruction."
      ],
      [
        "Transport the patient supine to the radiology department for emergency lateral soft tissue neck radiography",
        "Transporting a child with impending airway collapse supine to radiology risks unmonitored respiratory arrest; imaging is unnecessary and contraindicated in classic clinical epiglottitis."
      ],
      [
        "Place an immediate peripheral intravenous line and administer intravenous ceftriaxone in the triage bay",
        "Attempting venipuncture causes distress and crying, precipitating acute complete laryngospasm before airway security is achieved in the operating room."
      ],
      [
        "Administer nebulized racemic epinephrine and high-dose oral dexamethasone, and observe for 2 hours",
        "Racemic epinephrine and steroids treat subglottic croup, not supraglottic bacterial epiglottitis, and provide zero protection against fatal airway obstruction."
      ]
    ],
    "shortestValidSolution": "Unimmunized 4-year-old + tripod position + drooling + muffled voice + toxic fever = Epiglottitis -> Keep calm + Emergency OR intubation.",
    "necessaryInference": "Recognize epiglottitis and enforce strict protocol: avoid child agitation/ED oral examination and transfer immediately to OR for controlled intubation.",
    "strongestDistractor": "Depress the tongue with a wooden blade under direct headlight visualization to inspect the posterior oropharynx",
    "distractorExclusion": "Oral inspection with a tongue depressor can provoke immediate reflex laryngospasm and fatal complete airway obstruction.",
    "citation": "Tarrago R, Eiland LS. Epiglottitis. In: StatPearls. Treasure Island (FL): StatPearls Publishing; 2023. PMID: 29083815.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric emergency item testing recognition of acute epiglottitis and strict adherence to non-agitation, operating-room intubation protocol.",
      "distractorExclusionNotes": "Distractors feature lethal physical examination triggers (tongue depressor), dangerous radiology transport, agitating venipuncture, and croup therapies.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0635",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Kawasaki Disease IVIG and High-Dose Aspirin Therapy",
    "provisionalDifficulty": 5,
    "stem": "A 3-year-old previously healthy girl is brought to the pediatric clinic because of a high fever up to 39.4 C (103.0 F) that has persisted for 6 consecutive days despite oral acetaminophen and ibuprofen. Her parents note that her eyes have become red and bloodshot without discharge, her lips are cracked and bleeding, and her hands and feet appear swollen. Physical examination demonstrates: bilateral non-exudative conjunctival injection with limbic sparing; dry, fissured lips with a bright red 'strawberry tongue'; a polymorphous maculopapular rash across the trunk and groin; firm, indurated, non-pitting edema of the dorsal hands and feet with palmar erythema; and a single, tender, enlarged left anterior cervical lymph node measuring 1.8 cm in diameter. Laboratory evaluation demonstrates: white blood cell count 16,800/microL with 76% neutrophils, hemoglobin 10.8 g/dL, platelet count 480,000/microL, ESR 84 mm/hr, and C-reactive protein 96 mg/L. Echocardiography is scheduled. Which of the following is the most appropriate immediate medical pharmacotherapy to prevent long-term cardiac morbidity?",
    "choices": [
      [
        "High-dose intravenous immunoglobulin (IVIG) combined with high-dose oral aspirin",
        "This child fulfills diagnostic criteria for KAWASAKI DISEASE (mucocutaneous lymph node syndrome), a medium-vessel necrotizing vasculitis with a predilection for coronary arteries. Diagnostic criteria require FEVER PERSISTING >= 5 DAYS plus at least 4 of the following 5 clinical features: (1) Bilateral non-exudative bulbar conjunctival injection with limbic sparing; (2) Oral mucous membrane changes (injected/cracked lips, strawberry tongue, pharyngeal erythema); (3) Peripheral extremity changes (erythema of palms/soles, indurated edema of hands/feet in acute phase; periungual desquamation in convalescent phase); (4) Polymorphous rash; and (5) Cervical lymphadenopathy (usually unilateral, >=1.5 cm). The primary clinical danger is CORONARY ARTERY ANEURYSMS, occurring in up to 25% of untreated children. Treatment initiated within the first 10 days of illness dramatically reduces aneurysm risk to <4%: (1) HIGH-DOSE INTRAVENOUS IMMUNOGLOBULIN (IVIG, 2 g/kg as a single infusion); and (2) HIGH-DOSE ASPIRIN (80-100 mg/kg/day during the febrile acute phase for anti-inflammatory effect, reduced to low-dose 3-5 mg/kg/day once afebrile for antiplatelet effect until repeat echocardiography at 6-8 weeks)."
      ],
      [
        "Oral prednisone monotherapy combined with oral ibuprofen for 14 days",
        "Systemic corticosteroids as monotherapy were historically associated with higher aneurysm rates, and ibuprofen antagonizes aspirin's antiplatelet action."
      ],
      [
        "Intravenous ceftriaxone plus vancomycin while withholding antiplatelet agents",
        "Kawasaki disease is a systemic immune vasculitis; antibacterial therapy does not prevent coronary artery aneurysm development."
      ],
      [
        "Oral acyclovir high-dose therapy combined with topical ophthalmic erythromycin",
        "Acyclovir is ineffective because Kawasaki disease is an inflammatory medium-vessel vasculitis rather than a herpes simplex infection."
      ],
      [
        "Subcutaneous low-molecular-weight heparin monotherapy with outpatient cardiology follow-up",
        "Heparin does not treat the acute systemic endothelial vasculitis; IVIG plus aspirin is the proven guideline regimen to halt coronary arteritis."
      ]
    ],
    "shortestValidSolution": "Fever >= 5 days + conjunctivitis + strawberry tongue + swollen hands + cervical node = Kawasaki disease -> IVIG + High-dose Aspirin.",
    "necessaryInference": "Recognize clinical criteria for Kawasaki disease and select immediate dual therapy with high-dose IVIG and aspirin within 10 days to prevent coronary aneurysms.",
    "strongestDistractor": "Oral prednisone monotherapy combined with oral ibuprofen for 14 days",
    "distractorExclusion": "Corticosteroid monotherapy without IVIG is ineffective for primary aneurysm prevention; ibuprofen competitively blocks aspirin binding.",
    "citation": "McCrindle BW, Rowley AH, Newburger JW, et al. Diagnosis, treatment, and long-term management of Kawasaki disease: a scientific statement for health professionals from the American Heart Association. Circulation. 2017;135(17):e927-e999. PMID: 28356445.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics/cardiology item testing diagnostic criteria for Kawasaki disease and timely dual IVIG/aspirin therapy for aneurysm prevention.",
      "distractorExclusionNotes": "Distractors feature corticosteroid monotherapy, ineffective antibacterials/antivirals, and inappropriate anticoagulation without anti-inflammatory vasculitis control.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0636",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Cardiovascular",
    "topic": "Multisystem Inflammatory Syndrome in Children Management",
    "provisionalDifficulty": 4,
    "stem": "A 9-year-old boy presents with high fevers for 4 days, severe crampy abdominal pain, watery diarrhea, vomiting, and a generalized red rash. Four weeks ago, he had a mild upper respiratory illness and tested positive for SARS-CoV-2 on rapid antigen testing. On presentation, the child appears lethargic and irritable. Vital signs: temperature 39.2 C (102.6 F), blood pressure 82/48 mm Hg, pulse 134/min, and respirations 26/min. Physical examination demonstrates bilateral non-exudative conjunctivitis, prominent cracked lips, abdominal tenderness without peritoneal signs, and a non-pruritic maculopapular rash over his torso and thighs. Laboratory studies show: white blood cell count 18,200/microL with 88% neutrophils and absolute lymphocyte count 620/microL (lymphopenia), platelet count 88,000/microL, ESR 92 mm/hr, C-reactive protein 210 mg/L, ferritin 1,450 ng/mL, D-dimer 4.8 microg/mL FEU, and high-sensitivity cardiac troponin I 0.28 ng/mL (elevated). Serum SARS-CoV-2 nucleocapsid IgG is positive. Echocardiography demonstrates a left ventricular ejection fraction of 42% with mild mitral regurgitation and dilation of the left anterior descending coronary artery (Z-score +2.8). Which of the following is the most appropriate first-line therapeutic management?",
    "choices": [
      [
        "High-dose intravenous immunoglobulin (IVIG) combined with intravenous methylprednisolone",
        "This patient meets CDC and WHO criteria for MULTISYSTEM INFLAMMATORY SYNDROME IN CHILDREN (MIS-C), a hyperinflammatory syndrome occurring typically 2 to 6 weeks after SARS-CoV-2 infection. Case definition requires: (1) Age < 21 years; (2) Persistent fever >= 24-48 hours; (3) Laboratory evidence of systemic inflammation (elevated CRP, ESR, ferritin, D-dimer, procalcitonin) with lymphopenia/thrombocytopenia; (4) Multi-organ involvement (>=2 systems: cardiac, renal, respiratory, hematologic, gastrointestinal, dermatologic, neurological); (5) Laboratory evidence of past/current SARS-CoV-2 infection (positive serology); and (6) Exclusion of plausible alternative diagnoses. Manifestations frequently mimic Kawasaki disease or toxic shock, featuring gastrointestinal distress (80%), myocardial dysfunction (elevated troponin, depressed LVEF), vasodilatory/cardiogenic shock, and coronary artery dilation. The American College of Rheumatology (ACR) consensus guidelines recommend FIRST-LINE THERAPY WITH COMBINED INTRAVENOUS IMMUNOGLOBULIN (IVIG 2 g/kg) PLUS HIGH-DOSE SYSTEMIC GLUCOCORTICOIDS (intravenous methylprednisolone 1-2 mg/kg/day, or pulse 10-30 mg/kg/day for shock)."
      ],
      [
        "Oral amoxicillin-clavulanate for 14 days and discharge with outpatient pediatric follow-up",
        "MIS-C is an acute hyperinflammatory post-viral syndrome with high risk of cardiogenic shock and coronary dilation; outpatient antibiotics are ineffective and dangerous."
      ],
      [
        "Intravenous remdesivir monotherapy for 5 days as antiviral eradication therapy",
        "Antiviral therapy (remdesivir) targets active viral replication during acute COVID-19, not the post-infectious autoimmune/hyperinflammatory phase of MIS-C."
      ],
      [
        "Oral ibuprofen and antihistamines for symptomatic management of rash and fever",
        "NSAIDs and antihistamines are completely inadequate for cardiogenic shock, myocardial injury, and coronary aneurysm formation in MIS-C."
      ],
      [
        "Emergent cardiac catheterization with coronary balloon angioplasty and stenting",
        "Coronary dilation (Z-score +2.8) in MIS-C reflects diffuse inflammatory vasculitis rather than atherosclerotic plaque rupture; catheter stenting is contraindicated."
      ]
    ],
    "shortestValidSolution": "Post-COVID 4 weeks + fever + shock + troponin 0.28 + LVEF 42% + coronary dilation = MIS-C -> IVIG + IV Methylprednisolone.",
    "necessaryInference": "Synthesize post-COVID timing, multi-system inflammation, and cardiac dysfunction to diagnose MIS-C and select combined IVIG and glucocorticoids.",
    "strongestDistractor": "Intravenous remdesivir monotherapy for 5 days as antiviral eradication therapy",
    "distractorExclusion": "Remdesivir treats acute viral replication; MIS-C is a delayed post-infectious hyperinflammatory syndrome requiring immunomodulation with IVIG and steroids.",
    "citation": "Henderson LA, Canna SW, Friedman KG, et al. American College of Rheumatology clinical guidance for pediatric patients with multisystem inflammatory syndrome in children (MIS-C) associated with SARS-CoV-2. Arthritis Rheumatol. 2021;73(4):e13-e29. PMID: 33275376.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics/rheumatology item testing recognition of MIS-C post-COVID-19 criteria, cardiogenic complications, and combined IVIG/steroid treatment.",
      "distractorExclusionNotes": "Distractors feature oral antibacterials, acute antivirals (remdesivir), inadequate NSAIDs, and contraindicated coronary catheterization.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0637",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Renal",
    "topic": "IgA Vasculitis Henoch-Schonlein Purpura Clinical Evaluation",
    "provisionalDifficulty": 4,
    "stem": "A 6-year-old boy is brought to the clinic because of a rash on his legs, lower extremity joint pain, and intermittent abdominal cramping for 3 days. Ten days ago, he had a mild upper respiratory illness that resolved without medication. Physical examination reveals non-blanching, palpable violaceous macules and papules coalescing into purpuric plaques symmetrically distributed over his buttocks, posterior thighs, calves, and dorsal feet, with complete sparing of the trunk and face. Bilateral ankles and knees are warm, swollen, and tender with decreased active range of motion. The abdomen is soft with mild diffuse tenderness but no peritoneal signs. Laboratory studies demonstrate: hemoglobin 12.8 g/dL, white blood cell count 9,400/microL, platelet count 285,000/microL (normal), prothrombin time (PT) 11.8 seconds, and activated partial thromboplastin time (aPTT) 29 seconds. Serum creatinine is 0.5 mg/dL. Urinalysis reveals 1+ protein and 15-20 red blood cells per high-power field with red cell casts. Which of the following is the most appropriate initial management and monitoring strategy for this patient?",
    "choices": [
      [
        "Provide supportive care with hydration and nonsteroidal anti-inflammatory drugs, and monitor blood pressure and urinalysis serially for renal disease",
        "This patient has IGA VASCULITIS (formerly Henoch-Sch\u00f6nlein purpura [HSP]), the most common systemic vasculitis of childhood. Pathophysiology: deposition of IgA1-containing immune complexes in the walls of small vessels (arterioles, capillaries, venules). The classic tetrad consists of: (1) PALPABLE PURPURA without thrombocytopenia or coagulopathy (platelet count is normal, distinguishing from ITP/TTP/meningococcemia), predominantly in dependent areas (buttocks and lower extremities); (2) ARTHRALGIAS / ARTHRITIS (typically non-deforming, affecting knees and ankles); (3) ABDOMINAL PAIN (colicky pain from bowel wall edema, with risk of ileo-ileal intussusception); and (4) RENAL DISEASE (microscopic hematuria, red cell casts, proteinuria, identical histologically to IgA nephropathy). Most cases are self-limited following an upper respiratory infection. Management is primarily SUPPORTIVE (adequate hydration, NSAIDs or acetaminophen for joint pain). Long-term prognosis is determined entirely by RENAL INVOLVEMENT; therefore, SERIAL BLOOD PRESSURE AND URINALYSIS MONITORING (initially every 1-2 weeks, then monthly for 6 months) is the essential management strategy to detect progressive nephritis."
      ],
      [
        "Initiate emergent double-volume therapeutic plasma exchange combined with cyclophosphamide",
        "Aggressive cytotoxic therapy and plasmapheresis are reserved strictly for severe crescentic rapidly progressive glomerulonephritis, not mild microscopic hematuria."
      ],
      [
        "Transfuse two units of apheresis platelets immediately to arrest vascular purpura",
        "The platelet count is normal (285,000/microL); palpable purpura in IgA vasculitis is mediated by vessel wall immune-complex inflammation, not thrombocytopenia."
      ],
      [
        "Perform urgent exploratory laparotomy to resect the purpuric segments of small bowel",
        "Laparotomy is indicated only for frank perforation or irreducible intussusception; colicky pain without peritonitis resolves spontaneously or with analgesia."
      ],
      [
        "Administer high-dose intravenous acyclovir and initiate broad-spectrum vancomycin",
        "IgA vasculitis is an immune-mediated post-infectious leukocytoclastic vasculitis, not an active herpesvirus or acute staphylococcal bacteremia."
      ]
    ],
    "shortestValidSolution": "Buttock/leg palpable purpura + normal platelets + arthralgia + hematuria = IgA vasculitis (HSP) -> Supportive care + Serial BP and urinalysis.",
    "necessaryInference": "Recognize IgA vasculitis (palpable purpura with normal platelets) and select supportive management with serial renal monitoring.",
    "strongestDistractor": "Initiate emergent double-volume therapeutic plasma exchange combined with cyclophosphamide",
    "distractorExclusion": "Plasmapheresis and cyclophosphamide are reserved for severe crescentic renal failure; uncomplicated IgA vasculitis requires supportive care and serial monitoring.",
    "citation": "Ozen S, Marks SD, Brogan P, et al. European consensus-based recommendations for diagnosis and treatment of immunoglobulin A vasculitis-the SHARE initiative. Rheumatology (Oxford). 2019;58(9):1607-1616. PMID: 30864662.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics item testing clinical diagnosis of IgA vasculitis (HSP tetrad, normal platelets) and outpatient serial renal surveillance.",
      "distractorExclusionNotes": "Distractors feature overly aggressive plasmapheresis/cyclophosphamide, inappropriate platelet transfusions, unnecessary bowel surgery, and antimicrobial regimens.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0638",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Developmental Dysplasia of the Hip Screening and Pavlik Harness",
    "provisionalDifficulty": 4,
    "stem": "A 6-week-old female infant is brought for a routine well-child examination. She was born at 39 weeks of gestation via planned cesarean delivery due to frank breech presentation. Family history is notable for a maternal aunt who required hip surgery in infancy. The infant has been feeding well and gaining weight appropriately. Physical examination of the lower extremities reveals asymmetric thigh and gluteal skin folds. With the infant supine and hips flexed to 90 degrees, gentle adduction of the left hip with posterior pressure over the greater trochanter produces a palpable clunk as the femoral head dislocates out of the acetabulum (positive Barlow test). Subsequent abduction of the left hip with anterior lifting of the greater trochanter produces a palpable and audible clunk as the femoral head slips back into the acetabulum (positive Ortolani test). The right hip examination is completely normal. Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Obtain bilateral hip ultrasonography to assess acetabular coverage and initiate treatment with a Pavlik abduction harness",
        "This infant has DEVELOPMENTAL DYSPLASIA OF THE HIP (DDH), a condition characterized by abnormal acetabular development resulting in subluxation or dislocation of the femoral head. Major risk factors include: female sex (4:1 female-to-male ratio), BREECH PRESENTATION (strongest mechanical risk factor), positive family history, and tight swaddling. Physical examination maneuvers: BARLOW TEST (adduction with posterior force dislocates the unstable hip) and ORTOLANI TEST (abduction with anterior elevation reduces the dislocated hip back into the acetabulum with a palpable 'clunk'). Imaging guidelines: ULTRASONOGRAPHY OF THE HIPS is the imaging modality of choice from 4-6 weeks up to 4-6 months of age (before the femoral head ossifies; plain radiography is used after 4-6 months when the femoral head ossification center appears). In infants under 6 months of age with confirmed DDH, the primary treatment is the PAVLIK HARNESS, a dynamic flexion-abduction splint that maintains the femoral head centered within the acetabulum, stimulating normal acetabular deepening."
      ],
      [
        "Perform immediate bilateral hip plain radiography including frog-leg lateral views",
        "Plain radiographs are unreliable in infants under 4-6 months of age because the cartilaginous femoral head and acetabulum have not yet ossified; ultrasound is the study of choice."
      ],
      [
        "Reassure the parents that physical findings represent benign neonatal laxity and re-evaluate at the 12-month visit",
        "A frankly positive Ortolani or Barlow test represents established hip dislocation; delaying treatment leads to permanent acetabular dysplasia, limb shortening, and waddling gait."
      ],
      [
        "Perform emergent open surgical reduction with pelvic osteotomy and Spica cast immobilization",
        "Open reduction and pelvic osteotomy are invasive surgical procedures reserved for children older than 6-18 months or those failing non-operative Pavlik harness splinting."
      ],
      [
        "Prescribe triple-layer diapering and recommend strict lower extremity extension swaddling",
        "Triple diapers do not maintain hip abduction and extension swaddling directly forces the femoral head out of the acetabulum, severely worsening hip dysplasia."
      ]
    ],
    "shortestValidSolution": "Breech female + positive Barlow/Ortolani clunk at 6 weeks = DDH -> Hip Ultrasound + Pavlik harness.",
    "necessaryInference": "Select hip ultrasonography (preferred before 4-6 months) and non-rigid dynamic Pavlik harness as first-line management for DDH.",
    "strongestDistractor": "Perform immediate bilateral hip plain radiography including frog-leg lateral views",
    "distractorExclusion": "Plain radiographs are inaccurate in infants <4 months due to unossified femoral head cartilage; ultrasound is the diagnostic imaging test of choice.",
    "citation": "Shaw BA, Segal LS. Evaluation and referral for developmental dysplasia of the hip in infants. Pediatrics. 2016;138(6):e20163107. PMID: 27940748.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics/orthopedics item testing recognition of DDH risk factors (breech, female), Barlow/Ortolani maneuvers, ultrasound imaging, and Pavlik harness.",
      "distractorExclusionNotes": "Distractors feature premature plain radiographs on unossified cartilage, inappropriate watchful waiting, invasive open surgery, and harmful extension swaddling.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0639",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Septic Arthritis vs Transient Synovitis Kocher Criteria",
    "provisionalDifficulty": 5,
    "stem": "A 4-year-old boy is brought to the emergency department because of refusal to walk on his right leg and high fever for 18 hours. He had a mild viral rhinorrhea 2 weeks ago that resolved completely. On examination, the child is irritable and lies with his right hip held in flexion, abduction, and external rotation. Any passive movement of the right hip, especially internal rotation, elicits severe pain and crying. The knee and ankle joints have full, pain-free range of motion without effusion. Vital signs: temperature 38.9 C (102.0 F), blood pressure 98/62 mm Hg, pulse 136/min, and respirations 24/min. Laboratory evaluation demonstrates: white blood cell count 14,800/microL with 80% neutrophils, ESR 52 mm/hr (reference < 20 mm/hr), and C-reactive protein 48 mg/L (reference < 5 mg/L). Plain radiographs of the right hip show a joint effusion without bony destruction. Hip ultrasound demonstrates a significant anechoic right hip joint effusion measuring 8 mm (left hip 2 mm). Which of the following is the most appropriate next step in management?",
    "choices": [
      [
        "Perform urgent ultrasound-guided or fluoroscopic hip joint arthrocentesis for synovial fluid analysis and culture",
        "This child presents with an acute irritable hip and meets 4 out of 4 KOCHER CRITERIA for differentiating SEPTIC ARTHRITIS from TRANSIENT SYNOVITIS: (1) Inability to bear weight (refusal to walk); (2) Fever > 38.5 C (101.3 F); (3) ESR > 40 mm/hr; and (4) Serum WBC > 12,000/microL. With all 4 criteria met, the probability of SEPTIC ARTHRITIS exceeds 93-99%. Septic arthritis of the hip in children is a surgical emergency because the hip capsule is tight; purulent fluid under high pressure causes intra-articular tamponade of the retinacular vessels supplying the femoral head, leading to rapid AVASCULAR NECROSIS of the femoral head and irreversible joint destruction within hours. The mandatory immediate action is URGENT HIP ARTHROCENTESIS (joint aspiration) to obtain synovial fluid for cell count, Gram stain, and culture (most commonly Staphylococcus aureus or Streptococcus pyogenes), followed immediately by SURGICAL JOINT ARTHROTOMY / DRAINAGE and intravenous antibiotics. In contrast, TRANSIENT SYNOVITIS is a benign post-viral synovitis with low-grade fever, weight-bearing preserved, normal-to-mildly elevated inflammatory markers, managed conservatively with NSAIDs."
      ],
      [
        "Reassure the parents, prescribe oral ibuprofen, and schedule outpatient orthopedic clinic follow-up in 48 hours",
        "Watchful waiting with NSAIDs is the management for transient synovitis, but in a patient meeting all 4 Kocher criteria, it leads to rapid avascular necrosis of the femoral head."
      ],
      [
        "Administer oral amoxicillin-clavulanate for 10 days and apply a right lower extremity fiberglass walking cast",
        "Casting an acutely infected joint traps purulent exudate under pressure, worsening ischemic necrosis of the femoral epiphysis, and oral antibiotics are inadequate."
      ],
      [
        "Order a bone scintigraphy (technetium-99m bone scan) and await imaging results prior to invasive procedures",
        "Nuclear bone scans take hours to perform and cannot distinguish septic effusion from severe inflammatory synovitis; delaying arthrocentesis risks permanent hip destruction."
      ],
      [
        "Perform immediate open surgical epiphysiodesis with percutaneous cannulated screw placement",
        "In situ screw fixation is the treatment for slipped capital femoral epiphysis (SCFE) in adolescents, not acute septic arthritis in a febrile toddler."
      ]
    ],
    "shortestValidSolution": "Fever 38.9 + non-weight bearing + ESR 52 + WBC 14.8k (Kocher 4/4) = Septic arthritis -> Urgent Hip Arthrocentesis.",
    "necessaryInference": "Apply the Kocher criteria to identify high-probability septic arthritis requiring immediate emergency hip aspiration and surgical decompression.",
    "strongestDistractor": "Reassure the parents, prescribe oral ibuprofen, and schedule outpatient orthopedic clinic follow-up in 48 hours",
    "distractorExclusion": "Ibuprofen and outpatient observation are appropriate for transient synovitis (Kocher score 0-1), but with 4 criteria met (>93% septic arthritis), delaying aspiration causes avascular necrosis.",
    "citation": "Kocher MS, Zurakowski D, Kasser JR. Differentiating between septic arthritis and transient synovitis of the hip in children: an evidence-based clinical prediction algorithm. J Bone Joint Surg Am. 1999;81(12):1662-1670. PMID: 10608376.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics emergency item testing application of Kocher clinical prediction rules for septic arthritis versus transient synovitis.",
      "distractorExclusionNotes": "Distractors feature transient synovitis conservative care, inappropriate joint casting, delayed nuclear medicine scans, and SCFE screw fixation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0640",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Slipped Capital Femoral Epiphysis Urgent Surgical Fixation",
    "provisionalDifficulty": 4,
    "stem": "A 13-year-old obese boy (BMI 32 kg/m^2, >97th percentile) presents to the outpatient clinic with a 6-week history of progressive right knee and medial thigh pain accompanied by a noticeable limp. He denies any direct trauma, falls, or systemic symptoms such as fever or weight loss. On examination, the patient ambulates with an antalgic, out-toed (externally rotated) gait on the right side. Examination of the right knee reveals no joint effusion, ligamentous laxity, or joint-line tenderness, with full pain-free passive range of motion. Examination of the right hip reveals marked restriction of internal rotation, abduction, and flexion; as the right hip is passively flexed to 90 degrees, the thigh automatically drifts into external rotation and abduction. The left hip examination is normal. Anteroposterior and frog-leg lateral radiographs of both hips reveal posterior and medial displacement of the right femoral head relative to the femoral neck ('ice cream slipping off the cone'), with disruption of Klein's line. Which of the following is the most appropriate immediate management?",
    "choices": [
      [
        "Place the patient on strict non-weight-bearing status and arrange urgent surgical in situ single-screw fixation",
        "This patient presents with SLIPPED CAPITAL FEMORAL EPIPHYSIS (SCFE), an orthopedic emergency occurring classically in obese adolescent males (aged 10-16 years). Mechanical shear stress across the hypertrophic zone of the proximal femoral growth plate causes the femoral neck to displace anteriorly and superiorly while the femoral head (epiphysis) remains in the acetabulum, resulting in a POSTEROMEDIAL DISPLACEMENT of the epiphysis relative to the neck. Because sensory fibers from the obturator nerve innervate both the hip and knee, patients frequently present with REFERRED KNEE OR THIGH PAIN without knee pathology, leading to misdiagnosis and delayed treatment. Key exam sign: loss of internal rotation with obligatory external rotation during hip flexion. Diagnosis is confirmed on AP and FROG-LEG LATERAL PELVIC RADIOGRAPHS. Immediate management requires: (1) STRICT NON-WEIGHT-BEARING with crutches or wheelchair immediately to prevent acute unstable slippage; and (2) URGENT SURGICAL IN SITU CANNULATED SCREW FIXATION to stabilize the epiphysis and arrest further slippage. Attempted closed reduction or traction is strictly contraindicated because it tears retinacular vessels, inducing avascular necrosis (AVN) of the femoral head."
      ],
      [
        "Perform forceful bedside closed reduction and cast immobilization in a hip Spica cast",
        "Attempted closed reduction in stable SCFE stretches and tears the posterior retinacular blood vessels, directly causing catastrophic avascular necrosis of the femoral head."
      ],
      [
        "Initiate aggressive physical therapy with active hip internal rotation exercises and prescribe oral naproxen",
        "Physical therapy and weight-bearing in SCFE increase mechanical shear stress across the unstable growth plate, precipitating an acute complete slip with avascular necrosis."
      ],
      [
        "Reassure the patient and family that this represents benign Osgood-Schlatter apophysitis and permit sports",
        "Attributing referred knee pain in an adolescent to Osgood-Schlatter without examining the hip leads to unrecognized SCFE progression, chondrolysis, and permanent deformity."
      ],
      [
        "Perform urgent bilateral hip joint arthrocentesis to rule out occult septic arthritis",
        "SCFE is an afebrile, chronic mechanical biomechanical disorder; invasive joint aspiration is unwarranted and risks introducing iatrogenic joint infection."
      ]
    ],
    "shortestValidSolution": "Obese 13-year-old + referred knee pain + obligatory external rotation on flexion + Klein's line disruption = SCFE -> Strict non-weight-bearing + In situ screw fixation.",
    "necessaryInference": "Recognize SCFE from referred knee pain and obligatory hip external rotation, mandating strict non-weight-bearing and urgent in situ screw fixation without reduction.",
    "strongestDistractor": "Perform forceful bedside closed reduction and cast immobilization in a hip Spica cast",
    "distractorExclusion": "Closed reduction in SCFE is contraindicated because manipulation disrupts retinacular vessels and induces avascular necrosis; in situ fixation is the standard of care.",
    "citation": "Peck DM, Voss LM, Voss TT. Slipped capital femoral epiphysis: diagnosis and management. Am Fam Physician. 2017;95(12):779-784. PMID: 28671425.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics item testing recognition of SCFE presentation (referred knee pain, external rotation gait), x-ray signs, and non-weight-bearing screw fixation.",
      "distractorExclusionNotes": "Distractors feature contraindicated forceful closed reduction (AVN risk), harmful physical therapy, misdiagnosis as Osgood-Schlatter, and unnecessary arthrocentesis.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0641",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Musculoskeletal",
    "topic": "Legg-Calve-Perthes Disease Clinical Evaluation and Staging",
    "provisionalDifficulty": 4,
    "stem": "A 6-year-old boy is brought to the clinic by his mother because of an insidious, painless limp on the right side for the past 2 months. Over the past 2 weeks, he has complained of a dull ache in the right groin and anteromedial thigh that worsens toward the end of the day after physical activity and improves with rest. He has had no fever, chills, recent trauma, or preceding viral illnesses. Physical examination reveals a mild Trendelenburg limp on the right. Examination of the right hip shows decreased internal rotation and abduction compared to the left; flexion and extension are preserved. Thigh circumference measurement reveals 1.5 cm of atrophy in the right quadriceps compared to the left. Neurologic examination of the lower extremities is intact. Anteroposterior and frog-leg lateral radiographs of the pelvis demonstrate subtle flattening, fragmentation, and sclerosis of the right femoral capital epiphysis with widening of the medial joint space. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "Legg-Calv\u00e9-Perthes disease (idiopathic avascular osteonecrosis of the capital femoral epiphysis)",
        "This patient exhibits classic presentation and radiographic features of LEGG-CALV\u00c9-PERTHES DISEASE (LCPD), an idiopathic avascular necrosis (osteonecrosis) of the femoral head occurring predominantly in boys between 4 and 8 years of age (male-to-female ratio 4:1). Pathophysiology involves self-limiting ischemic infarction of the capital femoral epiphysis followed by revascularization, resorption of necrotic bone, and gradual re-ossification over 2-5 years. Clinical presentation: insidious onset of a painless or mildly painful limp, with pain located in the groin, anterior thigh, or knee that worsens with activity. Physical exam reveals restricted HIP ABDUCTION AND INTERNAL ROTATION, often with disuse muscle atrophy of the ipsilateral thigh. Radiographs demonstrate the classic stages: early subchondral radiolucent fracture (crescent sign), followed by sclerotic density, fragmentation, collapse, and re-ossification of the femoral head. Initial management is non-operative containment (activity modification, physical therapy to preserve range of motion) in children under 6 years, with surgery considered for older children or lateral subluxation."
      ],
      [
        "Transient synovitis of the hip with post-infectious reactive joint effusion",
        "Transient synovitis occurs acutely after a viral illness in younger children and resolves completely within 1-2 weeks; radiographs are normal without osteonecrosis."
      ],
      [
        "Slipped capital femoral epiphysis with posteromedial displacement of the femoral head",
        "SCFE occurs typically in obese adolescents (ages 10-16), showing posterior displacement of the epiphysis on frog-leg views, rather than avascular fragmentation in a 6-year-old."
      ],
      [
        "Juvenile idiopathic arthritis manifesting as systemic-onset enthesitis-related arthritis",
        "JIA presents with persistent inflammatory synovitis, morning stiffness, joint warmth/swelling, elevated inflammatory markers, and absence of epiphyseal osteonecrosis."
      ],
      [
        "Developmental dysplasia of the hip with secondary acetabular labral tear",
        "DDH is diagnosed in infancy with Ortolani/Barlow clicks and limb length discrepancy, not with primary avascular collapse of the femoral capital epiphysis at age 6."
      ]
    ],
    "shortestValidSolution": "6-year-old boy + insidious limp + loss of hip abduction/internal rotation + fragmented sclerotic femoral head = Legg-Calv\u00e9-Perthes disease.",
    "necessaryInference": "Differentiate Legg-Calv\u00e9-Perthes disease (age 4-8, avascular fragmentation on x-ray) from SCFE (adolescents), transient synovitis (acute/normal x-ray), and JIA.",
    "strongestDistractor": "Slipped capital femoral epiphysis with posteromedial displacement of the femoral head",
    "distractorExclusion": "SCFE affects older adolescents (10-16 years) and displays displacement along Klein's line; Perthes affects younger boys (4-8 years) with avascular flattening/fragmentation.",
    "citation": "Kim HK. Legg-Calve-Perthes disease. J Am Acad Orthop Surg. 2010;18(11):676-686. PMID: 21041499.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric orthopedics item testing distinction between pediatric hip disorders based on age, presentation timeline, and radiographic findings.",
      "distractorExclusionNotes": "Distractors feature adolescent SCFE, self-limiting acute transient synovitis, autoimmune inflammatory arthritis, and congenital dysplasia.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0642",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Cystic Fibrosis Acute Pulmonary Exacerbation Antipseudomonal Regimen",
    "provisionalDifficulty": 5,
    "stem": "A 15-year-old girl with cystic fibrosis (homozygous for the F508del CFTR mutation) is admitted to the hospital with a pulmonary exacerbation manifested by increased cough, copious green purulent sputum production, exertional dyspnea, and an unintended 3-kg weight loss over the past 3 weeks. Her baseline FEV1 is 74% of predicted; spirometry performed today shows a decline to 52% of predicted. Physical examination reveals digital clubbing, bilateral coarse crackles, and scattered expiratory wheezes. Temperature is 37.9 C (100.2 F), pulse is 102/min, and respirations are 24/min. Pulse oximetry is 91% on room air. Sputum Gram stain reveals numerous neutrophils and abundant gram-negative rods. Prior respiratory cultures have consistently grown mucoid Pseudomonas aeruginosa. In addition to intensified chest physiotherapy and airway clearance, which of the following antimicrobial regimens represents the standard guideline-directed approach for this patient's acute pulmonary exacerbation?",
    "choices": [
      [
        "Combination intravenous antipseudomonal therapy utilizing two agents from different antimicrobial classes (e.g., an antipseudomonal beta-lactam plus an aminoglycoside)",
        "This patient with cystic fibrosis presents with an ACUTE PULMONARY EXACERBATION characterized by worsening respiratory symptoms, sputum production, weight loss, and an acute drop in FEV1 (>10% decline). In older children and adolescents with CF, the predominant lower airway pathogen is PSEUDOMONAS AERUGINOSA, which frequently adopts an alginate-producing MUCOID PHENOTYPE that forms resilient biofilms in the airways. Current Cystic Fibrosis Foundation (CFF) clinical practice guidelines mandate COMBINATION INTRAVENOUS ANTIMICROBIAL THERAPY WITH TWO ANTIPSEUDOMONAL DRUGS WITH DIFFERENT MECHANISMS OF ACTION for 10-14 days. Standard combination: an ANTIPSEUDOMONAL BETA-LACTAM (e.g., cefepime, piperacillin-tazobactam, or ceftazidime) PLUS an AMINOGLYCOSIDE (e.g., tobramycin) or fluoroquinolone. Dual therapy is essential to provide SYNERGISTIC BACTERICIDAL KILLING, overcome biofilm resistance, and PREVENT THE EMERGENCE OF RESISTANT STRAINS during therapy. Monotherapy is strictly contraindicated."
      ],
      [
        "Oral ciprofloxacin monotherapy as an outpatient course for 7 days to preserve quality of life",
        "Outpatient oral monotherapy is inadequate for severe exacerbations with a 22% FEV1 drop, hypoxemia, and mucoid biofilm Pseudomonas, rapidly generating fluoroquinolone resistance."
      ],
      [
        "Intravenous vancomycin monotherapy targeting MRSA while withholding gram-negative coverage",
        "Mucoid Pseudomonas aeruginosa is the established driver of airway damage in CF adolescents; withholding antipseudomonal therapy causes irreversible bronchiectasis and death."
      ],
      [
        "Aerosolized tobramycin inhalation monotherapy twice daily without any systemic intravenous antibiotics",
        "Inhaled tobramycin is used for chronic suppressive maintenance therapy between exacerbations, but is insufficient as monotherapy to treat acute severe systemic exacerbations."
      ],
      [
        "Oral trimethoprim-sulfamethoxazole monotherapy combined with high-dose oral prednisone",
        "Pseudomonas aeruginosa is inherently resistant to trimethoprim-sulfamethoxazole, rendering this regimen entirely ineffective."
      ]
    ],
    "shortestValidSolution": "CF adolescent + acute exacerbation + 22% FEV1 drop + mucoid Pseudomonas = Severe CF exacerbation -> Two IV antipseudomonal drugs (Beta-lactam + Tobramycin).",
    "necessaryInference": "Apply CF Foundation guidelines requiring two synergistic IV antipseudomonal agents from different classes to treat Pseudomonas exacerbation and prevent resistance.",
    "strongestDistractor": "Aerosolized tobramycin inhalation monotherapy twice daily without any systemic intravenous antibiotics",
    "distractorExclusion": "Inhaled tobramycin is maintenance therapy for chronic colonization; acute severe pulmonary exacerbations with FEV1 decline mandate dual intravenous antipseudomonal therapy.",
    "citation": "Flume PA, Mogayzel PJ Jr, Robinson KA, et al. Cystic fibrosis pulmonary guidelines: treatment of pulmonary exacerbations. Am J Respir Crit Care Med. 2009;180(9):802-808. PMID: 19713449.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics/pulmonology item testing evidence-based antimicrobial management of Pseudomonas pulmonary exacerbation in cystic fibrosis.",
      "distractorExclusionNotes": "Distractors feature oral monotherapy promoting resistance, isolated MRSA coverage ignoring gram-negatives, maintenance inhaled monotherapy, and intrinsically resistant TMP-SMX.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0643",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Biliary Atresia Direct Hyperbilirubinemia and Kasai Procedure",
    "provisionalDifficulty": 4,
    "stem": "A 3-week-old full-term male infant is brought to the clinic for evaluation of persistent yellowing of his skin and eyes. He was discharged from the nursery at 48 hours of life with mild physiologic jaundice that was expected to resolve. His mother reports that over the past week his jaundice has deepened, his urine leaves dark brown stains on his diapers, and his stools have become pale, clay-colored, and chalky white (acholic). The infant is exclusively breastfed, feeds vigorously, and has gained weight normally. Physical examination reveals marked scleral icterus and generalized jaundice. Abdominal examination demonstrates a firm, smooth liver edge palpable 3 cm below the right costal margin; the spleen tip is palpable 1 cm below the left costal margin. Laboratory studies show: total serum bilirubin 9.4 mg/dL with a direct (conjugated) bilirubin of 6.8 mg/dL (normal < 0.3 mg/dL), AST 142 U/L, ALT 128 U/L, alkaline phosphatase 580 U/L, and gamma-glutamyl transferase (GGT) 410 U/L (markedly elevated). Abdominal ultrasonography reveals an absent or rudimentary gallbladder with an echogenic fibrotic remnant in the porta hepatis ('triangular cord sign'). Which of the following is the most critical next step to establish the definitive diagnosis and prevent irreversible hepatic cirrhosis?",
    "choices": [
      [
        "Perform urgent intraoperative cholangiography followed immediately by hepatoportoenterostomy (Kasai procedure)",
        "This infant presents with classic features of BILIARY ATRESIA (extrahepatic cholangiopathy), the most common cause of neonatal cholestasis and pediatric liver transplantation. Pathogenesis: progressive inflammatory fibrosclerosing obliteration of the extrahepatic biliary tree shortly after birth. Hallmark clinical features: healthy full-term infant with progressive jaundice beyond 2 weeks of life, ACHOLIC (CLAY-COLORED) STOOLS (due to absence of stercobilin), DARK TEA-COLORED URINE (conjugated bilirubin is water-soluble and filtered by kidneys), and DIRECT (CONJUGATED) HYPERBILIRUBINEMIA (conjugated bilirubin > 1 mg/dL or >20% of total). The 'triangular cord sign' on ultrasound represents a fibrotic ductal remnant at the porta hepatis. The gold standard confirmatory diagnostic procedure is INTRAOPERATIVE CHOLANGIOGRAPHY, which demonstrates complete biliary ductal non-visualization. If confirmed, an IMMEDIATE HEPATOPORTOENTEROSTOMY (KASAI PROCEDURE)\u2014anastomosis of a Roux-en-Y jejunal loop to the porta hepatis\u2014is performed. TIME IS CRITICAL: surgical success and bile drainage exceed 80% if the Kasai is performed BEFORE 60 DAYS OF LIFE; after 90 days, biliary cirrhosis is irreversible, leading to liver failure and mandatory transplantation."
      ],
      [
        "Discontinue breastfeeding for 72 hours to distinguish breast milk jaundice from biliary disease",
        "Breast milk jaundice causes benign UNCONJUGATED hyperbilirubinemia with normal pigmented stools; stopping breastfeeding in direct conjugated hyperbilirubinemia delays life-saving surgery."
      ],
      [
        "Reassure the mother that physiologic jaundice peaks at 4 weeks and schedule routine follow-up at 2 months",
        "Conjugated hyperbilirubinemia (direct bilirubin > 1 mg/dL) is NEVER physiologic; delaying evaluation beyond 60 days results in permanent biliary cirrhosis."
      ],
      [
        "Initiate oral phenobarbital monotherapy to stimulate canalicular organic anion transport",
        "Phenobarbital does not bypass complete mechanical fibrotic obstruction of the biliary tree and delays urgent surgical hepatoportoenterostomy."
      ],
      [
        "Perform emergent total pancreatectomy and splenectomy for suspected extrahepatic cystic fibrosis",
        "Pancreatectomy does not restore biliary flow and causes severe endocrine and exocrine insufficiency; Kasai hepatoportoenterostomy is the indicated procedure."
      ]
    ],
    "shortestValidSolution": "3-week-old + acholic stools + dark urine + direct bilirubin 6.8 + triangular cord sign = Biliary atresia -> Urgent Cholangiogram + Kasai procedure (<60 days).",
    "necessaryInference": "Recognize direct hyperbilirubinemia and acholic stools as biliary atresia requiring urgent Kasai hepatoportoenterostomy before 60 days to prevent cirrhosis.",
    "strongestDistractor": "Discontinue breastfeeding for 72 hours to distinguish breast milk jaundice from biliary disease",
    "distractorExclusion": "Breast milk jaundice is unconjugated hyperbilirubinemia with normal pigmented stools; conjugated hyperbilirubinemia is always pathologic and requires urgent surgical workup.",
    "citation": "Fawaz R, Baumann U, Ekong U, et al. Guideline for the evaluation of cholestatic jaundice in infants: recommendations of the North American Society for Pediatric Gastroenterology, Hepatology and Nutrition. J Pediatr Gastroenterol Nutr. 2017;64(1):154-168. PMID: 27429428.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric gastroenterology item testing recognition of direct hyperbilirubinemia in biliary atresia and urgency of the Kasai procedure (<60 days).",
      "distractorExclusionNotes": "Distractors feature confusing unconjugated breast milk jaundice, dangerous watchful waiting causing cirrhosis, ineffective phenobarbital, and inappropriate pancreatectomy.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0644",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Respiratory",
    "topic": "Congenital Diaphragmatic Hernia Endotracheal Intubation Protocol",
    "provisionalDifficulty": 5,
    "stem": "A full-term male infant is born via spontaneous vaginal delivery to a 24-year-old primigravida who received no prenatal care. Immediately upon delivery, the newborn exhibits severe respiratory distress with cyanosis, grunting, and prominent sternal and intercostal retractions. APGAR scores are 3 at 1 minute and 4 at 5 minutes. Physical examination reveals a strikingly scaphoid (sunken) abdomen and an asymmetric, barrel-shaped chest. Auscultation reveals a complete absence of breath sounds over the left hemithorax with bowel sounds clearly audible in the left chest. Heart sounds are loudest over the right chest wall. Vital signs: pulse 178/min, respirations 68/min, and oxygen saturation 72% despite high-flow blow-by oxygen. A resident physician prepares a bag-valve-mask resuscitator to begin positive-pressure face-mask ventilation. Which of the following is the most appropriate immediate action in the delivery room?",
    "choices": [
      [
        "Halt bag-valve-mask ventilation immediately and perform urgent endotracheal intubation followed by placement of a continuous-suction nasogastric tube",
        "This newborn presents with classic features of CONGENITAL DIAPHRAGMATIC HERNIA (CDH), usually caused by failure of the pleuroperitoneal membrane to close during embryonic development (most commonly the left posterolateral foramen of Bochdalek, ~85%). Abdominal viscera (stomach, small and large bowel, spleen, left lobe of liver) herniate into the thoracic cavity, compressing the developing lung and causing severe PULMONARY HYPOPLASIA, severe pulmonary vascular remodeling, and persistent pulmonary hypertension of the newborn (PPHN). Triad: (1) Severe respiratory distress at birth; (2) Scaphoid abdomen (due to displacement of viscera into chest); and (3) Bowel sounds in chest with dextroposition of heart sounds. The MOST CRITICAL RESUSCITATION DIRECTIVE IS: AVOID BAG-VALVE-MASK VENTILATION. Face-mask positive pressure forces air directly into the stomach and herniated intestinal loops within the thorax, causing rapid gastric distension that critically worsens lung compression and triggers tension pneumothorax or immediate cardiac arrest. Management requires IMMEDIATE DIRECT ENDOTRACHEAL INTUBATION and placement of a double-lumen NASOGASTRIC TUBE (Replogle tube) to continuous low suction to decompress the gastrointestinal tract."
      ],
      [
        "Initiate vigorous bag-valve-mask positive-pressure ventilation with 100% fraction of inspired oxygen",
        "Bag-mask ventilation forces air into the stomach and thoracic herniated bowel loops, precipitating fatal mass effect, pneumothorax, and cardiopulmonary arrest."
      ],
      [
        "Insert a 14-gauge needle into the left second intercostal space for emergency tension pneumothorax decompression",
        "Needle decompression in CDH punctures the herniated stomach or intestine, causing bowel perforation and fatal polymicrobial contamination of the mediastinum."
      ],
      [
        "Transfer immediately to the operating suite for emergency open surgical diaphragmatic repair in the first hour of life",
        "Immediate emergency surgery is contraindicated; CDH infants require medical stabilization of pulmonary hypertension (gentle ventilation, sedation, ECMO if needed) for 24-72 hours before elective repair."
      ],
      [
        "Administer high-dose intravenous epinephrine bolus and perform continuous closed-chest cardiac compressions",
        "The infant has an active heart rate of 178/min; chest compressions and epinephrine are unwarranted and distract from establishing secure airway intubation."
      ]
    ],
    "shortestValidSolution": "Scaphoid abdomen + bowel sounds in left chest + severe cyanosis = CDH -> Stop bag-mask ventilation + Emergent Endotracheal Intubation + NGT decompression.",
    "necessaryInference": "Recognize congenital diaphragmatic hernia and enforce the delivery room rule: strictly avoid bag-mask ventilation and perform immediate endotracheal intubation.",
    "strongestDistractor": "Initiate vigorous bag-valve-mask positive-pressure ventilation with 100% fraction of inspired oxygen",
    "distractorExclusion": "Bag-mask ventilation inflates herniated thoracic bowel, causing acute catastrophic compression of the contralateral lung and cardiovascular collapse.",
    "citation": "Hedrick HL. Congenital diaphragmatic hernia: update on management. NeoReviews. 2021;22(2):e93-e106. PMID: 33526552.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology emergency item testing delivery room management of congenital diaphragmatic hernia and the absolute contraindication to bag-mask ventilation.",
      "distractorExclusionNotes": "Distractors feature lethal bag-mask ventilation, hazardous needle decompression puncturing bowel, premature emergent surgery before stabilization, and unnecessary chest compressions.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0645",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Necrotizing Enterocolitis Pneumatosis Intestinalis and Medical Care",
    "provisionalDifficulty": 5,
    "stem": "A 10-day-old male infant born at 29 weeks of gestation (birth weight 1,150 g) has been receiving advancing enteral feedings with preterm formula. Over the past 6 hours, he has developed feeding intolerance manifested by large gastric residuals containing bile, progressive abdominal distension, and lethargy. Physical examination shows an ill-appearing, hypotonic infant. Temperature is 36.1 C (97.0 F), heart rate is 178/min, and blood pressure is 52/30 mm Hg. The abdomen is tensely distended, shiny, and erythematous, with visible superficial venous engorgement and absent bowel sounds. Palpation of the abdomen elicits crying and grimacing. Stool testing demonstrates gross blood (hematochezia). Complete blood count reveals: white blood cell count 3,800/microL with 32% bands, platelet count 48,000/microL (thrombocytopenia), and venous blood gas shows pH 7.22 and serum bicarbonate 14 mEq/L (metabolic acidosis). Anteroposterior and left lateral decubitus abdominal radiographs demonstrate linear, curvilinear lucencies outlining the bowel wall (pneumatosis intestinalis) and branching lucencies within the hepatic silhouette (portal venous gas), with no free air under the diaphragm. Which of the following represents the most appropriate initial management?",
    "choices": [
      [
        "Discontinue all enteral feedings immediately, place a nasogastric tube to low continuous suction, administer broad-spectrum intravenous antibiotics, and obtain urgent pediatric surgical consultation",
        "This premature infant presents with stage IIB/III NECROTIZING ENTEROCOLITIS (NEC), the most common gastrointestinal emergency in premature infants. Pathophysiology: immaturity of intestinal mucosal barrier, immature local immunity, and formula feeding allow bacterial proliferation (often gas-producing organisms) and translocation, causing transmural bowel inflammation, mucosal ischemia, and necrosis. Classic presentation: premature infant on enteral feeds with feeding intolerance (gastric residuals, bilious emesis), abdominal distension, abdominal wall erythema, and bloody stools, accompanied by systemic sepsis (hypothermia, apnea, bradycardia, thrombocytopenia, metabolic acidosis). Pathognomonic radiographic findings: PNEUMATOSIS INTESTINALIS (gas produced by bacteria dissecting into the bowel wall submucosa/subserosa) and PORTAL VENOUS GAS (gas traveling via mesenteric veins to the liver). Immediate medical management includes: (1) CESSATION OF ALL ENTERAL FEEDS (NPO); (2) NASOGASTRIC TUBE DECOMPRESSION to relieve luminal distension; (3) AGGRESSIVE RESUSCITATION with isotonic crystalloid and correction of thrombocytopenia/acidosis; (4) BROAD-SPECTRUM INTRAVENOUS ANTIMICROBIALS (e.g., ampicillin, gentamicin, and metronidazole or vancomycin/meropenem); and (5) URGENT PEDIATRIC SURGERY CONSULTATION. Surgical exploration or peritoneal drain placement is indicated for bowel perforation (pneumoperitoneum) or medical failure."
      ],
      [
        "Change formula to an extensively hydrolyzed casein infant formula and continue feeds at half volume",
        "Continuing enteral feeds of any kind in active necrotizing enterocolitis supplies additional bacterial substrate, accelerating transmural necrosis and perforation."
      ],
      [
        "Administer oral activated charcoal and perform an emergency water-soluble contrast enema",
        "Contrast enemas in NEC dramatically increase intraluminal pressure across an ischemic, necrotic bowel wall, precipitating catastrophic perforation."
      ],
      [
        "Perform emergent total proctocolectomy with end ileostomy within 60 minutes",
        "Immediate radical surgery is not indicated in the absence of pneumoperitoneum or clinical deterioration refractory to medical resuscitation."
      ],
      [
        "Administer subcutaneous erythromycin to stimulate motilin receptors and accelerate gastric emptying",
        "Prokinetic agents are contraindicated in mechanical or ischemic bowel obstruction and worsen ischemic necrosis."
      ]
    ],
    "shortestValidSolution": "Premature infant on feeds + abdominal distension + bloody stool + pneumatosis intestinalis = NEC -> NPO + NGT suction + IV Antibiotics + Surgery consult.",
    "necessaryInference": "Recognize necrotizing enterocolitis from pneumatosis intestinalis and enact conservative medical bundle: immediate bowel rest, gastric decompression, and broad-spectrum antibiotics.",
    "strongestDistractor": "Change formula to an extensively hydrolyzed casein infant formula and continue feeds at half volume",
    "distractorExclusion": "Continuing any enteral feeds in necrotizing enterocolitis fuels bacterial gas production and mucosal necrosis; strict NPO is mandatory.",
    "citation": "Neu J, Walker WA. Necrotizing enterocolitis. N Engl J Med. 2011;364(3):255-264. PMID: 21247316.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK neonatology item testing recognition of necrotizing enterocolitis (pneumatosis intestinalis, portal venous gas) and prompt medical bundle initiation.",
      "distractorExclusionNotes": "Distractors feature continuing enteral feedings, dangerous contrast enemas risking perforation, premature radical surgery without perforation, and contraindicated prokinetics.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0646",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Renal",
    "topic": "Wilms Tumor Nephroblastoma Clinical Characteristics",
    "provisionalDifficulty": 4,
    "stem": "A 3-year-old previously healthy girl is brought to the pediatric clinic by her mother, who noticed a firm lump in the child's abdomen while giving her a bath yesterday evening. The mother states that the child has been active, playful, and asymptomatic, without fevers, vomiting, or abdominal pain. Physical examination reveals an alert, well-nourished toddler. Blood pressure is 124/82 mm Hg (>99th percentile for age and sex), pulse is 96/min, and respirations are 20/min. Abdominal examination demonstrates a large, firm, smooth, non-tender mass in the left flank that is non-mobile and does not cross the abdominal midline. The abdomen is otherwise soft with normal active bowel sounds. Urinalysis shows 2+ blood with 15-20 red blood cells per high-power field and no pyuria or proteinuria. Complete blood count is normal. Abdominal ultrasonography reveals a well-circumscribed, solid, heterogenous intrarenal mass measuring 8.5 cm arising from the upper pole of the left kidney, with a rim of normal compressed renal parenchyma ('claw sign'). The contralateral right kidney is normal. Which of the following is the most likely diagnosis?",
    "choices": [
      [
        "Wilms tumor (nephroblastoma arising from embryonic metanephric blastema)",
        "This patient exhibits the classic presentation of WILMS TUMOR (nephroblastoma), the most common pediatric renal malignancy (peak incidence 2 to 5 years). Pathogenesis involves proliferation of embryonic renal precursor cells (metanephric blastema), associated with alterations in tumor suppressor genes on chromosome 11p (WT1 at 11p13, WT2 at 11p15), seen in syndromes such as WAGR (Wilms, Aniridia, Genitourinary anomalies, Retardation), Denys-Drash, and Beckwith-Wiedemann. Classic presentation: asymptomatic, unilateral, SMOOTH, FIRM ABDOMINAL FLANK MASS THAT DOES NOT CROSS THE MIDLINE, discovered incidentally during bathing. Associated findings include HYPERTENSION (in 25-50% due to renin secretion by compressed renal tissue or tumor) and MICROSCOPIC OR MACROSCOPIC HEMATURIA. Ultrasound and CT confirm an INTRARENAL MASS distorting the collecting system ('claw sign'). In contrast, NEUROBLASTOMA arises from neural crest cells in the adrenal medulla, occurs in younger infants (<2 years), is IRREGULAR, NODULAR, CROSSES THE MIDLINE, and presents with systemic illness (fever, weight loss, raccoon eyes, opsoclonus-myoclonus) and calcifications on imaging."
      ],
      [
        "Neuroblastoma arising from the adrenal medulla and sympathetic chain",
        "Neuroblastoma typically presents in younger children (<2 years) as an irregular, calcified abdominal mass that CROSSES THE MIDLINE, with systemic constitutional illness and elevated catecholamines."
      ],
      [
        "Renal cell carcinoma arising from proximal tubular epithelial cells",
        "Renal cell carcinoma is exceptionally rare in young children (typical in adults >50 or adolescents with sickle cell trait/von Hippel-Lindau) and presents with flank pain and palpable mass."
      ],
      [
        "Autosomal recessive polycystic kidney disease with hepatic fibrosis",
        "ARPKD presents in newborns or infants with bilateral massive flank masses, oligohydramnios sequence, pulmonary hypoplasia, and congenital hepatic fibrosis."
      ],
      [
        "Hydronephrosis secondary to congenital ureteropelvic junction obstruction",
        "Congenital UPJ obstruction produces a cystic, fluctuant, non-solid fluid-filled mass on ultrasound that typically manifests with episodic flank pain during diuresis or pyelonephritis."
      ]
    ],
    "shortestValidSolution": "3-year-old + asymptomatic smooth flank mass that DOES NOT cross midline + hypertension + hematuria = Wilms tumor.",
    "necessaryInference": "Differentiate Wilms tumor (smooth, unilateral intrarenal mass, does not cross midline, peak age 3) from neuroblastoma (crosses midline, irregular, systemic symptoms).",
    "strongestDistractor": "Neuroblastoma arising from the adrenal medulla and sympathetic chain",
    "distractorExclusion": "Neuroblastoma is an irregular mass that crosses the midline and causes systemic illness; Wilms tumor is a smooth, well-demarcated intrarenal mass that does not cross the midline.",
    "citation": "Dome JS, Graf N, Geller JI, et al. Advances in Wilms tumor treatment and biology: progress through international collaboration. J Clin Oncol. 2015;33(27):2999-3007. PMID: 26304882.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric oncology item testing clinical and radiographic discrimination between Wilms tumor and neuroblastoma.",
      "distractorExclusionNotes": "Distractors feature neuroblastoma crossing midline, adult renal cell carcinoma, bilateral ARPKD, and cystic UPJ obstruction.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0647",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Endocrine",
    "topic": "Neuroblastoma Clinical Presentation and Diagnostic Biomarkers",
    "provisionalDifficulty": 4,
    "stem": "An 18-month-old boy is brought to the clinic because of progressive irritability, low-grade fevers, decreased appetite, and dark discoloration around both eyes over the past month. His parents also note that over the past week he has developed rapid, involuntary, chaotic eye movements in all directions and jerky movements of his arms and legs that make it difficult for him to walk. On examination, the child appears chronically ill and irritable. Bilateral dark purple periorbital ecchymoses ('raccoon eyes') are present without evidence of facial trauma. Neurologic examination confirms rapid, conjugate multidirectional saccadic eye movements (opsoclonus) and brief, non-rhythmic muscle jerks of the trunk and limbs (myoclonus). Abdominal examination reveals a hard, fixed, lobulated, and non-tender abdominal mass extending across the midline into both upper quadrants. Plain abdominal radiograph demonstrates fine, stippled calcifications within the mass. Which of the following laboratory findings is most characteristic of this patient's underlying condition?",
    "choices": [
      [
        "Markedly elevated 24-hour urinary excretion of homovanillic acid (HVA) and vanillylmandelic acid (VMA)",
        "This patient exhibits the classic clinical presentation of NEUROBLASTOMA, the most common extracranial solid tumor of childhood (most common in children < 2 years). Neuroblastoma originates from neural crest cells in the sympathetic nervous system (adrenal medulla in 50%, paravertebral sympathetic chain in 50%). Hallmark clinical features: (1) Hard, irregular, lobulated, fixed abdominal mass that FREQUENTLY CROSSES THE MIDLINE; (2) STIPPLED CALCIFICATIONS on plain radiographs and CT; (3) Metastatic lesions to periorbital bone causing venous obstruction and retro-orbital hematoma ('RACCOON EYES'); and (4) Paraneoplastic syndromes, most famously OPSOCLONUS-MYOCLONUS-ATAXIA SYNDROME ('dancing eyes, dancing feet' syndrome, caused by autoantibodies directed against cerebellar and neural antigens). Because neuroblasts produce catecholamines, >90-95% of patients demonstrate MARKEDLY ELEVATED URINARY HOMOVANILLIC ACID (HVA, dopamine metabolite) AND VANILLYLMANDELIC ACID (VMA, norepinephrine metabolite). Poor prognostic indicators include MYCN (N-myc) gene amplification and age >= 18 months."
      ],
      [
        "Significantly elevated serum alpha-fetoprotein (AFP) exceeding 50,000 ng/mL",
        "Elevated AFP is characteristic of hepatoblastoma or yolk sac germ cell tumors, not neural crest-derived neuroblastoma."
      ],
      [
        "Excessive urinary excretion of 5-hydroxyindoleacetic acid (5-HIAA)",
        "Elevated 5-HIAA indicates serotonin-secreting neuroendocrine carcinoid tumors, which occur primarily in adults or adolescents with appendiceal lesions."
      ],
      [
        "Elevated serum total beta-human chorionic gonadotropin (beta-hCG)",
        "Beta-hCG is secreted by choriocarcinoma and embryonal germ cell tumors, having zero association with sympathetic neuroblastoma."
      ],
      [
        "Markedly elevated serum parathyroid hormone-related protein (PTHrP)",
        "PTHrP causes hypercalcemia of malignancy in squamous cell carcinoma or adult tumors, not opsoclonus-myoclonus or adrenal neuroblastoma."
      ]
    ],
    "shortestValidSolution": "18-month-old + mass crossing midline + raccoon eyes + opsoclonus-myoclonus = Neuroblastoma -> High urinary HVA and VMA.",
    "necessaryInference": "Synthesize the neural crest origin, clinical signs (raccoon eyes, opsoclonus-myoclonus), and select catecholamine metabolites HVA/VMA as diagnostic biomarkers.",
    "strongestDistractor": "Excessive urinary excretion of 5-hydroxyindoleacetic acid (5-HIAA)",
    "distractorExclusion": "5-HIAA reflects serotonin metabolism in carcinoid tumors; neuroblastoma derives from adrenergic sympathetic tissue producing dopamine and norepinephrine (HVA and VMA).",
    "citation": "Maris JM. Recent advances in neuroblastoma. N Engl J Med. 2010;362(23):2202-2211. PMID: 20558371.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric oncology item testing recognition of neuroblastoma syndromic presentation (raccoon eyes, opsoclonus-myoclonus) and catecholamine biomarkers (VMA/HVA).",
      "distractorExclusionNotes": "Distractors feature hepatic/yolk sac markers (AFP), carcinoid markers (5-HIAA), germ cell markers (beta-hCG), and hypercalcemic peptides (PTHrP).",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0648",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Endocrine",
    "topic": "Constitutional Delay of Growth vs Familial Short Stature",
    "provisionalDifficulty": 4,
    "stem": "A 14-year-old boy is brought to the pediatric endocrine clinic by his parents because he is concerned about being the shortest boy in his 8th-grade class and has not yet started showing signs of puberty. Review of his growth chart shows that his birth length was at the 50th percentile. Between 12 and 24 months of age, his linear growth velocity slowed, crossing percentiles downward to the 3rd percentile, where it has subsequently tracked consistently parallel to the curve for the past 12 years. His father experienced a similar late growth spurt at age 16 and is currently 178 cm (5 ft 10 in) tall; his mother reached menarche at age 15 and is 165 cm (5 ft 5 in) tall. Calculated mid-parental target height is at the 50th percentile. Physical examination shows a healthy adolescent with height at the 3rd percentile and weight at the 10th percentile. Sexual maturity rating (Tanner stage) demonstrates Stage 1 pubic hair and testicular volume of 3 mL bilaterally (prepubertal). Systemic examination is completely normal. Left wrist and hand radiography demonstrates a bone age of 11.5 years (delayed relative to chronological age of 14 years). Which of the following is the most likely diagnosis and long-term prognosis?",
    "choices": [
      [
        "Constitutional delay of growth and puberty, with anticipated normal adult height and late growth spurt",
        "This adolescent presents with CONSTITUTIONAL DELAY OF GROWTH AND PUBERTY (CDGP), the most common cause of short stature and delayed puberty in adolescent boys ('late bloomers'). Key features: (1) Normal birth length and weight; (2) Growth deceleration between 6 and 36 months crossing percentiles down to a lower trajectory; (3) Stable normal growth velocity parallel to the lower percentiles throughout childhood; (4) Positive family history of delayed puberty and late growth spurts in a parent ('late bloomer' father); and (5) DELAYED BONE AGE that is congruent with height age rather than chronological age. Because the epiphyses remain open longer due to delayed pubertal estrogen exposure, these patients continue growing into their late teens and early twenties, achieving a NORMAL FINAL ADULT HEIGHT that matches their genetic mid-parental target height. In contrast, FAMILIAL SHORT STATURE features a BONE AGE EQUAL TO CHRONOLOGICAL AGE, with final adult height remaining short."
      ],
      [
        "Familial short stature with normal bone age matching chronological age and short final adult height",
        "Familial short stature is characterized by bone age that MATCHES chronological age, with final adult height remaining at or below the 3rd percentile."
      ],
      [
        "Isolated growth hormone deficiency requiring immediate recombinant somatotropin replacement",
        "Growth hormone deficiency causes severe, progressive subnormal growth velocity (crossing percentiles downward continuously), not stable growth velocity parallel to the 3rd percentile."
      ],
      [
        "Primary testicular failure (hypergonadotropic hypogonadism) with irreversible gonadal dysgenesis",
        "Primary hypogonadism (e.g., Klinefelter syndrome) presents with elevated gonadotropins (LH/FSH), eunuchoid tall proportions, and small firm testes in late adolescence."
      ],
      [
        "Cushing syndrome secondary to an adrenocorticotropic hormone (ACTH)-secreting pituitary microadenoma",
        "Cushing syndrome produces weight gain with crossing of weight percentiles upward combined with severe growth failure (crossing height downward), not lean body habitus."
      ]
    ],
    "shortestValidSolution": "14-year-old + delayed puberty + family history of late growth spurt + bone age 11.5 yrs = Constitutional delay -> Normal final adult height.",
    "necessaryInference": "Distinguish constitutional delay (delayed bone age, normal growth velocity, normal predicted adult height) from familial short stature (normal bone age, short adult height).",
    "strongestDistractor": "Familial short stature with normal bone age matching chronological age and short final adult height",
    "distractorExclusion": "Familial short stature features bone age consistent with chronological age; constitutional growth delay features delayed bone age and late catch-up to normal adult height.",
    "citation": "Grumback MM. The neuroendocrinology of human puberty revisited. Horm Res. 2002;57 Suppl 2:2-14. PMID: 12065920.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric endocrinology item testing distinction between constitutional delay of growth (delayed bone age) and familial short stature (normal bone age).",
      "distractorExclusionNotes": "Distractors feature familial short stature with normal bone age, pathological growth hormone deficiency with declining velocity, primary hypogonadism, and Cushing syndrome.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0649",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Endocrine",
    "topic": "Congenital Hypothyroidism Prompt Levothyroxine Replacement",
    "provisionalDifficulty": 4,
    "stem": "A 3-week-old female infant is brought to the pediatric clinic for follow-up of newborn screening results. Her parents state that she is an 'extremely quiet, good baby' who rarely cries, sleeps nearly 20 hours a day, and has to be awakened to nurse. She has been feeding poorly with frequent choking and has had only one bowel movement every 3 to 4 days, passing firm dry pellets. Physical examination shows a somnolent, lethargic infant with yellowish skin and sclerae. Temperature is 36.0 C (96.8 F), blood pressure 82/50 mm Hg, pulse 94/min (bradycardia for age), and respirations 28/min. Physical findings include: large anterior and open posterior fontanelles, coarse facial features with a broad flattened nasal bridge, a large protruding tongue (macroglossia), dry cool scaly skin, a distended abdomen with a 2-cm reducible umbilical hernia, and generalized muscular hypotonia ('floppy infant'). Confirmatory serum thyroid testing reveals: thyroid-stimulating hormone (TSH) 142 microU/mL (normal < 10) and free thyroxine (free T4) 0.3 ng/dL (normal 0.9-2.3 ng/dL). Which of the following is the most important reason for immediate initiation of oral levothyroxine therapy?",
    "choices": [
      [
        "To prevent irreversible neurodevelopmental impairment and intellectual disability (cretinism)",
        "This infant has classic, severe CONGENITAL HYPOTHYROIDISM, the most common treatable cause of intellectual disability in children (incidence 1 in 2,000-4,000 births). In >80-85% of cases, it is caused by THYROID DYSDYSGENESIS (aplasia, hypoplasia, or ectopic thyroid tissue, usually at the base of the tongue/lingual thyroid). Infants appear initially normal at birth because maternal thyroxine (T4) crosses the placenta in small amounts. As maternal T4 wanes over the first 2-4 weeks, clinical features emerge: lethargy, excessive sleepiness, poor feeding, constipation, prolonged neonatal unconjugated jaundice, hypothermia, macroglossia, large fontanelles, umbilical hernia, and hypotonia. THYROID HORMONE IS ABSOLUTELY ESSENTIAL FOR POSTNATAL CEREBRAL BRAIN DEVELOPMENT, NEURONAL MIGRATION, AND MYELINATION during the first 2-3 years of life. Initiation of oral LEVOTHYROXINE (10-15 microg/kg/day) WITHIN THE FIRST TWO WEEKS OF LIFE (ideally guided by newborn screening) is MANDATORY to PREVENT PERMANENT, IRREVERSIBLE NEURODEVELOPMENTAL DEFICITS (congenital cretinism)."
      ],
      [
        "To achieve rapid surgical reduction and spontaneous closure of the umbilical hernia",
        "While the umbilical hernia improves with tone normalization, surgical repair is elective and secondary; brain protection is the driving priority."
      ],
      [
        "To prevent sudden unexpected infant death syndrome (SUIDS) secondary to upper airway obstruction",
        "Macroglossia can cause noisy breathing, but the paramount irreversibility is intellectual disability from cerebral dysmyelination."
      ],
      [
        "To suppress autonomous pituitary adenoma proliferation and hyperprolactinemia",
        "Pituitary hyperplasia can occur in chronic severe untreated hypothyroidism, but neurocognitive development dictates emergent therapy."
      ],
      [
        "To accelerate epiphyseal ossification and prevent precocious skeletal maturation",
        "Hypothyroidism causes DELAYED skeletal ossification (epiphyseal dysgenesis), not precocious closure; treatment restores normal bone age."
      ]
    ],
    "shortestValidSolution": "Lethargy + constipation + macroglossia + umbilical hernia + TSH 142 = Congenital hypothyroidism -> Immediate levothyroxine to prevent brain damage/cretinism.",
    "necessaryInference": "Recognize congenital hypothyroidism and identify the critical neurodevelopmental window requiring prompt levothyroxine to prevent irreversible intellectual disability.",
    "strongestDistractor": "To prevent sudden unexpected infant death syndrome (SUIDS) secondary to upper airway obstruction",
    "distractorExclusion": "While macroglossia affects the airway, the primary, irreversible consequence of untreated congenital hypothyroidism is severe neurocognitive and intellectual impairment.",
    "citation": "Rose SR, Wassner AJ, Wintergerst KA, et al. Congenital hypothyroidism: screening and management. Pediatrics. 2020;146(6):e2020037593. PMID: 33229463.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatrics/endocrinology item testing recognition of congenital hypothyroidism symptoms and urgency of levothyroxine for neurocognitive salvage.",
      "distractorExclusionNotes": "Distractors feature cosmetic hernia repair, SUIDS attribution, pituitary suppression, and paradoxical precocious maturation.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  },
  {
    "code": "op-c-s2-0650",
    "exam": "Step 2 CK",
    "subject": "Pediatrics",
    "system": "Gastrointestinal",
    "topic": "Choledochal Cyst Clinical Triad and Complete Surgical Excision",
    "provisionalDifficulty": 5,
    "stem": "A 5-year-old girl is brought to the pediatric clinic because of intermittent, crampy right upper quadrant abdominal pain and yellow discoloration of her eyes over the past 3 weeks. Her mother notes that her urine has been dark amber and her stools occasionally pale. She has had three similar, milder episodes of abdominal pain over the past year that resolved spontaneously. Vital signs are normal. Physical examination shows mild scleral icterus. Abdominal palpation reveals a smooth, firm, mobile, non-tender cystic mass in the right upper quadrant measuring 4 cm. Laboratory evaluation shows: total bilirubin 4.6 mg/dL with direct bilirubin 3.2 mg/dL, alkaline phosphatase 440 U/L, GGT 280 U/L, AST 78 U/L, and ALT 84 U/L. Complete blood count and serum amylase are normal. Abdominal ultrasonography and magnetic resonance cholangiopancreatography (MRCP) reveal a 4.5-cm fusiform cystic dilation of the extrahepatic common bile duct (Todani Type I) with an anomalous pancreaticobiliary duct junction, without intrahepatic biliary duct dilation. Which of the following is the most appropriate definitive management?",
    "choices": [
      [
        "Complete surgical excision of the extrahepatic cyst with Roux-en-Y hepaticojejunostomy to eliminate the risk of malignant cholangiocarcinoma",
        "This patient exhibits the classic clinical presentation of a CHOLEDOCHAL CYST (congenital biliary cyst), most commonly TODANI TYPE I (fusiform dilation of the common bile duct, ~80-90% of cases). Choledochal cysts are strongly associated with an ANOMALOUS PANCREATICOBILIARY DUCT JUNCTION (APBDJ), where the pancreatic duct joins the common bile duct outside the duodenal wall; this allows mixing and reflux of pancreatic enzymes into the biliary tree, causing chronic biliary inflammation, ductal weakness, and cyst formation. Classic triad (present in only 20-30% of patients): (1) Intermittent abdominal pain; (2) Jaundice; and (3) Palpable right upper quadrant mass. DEFINITIVE MANAGEMENT IS COMPLETE SURGICAL CYST EXCISION WITH ROUX-EN-Y HEPATICOJEJUNOSTOMY. Complete resection is MANDATORY because leaving the cyst wall in situ carries a 20-30% lifetime risk of MALIGNANT TRANSFORMATION INTO CHOLANGIOCARCINOMA driven by chronic bile stasis and pancreatic enzyme irritation. Simple internal drainage (cystenterostomy) without resection leaves the malignant risk unaltered and is strictly obsolete."
      ],
      [
        "Endoscopic retrograde cholangiopancreatography (ERCP) with biliary sphincterotomy and expectant observation",
        "Endoscopic sphincterotomy does not relieve the biliary cyst or eliminate the high lifetime risk of cholangiocarcinoma in the retained cyst wall."
      ],
      [
        "Percutaneous transhepatic biliary catheter drainage as definitive long-term outpatient therapy",
        "External biliary drainage carries high risks of chronic ascending cholangitis, catheter dislodgement, and leaves the premalignant cyst epithelium in place."
      ],
      [
        "Surgical internal cystogastrostomy without resection of the dilated common bile duct wall",
        "Internal drainage (cystenterostomy) without cyst excision is obsolete; leaving the cyst wall in place results in a high incidence of fatal cholangiocarcinoma."
      ],
      [
        "Oral ursodeoxycholic acid therapy for 12 months with annual follow-up ultrasound examinations",
        "Ursodeoxycholic acid may improve bile flow temporarily, but cannot resolve structural ductal malformations or mitigate malignant transformation risk."
      ]
    ],
    "shortestValidSolution": "5-year-old + RUQ pain + jaundice + palpable RUQ cystic mass + bile duct dilation (Todani I) = Choledochal cyst -> Complete surgical cyst excision + Roux-en-Y.",
    "necessaryInference": "Recognize choledochal cyst (triad: pain, jaundice, mass) and select complete surgical cyst excision to prevent malignant cholangiocarcinoma.",
    "strongestDistractor": "Surgical internal cystogastrostomy without resection of the dilated common bile duct wall",
    "distractorExclusion": "Simple internal drainage without cyst wall excision leaves premalignant tissue in situ, carrying a 20-30% lifetime risk of fatal cholangiocarcinoma.",
    "citation": "Soares KC, Arnaoutakis DJ, Kamel I, et al. Choledochal cysts: presentation, clinical differentiation, and management. J Am Coll Surg. 2014;219(6):1167-1180. PMID: 25442340.",
    "critique": {
      "reviewer": "Automated Review Pipeline (AI-Assisted; Medically Unreviewed)",
      "clinicalInferenceNotes": "Step 2 CK pediatric surgery/gastroenterology item testing recognition of choledochal cyst triad, anomalous junction, and complete surgical excision for cancer prevention.",
      "distractorExclusionNotes": "Distractors feature endoscopic sphincterotomy, external drainage, obsolete cystogastrostomy leaving cancer risk, and ineffective medical bile acids.",
      "verdict": "PASS",
      "citationFormatNotes": "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."
    }
  }
];
