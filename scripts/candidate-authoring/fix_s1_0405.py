import json

fp = 'scripts/candidate-authoring/step1-batch17.ts'
content = open(fp, 'r', encoding='utf-8').read()
prefix = content.split('CandidateSpec[] = ')[0] + 'CandidateSpec[] = '
items = json.loads(content.split('CandidateSpec[] = ')[1].rstrip(';\n'))

for it in items:
    if it['code'] == 'op-c-s1-0405':
        it['choices'][0][0] = "Procaspase-9 zymogen"
        it['choices'][1][0] = "Procaspase-8 zymogen"
        it['choices'][2][0] = "Procaspase-1 zymogen"
        it['choices'][3][0] = "Procaspase-3 zymogen"
        it['choices'][4][0] = "Granzyme B protease"

with open(fp, 'w', encoding='utf-8') as f:
    f.write(prefix + json.dumps(items, indent=2) + ";\n")
print("Updated op-c-s1-0405 in step1-batch17.ts")
