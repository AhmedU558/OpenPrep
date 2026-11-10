import json

short_citations = {
    "op-c-s2-0479": "Johnson S, et al. IDSA/SHEA 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults. Clin Infect Dis. 2021;73(5):e1029-e1044. PMID: 34164648.",
    "op-c-s2-0482": "Lantos PM, et al. IDSA, AAN, and ACR: 2020 Guidelines for the Prevention, Diagnosis and Treatment of Lyme Disease. Clin Infect Dis. 2021;72(1):e1-e48. PMID: 33251528.",
    "op-c-s2-0486": "Jabs DA, et al. CMV resistance to ganciclovir and outcomes in patients with CMV retinitis in HAART era. Am J Ophthalmol. 2010;149(5):713-722. PMID: 20381792.",
    "op-c-s3-0415": "Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024;149(1):e1-e156. PMID: 38031654.",
    "op-c-s3-0421": "Kobayashi M, et al. Use of 15-Valent and 20-Valent Pneumococcal Conjugate Vaccine Among U.S. Adults: ACIP Recommendations, 2022. MMWR Morb Mortal Wkly Rep. 2022;71(4):109-117. PMID: 35085226.",
    "op-c-s3-0438": "McDonald LC, et al. Clinical Practice Guidelines for Clostridium difficile Infection: 2017 Update by IDSA and SHEA. Clin Infect Dis. 2018;66(7):e1-e48. PMID: 29462280.",
    "op-c-s3-0441": "Bellomo R, et al. Acute renal failure - definition, outcome measures, animal models, fluid therapy: the ADQI Group. Crit Care. 2004;8(4):R204-R212. PMID: 15312219.",
    "op-c-s3-0473": "Garcia RA, et al. Multidisciplinary review of best practices for blood cultures to reduce contamination. Am J Infect Control. 2015;43(11):1222-1237. PMID: 26365518."
}

for s in ['step2', 'step3']:
    for b in range(17, 21):
        fp = f'scripts/candidate-authoring/{s}-batch{b}.ts'
        content = open(fp, 'r', encoding='utf-8').read()
        prefix = content.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
        items = json.loads(content.split('CandidateSpec[] = ')[1].rstrip(';\n'))
        modified = False
        for it in items:
            if it['code'] in short_citations:
                it['citation'] = short_citations[it['code']]
                modified = True
        if modified:
            with open(fp, 'w', encoding='utf-8') as f:
                f.write(prefix + json.dumps(items, indent=2) + ";\n")
            print(f"Updated citations in {fp}")
