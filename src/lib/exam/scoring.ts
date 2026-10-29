export type ItemOutcome = { isCorrect: boolean; omitted: boolean; points: number };

/**
 * All-or-nothing scoring: correct only when the selected set equals the correct set.
 * A wrong (non-omitted) answer costs `negativeMark` points; omitting costs nothing.
 */
export function scoreItem(correctIds: readonly string[], selectedIds: readonly string[], negativeMark = 0): ItemOutcome {
  if (selectedIds.length === 0) return { isCorrect: false, omitted: true, points: 0 };
  const sel = new Set(selectedIds);
  const isCorrect = sel.size === correctIds.length && correctIds.every((id) => sel.has(id));
  return { isCorrect, omitted: false, points: isCorrect ? 1 : -Math.abs(negativeMark) };
}

export type SessionScore = { total: number; correct: number; incorrect: number; omitted: number; points: number; percent: number };

export function scoreSession(outcomes: readonly ItemOutcome[]): SessionScore {
  const total = outcomes.length;
  const correct = outcomes.filter((o) => o.isCorrect).length;
  const omitted = outcomes.filter((o) => o.omitted).length;
  const points = Math.round(outcomes.reduce((s, o) => s + o.points, 0) * 100) / 100;
  return {
    total, correct, omitted,
    incorrect: total - correct - omitted,
    points,
    percent: total ? Math.round((100 * correct) / total) : 0,
  };
}

/** Validates the shape of an answer before it is stored. */
export function validateSelection(type: 'SINGLE' | 'MULTIPLE', selectedIds: readonly string[], optionIds: readonly string[]): string | null {
  if (new Set(selectedIds).size !== selectedIds.length) return 'Duplicate answer choices.';
  if (selectedIds.some((id) => !optionIds.includes(id))) return 'That answer choice does not belong to this question.';
  if (type === 'SINGLE' && selectedIds.length > 1) return 'Choose only one answer.';
  return null;
}
