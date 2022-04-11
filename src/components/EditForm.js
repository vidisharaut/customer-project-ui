import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../userData";
import Button from "./Button";
import { MdAddBox, MdModeEditOutline, MdDelete } from "react-icons/md";

const EditForm = () => {
  const navigate = useNavigate();
  return (
    <div className="edit-form">
      <div className="form-header">
        <p>VIEW</p>
        <p className="edit">EDIT</p>
        <p>ORDER HISTORY</p>
        <p>ANALYTICS</p>
      </div>
      <form>
        <div className="form-container">
          <div className="col">
            <div className="victor">
              <img
                style={{ width: "158px", height: "158px" }}
                src={data[2].img}
                alt="Victor"
              />
            </div>
            <div className="input">
              <label htmlFor="address">
                Address <MdAddBox />
              </label>
              <textarea
                name="address"
                className="input"
                placeholder="2571 Beeghley Street, Waco, Texas"
              ></textarea>
              <div className="checkbox">
                <div className="checkbox-1">
                  <input type="checkbox" />
                  <p>set as default</p>
                </div>
                <div className="checkbox-2">
                  <MdModeEditOutline />
                  <MdDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="input">
              <label htmlFor="firstname">First Name</label>
              <input type="firstname" placeholder="Victor" />
            </div>
            <div className="input">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="mobile" placeholder="+12345678" />
            </div>
            <div className="input">
              <label htmlFor="credit">
                Credit Card <MdAddBox />
              </label>
              <textarea
                name="credit"
                placeholder="**** **** **** 1234 Mastercard"
              ></textarea>
              <div className="checkbox">
                <div className="checkbox-1">
                  <input type="checkbox" />
                  <p>set as default</p>
                </div>
                <div className="checkbox-2">
                  <MdModeEditOutline />
                  <MdDelete />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="input">
              <label htmlFor="lastname">Last Name</label>
              <input type="lastname" placeholder="Bent" />
            </div>
            <div className="input">
              <label htmlFor="email">Email Address</label>
              <input type="email" placeholder="bent@v.com" />
            </div>
            <div className="input">
              <label htmlFor="notes">Notes </label>
              <textarea
                name="credit"
                placeholder="Doesn't like it too spicy"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="footer form-footer">
          <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            {"< "} Back to customer list
          </p>
          <Button label="Create Order" />
          <Button label="Edit Profile" />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
