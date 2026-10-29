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
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5">
          <Logo href="/dashboard" />
          <div className="hidden min-w-0 flex-1 lg:block"><NavLinks /></div>
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
      <main id="main" className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
