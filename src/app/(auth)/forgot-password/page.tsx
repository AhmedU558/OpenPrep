import Link from 'next/link';
import { ForgotForm } from '@/components/auth-forms';

export const metadata = { title: 'Reset password' };

export default function ForgotPage() {
  return (
    <>
      <h1 className="mb-1 text-xl font-semibold">Reset your password</h1>
      <p className="mb-5 text-sm text-muted">We&apos;ll email you a link to choose a new one.</p>
      <ForgotForm />
      <p className="mt-6 text-center text-sm"><Link href="/login" className="text-brand underline">Back to sign in</Link></p>
    </>
  );
}
