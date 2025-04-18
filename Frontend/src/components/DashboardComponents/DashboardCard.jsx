import React from "react";

const DashboardCard = () => {
  return (
    <div className="dashboard-card">
      <h2>300</h2>
      <p>Patients Attended</p>
      {/* <label for="month">Month</label> */}
      <input type="month" id="month" name="month" />
    </div>
  );
};

export default DashboardCard;

