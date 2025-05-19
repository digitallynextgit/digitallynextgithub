"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Folder from '@/components/reactbits/folder';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Know = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [, setIsSmallMobile] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        { src: "/about/dg1.webp", alt: "Document 1" },
        { src: "/about/dd2.webp", alt: "Document 2" },
        { src: "/about/dd3.webp", alt: "Document 3" },
        { src: "/about/dd4.webp", alt: "Document 4" },


    ];

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsSmallMobile(window.innerWidth < 480);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        // Prevent scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        // Restore scrolling
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        } else {
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            navigateImage('next');
        } else if (e.key === 'ArrowLeft') {
            navigateImage('prev');
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };



    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                >
                    <div className="lg:col-span-7">
                        <motion.p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
                            Deepak Goel is a New Gen INDIAN Entrepreneur venturing his way as a catalyst in building a better Digital Social Media Enabled world.
                        </motion.p>

                        <motion.p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
                            He is the strategic driver of <span className="text-[#f75d34] font-medium">Digitally Next</span>, disrupting the Digital Social Media agency space by enabling Digital Branding, Demand Generation and Personal/Celebrity Branding for Startups, Self-Employed professionals, and Big Corporations alike.
                        </motion.p>

                        <motion.p className="text-lg md:text-xl mb-10 leading-relaxed text-gray-800">
                            Deepak also pioneers profitable, industry-specific business up-skilling by creating a collaborative Centre of Excellence – <span className="text-[#f75d34] font-medium">iMET Global</span>. iMET supports the Government&apos;s vision of <span className="font-semibold">Digital India, Skill India, and Make in India</span>.
                        </motion.p>

                        <motion.ul className="mb-10 space-y-6">
                            <li className="flex items-start">
                                <span className="text-[#f75d34] mr-2 text-xl mt-1">•</span>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                                    An Economics graduate from Delhi University and MBA from Symbiosis (SCMHRD, Pune), Deepak has 18+ years of B2B experience across India, US, Canada & Europe in IT, Consulting, and BPO sectors.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#f75d34] mr-2 text-xl mt-1">•</span>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                                    He is building India&apos;s largest community for IoT & Big Data under <span className="text-[#f75d34] font-medium">iSoCIAL</span> with a reach of 34,000+ entities and individuals.
                                </p>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#f75d34] mr-2 text-xl mt-1">•</span>
                                <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                                    He&apos;s a spiritual explorer and a firm believer in <span className="text-[#f75d34] font-medium">Destiny&apos;s Connect & Cosmic Law of Attraction</span>, having undergone journeys through Vipassana, Art of Living, and more.
                                </p>
                            </li>
                        </motion.ul>

                        <motion.p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
                            A recipient of an Honorary Life Membership at the International Film and Television Club, Deepak is a sought-after mentor and speaker at IIMs, IITs, ISB, FICCI, CII, and several startups and SME platforms.
                        </motion.p>
                    </div>

                    <div className="lg:col-span-5 flex flex-col">
                        <motion.div className="bg-gray-100 p-8 md:p-10 rounded-xl mb-10">
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="flex-1">
                                    <p className="text-lg mb-6 leading-relaxed text-gray-800">
                                        Born and brought up in Delhi, Deepak&apos;s upbringing was rooted in traditional values and limitless aspirations.
                                    </p>

                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-gray-900 leading-tight">
                                    &quot;Everything is Figureoutable.&quot;
                                    </h3>

                                    <p className="text-lg leading-relaxed text-gray-800">
                                        This philosophy has driven him to impact lives, grow ecosystems, and disrupt digital narratives across the globe with passion and purpose.
                                    </p>
                                </div>

                                <div className="mt-6 md:mt-0">
                                    {/* <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg">
                                        <Image
                                            src="/about/young-deepak.jpg"
                                            alt="Young Deepak"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 128px, 160px"
                                        />
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="bg-gray-100 rounded-2xl flex justify-center items-center md:mt-44 mt-16" style={{ height: '150px' }}>
                            <Folder
                                size={isMobile ? 2 : 3}
                                color="#00d8ff"
                                className="custom-folder"
                                items={[
                                    <div
                                        key="img1"
                                        className="w-full h-full rounded-md overflow-hidden cursor-pointer"
                                        onClick={() => openLightbox(0)}
                                    >
                                        <Image
                                            src={images[0].src}
                                            alt={images[0].alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>,
                                    <div
                                        key="img2"
                                        className="w-full h-full rounded-md overflow-hidden cursor-pointer"
                                        onClick={() => openLightbox(1)}
                                    >
                                        <Image
                                            src={images[1].src}
                                            alt={images[1].alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>,
                                    <div
                                        key="img3"
                                        className="w-full h-full rounded-md overflow-hidden cursor-pointer"
                                        onClick={() => openLightbox(2)}
                                    >
                                        <Image
                                            src={images[2].src}
                                            alt={images[2].alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ]}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full h-[80vh] flex flex-col justify-center items-center"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 1024px) 90vw, 1200px"
                                    priority
                                />
                            </div>

                            {/* Navigation Controls */}
                            <button
                                className="absolute left-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('prev');
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={30} />
                            </button>

                            <button
                                className="absolute right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigateImage('next');
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={30} />
                            </button>

                            <button
                                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeLightbox();
                                }}
                                aria-label="Close lightbox"
                            >
                                <X size={24} />
                            </button>

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                                            }`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(index);
                                        }}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Know;
