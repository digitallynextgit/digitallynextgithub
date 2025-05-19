"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const testimonials = [
        {
            id: 1,
            name: "Rajiv Sharma",
            position: "CEO, TechVision India",
            image: "/speaking/t1.webp",
            text: "Deepak's vision for digital transformation is unparalleled. His strategic insights have been instrumental in helping our company adapt to the evolving digital landscape."
        },
        {
            id: 2,
            name: "Priya Mehta",
            position: "Founder, StartUp Junction",
            image: "/speaking/t2.webp",
            text: "Working with Deepak through Digitally Next transformed our startup's online presence. His approach to digital branding is innovative and result-oriented."
        },
        {
            id: 3,
            name: "Sanjay Kapoor",
            position: "Director, Global Education Forum",
            image: "/speaking/t3.webp",
            text: "iMET Global's training programs have significantly enhanced our professional development initiatives. Deepak's commitment to skill development is commendable."
        },
        {
            id: 4,
            name: "Anita Desai",
            position: "Digital Marketing Head, FutureTech",
            image: "/speaking/t4.webp",
            text: "Deepak is a true visionary in the digital space. His insights into social media trends and digital marketing strategies are always ahead of the curve."
        }
    ];

    // Handle autoplay functionality
    useEffect(() => {
        if (autoplay) {
            autoplayRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [currentIndex, autoplay]);

    // Handle navigation
    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Pause autoplay on hover
    const handleMouseEnter = () => setAutoplay(false);
    const handleMouseLeave = () => setAutoplay(true);

    // Animation variants
    const sliderVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    // Staggered animation for the section
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // const itemVariants = {
    //     hidden: { opacity: 0, y: 20 },
    //     visible: {
    //         opacity: 1,
    //         y: 0,
    //         transition: { duration: 0.6 }
    //     }
    // };

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-white relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Decorative elements */}
            {/* <motion.div
                className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#5d7a64]/10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            /> */}
            <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#5d7a64]/1"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What People Say</h2>
                    <div className="h-1 w-24 bg-[#5d7a64] mx-auto mb-6"></div>
                    <p className="text-xl max-w-3xl mx-auto text-gray-700">
                        Insights from leaders who have collaborated with Deepak Goel
                    </p>
                </motion.div>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Large quote icon */}
                    <FaQuoteLeft className="absolute top-0 left-0 text-6xl text-[#5d7a64]/10 z-0" />

                    {/* Testimonial slider */}
                    <div className="relative h-[400px] md:h-[300px] overflow-hidden mx-auto max-w-4xl z-10">
                        <AnimatePresence custom={direction} initial={false}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={sliderVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ type: "tween", duration: 0.5 }}
                                className="absolute w-full h-full flex flex-col md:flex-row items-center gap-8 p-8"
                            >
                                {/* Testimonial image */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                                    <div className="w-full h-full overflow-hidden rounded-full border-4 border-[#5d7a64]/20">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <motion.div
                                        className="absolute -inset-2 rounded-full border-2 border-[#5d7a64]/30"
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>

                                {/* Testimonial content */}
                                <div className="flex-1 text-center md:text-left">
                                    <p className="text-gray-700 italic text-lg mb-6">{testimonials[currentIndex].text}</p>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                                        <p className="text-[#5d7a64]">{testimonials[currentIndex].position}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-[#ece2d7] hover:bg-[#5d7a64] hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaArrowLeft className="text-lg" />
                        </motion.button>

                        {/* Indicators */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#5d7a64]' : 'bg-gray-300'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-[#ece2d7] hover:bg-[#5d7a64] hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaArrowRight className="text-lg" />
                        </motion.button>
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.button
                        className="px-8 py-4 bg-[#5d7a64] text-white rounded-lg shadow-lg font-medium hover:bg-[#4c6453] transition-colors duration-300"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Connect With Deepak
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials; 