import { ArrowLeft } from "lucide-react";
import { BadgeInfo } from "lucide-react";
export default function Trad(){

    return (
        <>
        <div className=" w-full h-[748px]  mt-[20px]  md:w-[506px]">
            <div className="w-full h-[56px] rounded-[48px] bg-gray-300 md:w-[506px]">
<div className="relative">
  <div className="absolute top-[15px] w-[460px] h-[38px] mr-[32px] flex gap-[32px]">
    <div className="w-[97px] h-[38px] relative flex items-center justify-center text-black font-[IRANYekanXFaNum] font-bold text-[16px]">
      با تعیین قیمت
      <div className="absolute top-full left-0 w-[97px] h-[5px] bg-blue-500 opacity-100 rounded-tl-[5px] rounded-tr-[5px]"></div>
    </div>
    <div className="w-[97px] h-[38px] flex items-center justify-center text-gray-500 font-[IRANYekanXFaNum] font-bold text-[16px]">
      سفارش سریع
    </div>
    <div className="w-[97px] h-[38px] flex items-center justify-center text-gray-500 font-[IRANYekanXFaNum] font-bold text-[16px]">
      حد و مقایسه
    </div>
    <div className="w-[97px] h-[38px] flex items-center justify-center text-gray-500 font-[IRANYekanXFaNum] font-bold text-[16px]">
      سفارشات من
    </div>
  </div>
</div>
                </div>
                
                <div className="w-full h-[676px] rounded-2xl bg-[#FDFFFC] mt-4 relative md:w-[506px]">
                    <div className="w-[474px] h-[56px] rounded-2xl gap-6 top-4 mr-4  absolute flex bg-[#D4D4D8]" >
                        <div className="w-[218px] h-12 bg-[#2B7FFF] rounded-xl mt-1 mr-1 text-center"><h3 className="mt-[10px] font-semibold text-[#FAFAFA] text-lg">خرید</h3></div>
                        <div className="w-[218px] h-12 rounded-xl mt-1 mr-1 text-center "><h3 className="mt-[10px] font-semibold text-[#99A1AF] text-lg">فروش</h3></div>
                    </div>
                    <div className="w-[474px] h-[30px] top-22 right-4 absolute flex text-[#D1D5DC] gap-2">
                        <hr className="w-[199px] mt-[13px]"/>
                        <div className="w-[60px] h-5  "><span className="text-sm font-medium">دارایی شما </span></div>
                        <hr className="w-[199px] mt-[13px]"/>
                    </div>
                    <div className="w-[474px] h-12 absolute top-[124px] right-4 flex ">
                        <div className="w-[118px] h-12 flex gap-2">
                            <div className="w-12 h-12 bg-amber-400 rounded-3xl"></div>
                            <div className="w-[62px] h-12 ">
                                <div className="w-[62px] h-5"><span className="font-bold text-lg">250،152</span></div>
                                <div className="w-[62px] h-5 mt-2"><span className="text-[#99A1AF] text-sm font-bold">IRT</span></div>
                            </div>
                        </div>
                        <div className="w-12 h-12 bg-[#D1D5DC] rounded-3xl text-[#2B7FFF] mr-[95px]"><ArrowLeft size={33} className="mt-2 mr-1"/></div>
                         <div className="w-[118px] h-12 flex gap-2  mr-[127px]">
                            <div className="w-[30px] h-12 ">
                                <div className="w-[62px] h-5"><span className="font-bold text-lg">20</span></div>
                                <div className="w-[62px] h-5 mt-2"><span className="text-[#99A1AF] text-sm font-bold">Gold</span></div>
                            </div>
                            <div className="w-12 h-12 bg-amber-400 rounded-3xl"></div>
                        </div>
                    </div>
                    <div className="w-[474px] h-[268px] absolute top-[196px] right-4">
                        <div className="w-[277px] h-5 flex ">
                            <div className="w-[164px] h-5"><span className="font-semibold text-base">کم ترین پیشنهاد فروش :</span></div>
                            <div className="w-[77px] h-5 mr-2"><span className="text-lg font-semibold">2،026،056</span></div>
                            <div className="w-[24px] h-5 mr-2"><span className="text-[#99A1AF] text-base font-medium">IRT</span></div>
                        </div>
                       <div className="w-[474px] h-12 mt-4 flex items-center justify-between font-[IRANYekanXFaNum]">
  <span className="text-right font-bold text-[16px] text-gray-800">
    قیمت طلا 
  </span>
  <div className="relative w-[360px] h-full">
    <input
      type="text"
      className="w-full h-full pl-10 pr-3 rounded-[6px] bg-gray-200 text-gray-700 text-[14px] font-normal"
      placeholder="اقیمت طلا مورد نظر برای معامله را وارد کنید"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-medium">
      IRT
    </span>
  </div>
</div>
                       <div className="w-[474px] h-12 mt-4 flex items-center justify-between font-[IRANYekanXFaNum]">
  <span className="text-right font-bold text-[16px] text-gray-800">
    مقدار طلا
  </span>
  <div className="relative w-[360px] h-full">
    <input
      type="text"
      className="w-full h-full pl-10 pr-3 rounded-[6px] bg-gray-200 text-gray-700 text-[14px] font-normal"
      placeholder="گرم طلای مورد نظر را وارد کنید"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-medium">
      Gold
    </span>
  </div>
</div>
                       <div className="w-[474px] h-12 mt-4 flex items-center justify-between font-[IRANYekanXFaNum]">
  <span className="text-right font-bold text-[16px] text-gray-800">
    مقدار تومان
  </span>
  <div className="relative w-[360px] h-full">
    <input
      type="text"
      className="w-full h-full pl-10 pr-3 rounded-[6px] bg-gray-200 text-gray-700 text-[14px] font-normal"
      placeholder="هزینه پرداختی مورد نظر را وارد کنید"
    />
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-medium">
      IRT
    </span>
  </div>
</div>
<div className="w-[375px] h-11 border-red mt-3 mr-[99px]"></div>
                    </div>
                    <div className="absolute w-[474px] h-[108px] top-[490px] right-4 ">
                                            <div className="w-[474px] h-[30px] flex text-[#D1D5DC] gap-2">
                        <hr className="w-[206px] mt-[13px]"/>
                        <div className="w-[46px] h-5  "><span className="text-sm font-medium">اطلاعات</span></div>
                        <hr className="w-[206px] mt-[13px]"/>
                    </div>
                    <div className="w-[474px] h-5 mt-4 justify-between flex">
                        <div className="w-[109px] h-5 flex">
                            <div className="w-[87px] h-5"><span className="font-medium text-base">حداکثر کارمزد</span></div>
                            <div className="w-[18px] h-[18px]"><BadgeInfo size={24}/></div>
                        </div>
                        <div className="w-[56px] h-5 flex justify-between">
             <span>1</span> 
             <span>IRT</span>
                        </div>
                    </div>
                    <hr className="mt-4 text-[#99A1AF]"/>
                                        <div className="w-[474px] h-5 mt-4 justify-between flex">
                        <div className="w-[109px] h-5 flex"><span className="font-medium text-base">حداقل دریافتیشما</span>  </div >
                     
                        <div className="w-[56px] h-5 flex justify-between">
             <span>1</span> 
             <span>IRT</span>
                        </div>
                    </div>
                    </div>
<div className="absolute w-[474px] h-12 rounded-3xl top-[623px] right-4 text-center bg-[#2B7FFF] text-[#FAFAFA]"><span className="text-base font-semibold mt-[13.5px] absolute">خرید</span></div>
                </div>
        </div>
        
        </>
    );


}