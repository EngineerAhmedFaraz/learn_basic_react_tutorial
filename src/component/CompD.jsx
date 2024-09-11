import React from "react";

const CompD = ({ text, marks, result, stack }) => {
  return (
    <>
      <h1>Comp D</h1>
      {/* <h1>Fullname is : {text}</h1>
      <h1>Marks is : {marks}</h1>
      <h1>Result is : {result}</h1> */}
      <h1>
        Stack come from Parent Component and cross multiple component as like A,
        B, C, D etc:
      </h1>
      <h1>Stack is : {stack}</h1>
    </>
  );
};

export default CompD;
