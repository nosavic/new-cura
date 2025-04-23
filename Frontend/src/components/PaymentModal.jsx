// import React from "react";
import React, { useState } from "react";
import "../styles/paymentmodal.css";
import { FaHospital, FaMoneyBillWave, FaLock } from "react-icons/fa";

const PaymentModal = () => {
  const [selectedMethod, setSelectedMethod] = useState("pharmacy");

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Update payment method</h2>
        <p className="amount">Pay 40,000</p>

        <div className="payment-options">
          <label
            className={`payment-option ${
              selectedMethod === "pharmacy" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="pharmacy"
              checked={selectedMethod === "pharmacy"}
              onChange={() => setSelectedMethod("pharmacy")}
            />
            <span>
              {" "}
              <FaHospital /> Pay at Pharmacy
            </span>
            <div className="actions">
              <a href="#">Set as default</a>
              <a href="#">Edit</a>
            </div>
          </label>

          <label
            className={`payment-option ${
              selectedMethod === "transfer" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="payment"
              value="transfer"
              checked={selectedMethod === "transfer"}
              onChange={() => setSelectedMethod("transfer")}
            />
            <span>
              {" "}
              <FaMoneyBillWave /> Pay with Transfer
            </span>
            <div className="actions">
              <a href="#">Set as default</a>
              <a href="#">Edit</a>
            </div>
          </label>
        </div>

        {/* Buttons */}
        <div className="modal-buttons">
          <button className="cancel">Cancel Payment</button>
          <button className="confirm">Confirm </button>
        </div>

        {/* Security Info */}
        <p className="secured">
          {" "}
          <FaLock />{" "}
          <span>
            {" "}
            Secured by <strong> paystack</strong>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
