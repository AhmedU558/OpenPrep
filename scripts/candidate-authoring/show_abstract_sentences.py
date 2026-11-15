import json

with open('scripts/candidate-authoring/abstract_sentences.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for code, info in data.items():
    print(f"=== {code} (PMID {info['pmid']}) ===")
    print(f"Topic: {info['topic']}")
    print(f"Title: {info['title']}")
    for i, s in enumerate(info['sentences'][:5]):
        print(f"  [{i}]: {s[:100]}...")
    print()
