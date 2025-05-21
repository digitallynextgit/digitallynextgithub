"use client";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import React, { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-[0vw] right-[1vw] z-20 flex items-center">
      <span className="text-[#E10600] lg:text-[1.5vw] font-bold tracking-widest bg-white rounded-full px-[0.8vw] py-[0.4vw]">
        {time}
      </span>
    </div>
  );
}

function BlinkingDot() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setOn((v) => !v), 600);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className={`ml-1 w-3 h-3 rounded-full inline-block align-middle ${
        on ? "bg-[#E10600]" : "bg-transparent"
      } transition-all duration-200 `}
    />
  );
}

export default function BannerAssets() {
  return (
    <div className="fixed inset-0  z-20">
      {/* White background inside brackets */}
      <div className="absolute inset-[3vw] " />
      {/* Top Left Bracket */}
      <div className="absolute top-[2vw] left-[2vw] z-20">
        <div className="w-[5vw] h-[0.4vw] bg-[#E10600]" />
        <div className="w-[0.4vw] h-[5vw] bg-[#E10600]" />
      </div>
      {/* Top Right Bracket */}
      <div className="absolute top-[2vw] right-[2vw] z-20 flex flex-col items-end">
        <div className="w-[5vw] h-[0.4vw] bg-[#E10600]" />
        <div className="w-[0.4vw] h-[5vw] bg-[#E10600] mt-[-0.4vw]" />
      </div>
      {/* Bottom Left Bracket */}
      <div className="absolute bottom-[2vw] left-[2vw] z-20 flex flex-col">
        <div className="w-[0.4vw] h-[5vw] bg-[#E10600]" />
        <div className="w-[5vw] h-[0.4vw] bg-[#E10600] mt-[-0.4vw]" />
      </div>
      {/* Bottom Right Bracket */}
      <div className="absolute bottom-[2vw] right-[2vw] z-20 flex flex-col items-end">
        <div className="w-[0.4vw] h-[5vw] bg-[#E10600]" />
        <div className="w-[5vw] h-[0.4vw] bg-[#E10600] mt-[-0.4vw]" />
      </div>

      {/* Top Left: Digitally Next */}
      <div className="absolute top-[3vw] left-[4vw] z-30 flex items-center">
        <Link
          href="/"
          className="text-[#E10600] font-bold text-[4.5vw] lg:text-[1.5vw] decoration-none bg-white rounded-full px-[0.8vw] py-[0.4vw]"
        >
          Digitally Next
        </Link>
      </div>
      {/* Top Right: Hamburger Menu */}
      <div className="absolute top-[3vw] right-[4vw] z-[999] flex items-center -mt-1 md:mt-0">
        <HamburgerMenu />
      </div>
      {/* Bottom Left: REC */}
      <div className="absolute bottom-[3vw] left-[4vw] z-30 flex items-center bg-white rounded-full px-[0.8vw] py-[0.4vw]">
        <span className="text-black font-bold text-[4vw] md:text-[1.5vw]">REC</span>
        <BlinkingDot />
      </div>
      {/* Bottom Right: Digital Clock */}
      <div className="absolute bottom-[3vw] right-[2vw] z-30 flex items-center ">
        <DigitalClock />
      </div>
      <div className="absolute top-[2vw] left-[2vw] z-20">
        <div className="w-[5vw] h-[0.4vw] bg-[#E10600]" />
        <div className="w-[0.4vw] h-[5vw] bg-[#E10600]" />
      </div>
      {/* ...repeat for other assets, using only red and white */}
    </div>
  );
}
