import React from "react";
import CompA from "../component/CompA";
import CompD from "../component/CompD";

const PropDealing = () => {
  const fullName = "JohnDoe";
  const marks = 450;
  const result = "PropsDealing";
  // const stack = "React JS";
  // const stack = "Node JS";
  const stack = "Next JS";

  return (
    <>
      <h1>Parent Props</h1>
      <CompA name={fullName} marks={marks} stack={stack} />
      {/* <CompD text={fullName} /> */}
      {/* <CompD result={result} /> */}
    </>
  );
};

export default PropDealing;
