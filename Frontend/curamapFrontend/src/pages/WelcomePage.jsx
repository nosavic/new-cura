import React from 'react'
import WelcomeInput from "../components/WelcomeInput"
import "../styles/welcomepage.css";

const WelcomePage = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="container">
   <div className="logo">
        <img src="./src/assets/LogoSvg.svg" alt="Curamap Logo" />
      </div>
      <div className="content">
        <h2>Hello...</h2>
        <h1>We are coming very soon</h1>
        <p>
          Stop the pharmacy search and never miss a refill again! Our app brings
          nearby pharmacies, prescription tracking, and refill reminders to your
          fingertips. Subscribe now and be the first to know when we go live.
        </p>
      </div>
      <WelcomeInput />
      <p className="footer">
        &copy; Copyright Curamap {currentYear} | All Rights Reserved
      </p>
        
        </div>
  )
}

export default WelcomePage