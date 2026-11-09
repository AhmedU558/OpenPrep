fp = 'scripts/candidate-authoring/standardize_batches.py'
txt = open(fp, 'r', encoding='utf-8').read()
old = 'crit["citationFormatNotes"] = f"Citation verified: {item.get(\'citation\', \'\')}"'
new = 'crit["citationFormatNotes"] = "Bibliographic metadata format screened; substantive claim-mapped source retrieval unperformed."'
assert old in txt, 'old not in txt'
txt = txt.replace(old, new)
open(fp, 'w', encoding='utf-8').write(txt)
print('Updated standardize_batches.py')
