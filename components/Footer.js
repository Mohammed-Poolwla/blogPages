import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white text-lg font-semibold">webSRC</h3>
            <p className="mt-2 text-sm text-gray-400">
              Full-stack development, performance, and content for UK pet owners.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs">© {new Date().getFullYear()} webSRC. All rights reserved.</p>
          <p className="text-xs">Built by <Link href="https://websrc.uk" className="hover:text-white">webSRC</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


