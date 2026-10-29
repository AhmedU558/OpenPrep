'use client';
import { useSyncExternalStore } from 'react';

type Theme = 'auto' | 'light' | 'dark';
const LABEL: Record<Theme, string> = { auto: 'Theme: auto', light: 'Theme: light', dark: 'Theme: dark' };

// localStorage is external state: read it through useSyncExternalStore so server and client renders agree.
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); window.addEventListener('storage', fn); return () => { listeners.delete(fn); window.removeEventListener('storage', fn); }; };
const readTheme = (): Theme => { try { const t = localStorage.getItem('op-theme'); return t === 'light' || t === 'dark' ? t : 'auto'; } catch { return 'auto'; } };

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'auto' as Theme);
  const next = () => {
    const t: Theme = theme === 'auto' ? 'light' : theme === 'light' ? 'dark' : 'auto';
    try {
      if (t === 'auto') { localStorage.removeItem('op-theme'); delete document.documentElement.dataset.theme; }
      else { localStorage.setItem('op-theme', t); document.documentElement.dataset.theme = t; }
    } catch { /* storage blocked: theme still applies for this page view */ document.documentElement.dataset.theme = t; }
    listeners.forEach((fn) => fn());
  };
  return (
    <button type="button" onClick={next} className="rounded-lg px-2.5 py-1.5 text-sm text-muted hover:bg-surface-2" aria-label={`${LABEL[theme]}. Click to change.`}>
      {theme === 'dark' ? '☾' : theme === 'light' ? '☀' : '◐'}
    </button>
  );
}

export function FontSize() {
  const set = (d: number) => {
    let cur = 16;
    try { cur = +(localStorage.getItem('op-font') || 16); } catch { /* ignore */ }
    const f = Math.min(24, Math.max(12, cur + d));
    try { localStorage.setItem('op-font', String(f)); } catch { /* ignore */ }
    document.documentElement.style.setProperty('--font-size', `${f}px`);
  };
  return (
    <div className="flex items-center" role="group" aria-label="Text size">
      <button type="button" onClick={() => set(-1)} className="rounded-lg px-2 py-1 text-sm text-muted hover:bg-surface-2" aria-label="Smaller text">A−</button>
      <button type="button" onClick={() => set(1)} className="rounded-lg px-2 py-1 text-sm text-muted hover:bg-surface-2" aria-label="Larger text">A+</button>
    </div>
  );
}
