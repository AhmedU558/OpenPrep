'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cx } from './ui';

const LINKS = [
  ['/dashboard', 'Home'],
  ['/create', 'Create test'],
  ['/tests', 'Previous tests'],
  ['/questions', 'Questions'],
  ['/performance', 'Performance'],
  ['/flashcards', 'Flashcards'],
  ['/notebook', 'Notebook'],
  ['/planner', 'Planner'],
] as const;

export function NavLinks() {
  const path = usePathname();
  return (
    <nav aria-label="Main" className="flex gap-1 overflow-x-auto">
      {LINKS.map(([href, label]) => {
        const on = path === href || path.startsWith(`${href}/`);
        return (
          <Link key={href} href={href} aria-current={on ? 'page' : undefined}
            className={cx('whitespace-nowrap rounded-lg px-3 py-1.5 text-sm', on ? 'bg-brand-soft font-medium text-brand' : 'text-muted hover:bg-surface-2 hover:text-ink')}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
