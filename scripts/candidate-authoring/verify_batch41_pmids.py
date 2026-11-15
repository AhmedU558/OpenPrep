import json
import re
import urllib.request
import time

def main():
    items_by_code = {}
    for exam in ['step1', 'step2ck', 'step3']:
        path = f'content/candidates/{exam}/batch-41.json'
        items = json.load(open(path, 'r', encoding='utf-8'))
        for q in items:
            code = q['code']
            for r in q.get('references', []):
                m = re.search(r'PMID:\s*(\d+)', r.get('label', ''))
                if m:
                    items_by_code[code] = {
                        'pmid': m.group(1),
                        'label': r.get('label', ''),
                        'url': r.get('url', ''),
                        'exam': exam,
                        'stem': q.get('stem', '')[:100]
                    }

    print(f"Total Batch 41 items with PMIDs: {len(items_by_code)}")
    pmid_list = list(dict.fromkeys([v['pmid'] for v in items_by_code.values()]))
    print(f"Unique PMIDs to verify: {len(pmid_list)}")

    ncbi_results = {}
    chunk_size = 50
    for i in range(0, len(pmid_list), chunk_size):
        chunk = pmid_list[i:i+chunk_size]
        ids_str = ",".join(chunk)
        url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={ids_str}&retmode=json"
        req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0 (academic verification tool)'})
        try:
            with urllib.request.urlopen(req, timeout=20) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                res = data.get('result', {})
                for uid in res.get('uids', []):
                    ncbi_results[uid] = res[uid]
            print(f"  Fetched {len(chunk)} PMIDs (total fetched: {len(ncbi_results)})")
            time.sleep(0.5)
        except Exception as e:
            print(f"  Error fetching chunk {i}: {e}")

    matches = 0
    mismatches = []
    missing_from_ncbi = []

    for code, info in items_by_code.items():
        pmid = info['pmid']
        label = info['label']
        if pmid not in ncbi_results:
            missing_from_ncbi.append((code, pmid, label))
            continue

        doc = ncbi_results[pmid]
        retrieved_title = doc.get('title', '')
        authors = doc.get('authors', [])
        first_author = authors[0]['name'] if authors else ''
        journal = doc.get('source', '')
        pubdate = doc.get('pubdate', '')

        label_lower = label.lower()
        title_words = [w for w in re.findall(r'\b[a-zA-Z]{5,}\b', retrieved_title.lower()) if w not in ['which', 'after', 'with', 'their', 'between', 'during', 'under', 'clinical', 'trial', 'study', 'patients']]
        
        author_match = False
        if first_author:
            last_name = first_author.split()[0].lower()
            if last_name in label_lower:
                author_match = True

        title_word_matches = sum(1 for w in title_words if w in label_lower)
        title_word_ratio = title_word_matches / max(len(title_words), 1)

        is_match = author_match or title_word_ratio >= 0.3

        if is_match:
            matches += 1
        else:
            mismatches.append({
                'code': code,
                'pmid': pmid,
                'label': label,
                'retrieved_title': retrieved_title,
                'retrieved_first_author': first_author,
                'retrieved_journal': journal,
                'retrieved_pubdate': pubdate
            })

    print("\n================ NCBI RETRIEVAL AUDIT RESULTS (BATCH 41) ================")
    print(f"Total Checked: {len(items_by_code)}")
    print(f"Valid Metadata Matches: {matches}")
    print(f"Missing from NCBI: {len(missing_from_ncbi)}")
    print(f"Mismatches Flagged for Review: {len(mismatches)}")

    ledger_path = 'content/candidates/batch41-retrieval-audit.json'
    with open(ledger_path, 'w', encoding='utf-8') as f:
        json.dump({
            'totalChecked': len(items_by_code),
            'matched': matches,
            'mismatches': mismatches,
            'missing': missing_from_ncbi,
            'records': [
                {
                    'code': code,
                    'pmid': info['pmid'],
                    'label': info['label'],
                    'retrievedTitle': ncbi_results.get(info['pmid'], {}).get('title', ''),
                    'retrievedFirstAuthor': ncbi_results.get(info['pmid'], {}).get('authors', [{}])[0].get('name', '') if ncbi_results.get(info['pmid'], {}).get('authors') else '',
                    'retrievedSource': ncbi_results.get(info['pmid'], {}).get('source', ''),
                    'retrievedPubDate': ncbi_results.get(info['pmid'], {}).get('pubdate', '')
                }
                for code, info in items_by_code.items() if info['pmid'] in ncbi_results
            ]
        }, f, indent=2)
    print(f"\nSaved detailed retrieval audit ledger to {ledger_path}")

if __name__ == '__main__':
    main()
