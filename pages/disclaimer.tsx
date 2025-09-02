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
        <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>

        <h2>General information</h2>
        <p>
          The information provided on this website is for general informational and educational purposes only. While
          we strive for accuracy and clarity, content may not reflect the most current research or guidance.
        </p>

        <h2>No professional advice</h2>
        <p>
          Content relating to pet care, nutrition, behaviour, and health is not a substitute for professional
          veterinary advice, diagnosis, or treatment. Always consult a qualified veterinarian with questions about a
          pet’s medical condition.
        </p>

        <h2>No guarantees</h2>
        <p>
          We make no representations or warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability or availability of the content for any purpose.
        </p>

        <h2>External links</h2>
        <p>
          This site may contain links to third‑party websites. We have no control over the content, policies, or
          practices of third parties and accept no responsibility for them.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, webSRC will not be liable for any loss or damage arising from your
          use of the website or reliance on any information provided here.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this disclaimer, contact <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>
      </div>
    </Layout>
  );
}


