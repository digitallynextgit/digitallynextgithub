"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ArtistHighlight = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const artists = [
        {
            id: 1,
            name: 'Thomas Wright',
            description: 'Tech innovator & Startup advisor',
            image: '/podcast/artist1.webp',
            bgColor: 'bg-blue-100',
        },
        {
            id: 2,
            name: 'Daniel Carter',
            description: 'Media producer & Sound engineer',
            image: '/podcast/artist2.webp',
            bgColor: 'bg-yellow-100',
        },
        {
            id: 3,
            name: 'Michael Stevens',
            description: 'Science educator & Podcaster',
            image: '/podcast/artist3.webp',
            bgColor: 'bg-green-100',
        },
        {
            id: 4,
            name: 'Emily Chen',
            description: 'Digital marketer & Content creator',
            image: '/podcast/artist4.webp',
            bgColor: 'bg-pink-100',
        },
    ];

    const nextArtist = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % artists.length);
    };

    const prevArtist = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? artists.length - 1 : prevIndex - 1));
    };

    return (
        <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-black">ARTIST HIGHLIGHT OF THE WEEK</h2>
                    </motion.div>

                    <motion.div
                        className="flex items-center space-x-4 mt-4 md:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.button
                            onClick={prevArtist}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaChevronLeft className="text-gray-600" />
                        </motion.button>
                        <motion.button
                            onClick={nextArtist}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.05)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaChevronRight className="text-gray-600" />
                        </motion.button>
                    </motion.div>
                </div>

                <div className="overflow-hidden">
                    <motion.div
                        className="flex transition-all duration-500"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {artists.map((artist) => (
                            <motion.div
                                key={artist.id}
                                className="min-w-full grid grid-cols-1 md:grid-cols-4 gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {artists.map((item, index) => {
                                    // Calculate the real index considering the active artist
                                    const realIndex = (index + activeIndex) % artists.length;
                                    const artist = artists[realIndex];

                                    return (
                                        <motion.div
                                            key={artist.id}
                                            className={`${artist.bgColor} rounded-lg overflow-hidden aspect-square relative cursor-pointer`}
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Image
                                                src={artist.image}
                                                alt={artist.name}
                                                fill
                                                className="object-cover"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">{artist.name}</h3>
                                                    <p className="text-white/70 text-sm">{artist.description}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {artists.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'
                                }`}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{ scale: 1.5 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtistHighlight; 