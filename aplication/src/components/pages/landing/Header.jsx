import React from "react";
import { CustomeBtn } from "../../common";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const loginOrRegisterBtnClick = () => {
    navigation("/authorize/register/step1");
  };

  return (
    <div className="header-container h-14 flex justify-center items-center">
      <div className="header-control w-[70vw] border-2 h-full flex justify-end items-center p-2">
        <CustomeBtn
          width={"150px"}
          height={"40px"}
          text={"ثبت نام / ورود"}
          classNames={"pb-0.5"}
          btnClick={loginOrRegisterBtnClick}
        />
      </div>
    </div>
  );
};

export default Header;
