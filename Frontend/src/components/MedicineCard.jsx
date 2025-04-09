import trash from "../assets/trash.png";

// src/components/MedicineCard.jsx
const MedicineCard = ({
  medicine,
  onRemove,
  onDosageChange,
  onPackageSizeChange,
  onQuantityChange,
}) => {
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
          <div className="option-group">
            <label>Dosage:</label>
            <select
              value={medicine.selectedDosage}
              onChange={(e) => onDosageChange(medicine.id, e.target.value)}
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
              onChange={(e) => onPackageSizeChange(medicine.id, e.target.value)}
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
              <button className="quantity-btn" onClick={handleDecrement}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={medicine.quantity}
                onChange={(e) =>
                  onQuantityChange(medicine.id, parseInt(e.target.value) || 1)
                }
                className="quantity-input"
              />
              <button className="quantity-btn" onClick={handleIncrement}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="trash"
        src={trash}
        alt=""
        onClick={() => onRemove(medicine.id)}
      />
    </div>
  );
};

export default MedicineCard;
