import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import FaqAccordion from "@/components/migration/FaqAccordion";
import MigrationForm, { WhatsAppAuditCard } from "@/components/migration/MigrationForm";

const SITE_URL = "https://websrc.uk";
const PAGE_URL = `${SITE_URL}/crayon-editor`;
const PRODUCT_URL = "https://crayoneditor.com/";
const TITLE = "Crayon Editor Case Study | Lovable to Self-Hosted Supabase | WEBSRC";
const DESCRIPTION =
  "How WEBSRC built Crayon Editor: AI design & video studio prototyped on Lovable, migrated to self-hosted Supabase + Postgres, SEO-friendly Next.js web, and React Native for Android & iOS — live with real users.";

const stack = [
  { label: "Prototype", value: "Lovable Cloud" },
  { label: "Backend", value: "Self-hosted Supabase" },
  { label: "Database", value: "PostgreSQL" },
  { label: "Web", value: "Next.js · SEO-ready" },
  { label: "Mobile", value: "React Native · Android + iOS" },
  { label: "Status", value: "Production · real users" },
];

const journey = [
  {
    n: "01",
    title: "Prototype fast on Lovable",
    body: "We validated the product surface quickly: templates, editor flows, AI tools, and creator loops — without waiting on a custom backend.",
  },
  {
    n: "02",
    title: "Own the backend",
    body: "We migrated off Lovable Cloud to self-hosted Supabase and PostgreSQL so auth, data, storage, and policies stayed under our control.",
  },
  {
    n: "03",
    title: "Ship web + mobile",
    body: "SEO-friendly Next.js for discovery and growth, plus React Native apps on Android and iOS with cloud sync for real creators.",
  },
  {
    n: "04",
    title: "Operate in production",
    body: "Live users, marketplace templates, AI Magic Studio, timeline editing, and ongoing hardening — the same production path we deliver for clients.",
  },
];

const capabilities = [
  {
    title: "Design & video studio",
    body: "Logos, social posts, flyers, 3D mockups, and short-form video in one product — browser and mobile.",
  },
  {
    title: "AI Magic Studio",
    body: "AI image generation, template generation, photo enhance, background removal, and restoration as editable layers.",
  },
  {
    title: "Timeline animation",
    body: "Keyframe motion for position, scale, rotation, opacity, text, shapes, and 3D mockups with MP4/GIF export.",
  },
  {
    title: "Cloud sync & collaboration",
    body: "Projects sync across web and mobile. Creators can continue on any device and collaborate in product.",
  },
  {
    title: "Creator marketplace",
    body: "Publish templates, grow a community feed, and monetize designs — product loops beyond a static marketing site.",
  },
  {
    title: "SEO-ready Next.js surface",
    body: "Marketing and product pages built for search: features, tools, and content routes that attract organic traffic.",
  },
];

const deliverables = [
  "Lovable Cloud → self-hosted Supabase migration",
  "PostgreSQL schema, auth, storage, and RLS ownership",
  "SEO-friendly Next.js web application",
  "React Native apps for Android and iOS",
  "Cloud sync across devices",
  "AI design/video features in production",
  "Real-user traffic and ongoing product iteration",
];

const faqs = [
  {
    question: "What is Crayon Editor?",
    answer:
      "Crayon is WEBSRC’s house product — an AI design and video studio for creators and small businesses. It runs on the web and as React Native apps for Android and iOS.",
  },
  {
    question: "Did you really start on Lovable and migrate to Supabase?",
    answer:
      "Yes. We prototyped on Lovable, then migrated to self-hosted Supabase with PostgreSQL so we owned the backend: database, auth, storage, and security policies.",
  },
  {
    question: "What stack powers Crayon today?",
    answer:
      "Next.js for the SEO-friendly web experience, PostgreSQL + self-hosted Supabase for the backend, and React Native for Android and iOS with cloud sync.",
  },
  {
    question: "Can WEBSRC do the same Lovable to Supabase path for my product?",
    answer:
      "Yes. Crayon is a live proof point. We offer Lovable to Supabase migration, audits, and production hardening for founders who need to own their backend.",
  },
];

export default function CrayonEditorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Crayon Editor", item: PAGE_URL },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Crayon Editor",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web, Android, iOS",
        url: PRODUCT_URL,
        description: DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        creator: {
          "@type": "Organization",
          name: "WEBSRC",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Crayon Editor, crayoneditor.com, Lovable to Supabase, self-hosted Supabase, Next.js design app, React Native design app, WEBSRC house product, PostgreSQL"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/landing-images/crayoneditor-com.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/landing-images/crayoneditor-com.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">House product · Case study</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Crayon Editor
              </h1>
              <p className="mt-2 text-lg font-semibold text-slate-700 sm:text-xl">
                AI design & video studio — built, migrated, and shipped to real users
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                Crayon started as a fast Lovable prototype, then moved to self-hosted Supabase and PostgreSQL.
                Today it runs as an SEO-friendly Next.js web app plus React Native on Android and iOS — with
                creators using it in production.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open crayoneditor.com
                </a>
                <Link href="/lovable-to-supabase" className="btn-ghost-light">
                  Lovable to Supabase service
                </Link>
              </div>
            </div>
            <div className="glass-panel overflow-hidden">
              <div className="relative h-72 sm:h-96">
                <Image
                  src="/landing-images/crayoneditor-com.png"
                  alt="Crayon Editor product screenshot"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Live product</p>
                  <p className="mt-1 text-lg font-semibold text-white">Web · Android · iOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-break">
        <div className="parallax-layer layer-lines" />
        <div className="relative mx-auto grid max-w-7xl gap-4 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item) => (
            <div key={item.label} className="glass-tile p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700">{item.label}</p>
              <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="parallax-deep-section">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Build journey</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">From Lovable prototype to owned production stack</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            This is the same path we recommend to founders: move fast early, then migrate when you need ownership,
            scale, and multi-platform delivery.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {journey.map((step) => (
              <article key={step.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-3xl font-black text-sky-700">{step.n}</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-light parallax-light-section">
        <div className="parallax-layer layer-light-dots" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Product surface</p>
          <h2 className="mt-3 text-3xl font-bold text-[#0b1530]">What Crayon delivers to users</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Not a brochure site — a full creative studio with AI, templates, motion, marketplace, and cross-device sync.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-[#0b1530]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">Engineering outcomes</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">What we shipped and own</h2>
            <p className="mt-3 text-slate-600">
              Crayon is proof that WEBSRC can take a modern MVP from hosted prototype to a self-owned, multi-platform
              product stack.
            </p>
            <ul className="mt-8 space-y-3">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ai-mvp-to-production" className="btn-ghost-light">
                AI MVP to production
              </Link>
              <Link href="/supabase-consulting" className="btn-ghost-light">
                Supabase consulting
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/5 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Want this path for your product?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              If you built on Lovable (or a similar AI builder) and need to own Postgres, auth, storage, and ship web +
              mobile, we can run the same playbook.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">
                Book a call
              </Link>
              <Link href="/lovable-to-supabase" className="btn-ghost-light">
                See migration service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="parallax-deep-section">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-3xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Crayon & WEBSRC</h2>
          <p className="mt-3 text-slate-600">Quick answers about the product and how we built it.</p>
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="parallax-cta" id="audit">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">Free audit</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Ready to migrate your Lovable app like Crayon?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Share your app URL for a free migration audit — lock-in risks, what has to move, and a scoped plan.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <WhatsAppAuditCard />
            <MigrationForm formSubject="Crayon Case Study — Free Audit" submitLabel="Get My Free Audit" compact />
          </div>
        </div>
      </section>
    </Layout>
  );
}
