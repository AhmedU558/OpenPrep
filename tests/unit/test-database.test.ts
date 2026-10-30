import { describe, expect, it } from 'vitest';
import { testDatabaseUrl } from '../../scripts/test-database';

describe('destructive test database boundary', () => {
  it('allows an explicitly separate local disposable database', () => {
    expect(testDatabaseUrl('postgresql://test:local@127.0.0.1:55432/openprep_test', 'postgresql://app:local@localhost:5432/openprep')).toContain('/openprep_test');
  });
  it.each([
    undefined,
    'not-a-url',
    'postgresql://user:pw@production.example/openprep_test',
    'postgresql://user:pw@localhost/openprep?schema=_test',
    'postgresql://user:pw@localhost/openprep_test_real',
    'postgresql://user:pw@localhost/%6fpenprep_test',
    'https://localhost/openprep_test',
  ])('rejects unsafe target %s without including credentials in errors', (url) => {
    expect(() => testDatabaseUrl(url, undefined)).toThrow('Use a disposable loopback PostgreSQL *_test database distinct from DATABASE_URL.');
  });
  it('rejects equivalent application database URLs regardless of credentials, alias or parameters', () => {
    expect(() => testDatabaseUrl('postgresql://test:new@127.0.0.1:5432/openprep_test?schema=public', 'postgres://app:old@localhost/openprep_test')).toThrow();
    expect(() => testDatabaseUrl('postgresql://test:new@localhost/openprep_test', 'postgresql://app:old@localhost/%6fpenprep_test')).toThrow();
  });
});
