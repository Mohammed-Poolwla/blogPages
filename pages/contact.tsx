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
          <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">Contact</h1>
          <p className="mt-4 text-slate-200">
            Reach out at <a className="text-cyan-200 hover:text-cyan-100" href="mailto:info@websrc.uk">info@websrc.uk</a> or send a message below.
          </p>
          <div className="mt-6">
            <Link href="/book" className="btn-primary">
              Book Appointment
            </Link>
            <span className="ml-3 text-sm text-slate-300">Prefer a scheduled call? Pick a time.</span>
          </div>
          <form className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm text-slate-200">Name</label>
              <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border border-white/20 bg-[#0b1228] px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-slate-200">Email</label>
              <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border border-white/20 bg-[#0b1228] px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-200">Message</label>
              <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-md border border-white/20 bg-[#0b1228] px-3 py-2 text-slate-100 placeholder:text-slate-500" />
            </div>
            <button type="submit" className="btn-primary">Send</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
