"""Read-only upstream investigation. Captures grants, not approvals; never installs package code."""
import base64
import concurrent.futures
import hashlib
import json
import pathlib
import re
import subprocess
import tarfile
import threading
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
CACHE = ROOT / '.release' / 'phase3' / 'upstream-cache'
TEXTS = ROOT / 'docs' / 'audit' / 'phase3-license-texts'
GRANT = re.compile(r'Permission is hereby granted|Redistribution and use in source and binary forms|Permission to use, copy, modify|This is free and unencumbered software|Apache License\s*[,\r\n ]+Version 2|Mozilla Public License|Eclipse Public License', re.I)
LICENSE_NAME = re.compile(r'(?:^|/)(?:licen[sc]e|copying|unlicense)(?:[._-]|$)', re.I)
GH_LOCK = threading.Lock()
assert GRANT.search('Permission is hereby granted, free of charge')
assert not GRANT.search('See README for license information')

def complete_grant(text):
    lower = text.lower()
    return (
        ('permission is hereby granted' in lower and 'the above copyright notice' in lower and 'the software is provided' in lower)
        or ('redistribution and use in source and binary forms' in lower and 'this software is provided' in lower and len(text) > 600)
        or ('permission to use, copy, modify' in lower and 'the software is provided' in lower)
        or ('this is free and unencumbered software' in lower and 'the software is provided' in lower)
        or ('apache license' in lower and 'end of terms and conditions' in lower and len(text) > 5000)
        or ('mozilla public license' in lower and 'source code form' in lower and '10. versions' in lower)
        or ('eclipse public license' in lower and 'definitions' in lower and 'general' in lower and len(text) > 8000)
    )

assert not complete_grant('Mozilla Public License 2.0; see project URL')
assert not complete_grant('License: MIT')

def gh(endpoint):
    with GH_LOCK:
        return cached_gh(endpoint)

def cached_gh(endpoint):
    file = CACHE / (hashlib.sha256(endpoint.encode()).hexdigest() + '.json')
    if file.exists():
        return json.loads(file.read_text())
    result = subprocess.run(['gh', 'api', endpoint], capture_output=True, text=True, encoding='utf-8', timeout=90)
    if result.returncode:
        raise ValueError('GitHub API unavailable: ' + endpoint + ' (' + str(result.returncode) + ')')
    doc = json.loads(result.stdout)
    file.write_text(json.dumps(doc))
    return doc

def metadata(name, version):
    url = 'https://registry.npmjs.org/' + urllib.parse.quote(name, safe='') + '/' + version
    file = CACHE / (hashlib.sha256(url.encode()).hexdigest() + '.json')
    if not file.exists():
        with urllib.request.urlopen(url, timeout=45) as response:
            file.write_bytes(response.read())
    return json.loads(file.read_text()), url

def capture(body, provenance):
    digest = hashlib.sha256(body).hexdigest()
    target = TEXTS / (digest + '.txt')
    target.write_bytes(body)
    return {**provenance, 'sha256': digest, 'file': str(target.relative_to(ROOT)).replace('\\', '/'), 'fullGrantDetected': complete_grant(body.decode(errors='replace'))}

def repo_name(value):
    value = value.get('url', '') if isinstance(value, dict) else value or ''
    match = re.search(r'github.com[/:]([^/]+)/([^/#]+)', value)
    if match:
        return match[1] + '/' + re.sub(r'\.git$', '', match[2])
    return value if re.fullmatch(r'[\w.-]+/[\w.-]+', value) else None

def inspect(pair):
    key, old = pair
    name, version = key.rsplit('@', 1)
    result = {'name': name, 'version': version, 'package': key, 'source': old['source'], 'licenseTexts': [], 'exceptions': [], 'limitations': []}
    try:
        meta, metadata_url = metadata(name, version)
        if meta.get('name') != name or meta.get('version') != version or meta.get('dist', {}).get('integrity') != old['integrity']:
            raise ValueError('Exact registry identity/integrity no longer matches previous evidence')
        result.update({'registryIdentityVerified': True, 'registryMetadata': metadata_url, 'registryLicenseDeclaration': meta.get('license'), 'publisherCommit': meta.get('gitHead'), 'registryAttestation': meta.get('dist', {}).get('attestations')})
        archive = ROOT / '.release' / 'dependency-evidence' / (hashlib.sha256(key.encode()).hexdigest() + '.tgz')
        algorithm, expected = old['integrity'].split('-', 1)
        with archive.open('rb') as stream:
            if base64.b64encode(hashlib.file_digest(stream, algorithm).digest()).decode() != expected:
                raise ValueError('Cached archive integrity mismatch')
        result['archiveIntegrityVerified'] = True
        installed = ROOT / 'node_modules' / name
        comparisons = {'same': 0, 'different': [], 'notInstalled': 0}
        with tarfile.open(archive) as tar:
            manifest = min((m for m in tar.getmembers() if m.isfile() and m.name.endswith('/package.json')), key=lambda m: len(m.name.split('/')))
            package = json.load(tar.extractfile(manifest))
            prefix = manifest.name.rsplit('/', 1)[0] + '/'
            source_files = []
            for member in tar.getmembers():
                if not member.isfile() or member.size > 8 * 1024 * 1024:
                    continue
                relative = member.name.removeprefix(prefix)
                if '..' in pathlib.PurePosixPath(relative).parts:
                    raise ValueError('Unsafe archive member')
                body = tar.extractfile(member).read()
                target = installed / relative
                if target.is_file():
                    if hashlib.sha256(target.read_bytes()).digest() == hashlib.sha256(body).digest():
                        comparisons['same'] += 1
                    else:
                        comparisons['different'].append(relative)
                else:
                    comparisons['notInstalled'] += 1
                if LICENSE_NAME.search(member.name):
                    result['licenseTexts'].append(capture(body, {'kind': 'versioned archive license file', 'archiveMember': member.name}))
                if re.search(r'(?:^|/)readme(?:\.|$)', member.name, re.I):
                    text = body.decode(errors='replace')
                    section = re.search(r'(?im)^(?:#{1,6}\s*)?licen[sc]e[^\r\n]*\r?\n[\s\S]*', text)
                    if section and complete_grant(section.group()):
                        result['licenseTexts'].append(capture(section.group().encode(), {'kind': 'complete grant embedded in exact archive documentation (not a README reference)', 'archiveMember': member.name, 'wholeFileSha256': hashlib.sha256(body).hexdigest()}))
                if re.search(r'\.(?:[cm]?js|tsx?|rs|[ch])$', member.name):
                    text = body[:32768].decode(errors='replace')
                    for comment in re.findall(r'/\*[\s\S]*?\*/', text):
                        if complete_grant(comment):
                            result['licenseTexts'].append(capture(comment.encode(), {'kind': 'complete grant in exact archive source header', 'archiveMember': member.name}))
                    for declaration in re.findall(r'SPDX-License-Identifier:[^\r\n*]+|@license[^\r\n]+', text):
                        result['exceptions'].append({'file': member.name, 'declaration': declaration[:300]})
                    source_files.append((relative, hashlib.sha1(b'blob ' + str(len(body)).encode() + b'\0' + body).hexdigest()))
            result['installedComparison'] = comparisons
            result['archiveSourceFilesInspected'] = len(source_files)
        repo = repo_name(meta.get('repository') or package.get('repository'))
        result['repository'] = repo
        if not repo:
            result['limitations'].append('Publisher supplies no usable repository mapping; no repository or grant invented.')
        else:
            commit = meta.get('gitHead')
            result['sourceBinding'] = 'publisher gitHead' if commit else 'version tag; publisher commit unavailable'
            if not commit:
                try:
                    ref = gh('repos/' + repo + '/git/ref/tags/v' + version)['object']
                except ValueError:
                    ref = gh('repos/' + repo + '/git/ref/tags/' + version)['object']
                if ref['type'] == 'tag':
                    ref = gh('repos/' + repo + '/git/tags/' + ref['sha'])['object']
                if ref['type'] != 'commit':
                    raise ValueError('Version tag does not resolve to a commit')
                commit = ref['sha']
            gh('repos/' + repo + '/git/commits/' + commit)
            result['sourceCommit'] = commit
            tree = gh('repos/' + repo + '/git/trees/' + commit + '?recursive=1')
            result['treeTruncated'] = tree.get('truncated', False)
            blobs = [b for b in tree['tree'] if b['type'] == 'blob']
            directory = (meta.get('repository') or {}).get('directory', '') if isinstance(meta.get('repository'), dict) else ''
            if not directory and isinstance(old.get('upstream'), dict):
                directory = old['upstream'].get('directory', '')
            prefix_paths = {directory}
            for parent in pathlib.PurePosixPath(directory).parents:
                prefix_paths.add('' if str(parent) == '.' else str(parent))
            prefix_paths.add('')
            candidates = [b for b in blobs if LICENSE_NAME.search(b['path']) and str(pathlib.PurePosixPath(b['path']).parent).replace('.', '') in prefix_paths]
            result['otherLicensePaths'] = [b['path'] for b in blobs if LICENSE_NAME.search(b['path']) and b not in candidates][:100]
            for blob in candidates[:15]:
                doc = gh('repos/' + repo + '/git/blobs/' + blob['sha'])
                body = base64.b64decode(doc['content'])
                result['licenseTexts'].append(capture(body, {'kind': 'exact upstream commit license file', 'url': 'https://github.com/' + repo + '/blob/' + commit + '/' + blob['path'], 'path': blob['path'], 'gitBlob': blob['sha'], 'sourceBinding': result['sourceBinding']}))
            by_path = {b['path']: b['sha'] for b in blobs}
            matched = [p for p, digest in source_files if by_path.get((directory + '/' if directory else '') + p) == digest]
            result['exactPublishedSourceMatches'] = matched[:100]
            result['limitations'].append('Code/header checks do not prove full native/transpiler build correspondence or compatibility.')
    except Exception as error:
        result['error'] = str(error)
    full = [n for n in result['licenseTexts'] if n['fullGrantDetected']]
    exact = [n for n in full if n['kind'].startswith('complete grant') or n.get('sourceBinding') == 'publisher gitHead']
    result['status'] = 'EXACT_VERSION_GRANT_CAPTURED' if exact else 'TAG_PINNED_GRANT_PUBLISHER_BINDING_PENDING' if full else 'MISSING_SUFFICIENT_LICENSE_TEXT'
    if result.get('error'):
        result['limitations'].append('Upstream investigation incomplete; see error.')
    return result

if __name__ == '__main__':
    CACHE.mkdir(parents=True, exist_ok=True)
    TEXTS.mkdir(parents=True, exist_ok=True)
    old = json.loads((ROOT / 'docs/audit/dependency-compliance-evidence.json').read_text())['artifacts']
    targets = {key: value for key, value in old.items() if value['status'] != 'TEXT CAPTURED' and not value.get('upstreamEvidence', {}).get('evidenceFile')}
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        results = list(pool.map(inspect, targets.items()))
    output = {'date': '2026-10-30', 'scope': 'Each of the 25 Phase 2 text gaps; metadata/README links alone never satisfy a license-text requirement. Status is evidence classification, not a legal approval.', 'packages': results}
    (ROOT / 'docs/audit/phase3-license-investigation.json').write_text(json.dumps(output, indent=2) + '\n')
    print(json.dumps({'investigated': len(results), 'statuses': {status: sum(p['status'] == status for p in results) for status in sorted({p['status'] for p in results})}}))
