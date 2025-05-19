"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoLocationSharp } from "react-icons/io5";

interface Location {
  id: number;
  name: string;
  x: number;
  y: number;
  mobileX: number;
  mobileY: number;
}

const locations: Location[] = [
  { id: 1, name: "Toronto", x: 23, y: 28, mobileX: 23, mobileY: 20 },
  { id: 2, name: "Washington DC", x: 24, y: 35, mobileX: 25, mobileY: 26 },
  { id: 3, name: "London", x: 45, y: 28, mobileX: 45, mobileY: 28 },
  { id: 4, name: "Dubai", x: 60, y: 42, mobileX: 60, mobileY: 42 },
  { id: 5, name: "Mumbai", x: 67, y: 45, mobileX: 67, mobileY: 45 },
  { id: 6, name: "Singapore", x: 75, y: 52, mobileX: 75, mobileY: 52 },
  { id: 7, name: "Israel", x: 55, y: 40, mobileX: 55, mobileY: 40 }, // Israel
  { id: 8, name: "Middle East", x: 58, y: 43, mobileX: 58, mobileY: 43 }, // Middle East
  { id: 9, name: "Russia", x: 65, y: 25, mobileX: 57, mobileY: 25 }, // Russia
  { id: 10, name: "Italy", x: 48, y: 33, mobileX: 48, mobileY: 33 }, // Italy
  { id: 11, name: "Melbourne", x: 85, y: 75, mobileX: 85, mobileY: 75 },
];

const LocationMarker = ({
  location,
  isVisible,
}: {
  location: Location;
  isVisible: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: location.id * 0.1 }}
          className="absolute"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            <IoLocationSharp
              className={`text-red-600 text-[4vw] lg:text-[2vw] transition-all duration-300 ${
                isHovered ? "scale-125" : ""
              }`}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white px-2 py-1 rounded text-[2vw] lg:text-[0.8vw] -top-[3vh]"
            >
              {location.name}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MapComponents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    const currentRef = mapRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={mapRef}>
      <Image
        src="/images/map.webp"
        alt="World Map"
        width={1200}
        height={100}
        className="object-contain w-full h-full"
      />

      {/* Location markers */}
      <div key={`markers-container-${isVisible}`}>
        {locations.map((location) => (
          <LocationMarker
            key={location.id}
            location={location}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default MapComponents;
