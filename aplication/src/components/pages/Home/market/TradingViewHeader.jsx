import React from 'react';
import { ChartArea } from 'lucide-react';
import { ChartLine } from 'lucide-react';
import { ChartColumn } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

export default function TradingViewHeader() {
  return (
    <>
      <div className='hidden lg:flex w-[1018px] h-[56px] mt-[18px] gap-[32px]'>
        <div className='w-[448px] h-[56px] rounded-[48px] bg-gray-300'>
          <div className='w-[218px] h-[43px] mt-[13px] mr-[32px] flex gap-[32px]'>
            <div className="flex flex-col items-center">
              <span className="text-black font-bold">بازار</span>
              <span className="w-[33px] h-[2px] bg-blue-500 mt-[2px]"></span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500">نموداری</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500">تاریخچه</span>
            </div>
          </div>
        </div>
        <div className='w-[538px] h-[21px] mt-[17.5px] flex gap-[10px]'>
          <div className='w-4 h-4 rounded-full bg-[#D4D4D8] mt-[2.5px]'></div>
          <h3>اینجا یه راهنمایی یا خبری و یا هرچیز دیگه بذاریم که همینطوری از پایین میاد بالا</h3>
        </div>
      </div>
      <div className='hidden lg:flex w-[1197px] h-[80px] gap-[80px] mt-[28px] bg-[#FDFFFC] rounded-xl '>
        <div className='w-[216px] h-[31px] mt-[24.5px] mr-8 flex '>
          <h3 className='font-bold text-lg'>1 طلا (گرم) = 2222 هزار تومن</h3>
        </div>
        <div className='w-[165px] h-[70px] '>
          <div className='flex gap-2'>
            <div className='w-10 h-10 text-red-700'><ChartArea size={40} /></div>
            <h3>بیشترین<br/> قیمت 24 ساعت<br/></h3>
          </div>
          <div className='w-[117px] h-[26px] mr-12 gap-1 flex justify-end'>
            <h3 className='font-bold'>28.26549</h3>
            <h3 className='text-[#99A1AF] font-bold'>IRT</h3>
          </div>
        </div>
        <div className='w-[165px] h-[70px] '>
          <div className='flex gap-2'>
            <div className='w-10 h-10 text-red-700'><ChartLine size={40} /></div>
            <h3>بیشترین<br/>قیمت 24 ساعت<br/></h3>
          </div>
          <div className='w-[117px] h-[26px] mr-12 gap-1 flex justify-end'>
            <h3 className='font-bold'>28.26549</h3>
            <h3 className='text-[#99A1AF] font-bold'>IRT</h3>
          </div>
        </div>
        <div className='w-[165px] h-[70px] '>
          <div className='flex gap-2'>
            <div className='w-10 h-10 text-red-700'><ChartColumn size={40} /></div>
            <h3>بیشترین<br/>قیمت 24 ساعت<br/></h3>
          </div>
          <div className='w-[117px] h-[26px] mr-12 gap-1 flex justify-end'>
            <h3 className='font-bold'>28.26549</h3>
            <h3 className='text-[#99A1AF] font-bold'>IRT</h3>
          </div>
        </div>
        <div className='w-[140px] h-20 rounded-lg bg-[#D4D4D8]'>
          <div className='w-[79px] h-4 mt-[5px] mr-3'>
            <span className='text-xs text-[#99A1AF]'>تغییر زمان بندی</span>
          </div>
          <div className='w-[65px] h-[21px] mt-[21px] mr-3 text-center'>
            <span className='text-base font-bold'>24 ساعت</span>
          </div>
          <div className='w-4 h-4 mr-[96px] mt-[-32px] items-center'>
            <ChevronDown size={20}/>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden flex-col p-4 w-full">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center gap-2">
            <h3>اینجا یه راهنمایی یا خبری و یا هرچیز دیگه بذاریم که همینطوری از پایین میاد بالا</h3>
            <div className="w-4 h-4 rounded-full bg-[#D4D4D8]"></div>
          </div>
          <div className="flex justify-end items-center bg-gray-300 rounded-[48px] p-2">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-gray-500">تاریخچه</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-500">نمودار</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-black font-bold">بازار</span>
                <span className="w-[33px] h-[2px] bg-blue-500 mt-[2px]"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-[#FDFFFC] rounded-xl">
          <div className="flex justify-between items-center w-full mb-4">
            <div className="w-[180px] p-2 rounded-lg bg-[#D4D4D8] flex items-center justify-between gap-2">
              <ChevronDown size={20} />
              <div className="text-right">
                <span className="text-xs text-[#99A1AF] block">تغییر زمان بندی</span>
                <span className="text-base font-bold block">24 ساعت</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg">28.256 تومان</h3>
              <span className="text-gray-600">= (گرم) 1 طلا</span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>تغییرات</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-orange-500">
                  <ChartColumn size={40} />
                </div>
              </div>
              <span className="font-bold">28.26549 IRT</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>کمترین</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-blue-500">
                  <ChartLine size={40} />
                </div>
              </div>
              <span className="font-bold">28.26549 IRT</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>بیشترین</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-red-700">
                  <ChartArea size={40} />
                </div>
              </div>
              <span className="font-bold">28.26549 IRT</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:hidden flex flex-col p-4 w-full">
        <div className="flex justify-end items-center bg-gray-300 rounded-[48px] p-2 mb-4">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-gray-500">تاریخچه</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-500">نمودار</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-black font-bold">بازار</span>
              <span className="w-[33px] h-[2px] bg-blue-500 mt-[2px]"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 bg-[#FDFFFC] rounded-xl">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h3 className="font-bold text-lg">28.256 تومان</h3>
            <span className="text-gray-600">= (گرم) 1 طلا</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">28.26549 IRT</span>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>بیشترین</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-red-700">
                  <ChartArea size={40} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold">28.26549 IRT</span>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>کمترین</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-blue-500">
                  <ChartLine size={40} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold">28.26549 IRT</span>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end">
                  <span>تغییرات</span>
                  <span>قیمت ۲۴ ساعت</span>
                </div>
                <div className="text-orange-500">
                  <ChartColumn size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-4 flex justify-between items-center bg-[#D4D4D8] p-2 rounded-lg">
          <ChevronDown size={20} />
          <div className="text-right">
            <span className="text-xs text-[#99A1AF] block">تغییر زمان بندی</span>
            <span className="text-base font-bold block">24 ساعت</span>
          </div>
        </div>
      </div>
    </>
  );
}