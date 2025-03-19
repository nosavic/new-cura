import React from "react";
import "../styles/landingpage.css";

const LandingPage = () => {
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
            <button>Sign Up</button>
            <button>Login</button>
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
