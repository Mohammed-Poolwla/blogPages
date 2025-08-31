import Head from 'next/head';
import Layout from '@/components/layout';

export default function DisclaimerPage() {
  return (
    <Layout>
      <Head>
        <title>Disclaimer - webSRC</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 prose">
        <h1>Disclaimer</h1>
        <p>Information on this site is for general informational purposes only and is not veterinary advice. Consult a professional for pet health concerns.</p>
      </div>
    </Layout>
  );
}


