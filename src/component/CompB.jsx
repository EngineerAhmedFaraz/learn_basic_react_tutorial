import React from "react";
import CompC from "./CompC";

const CompB = ({ name, marks, stack }) => {
  return (
    <>
      <h2>Comp - B</h2>
      {/* <h1>FllName is : {name}</h1> */}
      {/* <h1>Stack is : {stack}</h1> */}

      {/* <CompC marks={marks} /> */}
      <CompC stack={stack} />
    </>
  );
};

export default CompB;
