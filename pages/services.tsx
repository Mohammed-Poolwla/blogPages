import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ServerStackIcon,
  SparklesIcon,
  NewspaperIcon,
  CpuChipIcon,
  BoltIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'AI Web Apps & SaaS MVPs',
    description: 'Production-ready React/Next.js apps with Supabase, AI features, billing, and scalable architecture.',
    icon: CpuChipIcon,
  },
  {
    title: 'React & Next.js Frontends',
    description: 'High-converting interfaces, design systems, responsive UX, and clean component architecture.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Mobile Apps (iOS + Android)',
    description: 'React Native + Expo delivery with push notifications, offline sync, and store submissions.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'n8n Automation Systems',
    description: 'Business workflow automation with CRM integrations, AI agent routing, and webhook orchestration.',
    icon: BoltIcon,
  },
  {
    title: 'Backend & API Engineering',
    description: 'Supabase/Node/Laravel backends, secure auth, API integrations, and real-time data flows.',
    icon: ServerStackIcon,
  },
  {
    title: 'Content & Authority Systems',
    description: 'SEO-ready blog systems, editorial workflows, and growth content pipelines for long-term traffic.',
    icon: NewspaperIcon,
  },
  {
    title: 'Data & Database Design',
    description: 'Postgres schema design, performance optimization, and maintainable data models for growth.',
    icon: CircleStackIcon,
  },
  {
    title: 'Performance & Reliability',
    description: 'Core Web Vitals optimization, QA before handoff, and stable deployments with fast feedback loops.',
    icon: SparklesIcon,
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Services - WEBSRC</title>
        <meta
          name="description"
          content="WEBSRC services: AI web apps, React/Next.js, React Native, Supabase backends, n8n automations, and high-performance product delivery."
        />
      </Head>
      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">What WEBSRC Delivers</p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-3xl text-slate-200">
            I help startups, agencies, and enterprise teams ship AI-powered products and workflow automation in weeks,
            not months. You get full-stack execution, daily communication, and production-ready delivery.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="glass-tile p-4 text-center">
              <div className="text-2xl font-black text-cyan-200">15+</div>
              <p className="text-sm text-slate-300">Production Apps Delivered</p>
            </div>
            <div className="glass-tile p-4 text-center">
              <div className="text-2xl font-black text-cyan-200">20+ hrs</div>
              <p className="text-sm text-slate-300">Saved per week via automation</p>
            </div>
            <div className="glass-tile p-4 text-center">
              <div className="text-2xl font-black text-cyan-200">2-4 Weeks</div>
              <p className="text-sm text-slate-300">MVP sprint timeline</p>
            </div>
            <div className="glass-tile p-4 text-center">
              <div className="text-2xl font-black text-cyan-200">4 Hours</div>
              <p className="text-sm text-slate-300">Average first response</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Migration and Supabase</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Specialist landing pages</h2>
              </div>
              <Link href="/lovable-to-supabase" className="text-sm text-cyan-200 hover:text-cyan-100">
                Start with Lovable to Supabase →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/lovable-to-supabase', title: 'Lovable to Supabase', body: 'Migrate Lovable apps to owned Supabase infrastructure.' },
                { href: '/lovable-migration', title: 'Lovable Migration', body: 'Plan and run an exit from Lovable cloud with production ownership.' },
                { href: '/bolt-to-supabase', title: 'Bolt to Supabase', body: 'Move Bolt apps to Supabase without a full rewrite.' },
                { href: '/replit-to-supabase', title: 'Replit to Supabase', body: 'Take Replit prototypes into production Supabase setups.' },
                { href: '/v0-to-supabase', title: 'v0 to Supabase', body: 'Connect v0 UIs to a real Supabase backend.' },
                { href: '/firebase-to-supabase', title: 'Firebase to Supabase', body: 'Migrate Auth, Firestore/RTDB, and Storage to Supabase.' },
                { href: '/bubble-to-supabase', title: 'Bubble to Supabase', body: 'Leave Bubble with data ownership and a maintainable backend.' },
                { href: '/supabase-audit', title: 'Supabase Audit', body: 'RLS, schema, auth, and performance review with a ranked fix list.' },
                { href: '/supabase-consulting', title: 'Supabase Consulting', body: 'Architecture, RLS, and hands-on Supabase help.' },
                { href: '/ai-mvp-to-production', title: 'AI MVP to Production', body: 'Harden AI-built MVPs for real users and launch.' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-cyan-300/30 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.body}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100">Featured service</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Lovable to Supabase Migration</h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-100 sm:text-base">
              Move your Lovable app onto infrastructure you own: Postgres, Auth, Storage, RLS, Edge Functions, and a
              production cutover plan with minimal downtime.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/lovable-to-supabase" className="btn-primary">
                View migration page
              </Link>
              <Link href="/lovable-to-supabase#audit" className="btn-ghost-light">
                Book free audit
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-6 w-6 text-cyan-200" />
                  </div>
                  <h2 className="mb-2 text-xl font-semibold text-white">{service.title}</h2>
                  <p className="text-slate-300">{service.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Engagement Model</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>• Discovery: goals, user flow, technical scope, and rollout plan</li>
                <li>• Build: rapid weekly execution with transparent progress updates</li>
                <li>• QA + Launch: tested handoff, production deployment, and post-launch support</li>
                <li>• Optimization: ongoing improvements based on usage and performance data</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6">
              <h3 className="text-xl font-semibold text-white">Best Fit Clients</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>• Founders launching MVPs with AI or automation requirements</li>
                <li>• Agencies needing reliable full-stack delivery capacity</li>
                <li>• Teams modernizing legacy products and workflows</li>
                <li>• Businesses that value clear communication and execution speed</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <span className="ml-3 text-sm text-slate-300">Share your idea and get a technical roadmap.</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}


