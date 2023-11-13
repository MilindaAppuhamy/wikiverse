import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import FlipcardContext from "../context/FlipcardContext";

export const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <React.StrictMode>
      <FlipcardContext.Provider value={{ isLogin, setIsLogin }}>
        <RouterProvider router={router} />
      </FlipcardContext.Provider>
    </React.StrictMode>
  );
};
