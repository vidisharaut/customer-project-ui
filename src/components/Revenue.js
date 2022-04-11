import React from "react";
import Number from "./Number";

const Revenue = () => {
  return (
    <div className="boxes">
      <div className="total-revenue">
        <small>TOTAL REVENUE</small>
        <p className="f32">$ 1,2000.00</p>
      </div>

      <Number title="Number 1" rank="# 100" />
      <Number title="Number 2" rank="# 120" />
      <Number title="Number 3" rank="# 10" />
    </div>
  );
};

export default Revenue;
