'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { reviewContentRightsAction, submitRightsEvidenceAction } from '@/app/actions/admin';
import { Alert, Button, Card, Field, inputCls } from '../ui';

type Rights = { id: string; status: string; updatedAt: string; rightsStatus: string; rightsHolder: string | null; rightsEvidence: string | null; rightsDecision: string | null; rightsAllowDelivery: boolean; rightsAllowExport: boolean };

export function RightsReview({ rights: r, admin }: { rights: Rights; admin: boolean }) {
  const router = useRouter();
  const [holder, setHolder] = useState(r.rightsHolder ?? ''), [evidence, setEvidence] = useState(r.rightsEvidence ?? '');
  const [reason, setReason] = useState(''), [delivery, setDelivery] = useState(false), [exporting, setExporting] = useState(false);
  const [message, setMessage] = useState(''), [pending, start] = useTransition();
  const run = (decision?: 'VERIFIED' | 'DISPUTED' | 'REJECTED') => start(async () => {
    const result = decision ? await reviewContentRightsAction(r.id, { version: r.updatedAt, status: decision, reason, allowDelivery: delivery, allowExport: exporting })
      : await submitRightsEvidenceAction(r.id, { version: r.updatedAt, holder, evidence });
    setMessage(result.ok ? 'Rights review saved.' : result.error);
    if (result.ok) router.refresh();
  });
  return <Card className="space-y-3">
    <h2 className="font-semibold">Content rights review</h2>
    <p className="text-sm">Rights status: <strong>{r.rightsStatus}</strong> · Learner delivery: {r.rightsAllowDelivery ? 'allowed' : 'withheld'} · Export: {r.rightsAllowExport ? 'allowed' : 'withheld'}</p>
    <p className="text-sm text-muted">Review the saved wording, source, license, attribution and every image. A CC declaration alone is insufficient. Record a private evidence reference, not a secret or confidential contract. Rights approval is separate from medical review and publication.</p>
    <Field label="Rights holder" htmlFor="rights-holder"><input id="rights-holder" value={holder} onChange={(e) => setHolder(e.target.value)} className={inputCls} maxLength={300} /></Field>
    <Field label="Authorization evidence reference" htmlFor="rights-evidence"><textarea id="rights-evidence" value={evidence} onChange={(e) => setEvidence(e.target.value)} className={inputCls} maxLength={2000} /></Field>
    <Button variant="secondary" disabled={pending || !admin && (['DISPUTED', 'REJECTED'].includes(r.rightsStatus) || ['PUBLISHED', 'ARCHIVED'].includes(r.status))} onClick={() => run()}>Submit rights evidence</Button>
    {r.rightsDecision && <p className="text-sm">Previous decision: {r.rightsDecision}</p>}
    {admin && <fieldset disabled={pending} className="space-y-3">
      <legend className="font-medium">Admin decision for this saved version</legend>
      <Field label="Rights decision reason" htmlFor="rights-reason"><textarea id="rights-reason" value={reason} onChange={(e) => setReason(e.target.value)} className={inputCls} maxLength={2000} /></Field>
      <label className="flex gap-2 text-sm"><input type="checkbox" checked={delivery} onChange={(e) => setDelivery(e.target.checked)} />Evidence permits learner delivery on this instance</label>
      <label className="flex gap-2 text-sm"><input type="checkbox" checked={exporting} onChange={(e) => setExporting(e.target.checked)} />Evidence permits content redistribution and exports</label>
      <div className="flex flex-wrap gap-2"><Button disabled={pending || r.rightsStatus !== 'PENDING'} onClick={() => run('VERIFIED')}>Verify rights</Button><Button variant="secondary" onClick={() => run('DISPUTED')}>Dispute rights</Button><Button variant="secondary" onClick={() => run('REJECTED')}>Reject rights</Button></div>
    </fieldset>}
    {message && <Alert tone="info">{message}</Alert>}
  </Card>;
}
