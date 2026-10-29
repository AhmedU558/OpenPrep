// Small, accessible UI primitives shared by every page. Server-component friendly (no client state).
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
const VARIANT: Record<Variant, string> = {
  primary: 'bg-brand text-brand-ink hover:bg-brand-strong border-transparent',
  secondary: 'bg-surface text-ink border-line hover:bg-surface-2',
  ghost: 'bg-transparent text-ink border-transparent hover:bg-surface-2',
  danger: 'bg-bad text-white border-transparent hover:opacity-90',
};
const btn = (v: Variant, size: 'sm' | 'md') =>
  cx('inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
    size === 'sm' ? 'h-8 px-3 text-sm' : 'h-10 px-4 text-[15px]', VARIANT[v]);

export function Button({ variant = 'primary', size = 'md', className, ...p }: ComponentProps<'button'> & { variant?: Variant; size?: 'sm' | 'md' }) {
  return <button className={cx(btn(variant, size), className)} {...p} />;
}

export function ButtonLink({ variant = 'primary', size = 'md', className, ...p }: ComponentProps<typeof Link> & { variant?: Variant; size?: 'sm' | 'md' }) {
  return <Link className={cx(btn(variant, size), className)} {...p} />;
}

export function Card({ className, ...p }: ComponentProps<'div'>) {
  return <div className={cx('rounded-xl border border-line bg-surface p-5', className)} {...p} />;
}

export function Badge({ tone = 'neutral', className, ...p }: ComponentProps<'span'> & { tone?: 'neutral' | 'brand' | 'ok' | 'bad' | 'warn' }) {
  const t = { neutral: 'bg-surface-2 text-muted', brand: 'bg-brand-soft text-brand', ok: 'bg-ok-soft text-ok', bad: 'bg-bad-soft text-bad', warn: 'bg-warn-soft text-accent' }[tone];
  return <span className={cx('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium', t, className)} {...p} />;
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-muted">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Stat({ label, value, hint }: { label: string; value: ReactNode; hint?: ReactNode }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="text-sm text-muted">{label}</div>
      <div className="mt-1 text-2xl font-semibold tabular-nums">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted">{hint}</div>}
    </div>
  );
}

export function EmptyState({ title, children, action }: { title: string; children?: ReactNode; action?: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-surface px-6 py-12 text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children && <div className="mx-auto mt-2 max-w-md text-muted">{children}</div>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function Meter({ value, label }: { value: number; label: string }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={v} className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
      <div className="h-full rounded-full bg-brand" style={{ width: `${v}%` }} />
    </div>
  );
}

export const inputCls = 'h-10 w-full rounded-lg border border-line bg-surface px-3 text-[15px] text-ink placeholder:text-muted focus-visible:border-brand';

export function Field({ label, error, hint, children, htmlFor }: { label: string; error?: string; hint?: string; children: ReactNode; htmlFor: string }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium">{label}</label>
      {children}
      {hint && !error && <p className="text-xs text-muted">{hint}</p>}
      {error && <p className="text-sm text-bad" role="alert">{error}</p>}
    </div>
  );
}

export function Alert({ tone = 'bad', children }: { tone?: 'bad' | 'ok' | 'info'; children: ReactNode }) {
  const t = { bad: 'border-bad/30 bg-bad-soft text-bad', ok: 'border-ok/30 bg-ok-soft text-ok', info: 'border-line bg-brand-soft text-ink' }[tone];
  return <div role={tone === 'bad' ? 'alert' : 'status'} className={cx('rounded-lg border px-4 py-3 text-sm', t)}>{children}</div>;
}

export const fmtDuration = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return h ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
};
