import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-900 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-black tracking-[0.22em]">
          <Link href="/" className="brand-gradient">
            WEBSRC
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link href="/" className="text-slate-700 transition-colors hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="text-slate-700 transition-colors hover:text-slate-900">
            About
          </Link>
          <Link href="/services" className="text-slate-700 transition-colors hover:text-slate-900">
            Services
          </Link>
          <Link href="/lovable-to-supabase" className="text-slate-700 transition-colors hover:text-slate-900">
            Lovable to Supabase
          </Link>
          <Link href="/blogs" className="text-slate-700 transition-colors hover:text-slate-900">
            Blogs
          </Link>
          <Link href="/book" className="btn-primary !px-4 !py-1.5 text-sm">
            Book Appointment
          </Link>
          <Link href="/contact" className="btn-ghost-light !px-4 !py-1.5 text-sm">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="rounded border border-slate-300 p-2 text-slate-700 hover:text-slate-900"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden sm:px-6">
          <div className="space-y-3 text-slate-700">
            <Link href="/" className="block hover:text-slate-900">
              Home
            </Link>
            <Link href="/about" className="block hover:text-slate-900">
              About
            </Link>
            <Link href="/services" className="block hover:text-slate-900">
              Services
            </Link>
            <Link href="/lovable-to-supabase" className="block hover:text-slate-900">
              Lovable to Supabase
            </Link>
            <Link href="/blogs" className="block hover:text-slate-900">
              Blogs
            </Link>
            <Link href="/book" className="btn-primary inline-flex w-full justify-center">
              Book Appointment
            </Link>
            <Link href="/contact" className="btn-ghost-light inline-flex w-full justify-center">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
