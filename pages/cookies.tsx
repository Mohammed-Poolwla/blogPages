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
        <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the site remember
          your actions and preferences over time.
        </p>

        <h2>How we use cookies</h2>
        <ul>
          <li>
            <strong>Essential cookies</strong> (strictly necessary): required for basic site functionality and
            security. These cannot be switched off in our systems.
          </li>
          <li>
            <strong>Analytics cookies</strong> (optional): help us understand how visitors use the site so we can
            improve content and performance. Where required, these load only with your consent.
          </li>
        </ul>

        <h2>Managing cookies</h2>
        <p>
          Most browsers let you control cookies through settings (block, delete, or alert you about cookies). If you
          block essential cookies, parts of the site may not work properly. To manage cookies, see help pages for
          your browser.
        </p>

        <h2>Third‑party cookies</h2>
        <p>
          Some third‑party services we use (e.g., analytics or embedded content) may set their own cookies. We do not
          control these cookies—please check the respective provider’s policies.
        </p>

        <h2>Updates</h2>
        <p>
          We may update this policy to reflect changes in technology, law, or our services. Changes will be posted on
          this page.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about cookies? Email <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>
      </div>
    </Layout>
  );
}


