import os

def update_test_file():
    path = "tests/unit/international-bank.test.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl305 } from '../../content/bank/international/batch-intl-305';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../../content/bank/international/batch-intl-{i}';"
        for i in range(306, 311)
    ])
    assert old_import in content, "old_import not found in test file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl301, ...bIntl302, ...bIntl303, ...bIntl304, ...bIntl305"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(306, 311)])
    assert old_spread in content, "old_spread not found in test file"
    content = content.replace(old_spread, new_spread)
    
    # Update expected counts: 29672 -> 30172
    assert "29672" in content, "29672 not found in test file"
    content = content.replace("29672", "30172")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated tests/unit/international-bank.test.ts")

def update_validator_file():
    path = "scripts/international-bank.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl305 } from '../content/bank/international/batch-intl-305';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(306, 311)
    ])
    assert old_import in content, "old_import not found in validator file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl301, ...bIntl302, ...bIntl303, ...bIntl304, ...bIntl305"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(306, 311)])
    assert old_spread in content, "old_spread not found in validator file"
    content = content.replace(old_spread, new_spread)
    
    # Add rawBatches entries
    old_entry = "{ name: 'batch-intl-305', data: bIntl305 },"
    new_entries = old_entry + "\n  " + "\n  ".join([
        f"{{ name: 'batch-intl-{i}', data: bIntl{i} }},"
        for i in range(306, 311)
    ])
    assert old_entry in content, "old_entry not found in validator file"
    content = content.replace(old_entry, new_entries)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/international-bank.ts")

def update_ingest_file():
    path = "scripts/ingest-international-bank.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl305 } from '../content/bank/international/batch-intl-305';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(306, 311)
    ])
    assert old_import in content, "old_import not found in ingest file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl301, ...bIntl302, ...bIntl303, ...bIntl304, ...bIntl305,"
    new_spread = old_spread + "\n  " + ", ".join([f"...bIntl{i}" for i in range(306, 311)]) + ","
    assert old_spread in content, "old_spread not found in ingest file"
    content = content.replace(old_spread, new_spread)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/ingest-international-bank.ts")

if __name__ == "__main__":
    update_test_file()
    update_validator_file()
    update_ingest_file()
    print("All registrations for Mega-Batch 64 complete! 6 OUT OF 11 TRACKS >= 2,200 REGISTERED!")
