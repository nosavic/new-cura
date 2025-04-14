import React from "react";
import Header from "../components/DashboardComponents/Header";
import OrdersTable from "../components/DashboardComponents/OrdersTable";
import RevenueChart from "../components/DashboardComponents/RevenueChart";
import DashboardCard from "../components/DashboardComponents/DashboardCard";
import Sidebar from "../components/DashboardComponents/Sidebar";
import DrugsSold from "../components/DashboardComponents/DrugsSold";
import VendorActivity from "../components/DashboardComponents/VendorActivity";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard">
          <div className="top-cards">
            <DrugsSold />
            <VendorActivity />
            <DashboardCard  />
          </div>
          <div className="middle-section">
            <OrdersTable />
          </div>
          <RevenueChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
