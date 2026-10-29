'use client';
import { Button } from '@/components/ui';

// Shown for unexpected server errors. The message is generic on purpose: details stay in the server log.
export default function ErrorPage({ reset, error }: { reset: () => void; error: Error & { digest?: string } }) {
  return (
    <main id="main" className="grid min-h-[60vh] place-items-center px-4 text-center">
      <div>
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted">Your progress is saved. Try again, and if it keeps happening, let us know{error.digest ? ` (reference ${error.digest})` : ''}.</p>
        <Button className="mt-6" onClick={reset}>Try again</Button>
      </div>
    </main>
  );
}
