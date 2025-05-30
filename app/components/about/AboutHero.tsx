'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Ripple } from "@/components/magicui/ripple";

export default function AboutHero() {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden bg-white text-black">
      {/* SquareBg background */}
      <div className="">
      <Ripple />
      </div>


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              About <span className="text-[#dc3333]">DigitallyNext</span>
            </h1>
            <div className="h-1 w-24 bg-[#dc3333] mx-auto rounded-full"></div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12 max-w-3xl mx-auto"
          >
            We&apos;re a team of strategists, designers, and developers who are passionate 
            about creating digital experiences that transform businesses and inspire people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#our-story" 
              className="btn-primary text-base py-3 px-8"
            >
              Our Story
            </a>
            <a 
              href="#team" 
              className="btn-secondary text-base py-3 px-8"
            >
              Meet Our Team
            </a>
          </motion.div>
          
          {/* <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-[-100px] left-[650px] transform -translate-x-1/2 text-center hidden md:block"
          >
            <div className="animate-bounce">
              <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-sm text-gray-500 mt-2">Scroll to discover our story</p>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
} 