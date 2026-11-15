import json
from collections import Counter

with open('content/candidates/manifest.json', 'r', encoding='utf-8') as f:
    manifest = json.load(f)

struct_only = [m for m in manifest if m.get('status') == 'STRUCTURALLY_VALID']
print(f"Total STRUCTURALLY_VALID candidates to audit: {len(struct_only)}")

# 1. Check duplicate objectives/topics
topics = [m['topic'] for m in struct_only]
topic_counts = Counter(topics)
dup_topics = {t: c for t, c in topic_counts.items() if c > 1}
print(f"Duplicate topics within 736 items: {len(dup_topics)}")
if dup_topics:
    for t, c in list(dup_topics.items())[:5]:
        print(f"  '{t}': {c} occurrences")

# 2. Check metadata completeness
missing_shortest = [m['code'] for m in struct_only if not m.get('shortestValidSolution')]
missing_strongest = [m['code'] for m in struct_only if not m.get('strongestDistractor')]
missing_exclusion = [m['code'] for m in struct_only if not m.get('distractorExclusion')]
print(f"Missing shortestValidSolution: {len(missing_shortest)}")
print(f"Missing strongestDistractor: {len(missing_strongest)}")
print(f"Missing distractorExclusion: {len(missing_exclusion)}")

# 3. Audit batch files on disk for these items
short_stems = []
short_explanations = []
bad_ratios = []

for m in struct_only:
    code = m['code']
    bf = m['batchFile']
    # Load from disk
    try:
        with open(bf, 'r', encoding='utf-8') as f:
            b_items = json.load(f)
        it = next((q for q in b_items if q['code'] == code), None)
        if it:
            if len(it.get('stem', '')) < 150:
                short_stems.append((code, len(it['stem'])))
            opt_lens = [len(o['text']) for o in it.get('options', [])]
            if opt_lens:
                ratio = min(opt_lens) / max(opt_lens)
                if ratio < 0.20:
                    bad_ratios.append((code, ratio))
            for o in it.get('options', []):
                if len(o.get('explanation', '')) < 30:
                    short_explanations.append((code, len(o.get('explanation', ''))))
    except Exception as e:
        print(f"Error reading {bf}: {e}")

print(f"Stems < 150 chars: {len(short_stems)}")
print(f"Distractor ratio < 0.20: {len(bad_ratios)}")
print(f"Explanations < 30 chars: {len(short_explanations)}")

# 4. Check difficulty distribution of 736 items
diffs = Counter([m.get('difficulty') for m in struct_only])
print(f"Difficulty distribution of 736 items: {dict(diffs)}")
