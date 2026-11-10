"""Phase 4 exact-package evidence refresh. No historical output or legal approvals are changed."""
import base64,concurrent.futures,hashlib,importlib.util,json,pathlib,re,tarfile
ROOT=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('prior_audit',ROOT/'scripts/audit-package-licenses.py');audit=importlib.util.module_from_spec(spec);spec.loader.exec_module(audit)
audit.CACHE=ROOT/'.release/phase4/upstream-cache';audit.TEXTS=ROOT/'docs/audit/phase4-texts'
audit.CACHE.mkdir(parents=True,exist_ok=True);audit.TEXTS.mkdir(parents=True,exist_ok=True)

def inspect(pair):
 key,old=pair
 result=audit.inspect(pair)
 archive=ROOT/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
 result['archiveSha256']=hashlib.sha256(archive.read_bytes()).hexdigest()
 result['archiveSource']=old['source'];result['lockedIntegrity']=old['integrity'];result['embeddedGrantCandidates']=[]
 with tarfile.open(archive) as tar:
  manifest=min((m for m in tar.getmembers() if m.isfile() and m.name.endswith('/package.json')),key=lambda m:len(m.name.split('/')))
  meta=json.load(tar.extractfile(manifest))
  if meta['name']+'@'+meta['version']!=key:raise ValueError('Package archive identity mismatch')
  result['archiveIdentityVerified']=True
  result['declaredProjectLinks']={k:meta.get(k) for k in ['repository','homepage','bugs','license']}
  for m in tar.getmembers():
   if not m.isfile() or m.size>40*1024*1024:continue
   body=tar.extractfile(m).read()
   for match in re.finditer(rb'Permission is hereby granted|Redistribution and use in source and binary forms|Apache License',body):
    result['embeddedGrantCandidates'].append({'archiveMember':m.name,'byteOffset':match.start(),'scope':'Candidate embedded text only; no whole-package grant inferred.','fileSha256':hashlib.sha256(body).hexdigest()})
 if result.get('repository') and result.get('sourceCommit'):
  repo=result['repository'];commit=result['sourceCommit']
  tree=audit.gh('repos/'+repo+'/git/trees/'+commit+'?recursive=1')
  result['allLicenseLikePaths']=[b['path'] for b in tree['tree'] if b['type']=='blob' and re.search(r'(?:licen[sc]e|copying|copyright|legal)',b['path'],re.I)][:200]
  result['treeCompleteness']='TRUNCATED' if tree.get('truncated') else 'COMPLETE'
  # Root documentation can contain a full grant; links and sibling grants remain insufficient.
  for entry in tree['tree']:
   if entry['type']!='blob' or '/' in entry['path'] or not re.match(r'(readme|copying|copyright)',entry['path'],re.I):continue
   doc=audit.gh('repos/'+repo+'/git/blobs/'+entry['sha']);body=base64.b64decode(doc['content'])
   if audit.complete_grant(body.decode(errors='replace')):
    result.setdefault('upstreamDocumentationGrantCandidates',[]).append(audit.capture(body,{'kind':'exact commit root document grant candidate','url':'https://github.com/'+repo+'/blob/'+commit+'/'+entry['path'],'sourceBinding':result.get('sourceBinding'),'gitBlob':entry['sha']}))
 result['humanApproval']='NOT_PROVIDED'
 return result

if __name__=='__main__':
 previous=json.loads((ROOT/'docs/audit/phase3-license-investigation.json').read_text(encoding='utf-8'))['packages']
 old=json.loads((ROOT/'docs/audit/dependency-compliance-evidence.json').read_text())['artifacts']
 targets={p['package']:old[p['package']] for p in previous if p['status']=='MISSING_SUFFICIENT_LICENSE_TEXT'}
 if len(targets)!=9:raise ValueError('Expected the nine documented Phase 3 gaps')
 with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:results=list(pool.map(inspect,targets.items()))
 out={'date':'2026-10-30','scope':'Nine exact-version Phase 3 gaps; grant candidates are not legal approvals.','packages':results}
 (ROOT/'docs/audit/phase4-dependency-grants.json').write_text(json.dumps(out,indent=2)+'\n')
 print(json.dumps({'investigated':len(results),'statuses':{s:sum(p['status']==s for p in results) for s in {p['status'] for p in results}}}))
