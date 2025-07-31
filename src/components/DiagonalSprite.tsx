import { useEffect, useState } from "react";

interface DiagonalBackgroundProps {
  children: React.ReactNode;
}

export default function DiagonalSprite({ children }: DiagonalBackgroundProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => ({
        x: (prev.x + 1) % 512, // increase travel distance
        y: (prev.y - 1 + 512) % 512,
      }));
    }, 50); // keep interval speed or adjust for smoother motion

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* GIF Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(./static/sprite.gif)", // your animated gif
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px", // adjust for your gif size
          backgroundPosition: `${offset.x}px ${offset.y}px`,
          opacity: 0.8, // adjust if needed
        }}
      />

      {/* Existing Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundColor: "#0000ff",
          backgroundImage: "url(/static/subtle-white-feathers.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          backgroundPosition: `${offset.x}px ${offset.y}px`,
          mixBlendMode: "overlay",
          opacity: 1,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
