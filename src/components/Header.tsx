import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">SyntvxBytez</h1>
      <nav>
        <ul className="flex gap-4 text-sm">
          <li>
            <a href="#" className="hover:text-indigo-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
