/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import About from "../about/About";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import B_tech from "../Course/B.Tech/B_tech";
import "./mains.css";
import Home from "../homePage/Home";

const Mainsimple = () => {
  return (
    <div className="mainArea">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="B_tech" element={<B_tech />}></Route>
      </Routes>
    </div>
  );
};

export default Mainsimple;
