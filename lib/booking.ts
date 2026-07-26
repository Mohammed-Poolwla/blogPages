export const BOOKING_PATH = "/book";

/** Public calendar embed URL (Cal.com / Calendly). Optional. */
export function getBookingEmbedUrl() {
  const raw = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  return raw || "";
}

export function bookHref(service?: string) {
  if (!service) return BOOKING_PATH;
  return `${BOOKING_PATH}?service=${encodeURIComponent(service)}`;
}
