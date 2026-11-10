import json
import sys
sys.path.append('scripts/candidate-authoring')

from gen_s1_b16 import items_p1 as p1
from gen_s1_b16_part2 import items_b16_p2 as p2
from gen_s1_b16_part3 import items_b16_p3 as p3
from gen_s1_b16_part4 import items_b16_p4 as p4

all_items = p1 + p2 + p3 + p4
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step1Batch16: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step1-batch16.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully assembled step1-batch16.ts with {len(all_items)} items.")
