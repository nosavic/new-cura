import React, { useState } from "react";
import X from "../../assets/X.png";
import back from "../../assets/CaretLeft.png";
import styles from "../../styles/newsignup.module.css";
import { useNavigate } from "react-router-dom";

const Newsignup = () => {
  const navigate = useNavigate();

  const handleEmail = () => {
    navigate("/signup-email");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  const [date, setDate] = useState({
    month: "",
    day: "",
    year: "",
  });

  const [phone, setPhone] = useState("");
  // const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, "");

    setDate((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // const handleCodeChange = (e) => {
  //   setCode(e.target.value);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      dateOfBirth: `${date.year}-${date.month}-${date.day}`,
      phone,
      // code,
    };
    console.log("Payload being sent:", payload);
    try {
      const response = await fetch(
        "https://new-cura.onrender.com/api/patients/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      alert("Signup successful!");
    } catch (err) {
      console.error("Error details:", err);
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <section className={styles.container}>
        <div className={styles.white}>
          <div className={styles.backX}>
            <img src={back} alt="go back" />
            <img src={X} alt="close" />
          </div>
          <div className={styles.signup}>
            <h1 className={styles.title}>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.birthdayInput}>
                <p>When is your date of birth?</p>
                <div className={styles.dateInputs}>
                  <input
                    className={styles.dob}
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
                    className={styles.dob}
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
                    className={styles.dob}
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
                <p className={styles.disclaimer}>
                  Your birthday won't be shown publicly.
                </p>
              </div>
              <div className={styles.signupMethods}>
                <p className={styles.phone}>Phone</p>
                <p className={styles.email} onClick={handleEmail}>
                  Sign up with email
                </p>
              </div>
              <div className={styles.phoneInput}>
                <span>+234</span>
                <input
                  type="tel"
                  placeholder="801 234 5678"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
              </div>
              {/* <div className="code-input">
                <input
                  type="text"
                  placeholder="Enter 6 digit code"
                  value={code}
                  onChange={handleCodeChange}
                  required
                />
                <button type="button">Send code</button>
              </div> */}
              <button
                className={styles.button}
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Next"}
              </button>
              {error && <p className={styles.error}>{error}</p>}
              <footer>
                <p>
                  Already have an account?{" "}
                  <span className={styles.login} onClick={handleLogin}>
                    Log in
                  </span>
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
