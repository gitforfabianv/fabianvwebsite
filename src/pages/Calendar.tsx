// src/pages/Calendar.tsx

import { WindowFrame } from "../components/WindowFrame";
import Calendar from "react-calendar";

export default function SimpleCalendar({ onClose }: { onClose: () => void }) {
  return (
    <WindowFrame title="Calendar" onClose={onClose}>
      <div className="w-full h-full p-4 bg-black flex justify-center items-center">
        <Calendar />
      </div>
    </WindowFrame>
  );
}
