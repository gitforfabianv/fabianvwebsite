import React from "react";
import { Button } from "./Button";
import DiagonalBackground from "./DiagonalBackground";

export const WindowFrame = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
}) => (
  <div className="p-0 m-0 z-30 flex flex-col h-full outline-4 pointer-events-auto">
    <nav className="bg-blue-900">
      <DiagonalBackground>
        <div className="flex flex-grow justify-between items-center">
          <Button label="─" onClick={onClose} />
          <div className="w-full px-1 mx-1 outline-4 outline-double text-white text-center shadow-outset transition">
            {title}
          </div>
          <Button label="▴" onClick={onClose} />
          <Button label="▾" onClick={onClose} />
          <Button label="X" onClick={onClose} />
        </div>
      </DiagonalBackground>
    </nav>
    <div className="flex-grow bg-purple-400/50 overflow-scroll win36-scrollbar">
      {children}
    </div>
  </div>
);
