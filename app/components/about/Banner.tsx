"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="md:h-[120%] h-auto overflow-hidden">
        <div
          className="relative w-full h-screen -mt-10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <Image
            src="/about/banner.webp"
            alt="About Banner"
            fill
            priority
            className="object-cover  object-center hidden md:block"
            sizes="100vw"
          />
           <Image
            src="/about/bannermb.webp"
            alt="About Banner"
            fill
            priority
            className="object-cover  object-center block md:hidden"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#f8d4cf] bg-opacity-50 mix-blend-multiply"></div>
        </div>
      </div>
      {/* Content overlay */}
      <div className="relative bg-[#87CEEB] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={childVariants}
            className="mt-10 text-center px-4"
          >
            <h2 className="text-xl md:text-2xl text-white font-light mb-10 relative" style={{ fontFamily: "var(--font-montserrat)" }}>
              <motion.span
                className="text-6xl text-white inline-block absolute font-medium p-2 md:p-0"
                style={{
                  marginTop: "-80px",
                  marginLeft: "-40px",
                  display: "inline-block",
                  transformOrigin: "center"
                }}
                initial={{ rotate: 0 }}
                animate={{ rotate: -6 }}
                transition={{ duration: 0.5 }}
              >
                Hey!
              </motion.span>
              <span className="inline-block md:ml-24">
                I&apos;m Deepak. An entrepreneur, speaker and digital catalyst dedicated to helping
                you <span className="font-bold">build a digital future you&apos;re proud of.</span>
              </span>
            </h2>
          </motion.div>
        </motion.div>
      </div>

    </section>

  );
};

export default Banner;