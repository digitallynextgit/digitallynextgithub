"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import teamMembers from "@/app/data/carouselImages"; // your image + name + role data

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const getOffset = (i: number) => {
    const total = teamMembers.length;
    return (i - currentIndex + total) % total;
  };

  const updateIndex = (index: number) => {
    if (animating) return;
    setAnimating(true);
    const total = teamMembers.length;
    setCurrentIndex((index + total) % total);
    setTimeout(() => setAnimating(false), 800);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") updateIndex(currentIndex - 1);
      if (e.key === "ArrowRight") updateIndex(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className="relative flex flex-col items-center mt-32 overflow-hidden">
      <h1 className="text-[5rem] md:text-[7rem] font-extrabold uppercase text-center text-transparent bg-clip-text bg-gradient-to-b from-red-600/40 to-transparent">
        Gallery
      </h1>

      <div className="relative w-full max-w-[1200px] h-[450px] mt-8 perspective">
        {/* Arrows + Images are inside one relative block */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Mobile arrows positioned at the top */}
          <div className="md:hidden absolute top-0 left-0 right-0 flex justify-between px-[8vw] py-[50vw] z-40">
            <button
              className="w-10 h-10 rounded-full bg-red-600/90 text-white text-2xl flex items-center justify-center hover:bg-black/80 transition"
              onClick={() => updateIndex(currentIndex - 1)}
            >
              ‹
            </button>
            <button
              className="w-10 h-10 rounded-full bg-red-600/90 text-white text-2xl flex items-center justify-center hover:bg-black/80 transition"
              onClick={() => updateIndex(currentIndex + 1)}
            >
              ›
            </button>
          </div>

          {/* Carousel Cards */}
          <div className="relative w-full h-full flex justify-center items-center transform-style preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            {teamMembers.map((member, i) => {
              const offset = getOffset(i);
              const base =
                "absolute w-[280px] h-[380px] bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-700 cursor-pointer";
              let transform = "";
              let zIndex = "z-0";
              let opacity = "opacity-0 pointer-events-none grayscale";

              if (offset === 0) {
                transform = "scale-[1.1] translate-z-0";
                zIndex = "z-20";
                opacity = "opacity-100 pointer-events-auto";
              } else if (offset === 1) {
                transform = "translate-x-[200px] scale-[0.9] -translate-z-[100px]";
                zIndex = "z-10";
                opacity = "opacity-90";
              } else if (offset === 2) {
                transform = "translate-x-[400px] scale-[0.8] -translate-z-[300px]";
                zIndex = "z-0";
                opacity = "opacity-70";
              } else if (offset === teamMembers.length - 1) {
                transform = "-translate-x-[200px] scale-[0.9] -translate-z-[100px]";
                zIndex = "z-10";
                opacity = "opacity-90";
              } else if (offset === teamMembers.length - 2) {
                transform = "-translate-x-[400px] scale-[0.8] -translate-z-[300px]";
                zIndex = "z-0";
                opacity = "opacity-70";
              }

              return (
                <div
                  key={i}
                  className={`${base} ${transform} ${zIndex} ${opacity} mt-[-20vw]`}
                  onClick={() => updateIndex(i)}
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={800}
                    priority={offset === 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
