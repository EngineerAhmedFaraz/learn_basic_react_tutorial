import React from "react";

const Button = ({ text, onClick }) => {
  console.log("Inside Button render");
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
};

export default React.memo(Button);
