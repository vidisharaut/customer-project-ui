import React from "react";

const Header = ({ label, searchbar, button }) => {
  return (
    <div className="header">
      <div className="header-container">
        <p className="header-p">{label}</p>
        <div className="search-n-btn">
          <div className="searchbar">{searchbar}</div>
          <div className="btn">{button}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
