import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
import ProcessingPage from "./components/ProcessingPage";
import PaymentModal from "./components/PaymentModal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path = "/processing" element = {<ProcessingPage/>}/>
      <Route path = "/paymentmodal" element = {<PaymentModal/>}/>
      <Route path = "/paymentmodal" element = { <PaymentModal/>}/>
    </Routes>
  ); 
}

export default App;
