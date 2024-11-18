import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="py-8">{children}</main>

      {/* Optionally add a Footer here */}
    </div>
  );
};

export default Layout;
