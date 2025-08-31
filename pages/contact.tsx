import Head from 'next/head';
import Layout from '@/components/layout';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact - webSRC</title>
        <meta name="description" content="Contact webSRC for web development or content collaborations." />
      </Head>
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Contact</h1>
        <p className="text-gray-700 mb-6">Reach out via email at <a className="text-blue-600" href="mailto:info@websrc.uk">info@websrc.uk</a> or use the form below.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700">Name</label>
            <input id="name" name="name" type="text" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700">Email</label>
            <input id="email" name="email" type="email" className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-gray-700">Message</label>
            <textarea id="message" name="message" rows={5} className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md">Send</button>
        </form>
      </div>
    </Layout>
  );
}


