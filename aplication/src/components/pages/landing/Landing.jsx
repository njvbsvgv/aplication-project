import React from "react";
import Header from "./Header";

const Landing = () => {
  return (
    <div className="landing-holder">
      <div className="header-control mt-3.5">
        <Header />
      </div>
      <div className="h-[750px] flex justify-center items-center">
        <p className="font-[bYekanBold] text-6xl text-black text-center">
          Welcome To Sarafiabas
        </p>
      </div>
    </div>
  );
};

export default Landing;
