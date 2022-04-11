import React from "react";
import { CgProfile, CgList } from "react-icons/cg";
import { BiAbacus } from "react-icons/bi";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="icons">
        <CgProfile />
        <CgProfile />
        <CgProfile />
        <BiAbacus />
        <CgList />
      </div>
    </div>
  );
};

export default SideMenu;
