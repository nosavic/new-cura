import React, { useState } from "react";
import X from "../../assets/X.png";
import back from "../../assets/CaretLeft.png";
import "../../styles/newsignup.css";

const Newsignup = () => {
  const [date, setDate] = useState({
    month: "",
    day: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, "");

    setDate((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };
  return (
    <div className="main">
      <section>
        <div className="white">
          <div className="backX">
            <img src={back} alt="go back" />
            <img src={X} alt="close" />
          </div>
          <div className="signup">
            <h1 className="title">Sign Up</h1>
            <form>
              <div className="birthday-input">
                <p>When is your date of birth?</p>
                <div className="date-inputs">
                  <input
                    className="dob"
                    type="text"
                    id="month"
                    name="month"
                    placeholder="Month"
                    value={date.month}
                    onChange={handleChange}
                    maxLength={2}
                    pattern="(0[1-9]|1[0-2])"
                    min={1}
                    max={12}
                    required
                  />
                  <input
                    className="dob"
                    type="text"
                    id="day"
                    name="day"
                    placeholder="Day"
                    value={date.day}
                    onChange={handleChange}
                    maxLength={2}
                    pattern="(0[1-9]|[12][0-9]|3[01])"
                    title="Day (01-31)"
                    min={1}
                    max={31}
                    required
                  />
                  <input
                    className="dob"
                    type="text"
                    id="year"
                    name="year"
                    placeholder="Year"
                    value={date.year}
                    onChange={handleChange}
                    maxLength={4}
                    pattern="(19|20)\d{2}"
                    title="Year (1900-2099)"
                    min={1900}
                    max={2099}
                    required
                  />
                </div>
                <p className="disclaimer">
                  Your birthday won't be shown publicly.
                </p>
              </div>
              {/* input for phone number */}
              <div className="signup-methods">
                <p className="phone">Phone</p>
                <p className="email">Sign up with email</p>
              </div>
              <div className="phone-input">
                <span>+234</span>
                <input type="tel" placeholder="801 234 5678" required />
              </div>
              {/* input for confirmation code */}
              <div className="code-input">
                <input type="text" placeholder="Enter 6 digit code" required />
                <button>Send code</button>
              </div>
              {/* code for button */}
              <button className="button" type="submit">
                Next
              </button>
              <footer>
                <p>
                  Already have an account? <span className="login">Log in</span>
                </p>
              </footer>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsignup;
