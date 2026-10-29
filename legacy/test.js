// Run: node test.js
const assert = require('assert');
const { validQ, buildPool, breakdown, reviewCard, mergeState } = require('./app.js');
const QUESTIONS = require('./questions.js');

QUESTIONS.forEach(q => assert(validQ(q), `invalid question ${q.id}`));
assert.strictEqual(new Set(QUESTIONS.map(q => q.id)).size, QUESTIONS.length, 'duplicate ids');
assert(!validQ({ ...QUESTIONS[0], answer: 9 }), 'answer out of range must fail');
assert(!validQ({ ...QUESTIONS[0], id: "x');alert(1)//" }), 'unsafe id must fail');

const st = {
  answers: { 's1-0001': { pick: 0, correct: false }, 's1-0002': { pick: 1, correct: true }, 's1-0003': { pick: null, correct: false } },
  marked: { 's3-0001': 5, 's3-0002': -9 },
};
const none = { exams: [], subjects: [], systems: [] };
const ids = o => buildPool(QUESTIONS, st, { ...none, ...o }).map(q => q.id);
assert.strictEqual(ids({ filter: 'all' }).length, QUESTIONS.length);
assert.strictEqual(ids({ filter: 'unused' }).length, QUESTIONS.length - 3);
assert.deepStrictEqual(ids({ filter: 'incorrect' }), ['s1-0001']);
assert.deepStrictEqual(ids({ filter: 'omitted' }), ['s1-0003']);
assert.deepStrictEqual(ids({ filter: 'correct' }), ['s1-0002']);
assert.deepStrictEqual(ids({ filter: 'marked' }), ['s3-0001']);
assert.strictEqual(ids({ exams: ['Step 2 CK'], filter: 'all' }).length, QUESTIONS.filter(q => q.exam === 'Step 2 CK').length);
assert.deepStrictEqual(ids({ filter: 'all', q: 'BRADYKININ' }), ['s1-0001']);

// edited custom question: newer `at` wins; deleted tombstones survive the merge
const mine = { ...QUESTIONS[0], id: 'my-1', at: 1 };
const edited = mergeState({ custom: [mine] }, { custom: [{ ...mine, stem: 'edited', at: 2 }] });
assert.strictEqual(edited.custom[0].stem, 'edited');
assert.strictEqual(mergeState(edited, { custom: [{ id: 'my-1', deleted: true, at: 3 }] }).custom[0].deleted, true);

const b = breakdown(QUESTIONS, st.answers, 'exam');
assert.deepStrictEqual(b, [{ name: 'Step 1', total: 3, correct: 1, pct: 33 }]);

// sync merge: newest record wins per key, tests/custom union, unmark (-ts) beats older mark
const A = { answers: { x: { correct: false, at: 1 }, y: { correct: true, at: 5 } }, marked: { m: 10 }, tests: [{ id: 1 }], notes: {}, cards: {}, highlights: {}, custom: [] };
const B = { answers: { x: { correct: true, at: 2 } }, marked: { m: -20 }, tests: [{ id: 2 }, { id: 1 }], custom: [QUESTIONS[0], { id: 'bad' }] };
const M = mergeState(A, B);
assert.strictEqual(M.answers.x.correct, true);
assert.strictEqual(M.answers.y.correct, true);
assert.strictEqual(M.marked.m, -20);
assert.deepStrictEqual(M.tests.map(t => t.id), [2, 1]);
assert.deepStrictEqual(M.custom.map(q => q.id), [QUESTIONS[0].id], 'invalid remote questions dropped');
assert.deepStrictEqual(mergeState(M, M), M, 'merge is idempotent');

assert.deepStrictEqual(reviewCard({ interval: 0 }, true, 0), { interval: 1, due: 864e5, at: 0 });
assert.strictEqual(reviewCard({ interval: 4 }, true, 0).interval, 8);
assert.strictEqual(reviewCard({ interval: 4 }, false, 0).interval, 0);

const { streak, chunk } = require('./app.js');
assert.deepStrictEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
const now = new Date(2026, 9, 28, 12).getTime(), day = 864e5;
assert.strictEqual(streak([now, now - day, now - 2 * day, now - 4 * day], now), 3);
assert.strictEqual(streak([now - day, now - 2 * day], now), 2, 'streak survives until tonight');
assert.strictEqual(streak([now - 3 * day], now), 0);

console.log('ok');
