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

export default function Service6() {
  return (
    <section className="relative w-full bg-white text-[#E10600] p-2 md:p-20 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="text-[11vw] md:text-[3vw] font-extrabold leading-none mb-6 uppercase">Online Community building & development</h2>
        <p className="text-black text-sm md:text-lg mb-4">
        Foster connections with our Online Community Building and Development services.
        </p>

        {/* <ul className="text-black text-lg font-semibold space-y-2">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul> */}
      </div>
      <video src="/services/s2.mp4" autoPlay muted loop className="w-full md:w-1/2 h-full md:h-1/2 object-cover rounded-3xl" />
    </section>
  );
}