import React from "react";
import Header from "../components/DashboardComponents/Header";
import OrdersTable from "../components/DashboardComponents/OrdersTable";
import RevenueChart from "../components/DashboardComponents/RevenueChart";
import DashboardCard from "../components/DashboardComponents/DashboardCard";
import Sidebar from "../components/DashboardComponents/Sidebar";
import DrugsSold from "../components/DashboardComponents/DrugsSold";
import VendorActivity from "../components/DashboardComponents/VendorActivity";
import styles from "../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div className={styles.dashboard}>
          <div className={styles.topCards}>
            <DrugsSold />
            <VendorActivity />
            <DashboardCard  />
          </div>
          <div className={styles.middleSection}>
            <OrdersTable />
          </div>
          <RevenueChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
