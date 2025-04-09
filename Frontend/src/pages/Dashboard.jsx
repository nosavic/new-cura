import React from "react";
import Header from "../components/DashboardComponents/Header";
import OrdersTable from "../components/DashboardComponents/OrdersTable";
import RevenueChart from "../components/DashboardComponents/RevenueChart";
import DashboardCard from "../components/DashboardComponents/DashboardCard";
import Sidebar from "../components/DashboardComponents/Sidebar";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard">
          <div className="top-cards">
            <DashboardCard title="Drugs Sold" value="500" subValue="400" />
            <DashboardCard title="Vendor Activity" chart />
            <DashboardCard title="Patients Attended" value="300" />
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
