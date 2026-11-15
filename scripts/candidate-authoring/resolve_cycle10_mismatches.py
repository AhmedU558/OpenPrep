import json
import re
import urllib.request
import urllib.parse
import time

def clean_title(title):
    words = re.findall(r'\b[a-zA-Z]{4,}\b', title)
    return " ".join(words[:8])

def search_pmid(author, title, journal=""):
    queries = []
    t_words = clean_title(title)
    if author:
        queries.append(f"{author} {t_words}")
    queries.append(t_words)
    if journal:
        j_short = journal.split()[0]
        queries.append(f"{t_words} {j_short}")

    for q in queries:
        url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={urllib.parse.quote(q)}&retmode=json"
        req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0 (academic tool)'})
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                ids = data.get('esearchresult', {}).get('idlist', [])
                if ids:
                    return ids[0]
            time.sleep(0.35)
        except Exception as e:
            time.sleep(0.5)
    return None

def main():
    audit_data = json.load(open('content/candidates/cycle10-retrieval-audit.json', 'r', encoding='utf-8'))
    mismatches = audit_data.get('mismatches', [])
    print(f"Total mismatches to resolve: {len(mismatches)}")

    resolved = {}
    unresolved = []

    for idx, item in enumerate(mismatches):
        code = item['code']
        label = item['label']
        
        parts = label.split('. ')
        author = ""
        title = ""
        journal = ""
        if len(parts) >= 2:
            author = parts[0].split(',')[0].replace(' et al', '').strip()
            title = parts[1].strip()
            if len(parts) >= 3:
                journal = parts[2].split('.')[0].strip()

        print(f"[{idx+1}/{len(mismatches)}] Resolving {code}: {author} - {title[:50]}...")
        found_pmid = search_pmid(author, title, journal)
        
        if found_pmid:
            s_url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={found_pmid}&retmode=json"
            try:
                with urllib.request.urlopen(urllib.request.Request(s_url, headers={'User-Agent': 'OpenPrep/1.0'}), timeout=10) as s_resp:
                    s_data = json.loads(s_resp.read().decode('utf-8'))
                    doc = s_data['result'][found_pmid]
                    ret_title = doc.get('title', '')
                    authors = doc.get('authors', [])
                    first_author = authors[0]['name'] if authors else ''
                    source = doc.get('source', '')
                    pubdate = doc.get('pubdate', '')
                    print(f"   -> FOUND PMID: {found_pmid} | {first_author} | {ret_title[:60]}... | {source}")
                    resolved[code] = {
                        'old_pmid': item['pmid'],
                        'new_pmid': found_pmid,
                        'new_title': ret_title,
                        'new_first_author': first_author,
                        'new_source': source,
                        'new_pubdate': pubdate,
                        'old_label': label,
                        'new_label': f"{first_author}. {ret_title} {source}. {pubdate}. PMID: {found_pmid}."
                    }
                time.sleep(0.35)
            except Exception as e:
                print(f"   -> Summary check failed: {e}")
                unresolved.append((code, item['pmid'], label, "Summary fetch error"))
        else:
            print(f"   -> NOT FOUND")
            unresolved.append((code, item['pmid'], label, "No NCBI search match"))

    print(f"\nResolution complete: {len(resolved)} resolved, {len(unresolved)} unresolved.")
    
    with open('content/candidates/cycle10-pmid-resolutions.json', 'w', encoding='utf-8') as f:
        json.dump({'resolved': resolved, 'unresolved': unresolved}, f, indent=2)

if __name__ == '__main__':
    main()
