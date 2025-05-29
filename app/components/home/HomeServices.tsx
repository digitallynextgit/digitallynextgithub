"use client";

import React, { useState, useRef } from "react";
// import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Updated app colors based on user specification
const appColors = {
  blue: '#00D4E6',
  red: '#DC3232'
};

// Define services array with all necessary information from service pages
const services = [
  {
    id: 1,
    title: "Digital Branding",
    description: "Unleash the power of strategic storytelling and innovative design to elevate your digital presence and build a digital legacy.",
    videoSrc: "/services/s1.mp4",
    color: appColors.red,
    tags: ["CREATIVE DIRECTION", "BRAND IDENTITY", "VISUAL DESIGN"]
  },
  {
    id: 2,
    title: "Complete Online Demand Generation",
    description: "Drive results and get growth with our Complete Online Demand Generation solutions, turning prospects into loyal customers.",
    videoSrc: "/services/s4.mp4",
    color: appColors.blue,
    tags: ["LEAD GENERATION", "CONVERSION STRATEGY", "CAMPAIGN OPTIMIZATION"]
  },
  {
    id: 3,
    title: "Disruptive Digital Campaigns",
    description: "Break through the noise with our Disruptive Digital Campaigns, designed to captivate, engage, and leave a lasting impact.",
    videoSrc: "/services/s1.mp4",
    color: appColors.red,
    tags: ["CAMPAIGN DEVELOPMENT", "CREATIVE STRATEGY", "AUDIENCE ENGAGEMENT"]
  },
  {
    id: 4,
    title: "Social CRM/ANALYTICS Integration",
    description: "Build connections driving growth with our Social CRM and Analytics Integration Management services.",
    videoSrc: "/services/s3.mp4",
    color: appColors.blue,
    tags: ["DATA ANALYTICS", "SOCIAL MANAGEMENT", "CRM INTEGRATION"]
  },
  {
    id: 5,
    title: "Influencer & Digital PR",
    description: "Amplify your impact with Influencer Marketing, Digital PR, and Personal Branding solutions.",
    videoSrc: "/services/s1.mp4",
    color: appColors.red,
    tags: ["INFLUENCER STRATEGY", "DIGITAL PR", "THOUGHT LEADERSHIP"]
  },
  {
    id: 6,
    title: "Community Building",
    description: "Foster connections with our Online Community Building and Development services.",
    videoSrc: "/services/s2.mp4",
    color: appColors.blue,
    tags: ["ENGAGEMENT STRATEGY", "COMMUNITY MANAGEMENT", "AUDIENCE DEVELOPMENT"]
  },
  {
    id: 7,
    title: "Digital Performance Marketing",
    description: "Comprehensive digital performance marketing services including SEO, Paid Media, SMO, ORM, and more.",
    videoSrc: "/services/s1.mp4",
    color: appColors.red,
    tags: ["SEO", "PAID MEDIA", "SOCIAL OPTIMIZATION"]
  },
  {
    id: 8,
    title: "Viral Marketing",
    description: "Meme Marketing, Viral Marketing, Engagement Marketing strategies that get attention.",
    videoSrc: "/services/s3.mp4",
    color: appColors.blue,
    tags: ["MEME MARKETING", "VIRAL CONTENT", "ENGAGEMENT"]
  },
  {
    id: 9,
    title: "Campaign Assets Creation",
    description: "Website, Microsite, Landing pages, Social Media Setup, Content Marketing Assets, and more.",
    videoSrc: "/services/s2.mp4",
    color: appColors.red,
    tags: ["WEBSITE CREATION", "CONTENT ASSETS", "VISUAL COMMUNICATION"]
  }
];

const HomeServices = () => {
  const [activeService, setActiveService] = useState(services[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle tab changes with scroll - Fixed TypeScript error
  const handleTabClick = (index: number): void => {
    setActiveService(services[index]);
    setActiveTabIndex(index);
    
    // Scroll the tab into view if it's not visible
    const tabElement = document.getElementById(`service-tab-${index}`);
    if (tabElement && tabsContainerRef.current) {
      tabsContainerRef.current.scrollLeft = tabElement.offsetLeft - tabsContainerRef.current.offsetWidth / 2 + tabElement.offsetWidth / 2;
    }
  };

  // Navigation functions for arrow controls
  const goToPrevious = (): void => {
    const newIndex = activeTabIndex === 0 ? services.length - 1 : activeTabIndex - 1;
    handleTabClick(newIndex);
  };

  const goToNext = (): void => {
    const newIndex = activeTabIndex === services.length - 1 ? 0 : activeTabIndex + 1;
    handleTabClick(newIndex);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight">
          Our{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: `2px ${appColors.red}` }}
          >
            Services
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#231942] max-w-xl mx-auto">
          Tailored digital solutions to transform your brand, engage your audience, and drive measurable results.
        </p>
      </div>

      {/* Services Content - Desktop */}
      <div className="hidden md:flex flex-col max-w-7xl mx-auto">
        {/* Tabs Navigation with Arrows */}
        <div className="flex items-center mb-8">
          {/* Left Arrow */}
          <button 
            onClick={goToPrevious}
            className="flex-shrink-0 p-2 mr-2 rounded-full hover:bg-gray-100"
            aria-label="Previous service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          {/* Navigation Tabs - Scrollable */}
          <div 
            ref={tabsContainerRef} 
            id="services-tabs" 
            className="flex flex-1 overflow-x-auto pb-2 scrollbar-hide"
          >
            {services.map((service, index) => (
              <button
                id={`service-tab-${index}`}
                key={service.id}
                onClick={() => handleTabClick(index)}
                className={`relative whitespace-nowrap px-6 py-3 text-base font-bold transition-all duration-300 ${
                  activeTabIndex === index
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {service.title.length > 20 ? `${service.title.substring(0, 20)}...` : service.title}
                {activeTabIndex === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: service.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={goToNext}
            className="flex-shrink-0 p-2 ml-2 rounded-full hover:bg-gray-100"
            aria-label="Next service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Content Display */}
        <div className="flex flex-row justify-between items-start gap-10">
          <div className="w-1/2">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 
                className="text-4xl font-extrabold" 
                style={{ color: activeService.color }}
              >
                {activeService.title}
              </h3>
              <p className="text-gray-800 text-lg">{activeService.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {activeService.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${activeService.color}20`, 
                      color: activeService.color 
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                href="/services"
                className="inline-block mt-6 px-6 py-3 font-bold rounded-full transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: activeService.color,
                  color: 'white'
                }}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            key={`video-${activeService.id}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 overflow-hidden rounded-2xl shadow-xl h-[300px]"
          >
            <video
              src={activeService.videoSrc}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Services Content - Mobile */}
      <div className="md:hidden space-y-8">
        {/* Mobile Tabs with Arrows */}
        <div className="flex items-center">
          {/* Left Arrow */}
          <button 
            onClick={goToPrevious}
            className="flex-shrink-0 p-1 mr-1 rounded-full"
            style={{ backgroundColor: `${appColors.blue}40` }}
            aria-label="Previous service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          {/* Mobile Tabs - Scrollable */}
          <div className="flex-1 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => handleTabClick(index)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-bold mr-2 rounded-full transition-all duration-300 ${
                    activeTabIndex === index 
                      ? "bg-opacity-100 text-white" 
                      : "bg-opacity-20 text-gray-600"
                  }`}
                  style={{ 
                    backgroundColor: activeTabIndex === index ? service.color : `${service.color}20`
                  }}
                >
                  {service.title.length > 15 ? `${service.title.substring(0, 12)}...` : service.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={goToNext}
            className="flex-shrink-0 p-1 ml-1 rounded-full"
            style={{ backgroundColor: `${appColors.red}40` }}
            aria-label="Next service"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Mobile Content */}
        <motion.div
          key={activeService.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="h-40 overflow-hidden">
            <video
              src={activeService.videoSrc}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-3">
            <h3 
              className="text-2xl font-bold" 
              style={{ color: activeService.color }}
            >
              {activeService.title}
            </h3>
            <p className="text-sm text-gray-700">{activeService.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {activeService.tags.slice(0, 2).map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${activeService.color}20`, 
                    color: activeService.color 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href="/services"
              className="inline-block mt-4 px-4 py-2 text-sm font-bold rounded-full transition-all"
              style={{ 
                backgroundColor: activeService.color,
                color: 'white'
              }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices; 