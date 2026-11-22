import os

def update_test_file():
    path = "tests/unit/international-bank.test.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl235 } from '../../content/bank/international/batch-intl-235';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../../content/bank/international/batch-intl-{i}';"
        for i in range(236, 241)
    ])
    assert old_import in content, "old_import not found in test file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl231, ...bIntl232, ...bIntl233, ...bIntl234, ...bIntl235"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(236, 241)])
    assert old_spread in content, "old_spread not found in test file"
    content = content.replace(old_spread, new_spread)
    
    # Update expected counts: 22672 -> 23172
    assert "22672" in content, "22672 not found in test file"
    content = content.replace("22672", "23172")
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated tests/unit/international-bank.test.ts")

def update_validator_file():
    path = "scripts/international-bank.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add imports
    old_import = "import { questions as bIntl235 } from '../content/bank/international/batch-intl-235';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(236, 241)
    ])
    assert old_import in content, "old_import not found in validator file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl231, ...bIntl232, ...bIntl233, ...bIntl234, ...bIntl235"
    new_spread = old_spread + ",\n  " + ", ".join([f"...bIntl{i}" for i in range(236, 241)])
    assert old_spread in content, "old_spread not found in validator file"
    content = content.replace(old_spread, new_spread)
    
    # Add rawBatches entries
    old_entry = "{ name: 'batch-intl-235', data: bIntl235 },"
    new_entries = old_entry + "\n  " + "\n  ".join([
        f"{{ name: 'batch-intl-{i}', data: bIntl{i} }},"
        for i in range(236, 241)
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
    old_import = "import { questions as bIntl235 } from '../content/bank/international/batch-intl-235';"
    new_imports = old_import + "\n" + "\n".join([
        f"import {{ questions as bIntl{i} }} from '../content/bank/international/batch-intl-{i}';"
        for i in range(236, 241)
    ])
    assert old_import in content, "old_import not found in ingest file"
    content = content.replace(old_import, new_imports)
    
    # Add spread
    old_spread = "...bIntl231, ...bIntl232, ...bIntl233, ...bIntl234, ...bIntl235,"
    new_spread = old_spread + "\n  " + ", ".join([f"...bIntl{i}" for i in range(236, 241)]) + ","
    assert old_spread in content, "old_spread not found in ingest file"
    content = content.replace(old_spread, new_spread)
    
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/ingest-international-bank.ts")

if __name__ == "__main__":
    update_test_file()
    update_validator_file()
    update_ingest_file()
    print("All registrations for Mega-Batch 50 complete!")
