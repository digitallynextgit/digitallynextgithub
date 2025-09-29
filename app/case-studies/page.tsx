"use client";

import React, { useState, useEffect } from "react";
// import Link from "next/link";
import dayjs from "dayjs";
// import Image from "next/image";
import ExploreSection from "@/app/components/ExploreSection";

// import { caseStudies } from "@/app/data/case-studies";
// import {
//   CaseStudyIndustry,
//   CaseStudySector,
//   CaseStudyRegion,
// } from "@/types/case-study";
// import CaseStudyCard from "@/components/CaseStudyCard";
import { motion,  } from "framer-motion";



export default function CaseStudiesPage() {
  // const [activeFilter, setActiveFilter] = useState<{
  //   industry: CaseStudyIndustry | "all";
  //   region: CaseStudyRegion | "all";
  //   sector: CaseStudySector | "all";
  // }>({
  //   industry: "all",
  //   region: "all",
  //   sector: "all",
  // });

  // Filter case studies based on selected filters
  // const filteredStudies = caseStudies.filter((study) => {
  //   const industryMatch =
  //     activeFilter.industry === "all" ||
  //     study.industry === activeFilter.industry;
  //   const regionMatch =
  //     activeFilter.region === "all" ||
  //     study.region.includes(activeFilter.region as CaseStudyRegion);
  //   const sectorMatch =
  //     activeFilter.sector === "all" ||
  //     study.sector.includes(activeFilter.sector as CaseStudySector);
  //   return industryMatch && regionMatch && sectorMatch;
  // });
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs()); // update every second
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <main className="min-h-screen bg-white pt-20 pb-16">
      {/* Hero */}
      <section className="relative w-full h-auto flex justify-center items-center overflow-hidden bg-[#1A1A1A] text-white py-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <motion.h1
              className="text-5xl md:text-8xl font-extrabold tracking-tight"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Impact Stories
            </motion.h1>
            <div className="text-center flex flex-row justify-end items-center gap-10">
              <p className="text-sm font-bold">
                {now.format("dddd, D MMMM YYYY")}{" "}
                {/* e.g. Friday, 27 September 2025 */}
              </p>
              <p className="text-base font-extrabold">
                {now.format("HH:mm:ss")} {/* e.g. 14:45:10 */}
              </p>
            </div>

            {/* Images section */}
            <div className="flex flex-wrap lg:flex-row flex-col justify-center items-center gap-4">
              <video
                className="w-1/4 h-1/4 rounded-xl"
                src="/services/s1.mp4"
                autoPlay
                loop
                muted
              />
              <video
                className="w-1/4 h-1/4 rounded-xl"
                src="/services/s2.mp4"
                autoPlay
                loop
                muted
              />
              <video
                className="w-1/4 h-1/4 rounded-xl"
                src="/services/s3.mp4"
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="flex justify-between items-end gap-10 flex-row">
            <motion.p
              className="text-lg mx-auto mb-10 text-red-50 max-w-md"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            >
              Discover how we&apos;ve transformed businesses across industries
              with innovative digital solutions
            </motion.p>

            <p className="text-lg  mx-auto mb-10 text-red-50">
              ( ↓ Scroll Down )
            </p>
          </div>
        </motion.div>
        {/* Ambient animated blobs */}
        <motion.div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-red-500/30 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 12 }}
        />
      </section>
      {/* <section className="py-12 border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-50 py-10 rounded-2xl">
          <div className="flex justify-between items-end gap-10 flex-row">
            <h2 className="text-2xl font-bold text-right mb-8">
              Filter Impact Stories
            </h2>
         
            <div className="flex justify-center mb-6">
              <button
                onClick={() =>
                  setActiveFilter({
                    industry: "all",
                    region: "all",
                    sector: "all",
                  })
                }
                className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
            <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider ">
                Industry
              </div>
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-2">
                <button
                  onClick={() =>
                    setActiveFilter({ ...activeFilter, industry: "all" })
                  }
                  className={`px-3 py-1 rounded-full border transition-colors ${
                    activeFilter.industry === "all"
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() =>
                      setActiveFilter({ ...activeFilter, industry })
                    }
                    className={`px-3 py-1 rounded-full border transition-colors ${
                      activeFilter.industry === industry
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

         
                <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                Region
              </div>
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-2">
                <button
                  onClick={() =>
                    setActiveFilter({ ...activeFilter, region: "all" })
                  }
                  className={`px-3 py-1 rounded-full border transition-colors ${
                    activeFilter.region === "all"
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveFilter({ ...activeFilter, region })}
                    className={`px-3 py-1 rounded-full border transition-colors ${
                      activeFilter.region === region
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

         
             <div className="bg-white/50 p-4 rounded-xl">
              <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                Sector
              </div>
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-2">
                <button
                  onClick={() =>
                    setActiveFilter({ ...activeFilter, sector: "all" })
                  }
                  className={`px-3 py-1 rounded-full border transition-colors ${
                    activeFilter.sector === "all"
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  All
                </button>
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    onClick={() => setActiveFilter({ ...activeFilter, sector })}
                    className={`px-3 py-1 rounded-full border transition-colors ${
                      activeFilter.sector === sector
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Case Studies Grid */}
      {/* <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Impact Stories
          </h2>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="transform transition-all duration-300 hover:scale-[1.01]"
                >
                  <CaseStudyCard study={study} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredStudies.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900">
                No case studies match your filters
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your filter criteria
              </p>
            </div>
          )}
        </div>
      </section> */}

      <section>
        <ExploreSection />
      </section>
    </main>
  );
}
