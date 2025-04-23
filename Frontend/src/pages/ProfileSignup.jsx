import "../styles/profile-signup.css";
import { useNavigate } from "react-router-dom";

const ProfileSignup = () => {
  const navigate = useNavigate();

  const handleMeds = () => {
    navigate("/findmeds");
  };

  return (
    <>
      <section className="profile-wrapper">
        <div className="profile-container">
          <h1 className="profile-heading">Complete your Profile</h1>
          <form className="profile-form">
            <div className="name-box">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Name as shown on Valid ID"
              />
            </div>

            <div className="number-box">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="+234" />
            </div>

            <div className="id-box">
              <label htmlFor="validId">Valid ID</label>
              <input type="text" id="validId" placeholder="Valid means of ID" />
              <span>
                <img src="" alt="" /> <p>Why we need ID</p>
              </span>
            </div>

            <div className="conditions-box">
              <select name="conditions" id="conditions">
                <option value="" selected disabled>
                  Any Pre-existing condition?
                </option>
                <option value="ulcer">Ulcer</option>
                <option value="cancer">Cancer</option>
                <option value="diabetes">Diabetes</option>
                <option value="highBloodPressure">High Blood Pressure</option>
              </select>
            </div>

            <div className="btn-box">
              <button className="skip-btn">Skip</button>
              <button className="finish-btn" onClick={handleMeds}>
                Finish
              </button>
            </div>

            <button id="submitCta" type="submit" onClick={handleMeds}>
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProfileSignup;
