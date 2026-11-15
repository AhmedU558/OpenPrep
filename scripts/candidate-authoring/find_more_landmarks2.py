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

print("Lookup Lupski 1991:")
lookup("Lupski JR DNA duplication Charcot-Marie-Tooth type 1A Cell 1991")

print("Lookup Syringomyelia Batzdorf:")
lookup("Batzdorf U Chiari malformation syringomyelia")

print("Lookup Urea transporters Sands:")
lookup("Sands JM mammalian urea transporters")

print("Lookup Stewart carbenoxolone:")
lookup("Stewart PM carbenoxolone 11beta-hydroxysteroid dehydrogenase")

print("Lookup Dead space Robertson:")
lookup("Robertson HT dead space Enghoff Bohr")
