// src/pages/Notes.tsx

import { WindowFrame } from "../components/WindowFrame";
import NotePad from "../components/NotePad";

export default function Notes({ onClose }: { onClose: () => void }) {
  return (
    <WindowFrame title="Notes" onClose={onClose}>
      <div className="flex grow h-full">
        <NotePad />
      </div>
    </WindowFrame>
  );
}
