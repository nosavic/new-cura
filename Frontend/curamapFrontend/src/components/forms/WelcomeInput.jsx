import React from "react";
import "../App.css";
const WelcomeInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      <form
        onClick={handleSubmit}
        className="input-container"
        id="emailForm"
        action="#"
        method="POST"
      >
        <label htmlFor="emailInput"></label>
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
    </>
  );
};

export default WelcomeInput;
