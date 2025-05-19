"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
    FaBriefcase, FaBuilding, FaGlobeAmericas, FaHistory, FaGraduationCap,
     FaBullseye, FaUsers, FaHandshake, 
    FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt
} from 'react-icons/fa';
// import { SiHexo, SiAdobe, SiAirbnb, SiApple, SiFuturelearn, SiIntel } from 'react-icons/si';

const Profile = () => {
    // const [activeCard, setActiveCard] = useState<number | null>(null);
    const controls = useAnimation();

    // Image paths - adjust these to your actual image paths
    // const imagePaths = {
    //     profile: "/expertise/dg-profile.jpg",
    //     banner: "/expertise/1.webp",
    //     corporate: "/expertise/2.webp",
    //     education: "/expertise/education.jpg",
    //     organizations: "/expertise/organizations.jpg",
    // };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    // const expandedCardVariants = {
    //     collapsed: {
    //         height: "auto",
    //         transition: { duration: 0.4, ease: "easeInOut" }
    //     },
    //     expanded: {
    //         height: "auto",
    //         transition: { duration: 0.4, ease: "easeInOut" }
    //     }
    // };

    const iconVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2
            }
        }
    };

    // const floatingAnimation = {
    //     initial: { y: 0 },
    //     animate: {
    //         y: [-5, 5, -5],
    //         transition: {
    //             repeat: Infinity,
    //             duration: 4,
    //             ease: "easeInOut"
    //         }
    //     }
    // };

    // const pulseAnimation = {
    //     initial: { scale: 1 },
    //     animate: {
    //         scale: [1, 1.05, 1],
    //         transition: {
    //             repeat: Infinity,
    //             duration: 2,
    //             ease: "easeInOut"
    //         }
    //     }
    // };

    // const shimmerAnimation = {
    //     initial: { backgroundPosition: "-500px 0" },
    //     animate: {
    //         backgroundPosition: ["500px 0", "-500px 0"],
    //         transition: {
    //             repeat: Infinity,
    //             duration: 2,
    //             ease: "linear"
    //         }
    //     }
    // };

    // Handle card toggle
    // const toggleCard = (index: number) => {
    //     if (activeCard === index) {
    //         setActiveCard(null);
    //     } else {
    //         setActiveCard(index);
    //     }
    // };

    // // Scroll animations with useScroll
    // const { scrollY } = useScroll();
    // const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    // const y2 = useTransform(scrollY, [0, 300], [0, 30]);
    // const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);

    // Scroll-triggered animation setup
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                controls.start("visible");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    // Function for ref-based scroll animations
    const useScrollAnimation = () => {
        const ref = React.useRef(null);
        const isInView = useInView(ref, { once: false, amount: 0.2 });

        useEffect(() => {
            if (isInView) {
                controls.start("visible");
            }
        }, [isInView, controls]);

        return ref;
    };

    // Stats for animated counters
    const stats = [
        { value: 16, label: "Years Experience" },
        { value: 100, label: "Projects Delivered" },
        { value: 34, label: "Countries Reached" },
    ];

    // Create refs for scroll animations
    const sectionRef = useScrollAnimation();

    // Counter animation component
    const Counter = ({ value, label }: { value: number; label: string }) => {
        const [count, setCount] = useState(0);
        const counterRef = React.useRef(null);
        const isInView = useInView(counterRef, { once: true });

        useEffect(() => {
            if (isInView) {
                let start = 0;
                const duration = 2000; // 2 seconds
                const increment = value / (duration / 16); // 16ms per frame

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= value) {
                        setCount(value);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 16);

                return () => clearInterval(timer);
            }
        }, [isInView, value]);

        return (
            <div ref={counterRef} className="text-center">
                <div className="text-4xl font-bold text-[#5d7a64]">{count}+</div>
                <div className="text-sm text-gray-600">{label}</div>
            </div>
        );
    };

    return (
        <section ref={sectionRef} className="py-16 bg-[#ece2d7] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Decorative elements */}
                <motion.div
                    className="absolute top-20 right-10 w-32 h-32 bg-[#5d7a64]/1 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-40 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Header */}
                <div className="text-center mb-12 relative">
                    <motion.h2
                        className="md:text-8xl text-6xl font-medium text-gray-900"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Professional Profile
                    </motion.h2>
                    <motion.div
                        className="w-24 h-1 bg-[#5d7a64] mx-auto mt-4 mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    />

                    {/* Stats counter section */}
                    <motion.div
                        className="flex justify-center gap-12 mt-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <Counter value={stat.value} label={stat.label} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-6 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Image - Large Card */}
                    <motion.div
                        className="md:col-span-2 bg-[#f9f9f9] rounded-xl overflow-hidden relative h-[250px]"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src="/dg.webp"
                                alt="Deepak Goel Profile"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="text-5xl font-bold ">Deepak Goel</h3>
                                    <p className="text-lg opacity-90">Digital Catalyst & Entrepreneur</p>

                                    <div className="flex mt-3 space-x-3">
                                        <motion.a
                                            href="#"
                                            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaLinkedin className="text-white" />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaEnvelope className="text-white" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Functional Area - Simple Card */}
                    <motion.div
                        className="md:col-span-4 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaBriefcase className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="md:text-4xl text-2xl font-semibold text-gray-900">Functional Areas</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Strategic Management</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>International Marketing (B2B)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Business Development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Bid Management</span>
                                </li>
                            </ul>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Sales Support/Pre-sales</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Key Account Management</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Corporate Communication</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Process Consulting</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Industry & Region - Side by Side */}
                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaBuilding className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Industry</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Internet/ Digital Media</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Professional Education</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>BPO & ITES</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>Software Services</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span>KPO/Consulting and Telecom</span>
                                </li>
                            </ul>
                            <div className="relative h-[170px] rounded-lg overflow-hidden group">
                                <Image
                                    src="/expertise/1.webp"
                                    alt="Industry"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-medium text-xl">Digital Media & IT</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaGlobeAmericas className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Region Wise</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span className="flex items-center">
                                        <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                        US- Irvine, CA
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span className="flex items-center">
                                        <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                        Chicago, IL
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span className="flex items-center">
                                        <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                        Houston, TX
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl">•</span>
                                    <span className="flex items-center">
                                        <FaMapMarkerAlt className="text-gray-500 mr-2" />
                                        India (Delhi/NCR, Mumbai, Pune)
                                    </span>
                                </li>
                            </ul>
                            <div className="relative h-[170px] rounded-lg overflow-hidden group">
                                <Image
                                    src="/expertise/2.webp"
                                    alt="Global Presence"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white font-medium text-xl">Global Presence</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Experience - Feature Card */}
                    <motion.div
                        className="md:col-span-6 bg-[#5d7a64] text-white rounded-xl p-6 overflow-hidden relative grid grid-cols-1 md:grid-cols-[70%_30%] items-center"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        {/* Left Side: Content */}
                        <div className="w-full pr-4">
                            <div className="flex items-center mb-4">
                                <motion.div
                                    className="bg-white/20 p-3 rounded-full mr-3"
                                    variants={iconVariants}
                                >
                                    <FaHistory className="text-white text-xl" />
                                </motion.div>
                                <h3 className="text-2xl font-semibold">Professional Experience</h3>
                            </div>
                            <p className="leading-relaxed">
                                16+ years of experience in Strategic, Tactical and Operational levels like Business Planning,
                                Marketing Models & Strategy, Campaign management, Sales, Process Consulting, Team management
                                and CoE building. International multi-cultural IT/BPO experience across US, EMEA & APac regions.
                            </p>
                        </div>

                        {/* Right Side: Image */}
                        <div className="relative h-[250px] rounded-lg overflow-hidden group">
                            <Image
                                src="/expertise/4.webp"
                                alt="Industry"
                                fill
                                className="object-contain transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-medium text-xl">Digital Media & IT</p>
                            </div>
                        </div>

                        {/* Rotating Background Orb */}
                        <motion.div
                            className="absolute -right-16 -bottom-16 w-40 h-40 rounded-full opacity-20"
                            initial={{ scale: 0.8, rotate: 0 }}
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)'
                            }}
                        />
                    </motion.div>


                    {/* Organizations */}
                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaHandshake className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Organizations</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    {
                                        name: "Advent Global Solutions",
                                        position: "Director- Business Strategy",
                                        // icon: <SiAdobe className="text-xl" />,
                                        url: "https://www.adventglobal.com"
                                    },
                                    {
                                        name: "Hexaware Technologies",
                                        position: "Director- Americas",
                                        // icon: <SiHexo className="text-xl" />,
                                        url: "https://www.hexaware.com"
                                    },
                                    {
                                        name: "Ariba Inc",
                                        position: "Sr Manager – Sales Operations",
                                        // icon: <SiAirbnb className="text-xl" />,
                                        url: "https://www.ariba.com"
                                    },
                                    {
                                        name: "QAI Asia",
                                        position: "Manager- Client Services",
                                        // icon: <SiApple className="text-xl" />,
                                        url: "https://www.qaiglobalinstitute.com"
                                    },
                                    {
                                        name: "Fujitsu Zensar",
                                        position: "Manager – International Marketing",
                                        // icon: <SiFuturelearn className="text-xl" />,
                                        url: "https://www.zensar.com"
                                    },
                                    {
                                        name: "Bharti Telecom – Airtel",
                                        position: "Customer Services",
                                        // icon: <SiIntel className="text-xl" />,
                                        url: "https://www.airtel.in"
                                    },
                                ].map((org, index) => (
                                    <motion.a
                                        key={index}
                                        href={org.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-[#5d7a64] transition-all duration-300"
                                        whileHover={{
                                            scale: 1.03,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >

                                        <div className="flex-grow">
                                            <h4 className="font-medium text-gray-900 flex items-center">
                                                {org.name}
                                                <FaExternalLinkAlt className="ml-2 text-xs text-gray-400" />
                                            </h4>
                                            <p className="text-sm text-gray-600">{org.position}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Key Focus Areas */}
                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaBullseye className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Key Focus Areas</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                {[
                                    "Personality Development",
                                    "Business Communication",
                                    "Process Integration",
                                    "Strategic Marketing",
                                    "Cultural Sensitization",
                                    "CRM",
                                    "Team Building",
                                    "Entrepreneurship",
                                    "Start-ups & SMEs"
                                ].map((area, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center bg-gray-100 rounded-md p-2"
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(93, 122, 100, 0.1)"
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="text-[#5d7a64] mr-2">•</span>
                                        <span className="text-sm">{area}</span>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                    {/* Qualifications */}
                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaGraduationCap className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Qualifications</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl mt-1">•</span>
                                    <div>
                                        <p className="font-medium">PGDM (Two years Full Time) Batch 2001-2003</p>
                                        <p className="text-sm text-gray-600">Symbiosis Centre for Management & HRD, Pune</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl mt-1">•</span>
                                    <div>
                                        <p className="font-medium">PG Diploma in Sales & Marketing (1996-98)</p>
                                        <p className="text-sm text-gray-600">National Institute of Sales, New Delhi</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#5d7a64] mr-3 text-xl mt-1">•</span>
                                    <div>
                                        <p className="font-medium">B.A. (Hons.) Economics (1995-1998)</p>
                                        <p className="text-sm text-gray-600">University Of Delhi, India</p>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </motion.div>

                    {/* Clients */}
                    <motion.div
                        className="md:col-span-3 bg-[#f9f9f9] rounded-xl p-6 overflow-hidden relative"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center mb-4">
                            <motion.div
                                className="bg-[#5d7a64]/10 p-3 rounded-full mr-3"
                                variants={iconVariants}
                            >
                                <FaUsers className="text-[#5d7a64] text-xl" />
                            </motion.div>
                            <h3 className="text-2xl font-semibold text-gray-900">Clients</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">Corporates</h4>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["WNS", "TechServ Consult", "Attainix", "InvestEdge", "Global Development Foundation"].map((client, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 rounded-full text-xs inline-block"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgba(93, 122, 100, 0.1)"
                                            }}
                                        >
                                            {client}
                                        </motion.span>
                                    ))}
                                </div>
                                <h4 className="font-medium text-gray-900 mb-2">Education Sector</h4>
                                <div className="flex flex-wrap gap-2">
                                    {[" Pune", "SCMLD, Pune", "ICSI- India", "ILI, Indore", "Disha Group"].map((client, index) => (
                                        <motion.span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 rounded-full text-xs inline-block"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: "rgba(93, 122, 100, 0.1)"
                                            }}
                                        >
                                            {client}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Profile; 