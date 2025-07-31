import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-4 px-6 text-center text-sm text-slate-400">
      &copy; {new Date().getFullYear()} SyntvxBytez. All rights reserved.
    </footer>
  );
};

export default Footer;
