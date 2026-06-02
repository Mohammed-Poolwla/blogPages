import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#040611] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-black tracking-[0.2em] text-white">WEBSRC</h3>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Digital experiences with speed, story, scalable architecture, and meaningful pet-care education.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="transition-colors hover:text-white">About</Link></li>
              <li><Link href="/services" className="transition-colors hover:text-white">Services</Link></li>
              <li><Link href="/blogs" className="transition-colors hover:text-white">Blogs</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Profiles</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://www.linkedin.com/in/mohammed-poolwala-41621896/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.upwork.com/freelancers/~0127aaf7f87ebb7377" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Upwork</a></li>
              <li><a href="https://github.com/Mohammed-Poolwla" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">GitHub</a></li>
              <li><a href="https://medium.com/@mohammed.poolwala_1888" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Medium</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
          <p className="text-xs">© {new Date().getFullYear()} WEBSRC. All rights reserved.</p>
          <p className="text-xs">
            Built by <Link href="https://websrc.uk" className="transition-colors hover:text-white">WEBSRC</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


