import React from "react";
import { Button } from "./Button";
import DiagonalBackground from "./DiagonalBackground";
import { useSwipeClose } from "../hooks/useSwipeClose";

export const WindowFrame = ({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
}) => {
  useSwipeClose(onClose);

  return (
    <div className="w-full h-full flex flex-col min-h-0 outline-4 outline-double overflow-hidden pointer-events-auto">
      <nav className="flex bg-blue-900">
        <DiagonalBackground>
          <div className="flex items-center justify-between">
            <Button label="─" onClick={onClose} />
            <div className="flex-1 px-2 text-center text-white outline-4 outline-double shadow-outset">
              {title}
            </div>
            <div className="flex items-center space-x-1">
              <Button label="▴" onClick={onClose} />
              <Button label="▾" onClick={onClose} />
              <Button label="X" onClick={onClose} />
            </div>
          </div>
        </DiagonalBackground>
      </nav>

      <div className="flex-1 min-h-0 min-w-0 overflow-auto bg-blue-700/50 win36-scrollbar">
        {children}
      </div>
    </div>
  );
};
