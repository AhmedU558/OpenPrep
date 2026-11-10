# Phase 4 native compliance

2026-10-30. The evidence scripts use static inspection only; audited binaries were not loaded or executed by those scripts. The ordinary local Next.js build used the installed project toolchain and no production/container artifact was accessed. **Zero components are cleared for distribution.**

[Native matrix](audit/phase4-native-matrix.json) rechecks 26 platform archives against locked SRI, 30 native-file hashes and all 30 source archive/notice-candidate hashes. VERIFIED means a particular byte/parser assertion; PARTIALLY VERIFIED means declaration/partial linkage; NOT VERIFIED means an unestablished requirement; HUMAN/LEGAL REVIEW means authority or license-route assessment. Source hash equality identifies bytes; it does not authenticate every original source against an independent publisher signature, establish all file-level exceptions or demonstrate corresponding-source completeness.

Applicable version-specific terms and notice candidates remain in Phase 3's component table and the linked machine records. No alternative was silently elected. Platforms below are publisher-reported unions, not independent identification of every statically linked subcomponent.

| Component | Reported platforms | Source / inclusion | Build / corresponding source / replacement | License route |
|---|---|---|---|---|
| aom 3.15.1 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| archive 3.8.9 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| cairo 1.18.6 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| cgif 0.5.4 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| exif 0.6.26 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| expat 2.8.5 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| ffi 3.8.0 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| fontconfig 2.18.3 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| freetype 2.14.3 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| fribidi 1.0.17 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| glib 2.90.0 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| harfbuzz 14.5.0 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| heif 1.23.5 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| highway 1.4.0 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| imagequant 2.4.1 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| lcms 2.19.1 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| mozjpeg 0826579 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| pango 1.58.2 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| pixman 0.46.4 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| png 1.6.58 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| proxy-libintl 0.5 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| rsvg 2.63.2 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| tiff 4.7.2 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| uhdr 2.0.2 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| vips 8.18.7 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| webp 1.6.0 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| xml2 2.15.4 | Linux, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| zlib-ng 2.3.3 | Linux, Wasm, Windows, macOS | Verified bytes / partial inclusion | Not verified | Human/legal review |
| emscripten 6.0.10 | Wasm | Verified bytes / partial inclusion | Not verified | Human/legal review |
| resvg 0.48.1 | Wasm | Verified bytes / partial inclusion | Not verified | Human/legal review |

## Build chain and modifications

Exact workflows, dispatcher, packaging, versions and POSIX/Windows/Wasm scripts at sharp-libvips ebb95f8add54eee8bed840e3fb587e4cbec857d7 have Git blob, URL and SHA-256 records. The sharp wrapper's separate Apache grant/publisher commit remain in phase3-sharp-evidence.json; it does not cover all embedded libraries.

Five patch bodies were captured: GLib without GRegex, mozjpeg f90668e, librsvg 9106011, libultrahdr PR 383 and libvips C++ soversion. Four URLs bind commits/revisions. PR 383 is mutable: its observed hash is not proof of the historical build's consumed bytes. Scripts additionally edit sources/configuration and regenerate Cargo.lock, use nightly/rustup, mutable images/tool packages and a main-branch notice. Complete patch/dependency/tool closure, actual modified covered files and reproducible source/binary correspondence remain unverified. Assemble exact sources, patches, flags, tools, objects and installation material before claiming completeness.

## Windows

The build-win64-mxe v8.18.7 tag resolves to ef19ca09af2453d127453d677c849ccb37cf5694. All three exact static web ZIPs matched publisher SHA-256 digests. Their libvips-42.dll bytes match the corresponding npm Windows DLLs. This establishes binary acquisition linkage, not corresponding source or replaceability. Each ZIP has one captured notice candidate; development binaries/libraries do not constitute a demonstrated complete source/object offer. [Windows evidence](audit/phase4-windows-chain.json) records exact members and hashes.

| Archive | SHA-256 | Publisher digest matches | npm match |
|---|---|---|---|
| vips-dev-arm64-web-8.18.7-static.zip | `701d49f773fca3995d39215643d72b9e0495e02bf60980dd40ca1af59581f575` | True | 1 DLL |
| vips-dev-x64-web-8.18.7-static.zip | `a736af61d3b46499760efa606e469cb14e060445b1f6fd36a1fa2e75009e1197` | True | 1 DLL |
| vips-dev-x86-web-8.18.7-static.zip | `6f322f878deda8c4aea4e62d68296b6c5e74ecf010e137df897504a6f6d4c029` | True | 1 DLL |

The pinned Windows script fetches THIRD-PARTY-NOTICES from mutable main, then removes it during package cleanup. Actual recipient notice completeness remains blocked. An archive's static label or import-library filename does not prove recipient replacement/relinking.

## Wasm, macOS and Linux

Four Mach-O files now have bounded load/dependency/rpath parses; Wasm has 117 imports and no observed dylink custom section; two ELF32 files now have DT_NEEDED parses, including the ARM addon's libvips-cpp.so.8.18.7 reference. PE/ELF64 direct-import evidence is retained. All bytes match prior hashes. Truncated/overflow/out-of-bounds fixtures are rejected. Load/import metadata cannot enumerate static libraries or prove absence of covered code.

The pinned workflow calls build.sh dev-wasm32, whose dispatcher invokes build/wasm.sh **without an argument**. Its declared recipe therefore selects HEAD. The historically resolved wasm-vips commit remains unproven; no release-time SHA is invented. Publisher documentation describes static Wasm compilation into a combined module. A missing dylink marker alone settles neither composition nor LGPL compliance. Exact modified source/build closure and a recipient relinking demonstration remain unavailable.

## Distribution obligations and inclusion boundaries

For LGPL, approve the applicable version/route; retain grants/copyright/notices, supply matching source/modifications, permit applicable debugging/reverse-engineering and demonstrate replacement/relinking with required application/object/build/installation material. Windows/Wasm static combinations need particular review. No automatic AGPL compatibility conclusion is made.

All 28 MPL/EPL paths were rechecked: eight installed paths match exact archive bytes, 20 platform paths are absent, zero modified installed files found. [Covered-file inventory](audit/phase4-covered-files.json) records members/hashes/SPDX headers. Published generated/minified/native output is not complete covered Source Code Form. Axe tooling, both lightningcss families, DOMPurify's actual alternative and elkjs need covered-source/recipient-notice review. An EPL secondary-license exhibit is not an elkjs election. Cairo's MPL-1.1/LGPL alternatives, GPL trace utilities, resvg's MIT/Apache grants and emscripten's differently licensed samples require actual file/inclusion boundaries.

The Phase 4 compiler/trace inventory records Prisma Studio/elkjs presence only for the local candidate. A source lock reference is not bundled package bytes; absence from one Windows build cannot clear another platform or a container retaining dev tools. Next vendored/generated components still need independent version/source/notice mapping. No actual container digest/base-OS inventory/final native server bundle is available. Unproven requirements remain blockers, and upstream source links/download success do not establish recipient source availability.

## Local artifact observation

The current source inventory declares Prisma Studio-related prisma, @prisma/dev and elkjs. The browser (35 package entries) and hosted (105 entries) compiler/trace candidate inventories contain none of those three names. This is evidence limited to this local build, not proof that generated/vendored code or another platform/container excludes them. Source declarations are not automatically bundled libraries. The independent Next vendor matrix records 14 observed components and candidate license-file hashes in [phase4-artifact-boundaries.json](audit/phase4-artifact-boundaries.json); unknown source versions/notice placement remain blocked. Every native component also has publisherSelectedTerms and an explicit distributionObligation in the native matrix; those are selected-route evidence, not a grant or compatibility approval.
