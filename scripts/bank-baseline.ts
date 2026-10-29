import 'dotenv/config';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { db } from '../src/lib/db';
import { dirname } from 'node:path';

const path = process.argv.find(a => a.startsWith('--baseline='))?.slice(11) ?? 'content/bank/baseline.json';
const prefix = process.argv.find(a => a.startsWith('--exclude-prefix='))?.slice(17) ?? 'op26';
try {
  const tables = ['user', 'account', 'session', 'test_session', 'session_item', 'response', 'bookmark', 'note', 'card', 'card_review', 'notebook_page', 'study_plan', 'plan_task', 'collection', 'collection_item'];
  const snapshot: Record<string, { count: number; hash: string }> = {};
  for (const table of tables) {
    // Fixed table allowlist above; never accepts a table name from input.
    const rows = await db.$queryRawUnsafe<object[]>(`SELECT * FROM "${table}" t ORDER BY to_jsonb(t)::text`);
    snapshot[table] = { count: rows.length, hash: createHash('sha256').update(JSON.stringify(rows)).digest('hex') };
  }
  const questions = await db.question.findMany({ where: { NOT: { code: { startsWith: prefix } } }, orderBy: { code: 'asc' }, include: { options: { orderBy: { position: 'asc' } } } });
  snapshot.originalQuestions = { count: questions.length, hash: createHash('sha256').update(JSON.stringify(questions)).digest('hex') };
  if (process.argv.includes('--verify')) {
    const before = JSON.parse(await readFile(path, 'utf8'));
    const changed = Object.keys(snapshot).filter(k => JSON.stringify(snapshot[k]) !== JSON.stringify(before.snapshot[k]));
    const result = { verifiedAt: new Date().toISOString(), originalQuestions: questions.length, totalQuestions: await db.question.count(), changed, snapshot };
    await mkdir(`${dirname(path)}/reports`, { recursive: true });
    await writeFile(`${dirname(path)}/reports/preservation.json`, JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
    if (changed.length) process.exitCode = 1;
  } else {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, JSON.stringify({ capturedAt: new Date().toISOString(), snapshot, taxonomy: { exams: await db.exam.findMany(), subjects: await db.subject.findMany(), systems: await db.system.findMany(), topics: await db.topic.findMany() } }, null, 2), { flag: 'wx' });
    console.log(JSON.stringify({ totalQuestions: await db.question.count(), snapshot }, null, 2));
  }
} finally { await db.$disconnect(); }
