"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BsQuora } from "react-icons/bs";

const quoraUrl = 'https://www.quora.com/profile/Your-Quora-Profile';

const QuoraSection = () => {
  return (
    <section className="relative md:py-20 py-10 px-4 flex flex-col items-center justify-center overflow-hidden min-h-[600px]">
      {/* Modern animated background with glassmorphism and floating shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Large semi-transparent Quora logo in background */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-0 pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0.08,
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <Image src="/quora-logo.png" alt="Quora" width={400} height={400} className="select-none" />
      </motion.div>
      {/* Animated floating Quora logo (foreground) */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-6 z-10"
      >
        <BsQuora className="text-4xl md:text-5xl font-black text-[#b92b27] mb-4 text-center z-10" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-black text-[#b92b27] mb-4 text-center z-10"
      >
        Ask Us On Quora
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-sm md:text-lg text-gray-700 max-w-xl text-center mb-10 z-10"
      >
        Have questions or want to learn more? Visit our Quora page to ask, read answers, and join the conversation with our community!
      </motion.p>
      {/* Animated Button */}
      <motion.a
        href={quoraUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12, boxShadow: '0 8px 32px 0 rgba(185,43,39,0.18)' }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#b92b27] text-white font-bold text-sm md:text-lg shadow-lg transition-colors duration-300 hover:bg-[#a3201a] focus:outline-none focus:ring-4 focus:ring-[#b92b27]/30 z-10"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff"/><path d="M16.01 6C10.48 6 6 10.48 6 16c0 5.52 4.48 10 10.01 10 5.52 0 9.99-4.48 9.99-10 0-5.52-4.47-10-9.99-10zm.01 18.18c-4.51 0-8.18-3.67-8.18-8.18 0-4.51 3.67-8.18 8.18-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.18-8.18 8.18zm2.09-7.09c.41-.41.41-1.08 0-1.49l-2.09-2.09c-.41-.41-1.08-.41-1.49 0-.41.41-.41 1.08 0 1.49l1.34 1.34-1.34 1.34c-.41.41-.41 1.08 0 1.49.41.41 1.08.41 1.49 0l2.09-2.09z" fill="#b92b27"/></svg>
        Go to Quora
      </motion.a>
      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-[#b92b27]/20 rounded-full blur-3xl z-0"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 right-0 w-80 h-80 bg-[#b92b27]/10 rounded-full blur-3xl z-0"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default QuoraSection; 