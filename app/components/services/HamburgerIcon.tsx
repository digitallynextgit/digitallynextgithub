"use client";
import React from "react";

interface HamburgerIconProps {
  isMenuOpen: boolean;
}

export default function HamburgerIcon({ isMenuOpen }: HamburgerIconProps) {
  return (
    <div className="flex flex-col justify-between items-center w-[6vw] h-[6vw] md:w-[2vw] md:h-[2vw] cursor-pointer relative">
      <span
        className={`absolute w-full h-[0.6vw] md:h-[0.2vw] bg-red-500 rounded-full transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "rotate-45 top-[50%]" : "top-[25%]"
        }`}
      />
      <span
        className={`absolute w-full h-[0.6vw] md:h-[0.2vw] bg-red-500 rounded-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-0" : "top-[50%]"
        }`}
      />
      <span
        className={`absolute w-full h-[0.6vw] md:h-[0.2vw] bg-red-500 rounded-full transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "-rotate-45 top-[50%]" : "top-[75%]"
        }`}
      />
    </div>
  );
}
