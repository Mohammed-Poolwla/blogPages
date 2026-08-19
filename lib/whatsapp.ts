export const DEFAULT_WHATSAPP_NUMBER = "918109041335";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi WEBSRC, I need help with my website or Supabase migration.";

export function getWhatsAppNumber() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
  return String(raw).replace(/[^\d]/g, "");
}

export function getWhatsAppHref(message?: string) {
  const number = getWhatsAppNumber();
  const text = message || process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export const AUDIT_WHATSAPP_MESSAGE =
  "Hi WEBSRC, I would like a free migration audit of my Lovable Cloud / Supabase app.";
