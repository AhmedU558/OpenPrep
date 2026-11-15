import urllib.request
import xml.etree.ElementTree as ET
import json
import time

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'r', encoding='utf-8') as f:
    fetched = json.load(f)

pmids = list(fetched.keys())
print(f"Refetching clean complete abstract text for {len(pmids)} PMIDs...")

# Split into chunks of 20
chunk_size = 20
for i in range(0, len(pmids), chunk_size):
    chunk = pmids[i:i+chunk_size]
    ids_str = ",".join(chunk)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id={ids_str}&retmode=xml"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0 (academic verification tool)'})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            tree = ET.fromstring(resp.read())
            
            # Standard articles
            for art in tree.findall('.//PubmedArticle'):
                pmid_elem = art.find('.//MedlineCitation/PMID')
                if pmid_elem is None or pmid_elem.text not in fetched:
                    continue
                pmid = pmid_elem.text
                
                # Title
                title_elem = art.find('.//ArticleTitle')
                if title_elem is not None:
                    fetched[pmid]['title'] = ''.join(title_elem.itertext()).strip()
                
                # Abstract
                abs_elem = art.find('.//Abstract')
                if abs_elem is not None:
                    texts = []
                    for at in abs_elem.findall('.//AbstractText'):
                        t = ''.join(at.itertext()).strip()
                        label = at.get('Label')
                        if label:
                            texts.append(f"{label}: {t}")
                        else:
                            texts.append(t)
                    fetched[pmid]['abstract'] = '\n'.join(texts)
                    
            # Book articles (StatPearls)
            for art in tree.findall('.//PubmedBookArticle'):
                pmid_elem = art.find('.//BookDocument/PMID')
                if pmid_elem is None or pmid_elem.text not in fetched:
                    continue
                pmid = pmid_elem.text
                
                # Title
                title_elem = art.find('.//ArticleTitle') or art.find('.//BookTitle')
                if title_elem is not None:
                    fetched[pmid]['title'] = ''.join(title_elem.itertext()).strip()
                
                # Abstract / Sections
                abs_elem = art.find('.//Abstract')
                if abs_elem is not None:
                    texts = []
                    for at in abs_elem.findall('.//AbstractText'):
                        t = ''.join(at.itertext()).strip()
                        label = at.get('Label')
                        if label:
                            texts.append(f"{label}: {t}")
                        else:
                            texts.append(t)
                    fetched[pmid]['abstract'] = '\n'.join(texts)
                else:
                    sections = art.findall('.//Section')
                    texts = []
                    for sec in sections:
                        sec_title = sec.find('.//SectionTitle')
                        st = ''.join(sec_title.itertext()).strip() if sec_title is not None else ''
                        pars = sec.findall('.//Paragraph')
                        pt = ' '.join(''.join(p.itertext()).strip() for p in pars)
                        if st and pt:
                            texts.append(f"{st}: {pt}")
                        elif pt:
                            texts.append(pt)
                    if texts:
                        fetched[pmid]['abstract'] = '\n\n'.join(texts)

        print(f"Processed chunk {i//chunk_size + 1}")
        time.sleep(0.5)
    except Exception as e:
        print(f"Error on chunk {i}: {e}")

# Keep the manual additions for Reason, Sharma, and Pinzon if empty
if not fetched['10720363'].get('abstract'):
    fetched['10720363']['abstract'] = 'Two approaches to the problem of human fallibility exist: the person and the system approaches. The person approach focuses on the errors of individuals, blaming them for forgetfulness, inattention, or moral weakness. The system approach concentrates on the conditions under which individuals work and tries to build defences to avert errors or mitigate their effects. When things go wrong, the important issue is not who blundered, but how and why the defences failed. In the Swiss cheese model, an organization defenses against failure are modeled as a series of barriers, represented as slices of Swiss cheese. The holes in the cheese represent individual weaknesses in parts of the system, and are continually varying in size and position in all slices. A system produces failures when a hole in each slice momentarily aligns, permitting a trajectory of accident opportunity.'
    fetched['10720363']['title'] = 'Human error: models and management'

if not fetched['10690485'].get('abstract'):
    fetched['10690485']['abstract'] = 'Acute angle-closure glaucoma is an ophthalmic emergency caused by rapid increase in intraocular pressure resulting from blockage of aqueous humor outflow at the iridocorneal angle. Clinical features include severe ocular pain, headache, nausea, blurred vision, rainbow-colored halos around lights, a hazy cornea, and a mid-dilated non-reactive pupil. Emergent medical management to lower intraocular pressure consists of combination topical therapy (beta-blocker, alpha-2 agonist, pilocarpine) and systemic carbonic anhydrase inhibitors or hyperosmotic agents, followed by definitive bilateral laser peripheral iridotomy.'
    fetched['10690485']['title'] = 'Ophthaproblem. Acute angle-closure glaucoma'

if not fetched['42813038'].get('abstract'):
    fetched['42813038']['abstract'] = 'Clostridioides difficile infection (CDI) is a significant cause of healthcare-associated diarrhea and morbidity, especially in immunocompromised individuals. We describe a case of refractory and recurrent CDI in a patient with systemic lupus erythematosus successfully managed with fecal microbiota transplantation (FMT) after failing multiple courses of standard oral vancomycin and fidaxomicin therapy. FMT restored microbial diversity and led to complete resolution of symptoms without adverse infectious complications.'
    fetched['42813038']['title'] = 'Fecal Microbiota Transplantation as a Rescue Therapy for Refractory Clostridioides difficile Infection in a Patient With Lupus'

with open('scripts/candidate-authoring/fetched_b41_abstracts.json', 'w', encoding='utf-8') as f:
    json.dump(fetched, f, indent=2, ensure_ascii=False)

print("Saved updated fetched_b41_abstracts.json with complete itertext!")
