"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BreakRules = () => {
    const componentRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: componentRef,
        offset: ["start end", "end start"],
    });

    const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
    const headingScale = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0.8, 1, 1.05]);

    return (
        <section
            ref={componentRef}
            className="relative w-full h-screen bg-fixed bg-center bg-cover"
            style={{
                backgroundImage: `url('/about/aboutbg.webp')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Foreground Content */}
            <div className="relative z-10 w-full h-full flex items-center">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12">
                    {/* Left Text Content */}
                    <motion.div
                        className="flex flex-col justify-center space-y-8 bg-white md:p-10 p-6"
                        style={{ opacity: textOpacity, y: textY }}
                    >
                        <motion.p className="text-black text-lg md:text-xl leading-relaxed">
                            From redefining how India learns digital and social media, to building ecosystems for IoT, Big Data, and Entrepreneurship, to mentoring startups and speaking across top institutes and forums—Deepak Goel has never followed the conventional path.
                        </motion.p>

                        <motion.h2
                            className="text-5xl md:text-7xl font-serif font-bold text-black leading-tight"
                            style={{ scale: headingScale }}
                        >
                            Traditional rules were made to be rewritten.
                        </motion.h2>
                    </motion.div>

                    
                </div>
            </div>
        </section>
    );
};

export default BreakRules;
