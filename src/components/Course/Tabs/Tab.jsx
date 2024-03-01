/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./tabs.css";

const Tab = ({ setYearNo }) => {
  const [selectedTab, setSelectedTab] = useState("1"); // State to track the selected tab

  const clickHandler = (e) => {
    setYearNo(e.target.id);
    setSelectedTab(e.target.id); // Update the selected tab based on the clicked label's id
  };

  return (
    <div className="tabs">
      <input
        type="radio"
        name="tabData"
        id="1"
        checked={selectedTab === "1"}
        onChange={clickHandler}
      />
      <label
        className={selectedTab === "1" ? "tab-active" : "tab-unactive"}
        htmlFor="1"
      >
        1st Year
      </label>

      <input
        type="radio"
        name="tabData"
        id="2"
        checked={selectedTab === "2"}
        onChange={clickHandler}
      />
      <label
        htmlFor="2"
        className={selectedTab === "2" ? "tab-active" : "tab-unactive"}
      >
        2nd Year
      </label>

      <input
        type="radio"
        name="tabData"
        id="3"
        checked={selectedTab === "3"}
        onChange={clickHandler}
      />
      <label
        htmlFor="3"
        className={selectedTab === "3" ? "tab-active" : "tab-unactive"}
      >
        3rd Year
      </label>

      <input
        type="radio"
        name="tabData"
        id="4"
        checked={selectedTab === "4"}
        onChange={clickHandler}
      />
      <label
        htmlFor="4"
        className={selectedTab === "4" ? "tab-active" : "tab-unactive"}
      >
        4th Year
      </label>
    </div>
  );
};

export default Tab;
