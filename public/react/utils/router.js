import { Outlet, createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <LandingPage />,
    children: [{ index: true, element: <LandingPage /> }],
  },
]);

export default router;
