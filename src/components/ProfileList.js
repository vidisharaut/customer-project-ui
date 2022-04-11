import React from "react";
import data from "../userData";
import SearchBar from "./SearchBar";

const ProfileList = () => {
  return (
    <div className="profile-sidemenu">
      <SearchBar />
      <div className="profilelist">
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              <img src={el.img} alt={el.firstName} />
              <div className="userinfo">
                <h4>
                  {el.firstName} {el.lastName}
                </h4>
                <p>{el.mobile}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileList;
