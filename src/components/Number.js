import React from "react";

const Number = ({ title, rank }) => {
  return (
    <div className="number">
      <div className="num-container">
        <small>{title}</small>
        <p className="f32">{rank}</p>
      </div>
      <div className="est-revenue">
        <small>EST.REVENUE</small>
        <small>$1200</small>
      </div>
    </div>
  );
};

export default Number;
