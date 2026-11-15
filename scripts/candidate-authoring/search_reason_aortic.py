import urllib.request, urllib.parse, json

def search(q):
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(q)}&retmode=json&retmax=3"
    ids = json.loads(urllib.request.urlopen(url).read())['esearchresult']['idlist']
    if not ids:
        print(f"No results for {q}")
        return
    s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(ids)}&retmode=json"
    res = json.loads(urllib.request.urlopen(s_url).read())['result']
    for i in ids:
        d = res[i]
        print(f"  PMID {i}: {d.get('authors', [{}])[0].get('name')} | {d.get('title')} | {d.get('source')} ({d.get('pubdate')})")

print("Reason search:")
search('Reason J "Human error" BMJ')
search('Reason J "Swiss cheese" error')

print("Aortic dissection search:")
search('Nienaber CA "aortic dissection" Lancet')
search('Sayed A "aortic dissection" acute Stanford')
search('aortic dissection "type A" surgical emergency review')
