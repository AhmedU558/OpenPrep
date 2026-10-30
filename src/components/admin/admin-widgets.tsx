'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { addTaxonomyAction, deleteTaxonomyAction, importAction, renameTaxonomyAction, resolveReportAction, setRoleAction } from '@/app/actions/admin';
import type { ImportReport } from '@/lib/admin';
import { Alert, Button, Card, cx, inputCls } from '../ui';

export function ImportPanel() {
  const router = useRouter();
  const [rows, setRows] = useState<unknown>(null);
  const [fileName, setFileName] = useState('');
  const [report, setReport] = useState<ImportReport | null>(null);
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  const run = (dryRun: boolean) => start(async () => {
    const r = await importAction(rows, dryRun);
    if (r.ok) { setReport(r.data); setErr(''); if (!dryRun) router.refresh(); } else setErr(r.error);
  });
  return (
    <Card className="space-y-4">
      <h2 className="font-semibold">Import questions</h2>
      <p className="text-sm text-muted">Upload a JSON array in the documented format (docs/content-format.md). Run a dry run first: nothing is saved until every row is valid. Imports cannot grant rights approval. New questions arrive as unverified drafts; changed content requires renewed rights review. Exports include only verified content with explicit export permission.</p>
      <input type="file" accept="application/json,.json" aria-label="Question file" className="text-sm" onChange={async (e) => {
        const f = e.target.files?.[0];
        setReport(null); setErr('');
        if (!f) return;
        if (f.size > 10 * 1024 * 1024) return setErr('File is larger than 10 MB.');
        setFileName(f.name);
        try { setRows(JSON.parse(await f.text())); } catch { setRows(null); setErr('That file is not valid JSON.'); }
      }} />
      {err && <Alert>{err}</Alert>}
      {rows != null && (
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => run(true)} disabled={pending}>Dry run {fileName}</Button>
          {report?.dryRun && report.errors.length === 0 && <Button onClick={() => run(false)} disabled={pending}>Import for real</Button>}
        </div>
      )}
      {report && (
        <div className="rounded-lg border border-line p-4 text-sm" role="status">
          <p className="font-medium">{report.dryRun ? 'Dry run: nothing was saved.' : 'Import complete.'}</p>
          <p className="mt-1">Would create/created: {report.created} · update/updated: {report.updated} · skipped (published, admin-only): {report.skipped}</p>
          {report.errors.length > 0 && (
            <>
              <p className="mt-2 font-medium text-bad">{report.errors.length} row{report.errors.length === 1 ? '' : 's'} need fixing. Nothing was imported:</p>
              <ul className="mt-1 max-h-64 list-disc overflow-auto pl-5">{report.errors.slice(0, 100).map((e) => <li key={e.index}>Row {e.index + 1}{e.code ? ` (${e.code})` : ''}: {e.message}</li>)}</ul>
            </>
          )}
        </div>
      )}
    </Card>
  );
}

export function ReportActions({ id }: { id: string }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const act = (s: string) => start(async () => { await resolveReportAction(id, s); router.refresh(); });
  return <div className="flex gap-2"><Button size="sm" onClick={() => act('RESOLVED')} disabled={pending}>Resolved</Button><Button size="sm" variant="ghost" onClick={() => act('DISMISSED')} disabled={pending}>Dismiss</Button></div>;
}

export function TaxonomyList({ kind, items }: { kind: 'exam' | 'subject' | 'system'; items: { id: string; name: string; count: number }[] }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  const done = (r: { ok: boolean; error?: string }) => { if (r.ok) { setErr(''); router.refresh(); } else setErr(r.error ?? ''); };
  return (
    <Card>
      <h2 className="mb-3 font-semibold capitalize">{kind === 'exam' ? 'Exams' : `${kind}s`}</h2>
      <ul className="space-y-1.5">
        {items.map((i) => (
          <li key={i.id} className="flex items-center gap-2 text-sm">
            <input defaultValue={i.name} aria-label={`Rename ${i.name}`} className={cx(inputCls, 'h-8 text-sm')}
              onBlur={(e) => e.target.value.trim() && e.target.value !== i.name && start(async () => done(await renameTaxonomyAction(kind, i.id, e.target.value)))} />
            <span className="w-10 text-right tabular-nums text-muted" title="questions">{i.count}</span>
            <button type="button" aria-label={`Delete ${i.name}`} disabled={pending || i.count > 0} title={i.count ? 'In use' : 'Delete'}
              className="px-1.5 text-muted hover:text-bad disabled:opacity-30" onClick={() => start(async () => done(await deleteTaxonomyAction(kind, i.id)))}>✕</button>
          </li>
        ))}
      </ul>
      <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); start(async () => { const r = await addTaxonomyAction(kind, name); done(r); if (r.ok) setName(''); }); }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder={`New ${kind}`} aria-label={`New ${kind}`} maxLength={80} className={cx(inputCls, 'h-9 text-sm')} />
        <Button size="sm" disabled={pending || !name.trim()}>Add</Button>
      </form>
      {err && <p className="mt-2 text-sm text-bad">{err}</p>}
    </Card>
  );
}

export function RoleSelect({ userId, role, self }: { userId: string; role: string; self: boolean }) {
  const router = useRouter();
  const [err, setErr] = useState('');
  const [pending, start] = useTransition();
  return (
    <div>
      <select aria-label="Role" defaultValue={role} disabled={self || pending} className="h-8 rounded-lg border border-line bg-surface px-2 text-sm"
        onChange={(e) => start(async () => { const r = await setRoleAction(userId, e.target.value); if (r.ok) router.refresh(); else setErr(r.error); })}>
        <option value="LEARNER">Learner</option><option value="EDITOR">Editor</option><option value="ADMIN">Admin</option>
      </select>
      {err && <p className="text-xs text-bad">{err}</p>}
    </div>
  );
}
