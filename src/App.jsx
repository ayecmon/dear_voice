import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PolicePage } from "./pages/PolicePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/police" element={<PolicePage />} />
    </Routes>
  );
}

export default App;
