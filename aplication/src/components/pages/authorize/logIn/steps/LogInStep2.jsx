import { useFormik } from "formik";
import {
  getLocalStorageHook,
  setLocalStorageItemHook,
} from "../../../../../core/hooks";
import {
  CustomeBtn,
  GotoHomeBtn
} from "../../../../common";
import OtpInput2 from "../../../../common/Otplnput2";
import { SlArrowLeft } from "react-icons/sl";
import { TbSmartHome } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { virfiryCodeValidation } from "../../../../../core/utility/validation";
import { postLoginData } from "../../../../../core/services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const LogInStep2 = () => {
  const mobile = getLocalStorageHook("mobile", true);
  const code = getLocalStorageHook("code", true);
  const token = getLocalStorageHook("token", true);

  const navigation = useNavigate();

  const { mutate: confirmCodeMutate } = postLoginData("loginPostData", "/Account/LoginRequest");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: virfiryCodeValidation,
    onSubmit: (value, { setFieldValue }) => {
      console.log("value ==>", value);

      if (value.code === code) {
        confirmCodeMutate(
          {
            code: value.code,
            token: token,
            mobile: mobile, 
          },
          {
            onSuccess: (response) => {
              console.log("confirm code ==>", response);
              if (response.data.isSuccess) {
                toast.success(response.data.message);

                if (response.data.value?.accessToken) {
                  setLocalStorageItemHook("accesToken", response.data.value.accessToken);
                }
              } else {
                toast.error(response.data.message);
              }
            },
            onError: (error) => {
              toast.error("خطا در تأیید کد. لطفاً دوباره تلاش کنید.");
            }
          }
        );
      } else {
        toast.error("کد وارد شده اشتباه است😒😒");
        setFieldValue("code", "");
      }
    },
  });

  return (
    <div className="register-step2-container mt-9">
      <div className="title-text-control">
        <h2 className="font-[bYekanBold] text-2xl max-393View:text-xl">تایید شناسایی دو عاملی</h2>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="input-item-control flex flex-col gap-y-3.5 mt-8">
          <h5 className="font-[bYekanBold] text-[16px]">کد شناسایی</h5>

          <div className="otp-input-control flex max-881View:justify-center">
            <OtpInput2
              length={6}
              name="code"
              setFieldValue={formik.setFieldValue}
            />
          </div>
<Link to="/authorize/logIn/step3">
          <div className="w-[316px] bg-[#3772FF33] h-[40px] flex gap-[8px] rounded-[48px] pt-[8px] border border-[#3772FF] text-[#3772FF] mt-6">
            <TbSmartHome className="mr-2 pb-1" size={28} />
            <h3>به کد شناسایی دوعاملی دسترسی ندارید؟</h3>
          </div>
</Link>
          <CustomeBtn
            width="100%"
            height="52px"
            text="تایید کد و ورود"
            type="submit"
            classNames="mt-5 rounded-4xl"
            bgColor="#0588F0"
          />

          <div className="flex w-[109px] h-[40px] border border-[#E5E5E5] mx-auto mt-[40px] rounded-[25px] items-center justify-center gap-3 text-[#3772FF] px-auto">
            <h3>بازگشت</h3>
            <span className="text-blue-200">&gt;</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogInStep2;