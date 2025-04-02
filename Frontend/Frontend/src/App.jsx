import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
import FindMeds from "./pages/FindMeds";
import SearchPage from "./pages/SearchPage";
import SearchpageSummary from "./pages/SearchpageSummary";
import { useState } from "react";

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/findmeds"
        element={
          <SearchPage
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
      <Route path="/search-summary" element={<SearchpageSummary />} />
    </Routes>
  );
}

export default App;
