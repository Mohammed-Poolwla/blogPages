import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = { ok: true } | { ok: false; error: string };

function cleanEnv(value: string | undefined) {
  if (!value) return '';
  // Strip wrapping quotes and whitespace that often break SMTP auth in .env / Vercel
  return value.trim().replace(/^['"]|['"]$/g, '').trim();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const { name, email, message, subject } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  try {
    const host = cleanEnv(process.env.SMTP_HOST);
    const port = Number(cleanEnv(process.env.SMTP_PORT) || 587);
    const user = cleanEnv(process.env.SMTP_USER);
    // Gmail app passwords are often copied with spaces; spaces are fine, but strip accidental quotes
    const pass = cleanEnv(process.env.SMTP_PASS).replace(/\s+/g, '');
    const to = cleanEnv(process.env.CONTACT_TO) || 'info@websrc.uk';

    if (!host || !user || !pass) {
      return res.status(500).json({ ok: false, error: 'Mailer not configured' });
    }

    const isGmail = /gmail\.com$/i.test(host) || /gmail\.com$/i.test(user);

    const transporter = nodemailer.createTransport(
      isGmail
        ? {
            service: 'gmail',
            auth: { user, pass },
          }
        : {
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
          }
    );

    const mailSubject =
      typeof subject === 'string' && subject.trim()
        ? subject.trim().slice(0, 160)
        : `New contact form submission from ${name}`;

    await transporter.sendMail({
      from: `WEBSRC Contact <${user}>`,
      to,
      replyTo: email,
      subject: mailSubject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error: unknown) {
    console.error('Contact form error:', error);

    const code =
      typeof error === 'object' && error && 'code' in error
        ? String((error as { code?: string }).code)
        : '';

    if (code === 'EAUTH') {
      return res.status(500).json({
        ok: false,
        error:
          'Email login failed. Check SMTP_USER and use a Gmail App Password (not your normal Google password).',
      });
    }

    return res.status(500).json({ ok: false, error: 'Failed to send message' });
  }
}
