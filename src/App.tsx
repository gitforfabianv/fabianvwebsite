// src/App.tsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Files from "./pages/Files";
import Clock from "./pages/Clock";
import Notes from "./pages/Notes";
import Resume from "./pages/Resume";
import Desktop from "./components/Desktop"; // or wherever you placed it
import DiagonalSprite from "./components/DiagonalSprite";
import RetroIntro from "./components/RetroIntro";

function App() {
  return (
    <>
      <RetroIntro />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DiagonalSprite>
                <Desktop className="flex-grow w-full" />
              </DiagonalSprite>
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
    </>
  );
}

export default App;
