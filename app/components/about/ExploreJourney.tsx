"use client";
import { useEffect, useRef, useState } from "react";
import {
  journeyData,
  journeyData1,
  journeyData2,
  journeyData3,
} from "@/app/data/about";
import Image from "next/image";
import { ReactNode } from "react";

interface JourneyCardProps {
  title: string;
  description: ReactNode;
  mediaType: "video" | "image";
  mediaSource: string;
  quote?: ReactNode;
  quoteColor?: string;
  additionalText?: ReactNode;
}

const JourneyCard = ({ 
  title, 
  description, 
  mediaType, 
  mediaSource, 
  quote, 
  quoteColor = "text-black",
  additionalText 
}: JourneyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMediaHovered, setIsMediaHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    if (videoRef.current && mediaType === "video") {
      if (isExpanded || isMediaHovered) {
        videoRef.current.play().catch(error => {
          console.log("Error playing video:", error);
        });
      }
    }
  }, [isExpanded, isMediaHovered, mediaType]);

  // Get preview text for description
  const getPreviewText = () => {
    if (typeof description === 'string') {
      return `${description.substring(0, 100)}...`;
    } else {
      return "Click to view details...";
    }
  };

  return (
    <div 
      className={`w-full bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden cursor-pointer relative
        ${isExpanded ? 'lg:h-[400px] h-auto' : 'h-[120px] md:h-[160px]'}`}
    >
      <div className="flex h-full" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Card header - always visible */}
        <div className={`flex items-center justify-between w-full px-6 py-4
          ${isExpanded ? 'lg:flex-row flex-col h-auto' : 'h-full'}`}>
          
          {/* Left side with title and preview text */}
          <div className={`${isExpanded ? 'lg:w-1/2' : 'w-4/5'}`}>
            <h3 className="font-bold text-red-600 text-xl md:text-2xl mb-2">{title}</h3>
            
            {!isExpanded && (
              <p className="text-gray-600 text-sm md:text-base line-clamp-2">
                {getPreviewText()}
              </p>
            )}
            
            {isExpanded && (
              <div className="space-y-4">
                <div className="text-black text-sm md:text-base">
                  {description}
                </div>
                {quote && (
                  <div className={`${quoteColor} font-bold text-lg md:text-xl`}>
                    {quote}
                  </div>
                )}
                {additionalText && (
                  <div className="text-black text-sm md:text-base">
                    {additionalText}
                  </div>
                )}
                {/* CTA button only shown when expanded */}
              </div>
            )}
          </div>
          
          {/* Right side with media */}
          <div 
            className={`flex justify-center items-center ${isExpanded ? 'lg:w-1/2 mt-4 lg:mt-0' : 'w-1/5'}`}
            onMouseEnter={() => setIsMediaHovered(true)}
            onMouseLeave={() => setIsMediaHovered(false)}
            onClick={(e) => e.stopPropagation()} // Prevent card expansion on media click
          >
            <div 
              className={`
                transform transition-all duration-500 
                ${isMediaHovered ? 
                  'scale-110  z-10 rotate-1' : 
                  'scale-100'
                }
                hover:rotate-3 
                perspective-1000
              `}
              style={{ 
                transformStyle: 'preserve-3d', 
                transition: 'transform 0.5s ease' 
              }}
            >
              {mediaType === "video" ? (
                <div className="overflow-hidden rounded-lg">
                  <video
                    ref={videoRef}
                    className={`
                      rounded-lg 
                      ${isExpanded ? 'w-full max-w-[280px]' : 'w-16 h-16 md:w-20 md:h-20 object-cover'}
                      ${isMediaHovered ? 'scale-[1.05] transform-none' : 'animate-pulse-subtle'}
                    `}
                    style={{
                      animation: isMediaHovered ? 'none' : 'breathing 4s ease-in-out infinite'
                    }}
                    loop
                    muted
                    playsInline
                    autoPlay={isExpanded || isMediaHovered}
                    preload="auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                  >
                    <source src={mediaSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={mediaSource}
                    alt={title}
                    width={isExpanded ? 280 : 80}
                    height={isExpanded ? 280 : 80}
                    className={`
                      rounded-lg
                      ${isExpanded ? 'w-full max-w-[280px] h-auto' : 'w-16 h-16 md:w-20 md:h-20 object-cover'}
                      ${isMediaHovered ? 'scale-[1.05] transform-none' : ''}
                    `}
                    style={{
                      animation: isMediaHovered ? 'none' : 'breathing 6s ease-in-out infinite'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(!isExpanded);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Expand indicator */}
      <div className="absolute bottom-2 right-2">
        <svg 
          className={`w-5 h-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Add CSS keyframes for breathing animation */}
      <style jsx global>{`
        @keyframes breathing {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes pulse-subtle {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

const Journey = () => {
  return (
    <section className="w-full py-12 px-4 lg:px-8 bg-gray-50">
      
      <div className="max-w-5xl mx-auto space-y-4">
        {/* Card 1 */}
        <JourneyCard 
          title="Explore The Journey"
          description={journeyData.description}
          mediaType="video"
          mediaSource="/images/journey/1.mp4"
        />
        
        {/* Card 2 */}
        <JourneyCard 
          title="Our Vision"
          description={journeyData.vision.text}
          mediaType="video"
          mediaSource="/images/journey/2 (2).mp4"
          quote={journeyData.vision.quote}
        />
        
        {/* Card 3 */}
        <JourneyCard 
          title="The Process"
          description={journeyData1.description}
          mediaType="image"
          mediaSource="/images/journey/4.webp"
        />
        
        {/* Card 4 */}
        <JourneyCard 
          title="Our Approach"
          description={journeyData2.description}
          mediaType="video"
          mediaSource="/images/journey/3.mp4"
          quote={journeyData1.vision.quote}
          quoteColor="text-red-500"
          additionalText={journeyData1.vision.text}
        />
        
        {/* Card 5 */}
        <JourneyCard 
          title="Next Enabler"
          description={journeyData2.descp || "Our mission is to enable the next generation of digital experiences."}
          mediaType="video"
          mediaSource="/images/journey/4.mp4"
          quote={journeyData2.vision.quote}
          additionalText={journeyData2.vision.text}
        />
        
        {/* Card 6 */}
        <JourneyCard 
          title="The Future"
          description={journeyData3.vision.text}
          mediaType="image"
          mediaSource="/images/journey/6.webp"
          quote={journeyData3.vision.quote}
          quoteColor="text-gray-900"
          additionalText={journeyData3.vision.advance}
        />
      </div>
    </section>
  );
};

export default Journey;
