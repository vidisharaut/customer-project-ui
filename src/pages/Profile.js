import React from "react";
import Button from "../components/Button";
import EditForm from "../components/EditForm";
import Header from "../components/Header";
import ProfileList from "../components/ProfileList";
import Revenue from "../components/Revenue";
import { MdAddBox } from "react-icons/md";

const Profile = () => {
  return (
    <div className="profile-page-container">
      <Header
        label="Customers > Edit Profile for Victor Bent"
        button={
          <Button
            className="add-btn"
            icon={<MdAddBox />}
            label="Add Customer"
          />
        }
      />
      <Revenue />
      <div className="profile-page">
        <ProfileList />
        <EditForm />
      </div>
    </div>
  );
};

export default Profile;
