/* eslint-disable no-unused-vars */
import React from "react";
import SiteMap from "../siteMap/Sitem";
import NewsBox from "../newsBox/News";
import "./home.css";

const Home = () => {
  return (
    <div className="home-div">
      <SiteMap />
      <NewsBox />
    </div>
  );
};

export default Home;
