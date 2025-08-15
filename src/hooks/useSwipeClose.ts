import { useEffect } from "react";

export function useSwipeClose(onClose?: () => void) {
  useEffect(() => {
    window.history.pushState({ windowOpen: true }, "", "");

    const handler = (e: PopStateEvent) => {
      if (e.state?.windowOpen && onClose) {
        onClose();
        window.history.pushState({ windowOpen: true }, "", ""); // Reinstate blocker
      }
    };

    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, [onClose]);
}
