"""Inspect exact Windows development archives as data; never execute vendor artifacts."""
import base64,hashlib,importlib.util,json,pathlib,re,urllib.request,zipfile
ROOT=pathlib.Path(__file__).resolve().parents[1];spec=importlib.util.spec_from_file_location('audit',ROOT/'scripts/audit-package-licenses.py');a=importlib.util.module_from_spec(spec);spec.loader.exec_module(a)
a.CACHE=ROOT/'.release/phase4/upstream-cache';a.TEXTS=ROOT/'docs/audit/phase4-texts';cache=ROOT/'.release/phase4/windows';cache.mkdir(parents=True,exist_ok=True)
repo='libvips/build-win64-mxe';release=a.gh('repos/'+repo+'/releases/tags/v8.18.7');ref=a.gh('repos/'+repo+'/git/ref/tags/v8.18.7')['object']
while ref['type']=='tag':ref=a.gh('repos/'+repo+'/git/tags/'+ref['sha'])['object']
result={'repository':repo,'releaseUrl':release['html_url'],'tagCommit':ref['sha'],'archives':[],'sourceCorrespondence':'NOT_ESTABLISHED: development binary ZIP is not complete corresponding source.'}
for asset in release['assets']:
 if not re.fullmatch(r'vips-dev-(x64|x86|arm64)-web-8\.18\.7-static\.zip',asset['name']):continue
 row={k:asset.get(k) for k in ['name','size','digest','browser_download_url']};row['noticeCandidates']=[];row['nativeFiles']=[]
 try:
  if asset['size']>100*1024*1024:raise ValueError('Archive exceeds 100 MiB audit limit')
  file=cache/asset['name']
  if not file.exists():
   with urllib.request.urlopen(asset['browser_download_url'],timeout=60) as response,file.with_suffix('.partial').open('wb') as out:
    total=0
    while data:=response.read(1024*1024):
     total+=len(data)
     if total>100*1024*1024:raise ValueError('Archive exceeded audit limit')
     out.write(data)
   file.with_suffix('.partial').replace(file)
  row['sha256']=hashlib.sha256(file.read_bytes()).hexdigest()
  if asset.get('digest') and asset['digest']!='sha256:'+row['sha256']:raise ValueError('Publisher digest mismatch')
  row['publisherDigestMatches']=bool(asset.get('digest'))
  with zipfile.ZipFile(file) as archive:
   for info in archive.infolist():
    if info.is_dir():continue
    if re.search(r'\.(?:dll|a)$',info.filename):
     row['nativeFiles'].append({'path':info.filename,'sha256':hashlib.sha256(archive.read(info)).hexdigest()})
    if info.file_size<2*1024*1024 and re.search(r'(?:^|/)(?:LICENSE|COPYING|NOTICE|COPYRIGHT|THIRD.PARTY)',info.filename,re.I) and not info.filename.endswith('.pdf'):
     body=archive.read(info);row['noticeCandidates'].append(a.capture(body,{'kind':'exact Windows binary ZIP notice candidate','archiveMember':info.filename,'sourceUrl':asset['browser_download_url']}))
  row['status']='BINARY_BYTES_AND_NOTICE_CANDIDATES_CAPTURED'
 except Exception as error:row['status']='INCOMPLETE';row['error']=str(error)
 result['archives'].append(row)
previous=json.loads((ROOT/'docs/audit/phase3-native-evidence.json').read_text())['nativeFiles']
for asset in result['archives']:
 asset['npmNativeMatches']=[{'zipPath':f['path'],'npmPackage':n['package'],'npmPath':n['path'],'sha256':f['sha256']} for f in asset['nativeFiles'] for n in previous if f['sha256']==n['sha256']]
(ROOT/'docs/audit/phase4-windows-chain.json').write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps({'archives':len(result['archives']),'statuses':[r['status'] for r in result['archives']],'tagCommit':ref['sha']}))


if len(result['archives'])!=3 or any(a['status']!='BINARY_BYTES_AND_NOTICE_CANDIDATES_CAPTURED' for a in result['archives']):raise SystemExit(1)
