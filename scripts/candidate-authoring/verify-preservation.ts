import type { QuestionContent } from '../../src/lib/validation/content';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import type { ManifestEntry } from './types';

console.log('================================================================');
console.log('          CANDIDATE CORPUS PRESERVATION & INTEGRITY CHECK       ');
console.log('================================================================\n');

const manifestPath = 'content/candidates/manifest.json';
if (!existsSync(manifestPath)) {
  console.error(`[FATAL] Manifest missing at ${manifestPath}`);
  process.exit(1);
}

let manifest: ManifestEntry[] = [];
try {
  manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
} catch (e) {
  console.error(`[FATAL] Corrupted or unreadable manifest.json: ${String(e)}`);
  process.exit(1);
}

const manifestMap = new Map<string, ManifestEntry>();
for (const entry of manifest) {
  if (manifestMap.has(entry.code)) {
    console.error(`[FATAL] Duplicate entry code in manifest: ${entry.code}`);
    process.exit(1);
  }
  manifestMap.set(entry.code, entry);
}

console.log(`Successfully verified manifest integrity with ${manifest.length} unique entries.`);

const examDirs = [
  { exam: 'Step 1', dir: 'content/candidates/step1' },
  { exam: 'Step 2 CK', dir: 'content/candidates/step2ck' },
  { exam: 'Step 3', dir: 'content/candidates/step3' },
];

let totalPreservedDiskItems = 0;
const seenDiskCodes = new Set<string>();

const diskCountsByExam: Record<string, {
  fileCount: number;
  itemCount: number;
  editoriallyScreened: number;
  structurallyValid: number;
}> = {
  'Step 1': { fileCount: 0, itemCount: 0, editoriallyScreened: 0, structurallyValid: 0 },
  'Step 2 CK': { fileCount: 0, itemCount: 0, editoriallyScreened: 0, structurallyValid: 0 },
  'Step 3': { fileCount: 0, itemCount: 0, editoriallyScreened: 0, structurallyValid: 0 },
};

for (const { exam, dir } of examDirs) {
  if (!existsSync(dir)) {
    console.error(`[FATAL] Exam directory missing: ${dir}`);
    process.exit(1);
  }

  const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  diskCountsByExam[exam]!.fileCount = files.length;

  for (const file of files) {
    const filePath = `${dir}/${file}`;
    let content: string;
    try {
      content = readFileSync(filePath, 'utf8');
    } catch (e) {
      console.error(`[FATAL] Unreadable batch file: ${filePath} (${String(e)})`);
      process.exit(1);
    }

    let items: QuestionContent[];
    try {
      items = JSON.parse(content);
    } catch (e) {
      console.error(`[FATAL] Corrupted JSON in file: ${filePath} (${String(e)})`);
      process.exit(1);
    }

    if (!Array.isArray(items)) {
      console.error(`[FATAL] File ${filePath} does not contain a JSON array.`);
      process.exit(1);
    }

    for (const item of items) {
      if (!item.code) {
        console.error(`[FATAL] Item missing code in ${filePath}`);
        process.exit(1);
      }

      if (seenDiskCodes.has(item.code)) {
        console.error(`[FATAL] Duplicate item code on disk: ${item.code} in ${filePath}`);
        process.exit(1);
      }
      seenDiskCodes.add(item.code);

      const m = manifestMap.get(item.code);
      if (!m) {
        console.error(`[FATAL] Preserved disk item ${item.code} missing from manifest.`);
        process.exit(1);
      }

      // Verify SHA-256 hash preservation
      const currentHash = createHash('sha256').update(JSON.stringify(item)).digest('hex');
      if (currentHash !== m.hash) {
        console.error(`[FATAL] Preserved disk hash mismatch for ${item.code}! Manifest: ${m.hash}, Computed: ${currentHash}`);
        process.exit(1);
      }

      diskCountsByExam[exam]!.itemCount++;
      totalPreservedDiskItems++;

      if (m.status === 'EDITORIALLY_SCREENED' || m.status === 'CANDIDATE_ACCEPTED') {
        diskCountsByExam[exam]!.editoriallyScreened++;
      } else {
        diskCountsByExam[exam]!.structurallyValid++;
      }
    }
  }
}

// Calculate cumulative manifest status breakdown
let manifestEditorialPass = 0;
let manifestStructurallyValidOnly = 0;
let manifestRejected = 0;
let manifestUnresolved = 0;

for (const entry of manifest) {
  if (entry.status === 'EDITORIALLY_SCREENED' || entry.status === 'CANDIDATE_ACCEPTED') {
    manifestEditorialPass++;
  } else if (entry.status === 'STRUCTURALLY_VALID') {
    manifestStructurallyValidOnly++;
  } else if (entry.status === 'REJECTED') {
    manifestRejected++;
  } else if (entry.status === 'UNRESOLVED') {
    manifestUnresolved++;
  }
}

console.log('--- PRESERVED DISK & MANIFEST VERIFICATION SUMMARY ---');
console.log(`Total Batch Files Verified:    ${diskCountsByExam['Step 1']!.fileCount + diskCountsByExam['Step 2 CK']!.fileCount + diskCountsByExam['Step 3']!.fileCount}`);
console.log(`Total Preserved Disk Items:     ${totalPreservedDiskItems}`);
console.log(`Total Manifest Entries:         ${manifest.length}`);
console.log(`  - Editorial PASS (Screened):  ${manifestEditorialPass}`);
console.log(`  - Structurally Valid Only:    ${manifestStructurallyValidOnly}`);
console.log(`  - Rejected (Do Not Count):    ${manifestRejected}`);
console.log(`  - Unresolved Controversies:   ${manifestUnresolved}`);

console.log('\n--- BY EXAM ON DISK ---');
for (const [exam, data] of Object.entries(diskCountsByExam)) {
  console.log(`[${exam}]`);
  console.log(`  Batch Files:                  ${data.fileCount}`);
  console.log(`  Accepted Items on Disk:       ${data.itemCount} / 1,000 ceiling`);
  console.log(`  - Editorial PASS:             ${data.editoriallyScreened}`);
  console.log(`  - Structurally Valid Only:    ${data.structurallyValid}`);
}

console.log('\n================================================================');
console.log('PRESERVATION CHECK PASSED: All existing files intact with 100% hash parity.');
