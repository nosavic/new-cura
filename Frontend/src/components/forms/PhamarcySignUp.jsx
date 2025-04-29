import React from "react";
import "../../styles/pharmacysignup.css";
import caretleft from "../../assets/CaretLeft.png";
import cancelicon from "../../assets/X.png"
const PhamarcySignUp = () => {
  return (
    <div className="pharmacy-signup-container">
        <div className="direction-header">
            <img src={caretleft} alt="caretleft" />
            <img src={cancelicon} alt="caretleft" />
        </div>
      <form>
        <label htmlFor="email">
          <input type="email" />
        </label>
        <label htmlFor="password">
          <input type="password" />
        </label>

        <label htmlFor="OTP">
          <input
            type="text"
            pattern="[0-9]"
            inputMode="numeric"
            maxLength="6"
          />
        </label>
        <button>Sign Up</button>
      </form>
      <div className="redirect-link">
        {" "}
        <p>Already have An Account</p>
        <a href="">Login in</a>
      </div>
    </div>
  );
};

export default PhamarcySignUp;
