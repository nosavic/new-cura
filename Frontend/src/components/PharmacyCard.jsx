// src/components/PharmacyCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/PharmacyCard.module.css';

function PharmacyCard({ pharmacy, selectedMedicines, distance }) {
  const [status, setStatus] = useState('pending');
  const navigate = useNavigate();

  const handleAction = (action) => {
    setStatus(action);
    if (action === 'accepted') {
      navigate('/confirmation', {
        state: {
          pharmacy,
          selectedMedicines
        }
      });
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.info}>
          <h2>{pharmacy.name}</h2>
          <p className={styles.address}>{pharmacy.address}</p>
          <p className={styles.distance}>
            {distance < Infinity 
              ? `${(distance * 100).toFixed(1)} km away`
              : 'Distance unavailable'
            }
          </p>
        </div>
        <div className={styles.status}>
          <p className={pharmacy.isOpen ? styles.open : styles.closed}>
            {pharmacy.isOpen ? 'Open Now' : 'Closed'}
          </p>
          <p className={styles.hours}>{pharmacy.hours}</p>
        </div>
      </div>

      <div className={styles.medicineList}>
        <h3>Selected Medicines:</h3>
        {selectedMedicines.map((medicine) => (
          <div key={medicine.id} className={styles.medicineItem}>
            <span>{medicine.name}</span>
            <span>${medicine.price.toFixed(2)}</span>
          </div>
        ))}
        <div className={styles.total}>
          Total: ${selectedMedicines.reduce((sum, med) => sum + med.price, 0).toFixed(2)}
        </div>
      </div>

      {status === 'pending' ? (
        <div className={styles.actions}>
          <button
            onClick={() => handleAction('accepted')}
            className={styles.acceptButton}
          >
            Accept
          </button>
          <button
            onClick={() => handleAction('cancelled')}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className={`${styles.statusMessage} ${
          status === 'accepted' ? styles.statusAccepted : styles.statusCancelled
        }`}>
          {status === 'accepted' ? 'Order Accepted' : 'Order Cancelled'}
        </div>
      )}
    </div>
  );
}

export default PharmacyCard;