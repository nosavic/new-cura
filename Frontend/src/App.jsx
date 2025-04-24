import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";
import Newsignup from "./components/forms/Newsignup";

import TransactionSuccess from "./pages/TransactionSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";
import OtpPage from "./pages/OtpPage";

import ProcessingPage from "./components/ProcessingPage";
import PaymentModal from "./components/PaymentModal";

import SearchPage from "./pages/SearchPage";
import SearchpageSummary from "./pages/SearchpageSummary";
import OrderSummary from "./pages/OrderSummary";
import { useState } from "react";
import ProfileSignup from "./pages/ProfileSignup";
import Dashboard from "./pages/Dashboard";
import PharmacistProfile from "./pages/PharmacistProfile";
import FindMedsLoading from "./components/FindMedsLoading";
import PharmacySelection from "./pages/PharmacySelection";
import UpdatedCart from "./pages/UpdatedCart";

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  return (
    <Routes>
      {/* Patients Routing */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup-phone" element={<Newsignup />} />
      <Route path="/signup-email" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/transaction-success" element={<TransactionSuccess />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/otp-page" element={<OtpPage />} />

      <Route path="/processing" element={<ProcessingPage />} />

      <Route path="/payment-modal" element={<PaymentModal />} />

      <Route
        path="/findmeds"
        element={
          <SearchPage
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
      <Route
        path="/search-summary"
        element={
          <SearchpageSummary
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />

      <Route path="/findmeds-loading" element={<FindMedsLoading />} />

      <Route
        path="/pharmacy-selection"
        element={
          <PharmacySelection
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
            pharmacy={pharmacy}
            setPharmacy={setPharmacy}
          />
        }
      />

      <Route
        path="/updated-cart"
        element={
          <UpdatedCart
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
            pharmacy={pharmacy}
            setPharmacy={setPharmacy}
          />
        }
      />

      <Route
        path="/order-summary"
        element={
          <OrderSummary
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
            pharmacy={pharmacy}
            setPharmacy={setPharmacy}
          />
        }
      />

      <Route path="/complete-profile" element={<ProfileSignup />} />

      {/* Pharmacy Routing */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pharmacist-profile" element={<PharmacistProfile />} />

    </Routes>
  );
}

export default App;
