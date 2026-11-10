import csv,importlib.util,json,pathlib,struct,tempfile,unittest
ROOT=pathlib.Path(__file__).resolve().parents[2]
def module(name,file):
 spec=importlib.util.spec_from_file_location(name,ROOT/'scripts'/file);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m
n=module('metadata','native-metadata.py');c=module('release','release-compliance.py');review=module('review','phase4-content-review.py')
class Phase4Tests(unittest.TestCase):
 def test_elf32_no_dynamic_segment(self):
  body=bytearray(52);body[:6]=b'\x7fELF\1\1';struct.pack_into('<HH',body,42,32,0)
  self.assertEqual(n.elf32(body)['dynamicDependencies'],[])
 def test_elf32_truncation_rejected(self):
  with self.assertRaises((ValueError,struct.error)):n.elf32(b'\x7fELF\1\1')
 def test_wasm_empty_module(self):self.assertEqual(n.wasm(b'\0asm\1\0\0\0')['imports'],[])
 def test_wasm_function_import(self):
  section=b'\1\3env\4test\0\0';body=b'\0asm\1\0\0\0'+b'\2'+bytes([len(section)])+section
  self.assertEqual(n.wasm(body)['imports'],[{'module':'env','name':'test','kind':0}])
 def test_wasm_truncation_rejected(self):
  with self.assertRaises(ValueError):n.wasm(b'\0asm\1\0\0\0\2\x7f')
 def test_wasm_integer_overflow_rejected(self):
  with self.assertRaises(ValueError):n.Reader(b'\xff'*6).uint()
 def test_macho_dependency(self):
  name=b'@rpath/libfixture.dylib\0';length=24+len(name);header=struct.pack('<IIIIIIII',0xfeedfacf,0,0,6,1,length,0,0);command=struct.pack('<IIIIII',0xc,length,24,0,0,0)+name
  self.assertEqual(n.macho(header+command)['dynamicDependencies'],['@rpath/libfixture.dylib'])
 def test_macho_command_out_of_bounds(self):
  with self.assertRaises(ValueError):n.macho(struct.pack('<IIIIIIII',0xfeedfacf,0,0,6,1,1024,0,0))
 def test_missing_grant_stays_blocked(self):self.assertEqual(c.grant_checks({'packages':[{'package':'fixture@1','status':'SIGNED_ARTIFACT_ONLY'}]}),['UNRESOLVED_DEPENDENCY_GRANT:fixture@1'])
 def test_empty_grant_inventory_blocked(self):self.assertTrue(c.grant_checks({}))
 def test_metadata_only_cannot_resolve_grant(self):self.assertTrue(c.grant_checks({'packages':[{'package':'fixture@1','status':'EXACT_VERSION_GRANT_CAPTURED','archiveIntegrityVerified':True}]}))
 def test_resolved_grant_classification(self):
  grant={'kind':'complete grant in exact artifact','file':'LICENSE','sha256':c.sha(ROOT/'LICENSE')}
  self.assertFalse(c.grant_checks({'packages':[{'package':'fixture@1','status':'EXACT_VERSION_GRANT_CAPTURED','archiveIntegrityVerified':True,'licenseTexts':[grant]}]}))
 def test_invalid_approval_timestamp_rejected(self):
  record={'identity':'fixture','scope':'source','status':'APPROVED','reviewer':'Fixture reviewer','evidence':'Fixture evidence','reviewedAt':'not-a-date'}
  self.assertFalse(c.permission([record],'fixture','source'))
 def test_string_integrity_flag_cannot_resolve_grant(self):
  grant={'kind':'complete grant in exact artifact','file':'LICENSE','sha256':c.sha(ROOT/'LICENSE')}
  self.assertTrue(c.grant_checks({'packages':[{'package':'fixture@1','status':'EXACT_VERSION_GRANT_CAPTURED','archiveIntegrityVerified':'false','licenseTexts':[grant]}]}))
 def test_isolated_output_preserves_legacy_paths(self):
  self.assertEqual(c.report_path(), 'docs/audit/phase3-compliance-report.json');self.assertEqual(c.report_path('docs/audit/phase4-artifacts'),'docs/audit/phase4-artifacts/compliance-report.json')
 def test_review_never_approves(self):
  rows=review.rows();self.assertEqual({r['path'] for r in rows},set(review.content_paths()));self.assertTrue(rows);self.assertTrue(all(r['reviewStatus']=='PENDING' for r in rows))
 def test_csv_approval_injection_rejected(self):
  with tempfile.TemporaryDirectory() as directory:
   path=pathlib.Path(directory)/'review.csv';rows=review.rows();rows[0]['reviewStatus']='VERIFIED'
   with path.open('w',newline='',encoding='utf-8') as f:w=csv.DictWriter(f,fieldnames=review.FIELDS);w.writeheader();w.writerows(rows)
   self.assertTrue(review.validate(path)['errors'])
 def test_readiness_workflow_has_no_publish_or_bypass(self):
  text=(ROOT/'.github/workflows/release-readiness.yml').read_text()
  self.assertIn('contents: read',text);self.assertIn('Required release gate',text);self.assertIn('check --output-dir docs/audit/phase4-artifacts --grant-evidence',text)
  self.assertNotIn('continue-on-error',text);self.assertNotIn('npm publish',text);self.assertNotIn('vercel deploy',text);self.assertNotIn('secrets.',text)
if __name__=='__main__':unittest.main()
