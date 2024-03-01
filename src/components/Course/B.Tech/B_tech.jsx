/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Tab from "../Tabs/Tab";
import Year from "./../data/YearData";
import "./btech.css";

const B_tech = () => {
  const [yearNo, setYearNo] = useState("1");
  return (
    <div className="Btech-main">
      <Tab setYearNo={setYearNo} />
      <Year yearNo={yearNo} />
    </div>
  );
};

export default B_tech;
