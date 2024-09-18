import React from "react";
import { Outlet } from "react-router-dom";

const DemoDashboard = () => {
  return (
    <>
      <h1>Demo Dashboard</h1>
      <Outlet />
    </>
  );
};

export default DemoDashboard;
