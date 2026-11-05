import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { loadExistingCorpus, processCandidateBatch, type PipelineResult } from './pipeline';

import { step1Batch1 } from './step1-batch1';
import { step1Batch2 } from './step1-batch2';
import { step1Batch3 } from './step1-batch3';
import { step1Batch4 } from './step1-batch4';
import { step1Batch5 } from './step1-batch5';
import { step1Batch6 } from './step1-batch6';
import { step1Batch7 } from './step1-batch7';
import { step1Batch8 } from './step1-batch8';
import { step1Batch9 } from './step1-batch9';
import { step1Batch10 } from './step1-batch10';
import { step1Batch11 } from './step1-batch11';
import { step1Batch12 } from './step1-batch12';
import { step1Batch13 } from './step1-batch13';
import { step1Batch14 } from './step1-batch14';
import { step1Batch15 } from './step1-batch15';
import { step1Batch16 } from './step1-batch16';
import { step1Batch17 } from './step1-batch17';
import { step1Batch18 } from './step1-batch18';
import { step1Batch19 } from './step1-batch19';
import { step1Batch20 } from './step1-batch20';
import { step1Batch21 } from './step1-batch21';
import { step1Batch22 } from './step1-batch22';
import { step1Batch23 } from './step1-batch23';
import { step1Batch24 } from './step1-batch24';

import { step2Batch1 } from './step2-batch1';
import { step2Batch2 } from './step2-batch2';
import { step2Batch3 } from './step2-batch3';
import { step2Batch4 } from './step2-batch4';
import { step2Batch5 } from './step2-batch5';
import { step2Batch6 } from './step2-batch6';
import { step2Batch7 } from './step2-batch7';
import { step2Batch8 } from './step2-batch8';
import { step2Batch9 } from './step2-batch9';
import { step2Batch10 } from './step2-batch10';
import { step2Batch11 } from './step2-batch11';
import { step2Batch12 } from './step2-batch12';
import { step2Batch13 } from './step2-batch13';
import { step2Batch14 } from './step2-batch14';
import { step2Batch15 } from './step2-batch15';
import { step2Batch16 } from './step2-batch16';
import { step2Batch17 } from './step2-batch17';
import { step2Batch18 } from './step2-batch18';
import { step2Batch19 } from './step2-batch19';
import { step2Batch20 } from './step2-batch20';
import { step2Batch21 } from './step2-batch21';
import { step2Batch22 } from './step2-batch22';
import { step2Batch23 } from './step2-batch23';
import { step2Batch24 } from './step2-batch24';

import { step3Batch1 } from './step3-batch1';
import { step3Batch2 } from './step3-batch2';
import { step3Batch3 } from './step3-batch3';
import { step3Batch4 } from './step3-batch4';
import { step3Batch5 } from './step3-batch5';
import { step3Batch6 } from './step3-batch6';
import { step3Batch7 } from './step3-batch7';
import { step3Batch8 } from './step3-batch8';
import { step3Batch9 } from './step3-batch9';
import { step3Batch10 } from './step3-batch10';
import { step3Batch11 } from './step3-batch11';
import { step3Batch12 } from './step3-batch12';
import { step3Batch13 } from './step3-batch13';
import { step3Batch14 } from './step3-batch14';
import { step3Batch15 } from './step3-batch15';
import { step3Batch16 } from './step3-batch16';
import { step3Batch17 } from './step3-batch17';
import { step3Batch18 } from './step3-batch18';
import { step3Batch19 } from './step3-batch19';
import { step3Batch20 } from './step3-batch20';
import { step3Batch21 } from './step3-batch21';
import { step3Batch22 } from './step3-batch22';
import { step3Batch23 } from './step3-batch23';
import { step3Batch24 } from './step3-batch24';

import type { CandidateSpec, ManifestEntry } from './types';
import type { QuestionContent } from '../../src/lib/validation/content';

console.log('--- USMLE Candidate Generation & Screening Pipeline ---');
console.log('Loading existing corpus (1,206 content items)...');
const existingCorpus = loadExistingCorpus();
console.log(`Loaded ${existingCorpus.length} existing items for duplicate screening.`);

// Ensure directories
mkdirSync('content/candidates/step1', { recursive: true });
mkdirSync('content/candidates/step2ck', { recursive: true });
mkdirSync('content/candidates/step3', { recursive: true });

const allManifestEntries: ManifestEntry[] = [];
const allResults: PipelineResult[] = [];
const runningCorpus = [...existingCorpus];

const FORCE_OVERWRITE = process.argv.includes('--force-overwrite') || process.env.FORCE_OVERWRITE === 'true';

// Load existing manifest to protect and preserve reviewed statuses
const existingManifestMap = new Map<string, ManifestEntry>();
if (existsSync('content/candidates/manifest.json')) {
  try {
    const raw = JSON.parse(readFileSync('content/candidates/manifest.json', 'utf8'));
    if (Array.isArray(raw)) {
      raw.forEach((m: ManifestEntry) => {
        if (m && m.code) existingManifestMap.set(m.code, m);
      });
    }
  } catch {
    // fallback
  }
}

function runBatch(batchData: CandidateSpec[], step: 'Step 1' | 'Step 2 CK' | 'Step 3', batchNum: number, dirPath: string, fileName: string) {
  const filePath = `${dirPath}/${fileName}`;
  const fileExists = existsSync(filePath);

  console.log(`\nProcessing ${step} Batch ${batchNum} (${batchData.length} items)...`);
  const result = processCandidateBatch(batchData, step, batchNum, runningCorpus);
  allResults.push(result);

  for (const entry of result.manifestEntries) {
    if (existingManifestMap.has(entry.code) && !FORCE_OVERWRITE && batchNum <= 20) {
      allManifestEntries.push(existingManifestMap.get(entry.code)!);
    } else {
      allManifestEntries.push(entry);
    }
  }

  if (fileExists && !FORCE_OVERWRITE) {
    console.log(`  [PRESERVED] ${filePath} already exists on disk. Preserving existing file (pass --force-overwrite to regenerate).`);
    let diskItems: QuestionContent[];
    try {
      const content = readFileSync(filePath, 'utf8');
      diskItems = JSON.parse(content);
    } catch (e) {
      console.error(`[FATAL] Unreadable or corrupted batch file ${filePath}: ${String(e)}`);
      process.exit(1);
    }
    for (const q of diskItems) {
      runningCorpus.push({ code: q.code, stem: q.stem, objective: q.objective });
    }
  } else {
    writeFileSync(filePath, JSON.stringify(result.acceptedQuestions, null, 2));
    console.log(`  [WRITTEN] Wrote ${result.acceptedQuestions.length} accepted questions to ${filePath}`);
    for (const q of result.acceptedQuestions) {
      runningCorpus.push({ code: q.code, stem: q.stem, objective: q.objective });
    }
  }

  return result;
}

// Step 1: 16 Batches (400 items)
runBatch(step1Batch1, 'Step 1', 1, 'content/candidates/step1', 'batch-01.json');
runBatch(step1Batch2, 'Step 1', 2, 'content/candidates/step1', 'batch-02.json');
runBatch(step1Batch3, 'Step 1', 3, 'content/candidates/step1', 'batch-03.json');
runBatch(step1Batch4, 'Step 1', 4, 'content/candidates/step1', 'batch-04.json');
runBatch(step1Batch5, 'Step 1', 5, 'content/candidates/step1', 'batch-05.json');
runBatch(step1Batch6, 'Step 1', 6, 'content/candidates/step1', 'batch-06.json');
runBatch(step1Batch7, 'Step 1', 7, 'content/candidates/step1', 'batch-07.json');
runBatch(step1Batch8, 'Step 1', 8, 'content/candidates/step1', 'batch-08.json');
runBatch(step1Batch9, 'Step 1', 9, 'content/candidates/step1', 'batch-09.json');
runBatch(step1Batch10, 'Step 1', 10, 'content/candidates/step1', 'batch-10.json');
runBatch(step1Batch11, 'Step 1', 11, 'content/candidates/step1', 'batch-11.json');
runBatch(step1Batch12, 'Step 1', 12, 'content/candidates/step1', 'batch-12.json');
runBatch(step1Batch13, 'Step 1', 13, 'content/candidates/step1', 'batch-13.json');
runBatch(step1Batch14, 'Step 1', 14, 'content/candidates/step1', 'batch-14.json');
runBatch(step1Batch15, 'Step 1', 15, 'content/candidates/step1', 'batch-15.json');
runBatch(step1Batch16, 'Step 1', 16, 'content/candidates/step1', 'batch-16.json');
runBatch(step1Batch17, 'Step 1', 17, 'content/candidates/step1', 'batch-17.json');
runBatch(step1Batch18, 'Step 1', 18, 'content/candidates/step1', 'batch-18.json');
runBatch(step1Batch19, 'Step 1', 19, 'content/candidates/step1', 'batch-19.json');
runBatch(step1Batch20, 'Step 1', 20, 'content/candidates/step1', 'batch-20.json');
runBatch(step1Batch21, 'Step 1', 21, 'content/candidates/step1', 'batch-21.json');
runBatch(step1Batch22, 'Step 1', 22, 'content/candidates/step1', 'batch-22.json');
runBatch(step1Batch23, 'Step 1', 23, 'content/candidates/step1', 'batch-23.json');
runBatch(step1Batch24, 'Step 1', 24, 'content/candidates/step1', 'batch-24.json');

// Step 2 CK: 20 Batches (500 items)
runBatch(step2Batch1, 'Step 2 CK', 1, 'content/candidates/step2ck', 'batch-01.json');
runBatch(step2Batch2, 'Step 2 CK', 2, 'content/candidates/step2ck', 'batch-02.json');
runBatch(step2Batch3, 'Step 2 CK', 3, 'content/candidates/step2ck', 'batch-03.json');
runBatch(step2Batch4, 'Step 2 CK', 4, 'content/candidates/step2ck', 'batch-04.json');
runBatch(step2Batch5, 'Step 2 CK', 5, 'content/candidates/step2ck', 'batch-05.json');
runBatch(step2Batch6, 'Step 2 CK', 6, 'content/candidates/step2ck', 'batch-06.json');
runBatch(step2Batch7, 'Step 2 CK', 7, 'content/candidates/step2ck', 'batch-07.json');
runBatch(step2Batch8, 'Step 2 CK', 8, 'content/candidates/step2ck', 'batch-08.json');
runBatch(step2Batch9, 'Step 2 CK', 9, 'content/candidates/step2ck', 'batch-09.json');
runBatch(step2Batch10, 'Step 2 CK', 10, 'content/candidates/step2ck', 'batch-10.json');
runBatch(step2Batch11, 'Step 2 CK', 11, 'content/candidates/step2ck', 'batch-11.json');
runBatch(step2Batch12, 'Step 2 CK', 12, 'content/candidates/step2ck', 'batch-12.json');
runBatch(step2Batch13, 'Step 2 CK', 13, 'content/candidates/step2ck', 'batch-13.json');
runBatch(step2Batch14, 'Step 2 CK', 14, 'content/candidates/step2ck', 'batch-14.json');
runBatch(step2Batch15, 'Step 2 CK', 15, 'content/candidates/step2ck', 'batch-15.json');
runBatch(step2Batch16, 'Step 2 CK', 16, 'content/candidates/step2ck', 'batch-16.json');
runBatch(step2Batch17, 'Step 2 CK', 17, 'content/candidates/step2ck', 'batch-17.json');
runBatch(step2Batch18, 'Step 2 CK', 18, 'content/candidates/step2ck', 'batch-18.json');
runBatch(step2Batch19, 'Step 2 CK', 19, 'content/candidates/step2ck', 'batch-19.json');
runBatch(step2Batch20, 'Step 2 CK', 20, 'content/candidates/step2ck', 'batch-20.json');
runBatch(step2Batch21, 'Step 2 CK', 21, 'content/candidates/step2ck', 'batch-21.json');
runBatch(step2Batch22, 'Step 2 CK', 22, 'content/candidates/step2ck', 'batch-22.json');
runBatch(step2Batch23, 'Step 2 CK', 23, 'content/candidates/step2ck', 'batch-23.json');
runBatch(step2Batch24, 'Step 2 CK', 24, 'content/candidates/step2ck', 'batch-24.json');

// Step 3: 20 Batches (500 items)
runBatch(step3Batch1, 'Step 3', 1, 'content/candidates/step3', 'batch-01.json');
runBatch(step3Batch2, 'Step 3', 2, 'content/candidates/step3', 'batch-02.json');
runBatch(step3Batch3, 'Step 3', 3, 'content/candidates/step3', 'batch-03.json');
runBatch(step3Batch4, 'Step 3', 4, 'content/candidates/step3', 'batch-04.json');
runBatch(step3Batch5, 'Step 3', 5, 'content/candidates/step3', 'batch-05.json');
runBatch(step3Batch6, 'Step 3', 6, 'content/candidates/step3', 'batch-06.json');
runBatch(step3Batch7, 'Step 3', 7, 'content/candidates/step3', 'batch-07.json');
runBatch(step3Batch8, 'Step 3', 8, 'content/candidates/step3', 'batch-08.json');
runBatch(step3Batch9, 'Step 3', 9, 'content/candidates/step3', 'batch-09.json');
runBatch(step3Batch10, 'Step 3', 10, 'content/candidates/step3', 'batch-10.json');
runBatch(step3Batch11, 'Step 3', 11, 'content/candidates/step3', 'batch-11.json');
runBatch(step3Batch12, 'Step 3', 12, 'content/candidates/step3', 'batch-12.json');
runBatch(step3Batch13, 'Step 3', 13, 'content/candidates/step3', 'batch-13.json');
runBatch(step3Batch14, 'Step 3', 14, 'content/candidates/step3', 'batch-14.json');
runBatch(step3Batch15, 'Step 3', 15, 'content/candidates/step3', 'batch-15.json');
runBatch(step3Batch16, 'Step 3', 16, 'content/candidates/step3', 'batch-16.json');
runBatch(step3Batch17, 'Step 3', 17, 'content/candidates/step3', 'batch-17.json');
runBatch(step3Batch18, 'Step 3', 18, 'content/candidates/step3', 'batch-18.json');
runBatch(step3Batch19, 'Step 3', 19, 'content/candidates/step3', 'batch-19.json');
runBatch(step3Batch20, 'Step 3', 20, 'content/candidates/step3', 'batch-20.json');
runBatch(step3Batch21, 'Step 3', 21, 'content/candidates/step3', 'batch-21.json');
runBatch(step3Batch22, 'Step 3', 22, 'content/candidates/step3', 'batch-22.json');
runBatch(step3Batch23, 'Step 3', 23, 'content/candidates/step3', 'batch-23.json');
runBatch(step3Batch24, 'Step 3', 24, 'content/candidates/step3', 'batch-24.json');

// Save Manifest
writeFileSync('content/candidates/manifest.json', JSON.stringify(allManifestEntries, null, 2));
console.log(`\nSaved manifest with ${allManifestEntries.length} entries to content/candidates/manifest.json.`);

// Report Summary
console.log('\n================ PIPELINE SUMMARY REPORT ================');
let totalDrafted = 0;
let totalAccepted = 0;
let totalRejected = 0;
let totalUnresolved = 0;

const stepTotals: Record<string, { drafted: number; accepted: number; rejected: number; unresolved: number; keyDist: Record<string, number> }> = {
  'Step 1': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keyDist: { A: 0, B: 0, C: 0, D: 0, E: 0 } },
  'Step 2 CK': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keyDist: { A: 0, B: 0, C: 0, D: 0, E: 0 } },
  'Step 3': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keyDist: { A: 0, B: 0, C: 0, D: 0, E: 0 } },
};

for (const res of allResults) {
  totalDrafted += res.drafted;
  totalAccepted += res.accepted;
  totalRejected += res.rejected;
  totalUnresolved += res.unresolved;

  const st = stepTotals[res.step];
  if (st) {
    st.drafted += res.drafted;
    st.accepted += res.accepted;
    st.rejected += res.rejected;
    st.unresolved += res.unresolved;
    for (const [k, v] of Object.entries(res.keyDistribution)) {
      st.keyDist[k] = (st.keyDist[k] || 0) + v;
    }
  }

  console.log(`\n[${res.step} - Batch ${res.batch}]`);
  console.log(`  Drafted:    ${res.drafted}`);
  console.log(`  Accepted:   ${res.accepted}`);
  console.log(`  Rejected:   ${res.rejected}`);
  console.log(`  Unresolved: ${res.unresolved}`);
  console.log(`  Key Distribution:`, res.keyDistribution);
  console.log(`  Topic Breakdown: `, res.topicBreakdown);
  if (res.errors.length) {
    console.log(`  Errors:`);
    res.errors.forEach(e => console.log(`    - ${e.code}: ${e.reason}`));
  }
  if (res.duplicateWarnings.length) {
    console.log(`  Duplicate Warnings:`);
    res.duplicateWarnings.forEach(d => console.log(`    - ${d.code} matched with ${d.matchedWith} (sim: ${d.similarity.toFixed(3)})`));
  }
}

console.log('\n---------------- STEP TOTALS ----------------');
for (const [stepName, data] of Object.entries(stepTotals)) {
  console.log(`[${stepName}]`);
  console.log(`  Total Drafted:    ${data.drafted}`);
  console.log(`  Total Accepted:   ${data.accepted}`);
  console.log(`  Total Rejected:   ${data.rejected}`);
  console.log(`  Total Unresolved: ${data.unresolved}`);
  console.log(`  Key Balance (A/B/C/D/E):`, data.keyDist);
}

console.log('\n---------------- TOTAL CUMULATIVE ----------------');
console.log(`Total Drafted:    ${totalDrafted}`);
console.log(`Total Accepted:   ${totalAccepted}`);
console.log(`Total Rejected:   ${totalRejected}`);
console.log(`Total Unresolved: ${totalUnresolved}`);
console.log('=========================================================\n');
