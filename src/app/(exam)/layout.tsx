import type { ReactNode } from 'react';
import { requireUserPage } from '@/lib/session';

// Focused, full-screen layout for taking a test: no site navigation, like a real exam.
export default async function ExamLayout({ children }: { children: ReactNode }) {
  await requireUserPage();
  return <div className="min-h-screen">{children}</div>;
}
