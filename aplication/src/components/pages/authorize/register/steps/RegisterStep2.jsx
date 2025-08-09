import { useFormik } from "formik";
import {
  getLocalStorageHook,
  setLocalStorageItemHook,
} from "../../../../../core/hooks";
import {
  CustomeBtn,
  GotoHomeBtn,
  OtpInput,
  TimerWrapper,
} from "../../../../common";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { virfiryCodeValidation } from "../../../../../core/utility/validation";
import { postLoginData } from "../../../../../core/services/api";
import { toast } from "react-toastify";

const RegisterStep2 = () => {
  const mobile = getLocalStorageHook("mobile", true);
  const nationalcode = getLocalStorageHook("nationalcode", true);
  const code = getLocalStorageHook("code", true);
  const token = getLocalStorageHook("token", true);

  const navigation = useNavigate();

  const { mutate: confirmCodeMutate } = postLoginData(
    "loginPostData",
    "/Account/ConfirmRegisterRequest"
  );
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: virfiryCodeValidation,
    onSubmit: (value, { setFieldValue }) => {
      console.log("value ==>", value);
      if (value.code === code) {
        confirmCodeMutate(
          { code: value.code, token: token },
          {
            onSuccess: (response) => {
              console.log("confirm code ==>", response);
              if (response.data.isSuccess) {
                toast.success(response.data.message);
              } else {
                toast.error(response.data.message);
                setLocalStorageItemHook(
                  "accesToken",
                  response.data.value.accessToken
                );
              }
            },
          }
        );
      } else {
        toast.error("کد وارد شده اشتباه است😒😒");
        setFieldValue("code", "")
      }
    },
  });

  const { mutate } = postLoginData("loginPostData", "/Account/RegisterRequest");
  const resetCode = () => {
    const dataObj = {
      mobile: mobile,
      nationalcode: nationalcode,
    };
    mutate(dataObj, {
      onSuccess: (response) => {
        console.log(response);
        setLocalStorageItemHook("code", response.data.value.code);
        toast.success("کد تایید را وارد کنید");
      },
    });
  };

  return (
    <div className="register-step2-container mt-9">
      <div className="title-text-control">
        <h2 className="font-[bYekanBold] text-2xl max-393View:text-xl"> تایید کد ارسال </h2>
        <h4 className="flex items-center gap-x-1 font-[bYekanBold] text-[16px] indent-0.5 max-393View:text-xs">
          <span className="text-[#8B8D98] max-393View:text-xs"> کد ارسال شده به شماره </span>
          <span className="text-[#0588F0] max-393View:text-xs">{mobile}</span>
          <span className="text-[#8B8D98] max-393View:text-xs"> را وارد کنید </span>
        </h4>
        <h4 className="flex items-center mt-1.5 gap-x-1 font-[bYekanBold] text-[16px] indent-0.5 max-393View:text-xs">
          <span className="text-[#8B8D98]"> این کد </span>
          <span className="text-[#0588F0]">{code}</span>
          <span className="text-[#8B8D98]"> را وارد کنید </span>
        </h4>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="input-item-control flex flex-col gap-y-3.5 mt-8">
          <h5 className="font-[bYekanBold] text-[16px]"> کد تایید </h5>
          <div className="otp-input-control flex max-881View:justify-center">
            <OtpInput
              length={6}
              name="code"
              setFieldValue={formik.setFieldValue}
            />
          </div>
          <div className="sub-input-text-control flex justify-between mt-1">
            <button className="right-item flex gap-x-2" onClick={resetCode}>
              <TimerWrapper timeCounter={120} />
              <span className="text-[#8EC8F6] font-[bYekanBold] underline cursor-pointer max-393View:text-[14px]">
                ارسال مجدد
              </span>
            </button>
            <div className="left-item">
              <button
                type="button"
                className="text-[#0588F0] font-[bYekanBold] flex items-center gap-x-1.5 cursor-pointer
                max-393View:text-[14px]"
                onClick={() => navigation("/authorize/register/step1")}
              >
                <span> تغییر شماره همراه </span>
                <SlArrowLeft size={13} />
              </button>
            </div>
          </div>

          <CustomeBtn
            width={"100%"}
            height={"40px"}
            text={"ورود به حساب"}
            type={"submit"}
            classNames={"mt-5"}
            bgColor={"#0588F0"}
          />

          <div className="goto-home-btn-control flex justify-center">
            <GotoHomeBtn classNames={"mt-2 w-[150px]"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterStep2;
