import React from 'react';
import Sidebar from '../components/DashboardComponents/Sidebar';
import ProfileCard from "../components/DashboardComponents/ProfileCard";
import ReviewList from "../components/DashboardComponents/ReviewList";
import  styles from "../styles/pharmacistprofile.module.css";

const PharmacistProfile = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <ProfileCard />
        <ReviewList />
      </div>
    </div>
  )
}

export default PharmacistProfile;