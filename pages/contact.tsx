import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = await res.json();
        alert(data.error || 'Failed to send');
        return;
      }
      alert('Message sent successfully.');
      form.reset();
    } catch (err) {
      alert('Network error. Please try again.');
    }
  }

  return (
    <Layout>
      <Head>
        <title>Contact - WEBSRC</title>
        <meta name="description" content="Contact WEBSRC for web development, Supabase migrations, or book a consultation appointment." />
      </Head>
      <section className="parallax-hero">
        <div className="parallax-layer layer-grid" />
        <div className="relative mx-auto max-w-3xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Get in touch</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Contact WEBSRC</h1>
          <p className="mt-4 text-lg text-slate-600">
            Reach out at <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:info@websrc.uk">info@websrc.uk</a> or send a message below.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn-primary">
              Book Appointment
            </Link>
            <a
              href="https://wa.me/918109041335?text=Hi%20WEBSRC%2C%20I%20need%20help%20with%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              WhatsApp Us
            </a>
          </div>
          <form className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-sky-900/5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
              <input id="name" name="name" type="text" className="field-light mt-1" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
              <input id="email" name="email" type="email" className="field-light mt-1" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows={5} className="field-light mt-1" placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="btn-primary">Send message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
