"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import TypewriterEffect from "../TypewriterEffect";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/app/hooks/useLenis";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    quote: "Working with DigitallyNext transformed our online presence completely!",
    avatar: "/testimonials/face1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "E-commerce Manager",
    quote: "Our conversion rate increased by 40% thanks to their strategies.",
    avatar: "/testimonials/face2.jpg",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Startup Founder",
    quote: "The best digital marketing team I've worked with in 10 years.",
    avatar: "/testimonials/face3.jpg",
  },
];

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [addressHovered, setAddressHovered] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    // Use Lenis scrollTo function
    scrollTo("#about", {
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      offset: 0,
    });
  };

  return (
    <section className="relative h-[110vh] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.webp')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col items-center justify-center">
        {/* Animated Address in Top Right */}
        <motion.div 
          className="absolute top-20 right-8 z-30 flex items-center md:top-24"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setAddressHovered(true)}
          onHoverEnd={() => setAddressHovered(false)}
        >
          <div className="bg-[#dc3333] translate-y-10 bg-opacity-90 px-3 py-1 rounded-3xl shadow-md flex text-center">
            <FaMapMarkerAlt className="text-white text-xl mr-2" />
            <motion.div
              animate={addressHovered ? { scale: 1.15 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <p className="text-[10px] text-white">123 Innovation Ave,</p>
              <p className="text-[10px] text-white">Tech City</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Images */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 md:left-16"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [-12, -14, -12]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Image src="/home/1.webp" alt="" width={1200} height={100} className="w-[200px] md:w-[300px]"/>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-20 right-6 md:right-16"
          >
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [12, 14, 12]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <Image src="/home/2.webp" alt="" width={1200} height={100} className="w-[200px] md:w-[300px]"/>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center z-10 px-4 mt-16 md:mt-0">
            <h3 className="text-lg text-gray-600 mb-[-50px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Cracting Experience that Inspire:</h3>
          <TypewriterEffect />

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-[-20px] sm:mt-[-16px]">
            <a
              href="/digitally-next"
              className="btn-primary text-sm px-6 py-3"
            >
              DIGITALLY NEXT
            </a>
            <a href="/expertise" className="btn-secondary py-3 px-6 border-2 text-sm">
              EXPLORE EXPERTISE
            </a>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToNextSection}
            className="text-black animate-bounce transition-all hover:text-gray-300 focus:outline-none"
            aria-label="Scroll to next section"
          >
            <div className="flex flex-col justify-center items-center">
              <FaChevronDown className="h-10 w-10" />
            </div>
          </button>
        </div>

        {/* Testimonial Carousel - Bottom Left */}
        <div className="absolute bottom-28 left-8 md:left-16 z-20 max-w-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-2">
                <Image 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  width={48}
                  height={48}
                  className="rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-xs text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
              <p className="text-gray-800 italic text-base">&quot;{testimonials[currentTestimonial].quote}&quot;</p>
              
              {/* Indicator dots */}
              {/* <div className="flex justify-center mt-3 space-x-2">
                {testimonials.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full ${i === currentTestimonial ? 'bg-[#dc3333]' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div> */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
