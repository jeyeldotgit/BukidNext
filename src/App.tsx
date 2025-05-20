import { Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import LearningPage from "./pages/core/LearningPage";
import BalitaPage from "./pages/core/Balita";
import PresyoNgPananim from "./pages/core/PresyoNgPananim";
import KalendaryoPage from "./pages/core/Kalendaryo";
import Profile from "./pages/auth/Profile";

import ProtectedRoute from "./components/core/General/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Authenticated Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Core Prototype Features */}

      <Route
        path="/matuto"
        element={
          <ProtectedRoute>
            <LearningPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/balita"
        element={
          <ProtectedRoute>
            <BalitaPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/presyo"
        element={
          <ProtectedRoute>
            <PresyoNgPananim />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kalendaryo"
        element={
          <ProtectedRoute>
            <KalendaryoPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
