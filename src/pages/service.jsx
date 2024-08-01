import React from "react";
import { useNavigate } from "react-router-dom";

const service = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleChange}>Change Route</button>
    </>
  );
};

export default service;
