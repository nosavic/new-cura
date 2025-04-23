import React from "react";
import "../../styles/signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handlePhone = () => {
    navigate("/signup-phone");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleProfile = () => {
    navigate("/complete-profile");
  };

  return (
    <>
      <section className="signup-wrapper">
        <section className="signup-container">
          <div className="action-btn">
            <div className="return">
              <a href="/">
                <img src="/src/assets/CaretLeft.png" alt="A left arrow icon" />
              </a>
            </div>
          </div>
          <h3 className="title">Sign Up</h3>
          <form>
            <fieldset>
              <legend>When is your birthday?</legend>
              <div className="dob">
                <input
                  type="number"
                  id="dayInput"
                  name="day"
                  min="1"
                  max="31"
                  placeholder="Day"
                />
                <select id="monthInput" name="month">
                  <option value="" selected disabled>
                    Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <input
                  type="number"
                  id="yearInput"
                  name="year"
                  min="1900"
                  max="2100"
                  placeholder="Year"
                />
              </div>
              <p className="undertext">
                Your birthday won't be shown publicly.
              </p>
            </fieldset>
            <div className="email-tag">
              <label htmlFor="email">Email</label>
              <p onClick={handlePhone}>Sign up with Phone</p>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <input
              type="number"
              id="otp"
              name="otp"
              placeholder="Enter 6 digit code"
            />
            <button type="submit" onClick={handleProfile}>
              Next
            </button>
          </form>
          <p className="login-text">
            Already have an account? <span onClick={handleLogin}>Log in</span>
          </p>
        </section>
      </section>
    </>
  );
};

export default SignUp;
