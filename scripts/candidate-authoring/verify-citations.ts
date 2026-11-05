import { readFileSync, readdirSync } from 'node:fs';
import { isPlaceholderReference, parseReferenceUrl } from './reference-url';

console.log('================================================================');
console.log('      BIBLIOGRAPHIC FORMAT & RETRIEVAL READINESS AUDIT          ');
console.log('================================================================\n');

/**
 * Distinguishes syntactic URL checks, bibliographic format checks, and actual retrieved source verification.
 * 1. Syntactic screening: URL is well-formed and not a generic placeholder root (e.g. pubmed.ncbi.nlm.nih.gov/).
 * 2. Bibliographic format check: Reference label contains standard citation metadata (Author/Org, Year, Identifier).
 * 3. Actual Source Verification: Requires retrieving the full document and matching the specific supporting
 *    section/passage to the item's clinical claim. (Automated pattern checks do NOT constitute source verification.)
 */

const dirs = [
  'content/candidates/step1',
  'content/candidates/step2ck',
  'content/candidates/step3',
];

let totalReferences = 0;
let syntacticallyValidUrls = 0;
let bibliographicFormatMatches = 0;
let unverifiedOrInaccessible = 0;

for (const dir of dirs) {
  const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
  for (const file of files) {
    const items = JSON.parse(readFileSync(`${dir}/${file}`, 'utf-8'));
    for (const item of items) {
      for (const ref of item.references || []) {
        totalReferences++;
        
        // 1. Syntactic check
        const url = parseReferenceUrl(ref.url);
        const isNotPlaceholder = url && !isPlaceholderReference(url);
        
        if (isNotPlaceholder) {
          syntacticallyValidUrls++;
        }

        // 2. Bibliographic format check (author/organization + year + identifier)
        const hasAuthor = /[A-Z][a-z]+ [A-Z]{1,2}/.test(ref.label) || ref.label.includes('AHA') || ref.label.includes('CDC') || ref.label.includes('ACOG') || ref.label.includes('Joint Commission') || ref.label.includes('GOLD') || ref.label.includes('ASAM') || ref.label.includes('USPSTF');
        const hasYear = /\b(19\d\d|20\d\d)\b/.test(ref.label);
        const hasPmidOrDoiOrCatalog = /PMID:\s*\d+/i.test(ref.label) || /DOI:/i.test(ref.label) || /NLM ID:/i.test(ref.label) || (url && ['doi.org', 'pubmed.ncbi.nlm.nih.gov', 'cdc.gov', 'www.cdc.gov', 'fda.gov', 'www.fda.gov', 'goldcopd.org'].includes(url.hostname));

        if (hasAuthor && hasYear && hasPmidOrDoiOrCatalog) {
          bibliographicFormatMatches++;
        } else {
          unverifiedOrInaccessible++;
          console.warn(`[UNVERIFIED REFERENCE] ${item.code} in ${file}: "${ref.label}"`);
        }
      }
    }
  }
}

console.log(`Total References Scanned:              ${totalReferences}`);
console.log(`Syntactically Valid URLs (non-root):   ${syntacticallyValidUrls}`);
console.log(`Bibliographic Format Matched:          ${bibliographicFormatMatches}`);
console.log(`Unverified / Non-Retrieved References: ${unverifiedOrInaccessible}`);
console.log('\nNOTE: Regex-based pattern matching validates bibliographic metadata structure only.');
console.log('Substantive source verification requires manual or programmatic document retrieval and claim mapping.');
console.log('================================================================\n');
