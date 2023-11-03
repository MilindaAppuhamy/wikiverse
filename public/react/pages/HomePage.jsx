import React, { useState } from "react";
import FloatingNavBar from "../components/FloatingNavBar";
import BlurBackground from "../components/BlurBackground";
import { Outlet, useLocation } from "react-router-dom";

function HomePage() {
  const loaction = useLocation();
  return (
    <>
      <FloatingNavBar currentLocation={loaction} />
      <BlurBackground />
      <Outlet />
    </>
  );
}

export default HomePage;
