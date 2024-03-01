/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Head from "./components/Header/Header";
import Nav from "./components/navBar/Navbar";
import Mainsimple from "./components/mainsimple/Mainsimple";
import "./App.css";

function App() {
  const [defaultState, setDefaultState] = useState("home");
  return (
    <div className="Components">
      <Head />
      <Nav setDefaultState={setDefaultState} />
      <Mainsimple defaultState={defaultState} />
    </div>
  );
}

export default App;
