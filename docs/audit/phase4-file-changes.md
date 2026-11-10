# Phase 4 changed-file manifest

Compared with the initial 448-path public-safe working-tree snapshot at HEAD 87a7d339dc4eb269aebbaa3388a38eb348c9d913. It includes and preserves the pre-existing dirty docs/audit/phase3-compliance-report.json; that prior change is not attributed to Phase 4. Hashes below describe current local bytes, not normalized Git blobs. No baseline file was removed. All 203 historical document/audit files, 65 original protected paths and 165 expanded application/content/approval paths remain unchanged (overlapping sets). Exactly five existing audit/instrumentation tools were intentionally modified; application behavior, root license/notices, content/seed, migrations, dependency versions/package-lock and all approval ledgers remain untouched. Ignored caches/build output/logs are excluded. No existing DB access, new DB/container, migration, commit, push, release, visibility/settings change or deployment occurred.

5 modified baseline files; 47 added files below, plus this manifest.

| Status | Path | SHA-256 |
|---|---|---|
| ADDED | `.github/workflows/release-readiness.yml` | `741ba64ae3dc17903c0eaa3cb04d27e392eeccea10c7b1ecac8339cd9ce01d94` |
| ADDED | `docs/PHASE_4_DEPENDENCY_GRANTS.md` | `f89cf70dc0804c2fd05080c3c00f62fc2eec48f3cbd8050953af199af1c471b6` |
| ADDED | `docs/PHASE_4_HOSTED_CI_READINESS.md` | `3d3831ac55d05d4623c489863de9fa7ca9f2014fff3c827cb0e2bff44954490e` |
| ADDED | `docs/PHASE_4_NATIVE_COMPLIANCE.md` | `f4531e0f54803d9b5c6e0f3b4bda069bd708ed8b1338cc173d5f8e01b242db9f` |
| ADDED | `docs/PHASE_4_OWNERSHIP_AND_CONTENT_REVIEW.md` | `c445daabc572349cac7195786357ec6b7b7f70ff6c719dda13323aed05c891b9` |
| ADDED | `docs/PHASE_4_READINESS.md` | `4a3ed28056b5ad7f23d39c27b4d2fef2b20cd296fdb749fdb3a86c017d1ce50f` |
| ADDED | `docs/PHASE_4_SECURITY_GOVERNANCE.md` | `80d0316e2d5465108b00d7bc5c4948607dc44ea87496eee660eaffb84136d70c` |
| ADDED | `docs/audit/phase4-artifact-boundaries.json` | `6f517115fe369e26674e3d54afeb3f3b45a6da4c2d5f9e4c844ade0460b99f9b` |
| ADDED | `docs/audit/phase4-artifacts/SBOM_BROWSER.json` | `c3fb390e8d89678343aa351e3e1c3ce7a3a946cd6952ceee5f078463c0a8dab6` |
| ADDED | `docs/audit/phase4-artifacts/SBOM_CONTAINER.json` | `d05c04dd8cba1b613c41a319bca10684b74201b28f2ac97d1f07f6769df6033e` |
| ADDED | `docs/audit/phase4-artifacts/SBOM_HOSTED.json` | `75dbdf4281f6fa9bebbf5db5882c384b5d6e27c0b83cbf6d50b87ac75318a4c9` |
| ADDED | `docs/audit/phase4-artifacts/SBOM_NATIVE.json` | `20432c1286abfc115fba278656ed59546b71faa80ff15fa9c2bfbbd8c1154874` |
| ADDED | `docs/audit/phase4-artifacts/SBOM_SOURCE.json` | `850778537d965a802fc44b38017f82e8029f2061637e353abef13bac1b416dae` |
| ADDED | `docs/audit/phase4-artifacts/artifacts.json` | `c195504cc421aaddad7d75b43e8d08a717881c4dc600de47003192da76ba384a` |
| ADDED | `docs/audit/phase4-artifacts/compliance-report.json` | `6f739145f969930c67cdcebd4a52dd85edddf116ea18a42c5d7d8ef3a47d98e4` |
| ADDED | `docs/audit/phase4-content-review.csv` | `dd3ed1c2d675fdd5fa4da9ed7b49b9fe8f6d43d3fb9e8f556082d36c9a23f124` |
| ADDED | `docs/audit/phase4-covered-files.json` | `c42ab7aa447353278eb4acd7047fec402a637e5d5516df2ef8959597193602ad` |
| ADDED | `docs/audit/phase4-dependency-grants.json` | `b518c3cd34c1c67bbc8ecc6723a0ea32d8534a4cbe7687bfcb7146e36bf7dab8` |
| ADDED | `docs/audit/phase4-evidence-validation.json` | `9842b832dbba0ea9c08a452c18db4fb988eac83b207e9982a5127b375aefcaba` |
| ADDED | `docs/audit/phase4-hosted-baseline.json` | `5b38308c4cf3b33096fd08eaa13d61a5c080c51f9f037fa5d03c26985d84b4e7` |
| ADDED | `docs/audit/phase4-native-matrix.json` | `39af270bf6a5f74000b12eb69639b8975f54c1c0ed4b21e85c33dee047d4e486` |
| ADDED | `docs/audit/phase4-provenance-verification.json` | `ad9e17fe1922f82f10bc6890157151d30cb5771a215605db2894d8f82dea0cc5` |
| ADDED | `docs/audit/phase4-provenance/d057f539e1c94384140ad225861e08014292fb5925c2a5db2720376e112e0865.json` | `d057f539e1c94384140ad225861e08014292fb5925c2a5db2720376e112e0865` |
| ADDED | `docs/audit/phase4-texts/0a0c730ee600f2b95298ead170a84e0b7933a8878db0664c9858321f416cda7d.txt` | `0a0c730ee600f2b95298ead170a84e0b7933a8878db0664c9858321f416cda7d` |
| ADDED | `docs/audit/phase4-texts/256b7d6f8c973bb53b20cff5171c7117d6b35d3aa4e72d22cb906f4fe1e2c890.txt` | `256b7d6f8c973bb53b20cff5171c7117d6b35d3aa4e72d22cb906f4fe1e2c890` |
| ADDED | `docs/audit/phase4-texts/333031b3b49bf1a16d0b9d6812d98f67c404218932ef8c0b389388524a524b36.txt` | `333031b3b49bf1a16d0b9d6812d98f67c404218932ef8c0b389388524a524b36` |
| ADDED | `docs/audit/phase4-texts/52f2d9d76b07d4b4ad1720659b1e9bbc76121b85f21d9d084a85af28014473f3.txt` | `52f2d9d76b07d4b4ad1720659b1e9bbc76121b85f21d9d084a85af28014473f3` |
| ADDED | `docs/audit/phase4-texts/52f8b2931fa6d496c792a2ed808177414ac24f2f87b667bb13fbc21bf1d99758.txt` | `52f8b2931fa6d496c792a2ed808177414ac24f2f87b667bb13fbc21bf1d99758` |
| ADDED | `docs/audit/phase4-texts/53a0ae90da3ef3e212ae696c7cfa97f9f0f0d48092f5fffd8130f9275b5959b7.txt` | `53a0ae90da3ef3e212ae696c7cfa97f9f0f0d48092f5fffd8130f9275b5959b7` |
| ADDED | `docs/audit/phase4-texts/57658db2a11ae964755e513b01db21bcfa408c350b11b3a6ef9bc8576fb749ba.txt` | `57658db2a11ae964755e513b01db21bcfa408c350b11b3a6ef9bc8576fb749ba` |
| ADDED | `docs/audit/phase4-texts/7fef71fd4cc0c9556f9218a707d70ad13998dd4ea272ac281cade531b2ebc12f.txt` | `7fef71fd4cc0c9556f9218a707d70ad13998dd4ea272ac281cade531b2ebc12f` |
| ADDED | `docs/audit/phase4-texts/8b841d2ec8feb964fa76859075e0e0c41b69136ba143cf0d26469d9bebc19231.txt` | `8b841d2ec8feb964fa76859075e0e0c41b69136ba143cf0d26469d9bebc19231` |
| ADDED | `docs/audit/phase4-texts/a65f87cadf3a6052e44d6314c906f6e2891352f82646b8a6f0b8fcf2c1891e7c.txt` | `a65f87cadf3a6052e44d6314c906f6e2891352f82646b8a6f0b8fcf2c1891e7c` |
| ADDED | `docs/audit/phase4-texts/a960e41223db945832cd63f92ed38e9c297f58a5f72c6f4adea80f805fc12589.txt` | `a960e41223db945832cd63f92ed38e9c297f58a5f72c6f4adea80f805fc12589` |
| ADDED | `docs/audit/phase4-texts/b1f2930a11292e529de137c7eb723850e0cc0969b1a2b0358196389312acd272.txt` | `b1f2930a11292e529de137c7eb723850e0cc0969b1a2b0358196389312acd272` |
| ADDED | `docs/audit/phase4-texts/c0ad634f7c2ac8994f831dd0bcb5c60043db7ba4ddd9cc2dbc3703b15f4ec7e5.txt` | `c0ad634f7c2ac8994f831dd0bcb5c60043db7ba4ddd9cc2dbc3703b15f4ec7e5` |
| ADDED | `docs/audit/phase4-texts/dc626520dcd53a22f727af3ee42c770e56c97a64fe3adb063799d8ab032fe551.txt` | `dc626520dcd53a22f727af3ee42c770e56c97a64fe3adb063799d8ab032fe551` |
| ADDED | `docs/audit/phase4-texts/f32e344b1355b6bcf3836e7f25e2c2de7f25eefeb8c96d02711ad3fcea487488.txt` | `f32e344b1355b6bcf3836e7f25e2c2de7f25eefeb8c96d02711ad3fcea487488` |
| ADDED | `docs/audit/phase4-validation.json` | `f8a84c1f0d50bd30429a40ae21c4c81aa2dbbac0efe97a4037f329ee68031c5d` |
| ADDED | `docs/audit/phase4-windows-chain.json` | `cccd18ef4d985b14e38d5a2b665bfb5e731f19d48c6457c368c6ca3a1b24fa92` |
| MODIFIED | `scripts/audit-covered-files.py` | `4ded4d4fa724c8ae4a29704fbd5944f5a3ed3c01f5c64fa4bfbe6a31387a3b79` |
| ADDED | `scripts/native-metadata.py` | `c2dbf14e04cc2e5ae57f2e6b1c9a303b208bd7f0db0e5a4c29d93926650fd046` |
| ADDED | `scripts/phase4-content-review.py` | `f7958d254a7a26b4648930009a68308d1f5a247c082cbfa1430b1bd5739234d1` |
| ADDED | `scripts/phase4-grants.py` | `826871907e3bcc29f7772548ea4acf9f060fb0ba5cd3908ff385f64927c991d1` |
| ADDED | `scripts/phase4-native.py` | `200792ae3c8fb6d1003d4f8b97d95e8d16d3f5543daf6807b628f1d36e1cc2f4` |
| ADDED | `scripts/phase4-validate.py` | `8bd99a55297d4b21c5a412ad8707fc2f445a777dc7c48bd0998930152a6a1083` |
| ADDED | `scripts/phase4-windows.py` | `d8e7b0193590d03208c58575c71668c016544a1eb1ddf5c44cc3671fa4a4205c` |
| MODIFIED | `scripts/release-compliance.py` | `0cd750a405b9a7131bdb28db73404dd6c0d2be38ea783705f22984692c58e452` |
| MODIFIED | `scripts/validate-sbom.py` | `ad48f130eb5ac2acb28b4d7fb95f05932552768553f8c83581b5bfec9d5e3d66` |
| MODIFIED | `scripts/verify-publisher-provenance.mjs` | `90bfae6661addf3870749218ae4ac7dbf5614726e81ea472a68a9d5b81de914a` |
| MODIFIED | `scripts/webpack-compliance-plugin.mjs` | `ee4699bb699293c955fc0f4a08e0d40783eefc749d5d4a5d7d98f3fc778503b9` |
| ADDED | `tests/compliance/test_phase4.py` | `80a7327e3977f7c985d1778371dd404306352fdbd451d7e719c9e9a18dc910fe` |
| ADDED | `docs/audit/phase4-file-changes.md` | Self hash excluded |
