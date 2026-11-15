import json

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

for r in ledger['records']:
    code = r['code']
    pmid = r['pmid']
    ab = fetched[pmid].get('abstract', '')
    dist = r['claimMapping']['strongestDistractor']
    claim = r['claimMapping']['preciseTestedClaim']
    text = r['claimMapping']['actualSupportingText']
    
    # Assess claim support
    # Does text directly state the core mechanism?
    print(f"=== {code} (PMID {pmid}) ===")
    print(f"Claim: {claim[:80]}...")
    print(f"Text:  {text[:80]}...")
    print(f"Distractor: {dist[:60]}...")
    print()
