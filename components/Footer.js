import Link from 'next/link';
import { servicePageList } from '@/lib/services';

const WHATSAPP_NUMBER = String(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918109041335").replace(/[^\d]/g, "");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const Footer = () => {
  const migrationLinks = servicePageList.filter((p) =>
    [
      'lovable-to-supabase',
      'lovable-migration',
      'bolt-to-supabase',
      'firebase-to-supabase',
      'supabase-audit',
      'supabase-consulting',
      'ai-mvp-to-production',
    ].includes(p.slug)
  );

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-black tracking-[0.2em] text-slate-900">WEBSRC</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-700">Supabase Migration Experts</p>
            <p className="mt-3 max-w-xs text-sm text-slate-500">
              Migrations, audits, and production hardening for founders who need to own their infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-slate-900">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-slate-900">Services</Link></li>
              <li><Link href="/book" className="transition-colors hover:text-slate-900">Book Appointment</Link></li>
              <li><Link href="/blogs" className="transition-colors hover:text-slate-900">Blogs</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-slate-900">Contact</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-slate-900">Privacy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-slate-900">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Migration services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {migrationLinks.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="transition-colors hover:text-slate-900">
                    {page.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="transition-colors hover:text-cyan-700">
                  View all services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Profiles</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">
                  WhatsApp: +91 81090 41335
                </a>
              </li>
              <li><a href="https://www.linkedin.com/in/mohammed-poolwala-41621896/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">LinkedIn</a></li>
              <li><a href="https://www.upwork.com/freelancers/~0127aaf7f87ebb7377" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">Upwork</a></li>
              <li><a href="https://github.com/Mohammed-Poolwla" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">GitHub</a></li>
              <li><a href="https://medium.com/@mohammed.poolwala_1888" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-slate-900">Medium</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-6">
          <p className="text-xs">© {new Date().getFullYear()} WEBSRC. All rights reserved.</p>
          <p className="text-xs">
            Built by <Link href="https://websrc.uk" className="transition-colors hover:text-slate-900">WEBSRC</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
