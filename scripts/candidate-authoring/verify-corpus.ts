import type { QuestionContent } from '../../src/lib/validation/content';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { questionContentSchema } from '../../src/lib/validation/content';
import { bankQuestionSchema } from '../../src/lib/question-bank';
import type { ManifestEntry } from './types';

console.log('================================================================');
console.log('         USMLE CANDIDATE CORPUS & INTEGRITY VERIFICATION       ');
console.log('================================================================\n');

const failures: string[] = [];

function recordFailure(msg: string) {
  failures.push(msg);
  console.error(`[INTEGRITY FAILURE] ${msg}`);
}

// 1. Load Manifest
const manifestPath = 'content/candidates/manifest.json';
if (!existsSync(manifestPath)) {
  recordFailure(`Manifest file not found at ${manifestPath}`);
  process.exit(1);
}

let manifest: ManifestEntry[] = [];
try {
  manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
} catch (e) {
  recordFailure(`Failed to parse manifest JSON: ${String(e)}`);
  process.exit(1);
}

console.log(`Loaded Manifest: ${manifest.length} total entries.`);

// 2. Status counts & breakdown
const statusCounts = {
  drafted: manifest.length,
  structurally_valid: 0,
  editorially_screened: 0,
  rejected: 0,
  unresolved: 0,
};

const byExam: Record<string, {
  drafted: number;
  accepted: number;
  rejected: number;
  unresolved: number;
  keys: Record<string, number>;
  systems: Record<string, number>;
}> = {
  'Step 1': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} },
  'Step 2 CK': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} },
  'Step 3': { drafted: 0, accepted: 0, rejected: 0, unresolved: 0, keys: { A: 0, B: 0, C: 0, D: 0, E: 0 }, systems: {} },
};

const seenManifestCodes = new Set<string>();

for (const entry of manifest) {
  if (seenManifestCodes.has(entry.code)) {
    recordFailure(`Duplicate candidate code in manifest: ${entry.code}`);
  }
  seenManifestCodes.add(entry.code);

  const ex = byExam[entry.exam];
  if (!ex) {
    recordFailure(`Unknown exam in manifest entry ${entry.code}: "${entry.exam}"`);
    continue;
  }

  ex.drafted++;

  if (entry.status === 'EDITORIALLY_SCREENED' || entry.status === 'CANDIDATE_ACCEPTED') {
    statusCounts.editorially_screened++;
    statusCounts.structurally_valid++;
    ex.accepted++;
    ex.systems[entry.system] = (ex.systems[entry.system] || 0) + 1;
  } else if (entry.status === 'STRUCTURALLY_VALID') {
    statusCounts.structurally_valid++;
    ex.accepted++;
    ex.systems[entry.system] = (ex.systems[entry.system] || 0) + 1;
  } else if (entry.status === 'REJECTED') {
    statusCounts.rejected++;
    ex.rejected++;
  } else if (entry.status === 'UNRESOLVED') {
    statusCounts.unresolved++;
    ex.unresolved++;
  } else {
    recordFailure(`Unrecognized status "${entry.status}" for code ${entry.code}`);
  }
}

// 3. Check 1,000-per-step ceiling
for (const [examName, data] of Object.entries(byExam)) {
  if (data.accepted > 1000) {
    recordFailure(`Ceiling exceeded for ${examName}: ${data.accepted} accepted candidates > 1,000 ceiling!`);
  }
}

// 4. Batch Files Verification & Manifest/File 1:1 Correspondence
const examConfigs = [
  { exam: 'Step 1', dir: 'content/candidates/step1' },
  { exam: 'Step 2 CK', dir: 'content/candidates/step2ck' },
  { exam: 'Step 3', dir: 'content/candidates/step3' },
];

const manifestMap = new Map<string, ManifestEntry>(manifest.map(m => [m.code, m]));
const seenDiskCodes = new Set<string>();
let totalDiskItems = 0;
const letters = ['A', 'B', 'C', 'D', 'E'];

for (const { exam, dir } of examConfigs) {
  if (!existsSync(dir)) {
    recordFailure(`Candidate directory missing: ${dir}`);
    continue;
  }

  const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  for (const file of files) {
    const filePath = `${dir}/${file}`;
    let items: QuestionContent[] = [];
    try {
      items = JSON.parse(readFileSync(filePath, 'utf-8'));
    } catch (e) {
      recordFailure(`Failed to parse JSON file ${filePath}: ${String(e)}`);
      continue;
    }

    if (!Array.isArray(items)) {
      recordFailure(`File ${filePath} does not contain a JSON array.`);
      continue;
    }

    totalDiskItems += items.length;

    for (const item of items) {
      if (!item.code) {
        recordFailure(`Missing code in ${filePath}`);
        continue;
      }

      if (seenDiskCodes.has(item.code)) {
        recordFailure(`Duplicate code on disk: ${item.code} in ${filePath}`);
      }
      seenDiskCodes.add(item.code);

      // Verify correspondence with manifest
      const manifestEntry = manifestMap.get(item.code);
      if (!manifestEntry) {
        recordFailure(`Disk question ${item.code} in ${filePath} not found in manifest.`);
      } else {
        // Verify SHA-256 hash match
        const computedHash = createHash('sha256').update(JSON.stringify(item)).digest('hex');
        if (computedHash !== manifestEntry.hash) {
          recordFailure(`SHA-256 hash mismatch for ${item.code}: manifest has ${manifestEntry.hash}, disk computes ${computedHash}`);
        }
      }

      // Schema checks
      const qcResult = questionContentSchema.safeParse(item);
      if (!qcResult.success) {
        recordFailure(`Content schema failed for ${item.code}: ${qcResult.error.issues.map(i => i.message).join('; ')}`);
      }

      const bcResult = bankQuestionSchema.safeParse(item);
      if (!bcResult.success) {
        recordFailure(`Bank schema failed for ${item.code}: ${bcResult.error.issues.map(i => i.message).join('; ')}`);
      }

      // Parallelism
      if (item.options && Array.isArray(item.options)) {
        const lengths = item.options.map((o: QuestionContent['options'][number]) => (o.text || '').trim().length);
        const minLen = Math.min(...lengths);
        const maxLen = Math.max(...lengths);
        if (minLen < 10 || minLen / maxLen < 0.20) {
          recordFailure(`Distractor parallelism failure in ${item.code}: min=${minLen}, max=${maxLen}, ratio=${(minLen / maxLen).toFixed(2)}`);
        }

        const correctOptions = item.options.filter((o: QuestionContent['options'][number]) => o.correct);
        if (correctOptions.length !== 1) {
          recordFailure(`Item ${item.code} must have exactly 1 correct option (found ${correctOptions.length})`);
        } else {
          const correctIdx = item.options.findIndex((o: QuestionContent['options'][number]) => o.correct);
          const letter = letters[correctIdx];
          if (!letter) { recordFailure(`Invalid answer position for ${item.code}`); continue; }
          if (byExam[exam]) {
            byExam[exam].keys[letter] = (byExam[exam].keys[letter] || 0) + 1;
          }
        }
      } else {
        recordFailure(`Item ${item.code} options missing or not an array.`);
      }

      // Reference validity
      if (item.references && Array.isArray(item.references)) {
        for (const ref of item.references) {
          if (!ref.label || ref.label.length > 300) {
            recordFailure(`Item ${item.code} reference label length ${ref.label?.length} > 300`);
          }
          if (
            !ref.url ||
            ref.url === 'https://pubmed.ncbi.nlm.nih.gov/' ||
            ref.url === 'https://pubmed.ncbi.nlm.nih.gov' ||
            ref.url === 'https://www.ncbi.nlm.nih.gov/' ||
            ref.url === 'https://www.ncbi.nlm.nih.gov'
          ) {
            recordFailure(`Item ${item.code} contains generic/placeholder reference URL: "${ref.url}"`);
          }
        }
      } else {
        recordFailure(`Item ${item.code} missing references array.`);
      }

      // Mandatory disclosures & license
      if (item.source !== 'OpenPrep original; AI-authored; medically unreviewed') {
        recordFailure(`Item ${item.code} missing required source label: "${item.source}"`);
      }
      if (item.license !== 'CC-BY-SA-4.0') {
        recordFailure(`Item ${item.code} license is "${item.license}", expected "CC-BY-SA-4.0"`);
      }
    }
  }
}

// 5. Manifest-to-Disk check for accepted entries
for (const entry of manifest) {
  if (entry.status === 'EDITORIALLY_SCREENED' || entry.status === 'CANDIDATE_ACCEPTED' || entry.status === 'STRUCTURALLY_VALID') {
    if (!seenDiskCodes.has(entry.code)) {
      recordFailure(`Manifest entry ${entry.code} is accepted but missing from disk batch files.`);
    }
  }
}

// 6. Summary Report
console.log('\n--- VERIFICATION AUDIT REPORT ---');
console.log(`Manifest Entries:      ${manifest.length}`);
console.log(`Disk Items:            ${totalDiskItems}`);
console.log(`Drafted:               ${statusCounts.drafted}`);
console.log(`Structurally Valid:    ${statusCounts.structurally_valid}`);
console.log(`Editorially Screened:  ${statusCounts.editorially_screened}`);
console.log(`Rejected:              ${statusCounts.rejected}`);
console.log(`Unresolved:            ${statusCounts.unresolved}`);

console.log('\n--- PER-EXAM STATUS & BALANCE ---');
for (const [examName, data] of Object.entries(byExam)) {
  console.log(`\n[${examName}]`);
  console.log(`  Drafted:             ${data.drafted}`);
  console.log(`  Screened/Accepted:   ${data.accepted} / 1,000 ceiling (${((data.accepted / 1000) * 100).toFixed(1)}%)`);
  console.log(`  Rejected:            ${data.rejected}`);
  console.log(`  Unresolved:          ${data.unresolved}`);
  console.log(`  Key Distribution:   `, data.keys);
  console.log(`  System Coverage:    `, data.systems);
}

console.log('\n================================================================');
if (failures.length > 0) {
  console.error(`VERIFICATION FAILED: ${failures.length} integrity defect(s) detected.`);
  process.exit(1);
} else {
  console.log('VERIFICATION PASSED: All integrity checks succeeded with 0 defects.');
  process.exit(0);
}
