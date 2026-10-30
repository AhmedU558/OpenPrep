"""Compare installed copyleft package bytes to exact locked archives, without executing package code."""
import base64,hashlib,json,pathlib,re,tarfile
root=pathlib.Path(__file__).resolve().parents[1]
packages=json.loads((root/'docs/audit/dependency-inventory.json').read_text())['packages']
results=[]
for p in packages:
 if not re.search(r'MPL|EPL',p['license']):continue
 key=p['name']+'@'+p['version'];archive=root/'.release/dependency-evidence'/(hashlib.sha256(key.encode()).hexdigest()+'.tgz')
 item={'package':key,'installPath':p['path'],'licenseDeclaration':p['license'],'files':[],'modifiedInstalledFiles':[],'scope':'Package-root declaration plus recorded file headers; generated/minified/native outputs do not establish complete covered upstream Source Code Form.','secondaryLicenseElection':'NOT_ESTABLISHED; generic license exhibits are not an election.'}
 if not archive.is_file():item['status']='ARCHIVE_NOT_AVAILABLE';results.append(item);continue
 algorithm,expected=p['integrity'].split('-',1)
 if base64.b64encode(hashlib.new(algorithm,archive.read_bytes()).digest()).decode()!=expected:raise ValueError('Covered archive integrity mismatch')
 with tarfile.open(archive) as tar:
  manifest=json.load(tar.extractfile('package/package.json'))
  if manifest['name']+'@'+manifest['version']!=key:raise ValueError('Covered package identity mismatch')
  for member in tar.getmembers():
   if not member.isfile():continue
   relative=member.name.split('/',1)[-1]
   if '..' in pathlib.PurePosixPath(relative).parts:raise ValueError('Unsafe archive member')
   body=tar.extractfile(member).read();digest=hashlib.sha256(body).hexdigest()
   installed=root/p['path']/relative
   header=body[:8192].decode('utf-8',errors='replace')
   codes=re.findall(r'SPDX-License-Identifier:\s*([^\r\n*]+)',header)
   same=hashlib.sha256(installed.read_bytes()).hexdigest()==digest if installed.is_file() else False if (root/p['path']).is_dir() else None
   item['files'].append({'archivePath':member.name,'sha256':digest,'installedMatchesPublished':same,'headerSpdx':codes,'secondaryIncompatibilityHeaderCandidate':bool(re.search('Incompatible With Secondary Licenses',header,re.I))})
   if same is False:item['modifiedInstalledFiles'].append(relative)
 item['status']='INSTALLED_BYTES_MATCH' if (root/p['path']).is_dir() and not item['modifiedInstalledFiles'] else 'UNINSTALLED_PLATFORM' if not (root/p['path']).is_dir() else 'MODIFIED_INSTALLED_FILES_REVIEW_REQUIRED'
 results.append(item)
out={'scope':'Every MPL/EPL lockfile path, including duplicate versions/platforms. No whole-dependency AGPL compatibility conclusion.','packages':results}
(root/'docs/audit/phase3-covered-files.json').write_text(json.dumps(out,indent=2)+'\n')
print(json.dumps({'paths':len(results),'statuses':{s:sum(p['status']==s for p in results) for s in {p['status'] for p in results}},'modified':[p['package'] for p in results if p['modifiedInstalledFiles']]}))
