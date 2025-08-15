import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans">
      <Header />
      <main className="flex-1 px-6 py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
