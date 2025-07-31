import { useEffect, useState } from "react";

interface MouseBackgroundProps {
  children: (pos: { x: number; y: number }) => React.ReactNode;
}

export default function MouseBackground({ children }: MouseBackgroundProps) {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", updatePos);
    return () => window.removeEventListener("mousemove", updatePos);
  }, []);

  const dx = pos.x - 50;
  const dy = pos.y - 50;
  const scale = 1 + Math.sqrt(dx * dx + dy * dy) / 500;

  const gradientStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(
      circle at ${pos.x}% ${pos.y}%,
      #2c2c2c 0%,
      #1a1a1a 30%,
      #0d0d0d 60%,
      #000000 100%
    )`,
    transform: `scale(${scale})`,
    transition: "transform 0.3s ease",
    zIndex: -1,
  };

  const noiseLayerStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "url(/static/mbossed.png)",
    backgroundColor: "#0000ff",
    backgroundRepeat: "repeat",
    backgroundSize: "128px 128px",
    backgroundPosition: `${dx * 2}px ${dy * 2}px`,
    opacity: 0.7,
    mixBlendMode: "overlay",
    zIndex: -1,
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={gradientStyle} />
        <div className="absolute inset-0" style={noiseLayerStyle} />
      </div>
      {children(pos)}
    </>
  );
}
