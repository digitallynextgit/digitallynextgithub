"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const ExploreCategories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const categories = [
        { name: 'Technology', image: '/podcast/cat-tech.webp', bgColor: 'bg-orange-500' },
        { name: 'Business', image: '/podcast/cat-business.webp', bgColor: 'bg-blue-500' },
        { name: 'Self Growth', image: '/podcast/cat-growth.webp', bgColor: 'bg-purple-500' },
        { name: 'Education', image: '/podcast/cat-education.webp', bgColor: 'bg-yellow-500' },
        { name: 'Health Care', image: '/podcast/cat-health.webp', bgColor: 'bg-pink-500' },
        { name: 'Entertainment', image: '/podcast/cat-entertainment.webp', bgColor: 'bg-indigo-500' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Adds a smiley face decoration
    const SmileyFace = () => (
        <motion.div
            className="absolute -right-8 -bottom-8 z-10 w-16 h-16 flex items-center justify-center"
            initial={{ rotate: -10, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -10, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
        >
            <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center">
                <div className="relative w-12 h-12">
                    {/* Eyes */}
                    <div className="absolute top-3 left-2 w-2 h-2 bg-black rounded-full"></div>
                    <div className="absolute top-3 right-2 w-2 h-2 bg-black rounded-full"></div>
                    {/* Smile */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-black rounded-b-full"></div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 flex justify-between items-end"
                >
                    <div>
                        <h2 className="text-3xl font-black">EXPLORE CATEGORIES</h2>
                        <p className="text-gray-500">25+ Categories</p>
                    </div>
                    <SmileyFace />
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.2 }
                            }}
                            className={`relative overflow-hidden rounded-lg ${category.bgColor} aspect-square cursor-pointer`}
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <h3 className="text-white font-bold text-lg">{category.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ExploreCategories; 