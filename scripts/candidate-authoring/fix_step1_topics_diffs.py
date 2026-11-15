import re

# Fix Part 1
with open('scripts/candidate-authoring/build_step1_cycle10_part1.py', 'r', encoding='utf-8') as f:
    p1 = f.read()

p1 = p1.replace('"Lambert-Eaton Syndrome Presynaptic Calcium Channels and Post-Exercise Facilitation", 4,',
                '"Lambert-Eaton Presynaptic Calcium Channels Post-Exercise Facilitation", 5,')
p1 = p1.replace('"Creutzfeldt-Jakob Disease Prion Protein Alpha-Helix to Beta-Sheet Conformational Shift", 4,',
                '"Creutzfeldt-Jakob Prion Alpha-Helix to Beta-Sheet Conformational Shift", 5,')
p1 = re.sub(r'("op-c-s1-0906"[^)]*?),\s*4,', r'\1, 5,', p1)
p1 = re.sub(r'("op-c-s1-0912"[^)]*?),\s*4,', r'\1, 5,', p1)
p1 = re.sub(r'("op-c-s1-0916"[^)]*?),\s*4,', r'\1, 5,', p1)
p1 = re.sub(r'("op-c-s1-0925"[^)]*?),\s*4,', r'\1, 5,', p1)

with open('scripts/candidate-authoring/build_step1_cycle10_part1.py', 'w', encoding='utf-8') as f:
    f.write(p1)
print("Updated Part 1.")

# Fix Part 2
with open('scripts/candidate-authoring/build_step1_cycle10_part2.py', 'r', encoding='utf-8') as f:
    p2 = f.read()

p2 = p2.replace('"Prerenal Azotemia Fractional Excretion of Urea Versus Sodium Diuretic Confounding", 4,',
                '"Prerenal Azotemia Fractional Excretion of Urea Versus Sodium Diuretics", 5,')
p2 = p2.replace('"Angiotensin II Efferent Arteriolar Vasoconstriction Filtration Fraction Preservation", 4,',
                '"Angiotensin II Efferent Arteriolar Constriction Filtration Fraction", 4,')
p2 = p2.replace('"Prostaglandin-Mediated Afferent Arteriolar Vasodilation NSAID Acute Kidney Injury", 4,',
                '"Prostaglandin-Mediated Afferent Arteriolar Vasodilation NSAID AKI", 4,')
p2 = p2.replace('"Thiazide Diuretics Hydrochlorothiazide Distal Tubule Calcium Reabsorption Enhancement", 4,',
                '"Thiazide Diuretics Distal Tubule Calcium Reabsorption Enhancement", 4,')
p2 = p2.replace('"Osmotic Diuretics Mannitol Proximal Tubule Water Extraction Intracranial Pressure", 4,',
                '"Osmotic Diuretics Mannitol Proximal Tubule Water Extraction ICP", 4,')

p2 = re.sub(r'("op-c-s1-0928"[^)]*?),\s*4,', r'\1, 5,', p2)
p2 = re.sub(r'("op-c-s1-0932"[^)]*?),\s*4,', r'\1, 5,', p2)
p2 = re.sub(r'("op-c-s1-0940"[^)]*?),\s*4,', r'\1, 5,', p2)
p2 = re.sub(r'("op-c-s1-0945"[^)]*?),\s*4,', r'\1, 5,', p2)
p2 = re.sub(r'("op-c-s1-0950"[^)]*?),\s*4,', r'\1, 5,', p2)

with open('scripts/candidate-authoring/build_step1_cycle10_part2.py', 'w', encoding='utf-8') as f:
    f.write(p2)
print("Updated Part 2.")

# Fix Part 3
with open('scripts/candidate-authoring/build_step1_cycle10_part3.py', 'r', encoding='utf-8') as f:
    p3 = f.read()

p3 = p3.replace('"Flow-Volume Loop Variable Intrathoracic Obstruction Tracheomalacia Expiratory Plateau", 4,',
                '"Flow-Volume Loop Variable Intrathoracic Obstruction Expiratory Plateau", 4,')
p3 = p3.replace('"Mechanical Ventilation Static Versus Dynamic Respiratory Compliance Airway Resistance", 4,',
                '"Mechanical Ventilation Static Versus Dynamic Respiratory Compliance", 5,')
p3 = p3.replace('"Oxygen-Hemoglobin Dissociation Curve Allosteric Regulators Right-Shift Bohr Effect", 4,',
                '"Oxygen-Hemoglobin Dissociation Curve Allosteric Shift Bohr Effect", 4,')
p3 = p3.replace('"Cyanide Poisoning Cytochrome c Oxidase Inhibition Lactic Acidosis Hydroxocobalamin", 4,',
                '"Cyanide Poisoning Cytochrome c Oxidase Inhibition Hydroxocobalamin", 5,')
p3 = p3.replace('"Neonatal Respiratory Distress Syndrome Lecithin-Sphingomyelin Ratio Betamethasone", 4,',
                '"Neonatal Respiratory Distress Syndrome Lecithin-Sphingomyelin Ratio", 5,')

p3 = re.sub(r'("op-c-s1-0953"[^)]*?),\s*4,', r'\1, 5,', p3)
p3 = re.sub(r'("op-c-s1-0965"[^)]*?),\s*4,', r'\1, 5,', p3)
p3 = re.sub(r'("op-c-s1-0969"[^)]*?),\s*4,', r'\1, 5,', p3)

with open('scripts/candidate-authoring/build_step1_cycle10_part3.py', 'w', encoding='utf-8') as f:
    f.write(p3)
print("Updated Part 3.")

# Fix Part 4
with open('scripts/candidate-authoring/build_step1_cycle10_part4.py', 'r', encoding='utf-8') as f:
    p4 = f.read()

p4 = p4.replace('"Carcinoid Syndrome Serotonin Right-Sided Valvular Plaque Pulmonary MAO Degradation", 4,',
                '"Carcinoid Syndrome Serotonin Cardiac Plaque Pulmonary MAO Degradation", 4,')
p4 = re.sub(r'("op-c-s1-0976"[^)]*?),\s*4,', r'\1, 5,', p4)
p4 = re.sub(r'("op-c-s1-0980"[^)]*?),\s*4,', r'\1, 5,', p4)
p4 = re.sub(r'("op-c-s1-0992"[^)]*?),\s*4,', r'\1, 5,', p4)
p4 = re.sub(r'("op-c-s1-0995"[^)]*?),\s*4,', r'\1, 5,', p4)

with open('scripts/candidate-authoring/build_step1_cycle10_part4.py', 'w', encoding='utf-8') as f:
    f.write(p4)
print("Updated Part 4.")
