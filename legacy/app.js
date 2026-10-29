// OpenUworld: a local-first USMLE question bank. Pure helpers first (covered by test.js), DOM code below.
const STORE = 'openuworld.v1';
const SECS_PER_Q = 90;
const BREAK_SECS = 45 * 60; // USMLE-style break budget shared by all blocks of one exam
const DAY = 864e5;

const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

function validQ(q) {
  return !!q && typeof q.id === 'string' && /^[\w.-]{1,64}$/.test(q.id) && typeof q.stem === 'string' &&
    Array.isArray(q.choices) && q.choices.length >= 2 && q.choices.every(c => typeof c === 'string') &&
    Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length &&
    ['exam', 'subject', 'system', 'explanation'].every(k => typeof q[k] === 'string');
}

// st = {answers, marked}; o = {exams, subjects, systems, filter, q}
function buildPool(questions, st, o) {
  const a = st.answers, kw = (o.q || '').trim().toLowerCase();
  const pools = {
    all: () => true,
    unused: q => !a[q.id],
    correct: q => a[q.id]?.correct,
    incorrect: q => a[q.id] && !a[q.id].correct && a[q.id].pick != null,
    omitted: q => a[q.id] && a[q.id].pick == null,
    marked: q => st.marked[q.id] > 0,
  };
  return questions.filter(q =>
    (!o.exams.length || o.exams.includes(q.exam)) &&
    (!o.subjects.length || o.subjects.includes(q.subject)) &&
    (!o.systems.length || o.systems.includes(q.system)) &&
    pools[o.filter](q) &&
    (!kw || `${q.stem} ${q.choices.join(' ')} ${q.explanation}`.toLowerCase().includes(kw)));
}

function breakdown(questions, answers, key) {
  const out = {};
  for (const q of questions) {
    const a = answers[q.id];
    if (!a) continue;
    const r = out[q[key]] ??= { name: q[key], total: 0, correct: 0 };
    r.total++;
    if (a.correct) r.correct++;
  }
  return Object.values(out).map(r => ({ ...r, pct: Math.round(100 * r.correct / r.total) })).sort((x, y) => x.pct - y.pct);
}

// ponytail: interval doubling, swap in SM-2 ease factors if reviews pile up
const reviewCard = (card, good, now = Date.now()) => {
  const interval = good ? (card.interval * 2 || 1) : 0;
  return { interval, due: now + interval * DAY, at: now };
};

// consecutive study days ending today (or yesterday, so the streak survives until tonight)
function streak(times, now = Date.now()) {
  const days = new Set(times.map(t => new Date(t).toDateString()));
  const d = new Date(now);
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(d.toDateString())) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

const chunk = (a, size) => Array.from({ length: Math.ceil(a.length / size) }, (_, i) => a.slice(i * size, (i + 1) * size));

// Two devices' progress -> one. Per-record newest `at` wins; marked uses +ts (on) / -ts (off).
const newer = (x, y) => !x ? y : !y ? x : (y.at || 0) > (x.at || 0) ? y : x;
const mergeMap = (a = {}, b = {}, pick) => { const o = { ...a }; for (const k in b) o[k] = pick(a[k], b[k]); return o; };
const unionBy = (a = [], b = [], key) => [...new Map([...b, ...a].map(x => [x[key], x])).values()];
const keyed = (arr = [], ok) => Object.fromEntries(arr.filter(ok).map(x => [x.id, x]));
// your own/imported questions: edited ones carry `at`, deleted ones become {id, deleted, at} tombstones
const okCustom = q => validQ(q) || (!!q && q.deleted === true && typeof q.id === 'string');
function mergeState(a, b) {
  return {
    answers: mergeMap(a.answers, b.answers, newer),
    cards: mergeMap(a.cards, b.cards, newer),
    notes: mergeMap(a.notes, b.notes, newer),
    highlights: mergeMap(a.highlights, b.highlights, newer),
    marked: mergeMap(a.marked, b.marked, (x = 0, y = 0) => Math.abs(y) > Math.abs(x) ? y : x),
    tests: unionBy(a.tests, b.tests, 'id').sort((x, y) => y.id - x.id),
    custom: Object.values(mergeMap(keyed(a.custom, okCustom), keyed(b.custom, okCustom), newer)),
    plan: newer(a.plan, b.plan),
  };
}

if (typeof module !== 'undefined') module.exports = { validQ, buildPool, breakdown, reviewCard, mergeState, streak, chunk };

// ---------------------------------------------------------------- DOM
if (typeof document !== 'undefined') {
  var S = { answers: {}, marked: {}, tests: [], cards: {}, notes: {}, highlights: {}, custom: [], current: null };
  try { Object.assign(S, JSON.parse(localStorage.getItem(STORE)) || {}); } catch { }
  var server = location.protocol.startsWith('http'); // served by server.js (file:// = no sync)
  var syncTimer, lastSync = 0;
  var save = () => {
    localStorage.setItem(STORE, JSON.stringify(S));
    if (server) { clearTimeout(syncTimer); syncTimer = setTimeout(() => sync().catch(() => { }), 3000); }
  };
  var T = null; // test being taken or reviewed; S.current holds a suspended/in-progress one
  var cur = 'create';
  var app = document.getElementById('app');
  var $ = s => document.querySelector(s);
  var esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  var rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>').split(/\n\n+/).map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');
  var allQ = () => [...(typeof QUESTIONS !== 'undefined' ? QUESTIONS : []), ...S.custom.filter(q => !q.deleted)];
  var tomb = id => ({ id, deleted: true, at: Date.now() });
  var byId = id => allQ().find(q => q.id === id);
  var uniq = (qs, k) => [...new Set(qs.map(q => q[k]))].sort();
  var fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  var letter = k => String.fromCharCode(65 + k);
  var meter = pct => `<div class=meter><i style="width:${pct}%"></i></div>`;
  var normHTML = s => { const t = document.createElement('template'); t.innerHTML = s; return t.innerHTML; };

  document.querySelectorAll('header [data-view]').forEach(b => b.onclick = () => show(b.dataset.view));

  function show(view) {
    if (T && !T.review) return renderExam(); // suspend or end the block first
    T = null; cur = view;
    document.querySelectorAll('header [data-view]').forEach(b => b.classList.toggle('on', b.dataset.view === view));
    ({ create: viewCreate, plan: viewPlan, tests: viewTests, perf: viewPerf, notes: viewNotes, cards: viewCards, library: viewLibrary })[view]();
  }

  // ---------- Font size
  var font = +localStorage.getItem('openuworld.font') || 16;
  var setFont = d => { font = Math.min(24, Math.max(12, font + d)); document.documentElement.style.fontSize = font + 'px'; localStorage.setItem('openuworld.font', font); };
  $('#fminus').onclick = () => setFont(-1); $('#fplus').onclick = () => setFont(1); setFont(0);

  // ---------- Theme: auto (follow system) -> light -> dark
  var THEMES = ['auto', 'light', 'dark'];
  var setTheme = t => {
    t === 'auto' ? delete document.documentElement.dataset.theme : document.documentElement.dataset.theme = t;
    $('#theme').textContent = { auto: '◐ Auto', light: '☀ Light', dark: '☾ Dark' }[t];
    localStorage.setItem('openuworld.theme', t);
  };
  setTheme(THEMES.includes(localStorage.getItem('openuworld.theme')) ? localStorage.getItem('openuworld.theme') : 'auto');
  $('#theme').onclick = () => setTheme(THEMES[(THEMES.indexOf(localStorage.getItem('openuworld.theme') || 'auto') + 1) % 3]);

  // ---------- Click any question/explanation image to enlarge it
  app.addEventListener('click', e => {
    if (!e.target.matches('.q img, .card img')) return;
    const d = $('#dlg');
    d.className = 'wide';
    d.innerHTML = `<form method=dialog><img src="${esc(e.target.getAttribute('src'))}" alt="" style="max-width:100%;max-height:75vh"><p><button>Close</button></p></form>`;
    d.addEventListener('close', () => d.className = '', { once: true });
    d.showModal();
  });

  // ---------- Create test
  function viewCreate() {
    const qs = allQ();
    const box = (name, vals) => vals.map(v =>
      `<label class=chk><input type=checkbox name=${name} value="${esc(v)}"> ${esc(v)} <small>(${qs.filter(q => q[name] === v).length})</small></label>`).join('');
    const sus = S.current;
    app.innerHTML = `<h2>Create Test</h2>
    ${sus ? `<div class=card>Suspended ${sus.blocks ? `practice exam, block ${sus.block} of ${sus.blocks}` : 'test'}: ${sus.qids.length} questions, ${sus.mode} mode, ${Object.keys(sus.picks).length} answered.
      <button class=primary id=resume>Resume</button> <button id=discard>Discard</button></div>` : ''}
    <form id=f>
      <fieldset><legend>Mode</legend>
        <label><input type=radio name=mode value=tutor checked> Tutor (explanation after each question)</label>
        <label><input type=radio name=mode value=timed> Timed (${SECS_PER_Q}s per question)</label></fieldset>
      <fieldset><legend>Question pool</legend>${['all', 'unused', 'incorrect', 'omitted', 'correct', 'marked'].map((v, i) =>
        `<label><input type=radio name=filter value=${v} ${i ? '' : 'checked'}> ${v}</label>`).join('')}</fieldset>
      <fieldset><legend>Exam <small>(none checked = all)</small></legend>${box('exam', uniq(qs, 'exam'))}</fieldset>
      <fieldset><legend>Subject</legend>${box('subject', uniq(qs, 'subject'))}</fieldset>
      <fieldset><legend>System</legend>${box('system', uniq(qs, 'system'))}</fieldset>
      <p><label>Keyword <input type=text name=q placeholder="e.g. bradykinin"></label>
        <label>Questions per block <input type=number name=n value=10 min=1 max=40></label>
        <label>Blocks <input type=number name=blocks value=1 min=1 max=8 title="More than 1 = practice exam with breaks between blocks"></label>
        <span id=avail></span></p>
      <p class=hint>For a full practice exam, use Timed mode with 40 questions per block (Step 1: 7 blocks, Step 2 CK: 8, Step 3: 6 per day).</p>
      <button class=primary>Generate Test</button>
    </form>`;
    if (sus) {
      $('#resume').onclick = () => { T = S.current; renderExam(); };
      $('#discard').onclick = () => { if (confirm('Discard the suspended test? Graded answers are kept.')) { S.current = null; save(); viewCreate(); } };
    }
    const f = $('#f');
    const opts = () => { const d = new FormData(f); return { exams: d.getAll('exam'), subjects: d.getAll('subject'), systems: d.getAll('system'), filter: d.get('filter'), q: d.get('q'), mode: d.get('mode'), n: Math.min(40, +d.get('n') || 1), blocks: Math.min(8, +d.get('blocks') || 1) }; };
    const upd = () => $('#avail').textContent = `${buildPool(qs, S, opts()).length} available`;
    f.oninput = upd; upd();
    f.onsubmit = e => {
      e.preventDefault();
      if (S.current && !confirm('This replaces your suspended test. Continue?')) return;
      const o = opts(), pool = shuffle(buildPool(qs, S, o)).slice(0, o.n * o.blocks);
      if (!pool.length) return alert('No questions match those filters.');
      const [first, ...queue] = chunk(pool.map(q => q.id), o.n);
      startTest(first, o.mode, queue.length ? { exam: Date.now(), block: 1, blocks: queue.length + 1, queue } : {});
    };
  }

  var newBlock = (qids, mode, extra = {}) => ({ id: Date.now(), mode, qids, i: 0, picks: {}, struck: {}, time: {}, submitted: {}, remaining: qids.length * SECS_PER_Q, ...extra });
  var startTest = (qids, mode, extra) => { T = S.current = newBlock(qids, mode, extra); save(); renderExam(); };

  // ---------- Exam
  function status(id) {
    if (!T.submitted[id]) return T.picks[id] != null ? 'answered' : '';
    return T.picks[id] === byId(id).answer ? 'right' : 'wrong';
  }

  function stemHTML(q) {
    const base = rich(q.stem) + (q.image ? `<img src="${esc(q.image)}" alt="">` : ''), h = S.highlights[q.id]?.html;
    // only reuse saved highlights if they are exactly the stem plus <mark> tags
    return h && h.replace(/<\/?mark>/g, '') === normHTML(base) ? h : base;
  }

  function renderExam() {
    const q = byId(T.qids[T.i]), pick = T.picks[q.id], shown = T.review || T.submitted[q.id], struck = T.struck[q.id] || [];
    app.innerHTML = `<div class=exam>
      <div class=bar>${T.blocks && !T.review ? `<span>Block ${T.block} of ${T.blocks}</span>` : ''}<b>Item ${T.i + 1} of ${T.qids.length}</b> <span class=hint>ID ${esc(q.id)}</span>
        <label><input type=checkbox id=mark ${S.marked[q.id] > 0 ? 'checked' : ''}> Mark</label>
        <span class=sp></span><span id=clock></span>
        <button onclick="hl()" title="Select text in the question, then click">Highlight</button>
        <button onclick="clearHl()">Clear highlights</button>
        <button onclick="notes()">Notes${S.notes[q.id]?.text ? ' ✎' : ''}</button>
        <button onclick="modal('labs')">Lab Values</button>
        <button onclick="modal('calc')">Calculator</button></div>
      <nav class=qnav>${T.qids.map((id, k) => `<button class="${k === T.i ? 'cur' : ''} ${status(id)}" onclick="go(${k})">${k + 1}${S.marked[id] > 0 ? ' ⚑' : ''}</button>`).join('')}</nav>
      <main class=q>
        <div id=stem>${stemHTML(q)}</div>
        <ol class=choices>${q.choices.map((c, k) => `<li data-k=${k} class="${struck.includes(k) ? 'struck' : ''} ${shown ? (k === q.answer ? 'right' : k === pick ? 'wrong' : '') : ''}">
          <label><input type=radio name=c value=${k} ${k === pick ? 'checked' : ''} ${shown ? 'disabled' : ''}> ${esc(c)}</label></li>`).join('')}</ol>
        <p class=hint>Right-click a choice to strike it out. Keys: A–${letter(q.choices.length - 1)} pick, ←/→ move${T.mode === 'tutor' ? ', Enter submit' : ''}.</p>
        ${shown ? explain(q, pick) : ''}
      </main>
      <div class=bar>
        <button onclick="go(T.i-1)" ${T.i ? '' : 'disabled'}>◀ Previous</button>
        ${!shown && T.mode === 'tutor' ? '<button class=primary onclick="submitQ()">Submit</button>' : ''}
        <button onclick="go(T.i+1)" ${T.i < T.qids.length - 1 ? '' : 'disabled'}>Next ▶</button>
        <span class=sp></span>
        ${T.review ? '<button onclick="exitReview()">Exit Review</button>' : '<button onclick="suspend()">Suspend</button> <button onclick="endTest()">End Block</button>'}
      </div></div>`;
    $('#mark').onchange = e => { S.marked[q.id] = (e.target.checked ? 1 : -1) * Date.now(); save(); renderExam(); };
    app.querySelector('.choices').onchange = e => { T.picks[q.id] = +e.target.value; save(); };
    app.querySelectorAll('.choices li').forEach(li => li.oncontextmenu = e => {
      e.preventDefault();
      if (shown) return;
      const k = +li.dataset.k, s = T.struck[q.id] ??= [];
      s.includes(k) ? s.splice(s.indexOf(k), 1) : s.push(k);
      save(); renderExam();
    });
    clock();
  }

  function explain(q, pick) {
    return `<section class=expl>
      <h3 class="${pick === q.answer ? 'ok' : 'bad'}">${pick === q.answer ? 'Correct' : pick == null ? 'Omitted' : 'Incorrect'} — correct answer: ${letter(q.answer)}</h3>
      ${rich(q.explanation)}
      ${q.objective ? `<div class=obj><b>Educational objective:</b> ${esc(q.objective)}</div>` : ''}
      ${S.notes[q.id]?.text ? `<div class=obj><b>My notes:</b> ${rich(S.notes[q.id].text)}</div>` : ''}
      <p class=hint>${esc(q.exam)} · ${esc(q.subject)} · ${esc(q.system)} · ${fmt(T.time[q.id] || 0)} spent
        · <button onclick="addCard('${q.id}')">${S.cards[q.id] && !S.cards[q.id].deleted ? 'In flashcards ✓' : '+ Flashcard'}</button>
        <button onclick="selToNotes()" title="Select text in the explanation first">Add selection to notes</button></p>
    </section>`;
  }

  window.go = k => { if (k < 0 || k >= T.qids.length) return; T.i = k; if (!T.review) save(); renderExam(); };
  var cardIn = id => { if (!S.cards[id] || S.cards[id].deleted) S.cards[id] = { interval: 0, due: Date.now(), at: Date.now() }; };
  window.addCard = id => { cardIn(id); save(); renderExam(); };

  function grade(id) {
    const q = byId(id), pick = T.picks[id], correct = pick === q.answer;
    S.answers[id] = { pick: pick ?? null, correct, time: T.time[id] || 0, at: Date.now() };
    if (!correct) cardIn(id);
    T.submitted[id] = true;
  }

  window.submitQ = () => {
    const id = T.qids[T.i];
    if (T.picks[id] == null) return alert('Select an answer first.');
    grade(id); save(); renderExam();
  };

  window.suspend = () => { save(); T = null; show('create'); };

  window.endTest = (force) => {
    if (!force && !confirm('End this block? Unanswered questions count as omitted.')) return;
    T.qids.forEach(id => T.submitted[id] || grade(id));
    const score = T.qids.filter(id => T.picks[id] === byId(id).answer).length, done = T;
    S.tests.unshift({ id: T.id, date: T.id, mode: T.mode, qids: T.qids, picks: T.picks, time: T.time, score, exam: T.exam, block: T.block, blocks: T.blocks });
    S.current = T = null;
    if (done.queue?.length) {
      S.current = newBlock(done.queue[0], done.mode, { exam: done.exam, block: done.block + 1, blocks: done.blocks, queue: done.queue.slice(1), breakUsed: done.breakUsed || 0 });
      save(); return breakScreen(done);
    }
    save();
    results(done.blocks ? examSummary(done.exam) : S.tests[0]);
  };

  var brkTimer;
  function breakScreen(done) {
    const used0 = S.current.breakUsed, t0 = Date.now(), used = () => used0 + Math.floor((Date.now() - t0) / 1000);
    app.innerHTML = `<h2>Block ${done.block} of ${done.blocks} complete</h2><div class=card>
      <p>Take a break. Block ${done.block + 1} starts when you are ready. You can also stop now and resume later from Create Test.</p>
      <p>Break time left for this exam: <b id=brk></b> <span class=hint>(45 min total, shared across all breaks)</span></p>
      <p><button class=primary id=nextb>Start block ${done.block + 1}</button> <button id=later>Resume later</button></p></div>`;
    const tickB = () => {
      const el = $('#brk'), left = BREAK_SECS - used();
      if (!el) return clearInterval(brkTimer);
      el.textContent = left >= 0 ? fmt(left) : `over by ${fmt(-left)}`;
      el.className = left < 0 ? 'bad' : '';
    };
    clearInterval(brkTimer); brkTimer = setInterval(tickB, 1000); tickB();
    $('#nextb').onclick = () => { clearInterval(brkTimer); T = S.current; T.id = Date.now(); T.breakUsed = used(); save(); renderExam(); };
    $('#later').onclick = () => { clearInterval(brkTimer); S.current.breakUsed = used(); save(); show('create'); };
  }

  // all blocks of one practice exam as a single test-shaped object, so results() and review() just work
  function examSummary(examId) {
    const bl = S.tests.filter(t => t.exam === examId).reverse();
    return {
      id: examId, date: examId, mode: bl[0].mode, label: `Practice exam (${bl.length} blocks)`,
      qids: bl.flatMap(t => t.qids), picks: Object.assign({}, ...bl.map(t => t.picks)), time: Object.assign({}, ...bl.map(t => t.time)),
      score: bl.reduce((s, t) => s + t.score, 0),
    };
  }

  window.exitReview = () => { const back = T.back || 'tests'; T = null; show(back); };

  function review(test, i = 0, back) {
    T = { ...test, i, back, review: true, struck: {}, submitted: Object.fromEntries(test.qids.map(id => [id, true])) };
    renderExam();
  }
  var openQ = (id, back) => review({ id: 0, mode: 'tutor', qids: [id], picks: { [id]: S.answers[id]?.pick }, time: { [id]: S.answers[id]?.time || 0 } }, 0, back);

  setInterval(() => {
    if (!T || T.review) return;
    const id = T.qids[T.i];
    if (!T.submitted[id]) T.time[id] = (T.time[id] || 0) + 1;
    if (T.mode === 'timed' && --T.remaining <= 0) return endTest(true);
    clock();
    if (T.remaining % 10 === 0) localStorage.setItem(STORE, JSON.stringify(S)); // timer ticks don't trigger sync
  }, 1000);

  function clock() {
    const c = $('#clock');
    if (!c || !T) return;
    c.textContent = T.review ? 'Review' : T.mode === 'timed' ? `Block time left ${fmt(T.remaining)}` : `Question time ${fmt(T.time[T.qids[T.i]] || 0)}`;
  }

  window.hl = () => {
    const s = getSelection();
    if (!s.rangeCount || s.isCollapsed) return;
    const r = s.getRangeAt(0), stem = $('#stem');
    if (!stem.contains(r.commonAncestorContainer)) return;
    try { r.surroundContents(document.createElement('mark')); } catch { return alert('Highlight within one paragraph at a time.'); }
    s.removeAllRanges();
    S.highlights[T.qids[T.i]] = { html: stem.innerHTML, at: Date.now() };
    save();
  };
  window.clearHl = () => { S.highlights[T.qids[T.i]] = { html: '', at: Date.now() }; save(); renderExam(); };

  window.selToNotes = () => {
    const s = getSelection(), text = s.toString().trim(), ex = $('.expl');
    if (!text || !ex || !ex.contains(s.anchorNode)) return alert('Select some explanation text first.');
    const id = T.qids[T.i], old = S.notes[id]?.text;
    S.notes[id] = { text: old ? `${old}\n\n${text}` : text, at: Date.now() };
    save(); renderExam();
  };

  window.notes = () => {
    const id = T.qids[T.i], d = $('#dlg');
    d.className = '';
    d.innerHTML = `<form method=dialog><h3>Notes</h3><textarea id=nt rows=8>${esc(S.notes[id]?.text)}</textarea><p><button class=primary>Save</button></p></form>`;
    $('#nt').oninput = e => { S.notes[id] = { text: e.target.value, at: Date.now() }; save(); };
    d.querySelector('form').onsubmit = () => setTimeout(renderExam);
    d.showModal();
  };

  document.addEventListener('keydown', e => {
    if (!T || $('#dlg').open || e.target.matches('input[type=text],input[type=number],input[type=password],textarea')) return;
    const q = byId(T.qids[T.i]), k = e.key.toUpperCase().charCodeAt(0) - 65;
    if (e.key.toLowerCase() === 'm' && !T.review && !e.ctrlKey && !e.metaKey) $('#mark').click();
    else if (e.key === 'ArrowRight') go(T.i + 1);
    else if (e.key === 'ArrowLeft') go(T.i - 1);
    else if (e.key === 'Enter' && T.mode === 'tutor' && !T.review && !T.submitted[q.id]) submitQ();
    else if (e.key.length === 1 && k >= 0 && k < q.choices.length && !T.review && !T.submitted[q.id]) { T.picks[q.id] = k; save(); renderExam(); }
  });

  // ---------- Lab values / calculator
  const LABS = [
    ['Serum', ''], ['Sodium', '136–145 mEq/L'], ['Potassium', '3.5–5.0 mEq/L'], ['Chloride', '95–105 mEq/L'], ['Bicarbonate', '22–28 mEq/L'],
    ['BUN', '7–18 mg/dL'], ['Creatinine', '0.6–1.2 mg/dL'], ['Glucose (fasting)', '70–100 mg/dL'], ['Calcium', '8.4–10.2 mg/dL'],
    ['Magnesium', '1.5–2.0 mEq/L'], ['Phosphorus', '3.0–4.5 mg/dL'], ['Albumin', '3.5–5.5 g/dL'], ['AST', '12–38 U/L'], ['ALT', '10–40 U/L'],
    ['Alkaline phosphatase', '25–100 U/L'], ['Bilirubin, total', '0.1–1.0 mg/dL'], ['TSH', '0.4–4.0 μU/mL'], ['Free T4', '0.9–1.7 ng/dL'],
    ['Hematology', ''], ['Hemoglobin', 'M 13.5–17.5, F 12.0–16.0 g/dL'], ['Hematocrit', 'M 41–53%, F 36–46%'], ['MCV', '80–100 fL'],
    ['Leukocytes', '4,500–11,000/mm³'], ['Platelets', '150,000–400,000/mm³'], ['PT', '11–15 s'], ['aPTT', '25–40 s'], ['INR', '0.8–1.2'],
    ['Arterial blood gas', ''], ['pH', '7.35–7.45'], ['PaCO₂', '35–45 mm Hg'], ['PaO₂', '75–105 mm Hg'],
  ];

  window.modal = kind => {
    const d = $('#dlg');
    d.className = '';
    d.innerHTML = kind === 'labs'
      ? `<form method=dialog><h3>Reference ranges</h3><input type=text id=lf placeholder="Filter"><table>${LABS.map(([n, v]) => v ? `<tr><td>${n}</td><td>${v}</td></tr>` : `<tr><th colspan=2>${n}</th></tr>`).join('')}</table><p><button>Close</button></p></form>`
      : `<form method=dialog><h3>Calculator</h3><input type=text id=ce placeholder="e.g. (140-128)*0.6*70" size=28 autocomplete=off> = <output id=co></output><p><button>Close</button></p></form>`;
    d.showModal();
    if (kind === 'labs') $('#lf').oninput = e => d.querySelectorAll('tr').forEach(tr => tr.hidden = !!tr.querySelector('td') && !tr.textContent.toLowerCase().includes(e.target.value.toLowerCase()));
    if (kind === 'calc') $('#ce').oninput = e => {
      const v = e.target.value;
      // only digits and arithmetic reach Function()
      try { $('#co').value = /^[\d+\-*/().\s]+$/.test(v) ? +Function(`return (${v})`)().toFixed(4) : ''; } catch { $('#co').value = ''; }
    };
  };

  // ---------- Results / previous tests
  function results(test, f = 'all') {
    const right = id => test.picks[id] === byId(id).answer;
    const keep = { all: () => true, correct: right, incorrect: id => !right(id), marked: id => S.marked[id] > 0 }[f];
    const qs = test.qids.map(byId);
    app.innerHTML = `<h2>${test.label || (test.blocks ? `Practice exam — block ${test.block} of ${test.blocks}` : 'Test results')}</h2>
      <div class=stats><div>Score<b>${Math.round(100 * test.score / qs.length)}%</b></div><div>Correct<b>${test.score} / ${qs.length}</b></div>
      <div>Mode<b>${test.mode}</b></div><div>Avg time<b>${fmt(Math.round(qs.reduce((s, q) => s + (test.time[q.id] || 0), 0) / qs.length))}</b></div></div>
      <p>${['all', 'correct', 'incorrect', 'marked'].map(x => `<button data-f=${x} class="${x === f ? 'primary' : ''}">${x}</button>`).join(' ')}
        <span class=sp></span> ${test.score < qs.length ? `<button id=retry>Retry ${qs.length - test.score} incorrect as a new test</button>` : ''}</p>
      <table><tr><th>#</th><th></th><th>ID</th><th>Subject</th><th>System</th><th>Time</th><th></th></tr>
      ${qs.map((q, i) => keep(q.id) ? `<tr><td>${i + 1}</td><td>${right(q.id) ? '<span class=ok>✓</span>' : '<span class=bad>✗</span>'}</td><td>${esc(q.id)}</td>
        <td>${esc(q.subject)}</td><td>${esc(q.system)}</td><td>${fmt(test.time[q.id] || 0)}</td><td><button data-i=${i}>Review</button></td></tr>` : '').join('')}</table>`;
    app.querySelectorAll('[data-f]').forEach(b => b.onclick = () => results(test, b.dataset.f));
    $('#retry') && ($('#retry').onclick = () => {
      if (S.current && !confirm('This replaces your suspended test. Continue?')) return;
      startTest(shuffle(test.qids.filter(id => !right(id))).slice(0, 40), test.mode);
    });
    app.querySelectorAll('[data-i]').forEach(b => b.onclick = () => review(test, +b.dataset.i));
  }

  function viewTests() {
    app.innerHTML = `<h2>Previous Tests</h2>${S.tests.length ? `<table><tr><th>Date</th><th>Mode</th><th>Block</th><th>Questions</th><th>Score</th><th></th></tr>
      ${S.tests.map((t, i) => `<tr><td>${new Date(t.date).toLocaleString()}</td><td>${t.mode}</td><td>${t.blocks ? `${t.block} / ${t.blocks}` : '—'}</td><td>${t.qids.length}</td>
        <td>${Math.round(100 * t.score / t.qids.length)}%</td><td><button data-r=${i}>Results</button> <button data-v=${i}>Review</button>
        ${t.blocks ? `<button data-x=${i}>Full exam</button>` : ''}</td></tr>`).join('')}</table>`
      : '<p>No tests yet.</p>'}`;
    app.querySelectorAll('[data-r]').forEach(b => b.onclick = () => results(S.tests[b.dataset.r]));
    app.querySelectorAll('[data-x]').forEach(b => b.onclick = () => results(examSummary(S.tests[b.dataset.x].exam)));
    app.querySelectorAll('[data-v]').forEach(b => b.onclick = () => review(S.tests[b.dataset.v]));
  }

  // ---------- Performance
  function viewPerf() {
    const qs = allQ(), used = qs.filter(q => S.answers[q.id]), right = used.filter(q => S.answers[q.id].correct);
    const omitted = used.filter(q => S.answers[q.id].pick == null).length;
    const avg = used.length ? Math.round(used.reduce((s, q) => s + S.answers[q.id].time, 0) / used.length) : 0;
    const table = key => `<div class=card><h3>By ${key}</h3><table><tr><th>${key}</th><th>Correct</th><th></th><th>%</th></tr>
      ${breakdown(qs, S.answers, key).map(r => `<tr><td>${esc(r.name)}</td><td>${r.correct}/${r.total}</td><td>${meter(r.pct)}</td><td>${r.pct}%</td></tr>`).join('') || '<tr><td colspan=4>No data yet.</td></tr>'}</table></div>`;
    const trend = S.tests.slice(0, 20).reverse();
    app.innerHTML = `<h2>Performance</h2>
      <div class=stats><div>Correct<b>${used.length ? Math.round(100 * right.length / used.length) : 0}%</b></div>
      <div>Incorrect<b>${used.length - right.length - omitted}</b></div><div>Omitted<b>${omitted}</b></div>
      <div>Used<b>${used.length} / ${qs.length}</b></div><div>Avg time / question<b>${fmt(avg)}</b></div></div>
      ${trend.length > 1 ? `<div class=card><h3>Last ${trend.length} tests</h3><div class=trend>${trend.map(t => { const p = Math.round(100 * t.score / t.qids.length); return `<i style="height:${Math.max(p, 2)}%" title="${new Date(t.date).toLocaleDateString()}: ${p}%"></i>`; }).join('')}</div></div>` : ''}
      ${table('exam')}${table('subject')}${table('system')}`;
  }

  // ---------- Study planner
  function viewPlan() {
    const p = S.plan || {}, qs = allQ();
    const today = new Date(); today.setHours(0, 0, 0, 0);
    let body = '<p>Set your exam date to get a daily question target.</p>';
    if (p.date) {
      const pool = qs.filter(q => !p.exams?.length || p.exams.includes(q.exam));
      const unused = pool.filter(q => !S.answers[q.id]);
      const doneToday = pool.filter(q => S.answers[q.id]?.at >= +today).length;
      const days = Math.round((new Date(p.date + 'T00:00') - today) / DAY); // exam day itself not counted
      const target = days > 0 ? Math.ceil((unused.length + doneToday) / days) : 0;
      const left = Math.max(0, target - doneToday);
      const due = Object.entries(S.cards).filter(([id, c]) => !c.deleted && c.due <= Date.now() && byId(id)).length;
      const used = pool.length - unused.length;
      body = days <= 0 ? `<p>Your exam date (${esc(p.date)}) is today or has passed. Good luck! Set a new date below.</p>` : `
        <div class=stats><div>Days left<b>${days}</b></div><div>Unused questions<b>${unused.length}</b></div>
        <div>Today<b>${doneToday} / ${target}</b></div><div>Study streak<b>${streak(Object.values(S.answers).map(a => a.at))} d</b></div>
        <div>Flashcards due<b>${due}</b></div></div>
        <div class=card><p>Bank progress: ${used} / ${pool.length} ${meter(pool.length ? Math.round(100 * used / pool.length) : 0)}</p>
          <p>Today's target: ${doneToday} / ${target} ${meter(target ? Math.min(100, Math.round(100 * doneToday / target)) : 100)}</p>
          ${left && unused.length ? `<p><label><input type=radio name=pm value=tutor checked> Tutor</label> <label><input type=radio name=pm value=timed> Timed</label>
            <button class=primary id=today>Start today's questions (${Math.min(40, left, unused.length)})</button></p>`
            : `<p class=ok>${unused.length ? "Today's target is done." : 'Every question in your plan has been used. Review incorrect and marked questions from Create Test.'}</p>`}
          ${due ? `<p><button id=gocards>Review ${due} flashcards</button></p>` : ''}</div>`;
      setTimeout(() => {
        $('#today') && ($('#today').onclick = () => startTest(shuffle(unused).slice(0, Math.min(40, left)).map(q => q.id), document.querySelector('[name=pm]:checked').value));
        $('#gocards') && ($('#gocards').onclick = () => show('cards'));
      });
    }
    app.innerHTML = `<h2>Study Planner</h2>${body}
      <form id=pf class=card><h3>Plan</h3>
        <p><label>Exam date <input type=date name=date value="${esc(p.date)}" required></label></p>
        <p>${uniq(qs, 'exam').map(x => `<label class=chk><input type=checkbox name=exams value="${esc(x)}" ${p.exams?.includes(x) ? 'checked' : ''}> ${esc(x)}</label>`).join('')}
          <br><small class=hint>None checked = all exams.</small></p>
        <button class=primary>Save plan</button></form>`;
    $('#pf').onsubmit = e => {
      e.preventDefault();
      const d = new FormData(e.target);
      S.plan = { date: d.get('date'), exams: d.getAll('exams'), at: Date.now() };
      save(); viewPlan();
    };
  }

  // ---------- Notebook
  function viewNotes() {
    app.innerHTML = `<h2>My Notebook</h2><p><input type=text id=ns placeholder="Search notes"></p><div id=nl></div>`;
    const list = () => {
      const kw = $('#ns').value.toLowerCase();
      const rows = Object.entries(S.notes).filter(([id, n]) => n.text && byId(id) && n.text.toLowerCase().includes(kw)).sort((x, y) => y[1].at - x[1].at);
      $('#nl').innerHTML = rows.map(([id, n]) => { const q = byId(id); return `<div class=card><p class=hint>${esc(q.id)} · ${esc(q.exam)} · ${esc(q.subject)} · ${esc(q.system)} · ${new Date(n.at).toLocaleDateString()}</p>${rich(n.text)}<button data-id="${esc(id)}">Open question</button></div>`; }).join('')
        || '<p>No notes yet. Use the Notes button while answering a question.</p>';
      $('#nl').querySelectorAll('[data-id]').forEach(b => b.onclick = () => openQ(b.dataset.id, 'notes'));
    };
    $('#ns').oninput = list; list();
  }

  // ---------- Flashcards
  function viewCards(flipped = false) {
    const live = Object.entries(S.cards).filter(([id, c]) => !c.deleted && byId(id));
    const due = live.filter(([, c]) => c.due <= Date.now());
    if (!due.length) { app.innerHTML = `<h2>Flashcards</h2><p>Nothing due. ${live.length} cards total. Missed questions are added automatically.</p>`; return; }
    const [id, card] = due[0], q = byId(id);
    app.innerHTML = `<h2>Flashcards <small>(${due.length} due)</small></h2><div class=card>
      ${rich(q.stem)}<ol class=choices>${q.choices.map(c => `<li>${esc(c)}</li>`).join('')}</ol>
      ${flipped ? `<div class=expl><h3 class=ok>${letter(q.answer)}. ${esc(q.choices[q.answer])}</h3>${q.objective ? `<div class=obj>${esc(q.objective)}</div>` : rich(q.explanation)}</div>
        <p><button onclick="rate('${id}',0)">Again</button> <button class=primary onclick="rate('${id}',1)">Good (${card.interval * 2 || 1}d)</button>
        <button onclick="rate('${id}',-1)">Delete card</button></p>`
      : `<button class=primary id=flip>Show answer</button>`}</div>`;
    if (!flipped) $('#flip').onclick = () => viewCards(true);
  }
  window.rate = (id, g) => { S.cards[id] = g < 0 ? { deleted: true, at: Date.now() } : reviewCard(S.cards[id], g); save(); viewCards(); };

  // ---------- Sync: server.js merges per record into data/progress.json, so devices don't clobber each other
  var syncing = false;
  async function sync(overwrite = false, redraw = false) {
    if (!server || syncing) return;
    syncing = true;
    try {
      const { current, ...up } = S;
      const r = await fetch(`api/progress${overwrite ? '?overwrite' : ''}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(up) });
      if (!r.ok) throw Error(`server ${r.status}`);
      Object.assign(S, await r.json());
      localStorage.setItem(STORE, JSON.stringify(S));
      lastSync = Date.now();
      syncStatus(`Saved ${new Date(lastSync).toLocaleTimeString()}`);
      if (redraw && !T) show(cur); // pick up changes made on another device
    } catch (e) {
      syncStatus('Not saved to computer (is server.js running?)');
      throw e;
    } finally { syncing = false; }
  }
  var syncStatus = t => { $('#syncst').textContent = t; };
  addEventListener('focus', () => sync(false, true).catch(() => { }));

  var download = (data, name) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' }));
    a.download = name;
    a.click();
  };

  // ---------- Question editor (Library -> New / Edit)
  function viewEditor(id) {
    const q = id ? S.custom.find(c => c.id === id) : { exam: 'Step 1', choices: [], answer: 0 }, qs = allQ();
    const field = (k, label, size = 22) => `<label>${label} <input type=text name=${k} list=dl-${k} size=${size} required value="${esc(q[k])}"></label>
      <datalist id=dl-${k}>${uniq(qs, k).map(v => `<option value="${esc(v)}">`).join('')}</datalist>`;
    app.innerHTML = `<h2>${id ? `Edit question ${esc(id)}` : 'New question'}</h2><form id=ef class=card>
      <p>${field('exam', 'Exam', 12)} ${field('subject', 'Subject')} ${field('system', 'System')}</p>
      <p><label>Question stem <small class=hint>(blank line = new paragraph, **bold**, *italic*)</small><br><textarea name=stem rows=7 required>${esc(q.stem)}</textarea></label></p>
      <p><label>Answer choices, one per line<br><textarea name=choices rows=6 required>${esc(q.choices.join('\n'))}</textarea></label></p>
      <p><label>Correct answer letter <input type=text name=answer size=2 maxlength=1 required value="${id ? letter(q.answer) : ''}"></label></p>
      <p><label>Explanation<br><textarea name=explanation rows=9 required>${esc(q.explanation)}</textarea></label></p>
      <p><label>Educational objective <small class=hint>(optional)</small><br><input type=text name=objective size=70 value="${esc(q.objective)}"></label></p>
      <p><label>Image URL or path <small class=hint>(optional, e.g. images/ecg1.png)</small> <input type=text name=image size=40 value="${esc(q.image)}"></label></p>
      <p><button class=primary>Save</button> <button type=button id=ecancel>Cancel</button></p></form>`;
    $('#ecancel').onclick = () => show('library');
    $('#ef').onsubmit = e => {
      e.preventDefault();
      const d = new FormData(e.target), g = k => String(d.get(k) || '').trim();
      const choices = g('choices').split('\n').map(s => s.trim()).filter(Boolean);
      const nq = { id: id || `my-${Date.now()}`, exam: g('exam'), subject: g('subject'), system: g('system'), stem: g('stem'), choices,
        answer: g('answer').toUpperCase().charCodeAt(0) - 65, explanation: g('explanation'), at: Date.now() };
      if (g('objective')) nq.objective = g('objective');
      if (g('image')) nq.image = g('image');
      if (!validQ(nq)) return alert(`Check the form: at least 2 choices, and the answer letter must be A–${letter(Math.max(choices.length, 2) - 1)}.`);
      S.custom = S.custom.filter(c => c.id !== nq.id).concat(nq);
      save(); show('library');
    };
  }

  // ---------- Library: import questions / backup / sync
  function viewLibrary() {
    const live = S.custom.filter(q => !q.deleted), mine = live.filter(q => q.id.startsWith('my-')), imported = live.filter(q => !q.id.startsWith('my-'));
    app.innerHTML = `<h2>Library</h2>
      <div class=card><h3>Progress on this computer</h3>
        ${server ? `<p>Progress is saved to <code>data/progress.json</code> in the OpenUworld folder on the computer running <code>server.js</code>. ${lastSync ? `Last saved ${new Date(lastSync).toLocaleString()}.` : ''}</p>
          <p><button class=primary id=snow>Sync now</button></p>
          <p class=hint>To use your phone or tablet, start the server with <code>node server.js --lan</code> and open the address it prints on that device (same Wi-Fi).</p>`
        : `<p>This page was opened as a file, so progress stays in this browser only. To save it on your computer and sync your devices, run <code>node server.js</code> in the OpenUworld folder and open <code>http://localhost:8642</code>.</p>`}</div>
      <div class=card><h3>My questions</h3>
        <p><button class=primary id=newq>+ New question</button> ${mine.length ? '<button id=expq>Export my questions (.json)</button>' : ''}</p>
        ${mine.length ? `<table>${mine.map(q => `<tr><td>${esc(q.id)}</td><td>${esc(q.exam)} · ${esc(q.subject)}</td><td>${esc(q.stem.slice(0, 90))}…</td>
          <td><button data-e="${q.id}">Edit</button> <button data-d="${q.id}">Delete</button></td></tr>`).join('')}</table>`
        : '<p class=hint>Questions you write show up in Create Test, Performance and the Planner, and sync like the rest of your progress.</p>'}</div>
      <div class=card><h3>Questions & backup</h3><p>${allQ().length} questions loaded (${imported.length} imported, ${mine.length} written by you).</p>
        <p><label>Import questions (.json array) or a progress backup: <input type=file id=imp accept=".json,application/json"></label></p>
        <p><button id=exp>Download progress backup</button> <button id=clr>Remove imported questions</button> <button id=rst>Reset all progress</button></p>
        <p class=hint>The question format is documented in README.md.</p></div>`;
    if (server) $('#snow').onclick = () => sync().then(viewLibrary, e => alert(`Sync failed: ${e.message}`));
    $('#imp').onchange = async e => {
      let data;
      try { data = JSON.parse(await e.target.files[0].text()); } catch { return alert('Not valid JSON.'); }
      if (!Array.isArray(data) && data.answers) { if (confirm('Merge this backup into current progress?')) { Object.assign(S, mergeState(S, data)); save(); alert('Backup merged.'); } return viewLibrary(); }
      const arr = Array.isArray(data) ? data : [], ok = arr.filter(validQ), have = new Set(allQ().map(q => q.id));
      const fresh = ok.filter(q => !have.has(q.id)).map(q => ({ ...q, at: Date.now() })), ids = new Set(fresh.map(q => q.id));
      S.custom = S.custom.filter(c => !ids.has(c.id)).concat(fresh); save();
      alert(`Imported ${fresh.length}. Skipped ${arr.length - ok.length} invalid and ${ok.length - fresh.length} duplicate IDs.`);
      viewLibrary();
    };
    $('#exp').onclick = () => download(S, `openuworld-backup-${new Date().toISOString().slice(0, 10)}.json`);
    $('#clr').onclick = () => { if (confirm(`Remove ${imported.length} imported questions? Questions you wrote are kept.`)) { S.custom = S.custom.map(c => c.deleted || c.id.startsWith('my-') ? c : tomb(c.id)); save(); viewLibrary(); } };
    $('#newq').onclick = () => viewEditor();
    $('#expq') && ($('#expq').onclick = () => download(mine.map(({ at, ...q }) => q), 'openuworld-my-questions.json'));
    app.querySelectorAll('[data-e]').forEach(b => b.onclick = () => viewEditor(b.dataset.e));
    app.querySelectorAll('[data-d]').forEach(b => b.onclick = () => {
      if (!confirm(`Delete question ${b.dataset.d}?`)) return;
      S.custom = S.custom.map(c => c.id === b.dataset.d ? tomb(c.id) : c); save(); viewLibrary();
    });
    $('#rst').onclick = () => {
      // ponytail: merge has no "reset" tombstone, so other devices re-upload their copy unless reset too
      if (!confirm(`Erase all answers, tests, marks, notes and flashcards${server ? ' here and in data/progress.json? Reset your other devices too, or they will sync their data back' : ''}?`)) return;
      Object.assign(S, { answers: {}, marked: {}, tests: [], cards: {}, notes: {}, highlights: {}, current: null, plan: undefined });
      localStorage.setItem(STORE, JSON.stringify(S));
      if (server) sync(true).catch(e => alert(e.message));
      viewLibrary();
    };
  }

  show('create');
  sync(false, true).catch(() => { });
}
