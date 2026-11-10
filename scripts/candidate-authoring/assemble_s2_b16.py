import json
import sys
sys.path.append('scripts/candidate-authoring')

from build_step2_b16_part1 import items_b16_p1 as p1
from build_step2_b16_part2 import items_b16_p2 as p2

all_items = p1 + p2
assert len(all_items) == 25, f"Expected 25 items, got {len(all_items)}"

ts_content = "import { CandidateSpec } from './types';\n\nexport const step2Batch16: CandidateSpec[] = " + json.dumps(all_items, indent=2) + ";\n"

with open("scripts/candidate-authoring/step2-batch16.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully assembled step2-batch16.ts with {len(all_items)} items.")
