 import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingpage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  return (
    <div>
      <div className="Logo">
        <img src="./src/assets/TextLogo.svg" alt="curamap logo" />
      </div>

      <div className="MainContent">
        <div className="TextContent">
          <h1>
            Your Health Journey,
            <br />
            Mapped In a click.
          </h1>

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
    </div>
  );
};

export default LandingPage;