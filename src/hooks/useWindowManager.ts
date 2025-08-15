// hooks/useWindowManager.ts
import { useState } from "react";

export default function useWindowManager() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const open = (id: string) =>
    setOpenWindows((prev) => (prev.includes(id) ? prev : [...prev, id]));

  const close = (id: string) =>
    setOpenWindows((prev) => prev.filter((w) => w !== id));

  return { openWindows, open, close };
}
