import React, { useEffect, useState } from "react";

const OtpInput2 = ({ length, name, setFieldValue }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  useEffect(() => {
    setFieldValue(name, otp.join(""));
  }, [otp, name, setFieldValue]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      const nextSibling =
        e.target.parentNode.querySelectorAll("input")[index + 1];
      nextSibling?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, length).split("");
    const newOtp = Array(length).fill("");
    pasted.forEach((char, i) => {
      newOtp[i] = char;
    });
    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      const prev = e.target.parentNode.querySelectorAll("input")[index - 1];
      prev?.focus();
    }
  };

  return (
    <div dir="ltr" className="flex items-center gap-4 max-393View:gap-2">
      {Array.from({ length }).map((_, index) => (
        <React.Fragment key={index}>
         <input
  type="text"
  maxLength="1"
  value={otp[index]}
  onChange={(e) => handleChange(e, index)}
  onKeyDown={(e) => handleKeyDown(e, index)}
  onPaste={handlePaste}
  className="bg-[#F0F0F3] rounded-[14px] sm:w-[74px] sm:h-[74px] w-[45px] h-[45px]"
  style={{
    textAlign: "center",
    fontSize: "20px",
    border: "none",
    outline: "none",
    boxShadow: "0 0 6px rgba(0,0,0,0.05)",
    fontWeight: "bold",
  }}
/>
          {index === 2 && (
            <span className="mx-1 text-xl text-gray-500 select-none">-</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtpInput2;
