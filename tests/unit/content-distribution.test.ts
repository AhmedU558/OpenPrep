import { describe, expect, it } from 'vitest';
import { spawnSync } from 'node:child_process';
// @ts-expect-error Audit CLI is plain JavaScript and exports a pure predicate for this test.
import { distributionAllowed } from '../../scripts/check-content-distribution.mjs';

describe('source/binary/container content distribution gate', () => {
  const fixture = { path: 'content/fixture.json', sha256: 'a'.repeat(64), status: 'VERIFIED', holder: 'Synthetic fixture', evidence: 'Synthetic permission evidence only', reviewer: 'Fixture reviewer', reviewedAt: '2026-10-30T00:00:00Z', permissions: { source: true, hosted: true, binary: false, container: false } };
  it('requires explicit evidence for the exact file hash and distribution scope', () => {
    expect(distributionAllowed(fixture.path, fixture.sha256, [fixture], 'source')).toBe(true);
    expect(distributionAllowed(fixture.path, 'b'.repeat(64), [fixture], 'source')).toBe(false);
    expect(distributionAllowed(fixture.path, fixture.sha256, [fixture], 'container')).toBe(false);
    expect(distributionAllowed(fixture.path, fixture.sha256, [], 'source')).toBe(false);
    expect(distributionAllowed(fixture.path, fixture.sha256, [fixture, { ...fixture, status: 'DISPUTED' }], 'source')).toBe(false);
  });
  it.each([{ status: 'PENDING' }, { evidence: '' }, { holder: '' }, { reviewer: '' }, { reviewedAt: 'invalid' }])('rejects incomplete or unverified records %o', (patch) => {
    expect(distributionAllowed(fixture.path, fixture.sha256, [{ ...fixture, ...patch }], 'source')).toBe(false);
  });
  it('withholds legacy LAN startup while its real content permission is unresolved', () => {
    const result = spawnSync(process.execPath, ['legacy/server.js', '--lan'], { encoding: 'utf8', timeout: 5000 });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('Legacy LAN publication is withheld');
    expect(result.stdout).not.toContain('running at');
  });
});
