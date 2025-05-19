'use client';

import React, { useEffect, useState } from 'react';
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
// import { ShimmerButton } from "@/components/magicui/shimmer-button";

// Client-only Email Input Component
const ClientEmailInput = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-full h-[50px] bg-gray-100 rounded-md"></div>;

    return (
        <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d7a64]"
        />
    );
};

const Info = () => {
    return (
        <section className="md:py-4 py-2 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">


                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className=" p-6  relative z-10">
                            <div className="absolute md:top-4 top-28 md:left-20 left-2  bg-[#d4a418] text-dark-color font-bold md:text-sm text-lg py-2 px-4 rounded-full uppercase transform -rotate-12 z-50">
                                Free Masterclass
                            </div>

                            {/* Replace with actual image */}
                            <div className="relative">
                                <Iphone15Pro className='w-[320px] md:w-[500px] md:h-[600px] z-[-20]' videoSrc="/home/class.mp4" />
                            </div>

                            <div className="flex justify-between items-center rounded-xl bg-white p-4 mt-[-150px] relative z-50 md:w-[60%] w-[90%] shadow-md">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">Digital Strategy Guide</h3>
                                    <p className="text-gray-600">30-minute audio + worksheet</p>
                                </div>

                                <button className="bg-[#5d7a64] text-white rounded-full w-12 h-12 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-16 md:right-24 -right-6 w-40 h-40 bg-[#5d7a64] opacity-30 rounded-full"></div>
                        <div className="absolute bottom-8 left-8 w-24 h-24 bg-[#d4a418] opacity-20 rounded"></div>
                    </div>

                    {/* Right Column - Content */}
                    <div className='p-4'>
                        <h2 className="text-5xl md:text-[40px] leading-[45px] font-medium mb-8 ">
                            Learn How to Succeed in <span className="highlight-text md:text-[80px] leading-[85px]">Digital World</span>
                        </h2>

                        <p className="text-md mb-8">
                            Join Deepak&apos;s exclusive masterclass and learn the 3 key strategies that will transform your digital presence.
                        </p>

                        {/* Form */}
                        <div className="space-y-4 mb-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5d7a64]"
                            />

                            <ClientEmailInput />

                            <button className="w-full text-white bg-[#d4a418] hover:bg-[#c09416] text-dark-color font-bold py-4 px-6 rounded-md transition-all duration-300 uppercase">
                                GET INSTANT ACCESS
                            </button>
                        </div>

                        <p className="text-sm text-gray-600">
                            By entering your info, you&apos;ll become a DN Insider with FREE access to exclusive insights, digital strategy tips, and inspiring case studies delivered with ❤️ to your inbox. (Unsubscribe anytime with a click.) You also agree to our Terms of Use and Privacy Policy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info; 