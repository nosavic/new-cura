import React, { useState } from "react";
import "../styles/findmeds.css";
import brandlogo from "/src/assets/brandlogo.svg"
import avatar from "/src/assets/Avatar.svg"
import searchVector from "/src/assets/search-vector.svg"

const FindMeds = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const IncrementThree = () => {
    setCountThree(countThree + 1);
  };

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const DecrementTwo = () => {
    if (countTwo > 0) {
      setCountTwo(countTwo - 1);
    }
  };

  const DecrementThree = () => {
    if (countThree > 0) {
      setCountThree(countThree - 1);
    }
  };

  return (
    <>
      <section className="findmeds-wrapper">
        <header>
          <img
            className="brandlogo"
            src={brandlogo}
            alt="The Curamap Brand Logo"
          />

          <img
            className="avatar"
            src={avatar}
            alt="An avatar for user profiles "
          />
        </header>

        <div className="search-bar" id="searchBar">
          <input
            type="text"
            id="searchInput"
            placeholder="Search Medications"
          />
          <img src={searchVector} alt="An addition Icon" />
        </div>

        <div className="med-container">
          <div className="med-one">
            <h2 className="med-title">Ibuprofen</h2>
            <p className="med-description">
              Ibuprofen Tablet Is Used To Relieve Mild To Moderate Pain From A
              Headache, Toothache, Cold, Flu, Joint Pain, Or Periods Pain.
            </p>
            <div className="med-details">
              <div className="details">
                <label htmlFor="dosages">Dosages:</label>
                <select name="dosages" id="dosages">
                  <option value="500mg">500mg</option>
                  <option value="250mg">250mg</option>
                  <option value="750">7500mg</option>
                  <option value="1000mg">1000mg</option>
                </select>
              </div>
              <div className="details">
                <label htmlFor="packageSizes">Package Sizes:</label>
                <select name="packageSizes" id="packageSizes">
                  <option value="1"> 1 Pack</option>
                  <option value="2"> 2 Packs</option>
                  <option value="3"> 3 Packs</option>
                  <option value="4"> 4 Packs</option>
                </select>
              </div>
              <div className="quantity-box">
                <p>Quantity</p>
                <div className="handlers">
                  <button className="increment" onClick={Increment}>
                    +
                  </button>
                  <p id="medOneQuantity">{count}</p>
                  <button className="decrement" onClick={Decrement}>
                    -
                  </button>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "end" }}>Same day pick up</p>
          </div>
          <div className="med-two">
            <h2 className="med-title">Emzor Paracetamol Tablets</h2>
            <p className="med-description">
              Emzor paracetamol tablet is used to relieve mild to mild to
              moderate pain from a headache, toothache, cold, flu, joint pain or
              period pain.
            </p>
            <div className="med-details">
              <div className="details">
                <label htmlFor="dosages">Dosages:</label>
                <select name="dosages" id="dosages">
                  <option value="500mg">500mg</option>
                  <option value="250mg">250mg</option>
                  <option value="750">7500mg</option>
                  <option value="1000mg">1000mg</option>
                </select>
              </div>
              <div className="details">
                <label htmlFor="packageSizes">Package Sizes:</label>
                <select name="packageSizes" id="packageSizes">
                  <option value="24">24 tablets</option>
                  <option value="12">12 tablets</option>
                  <option value="8">8 tablets</option>
                  <option value="6">6 tablets</option>
                </select>
              </div>
              <div className="quantity-box">
                <p>Quantity</p>
                <div className="handlers">
                  <button className="increment" onClick={IncrementTwo}>
                    +
                  </button>
                  <p id="medOneQuantity">{countTwo}</p>
                  <button className="decrement" onClick={DecrementTwo}>
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="med-three">
            <h2 className="med-title">Atorvastatin</h2>
            <p className="med-description">
              Atorvastatin is a statin medication that lowers cholesterol by
              inhibiting its production in the liver. It helps reduce the risk
              of heart disease and stroke.
            </p>
            <div className="med-details">
              <div className="details">
                <label htmlFor="dosages">Dosages:</label>
                <select name="dosages" id="dosages">
                  <option value="500mg">500mg</option>
                  <option value="250mg">250mg</option>
                  <option value="750">7500mg</option>
                  <option value="1000mg">1000mg</option>
                </select>
              </div>
              <div className="details">
                <label htmlFor="packageSizes">Package Sizes:</label>
                <select name="packageSizes" id="packageSizes">
                  <option value="24">24 tablets</option>
                  <option value="12">12 tablets</option>
                  <option value="8">8 tablets</option>
                  <option value="6">6 tablets</option>
                </select>
              </div>
              <div className="quantity-box">
                <p>Quantity</p>
                <div className="handlers">
                  <button className="increment" onClick={IncrementThree}>
                    +
                  </button>
                  <p id="medOneQuantity">{countThree}</p>
                  <button className="decrement" onClick={DecrementThree}>
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="findmed-box">
          <button className="findmed-cta">Find Med</button>
        </div>
      </section>
    </>
  );
};

export default FindMeds;
