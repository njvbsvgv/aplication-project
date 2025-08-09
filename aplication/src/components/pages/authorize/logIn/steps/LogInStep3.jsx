import { useState } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TbSmartHome } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi"; 
import { step3InputData } from "../../../../../core/constant/logIn/InputData";
import { RegisterArrow } from "../../../../partials/icons";
import { BtnLoadingSpiner, CustomeBtn, GotoHomeBtn } from "../../../../common";
import { registerFormValidation } from "../../../../../core/utility/validation";
import { postLoginData } from "../../../../../core/services/api";
import { toast } from "react-toastify";
import { changeRegisterSteper } from "../../../../../redux/actions";
import { setLocalStorageItemHook } from "../../../../../core/hooks";
import { useNavigate } from "react-router-dom";

const LogInStep3 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const initialValus = {
    nationalcode: "",
    mobile: "",
  };

  const { mutate, isLoading } = postLoginData(
    "loginPostData",
    "/Account/RegisterRequest"
  );

  const formSubmitHandler = async (event) => {
    setLocalStorageItemHook("mobile", event.mobile);
    setLocalStorageItemHook("nationalcode", event.nationalcode);
    mutate(event, {
      onSuccess: (response) => {
        toast.success("عملیات با موفقیت انجام شد😍😍");
        dispatch(changeRegisterSteper(2));
        setLocalStorageItemHook("code", response.data.value.code);
        setLocalStorageItemHook("token", response.data.message);
        navigation("/authorize/register/step2");
      },
      onError: () => {
        toast.error("مشکلی پیش اومده لطفا دوباره امتحان کنید");
      },
    });
  };

  const gotoHomeHandler = () => navigation("/");

  return (
    <div className="step-1 w-full">
      <div className="bottom mt-8 max-881View:flex max-881View:flex-col max-881View:items-center">
        <h3>
          <p className="text-2xl text-[#1C2024] font-[bYekanBold]">غیرفعال کردن شناسایی دوعاملی</p>
          <p className="text-xs text-[#8B8D98] mt-1 font-[bYekanBold]">
           کاربر گرامی، در صورت عدم دسترسی به شناسه دوعاملی، می توانید از طریق این<br></br> صفحه اقدام به حذف شناسه دوعاملی از حساب کاربری خود نمایید. همچنین در<br/> صورت تکمیل این پروسه و حذف شناسه دوعاملی برداشت رمزارز حساب شما به<br/> مدت 24 ساعت محدود خواهد شد.
          </p>
        </h3>
        <div className="form-control w-[80%] mt-5 flex flex-col items-center">
          <Formik
            onSubmit={formSubmitHandler}
            initialValues={initialValus}
            validationSchema={registerFormValidation}
          >
            <Form className="w-full flex flex-col gap-4 mt-3">
              {step3InputData.map((item, index) => {
                const isPasswordField = item.label === "پسورد";
                return (
                  <div className={`${item.holderClassName}`} key={index}>
                    <p className="font-[bYekanBold] text-[14px] indent-1.5">{item.label}</p>
                    <div className="input-control relative flex items-center mt-2.5 justify-between">
                      <TbSmartHome
                        size={21}
                        color="#1C2024"
                        className="absolute right-3.5 top-2"
                      />
                      <Field
                        type={isPasswordField ? (showPassword ? "text" : "password") : item.inputType}
                        className={`bg-[#F0F0F3] text-black ${item.inputClassNames}
                          placeholder:text-[#B9BBC6] font-[bYekanBold] p-2
                          outline-0 border-0 rounded-xl indent-9`}
                        placeholder={item.placeholder}
                        name={item.name}
                      />
                      {isPasswordField && (
                        <span
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute left-3 top-2 cursor-pointer text-[#1C2024]"
                        >
                          {showPassword ? <FiEyeOff size={21} /> : <FiEye size={21} />}
                        </span>
                      )}
                      <ErrorMessage
                        component="p"
                        className="text-red-600 font-[bYekanBold] text-xs absolute bottom-[-15px] right-2.5"
                        name={item.name}
                      />
                    </div>
                  </div>
                );
              })}
              {!isLoading ? (
                <CustomeBtn
                  width="100%"
                  height="40px"
                  text="ورود به حساب کاربری"
                  classNames="mt-2"
                  type="submit"
                  bgColor="#0588F0"
                />
              ) : (
                <BtnLoadingSpiner
                  textContent="در حال ورود به حساب کاربری"
                  classNames="bg-[#0588F0] rounded-3xl text-white cursor-pointer py-5 mt-2"
                  width="100%"
                  height="40px"
                  spinerThumbColor="text-white"
                  spinerTrackColor="fill-blue-600"
                />
              )}
            </Form>
          </Formik>
                    <div className="flex w-[109px] h-[40px] border border-[#E5E5E5] mx-auto mt-[40px] rounded-[25px] items-center justify-center gap-3 text-[#3772FF] px-auto">
            <h3>بازگشت</h3>
            <span className="text-blue-200">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInStep3;