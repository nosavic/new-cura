import React from "react";
import avatar from "/src/assets/Avatar.svg" 


const Header = () => {
  return (
    <header className="dashboard-header">
      <div>
        <h2>Welcome Pharm Daniel</h2>
        <p className="header-text">You have 4 pending orders</p>
      </div>
      <div className="header-right">
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider round"></span>
        </label>
        <img
          src={avatar}
          alt="User"
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;
