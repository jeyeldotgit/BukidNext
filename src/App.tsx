import { Routes, Route } from "react-router-dom";

//Pages
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
