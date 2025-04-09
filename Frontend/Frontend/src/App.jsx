import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";

import FindMeds from "./pages/FindMeds";
import TransactionSuccess from "./pages/TransactionSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";

import ProcessingPage from "./components/ProcessingPage";
import PaymentModal from "./components/PaymentModal";

// import FindMeds from "./pages/FindMeds";
import SearchPage from "./pages/SearchPage";
import SearchpageSummary from "./pages/SearchpageSummary";
import { useState } from "react";
import ProfileSignup from "./pages/ProfileSignup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/findmeds" element={<FindMeds />} />
      <Route path="/transaction-success" element={<TransactionSuccess />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />

      <Route path="/processing" element={<ProcessingPage />} />

      <Route path="/payment-modal" element={<PaymentModal />} />
      <Route path="/dashboard" element={<Dashboard />} />

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

      <Route path="/complete-profile" element={<ProfileSignup />} />
    </Routes>
  );
}

export default App;
