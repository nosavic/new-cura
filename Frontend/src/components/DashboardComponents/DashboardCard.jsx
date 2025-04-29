import React from "react";
import styles from "../../styles/dashboard.module.css";

const DashboardCard = () => {
  return (
    <div className={styles.dashboardCard}>
      <h2>300</h2>
      <p>Patients Attended</p>
      {/* <label for="month">Month</label> */}
      <input type="month" id="month" name="month" />
    </div>
  );
};

export default DashboardCard;

