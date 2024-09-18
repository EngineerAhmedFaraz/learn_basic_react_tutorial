import React from "react";
import { useParams } from "react-router-dom";

const UseParams = () => {
  const { id } = useParams();

  return (
    <>
      <h1>UseParams</h1>
      <h1>UseParams id : {id}</h1>
    </>
  );
};

export default UseParams;
