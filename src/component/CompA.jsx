import React from "react";
import CompB from "./CompB";
import CompD from "./CompD";

const CompA = ({ name, marks }) => {
  return (
    <>
      <h1>Comp - A</h1>
      {/* <h2>Name is : {name}</h2> */}
      <CompB name={name} marks={marks} />
    </>
  );
};

export default CompA;
