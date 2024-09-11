import React from "react";
import CompD from "./CompD";

const CompC = ({ marks, stack }) => {
  return (
    <>
      <h1>Comp C</h1>
      {/* <h1>Stack is : {stack}</h1> */}
      {/* <CompD marks={marks} /> */}
      <CompD stack={stack} />
    </>
  );
};

export default CompC;
