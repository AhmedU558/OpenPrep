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
    queries_b37 = [
        ("op-c-s3-0901", "Beers criteria anticholinergic fall risk older adults"),
        ("op-c-s3-0902", "atrial fibrillation anticoagulation frail elderly fall risk DOAC"),
        ("op-c-s3-0903", "resistant hypertension spironolactone fourth-line PATHWAY-2"),
        ("op-c-s3-0904", "subclinical hypothyroidism TSH threshold levothyroxine indications"),
        ("op-c-s3-0905", "osteoporosis bisphosphonate holiday atypical femur fracture"),
        ("op-c-s3-0906", "diabetic kidney disease SGLT2 inhibitor eGFR decline progression"),
        ("op-c-s3-0907", "diabetes mellitus elderly HbA1c target hypoglycemia avoidance"),
        ("op-c-s3-0908", "chronic coronary disease medical therapy revascularization ISCHEMIA"),
        ("op-c-s3-0909", "asymptomatic carotid stenosis intensive medical therapy endarterectomy"),
        ("op-c-s3-0910", "peripheral artery disease supervised exercise therapy cilostazol"),
        ("op-c-s3-0911", "gout allopurinol treat-to-target serum urate flare prophylaxis"),
        ("op-c-s3-0912", "polymyalgia rheumatica glucocorticoid taper methotrexate relapse"),
        ("op-c-s3-0913", "giant cell arteritis temporal artery biopsy tocilizumab vision"),
        ("op-c-s3-0914", "benign prostatic hyperplasia 5-alpha reductase inhibitor finasteride"),
        ("op-c-s3-0915", "overactive bladder mirabegron beta-3 agonist anticholinergic"),
        ("op-c-s3-0916", "chronic insomnia cognitive behavioral therapy first-line CBT-I"),
        ("op-c-s3-0917", "treatment-resistant depression aripiprazole augmentation SSRI"),
        ("op-c-s3-0918", "alcohol use disorder naltrexone acamprosate liver disease"),
        ("op-c-s3-0919", "opioid use disorder buprenorphine precipitated withdrawal timing"),
        ("op-c-s3-0920", "tobacco use disorder varenicline nicotine replacement combination"),
        ("op-c-s3-0921", "chronic low back pain multimodal nonpharmacological therapy"),
        ("op-c-s3-0922", "pneumococcal conjugate vaccine PCV20 older adults recommendation"),
        ("op-c-s3-0923", "colorectal cancer screening cessation age 75 life expectancy"),
        ("op-c-s3-0924", "lung cancer screening low-dose CT smoking eligibility pack-years"),
        ("op-c-s3-0925", "abdominal aortic aneurysm ultrasound screening men smoking history")
    ]
    fetch_and_save(queries_b37, 'scripts/candidate-authoring/s3_b37_refs.json')

    queries_b38 = [
        ("op-c-s3-0926", "inpatient glycemic control basal bolus insulin sliding scale alone"),
        ("op-c-s3-0927", "heparin-induced thrombocytopenia 4T score non-heparin anticoagulation"),
        ("op-c-s3-0928", "hospital delirium multicomponent nonpharmacological bundle prevention"),
        ("op-c-s3-0929", "severe alcohol withdrawal syndrome phenobarbital protocol benzodiazepine"),
        ("op-c-s3-0930", "cardiorenal syndrome heart failure worsening renal function diuresis"),
        ("op-c-s3-0931", "contrast-induced acute kidney injury isotonic sodium chloride hydration"),
        ("op-c-s3-0932", "syncope risk stratification Canadian Syncope Risk Score hospital admission"),
        ("op-c-s3-0933", "venous thromboembolism prophylaxis hospitalized medical patients low-molecular-weight heparin"),
        ("op-c-s3-0934", "peptic ulcer bleeding post-endoscopy high-dose oral vs intravenous PPI"),
        ("op-c-s3-0935", "acute pancreatitis fluid resuscitation lactated Ringer solution"),
        ("op-c-s3-0936", "diabetic ketoacidosis subcutaneous insulin transition timing closure anion gap"),
        ("op-c-s3-0937", "hyperosmolar hyperglycemic state rehydration potassium rate serum osmolality"),
        ("op-c-s3-0938", "acute ischemic stroke blood pressure threshold thrombolysis nicardipine"),
        ("op-c-s3-0939", "acute intracerebral hemorrhage blood pressure lowering target ATACH-2"),
        ("op-c-s3-0940", "severe hyperkalemia emergency calcium gluconate insulin dextrose potassium binder"),
        ("op-c-s3-0941", "syndrome inappropriate antidiuretic hormone secretion fluid restriction oral urea"),
        ("op-c-s3-0942", "severe acute hyponatremia hypertonic 3% saline correction limit demyelination"),
        ("op-c-s3-0943", "hypernatremia water deficit calculation correction rate cerebral edema"),
        ("op-c-s3-0944", "acute hypoxemic respiratory failure high-flow nasal oxygen vs NIV"),
        ("op-c-s3-0945", "chronic obstructive pulmonary disease persistent hypercapnic respiratory failure noninvasive ventilation"),
        ("op-c-s3-0946", "neutropenic enterocolitis typhlitis conservative medical management antibiotics"),
        ("op-c-s3-0947", "Clostridioides difficile primary episode fidaxomicin clinical cure recurrence"),
        ("op-c-s3-0948", "central line-associated bloodstream infection catheter removal indications"),
        ("op-c-s3-0949", "postoperative fever atelectasis vs early surgical site infection evaluation"),
        ("op-c-s3-0950", "hospital discharge medication reconciliation transitional care 30-day readmission")
    ]
    fetch_and_save(queries_b38, 'scripts/candidate-authoring/s3_b38_refs.json')

    queries_b39 = [
        ("op-c-s3-0951", "proportional hazards model hazard ratio censoring survival analysis"),
        ("op-c-s3-0952", "non-inferiority clinical trials margin selection intention-to-treat per-protocol"),
        ("op-c-s3-0953", "number needed to treat baseline risk absolute risk reduction"),
        ("op-c-s3-0954", "number needed to harm statistical significance confidence interval"),
        ("op-c-s3-0955", "sequential diagnostic testing sensitivity specificity disease prevalence"),
        ("op-c-s3-0956", "likelihood ratios post-test probability Fagan nomogram"),
        ("op-c-s3-0957", "receiver operating characteristic area under curve diagnostic accuracy"),
        ("op-c-s3-0958", "lead-time bias cancer screening survival artificial inflation"),
        ("op-c-s3-0959", "length-time bias cancer screening overdiagnosis indolent disease"),
        ("op-c-s3-0960", "confounding by indication propensity score matching observational studies"),
        ("op-c-s3-0961", "selection bias healthy worker effect loss to follow-up cohort"),
        ("op-c-s3-0962", "recall bias case-control studies differential misclassification"),
        ("op-c-s3-0963", "Berkson bias hospital-based case-control study odds ratio distortion"),
        ("op-c-s3-0964", "effect modification interaction vs confounding stratified Mantel-Haenszel"),
        ("op-c-s3-0965", "funnel plot asymmetry publication bias Egger test meta-analysis"),
        ("op-c-s3-0966", "heterogeneity I-squared statistic random-effects model meta-analysis"),
        ("op-c-s3-0967", "subgroup analysis multiplicity type I error inflated false discovery"),
        ("op-c-s3-0968", "interim analysis alpha spending function early stopping rules"),
        ("op-c-s3-0969", "composite endpoints individual components interpretation clinical trials"),
        ("op-c-s3-0970", "surrogate endpoints patient-centered outcomes validation trials"),
        ("op-c-s3-0971", "statistical power sample size type I alpha type II beta error"),
        ("op-c-s3-0972", "intention-to-treat analysis protocol nonadherence crossover trials"),
        ("op-c-s3-0973", "crossover trial design carryover effect washout period"),
        ("op-c-s3-0974", "factorial randomized clinical trial 2x2 interaction testing"),
        ("op-c-s3-0975", "stepped-wedge cluster randomized trial design contamination")
    ]
    fetch_and_save(queries_b39, 'scripts/candidate-authoring/s3_b39_refs.json')

    queries_b40 = [
        ("op-c-s3-0976", "root cause analysis sentinel event latent failure system defense"),
        ("op-c-s3-0977", "failure mode and effects analysis healthcare proactive risk assessment"),
        ("op-c-s3-0978", "disclosure of medical errors transparent communication apology law"),
        ("op-c-s3-0979", "medical decision-making capacity assessment clinical standards"),
        ("op-c-s3-0980", "surrogate decision making substituted judgment best interests ethical standard"),
        ("op-c-s3-0981", "advance directives living will durable power of attorney healthcare proxy"),
        ("op-c-s3-0982", "informed refusal medical treatment competent adult patient autonomy"),
        ("op-c-s3-0983", "discharge against medical advice capacity assessment harm reduction"),
        ("op-c-s3-0984", "physician impairment substance use disorder duty to report physician health program"),
        ("op-c-s3-0985", "just culture patient safety disruptive behavior psychological safety"),
        ("op-c-s3-0986", "involuntary psychiatric commitment dangerousness self others criteria"),
        ("op-c-s3-0987", "breach of confidentiality duty to protect Tarasoff third party risk"),
        ("op-c-s3-0988", "elder abuse neglect mandatory reporting healthcare providers"),
        ("op-c-s3-0989", "child physical abuse suspected non-accidental trauma reporting requirements"),
        ("op-c-s3-0990", "adolescent confidentiality minor consent sexually transmitted infection contraception"),
        ("op-c-s3-0991", "determination of brain death neurological criteria organ donation authorization"),
        ("op-c-s3-0992", "medical futility nonbeneficial interventions dispute resolution policy"),
        ("op-c-s3-0993", "conflict of interest pharmaceutical industry interactions physician prescribing"),
        ("op-c-s3-0994", "crisis standards of care ventilator triage allocation pandemic ethics"),
        ("op-c-s3-0995", "I-PASS standardized patient handoff communication medical errors"),
        ("op-c-s3-0996", "medication reconciliation hospital admission discharge error prevention"),
        ("op-c-s3-0997", "diagnostic error cognitive bias anchoring heuristic premature closure"),
        ("op-c-s3-0998", "World Health Organization surgical safety checklist surgical complications mortality"),
        ("op-c-s3-0999", "inpatient fall prevention multicomponent multifactorial interventions hospital"),
        ("op-c-s3-1000", "hospital-acquired pressure injury prevention staging repositioning support surface")
    ]
    fetch_and_save(queries_b40, 'scripts/candidate-authoring/s3_b40_refs.json')
