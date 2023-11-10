import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContext from "../context/AuthContext";
import FlipcardContext from "../context/FlipcardContext";

export const App = () => {
  const [authUser, setAuthUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  return (
    <React.StrictMode>
      <FlipcardContext.Provider value={{ isLogin, setIsLogin }}>
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
          <RouterProvider router={router} />
        </AuthContext.Provider>
      </FlipcardContext.Provider>
    </React.StrictMode>
  );
};
