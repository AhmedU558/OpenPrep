import nodemailer, { type Transporter } from 'nodemailer';
import { env } from './env';
import { log } from './log';

let transport: Transporter | undefined;

export async function sendMail(to: string, subject: string, text: string) {
  const e = env();
  transport ??= nodemailer.createTransport({
    host: e.SMTP_HOST,
    port: e.SMTP_PORT,
    secure: e.SMTP_PORT === 465,
    auth: e.SMTP_USER ? { user: e.SMTP_USER, pass: e.SMTP_PASS } : undefined,
  });
  try {
    await transport.sendMail({ from: e.SMTP_FROM, to, subject, text });
  } catch (err) {
    // Don't reveal delivery problems to the requester (prevents account probing); log for the operator.
    log.error('mail delivery failed', { subject, err });
  }
}
