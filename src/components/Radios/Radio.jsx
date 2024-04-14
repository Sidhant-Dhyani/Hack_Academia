/* eslint-disable no-unused-vars */
import React from "react";

const Radio = (semester) => {
  return (
    <div>
      <label htmlFor="semester">{semester}</label>
      <br />
      <input type="radio" id={semester} name="sem" value={semester} />
      hello
    </div>
  );
};

export default Radio;
