import React from "react";

const MarkComponent = ({ marks }) => {
  console.log("inside Marks Component");
  return (
    <>
      <h1>Marks is : {marks}</h1>
    </>
  );
};

export default React.memo(MarkComponent);
