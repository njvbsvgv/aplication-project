import React from "react";
import { TbSmartHome } from "react-icons/tb";

const GotoHomeBtn = ({ classNames, btnClick }) => {
  return (
    <button
      className={`border border-[#0588F0] text-[#0588F0] py-1.5 px-4 rounded-4xl
        flex items-center justify-center gap-x-1 cursor-pointer ${classNames}`}
      onClick={btnClick}
    >
      <TbSmartHome size={23} />
      <span className="text-[15px] font-[bYekanBold]"> صفحه اصلی </span>
    </button>
  );
};

export default GotoHomeBtn;
