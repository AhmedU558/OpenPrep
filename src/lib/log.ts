// Structured JSON logs. Sensitive keys are redacted and email addresses masked before anything is written.
const SECRET_KEYS = /pass(word)?|token|secret|cookie|authorization|api[-_]?key/i;
const EMAIL = /([A-Za-z0-9._%+-])[A-Za-z0-9._%+-]*@([A-Za-z0-9.-]+)/g;

export function redact(value: unknown, depth = 0): unknown {
  if (depth > 5) return '[depth]';
  if (typeof value === 'string') return value.replace(EMAIL, '$1***@$2');
  if (Array.isArray(value)) return value.map((v) => redact(v, depth + 1));
  if (value instanceof Error) return { name: value.name, message: redact(value.message, depth + 1) };
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, SECRET_KEYS.test(k) ? '[redacted]' : redact(v, depth + 1)]),
    );
  }
  return value;
}

type Level = 'debug' | 'info' | 'warn' | 'error';
function write(level: Level, msg: string, fields?: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'test' && level === 'debug') return;
  const line = JSON.stringify({ t: new Date().toISOString(), level, msg, ...(redact(fields ?? {}) as object) });
  (level === 'error' || level === 'warn' ? console.error : console.log)(line);
}

export const log = {
  debug: (m: string, f?: Record<string, unknown>) => write('debug', m, f),
  info: (m: string, f?: Record<string, unknown>) => write('info', m, f),
  warn: (m: string, f?: Record<string, unknown>) => write('warn', m, f),
  error: (m: string, f?: Record<string, unknown>) => write('error', m, f),
};
