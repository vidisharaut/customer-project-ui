import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import data from "../userData";
import Revenue from "../components/Revenue";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import { MdAddBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Header
        label="Customers"
        searchbar={<SearchBar />}
        button={
          <Button
            className="add-btn"
            icon={<MdAddBox />}
            label="Add Customer"
          />
        }
      />
      <Revenue />
      <div className="home-container">
        <table className="table-header">
          <thead>
            <tr>
              <th className="first-row"> PROFILE</th>
              <th className="second-row">FIRST NAME</th>
              <th className="third-row">LAST NAME</th>

              <th className="fourth-row">MOBILE</th>
              <th className="fifth-row">EMAIL ADDRESS</th>
              <th className="sixth-row">CREDIT CARD</th>
              <th className="seventh-row">TOTAL SALES</th>
              <th className="eight-row">LAST ORDER</th>

              <th></th>
            </tr>
          </thead>
          {data.map((el) => (
            <tbody
              key={el.id}
              className="tbody-hover"
              onClick={(e) => navigate("profile")}
            >
              <tr>
                <td className="first-row img">
                  <img src={el.img} alt="Person 1" />
                </td>
                <td className="second-row">
                  <h5>{el.firstName}</h5>
                </td>
                <td className="third-row">
                  <h5>{el.lastName}</h5>
                </td>

                <td className="fourth-row">
                  <p>{el.mobile}</p>
                </td>
                <td className="fifth-row ">
                  <p>{el.email}</p>
                </td>
                <td className="sixth-row ">
                  <p>{el.credit}</p>
                </td>
                <td className="seventh-row ">
                  <p>{el.totalSales}</p>
                </td>
                <td className="eight-row ">
                  <p>{el.lastOrder}</p>
                </td>
                <td>
                  <p style={{ color: "#C5C7CD" }}>
                    <FiMoreVertical />
                  </p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="footer">
          <p>Viewing 1-10 of 50</p>

          <BsChevronLeft style={{ strokeWidth: "1", marginRight: "15px" }} />
          <BsChevronRight style={{ strokeWidth: "1" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
