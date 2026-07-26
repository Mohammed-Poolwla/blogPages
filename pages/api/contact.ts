import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { saveLead } from '@/lib/leads';

type Data = { ok: true; emailSent?: boolean } | { ok: false; error: string };

function cleanEnv(value: string | undefined) {
  if (!value) return '';
  return value.trim().replace(/^['"]|['"]$/g, '').trim();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const { name, email, message, subject, company } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' });
  }

  const mailSubject =
    typeof subject === 'string' && subject.trim()
      ? subject.trim().slice(0, 160)
      : `New contact form submission from ${name}`;

  const isBookingIntent = /book appointment|appointment|cal\.com/i.test(mailSubject);

  try {
    await saveLead({
      source: isBookingIntent ? 'booking-request' : 'contact',
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      subject: mailSubject,
      message: String(message).trim(),
      company: typeof company === 'string' ? company.trim() : null,
      status: 'new',
      meta: {
        userAgent: req.headers['user-agent'] || null,
        referer: req.headers.referer || null,
      },
    });
  } catch (error) {
    console.error('Lead DB save error:', error);
    return res.status(500).json({ ok: false, error: 'Failed to save submission' });
  }

  try {
    const host = cleanEnv(process.env.SMTP_HOST);
    const port = Number(cleanEnv(process.env.SMTP_PORT) || 587);
    const user = cleanEnv(process.env.SMTP_USER);
    const pass = cleanEnv(process.env.SMTP_PASS).replace(/\s+/g, '');
    const to = cleanEnv(process.env.CONTACT_TO) || 'info@websrc.uk';

    if (!host || !user || !pass) {
      console.warn('Mailer not configured; lead saved to DB only');
      return res.status(200).json({ ok: true, emailSent: false });
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

    await transporter.sendMail({
      from: `WEBSRC Contact <${user}>`,
      to,
      replyTo: email,
      subject: mailSubject,
      text: `Name: ${name}\nEmail: ${email}${company ? `\nCompany: ${company}` : ''}\n\n${message}`,
    });

    return res.status(200).json({ ok: true, emailSent: true });
  } catch (error: unknown) {
    console.error('Contact form email error:', error);

    const code =
      typeof error === 'object' && error && 'code' in error
        ? String((error as { code?: string }).code)
        : '';

    if (code === 'EAUTH') {
      // Lead already stored; still report mailer issue clearly
      return res.status(200).json({ ok: true, emailSent: false });
    }

    return res.status(200).json({ ok: true, emailSent: false });
  }
}
