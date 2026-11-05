import type { QuestionContent } from '../../src/lib/validation/content';
import { readFileSync, readdirSync } from 'node:fs';
import { questionContentSchema } from '../../src/lib/validation/content';
import { bankQuestionSchema } from '../../src/lib/question-bank';
import type { ManifestEntry } from './types';

console.log('=== CANDIDATE CORPUS & MANIFEST COMPREHENSIVE AUDIT ===');

const manifestRaw = readFileSync('content/candidates/manifest.json', 'utf-8');
const manifest: ManifestEntry[] = JSON.parse(manifestRaw);
console.log(`Loaded Manifest: ${manifest.length} total entries.`);

const stats = {
  total: manifest.length,
  accepted: manifest.filter(m => m.status === 'CANDIDATE_ACCEPTED').length,
  rejected: manifest.filter(m => m.status === 'REJECTED').length,
  unresolved: manifest.filter(m => m.status === 'UNRESOLVED').length,
  byExam: {
    'Step 1': { total: 0, accepted: 0, rejected: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} as Record<string, number> },
    'Step 2 CK': { total: 0, accepted: 0, rejected: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} as Record<string, number> },
    'Step 3': { total: 0, accepted: 0, rejected: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} as Record<string, number> },
  }
};

const keys = ['A', 'B', 'C', 'D', 'E'];

for (const entry of manifest) {
  const ex = stats.byExam[entry.exam];
  if (!ex) continue;
  ex.total++;
  if (entry.status === 'CANDIDATE_ACCEPTED') {
    ex.accepted++;
    ex.systems[entry.system] = (ex.systems[entry.system] || 0) + 1;
  } else if (entry.status === 'REJECTED') {
    ex.rejected++;
  }
}

// Verify actual JSON files on disk
const examDirs = [
  { exam: 'Step 1', dir: 'content/candidates/step1' },
  { exam: 'Step 2 CK', dir: 'content/candidates/step2ck' },
  { exam: 'Step 3', dir: 'content/candidates/step3' },
];

let diskTotal = 0;
let schemaFailures = 0;
let bankFailures = 0;
let parallelFailures = 0;

for (const { exam, dir } of examDirs) {
  const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  for (const file of files) {
    const raw = readFileSync(`${dir}/${file}`, 'utf-8');
    const items: QuestionContent[] = JSON.parse(raw);
    diskTotal += items.length;

    items.forEach((item: QuestionContent) => {
      // Validate schemas
      const qc = questionContentSchema.safeParse(item);
      if (!qc.success) {
        schemaFailures++;
        console.error(`Schema failure in ${exam} ${file} item ${item.code}`);
      }
      const bc = bankQuestionSchema.safeParse(item);
      if (!bc.success) {
        bankFailures++;
        console.error(`Bank schema failure in ${exam} ${file} item ${item.code}`);
      }

      // Parallelism
      const lengths = item.options.map((o: QuestionContent['options'][number]) => o.text.trim().length);
      const minLen = Math.min(...lengths);
      const maxLen = Math.max(...lengths);
      if (minLen < 10 || minLen / maxLen < 0.20) {
        parallelFailures++;
        console.error(`Parallelism failure in ${item.code}`);
      }

      // Key letter
      const correctIdx = item.options.findIndex((o: QuestionContent['options'][number]) => o.correct);
      const keyLetter = keys[correctIdx] || 'A';
      stats.byExam[exam as keyof typeof stats.byExam].keys[keyLetter as keyof typeof stats.byExam['Step 1']['keys']]++;
    });
  }
}

console.log(`\nAudit Findings:`);
console.log(`- Total Files On Disk: ${diskTotal} questions across 12 batch files.`);
console.log(`- Schema Failures:     ${schemaFailures}`);
console.log(`- Bank Bar Failures:   ${bankFailures}`);
console.log(`- Distractor Failures: ${parallelFailures}`);
console.log(`\nPer-Exam Breakdown:`);
for (const [examName, data] of Object.entries(stats.byExam)) {
  console.log(`\n--- ${examName} ---`);
  console.log(`  Drafted:  ${data.total}`);
  console.log(`  Accepted: ${data.accepted}`);
  console.log(`  Rejected: ${data.rejected}`);
  console.log(`  Key Balance (A/B/C/D/E):`, data.keys);
  console.log(`  System Coverage:`, data.systems);
}

console.log(`\nTotal Progress Toward 1,000 per Step:`);
console.log(`  Step 1:   ${stats.byExam['Step 1'].accepted} / 1,000 (${(stats.byExam['Step 1'].accepted / 10).toFixed(1)}%)`);
console.log(`  Step 2 CK:${stats.byExam['Step 2 CK'].accepted} / 1,000 (${(stats.byExam['Step 2 CK'].accepted / 10).toFixed(1)}%)`);
console.log(`  Step 3:   ${stats.byExam['Step 3'].accepted} / 1,000 (${(stats.byExam['Step 3'].accepted / 10).toFixed(1)}%)`);
console.log(`  TOTAL:    ${stats.accepted} / 3,000 (${(stats.accepted / 30).toFixed(1)}%)`);
console.log('=======================================================\n');
