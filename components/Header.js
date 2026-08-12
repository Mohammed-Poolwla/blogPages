import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e2ec] bg-white/95 text-[#0b1f3a] backdrop-blur-lg shadow-sm shadow-[#0b1f3a]/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center" aria-label="WEBSRC home">
          <Image
            src="/images/websrc-logo.png"
            alt="WEBSRC - IT Solutions & Services"
            width={220}
            height={60}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <Link href="/" className="text-[#5b6b7c] transition-colors hover:text-[#0b1f3a]">
            Home
          </Link>
          <Link href="/about" className="text-[#5b6b7c] transition-colors hover:text-[#0b1f3a]">
            About
          </Link>
          <Link href="/services" className="text-[#5b6b7c] transition-colors hover:text-[#0b1f3a]">
            Services
          </Link>
          <Link href="/lovable-to-supabase" className="text-[#5b6b7c] transition-colors hover:text-[#0b1f3a]">
            Lovable to Supabase
          </Link>
          <Link href="/blogs" className="text-[#5b6b7c] transition-colors hover:text-[#0b1f3a]">
            Blogs
          </Link>
          <Link href="/book" className="btn-primary !rounded-md !px-4 !py-2 text-sm">
            Talk to Our Experts
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
              Talk to Our Experts
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
