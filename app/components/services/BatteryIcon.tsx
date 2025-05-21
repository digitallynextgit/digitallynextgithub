"use client";
import React from "react";
interface BatteryIconProps {
  className?: string;
}
export default function BatteryIcon({ }: BatteryIconProps) {
  return (
    <div className={`flex items-center justify-center bg-white rounded-full px-2 py-1 md:px-[0.8vw] md:py-[0.4vw] w-[24vw] md:w-[8vw] `}>
      <span className="mr-2 text-[4vw] md:text-[1.2vw] text-[#E10600] font-semibold whitespace-nowrap">
        100%
      </span>
      <svg
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[8vw] h-[8vw] md:w-[2vw] md:h-[2vw]"
      >
        <rect
          x="2"
          y="4"
          width="32"
          height="12"
          rx="2"
          fill="#E10600"
          stroke="#E10600"
          strokeWidth="2"
        />
        <rect x="4" y="6" width="28" height="8" rx="1" fill="white" />
        <rect
          x="34"
          y="8"
          width="4"
          height="4"
          rx="1"
          fill="#E10600"
          stroke="#E10600"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
