import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
