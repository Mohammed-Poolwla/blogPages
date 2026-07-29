"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

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
  submitLabel = "Book Free Migration Audit",
}: {
  intent?: "audit" | "estimate" | "call";
  formSubject?: string;
  submitLabel?: string;
}) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(values.email)) next.email = "Enter a valid email.";
    if (!values.message.trim()) next.message = "Tell us a bit about your project.";
    else if (values.message.trim().length < 20) next.message = "Please add a few more details (20+ characters).";
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
      intent === "estimate" ? "Estimate" : intent === "call" ? "Talk to an Engineer" : "Free Assessment";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: [
            `Intent: ${intentLabel}`,
            form.company.trim() ? `Company: ${form.company.trim()}` : null,
            form.appUrl.trim() ? `App / project URL: ${form.appUrl.trim()}` : null,
            "",
            form.message.trim(),
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
      <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-sky-600" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">Request received</h3>
        <p className="mt-2 text-sm text-slate-600">
          Thanks. We will review your project and reply with next steps.
        </p>
        <button
          type="button"
          className="btn-ghost-light mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-sky-900/5 sm:p-8"
      aria-label={`${formSubject} contact form`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="mig-name" className="block text-sm font-medium text-slate-700">
            Name <span className="text-sky-600">*</span>
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
          <label htmlFor="mig-email" className="block text-sm font-medium text-slate-700">
            Work email <span className="text-sky-600">*</span>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="mig-company" className="block text-sm font-medium text-slate-700">
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
          <label htmlFor="mig-url" className="block text-sm font-medium text-slate-700">
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

      <div>
        <label htmlFor="mig-message" className="block text-sm font-medium text-slate-700">
          What needs migrating? <span className="text-sky-600">*</span>
        </label>
        <textarea
          id="mig-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="field-light mt-1"
          placeholder="e.g. production SaaS with auth, file uploads, and about 50 tables. Need ownership of Supabase + Vercel."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "mig-message-error" : undefined}
        />
        {errors.message && (
          <p id="mig-message-error" className="mt-1 text-xs text-rose-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <p className="text-sm text-rose-600" role="alert">
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
          submitLabel
        )}
      </button>
      <p className="text-xs text-slate-500">
        We typically reply within one business day. NDAs available on request.
      </p>
    </form>
  );
}
