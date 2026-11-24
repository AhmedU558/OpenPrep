import Link from 'next/link';
import { RegisterForm, GuestButton } from '@/components/auth-forms';

export const metadata = { title: 'Create account' };

export default function RegisterPage() {
  return (
    <>
      <h1 className="mb-1 text-xl font-semibold">Create your free account</h1>
      <p className="mb-5 text-sm text-muted">No payment, ever. If you were a guest, your progress carries over.</p>
      <RegisterForm />
      <div className="relative my-6 text-center text-xs text-muted">
        <span className="bg-surface px-2">or continue as guest</span>
        <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-line" />
      </div>
      <GuestButton fullWidth />
      <p className="mt-6 text-center text-sm text-muted">Already have an account? <Link href="/login" className="text-brand underline">Sign in</Link></p>
    </>
  );
}
