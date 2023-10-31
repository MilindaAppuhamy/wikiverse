import { Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/authenticate", element: <AuthenticationPage /> },
    ],
  },
]);

export default router;
