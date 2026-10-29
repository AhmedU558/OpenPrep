import { redirect } from 'next/navigation';
import { Logo } from '@/components/logo';
import { ButtonLink } from '@/components/ui';
import { GuestButton } from '@/components/auth-forms';
import { appName } from '@/lib/env';
import { getUser } from '@/lib/session';

const FEATURES = [
  ['Exam-style practice', 'Tutor and timed modes, custom blocks by subject and system, multi-block practice exams with breaks.'],
  ['Explanations that teach', 'Every option explained, key takeaways, references, highlight and strike-out tools, lab values, calculator.'],
  ['Remember it', 'Spaced-repetition flashcards made from what you miss, and a searchable notebook.'],
  ['Know where you stand', 'Accuracy by subject and system, score trends, time per question, weak topics, streaks.'],
  ['Plan to test day', 'Set your exam date and hours per day; get a daily schedule that adapts as you go.'],
  ['Free and open source', 'No subscription, no locked features, no ads. Run it yourself; your data stays yours.'],
];

export default async function Home() {
  if (await getUser()) redirect('/dashboard');
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <div className="flex gap-2">
          <ButtonLink href="/login" variant="ghost">Sign in</ButtonLink>
          <ButtonLink href="/register">Create free account</ButtonLink>
        </div>
      </header>
      <main id="main">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pt-20">
          <p className="text-sm font-medium uppercase tracking-wider text-brand">USMLE Step 1 · Step 2 CK · Step 3</p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Serious exam practice, <span className="text-brand">free for everyone.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            {appName()} is an open-source question bank and study platform. Practice in an exam-like interface, learn from detailed
            explanations, and track exactly where you need to improve.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/register">Get started</ButtonLink>
            <GuestButton />
          </div>
          <p className="mt-3 text-sm text-muted">Guest mode needs no email. Create an account later and your progress comes with you.</p>
        </section>
        <section className="border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(([t, d]) => (
              <div key={t}>
                <h2 className="font-semibold">{t}</h2>
                <p className="mt-1.5 text-muted">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <footer className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
          Independent open-source project. Not affiliated with any exam board or commercial question bank. Demo questions are original and
          for illustration only; they are not medical advice.
        </footer>
      </main>
    </div>
  );
}
