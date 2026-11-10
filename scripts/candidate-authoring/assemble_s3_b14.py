import json
import sys
sys.path.append('scripts/candidate-authoring')

from build_step3_b14_part1 import items_b14_p1 as p1
from build_step3_b14_part2 import items_b14_p2 as p2
from build_step3_b14_part3 import items_b14_p3 as p3

all_items = p1 + p2 + p3
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step3Batch14: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step3-batch14.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully assembled step3-batch14.ts with {len(all_items)} items.")
