/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbars">
        <Link to="/">Home</Link>
        <div className="dropdowns">
          <button className="dropbtns">Courses</button>
          <div className="dropdown-contents">
            <Link to="B_tech" id="B.tech">
              B.Tech
            </Link>
            <Link to="BCA" id="BCA">
              BCA
            </Link>
            <Link to="LAW" id="Law">
              Law
            </Link>
          </div>
        </div>
        <Link to="About" id="About">
          About Us!
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
