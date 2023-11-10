import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContext from "../context/AuthContext";

export const App = () => {
  const [authUser, setAuthUser] = useState({});

  return (
    <React.StrictMode>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </React.StrictMode>
  );
};
