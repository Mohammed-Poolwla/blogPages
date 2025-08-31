import Head from 'next/head';
import Layout from '@/components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About webSRC</title>
        <meta name="description" content="About webSRC: Full-stack development portfolio and UK pet content publisher." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "webSRC",
            jobTitle: "Full‑stack Developer",
            url: "https://websrc.uk/about",
            sameAs: [
              "https://www.linkedin.com/in/mohammed-poolwala-41621896/",
              "https://github.com/Mohammed-Poolwla",
              "https://medium.com/@mohammed.poolwala_1888"
            ]
          })
        }} />
      </Head>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">About</h1>
        <p className="text-gray-800 text-lg mb-6">
          Full‑stack developer focused on building performant, maintainable web products and content systems. I partner with founders and teams to ship reliable software, improve Core Web Vitals, and create content that’s clear and trustworthy.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Professional summary</h2>
        <p className="text-gray-700 mb-6">
          I design and ship modern applications with an emphasis on type‑safe APIs, accessible UI, and measurable outcomes. My approach is pragmatic: scope to value, ship weekly, and iterate based on real user signals. I’ve delivered projects across SaaS, e‑commerce, and content publishing with a consistent focus on performance and editorial efficiency.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Core skills</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Frontend: Next.js, React 18, TypeScript, Tailwind, accessibility (WCAG)</li>
          <li>Backend: Node.js, Laravel/PHP, Postgres (Drizzle), REST/GraphQL APIs</li>
          <li>Mobile: React Native/Expo, shared web/mobile codebases</li>
          <li>Infra: Vercel, CI/CD, edge caching, image/CDN pipelines (Cloudinary)</li>
          <li>Content: CMS integrations, editorial workflows, analytics & SEO</li>
          <li>Performance: Core Web Vitals, Lighthouse, RUM instrumentation</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Selected projects</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-4">
          <li>
            <span className="font-semibold">saleshero.dk</span> – B2B marketing platform
            <div className="text-gray-700">Role: Lead frontend • Impact: +35% Lighthouse performance, streamlined authoring and analytics.</div>
          </li>
          <li>
            <span className="font-semibold">hyvv.io</span> – Marketing site + CMS
            <div className="text-gray-700">Role: Full‑stack • Impact: Editorial workflow with structured content, faster iteration cycles.</div>
          </li>
          <li>
            <span className="font-semibold">butterflye.io</span> – Design system & component library
            <div className="text-gray-700">Role: Frontend • Impact: Reusable UI kit, reduced defect rate and faster feature delivery.</div>
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Industry experience</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>SaaS marketing & product sites (performance & conversion focus)</li>
          <li>Content publishing (editorial pipelines, image optimization, SEO)</li>
          <li>E‑commerce (catalogs, headless storefronts, analytics)</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Stack & tools</h2>
        <p className="text-gray-700 mb-6">Next.js, TypeScript, Tailwind, Postgres/Drizzle, Laravel, Cloudinary, Vercel.</p>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Find me online</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li><a className="text-blue-600" href="https://www.linkedin.com/in/mohammed-poolwala-41621896/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="text-blue-600" href="https://github.com/Mohammed-Poolwla" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="text-blue-600" href="https://medium.com/@mohammed.poolwala_1888" target="_blank" rel="noopener noreferrer">Medium</a></li>
        </ul>

        <div className="mb-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Work with me</a>
        </div>
      </div>
    </Layout>
  );
}


