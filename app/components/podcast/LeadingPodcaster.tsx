"use client";

import React, { useRef } from "react";
// import Image from "next/image";
// import { useInView } from "framer-motion";
import { FaChevronRight, FaPlay } from "react-icons/fa";

const LeadingPodcaster = () => {
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-2 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2  items-center ">
                    <div className="flex flex-col">
                        <h2 className="text-7xl font-semibold mb-10 md:ml-16 hidden md:block">
                            Our Leading Podcast
                        </h2>
                        <div className="flex flex-col justify-center items-center">
                            <video
                                src="/podcast/pb.mp4"
                                autoPlay
                                muted
                                loop
                                className="w-[80%] h-[80%] object-cover aspect-square rounded-lg mb-10"
                            />

                            <div className="mb-6 pl-20 flex flex-col gap-4">
                                <h2 className="text-3xl font-black mb-2 ">
                                    OUR LEADING PODCASTER
                                </h2>

                                <p className="text-gray-600">This podcast is about the journey of a digital nomad and crypto enthusiast, offering practical advice on building a location-independent lifestyle.</p>
                                <div className="flex items-center text-orange-500 mb-4 justify-start ">
                                    <FaChevronRight className="mr-1" />
                                    <span className="font-semibold">START LISTENING</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex  md:justify-end justify-center items-center md:items-end flex-col gap-20">
                    <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium flex items-center justify-end">
                            <FaPlay className="mr-2" />
                            Start Listening
                        </button>
                        <div className="flex flex-col">
                            <div className="flex flex-col-reverse justify-center items-center">
                                <video
                                    src="/podcast/pb1.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    className="w-[80%] h-[80%] object-cover aspect-square rounded-lg mb-10"
                                />

                                <div className="mb-6 pl-20 flex flex-col gap-4">
                                    <h2 className="text-3xl font-black mb-2 ">
                                    24 EPISODES
                                    </h2>

                                    <p className="text-gray-600">This 24 episodes are about the journey of a digital nomad and crypto enthusiast, offering practical advice on building a location-independent lifestyle.</p>
                                    <div className="flex items-center text-orange-500 mb-4 justify-start ">
                                        <FaChevronRight className="mr-1" />
                                        <span className="font-semibold">START LISTENING</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    {/* <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-orange-500 rounded-lg overflow-hidden relative aspect-square">
                            <Image
                                src="/podcast/leading-podcaster.webp"
                                alt="Leading Podcaster"
                                fill
                                className="object-cover"
                            />
                        </div>

                 
                        <motion.div
                            className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center z-10"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                        >
                            <FaHeadphones className="text-2xl text-white" />
                        </motion.div>
            </motion.div> */}
                    {/* Content */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="mb-6"
                        >
                            <h2 className="text-3xl font-black mb-2">OUR LEADING PODCASTER</h2>

                            <div className="flex items-center text-orange-500 mb-4">
                                <FaChevronRight className="mr-1" />
                                <span className="font-semibold">START LISTENING</span>
                            </div>
                        </motion.div>

                        <div className="bg-gray-100 p-5 rounded-lg">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-xl">24 EPISODES</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-sm text-gray-500">LIVE</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6">
                                Jason Lane, 27, shares his journey as a digital nomad and crypto enthusiast, offering practical advice on building a location-independent lifestyle.
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                        <Image
                                            src="/podcast/host3.webp"
                                            alt="Jason Lane"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium">Jason Lane</div>
                                        <div className="text-xs text-gray-500">Digital Nomad & Tech Expert</div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white rounded-full w-10 h-10 flex items-center justify-center"
                                >
                                    <FaChevronRight />
                                </motion.button>
                            </div>
                        </div>

                      
                        <motion.div
                            className="mt-10 flex justify-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <div className="relative w-48 h-36">
                                <Image
                                    src="/podcast/headphones.webp"
                                    alt="Headphones"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
            </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default LeadingPodcaster;
