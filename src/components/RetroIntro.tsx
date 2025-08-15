import { useState, useEffect } from "react";

export default function RetroIntro() {
  const [hasStarted, setHasStarted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const [typed, setTyped] = useState("");

  const promptText = "win 3.6";
  const typingSpeed = 200;

  const startSystem = () => {
    setHasStarted(true);
    const bootSound = new Audio("./sfx/bootup.mp3");
    bootSound
      .play()
      .catch((err) => console.warn("Autoplay error:", err.message));

    // Show the prompt after "Booting System..."
    setTimeout(() => setShowPrompt(true), 3500);
  };

  // Typing effect
  useEffect(() => {
    if (!hasStarted || !showPrompt || typed.length >= promptText.length) return;
    const timeout = setTimeout(() => {
      setTyped(promptText.slice(0, typed.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typed, hasStarted, showPrompt]);

  // Hide the screen 2 seconds after typing finishes
  useEffect(() => {
    if (typed === promptText) {
      const timeout = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [typed]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-green-500 font-retro">
      {!hasStarted ? (
        <button
          onClick={startSystem}
          className="text-lg border-2 border-green-500 px-4 py-2 hover:bg-green-900"
        >
          Start System
        </button>
      ) : (
        <>
          <div className="crt-circle" />
          <div className="crt-content relative text-center">
            {!showPrompt ? (
              <div className="animate-flicker text-xl">Booting System...</div>
            ) : (
              <div className="relative text-xl whitespace-nowrap">
                {/* Invisible full-length placeholder to prevent shifting */}
                <div className="invisible">C:\&gt;{promptText}|</div>

                {/* Absolutely positioned typing animation */}
                <div className="absolute top-0 left-0">
                  <span>C:\&gt;</span>
                  <span>{typed}</span>
                  <span className="blink">|</span>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
