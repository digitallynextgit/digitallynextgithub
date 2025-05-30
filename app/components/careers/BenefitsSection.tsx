'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { 
  // FaLaptop, 
  FaCalendarAlt, 
  FaBriefcaseMedical, 
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  // FaPlane,
  FaCoffee
} from 'react-icons/fa'

const benefits = [
  // {
  //   icon: <FaLaptop className="text-3xl text-red-500" />,
  //   title: 'Remote Work Options',
  //   description: 'Work from anywhere with our flexible remote options'
  // },
  {
    icon: <FaCalendarAlt className="text-3xl text-red-500" />,
    title: 'Flexible Schedule',
    description: 'Design your workday around your productivity peaks'
  },
  {
    icon: <FaBriefcaseMedical className="text-3xl text-red-500" />,
    title: 'Health Benefits',
    description: 'Comprehensive medical, dental and vision coverage'
  },
  {
    icon: <FaGraduationCap className="text-3xl text-red-500" />,
    title: 'Professional Development',
    description: 'Continuous learning opportunities and skill advancement'
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: 'Growth Opportunities',
    description: 'Clear career paths and advancement options'
  },
  {
    icon: <FaUsers className="text-3xl text-red-500" />,
    title: 'Collaborative Culture',
    description: 'Work with passionate teammates who inspire each other'
  },
  // {
  //   icon: <FaPlane className="text-3xl text-red-500" />,
  //   title: 'Paid Time Off',
  //   description: 'Generous vacation policy to rest and recharge'
  // },
  {
    icon: <FaCoffee className="text-3xl text-red-500" />,
    title: 'Work-Life Balance',
    description: 'We prioritize your wellbeing and personal time'
  }
]

const BenefitsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We believe in taking care of our team members to help them perform at their best.
              Here&apos;s what you can expect when you join our team.
            </p>
          </motion.div>
        </div>
        
        <div ref={ref} className="relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 duration-300"
              >
                <div className="mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-red-50 to-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
        
        {/* Additional benefits highlight */}
        <div className="mt-24 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">We invest in your growth</h3>
                <p className="mb-6 text-gray-200">
                  Our team members are our greatest asset. We&apos;re committed to providing a supportive environment
                  where you can thrive professionally and personally.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Mentorship programs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Leadership development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Conference attendance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Educational stipends</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="aspect-video md:aspect-auto md:h-full relative">
                <Image
                  src="/images/benefits-team.webp"
                  fill
                  alt="Team collaboration"
                  className="object-cover"
                  onError={(e) => {
                    // Fallback image
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection 