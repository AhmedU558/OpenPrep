import json

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

for r in ledger['records']:
    code = r['code']
    topic = r['topic']
    claim = r['claimMapping']['preciseTestedClaim']
    print(f"=== {code} ===")
    print(f"TOPIC: {topic}")
    print(f"CLAIM: {claim[:90]}...")
    print()
