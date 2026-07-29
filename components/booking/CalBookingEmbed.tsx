"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { getBookingEmbedUrl, getCalLink, isCalendlyLink } from "@/lib/booking";

export default function CalBookingEmbed() {
  const calLink = getCalLink();
  const embedUrl = getBookingEmbedUrl();
  const useCalendly = isCalendlyLink();

  useEffect(() => {
    if (!calLink || useCalendly) return;
    (async () => {
      const cal = await getCalApi({ namespace: "websrc-book" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#0ea5e9",
          },
          dark: {
            "cal-brand": "#38bdf8",
          },
        },
      });
    })();
  }, [calLink, useCalendly]);

  if (!calLink) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Connect your calendar to enable booking</p>
        <p className="mt-2 text-slate-600">
          Add your Cal.com link in env, then restart the app:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 text-xs text-sky-700">
          NEXT_PUBLIC_CAL_LINK=your-username/30min
        </pre>
        <p className="mt-3 text-slate-500">
          Or use a Calendly URL via{" "}
          <code className="text-sky-700">NEXT_PUBLIC_BOOKING_URL</code>.
        </p>
        <a href="mailto:info@websrc.uk" className="btn-primary mt-5">
          Email info@websrc.uk
        </a>
      </div>
    );
  }

  if (useCalendly) {
    return (
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <iframe
          src={embedUrl}
          title="Book an appointment with WEBSRC"
          className="h-[720px] w-full min-h-[640px] bg-white"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-sky-900/5 sm:p-3">
      <div className="h-[700px] w-full overflow-auto rounded-xl">
        <Cal
          namespace="websrc-book"
          calLink={calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </div>
  );
}
