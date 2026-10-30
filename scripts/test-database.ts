/** Test setup may destroy data: require a loopback PostgreSQL database explicitly named *_test. */
export function testDatabaseUrl(raw: string | undefined, primary: string | undefined): string {
  const fail = () => { throw new Error('Use a disposable loopback PostgreSQL *_test database distinct from DATABASE_URL.'); };
  let test: URL;
  try { test = new URL(raw ?? ''); } catch { return fail(); }
  const local = new Set(['localhost', '127.0.0.1', '[::1]']);
  if (!['postgres:', 'postgresql:'].includes(test.protocol) || !local.has(test.hostname) || !/^\/[a-zA-Z0-9_]+_test$/.test(test.pathname)) return fail();
  if (primary) {
    let app: URL;
    try { app = new URL(primary); } catch { return fail(); }
    const sameHost = app.hostname === test.hostname || (local.has(app.hostname) && local.has(test.hostname));
    if (sameHost && (app.port || '5432') === (test.port || '5432') && decodeURIComponent(app.pathname) === test.pathname) return fail();
  }
  return test.href;
}
