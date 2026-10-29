import { notFound } from 'next/navigation';
import { QuestionEditor } from '@/components/admin/question-editor';
import { Card, PageHeader } from '@/components/ui';
import { canEditContent, canTransition, getQuestionContent } from '@/lib/admin';
import { db } from '@/lib/db';
import { AppError } from '@/lib/errors';
import { renderMarkdown } from '@/lib/markdown';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'Edit question · Admin' };

export default async function EditQuestion({ params }: { params: Promise<{ id: string }> }) {
  const actor = await requireRolePage('EDITOR');
  const { id } = await params;
  let q;
  try { q = await getQuestionContent(actor, id); }
  catch (e) { if (e instanceof AppError && e.code === 'NOT_FOUND') notFound(); throw e; }
  const [exams, subjects, systems] = await Promise.all([db.exam.findMany({ orderBy: { position: 'asc' } }), db.subject.findMany({ orderBy: { name: 'asc' } }), db.system.findMany({ orderBy: { name: 'asc' } })]);
  const transitions = (['DRAFT', 'REVIEW', 'PUBLISHED', 'ARCHIVED'] as const).filter((to) => to !== q.meta.status && canTransition(actor.role, q.meta.status, to));
  return (
    <>
      <PageHeader title={`Question ${q.content.code}`} subtitle={`Last updated ${q.meta.updatedAt.toLocaleString()}`} />
      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <QuestionEditor initial={q.content} meta={q.meta} transitions={transitions} canEdit={canEditContent(actor.role, q.meta.status)}
          taxonomy={{ exams: exams.map((x) => x.name), subjects: subjects.map((x) => x.name), systems: systems.map((x) => x.name) }} />
        <Card className="self-start xl:sticky xl:top-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">Saved preview</h2>
          <div className="prose-q text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(q.content.stem) }} />
          <ol className="mt-3 list-[upper-alpha] space-y-1 pl-5 text-sm">{q.content.options.map((o, i) => <li key={i} className={o.correct ? 'font-semibold text-ok' : ''}>{o.text}</li>)}</ol>
          <hr className="my-4 border-line" />
          <div className="prose-q text-sm" dangerouslySetInnerHTML={{ __html: renderMarkdown(q.content.explanation) }} />
        </Card>
      </div>
    </>
  );
}
