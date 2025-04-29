// src/components/PharmacyList.jsx
import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PharmacyCard from "../components/PharmacyCard";
import { pharmacies } from "../script/medicine";
import styles from "../styles/PharmacySelection.module.css";

function PharmacySelection() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const selectedMedicines = useMemo(
    () => state?.selectedMedicines || [],
    [state]
  );

  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!selectedMedicines.length) {
      navigate("/findmeds", { state: { selectedMedicines } });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  }, [navigate, selectedMedicines]);

  useEffect(() => {}, [loading, selectedMedicines]);

  const calculateDistance = (pharmacy) => {
    if (!userLocation) return Infinity;

    const dx = pharmacy.location.lat - userLocation.lat;
    const dy = pharmacy.location.lng - userLocation.lng;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const sortedPharmacies = [...pharmacies].sort(
    (a, b) => calculateDistance(a) - calculateDistance(b)
  );

  console.log("Pharmacies:", pharmacies);
  console.log("Selected Medicines:", selectedMedicines);

  if (loading) {
    return <div className={styles.loading}>Loading nearby pharmacies...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Nearby Pharmacies</h1>
        <button
          onClick={() =>
            navigate("/findmeds", { state: { selectedMedicines } })
          }
          className={styles.backButton}
        >
          ← Back to Selection
        </button>
      </div>

      <div className={styles.pharmacyList}>
        {sortedPharmacies.map((pharmacy) => (
          <PharmacyCard
            key={pharmacy.id}
            pharmacy={pharmacy}
            selectedMedicines={selectedMedicines}
            distance={calculateDistance(pharmacy)}
          />
        ))}
      </div>
    </div>
  );
}

export default PharmacySelection;
