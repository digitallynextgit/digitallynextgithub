'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

// Culture values data
const values = [
  {
    title: 'Innovation',
    description: 'We embrace creative thinking and push boundaries to deliver exceptional results.',
    image: '/office/1.png',
    fallback: '/office/1.png'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and collective expertise to solve complex challenges.',
    image: '/office/7.webp',
    fallback: '/office/2.png'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, never settling for mediocrity.',
    image: '/office/6.png',
    fallback: '/office/3.png'
  },
  {
    title: 'Growth Mindset',
    description: 'We embrace challenges, persist in the face of setbacks, and see effort as the path to mastery.',
    image: '/office/4.png',
    fallback: '/office/4.png'
  }
]

const CultureSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Culture</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;ve built a workplace where creativity thrives, collaboration is celebrated, 
            and growth is part of everyday life.
          </p>
        </motion.div>
        
        {/* Values section */}
        <div ref={ref} className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = value.fallback;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Culture spotlight */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          
          <div className="relative h-[500px]">
            <Image
              src="/office/3.png"
              alt="Our team culture"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/office/2.png";
              }}
            />
          </div>
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                A Place Where You Belong
              </h2>
              <p className="text-lg text-gray-200 mb-8">
                We&apos;ve created an environment where everyone&apos;s voice matters, diversity is celebrated, 
                and you can bring your authentic self to work every day.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </div>
        
        {/* Work environment */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              A Collaborative Environment
            </h3>
            <p className="text-gray-600 mb-6">
              We believe that the best ideas come from collaboration. Our open workspace and 
              inclusive culture encourage sharing thoughts freely and working together to solve challenges.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Regular team building activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Open communication across all levels</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Cross-functional projects to expand your skills</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Mentorship opportunities at all career stages</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/office/5.png"
              alt="Our workspace"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1600508773248-6696fb0704be?ixlib=rb-4.0.3";
              }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply opacity-60 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CultureSection 