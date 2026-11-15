import sys
sys.path.append('scripts/candidate-authoring')
from validate_substrings import exact_substrings

# Fix the two that failed earlier in exact_substrings
exact_substrings['op-c-s2-1002'] = ('41217492', 'All patients were stratified as intermediate high-risk PE with a mean age of 68')
exact_substrings['op-c-s2-1006'] = ('42900579', 'ophthalmic emergency because of the risk of sudden, severe and often irreversible loss of vision')

# Now load build_strict_claim_mapping_ledger.py and update each supportingSubstring
with open('scripts/candidate-authoring/build_strict_claim_mapping_ledger.py', 'r', encoding='utf-8') as f:
    b_text = f.read()

import re
for code, (pmid, sub) in exact_substrings.items():
    # Replace supportingSubstring for this code
    # Escaping sub for regex replacement:
    clean_sub = sub.replace('\\', '\\\\')
    pattern = rf"('{code}':\s*\{{[^}}]*?'supportingSubstring':\s*')[^']*(')"
    replacement = rf"\g<1>{clean_sub}\g<2>"
    b_text = re.sub(pattern, replacement, b_text, count=1, flags=re.DOTALL)

with open('scripts/candidate-authoring/build_strict_claim_mapping_ledger.py', 'w', encoding='utf-8') as f:
    f.write(b_text)

print('Updated build_strict_claim_mapping_ledger.py with all exact validated substrings.')
