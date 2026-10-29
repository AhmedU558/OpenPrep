export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="animate-pulse space-y-4">
      <span className="sr-only">Loading…</span>
      <div className="h-8 w-64 rounded-lg bg-surface-2" />
      <div className="grid gap-3 sm:grid-cols-4">{[0, 1, 2, 3].map((i) => <div key={i} className="h-24 rounded-xl bg-surface-2" />)}</div>
      <div className="h-64 rounded-xl bg-surface-2" />
    </div>
  );
}
