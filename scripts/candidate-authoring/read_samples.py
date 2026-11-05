import json

# Check op-c-s1-0428
s1_b18 = json.load(open('content/candidates/step1/batch-18.json', 'r', encoding='utf-8'))
for q in s1_b18:
    if q['code'] == 'op-c-s1-0428':
        print('=== op-c-s1-0428 ===')
        print('Topic:', q['topic'])
        print('Stem:', q['stem'])
        print('Options:')
        for opt in q['options']:
            corr = 'CORRECT' if opt.get('correct') else '       '
            print(f"  [{corr}] {opt['text']}")
        print('\nExplanation:', q.get('explanation', '')[:300])

# Check op-c-s2-0402
s2_b17 = json.load(open('content/candidates/step2ck/batch-17.json', 'r', encoding='utf-8'))
for q in s2_b17:
    if q['code'] == 'op-c-s2-0402':
        print('\n=== op-c-s2-0402 ===')
        print('Topic:', q['topic'])
        print('Stem:', q['stem'])
        print('Options:')
        for opt in q['options']:
            corr = 'CORRECT' if opt.get('correct') else '       '
            print(f"  [{corr}] {opt['text']}")
        print('\nExplanation:', q.get('explanation', '')[:300])
