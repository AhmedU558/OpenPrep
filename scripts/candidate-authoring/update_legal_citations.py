import json

updates = {
    "op-c-s3-0469": "Pronovost PJ, et al. Creating high reliability in healthcare organizations. Health Serv Res. 2006;41(4 Pt 2):1599-1617. PMID: 16898981.",
    "op-c-s3-0477": "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016.",
    "op-c-s3-0480": "Appelbaum PS. Tarasoff and the clinician: problems in fulfilling the duty to protect. Am J Psychiatry. 1985;142(4):425-429. PMID: 3977114.",
    "op-c-s3-0484": "President's Commission for the Study of Ethical Problems. Deciding to Forego Life-Sustaining Treatment. U.S. GPO; 1983.",
    "op-c-s3-0486": "American Medical Association. Organ donation: Code of Medical Ethics Opinion 6.1.1. AMA; 2016.",
    "op-c-s3-0488": "Appelbaum PS. Almost a Revolution: Mental Health Law and the Limits of Change. Oxford University Press; 1994. NLM ID: 9425883.",
    "op-c-s3-0489": "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016.",
    "op-c-s3-0490": "American Academy of Pediatrics. Religious objections to medical care. Pediatrics. 2013;131(1):e378-e380. PMID: 23277322.",
    "op-c-s3-0495": "Zibulewsky J. The Emergency Medical Treatment and Active Labor Act (EMTALA). Proc (Bayl Univ Med Cent). 2001;14(4):339-346. PMID: 16369643.",
    "op-c-s3-0496": "American Medical Association. Informed consent: Code of Medical Ethics Opinion 2.1.1. AMA; 2016.",
    "op-c-s3-0498": "American Medical Association. Advance directives: Code of Medical Ethics Opinion 5.1. AMA; 2016.",
    "op-c-s3-0499": "Beauchamp TL, Childress JF. Principles of Biomedical Ethics. 8th ed. Oxford University Press; 2019. NLM ID: 101741528.",
    "op-c-s3-0500": "Quill TE, Back AL, Block SD. Responding to patients requesting medical aid in dying. JAMA. 2016;315(3):245-246. PMID: 26649856."
}

for fp in ['scripts/candidate-authoring/step3-batch19.ts', 'scripts/candidate-authoring/step3-batch20.ts']:
    content = open(fp, 'r', encoding='utf-8').read()
    prefix = content.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
    items = json.loads(content.split('CandidateSpec[] = ')[1].rstrip(';\n'))
    modified = False
    for it in items:
        if it['code'] in updates:
            it['citation'] = updates[it['code']]
            modified = True
    if modified:
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(prefix + json.dumps(items, indent=2) + ";\n")
        print(f"Updated citations in {fp}")
