import re

# Fix part 3
with open('scripts/candidate-authoring/build_step2_cycle10_part3.py', 'r', encoding='utf-8') as f:
    p3 = f.read()

p3 = p3.replace('"Septic Shock Norepinephrine First-Line Vasopressor Vasopressin Adjunct Target MAP"',
                '"Septic Shock Norepinephrine First-Line Vasopressor Target MAP"')
p3 = p3.replace('"Critical Care"', '"General Principles"')
with open('scripts/candidate-authoring/build_step2_cycle10_part3.py', 'w', encoding='utf-8') as f:
    f.write(p3)

# Fix part 4
with open('scripts/candidate-authoring/build_step2_cycle10_part4.py', 'r', encoding='utf-8') as f:
    p4 = f.read()

p4 = p4.replace('"Critical Care"', '"Respiratory"')
p4 = p4.replace('"Emergency Medicine"', '"Respiratory"')
p4 = p4.replace('"Aspiration Pneumonitis Chemical Injury vs Bacterial Pneumonia Antibiotic Stewardship"',
                '"Aspiration Pneumonitis vs Bacterial Pneumonia Antibiotic Stewardship"')
with open('scripts/candidate-authoring/build_step2_cycle10_part4.py', 'w', encoding='utf-8') as f:
    f.write(p4)

# Fix part 5
with open('scripts/candidate-authoring/build_step2_cycle10_part5.py', 'r', encoding='utf-8') as f:
    p5 = f.read()

p5 = p5.replace('"Emergency Medicine"', '"Respiratory"')
p5 = p5.replace('"Neurology"', '"Nervous System"')
p5 = p5.replace('"Pulmonary"', '"Respiratory"')
p5 = p5.replace('"Critical Care"', '"Respiratory"')
p5 = p5.replace('"Oncology"', '"Hematology"')
with open('scripts/candidate-authoring/build_step2_cycle10_part5.py', 'w', encoding='utf-8') as f:
    f.write(p5)

print("Updated Step 2 CK Batch 38 parts 3, 4, 5.")
