import Head from 'next/head';
import Layout from '@/components/layout';

export default function CookiesPage() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy - webSRC</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 prose">
        <h1>Cookie Policy</h1>
        <p>We use minimal cookies essential for site functionality and analytics. You can control cookies in your browser settings.</p>
      </div>
    </Layout>
  );
}


