import { createBrowserRouter } from "react-router-dom";
import { RegisterLastWrapper } from "../../screens";
import LogInLastWrapper from "../../screens/authorize/register/LogInLastWrapper";
import MainLayout from "../../components/layouts/MainLayout";
import { registerRouter } from "./register.router";
import { LogInRouter } from "./logIn.router";
import MarketPage from "../../components/pages/Home/market/MarketPage";
import Sidebar from "../../components/pages/Home/market/SideBar";
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
            {
        path: "/Market",
        element: <MarketPage />,
      },
            {
        path: "/authorize/logIn",
        element: <LogInLastWrapper />,
        children: [...LogInRouter],
      },
    ],
  },
]);
