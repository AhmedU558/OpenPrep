import urllib.request
import urllib.parse
import json
import time
import os

def search_pubmed(query):
    term = urllib.parse.quote(query)
    url = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term={term}&retmode=json&retmax=3"
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenPrep/1.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
        id_list = data['esearchresult']['idlist']
        if not id_list:
            return None
        time.sleep(0.35)
        url2 = f"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id={','.join(id_list)}&retmode=json"
        req2 = urllib.request.Request(url2, headers={'User-Agent': 'OpenPrep/1.0'})
        with urllib.request.urlopen(req2) as resp2:
            data2 = json.loads(resp2.read().decode())
        results = []
        for uid in id_list:
            item = data2['result'].get(uid, {})
            title = item.get('title', '').replace('\u2011', '-').replace('\u2013', '-').replace('\u2014', '-')
            authors = item.get('authors', [])
            first_author = authors[0]['name'] if authors else 'Unknown'
            source = item.get('source', '')
            pubdate = item.get('pubdate', '')
            results.append({
                'pmid': uid,
                'author': first_author,
                'title': title,
                'source': source,
                'pubdate': pubdate
            })
        return results
    except Exception as e:
        print(f"Error querying {query}: {e}")
        return None

def fetch_and_save(queries, output_file):
    results = {}
    for code, q in queries:
        res = search_pubmed(q)
        if res:
            r = res[0]
            cit = f"{r['author']}. {r['title']} {r['source']}. {r['pubdate']}. PMID: {r['pmid']}."
            results[code] = {
                'pmid': r['pmid'],
                'author': r['author'],
                'title': r['title'],
                'source': r['source'],
                'pubdate': r['pubdate'],
                'citation': cit
            }
            print(f"Resolved {code} -> PMID {r['pmid']}")
        else:
            print(f"FAILED {code} -> {q}")
        time.sleep(0.35)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)
    print(f"Saved {len(results)} references to {output_file}")

if __name__ == '__main__':
    queries_b38 = [
        ("op-c-s2-0926", "ARDS low tidal volume mechanical ventilation mortality"),
        ("op-c-s2-0927", "massive pulmonary embolism systemic thrombolysis contraindications"),
        ("op-c-s2-0928", "status asthmaticus magnesium sulfate terbutaline mechanical ventilation"),
        ("op-c-s2-0929", "complicated parapneumonic effusion empyema chest tube drainage"),
        ("op-c-s2-0930", "septic shock norepinephrine vasopressin first-line vasopressor"),
        ("op-c-s2-0931", "severe community-acquired pneumonia CURB-65 beta-lactam macrolide"),
        ("op-c-s2-0932", "chronic obstructive pulmonary disease acute exacerbation noninvasive ventilation"),
        ("op-c-s2-0933", "idiopathic pulmonary fibrosis antifibrotic therapy pirfenidone nintedanib"),
        ("op-c-s2-0934", "ventilator-associated pneumonia endotracheal aspirate quantitative culture"),
        ("op-c-s2-0935", "tension pneumothorax needle decompression thoracostomy emergency"),
        ("op-c-s2-0936", "obesity hypoventilation syndrome polysomnography noninvasive positive airway pressure"),
        ("op-c-s2-0937", "pulmonary arterial hypertension prostacyclin pathway endothelin antagonist"),
        ("op-c-s2-0938", "aspiration pneumonitis vs aspiration pneumonia antibiotics chemical injury"),
        ("op-c-s2-0939", "hypoxemic respiratory failure prone positioning non-intubated ARDS"),
        ("op-c-s2-0940", "transfusion-related acute lung injury TRALI donor antibodies anti-HLA"),
        ("op-c-s2-0941", "carbon monoxide poisoning hyperbaric oxygen carboxyhemoglobin"),
        ("op-c-s2-0942", "pulmonary alveolar proteinosis whole lung lavage GM-CSF autoantibodies"),
        ("op-c-s2-0943", "neuromuscular respiratory failure vital capacity negative inspiratory force"),
        ("op-c-s2-0944", "anaphylactic shock intramuscular epinephrine dosing refractory glucagon"),
        ("op-c-s2-0945", "hemoptysis massive bronchial artery embolization rigid bronchoscopy"),
        ("op-c-s2-0946", "central venous catheter air embolism Trendelenburg position aspiration"),
        ("op-c-s2-0947", "heparin-induced thrombocytopenia 4T score argatroban fondaparinux"),
        ("op-c-s2-0948", "disseminated intravascular coagulation cryoprecipitate fibrinogen threshold"),
        ("op-c-s2-0949", "tumor lysis syndrome rasburicase allopurinol hydration hemodialysis"),
        ("op-c-s2-0950", "refractory hypoxemia ECMO venovenous indication Murray score")
    ]
    fetch_and_save(queries_b38, 'scripts/candidate-authoring/s2_b38_refs.json')

    queries_b39 = [
        ("op-c-s2-0951", "acute variceal bleeding octreotide endoscopic band ligation ceftriaxone"),
        ("op-c-s2-0952", "acute severe ulcerative colitis intravenous corticosteroids infliximab rescue"),
        ("op-c-s2-0953", "acute mesenteric ischemia CT angiography emergent laparotomy embolectomy"),
        ("op-c-s2-0954", "ischemic colitis colonoscopy watershed inferior mesenteric artery conservative"),
        ("op-c-s2-0955", "spontaneous bacterial peritonitis diagnostic paracentesis ceftriaxone albumin"),
        ("op-c-s2-0956", "hepatic encephalopathy lactulose rifaximin nonabsorbable disaccharide"),
        ("op-c-s2-0957", "hepatorenal syndrome terlipressin albumin vasoconstrictor liver transplant"),
        ("op-c-s2-0958", "acute pancreatitis early enteral nutrition aggressive fluid resuscitation"),
        ("op-c-s2-0959", "infected pancreatic necrosis step-up approach percutaneous drainage necrosectomy"),
        ("op-c-s2-0960", "acute cholangitis Tokyo guidelines emergent ERCP biliary decompression"),
        ("op-c-s2-0961", "Clostridioides difficile fulminant colitis oral vancomycin intravenous metronidazole"),
        ("op-c-s2-0962", "toxic megacolon decompression colectomy cytomegalovirus perforation"),
        ("op-c-s2-0963", "nonalcoholic steatohepatitis resmetirom GLP-1 receptor agonist liver fibrosis"),
        ("op-c-s2-0964", "autoimmune hepatitis azathioprine prednisone histological remission"),
        ("op-c-s2-0965", "Wilson disease trientine penicillamine zinc maintenance"),
        ("op-c-s2-0966", "hemochromatosis therapeutic phlebotomy ferritin target maintenance"),
        ("op-c-s2-0967", "gastric antral vascular ectasia watermelon stomach argon plasma coagulation"),
        ("op-c-s2-0968", "Dieulafoy lesion endoscopic hemoclip banding obscure gastrointestinal bleeding"),
        ("op-c-s2-0969", "Boerhaave syndrome esophageal perforation water-soluble contrast emergent surgery"),
        ("op-c-s2-0970", "Mallory-Weiss tear supportive care persistent bleeding endoscopic therapy"),
        ("op-c-s2-0971", "small bowel obstruction closed loop strangulation emergent laparotomy"),
        ("op-c-s2-0972", "acute colonic pseudo-obstruction Ogilvie syndrome neostigmine colonoscopic decompression"),
        ("op-c-s2-0973", "sigmoid volvulus endoscopic detorsion rectosigmoidoscopy elective resection"),
        ("op-c-s2-0974", "cecal volvulus emergent right hemicolectomy laparotomy"),
        ("op-c-s2-0975", "refeeding syndrome hypophosphatemia thiamine cardiac arrest prevention")
    ]
    fetch_and_save(queries_b39, 'scripts/candidate-authoring/s2_b39_refs.json')

    queries_b40 = [
        ("op-c-s2-0976", "bacterial meningitis dexamethasone timing ceftriaxone vancomycin"),
        ("op-c-s2-0977", "prosthetic valve endocarditis rifampin vancomycin gentamicin valve surgery"),
        ("op-c-s2-0978", "necrotizing fasciitis emergent surgical debridement clindamycin vancomycin"),
        ("op-c-s2-0979", "febrile neutropenia antipseudomonal beta-lactam cefepime piperacillin-tazobactam"),
        ("op-c-s2-0980", "prosthetic joint infection two-stage revision vs debridement DAIR"),
        ("op-c-s2-0981", "catheter-related bloodstream infection catheter removal lock therapy vancomycin"),
        ("op-c-s2-0982", "spontaneous bacterial peritonitis secondary peritonitis Runyon criteria surgical intervention"),
        ("op-c-s2-0983", "ventilator-associated tracheobronchitis vs pneumonia stewardship antibiotics"),
        ("op-c-s2-0984", "Lyme disease carditis high-degree AV block intravenous ceftriaxone pacing"),
        ("op-c-s2-0985", "Rocky Mountain spotted fever doxycycline empiric therapy thrombocytopenia"),
        ("op-c-s2-0986", "disseminated histoplasmosis liposomal amphotericin B itraconazole antigen urine"),
        ("op-c-s2-0987", "invasive aspergillosis voriconazole galactomannan halo sign CT"),
        ("op-c-s2-0988", "mucormycosis surgical debridement liposomal amphotericin B ketoacidosis"),
        ("op-c-s2-0989", "cryptococcal meningitis induction amphotericin flucytosine serial lumbar punctures"),
        ("op-c-s2-0990", "Pneumocystis jirovecii pneumonia corticosteroids indications PaO2 trimethoprim-sulfamethoxazole"),
        ("op-c-s2-0991", "tuberculosis pericarditis corticosteroids constrictive pericarditis prevention"),
        ("op-c-s2-0992", "syphilis neurosyphilis aqueous penicillin G desensitization pregnancy"),
        ("op-c-s2-0993", "varicella zoster virus disseminated acyclovir airborne precautions immunocompromised"),
        ("op-c-s2-0994", "Clostridioides difficile recurrent fidaxomicin fecal microbiota transplantation"),
        ("op-c-s2-0995", "multidrug-resistant Pseudomonas aeruginosa ceftolozane-tazobactam susceptibility"),
        ("op-c-s2-0996", "carbapenem-resistant Enterobacterales ceftazidime-avibactam meropenem-vaborbactam"),
        ("op-c-s2-0997", "Staphylococcus aureus bacteremia surveillance blood cultures echocardiography duration"),
        ("op-c-s2-0998", "human immunodeficiency virus post-exposure prophylaxis tenofovir emtricitabine raltegravir dolutegravir"),
        ("op-c-s2-0999", "rabies post-exposure prophylaxis rabies immunoglobulin vaccine immunocompetent"),
        ("op-c-s2-1000", "toxic shock syndrome clindamycin toxin suppression IVIG")
    ]
    fetch_and_save(queries_b40, 'scripts/candidate-authoring/s2_b40_refs.json')
