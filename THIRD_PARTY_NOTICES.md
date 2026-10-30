# Third-party notices

OpenPrep's proposed AGPL transition does not replace upstream licenses or notices. The current root LICENSE remains MIT pending ownership review. Educational content has separate terms.

- [Full lockfile inventory](docs/audit/dependency-inventory.md): every resolved package path, version, declared license, assessment and evidence gap.
- [Machine-readable inventory](docs/audit/dependency-inventory.json): tarball source, integrity, dependency scope, installed metadata, captured notice paths and SHA-256 hashes.
- [Captured upstream license and NOTICE text](docs/audit/THIRD_PARTY_LICENSE_TEXTS.md): verbatim installed top-level files, including original copyright notices.
- [Licensing assessment and obligations](docs/LICENSING_AUDIT.md).

Reproduce offline with `node scripts/audit-open-source.mjs` after installing the exact lockfile. The script has assertions for its classification and scan boundaries, reads no `.env`, and never accesses a database. Review regenerated files before redistribution. Optional packages absent on the current platform and nested/vendored assets are explicit gaps; this file is not a complete binary-distribution compliance certification.

MIT/ISC/BSD notices must accompany covered redistributed works; Apache-2.0 components retain license/NOTICE and applicable patent and change notices. DOMPurify offers an Apache-2.0 alternative alongside MPL-2.0. MPL files, LGPL libraries/native sharp/libvips artifacts, caniuse-lite's CC-BY data and EPL elkjs require artifact-specific review. Do not assume a development dependency is absent from a container, npm cache or source bundle you distribute.

The Contributor Covenant text is adapted from [version 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/), with attribution retained in CODE_OF_CONDUCT.md. The DCO is referenced from [developercertificate.org](https://developercertificate.org/). The GNU license reference retains the Free Software Foundation's license-document notice; this is not OpenPrep ownership attribution.
