import React from "react";

const CustomeBtn = ({ width, height, text, type, bgColor, classNames, btnClick }) => {
  return (
    <button
      type={type}
      className={`bg-[${bgColor}] rounded-3xl text-white cursor-pointer ${classNames}`}
      style={{ width: width, height: height }}
      onClick={btnClick}
    >
      {text}
    </button>
  );
};

export default CustomeBtn;
