import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { saveLead } from '@/lib/leads';

type Data = { ok: true } | { ok: false; error: string };

function cleanEnv(value: string | undefined) {
  if (!value) return '';
  return value.trim().replace(/^['"]|['"]$/g, '').trim();
}

function verifyCalSignature(rawBody: string, signatureHeader: string | string[] | undefined, secret: string) {
  if (!secret) return true;
  if (!signatureHeader || Array.isArray(signatureHeader)) return false;

  const digest = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signatureHeader));
  } catch {
    return digest === signatureHeader;
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function pickString(...values: unknown[]) {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return '';
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function readRawBody(req: NextApiRequest) {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const rawBody = await readRawBody(req);
    const secret = cleanEnv(process.env.CAL_WEBHOOK_SECRET);
    const signature =
      req.headers['x-cal-signature-256'] ||
      req.headers['x-cal-signature'] ||
      req.headers['cal-signature'];

    if (secret && !verifyCalSignature(rawBody, signature, secret)) {
      return res.status(401).json({ ok: false, error: 'Invalid webhook signature' });
    }

    const body = rawBody ? JSON.parse(rawBody) : {};
    const trigger = pickString(body.triggerEvent, body.trigger);
    const payload = asRecord(body.payload || body);
    const attendees = Array.isArray(payload.attendees) ? payload.attendees : [];
    const firstAttendee = asRecord(attendees[0]);
    const responses = asRecord(payload.responses);

    const name = pickString(
      firstAttendee.name,
      asRecord(responses.name).value,
      payload.name
    );
    const email = pickString(
      firstAttendee.email,
      asRecord(responses.email).value,
      payload.email
    ).toLowerCase();

    const title = pickString(payload.title, payload.eventTitle, 'Cal.com booking');
    const startTime = pickString(payload.startTime);
    const endTime = pickString(payload.endTime);
    const location = pickString(
      typeof payload.location === 'string' ? payload.location : '',
      asRecord(payload.location).value
    );
    const uid = pickString(payload.uid, payload.bookingId && String(payload.bookingId));
    const status = pickString(payload.status, trigger || 'BOOKING_CREATED');

    const message = [
      `Cal.com event: ${trigger || 'BOOKING_CREATED'}`,
      title ? `Title: ${title}` : null,
      startTime ? `Start: ${startTime}` : null,
      endTime ? `End: ${endTime}` : null,
      location ? `Location: ${location}` : null,
      payload.additionalNotes ? `Notes: ${String(payload.additionalNotes)}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    await saveLead({
      source: 'booking',
      name: name || 'Cal.com guest',
      email: email || null,
      subject: title || 'Cal.com booking',
      message,
      status: status || 'booked',
      externalId: uid ? `cal:${uid}` : null,
      meta: {
        trigger,
        startTime,
        endTime,
        location,
        raw: payload,
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Cal webhook error:', error);
    return res.status(500).json({ ok: false, error: 'Failed to store booking' });
  }
}
