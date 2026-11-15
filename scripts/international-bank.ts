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
import { questions as b1 } from '../content/bank/batch-01';
import type { QuestionContent } from '../src/lib/validation/content';

const allQuestions: QuestionContent[] = [
  ...bIntl1, ...bIntl2, ...bIntl3,
  ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
  ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
  ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
  ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19
];
const dir = 'content/bank/international';

async function main() {
  await mkdir(`${dir}/generated`, { recursive: true });
  await mkdir(`${dir}/reports`, { recursive: true });

  console.log(`Validating ${allQuestions.length} international expansion questions...`);

  // Validate all batches
  const v1 = validateBank(bIntl1, b1);
  const v2 = validateBank(bIntl2, [...b1, ...bIntl1]);
  const v3 = validateBank(bIntl3, [...b1, ...bIntl1, ...bIntl2]);
  const v4 = validateBank(bIntl4, [...b1, ...bIntl1, ...bIntl2, ...bIntl3]);
  const v5 = validateBank(bIntl5, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4]);
  const v6 = validateBank(bIntl6, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5]);
  const v7 = validateBank(bIntl7, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6]);
  const v8 = validateBank(bIntl8, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7]);
  const v9 = validateBank(bIntl9, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8]);
  const v10 = validateBank(bIntl10, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9]);
  const v11 = validateBank(bIntl11, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10]);
  const v12 = validateBank(bIntl12, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11]);
  const v13 = validateBank(bIntl13, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12]);
  const v14 = validateBank(bIntl14, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13]);
  const v15 = validateBank(bIntl15, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13, ...bIntl14]);
  const v16 = validateBank(bIntl16, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15]);
  const v17 = validateBank(bIntl17, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15, ...bIntl16]);
  const v18 = validateBank(bIntl18, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15, ...bIntl16, ...bIntl17]);
  const v19 = validateBank(bIntl19, [...b1, ...bIntl1, ...bIntl2, ...bIntl3, ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7, ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11, ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15, ...bIntl16, ...bIntl17, ...bIntl18]);

  const allErrors = [
    ...v1.errors.map(e => ({ batch: 'intl-01', ...e })),
    ...v2.errors.map(e => ({ batch: 'intl-02', ...e })),
    ...v3.errors.map(e => ({ batch: 'intl-03', ...e })),
    ...v4.errors.map(e => ({ batch: 'intl-04', ...e })),
    ...v5.errors.map(e => ({ batch: 'intl-05', ...e })),
    ...v6.errors.map(e => ({ batch: 'intl-06', ...e })),
    ...v7.errors.map(e => ({ batch: 'intl-07', ...e })),
    ...v8.errors.map(e => ({ batch: 'intl-08', ...e })),
    ...v9.errors.map(e => ({ batch: 'intl-09', ...e })),
    ...v10.errors.map(e => ({ batch: 'intl-10', ...e })),
    ...v11.errors.map(e => ({ batch: 'intl-11', ...e })),
    ...v12.errors.map(e => ({ batch: 'intl-12', ...e })),
    ...v13.errors.map(e => ({ batch: 'intl-13', ...e })),
    ...v14.errors.map(e => ({ batch: 'intl-14', ...e })),
    ...v15.errors.map(e => ({ batch: 'intl-15', ...e })),
    ...v16.errors.map(e => ({ batch: 'intl-16', ...e })),
    ...v17.errors.map(e => ({ batch: 'intl-17', ...e })),
    ...v18.errors.map(e => ({ batch: 'intl-18', ...e })),
    ...v19.errors.map(e => ({ batch: 'intl-19', ...e })),
  ];

  const batches = [
    { name: 'batch-intl-01', data: bIntl1, errs: v1.errors },
    { name: 'batch-intl-02', data: bIntl2, errs: v2.errors },
    { name: 'batch-intl-03', data: bIntl3, errs: v3.errors },
    { name: 'batch-intl-04', data: bIntl4, errs: v4.errors },
    { name: 'batch-intl-05', data: bIntl5, errs: v5.errors },
    { name: 'batch-intl-06', data: bIntl6, errs: v6.errors },
    { name: 'batch-intl-07', data: bIntl7, errs: v7.errors },
    { name: 'batch-intl-08', data: bIntl8, errs: v8.errors },
    { name: 'batch-intl-09', data: bIntl9, errs: v9.errors },
    { name: 'batch-intl-10', data: bIntl10, errs: v10.errors },
    { name: 'batch-intl-11', data: bIntl11, errs: v11.errors },
    { name: 'batch-intl-12', data: bIntl12, errs: v12.errors },
    { name: 'batch-intl-13', data: bIntl13, errs: v13.errors },
    { name: 'batch-intl-14', data: bIntl14, errs: v14.errors },
    { name: 'batch-intl-15', data: bIntl15, errs: v15.errors },
    { name: 'batch-intl-16', data: bIntl16, errs: v16.errors },
    { name: 'batch-intl-17', data: bIntl17, errs: v17.errors },
    { name: 'batch-intl-18', data: bIntl18, errs: v18.errors },
    { name: 'batch-intl-19', data: bIntl19, errs: v19.errors },
  ];

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
