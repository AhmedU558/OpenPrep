'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';

export function UserMenu({ name, isGuest, canAdmin }: { name: string; isGuest: boolean; canAdmin: boolean }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const signOut = async () => {
    await authClient.signOut();
    router.push('/');
    router.refresh();
  };
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-haspopup="menu"
        className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm hover:bg-surface-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-soft text-xs font-semibold text-brand" aria-hidden="true">
          {isGuest ? 'G' : name.slice(0, 1).toUpperCase()}
        </span>
        <span className="sr-only sm:not-sr-only">{isGuest ? 'Guest' : name}</span>
      </button>
      {open && (
        <div role="menu" className="absolute right-0 z-40 mt-2 w-52 rounded-xl border border-line bg-surface p-1.5 shadow-lg" onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
          {isGuest && <Link role="menuitem" href="/register" className="block rounded-lg px-3 py-2 text-sm font-medium text-brand hover:bg-surface-2">Create account (keeps progress)</Link>}
          <Link role="menuitem" href="/settings" className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-2">Settings</Link>
          {canAdmin && <Link role="menuitem" href="/admin" className="block rounded-lg px-3 py-2 text-sm hover:bg-surface-2">Content admin</Link>}
          <button role="menuitem" type="button" onClick={signOut} className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-surface-2">Sign out</button>
        </div>
      )}
    </div>
  );
}
