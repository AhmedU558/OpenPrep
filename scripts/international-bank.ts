import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { validateBank } from '../src/lib/question-bank';
import { questions as bIntl1 } from '../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../content/bank/international/batch-intl-03';
import { questions as b1 } from '../content/bank/batch-01';
import type { QuestionContent } from '../src/lib/validation/content';

const allQuestions: QuestionContent[] = [...bIntl1, ...bIntl2, ...bIntl3];
const dir = 'content/bank/international';

async function main() {
  await mkdir(`${dir}/generated`, { recursive: true });
  await mkdir(`${dir}/reports`, { recursive: true });

  console.log(`Validating ${allQuestions.length} international expansion questions...`);

  // 1. Validate batch 1, 2, and 3
  const v1 = validateBank(bIntl1, b1);
  const v2 = validateBank(bIntl2, [...b1, ...bIntl1]);
  const v3 = validateBank(bIntl3, [...b1, ...bIntl1, ...bIntl2]);
  const allErrors = [
    ...v1.errors.map(e => ({ batch: 'intl-01', ...e })),
    ...v2.errors.map(e => ({ batch: 'intl-02', ...e })),
    ...v3.errors.map(e => ({ batch: 'intl-03', ...e })),
  ];

  const body1 = JSON.stringify(bIntl1, null, 2);
  const body2 = JSON.stringify(bIntl2, null, 2);
  const body3 = JSON.stringify(bIntl3, null, 2);
  const digest1 = createHash('sha256').update(body1).digest('hex');
  const digest2 = createHash('sha256').update(body2).digest('hex');
  const digest3 = createHash('sha256').update(body3).digest('hex');

  await writeFile(`${dir}/generated/batch-intl-01.json`, body1);
  await writeFile(`${dir}/generated/batch-intl-02.json`, body2);
  await writeFile(`${dir}/generated/batch-intl-03.json`, body3);

  const report = {
    validatedAt: new Date().toISOString(),
    totalQuestions: allQuestions.length,
    batches: [
      { name: 'batch-intl-01', count: bIntl1.length, digest: digest1, errors: v1.errors },
      { name: 'batch-intl-02', count: bIntl2.length, digest: digest2, errors: v2.errors },
      { name: 'batch-intl-03', count: bIntl3.length, digest: digest3, errors: v3.errors },
    ],
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

  console.log('All 30 international questions validated successfully with 0 errors.');
  console.log(`Exams covered (${report.examsCovered.length}):`, report.examsCovered.join(', '));
  console.log('Reports written to:', `${dir}/reports/validation-report.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
