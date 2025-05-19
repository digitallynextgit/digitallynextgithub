"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

// Map Pin Icon
// const MapPinIcon = () => (
//     <div className="w-16 h-16 bg-[#5d7a64] rounded-full flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
//             <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//         </svg>
//     </div>
// );

// Email Icon
// const EmailIcon = () => (
//     <div className="w-16 h-16 bg-[#5d7a64] rounded-full flex items-center justify-center">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
//             <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//             <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
//         </svg>
//     </div>
// );

export default function ContactPage() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement your form submission logic here
        // For now, we'll just show the success state
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail("");
            setName("");
            setMessage("");
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-black">
                        <ArrowRightIcon className="rotate-180 mr-2" size={16} />
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="text-5xl font-bold mb-6">Book Free Consultation</h1>
                    <p className="text-lg mb-12 max-w-2xl text-gray-700">
                        Fill out the form below to schedule a free consultation with our experts. We&apos;ll get back to you within 24 hours.
                    </p>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        How can we help?
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                        placeholder="Tell us about your project or requirements"
                                    ></textarea>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-500">
                                        We&apos;ll respond within 24 hours
                                    </div>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-medium"
                                    >
                                        <span>Submit Request</span>
                                        <ArrowRightIcon size={18} />
                                    </motion.button>
                                </div>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-bold mb-3">Thank You!</h4>
                                <p className="text-gray-600 mb-8">
                                    We&apos;ve received your consultation request and will contact you shortly.
                                </p>
                                <Link href="/">
                                    <motion.div
                                        whileHover={{ scale: 1.03 }}
                                        className="inline-flex items-center text-black font-medium"
                                    >
                                        <span>Return to Homepage</span>
                                        <ArrowRightIcon className="ml-2" size={16} />
                                    </motion.div>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 