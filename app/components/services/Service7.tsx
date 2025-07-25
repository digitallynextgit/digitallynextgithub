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

export default function Service7() {
  return (
    <section className="relative w-full bg-white text-[#E10600] p-2 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="max-w-xl">
        <h2 className="text-[11vw] md:text-[3vw] font-extrabold leading-none mb-6 uppercase">Complete Digital Performance Marketing - Activations & Promotions</h2>
        <p className="text-black text-sm md:text-lg mb-4">
        Search Engine Optimization (SEO), Paid Media Planning and Optimization,Social Media Optimization (SMO),Online Reputation Management (ORM),Influencer Marketing,Personal Branding/Thought Leadership,Digital PR,ASO/Mobile Marketing.
        </p>

        {/* <ul className="text-black text-lg font-semibold space-y-2">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul> */}
      </div>
      <video src="/videos/s4.mp4" autoPlay muted loop className="w-full md:w-[400px] h-full md:h-[400px] object-cover rounded-3xl" />
    </section>
  );
}