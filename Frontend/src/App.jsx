import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";

import FindMeds from "./pages/FindMeds";
<<<<<<< HEAD:Frontend/Frontend/src/App.jsx
=======
import TransactionSuccess from "./pages/TransactionSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";

import ProcessingPage from "./components/ProcessingPage";
import PaymentModal from "./components/PaymentModal";

// import FindMeds from "./pages/FindMeds";
>>>>>>> upstream/development:Frontend/src/App.jsx
import SearchPage from "./pages/SearchPage";
import SearchpageSummary from "./pages/SearchpageSummary";
import UpdatedCart from "./pages/UpdatedCart";
import { useState } from "react";
<<<<<<< HEAD:Frontend/Frontend/src/App.jsx
=======
import ProfileSignup from "./pages/ProfileSignup";
>>>>>>> upstream/development:Frontend/src/App.jsx

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  // const [currentPrice, setCurrentPrice] = useState(
  //   medicine.prices[medicine.selectedDosage][medicine.selectedPackageSize]
  // );
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
<<<<<<< HEAD:Frontend/Frontend/src/App.jsx
=======

      <Route path="/findmeds" element={<FindMeds />} />
      <Route path="/transactionsuccess" element={<TransactionSuccess />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />

      <Route path="/processing" element={<ProcessingPage />} />

      <Route path="/paymentmodal" element={<PaymentModal />} />

>>>>>>> upstream/development:Frontend/src/App.jsx
      <Route
        path="/findmeds"
        element={
          <SearchPage
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
<<<<<<< HEAD:Frontend/Frontend/src/App.jsx
      <Route
        path="/search-summary"
        element={
          <SearchpageSummary
            selectedMedicines={selectedMedicines}
            setSelectedMedicines={setSelectedMedicines}
          />
        }
      />
      <Route path="/updatedcart" element={<UpdatedCart />} />
=======
      <Route path="/search-summary" element={<SearchpageSummary />} />
      <Route path="/complete-profile" element={<ProfileSignup />} />
>>>>>>> upstream/development:Frontend/src/App.jsx
    </Routes>
  );
}

export default App;
