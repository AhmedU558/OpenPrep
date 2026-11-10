import { step2Batch21 } from './step2-batch21';
import { step2Batch22 } from './step2-batch22';
import { step2Batch23 } from './step2-batch23';
import { step2Batch24 } from './step2-batch24';

const batches = [
  { name: 'step2Batch21', data: step2Batch21 },
  { name: 'step2Batch22', data: step2Batch22 },
  { name: 'step2Batch23', data: step2Batch23 },
  { name: 'step2Batch24', data: step2Batch24 },
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
  console.log('ALL STEP 2 CK BATCHES 21-24 PASSED VALIDATION PERFECTLY!');
} else {
  console.error(`Total errors: ${errors}`);
  process.exit(1);
}
