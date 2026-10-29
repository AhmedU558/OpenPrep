import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { db } from '../src/lib/db';
import { exportQuestions } from '../src/lib/admin';
import { questionContentSchema } from '../src/lib/validation/content';
import { validateBank } from '../src/lib/question-bank';
import { questions as b1 } from '../content/bank/batch-01';
import { questions as b2 } from '../content/bank/batch-02';
import { questions as b3 } from '../content/bank/batch-03';
import { questions as b4 } from '../content/bank/batch-04';
import { questions as b5 } from '../content/bank/batch-05';
import { questions as b6 } from '../content/bank/batch-06';
import { questions as b7 } from '../content/bank/batch-07';
import { questions as b8 } from '../content/bank/batch-08';

try {
  const actor = await db.user.findFirstOrThrow({ where: { role: 'ADMIN' }, select: { id: true, role: true } });
  const exported = await exportQuestions(actor);
  const batches = [b1,b2,b3,b4,b5,b6,b7,b8], expected = batches.flat();
  const actual = new Map(exported.map(q => [q.code,q]));
  const canonical = (q: unknown) => JSON.stringify(questionContentSchema.parse(q));
  const mismatches = expected.filter(q => !actual.has(q.code) || canonical(q) !== canonical(actual.get(q.code))).map(q => q.code);
  const validation = batches.flatMap((b, index) => validateBank(b, exported.filter(q => !b.some(x => x.code === q.code))).errors.map(e => ({batch:index+1,...e})));
  const rows = await db.question.findMany({ where: { code: { in: expected.map(q => q.code) } }, include: { subject: true, options: true } });
  const report = {
    verifiedAt: new Date().toISOString(), total: await db.question.count(), expected: expected.length, persisted: rows.length,
    available: rows.filter(q => q.status === 'PUBLISHED').length, optionCount: rows.reduce((n,q) => n+q.options.length,0),
    medicallyReviewed: 0, authorship: 'AI-authored; medically unreviewed',
    subjects: Object.fromEntries([...new Set(rows.map(q => q.subject.name))].sort().map(name => [name,rows.filter(q => q.subject.name === name).length])),
    mismatches, validationErrors: validation,
  };
  await mkdir('content/bank/reports', { recursive: true });
  await writeFile('content/bank/reports/database-verification.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
  if (mismatches.length || validation.length || rows.length !== 200) process.exitCode = 1;
} finally { await db.$disconnect(); }
