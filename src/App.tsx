// src/App.tsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Files from "./pages/Files";
import Clock from "./pages/Clock";
import Notes from "./pages/Notes";
import Resume from "./pages/Resume";
import Desktop from "./components/Desktop"; // or wherever you placed it
import RetroIntro from "./components/RetroIntro";
import DiamondBackground from "./components/DiamondBackground";

function App() {
  return (
    <>
      <RetroIntro />
      <div className="w-screen h-svh flex flex-col items-center justify-center">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <DiamondBackground>
                  <Desktop />
                </DiamondBackground>
              }
            />
            <Route
              path="/files"
              element={<Files onClose={() => null} onLaunch={() => null} />}
            />
            <Route path="/clock" element={<Clock onClose={() => null} />} />
            <Route path="/notes" element={<Notes onClose={() => null} />} />
            <Route path="/resume" element={<Resume onClose={() => null} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
