import json
import glob
import re

def main():
    diff5_items = []
    for fpath in sorted(glob.glob('scripts/candidate-authoring/step*-batch3[3-6].ts')):
        content = open(fpath, 'r', encoding='utf-8').read()
        blocks = content.split('{\n    "code":')
        for b in blocks[1:]:
            b = '{\n    "code":' + b
            code_m = re.search(r'"code":\s*"([^"]+)"', b)
            topic_m = re.search(r'"topic":\s*"([^"]+)"', b)
            diff_m = re.search(r'"provisionalDifficulty":\s*(\d+)', b)
            sol_m = re.search(r'"shortestValidSolution":\s*"([^"]+)"', b)
            dist_m = re.search(r'"strongestDistractor":\s*"([^"]+)"', b)
            if code_m and diff_m and int(diff_m.group(1)) == 5:
                code = code_m.group(1)
                topic = topic_m.group(1) if topic_m else ""
                sol = sol_m.group(1) if sol_m else ""
                dist = dist_m.group(1) if dist_m else ""
                diff5_items.append({
                    'code': code,
                    'topic': topic,
                    'sol': sol,
                    'dist': dist,
                    'fpath': fpath
                })

    print(f"Total Difficulty 5 items found: {len(diff5_items)}")
    for item in diff5_items:
        print(f"{item['code']} | {item['topic']} | Sol: {item['sol'][:60]} | Dist: {item['dist'][:40]}")

if __name__ == '__main__':
    main()
