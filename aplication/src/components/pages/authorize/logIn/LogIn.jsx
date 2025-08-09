import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import RegisterSlider from "../../../partials/RegisterSlider";   
import { useSelector } from "react-redux";

const LogIn = () => {
  const { steper } = useSelector((state) => state.registerDataSlice);
  return (
    <div className="register-container h-[730px] flex justify-center items-center">
      <div className="cards-control min-881View:w-[80vw] max-881View:w-[90vw] flex justify-between shadow-2xl rounded-2xl p-4
        ">
        <div className="right w-[48%] max-881View:w-full flex flex-col items-start">
          <div className="mt-8 w-full">
            <Outlet />
          </div>
        </div>
        <div className="left w-[48%] flex justify-center items-center max-881View:hidden">
          <RegisterSlider bgColor={"#0090FF"}/>
        </div>
      </div>
    </div>
  );
};

export default LogIn;