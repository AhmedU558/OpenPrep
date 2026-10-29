import { notFound } from 'next/navigation';
import { ExamScreen } from '@/components/exam/exam-screen';
import { aiEnabled } from '@/lib/ai';
import { AppError } from '@/lib/errors';
import { getView } from '@/lib/exam/service';
import { requireUserPage } from '@/lib/session';

export const metadata = { title: 'Test' };

export default async function TestPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await requireUserPage();
  const view = await getView(user.id, id).catch((e) => {
    if (e instanceof AppError && e.code === 'NOT_FOUND') notFound();
    throw e;
  });
  return <ExamScreen initial={view} ai={aiEnabled()} />;
}
