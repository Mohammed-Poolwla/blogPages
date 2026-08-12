import Link from 'next/link';
import Image from 'next/image';
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
    <footer className="border-t border-[#123456] bg-[#0b1f3a] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block rounded-md bg-white/95 px-2 py-1.5" aria-label="WEBSRC home">
              <Image
                src="/images/websrc-logo.png"
                alt="WEBSRC - IT Solutions & Services"
                width={220}
                height={60}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Migrations, audits, and production hardening for founders who need to own their infrastructure.
            </p>
            <Link href="/contact" className="btn-primary mt-5 !bg-[#00b4d8] !px-4 !py-2 text-sm hover:!bg-[#12c4e6]">
              Talk to Our Experts
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-white">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Services</Link></li>
              <li><Link href="/book" className="transition-colors hover:text-white">Book Appointment</Link></li>
              <li><Link href="/blogs" className="transition-colors hover:text-white">Blogs</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-white">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Migration services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {migrationLinks.map((page) => (
                <li key={page.slug}>
                  <Link href={`/${page.slug}`} className="transition-colors hover:text-white">
                    {page.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="transition-colors hover:text-[#7dd3fc]">
                  View all services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Profiles</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  WhatsApp: +91 81090 41335
                </a>
              </li>
              <li><a href="https://www.linkedin.com/in/mohammed-poolwala-41621896/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.upwork.com/freelancers/~0127aaf7f87ebb7377" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Upwork</a></li>
              <li><a href="https://github.com/Mohammed-Poolwla" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a></li>
              <li><a href="https://medium.com/@mohammed.poolwala_1888" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Medium</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} WEBSRC. All rights reserved.</p>
          <p className="text-xs text-slate-500">
            Built by <Link href="https://websrc.uk" className="transition-colors hover:text-white">WEBSRC</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
