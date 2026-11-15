import sys
sys.path.append('scripts/candidate-authoring')
import build_step1_cycle10_part1 as p1
import build_step1_cycle10_part2 as p2
import build_step1_cycle10_part3 as p3
import build_step1_cycle10_part4 as p4
from cycle9_authoring_common import validate_item
from collections import Counter

batches = [
    ('Batch 37', p1.get_batch37()),
    ('Batch 38', p2.get_batch38()),
    ('Batch 39', p3.get_batch39()),
    ('Batch 40', p4.get_batch40())
]

total_errors = 0
for bname, items in batches:
    print(f"Checking {bname} ({len(items)} items)...")
    for it in items:
        errs = validate_item(it)
        if errs:
            print(f"  {it['code']}: {errs}")
            total_errors += len(errs)
    keys = [chr(65 + i % 5) for i in range(len(items))]
    print(f"  Key balance: {Counter(keys)}")
    diffs = Counter([it['provisionalDifficulty'] for it in items])
    print(f"  Difficulty: {diffs}")

print("Total validation errors:", total_errors)
