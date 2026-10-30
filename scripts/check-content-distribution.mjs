import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function distributionAllowed(file, sha256, approvals, scope) {
  const matches = approvals.filter((a) => a.path === file);
  if (matches.length !== 1) return false; // Conflicting/duplicate decisions must not revive a revoked grant.
  const a = matches[0];
  return a.sha256 === sha256 && a.status === 'VERIFIED'
    && typeof a.holder === 'string' && a.holder.trim().length >= 2
    && typeof a.evidence === 'string' && a.evidence.trim().length >= 10
    && typeof a.reviewer === 'string' && a.reviewer.trim().length >= 2
    && typeof a.reviewedAt === 'string' && Number.isFinite(Date.parse(a.reviewedAt))
    && a.permissions?.[scope] === true;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const scope = process.argv.find((a) => a.startsWith('--scope='))?.split('=')[1] ?? 'source';
  if (!['source', 'binary', 'container', 'hosted'].includes(scope)) throw new Error('Invalid distribution scope');
  const approvals = JSON.parse(readFileSync('docs/audit/content-distribution-approvals.json', 'utf8')).approvals;
  const files = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { encoding: 'utf8' }).split('\0').filter((file) => /^(?:content\/|prisma\/seed-data\/|legacy\/questions\.js$)/.test(file));
  const withheld = files.filter((file) => !distributionAllowed(file, createHash('sha256').update(readFileSync(file)).digest('hex'), approvals, scope));
  console.log(JSON.stringify({ scope, checked: files.length, allowed: files.length - withheld.length, withheld, decision: withheld.length ? 'BLOCKED: missing current content-rights approvals; no artifact produced' : 'CONTENT RIGHTS CHECK PASSED; ownership, software licenses and private reporting still require separate approval' }, null, 2));
  if (withheld.length || !files.length) process.exitCode = 1;
}
