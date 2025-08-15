import { useEffect, useState } from "react";

interface DiagonalBackgroundProps {
  children: React.ReactNode;
}

export default function DiagonalBackground({
  children,
}: DiagonalBackgroundProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => ({
        x: (prev.x + 1) % 128,
        y: (prev.y + 1) % 128,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(./static/nice-snow.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          backgroundPosition: `${offset.x}px ${offset.y}px`,
          mixBlendMode: "overlay",
          opacity: 1,
        }}
      />

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
