'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Senior Designer',
    image: '/images/testimonials/person1.webp',
    fallbackImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: "Joining this team has been the best career move I've made. The collaborative environment allows me to grow both personally and professionally. I feel valued and supported in pursuing innovative ideas.",
    years: '3 years at company'
  },
  {
    id: 2,
    name: 'Samantha Wells',
    role: 'Marketing Specialist',
    image: '/images/testimonials/person2.webp',
    fallbackImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: "What stands out to me is the perfect balance between autonomy and teamwork. I'm trusted to manage my projects while having access to brilliant colleagues who are always willing to collaborate and provide insights.",
    years: '2 years at company'
  },
  {
    id: 3,
    name: 'Michael Chang',
    role: 'Web Developer',
    image: '/images/testimonials/person3.webp',
    fallbackImage: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: "The learning opportunities here are incredible. I've been able to work with cutting-edge technologies and expand my skills in ways I couldn't have imagined. There's a genuine commitment to professional development.",
    years: '1.5 years at company'
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Content Strategist',
    image: '/images/testimonials/person4.webp',
    fallbackImage: 'https://randomuser.me/api/portraits/women/63.jpg',
    quote: "I appreciate how diverse our team is - both in backgrounds and thinking styles. This diversity leads to better ideas and more creative solutions. Plus, the flexible work policies show that the company truly respects work-life balance.",
    years: '4 years at company'
  }
]

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right' | null>(null)
  
  const nextTestimonial = useCallback(() => {
    setDirection('right')
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [])
  
  const prevTestimonial = useCallback(() => {
    setDirection('left')
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])
  
  // Auto-advance the carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial()
    }, 6000)
    
    return () => clearTimeout(timer)
  }, [activeIndex, nextTestimonial])
  
  const variants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Team</h2>
            <p className="text-lg text-gray-600">
              Don&apos;t just take our word for it. Learn what our team members have to say about working here.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Testimonial carousel */}
            <div className="relative overflow-hidden py-6 min-h-[380px]">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center"
              >
                {/* Testimonial image */}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mx-auto max-w-[280px]">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = testimonials[activeIndex].fallbackImage;
                      }}
                    />
                  </div>
                </div>
                
                {/* Testimonial content */}
                <div className="w-full md:w-2/3">
                  <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative">
                    <FaQuoteLeft className="text-red-500/20 text-5xl absolute -top-4 -left-2" />
                    
                    <p className="text-lg mb-6 italic text-gray-700 relative z-10">
                    &quot;{testimonials[activeIndex].quote}&quot;
                    </p>
                    
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-xl font-semibold">{testimonials[activeIndex].name}</h4>
                        <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                        <p className="text-sm text-gray-500 mt-1">{testimonials[activeIndex].years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow"
                aria-label="Previous testimonial"
              >
                <FaArrowLeft className="text-gray-700" />
              </motion.button>
              
              {/* Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 'right' : 'left')
                      setActiveIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index ? 'bg-red-500 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow"
                aria-label="Next testimonial"
              >
                <FaArrowRight className="text-gray-700" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel 