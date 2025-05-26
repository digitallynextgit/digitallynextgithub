'use client'
import MapComponents from '@/components/home/MapComponents';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import { Montserrat } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });
const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2 // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#00D1C7] py-[8vh] lg:py-[12vh] px-[4vw] lg:px-[6vw] overflow-hidden"
    >
      <div className="w-[95%] lg:max-w-[90%] mx-auto">
        {/* Top Text with animations */}
        <div className="flex items-baseline gap-2 lg:gap-4 mb-[4vh] lg:mb-[6vh]">
          <motion.span 
            className={`text-red-600 text-[10vw] lg:text-[10vw] font-bold font-playfair  ${playfairDisplay.className}`}
            initial={{ scale: 0 }}
            animate={isInView ? { 
              scale: [0, 1.2, 0.9, 1.1, 1],
              y: [50, -20, 10, -5, 0]
            } : { scale: 0 }}
            transition={{
              duration: 1.2,
              times: [0, 0.4, 0.6, 0.8, 1]
            }}
          >
            BIG
          </motion.span>
          <motion.span 
            className={`text-white text-[7vw] lg:text-[4vw] font-bold whitespace-normal lg:whitespace-nowrap ${playfairDisplay.className}`}
            initial={{ x: -1000, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 20,
              delay: 1.3,
              duration: 1
            }}
          >
            enough to deliver
          </motion.span>
        </div>

        {/* Map Component */}
        <div className={`transition-all duration-1000 transform
          ${isLoaded && isInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div className="w-full h-[22vh] lg:h-[65vh]  rounded-lg overflow-hidden">
            <MapComponents />
          </div>
        </div>

        {/* Bottom Text with bounce animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mt-6 lg:mt-8">
          <motion.div 
            className="w-24 lg:w-32 h-0.5 bg"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            {/* <Image
              src="/images/arrow.webp"
              alt="Map Image"
              width={1200}
              height={100}
              className='w-full rounded-lg overflow-hidden'
            /> */}
          </motion.div>
          <motion.h2 
            className="text-[8vw] lg:text-[4vw] font-bold text-red-600 text-center lg:text-left"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              bounce: 0.6,
              delay: 2.5,
              duration: 1.5
            }}
          >
            Small Enough To Care
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Map;
