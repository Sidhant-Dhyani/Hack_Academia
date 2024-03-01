/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./navBar.css";

const Navbar = ({ setDefaultState }) => {
  const handleClick = (event) => {
    if (event.target.id == "home") {
      setDefaultState("home");
    } else if (event.target.id == "About") {
      setDefaultState("About");
    } else if (event.target.id == "B.tech") {
      setDefaultState("B.tech");
    }
  };

  return (
    <div>
      <div className="navbars">
        <a href="#home" id="home" onClick={handleClick}>
          Home
        </a>
        <div className="dropdowns">
          <button className="dropbtns">
            Course
            <i className="fa fa-care-down"></i>
          </button>
          <div className="dropdown-contents">
            <a href="#" id="B.tech" onClick={handleClick}>
              B.Tech
            </a>
            <a href="#" id="BCA" onClick={handleClick}>
              BCA
            </a>
            <a href="#" id="Law" onClick={handleClick}>
              Law
            </a>
          </div>
        </div>
        <a href="#news" id="About" onClick={handleClick}>
          About Us!
        </a>
      </div>
    </div>
  );
};
export default Navbar;
