"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-0 relative overflow-hidden">
            <div className="">
                <div className="flex flex-col items-center justify-between">
                    {/* Text content */}
                    <motion.div
                        className="w-full max-w-[90vw]  md:max-w-[80vw] rounded-2xl backdrop-blur-sm bg-white/10 p-[4vw] shadow-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative">
                            <h1
                                className="text-5xl md:text-[200px] font-black text-white text-center"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                P
                                <span className="inline-block relative">
                                    <Image
                                        src="/podcast/mic.webp"
                                        alt="O"
                                        width={100}
                                        height={100}
                                        className="p-4 -rotate-12 z-20 hidden md:block"
                                    />
                                     <Image
                                        src="/podcast/mic.webp"
                                        alt="O"
                                        width={80}
                                        height={80}
                                        className="p-4 -rotate-12 z-20 block md:hidden"
                                    />
                                    
                                    <motion.div
                                        className="absolute -inset-1 bg-yellow-300 rounded-full z-[-10]"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    />
                                </span>
                                DCAST
                            </h1>

                            <div className="flex md:flex-row items-center justify-center md:gap-64 flex-col ">
                                <h2 className="md:text-5xl text-3xl font-black mt-2 text-white">
                                    EXPERIENCE
                                </h2>

                                <motion.div
                                    className="mt-6 flex items-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative rounded-full flex items-center bg-black pr-4 overflow-hidden group focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
                                    >
                                        <span className="absolute left-0 top-0 h-full w-4 bg-yellow-300 transition-all group-hover:w-3" />
                                        <div className="pl-6 py-2 pr-2">
                                            <span className="text-white font-medium md:text-sm text-[10px]">
                                                START LISTENING
                                            </span>
                                        </div>
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Background image section */}
                    <motion.div
                        className="w-full h-screen relative bg-cover bg-center bg-no-repeat -z-10 mt-[-500px] hidden md:block"
                        style={{ backgroundImage: `url('/podcast/podcast.webp')` }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Animated blue circle on top of background */}
                        <motion.div
                            className="absolute left-[50%] top-[40%] w-16 h-16 md:w-24 md:h-24 bg-blue-600 rounded-full"
                            style={{
                                filter: "blur(10px)",
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={{
                                opacity: [0.6, 0.8, 0.6],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                    <motion.div
                        className="w-full h-screen relative bg-cover bg-center bg-no-repeat -z-10 mt-[-500px] block md:hidden"
                        style={{ backgroundImage: `url('/podcast/podcastm.webp')` }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Animated blue circle on top of background */}
                        <motion.div
                            className="absolute left-[50%] top-[40%] w-16 h-16 md:w-24 md:h-24 bg-blue-600 rounded-full"
                            style={{
                                filter: "blur(10px)",
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={{
                                opacity: [0.6, 0.8, 0.6],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
