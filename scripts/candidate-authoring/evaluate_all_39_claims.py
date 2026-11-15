import json

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

# Evaluate each record rigorously:
# What does the question test?
# What does the cited paper abstract state?
# Does the text prove the specific tested claim or only the general disease context?

audit_results = []
for r in ledger['records']:
    code = r['code']
    pmid = r['pmid']
    claim = r['claimMapping']['preciseTestedClaim']
    text = r['claimMapping']['actualSupportingText']
    ab = fetched[pmid].get('abstract', '')
    
    audit_results.append({
        'code': code,
        'pmid': pmid,
        'claim': claim,
        'text': text,
        'ab_len': len(ab)
    })

print(f"Loaded {len(audit_results)} records for claim-versus-passage audit.")
