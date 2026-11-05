# -*- coding: utf-8 -*-
import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

from build_step2_batch11_part1 import items_0251_to_0260 as part1
from build_step2_batch11_part2 import items_0261_to_0275 as part2

all_items = part1 + part2
print(f"Total items assembled: {len(all_items)}")
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

target_path = os.path.join(os.path.dirname(__file__), "step2-batch11.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step2Batch11: CandidateSpec[] = [\n")
    for i, item in enumerate(all_items):
        f.write("  " + json.dumps(item, indent=2).replace("\n", "\n  "))
        if i < len(all_items) - 1:
            f.write(",\n")
        "else":
            f.write("\n")
    f.write("];\n")

print(f"Successfully wrote {target_path} with 25 items!")
