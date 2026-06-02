import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About WEBSRC</title>
        <meta
          name="description"
          content="Meet the founder of WEBSRC. We build high-performance digital products and publish practical pet-care guides with clarity, empathy, and trust."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "WEBSRC",
            jobTitle: "Founder and Full-stack Engineer",
            url: "https://websrc.uk/about",
            sameAs: [
              "https://www.linkedin.com/in/mohammed-poolwala-41621896/",
              "https://www.upwork.com/freelancers/~0127aaf7f87ebb7377",
              "https://github.com/Mohammed-Poolwla",
              "https://medium.com/@mohammed.poolwala_1888"
            ]
          })
        }} />
      </Head>
      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="parallax-layer layer-glow" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:items-center">
            <div className="glass-panel overflow-hidden">
              <Image
                src="/images/founder-websrc.png"
                alt="Founder of WEBSRC"
                width={680}
                height={680}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">About WEBSRC</p>
              <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">
                Engineering with empathy
              </h1>
              <p className="mt-5 max-w-3xl text-base text-slate-200 sm:text-lg">
                I am Mohammed Poolwala, founder of WEBSRC. We build high-performance digital products
                for businesses and publish practical pet-care blogs for families. This dual mission
                comes from one belief: technology should improve real life for real people.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-slate-300">
                12+ years in software engineering, currently working as a Senior Consultant while helping
                startups and teams ship better products with modern frontend and full-stack systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Start a project</Link>
                <Link href="/blogs" className="btn-ghost-light">Read pet guides</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070c1f]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h2 className="text-xl font-semibold text-white">What we build</h2>
              <p className="mt-3 text-sm text-slate-200">
                Conversion-focused websites, content systems, and scalable web platforms with performance at the core.
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h2 className="text-xl font-semibold text-white">Why we write pet blogs</h2>
              <p className="mt-3 text-sm text-slate-200">
                Many pet owners need clear, trustworthy guidance. We use our content expertise to make that help accessible.
              </p>
            </article>
            <article className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h2 className="text-xl font-semibold text-white">How we care</h2>
              <p className="mt-3 text-sm text-slate-200">
                Every project and every article is built with responsibility, clarity, and long-term value for the user.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="parallax-light">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#0b1530]">Professional profile</h2>
              <p className="mt-4 text-slate-700">
                I design and ship modern applications with type-safe APIs, accessible UI, and measurable business outcomes.
                My process is practical: define value early, ship in iterations, and improve with user feedback.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li>• Frontend: React.js, Next.js, JavaScript/TypeScript, responsive UI architecture</li>
                <li>• Backend: Node.js, Laravel, Postgres/Drizzle, API integrations</li>
                <li>• Delivery: Vercel, CI/CD, CDN and image optimization pipelines</li>
                <li>• Strategy: performance, SEO, analytics, content operations, and mentoring</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#0b1530]">Selected impact</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white/90 p-4">
                  <h3 className="text-lg font-semibold text-[#0b1530]">saleshero.dk</h3>
                  <p className="text-sm text-slate-700">+35% Lighthouse performance with cleaner UX and faster authoring workflow.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/90 p-4">
                  <h3 className="text-lg font-semibold text-[#0b1530]">hyvv.io</h3>
                  <p className="text-sm text-slate-700">Structured CMS setup for editorial scale and faster content publishing.</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/90 p-4">
                  <h3 className="text-lg font-semibold text-[#0b1530]">butterflye.io</h3>
                  <p className="text-sm text-slate-700">Reusable component system that improved consistency and speed of release.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1330]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold text-white">Client Reviews on Upwork</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            I help startups, agencies, and enterprise teams ship AI-powered apps and automation
            systems in weeks, not months. My stack includes React, React Native, Supabase, Lovable,
            n8n, and practical AI integrations.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/5 p-6">
              <h3 className="text-lg font-semibold text-white">Upwork Profile Snapshot</h3>
              <p className="mt-2 text-sm text-slate-300">
                100% Job Success, Top Rated, 4.8 rating (15 reviews), 19 total jobs, and 283 total hours.
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/upwork-profile.png"
                  alt="Upwork profile snapshot for Mohammed P."
                  width={1400}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://www.upwork.com/freelancers/~0127aaf7f87ebb7377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Upwork Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-poolwala-41621896/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light"
                >
                  View LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/5 p-6">
              <h3 className="text-lg font-semibold text-white">What I Build</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• AI-powered SaaS MVPs and web apps with production-ready architecture</li>
                <li>• React Native apps with Expo, push notifications, and store deployment</li>
                <li>• Lovable prototypes converted into scalable real-world products</li>
                <li>• n8n workflow automation with CRM and AI-agent integrations</li>
                <li>• OpenAI/Claude integrations with secure, practical product flows</li>
                <li>• Full-stack React + Next.js applications with Supabase auth and database design</li>
                <li>• Stripe subscriptions, usage-based billing, and checkout lifecycle automation</li>
                <li>• Internal dashboards, admin panels, and role-based access control systems</li>
                <li>• API-first architectures with webhook orchestration and third-party integrations</li>
                <li>• Real-time features such as notifications, live updates, and collaboration workflows</li>
                <li>• Performance optimization including CWV tuning, bundle reduction, and caching strategy</li>
                <li>• End-to-end delivery from product scoping to launch support and iteration</li>
              </ul>
              <h4 className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-200">Recent Results</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• 15+ production apps delivered using React + Supabase</li>
                <li>• Automation systems saving clients 20+ hours per week</li>
                <li>• AI MVP launches in 2–4 week sprint cycles</li>
                <li>• Mobile apps supporting 50K+ active users</li>
                <li>• 100% Job Success and Top Rated status on Upwork</li>
                <li>• 19 completed jobs and 283+ tracked hours across global clients</li>
                <li>• 4.8/5 average feedback score across 15 verified reviews</li>
                <li>• Faster time-to-market through weekly release cycles and clear technical roadmaps</li>
                <li>• Reduced manual operations with n8n automation and AI-assisted business workflows</li>
                <li>• Stable production systems with proactive testing and pre-handoff QA checks</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-white">Verified Client Feedback</h3>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-cyan-200">Wix API, Next.js Developer • 5.0</p>
                <p className="mt-2 text-lg leading-none text-amber-300" aria-label="5 star rating">★★★★★</p>
                <p className="mt-3 text-slate-100">
                  &quot;Highly recommend Mohammed! They were super helpful and completed my task incredibly fast.
                  Excellent work and very efficient!&quot;
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-cyan-200">React-Next.js-GraphQL-TypeScript • 4.4</p>
                <p className="mt-2 text-lg leading-none text-amber-300" aria-label="4.4 star rating">★★★★☆</p>
                <p className="mt-3 text-slate-100">
                  &quot;Mohammed is highly skilled in React, NextJs and Typescript. He is able to plan project
                  structure and implement the task.&quot;
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-cyan-200">Tree Chart/Flow Chart - React • 5.0</p>
                <p className="mt-2 text-lg leading-none text-amber-300" aria-label="5 star rating">★★★★★</p>
                <p className="mt-3 text-slate-100">
                  &quot;Awesome job by Mohammad. Looking forward to work with him again.&quot;
                </p>
              </article>
              <article className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-cyan-200">Spinning Wheel Project • 5.0</p>
                <p className="mt-2 text-lg leading-none text-amber-300" aria-label="5 star rating">★★★★★</p>
                <p className="mt-3 text-slate-100">
                  &quot;One of the best freelancers i have worked with&quot;
                </p>
              </article>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/upwork-review-1.png"
                  alt="Upwork review screenshot one"
                  width={1200}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/upwork-review-2.png"
                  alt="Upwork review screenshot two"
                  width={1200}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/upwork-review-3.png"
                  alt="Upwork review screenshot three"
                  width={1200}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#070c1f]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-bold text-white">Connect with WEBSRC</h2>
          <p className="mt-2 text-slate-300">
            If you need a high-performing website, content platform, or a trusted digital partner, let us build it together.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="text-cyan-200 hover:text-cyan-100" href="https://www.linkedin.com/in/mohammed-poolwala-41621896/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/Mohammed-Poolwla" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="text-cyan-200 hover:text-cyan-100" href="https://www.upwork.com/freelancers/~0127aaf7f87ebb7377" target="_blank" rel="noopener noreferrer">Upwork</a>
            <a className="text-cyan-200 hover:text-cyan-100" href="https://medium.com/@mohammed.poolwala_1888" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary">Work with WEBSRC</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}


