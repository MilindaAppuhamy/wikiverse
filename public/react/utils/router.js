import { Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/authenticate", element: <AuthenticationPage /> },
      { path: "/home", element: <HomePage /> },
    ],
  },
]);

export default router;
