# -*- coding: utf-8 -*-
import json
import os
import sys

sys.path.append(os.path.dirname(__file__))

from build_step2_batch12 import items as chunk0
from s2_b12_chunk1 import items_0278_to_0288 as chunk1
from s2_b12_chunk2 import items_0283_to_0288 as chunk2
from s2_b12_chunk3 import items_0289_to_0300 as chunk3

all_items = chunk0 + chunk1 + chunk2 + chunk3
print(f"Total items assembled: {len(all_items)}")
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

target_path = os.path.join(os.path.dirname(__file__), "step2-batch12.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write("import { CandidateSpec } from './types';\n\n")
    f.write("export const step2Batch12: CandidateSpec[] = [\n")
    for i, item in enumerate(all_items):
        f.write("  " + json.dumps(item, indent=2).replace("\n", "\n  "))
        if i < len(all_items) - 1:
            f.write(",\n")
        else:
            f.write("\n")
    f.write("];\n")

print(f"Successfully wrote {target_path} with 25 items!")
