"use client";

import React, { useState, useEffect } from "react";
import { FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";
import TypewriterEffect from "../TypewriterEffect";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/app/hooks/useLenis";
import Link from "next/link";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "IT Services and Enterprise Solutions",
    // role: "",
    quote:
      " Rebranding helped win Fortune 500 tech clients",
    avatar: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SVQlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Healthcare and Hearing Solutions",
    // role: "E-commerce Manager",
    quote: "From campaign to global recognition and conversions",
    avatar: "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Wellness & Holistic Healing",
    // role: "Startup Founder",
    quote: "Performance campaigns brought high-intent leads and results",
    avatar: "/testimonials/wellness.jpg",
  },
  {
    id: 4,
    name: "Art & Creative Aggregation",
    // role: "Startup Founder",
    quote: "Crafted global presence for emerging and known artists",
    avatar: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2VsbG5lc3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Fintech",
    // role: "Startup Founder",
    quote: "Scaled social presence by 500% in India",
    avatar: "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmludGVjaHxlbnwwfHwwfHx8MA%3D%3D",
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
          className="absolute hidden  right-8 z-30 md:flex items-center md:top-24 "
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
              <p className="text-[10px] text-white">Uday Park, </p>
              <p className="text-[10px] text-white">South Delhi, India</p>
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
                rotate: [-12, -14, -12],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image
                src="/home/1.webp"
                alt=""
                width={1200}
                height={100}
                className=" w-[300px] hidden md:block"
              />
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
                rotate: [12, 14, 12],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            >
              <Image
                src="/home/2.webp"
                alt=""
                width={1200}
                height={100}
                className="w-[300px] hidden md:block"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center z-10 px-4 mt-[-140px] md:mt-0">
          <h3
            className="md:text-lg text-sm text-gray-600 md:mb-[-50px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We’ve grown understanding your pain
          </h3>
          <TypewriterEffect />

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:mt-[-20px]">
            <Link
              href="/about"
              className="btn-primary md:text-sm text-[12px] px-6 py-3 capitalize"
            >
              About US
            </Link>
            <Link
              href="/services"
              className="btn-secondary py-3 px-6 border-2 md:text-sm text-[12px]"
            >
              EXPLORE EXPERTISE
            </Link>
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
              <FaChevronDown className="md:h-10 md:w-10 h-6 w-6" />
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
                  <h4 className="font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                
                </div>
              </div>
              <p className="text-gray-800 italic md:text-base text-xs">
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </p>

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
