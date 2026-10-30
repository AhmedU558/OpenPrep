import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { expect, it } from 'vitest';

it('keeps MIT active while retaining the unmodified official AGPL reference and unresolved approval ledger', () => {
  const read = (path: string) => readFileSync(path, 'utf8');
  expect(read('LICENSE')).toMatch(/^MIT License/);
  expect(JSON.parse(read('package.json')).license).toBe('MIT');
  expect(JSON.parse(read('package-lock.json')).packages[''].license).toBe('MIT');
  expect(createHash('sha256').update(readFileSync('docs/licenses/AGPL-3.0.txt')).digest('hex')).toBe('0d96a4ff68ad6d4b6f1f30f713b18d5184912ba8dd389f86aa7710db079abcb0');
  expect(read('README.md')).toMatch(/software remains MIT/);
  expect(read('SECURITY.md')).toMatch(/Currently disabled/);
  expect(read('SECURITY.md')).toMatch(/PENDING MAINTAINER CONFIGURATION/);
});
