'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { authClient } from '@/lib/auth-client';
import { Alert, Button, Field, inputCls } from './ui';

function useSubmit() {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const run = async (fn: () => Promise<{ error?: { message?: string } | null } | void>) => {
    setBusy(true); setError('');
    try {
      const r = await fn();
      if (r && r.error) setError(r.error.message || 'Something went wrong.');
      return !(r && r.error);
    } catch { setError('Network error. Please try again.'); return false; }
    finally { setBusy(false); }
  };
  return { error, busy, run };
}

const val = (e: FormEvent<HTMLFormElement>, k: string) => String(new FormData(e.currentTarget).get(k) ?? '');

export function LoginForm() {
  const router = useRouter();
  const { error, busy, run } = useSubmit();
  return (
    <form method="post" className="space-y-4" onSubmit={async (e) => {
      e.preventDefault();
      const email = val(e, 'email'), password = val(e, 'password');
      if (await run(() => authClient.signIn.email({ email, password }))) {
        window.location.href = '/dashboard';
      }
    }}>
      {error && <Alert>{error}</Alert>}
      <Field label="Email" htmlFor="email"><input id="email" name="email" type="email" autoComplete="email" required className={inputCls} /></Field>
      <Field label="Password" htmlFor="password"><input id="password" name="password" type="password" autoComplete="current-password" required className={inputCls} /></Field>
      <Button type="submit" disabled={busy} className="w-full">{busy ? 'Signing in…' : 'Sign in'}</Button>
      <p className="text-center text-sm"><Link href="/forgot-password" className="text-brand underline">Forgot password?</Link></p>
    </form>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const { error, busy, run } = useSubmit();
  const [pwErr, setPwErr] = useState('');
  return (
    <form method="post" className="space-y-4" onSubmit={async (e) => {
      e.preventDefault();
      const name = val(e, 'name').trim(), email = val(e, 'email'), password = val(e, 'password');
      if (password.length < 10) return setPwErr('Use at least 10 characters.');
      setPwErr('');
      if (await run(() => authClient.signUp.email({ name, email, password }))) {
        window.location.href = '/dashboard';
      }
    }}>
      {error && <Alert>{error}</Alert>}
      <Field label="Name" htmlFor="name"><input id="name" name="name" autoComplete="name" required maxLength={80} className={inputCls} /></Field>
      <Field label="Email" htmlFor="email"><input id="email" name="email" type="email" autoComplete="email" required className={inputCls} /></Field>
      <Field label="Password" htmlFor="password" hint="At least 10 characters." error={pwErr}>
        <input id="password" name="password" type="password" autoComplete="new-password" required minLength={10} maxLength={128} className={inputCls} aria-invalid={!!pwErr} />
      </Field>
      <Button type="submit" disabled={busy} className="w-full">{busy ? 'Creating account…' : 'Create account'}</Button>
    </form>
  );
}

export function ForgotForm() {
  const { error, busy, run } = useSubmit();
  const [sent, setSent] = useState(false);
  if (sent) return <Alert tone="ok">If an account exists for that email, a reset link is on its way. It expires in 30 minutes.</Alert>;
  return (
    <form method="post" className="space-y-4" onSubmit={async (e) => {
      e.preventDefault();
      const email = val(e, 'email');
      if (await run(() => authClient.requestPasswordReset({ email, redirectTo: '/reset-password' }))) setSent(true);
    }}>
      {error && <Alert>{error}</Alert>}
      <Field label="Email" htmlFor="email"><input id="email" name="email" type="email" autoComplete="email" required className={inputCls} /></Field>
      <Button type="submit" disabled={busy} className="w-full">{busy ? 'Sending…' : 'Send reset link'}</Button>
    </form>
  );
}

export function ResetForm() {
  const token = useSearchParams().get('token') ?? '';
  const router = useRouter();
  const { error, busy, run } = useSubmit();
  if (!token) return <Alert>This reset link is invalid or has expired. <Link href="/forgot-password" className="underline">Request a new one.</Link></Alert>;
  return (
    <form method="post" className="space-y-4" onSubmit={async (e) => {
      e.preventDefault();
      const newPassword = val(e, 'password');
      if (await run(() => authClient.resetPassword({ newPassword, token }))) router.push('/login?reset=1');
    }}>
      {error && <Alert>{error}</Alert>}
      <Field label="New password" htmlFor="password" hint="At least 10 characters.">
        <input id="password" name="password" type="password" autoComplete="new-password" required minLength={10} maxLength={128} className={inputCls} />
      </Field>
      <Button type="submit" disabled={busy} className="w-full">{busy ? 'Saving…' : 'Set new password'}</Button>
    </form>
  );
}

export function GuestButton({ className, fullWidth = false }: { className?: string; fullWidth?: boolean }) {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleGuest = async () => {
    setBusy(true);
    setError('');
    try {
      const res = await authClient.signIn.anonymous();
      if (res?.error) {
        // If already anonymous, the session is active! Proceed directly to dashboard.
        const isAlreadyAnon =
          res.error.code === 'ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY' ||
          res.error.message?.toLowerCase().includes('anonymous users cannot sign in again');

        if (isAlreadyAnon) {
          window.location.href = '/dashboard';
          return;
        }

        // If another error occurred (e.g. stale/corrupted cookies), sign out and retry once
        try {
          await authClient.signOut();
          const retry = await authClient.signIn.anonymous();
          if (!retry?.error) {
            window.location.href = '/dashboard';
            return;
          }
          if (
            retry.error.code === 'ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY' ||
            retry.error.message?.toLowerCase().includes('anonymous users cannot sign in again')
          ) {
            window.location.href = '/dashboard';
            return;
          }
        } catch {
          // fall through to report error
        }

        setError(res.error.message || 'Unable to start guest session.');
        setBusy(false);
        return;
      }

      // Hard navigation ensures browser cookie synchronization and fresh RSC state
      window.location.href = '/dashboard';
    } catch {
      try {
        window.location.href = '/dashboard';
      } catch {
        setError('Network error. Please try again.');
        setBusy(false);
      }
    }
  };

  return (
    <div className={className}>
      <Button
        type="button"
        variant="secondary"
        disabled={busy}
        onClick={handleGuest}
        className={fullWidth ? 'w-full' : undefined}
      >
        {busy ? 'Starting…' : 'Try it as a guest'}
      </Button>
      {error && <div className="mt-2"><Alert>{error}</Alert></div>}
    </div>
  );
}
