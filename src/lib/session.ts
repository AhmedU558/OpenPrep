import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Role } from '@/generated/prisma/enums';
import { auth } from './auth';
import { db } from './db';
import { AppError } from './errors';

export type CurrentUser = { id: string; name: string; email: string; role: Role; isAnonymous: boolean | null };

const RANK: Record<Role, number> = { LEARNER: 0, EDITOR: 1, ADMIN: 2 };

export async function getUser(): Promise<CurrentUser | null> {
  const s = await auth.api.getSession({ headers: await headers() });
  if (!s) return null;
  // role is read from the database, never from anything the client sent
  const u = await db.user.findUnique({ where: { id: s.user.id }, select: { id: true, name: true, email: true, role: true, isAnonymous: true } });
  return u;
}

/** For pages: redirect to login when signed out. */
export async function requireUserPage(): Promise<CurrentUser> {
  const u = await getUser();
  if (!u) redirect('/login');
  return u;
}

/** For server actions and route handlers: throw a typed error. */
export async function requireUser(): Promise<CurrentUser> {
  const u = await getUser();
  if (!u) throw new AppError('UNAUTHENTICATED', 'Please sign in.');
  return u;
}

export const hasRole = (u: Pick<CurrentUser, 'role'>, min: Role) => RANK[u.role] >= RANK[min];

export async function requireRole(min: Role): Promise<CurrentUser> {
  const u = await requireUser();
  if (!hasRole(u, min)) throw new AppError('FORBIDDEN', 'You do not have permission to do that.');
  return u;
}

export async function requireRolePage(min: Role): Promise<CurrentUser> {
  const u = await requireUserPage();
  if (!hasRole(u, min)) redirect('/dashboard');
  return u;
}
