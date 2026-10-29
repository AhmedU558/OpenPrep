import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo } from '@/components/logo';
import { ThemeToggle } from '@/components/prefs-controls';
import { hasRole, requireRolePage } from '@/lib/session';

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const user = await requireRolePage('EDITOR');
  const isAdmin = hasRole(user, 'ADMIN');
  const links: [string, string, boolean][] = [
    ['/admin', 'Overview', true], ['/admin/questions', 'Questions', true], ['/admin/questions/new', 'New question', true],
    ['/admin/import', 'Import & export', true], ['/admin/reports', 'Error reports', true],
    ['/admin/taxonomy', 'Taxonomy', isAdmin], ['/admin/users', 'Users & roles', isAdmin], ['/admin/audit', 'Audit log', isAdmin],
  ];
  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5">
          <Logo href="/admin" /><span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">Content admin</span>
          <div className="ml-auto flex items-center gap-2"><ThemeToggle /><Link href="/dashboard" className="text-sm text-brand underline">Back to studying</Link></div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-[200px_1fr]">
        <nav aria-label="Admin"><ul className="flex gap-1 overflow-x-auto md:flex-col">
          {links.filter(([, , show]) => show).map(([href, label]) => <li key={href}><Link href={href} className="block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm hover:bg-surface-2">{label}</Link></li>)}
        </ul></nav>
        <main id="main" className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
