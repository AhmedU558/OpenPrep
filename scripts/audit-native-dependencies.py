"""Static native artifact/source evidence; never builds or executes downloaded code."""
import base64
import concurrent.futures
import hashlib
import importlib.util
import json
import pathlib
import re
import struct
import tarfile
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('package_audit', ROOT / 'scripts/audit-package-licenses.py')
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)
CACHE = ROOT / '.release/phase3/native-sources'
EVIDENCE = ROOT / 'docs/audit/phase3-native-evidence.json'
PUBLISHER = 'ebb95f8add54eee8bed840e3fb587e4cbec857d7'

def native_type(body):
    if body.startswith(b'MZ'): return 'PE/COFF'
    if body.startswith(b'\x7fELF'): return 'ELF'
    if body[:4] in (b'\xcf\xfa\xed\xfe', b'\xfe\xed\xfa\xcf', b'\xca\xfe\xba\xbe'): return 'Mach-O'
    if body.startswith(b'\0asm'): return 'WebAssembly'
    return 'unidentified'

def imports(body):
    """Inspect PE import names or ELF DT_NEEDED without loading the binary."""
    try:
        if body.startswith(b'MZ'):
            pe = struct.unpack_from('<I', body, 0x3c)[0]
            if body[pe:pe+4] != b'PE\0\0': return []
            count, opt_size = struct.unpack_from('<H', body, pe+6)[0], struct.unpack_from('<H', body, pe+20)[0]
            opt = pe+24
            directory = opt + (112 if struct.unpack_from('<H', body, opt)[0] == 0x20b else 96)
            rva = struct.unpack_from('<I', body, directory+8)[0]
            sections = [struct.unpack_from('<IIII', body, opt+opt_size+i*40+8) for i in range(count)]
            def offset(address):
                for virtual_size, virtual_address, raw_size, raw_pointer in sections:
                    if virtual_address <= address < virtual_address+max(virtual_size,raw_size): return raw_pointer+address-virtual_address
                raise ValueError('RVA outside sections')
            index, result = offset(rva), []
            for _ in range(1024):
                desc = struct.unpack_from('<IIIII', body, index)
                if not any(desc): break
                start = offset(desc[3]); result.append(body[start:body.index(b'\0',start)].decode('ascii'))
                index += 20
            return result
        if body.startswith(b'\x7fELF') and body[4] == 2:
            endian = '<' if body[5] == 1 else '>'
            phoff = struct.unpack_from(endian+'Q',body,32)[0]
            entsize, count = struct.unpack_from(endian+'HH',body,54)
            segments = [struct.unpack_from(endian+'IIQQQQQQ',body,phoff+i*entsize) for i in range(count)]
            dynamic = next(s for s in segments if s[0] == 2)
            entries = [struct.unpack_from(endian+'qQ',body,i) for i in range(dynamic[2],dynamic[2]+dynamic[5],16)]
            address = next(value for tag,value in entries if tag == 5)
            segment = next(s for s in segments if s[0] == 1 and s[3] <= address < s[3]+s[5])
            base = segment[2]+address-segment[3]
            return [body[base+value:body.index(b'\0',base+value)].decode('ascii') for tag,value in entries if tag == 1]
    except (ValueError, StopIteration, struct.error, IndexError, UnicodeError):
        return ['STATIC_IMPORT_PARSE_INCOMPLETE']
    return []

assert native_type(b'\0asm' + bytes(20)) == 'WebAssembly'
assert imports(b'not a binary') == []

def source_evidence(component):
    result = dict(component)
    url = component.get('sourceUrl')
    if not url:
        return {**result, 'status': 'NO_EXACT_SOURCE_INPUT_FOUND', 'licenses': []}
    try:
        parsed = urllib.request.Request(url, headers={'User-Agent':'OpenPrep-local-compliance-audit'})
        target = CACHE / (hashlib.sha256(url.encode()).hexdigest()+'.archive')
        if not target.exists():
            partial = target.with_suffix('.partial')
            size = 0
            with urllib.request.urlopen(parsed,timeout=60) as response, partial.open('wb') as output:
                result['finalUrl'] = response.url
                while chunk := response.read(1024*1024):
                    size += len(chunk)
                    if size > 100*1024*1024: raise ValueError('Source archive exceeds audit size limit')
                    output.write(chunk)
            partial.replace(target)
        with target.open('rb') as stream:
            result['sourceSha256'] = hashlib.file_digest(stream,'sha256').hexdigest()
        result['sourceBytes'] = target.stat().st_size
        licenses = []
        with tarfile.open(target) as tar:
            for member in tar.getmembers():
                if not member.isfile() or member.size > 2*1024*1024: continue
                if not re.search(r'(?:^|/)(?:licen[sc]e|copying|copyright|patents|notice|ftl\.txt)(?:[._-]|$)',member.name,re.I): continue
                if len(member.name.split('/')) > 4: continue
                body = tar.extractfile(member).read()
                licenses.append(audit.capture(body,{'kind':'license/notice in exact source archive','archiveMember':member.name,'sourceUrl':url}))
        result['licenses'] = licenses
        result['status'] = 'SOURCE_AND_NOTICE_BYTES_CAPTURED' if licenses else 'SOURCE_CAPTURED_NO_COMPLETE_NOTICE'
        result['buildCorrespondence'] = 'UNVERIFIED: upstream input bytes are not a reproduced binary build or a published OpenPrep source offer.'
    except Exception as error:
        result.update({'status':'SOURCE_RETRIEVAL_UNRESOLVED','error':str(error),'licenses':[]})
    return result

if __name__ == '__main__':
    CACHE.mkdir(parents=True,exist_ok=True); audit.CACHE.mkdir(parents=True,exist_ok=True); audit.TEXTS.mkdir(parents=True,exist_ok=True)
    old = json.loads((ROOT/'docs/audit/dependency-compliance-evidence.json').read_text())
    inputs = {}
    for file in ['THIRD-PARTY-NOTICES.md','versions.properties','build/posix.sh','build/win.sh','build/wasm.sh']:
        entry = audit.gh('repos/lovell/sharp-libvips/contents/'+file+'?ref='+PUBLISHER)
        body = base64.b64decode(entry['content'])
        inputs[file] = {'url':'https://github.com/lovell/sharp-libvips/blob/'+PUBLISHER+'/'+file,'sha256':hashlib.sha256(body).hexdigest(),'gitBlob':entry['sha'],'text':body.decode()}
    variables = dict(re.findall(r'^(VERSION_[A-Z_0-9]+)=(.+)$',inputs['versions.properties']['text'],re.M))
    posix = inputs['build/posix.sh']['text']
    def substitute(url):
        url = re.sub(r'\$\(without_patch \$(VERSION_[A-Z_0-9]+)\)',lambda m:'.'.join(variables[m[1]].split('.')[:2]),url)
        url = re.sub(r'\$\(without_prerelease \$(VERSION_[A-Z_0-9]+)\)',lambda m:variables[m[1]].split('-')[0],url)
        url = re.sub(r'\$\{(VERSION_[A-Z_0-9]+)//\./([-_])\}',lambda m:variables[m[1]].replace('.',m[2]),url)
        return re.sub(r'\$\{(VERSION_[A-Z_0-9]+)\}',lambda m:variables[m[1]],url)
    source_urls = {}
    for line in posix.splitlines():
        if '$CURL https://' not in line or '| tar' not in line: continue
        names = re.findall(r'\$\{?(VERSION_[A-Z_0-9]+)',line)
        url = re.search(r'https://(.+?)\s*\|',line)
        if names and url: source_urls[names[0]] = substitute('https://'+url[1])
    binaries, platforms, components = [], [], {}
    for key, artifact in old['artifacts'].items():
        if not key.startswith('@img/sharp'): continue
        archive = ROOT/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
        algorithm,expected=artifact['integrity'].split('-',1)
        with archive.open('rb') as stream:
            if base64.b64encode(hashlib.file_digest(stream,algorithm).digest()).decode()!=expected:raise ValueError('Native archive integrity mismatch: '+key)
        with tarfile.open(archive) as tar:
            manifest = json.load(tar.extractfile('package/package.json'))
            if manifest['name']+'@'+manifest['version']!=key:raise ValueError('Native package identity mismatch')
            platform = {'package':key,'os':manifest.get('os'),'cpu':manifest.get('cpu'),'libc':manifest.get('libc'),'licenseDeclaration':manifest.get('license'),'archiveIntegrity':artifact['integrity'],'reportedVersions':artifact.get('bundledVersions',{})}
            platforms.append(platform)
            for name,version in platform['reportedVersions'].items():
                item = components.setdefault((name,version),{'name':name,'version':version,'reportedBy':[]})
                item['reportedBy'].append(key)
            for member in tar.getmembers():
                if member.isfile() and re.search(r'\.(?:node|dll|dylib|wasm|so(?:\.\d+)*)$',member.name):
                    body=tar.extractfile(member).read()
                    binaries.append({'package':key,'path':member.name,'bytes':len(body),'sha256':hashlib.sha256(body).hexdigest(),'format':native_type(body),'imports':imports(body),'importAnalysis': 'PE/ELF direct imports only; static linked subcomponents remain unverified' if (native_type(body)=='PE/COFF' or (native_type(body)=='ELF' and body[4]==2)) else 'NOT_PARSED'})
    for (name,version), item in components.items():
        variable = 'VERSION_'+name.upper().replace('-','_')
        item['sourceUrl'] = source_urls.get(variable)
        if name == 'emscripten': item['sourceUrl']='https://github.com/emscripten-core/emscripten/archive/refs/tags/'+version+'.tar.gz'
        if name == 'resvg': item['sourceUrl']='https://github.com/linebender/resvg/archive/refs/tags/v'+version+'.tar.gz'
        item['compositionEvidence']='Publisher versions.json declaration; not independent identification of every compiled subcomponent.'
        item['role']='reported toolchain identifier; emitted runtime inclusion needs review' if name=='emscripten' else 'publisher-reported embedded library'
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        component_results=list(pool.map(source_evidence,components.values()))
    output={'date':'2026-10-30','publisherCommit':PUBLISHER,'inputs':inputs,'platforms':platforms,'nativeFiles':binaries,'components':component_results,'limitations':['No native code was executed or rebuilt.','No Linux production deployment/container was accessed.','Build scripts contain patches, mutable inputs and non-frozen source dependencies; exact binary reproduction/source-offer compliance remains unverified.']}
    EVIDENCE.write_text(json.dumps(output,indent=2)+'\n')
    print(json.dumps({'platformPackages':len(platforms),'nativeFiles':len(binaries),'reportedComponentUnion':len(component_results),'sourcesCaptured':sum(c['status'].startswith('SOURCE_AND') for c in component_results),'remaining':[c['name'] for c in component_results if c['status']!='SOURCE_AND_NOTICE_BYTES_CAPTURED']}))
