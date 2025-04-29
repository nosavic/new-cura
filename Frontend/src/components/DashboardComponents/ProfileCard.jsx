import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import avatar from "/src/assets/Avatar.svg";
import styles from "../../styles/pharmacistprofile.module.css";

const renderStars = (rating) => {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <FaStar key={i} color="#f5a623" />
        ) : (
          <FaRegStar key={i} color="#ccc" />
        )
      )}
    </div>
  );
};

const ProfileCard = () => {
  const rating = 5;
  return (
    <div className={styles.profileCard}>
      <div className={styles.pharmAvatar}>
        <img src={avatar} alt="Pharm Daniel"  />
      </div>
      <h3>Pharm. Daniel Okoh</h3>
      <button>Edit Profile</button>
      <p>146 Rates</p>
      <p>{renderStars(rating)}</p>
    </div>
  );
};

export default ProfileCard;
