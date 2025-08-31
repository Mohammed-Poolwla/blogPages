import Head from 'next/head';
import Layout from '@/components/layout';
import { DevicePhoneMobileIcon, GlobeAltIcon, ServerStackIcon, ShoppingCartIcon, SparklesIcon, NewspaperIcon } from '@heroicons/react/24/outline';

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Services - webSRC</title>
        <meta name="description" content="Services: Next.js web apps, mobile apps, Laravel APIs, e-commerce, content systems, performance and SEO." />
      </Head>
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Services</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><GlobeAltIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">Web Apps</h2>
            <p className="text-gray-700">Next.js applications with clean UI, type-safe APIs, and great UX.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><DevicePhoneMobileIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">Mobile Apps</h2>
            <p className="text-gray-700">React Native/Expo apps, shared codebases, fast iteration, app store delivery.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><ServerStackIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">Laravel & APIs</h2>
            <p className="text-gray-700">Laravel backends, REST/GraphQL APIs, auth, queues, and integrations.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><ShoppingCartIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">E‑commerce</h2>
            <p className="text-gray-700">Shopify/Headless commerce, product catalogs, checkout flows, and analytics.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><NewspaperIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">Content Systems</h2>
            <p className="text-gray-700">Blog pipelines, CMS integrations, analytics, and editorial tooling.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100"><SparklesIcon className="h-6 w-6 text-gray-700" /></div>
            <h2 className="text-xl font-semibold mb-2">Performance & SEO</h2>
            <p className="text-gray-700">Core Web Vitals, structured data, and on‑page SEO improvements.</p>
          </div>
        </div>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black">Request a quote</a>
        </div>
      </div>
    </Layout>
  );
}


