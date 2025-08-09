import React from "react";
import ProviderApp from "./ProviderApp";
import RouterProvider from "../config/router/index.router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="font-[bYekan]">
      <ToastContainer />
      <RouterProvider />
    </div>
  );
};

export default App;
