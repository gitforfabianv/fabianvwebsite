// src/pages/Clock.tsx

import { WindowFrame } from "../components/WindowFrame";
import RetroClock from "../components/RetroClock";

export default function Clock({ onClose }: { onClose: () => void }) {
  return (
    <WindowFrame title="Clock" onClose={onClose}>
      <div className="w-full h-full bg-black flex justify-center items-center">
        <RetroClock />
      </div>
    </WindowFrame>
  );
}
