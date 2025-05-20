"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      console.log(formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      alert("Thank you for your message. We'll get back to you soon!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
          className="w-full px-5 py-4 bg-gray-50 rounded-xl text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 shadow-sm transition-all"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full px-5 py-4 bg-gray-50 rounded-xl text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 shadow-sm transition-all"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-5 py-4 bg-gray-50 rounded-xl text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 shadow-sm transition-all"
        />
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full px-5 py-4 bg-gray-50 rounded-xl text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 shadow-sm transition-all"
        />
      </div>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder="Message"
        className="w-full px-5 py-4 bg-gray-50 rounded-xl text-base font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 shadow-sm transition-all resize-none"
      />
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full text-lg font-bold transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#d90429] border-0 ${
          isSubmitting
            ? 'bg-[#f87171] text-white cursor-not-allowed'
            : 'bg-[#d90429] text-white hover:bg-[#b90323] cursor-pointer'
        }`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
        </svg>
      </motion.button>
    </form>
  );
};

export default ConsultationForm; 