import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const service = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const calculateSum = (a, b) => {
    console.log("calculating sum");
    return a + b;
  };

  const sum = calculateSum(num1, num2);

  const navigate = useNavigate();

  const handleChange = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={handleChange}>Change Route</button>
      <br />
      <br />
      <br />
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <p>Sum : {sum}</p>
    </>
  );
};

export default service;
