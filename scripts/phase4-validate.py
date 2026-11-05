"""Validate Phase 4 evidence bytes and preservation without altering prior reports."""
import base64,hashlib,json,pathlib,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
def load(p):return json.loads((ROOT/p).read_text(encoding='utf-8-sig'))
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def capture_refs(value):
 refs=[]
 if isinstance(value,dict):
  path=value.get('file') or value.get('evidenceFile')
  if path and value.get('sha256'):refs.append({'path':path,'sha256':value['sha256']})
  for v in value.values():refs+=capture_refs(v)
 elif isinstance(value,list):
  for v in value:refs+=capture_refs(v)
 return refs
refs=[]
for path in ['phase4-dependency-grants.json','phase4-provenance-verification.json','phase4-native-matrix.json','phase4-windows-chain.json']:
 refs+=capture_refs(load('docs/audit/'+path))
refs=list({r['path']:r for r in refs}.values());errors=[]
for r in refs:
 path=(ROOT/r['path']).resolve()
 if not path.is_relative_to(ROOT) or not path.is_file() or sha(path)!=r['sha256']:errors.append('Evidence missing/stale: '+r['path'])
grants=load('docs/audit/phase4-dependency-grants.json')['packages'];inventory=load('docs/audit/dependency-inventory.json')
if inventory['lockSha256']!=sha(ROOT/'package-lock.json'):errors.append('Lock inventory stale')
for p in grants:
 if not all(p.get(k) is True for k in ['registryIdentityVerified','archiveIdentityVerified','archiveIntegrityVerified']):errors.append('Package identity/integrity not established: '+p['package'])
 file=ROOT/'.release/dependency-evidence'/(hashlib.sha256(p['package'].encode()).hexdigest()+'.tgz');algorithm,expected=p['lockedIntegrity'].split('-',1)
 if not file.is_file() or sha(file)!=p['archiveSha256'] or base64.b64encode(hashlib.new(algorithm,file.read_bytes()).digest()).decode()!=expected:errors.append('Package archive mismatch: '+p['package'])
native=load('docs/audit/phase4-native-matrix.json')
for c in native['components']:
 file=ROOT/'.release/phase3/native-sources'/(hashlib.sha256(c['sourceUrl'].encode()).hexdigest()+'.archive')
 if not file.is_file() or sha(file)!=c['sourceSha256']:errors.append('Source cache mismatch: '+c['name'])
for w in load('docs/audit/phase4-windows-chain.json')['archives']:
 file=ROOT/'.release/phase4/windows'/w['name']
 if not file.is_file() or sha(file)!=w['sha256'] or w['digest']!='sha256:'+w['sha256']:errors.append('Windows publisher digest mismatch: '+w['name'])
baseline=load('.release/phase4/baseline.json')
allowed={'scripts/audit-covered-files.py','scripts/release-compliance.py','scripts/validate-sbom.py','scripts/verify-publisher-provenance.mjs','scripts/webpack-compliance-plugin.mjs'}
for path,digest in baseline.items():
 if path not in allowed and (not (ROOT/path).is_file() or sha(ROOT/path)!=digest):errors.append('Unexpected baseline mutation: '+path)
legacy=[p for p in baseline if p.startswith(('content/','prisma/migrations/','prisma/seed-data/')) or p in ['LICENSE','package-lock.json','legacy/questions.js']]
historical=[p for p in baseline if p.startswith('docs/')]
protected=[p for p in baseline if p.startswith(('content/','prisma/migrations/','prisma/seed-data/','src/')) or p in ['LICENSE','package-lock.json','package.json','legacy/questions.js','prisma/schema.prisma','prisma/seed.ts','docs/audit/content-distribution-approvals.json','docs/audit/phase3-release-policy.json']]
for p in set(historical+protected):
 if not (ROOT/p).is_file() or sha(ROOT/p)!=baseline[p]:errors.append('Protected/historical path changed: '+p)
if subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT).decode().strip()!='87a7d339dc4eb269aebbaa3388a38eb348c9d913':errors.append('HEAD changed')
out={'evidenceFiles':len(refs),'packages':len(grants),'sourceArchives':len(native['components']),'windowsArchives':3,'legacyProtectedPaths':len(legacy),'historicalDocumentsPreserved':len(historical),'protectedFilesPreserved':len(protected),'errors':errors,'exitCode':1 if errors else 0}
(ROOT/'docs/audit/phase4-evidence-validation.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps(out))
raise SystemExit(out['exitCode'])
