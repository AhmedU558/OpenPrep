'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { evaluate } from '@/lib/calc';
import { cx, inputCls } from '../ui';

export function Dialog({ open, onClose, title, children, wide }: { open: boolean; onClose: () => void; title: string; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog ref={ref} onClose={onClose} aria-labelledby="dlg-title"
      className={cx('m-auto w-[min(92vw,560px)] rounded-2xl border border-line bg-surface p-0 text-ink backdrop:bg-black/40', wide && 'w-[min(96vw,900px)]')}>
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <h2 id="dlg-title" className="font-semibold">{title}</h2>
        <button type="button" onClick={onClose} className="rounded-lg px-2 py-1 text-muted hover:bg-surface-2" aria-label="Close">✕</button>
      </div>
      <div className="max-h-[75vh] overflow-auto p-5">{children}</div>
    </dialog>
  );
}

// Common adult reference ranges (conventional units). Ranges vary by laboratory.
const LABS: [string, [string, string][]][] = [
  ['Serum chemistry', [
    ['Sodium', '136–145 mEq/L'], ['Potassium', '3.5–5.0 mEq/L'], ['Chloride', '95–105 mEq/L'], ['Bicarbonate', '22–28 mEq/L'],
    ['BUN', '7–18 mg/dL'], ['Creatinine', '0.6–1.2 mg/dL'], ['Glucose, fasting', '70–100 mg/dL'], ['Calcium', '8.4–10.2 mg/dL'],
    ['Magnesium', '1.5–2.0 mEq/L'], ['Phosphorus', '3.0–4.5 mg/dL'], ['Albumin', '3.5–5.5 g/dL'], ['Total protein', '6.0–7.8 g/dL'],
    ['AST', '12–38 U/L'], ['ALT', '10–40 U/L'], ['Alkaline phosphatase', '25–100 U/L'], ['Bilirubin, total', '0.1–1.0 mg/dL'],
    ['TSH', '0.4–4.0 μU/mL'], ['Free T4', '0.9–1.7 ng/dL'], ['HbA1c', '< 5.7 %'],
  ]],
  ['Hematology', [
    ['Hemoglobin', 'M 13.5–17.5, F 12.0–16.0 g/dL'], ['Hematocrit', 'M 41–53 %, F 36–46 %'], ['MCV', '80–100 fL'],
    ['Leukocytes', '4,500–11,000 /mm³'], ['Platelets', '150,000–400,000 /mm³'], ['Reticulocytes', '0.5–1.5 %'],
    ['PT', '11–15 s'], ['aPTT', '25–40 s'], ['INR', '0.8–1.2'],
  ]],
  ['Arterial blood gas', [['pH', '7.35–7.45'], ['PaCO₂', '35–45 mm Hg'], ['PaO₂', '75–105 mm Hg'], ['HCO₃⁻', '22–28 mEq/L']]],
  ['Urine & CSF', [['Urine specific gravity', '1.005–1.030'], ['CSF protein', '15–45 mg/dL'], ['CSF glucose', '40–70 mg/dL']]],
];

export function LabValues() {
  const [f, setF] = useState('');
  const k = f.trim().toLowerCase();
  return (
    <div className="space-y-4">
      <input value={f} onChange={(e) => setF(e.target.value)} placeholder="Filter, e.g. sodium" aria-label="Filter lab values" className={inputCls} />
      {LABS.map(([group, rows]) => {
        const shown = rows.filter(([n]) => !k || n.toLowerCase().includes(k));
        if (!shown.length) return null;
        return (
          <table key={group} className="w-full text-sm">
            <caption className="mb-1 text-left font-semibold">{group}</caption>
            <tbody>{shown.map(([n, v]) => <tr key={n} className="border-b border-line"><td className="py-1.5 pr-4">{n}</td><td className="py-1.5 tabular-nums text-muted">{v}</td></tr>)}</tbody>
          </table>
        );
      })}
      <p className="text-xs text-muted">Typical adult reference ranges; individual laboratories differ.</p>
    </div>
  );
}

export function Calculator() {
  const [expr, setExpr] = useState('');
  let out = '';
  try { out = expr.trim() ? String(+evaluate(expr).toPrecision(10)) : ''; } catch { out = expr.trim() ? '…' : ''; }
  const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '(', ')', '^', '+'];
  return (
    <div className="space-y-3">
      <input value={expr} onChange={(e) => setExpr(e.target.value)} aria-label="Expression" placeholder="(140 - 128) * 0.6 * 70" className={cx(inputCls, 'font-mono')} autoFocus />
      <output aria-live="polite" className="block text-right font-mono text-2xl tabular-nums">{out || '0'}</output>
      <div className="grid grid-cols-4 gap-2">
        {keys.map((k) => <button key={k} type="button" onClick={() => setExpr((e) => e + k)} className="h-10 rounded-lg border border-line bg-surface-2 font-mono hover:bg-brand-soft">{k}</button>)}
        <button type="button" onClick={() => setExpr('')} className="col-span-2 h-10 rounded-lg border border-line hover:bg-surface-2">Clear</button>
      </div>
    </div>
  );
}
