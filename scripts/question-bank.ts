import 'dotenv/config';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { db } from '../src/lib/db';
import { importQuestions, setStatus } from '../src/lib/admin';
import { validateBank } from '../src/lib/question-bank';

const args = process.argv.slice(2), batch = Number(args.find(a => /^\d+$/.test(a)));
if (!Number.isInteger(batch) || batch < 1) throw new Error('Usage: npm run bank:batch -- 1 [--import] [--local-practice]');
const tag = String(batch).padStart(2, '0'), dir = 'content/bank';
const reportPath = `${dir}/reports/batch-${tag}.json`;
let attempted = false;
try {
  const { questions } = await import(pathToFileURL(resolve(`${dir}/batch-${tag}.ts`)).href);
  await mkdir(`${dir}/generated`, { recursive: true });
  await mkdir(`${dir}/reports`, { recursive: true });
  const body = JSON.stringify(questions, null, 2), digest = createHash('sha256').update(body).digest('hex');
  const existing = await db.question.findMany({ select: { code: true, stemMd: true } });
  const validation = validateBank(questions, existing.map(q => ({ code: q.code, stem: q.stemMd })));
  const exams = new Set((await db.exam.findMany()).map(e => e.name));
  for (const [index, q] of validation.questions.entries()) if (!exams.has(q.exam)) validation.errors.push({ index, message: `Unknown exam: ${q.exam}` });
  const before = await db.question.count();
  const previous = await readFile(reportPath, 'utf8').then(JSON.parse).catch(() => null);
  const report = { batch, at: new Date().toISOString(), digest, before, after: before, imported: 0, skipped: 0, rejected: 0, quarantined: validation.errors.length ? questions.length : 0, errors: validation.errors, coverage: validation.questions.map(q => ({ code: q.code, subject: q.subject, topic: q.topic, objective: q.objective })), persisted: 0, practiceAvailable: 0, firstImport: previous?.firstImport ?? null as unknown };
  if (validation.errors.length) {
    await writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report)); process.exitCode = 1;
  } else {
    await writeFile(`${dir}/generated/batch-${tag}.json`, body);
    if (args.includes('--import')) {
      if (args.includes('--local-practice') && !['localhost', '127.0.0.1', '[::1]'].includes(new URL(process.env.BETTER_AUTH_URL ?? 'http://localhost').hostname)) throw new Error('--local-practice is restricted to a locally configured app. Use the admin review workflow for other environments.');
      const admin = await db.user.findFirst({ where: { role: 'ADMIN' }, select: { id: true, role: true } });
      if (!admin) throw new Error('An existing admin is required; no account or role is created automatically.');
      attempted = true;
      const result = await importQuestions(admin, questions, false, true);
      if (result.errors.length) throw new Error(JSON.stringify(result.errors));
      report.imported = result.created; report.skipped = result.skipped;
      // Availability is separate from medical review, disclosed in source and every explanation.
      if (args.includes('--local-practice')) {
        const rows = await db.question.findMany({ where: { code: { in: validation.questions.map(q => q.code) } } });
        for (const q of rows) if (q.status === 'DRAFT') await setStatus(admin, q.id, 'PUBLISHED');
      }
      const rows = await db.question.findMany({ where: { code: { in: validation.questions.map(q => q.code) } }, include: { options: true } });
      report.persisted = rows.length;
      report.practiceAvailable = rows.filter(q => q.status === 'PUBLISHED').length;
      if (rows.length !== questions.length || rows.some(q => q.options.length < 4 || q.options.filter(o => o.isCorrect).length !== 1)) throw new Error('Database read-back integrity failed.');
      report.after = await db.question.count();
      if (!report.firstImport) report.firstImport = { at: report.at, before, after: report.after, imported: report.imported, digest };
    }
    await writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(JSON.stringify({ batch, before, after: report.after, imported: report.imported, skipped: report.skipped, persisted: report.persisted, practiceAvailable: report.practiceAvailable, errors: report.errors }));
  }
} catch (error) {
  await mkdir(`${dir}/reports`, { recursive: true });
  await writeFile(`${dir}/reports/batch-${tag}-error.json`, JSON.stringify({ batch, at: new Date().toISOString(), importAttempted: attempted, message: error instanceof Error ? error.message : String(error), resume: 'Inspect database by stable codes before retry; create-only imports never overwrite matching records.' }, null, 2));
  throw error;
} finally { await db.$disconnect(); }
