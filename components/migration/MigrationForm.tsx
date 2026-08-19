"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { AUDIT_WHATSAPP_MESSAGE, getWhatsAppHref } from "@/lib/whatsapp";

type FormState = {
  name: string;
  email: string;
  company: string;
  appUrl: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  appUrl: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function MigrationForm({
  intent = "audit",
  formSubject = "Lovable to Supabase",
  submitLabel = "Get My Free Audit",
  compact = false,
}: {
  intent?: "audit" | "estimate" | "call";
  formSubject?: string;
  submitLabel?: string;
  compact?: boolean;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!compact && !values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid work email.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    setServerError("");

    const intentLabel =
      intent === "estimate" ? "Estimate" : intent === "call" ? "Talk to an Engineer" : "Free Audit";
    const displayName = form.name.trim() || form.email.trim().split("@")[0];

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: displayName,
          email: form.email.trim(),
          company: form.company.trim() || undefined,
          message: [
            `Intent: ${intentLabel}`,
            form.company.trim() ? `Company: ${form.company.trim()}` : null,
            form.appUrl.trim() ? `App / project URL: ${form.appUrl.trim()}` : null,
            "",
            form.message.trim() || "Please send a free migration audit.",
          ]
            .filter(Boolean)
            .join("\n"),
          subject: `${formSubject}: ${intentLabel}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setServerError(data.error || "Failed to send. Please email info@websrc.uk.");
        return;
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again or email info@websrc.uk.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#b9d8e8] bg-[#e8f7fc] p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-[#0b7ea4]" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-[#0b1f3a]">Free audit requested</h3>
        <p className="mt-2 text-sm text-[#5b6b7c]">
          Thanks. We will review your stack and reply within 24 hours with risks, scope, and next steps.
        </p>
        <a
          href={getWhatsAppHref(AUDIT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-light mt-6"
        >
          Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-[#d9e2ec] bg-white p-6 shadow-lg shadow-[#0b1f3a]/8 sm:p-8"
      aria-label={`${formSubject} free audit form`}
    >
      {!compact ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mig-name" className="block text-sm font-medium text-[#0b1f3a]">
              Name <span className="text-[#0b7ea4]">*</span>
            </label>
            <input
              id="mig-name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="field-light mt-1"
              placeholder="Alex Founder"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "mig-name-error" : undefined}
            />
            {errors.name && (
              <p id="mig-name-error" className="mt-1 text-xs text-rose-600">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="mig-email" className="block text-sm font-medium text-[#0b1f3a]">
              Work email <span className="text-[#0b7ea4]">*</span>
            </label>
            <input
              id="mig-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="field-light mt-1"
              placeholder="you@company.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "mig-email-error" : undefined}
            />
            {errors.email && (
              <p id="mig-email-error" className="mt-1 text-xs text-rose-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <label htmlFor="mig-email" className="block text-sm font-medium text-[#0b1f3a]">
            Work email <span className="text-[#0b7ea4]">*</span>
          </label>
          <input
            id="mig-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="field-light mt-1"
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "mig-email-error" : undefined}
          />
          {errors.email && (
            <p id="mig-email-error" className="mt-1 text-xs text-rose-600">
              {errors.email}
            </p>
          )}
        </div>
      )}

      {compact ? (
        <div>
          <label htmlFor="mig-url" className="block text-sm font-medium text-[#0b1f3a]">
            Lovable / app URL
          </label>
          <input
            id="mig-url"
            name="appUrl"
            type="url"
            value={form.appUrl}
            onChange={(e) => setForm((f) => ({ ...f, appUrl: e.target.value }))}
            className="field-light mt-1"
            placeholder="https://your-app.lovable.app"
          />
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mig-company" className="block text-sm font-medium text-[#0b1f3a]">
              Company
            </label>
            <input
              id="mig-company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              className="field-light mt-1"
              placeholder="Optional"
            />
          </div>
          <div>
            <label htmlFor="mig-url" className="block text-sm font-medium text-[#0b1f3a]">
              App or Lovable URL
            </label>
            <input
              id="mig-url"
              name="appUrl"
              type="url"
              value={form.appUrl}
              onChange={(e) => setForm((f) => ({ ...f, appUrl: e.target.value }))}
              className="field-light mt-1"
              placeholder="https://"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="mig-message" className="block text-sm font-medium text-[#0b1f3a]">
          {compact ? "Add more details (optional)" : "What needs migrating?"}
        </label>
        <textarea
          id="mig-message"
          name="message"
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="field-light mt-1"
          placeholder={
            compact
              ? "Auth, storage, live users, Vercel, or anything we should know."
              : "e.g. live Lovable Cloud app with auth, file uploads, and about 50 tables. Need own Supabase + Vercel."
          }
        />
      </div>

      {status === "error" && serverError && (
        <p className="text-sm text-rose-600" role="alert">
          {serverError}
        </p>
      )}

      <button type="submit" className="btn-primary w-full justify-center" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          submitLabel
        )}
      </button>
      <p className="text-xs text-[#5b6b7c]">
        Free. No spam. We typically reply within 24 hours. NDAs available on request.
      </p>
    </form>
  );
}

export function WhatsAppAuditCard({
  title = "Chat on WhatsApp",
  body = "Direct line for a free audit. Send the app URL and we will tell you what a Lovable Cloud to Supabase move actually involves.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <a
      href={getWhatsAppHref(AUDIT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col rounded-2xl border border-[#25D366]/40 bg-[#f0fdf4] p-6 transition-transform hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#15803d]">
        <MessageCircle className="h-4 w-4" aria-hidden />
        Instant
      </span>
      <h3 className="mt-3 text-xl font-semibold text-[#0b1f3a]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#5b6b7c]">{body}</p>
      <span className="mt-5 inline-flex text-sm font-bold text-[#15803d]">Open WhatsApp →</span>
    </a>
  );
}
