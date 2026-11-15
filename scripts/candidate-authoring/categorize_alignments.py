import json

with open('scripts/candidate-authoring/detailed_discrepancy_report.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

# Categories of claim-passage alignment:
# 1. FULL_MECHANISTIC_SUPPORT: The abstract contains a specific sentence proving the exact molecular/clinical mechanism.
# 2. CONTEXTUAL_ONLY (PARTIALLY_SUPPORTED): The abstract discusses the clinical disease/drug in general, but the specific tested mechanism (e.g. molecular cofactor, gene name, or trial rule) is absent from the abstract.
# 3. MISMATCH (UNSUPPORTED): The abstract does not discuss the tested mechanism at all or tests a completely different intervention.

alignments = []

for item in report:
    code = item['code']
    claim = item['claim']
    sentences = item['all_sentences']
    ab = ' '.join(sentences).lower()
    
    # Analyze item
    alignments.append((code, item['pmid'], item['topic']))

print(f"Total items: {len(alignments)}")
