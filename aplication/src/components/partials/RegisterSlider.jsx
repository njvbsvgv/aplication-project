import sliderPic from "../../assets/photos/registerCardSlider.svg";

const RegisterSlider = ({ bgColor, containerHeight, containerMb, sliderImageMt }) => {
  return (
    <div
      className={`w-full ${
        containerHeight ? "" : "h-full"
      } bg-[${bgColor}] rounded-[20px]
      text-right flex flex-col justify-between gap-y-5 text-[#FCFCFD] pb-3`}
      style={containerHeight ? { height: `${containerHeight}px` } : null}
    >
      <div className="top mt-10 mr-8">
        <button>Logo</button>
        <p className="text-3xl text-[#FCFCFD] font-[bYekanBold]">
          صرافی عباس
        </p>
        <p className="text-[18px] text-[#FCFCFD] mt-1.5">
          هرجا که هستی پولتو نقد کن
        </p>
      </div>
      <div
        className="bottom pb-5"
        style={containerMb ? { marginBottom: `${containerMb}px` } : null}
      >
        <div className="text-control mr-8 mb-3.5">
          <p className="text-xl font-[bYekanBold]"> سود و زیان شما </p>
          <p className="text-[12px] font-[bYekanBold] font-bold">
            یه توضیح کوتاه دربارش که چیکار میکنه و منظور رو برسونه
          </p>
        </div>
        <div className="mini-slide-control"
          style={sliderImageMt ? {marginTop: `${sliderImageMt}px`} : null}
        >
          <img src={sliderPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterSlider;
