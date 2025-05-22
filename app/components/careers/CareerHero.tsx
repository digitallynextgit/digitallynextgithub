'use client'

import { useEffect, useRef } from 'react'
// import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import TypeWriter from './TypeWriter'
import SquareBg from './SquareBg'

// Typewriter text data
const typewriterTexts = [
  { strike: "follow", highlight: "Speak up" },
  { strike: "agree", highlight: "Innovate" },
  { strike: "conform", highlight: "Create" },
  { strike: "settle", highlight: "Excel" },
]

const CareerHero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)
  
  // GSAP animation for floating elements
  useEffect(() => {
    if (!backgroundRef.current) return
    
    const elements = backgroundRef.current.querySelectorAll('.floating-element')
    
    elements.forEach((el) => {
      const randomDelay = Math.random() * 2
      const randomDuration = 3 + Math.random() * 2
      
      gsap.to(el, {
        y: '30px', 
        duration: randomDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: randomDelay
      })
    })
    
    return () => {
      gsap.killTweensOf(elements)
    }
  }, [])

  return (
    <div className="relative bg-white text-black overflow-hidden">
      {/* Square Background */}
      <div className="absolute inset-0 opacity-20">
        <SquareBg 
          direction="diagonal" 
          speed={0.5} 
          borderColor="rgba(239, 68, 68, 0.3)" 
          squareSize={60}
          hoverFillColor="rgba(239, 68, 68, 0.2)"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-[8vw] md:text-[5vw] font-bold tracking-tight">
              Join us if you can
            </h1>

            {/* Typewriter section */}
            <div className="text-[6vw] md:text-[5vw] font-bold text-center text-red-600 min-h-[8vw] md:min-h-[3vw]">
              <TypeWriter texts={typewriterTexts} />
            </div>
            
            <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto text-gray-900">
              We&apos;re looking for bold thinkers and creative problem solvers ready to make an impact.
              Join our mission to create exceptional digital experiences that make a difference.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 text-white"
              >
                Explore Positions
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent border-2 border-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Our Culture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default CareerHero 