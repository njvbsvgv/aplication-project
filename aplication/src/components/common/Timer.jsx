import React from "react";
import { useTimer } from "react-timer-hook";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.log("⏰ Time expired!"),
  });

  return (
    <div className="flex items-center gap-2 min-393View:px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-sm w-fit
      max-393View:w-[14vw]">
      <svg fill="currentColor" viewBox="0 0 20 20" className="flex-shrink-0 w-5 h-5
        max-393View:w-4 max-393View:h-4 max-393View:relative max-393View:top-0.5 max-393View:right-0.5"
      >
        <path d="M8 3.5a.5.5 0 0 1 .5.5v4l3 1.5a.5.5 0 1 1-.5.866l-3.5-1.75A.5.5 0 0 1 7.5 8V4a.5.5 0 0 1 .5-.5z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
      </svg>
      <span className="font-[bYekanBold] max-393View:text-xs">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}

// برای استفاده:
export const TimerWrapper = ({ timeCounter }) => {
  // زمان 2 دقیقه از الان
  const time = new Date();
  time.setSeconds(time.getSeconds() + timeCounter); // 120 ثانیه = 2 دقیقه

  return <Timer expiryTimestamp={time} />;
};
