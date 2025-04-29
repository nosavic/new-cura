import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ProcessingPage.css";

const FindMedsLoading = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const selectedMedicines = useMemo(
    () => state?.selectedMedicines || [],
    [state]
  );

  useEffect(() => {
    // Set a timeout to navigate after 5 seconds
    const timer = setTimeout(() => {
      navigate("/pharmacy-selection", { state: { selectedMedicines } }); // Replace '/next-page' with your target route
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="container">
      <div className="card">
        <div className="spinner"></div>
        <p>Finding Pharmacies, please wait.</p>
      </div>
    </div>
  );
};

export default FindMedsLoading;
