import json

# 1. Fix op-c-s3-0459 in step3-batch19.ts
fp19 = 'scripts/candidate-authoring/step3-batch19.ts'
content19 = open(fp19, 'r', encoding='utf-8').read()
prefix19 = content19.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
items19 = json.loads(content19.split('CandidateSpec[] = ')[1].rstrip(';\n'))

for it in items19:
    if it['code'] == 'op-c-s3-0459':
        it['choices'][0][0] = "Comprehensive Medication Reconciliation: systematically compiling a verified Best Possible Medication History across outpatient records and comparing it against inpatient orders to resolve omissions, duplications, and dosing discrepancies"
        it['choices'][1][0] = "Routine pharmacogenomic cytochrome P450 genotyping performed upon hospital admission for all medical inpatients"

with open(fp19, 'w', encoding='utf-8') as f:
    f.write(prefix19 + json.dumps(items19, indent=2) + ";\n")
print(f"Updated op-c-s3-0459 in {fp19}")

# 2. Fix topics in step3-batch20.ts
fp20 = 'scripts/candidate-authoring/step3-batch20.ts'
content20 = open(fp20, 'r', encoding='utf-8').read()
prefix20 = content20.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
items20 = json.loads(content20.split('CandidateSpec[] = ')[1].rstrip(';\n'))

for it in items20:
    if it['code'] == 'op-c-s3-0478':
        it['topic'] = "Surrogate Decision-Making: Substituted Judgment vs Best Interests"
    elif it['code'] == 'op-c-s3-0484':
        it['topic'] = "Withholding vs Withdrawing Life-Sustaining Treatment Equivalence"
    elif it['code'] == 'op-c-s3-0489':
        it['topic'] = "Jehovah's Witness Competent Adult Blood Refusal and Conservation"

with open(fp20, 'w', encoding='utf-8') as f:
    f.write(prefix20 + json.dumps(items20, indent=2) + ";\n")
print(f"Updated topics in {fp20}")
