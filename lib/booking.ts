export const BOOKING_PATH = "/book";

/** Default public Cal.com event used when env is unset. */
export const DEFAULT_CAL_LINK = "mohammed-poolwala/30min";

/** Cal.com event link, e.g. "username/30min" (no https://cal.com/ prefix). */
export function getCalLink() {
  const raw =
    process.env.NEXT_PUBLIC_CAL_LINK?.trim() ||
    process.env.NEXT_PUBLIC_BOOKING_URL?.trim() ||
    DEFAULT_CAL_LINK;

  // Accept full URLs or short cal links
  return raw
    .replace(/^https?:\/\/(www\.)?cal\.com\//i, "")
    .replace(/^https?:\/\/(www\.)?calendly\.com\//i, "")
    .replace(/\/$/, "");
}

/** True when embed target looks like Calendly rather than Cal.com */
export function isCalendlyLink(link = getCalLink()) {
  const full = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";
  return /calendly\.com/i.test(full) || /calendly\.com/i.test(link);
}

export function getBookingEmbedUrl() {
  const calLink = getCalLink();
  if (!calLink) return "";
  if (isCalendlyLink()) {
    const full = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
    if (full?.startsWith("http")) return full;
    return `https://calendly.com/${calLink}`;
  }
  return `https://cal.com/${calLink}`;
}

export function bookHref() {
  return BOOKING_PATH;
}
