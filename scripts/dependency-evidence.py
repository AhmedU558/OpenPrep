"""Audit-only stdlib tool: verify npm tarball integrity and capture notices without executing or extracting package code."""
import base64
import concurrent.futures
import hashlib
import json
import pathlib
import re
import tarfile
import urllib.request
from urllib.parse import urlparse

ROOT = pathlib.Path(__file__).resolve().parents[1]
SCRATCH = ROOT / '.release' / 'dependency-evidence'
OUT = ROOT / 'docs' / 'audit'
TEXTS = OUT / 'dependency-evidence-texts'
NOTICE = re.compile(r'(?:^|/)(?:licen[sc]e|copying|notice|copyright)(?:[._-]|$)', re.I)
assert NOTICE.search('package/vendor/LICENSE-MIT')
assert not NOTICE.search('../../package/src/index.js')

def capture(pair):
    key, p = pair
    result = {'package': key, 'source': p['source'], 'declaredLicense': p['license'], 'notices': []}
    try:
        if urlparse(p['source']).hostname != 'registry.npmjs.org':
            raise ValueError('Only official npm registry artifacts are accepted')
        archive = SCRATCH / (hashlib.sha256(key.encode()).hexdigest() + '.tgz')
        algorithm, expected = p['integrity'].split('-', 1)
        if algorithm not in ('sha512', 'sha256', 'sha1'):
            raise ValueError('Unsupported integrity algorithm')
        def valid(file):
            if not file.exists():
                return False
            with file.open('rb') as data:
                return base64.b64encode(hashlib.file_digest(data, algorithm).digest()).decode() == expected
        if not valid(archive):
            partial = archive.with_suffix('.partial')
            with urllib.request.urlopen(p['source'], timeout=90) as response, partial.open('wb') as dest:
                while chunk := response.read(1024 * 1024):
                    dest.write(chunk)
            if not valid(partial):
                raise ValueError('Fresh artifact integrity mismatch; cached artifact not trusted')
            partial.replace(archive)
        result['integrityVerified'] = True
        result['integrity'] = p['integrity']
        with tarfile.open(archive, 'r:gz') as tar:
            manifest = min((m for m in tar.getmembers() if m.isfile() and m.name.endswith('/package.json')), key=lambda m: len(m.name.split('/')))
            metadata = tar.extractfile(manifest)
            package = json.load(metadata)
            if package['name'] != p['name'] or package['version'] != p['version']:
                raise ValueError('Artifact name/version mismatch')
            result['upstream'] = package.get('repository')
            result['artifactLicense'] = package.get('license')
            for member in tar:
                if member.isfile() and member.name.endswith('/versions.json') and member.size < 1024 * 1024:
                    result['bundledVersions'] = json.load(tar.extractfile(member))
                if not member.isfile() or member.size > 2 * 1024 * 1024 or not NOTICE.search(member.name):
                    continue
                body = tar.extractfile(member).read()
                digest = hashlib.sha256(body).hexdigest()
                target = TEXTS / (digest + '.txt')
                target.write_bytes(body)
                result['notices'].append({'archivePath': member.name, 'sha256': digest, 'evidenceFile': str(target.relative_to(ROOT)).replace('\\', '/')})
            if not result['notices']:
                # Capture explicit README licensing sections as weaker, separately labelled evidence.
                for member in tar.getmembers():
                    if member.isfile() and member.size < 1024 * 1024 and re.search(r'/readme(?:\.|$)', member.name, re.I):
                        body = tar.extractfile(member).read().decode('utf-8', errors='replace')
                        section = re.search(r'(?im)^#{1,6}\s+(?:license|licence|copyright)\b[\s\S]*', body)
                        if section:
                            text = section.group().encode()
                            digest = hashlib.sha256(text).hexdigest()
                            target = TEXTS / (digest + '.txt')
                            target.write_bytes(text)
                            result['notices'].append({'archivePath': member.name + '#licensing-section', 'sha256': digest, 'evidenceFile': str(target.relative_to(ROOT)).replace('\\', '/'), 'limitation': 'README statement/link; may not contain a complete license grant'})
        result['status'] = 'TEXT CAPTURED' if any('limitation' not in n for n in result['notices']) else 'NEEDS UPSTREAM TEXT REVIEW'
    except Exception as error:
        result['status'] = 'NEEDS REVIEW'
        result['error'] = type(error).__name__ + ': ' + str(error)
    return key, result

if __name__ == '__main__':
    SCRATCH.mkdir(parents=True, exist_ok=True)
    TEXTS.mkdir(parents=True, exist_ok=True)
    inventory = json.loads((OUT / 'dependency-inventory.json').read_text())
    previous_file = OUT / 'dependency-compliance-evidence.json'
    previous = json.loads(previous_file.read_text())['artifacts'] if previous_file.exists() else {}
    affected = [p for p in inventory['packages'] if p['unresolved'] or re.search(r'LGPL|MPL|EPL| AND | and ', p['license'])]
    unique = {p['name'] + '@' + p['version']: p for p in affected}
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        for key, result in pool.map(capture, unique.items()):
            if previous.get(key, {}).get('upstreamEvidence'):
                result['upstreamEvidence'] = previous[key]['upstreamEvidence']
            results[key] = result
            if len(results) % 10 == 0:
                print(f'Captured {len(results)}/{len(unique)} artifacts', flush=True)
    output = {'date': '2026-10-30', 'scope': 'All prior unresolved inventory paths plus copyleft/compound grants; no installation or package-code execution. Text capture is not a compatibility approval.', 'lockSha256': inventory['lockSha256'], 'reviews': [{'path': p['path'], 'package': p['name'] + '@' + p['version'], 'priorUnresolved': p['unresolved'], 'license': p['license']} for p in affected], 'artifacts': results}
    (OUT / 'dependency-compliance-evidence.json').write_text(json.dumps(output, indent=2) + '\n')
    print(json.dumps({'paths': len(affected), 'artifacts': len(results), 'captured': sum(r['status'] == 'TEXT CAPTURED' for r in results.values()), 'withoutArtifactNotice': sum(r['status'] != 'TEXT CAPTURED' for r in results.values())}), flush=True)
