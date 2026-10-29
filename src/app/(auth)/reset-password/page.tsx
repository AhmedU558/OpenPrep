import { Suspense } from 'react';
import { ResetForm } from '@/components/auth-forms';

export const metadata = { title: 'Choose a new password' };

export default function ResetPage() {
  return (
    <>
      <h1 className="mb-5 text-xl font-semibold">Choose a new password</h1>
      <Suspense><ResetForm /></Suspense>
    </>
  );
}
