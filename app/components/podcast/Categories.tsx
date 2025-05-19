"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBusinessTime, FaLaptopCode, FaBitcoin, FaBookOpen, FaHeadphones, FaHeartbeat } from 'react-icons/fa';

const Categories = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const categories = [
        { name: 'Business', icon: <FaBusinessTime className="text-xl" />, color: 'bg-orange-500', textColor: 'text-white' },
        { name: 'Technology', icon: <FaLaptopCode className="text-xl" />, color: 'bg-blue-600', textColor: 'text-white' },
        { name: 'Crypto', icon: <FaBitcoin className="text-xl" />, color: 'bg-purple-700', textColor: 'text-white' },
        { name: 'Education', icon: <FaBookOpen className="text-xl" />, color: 'bg-green-600', textColor: 'text-white' },
        { name: 'Entertainment', icon: <FaHeadphones className="text-xl" />, color: 'bg-red-500', textColor: 'text-white' },
        { name: 'Health', icon: <FaHeartbeat className="text-xl" />, color: 'bg-pink-600', textColor: 'text-white' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-3xl font-bold">Explore by Category</h2>
                    <p className="text-gray-600 mt-2">Discover podcasts across different topics</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`${category.color} ${category.textColor} rounded-lg p-4 flex flex-col items-center justify-center text-center hover:shadow-lg cursor-pointer transition-shadow duration-300 h-32`}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="mb-2">{category.icon}</div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-xs opacity-80 mt-1">120+ Episodes</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories; 