import React from "react";
import avatar from "/src/assets/Avatar.svg" ;
import styles from "../../styles/dashboard.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h2>Welcome Pharm Daniel</h2>
        <p className={styles.text}>You have 4 pending orders</p>
      </div>
      <div className={styles.profile}>
        <label className={styles.switch}>
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
        </label>
        <img
          src={avatar}
          alt="User"
          className={styles.avatar}
        />
      </div>
    </header>
  );
};

export default Header;
