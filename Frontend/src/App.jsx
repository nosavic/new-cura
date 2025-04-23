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
<<<<<<< HEAD
import PharmacyList from "./pages/PharmacyList";
=======
import FindMedsLoading from "./components/FindMedsLoading";
import PharamacySelection from "./pages/PharmacySelection";
>>>>>>> upstream/development

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  return (
    <Routes>
      {/* Patients Routing */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup-phone" element={<Newsignup />} />
      <Route path="/signup-email" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

<<<<<<< HEAD
      <Route path="/transactionsuccess" element={<TransactionSuccess />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/otppage" element={<OtpPage />} />

      <Route path="/processing" element={<ProcessingPage />} />

      <Route path="/paymentmodal" element={<PaymentModal />} />
      <Route path="/dashboard" element={<Dashboard />} />
=======
      <Route path="/transaction-success" element={<TransactionSuccess />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/otp-page" element={<OtpPage />} />

      <Route path="/processing" element={<ProcessingPage />} />

      <Route path="/payment-modal" element={<PaymentModal />} />
>>>>>>> upstream/development

      <Route
        path="/findmeds"
        element={
          <SearchPage
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />

<<<<<<< HEAD
=======
      <Route path="/findmeds-loading" element={<FindMedsLoading />} />

      <Route path="/pharmacy-selection" element={<PharamacySelection />} />

>>>>>>> upstream/development
      <Route
        path="/search-summary"
        element={
          <SearchpageSummary
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
<<<<<<< HEAD
      <Route
        path="/pharmacyselection"
        element={
          <PharmacyList
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
      <Route path="/updatedcart" element={<UpdatedCart />} />
=======

      <Route path="/order-summary" element={<OrderSummary />} />
>>>>>>> upstream/development

      <Route path="/complete-profile" element={<ProfileSignup />} />

      {/* Pharmacy Routing */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
