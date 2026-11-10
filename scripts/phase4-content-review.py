"""Export and validate a human spreadsheet worksheet; never writes a rights approval."""
import argparse,csv,datetime,hashlib,json,pathlib,subprocess
ROOT=pathlib.Path(__file__).resolve().parents[1]
FIELDS=['path','sha256','category','claimedSourceOrAuthor','provenanceEvidence','declaredLicense','reproducePermission','adaptPermission','redistributePermission','attributionRequirements','commercialUseRestrictions','humanReviewer','reviewStatus','privateEvidenceReference']
def content_paths():
 return sorted(p for p in subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode().split('\0') if p and (p.startswith(('content/','prisma/seed-data/')) or p=='legacy/questions.js'))
def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()
def rows():
 provenance=json.loads((ROOT/'docs/audit/content-provenance.json').read_text())['content'];out=[]
 for path in content_paths():
  records=[q for q in provenance if q['file']==path];licenses=sorted({q.get('license','') for q in records});sources=sorted({q.get('source','') for q in records})
  category='generated question payloads' if '/generated/' in path else 'authoring specification/helper' if path.endswith('.ts') else 'legacy demos' if path=='legacy/questions.js' else 'authoring report/artifact'
  out.append(dict(zip(FIELDS,[path,digest(ROOT/path),category,'; '.join(sources) or 'NOT_ESTABLISHED','Prior declaration/owner attestation only; underlying evidence pending','; '.join(licenses) or 'Inspect source declaration; not independently verified','NOT_ESTABLISHED','NOT_ESTABLISHED','NOT_ESTABLISHED','Recorded attribution must be reviewed; no grant inferred','NOT_ESTABLISHED','','PENDING',''])))
 return out

def validate(path):
 with path.open(newline='',encoding='utf-8-sig') as f:
  reader=csv.DictReader(f)
  if reader.fieldnames!=FIELDS:raise ValueError('Unexpected worksheet columns')
  entries=list(reader)
 expected=set(content_paths());seen=set();errors=[]
 for row in entries:
  name=row['path']
  if name not in expected or name in seen:errors.append('Unknown/duplicate path: '+name);continue
  seen.add(name)
  if row['sha256']!=digest(ROOT/name):errors.append('Stale content hash: '+name)
  if row['reviewStatus'] not in ['PENDING','SUBMITTED','DISPUTED','REJECTED']:errors.append('This worksheet cannot approve rights: '+name)
  if row['reviewStatus']=='SUBMITTED' and not all(row[k].strip() for k in ['humanReviewer','privateEvidenceReference']):errors.append('Submitted review lacks reviewer/evidence reference: '+name)
 if seen!=expected:errors.append('Worksheet omits governed paths')
 return {'checked':len(entries),'errors':errors,'decision':'PROPOSALS_ONLY; authoritative approval ledger remains unchanged'}

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('command',choices=['export','validate']);parser.add_argument('path');args=parser.parse_args();path=pathlib.Path(args.path)
 if args.command=='export':
  if path.exists():raise FileExistsError('Refusing to overwrite a human worksheet')
  path.parent.mkdir(parents=True,exist_ok=True)
  with path.open('w',newline='',encoding='utf-8') as f:
   writer=csv.DictWriter(f,fieldnames=FIELDS);writer.writeheader();writer.writerows(rows())
  print(json.dumps({'paths':len(content_paths()),'file':str(path),'approved':0}))
 else:
  result=validate(path);print(json.dumps(result));raise SystemExit(1 if result['errors'] else 0)
