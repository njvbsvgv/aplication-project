import sliderPic from "../../assets/photos/registerCardSlider.svg";

const RegisterSlider = () => {
  return (
    <div className="w-[20vw] bg-[#0090FF] rounded-[20px]
      text-right flex flex-col gap-y-5 text-[#FCFCFD] pb-3"
    >
      <div className="top p-3.5 pb-0">
        <button>Logo</button>
        <p className="text-xl text-[#FCFCFD] font-[bYekanBold]"> صرافی عباس </p>
        <p className="text-[14px] text-[#FCFCFD]">
          هرجا که هستی پولتو نقد کن
        </p>
        <div className="text-control mt-14">
          <p className="text-[15px] "> سود و زیان شما </p>
          <p className="text-[12px] font-bold"> یه توضیح کوتاه دربارش که چیکار میکنه و منظور رو برسونه </p>
        </div>
      </div>
      <div className="bottom">
        <div className="mini-slide-control">
          <img src={sliderPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterSlider;
