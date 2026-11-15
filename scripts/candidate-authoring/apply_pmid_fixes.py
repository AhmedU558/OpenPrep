import json
import re

def main():
    resolutions_file = 'content/candidates/cycle9-pmid-resolutions.json'
    data = json.load(open(resolutions_file, 'r', encoding='utf-8'))
    resolved = data.get('resolved', {})

    # Add the manual ones
    manual = {
        'op-c-s1-0827': {
            'old_pmid': '11137025',
            'new_pmid': '16365091',
            'new_title': 'Lessons from genetic disorders of branched-chain amino acid metabolism.',
            'new_first_author': 'Chuang DT',
            'new_source': 'J Nutr (2006 Jan)',
            'full_citation': 'Chuang DT, Chuang JL, Wynn RM. Lessons from genetic disorders of branched-chain amino acid metabolism. J Nutr. 2006;136(1 Suppl):243S-249S. PMID: 16365091.'
        },
        'op-c-s1-0837': {
            'old_pmid': '18779803',
            'new_pmid': '18833216',
            'new_title': 'McArdle disease: what do neurologists need to know?',
            'new_first_author': 'Lucia A',
            'new_source': 'Nat Clin Pract Neurol (2008 Oct)',
            'full_citation': 'Lucia A, Nogales-Gadea G, Perez M, et al. McArdle disease: what do neurologists need to know? Nat Clin Pract Neurol. 2008;4(10):568-577. PMID: 18833216.'
        },
        'op-c-s3-0801': {
            'old_pmid': '36330818',
            'new_pmid': '36335914',
            'new_title': 'Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Multicenter Randomized Controlled Trial.',
            'new_first_author': 'Pokorney SD',
            'new_source': 'Circulation (2022 Dec 6)',
            'full_citation': 'Pokorney SD, Chertow GM, Al-Khalidi HR, et al. Apixaban for Patients With Atrial Fibrillation on Hemodialysis: A Multicenter Randomized Controlled Trial. Circulation. 2022;146(23):1735-1745. PMID: 36335914.'
        },
        'op-c-s3-0809': {
            'old_pmid': '38241040',
            'new_pmid': '38241060',
            'new_title': 'Severe Hypocalcemia With Denosumab Among Older Female Dialysis-Dependent Patients.',
            'new_first_author': 'Bird ST',
            'new_source': 'JAMA (2024 Feb 27)',
            'full_citation': 'Bird ST, Gelperin K, Yermilov I, et al. Severe Hypocalcemia With Denosumab Among Older Female Dialysis-Dependent Patients. JAMA. 2024;331(9):749-757. PMID: 38241060.'
        },
        'op-c-s3-0841': {
            'old_pmid': '24789599',
            'new_pmid': '30126891',
            'new_title': 'Effects of a multifaceted medication reconciliation quality improvement intervention on patient safety: final results of the MARQUIS study.',
            'new_first_author': 'Kripalani S',
            'new_source': 'BMJ Qual Saf (2018 Dec)',
            'full_citation': 'Kripalani S, Roumie CL, Dalal AK, et al. Effects of a multifaceted medication reconciliation quality improvement intervention on patient safety: final results of the MARQUIS study. BMJ Qual Saf. 2018;27(12):954-964. PMID: 30126891.'
        },
        'op-c-s3-0858': {
            'old_pmid': '15265771',
            'new_pmid': '15271832',
            'new_title': 'Ruling a diagnosis in or out with "SpPIn" and "SnNOut": a note of caution.',
            'new_first_author': 'Pewsner D',
            'new_source': 'BMJ (2004 Jul 24)',
            'full_citation': 'Pewsner D, Battaglia M, Minder C, et al. Ruling a diagnosis in or out with "SpPIn" and "SnNOut": a note of caution. BMJ. 2004;329(7459):209-213. PMID: 15271832.'
        },
        'op-c-s3-0864': {
            'old_pmid': '24658514',
            'new_pmid': '24585735',
            'new_title': "Commentary: A structural approach to Berkson's fallacy and a guide to a history of opinions about it.",
            'new_first_author': 'Snoep JD',
            'new_source': 'Int J Epidemiol (2014 Apr)',
            'full_citation': "Snoep JD, Morabia A, Hernandez-Diaz S, et al. Commentary: A structural approach to Berkson's fallacy and a guide to a history of opinions about it. Int J Epidemiol. 2014;43(2):515-521. PMID: 24585735."
        },
        'op-c-s3-0877': {
            'old_pmid': '21173420',
            'new_pmid': '9537935',
            'new_title': 'The accuracy of substituted judgments in patients with terminal diagnoses.',
            'new_first_author': 'Sulmasy DP',
            'new_source': 'Ann Intern Med (1998 Apr 15)',
            'full_citation': 'Sulmasy DP, Terry PB, Weisman CS, et al. The accuracy of substituted judgments in patients with terminal diagnoses. Ann Intern Med. 1998;128(8):621-629. PMID: 9537935.'
        }
    }

    resolved.update(manual)
    print(f"Total resolved items to apply: {len(resolved)}")

    # Update files: step1-batch33.ts to step3-batch36.ts
    exam_files = [
        f'scripts/candidate-authoring/{s}-batch{b}.ts'
        for s in ['step1', 'step2', 'step3']
        for b in range(33, 37)
    ]

    applied_count = 0
    for fpath in exam_files:
        content = open(fpath, 'r', encoding='utf-8').read()
        changed = False

        for code, fix in resolved.items():
            if f'"{code}"' in content or f"'{code}'" in content:
                old_pmid = fix['old_pmid']
                new_pmid = fix['new_pmid']
                
                # If full citation is provided, use it
                if 'full_citation' in fix:
                    new_cit = fix['full_citation']
                    # Pattern for citation: "citation": "..."
                    pattern = rf'("code":\s*"{code}"[\s\S]*?"citation":\s*")[^"]*(")'
                    match = re.search(pattern, content)
                    if match:
                        content = re.sub(pattern, rf'\g<1>{new_cit}\g<2>', content, count=1)
                        changed = True
                        applied_count += 1
                        print(f"Applied full citation fix for {code}: PMID {new_pmid}")
                else:
                    # Construct clean citation from retrieved metadata
                    title = fix['new_title'].rstrip('.')
                    first_author = fix['new_first_author']
                    source = fix['new_source']
                    new_cit = f"{first_author} et al. {title}. {source}. PMID: {new_pmid}."
                    pattern = rf'("code":\s*"{code}"[\s\S]*?"citation":\s*")[^"]*(")'
                    match = re.search(pattern, content)
                    if match:
                        content = re.sub(pattern, rf'\g<1>{new_cit}\g<2>', content, count=1)
                        changed = True
                        applied_count += 1
                        print(f"Applied retrieved citation fix for {code}: PMID {new_pmid}")

        if changed:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Saved updates to {fpath}")

    print(f"\nTotal fixes applied across files: {applied_count}")

if __name__ == '__main__':
    main()
