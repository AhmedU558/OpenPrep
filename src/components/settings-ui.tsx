'use client';
import { useRouter } from 'next/navigation';
import { useState, useTransition, type ReactNode } from 'react';
import { deleteAccountAction, savePrefsAction } from '@/app/actions/account';
import { resetPracticeAction } from '@/app/actions/study';
import type { Prefs } from '@/lib/account';
import { authClient } from '@/lib/auth-client';
import { Alert, Button, ButtonLink, Card, Field, cx, inputCls } from './ui';

function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <Card id={id}>
      <h2 className="mb-4 font-semibold">{title}</h2>
      {children}
    </Card>
  );
}

export function AccountSettings({ user, prefs }: { user: { name: string; email: string; isGuest: boolean }; prefs: Prefs }) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const [msg, setMsg] = useState<Record<string, { ok: boolean; text: string }>>({});
  const say = (k: string, ok: boolean, text: string) => setMsg((m) => ({ ...m, [k]: { ok, text } }));
  const [name, setName] = useState(user.name);
  const [p, setP] = useState(prefs);
  const [confirmText, setConfirm] = useState('');
  const [resetScope, setResetScope] = useState<'ALL' | 'INCORRECT_ONLY' | 'MARKED_ONLY'>('INCORRECT_ONLY');
  const [resetConfirm, setResetConfirm] = useState('');

  return (
    <div className="grid max-w-3xl gap-6">
      {user.isGuest ? (
        <Alert tone="info">You&apos;re using a guest account. <ButtonLink href="/register" size="sm" className="ml-2">Create an account</ButtonLink> to keep your progress and sign in from anywhere.</Alert>
      ) : (
        <>
          <Section title="Profile">
            <form method="post" className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              start(async () => { const r = await authClient.updateUser({ name: name.trim() }); say('profile', !r.error, r.error?.message ?? 'Saved.'); router.refresh(); });
            }}>
              <Field label="Name" htmlFor="name"><input id="name" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} required className={inputCls} /></Field>
              <p className="text-sm text-muted">Email: {user.email}</p>
              <Button type="submit" disabled={pending}>Save</Button>
              {msg.profile && <Alert tone={msg.profile.ok ? 'ok' : 'bad'}>{msg.profile.text}</Alert>}
            </form>
          </Section>
          <Section title="Password">
            <form method="post" className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget), form = e.currentTarget;
              start(async () => {
                const r = await authClient.changePassword({ currentPassword: String(fd.get('current')), newPassword: String(fd.get('next')), revokeOtherSessions: true });
                say('pw', !r.error, r.error?.message ?? 'Password changed. Other devices were signed out.');
                if (!r.error) form.reset();
              });
            }}>
              <Field label="Current password" htmlFor="current"><input id="current" name="current" type="password" autoComplete="current-password" required className={inputCls} /></Field>
              <Field label="New password" htmlFor="next" hint="At least 10 characters."><input id="next" name="next" type="password" autoComplete="new-password" minLength={10} maxLength={128} required className={inputCls} /></Field>
              <Button type="submit" disabled={pending}>Change password</Button>
              {msg.pw && <Alert tone={msg.pw.ok ? 'ok' : 'bad'}>{msg.pw.text}</Alert>}
            </form>
          </Section>
        </>
      )}
      <Section title="Study preferences">
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => {
          e.preventDefault();
          start(async () => { const r = await savePrefsAction(p); say('prefs', r.ok, r.ok ? 'Saved.' : r.error); });
        }}>
          <Field label="Daily question goal" htmlFor="goal"><input id="goal" type="number" min={0} max={500} value={p.dailyGoal} onChange={(e) => setP({ ...p, dailyGoal: +e.target.value })} className={inputCls} /></Field>
          <Field label="Default test mode" htmlFor="mode">
            <select id="mode" value={p.defaultMode} onChange={(e) => setP({ ...p, defaultMode: e.target.value as Prefs['defaultMode'] })} className={inputCls}>
              <option value="TUTOR">Tutor</option><option value="TIMED">Timed</option>
            </select>
          </Field>
          <div className="sm:col-span-2"><Button type="submit" disabled={pending}>Save preferences</Button></div>
          {msg.prefs && <div className="sm:col-span-2"><Alert tone={msg.prefs.ok ? 'ok' : 'bad'}>{msg.prefs.text}</Alert></div>}
        </form>
        <p className="mt-4 text-sm text-muted">Theme and text size are in the top bar and are remembered on this device.</p>
      </Section>

      <Section id="reset" title="Question bank reset">
        <p className="text-sm text-muted">
          Reset active question statuses for a second pass. Your historical test sessions, past scores, and answer records are permanently preserved in your activity logs; only your active practice pools are refreshed.
        </p>

        <form className="mt-4 space-y-4" onSubmit={(e) => {
          e.preventDefault();
          if (resetScope === 'ALL' && resetConfirm.trim() !== 'RESET') {
            say('reset', false, 'Please type RESET to confirm a full question bank reset.');
            return;
          }
          start(async () => {
            const r = await resetPracticeAction({ scope: resetScope });
            if (r.ok) {
              say('reset', true, `Question bank reset successful (${r.data.affectedCount} question${r.data.affectedCount === 1 ? '' : 's'} affected).`);
              setResetConfirm('');
              router.refresh();
            } else {
              say('reset', false, r.error);
            }
          });
        }}>
          <fieldset>
            <legend className="text-sm font-semibold">Choose reset scope</legend>
            <div className="mt-2 space-y-2">
              {[
                {
                  id: 'INCORRECT_ONLY' as const,
                  title: 'Reset incorrect & omitted questions only',
                  desc: 'Keeps questions you got right as used; returns wrong and skipped questions to the unused pool for focused revision.',
                },
                {
                  id: 'MARKED_ONLY' as const,
                  title: 'Reset bookmarked questions only',
                  desc: 'Returns questions you marked/flagged during study back to the active pool.',
                },
                {
                  id: 'ALL' as const,
                  title: 'Full bank reset (all questions)',
                  desc: 'Marks all questions as unused for a complete second pass through the entire question bank.',
                },
              ].map((opt) => (
                <label key={opt.id} className={cx('flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors', resetScope === opt.id ? 'border-brand bg-brand-soft' : 'border-line bg-surface')}>
                  <input type="radio" name="resetScope" value={opt.id} checked={resetScope === opt.id} onChange={() => setResetScope(opt.id)} className="mt-0.5 accent-[var(--brand)]" />
                  <div>
                    <span className="font-medium text-ink">{opt.title}</span>
                    <p className="mt-0.5 text-xs text-muted">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {resetScope === 'ALL' && (
            <Field label='Type "RESET" to confirm full question bank reset' htmlFor="resetConfirm">
              <input id="resetConfirm" value={resetConfirm} onChange={(e) => setResetConfirm(e.target.value)} placeholder="RESET" className={inputCls} autoComplete="off" />
            </Field>
          )}

          <Button type="submit" variant={resetScope === 'ALL' ? 'danger' : 'primary'} disabled={pending || (resetScope === 'ALL' && resetConfirm.trim() !== 'RESET')}>
            {pending ? 'Resetting…' : resetScope === 'ALL' ? 'Confirm full reset' : 'Reset selected questions'}
          </Button>

          {msg.reset && <Alert tone={msg.reset.ok ? 'ok' : 'bad'}>{msg.reset.text}</Alert>}
        </form>
      </Section>

      <Section title="Your data">
        <p className="text-sm text-muted">Download everything stored about you (answers, notes, cards, plan) as JSON.</p>
        <a href="/api/export/me" className="mt-3 inline-flex h-10 items-center rounded-lg border border-line bg-surface px-4 text-[15px] hover:bg-surface-2">Download my data</a>
      </Section>

      <Section title="Delete account">
        <p className="text-sm">This permanently deletes your account and all of your study data. It cannot be undone.</p>
        {!user.isGuest && (
          <div className="mt-3"><Field label={`Type ${user.email} to confirm`} htmlFor="confirm"><input id="confirm" value={confirmText} onChange={(e) => setConfirm(e.target.value)} className={inputCls} autoComplete="off" /></Field></div>
        )}
        <Button variant="danger" className="mt-4" disabled={pending || (!user.isGuest && confirmText.trim().toLowerCase() !== user.email.toLowerCase())}
          onClick={() => start(async () => { const r = await deleteAccountAction(confirmText); if (r.ok) { router.push('/'); router.refresh(); } else say('del', false, r.error); })}>
          Delete my account
        </Button>
        {msg.del && <div className="mt-3"><Alert>{msg.del.text}</Alert></div>}
      </Section>
    </div>
  );
}
