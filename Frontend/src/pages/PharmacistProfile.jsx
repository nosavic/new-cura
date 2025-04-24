import React from 'react';
import Sidebar from '../components/DashboardComponents/Sidebar';
import ProfileCard from "../components/DashboardComponents/ProfileCard";
import ReviewList from "../components/DashboardComponents/ReviewList";
import "../styles/pharmacistprofile.css";

const PharmacistProfile = () => {
  return (
    <div className="pharm-profile-container">
      <Sidebar />
      <div className="pharm-profile-content">
        <ProfileCard />
        <ReviewList />
      </div>
    </div>
  )
}

export default PharmacistProfile;