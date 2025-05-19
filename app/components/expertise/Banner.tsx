"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative w-full overflow-hidden">
            {/* Background image with parallax effect */}
            <div className="md:h-[120%] h-auto overflow-hidden">
                <div
                    className="relative w-full h-screen -mt-10"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px)`
                    }}
                >
                    <Image
                        src="/expertise/banner.webp"
                        alt="Expertise Banner"
                        fill
                        priority
                        className="object-cover object-center hidden md:block"
                        sizes="100vw"
                    />
                    <Image
                        src="/expertise/banner.webp"
                        alt="Expertise Banner"
                        fill
                        priority
                        className="object-cover object-[60%_40%] block md:hidden"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 mix-blend-multiply"></div>
                </div>
            </div>

            {/* Content overlay - left centered */}
            <div className="absolute top-0 w-full h-full flex items-center justify-start px-4 md:px-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="max-w-5xl"
                >
                    <motion.div
                        variants={childVariants}
                        className="mt-10"
                    >
                        <p className='text-white font-light text-xl'>MY</p>
                        <h1 className="text-4xl md:text-8xl text-white font-medium mb-6">
                             Expertise
                        </h1>
                        <h2 className="text-xl md:text-lg flex-wrap text-white font-light mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
                            Transforming businesses through<br/> innovative digital solutions
                        </h2>
                        <div className="">
                            <Image
                                src="/expertise/dgsignwhite.webp"
                                alt="Deepak Goel signature"
                                width={70}
                                height={60}
                                className="h-auto w-auto"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
