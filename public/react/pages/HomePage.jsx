import React, { useState } from "react";
import FloatingNavBar from "../components/FloatingNavVar";
import { Outlet, useLocation } from "react-router-dom";

function HomePage() {
  const loaction = useLocation();
  return (
    <>
      <FloatingNavBar currentLocation={loaction} />
      <Outlet />
    </>
  );
}

export default HomePage;
