import React from "react";

const DashboardCard = ({ title, value, subValue, chart }) => {
  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      {chart ? (
        <div className="fake-chart">Chart Placeholder</div>
      ) : (
        <div>
          <p className="main-value">{value}</p>
          {subValue && <p className="sub-value">{subValue} Sold</p>}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
