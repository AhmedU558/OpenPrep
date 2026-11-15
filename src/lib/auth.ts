import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { anonymous } from 'better-auth/plugins';
import { db } from './db';
import { appName, env } from './env';
import { sendMail } from './mail';

export const auth = betterAuth({
  appName: appName(),
  baseURL: env().BETTER_AUTH_URL,
  secret: env().BETTER_AUTH_SECRET,
  trustedOrigins: async (request) => {
    const origins = [
      'https://openprep-ahmedu558.vercel.app',
      'https://openprep-amber.vercel.app',
      'https://*.vercel.app',
      '*.vercel.app',
      'http://localhost:3000',
      'http://localhost:3100',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:3100',
      ...(process.env.VERCEL_URL ? [`https://${process.env.VERCEL_URL}`] : []),
      ...(process.env.VERCEL_PROJECT_PRODUCTION_URL ? [`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`] : []),
    ];
    if (request) {
      const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
      const proto = request.headers.get('x-forwarded-proto') || 'https';
      if (host) origins.push(`${proto}://${host}`);
      const origin = request.headers.get('origin');
      if (origin) {
        try {
          const u = new URL(origin);
          if (
            u.hostname === 'localhost' ||
            u.hostname === '127.0.0.1' ||
            u.hostname.endsWith('.vercel.app') ||
            u.hostname.includes('openprep') ||
            (host && u.hostname === host.split(':')[0])
          ) {
            origins.push(origin);
          }
        } catch {}
      }
      const referer = request.headers.get('referer');
      if (referer) {
        try {
          origins.push(new URL(referer).origin);
        } catch {}
      }
    }
    return origins;
  },
  advanced: {
    disableOriginCheck: true,
    trustedProxyHeaders: true,
  },
  database: prismaAdapter(db, { provider: 'postgresql', transaction: true }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 10,
    maxPasswordLength: 128,
    autoSignIn: true,
    revokeSessionsOnPasswordReset: true,
    resetPasswordTokenExpiresIn: 60 * 30,
    sendResetPassword: async ({ user, url }) => {
      await sendMail(
        user.email,
        `Reset your ${appName()} password`,
        `Someone asked to reset the password for this account.\n\nTo choose a new password, open this link within 30 minutes:\n${url}\n\nIf it wasn't you, ignore this email; your password stays the same.`,
      );
    },
  },
  user: {
    additionalFields: {
      // input: false — a client can never set its own role at sign-up or via update-user
      role: { type: 'string', required: false, defaultValue: 'LEARNER', input: false },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 14,
    updateAge: 60 * 60 * 24,
  },
  rateLimit: {
    // E2E_DISABLE_RATE_LIMIT is honoured only when the app runs on localhost (the Playwright server)
    enabled: process.env.NODE_ENV !== 'test' && !(process.env.E2E_DISABLE_RATE_LIMIT === '1' && /^http:\/\/localhost:\d+$/.test(env().BETTER_AUTH_URL)),
    window: 60,
    max: 120,
    // ponytail: in-memory store, per process; use storage: 'database' if you run several instances
    customRules: {
      '/sign-in/email': { window: 60, max: 10 },
      '/sign-up/email': { window: 60, max: 5 },
      '/request-password-reset': { window: 300, max: 3 },
    },
  },
  plugins: [
    // Guest mode: a temporary account so the demo uses the same server-side engine.
    // When the guest registers, their progress moves to the new account and the guest record is deleted.
    anonymous({
      emailDomainName: 'guest.openprep.invalid',
      onLinkAccount: async ({ anonymousUser, newUser }) => {
        const from = anonymousUser.user.id, to = newUser.user.id;
        await db.$transaction([
          db.userPracticeState.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.practiceEvent.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.practiceReset.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.practiceAttempt.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.testSession.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.practiceExam.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.response.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.bookmark.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.note.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.card.updateMany({ where: { userId: from }, data: { userId: to } }),
          db.cardReview.updateMany({ where: { userId: from }, data: { userId: to } }),
        ]);
      },
    }),
    nextCookies(),
  ],
});

export type AuthSession = typeof auth.$Infer.Session;
