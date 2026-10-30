"""Local evidence inventory and fail-closed preflight. Never creates a release artifact or grants permission."""
import argparse
import base64
import hashlib
import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
AUDIT = ROOT/'docs/audit'
SCOPES = ['source','browser','hosted','native','container']
def sha(path): return hashlib.sha256(path.read_bytes()).hexdigest()
def read(path): return json.loads((ROOT/path).read_text(encoding='utf-8-sig'))
def write(path, data):
    (ROOT/path).parent.mkdir(parents=True,exist_ok=True)
    (ROOT/path).write_text(json.dumps(data,indent=2)+'\n',encoding='utf-8')
def safe(relative):
    p=(ROOT/relative).resolve()
    if not p.is_relative_to(ROOT) or any(part.startswith('.env') and part!='.env.example' for part in p.relative_to(ROOT).parts) or (ROOT/relative).is_symlink():
        raise ValueError('Unsafe inventory path: '+relative)
    return p

def files(directory):
    p=ROOT/directory
    return [x.relative_to(ROOT).as_posix() for x in p.rglob('*') if x.is_file() and not x.is_symlink()] if p.exists() else []
def evidence_refs(value):
    found=[]
    if isinstance(value,dict):
        name=value.get('evidenceFile') or value.get('file') or value.get('path')
        if name and value.get('sha256') and isinstance(name,str) and (ROOT/name).is_file():
            found.append({'path':name,'sha256':value['sha256']})
        for x in value.values(): found.extend(evidence_refs(x))
    elif isinstance(value,list):
        for x in value: found.extend(evidence_refs(x))
    return found

def package_id(resource, packages):
    resource=resource.replace('\\','/')
    candidates=[p for p in packages if '/'+p['path']+'/' in resource or resource.startswith(p['path']+'/')]
    return max(candidates,key=lambda p:len(p['path']))['path'] if candidates else None

def graph_modules(graph):
    for item in graph.get('modules',[]):
        yield item
        yield from graph_modules(item)

def source_files():
    tracked=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode().split('\0')
    sidecars={'docs/audit/phase3-artifacts.json','docs/audit/phase3-compliance-report.json','docs/audit/phase3-file-changes.md'}
    return [p for p in tracked if p and p not in sidecars and not p.startswith('docs/SBOM_') and '__pycache__' not in p and (ROOT/p).is_file() and not any(x.startswith('.env') and x!='.env.example' for x in pathlib.PurePosixPath(p).parts)]

def generate():
    inventory=read('docs/audit/dependency-inventory.json'); packages=inventory['packages']
    old=read('docs/audit/dependency-compliance-evidence.json')['artifacts']
    new={p['package']:p for p in read('docs/audit/phase3-license-investigation.json')['packages']}
    source=source_files()
    scopes={s:{'files':[],'packages':set(),'coverageGaps':[]} for s in SCOPES}
    scopes['source']['files']=source;scopes['source']['packages']={p['path'] for p in packages}
    scopes['container']['coverageGaps']=['No container image, digest, base OS inventory or built filesystem supplied.']
    for scope,folder in [('browser','.next/static'),('hosted','.next/server')]:
        scopes[scope]['files']=files(folder)
        graphs=files('.release/phase3/webpack')
        selected=[g for g in graphs if ('browser.json' in g)==(scope=='browser')]
        if not selected:scopes[scope]['coverageGaps'].append('No compiler module evidence')
        for g in selected:
            graph=read(g)
            for item in graph_modules(graph):
                if item.get('filteredChildren'):scopes[scope]['coverageGaps'].append('Compiler filtered modules: '+str(item['filteredChildren']))
                resource=item.get('nameForCondition') or item.get('name','')
                pkg=package_id(resource,packages)
                if pkg:scopes[scope]['packages'].add(pkg)
                if '/dist/compiled/' in resource.replace('\\','/'):
                    scopes[scope]['coverageGaps'].append('Vendored compiler/runtime component requires independent license/version boundary review: '+resource.replace(str(ROOT),'').replace('\\','/'))
        for trace in files('.next/server') if scope=='hosted' else []:
            if not trace.endswith('.nft.json'):continue
            for target in read(trace).get('files',[]):
                path=(ROOT/trace).parent/target
                if not path.resolve().is_relative_to(ROOT):
                    scopes[scope]['coverageGaps'].append('External trace target withheld');continue
                relative=path.resolve().relative_to(ROOT).as_posix()
                if any(x.startswith('.env') for x in pathlib.PurePosixPath(relative).parts):
                    scopes[scope]['coverageGaps'].append('Private environment trace excluded');continue
                if path.is_file():scopes[scope]['files'].append(relative)
                else:scopes[scope]['coverageGaps'].append('Missing trace target: '+relative)
                pkg=package_id(relative,packages)
                if pkg:scopes[scope]['packages'].add(pkg)
        if not scopes[scope]['files']:scopes[scope]['coverageGaps'].append('No built files')
    scopes['native']['files']=[p for p in scopes['hosted']['files'] if re.search(r'\.(node|dll|dylib|wasm|so(?:\.\d+)*)$',p)]
    scopes['native']['packages']={package_id(p,packages) for p in scopes['native']['files']}-{None}
    scopes['native']['coverageGaps']=['Published native package input inventory only; no final native server bundle supplied. Static component identity, exact build correspondence and relinking material remain unverified.']
    for p in packages:
        if p['name'].startswith('@img/sharp'):
            key=p['name']+'@'+p['version']
            archive='.release/dependency-evidence/'+hashlib.sha256(key.encode()).hexdigest()+'.tgz'
            if (ROOT/archive).is_file():scopes['native']['files'].append(archive);scopes['native']['packages'].add(p['path'])
    scopes['hosted']['coverageGaps'].append('Local Windows build candidate; deployed Linux/Vercel artifact not supplied.')
    native=read('docs/audit/phase3-native-evidence.json')
    manifest={'version':1,'lockSha256':sha(ROOT/'package-lock.json'),'scopes':{},'buildInputs':read('.release/phase3/webpack/browser.json').get('audit',{}).get('buildInputs',[])}
    bypath={p['path']:p for p in packages}
    for scope,item in scopes.items():
        entries=[{'path':p,'sha256':sha(safe(p))} for p in sorted(set(item['files']))]
        libraries=[]
        for pkgpath in sorted(item['packages']):
            p=bypath[pkgpath];key=p['name']+'@'+p['version']
            refs=evidence_refs(new[key].get('licenseTexts',[])) if key in new else evidence_refs(p.get('notices',[]))+evidence_refs(old.get(key,{}))
            refs=list({r['path']:r for r in refs}.values())
            libraries.append({'name':p['name'],'version':p['version'],'path':pkgpath,'license':p['license'],'integrity':p.get('integrity'),'source':p.get('source'),'evidence':refs,'redistributed':scope!='source','requiresSource':bool(re.search(r'(?:MPL|EPL|LGPL|GPL)',p['license'] or ''))})
        if scope=='source':
            schema_license='docs/audit/sbom-schema/LICENSE'
            libraries.append({'name':'CycloneDX specification schemas','version':'1.6','path':'docs/audit/sbom-schema','license':'Apache-2.0','integrity':None,'source':'https://github.com/CycloneDX/specification/tree/55343ba19dee1785acf1ce9191540d5fd7b590db','evidence':[{'path':schema_license,'sha256':sha(ROOT/schema_license)}],'requiresSource':False,'redistributed':True})
        data={'files':entries,'packages':libraries,'coverageGaps':sorted(set(item['coverageGaps'])),'nativeComponents':native['components'] if scope in ['native','hosted'] else []}
        manifest['scopes'][scope]=data
        components=[]
        for p in libraries:
            c={'type':'library','bom-ref':p['path'],'name':p['name'],'version':p['version'],'licenses':[{'license':{'name':p['license'] or 'UNKNOWN'}}], 'properties':[{'name':'openprep:scope','value':'declared dependency reference; package bytes not included' if not p['redistributed'] else 'published native platform input; final bundle not supplied' if scope=='native' else 'vendored source material included' if scope=='source' else 'compiler/tracer observed input; inclusion extent requires review'}]}
            if p['integrity']:
                alg,digest=p['integrity'].split('-',1)
                c['hashes']=[{'alg':{'sha512':'SHA-512','sha256':'SHA-256','sha1':'SHA-1'}[alg],'content':base64.b64decode(digest).hex()}]
                c['properties'].append({'name':'openprep:hash-target','value':'published npm archive, not compiled output'})
            if p['source']:c['externalReferences']=[{'type':'distribution','url':p['source']}]
            components.append(c)
        components += [{'type':'file','bom-ref':'file:'+f['path'],'name':f['path'],'hashes':[{'alg':'SHA-256','content':f['sha256']}]} for f in entries]
        for c in data['nativeComponents']:
            components.append({'type':'library','bom-ref':'native:'+c['name']+'@'+c['version'],'name':c['name'],'version':c['version'],'properties':[{'name':'openprep:evidence','value':'publisher-reported platform union; exact local inclusion NOT VERIFIED'}]})
        bom={'bomFormat':'CycloneDX','specVersion':'1.6','version':1,'metadata':{'component':{'type':'application','name':'OpenPrep '+scope+' inventory','version':'0.1.0','licenses':[{'license':{'id':'MIT'}}]},'properties':[{'name':'openprep:coverage','value':'INCOMPLETE; see docs/audit/phase3-artifacts.json and RELEASE_ARTIFACT_COMPLIANCE.md'}]},'components':components}
        write('docs/SBOM_'+scope.upper()+'.json',bom)
    manifest['sboms']=[{'path':'docs/SBOM_'+scope.upper()+'.json','sha256':sha(ROOT/('docs/SBOM_'+scope.upper()+'.json'))} for scope in SCOPES]
    write('docs/audit/phase3-artifacts.json',manifest)
    print(json.dumps({s:{'files':len(d['files']),'packages':len(d['packages']),'coverageGaps':len(d['coverageGaps'])} for s,d in manifest['scopes'].items()}))

def verify_records(records, root=ROOT):
    errors=[]
    for r in records:
        try:
            p=(root/r['path']).resolve()
            if not p.is_relative_to(root.resolve()) or (root/r['path']).is_symlink() or not p.is_file() or sha(p)!=r['sha256']:errors.append('MISSING_OR_STALE:'+r['path'])
        except (KeyError,TypeError,ValueError):errors.append('INVALID_HASH_RECORD')
    return errors

def permission(records, identity, scope):
    matches=[r for r in records if r.get('identity')==identity and r.get('scope')==scope]
    return len(matches)==1 and matches[0].get('status')=='APPROVED' and all(isinstance(matches[0].get(k),str) and len(matches[0][k].strip())>=2 for k in ['reviewer','evidence','reviewedAt'])

def prerequisite_checks(policy):
    return ['RELEASE_PREREQUISITE_MISSING:'+identity for identity in ['ownership','privateSecurityReporting','conductReporting'] if not permission(policy.get('releasePrerequisites',[]),identity,'release')]

def policy_checks(data, policy, scope, root=ROOT):
    errors=verify_records(data.get('files',[]),root)
    if not data.get('files'):errors.append('NO_ARTIFACT_FILES')
    errors += ['INCOMPLETE_COVERAGE:'+g for g in data.get('coverageGaps',[])]
    if not permission(policy.get('distributionApprovals',[]),'OpenPrep',scope):errors.append('DISTRIBUTION_PERMISSION_MISSING')
    for p in data.get('packages',[]):
        if p.get('redistributed') is False:continue
        identity=p['name']+'@'+p['version']
        if not p.get('evidence'):errors.append('LICENSE_TEXT_MISSING:'+identity)
        errors+=verify_records(p.get('evidence',[]),root)
        if not permission(policy.get('componentPermissions',[]),identity,scope):errors.append('COMPONENT_PERMISSION_MISSING:'+identity)
        notices=[n for n in policy.get('artifactNotices',[]) if n.get('identity')==identity and n.get('scope')==scope]
        if len(notices)!=1 or not notices[0].get('files'):errors.append('REQUIRED_NOTICE_MISSING:'+identity)
        else:
            errors+=verify_records(notices[0]['files'],root)
            if any(n not in data['files'] for n in notices[0]['files']):errors.append('NOTICE_NOT_IN_ARTIFACT:'+identity)
        if p.get('requiresSource'):
            offers=[o for o in policy.get('sourceOffers',[]) if o.get('identity')==identity and o.get('scope')==scope]
            if len(offers)!=1 or not offers[0].get('files') or not permission(policy.get('sourceOffers',[]),identity,scope):errors.append('CORRESPONDING_SOURCE_UNAVAILABLE:'+identity)
            else:
                errors+=verify_records(offers[0]['files'],root)
                if any(f not in data['files'] for f in offers[0]['files']):errors.append('SOURCE_NOT_IN_ARTIFACT:'+identity)
    if data.get('nativeComponents'):errors.append('NATIVE_BUILD_SOURCE_RELINKING_REVIEW_REQUIRED')
    return sorted(set(errors))

def check():
    manifest=read('docs/audit/phase3-artifacts.json'); policy=read('docs/audit/phase3-release-policy.json')
    common=verify_records(manifest.get('buildInputs',[]))+verify_records(manifest.get('sboms',[]))+prerequisite_checks(policy)
    if read('docs/audit/dependency-inventory.json').get('lockSha256')!=sha(ROOT/'package-lock.json'):common.append('STALE_DEPENDENCY_AUDIT')
    current=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import inputs from './scripts/compliance-build-inputs.mjs';process.stdout.write(JSON.stringify(inputs()))"],cwd=ROOT))
    if current!=manifest.get('buildInputs'):common.append('BUILD_INPUT_SET_CHANGED')
    for scope,folder in [('browser','.next/static'),('hosted','.next/server')]:
        observed={f['path'] for f in manifest['scopes'][scope]['files'] if f['path'].startswith(folder+'/')}
        if observed!=set(files(folder)):common.append('ARTIFACT_FILE_SET_CHANGED:'+scope)
    if not manifest.get('buildInputs'):common.append('BUILD_INPUT_EVIDENCE_MISSING')
    if manifest.get('lockSha256')!=sha(ROOT/'package-lock.json'):common.append('STALE_LOCK_INVENTORY')
    if read('package.json')['license']!='MIT' or read('package-lock.json')['packages']['']['license']!='MIT':common.append('UNAUTHORIZED_LICENSE_TRANSITION')
    license_text=(ROOT/'LICENSE').read_text()
    if 'MIT License' not in license_text or 'Permission is hereby granted' not in license_text:common.append('LICENSE_DECLARATION_INCONSISTENT')
    if {f['path'] for f in manifest['scopes']['source']['files']}!=set(source_files()):common.append('SOURCE_FILE_SET_CHANGED')
    results={}
    for scope in SCOPES:
        errors=common+policy_checks(manifest['scopes'][scope],policy,scope)
        content_scope='binary' if scope in ['browser','native'] else scope
        result=subprocess.run(['node','scripts/check-content-distribution.mjs','--scope='+content_scope],cwd=ROOT,capture_output=True,text=True)
        if result.returncode:errors.append('CONTENT_RIGHTS_UNRESOLVED')
        results[scope]={'status':'BLOCKED' if errors else 'PASS','errors':sorted(set(errors))}
    output={'version':1,'releaseReady':all(r['status']=='PASS' for r in results.values()),'scopes':results}
    write('docs/audit/phase3-compliance-report.json',output)
    print(json.dumps({s:{'status':r['status'],'blockers':len(r['errors'])} for s,r in results.items()}))
    return 0 if output['releaseReady'] else 1

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('command',choices=['sbom','check']);args=parser.parse_args()
    try:
        if args.command=='sbom':generate()
        else:sys.exit(check())
    except Exception as error:
        write('docs/audit/phase3-compliance-report.json',{'releaseReady':False,'fatal':str(error)})
        raise
