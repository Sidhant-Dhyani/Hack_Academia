/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Upload.css";

const Form = () => {
  return (
    <div className="Form">
      <label htmlFor="semester">Semester</label>
      <br />
      <label htmlFor="1">1</label>
      <input type="radio" id="1" name="sem" value="1" />
    </div>
  );
};

export default Form;
