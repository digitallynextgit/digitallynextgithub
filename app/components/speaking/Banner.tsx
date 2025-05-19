"use client";

import React from 'react';
// import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="relative md:h-screen h-screen overflow-hidden">
            {/* Background video with overlay */}
            <div className="absolute inset-0 z-0">
                <video
                    src="/speaking/speak.mp4"
                    autoPlay
                    muted
                    loop
                    className="object-cover h-screen md:h-auto"
                  
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            {/* Animated text content */}
            <div className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-5xl md:text-9xl font-medium mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Speaking <span className="text-[#c6603d]"> Mind</span>
                    </motion.h1>

                    <motion.div
                        className="h-1 w-24 bg-[#5d7a64] mx-auto my-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    />

                    <motion.p
                        className="md:text-xl text-lg max-w-2xl mx-auto text-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Thoughts, insights and vision from Deepak Goel, a catalyst in building
                        a better Digital Social Media Enabled world
                    </motion.p>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
                    </div>
                    <p className="text-sm text-center mt-2">Scroll Down</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner; 