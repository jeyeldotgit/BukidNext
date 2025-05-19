import { Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import LearningPage from "./pages/core/LearningPage";
import BalitaPage from "./pages/core/Balita";
import PresyoNgPananim from "./pages/core/PresyoNgPananim";
import KalendaryoPage from "./pages/core/Kalendaryo";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Authenticated Routes */}
      <Route path="/matuto" element={<LearningPage />} />
      <Route path="/balita" element={<BalitaPage />} />
      <Route path="/presyo" element={<PresyoNgPananim />} />
      <Route path="/kalendaryo" element={<KalendaryoPage />} />
    </Routes>
  );
};

export default App;
