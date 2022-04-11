import React from "react";

const Button = ({ icon, label }) => {
  return (
    <div className="button">
      {icon}
      {label}
    </div>
  );
};

export default Button;
