import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import CalBookingEmbed from "@/components/booking/CalBookingEmbed";
import { CalendarDays, Clock, Shield, Video } from "lucide-react";

export default function BookAppointmentPage() {
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-sky-700">Book appointment</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Book a free consultation call
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Pick a live slot on the calendar. 30-minute calls for migration assessments, Supabase
                audits, consulting, and AI MVP launch planning.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-cyan-300" aria-hidden />
                  Instant booking via Cal.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-cyan-300" aria-hidden />
                  Free intro call, no obligation
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
                <a href="mailto:info@websrc.uk" className="text-sky-700 hover:text-sky-700">
                  info@websrc.uk
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="text-sky-700 hover:text-sky-700">
                  contact form
                </Link>
                .
              </p>
            </div>

            <CalBookingEmbed />
          </div>
        </div>
      </section>
    </Layout>
  );
}
