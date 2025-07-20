import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import RegisterSlider from "../../../partials/RegisterSlider";

const Register = () => {
  return (
    <div className="register-container h-[730px] flex justify-center items-center border border-amber-600">
      <div className="cards-control flex w-[50vw]">
        <div className="right w-[40vw] border flex items-start">
          <Outlet />
        </div>
        <div className="left border w-[40vw] flex justify-center items-center">
          <RegisterSlider />
        </div>
      </div>
    </div>
  );
};

export default Register;
