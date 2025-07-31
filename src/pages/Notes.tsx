// src/pages/Notes.tsx
import { useState } from "react";
import { WindowFrame } from "../components/WindowFrame";

export default function Notes({ onClose }: { onClose: () => void }) {
  return (
    <WindowFrame title="Notes" onClose={onClose}>
      Take Some Notes
    </WindowFrame>
  );
}
