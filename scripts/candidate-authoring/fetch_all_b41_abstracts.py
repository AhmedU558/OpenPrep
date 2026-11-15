import json
import urllib.request
import xml.etree.ElementTree as ET

with open('scripts/candidate-authoring/batch41_refs.json', 'r', encoding='utf-8') as f:
    refs = json.load(f)

all_pmids = {code: r['pmid'] for code, r in refs.items()}
all_pmids['op-c-s1-0902'] = '32644584'
all_pmids['op-c-s1-0904'] = '24365430'

unique_pmids = list(dict.fromkeys(all_pmids.values()))

url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={','.join(unique_pmids)}&retmode=xml"
req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})

resp = urllib.request.urlopen(req, timeout=30)
xml_data = resp.read()
root = ET.fromstring(xml_data)

articles = {}

# Standard journal articles
for article in root.findall('.//PubmedArticle'):
    pmid = article.find('.//PMID').text
    title = article.find('.//ArticleTitle')
    title_text = title.text if title is not None and title.text else ''
    
    authors = []
    for author in article.findall('.//Author'):
        ln = author.find('LastName')
        init = author.find('Initials')
        if ln is not None and ln.text:
            authors.append(f"{ln.text} {init.text if init is not None and init.text else ''}".strip())

    journal = article.find('.//Journal/Title')
    iso_journal = article.find('.//Journal/ISOAbbreviation')
    j_text = iso_journal.text if iso_journal is not None and iso_journal.text else (journal.text if journal is not None and journal.text else '')

    pubdate = article.find('.//JournalIssue/PubDate/Year')
    p_text = pubdate.text if pubdate is not None and pubdate.text else ''

    abstract_nodes = article.findall('.//AbstractText')
    abstract_parts = []
    for ab in abstract_nodes:
        lbl = ab.attrib.get('Label', '')
        txt = ab.text or ''
        if lbl:
            abstract_parts.append(f"{lbl}: {txt}")
        else:
            abstract_parts.append(txt)
    abstract_full = "\n".join(abstract_parts)

    articles[pmid] = {
        'pmid': pmid,
        'title': title_text,
        'authors': authors,
        'first_author': authors[0] if authors else 'Unknown',
        'journal': j_text,
        'year': p_text,
        'abstract': abstract_full
    }

# Book articles (e.g. StatPearls)
for book in root.findall('.//PubmedBookArticle'):
    pmid = book.find('.//BookDocument/PMID').text
    title = book.find('.//BookDocument/ArticleTitle')
    title_text = title.text if title is not None and title.text else ''
    
    authors = []
    for author in book.findall('.//Author'):
        ln = author.find('LastName')
        init = author.find('Initials')
        if ln is not None and ln.text:
            authors.append(f"{ln.text} {init.text if init is not None and init.text else ''}".strip())

    book_title = book.find('.//Book/BookTitle')
    j_text = book_title.text if book_title is not None and book_title.text else 'StatPearls'

    pubdate = book.find('.//Book/PubDate/Year')
    p_text = pubdate.text if pubdate is not None and pubdate.text else '2023'

    abstract_nodes = book.findall('.//AbstractText')
    abstract_parts = []
    for ab in abstract_nodes:
        lbl = ab.attrib.get('Label', '')
        txt = ab.text or ''
        if lbl:
            abstract_parts.append(f"{lbl}: {txt}")
        else:
            abstract_parts.append(txt)
    abstract_full = "\n".join(abstract_parts)

    articles[pmid] = {
        'pmid': pmid,
        'title': title_text,
        'authors': authors,
        'first_author': authors[0] if authors else 'Unknown',
        'journal': j_text,
        'year': p_text,
        'abstract': abstract_full
    }

print(f"Total articles + book chapters fetched: {len(articles)} / {len(unique_pmids)}")
with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'w', encoding='utf-8') as f:
    json.dump(articles, f, indent=2)
