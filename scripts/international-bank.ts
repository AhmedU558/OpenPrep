import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { validateBank } from '../src/lib/question-bank';
import { questions as bIntl1 } from '../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../content/bank/international/batch-intl-03';
import { questions as bIntl4 } from '../content/bank/international/batch-intl-04';
import { questions as bIntl5 } from '../content/bank/international/batch-intl-05';
import { questions as bIntl6 } from '../content/bank/international/batch-intl-06';
import { questions as bIntl7 } from '../content/bank/international/batch-intl-07';
import { questions as bIntl8 } from '../content/bank/international/batch-intl-08';
import { questions as bIntl9 } from '../content/bank/international/batch-intl-09';
import { questions as bIntl10 } from '../content/bank/international/batch-intl-10';
import { questions as bIntl11 } from '../content/bank/international/batch-intl-11';
import { questions as bIntl12 } from '../content/bank/international/batch-intl-12';
import { questions as bIntl13 } from '../content/bank/international/batch-intl-13';
import { questions as bIntl14 } from '../content/bank/international/batch-intl-14';
import { questions as bIntl15 } from '../content/bank/international/batch-intl-15';
import { questions as bIntl16 } from '../content/bank/international/batch-intl-16';
import { questions as bIntl17 } from '../content/bank/international/batch-intl-17';
import { questions as bIntl18 } from '../content/bank/international/batch-intl-18';
import { questions as bIntl19 } from '../content/bank/international/batch-intl-19';
import { questions as bIntl20 } from '../content/bank/international/batch-intl-20';
import { questions as bIntl21 } from '../content/bank/international/batch-intl-21';
import { questions as bIntl22 } from '../content/bank/international/batch-intl-22';
import { questions as bIntl23 } from '../content/bank/international/batch-intl-23';
import { questions as bIntl24 } from '../content/bank/international/batch-intl-24';
import { questions as bIntl25 } from '../content/bank/international/batch-intl-25';
import { questions as bIntl26 } from '../content/bank/international/batch-intl-26';
import { questions as bIntl27 } from '../content/bank/international/batch-intl-27';
import { questions as bIntl28 } from '../content/bank/international/batch-intl-28';
import { questions as bIntl29 } from '../content/bank/international/batch-intl-29';
import { questions as bIntl30 } from '../content/bank/international/batch-intl-30';
import { questions as bIntl31 } from '../content/bank/international/batch-intl-31';
import { questions as bIntl32 } from '../content/bank/international/batch-intl-32';
import { questions as bIntl33 } from '../content/bank/international/batch-intl-33';
import { questions as bIntl34 } from '../content/bank/international/batch-intl-34';
import { questions as bIntl35 } from '../content/bank/international/batch-intl-35';
import { questions as bIntl36 } from '../content/bank/international/batch-intl-36';
import { questions as bIntl37 } from '../content/bank/international/batch-intl-37';
import { questions as bIntl38 } from '../content/bank/international/batch-intl-38';
import { questions as bIntl39 } from '../content/bank/international/batch-intl-39';
import { questions as bIntl40 } from '../content/bank/international/batch-intl-40';
import { questions as bIntl41 } from '../content/bank/international/batch-intl-41';
import { questions as bIntl42 } from '../content/bank/international/batch-intl-42';
import { questions as bIntl43 } from '../content/bank/international/batch-intl-43';
import { questions as bIntl44 } from '../content/bank/international/batch-intl-44';
import { questions as bIntl45 } from '../content/bank/international/batch-intl-45';
import { questions as bIntl46 } from '../content/bank/international/batch-intl-46';
import { questions as bIntl47 } from '../content/bank/international/batch-intl-47';
import { questions as bIntl48 } from '../content/bank/international/batch-intl-48';
import { questions as bIntl49 } from '../content/bank/international/batch-intl-49';
import { questions as bIntl50 } from '../content/bank/international/batch-intl-50';
import { questions as bIntl51 } from '../content/bank/international/batch-intl-51';
import { questions as bIntl52 } from '../content/bank/international/batch-intl-52';
import { questions as bIntl53 } from '../content/bank/international/batch-intl-53';
import { questions as bIntl54 } from '../content/bank/international/batch-intl-54';
import { questions as bIntl55 } from '../content/bank/international/batch-intl-55';
import { questions as bIntl56 } from '../content/bank/international/batch-intl-56';
import { questions as bIntl57 } from '../content/bank/international/batch-intl-57';
import { questions as bIntl58 } from '../content/bank/international/batch-intl-58';
import { questions as bIntl59 } from '../content/bank/international/batch-intl-59';
import { questions as bIntl60 } from '../content/bank/international/batch-intl-60';
import { questions as bIntl61 } from '../content/bank/international/batch-intl-61';
import { questions as bIntl62 } from '../content/bank/international/batch-intl-62';
import { questions as bIntl63 } from '../content/bank/international/batch-intl-63';
import { questions as bIntl64 } from '../content/bank/international/batch-intl-64';
import { questions as bIntl65 } from '../content/bank/international/batch-intl-65';
import { questions as bIntl66 } from '../content/bank/international/batch-intl-66';
import { questions as bIntl67 } from '../content/bank/international/batch-intl-67';
import { questions as bIntl68 } from '../content/bank/international/batch-intl-68';
import { questions as bIntl69 } from '../content/bank/international/batch-intl-69';
import { questions as bIntl70 } from '../content/bank/international/batch-intl-70';
import { questions as bIntl71 } from '../content/bank/international/batch-intl-71';
import { questions as bIntl72 } from '../content/bank/international/batch-intl-72';
import { questions as bIntl73 } from '../content/bank/international/batch-intl-73';
import { questions as bIntl74 } from '../content/bank/international/batch-intl-74';
import { questions as bIntl75 } from '../content/bank/international/batch-intl-75';
import { questions as bIntl76 } from '../content/bank/international/batch-intl-76';
import { questions as bIntl77 } from '../content/bank/international/batch-intl-77';
import { questions as bIntl78 } from '../content/bank/international/batch-intl-78';
import { questions as b1 } from '../content/bank/batch-01';
import type { QuestionContent } from '../src/lib/validation/content';

const allQuestions: QuestionContent[] = [
  ...bIntl1, ...bIntl2, ...bIntl3,
  ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
  ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
  ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
  ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19,
  ...bIntl20, ...bIntl21, ...bIntl22, ...bIntl23,
  ...bIntl24, ...bIntl25, ...bIntl26, ...bIntl27,
  ...bIntl28, ...bIntl29, ...bIntl30, ...bIntl31,
  ...bIntl32, ...bIntl33, ...bIntl34, ...bIntl35,
  ...bIntl36, ...bIntl37, ...bIntl38, ...bIntl39,
  ...bIntl40, ...bIntl41, ...bIntl42, ...bIntl43,
  ...bIntl44, ...bIntl45, ...bIntl46, ...bIntl47, ...bIntl48,
  ...bIntl49, ...bIntl50, ...bIntl51, ...bIntl52, ...bIntl53,
  ...bIntl54, ...bIntl55, ...bIntl56, ...bIntl57, ...bIntl58,
  ...bIntl59, ...bIntl60, ...bIntl61, ...bIntl62, ...bIntl63,
  ...bIntl64, ...bIntl65, ...bIntl66, ...bIntl67, ...bIntl68,
  ...bIntl69, ...bIntl70, ...bIntl71, ...bIntl72, ...bIntl73,
  ...bIntl74, ...bIntl75, ...bIntl76, ...bIntl77, ...bIntl78
];
const dir = 'content/bank/international';

async function main() {
  await mkdir(`${dir}/generated`, { recursive: true });
  await mkdir(`${dir}/reports`, { recursive: true });

  console.log(`Validating ${allQuestions.length} international expansion questions...`);

  const rawBatches = [
    { name: 'batch-intl-01', data: bIntl1 },
    { name: 'batch-intl-02', data: bIntl2 },
    { name: 'batch-intl-03', data: bIntl3 },
    { name: 'batch-intl-04', data: bIntl4 },
    { name: 'batch-intl-05', data: bIntl5 },
    { name: 'batch-intl-06', data: bIntl6 },
    { name: 'batch-intl-07', data: bIntl7 },
    { name: 'batch-intl-08', data: bIntl8 },
    { name: 'batch-intl-09', data: bIntl9 },
    { name: 'batch-intl-10', data: bIntl10 },
    { name: 'batch-intl-11', data: bIntl11 },
    { name: 'batch-intl-12', data: bIntl12 },
    { name: 'batch-intl-13', data: bIntl13 },
    { name: 'batch-intl-14', data: bIntl14 },
    { name: 'batch-intl-15', data: bIntl15 },
    { name: 'batch-intl-16', data: bIntl16 },
    { name: 'batch-intl-17', data: bIntl17 },
    { name: 'batch-intl-18', data: bIntl18 },
    { name: 'batch-intl-19', data: bIntl19 },
    { name: 'batch-intl-20', data: bIntl20 },
    { name: 'batch-intl-21', data: bIntl21 },
    { name: 'batch-intl-22', data: bIntl22 },
    { name: 'batch-intl-23', data: bIntl23 },
    { name: 'batch-intl-24', data: bIntl24 },
    { name: 'batch-intl-25', data: bIntl25 },
    { name: 'batch-intl-26', data: bIntl26 },
    { name: 'batch-intl-27', data: bIntl27 },
    { name: 'batch-intl-28', data: bIntl28 },
    { name: 'batch-intl-29', data: bIntl29 },
    { name: 'batch-intl-30', data: bIntl30 },
    { name: 'batch-intl-31', data: bIntl31 },
    { name: 'batch-intl-32', data: bIntl32 },
    { name: 'batch-intl-33', data: bIntl33 },
    { name: 'batch-intl-34', data: bIntl34 },
    { name: 'batch-intl-35', data: bIntl35 },
    { name: 'batch-intl-36', data: bIntl36 },
    { name: 'batch-intl-37', data: bIntl37 },
    { name: 'batch-intl-38', data: bIntl38 },
    { name: 'batch-intl-39', data: bIntl39 },
    { name: 'batch-intl-40', data: bIntl40 },
    { name: 'batch-intl-41', data: bIntl41 },
    { name: 'batch-intl-42', data: bIntl42 },
    { name: 'batch-intl-43', data: bIntl43 },
    { name: 'batch-intl-44', data: bIntl44 },
    { name: 'batch-intl-45', data: bIntl45 },
    { name: 'batch-intl-46', data: bIntl46 },
    { name: 'batch-intl-47', data: bIntl47 },
    { name: 'batch-intl-48', data: bIntl48 },
    { name: 'batch-intl-49', data: bIntl49 },
    { name: 'batch-intl-50', data: bIntl50 },
    { name: 'batch-intl-51', data: bIntl51 },
    { name: 'batch-intl-52', data: bIntl52 },
    { name: 'batch-intl-53', data: bIntl53 },
    { name: 'batch-intl-54', data: bIntl54 },
    { name: 'batch-intl-55', data: bIntl55 },
    { name: 'batch-intl-56', data: bIntl56 },
    { name: 'batch-intl-57', data: bIntl57 },
    { name: 'batch-intl-58', data: bIntl58 },
    { name: 'batch-intl-59', data: bIntl59 },
    { name: 'batch-intl-60', data: bIntl60 },
    { name: 'batch-intl-61', data: bIntl61 },
    { name: 'batch-intl-62', data: bIntl62 },
    { name: 'batch-intl-63', data: bIntl63 },
  ];

  const allErrors: Array<{ batch: string; message: string; [key: string]: unknown }> = [];
  const batches: Array<{ name: string; data: QuestionContent[]; errs: unknown[] }> = [];
  let accumulated = [...b1];

  for (const b of rawBatches) {
    const v = validateBank(b.data, accumulated);
    batches.push({ name: b.name, data: b.data, errs: v.errors });
    for (const err of v.errors) {
      allErrors.push({ batch: b.name, ...err });
    }
    accumulated.push(...b.data);
  }

  const batchReports = [];
  for (const b of batches) {
    const body = JSON.stringify(b.data, null, 2);
    const digest = createHash('sha256').update(body).digest('hex');
    await writeFile(`${dir}/generated/${b.name}.json`, body);
    batchReports.push({ name: b.name, count: b.data.length, digest, errors: b.errs });
  }

  const report = {
    validatedAt: new Date().toISOString(),
    totalQuestions: allQuestions.length,
    batches: batchReports,
    examsCovered: [...new Set(allQuestions.map(q => q.exam))].sort(),
    subjectsCovered: Object.fromEntries(
      [...new Set(allQuestions.map(q => q.subject))].sort().map(s => [s, allQuestions.filter(q => q.subject === s).length])
    ),
    optionsPerQuestion: 5,
    provenance: 'OpenPrep original; AI-authored; medically unreviewed',
    license: 'CC-BY-SA-4.0',
    allErrors,
  };

  await writeFile(`${dir}/reports/validation-report.json`, JSON.stringify(report, null, 2));

  if (allErrors.length > 0) {
    console.error('Validation errors found:', allErrors);
    process.exit(1);
  }

  console.log(`All ${allQuestions.length} international questions validated successfully with 0 errors.`);
  console.log(`Exams covered (${report.examsCovered.length}):`, report.examsCovered.join(', '));
  console.log('Reports written to:', `${dir}/reports/validation-report.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
