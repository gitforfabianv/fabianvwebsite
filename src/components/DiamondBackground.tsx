import React from "react";

interface DiamondBackgroundProps {
  children: React.ReactNode;
}

const DiamondBackground: React.FC<DiamondBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-drift bg-diamond-pattern" />

      {/* Foreground children */}
      <div className="relative z-10 flex flex-col w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default DiamondBackground;
