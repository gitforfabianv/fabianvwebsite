import { useEffect, useState } from "react";

export default function NotePad() {
  const [note, setNote] = useState("");

  const storageKey = "cachedNote";

  // Load saved note on mount
  useEffect(() => {
    const savedNote = localStorage.getItem(storageKey);
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Save note whenever it changes
  useEffect(() => {
    localStorage.setItem(storageKey, note);
  }, [note]);

  return (
    <div className="h-full bg-white text-black p-4 rounded shadow-md w-full max-w-xl mx-auto">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write something..."
        className="w-full h-48 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  );
}
