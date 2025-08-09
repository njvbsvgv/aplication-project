import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TbSmartHome } from "react-icons/tb";
import { step1InputData } from "../../../../../core/constant/logIn/InputData";
import { RegisterArrow } from "../../../../partials/icons";
import { BtnLoadingSpiner, CustomeBtn } from "../../../../common";
import { postLoginData } from "../../../../../core/services/api";
import { toast } from "react-toastify";
import { changeRegisterSteper } from "../../../../../redux/actions";
import { setLocalStorageItemHook } from "../../../../../core/hooks";
import { useNavigate } from "react-router-dom";
import { logInFormValidation } from "../../../../../core/utility/validation/registerFormValidation";

const LogInStep1 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const initialValus = {
    mobile: "",
  };

  const { mutate, isLoading } = postLoginData("loginPostData", "/Account/LoginRequest");

  const formSubmitHandler = async (event) => {
    console.log("Form Values:", event);
    const payload = { mobile: String(event.mobile) };
    setLocalStorageItemHook("mobile", payload.mobile);

    mutate(payload, {
      onSuccess: (response) => {
        console.log("login response ==>", response.data);

        if (!response.data.isSuccess) {
          toast.error(response.data.message);
          return;
        }
        if (response.data.message) {
          setLocalStorageItemHook("token", JSON.stringify(response.data.message));
        } else {
          toast.error("توکن دریافتی از سرور نامعتبر است.");
          return;
        }
        if (response.data.value?.code) {
          setLocalStorageItemHook("code", response.data.value.code);
        } else {
          toast.error("کد تأیید دریافتی از سرور موجود نیست.");
          return;
        }

        toast.success("عملیات با موفقیت انجام شد😍😍");
        dispatch(changeRegisterSteper(2));
        navigation("/authorize/login/step2");
      },
      onError: (error) => {
        console.log("Error Response:", error.response);
        const errorMsg =
          error.response?.data?.message ??
          "مشکلی پیش اومده لطفا دوباره امتحان کنید";
        toast.error(errorMsg);
      },
    });
  };

  const gotoHomeHandler = () => {
    navigation("/");
  };

  return (
    <div className="step-1 w-full">
      <div className="bottom mt-8 max-881View:flex max-881View:flex-col max-881View:items-center">
        <h3>
          <div className="flex items-center gap-[310px]">
            <p className="text-center text-2xl text-[#1C2024] font-[bYekanBold]">
              خوش برگشتی
            </p>
            <div className="hidden md:flex w-[76px] h-[40px] border border-[#E5E5E5] rounded-[25px] items-center justify-center gap-3">
              <TbSmartHome size={24} className="text-blue-500" />
              <span className="text-blue-200">&gt;</span>
            </div>
          </div>
          <p className="text-xs text-[#8B8D98] mt-1 font-[bYekanBold]">
            برای ورود شماره همراه و رمزعبور حساب کاربری خود را وارد کنید
          </p>
        </h3>
        <div className="form-control w-[80%] mt-5 flex flex-col items-center">
          <Formik
            onSubmit={formSubmitHandler}
            initialValues={initialValus}
            validationSchema={logInFormValidation}
          >
            <Form className="w-full flex flex-col gap-4 mt-3">
              {step1InputData.map((item, index) => (
                <div className={`${item.holderClassName}`} key={index}>
                  <p className="font-[bYekanBold] text-[14px] indent-1.5">{item.label}</p>
                  <div className="input-control relative flex items-center mt-2.5 justify-between">
                    <Field
                      type={item.name === "mobile" ? "text" : item.inputType}
                      className={`bg-[#F0F0F3] text-black ${item.inputClassNames} placeholder:text-[#B9BBC6] font-[bYekanBold] p-2 outline-0 border-0 rounded-xl indent-9`}
                      placeholder={item.placeholder}
                      name={item.name}
                    />
                    <ErrorMessage
                      component="p"
                      className="text-red-600 font-[bYekanBold] text-xs absolute bottom-[-15px] right-2.5"
                      name={item.name}
                    />
                    {item.children && (
                      <>
                        <div className="verfayCode-item w-[30%] h-11 bg-[#F0F0F3] rounded-xl mr-1"></div>
                        <RegisterArrow size={43} classNames="cursor-pointer mr-1" />
                      </>
                    )}
                  </div>
                  {item.name === "mobile" && (
                    <div className="w-[267px] h-[40px] flex gap-[8px] rounded-[48px] pt-[8px] border border-[#3772FF] text-[#3772FF] mt-6">
                      <TbSmartHome className="mr-2 pb-1" size={28} />
                      <h3>دسترسی به شماره تماس ندارید؟</h3>
                    </div>
                  )}
                </div>
              ))}
              {!isLoading ? (
                <CustomeBtn
                  width="100%"
                  height="40px"
                  text="ارسال کد تایید"
                  classNames="mt-2"
                  type="submit"
                  bgColor="#0588F0"
                />
              ) : (
                <BtnLoadingSpiner
                  textContent="درحال ارسال اطلاعات"
                  classNames="bg-[#0588F0] rounded-3xl text-white cursor-pointer py-5 mt-2"
                  width="100%"
                  height="40px"
                  spinerThumbColor="text-white"
                  spinerTrackColor="fill-blue-600"
                />
              )}
            </Form>
          </Formik>
          <p className="question-text-control font-[bYekanBold] text-xs text-center mt-3">
            <span>حساب کاربری ندارید؟</span>
            <span className="text-[#0588F0] underline cursor-pointer">ایجاد حساب کاربری </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInStep1;