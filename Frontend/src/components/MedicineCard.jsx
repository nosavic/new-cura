import trash from "../assets/trash.png";
import { useState } from "react";

const MedicineCard = ({
  medicine,
  onRemove,
  onDosageChange,
  onPackageSizeChange,
  onQuantityChange,
}) => {
  const [currentPrice, setCurrentPrice] = useState(
    medicine.prices[medicine.selectedDosage][medicine.selectedPackageSize]
  );

  const handleDosageChange = (e) => {
    const newDosage = e.target.value;
    onDosageChange(medicine.id, newDosage);
    updatePrice(newDosage, medicine.selectedPackageSize);
  };

  const handlePackageSizeChange = (e) => {
    const newPackageSize = e.target.value;
    onPackageSizeChange(medicine.id, newPackageSize);
    updatePrice(medicine.selectedDosage, newPackageSize);
  };

  const updatePrice = (dosage, packageSize) => {
    setCurrentPrice(medicine.prices[dosage][packageSize]);
  };

  const handleIncrement = () => {
    onQuantityChange(medicine.id, medicine.quantity + 1);
  };

  const handleDecrement = () => {
    if (medicine.quantity > 1) {
      onQuantityChange(medicine.id, medicine.quantity - 1);
    }
  };

  return (
    <div className="medicine-card">
      <div className="medicine-info">
        <h3 className="medicine-name">{medicine.name}</h3>
        <p className="medicine-description">{medicine.description}</p>
        <div className="medicine-options">
          <div className="item-total">
            Total: ₦{currentPrice * medicine.quantity}
          </div>

          <div className="option-group">
            <label>Dosage:</label>
            <select
              value={medicine.selectedDosage}
              onChange={handleDosageChange}
            >
              {medicine.dosages.map((dosage) => (
                <option key={dosage} value={dosage}>
                  {dosage}
                </option>
              ))}
            </select>
          </div>

          <div className="option-group">
            <label>Package Size:</label>
            <select
              value={medicine.selectedPackageSize}
              onChange={handlePackageSizeChange}
            >
              {medicine.packageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="option-group">
            <label>Quantity:</label>
            <div className="quantity-control">
              <button
                className="quantity-btn"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={medicine.quantity}
                onChange={(e) =>
                  onQuantityChange(
                    medicine.id,
                    Math.max(1, parseInt(e.target.value) || 1)
                  )
                }
                className="quantity-input"
                aria-label="Quantity input"
              />
              <button
                className="quantity-btn"
                onClick={handleIncrement}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="trash"
        src={trash}
        alt="Remove medicine"
        onClick={() => onRemove(medicine.id)}
      />
    </div>
  );
};

export default MedicineCard;
