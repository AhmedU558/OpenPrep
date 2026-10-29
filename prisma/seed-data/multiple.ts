// Original "select all that apply" demo questions (CC BY-SA 4.0), in the same shape as legacy/questions.js
// plus `answers` (indices of every correct choice).
export const MULTIPLE = [
  {
    id: 's1-0011', exam: 'Step 1', subject: 'Pathology', system: 'Renal',
    stem: 'A 7-year-old boy has 1 week of periorbital and leg swelling after a viral illness. Urinalysis shows 4+ protein and no blood.\n\nWhich of the following findings are characteristic of the syndrome this child most likely has? **Select all that apply.**',
    choices: ['Proteinuria greater than 3.5 g/day (adult equivalent)', 'Hypoalbuminemia', 'Hyperlipidemia', 'Red blood cell casts', 'Marked hypertension with oliguria'],
    answers: [0, 1, 2],
    explanation: 'This is **nephrotic syndrome**, most often minimal change disease at this age. The defining features are heavy **proteinuria**, **hypoalbuminemia**, **edema**, and **hyperlipidemia**, the last because the liver increases lipoprotein synthesis.\n\nRBC casts, hypertension, and oliguria (D, E) point to **nephritic** syndrome instead, which means glomerular inflammation with hematuria.',
    objective: 'Nephrotic syndrome: proteinuria, hypoalbuminemia, edema, hyperlipidemia. RBC casts point to nephritic syndrome.',
  },
  {
    id: 's2-0011', exam: 'Step 2 CK', subject: 'Obstetrics', system: 'Pregnancy',
    stem: 'A 29-year-old woman at 10 weeks\' gestation asks which vaccines she should avoid during pregnancy.\n\nWhich of the following vaccines are contraindicated during pregnancy? **Select all that apply.**',
    choices: ['Measles-mumps-rubella (MMR)', 'Varicella', 'Inactivated influenza (injection)', 'Tdap', 'Live attenuated influenza (nasal spray)'],
    answers: [0, 1, 4],
    explanation: '**Live attenuated vaccines** carry a theoretical risk to the fetus and are avoided during pregnancy. These include **MMR**, **varicella**, and the **nasal live attenuated influenza vaccine**. Ideally, check rubella and varicella immunity before conception and vaccinate postpartum if needed.\n\nThe **inactivated influenza** injection (C) is recommended during flu season in any trimester. **Tdap** (D) is recommended in every pregnancy, ideally at 27–36 weeks, to protect the newborn from pertussis.',
    objective: 'Avoid live vaccines (MMR, varicella, nasal influenza) in pregnancy. Give inactivated influenza and Tdap.',
  },
];
