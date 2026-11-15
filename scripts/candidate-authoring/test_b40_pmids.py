import urllib.request
import json

pmids = [
    '9815542', '9284725', '8696333', '17327398', '15146197',
    '10479703', '18452296', '23280543', '17290409', '17135898',
    '16757962', '25150893', '25301777', '23644956', '11228280',
    '22878696', '19827014', '24048067', '20547788', '28243303',
    '21748680', '22484697', '23821035', '21727751', '22695589'
]

url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=" + ",".join(pmids) + "&retmode=json"
req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())

res = data.get('result', {})
found = [uid for uid in pmids if uid in res and 'error' not in res[uid]]
print(f"Valid NCBI articles found: {len(found)}/{len(pmids)}")
missing = [uid for uid in pmids if uid not in res or 'error' in res[uid]]
if missing:
    print("Missing:", missing)
for uid in pmids:
    if uid in res and 'error' not in res[uid]:
        item = res[uid]
        title = item.get('title', '')
        authors = item.get('authors', [])
        first_author = authors[0]['name'] if authors else 'Unknown'
        source = item.get('source', '')
        pubdate = item.get('pubdate', '')
        print(f"{uid}: {first_author} et al. {title[:60]}... {source} ({pubdate})")
