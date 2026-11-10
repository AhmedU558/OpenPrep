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

const ICONS = [
  'M3 10 12 3l9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z',
  'M12 5v14M5 12h14',
  'M4 5h16v15H4zM8 2v6M16 2v6M4 10h16',
  'M4 4h6l2 2 2-2h6v16h-6l-2 2-2-2H4zM12 6v16',
  'M4 20V10M12 20V4M20 20v-7',
  'M5 3h14v15H5zM8 21h14V6',
  'M5 3h15v18H5zM3 7h4M3 12h4M3 17h4M10 8h6M10 12h6',
  'M4 5h16v16H4zM8 3v4M16 3v4M4 11h16M8 15h2M14 15h2',
] as const;

export function NavLinks({ sidebar = false }: { sidebar?: boolean }) {
  const path = usePathname();
  return (
    <nav aria-label="Main" className={cx('flex gap-1', sidebar ? 'flex-col' : 'overflow-x-auto')}>
      {LINKS.map(([href, label], i) => {
        const on = path === href || path.startsWith(`${href}/`);
        return (
          <Link key={href} href={href} aria-current={on ? 'page' : undefined}
            className={cx('flex items-center gap-3 whitespace-nowrap rounded-full px-3 text-sm transition-colors', sidebar ? 'py-3' : 'py-2', sidebar ? (on ? 'bg-[#edf5f0] font-semibold text-[#153f35]' : 'text-white/70 hover:bg-white/10 hover:text-white') : (on ? 'bg-brand-soft font-medium text-brand' : 'text-muted hover:bg-surface-2 hover:text-ink'))}>
            {sidebar && <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS[i]} /></svg>}
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
