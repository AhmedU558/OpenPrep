"""Phase 4 native source-chain and metadata matrix; no native artifact is executed."""
import base64,struct,hashlib,importlib.util,json,pathlib,re,tarfile,urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
def module(name,file):
 spec=importlib.util.spec_from_file_location(name,ROOT/'scripts'/file);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m
parse=module('native_metadata','native-metadata.py');audit=module('upstream','audit-package-licenses.py')
audit.CACHE=ROOT/'.release/phase4/upstream-cache';audit.TEXTS=ROOT/'docs/audit/phase4-texts'
audit.CACHE.mkdir(parents=True,exist_ok=True);audit.TEXTS.mkdir(parents=True,exist_ok=True)
previous=json.loads((ROOT/'docs/audit/phase3-native-evidence.json').read_text());commit=previous['publisherCommit'];repo='lovell/sharp-libvips'
tree=audit.gh('repos/'+repo+'/git/trees/'+commit+'?recursive=1');texts={};documents=[]
for entry in tree['tree']:
 if entry['type']!='blob' or not (entry['path'].startswith('.github/workflows/') or entry['path'] in ['build/posix.sh','build/win.sh','build/wasm.sh','README.md','build.sh','populate-npm-workspace.sh','versions.properties']):continue
 doc=audit.gh('repos/'+repo+'/git/blobs/'+entry['sha']);body=base64.b64decode(doc['content']);texts[entry['path']]=body.decode()
 documents.append(audit.capture(body,{'kind':'exact publisher build-chain input','url':'https://github.com/'+repo+'/blob/'+commit+'/'+entry['path'],'gitBlob':entry['sha'],'sourcePath':entry['path']}))
patches=[]
for path,text in texts.items():
 for url in re.findall(r'https://[^\s|)"\\]+',text):
  if '.patch' not in url:continue
  try:
   body=urllib.request.urlopen(url,timeout=45).read();patches.append(audit.capture(body,{'kind':'patch input','url':url,'referencedBy':path}))
  except Exception as error:patches.append({'url':url,'error':str(error),'status':'UNAVAILABLE'})
compiled=[]
archives={}
for platform in previous['platforms']:
 key=platform['package'];path=ROOT/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
 algorithm,expected=platform['archiveIntegrity'].split('-',1)
 with path.open('rb') as stream:
  if base64.b64encode(hashlib.file_digest(stream,algorithm).digest()).decode()!=expected:raise ValueError('Platform archive integrity mismatch')
 archives[key]={'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'integrityVerified':True}
for item in previous['nativeFiles']:
 key=item['package'];archive=ROOT/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
 with tarfile.open(archive) as tar:body=tar.extractfile(item['path']).read()
 if hashlib.sha256(body).hexdigest()!=item['sha256']:raise ValueError('Native binary differs from captured evidence')
 record={**item,'metadataInspection':'NOT_PARSED'}
 try:
  if item['format']=='ELF' and body[4]==1:record['phase4Metadata']=parse.elf32(body);record['metadataInspection']='VERIFIED_ELF32_METADATA_PARSE'
  elif item['format']=='Mach-O':record['phase4Metadata']=parse.macho(body);record['metadataInspection']='VERIFIED_LOAD_COMMAND_PARSE'
  elif item['format']=='WebAssembly':record['phase4Metadata']=parse.wasm(body);record['metadataInspection']='VERIFIED_MODULE_METADATA_PARSE'
  else:record['metadataInspection']='PHASE_3_DIRECT_IMPORT_EVIDENCE_ONLY'
 except (ValueError,IndexError,UnicodeError,struct.error) as error:record['metadataInspection']='INCOMPLETE';record['parseError']=str(error)
 compiled.append(record)
components=[]
terms={}
for line in previous['inputs']['THIRD-PARTY-NOTICES.md']['text'].splitlines():
 columns=[s.strip() for s in line.split('|')]
 if len(columns)>3:terms[columns[1]]=columns[2]
alias={'archive':'libarchive','exif':'libexif','ffi':'libffi','heif':'libheif','imagequant':'libimagequant','png':'libpng','rsvg':'librsvg','tiff':'libtiff','uhdr':'libultrahdr','vips':'libvips','webp':'libwebp','xml2':'libxml2'}
for c in previous['components']:
 source=ROOT/'.release/phase3/native-sources'/(hashlib.sha256(c['sourceUrl'].encode()).hexdigest()+'.archive')
 actual=hashlib.sha256(source.read_bytes()).hexdigest() if source.is_file() else None
 statuses={'sourceArchiveBytes':'VERIFIED' if actual==c['sourceSha256'] else 'NOT_VERIFIED','licenseCandidateBytes':'VERIFIED','exactCandidateInclusion':'PARTIALLY_VERIFIED: publisher declarations only','buildCorrespondence':'NOT_VERIFIED','replacementRelinking':'NOT_VERIFIED','licenseRoute':'REQUIRES_HUMAN_LEGAL_REVIEW'}
 for n in c['licenses']:
  if hashlib.sha256((ROOT/n['file']).read_bytes()).hexdigest()!=n['sha256']:raise ValueError('Captured notice hash mismatch')
 route=terms.get(alias.get(c['name'],c['name']),'Source-specific alternatives/third-party terms require review')
 if c['name']=='resvg':route='MIT OR Apache-2.0 root/crate alternatives; nested dependencies require review'
 if c['name']=='emscripten':route='MIT/NCSA root alternatives; separately licensed samples/third-party code; emitted runtime inclusion unverified'
 obligation='Preserve applicable grants/copyright/patent/NOTICE and file exceptions; verify actual inclusion and selected route'
 if 'LGPL' in route:obligation+='; corresponding library source/modifications and usable replacement/relinking plus required objects/build/install material'
 if c['name']=='cairo':obligation+='; covered-source/recipient notice route under MPL-1.1 or separately reviewed LGPL alternative; trace utilities differ'
 components.append({**c,'publisherSelectedTerms':route,'distributionObligation':obligation,'phase4Status':statuses,'sourceComplete':'NOT_ESTABLISHED; archive bytes alone do not establish corresponding-source completeness'})
workflowArguments=[{'file':p,'line':i+1,'text':line.strip()} for p,t in texts.items() for i,line in enumerate(t.splitlines()) if re.search(r'wasm|VERSION_VIPS|vips-dev|THIRD.PARTY|rustup|nightly|Cargo.lock|patch|curl',line,re.I)]
out={'publisherCommit':commit,'buildDocuments':documents,'patches':patches,'workflowEvidence':workflowArguments,'platformArchives':archives,'nativeFiles':compiled,'components':components,'limitations':['No native code executed or rebuilt.','Exact source and dependency/patch closure remain incomplete; no replacement/relinking demonstration.','No production/staging database, endpoint or deployment inspected.']}
(ROOT/'docs/audit/phase4-native-matrix.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({'components':len(components),'nativeFiles':len(compiled),'patches':len(patches),'metadata':{s:sum(f['metadataInspection']==s for f in compiled) for s in {f['metadataInspection'] for f in compiled}}}))

if any(c['phase4Status']['sourceArchiveBytes']!='VERIFIED' for c in components) or any(p.get('error') for p in patches) or any(f['metadataInspection']=='INCOMPLETE' for f in compiled):raise SystemExit(1)
