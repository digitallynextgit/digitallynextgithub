"use client";

import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
// import { staggerContainer } from "../utils/motion";
import ExploreCard from "./ExploreCard";
import { caseStudies } from "../data/case-studies";

// First section - 4 case studies
const exploreWorldsSection1 = [
  {
    id: "case-1",
    imgUrl: "/images/full-time/1.webp",
    title: caseStudies[0].title,
    description: caseStudies[0].oneLiner,
    industry: caseStudies[0].industry,
    impact: caseStudies[0].impact,
    slug: caseStudies[0].slug,
  },
  {
    id: "case-2",
    imgUrl: "/images/full-time/2.webp",
    title: caseStudies[1].title,
    description: caseStudies[1].oneLiner,
    industry: caseStudies[1].industry,
    impact: caseStudies[1].impact,
    slug: caseStudies[1].slug,
  },
  {
    id: "case-3",
    imgUrl: "/images/full-time/3.webp",
    title: caseStudies[2].title,
    description: caseStudies[2].oneLiner,
    industry: caseStudies[2].industry,
    impact: caseStudies[2].impact,
    slug: caseStudies[2].slug,
  },
  {
    id: "case-4",
    imgUrl: "/images/full-time/4.webp",
    title: caseStudies[3].title,
    description: caseStudies[3].oneLiner,
    industry: caseStudies[3].industry,
    impact: caseStudies[3].impact,
    slug: caseStudies[3].slug,
  },
];

// Second section - remaining 4 case studies
const exploreWorldsSection2 = [
  {
    id: "case-5",
    imgUrl: "/images/full-time/5.webp",
    title: caseStudies[4].title,
    description: caseStudies[4].oneLiner,
    industry: caseStudies[4].industry,
    impact: caseStudies[4].impact,
    slug: caseStudies[4].slug,
  },
  {
    id: "case-6",
    imgUrl: "/images/full-time/6.webp",
    title: caseStudies[5].title,
    description: caseStudies[5].oneLiner,
    industry: caseStudies[5].industry,
    impact: caseStudies[5].impact,
    slug: caseStudies[5].slug,
  },
  {
    id: "case-7",
    imgUrl: "/images/full-time/7.webp",
    title: caseStudies[6].title,
    description: caseStudies[6].oneLiner,
    industry: caseStudies[6].industry,
    impact: caseStudies[6].impact,
    slug: caseStudies[6].slug,
  },
  {
    id: "case-8",
    imgUrl: "/images/full-time/8.webp",
    title: caseStudies[7].title,
    description: caseStudies[7].oneLiner,
    industry: caseStudies[7].industry,
    impact: caseStudies[7].impact,
    slug: caseStudies[7].slug,
  },
];

const ExploreSection = () => {
  const [activeSection1, setActiveSection1] = useState("case-2");
  const [activeSection2, setActiveSection2] = useState("case-6");
  const [currentCarouselSection, setCurrentCarouselSection] = useState(1);

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 flex justify-center items-center gap-40">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-red-600 mb-2">
            Impact Stories
            <br />
          </h2>
          {/* Carousel Navigation */}
          <div className="flex justify-center">
            <div className="flex gap-2 sm:gap-4">
              <button
                onClick={() => setCurrentCarouselSection(1)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  currentCarouselSection === 1
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
                }`}
              >
                {`<`}
              </button>
              <button
                onClick={() => setCurrentCarouselSection(2)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                  currentCarouselSection === 2
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-red-600 border-2 border-red-600 hover:bg-red-50"
                }`}
              >
                {`>`}
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Content */}
        <AnimatePresence mode="wait">
          {currentCarouselSection === 1 && (
            <div
              key="section-1"
              className="flex flex-col lg:flex-row min-h-[70vh] gap-8 items-start lg:translate-x-[-5vw]"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-white leading-tight lg:leading-[76.8px] lg:max-w-[170px] flex-shrink-0 text-center lg:text-left">
                Choose the{" "}
                <span className="font-extrabold text-white">case study</span>{" "}
                you want to explore
              </h2>
              {/* Mobile Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-5 flex-1 justify-center lg:justify-start w-full">
                {exploreWorldsSection1.map((world, index) => (
                  <ExploreCard
                    key={world.id}
                    {...world}
                    index={index}
                    active={activeSection1}
                    handleClick={setActiveSection1}
                  />
                ))}
              </div>
            </div>
          )}

          {currentCarouselSection === 2 && (
            <div className="flex flex-col lg:flex-row min-h-[70vh] gap-8 items-start lg:translate-x-[-5vw]">
              <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold text-white leading-tight lg:leading-[76.8px] lg:max-w-[170px] flex-shrink-0 text-center lg:text-left">
                Explore{" "}
                <span className="font-extrabold text-white">more stories</span>{" "}
                of transformation
              </h2>
              {/* Mobile Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-5 flex-1 justify-center lg:justify-start w-full">
                {exploreWorldsSection2.map((world, index) => (
                  <ExploreCard
                    key={world.id}
                    {...world}
                    index={index}
                    active={activeSection2}
                    handleClick={setActiveSection2}
                  />
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExploreSection;
