import { useEffect, useRef } from "react";

export default function Wolfenstein({ onClose }: { onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.Dos || !containerRef.current) return;

    const emulator = window.Dos(containerRef.current, {
      url: "./WOLF3D.jsdos",
    });

    return () => {
      emulator?.stop();
    };
  }, []);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 pointer-events-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 z-50 text-white text-2xl font-bold hover:text-red-600"
      >
        ×
      </button>

      {/* Emulator Container */}
      <div ref={containerRef} id="dos" className="w-full h-full" />
    </div>
  );
}
