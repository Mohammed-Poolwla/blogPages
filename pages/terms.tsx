import Head from 'next/head';
import Layout from '@/components/layout';

export default function TermsPage() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - webSRC</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 prose">
        <h1>Terms of Service</h1>
        <p>By using this site, you agree to these terms. Content is provided as-is without warranties. Do not misuse or attempt to disrupt the service.</p>
      </div>
    </Layout>
  );
}


