import os

def update_test_file():
    path = "tests/unit/international-bank.test.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl280 } from '../../content/bank/international/batch-intl-280';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../../content/bank/international/batch-intl-{i}';"
        for i in range(281, 286)
    ])
    assert old_import in content, "old_import not found in test file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl276, ...bIntl277, ...bIntl278, ...bIntl279, ...bIntl280"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(281, 286)])
    assert old_spread in content, "old_spread not found in test file"
    content = content.replace(old_spread, new_spread)
    
    # Update expected counts: 27172 -> 27672
    assert "27172" in content, "27172 not found in test file"
    content = content.replace("27172", "27672")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated tests/unit/international-bank.test.ts")

def update_validator_file():
    path = "scripts/international-bank.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl280 } from '../content/bank/international/batch-intl-280';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(281, 286)
    ])
    assert old_import in content, "old_import not found in validator file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl276, ...bIntl277, ...bIntl278, ...bIntl279, ...bIntl280"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(281, 286)])
    assert old_spread in content, "old_spread not found in validator file"
    content = content.replace(old_spread, new_spread)
    
    # Add rawBatches entries
    old_entry = "{ name: 'batch-intl-280', data: bIntl280 },"
    new_entries = old_entry + "\n  " + "\n  ".join([
        f"{{ name: 'batch-intl-{i}', data: bIntl{i} }},"
        for i in range(281, 286)
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
    old_import = "import { questions as bIntl280 } from '../content/bank/international/batch-intl-280';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(281, 286)
    ])
    assert old_import in content, "old_import not found in ingest file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl276, ...bIntl277, ...bIntl278, ...bIntl279, ...bIntl280,"
    new_spread = old_spread + "\n  " + ", ".join([f"...bIntl{i}" for i in range(281, 286)]) + ","
    assert old_spread in content, "old_spread not found in ingest file"
    content = content.replace(old_spread, new_spread)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/ingest-international-bank.ts")

if __name__ == "__main__":
    update_test_file()
    update_validator_file()
    update_ingest_file()
    print("All registrations for Mega-Batch 59 complete!")
