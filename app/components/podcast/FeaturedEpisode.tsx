"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaPlay, FaClock } from 'react-icons/fa';

const FeaturedEpisode = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    // const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="md:text-7xl text-4xl font-semibold text-center mb-10">FEATURE EPISODE FOR THIS WEEK</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl  overflow-hidden px-10 "
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Featured episode image */}
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src="/podcast/pc.webp"
                                alt="NFT Stream Earnings Episode"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 md:hidden">

                                <h3 className="text-white text-3xl font-medium">NFT STREAM EARNINGS</h3>
                                <p className="text-white/80 text-sm">How to earn passive income from your creative work</p>
                            </div>
                        </div>

                        {/* Episode info and player */}
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <p className='text-gray-700 text-md font-semibold'>Dec 03, 2024</p>
                                <h3 className="text-5xl font-semibold mb-2 hidden md:block">NFT STREAM EARNINGS</h3>
                                <p className="text-gray-600 mb-4 hidden md:block">
                                    Learn how to set up passive income streams with your creative work through NFTs. Our expert breaks down the process step by step.
                                </p>

                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                        <Image
                                            src="/speaking/t1.webp"
                                            alt="Episode Host"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium">With James Nelson</div>
                                        <div className="text-xs text-gray-500">Crypto expert & Artist</div>
                                    </div>
                                </div>

                                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-6">
                                    <div className="flex items-center">
                                        <FaClock className="mr-1" />
                                        <span>42 min</span>
                                    </div>
                                    <div>May 15, 2023</div>
                                    <div className="bg-gray-100 text-black px-2 py-1 rounded-full text-xs font-medium">CRYPTO</div>
                                </div>
                            </div>

                            {/* Audio player */}
                            <div className="mt-0">
                                <button className='bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center'>
                                    <FaPlay className='mr-2' />
                                    Start Listening
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedEpisode; 