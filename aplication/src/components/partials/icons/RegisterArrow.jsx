import React from "react";

const RegisterArrow = ({ size, classNames }) => {
  return (
    <div>
      <svg
        // width="48"
        width={size}
        // height="48"
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classNames}
      >
        <path
          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
          fill="#0588F0"
        />
        <path
          d="M32.0092 14V17.1322C32.0092 17.4261 31.6418 17.5591 31.4537 17.3333C29.6226 15.2875 26.9617 14 24 14C18.4771 14 14 18.4771 14 24C14 29.5228 18.4771 34 24 34C29.5228 34 34 29.5228 34 24"
          stroke="#FCFCFD"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default RegisterArrow;
