import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useState } from "react";

// Components
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/forms/SignIn";
import Newsignup from "./components/forms/Newsignup";
import TransactionSuccess from "./pages/TransactionSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";
import OtpPage from "./pages/OtpPage";
import ProcessingPage from "./components/ProcessingPage";
import PaymentModal from "./components/PaymentModal";
import OrderSummary from "./pages/OrderSummary";
import ProfileSignup from "./pages/ProfileSignup";
import FindMedsLoading from "./components/FindMedsLoading";
import UpdatedCart from "./pages/UpdatedCart";
import PhamarcySignUp from "./components/forms/PhamarcySignUp";

// Code splitted Components (Lazy Loading)...
// N.B- Please do not touch if you're new to how lazy loading works..

const SignUp = lazy(() => import("./components/forms/SignUp"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const PharmacistProfile = lazy(() => import("./pages/PharmacistProfile"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const SearchpageSummary = lazy(() => import("./pages/SearchpageSummary"));
const PharmacySelection = lazy(() => import("./pages/PharmacySelection"));

function App() {
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [pharmacy, setPharmacy] = useState([]);
  return (
    <Suspense
      fallback={
        <section
          style={{
            display: "flex",
            flexDirection: "flex-row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "100vh",
            backgroundColor: "#FFF",
          }}
        >
          <p style={{ fontWeight: "bold", color: "#399b90" }}>
            Loading page...
          </p>
        </section>
      }
    >
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
        <Route path="/pharmacy-signup" element={<PhamarcySignUp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
