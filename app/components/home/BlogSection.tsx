"use client";

import React from 'react';
import { FaPlay, } from 'react-icons/fa';
import Image from 'next/image';

const episodes = [
    
        {
          number: '#501',
          title: 'Disrupting Digital Branding: Deepak’s Vision for the Next Gen Entrepreneur',
          url: '#'
        },
        {
          number: '#502',
          title: 'From Employee to Entrepreneur: Deepak’s Global Journey in B2B & Digital Growth',
          url: '#'
        },
        {
          number: '#503',
          title: 'Building iMET Global: How Deepak is Transforming Education & MSMEs',
          url: '#'
        },
        {
          number: '#504',
          title: 'The Future of Personal & Celebrity Branding in the Digital Era',
          url: '#'
        },
        {
          number: '#505',
          title: 'Upskilling India: Deepak’s Role in Making Digital, Skill & Startup India a Reality',
          url: '#'
        }
      

];

export default function BlogSection() {
    return (
        <section className="bg-[#f8f3ee] ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row ">
                    {/* Left column - Image */}
                    <div className=" justify-center hidden md:flex">
                        <Image src="/home/dg.webp" alt="Blog" width={1000} height={100} className='object-contain object-bottom w-[250px]' />
                    </div>

                    {/* Right column - Episodes */}
                    <div className="py-16">
                        <p className="uppercase text-center tracking-wider text-lg font-semibold mb-8 text-[#5d7a64]">THE LATEST</p>

                        <div className="space-y-6">
                            {episodes.map((episode, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-start gap-4 group-hover:opacity-80 transition-opacity">
                                        <span className="text-[#5d7a64] font-medium text-sm pt-1">{episode.number}</span>
                                        <div className="flex-1">
                                            <h4 className="text-xl md:text-2xl font-serif font-bold">{episode.title}</h4>
                                        </div>
                                        <button
                                            className="flex-shrink-0 rounded-full bg-white w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
                                            aria-label={`Play episode ${episode.title}`}
                                        >
                                            <FaPlay className="text-black w-3 h-3" />
                                        </button>
                                    </div>
                                    {index < episodes.length - 1 && (
                                        <hr className="border-gray-300/50 my-6" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <button className="bg-[#5d7a64] text-white rounded-full py-3 px-8 font-medium hover:bg-[#6d2e20] transition-colors shadow-md">
                                View All Episodes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 