# -*- coding: utf-8 -*-
import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

from s3_b11_part1 import items_0251_to_0262
from s3_b11_part2 import items_0263_to_0275

all_items = items_0251_to_0262 + items_0263_to_0275
print(f"Total items assembled for Step 3 Batch 11: {len(all_items)}")
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

# Verify keys and answer rotation
expected_keys = ["A", "B", "C", "D", "E"] * 5
actual_keys = [["A", "B", "C", "D", "E"][item["correctOptionIndex"]] for item in all_items]
assert actual_keys == expected_keys, f"Answer keys mismatch: {actual_keys} vs {expected_keys}"

target_path = os.path.join(os.path.dirname(__file__), "step3-batch11.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step3Batch11: CandidateSpec[] = [\n")
    for i, item in enumerate(all_items):
        f.write("  " + json.dumps(item, indent=2).replace("\n", "\n  "))
        if i < len(all_items) - 1:
            f.write(",\n")
        else:
            f.write("\n")
    f.write("];\n")

print(f"Successfully wrote {target_path} with 25 items!")
