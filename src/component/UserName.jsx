import React from "react";

const UserName = ({ name }) => {
  console.log("inside UserName Component");
  return (
    <>
      <h1>Name is : {name}</h1>
    </>
  );
};

export default React.memo(UserName);
