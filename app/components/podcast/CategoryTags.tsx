"use client";

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { name: 'BUSINESS', color: 'bg-orange-500', textColor: 'text-white' },
    { name: 'TECHNOLOGY', color: 'bg-blue-600', textColor: 'text-white' },
    { name: 'AI', color: 'bg-red-600', textColor: 'text-white' },
    { name: 'CRYPTO / NFT', color: 'bg-purple-700', textColor: 'text-white' },
    { name: 'SELF GROW', color: 'bg-green-600', textColor: 'text-white' },
    { name: 'HEALTH CARE', color: 'bg-pink-600', textColor: 'text-white' },
    { name: 'GAMING', color: 'bg-yellow-500', textColor: 'text-black' },
];

const CategoryTags = () => {
    return (
        <div className="bg-black py-2 w-full overflow-hidden">
            <motion.div
                className="flex space-x-2 md:space-x-4"
                animate={{
                    x: [0, -100, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                }}
            >
                {/* Double the categories array to create continuous scroll effect */}
                {[...categories, ...categories].map((category, index) => (
                    <motion.div
                        key={index}
                        className={`${category.color} ${category.textColor} px-3 py-1 rounded-full whitespace-nowrap flex items-center`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-xs font-bold">{category.name}</span>
                        {/* Add a little indicator number */}
                        <span className="ml-1 px-1.5 py-0.5 bg-black/20 rounded-full text-[10px]">{Math.floor(Math.random() * 9) + 1}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CategoryTags; 