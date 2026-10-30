"""Read-only exact sharp wrapper artifact evidence, separate from native components."""
import importlib.util,pathlib,json,hashlib,urllib.request,base64,tarfile,re
root=pathlib.Path(__file__).resolve().parents[1];spec=importlib.util.spec_from_file_location('audit',root/'scripts/audit-package-licenses.py');a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)
p=next(p for p in json.loads((root/'docs/audit/dependency-inventory.json').read_text())['packages'] if p['name']=='sharp')
m,url=a.metadata('sharp',p['version']);key='sharp@'+p['version'];cache=root/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
if not cache.exists():cache.write_bytes(urllib.request.urlopen(p['source'],timeout=60).read())
alg,digest=p['integrity'].split('-',1)
if base64.b64encode(hashlib.new(alg,cache.read_bytes()).digest()).decode()!=digest:raise ValueError('Exact sharp artifact integrity mismatch')
out={'package':key,'registryIdentityVerified':m['name']==p['name'] and m['version']==p['version'],'registryUrl':url,'source':p['source'],'integrity':p['integrity'],'integrityVerified':True,'publisherCommit':m.get('gitHead'),'repository':m.get('repository'),'licenseDeclaration':m.get('license'),'licenseTexts':[],'sourceFileHeaders':[],'buildCorrespondence':'NOT_VERIFIED; addon/libvips platform artifacts reviewed separately.'}
with tarfile.open(cache) as tar:
 for member in tar.getmembers():
  if not member.isfile():continue
  body=tar.extractfile(member).read()
  if re.search(r'/(LICENSE|NOTICE)(\.|$)',member.name,re.I):out['licenseTexts'].append(a.capture(body,{'kind':'exact npm artifact license/notice','archiveMember':member.name,'sourceUrl':p['source']}))
  if member.name.endswith(('.cc','.h','.js','.gyp')):out['sourceFileHeaders'].append({'path':member.name,'sha256':hashlib.sha256(body).hexdigest(),'spdx':re.findall(r'SPDX-License-Identifier:\s*([^\n\r*]+)',body[:8192].decode(errors='replace'))})
(root/'docs/audit/phase3-sharp-evidence.json').write_text(json.dumps(out,indent=2)+'\n')
assert out['registryIdentityVerified'] and any(t['fullGrantDetected'] for t in out['licenseTexts'])
print(json.dumps({'package':key,'publisherCommit':out['publisherCommit'],'notices':len(out['licenseTexts']),'sourceHeaders':len(out['sourceFileHeaders'])}))
