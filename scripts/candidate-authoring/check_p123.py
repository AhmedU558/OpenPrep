import sys
import re
import urllib.request
import json

sys.path.append('scripts/candidate-authoring')
import build_step1_cycle10_part1 as p1
import build_step1_cycle10_part2 as p2
import build_step1_cycle10_part3 as p3

items = p1.get_batch37() + p2.get_batch38() + p3.get_batch39()
pmids = []
for it in items:
    m = re.search(r'PMID:\s*(\d+)', it['citation'])
    if m:
        pmids.append(m.group(1))
    else:
        print(f"No PMID for {it['code']}")

print(f"Total PMIDs in parts 1-3: {len(pmids)}")

url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(pmids)}&retmode=json"
req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())

res = data.get('result', {})
found = [uid for uid in pmids if uid in res and 'error' not in res[uid]]
print(f"Valid NCBI articles found: {len(found)}/{len(pmids)}")
missing = [uid for uid in pmids if uid not in res or 'error' in res[uid]]
if missing:
    print("Missing PMIDs:", missing)
else:
    print("All 75 PMIDs exist in PubMed!")
