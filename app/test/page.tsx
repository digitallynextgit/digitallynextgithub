"use client";

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaBullseye,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
  FaQuoteLeft,
  FaEye,
  FaDollarSign,
  FaTrophy
} from "react-icons/fa";
import Image from "next/image";
// import Orb from "@/components/reactbits/orb";
// import DotGrid from "@/components/reactbits/dotgrid";
// import Galaxy from "@/components/reactbits/galaxy";
import { Features } from "@/components/features";
import { AnimatedList } from "@/components/magicui/animated-list";
import LightRays from "@/components/reactbits/lightrays";
import { Globe } from "@/components/ui/globe"




export default function TestPage() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs()); // update every second
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);
  return (
    <div className="min-h-screen  from-gray-50 via-white to-gray-100">
      {/* Hero Section */}

      <section className="relative w-full bg-black text-white md:py-2 h-[100vh]  flex justify-center items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">

          <div style={{ width: '100%', height: '100%', position: 'relative' }}>

            <LightRays

              raysOrigin="top-center"

              raysColor="#00ffff"

              raysSpeed={1.5}

              lightSpread={0.8}

              rayLength={1.2}

              followMouse={true}

              mouseInfluence={0.1}

              noiseAmount={0.1}

              distortion={0.05}

              className="custom-rays"

            />
            {/* <Galaxy /> */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-center  gap-6 lg:gap-8">
            {/* Left Image - Hidden on mobile, visible on tablet+ */}
            {/* <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/1.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div> */}

            {/* Center Content */}
            <div className="flex flex-col justify-center items-center text-center  max-w-4xl mt-32">
              <p className="text-xs sm:text-sm font-bold text-red-500 mb-2 sm:mb-3">
                {now.format("dddd, D MMMM YYYY")}
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
                Digital Campaign on Social Cause for Hearing Devices
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl leading-relaxed px-2">
                Breaking the social taboo to create a high level of awareness where the client is a flag bearer in the bringing the change.
              </p>

              {/* Mobile Images - Only visible on mobile */}
              <div className="flex md:hidden gap-4 mb-6">
                <Image
                  src="/images/internship/1.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
                />
                <Image
                  src="/images/internship/2.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Image - Hidden on mobile, visible on tablet+ */}
            {/* <div className="hidden md:block flex-shrink-0">
              <Image
                src="/images/internship/2.webp"
                alt=""
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[300px] hover:rotate-2 hover:transform hover:scale-105 transition-all duration-300"
              />
            </div> */}
          </div>

          {/* Time Display */}
          <div className="flex justify-center sm:justify-end items-center mt-6 sm:mt-8">
            <p className="text-sm sm:text-base font-extrabold">
              {now.format("HH:mm:ss")}
            </p>
          </div>
        </div>

        {/* Pattern overlay */}
        {/* <div className="absolute inset-0 z-20 opacity-10 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-repeat"
            style={{ backgroundImage: "url('/podcast/pattern-bg.svg')" }}
          ></div>
        </div> */}
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
         {/* Client Profile */}
          <section className="relative bg-gradient-to-br from-red-600/10 via-white to-[#00D6E8]/10 rounded-3xl p-8 shadow-xl border border-red-600/20 w-[45%] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-[#00D6E8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00D6E8]/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
          
                <h2 className="text-2xl font-semibold   text-red-500 group-hover:scale-105 transition-transform duration-300">Client Profile</h2>
              </div>
              <AnimatedList>
                <div className="grid sm:grid-cols-1 gap-4 text-left">
                  <div className="bg-gradient-to-r from-red-600/10 to-[#00D6E8]/10 rounded-2xl p-4 border border-red-600/20 hover:border-[#00D6E8]/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-red-600 mb-1 group-hover/item:text-[#00D6E8] transition-colors duration-300">Industry</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">Healthcare Tech</div>
                  </div>
                  <div className="bg-gradient-to-r from-[#00D6E8]/10 to-red-600/10 rounded-2xl p-4 border border-[#00D6E8]/20 hover:border-red-600/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-[#00D6E8] mb-1 group-hover/item:text-red-600 transition-colors duration-300">Category</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">Hearing Aids-Accessories-Software</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-600/10 to-[#00D6E8]/10 rounded-2xl p-4 border border-red-600/20 hover:border-[#00D6E8]/40 hover:shadow-lg hover:scale-105 transition-all duration-300 group/item">
                    <div className="text-sm font-semibold text-red-600 mb-1 group-hover/item:text-[#00D6E8] transition-colors duration-300">Region</div>
                    <div className="text-base font-semibold text-gray-900 group-hover/item:text-gray-800 transition-colors duration-300">India</div>
                  </div>
                </div>
              </AnimatedList>
            </div>
          </section>


          {/* Objective Goal */}
          <section className="relative bg-white rounded-3xl hover:scale-105 transition-transform duration-500 p-8 shadow-xl border border-gray-100 w-[55%]">
            <div className="flex flex-col h-full">

              <div className=" relative flex size-full  items-center justify-center flex-col overflow-hidden border rounded-3xl">
                <div className="flex items-center flex-col mb-6 ">
                  <div className=" flex items-center justify-center flex-col text-left -translate-y-12 p-10 ">
                    <h2 className="text-3xl font-semibold  mb-4 text-[#00d6e8] hover:scale-110 transition-transform duration-300">Objective Goal</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                      Build a Movement along with strong brand recall and enhanced media attention including global social councils. All from Digital replacing TV spend.
                    </p>
                  </div>
                  <Globe className="top-28" />
                </div>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </div>
          </section>
        </div>

        {/* Solution Proposed */}
        {/* <section className=" from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-8">
            <div className=" flex items-center justify-center">
             
            </div>
            <h2 className="text-3xl font-black text-green-900">Solution Proposed</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-green-900 mb-4">Approach</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                 {[
                 "Mix of Strategy",
                 "Functional",
                 "Operational"
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-green-300">
                    <div className="text-sm font-semibold text-green-800">{area}</div>
                  </div>
                ))}
              </div>
              <p className="text-lg text-green-800 mb-6">Mix of Strategy, Functional and Operational pursuits</p>

              <h4 className="text-lg font-bold text-green-900 mb-4">Focus Areas:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  "Social Media",
                  "Digital PR",
                  "Thought Leadership Forums and Bodies",
                  "Local Industry Associations Communiqué",
                  "Employer Branding",
                  "Brand Ambassador Engagement"
                ].map((area, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-green-300">
                    <div className="text-sm font-semibold text-green-800">{area}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-green-900 mb-4">Strategic Marketing Support:</h4>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Themes and Content manifestation Planning",
                  "Visual Communication Planning",
                  "Digital-Social Media Planning",
                  "Digital PR and Publications Planning",
                  "Data and Analytics"
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-green-300">
                    <div className="text-sm font-semibold text-green-800">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-green-900 mb-4">Core Digital Assets:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Microsite",
                  "Engagement Promotional Assets",
                  "Podcast- Audio and Video",
                  "360 degree Digital Social Media calendar set up and Roll Out",
                  "Digital PR Calendar including UGC distribution"
                ].map((asset, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-green-300">
                    <div className="text-sm font-semibold text-green-800">{asset}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}


        <Features />


        {/* Impact/Success/RoI */}
        <section className=" from-red-50 via-white to-red-50 border-2 border-red-200 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">

            <h2 className="text-3xl font-black text-gray-900">Impact/Success/RoI</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Coverage</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-2xl font-black" style={{ color: '#00D6E8' }}>PAN India</div>
                  <div className="text-sm text-red-600 font-semibold">Geographic Reach</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-2xl font-black" style={{ color: '#00D6E8' }}>News Channels</div>
                  <div className="text-sm text-red-600 font-semibold">Media Coverage</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border-2 border-red-200 shadow-lg">
                  <div className="text-2xl font-black" style={{ color: '#00D6E8' }}>Media Houses</div>
                  <div className="text-sm text-red-600 font-semibold">Publications</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-red-700 font-medium">
                <li>• Longevity to the BTL activities</li>
                <li>• Minimum 10 Million reach</li>
                <li>• Extensive Media activation by drawing attention of International Media and organizations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results & Impact Card */}
        <section className="relative  from-red-50 via-white to-red-50 rounded-3xl p-8 shadow-2xl border-2 border-red-200 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full  from-red-400" style={{ background: `linear-gradient(to bottom right, #ef4444, #00D6E8)` }}></div>
            <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full opacity-15"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">

              <h2 className="text-3xl font-black text-gray-900">Campaign Results & Impact</h2>
            </div>

            {/* Main Results Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Media Recognition Card */}
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0  from-red-500/5 to-red-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <FaEye className="text-red-600 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Media Recognition</h3>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-5xl font-black mb-2" style={{ color: '#00D6E8' }}>400%</div>
                    <div className="text-lg text-red-600 font-semibold">Times More Recognition</div>
                    <div className="text-sm text-gray-600 mt-2">Exponential increase in media coverage and brand visibility</div>
                  </div>
                </div>
              </div>

              {/* Revenue Growth Card */}
              <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0  from-red-500/5 to-red-500/5 rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <FaDollarSign className="text-red-600 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Revenue Growth</h3>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-5xl font-black mb-2" style={{ color: '#00D6E8' }}>30%</div>
                    <div className="text-lg text-red-600 font-semibold">Revenue Increase</div>
                    <div className="text-sm text-gray-600 mt-2">From disruptive digital campaign strategies</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Expected vs Achieved */}
        {/* <section className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <FaRocket className="text-orange-600 text-lg" />
            </div>
            <h2 className="text-3xl font-black text-gray-900">Expected vs Achieved</h2>
          </div>
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
            <p className="text-lg text-orange-800 leading-relaxed">
              Data not provided in the source material.
            </p>
          </div>
        </section> */}

        {/* Learnings and Way Forward */}
        {/* <section className=" from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center">
              <FaGraduationCap className="text-blue-700 text-lg" />
            </div>
            <h2 className="text-3xl font-black text-blue-900">Learnings and Way Forward – Pivots / Iterations</h2>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-blue-300">
            <p className="text-lg text-blue-800 leading-relaxed">
              Launch of a high end Judaica Art gallery and 5 Artists for International Markets-US | UK.
            </p>
          </div>
        </section> */}

        {/* Testimonial Section */}
        {/* <section className=" from-gray-800 to-gray-900 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center">
              <FaQuoteLeft className="text-gray-300 text-lg" />
            </div>
            <h2 className="text-3xl font-black">Testimonial</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-lg text-gray-300 leading-relaxed italic">
              No testimonial provided in the source material.
            </p>
          </div>
        </section> */}

      </div>
    </div>
  );
}