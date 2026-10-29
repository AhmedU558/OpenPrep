import { ButtonLink } from '@/components/ui';

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-2 text-2xl font-semibold">We couldn&apos;t find that page</h1>
        <p className="mt-2 text-muted">It may have been moved, or the link belongs to another account.</p>
        <ButtonLink href="/dashboard" className="mt-6">Go home</ButtonLink>
      </div>
    </main>
  );
}
