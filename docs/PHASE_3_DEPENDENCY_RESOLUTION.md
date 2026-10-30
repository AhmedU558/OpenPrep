# Phase 3 dependency evidence resolution

2026-10-30. MIT remains active. No ownership declaration, dependency version, lockfile, content bank or migration was changed in this phase. No commit, push, release, deployment, GitHub setting change or existing database connection occurred.

## Individual investigation of the 25 missing texts

The exact registry name/version, declared repository, locked tarball integrity, publisher gitHead where available, resolved commit/tree and license candidates are recorded individually in [phase3-license-investigation.json](audit/phase3-license-investigation.json). Captured text bytes are SHA-256 addressed in `audit/phase3-license-texts/`; each record identifies its archive member or immutable upstream URL. README links and metadata are insufficient. Five packages have complete grants in their exact artifacts/source; eleven Next packages have the exact commit grant bound to their tarball by verified signed provenance. Nine remain blocked. These classifications supply evidence, not legal authorization or proof of every generated binary's source correspondence.

| Package | Evidence result | Publisher/source commit evidence |
|---|---|---|
| @better-auth/utils@0.5.0 | MISSING SUFFICIENT LICENSE TEXT | f03c1c76aff7bfa3f4de4af47b112315c770a0d1 |
| @humanfs/types@0.15.0 | MISSING SUFFICIENT LICENSE TEXT | 85069f193cbacc371c3beb649ce746f8c5a493be |
| @next/env@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/eslint-plugin-next@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-darwin-arm64@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-darwin-x64@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-linux-arm64-gnu@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-linux-arm64-musl@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-linux-x64-gnu@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-linux-x64-musl@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-win32-arm64-msvc@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @next/swc-win32-x64-msvc@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| @prisma/dev@0.24.17 | MISSING SUFFICIENT LICENSE TEXT | Not established; inspect evidence record |
| @types/json5@0.0.29 | MISSING SUFFICIENT LICENSE TEXT | Not established; inspect evidence record |
| client-only@0.0.1 | MISSING SUFFICIENT LICENSE TEXT | Not established; inspect evidence record |
| eslint-config-next@16.4.1 | SIGNED PROVENANCE SOURCE GRANT CAPTURED | 7217011ac0d689026884dd28536a0c7f3c98ba77 |
| esrecurse@4.3.0 | EXACT VERSION GRANT CAPTURED | 8ceb63797813d9ac69572a671b95cf58ffdf35b6 |
| imurmurhash@0.1.4 | EXACT VERSION GRANT CAPTURED | 9f40361c7e2835a9b7b8eaa1cbab2a9f94ee22a2 |
| language-subtag-registry@0.3.23 | MISSING SUFFICIENT LICENSE TEXT | 1e7d67e7f9646f47f0766a04b08522f7df59e932 |
| language-tags@1.0.9 | MISSING SUFFICIENT LICENSE TEXT | ea5aa61e53ced2a18e35783ff00bb2a533f6c77d |
| natural-compare@1.4.0 | MISSING SUFFICIENT LICENSE TEXT | eec83eee67cfac84d6db30cdd65363f155673770 |
| pg-types@2.2.0 | EXACT VERSION GRANT CAPTURED | d9d9dfb87eb50914043cbc178c301b7dd3b0c50d |
| pgpass@1.0.5 | EXACT VERSION GRANT CAPTURED | 4230ed5e417ba6044ea7eb80b7c33db9ec301398 |
| postgres@3.4.7 | EXACT VERSION GRANT CAPTURED | 9b92b65da6a5121545581a6dd5de859c2a70177f |
| stable-hash@0.0.5 | MISSING SUFFICIENT LICENSE TEXT | 1b314f2cc3e9449bc8d49e417670175cf9afd42a |

`esrecurse` has a complete BSD grant in its source header; `postgres` has an actual UNLICENSE file; `imurmurhash`, `pg-types` and `pgpass` contain complete grants, rather than license links, in their version-specific README text. The imurmurhash plain version tag resolves to a commit with matching published source; no publisher gitHead is invented. For the Next family, the exact lowercase `license.md` is at commit `7217011ac0d689026884dd28536a0c7f3c98ba77`.

All 12 available registry provenance bundles (Next family plus better-auth/utils) passed Sigstore verification using npm's bundled verifier: certificate identity constrained to the declared repository/workflow/ref, GitHub OIDC issuer, trusted signing/transparency verification, subject package identity, SHA-512 tarball digest and source commit matching. Public bundles and hashes are retained in `audit/phase3-provenance/` and [verification results](audit/phase3-provenance-verification.json). better-auth/utils still lacks a sufficient license grant: a valid signature cannot supply one. `npm audit signatures --json` independently returned no invalid/missing signatures for installed packages; it does not cover every absent platform package.

For the nine unresolved packages: obtain the rights holder's exact-version grant and publisher/source mapping. humanfs sibling package licenses cannot be assigned to its types package automatically. Prisma's generated dev bundle and Next's client-only package cannot inherit another package's grant without scoped evidence. DefinitelyTyped branch/content metadata is not an authenticated publisher commit. Language registry data and language-tags need their own source/data grant boundaries. natural-compare and stable-hash declarations alone do not supply full grant text. Do not populate approvals, switch licenses or replace these packages to conceal a missing grant.

## Native evidence and platform differences

[Native evidence](audit/phase3-native-evidence.json) records 26 exact platform npm archives, 30 hashed native files, PE/ELF direct imports where parsed, platform selectors and the union of 30 publisher-reported components. Exact source archive and license-candidate bytes were captured for all 30 components. The sharp 0.35.5 wrapper archive independently matched its locked integrity; its full Apache license, 15 source/header hashes and publisher commit `51a990faa26ade5586a4934ac9673c98d8893326` are recorded in audit/phase3-sharp-evidence.json. This is an investigation result, not 30 compliance approvals. Native source SHA-256 values identify retrieved bytes; no independent upstream checksum/signature was established for every archive. File-level notice scanning is limited to files <=2 MiB within four archive path levels; nested third-party source and emitted runtime coverage remain incomplete.

Native Win/Linux/macOS versions report 28 components; Wasm reports 19, with a union adding resvg and an emscripten toolchain identifier. A version declaration does not prove every listed library is present in emitted machine code, nor identify all static subcomponents. `sharp` JavaScript bindings, platform addon and libvips need distinct boundaries. Native platform package declarations include Apache-2.0, LGPL-3.0-or-later, and MIT conjunctions; the wrapper grant cannot replace embedded library terms. Mach-O and Wasm imports were not parsed; ELF import parsing supports ELF64 only. Direct dynamic imports cannot enumerate static dependencies.

The pinned sharp-libvips build scripts at `ebb95f8add54eee8bed840e3fb587e4cbec857d7` contain patch application and source edits, regenerated Cargo.lock, nightly Rust/rustup and other non-frozen inputs. POSIX uses pinned gist patches for GLib, mozjpeg and librsvg; the source offer must include the exact applied patch contents, modified files, build flags and tools. Windows obtains `vips-dev-<arch>-web-8.18.7-static.zip` from build-win64-mxe and reads a notice from mutable main, then removes THIRD-PARTY-NOTICES from the package: its build chain, notices and matching source cannot be cleared from the generic POSIX table. Wasm's default vips ref is HEAD; the actual release workflow argument remains unverified. Do not assert that HEAD was necessarily used for the shipped artifact.

For LGPL combined binaries, select and document the applicable version/route; retain notices and license texts, offer corresponding library source including modifications, preserve permitted reverse engineering for debugging modifications, and provide a usable replacement/relinking method plus required application/object/build/install material for the selected route. A shared-library-looking filename does not prove replaceability; statically combined Windows/Wasm cases need particular review. No build reproduction, replacement/relinking demonstration, full corresponding-source bundle or recipient-tested source offer exists. Native and container release remain blocked.

## MPL and EPL boundaries

[Covered-file evidence](audit/phase3-covered-files.json) examines every one of 28 MPL/EPL lockfile paths. Eight installed paths match their exact archive bytes; 20 platform paths are absent locally. Every archived member hash and observed SPDX header is recorded. No modified installed file was found in these paths. This is limited to installed-versus-published equality; upstream generated files may still derive from modified or incompletely supplied covered source.

Axe-core and its Playwright wrapper use MPL-2.0; lightningcss 1.32.0 and 1.33.0 have wrappers and separately compiled Rust platform packages. The npm wrapper's JavaScript is not a substitute for corresponding Rust Source Code Form. Preserve covered-file notices and provide covered source/modifications and the required executable-source notice when conveying executable form. An unmodified covered file remains MPL; unrelated larger-work files are not automatically relicensed. Review file headers, build inputs and any secondary-license incompatibility notice before choosing a combined-work route. No automatic AGPL compatibility finding was made.

DOMPurify offers an actual MPL-2.0 OR Apache-2.0 alternative. A maintainer may approve the Apache route after retaining the existing dual notice and applicable Apache notices/patent/change terms; this phase does not silently elect a route. elkjs 0.11.1 has EPL-2.0 headers and its complete EPL license; the generic secondary-license exhibit does not establish a component-specific secondary election. A distributed covered executable needs appropriate covered source availability and notice arrangements. Its Prisma Studio tooling boundary must be assessed in the actual shipped artifact; development-only intent cannot exclude it from a container that contains the tool.

Native cairo is separately offered under LGPL-2.1-or-later or MPL-1.1; the publisher table uses MPL-1.1, not MPL-2.0. Its source also includes GPLv3 cairo-trace utilities and differently licensed tests. Their presence in a source archive does not prove inclusion in the library binary. resvg's captured root/crate licenses offer MIT/Apache-2.0; do not label it MPL based on its name. Emscripten source includes differently licensed samples, including CC BY-SA 3.0 material; a compiler version marker does not prove those samples ship in Wasm. All file-level inclusions/exclusions need artifact evidence.

## Decisions still required

The owner must approve exact distribution scopes, component license routes and combination boundaries, actual notice placement, corresponding-source/relinking delivery, and resolution of the nine grants. Existing ownership/contributor and content approval checklists remain mandatory before any AGPL transition. Security and conduct reporting remain unconfigured release blockers. No legal approval was inferred from a passing test or signature.

## Component-by-component source/notice map

Every row has an exact source URL, source archive hash, archive member names, captured text hashes and reporting platforms in phase3-native-evidence.json. Terms below distinguish the pinned publisher's selected-route table from the actual source candidates; they are not a blanket compatibility decision. License/source candidate scanning is not exhaustive for nested files. The imagequant row refers to the retrieved legacy BSD fork/version, not a different current upstream product. freetype's documented FTL alternative must retain its own attribution conditions. aom/WebP/Highway source patent grants and any applicable NOTICE files must accompany the selected distribution. mozjpeg needs its constituent IJG/zlib/BSD terms; a wrapper's single label is insufficient. For every row, exact built inclusion and build correspondence remain unverified.

| Component | Terms evidenced / route needing approval | Distribution work | Retrieved source SHA-256 |
|---|---|---|---|
| aom 3.15.1 | BSD 2-Clause + [Alliance for Open Media Patent License 1.0](https://aomedia.org/license/patent-license/) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `8ca0c52746174603500f0adb6f2a215d69c9ca2aab2acb3caa06fb791d8d01bf` |
| archive 3.8.9 | BSD 2-Clause | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `888c934f9d95648ecb9163dc8e23ab80a476ecb81a8f1154704a227b5b676dde` |
| cairo 1.18.6 | Mozilla Public License 1.1 | MPL-1.1 covered-source/notice route or separately reviewed LGPL alternative | `1c767308174337a74694da0f3ec069c271452163a1ef4540964c50c301f157d4` |
| cgif 0.5.4 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `83a70a15bc2da41f081a44ebc58ee48e2e1d524a6d3fdb4a24064afa08d5ad4d` |
| exif 0.6.26 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `4a055ed6575e61ca46c3172be3c753cc16c9becd0f99ec71d58dd0e471476c0c` |
| expat 2.8.5 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `1e727b8933ec51a77a9a9d9afcf8e688bce45d907c13e36ab7393fe36e703182` |
| ffi 3.8.0 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `7da3e2d9a171eb0a038f592ecad3ff2bb2550f3496d87b3b29ad0cf4430c0db4` |
| fontconfig 2.18.3 | [fontconfig License](https://gitlab.freedesktop.org/fontconfig/fontconfig/blob/main/COPYING) (BSD-like) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `9ae01e1d53acdef56010c5451cd34aa41d325b2faccd8606448d8fa01b2496b3` |
| freetype 2.14.3 | [freetype License](https://git.savannah.gnu.org/cgit/freetype/freetype2.git/tree/docs/FTL.TXT) (BSD-like) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `dc49de6b01a266eef4876a4dd34d9842c475d3e28ff2eff63bd2fb760ab56261` |
| fribidi 1.0.17 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `6949dcde27d41cebad1fd741fcafc36d55a1020d2d872d4a6eb3914caabbada2` |
| glib 2.90.0 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `17d15cac2af80a33271127408e0abc2748eb297c595c2a26409e81e14e7d1b8f` |
| harfbuzz 14.5.0 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `97ec7488a46b974e18e08ee774af93173e7e1dbf738424796eb315ebcb735ec5` |
| heif 1.23.5 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `fd9036064c4432f0550d15072ddf34956a248279ee9aeaff0fba3fa0f77d8f1a` |
| highway 1.4.0 | BSD 3-Clause | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `e72241ac9524bb653ae52ced768b508045d4438726a303f10181a38f764a453c` |
| imagequant 2.4.1 | [BSD 2-Clause](https://github.com/lovell/libimagequant/blob/main/COPYRIGHT) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `47d2a84b7b1052975c9d50a3d4e3cacbf57b43d84a4c3131210848ead9964dfb` |
| lcms 2.19.1 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `bfc54f7bab59fbc921012014a8032e4cba4abd46db47d46b76416a8c0b2815c8` |
| mozjpeg 0826579 | [zlib License, IJG License, BSD 3-Clause](https://github.com/mozilla/mozjpeg/blob/master/LICENSE.md) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `b680167bd5d9afebdd576a12f8c49d2c9066a3b92ef96a2b2c5f7829b8600fe5` |
| pango 1.58.2 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `342385b6ca3b7c73455d7c80a13b7dbe4489e00bc3bd4c5bd6ed4dce421e374a` |
| pixman 0.46.4 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `d09c44ebc3bd5bee7021c79f922fe8fb2fb57f7320f55e97ff9914d2346a591c` |
| png 1.6.58 | [libpng License](https://github.com/pnggroup/libpng/blob/master/LICENSE) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `a9d4df463d36a6e5f9c29bd6f4967312d17e996c1854f3511f833924eb1993cf` |
| proxy-libintl 0.5 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `f7a1cbd7579baaf575c66f9d99fb6295e9b0684a28b095967cfda17857595303` |
| rsvg 2.63.2 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `852b18e1a00b8605528825a27dc7748bff2a5dd254028f59dc22a34ea57e81b6` |
| tiff 4.7.2 | [libtiff License](https://gitlab.com/libtiff/libtiff/blob/master/LICENSE.md) (BSD-like) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `62b15f44c10106065211efa22a2dc77937bd97ee1f6e3afd2c9659010de112eb` |
| uhdr 2.0.2 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `aa8d193bb887c348c419780511dd03b374f4e07af8812b6d3f80c8537cf1ef2c` |
| vips 8.18.7 | LGPLv3 | Notices plus reviewed corresponding-source/relinking route | `5baaead3b0bb20ffdb9e9ff09aa9fda08620923df77b63b436654cb5e0b3bf94` |
| webp 1.6.0 | New BSD License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `e4ab7009bf0629fd11982d4c2aa83964cf244cffba7347ecd39019a9e38c4564` |
| xml2 2.15.4 | MIT License | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `98087fd181d9070724f3fbc65c7377db03038eb92bd882374daff44940138821` |
| zlib-ng 2.3.3 | [zlib License](https://github.com/zlib-ng/zlib-ng/blob/develop/LICENSE.md) | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `f9c65aa9c852eb8255b636fd9f07ce1c406f061ec19a2e7d508b318ca0c907d1` |
| emscripten 6.0.10 | MIT/NCSA root alternatives; samples/third-party files have additional terms; runtime inclusion unverified | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `182f4b8aa2b649c434da199886c637f32b017259f97907554e7c31385cf401b6` |
| resvg 0.48.1 | MIT OR Apache-2.0 root/crate grants; inspect nested dependency notices | Preserve actual grant/copyright, patent/NOTICE and file-specific exceptions as applicable | `40dafea6b4b9d01e9d28b6d49f1e912daf3e9055676ad9179a5a2db6e7386945` |
