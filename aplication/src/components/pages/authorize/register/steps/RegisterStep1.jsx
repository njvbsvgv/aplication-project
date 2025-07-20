import React from "react";
import StepNavigation from "../StepNavigation";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { TbSmartHome } from "react-icons/tb";
import { step1InputData } from "../../../../../core/constant";

const RegisterStep1 = () => {
  const { steper } = useSelector((state) => state.registerDataSlice);

  return (
    <div className="step-1 w-full">
      <div className="top w-full">
        <StepNavigation activeStep={steper} />
      </div>
      <div className="bottom">
        <h3>
          <p className="text-2xl text-[#1C2024] font[bYekanBold]">
            به عباس خوش اومدی!
          </p>
          <p className="text-xs text-[#8B8D98] mt-1">
            برای ثبت نام لطفا شماره همراه خود را وارد کنید
          </p>
        </h3>
        <div className="form-control">
          <Formik>
            <Form>
              {step1InputData.map((item, index) => {
                console.log(item);
                return (
                  <div className={`${item.inputClassNames} relative`} key={index}>
                    {/* <p> شماره همراه </p> */}
                    <p>{item.label}</p>
                    <TbSmartHome color="#1C2024" className="absolute right-0" />
                    <Field
                      // type="text"
                      type={item.inputType}
                      className="bg-[#F0F0F3] text-[] placeholder:text-[#B9BBC6] font-[bYekanBold] text-xs"
                      // placeholder="مثال: **********09"
                      placeholder={item.placeholder}
                    />
                  </div>
                );
              })}
              {/* <div className="phonenumber-item-control relative">
                <p> شماره همراه </p>
                <TbSmartHome color="#1C2024" className="absolute right-0" />
                <Field
                  type="text"
                  className="bg-[#F0F0F3] text-[] placeholder:text-[#B9BBC6] font-[bYekanBold] text-xs"
                  placeholder="مثال: **********09"
                />
              </div> */}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep1;
