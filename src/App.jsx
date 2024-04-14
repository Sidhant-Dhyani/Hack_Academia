/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Head from "./components/Header/Header";
import Nav from "./components/navBar/Navbar";
import Mainsimple from "./components/mainsimple/Mainsimple";
import "./App.css";
import Upload from "./components/upload/UploadForm";

function App() {
  return (
    <div className="Components">
      <Upload />
    </div>
  );
}

export default App;
