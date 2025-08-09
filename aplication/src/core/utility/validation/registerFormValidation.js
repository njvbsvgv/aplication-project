import * as Yup from "yup"

export const registerFormValidation = Yup.object({
    nationalcode: Yup.string().required("این فیلد اجباریست"),
    mobile: Yup.string().required("این فیلد اجباریست")
})

export const virfiryCodeValidation = Yup.object({
    code: Yup.string().required("این فیلد اجباریست"),
})
export const logInFormValidation = Yup.object({
    mobile: Yup.string().required("این فیلد اجباریست"),
    // capcha: Yup.string().required("این فیلد اجباریست")
})