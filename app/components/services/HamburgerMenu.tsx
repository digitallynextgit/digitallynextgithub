"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerIcon from "./HamburgerIcon";
import BatteryIcon from "./BatteryIcon";

// Menu items array for easy management
const menuItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'NUGGETS', href: '/nuggets' },
  { label: 'CAREERS', href: '/careers' },
  { label: 'BLOG', href: '/blog' },
  { label: 'INNEWS', href: '/innews' }
];

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Battery to menu transition
  useEffect(() => {
    const interval = setInterval(() => setShowMenu((v) => !v), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Battery/Menu Toggle Button */}
      <button 
        className={`flex justify-center items-center z-50 relative mr-3 focus:outline-none ${showMenu ? "bg-white" : ""} 
        w-8 h-8 md:w-[2vw] md:h-[2vw] rounded-full`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {showMenu ? (
          <HamburgerIcon isMenuOpen={isMenuOpen} />
        ) : (
          <BatteryIcon className=""/>
        )}
      </button>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white bg-opacity-98 flex items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full px-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-2xl md:text-3xl font-bold text-[#111] hover:text-[#E10600] transition-all duration-300 transform hover:scale-110 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          <Link
            href="/contact"
            className={`mt-4 md:mt-6 btn-primary text-lg md:text-xl px-6 md:px-8 py-2 md:py-3 transform hover:scale-105 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${menuItems.length * 100}ms` }}
            onClick={() => setIsMenuOpen(false)}
          >
            GET IN TOUCH
          </Link>
        </nav>
      </div>
    </>
  );
} 