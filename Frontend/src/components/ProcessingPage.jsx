import React from "react";
import "../styles/ProcessingPage.css";




const ProcessingPage = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="spinner"></div>
        <p>Processing your transactions, please wait.</p>
      </div>
    </div>
  );
};

export default ProcessingPage;
