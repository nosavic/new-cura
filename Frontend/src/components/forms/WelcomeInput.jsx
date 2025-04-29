import React from "react";
import "../styles/welcomepage.css";

const WelcomeInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="input-container"
      id="emailForm"
      method="POST"
    >
      <input
        type="email"
        id="emailInput"
        name="email"
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="waitlist-btn">
        Join Waitlist
      </button>
    </form>
  );
};

export default WelcomeInput;
