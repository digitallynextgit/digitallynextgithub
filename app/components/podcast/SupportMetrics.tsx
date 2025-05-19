"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import Image from 'next/image';
import { FaSpotify, FaYoutube,  FaGoogle,  } from 'react-icons/fa';
import { SiApplepodcasts } from 'react-icons/si';

const SupportMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const metrics = [
        { value: '1M', label: 'LISTENER' },
        { value: '5M', label: 'EPISODE' },
        { value: '1M', label: 'CREATOR' },
    ];

    const platforms = [
        {
            name: 'Spotify',
            icon: <FaSpotify className="text-[#1ED760] w-8 h-8" />,
            label: 'Spotify'
        },
        {
            name: 'G-podcast',
            icon: <FaGoogle className="text-[#4285F4] w-8 h-8" />,
            label: 'G-podcast'
        },
        {
            name: 'Youtube',
            icon: <FaYoutube className="text-[#FF0000] w-8 h-8" />,
            label: 'Youtube'
        },
        {
            name: 'Apple',
            icon: <SiApplepodcasts className="text-[#872EC4] w-8 h-8" />,
            label: 'Podcast'
        },
    ];

    // Sample creator colors for circular backgrounds
    const creatorColors = ['bg-purple-500', 'bg-yellow-500', 'bg-pink-500'];

    // Popular creators
    const creators = [
        { name: 'Sarah James', color: creatorColors[0] },
        { name: 'Mark Linden', color: creatorColors[1] },
        { name: 'Priya Shah', color: creatorColors[2] },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                        {/* Left side - Supported by */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                            className='border border-gray-200 rounded-lg p-6 shadow-sm'
                        >
                            <motion.h3
                                className="text-xl font-black mb-8"
                                variants={item}
                            >
                                SUPPORTED BY:
                            </motion.h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {platforms.map((platform, index) => (
                                    <motion.div
                                        key={index}
                                        variants={item}
                                        className="flex flex-col items-center group"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-2 transition-transform group-hover:shadow-lg">
                                            {platform.icon}
                                        </div>
                                        <span className="text-lg font-medium">{platform.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right side - Metrics and popular creators */}
                        <div className="space-y-8">
                            {/* Metrics */}
                            <motion.div
                                className="grid grid-cols-3 gap-4 border border-gray-200 rounded-lg p-6 shadow-sm"
                                variants={container}
                                initial="hidden"
                                animate={isInView ? "show" : "hidden"}
                            >
                                {metrics.map((metric, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-center"
                                        variants={item}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                    >
                                        <h2 className="text-4xl font-black">{metric.value}</h2>
                                        <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Popular creators */}
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate={isInView ? "show" : "hidden"}
                            >
                                <motion.div className="flex items-center mb-3" variants={item}>
                                    <div className="flex -space-x-2">
                                        {creators.map((creator, index) => (
                                            <motion.div
                                                key={index}
                                                className={`inline-block border-2 border-white rounded-full overflow-hidden ${creator.color}`}
                                                whileHover={{ scale: 1.1, zIndex: 10 }}
                                            >
                                                <div className="h-12 w-12 rounded-full flex items-center justify-center text-white">
                                                    {creator.name.charAt(0)}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-xl">MOST POPULAR CREATORS</h3>
                                        <p className="text-xs text-gray-700">Best Podcasts Tailored Just for You.</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SupportMetrics; 