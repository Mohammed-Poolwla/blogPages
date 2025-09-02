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
        <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>
        <p>
          Your privacy matters. This policy explains what personal data we collect, how we use it, and your
          rights. We collect the minimum data needed to operate and improve this website. We never sell your
          personal data.
        </p>

        <h2>Who we are</h2>
        <p>
          This website is operated by <strong>webSRC</strong>. If you have questions about this policy or how we
          handle your data, contact us at <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>

        <h2>Data we collect</h2>
        <ul>
          <li>
            <strong>Usage data</strong>: standard server logs (IP address, user agent, pages visited, timestamps)
            and privacy‑respecting analytics to understand site performance and content engagement.
          </li>
          <li>
            <strong>Contact data</strong>: when you submit a form or email us, we collect your name, email address,
            and the message you send so we can respond.
          </li>
          <li>
            <strong>Cookies</strong>: essential cookies to operate the site and optional analytics cookies. See our
            <a href="/cookies"> Cookie Policy</a> for details.
          </li>
        </ul>

        <h2>How we use your data</h2>
        <ul>
          <li>Provide and maintain the website and its features.</li>
          <li>Respond to enquiries and provide customer support.</li>
          <li>Monitor performance, security, and usage to improve our services.</li>
          <li>Comply with legal obligations and enforce our terms.</li>
        </ul>

        <h2>Legal bases (UK/EU GDPR)</h2>
        <ul>
          <li><strong>Legitimate interests</strong>: to operate, secure, and improve the site.</li>
          <li><strong>Consent</strong>: for optional analytics cookies where required.</li>
          <li><strong>Contract</strong>: when responding to your specific requests or providing agreed services.</li>
          <li><strong>Legal obligation</strong>: where we must retain certain information by law.</li>
        </ul>

        <h2>Data retention</h2>
        <p>
          We keep personal data only as long as necessary for the purposes described above. Server logs are retained
          for a limited time for security and diagnostic purposes. Contact emails are kept while we handle your
          enquiry and for reasonable archival periods unless you request deletion.
        </p>

        <h2>Sharing your data</h2>
        <p>
          We do not sell your personal data. We may share limited data with trusted service providers who help us
          run the website (for example, hosting and analytics). These providers act on our instructions and are
          bound by appropriate confidentiality and data protection obligations.
        </p>

        <h2>International transfers</h2>
        <p>
          Our service providers may process data outside your country. Where applicable, we rely on appropriate
          safeguards (such as standard contractual clauses) to protect your data.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, rectify, erase, restrict or object to
          processing, and data portability. You can also withdraw consent where processing is based on consent.
          To exercise these rights, contact <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>

        <h2>Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect personal data. No method of
          transmission or storage is 100% secure; we work to continually improve our safeguards.
        </p>

        <h2>Children’s privacy</h2>
        <p>
          This website is not directed to children under 13 (or the age defined by local law). If you believe a
          child provided personal data, contact us to delete it.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will post the new version on this page and update the
          effective date above.
        </p>

        <h2>Contact us</h2>
        <p>
          For privacy questions or requests, email <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>
      </div>
    </Layout>
  );
}


