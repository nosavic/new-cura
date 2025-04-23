import { useLocation, useNavigate } from "react-router-dom";
import "../styles/order-summary.css";
import brandlogo from "../assets/brandlogo.svg";

const OrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selectedMedicines = state?.selectedMedicines || [];
  const pharmacy = state?.pharmacy || []; // Default value if not provided

  // Calculate medicine count
  const medicineCount = selectedMedicines.length;

  // Calculate total price

  const backToSelection = () =>
    navigate("/findmeds", { state: { selectedMedicines } });
  const proceedToCheckout = () =>
    navigate("/payment-modal", { state: { selectedMedicines, pharmacy } });

  const subtotal = selectedMedicines.reduce((acc, medicine) => {
    const { price, quantity } = medicine;
    const calculatedPrice = Number(price) * Number(quantity);

    const totalMedicinePrice = calculatedPrice * (quantity || 1);
    return acc + totalMedicinePrice;
  }, 0);

  const tax = 1500;

  const total = subtotal + tax;

  // Check if any prescription medicines are selected

  return (
    <div className="shopping-cart">
      <div className="search-header">
        <img className="brandlogo" src={brandlogo} alt="brandlogo" />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for medicine..."
            className="search-input"
          />
        </div>
        <div className="cart-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cart-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="cart-count">{medicineCount}</span>
        </div>
      </div>

      <div className="cart-text">
        <div className="cart-text-1">
          <p>Cart</p>
          <p>Checkout</p>
        </div>
        <p className="secure">100% Secure</p>
      </div>
      <div className="cont-shopping" onClick={backToSelection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>

        <button onClick={backToSelection} className="cont-btn">
          Back to Selection
        </button>
      </div>

      <h2>Your Cart</h2>
      <p>You have {medicineCount} item(s) in your cart</p>
      <div className="cart-container">
        <div className="medicine-list">
          {selectedMedicines.length > 0 ? (
            selectedMedicines.map((medicine) => {
              const { price, quantity } = medicine;
              const calculatedPrice = Number(price) * Number(quantity);
              return (
                <div key={medicine.id} className="cart-medicine-card">
                  <div className="medicine-info">
                    <div className="medicine-name">
                      <h3>{medicine.name}</h3>
                      <span className="medicine-price">₦{calculatedPrice}</span>
                    </div>
                    <p className="medicine-description">
                      {medicine.description}
                    </p>
                    <div className="medicine-details">
                      <span>{medicine.dosage}</span>
                      <span>{medicine.packageSize}</span>
                      <span>Quantity: {medicine.quantity}</span>
                    </div>
                    {medicine.prescription ? (
                      <div className="medicine-prescription">
                        <p>Upload prescription</p>
                        <p>Upload prescription: (Png, pdf, Jpg, jpeg)</p>
                        <input type="file" className="prescription-input" />
                      </div>
                    ) : (
                      <div className="medicine-prescription">
                        {" "}
                        <p>No prescription required</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        <div className="order-total-section">
          <h3>Order Total</h3>
          <div className="summary-details">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>₦{tax.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="order-actions">
            <button
              onClick={proceedToCheckout}
              className="checkout-btn"
              disabled={medicineCount === 0}
            >
              Get Meds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
