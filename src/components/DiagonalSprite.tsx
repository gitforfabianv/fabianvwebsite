import { useEffect, useState } from "react";

interface DiagonalBackgroundProps {
  children: React.ReactNode;
}

function isSafari(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(ua);
}

let DiagonalSprite: React.FC<DiagonalBackgroundProps>;

if (typeof navigator !== "undefined" && isSafari()) {
  DiagonalSprite = ({ children }) => <>{children}</>;
} else {
  DiagonalSprite = ({ children }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const loopDuration = 24480;
      const driftDistance = 200;

      const animate = () => {
        const now = performance.now();
        const progress = (now % loopDuration) / loopDuration;
        const diagonalOffset = progress * driftDistance;

        setOffset({
          x: diagonalOffset % 512,
          y: (512 - diagonalOffset) % 512,
        });

        requestAnimationFrame(animate);
      };

      const frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }, []);

    return (
      <div className="flex flex-col w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "url(./static/sprite.gif)",
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            backgroundPosition: `${offset.x}px ${offset.y}px`,
            opacity: 0.8,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundColor: "#0000ff",
            backgroundImage: "url(./static/subtle-white-feathers.png)",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
            backgroundPosition: `${offset.x}px ${offset.y}px`,
            mixBlendMode: "overlay",
            opacity: 1,
          }}
        />
        <div className="relative z-10 flex flex-col flex-grow w-full h-full overflow-hidden">
          {children}
        </div>
      </div>
    );
  };
}

export default DiagonalSprite;
