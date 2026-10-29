import { QuestionEditor } from '@/components/admin/question-editor';
import { PageHeader } from '@/components/ui';
import { db } from '@/lib/db';
import { requireRolePage } from '@/lib/session';

export const metadata = { title: 'New question · Admin' };

export default async function NewQuestion() {
  await requireRolePage('EDITOR');
  const [exams, subjects, systems] = await Promise.all([db.exam.findMany({ orderBy: { position: 'asc' } }), db.subject.findMany({ orderBy: { name: 'asc' } }), db.system.findMany({ orderBy: { name: 'asc' } })]);
  return (
    <>
      <PageHeader title="New question" subtitle="New questions start as drafts. Submit for review when ready; an admin publishes." />
      <QuestionEditor meta={null} transitions={[]} canEdit taxonomy={{ exams: exams.map((x) => x.name), subjects: subjects.map((x) => x.name), systems: systems.map((x) => x.name) }} />
    </>
  );
}
