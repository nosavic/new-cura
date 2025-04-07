import { useLocation, useNavigate } from "react-router-dom";
import "../styles/updatedcart.css";

const UpdatedCart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selectedMedicines = state?.selectedMedicines || [];

  // Calculate medicine count
  const medicineCount = selectedMedicines.length;

  // Calculate total price
  const calculateTotal = () => {
    return selectedMedicines.reduce((total, medicine) => {
      const price =
        medicine.prices?.[medicine.dosage]?.[medicine.packageSize] || 0;
      const quantity = medicine.quantity || 0;
      return total + price * quantity;
    }, 0);
  };

  const subtotal = calculateTotal();
  const shipping = 1500;
  const total = subtotal + shipping;

  const continueShopping = () => navigate("/findmeds");
  const proceedToCheckout = () => navigate("/checkout");

  const proceedToSummary = () => {
    const updatedMedicines = selectedMedicines.map((medicine) => {
      const normalizedDosage = medicine.dosage?.trim().toLowerCase();
      const normalizedPackageSize = medicine.packageSize?.trim().toLowerCase();
      const price =
        medicine.prices?.[normalizedDosage]?.[normalizedPackageSize] || 0;

      return {
        ...medicine,
        calculatedPrice: price * medicine.quantity,
      };
    });

    navigate("/searchpagesummary", {
      state: { selectedMedicines: updatedMedicines, medicineCount },
    });
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <p>You've added {medicineCount} medicine(s) to your cart</p>
      <div className="cart-container">
        <div className="medicine-list">
          {selectedMedicines.length > 0 ? (
            selectedMedicines.map((medicine) => {
              // Normalize dosage and package size keys
              const normalizedDosage = medicine.dosage?.trim().toLowerCase();
              const normalizedPackageSize = medicine.packageSize
                ?.trim()
                .toLowerCase();

              // Debugging logs
              console.log("Medicine Object:", medicine);
              console.log("Prices Object:", medicine.prices);
              console.log("Normalized Dosage:", normalizedDosage);
              console.log("Normalized Package Size:", normalizedPackageSize);

              // Access price with normalized keys
              const price =
                medicine.prices?.[normalizedDosage]?.[normalizedPackageSize] ||
                0;

              if (
                !medicine.prices?.[normalizedDosage]?.[normalizedPackageSize]
              ) {
                console.warn(
                  `Price not found for dosage: ${medicine.dosage}, package size: ${medicine.packageSize}`
                );
              }

              console.log("Calculated Price:", price);

              return (
                <div key={medicine.id} className="cart-medicine-card">
                  <div className="medicine-info">
                    <h3>{medicine.name}</h3>
                    <p>{medicine.description}</p>
                    <div className="medicine-details">
                      <span>Dosage: {medicine.dosage}</span>
                      <span>Package: {medicine.packageSize}</span>
                      <span>Quantity: {medicine.quantity}</span>
                      <span>₦{(price * medicine.quantity).toFixed(2)}</span>
                    </div>
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
              <span>Shipping:</span>
              <span>₦{shipping.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
          </div>
          <div className="order-actions">
            <button onClick={continueShopping} className="continue-btn">
              Continue Shopping
            </button>
            <button
              onClick={proceedToCheckout}
              className="checkout-btn"
              disabled={medicineCount === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedCart;
