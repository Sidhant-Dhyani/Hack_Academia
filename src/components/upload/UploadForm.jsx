/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Upload.css";
import Radio from "../Radios/Radio";

const Form = () => {
  return (
    <div className="Form">
      <div className="radios">
        {[1, 2, 3, 4, 5, 6].map((sem) => {
          <Radio semester={sem} />;
        })}
      </div>
    </div>
  );
};

export default Form;
