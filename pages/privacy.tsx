import Head from 'next/head';
import Layout from '@/components/layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - webSRC</title>
        <meta name="robots" content="noodp" />
      </Head>
      <div className="max-w-3xl mx-auto px-4 prose">
        <h1>Privacy Policy</h1>
        <p>We respect your privacy. We collect minimal data to operate this website, including basic analytics to improve content and performance. We do not sell personal data.</p>
        <h2>Data We Collect</h2>
        <ul>
          <li>Server logs and basic analytics</li>
          <li>Contact form submissions</li>
        </ul>
        <h2>Contact</h2>
        <p>Questions? Email <a href="mailto:info@websrc.uk">info@websrc.uk</a>.</p>
      </div>
    </Layout>
  );
}


