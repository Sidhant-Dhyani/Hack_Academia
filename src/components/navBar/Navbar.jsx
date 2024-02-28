/* eslint-disable no-unused-vars */
import React from "react";
import "./navBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <a href="#home">Home</a>
        <div className="dropdown">
          <button className="dropbtn">
            Course
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">B.Tech</a>
            {/* <a href="#">BCA</a>
            <a href="#">Law</a> */}
          </div>
        </div>
        <a href="#news">About Us!</a>
      </div>
    </div>
  );
};

export default Navbar;
