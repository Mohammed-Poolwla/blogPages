import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "@/components/layout";
import FaqAccordion from "@/components/migration/FaqAccordion";
import MigrationForm from "@/components/migration/MigrationForm";
import { SITE_URL, servicePages } from "@/lib/services";
import type { ServicePageConfig } from "@/lib/services/types";
import { bookHref } from "@/lib/booking";
import {
  AlertTriangle,
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  Shield,
  Users,
  Wrench,
} from "lucide-react";

const ArchitectureDiagram = dynamic(
  () => import("@/components/migration/ArchitectureDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] animate-pulse rounded-2xl border border-slate-200 bg-slate-100" aria-hidden />
    ),
  }
);

function HighlightPriceText({ text }: { text: string }) {
  // Keep "from / starting from $399" together so it never reads as a fixed flat fee.
  const parts = text.split(/((?:starting from|start from|from)\s+\$399(?:\s*USD)?|\$399(?:\s*USD)?)/gi);
  return (
    <>
      {parts.map((part, index) =>
        /\$399/i.test(part) ? (
          <span key={`price-${index}`} className="price-highlight">
            {part}
          </span>
        ) : (
          <span key={`text-${index}`}>{part}</span>
        )
      )}
    </>
  );
}

export default function ServiceLandingPage({ config }: { config: ServicePageConfig }) {
  const pageUrl = `${SITE_URL}/${config.slug}`;
  const related = config.relatedSlugs
    .map((slug) => servicePages[slug])
    .filter(Boolean)
    .slice(0, 6);
  const priceAmount = config.pricing?.minPrice
    ? `$${config.pricing.minPrice}`
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: config.navLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "WEBSRC",
        url: SITE_URL,
        description: config.description,
        areaServed: "Worldwide",
        sameAs: [
          "https://www.linkedin.com/in/mohammed-poolwala-41621896/",
          "https://github.com/Mohammed-Poolwla",
        ],
        serviceType: config.schemaServiceType,
        email: "info@websrc.uk",
        priceRange: "$$",
      },
      {
        "@type": "Service",
        name: config.navLabel,
        alternateName: config.schemaAlternateNames,
        provider: {
          "@type": "Organization",
          name: "WEBSRC",
          url: SITE_URL,
          email: "info@websrc.uk",
        },
        description: config.description,
        url: pageUrl,
        areaServed: "Worldwide",
        serviceType: config.schemaServiceType[0],
        category: "Software consulting",
        offers: config.pricing
          ? {
              "@type": "AggregateOffer",
              name: `${config.navLabel} starting price`,
              lowPrice: String(config.pricing.minPrice ?? 399),
              priceCurrency: config.pricing.currency || "USD",
              offerCount: "1",
              availability: "https://schema.org/InStock",
              url: pageUrl,
              description: config.pricing.note,
            }
          : {
              "@type": "Offer",
              name: config.primaryCta,
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: `${pageUrl}#audit`,
              description: config.auditIntro,
            },
      },
      {
        "@type": "HowTo",
        name: config.processTitle,
        description: config.processIntro,
        step: config.processSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.body,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: config.title,
        description: config.description,
        isPartOf: { "@type": "WebSite", name: "WEBSRC", url: SITE_URL },
        about: { "@type": "Thing", name: config.navLabel },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/landing-images/saleshero-dk.png`,
        },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <Layout>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        <meta name="author" content="WEBSRC" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="theme-color" content="#f8fbff" />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="WEBSRC" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}/landing-images/saleshero-dk.png`} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:image:alt" content={`${config.navLabel} by WEBSRC`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={`${SITE_URL}/landing-images/saleshero-dk.png`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <nav className="border-b border-slate-200 bg-white/70" aria-label="Breadcrumb">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3 text-xs text-slate-400">
          <Link href="/" className="transition-colors hover:text-slate-900">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link href="/services" className="transition-colors hover:text-slate-900">
            Services
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-slate-700">{config.navLabel}</span>
        </div>
      </nav>

      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="parallax-layer layer-rings" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold tracking-wide text-sky-800">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {config.eyebrow}
              </p>
              <p className="mt-5 text-sm font-semibold text-sky-700">{config.tagline}</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.15rem]">
                {config.h1}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                <HighlightPriceText text={config.heroBody} />
              </p>

              {config.pricing ? (
                <div className="mt-6 inline-flex flex-col gap-2 rounded-2xl border border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 px-5 py-4 shadow-lg shadow-amber-500/15">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Starting price (minimum)</p>
                  <p className="flex flex-wrap items-baseline gap-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                    <span className="text-lg font-semibold text-slate-600 sm:text-xl">Starting from</span>
                    <span className="price-highlight price-highlight--lg">
                      {priceAmount || config.pricing.amountLabel}
                    </span>
                    <span className="text-lg font-semibold text-slate-600 sm:text-xl">
                      {config.pricing.currency || "USD"}
                    </span>
                  </p>
                  <p className="max-w-md text-sm text-slate-600">
                    <HighlightPriceText text={config.pricing.note} />
                  </p>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#audit" className="btn-primary">
                  {config.primaryCta}
                </a>
                <Link href={bookHref()} className="btn-ghost-light">
                  Book Appointment
                </Link>
              </div>

              <ul className="mt-10 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
                {config.heroChips.map((item) => (
                  <li key={item} className="science-chip justify-center text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ArchitectureDiagram steps={config.architectureSteps} />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70" aria-label="Service trust badges">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-6 sm:gap-4">
          {config.trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:text-sm"
            >
              <Check className="h-3.5 w-3.5 text-sky-600" aria-hidden />
              {badge}
            </span>
          ))}
        </div>
      </section>

      {config.hookSection ? (
        <section className="parallax-break" id="outcomes">
          <div className="parallax-layer layer-lines" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.hookSection.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.hookSection.title}</h2>
              <p className="mt-4 text-slate-600">{config.hookSection.intro}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {config.hookSection.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sky-300 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="parallax-deep-section" id="why">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.problemEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.problemTitle}</h2>
            <p className="mt-4 text-slate-600">{config.problemIntro}</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.problems.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-sky-50">
                    <Icon className="h-5 w-5 text-sky-700" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{p.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="parallax-break" id="scope">
        <div className="parallax-layer layer-lines" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.mapEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.mapTitle}</h2>
            <p className="mt-4 text-slate-600">{config.mapIntro}</p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <div className="glass-panel p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Cloud className="h-4 w-4 text-slate-400" aria-hidden />
                {config.fromLabel}
              </div>
              <ul className="space-y-3">
                {config.fromStack.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden flex-col items-center justify-center lg:flex" aria-hidden>
              <div className="migration-flow-pulse flex h-14 w-14 items-center justify-center rounded-full border border-sky-300 bg-sky-100">
                <ArrowRight className="h-6 w-6 text-sky-700" />
              </div>
            </div>

            <div className="glass-panel border-cyan-300/25 p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-sky-800">
                <Boxes className="h-4 w-4 text-sky-600" aria-hidden />
                {config.toLabel}
              </div>
              <ul className="space-y-3">
                {config.toStack.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-slate-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-sky-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {config.migrateCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-sky-700" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                  {card.items && (
                    <ul className="mt-3 space-y-1.5">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="h-1 w-1 rounded-full bg-cyan-300" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="parallax-light parallax-light-section" id="services">
        <div className="parallax-layer layer-light-dots" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-700">{config.servicesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0b1530] sm:text-4xl">{config.servicesTitle}</h2>
            <p className="mt-4 text-slate-700">{config.servicesIntro}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {config.servicesIncluded.map((s) => (
              <article
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-[#0b1530]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="parallax-deep-section" id="process">
        <div className="parallax-layer layer-glow-soft" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.processEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.processTitle}</h2>
            <p className="mt-4 text-slate-600">{config.processIntro}</p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {config.processSteps.map((step, i) => (
              <li key={step.n} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-mono text-sky-600/80">{step.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{step.body}</p>
                {i < config.processSteps.length - 1 && (
                  <span className="absolute bottom-4 right-5 hidden text-sky-600/40 xl:inline" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="parallax-break" id="why-websrc">
        <div className="parallax-layer layer-lines" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.whyEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.whyTitle}</h2>
            <p className="mt-4 text-slate-600">{config.whyIntro}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {config.whyPoints.map((w) => {
              const Icon = w.icon;
              return (
                <article key={w.title} className="glass-tile p-6">
                  <Icon className="h-5 w-5 text-sky-700" aria-hidden />
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{w.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="parallax-deep-section" id="deliverables">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.deliverablesEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.deliverablesTitle}</h2>
              <p className="mt-4 text-slate-600">{config.deliverablesIntro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#audit" className="btn-primary">
                  {config.primaryCta}
                </a>
                <Link href={bookHref()} className="btn-ghost-light">
                  Book Appointment
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {config.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="parallax-break" id="faq">
        <div className="parallax-layer layer-glow-soft" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.faqEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.faqTitle}</h2>
            <p className="mt-4 text-slate-600">{config.faqIntro}</p>
          </div>
          <div className="mt-10">
            <FaqAccordion items={config.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-y border-slate-200 bg-slate-100/70" id="related">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="text-2xl font-bold text-slate-900">Related WEBSRC services</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition-colors hover:border-cyan-300/30 hover:text-slate-900"
                >
                  {page.navLabel}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="parallax-deep-section" id="audit">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">{config.auditEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{config.auditTitle}</h2>
              <p className="mt-4 text-slate-600">
                <HighlightPriceText text={config.auditIntro} />
              </p>
              <ul className="mt-8 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-600" aria-hidden />
                  {config.auditBullets[0]}
                </li>
                <li className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-sky-600" aria-hidden />
                  {config.auditBullets[1]}
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-sky-600" aria-hidden />
                  {config.auditBullets[2]}
                </li>
              </ul>
              <Link href={bookHref()} className="btn-ghost-light mt-8">
                Prefer a call? Book Appointment
              </Link>
            </div>
            <MigrationForm formSubject={config.formSubject} submitLabel={config.primaryCta} />
          </div>
        </div>
      </section>

      <section className="parallax-cta">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-700">{config.finalEyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-slate-900 sm:text-5xl">
            {config.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-700">
            <HighlightPriceText text={config.finalBody} />
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#audit" className="btn-primary">
              {config.primaryCta}
            </a>
            <Link href={bookHref()} className="btn-ghost-light">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
