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
          <Route path="/files" element={<Files />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
