"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would usually handle the form submission with API call
        console.log('Form submitted with:', { name, email });
        setSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
    };

    return (
        <section className="py-16 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto  ">
                <div className="text-left mb-12">
                    <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
                        As you might have heard, though I run digital ventures — I spend as much time offline as humanly possible. If we&apos;re not connected on <a href="https://www.instagram.com/" className="text-[#f75d34] hover:underline">Instagram</a> yet, c&apos;mon over. And if you want the inside scoop, our Insider&apos;s list is where it&apos;s at. Most of the time, you&apos;ll only hear from me on Tuesdays; more if something is time-sensitive or important.
                    </p>
                    <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
                        Plus, you&apos;ll get a fantastic (and free) audio training called <span className="text-[#f75d34] font-medium">How To Navigate Digital Success: 3 Strategies To Find The Clarity & Confidence To Excel Digitally</span> as soon as you subscribe.
                    </p>
                </div>

                <div className="bg-[#f8f3ee] rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 p-2">
                        {/* Left Column - Form */}
                        <div className="p-4 md:p-12">
                            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-gray-900">
                                You&apos;re Going to LOVE this Free Training.
                            </h2>
                            <p className="mb-8 md:text-lg">
                                Download this FREE audio training to learn <strong>3 simple strategies</strong> that&apos;ll give you the clarity and confidence to build your digital presence, on your terms.
                            </p>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#f75d34] focus:border-[#f75d34]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Enter Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#f75d34] focus:border-[#f75d34]"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#f2e18a] hover:bg-[#e9d870] text-black font-bold py-4 px-6 rounded-md transition duration-300 uppercase"
                                    >
                                        YES, PLEASE
                                    </button>
                                    <p className="text-xs text-gray-600 mt-4">
                                        By entering your info, you&apos;ll become an &apos;DG Insider&apos; with FREE access to exclusive insights, growth strategies, and inspiring stories delivered with ♥ to your inbox.
                                        Email anytime to unsubscribe. You also agree to our <a href="/terms" className="underline">Terms of Use</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 p-6 rounded-lg border border-green-200"
                                >
                                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                                    <p className="text-green-600">
                                        Check your email for your free training. If you don&apos;t see it, please check your spam folder.
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative h-80 lg:h-auto flex items-end justify-end">
                            <div className="absolute inset-0 ">
                                <Image src="/about/podcastdg.webp" alt="Deepak Goel speaking at an event" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-left">
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        It&apos;ll walk you through the fundamentals of turning your digital dreams into reality while building a deeply rich and meaningful online presence. Can&apos;t wait for you to listen.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-800 mb-6">
                        Thank you so much for taking the time to visit. I&apos;m thrilled we&apos;re connected and I&apos;m excited for the journey ahead.
                    </p>
                    <div className="mt-8">
                        <p className="text-lg text-gray-800">With all my best,</p>
                        <div className="mt-4 flex justify-center">
                            <Image
                                src="/about/dgsign.webp"
                                alt="Deepak Goel signature"
                                width={160}
                                height={60}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe; 