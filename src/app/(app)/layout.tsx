import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo } from '@/components/logo';
import { NavLinks } from '@/components/nav-links';
import { FontSize, ThemeToggle } from '@/components/prefs-controls';
import { UserMenu } from '@/components/user-menu';
import { hasRole, requireUserPage } from '@/lib/session';

export default async function AppLayout({ children }: { children: ReactNode }) {
  const user = await requireUserPage();
  return (
    <div className="study-shell min-h-screen lg:pl-60">
      <aside className="study-sidebar fixed inset-y-0 left-0 z-40 hidden w-60 flex-col px-5 py-8 lg:flex" aria-label="Study workspace">
        <Logo href="/dashboard" />
        <p className="mb-8 mt-2 pl-9 text-xs tracking-wide text-white/65">A little progress, every day.</p>
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">Your workspace</p>
        <NavLinks sidebar />
        <div className="mt-auto rounded-2xl border border-white/15 bg-white/5 p-4">
          <p className="text-sm font-medium">Build understanding.</p>
          <p className="mt-2 text-xs leading-relaxed text-white/70">Review each explanation. Small, consistent sessions add up.</p>
          <Link href="/planner" className="mt-4 inline-block text-sm font-medium text-white underline underline-offset-4">Make a study plan →</Link>
        </div>
        <p className="mt-5 px-1 text-[11px] leading-relaxed text-white/60">AI-authored and medically unreviewed. For exam preparation only.</p>
      </aside>
      <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5">
          <div className="lg:hidden"><Logo href="/dashboard" /></div>
          <div className="hidden lg:block"><p className="text-xs uppercase tracking-[0.16em] text-muted">Your learning space</p><p className="mt-0.5 text-sm font-medium">USMLE preparation</p></div>
          <div className="ml-auto flex items-center gap-1">
            <FontSize />
            <ThemeToggle />
            <UserMenu name={user.name} isGuest={!!user.isAnonymous} canAdmin={hasRole(user, 'EDITOR')} />
          </div>
        </div>
        <div className="border-t border-line px-2 py-1.5 lg:hidden"><NavLinks /></div>
      </header>
      {user.isAnonymous && (
        <div className="border-b border-line bg-warn-soft px-4 py-2 text-center text-sm">
          You&apos;re in guest mode. <Link href="/register" className="font-medium text-brand underline">Create a free account</Link> to keep your progress.
        </div>
      )}
      <main id="main" className="mx-auto max-w-7xl px-4 py-8 sm:px-7 lg:px-10 lg:py-10">{children}</main>
      <footer className="mx-auto max-w-7xl px-4 pb-8 text-xs text-muted sm:px-7 lg:px-10">AI-authored and medically unreviewed. For exam preparation only.</footer>
    </div>
  );
}
