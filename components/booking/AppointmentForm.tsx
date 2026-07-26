"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { CheckCircle2, Loader2 } from "lucide-react";
import { servicePageList } from "@/lib/services";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  message: string;
};

const timeOptions = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function detectTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

export default function AppointmentForm() {
  const router = useRouter();
  const initialService = useMemo(() => {
    const q = router.query.service;
    return typeof q === "string" ? q : "";
  }, [router.query.service]);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    preferredDate: "",
    preferredTime: "10:00",
    timezone: detectTimezone(),
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (!initialService) return;
    const match = servicePageList.find((p) => p.slug === initialService);
    if (match) {
      setForm((f) => ({ ...f, service: match.navLabel }));
    }
  }, [initialService]);

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email.";
    if (!values.preferredDate) next.preferredDate = "Pick a preferred date.";
    if (!values.preferredTime) next.preferredTime = "Pick a preferred time.";
    if (!values.message.trim()) next.message = "Tell us what you want to discuss.";
    else if (values.message.trim().length < 15) next.message = "Add a bit more detail (15+ characters).";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: `Book Appointment${form.service ? `: ${form.service}` : ""}`,
          message: [
            "Appointment request",
            form.company.trim() ? `Company: ${form.company.trim()}` : null,
            form.service.trim() ? `Service: ${form.service.trim()}` : null,
            `Preferred date: ${form.preferredDate}`,
            `Preferred time: ${form.preferredTime}`,
            `Timezone: ${form.timezone}`,
            "",
            form.message.trim(),
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setServerError(data.error || "Failed to send. Please email info@websrc.uk.");
        return;
      }

      setStatus("success");
      setForm((f) => ({
        ...f,
        name: "",
        email: "",
        company: "",
        preferredDate: "",
        message: "",
      }));
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again or email info@websrc.uk.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-white">Appointment request sent</h3>
        <p className="mt-2 text-sm text-slate-200">
          Thanks. We will confirm a time by email within one business day.
        </p>
        <button type="button" className="btn-ghost-light mt-6" onClick={() => setStatus("idle")}>
          Book another slot
        </button>
      </div>
    );
  }

  const minDate = new Date().toISOString().slice(0, 10);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
      aria-label="Book an appointment with WEBSRC"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="appt-name" className="block text-sm text-slate-200">
            Name <span className="text-cyan-200">*</span>
          </label>
          <input
            id="appt-name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            placeholder="Alex Founder"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="appt-email" className="block text-sm text-slate-200">
            Work email <span className="text-cyan-200">*</span>
          </label>
          <input
            id="appt-email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="appt-company" className="block text-sm text-slate-200">
            Company
          </label>
          <input
            id="appt-company"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            autoComplete="organization"
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="appt-service" className="block text-sm text-slate-200">
            Service
          </label>
          <select
            id="appt-service"
            value={form.service}
            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          >
            <option value="">General consultation</option>
            {servicePageList.map((page) => (
              <option key={page.slug} value={page.navLabel}>
                {page.navLabel}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label htmlFor="appt-date" className="block text-sm text-slate-200">
            Preferred date <span className="text-cyan-200">*</span>
          </label>
          <input
            id="appt-date"
            type="date"
            min={minDate}
            value={form.preferredDate}
            onChange={(e) => setForm((f) => ({ ...f, preferredDate: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
            aria-invalid={Boolean(errors.preferredDate)}
          />
          {errors.preferredDate && <p className="mt-1 text-xs text-rose-300">{errors.preferredDate}</p>}
        </div>
        <div>
          <label htmlFor="appt-time" className="block text-sm text-slate-200">
            Preferred time <span className="text-cyan-200">*</span>
          </label>
          <select
            id="appt-time"
            value={form.preferredTime}
            onChange={(e) => setForm((f) => ({ ...f, preferredTime: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          >
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="appt-tz" className="block text-sm text-slate-200">
            Timezone
          </label>
          <input
            id="appt-tz"
            value={form.timezone}
            onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value }))}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="appt-message" className="block text-sm text-slate-200">
          What should we cover? <span className="text-cyan-200">*</span>
        </label>
        <textarea
          id="appt-message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-1 w-full rounded-lg border border-white/20 bg-[#0b1228] px-3 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-300/20"
          placeholder="Short note on your app, timeline, and what you want from the call."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
      </div>

      {status === "error" && serverError && (
        <p className="text-sm text-rose-300" role="alert">
          {serverError}
        </p>
      )}

      <button type="submit" className="btn-primary w-full justify-center sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          "Book Appointment"
        )}
      </button>
      <p className="text-xs text-slate-400">
        30-minute call. We confirm by email. NDAs available on request.
      </p>
    </form>
  );
}
