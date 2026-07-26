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
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#67d5ff",
          },
          light: {
            "cal-brand": "#0ea5e9",
          },
        },
      });
    })();
  }, [calLink, useCalendly]);

  if (!calLink) {
    return (
      <div className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6 text-sm text-slate-200">
        <p className="font-semibold text-white">Connect your calendar to enable booking</p>
        <p className="mt-2 text-slate-300">
          Add your Cal.com link in env, then restart the app:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-[#0b1228] p-3 text-xs text-cyan-100">
          NEXT_PUBLIC_CAL_LINK=your-username/30min
        </pre>
        <p className="mt-3 text-slate-400">
          Or use a Calendly URL via{" "}
          <code className="text-cyan-200">NEXT_PUBLIC_BOOKING_URL</code>.
        </p>
        <a href="mailto:info@websrc.uk" className="btn-primary mt-5">
          Email info@websrc.uk
        </a>
      </div>
    );
  }

  if (useCalendly) {
    return (
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
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
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1228]/80 p-2 sm:p-3">
      <div className="h-[700px] w-full overflow-auto rounded-xl">
        <Cal
          namespace="websrc-book"
          calLink={calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "dark" }}
        />
      </div>
    </div>
  );
}
