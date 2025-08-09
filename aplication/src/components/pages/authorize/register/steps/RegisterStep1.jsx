import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TbSmartHome } from "react-icons/tb";
import { step1InputData } from "../../../../../core/constant";
import { RegisterArrow } from "../../../../partials/icons";
import { BtnLoadingSpiner, CustomeBtn, GotoHomeBtn } from "../../../../common";
import { registerFormValidation } from "../../../../../core/utility/validation";
import { postLoginData } from "../../../../../core/services/api";
import { toast } from "react-toastify";
import { changeRegisterSteper } from "../../../../../redux/actions";
import { setLocalStorageItemHook } from "../../../../../core/hooks";
import { useNavigate } from "react-router-dom";

const RegisterStep1 = () => {
  const dispatch = useDispatch();
  const navigation  = useNavigate()

  const initialValus = {
    nationalcode: "",
    mobile: "",
  };

  const { mutate, isLoading } = postLoginData(
    "loginPostData",
    "/Account/RegisterRequest"
  );

  const formSubmitHandler = async (event) => {
    console.log(event);
    setLocalStorageItemHook("mobile", event.mobile)
    setLocalStorageItemHook("nationalcode", event.nationalcode)
    mutate(event, {
      onSuccess: (response) => {
        console.log("login response ==>", response.data);
        toast.success("عملیات با موفقیت انجام شد😍😍");
        dispatch(changeRegisterSteper(2));
        setLocalStorageItemHook("code", response.data.value.code)
        setLocalStorageItemHook("token", response.data.message)
        navigation("/authorize/register/step2")
      },
      onError: (response) => {
        console.log("errorrrrr ==>", response)
        toast.error("مشکلی پیش اومده لطفا دوباره امتحان کنید")
      }
    });
  };

  const gotoHomeHandler = () => {
    navigation("/")
  }

  return (
    <div className="step-1 w-full">
      <div className="top w-full">
      </div>
      <div className="bottom mt-8 max-881View:flex max-881View:flex-col max-881View:items-center">
        <h3>
          <p className="text-2xl text-[#1C2024] font-[bYekanBold]">
            به عباس خوش اومدی!
          </p>
          <p className="text-xs text-[#8B8D98] mt-1 font-[bYekanBold]">
            برای ثبت نام لطفا شماره همراه خود را وارد کنید
          </p>
        </h3>
        <div className="form-control w-[80%] mt-5 flex flex-col items-center">
          <Formik
            onSubmit={formSubmitHandler}
            initialValues={initialValus}
            validationSchema={registerFormValidation}
          >
            <Form className="w-full flex flex-col gap-4 mt-3">
              {step1InputData.map((item, index) => {
                console.log(item);
                return (
                  <div className={`${item.holderClassName}`} key={index}>
                    <p className="font-[bYekanBold] text-[14px] indent-1.5">
                      {item.label}
                    </p>
                    <div className="input-control relative flex items-center mt-2.5 justify-between">
                      <TbSmartHome
                        size={21}
                        color="#1C2024"
                        className="absolute right-3.5 top-2"
                      />
                      <Field
                        type={item.inputType}
                        className={`bg-[#F0F0F3] text-black ${item.inputClassNames}
                          placeholder:text-[#B9BBC6] font-[bYekanBold] p-2
                          outline-0 border-0 rounded-xl indent-9`}
                        placeholder={item.placeholder}
                        name={item.name}
                      />
                      <ErrorMessage
                        component={"p"}
                        className="text-red-600 font-[bYekanBold] text-xs absolute bottom-[-15px] right-2.5"
                        name={item.name}
                      />
                      {item.children && (
                        <>
                          <div className="verfayCode-item w-[30%] h-11 bg-[#F0F0F3] rounded-xl mr-1"></div>
                          <RegisterArrow
                            size={43}
                            classNames={"cursor-pointer mr-1"}
                          />
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
              {!isLoading ? (
                <CustomeBtn
                  width={"100%"}
                  height={"40px"}
                  text={"ارسال کد نایید"}
                  classNames={"mt-2"}
                  type={"submit"}
                  bgColor={"#0588F0"}
                />
              ) : (
                <BtnLoadingSpiner
                  textContent={"درحال ارسال اطلاعات"}
                  classNames={"bg-[#0588F0] rounded-3xl text-white cursor-pointer py-5 mt-2"}
                  width={"100%"}
                  height={"40px"}
                  spinerThumbColor={"text-white"}
                  spinerTrackColor={"fill-blue-600"}
                />
              )}
            </Form>
          </Formik>
          <p className="question-text-control font-[bYekanBold] text-xs text-center mt-3">
            <span> حساب کاربری دارید؟ </span>
            <span className="text-[#0588F0] underline cursor-pointer">
              ورود به حساب کاربری
            </span>
          </p>
          <GotoHomeBtn classNames={"mt-6"} btnClick={gotoHomeHandler} />
        </div>
      </div>
    </div>
  );
};

export default RegisterStep1;
