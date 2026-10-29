import Link from 'next/link';
import { LoginForm } from '@/components/auth-forms';
import { Alert } from '@/components/ui';

export const metadata = { title: 'Sign in' };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ reset?: string }> }) {
  const { reset } = await searchParams;
  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Sign in</h1>
      {reset && <div className="mb-4"><Alert tone="ok">Password changed. Sign in with your new password.</Alert></div>}
      <LoginForm />
      <p className="mt-6 text-center text-sm text-muted">New here? <Link href="/register" className="text-brand underline">Create a free account</Link></p>
    </>
  );
}
