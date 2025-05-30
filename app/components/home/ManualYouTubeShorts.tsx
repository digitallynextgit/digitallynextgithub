'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define manual shorts data structure
interface ManualShort {
  videoId: string;
  title: string;
}

// Define the props for the component
interface ManualYoutubeShortsProps {
  shorts?: ManualShort[];
}

// Default shorts to use if none are provided
const DEFAULT_SHORTS: ManualShort[] = [
  {
    videoId: "W5REyClI5pI",
    title: "The office doesn't feel the same without your favorite colleague!"
  },
  {
    videoId: "2r28XdNzG-s",
    title: "Brand image matters!"
  },
  {
    videoId: "TALIqvZpXDY",
    title: "Digital marketing strategies that work"
  },
  {
    videoId: "prgP-iE0UPM",
    title: "Social media marketing tips for 2024"
  }
];

export default function ManualYouTubeShorts({ shorts = DEFAULT_SHORTS }: ManualYoutubeShortsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeShort, setActiveShort] = useState<number | null>(null);
  const [visibleShorts, setVisibleShorts] = useState<ManualShort[]>([]);
  const shortRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Number of shorts to show per page
  const SHORTS_PER_PAGE = 4;
  
  // Update visible shorts when page changes
  useEffect(() => {
    const startIdx = currentIndex * SHORTS_PER_PAGE;
    setVisibleShorts(shorts.slice(startIdx, startIdx + SHORTS_PER_PAGE));
    setActiveShort(null);
    shortRefs.current = shortRefs.current.slice(0, SHORTS_PER_PAGE);
  }, [currentIndex, shorts]);
  
  // Calculate whether we can navigate forward/backward
  const canGoBack = currentIndex > 0;
  const canGoForward = (currentIndex + 1) * SHORTS_PER_PAGE < shorts.length;

  // Navigation functions
  const goToPrevious = () => {
    if (canGoBack) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    } else {
      // Loop to the last page when at the first page
      setCurrentIndex(Math.ceil(shorts.length / SHORTS_PER_PAGE) - 1);
    }
  };

  const goToNext = () => {
    if (canGoForward) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      // Loop to the first page when at the last page
      setCurrentIndex(0);
    }
  };

  // Format YouTube embed URL with autoplay, mute, and loop parameters
  const getEmbedUrl = (videoId: string, isActive: boolean) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&modestbranding=1&rel=0&showinfo=0&controls=${isActive ? '1' : '0'}&playsinline=1`;
  };

  // Get direct YouTube shorts link
  const getDirectYouTubeLink = (videoId: string) => {
    return `https://www.youtube.com/shorts/${videoId}`;
  };

  // Handle short activation
  const handleShortClick = (index: number) => {
    setActiveShort(activeShort === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight">
          Our Latest{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: `2px #DC3232` }}
          >
            Shorts
          </span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#231942] max-w-xl mx-auto">
          Quick insights and inspiration from our YouTube channel.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Navigation arrows - show only if needed */}
        {shorts.length > SHORTS_PER_PAGE && (
          <>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all"
                aria-label="Previous shorts"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10">
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all"
                aria-label="Next shorts"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* YouTube Shorts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleShorts.map((short, index) => {
            const isActive = activeShort === index;
            return (
              <motion.div
                key={`${short.videoId}-${index}`}
                ref={el => {
                  shortRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg overflow-hidden  transition-all duration-300 group ${isActive ? 'scale-105 z-10' : ''}`}
                onClick={() => handleShortClick(index)}
              >
                {/* CSS Mobile Phone Frame */}
                <div className="relative mx-auto w-[230px] pt-4 pb-4">
                  {/* Phone frame - using CSS instead of an image */}
                  <div className="mx-auto relative w-[230px] h-[400px] rounded-[20px] overflow-hidden border-[10px] border-black bg-black shadow-xl">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80px] h-[20px] bg-black rounded-b-[14px] z-20"></div>
                    
                    {/* YouTube video inside the phone screen */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={getEmbedUrl(short.videoId, isActive)}
                        title={short.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute top-0 left-0 w-full h-ful bg-cover"
                      ></iframe>
                    </div>
                    
                    {/* Home button or bottom indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[4px] bg-gray-200 rounded-full z-20"></div>
                  </div>
                </div>
                
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold line-clamp-1 mb-2">{short.title}</h3>
                  <div className="mt-4 flex justify-center items-center space-x-4">
                    <a
                      href={getDirectYouTubeLink(short.videoId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination indicator */}
        {shorts.length > SHORTS_PER_PAGE && (
          <div className="text-center mt-6 flex items-center justify-center space-x-2">
            <span className="text-sm text-gray-500">
              Page {currentIndex + 1} of {Math.ceil(shorts.length / SHORTS_PER_PAGE)}
            </span>
            
            <div className="flex space-x-1">
              {Array.from({ length: Math.ceil(shorts.length / SHORTS_PER_PAGE) }).map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-red-500' : 'bg-gray-300'}`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 