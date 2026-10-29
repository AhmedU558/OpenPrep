// Tiny arithmetic evaluator for the exam calculator: + - * / ^ ( ) and decimals. No eval().
export function evaluate(input: string): number {
  const s = input.replace(/\s+/g, '').replace(/×/g, '*').replace(/÷/g, '/');
  let i = 0;
  const peek = () => s[i];
  const fail = (): never => { throw new Error('Invalid expression'); };

  function number(): number {
    const m = /^\d*\.?\d+(?:e[+-]?\d+)?/i.exec(s.slice(i));
    if (!m) return fail();
    i += m[0].length;
    return parseFloat(m[0]);
  }
  function atom(): number {
    if (peek() === '-') { i++; return -atom(); }
    if (peek() === '+') { i++; return atom(); }
    if (peek() === '(') { i++; const v = expr(); if (peek() !== ')') fail(); i++; return v; }
    return number();
  }
  function power(): number {
    const b = atom();
    if (peek() === '^') { i++; return b ** power(); } // right-associative
    return b;
  }
  function term(): number {
    let v = power();
    while (peek() === '*' || peek() === '/') { const op = s[i++]; const r = power(); v = op === '*' ? v * r : v / r; }
    return v;
  }
  function expr(): number {
    let v = term();
    while (peek() === '+' || peek() === '-') { const op = s[i++]; const r = term(); v = op === '+' ? v + r : v - r; }
    return v;
  }
  if (!s) return fail();
  const v = expr();
  if (i !== s.length || !Number.isFinite(v)) fail();
  return v;
}
