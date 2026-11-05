import { readFileSync, readdirSync } from 'node:fs';
import { isPlaceholderReference, parseReferenceUrl } from './reference-url';

const dirs = [
  'content/candidates/step1',
  'content/candidates/step2ck',
  'content/candidates/step3',
];

console.log('Scanning existing candidate files for generic/placeholder URLs...');
let placeholderCount = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter(f => f.endsWith('.json'));
  for (const file of files) {
    const items = JSON.parse(readFileSync(`${dir}/${file}`, 'utf-8'));
    for (const item of items) {
      for (const ref of item.references || []) {
        const url = parseReferenceUrl(ref.url);
        if (!url || isPlaceholderReference(url)) {
          console.log(`[Placeholder URL] ${item.code} in ${file}: "${ref.label}" -> ${ref.url}`);
          placeholderCount++;
        }
      }
    }
  }
}

console.log(`Found ${placeholderCount} placeholder URLs.`);
if (placeholderCount > 0) {
  console.error(`Audit failed: ${placeholderCount} placeholder reference URLs detected.`);
  process.exit(1);
} else {
  console.log(`Audit passed: 0 placeholder URLs found across all candidate files.`);
  process.exit(0);
}
