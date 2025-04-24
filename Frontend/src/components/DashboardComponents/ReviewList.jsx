import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    text: "Pharm Daniel takes the time to explain potential side effects and checks in regularly to ensure everything is going smoothly. The communication through Curamap is seamless, and it really feels like they go the extra mile to make healthcare more personal and supportive",
    stars: 5,
  },
  {
    text: "If you're looking for a pharmacist who is knowledgeable, compassionate, and tech-savvy, I highly recommend Pharm. Daniel through Curamap",
    stars: 4,
  },
  {
    text: "I love how Pharm. Daniel attends to patients with care.",
    stars: 3,
  },
];

const renderStars = (count) => {
  return (
    <>
      {[...Array(5)].map((_, i) =>
        i < count ? (
          <FaStar key={i} color="#f5a623" />
        ) : (
          <FaRegStar key={i} color="#ccc" />
        )
      )}
    </>
  );
};

const ReviewList = () => {
  return (
    <div className="pharm-reviews-section">
      <div className="pharm-profile-tabs">
        <button className="pharm-active">My Profile</button>
        <button>Change Password</button>
        <button>Notification</button>
        <button>Reviews</button>
      </div>
      {reviews.map((review, index) => (
        <div key={index} className="pharm-review-card">
          <p>{review.text}</p>
          <div className="pharm-stars">{renderStars(review.stars)}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
