// src/components/SearchPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { medicines } from "../script/medicine";
import MedicineCard from "../components/MedicineCard";
import SearchpageSummary from "./SearchpageSummary";
import "../styles/searchpage.css";
import brandlogo from "../assets/brandlogo.svg";
import avatar from "../assets/Avatar.svg";

const SearchPage = ({ selectedMedicines, setSelectedMedicines }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }
    // Filter medicines based on the search term
    // and set the suggestions state
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchTerm]);

  const handleSelectMedicine = (medicine) => {
    // Check if medicine is already selected
    const isAlreadySelected = selectedMedicines.some(
      (item) => item.id === medicine.id
    );

    if (!isAlreadySelected) {
      setSelectedMedicines((prev) => [
        ...prev,
        {
          ...medicine,
          selectedDosage: medicine.dosages[0],
          selectedPackageSize: medicine.packageSizes[0],
          quantity: 1,
        },
      ]);
    }

    setSearchTerm("");
    setSuggestions([]);
  };

  const handleRemoveMedicine = (id) => {
    setSelectedMedicines((prev) =>
      prev.filter((medicine) => medicine.id !== id)
    );
  };

  const handleDosageChange = (id, dosage) => {
    setSelectedMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === id ? { ...medicine, selectedDosage: dosage } : medicine
      )
    );
  };

  const handlePackageSizeChange = (id, size) => {
    setSelectedMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === id
          ? { ...medicine, selectedPackageSize: size }
          : medicine
      )
    );
  };

  const handleQuantityChange = (id, quantity) => {
    const qty = Math.max(1, parseInt(quantity) || 1);
    setSelectedMedicines((prev) =>
      prev.map((medicine) =>
        medicine.id === id ? { ...medicine, quantity: qty } : medicine
      )
    );
  };

  const handleSubmit = () => {
    if (selectedMedicines.length === 0) {
      alert("Please select at least one medicine");
      return;
    }

    const submissionData = selectedMedicines.map((medicine) => {
      const calculatedPrice =
        medicine.prices[medicine.selectedDosage][medicine.selectedPackageSize] *
        medicine.quantity;
      return {
        id: medicine.id,
        name: medicine.name,
        description: medicine.description,
        dosage: medicine.selectedDosage,
        packageSize: medicine.selectedPackageSize,
        quantity: medicine.quantity,
        price: calculatedPrice,
        prescription: medicine.prescription || false,
      };
    });

    // Log the data (optional)
    console.log("Submitting medicine data:", submissionData);

    // Navigate to the SearchpageSummary with the selected medicines and medicine count as state
    navigate("/search-summary", {
      state: {
        selectedMedicines: submissionData,
        medicineCount: selectedMedicines.length,
      },
    });
  };

  const handleManualSearch = () => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <img className="brandlogo" src={brandlogo} alt="brandlogo" />
        <img className="avatar" src={avatar} alt="avatar" />
      </div>
      <div className="search-container">
        <div className="search-input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={(e) => e.key === "Enter" && handleManualSearch()}
            placeholder="Search for medicine..."
            className="search-input"
          />
          <button className="search-input-btn" onClick={handleManualSearch}>
            +
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((medicine) => (
              <li
                key={medicine.id}
                onClick={() => handleSelectMedicine(medicine)}
                className="suggestion-item"
              >
                {medicine.name} - {medicine.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="selected-medicines">
        {selectedMedicines.map((medicine) => (
          <MedicineCard
            key={medicine.id}
            medicine={medicine}
            onRemove={handleRemoveMedicine}
            onDosageChange={handleDosageChange}
            onPackageSizeChange={handlePackageSizeChange}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <footer className="submit-section">
        <button
          onClick={handleSubmit}
          className="submit-btn"
          disabled={selectedMedicines.length === 0}
        >
          Find ({selectedMedicines.length}) Med
        </button>
      </footer>
    </div>
  );
};

export default SearchPage;
