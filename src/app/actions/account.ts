'use server';
import { cookies } from 'next/headers';
import { z } from 'zod';
import * as account from '@/lib/account';
import { AppError, action } from '@/lib/errors';
import { requireUser } from '@/lib/session';

export async function savePrefsAction(input: unknown) {
  return action(async () => account.savePrefs((await requireUser()).id, input));
}

export async function deleteAccountAction(confirmEmail: string) {
  return action(async () => {
    const u = await requireUser();
    if (z.string().trim().toLowerCase().parse(confirmEmail) !== u.email.toLowerCase() && !u.isAnonymous) {
      throw new AppError('INVALID', 'Type your email address exactly to confirm.');
    }
    await account.deleteAccount(u.id);
    const jar = await cookies();
    for (const c of jar.getAll()) if (c.name.includes('better-auth')) jar.delete(c.name);
  });
}
