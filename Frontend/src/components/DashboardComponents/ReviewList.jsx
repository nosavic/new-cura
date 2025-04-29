import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import styles from "../../styles/pharmacistprofile.module.css";

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
    <div className={styles.reviews}>
      <div className={styles.pharmReviewHeader}>
        <a href="/">My Profile</a>
        <a href="">Change Password</a>
        <a href="">Notification</a>
        <a href="">Reviews</a>
      </div>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <p>{review.text}</p>
          <div className={styles.stars}>{renderStars(review.stars)}</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
