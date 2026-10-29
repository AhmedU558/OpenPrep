// SM-2 style spaced repetition. Ratings: 1 Again, 2 Hard, 3 Good, 4 Easy.
export type Rating = 1 | 2 | 3 | 4;
export type CardState = { ease: number; interval: number; reps: number; lapses: number };

const DAY = 864e5;
const MIN_EASE = 1.3;

export function schedule(card: CardState, rating: Rating, now = new Date()): CardState & { due: Date } {
  let { ease, interval, reps } = card;
  const { lapses } = card;
  if (rating === 1) {
    // forgot: relearn soon
    return { ease: Math.max(MIN_EASE, ease - 0.2), interval: 0, reps: 0, lapses: lapses + 1, due: new Date(now.getTime() + 10 * 60e3) };
  }
  ease = Math.max(MIN_EASE, ease + (rating === 2 ? -0.15 : rating === 4 ? 0.15 : 0));
  if (reps === 0) interval = rating === 4 ? 4 : 1;
  else if (reps === 1) interval = rating === 2 ? 3 : rating === 4 ? 8 : 6;
  else interval = Math.max(interval + 1, Math.round(interval * (rating === 2 ? 1.2 : rating === 4 ? ease * 1.3 : ease)));
  reps += 1;
  return { ease: Math.round(ease * 100) / 100, interval, reps, lapses, due: new Date(now.getTime() + interval * DAY) };
}

/** Preview label for each button, e.g. "6d". */
export function previewIntervals(card: CardState, now = new Date()): Record<Rating, string> {
  const label = (r: Rating) => {
    const d = schedule(card, r, now);
    return d.interval === 0 ? '10m' : `${d.interval}d`;
  };
  return { 1: label(1), 2: label(2), 3: label(3), 4: label(4) };
}
