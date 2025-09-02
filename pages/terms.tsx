import Head from 'next/head';
import Layout from '@/components/layout';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - webSRC</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 prose">
        <h1>Terms of Service</h1>
        <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>

        <h2>Acceptance of terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms of Service and our
          <Link href="/privacy"> Privacy Policy</Link>. If you do not agree, please do not use the website.
        </p>

        <h2>Use of the website</h2>
        <ul>
          <li>Do not attempt to disrupt, interfere with, or gain unauthorised access to the site or its systems.</li>
          <li>Do not use the site for unlawful purposes or to infringe the rights of others.</li>
          <li>You are responsible for ensuring your use complies with applicable laws.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          Unless otherwise indicated, the content on this site (text, graphics, logos, and code) is owned by webSRC
          or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or
          create derivative works without prior written permission.
        </p>

        <h2>Content and accuracy</h2>
        <p>
          Content is provided for general information only. We make reasonable efforts to keep content up to date
          but do not guarantee completeness or accuracy.
        </p>

        <h2>Third‑party links</h2>
        <p>
          This website may contain links to third‑party websites. We do not control or endorse these sites and are
          not responsible for their content or practices.
        </p>

        <h2>Disclaimer of warranties</h2>
        <p>
          The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether
          express or implied, including but not limited to implied warranties of merchantability, fitness for a
          particular purpose, and non‑infringement.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, webSRC will not be liable for any indirect, incidental, special,
          consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
          indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the
          website.
        </p>

        <h2>Indemnity</h2>
        <p>
          You agree to indemnify and hold webSRC harmless from any claims, liabilities, damages, losses, and
          expenses arising from your use of the website or breach of these terms.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The updated version will be posted on this page with the
          effective date above. Continued use of the site constitutes acceptance of the updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email <a href="mailto:info@websrc.uk">info@websrc.uk</a>.
        </p>
      </div>
    </Layout>
  );
}


