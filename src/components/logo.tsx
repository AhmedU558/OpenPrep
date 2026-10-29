import Link from 'next/link';
import { appName } from '@/lib/env';

// Original mark: an open book whose pages form a check.
export function Logo({ href = '/' }: { href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 font-semibold tracking-tight">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="var(--brand)" />
        <path d="M7 10.5c3-1.4 6-1.2 9 .8 3-2 6-2.2 9-.8V23c-3-1.4-6-1.2-9 .8-3-2-6-2.2-9-.8z" fill="none" stroke="var(--brand-ink)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 16.2l2.6 2.6 5.4-5.6" fill="none" stroke="var(--brand-ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg">{appName()}</span>
    </Link>
  );
}
