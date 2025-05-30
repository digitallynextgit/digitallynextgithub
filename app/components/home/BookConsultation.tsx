'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ConsultationForm from '@/app/components/contact/ConsultationForm';

const projects = [
  
    {
      name: 'Small/Medium Business',
      tags: 'Branding + UX/UI + Mobile App',
      img: '/home/consultation/1.webp',
      index: 0,
      desc: 'Crafted user-centric mobile applications that simplify internal workflows and customer engagement for SMBs.',
    },
    {
      name: "MNC's",
      tags: 'UX Strategy + Enterprise Web + Next.js',
      img: '/home/consultation/2.webp',
      index: 1,
      desc: 'Delivered scalable enterprise-grade platforms tailored for global collaboration, learning, and process efficiency.',
    },
    {
      name: 'Education Entity',
      tags: 'EdTech + UI Design',
      img: '/home/consultation/3.webp',
      index: 2,
      desc: 'Developed digital tools and engaging print materials to elevate academic accessibility and learner experience.',
    },
    {
      name: 'Startups',
      tags: 'UX/UI + Web App',
      img: '/home/consultation/4.webp',
      index: 3,
      desc: 'Built rapid MVPs with intuitive interfaces and branding to help startups launch and iterate quickly.',
    },
    {
      name: 'Portfolio Making',
      tags: 'B2C + B2B + D2C',
      img: '/home/consultation/5.webp',
      index: 4,
      desc: 'Created visually compelling and responsive portfolio sites to highlight individual talent and creative work.',
    },
    {
      name: 'Self-Employed',
      tags: 'Web Presence + Optimization',
      img: '/home/consultation/6.webp',
      index: 5,
      desc: 'Empowered solo entrepreneurs with digital platforms to showcase services, attract clients, and scale their work.',
    }
];

const BookConsultation = () => {
  // App colors
  const appColors = {
    blue: '#00D6E8',
    red: '#D7173B'
  };
  
  // State to control the popup modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  
  // Function to open the modal with a specific service
  const openModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="bg-white py-10 px-4">
      <div className="text-center mb-5">
        <h1 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight">Book</h1>
        <h2 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight text-[#231942]">
          <span className="text-[#231942]">A </span>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #231942' }}>Consultation</span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#231942] max-w-xl mx-auto">Book a consultation with our experts to discover how we can help you achieve your goals. Our team specializes in a variety of fields to ensure your success.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {projects.map((p, index) => (
          <div
            key={p.name}
            className="relative flex items-center group cursor-pointer"
            onClick={() => openModal(p.name)}
          >
            {/* Content with enhanced animations */}
            <div 
              className="relative z-10 text-left p-8 w-full h-[450px] flex flex-col justify-between transition-all duration-500 ease-in-out group-hover:scale-105 shadow-lg rounded-lg"
              style={{ 
                backgroundColor: index % 2 === 0 ? appColors.red : appColors.blue,
              }}
            >
              <div className="overflow-hidden rounded-lg h-[200px] transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className={`mt-4 mb-2 font-bold text-2xl transition-colors duration-300 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>{p.name}</h3>
                <p className={`text-sm mb-2 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 ease-in-out ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>{p.desc}</p>
                <div className={`text-xs font-semibold tracking-wider inline-block px-3 py-1 rounded-full ${index % 2 === 0 ? 'text-white bg-black/20' : 'text-black bg-white/20'}`}>{p.tags}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Consultation Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className="p-6 relative">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h2 className="text-2xl font-bold text-[#d90429] mb-4">Book a Consultation</h2>
                <p className="text-gray-600 mb-6">
                  {selectedService ? `Get expert advice for ${selectedService}` : 'Get expert advice for your business needs'}
                </p>
                
                <div className="bg-white rounded-lg">
                  <ConsultationForm />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookConsultation;