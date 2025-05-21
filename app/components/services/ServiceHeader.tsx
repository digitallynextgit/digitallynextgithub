"use client";
import React, { useEffect, useState } from "react";

function BatteryOrMenu() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => setShowMenu((v) => !v), 1000);
    return () => clearInterval(interval);
  }, []);
  return showMenu ? (
    // Hamburger menu icon
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="5" width="32" height="3" rx="1.5" fill="#222" />
      <rect x="4" y="12" width="32" height="3" rx="1.5" fill="#222" />
    </svg>
  ) : (
    // Battery icon
    <div className="flex items-center">
      <span className="mr-2 text-base text-[#222] font-semibold">100%</span>
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="32" height="12" rx="2" fill="#fff" stroke="#222" strokeWidth="2" />
        <rect x="4" y="6" width="28" height="8" rx="1" fill="#222" />
        <rect x="34" y="8" width="4" height="4" rx="1" fill="#fff" stroke="#222" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function ServiceHeader() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-[1000] bg-transparent">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>
      {/* Battery/Menu on the right */}
      <div className="flex items-center">
        <BatteryOrMenu />
      </div>
    </header>
  );
} 