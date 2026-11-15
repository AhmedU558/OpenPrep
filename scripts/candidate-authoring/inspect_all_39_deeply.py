import json

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

print(f"Detailed Item-by-Item Review of 39 Target Records:\n")

discrepancy_report = []

for r in ledger['records']:
    code = r['code']
    pmid = r['pmid']
    claim = r['claimMapping']['preciseTestedClaim']
    text = r['claimMapping']['actualSupportingText']
    ab = fetched[pmid].get('abstract', '')
    
    # Check if text contains the core mechanism or just background
    # Let's inspect the entire abstract to see if there is a better sentence in the abstract
    # or if the abstract genuinely lacks the specific mechanism
    sentences = [s.strip() for s in ab.split('. ') if len(s.strip()) > 20]
    
    discrepancy_report.append({
        'code': code,
        'pmid': pmid,
        'topic': r['topic'],
        'claim': claim,
        'current_text': text,
        'all_sentences': sentences
    })

with open('scripts/candidate-authoring/detailed_discrepancy_report.json', 'w', encoding='utf-8') as f:
    json.dump(discrepancy_report, f, indent=2, ensure_ascii=False)

print("Saved detailed_discrepancy_report.json")
