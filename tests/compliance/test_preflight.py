import importlib.util
import pathlib
import tempfile
import unittest

spec=importlib.util.spec_from_file_location('compliance',pathlib.Path(__file__).resolve().parents[2]/'scripts/release-compliance.py')
c=importlib.util.module_from_spec(spec);spec.loader.exec_module(c)

class PreflightTests(unittest.TestCase):
    def setUp(self):
        self.temp=tempfile.TemporaryDirectory();self.addCleanup(self.temp.cleanup)
        self.root=pathlib.Path(self.temp.name)
        (self.root/'license.txt').write_text('fixture grant bytes')
        self.file={'path':'license.txt','sha256':c.sha(self.root/'license.txt')}
        self.pkg={'name':'fixture','version':'1','evidence':[self.file],'requiresSource':False}
        self.data={'files':[self.file],'packages':[self.pkg],'coverageGaps':[]}
        def approval(identity):return {'identity':identity,'scope':'source','status':'APPROVED','reviewer':'Fixture reviewer','evidence':'Synthetic authorization fixture','reviewedAt':'2026-10-30'}
        self.policy={'distributionApprovals':[approval('OpenPrep')],'componentPermissions':[approval('fixture@1')],'artifactNotices':[{'identity':'fixture@1','scope':'source','files':[self.file]}],'sourceOffers':[]}
    def errors(self):return c.policy_checks(self.data,self.policy,'source',self.root)
    def test_unconfigured_operational_channels_block(self):
        self.assertEqual(len(c.prerequisite_checks({})),3)
    def test_operational_approval_scope_cannot_be_reused(self):
        self.assertEqual(len(c.prerequisite_checks({'releasePrerequisites':[dict(self.policy['distributionApprovals'][0],identity='privateSecurityReporting')]})),3)
    def test_complete_synthetic_fixture_passes(self):self.assertEqual(self.errors(),[])
    def test_missing_license_blocks(self):
        self.pkg['evidence']=[];self.assertIn('LICENSE_TEXT_MISSING:fixture@1',self.errors())
    def test_stale_artifact_blocks(self):
        (self.root/'license.txt').write_text('changed');self.assertIn('MISSING_OR_STALE:license.txt',self.errors())
    def test_missing_notice_blocks(self):
        self.policy['artifactNotices']=[];self.assertIn('REQUIRED_NOTICE_MISSING:fixture@1',self.errors())
    def test_notice_must_be_distributed(self):
        self.data['files']=[{'path':'license.txt','sha256':'0'*64}];self.assertIn('NOTICE_NOT_IN_ARTIFACT:fixture@1',self.errors())
    def test_missing_source_offer_blocks(self):
        self.pkg['requiresSource']=True;self.assertIn('CORRESPONDING_SOURCE_UNAVAILABLE:fixture@1',self.errors())
    def test_source_offer_bytes_must_exist(self):
        self.pkg['requiresSource']=True
        offer=dict(self.policy['componentPermissions'][0],files=[{'path':'missing.zip','sha256':'0'*64}])
        self.policy['sourceOffers']=[offer];self.assertIn('MISSING_OR_STALE:missing.zip',self.errors())
    def test_source_offer_must_be_delivered(self):
        self.pkg['requiresSource']=True
        (self.root/'source.zip').write_bytes(b'fixture source')
        self.policy['sourceOffers']=[dict(self.policy['componentPermissions'][0],files=[{'path':'source.zip','sha256':c.sha(self.root/'source.zip')}])]
        self.assertIn('SOURCE_NOT_IN_ARTIFACT:fixture@1',self.errors())
    def test_missing_distribution_permission_blocks(self):
        self.policy['distributionApprovals']=[];self.assertIn('DISTRIBUTION_PERMISSION_MISSING',self.errors())
    def test_conflicting_permissions_block(self):
        self.policy['componentPermissions']*=2;self.assertIn('COMPONENT_PERMISSION_MISSING:fixture@1',self.errors())
    def test_incomplete_composition_blocks(self):
        self.data['coverageGaps']=['unknown vendor'];self.assertIn('INCOMPLETE_COVERAGE:unknown vendor',self.errors())
    def test_path_escape_blocks(self):self.assertTrue(c.verify_records([{'path':'../outside','sha256':'0'*64}],self.root))
    def test_no_artifact_blocks(self):
        self.data['files']=[];self.assertIn('NO_ARTIFACT_FILES',self.errors())
    def test_native_composition_needs_review(self):
        self.data['nativeComponents']=[{'name':'fixture'}];self.assertIn('NATIVE_BUILD_SOURCE_RELINKING_REVIEW_REQUIRED',self.errors())

if __name__=='__main__':unittest.main()
