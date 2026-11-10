# -*- coding: utf-8 -*-
import glob
import os
import re

py_files = glob.glob('scripts/candidate-authoring/*.py')
for filename in py_files:
    if os.path.basename(filename) == 'fix_keys.py':
        continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace any unquoted dictionary key with quoted key, regardless of trailing space/newline
    fixed = re.sub(r'(\n\s*)([a-zA-Z_][a-zA-Z0-9_]*):(\s*)', r'\1"\2":\3', content)
    # Fix double quotes if any:
    fixed = re.sub(r'""([a-zA-Z_][a-zA-Z0-9_]*)""', r'"\1"', fixed)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(fixed)

    print(f'Fixed keys in {filename}')
