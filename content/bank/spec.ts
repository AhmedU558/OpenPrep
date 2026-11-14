import type { Spec } from './author';

export function item(subject: string, system: string, topic: string, stem: string, options: [string, string][], explanation: string, objective: string, reference: [string, string], exam = 'Step 1', difficulty = 3): Spec {
  return { subject, system, topic, stem, options, explanation, objective, reference, exam, difficulty };
}

// Further-reading links, not copied/adapted question sources. Reference licenses are not inherited by original wording.
export const refs = {
  pharm: ['Nursing Pharmacology, 2nd ed., Open RN / NCBI Bookshelf', 'https://www.ncbi.nlm.nih.gov/books/NBK595000/'],
  ethics: ['WMA International Code of Medical Ethics', 'https://www.wma.net/policies-post/wma-international-code-of-medical-ethics/'],
  anatomy: ['OpenStax Anatomy and Physiology 2e (further reading only)', 'https://openstax.org/books/anatomy-and-physiology-2e/pages/preface'],
  cell: ['Molecular Biology of the Cell, 4th ed., NCBI Bookshelf', 'https://www.ncbi.nlm.nih.gov/books/NBK21054/'],
  immune: ['Immunobiology, 5th ed., NCBI Bookshelf', 'https://www.ncbi.nlm.nih.gov/books/NBK10757/'],
  micro: ['Medical Microbiology, 4th ed., NCBI Bookshelf', 'https://www.ncbi.nlm.nih.gov/books/NBK7627/'],
  clinical: ['Clinical Methods, 3rd ed., NCBI Bookshelf', 'https://www.ncbi.nlm.nih.gov/books/NBK201/'],
  acid: ['Merck Manual Professional: Acid-Base Disorders', 'https://www.merckmanuals.com/professional/nephrology/acid-base-regulation-and-disorders/acid-base-disorders'],
  anemia: ['Merck Manual Professional: Evaluation of Anemia', 'https://www.merckmanuals.com/professional/hematology/approach-to-the-patient-with-anemia/evaluation-of-anemia'],
  stats: ['CDC Principles of Epidemiology, 3rd ed.', 'https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/SS1978.pdf'],
  nice_ckd: ['NICE Guideline NG203: Chronic Kidney Disease Assessment and Management', 'https://www.nice.org.uk/guidance/ng203'],
  nice_asthma: ['NICE Guideline NG80: Asthma Diagnosis, Monitoring and Chronic Asthma Management', 'https://www.nice.org.uk/guidance/ng80'],
  nice_acs: ['NICE Guideline NG185: Acute Coronary Syndromes', 'https://www.nice.org.uk/guidance/ng185'],
  who_trauma: ['WHO Guidelines for Essential Trauma Care', 'https://www.who.int/publications/i/item/9241546409'],
  amc_anthology: ['Australian Medical Council: Anthology of Medical Conditions', 'https://www.amc.org.au/examinations/publications/anthology/'],
  mcc_objectives: ['Medical Council of Canada: Objectives for the Qualifying Examination', 'https://mcc.ca/objectives/'],
  rcuk_als: ['Resuscitation Council UK: Adult Advanced Life Support Guidelines', 'https://www.resus.org.uk/library/2021-resuscitation-guidelines/adult-advanced-life-support-guidelines'],
  merck_endocrine: ['Merck Manual Professional: Approach to the Patient With Endocrine Disorders', 'https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/principles-of-endocrinology/approach-to-the-patient-with-endocrine-disorders'],
  merck_infection: ['Merck Manual Professional: Sepsis and Septic Shock', 'https://www.merckmanuals.com/professional/critical-care-medicine/sepsis-and-septic-shock/sepsis-and-septic-shock'],
  rcog_gtg: ['RCOG Green-top Guidelines: Severe Pre-eclampsia and Hypertension in Pregnancy', 'https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/'],
} satisfies Record<string, [string, string]>;
