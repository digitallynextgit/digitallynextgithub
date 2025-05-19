"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
// import Image from "next/image";
import TiltedCard from "@/components/reactbits/tiltedcard";

const Vision = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const visionPoints = [
        {
            title: "Digital Transformation",
            description:
                "Creating a better digitally connected world through social media innovation",
        },
        {
            title: "Entrepreneurial Spirit",
            description:
                "Fostering an ecosystem for startups and self-employed individuals to thrive",
        },
        {
            title: "Skill Development",
            description:
                "Supporting India's vision through up-skilling and professional education",
        },
        {
            title: "Global Reach",
            description:
                "Extending digital solutions from small businesses to large corporations",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 overflow-hidden relative bg-gradient-to-br from-[#5d7a64] via-[#6f8d75] to-[#48664d] text-white"

        >
            {/* Parallax background elements */}
            <motion.div
                className="absolute top-0 right-0 w-1/3 h-full opacity-10"
                style={{ y: y1, opacity }}
            >
                {/* <Image
                    src="/speaking/pattern1.webp"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                /> */}
            </motion.div>

            <motion.div
                className="absolute bottom-0 left-0 w-1/3 h-full opacity-10"
                style={{ y: y2, opacity }}
            >
                
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-7xl font-bold mb-4">
                        Vision & Mission
                    </h2>
                    <div className="h-1 w-24 bg-white mx-auto"></div>
                    <p className="mt-6 text-xl max-w-3xl mx-auto">
                        Building a bridge between traditional business practices and the
                        digital future through innovation, education, and strategic
                        development.
                    </p>
                </motion.div>
                <div className="flex md:flex-row flex-col gap-6 justify-between items-center">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-1 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {visionPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                            >
                                <div className="flex items-start">
                                    {/* <span className="text-4xl mr-4">{point.icon}</span> */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                                        <p className="text-white/80">{point.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <TiltedCard
                        imageSrc="/speaking/dgpodcast.webp"
                        altText=""
                        captionText="Deepak Goel Podcast"
                        containerHeight="450px"
                        containerWidth="450px"
                        imageHeight="500px"
                        imageWidth="250px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text"></p>
                        }
                    />
                </div>
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.button
                        className="px-8 py-3 bg-white text-[#5d7a64] rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn About Our Initiatives
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
