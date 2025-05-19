"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, Construction, Rocket } from "lucide-react";

export default function NotFound() {
    const [hovered, setHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top } = e.currentTarget.getBoundingClientRect();

        setMousePosition({
            x: clientX - left,
            y: clientY - top
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    // const particleVariants = {
    //     initial: {
    //         scale: 0,
    //         opacity: 0,
    //         x: 0,
    //         y: 0
    //     },
    //     animate: {
    //         scale: [0, 1, 0],
    //         opacity: [0, 1, 0],
    //         x: [0, -50, -100],
    //         y: [0, -50, -100],
    //         transition: {
    //             duration: 2,
    //             repeat: Infinity,
    //             repeatType: "loop"
    //         }
    //     }
    // };

    // Generate random particles
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 60 + 10}, 100%, 75%)`,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 1 + 1,
        delay: Math.random() * 0.5
    }));

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-[#f8f3ee] overflow-hidden relative px-4 text-center"
            onMouseMove={handleMouseMove}
        >
            {/* Background interactive elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {mousePosition.x > 0 &&
                    particles.map((particle) => (
                        <motion.div
                            key={particle.id}
                            className="absolute rounded-full"
                            style={{
                                backgroundColor: particle.color,
                                width: particle.size,
                                height: particle.size,
                                left: mousePosition.x,
                                top: mousePosition.y,
                            }}
                            initial="initial"
                            animate="animate"
                            variants={{
                                initial: {
                                    scale: 0,
                                    opacity: 0,
                                    x: 0,
                                    y: 0
                                },
                                animate: {
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    x: [0, particle.x * 2, particle.x * 4],
                                    y: [0, particle.y * 2, particle.y * 4],
                                    transition: {
                                        duration: particle.duration,
                                        delay: particle.delay,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }
                                }
                            }}
                        />
                    ))
                }
            </div>

            <motion.div
                className="relative z-10 max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Decorative elements */}
                <motion.div
                    className="absolute -top-20 -right-20 text-[#f75d34] opacity-20 lg:opacity-10"
                    animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Construction size={180} />
                </motion.div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 5 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: 0.5
                    }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative">
                        <div className="text-9xl font-serif font-bold text-[#f75d34]">404</div>
                        <motion.div
                            className="absolute -right-10 -top-10"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 10, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Rocket size={60} className="text-[#d4a418]" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-800"
                    variants={itemVariants}
                >
                    Coming Soon
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    We&apos;re working on something amazing for this page.
                    Check back soon to see what we&apos;re building.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-[#f75d34] rounded-full overflow-hidden transition-all duration-300"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <ArrowLeft size={20} />
                            <span>Back to Homepage</span>
                        </span>
                        <motion.span
                            className="absolute inset-0 bg-[#d4a418]"
                            initial={{ x: "100%" }}
                            animate={{
                                x: hovered ? "0%" : "100%"
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20
                            }}
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
} 