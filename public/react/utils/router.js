import { Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import HomePage from "../pages/HomePage";
import Feed from "../pages/Feed";
import AccountPage from "../pages/AccountPage";
import SettingsPage from "../pages/SettingsPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "authenticate", element: <AuthenticationPage /> },
      {
        path: "me",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Feed /> },
          { path: "account", element: <AccountPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);

export default router;
