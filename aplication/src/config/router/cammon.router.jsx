import { createBrowserRouter } from "react-router-dom";
import { RegisterLastWrapper } from "../../screens";
import MainLayout from "../../components/layouts/MainLayout";
import { registerRouter } from "./register.router";

export const commonRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/authorize", element: <RegisterLastWrapper />, children: [...registerRouter] }],
  },
]);