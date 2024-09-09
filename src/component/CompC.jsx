import React from "react";
import CompD from "./CompD";

const CompC = ({ marks }) => {
  return (
    <>
      <h1>Comp C</h1>
      <CompD marks={marks} />
    </>
  );
};

export default CompC;
