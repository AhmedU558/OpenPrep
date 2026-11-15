import urllib.request, urllib.parse, json

def lookup(term):
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(term)}&retmode=json&retmax=3"
    ids = json.loads(urllib.request.urlopen(url).read())['esearchresult']['idlist']
    if not ids:
        print(f"No results for {term}")
        return
    s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(ids)}&retmode=json"
    res = json.loads(urllib.request.urlopen(s_url).read())['result']
    for i in ids:
        print(f"  PMID {i}: {res[i].get('authors', [{}])[0].get('name')} | {res[i].get('title')} | {res[i].get('source')} ({res[i].get('pubdate')})")

print("Lookup 1: Guillain-Barre Lancet Willison")
lookup("Willison HJ Guillain-Barre syndrome Lancet 2016")

print("Lookup 2: Charcot-Marie-Tooth PMP22 duplication Cell")
lookup("Lupski JR DNA duplication associated with Charcot-Marie-Tooth")

print("Lookup 3: Syringomyelia review")
lookup("syringomyelia Chiari malformation review Lancet Neurol")

print("Lookup 4: Spinal cord infarction anterior spinal artery")
lookup("spinal cord infarction anterior spinal artery Cheshire")

print("Lookup 5: Idiopathic pulmonary fibrosis Lancet Richeldi 2017")
lookup("Richeldi L Collard HR Jones MG Idiopathic pulmonary fibrosis")
