"""
Helper to register batches into:
- tests/unit/international-bank.test.ts
- scripts/international-bank.ts
- scripts/ingest-international-bank.ts
"""

import sys

def register(start_batch, end_batch, new_total):
    print(f"Registering batches {start_batch} to {end_batch}, new total: {new_total}...")
    
    # 1. tests/unit/international-bank.test.ts
    test_path = "tests/unit/international-bank.test.ts"
    with open(test_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    last_b = start_batch - 1
    import_anchor = f"import {{ questions as bIntl{last_b} }} from '../../content/bank/international/batch-intl-{last_b}';"
    new_imports = "\n".join([f"import {{ questions as bIntl{b} }} from '../../content/bank/international/batch-intl-{b}';" for b in range(start_batch, end_batch + 1)])
    assert import_anchor in content, f"Cannot find import anchor {import_anchor} in {test_path}"
    content = content.replace(import_anchor, f"{import_anchor}\n{new_imports}")
    
    spread_anchor = f"...bIntl{last_b}"
    new_spread = ", ".join([f"...bIntl{b}" for b in range(start_batch, end_batch + 1)])
    # In test file: "...bIntl451, ...bIntl452, ...bIntl453, ...bIntl454, ...bIntl455"
    assert spread_anchor in content, f"Cannot find spread anchor {spread_anchor} in {test_path}"
    content = content.replace(spread_anchor, f"{spread_anchor},\n  {new_spread}")
    
    # Update total count
    old_total = new_total - (end_batch - start_batch + 1) * 100
    assert str(old_total) in content, f"Cannot find old total {old_total} in {test_path}"
    content = content.replace(str(old_total), str(new_total))
    
    with open(test_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {test_path}!")
    
    # 2. scripts/international-bank.ts
    ib_path = "scripts/international-bank.ts"
    with open(ib_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    import_anchor = f"import {{ questions as bIntl{last_b} }} from '../content/bank/international/batch-intl-{last_b}';"
    new_imports = "\n".join([f"import {{ questions as bIntl{b} }} from '../content/bank/international/batch-intl-{b}';" for b in range(start_batch, end_batch + 1)])
    assert import_anchor in content, f"Cannot find import anchor {import_anchor} in {ib_path}"
    content = content.replace(import_anchor, f"{import_anchor}\n{new_imports}")
    
    spread_anchor = f"...bIntl{last_b},"
    new_spread = ", ".join([f"...bIntl{b}" for b in range(start_batch, end_batch + 1)])
    assert spread_anchor in content, f"Cannot find spread anchor {spread_anchor} in {ib_path}"
    content = content.replace(spread_anchor, f"{spread_anchor}\n  {new_spread},")
    
    batch_array_anchor = f"{{ name: 'batch-intl-{last_b}', data: bIntl{last_b} }},"
    new_batch_entries = "\n".join([f"  {{ name: 'batch-intl-{b}', data: bIntl{b} }}," for b in range(start_batch, end_batch + 1)])
    assert batch_array_anchor in content, f"Cannot find batch array anchor {batch_array_anchor} in {ib_path}"
    content = content.replace(batch_array_anchor, f"{batch_array_anchor}\n{new_batch_entries}")
    
    with open(ib_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {ib_path}!")
    
    # 3. scripts/ingest-international-bank.ts
    ingest_path = "scripts/ingest-international-bank.ts"
    with open(ingest_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    import_anchor = f"import {{ questions as bIntl{last_b} }} from '../content/bank/international/batch-intl-{last_b}';"
    new_imports = "\n".join([f"import {{ questions as bIntl{b} }} from '../content/bank/international/batch-intl-{b}';" for b in range(start_batch, end_batch + 1)])
    assert import_anchor in content, f"Cannot find import anchor {import_anchor} in {ingest_path}"
    content = content.replace(import_anchor, f"{import_anchor}\n{new_imports}")
    
    spread_anchor = f"...bIntl{last_b},"
    new_spread = ", ".join([f"...bIntl{b}" for b in range(start_batch, end_batch + 1)])
    assert spread_anchor in content, f"Cannot find spread anchor {spread_anchor} in {ingest_path}"
    content = content.replace(spread_anchor, f"{spread_anchor}\n  {new_spread},")
    
    with open(ingest_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated {ingest_path}!")
    print(f"Registration of batches {start_batch} to {end_batch} complete!")

if __name__ == "__main__":
    if len(sys.argv) == 4:
        register(int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]))
    else:
        print("Usage: python scripts/register_batches.py <start_batch> <end_batch> <new_total>")
