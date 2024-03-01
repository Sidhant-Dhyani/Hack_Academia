/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import About from "../about/About";
import Homepage from "../homePage/Home";
import React, { useState } from "react";
import B_tech from "../Course/B.Tech/B_tech";
import "./mains.css";

const Mainsimple = ({ defaultState }) => {
  const render = () => {
    if (defaultState == "home") {
      return <Homepage />;
    } else if (defaultState == "About") {
      return <About />;
    } else if (defaultState == "B.tech") {
      return <B_tech />;
    }
  };

  return <div className="mainArea">{render()}</div>;
};

export default Mainsimple;
