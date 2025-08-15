import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    setIsMobile(query.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", handler);

    return () => query.removeEventListener("change", handler);
  }, []);

  return isMobile ? (
    <footer className="w-screen sticky bottom-0 z-50 bg-black text-white p-2 pointer-events-auto">
      <small>
        &copy; {new Date().getFullYear()} Fabian V. All rights reserved.
      </small>
    </footer>
  ) : null;
};

export default Footer;
