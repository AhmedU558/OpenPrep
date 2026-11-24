import Link from 'next/link';
import { LoginForm, GuestButton } from '@/components/auth-forms';
import { Alert } from '@/components/ui';

export const metadata = { title: 'Sign in' };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ reset?: string }> }) {
  const { reset } = await searchParams;
  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Sign in</h1>
      {reset && <div className="mb-4"><Alert tone="ok">Password changed. Sign in with your new password.</Alert></div>}
      <LoginForm />
      <div className="relative my-6 text-center text-xs text-muted">
        <span className="bg-surface px-2">or continue as guest</span>
        <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-line" />
      </div>
      <GuestButton fullWidth />
      <p className="mt-6 text-center text-sm text-muted">New here? <Link href="/register" className="text-brand underline">Create a free account</Link></p>
    </>
  );
}
