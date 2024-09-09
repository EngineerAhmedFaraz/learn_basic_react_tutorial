import React from "react";
import CompA from "../component/CompA";
import CompD from "../component/CompD";

const PropDealing = () => {
  const fullName = "JohnDoe";
  const marks = 450;

  return (
    <>
      <h1>Parent Props</h1>
      <CompA name={fullName} marks={marks} />
      {/* <CompD text={fullName} /> */}
    </>
  );
};

export default PropDealing;
