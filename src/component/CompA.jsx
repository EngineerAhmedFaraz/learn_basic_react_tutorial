import React from "react";
import CompB from "./CompB";
import CompD from "./CompD";

const CompA = ({ name, marks, stack }) => {
  return (
    <>
      <h1>Comp - A</h1>
      {/* <h2>Name is : {name}</h2> */}
      {/* <h2>Marks is : {marks}</h2> */}
      {/* <h2>Stack is : {stack}</h2> */}
      {/* <CompB name={name} marks={marks} /> */}
      <CompB stack={stack} />
    </>
  );
};

export default CompA;
