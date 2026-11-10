import { step3Batch21 } from './step3-batch21';
import { step3Batch22 } from './step3-batch22';
import { step3Batch23 } from './step3-batch23';
import { step3Batch24 } from './step3-batch24';

const batches = [
  { name: 'step3Batch21', data: step3Batch21 },
  { name: 'step3Batch22', data: step3Batch22 },
  { name: 'step3Batch23', data: step3Batch23 },
  { name: 'step3Batch24', data: step3Batch24 },
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
  console.log('ALL STEP 3 BATCHES 21-24 PASSED VALIDATION PERFECTLY!');
} else {
  console.error(`Total errors: ${errors}`);
  process.exit(1);
}
