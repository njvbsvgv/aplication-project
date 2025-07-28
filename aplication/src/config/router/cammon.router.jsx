import { createBrowserRouter } from "react-router-dom";
import { RegisterLastWrapper } from "../../screens";
import MainLayout from "../../components/layouts/MainLayout";
import { registerRouter } from "./register.router";
import LandingWrapper from "../../screens/landing/LandingWrapper";

export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingWrapper /> },
      {
        path: "/authorize",
        element: <RegisterLastWrapper />,
        children: [...registerRouter],
      },
    ],
  },
]);
