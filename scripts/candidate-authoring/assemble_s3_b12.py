# -*- coding: utf-8 -*-
import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

from s3_b12_part1 import items_0276_to_0287
from s3_b12_part2 import items_0288_to_0300

all_items = items_0276_to_0287 + items_0288_to_0300
print(f"Total items assembled for Step 3 Batch 12: {len(all_items)}")
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

# Verify keys and answer rotation
expected_keys = ["A", "B", "C", "D", "E"] * 5
actual_keys = [["A", "B", "C", "D", "E"][item["correctOptionIndex"]] for item in all_items]
assert actual_keys == expected_keys, f"Answer keys mismatch: {actual_keys} vs {expected_keys}"

target_path = os.path.join(os.path.dirname(__file__), "step3-batch12.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step3Batch12: CandidateSpec[] = [\n")
    for i, item in enumerate(all_items):
        f.write("  " + json.dumps(item, indent=2).replace("\n", "\n  "))
        if i < len(all_items) - 1:
            f.write(",\n")
        else:
            f.write("\n")
    f.write("];\n")

print(f"Successfully wrote {target_path} with 25 items!")
