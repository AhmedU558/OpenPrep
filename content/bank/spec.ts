import type { Spec } from './author';

export function item(subject: string, system: string, topic: string, stem: string, options: [string, string][], explanation: string, objective: string, reference: [string, string], exam = 'Step 1'): Spec {
  return { subject, system, topic, stem, options, explanation, objective, reference, exam };
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
} satisfies Record<string, [string, string]>;
