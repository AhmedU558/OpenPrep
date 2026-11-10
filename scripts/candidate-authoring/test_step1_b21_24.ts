import { step1Batch21 } from './step1-batch21';
import { step1Batch22 } from './step1-batch22';
import { step1Batch23 } from './step1-batch23';
import { step1Batch24 } from './step1-batch24';

const batches = [
  { name: 'step1Batch21', data: step1Batch21 },
  { name: 'step1Batch22', data: step1Batch22 },
  { name: 'step1Batch23', data: step1Batch23 },
  { name: 'step1Batch24', data: step1Batch24 },
];

let errors = 0;
for (const b of batches) {
  console.log(`Checking ${b.name}: ${b.data.length} items`);
  for (const item of b.data) {
    if (!item.choices || item.choices.length !== 5) {
      console.error(`[ERROR] ${item.code} must have 5 choices`);
      errors++;
    } else {
      const lengths = item.choices.map(c => c[0].trim().length);
      const minLen = Math.min(...lengths);
      const maxLen = Math.max(...lengths);
      const ratio = minLen / maxLen;
      if (minLen < 10 || ratio < 0.20) {
        console.error(`[PARALLELISM FAIL] ${item.code}: min=${minLen}, max=${maxLen}, ratio=${ratio.toFixed(3)}`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log('ALL STEP 1 BATCHES 21-24 PASSED VALIDATION PERFECTLY!');
} else {
  console.error(`Total errors: ${errors}`);
  process.exit(1);
}
