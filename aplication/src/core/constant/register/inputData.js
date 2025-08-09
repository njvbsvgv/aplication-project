export const step1InputData = [
  {
    id: 1,
    label: "شماره همراه",
    inputType: "text",
    placeholder: "مثال: **********09",
    name: "mobile",
    holderClassName: "phonenumber-item-control",
    inputClassNames: "w-[100%]",
    children: false
  },
  {
    id: 2,
    label: "کد ملی",
    inputType: "text",
    placeholder: "کد ملی خود را وارد کنید",
    name: "nationalcode",
    holderClassName: "natinalCode-item-control",
    inputClassNames: "w-[100%]",
    children: false
  },
  {
    id: 3,
    label: "کپچای امنیتی",
    inputType: "text",
    placeholder: "کد تصویر رو به رو را وارد کنید",
    name: "capcha",
    holderClassName: "capcha-item-control",
    inputClassNames: "w-[50%]",
    children: true
  },
];
