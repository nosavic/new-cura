import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/searchsummary.css";
import OrderSummary from "./OrderSummary";

const SearchpageSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { medicineCount = 0, selectedMedicines = [] } = location.state || {};

  // Check if any prescription medicines are selected
  const hasPrescriptionItems = selectedMedicines.some(
    (medicine) => medicine.prescription
  );

  const viewShoppingCart = () => {
    navigate("/findmeds", { state: { selectedMedicines } });
  };

  return (
    <div className="summary-container">
      <div className="searchpage-summary">
        <p>You've added {medicineCount} medicine(s) to your cart</p>

        {/* Optional: Show list of medicines */}
        {selectedMedicines.length > 0 && (
          <div className="medicine-list">
            <h3>Selected Medicines:</h3>
            <ul className="summary-list">
              {selectedMedicines.map((medicine) => {
                const { price, quantity } = medicine;
                const calculatedPrice = Number(price) * Number(quantity);

                return (
                  <li key={medicine.id}>
                    {medicine.name} - {medicine.dosage} - {medicine.packageSize}{" "}
                    - {medicine.quantity} - ₦{calculatedPrice}
                    {medicine.prescription && (
                      <span className="rx-badge">Rx</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="summary-actions">
          <button
            onClick={viewShoppingCart}
            className="summary-btn view-cart-btn"
          >
            View Shopping Cart
          </button>

          <button
            onClick={() =>
              navigate("/findmeds-loading", { state: { selectedMedicines } })
            }
            disabled={selectedMedicines.length === 0}
            className="summary-btn continue-btn"
          >
            Continue Shopping
          </button>
        </div>
        {/* Prescription warning message */}
        {hasPrescriptionItems && (
          <div className="prescription-warning">
            <p className="prescription-warning-text">
              ⚠ You have prescription items in your cart.
            </p>
            <p className="prescription-text">
              {" "}
              A valid prescription should contain:
            </p>
            <ul className="prescription-list">
              <li>Date of prescription</li>
              <li>Patients details</li>
              <li>Dosage</li>
            </ul>
            <p className="prescription-sample">See Sample</p>
            <p className="prescription-text">
              Prescription can be provided and verified at pickup of the
              medicine in question.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchpageSummary;
