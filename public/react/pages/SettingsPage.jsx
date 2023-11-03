import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

function SettingsPage() {
  const { authUser } = useContext(AuthContext);
  console.log(authUser);
  return (
    <>
      <h1>Settings page</h1>
    </>
  );
}

export default SettingsPage;
