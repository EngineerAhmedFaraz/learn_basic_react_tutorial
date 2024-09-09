import React from "react";
import CompC from "./CompC";

const CompB = ({ name, marks }) => {
  return (
    <>
      <h2>Comp - B</h2>
      <h1>FllName is : {name}</h1>
      <CompC marks={marks} />
    </>
  );
};

export default CompB;
