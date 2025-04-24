import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import avatar from "/src/assets/Avatar.svg";

const renderStars = (rating) => {
  return (
    <div className="stars">
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
    <div className="pharm-profile-card">
      <img src={avatar} alt="Pharm Daniel" className="pharm-picture" />
      <h3>Pharm. Daniel Okoh</h3>
      <button>Edit Profile</button>
      <p>146 Rates</p>
      {renderStars(rating)}
    </div>
  );
};

export default ProfileCard;
