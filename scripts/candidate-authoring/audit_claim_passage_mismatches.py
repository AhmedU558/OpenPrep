import json

with open('content/candidates/batch41-claim-mapping-ledger.json', 'r', encoding='utf-8') as f:
    ledger = json.load(f)

print(f"Auditing {len(ledger['records'])} records for claim-versus-passage mismatch:\n")

mismatches = []
for r in ledger['records']:
    code = r['code']
    pmid = r['pmid']
    claim = r['claimMapping']['preciseTestedClaim']
    text = r['claimMapping']['actualSupportingText']
    status = r['claimMapping']['decisiveClaimStatus']
    
    # Check if key mechanistic words from claim appear in text
    # e.g., if claim mentions a specific gene, receptor, molecule, or threshold
    # let's see which words are missing from text
    print(f"=== {code} (PMID {pmid}) ===")
    print(f"CLAIM:  {claim}")
    print(f"TEXT:   {text}")
    print(f"STATUS: {status}")
    print("-" * 60)
