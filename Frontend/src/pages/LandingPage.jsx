import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landingpage.css";
import logoSymbol from "/src/assets/LogoSymbol.svg";
import textLogo from "/src/assets/TextLogo.svg";
import scribbling from "/src/assets/scribbling.svg";
import banner from "/src/assets/BannerPicture.svg";
import vector from "/src/assets/vector.svg";
import padlock from "/src/assets/padlock.svg";
import heartImage from "/src/assets/Thirdlevelimg.svg";
import tablets from "/src/assets/card-1-img.svg";
import tabletImage from "/src/assets/card-2-img.svg";
import contactChannel from "/src/assets/contactchannels.svg";
import tabletImageThree from "/src/assets/card-3-img.svg";
import clientPic from "/src/assets/clientpic1.svg";
import clientPicTwo from "/src/assets/clientpic2.svg";
import clientPicThree from "/src/assets/clientpic3.svg";
import forPatients from "/src/assets/forpatients.svg";
import pharmaCare from "/src/assets/phamacare.svg";
import colorbuttons from "/src/assets/colorbuttons.svg"

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup-phone");
  };

  const handleLogin = () => {
    navigate("/signin");
  };

  const handleMedication = () => {
    navigate("/findmeds")
  }

  return (
    <div className="landing-page-container">
      <div className="Logo">
        <img src={logoSymbol} alt="logo symbol" />
        <img src={textLogo} alt="curamap logo" />
      </div>

      <div className="MainContent">
        <div className="TextContent">
          <h1>
            Your Health Journey,
            <br />
            Mapped In a click.
          </h1>
          <img src={scribbling} alt="scribbling" />
          <p>
            We are here to make Healthcare simple and accessible,empowering you
            <br />
            to prioritize your wellbeing without the hassle.
          </p>
          <div className="Buttons">
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Sign In</button>
          </div>
        </div>

        <img src={banner} alt="Banner picture" />
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
            <img src={vector} alt="vector svg image" />
            <div className="benefit-text first-benefits">
              <span className=" benefit-text-container">
                <h3>Speed and Accessibility</h3>
                <p>Convey Free and Hassle Free Mediction Access</p>
              </span>
            </div>
          </div>
          <div className="benefit-text second-benefits">
            <img src={padlock} alt="vector svg image" />
            <span className="benefit-text-container">
              <h3>Trust & Security</h3>
              <p>
                Ensuring Patients have Access to Only Genuine Medications From
                Verified Pharmacies While Providing A Safe and Reliable Ordering
                Experience
              </p>
            </span>
          </div>

          <div className="benefit-text third-benefits">
            <span className="benefit-text-container">
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
        <div className="third-level-content-text">
          <h2>Your Health Will Thank You</h2>
          <p>
            order Easily, find Genuine Drug Instantly,Pay securely and Pick up
            With Confidence-experience ,Fast safe and Reliable Access to
            Medication With Curamap
          </p>
          <button onClick={handleMedication}>Browse Medications</button>
        </div>
        <img src={heartImage} alt="heart image" />
      </div>

      <div className="fourth-level-content">
        <h3>How is curamap Different ?</h3>
        <div className="card-container">
          <div className="card card-1">
            <div className="card-1-img-container">
              <img src={tablets} alt="Tablets image" />
            </div>

            <div className="card-text-section card-text-section-1">
              <span className="name-pre">
                <h4>Tab Valsatan 2.5mg</h4>
                <p>Take one Once a Day For 7 Days</p>
              </span>
              <span className="Drug-price">
                <p>Curamap # 3,500</p>
              </span>
              <span className="Drug-price">
                <p>Curamap # 4,500</p>
              </span>
            </div>
          </div>
          <div className="card card-2">
            <div className="card-2-img-container">
              <img src={tabletImage} alt="Tablets image" />
            </div>

            <div className="card-text-section">
              <span className="name-pre">
                <h4>Hello Adeola</h4>
                <p>Get Medication Support AnyWhere You Are</p>
              </span>
              <span className="Drug-price">
                <h4>Contact Channels</h4>
                <img src={contactChannel} alt="contact channel" />
              </span>
            </div>
          </div>
          <div className="card card-3">
            <h3>
              Your Medication
              <br /> is Ready For Pick-up
            </h3>{" "}
            <div className="card-3-img-container">
              <img src={tabletImageThree} alt="Tablets image" />
            </div>
          </div>
        </div>

        <div className="services-and-offers">
          <span>
            <h2>Affordable Prices</h2>
            <p>
              Our Goal is to Ensure you Receive Exceptional value on your
              medication and Healthcare Solutions With our Low Prices And
              Discount
            </p>
          </span>
          <span>
            <h2>Medication Support</h2>
            <p>
              We Esure you Stay Healthy and on schedule with automated Reliefs,
              Supportive Care and Proactive Patient Follow-up and Advice
            </p>
          </span>
          <span>
            <h2>Priority Pick-up</h2>
            <p>
              Skip The Wait! our Same Day Pick-up Service Ensures, You Get your
              Medications and Helathcare Solutions Quickly and Easily
            </p>
          </span>
        </div>
      </div>

      <div className="fifth-level-content">
        <h2>What Our Clients Say</h2>
        <div className="fifth-card-container">
          <div className="testimonial-card card-4">
            <div className="profile">
              <div className="image-container">
                <img src={clientPic} alt="illutration" />
              </div>
              <h3>Wale</h3>
            </div>
            <p>
              curamap has completely Transformed how i managemy prescription.As
              someone With a Hectic Schedule, The One-click Delivery Option is a
              Game-Changer.My Meds Arrive Quickly
            </p>
          </div>

          <div className="testimonial-card card-5">
            <div className="profile">
              <div className="image-container">
                <img src={clientPicTwo} alt="illustration two" />
              </div>
              <h3>Vivian</h3>
            </div>

            <p>
              i Love How Curamap Makes Health care so easy. i no longer have to
              worry about long Pharmacy Ques or missing doses. The convenience
              of irdering online and the speed of delivery are unmatched,
              curamap has truly simplified my life.
            </p>
          </div>

          <div className="testimonial-card card-6">
            <div className="profile">
              <div className="image-container">
                <img src={clientPicThree} alt="illustration three" />
              </div>

              <h3>Matt</h3>
            </div>

            <p>
              i was skeptical about online pharmacy at first, But Curamap
              exceeded my expectation , The interface is user-Friendly , the
              price are great , and the delivery is super fast, its like having
              a Personal Pharmacy at your Fingertips
            </p>
          </div>
        </div>

        <div className="colorbuttons-container"> <img src={colorbuttons} alt="color buttons" /></div>
      </div>

      <div className="sixth-level-content">
        <h2>Get Started with Curamap</h2>

        <div className="cards-container">
          <div className="card-con">
            <span className="heading">For Patients</span>
            <div className="portal portal-for-patients">
              <div className="patients-portal-card">
                <div className="patients-portal-card-img-container">
                  <img src={forPatients} alt="patients picture" />
                </div>
                <div className="patients-portal-card-text">
                  <h3>Easy Access to Medications</h3>
                  <p>
                    Order your Medication and Healthcare Solutions With Ease
                  </p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-con">
            <span className="heading">For Pharmacies</span>
            <div className="portal portal-for-pharmacy">
              <div className="pharmacy-portal-card">
                <div children="pharmacy-portal-card-img-container">
                  <img src={pharmaCare} alt="pharma care" />
                </div>
                <div className="pharmacy-portal-card-text">
                  <h3>Pharmaceutical Care</h3>
                  <p>
                    Transforming Nigerian Pharmaceutical <br />
                    Healthcare Through Enhanced Pharmacy Fulfillment
                  </p>
                  <button>Partner with us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seventh-level-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <ul>
            <li>What does Curamap do</li>
            <li>How does Curamap Measure The Quality of its Service</li>
            <li>Is my Data safe and confidential</li>
            <li>can i order drugs for someone else ?</li>
          </ul>
        </div>
      </div>

      <div className="eight-level-content">
        <div className="column First-column">
          <h3>
            Copyright 2025 BRIX Templates <br />| All Rights Reserved
          </h3>
        </div>
        <div className="column second-column">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="column third-column">
          <h3>Support</h3>
          <ul>
            <li>Getting Started</li>
            <li>Help center</li>
            <li>Server Status</li>
            <li>Report a Bug</li>
            <li>Chat support</li>
          </ul>
        </div>
        <div className="column Fourth-column">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkdel</li>
            <li>Youtube</li>
          </ul>
        </div>
        <h4>Terms And Conditions | Privacy Policy</h4>
      </div>
    </div>
  );
};

export default LandingPage;
