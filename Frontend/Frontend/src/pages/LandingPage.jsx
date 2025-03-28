import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  return (
    <div>
      <div className="Logo">
        <img src="./src/assets/LogoSymbol.svg" alt="logo symbol" />
        <img src="./src/assets/TextLogo.svg" alt="curamap logo" />
      </div>

      <div className="MainContent">
        <div className="TextContent">
          <h1>
            Your Health Journey,
            <br />
            Mapped In a click.
          </h1>
          <img src="./src/assets/scribbling.svg" alt="scribbling" />
          <p>
            We are here to make Healthcare simple and accessible,empowering you
            to prioritize your wellbeing without the hassle.
          </p>
          <div className="Buttons">
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>

        <div>
          <img src="./src/assets/BannerPicture.svg" alt="Banner picture" />
        </div>
      </div>

      <div className="second-level-content">
        <h2>Connecting Patients to Pharmacies For Easy Medication Access.</h2>
        <p className="second-level-content-p">
          {" "}
          Curamap Connects Patients With Nearby Pharmacies In Nigeria Enabling
          Them To order Genuine And Affordable Medications
          <br />
          With Ease.Our PlatForm secures access to quality Drugs. with
          convenient payment option and easy pharmacy pickup.
        </p>
        <div className="Benefits">
          <div>
            <img src="./src/assets/vector.svg" alt="vector svg image" />
            <div>
              <span>
                <h3>Speed and Accessibility</h3>
                <p>Convey Free and Hassle Free Mediction Access</p>
              </span>
            </div>
          </div>

          <div>
            <img src="./src/assets/padlock.svg" alt="vector svg image" />
            <span>
              <h3>Trust & Security</h3>
              <p>
                Ensuring Patients have Access to Only Genuine Medications From
                Verified Pharmacies While Providing A Safe and Reliable Ordering
                Experience
              </p>
            </span>
          </div>

          <div>
            <span>
              <h3>Innovation And Digital Transformation</h3>
              <p>
                Leveraging Innovation and Digital Transformation to Conect
                Patients With Verified Pharmacies For Faster , Safer and More
                convenient Medication Access
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="third-level-content">
        <h2>Your Health Will Thank You</h2>

        <p>
          order Easily, find Genuine Drug Instantly,Pay securely and Pick up
          With Confidence-experience ,Fast safe and Reliable Access to Medication With Curamap
        </p>

        <button>Browse Medications</button>
        
      </div>
    </div>
  );
};

export default LandingPage;
