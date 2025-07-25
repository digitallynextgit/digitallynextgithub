"use client";
import React from "react";

// const services = [
//   "CREATIVE DIRECTION",
//   "BRANDING",
//   "CAMPAIGN DEVELOPMENT",
//   "STORYBOARDING",
//   "CONTENT STRATEGY",
//   "COMMUNITY BUILDING",
//   "PERFORMANCE DATA ANALYTICS"
// ];

export default function Service9() {
  return (
    <section className="relative w-full bg-white text-[#E10600] p-2 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="text-[11vw] md:text-[3vw] font-extrabold leading-none mb-6 uppercase">Complete Digital Performance Marketing - Campaign Assets Creation</h2>
        <p className="text-black text-sm md:text-lg mb-4">
        Website / Microsite / Landing page, Social Media Setup and Activation, Content Marketing Assets, Visual Communication Assets, Video production, Graphics, Paid Ads Assets
        </p>

      
      </div>
      <video src="/videos/s2.mp4" autoPlay muted loop className="w-full md:w-[400px] h-full md:h-[400px] object-cover rounded-3xl" />
    </section>
  );
}