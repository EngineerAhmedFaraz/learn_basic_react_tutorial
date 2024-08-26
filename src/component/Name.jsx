import React from "react";

const NameComponent = ({ name }) => {
  return (
    <>
      <h1>Name is : {name}</h1>
    </>
  );
};

export default React.memo(NameComponent);
