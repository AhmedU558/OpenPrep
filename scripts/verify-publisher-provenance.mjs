import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// npm supplies Sigstore; this audit does not add it to the application dependency tree.
if (!process.env.npm_execpath) throw new Error('Run via npm run compliance:provenance so the npm verification runtime is explicit.');
const npmRequire = createRequire(process.env.npm_execpath);
const sigstore = npmRequire('sigstore');
const doc = JSON.parse(readFileSync('docs/audit/phase3-license-investigation.json', 'utf8'));
const prior = JSON.parse(readFileSync('docs/audit/dependency-compliance-evidence.json', 'utf8')).artifacts;
const directory = 'docs/audit/phase3-provenance';
mkdirSync(directory, { recursive: true });
const results = [];
for (const item of doc.packages.filter((p) => p.registryAttestation?.url)) {
  const result = { package: item.package, verified: false };
  try {
    const url = new URL(item.registryAttestation.url);
    if (url.hostname !== 'registry.npmjs.org' || url.protocol !== 'https:') throw new Error('Untrusted attestation endpoint');
    const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
    if (!response.ok) throw new Error(`Attestation fetch ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    const attestations = JSON.parse(bytes.toString()).attestations;
    const bundle = attestations.find((a) => a.predicateType === 'https://slsa.dev/provenance/v1')?.bundle;
    if (!bundle?.dsseEnvelope?.payload) throw new Error('No SLSA provenance envelope');
    const statement = JSON.parse(Buffer.from(bundle.dsseEnvelope.payload, 'base64').toString());
    const subject = statement.subject?.find((s) => decodeURIComponent(s.name) === `pkg:npm/${item.package}`);
    const digest = Buffer.from(prior[item.package].integrity.split('-')[1], 'base64').toString('hex');
    if (!subject || subject.digest?.sha512 !== digest) throw new Error('Provenance subject does not match the exact locked package');
    const definition = statement.predicate?.buildDefinition;
    const workflow = definition?.externalParameters?.workflow;
    if (workflow?.repository !== `https://github.com/${item.repository}` || !workflow.path?.startsWith('.github/workflows/') || !workflow.ref?.startsWith('refs/tags/')) throw new Error('Unexpected publisher workflow identity');
    const commit = definition.resolvedDependencies?.find((d) => d.uri.startsWith(`git+https://github.com/${item.repository}@`))?.digest?.gitCommit;
    if (!/^[a-f0-9]{40}$/.test(commit) || commit !== item.sourceCommit) throw new Error('Attested source commit differs from the inspected license commit');
    await sigstore.verify(bundle, {
      certificateIdentityURI: `${workflow.repository}/${workflow.path}@${workflow.ref}`,
      certificateIssuer: 'https://token.actions.githubusercontent.com',
    });
    const sha256 = createHash('sha256').update(bytes).digest('hex');
    const file = `${directory}/${sha256}.json`;
    writeFileSync(file, bytes);
    Object.assign(result, { verified: true, sourceCommit: commit, subjectSha512: subject.digest.sha512, workflow, url: url.href, file, sha256, verifier: 'npm bundled sigstore (trusted-root/transparency and certificate identity verification)' });
  } catch (error) { result.error = error.message; }
  item.provenanceVerification = result;
  if (result.verified && item.licenseTexts.some((n) => n.fullGrantDetected && n.sourceBinding)) item.status = 'SIGNED_PROVENANCE_SOURCE_GRANT_CAPTURED';
  results.push(result);
}
writeFileSync('docs/audit/phase3-license-investigation.json', JSON.stringify(doc, null, 2) + '\n');
writeFileSync(resolve('docs/audit/phase3-provenance-verification.json'), JSON.stringify({ date: '2026-10-30', npmRuntime: process.env.npm_execpath.replaceAll('\\', '/'), results }, null, 2) + '\n');
console.log(JSON.stringify({ checked: results.length, verified: results.filter((r) => r.verified).length, failures: results.filter((r) => !r.verified).map((r) => ({ package: r.package, error: r.error })) }));
if (results.some((r) => !r.verified)) process.exitCode = 1;
