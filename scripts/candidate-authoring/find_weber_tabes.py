import urllib.request, urllib.parse, json

def search(term):
    print(f"\n--- Search: {term} ---")
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(term)}&retmode=json&retmax=5"
    data = json.loads(urllib.request.urlopen(url).read())
    ids = data['esearchresult']['idlist']
    if not ids:
        print("No results")
        return
    s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(ids)}&retmode=json"
    s_data = json.loads(urllib.request.urlopen(s_url).read())
    for uid in ids:
        doc = s_data['result'][uid]
        author = doc.get("authors", [{}])[0].get("name", "Unknown") if doc.get("authors") else "Unknown"
        title = doc.get("title", "")
        source = doc.get("source", "")
        pubdate = doc.get("pubdate", "")
        print(f"PMID {uid}: {author} et al. {title} {source}. {pubdate}.")

search('"tabes dorsalis" neurosyphilis')
search('Berger JR neurosyphilis')
search('Ropper AH "Weber syndrome"')
search('Weber syndrome midbrain fascicle')
