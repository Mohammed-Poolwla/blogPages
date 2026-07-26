import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import AppointmentForm from "@/components/booking/AppointmentForm";
import { getBookingEmbedUrl } from "@/lib/booking";
import { CalendarDays, Clock, Shield, Video } from "lucide-react";

export default function BookAppointmentPage() {
  const embedUrl = getBookingEmbedUrl();
  const pageUrl = "https://websrc.uk/book";
  const title = "Book Appointment | WEBSRC";
  const description =
    "Book a free consultation with WEBSRC. Schedule a call for Lovable to Supabase migrations, Supabase audits, consulting, or AI MVP production work.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    url: pageUrl,
    description,
    mainEntity: {
      "@type": "ProfessionalService",
      name: "WEBSRC",
      url: "https://websrc.uk",
      email: "info@websrc.uk",
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Book appointment</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Book a free consultation call
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Pick a preferred time for a 30-minute call. We use it for migration assessments, Supabase audits,
                consulting, and AI MVP launch planning.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-cyan-300" aria-hidden />
                  Free intro call, no obligation
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-cyan-300" aria-hidden />
                  Usually confirmed within one business day
                </li>
                <li className="flex items-center gap-3">
                  <Video className="h-4 w-4 text-cyan-300" aria-hidden />
                  Google Meet or Zoom
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-cyan-300" aria-hidden />
                  NDAs available on request
                </li>
              </ul>

              <p className="mt-8 text-sm text-slate-400">
                Prefer email?{" "}
                <a href="mailto:info@websrc.uk" className="text-cyan-200 hover:text-cyan-100">
                  info@websrc.uk
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="text-cyan-200 hover:text-cyan-100">
                  contact form
                </Link>
                .
              </p>
            </div>

            <AppointmentForm />
          </div>

          {embedUrl ? (
            <div className="mt-14 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="text-lg font-semibold text-white">Or book instantly on the calendar</h2>
                <p className="mt-1 text-sm text-slate-400">Choose a live slot if you prefer instant confirmation.</p>
              </div>
              <iframe
                src={embedUrl}
                title="WEBSRC booking calendar"
                className="h-[720px] w-full bg-white"
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
