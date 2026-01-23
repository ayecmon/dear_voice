import "./App.css";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PolicePage } from "./pages/PolicePage";
import { MedicalEmergencyPage } from "./pages/MedicalEmergencyPage";
import { ImmigrationPage } from "./pages/ImmigrationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/police" element={<PolicePage />} />
      <Route path="/medical" element={<MedicalEmergencyPage/>}/>
      <Route path="/immigration" element={<ImmigrationPage/>} />
    </Routes>
  );
}

export default App;
