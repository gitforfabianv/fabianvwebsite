import { useState } from "react";

type MenuBarProps = {
  onLaunch: (id: string) => void;
};

export default function MenuBar({ onLaunch }: MenuBarProps) {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <>
      <nav className="w-screen sticky top-0 z-50 bg-black text-white p-2 pointer-events-auto">
        {/* Hamburger Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="text-xl px-3 py-1 border border-white rounded custom-pointer"
        >
          ☰
        </button>

        {/* Dropdown Menu */}
        {open && (
          <ul className="absolute left-0 mt-2 bg-black shadow-md border border-gray-700 w-48 z-50 divide-y divide-gray-700 custom-pointer">
            <li
              onClick={() => {
                onLaunch("files");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-800 custom-pointer"
            >
              Files
            </li>

            {/* Programs Submenu */}
            <li
              onClick={() => setProgramsOpen((prev) => !prev)}
              className="px-4 py-2 hover:bg-gray-800 relative custom-pointer"
            >
              Programs ▸
              {programsOpen && (
                <ul className="absolute top-0 left-full w-40 bg-black border border-gray-700 shadow-md z-50 custom-pointer">
                  <li
                    onClick={() => {
                      onLaunch("clock");
                      setOpen(false);
                      setProgramsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-800 custom-pointer"
                  >
                    Clock
                  </li>
                  <li
                    onClick={() => {
                      onLaunch("calendar");
                      setOpen(false);
                      setProgramsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-800 custom-pointer"
                  >
                    Calendar
                  </li>
                  <li
                    onClick={() => {
                      onLaunch("notes");
                      setOpen(false);
                      setProgramsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-800 custom-pointer"
                  >
                    Notes
                  </li>
                  <li
                    onClick={() => {
                      onLaunch("wolfenstein");
                      setOpen(false);
                      setProgramsOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-800 custom-pointer"
                  >
                    Wolf3d
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </nav>
    </>
  );
}
