import urllib.request
import xml.etree.ElementTree as ET

url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=3872065,32644584,24365430&retmode=xml"
req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
content = urllib.request.urlopen(req).read()

root = ET.fromstring(content)
for article in root.findall('.//PubmedArticle'):
    pmid = article.find('.//PMID').text
    title = article.find('.//ArticleTitle').text
    abstract_texts = [elem.text for elem in article.findall('.//AbstractText') if elem.text]
    abstract = " ".join(abstract_texts)
    print(f"PMID {pmid}: {title}")
    print(f"  Abstract: {abstract[:300]}...\n")
